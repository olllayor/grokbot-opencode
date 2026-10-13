declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "fd32862c-098d-4003-aab0-55f5ade27c0a", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-fd32862c-098d-4003-aab0-55f5ade27c0a");
  } catch (e: any) {}
} as any)();
import { c as p, j as c } from "./index.eager-vendor-Qbf9YA6n.js";
import { bM as l } from "./index.eager-app-Cj5f8Gby.js";
import { aj as d, a5 as u, a6 as g } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
function C(this: any, n: any): any {
  (C as any).d = 317;
  const s: any = ((p as any).c as any)(12),
    {
      entry: t,
      adjacency: m
    }: any = n,
    e: any = (l as any)();
  let a: any;
  ((s as any)[0] as any) !== (((t as any).message as any).bcId as any) || ((s as any)[1] as any) !== (((t as any).message as any).title as any) || ((s as any)[2] as any) !== (e as any) ? (a = ((c as any).jsx as any)(d, {
    bcId: ((t as any).message as any).bcId,
    isCompact: e,
    launchTitle: ((t as any).message as any).title
  }), (s as any)[0] = ((t as any).message as any).bcId, (s as any)[1] = ((t as any).message as any).title, (s as any)[2] = e, (s as any)[3] = a) : a = (s as any)[3];
  let r: any;
  ((s as any)[4] as any) !== ((m as any).isGroupStart as any) || ((s as any)[5] as any) !== ((t as any).timestampMs as any) || ((s as any)[6] as any) !== (a as any) ? (r = ((c as any).jsx as any)(u, {
    className: "sand-cursor-agent-card-wrap",
    isGroupStart: (m as any).isGroupStart,
    role: "group",
    timestampMs: (t as any).timestampMs,
    variant: "question",
    children: a
  }), (s as any)[4] = (m as any).isGroupStart, (s as any)[5] = (t as any).timestampMs, (s as any)[6] = a, (s as any)[7] = r) : r = (s as any)[7];
  const o: any = r;
  let i: any;
  return ((s as any)[8] as any) !== (o as any) || ((s as any)[9] as any) !== (t as any) || ((s as any)[10] as any) !== (e as any) ? (i = e ? o : ((c as any).jsx as any)(g, {
    entry: t,
    children: o
  }), (s as any)[8] = o, (s as any)[9] = t, (s as any)[10] = e, (s as any)[11] = i) : i = (s as any)[11], i;
}
export { C as default };
//# debugId=fd32862c-098d-4003-aab0-55f5ade27c0a
