declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "a5c22d4f-8f40-41ae-aa53-b9dd3c621f87", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-a5c22d4f-8f40-41ae-aa53-b9dd3c621f87");
  } catch (e: any) {}
} as any)();
import { c as m, j as o } from "./index.eager-vendor-Qbf9YA6n.js";
import { an as c, ap as l, a5 as d, a6 as u } from "./index-ZYxf-aBb.js";
import "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
function f(this: any, p: any): any {
  (f as any).d = 325;
  const t: any = ((m as any).c as any)(10),
    {
      entry: s,
      adjacency: i
    }: any = p,
    n: any = (c as any)();
  let a: any;
  ((t as any)[0] as any) !== (n as any) || ((t as any)[1] as any) !== (s as any) ? (a = ((o as any).jsx as any)(l, {
    agentId: n,
    entry: s,
    reason: ((s as any).message as any).reason
  }), (t as any)[0] = n, (t as any)[1] = s, (t as any)[2] = a) : a = (t as any)[2];
  let e: any;
  ((t as any)[3] as any) !== ((i as any).isGroupStart as any) || ((t as any)[4] as any) !== ((s as any).timestampMs as any) || ((t as any)[5] as any) !== (a as any) ? (e = ((o as any).jsx as any)(d, {
    isGroupStart: (i as any).isGroupStart,
    timestampMs: (s as any).timestampMs,
    variant: "tab",
    children: a
  }), (t as any)[3] = (i as any).isGroupStart, (t as any)[4] = (s as any).timestampMs, (t as any)[5] = a, (t as any)[6] = e) : e = (t as any)[6];
  let r: any;
  return ((t as any)[7] as any) !== (s as any) || ((t as any)[8] as any) !== (e as any) ? (r = ((o as any).jsx as any)(u, {
    entry: s,
    children: e
  }), (t as any)[7] = s, (t as any)[8] = e, (t as any)[9] = r) : r = (t as any)[9], r;
}
export { f as default };
//# debugId=a5c22d4f-8f40-41ae-aa53-b9dd3c621f87
