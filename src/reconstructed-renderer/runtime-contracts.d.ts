declare module "*index.eager-vendor-Qbf9YA6n.js" {
  interface MessageDescriptor { id: string; values?: Record<string, string | number> }
  export function u(): { _: (descriptor: MessageDescriptor) => string };
  export interface UIElement { readonly type: unknown; readonly props: Readonly<Record<string, unknown>>; readonly key: string | null }
  export type UINode = UIElement | string | number | boolean | null | undefined | readonly UINode[];
  export const j: { jsx(type: unknown, props: Record<string, unknown>): UIElement; jsxs(type: unknown, props: Record<string, unknown>): UIElement };
  export const r: {
    useRef<T>(value: T): { current: T };
    useState<T>(initial: T | (() => T)): [T, (value: T) => void];
    useSyncExternalStore<T>(subscribe: (callback: () => void) => (() => void), get: () => T, serverGet: () => T): T;
  };
  export const c: { c(size: number): unknown[] };
}
declare module "*index.eager-app-Cj5f8Gby.js" {
  interface Policy { localToolPermissionCeiling?: unknown; localEgressAllowed: boolean; autoReviewTeamEnforced: boolean; autoReviewTeamRules: unknown }
  export type PolicyState = { status: "ready"; value: Policy } | { status: "loading" | "failed"; previous?: Policy } | { status: "empty" | "unavailable" };
  export const b0: unknown;
  export function b7(): { teamPolicy: { snapshots: unknown }; credentials: import("./credentials-contracts.js").CredentialsService; listenerIntegrations: import("./listener-contracts.js").ListenerIntegrationServices };
  export function bg<T, U>(snapshots: import("./credentials-contracts.js").Observable<import("./credentials-contracts.js").AsyncSnapshot<T>>, project: (state: import("./credentials-contracts.js").AsyncSnapshot<T>) => U): U;
  export function bh<T>(state: import("./credentials-contracts.js").AsyncSnapshot<T>): T | undefined;
  export function bi(): import("./credentials-contracts.js").StageStore;
  export function b8<Args extends unknown[]>(command: import("./credentials-contracts.js").Command<Args>): import("./credentials-contracts.js").CommandState<Args>;
  export function bP<T>(snapshots: import("./credentials-contracts.js").Observable<import("./credentials-contracts.js").AsyncSnapshot<T>>): import("./credentials-contracts.js").AsyncSnapshot<T>;
  export function bP(snapshots: unknown): PolicyState;
  export const bQ: import("./listener-contracts.js").ListenerIntegrationView;
  export const bR: unknown;
  export function ce(source: unknown): { bcId: string; kind: string } | null | undefined;
}
declare module "*index.eager-platform-Dcfeegfw.js" {}
declare module "*index.eager-common-CdCvBQNJ.js" {}
declare module "*index-ZYxf-aBb.js" { export const C: unknown; export const ag: unknown; }
