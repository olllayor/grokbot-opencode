declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "0a257b6a-da4d-4af2-b42d-745f0527b3fa", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-0a257b6a-da4d-4af2-b42d-745f0527b3fa");
  } catch (e: any) {}
} as any)();
import { c as o, j as s } from "./index.eager-vendor-Qbf9YA6n.js";
import "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import { aZ as n } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-common-CdCvBQNJ.js";
function m(this: any, i: any): any {
  (m as any).d = 292;
  const t: any = ((o as any).c as any)(2),
    {
      description: r
    }: any = i;
  let e: any;
  return ((t as any)[0] as any) !== (r as any) ? (e = ((s as any).jsx as any)(n, {
    isTruncating: !0,
    title: r,
    children: r
  }), (t as any)[0] = r, (t as any)[1] = e) : e = (t as any)[1], e;
}
export { m as default };
//# debugId=0a257b6a-da4d-4af2-b42d-745f0527b3fa
