declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "a7fb79ba-8d9e-44e2-8fdc-89427de76769", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-a7fb79ba-8d9e-44e2-8fdc-89427de76769");
  } catch (e: any) {}
} as any)();
import { c as M, p as R, j as k } from "./index.eager-vendor-Qbf9YA6n.js";
import { a$ as q, a_ as S, r as W } from "./index.eager-app-Cj5f8Gby.js";
import { W as E } from "./index-ZYxf-aBb.js";
const O: any = {
    "sand--default-marker": "sand--default-marker",
    $$css: !0
  },
  c: any = {
    root: {
      k1xSpc: "sand-3nfvp2",
      kGNEyG: "sand-6s0dn4",
      kOIVth: "sand-1jnr06f",
      ks0D6T: "sand-1ncir08",
      kmuXW: "sand-2lah0s",
      kaIpWk: "sand-149ho13",
      kWkggS: "sand-1tiofj7",
      $$css: !0
    },
    rootSm: {
      kZKoxP: "sand-xk0z11",
      kZCmMZ: "sand-135b78x",
      kwRFfy: "sand-14vy60q",
      $$css: !0
    },
    rootMd: {
      kmVPX3: "sand-1ruevkc",
      $$css: !0
    },
    label: {
      k7Eaqz: "sand-euugli",
      kVQacm: "sand-b3r6kr",
      kg5iWk: "sand-lyipyv",
      khDVqt: "sand-uxw1ft",
      kMwMTN: "sand-tyxrsu",
      $$css: !0
    },
    rootRemoveOnHover: {
      kVAEAm: "sand-1n2onr6",
      $$css: !0
    },
    labelRemoveOnHover: {
      kX1K2I: "sand-18gcsbh sand-4gar82",
      $$css: !0
    }
  };
function V(this: any, w: any): any {
  (V as any).d = 1403;
  const s: any = ((M as any).c as any)(32),
    {
      avatar: p,
      label: f,
      removeLabel: y,
      onRemove: b,
      size: g,
      removeReveal: j,
      className: x,
      style: N,
      labelStyle: i,
      ref: $
    }: any = w,
    l: any = (g as any) === (void 0 as any) ? "md" : g,
    a: any = (j as any) === (void 0 as any) ? "always" : j;
  let e: any, n: any, d: any;
  if (((s as any)[0] as any) !== (x as any) || ((s as any)[1] as any) !== (i as any) || ((s as any)[2] as any) !== (a as any) || ((s as any)[3] as any) !== (l as any) || ((s as any)[4] as any) !== (N as any)) {
    n = (R as any)(O, (c as any).root, (l as any) === ("sm" as any) ? (c as any).rootSm : (c as any).rootMd, (a as any) === ("hover" as any) && (c as any).rootRemoveOnHover, N);
    let u: any;
    ((s as any)[8] as any) !== (i as any) || ((s as any)[9] as any) !== (a as any) || ((s as any)[10] as any) !== (l as any) ? (u = (R as any)((c as any).label, (S as any).label, (l as any) === ("md" as any) && (q as any).medium, (a as any) === ("hover" as any) && (c as any).labelRemoveOnHover, i), (s as any)[8] = i, (s as any)[9] = a, (s as any)[10] = l, (s as any)[11] = u) : u = (s as any)[11], e = u, d = (W as any)("sand-member-chip", (n as any).className, x), (s as any)[0] = x, (s as any)[1] = i, (s as any)[2] = a, (s as any)[3] = l, (s as any)[4] = N, (s as any)[5] = e, (s as any)[6] = n, (s as any)[7] = d;
  } else e = (s as any)[5], n = (s as any)[6], d = (s as any)[7];
  const z: any = (n as any).style;
  let t: any;
  ((s as any)[12] as any) !== (p as any) ? (t = (p as any) != (null as any) ? ((k as any).jsx as any)("span", {
    "aria-hidden": !0,
    className: "sand-3nfvp2 sand-2lah0s",
    children: p
  }) : null, (s as any)[12] = p, (s as any)[13] = t) : t = (s as any)[13];
  let o: any;
  ((s as any)[14] as any) !== (f as any) || ((s as any)[15] as any) !== ((e as any).className as any) || ((s as any)[16] as any) !== ((e as any).style as any) ? (o = ((k as any).jsx as any)("span", {
    className: (e as any).className,
    style: (e as any).style,
    children: f
  }), (s as any)[14] = f, (s as any)[15] = (e as any).className, (s as any)[16] = (e as any).style, (s as any)[17] = o) : o = (s as any)[17];
  let r: any;
  ((s as any)[18] as any) !== (a as any) ? (r = ({
    0: {
      className: "sand-jyslct sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-1kky2od sand-lup9mm sand-2lah0s sand-1ghz6dp sand-1717udv sand-ng3xce sand-149ho13 sand-jbqb8w sand-4hlgfw sand-1o0liin sand-1ypdohk"
    },
    1: {
      className: "sand-jyslct sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-1kky2od sand-lup9mm sand-2lah0s sand-1ghz6dp sand-1717udv sand-ng3xce sand-149ho13 sand-jbqb8w sand-4hlgfw sand-1o0liin sand-1ypdohk sand-10l6tqk sand-wa60dl sand-ceh6e4 sand-1cb1t30 sand-g01cxk sand-1t642l6 sand-25t5g8 sand-19991ni sand-1firant sand-9lcvmn"
    }
  } as any)[(((a as any) === ("hover" as any)) as any) << (0 as any)], (s as any)[18] = a, (s as any)[19] = r) : r = (s as any)[19];
  let v: any;
  ((s as any)[20] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = ((k as any).jsx as any)(E, {
    name: "close",
    size: "xs"
  }), (s as any)[20] = v) : v = (s as any)[20];
  let m: any;
  ((s as any)[21] as any) !== (b as any) || ((s as any)[22] as any) !== (y as any) || ((s as any)[23] as any) !== ((r as any).className as any) ? (m = ((k as any).jsx as any)("button", {
    "aria-label": y,
    className: (r as any).className,
    onClick: b,
    type: "button",
    children: v
  }), (s as any)[21] = b, (s as any)[22] = y, (s as any)[23] = (r as any).className, (s as any)[24] = m) : m = (s as any)[24];
  let h: any;
  return ((s as any)[25] as any) !== ($ as any) || ((s as any)[26] as any) !== ((n as any).style as any) || ((s as any)[27] as any) !== (d as any) || ((s as any)[28] as any) !== (t as any) || ((s as any)[29] as any) !== (o as any) || ((s as any)[30] as any) !== (m as any) ? (h = ((k as any).jsxs as any)("span", {
    className: d,
    ref: $,
    style: z,
    children: [t, o, m]
  }), (s as any)[25] = $, (s as any)[26] = (n as any).style, (s as any)[27] = d, (s as any)[28] = t, (s as any)[29] = o, (s as any)[30] = m, (s as any)[31] = h) : h = (s as any)[31], h;
}
export { V as M };
//# debugId=a7fb79ba-8d9e-44e2-8fdc-89427de76769
