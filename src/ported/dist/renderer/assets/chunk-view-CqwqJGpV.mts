declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "8a6b2ec7-7ef3-4c73-b968-12cb69437b23", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-8a6b2ec7-7ef3-4c73-b968-12cb69437b23");
  } catch (e: any) {}
} as any)();
import { c as d, j as m } from "./index.eager-vendor-Qbf9YA6n.js";
import "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { ah as u, a5 as l, a6 as f } from "./index-ZYxf-aBb.js";
import { C as v } from "./chunk-connector-card-DAiBo2ga.js";
import { g as C, G as x } from "./chunk-group-chat-connect-waiting-Cu67aNHe.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-finance-CSw6gjXN.js";
import "./chunk-connector-card-view-fPUuNO3n.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
function h(this: any, p: any): any {
  (h as any).d = 313;
  const e: any = ((d as any).c as any)(18),
    {
      entry: s,
      adjacency: g
    }: any = p,
    {
      viewerAuthId: c
    }: any = (u as any)();
  let r: any;
  ((e as any)[0] as any) !== ((s as any).targeted as any) || ((e as any)[1] as any) !== (c as any) ? (r = (C as any)((s as any).targeted, c), (e as any)[0] = (s as any).targeted, (e as any)[1] = c, (e as any)[2] = r) : r = (e as any)[2];
  const n: any = r;
  if ((n as any) !== (void 0 as any)) {
    let i: any;
    return ((e as any)[3] as any) !== (n as any) ? (i = ((m as any).jsx as any)(x, {
      name: n
    }), (e as any)[3] = n, (e as any)[4] = i) : i = (e as any)[4], i;
  }
  let t: any;
  ((e as any)[5] as any) !== (((s as any).message as any).connector as any) || ((e as any)[6] as any) !== (((s as any).message as any).reason as any) || ((e as any)[7] as any) !== (((s as any).message as any).serverId as any) || ((e as any)[8] as any) !== (((s as any).message as any).suggestions as any) || ((e as any)[9] as any) !== (((s as any).message as any).variant as any) ? (t = ((m as any).jsx as any)(v, {
    connector: ((s as any).message as any).connector,
    reason: ((s as any).message as any).reason,
    serverId: ((s as any).message as any).serverId,
    suggestions: ((s as any).message as any).suggestions,
    variant: ((s as any).message as any).variant
  }), (e as any)[5] = ((s as any).message as any).connector, (e as any)[6] = ((s as any).message as any).reason, (e as any)[7] = ((s as any).message as any).serverId, (e as any)[8] = ((s as any).message as any).suggestions, (e as any)[9] = ((s as any).message as any).variant, (e as any)[10] = t) : t = (e as any)[10];
  let a: any;
  ((e as any)[11] as any) !== ((g as any).isGroupStart as any) || ((e as any)[12] as any) !== ((s as any).timestampMs as any) || ((e as any)[13] as any) !== (t as any) ? (a = ((m as any).jsx as any)(l, {
    className: "sand-connector-card-wrap",
    isGroupStart: (g as any).isGroupStart,
    timestampMs: (s as any).timestampMs,
    variant: "question",
    children: t
  }), (e as any)[11] = (g as any).isGroupStart, (e as any)[12] = (s as any).timestampMs, (e as any)[13] = t, (e as any)[14] = a) : a = (e as any)[14];
  let o: any;
  return ((e as any)[15] as any) !== (s as any) || ((e as any)[16] as any) !== (a as any) ? (o = ((m as any).jsx as any)(f, {
    entry: s,
    children: a
  }), (e as any)[15] = s, (e as any)[16] = a, (e as any)[17] = o) : o = (e as any)[17], o;
}
export { h as default };
//# debugId=8a6b2ec7-7ef3-4c73-b968-12cb69437b23
