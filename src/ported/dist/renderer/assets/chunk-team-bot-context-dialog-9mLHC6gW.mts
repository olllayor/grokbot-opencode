declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "a731aa0b-df30-43cb-adf2-52a31754a609", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-a731aa0b-df30-43cb-adf2-52a31754a609");
  } catch (e: any) {}
} as any)();
import { c as q, r as A, u as Pe, j as l, p as T, T as _ } from "./index.eager-vendor-Qbf9YA6n.js";
import { a_ as xe, cw as ve, cg as ll, cx as tl, cy as sl, cz as nl, cA as Le, cB as il, cC as al, cD as ol, cE as dl, cF as Oe, cG as cl, cH as Me, cI as rl, cJ as ml, cK as fl, cL as ul, cM as hl, cN as xl, cO as jl, cP as Ae, cQ as yl } from "./index.eager-app-Cj5f8Gby.js";
import { W as Ee, aX as X, z as oe, x as he } from "./index-ZYxf-aBb.js";
import { aY as je } from "./index.eager-platform-Dcfeegfw.js";
import { P as Fe, a as Te, A as qe } from "./chunk-plugins-rows-2d0UrD7L.js";
import { P as pl } from "./chunk-use-team-bot-access-BG6AYhPN.js";
import { u as Ke, f as bl, T as Qe, a as Sl } from "./chunk-team-setup-new-skill-dialog-sf9oPof1.js";
import { g as kl } from "./chunk-get-file-icon-ZAkFyGfn.js";
import { t as gl, b as _l, a as vl } from "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
import { a as wl, b as Bl } from "./chunk-team-setup-pills-7uDu4vf1.js";
const De: any = {
  listCount: {
    kogj98: "sand-1ghz6dp",
    kMwMTN: "sand-1o0liin",
    $$css: !0
  },
  size: {
    kmuXW: "sand-2lah0s",
    kMwMTN: "sand-1o0liin",
    $$css: !0
  }
};
function We(this: any, p: any): any {
  (We as any).d = 982;
  const e: any = ((q as any).c as any)(5),
    {
      name: n
    }: any = p;
  let t: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = {
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-100vrsf sand-1vqgdyp sand-1t6ttyj sand-1tiofj7 sand-1o0liin"
  }, (e as any)[0] = t) : t = (e as any)[0];
  let s: any;
  ((e as any)[1] as any) !== (n as any) ? (s = (kl as any)(n), (e as any)[1] = n, (e as any)[2] = s) : s = (e as any)[2];
  let a: any;
  return ((e as any)[3] as any) !== (s as any) ? (a = ((l as any).jsx as any)("span", {
    "aria-hidden": !0,
    ...t,
    children: ((l as any).jsx as any)(Ee, {
      name: s,
      size: "base"
    })
  }), (e as any)[3] = s, (e as any)[4] = a) : a = (e as any)[4], a;
}
function zl(this: any, p: any): any {
  (zl as any).d = 984;
  const e: any = ((q as any).c as any)(5),
    {
      access: n,
      disabled: t
    }: any = p,
    s: any = ((A as any).useRef as any)(null);
  let a: any;
  ((e as any)[0] as any) !== (n as any) ? (a = {
    readListing: (): any => ((Promise as any).resolve as any)((n as any).listing),
    addSkills: (c: any): any => ((n as any).addSkills as any)(c)
  }, (e as any)[0] = n, (e as any)[1] = a) : a = (e as any)[1];
  let u: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = {
    fileInputRef: s,
    folderInputRef: s
  }, (e as any)[2] = u) : u = (e as any)[2];
  const m: any = (Ke as any)(a, t, u);
  let d: any;
  return ((e as any)[3] as any) !== (m as any) ? (d = ((l as any).jsx as any)(Qe, {
    fileInputRef: s,
    upload: m
  }), (e as any)[3] = m, (e as any)[4] = d) : d = (e as any)[4], d;
}
function He(this: any, p: any): any {
  (He as any).d = 983;
  const e: any = ((q as any).c as any)(14),
    {
      access: n,
      disabled: t,
      files: s,
      onOpenFile: a
    }: any = p,
    {
      _: u
    }: any = (Pe as any)(),
    m: any = ((A as any).useId as any)(),
    d: any = ((A as any).useRef as any)(null);
  let c: any;
  ((e as any)[0] as any) !== (n as any) ? (c = {
    readListing: (): any => ((Promise as any).resolve as any)((n as any).listing),
    addSkills: (z: any): any => ((n as any).addSkills as any)(z)
  }, (e as any)[0] = n, (e as any)[1] = c) : c = (e as any)[1];
  let o: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = {
    fileInputRef: d,
    folderInputRef: d
  }, (e as any)[2] = o) : o = (e as any)[2];
  const h: any = (Ke as any)(c, t, o);
  let r: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = {
    className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-h8yej3 sand-euugli"
  }, (e as any)[3] = r) : r = (e as any)[3];
  let S: any;
  ((e as any)[4] as any) !== (h as any) ? (S = ((l as any).jsx as any)(Qe, {
    fileInputRef: d,
    upload: h
  }), (e as any)[4] = h, (e as any)[5] = S) : S = (e as any)[5];
  let x: any;
  ((e as any)[6] as any) !== (u as any) || ((e as any)[7] as any) !== (s as any) || ((e as any)[8] as any) !== (m as any) || ((e as any)[9] as any) !== (a as any) ? (x = ((s as any).length as any) === (0 as any) ? null : ((l as any).jsxs as any)((l as any).Fragment, {
    children: [((l as any).jsx as any)("p", {
      id: m,
      ...(T as any)((xe as any).body2, (De as any).listCount),
      children: (u as any)({
        id: "kRr3s3",
        values: {
          0: (s as any).length
        }
      })
    }), ((l as any).jsx as any)(Fe, {
      isFullWidth: !0,
      labelledBy: m,
      children: ((s as any).map as any)((z: any): any => {
        const k: any = (ve as any)(z);
        return ((l as any).jsx as any)(Te, {
          icon: ((l as any).jsx as any)(We, {
            name: k
          }),
          name: k,
          onOpen: (): any => (a as any)(z),
          wrapsName: !0,
          subtitle: null,
          trailing: ((l as any).jsx as any)("span", {
            ...(T as any)((xe as any).body2, (De as any).size),
            children: (bl as any)((z as any).content)
          }),
          trailingOpensRow: !0
        }, (z as any).name);
      })
    })]
  }), (e as any)[6] = u, (e as any)[7] = s, (e as any)[8] = m, (e as any)[9] = a, (e as any)[10] = x) : x = (e as any)[10];
  let j: any;
  return ((e as any)[11] as any) !== (S as any) || ((e as any)[12] as any) !== (x as any) ? (j = ((l as any).jsxs as any)("div", {
    ...r,
    children: [S, x]
  }), (e as any)[11] = S, (e as any)[12] = x, (e as any)[13] = j) : j = (e as any)[13], j;
}
const I: any = gl,
  Ie: any = {
    loading: {
      kogj98: "sand-1ghz6dp",
      k9WMMc: "sand-2b8uid",
      kMwMTN: "sand-1o0liin",
      $$css: !0
    },
    noMatches: {
      kogj98: "sand-1ghz6dp",
      kLKAdn: "sand-1y1aw1k",
      kZCmMZ: "sand-1g0dm76",
      kwRFfy: "sand-pdmqnj",
      kMwMTN: "sand-1o0liin",
      $$css: !0
    },
    textarea: {
      kAzted: "sand-1shn012",
      kHenm0: "sand-288g5",
      $$css: !0
    }
  };
