declare var ResizeObserver: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "00ff32a6-dd14-4dd4-a2ca-b4afb5c439ab", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-00ff32a6-dd14-4dd4-a2ca-b4afb5c439ab");
  } catch (e: any) {}
} as any)();
import { c as E, j as t, u as W, p as Ge, T as H, r as fe } from "./index.eager-vendor-Qbf9YA6n.js";
import { ba as ze, z as G, E as Hs, bW as Vs, b$ as Ks, bZ as Ys } from "./index-ZYxf-aBb.js";
import { S as Zs } from "./chunk-scroll-pane-CoxKzaOs.js";
import { aY as S, bf as Q, x as Xs, i as Ne } from "./index.eager-platform-Dcfeegfw.js";
import { eY as hs, gu as Qs, gv as Js, gw as et, gx as st, gy as Se, dl as Te, a$ as tt, a_ as nt, gz as De, gA as at, gB as lt, gC as it, gD as Xe, gE as rt, gF as dt, gG as ot, gH as ct, gI as ut, gJ as ft, bA as He, gK as mt, gL as ht, gM as ps, gN as pt, d0 as xs, gO as xt, g8 as gt, gP as Qe, gQ as Je, b7 as Ve, gR as bt, dc as yt, gS as jt, bc as vt, gT as kt, b9 as es, bT as St, eW as _t, gU as Lt, gV as Ct, gW as wt, gX as zt, gY as Nt, r as ce, gZ as Tt, g_ as Dt, g$ as Mt, cc as Ut, cq as Pt, h0 as It, bz as At, h1 as Et, h2 as Rt, h3 as $t, f as Bt } from "./index.eager-app-Cj5f8Gby.js";
import { G as ue, a as Ke } from "./chunk-settings-row-I8ggwIzt.js";
import { S as Me } from "./chunk-SegmentedControl-Bj94OhnT.js";
import "./index.eager-common-CdCvBQNJ.js";
function Ue(this: any, s: any, e: any = (hs as any)()): any {
  if (!(Qs as any)(s) || (Js as any)(s)) return {
    kind: "enable"
  };
  const n: any = (et as any)(s),
    i: any = (st as any)(s);
  return {
    kind: "balance",
    balanceLabel: (Se as any)((s as any).balance, e),
    monthlyUsageLabel: (Se as any)((s as any).autoTopUpSpentThisPeriod, e),
    monthlyLimitLabel: (n as any) === (null as any) ? null : (Se as any)(n, e),
    autoTopUp: (i as any) === (null as any) ? null : {
      amountLabel: (Se as any)((i as any).amount, e),
      thresholdLabel: (Se as any)((i as any).threshold, e)
    }
  };
}
const Ce: any = {
  balanceFigure: {
    kMwMTN: "sand-tyxrsu",
    kcqcaj: "sand-ss6m8b",
    $$css: !0
  },
  detailLabel: {
    kzQI83: "sand-1iyjqo2",
    k7Eaqz: "sand-euugli",
    $$css: !0
  },
  secondaryHairline: {
    kGVxlE: "sand-1ahgo13",
    $$css: !0
  }
};
function Ft(this: any, s: any): any {
  switch ((s as any).status) {
    case "ready":
      return {
        kind: "wallet",
        model: (Ue as any)((s as any).value),
        isRefreshFailed: !1
      };
    case "loading":
      return ((s as any).previous as any) == (null as any) ? {
        kind: "loading"
      } : {
        kind: "wallet",
        model: (Ue as any)((s as any).previous),
        isRefreshFailed: !1
      };
    case "failed":
      return ((s as any).previous as any) == (null as any) ? {
        kind: "failed"
      } : {
        kind: "wallet",
        model: (Ue as any)((s as any).previous),
        isRefreshFailed: !0
      };
    case "empty":
    case "unavailable":
      return {
        kind: "wallet",
        model: {
          kind: "enable"
        },
        isRefreshFailed: !1
      };
  }
}
function gs(this: any): any {
  (gs as any).d = 1267;
  const s: any = ((E as any).c as any)(12),
    {
      _: e
    }: any = (W as any)();
  let n: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-137clkk sand-euugli"
  }, (s as any)[0] = n) : n = (s as any)[0];
  let i: any;
  ((s as any)[1] as any) !== (e as any) ? (i = (e as any)({
    id: "BtFLI4"
  }), (s as any)[1] = e, (s as any)[2] = i) : i = (s as any)[2];
  let l: any;
  ((s as any)[3] as any) !== (i as any) ? (l = ((t as any).jsx as any)(S, {
    as: "span",
    color: "primary",
    size: "md",
    children: i
  }), (s as any)[3] = i, (s as any)[4] = l) : l = (s as any)[4];
  let a: any;
  ((s as any)[5] as any) !== (e as any) ? (a = (e as any)({
    id: "7gDRxo"
  }), (s as any)[5] = e, (s as any)[6] = a) : a = (s as any)[6];
  let r: any;
  ((s as any)[7] as any) !== (a as any) ? (r = ((t as any).jsx as any)(S, {
    as: "span",
    color: "secondary",
    size: "sm",
    children: a
  }), (s as any)[7] = a, (s as any)[8] = r) : r = (s as any)[8];
  let d: any;
  return ((s as any)[9] as any) !== (l as any) || ((s as any)[10] as any) !== (r as any) ? (d = ((t as any).jsxs as any)("div", {
    ...n,
    children: [l, r]
  }), (s as any)[9] = l, (s as any)[10] = r, (s as any)[11] = d) : d = (s as any)[11], d;
}
function bs(this: any, s: any): any {
  (bs as any).d = 1264;
  const e: any = ((E as any).c as any)(58),
    {
      presentation: n,
      onOpen: i,
      onRetry: l,
      isRetrying: a
    }: any = s,
    {
      _: r
    }: any = (W as any)();
  switch ((n as any).kind) {
    case "loading":
      {
        let h: any;
        ((e as any)[0] as any) !== (r as any) ? (h = (r as any)({
          id: "4e7BUl"
        }), (e as any)[0] = r, (e as any)[1] = h) : h = (e as any)[1];
        let x: any;
        return ((e as any)[2] as any) !== (h as any) ? (x = ((t as any).jsx as any)(S, {
          as: "span",
          color: "tertiary",
          size: "sm",
          children: h
        }), (e as any)[2] = h, (e as any)[3] = x) : x = (e as any)[3], x;
      }
    case "failed":
      {
        let h: any;
        ((e as any)[4] as any) !== (r as any) ? (h = (r as any)({
          id: "L6YIkL"
        }), (e as any)[4] = r, (e as any)[5] = h) : h = (e as any)[5];
        let x: any;
        ((e as any)[6] as any) !== (h as any) ? (x = ((t as any).jsx as any)(S, {
          as: "span",
          color: "red",
          role: "alert",
          size: "sm",
          children: h
        }), (e as any)[6] = h, (e as any)[7] = x) : x = (e as any)[7];
        let y: any;
        ((e as any)[8] as any) !== (r as any) ? (y = (r as any)({
          id: "6gRgw8"
        }), (e as any)[8] = r, (e as any)[9] = y) : y = (e as any)[9];
        let p: any;
        ((e as any)[10] as any) !== (a as any) || ((e as any)[11] as any) !== (l as any) || ((e as any)[12] as any) !== (y as any) ? (p = ((t as any).jsx as any)(G, {
          disabled: a,
          onClick: l,
          size: "sm",
          style: (Ce as any).secondaryHairline,
          variant: "secondary",
          children: y
        }), (e as any)[10] = a, (e as any)[11] = l, (e as any)[12] = y, (e as any)[13] = p) : p = (e as any)[13];
        let j: any;
        return ((e as any)[14] as any) !== (x as any) || ((e as any)[15] as any) !== (p as any) ? (j = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [x, p]
        }), (e as any)[14] = x, (e as any)[15] = p, (e as any)[16] = j) : j = (e as any)[16], j;
      }
  }
  const {
    model: d
  }: any = n;
  if (((d as any).kind as any) === ("enable" as any)) {
    let h: any;
    ((e as any)[17] as any) !== (i as any) ? (h = (): any => (i as any)("add"), (e as any)[17] = i, (e as any)[18] = h) : h = (e as any)[18];
    let x: any;
    ((e as any)[19] as any) !== (r as any) ? (x = (r as any)({
      id: "PaQ3df"
    }), (e as any)[19] = r, (e as any)[20] = x) : x = (e as any)[20];
    let y: any;
    return ((e as any)[21] as any) !== (h as any) || ((e as any)[22] as any) !== (x as any) ? (y = ((t as any).jsx as any)(G, {
      onClick: h,
      sentiment: "accent",
      size: "sm",
      variant: "primary",
      children: x
    }), (e as any)[21] = h, (e as any)[22] = x, (e as any)[23] = y) : y = (e as any)[23], y;
  }
  if (((d as any).autoTopUp as any) !== (null as any)) {
    let h: any;
    ((e as any)[24] as any) !== (i as any) ? (h = (): any => (i as any)("add"), (e as any)[24] = i, (e as any)[25] = h) : h = (e as any)[25];
    let x: any;
    ((e as any)[26] as any) !== (r as any) ? (x = (r as any)({
      id: "hdhvTn"
    }), (e as any)[26] = r, (e as any)[27] = x) : x = (e as any)[27];
    let y: any;
    ((e as any)[28] as any) !== (h as any) || ((e as any)[29] as any) !== (x as any) ? (y = ((t as any).jsx as any)(G, {
      onClick: h,
      sentiment: "accent",
      size: "sm",
      variant: "secondary",
      children: x
    }), (e as any)[28] = h, (e as any)[29] = x, (e as any)[30] = y) : y = (e as any)[30];
    let p: any;
    ((e as any)[31] as any) !== (i as any) ? (p = (): any => (i as any)("auto-top-up"), (e as any)[31] = i, (e as any)[32] = p) : p = (e as any)[32];
    let j: any;
    ((e as any)[33] as any) !== (r as any) ? (j = (r as any)({
      id: "dPJjXt"
    }), (e as any)[33] = r, (e as any)[34] = j) : j = (e as any)[34];
    let k: any;
    ((e as any)[35] as any) !== (p as any) || ((e as any)[36] as any) !== (j as any) ? (k = ((t as any).jsx as any)(G, {
      onClick: p,
      size: "sm",
      style: (Ce as any).secondaryHairline,
      variant: "secondary",
      children: j
    }), (e as any)[35] = p, (e as any)[36] = j, (e as any)[37] = k) : k = (e as any)[37];
    let z: any;
    return ((e as any)[38] as any) !== (y as any) || ((e as any)[39] as any) !== (k as any) ? (z = ((t as any).jsxs as any)((t as any).Fragment, {
      children: [y, k]
    }), (e as any)[38] = y, (e as any)[39] = k, (e as any)[40] = z) : z = (e as any)[40], z;
  }
  let o: any;
  ((e as any)[41] as any) !== (i as any) ? (o = (): any => (i as any)("add"), (e as any)[41] = i, (e as any)[42] = o) : o = (e as any)[42];
  let c: any;
  ((e as any)[43] as any) !== (r as any) ? (c = (r as any)({
    id: "hdhvTn"
  }), (e as any)[43] = r, (e as any)[44] = c) : c = (e as any)[44];
  let f: any;
  ((e as any)[45] as any) !== (o as any) || ((e as any)[46] as any) !== (c as any) ? (f = ((t as any).jsx as any)(G, {
    onClick: o,
    sentiment: "accent",
    size: "sm",
    variant: "secondary",
    children: c
  }), (e as any)[45] = o, (e as any)[46] = c, (e as any)[47] = f) : f = (e as any)[47];
  let u: any;
  ((e as any)[48] as any) !== (i as any) ? (u = (): any => (i as any)("auto-top-up"), (e as any)[48] = i, (e as any)[49] = u) : u = (e as any)[49];
  let g: any;
  ((e as any)[50] as any) !== (r as any) ? (g = (r as any)({
    id: "uWzGN1"
  }), (e as any)[50] = r, (e as any)[51] = g) : g = (e as any)[51];
  let m: any;
  ((e as any)[52] as any) !== (u as any) || ((e as any)[53] as any) !== (g as any) ? (m = ((t as any).jsx as any)(G, {
    onClick: u,
    size: "sm",
    variant: "primary",
    children: g
  }), (e as any)[52] = u, (e as any)[53] = g, (e as any)[54] = m) : m = (e as any)[54];
  let b: any;
  return ((e as any)[55] as any) !== (f as any) || ((e as any)[56] as any) !== (m as any) ? (b = ((t as any).jsxs as any)((t as any).Fragment, {
    children: [f, m]
  }), (e as any)[55] = f, (e as any)[56] = m, (e as any)[57] = b) : b = (e as any)[57], b;
}
function we(this: any, s: any): any {
  (we as any).d = 1265;
  const e: any = ((E as any).c as any)(9),
    {
      label: n,
      children: i
    }: any = s;
  let l: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = {
    className: "sand-9f619 sand-78zum5 sand-1pha0wt sand-1qughib sand-1oot3zn"
  }, (e as any)[0] = l) : l = (e as any)[0];
  let a: any;
  ((e as any)[1] as any) !== (n as any) ? (a = ((t as any).jsx as any)(S, {
    as: "span",
    color: "tertiary",
    rootStyle: (Ce as any).detailLabel,
    size: "md",
    children: n
  }), (e as any)[1] = n, (e as any)[2] = a) : a = (e as any)[2];
  let r: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = {
    className: "sand-3nfvp2 sand-1pha0wt sand-137clkk sand-uxw1ft sand-ss6m8b"
  }, (e as any)[3] = r) : r = (e as any)[3];
  let d: any;
  ((e as any)[4] as any) !== (i as any) ? (d = ((t as any).jsx as any)("span", {
    ...r,
    children: i
  }), (e as any)[4] = i, (e as any)[5] = d) : d = (e as any)[5];
  let o: any;
  return ((e as any)[6] as any) !== (a as any) || ((e as any)[7] as any) !== (d as any) ? (o = ((t as any).jsxs as any)("div", {
    ...l,
    children: [a, d]
  }), (e as any)[6] = a, (e as any)[7] = d, (e as any)[8] = o) : o = (e as any)[8], o;
}
function ys(this: any, s: any): any {
  (ys as any).d = 1262;
  const e: any = ((E as any).c as any)(34),
    {
      model: n
    }: any = s,
    {
      _: i
    }: any = (W as any)(),
    l: any = (n as any).balanceLabel;
  let a: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = {
    className: "sand-9f619 sand-78zum5 sand-1pha0wt sand-11twubx sand-uxw1ft"
  }, (e as any)[0] = a) : a = (e as any)[0];
  let r: any;
  ((e as any)[1] as any) !== (l as any) ? (r = {
    balanceLabel: l
  }, (e as any)[1] = l, (e as any)[2] = r) : r = (e as any)[2];
  let d: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = {
    0: ((t as any).jsx as any)("span", {
      ...(Ge as any)((nt as any).heading2, (tt as any).semibold, (Ce as any).balanceFigure)
    })
  }, (e as any)[3] = d) : d = (e as any)[3];
  let o: any;
  ((e as any)[4] as any) !== (r as any) ? (o = ((t as any).jsx as any)("div", {
    "data-sand-credits-balance": !0,
    ...a,
    children: ((t as any).jsx as any)(S, {
      as: "span",
      color: "tertiary",
      size: "md",
      children: ((t as any).jsx as any)(H, {
        id: "wNtDEH",
        values: r,
        components: d
      })
    })
  }), (e as any)[4] = r, (e as any)[5] = o) : o = (e as any)[5];
  let c: any;
  ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-pkkfsy"
  }, (e as any)[6] = c) : c = (e as any)[6];
  let f: any;
  ((e as any)[7] as any) !== (i as any) ? (f = (i as any)({
    id: "YGR4dd"
  }), (e as any)[7] = i, (e as any)[8] = f) : f = (e as any)[8];
  let u: any;
  ((e as any)[9] as any) !== ((n as any).monthlyUsageLabel as any) ? (u = ((t as any).jsx as any)(S, {
    as: "span",
    color: "primary",
    size: "md",
    children: (n as any).monthlyUsageLabel
  }), (e as any)[9] = (n as any).monthlyUsageLabel, (e as any)[10] = u) : u = (e as any)[10];
  let g: any;
  ((e as any)[11] as any) !== (f as any) || ((e as any)[12] as any) !== (u as any) ? (g = ((t as any).jsx as any)(we, {
    label: f,
    children: u
  }), (e as any)[11] = f, (e as any)[12] = u, (e as any)[13] = g) : g = (e as any)[13];
  let m: any;
  ((e as any)[14] as any) !== (i as any) ? (m = (i as any)({
    id: "vnD7OD"
  }), (e as any)[14] = i, (e as any)[15] = m) : m = (e as any)[15];
  let b: any;
  ((e as any)[16] as any) !== (i as any) || ((e as any)[17] as any) !== ((n as any).monthlyLimitLabel as any) ? (b = (n as any).monthlyLimitLabel ?? (i as any)({
    id: "NIuIk1"
  }), (e as any)[16] = i, (e as any)[17] = (n as any).monthlyLimitLabel, (e as any)[18] = b) : b = (e as any)[18];
  let h: any;
  ((e as any)[19] as any) !== (b as any) ? (h = ((t as any).jsx as any)(S, {
    as: "span",
    color: "primary",
    size: "md",
    children: b
  }), (e as any)[19] = b, (e as any)[20] = h) : h = (e as any)[20];
  let x: any;
  ((e as any)[21] as any) !== (h as any) || ((e as any)[22] as any) !== (m as any) ? (x = ((t as any).jsx as any)(we, {
    label: m,
    children: h
  }), (e as any)[21] = h, (e as any)[22] = m, (e as any)[23] = x) : x = (e as any)[23];
  let y: any;
  ((e as any)[24] as any) !== (i as any) || ((e as any)[25] as any) !== ((n as any).autoTopUp as any) ? (y = ((n as any).autoTopUp as any) === (null as any) ? null : ((t as any).jsx as any)(we, {
    label: (i as any)({
      id: "sqGaDF"
    }),
    children: ((t as any).jsx as any)(js, {
      amountLabel: ((n as any).autoTopUp as any).amountLabel,
      thresholdLabel: ((n as any).autoTopUp as any).thresholdLabel
    })
  }), (e as any)[24] = i, (e as any)[25] = (n as any).autoTopUp, (e as any)[26] = y) : y = (e as any)[26];
  let p: any;
  ((e as any)[27] as any) !== (x as any) || ((e as any)[28] as any) !== (y as any) || ((e as any)[29] as any) !== (g as any) ? (p = ((t as any).jsxs as any)("div", {
    ...c,
    children: [g, x, y]
  }), (e as any)[27] = x, (e as any)[28] = y, (e as any)[29] = g, (e as any)[30] = p) : p = (e as any)[30];
  let j: any;
  return ((e as any)[31] as any) !== (p as any) || ((e as any)[32] as any) !== (o as any) ? (j = ((t as any).jsxs as any)((t as any).Fragment, {
    children: [o, p]
  }), (e as any)[31] = p, (e as any)[32] = o, (e as any)[33] = j) : j = (e as any)[33], j;
}
function js(this: any, s: any): any {
  (js as any).d = 1261;
  const e: any = ((E as any).c as any)(6),
    {
      amountLabel: n,
      thresholdLabel: i
    }: any = s;
  let l: any;
  ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (i as any) ? (l = {
    amountLabel: n,
    thresholdLabel: i
  }, (e as any)[0] = n, (e as any)[1] = i, (e as any)[2] = l) : l = (e as any)[2];
  let a: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = {
    0: ((t as any).jsx as any)(S, {
      as: "span",
      color: "primary",
      size: "md"
    })
  }, (e as any)[3] = a) : a = (e as any)[3];
  let r: any;
  return ((e as any)[4] as any) !== (l as any) ? (r = ((t as any).jsx as any)(S, {
    as: "span",
    color: "tertiary",
    size: "md",
    children: ((t as any).jsx as any)(H, {
      id: "RClSp+",
      values: l,
      components: a
    })
  }), (e as any)[4] = l, (e as any)[5] = r) : r = (e as any)[5], r;
}
function vs(this: any, s: any): any {
  (vs as any).d = 1266;
  const e: any = ((E as any).c as any)(14),
    {
      onRetry: n,
      isRetrying: i
    }: any = s,
    {
      _: l
    }: any = (W as any)();
  let a: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-ehausa"
  }, (e as any)[0] = a) : a = (e as any)[0];
  let r: any;
  ((e as any)[1] as any) !== (l as any) ? (r = (l as any)({
    id: "B0l+H4"
  }), (e as any)[1] = l, (e as any)[2] = r) : r = (e as any)[2];
  let d: any;
  ((e as any)[3] as any) !== (r as any) ? (d = ((t as any).jsx as any)(S, {
    as: "span",
    color: "red",
    role: "alert",
    size: "sm",
    children: r
  }), (e as any)[3] = r, (e as any)[4] = d) : d = (e as any)[4];
  let o: any;
  ((e as any)[5] as any) !== (l as any) ? (o = (l as any)({
    id: "6gRgw8"
  }), (e as any)[5] = l, (e as any)[6] = o) : o = (e as any)[6];
  let c: any;
  ((e as any)[7] as any) !== (i as any) || ((e as any)[8] as any) !== (n as any) || ((e as any)[9] as any) !== (o as any) ? (c = ((t as any).jsx as any)(G, {
    disabled: i,
    onClick: n,
    size: "sm",
    style: (Ce as any).secondaryHairline,
    variant: "secondary",
    children: o
  }), (e as any)[7] = i, (e as any)[8] = n, (e as any)[9] = o, (e as any)[10] = c) : c = (e as any)[10];
  let f: any;
  return ((e as any)[11] as any) !== (d as any) || ((e as any)[12] as any) !== (c as any) ? (f = ((t as any).jsxs as any)("div", {
    "data-sand-credits-refresh-failed": !0,
    ...a,
    children: [d, c]
  }), (e as any)[11] = d, (e as any)[12] = c, (e as any)[13] = f) : f = (e as any)[13], f;
}
function ks(this: any, s: any): any {
  (ks as any).d = 1263;
  const e: any = ((E as any).c as any)(22),
    {
      state: n,
      onOpen: i,
      onRetry: l,
      isRetrying: a
    }: any = s;
  (ze as any)("on-demand");
  let r: any;
  ((e as any)[0] as any) !== (n as any) ? (r = (Ft as any)(n), (e as any)[0] = n, (e as any)[1] = r) : r = (e as any)[1];
  const d: any = r,
    o: any = ((d as any).kind as any) === ("wallet" as any) && (((d as any).model as any).kind as any) === ("balance" as any) ? (d as any).model : null,
    c: any = ((d as any).kind as any) === ("wallet" as any) && (d as any).isRefreshFailed;
  let f: any, u: any, g: any, m: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = (Te as any)("on-demand"), u = {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1oot3zn sand-1t8xvyj sand-1n9uuka sand-usxwy5 sand-cssynl"
  }, g = {
    className: "sand-9f619 sand-78zum5 sand-1cy8zhl sand-1qughib sand-ehausa"
  }, m = ((t as any).jsx as any)(gs, {}), (e as any)[2] = f, (e as any)[3] = u, (e as any)[4] = g, (e as any)[5] = m) : (f = (e as any)[2], u = (e as any)[3], g = (e as any)[4], m = (e as any)[5]);
  let b: any;
  ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-2lah0s sand-ehausa"
  }, (e as any)[6] = b) : b = (e as any)[6];
  let h: any;
  ((e as any)[7] as any) !== (a as any) || ((e as any)[8] as any) !== (i as any) || ((e as any)[9] as any) !== (l as any) || ((e as any)[10] as any) !== (d as any) ? (h = ((t as any).jsxs as any)("div", {
    ...g,
    children: [m, ((t as any).jsx as any)("div", {
      "data-sand-usage-row-controls": !0,
      ...b,
      children: ((t as any).jsx as any)(bs, {
        isRetrying: a,
        onOpen: i,
        onRetry: l,
        presentation: d
      })
    })]
  }), (e as any)[7] = a, (e as any)[8] = i, (e as any)[9] = l, (e as any)[10] = d, (e as any)[11] = h) : h = (e as any)[11];
  let x: any;
  ((e as any)[12] as any) !== (o as any) ? (x = (o as any) === (null as any) ? null : ((t as any).jsx as any)(ys, {
    model: o
  }), (e as any)[12] = o, (e as any)[13] = x) : x = (e as any)[13];
  let y: any;
  ((e as any)[14] as any) !== (c as any) || ((e as any)[15] as any) !== (a as any) || ((e as any)[16] as any) !== (l as any) ? (y = c ? ((t as any).jsx as any)(vs, {
    isRetrying: a,
    onRetry: l
  }) : null, (e as any)[14] = c, (e as any)[15] = a, (e as any)[16] = l, (e as any)[17] = y) : y = (e as any)[17];
  let p: any;
  return ((e as any)[18] as any) !== (h as any) || ((e as any)[19] as any) !== (x as any) || ((e as any)[20] as any) !== (y as any) ? (p = ((t as any).jsxs as any)("div", {
    "data-sand-usage-row": "credits",
    id: f,
    ...u,
    children: [h, x, y]
  }), (e as any)[18] = h, (e as any)[19] = x, (e as any)[20] = y, (e as any)[21] = p) : p = (e as any)[21], p;
}
const Ot: any = ((Date as any).parse as any)("2025-11-20T08:00:00Z"),
  Ss: any = ((1440 as any) * (60 as any) as any) * (1e3 as any),
  _s: any = (De as any)((s: any): any => new ((Intl as any).DateTimeFormat as any)(s, {
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }));
function ve(this: any, s: any): any {
  return ((((new (Date as any)(s) as any).toISOString as any)() as any).slice as any)(0, 10);
}
function ss(this: any, {
  timestampMs: s,
  deltaMonths: e
}: any): any {
  const n: any = new (Date as any)(s),
    i: any = ((n as any).getUTCDate as any)();
  ((n as any).setUTCDate as any)(1), ((n as any).setUTCMonth as any)((((n as any).getUTCMonth as any)() as any) + (e as any));
  const l: any = ((new (Date as any)(((Date as any).UTC as any)(((n as any).getUTCFullYear as any)(), (((n as any).getUTCMonth as any)() as any) + (1 as any), 0)) as any).getUTCDate as any)();
  return ((n as any).setUTCDate as any)(((Math as any).min as any)(i, l)), ((n as any).getTime as any)();
}
function Re(this: any, s: any): any {
  const {
      dailySpend: e,
      periodStartMs: n,
      periodEndMs: i,
      nowMs: l,
      maxPointCount: a
    }: any = s,
    r: any = new (Map as any)();
  for (const u of e) {
    const g: any = (ve as any)((u as any).dayMs);
    ((r as any).set as any)(g, ((((r as any).get as any)(g) ?? 0) as any) + ((u as any).spendCents as any));
  }
  const d: any = [];
  for (let u: any = n; (u as any) < (i as any); u += Ss) ((d as any).push as any)((ve as any)(u));
  const o: any = (ve as any)(l),
    c: any = (a as any) !== (void 0 as any) ? ((d as any).slice as any)(0, a) : ((d as any).filter as any)((u: any): any => (u as any) <= (o as any));
  let f: any = 0;
  return ((c as any).map as any)((u: any): any => (f += ((r as any).get as any)(u) ?? 0, {
    dayKey: u,
    label: (((_s as any)() as any).format as any)(new (Date as any)(`${u}T00:00:00Z`)),
    totalCents: f
  }));
}
function qt(this: any, s: any): any {
  const {
      grokBotDailySpend: e,
      totalDailySpend: n,
      ...i
    }: any = s,
    l: any = (Re as any)({
      dailySpend: e,
      ...i
    }),
    a: any = (Re as any)({
      dailySpend: n,
      ...i
    });
  return ((l as any).map as any)((r: any, d: any): any => {
    const o: any = (r as any).totalCents,
      c: any = ((Math as any).max as any)(0, (((a as any)[d]?.totalCents ?? 0) as any) - (o as any));
    return {
      dayKey: (r as any).dayKey,
      label: (r as any).label,
      totalCents: (o as any) + (c as any),
      centsByProduct: {
        "grok-bot": o,
        cursor: c
      }
    };
  });
}
function ts(this: any, s: any): any {
  const {
    points: e,
    xForIndex: n,
    yForCents: i
  }: any = s;
  return ((((e as any).map as any)((l: any, a: any): any => `${(a as any) === (0 as any) ? "M" : "L"} ${(n as any)(a)} ${(i as any)((l as any).totalCents)}`) as any).join as any)(" ");
}
function Wt(this: any, s: any): any {
  const {
      points: e,
      upperCentsOf: n,
      lowerCentsOf: i,
      xForIndex: l,
      yForCents: a
    }: any = s,
    r: any = ((e as any).map as any)((o: any, c: any): any => `${(c as any) === (0 as any) ? "M" : "L"} ${(l as any)(c)} ${(a as any)((n as any)(o))}`),
    d: any = ((((e as any).map as any)((o: any, c: any): any => `L ${(l as any)(c)} ${(a as any)((i as any)(o))}`) as any).reverse as any)();
  return (([...r, ...d, "Z"] as any).join as any)(" ");
}
function ns(this: any, s: any): any {
  if ((s as any) <= (0 as any)) return 1;
  const e: any = (s as any) / (4 as any);
  let n: any = 1;
  for (; ((n as any) * (10 as any) as any) <= (e as any);) n *= 10;
  for (; (n as any) > (e as any);) n /= 10;
  const i: any = (e as any) / (n as any);
  return (i as any) <= (1 as any) ? n : (i as any) <= (2 as any) ? (2 as any) * (n as any) : (i as any) <= (5 as any) ? (5 as any) * (n as any) : (10 as any) * (n as any);
}
function Ls(this: any, s: any): any {
  const e: any = ((Math as any).max as any)(0, ...s),
    n: any = (ns as any)(e),
    i: any = ((Math as any).max as any)((n as any) * (4 as any), (((Math as any).ceil as any)((e as any) / (n as any)) as any) * (n as any), 4),
    l: any = ((Math as any).max as any)(1, (ns as any)(i)),
    a: any = ((Math as any).max as any)(1, ((Math as any).round as any)((i as any) / (l as any)));
  return {
    maxCents: i,
    ticks: ((Array as any).from as any)({
      length: (a as any) + (1 as any)
    }, (r: any, d: any): any => (d as any) * (l as any))
  };
}
const Gt: any = new (Set as any)(["link-supergrok-heavy-for-grok-bot", "link-supergrok-heavy-for-ultra", "link-supergrok-plus-or-heavy", "link-supergrok-for-grok-bot"]);
function Cs(this: any, s: any): any {
  return ((s as any).kind as any) != (null as any) && ((Gt as any).has as any)((s as any).kind);
}
const Ht: any = {
  "upgrade-to-pro": {
    id: "2POOFK"
  },
  "upgrade-to-pro-plus-for-more-usage": {
    id: "3fPjUY"
  },
  "upgrade-to-ultra-for-more-usage": {
    id: "PB5HQ4"
  }
};
function ws(this: any, s: any): any {
  const e: any = (s as any).grokPlanLabel;
  return (e as any) != (null as any) && ((e as any).length as any) > (0 as any) && (e as any) !== (dt as any) ? e : null;
}
function Vt(this: any, s: any, e: any): any {
  const n: any = (ws as any)(e);
  if ((n as any) != (null as any)) return n;
  if ((e as any).isSandTrial) return (s as any)({
    id: "lhkaAC"
  });
  for (const i of (e as any).upgradeCtas) {
    const l: any = ((i as any).kind as any) == (null as any) ? void 0 : (Ht as any)[(i as any).kind];
    if ((l as any) != (null as any)) return (s as any)(l);
  }
  return null;
}
function zs(this: any, s: any): any {
  return ((new ((Intl as any).DateTimeFormat as any)((hs as any)(), {
    month: "short",
    day: "numeric"
  }) as any).format as any)(new (Date as any)(s));
}
function Kt(this: any, s: any, e: any): any {
  const n: any = (zs as any)(e);
  return (s as any)({
    id: "jG3nCu",
    values: {
      date: n
    }
  });
}
function Yt(this: any, s: any, e: any, n: any): any {
  const i: any = (e as any).sandUsageResetTimestampMs;
  if (!(e as any).hasNonZeroIncludedLimit || (i as any) == (null as any)) return null;
  if ((e as any).isSandTrial) return (Kt as any)(s, i);
  if ((Cs as any)(n) || ((n as any).kind as any) === (ot as any)) return null;
  const l: any = (zs as any)(i);
  return (s as any)({
    id: "uhnBIQ",
    values: {
      date: l
    }
  });
}
function Zt(this: any, s: any, e: any, n: any): any {
  if (((e as any).periodStartMs as any) < (Ot as any)) return {
    kind: "before-chart-history",
    notice: (s as any)({
      id: "YJ8Dol"
    })
  };
  const i: any = (qt as any)({
      grokBotDailySpend: (e as any).currentGrokBotDailySpend,
      totalDailySpend: (e as any).currentTotalDailySpend,
      periodStartMs: (e as any).periodStartMs,
      periodEndMs: (e as any).periodEndMs,
      nowMs: n
    }),
    l: any = ((e as any).previousTotalDailySpend as any) === (null as any) ? null : (Re as any)({
      dailySpend: (e as any).previousTotalDailySpend,
      periodStartMs: (ss as any)({
        timestampMs: (e as any).periodStartMs,
        deltaMonths: -1
      }),
      periodEndMs: (ss as any)({
        timestampMs: (e as any).periodEndMs,
        deltaMonths: -1
      }),
      nowMs: n,
      maxPointCount: (i as any).length
    }),
    a: any = ((e as any).spendingLimitCents as any) !== (null as any) && ((e as any).spendingLimitCents as any) > (0 as any) ? (e as any).spendingLimitCents : null,
    r: any = [(s as any)({
      id: "AIjPv9"
    })];
  return (e as any).isRequestBasedPricing && ((r as any).push as any)((s as any)({
    id: "64Kn/w"
  })), (a as any) !== (null as any) && ((r as any).push as any)((s as any)({
    id: "41vP8h"
  })), {
    kind: "chart",
    chart: {
      title: (s as any)({
        id: "ro3+Jh"
      }),
      subtitle: (s as any)({
        id: "gfPiiz"
      }),
      currentPoints: i,
      previousPoints: l,
      spendingLimitCents: a,
      footnotes: r
    }
  };
}
function as(this: any, s: any): any {
  return ((Math as any).min as any)(((Math as any).max as any)(s, 0), 100);
}
function Xt(this: any, s: any, e: any): any {
  return (e as any).hasNonZeroIncludedLimit ? null : (e as any).hasAvailableUsage && ((e as any).sandUsagePercent as any) != (null as any) && ((e as any).sandUsagePercent as any) < (100 as any) ? (s as any)({
    id: "SULP36"
  }) : (e as any).isSandTrial ? (s as any)({
    id: "3DJO6C"
  }) : (e as any).hasEndedSandTrial ? (s as any)({
    id: "azzy61"
  }) : null;
}
function Qt(this: any, s: any): any {
  if (((s as any).kind as any) != (null as any)) return `kind:${(s as any).kind}`;
  const e: any = (s as any).action;
  return ((e as any).kind as any) === ("open-url" as any) ? `url:${(e as any).url}` : `action:${(e as any).action}`;
}
function Jt(this: any, s: any, e: any): any {
  return (e as any) == (null as any) ? (s as any)({
    id: "A+zoTy"
  }) : (s as any)({
    id: "hM5IZe",
    values: {
      planName: e
    }
  });
}
function en(this: any, s: any, e: any): any {
  let n: any = (Xt as any)(s, e);
  const i: any = new (Map as any)();
  return (((e as any).upgradeCtas as any).map as any)((l: any, a: any): any => {
    const r: any = (a as any) === (0 as any),
      d: any = r ? (Vt as any)(s, e) : null,
      o: any = r ? (Yt as any)(s, e, l) : null,
      c: any = (l as any).supportingText ?? n;
    ((l as any).supportingText as any) === (null as any) && (n = null);
    const f: any = (Qt as any)(l),
      u: any = ((i as any).get as any)(f) ?? 0;
    return ((i as any).set as any)(f, (u as any) + (1 as any)), {
      key: (u as any) === (0 as any) ? f : `${f}#${u}`,
      cta: l,
      rowLabel: r ? (Jt as any)(s, d) : null,
      planName: d,
      planDescription: o,
      supportingText: c,
      isSuperGrokLink: (Cs as any)(l)
    };
  });
}
function ls(this: any, s: any, e: any): any {
  return ((ws as any)(e) as any) == (null as any) ? (s as any)({
    id: "URP9it"
  }) : (s as any)({
    id: "+Mizp6"
  });
}
function sn(this: any, s: any, e: any): any {
  return (s as any)((e as any) === ("grok" as any) ? {
    id: "cMBy0b"
  } : {
    id: "URP9it"
  });
}
function is(this: any, s: any, e: any): any {
  return (e as any).isSandTrial ? (rt as any)({
    includedUsageKind: "trial",
    planId: null
  }) : (s as any)({
    id: "9x0ld9"
  });
}
function tn(this: any, s: any, e: any): any {
  return (e as any).isSandTrial ? null : (s as any)({
    id: "oshY9g"
  });
}
function nn(this: any, s: any): any {
  const e: any = (s as any).onDemandSettings;
  return (e as any) != (null as any) && (e as any).visible && (e as any).eligible && !(e as any).enabled;
}
const an: any = (De as any)((s: any): any => new ((Intl as any).NumberFormat as any)(s, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  })),
  ln: any = (De as any)((s: any): any => new ((Intl as any).NumberFormat as any)(s, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })),
  rn: any = (De as any)((s: any): any => new ((Intl as any).NumberFormat as any)(s, {
    style: "currency",
    currency: "USD",
    notation: "compact",
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  })),
  dn: number = 1e5;
