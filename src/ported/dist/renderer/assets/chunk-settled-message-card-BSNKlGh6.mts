declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "be32f866-4675-406c-b091-05ddb457780a", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-be32f866-4675-406c-b091-05ddb457780a");
  } catch (e: any) {}
} as any)();
import { c as I, r as V, p as R, j as e } from "./index.eager-vendor-Qbf9YA6n.js";
import "./index-ZYxf-aBb.js";
import { aY as g } from "./index.eager-platform-Dcfeegfw.js";
import { u as T, aK as W } from "./index.eager-app-Cj5f8Gby.js";
const $: any = {
  card: {
    kzqmXN: "sand-h8yej3",
    k7Eaqz: "sand-euugli",
    kaIpWk: "sand-gqmno8",
    kVQacm: "sand-b3r6kr",
    k1xSpc: "sand-78zum5",
    kXwgrk: "sand-dt5ytf",
    kOIVth: "sand-883omv",
    kmVPX3: "sand-c7ga6q",
    $$css: !0
  },
  title: {
    kzQI83: "sand-1iyjqo2",
    kmuXW: "sand-s83m0k",
    k7Eaqz: "sand-euugli",
    kHjlTd: "sand-j0a0fe",
    $$css: !0
  },
  summary: {
    k7Eaqz: "sand-euugli",
    kVQacm: "sand-b3r6kr",
    kg5iWk: "sand-lyipyv",
    khDVqt: "sand-uxw1ft",
    $$css: !0
  }
};
function L(this: any, x: any): any {
  const s: any = (((x as any).split as any)(`
`, 1) as any)[0] ?? "";
  return ((s as any).length as any) > (80 as any) ? `${((s as any).slice as any)(0, 79)}\u2026` : s;
}
function X(this: any, x: any): any {
  (X as any).d = 515;
  const s: any = ((I as any).c as any)(34),
    {
      leading: y,
      title: z,
      status: b,
      summary: w,
      note: f,
      tone: E,
      showStatusDot: N
    }: any = x,
    S: any = (N as any) === (void 0 as any) ? !1 : N,
    a: any = ((V as any).useId as any)(),
    q: any = (T as any)(a),
    n: any = (E as any) === ("success" as any);
  let h: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = (R as any)((W as any).transcriptWidget, ($ as any).card), (s as any)[0] = h) : h = (s as any)[0];
  let k: any, j: any;
  ((s as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (k = {
    className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli"
  }, j = {
    className: "sand-78zum5 sand-6s0dn4 sand-1jnr06f sand-1iyjqo2 sand-s83m0k sand-euugli"
  }, (s as any)[1] = k, (s as any)[2] = j) : (k = (s as any)[1], j = (s as any)[2]);
  let t: any;
  ((s as any)[3] as any) !== (q as any) || ((s as any)[4] as any) !== (z as any) || ((s as any)[5] as any) !== (a as any) ? (t = ((e as any).jsx as any)(g, {
    id: a,
    ref: q,
    rootStyle: ($ as any).title,
    size: "lg",
    weight: "medium",
    children: z
  }), (s as any)[3] = q, (s as any)[4] = z, (s as any)[5] = a, (s as any)[6] = t) : t = (s as any)[6];
  let d: any;
  ((s as any)[7] as any) !== (y as any) || ((s as any)[8] as any) !== (t as any) ? (d = ((e as any).jsxs as any)("span", {
    ...j,
    children: [y, t]
  }), (s as any)[7] = y, (s as any)[8] = t, (s as any)[9] = d) : d = (s as any)[9];
  let l: any;
  ((s as any)[10] as any) !== (n as any) ? (l = ({
    0: {
      className: "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-1nn3v0j sand-1bjonze sand-1120s5i sand-1pixwil sand-149ho13 sand-1ciwos8 sand-4b2ntj"
    },
    1: {
      className: "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-1nn3v0j sand-1bjonze sand-1120s5i sand-1pixwil sand-149ho13 sand-1buh4up sand-1w5rjie"
    }
  } as any)[(!!n as any) << (0 as any)], (s as any)[10] = n, (s as any)[11] = l) : l = (s as any)[11];
  let i: any;
  ((s as any)[12] as any) !== (n as any) || ((s as any)[13] as any) !== (S as any) ? (i = S ? ((e as any).jsx as any)("span", {
    "aria-hidden": !0,
    ...({
      0: {
        className: "sand-1v4s8kt sand-ols6we sand-149ho13 sand-2lah0s sand-xa9ouo"
      },
      1: {
        className: "sand-1v4s8kt sand-ols6we sand-149ho13 sand-2lah0s sand-1my5qk1"
      }
    } as any)[(!!n as any) << (0 as any)]
  }) : null, (s as any)[12] = n, (s as any)[13] = S, (s as any)[14] = i) : i = (s as any)[14];
  const v: any = n ? "green" : "secondary";
  let r: any;
  ((s as any)[15] as any) !== (b as any) || ((s as any)[16] as any) !== (v as any) ? (r = ((e as any).jsx as any)(g, {
    color: v,
    size: "sm",
    weight: "medium",
    children: b
  }), (s as any)[15] = b, (s as any)[16] = v, (s as any)[17] = r) : r = (s as any)[17];
  let o: any;
  ((s as any)[18] as any) !== (r as any) || ((s as any)[19] as any) !== (l as any) || ((s as any)[20] as any) !== (i as any) ? (o = ((e as any).jsxs as any)("span", {
    ...l,
    children: [i, r]
  }), (s as any)[18] = r, (s as any)[19] = l, (s as any)[20] = i, (s as any)[21] = o) : o = (s as any)[21];
  let c: any;
  ((s as any)[22] as any) !== (o as any) || ((s as any)[23] as any) !== (d as any) ? (c = ((e as any).jsxs as any)("div", {
    ...k,
    children: [d, o]
  }), (s as any)[22] = o, (s as any)[23] = d, (s as any)[24] = c) : c = (s as any)[24];
  let m: any;
  ((s as any)[25] as any) !== (w as any) ? (m = ((e as any).jsx as any)(g, {
    rootStyle: ($ as any).summary,
    color: "secondary",
    size: "lg",
    children: w
  }), (s as any)[25] = w, (s as any)[26] = m) : m = (s as any)[26];
  let u: any;
  ((s as any)[27] as any) !== (f as any) ? (u = (f as any) == (null as any) ? null : ((e as any).jsx as any)(g, {
    color: "secondary",
    size: "md",
    children: f
  }), (s as any)[27] = f, (s as any)[28] = u) : u = (s as any)[28];
  let p: any;
  return ((s as any)[29] as any) !== (c as any) || ((s as any)[30] as any) !== (m as any) || ((s as any)[31] as any) !== (u as any) || ((s as any)[32] as any) !== (a as any) ? (p = ((e as any).jsxs as any)("section", {
    ...h,
    "aria-labelledby": a,
    role: "region",
    children: [c, m, u]
  }), (s as any)[29] = c, (s as any)[30] = m, (s as any)[31] = u, (s as any)[32] = a, (s as any)[33] = p) : p = (s as any)[33], p;
}
export { X as S, L as b };
//# debugId=be32f866-4675-406c-b091-05ddb457780a
