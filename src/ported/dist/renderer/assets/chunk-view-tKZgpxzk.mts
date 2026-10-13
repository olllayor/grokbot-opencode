declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "1d83bc30-7c64-417a-941e-54a859c6dd1a", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-1d83bc30-7c64-417a-941e-54a859c6dd1a");
  } catch (e: any) {}
} as any)();
import { c as p, j as n, r as i } from "./index.eager-vendor-Qbf9YA6n.js";
import { bn as l } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
function c(this: any, a: any): any {
  (c as any).d = 275;
  const t: any = ((p as any).c as any)(6),
    {
      params: e
    }: any = a,
    {
      renderImport: o
    }: any = (l as any)(),
    m: any = (e as any).shareId;
  let r: any;
  ((t as any)[0] as any) !== ((e as any).shareId as any) || ((t as any)[1] as any) !== (o as any) ? (r = (o as any)((e as any).shareId), (t as any)[0] = (e as any).shareId, (t as any)[1] = o, (t as any)[2] = r) : r = (t as any)[2];
  let s: any;
  return ((t as any)[3] as any) !== ((e as any).shareId as any) || ((t as any)[4] as any) !== (r as any) ? (s = ((n as any).jsx as any)((i as any).Fragment, {
    children: r
  }, m), (t as any)[3] = (e as any).shareId, (t as any)[4] = r, (t as any)[5] = s) : s = (t as any)[5], s;
}
export { c as default };
//# debugId=1d83bc30-7c64-417a-941e-54a859c6dd1a