function Ge(this: any, p: any): any {
  (Ge as any).d = 974;
  const e: any = ((q as any).c as any)(2),
    {
      surface: n
    }: any = p;
  let t: any;
  return ((e as any)[0] as any) !== (n as any) ? (t = (n as any) === ("files" as any) ? ((l as any).jsx as any)(_, {
    id: "sER+bs"
  }) : ((l as any).jsx as any)(_, {
    id: "PCSkw2"
  }), (e as any)[0] = n, (e as any)[1] = t) : t = (e as any)[1], t;
}
function Ye(this: any, p: any): any {
  (Ye as any).d = 973;
  const e: any = ((q as any).c as any)(3),
    {
      agentName: n,
      surface: t
    }: any = p;
  let s: any;
  return ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (t as any) ? (s = (t as any) === ("files" as any) ? ((l as any).jsx as any)(_, {
    id: "uGw/Ea"
  }) : ((l as any).jsx as any)(_, {
    id: "nYwHT5",
    values: {
      agentName: n
    }
  }), (e as any)[0] = n, (e as any)[1] = t, (e as any)[2] = s) : s = (e as any)[2], s;
}
function Ze(this: any, p: any): any {
  (Ze as any).d = 978;
  const e: any = ((q as any).c as any)(4),
    {
      name: n
    }: any = p;
  let t: any, s: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = {
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-1useyqa sand-sdox4t sand-1t6ttyj sand-1tiofj7 sand-1o0liin"
  }, s = ((l as any).jsx as any)(Ee, {
    name: "book",
    size: "lg"
  }), (e as any)[0] = t, (e as any)[1] = s) : (t = (e as any)[0], s = (e as any)[1]);
  let a: any;
  return ((e as any)[2] as any) !== (n as any) ? (a = ((l as any).jsx as any)("span", {
    "aria-label": n,
    role: "img",
    ...t,
    children: s
  }), (e as any)[2] = n, (e as any)[3] = a) : a = (e as any)[3], a;
}
function de(this: any, p: any): any {
  (de as any).d = 975;
  const e: any = ((q as any).c as any)(7),
    {
      access: n
    }: any = p;
  if (!(n as any).writeFailed && !(n as any).needsRetry) return null;
  let t: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = ((l as any).jsx as any)(je, {
    as: "p",
    color: "red",
    role: "alert",
    size: "sm",
    children: ((l as any).jsx as any)(_, {
      id: "D2AZQg"
    })
  }), (e as any)[0] = t) : t = (e as any)[0];
  let s: any;
  ((e as any)[1] as any) !== ((n as any).isPending as any) || ((e as any)[2] as any) !== ((n as any).needsRetry as any) || ((e as any)[3] as any) !== ((n as any).retry as any) ? (s = (n as any).needsRetry ? ((l as any).jsx as any)(oe, {
    disabled: (n as any).isPending,
    onClick: (n as any).retry,
    size: "sm",
    type: "button",
    variant: "secondary",
    children: ((l as any).jsx as any)(_, {
      id: "qJb6G2"
    })
  }) : null, (e as any)[1] = (n as any).isPending, (e as any)[2] = (n as any).needsRetry, (e as any)[3] = (n as any).retry, (e as any)[4] = s) : s = (e as any)[4];
  let a: any;
  return ((e as any)[5] as any) !== (s as any) ? (a = ((l as any).jsxs as any)((l as any).Fragment, {
    children: [t, s]
  }), (e as any)[5] = s, (e as any)[6] = a) : a = (e as any)[6], a;
}
function Ue(this: any, p: any): any {
  (Ue as any).d = 977;
  const e: any = ((q as any).c as any)(47),
    {
      title: n,
      initialName: t,
      initialContent: s,
      disabled: a,
      onSave: u,
      access: m
    }: any = p,
    d: any = ((A as any).useId as any)(),
    c: any = ((A as any).useId as any)(),
    [o, h]: any = ((A as any).useState as any)(t),
    [r, S]: any = ((A as any).useState as any)(s);
  let x: any;
  ((e as any)[0] as any) !== (r as any) || ((e as any)[1] as any) !== (a as any) || ((e as any)[2] as any) !== (o as any) ? (x = ((((o as any).trim as any)() as any).length as any) > (0 as any) && ((((r as any).trim as any)() as any).length as any) > (0 as any) && !a, (e as any)[0] = r, (e as any)[1] = a, (e as any)[2] = o, (e as any)[3] = x) : x = (e as any)[3];
  const j: any = x;
  let z: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (z = {
    className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d sand-h8yej3 sand-euugli sand-kh2ocl"
  }, (e as any)[4] = z) : z = (e as any)[4];
  let k: any;
  ((e as any)[5] as any) !== (n as any) ? (k = ((l as any).jsx as any)(je, {
    as: "h3",
    size: "lg",
    weight: "semibold",
    children: n
  }), (e as any)[5] = n, (e as any)[6] = k) : k = (e as any)[6];
  let K: any;
  ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (K = {
    className: "sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-17d4w8g sand-h8yej3"
  }, (e as any)[7] = K) : K = (e as any)[7];
  let le: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (le = ((l as any).jsx as any)(je, {
    as: "span",
    size: "sm",
    weight: "semibold",
    children: ((l as any).jsx as any)(_, {
      id: "6YtxFj"
    })
  }), (e as any)[8] = le) : le = (e as any)[8];
  let ne: any;
  ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ne = (se: any): any => (h as any)(((se as any).currentTarget as any).value), (e as any)[9] = ne) : ne = (e as any)[9];
  let D: any;
  ((e as any)[10] as any) !== (o as any) || ((e as any)[11] as any) !== (d as any) ? (D = ((l as any).jsx as any)((X as any).Input, {
    id: d,
    onChange: ne,
    value: o
  }), (e as any)[10] = o, (e as any)[11] = d, (e as any)[12] = D) : D = (e as any)[12];
  let P: any;
  ((e as any)[13] as any) !== (a as any) || ((e as any)[14] as any) !== (D as any) ? (P = ((l as any).jsx as any)(X, {
    disabled: a,
    size: "lg",
    children: D
  }), (e as any)[13] = a, (e as any)[14] = D, (e as any)[15] = P) : P = (e as any)[15];
  let O: any;
  ((e as any)[16] as any) !== (d as any) || ((e as any)[17] as any) !== (P as any) ? (O = ((l as any).jsxs as any)("label", {
    htmlFor: d,
    ...K,
    children: [le, P]
  }), (e as any)[16] = d, (e as any)[17] = P, (e as any)[18] = O) : O = (e as any)[18];
  let E: any;
  ((e as any)[19] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (E = {
    className: "sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-17d4w8g sand-h8yej3"
  }, (e as any)[19] = E) : E = (e as any)[19];
  let $: any;
  ((e as any)[20] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? ($ = ((l as any).jsx as any)(je, {
    as: "span",
    size: "sm",
    weight: "semibold",
    children: ((l as any).jsx as any)(_, {
      id: "4b3oEV"
    })
  }), (e as any)[20] = $) : $ = (e as any)[20];
  let C: any;
  ((e as any)[21] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (C = (se: any): any => (S as any)(((se as any).currentTarget as any).value), (e as any)[21] = C) : C = (e as any)[21];
  let Q: any;
  ((e as any)[22] as any) !== (r as any) || ((e as any)[23] as any) !== (c as any) ? (Q = ((l as any).jsx as any)((X as any).Textarea, {
    id: c,
    onChange: C,
    rows: 8,
    value: r
  }), (e as any)[22] = r, (e as any)[23] = c, (e as any)[24] = Q) : Q = (e as any)[24];
  let te: any;
  ((e as any)[25] as any) !== (a as any) || ((e as any)[26] as any) !== (Q as any) ? (te = ((l as any).jsx as any)(X, {
    disabled: a,
    layout: "textarea",
    rootStyle: (Ie as any).textarea,
    size: "lg",
    children: Q
  }), (e as any)[25] = a, (e as any)[26] = Q, (e as any)[27] = te) : te = (e as any)[27];
  let U: any;
  ((e as any)[28] as any) !== (c as any) || ((e as any)[29] as any) !== (te as any) ? (U = ((l as any).jsxs as any)("label", {
    htmlFor: c,
    ...E,
    children: [$, te]
  }), (e as any)[28] = c, (e as any)[29] = te, (e as any)[30] = U) : U = (e as any)[30];
  const ie: any = !j;
  let V: any;
  ((e as any)[31] as any) !== (r as any) || ((e as any)[32] as any) !== (o as any) || ((e as any)[33] as any) !== (u as any) ? (V = (): any => (u as any)(((o as any).trim as any)(), r), (e as any)[31] = r, (e as any)[32] = o, (e as any)[33] = u, (e as any)[34] = V) : V = (e as any)[34];
  let W: any;
  ((e as any)[35] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (W = ((l as any).jsx as any)(_, {
    id: "tfDRzk"
  }), (e as any)[35] = W) : W = (e as any)[35];
  let H: any;
  ((e as any)[36] as any) !== (ie as any) || ((e as any)[37] as any) !== (V as any) ? (H = ((l as any).jsx as any)(oe, {
    disabled: ie,
    onClick: V,
    size: "sm",
    type: "button",
    variant: "primary",
    children: W
  }), (e as any)[36] = ie, (e as any)[37] = V, (e as any)[38] = H) : H = (e as any)[38];
  let M: any;
  ((e as any)[39] as any) !== (m as any) ? (M = ((l as any).jsx as any)(de, {
    access: m
  }), (e as any)[39] = m, (e as any)[40] = M) : M = (e as any)[40];
  let G: any;
  return ((e as any)[41] as any) !== (U as any) || ((e as any)[42] as any) !== (H as any) || ((e as any)[43] as any) !== (M as any) || ((e as any)[44] as any) !== (k as any) || ((e as any)[45] as any) !== (O as any) ? (G = ((l as any).jsxs as any)("div", {
    ...z,
    children: [k, O, U, H, M]
  }), (e as any)[41] = U, (e as any)[42] = H, (e as any)[43] = M, (e as any)[44] = k, (e as any)[45] = O, (e as any)[46] = G) : G = (e as any)[46], G;
}
function Re(this: any, p: any): any {
  (Re as any).d = 979;
  const e: any = ((q as any).c as any)(25),
    {
      title: n,
      description: t,
      content: s,
      badge: a,
      actions: u
    }: any = p;
  let m: any, d: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = {
    className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-h8yej3 sand-euugli sand-kh2ocl"
  }, d = {
    className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-euugli"
  }, (e as any)[0] = m, (e as any)[1] = d) : (m = (e as any)[0], d = (e as any)[1]);
  let c: any;
  ((e as any)[2] as any) !== (n as any) ? (c = ((l as any).jsx as any)(Ze, {
    name: n
  }), (e as any)[2] = n, (e as any)[3] = c) : c = (e as any)[3];
  let o: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = {
    className: "sand-78zum5 sand-dt5ytf sand-1ed6fcf sand-1iyjqo2 sand-euugli"
  }, (e as any)[4] = o) : o = (e as any)[4];
  let h: any;
  ((e as any)[5] as any) !== (n as any) ? (h = ((l as any).jsx as any)(je, {
    as: "h3",
    size: "lg",
    weight: "semibold",
    children: n
  }), (e as any)[5] = n, (e as any)[6] = h) : h = (e as any)[6];
  let r: any;
  ((e as any)[7] as any) !== (a as any) || ((e as any)[8] as any) !== (h as any) ? (r = ((l as any).jsxs as any)("div", {
    ...o,
    children: [h, a]
  }), (e as any)[7] = a, (e as any)[8] = h, (e as any)[9] = r) : r = (e as any)[9];
  let S: any;
  ((e as any)[10] as any) !== (u as any) ? (S = (u as any) != (null as any) ? ((l as any).jsx as any)("div", {
    className: "sand-78zum5 sand-6s0dn4 sand-2lah0s sand-1a02dak sand-13a6bvl sand-167g77z sand-vc5jky",
    children: u
  }) : null, (e as any)[10] = u, (e as any)[11] = S) : S = (e as any)[11];
  let x: any;
  ((e as any)[12] as any) !== (c as any) || ((e as any)[13] as any) !== (r as any) || ((e as any)[14] as any) !== (S as any) ? (x = ((l as any).jsxs as any)("div", {
    ...d,
    children: [c, r, S]
  }), (e as any)[12] = c, (e as any)[13] = r, (e as any)[14] = S, (e as any)[15] = x) : x = (e as any)[15];
  let j: any;
  ((e as any)[16] as any) !== (t as any) ? (j = ((t as any).length as any) > (0 as any) ? ((l as any).jsx as any)(je, {
    as: "p",
    color: "secondary",
    size: "sm",
    children: t
  }) : null, (e as any)[16] = t, (e as any)[17] = j) : j = (e as any)[17];
  let z: any;
  ((e as any)[18] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (z = {
    className: "sand-1ghz6dp sand-c7ga6q sand-1qmwy7c sand-1tiofj7 sand-126k92a sand-j0a0fe"
  }, (e as any)[18] = z) : z = (e as any)[18];
  let k: any;
  ((e as any)[19] as any) !== (s as any) ? (k = ((l as any).jsx as any)("pre", {
    ...z,
    children: s
  }), (e as any)[19] = s, (e as any)[20] = k) : k = (e as any)[20];
  let K: any;
  return ((e as any)[21] as any) !== (k as any) || ((e as any)[22] as any) !== (x as any) || ((e as any)[23] as any) !== (j as any) ? (K = ((l as any).jsxs as any)("div", {
    ...m,
    children: [x, j, k]
  }), (e as any)[21] = k, (e as any)[22] = x, (e as any)[23] = j, (e as any)[24] = K) : K = (e as any)[24], K;
}
function Ve(this: any, p: any): any {
  (Ve as any).d = 976;
  const e: any = ((q as any).c as any)(22),
    {
      skills: n,
      onBot: t,
      disabled: s,
      onImport: a,
      onRemove: u,
      onOpen: m
    }: any = p,
    d: any = ((A as any).useId as any)();
  let c: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = ((l as any).jsx as any)(_, {
    id: "vD68LO"
  }), (e as any)[0] = c) : c = (e as any)[0];
  let o: any;
  ((e as any)[1] as any) !== (d as any) ? (o = ((l as any).jsx as any)("span", {
    hidden: !0,
    id: d,
    children: c
  }), (e as any)[1] = d, (e as any)[2] = o) : o = (e as any)[2];
  let h: any;
  if (((e as any)[3] as any) !== (s as any) || ((e as any)[4] as any) !== (t as any) || ((e as any)[5] as any) !== (a as any) || ((e as any)[6] as any) !== (m as any) || ((e as any)[7] as any) !== (u as any) || ((e as any)[8] as any) !== (n as any)) {
    let x: any;
    ((e as any)[10] as any) !== (s as any) || ((e as any)[11] as any) !== (t as any) || ((e as any)[12] as any) !== (a as any) || ((e as any)[13] as any) !== (m as any) || ((e as any)[14] as any) !== (u as any) ? (x = (j: any): any => {
      const z: any = (Me as any)(j, t);
      return ((l as any).jsx as any)(Te, {
        icon: null,
        name: (j as any).name,
        onOpen: (): any => (m as any)(j),
        subtitle: (hl as any)(j) || null,
        wrapsName: !0,
        trailing: (z as any) === (void 0 as any) ? ((l as any).jsx as any)(wl, {
          disabled: s,
          name: (j as any).name,
          onAdd: (): any => (a as any)(j)
        }) : ((l as any).jsx as any)(Bl, {
          disabled: s,
          name: (j as any).name,
          onRemove: (): any => (u as any)((z as any).name)
        })
      }, (j as any).id);
    }, (e as any)[10] = s, (e as any)[11] = t, (e as any)[12] = a, (e as any)[13] = m, (e as any)[14] = u, (e as any)[15] = x) : x = (e as any)[15], h = ((n as any).map as any)(x), (e as any)[3] = s, (e as any)[4] = t, (e as any)[5] = a, (e as any)[6] = m, (e as any)[7] = u, (e as any)[8] = n, (e as any)[9] = h;
  } else h = (e as any)[9];
  let r: any;
  ((e as any)[16] as any) !== (d as any) || ((e as any)[17] as any) !== (h as any) ? (r = ((l as any).jsx as any)(Fe, {
    isFullWidth: !0,
    labelledBy: d,
    children: h
  }), (e as any)[16] = d, (e as any)[17] = h, (e as any)[18] = r) : r = (e as any)[18];
  let S: any;
  return ((e as any)[19] as any) !== (o as any) || ((e as any)[20] as any) !== (r as any) ? (S = ((l as any).jsxs as any)((l as any).Fragment, {
    children: [o, r]
  }), (e as any)[19] = o, (e as any)[20] = r, (e as any)[21] = S) : S = (e as any)[21], S;
}
function Je(this: any, p: any): any {
  (Je as any).d = 972;
  const e: any = ((q as any).c as any)(16),
    {
      skills: n,
      onOpen: t
    }: any = p,
    {
      _: s
    }: any = (Pe as any)(),
    a: any = ((A as any).useId as any)();
  let u: any;
  ((e as any)[0] as any) !== (s as any) ? (u = (s as any)({
    id: "IYyHwi"
  }), (e as any)[0] = s, (e as any)[1] = u) : u = (e as any)[1];
  let m: any;
  ((e as any)[2] as any) !== (a as any) || ((e as any)[3] as any) !== (u as any) ? (m = ((l as any).jsx as any)("span", {
    hidden: !0,
    id: a,
    children: u
  }), (e as any)[2] = a, (e as any)[3] = u, (e as any)[4] = m) : m = (e as any)[4];
  let d: any;
  if (((e as any)[5] as any) !== (t as any) || ((e as any)[6] as any) !== (n as any)) {
    let h: any;
    ((e as any)[8] as any) !== (t as any) ? (h = (r: any): any => ((l as any).jsx as any)(Te, {
      byline: (jl as any)(r),
      icon: null,
      name: (ve as any)(r),
      onOpen: (): any => (t as any)(r),
      subtitle: (xl as any)(r) || null,
      trailing: ((l as any).jsx as any)(qe, {}),
      wrapsName: !0
    }, (r as any).name), (e as any)[8] = t, (e as any)[9] = h) : h = (e as any)[9], d = ((n as any).map as any)(h), (e as any)[5] = t, (e as any)[6] = n, (e as any)[7] = d;
  } else d = (e as any)[7];
  let c: any;
  ((e as any)[10] as any) !== (a as any) || ((e as any)[11] as any) !== (d as any) ? (c = ((l as any).jsx as any)(Fe, {
    isFullWidth: !0,
    labelledBy: a,
    children: d
  }), (e as any)[10] = a, (e as any)[11] = d, (e as any)[12] = c) : c = (e as any)[12];
  let o: any;
  return ((e as any)[13] as any) !== (m as any) || ((e as any)[14] as any) !== (c as any) ? (o = ((l as any).jsxs as any)((l as any).Fragment, {
    children: [m, c]
  }), (e as any)[13] = m, (e as any)[14] = c, (e as any)[15] = o) : o = (e as any)[15], o;
}
function Cl(this: any, p: any, e: any, n: any): any {
  switch ((p as any).kind) {
    case "list":
      return null;
    case "added":
      return {
        onBack: (): any => (e as any)({
          kind: "list"
        }),
        label: ((l as any).jsx as any)(_, {
          id: "ggmjet"
        })
      };
    case "skill":
      return (n as any) === ("files" as any) ? {
        onBack: (): any => (e as any)({
          kind: "list"
        }),
        label: ((l as any).jsx as any)(_, {
          id: "sER+bs"
        })
      } : {
        onBack: (): any => (e as any)({
          kind: "added"
        }),
        label: ((l as any).jsx as any)(_, {
          id: "IYyHwi"
        })
      };
    case "candidate":
      return {
        onBack: (): any => (e as any)({
          kind: "list"
        }),
        label: ((l as any).jsx as any)(_, {
          id: "ggmjet"
        })
      };
    case "edit":
      return {
        onBack: (): any => (e as any)({
          kind: "skill",
          name: ((p as any).skill as any).name
        }),
        label: (ve as any)((p as any).skill)
      };
  }
}
function Nl(this: any, p: any): any {
  (Nl as any).d = 980;
  const e: any = ((q as any).c as any)(155),
    {
      agentName: n,
      access: t,
      surface: s,
      initialPane: a,
      isCardPreview: u,
      onClose: m
    }: any = p,
    d: any = (u as any) === (void 0 as any) ? !1 : u,
    {
      i18n: c,
      _: o
    }: any = (Pe as any)(),
    [h]: any = ((A as any).useState as any)(a);
  let r: any;
  ((e as any)[0] as any) !== (h as any) ? (r = h ?? {
    kind: "list"
  }, (e as any)[0] = h, (e as any)[1] = r) : r = (e as any)[1];
  const [S, x]: any = ((A as any).useState as any)(r),
    [j, z]: any = ((A as any).useState as any)(""),
    [k, K]: any = ((A as any).useState as any)(""),
    [le, ne]: any = ((A as any).useState as any)(!1);
  let D: any, P: any, O: any, E: any, $: any, C: any;
  if (((e as any)[2] as any) !== (o as any) || ((e as any)[3] as any) !== (t as any) || ((e as any)[4] as any) !== (k as any) || ((e as any)[5] as any) !== ((c as any).locale as any) || ((e as any)[6] as any) !== (d as any) || ((e as any)[7] as any) !== (h as any) || ((e as any)[8] as any) !== (S as any) || ((e as any)[9] as any) !== (j as any) || ((e as any)[10] as any) !== (s as any)) {
    const ye: any = (ll as any)(((t as any).listing as any).plugins),
      we: any = (s as any) === ("files" as any) ? (ye as any).fileSkills : (ye as any).librarySkills,
      Be: any = (s as any) === ("files" as any) ? [] : (tl as any)((sl as any)((t as any).userSkills, (ye as any).fileSkills), j, (c as any).locale),
      ze: any = (nl as any)((Le as any)(we, (c as any).locale), k, (c as any).locale),
      ee: any = (il as any)(S, we, Be),
      $e: any = (al as any)(S, ee);
    ($e as any) != (null as any) && (x as any)($e);
    const Ce: any = ((ee as any).kind as any) === ("list" as any);
    O = ((ee as any).kind as any) === ("added" as any), $ = Ce || O;
    const Ne: any = (h as any) != (null as any) && ((h as any).kind as any) !== ("added" as any) && (((JSON as any).stringify as any)(S) as any) === (((JSON as any).stringify as any)(h) as any) ? null : (Cl as any)(ee, x, s);
    C = (t as any).isPending || ((t as any).load as any) !== ("ready" as any);
    let be: any;
    ((e as any)[17] as any) !== (t as any) ? (be = (i: any): any => {
      ((t as any).addSkill as any)((Ae as any)(i)), (x as any)({
        kind: "list"
      });
    }, (e as any)[17] = t, (e as any)[18] = be) : be = (e as any)[18];
    const Xe: any = be;
    let Se: any;
    ((e as any)[19] as any) !== (t as any) ? (Se = async (i: any): Promise<any> => ((await ((t as any).addSkills as any)([{
      name: (i as any).name,
      content: (yl as any)(i)
    }])) as any) === (1 as any), (e as any)[19] = t, (e as any)[20] = Se) : Se = (e as any)[20], D = Se, E = (Ne as any) == (null as any) ? null : ((l as any).jsx as any)(pl, {
      onBack: (Ne as any).onBack,
      children: (Ne as any).label
    });
    let ke: any;
    ((e as any)[21] as any) !== (j as any) ? (ke = ((j as any).trim as any)(), (e as any)[21] = j, (e as any)[22] = ke) : ke = (e as any)[22];
    const ge: any = ke;
    let ae: any = null;
    if (((Be as any).length as any) > (0 as any)) {
      let i: any;
      ((e as any)[23] as any) !== (t as any) ? (i = (y: any): any => ((t as any).addSkill as any)((Ae as any)(y)), (e as any)[23] = t, (e as any)[24] = i) : i = (e as any)[24];
      let f: any;
      ((e as any)[25] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = (y: any): any => (x as any)({
        kind: "candidate",
        skillId: (y as any).id
      }), (e as any)[25] = f) : f = (e as any)[25], ae = ((l as any).jsx as any)(Ve, {
        disabled: C,
        onBot: (ye as any).librarySkills,
        onImport: i,
        onOpen: f,
        onRemove: (t as any).removeBotSkill,
        skills: Be
      });
    } else if (((t as any).userSkillsLoad as any) === ("loading" as any)) {
      let i: any;
      ((e as any)[26] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = ((l as any).jsx as any)("p", {
        role: "status",
        ...(T as any)((xe as any).label, (Ie as any).loading),
        children: ((l as any).jsx as any)(_, {
          id: "yQE2r9"
        })
      }), (e as any)[26] = i) : i = (e as any)[26], ae = i;
    } else if (((t as any).userSkillsLoad as any) === ("ready" as any) && ((ge as any).length as any) > (0 as any)) {
      let i: any;
      ((e as any)[27] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = (T as any)((xe as any).body2, (I as any).empty), (e as any)[27] = i) : i = (e as any)[27];
      let f: any;
      ((e as any)[28] as any) !== (ge as any) ? (f = ((l as any).jsx as any)("p", {
        role: "status",
        ...i,
        children: ((l as any).jsx as any)(_, {
          id: "/W3n+m",
          values: {
            trimmedQuery: ge
          }
        })
      }), (e as any)[28] = ge, (e as any)[29] = f) : f = (e as any)[29], ae = f;
    } else if (((t as any).userSkillsLoad as any) === ("ready" as any)) {
      let i: any;
      ((e as any)[30] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = ((l as any).jsx as any)("p", {
        ...(T as any)((xe as any).body2, (I as any).empty),
        children: ((l as any).jsx as any)(_, {
          id: "jfK17s"
        })
      }), (e as any)[30] = i) : i = (e as any)[30], ae = i;
    }
    if (Ce && (s as any) === ("files" as any)) {
      let i: any;
      ((e as any)[31] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = (T as any)((I as any).scroller), (e as any)[31] = i) : i = (e as any)[31];
      let f: any;
      ((e as any)[32] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = (v: any): any => (x as any)({
        kind: "skill",
        name: (v as any).name
      }), (e as any)[32] = f) : f = (e as any)[32];
      let y: any;
      ((e as any)[33] as any) !== (t as any) ? (y = ((l as any).jsx as any)(de, {
        access: t
      }), (e as any)[33] = t, (e as any)[34] = y) : y = (e as any)[34], P = ((l as any).jsxs as any)("div", {
        ...i,
        children: [((l as any).jsx as any)(He, {
          access: t,
          disabled: C,
          files: (Le as any)(we, (c as any).locale),
          onOpenFile: f
        }), y]
      });
    } else if (Ce) {
      let i: any, f: any, y: any;
      ((e as any)[35] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = (T as any)((I as any).chrome), f = (T as any)((I as any).searchRow), y = (T as any)((I as any).searchField), (e as any)[35] = i, (e as any)[36] = f, (e as any)[37] = y) : (i = (e as any)[35], f = (e as any)[36], y = (e as any)[37]);
      let v: any;
      ((e as any)[38] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = ((l as any).jsx as any)((X as any).Icon, {
        name: "search"
      }), (e as any)[38] = v) : v = (e as any)[38];
      let N: any;
      ((e as any)[39] as any) !== (o as any) ? (N = (o as any)({
        id: "BlLxpG"
      }), (e as any)[39] = o, (e as any)[40] = N) : N = (e as any)[40];
      let L: any;
      ((e as any)[41] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (L = (el: any): any => (z as any)(((el as any).currentTarget as any).value), (e as any)[41] = L) : L = (e as any)[41];
      let B: any;
      ((e as any)[42] as any) !== (o as any) ? (B = (o as any)({
        id: "BlLxpG"
      }), (e as any)[42] = o, (e as any)[43] = B) : B = (e as any)[43];
      let g: any;
      ((e as any)[44] as any) !== (j as any) || ((e as any)[45] as any) !== (N as any) || ((e as any)[46] as any) !== (B as any) ? (g = ((l as any).jsx as any)("div", {
        ...y,
        children: ((l as any).jsxs as any)(X, {
          rootStyle: (I as any).searchRoot,
          shape: "pill",
          size: "lg",
          children: [v, ((l as any).jsx as any)((X as any).Input, {
            "aria-label": N,
            onChange: L,
            placeholder: B,
            value: j
          })]
        })
      }), (e as any)[44] = j, (e as any)[45] = N, (e as any)[46] = B, (e as any)[47] = g) : g = (e as any)[47];
      let w: any;
      ((e as any)[48] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = (): any => (ne as any)(!0), (e as any)[48] = w) : w = (e as any)[48];
      let R: any;
      ((e as any)[49] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (R = ((l as any).jsx as any)(_, {
        id: "sNew++"
      }), (e as any)[49] = R) : R = (e as any)[49];
      let b: any;
      ((e as any)[50] as any) !== (C as any) ? (b = ((l as any).jsx as any)(oe, {
        disabled: C,
        leadingIcon: "plus",
        onClick: w,
        size: "md",
        type: "button",
        variant: "secondary",
        children: R
      }), (e as any)[50] = C, (e as any)[51] = b) : b = (e as any)[51];
      let F: any;
      ((e as any)[52] as any) !== (g as any) || ((e as any)[53] as any) !== (b as any) ? (F = ((l as any).jsx as any)("div", {
        ...i,
        children: ((l as any).jsxs as any)("div", {
          ...f,
          children: [g, b]
        })
      }), (e as any)[52] = g, (e as any)[53] = b, (e as any)[54] = F) : F = (e as any)[54];
      let Y: any;
      ((e as any)[55] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Y = (T as any)((I as any).scroller), (e as any)[55] = Y) : Y = (e as any)[55];
      let Z: any;
      ((e as any)[56] as any) !== (t as any) ? (Z = ((l as any).jsx as any)(de, {
        access: t
      }), (e as any)[56] = t, (e as any)[57] = Z) : Z = (e as any)[57];
      let J: any;
      ((e as any)[58] as any) !== (ae as any) || ((e as any)[59] as any) !== (Z as any) ? (J = ((l as any).jsxs as any)("div", {
        ...Y,
        children: [ae, Z]
      }), (e as any)[58] = ae, (e as any)[59] = Z, (e as any)[60] = J) : J = (e as any)[60];
      let _e: any;
      ((e as any)[61] as any) !== (F as any) || ((e as any)[62] as any) !== (J as any) ? (_e = ((l as any).jsxs as any)((l as any).Fragment, {
        children: [F, J]
      }), (e as any)[61] = F, (e as any)[62] = J, (e as any)[63] = _e) : _e = (e as any)[63], P = _e;
    } else if (O) {
      const i: any = ((k as any).trim as any)();
      let f: any, y: any;
      ((e as any)[64] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = (T as any)((I as any).subpane), y = (T as any)((I as any).chrome), (e as any)[64] = f, (e as any)[65] = y) : (f = (e as any)[64], y = (e as any)[65]);
      let v: any;
      ((e as any)[66] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = ((l as any).jsx as any)((X as any).Icon, {
        name: "search"
      }), (e as any)[66] = v) : v = (e as any)[66];
      let N: any;
      ((e as any)[67] as any) !== (o as any) ? (N = (o as any)({
        id: "gEufoy"
      }), (e as any)[67] = o, (e as any)[68] = N) : N = (e as any)[68];
      let L: any;
      ((e as any)[69] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (L = (J: any): any => (K as any)(((J as any).currentTarget as any).value), (e as any)[69] = L) : L = (e as any)[69];
      let B: any;
      ((e as any)[70] as any) !== (o as any) ? (B = (o as any)({
        id: "gEufoy"
      }), (e as any)[70] = o, (e as any)[71] = B) : B = (e as any)[71];
      let g: any;
      ((e as any)[72] as any) !== (k as any) || ((e as any)[73] as any) !== (B as any) || ((e as any)[74] as any) !== (N as any) ? (g = ((l as any).jsx as any)("div", {
        ...y,
        children: ((l as any).jsxs as any)(X, {
          rootStyle: (I as any).searchRoot,
          shape: "pill",
          size: "lg",
          children: [v, ((l as any).jsx as any)((X as any).Input, {
            "aria-label": N,
            onChange: L,
            placeholder: B,
            value: k
          })]
        })
      }), (e as any)[72] = k, (e as any)[73] = B, (e as any)[74] = N, (e as any)[75] = g) : g = (e as any)[75];
      let w: any;
      ((e as any)[76] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = (T as any)((I as any).scroller), (e as any)[76] = w) : w = (e as any)[76];
      const R: any = ((ze as any).length as any) > (0 as any) ? ((l as any).jsx as any)(Je, {
          onOpen: (J: any): any => (x as any)({
            kind: "skill",
            name: (J as any).name
          }),
          skills: ze
        }) : null,
        b: any = ((ze as any).length as any) === (0 as any) && ((i as any).length as any) > (0 as any) ? ((l as any).jsx as any)("p", {
          role: "status",
          ...(T as any)((xe as any).label, (Ie as any).noMatches),
          children: (o as any)({
            id: "NQSKOV",
            values: {
              trimmed: i
            }
          })
        }) : null;
      let F: any;
      ((e as any)[77] as any) !== (t as any) ? (F = ((l as any).jsx as any)(de, {
        access: t
      }), (e as any)[77] = t, (e as any)[78] = F) : F = (e as any)[78];
      let Y: any;
      ((e as any)[79] as any) !== (R as any) || ((e as any)[80] as any) !== (b as any) || ((e as any)[81] as any) !== (F as any) ? (Y = ((l as any).jsxs as any)("div", {
        ...w,
        children: [R, b, F]
      }), (e as any)[79] = R, (e as any)[80] = b, (e as any)[81] = F, (e as any)[82] = Y) : Y = (e as any)[82];
      let Z: any;
      ((e as any)[83] as any) !== (g as any) || ((e as any)[84] as any) !== (Y as any) ? (Z = ((l as any).jsxs as any)("div", {
        ...f,
        children: [g, Y]
      }), (e as any)[83] = g, (e as any)[84] = Y, (e as any)[85] = Z) : Z = (e as any)[85], P = Z;
    } else if (((ee as any).kind as any) === ("edit" as any)) {
      const i: any = (ee as any).skill;
      let f: any;
      ((e as any)[86] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = (T as any)((I as any).scroller), (e as any)[86] = f) : f = (e as any)[86];
      let y: any;
      ((e as any)[87] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = ((l as any).jsx as any)(_, {
        id: "0NuXpZ"
      }), (e as any)[87] = y) : y = (e as any)[87], P = ((l as any).jsx as any)("div", {
        ...f,
        children: ((l as any).jsx as any)(Ue, {
          access: t,
          disabled: C,
          initialContent: (i as any).content,
          initialName: (ol as any)(i),
          onSave: (v: any, N: any): any => {
            ((t as any).updateSkill as any)({
              name: (i as any).name,
              content: (dl as any)(v, N)
            }), (x as any)({
              kind: "added"
            });
          },
          title: y
        }, (i as any).name)
      });
    } else if (((ee as any).kind as any) === ("skill" as any)) {
      const i: any = (ee as any).skill;
      let f: any;
      ((e as any)[88] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = (T as any)((I as any).scroller), (e as any)[88] = f) : f = (e as any)[88];
      let y: any;
      ((e as any)[89] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = ((l as any).jsx as any)(_, {
        id: "ePK91l"
      }), (e as any)[89] = y) : y = (e as any)[89];
      let v: any;
      ((e as any)[90] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = ((l as any).jsx as any)(_, {
        id: "t/YqKh"
      }), (e as any)[90] = v) : v = (e as any)[90];
      const N: any = ((l as any).jsxs as any)((l as any).Fragment, {
        children: [((l as any).jsx as any)(oe, {
          disabled: C,
          onClick: (): any => (x as any)({
            kind: "edit",
            name: (i as any).name
          }),
          size: "sm",
          type: "button",
          variant: "secondary",
          children: y
        }), ((l as any).jsx as any)(oe, {
          disabled: C,
          onClick: (): any => {
            ((t as any).removeBotSkill as any)((i as any).name), (x as any)({
              kind: "added"
            });
          },
          sentiment: "danger",
          size: "sm",
          type: "button",
          variant: "secondary",
          children: v
        })]
      });
      let L: any;
      ((e as any)[91] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (L = ((l as any).jsx as any)(qe, {}), (e as any)[91] = L) : L = (e as any)[91];
      const B: any = ((((Oe as any)((i as any).content) as any).body as any).trim as any)();
      let g: any;
      ((e as any)[92] as any) !== (i as any) ? (g = (cl as any)(i), (e as any)[92] = i, (e as any)[93] = g) : g = (e as any)[93];
      let w: any;
      ((e as any)[94] as any) !== (i as any) ? (w = (ve as any)(i), (e as any)[94] = i, (e as any)[95] = w) : w = (e as any)[95];
      let R: any;
      ((e as any)[96] as any) !== (B as any) || ((e as any)[97] as any) !== (g as any) || ((e as any)[98] as any) !== (w as any) || ((e as any)[99] as any) !== (N as any) ? (R = ((l as any).jsx as any)(Re, {
        actions: N,
        badge: L,
        content: B,
        description: g,
        title: w
      }), (e as any)[96] = B, (e as any)[97] = g, (e as any)[98] = w, (e as any)[99] = N, (e as any)[100] = R) : R = (e as any)[100];
      let b: any;
      ((e as any)[101] as any) !== (t as any) ? (b = ((l as any).jsx as any)(de, {
        access: t
      }), (e as any)[101] = t, (e as any)[102] = b) : b = (e as any)[102];
      let F: any;
      ((e as any)[103] as any) !== (R as any) || ((e as any)[104] as any) !== (b as any) ? (F = ((l as any).jsxs as any)("div", {
        ...f,
        children: [R, b]
      }), (e as any)[103] = R, (e as any)[104] = b, (e as any)[105] = F) : F = (e as any)[105], P = F;
    } else {
      const i: any = (ee as any).skill,
        f: any = (Me as any)(i, (ye as any).librarySkills);
      let y: any = null;
      if (!d && (f as any) !== (void 0 as any)) {
        let b: any;
        ((e as any)[106] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = ((l as any).jsx as any)(_, {
          id: "t/YqKh"
        }), (e as any)[106] = b) : b = (e as any)[106], y = ((l as any).jsx as any)(oe, {
          disabled: C,
          onClick: (): any => ((t as any).removeBotSkill as any)((f as any).name),
          sentiment: "danger",
          size: "sm",
          type: "button",
          variant: "secondary",
          children: b
        });
      } else if (!d) {
        let b: any;
        ((e as any)[107] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = ((l as any).jsx as any)(_, {
          id: "m16xKo"
        }), (e as any)[107] = b) : b = (e as any)[107], y = ((l as any).jsx as any)(oe, {
          disabled: C,
          onClick: (): any => (Xe as any)(i),
          size: "sm",
          type: "button",
          variant: "primary",
          children: b
        });
      }
      let v: any;
      ((e as any)[108] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = (T as any)((I as any).scroller), (e as any)[108] = v) : v = (e as any)[108];
      const N: any = y,
        L: any = ((((Oe as any)((i as any).body) as any).body as any).trim as any)();
      let B: any;
      ((e as any)[109] as any) !== (i as any) ? (B = (rl as any)((i as any).description), (e as any)[109] = i, (e as any)[110] = B) : B = (e as any)[110];
      const g: any = ((l as any).jsx as any)(Re, {
        actions: N,
        content: L,
        description: B,
        title: (i as any).name
      });
      let w: any;
      ((e as any)[111] as any) !== (t as any) ? (w = ((l as any).jsx as any)(de, {
        access: t
      }), (e as any)[111] = t, (e as any)[112] = w) : w = (e as any)[112];
      let R: any;
      ((e as any)[113] as any) !== (g as any) || ((e as any)[114] as any) !== (w as any) ? (R = ((l as any).jsxs as any)("div", {
        ...v,
        children: [g, w]
      }), (e as any)[113] = g, (e as any)[114] = w, (e as any)[115] = R) : R = (e as any)[115], P = R;
    }
    (e as any)[2] = o, (e as any)[3] = t, (e as any)[4] = k, (e as any)[5] = (c as any).locale, (e as any)[6] = d, (e as any)[7] = h, (e as any)[8] = S, (e as any)[9] = j, (e as any)[10] = s, (e as any)[11] = D, (e as any)[12] = P, (e as any)[13] = O, (e as any)[14] = E, (e as any)[15] = $, (e as any)[16] = C;
  } else D = (e as any)[11], P = (e as any)[12], O = (e as any)[13], E = (e as any)[14], $ = (e as any)[15], C = (e as any)[16];
  let Q: any;
  ((e as any)[116] as any) !== (o as any) || ((e as any)[117] as any) !== (s as any) ? (Q = (o as any)((s as any) === ("files" as any) ? {
    id: "sER+bs"
  } : {
    id: "PCSkw2"
  }), (e as any)[116] = o, (e as any)[117] = s, (e as any)[118] = Q) : Q = (e as any)[118];
  const te: any = Q,
    U: any = (s as any) === ("skills" as any),
    ie: any = $ ? void 0 : te,
    V: any = $ ? (I as any).header : (I as any).headerCompact;
  let W: any;
  ((e as any)[119] as any) !== (n as any) || ((e as any)[120] as any) !== (E as any) || ((e as any)[121] as any) !== (s as any) || ((e as any)[122] as any) !== ($ as any) ? (W = $ ? ((l as any).jsx as any)(_l, {
    description: ((l as any).jsx as any)(Ye, {
      agentName: n,
      surface: s
    }),
    paneBackButton: E,
    title: ((l as any).jsx as any)(Ge, {
      surface: s
    })
  }) : E, (e as any)[119] = n, (e as any)[120] = E, (e as any)[121] = s, (e as any)[122] = $, (e as any)[123] = W) : W = (e as any)[123];
  let H: any;
  ((e as any)[124] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (H = ((l as any).jsx as any)((he as any).CloseButton, {}), (e as any)[124] = H) : H = (e as any)[124];
  let M: any;
  ((e as any)[125] as any) !== (V as any) || ((e as any)[126] as any) !== (W as any) ? (M = ((l as any).jsxs as any)((he as any).Header, {
    style: V,
    children: [W, H]
  }), (e as any)[125] = V, (e as any)[126] = W, (e as any)[127] = M) : M = (e as any)[127];
  let G: any;
  ((e as any)[128] as any) !== (O as any) ? (G = O ? [(I as any).dialogBody, (I as any).dialogBodySubpane] : (I as any).dialogBody, (e as any)[128] = O, (e as any)[129] = G) : G = (e as any)[129];
  let se: any;
  ((e as any)[130] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (se = (T as any)((I as any).body), (e as any)[130] = se) : se = (e as any)[130];
  let ce: any;
  ((e as any)[131] as any) !== (P as any) ? (ce = ((l as any).jsx as any)("div", {
    ...se,
    children: P
  }), (e as any)[131] = P, (e as any)[132] = ce) : ce = (e as any)[132];
  let re: any;
  ((e as any)[133] as any) !== (ce as any) || ((e as any)[134] as any) !== (G as any) ? (re = ((l as any).jsx as any)((he as any).Body, {
    style: G,
    children: ce
  }), (e as any)[133] = ce, (e as any)[134] = G, (e as any)[135] = re) : re = (e as any)[135];
  let me: any;
  ((e as any)[136] as any) !== (m as any) || ((e as any)[137] as any) !== ($ as any) ? (me = $ ? ((l as any).jsxs as any)((he as any).ActionBar, {
    children: [((l as any).jsx as any)((he as any).ActionSpacer, {}), ((l as any).jsx as any)((he as any).Action, {
      onClick: m,
      variant: "primary",
      children: ((l as any).jsx as any)(_, {
        id: "DPfwMq"
      })
    })]
  }) : null, (e as any)[136] = m, (e as any)[137] = $, (e as any)[138] = me) : me = (e as any)[138];
  let fe: any;
  ((e as any)[139] as any) !== (m as any) || ((e as any)[140] as any) !== (re as any) || ((e as any)[141] as any) !== (me as any) || ((e as any)[142] as any) !== (ie as any) || ((e as any)[143] as any) !== (M as any) ? (fe = ((l as any).jsxs as any)(vl, {
    ariaLabel: ie,
    onClose: m,
    children: [M, re, me]
  }), (e as any)[139] = m, (e as any)[140] = re, (e as any)[141] = me, (e as any)[142] = ie, (e as any)[143] = M, (e as any)[144] = fe) : fe = (e as any)[144];
  let ue: any;
  ((e as any)[145] as any) !== (((t as any).listing as any).plugins as any) || ((e as any)[146] as any) !== ((t as any).userSkills as any) || ((e as any)[147] as any) !== (D as any) || ((e as any)[148] as any) !== (U as any) || ((e as any)[149] as any) !== (le as any) || ((e as any)[150] as any) !== (C as any) ? (ue = U ? ((l as any).jsx as any)(Sl, {
    isDisabled: C,
    onAdd: D,
    onOpenChange: ne,
    open: le,
    takenKeys: new (Set as any)((([...(ml as any)(((t as any).listing as any).plugins), ...(fl as any)((t as any).userSkills)] as any).map as any)(Il))
  }) : null, (e as any)[145] = ((t as any).listing as any).plugins, (e as any)[146] = (t as any).userSkills, (e as any)[147] = D, (e as any)[148] = U, (e as any)[149] = le, (e as any)[150] = C, (e as any)[151] = ue) : ue = (e as any)[151];
  let pe: any;
  return ((e as any)[152] as any) !== (fe as any) || ((e as any)[153] as any) !== (ue as any) ? (pe = ((l as any).jsxs as any)((l as any).Fragment, {
    children: [fe, ue]
  }), (e as any)[152] = fe, (e as any)[153] = ue, (e as any)[154] = pe) : pe = (e as any)[154], pe;
}
function Il(this: any, p: any): any {
  return (ul as any)((p as any).name);
}
export { Nl as T, zl as a };
//# debugId=a731aa0b-df30-43cb-adf2-52a31754a609