function X(this: any, s: any): any {
  const e: any = (s as any) / (100 as any);
  return (((((Number as any).isInteger as any)(e) ? (an as any)() : (ln as any)()) as any).format as any)(e);
}
function Ns(this: any, s: any): any {
  return (s as any) >= (dn as any) ? (((rn as any)() as any).format as any)((s as any) / (100 as any)) : (X as any)(s);
}
function on(this: any, s: any, e: any, n: any): any {
  if (((e as any).enterpriseTeamId as any) != (null as any)) return {
    enterpriseTeamId: (e as any).enterpriseTeamId,
    weekly: null,
    includedUsageTitle: (is as any)(s, e),
    includedUsageDescription: null,
    onDemand: null,
    spendLimit: null,
    onDemandEnablePending: !1,
    manageBillingLabel: (ls as any)(s, e),
    upgradeRows: [],
    canCancelTrial: !1
  };
  let i: any = null;
  if (((e as any).sandUsagePercent as any) != (null as any)) {
    const r: any = {
        nextResetMs: (e as any).sandUsageResetTimestampMs,
        nowMs: n
      },
      d: any = (e as any).isSandTrial ? (at as any)(s, r) : (lt as any)(s, {
        ...r,
        allowUnphasedDefault: (e as any).hasNonZeroIncludedLimit
      });
    i = {
      valueLabel: (it as any)((e as any).sandUsagePercent),
      barPercent: (as as any)((e as any).sandUsagePercent),
      resetLabel: d
    };
  }
  const l: any = (e as any).onDemand;
  let a: any = null;
  return (l as any) != (null as any) && (((l as any).limitCents as any) == (null as any) ? a = {
    valueLabel: (X as any)((l as any).usedCents),
    barPercent: null,
    resetLabel: (Xe as any)(s, {
      nextResetMs: (l as any).resetTimestampMs,
      nowMs: n
    }),
    hasSpend: ((l as any).usedCents as any) > (0 as any)
  } : a = {
    valueLabel: `${(X as any)((l as any).usedCents)} / ${(X as any)((l as any).limitCents)}`,
    barPercent: (as as any)((((l as any).usedCents as any) / ((l as any).limitCents as any) as any) * (100 as any)),
    resetLabel: (Xe as any)(s, {
      nextResetMs: (l as any).resetTimestampMs,
      nowMs: n
    })
  }), {
    enterpriseTeamId: null,
    weekly: i,
    includedUsageTitle: (is as any)(s, e),
    includedUsageDescription: (tn as any)(s, e),
    onDemand: a,
    spendLimit: (cn as any)((e as any).spendLimit),
    onDemandEnablePending: (nn as any)(e),
    manageBillingLabel: (ls as any)(s, e),
    upgradeRows: (en as any)(s, e),
    canCancelTrial: (e as any).isSandTrial && (e as any).canCancelSandTrial
  };
}
function cn(this: any, s: any): any {
  return (s as any) == (null as any) ? null : {
    savedMode: (s as any).mode,
    savedLimitDollars: ((s as any).mode as any) === ("fixed" as any) ? (s as any).limitDollars : null
  };
}
const un: any = /^(?:\d+|\d{1,3}(?:,\d{3})+)$/;
function Ts(this: any, s: any): any {
  const e: any = ((((s as any).trim as any)() as any).replace as any)(/^\$/, "");
  if (!((un as any).test as any)(e)) return null;
  const n: any = (Number as any)(((e as any).replaceAll as any)(",", ""));
  return !((Number as any).isSafeInteger as any)(n) || (n as any) <= (0 as any) || (n as any) >= (ct as any) ? null : n;
}
function fn(this: any, s: any, e: any): any {
  if ((s as any) !== ("fixed" as any)) return {
    mode: s
  };
  const n: any = (Ts as any)(e);
  return (n as any) === (null as any) ? null : {
    mode: "fixed",
    limitDollars: n
  };
}
function mn(this: any, s: any, e: any, n: any): any {
  return (e as any) !== ((s as any).savedMode as any) ? !0 : (e as any) !== ("fixed" as any) ? !1 : ((Ts as any)(n) as any) !== ((s as any).savedLimitDollars as any);
}
const Le: any = [{
    product: "grok-bot",
    ink: "#4C72B0",
    label: {
      id: "vwB47p"
    }
  }, {
    product: "cursor",
    ink: "#5BA37A",
    label: {
      id: "D7/LAN"
    }
  }],
  oe: any = {
    previous: "#9AA0A6",
    limit: "#FF6430"
  },
  hn: number = 640,
  he: number = 260,
  Y: any = {
    top: 18,
    right: 24,
    bottom: 40
  },
  pn: number = 56,
  rs: number = 8,
  xn: number = 8,
  gn: number = 72,
  ds: number = 20,
  bn: number = .28,
  yn: number = .72,
  os: number = 8,
  jn: any = {
    swatchLabel: {
      k1xSpc: "sand-78zum5",
      kGNEyG: "sand-6s0dn4",
      kOIVth: "sand-ehausa",
      $$css: !0
    }
  };
