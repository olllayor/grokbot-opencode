import { contextBridge, ipcRenderer } from "electron";
export interface MountTarget {
  agentId: string;
  name: string;
  markSvgDataUrl: string;
}
export interface DesktopMountBridge {
  mount(target: MountTarget): Promise<unknown>;
  unmount(): Promise<unknown>;
  offerChoices(args: { choices: MountTarget[] }): Promise<unknown>;
  read(): Promise<unknown>;
  readChoices(): Promise<unknown>;
  submitPrompt(args: { prompt: string }): Promise<unknown>;
  switchTo(args: { agentId: string }): Promise<unknown>;
  reachForMenu(args: { heightPx: number }): Promise<unknown>;
  movePanel(args: { dx: number; dy: number }): Promise<unknown>;
  endPanelMove(): Promise<unknown>;
  subscribe(
    listeners: Record<string, ((payload: unknown) => void) | null | undefined>,
  ): () => void;
}
export class EdgeCallFailure extends Error {
  readonly code: string;
  readonly detail: string;
  constructor(failure: { code: string; detail: string }) {
    super(`${failure.code}: ${failure.detail}`);
    this.name = "EdgeCallFailure";
    this.code = failure.code;
    this.detail = failure.detail;
  }
}
const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);
const nonblank = (value: unknown) =>
  typeof value === "string" && value.trim().length > 0;
const svg = (value: unknown) =>
  typeof value === "string" &&
  value.startsWith("data:image/svg+xml") &&
  value.length <= 65536;
export const mountValidators = {
  agentId: nonblank,
  name: nonblank,
  markSvgDataUrl: svg,
  choices: (value: unknown) =>
    Array.isArray(value) &&
    value.length <= 64 &&
    value.every(
      (target) =>
        isRecord(target) &&
        nonblank(target.agentId) &&
        nonblank(target.name) &&
        svg(target.markSvgDataUrl),
    ),
  heightPx: (value: unknown) =>
    typeof value === "number" &&
    Number.isInteger(value) &&
    value >= 0 &&
    value <= 640,
  dx: (value: unknown) =>
    typeof value === "number" &&
    Number.isInteger(value) &&
    Math.abs(value) <= 16384,
  dy: (value: unknown) =>
    typeof value === "number" &&
    Number.isInteger(value) &&
    Math.abs(value) <= 16384,
  prompt: (value: unknown) =>
    typeof value === "string" && value.trim().length > 0,
};
type Check =
  | { ok: true; value: unknown }
  | { ok: false; path: string[]; expected: string; received: string };
interface Schema {
  expects: "object";
  check(value: unknown, path: string[]): Check;
  "~standard": {
    version: 1;
    vendor: "dune";
    validate(
      value: unknown,
    ): { value: unknown } | { issues: { message: string; path: string[] }[] };
  };
}
const received = (value: unknown) =>
  value === null ? "null" : Array.isArray(value) ? "array" : typeof value;
function schema(
  fields: Record<
    string,
    { expects: string; check(value: unknown): unknown | undefined }
  >,
): Schema {
  const check = (input: unknown, path: string[]): Check => {
    if (!isRecord(input))
      return { ok: false, path, expected: "object", received: received(input) };
    const output: Record<string, unknown> = {};
    for (const [key, field] of Object.entries(fields)) {
      const value = Object.hasOwn(input, key) ? input[key] : undefined;
      const checked = field.check(value);
      if (checked === undefined)
        return {
          ok: false,
          path: [...path, key],
          expected: field.expects,
          received: received(value),
        };
      output[key] = checked;
    }
    return { ok: true, value: output };
  };
  return {
    expects: "object",
    check,
    "~standard": {
      version: 1,
      vendor: "dune",
      validate(input) {
        const result = check(input, []);
        return result.ok
          ? { value: result.value }
          : {
              issues: [
                {
                  message: `must be ${result.expected}, got ${result.received}`,
                  path: result.path,
                },
              ],
            };
      },
    },
  };
}

