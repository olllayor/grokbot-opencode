declare var Node: any;
declare var global: any;
declare var navigator: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "bd84a891-15f7-444f-8bd0-cacf25630816", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-bd84a891-15f7-444f-8bd0-cacf25630816");
  } catch (e: any) {}
} as any)();
import { c as V, j as a, p as E, T as F, u as ke, r as $ } from "./index.eager-vendor-Qbf9YA6n.js";
import { i as Sn } from "./index.eager-platform-Dcfeegfw.js";
import { a_ as P, cj as zn, bc as Ye, ck as Mn, cl as Rn, cm as _n, r as we, Z as Ds, aj as Ls, V as An, S as Tn, cn as qn, L as Cn } from "./index.eager-app-Cj5f8Gby.js";
import { a3 as es, aD as Ks, aE as Qe, aF as $n, g as En, I as Ze, B as Us, aG as Pn, aH as Dn, aI as Is, aJ as fs, aK as Kn, aL as Vs, aM as hs, aN as In, aO as On, aP as Hn, aQ as Os, aR as Fn, aS as Gn, aT as Ln, U as Un, aU as Vn } from "./index-ZYxf-aBb.js";
import { M as Ws } from "./chunk-member-chip-SDE-oMC0.js";
import { u as Wn } from "./chunk-use-active-option-scroll-B1hXdW5d.js";
import { t as Bn, a as Xn, o as Hs, m as Qn } from "./chunk-team-agent-rows-BhWKSjqA.js";
import "./index.eager-common-CdCvBQNJ.js";
const Bs: number = 32,
  Zn: any = Bs,
  Xe: any = {
    name: {
      k7Eaqz: "sand-euugli",
      kVQacm: "sand-b3r6kr",
      kg5iWk: "sand-lyipyv",
      khDVqt: "sand-uxw1ft",
      kMwMTN: "sand-tyxrsu",
      $$css: !0
    },
    byline: {
      kmuXW: "sand-2lah0s",
      khDVqt: "sand-uxw1ft",
      kMwMTN: "sand-169k319",
      $$css: !0
    },
    secondaryLine: {
      kVQacm: "sand-b3r6kr",
      kg5iWk: "sand-lyipyv",
      khDVqt: "sand-uxw1ft",
      kMwMTN: "sand-1o0liin",
      $$css: !0
    },
    emptyState: {
      kLKAdn: "sand-yinxu5",
      kGO01o: "sand-1g2khh7",
      k9WMMc: "sand-2b8uid",
      kMwMTN: "sand-169k319",
      $$css: !0
    }
  };
function Jn(this: any, t: any): any {
  return ((t as any).map as any)((e: any): any => ({
    kind: "agent",
    agent: e
  }));
}
function Xs(this: any, t: any, e: any): any {
  return `${t}-team-option-${e}`;
}
function Qs(this: any, t: any): any {
  (Qs as any).d = 1345;
  const e: any = ((V as any).c as any)(22),
    {
      options: n,
      listboxId: d,
      highlight: i,
      hasQuery: o,
      hasTeamAgents: c,
      canCreate: r,
      onActivate: u,
      onHover: h,
      activeOptionRef: m
    }: any = t;
  let p: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = ((a as any).jsx as any)(F, {
    id: "D6NKnp"
  }), (e as any)[0] = p) : p = (e as any)[0];
  let y: any = p;
  if (c && o) {
    let k: any;
    ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (k = ((a as any).jsx as any)(F, {
      id: "12i8o8"
    }), (e as any)[1] = k) : k = (e as any)[1], y = k;
  } else if (r) {
    let k: any;
    ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (k = ((a as any).jsx as any)(F, {
      id: "o8ztiZ"
    }), (e as any)[2] = k) : k = (e as any)[2], y = k;
  }
  let x: any;
  if (((e as any)[3] as any) !== (m as any) || ((e as any)[4] as any) !== (i as any) || ((e as any)[5] as any) !== (d as any) || ((e as any)[6] as any) !== (u as any) || ((e as any)[7] as any) !== (h as any) || ((e as any)[8] as any) !== (n as any)) {
    let k: any;
    ((e as any)[10] as any) !== (m as any) || ((e as any)[11] as any) !== (i as any) || ((e as any)[12] as any) !== (d as any) || ((e as any)[13] as any) !== (u as any) || ((e as any)[14] as any) !== (h as any) ? (k = (N: any, g: any): any => {
      const S: any = (g as any) === (i as any);
      return ((a as any).jsx as any)("button", {
        "aria-selected": S,
        id: (Xs as any)(d, g),
        onClick: (): any => (u as any)(g),
        onMouseDown: Yn,
        onMouseMove: (): any => (h as any)(g),
        ref: S ? m : null,
        role: "option",
        tabIndex: -1,
        type: "button",
        ...({
          0: {
            className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-h8yej3 sand-9f619 sand-2lah0s sand-u0aao5 sand-1bf2k6n sand-1hc27l4 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-c342km sand-ng3xce sand-1qmwy7c sand-jbqb8w sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i sand-1v2ro7d sand-1y1aw1k sand-pdmqnj sand-wib8y2 sand-1g0dm76"
          },
          1: {
            className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-h8yej3 sand-9f619 sand-2lah0s sand-u0aao5 sand-1bf2k6n sand-1hc27l4 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-c342km sand-ng3xce sand-1qmwy7c sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i sand-1v2ro7d sand-1y1aw1k sand-pdmqnj sand-wib8y2 sand-1g0dm76 sand-luhinc"
          }
        } as any)[(!!S as any) << (0 as any)],
        children: ((a as any).jsx as any)(Zs, {
          agent: (N as any).agent
        })
      }, ((N as any).agent as any).id);
    }, (e as any)[10] = m, (e as any)[11] = i, (e as any)[12] = d, (e as any)[13] = u, (e as any)[14] = h, (e as any)[15] = k) : k = (e as any)[15], x = ((n as any).map as any)(k), (e as any)[3] = m, (e as any)[4] = i, (e as any)[5] = d, (e as any)[6] = u, (e as any)[7] = h, (e as any)[8] = n, (e as any)[9] = x;
  } else x = (e as any)[9];
  let b: any;
  ((e as any)[16] as any) !== (y as any) || ((e as any)[17] as any) !== ((n as any).length as any) ? (b = ((n as any).length as any) === (0 as any) ? ((a as any).jsx as any)("div", {
    "aria-live": "polite",
    ...(E as any)((Xe as any).emptyState, (P as any).body2),
    role: "presentation",
    children: y
  }) : null, (e as any)[16] = y, (e as any)[17] = (n as any).length, (e as any)[18] = b) : b = (e as any)[18];
  let v: any;
  return ((e as any)[19] as any) !== (x as any) || ((e as any)[20] as any) !== (b as any) ? (v = ((a as any).jsxs as any)((a as any).Fragment, {
    children: [x, b]
  }), (e as any)[19] = x, (e as any)[20] = b, (e as any)[21] = v) : v = (e as any)[21], v;
}
function Yn(this: any, t: any): any {
  return ((t as any).preventDefault as any)();
}
function Zs(this: any, t: any): any {
  (Zs as any).d = 1344;
  const e: any = ((V as any).c as any)(31),
    {
      agent: n
    }: any = t,
    {
      _: d
    }: any = (ke as any)(),
    i: any = (zn as any)();
  let o: any;
  if (((e as any)[0] as any) !== (d as any) || ((e as any)[1] as any) !== (n as any)) {
    const D: any = (Bn as any)(n);
    if (o = null, (D as any) === ("you" as any)) {
      let q: any;
      ((e as any)[3] as any) !== (d as any) ? (q = (d as any)({
        id: "ZZvRDK"
      }), (e as any)[3] = d, (e as any)[4] = q) : q = (e as any)[4], o = q;
    } else (D as any) !== (null as any) && (o = (d as any)({
      id: "FiSaDn",
      values: {
        owner: D
      }
    }));
    (e as any)[0] = d, (e as any)[1] = n, (e as any)[2] = o;
  } else o = (e as any)[2];
  let c: any;
  ((e as any)[5] as any) !== (n as any) || ((e as any)[6] as any) !== (i as any) ? (c = (((n as any).description as any).trim as any)() || (Xn as any)(n, i), (e as any)[5] = n, (e as any)[6] = i, (e as any)[7] = c) : c = (e as any)[7];
  const r: any = c;
  let u: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = {
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1td3qas sand-10w6t97 sand-2lah0s"
  }, (e as any)[8] = u) : u = (e as any)[8];
  let h: any;
  ((e as any)[9] as any) !== (n as any) ? (h = ((a as any).jsx as any)("span", {
    ...u,
    children: ((a as any).jsx as any)(es, {
      agent: n,
      fillPx: Zn,
      isStatic: !0,
      size: "lg"
    })
  }), (e as any)[9] = n, (e as any)[10] = h) : h = (e as any)[10];
  let m: any, p: any, y: any;
  ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = {
    className: "sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-s83m0k sand-euugli"
  }, p = {
    className: "sand-78zum5 sand-1pha0wt sand-1jnr06f sand-euugli"
  }, y = (E as any)((Xe as any).name, (P as any).body2), (e as any)[11] = m, (e as any)[12] = p, (e as any)[13] = y) : (m = (e as any)[11], p = (e as any)[12], y = (e as any)[13]);
  let x: any;
  ((e as any)[14] as any) !== (n as any) ? (x = (Ye as any)(n), (e as any)[14] = n, (e as any)[15] = x) : x = (e as any)[15];
  let b: any;
  ((e as any)[16] as any) !== (x as any) ? (b = ((a as any).jsx as any)("span", {
    ...y,
    children: x
  }), (e as any)[16] = x, (e as any)[17] = b) : b = (e as any)[17];
  let v: any;
  ((e as any)[18] as any) !== (o as any) ? (v = (o as any) === (null as any) ? null : ((a as any).jsx as any)("span", {
    ...(E as any)((Xe as any).byline, (P as any).body2),
    children: o
  }), (e as any)[18] = o, (e as any)[19] = v) : v = (e as any)[19];
  let k: any;
  ((e as any)[20] as any) !== (b as any) || ((e as any)[21] as any) !== (v as any) ? (k = ((a as any).jsxs as any)("span", {
    ...p,
    children: [b, v]
  }), (e as any)[20] = b, (e as any)[21] = v, (e as any)[22] = k) : k = (e as any)[22];
  let N: any;
  ((e as any)[23] as any) !== (r as any) ? (N = ((r as any).length as any) === (0 as any) ? null : ((a as any).jsx as any)("span", {
    ...(E as any)((Xe as any).secondaryLine, (P as any).body2),
    title: r,
    children: r
  }), (e as any)[23] = r, (e as any)[24] = N) : N = (e as any)[24];
  let g: any;
  ((e as any)[25] as any) !== (k as any) || ((e as any)[26] as any) !== (N as any) ? (g = ((a as any).jsxs as any)("span", {
    ...m,
    children: [k, N]
  }), (e as any)[25] = k, (e as any)[26] = N, (e as any)[27] = g) : g = (e as any)[27];
  let S: any;
  return ((e as any)[28] as any) !== (g as any) || ((e as any)[29] as any) !== (h as any) ? (S = ((a as any).jsxs as any)((a as any).Fragment, {
    children: [h, g]
  }), (e as any)[28] = g, (e as any)[29] = h, (e as any)[30] = S) : S = (e as any)[30], S;
}
const ea: any = {
    kmuXW: "sand-2lah0s",
    kZKoxP: "sand-16ye13r",
    $$css: !0
  },
  sa: any = {
    k87sOh: "sand-wgvhgk",
    kLqNvP: "sand-y959b9",
    kzqmXN: "sand-1kl0l3y",
    kZKoxP: "sand-158ke7r",
    kJcbqH: "sand-16fucec",
    kn1fP1: "sand-3b2oae",
    $$css: !0
  },
  na: number = 400,
  aa: number = 384,
  ta: number = 6,
  Js: number = 36,
  Ys: number = 2,
  Je: any = (Js as any) + (Ys as any),
  en: number = 9,
  ks: any = (typeof navigator as any) < ("u" as any) && (((navigator as any).platform as any).includes as any)("Mac"),
  da: any = ks ? "\u2318" : "Ctrl",
  Fs: any = ks ? "Meta" : "Control",
  oa: number = 3,
  sn: number = 18,
  ia: number = 1.5,
  _: any = {
    toLabel: {
      kmuXW: "sand-2lah0s",
      keoZOQ: "sand-1gslohp",
      kMwMTN: "sand-169k319",
      kfSwDN: "sand-87ps6o",
      $$css: !0
    },
    input: {
      kzQI83: "sand-1iyjqo2",
      kmuXW: "sand-s83m0k",
      k7Eaqz: "sand-1d77m7x",
      kysU6D: "sand-jyslct",
      k3lkva: "sand-1lugfcp",
      kMzoRj: "sand-c342km",
      ksu8eU: "sand-ng3xce",
      kMeerF: "sand-1k57tk5",
      k3XXqK: "sand-1t137rt",
      kWkggS: "sand-jbqb8w",
      kMwMTN: "sand-tyxrsu",
      kMv6JI: "sand-jb2p0i",
      kLKAdn: "sand-exx8yu",
      kwRFfy: "sand-yri2b",
      kGO01o: "sand-18d9i69",
      kZCmMZ: "sand-1c1uobl",
      k8Qsv1: "sand-1h7ufjq",
      $$css: !0
    },
    rowSpacer: (t: any): any => [ea, {
      "--x-height": (((e: any): any => (typeof e as any) == ("number" as any) ? (e as any) + ("px" as any) : e ?? void 0) as any)(((t as any) * (Je as any) as any) - (Ys as any))
    }],
    rowName: {
      kzQI83: "sand-1iyjqo2",
      kmuXW: "sand-s83m0k",
      k7Eaqz: "sand-euugli",
      kMwMTN: "sand-tyxrsu",
      kVQacm: "sand-b3r6kr",
      kg5iWk: "sand-lyipyv",
      khDVqt: "sand-uxw1ft",
      $$css: !0
    },
    rowNameFit: {
      kzQI83: "sand-1c4vz4f",
      $$css: !0
    },
    rowHint: {
      kmuXW: "sand-2lah0s",
      kMwMTN: "sand-169k319",
      khDVqt: "sand-uxw1ft",
      $$css: !0
    },
    rowDimmed: {
      kSiTet: "sand-byyjgo",
      $$css: !0
    },
    sectionNote: {
      k1xSpc: "sand-78zum5",
      kGNEyG: "sand-6s0dn4",
      kOIVth: "sand-167g77z",
      kLKAdn: "sand-1y1aw1k",
      kwRFfy: "sand-f159sx",
      kGO01o: "sand-jkvuk6",
      kZCmMZ: "sand-mzvs34",
      kMwMTN: "sand-169k319",
      $$css: !0
    },
    emptyState: {
      kLKAdn: "sand-yinxu5",
      kGO01o: "sand-1g2khh7",
      k9WMMc: "sand-2b8uid",
      kMwMTN: "sand-169k319",
      $$css: !0
    },
    recipientChip: {
      kZKoxP: "sand-1fgtraw",
      kZCmMZ: "sand-25sj25",
      kwRFfy: "sand-11lfxj5",
      $$css: !0
    },
    teamPill: {
      kZKoxP: "sand-d7y6wv",
      kZCmMZ: "sand-e2zdcy",
      kwRFfy: "sand-2vl965",
      kaIpWk: "sand-t9pb60",
      $$css: !0
    },
    footerMarkSurface: {
      kVAEAm: "sand-10l6tqk",
      kfzvcC: "sand-47corl",
      kWkggS: "sand-13l7odt",
      kKwaWg: "sand-18o3ruo",
      $$css: !0
    },
    footerMarkSurfaceActive: {
      kKwaWg: "sand-q09rwa",
      $$css: !0
    },
    footerMarkShapeRing: (t: any): any => [sa, {
      kX1K2I: (t as any) != (null as any) ? "sand-wjwp01" : t,
      $$css: !0
    }, {
      "--x-maskImage": t ?? void 0
    }],
    footerLabel: {
      kzQI83: "sand-1iyjqo2",
      kmuXW: "sand-s83m0k",
      k7Eaqz: "sand-euugli",
      $$css: !0
    }
  },
  Gs: any = new (Map as any)();