function pe(this: any, s: any): any {
  (pe as any).d = 1281;
  const e: any = ((E as any).c as any)(15),
    {
      color: n,
      shape: i,
      muted: l,
      label: a
    }: any = s;
  let r: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = (Ge as any)((jn as any).swatchLabel), (e as any)[0] = r) : r = (e as any)[0];
  let d: any;
  ((e as any)[1] as any) !== (l as any) || ((e as any)[2] as any) !== (i as any) ? (d = ({
    0: {
      className: "sand-qtp20y sand-6jxa94 sand-amhcws sand-13fuv20"
    },
    4: {
      className: "sand-170jfvy sand-1fsd2vl sand-1dhlr3c sand-1bl94mz"
    },
    2: {
      className: "sand-qtp20y sand-6jxa94 sand-amhcws sand-lya59e"
    },
    6: {
      className: "sand-170jfvy sand-1fsd2vl sand-1dhlr3c sand-1bl94mz sand-lya59e"
    },
    1: {
      className: "sand-qtp20y sand-6jxa94 sand-amhcws sand-13fuv20 sand-wq05k6"
    },
    5: {
      className: "sand-170jfvy sand-1fsd2vl sand-1dhlr3c sand-1bl94mz sand-wq05k6"
    },
    3: {
      className: "sand-qtp20y sand-6jxa94 sand-amhcws sand-lya59e sand-wq05k6"
    },
    7: {
      className: "sand-170jfvy sand-1fsd2vl sand-1dhlr3c sand-1bl94mz sand-lya59e sand-wq05k6"
    }
  } as any)[((((((i as any) === ("square" as any)) as any) << (2 as any) as any) | ((((i as any) === ("dashed-line" as any)) as any) << (1 as any) as any)) as any) | ((((l as any) === (!0 as any)) as any) << (0 as any) as any)], (e as any)[1] = l, (e as any)[2] = i, (e as any)[3] = d) : d = (e as any)[3];
  let o: any;
  ((e as any)[4] as any) !== (n as any) || ((e as any)[5] as any) !== (i as any) ? (o = (i as any) === ("square" as any) ? {
    backgroundColor: n
  } : {
    borderTopColor: n
  }, (e as any)[4] = n, (e as any)[5] = i, (e as any)[6] = o) : o = (e as any)[6];
  let c: any;
  ((e as any)[7] as any) !== (d as any) || ((e as any)[8] as any) !== (o as any) ? (c = ((t as any).jsx as any)("span", {
    ...d,
    style: o
  }), (e as any)[7] = d, (e as any)[8] = o, (e as any)[9] = c) : c = (e as any)[9];
  let f: any;
  ((e as any)[10] as any) !== (a as any) ? (f = ((t as any).jsx as any)(S, {
    as: "span",
    color: "secondary",
    size: "xs",
    children: a
  }), (e as any)[10] = a, (e as any)[11] = f) : f = (e as any)[11];
  let u: any;
  return ((e as any)[12] as any) !== (c as any) || ((e as any)[13] as any) !== (f as any) ? (u = ((t as any).jsxs as any)("span", {
    ...r,
    children: [c, f]
  }), (e as any)[12] = c, (e as any)[13] = f, (e as any)[14] = u) : u = (e as any)[14], u;
}
function Pe(this: any, s: any, e: any): any {
  let n: any = 0;
  for (const {
    product: i
  } of ((Le as any).slice as any)(0, e)) n += ((s as any).centsByProduct as any)[i];
  return n;
}
function Ds(this: any, s: any): any {
  const e: any = ((E as any).c as any)(5),
    [n, i]: any = ((fe as any).useState as any)(0);
  let l: any;
  ((e as any)[0] as any) !== (s as any) ? (l = (): any => (d: any): any => {
    const o: any = (): any => (i as any)((s as any)(d));
    (o as any)();
    const c: any = new (ResizeObserver as any)(o);
    return ((c as any).observe as any)(d), (): any => ((c as any).disconnect as any)();
  }, (e as any)[0] = s, (e as any)[1] = l) : l = (e as any)[1];
  const [a]: any = ((fe as any).useState as any)(l);
  let r: any;
  return ((e as any)[2] as any) !== (a as any) || ((e as any)[3] as any) !== (n as any) ? (r = {
    attach: a,
    width: n
  }, (e as any)[2] = a, (e as any)[3] = n, (e as any)[4] = r) : r = (e as any)[4], r;
}
function vn(this: any, s: any): any {
  return ((Math as any).round as any)((s as any).clientWidth);
}
function kn(this: any, s: any): any {
  return ((Math as any).ceil as any)((((s as any).getBBox as any)() as any).width);
}
function $e(this: any): any {
  return (Ds as any)(vn);
}
function Ms(this: any): any {
  return (Ds as any)(kn);
}
function Sn(this: any, {
  anchorPx: s,
  tooltipWidthPx: e,
  plotWidthPx: n
}: any): any {
  const l: any = (os as any) - (s as any),
    a: any = (((n as any) - (os as any) as any) - (e as any) as any) - (s as any);
  return ((Math as any).round as any)(((Math as any).max as any)(l, ((Math as any).min as any)(-12, a)));
}
function Us(this: any, s: any): any {
  (Us as any).d = 1280;
  const e: any = ((E as any).c as any)(56),
    {
      chart: n
    }: any = s,
    {
      i18n: i,
      _: l
    }: any = (W as any)(),
    [a, r]: any = ((fe as any).useState as any)(null),
    {
      attach: d,
      width: o
    }: any = ($e as any)(),
    {
      attach: c,
      width: f
    }: any = ($e as any)(),
    {
      attach: u,
      width: g
    }: any = (Ms as any)(),
    {
      currentPoints: m,
      previousPoints: b,
      spendingLimitCents: h
    }: any = n;
  let x: any;
  ((e as any)[0] as any) !== (m as any) || ((e as any)[1] as any) !== (b as any) ? (x = ((m as any).some as any)(Tn) || (((b ?? []) as any).some as any)(Nn), (e as any)[0] = m, (e as any)[1] = b, (e as any)[2] = x) : x = (e as any)[2];
  const y: any = x;
  let p: any, j: any, k: any, z: any;
  if (((e as any)[3] as any) !== (l as any) || ((e as any)[4] as any) !== (u as any) || ((e as any)[5] as any) !== (d as any) || ((e as any)[6] as any) !== (c as any) || ((e as any)[7] as any) !== (g as any) || ((e as any)[8] as any) !== ((n as any).subtitle as any) || ((e as any)[9] as any) !== ((n as any).title as any) || ((e as any)[10] as any) !== (m as any) || ((e as any)[11] as any) !== (y as any) || ((e as any)[12] as any) !== (a as any) || ((e as any)[13] as any) !== (i as any) || ((e as any)[14] as any) !== (o as any) || ((e as any)[15] as any) !== (b as any) || ((e as any)[16] as any) !== (h as any) || ((e as any)[17] as any) !== (f as any)) {
    const I: any = (Ls as any)([...((m as any).map as any)(zn), ...(((b ?? []) as any).map as any)(wn), h ?? 0]),
      L: any = (((I as any).ticks as any).map as any)(Cn),
      C: any = (o as any) > (0 as any) ? o : hn,
      T: any = ((Math as any).max as any)(pn, (g as any) + (rs as any)),
      B: any = ((Math as any).max as any)(((C as any) - (T as any) as any) - ((Y as any).right as any), 1),
      _: any = ((he as any) - ((Y as any).top as any) as any) - ((Y as any).bottom as any),
      U: any = ((m as any).length as any) - (1 as any),
      $: any = ((Math as any).max as any)(1, ((Math as any).ceil as any)(((m as any).length as any) / (((Math as any).max as any)(2, ((Math as any).floor as any)((B as any) / (gn as any))) as any)));
    let A: any;
    ((e as any)[22] as any) !== ((m as any).length as any) || ((e as any)[23] as any) !== (U as any) || ((e as any)[24] as any) !== (T as any) || ((e as any)[25] as any) !== (B as any) ? (A = (P: any): any => ((m as any).length as any) <= (1 as any) ? (T as any) + ((B as any) / (2 as any) as any) : (T as any) + (((P as any) / (U as any) as any) * (B as any) as any), (e as any)[22] = (m as any).length, (e as any)[23] = U, (e as any)[24] = T, (e as any)[25] = B, (e as any)[26] = A) : A = (e as any)[26];
    const D: any = A,
      v: any = (P: any): any => ((Y as any).top as any) + (((1 as any) - ((P as any) / ((I as any).maxCents as any) as any) as any) * (_ as any) as any),
      M: any = ((m as any).at as any)(-1)?.totalCents ?? 0,
      q: any = (h as any) !== (null as any) && ((a as any) !== (null as any) || (M as any) >= ((h as any) * (yn as any) as any)),
      F: any = (a as any) === (null as any) ? void 0 : (m as any)[a],
      O: any = (a as any) === (null as any) || (b as any) === (null as any) ? void 0 : (b as any)[a];
    let ne: any, se: any;
    ((e as any)[27] as any) !== (C as any) || ((e as any)[28] as any) !== (a as any) || ((e as any)[29] as any) !== (f as any) || ((e as any)[30] as any) !== (D as any) ? (se = (a as any) === (null as any) ? 0 : (D as any)(a), ne = (Sn as any)({
      anchorPx: se,
      tooltipWidthPx: f,
      plotWidthPx: C
    }), (e as any)[27] = C, (e as any)[28] = a, (e as any)[29] = f, (e as any)[30] = D, (e as any)[31] = ne, (e as any)[32] = se) : (ne = (e as any)[31], se = (e as any)[32]);
    const ge: any = ne;
    let de: any;
    ((e as any)[33] as any) !== (l as any) ? (de = (l as any)({
      id: "72c5Qo"
    }), (e as any)[33] = l, (e as any)[34] = de) : de = (e as any)[34];
    const ae: any = de;
    let le: any;
    ((e as any)[35] as any) !== (l as any) ? (le = (l as any)({
      id: "UGQdzC"
    }), (e as any)[35] = l, (e as any)[36] = le) : le = (e as any)[36];
    const be: any = le;
    let ie: any;
    ((e as any)[37] as any) !== (l as any) ? (ie = (l as any)({
      id: "TxeDDP"
    }), (e as any)[37] = l, (e as any)[38] = ie) : ie = (e as any)[38];
    const me: any = ie;
    ((e as any)[39] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = {
      className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1oot3zn sand-y3j6vt sand-2f45yy"
    }, (e as any)[39] = p) : p = (e as any)[39], j = "enterprise-usage-chart";
    let re: any;
    ((e as any)[40] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (re = {
      className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-11twubx sand-usxwy5"
    }, (e as any)[40] = re) : re = (e as any)[40];
    let J: any;
    ((e as any)[41] as any) !== ((n as any).title as any) ? (J = ((t as any).jsx as any)(S, {
      as: "span",
      color: "primary",
      size: "md",
      children: (n as any).title
    }), (e as any)[41] = (n as any).title, (e as any)[42] = J) : J = (e as any)[42];
    let ee: any;
    ((e as any)[43] as any) !== ((n as any).subtitle as any) ? (ee = ((t as any).jsx as any)(S, {
      as: "span",
      color: "secondary",
      size: "sm",
      children: (n as any).subtitle
    }), (e as any)[43] = (n as any).subtitle, (e as any)[44] = ee) : ee = (e as any)[44], ((e as any)[45] as any) !== (J as any) || ((e as any)[46] as any) !== (ee as any) ? (k = ((t as any).jsxs as any)("div", {
      ...re,
      children: [J, ee]
    }), (e as any)[45] = J, (e as any)[46] = ee, (e as any)[47] = k) : k = (e as any)[47], z = y ? ((t as any).jsxs as any)((t as any).Fragment, {
      children: [((t as any).jsxs as any)("div", {
        className: "sand-1n2onr6 sand-h8yej3 sand-b3r6kr",
        onMouseLeave: (): any => (r as any)(null),
        ref: d,
        children: [((t as any).jsxs as any)("svg", {
          className: "sand-1lliihq sand-dwzuf7 sand-h8yej3",
          "aria-label": (n as any).title,
          height: he,
          role: "img",
          viewBox: `0 0 ${C} ${he}`,
          width: C,
          children: [((L as any).map as any)((P: any): any => {
            const {
              cents: R
            }: any = P;
            return ((t as any).jsx as any)("line", {
              opacity: .45,
              stroke: (Q as any)["--cursor-stroke-tertiary"],
              strokeWidth: 1,
              x1: T,
              x2: (C as any) - ((Y as any).right as any),
              y1: (v as any)(R),
              y2: (v as any)(R)
            }, R);
          }), ((t as any).jsx as any)("g", {
            ref: u,
            children: ((L as any).map as any)((P: any): any => {
              const {
                cents: R,
                label: Z
              }: any = P;
              return ((t as any).jsx as any)("text", {
                fill: (Q as any)["--cursor-text-secondary"],
                fontSize: 11,
                textAnchor: "end",
                x: (T as any) - (rs as any),
                y: ((v as any)(R) as any) + (4 as any),
                children: Z
              }, R);
            })
          }, ((((L as any).map as any)(Ln) as any).join as any)(`
`)), ((Le as any).map as any)((P: any, R: any): any => {
            const Z: any = (V: any): any => (Pe as any)(V, (R as any) + (1 as any));
            return ((t as any).jsxs as any)("g", {
              children: [((t as any).jsx as any)("path", {
                d: (Wt as any)({
                  points: m,
                  upperCentsOf: Z,
                  lowerCentsOf: (V: any): any => (Pe as any)(V, R),
                  xForIndex: D,
                  yForCents: v
                }),
                fill: (P as any).ink,
                fillOpacity: bn
              }), ((t as any).jsx as any)("path", {
                d: (ts as any)({
                  points: ((m as any).map as any)((V: any): any => ({
                    ...V,
                    totalCents: (Z as any)(V)
                  })),
                  xForIndex: D,
                  yForCents: v
                }),
                fill: "none",
                stroke: (P as any).ink,
                strokeLinecap: "round",
                strokeWidth: 2
              })]
            }, (P as any).product);
          }), (b as any) !== (null as any) ? ((t as any).jsx as any)("path", {
            d: (ts as any)({
              points: b,
              xForIndex: D,
              yForCents: v
            }),
            fill: "none",
            opacity: .95,
            stroke: (oe as any).previous,
            strokeDasharray: "6 6",
            strokeLinecap: "round",
            strokeWidth: 2
          }) : null, (h as any) !== (null as any) ? ((t as any).jsxs as any)("g", {
            children: [((t as any).jsx as any)("line", {
              opacity: .34,
              stroke: (oe as any).limit,
              strokeWidth: 2.5,
              x1: T,
              x2: (C as any) - ((Y as any).right as any),
              y1: (v as any)(h),
              y2: (v as any)(h)
            }), q ? ((t as any).jsx as any)("text", {
              fill: (oe as any).limit,
              fontSize: 10,
              opacity: .82,
              textAnchor: "end",
              x: (C as any) - ((Y as any).right as any),
              y: ((v as any)(h) as any) - (6 as any),
              children: (l as any)({
                id: "sEahJQ",
                values: {
                  0: (X as any)(h)
                }
              })
            }) : null]
          }) : null, (a as any) !== (null as any) && (F as any) !== (void 0 as any) ? ((t as any).jsxs as any)("g", {
            children: [((t as any).jsx as any)("line", {
              opacity: .45,
              stroke: (Q as any)["--cursor-text-primary"],
              strokeWidth: 1,
              x1: (D as any)(a),
              x2: (D as any)(a),
              y1: (Y as any).top,
              y2: (he as any) - ((Y as any).bottom as any)
            }), ((Le as any).map as any)((P: any, R: any): any => ((t as any).jsx as any)("circle", {
              cx: (D as any)(a),
              cy: (v as any)((Pe as any)(F, (R as any) + (1 as any))),
              fill: (P as any).ink,
              r: 4,
              stroke: (Q as any)["--cursor-bg-primary"],
              strokeWidth: 1.5
            }, (P as any).product)), (O as any) !== (void 0 as any) ? ((t as any).jsx as any)("circle", {
              cx: (D as any)(a),
              cy: (v as any)((O as any).totalCents),
              fill: (oe as any).previous,
              r: 3.5,
              stroke: (Q as any)["--cursor-bg-primary"],
              strokeWidth: 1.5
            }) : null]
          }) : null, ((t as any).jsx as any)("line", {
            stroke: (Q as any)["--cursor-stroke-tertiary"],
            strokeWidth: 1,
            x1: T,
            x2: (C as any) - ((Y as any).right as any),
            y1: (he as any) - ((Y as any).bottom as any),
            y2: (he as any) - ((Y as any).bottom as any)
          }), ((m as any).map as any)((P: any, R: any): any => {
            const Z: any = (R as any) === (0 as any) ? T : (((D as any)((R as any) - (1 as any)) as any) + ((D as any)(R) as any) as any) / (2 as any),
              V: any = (R as any) === (U as any) ? (C as any) - ((Y as any).right as any) : (((D as any)((R as any) + (1 as any)) as any) + ((D as any)(R) as any) as any) / (2 as any);
            return ((t as any).jsxs as any)("g", {
              children: [((t as any).jsx as any)("rect", {
                fill: "transparent",
                height: _,
                onFocus: (): any => (r as any)(R),
                onMouseEnter: (): any => (r as any)(R),
                width: ((Math as any).max as any)((V as any) - (Z as any), xn),
                x: Z,
                y: (Y as any).top
              }), ((R as any) % ($ as any) as any) === (0 as any) ? ((t as any).jsx as any)("text", {
                fill: (Q as any)["--cursor-text-secondary"],
                fontSize: 11,
                textAnchor: "middle",
                x: ((Math as any).min as any)(((Math as any).max as any)((D as any)(R), (T as any) + (ds as any)), ((C as any) - ((Y as any).right as any) as any) - (ds as any)),
                y: (he as any) - (14 as any),
                children: (P as any).label
              }) : null]
            }, (P as any).dayKey);
          })]
        }), (F as any) !== (void 0 as any) ? ((t as any).jsxs as any)("div", {
          className: "sand-47corl sand-10l6tqk sand-e6tamo sand-1vjfegm sand-78zum5 sand-dt5ytf sand-11twubx sand-fb3i0g sand-ezivpi sand-13ly8rp sand-t1q3vd sand-1xlntvz sand-8fiw5y sand-1043rbw sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-3dhcaw sand-1ep8fdt",
          "data-component": "enterprise-usage-tooltip",
          ref: c,
          style: {
            left: `${se}px`,
            transform: `translateX(${ge}px)`,
            visibility: (f as any) > (0 as any) ? "visible" : "hidden"
          },
          children: [((t as any).jsx as any)(S, {
            as: "span",
            color: "primary",
            size: "sm",
            children: (F as any).label
          }), ((Le as any).map as any)((P: any): any => ((t as any).jsxs as any)("div", {
            className: "sand-78zum5 sand-6s0dn4 sand-1qughib sand-1jlwbde sand-uxw1ft",
            children: [((t as any).jsx as any)(pe, {
              color: (P as any).ink,
              label: ((i as any)._ as any)((P as any).label),
              shape: "square"
            }), ((t as any).jsx as any)(S, {
              as: "span",
              color: "primary",
              size: "xs",
              children: (X as any)(((F as any).centsByProduct as any)[(P as any).product])
            })]
          }, (P as any).product)), ((t as any).jsxs as any)("div", {
            className: "sand-78zum5 sand-6s0dn4 sand-1qughib sand-1jlwbde sand-uxw1ft",
            children: [((t as any).jsxs as any)("span", {
              className: "sand-78zum5 sand-6s0dn4 sand-ehausa",
              children: [((t as any).jsx as any)("span", {
                className: "sand-qtp20y sand-6jxa94 sand-amhcws sand-13fuv20 sand-lshs6z"
              }), ((t as any).jsx as any)(S, {
                as: "span",
                color: "primary",
                size: "xs",
                children: ae
              })]
            }), ((t as any).jsx as any)(S, {
              as: "span",
              color: "primary",
              size: "xs",
              children: (X as any)((F as any).totalCents)
            })]
          }), (O as any) !== (void 0 as any) ? ((t as any).jsxs as any)("div", {
            className: "sand-78zum5 sand-6s0dn4 sand-1qughib sand-1jlwbde sand-uxw1ft",
            children: [((t as any).jsx as any)(pe, {
              color: (oe as any).previous,
              label: be,
              shape: "dashed-line"
            }), ((t as any).jsx as any)(S, {
              as: "span",
              color: "primary",
              size: "xs",
              children: (X as any)((O as any).totalCents)
            })]
          }) : null, (h as any) !== (null as any) ? ((t as any).jsxs as any)("div", {
            className: "sand-78zum5 sand-6s0dn4 sand-1qughib sand-1jlwbde sand-uxw1ft",
            children: [((t as any).jsx as any)(pe, {
              color: (oe as any).limit,
              label: me,
              muted: !0,
              shape: "line"
            }), ((t as any).jsx as any)(S, {
              as: "span",
              color: "primary",
              size: "xs",
              children: (X as any)(h)
            })]
          }) : null]
        }) : null]
      }), ((t as any).jsxs as any)("div", {
        className: "sand-78zum5 sand-1a02dak sand-6s0dn4 sand-1jlwbde",
        children: [((Le as any).map as any)((P: any): any => ((t as any).jsx as any)(pe, {
          color: (P as any).ink,
          label: ((i as any)._ as any)((P as any).label),
          shape: "square"
        }, (P as any).product)), (b as any) !== (null as any) ? ((t as any).jsx as any)(pe, {
          color: (oe as any).previous,
          label: be,
          shape: "dashed-line"
        }) : null, (h as any) !== (null as any) ? ((t as any).jsx as any)(pe, {
          color: (oe as any).limit,
          label: me,
          muted: !0,
          shape: "line"
        }) : null]
      })]
    }) : ((t as any).jsx as any)("div", {
      className: "sand-9f619 sand-78zum5 sand-1ymw6g sand-6s0dn4 sand-l56j7k",
      children: ((t as any).jsx as any)(S, {
        as: "span",
        color: "tertiary",
        size: "sm",
        children: (l as any)({
          id: "ABjeYi"
        })
      })
    }), (e as any)[3] = l, (e as any)[4] = u, (e as any)[5] = d, (e as any)[6] = c, (e as any)[7] = g, (e as any)[8] = (n as any).subtitle, (e as any)[9] = (n as any).title, (e as any)[10] = m, (e as any)[11] = y, (e as any)[12] = a, (e as any)[13] = i, (e as any)[14] = o, (e as any)[15] = b, (e as any)[16] = h, (e as any)[17] = f, (e as any)[18] = p, (e as any)[19] = j, (e as any)[20] = k, (e as any)[21] = z;
  } else p = (e as any)[18], j = (e as any)[19], k = (e as any)[20], z = (e as any)[21];
  let w: any;
  ((e as any)[48] as any) !== ((n as any).footnotes as any) ? (w = (((n as any).footnotes as any).length as any) > (0 as any) ? ((t as any).jsx as any)("div", {
    className: "sand-78zum5 sand-dt5ytf sand-11twubx",
    children: (((n as any).footnotes as any).map as any)(_n)
  }) : null, (e as any)[48] = (n as any).footnotes, (e as any)[49] = w) : w = (e as any)[49];
  let N: any;
  return ((e as any)[50] as any) !== (p as any) || ((e as any)[51] as any) !== (j as any) || ((e as any)[52] as any) !== (k as any) || ((e as any)[53] as any) !== (z as any) || ((e as any)[54] as any) !== (w as any) ? (N = ((t as any).jsxs as any)("div", {
    ...p,
    "data-component": j,
    children: [k, z, w]
  }), (e as any)[50] = p, (e as any)[51] = j, (e as any)[52] = k, (e as any)[53] = z, (e as any)[54] = w, (e as any)[55] = N) : N = (e as any)[55], N;
}
function _n(this: any, s: any): any {
  return ((t as any).jsx as any)(S, {
    as: "span",
    color: "tertiary",
    size: "sm",
    children: s
  }, s);
}
function Ln(this: any, s: any): any {
  const {
    label: e
  }: any = s;
  return e;
}
function Cn(this: any, s: any): any {
  return {
    cents: s,
    label: (Ns as any)(s)
  };
}
function wn(this: any, s: any): any {
  return (s as any).totalCents;
}
function zn(this: any, s: any): any {
  return (s as any).totalCents;
}
function Nn(this: any, s: any): any {
  return ((s as any).totalCents as any) > (0 as any);
}
function Tn(this: any, s: any): any {
  return ((s as any).totalCents as any) > (0 as any);
}
const Dn: any = {
    none: {
      id: "EdQY6l"
    },
    fixed: {
      id: "TpqW74"
    },
    unlimited: {
      id: "NIuIk1"
    }
  },
  Mn: number = 100,
  Ie: any = {
    limitSelect: {
      kAzted: "sand-21xpn4",
      kaIpWk: "sand-1qmwy7c",
      kZCmMZ: "sand-e2zdcy",
      kwRFfy: "sand-f159sx",
      $$css: !0
    },
    footerNotice: {
      k71WvV: "sand-11t971q",
      $$css: !0
    },
    secondaryHairline: {
      kGVxlE: "sand-1ahgo13",
      $$css: !0
    }
  };
function Ae(this: any, s: any): any {
  return ((new ((Intl as any).NumberFormat as any)("en-US", {
    maximumFractionDigits: 0
  }) as any).format as any)(s);
}
function Ye(this: any): any {
  (Ye as any).d = 1298;
  const s: any = ((E as any).c as any)(12),
    {
      _: e
    }: any = (W as any)();
  let n: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-137clkk sand-euugli"
  }, (s as any)[0] = n) : n = (s as any)[0];
  let i: any;
  ((s as any)[1] as any) !== (e as any) ? (i = (e as any)({
    id: "jrbHD9"
  }), (s as any)[1] = e, (s as any)[2] = i) : i = (s as any)[2];
  let l: any;
  ((s as any)[3] as any) !== (i as any) ? (l = ((t as any).jsx as any)(S, {
    as: "span",
    color: "primary",
    size: "md",
    children: i
  }), (s as any)[3] = i, (s as any)[4] = l) : l = (s as any)[4];
  let a: any;
  ((s as any)[5] as any) !== (e as any) ? (a = (e as any)({
    id: "/9Papq"
  }), (s as any)[5] = e, (s as any)[6] = a) : a = (s as any)[6];
  let r: any;
  ((s as any)[7] as any) !== (a as any) ? (r = ((t as any).jsx as any)(S, {
    as: "span",
    color: "secondary",
    size: "sm",
    children: a
  }), (s as any)[7] = a, (s as any)[8] = r) : r = (s as any)[8];
  let d: any;
  return ((s as any)[9] as any) !== (l as any) || ((s as any)[10] as any) !== (r as any) ? (d = ((t as any).jsxs as any)("div", {
    ...n,
    children: [l, r]
  }), (s as any)[9] = l, (s as any)[10] = r, (s as any)[11] = d) : d = (s as any)[11], d;
}
function Ps(this: any, s: any): any {
  (Ps as any).d = 1297;
  const e: any = ((E as any).c as any)(13),
    {
      dashboardUrl: n
    }: any = s;
  (ze as any)("on-demand");
  const {
      _: i
    }: any = (W as any)(),
    l: any = (He as any)();
  let a: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = (Te as any)("on-demand"), (e as any)[0] = a) : a = (e as any)[0];
  let r: any, d: any, o: any, c: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-883omv sand-1t8xvyj sand-1n9uuka sand-usxwy5 sand-cssynl"
  }, d = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-ehausa"
  }, o = ((t as any).jsx as any)(Ye, {}), c = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-2lah0s sand-pkkfsy"
  }, (e as any)[1] = r, (e as any)[2] = d, (e as any)[3] = o, (e as any)[4] = c) : (r = (e as any)[1], d = (e as any)[2], o = (e as any)[3], c = (e as any)[4]);
  let f: any;
  ((e as any)[5] as any) !== (n as any) || ((e as any)[6] as any) !== (l as any) ? (f = (): any => {
    (l as any)(n);
  }, (e as any)[5] = n, (e as any)[6] = l, (e as any)[7] = f) : f = (e as any)[7];
  let u: any;
  ((e as any)[8] as any) !== (i as any) ? (u = (i as any)({
    id: "PaQ3df"
  }), (e as any)[8] = i, (e as any)[9] = u) : u = (e as any)[9];
  let g: any;
  return ((e as any)[10] as any) !== (f as any) || ((e as any)[11] as any) !== (u as any) ? (g = ((t as any).jsx as any)("div", {
    id: a,
    "data-sand-usage-row": "on-demand",
    ...r,
    children: ((t as any).jsxs as any)("div", {
      ...d,
      children: [o, ((t as any).jsx as any)("div", {
        ...c,
        children: ((t as any).jsx as any)(G, {
          onClick: f,
          sentiment: "accent",
          size: "sm",
          variant: "primary",
          children: u
        })
      })]
    })
  }), (e as any)[10] = f, (e as any)[11] = u, (e as any)[12] = g) : g = (e as any)[12], g;
}
function Un(this: any, s: any): any {
  const e: any = ((E as any).c as any)(8),
    n: any = (He as any)(),
    {
      invoke: i,
      isPending: l
    }: any = (mt as any)();
  let a: any;
  ((e as any)[0] as any) !== (i as any) || ((e as any)[1] as any) !== (l as any) || ((e as any)[2] as any) !== (s as any) || ((e as any)[3] as any) !== (n as any) ? (a = (o: any): any => {
    l || (((i as any)((pt as any)(o)) as any).then as any)((c: any): any => {
      if (((c as any).openUrl as any) !== (void 0 as any)) {
        (n as any)((c as any).openUrl), (s as any)({
          kind: "checkout-opened"
        });
        return;
      }
      (s as any)({
        kind: "settled",
        ok: (c as any).ok,
        message: (c as any).message
      });
    }, (c: any): any => {
      (xs as any)(c, {
        tags: {
          sand_area: "settings-usage"
        }
      }), (s as any)({
        kind: "settled",
        ok: !1,
        message: null
      });
    });
  }, (e as any)[0] = i, (e as any)[1] = l, (e as any)[2] = s, (e as any)[3] = n, (e as any)[4] = a) : a = (e as any)[4];
  const r: any = a;
  let d: any;
  return ((e as any)[5] as any) !== (r as any) || ((e as any)[6] as any) !== (l as any) ? (d = {
    addPaymentMethod: r,
    isOpening: l
  }, (e as any)[5] = r, (e as any)[6] = l, (e as any)[7] = d) : d = (e as any)[7], d;
}
function Pn(this: any, s: any): any {
  const e: any = ((E as any).c as any)(7),
    n: any = (ht as any)(),
    {
      refresh: i,
      isPending: l
    }: any = (ps as any)();
  let a: any;
  ((e as any)[0] as any) !== (l as any) || ((e as any)[1] as any) !== (i as any) ? (a = (): any => {
    l || (i as any)();
  }, (e as any)[0] = l, (e as any)[1] = i, (e as any)[2] = a) : a = (e as any)[2];
  const r: any = (Xs as any)(a);
  let d: any;
  ((e as any)[3] as any) !== (s as any) || ((e as any)[4] as any) !== (r as any) || ((e as any)[5] as any) !== (n as any) ? (d = (): any => s ? (n as any)(r) : In, (e as any)[3] = s, (e as any)[4] = r, (e as any)[5] = n, (e as any)[6] = d) : d = (e as any)[6], (Ne as any)(d);
}
function In(this: any): any {}
function Is(this: any, s: any): any {
  (Is as any).d = 1299;
  const e: any = ((E as any).c as any)(94),
    {
      spendLimit: n,
      meter: i
    }: any = s;
  (ze as any)("on-demand");
  const {
      i18n: l,
      _: a
    }: any = (W as any)(),
    {
      setSpendLimit: r,
      isPending: d
    }: any = (ut as any)(),
    [o, c]: any = ((fe as any).useState as any)((n as any).savedMode);
  let f: any;
  ((e as any)[0] as any) !== ((n as any).savedLimitDollars as any) ? (f = ((n as any).savedLimitDollars as any) != (null as any) ? (Ae as any)((n as any).savedLimitDollars) : "", (e as any)[0] = (n as any).savedLimitDollars, (e as any)[1] = f) : f = (e as any)[1];
  const [u, g]: any = ((fe as any).useState as any)(f),
    [m, b]: any = ((fe as any).useState as any)(null),
    {
      addPaymentMethod: h,
      isOpening: x
    }: any = (Un as any)(b);
  (Pn as any)((m?.kind as any) === ("checkout-opened" as any));
  const y: any = (m?.kind as any) === ("refused" as any) && ((m as any).refusal as any) === ("payment-method-required" as any),
    p: any = d || x;
  let j: any;
  ((e as any)[2] as any) !== (a as any) ? (j = (O: any): any => {
    if ((typeof O as any) != ("string" as any)) return (O as any).server;
    switch (O) {
      case "payment-method-required":
        return (a as any)({
          id: "GpCliH"
        });
      case "invalid-update":
        return (a as any)({
          id: "gw+r9w"
        });
      case "signed-out":
        return (a as any)({
          id: "j4rm4L"
        });
      case "failed":
        return (a as any)({
          id: "6VjcJ+"
        });
    }
  }, (e as any)[2] = a, (e as any)[3] = j) : j = (e as any)[3];
  const k: any = j;
  let z: any;
  ((e as any)[4] as any) !== (a as any) || ((e as any)[5] as any) !== (k as any) ? (z = (O: any): any => {
    switch ((O as any).kind) {
      case "refused":
        return {
          text: (k as any)((O as any).refusal),
          tone: ((O as any).refusal as any) === ("payment-method-required" as any) ? "status" : "alert"
        };
      case "checkout-opened":
        return {
          text: (a as any)({
            id: "qN2rKx"
          }),
          tone: "status"
        };
      case "settled":
        return (O as any).ok ? ((O as any).message as any) === (null as any) ? null : {
          text: (O as any).message,
          tone: "status"
        } : {
          text: (O as any).message ?? (a as any)({
            id: "Lr/LAl"
          }),
          tone: "alert"
        };
    }
  }, (e as any)[4] = a, (e as any)[5] = k, (e as any)[6] = z) : z = (e as any)[6];
  const w: any = z;
  let N: any;
  ((e as any)[7] as any) !== (m as any) || ((e as any)[8] as any) !== (w as any) ? (N = (m as any) === (null as any) ? null : (w as any)(m), (e as any)[7] = m, (e as any)[8] = w, (e as any)[9] = N) : N = (e as any)[9];
  const I: any = N;
  let L: any, C: any, T: any, B: any, _: any, U: any, $: any, A: any, D: any, v: any;
  if (((e as any)[10] as any) !== (a as any) || ((e as any)[11] as any) !== (u as any) || ((e as any)[12] as any) !== (o as any) || ((e as any)[13] as any) !== (l as any) || ((e as any)[14] as any) !== (p as any) || ((e as any)[15] as any) !== (d as any) || ((e as any)[16] as any) !== (i as any) || ((e as any)[17] as any) !== (r as any) || ((e as any)[18] as any) !== (n as any)) {
    const O: any = (a as any)({
      id: "jrbHD9"
    });
    let ne: any;
    ((e as any)[29] as any) !== (u as any) || ((e as any)[30] as any) !== (o as any) || ((e as any)[31] as any) !== (n as any) ? (ne = (mn as any)(n, o, u), (e as any)[29] = u, (e as any)[30] = o, (e as any)[31] = n, (e as any)[32] = ne) : ne = (e as any)[32], B = ne;
    let se: any;
    ((e as any)[33] as any) !== (u as any) || ((e as any)[34] as any) !== (o as any) ? (se = (fn as any)(o, u), (e as any)[33] = u, (e as any)[34] = o, (e as any)[35] = se) : se = (e as any)[35], L = se, _ = (L as any) !== (null as any) && ((L as any).mode as any) !== ("none" as any) ? L : null;
    let ge: any;
    ((e as any)[36] as any) !== (l as any) ? (ge = ((ft as any).map as any)((K: any): any => ({
      value: K,
      label: ((l as any)._ as any)((Dn as any)[K])
    })), (e as any)[36] = l, (e as any)[37] = ge) : ge = (e as any)[37];
    const de: any = ge,
      ae: any = (i as any) != (null as any) && ((n as any).savedMode as any) !== ("none" as any) && (((i as any).barPercent as any) != (null as any) || ((i as any).hasSpend as any) === (!0 as any)) ? i : null;
    let le: any;
    ((e as any)[38] as any) !== (u as any) || ((e as any)[39] as any) !== ((n as any).savedLimitDollars as any) ? (le = (K: any): any => {
      (b as any)(null), (c as any)(K), (K as any) === ("fixed" as any) && (u as any) === ("" as any) && (g as any)((Ae as any)((n as any).savedLimitDollars ?? Mn));
    }, (e as any)[38] = u, (e as any)[39] = (n as any).savedLimitDollars, (e as any)[40] = le) : le = (e as any)[40];
    const be: any = le;
    let ie: any;
    ((e as any)[41] as any) !== ((n as any).savedLimitDollars as any) || ((e as any)[42] as any) !== ((n as any).savedMode as any) ? (ie = (): any => {
      (b as any)(null), (c as any)((n as any).savedMode), (g as any)(((n as any).savedLimitDollars as any) != (null as any) ? (Ae as any)((n as any).savedLimitDollars) : "");
    }, (e as any)[41] = (n as any).savedLimitDollars, (e as any)[42] = (n as any).savedMode, (e as any)[43] = ie) : ie = (e as any)[43], C = ie;
    let me: any;
    ((e as any)[44] as any) !== (L as any) || ((e as any)[45] as any) !== (d as any) || ((e as any)[46] as any) !== (r as any) ? (me = (): any => {
      (L as any) === (null as any) || d || ((b as any)(null), (((r as any)(L) as any).then as any)((K: any): any => {
        (K as any).ok || (b as any)({
          kind: "refused",
          refusal: (K as any).refusal
        });
      }, (K: any): any => {
        (xs as any)(K, {
          tags: {
            sand_area: "settings-usage"
          }
        }), (b as any)({
          kind: "refused",
          refusal: "failed"
        });
      }));
    }, (e as any)[44] = L, (e as any)[45] = d, (e as any)[46] = r, (e as any)[47] = me) : me = (e as any)[47], T = me, ((e as any)[48] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (U = (Te as any)("on-demand"), (e as any)[48] = U) : U = (e as any)[48], $ = "on-demand";
    let re: any, J: any;
    ((e as any)[49] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (A = {
      className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-883omv sand-1t8xvyj sand-1n9uuka sand-usxwy5 sand-cssynl"
    }, re = {
      className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-ehausa"
    }, J = ((t as any).jsx as any)(Ye, {}), (e as any)[49] = re, (e as any)[50] = J, (e as any)[51] = A) : (re = (e as any)[49], J = (e as any)[50], A = (e as any)[51]);
    let ee: any;
    ((e as any)[52] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ee = {
      className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-2lah0s sand-pkkfsy"
    }, (e as any)[52] = ee) : ee = (e as any)[52];
    let P: any;
    ((e as any)[53] as any) !== (a as any) || ((e as any)[54] as any) !== (u as any) || ((e as any)[55] as any) !== (o as any) || ((e as any)[56] as any) !== (p as any) ? (P = (o as any) === ("fixed" as any) ? ((t as any).jsxs as any)("label", {
      className: "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-12mrbbr sand-1fu8urw sand-10w6t97 sand-196pc8s sand-22095l sand-1qmwy7c sand-mkeg23 sand-1y0btm7 sand-fnq37j sand-vvtkfd",
      children: [((t as any).jsx as any)(S, {
        as: "span",
        color: "primary",
        size: "md",
        children: "$"
      }), ((t as any).jsx as any)("input", {
        className: "sand-9f619 sand-1iyjqo2 sand-euugli sand-h8yej3 sand-1717udv sand-c342km sand-1a2a7pz sand-jbqb8w sand-1wd3ewq sand-11wthnw sand-d4r4e8 sand-jb2p0i",
        "aria-label": (a as any)({
          id: "8ZB9hg"
        }),
        disabled: p,
        inputMode: "numeric",
        onChange: (K: any): any => {
          (b as any)(null), (g as any)(((K as any).currentTarget as any).value);
        },
        spellCheck: !1,
        type: "text",
        value: u
      })]
    }) : null, (e as any)[53] = a, (e as any)[54] = u, (e as any)[55] = o, (e as any)[56] = p, (e as any)[57] = P) : P = (e as any)[57];
    let R: any;
    ((e as any)[58] as any) !== (a as any) ? (R = (a as any)({
      id: "jrbHD9"
    }), (e as any)[58] = a, (e as any)[59] = R) : R = (e as any)[59];
    let Z: any;
    ((e as any)[60] as any) !== (be as any) ? (Z = (K: any): any => {
      (K as any) !== (null as any) && (be as any)(K);
    }, (e as any)[60] = be, (e as any)[61] = Z) : Z = (e as any)[61];
    let V: any;
    ((e as any)[62] as any) !== (o as any) || ((e as any)[63] as any) !== (p as any) || ((e as any)[64] as any) !== (de as any) || ((e as any)[65] as any) !== (R as any) || ((e as any)[66] as any) !== (Z as any) ? (V = ((t as any).jsx as any)(Hs, {
      "aria-label": R,
      disabled: p,
      onValueChange: Z,
      options: de,
      placement: "bottom-end",
      rootStyle: (Ie as any).limitSelect,
      size: "lg",
      value: o,
      variant: "ghost"
    }), (e as any)[62] = o, (e as any)[63] = p, (e as any)[64] = de, (e as any)[65] = R, (e as any)[66] = Z, (e as any)[67] = V) : V = (e as any)[67], ((e as any)[68] as any) !== (P as any) || ((e as any)[69] as any) !== (V as any) ? (D = ((t as any).jsxs as any)("div", {
      ...re,
      children: [J, ((t as any).jsxs as any)("div", {
        "data-sand-usage-row-controls": !0,
        ...ee,
        children: [P, V]
      })]
    }), (e as any)[68] = P, (e as any)[69] = V, (e as any)[70] = D) : D = (e as any)[70], v = (ae as any) != (null as any) ? ((t as any).jsxs as any)("div", {
      className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-pkkfsy",
      children: [((ae as any).barPercent as any) != (null as any) ? ((t as any).jsx as any)("div", {
        "aria-label": (a as any)({
          id: "5OJby0",
          values: {
            0: (ae as any).valueLabel,
            title: O
          }
        }),
        "aria-valuemax": 100,
        "aria-valuemin": 0,
        "aria-valuenow": (ae as any).barPercent,
        role: "meter",
        className: "sand-9f619 sand-qu0tyb sand-b3r6kr sand-149ho13 sand-25lytf",
        children: ((t as any).jsx as any)("div", {
          className: "sand-9f619 sand-5yr21d sand-149ho13 sand-db05xe",
          style: {
            width: `${(ae as any).barPercent}%`
          }
        })
      }) : null, ((t as any).jsxs as any)("div", {
        className: "sand-9f619 sand-78zum5 sand-1pha0wt sand-1qughib sand-883omv",
        children: [((t as any).jsx as any)(S, {
          as: "span",
          color: "secondary",
          size: "xs",
          children: (ae as any).resetLabel ?? ""
        }), ((t as any).jsx as any)(S, {
          as: "span",
          color: "secondary",
          size: "xs",
          children: (ae as any).valueLabel
        })]
      })]
    }) : null, (e as any)[10] = a, (e as any)[11] = u, (e as any)[12] = o, (e as any)[13] = l, (e as any)[14] = p, (e as any)[15] = d, (e as any)[16] = i, (e as any)[17] = r, (e as any)[18] = n, (e as any)[19] = L, (e as any)[20] = C, (e as any)[21] = T, (e as any)[22] = B, (e as any)[23] = _, (e as any)[24] = U, (e as any)[25] = $, (e as any)[26] = A, (e as any)[27] = D, (e as any)[28] = v;
  } else L = (e as any)[19], C = (e as any)[20], T = (e as any)[21], B = (e as any)[22], _ = (e as any)[23], U = (e as any)[24], $ = (e as any)[25], A = (e as any)[26], D = (e as any)[27], v = (e as any)[28];
  let M: any;
  ((e as any)[71] as any) !== (U as any) || ((e as any)[72] as any) !== ($ as any) || ((e as any)[73] as any) !== (A as any) || ((e as any)[74] as any) !== (D as any) || ((e as any)[75] as any) !== (v as any) ? (M = ((t as any).jsxs as any)("div", {
    id: U,
    "data-sand-usage-row": $,
    ...A,
    children: [D, v]
  }), (e as any)[71] = U, (e as any)[72] = $, (e as any)[73] = A, (e as any)[74] = D, (e as any)[75] = v, (e as any)[76] = M) : M = (e as any)[76];
  let q: any;
  ((e as any)[77] as any) !== (a as any) || ((e as any)[78] as any) !== (h as any) || ((e as any)[79] as any) !== (L as any) || ((e as any)[80] as any) !== (C as any) || ((e as any)[81] as any) !== (T as any) || ((e as any)[82] as any) !== (p as any) || ((e as any)[83] as any) !== (B as any) || ((e as any)[84] as any) !== (x as any) || ((e as any)[85] as any) !== (d as any) || ((e as any)[86] as any) !== (m as any) || ((e as any)[87] as any) !== (y as any) || ((e as any)[88] as any) !== (_ as any) || ((e as any)[89] as any) !== (I as any) ? (q = B || (m as any) !== (null as any) ? ((t as any).jsxs as any)("div", {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-ehausa sand-1t8xvyj sand-t1q3vd sand-usxwy5 sand-7ru5ko",
    children: [(I as any) !== (null as any) ? ((t as any).jsx as any)(S, {
      as: "span",
      color: ((I as any).tone as any) === ("status" as any) ? "secondary" : "red",
      role: (I as any).tone,
      rootStyle: (Ie as any).footerNotice,
      size: "sm",
      children: (I as any).text
    }) : null, ((t as any).jsx as any)(G, {
      disabled: p,
      onClick: C,
      size: "sm",
      style: (Ie as any).secondaryHairline,
      variant: "secondary",
      children: (a as any)({
        id: "dEgA5A"
      })
    }), y ? ((t as any).jsx as any)(G, {
      disabled: x || (_ as any) === (null as any),
      onClick: (): any => {
        (_ as any) !== (null as any) && (h as any)(_);
      },
      size: "sm",
      trailingIcon: "arrow-right-up",
      variant: "primary",
      children: (a as any)(x ? {
        id: "598XO1"
      } : {
        id: "lRpmgk"
      })
    }) : ((t as any).jsx as any)(G, {
      disabled: d || (L as any) === (null as any) || !B,
      onClick: T,
      size: "sm",
      variant: "primary",
      children: (a as any)(d ? {
        id: "K/F6pa"
      } : {
        id: "tfDRzk"
      })
    })]
  }) : null, (e as any)[77] = a, (e as any)[78] = h, (e as any)[79] = L, (e as any)[80] = C, (e as any)[81] = T, (e as any)[82] = p, (e as any)[83] = B, (e as any)[84] = x, (e as any)[85] = d, (e as any)[86] = m, (e as any)[87] = y, (e as any)[88] = _, (e as any)[89] = I, (e as any)[90] = q) : q = (e as any)[90];
  let F: any;
  return ((e as any)[91] as any) !== (M as any) || ((e as any)[92] as any) !== (q as any) ? (F = ((t as any).jsxs as any)((t as any).Fragment, {
    children: [M, q]
  }), (e as any)[91] = M, (e as any)[92] = q, (e as any)[93] = F) : F = (e as any)[93], F;
}
const An: number = 560,
  ye: number = 200,
  te: any = {
    top: 12,
    right: 12,
    bottom: 28
  },
  En: number = 48,
  cs: number = 8,
  Rn: number = .32,
  $n: number = 64,
  Bn: number = 64,
  Fn: any = {
    swatchLabel: {
      k1xSpc: "sand-78zum5",
      kGNEyG: "sand-6s0dn4",
      kOIVth: "sand-ehausa",
      k7Eaqz: "sand-euugli",
      $$css: !0
    }
  };
function Be(this: any, s: any): any {
  (Be as any).d = 1322;
  const e: any = ((E as any).c as any)(9),
    {
      series: n
    }: any = s;
  let i: any, l: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = (Ge as any)((Fn as any).swatchLabel), l = {
    className: "sand-2lah0s sand-170jfvy sand-1fsd2vl sand-1bl94mz"
  }, (e as any)[0] = i, (e as any)[1] = l) : (i = (e as any)[0], l = (e as any)[1]);
  let a: any;
  ((e as any)[2] as any) !== ((n as any).ink as any) ? (a = ((t as any).jsx as any)("span", {
    ...l,
    style: {
      backgroundColor: (n as any).ink
    }
  }), (e as any)[2] = (n as any).ink, (e as any)[3] = a) : a = (e as any)[3];
  let r: any;
  ((e as any)[4] as any) !== ((n as any).label as any) ? (r = ((t as any).jsx as any)(S, {
    as: "span",
    color: "secondary",
    size: "xs",
    truncate: !0,
    children: (n as any).label
  }), (e as any)[4] = (n as any).label, (e as any)[5] = r) : r = (e as any)[5];
  let d: any;
  return ((e as any)[6] as any) !== (a as any) || ((e as any)[7] as any) !== (r as any) ? (d = ((t as any).jsxs as any)("span", {
    ...i,
    children: [a, r]
  }), (e as any)[6] = a, (e as any)[7] = r, (e as any)[8] = d) : d = (e as any)[8], d;
}
function Fe(this: any, s: any): any {
  (Fe as any).d = 1321;
  const e: any = ((E as any).c as any)(15),
    {
      label: n,
      chart: i
    }: any = s,
    {
      _: l
    }: any = (W as any)(),
    [a, r]: any = ((fe as any).useState as any)(null),
    {
      attach: d,
      width: o
    }: any = ($e as any)(),
    {
      attach: c,
      width: f
    }: any = (Ms as any)(),
    {
      days: u,
      series: g
    }: any = i;
  let m: any;
  if (((e as any)[0] as any) !== (l as any) || ((e as any)[1] as any) !== (d as any) || ((e as any)[2] as any) !== (c as any) || ((e as any)[3] as any) !== (f as any) || ((e as any)[4] as any) !== ((i as any).totalCents as any) || ((e as any)[5] as any) !== (u as any) || ((e as any)[6] as any) !== (a as any) || ((e as any)[7] as any) !== (n as any) || ((e as any)[8] as any) !== (o as any) || ((e as any)[9] as any) !== (g as any)) {
    const b: any = [];
    let h: any = ((u as any).map as any)(Wn);
    for (const v of g) h = ((h as any).map as any)((M: any, q: any): any => (M as any) + ((((v as any).cents as any)[q] ?? 0) as any)), ((b as any).push as any)(h);
    const x: any = h,
      y: any = (Ls as any)(x),
      p: any = (((y as any).ticks as any).map as any)(qn),
      j: any = (o as any) > (0 as any) ? o : An,
      k: any = ((Math as any).max as any)(En, (f as any) + (cs as any)),
      z: any = ((Math as any).max as any)(((j as any) - (k as any) as any) - ((te as any).right as any), 1),
      w: any = ((ye as any) - ((te as any).top as any) as any) - ((te as any).bottom as any),
      N: any = (z as any) / (((Math as any).max as any)((u as any).length, 1) as any),
      I: any = ((Math as any).max as any)(1, ((Math as any).ceil as any)(($n as any) / (N as any)));
    let L: any;
    ((e as any)[11] as any) !== (N as any) || ((e as any)[12] as any) !== (k as any) ? (L = (v: any): any => (k as any) + ((N as any) * ((v as any) + (.5 as any) as any) as any), (e as any)[11] = N, (e as any)[12] = k, (e as any)[13] = L) : L = (e as any)[13];
    const C: any = L,
      T: any = (v: any): any => ((te as any).top as any) + (((1 as any) - ((v as any) / ((y as any).maxCents as any) as any) as any) * (w as any) as any),
      B: any = (v: any, M: any): any => (b as any)[v]?.[M] ?? 0,
      _: any = (v: any): any => ((((u as any).map as any)((M: any, q: any): any => `${(q as any) === (0 as any) ? "M" : "L"} ${(C as any)(q)} ${(T as any)((B as any)(v, q))}`) as any).join as any)(" "),
      U: any = (v: any): any => {
        const M: any = ((((u as any).map as any)((q: any, F: any): any => `L ${(C as any)(F)} ${(T as any)((B as any)((v as any) - (1 as any), F))}`) as any).reverse as any)();
        return (([(_ as any)(v), ...M, "Z"] as any).join as any)(" ");
      },
      $: any = (a as any) === (null as any) ? void 0 : (u as any)[a],
      A: any = (a as any) === (null as any) ? 0 : (((C as any)(a) as any) / (j as any) as any) * (100 as any);
    let D: any;
    ((e as any)[14] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (D = {
      className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1oot3zn sand-y3j6vt sand-2f45yy"
    }, (e as any)[14] = D) : D = (e as any)[14], m = ((t as any).jsx as any)("div", {
      ...D,
      "data-component": "usage-breakdown-chart",
      children: ((i as any).totalCents as any) <= (0 as any) ? ((t as any).jsx as any)("div", {
        className: "sand-78zum5 sand-1wkxgih sand-6s0dn4 sand-l56j7k",
        children: ((t as any).jsx as any)(S, {
          as: "span",
          color: "tertiary",
          size: "sm",
          children: (l as any)({
            id: "HT8qbw"
          })
        })
      }) : ((t as any).jsxs as any)((t as any).Fragment, {
        children: [((t as any).jsxs as any)("div", {
          className: "sand-1n2onr6 sand-h8yej3",
          onMouseLeave: (): any => (r as any)(null),
          ref: d,
          children: [((t as any).jsxs as any)("svg", {
            className: "sand-1lliihq sand-1m3v4wt sand-h8yej3",
            "aria-label": n,
            height: ye,
            role: "img",
            viewBox: `0 0 ${j} ${ye}`,
            width: j,
            children: [((p as any).map as any)((v: any): any => {
              const {
                cents: M
              }: any = v;
              return ((t as any).jsx as any)("line", {
                opacity: .45,
                stroke: (Q as any)["--cursor-stroke-tertiary"],
                strokeWidth: 1,
                x1: k,
                x2: (j as any) - ((te as any).right as any),
                y1: (T as any)(M),
                y2: (T as any)(M)
              }, M);
            }), ((t as any).jsx as any)("g", {
              ref: c,
              children: ((p as any).map as any)((v: any): any => {
                const {
                  cents: M,
                  label: q
                }: any = v;
                return ((t as any).jsx as any)("text", {
                  fill: (Q as any)["--cursor-text-secondary"],
                  fontSize: 11,
                  textAnchor: "end",
                  x: (k as any) - (cs as any),
                  y: ((T as any)(M) as any) + (4 as any),
                  children: q
                }, M);
              })
            }, ((((p as any).map as any)(On) as any).join as any)(`
`)), (a as any) !== (null as any) ? ((t as any).jsx as any)("rect", {
              fill: (Q as any)["--cursor-text-primary"],
              height: w,
              opacity: .05,
              width: N,
              x: (k as any) + ((N as any) * (a as any) as any),
              y: (te as any).top
            }) : null, ((g as any).map as any)((v: any, M: any): any => ((t as any).jsxs as any)("g", {
              children: [((t as any).jsx as any)("path", {
                d: (U as any)(M),
                fill: (v as any).ink,
                fillOpacity: Rn
              }), ((t as any).jsx as any)("path", {
                d: (_ as any)(M),
                fill: "none",
                stroke: (v as any).ink,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2
              })]
            }, (v as any).key)), (a as any) !== (null as any) ? ((g as any).map as any)((v: any, M: any): any => ((t as any).jsx as any)("circle", {
              cx: (C as any)(a),
              cy: (T as any)((B as any)(M, a)),
              fill: (v as any).ink,
              r: 3.5,
              stroke: (xt as any)["--sand-bg-elevated"],
              strokeWidth: 1.5
            }, (v as any).key)) : null, ((t as any).jsx as any)("line", {
              stroke: (Q as any)["--cursor-stroke-tertiary"],
              strokeWidth: 1,
              x1: k,
              x2: (j as any) - ((te as any).right as any),
              y1: (ye as any) - ((te as any).bottom as any),
              y2: (ye as any) - ((te as any).bottom as any)
            }), ((u as any).map as any)((v: any, M: any): any => ((t as any).jsxs as any)("g", {
              children: [((t as any).jsx as any)("rect", {
                fill: "transparent",
                height: w,
                onMouseEnter: (): any => (r as any)(M),
                width: N,
                x: (k as any) + ((N as any) * (M as any) as any),
                y: (te as any).top
              }), ((M as any) % (I as any) as any) === (0 as any) ? ((t as any).jsx as any)("text", {
                fill: (Q as any)["--cursor-text-secondary"],
                fontSize: 11,
                textAnchor: "middle",
                x: (C as any)(M),
                y: (ye as any) - (10 as any),
                children: (v as any).label
              }) : null]
            }, (v as any).key))]
          }), (a as any) !== (null as any) && ($ as any) !== (void 0 as any) ? ((t as any).jsxs as any)("div", {
            className: "sand-47corl sand-10l6tqk sand-1epp9v1 sand-1vjfegm sand-78zum5 sand-dt5ytf sand-11twubx sand-hs4bwn sand-ezivpi sand-12ffz05 sand-1m31zm8 sand-1043rbw sand-mkeg23 sand-1y0btm7 sand-q03nf1 sand-10e981r sand-1z0g938",
            style: {
              left: `${A}%`,
              transform: (A as any) > (Bn as any) ? "translateX(calc(-100% - 12px))" : "translateX(12px)"
            },
            children: [((t as any).jsx as any)(S, {
              as: "span",
              color: "primary",
              size: "sm",
              children: ($ as any).label
            }), (((([...g] as any).reverse as any)() as any).map as any)((v: any): any => ((t as any).jsxs as any)("div", {
              className: "sand-78zum5 sand-6s0dn4 sand-1qughib sand-1jlwbde sand-uxw1ft",
              children: [((t as any).jsx as any)(Be, {
                series: v
              }), ((t as any).jsx as any)(S, {
                as: "span",
                color: "primary",
                size: "xs",
                children: (X as any)(((v as any).cents as any)[a] ?? 0)
              })]
            }, (v as any).key)), ((t as any).jsxs as any)("div", {
              className: "sand-78zum5 sand-6s0dn4 sand-1qughib sand-1jlwbde sand-uxw1ft",
              children: [((t as any).jsx as any)(S, {
                as: "span",
                color: "primary",
                size: "xs",
                children: (l as any)({
                  id: "72c5Qo"
                })
              }), ((t as any).jsx as any)(S, {
                as: "span",
                color: "primary",
                size: "xs",
                children: (X as any)((x as any)[a] ?? 0)
              })]
            })]
          }) : null]
        }), ((t as any).jsx as any)("div", {
          className: "sand-78zum5 sand-1a02dak sand-1pzdu40 sand-fbz45d",
          children: ((g as any).map as any)((v: any): any => ((t as any).jsxs as any)("div", {
            className: "sand-78zum5 sand-6s0dn4 sand-ehausa sand-euugli",
            children: [((t as any).jsx as any)(Be, {
              series: v
            }), ((t as any).jsx as any)(S, {
              as: "span",
              color: "tertiary",
              size: "xs",
              children: (l as any)({
                id: "2UOALe",
                values: {
                  0: (X as any)((v as any).totalCents),
                  1: (gt as any)(((v as any).totalCents as any) / ((i as any).totalCents as any))
                }
              })
            })]
          }, (v as any).key))
        })]
      })
    }), (e as any)[0] = l, (e as any)[1] = d, (e as any)[2] = c, (e as any)[3] = f, (e as any)[4] = (i as any).totalCents, (e as any)[5] = u, (e as any)[6] = a, (e as any)[7] = n, (e as any)[8] = o, (e as any)[9] = g, (e as any)[10] = m;
  } else m = (e as any)[10];
  return m;
}
function On(this: any, s: any): any {
  const {
    label: e
  }: any = s;
  return e;
}
function qn(this: any, s: any): any {
  return {
    cents: s,
    label: (Ns as any)(s)
  };
}
function Wn(this: any): any {
  return 0;
}
const xe: any = ["#4C72B0", "#DD8452", "#55A868", "#C44E52", "#8172B3", "#937860", "#DA8BC3", "#CCB974"],
  us: any = (xe as any).length,
  fs: string = "#9AA0A6",
  Gn: string = "#5BA37A",
  ms: any = {
    user: {
      ink: (xe as any)[0],
      label: {
        id: "kWJmRL"
      }
    },
    automation: {
      ink: (xe as any)[1],
      label: {
        id: "dmYV6f"
      }
    },
    agent: {
      ink: (xe as any)[2],
      label: {
        id: "6xFP/2"
      }
    },
    group: {
      ink: (xe as any)[4],
      label: {
        id: "GoNgIy"
      }
    }
  };
function Ze(this: any, s: any): any {
  let e: any = 0;
  for (const n of s) e += n;
  return e;
}
function _e(this: any, s: any, e: any, n: any, i: any): any {
  return {
    key: s,
    label: e,
    ink: n,
    cents: i,
    totalCents: (Ze as any)(i)
  };
}
function Ee(this: any, s: any, e: any): any {
  const n: any = ((e as any).filter as any)((i: any): any => ((i as any).totalCents as any) > (0 as any));
  return {
    days: s,
    series: n,
    totalCents: (Ze as any)(((n as any).map as any)((i: any): any => (i as any).totalCents))
  };
}
function Hn(this: any, s: any, e: any): any {
  const n: any = [],
    i: any = ((Date as any).parse as any)(`${(ve as any)((e as any).periodStartMs)}T00:00:00Z`);
  for (let p: any = i; (p as any) < ((e as any).periodEndMs as any); p += Ss) ((n as any).push as any)({
    key: (ve as any)(p),
    label: (((_s as any)() as any).format as any)(p)
  });
  const l: any = new (Map as any)(((n as any).map as any)((p: any, j: any): any => [(p as any).key, j])),
    a: any = (): any => ((n as any).map as any)((): any => 0),
    r: any = {
      user: (a as any)(),
      automation: (a as any)(),
      agent: (a as any)(),
      group: (a as any)()
    },
    d: any = (a as any)(),
    o: any = (a as any)(),
    c: any = new (Map as any)();
  for (const p of (e as any).days) {
    const j: any = ((l as any).get as any)((ve as any)((p as any).dayMs));
    if ((j as any) !== (void 0 as any)) {
      (o as any)[j] = (((o as any)[j] ?? 0) as any) + ((p as any).cursorCents as any);
      for (const k of Qe) {
        const z: any = ((p as any).centsByFlow as any)[k] ?? 0;
        ((r as any)[k] as any)[j] = ((((r as any)[k] as any)[j] ?? 0) as any) + (z as any), (d as any)[j] = (((d as any)[j] ?? 0) as any) + (z as any);
      }
      for (const [k, z] of ((Object as any).entries as any)((p as any).centsByBotId)) {
        let w: any = ((c as any).get as any)(k);
        (w as any) === (void 0 as any) && (w = (a as any)(), ((c as any).set as any)(k, w)), (w as any)[j] = (((w as any)[j] ?? 0) as any) + (z as any);
      }
    }
  }
  const f: any = (Ee as any)(n, [(_e as any)("grok-bot", (s as any)({
      id: "vwB47p"
    }), (xe as any)[0], d), (_e as any)("cursor", (s as any)({
      id: "D7/LAN"
    }), Gn, o)]),
    u: any = (Ee as any)(n, ((Qe as any).map as any)((p: any): any => (_e as any)(p, (s as any)(((ms as any)[p] as any).label), ((ms as any)[p] as any).ink, (r as any)[p]))),
    g: any = new (Map as any)((((e as any).bots as any).map as any)((p: any): any => [(p as any).id, (p as any).name])),
    m: any = ((c as any).get as any)(Je) ?? (a as any)();
  ((c as any).delete as any)(Je);
  const b: any = (((([...((c as any).entries as any)()] as any).map as any)(([p, j]: any): any => ({
    botId: p,
    cents: j,
    total: (Ze as any)(j)
  })) as any).sort as any)((p: any, j: any): any => ((j as any).total as any) - ((p as any).total as any));
  for (const {
    cents: p
  } of ((b as any).slice as any)(us)) ((p as any).forEach as any)((j: any, k: any): any => {
    (m as any)[k] = (((m as any)[k] ?? 0) as any) + (j as any);
  });
  const h: any = (Ee as any)(n, [...((((b as any).slice as any)(0, us) as any).map as any)(({
      botId: p,
      cents: j
    }: any, k: any): any => (_e as any)(`bot:${p}`, ((g as any).get as any)(p) ?? (s as any)({
      id: "QhN1/E"
    }), (xe as any)[k] ?? fs, j)), (_e as any)("other-bots", (s as any)({
      id: "BlY2tE"
    }), fs, m)]),
    x: any = (n as any)[0]?.label ?? "",
    y: any = ((n as any).at as any)(-1)?.label ?? "";
  return {
    periodLabel: (s as any)({
      id: "bz099p",
      values: {
        firstDay: x,
        lastDay: y
      }
    }),
    byApp: f,
    byFlow: u,
    byBot: h
  };
}
function Oe(this: any, s: any): any {
  (Oe as any).d = 1323;
  const e: any = ((E as any).c as any)(14),
    {
      chart: n,
      periodLabel: i,
      accessory: l
    }: any = s;
  let a: any, r: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-1oot3zn sand-y3j6vt sand-2f45yy"
  }, r = {
    className: "sand-78zum5 sand-dt5ytf sand-137clkk"
  }, (e as any)[0] = a, (e as any)[1] = r) : (a = (e as any)[0], r = (e as any)[1]);
  let d: any;
  ((e as any)[2] as any) !== ((n as any).totalCents as any) ? (d = (X as any)((n as any).totalCents), (e as any)[2] = (n as any).totalCents, (e as any)[3] = d) : d = (e as any)[3];
  let o: any;
  ((e as any)[4] as any) !== (d as any) ? (o = ((t as any).jsx as any)(S, {
    as: "span",
    color: "primary",
    size: "md",
    children: d
  }), (e as any)[4] = d, (e as any)[5] = o) : o = (e as any)[5];
  let c: any;
  ((e as any)[6] as any) !== (i as any) ? (c = ((t as any).jsx as any)(S, {
    as: "span",
    color: "secondary",
    size: "sm",
    children: i
  }), (e as any)[6] = i, (e as any)[7] = c) : c = (e as any)[7];
  let f: any;
  ((e as any)[8] as any) !== (o as any) || ((e as any)[9] as any) !== (c as any) ? (f = ((t as any).jsxs as any)("div", {
    ...r,
    children: [o, c]
  }), (e as any)[8] = o, (e as any)[9] = c, (e as any)[10] = f) : f = (e as any)[10];
  let u: any;
  return ((e as any)[11] as any) !== (l as any) || ((e as any)[12] as any) !== (f as any) ? (u = ((t as any).jsxs as any)("div", {
    ...a,
    children: [f, l]
  }), (e as any)[11] = l, (e as any)[12] = f, (e as any)[13] = u) : u = (e as any)[13], u;
}
function As(this: any, s: any): any {
  (As as any).d = 1324;
  const e: any = ((E as any).c as any)(13),
    {
      includeCredits: n
    }: any = s,
    i: any = (((Ve as any)() as any).usageBreakdown as any).load;
  let l: any;
  ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (i as any) ? (l = (): any => ((i as any)({
    includeCredits: n
  }), Kn), (e as any)[0] = n, (e as any)[1] = i, (e as any)[2] = l) : l = (e as any)[2], (Ne as any)(l);
  const a: any = (bt as any)(),
    r: any = (yt as any)(),
    {
      refresh: d,
      isPending: o
    }: any = (jt as any)();
  let c: any = null;
  if (((a as any).status as any) === ("ready" as any) ? c = (a as any).value : (((a as any).status as any) === ("loading" as any) || ((a as any).status as any) === ("failed" as any)) && (c = (a as any).previous ?? null), (c as any) == (null as any)) {
    if (((a as any).status as any) === ("empty" as any) || ((a as any).status as any) === ("unavailable" as any)) return null;
    let m: any;
    ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = {
      className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-1oot3zn sand-y3j6vt sand-2f45yy"
    }, (e as any)[3] = m) : m = (e as any)[3];
    let b: any;
    return ((e as any)[4] as any) !== (o as any) || ((e as any)[5] as any) !== (d as any) || ((e as any)[6] as any) !== ((a as any).status as any) ? (b = ((t as any).jsx as any)(ue, {
      title: null,
      children: ((t as any).jsx as any)("div", {
        ...m,
        children: ((a as any).status as any) === ("failed" as any) ? ((t as any).jsxs as any)((t as any).Fragment, {
          children: [((t as any).jsx as any)(S, {
            as: "span",
            color: "red",
            size: "sm",
            children: ((t as any).jsx as any)(H, {
              id: "QtkApk"
            })
          }), ((t as any).jsx as any)(G, {
            disabled: o,
            onClick: d,
            size: "sm",
            variant: "secondary",
            children: ((t as any).jsx as any)(H, {
              id: "6gRgw8"
            })
          })]
        }) : ((t as any).jsx as any)(S, {
          as: "span",
          color: "tertiary",
          size: "sm",
          children: ((t as any).jsx as any)(H, {
            id: "zfTucZ"
          })
        })
      })
    }), (e as any)[4] = o, (e as any)[5] = d, (e as any)[6] = (a as any).status, (e as any)[7] = b) : b = (e as any)[7], b;
  }
  const f: any = c;
  let u: any;
  ((e as any)[8] as any) !== (r as any) ? (u = ((r as any).map as any)(Vn), (e as any)[8] = r, (e as any)[9] = u) : u = (e as any)[9];
  let g: any;
  if (((e as any)[10] as any) !== (c as any) || ((e as any)[11] as any) !== (u as any)) {
    const m: any = {
      ...f,
      bots: u
    };
    g = ((t as any).jsx as any)(Es, {
      breakdown: m
    }), (e as any)[10] = c, (e as any)[11] = u, (e as any)[12] = g;
  } else g = (e as any)[12];
  return g;
}
function Vn(this: any, s: any): any {
  return {
    id: (s as any).id,
    name: (vt as any)(s)
  };
}
function Kn(this: any): any {}
function Es(this: any, s: any): any {
  (Es as any).d = 1325;
  const e: any = ((E as any).c as any)(44),
    {
      breakdown: n
    }: any = s,
    {
      _: i
    }: any = (W as any)(),
    {
      _: l
    }: any = (W as any)(),
    [a, r]: any = ((fe as any).useState as any)("source");
  let d: any;
  ((e as any)[0] as any) !== (i as any) || ((e as any)[1] as any) !== (n as any) ? (d = (Hn as any)(i, n), (e as any)[0] = i, (e as any)[1] = n, (e as any)[2] = d) : d = (e as any)[2];
  const o: any = d,
    c: any = (a as any) === ("source" as any) ? (o as any).byFlow : (o as any).byBot;
  let f: any;
  ((e as any)[3] as any) !== (l as any) ? (f = (l as any)({
    id: "7FaY4u"
  }), (e as any)[3] = l, (e as any)[4] = f) : f = (e as any)[4];
  let u: any;
  ((e as any)[5] as any) !== ((o as any).byApp as any) || ((e as any)[6] as any) !== ((o as any).periodLabel as any) ? (u = ((t as any).jsx as any)(Oe, {
    chart: (o as any).byApp,
    periodLabel: (o as any).periodLabel
  }), (e as any)[5] = (o as any).byApp, (e as any)[6] = (o as any).periodLabel, (e as any)[7] = u) : u = (e as any)[7];
  const g: any = (o as any).byApp;
  let m: any;
  ((e as any)[8] as any) !== (l as any) ? (m = (l as any)({
    id: "kEy2T9"
  }), (e as any)[8] = l, (e as any)[9] = m) : m = (e as any)[9];
  let b: any;
  ((e as any)[10] as any) !== ((o as any).byApp as any) || ((e as any)[11] as any) !== (m as any) ? (b = ((t as any).jsx as any)(Fe, {
    chart: g,
    label: m
  }), (e as any)[10] = (o as any).byApp, (e as any)[11] = m, (e as any)[12] = b) : b = (e as any)[12];
  let h: any;
  ((e as any)[13] as any) !== (f as any) || ((e as any)[14] as any) !== (u as any) || ((e as any)[15] as any) !== (b as any) ? (h = ((t as any).jsxs as any)(ue, {
    title: f,
    children: [u, b]
  }), (e as any)[13] = f, (e as any)[14] = u, (e as any)[15] = b, (e as any)[16] = h) : h = (e as any)[16];
  let x: any;
  ((e as any)[17] as any) !== (l as any) ? (x = (l as any)({
    id: "8bzf/+"
  }), (e as any)[17] = l, (e as any)[18] = x) : x = (e as any)[18];
  let y: any;
  ((e as any)[19] as any) !== (l as any) ? (y = (l as any)({
    id: "iiaLNM"
  }), (e as any)[19] = l, (e as any)[20] = y) : y = (e as any)[20];
  let p: any;
  ((e as any)[21] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = (T: any): any => (r as any)((T as any) === ("bot" as any) ? "bot" : "source"), (e as any)[21] = p) : p = (e as any)[21];
  let j: any;
  ((e as any)[22] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = ((t as any).jsx as any)((Me as any).Item, {
    value: "source",
    children: ((t as any).jsx as any)(H, {
      id: "b8Yvxe"
    })
  }), (e as any)[22] = j) : j = (e as any)[22];
  let k: any;
  ((e as any)[23] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (k = ((t as any).jsx as any)((Me as any).Item, {
    value: "bot",
    children: ((t as any).jsx as any)(H, {
      id: "gjJ/kl"
    })
  }), (e as any)[23] = k) : k = (e as any)[23];
  let z: any;
  ((e as any)[24] as any) !== (y as any) || ((e as any)[25] as any) !== (a as any) ? (z = ((t as any).jsxs as any)(Me, {
    "aria-label": y,
    onValueChange: p,
    size: "sm",
    value: a,
    children: [j, k]
  }), (e as any)[24] = y, (e as any)[25] = a, (e as any)[26] = z) : z = (e as any)[26];
  let w: any;
  ((e as any)[27] as any) !== (c as any) || ((e as any)[28] as any) !== ((o as any).periodLabel as any) || ((e as any)[29] as any) !== (z as any) ? (w = ((t as any).jsx as any)(Oe, {
    accessory: z,
    chart: c,
    periodLabel: (o as any).periodLabel
  }), (e as any)[27] = c, (e as any)[28] = (o as any).periodLabel, (e as any)[29] = z, (e as any)[30] = w) : w = (e as any)[30];
  let N: any;
  ((e as any)[31] as any) !== (l as any) || ((e as any)[32] as any) !== (a as any) ? (N = (l as any)((a as any) === ("source" as any) ? {
    id: "b8Yvxe"
  } : {
    id: "gjJ/kl"
  }), (e as any)[31] = l, (e as any)[32] = a, (e as any)[33] = N) : N = (e as any)[33];
  let I: any;
  ((e as any)[34] as any) !== (c as any) || ((e as any)[35] as any) !== (N as any) ? (I = ((t as any).jsx as any)(Fe, {
    chart: c,
    label: N
  }), (e as any)[34] = c, (e as any)[35] = N, (e as any)[36] = I) : I = (e as any)[36];
  let L: any;
  ((e as any)[37] as any) !== (w as any) || ((e as any)[38] as any) !== (I as any) || ((e as any)[39] as any) !== (x as any) ? (L = ((t as any).jsxs as any)(ue, {
    title: x,
    children: [w, I]
  }), (e as any)[37] = w, (e as any)[38] = I, (e as any)[39] = x, (e as any)[40] = L) : L = (e as any)[40];
  let C: any;
  return ((e as any)[41] as any) !== (L as any) || ((e as any)[42] as any) !== (h as any) ? (C = ((t as any).jsxs as any)((t as any).Fragment, {
    children: [h, L]
  }), (e as any)[41] = L, (e as any)[42] = h, (e as any)[43] = C) : C = (e as any)[43], C;
}
const qe: any = {
    secondaryHairline: {
      kGVxlE: "sand-1ahgo13",
      $$css: !0
    },
    invertFlatBlackMarkForDark: {
      ku685b: "sand-1dftt0s",
      $$css: !0
    }
  },
  ke: any = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-1v2ro7d sand-1t8xvyj sand-1n9uuka sand-usxwy5 sand-cssynl"
  };
