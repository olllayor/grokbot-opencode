import { mainDeclaration, mountDeclaration } from "../rpc/declarations.js";
import { ipcRenderer, webUtils } from "electron";
import {
  mainNoArgumentMethods,
  mainMethodNames,
  mountMethodNames,
} from "./contracts.js";

export type Listener = (payload?: unknown) => void;
export type Unsubscribe = () => void;
export type WireObject = Record<string, unknown>;
export interface Transport {
  invoke(channel: string, payload: unknown): Promise<unknown>;
  on(channel: string, listener: (payload: WireObject) => void): Unsubscribe;
}
export class EdgeCallFailure extends Error {
  constructor(
    readonly code: string,
    readonly detail: string,
  ) {
    super(`${code}: ${detail}`);
    this.name = "EdgeCallFailure";
  }
}
interface Envelope {
  ok: boolean;
  value?: unknown;
  failure?: { code: string; detail: string };
}
function envelope(value: unknown): value is Envelope {
  return (
    typeof value === "object" &&
    value !== null &&
    "ok" in value &&
    typeof value.ok === "boolean"
  );
}
export const electronTransport: Transport = {
  invoke: (channel, payload) => ipcRenderer.invoke(channel, payload),
  on(channel, listener) {
    const handler = (_event: unknown, payload: WireObject) => listener(payload);
    ipcRenderer.on(channel, handler);
    return () => {
      ipcRenderer.off(channel, handler);
    };
  },
};
export function createRpc(
  edge: string,
  transport: Transport,
  noArguments: Set<string>,
) {
  async function call(method: string, payload: unknown): Promise<unknown> {
    let reply: unknown;
    try {
      reply = await transport.invoke(`dune-rpc:${edge}:m:${method}`, payload);
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      let probe: unknown;
      try {
        probe = await transport.invoke(`dune-rpc:${edge}:probe`, method);
      } catch {
        throw new EdgeCallFailure("edge/transport-failed", detail);
      }
      if (
        envelope(probe) &&
        !probe.ok &&
        probe.failure?.code === "edge/unknown-method"
      ) {
        throw new EdgeCallFailure(probe.failure.code, probe.failure.detail);
      }
      throw new EdgeCallFailure("edge/transport-failed", detail);
    }
    if (!envelope(reply))
      throw new EdgeCallFailure(
        "edge/handler-failed",
        "The edge replied outside its envelope.",
      );
    if (reply.ok) return reply.value;
    // The shipped envelope contract requires a failure whenever ok is false.
    if (!reply.failure) throw new TypeError("Missing RPC failure envelope");
    throw new EdgeCallFailure(reply.failure.code, reply.failure.detail);
  }
  function subscribe(
    handlers: Record<
      string,
      ((payload: WireObject) => void) | null | undefined
    >,
  ): Unsubscribe {
    const disposers = Object.entries(handlers)
      .filter(
        (entry): entry is [string, (payload: WireObject) => void] =>
          entry[1] != null,
      )
      .map(([name, listener]) =>
        transport.on(`dune-rpc:${edge}:e:${name}`, listener),
      );
    return () => {
      for (const dispose of disposers) dispose();
    };
  }
  const bridge: Record<string, unknown> = { subscribe };
  const names = edge === "main" ? mainMethodNames : mountMethodNames;
  for (const method of names)
    bridge[method] = noArguments.has(method)
      ? () => call(method, {})
      : (payload: unknown) => call(method, payload);
  const hook = (
    globalThis as typeof globalThis & {
      __DUNE_DEVTOOLS_HOOK__?: {
        version: number;
        register?: (entry: unknown) => void;
      };
    }
  ).__DUNE_DEVTOOLS_HOOK__;
  if (hook?.version === 1 && typeof hook.register === "function") {
    hook.register({
      kind: "rpc-edge",
      role: "bridge",
      declaration: edge === "main" ? mainDeclaration : mountDeclaration,
      trust: [],
    });
  }
  return bridge as { subscribe: typeof subscribe } & Record<
    string,
    (payload?: unknown) => Promise<unknown>
  >;
}
export interface BootSnapshot extends WireObject {
  mainEdge?: string;
  experiments?: unknown;
  rosterPhotos?: unknown;
  theme?: unknown;
  language?: unknown;
  isAssistiveTechEnabled?: boolean;
  isEgressTunnelEnabled?: boolean;
  isWebauthnProxyEnabled?: boolean;
  isBotColorInChatEnabled?: boolean;
  egressTunnelStatus?: unknown;
}
export const boot: BootSnapshot = ipcRenderer.sendSync(
  "sand:boot-snapshot-sync",
);
const mainReady =
  boot.mainEdge === "served"
    ? Promise.resolve()
    : new Promise<void>((resolve) => {
        ipcRenderer.once("sand:main-edge-served", () => resolve());
      });
const readyTransport: Transport = {
  ...electronTransport,
  invoke: (channel, payload) =>
    mainReady.then(() => electronTransport.invoke(channel, payload)),
};
export const mainRpc = createRpc("main", readyTransport, mainNoArgumentMethods);
export const RENDERER_ALIVE = "sand:renderer-alive";
export const BOOT_GATE_LANDED = "sand:renderer-boot-gate-landed";
export function booleanOrNull(value: unknown): boolean | null {
  return typeof value === "boolean" ? value : null;
}
export function platformOptional<T>(platform: string, value: T): T | undefined {
  return platform === "darwin" || platform === "linux" ? value : undefined;
}
export const isDev = !!process.env.SAND_RESTART_EXIT_CODE?.length;
export function usesProductionBackend(): boolean {
  // This open-source build never contacts Cursor's production backend.
  // Returning false prevents privacy-mode lookups against api2.cursor.sh.
  return false;
}
export function reportTelemetryFailure(error: unknown): void {
  console.warn(
    "[sand-webview-preload]",
    "telemetry report ack failed",
    error instanceof Error ? error.message : undefined,
  );
}
export function turnTelemetry() {
  return {
    reportTurnClientStart(payload: unknown) {
      mainRpc.reportTurnClientStart(payload).catch(reportTelemetryFailure);
    },
    reportTurnClientOutcome(payload: unknown) {
      mainRpc.reportTurnClientOutcome(payload).catch(reportTelemetryFailure);
    },
  };
}
interface AttachmentStager {
  diskPathOf(file: File): string | null;
  stagePath(payload: {
    filename: string;
    sourcePath: string;
  }): Promise<unknown>;
  stageBytes(filename: string, bytes: Uint8Array): Promise<unknown>;
}
export async function stageFile(
  stager: AttachmentStager,
  filename: string,
  file: File,
): Promise<unknown> {
  const path = stager.diskPathOf(file);
  return path != null
    ? stager.stagePath({ filename, sourcePath: path })
    : stager.stageBytes(filename, new Uint8Array(await file.arrayBuffer()));
}
export interface CoordinatorPort {
  postMessage(payload: unknown): void;
  close(): void;
  start(): void;
  addEventListener(
    event: string,
    listener: (event: { data?: unknown }) => void,
  ): void;
}
interface PortClaimant {
  onPort(port: CoordinatorPort): void;
}
let claimant: PortClaimant | null = null;
export const coordinator = {
  bridge: {
    claim(owner: PortClaimant) {
      if (claimant !== null) return null;
      claimant = owner;
      return {
        request() {
          if (claimant === owner)
            void readyTransport.invoke(
              "sand:coordinator-port-request",
              undefined,
            );
        },
        release() {
          if (claimant === owner) claimant = null;
        },
      };
    },
  },
  deliver(port: CoordinatorPort) {
    claimant?.onPort(port);
  },
};
