declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "164ef325-9962-40db-bdba-03de67ce95a2", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-164ef325-9962-40db-bdba-03de67ce95a2");
  } catch (e: any) {}
} as any)();
import { c as n, j as o } from "./index.eager-vendor-Qbf9YA6n.js";
import "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import { aZ as s } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-common-CdCvBQNJ.js";
function c(this: any, i: any): any {
  (c as any).d = 282;
  const t: any = ((n as any).c as any)(2),
    {
      description: e
    }: any = i;
  let r: any;
  return ((t as any)[0] as any) !== (e as any) ? (r = ((o as any).jsx as any)(s, {
    isTruncating: !0,
    title: e,
    children: e
  }), (t as any)[0] = e, (t as any)[1] = r) : r = (t as any)[1], r;
}
export { c as default };
//# debugId=164ef325-9962-40db-bdba-03de67ce95a2
