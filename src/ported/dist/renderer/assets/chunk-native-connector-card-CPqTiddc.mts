declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "294899eb-ae69-4df3-aebd-8d8951fc5a2a", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-294899eb-ae69-4df3-aebd-8d8951fc5a2a");
  } catch (e: any) {}
} as any)();
import { c as x, u as L, j as R } from "./index.eager-vendor-Qbf9YA6n.js";
import { bd as j, be as v, bf as w, aU as E, b7 as S } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index-ZYxf-aBb.js";
import { C as A } from "./chunk-connector-card-view-fPUuNO3n.js";
import { u as B } from "./chunk-native-plugin-state-AwCLFZLB.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
import "./chunk-provider-credentials-yP7QsOsy.js";
function O(this: any, h: any): any {
  (O as any).d = 1209;
  const e: any = ((x as any).c as any)(32),
    {
      entry: n,
      startConnecting: U
    }: any = h,
    u: any = (U as any) === (void 0 as any) ? !1 : U,
    {
      _: o
    }: any = (L as any)(),
    C: any = (j as any)(),
    g: any = (v as any)(),
    y: any = (w as any)();
  (E as any)((((S as any)() as any).credentials as any).load);
  const N: any = (B as any)();
  let a: any;
  ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (N as any) ? (a = (N as any)(n), (e as any)[0] = n, (e as any)[1] = N, (e as any)[2] = a) : a = (e as any)[2];
  const I: any = (a as any) === (!0 as any);
  let d: any;
  ((e as any)[3] as any) !== (C as any) || ((e as any)[4] as any) !== (n as any) ? (d = ((C as any).resolveCatalogEntryIcon as any)(n), (e as any)[3] = C, (e as any)[4] = n, (e as any)[5] = d) : d = (e as any)[5];
  const t: any = d;
  let p: any;
  ((e as any)[6] as any) !== ((n as any).displayName as any) || ((e as any)[7] as any) !== ((n as any).id as any) || ((e as any)[8] as any) !== (g as any) || ((e as any)[9] as any) !== (u as any) ? (p = (): any => {
    g?.({
      kind: "plugin",
      pluginId: (n as any).id,
      ...(u ? {
        startConnecting: !0
      } : {})
    }, (n as any).displayName);
  }, (e as any)[6] = (n as any).displayName, (e as any)[7] = (n as any).id, (e as any)[8] = g, (e as any)[9] = u, (e as any)[10] = p) : p = (e as any)[10];
  const b: any = p;
  let i: any;
  ((e as any)[11] as any) !== (o as any) ? (i = (o as any)({
    id: "iSLIjg"
  }), (e as any)[11] = o, (e as any)[12] = i) : i = (e as any)[12];
  let s: any;
  ((e as any)[13] as any) !== (o as any) ? (s = (o as any)({
    id: "QHcLEN"
  }), (e as any)[13] = o, (e as any)[14] = s) : s = (e as any)[14];
  let l: any;
  ((e as any)[15] as any) !== ((t as any).iconId as any) ? (l = ((t as any).iconId as any) == (null as any) ? {} : {
    iconId: (t as any).iconId
  }, (e as any)[15] = (t as any).iconId, (e as any)[16] = l) : l = (e as any)[16];
  let r: any;
  ((e as any)[17] as any) !== ((t as any).iconUrl as any) ? (r = ((t as any).iconUrl as any) == (null as any) ? {} : {
    iconUrl: (t as any).iconUrl
  }, (e as any)[17] = (t as any).iconUrl, (e as any)[18] = r) : r = (e as any)[18];
  let c: any;
  ((e as any)[19] as any) !== (y as any) ? (c = (): any => y?.(), (e as any)[19] = y, (e as any)[20] = c) : c = (e as any)[20];
  let m: any;
  ((e as any)[21] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = [], (e as any)[21] = m) : m = (e as any)[21];
  let f: any;
  return ((e as any)[22] as any) !== ((n as any).description as any) || ((e as any)[23] as any) !== ((n as any).displayName as any) || ((e as any)[24] as any) !== (I as any) || ((e as any)[25] as any) !== (b as any) || ((e as any)[26] as any) !== (c as any) || ((e as any)[27] as any) !== (i as any) || ((e as any)[28] as any) !== (s as any) || ((e as any)[29] as any) !== (l as any) || ((e as any)[30] as any) !== (r as any) ? (f = ((R as any).jsx as any)(A, {
    actionLabel: i,
    connectedLabel: s,
    description: (n as any).description,
    displayName: (n as any).displayName,
    handoff: null,
    ...l,
    ...r,
    isActionPending: !1,
    isAdminDisabled: !1,
    isConnected: I,
    isTeam: !1,
    onAction: b,
    onBrowseMore: c,
    suggestions: m,
    toolCount: 0
  }), (e as any)[22] = (n as any).description, (e as any)[23] = (n as any).displayName, (e as any)[24] = I, (e as any)[25] = b, (e as any)[26] = c, (e as any)[27] = i, (e as any)[28] = s, (e as any)[29] = l, (e as any)[30] = r, (e as any)[31] = f) : f = (e as any)[31], f;
}
export { O as NativeConnectorCard };
//# debugId=294899eb-ae69-4df3-aebd-8d8951fc5a2a
