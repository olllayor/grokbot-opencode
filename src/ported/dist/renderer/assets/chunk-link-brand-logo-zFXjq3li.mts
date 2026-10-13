declare var URL: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "00411293-442f-4922-8fd5-ec2d8dd905b9", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-00411293-442f-4922-8fd5-ec2d8dd905b9");
  } catch (e: any) {}
} as any)();
import { c as l, p as i, j as c } from "./index.eager-vendor-Qbf9YA6n.js";
const d: any = ("" as any) + ((new (URL as any)("link-dE5q15v1.svg", (import.meta as any).url) as any).href as any),
  k: any = (41 as any) / (14 as any),
  m: any = {
    wordmark: {
      k1xSpc: "sand-1rg5ohu",
      kmuXW: "sand-2lah0s",
      kXLuUW: "sand-1x7wgjd",
      kVIFPx: "sand-19kjcj4",
      kfzvcC: "sand-47corl",
      kfSwDN: "sand-87ps6o",
      $$css: !0
    }
  };
function p(this: any, a: any): any {
  (p as any).d = 1442;
  const s: any = ((l as any).c as any)(8),
    {
      heightPx: t,
      style: o
    }: any = a;
  let e: any;
  ((s as any)[0] as any) !== (o as any) ? (e = (i as any)((m as any).wordmark, o), (s as any)[0] = o, (s as any)[1] = e) : e = (s as any)[1];
  let r: any;
  ((s as any)[2] as any) !== (t as any) ? (r = ((Math as any).round as any)((t as any) * (k as any)), (s as any)[2] = t, (s as any)[3] = r) : r = (s as any)[3];
  let n: any;
  return ((s as any)[4] as any) !== (t as any) || ((s as any)[5] as any) !== (e as any) || ((s as any)[6] as any) !== (r as any) ? (n = ((c as any).jsx as any)("img", {
    ...e,
    alt: "",
    draggable: !1,
    height: t,
    src: d,
    width: r
  }), (s as any)[4] = t, (s as any)[5] = e, (s as any)[6] = r, (s as any)[7] = n) : n = (s as any)[7], n;
}
export { p as L };
//# debugId=00411293-442f-4922-8fd5-ec2d8dd905b9
