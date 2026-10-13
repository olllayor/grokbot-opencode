import {
  rpcObject,
  type EdgeDeclaration,
  type StandardSchema,
} from "./schema.js";
export interface Failure {
  code: string;
  detail: string;
}
export type Envelope<T = unknown> =
  | { ok: true; value: T }
  | { ok: false; failure: Failure };
export class EdgeCallFailure extends Error {
  readonly code: string;
  readonly detail: string;
  constructor(failure: Failure) {
    super(`${failure.code}: ${failure.detail}`);
    this.name = "EdgeCallFailure";
    this.code = failure.code;
    this.detail = failure.detail;
  }
}
export class EdgeTrustPolicyMissingError extends Error {
  constructor(edge: string, method: string, trust: string) {
    super(
      `serveEdge(${edge}): "${method}" names undeclared trust policy "${trust}".`,
    );
    this.name = "EdgeTrustPolicyMissingError";
  }
}
export const methodChannel = (edge: string, method: string): string =>
  `dune-rpc:${edge}:m:${method}`;
export const eventChannel = (edge: string, event: string): string =>
  `dune-rpc:${edge}:e:${event}`;
export const probeChannel = (edge: string): string => `dune-rpc:${edge}:probe`;
function truncate(value: string, length: number): string {
  return value.length <= length ? value : `${value.slice(0, length)}\u2026`;
}
function issuePath(path: unknown): string {
  if (!Array.isArray(path)) return "args";
  let result = "args";
  for (const segment of path) {
    const key =
      typeof segment === "object" && segment !== null ? segment.key : segment;
    result += typeof key === "number" ? `[${key}]` : `.${String(key)}`;
    if (result.length > 120) break;
  }
  return truncate(result, 120);
}
function issueDetail(method: string, issues: unknown[]): string | null {
  const first = issues[0];
  if (typeof first !== "object" || first === null) return null;
  const issue = first as { message?: unknown; path?: unknown };
  if (typeof issue.message !== "string") return null;
  return `${method}: ${issuePath(issue.path)}: ${truncate(issue.message, 200)}${issues.length > 1 ? ` (+${issues.length - 1} more)` : ""}`;
}
function validatorFailure(
  method: string,
  reason: "threw" | "malformed",
): Envelope<never> {
  return {
    ok: false,
    failure: {
      code: "edge/validator-failed",
      detail:
        reason === "threw"
          ? `${method}: the args validator threw`
          : `${method}: the args validator returned a malformed result`,
    },
  };
}
export async function validateArguments(
  method: string,
  validate: StandardSchema["~standard"]["validate"],
  payload: unknown,
): Promise<Envelope> {
  let result: unknown;
  try {
    result = await validate(payload);
  } catch {
    return validatorFailure(method, "threw");
  }
  try {
    if (typeof result !== "object" || result === null)
      return validatorFailure(method, "malformed");
    const candidate = result as { issues?: unknown; value?: unknown };
    if (candidate.issues == null)
      return Object.hasOwn(candidate, "value")
        ? { ok: true, value: candidate.value }
        : validatorFailure(method, "malformed");
    if (!Array.isArray(candidate.issues) || candidate.issues.length === 0)
      return validatorFailure(method, "malformed");
    const detail = issueDetail(method, candidate.issues);
    return detail === null
      ? validatorFailure(method, "malformed")
      : { ok: false, failure: { code: "edge/invalid-args", detail } };
  } catch {
    return validatorFailure(method, "malformed");
  }
}
export function probeMethod(
  edge: string,
  methods: Set<string>,
  payload: unknown,
): Envelope<boolean> {
  return typeof payload !== "string"
    ? {
        ok: false,
        failure: {
          code: "edge/invalid-args",
          detail: "probe: the payload must be a method name.",
        },
      }
    : methods.has(payload)
      ? { ok: true, value: true }
      : {
          ok: false,
          failure: {
            code: "edge/unknown-method",
            detail: `${truncate(payload, 200)}: the ${edge} edge does not serve this method.`,
          },
        };
}
export type TrustPolicy<Sender> =
  | { kind: "require"; test(sender: Sender): boolean; denial: string }
  | { kind: "allow" };
