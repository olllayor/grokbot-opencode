declare var ResizeObserver: any;
declare var document: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "98db17b5-efce-451f-9c92-8ebb7beb1660", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-98db17b5-efce-451f-9c92-8ebb7beb1660");
  } catch (e: any) {}
} as any)();
import { c as ge, r as G, u as st, j as i, p as jt, T as w } from "./index.eager-vendor-Qbf9YA6n.js";
import { I as dn, x as dt, Z as cn, J as un, b3 as Qt, P as Ss, cj as fn, z as rt, ck as mn, an as pn, ah as hn } from "./index-ZYxf-aBb.js";
import { x as Xt, i as zt, aG as Gt, u as gn } from "./index.eager-platform-Dcfeegfw.js";
import { b7 as yt, hw as kn, hx as yn, hy as xn, eY as Rt, a_ as gt, a$ as js, c1 as at, hz as lt, b0 as Yt, bt as vs, d0 as wt, bY as xt, hA as Sn, hB as Mt, hC as jn, hD as vn, hE as bn, aU as qt, hF as wn, hG as Cn, hH as _n, c_ as It, hI as Lt, cf as Jt, cR as es, cZ as bs, hJ as Tn, cS as In, c$ as Rn, cU as On, b9 as Ct, hK as En, hL as Dt, ba as Et, hM as Vt, hN as cs, d1 as An, hO as Pn, hP as Nn, hQ as Ln, cT as ws, hR as Mn, cW as Cs, cY as _s, hS as $n, cg as Ts, hT as Bn, hU as us, cF as zn, cw as Dn, hV as Vn, hW as Is, hX as Fn, bc as Kn, hY as Bt, hZ as Un, h_ as Wn, h$ as Gn, i0 as qn, i1 as fs, i2 as Zn, cK as Hn, cJ as Qn, i3 as Xn, i4 as Yn, i5 as Jn, i6 as el, cL as Rs, i7 as tl, i8 as sl, i9 as nl, cQ as ll, ia as Os, ib as Es, ic as il, id as As, ie as al, d2 as ol, ig as rl, ih as Ps, ii as dl, ij as cl, ik as ul, aZ as fl, il as ml, im as pl, io as hl } from "./index.eager-app-Cj5f8Gby.js";
import { a as Ze, b as At, c as gl, d as Fe, T as kl, e as kt, f as vt, g as _t, h as Tt, i as yl, j as Ot, k as bt, l as Ft, m as Pt, n as xl, o as Sl, p as jl, q as Ns, r as vl, s as bl, t as wl, v as Cl } from "./chunk-team-setup-row-BCHimoZ0.js";
import { a as _l } from "./chunk-widget-BJbdljQ9.js";
import { v as Tl, b as Il, c as Rl, d as Ol } from "./chunk-grok-bot-secret-problem-text-DKm2VrEb.js";
import { a as Ls, c as El, p as Al, s as Pl, d as Kt, T as Nl } from "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
import { e as ts } from "./index.eager-common-CdCvBQNJ.js";
import { u as Ll, f as Ml, T as $l, a as Bl } from "./chunk-team-setup-new-skill-dialog-sf9oPof1.js";
import { f as zl } from "./chunk-team-bot-details-rows-zXlABTd_.js";
import { T as Dl } from "./chunk-team-setup-new-secret-dialog-BMvn0nac.js";
import "./chunk-team-setup-pills-7uDu4vf1.js";
import "./chunk-card-field-BW4hZ8b8.js";
const Vl: any = {
    status: "empty"
  },
  ms: any = (): any => Vl,
  Fl: any = (): any => {};
