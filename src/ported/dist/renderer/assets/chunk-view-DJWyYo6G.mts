declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "c2db2f73-f7dd-4961-91ef-52afa8769de4", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-c2db2f73-f7dd-4961-91ef-52afa8769de4");
  } catch (e: any) {}
} as any)();
import { c as p, j as o } from "./index.eager-vendor-Qbf9YA6n.js";
import "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { a5 as n, a6 as l } from "./index-ZYxf-aBb.js";
import { L as c } from "./chunk-listener-integrations-CRJyd9rc.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-provider-listener-integrations-CR9f28xA.js";
import "./chunk-connector-card-view-fPUuNO3n.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
function f(this: any, i: any): any {
  (f as any).d = 319;
  const s: any = ((p as any).c as any)(10),
    {
      entry: t,
      adjacency: m
    }: any = i;
  let e: any;
  ((s as any)[0] as any) !== (((t as any).message as any).platform as any) || ((s as any)[1] as any) !== (((t as any).message as any).reason as any) ? (e = ((o as any).jsx as any)(c, {
    platform: ((t as any).message as any).platform,
    reason: ((t as any).message as any).reason
  }), (s as any)[0] = ((t as any).message as any).platform, (s as any)[1] = ((t as any).message as any).reason, (s as any)[2] = e) : e = (s as any)[2];
  let a: any;
  ((s as any)[3] as any) !== ((m as any).isGroupStart as any) || ((s as any)[4] as any) !== ((t as any).timestampMs as any) || ((s as any)[5] as any) !== (e as any) ? (a = ((o as any).jsx as any)(n, {
    className: "sand-tab-card-wrap",
    isGroupStart: (m as any).isGroupStart,
    timestampMs: (t as any).timestampMs,
    variant: "tab",
    children: e
  }), (s as any)[3] = (m as any).isGroupStart, (s as any)[4] = (t as any).timestampMs, (s as any)[5] = e, (s as any)[6] = a) : a = (s as any)[6];
  let r: any;
  return ((s as any)[7] as any) !== (t as any) || ((s as any)[8] as any) !== (a as any) ? (r = ((o as any).jsx as any)(l, {
    entry: t,
    children: a
  }), (s as any)[7] = t, (s as any)[8] = a, (s as any)[9] = r) : r = (s as any)[9], r;
}
export { f as default };
//# debugId=c2db2f73-f7dd-4961-91ef-52afa8769de4
