declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "68b1017c-47f9-4461-816c-f7b5abe0bc74", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-68b1017c-47f9-4461-816c-f7b5abe0bc74");
  } catch (e: any) {}
} as any)();
import { c as d, j as n } from "./index.eager-vendor-Qbf9YA6n.js";
import "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { ah as l, a5 as u, a6 as f } from "./index-ZYxf-aBb.js";
import { S as M } from "./chunk-listener-integrations-CRJyd9rc.js";
import { g as x, G as C } from "./chunk-group-chat-connect-waiting-Cu67aNHe.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-provider-listener-integrations-CR9f28xA.js";
import "./chunk-connector-card-view-fPUuNO3n.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
function S(this: any, c: any): any {
  (S as any).d = 323;
  const e: any = ((d as any).c as any)(18),
    {
      entry: t,
      adjacency: p
    }: any = c,
    {
      viewerAuthId: g
    }: any = (l as any)();
  let a: any;
  ((e as any)[0] as any) !== ((t as any).targeted as any) || ((e as any)[1] as any) !== (g as any) ? (a = (x as any)((t as any).targeted, g), (e as any)[0] = (t as any).targeted, (e as any)[1] = g, (e as any)[2] = a) : a = (e as any)[2];
  const i: any = a;
  if ((i as any) !== (void 0 as any)) {
    let o: any;
    return ((e as any)[3] as any) !== (i as any) ? (o = ((n as any).jsx as any)(C, {
      name: i
    }), (e as any)[3] = i, (e as any)[4] = o) : o = (e as any)[4], o;
  }
  let s: any;
  ((e as any)[5] as any) !== (((t as any).message as any).intent as any) || ((e as any)[6] as any) !== (((t as any).message as any).provider as any) || ((e as any)[7] as any) !== (((t as any).message as any).reason as any) || ((e as any)[8] as any) !== (((t as any).message as any).repo as any) || ((e as any)[9] as any) !== ((t as any).timestampMs as any) ? (s = ((n as any).jsx as any)(M, {
    provider: ((t as any).message as any).provider,
    intent: ((t as any).message as any).intent,
    reason: ((t as any).message as any).reason,
    repo: ((t as any).message as any).repo,
    sentAtMs: (t as any).timestampMs
  }), (e as any)[5] = ((t as any).message as any).intent, (e as any)[6] = ((t as any).message as any).provider, (e as any)[7] = ((t as any).message as any).reason, (e as any)[8] = ((t as any).message as any).repo, (e as any)[9] = (t as any).timestampMs, (e as any)[10] = s) : s = (e as any)[10];
  let r: any;
  ((e as any)[11] as any) !== ((p as any).isGroupStart as any) || ((e as any)[12] as any) !== ((t as any).timestampMs as any) || ((e as any)[13] as any) !== (s as any) ? (r = ((n as any).jsx as any)(u, {
    isGroupStart: (p as any).isGroupStart,
    timestampMs: (t as any).timestampMs,
    variant: "tab",
    children: s
  }), (e as any)[11] = (p as any).isGroupStart, (e as any)[12] = (t as any).timestampMs, (e as any)[13] = s, (e as any)[14] = r) : r = (e as any)[14];
  let m: any;
  return ((e as any)[15] as any) !== (t as any) || ((e as any)[16] as any) !== (r as any) ? (m = ((n as any).jsx as any)(f, {
    entry: t,
    children: r
  }), (e as any)[15] = t, (e as any)[16] = r, (e as any)[17] = m) : m = (e as any)[17], m;
}
export { S as default };
//# debugId=68b1017c-47f9-4461-816c-f7b5abe0bc74
