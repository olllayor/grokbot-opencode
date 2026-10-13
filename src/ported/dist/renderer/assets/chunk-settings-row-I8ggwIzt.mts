declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "e466098c-858b-4339-bbf1-f4044e7a6f72", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-e466098c-858b-4339-bbf1-f4044e7a6f72");
  } catch (e: any) {}
} as any)();
import { c as E, j as t, p as I, u as M } from "./index.eager-vendor-Qbf9YA6n.js";
import { a$ as W, a_ as K, a4 as P, r as A, aK as Q, cc as H, dj as O, dk as J, dl as U } from "./index.eager-app-Cj5f8Gby.js";
import { ba as V, n as X, m as Y } from "./index-ZYxf-aBb.js";
import { aY as Z } from "./index.eager-platform-Dcfeegfw.js";
const ss: any = {
  title: {
    keoZOQ: "sand-dj266r",
    k71WvV: "sand-14z9mp",
    k1K539: "sand-at24cr",
    keTefX: "sand-1lziwak",
    kwRFfy: "sand-1tlft3r",
    kZCmMZ: "sand-22095l",
    kMwMTN: "sand-1o0liin",
    $$css: !0
  }
};
function as(this: any, m: any): any {
  (as as any).d = 1284;
  const s: any = ((E as any).c as any)(12),
    {
      title: a,
      children: l,
      surface: d
    }: any = m,
    r: any = (d as any) === (void 0 as any) ? "card" : d;
  let i: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = {
    className: "sand-78zum5 sand-dt5ytf sand-1qjc9v5 sand-ehausa"
  }, (s as any)[0] = i) : i = (s as any)[0];
  const o: any = (i as any).className;
  let n: any;
  ((s as any)[1] as any) !== (a as any) ? (n = (a as any) == (null as any) ? null : ((t as any).jsx as any)("h3", {
    className: ((I as any)((ss as any).title, (K as any).label, (W as any).regular) as any).className,
    children: a
  }), (s as any)[1] = a, (s as any)[2] = n) : n = (s as any)[2];
  let e: any;
  ((s as any)[3] as any) !== (r as any) || ((s as any)[4] as any) !== (a as any) ? (e = ({
    0: {
      className: "sand-78zum5 sand-dt5ytf sand-ehausa sand-1tlft3r sand-22095l"
    },
    2: {
      className: "sand-78zum5 sand-dt5ytf sand-7giv3 sand-13ly8rp sand-1xlntvz sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-1pkpdue"
    },
    1: {
      className: "sand-78zum5 sand-dt5ytf sand-ehausa sand-yri2b sand-1c1uobl"
    },
    3: {
      className: "sand-78zum5 sand-dt5ytf sand-7giv3 sand-13ly8rp sand-1xlntvz sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-1pkpdue sand-yri2b sand-1c1uobl"
    }
  } as any)[((((r as any) === ("card" as any)) as any) << (1 as any) as any) | ((((r as any) === ("plain" as any) && (a as any) == (null as any)) as any) << (0 as any) as any)], (s as any)[3] = r, (s as any)[4] = a, (s as any)[5] = e) : e = (s as any)[5];
  let u: any;
  ((s as any)[6] as any) !== (l as any) || ((s as any)[7] as any) !== ((e as any).className as any) ? (u = ((t as any).jsx as any)("div", {
    className: (e as any).className,
    children: l
  }), (s as any)[6] = l, (s as any)[7] = (e as any).className, (s as any)[8] = u) : u = (s as any)[8];
  let f: any;
  return ((s as any)[9] as any) !== (n as any) || ((s as any)[10] as any) !== (u as any) ? (f = ((t as any).jsxs as any)("section", {
    className: o,
    children: [n, u]
  }), (s as any)[9] = n, (s as any)[10] = u, (s as any)[11] = f) : f = (s as any)[11], f;
}
const ns: any = {
  hint: {
    kB7OPa: "sand-9f619",
    keoZOQ: "sand-1kgmq87",
    $$css: !0
  },
  label: {
    k7Eaqz: "sand-euugli",
    $$css: !0
  }
};
function D(this: any, m: any): any {
  (D as any).d = 1309;
  const s: any = ((E as any).c as any)(3),
    {
      children: a
    }: any = m;
  let l: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = (A as any)("sand-settings-field__hint", "sand-9f619 sand-1kgmq87"), (s as any)[0] = l) : l = (s as any)[0];
  let d: any;
  return ((s as any)[1] as any) !== (a as any) ? (d = ((t as any).jsx as any)(Z, {
    as: "span",
    className: l,
    color: "secondary",
    size: "md",
    children: a
  }), (s as any)[1] = a, (s as any)[2] = d) : d = (s as any)[2], d;
}
function F(this: any, m: any): any {
  (F as any).d = 1307;
  const {
    anchor: s
  }: any = m;
  return (O as any)(s);
}
function G(this: any, m: any): any {
  (G as any).d = 1308;
  const s: any = ((E as any).c as any)(8),
    {
      anchor: a,
      label: l
    }: any = m,
    {
      _: d
    }: any = (M as any)(),
    r: any = (O as any)(a),
    i: any = l ?? r;
  let o: any;
  ((s as any)[0] as any) !== (d as any) || ((s as any)[1] as any) !== (i as any) ? (o = (d as any)({
    id: "Jeg176",
    values: {
      setting: i
    }
  }), (s as any)[0] = d, (s as any)[1] = i, (s as any)[2] = o) : o = (s as any)[2];
  let n: any;
  ((s as any)[3] as any) !== (a as any) ? (n = (J as any)(a), (s as any)[3] = a, (s as any)[4] = n) : n = (s as any)[4];
  let e: any;
  return ((s as any)[5] as any) !== (o as any) || ((s as any)[6] as any) !== (n as any) ? (e = ((t as any).jsx as any)(Y, {
    label: o,
    url: n
  }), (s as any)[5] = o, (s as any)[6] = n, (s as any)[7] = e) : e = (s as any)[7], e;
}
function es(this: any, m: any): any {
  (es as any).d = 1310;
  const s: any = ((E as any).c as any)(45),
    {
      label: a,
      description: l,
      extraCopy: d,
      children: r,
      variant: i,
      anchorId: o,
      copyText: n,
      labelToken: e,
      settingName: u,
      labelFocusRef: f
    }: any = m,
    h: any = (((i as any) === (void 0 as any) ? "default" : i) as any) === ("card" as any),
    c: any = (o as any) === (H as any) ? null : o;
  let _: any;
  ((s as any)[0] as any) !== (a as any) || ((s as any)[1] as any) !== (e as any) ? (_ = (a as any) == (null as any) || (e as any) == (null as any) ? a : ((t as any).jsx as any)(P, {
    dir: (e as any).dir,
    text: a,
    token: (e as any).text
  }), (s as any)[0] = a, (s as any)[1] = e, (s as any)[2] = _) : _ = (s as any)[2];
  const L: any = _;
  let q: any;
  ((s as any)[3] as any) !== (c as any) || ((s as any)[4] as any) !== (L as any) ? (q = L ?? ((c as any) == (null as any) ? null : ((t as any).jsx as any)(F, {
    anchor: c
  })), (s as any)[3] = c, (s as any)[4] = L, (s as any)[5] = q) : q = (s as any)[5];
  const T: any = q;
  (V as any)(c);
  let b: any;
  ((s as any)[6] as any) !== (h as any) ? (b = (A as any)("sand-settings-row", (({
    0: {
      className: "sand-9f619 sand-78zum5 sand-1a02dak sand-1cy8zhl sand-1qughib sand-1qgv0r9 sand-3pnbk8 sand-1xr8qbc sand-jodmca"
    },
    1: {
      className: "sand-9f619 sand-78zum5 sand-1a02dak sand-1qughib sand-3pnbk8 sand-1xr8qbc sand-jodmca sand-1n2onr6 sand-6s0dn4 sand-1pzdu40 sand-oyc9vk sand-1n9uuka sand-2lprc sand-cssynl"
    }
  } as any)[(!!h as any) << (0 as any)] as any).className), (s as any)[6] = h, (s as any)[7] = b) : b = (s as any)[7];
  let y: any;
  ((s as any)[8] as any) !== (c as any) ? (y = (c as any) == (null as any) ? void 0 : (U as any)(c), (s as any)[8] = c, (s as any)[9] = y) : y = (s as any)[9];
  let k: any;
  ((s as any)[10] as any) !== (h as any) ? (k = (A as any)("sand-settings-copy", (({
    0: {
      className: "sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-1rnznto sand-dt5ytf sand-17d4w8g sand-euugli sand-1t8xbu sand-1mzt3pk"
    },
    1: {
      className: "sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-1rnznto sand-dt5ytf sand-euugli sand-1t8xbu sand-1mzt3pk sand-137clkk"
    }
  } as any)[(!!h as any) << (0 as any)] as any).className), (s as any)[10] = h, (s as any)[11] = k) : k = (s as any)[11];
  let $: any;
  ((s as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? ($ = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1jnr06f sand-euugli"
  }, (s as any)[12] = $) : $ = (s as any)[12];
  const C: any = h ? "primary" : "secondary",
    B: any = h ? "md" : "sm";
  let p: any;
  ((s as any)[13] as any) !== (T as any) || ((s as any)[14] as any) !== (f as any) ? (p = (f as any) == (null as any) ? T : ((t as any).jsx as any)("span", {
    ref: f,
    ...(I as any)((Q as any).controlRing),
    children: T
  }), (s as any)[13] = T, (s as any)[14] = f, (s as any)[15] = p) : p = (s as any)[15];
  let x: any;
  ((s as any)[16] as any) !== (p as any) || ((s as any)[17] as any) !== (C as any) || ((s as any)[18] as any) !== (B as any) ? (x = ((t as any).jsx as any)(Z, {
    as: "span",
    color: C,
    rootStyle: (ns as any).label,
    size: B,
    children: p
  }), (s as any)[16] = p, (s as any)[17] = C, (s as any)[18] = B, (s as any)[19] = x) : x = (s as any)[19];
  let g: any;
  ((s as any)[20] as any) !== (n as any) ? (g = (n as any) == (null as any) ? null : ((t as any).jsx as any)(X, {
    label: (n as any).label,
    text: (n as any).value
  }), (s as any)[20] = n, (s as any)[21] = g) : g = (s as any)[21];
  let N: any;
  ((s as any)[22] as any) !== (a as any) || ((s as any)[23] as any) !== (c as any) || ((s as any)[24] as any) !== (u as any) ? (N = (c as any) == (null as any) ? null : ((t as any).jsx as any)(G, {
    anchor: c,
    label: u ?? a
  }), (s as any)[22] = a, (s as any)[23] = c, (s as any)[24] = u, (s as any)[25] = N) : N = (s as any)[25];
  let j: any;
  ((s as any)[26] as any) !== (x as any) || ((s as any)[27] as any) !== (g as any) || ((s as any)[28] as any) !== (N as any) ? (j = ((t as any).jsxs as any)("div", {
    className: ($ as any).className,
    children: [x, g, N]
  }), (s as any)[26] = x, (s as any)[27] = g, (s as any)[28] = N, (s as any)[29] = j) : j = (s as any)[29];
  let v: any;
  ((s as any)[30] as any) !== (l as any) ? (v = (l as any) != (null as any) ? ((t as any).jsx as any)(D, {
    children: l
  }) : null, (s as any)[30] = l, (s as any)[31] = v) : v = (s as any)[31];
  let z: any;
  ((s as any)[32] as any) !== (d as any) || ((s as any)[33] as any) !== (j as any) || ((s as any)[34] as any) !== (v as any) || ((s as any)[35] as any) !== (k as any) ? (z = ((t as any).jsxs as any)("div", {
    className: k,
    children: [j, v, d]
  }), (s as any)[32] = d, (s as any)[33] = j, (s as any)[34] = v, (s as any)[35] = k, (s as any)[36] = z) : z = (s as any)[36];
  let R: any;
  ((s as any)[37] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (R = (A as any)("sand-settings-control", "sand-9f619 sand-78zum5 sand-dt5ytf sand-uk3077 sand-1iyjqo2 sand-1fig6rf sand-1t8xbu sand-vc5jky sand-xhr3t"), (s as any)[37] = R) : R = (s as any)[37];
  let S: any;
  ((s as any)[38] as any) !== (r as any) ? (S = ((t as any).jsx as any)("div", {
    className: R,
    children: r
  }), (s as any)[38] = r, (s as any)[39] = S) : S = (s as any)[39];
  let w: any;
  return ((s as any)[40] as any) !== (z as any) || ((s as any)[41] as any) !== (S as any) || ((s as any)[42] as any) !== (b as any) || ((s as any)[43] as any) !== (y as any) ? (w = ((t as any).jsxs as any)("div", {
    className: b,
    id: y,
    children: [z, S]
  }), (s as any)[40] = z, (s as any)[41] = S, (s as any)[42] = b, (s as any)[43] = y, (s as any)[44] = w) : w = (s as any)[44], w;
}
export { as as G, D as S, es as a, G as b, ns as s };
//# debugId=e466098c-858b-4339-bbf1-f4044e7a6f72
