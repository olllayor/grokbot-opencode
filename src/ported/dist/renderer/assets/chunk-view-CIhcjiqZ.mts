declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "3e5f828f-f78e-4018-8d8e-56edc57ac30f", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-3e5f828f-f78e-4018-8d8e-56edc57ac30f");
  } catch (e: any) {}
} as any)();
import { c as l, j as m } from "./index.eager-vendor-Qbf9YA6n.js";
import { an as u, aq as d, ar as f, a5 as x, a6 as j } from "./index-ZYxf-aBb.js";
import "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
function M(this: any, p: any): any {
  (M as any).d = 327;
  const s: any = ((l as any).c as any)(10),
    {
      entry: t,
      adjacency: n
    }: any = p,
    a: any = (u as any)(),
    c: any = (d as any)(a, t);
  let r: any;
  ((s as any)[0] as any) !== (a as any) || ((s as any)[1] as any) !== (t as any) ? (r = ((m as any).jsx as any)(f, {
    agentId: a,
    entry: t,
    reason: ((t as any).message as any).reason
  }), (s as any)[0] = a, (s as any)[1] = t, (s as any)[2] = r) : r = (s as any)[2];
  const i: any = r;
  if ((c as any) !== (null as any)) return i;
  let e: any;
  ((s as any)[3] as any) !== ((n as any).isGroupStart as any) || ((s as any)[4] as any) !== (i as any) || ((s as any)[5] as any) !== ((t as any).timestampMs as any) ? (e = ((m as any).jsx as any)(x, {
    isGroupStart: (n as any).isGroupStart,
    timestampMs: (t as any).timestampMs,
    variant: "question",
    children: i
  }), (s as any)[3] = (n as any).isGroupStart, (s as any)[4] = i, (s as any)[5] = (t as any).timestampMs, (s as any)[6] = e) : e = (s as any)[6];
  let o: any;
  return ((s as any)[7] as any) !== (t as any) || ((s as any)[8] as any) !== (e as any) ? (o = ((m as any).jsx as any)(j, {
    entry: t,
    children: e
  }), (s as any)[7] = t, (s as any)[8] = e, (s as any)[9] = o) : o = (s as any)[9], o;
}
export { M as default };
//# debugId=3e5f828f-f78e-4018-8d8e-56edc57ac30f
