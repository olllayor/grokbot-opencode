declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "c5fcb213-9ada-4990-99e3-d097b1ad6213", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-c5fcb213-9ada-4990-99e3-d097b1ad6213");
  } catch (e: any) {}
} as any)();
import { c as i, j as l } from "./index.eager-vendor-Qbf9YA6n.js";
import { aZ as a } from "./index.eager-platform-Dcfeegfw.js";
import { bl as n, c7 as m } from "./index.eager-app-Cj5f8Gby.js";
import { G as c } from "./chunk-grok-bot-slack-dialog-live-CcLC4Tfx.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./index-ZYxf-aBb.js";
function p(this: any): any {
  (p as any).d = 938;
  const t: any = ((i as any).c as any)(5),
    e: any = (n as any)(),
    {
      close: s
    }: any = (a as any)();
  if ((e as any) == (null as any)) return null;
  let o: any;
  ((t as any)[0] as any) !== (s as any) ? (o = (): any => (s as any)(m), (t as any)[0] = s, (t as any)[1] = o) : o = (t as any)[1];
  let r: any;
  return ((t as any)[2] as any) !== (e as any) || ((t as any)[3] as any) !== (o as any) ? (r = ((l as any).jsx as any)(c, {
    agent: e,
    onClose: o
  }), (t as any)[2] = e, (t as any)[3] = o, (t as any)[4] = r) : r = (t as any)[4], r;
}
export { p as default };
//# debugId=c5fcb213-9ada-4990-99e3-d097b1ad6213