function Kl(this: any, s: any): any {
  const e: any = ((ge as any).c as any)(11),
    t: any = (((yt as any)() as any).grokBotPlugins as any).teamContext;
  let n: any;
  ((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (t as any) ? (n = (s as any) == (null as any) || ((s as any).length as any) === (0 as any) ? null : ((t as any).userBotMemoriesFor as any)(s), (e as any)[0] = s, (e as any)[1] = t, (e as any)[2] = n) : n = (e as any)[2];
  const l: any = n,
    c: any = ((G as any).useSyncExternalStore as any)(l?.subscribe ?? kn, l?.get ?? ms, l?.get ?? ms);
  let r: any;
  ((e as any)[3] as any) !== (c as any) ? (r = (yn as any)(c), (e as any)[3] = c, (e as any)[4] = r) : r = (e as any)[4];
  let o: any;
  ((e as any)[5] as any) !== (c as any) ? (o = (xn as any)(c), (e as any)[5] = c, (e as any)[6] = o) : o = (e as any)[6];
  const d: any = l?.refresh ?? Fl;
  let a: any;
  return ((e as any)[7] as any) !== (r as any) || ((e as any)[8] as any) !== (o as any) || ((e as any)[9] as any) !== (d as any) ? (a = {
    memories: r,
    load: o,
    reload: d
  }, (e as any)[7] = r, (e as any)[8] = o, (e as any)[9] = d, (e as any)[10] = a) : a = (e as any)[10], a;
}
function Ul(this: any): any {
  const s: any = ((ge as any).c as any)(2),
    e: any = (((yt as any)() as any).grokBotPlugins as any).teamContext;
  let t: any;
  return ((s as any)[0] as any) !== (e as any) ? (t = (n: any, l: any): any => ((e as any).promoteToTeam as any)(n, l), (s as any)[0] = e, (s as any)[1] = t) : t = (s as any)[1], t;
}
const ht: any = {
  intro: {
    keoZOQ: "sand-dj266r",
    k71WvV: "sand-14z9mp",
    k1K539: "sand-at24cr",
    keTefX: "sand-1lziwak",
    k9WMMc: "sand-2b8uid",
    kMwMTN: "sand-1o0liin",
    $$css: !0
  },
  date: {
    kMwMTN: "sand-169k319",
    kcqcaj: "sand-ss6m8b",
    $$css: !0
  },
  text: {
    keoZOQ: "sand-dj266r",
    k71WvV: "sand-14z9mp",
    k1K539: "sand-at24cr",
    keTefX: "sand-1lziwak",
    kMwMTN: "sand-tyxrsu",
    khDVqt: "sand-126k92a",
    kHjlTd: "sand-j0a0fe",
    kfSwDN: "sand-1hx0egp",
    $$css: !0
  },
  textClamped: {
    k1xSpc: "sand-104kibb",
    kJFfOR: "sand-najbk2",
    kgKLqz: "sand-1ua5tub",
    kXHlph: "sand-6ikm8r",
    kORKVm: "sand-10wlt62",
    $$css: !0
  },
  toggle: {
    kLKAdn: "sand-exx8yu",
    kwRFfy: "sand-yri2b",
    kGO01o: "sand-18d9i69",
    kZCmMZ: "sand-1c1uobl",
    kMzoRj: "sand-c342km",
    kWkggS: "sand-jbqb8w",
    kMwMTN: "sand-169k319",
    kkrTdU: "sand-1ypdohk",
    kMv6JI: "sand-jb2p0i",
    $$css: !0
  },
  more: {
    kVAEAm: "sand-10l6tqk",
    krVfgx: "sand-1ey2m1c",
    kt4wiu: "sand-tijo5x",
    kZCmMZ: "sand-1mfogq2",
    kKwaWg: "sand-1latgs6 sand-ht239h",
    $$css: !0
  },
  capped: {
    keoZOQ: "sand-dj266r",
    k71WvV: "sand-14z9mp",
    k1K539: "sand-at24cr",
    keTefX: "sand-1lziwak",
    kMwMTN: "sand-169k319",
    $$css: !0
  },
  empty: {
    keoZOQ: "sand-1xmf6yo",
    k71WvV: "sand-14z9mp",
    k1K539: "sand-at24cr",
    keTefX: "sand-1lziwak",
    k9WMMc: "sand-2b8uid",
    kMwMTN: "sand-169k319",
    $$css: !0
  }
};
function Ms(this: any, s: any): any {
  (Ms as any).d = 1018;
  const e: any = ((ge as any).c as any)(20),
    {
      text: t
    }: any = s,
    {
      _: n
    }: any = (st as any)(),
    [l, c]: any = ((G as any).useState as any)(!1),
    [r, o]: any = ((G as any).useState as any)(!1);
  let d: any;
  ((e as any)[0] as any) !== (l as any) ? (d = (): any => l, (e as any)[0] = l, (e as any)[1] = d) : d = (e as any)[1];
  const a: any = (Xt as any)(d);
  let m: any;
  ((e as any)[2] as any) !== (a as any) ? (m = (): any => (j: any): any => {
    if ((j as any) === (null as any)) return;
    const N: any = (): any => {
      (a as any)() || (o as any)(((j as any).scrollHeight as any) > (((j as any).clientHeight as any) + (1 as any) as any));
    };
    if ((N as any)(), (typeof ResizeObserver as any) > ("u" as any)) return;
    const k: any = new (ResizeObserver as any)(N);
    return ((k as any).observe as any)(j), (): any => ((k as any).disconnect as any)();
  }, (e as any)[2] = a, (e as any)[3] = m) : m = (e as any)[3];
  const [f]: any = ((G as any).useState as any)(m);
  let u: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = {
    className: "sand-1n2onr6 sand-kh2ocl sand-euugli"
  }, (e as any)[4] = u) : u = (e as any)[4];
  let p: any;
  ((e as any)[5] as any) !== (l as any) ? (p = (jt as any)((gt as any).body1, (js as any).regular, (ht as any).text, !l && (ht as any).textClamped), (e as any)[5] = l, (e as any)[6] = p) : p = (e as any)[6];
  let y: any;
  ((e as any)[7] as any) !== (p as any) || ((e as any)[8] as any) !== (t as any) ? (y = ((i as any).jsx as any)("p", {
    ref: f,
    ...p,
    children: t
  }), (e as any)[7] = p, (e as any)[8] = t, (e as any)[9] = y) : y = (e as any)[9];
  let h: any;
  ((e as any)[10] as any) !== (n as any) || ((e as any)[11] as any) !== (l as any) || ((e as any)[12] as any) !== (r as any) ? (h = r && !l ? ((i as any).jsx as any)("button", {
    "aria-expanded": !1,
    onClick: (): any => (c as any)(!0),
    type: "button",
    ...(jt as any)((gt as any).body1, (ht as any).toggle, (ht as any).more),
    children: (n as any)({
      id: "2vdb1P"
    })
  }) : null, (e as any)[10] = n, (e as any)[11] = l, (e as any)[12] = r, (e as any)[13] = h) : h = (e as any)[13];
  let b: any;
  ((e as any)[14] as any) !== (l as any) ? (b = l ? ((i as any).jsx as any)("button", {
    "aria-expanded": !0,
    onClick: (): any => (c as any)(!1),
    type: "button",
    ...(jt as any)((gt as any).body1, (ht as any).toggle),
    children: ((i as any).jsx as any)(w, {
      id: "6lGV3K"
    })
  }) : null, (e as any)[14] = l, (e as any)[15] = b) : b = (e as any)[15];
  let E: any;
  return ((e as any)[16] as any) !== (y as any) || ((e as any)[17] as any) !== (h as any) || ((e as any)[18] as any) !== (b as any) ? (E = ((i as any).jsxs as any)("div", {
    ...u,
    children: [y, h, b]
  }), (e as any)[16] = y, (e as any)[17] = h, (e as any)[18] = b, (e as any)[19] = E) : E = (e as any)[19], E;
}
function $s(this: any, s: any): any {
  ($s as any).d = 1019;
  const e: any = ((ge as any).c as any)(19),
    {
      entries: t,
      total: n,
      intro: l
    }: any = s,
    {
      _: c
    }: any = (st as any)();
  let r: any;
  ((e as any)[0] as any) !== ((t as any).length as any) ? (r = (((t as any).length as any).toLocaleString as any)((Rt as any)()), (e as any)[0] = (t as any).length, (e as any)[1] = r) : r = (e as any)[1];
  const o: any = r;
  let d: any;
  ((e as any)[2] as any) !== (n as any) ? (d = ((n as any).toLocaleString as any)((Rt as any)()), (e as any)[2] = n, (e as any)[3] = d) : d = (e as any)[3];
  const a: any = d;
  let m: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = {
    className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-euugli"
  }, (e as any)[4] = m) : m = (e as any)[4];
  let f: any;
  ((e as any)[5] as any) !== (l as any) ? (f = (l as any) === (null as any) ? null : ((i as any).jsx as any)("p", {
    ...(jt as any)((gt as any).body1, (ht as any).intro),
    children: l ?? ((i as any).jsx as any)(w, {
      id: "pw1hU+"
    })
  }), (e as any)[5] = l, (e as any)[6] = f) : f = (e as any)[6];
  let u: any;
  ((e as any)[7] as any) !== (a as any) || ((e as any)[8] as any) !== ((t as any).length as any) || ((e as any)[9] as any) !== (o as any) || ((e as any)[10] as any) !== (n as any) ? (u = ((t as any).length as any) > (0 as any) && (n as any) > ((t as any).length as any) ? ((i as any).jsx as any)("p", {
    ...(jt as any)((gt as any).body2, (ht as any).capped),
    children: ((i as any).jsx as any)(w, {
      id: "p4C0h8",
      values: {
        newest: o,
        all: a
      }
    })
  }) : null, (e as any)[7] = a, (e as any)[8] = (t as any).length, (e as any)[9] = o, (e as any)[10] = n, (e as any)[11] = u) : u = (e as any)[11];
  let p: any;
  ((e as any)[12] as any) !== (c as any) || ((e as any)[13] as any) !== (t as any) ? (p = ((t as any).length as any) === (0 as any) ? ((i as any).jsx as any)("p", {
    ...(jt as any)((gt as any).body2, (ht as any).empty),
    children: ((i as any).jsx as any)(w, {
      id: "2cRvsl"
    })
  }) : ((i as any).jsx as any)("ul", {
    "aria-label": (c as any)({
      id: "QCEzof"
    }),
    className: "sand-78zum5 sand-dt5ytf sand-1c1vhfx sand-1gslohp sand-14z9mp sand-at24cr sand-1lziwak sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl sand-e8uvvx",
    children: ((t as any).map as any)(Wl)
  }), (e as any)[12] = c, (e as any)[13] = t, (e as any)[14] = p) : p = (e as any)[14];
  let y: any;
  return ((e as any)[15] as any) !== (f as any) || ((e as any)[16] as any) !== (u as any) || ((e as any)[17] as any) !== (p as any) ? (y = ((i as any).jsxs as any)("div", {
    ...m,
    children: [f, u, p]
  }), (e as any)[15] = f, (e as any)[16] = u, (e as any)[17] = p, (e as any)[18] = y) : y = (e as any)[18], y;
}
function Wl(this: any, s: any): any {
  return ((i as any).jsxs as any)("li", {
    className: "sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-1jnr06f sand-euugli",
    children: [((i as any).jsx as any)("span", {
      ...(jt as any)((gt as any).body2, (ht as any).date),
      children: (s as any).date
    }), ((i as any).jsx as any)(Ms, {
      text: (s as any).text
    })]
  }, (s as any).factId ?? `${(s as any).date}-${(s as any).text}`);
}
const Ut: any = {
  header: {
    kGNEyG: "sand-1qjc9v5",
    kjj79g: "sand-l56j7k",
    kAzted: "sand-1wiwyrm",
    kZCmMZ: "sand-1oiqv2n",
    kwRFfy: "sand-15zmtp0",
    kt9PQ7: "sand-1hkp6id",
    kfdmCh: "sand-1q0q8m5",
    kL6WhQ: "sand-19145p9",
    $$css: !0
  },
  title: {
    k9WMMc: "sand-2b8uid",
    $$css: !0
  },
  body: {
    k1xSpc: "sand-78zum5",
    kXwgrk: "sand-dt5ytf",
    kOIVth: "sand-ou54vl",
    kzQI83: "sand-1iyjqo2",
    kLKAdn: "sand-yamay9",
    kGO01o: "sand-x6bls6",
    kORKVm: "sand-1odjw0f",
    $$css: !0
  }
};
function Bs(this: any, s: any): any {
  (Bs as any).d = 1050;
  const e: any = ((ge as any).c as any)(20),
    {
      mark: t,
      title: n,
      onClose: l,
      children: c
    }: any = s;
  let r: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = [(gt as any).body1, (js as any).medium, (Ut as any).title], (e as any)[0] = r) : r = (e as any)[0];
  let o: any;
  ((e as any)[1] as any) !== (n as any) ? (o = ((i as any).jsx as any)((dt as any).Title, {
    style: r,
    children: n
  }), (e as any)[1] = n, (e as any)[2] = o) : o = (e as any)[2];
  let d: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = ((i as any).jsx as any)((dt as any).CloseButton, {}), (e as any)[3] = d) : d = (e as any)[3];
  let a: any;
  ((e as any)[4] as any) !== (o as any) ? (a = ((i as any).jsxs as any)((dt as any).Header, {
    style: (Ut as any).header,
    children: [o, d]
  }), (e as any)[4] = o, (e as any)[5] = a) : a = (e as any)[5];
  let m: any;
  ((e as any)[6] as any) !== (c as any) || ((e as any)[7] as any) !== (t as any) ? (m = ((i as any).jsxs as any)((dt as any).Body, {
    style: (Ut as any).body,
    children: [t, c]
  }), (e as any)[6] = c, (e as any)[7] = t, (e as any)[8] = m) : m = (e as any)[8];
  let f: any;
  ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = ((i as any).jsx as any)(w, {
    id: "DPfwMq"
  }), (e as any)[9] = f) : f = (e as any)[9];
  let u: any;
  ((e as any)[10] as any) !== (l as any) ? (u = ((i as any).jsx as any)((dt as any).Action, {
    onClick: l,
    variant: "tertiary",
    children: f
  }), (e as any)[10] = l, (e as any)[11] = u) : u = (e as any)[11];
  let p: any;
  ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = ((i as any).jsx as any)((dt as any).ActionSpacer, {}), (e as any)[12] = p) : p = (e as any)[12];
  let y: any;
  ((e as any)[13] as any) !== (u as any) ? (y = ((i as any).jsxs as any)(zl, {
    children: [u, p]
  }), (e as any)[13] = u, (e as any)[14] = y) : y = (e as any)[14];
  let h: any;
  return ((e as any)[15] as any) !== (l as any) || ((e as any)[16] as any) !== (a as any) || ((e as any)[17] as any) !== (m as any) || ((e as any)[18] as any) !== (y as any) ? (h = ((i as any).jsxs as any)(Ls, {
    height: "hug",
    onClose: l,
    children: [a, m, y]
  }), (e as any)[15] = l, (e as any)[16] = a, (e as any)[17] = m, (e as any)[18] = y, (e as any)[19] = h) : h = (e as any)[19], h;
}
function zs(this: any, s: any): any {
  (zs as any).d = 1049;
  const e: any = ((ge as any).c as any)(10),
    {
      entries: t,
      title: n,
      intro: l,
      onClose: c
    }: any = s;
  let r: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = ((i as any).jsx as any)("span", {
    className: "sand-amitd3 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-9f619 sand-15yg21f sand-nnlda6 sand-qjedn3 sand-1y0btm7 sand-q03nf1 sand-hojbe8 sand-vvtkfd sand-1o0liin",
    children: ((i as any).jsx as any)(dn, {
      "aria-hidden": !0,
      name: "library",
      size: "xl"
    })
  }), (e as any)[0] = r) : r = (e as any)[0];
  let o: any;
  ((e as any)[1] as any) !== (n as any) ? (o = n ?? ((i as any).jsx as any)(w, {
    id: "QCEzof"
  }), (e as any)[1] = n, (e as any)[2] = o) : o = (e as any)[2];
  let d: any;
  ((e as any)[3] as any) !== (t as any) || ((e as any)[4] as any) !== (l as any) ? (d = ((i as any).jsx as any)($s, {
    entries: t,
    intro: l,
    total: (t as any).length
  }), (e as any)[3] = t, (e as any)[4] = l, (e as any)[5] = d) : d = (e as any)[5];
  let a: any;
  return ((e as any)[6] as any) !== (c as any) || ((e as any)[7] as any) !== (o as any) || ((e as any)[8] as any) !== (d as any) ? (a = ((i as any).jsx as any)(Bs, {
    mark: r,
    onClose: c,
    title: o,
    children: d
  }), (e as any)[6] = c, (e as any)[7] = o, (e as any)[8] = d, (e as any)[9] = a) : a = (e as any)[9], a;
}
function Ds(this: any, s: any, e: any): any {
  const t: any = ((ge as any).c as any)(37);
  let n: any;
  ((t as any)[0] as any) !== (e as any) ? (n = (lt as any)(e, "memories"), (t as any)[0] = e, (t as any)[1] = n) : n = (t as any)[1];
  let l: any;
  ((t as any)[2] as any) !== (s as any) || ((t as any)[3] as any) !== (n as any) ? (l = {
    agentId: s,
    entryId: n
  }, (t as any)[2] = s, (t as any)[3] = n, (t as any)[4] = l) : l = (t as any)[4];
  const c: any = (at as any)("widget", l);
  let r: any;
  ((t as any)[5] as any) !== (e as any) ? (r = (lt as any)(e, "plugins"), (t as any)[5] = e, (t as any)[6] = r) : r = (t as any)[6];
  let o: any;
  ((t as any)[7] as any) !== (s as any) || ((t as any)[8] as any) !== (r as any) ? (o = {
    agentId: s,
    entryId: r
  }, (t as any)[7] = s, (t as any)[8] = r, (t as any)[9] = o) : o = (t as any)[9];
  const d: any = (at as any)("widget", o);
  let a: any;
  ((t as any)[10] as any) !== (e as any) ? (a = (lt as any)(e, "skills"), (t as any)[10] = e, (t as any)[11] = a) : a = (t as any)[11];
  let m: any;
  ((t as any)[12] as any) !== (s as any) || ((t as any)[13] as any) !== (a as any) ? (m = {
    agentId: s,
    entryId: a
  }, (t as any)[12] = s, (t as any)[13] = a, (t as any)[14] = m) : m = (t as any)[14];
  const f: any = (at as any)("widget", m);
  let u: any;
  ((t as any)[15] as any) !== (e as any) ? (u = (lt as any)(e, "files"), (t as any)[15] = e, (t as any)[16] = u) : u = (t as any)[16];
  let p: any;
  ((t as any)[17] as any) !== (s as any) || ((t as any)[18] as any) !== (u as any) ? (p = {
    agentId: s,
    entryId: u
  }, (t as any)[17] = s, (t as any)[18] = u, (t as any)[19] = p) : p = (t as any)[19];
  const y: any = (at as any)("widget", p);
  let h: any;
  ((t as any)[20] as any) !== (e as any) ? (h = (lt as any)(e, "secrets"), (t as any)[20] = e, (t as any)[21] = h) : h = (t as any)[21];
  let b: any;
  ((t as any)[22] as any) !== (s as any) || ((t as any)[23] as any) !== (h as any) ? (b = {
    agentId: s,
    entryId: h
  }, (t as any)[22] = s, (t as any)[23] = h, (t as any)[24] = b) : b = (t as any)[24];
  const E: any = (at as any)("widget", b);
  let j: any;
  ((t as any)[25] as any) !== (e as any) ? (j = (lt as any)(e, "automations"), (t as any)[25] = e, (t as any)[26] = j) : j = (t as any)[26];
  let N: any;
  ((t as any)[27] as any) !== (s as any) || ((t as any)[28] as any) !== (j as any) ? (N = {
    agentId: s,
    entryId: j
  }, (t as any)[27] = s, (t as any)[28] = j, (t as any)[29] = N) : N = (t as any)[29];
  const k: any = (at as any)("widget", N);
  let _: any;
  return ((t as any)[30] as any) !== (y as any) || ((t as any)[31] as any) !== (E as any) || ((t as any)[32] as any) !== (k as any) || ((t as any)[33] as any) !== (c as any) || ((t as any)[34] as any) !== (d as any) || ((t as any)[35] as any) !== (f as any) ? (_ = {
    memories: c,
    plugins: d,
    skills: f,
    files: y,
    secrets: E,
    automations: k
  }, (t as any)[30] = y, (t as any)[31] = E, (t as any)[32] = k, (t as any)[33] = c, (t as any)[34] = d, (t as any)[35] = f, (t as any)[36] = _) : _ = (t as any)[36], _;
}
function Vs(this: any, s: any): any {
  const e: any = ((ge as any).c as any)(3),
    t: any = (cn as any)()?.holdEntry;
  let n: any;
  return ((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (t as any) ? (n = (l: any): any => {
    t?.(s, "always"), (l as any)();
  }, (e as any)[0] = s, (e as any)[1] = t, (e as any)[2] = n) : n = (e as any)[2], n;
}
const Fs: number = 3,
  Gl: number = 3;
function ss(this: any, s: any, e: any, t: any, n: any = Fs): any {
  const l: any = new (Set as any)(),
    c: any = [];
  for (const r of s) {
    const o: any = (e as any)(r);
    if (!((l as any).has as any)(o) && (((l as any).add as any)(o), ((c as any).push as any)((t as any)(r, o)), ((c as any).length as any) >= (n as any))) break;
  }
  return c;
}
const ql: any = {
  names: {
    kzQI83: "sand-1iyjqo2",
    kCS8Yb: "sand-1r8uery",
    k7Eaqz: "sand-euugli",
    kVQacm: "sand-b3r6kr",
    kg5iWk: "sand-lyipyv",
    khDVqt: "sand-uxw1ft",
    $$css: !0
  }
};
function Zt(this: any, s: any): any {
  return ((new ((Intl as any).ListFormat as any)((Rt as any)(), {
    style: "long",
    type: "conjunction"
  }) as any).format as any)(s);
}
function Zl(this: any, s: any, e: any, t: any): any {
  const n: any = [],
    l: any = (c: any): any => {
      const r: any = ((n as any).at as any)(-1);
      ((r as any) === (void 0 as any) || ((c as any).length as any) < ((r as any).length as any)) && ((n as any).push as any)(c);
    };
  for (let c: any = ((Math as any).min as any)((s as any).length, Gl); (c as any) >= (1 as any); c--) (l as any)((c as any) === ((s as any).length as any) ? (Zt as any)(s) : (Zt as any)([...((s as any).slice as any)(0, c), (e as any)(((s as any).length as any) - (c as any))]));
  return (t as any) !== (void 0 as any) && ((s as any).length as any) > (1 as any) && (l as any)((t as any)((s as any).length)), n;
}
function Hl(this: any, s: any, e: any): any {
  const t: any = ((e as any).length as any) - (1 as any),
    n: any = (s as any).clientWidth;
  if ((t as any) <= (0 as any) || (n as any) === (0 as any)) return 0;
  const l: any = ((document as any).createElement as any)("span");
  ((l as any).style as any).position = "absolute", ((l as any).style as any).width = "max-content", ((l as any).style as any).whiteSpace = "nowrap", ((l as any).style as any).visibility = "hidden", ((s as any).append as any)(l);
  try {
    for (let c: any = 0; (c as any) < (t as any); c++) if ((l as any).textContent = (e as any)[c] ?? "", ((((l as any).getBoundingClientRect as any)() as any).width as any) <= (n as any)) return c;
    return t;
  } finally {
    ((l as any).remove as any)();
  }
}
function ft(this: any, s: any): any {
  (ft as any).d = 527;
  const e: any = ((ge as any).c as any)(27),
    {
      icons: t,
      names: n,
      emptyLabel: l,
      countLabelOf: c
    }: any = s,
    {
      _: r
    }: any = (st as any)();
  let o: any;
  ((e as any)[0] as any) !== (l as any) || ((e as any)[1] as any) !== (n as any) ? (o = ((n as any).length as any) === (0 as any) ? l ?? "" : (Zt as any)(n), (e as any)[0] = l, (e as any)[1] = n, (e as any)[2] = o) : o = (e as any)[2];
  const d: any = o;
  let a: any;
  ((e as any)[3] as any) !== (r as any) || ((e as any)[4] as any) !== (c as any) || ((e as any)[5] as any) !== (d as any) || ((e as any)[6] as any) !== (n as any) ? (a = ((n as any).length as any) === (0 as any) ? [d] : (Zl as any)(n, (P: any): any => (r as any)({
    id: "f7ugFQ",
    values: {
      count: P
    }
  }), c), (e as any)[3] = r, (e as any)[4] = c, (e as any)[5] = d, (e as any)[6] = n, (e as any)[7] = a) : a = (e as any)[7];
  const m: any = a,
    [f, u]: any = ((G as any).useState as any)(0);
  let p: any;
  ((e as any)[8] as any) !== (m as any) ? (p = (): any => m, (e as any)[8] = m, (e as any)[9] = p) : p = (e as any)[9];
  const y: any = (Xt as any)(p);
  let h: any;
  ((e as any)[10] as any) !== (y as any) ? (h = (): any => (P: any): any => {
    if ((P as any) === (null as any)) return;
    const z: any = (): any => (u as any)((Hl as any)(P, (y as any)()));
    if ((z as any)(), (typeof ResizeObserver as any) > ("u" as any)) return;
    const I: any = new (ResizeObserver as any)(z);
    return ((I as any).observe as any)(P), (): any => ((I as any).disconnect as any)();
  }, (e as any)[10] = y, (e as any)[11] = h) : h = (e as any)[11];
  const [b]: any = ((G as any).useState as any)(h),
    E: any = (m as any)[((Math as any).min as any)(f, ((m as any).length as any) - (1 as any))] ?? "";
  let j: any, N: any;
  ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = {
    className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli"
  }, N = {
    className: "sand-78zum5 sand-6s0dn4 sand-2lah0s"
  }, (e as any)[12] = j, (e as any)[13] = N) : (j = (e as any)[12], N = (e as any)[13]);
  let k: any;
  ((e as any)[14] as any) !== (t as any) ? (k = (((G as any).Children as any).map as any)(((t as any).slice as any)(0, Fs), Ql), (e as any)[14] = t, (e as any)[15] = k) : k = (e as any)[15];
  let _: any;
  ((e as any)[16] as any) !== (k as any) ? (_ = ((i as any).jsx as any)("span", {
    ...N,
    children: k
  }), (e as any)[16] = k, (e as any)[17] = _) : _ = (e as any)[17];
  let T: any;
  ((e as any)[18] as any) !== (m as any) ? (T = ((m as any).join as any)("\0"), (e as any)[18] = m, (e as any)[19] = T) : T = (e as any)[19];
  const D: any = (E as any) === (d as any) ? void 0 : d;
  let O: any;
  ((e as any)[20] as any) !== (D as any) || ((e as any)[21] as any) !== (T as any) || ((e as any)[22] as any) !== (E as any) ? (O = ((i as any).jsx as any)(Yt, {
    level: "body1",
    ref: b,
    style: (ql as any).names,
    title: D,
    children: E
  }, T), (e as any)[20] = D, (e as any)[21] = T, (e as any)[22] = E, (e as any)[23] = O) : O = (e as any)[23];
  let $: any;
  return ((e as any)[24] as any) !== (O as any) || ((e as any)[25] as any) !== (_ as any) ? ($ = ((i as any).jsxs as any)("span", {
    ...j,
    children: [_, O]
  }), (e as any)[24] = O, (e as any)[25] = _, (e as any)[26] = $) : $ = (e as any)[26], $;
}
function Ql(this: any, s: any): any {
  return ((i as any).jsx as any)("span", {
    className: "sand-3nfvp2 sand-2lah0s sand-w01apr sand-1pwwqoy",
    children: s
  });
}
function Nt(this: any, s: any): any {
  const e: any = ((ge as any).c as any)(17),
    {
      agentId: t,
      entryId: n,
      kind: l,
      slotStatus: c,
      sandArea: r,
      onExpand: o,
      onCollapse: d
    }: any = s,
    {
      localAnswers: a
    }: any = (yt as any)(),
    {
      respondToWidget: m
    }: any = (vs as any)(),
    [f, u]: any = ((G as any).useState as any)(null),
    p: any = ((G as any).useRef as any)(0),
    y: any = (f as any) !== (null as any) && ((f as any).fromStatus as any) === (c as any) ? f : null;
  let h: any;
  ((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (n as any) || ((e as any)[2] as any) !== (l as any) || ((e as any)[3] as any) !== (a as any) || ((e as any)[4] as any) !== (d as any) || ((e as any)[5] as any) !== (o as any) || ((e as any)[6] as any) !== (m as any) || ((e as any)[7] as any) !== (r as any) || ((e as any)[8] as any) !== (c as any) ? (h = (k: any, _: any): any => {
    if ((t as any) == (null as any)) return;
    const T: any = {
        agentId: t,
        entryId: (lt as any)(n, l)
      },
      D: any = (p as any).current = ((p as any).current as any) + (1 as any),
      O: any = (): any => (D as any) !== ((p as any).current as any);
    (u as any)(null), ((a as any).record as any)("widget", T, (k as any).resolution), (d as any)();
    const $: any = (): any => {
        (O as any)() || (((a as any).clear as any)("widget", T), (u as any)({
          answer: k,
          fromStatus: c,
          onFail: _
        }), _?.(), (o as any)());
      },
      P: any = (z: any): any => (m as any)({
        agentId: t,
        entryId: n,
        value: z
      });
    (((((P as any)((k as any).value) as any).then as any)(async (z: any): Promise<any> => {
      if ((z?.accepted as any) !== (!1 as any)) return;
      const {
        fallback: I
      }: any = k;
      if ((I as any) === (void 0 as any)) {
        ($ as any)();
        return;
      }
      if ((O as any)()) return;
      ((a as any).record as any)("widget", T, (I as any).resolution), ((await (P as any)((I as any).value))?.accepted as any) === (!1 as any) && ($ as any)();
    }) as any).catch as any)((z: any): any => {
      (wt as any)(z, {
        tags: {
          sand_area: r
        }
      }), ($ as any)();
    });
  }, (e as any)[0] = t, (e as any)[1] = n, (e as any)[2] = l, (e as any)[3] = a, (e as any)[4] = d, (e as any)[5] = o, (e as any)[6] = m, (e as any)[7] = r, (e as any)[8] = c, (e as any)[9] = h) : h = (e as any)[9];
  const b: any = h,
    E: any = (y as any) !== (null as any);
  let j: any;
  ((e as any)[10] as any) !== (y as any) || ((e as any)[11] as any) !== (b as any) ? (j = (): any => (y as any) === (null as any) ? !1 : ((b as any)((y as any).answer, (y as any).onFail), !0), (e as any)[10] = y, (e as any)[11] = b, (e as any)[12] = j) : j = (e as any)[12];
  let N: any;
  return ((e as any)[13] as any) !== (b as any) || ((e as any)[14] as any) !== (E as any) || ((e as any)[15] as any) !== (j as any) ? (N = {
    didFail: E,
    send: b,
    retry: j
  }, (e as any)[13] = b, (e as any)[14] = E, (e as any)[15] = j, (e as any)[16] = N) : N = (e as any)[16], N;
}
function it(this: any, s: any): any {
  (it as any).d = 546;
  const e: any = ((ge as any).c as any)(2),
    {
      tap: t
    }: any = s;
  let n: any;
  return ((e as any)[0] as any) !== ((t as any).didFail as any) ? (n = (t as any).didFail ? ((i as any).jsx as any)(Ze, {
    children: ((i as any).jsx as any)(w, {
      id: "by/FZp"
    })
  }) : null, (e as any)[0] = (t as any).didFail, (e as any)[1] = n) : n = (e as any)[1], n;
}
function ns(this: any, s: any): any {
  (ns as any).d = 517;
  const e: any = ((ge as any).c as any)(88),
    {
      entry: t,
      slot: n,
      agentId: l,
      isReadOnly: c,
      isExpanded: r,
      onExpand: o,
      onCollapse: d
    }: any = s,
    {
      _: a
    }: any = (st as any)(),
    m: any = ((G as any).useId as any)(),
    f: any = (xt as any)(l),
    u: any = (At as any)(),
    p: any = (gl as any)();
  let y: any;
  ((e as any)[0] as any) !== (p as any) ? (y = (): any => (B: any): any => (p?.enter(B), (): any => p?.retire(B)), (e as any)[0] = p, (e as any)[1] = y) : y = (e as any)[1];
  const [h]: any = ((G as any).useState as any)(y);
  let b: any;
  ((e as any)[2] as any) !== ((t as any).id as any) ? (b = (lt as any)((t as any).id, "automations"), (e as any)[2] = (t as any).id, (e as any)[3] = b) : b = (e as any)[3];
  let E: any;
  ((e as any)[4] as any) !== (l as any) || ((e as any)[5] as any) !== (b as any) ? (E = {
    agentId: l,
    entryId: b
  }, (e as any)[4] = l, (e as any)[5] = b, (e as any)[6] = E) : E = (e as any)[6];
  const j: any = (at as any)("widget", E);
  let N: any;
  ((e as any)[7] as any) !== (l as any) || ((e as any)[8] as any) !== ((t as any).id as any) || ((e as any)[9] as any) !== (d as any) || ((e as any)[10] as any) !== (o as any) || ((e as any)[11] as any) !== ((n as any).status as any) ? (N = {
    agentId: l,
    entryId: (t as any).id,
    kind: "automations",
    slotStatus: (n as any).status,
    sandArea: "team-automations",
    onExpand: o,
    onCollapse: d
  }, (e as any)[7] = l, (e as any)[8] = (t as any).id, (e as any)[9] = d, (e as any)[10] = o, (e as any)[11] = (n as any).status, (e as any)[12] = N) : N = (e as any)[12];
  const k: any = (Nt as any)(N);
  let _: any, T: any, D: any, O: any, $: any, P: any;
  if (((e as any)[13] as any) !== (a as any) || ((e as any)[14] as any) !== (f as any) || ((e as any)[15] as any) !== (l as any) || ((e as any)[16] as any) !== (u as any) || ((e as any)[17] as any) !== (r as any) || ((e as any)[18] as any) !== (c as any) || ((e as any)[19] as any) !== (j as any) || ((e as any)[20] as any) !== (o as any) || ((e as any)[21] as any) !== (n as any) || ((e as any)[22] as any) !== (k as any) || ((e as any)[23] as any) !== (m as any)) {
    P = ((Symbol as any).for as any)("react.early_return_sentinel");
    e: {
      const B: any = (n as any).automations ?? [];
      if (((B as any).length as any) === (0 as any)) {
        P = null;
        break e;
      }
      const {
          sourceName: L
        }: any = n,
        ce: any = (Sn as any)((n as any).status, j);
      _ = !c && (l as any) != (null as any) && (f?.harness as any) === ("temporal" as any) && ((f as any).viewerIsOwner as any) !== (!1 as any) && ((f as any).visibility as any) === ((Mt as any).team as any);
      let Re: any;
      ((e as any)[30] as any) !== (a as any) ? (Re = (a as any)({
        id: "dmYV6f"
      }), (e as any)[30] = a, (e as any)[31] = Re) : Re = (e as any)[31];
      const Ke: any = Re;
      let Ge: any;
      ((e as any)[32] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ge = [((i as any).jsx as any)(kt, {
        name: "clock"
      }, "clock")], (e as any)[32] = Ge) : Ge = (e as any)[32];
      const Le: any = Ge;
      if ((ce as any) !== ("proposed" as any)) {
        let Z: any;
        ((e as any)[33] as any) !== ((n as any).failed as any) ? (Z = (n as any).failed ?? [], (e as any)[33] = (n as any).failed, (e as any)[34] = Z) : Z = (e as any)[34];
        let J: any;
        ((e as any)[35] as any) !== (Z as any) ? (J = new (Set as any)(Z), (e as any)[35] = Z, (e as any)[36] = J) : J = (e as any)[36];
        const xe: any = J;
        let Ce: any;
        ((e as any)[37] as any) !== (j as any) || ((e as any)[38] as any) !== (n as any) ? (Ce = new (Set as any)((jn as any)(n, j)), (e as any)[37] = j, (e as any)[38] = n, (e as any)[39] = Ce) : Ce = (e as any)[39];
        const ne: any = Ce;
        let Oe: any;
        ((e as any)[40] as any) !== (xe as any) || ((e as any)[41] as any) !== (ne as any) ? (Oe = (Me: any): any => ((ne as any).has as any)((Me as any).id) && !((xe as any).has as any)((Me as any).id), (e as any)[40] = xe, (e as any)[41] = ne, (e as any)[42] = Oe) : Oe = (e as any)[42];
        const le: any = ((B as any).filter as any)(Oe);
        let ke: any;
        ((e as any)[43] as any) !== (a as any) || ((e as any)[44] as any) !== ((xe as any).size as any) || ((e as any)[45] as any) !== (L as any) ? (ke = ((xe as any).size as any) === (0 as any) ? null : ((i as any).jsx as any)(Ze, {
          children: (a as any)({
            id: "I3xMkO",
            values: {
              0: (xe as any).size,
              sourceName: L
            }
          })
        }), (e as any)[43] = a, (e as any)[44] = (xe as any).size, (e as any)[45] = L, (e as any)[46] = ke) : ke = (e as any)[46];
        let _e: any;
        ((e as any)[47] as any) !== (a as any) ? (_e = (Me: any): any => (a as any)({
          id: "qHmqo4",
          values: {
            count: Me
          }
        }), (e as any)[47] = a, (e as any)[48] = _e) : _e = (e as any)[48];
        let pe: any;
        ((e as any)[49] as any) !== (a as any) || ((e as any)[50] as any) !== (L as any) ? (pe = (a as any)({
          id: "/IB6mQ",
          values: {
            sourceName: L
          }
        }), (e as any)[49] = a, (e as any)[50] = L, (e as any)[51] = pe) : pe = (e as any)[51], P = ((i as any).jsx as any)(Fe, {
          details: ke,
          isExpanded: !1,
          summary: ((i as any).jsx as any)(ft, {
            countLabelOf: _e,
            emptyLabel: pe,
            icons: Le,
            names: ((le as any).map as any)(Yl)
          }),
          title: Ke,
          titleId: m
        });
        break e;
      }
      if (!r) {
        let Z: any;
        ((e as any)[52] as any) !== (k as any) ? (Z = ((i as any).jsx as any)(it, {
          tap: k
        }), (e as any)[52] = k, (e as any)[53] = Z) : Z = (e as any)[53], P = ((i as any).jsx as any)(Fe, {
          details: Z,
          isExpanded: !1,
          isSummaryPending: !0,
          onExpand: o,
          summary: ((i as any).jsx as any)(w, {
            id: "8X559d",
            values: {
              0: (B as any).length
            }
          }),
          title: Ke,
          titleId: m
        });
        break e;
      }
      ((e as any)[54] as any) !== (a as any) || ((e as any)[55] as any) !== ((u as any).isChained as any) ? ($ = (u as any).isChained ? (a as any)({
        id: "zgak9k"
      }) : (a as any)({
        id: "K2MY8A"
      }), (e as any)[54] = a, (e as any)[55] = (u as any).isChained, (e as any)[56] = $) : $ = (e as any)[56];
      let se: any;
      ((e as any)[57] as any) !== (a as any) ? (se = (a as any)({
        id: "4l4XAo"
      }), (e as any)[57] = a, (e as any)[58] = se) : se = (e as any)[58], ((e as any)[59] as any) !== (se as any) ? (O = {
        label: se,
        value: bn
      }, (e as any)[59] = se, (e as any)[60] = O) : O = (e as any)[60], ((e as any)[61] as any) !== (a as any) ? (T = (a as any)({
        id: "0Khkjg"
      }), (e as any)[61] = a, (e as any)[62] = T) : T = (e as any)[62], D = (vn as any)(((B as any).map as any)(Xl));
    }
    (e as any)[13] = a, (e as any)[14] = f, (e as any)[15] = l, (e as any)[16] = u, (e as any)[17] = r, (e as any)[18] = c, (e as any)[19] = j, (e as any)[20] = o, (e as any)[21] = n, (e as any)[22] = k, (e as any)[23] = m, (e as any)[24] = _, (e as any)[25] = T, (e as any)[26] = D, (e as any)[27] = O, (e as any)[28] = $, (e as any)[29] = P;
  } else _ = (e as any)[24], T = (e as any)[25], D = (e as any)[26], O = (e as any)[27], $ = (e as any)[28], P = (e as any)[29];
  if ((P as any) !== (((Symbol as any).for as any)("react.early_return_sentinel") as any)) return P;
  let z: any;
  ((e as any)[63] as any) !== (T as any) || ((e as any)[64] as any) !== (D as any) ? (z = {
    label: T,
    value: D
  }, (e as any)[63] = T, (e as any)[64] = D, (e as any)[65] = z) : z = (e as any)[65];
  let I: any;
  ((e as any)[66] as any) !== (z as any) || ((e as any)[67] as any) !== (O as any) ? (I = [O, z], (e as any)[66] = z, (e as any)[67] = O, (e as any)[68] = I) : I = (e as any)[68];
  let A: any;
  ((e as any)[69] as any) !== (I as any) || ((e as any)[70] as any) !== ($ as any) ? (A = {
    prompt: $,
    options: I
  }, (e as any)[69] = I, (e as any)[70] = $, (e as any)[71] = A) : A = (e as any)[71];
  const C: any = A;
  let V: any;
  ((e as any)[72] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (V = {
    className: "sand-78zum5 sand-dt5ytf sand-167g77z sand-h8yej3 sand-euugli"
  }, (e as any)[72] = V) : V = (e as any)[72];
  let H: any;
  ((e as any)[73] as any) !== ((u as any).step as any) ? (H = ((u as any).step as any) === (null as any) ? null : ((i as any).jsx as any)(kl, {
    step: (u as any).step
  }), (e as any)[73] = (u as any).step, (e as any)[74] = H) : H = (e as any)[74];
  const F: any = !_;
  let Y: any;
  ((e as any)[75] as any) !== (k as any) ? (Y = (B: any): any => ((k as any).send as any)({
    resolution: {
      kind: "answered",
      value: B
    },
    value: B
  }), (e as any)[75] = k, (e as any)[76] = Y) : Y = (e as any)[76];
  let R: any;
  ((e as any)[77] as any) !== ((t as any).id as any) || ((e as any)[78] as any) !== (C as any) || ((e as any)[79] as any) !== (H as any) || ((e as any)[80] as any) !== (F as any) || ((e as any)[81] as any) !== (Y as any) ? (R = ((i as any).jsx as any)(_l, {
    entryId: (t as any).id,
    headerTrailing: H,
    isReadOnly: F,
    onChoose: Y,
    widget: C
  }), (e as any)[77] = (t as any).id, (e as any)[78] = C, (e as any)[79] = H, (e as any)[80] = F, (e as any)[81] = Y, (e as any)[82] = R) : R = (e as any)[82];
  let Q: any;
  ((e as any)[83] as any) !== (k as any) ? (Q = ((i as any).jsx as any)(it, {
    tap: k
  }), (e as any)[83] = k, (e as any)[84] = Q) : Q = (e as any)[84];
  let q: any;
  return ((e as any)[85] as any) !== (R as any) || ((e as any)[86] as any) !== (Q as any) ? (q = ((i as any).jsxs as any)("div", {
    ref: h,
    ...V,
    children: [R, Q]
  }), (e as any)[85] = R, (e as any)[86] = Q, (e as any)[87] = q) : q = (e as any)[87], q;
}
function Xl(this: any, s: any): any {
  return (s as any).id;
}
function Yl(this: any, s: any): any {
  return (s as any).name;
}
function Ks(this: any, s: any): any {
  return ((s as any).type as any) === ("group" as any) ? (((s as any).listeners as any).flatMap as any)((e: any): any => (Ks as any)(e)) : [(s as any).type];
}
const Jl: any = {
  slack: "slack",
  github: "github",
  origin: "origin",
  linear: "linear",
  sentry: "sentry",
  pagerduty: "pagerduty"
};
function ei(this: any, s: any): any {
  return ((s as any).replace as any)(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Us(this: any, s: any, e: any): any {
  const t: any = ((e as any).trim as any)();
  if (((t as any).length as any) === (0 as any)) return !1;
  const n: any = new (RegExp as any)(`(^|[^A-Za-z0-9_])${(ei as any)(t)}([^A-Za-z0-9_]|$)`, "i");
  return ((s as any).some as any)((l: any): any => ((n as any).test as any)(l));
}
function ls(this: any, s: any): any {
  return [...new (Set as any)((([(s as any).displayName, (s as any).name] as any).map as any)((e: any): any => ((((e as any).trim as any)() as any).toLowerCase as any)()))];
}
function Ws(this: any, s: any, e: any): any {
  const t: any = (ls as any)(e);
  return (((((Ks as any)((s as any).trigger) as any).map as any)((l: any): any => (Jl as any)[l]) as any).some as any)((l: any): any => (l as any) !== (void 0 as any) && ((t as any).includes as any)(l)) ? !0 : ((t as any).some as any)((l: any): any => (Us as any)([(s as any).prompt, (s as any).name], l));
}
function ti(this: any, s: any, e: any): any {
  return (((e as any).automations as any).some as any)((t: any): any => (Ws as any)(t, s)) || (((ls as any)(s) as any).some as any)((t: any): any => (Us as any)((e as any).skillTexts, t));
}
function si(this: any, s: any, e: any): any {
  return (([...(e as any).skillTexts, ...(((e as any).automations as any).flatMap as any)((n: any): any => [(n as any).name, (n as any).prompt])] as any).some as any)((n: any): any => ((n as any).includes as any)(s));
}
function ps(this: any, s: any): any {
  return (s as any).done ? 2 : (s as any).checked ? 0 : 1;
}
function ni(this: any, s: any, e: any): any {
  const t: any = ((((s as any).trim as any)() as any).toLowerCase as any)();
  return ((e as any).find as any)((n: any): any => ((((n as any).pluginId as any).toLowerCase as any)() as any) === (t as any)) ?? ((e as any).find as any)((n: any): any => (((ls as any)(n) as any).includes as any)(t));
}
function li(this: any, s: any, e: any): any {
  const t: any = [],
    n: any = new (Set as any)(),
    l: any = ((s as any).slot as any).reasons ?? {},
    c: any = [...(((((s as any).slot as any).plugins ?? []) as any).map as any)((r: any): any => ({
      pick: r,
      sure: !0
    })), ...(((((s as any).slot as any).suggestions ?? []) as any).map as any)((r: any): any => ({
      pick: r,
      sure: !1
    }))];
  for (const {
    pick: r,
    sure: o
  } of c) {
    const d: any = (ni as any)(r, (s as any).ownerPlugins);
    if ((d as any) === (void 0 as any) || ((n as any).has as any)((d as any).pluginId)) continue;
    ((n as any).add as any)((d as any).pluginId);
    const a: any = ((e as any).has as any)((d as any).pluginId),
      m: any = ((Object as any).hasOwn as any)(l, r) ? (l as any)[r]?.trim() : void 0;
    ((t as any).push as any)({
      pluginId: (d as any).pluginId,
      displayName: (d as any).displayName,
      checked: o && !a,
      done: a,
      ...(o ? {
        picked: !0
      } : {}),
      ...((m as any) === (void 0 as any) || ((m as any).length as any) === (0 as any) ? {} : {
        reason: m
      })
    });
  }
  return t;
}
function ii(this: any, s: any, e: any): any {
  return (((((([...(s as any).ownerPlugins] as any).filter as any)((t: any): any => (ti as any)(t, s)) as any).sort as any)((t: any, n: any): any => (((t as any).displayName as any).localeCompare as any)((n as any).displayName)) as any).map as any)((t: any): any => {
    const n: any = ((e as any).has as any)((t as any).pluginId);
    return {
      pluginId: (t as any).pluginId,
      displayName: (t as any).displayName,
      checked: !n,
      done: n
    };
  });
}
function ai(this: any, s: any): any {
  const e: any = new (Map as any)();
  for (const t of ((s as any).filter as any)((n: any): any => !(n as any).hasConfiguredVariables)) for (const n of (t as any).variableNames) ((e as any).set as any)(n, ((e as any).get as any)(n) ?? (t as any).displayName);
  return e;
}
function oi(this: any, s: any, e: any, t: any): any {
  const n: any = e?.trim() ?? "";
  if (((n as any).length as any) > (0 as any)) return n;
  const l: any = ((Object as any).hasOwn as any)(t, s) ? (t as any)[s]?.trim() : void 0;
  return (l as any) === (void 0 as any) || ((l as any).length as any) === (0 as any) ? void 0 : l;
}
function ri(this: any, s: any): any {
  const e: any = (((s as any).slot as any).fallback as any) !== (!0 as any),
    t: any = new (Set as any)(((s as any).slot as any).secrets ?? []),
    n: any = ((s as any).slot as any).reasons ?? {},
    l: any = new (Map as any)((((s as any).botSecrets as any).map as any)((o: any): any => [(o as any).name, (o as any).description])),
    c: any = new (Set as any)([...(s as any).personalSecretNames, ...(s as any).boxCardSecretNames]),
    r: any = (ai as any)((s as any).linkedPlugins);
  return (((((((([...new (Set as any)([...c, ...t, ...((l as any).keys as any)()])] as any).filter as any)((o: any): any => ((Tl as any)(o) as any) === (null as any)) as any).sort as any)() as any).map as any)((o: any): any => {
    const d: any = ((l as any).has as any)(o),
      a: any = ((r as any).get as any)(o),
      m: any = e ? ((t as any).has as any)(o) : (si as any)(o, s),
      f: any = !d && (m || (a as any) !== (void 0 as any)),
      u: any = (oi as any)(o, ((l as any).get as any)(o), n);
    return {
      name: o,
      checked: f,
      done: d,
      needsValue: !d && !((c as any).has as any)(o),
      ...((u as any) === (void 0 as any) ? {} : {
        reason: u
      }),
      ...((a as any) === (void 0 as any) ? {} : {
        pluginName: a
      })
    };
  }) as any).sort as any)((o: any, d: any): any => ((ps as any)(o) as any) - ((ps as any)(d) as any));
}
function di(this: any, s: any): any {
  const e: any = new (Set as any)((((s as any).linkedPlugins as any).map as any)((l: any): any => (l as any).pluginId)),
    t: any = (((s as any).slot as any).fallback as any) !== (!0 as any) ? (li as any)(s, e) : (ii as any)(s, e),
    n: any = new (Set as any)(((t as any).map as any)((l: any): any => (l as any).pluginId));
  return [...t, ...(((((s as any).linkedPlugins as any).filter as any)((l: any): any => !((n as any).has as any)((l as any).pluginId)) as any).map as any)((l: any): any => ({
    pluginId: (l as any).pluginId,
    displayName: (l as any).displayName,
    checked: !1,
    done: !0
  }))];
}
function ci(this: any, s: any): any {
  const e: any = new (Set as any)((s as any).linkedPluginIds),
    t: any = [];
  for (const n of (s as any).automations) for (const l of (s as any).ownerPlugins) ((e as any).has as any)((l as any).pluginId) || !(Ws as any)(n, l) || ((t as any).push as any)({
    automationName: (n as any).name,
    pluginDisplayName: (l as any).displayName
  });
  return t;
}
function ui(this: any, s: any): any {
  return {
    name: (s as any).name,
    prompt: (s as any).prompt,
    trigger: (s as any).trigger
  };
}
function Gs(this: any, s: any): any {
  const e: any = ((ge as any).c as any)(15),
    t: any = (Jt as any)(s),
    n: any = (es as any)(s),
    l: any = (bs as any)(s),
    c: any = (Tn as any)(s);
  let r: any;
  ((e as any)[0] as any) !== (n as any) ? (r = (Lt as any)(n), (e as any)[0] = n, (e as any)[1] = r) : r = (e as any)[1];
  let o: any;
  ((e as any)[2] as any) !== ((t as any).plugins as any) || ((e as any)[3] as any) !== (l as any) ? (o = [...(((It as any)(l, []) as any).flatMap as any)(hi), ...(((((t as any).plugins as any).filter as any)(pi) as any).flatMap as any)(fi)], (e as any)[2] = (t as any).plugins, (e as any)[3] = l, (e as any)[4] = o) : o = (e as any)[4];
  let d: any;
  ((e as any)[5] as any) !== (c as any) ? (d = (((It as any)(c, []) as any).map as any)(ui), (e as any)[5] = c, (e as any)[6] = d) : d = (e as any)[6];
  let a: any;
  ((e as any)[7] as any) !== (c as any) ? (a = (Lt as any)(c), (e as any)[7] = c, (e as any)[8] = a) : a = (e as any)[8];
  let m: any;
  return ((e as any)[9] as any) !== (t as any) || ((e as any)[10] as any) !== (r as any) || ((e as any)[11] as any) !== (o as any) || ((e as any)[12] as any) !== (d as any) || ((e as any)[13] as any) !== (a as any) ? (m = {
    listing: t,
    isListingSettled: r,
    skillTexts: o,
    automations: d,
    areAutomationsSettled: a
  }, (e as any)[9] = t, (e as any)[10] = r, (e as any)[11] = o, (e as any)[12] = d, (e as any)[13] = a, (e as any)[14] = m) : m = (e as any)[14], m;
}
function fi(this: any, s: any): any {
  return (((s as any).skills as any).flatMap as any)(mi);
}
function mi(this: any, s: any): any {
  return [(s as any).name, (s as any).content];
}
function pi(this: any, s: any): any {
  return (s as any).isBotSkills;
}
function hi(this: any, s: any): any {
  return [(s as any).name, (s as any).description, (s as any).body];
}
function qs(this: any, s: any, e: any, t: any): any {
  const n: any = ((ge as any).c as any)(18),
    l: any = (xt as any)(s),
    {
      grokBotSecrets: c
    }: any = (yt as any)();
  (qt as any)((c as any).loadPersonalNames), (qt as any)((c as any).loadBoxCardNames);
  const r: any = (wn as any)(),
    o: any = (Cn as any)(),
    d: any = (_n as any)(l?.serverId ?? null);
  let a: any;
  ((n as any)[0] as any) !== (d as any) || ((n as any)[1] as any) !== (o as any) || ((n as any)[2] as any) !== (r as any) || ((n as any)[3] as any) !== (e as any) || ((n as any)[4] as any) !== ((t as any).automations as any) || ((n as any)[5] as any) !== (((t as any).listing as any).plugins as any) || ((n as any)[6] as any) !== ((t as any).skillTexts as any) ? (a = (ri as any)({
    slot: e,
    personalSecretNames: (It as any)(r, []),
    boxCardSecretNames: (It as any)(o, []),
    botSecrets: (It as any)(d, []),
    linkedPlugins: ((((t as any).listing as any).plugins as any).map as any)(gi),
    skillTexts: (t as any).skillTexts,
    automations: (t as any).automations
  }), (n as any)[0] = d, (n as any)[1] = o, (n as any)[2] = r, (n as any)[3] = e, (n as any)[4] = (t as any).automations, (n as any)[5] = ((t as any).listing as any).plugins, (n as any)[6] = (t as any).skillTexts, (n as any)[7] = a) : a = (n as any)[7];
  const m: any = ((o as any).status as any) === ("failed" as any);
  let f: any;
  ((n as any)[8] as any) !== (d as any) || ((n as any)[9] as any) !== (o as any) || ((n as any)[10] as any) !== (r as any) || ((n as any)[11] as any) !== ((t as any).areAutomationsSettled as any) || ((n as any)[12] as any) !== ((t as any).isListingSettled as any) ? (f = (Lt as any)(d) && (Lt as any)(r) && (Lt as any)(o) && (t as any).isListingSettled && (t as any).areAutomationsSettled, (n as any)[8] = d, (n as any)[9] = o, (n as any)[10] = r, (n as any)[11] = (t as any).areAutomationsSettled, (n as any)[12] = (t as any).isListingSettled, (n as any)[13] = f) : f = (n as any)[13];
  let u: any;
  return ((n as any)[14] as any) !== (a as any) || ((n as any)[15] as any) !== (m as any) || ((n as any)[16] as any) !== (f as any) ? (u = {
    rows: a,
    isBoxCardUnreachable: m,
    isSettled: f
  }, (n as any)[14] = a, (n as any)[15] = m, (n as any)[16] = f, (n as any)[17] = u) : u = (n as any)[17], u;
}
function gi(this: any, s: any): any {
  return {
    pluginId: (s as any).pluginId,
    displayName: (s as any).displayName,
    variableNames: (s as any).variableNames,
    hasConfiguredVariables: ((s as any).hasConfiguredVariables as any) === (!0 as any)
  };
}
const hs: any = new (Set as any)();
function ki(this: any, s: any): any {
  return (s?.iconUrl as any) != (null as any) && (((s as any).iconUrl as any).length as any) > (0 as any) ? `url:${(s as any).iconUrl}` : (s?.iconId as any) != (null as any) && (((s as any).iconId as any).length as any) > (0 as any) ? `id:${(s as any).iconId}` : "plug";
}
function yi(this: any, s: any): any {
  return (ss as any)(s, (e: any): any => (ki as any)((e as any).icon), (e: any, t: any): any => ((G as any).createElement as any)(Ss, {
    ...(e as any).icon,
    fallbackChip: "setup",
    key: t,
    monoFallback: "plug",
    name: (e as any).displayName,
    size: xl
  }));
}
function xi(this: any): any {}
function is(this: any, s: any): any {
  (is as any).d = 519;
  const e: any = ((ge as any).c as any)(89),
    {
      entry: t,
      slot: n,
      agentId: l,
      isReadOnly: c,
      isExpanded: r,
      onExpand: o,
      onCollapse: d
    }: any = s,
    {
      _: a
    }: any = (st as any)(),
    {
      isChained: m
    }: any = (At as any)(),
    f: any = ((G as any).useId as any)(),
    u: any = (xt as any)(l),
    {
      mcp: p,
      localAnswers: y
    }: any = (yt as any)(),
    {
      plugins: h
    }: any = (In as any)(),
    {
      catalog: b,
      hasMarketplaceLoaded: E
    }: any = (Rn as any)(),
    j: any = (un as any)(b),
    N: any = (S: any): any => (j as any)(((h as any).find as any)((te: any): any => ((te as any).pluginId as any) === ((S as any).pluginId as any))?.name ?? (S as any).displayName),
    k: any = (Gs as any)(l),
    _: any = (qs as any)(l, n, k),
    T: any = (On as any)(),
    D: any = ((G as any).useContext as any)(Qt),
    O: any = (Ct as any)("grok_bot_multiplayer"),
    $: any = (lt as any)((t as any).id, "plugins"),
    P: any = (l as any) == (null as any) ? null : {
      agentId: l,
      entryId: $
    },
    z: any = (at as any)("widget", {
      agentId: l,
      entryId: $
    }),
    I: any = (El as any)(l);
  let A: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (A = {
    kind: "idle"
  }, (e as any)[0] = A) : A = (e as any)[0];
  const [C, V]: any = ((G as any).useState as any)(A),
    [H, F]: any = ((G as any).useState as any)(hs);
  let Y: any;
  ((e as any)[1] as any) !== (l as any) || ((e as any)[2] as any) !== ((t as any).id as any) || ((e as any)[3] as any) !== (d as any) || ((e as any)[4] as any) !== (o as any) || ((e as any)[5] as any) !== ((n as any).status as any) ? (Y = {
    agentId: l,
    entryId: (t as any).id,
    kind: "plugins",
    slotStatus: (n as any).status,
    sandArea: "team-carry-over",
    onExpand: o,
    onCollapse: d
  }, (e as any)[1] = l, (e as any)[2] = (t as any).id, (e as any)[3] = d, (e as any)[4] = o, (e as any)[5] = (n as any).status, (e as any)[6] = Y) : Y = (e as any)[6];
  const R: any = (Nt as any)(Y),
    Q: any = ((((h as any).filter as any)(Ai) as any).map as any)(Ei);
  let q: any;
  ((e as any)[7] as any) !== (b as any) ? (q = (S: any): any => (fn as any)((S as any).pluginId, b), (e as any)[7] = b, (e as any)[8] = q) : q = (e as any)[8];
  const B: any = (di as any)({
      slot: n,
      ownerPlugins: ((Q as any).filter as any)(q),
      linkedPlugins: ((((((k as any).listing as any).plugins as any).filter as any)(Oi) as any).map as any)(Ri),
      skillTexts: (k as any).skillTexts,
      automations: (k as any).automations
    }),
    L: any = (En as any)((n as any).status, z),
    ce: any = (Vt as any)(L, r),
    Re: any = ((((n as any).plugins?.length ?? 0) as any) + (((n as any).suggestions?.length ?? 0) as any) as any) > (0 as any),
    Ke: any = ((B as any).length as any) === (0 as any) && !Re && (((n as any).fallback as any) !== (!0 as any) || (k as any).areAutomationsSettled),
    Ge: any = ((B as any).slice as any)(0, Ot),
    Le: any = (S: any): any => ((I as any).get as any)((S as any).pluginId) ?? (!ce && (S as any).checked && ((Ge as any).includes as any)(S)),
    se: any = ((B as any).filter as any)((S: any): any => !(S as any).done && (Le as any)(S)),
    Z: any = r ? ((B as any).filter as any)((S: any): any => (S as any).done && ((H as any).has as any)((S as any).pluginId)) : [],
    J: any = new (Set as any)(((Z as any).map as any)(Ii));
  ((J as any).size as any) !== ((H as any).size as any) && (F as any)(J);
  let xe: any;
  ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (xe = (S: any, te: any): any => {
    (F as any)((We: any): any => {
      const we: any = new (Set as any)(We);
      return te ? ((we as any).delete as any)(S) : ((we as any).add as any)(S), we;
    });
  }, (e as any)[9] = xe) : xe = (e as any)[9];
  const Ce: any = xe,
    ne: any = ((((B as any).filter as any)((S: any): any => (S as any).done || (Le as any)(S)) as any).map as any)(Ti);
  let Oe: any;
  ((e as any)[10] as any) !== ((t as any).event as any) ? (Oe = (((t as any).event as any).type as any) === ("team-shared" as any) && ((Dt as any)((t as any).event, "secrets") as any) === (void 0 as any), (e as any)[10] = (t as any).event, (e as any)[11] = Oe) : Oe = (e as any)[11];
  const le: any = Oe,
    ke: any = le && (_ as any).isSettled,
    _e: any = !c && (l as any) != (null as any) && (u?.harness as any) === ("temporal" as any) && ((u as any).viewerIsOwner as any) !== (!1 as any) && ((u as any).visibility as any) === ((Mt as any).team as any),
    pe: any = _e && E && (k as any).areAutomationsSettled && ((_ as any).isSettled || !le),
    Me: any = (Et as any)(u, O),
    qe: any = (Pi as any)((C as any).kind, L, r, Me),
    Ue: any = (l as any) != (null as any) && _e && (qe as any) === ("proposed" as any);
  let re: any;
  ((e as any)[12] as any) !== (l as any) || ((e as any)[13] as any) !== (Ue as any) ? (re = (): any => (l as any) == (null as any) || !Ue ? _i : (): any => (Kt as any)(l), (e as any)[12] = l, (e as any)[13] = Ue, (e as any)[14] = re) : re = (e as any)[14], (zt as any)(re), (zt as any)((): any => (l as any) == (null as any) || !Ue ? Ci : ((Al as any)(l, ne), wi)), (qt as any)((qe as any) === ("proposed" as any) ? (p as any).refreshEffectivePlugins : xi);
  const Je: any = (((t as any).event as any).type as any) === ("team-shared" as any) && (((t as any).event as any).unshared as any) === (!0 as any),
    je: any = (((t as any).event as any).type as any) === ("team-shared" as any) && (((t as any).event as any).setup as any) === (!0 as any);
  let Xe: any;
  ((e as any)[15] as any) !== (a as any) || ((e as any)[16] as any) !== (je as any) ? (Xe = (a as any)(je ? {
    id: "HmBCWT"
  } : {
    id: "yEypon"
  }), (e as any)[15] = a, (e as any)[16] = je, (e as any)[17] = Xe) : Xe = (e as any)[17];
  const He: any = Xe,
    he: any = _e && (D as any) != (null as any) && Me ? (D as any).openTeamBotPlugins : null;
  let Ee: any;
  ((e as any)[18] as any) !== (R as any) ? (Ee = (S: any, te: any): any => {
    const {
        body: We,
        offersSecrets: we
      }: any = (Pn as any)(S),
      nt: any = bi;
    ((R as any).send as any)(we ? {
      ...(nt as any)(S),
      fallback: (nt as any)(We)
    } : (nt as any)(S), te);
  }, (e as any)[18] = R, (e as any)[19] = Ee) : Ee = (e as any)[19];
  const ze: any = Ee,
    De: any = (): any => {
      if (!pe || (P as any) == (null as any)) return;
      (Kt as any)((P as any).agentId);
      const S: any = (cs as any)(Nn, ke);
      if (((n as any).status as any) === ("proposed" as any)) {
        (ze as any)(S);
        return;
      }
      (((y as any).get as any)("widget", P) as any) == (null as any) && ((y as any).record as any)("widget", P, {
        kind: "answered",
        value: S
      }), (d as any)();
    },
    Ye: any = async (): Promise<any> => {
      if (!pe || (l as any) == (null as any) || ((C as any).kind as any) === ("running" as any)) return;
      (V as any)({
        kind: "running"
      });
      const S: any = await (Ni as any)({
        agentId: l,
        tickedPlugins: se,
        removedPluginIds: J,
        linked: ((k as any).listing as any).plugins,
        automations: (k as any).automations,
        ownerPlugins: Q,
        setPlugins: T
      });
      if (((S as any).kind as any) === ("failed" as any)) {
        (V as any)({
          kind: "idle",
          didFail: !0
        });
        return;
      }
      (Kt as any)(l), (F as any)(hs), (V as any)(S), (ze as any)((cs as any)(Ln, ke), (): any => (V as any)({
        kind: "idle"
      }));
    };
  let Qe: any;
  ((e as any)[20] as any) !== (((k as any).listing as any).plugins as any) ? (Qe = ((((k as any).listing as any).plugins as any).some as any)(vi), (e as any)[20] = ((k as any).listing as any).plugins, (e as any)[21] = Qe) : Qe = (e as any)[21];
  const Ae: any = Qe,
    Se: any = ((se as any).length as any) > (0 as any) || ((Z as any).length as any) > (0 as any),
    et: any = async (): Promise<any> => {
      if (!Se && ce) {
        (d as any)();
        return;
      }
      if (!Se && !Ae) {
        (De as any)();
        return;
      }
      await (Ye as any)();
    };
  if ((qe as any) === ("empty" as any) || (qe as any) === ("proposing" as any)) return null;
  let Pe: any;
  ((e as any)[22] as any) !== (Se as any) || ((e as any)[23] as any) !== (Ae as any) || ((e as any)[24] as any) !== (m as any) ? (Pe = m && !Se && !Ae ? ((i as any).jsx as any)(w, {
    id: "6Uau97"
  }) : ((i as any).jsx as any)(w, {
    id: "xGVfLh"
  }), (e as any)[22] = Se, (e as any)[23] = Ae, (e as any)[24] = m, (e as any)[25] = Pe) : Pe = (e as any)[25];
  const Ne: any = Pe;
  let Te: any;
  ((e as any)[26] as any) !== (a as any) ? (Te = (a as any)({
    id: "ohUJJM"
  }), (e as any)[26] = a, (e as any)[27] = Te) : Te = (e as any)[27];
  const ie: any = Te;
  if (!r && ((C as any).kind as any) === ("running" as any)) {
    let S: any;
    ((e as any)[28] as any) !== (je as any) ? (S = je ? ((i as any).jsx as any)(w, {
      id: "O7rjNS"
    }) : ((i as any).jsx as any)(w, {
      id: "ufVwAS"
    }), (e as any)[28] = je, (e as any)[29] = S) : S = (e as any)[29];
    let te: any;
    return ((e as any)[30] as any) !== (S as any) || ((e as any)[31] as any) !== (ie as any) || ((e as any)[32] as any) !== (f as any) ? (te = ((i as any).jsx as any)(bt, {
      title: ie,
      titleId: f,
      children: S
    }), (e as any)[30] = S, (e as any)[31] = ie, (e as any)[32] = f, (e as any)[33] = te) : te = (e as any)[33], te;
  }
  let Ve: any;
  ((e as any)[34] as any) !== (a as any) || ((e as any)[35] as any) !== ((k as any).isListingSettled as any) ? (Ve = (S: any): any => ((S as any).length as any) === (0 as any) ? ((i as any).jsx as any)(ft, {
    emptyLabel: (k as any).isListingSettled ? (a as any)({
      id: "Vq6/r4"
    }) : "",
    icons: [((i as any).jsx as any)(kt, {
      name: "plug"
    }, "plug")],
    names: []
  }) : ((i as any).jsx as any)(ft, {
    countLabelOf: (te: any): any => (a as any)({
      id: "u+kC2l",
      values: {
        count: te
      }
    }),
    icons: (yi as any)(S),
    names: ((S as any).map as any)(ji)
  }), (e as any)[34] = a, (e as any)[35] = (k as any).isListingSettled, (e as any)[36] = Ve) : Ve = (e as any)[36];
  const $e: any = Ve,
    v: any = ((((((k as any).listing as any).plugins as any).filter as any)(Si) as any).map as any)((S: any): any => ({
      pluginId: (S as any).pluginId,
      displayName: (S as any).displayName,
      icon: (j as any)(((h as any).find as any)((te: any): any => ((te as any).pluginId as any) === ((S as any).pluginId as any))?.name ?? (S as any).displayName)
    }));
  if ((qe as any) === ("dismissed" as any)) {
    const S: any = !c && !Je;
    let te: any;
    return ((e as any)[37] as any) !== (S as any) || ((e as any)[38] as any) !== (o as any) || ((e as any)[39] as any) !== ((k as any).isListingSettled as any) || ((e as any)[40] as any) !== (ie as any) ? (te = S && (k as any).isListingSettled ? ((i as any).jsx as any)(vt, {
      name: ie,
      onClick: o
    }) : null, (e as any)[37] = S, (e as any)[38] = o, (e as any)[39] = (k as any).isListingSettled, (e as any)[40] = ie, (e as any)[41] = te) : te = (e as any)[41], ((i as any).jsx as any)(Fe, {
      isExpanded: !1,
      onExpand: S ? o : void 0,
      summary: ($e as any)(v),
      title: ie,
      titleId: f,
      trailing: te
    });
  }
  if ((qe as any) === ("carried" as any)) {
    let S: any = ($e as any)(v);
    if ((k as any).isListingSettled && ((v as any).length as any) === (0 as any) && ((n as any).already as any) === (!0 as any)) {
      let we: any;
      ((e as any)[42] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (we = ((i as any).jsx as any)(Yt, {
        level: "body2",
        children: ((i as any).jsx as any)(w, {
          id: "3WW0fm"
        })
      }), (e as any)[42] = we) : we = (e as any)[42], S = we;
    }
    const te: any = (he as any) != (null as any) && !Je && (k as any).isListingSettled;
    let We: any;
    return ((e as any)[43] as any) !== (je as any) || ((e as any)[44] as any) !== ((C as any).kind as any) || ((e as any)[45] as any) !== ((C as any).result as any) ? (We = ((C as any).kind as any) === ("done" as any) ? ((i as any).jsx as any)(Zs, {
      isSetup: je,
      result: (C as any).result
    }) : null, (e as any)[43] = je, (e as any)[44] = (C as any).kind, (e as any)[45] = (C as any).result, (e as any)[46] = We) : We = (e as any)[46], ((i as any).jsx as any)(Fe, {
      details: We,
      isExpanded: !1,
      summary: S,
      title: ie,
      titleId: f,
      trailing: te ? ((i as any).jsx as any)(vt, {
        name: ie,
        onClick: ((v as any).length as any) === (0 as any) ? he : o
      }) : null
    });
  }
  if (!r) {
    let S: any = null;
    if (((se as any).length as any) > (0 as any) ? S = je ? ((i as any).jsx as any)(w, {
      id: "6QB8jZ",
      values: {
        0: (se as any).length
      }
    }) : ((i as any).jsx as any)(w, {
      id: "OlMATe",
      values: {
        0: (se as any).length
      }
    }) : !Ke && (k as any).areAutomationsSettled && E && (S = He), ((C as any).kind as any) === ("idle" as any) && ((C as any).didFail as any) === (!0 as any)) {
      let we: any;
      ((e as any)[47] as any) !== (a as any) ? (we = (a as any)({
        id: "xRmr0p"
      }), (e as any)[47] = a, (e as any)[48] = we) : we = (e as any)[48], S = we;
    }
    let te: any;
    ((e as any)[49] as any) !== (R as any) ? (te = ((i as any).jsx as any)(it, {
      tap: R
    }), (e as any)[49] = R, (e as any)[50] = te) : te = (e as any)[50];
    let We: any;
    return ((e as any)[51] as any) !== (o as any) || ((e as any)[52] as any) !== (S as any) || ((e as any)[53] as any) !== (te as any) || ((e as any)[54] as any) !== (ie as any) || ((e as any)[55] as any) !== (f as any) ? (We = ((i as any).jsx as any)(Fe, {
      details: te,
      isExpanded: !1,
      isSummaryPending: !0,
      onExpand: o,
      summary: S,
      title: ie,
      titleId: f
    }), (e as any)[51] = o, (e as any)[52] = S, (e as any)[53] = te, (e as any)[54] = ie, (e as any)[55] = f, (e as any)[56] = We) : We = (e as any)[56], We;
  }
  const W: any = ((C as any).kind as any) === ("running" as any),
    ye: any = Fe;
  let oe: any;
  ((e as any)[57] as any) !== (a as any) ? (oe = (a as any)({
    id: "v6CcJp"
  }), (e as any)[57] = a, (e as any)[58] = oe) : oe = (e as any)[58];
  const ve: any = Ke ? null : ((i as any).jsx as any)(_t, {
    emptyLabel: (k as any).areAutomationsSettled && E ? He : void 0,
    hasIcons: !0,
    title: je ? void 0 : (a as any)({
      id: "RKcqkX"
    }),
    children: ((Ge as any).map as any)((S: any): any => ((i as any).jsx as any)(Tt, {
      icon: ((i as any).jsx as any)(Ss, {
        ...(N as any)(S),
        fallbackChip: "setup",
        monoFallback: "plug",
        name: (S as any).displayName,
        size: yl
      }),
      isChecked: (S as any).done ? !((H as any).has as any)((S as any).pluginId) : (Le as any)(S),
      isDisabled: W || !_e,
      title: (S as any).displayName,
      onChange: (te: any): any => {
        (S as any).done ? (Ce as any)((S as any).pluginId, te) : (l as any) != (null as any) && (Pl as any)(l, (S as any).pluginId, te);
      }
    }, (S as any).pluginId))
  });
  let ue: any;
  ((e as any)[59] as any) !== ((C as any).didFail as any) || ((e as any)[60] as any) !== ((C as any).kind as any) ? (ue = ((C as any).kind as any) === ("idle" as any) && ((C as any).didFail as any) === (!0 as any) ? ((i as any).jsx as any)(Ze, {
    children: ((i as any).jsx as any)(w, {
      id: "xRmr0p"
    })
  }) : null, (e as any)[59] = (C as any).didFail, (e as any)[60] = (C as any).kind, (e as any)[61] = ue) : ue = (e as any)[61];
  let de: any;
  ((e as any)[62] as any) !== (R as any) ? (de = ((i as any).jsx as any)(it, {
    tap: R
  }), (e as any)[62] = R, (e as any)[63] = de) : de = (e as any)[63];
  const be: any = W || !pe;
  let fe: any;
  ((e as any)[64] as any) !== (et as any) ? (fe = (): any => {
    (et as any)();
  }, (e as any)[64] = et, (e as any)[65] = fe) : fe = (e as any)[65];
  let Be: any;
  ((e as any)[66] as any) !== (Ne as any) || ((e as any)[67] as any) !== (ce as any) ? (Be = ce ? ((i as any).jsx as any)(w, {
    id: "DPfwMq"
  }) : Ne, (e as any)[66] = Ne, (e as any)[67] = ce, (e as any)[68] = Be) : Be = (e as any)[68];
  let x: any;
  ((e as any)[69] as any) !== (W as any) || ((e as any)[70] as any) !== (be as any) || ((e as any)[71] as any) !== (fe as any) || ((e as any)[72] as any) !== (Be as any) ? (x = ((i as any).jsx as any)(Ft, {
    disabled: be,
    onClick: fe,
    pending: W,
    children: Be
  }), (e as any)[69] = W, (e as any)[70] = be, (e as any)[71] = fe, (e as any)[72] = Be, (e as any)[73] = x) : x = (e as any)[73];
  let K: any;
  ((e as any)[74] as any) !== (he as any) || ((e as any)[75] as any) !== (W as any) ? (K = (he as any) == (null as any) ? null : ((i as any).jsx as any)(rt, {
    disabled: W,
    onClick: he,
    variant: "secondary",
    children: ((i as any).jsx as any)(w, {
      id: "vr9OIt"
    })
  }), (e as any)[74] = he, (e as any)[75] = W, (e as any)[76] = K) : K = (e as any)[76];
  let X: any;
  ((e as any)[77] as any) !== (x as any) || ((e as any)[78] as any) !== (K as any) ? (X = ((i as any).jsxs as any)(Pt, {
    children: [x, K]
  }), (e as any)[77] = x, (e as any)[78] = K, (e as any)[79] = X) : X = (e as any)[79];
  let ee: any;
  return ((e as any)[80] as any) !== (ye as any) || ((e as any)[81] as any) !== (o as any) || ((e as any)[82] as any) !== (oe as any) || ((e as any)[83] as any) !== (ve as any) || ((e as any)[84] as any) !== (ue as any) || ((e as any)[85] as any) !== (de as any) || ((e as any)[86] as any) !== (X as any) || ((e as any)[87] as any) !== (f as any) ? (ee = ((i as any).jsxs as any)(ye, {
    onExpand: o,
    title: oe,
    titleId: f,
    children: [ve, ue, de, X]
  }), (e as any)[80] = ye, (e as any)[81] = o, (e as any)[82] = oe, (e as any)[83] = ve, (e as any)[84] = ue, (e as any)[85] = de, (e as any)[86] = X, (e as any)[87] = f, (e as any)[88] = ee) : ee = (e as any)[88], ee;
}
function Si(this: any, s: any): any {
  return !(s as any).isBotSkills;
}
function ji(this: any, s: any): any {
  return (s as any).displayName;
}
function vi(this: any, s: any): any {
  return !(s as any).isBotSkills;
}
function bi(this: any, s: any): any {
  return {
    resolution: {
      kind: "answered",
      value: s
    },
    value: s
  };
}
function wi(this: any): any {}
function Ci(this: any): any {}
function _i(this: any): any {}
function Ti(this: any, s: any): any {
  return (s as any).pluginId;
}
function Ii(this: any, s: any): any {
  return (s as any).pluginId;
}
function Ri(this: any, s: any): any {
  return {
    pluginId: (s as any).pluginId,
    displayName: (s as any).displayName,
    variableNames: (s as any).variableNames,
    hasConfiguredVariables: ((s as any).hasConfiguredVariables as any) === (!0 as any)
  };
}
function Oi(this: any, s: any): any {
  return !(s as any).isBotSkills;
}
function Ei(this: any, s: any): any {
  return {
    pluginId: (s as any).pluginId,
    name: (s as any).name,
    displayName: (s as any).displayName
  };
}
function Ai(this: any, s: any): any {
  return (s as any).isEnabled;
}
function Pi(this: any, s: any, e: any, t: any, n: any): any {
  const l: any = (s as any) === ("done" as any) ? "carried" : e;
  return (l as any) === ("dismissed" as any) && t || (l as any) === ("carried" as any) && t && n ? "proposed" : l;
}
async function Ni(this: any, s: any): Promise<any> {
  try {
    let e: any = (s as any).linked;
    return ((((s as any).tickedPlugins as any).length as any) > (0 as any) || (((s as any).removedPluginIds as any).size as any) > (0 as any)) && (e = ((await ((s as any).setPlugins as any)((s as any).agentId, [...(An as any)((((s as any).linked as any).filter as any)((n: any): any => !(((s as any).removedPluginIds as any).has as any)((n as any).pluginId))), ...(((s as any).tickedPlugins as any).map as any)((n: any): any => ({
      kind: "plugin",
      pluginId: (n as any).pluginId
    }))])) as any).plugins), {
      kind: "done",
      result: {
        plugins: (((e as any).filter as any)((t: any): any => !(t as any).isBotSkills) as any).length,
        gaps: (ci as any)({
          automations: (s as any).automations,
          ownerPlugins: (s as any).ownerPlugins,
          linkedPluginIds: ((e as any).map as any)((t: any): any => (t as any).pluginId)
        })
      }
    };
  } catch (e: any) {
    return (wt as any)(e, {
      tags: {
        sand_area: "team-carry-over"
      }
    }), {
      kind: "failed"
    };
  }
}
function Zs(this: any, s: any): any {
  (Zs as any).d = 518;
  const e: any = ((ge as any).c as any)(11),
    {
      result: t,
      isSetup: n
    }: any = s,
    {
      _: l
    }: any = (st as any)();
  let c: any;
  ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== ((t as any).plugins as any) ? (c = ((t as any).plugins as any) === (0 as any) ? ((i as any).jsx as any)(Ze, {
    children: n ? ((i as any).jsx as any)(w, {
      id: "yHD/Ey"
    }) : ((i as any).jsx as any)(w, {
      id: "2xekCO"
    })
  }) : null, (e as any)[0] = n, (e as any)[1] = (t as any).plugins, (e as any)[2] = c) : c = (e as any)[2];
  let r: any;
  if (((e as any)[3] as any) !== (l as any) || ((e as any)[4] as any) !== ((t as any).gaps as any)) {
    let d: any;
    ((e as any)[6] as any) !== (l as any) ? (d = (a: any): any => ((i as any).jsx as any)(Ze, {
      children: (l as any)({
        id: "ffSl//",
        values: {
          0: (a as any).automationName,
          1: (a as any).pluginDisplayName
        }
      })
    }, `${(a as any).automationName}:${(a as any).pluginDisplayName}`), (e as any)[6] = l, (e as any)[7] = d) : d = (e as any)[7], r = (((t as any).gaps as any).map as any)(d), (e as any)[3] = l, (e as any)[4] = (t as any).gaps, (e as any)[5] = r;
  } else r = (e as any)[5];
  let o: any;
  return ((e as any)[8] as any) !== (c as any) || ((e as any)[9] as any) !== (r as any) ? (o = ((i as any).jsxs as any)((i as any).Fragment, {
    children: [c, r]
  }), (e as any)[8] = c, (e as any)[9] = r, (e as any)[10] = o) : o = (e as any)[10], o;
}
function as(this: any, s: any): any {
  (as as any).d = 520;
  const e: any = ((ge as any).c as any)(133),
    {
      entry: t,
      slot: n,
      agentId: l,
      isReadOnly: c,
      isExpanded: r,
      onExpand: o,
      onCollapse: d
    }: any = s,
    {
      _: a
    }: any = (st as any)(),
    {
      isChained: m
    }: any = (At as any)(),
    f: any = ((G as any).useId as any)(),
    u: any = (xt as any)(l),
    p: any = (es as any)(l),
    y: any = (Jt as any)(l),
    h: any = (ws as any)(),
    b: any = (Mn as any)(),
    E: any = (Cs as any)(),
    j: any = (_s as any)(),
    {
      localAnswers: N,
      workflows: k
    }: any = (yt as any)(),
    _: any = ((G as any).useContext as any)(Qt),
    T: any = (Ct as any)("grok_bot_multiplayer");
  let D: any;
  ((e as any)[0] as any) !== ((t as any).id as any) ? (D = (lt as any)((t as any).id, "files"), (e as any)[0] = (t as any).id, (e as any)[1] = D) : D = (e as any)[1];
  const O: any = D;
  let $: any;
  ((e as any)[2] as any) !== (l as any) || ((e as any)[3] as any) !== (O as any) ? ($ = (l as any) == (null as any) ? null : {
    agentId: l,
    entryId: O
  }, (e as any)[2] = l, (e as any)[3] = O, (e as any)[4] = $) : $ = (e as any)[4];
  const P: any = $;
  let z: any;
  ((e as any)[5] as any) !== (l as any) || ((e as any)[6] as any) !== (O as any) ? (z = {
    agentId: l,
    entryId: O
  }, (e as any)[5] = l, (e as any)[6] = O, (e as any)[7] = z) : z = (e as any)[7];
  const I: any = (at as any)("widget", z);
  let A: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (A = {
    kind: "idle"
  }, (e as any)[8] = A) : A = (e as any)[8];
  const [C, V]: any = ((G as any).useState as any)(A);
  let H: any;
  ((e as any)[9] as any) !== (l as any) || ((e as any)[10] as any) !== ((t as any).id as any) || ((e as any)[11] as any) !== (d as any) || ((e as any)[12] as any) !== (o as any) || ((e as any)[13] as any) !== ((n as any).status as any) ? (H = {
    agentId: l,
    entryId: (t as any).id,
    kind: "files",
    slotStatus: (n as any).status,
    sandArea: "team-files",
    onExpand: o,
    onCollapse: d
  }, (e as any)[9] = l, (e as any)[10] = (t as any).id, (e as any)[11] = d, (e as any)[12] = o, (e as any)[13] = (n as any).status, (e as any)[14] = H) : H = (e as any)[14];
  const F: any = (Nt as any)(H);
  let Y: any;
  ((e as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Y = [], (e as any)[15] = Y) : Y = (e as any)[15];
  const [R, Q]: any = ((G as any).useState as any)(Y),
    q: any = ((G as any).useRef as any)(null);
  let B: any;
  ((e as any)[16] as any) !== (p as any) ? (B = (Gt as any)(p) || ((p as any).status as any) === ("empty" as any), (e as any)[16] = p, (e as any)[17] = B) : B = (e as any)[17];
  const L: any = B;
  let ce: any, Re: any;
  if (((e as any)[18] as any) !== (r as any) || ((e as any)[19] as any) !== (I as any) || ((e as any)[20] as any) !== ((n as any).status as any)) {
    const x: any = ($n as any)((n as any).status, I);
    ce = (x as any) === ("dismissed" as any) && r ? "proposed" : x, Re = (Vt as any)(x, r), (e as any)[18] = r, (e as any)[19] = I, (e as any)[20] = (n as any).status, (e as any)[21] = ce, (e as any)[22] = Re;
  } else ce = (e as any)[21], Re = (e as any)[22];
  const Ke: any = Re,
    Ge: any = L ? ((((Ts as any)((y as any).plugins) as any).fileSkills as any).map as any)(Di) : [],
    Le: any = new (Set as any)(((Ge as any).map as any)(zi)),
    se: any = [...Ge, ...((R as any).filter as any)((x: any): any => !((Le as any).has as any)((x as any).key))],
    Z: any = !c && (l as any) != (null as any) && (u?.harness as any) === ("temporal" as any) && ((u as any).viewerIsOwner as any) !== (!1 as any) && ((u as any).visibility as any) === ((Mt as any).team as any),
    J: any = ((C as any).kind as any) === ("running" as any),
    xe: any = !L && ((p as any).status as any) !== ("loading" as any),
    Ce: any = J || !Z || xe,
    ne: any = !L && ((p as any).status as any) === ("loading" as any),
    Oe: any = (((t as any).event as any).type as any) === ("team-shared" as any) && (((t as any).event as any).unshared as any) === (!0 as any),
    le: any = Z && !Oe;
  let ke: any;
  ((e as any)[23] as any) !== (u as any) || ((e as any)[24] as any) !== (Z as any) || ((e as any)[25] as any) !== (T as any) ? (ke = Z && (Et as any)(u, T), (e as any)[23] = u, (e as any)[24] = Z, (e as any)[25] = T, (e as any)[26] = ke) : ke = (e as any)[26];
  const _e: any = ke;
  let pe: any;
  ((e as any)[27] as any) !== (l as any) || ((e as any)[28] as any) !== (b as any) ? (pe = (): any => (l as any) == (null as any) ? ((Promise as any).resolve as any)(null) : (b as any)(l), (e as any)[27] = l, (e as any)[28] = b, (e as any)[29] = pe) : pe = (e as any)[29];
  let Me: any;
  ((e as any)[30] as any) !== (E as any) || ((e as any)[31] as any) !== (l as any) || ((e as any)[32] as any) !== (h as any) || ((e as any)[33] as any) !== (k as any) ? (Me = async (x: any): Promise<any> => {
    if ((l as any) == (null as any)) return 0;
    const K: any = [];
    for (const X of x) {
      const ee: any = (X as any).name;
      if ((ee as any) == (null as any)) continue;
      ((await (gs as any)((): any => (E as any)(l, {
        name: ee,
        content: (X as any).content
      }))) as any) === (void 0 as any) && ((K as any).push as any)((Hs as any)({
        name: ee,
        content: (X as any).content
      }));
    }
    return ((K as any).length as any) > (0 as any) && ((Q as any)((X: any): any => [...X, ...K]), (h as any)(l), ((k as any).refresh as any)(l)), (K as any).length;
  }, (e as any)[30] = E, (e as any)[31] = l, (e as any)[32] = h, (e as any)[33] = k, (e as any)[34] = Me) : Me = (e as any)[34];
  let qe: any;
  ((e as any)[35] as any) !== (pe as any) || ((e as any)[36] as any) !== (Me as any) ? (qe = {
    readListing: pe,
    addSkills: Me
  }, (e as any)[35] = pe, (e as any)[36] = Me, (e as any)[37] = qe) : qe = (e as any)[37];
  let Ue: any;
  ((e as any)[38] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ue = {
    fileInputRef: q,
    folderInputRef: q
  }, (e as any)[38] = Ue) : Ue = (e as any)[38];
  const re: any = (Ll as any)(qe, Ce, Ue),
    Je: any = (Bn as any)();
  let je: any;
  ((e as any)[39] as any) !== (re as any) ? (je = (x: any): any => ((re as any).ingestFiles as any)(x), (e as any)[39] = re, (e as any)[40] = je) : je = (e as any)[40];
  const Xe: any = (Xt as any)(je),
    He: any = !Ce && (Je as any) != (null as any) && (ce as any) === ("proposed" as any);
  let he: any;
  ((e as any)[41] as any) !== (l as any) || ((e as any)[42] as any) !== (Je as any) || ((e as any)[43] as any) !== (He as any) || ((e as any)[44] as any) !== (Xe as any) ? (he = (): any => !He || (l as any) == (null as any) ? Bi : ((Je as any).attach as any)(l, Xe), (e as any)[41] = l, (e as any)[42] = Je, (e as any)[43] = He, (e as any)[44] = Xe, (e as any)[45] = he) : he = (e as any)[45], (zt as any)(he);
  let Ee: any;
  ((e as any)[46] as any) !== (Z as any) || ((e as any)[47] as any) !== (J as any) || ((e as any)[48] as any) !== (N as any) || ((e as any)[49] as any) !== (P as any) || ((e as any)[50] as any) !== (d as any) || ((e as any)[51] as any) !== ((n as any).status as any) || ((e as any)[52] as any) !== (F as any) ? (Ee = (): any => {
    if (!((P as any) == (null as any) || J || !Z)) {
      if (((n as any).status as any) === ("proposed" as any)) {
        ((F as any).send as any)({
          resolution: {
            kind: "dismissed"
          },
          value: Vn
        });
        return;
      }
      (((N as any).get as any)("widget", P) as any) == (null as any) && ((N as any).record as any)("widget", P, {
        kind: "dismissed"
      }), (d as any)();
    }
  }, (e as any)[46] = Z, (e as any)[47] = J, (e as any)[48] = N, (e as any)[49] = P, (e as any)[50] = d, (e as any)[51] = (n as any).status, (e as any)[52] = F, (e as any)[53] = Ee) : Ee = (e as any)[53];
  const ze: any = Ee,
    De: any = (): any => {
      if (!(J || !Z || (re as any).isReading)) {
        if (((se as any).length as any) > (0 as any)) {
          ((F as any).send as any)({
            resolution: {
              kind: "answered",
              value: us
            },
            value: us
          });
          return;
        }
        if (((n as any).status as any) === ("proposed" as any)) {
          (ze as any)();
          return;
        }
        (d as any)();
      }
    };
  let Ye: any;
  ((e as any)[54] as any) !== (l as any) || ((e as any)[55] as any) !== (Z as any) || ((e as any)[56] as any) !== (J as any) || ((e as any)[57] as any) !== (h as any) || ((e as any)[58] as any) !== (j as any) || ((e as any)[59] as any) !== (re as any) ? (Ye = async (x: any): Promise<any> => {
    if ((l as any) == (null as any) || J || !Z || (re as any).isReading) return;
    (V as any)({
      kind: "running"
    });
    const K: any = await (gs as any)((): any => (j as any)(l, (x as any).key));
    if ((K as any) !== (void 0 as any)) {
      (V as any)({
        kind: "idle",
        failed: {
          name: (x as any).title,
          reason: K
        }
      }), (h as any)(l);
      return;
    }
    (Q as any)((X: any): any => ((X as any).filter as any)((ee: any): any => ((ee as any).key as any) !== ((x as any).key as any))), ((re as any).forgetWritten as any)((x as any).key), (V as any)({
      kind: "idle"
    });
  }, (e as any)[54] = l, (e as any)[55] = Z, (e as any)[56] = J, (e as any)[57] = h, (e as any)[58] = j, (e as any)[59] = re, (e as any)[60] = Ye) : Ye = (e as any)[60];
  const Qe: any = Ye;
  let Ae: any;
  ((e as any)[61] as any) !== (a as any) ? (Ae = (a as any)({
    id: "sER+bs"
  }), (e as any)[61] = a, (e as any)[62] = Ae) : Ae = (e as any)[62];
  const Se: any = Ae,
    et: any = J || (re as any).isReading;
  if (!r && et) {
    let x: any;
    ((e as any)[63] as any) !== ((re as any).isReading as any) ? (x = (re as any).isReading ? ((i as any).jsx as any)(w, {
      id: "DD/FLy"
    }) : ((i as any).jsx as any)(w, {
      id: "APfagk"
    }), (e as any)[63] = (re as any).isReading, (e as any)[64] = x) : x = (e as any)[64];
    let K: any;
    return ((e as any)[65] as any) !== (x as any) || ((e as any)[66] as any) !== (Se as any) || ((e as any)[67] as any) !== (f as any) ? (K = ((i as any).jsx as any)(bt, {
      title: Se,
      titleId: f,
      children: x
    }), (e as any)[65] = x, (e as any)[66] = Se, (e as any)[67] = f, (e as any)[68] = K) : K = (e as any)[68], K;
  }
  const Pe: any = (x: any): any => ((se as any).length as any) === (0 as any) ? ((i as any).jsx as any)(ft, {
    emptyLabel: x,
    icons: [((i as any).jsx as any)(kt, {
      name: "file"
    }, "file")],
    names: []
  }) : ((i as any).jsx as any)(ft, {
    countLabelOf: (K: any): any => (a as any)({
      id: "eM80Pk",
      values: {
        count: K
      }
    }),
    icons: (ss as any)(se, $i, Mi),
    names: ((se as any).map as any)(Li)
  });
  if ((ce as any) === ("dismissed" as any)) {
    const x: any = !c && !Oe;
    let K: any;
    ((e as any)[69] as any) !== (a as any) || ((e as any)[70] as any) !== (ne as any) ? (K = ne ? "" : (a as any)({
      id: "Vq6/r4"
    }), (e as any)[69] = a, (e as any)[70] = ne, (e as any)[71] = K) : K = (e as any)[71];
    let X: any;
    return ((e as any)[72] as any) !== (x as any) || ((e as any)[73] as any) !== (ne as any) || ((e as any)[74] as any) !== (o as any) || ((e as any)[75] as any) !== (Se as any) ? (X = x && !ne ? ((i as any).jsx as any)(vt, {
      name: Se,
      onClick: o
    }) : null, (e as any)[72] = x, (e as any)[73] = ne, (e as any)[74] = o, (e as any)[75] = Se, (e as any)[76] = X) : X = (e as any)[76], ((i as any).jsx as any)(Fe, {
      isExpanded: !1,
      onExpand: x ? o : void 0,
      summary: (Pe as any)(K),
      title: Se,
      titleId: f,
      trailing: X
    });
  }
  if ((ce as any) === ("added" as any) && !r) {
    let x: any;
    ((e as any)[77] as any) !== (a as any) ? (x = (a as any)({
      id: "5A5ntK"
    }), (e as any)[77] = a, (e as any)[78] = x) : x = (e as any)[78];
    let K: any;
    return ((e as any)[79] as any) !== (le as any) || ((e as any)[80] as any) !== (o as any) || ((e as any)[81] as any) !== (Se as any) ? (K = le ? ((i as any).jsx as any)(vt, {
      name: Se,
      onClick: o
    }) : null, (e as any)[79] = le, (e as any)[80] = o, (e as any)[81] = Se, (e as any)[82] = K) : K = (e as any)[82], ((i as any).jsx as any)(Fe, {
      isExpanded: !1,
      onExpand: le ? o : void 0,
      summary: (Pe as any)(x),
      title: Se,
      titleId: f,
      trailing: K
    });
  }
  const Ne: any = ((C as any).kind as any) === ("idle" as any) ? (C as any).failed : void 0;
  let Te: any = null;
  if ((Ne as any) !== (void 0 as any)) {
    const {
      name: x,
      reason: K
    }: any = Ne;
    let X: any;
    ((e as any)[83] as any) !== (a as any) || ((e as any)[84] as any) !== (x as any) || ((e as any)[85] as any) !== (K as any) ? (X = (a as any)({
      id: "M+YwD0",
      values: {
        name: x,
        reason: K
      }
    }), (e as any)[83] = a, (e as any)[84] = x, (e as any)[85] = K, (e as any)[86] = X) : X = (e as any)[86];
    let ee: any;
    ((e as any)[87] as any) !== (X as any) ? (ee = ((i as any).jsx as any)(Ze, {
      children: X
    }), (e as any)[87] = X, (e as any)[88] = ee) : ee = (e as any)[88], Te = ee;
  }
  if (!r) {
    let x: any;
    ((e as any)[89] as any) !== (Te as any) || ((e as any)[90] as any) !== (F as any) ? (x = (F as any).didFail ? ((i as any).jsx as any)(it, {
      tap: F
    }) : Te, (e as any)[89] = Te, (e as any)[90] = F, (e as any)[91] = x) : x = (e as any)[91];
    const K: any = ((se as any).length as any) === (0 as any) ? null : (Pe as any)("");
    let X: any;
    return ((e as any)[92] as any) !== (o as any) || ((e as any)[93] as any) !== (x as any) || ((e as any)[94] as any) !== (K as any) || ((e as any)[95] as any) !== (Se as any) || ((e as any)[96] as any) !== (f as any) ? (X = ((i as any).jsx as any)(Fe, {
      details: x,
      isExpanded: !1,
      isSummaryPending: !0,
      onExpand: o,
      summary: K,
      title: Se,
      titleId: f
    }), (e as any)[92] = o, (e as any)[93] = x, (e as any)[94] = K, (e as any)[95] = Se, (e as any)[96] = f, (e as any)[97] = X) : X = (e as any)[97], X;
  }
  const ie: any = !L && ((p as any).status as any) === ("failed" as any);
  let Ve: any;
  ((e as any)[98] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ve = ((i as any).jsx as any)(w, {
    id: "xGVfLh"
  }), (e as any)[98] = Ve) : Ve = (e as any)[98];
  let $e: any = Ve;
  if (Ke) {
    let x: any;
    ((e as any)[99] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = ((i as any).jsx as any)(w, {
      id: "DPfwMq"
    }), (e as any)[99] = x) : x = (e as any)[99], $e = x;
  } else if (m && ((se as any).length as any) === (0 as any)) {
    let x: any;
    ((e as any)[100] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = ((i as any).jsx as any)(w, {
      id: "6Uau97"
    }), (e as any)[100] = x) : x = (e as any)[100], $e = x;
  }
  if (J) {
    let x: any;
    ((e as any)[101] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = ((i as any).jsx as any)(w, {
      id: "APfagk"
    }), (e as any)[101] = x) : x = (e as any)[101], $e = x;
  }
  let v: any;
  ((e as any)[102] as any) !== (a as any) ? (v = (a as any)({
    id: "aM8P8N"
  }), (e as any)[102] = a, (e as any)[103] = v) : v = (e as any)[103];
  let W: any;
  ((e as any)[104] as any) !== (re as any) ? (W = ((i as any).jsx as any)($l, {
    compact: !0,
    fileInputRef: q,
    upload: re
  }), (e as any)[104] = re, (e as any)[105] = W) : W = (e as any)[105];
  const ye: any = ((se as any).length as any) === (0 as any) ? null : ((i as any).jsx as any)(_t, {
    hasIcons: !0,
    children: ((((se as any).slice as any)(0, Ot) as any).map as any)((x: any): any => ((i as any).jsx as any)(Tt, {
      icon: ((i as any).jsx as any)(kt, {
        name: "file-text",
        size: "row"
      }),
      isDisabled: J || !Z || (re as any).isReading,
      reason: (x as any).sizeLabel,
      title: (x as any).title,
      onDelete: (): any => {
        (Qe as any)(x);
      }
    }, (x as any).key))
  });
  let oe: any;
  ((e as any)[106] as any) !== (a as any) || ((e as any)[107] as any) !== (l as any) || ((e as any)[108] as any) !== (Z as any) || ((e as any)[109] as any) !== (ie as any) || ((e as any)[110] as any) !== (h as any) || ((e as any)[111] as any) !== (k as any) ? (oe = ie && Z && (l as any) != (null as any) ? ((i as any).jsxs as any)("span", {
    className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g",
    children: [((i as any).jsx as any)(Ze, {
      children: (a as any)({
        id: "w0yPkC"
      })
    }), ((i as any).jsx as any)(rt, {
      onClick: (): any => {
        (h as any)(l), ((k as any).refresh as any)(l);
      },
      size: "sm",
      variant: "tertiary",
      children: ((i as any).jsx as any)(w, {
        id: "6gRgw8"
      })
    })]
  }) : null, (e as any)[106] = a, (e as any)[107] = l, (e as any)[108] = Z, (e as any)[109] = ie, (e as any)[110] = h, (e as any)[111] = k, (e as any)[112] = oe) : oe = (e as any)[112];
  let ve: any;
  ((e as any)[113] as any) !== (F as any) ? (ve = ((i as any).jsx as any)(it, {
    tap: F
  }), (e as any)[113] = F, (e as any)[114] = ve) : ve = (e as any)[114];
  const ue: any = J || !Z || (re as any).isReading || ne;
  let de: any;
  ((e as any)[115] as any) !== (De as any) || ((e as any)[116] as any) !== (J as any) || ((e as any)[117] as any) !== ($e as any) || ((e as any)[118] as any) !== (ue as any) ? (de = ((i as any).jsx as any)(Ft, {
    disabled: ue,
    onClick: De,
    pending: J,
    children: $e
  }), (e as any)[115] = De, (e as any)[116] = J, (e as any)[117] = $e, (e as any)[118] = ue, (e as any)[119] = de) : de = (e as any)[119];
  const be: any = _e && (_ as any) != (null as any) && ((se as any).length as any) > (Ot as any) ? ((i as any).jsx as any)(rt, {
    disabled: J,
    onClick: (_ as any).openTeamBotFiles,
    variant: "secondary",
    children: ((i as any).jsx as any)(w, {
      id: "gfTCj6",
      values: {
        0: (se as any).length
      }
    })
  }) : null;
  let fe: any;
  ((e as any)[120] as any) !== (de as any) || ((e as any)[121] as any) !== (be as any) ? (fe = ((i as any).jsxs as any)(Pt, {
    children: [de, be]
  }), (e as any)[120] = de, (e as any)[121] = be, (e as any)[122] = fe) : fe = (e as any)[122];
  let Be: any;
  return ((e as any)[123] as any) !== (Te as any) || ((e as any)[124] as any) !== (o as any) || ((e as any)[125] as any) !== (v as any) || ((e as any)[126] as any) !== (W as any) || ((e as any)[127] as any) !== (ye as any) || ((e as any)[128] as any) !== (oe as any) || ((e as any)[129] as any) !== (ve as any) || ((e as any)[130] as any) !== (fe as any) || ((e as any)[131] as any) !== (f as any) ? (Be = ((i as any).jsxs as any)(Fe, {
    onExpand: o,
    title: v,
    titleId: f,
    children: [W, ye, oe, Te, ve, fe]
  }), (e as any)[123] = Te, (e as any)[124] = o, (e as any)[125] = v, (e as any)[126] = W, (e as any)[127] = ye, (e as any)[128] = oe, (e as any)[129] = ve, (e as any)[130] = fe, (e as any)[131] = f, (e as any)[132] = Be) : Be = (e as any)[132], Be;
}
function Li(this: any, s: any): any {
  return (s as any).title;
}
function Mi(this: any, s: any, e: any): any {
  return ((i as any).jsx as any)(kt, {
    name: "file"
  }, e);
}
function $i(this: any): any {
  return "file";
}
function Bi(this: any): any {}
function zi(this: any, s: any): any {
  return (s as any).key;
}
function Di(this: any, s: any): any {
  return (Hs as any)(s);
}
function Hs(this: any, s: any): any {
  return {
    key: (s as any).name,
    title: (Dn as any)(s),
    body: ((((zn as any)((s as any).content) as any).body as any).trim as any)(),
    sizeLabel: (Ml as any)((s as any).content)
  };
}
async function gs(this: any, s: any): Promise<any> {
  try {
    await (s as any)();
    return;
  } catch (e: any) {
    return (wt as any)(e, {
      tags: {
        sand_area: "team-files"
      }
    }), (ts as any)(e);
  }
}
const ks: number = 100;
function Qs(this: any, s: any): any {
  (Qs as any).d = 521;
  const e: any = ((ge as any).c as any)(137),
    {
      entry: t,
      slot: n,
      agentId: l,
      isReadOnly: c,
      isExpanded: r,
      onExpand: o,
      onCollapse: d
    }: any = s,
    {
      _: a,
      i18n: m
    }: any = (st as any)(),
    {
      isChained: f
    }: any = (At as any)(),
    u: any = ((G as any).useId as any)(),
    p: any = (xt as any)(l),
    y: any = (Ul as any)();
  let h: any;
  ((e as any)[0] as any) !== ((t as any).id as any) ? (h = (lt as any)((t as any).id, "memories"), (e as any)[0] = (t as any).id, (e as any)[1] = h) : h = (e as any)[1];
  let b: any;
  ((e as any)[2] as any) !== (l as any) || ((e as any)[3] as any) !== (h as any) ? (b = {
    agentId: l,
    entryId: h
  }, (e as any)[2] = l, (e as any)[3] = h, (e as any)[4] = b) : b = (e as any)[4];
  const E: any = (at as any)("widget", b);
  let j: any;
  ((e as any)[5] as any) !== (E as any) || ((e as any)[6] as any) !== ((n as any).status as any) ? (j = (Is as any)((n as any).status, E), (e as any)[5] = E, (e as any)[6] = (n as any).status, (e as any)[7] = j) : j = (e as any)[7];
  const N: any = j;
  let k: any;
  ((e as any)[8] as any) !== (l as any) || ((e as any)[9] as any) !== ((t as any).id as any) || ((e as any)[10] as any) !== (d as any) || ((e as any)[11] as any) !== (o as any) || ((e as any)[12] as any) !== ((n as any).status as any) ? (k = {
    agentId: l,
    entryId: (t as any).id,
    kind: "memories",
    slotStatus: (n as any).status,
    sandArea: "team-memories",
    onExpand: o,
    onCollapse: d
  }, (e as any)[8] = l, (e as any)[9] = (t as any).id, (e as any)[10] = d, (e as any)[11] = o, (e as any)[12] = (n as any).status, (e as any)[13] = k) : k = (e as any)[13];
  const _: any = (Nt as any)(k);
  let T: any;
  ((e as any)[14] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (T = new (Set as any)(), (e as any)[14] = T) : T = (e as any)[14];
  const [D, O]: any = ((G as any).useState as any)(T);
  let $: any;
  ((e as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? ($ = new (Set as any)(), (e as any)[15] = $) : $ = (e as any)[15];
  const [P, z]: any = ((G as any).useState as any)($),
    [I, A]: any = ((G as any).useState as any)(null);
  let C: any;
  ((e as any)[16] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (C = {
    kind: "idle"
  }, (e as any)[16] = C) : C = (e as any)[16];
  const [V, H]: any = ((G as any).useState as any)(C),
    [F, Y]: any = ((G as any).useState as any)(null),
    R: any = (N as any) === ("proposed" as any),
    Q: any = (Kl as any)(R || r ? l : null),
    q: any = !c && (l as any) != (null as any) && (p?.viewerIsOwner as any) !== (!1 as any),
    B: any = (Ct as any)("grok_bot_multiplayer");
  let L: any;
  ((e as any)[17] as any) !== (p as any) || ((e as any)[18] as any) !== (B as any) ? (L = (Et as any)(p, B), (e as any)[17] = p, (e as any)[18] = B, (e as any)[19] = L) : L = (e as any)[19];
  const ce: any = L,
    Re: any = (Q as any).memories,
    Ke: any = (Fn as any)(n, Re),
    Ge: any = R && (l as any) != (null as any) && (l as any) !== ("" as any) && ((Q as any).load as any) === ("ready" as any),
    Le: any = Ge && ((Ke as any).length as any) === (0 as any),
    [se, Z]: any = ((G as any).useState as any)(!1);
  Ge && (se as any) !== (Le as any) && (Z as any)(Le);
  const J: any = ((G as any).useRef as any)(!1);
  let xe: any;
  ((e as any)[20] as any) !== (_ as any) ? (xe = (): any => ((_ as any).send as any)({
    resolution: {
      kind: "answered",
      value: Bt
    },
    value: Bt
  }), (e as any)[20] = _, (e as any)[21] = xe) : xe = (e as any)[21];
  const Ce: any = xe;
  let ne: any;
  ((e as any)[22] as any) !== (q as any) || ((e as any)[23] as any) !== (Le as any) || ((e as any)[24] as any) !== (r as any) || ((e as any)[25] as any) !== (Ce as any) ? (ne = (): any => (Le && r && q && !(J as any).current && ((J as any).current = !0, (Ce as any)()), Fi), (e as any)[22] = q, (e as any)[23] = Le, (e as any)[24] = r, (e as any)[25] = Ce, (e as any)[26] = ne) : ne = (e as any)[26], (zt as any)(ne);
  let Oe: any;
  ((e as any)[27] as any) !== (a as any) ? (Oe = (a as any)({
    id: "QCEzof"
  }), (e as any)[27] = a, (e as any)[28] = Oe) : Oe = (e as any)[28];
  const le: any = Oe;
  if ((N as any) === ("done" as any)) return null;
  if (Le || se) {
    let v: any;
    return ((e as any)[29] as any) !== (_ as any) || ((e as any)[30] as any) !== (le as any) || ((e as any)[31] as any) !== (u as any) ? (v = (_ as any).didFail ? ((i as any).jsx as any)(Fe, {
      details: ((i as any).jsx as any)(it, {
        tap: _
      }),
      isExpanded: !1,
      title: le,
      titleId: u,
      trailing: ((i as any).jsx as any)(Sl, {
        onClick: (): any => ((_ as any).retry as any)(),
        children: ((i as any).jsx as any)(w, {
          id: "xGVfLh"
        })
      })
    }) : null, (e as any)[29] = _, (e as any)[30] = le, (e as any)[31] = u, (e as any)[32] = v) : v = (e as any)[32], v;
  }
  if ((N as any) === ("sorting" as any)) {
    let v: any;
    ((e as any)[33] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = ((i as any).jsx as any)(w, {
      id: "zMVr84"
    }), (e as any)[33] = v) : v = (e as any)[33];
    let W: any;
    return ((e as any)[34] as any) !== (le as any) || ((e as any)[35] as any) !== (u as any) ? (W = ((i as any).jsx as any)(bt, {
      title: le,
      titleId: u,
      children: v
    }), (e as any)[34] = le, (e as any)[35] = u, (e as any)[36] = W) : W = (e as any)[36], W;
  }
  const ke: any = ((V as any).kind as any) === ("saving" as any);
  if (!r) {
    if (ke) {
      let ee: any;
      ((e as any)[37] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ee = ((i as any).jsx as any)(w, {
        id: "CRsE4b"
      }), (e as any)[37] = ee) : ee = (e as any)[37];
      let S: any;
      return ((e as any)[38] as any) !== (le as any) || ((e as any)[39] as any) !== (u as any) ? (S = ((i as any).jsx as any)(bt, {
        title: le,
        titleId: u,
        children: ee
      }), (e as any)[38] = le, (e as any)[39] = u, (e as any)[40] = S) : S = (e as any)[40], S;
    }
    const v: any = (((t as any).event as any).type as any) === ("team-shared" as any) && (((t as any).event as any).unshared as any) === (!0 as any),
      W: any = q && !v && (R || ce),
      ye: any = (I as any) === (null as any) ? null : (((I as any).created as any).length as any) + (((I as any).alreadyInTeam as any).length as any);
    let oe: any;
    ((e as any)[41] as any) !== (a as any) ? (oe = (a as any)({
      id: "Vq6/r4"
    }), (e as any)[41] = a, (e as any)[42] = oe) : oe = (e as any)[42];
    let ve: any = oe;
    if ((ye as any) === (null as any) && (N as any) === ("shared" as any)) {
      let ee: any;
      ((e as any)[43] as any) !== (a as any) ? (ee = (a as any)({
        id: "5A5ntK"
      }), (e as any)[43] = a, (e as any)[44] = ee) : ee = (e as any)[44], ve = ee;
    } else if ((ye as any) !== (null as any) && (ye as any) > (0 as any)) {
      let ee: any;
      ((e as any)[45] as any) !== (a as any) || ((e as any)[46] as any) !== (ye as any) ? (ee = (a as any)({
        id: "A8ekoq",
        values: {
          added: ye
        }
      }), (e as any)[45] = a, (e as any)[46] = ye, (e as any)[47] = ee) : ee = (e as any)[47], ve = ee;
    }
    const ue: any = R && (I as any) === (null as any);
    let de: any;
    ((e as any)[48] as any) !== (I as any) ? (de = (I as any) === (null as any) ? null : ((i as any).jsx as any)(Xs, {
      result: I
    }), (e as any)[48] = I, (e as any)[49] = de) : de = (e as any)[49];
    let be: any;
    ((e as any)[50] as any) !== (_ as any) ? (be = ((i as any).jsx as any)(it, {
      tap: _
    }), (e as any)[50] = _, (e as any)[51] = be) : be = (e as any)[51];
    let fe: any;
    ((e as any)[52] as any) !== (de as any) || ((e as any)[53] as any) !== (be as any) ? (fe = ((i as any).jsxs as any)((i as any).Fragment, {
      children: [de, be]
    }), (e as any)[52] = de, (e as any)[53] = be, (e as any)[54] = fe) : fe = (e as any)[54];
    const Be: any = W ? o : void 0;
    let x: any;
    ((e as any)[55] as any) !== (ue as any) || ((e as any)[56] as any) !== (ve as any) ? (x = ue ? null : ((i as any).jsx as any)(ft, {
      emptyLabel: ve,
      icons: [((i as any).jsx as any)(kt, {
        name: "library"
      }, "library")],
      names: []
    }), (e as any)[55] = ue, (e as any)[56] = ve, (e as any)[57] = x) : x = (e as any)[57];
    let K: any;
    ((e as any)[58] as any) !== (W as any) || ((e as any)[59] as any) !== (o as any) || ((e as any)[60] as any) !== (le as any) ? (K = W ? ((i as any).jsx as any)(vt, {
      name: le,
      onClick: o
    }) : null, (e as any)[58] = W, (e as any)[59] = o, (e as any)[60] = le, (e as any)[61] = K) : K = (e as any)[61];
    let X: any;
    return ((e as any)[62] as any) !== (ue as any) || ((e as any)[63] as any) !== (fe as any) || ((e as any)[64] as any) !== (Be as any) || ((e as any)[65] as any) !== (x as any) || ((e as any)[66] as any) !== (K as any) || ((e as any)[67] as any) !== (le as any) || ((e as any)[68] as any) !== (u as any) ? (X = ((i as any).jsx as any)(Fe, {
      details: fe,
      isExpanded: !1,
      isSummaryPending: ue,
      onExpand: Be,
      summary: x,
      title: le,
      titleId: u,
      trailing: K
    }), (e as any)[62] = ue, (e as any)[63] = fe, (e as any)[64] = Be, (e as any)[65] = x, (e as any)[66] = K, (e as any)[67] = le, (e as any)[68] = u, (e as any)[69] = X) : X = (e as any)[69], X;
  }
  let _e: any;
  if (((e as any)[70] as any) !== (Re as any) || ((e as any)[71] as any) !== (P as any) || ((e as any)[72] as any) !== (D as any)) {
    let v: any;
    ((e as any)[74] as any) !== (P as any) || ((e as any)[75] as any) !== (D as any) ? (v = (W: any): any => ((D as any).has as any)((W as any).factId) && !((P as any).has as any)((W as any).factId), (e as any)[74] = P, (e as any)[75] = D, (e as any)[76] = v) : v = (e as any)[76], _e = ((Re as any).filter as any)(v), (e as any)[70] = Re, (e as any)[71] = P, (e as any)[72] = D, (e as any)[73] = _e;
  } else _e = (e as any)[73];
  const pe: any = _e;
  let Me: any;
  ((e as any)[77] as any) !== (l as any) || ((e as any)[78] as any) !== (q as any) || ((e as any)[79] as any) !== (R as any) || ((e as any)[80] as any) !== (ke as any) || ((e as any)[81] as any) !== (Ce as any) || ((e as any)[82] as any) !== (Q as any) || ((e as any)[83] as any) !== (d as any) || ((e as any)[84] as any) !== (pe as any) || ((e as any)[85] as any) !== (y as any) || ((e as any)[86] as any) !== (P as any) || ((e as any)[87] as any) !== (I as any) || ((e as any)[88] as any) !== (_ as any) ? (Me = async (): Promise<any> => {
    if (!q || (l as any) == (null as any) || ke) return;
    if (((pe as any).length as any) === (0 as any)) {
      if (((_ as any).retry as any)()) return;
      R ? (Ce as any)() : (d as any)();
      return;
    }
    (H as any)({
      kind: "saving"
    });
    const v: any = ((pe as any).map as any)(Vi);
    let W: any = I ?? ys;
    const ye: any = new (Set as any)(P);
    for (let ue: any = 0; (ue as any) < ((v as any).length as any); ue = (ue as any) + (ks as any), ue) {
      const de: any = ((v as any).slice as any)(ue, (ue as any) + (ks as any)),
        be: any = await (Wi as any)((): any => (y as any)(l, de));
      if (((be as any).kind as any) === ("failed" as any)) {
        (A as any)((W as any) === (ys as any) ? I : W), (z as any)(ye), (H as any)({
          kind: "idle",
          failure: (be as any).reason
        }), ((Q as any).reload as any)();
        return;
      }
      W = (Ui as any)(W, (be as any).result);
      for (const fe of de) ((ye as any).add as any)(fe);
    }
    if ((A as any)(W), (z as any)(ye), (O as any)(new (Set as any)()), (H as any)({
      kind: "idle"
    }), !R) {
      (d as any)();
      return;
    }
    const oe: any = (((W as any).created as any).length as any) + (((W as any).alreadyInTeam as any).length as any),
      ve: any = (oe as any) === (0 as any) ? Bt : (Un as any)(oe);
    ((_ as any).send as any)({
      resolution: {
        kind: "answered",
        value: ve
      },
      value: ve
    });
  }, (e as any)[77] = l, (e as any)[78] = q, (e as any)[79] = R, (e as any)[80] = ke, (e as any)[81] = Ce, (e as any)[82] = Q, (e as any)[83] = d, (e as any)[84] = pe, (e as any)[85] = y, (e as any)[86] = P, (e as any)[87] = I, (e as any)[88] = _, (e as any)[89] = Me) : Me = (e as any)[89];
  const qe: any = Me;
  let Ue: any;
  ((e as any)[90] as any) !== (D as any) ? (Ue = (v: any, W: any): any => {
    const ye: any = new (Set as any)(D);
    for (const oe of (v as any).memories) W ? ((ye as any).add as any)((oe as any).factId) : ((ye as any).delete as any)((oe as any).factId);
    (O as any)(ye);
  }, (e as any)[90] = D, (e as any)[91] = Ue) : Ue = (e as any)[91];
  const re: any = Ue;
  let Je: any;
  ((e as any)[92] as any) !== (m as any) ? (Je = (v: any): any => ((new ((Intl as any).DateTimeFormat as any)((m as any).locale, {
    month: "short",
    day: "numeric"
  }) as any).format as any)(new (Date as any)(v)), (e as any)[92] = m, (e as any)[93] = Je) : Je = (e as any)[93];
  const je: any = Je;
  let Xe: any;
  ((e as any)[94] as any) !== (a as any) ? (Xe = (v: any): any => (((v as any).name as any).length as any) > (0 as any) ? (v as any).name : (a as any)({
    id: "/IX/7x"
  }), (e as any)[94] = a, (e as any)[95] = Xe) : Xe = (e as any)[95];
  const He: any = Xe;
  let he: any;
  ((e as any)[96] as any) !== (p as any) ? (he = (p as any) === (null as any) ? "" : (Kn as any)(p), (e as any)[96] = p, (e as any)[97] = he) : he = (e as any)[97];
  const Ee: any = he;
  let ze: any;
  ((e as any)[98] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ze = ((i as any).jsx as any)(w, {
    id: "DPfwMq"
  }), (e as any)[98] = ze) : ze = (e as any)[98];
  let De: any = ze;
  if (R) {
    let v: any;
    ((e as any)[99] as any) !== (f as any) || ((e as any)[100] as any) !== (D as any) ? (v = f && ((D as any).size as any) === (0 as any) ? ((i as any).jsx as any)(w, {
      id: "6Uau97"
    }) : ((i as any).jsx as any)(w, {
      id: "xGVfLh"
    }), (e as any)[99] = f, (e as any)[100] = D, (e as any)[101] = v) : v = (e as any)[101], De = v;
  }
  if (ke) {
    let v: any;
    ((e as any)[102] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = ((i as any).jsx as any)(w, {
      id: "CRsE4b"
    }), (e as any)[102] = v) : v = (e as any)[102], De = v;
  }
  const Ye: any = Fe;
  let Qe: any;
  ((e as any)[103] as any) !== (a as any) ? (Qe = (a as any)({
    id: "o7Nnn1"
  }), (e as any)[103] = a, (e as any)[104] = Qe) : Qe = (e as any)[104];
  let Ae: any;
  ((e as any)[105] as any) !== ((Q as any).load as any) || ((e as any)[106] as any) !== ((Q as any).reload as any) ? (Ae = ((Q as any).load as any) === ("failed" as any) ? ((i as any).jsxs as any)((i as any).Fragment, {
    children: [((i as any).jsx as any)(Ze, {
      children: ((i as any).jsx as any)(w, {
        id: "097oCu"
      })
    }), ((i as any).jsx as any)(rt, {
      onClick: (Q as any).reload,
      size: "sm",
      variant: "tertiary",
      children: ((i as any).jsx as any)(w, {
        id: "6gRgw8"
      })
    })]
  }) : null, (e as any)[105] = (Q as any).load, (e as any)[106] = (Q as any).reload, (e as any)[107] = Ae) : Ae = (e as any)[107];
  const Se: any = ((Q as any).load as any) === ("ready" as any) ? ((i as any).jsx as any)(_t, {
    children: ((Ke as any).map as any)((v: any): any => ((i as any).jsx as any)(Tt, {
      isChecked: (((v as any).memories as any).some as any)((W: any): any => ((D as any).has as any)((W as any).factId)),
      isDisabled: !q || ke,
      isDone: (((v as any).memories as any).every as any)((W: any): any => ((P as any).has as any)((W as any).factId)),
      onChange: (W: any): any => (re as any)(v, W),
      onView: (): any => (Y as any)(v),
      reason: ((((v as any).memories as any).length as any).toLocaleString as any)((Rt as any)()),
      title: (He as any)(v)
    }, (v as any).name))
  }) : null;
  let et: any;
  ((e as any)[108] as any) !== ((V as any).failure as any) || ((e as any)[109] as any) !== ((V as any).kind as any) ? (et = ((V as any).kind as any) === ("idle" as any) && ((V as any).failure as any) !== (void 0 as any) ? ((i as any).jsx as any)(Ze, {
    children: ((i as any).jsx as any)(w, {
      id: "L5c2id"
    })
  }) : null, (e as any)[108] = (V as any).failure, (e as any)[109] = (V as any).kind, (e as any)[110] = et) : et = (e as any)[110];
  let Pe: any;
  ((e as any)[111] as any) !== (_ as any) ? (Pe = ((i as any).jsx as any)(it, {
    tap: _
  }), (e as any)[111] = _, (e as any)[112] = Pe) : Pe = (e as any)[112];
  const Ne: any = !q || ((Q as any).load as any) === ("loading" as any);
  let Te: any;
  ((e as any)[113] as any) !== (qe as any) ? (Te = (): any => {
    (qe as any)();
  }, (e as any)[113] = qe, (e as any)[114] = Te) : Te = (e as any)[114];
  let ie: any;
  ((e as any)[115] as any) !== (ke as any) || ((e as any)[116] as any) !== (De as any) || ((e as any)[117] as any) !== (Ne as any) || ((e as any)[118] as any) !== (Te as any) ? (ie = ((i as any).jsx as any)(Pt, {
    children: ((i as any).jsx as any)(rt, {
      disabled: Ne,
      onClick: Te,
      pending: ke,
      variant: "primary",
      children: De
    })
  }), (e as any)[115] = ke, (e as any)[116] = De, (e as any)[117] = Ne, (e as any)[118] = Te, (e as any)[119] = ie) : ie = (e as any)[119];
  let Ve: any;
  ((e as any)[120] as any) !== (p as any) || ((e as any)[121] as any) !== (Ee as any) || ((e as any)[122] as any) !== (je as any) || ((e as any)[123] as any) !== (He as any) || ((e as any)[124] as any) !== (F as any) ? (Ve = (F as any) === (null as any) || (p as any) === (null as any) ? null : ((i as any).jsx as any)(zs, {
    intro: ((i as any).jsx as any)(w, {
      id: "EFqXda",
      values: {
        botName: Ee
      }
    }),
    title: (He as any)(F),
    entries: (((F as any).memories as any).map as any)((v: any): any => ({
      date: (je as any)((v as any).learnedAtMs),
      text: (v as any).text,
      factId: (v as any).factId
    })),
    onClose: (): any => (Y as any)(null)
  }), (e as any)[120] = p, (e as any)[121] = Ee, (e as any)[122] = je, (e as any)[123] = He, (e as any)[124] = F, (e as any)[125] = Ve) : Ve = (e as any)[125];
  let $e: any;
  return ((e as any)[126] as any) !== (Ye as any) || ((e as any)[127] as any) !== (o as any) || ((e as any)[128] as any) !== (Qe as any) || ((e as any)[129] as any) !== (Ae as any) || ((e as any)[130] as any) !== (Se as any) || ((e as any)[131] as any) !== (et as any) || ((e as any)[132] as any) !== (Pe as any) || ((e as any)[133] as any) !== (ie as any) || ((e as any)[134] as any) !== (Ve as any) || ((e as any)[135] as any) !== (u as any) ? ($e = ((i as any).jsxs as any)(Ye, {
    onExpand: o,
    title: Qe,
    titleId: u,
    children: [Ae, Se, et, Pe, ie, Ve]
  }), (e as any)[126] = Ye, (e as any)[127] = o, (e as any)[128] = Qe, (e as any)[129] = Ae, (e as any)[130] = Se, (e as any)[131] = et, (e as any)[132] = Pe, (e as any)[133] = ie, (e as any)[134] = Ve, (e as any)[135] = u, (e as any)[136] = $e) : $e = (e as any)[136], $e;
}
function Vi(this: any, s: any): any {
  return (s as any).factId;
}
function Fi(this: any): any {}
function Xs(this: any, s: any): any {
  (Xs as any).d = 522;
  const e: any = ((ge as any).c as any)(13),
    {
      result: t
    }: any = s,
    {
      _: n
    }: any = (st as any)(),
    l: any = ((t as any).alreadyInTeam as any).length;
  let c: any;
  ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== ((t as any).created as any) ? (c = (((t as any).created as any).length as any) === (0 as any) ? null : ((i as any).jsx as any)("ul", {
    "aria-label": (n as any)({
      id: "uSbxfn"
    }),
    className: "sand-78zum5 sand-dt5ytf sand-1jnr06f sand-1ghz6dp sand-wn43p0 sand-tyxrsu",
    children: (((t as any).created as any).map as any)(Ki)
  }), (e as any)[0] = n, (e as any)[1] = (t as any).created, (e as any)[2] = c) : c = (e as any)[2];
  let r: any;
  ((e as any)[3] as any) !== (n as any) || ((e as any)[4] as any) !== (l as any) ? (r = (l as any) === (0 as any) ? null : ((i as any).jsx as any)(Ze, {
    children: (n as any)({
      id: "3MsLBr",
      values: {
        known: l
      }
    })
  }), (e as any)[3] = n, (e as any)[4] = l, (e as any)[5] = r) : r = (e as any)[5];
  let o: any;
  ((e as any)[6] as any) !== (n as any) || ((e as any)[7] as any) !== ((t as any).keptPrivateCount as any) ? (o = ((t as any).keptPrivateCount as any) === (0 as any) ? null : ((i as any).jsx as any)(Ze, {
    children: (n as any)({
      id: "ZzwxIS",
      values: {
        0: (t as any).keptPrivateCount
      }
    })
  }), (e as any)[6] = n, (e as any)[7] = (t as any).keptPrivateCount, (e as any)[8] = o) : o = (e as any)[8];
  let d: any;
  return ((e as any)[9] as any) !== (c as any) || ((e as any)[10] as any) !== (r as any) || ((e as any)[11] as any) !== (o as any) ? (d = ((i as any).jsxs as any)((i as any).Fragment, {
    children: [c, r, o]
  }), (e as any)[9] = c, (e as any)[10] = r, (e as any)[11] = o, (e as any)[12] = d) : d = (e as any)[12], d;
}
function Ki(this: any, s: any): any {
  return ((i as any).jsx as any)("li", {
    children: ((i as any).jsx as any)(Yt, {
      level: "body2",
      children: (s as any).text
    })
  }, (s as any).factId);
}
const ys: any = {
  created: [],
  alreadyInTeam: [],
  keptPrivateCount: 0
};
function Ui(this: any, s: any, e: any): any {
  return {
    created: [...(s as any).created, ...(e as any).created],
    alreadyInTeam: [...(s as any).alreadyInTeam, ...(e as any).alreadyInTeam],
    keptPrivateCount: ((s as any).keptPrivateCount as any) + ((e as any).keptPrivateCount as any)
  };
}
async function Wi(this: any, s: any): Promise<any> {
  try {
    return {
      kind: "saved",
      result: await (s as any)()
    };
  } catch (e: any) {
    return (wt as any)(e, {
      tags: {
        sand_area: "team-memories"
      }
    }), {
      kind: "failed",
      reason: (ts as any)(e)
    };
  }
}
const Ht: any = {
  name: {
    kMv6JI: "sand-1ey7xld",
    $$css: !0
  },
  field: {
    kB7OPa: "sand-9f619",
    kzqmXN: "sand-h8yej3",
    kZKoxP: "sand-1fgtraw",
    kLKAdn: "sand-1iorvi4",
    kGO01o: "sand-jkvuk6",
    kZCmMZ: "sand-mzvs34",
    kwRFfy: "sand-f159sx",
    kMzoRj: "sand-mkeg23",
    ksu8eU: "sand-1y0btm7",
    kVAM5u: "sand-q03nf1",
    kaIpWk: "sand-1qmwy7c",
    kWkggS: "sand-vvtkfd",
    kMwMTN: "sand-tyxrsu",
    kMv6JI: "sand-jb2p0i",
    $$css: !0
  },
  dialogBody: {
    kLKAdn: "sand-1y1aw1k",
    kGO01o: "sand-1l90r2v",
    $$css: !0
  }
};
function Gi(this: any, s: any): any {
  return {
    name: (s as any).name,
    checked: !0,
    done: !1,
    needsValue: !0,
    ...((((s as any).description as any).length as any) === (0 as any) ? {} : {
      reason: (s as any).description
    })
  };
}
function os(this: any, s: any): any {
  (os as any).d = 526;
  const e: any = ((ge as any).c as any)(113),
    {
      entry: t,
      slot: n,
      agentId: l,
      isReadOnly: c,
      isExpanded: r,
      onExpand: o,
      onCollapse: d
    }: any = s,
    {
      _: a
    }: any = (st as any)(),
    {
      isChained: m
    }: any = (At as any)(),
    f: any = ((G as any).useId as any)(),
    u: any = (xt as any)(l),
    p: any = u?.serverId ?? null,
    {
      localAnswers: y
    }: any = (yt as any)();
  let h: any;
  ((e as any)[0] as any) !== ((t as any).event as any) ? (h = (((t as any).event as any).type as any) === ("team-shared" as any) ? (Dt as any)((t as any).event, "plugins") : void 0, (e as any)[0] = (t as any).event, (e as any)[1] = h) : h = (e as any)[1];
  const b: any = h;
  let E: any;
  ((e as any)[2] as any) !== (b as any) ? (E = b ?? {}, (e as any)[2] = b, (e as any)[3] = E) : E = (e as any)[3];
  const j: any = (qs as any)(l, E, (Gs as any)(l)),
    {
      carryOver: N
    }: any = (Wn as any)(),
    {
      put: k
    }: any = (Gn as any)();
  let _: any;
  ((e as any)[4] as any) !== (l as any) || ((e as any)[5] as any) !== ((t as any).id as any) || ((e as any)[6] as any) !== (d as any) || ((e as any)[7] as any) !== (o as any) || ((e as any)[8] as any) !== ((n as any).status as any) ? (_ = {
    agentId: l,
    entryId: (t as any).id,
    kind: "secrets",
    slotStatus: (n as any).status,
    sandArea: "team-secrets",
    onExpand: o,
    onCollapse: d
  }, (e as any)[4] = l, (e as any)[5] = (t as any).id, (e as any)[6] = d, (e as any)[7] = o, (e as any)[8] = (n as any).status, (e as any)[9] = _) : _ = (e as any)[9];
  const T: any = (Nt as any)(_),
    D: any = (lt as any)((t as any).id, "secrets"),
    O: any = (l as any) == (null as any) ? null : {
      agentId: l,
      entryId: D
    },
    $: any = (at as any)("widget", {
      agentId: l,
      entryId: D
    }),
    [P, z]: any = ((G as any).useState as any)(null);
  let I: any;
  ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (I = new (Map as any)(), (e as any)[10] = I) : I = (e as any)[10];
  const [A, C]: any = ((G as any).useState as any)(I);
  let V: any;
  ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (V = [], (e as any)[11] = V) : V = (e as any)[11];
  const [H, F]: any = ((G as any).useState as any)(V),
    [Y, R]: any = ((G as any).useState as any)(!1),
    [Q, q]: any = ((G as any).useState as any)(!1);
  let B: any;
  ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (B = {
    kind: "idle"
  }, (e as any)[12] = B) : B = (e as any)[12];
  const [L, ce]: any = ((G as any).useState as any)(B),
    Re: any = (qn as any)((n as any).status, $),
    Ke: any = (Vt as any)(Re, r),
    [Ge, Le]: any = ((G as any).useState as any)(Ke);
  let se: any;
  ((e as any)[13] as any) !== ((j as any).rows as any) ? (se = new (Set as any)((((((j as any).rows as any).filter as any)(Yi) as any).map as any)(Xi)), (e as any)[13] = (j as any).rows, (e as any)[14] = se) : se = (e as any)[14];
  const Z: any = se;
  let J: any;
  ((e as any)[15] as any) !== (Z as any) ? (J = (M: any): any => !((Z as any).has as any)((M as any).name), (e as any)[15] = Z, (e as any)[16] = J) : J = (e as any)[16];
  const xe: any = ((H as any).filter as any)(J),
    Ce: any = new (Map as any)(((xe as any).map as any)(Qi)),
    ne: any = [...((xe as any).map as any)(Gi), ...(((j as any).rows as any).filter as any)((M: any): any => !((Ce as any).has as any)((M as any).name))],
    Oe: any = ((ne as any).slice as any)(0, Ot),
    le: any = (M: any): any => P?.get((M as any).name) ?? (!Ke && (M as any).checked && ((Oe as any).includes as any)(M)),
    ke: any = (M: any, Ie: any): any => (z as any)((g: any): any => ((new (Map as any)(g ?? ((ne as any).map as any)((U: any): any => [(U as any).name, (le as any)(U)])) as any).set as any)(M, Ie)),
    _e: any = ((ne as any).filter as any)((M: any): any => !(M as any).done && (le as any)(M)),
    pe: any = (M: any): any => ((Ce as any).get as any)(M)?.value ?? ((A as any).get as any)(M)?.trim() ?? "",
    Me: any = (M: any): any => ((Ce as any).get as any)((M as any).name)?.description ?? "",
    qe: any = ((_e as any).filter as any)((M: any): any => !(M as any).needsValue || ((Il as any)((pe as any)((M as any).name)) as any) === (null as any)),
    Ue: any = !c && (l as any) != (null as any) && (p as any) != (null as any) && (u?.harness as any) === ("temporal" as any) && ((u as any).viewerIsOwner as any) !== (!1 as any) && ((u as any).visibility as any) === ((Mt as any).team as any);
  let re: any;
  ((e as any)[17] as any) !== ((t as any).event as any) ? (re = (((t as any).event as any).type as any) === ("team-shared" as any) && ((Dt as any)((t as any).event, "secrets") as any) !== (void 0 as any), (e as any)[17] = (t as any).event, (e as any)[18] = re) : re = (e as any)[18];
  const Je: any = re,
    je: any = Ue && Je,
    Xe: any = (Ct as any)("grok_bot_multiplayer"),
    He: any = (Et as any)(u, Xe),
    he: any = (Ji as any)((L as any).kind, Re, r, He),
    Ee: any = (((t as any).event as any).type as any) === ("team-shared" as any) && (((t as any).event as any).unshared as any) === (!0 as any),
    ze: any = (j as any).isSettled && ((ne as any).length as any) === (0 as any);
  let De: any;
  ((e as any)[19] as any) !== ((j as any).rows as any) ? (De = (((j as any).rows as any).some as any)(Hi), (e as any)[19] = (j as any).rows, (e as any)[20] = De) : De = (e as any)[20];
  const Ye: any = !De,
    Qe: any = (): any => {
      if (!((O as any) == (null as any) || !je)) {
        if (((n as any).status as any) === ("proposed" as any)) {
          ((T as any).send as any)({
            resolution: {
              kind: "dismissed"
            },
            value: Zn
          });
          return;
        }
        (((y as any).get as any)("widget", O) as any) == (null as any) && ((y as any).record as any)("widget", O, {
          kind: "dismissed"
        }), (d as any)();
      }
    },
    Ae: any = async (): Promise<any> => {
      if (((qe as any).length as any) > (0 as any)) {
        await (et as any)();
        return;
      }
      if (!((T as any).retry as any)()) {
        if (Ke) {
          (d as any)();
          return;
        }
        (Qe as any)();
      }
    },
    Se: any = (M: any): any => ((F as any)((Ie: any): any => [...Ie, M]), (ke as any)((M as any).name, !0), !0),
    et: any = async (): Promise<any> => {
      if (!je || (p as any) == (null as any) || ((L as any).kind as any) === ("running" as any)) return;
      (ce as any)({
        kind: "running"
      });
      const M: any = await (ea as any)({
        serverId: p,
        ticked: qe,
        secretOf: (Ie: any): any => ({
          value: (pe as any)((Ie as any).name),
          description: (Me as any)(Ie)
        }),
        carryOverSecrets: N,
        putSecret: k
      });
      if (((M as any).kind as any) === ("failed" as any)) {
        (ce as any)({
          kind: "idle",
          didFail: !0
        });
        return;
      }
      if (((((M as any).result as any).failed as any).length as any) > (0 as any)) {
        (ce as any)({
          kind: "idle",
          partial: (M as any).result
        });
        return;
      }
      (C as any)(new (Map as any)()), (F as any)([]), (ce as any)(M), ((T as any).send as any)({
        resolution: {
          kind: "answered",
          value: fs
        },
        value: fs
      }, (): any => (ce as any)({
        kind: "idle"
      }));
    };
  let Pe: any;
  ((e as any)[21] as any) !== (a as any) ? (Pe = (a as any)({
    id: "MAv87s"
  }), (e as any)[21] = a, (e as any)[22] = Pe) : Pe = (e as any)[22];
  const Ne: any = Pe;
  let Te: any;
  ((e as any)[23] as any) !== (Ye as any) ? (Te = Ye ? ((i as any).jsx as any)(w, {
    id: "K/F6pa"
  }) : ((i as any).jsx as any)(w, {
    id: "1XFTF/"
  }), (e as any)[23] = Ye, (e as any)[24] = Te) : Te = (e as any)[24];
  const ie: any = Te;
  if (!r && Y && (R as any)(!1), !r && Q && (q as any)(!1), (Ke as any) !== (Ge as any) && ((Le as any)(Ke), (z as any)(null)), !r && ((L as any).kind as any) === ("running" as any)) {
    let M: any;
    return ((e as any)[25] as any) !== (ie as any) || ((e as any)[26] as any) !== (Ne as any) || ((e as any)[27] as any) !== (f as any) ? (M = ((i as any).jsx as any)(bt, {
      title: Ne,
      titleId: f,
      children: ie
    }), (e as any)[25] = ie, (e as any)[26] = Ne, (e as any)[27] = f, (e as any)[28] = M) : M = (e as any)[28], M;
  }
  if ((he as any) === ("dismissed" as any) || (he as any) === ("saved" as any)) {
    let M: any;
    ((e as any)[29] as any) !== (Z as any) || ((e as any)[30] as any) !== ((L as any).kind as any) || ((e as any)[31] as any) !== ((L as any).result as any) ? (M = ((L as any).kind as any) === ("done" as any) ? ((L as any).result as any).copied : [...Z], (e as any)[29] = Z, (e as any)[30] = (L as any).kind, (e as any)[31] = (L as any).result, (e as any)[32] = M) : M = (e as any)[32];
    const Ie: any = M,
      g: any = !c && !Ee,
      U: any = g ? o : void 0;
    let ae: any, me: any;
    ((e as any)[33] as any) !== (a as any) ? (ae = (rn: any): any => (a as any)({
      id: "ZJlZEU",
      values: {
        count: rn
      }
    }), me = (a as any)({
      id: "Vq6/r4"
    }), (e as any)[33] = a, (e as any)[34] = ae, (e as any)[35] = me) : (ae = (e as any)[34], me = (e as any)[35]);
    let tt: any;
    ((e as any)[36] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (tt = [((i as any).jsx as any)(kt, {
      name: "key"
    }, "key")], (e as any)[36] = tt) : tt = (e as any)[36];
    let ot: any;
    ((e as any)[37] as any) !== (Ie as any) || ((e as any)[38] as any) !== (ae as any) || ((e as any)[39] as any) !== (me as any) ? (ot = ((i as any).jsx as any)(ft, {
      countLabelOf: ae,
      emptyLabel: me,
      icons: tt,
      names: Ie
    }), (e as any)[37] = Ie, (e as any)[38] = ae, (e as any)[39] = me, (e as any)[40] = ot) : ot = (e as any)[40];
    let pt: any;
    ((e as any)[41] as any) !== (g as any) || ((e as any)[42] as any) !== (o as any) || ((e as any)[43] as any) !== (Ne as any) ? (pt = g ? ((i as any).jsx as any)(vt, {
      name: Ne,
      onClick: o
    }) : null, (e as any)[41] = g, (e as any)[42] = o, (e as any)[43] = Ne, (e as any)[44] = pt) : pt = (e as any)[44];
    let $t: any;
    return ((e as any)[45] as any) !== (U as any) || ((e as any)[46] as any) !== (ot as any) || ((e as any)[47] as any) !== (pt as any) || ((e as any)[48] as any) !== (Ne as any) || ((e as any)[49] as any) !== (f as any) ? ($t = ((i as any).jsx as any)(Fe, {
      isExpanded: !1,
      onExpand: U,
      summary: ot,
      title: Ne,
      titleId: f,
      trailing: pt
    }), (e as any)[45] = U, (e as any)[46] = ot, (e as any)[47] = pt, (e as any)[48] = Ne, (e as any)[49] = f, (e as any)[50] = $t) : $t = (e as any)[50], $t;
  }
  let Ve: any;
  ((e as any)[51] as any) !== ((L as any).kind as any) || ((e as any)[52] as any) !== ((L as any).partial as any) ? (Ve = ((L as any).kind as any) === ("idle" as any) && ((L as any).partial as any) !== (void 0 as any) ? ((i as any).jsx as any)(en, {
    result: (L as any).partial
  }) : null, (e as any)[51] = (L as any).kind, (e as any)[52] = (L as any).partial, (e as any)[53] = Ve) : Ve = (e as any)[53];
  const $e: any = Ve;
  if (!r) {
    const M: any = ((ne as any).filter as any)(Zi);
    let Ie: any = null;
    if (((_e as any).length as any) > (0 as any)) {
      let me: any;
      ((e as any)[54] as any) !== (_e as any) ? (me = ((i as any).jsx as any)(w, {
        id: "Df+sp6",
        values: {
          0: (_e as any).length
        }
      }), (e as any)[54] = _e, (e as any)[55] = me) : me = (e as any)[55], Ie = me;
    } else if ((j as any).isSettled && ((M as any).length as any) > (0 as any)) {
      let me: any;
      ((e as any)[56] as any) !== (M as any) ? (me = ((i as any).jsx as any)(w, {
        id: "RddvI3",
        values: {
          0: (M as any).length
        }
      }), (e as any)[56] = M, (e as any)[57] = me) : me = (e as any)[57], Ie = me;
    }
    if (((L as any).kind as any) === ("idle" as any) && ((L as any).didFail as any) === (!0 as any)) {
      let me: any;
      ((e as any)[58] as any) !== (a as any) ? (me = (a as any)({
        id: "CwSm8P"
      }), (e as any)[58] = a, (e as any)[59] = me) : me = (e as any)[59], Ie = me;
    }
    let g: any;
    ((e as any)[60] as any) !== ($e as any) || ((e as any)[61] as any) !== (T as any) ? (g = (T as any).didFail ? ((i as any).jsx as any)(it, {
      tap: T
    }) : $e, (e as any)[60] = $e, (e as any)[61] = T, (e as any)[62] = g) : g = (e as any)[62];
    const U: any = Je ? o : void 0;
    let ae: any;
    return ((e as any)[63] as any) !== (Ie as any) || ((e as any)[64] as any) !== (g as any) || ((e as any)[65] as any) !== (U as any) || ((e as any)[66] as any) !== (Ne as any) || ((e as any)[67] as any) !== (f as any) ? (ae = ((i as any).jsx as any)(Fe, {
      details: g,
      isExpanded: !1,
      isSummaryPending: !0,
      onExpand: U,
      summary: Ie,
      title: Ne,
      titleId: f
    }), (e as any)[63] = Ie, (e as any)[64] = g, (e as any)[65] = U, (e as any)[66] = Ne, (e as any)[67] = f, (e as any)[68] = ae) : ae = (e as any)[68], ae;
  }
  const v: any = ((L as any).kind as any) === ("running" as any),
    W: any = m && ((qe as any).length as any) === (0 as any) ? ((i as any).jsx as any)(w, {
      id: "6Uau97"
    }) : ((i as any).jsx as any)(w, {
      id: "xGVfLh"
    }),
    ye: any = v || !je || !(j as any).isSettled,
    oe: any = v || !Ue || !(j as any).isSettled,
    ve: any = (M: any): any => ((i as any).jsx as any)(Js, {
      isChecked: (le as any)(M),
      isDisabled: ye,
      onChange: (Ie: any): any => (ke as any)((M as any).name, Ie),
      onValueChange: (Ie: any): any => (C as any)((g: any): any => ((new (Map as any)(g) as any).set as any)((M as any).name, Ie)),
      row: M,
      value: ((Ce as any).has as any)((M as any).name) ? null : ((A as any).get as any)((M as any).name) ?? ""
    }, (M as any).name);
  let ue: any;
  ((e as any)[69] as any) !== (ze as any) ? (ue = ze ? ((i as any).jsx as any)(w, {
    id: "/R4ABa"
  }) : void 0, (e as any)[69] = ze, (e as any)[70] = ue) : ue = (e as any)[70];
  let de: any;
  ((e as any)[71] as any) !== (a as any) ? (de = (a as any)({
    id: "K4s5mJ"
  }), (e as any)[71] = a, (e as any)[72] = de) : de = (e as any)[72];
  const be: any = Ys;
  let fe: any;
  ((e as any)[73] as any) !== (R as any) || ((e as any)[74] as any) !== (q as any) ? (fe = (): any => {
    (q as any)(!1), (R as any)(!0);
  }, (e as any)[73] = R, (e as any)[74] = q, (e as any)[75] = fe) : fe = (e as any)[75];
  const Be: any = ((ne as any).map as any)(ve);
  let x: any;
  ((e as any)[76] as any) !== (be as any) || ((e as any)[77] as any) !== (Q as any) || ((e as any)[78] as any) !== (q as any) || ((e as any)[79] as any) !== (fe as any) || ((e as any)[80] as any) !== (Be as any) ? (x = ((i as any).jsx as any)(be, {
    onAddNew: fe,
    onOpenChange: q,
    open: Q,
    children: Be
  }), (e as any)[76] = be, (e as any)[77] = Q, (e as any)[78] = q, (e as any)[79] = fe, (e as any)[80] = Be, (e as any)[81] = x) : x = (e as any)[81];
  let K: any;
  ((e as any)[82] as any) !== ((j as any).isBoxCardUnreachable as any) ? (K = (j as any).isBoxCardUnreachable ? ((i as any).jsx as any)(Ze, {
    children: ((i as any).jsx as any)(w, {
      id: "V3z1Kr"
    })
  }) : null, (e as any)[82] = (j as any).isBoxCardUnreachable, (e as any)[83] = K) : K = (e as any)[83];
  let X: any;
  ((e as any)[84] as any) !== ((L as any).didFail as any) || ((e as any)[85] as any) !== ((L as any).kind as any) ? (X = ((L as any).kind as any) === ("idle" as any) && ((L as any).didFail as any) === (!0 as any) ? ((i as any).jsx as any)(Ze, {
    children: ((i as any).jsx as any)(w, {
      id: "CwSm8P"
    })
  }) : null, (e as any)[84] = (L as any).didFail, (e as any)[85] = (L as any).kind, (e as any)[86] = X) : X = (e as any)[86];
  let ee: any;
  ((e as any)[87] as any) !== (T as any) ? (ee = ((i as any).jsx as any)(it, {
    tap: T
  }), (e as any)[87] = T, (e as any)[88] = ee) : ee = (e as any)[88];
  let S: any;
  ((e as any)[89] as any) !== (Ae as any) ? (S = (): any => {
    (Ae as any)();
  }, (e as any)[89] = Ae, (e as any)[90] = S) : S = (e as any)[90];
  let te: any;
  ((e as any)[91] as any) !== (W as any) || ((e as any)[92] as any) !== (Ke as any) ? (te = Ke ? ((i as any).jsx as any)(w, {
    id: "DPfwMq"
  }) : W, (e as any)[91] = W, (e as any)[92] = Ke, (e as any)[93] = te) : te = (e as any)[93];
  let We: any;
  ((e as any)[94] as any) !== (ie as any) || ((e as any)[95] as any) !== (v as any) || ((e as any)[96] as any) !== (te as any) ? (We = ((i as any).jsx as any)(jl, {
    busy: ie,
    idle: te,
    isBusy: v
  }), (e as any)[94] = ie, (e as any)[95] = v, (e as any)[96] = te, (e as any)[97] = We) : We = (e as any)[97];
  let we: any;
  ((e as any)[98] as any) !== (ye as any) || ((e as any)[99] as any) !== (v as any) || ((e as any)[100] as any) !== (S as any) || ((e as any)[101] as any) !== (We as any) ? (we = ((i as any).jsx as any)(Ft, {
    disabled: ye,
    onClick: S,
    pending: v,
    children: We
  }), (e as any)[98] = ye, (e as any)[99] = v, (e as any)[100] = S, (e as any)[101] = We, (e as any)[102] = we) : we = (e as any)[102];
  let nt: any;
  ((e as any)[103] as any) !== (R as any) ? (nt = (): any => (R as any)(!0), (e as any)[103] = R, (e as any)[104] = nt) : nt = (e as any)[104];
  let mt: any;
  ((e as any)[105] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (mt = ((i as any).jsx as any)(w, {
    id: "E0czcG"
  }), (e as any)[105] = mt) : mt = (e as any)[105];
  let ct: any;
  ((e as any)[106] as any) !== (oe as any) || ((e as any)[107] as any) !== (nt as any) ? (ct = ((i as any).jsx as any)(rt, {
    disabled: oe,
    onClick: nt,
    variant: "secondary",
    children: mt
  }), (e as any)[106] = oe, (e as any)[107] = nt, (e as any)[108] = ct) : ct = (e as any)[108];
  const ut: any = ((ne as any).length as any) > (Ot as any) ? ((i as any).jsx as any)(rt, {
    disabled: oe,
    onClick: (): any => (q as any)(!0),
    variant: "secondary",
    children: ((i as any).jsx as any)(w, {
      id: "rbhuSv"
    })
  }) : null;
  let St: any;
  return ((e as any)[109] as any) !== (we as any) || ((e as any)[110] as any) !== (ct as any) || ((e as any)[111] as any) !== (ut as any) ? (St = ((i as any).jsxs as any)(Pt, {
    children: [we, ct, ut]
  }), (e as any)[109] = we, (e as any)[110] = ct, (e as any)[111] = ut, (e as any)[112] = St) : St = (e as any)[112], ((i as any).jsxs as any)(Fe, {
    onExpand: o,
    subtitle: ue,
    title: de,
    titleId: f,
    children: [((ne as any).length as any) === (0 as any) ? null : ((i as any).jsx as any)(_t, {
      hasIcons: !0,
      children: ((Oe as any).map as any)(ve)
    }), ((i as any).jsx as any)(Dl, {
      isDisabled: oe,
      onAdd: Se,
      onOpenChange: R,
      open: Y,
      takenNames: new (Set as any)(((ne as any).map as any)(qi))
    }), x, K, X, ee, $e, St]
  });
}
function qi(this: any, s: any): any {
  return (s as any).name;
}
function Zi(this: any, s: any): any {
  return !(s as any).done;
}
function Hi(this: any, s: any): any {
  return !(s as any).done;
}
function Qi(this: any, s: any): any {
  return [(s as any).name, s];
}
function Xi(this: any, s: any): any {
  return (s as any).name;
}
function Yi(this: any, s: any): any {
  return (s as any).done;
}
function Ys(this: any, s: any): any {
  (Ys as any).d = 523;
  const e: any = ((ge as any).c as any)(22),
    {
      open: t,
      onOpenChange: n,
      onAddNew: l,
      children: c
    }: any = s;
  let r: any;
  ((e as any)[0] as any) !== (n as any) ? (r = (): any => (n as any)(!1), (e as any)[0] = n, (e as any)[1] = r) : r = (e as any)[1];
  let o: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = ((i as any).jsx as any)(Nl, {
    title: ((i as any).jsx as any)(w, {
      id: "K4s5mJ"
    })
  }), (e as any)[2] = o) : o = (e as any)[2];
  let d: any;
  ((e as any)[3] as any) !== (c as any) ? (d = ((i as any).jsx as any)((dt as any).Body, {
    style: (Ht as any).dialogBody,
    children: ((i as any).jsx as any)(_t, {
      hasIcons: !0,
      shown: (c as any).length,
      children: c
    })
  }), (e as any)[3] = c, (e as any)[4] = d) : d = (e as any)[4];
  let a: any;
  ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((i as any).jsx as any)(w, {
    id: "E0czcG"
  }), (e as any)[5] = a) : a = (e as any)[5];
  let m: any;
  ((e as any)[6] as any) !== (l as any) ? (m = ((i as any).jsx as any)((dt as any).Action, {
    onClick: l,
    variant: "secondary",
    children: a
  }), (e as any)[6] = l, (e as any)[7] = m) : m = (e as any)[7];
  let f: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = ((i as any).jsx as any)((dt as any).ActionSpacer, {}), (e as any)[8] = f) : f = (e as any)[8];
  let u: any;
  ((e as any)[9] as any) !== (n as any) ? (u = (): any => (n as any)(!1), (e as any)[9] = n, (e as any)[10] = u) : u = (e as any)[10];
  let p: any;
  ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = ((i as any).jsx as any)(w, {
    id: "DPfwMq"
  }), (e as any)[11] = p) : p = (e as any)[11];
  let y: any;
  ((e as any)[12] as any) !== (u as any) ? (y = ((i as any).jsx as any)((dt as any).Action, {
    onClick: u,
    variant: "primary",
    children: p
  }), (e as any)[12] = u, (e as any)[13] = y) : y = (e as any)[13];
  let h: any;
  ((e as any)[14] as any) !== (m as any) || ((e as any)[15] as any) !== (y as any) ? (h = ((i as any).jsxs as any)((dt as any).ActionBar, {
    children: [m, f, y]
  }), (e as any)[14] = m, (e as any)[15] = y, (e as any)[16] = h) : h = (e as any)[16];
  let b: any;
  return ((e as any)[17] as any) !== (t as any) || ((e as any)[18] as any) !== (r as any) || ((e as any)[19] as any) !== (h as any) || ((e as any)[20] as any) !== (d as any) ? (b = ((i as any).jsxs as any)(Ls, {
    height: "hug",
    onClose: r,
    open: t,
    children: [o, d, h]
  }), (e as any)[17] = t, (e as any)[18] = r, (e as any)[19] = h, (e as any)[20] = d, (e as any)[21] = b) : b = (e as any)[21], b;
}
function Ji(this: any, s: any, e: any, t: any, n: any): any {
  const l: any = (s as any) === ("done" as any) ? "saved" : e;
  return (l as any) === ("dismissed" as any) && t || (l as any) === ("saved" as any) && t && n ? "proposed" : l;
}
async function ea(this: any, s: any): Promise<any> {
  try {
    const e: any = [],
      t: any = (((((s as any).ticked as any).filter as any)((n: any): any => !(n as any).needsValue) as any).map as any)((n: any): any => (n as any).name);
    ((t as any).length as any) > (0 as any) && ((e as any).push as any)(...(await ((s as any).carryOverSecrets as any)((s as any).serverId, t)));
    for (const n of (((s as any).ticked as any).filter as any)((l: any): any => (l as any).needsValue)) try {
      await ((s as any).putSecret as any)((s as any).serverId, {
        name: (n as any).name,
        ...((s as any).secretOf as any)(n)
      }), ((e as any).push as any)({
        name: (n as any).name,
        outcome: "copied"
      });
    } catch (l: any) {
      (wt as any)(l, {
        tags: {
          sand_area: "team-secrets"
        }
      }), ((e as any).push as any)({
        name: (n as any).name,
        outcome: "failed"
      });
    }
    return {
      kind: "done",
      result: {
        copied: ((((e as any).filter as any)((n: any): any => ((n as any).outcome as any) === ("copied" as any)) as any).map as any)((n: any): any => (n as any).name),
        failed: ((e as any).filter as any)((n: any): any => ((n as any).outcome as any) !== ("copied" as any))
      }
    };
  } catch (e: any) {
    return (wt as any)(e, {
      tags: {
        sand_area: "team-secrets"
      }
    }), {
      kind: "failed"
    };
  }
}
function Js(this: any, s: any): any {
  (Js as any).d = 524;
  const e: any = ((ge as any).c as any)(21),
    {
      row: t,
      isChecked: n,
      isDisabled: l,
      value: c,
      onChange: r,
      onValueChange: o
    }: any = s,
    {
      _: d
    }: any = (st as any)(),
    {
      pluginName: a
    }: any = t;
  let m: any;
  ((e as any)[0] as any) !== (d as any) || ((e as any)[1] as any) !== (a as any) || ((e as any)[2] as any) !== ((t as any).reason as any) ? (m = (t as any).reason ?? ((a as any) === (void 0 as any) ? void 0 : (d as any)({
    id: "b5hlxW",
    values: {
      pluginName: a
    }
  })), (e as any)[0] = d, (e as any)[1] = a, (e as any)[2] = (t as any).reason, (e as any)[3] = m) : m = (e as any)[3];
  const f: any = m;
  let u: any;
  ((e as any)[4] as any) !== (d as any) || ((e as any)[5] as any) !== (n as any) || ((e as any)[6] as any) !== (l as any) || ((e as any)[7] as any) !== (o as any) || ((e as any)[8] as any) !== ((t as any).done as any) || ((e as any)[9] as any) !== ((t as any).name as any) || ((e as any)[10] as any) !== ((t as any).needsValue as any) || ((e as any)[11] as any) !== (c as any) ? (u = !(t as any).done && (t as any).needsValue && n && (c as any) !== (null as any) ? ((i as any).jsx as any)("input", {
    "aria-label": (d as any)({
      id: "WpfUxq",
      values: {
        0: (t as any).name
      }
    }),
    autoComplete: "off",
    disabled: l,
    onChange: (y: any): any => (o as any)(((y as any).currentTarget as any).value),
    placeholder: (d as any)({
      id: "set3Vx"
    }),
    spellCheck: !1,
    type: "password",
    value: c,
    ...(jt as any)((gt as any).body2, (Ht as any).field)
  }) : null, (e as any)[4] = d, (e as any)[5] = n, (e as any)[6] = l, (e as any)[7] = o, (e as any)[8] = (t as any).done, (e as any)[9] = (t as any).name, (e as any)[10] = (t as any).needsValue, (e as any)[11] = c, (e as any)[12] = u) : u = (e as any)[12];
  let p: any;
  return ((e as any)[13] as any) !== (n as any) || ((e as any)[14] as any) !== (l as any) || ((e as any)[15] as any) !== (r as any) || ((e as any)[16] as any) !== (f as any) || ((e as any)[17] as any) !== ((t as any).done as any) || ((e as any)[18] as any) !== ((t as any).name as any) || ((e as any)[19] as any) !== (u as any) ? (p = ((i as any).jsx as any)(Tt, {
    isChecked: n,
    isDisabled: l,
    isDone: (t as any).done,
    onChange: r,
    reason: f,
    title: (t as any).name,
    titleStyle: (Ht as any).name,
    children: u
  }), (e as any)[13] = n, (e as any)[14] = l, (e as any)[15] = r, (e as any)[16] = f, (e as any)[17] = (t as any).done, (e as any)[18] = (t as any).name, (e as any)[19] = u, (e as any)[20] = p) : p = (e as any)[20], p;
}
function en(this: any, s: any): any {
  (en as any).d = 525;
  const e: any = ((ge as any).c as any)(12),
    {
      result: t
    }: any = s,
    {
      _: n
    }: any = (st as any)();
  let l: any;
  ((e as any)[0] as any) !== (n as any) ? (l = (a: any): any => {
    const {
      name: m,
      outcome: f
    }: any = a;
    switch (f) {
      case "box-unreachable":
        return (n as any)({
          id: "s1goKk",
          values: {
            name: m
          }
        });
      case "invalid-value":
        return (n as any)({
          id: "JwaZnP",
          values: {
            name: m,
            GROK_BOT_SECRET_VALUE_MIN_LENGTH: Ol,
            GROK_BOT_SECRET_VALUE_MAX_KIB: Rl
          }
        });
      case "failed":
        return (n as any)({
          id: "fySl0g",
          values: {
            name: m
          }
        });
      case "missing":
      case "invalid-name":
        return (n as any)({
          id: "CCZHoj",
          values: {
            name: m
          }
        });
    }
  }, (e as any)[0] = n, (e as any)[1] = l) : l = (e as any)[1];
  const c: any = l;
  let r: any;
  ((e as any)[2] as any) !== (((t as any).copied as any).length as any) ? (r = (((t as any).copied as any).length as any) === (0 as any) ? null : ((i as any).jsx as any)(Ze, {
    children: ((i as any).jsx as any)(w, {
      id: "cxm8D4",
      values: {
        0: ((t as any).copied as any).length
      }
    })
  }), (e as any)[2] = ((t as any).copied as any).length, (e as any)[3] = r) : r = (e as any)[3];
  let o: any;
  if (((e as any)[4] as any) !== (c as any) || ((e as any)[5] as any) !== ((t as any).failed as any)) {
    let a: any;
    ((e as any)[7] as any) !== (c as any) ? (a = (m: any): any => ((i as any).jsx as any)(Ze, {
      children: (c as any)(m)
    }, (m as any).name), (e as any)[7] = c, (e as any)[8] = a) : a = (e as any)[8], o = (((t as any).failed as any).map as any)(a), (e as any)[4] = c, (e as any)[5] = (t as any).failed, (e as any)[6] = o;
  } else o = (e as any)[6];
  let d: any;
  return ((e as any)[9] as any) !== (r as any) || ((e as any)[10] as any) !== (o as any) ? (d = ((i as any).jsxs as any)((i as any).Fragment, {
    children: [r, o]
  }), (e as any)[9] = r, (e as any)[10] = o, (e as any)[11] = d) : d = (e as any)[11], d;
}
function rs(this: any, s: any): any {
  (rs as any).d = 554;
  const e: any = ((ge as any).c as any)(94),
    {
      entry: t,
      slot: n,
      agentId: l,
      isReadOnly: c,
      isExpanded: r,
      onExpand: o,
      onCollapse: d
    }: any = s,
    {
      _: a
    }: any = (st as any)(),
    {
      isChained: m
    }: any = (At as any)(),
    f: any = ((G as any).useId as any)(),
    u: any = (xt as any)(l),
    p: any = (es as any)(l),
    y: any = (Jt as any)(l),
    h: any = (bs as any)(l),
    b: any = (Hn as any)((It as any)(h, [])),
    E: any = (ws as any)(),
    j: any = (Cs as any)(),
    N: any = (_s as any)(),
    {
      localAnswers: k,
      workflows: _
    }: any = (yt as any)(),
    T: any = ((G as any).useContext as any)(Qt),
    D: any = (Ct as any)("grok_bot_multiplayer"),
    O: any = (lt as any)((t as any).id, "skills"),
    $: any = (l as any) == (null as any) ? null : {
      agentId: l,
      entryId: O
    },
    P: any = (at as any)("widget", {
      agentId: l,
      entryId: O
    });
  let z: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (z = new (Map as any)(), (e as any)[0] = z) : z = (e as any)[0];
  const [I, A]: any = ((G as any).useState as any)(z);
  let C: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (C = {
    kind: "idle"
  }, (e as any)[1] = C) : C = (e as any)[1];
  const [V, H]: any = ((G as any).useState as any)(C);
  let F: any;
  ((e as any)[2] as any) !== (l as any) || ((e as any)[3] as any) !== ((t as any).id as any) || ((e as any)[4] as any) !== (d as any) || ((e as any)[5] as any) !== (o as any) || ((e as any)[6] as any) !== ((n as any).status as any) ? (F = {
    agentId: l,
    entryId: (t as any).id,
    kind: "skills",
    slotStatus: (n as any).status,
    sandArea: "team-skills",
    onExpand: o,
    onCollapse: d
  }, (e as any)[2] = l, (e as any)[3] = (t as any).id, (e as any)[4] = d, (e as any)[5] = o, (e as any)[6] = (n as any).status, (e as any)[7] = F) : F = (e as any)[7];
  const Y: any = (Nt as any)(F),
    [R, Q]: any = ((G as any).useState as any)(!1),
    [q, B]: any = ((G as any).useState as any)(!1);
  let L: any;
  ((e as any)[8] as any) !== (p as any) ? (L = (Gt as any)(p) || ((p as any).status as any) === ("empty" as any), (e as any)[8] = p, (e as any)[9] = L) : L = (e as any)[9];
  const ce: any = L,
    Re: any = (Qn as any)((y as any).plugins),
    Ke: any = ce ? ((Ts as any)((y as any).plugins) as any).librarySkills : null;
  let Ge: any, Le: any, se: any;
  if (((e as any)[10] as any) !== (r as any) || ((e as any)[11] as any) !== (P as any) || ((e as any)[12] as any) !== ((n as any).status as any)) {
    const g: any = (Xn as any)((n as any).status, P);
    Ge = (g as any) === ("added" as any), Le = (g as any) === ("dismissed" as any) && r ? "proposed" : g, se = (Vt as any)(g, r), (e as any)[10] = r, (e as any)[11] = P, (e as any)[12] = (n as any).status, (e as any)[13] = Ge, (e as any)[14] = Le, (e as any)[15] = se;
  } else Ge = (e as any)[13], Le = (e as any)[14], se = (e as any)[15];
  const Z: any = se,
    J: any = (Yn as any)({
      slot: n,
      botSkills: Ke,
      staged: [],
      isTaken: Ge,
      locale: (Rt as any)()
    }),
    xe: any = ((J as any).slice as any)(0, Ot);
  let Ce: any;
  ((e as any)[16] as any) !== (I as any) ? (Ce = (g: any): any => ((I as any).get as any)((g as any).key) ?? (g as any).checked, (e as any)[16] = I, (e as any)[17] = Ce) : Ce = (e as any)[17];
  const ne: any = Ce;
  let Oe: any;
  ((e as any)[18] as any) !== (ne as any) ? (Oe = (g: any): any => !(g as any).onBot && (ne as any)(g), (e as any)[18] = ne, (e as any)[19] = Oe) : Oe = (e as any)[19];
  const le: any = ((xe as any).filter as any)(Oe);
  let ke: any;
  ((e as any)[20] as any) !== (ne as any) ? (ke = (g: any): any => (g as any).onBot && !(ne as any)(g), (e as any)[20] = ne, (e as any)[21] = ke) : ke = (e as any)[21];
  const _e: any = ((xe as any).filter as any)(ke),
    pe: any = (((le as any).length as any) + ((_e as any).length as any) as any) > (0 as any),
    Me: any = (g: any): any => {
      if (((g as any).draft as any) != (null as any)) return ((((g as any).draft as any).body as any).length as any) > (0 as any) ? ((g as any).draft as any).body : ((b as any).find as any)((U: any): any => ((U as any).id as any) === ((g as any).key as any) || ((Rs as any)((U as any).name) as any) === ((g as any).key as any))?.body;
    },
    qe: any = (g: any): any => {
      const U: any = (Me as any)(g);
      return ((g as any).draft as any) == (null as any) || (U as any) === (void 0 as any) ? void 0 : (nl as any)({
        ...(g as any).draft,
        body: U
      });
    };
  let Ue: any;
  ((e as any)[22] as any) !== (h as any) ? (Ue = (Gt as any)(h) || ((h as any).status as any) === ("empty" as any) || ((h as any).status as any) === ("unavailable" as any), (e as any)[22] = h, (e as any)[23] = Ue) : Ue = (e as any)[23];
  const re: any = Ue,
    je: any = !((le as any).some as any)(ca) || re,
    Xe: any = !je && ((h as any).status as any) === ("failed" as any),
    He: any = !ce && ((p as any).status as any) === ("failed" as any) || Xe,
    he: any = !c && (l as any) != (null as any) && (u?.harness as any) === ("temporal" as any) && ((u as any).viewerIsOwner as any) !== (!1 as any) && ((u as any).visibility as any) === ((Mt as any).team as any),
    Ee: any = ((V as any).kind as any) === ("running" as any),
    ze: any = Ee || !he || !ce || !je,
    De: any = !ce && ((p as any).status as any) === ("loading" as any),
    Ye: any = De || !je && ((h as any).status as any) === ("loading" as any),
    Qe: any = (((t as any).event as any).type as any) === ("team-shared" as any) && (((t as any).event as any).unshared as any) === (!0 as any),
    Ae: any = he && !Qe,
    Se: any = he && (T as any) != (null as any) && (Et as any)(u, D),
    et: any = ce && re && (Jn as any)(xe, b, Re),
    Pe: any = Se && (T as any) != (null as any) && et ? (T as any).openTeamBotSkills : null,
    Ne: any = (): any => {
      if (!(($ as any) == (null as any) || Ee || !he)) {
        if (((n as any).status as any) === ("proposed" as any)) {
          ((Y as any).send as any)({
            resolution: {
              kind: "dismissed"
            },
            value: sl
          });
          return;
        }
        (((k as any).get as any)("widget", $) as any) == (null as any) && ((k as any).record as any)("widget", $, {
          kind: "dismissed"
        }), (d as any)();
      }
    },
    Te: any = async (): Promise<any> => {
      if (ze || (l as any) == (null as any)) return;
      (H as any)({
        kind: "running"
      });
      const g: any = [],
        U: any = new (Set as any)(((J as any).flatMap as any)(da));
      for (const tt of le) {
        const ot: any = (qe as any)(tt),
          pt: any = (ot as any) === (void 0 as any) ? "missing" : await (Wt as any)((): any => (j as any)(l, ot));
        (pt as any) === (void 0 as any) ? ((U as any).add as any)((tt as any).key) : ((g as any).push as any)({
          name: (tt as any).title,
          action: "add",
          reason: pt
        });
      }
      for (const tt of _e) {
        const ot: any = await (Wt as any)((): any => (N as any)(l, (tt as any).key));
        (ot as any) === (void 0 as any) ? ((U as any).delete as any)((tt as any).key) : ((g as any).push as any)({
          name: (tt as any).title,
          action: "remove",
          reason: ot
        });
      }
      if (((g as any).length as any) > (0 as any)) {
        (H as any)({
          kind: "idle",
          failed: g
        });
        return;
      }
      ((le as any).length as any) > (0 as any) && (Q as any)(!0), (H as any)({
        kind: "idle"
      }), (A as any)(new (Map as any)());
      const ae: any = ((J as any).flatMap as any)((tt: any): any => ((tt as any).position as any) != (null as any) && ((U as any).has as any)((tt as any).key) ? [(tt as any).position] : []),
        me: any = (tl as any)(ae, (n as any).skills?.length ?? 0);
      ((Y as any).send as any)({
        resolution: {
          kind: "answered",
          value: me
        },
        value: me
      });
    };
  let ie: any;
  ((e as any)[24] as any) !== (j as any) || ((e as any)[25] as any) !== (l as any) ? (ie = async (g: any): Promise<any> => (l as any) == (null as any) || ((await (Wt as any)((): any => (j as any)(l, {
    name: (g as any).name,
    content: (ll as any)(g)
  }))) as any) !== (void 0 as any) ? !1 : ((Q as any)(!0), !0), (e as any)[24] = j, (e as any)[25] = l, (e as any)[26] = ie) : ie = (e as any)[26];
  const Ve: any = ie;
  if (!r && q && (B as any)(!1), (Le as any) === ("empty" as any)) return null;
  let $e: any;
  ((e as any)[27] as any) !== (a as any) ? ($e = (a as any)({
    id: "PCSkw2"
  }), (e as any)[27] = a, (e as any)[28] = $e) : $e = (e as any)[28];
  const v: any = $e;
  if ((Le as any) === ("pending" as any)) {
    let g: any;
    ((e as any)[29] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = ((i as any).jsx as any)(w, {
      id: "DgWLAO"
    }), (e as any)[29] = g) : g = (e as any)[29];
    let U: any;
    return ((e as any)[30] as any) !== (v as any) || ((e as any)[31] as any) !== (f as any) ? (U = ((i as any).jsx as any)(bt, {
      title: v,
      titleId: f,
      children: g
    }), (e as any)[30] = v, (e as any)[31] = f, (e as any)[32] = U) : U = (e as any)[32], U;
  }
  const W: any = Ge || ((J as any).some as any)(ra),
    ye: any = W || ((_e as any).length as any) > (0 as any),
    oe: any = async (): Promise<any> => {
      if (!ze && (pe || W || R)) {
        await (Te as any)();
        return;
      }
      (Ne as any)();
    };
  let ve: any;
  ((e as any)[33] as any) !== (R as any) || ((e as any)[34] as any) !== (m as any) || ((e as any)[35] as any) !== (pe as any) ? (ve = m && !pe && !R ? ((i as any).jsx as any)(w, {
    id: "6Uau97"
  }) : ((i as any).jsx as any)(w, {
    id: "xGVfLh"
  }), (e as any)[33] = R, (e as any)[34] = m, (e as any)[35] = pe, (e as any)[36] = ve) : ve = (e as any)[36];
  let ue: any = ve;
  if (ye || Z) {
    let g: any;
    ((e as any)[37] as any) !== (pe as any) ? (g = pe ? ((i as any).jsx as any)(w, {
      id: "tfDRzk"
    }) : ((i as any).jsx as any)(w, {
      id: "DPfwMq"
    }), (e as any)[37] = pe, (e as any)[38] = g) : g = (e as any)[38], ue = g;
  }
  const de: any = ye ? ((i as any).jsx as any)(w, {
    id: "K/F6pa"
  }) : ((i as any).jsx as any)(w, {
    id: "Z4OdvO"
  });
  if (!r && Ee) {
    let g: any;
    return ((e as any)[39] as any) !== (de as any) || ((e as any)[40] as any) !== (v as any) || ((e as any)[41] as any) !== (f as any) ? (g = ((i as any).jsx as any)(bt, {
      title: v,
      titleId: f,
      children: de
    }), (e as any)[39] = de, (e as any)[40] = v, (e as any)[41] = f, (e as any)[42] = g) : g = (e as any)[42], g;
  }
  let be: any;
  ((e as any)[43] as any) !== (a as any) ? (be = (g: any, U: any): any => ((g as any).length as any) === (0 as any) ? ((i as any).jsx as any)(ft, {
    emptyLabel: U,
    icons: [((i as any).jsx as any)(kt, {
      name: "cube"
    }, "cube")],
    names: []
  }) : ((i as any).jsx as any)(ft, {
    countLabelOf: (ae: any): any => (a as any)({
      id: "m+pG3Q",
      values: {
        count: ae
      }
    }),
    icons: (ss as any)(g, oa, aa),
    names: ((g as any).map as any)(ia)
  }), (e as any)[43] = a, (e as any)[44] = be) : be = (e as any)[44];
  const fe: any = be;
  if ((Le as any) === ("dismissed" as any)) {
    const g: any = !c && !Qe,
      U: any = ((J as any).filter as any)(la);
    let ae: any;
    return ((e as any)[45] as any) !== (g as any) || ((e as any)[46] as any) !== (De as any) || ((e as any)[47] as any) !== (o as any) || ((e as any)[48] as any) !== (v as any) ? (ae = g && !De ? ((i as any).jsx as any)(vt, {
      name: v,
      onClick: o
    }) : null, (e as any)[45] = g, (e as any)[46] = De, (e as any)[47] = o, (e as any)[48] = v, (e as any)[49] = ae) : ae = (e as any)[49], ((i as any).jsx as any)(Fe, {
      isExpanded: !1,
      onExpand: g ? o : void 0,
      summary: (fe as any)(U, De ? "" : (a as any)({
        id: "Vq6/r4"
      })),
      title: v,
      titleId: f,
      trailing: ae
    });
  }
  if ((Le as any) === ("added" as any) && !r) {
    const g: any = (el as any)(n, P),
      U: any = (Ke as any) == (null as any) ? ((J as any).filter as any)((me: any): any => ((me as any).position as any) != (null as any) && ((g as any).includes as any)((me as any).position)) : ((J as any).filter as any)(na);
    let ae: any;
    return ((e as any)[50] as any) !== (Ae as any) || ((e as any)[51] as any) !== (o as any) || ((e as any)[52] as any) !== (v as any) ? (ae = Ae ? ((i as any).jsx as any)(vt, {
      name: v,
      onClick: o
    }) : null, (e as any)[50] = Ae, (e as any)[51] = o, (e as any)[52] = v, (e as any)[53] = ae) : ae = (e as any)[53], ((i as any).jsx as any)(Fe, {
      isExpanded: !1,
      onExpand: Ae ? o : void 0,
      summary: (fe as any)(U, (a as any)({
        id: "5A5ntK"
      })),
      title: v,
      titleId: f,
      trailing: ae
    });
  }
  let Be: any;
  ((e as any)[54] as any) !== (a as any) || ((e as any)[55] as any) !== ((V as any).failed as any) || ((e as any)[56] as any) !== ((V as any).kind as any) ? (Be = ((V as any).kind as any) === ("idle" as any) ? (V as any).failed?.map((g: any): any => {
    const {
      name: U,
      action: ae,
      reason: me
    }: any = g;
    return ((i as any).jsx as any)(Ze, {
      children: (a as any)((ae as any) === ("add" as any) ? {
        id: "PZYVIo",
        values: {
          name: U,
          reason: me
        }
      } : {
        id: "M+YwD0",
        values: {
          name: U,
          reason: me
        }
      })
    }, `${ae}:${U}`);
  }) : null, (e as any)[54] = a, (e as any)[55] = (V as any).failed, (e as any)[56] = (V as any).kind, (e as any)[57] = Be) : Be = (e as any)[57];
  const x: any = Be;
  if (!r) {
    const g: any = (le as any).length;
    let U: any;
    return ((e as any)[58] as any) !== (x as any) || ((e as any)[59] as any) !== (Y as any) ? (U = (Y as any).didFail ? ((i as any).jsx as any)(it, {
      tap: Y
    }) : x, (e as any)[58] = x, (e as any)[59] = Y, (e as any)[60] = U) : U = (e as any)[60], ((i as any).jsx as any)(Fe, {
      details: U,
      isExpanded: !1,
      isSummaryPending: !0,
      onExpand: o,
      summary: (g as any) === (0 as any) ? ((i as any).jsx as any)(w, {
        id: "76J7mZ"
      }) : (a as any)({
        id: "y0eCAK",
        values: {
          count: g
        }
      }),
      title: v,
      titleId: f
    });
  }
  const K: any = ((xe as any).length as any) === (0 as any) && !Ye && !He,
    X: any = Se && (De || !re && ((h as any).status as any) === ("loading" as any));
  let ee: any = null;
  if ((Pe as any) != (null as any)) {
    let g: any;
    ((e as any)[61] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = ((i as any).jsx as any)(w, {
      id: "uDGDEn"
    }), (e as any)[61] = g) : g = (e as any)[61];
    let U: any;
    ((e as any)[62] as any) !== (Pe as any) || ((e as any)[63] as any) !== (ze as any) ? (U = ((i as any).jsx as any)(rt, {
      disabled: ze,
      onClick: Pe,
      variant: "secondary",
      children: g
    }), (e as any)[62] = Pe, (e as any)[63] = ze, (e as any)[64] = U) : U = (e as any)[64], ee = U;
  } else if (he && !X) {
    let g: any;
    ((e as any)[65] as any) !== (B as any) ? (g = (): any => (B as any)(!0), (e as any)[65] = B, (e as any)[66] = g) : g = (e as any)[66];
    let U: any;
    ((e as any)[67] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (U = ((i as any).jsx as any)(w, {
      id: "C/t3EV"
    }), (e as any)[67] = U) : U = (e as any)[67];
    let ae: any;
    ((e as any)[68] as any) !== (ze as any) || ((e as any)[69] as any) !== (g as any) ? (ae = ((i as any).jsx as any)(rt, {
      disabled: ze,
      onClick: g,
      variant: "secondary",
      children: U
    }), (e as any)[68] = ze, (e as any)[69] = g, (e as any)[70] = ae) : ae = (e as any)[70], ee = ae;
  }
  const S: any = new (Set as any)([...((J as any).map as any)(sa), ...((Re as any).map as any)(ta)]);
  let te: any;
  if (K && he) {
    let g: any;
    ((e as any)[71] as any) !== (Z as any) ? (g = Z ? ((i as any).jsx as any)(w, {
      id: "FC2nNz"
    }) : ((i as any).jsx as any)(w, {
      id: "k+6Lvl"
    }), (e as any)[71] = Z, (e as any)[72] = g) : g = (e as any)[72], te = g;
  }
  const We: any = te;
  let we: any;
  ((e as any)[73] as any) !== (a as any) ? (we = (a as any)({
    id: "StFqiS"
  }), (e as any)[73] = a, (e as any)[74] = we) : we = (e as any)[74];
  let nt: any;
  ((e as any)[75] as any) !== (a as any) || ((e as any)[76] as any) !== (l as any) || ((e as any)[77] as any) !== (he as any) || ((e as any)[78] as any) !== (He as any) || ((e as any)[79] as any) !== (E as any) || ((e as any)[80] as any) !== (_ as any) ? (nt = He && he && (l as any) != (null as any) ? ((i as any).jsxs as any)((i as any).Fragment, {
    children: [((i as any).jsx as any)(Ze, {
      children: (a as any)({
        id: "YSw1zm"
      })
    }), ((i as any).jsx as any)(rt, {
      onClick: (): any => {
        (E as any)(l), ((_ as any).refresh as any)(l);
      },
      size: "sm",
      variant: "tertiary",
      children: ((i as any).jsx as any)(w, {
        id: "6gRgw8"
      })
    })]
  }) : null, (e as any)[75] = a, (e as any)[76] = l, (e as any)[77] = he, (e as any)[78] = He, (e as any)[79] = E, (e as any)[80] = _, (e as any)[81] = nt) : nt = (e as any)[81];
  let mt: any;
  ((e as any)[82] as any) !== (Y as any) ? (mt = ((i as any).jsx as any)(it, {
    tap: Y
  }), (e as any)[82] = Y, (e as any)[83] = mt) : mt = (e as any)[83];
  const ct: any = Ee || !he || Ye;
  let ut: any;
  ((e as any)[84] as any) !== (oe as any) ? (ut = (): any => {
    (oe as any)();
  }, (e as any)[84] = oe, (e as any)[85] = ut) : ut = (e as any)[85];
  const St: any = Ee ? de : ue;
  let M: any;
  ((e as any)[86] as any) !== (Ee as any) || ((e as any)[87] as any) !== (ct as any) || ((e as any)[88] as any) !== (ut as any) || ((e as any)[89] as any) !== (St as any) ? (M = ((i as any).jsx as any)(Ft, {
    disabled: ct,
    onClick: ut,
    pending: Ee,
    children: St
  }), (e as any)[86] = Ee, (e as any)[87] = ct, (e as any)[88] = ut, (e as any)[89] = St, (e as any)[90] = M) : M = (e as any)[90];
  let Ie: any;
  return ((e as any)[91] as any) !== (ee as any) || ((e as any)[92] as any) !== (M as any) ? (Ie = ((i as any).jsxs as any)(Pt, {
    children: [M, ee]
  }), (e as any)[91] = ee, (e as any)[92] = M, (e as any)[93] = Ie) : Ie = (e as any)[93], ((i as any).jsxs as any)(Fe, {
    onExpand: o,
    subtitle: We,
    title: we,
    titleId: f,
    children: [((xe as any).length as any) === (0 as any) ? null : ((i as any).jsx as any)(_t, {
      hasIcons: !0,
      children: ((xe as any).map as any)((g: any): any => {
        const U: any = (Me as any)(g);
        return ((i as any).jsx as any)(Tt, {
          isChecked: (ne as any)(g),
          isDisabled: Ee || !he,
          reasonLayout: "stacked",
          title: (g as any).title,
          onChange: (ae: any): any => (A as any)((me: any): any => ((new (Map as any)(me) as any).set as any)((g as any).key, ae)),
          reason: (((g as any).description as any).trim as any)() || U?.split(`
`, 1)[0]?.trim() || void 0
        }, (g as any).key);
      })
    }), nt, x, mt, Ie, ((i as any).jsx as any)(Bl, {
      isDisabled: ze,
      onAdd: Ve,
      onOpenChange: B,
      open: q,
      takenKeys: S
    })]
  });
}
function ta(this: any, s: any): any {
  return (Rs as any)((s as any).name);
}
function sa(this: any, s: any): any {
  return (s as any).key;
}
function na(this: any, s: any): any {
  return (s as any).onBot;
}
function la(this: any, s: any): any {
  return (s as any).onBot;
}
function ia(this: any, s: any): any {
  return (s as any).title;
}
function aa(this: any, s: any, e: any): any {
  return ((i as any).jsx as any)(kt, {
    name: "cube"
  }, e);
}
function oa(this: any): any {
  return "cube";
}
function ra(this: any, s: any): any {
  return ((s as any).position as any) != (null as any) && (s as any).onBot;
}
function da(this: any, s: any): any {
  return (s as any).onBot ? [(s as any).key] : [];
}
function ca(this: any, s: any): any {
  return ((s as any).draft as any) != (null as any) && ((((s as any).draft as any).body as any).length as any) === (0 as any);
}
async function Wt(this: any, s: any): Promise<any> {
  try {
    await (s as any)();
    return;
  } catch (e: any) {
    return (wt as any)(e, {
      tags: {
        sand_area: "team-skills"
      }
    }), (ts as any)(e);
  }
}
function ua(this: any, s: any): any {
  return ((s as any).unshared as any) === (!0 as any) ? ((i as any).jsx as any)(w, {
    id: "HdNInL"
  }) : ((s as any).superseded as any) === (!0 as any) ? ((i as any).jsx as any)(w, {
    id: "SMz7df"
  }) : (Ps as any)(s) || ((s as any).setup as any) === (!0 as any) ? null : ((i as any).jsx as any)(w, {
    id: "F3zbZr"
  });
}
function xs(this: any, s: any): any {
  return ((i as any).jsx as any)("span", {
    className: "sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-h8yej3 sand-euugli",
    children: s
  });
}
function tn(this: any, s: any): any {
  (tn as any).d = 552;
  const e: any = ((ge as any).c as any)(36),
    {
      entry: t,
      agentId: n,
      isReadOnly: l
    }: any = s,
    {
      event: c
    }: any = t,
    r: any = (xt as any)(n),
    o: any = (Ds as any)(n, (t as any).id),
    d: any = (Ct as any)("grok_bot_multiplayer"),
    a: any = (Et as any)(r, d),
    [m, f]: any = ((G as any).useState as any)(null),
    u: any = (Os as any)(c, o),
    p: any = (Es as any)(u, m, a);
  (p as any) !== (null as any) && (p as any) !== (m?.kind as any) && (f as any)({
    kind: p,
    byOwner: !1
  });
  const y: any = (mn as any)(),
    h: any = ((c as any).setup as any) === (!0 as any) && ((c as any).unshared as any) !== (!0 as any) && !(Ps as any)(u),
    b: any = ((G as any).useRef as any)(null);
  let E: any;
  ((e as any)[0] as any) !== (h as any) || ((e as any)[1] as any) !== (y as any) ? (E = (): any => {
    const R: any = (b as any).current;
    (b as any).current = h, (R as any) === (!1 as any) && h && (y as any)();
  }, (e as any)[0] = h, (e as any)[1] = y, (e as any)[2] = E) : E = (e as any)[2], (gn as any)(E);
  const j: any = (Vs as any)((t as any).id);
  let N: any;
  ((e as any)[3] as any) !== (p as any) || ((e as any)[4] as any) !== (j as any) || ((e as any)[5] as any) !== (f as any) ? (N = (R: any): any => ({
    isExpanded: (p as any) === (R as any),
    onExpand: (): any => (j as any)((): any => (f as any)({
      kind: R,
      byOwner: !0
    })),
    onCollapse: (): any => (j as any)((): any => (f as any)(null))
  }), (e as any)[3] = p, (e as any)[4] = j, (e as any)[5] = f, (e as any)[6] = N) : N = (e as any)[6];
  const k: any = N;
  let _: any;
  ((e as any)[7] as any) !== (n as any) || ((e as any)[8] as any) !== (t as any) || ((e as any)[9] as any) !== (l as any) ? (_ = {
    agentId: n,
    entry: t,
    isReadOnly: l
  }, (e as any)[7] = n, (e as any)[8] = t, (e as any)[9] = l, (e as any)[10] = _) : _ = (e as any)[10];
  const T: any = _;
  let D: any;
  ((e as any)[11] as any) !== (k as any) || ((e as any)[12] as any) !== (T as any) ? (D = (R: any): any => {
    switch ((R as any).kind) {
      case "plugins":
        return ((i as any).jsx as any)(is, {
          ...T,
          slot: R,
          ...(k as any)((R as any).kind)
        });
      case "secrets":
        return ((i as any).jsx as any)(os, {
          ...T,
          slot: R,
          ...(k as any)((R as any).kind)
        });
      case "memories":
        return ((i as any).jsx as any)(ds, {
          ...T,
          slot: R,
          ...(k as any)((R as any).kind)
        });
      case "description":
        return null;
      case "skills":
        return ((i as any).jsx as any)(rs, {
          ...T,
          slot: R,
          ...(k as any)((R as any).kind)
        });
      case "automations":
        return ((i as any).jsx as any)(ns, {
          ...T,
          slot: R,
          ...(k as any)((R as any).kind)
        });
      case "files":
        return ((i as any).jsx as any)(as, {
          ...T,
          slot: R,
          ...(k as any)((R as any).kind)
        });
    }
  }, (e as any)[11] = k, (e as any)[12] = T, (e as any)[13] = D) : D = (e as any)[13];
  const O: any = D;
  let $: any;
  ((e as any)[14] as any) !== (c as any) ? ($ = (ua as any)(c), (e as any)[14] = c, (e as any)[15] = $) : $ = (e as any)[15];
  const P: any = $;
  let z: any;
  ((e as any)[16] as any) !== (P as any) ? (z = (P as any) === (null as any) ? null : ((i as any).jsx as any)("span", {
    className: "sand-78zum5 sand-6s0dn4 sand-1jnr06f sand-euugli sand-193iq5w",
    children: ((i as any).jsx as any)(fl, {
      isTruncating: !0,
      children: P
    })
  }), (e as any)[16] = P, (e as any)[17] = z) : z = (e as any)[17];
  const I: any = z;
  let A: any, C: any, V: any, H: any;
  if (((e as any)[18] as any) !== (c as any) || ((e as any)[19] as any) !== (I as any) || ((e as any)[20] as any) !== ((o as any).plugins as any) || ((e as any)[21] as any) !== (O as any)) {
    A = ((Symbol as any).for as any)("react.early_return_sentinel");
    e: {
      const R: any = (((dl as any)((As as any)(c, (o as any).plugins)) as any).filter as any)(cl);
      if (((c as any).superseded as any) === (!0 as any) || ((c as any).sequential as any) === (!0 as any) && ((c as any).unshared as any) === (!0 as any)) {
        let q: any;
        ((e as any)[26] as any) !== (I as any) ? (q = (I as any) === (null as any) ? null : (xs as any)(I), (e as any)[26] = I, (e as any)[27] = q) : q = (e as any)[27], A = q;
        break e;
      }
      if ((I as any) === (null as any) && ((R as any).length as any) === (0 as any)) {
        A = null;
        break e;
      }
      H = xs, C = I;
      let Q: any;
      ((e as any)[28] as any) !== (O as any) ? (Q = (q: any): any => ((i as any).jsx as any)(Ns, {
        children: (O as any)(q)
      }, (q as any).kind), (e as any)[28] = O, (e as any)[29] = Q) : Q = (e as any)[29], V = ((R as any).map as any)(Q);
    }
    (e as any)[18] = c, (e as any)[19] = I, (e as any)[20] = (o as any).plugins, (e as any)[21] = O, (e as any)[22] = A, (e as any)[23] = C, (e as any)[24] = V, (e as any)[25] = H;
  } else A = (e as any)[22], C = (e as any)[23], V = (e as any)[24], H = (e as any)[25];
  if ((A as any) !== (((Symbol as any).for as any)("react.early_return_sentinel") as any)) return A;
  let F: any;
  ((e as any)[30] as any) !== (C as any) || ((e as any)[31] as any) !== (V as any) ? (F = ((i as any).jsxs as any)((i as any).Fragment, {
    children: [C, V]
  }), (e as any)[30] = C, (e as any)[31] = V, (e as any)[32] = F) : F = (e as any)[32];
  let Y: any;
  return ((e as any)[33] as any) !== (F as any) || ((e as any)[34] as any) !== (H as any) ? (Y = (H as any)(F), (e as any)[33] = F, (e as any)[34] = H, (e as any)[35] = Y) : Y = (e as any)[35], Y;
}
function sn(this: any, s: any): any {
  (sn as any).d = 551;
  const e: any = ((ge as any).c as any)(22),
    {
      entry: t,
      kind: n,
      agentId: l,
      isReadOnly: c
    }: any = s,
    r: any = (Ds as any)(l, (t as any).id),
    o: any = (xt as any)(l),
    [d, a]: any = ((G as any).useState as any)(!1),
    m: any = (Os as any)((t as any).event, r),
    f: any = (Es as any)(m, null);
  let u: any;
  ((e as any)[0] as any) !== ((t as any).id as any) || ((e as any)[1] as any) !== (n as any) ? (u = (il as any)((t as any).id, n), (e as any)[0] = (t as any).id, (e as any)[1] = n, (e as any)[2] = u) : u = (e as any)[2];
  const p: any = (Vs as any)(u),
    y: any = (Dt as any)((As as any)((t as any).event, (r as any).plugins), n);
  if ((y as any) === (void 0 as any)) return null;
  let h: any;
  ((e as any)[3] as any) !== ((t as any).event as any) ? (h = (al as any)((t as any).event), (e as any)[3] = (t as any).event, (e as any)[4] = h) : h = (e as any)[4];
  const b: any = h,
    E: any = (o?.visibility as any) === ("team" as any) && (ol as any)(o) ? null : (rl as any)(m, n);
  let j: any;
  ((e as any)[5] as any) !== (b as any) || ((e as any)[6] as any) !== (n as any) ? (j = b ? (bl as any)(n) : null, (e as any)[5] = b, (e as any)[6] = n, (e as any)[7] = j) : j = (e as any)[7];
  let N: any;
  ((e as any)[8] as any) !== (b as any) || ((e as any)[9] as any) !== (E as any) || ((e as any)[10] as any) !== (j as any) ? (N = {
    isChained: b,
    step: E,
    subtitle: j
  }, (e as any)[8] = b, (e as any)[9] = E, (e as any)[10] = j, (e as any)[11] = N) : N = (e as any)[11];
  const k: any = N;
  let _: any, T: any;
  ((e as any)[12] as any) !== (p as any) ? (_ = (): any => (p as any)((): any => (a as any)(!0)), T = (): any => (p as any)((): any => (a as any)(!1)), (e as any)[12] = p, (e as any)[13] = _, (e as any)[14] = T) : (_ = (e as any)[13], T = (e as any)[14]);
  const D: any = {
      agentId: l,
      entry: t,
      isReadOnly: c || (((t as any).event as any).superseded as any) === (!0 as any) || (((t as any).event as any).unshared as any) === (!0 as any),
      isExpanded: (f as any) === (n as any) || d,
      onExpand: _,
      onCollapse: T
    },
    O: any = vl,
    $: any = Ns,
    P: any = !0,
    z: any = (fa as any)(y, D);
  let I: any;
  ((e as any)[15] as any) !== ($ as any) || ((e as any)[16] as any) !== (z as any) ? (I = ((i as any).jsx as any)($, {
    isFlush: P,
    children: z
  }), (e as any)[15] = $, (e as any)[16] = z, (e as any)[17] = I) : I = (e as any)[17];
  let A: any;
  return ((e as any)[18] as any) !== (O as any) || ((e as any)[19] as any) !== (k as any) || ((e as any)[20] as any) !== (I as any) ? (A = ((i as any).jsx as any)(O, {
    value: k,
    children: I
  }), (e as any)[18] = O, (e as any)[19] = k, (e as any)[20] = I, (e as any)[21] = A) : A = (e as any)[21], A;
}
function fa(this: any, s: any, e: any): any {
  switch ((s as any).kind) {
    case "plugins":
      return ((i as any).jsx as any)(is, {
        ...e,
        slot: s
      });
    case "secrets":
      return ((i as any).jsx as any)(os, {
        ...e,
        slot: s
      });
    case "skills":
      return ((i as any).jsx as any)(rs, {
        ...e,
        slot: s
      });
    case "memories":
      return ((i as any).jsx as any)(ds, {
        ...e,
        slot: s
      });
    case "automations":
      return ((i as any).jsx as any)(ns, {
        ...e,
        slot: s
      });
    case "files":
      return ((i as any).jsx as any)(as, {
        ...e,
        slot: s
      });
    case "description":
      return null;
  }
}
function ds(this: any, s: any): any {
  return (ds as any).d = 547, (Ct as any)("grok_bot_multiplayer") ? ((i as any).jsx as any)(Qs, {
    ...s
  }) : ((i as any).jsx as any)(nn, {
    ...s
  });
}
function nn(this: any, s: any): any {
  (nn as any).d = 549;
  const e: any = ((ge as any).c as any)(53),
    {
      entry: t,
      slot: n,
      agentId: l,
      isReadOnly: c,
      isExpanded: r,
      onExpand: o,
      onCollapse: d
    }: any = s,
    {
      _: a
    }: any = (st as any)(),
    {
      respondToWidget: m
    }: any = (vs as any)(),
    {
      localAnswers: f
    }: any = (yt as any)();
  let u: any;
  ((e as any)[0] as any) !== ((t as any).id as any) ? (u = (lt as any)((t as any).id, "memories"), (e as any)[0] = (t as any).id, (e as any)[1] = u) : u = (e as any)[1];
  let p: any;
  ((e as any)[2] as any) !== (l as any) || ((e as any)[3] as any) !== (u as any) ? (p = {
    agentId: l,
    entryId: u
  }, (e as any)[2] = l, (e as any)[3] = u, (e as any)[4] = p) : p = (e as any)[4];
  const y: any = (at as any)("widget", p),
    h: any = ((G as any).useId as any)(),
    [b, E]: any = ((G as any).useState as any)(null);
  let j: any;
  ((e as any)[5] as any) !== (b as any) || ((e as any)[6] as any) !== ((n as any).borderline as any) ? (j = b ?? new (Set as any)((n as any).borderline ?? []), (e as any)[5] = b, (e as any)[6] = (n as any).borderline, (e as any)[7] = j) : j = (e as any)[7];
  const N: any = j,
    k: any = (Is as any)((n as any).status, y);
  if ((k as any) === ("done" as any)) return null;
  const _: any = (n as any).toTeam?.length ?? 0,
    T: any = (_ as any) - ((N as any).size as any);
  let D: any;
  ((e as any)[8] as any) !== (a as any) ? (D = (a as any)({
    id: "QCEzof"
  }), (e as any)[8] = a, (e as any)[9] = D) : D = (e as any)[9];
  const O: any = D;
  if ((k as any) === ("sorting" as any)) {
    let A: any;
    ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (A = ((i as any).jsx as any)(w, {
      id: "zMVr84"
    }), (e as any)[10] = A) : A = (e as any)[10];
    let C: any;
    return ((e as any)[11] as any) !== (O as any) || ((e as any)[12] as any) !== (h as any) ? (C = ((i as any).jsx as any)(bt, {
      title: O,
      titleId: h,
      children: A
    }), (e as any)[11] = O, (e as any)[12] = h, (e as any)[13] = C) : C = (e as any)[13], C;
  }
  if ((k as any) !== ("proposed" as any)) {
    let A: any, C: any;
    ((e as any)[14] as any) !== (a as any) || ((e as any)[15] as any) !== (y as any) || ((e as any)[16] as any) !== (_ as any) || ((e as any)[17] as any) !== (n as any) ? (A = (ul as any)(n, y), C = (a as any)({
      id: "PnJbPC",
      values: {
        sharedCount: A,
        shown: _
      }
    }), (e as any)[14] = a, (e as any)[15] = y, (e as any)[16] = _, (e as any)[17] = n, (e as any)[18] = A, (e as any)[19] = C) : (A = (e as any)[18], C = (e as any)[19]);
    let V: any = C;
    if ((k as any) === ("kept" as any)) {
      let F: any;
      ((e as any)[20] as any) !== (a as any) ? (F = (a as any)({
        id: "NVBO0n"
      }), (e as any)[20] = a, (e as any)[21] = F) : F = (e as any)[21], V = F;
    } else if ((A as any) === (_ as any)) {
      let F: any;
      ((e as any)[22] as any) !== (a as any) ? (F = (a as any)({
        id: "2sDEW4"
      }), (e as any)[22] = a, (e as any)[23] = F) : F = (e as any)[23], V = F;
    }
    let H: any;
    return ((e as any)[24] as any) !== (V as any) || ((e as any)[25] as any) !== (O as any) || ((e as any)[26] as any) !== (h as any) ? (H = ((i as any).jsx as any)(Fe, {
      isExpanded: !1,
      summary: V,
      title: O,
      titleId: h
    }), (e as any)[24] = V, (e as any)[25] = O, (e as any)[26] = h, (e as any)[27] = H) : H = (e as any)[27], H;
  }
  if (!r) {
    let A: any;
    ((e as any)[28] as any) !== (T as any) ? (A = ((i as any).jsx as any)(w, {
      id: "luKNcn",
      values: {
        toShare: T
      }
    }), (e as any)[28] = T, (e as any)[29] = A) : A = (e as any)[29];
    let C: any;
    return ((e as any)[30] as any) !== (o as any) || ((e as any)[31] as any) !== (A as any) || ((e as any)[32] as any) !== (O as any) || ((e as any)[33] as any) !== (h as any) ? (C = ((i as any).jsx as any)(Fe, {
      isExpanded: !1,
      isSummaryPending: !0,
      onExpand: o,
      summary: A,
      title: O,
      titleId: h
    }), (e as any)[30] = o, (e as any)[31] = A, (e as any)[32] = O, (e as any)[33] = h, (e as any)[34] = C) : C = (e as any)[34], C;
  }
  let $: any;
  ((e as any)[35] as any) !== (l as any) || ((e as any)[36] as any) !== ((t as any).id as any) || ((e as any)[37] as any) !== (c as any) || ((e as any)[38] as any) !== (f as any) || ((e as any)[39] as any) !== (d as any) || ((e as any)[40] as any) !== (o as any) || ((e as any)[41] as any) !== (m as any) ? ($ = (A: any): any => {
    if (c || (l as any) == (null as any)) return;
    const C: any = {
      agentId: l,
      entryId: (t as any).id
    };
    if ((((f as any).get as any)("widget", C) as any) != (null as any)) return;
    ((f as any).record as any)("widget", C, {
      kind: "answered",
      value: A
    }), (d as any)();
    const V: any = (): any => {
      ((f as any).clear as any)("widget", C), (o as any)();
    };
    (((m as any)({
      ...C,
      value: A
    }) as any).then as any)((H: any): any => {
      (H?.accepted as any) === (!1 as any) && (V as any)();
    }, V);
  }, (e as any)[35] = l, (e as any)[36] = (t as any).id, (e as any)[37] = c, (e as any)[38] = f, (e as any)[39] = d, (e as any)[40] = o, (e as any)[41] = m, (e as any)[42] = $) : $ = (e as any)[42];
  const P: any = $;
  let z: any;
  ((e as any)[43] as any) !== (c as any) || ((e as any)[44] as any) !== (N as any) || ((e as any)[45] as any) !== (n as any) || ((e as any)[46] as any) !== (P as any) ? (z = ((i as any).jsx as any)(ln, {
    isReadOnly: c,
    kept: N,
    onKeptChange: E,
    onTap: P,
    slot: n
  }), (e as any)[43] = c, (e as any)[44] = N, (e as any)[45] = n, (e as any)[46] = P, (e as any)[47] = z) : z = (e as any)[47];
  let I: any;
  return ((e as any)[48] as any) !== (o as any) || ((e as any)[49] as any) !== (z as any) || ((e as any)[50] as any) !== (O as any) || ((e as any)[51] as any) !== (h as any) ? (I = ((i as any).jsx as any)(Fe, {
    onExpand: o,
    title: O,
    titleId: h,
    children: z
  }), (e as any)[48] = o, (e as any)[49] = z, (e as any)[50] = O, (e as any)[51] = h, (e as any)[52] = I) : I = (e as any)[52], I;
}
function ln(this: any, s: any): any {
  (ln as any).d = 548;
  const e: any = ((ge as any).c as any)(63),
    {
      slot: t,
      kept: n,
      isReadOnly: l,
      onKeptChange: c,
      onTap: r
    }: any = s,
    {
      _: o
    }: any = (st as any)();
  let d: any, a: any, m: any, f: any, u: any, p: any, y: any, h: any, b: any, E: any;
  if (((e as any)[0] as any) !== (o as any) || ((e as any)[1] as any) !== (l as any) || ((e as any)[2] as any) !== (n as any) || ((e as any)[3] as any) !== (c as any) || ((e as any)[4] as any) !== (t as any)) {
    const C: any = (t as any).toTeam ?? [],
      V: any = (ml as any)(t);
    f = (C as any).length, a = (t as any).justYou ?? 0, m = (t as any).more ?? 0, b = (([...((C as any).keys as any)()] as any).filter as any)((B: any): any => !((n as any).has as any)(B)), E = (b as any).length;
    let H: any;
    ((e as any)[15] as any) !== ((t as any).titles as any) || ((e as any)[16] as any) !== (C as any) ? (H = (B: any): any => (t as any).titles?.[B] ?? (C as any)[B] ?? "", (e as any)[15] = (t as any).titles, (e as any)[16] = C, (e as any)[17] = H) : H = (e as any)[17];
    const F: any = H;
    let Y: any;
    ((e as any)[18] as any) !== (n as any) || ((e as any)[19] as any) !== (c as any) ? (Y = (B: any, L: any): any => {
      const ce: any = new (Set as any)(n);
      for (const Re of B) L ? ((ce as any).delete as any)(Re) : ((ce as any).add as any)(Re);
      (c as any)(ce);
    }, (e as any)[18] = n, (e as any)[19] = c, (e as any)[20] = Y) : Y = (e as any)[20];
    const R: any = Y;
    let Q: any;
    ((e as any)[21] as any) !== (l as any) || ((e as any)[22] as any) !== (n as any) || ((e as any)[23] as any) !== (R as any) || ((e as any)[24] as any) !== (F as any) || ((e as any)[25] as any) !== (C as any) ? (Q = (B: any): any => ((i as any).jsx as any)(on, {
      fact: (C as any)[B] ?? "",
      isDisabled: l,
      isTeam: !((n as any).has as any)(B),
      onChange: (L: any): any => (R as any)([B], L),
      title: (F as any)(B)
    }, B), (e as any)[21] = l, (e as any)[22] = n, (e as any)[23] = R, (e as any)[24] = F, (e as any)[25] = C, (e as any)[26] = Q) : Q = (e as any)[26];
    const q: any = Q;
    d = _t, ((e as any)[27] as any) !== (o as any) ? (u = (o as any)({
      id: "CpY2ch"
    }), (e as any)[27] = o, (e as any)[28] = u) : u = (e as any)[28], p = ((V as any).length as any) > (0 as any) ? (V as any).length : void 0, ((e as any)[29] as any) !== (o as any) ? (y = (o as any)({
      id: "QCEzof"
    }), (e as any)[29] = o, (e as any)[30] = y) : y = (e as any)[30], h = ((V as any).length as any) > (0 as any) ? ((V as any).map as any)((B: any): any => ((i as any).jsx as any)(an, {
      isDisabled: l,
      name: (B as any).name,
      onChange: (L: any): any => (R as any)((B as any).positions, L),
      teamCount: ((((B as any).positions as any).filter as any)((L: any): any => !((n as any).has as any)(L)) as any).length,
      titles: (((B as any).positions as any).map as any)(F),
      children: (((B as any).positions as any).map as any)(q)
    }, (B as any).name)) : ((C as any).map as any)((B: any, L: any): any => (q as any)(L)), (e as any)[0] = o, (e as any)[1] = l, (e as any)[2] = n, (e as any)[3] = c, (e as any)[4] = t, (e as any)[5] = d, (e as any)[6] = a, (e as any)[7] = m, (e as any)[8] = f, (e as any)[9] = u, (e as any)[10] = p, (e as any)[11] = y, (e as any)[12] = h, (e as any)[13] = b, (e as any)[14] = E;
  } else d = (e as any)[5], a = (e as any)[6], m = (e as any)[7], f = (e as any)[8], u = (e as any)[9], p = (e as any)[10], y = (e as any)[11], h = (e as any)[12], b = (e as any)[13], E = (e as any)[14];
  let j: any;
  ((e as any)[31] as any) !== (d as any) || ((e as any)[32] as any) !== (u as any) || ((e as any)[33] as any) !== (p as any) || ((e as any)[34] as any) !== (y as any) || ((e as any)[35] as any) !== (h as any) ? (j = ((i as any).jsx as any)(d, {
    emptyLabel: u,
    shown: p,
    title: y,
    children: h
  }), (e as any)[31] = d, (e as any)[32] = u, (e as any)[33] = p, (e as any)[34] = y, (e as any)[35] = h, (e as any)[36] = j) : j = (e as any)[36];
  let N: any;
  ((e as any)[37] as any) !== (m as any) ? (N = (m as any) > (0 as any) ? ((i as any).jsx as any)(Ze, {
    children: ((i as any).jsx as any)(w, {
      id: "6gDCUp",
      values: {
        more: m
      }
    })
  }) : null, (e as any)[37] = m, (e as any)[38] = N) : N = (e as any)[38];
  let k: any;
  ((e as any)[39] as any) !== (a as any) ? (k = (a as any) > (0 as any) ? ((i as any).jsx as any)(Ze, {
    children: ((i as any).jsx as any)(w, {
      id: "gE4H60",
      values: {
        justYou: a
      }
    })
  }) : null, (e as any)[39] = a, (e as any)[40] = k) : k = (e as any)[40];
  const _: any = l || (E as any) === (0 as any);
  let T: any;
  ((e as any)[41] as any) !== (r as any) || ((e as any)[42] as any) !== (f as any) || ((e as any)[43] as any) !== (b as any) ? (T = (): any => (r as any)((pl as any)(b, f)), (e as any)[41] = r, (e as any)[42] = f, (e as any)[43] = b, (e as any)[44] = T) : T = (e as any)[44];
  let D: any;
  ((e as any)[45] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (D = ((i as any).jsx as any)(w, {
    id: "mjWpLC"
  }), (e as any)[45] = D) : D = (e as any)[45];
  let O: any;
  ((e as any)[46] as any) !== (_ as any) || ((e as any)[47] as any) !== (T as any) ? (O = ((i as any).jsx as any)(rt, {
    disabled: _,
    onClick: T,
    variant: "primary",
    children: D
  }), (e as any)[46] = _, (e as any)[47] = T, (e as any)[48] = O) : O = (e as any)[48];
  let $: any;
  ((e as any)[49] as any) !== (r as any) ? ($ = (): any => (r as any)(Bt), (e as any)[49] = r, (e as any)[50] = $) : $ = (e as any)[50];
  let P: any;
  ((e as any)[51] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (P = ((i as any).jsx as any)(w, {
    id: "GZF9eZ"
  }), (e as any)[51] = P) : P = (e as any)[51];
  let z: any;
  ((e as any)[52] as any) !== (l as any) || ((e as any)[53] as any) !== ($ as any) ? (z = ((i as any).jsx as any)(rt, {
    disabled: l,
    onClick: $,
    variant: "secondary",
    children: P
  }), (e as any)[52] = l, (e as any)[53] = $, (e as any)[54] = z) : z = (e as any)[54];
  let I: any;
  ((e as any)[55] as any) !== (O as any) || ((e as any)[56] as any) !== (z as any) ? (I = ((i as any).jsxs as any)(Pt, {
    children: [O, z]
  }), (e as any)[55] = O, (e as any)[56] = z, (e as any)[57] = I) : I = (e as any)[57];
  let A: any;
  return ((e as any)[58] as any) !== (I as any) || ((e as any)[59] as any) !== (j as any) || ((e as any)[60] as any) !== (N as any) || ((e as any)[61] as any) !== (k as any) ? (A = ((i as any).jsxs as any)((i as any).Fragment, {
    children: [j, N, k, I]
  }), (e as any)[58] = I, (e as any)[59] = j, (e as any)[60] = N, (e as any)[61] = k, (e as any)[62] = A) : A = (e as any)[62], A;
}
function an(this: any, s: any): any {
  (an as any).d = 553;
  const e: any = ((ge as any).c as any)(19),
    {
      name: t,
      titles: n,
      teamCount: l,
      isDisabled: c,
      onChange: r,
      children: o
    }: any = s,
    {
      _: d
    }: any = (st as any)();
  let a: any;
  ((e as any)[0] as any) !== (d as any) || ((e as any)[1] as any) !== (t as any) ? (a = ((t as any).length as any) > (0 as any) ? t : (d as any)({
    id: "/IX/7x"
  }), (e as any)[0] = d, (e as any)[1] = t, (e as any)[2] = a) : a = (e as any)[2];
  const m: any = a,
    f: any = (n as any).length;
  let u: any;
  ((e as any)[3] as any) !== (n as any) ? (u = ((new ((Intl as any).ListFormat as any)((Rt as any)(), {
    style: "short",
    type: "unit"
  }) as any).format as any)(n), (e as any)[3] = n, (e as any)[4] = u) : u = (e as any)[4];
  const p: any = u;
  let y: any;
  ((e as any)[5] as any) !== (o as any) ? (y = ((i as any).jsx as any)(wl, {
    children: o
  }), (e as any)[5] = o, (e as any)[6] = y) : y = (e as any)[6];
  const h: any = (l as any) > (0 as any);
  let b: any;
  ((e as any)[7] as any) !== (p as any) || ((e as any)[8] as any) !== (l as any) || ((e as any)[9] as any) !== ((n as any).length as any) || ((e as any)[10] as any) !== (f as any) ? (b = (l as any) > (0 as any) && (l as any) < (f as any) ? ((i as any).jsx as any)(w, {
    id: "zOpLQ+",
    values: {
      teamCount: l,
      total: f,
      list: p
    }
  }) : ((i as any).jsx as any)(w, {
    id: "xkIao/",
    values: {
      0: (n as any).length,
      list: p
    }
  }), (e as any)[7] = p, (e as any)[8] = l, (e as any)[9] = (n as any).length, (e as any)[10] = f, (e as any)[11] = b) : b = (e as any)[11];
  let E: any;
  return ((e as any)[12] as any) !== (c as any) || ((e as any)[13] as any) !== (m as any) || ((e as any)[14] as any) !== (r as any) || ((e as any)[15] as any) !== (y as any) || ((e as any)[16] as any) !== (h as any) || ((e as any)[17] as any) !== (b as any) ? (E = ((i as any).jsx as any)(Tt, {
    detail: y,
    isChecked: h,
    isDisabled: c,
    title: m,
    onChange: r,
    reason: b
  }), (e as any)[12] = c, (e as any)[13] = m, (e as any)[14] = r, (e as any)[15] = y, (e as any)[16] = h, (e as any)[17] = b, (e as any)[18] = E) : E = (e as any)[18], E;
}
function on(this: any, s: any): any {
  (on as any).d = 550;
  const e: any = ((ge as any).c as any)(13),
    {
      fact: t,
      title: n,
      isTeam: l,
      isDisabled: c,
      onChange: r
    }: any = s;
  let o: any;
  if (((e as any)[0] as any) !== (t as any)) {
    let u: any;
    ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = /\s+/g, (e as any)[2] = u) : u = (e as any)[2], o = ((t as any).replace as any)(u, " "), (e as any)[0] = t, (e as any)[1] = o;
  } else o = (e as any)[1];
  const d: any = (o as any) === (n as any);
  let a: any;
  ((e as any)[3] as any) !== (t as any) || ((e as any)[4] as any) !== (d as any) ? (a = d ? void 0 : ((i as any).jsx as any)(Cl, {
    children: t
  }), (e as any)[3] = t, (e as any)[4] = d, (e as any)[5] = a) : a = (e as any)[5];
  const m: any = d ? void 0 : t;
  let f: any;
  return ((e as any)[6] as any) !== (c as any) || ((e as any)[7] as any) !== (l as any) || ((e as any)[8] as any) !== (r as any) || ((e as any)[9] as any) !== (a as any) || ((e as any)[10] as any) !== (m as any) || ((e as any)[11] as any) !== (n as any) ? (f = ((i as any).jsx as any)(Tt, {
    detail: a,
    isChecked: l,
    isDisabled: c,
    onChange: r,
    reason: m,
    title: n
  }), (e as any)[6] = c, (e as any)[7] = l, (e as any)[8] = r, (e as any)[9] = a, (e as any)[10] = m, (e as any)[11] = n, (e as any)[12] = f) : f = (e as any)[12], f;
}
function ma(this: any, s: any): any {
  (ma as any).d = 299;
  const e: any = ((ge as any).c as any)(14),
    {
      entry: t
    }: any = s,
    n: any = (pn as any)(),
    {
      isReadOnly: l
    }: any = (hn as any)();
  let c: any;
  ((e as any)[0] as any) !== ((t as any).id as any) ? (c = (hl as any)((t as any).id), (e as any)[0] = (t as any).id, (e as any)[1] = c) : c = (e as any)[1];
  const r: any = c;
  if ((r as any) !== (null as any)) {
    let d: any;
    ((e as any)[2] as any) !== ((r as any).chipEntryId as any) || ((e as any)[3] as any) !== (t as any) ? (d = {
      ...t,
      id: (r as any).chipEntryId
    }, (e as any)[2] = (r as any).chipEntryId, (e as any)[3] = t, (e as any)[4] = d) : d = (e as any)[4];
    let a: any;
    return ((e as any)[5] as any) !== (n as any) || ((e as any)[6] as any) !== ((r as any).kind as any) || ((e as any)[7] as any) !== (l as any) || ((e as any)[8] as any) !== (d as any) ? (a = ((i as any).jsx as any)(sn, {
      agentId: n,
      entry: d,
      isReadOnly: l,
      kind: (r as any).kind
    }), (e as any)[5] = n, (e as any)[6] = (r as any).kind, (e as any)[7] = l, (e as any)[8] = d, (e as any)[9] = a) : a = (e as any)[9], a;
  }
  let o: any;
  return ((e as any)[10] as any) !== (n as any) || ((e as any)[11] as any) !== (t as any) || ((e as any)[12] as any) !== (l as any) ? (o = ((i as any).jsx as any)(tn, {
    agentId: n,
    entry: t,
    isReadOnly: l
  }), (e as any)[10] = n, (e as any)[11] = t, (e as any)[12] = l, (e as any)[13] = o) : o = (e as any)[13], o;
}
export { ma as default };
//# debugId=98db17b5-efce-451f-9c92-8ebb7beb1660
