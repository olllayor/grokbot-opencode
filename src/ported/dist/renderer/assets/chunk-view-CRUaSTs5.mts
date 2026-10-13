declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "d96c5a34-bba0-4fe3-bb9e-046761328f51", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-d96c5a34-bba0-4fe3-bb9e-046761328f51");
  } catch (e: any) {}
} as any)();
import { c as m, j as o } from "./index.eager-vendor-Qbf9YA6n.js";
import { a5 as n, ai as l, a6 as c } from "./index-ZYxf-aBb.js";
import "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
function d(this: any, p: any): any {
  (d as any).d = 315;
  const t: any = ((m as any).c as any)(9),
    {
      entry: r,
      adjacency: e
    }: any = p;
  let i: any;
  ((t as any)[0] as any) !== (r as any) ? (i = ((o as any).jsx as any)(l, {
    entry: r
  }), (t as any)[0] = r, (t as any)[1] = i) : i = (t as any)[1];
  let s: any;
  ((t as any)[2] as any) !== ((e as any).isGroupStart as any) || ((t as any)[3] as any) !== ((r as any).timestampMs as any) || ((t as any)[4] as any) !== (i as any) ? (s = ((o as any).jsx as any)(n, {
    isGroupStart: (e as any).isGroupStart,
    timestampMs: (r as any).timestampMs,
    variant: "widget",
    children: i
  }), (t as any)[2] = (e as any).isGroupStart, (t as any)[3] = (r as any).timestampMs, (t as any)[4] = i, (t as any)[5] = s) : s = (t as any)[5];
  let a: any;
  return ((t as any)[6] as any) !== (r as any) || ((t as any)[7] as any) !== (s as any) ? (a = ((o as any).jsx as any)(c, {
    entry: r,
    children: s
  }), (t as any)[6] = r, (t as any)[7] = s, (t as any)[8] = a) : a = (t as any)[8], a;
}
export { d as default };
//# debugId=d96c5a34-bba0-4fe3-bb9e-046761328f51
