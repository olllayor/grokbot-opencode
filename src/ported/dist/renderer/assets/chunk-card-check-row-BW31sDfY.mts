declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "fefaaaa3-9ee4-416a-99b2-1d34c0fd3300", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-fefaaaa3-9ee4-416a-99b2-1d34c0fd3300");
  } catch (e: any) {}
} as any)();
import { c as p, j as u } from "./index.eager-vendor-Qbf9YA6n.js";
import { C } from "./index-ZYxf-aBb.js";
import { b0 as j } from "./index.eager-app-Cj5f8Gby.js";
function R(this: any, h: any): any {
  (R as any).d = 1392;
  const e: any = ((p as any).c as any)(14),
    {
      id: a,
      name: n,
      label: r,
      isChecked: c,
      isDisabled: x,
      isRequired: b,
      onChange: d
    }: any = h,
    m: any = (x as any) === (void 0 as any) ? !1 : x,
    i: any = (b as any) === (void 0 as any) ? !1 : b;
  let l: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = {
    className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli"
  }, (e as any)[0] = l) : l = (e as any)[0];
  let s: any;
  ((e as any)[1] as any) !== (a as any) || ((e as any)[2] as any) !== (c as any) || ((e as any)[3] as any) !== (m as any) || ((e as any)[4] as any) !== (i as any) || ((e as any)[5] as any) !== (n as any) || ((e as any)[6] as any) !== (d as any) ? (s = ((u as any).jsx as any)(C, {
    id: a,
    isChecked: c,
    isDisabled: m,
    isRequired: i,
    name: n,
    onChange: d
  }), (e as any)[1] = a, (e as any)[2] = c, (e as any)[3] = m, (e as any)[4] = i, (e as any)[5] = n, (e as any)[6] = d, (e as any)[7] = s) : s = (e as any)[7];
  const f: any = i ? " *" : null;
  let t: any;
  ((e as any)[8] as any) !== (r as any) || ((e as any)[9] as any) !== (f as any) ? (t = ((u as any).jsxs as any)(j, {
    children: [r, f]
  }), (e as any)[8] = r, (e as any)[9] = f, (e as any)[10] = t) : t = (e as any)[10];
  let o: any;
  return ((e as any)[11] as any) !== (s as any) || ((e as any)[12] as any) !== (t as any) ? (o = ((u as any).jsxs as any)("label", {
    ...l,
    children: [s, t]
  }), (e as any)[11] = s, (e as any)[12] = t, (e as any)[13] = o) : o = (e as any)[13], o;
}
export { R as C };
//# debugId=fefaaaa3-9ee4-416a-99b2-1d34c0fd3300
