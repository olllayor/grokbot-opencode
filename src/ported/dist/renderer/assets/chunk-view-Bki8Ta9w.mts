declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "b86194bd-33ba-4f31-9d11-66c104c0182d", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-b86194bd-33ba-4f31-9d11-66c104c0182d");
  } catch (e: any) {}
} as any)();
import { c as i, j as s } from "./index.eager-vendor-Qbf9YA6n.js";
import "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import { aZ as m } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-common-CdCvBQNJ.js";
function n(this: any, o: any): any {
  (n as any).d = 293;
  const t: any = ((i as any).c as any)(2),
    {
      description: e
    }: any = o;
  let r: any;
  return ((t as any)[0] as any) !== (e as any) ? (r = ((s as any).jsx as any)(m, {
    isTruncating: !0,
    title: e,
    children: e
  }), (t as any)[0] = e, (t as any)[1] = r) : r = (t as any)[1], r;
}
export { n as default };
//# debugId=b86194bd-33ba-4f31-9d11-66c104c0182d