export interface HandlerContext {
  fail(code: string, detail: string): EdgeCallFailure;
}
export interface Handler<Sender> {
  trust: string;
  run(
    args: unknown,
    sender: Sender,
    context: HandlerContext,
  ): unknown | Promise<unknown>;
}
export interface ServerTransport<Sender> {
  handle(
    channel: string,
    handler: (sender: Sender, args: unknown) => Promise<Envelope>,
  ): void;
  removeHandler(channel: string): void;
  broadcast(channel: string, payload: unknown): void;
}
export interface ServerOptions<Sender> {
  handlers: Record<string, Handler<Sender>>;
  trust: Record<string, TrustPolicy<Sender>>;
  transport: ServerTransport<Sender>;
  report?(denial: { method: string; trust: string }): void;
}
export function trustHandlers<Sender>(
  trust: string,
  handlers: Record<string, Handler<Sender>["run"]>,
): Record<string, Handler<Sender>> {
  return Object.fromEntries(
    Object.entries(handlers).map(([method, run]) => [method, { trust, run }]),
  );
}
export function isEdgeFailure(
  _declaration: unknown,
  value: unknown,
): value is EdgeCallFailure {
  return value instanceof EdgeCallFailure;
}
export function failureFactory(_declaration?: unknown): HandlerContext["fail"] {
  return (code, detail) => new EdgeCallFailure({ code, detail });
}
export interface ServedMethod {
  method: string;
  validate: StandardSchema["~standard"]["validate"] | null;
}
export function serveMethods<Sender>(
  edge: string,
  methods: ServedMethod[],
  options: ServerOptions<Sender>,
) {
  const context: HandlerContext = { fail: failureFactory() },
    channels: string[] = [];
  for (const { method, validate } of methods) {
    const handler = options.handlers[method];
    if (handler == null)
      throw new EdgeTrustPolicyMissingError(edge, method, "<missing handler>");
    const trust = options.trust[handler.trust];
    if (trust == null)
      throw new EdgeTrustPolicyMissingError(edge, method, handler.trust);
    const channel = methodChannel(edge, method);
    channels.push(channel);
    options.transport.handle(channel, async (sender, payload) => {
      if (trust.kind === "require" && !trust.test(sender)) {
        options.report?.({ method, trust: handler.trust });
        return {
          ok: false,
          failure: { code: "edge/untrusted-sender", detail: trust.denial },
        };
      }
      let args = payload;
      if (validate !== null) {
        const result = await validateArguments(method, validate, payload);
        if (!result.ok) return { ok: false, failure: result.failure };
        args = result.value;
      }
      try {
        return { ok: true, value: await handler.run(args, sender, context) };
      } catch (error) {
        return {
          ok: false,
          failure:
            error instanceof EdgeCallFailure
              ? { code: error.code, detail: error.detail }
              : {
                  code: "edge/handler-failed",
                  detail:
                    error instanceof Error ? error.message : String(error),
                },
        };
      }
    });
  }
  const probe = probeChannel(edge);
  channels.push(probe);
  const names = new Set(methods.map((entry) => entry.method));
  options.transport.handle(probe, async (_sender, payload) =>
    probeMethod(edge, names, payload),
  );
  let disposed = false;
  return {
    emit(event: string, payload: unknown) {
      options.transport.broadcast(eventChannel(edge, event), payload);
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      for (const channel of channels) options.transport.removeHandler(channel);
    },
  };
}
const noArguments = rpcObject({});
export function serveEdge<Sender>(
  declaration: EdgeDeclaration,
  options: ServerOptions<Sender>,
) {
  const methods = Object.entries(declaration.methods).map(
    ([method, { schema }]) => ({
      method,
      validate: (schema ?? noArguments)["~standard"].validate,
    }),
  );
  const served = serveMethods(declaration.edge, methods, options);
  const hook = (
    globalThis as typeof globalThis & {
      __DUNE_DEVTOOLS_HOOK__?: {
        version: number;
        register?: (entry: unknown) => void;
      };
    }
  ).__DUNE_DEVTOOLS_HOOK__;
  if (hook?.version === 1 && typeof hook.register === "function")
    hook.register({
      kind: "rpc-edge",
      role: "serve",
      declaration,
      trust: Object.keys(options.trust),
    });
  return served;
}

/** Mirrors the shipped Sl() higher-order trust assignment API. */
export function trustHandlerFactory<Sender>() {
  return (trust: string, handlers: Record<string, Handler<Sender>["run"]>) =>
    trustHandlers(trust, handlers);
}