function We(this: any, s: any): any {
  (We as any).d = 1332;
  const e: any = ((E as any).c as any)(21),
    {
      anchorId: n,
      title: i,
      description: l,
      meter: a,
      emptyHint: r
    }: any = s;
  (ze as any)(n);
  const {
    _: d
  }: any = (W as any)();
  let o: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = (ce as any)("sand-usage-meter", "sand-9f619 sand-78zum5 sand-dt5ytf sand-883omv sand-1t8xvyj sand-1n9uuka sand-usxwy5 sand-cssynl"), (e as any)[0] = o) : o = (e as any)[0];
  let c: any;
  ((e as any)[1] as any) !== (n as any) ? (c = (Te as any)(n), (e as any)[1] = n, (e as any)[2] = c) : c = (e as any)[2];
  let f: any, u: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = (ce as any)("sand-usage-meter__header", "sand-9f619 sand-78zum5 sand-6s0dn4 sand-ehausa"), u = {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-137clkk sand-euugli"
  }, (e as any)[3] = f, (e as any)[4] = u) : (f = (e as any)[3], u = (e as any)[4]);
  let g: any;
  ((e as any)[5] as any) !== (i as any) ? (g = ((t as any).jsx as any)(S, {
    as: "span",
    color: "primary",
    size: "md",
    children: i
  }), (e as any)[5] = i, (e as any)[6] = g) : g = (e as any)[6];
  let m: any;
  ((e as any)[7] as any) !== (l as any) ? (m = (l as any) == (null as any) ? null : ((t as any).jsx as any)(S, {
    as: "span",
    color: "secondary",
    size: "sm",
    children: l
  }), (e as any)[7] = l, (e as any)[8] = m) : m = (e as any)[8];
  let b: any;
  ((e as any)[9] as any) !== (g as any) || ((e as any)[10] as any) !== (m as any) ? (b = ((t as any).jsx as any)("div", {
    className: f,
    children: ((t as any).jsxs as any)("div", {
      ...u,
      children: [g, m]
    })
  }), (e as any)[9] = g, (e as any)[10] = m, (e as any)[11] = b) : b = (e as any)[11];
  let h: any;
  ((e as any)[12] as any) !== (d as any) || ((e as any)[13] as any) !== (r as any) || ((e as any)[14] as any) !== (a as any) || ((e as any)[15] as any) !== (i as any) ? (h = (a as any) == (null as any) ? ((t as any).jsx as any)(S, {
    as: "span",
    color: "tertiary",
    size: "sm",
    children: r ?? (d as any)({
      id: "0BvlbM"
    })
  }) : ((t as any).jsxs as any)("div", {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-pkkfsy",
    children: [((a as any).barPercent as any) != (null as any) ? ((t as any).jsx as any)("div", {
      "aria-label": (d as any)({
        id: "5OJby0",
        values: {
          0: (a as any).valueLabel,
          title: i
        }
      }),
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": (a as any).barPercent,
      className: (ce as any)("sand-usage-meter__track", "sand-9f619 sand-qu0tyb sand-b3r6kr sand-1i4c3av sand-25lytf"),
      role: "meter",
      children: ((t as any).jsx as any)("div", {
        className: (ce as any)("sand-usage-meter__fill", "sand-9f619 sand-5yr21d sand-1i4c3av sand-db05xe"),
        style: {
          width: `${(a as any).barPercent}%`
        }
      })
    }) : null, ((t as any).jsxs as any)("div", {
      className: "sand-9f619 sand-78zum5 sand-1pha0wt sand-1qughib sand-883omv",
      children: [((t as any).jsx as any)(S, {
        as: "span",
        color: "secondary",
        size: "xs",
        children: (a as any).resetLabel ?? ""
      }), ((t as any).jsx as any)(S, {
        as: "span",
        color: "secondary",
        size: "xs",
        children: (a as any).valueLabel
      })]
    })]
  }), (e as any)[12] = d, (e as any)[13] = r, (e as any)[14] = a, (e as any)[15] = i, (e as any)[16] = h) : h = (e as any)[16];
  let x: any;
  return ((e as any)[17] as any) !== (c as any) || ((e as any)[18] as any) !== (b as any) || ((e as any)[19] as any) !== (h as any) ? (x = ((t as any).jsxs as any)("div", {
    className: o,
    id: c,
    children: [b, h]
  }), (e as any)[17] = c, (e as any)[18] = b, (e as any)[19] = h, (e as any)[20] = x) : x = (e as any)[20], x;
}
function Rs(this: any, s: any): any {
  (Rs as any).d = 1330;
  const e: any = ((E as any).c as any)(38),
    {
      cta: n,
      rowLabel: i,
      planName: l,
      planDescription: a,
      supportingText: r,
      isSuperGrokLink: d,
      anchorId: o
    }: any = s,
    {
      _: c
    }: any = (W as any)(),
    {
      handleClick: f,
      isPending: u,
      notice: g
    }: any = (Ks as any)(n),
    m: any = (At as any)();
  let b: any;
  ((e as any)[0] as any) !== (c as any) || ((e as any)[1] as any) !== (n as any) ? (b = (Et as any)(c, n), (e as any)[0] = c, (e as any)[1] = n, (e as any)[2] = b) : b = (e as any)[2];
  const h: any = b;
  let x: any;
  ((e as any)[3] as any) !== (c as any) || ((e as any)[4] as any) !== (n as any) || ((e as any)[5] as any) !== (a as any) || ((e as any)[6] as any) !== (r as any) ? (x = a ?? (Rt as any)(c, n) ?? r, (e as any)[3] = c, (e as any)[4] = n, (e as any)[5] = a, (e as any)[6] = r, (e as any)[7] = x) : x = (e as any)[7];
  const y: any = x;
  let p: any;
  ((e as any)[8] as any) !== (n as any) ? (p = ($t as any)(n), (e as any)[8] = n, (e as any)[9] = p) : p = (e as any)[9];
  const j: any = p,
    k: any = d || j,
    z: any = (g?.tone as any) === ("error" as any) ? null : g?.text ?? y;
  let w: any;
  ((e as any)[10] as any) !== (g as any) ? (w = (g?.tone as any) === ("error" as any) ? ((t as any).jsx as any)(S, {
    as: "span",
    color: "red",
    size: "sm",
    children: (g as any).text
  }) : null, (e as any)[10] = g, (e as any)[11] = w) : w = (e as any)[11];
  const N: any = i ?? h;
  let I: any;
  ((e as any)[12] as any) !== (l as any) ? (I = (l as any) == (null as any) ? void 0 : {
    text: l,
    dir: "auto"
  }, (e as any)[12] = l, (e as any)[13] = I) : I = (e as any)[13];
  let L: any;
  ((e as any)[14] as any) !== (c as any) || ((e as any)[15] as any) !== (i as any) ? (L = (i as any) == (null as any) ? void 0 : (c as any)({
    id: "A+zoTy"
  }), (e as any)[14] = c, (e as any)[15] = i, (e as any)[16] = L) : L = (e as any)[16];
  const C: any = (n as any).disabled || u,
    T: any = k ? (qe as any).secondaryHairline : void 0,
    B: any = k ? "secondary" : "primary";
  let _: any;
  ((e as any)[17] as any) !== (j as any) ? (_ = j ? {
    trailingIcon: "arrow-right-up"
  } : {}, (e as any)[17] = j, (e as any)[18] = _) : _ = (e as any)[18];
  let U: any;
  ((e as any)[19] as any) !== (d as any) || ((e as any)[20] as any) !== (h as any) || ((e as any)[21] as any) !== (m as any) ? (U = d ? ((t as any).jsxs as any)("span", {
    className: "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-pkkfsy",
    children: [((t as any).jsx as any)(Bt, {
      name: "grok",
      sizePx: 12,
      style: ((m as any).resolved as any) === ("dark" as any) ? (qe as any).invertFlatBlackMarkForDark : void 0
    }), h]
  }) : h, (e as any)[19] = d, (e as any)[20] = h, (e as any)[21] = m, (e as any)[22] = U) : U = (e as any)[22];
  let $: any;
  ((e as any)[23] as any) !== (f as any) || ((e as any)[24] as any) !== (T as any) || ((e as any)[25] as any) !== (B as any) || ((e as any)[26] as any) !== (_ as any) || ((e as any)[27] as any) !== (U as any) || ((e as any)[28] as any) !== (C as any) ? ($ = ((t as any).jsx as any)(G, {
    disabled: C,
    onClick: f,
    size: "sm",
    style: T,
    variant: B,
    ..._,
    children: U
  }), (e as any)[23] = f, (e as any)[24] = T, (e as any)[25] = B, (e as any)[26] = _, (e as any)[27] = U, (e as any)[28] = C, (e as any)[29] = $) : $ = (e as any)[29];
  let A: any;
  return ((e as any)[30] as any) !== (o as any) || ((e as any)[31] as any) !== ($ as any) || ((e as any)[32] as any) !== (z as any) || ((e as any)[33] as any) !== (w as any) || ((e as any)[34] as any) !== (N as any) || ((e as any)[35] as any) !== (I as any) || ((e as any)[36] as any) !== (L as any) ? (A = ((t as any).jsx as any)(Ke, {
    anchorId: o,
    description: z,
    extraCopy: w,
    label: N,
    labelToken: I,
    settingName: L,
    variant: "card",
    children: $
  }), (e as any)[30] = o, (e as any)[31] = $, (e as any)[32] = z, (e as any)[33] = w, (e as any)[34] = N, (e as any)[35] = I, (e as any)[36] = L, (e as any)[37] = A) : A = (e as any)[37], A;
}
function $s(this: any, s: any): any {
  ($s as any).d = 1329;
  const e: any = ((E as any).c as any)(11),
    {
      label: n,
      dashboardUrl: i
    }: any = s,
    {
      _: l
    }: any = (W as any)(),
    a: any = (He as any)();
  let r: any;
  ((e as any)[0] as any) !== (i as any) || ((e as any)[1] as any) !== (a as any) ? (r = (): any => {
    (a as any)(i);
  }, (e as any)[0] = i, (e as any)[1] = a, (e as any)[2] = r) : r = (e as any)[2];
  let d: any;
  ((e as any)[3] as any) !== (l as any) ? (d = (l as any)({
    id: "53hao2"
  }), (e as any)[3] = l, (e as any)[4] = d) : d = (e as any)[4];
  let o: any;
  ((e as any)[5] as any) !== (r as any) || ((e as any)[6] as any) !== (d as any) ? (o = ((t as any).jsx as any)(G, {
    onClick: r,
    size: "sm",
    style: (qe as any).secondaryHairline,
    trailingIcon: "arrow-right-up",
    variant: "secondary",
    children: d
  }), (e as any)[5] = r, (e as any)[6] = d, (e as any)[7] = o) : o = (e as any)[7];
  let c: any;
  return ((e as any)[8] as any) !== (n as any) || ((e as any)[9] as any) !== (o as any) ? (c = ((t as any).jsx as any)(Ke, {
    anchorId: "billing",
    label: n,
    variant: "card",
    children: o
  }), (e as any)[8] = n, (e as any)[9] = o, (e as any)[10] = c) : c = (e as any)[10], c;
}
const je: any = {
  title: {
    id: "N8yesn"
  },
  description: {
    id: "L41f29"
  },
  confirmLabel: {
    id: "oV3urV"
  },
  pendingLabel: {
    id: "UsfSPG"
  },
  cancelLabel: {
    id: "4lZvVR"
  },
  destructive: !0
};
function Bs(this: any): any {
  (Bs as any).d = 1326;
  const s: any = ((E as any).c as any)(16),
    {
      i18n: e,
      _: n
    }: any = (W as any)(),
    i: any = (Pt as any)(),
    {
      cancel: l,
      isPending: a
    }: any = (It as any)();
  let r: any;
  ((s as any)[0] as any) !== (n as any) ? (r = (m: any): any => {
    if ((typeof m as any) != ("string" as any)) return (m as any).server;
    switch (m) {
      case "signed-out":
        return (n as any)({
          id: "j4rm4L"
        });
      case "failed":
        return (n as any)({
          id: "Q5HBNA"
        });
    }
  }, (s as any)[0] = n, (s as any)[1] = r) : r = (s as any)[1];
  const d: any = r;
  let o: any;
  ((s as any)[2] as any) !== (i as any) || ((s as any)[3] as any) !== (l as any) || ((s as any)[4] as any) !== (e as any) || ((s as any)[5] as any) !== (d as any) ? (o = async (): Promise<any> => {
    await (i as any)({
      title: ((e as any)._ as any)((je as any).title),
      description: ((e as any)._ as any)((je as any).description),
      confirmLabel: ((e as any)._ as any)((je as any).confirmLabel),
      pendingLabel: ((e as any)._ as any)((je as any).pendingLabel),
      cancelLabel: ((e as any)._ as any)((je as any).cancelLabel),
      destructive: (je as any).destructive,
      perform: async (): Promise<any> => {
        const m: any = await (l as any)();
        return (m as any).ok ? null : (d as any)((m as any).refusal);
      }
    });
  }, (s as any)[2] = i, (s as any)[3] = l, (s as any)[4] = e, (s as any)[5] = d, (s as any)[6] = o) : o = (s as any)[6];
  const c: any = o;
  let f: any;
  ((s as any)[7] as any) !== (c as any) ? (f = (): any => {
    (c as any)();
  }, (s as any)[7] = c, (s as any)[8] = f) : f = (s as any)[8];
  let u: any;
  ((s as any)[9] as any) !== (n as any) || ((s as any)[10] as any) !== (a as any) ? (u = (n as any)(a ? {
    id: "UsfSPG"
  } : {
    id: "oV3urV"
  }), (s as any)[9] = n, (s as any)[10] = a, (s as any)[11] = u) : u = (s as any)[11];
  let g: any;
  return ((s as any)[12] as any) !== (a as any) || ((s as any)[13] as any) !== (f as any) || ((s as any)[14] as any) !== (u as any) ? (g = ((t as any).jsx as any)(G, {
    className: "sand-usage-cancel-trial",
    disabled: a,
    onClick: f,
    size: "sm",
    variant: "tertiary",
    children: u
  }), (s as any)[12] = a, (s as any)[13] = f, (s as any)[14] = u, (s as any)[15] = g) : g = (s as any)[15], g;
}
function Fs(this: any, s: any): any {
  (Fs as any).d = 1331;
  const e: any = ((E as any).c as any)(9),
    {
      message: n,
      onRetry: i,
      isRetrying: l
    }: any = s;
  let a: any;
  ((e as any)[0] as any) !== (n as any) ? (a = ((t as any).jsx as any)(S, {
    as: "span",
    color: "red",
    size: "sm",
    children: n
  }), (e as any)[0] = n, (e as any)[1] = a) : a = (e as any)[1];
  let r: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = ((t as any).jsx as any)(H, {
    id: "6gRgw8"
  }), (e as any)[2] = r) : r = (e as any)[2];
  let d: any;
  ((e as any)[3] as any) !== (l as any) || ((e as any)[4] as any) !== (i as any) ? (d = ((t as any).jsx as any)(G, {
    disabled: l,
    onClick: i,
    size: "sm",
    variant: "secondary",
    children: r
  }), (e as any)[3] = l, (e as any)[4] = i, (e as any)[5] = d) : d = (e as any)[5];
  let o: any;
  return ((e as any)[6] as any) !== (a as any) || ((e as any)[7] as any) !== (d as any) ? (o = ((t as any).jsxs as any)("div", {
    ...ke,
    children: [a, d]
  }), (e as any)[6] = a, (e as any)[7] = d, (e as any)[8] = o) : o = (e as any)[8], o;
}
function Os(this: any, s: any): any {
  (Os as any).d = 1327;
  const e: any = ((E as any).c as any)(8),
    {
      usage: n,
      nowMs: i
    }: any = s,
    {
      _: l
    }: any = (W as any)();
  let a: any;
  ((e as any)[0] as any) !== (l as any) || ((e as any)[1] as any) !== (i as any) || ((e as any)[2] as any) !== (n as any) ? (a = (Zt as any)(l, n, i), (e as any)[0] = l, (e as any)[1] = i, (e as any)[2] = n, (e as any)[3] = a) : a = (e as any)[3];
  const r: any = a;
  if (((r as any).kind as any) === ("chart" as any)) {
    let o: any;
    return ((e as any)[4] as any) !== ((r as any).chart as any) ? (o = ((t as any).jsx as any)(Us, {
      chart: (r as any).chart
    }), (e as any)[4] = (r as any).chart, (e as any)[5] = o) : o = (e as any)[5], o;
  }
  let d: any;
  return ((e as any)[6] as any) !== ((r as any).notice as any) ? (d = ((t as any).jsx as any)("div", {
    ...ke,
    children: ((t as any).jsx as any)(S, {
      as: "span",
      color: "tertiary",
      size: "sm",
      children: (r as any).notice
    })
  }), (e as any)[6] = (r as any).notice, (e as any)[7] = d) : d = (e as any)[7], d;
}
function qs(this: any, s: any): any {
  (qs as any).d = 1328;
  const e: any = ((E as any).c as any)(25),
    {
      teamId: n,
      nowMs: i
    }: any = s,
    {
      _: l
    }: any = (W as any)(),
    a: any = (Ve as any)();
  let r: any;
  ((e as any)[0] as any) !== ((a as any).enterpriseUsage as any) || ((e as any)[1] as any) !== (n as any) ? (r = (): any => ((((a as any).enterpriseUsage as any).load as any)(n), Yn), (e as any)[0] = (a as any).enterpriseUsage, (e as any)[1] = n, (e as any)[2] = r) : r = (e as any)[2], (Ne as any)(r);
  const d: any = (Dt as any)(n),
    {
      refresh: o,
      isPending: c
    }: any = (Mt as any)();
  let f: any = null;
  ((d as any).status as any) === ("ready" as any) ? f = (d as any).value : (((d as any).status as any) === ("loading" as any) || ((d as any).status as any) === ("failed" as any)) && (f = (d as any).previous ?? null);
  let u: any;
  ((e as any)[3] as any) !== (l as any) ? (u = (l as any)({
    id: "zGp/h9"
  }), (e as any)[3] = l, (e as any)[4] = u) : u = (e as any)[4];
  let g: any;
  ((e as any)[5] as any) !== (i as any) || ((e as any)[6] as any) !== (f as any) ? (g = (f as any) != (null as any) ? ((t as any).jsx as any)(Os, {
    nowMs: i,
    usage: f
  }) : null, (e as any)[5] = i, (e as any)[6] = f, (e as any)[7] = g) : g = (e as any)[7];
  let m: any;
  ((e as any)[8] as any) !== ((d as any).status as any) || ((e as any)[9] as any) !== (f as any) ? (m = (f as any) == (null as any) && ((d as any).status as any) === ("loading" as any) ? ((t as any).jsx as any)("div", {
    ...ke,
    children: ((t as any).jsx as any)(S, {
      as: "span",
      color: "tertiary",
      size: "sm",
      children: ((t as any).jsx as any)(H, {
        id: "zfTucZ"
      })
    })
  }) : null, (e as any)[8] = (d as any).status, (e as any)[9] = f, (e as any)[10] = m) : m = (e as any)[10];
  let b: any;
  ((e as any)[11] as any) !== ((d as any).status as any) || ((e as any)[12] as any) !== (f as any) ? (b = (f as any) == (null as any) && (((d as any).status as any) === ("empty" as any) || ((d as any).status as any) === ("unavailable" as any)) ? ((t as any).jsx as any)("div", {
    ...ke,
    children: ((t as any).jsx as any)(S, {
      as: "span",
      color: "tertiary",
      size: "sm",
      children: ((t as any).jsx as any)(H, {
        id: "HRBK9O"
      })
    })
  }) : null, (e as any)[11] = (d as any).status, (e as any)[12] = f, (e as any)[13] = b) : b = (e as any)[13];
  let h: any;
  ((e as any)[14] as any) !== (c as any) || ((e as any)[15] as any) !== (o as any) || ((e as any)[16] as any) !== ((d as any).status as any) || ((e as any)[17] as any) !== (f as any) ? (h = ((d as any).status as any) === ("failed" as any) ? ((t as any).jsx as any)(Fs, {
    isRetrying: c,
    message: (f as any) == (null as any) ? ((t as any).jsx as any)(H, {
      id: "9jIX+6"
    }) : ((t as any).jsx as any)(H, {
      id: "hCwN14"
    }),
    onRetry: o
  }) : null, (e as any)[14] = c, (e as any)[15] = o, (e as any)[16] = (d as any).status, (e as any)[17] = f, (e as any)[18] = h) : h = (e as any)[18];
  let x: any;
  return ((e as any)[19] as any) !== (u as any) || ((e as any)[20] as any) !== (g as any) || ((e as any)[21] as any) !== (m as any) || ((e as any)[22] as any) !== (b as any) || ((e as any)[23] as any) !== (h as any) ? (x = ((t as any).jsxs as any)(ue, {
    title: u,
    children: [g, m, b, h]
  }), (e as any)[19] = u, (e as any)[20] = g, (e as any)[21] = m, (e as any)[22] = b, (e as any)[23] = h, (e as any)[24] = x) : x = (e as any)[24], x;
}
function Yn(this: any): any {}
function Ws(this: any): any {
  (Ws as any).d = 1333;
  const s: any = ((E as any).c as any)(60),
    {
      _: e
    }: any = (W as any)(),
    {
      _: n
    }: any = (W as any)(),
    i: any = (Ve as any)(),
    l: any = (kt as any)(),
    {
      refresh: a,
      isPending: r
    }: any = (ps as any)(),
    d: any = (Vs as any)(),
    o: any = (es as any)("sand_on_demand_settings"),
    c: any = (es as any)("unified_sku_billing_ui"),
    f: any = (St as any)(),
    {
      status: u
    }: any = (_t as any)(),
    g: any = (Lt as any)(),
    {
      refresh: m,
      isPending: b
    }: any = (Ct as any)(),
    h: any = (wt as any)(),
    x: any = (zt as any)();
  let y: any = null;
  ((l as any).status as any) === ("ready" as any) ? y = (l as any).value : (((l as any).status as any) === ("loading" as any) || ((l as any).status as any) === ("failed" as any)) && (y = (l as any).previous ?? null);
  const p: any = (y?.isUnified as any) === (!0 as any) && ((y as any).enterpriseTeamId as any) == (null as any);
  let j: any;
  ((s as any)[0] as any) !== (y as any) || ((s as any)[1] as any) !== (c as any) ? (j = (y as any) != (null as any) && (Nt as any)({
    summary: y,
    unifiedSkuBillingUiGateOn: c
  }), (s as any)[0] = y, (s as any)[1] = c, (s as any)[2] = j) : j = (s as any)[2];
  const k: any = j,
    z: any = ((i as any).unifiedCredits as any).load;
  let w: any;
  if (((s as any)[3] as any) !== (f as any) || ((s as any)[4] as any) !== (k as any) || ((s as any)[5] as any) !== (p as any) || ((s as any)[6] as any) !== (z as any) ? (w = (): any => (p && (f as any)("unified_sku_billing_ui"), k && (z as any)(), Xn), (s as any)[3] = f, (s as any)[4] = k, (s as any)[5] = p, (s as any)[6] = z, (s as any)[7] = w) : w = (s as any)[7], (Ne as any)(w), (y as any) == (null as any) && (((l as any).status as any) === ("empty" as any) || ((l as any).status as any) === ("unavailable" as any))) return null;
  if ((y as any) == (null as any)) {
    let _: any;
    ((s as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (_ = (ce as any)("sand-usage-section", "sand-9f619 sand-78zum5 sand-dt5ytf sand-1m87ff3"), (s as any)[8] = _) : _ = (s as any)[8];
    let U: any;
    ((s as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (U = (ce as any)("sand-usage-state", (ke as any).className), (s as any)[9] = U) : U = (s as any)[9];
    let $: any;
    ((s as any)[10] as any) !== (r as any) || ((s as any)[11] as any) !== (a as any) || ((s as any)[12] as any) !== ((l as any).status as any) ? ($ = ((t as any).jsx as any)(ue, {
      title: null,
      children: ((t as any).jsx as any)("div", {
        className: U,
        children: ((l as any).status as any) === ("failed" as any) ? ((t as any).jsxs as any)((t as any).Fragment, {
          children: [((t as any).jsx as any)(S, {
            as: "span",
            color: "red",
            size: "sm",
            children: ((t as any).jsx as any)(H, {
              id: "QtkApk"
            })
          }), ((t as any).jsx as any)(G, {
            disabled: r,
            onClick: a,
            size: "sm",
            variant: "secondary",
            children: ((t as any).jsx as any)(H, {
              id: "6gRgw8"
            })
          })]
        }) : ((t as any).jsx as any)(S, {
          as: "span",
          color: "tertiary",
          size: "sm",
          children: ((t as any).jsx as any)(H, {
            id: "zfTucZ"
          })
        })
      })
    }), (s as any)[10] = r, (s as any)[11] = a, (s as any)[12] = (l as any).status, (s as any)[13] = $) : $ = (s as any)[13];
    let A: any;
    return ((s as any)[14] as any) !== (_ as any) || ((s as any)[15] as any) !== ($ as any) ? (A = ((t as any).jsx as any)("div", {
      className: _,
      children: $
    }), (s as any)[14] = _, (s as any)[15] = $, (s as any)[16] = A) : A = (s as any)[16], A;
  }
  let N: any, I: any, L: any, C: any;
  if (((s as any)[17] as any) !== (e as any) || ((s as any)[18] as any) !== (n as any) || ((s as any)[19] as any) !== (u as any) || ((s as any)[20] as any) !== (g as any) || ((s as any)[21] as any) !== (b as any) || ((s as any)[22] as any) !== (k as any) || ((s as any)[23] as any) !== (d as any) || ((s as any)[24] as any) !== (o as any) || ((s as any)[25] as any) !== (h as any) || ((s as any)[26] as any) !== (m as any) || ((s as any)[27] as any) !== (y as any) || ((s as any)[28] as any) !== ((x as any).enabled as any) || ((s as any)[29] as any) !== ((x as any).includeCredits as any)) {
    const _: any = (on as any)(e, y, d),
      U: any = (y as any).onDemandSettings,
      $: any = o && ((_ as any).enterpriseTeamId as any) == (null as any) && (U as any) != (null as any) && (U as any).visible && (U as any).eligible;
    let A: any;
    ((s as any)[34] as any) !== (u as any) || ((s as any)[35] as any) !== (U?.dashboardUrl as any) ? (A = U?.dashboardUrl ?? (Tt as any)(((u as any).kind as any) === ("logged-in" as any) ? (u as any).authId : void 0), (s as any)[34] = u, (s as any)[35] = U?.dashboardUrl, (s as any)[36] = A) : A = (s as any)[36];
    const D: any = A;
    let v: any = null;
    if (k) {
      let F: any;
      ((s as any)[37] as any) !== (g as any) || ((s as any)[38] as any) !== (b as any) || ((s as any)[39] as any) !== (h as any) || ((s as any)[40] as any) !== (m as any) ? (F = ((t as any).jsx as any)(ks, {
        isRetrying: b,
        onOpen: h,
        onRetry: m,
        state: g
      }), (s as any)[37] = g, (s as any)[38] = b, (s as any)[39] = h, (s as any)[40] = m, (s as any)[41] = F) : F = (s as any)[41], v = F;
    } else if (((_ as any).spendLimit as any) != (null as any)) v = ((t as any).jsx as any)(Is, {
      meter: (_ as any).onDemand,
      spendLimit: (_ as any).spendLimit
    }, `${((_ as any).spendLimit as any).savedMode}:${((_ as any).spendLimit as any).savedLimitDollars ?? ""}`);else if ($ && (_ as any).onDemandEnablePending) {
      let F: any;
      ((s as any)[42] as any) !== (D as any) ? (F = ((t as any).jsx as any)(Ps, {
        dashboardUrl: D
      }), (s as any)[42] = D, (s as any)[43] = F) : F = (s as any)[43], v = F;
    } else if (((_ as any).onDemand as any) != (null as any)) {
      const F: any = (_ as any).onDemand;
      let O: any;
      ((s as any)[44] as any) !== (n as any) ? (O = (n as any)({
        id: "fqkvA1"
      }), (s as any)[44] = n, (s as any)[45] = O) : O = (s as any)[45], v = ((t as any).jsx as any)(We, {
        anchorId: "on-demand",
        meter: F,
        title: O
      });
    }
    const M: any = $ || k,
      q: any = (((_ as any).upgradeRows as any).length as any) > (0 as any) || (_ as any).canCancelTrial || M;
    ((s as any)[46] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (N = (ce as any)("sand-usage-section", "sand-9f619 sand-78zum5 sand-dt5ytf sand-1m87ff3"), (s as any)[46] = N) : N = (s as any)[46], I = ((_ as any).enterpriseTeamId as any) != (null as any) ? ((t as any).jsx as any)(qs, {
      nowMs: d,
      teamId: (_ as any).enterpriseTeamId
    }) : ((t as any).jsxs as any)((t as any).Fragment, {
      children: [((t as any).jsx as any)(ue, {
        title: null,
        children: ((t as any).jsx as any)(We, {
          anchorId: "usage",
          description: (_ as any).includedUsageDescription,
          emptyHint: (y as any).hasNonZeroIncludedLimit ? void 0 : (n as any)({
            id: "e5AdX2"
          }),
          meter: (_ as any).weekly,
          title: (_ as any).includedUsageTitle
        })
      }), (v as any) != (null as any) ? ((t as any).jsx as any)(ue, {
        title: null,
        children: v
      }) : null]
    }), ((s as any)[47] as any) !== ((x as any).enabled as any) || ((s as any)[48] as any) !== ((x as any).includeCredits as any) ? (L = (x as any).enabled ? ((t as any).jsx as any)(As, {
      includeCredits: (x as any).includeCredits
    }) : null, (s as any)[47] = (x as any).enabled, (s as any)[48] = (x as any).includeCredits, (s as any)[49] = L) : L = (s as any)[49], C = q ? ((t as any).jsxs as any)(ue, {
      title: (n as any)({
        id: "UDsdr3"
      }),
      children: [(((_ as any).upgradeRows as any).map as any)(Zn), M ? ((t as any).jsx as any)($s, {
        dashboardUrl: k ? (y as any).unifiedBillingUrl ?? D : D,
        label: k ? (sn as any)(e, (y as any).billingBrand) : (_ as any).manageBillingLabel
      }) : null, (_ as any).canCancelTrial ? ((t as any).jsx as any)(Ke, {
        anchorId: "cancel-trial",
        variant: "card",
        children: ((t as any).jsx as any)(Bs, {})
      }) : null]
    }) : null, (s as any)[17] = e, (s as any)[18] = n, (s as any)[19] = u, (s as any)[20] = g, (s as any)[21] = b, (s as any)[22] = k, (s as any)[23] = d, (s as any)[24] = o, (s as any)[25] = h, (s as any)[26] = m, (s as any)[27] = y, (s as any)[28] = (x as any).enabled, (s as any)[29] = (x as any).includeCredits, (s as any)[30] = N, (s as any)[31] = I, (s as any)[32] = L, (s as any)[33] = C;
  } else N = (s as any)[30], I = (s as any)[31], L = (s as any)[32], C = (s as any)[33];
  let T: any;
  ((s as any)[50] as any) !== (r as any) || ((s as any)[51] as any) !== (a as any) || ((s as any)[52] as any) !== ((l as any).status as any) ? (T = ((l as any).status as any) === ("failed" as any) ? ((t as any).jsxs as any)("div", {
    className: (ce as any)("sand-usage-state", (ke as any).className),
    children: [((t as any).jsx as any)(S, {
      as: "span",
      color: "red",
      size: "sm",
      children: ((t as any).jsx as any)(H, {
        id: "hCwN14"
      })
    }), ((t as any).jsx as any)(G, {
      disabled: r,
      onClick: a,
      size: "sm",
      variant: "secondary",
      children: ((t as any).jsx as any)(H, {
        id: "6gRgw8"
      })
    })]
  }) : null, (s as any)[50] = r, (s as any)[51] = a, (s as any)[52] = (l as any).status, (s as any)[53] = T) : T = (s as any)[53];
  let B: any;
  return ((s as any)[54] as any) !== (N as any) || ((s as any)[55] as any) !== (I as any) || ((s as any)[56] as any) !== (L as any) || ((s as any)[57] as any) !== (C as any) || ((s as any)[58] as any) !== (T as any) ? (B = ((t as any).jsxs as any)("div", {
    className: N,
    children: [I, L, C, T]
  }), (s as any)[54] = N, (s as any)[55] = I, (s as any)[56] = L, (s as any)[57] = C, (s as any)[58] = T, (s as any)[59] = B) : B = (s as any)[59], B;
}
function Zn(this: any, s: any, e: any): any {
  return ((t as any).jsx as any)(Rs, {
    anchorId: (e as any) === (0 as any) ? "plan" : Ut,
    cta: (s as any).cta,
    isSuperGrokLink: (s as any).isSuperGrokLink,
    planDescription: (s as any).planDescription,
    planName: (s as any).planName,
    rowLabel: (s as any).rowLabel,
    supportingText: (s as any).supportingText
  }, (s as any).key);
}
function Xn(this: any): any {}
function Gs(this: any): any {
  (Gs as any).d = 1227;
  const s: any = ((E as any).c as any)(1);
  let e: any;
  return ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (e = ((t as any).jsx as any)(Zs, {
    children: ((t as any).jsx as any)(Ws, {})
  }), (s as any)[0] = e) : e = (s as any)[0], e;
}
function Qn(this: any, s: any): any {
  (Qn as any).d = 1228;
  const e: any = ((E as any).c as any)(3),
    {
      params: n
    }: any = s,
    i: any = (n as any).focusSetting ?? null;
  let l: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = ((t as any).jsx as any)(Gs, {}), (e as any)[0] = l) : l = (e as any)[0];
  let a: any;
  return ((e as any)[1] as any) !== (i as any) ? (a = ((t as any).jsx as any)(Ys, {
    focus: i,
    children: l
  }), (e as any)[1] = i, (e as any)[2] = a) : a = (e as any)[2], a;
}
export { Qn as default };
//# debugId=00ff32a6-dd14-4dd4-a2ca-b4afb5c439ab
