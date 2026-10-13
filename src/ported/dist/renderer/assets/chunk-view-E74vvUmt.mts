declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "4f69e907-74f8-4f01-bc66-948804498d44", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-4f69e907-74f8-4f01-bc66-948804498d44");
  } catch (e: any) {}
} as any)();
import { c as d, u as f, j as p } from "./index.eager-vendor-Qbf9YA6n.js";
import { b9 as x, bS as C } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { am as g, a5 as j, a6 as M } from "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
function S(this: any, c: any): any {
  (S as any).d = 321;
  const t: any = ((d as any).c as any)(12),
    {
      entry: s,
      adjacency: o
    }: any = c,
    {
      _: i
    }: any = (f as any)(),
    m: any = (x as any)("sand_new_1pass"),
    u: any = (o as any).isGroupStart,
    l: any = (s as any).timestampMs;
  let e: any;
  ((t as any)[0] as any) !== (i as any) || ((t as any)[1] as any) !== (m as any) ? (e = (C as any)(i, "onepassword", {
    onePasswordBrokered: m
  }), (t as any)[0] = i, (t as any)[1] = m, (t as any)[2] = e) : e = (t as any)[2];
  let a: any;
  ((t as any)[3] as any) !== (e as any) ? (a = ((p as any).jsx as any)(g, {
    entry: e,
    startConnecting: !0
  }), (t as any)[3] = e, (t as any)[4] = a) : a = (t as any)[4];
  let r: any;
  ((t as any)[5] as any) !== ((o as any).isGroupStart as any) || ((t as any)[6] as any) !== ((s as any).timestampMs as any) || ((t as any)[7] as any) !== (a as any) ? (r = ((p as any).jsx as any)(j, {
    isGroupStart: u,
    timestampMs: l,
    variant: "question",
    children: a
  }), (t as any)[5] = (o as any).isGroupStart, (t as any)[6] = (s as any).timestampMs, (t as any)[7] = a, (t as any)[8] = r) : r = (t as any)[8];
  let n: any;
  return ((t as any)[9] as any) !== (s as any) || ((t as any)[10] as any) !== (r as any) ? (n = ((p as any).jsx as any)(M, {
    entry: s,
    children: r
  }), (t as any)[9] = s, (t as any)[10] = r, (t as any)[11] = n) : n = (t as any)[11], n;
}
export { S as default };
//# debugId=4f69e907-74f8-4f01-bc66-948804498d44
