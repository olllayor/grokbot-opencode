declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "d59223ae-ec32-4c64-b36f-0721e5aab5d7", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-d59223ae-ec32-4c64-b36f-0721e5aab5d7");
  } catch (e: any) {}
} as any)();
import { c as j, u as g, j as l } from "./index.eager-vendor-Qbf9YA6n.js";
import { I as v } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import { aZ as f, aY as b } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-common-CdCvBQNJ.js";
function y(this: any, d: any): any {
  (y as any).d = 75;
  const e: any = ((j as any).c as any)(17),
    {
      entry: x,
      description: r,
      actionVerb: m,
      onOpenAutomation: p
    }: any = d,
    {
      _: i
    }: any = (g as any)(),
    {
      automationName: t
    }: any = (x as any).event;
  let n: any;
  ((e as any)[0] as any) !== (i as any) || ((e as any)[1] as any) !== (m as any) || ((e as any)[2] as any) !== (r as any) ? (n = (m as any) == (null as any) ? ((l as any).jsx as any)(f, {
    isTruncating: !0,
    title: r,
    children: r
  }) : ((l as any).jsx as any)(f, {
    children: (i as any)({
      id: "O6ISxp",
      values: {
        actionVerb: m
      }
    })
  }), (e as any)[0] = i, (e as any)[1] = m, (e as any)[2] = r, (e as any)[3] = n) : n = (e as any)[3];
  let s: any;
  ((e as any)[4] as any) !== (i as any) || ((e as any)[5] as any) !== (t as any) ? (s = (i as any)({
    id: "f/4KUJ",
    values: {
      automationName: t
    }
  }), (e as any)[4] = i, (e as any)[5] = t, (e as any)[6] = s) : s = (e as any)[6];
  let c: any;
  ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = ((l as any).jsx as any)(v, {
    name: "clock",
    size: "sm"
  }), (e as any)[7] = c) : c = (e as any)[7];
  let o: any;
  ((e as any)[8] as any) !== (p as any) ? (o = (h: any): any => {
    ((h as any).stopPropagation as any)(), p?.();
  }, (e as any)[8] = p, (e as any)[9] = o) : o = (e as any)[9];
  let a: any;
  ((e as any)[10] as any) !== (t as any) || ((e as any)[11] as any) !== (s as any) || ((e as any)[12] as any) !== (o as any) ? (a = ((l as any).jsx as any)(b, {
    "aria-label": s,
    leading: c,
    onClick: o,
    title: t,
    children: t
  }), (e as any)[10] = t, (e as any)[11] = s, (e as any)[12] = o, (e as any)[13] = a) : a = (e as any)[13];
  let u: any;
  return ((e as any)[14] as any) !== (n as any) || ((e as any)[15] as any) !== (a as any) ? (u = ((l as any).jsxs as any)((l as any).Fragment, {
    children: [n, a]
  }), (e as any)[14] = n, (e as any)[15] = a, (e as any)[16] = u) : u = (e as any)[16], u;
}
export { y as default };
//# debugId=d59223ae-ec32-4c64-b36f-0721e5aab5d7
