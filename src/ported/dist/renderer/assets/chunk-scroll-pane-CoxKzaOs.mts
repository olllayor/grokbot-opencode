declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "d4cbdcca-0504-4535-b9b3-404ef1609cc5", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-d4cbdcca-0504-4535-b9b3-404ef1609cc5");
  } catch (e: any) {}
} as any)();
import { c as x, j as d } from "./index.eager-vendor-Qbf9YA6n.js";
import { r as f } from "./index.eager-app-Cj5f8Gby.js";
import "./index-ZYxf-aBb.js";
import { a_ as y } from "./index.eager-platform-Dcfeegfw.js";
function j(this: any, p: any): any {
  (j as any).d = 1233;
  const s: any = ((x as any).c as any)(18),
    {
      children: c,
      ref: m
    }: any = p;
  let l: any, t: any, a: any, e: any, n: any, r: any;
  ((s as any)[0] as any) !== (m as any) ? (t = {
    className: "sand-9f619 sand-1xy6bms sand-1s169rl sand-84yb8i sand-16mx7xq"
  }, l = y, ((s as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (e = (f as any)("sand-settings-scroll", "sand-9f619 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-2lwn1j"), (s as any)[7] = e) : e = (s as any)[7], n = m, r = "hover", a = (f as any)("sand-settings-pane", (t as any).className), (s as any)[0] = m, (s as any)[1] = l, (s as any)[2] = t, (s as any)[3] = a, (s as any)[4] = e, (s as any)[5] = n, (s as any)[6] = r) : (l = (s as any)[1], t = (s as any)[2], a = (s as any)[3], e = (s as any)[4], n = (s as any)[5], r = (s as any)[6]);
  let i: any;
  ((s as any)[8] as any) !== (c as any) || ((s as any)[9] as any) !== ((t as any).style as any) || ((s as any)[10] as any) !== (a as any) ? (i = ((d as any).jsx as any)("div", {
    className: a,
    style: (t as any).style,
    children: c
  }), (s as any)[8] = c, (s as any)[9] = (t as any).style, (s as any)[10] = a, (s as any)[11] = i) : i = (s as any)[11];
  let o: any;
  return ((s as any)[12] as any) !== (l as any) || ((s as any)[13] as any) !== (e as any) || ((s as any)[14] as any) !== (n as any) || ((s as any)[15] as any) !== (r as any) || ((s as any)[16] as any) !== (i as any) ? (o = ((d as any).jsx as any)(l, {
    className: e,
    ref: n,
    scrollbarVisibility: r,
    children: i
  }), (s as any)[12] = l, (s as any)[13] = e, (s as any)[14] = n, (s as any)[15] = r, (s as any)[16] = i, (s as any)[17] = o) : o = (s as any)[17], o;
}
export { j as S };
//# debugId=d4cbdcca-0504-4535-b9b3-404ef1609cc5