const field = (
  expects: string,
  validate: (value: unknown) => boolean,
  transform: (value: unknown) => unknown = (value) => value,
) => ({
  expects,
  check: (value: unknown) => (validate(value) ? transform(value) : undefined),
});
const agentId = field("non-blank string", nonblank);
const methodSchemas: Record<string, { schema: Schema | null }> = {
  mount: {
    schema: schema({
      agentId,
      name: field("non-blank string", nonblank),
      markSvgDataUrl: field("svg data url", svg),
    }),
  },
  unmount: { schema: null },
  offerChoices: {
    schema: schema({
      choices: field("at most 64 mount targets", mountValidators.choices),
    }),
  },
  read: { schema: null },
  readChoices: { schema: null },
  submitPrompt: {
    schema: schema({
      prompt: field("non-empty string", mountValidators.prompt, (value) =>
        (value as string).trim(),
      ),
    }),
  },
  switchTo: { schema: schema({ agentId }) },
  reachForMenu: {
    schema: schema({
      heightPx: field("integer from 0 to 640", mountValidators.heightPx),
    }),
  },
  movePanel: {
    schema: schema({
      dx: field("integer from -16384 to 16384", mountValidators.dx),
      dy: field("integer from -16384 to 16384", mountValidators.dy),
    }),
  },
  endPanelMove: { schema: null },
};
export const desktopMountDeclaration = Object.freeze({
  kind: "rpc-edge",
  edge: "desktop-mount",
  methods: methodSchemas,
  hasEvents: true,
});
function envelope(value: unknown): value is {
  ok: boolean;
  value?: unknown;
  failure: { code: string; detail: string };
} {
  return (
    typeof value === "object" &&
    value !== null &&
    "ok" in value &&
    typeof value.ok === "boolean"
  );
}
async function call(method: string, args: unknown): Promise<unknown> {
  let reply: unknown;
  try {
    reply = await ipcRenderer.invoke(
      `dune-rpc:desktop-mount:m:${method}`,
      args,
    );
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    let probe: unknown;
    try {
      probe = await ipcRenderer.invoke("dune-rpc:desktop-mount:probe", method);
    } catch {
      throw new EdgeCallFailure({ code: "edge/transport-failed", detail });
    }
    if (
      envelope(probe) &&
      !probe.ok &&
      probe.failure.code === "edge/unknown-method"
    )
      throw new EdgeCallFailure(probe.failure);
    throw new EdgeCallFailure({ code: "edge/transport-failed", detail });
  }
  if (!envelope(reply))
    throw new EdgeCallFailure({
      code: "edge/handler-failed",
      detail: "The edge replied outside its envelope.",
    });
  if (reply.ok) return reply.value;
  throw new EdgeCallFailure(reply.failure);
}
/** Declaration schemas are exposed to devtools; the shipped client does not validate outgoing arguments. */
export const desktopMount: DesktopMountBridge = {
  mount: (args) => call("mount", args),
  unmount: () => call("unmount", {}),
  offerChoices: (args) => call("offerChoices", args),
  read: () => call("read", {}),
  readChoices: () => call("readChoices", {}),
  submitPrompt: (args) => call("submitPrompt", args),
  switchTo: (args) => call("switchTo", args),
  reachForMenu: (args) => call("reachForMenu", args),
  movePanel: (args) => call("movePanel", args),
  endPanelMove: () => call("endPanelMove", {}),
  subscribe(listeners) {
    const removers: (() => void)[] = [];
    for (const [event, listener] of Object.entries(listeners)) {
      if (listener == null) continue;
      const channel = `dune-rpc:desktop-mount:e:${event}`;
      const wrapper = (_event: Electron.IpcRendererEvent, payload: unknown) =>
        listener(payload);
      ipcRenderer.on(channel, wrapper);
      removers.push(() => ipcRenderer.off(channel, wrapper));
    }
    return () => {
      for (const remove of removers) remove();
    };
  },
};
const hook = (globalThis as unknown as Record<string, unknown>)
  .__DUNE_DEVTOOLS_HOOK__;
if (isRecord(hook) && hook.version === 1 && typeof hook.register === "function")
  hook.register({
    kind: "rpc-edge",
    role: "bridge",
    declaration: desktopMountDeclaration,
    trust: [],
  });
contextBridge.exposeInMainWorld("desktopMount", desktopMount);