function la(this: any, t: any): any {
  const e: any = (Un as any)(t),
    n: any = ((Gs as any).get as any)(e);
  if ((n as any) != (null as any)) return n;
  const d: any = (Cn as any)({
    shape: e,
    sizePx: sn,
    ringPx: ia
  });
  return ((Gs as any).set as any)(e, d), d;
}
function nn(this: any, t: any): any {
  (nn as any).d = 1075;
  const e: any = ((V as any).c as any)(12),
    {
      agent: n,
      overlapped: d,
      surfaceActive: i
    }: any = t,
    o: any = ((((n as any).avatarDataUrl ?? "") as any).length as any) > (0 as any);
  let c: any;
  ((e as any)[0] as any) !== (d as any) ? (c = ({
    0: {
      className: "sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-2lah0s"
    },
    1: {
      className: "sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-2lah0s sand-4h0osi"
    }
  } as any)[(!!d as any) << (0 as any)], (e as any)[0] = d, (e as any)[1] = c) : c = (e as any)[1];
  let r: any;
  ((e as any)[2] as any) !== (n as any) || ((e as any)[3] as any) !== (o as any) || ((e as any)[4] as any) !== (i as any) ? (r = o ? ((a as any).jsx as any)("span", {
    "aria-hidden": !0,
    "data-sand-footer-mark-plate": !0,
    ...({
      0: {
        className: "sand-10l6tqk sand-47corl sand-13l7odt sand-18o3ruo sand-18f1m0x sand-149ho13"
      },
      1: {
        className: "sand-10l6tqk sand-47corl sand-13l7odt sand-q09rwa sand-18f1m0x sand-149ho13"
      }
    } as any)[(!!i as any) << (0 as any)]
  }) : ((a as any).jsx as any)("span", {
    "aria-hidden": !0,
    "data-sand-footer-mark-ring": !0,
    ...(E as any)((_ as any).footerMarkSurface, i && (_ as any).footerMarkSurfaceActive, ((_ as any).footerMarkShapeRing as any)((la as any)(n)))
  }), (e as any)[2] = n, (e as any)[3] = o, (e as any)[4] = i, (e as any)[5] = r) : r = (e as any)[5];
  let u: any;
  ((e as any)[6] as any) !== (n as any) ? (u = ((a as any).jsx as any)(es, {
    agent: n,
    fillPx: sn,
    isStatic: !0,
    size: "xs"
  }), (e as any)[6] = n, (e as any)[7] = u) : u = (e as any)[7];
  let h: any;
  return ((e as any)[8] as any) !== (c as any) || ((e as any)[9] as any) !== (r as any) || ((e as any)[10] as any) !== (u as any) ? (h = ((a as any).jsxs as any)("span", {
    ...c,
    children: [r, u]
  }), (e as any)[8] = c, (e as any)[9] = r, (e as any)[10] = u, (e as any)[11] = h) : h = (e as any)[11], h;
}
function an(this: any, t: any): any {
  (an as any).d = 1076;
  const e: any = ((V as any).c as any)(14),
    {
      agents: n,
      surfaceActive: d
    }: any = t;
  let i: any, o: any, c: any, r: any;
  if (((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (d as any)) {
    r = ((Symbol as any).for as any)("react.early_return_sentinel");
    e: {
      const h: any = ((n as any).slice as any)(0, oa);
      if (((h as any).length as any) === (0 as any)) {
        let p: any;
        ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = ((a as any).jsx as any)(Ze, {
          name: "people",
          size: "sm"
        }), (e as any)[6] = p) : p = (e as any)[6], r = p;
        break e;
      }
      i = !0, ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = {
        className: "sand-78zum5 sand-6s0dn4 sand-2lah0s"
      }, (e as any)[7] = o) : o = (e as any)[7];
      let m: any;
      ((e as any)[8] as any) !== (d as any) ? (m = (p: any, y: any): any => ((a as any).jsx as any)(nn, {
        agent: p,
        overlapped: (y as any) > (0 as any),
        surfaceActive: d
      }, (p as any).id), (e as any)[8] = d, (e as any)[9] = m) : m = (e as any)[9], c = ((h as any).map as any)(m);
    }
    (e as any)[0] = n, (e as any)[1] = d, (e as any)[2] = i, (e as any)[3] = o, (e as any)[4] = c, (e as any)[5] = r;
  } else i = (e as any)[2], o = (e as any)[3], c = (e as any)[4], r = (e as any)[5];
  if ((r as any) !== (((Symbol as any).for as any)("react.early_return_sentinel") as any)) return r;
  let u: any;
  return ((e as any)[10] as any) !== (i as any) || ((e as any)[11] as any) !== (o as any) || ((e as any)[12] as any) !== (c as any) ? (u = ((a as any).jsx as any)("span", {
    "aria-hidden": i,
    ...o,
    children: c
  }), (e as any)[10] = i, (e as any)[11] = o, (e as any)[12] = c, (e as any)[13] = u) : u = (e as any)[13], u;
}
async function ra(this: any, t: any, e: any): Promise<any> {
  await ((Ls as any).whenInteractive as any)("main"), ((t as any).current as any) === (e as any) && ((e as any).focus as any)();
}
function ca(this: any, t: any): any {
  (ca as any).d = 1070;
  const e: any = ((V as any).c as any)(60),
    {
      agents: n,
      recipients: d,
      isCreationPending: i,
      isGroupMode: o,
      menuOpenRequest: c,
      groupChat: r,
      teamAgents: u,
      onAddRecipient: h,
      onRemoveRecipient: m,
      onEnterGroupMode: p,
      onCreateTeamBot: y,
      onCommit: x,
      onClose: b
    }: any = t,
    v: any = (c as any) === (void 0 as any) ? 0 : c,
    {
      _: k
    }: any = (ke as any)(),
    {
      _: N
    }: any = (ke as any)(),
    [g, S]: any = (($ as any).useState as any)(""),
    [D, q]: any = (($ as any).useState as any)(0),
    [I, A]: any = (($ as any).useState as any)(!0),
    [ne, ss]: any = (($ as any).useState as any)(v),
    [re, ae]: any = (($ as any).useState as any)(0);
  (ne as any) !== (v as any) && ((ss as any)(v), !i && !I && ((A as any)(!0), (ae as any)(ka)));
  const [ge, W]: any = (($ as any).useState as any)(!1);
  let U: any;
  ((e as any)[0] as any) !== (y as any) ? (U = (): any => (y as any) != (null as any), (e as any)[0] = y, (e as any)[1] = U) : U = (e as any)[1];
  const [G, ce]: any = (($ as any).useState as any)(U),
    te: any = (Mn as any)();
  let J: any;
  ((e as any)[2] as any) !== (te as any) ? (J = (): any => te, (e as any)[2] = te, (e as any)[3] = J) : J = (e as any)[3];
  const [de]: any = (($ as any).useState as any)(J),
    w: any = (Rn as any)(),
    T: any = (($ as any).useRef as any)(!1),
    [O, oe]: any = (($ as any).useState as any)(!1),
    [ns, ue]: any = (($ as any).useState as any)(0),
    rn: any = O ? (ns as any) === (0 as any) : (D as any) === (0 as any);
  !G && (y as any) != (null as any) && ((g as any).length as any) === (0 as any) && rn && (ce as any)(!0);
  const [K, C]: any = (($ as any).useState as any)(!1),
    [cn, un]: any = (($ as any).useState as any)(null);
  let je: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (je = {
    resultKeys: "",
    pickableKeys: [],
    windowKeys: [],
    visibleKeys: [],
    carriedKeys: [],
    anchorKeys: [],
    unanchoredKeys: [],
    remounts: ga
  }, (e as any)[4] = je) : je = (e as any)[4];
  const [H, mn]: any = (($ as any).useState as any)(je),
    ie: any = (($ as any).useRef as any)(null),
    Y: any = (($ as any).useId as any)(),
    B: any = I && !i,
    ee: any = (u as any) != (null as any),
    R: any = B && ee && O;
  let ve: any;
  ((e as any)[5] as any) !== (u?.agents as any) || ((e as any)[6] as any) !== (u?.areAgentTitlesEnabled as any) ? (ve = (s: any): any => (Jn as any)((((Hs as any)(u?.agents ?? []) as any).filter as any)((l: any): any => (Qn as any)(l, s, Ye, u?.areAgentTitlesEnabled ?? !1))), (e as any)[5] = u?.agents, (e as any)[6] = u?.areAgentTitlesEnabled, (e as any)[7] = ve) : ve = (e as any)[7];
  const X: any = (ve as any)(g),
    L: any = ((X as any).length as any) === (0 as any) ? 0 : ((Math as any).min as any)(ns, ((X as any).length as any) - (1 as any));
  ((X as any).length as any) > (0 as any) && (L as any) !== (ns as any) && (ue as any)(L);
  const as: any = ((d as any).length as any) > (0 as any),
    xs: any = o || as,
    Ne: any = {
      isGroupCompose: xs,
      isRecipientSelected: as
    },
    ts: any = (r?.people as any) == (null as any) ? void 0 : (Na as any)((r as any).people),
    fn: any = ts?.members.filter((s: any): any => ((s as any).userId as any) !== ((ts as any).selfUserId as any)) ?? [],
    bs: any = (s: any, l: any, f: any): any => (Pn as any)(n, s, l, {
      isGroupMode: (f as any) === (void 0 as any) ? o : f,
      ...((r as any) == (null as any) ? {} : {
        groupChatTeamId: (r as any).teamId,
        teamMembers: fn
      }),
      isTeamBotSearchEnabled: ee
    }),
    me: any = (...s: any): any => (Ks as any)((bs as any)(...s), de),
    ws: any = (bs as any)(d, g),
    hn: any = B && (de as any) !== (void 0 as any) && ((ws as any).some as any)(ya);
  (Sn as any)((): any => (hn && !(T as any).current && ((T as any).current = !0, (w as any)()), pa));
  const j: any = (Ks as any)(ws, de),
    z: any = (Sa as any)(j, D);
  ((j as any).length as any) > (0 as any) && (z as any) !== (D as any) && (q as any)(z);
  const js: any = (s: any): any => (s as any) == (null as any) || !(fs as any)(s, Ne) || (Hn as any)(d, (Os as any)(s)),
    ds: any = ((j as any).findIndex as any)(Qe),
    Q: any = (ds as any) === (-1 as any) ? (j as any).length : ds,
    Se: any = (ds as any) === (-1 as any) ? (j as any).length : (((j as any).findLastIndex as any)(Qe) as any) + (1 as any),
    fe: any = (_n as any)({
      scrollEl: R ? null : cn,
      rowCount: Q,
      rowPitchPx: Je,
      leadingOffsetPx: ta,
      initialViewportPx: ee ? aa : na
    }),
    vs: any = ((((j as any).map as any)(Z) as any).join as any)(`
`),
    Ns: any = ((((j as any).slice as any)(0, Q) as any).map as any)(Z),
    pn: any = ((((j as any).slice as any)((fe as any).start, (fe as any).end) as any).map as any)(Z),
    os: any = ((((j as any).slice as any)((fe as any).visibleStart, (fe as any).visibleEnd) as any).map as any)(Z),
    xe: any = (vs as any) !== ((H as any).resultKeys as any);
  if (xe || (((os as any).join as any)(`
`) as any) !== ((((H as any).visibleKeys as any).join as any)(`
`) as any)) {
    const s: any = (z as any) < (Q as any) ? (j as any)[z] : void 0;
    let l: any = (H as any).remounts;
    const f: any = xe ? (xa as any)(H, Ns) : [];
    if (((f as any).length as any) > (0 as any)) {
      const M: any = new (Map as any)(l);
      for (const le of f) ((M as any).set as any)(le, ((((M as any).get as any)(le) ?? 0) as any) + (1 as any));
      l = M;
    }
    (mn as any)({
      resultKeys: vs,
      pickableKeys: Ns,
      windowKeys: pn,
      visibleKeys: os,
      carriedKeys: xe ? (H as any).visibleKeys : [],
      anchorKeys: xe ? (((H as any).visibleKeys as any).filter as any)((M: any): any => !((f as any).includes as any)(M)) : [],
      unanchoredKeys: xe ? [] : (((ba as any)(H, os, s) as any).filter as any)((M: any): any => !(((H as any).anchorKeys as any).includes as any)(M)),
      remounts: l
    });
  }
  const ze: any = new (Set as any)();
  for (let s: any = (fe as any).start; (s as any) < ((fe as any).end as any); s = (s as any) + (1 as any), s) ((ze as any).add as any)(s);
  (z as any) < (Q as any) && ((ze as any).add as any)(z);
  for (const s of (H as any).carriedKeys) {
    const l: any = ((j as any).findIndex as any)((f: any): any => ((Z as any)(f) as any) === (s as any));
    (l as any) !== (-1 as any) && (l as any) < (Q as any) && ((ze as any).add as any)(l);
  }
  let Me: any;
  ((e as any)[8] as any) !== ((H as any).remounts as any) ? (Me = (s: any): any => {
    const l: any = (Z as any)(s),
      f: any = (((H as any).remounts as any).get as any)(l);
    return (f as any) == (null as any) ? l : `${l}#${f}`;
  }, (e as any)[8] = (H as any).remounts, (e as any)[9] = Me) : Me = (e as any)[9];
  const yn: any = Me;
  let Re: any;
  ((e as any)[10] as any) !== (K as any) || ((e as any)[11] as any) !== (z as any) ? (Re = (s: any): any => {
    K && (C as any)(!1), (s as any) !== (z as any) && (q as any)(s);
  }, (e as any)[10] = K, (e as any)[11] = z, (e as any)[12] = Re) : Re = (e as any)[12];
  const be: any = Re,
    Ss: any = (s: any, l: any): any => ((a as any).jsx as any)(ln, {
      id: `${Y}-option-${l}`,
      index: l,
      isGroupCompose: xs,
      isHighlighted: (l as any) === (z as any) && !K,
      isRecipientSelected: as,
      isShortcutShown: ge,
      onActivate: As,
      onHover: be,
      overflowAnchor: (((H as any).unanchoredKeys as any).includes as any)((Z as any)(s)) ? "none" : "auto",
      ref: (l as any) === (z as any) ? ls : null,
      result: s,
      setSize: (j as any).length
    }, (yn as any)(s));
  let _e: any;
  ((e as any)[13] as any) !== (n as any) || ((e as any)[14] as any) !== (r as any) || ((e as any)[15] as any) !== (o as any) || ((e as any)[16] as any) !== (d as any) ? (_e = (r as any) != (null as any) && ($n as any)(n, d, {
    isGroupMode: o,
    groupChatTeamId: (r as any).teamId
  }), (e as any)[13] = n, (e as any)[14] = r, (e as any)[15] = o, (e as any)[16] = d, (e as any)[17] = _e) : _e = (e as any)[17];
  const is: any = _e && (r?.people as any) != (null as any) && (ts as any) == (null as any),
    zs: any = is && (r?.people?.status as any) === ("failed" as any);
  let Ae: any;
  ((e as any)[18] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ae = (s: any, l: any): any => {
    const f: any = (Ln as any)(s, l);
    (q as any)(f);
  }, (e as any)[18] = Ae) : Ae = (e as any)[18];
  const he: any = Ae;
  let Te: any;
  ((e as any)[19] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Te = (s: any): any => {
    if ((ie as any).current = s, (s as any) != (null as any)) {
      if (!((Ls as any).isHidden as any)("main")) {
        ((s as any).focus as any)();
        return;
      }
      (ra as any)(ie, s);
    }
  }, (e as any)[19] = Te) : Te = (e as any)[19];
  const kn: any = Te,
    {
      activeOptionRef: gn,
      markKeyboardNavigation: qe
    }: any = (Wn as any)(),
    ls: any = gn,
    rs: any = (s: any): any => {
      if (!(fs as any)(s, Ne) || !(js as any)(s)) return;
      const l: any = (Os as any)(s);
      (h as any)(l), (S as any)(""), (A as any)(!0), (he as any)((me as any)([...d, l], "", !0), ""), (ie as any).current?.focus();
    },
    Ms: any = (s: any): any => {
      i || ((m as any)(s), (he as any)((me as any)(((d as any).filter as any)((l: any, f: any): any => (f as any) !== (s as any)), g), g));
    },
    Rs: any = (): any => {
      (p as any)(), (S as any)(""), (A as any)(!0), (he as any)((me as any)(d, "", !0), ""), (ie as any).current?.focus();
    },
    _s: any = (s: any): any => {
      (x as any)(s), (ie as any).current?.focus();
    },
    As: any = (s: any): any => {
      const l: any = (j as any)[s];
      if ((l as any) != (null as any)) {
        if (((l as any).kind as any) === ("create-group" as any)) {
          (Rs as any)();
          return;
        }
        if ((In as any)(l, Ne)) {
          const f: any = (On as any)({
            recipients: d,
            highlighted: l,
            isGroupChatsEnabled: (r as any) != (null as any)
          });
          (f as any) != (null as any) && (_s as any)(f);
          return;
        }
        (rs as any)(l);
      }
    },
    xn: any = (): any => {
      const s: any = (Fn as any)({
        recipients: d,
        query: g,
        highlighted: (js as any)((j as any)[z]) ? (j as any)[z] : void 0,
        isGroupMode: o,
        isGroupChatsEnabled: (r as any) != (null as any)
      });
      if (((s as any).type as any) === ("enter-group-mode" as any)) {
        (Rs as any)();
        return;
      }
      if (((s as any).type as any) === ("add" as any)) {
        (rs as any)((s as any).result);
        return;
      }
      ((s as any).type as any) === ("commit" as any) && (_s as any)((s as any).launch);
    },
    Ts: any = (): any => {
      (oe as any)(!0), (A as any)(!0), (C as any)(!1), (S as any)(""), (ue as any)(0), (ie as any).current?.focus();
    },
    qs: any = (): any => {
      (oe as any)(!1), (C as any)(!1), (S as any)(""), (he as any)((me as any)(d, ""), "");
    },
    cs: any = (): any => {
      (qs as any)(), (ie as any).current?.focus();
    },
    Cs: any = (s: any): any => {
      const l: any = (X as any)[s];
      (l as any) == (null as any) || (u as any) == (null as any) || ((b as any)(), ((u as any).onOpenAgent as any)(((l as any).agent as any).id));
    },
    bn: any = (s: any): any => {
      if (((s as any).key as any) === ("ArrowDown" as any) || ((s as any).key as any) === ("ArrowUp" as any)) {
        if (((s as any).preventDefault as any)(), ((s as any).stopPropagation as any)(), !I) {
          (A as any)(!0);
          return;
        }
        const l: any = ((s as any).key as any) === ("ArrowDown" as any) ? 1 : -1;
        if (K) {
          (l as any) === (-1 as any) && ((X as any).length as any) > (0 as any) && ((C as any)(!1), (qe as any)());
          return;
        }
        const f: any = (L as any) >= (((X as any).length as any) - (1 as any) as any);
        if ((l as any) === (1 as any) && f && G) {
          (C as any)(!0);
          return;
        }
        if (((X as any).length as any) === (0 as any)) return;
        const M: any = ((Math as any).min as any)(((Math as any).max as any)((L as any) + (l as any), 0), ((X as any).length as any) - (1 as any));
        (M as any) !== (L as any) && (qe as any)(), (ue as any)(M);
        return;
      }
      if (((s as any).key as any) === ("Enter" as any)) {
        if (((s as any).preventDefault as any)(), ((s as any).stopPropagation as any)(), K) {
          y?.();
          return;
        }
        (Cs as any)(L);
        return;
      }
      if (((s as any).key as any) === ("Backspace" as any) && ((g as any).length as any) === (0 as any)) {
        ((s as any).preventDefault as any)(), ((s as any).stopPropagation as any)(), (cs as any)();
        return;
      }
      if (((s as any).key as any) === ("Escape" as any)) {
        if (((s as any).preventDefault as any)(), ((s as any).stopPropagation as any)(), ((g as any).length as any) > (0 as any)) {
          (S as any)(""), (C as any)(!1), (ue as any)(0);
          return;
        }
        (cs as any)();
      }
    },
    wn: any = (s: any): any => {
      if (i) return;
      if (R) {
        (bn as any)(s);
        return;
      }
      if (((s as any).key as any) === ("ArrowDown" as any) || ((s as any).key as any) === ("ArrowUp" as any)) {
        if (((s as any).preventDefault as any)(), ((s as any).stopPropagation as any)(), !I) {
          (A as any)(!0);
          return;
        }
        const f: any = ((s as any).key as any) === ("ArrowDown" as any) ? 1 : -1;
        if (ee && K) {
          (f as any) === (-1 as any) && ((C as any)(!1), (qe as any)());
          return;
        }
        const M: any = (ps as any)(j, z, f);
        if (ee && (f as any) === (1 as any) && (M as any) === (z as any)) {
          (C as any)(!0);
          return;
        }
        (M as any) !== (z as any) && (qe as any)(), (q as any)(M);
        return;
      }
      if (((s as any).key as any) === ("Enter" as any) && ee && K && B) {
        ((s as any).preventDefault as any)(), ((s as any).stopPropagation as any)(), (C as any)(!1), (Ts as any)();
        return;
      }
      if (((s as any).key as any) === ("Tab" as any) || ((s as any).key as any) === ("," as any)) {
        const f: any = (j as any)[z];
        B && (f as any) != (null as any) && (fs as any)(f, Ne) && (((s as any).preventDefault as any)(), ((s as any).stopPropagation as any)(), (rs as any)(f));
        return;
      }
      if (((s as any).key as any) === ("Backspace" as any) && ((g as any).length as any) === (0 as any) && ((d as any).length as any) > (0 as any)) {
        ((s as any).preventDefault as any)(), ((s as any).stopPropagation as any)(), (Ms as any)(((d as any).length as any) - (1 as any));
        return;
      }
      if (((s as any).key as any) === ("Enter" as any)) {
        ((s as any).preventDefault as any)(), ((s as any).stopPropagation as any)(), (xn as any)();
        return;
      }
      if (((s as any).key as any) === ("Escape" as any)) {
        if (((s as any).preventDefault as any)(), ((s as any).stopPropagation as any)(), ((g as any).length as any) > (0 as any)) {
          (S as any)(""), (he as any)((me as any)(d, ""), "");
          return;
        }
        if (B) {
          (A as any)(!1);
          return;
        }
        (b as any)();
        return;
      }
      const l: any = ks ? (s as any).metaKey : (s as any).ctrlKey;
      if (B && l && !(s as any).shiftKey && !(s as any).altKey && ((s as any).key as any) >= ("1" as any) && ((s as any).key as any) <= ("9" as any)) {
        const f: any = ((Number as any)((s as any).key) as any) - (1 as any);
        (f as any) < ((j as any).length as any) && (f as any) < (en as any) && (((s as any).preventDefault as any)(), ((s as any).stopPropagation as any)(), (As as any)(f));
      }
    },
    jn: any = (s: any): any => {
      (W as any)(!1);
      const l: any = (s as any).relatedTarget;
      l instanceof Node && (((s as any).currentTarget as any).contains as any)(l) || ((A as any)(!1), (C as any)(!1), O && (qs as any)());
    };
  let Ce: any;
  ((e as any)[20] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ce = (s: any): any => {
    ((s as any).key as any) === (Fs as any) && (W as any)(!0);
  }, (e as any)[20] = Ce) : Ce = (e as any)[20];
  const vn: any = Ce;
  let $e: any;
  ((e as any)[21] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? ($e = (s: any): any => {
    ((s as any).key as any) === (Fs as any) && (W as any)(!1);
  }, (e as any)[21] = $e) : $e = (e as any)[21];
  const Nn: any = $e;
  let Ee: any;
  ((e as any)[22] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ee = (E as any)((_ as any).toLabel, (P as any).body1), (e as any)[22] = Ee) : Ee = (e as any)[22];
  const $s: any = Ee,
    Es: any = (E as any)((_ as any).input, (P as any).body1);
  let us: any;
  if (R) {
    if (!K && ((X as any)[L] as any) != (null as any)) {
      let s: any;
      ((e as any)[23] as any) !== (Y as any) || ((e as any)[24] as any) !== (L as any) ? (s = (Xs as any)(Y, L), (e as any)[23] = Y, (e as any)[24] = L, (e as any)[25] = s) : s = (e as any)[25], us = s;
    }
  } else B && ((j as any)[z] as any) != (null as any) && (us = `${Y}-option-${z}`);
  let Pe: any;
  ((e as any)[26] as any) !== (R as any) || ((e as any)[27] as any) !== (k as any) ? (Pe = (k as any)(R ? {
    id: "rekS+N"
  } : {
    id: "pa8w8y"
  }), (e as any)[26] = R, (e as any)[27] = k, (e as any)[28] = Pe) : Pe = (e as any)[28];
  const Ps: any = Pe;
  let ms: any = null;
  if (is && !zs) {
    let s: any;
    ((e as any)[29] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = (E as any)((_ as any).sectionNote, (P as any).caption), (e as any)[29] = s) : s = (e as any)[29];
    let l: any;
    ((e as any)[30] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = ((a as any).jsx as any)("div", {
      ...s,
      "aria-live": "polite",
      role: "presentation",
      children: ((a as any).jsx as any)(F, {
        id: "yQE2r9"
      })
    }), (e as any)[30] = l) : l = (e as any)[30], ms = l;
  } else if (zs) {
    let s: any;
    ((e as any)[31] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = (E as any)((_ as any).sectionNote, (P as any).caption), (e as any)[31] = s) : s = (e as any)[31];
    let l: any;
    ((e as any)[32] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = ((a as any).jsx as any)(F, {
      id: "ochb2l"
    }), (e as any)[32] = l) : l = (e as any)[32];
    let f: any;
    ((e as any)[33] as any) !== (r as any) ? (f = (): any => r?.onRetryPeople?.(), (e as any)[33] = r, (e as any)[34] = f) : f = (e as any)[34];
    let M: any;
    ((e as any)[35] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (M = ((a as any).jsx as any)(F, {
      id: "6gRgw8"
    }), (e as any)[35] = M) : M = (e as any)[35];
    let le: any;
    ((e as any)[36] as any) !== (f as any) ? (le = ((a as any).jsxs as any)("div", {
      ...s,
      "aria-live": "polite",
      role: "presentation",
      children: [l, ((a as any).jsx as any)(En, {
        onClick: f,
        size: "sm",
        type: "button",
        variant: "secondary",
        children: M
      })]
    }), (e as any)[36] = f, (e as any)[37] = le) : le = (e as any)[37], ms = le;
  }
  const De: any = B && !R && ((j as any).length as any) === (0 as any) && !is;
  let Ke: any;
  ((e as any)[38] as any) !== (g as any) ? (Ke = ((((g as any).trim as any)() as any).length as any) === (0 as any) ? ((a as any).jsx as any)(F, {
    id: "r32WRY"
  }) : ((a as any).jsx as any)(F, {
    id: "12i8o8"
  }), (e as any)[38] = g, (e as any)[39] = Ke) : Ke = (e as any)[39];
  const Ie: any = Ke,
    Oe: any = [];
  let se: any = 0;
  for (const s of (([...ze] as any).sort as any)(ha)) {
    const l: any = (j as any)[s];
    (l as any) != (null as any) && ((s as any) > (se as any) && ((Oe as any).push as any)(((a as any).jsx as any)(ys, {
      firstRow: se,
      onHover: be,
      rowCount: (s as any) - (se as any)
    }, `spacer-before-${(Z as any)(l)}`)), ((Oe as any).push as any)((Ss as any)(l, s)), se = (s as any) + (1 as any));
  }
  if ((Q as any) > (se as any)) {
    const s: any = (Q as any) - (se as any);
    let l: any;
    ((e as any)[40] as any) !== (be as any) || ((e as any)[41] as any) !== (s as any) || ((e as any)[42] as any) !== (se as any) ? (l = ((a as any).jsx as any)(ys, {
      firstRow: se,
      onHover: be,
      rowCount: s
    }, "spacer-end"), (e as any)[40] = be, (e as any)[41] = s, (e as any)[42] = se, (e as any)[43] = l) : l = (e as any)[43], ((Oe as any).push as any)(l);
  }
  let He: any;
  ((e as any)[44] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (He = (we as any)("sand-new-chat-bar", "sand-1n2onr6 sand-78zum5 sand-1cy8zhl sand-kh2ocl sand-17d4w8g sand-1iyjqo2 sand-s83m0k sand-euugli sand-1wxaq2x sand-9f619 sand-889kno sand-1a8lsjc sand-135b78x sand-lvsv26"), (e as any)[44] = He) : He = (e as any)[44];
  let Fe: any, Ge: any;
  ((e as any)[45] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Fe = ((a as any).jsx as any)("span", {
    className: ($s as any).className,
    style: ($s as any).style,
    children: ((a as any).jsx as any)(F, {
      id: "ZxkdRe"
    })
  }), Ge = {
    className: "sand-78zum5 sand-6s0dn4 sand-c26acl sand-mixu3c sand-w09woa sand-1a02dak sand-1iyjqo2 sand-s83m0k sand-euugli sand-e0p6wg"
  }, (e as any)[45] = Fe, (e as any)[46] = Ge) : (Fe = (e as any)[45], Ge = (e as any)[46]);
  let Le: any;
  ((e as any)[47] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Le = (): any => {
    (A as any)(!0);
  }, (e as any)[47] = Le) : Le = (e as any)[47];
  let pe: any;
  ((e as any)[48] as any) !== (N as any) ? (pe = (N as any)({
    id: "CceQuV"
  }), (e as any)[48] = N, (e as any)[49] = pe) : pe = (e as any)[49];
  let Ue: any;
  ((e as any)[50] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ue = (we as any)("sand-new-chat-bar__close", "sand-jyslct sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-w4jnvo sand-1qx5ct2 sand-2lah0s sand-1gslohp sand-14z9mp sand-at24cr sand-1lziwak sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl sand-c342km sand-ng3xce sand-149ho13 sand-jbqb8w sand-aalx5g sand-1o0liin sand-1ypdohk"), (e as any)[50] = Ue) : Ue = (e as any)[50];
  let Ve: any;
  ((e as any)[51] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ve = ((a as any).jsx as any)(Ze, {
    name: "close",
    size: "sm"
  }), (e as any)[51] = Ve) : Ve = (e as any)[51];
  let We: any;
  ((e as any)[52] as any) !== (b as any) || ((e as any)[53] as any) !== (pe as any) ? (We = ((a as any).jsx as any)("button", {
    "aria-label": pe,
    className: Ue,
    onClick: b,
    type: "button",
    children: Ve
  }), (e as any)[52] = b, (e as any)[53] = pe, (e as any)[54] = We) : We = (e as any)[54];
  let ye: any;
  ((e as any)[55] as any) !== (Ie as any) || ((e as any)[56] as any) !== (De as any) ? (ye = De ? ((a as any).jsx as any)(An, {
    children: Ie
  }) : null, (e as any)[55] = Ie, (e as any)[56] = De, (e as any)[57] = ye) : ye = (e as any)[57];
  let Be: any;
  return ((e as any)[58] as any) !== (ye as any) ? (Be = ((a as any).jsx as any)(Tn, {
    children: ye
  }), (e as any)[58] = ye, (e as any)[59] = Be) : Be = (e as any)[59], ((a as any).jsxs as any)("div", {
    "aria-busy": i || void 0,
    className: He,
    onBlur: jn,
    onKeyDown: vn,
    onKeyUp: Nn,
    children: [Fe, ((a as any).jsxs as any)("div", {
      className: (Ge as any).className,
      children: [((d as any).map as any)((s: any, l: any): any => {
        let f: any = `new-${l}`;
        return ((s as any).kind as any) === ("agent" as any) ? f = (s as any).id : ((s as any).kind as any) === ("human" as any) && (f = `human-${(s as any).userId}`), ((a as any).jsx as any)(dn, {
          onRemove: (): any => (Ms as any)(l),
          recipient: s
        }, f);
      }), R ? ((a as any).jsx as any)(tn, {
        onRemove: cs
      }) : null, ((a as any).jsx as any)("input", {
        "aria-activedescendant": us,
        "aria-autocomplete": "list",
        "aria-controls": Y,
        "aria-expanded": B,
        "aria-label": Ps,
        className: (we as any)("sand-new-chat-bar__input", (Es as any).className),
        onChange: (s: any): any => {
          const l: any = ((s as any).target as any).value;
          if ((S as any)(l), (A as any)(!0), O && ee) {
            (C as any)(!1), (ue as any)(0);
            return;
          }
          (he as any)((me as any)(d, l), l);
        },
        onFocus: Le,
        onKeyDown: wn,
        placeholder: Ps,
        ref: kn,
        role: "combobox",
        spellCheck: !1,
        style: (Es as any).style,
        value: g
      }, re)]
    }), We, Be, B ? ((a as any).jsxs as any)("div", {
      className: (we as any)("sand-new-chat-menu", "sand-10l6tqk sand-qzfmfr sand-qpl54q sand-ufbo1o sand-78zum5 sand-dt5ytf sand-ixl9f9 sand-13l7odt sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-1s7mxt7 sand-b3r6kr sand-3ecgy1 sand-1aquc0h sand-1ijlv18 sand-rmiu4m"),
      children: [((a as any).jsxs as any)("div", {
        "aria-label": (N as any)(R ? {
          id: "8Ri8tN"
        } : {
          id: "yPrbsy"
        }),
        className: (({
          0: {
            className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-1yrsyyn sand-1icxu4v sand-10b6aqq sand-25sj25 sand-1phlbz0 sand-1odjw0f sand-6ikm8r sand-1597r2g sand-xvpt3r"
          },
          2: {
            className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-1yrsyyn sand-1icxu4v sand-25sj25 sand-1odjw0f sand-6ikm8r sand-1597r2g sand-xvpt3r sand-1pom53b sand-18d9i69"
          },
          1: {
            className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-1yrsyyn sand-1icxu4v sand-25sj25 sand-1phlbz0 sand-1odjw0f sand-6ikm8r sand-1597r2g sand-xvpt3r sand-1120s5i"
          },
          3: {
            className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-1yrsyyn sand-1icxu4v sand-25sj25 sand-1odjw0f sand-6ikm8r sand-1597r2g sand-xvpt3r sand-1pom53b sand-1120s5i"
          }
        } as any)[((!!(ee && !R) as any) << (1 as any) as any) | ((!!(R && G) as any) << (0 as any) as any)] as any).className,
        id: Y,
        ref: un,
        role: "listbox",
        children: [R ? ((a as any).jsx as any)(Qs, {
          activeOptionRef: ls,
          canCreate: G,
          hasQuery: ((((g as any).trim as any)() as any).length as any) > (0 as any),
          hasTeamAgents: ((u?.agents.length ?? 0) as any) > (0 as any),
          highlight: K ? -1 : L,
          listboxId: Y,
          onActivate: Cs,
          onHover: (s: any): any => {
            K && (C as any)(!1), (s as any) !== (L as any) && (ue as any)(s);
          },
          options: X
        }) : null, De ? ((a as any).jsx as any)("div", {
          "aria-hidden": !0,
          ...(E as any)((_ as any).emptyState, (P as any).body2),
          children: Ie
        }) : null, R ? null : Oe, !R && (Q as any) < (Se as any) ? ((a as any).jsx as any)("div", {
          ...(E as any)((_ as any).sectionNote, (P as any).caption),
          role: "presentation",
          children: ((d as any).some as any)(fa) ? ((a as any).jsx as any)(F, {
            id: "oekzJB"
          }) : ((a as any).jsx as any)(F, {
            id: "kiANar"
          })
        }) : null, (((R ? [] : ((j as any).slice as any)(Q, Se)) as any).map as any)((s: any, l: any): any => {
          const f: any = (Q as any) + (l as any);
          return ((s as any).kind as any) === ("agent" as any) ? ((a as any).jsx as any)(on, {
            agent: (s as any).agent,
            id: `${Y}-option-${f}`,
            index: f,
            ref: (f as any) === (z as any) ? ls : null,
            setSize: (j as any).length
          }, (Z as any)(s)) : null;
        }), R ? null : ((((j as any).slice as any)(Se) as any).map as any)((s: any, l: any): any => (Ss as any)(s, (Se as any) + (l as any))), R ? null : ms]
      }), ee && !R ? ((a as any).jsxs as any)("button", {
        "aria-expanded": !1,
        "data-sand-team-footer": !0,
        onClick: Ts,
        onMouseDown: ma,
        onMouseEnter: (): any => (C as any)(!0),
        onMouseLeave: (): any => (C as any)(!1),
        type: "button",
        ...({
          0: {
            className: "sand-jyslct sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3 sand-9f619 sand-1wxaq2x sand-exx8yu sand-1pic42t sand-18d9i69 sand-1onr9mi sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-1hc762m sand-13fuv20 sand-t8lcch sand-uxrje7 sand-1qhh985 sand-kgv12d sand-1sy0etr sand-13l7odt sand-18o3ruo sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i"
          },
          1: {
            className: "sand-jyslct sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3 sand-9f619 sand-1wxaq2x sand-exx8yu sand-1pic42t sand-18d9i69 sand-1onr9mi sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-1hc762m sand-13fuv20 sand-t8lcch sand-uxrje7 sand-1qhh985 sand-kgv12d sand-1sy0etr sand-13l7odt sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i sand-q09rwa"
          }
        } as any)[(!!K as any) << (0 as any)],
        children: [((a as any).jsx as any)(an, {
          agents: (Hs as any)(u?.agents ?? []),
          surfaceActive: K
        }), ((a as any).jsx as any)("span", {
          ...(E as any)((_ as any).footerLabel, (P as any).body2),
          children: ((a as any).jsx as any)(F, {
            id: "8Ri8tN"
          })
        }), ((a as any).jsx as any)("span", {
          className: "sand-2lah0s sand-169k319",
          children: ((a as any).jsx as any)(Ze, {
            name: "chevron-right",
            size: "sm"
          })
        })]
      }) : null, R && G ? ((a as any).jsxs as any)("button", {
        "data-sand-team-create": !0,
        onClick: (): any => y?.(),
        onMouseDown: ua,
        onMouseEnter: (): any => (C as any)(!0),
        onMouseLeave: (): any => (C as any)(!1),
        type: "button",
        ...({
          0: {
            className: "sand-jyslct sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-6s0dn4 sand-h8yej3 sand-9f619 sand-1wxaq2x sand-exx8yu sand-18d9i69 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-1hc762m sand-13fuv20 sand-t8lcch sand-uxrje7 sand-1qhh985 sand-kgv12d sand-1sy0etr sand-13l7odt sand-18o3ruo sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i sand-1v2ro7d sand-1x5flf6 sand-wn43p0"
          },
          1: {
            className: "sand-jyslct sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-6s0dn4 sand-h8yej3 sand-9f619 sand-1wxaq2x sand-exx8yu sand-18d9i69 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-1hc762m sand-13fuv20 sand-t8lcch sand-uxrje7 sand-1qhh985 sand-kgv12d sand-1sy0etr sand-13l7odt sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i sand-1v2ro7d sand-1x5flf6 sand-wn43p0 sand-q09rwa"
          }
        } as any)[(!!K as any) << (0 as any)],
        children: [((a as any).jsx as any)(Us, {
          "aria-hidden": !0,
          icon: "building",
          sizePx: Bs
        }), ((a as any).jsx as any)("span", {
          ...(E as any)((_ as any).footerLabel, (P as any).body2),
          children: ((a as any).jsx as any)(F, {
            id: "Wy9Ium"
          })
        })]
      }) : null]
    }) : null]
  });
}
function ua(this: any, t: any): any {
  return ((t as any).preventDefault as any)();
}
function ma(this: any, t: any): any {
  return ((t as any).preventDefault as any)();
}
function fa(this: any, t: any): any {
  return ((t as any).kind as any) === ("human" as any);
}
function ha(this: any, t: any, e: any): any {
  return (t as any) - (e as any);
}
function pa(this: any): any {}
function ya(this: any, t: any): any {
  return ((t as any).kind as any) === ("create-group" as any);
}
function ka(this: any, t: any): any {
  return (t as any) + (1 as any);
}
function tn(this: any, t: any): any {
  (tn as any).d = 1077;
  const e: any = ((V as any).c as any)(8),
    {
      onRemove: n
    }: any = t,
    {
      _: d
    }: any = (ke as any)();
  let i: any;
  ((e as any)[0] as any) !== (d as any) ? (i = (d as any)({
    id: "8Ri8tN"
  }), (e as any)[0] = d, (e as any)[1] = i) : i = (e as any)[1];
  let o: any;
  ((e as any)[2] as any) !== (d as any) ? (o = (d as any)({
    id: "2lVk4O"
  }), (e as any)[2] = d, (e as any)[3] = o) : o = (e as any)[3];
  let c: any;
  return ((e as any)[4] as any) !== (n as any) || ((e as any)[5] as any) !== (i as any) || ((e as any)[6] as any) !== (o as any) ? (c = ((a as any).jsx as any)(Ws, {
    label: i,
    labelStyle: (P as any).body2,
    onRemove: n,
    removeLabel: o,
    removeReveal: "hover",
    size: "sm",
    style: (_ as any).teamPill
  }), (e as any)[4] = n, (e as any)[5] = i, (e as any)[6] = o, (e as any)[7] = c) : c = (e as any)[7], c;
}
function dn(this: any, t: any): any {
  (dn as any).d = 1071;
  const e: any = ((V as any).c as any)(15),
    {
      recipient: n,
      onRemove: d
    }: any = t,
    {
      _: i
    }: any = (ke as any)();
  let o: any;
  if (((n as any).kind as any) === ("agent" as any)) {
    let m: any;
    ((e as any)[0] as any) !== ((n as any).id as any) ? (m = ((a as any).jsx as any)(Dn, {
      id: (n as any).id,
      isStatic: !0,
      size: "xs"
    }), (e as any)[0] = (n as any).id, (e as any)[1] = m) : m = (e as any)[1], o = m;
  } else if (((n as any).kind as any) === ("human" as any)) {
    let m: any;
    ((e as any)[2] as any) !== (n as any) ? (m = ((a as any).jsx as any)(Vs, {
      person: n,
      sizePx: (hs as any).xs
    }), (e as any)[2] = n, (e as any)[3] = m) : m = (e as any)[3], o = m;
  } else {
    let m: any;
    ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = ((a as any).jsx as any)(Us, {
      "aria-hidden": !0,
      icon: "plus",
      sizePx: (hs as any).xs
    }), (e as any)[4] = m) : m = (e as any)[4], o = m;
  }
  const c: any = o;
  let r: any;
  ((e as any)[5] as any) !== (n as any) ? (r = (Is as any)(n), (e as any)[5] = n, (e as any)[6] = r) : r = (e as any)[6];
  let u: any;
  ((e as any)[7] as any) !== (i as any) || ((e as any)[8] as any) !== (n as any) ? (u = (i as any)({
    id: "Y47eWa",
    values: {
      0: (Is as any)(n)
    }
  }), (e as any)[7] = i, (e as any)[8] = n, (e as any)[9] = u) : u = (e as any)[9];
  let h: any;
  return ((e as any)[10] as any) !== (o as any) || ((e as any)[11] as any) !== (d as any) || ((e as any)[12] as any) !== (r as any) || ((e as any)[13] as any) !== (u as any) ? (h = ((a as any).jsx as any)(Ws, {
    avatar: c,
    className: "sand-new-chat-chip",
    label: r,
    onRemove: d,
    removeLabel: u,
    size: "sm",
    style: (_ as any).recipientChip
  }), (e as any)[10] = o, (e as any)[11] = d, (e as any)[12] = r, (e as any)[13] = u, (e as any)[14] = h) : h = (e as any)[14], h;
}
const ga: any = new (Map as any)();
function xa(this: any, t: any, e: any): any {
  const n: any = (wa as any)({
    previous: (t as any).pickableKeys,
    next: e
  });
  return (((t as any).visibleKeys as any).filter as any)((d: any): any => ((n as any).has as any)(d));
}
function ba(this: any, t: any, e: any, n: any): any {
  const d: any = new (Set as any)([...(t as any).windowKeys, ...(t as any).carriedKeys]);
  (n as any) != (null as any) && ((d as any).add as any)((Z as any)(n));
  const i: any = ((e as any).findIndex as any)((o: any): any => !((d as any).has as any)(o));
  return (i as any) === (-1 as any) ? [] : ((((e as any).slice as any)((i as any) + (1 as any)) as any).filter as any)((o: any): any => ((d as any).has as any)(o));
}
function wa(this: any, {
  previous: t,
  next: e
}: any): any {
  const n: any = new (Map as any)(((t as any).map as any)((o: any, c: any): any => [o, c])),
    d: any = new (Set as any)();
  let i: any = -1;
  for (const o of e) {
    const c: any = ((n as any).get as any)(o);
    (c as any) != (null as any) && ((c as any) < (i as any) ? ((d as any).add as any)(o) : i = c);
  }
  return d;
}
function Z(this: any, t: any): any {
  return ((t as any).kind as any) === ("agent" as any) ? ((t as any).agent as any).id : ((t as any).kind as any) === ("human" as any) ? `human-${((t as any).member as any).userId}` : (t as any).kind;
}
function ja(this: any, t: any, e: any, n: any): any {
  return ((e as any).kind as any) === ("agent" as any) ? (Ye as any)((e as any).agent) : ((e as any).kind as any) === ("human" as any) ? (Gn as any)((e as any).member) : ((e as any).kind as any) === ("create-group" as any) ? (t as any)({
    id: "hRyPRc"
  }) : ((e as any).kind as any) === ("create" as any) ? (t as any)(n ? {
    id: "ykS238",
    values: {
      0: (e as any).name
    }
  } : {
    id: "5J3xAb",
    values: {
      0: (e as any).name
    }
  }) : (t as any)({
    id: "6X9ton"
  });
}
function va(this: any, t: any, e: any, n: any): any {
  return ((e as any).kind as any) === ("human" as any) ? (t as any)({
    id: "zeQMAX"
  }) : ((e as any).kind as any) !== ("agent" as any) || ((e as any).agent as any).isGroup ? null : (t as any)(n ? {
    id: "zeQMAX"
  } : {
    id: "hIQkLb"
  });
}
function Na(this: any, t: any): any {
  switch ((t as any).status) {
    case "ready":
      return (t as any).value;
    case "loading":
    case "failed":
      return (t as any).previous;
    default:
      return;
  }
}
function ps(this: any, t: any, e: any, n: any): any {
  for (let d: any = (e as any) + (n as any); (d as any) >= (0 as any) && (d as any) < ((t as any).length as any); d += n) {
    const i: any = (t as any)[d];
    if ((i as any) != (null as any) && !(Qe as any)(i)) return d;
  }
  return e;
}
function Sa(this: any, t: any, e: any): any {
  if (((t as any).length as any) === (0 as any)) return 0;
  const n: any = ((Math as any).min as any)(e, ((t as any).length as any) - (1 as any)),
    d: any = (t as any)[n];
  if ((d as any) == (null as any) || !(Qe as any)(d)) return n;
  const i: any = (ps as any)(t, n, 1);
  return (i as any) === (n as any) ? (ps as any)(t, n, -1) : i;
}
function ys(this: any, t: any): any {
  (ys as any).d = 1074;
  const e: any = ((V as any).c as any)(9),
    {
      firstRow: n,
      onHover: d,
      rowCount: i
    }: any = t;
  let o: any;
  ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (d as any) || ((e as any)[2] as any) !== (i as any) ? (o = (u: any): any => {
    const h: any = ((u as any).clientY as any) - (((((u as any).currentTarget as any).getBoundingClientRect as any)() as any).top as any),
      m: any = ((Math as any).floor as any)((h as any) / (Je as any));
    (m as any) < (0 as any) || (m as any) >= (i as any) || ((h as any) - ((m as any) * (Je as any) as any) as any) >= (Js as any) || (d as any)((n as any) + (m as any));
  }, (e as any)[0] = n, (e as any)[1] = d, (e as any)[2] = i, (e as any)[3] = o) : o = (e as any)[3];
  let c: any;
  ((e as any)[4] as any) !== (i as any) ? (c = (E as any)(((_ as any).rowSpacer as any)(i)), (e as any)[4] = i, (e as any)[5] = c) : c = (e as any)[5];
  let r: any;
  return ((e as any)[6] as any) !== (o as any) || ((e as any)[7] as any) !== (c as any) ? (r = ((a as any).jsx as any)("div", {
    "aria-hidden": !0,
    onMouseMove: o,
    ...c
  }), (e as any)[6] = o, (e as any)[7] = c, (e as any)[8] = r) : r = (e as any)[8], r;
}
function gs(this: any, t: any): any {
  (gs as any).d = 1073;
  const e: any = ((V as any).c as any)(16),
    {
      agent: n,
      isDimmed: d,
      children: i
    }: any = t,
    o: any = (d as any) === (void 0 as any) ? !1 : d;
  let c: any, r: any;
  ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (o as any) ? (c = (n as any) != (null as any) && (qn as any)(n), r = (E as any)((_ as any).rowName, (P as any).body2, c && (_ as any).rowNameFit, o && !c && (_ as any).rowDimmed), (e as any)[0] = n, (e as any)[1] = o, (e as any)[2] = c, (e as any)[3] = r) : (c = (e as any)[2], r = (e as any)[3]);
  const u: any = r;
  let h: any;
  ((e as any)[4] as any) !== (i as any) || ((e as any)[5] as any) !== ((u as any).className as any) || ((e as any)[6] as any) !== ((u as any).style as any) ? (h = ((a as any).jsx as any)("span", {
    className: (u as any).className,
    style: (u as any).style,
    children: i
  }), (e as any)[4] = i, (e as any)[5] = (u as any).className, (e as any)[6] = (u as any).style, (e as any)[7] = h) : h = (e as any)[7];
  const m: any = h;
  if (!c) return m;
  let p: any;
  ((e as any)[8] as any) !== (o as any) ? (p = ({
    0: {
      className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1iyjqo2 sand-s83m0k sand-euugli"
    },
    1: {
      className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1iyjqo2 sand-s83m0k sand-euugli sand-byyjgo"
    }
  } as any)[(!!o as any) << (0 as any)], (e as any)[8] = o, (e as any)[9] = p) : p = (e as any)[9];
  let y: any;
  ((e as any)[10] as any) !== (n as any) ? (y = ((a as any).jsx as any)(Vn, {
    agent: n
  }), (e as any)[10] = n, (e as any)[11] = y) : y = (e as any)[11];
  let x: any;
  return ((e as any)[12] as any) !== (m as any) || ((e as any)[13] as any) !== (p as any) || ((e as any)[14] as any) !== (y as any) ? (x = ((a as any).jsxs as any)("span", {
    ...p,
    children: [m, y]
  }), (e as any)[12] = m, (e as any)[13] = p, (e as any)[14] = y, (e as any)[15] = x) : x = (e as any)[15], x;
}
function on(this: any, t: any): any {
  (on as any).d = 1078;
  const e: any = ((V as any).c as any)(16),
    {
      agent: n,
      id: d,
      index: i,
      ref: o,
      setSize: c
    }: any = t;
  let r: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = {
    className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3 sand-9f619 sand-u0aao5 sand-1bf2k6n sand-1hc27l4 sand-1yrsyyn sand-f159sx sand-10b6aqq sand-mzvs34 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-c342km sand-ng3xce sand-ur7f20 sand-jbqb8w sand-tyxrsu sand-1yc453h sand-jb2p0i sand-t0e3qv"
  }, (e as any)[0] = r) : r = (e as any)[0];
  const u: any = (i as any) + (1 as any);
  let h: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = {
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-vy4d1p sand-xk0z11 sand-2lah0s sand-byyjgo"
  }, (e as any)[1] = h) : h = (e as any)[1];
  let m: any;
  ((e as any)[2] as any) !== (n as any) ? (m = ((a as any).jsx as any)("span", {
    ...h,
    children: ((a as any).jsx as any)(es, {
      agent: n,
      isStatic: !0,
      size: "sm"
    })
  }), (e as any)[2] = n, (e as any)[3] = m) : m = (e as any)[3];
  let p: any;
  ((e as any)[4] as any) !== (n as any) ? (p = (Ye as any)(n), (e as any)[4] = n, (e as any)[5] = p) : p = (e as any)[5];
  let y: any;
  ((e as any)[6] as any) !== (n as any) || ((e as any)[7] as any) !== (p as any) ? (y = ((a as any).jsx as any)(gs, {
    agent: n,
    isDimmed: !0,
    children: p
  }), (e as any)[6] = n, (e as any)[7] = p, (e as any)[8] = y) : y = (e as any)[8];
  let x: any;
  return ((e as any)[9] as any) !== (d as any) || ((e as any)[10] as any) !== (o as any) || ((e as any)[11] as any) !== (c as any) || ((e as any)[12] as any) !== (u as any) || ((e as any)[13] as any) !== (m as any) || ((e as any)[14] as any) !== (y as any) ? (x = ((a as any).jsxs as any)("div", {
    ...r,
    "aria-disabled": !0,
    "aria-posinset": u,
    "aria-setsize": c,
    id: d,
    ref: o,
    role: "option",
    children: [m, y]
  }), (e as any)[9] = d, (e as any)[10] = o, (e as any)[11] = c, (e as any)[12] = u, (e as any)[13] = m, (e as any)[14] = y, (e as any)[15] = x) : x = (e as any)[15], x;
}
function ln(this: any, t: any): any {
  (ln as any).d = 1072;
  const e: any = ((V as any).c as any)(70),
    {
      result: n,
      id: d,
      index: i,
      setSize: o,
      isGroupCompose: c,
      isHighlighted: r,
      isRecipientSelected: u,
      isShortcutShown: h,
      onActivate: m,
      onHover: p,
      overflowAnchor: y,
      ref: x
    }: any = t,
    {
      _: b
    }: any = (ke as any)();
  let v: any, k: any, N: any, g: any, S: any, D: any, q: any, I: any;
  if (((e as any)[0] as any) !== (b as any) || ((e as any)[1] as any) !== (i as any) || ((e as any)[2] as any) !== (c as any) || ((e as any)[3] as any) !== (r as any) || ((e as any)[4] as any) !== (h as any) || ((e as any)[5] as any) !== (y as any) || ((e as any)[6] as any) !== (n as any) || ((e as any)[7] as any) !== (o as any)) {
    N = ({
      0: {
        className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3 sand-9f619 sand-u0aao5 sand-1bf2k6n sand-1hc27l4 sand-1yrsyyn sand-f159sx sand-10b6aqq sand-mzvs34 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-c342km sand-ng3xce sand-ur7f20 sand-jbqb8w sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i"
      },
      2: {
        className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3 sand-9f619 sand-u0aao5 sand-1bf2k6n sand-1hc27l4 sand-1yrsyyn sand-f159sx sand-10b6aqq sand-mzvs34 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-c342km sand-ng3xce sand-ur7f20 sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i sand-luhinc"
      },
      1: {
        className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3 sand-9f619 sand-u0aao5 sand-1bf2k6n sand-1hc27l4 sand-1yrsyyn sand-f159sx sand-10b6aqq sand-mzvs34 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-c342km sand-ng3xce sand-ur7f20 sand-jbqb8w sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i sand-1xzczws"
      },
      3: {
        className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3 sand-9f619 sand-u0aao5 sand-1bf2k6n sand-1hc27l4 sand-1yrsyyn sand-f159sx sand-10b6aqq sand-mzvs34 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-c342km sand-ng3xce sand-ur7f20 sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i sand-luhinc sand-1xzczws"
      }
    } as any)[((!!r as any) << (1 as any) as any) | ((((y as any) === ("none" as any)) as any) << (0 as any) as any)];
    let te: any;
    ((e as any)[16] as any) !== (b as any) || ((e as any)[17] as any) !== (c as any) || ((e as any)[18] as any) !== (r as any) || ((e as any)[19] as any) !== (n as any) ? (te = r ? (va as any)(b, n, c) : null, (e as any)[16] = b, (e as any)[17] = c, (e as any)[18] = r, (e as any)[19] = n, (e as any)[20] = te) : te = (e as any)[20];
    const J: any = te;
    let de: any;
    if (((e as any)[21] as any) !== ((n as any).kind as any) || ((e as any)[22] as any) !== ((n as any).member as any) ? (de = ((n as any).kind as any) === ("human" as any) ? (Kn as any)((n as any).member) : null, (e as any)[21] = (n as any).kind, (e as any)[22] = (n as any).member, (e as any)[23] = de) : de = (e as any)[23], k = de, ((n as any).kind as any) === ("agent" as any)) {
      let w: any;
      ((e as any)[24] as any) !== ((n as any).agent as any) ? (w = ((a as any).jsx as any)(es, {
        agent: (n as any).agent,
        isStatic: !0,
        size: "sm"
      }), (e as any)[24] = (n as any).agent, (e as any)[25] = w) : w = (e as any)[25], v = w;
    } else if (((n as any).kind as any) === ("human" as any)) {
      let w: any;
      ((e as any)[26] as any) !== ((n as any).member as any) ? (w = ((a as any).jsx as any)(Vs, {
        person: (n as any).member,
        sizePx: (hs as any).sm
      }), (e as any)[26] = (n as any).member, (e as any)[27] = w) : w = (e as any)[27], v = w;
    } else {
      const w: any = ((n as any).kind as any) === ("create-group" as any) ? "people" : "plus";
      let T: any;
      ((e as any)[28] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (T = {
        className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-vy4d1p sand-xk0z11 sand-2lah0s sand-149ho13 sand-1tiofj7 sand-1o0liin"
      }, (e as any)[28] = T) : T = (e as any)[28];
      let O: any;
      ((e as any)[29] as any) !== (w as any) ? (O = ((a as any).jsx as any)("span", {
        className: (T as any).className,
        children: ((a as any).jsx as any)(Ze, {
          name: w,
          size: "sm"
        })
      }), (e as any)[29] = w, (e as any)[30] = O) : O = (e as any)[30], v = O;
    }
    if (I = null, h && (i as any) < (en as any)) {
      let w: any;
      ((e as any)[31] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = {
        className: "sand-3nfvp2 sand-6s0dn4 sand-195vfkc"
      }, (e as any)[31] = w) : w = (e as any)[31];
      let T: any;
      ((e as any)[32] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (T = ((a as any).jsx as any)(Ds, {
        children: da
      }), (e as any)[32] = T) : T = (e as any)[32];
      const O: any = (i as any) + (1 as any);
      let oe: any;
      ((e as any)[33] as any) !== (O as any) ? (oe = ((a as any).jsxs as any)("span", {
        className: (w as any).className,
        children: [T, ((a as any).jsx as any)(Ds, {
          children: O
        })]
      }), (e as any)[33] = O, (e as any)[34] = oe) : oe = (e as any)[34], I = oe;
    } else if ((J as any) != (null as any)) {
      let w: any;
      ((e as any)[35] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = (E as any)((_ as any).rowHint, (P as any).caption), (e as any)[35] = w) : w = (e as any)[35];
      let T: any;
      ((e as any)[36] as any) !== (J as any) ? (T = ((a as any).jsx as any)("span", {
        "aria-hidden": !0,
        ...w,
        children: J
      }), (e as any)[36] = J, (e as any)[37] = T) : T = (e as any)[37], I = T;
    }
    g = (i as any) + (1 as any), S = r, D = o, q = (we as any)("sand-new-chat-row", (N as any).className), (e as any)[0] = b, (e as any)[1] = i, (e as any)[2] = c, (e as any)[3] = r, (e as any)[4] = h, (e as any)[5] = y, (e as any)[6] = n, (e as any)[7] = o, (e as any)[8] = v, (e as any)[9] = k, (e as any)[10] = N, (e as any)[11] = g, (e as any)[12] = S, (e as any)[13] = D, (e as any)[14] = q, (e as any)[15] = I;
  } else v = (e as any)[8], k = (e as any)[9], N = (e as any)[10], g = (e as any)[11], S = (e as any)[12], D = (e as any)[13], q = (e as any)[14], I = (e as any)[15];
  let A: any;
  ((e as any)[38] as any) !== (i as any) || ((e as any)[39] as any) !== (m as any) ? (A = (): any => (m as any)(i), (e as any)[38] = i, (e as any)[39] = m, (e as any)[40] = A) : A = (e as any)[40];
  let ne: any;
  ((e as any)[41] as any) !== (i as any) || ((e as any)[42] as any) !== (p as any) ? (ne = (): any => (p as any)(i), (e as any)[41] = i, (e as any)[42] = p, (e as any)[43] = ne) : ne = (e as any)[43];
  const ss: any = (N as any).style;
  let re: any;
  ((e as any)[44] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (re = {
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-vy4d1p sand-xk0z11 sand-2lah0s"
  }, (e as any)[44] = re) : re = (e as any)[44];
  let ae: any;
  ((e as any)[45] as any) !== (v as any) ? (ae = ((a as any).jsx as any)("span", {
    className: (re as any).className,
    children: v
  }), (e as any)[45] = v, (e as any)[46] = ae) : ae = (e as any)[46];
  const ge: any = ((n as any).kind as any) === ("agent" as any) ? (n as any).agent : null;
  let W: any;
  ((e as any)[47] as any) !== (b as any) || ((e as any)[48] as any) !== (u as any) || ((e as any)[49] as any) !== (n as any) ? (W = (ja as any)(b, n, u), (e as any)[47] = b, (e as any)[48] = u, (e as any)[49] = n, (e as any)[50] = W) : W = (e as any)[50];
  let U: any;
  ((e as any)[51] as any) !== (k as any) ? (U = (k as any) == (null as any) ? null : ((a as any).jsxs as any)((a as any).Fragment, {
    children: [" ", ((a as any).jsx as any)("span", {
      className: "sand-169k319",
      children: k
    })]
  }), (e as any)[51] = k, (e as any)[52] = U) : U = (e as any)[52];
  let G: any;
  ((e as any)[53] as any) !== (ge as any) || ((e as any)[54] as any) !== (W as any) || ((e as any)[55] as any) !== (U as any) ? (G = ((a as any).jsxs as any)(gs, {
    agent: ge,
    children: [W, U]
  }), (e as any)[53] = ge, (e as any)[54] = W, (e as any)[55] = U, (e as any)[56] = G) : G = (e as any)[56];
  let ce: any;
  return ((e as any)[57] as any) !== (d as any) || ((e as any)[58] as any) !== (x as any) || ((e as any)[59] as any) !== ((N as any).style as any) || ((e as any)[60] as any) !== (g as any) || ((e as any)[61] as any) !== (G as any) || ((e as any)[62] as any) !== (S as any) || ((e as any)[63] as any) !== (D as any) || ((e as any)[64] as any) !== (q as any) || ((e as any)[65] as any) !== (A as any) || ((e as any)[66] as any) !== (ne as any) || ((e as any)[67] as any) !== (ae as any) || ((e as any)[68] as any) !== (I as any) ? (ce = ((a as any).jsxs as any)("button", {
    "aria-posinset": g,
    "aria-selected": S,
    "aria-setsize": D,
    className: q,
    id: d,
    onClick: A,
    onMouseDown: za,
    onMouseMove: ne,
    ref: x,
    role: "option",
    style: ss,
    tabIndex: -1,
    type: "button",
    children: [ae, G, I]
  }), (e as any)[57] = d, (e as any)[58] = x, (e as any)[59] = (N as any).style, (e as any)[60] = g, (e as any)[61] = G, (e as any)[62] = S, (e as any)[63] = D, (e as any)[64] = q, (e as any)[65] = A, (e as any)[66] = ne, (e as any)[67] = ae, (e as any)[68] = I, (e as any)[69] = ce) : ce = (e as any)[69], ce;
}
function za(this: any, t: any): any {
  return ((t as any).preventDefault as any)();
}
export { ca as NewChatBar };
//# debugId=bd84a891-15f7-444f-8bd0-cacf25630816
