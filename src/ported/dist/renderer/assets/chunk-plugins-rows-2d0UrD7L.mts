declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "abd92b58-c725-4cc6-a630-d5e235764c9f", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-abd92b58-c725-4cc6-a630-d5e235764c9f");
  } catch (e: any) {}
} as any)();
import { c as p, u as O, r as G, j as t, p as H, T as R } from "./index.eager-vendor-Qbf9YA6n.js";
import { r as i, bj as Q } from "./index.eager-app-Cj5f8Gby.js";
import { W as F } from "./index-ZYxf-aBb.js";
import { aY as Y } from "./index.eager-platform-Dcfeegfw.js";
import { g as K, a as V } from "./chunk-mcp-connector-status-DhhAF8A6.js";
const A: any = {
  status: {
    kB7OPa: "sand-9f619",
    kGuDYH: "sand-11wthnw",
    kLWn49: "sand-d4r4e8",
    kb6lSQ: "sand-12oo3zp",
    kMwMTN: "sand-4b2ntj",
    khDVqt: "sand-uxw1ft",
    $$css: !0
  },
  statusConnected: {
    kMwMTN: "sand-98zg7y",
    $$css: !0
  },
  statusWarn: {
    kMwMTN: "sand-1izesbo",
    $$css: !0
  },
  statusError: {
    kMwMTN: "sand-pmgbkh",
    $$css: !0
  }
};
function J(this: any, l: any): any {
  (J as any).d = 1162;
  const s: any = ((p as any).c as any)(13),
    {
      title: a,
      titleId: e,
      action: d,
      children: n
    }: any = l;
  let c: any, o: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = (i as any)("sand-plugins__group", "sand-9f619 sand-78zum5 sand-dt5ytf sand-xhr3t"), o = (i as any)("sand-9f619 sand-78zum5 sand-1pha0wt sand-1qughib sand-167g77z"), (s as any)[0] = c, (s as any)[1] = o) : (c = (s as any)[0], o = (s as any)[1]);
  let r: any;
  ((s as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = {
    className: "sand-9f619 sand-1y1aw1k sand-f159sx sand-10b6aqq sand-1g0dm76 sand-4b2ntj"
  }, (s as any)[2] = r) : r = (s as any)[2];
  let u: any;
  ((s as any)[3] as any) !== (a as any) || ((s as any)[4] as any) !== (e as any) ? (u = ((t as any).jsx as any)(Y, {
    as: "h3",
    className: (r as any).className,
    id: e,
    size: "sm",
    children: a
  }), (s as any)[3] = a, (s as any)[4] = e, (s as any)[5] = u) : u = (s as any)[5];
  const f: any = d ?? null;
  let m: any;
  ((s as any)[6] as any) !== (u as any) || ((s as any)[7] as any) !== (f as any) ? (m = ((t as any).jsxs as any)("div", {
    className: o,
    children: [u, f]
  }), (s as any)[6] = u, (s as any)[7] = f, (s as any)[8] = m) : m = (s as any)[8];
  let b: any;
  return ((s as any)[9] as any) !== (n as any) || ((s as any)[10] as any) !== (m as any) || ((s as any)[11] as any) !== (e as any) ? (b = ((t as any).jsxs as any)("section", {
    "aria-labelledby": e,
    className: c,
    children: [m, n]
  }), (s as any)[9] = n, (s as any)[10] = m, (s as any)[11] = e, (s as any)[12] = b) : b = (s as any)[12], b;
}
function U(this: any, l: any): any {
  (U as any).d = 1159;
  const s: any = ((p as any).c as any)(4),
    {
      label: a,
      onAction: e
    }: any = l;
  let d: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = (i as any)("sand-plugins__group-action", "sand-jyslct sand-1lugfcp sand-9f619 sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-amitd3 sand-1453kmi sand-1nn3v0j sand-ftzfs8 sand-1120s5i sand-19tkhrw sand-c342km sand-ng3xce sand-149ho13 sand-jbqb8w sand-aalx5g sand-19aaqeu sand-7gh5u8 sand-jb2p0i sand-1wm8ruf sand-1d3mw78 sand-1ypdohk sand-1t137rt sand-9v5kkp sand-1k57tk5 sand-784prv sand-1uczgqu sand-1iolv91"), (s as any)[0] = d) : d = (s as any)[0];
  let n: any;
  return ((s as any)[1] as any) !== (a as any) || ((s as any)[2] as any) !== (e as any) ? (n = ((t as any).jsx as any)("button", {
    className: d,
    onClick: e,
    type: "button",
    children: a
  }), (s as any)[1] = a, (s as any)[2] = e, (s as any)[3] = n) : n = (s as any)[3], n;
}
function X(this: any, l: any): any {
  (X as any).d = 1161;
  const s: any = ((p as any).c as any)(6),
    {
      labelledBy: a,
      isFullWidth: e,
      children: d
    }: any = l,
    n: any = (e as any) === (void 0 as any) ? !1 : e;
  let c: any;
  ((s as any)[0] as any) !== (n as any) ? (c = (i as any)("sand-plugins__grid", (({
    0: {
      className: "sand-9f619 sand-rvj5dj sand-nby9oq sand-1ap1fj8 sand-1dbijih sand-3ct3a4 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl"
    },
    1: {
      className: "sand-9f619 sand-rvj5dj sand-1ap1fj8 sand-1dbijih sand-3ct3a4 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl sand-1mkdm3x"
    }
  } as any)[(!!n as any) << (0 as any)] as any).className), (s as any)[0] = n, (s as any)[1] = c) : c = (s as any)[1];
  let o: any;
  return ((s as any)[2] as any) !== (d as any) || ((s as any)[3] as any) !== (a as any) || ((s as any)[4] as any) !== (c as any) ? (o = ((t as any).jsx as any)("ul", {
    "aria-labelledby": a,
    className: c,
    children: d
  }), (s as any)[2] = d, (s as any)[3] = a, (s as any)[4] = c, (s as any)[5] = o) : o = (s as any)[5], o;
}
function Z(this: any, l: any): any {
  (Z as any).d = 1160;
  const s: any = ((p as any).c as any)(42),
    {
      icon: a,
      name: e,
      wrapsName: d,
      byline: n,
      badge: c,
      subtitle: o,
      trailing: r,
      trailingOpensRow: u,
      onOpen: f
    }: any = l,
    m: any = (d as any) === (void 0 as any) ? !1 : d,
    b: any = (u as any) === (void 0 as any) ? !1 : u,
    {
      _: I
    }: any = (O as any)(),
    h: any = ((G as any).useId as any)(),
    z: any = ((G as any).useId as any)(),
    j: any = (f as any) != (null as any) && b,
    P: any = j ? z : void 0;
  let g: any;
  ((s as any)[0] as any) !== (f as any) || ((s as any)[1] as any) !== (b as any) ? (g = (i as any)("sand-plugins-row__trailing", (({
    0: {
      className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1c4vz4f sand-2lah0s sand-dl72j9"
    },
    1: {
      className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-1n2onr6 sand-1vjfegm"
    }
  } as any)[(((f as any) != (null as any) && !b) as any) << (0 as any)] as any).className), (s as any)[0] = f, (s as any)[1] = b, (s as any)[2] = g) : g = (s as any)[2];
  let S: any;
  ((s as any)[3] as any) !== (P as any) || ((s as any)[4] as any) !== (g as any) || ((s as any)[5] as any) !== (r as any) ? (S = ((t as any).jsx as any)("span", {
    id: P,
    className: g,
    children: r
  }), (s as any)[3] = P, (s as any)[4] = g, (s as any)[5] = r, (s as any)[6] = S) : S = (s as any)[6];
  const q: any = S;
  let $: any, M: any;
  ((s as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? ($ = (i as any)("sand-plugins-row__main", "sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-dt5ytf sand-12mrbbr sand-euugli"), M = (i as any)("sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli"), (s as any)[7] = $, (s as any)[8] = M) : ($ = (s as any)[7], M = (s as any)[8]);
  let N: any;
  ((s as any)[9] as any) !== (m as any) ? (N = (i as any)("sand-plugins-row__name", (({
    0: {
      className: "sand-9f619 sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-1rhlpx6 sand-1wd3ewq sand-lyipyv sand-uxw1ft"
    },
    1: {
      className: "sand-9f619 sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-1rhlpx6 sand-1wd3ewq sand-lyipyv sand-j0a0fe sand-eaf4i8"
    }
  } as any)[(!!m as any) << (0 as any)] as any).className), (s as any)[9] = m, (s as any)[10] = N) : N = (s as any)[10];
  let w: any;
  ((s as any)[11] as any) !== (e as any) || ((s as any)[12] as any) !== (N as any) || ((s as any)[13] as any) !== (h as any) ? (w = ((t as any).jsx as any)("span", {
    className: N,
    id: h,
    children: e
  }), (s as any)[11] = e, (s as any)[12] = N, (s as any)[13] = h, (s as any)[14] = w) : w = (s as any)[14];
  let y: any;
  ((s as any)[15] as any) !== (n as any) ? (y = (n as any) != (null as any) && ((n as any).length as any) > (0 as any) ? ((t as any).jsx as any)("span", {
    className: (i as any)("sand-plugins-row__byline", "sand-9f619 sand-b3r6kr sand-1c4vz4f sand-s83m0k sand-dl72j9 sand-1wm8ruf sand-d4r4e8 sand-12oo3zp sand-4b2ntj sand-lyipyv sand-uxw1ft"),
    children: n
  }) : null, (s as any)[15] = n, (s as any)[16] = y) : y = (s as any)[16];
  const E: any = c ?? null;
  let x: any;
  ((s as any)[17] as any) !== (y as any) || ((s as any)[18] as any) !== (E as any) || ((s as any)[19] as any) !== (w as any) ? (x = ((t as any).jsxs as any)("span", {
    className: M,
    children: [w, y, E]
  }), (s as any)[17] = y, (s as any)[18] = E, (s as any)[19] = w, (s as any)[20] = x) : x = (s as any)[20];
  let _: any;
  ((s as any)[21] as any) !== (o as any) ? (_ = (o as any) != (null as any) && ((o as any).length as any) > (0 as any) ? ((t as any).jsx as any)("span", {
    className: (i as any)("sand-plugins-row__subtitle", "sand-9f619 sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-19aaqeu sand-lyipyv sand-uxw1ft"),
    children: o
  }) : null, (s as any)[21] = o, (s as any)[22] = _) : _ = (s as any)[22];
  let k: any;
  ((s as any)[23] as any) !== (x as any) || ((s as any)[24] as any) !== (_ as any) ? (k = ((t as any).jsxs as any)("span", {
    className: $,
    children: [x, _]
  }), (s as any)[23] = x, (s as any)[24] = _, (s as any)[25] = k) : k = (s as any)[25];
  let T: any;
  ((s as any)[26] as any) !== (a as any) || ((s as any)[27] as any) !== (k as any) ? (T = ((t as any).jsxs as any)((t as any).Fragment, {
    children: [a, k]
  }), (s as any)[26] = a, (s as any)[27] = k, (s as any)[28] = T) : T = (s as any)[28];
  const D: any = T;
  let C: any;
  ((s as any)[29] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (C = (i as any)("sand-plugins-row", "sand-9f619 sand-1n2onr6 sand-c8icb0 sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-euugli sand-z9dl7a sand-j7smf7 sand-sag5q8 sand-s2i5tn sand-gqmno8 sand-jbqb8w sand-1q5pob1"), (s as any)[29] = C) : C = (s as any)[29];
  let v: any;
  ((s as any)[30] as any) !== (I as any) || ((s as any)[31] as any) !== (D as any) || ((s as any)[32] as any) !== (e as any) || ((s as any)[33] as any) !== (f as any) || ((s as any)[34] as any) !== (z as any) || ((s as any)[35] as any) !== (j as any) || ((s as any)[36] as any) !== (q as any) ? (v = (f as any) != (null as any) ? ((t as any).jsxs as any)("button", {
    "aria-describedby": j ? z : void 0,
    "aria-label": (I as any)({
      id: "T9mwDN",
      values: {
        name: e
      }
    }),
    className: (i as any)("sand-plugins-row__open", "sand-9f619 sand-78zum5 sand-6s0dn4 sand-883omv sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-euugli sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl sand-c342km sand-ng3xce sand-jbqb8w sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk sand-1t137rt sand-1kogg8i sand-1s928wv sand-1j6awrg sand-arstr8 sand-1w00h3t sand-1t8vtw7"),
    onClick: f,
    type: "button",
    children: [D, j ? q : null]
  }) : D, (s as any)[30] = I, (s as any)[31] = D, (s as any)[32] = e, (s as any)[33] = f, (s as any)[34] = z, (s as any)[35] = j, (s as any)[36] = q, (s as any)[37] = v) : v = (s as any)[37];
  const L: any = j ? null : q;
  let B: any;
  return ((s as any)[38] as any) !== (v as any) || ((s as any)[39] as any) !== (L as any) || ((s as any)[40] as any) !== (h as any) ? (B = ((t as any).jsxs as any)("li", {
    "aria-labelledby": h,
    className: C,
    children: [v, L]
  }), (s as any)[38] = v, (s as any)[39] = L, (s as any)[40] = h, (s as any)[41] = B) : B = (s as any)[41], B;
}
function ss(this: any, l: any): any {
  (ss as any).d = 1158;
  const s: any = ((p as any).c as any)(16),
    {
      server: a
    }: any = l,
    {
      _: e
    }: any = (O as any)(),
    {
      i18n: d
    }: any = (O as any)();
  let n: any, c: any;
  if (((s as any)[0] as any) !== (d as any) || ((s as any)[1] as any) !== ((a as any).status as any) || ((s as any)[2] as any) !== ((a as any).statusDetail as any)) {
    const f: any = ({
      connected: (A as any).statusConnected,
      warn: (A as any).statusWarn,
      danger: (A as any).statusError,
      neutral: null
    } as any)[(K as any)((a as any).status)];
    let m: any;
    ((s as any)[5] as any) !== (d as any) || ((s as any)[6] as any) !== ((a as any).statusDetail as any) ? (m = (Q as any)((a as any).statusDetail, d), (s as any)[5] = d, (s as any)[6] = (a as any).statusDetail, (s as any)[7] = m) : m = (s as any)[7], n = m, c = (i as any)("sand-plugins__status", ((H as any)((A as any).status, f) as any).className), (s as any)[0] = d, (s as any)[1] = (a as any).status, (s as any)[2] = (a as any).statusDetail, (s as any)[3] = n, (s as any)[4] = c;
  } else n = (s as any)[3], c = (s as any)[4];
  const o: any = (a as any).status;
  let r: any;
  ((s as any)[8] as any) !== (e as any) || ((s as any)[9] as any) !== ((a as any).status as any) ? (r = (V as any)(e, (a as any).status), (s as any)[8] = e, (s as any)[9] = (a as any).status, (s as any)[10] = r) : r = (s as any)[10];
  let u: any;
  return ((s as any)[11] as any) !== ((a as any).status as any) || ((s as any)[12] as any) !== (n as any) || ((s as any)[13] as any) !== (c as any) || ((s as any)[14] as any) !== (r as any) ? (u = ((t as any).jsx as any)("span", {
    className: c,
    "data-status": o,
    role: "status",
    title: n,
    children: r
  }), (s as any)[11] = (a as any).status, (s as any)[12] = n, (s as any)[13] = c, (s as any)[14] = r, (s as any)[15] = u) : u = (s as any)[15], u;
}
function W(this: any, l: any): any {
  (W as any).d = 1156;
  const s: any = ((p as any).c as any)(4),
    {
      children: a
    }: any = l;
  let e: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (e = (i as any)("sand-plugins__added", "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-1nejdyq sand-1nn3v0j sand-f159sx sand-1120s5i sand-25sj25 sand-149ho13 sand-4b2ntj sand-1wm8ruf sand-1d3mw78 sand-uxw1ft"), (s as any)[0] = e) : e = (s as any)[0];
  let d: any;
  ((s as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = ((t as any).jsx as any)(F, {
    className: "sand-9f619 sand-98zg7y",
    name: "check",
    size: 12
  }), (s as any)[1] = d) : d = (s as any)[1];
  let n: any;
  return ((s as any)[2] as any) !== (a as any) ? (n = ((t as any).jsxs as any)("span", {
    className: e,
    children: [d, a]
  }), (s as any)[2] = a, (s as any)[3] = n) : n = (s as any)[3], n;
}
function as(this: any): any {
  (as as any).d = 1155;
  const l: any = ((p as any).c as any)(1);
  let s: any;
  return ((l as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(W, {
    children: ((t as any).jsx as any)(R, {
      id: "hp8OtS"
    })
  }), (l as any)[0] = s) : s = (l as any)[0], s;
}
function ns(this: any): any {
  (ns as any).d = 1157;
  const l: any = ((p as any).c as any)(1);
  let s: any;
  return ((l as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(W, {
    children: ((t as any).jsx as any)(R, {
      id: "QHcLEN"
    })
  }), (l as any)[0] = s) : s = (l as any)[0], s;
}
function es(this: any, l: any): any {
  (es as any).d = 1164;
  const s: any = ((p as any).c as any)(5),
    {
      title: a
    }: any = l;
  let e: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (e = (i as any)("sand-plugins__team-badge", "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-1jnr06f sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-4p5aij sand-1icxu4v sand-1j85h84 sand-aso8d8 sand-149ho13 sand-jdhboh sand-4b2ntj sand-y5h43f sand-1d3mw78 sand-uxw1ft"), (s as any)[0] = e) : e = (s as any)[0];
  let d: any, n: any;
  ((s as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = ((t as any).jsx as any)(F, {
    name: "people",
    size: 12
  }), n = ((t as any).jsx as any)(R, {
    id: "KM6m8p"
  }), (s as any)[1] = d, (s as any)[2] = n) : (d = (s as any)[1], n = (s as any)[2]);
  let c: any;
  return ((s as any)[3] as any) !== (a as any) ? (c = ((t as any).jsxs as any)("span", {
    className: e,
    title: a,
    children: [d, n]
  }), (s as any)[3] = a, (s as any)[4] = c) : c = (s as any)[4], c;
}
function ds(this: any, l: any): any {
  (ds as any).d = 1154;
  const s: any = ((p as any).c as any)(4),
    {
      label: a
    }: any = l;
  let e: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (e = (i as any)("sand-plugins__add-pending", "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-d7y6wv sand-2vl965 sand-e2zdcy"), (s as any)[0] = e) : e = (s as any)[0];
  let d: any;
  ((s as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = ((t as any).jsx as any)("span", {
    "aria-hidden": !0,
    className: (i as any)("sand-9f619 sand-6jxa94 sand-1v9usgg sand-16rqkct sand-dh2fpr sand-1y0btm7 sand-zewv6b sand-4usyfx sand-r5sbw0 sand-1aquc0h sand-5orbwg sand-1esw782 sand-a4qsjk")
  }), (s as any)[1] = d) : d = (s as any)[1];
  let n: any;
  return ((s as any)[2] as any) !== (a as any) ? (n = ((t as any).jsx as any)("span", {
    "aria-label": a,
    className: e,
    role: "status",
    children: d
  }), (s as any)[2] = a, (s as any)[3] = n) : n = (s as any)[3], n;
}
function ts(this: any, l: any): any {
  (ts as any).d = 1163;
  const s: any = ((p as any).c as any)(4),
    {
      hiddenLabel: a,
      onShowAll: e
    }: any = l;
  let d: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = (i as any)("sand-plugins__show-all", "sand-9f619 sand-qcrz7y sand-1iorvi4 sand-f159sx sand-jkvuk6 sand-1g0dm76 sand-c342km sand-ng3xce sand-jbqb8w sand-19aaqeu sand-7gh5u8 sand-jb2p0i sand-1wm8ruf sand-1ypdohk"), (s as any)[0] = d) : d = (s as any)[0];
  let n: any;
  return ((s as any)[1] as any) !== (a as any) || ((s as any)[2] as any) !== (e as any) ? (n = ((t as any).jsx as any)("button", {
    className: d,
    onClick: e,
    type: "button",
    children: a
  }), (s as any)[1] = a, (s as any)[2] = e, (s as any)[3] = n) : n = (s as any)[3], n;
}
export { as as A, ss as C, U as G, X as P, ts as S, es as T, Z as a, ds as b, ns as c, J as d };
//# debugId=abd92b58-c725-4cc6-a630-d5e235764c9f
