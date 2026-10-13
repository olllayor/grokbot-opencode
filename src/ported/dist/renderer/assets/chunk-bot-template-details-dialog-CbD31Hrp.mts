declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "6b193885-ad5c-493b-a2e4-c49b732dbd43", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-6b193885-ad5c-493b-a2e4-c49b732dbd43");
  } catch (e: any) {}
} as any)();
import { c as g, u as ne, j as o, T as S, r as M, p as Te, i as ps } from "./index.eager-vendor-Qbf9YA6n.js";
import { eP as hs, b8 as gs, cq as ys, eQ as xs, bY as js, eR as bs, eS as vs, eT as ws, eU as Ss, aP as Ce, da as Ns, eV as _s, db as zs, c$ as Os, eW as Le, eX as Re, eY as Be, a_ as H, a$ as Ve, Q as Ts, eZ as Is, s as $s } from "./index.eager-app-Cj5f8Gby.js";
import { aY as Ee, a_ as As } from "./index.eager-platform-Dcfeegfw.js";
import { z as _e, b5 as qs, b7 as Ms, bv as Ps, J as Cs, p as Pe, x as T, b8 as Ls, Q as Rs, U as Bs, y as Vs, r as Es, L as Ds, I as Ks, P as Ws } from "./index-ZYxf-aBb.js";
import { u as Fs, W as Zs } from "./chunk-wipe-navigation-B3wgZxtA.js";
import { r as Xs } from "./chunk-bot-template-details-focus-BkZ83BHB.js";
const Se: any = {
  description: {
    k9WMMc: "sand-2b8uid",
    $$css: !0
  },
  action: {
    kjj79g: "sand-l56j7k",
    kzqmXN: "sand-h8yej3",
    $$css: !0
  }
};
function De(this: any, n: any): any {
  (De as any).d = 142;
  const e: any = ((g as any).c as any)(26),
    {
      template: s,
      onDeleted: t
    }: any = n,
    {
      _: d
    }: any = (ne as any)(),
    {
      sendPrompt: a
    }: any = (hs as any)(),
    i: any = (gs as any)(a),
    l: any = (ys as any)(),
    c: any = (xs as any)(),
    r: any = (s as any).sourceAgentId,
    u: any = (js as any)(r ?? null);
  let f: any;
  ((e as any)[0] as any) !== (u as any) ? (f = (u as any) == (null as any) || !(bs as any)(u), (e as any)[0] = u, (e as any)[1] = f) : f = (e as any)[1];
  const m: any = f;
  let k: any;
  ((e as any)[2] as any) !== (d as any) || ((e as any)[3] as any) !== (i as any) || ((e as any)[4] as any) !== (r as any) ? (k = (): any => {
    (r as any) != (null as any) && ((i as any).dispatch as any)({
      agentId: r,
      prompt: (d as any)({
        id: "sfB+W/"
      }),
      initiator: "template_share"
    });
  }, (e as any)[2] = d, (e as any)[3] = i, (e as any)[4] = r, (e as any)[5] = k) : k = (e as any)[5];
  const p: any = k;
  let y: any;
  ((e as any)[6] as any) !== (t as any) || ((e as any)[7] as any) !== (c as any) || ((e as any)[8] as any) !== (l as any) || ((e as any)[9] as any) !== ((s as any).name as any) || ((e as any)[10] as any) !== ((s as any).shareId as any) ? (y = (): any => {
    (l as any)((vs as any)({
      name: (s as any).name,
      remove: async (): Promise<any> => {
        await ((c as any).run as any)({
          shareId: (s as any).shareId
        }), (t as any)();
      }
    }));
  }, (e as any)[6] = t, (e as any)[7] = c, (e as any)[8] = l, (e as any)[9] = (s as any).name, (e as any)[10] = (s as any).shareId, (e as any)[11] = y) : y = (e as any)[11];
  const h: any = y;
  let v: any;
  ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = {
    className: "sand-78zum5 sand-dt5ytf sand-1665zp3"
  }, (e as any)[12] = v) : v = (e as any)[12];
  let x: any;
  ((e as any)[13] as any) !== (m as any) || ((e as any)[14] as any) !== (i as any) || ((e as any)[15] as any) !== (r as any) || ((e as any)[16] as any) !== (p as any) ? (x = (r as any) == (null as any) || !m ? null : ((o as any).jsx as any)(_e, {
    leadingIcon: "refresh",
    onClick: p,
    pending: (i as any).isPending,
    size: "lg",
    style: (Se as any).action,
    type: "button",
    variant: "secondary",
    children: ((o as any).jsx as any)(S, {
      id: "Cwavou"
    })
  }), (e as any)[13] = m, (e as any)[14] = i, (e as any)[15] = r, (e as any)[16] = p, (e as any)[17] = x) : x = (e as any)[17];
  let j: any;
  ((e as any)[18] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = {
    className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
  }, (e as any)[18] = j) : j = (e as any)[18];
  let N: any;
  ((e as any)[19] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (N = ((o as any).jsx as any)(Ee, {
    color: "secondary",
    rootStyle: (Se as any).description,
    size: "md",
    children: ((o as any).jsx as any)(S, {
      id: "q3y8Bg"
    })
  }), (e as any)[19] = N) : N = (e as any)[19];
  let I: any;
  ((e as any)[20] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (I = ((o as any).jsx as any)(S, {
    id: "DFjdv0"
  }), (e as any)[20] = I) : I = (e as any)[20];
  let _: any;
  ((e as any)[21] as any) !== (h as any) ? (_ = ((o as any).jsxs as any)("div", {
    ...j,
    children: [N, ((o as any).jsx as any)(_e, {
      leadingIcon: "trash",
      onClick: h,
      sentiment: "danger",
      size: "lg",
      style: (Se as any).action,
      type: "button",
      variant: "primary",
      children: I
    })]
  }), (e as any)[21] = h, (e as any)[22] = _) : _ = (e as any)[22];
  let z: any;
  return ((e as any)[23] as any) !== (x as any) || ((e as any)[24] as any) !== (_ as any) ? (z = ((o as any).jsxs as any)("div", {
    ...v,
    children: [x, _]
  }), (e as any)[23] = x, (e as any)[24] = _, (e as any)[25] = z) : z = (e as any)[25], z;
}
const Y: any = {
    instructions: {
      head: {
        id: "NxHkkp"
      },
      tail: {
        id: "nsWW87"
      }
    },
    memories: {
      head: {
        id: "QCEzof"
      },
      tail: {
        id: "9wcfqX"
      }
    },
    skills: {
      head: {
        id: "PCSkw2"
      },
      tail: {
        id: "gPdJ1+"
      }
    }
  },
  Ne: any = {
    context: {
      id: "M73whl"
    },
    routines: {
      id: "dmYV6f"
    },
    integrations: {
      id: "nbfdhU"
    }
  };
function Us(this: any): any {
  const n: any = ((g as any).c as any)(25),
    {
      _: e
    }: any = (ne as any)();
  let s: any;
  ((n as any)[0] as any) !== (e as any) ? (s = (e as any)(((Y as any).instructions as any).head), (n as any)[0] = e, (n as any)[1] = s) : s = (n as any)[1];
  let t: any;
  ((n as any)[2] as any) !== (e as any) ? (t = (e as any)(((Y as any).instructions as any).tail), (n as any)[2] = e, (n as any)[3] = t) : t = (n as any)[3];
  let d: any;
  ((n as any)[4] as any) !== (s as any) || ((n as any)[5] as any) !== (t as any) ? (d = {
    head: s,
    tail: t
  }, (n as any)[4] = s, (n as any)[5] = t, (n as any)[6] = d) : d = (n as any)[6];
  let a: any;
  ((n as any)[7] as any) !== (e as any) ? (a = (e as any)(((Y as any).memories as any).head), (n as any)[7] = e, (n as any)[8] = a) : a = (n as any)[8];
  let i: any;
  ((n as any)[9] as any) !== (e as any) ? (i = (e as any)(((Y as any).memories as any).tail), (n as any)[9] = e, (n as any)[10] = i) : i = (n as any)[10];
  let l: any;
  ((n as any)[11] as any) !== (a as any) || ((n as any)[12] as any) !== (i as any) ? (l = {
    head: a,
    tail: i
  }, (n as any)[11] = a, (n as any)[12] = i, (n as any)[13] = l) : l = (n as any)[13];
  let c: any;
  ((n as any)[14] as any) !== (e as any) ? (c = (e as any)(((Y as any).skills as any).head), (n as any)[14] = e, (n as any)[15] = c) : c = (n as any)[15];
  let r: any;
  ((n as any)[16] as any) !== (e as any) ? (r = (e as any)(((Y as any).skills as any).tail), (n as any)[16] = e, (n as any)[17] = r) : r = (n as any)[17];
  let u: any;
  ((n as any)[18] as any) !== (c as any) || ((n as any)[19] as any) !== (r as any) ? (u = {
    head: c,
    tail: r
  }, (n as any)[18] = c, (n as any)[19] = r, (n as any)[20] = u) : u = (n as any)[20];
  let f: any;
  return ((n as any)[21] as any) !== (d as any) || ((n as any)[22] as any) !== (l as any) || ((n as any)[23] as any) !== (u as any) ? (f = {
    instructions: d,
    memories: l,
    skills: u
  }, (n as any)[21] = d, (n as any)[22] = l, (n as any)[23] = u, (n as any)[24] = f) : f = (n as any)[24], f;
}
function Ke(this: any): any {
  const n: any = ((g as any).c as any)(10),
    {
      _: e
    }: any = (ne as any)();
  let s: any;
  ((n as any)[0] as any) !== (e as any) ? (s = (e as any)((Ne as any).context), (n as any)[0] = e, (n as any)[1] = s) : s = (n as any)[1];
  let t: any;
  ((n as any)[2] as any) !== (e as any) ? (t = (e as any)((Ne as any).routines), (n as any)[2] = e, (n as any)[3] = t) : t = (n as any)[3];
  let d: any;
  ((n as any)[4] as any) !== (e as any) ? (d = (e as any)((Ne as any).integrations), (n as any)[4] = e, (n as any)[5] = d) : d = (n as any)[5];
  let a: any;
  return ((n as any)[6] as any) !== (s as any) || ((n as any)[7] as any) !== (t as any) || ((n as any)[8] as any) !== (d as any) ? (a = {
    context: s,
    routines: t,
    integrations: d
  }, (n as any)[6] = s, (n as any)[7] = t, (n as any)[8] = d, (n as any)[9] = a) : a = (n as any)[9], a;
}
function ke(this: any, n: any): any {
  return (((n ?? []) as any).length as any) > (0 as any);
}
function We(this: any, n: any): any {
  return ((((((n as any).replace as any)(/\s+/g, " ") as any).trim as any)() as any).length as any) > (0 as any);
}
const Gs: any = {
    instructions: (n: any): any => (We as any)((n as any).description),
    memories: (n: any): any => (ke as any)((n as any).memory),
    skills: (n: any): any => (ke as any)((n as any).skills)
  },
  Qs: any = {
    context: (n: any): any => (((Ie as any)(n) as any).length as any) > (0 as any),
    routines: (n: any): any => (ke as any)((n as any).routines),
    integrations: (n: any): any => (ke as any)((n as any).plugins)
  };
function Fe(this: any, n: any, e: any): any {
  const s: any = [];
  for (const t of ((Object as any).keys as any)(n)) (ws as any)(n, t) && ((n as any)[t] as any)(e) && ((s as any).push as any)(t);
  return s;
}
function Ie(this: any, n: any): any {
  return (Fe as any)(Gs, n);
}
function Ys(this: any, n: any): any {
  return (Fe as any)(Qs, n);
}
function Hs(this: any, n: any, e: any): any {
  return (Ss as any)(((n as any).map as any)((s: any, t: any): any => (t as any) === (0 as any) ? ((e as any)[s] as any).head : ((e as any)[s] as any).tail));
}
function Js(this: any, n: any, e: any): any {
  const s: any = (n as any)[0];
  if ((s as any) == (null as any)) return "";
  const t: any = ((n as any).length as any) - (1 as any);
  return (t as any) === (0 as any) ? s : (e as any)(s, t);
}
function en(this: any, n: any): any {
  return ((((n as any).routines ?? []) as any).map as any)((e: any): any => (e as any).name);
}
function sn(this: any, n: any): any {
  return ((((n as any).plugins ?? []) as any).map as any)((e: any): any => (e as any).name);
}
function ze(this: any, n: any): any {
  (ze as any).d = 270;
  const e: any = ((g as any).c as any)(21),
    {
      mode: s
    }: any = n;
  let t: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = {
    className: "sand-wz0xwf sand-6s0dn4 sand-1o2pa38"
  }, (e as any)[0] = t) : t = (e as any)[0];
  let d: any;
  ((e as any)[1] as any) !== (s as any) ? (d = ({
    0: {
      className: "sand-1agbcgv sand-crlgei sand-3nfvp2 sand-6s0dn4 sand-17d4w8g"
    },
    1: {
      className: "sand-1agbcgv sand-crlgei sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-lshs6z"
    }
  } as any)[(((s as any) !== ("publish" as any)) as any) << (0 as any)], (e as any)[1] = s, (e as any)[2] = d) : d = (e as any)[2];
  let a: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((o as any).jsx as any)(S, {
    id: "EEYbdt"
  }), (e as any)[3] = a) : a = (e as any)[3];
  let i: any;
  ((e as any)[4] as any) !== (d as any) ? (i = ((o as any).jsx as any)("span", {
    ...d,
    children: a
  }), (e as any)[4] = d, (e as any)[5] = i) : i = (e as any)[5];
  let l: any;
  ((e as any)[6] as any) !== (s as any) ? (l = ({
    0: {
      className: "sand-1agbcgv sand-crlgei sand-3nfvp2 sand-6s0dn4 sand-17d4w8g"
    },
    1: {
      className: "sand-1agbcgv sand-crlgei sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-lshs6z"
    }
  } as any)[(((s as any) !== ("publishing" as any)) as any) << (0 as any)], (e as any)[6] = s, (e as any)[7] = l) : l = (e as any)[7];
  let c: any, r: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = ((o as any).jsx as any)(Ce, {
    borderWidth: 1.5,
    inheritColor: !0,
    size: 14
  }), r = ((o as any).jsx as any)(S, {
    id: "ABCjd9"
  }), (e as any)[8] = c, (e as any)[9] = r) : (c = (e as any)[8], r = (e as any)[9]);
  let u: any;
  ((e as any)[10] as any) !== (l as any) ? (u = ((o as any).jsxs as any)("span", {
    ...l,
    children: [c, r]
  }), (e as any)[10] = l, (e as any)[11] = u) : u = (e as any)[11];
  let f: any;
  ((e as any)[12] as any) !== (s as any) ? (f = ({
    0: {
      className: "sand-1agbcgv sand-crlgei sand-3nfvp2 sand-6s0dn4 sand-17d4w8g"
    },
    1: {
      className: "sand-1agbcgv sand-crlgei sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-lshs6z"
    }
  } as any)[(((s as any) !== ("copy-link" as any)) as any) << (0 as any)], (e as any)[12] = s, (e as any)[13] = f) : f = (e as any)[13];
  let m: any;
  ((e as any)[14] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = ((o as any).jsx as any)(S, {
    id: "y1eoq1"
  }), (e as any)[14] = m) : m = (e as any)[14];
  let k: any;
  ((e as any)[15] as any) !== (f as any) ? (k = ((o as any).jsx as any)("span", {
    ...f,
    children: m
  }), (e as any)[15] = f, (e as any)[16] = k) : k = (e as any)[16];
  let p: any;
  return ((e as any)[17] as any) !== (k as any) || ((e as any)[18] as any) !== (i as any) || ((e as any)[19] as any) !== (u as any) ? (p = ((o as any).jsxs as any)("span", {
    ...t,
    children: [i, u, k]
  }), (e as any)[17] = k, (e as any)[18] = i, (e as any)[19] = u, (e as any)[20] = p) : p = (e as any)[20], p;
}
const nn: number = 80,
  tn: number = 36,
  w: any = {
    surface: {
      kZKoxP: "sand-1tihs1c",
      $$css: !0
    },
    body: {
      k1xSpc: "sand-78zum5",
      kXwgrk: "sand-dt5ytf",
      kAzted: "sand-2lwn1j",
      kzQI83: "sand-1iyjqo2",
      kLKAdn: "sand-exx8yu",
      kwRFfy: "sand-yri2b",
      kGO01o: "sand-18d9i69",
      kZCmMZ: "sand-1c1uobl",
      kXHlph: "sand-6ikm8r",
      kORKVm: "sand-10wlt62",
      $$css: !0
    },
    mark: {
      k3nNDw: "sand-tj8gnn",
      k3aq6I: "sand-vvkyix",
      k1ekBW: "sand-11xpdln sand-4wkmsb",
      kIyJzY: "sand-q8ykup sand-12w9bfk",
      kAMwcw: "sand-1554a8d",
      $$css: !0
    },
    markCompact: {
      k3aq6I: "sand-1ov92gx",
      $$css: !0
    },
    title: {
      k9WMMc: "sand-2b8uid",
      kMwMTN: "sand-tyxrsu",
      $$css: !0
    },
    mainViewScroll: {
      k7Eaqz: "sand-euugli",
      kAzted: "sand-2lwn1j",
      kzQI83: "sand-1iyjqo2",
      $$css: !0
    },
    creator: {
      kMwMTN: "sand-1o0liin",
      k9WMMc: "sand-2b8uid",
      $$css: !0
    },
    description: {
      keoZOQ: "sand-dj266r",
      k71WvV: "sand-14z9mp",
      k1K539: "sand-at24cr",
      keTefX: "sand-1lziwak",
      k9WMMc: "sand-2b8uid",
      kMwMTN: "sand-1o0liin",
      k1xSpc: "sand-104kibb",
      kJFfOR: "sand-1gzmk7r",
      kgKLqz: "sand-1ua5tub",
      kXHlph: "sand-6ikm8r",
      kORKVm: "sand-10wlt62",
      kTgw9: "sand-13faqbe",
      $$css: !0
    },
    sectionLabel: {
      kB7OPa: "sand-9f619",
      k7Eaqz: "sand-euugli",
      kZKoxP: "sand-1gnnpzl",
      kLKAdn: "sand-1y1aw1k",
      kwRFfy: "sand-f159sx",
      kGO01o: "sand-10b6aqq",
      kZCmMZ: "sand-mzvs34",
      kMwMTN: "sand-1o0liin",
      $$css: !0
    },
    detailsRow: {
      kAzted: "sand-3sc9yq",
      kZKoxP: "sand-t7dq6l",
      kLKAdn: "sand-889kno",
      kwRFfy: "sand-2vl965",
      kGO01o: "sand-1a8lsjc",
      kZCmMZ: "sand-e2zdcy",
      $$css: !0
    },
    footer: {
      kLKAdn: "sand-889kno",
      kGO01o: "sand-sag5q8",
      kEafiO: "sand-1hc762m",
      kPef9Z: "sand-13fuv20",
      kLZC3w: "sand-t8lcch",
      $$css: !0
    },
    shareFooter: {
      k1xSpc: "sand-78zum5",
      kXwgrk: "sand-dt5ytf",
      kGNEyG: "sand-1qjc9v5",
      kjj79g: "sand-1nhvcw1",
      kOIVth: "sand-167g77z",
      kLKAdn: "sand-889kno",
      kGO01o: "sand-sag5q8",
      kEafiO: "sand-1hc762m",
      kPef9Z: "sand-13fuv20",
      kLZC3w: "sand-t8lcch",
      $$css: !0
    },
    subviewTitleLabel: {
      kg5iWk: "sand-lyipyv",
      k9WMMc: "sand-2b8uid",
      khDVqt: "sand-uxw1ft",
      $$css: !0
    },
    textCardBody: {
      keoZOQ: "sand-dj266r",
      k71WvV: "sand-14z9mp",
      k1K539: "sand-at24cr",
      keTefX: "sand-1lziwak",
      k7Eaqz: "sand-euugli",
      khDVqt: "sand-126k92a",
      kHjlTd: "sand-1mzt3pk",
      kMwMTN: "sand-tyxrsu",
      $$css: !0
    }
  };
function Ze(this: any, n: any, e: any): any {
  return `${e}:${n}`;
}
function Xe(this: any, n: any, e: any): any {
  return ((((n as any).memory ?? []) as any).find as any)((s: any, t: any): any => ((Ze as any)((s as any).content, t) as any) === (e as any));
}
function Ue(this: any, n: any, e: any): any {
  return ((((n as any).skills ?? []) as any).find as any)((s: any): any => ((s as any).name as any) === (e as any));
}
function Ge(this: any, n: any, e: any): any {
  return ((((n as any).routines ?? []) as any).find as any)((s: any): any => ((s as any).slug as any) === (e as any));
}
function P(this: any, n: any): any {
  (P as any).d = 250;
  const e: any = ((g as any).c as any)(9),
    {
      padded: s,
      children: t
    }: any = n,
    d: any = (s as any) === (void 0 as any) ? !1 : s;
  let a: any, i: any;
  if (((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (d as any)) {
    const c: any = (((M as any).Children as any).toArray as any)(t);
    ((e as any)[4] as any) !== (d as any) ? (a = ({
      0: {
        className: "sand-78zum5 sand-dt5ytf sand-euugli sand-hojbe8 sand-1b8i4yy sand-b3r6kr"
      },
      1: {
        className: "sand-78zum5 sand-dt5ytf sand-euugli sand-hojbe8 sand-1b8i4yy sand-b3r6kr sand-1iorvi4 sand-11lfxj5 sand-jkvuk6 sand-135b78x"
      }
    } as any)[(!!d as any) << (0 as any)], (e as any)[4] = d, (e as any)[5] = a) : a = (e as any)[5], i = ((c as any).map as any)(an), (e as any)[0] = t, (e as any)[1] = d, (e as any)[2] = a, (e as any)[3] = i;
  } else a = (e as any)[2], i = (e as any)[3];
  let l: any;
  return ((e as any)[6] as any) !== (a as any) || ((e as any)[7] as any) !== (i as any) ? (l = ((o as any).jsx as any)("div", {
    ...a,
    children: i
  }), (e as any)[6] = a, (e as any)[7] = i, (e as any)[8] = l) : l = (e as any)[8], l;
}
function an(this: any, n: any, e: any): any {
  return ((o as any).jsxs as any)((M as any).Fragment, {
    children: [(e as any) > (0 as any) ? ((o as any).jsx as any)("div", {
      className: "sand-f159sx sand-mzvs34",
      children: ((o as any).jsx as any)($s, {})
    }) : null, n]
  }, e);
}
function J(this: any, n: any): any {
  (J as any).d = 251;
  const e: any = ((g as any).c as any)(16),
    {
      label: s,
      description: t,
      leading: d,
      onOpen: a,
      paneKey: i
    }: any = n;
  let l: any;
  ((e as any)[0] as any) !== (t as any) ? (l = (t as any) == (null as any) ? {} : {
    description: t
  }, (e as any)[0] = t, (e as any)[1] = l) : l = (e as any)[1];
  let c: any;
  ((e as any)[2] as any) !== (d as any) ? (c = (d as any) == (null as any) ? {} : {
    leading: d
  }, (e as any)[2] = d, (e as any)[3] = c) : c = (e as any)[3];
  let r: any;
  ((e as any)[4] as any) !== (l as any) || ((e as any)[5] as any) !== (c as any) ? (r = {
    ...l,
    ...c
  }, (e as any)[4] = l, (e as any)[5] = c, (e as any)[6] = r) : r = (e as any)[6];
  const u: any = r;
  if ((a as any) == (null as any)) {
    let k: any;
    return ((e as any)[7] as any) !== (s as any) || ((e as any)[8] as any) !== (u as any) ? (k = ((o as any).jsx as any)(Es, {
      label: s,
      size: "lg",
      style: (w as any).detailsRow,
      ...u
    }), (e as any)[7] = s, (e as any)[8] = u, (e as any)[9] = k) : k = (e as any)[9], k;
  }
  let f: any;
  ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = ((o as any).jsx as any)(Ks, {
    "aria-hidden": !0,
    name: "chevron-right",
    size: "xs"
  }), (e as any)[10] = f) : f = (e as any)[10];
  let m: any;
  return ((e as any)[11] as any) !== (s as any) || ((e as any)[12] as any) !== (a as any) || ((e as any)[13] as any) !== (u as any) || ((e as any)[14] as any) !== (i as any) ? (m = ((o as any).jsx as any)(Ds, {
    "data-details-pane": i,
    label: s,
    size: "lg",
    style: (w as any).detailsRow,
    onClick: a,
    trailing: f,
    ...u
  }), (e as any)[11] = s, (e as any)[12] = a, (e as any)[13] = u, (e as any)[14] = i, (e as any)[15] = m) : m = (e as any)[15], m;
}
function $e(this: any, n: any): any {
  ($e as any).d = 266;
  const e: any = ((g as any).c as any)(8),
    {
      value: s,
      tall: t
    }: any = n,
    d: any = (t as any) === (void 0 as any) ? !1 : t;
  let a: any;
  ((e as any)[0] as any) !== (d as any) ? (a = ({
    0: {
      className: "sand-9f619 sand-h8yej3 sand-889kno sand-2vl965 sand-1a8lsjc sand-e2zdcy sand-6ikm8r sand-1odjw0f"
    },
    1: {
      className: "sand-9f619 sand-h8yej3 sand-889kno sand-2vl965 sand-1a8lsjc sand-e2zdcy sand-6ikm8r sand-1odjw0f sand-7v6ubd"
    }
  } as any)[(!!d as any) << (0 as any)], (e as any)[0] = d, (e as any)[1] = a) : a = (e as any)[1];
  let i: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = (Te as any)((H as any).body1, (w as any).textCardBody), (e as any)[2] = i) : i = (e as any)[2];
  let l: any;
  ((e as any)[3] as any) !== (s as any) ? (l = ((o as any).jsx as any)("p", {
    ...i,
    children: s
  }), (e as any)[3] = s, (e as any)[4] = l) : l = (e as any)[4];
  let c: any;
  return ((e as any)[5] as any) !== (a as any) || ((e as any)[6] as any) !== (l as any) ? (c = ((o as any).jsx as any)(P, {
    padded: !0,
    children: ((o as any).jsx as any)("div", {
      ...a,
      children: l
    })
  }), (e as any)[5] = a, (e as any)[6] = l, (e as any)[7] = c) : c = (e as any)[7], c;
}
function Qe(this: any, n: any): any {
  (Qe as any).d = 262;
  const e: any = ((g as any).c as any)(8),
    {
      name: s,
      pluginId: t,
      resolve: d
    }: any = n;
  let a: any;
  ((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (t as any) || ((e as any)[2] as any) !== (d as any) ? (a = (d as any)(s) ?? (d as any)(t), (e as any)[0] = s, (e as any)[1] = t, (e as any)[2] = d, (e as any)[3] = a) : a = (e as any)[3];
  const i: any = a,
    l: any = i?.iconId,
    c: any = i?.iconUrl;
  let r: any;
  return ((e as any)[4] as any) !== (s as any) || ((e as any)[5] as any) !== (l as any) || ((e as any)[6] as any) !== (c as any) ? (r = ((o as any).jsx as any)(Ws, {
    iconId: l,
    iconUrl: c,
    name: s,
    size: tn
  }), (e as any)[4] = s, (e as any)[5] = l, (e as any)[6] = c, (e as any)[7] = r) : r = (e as any)[7], r;
}
function ln(this: any, n: any): any {
  return (Js as any)(n, (e: any, s: any): any => ((ps as any)._ as any)({
    id: "ysihpT",
    values: {
      restCount: s,
      lead: e
    }
  }));
}
function dn(this: any, n: any, e: any, s: any): any {
  return (n as any) === ("context" as any) ? (Hs as any)((Ie as any)(e), s) : (n as any) === ("routines" as any) ? (ln as any)((en as any)(e)) : (Is as any)((sn as any)(e));
}
function Ye(this: any, n: any): any {
  return ((n as any).kind as any) === ("logged-in" as any) && (n as any).displayName?.trim() || void 0;
}
function He(this: any, n: any): any {
  const e: any = (n as any).creatorName?.trim() || void 0;
  if (((n as any).sourceAgentId as any) != (null as any) && ((n as any).signedInName as any) != (null as any) && ((e as any) == (null as any) || (e as any) === ((n as any).signedInName as any))) return ((n as any).updatedOn as any) == (null as any) ? void 0 : {
    kind: "updated",
    updatedOn: (n as any).updatedOn
  };
  if ((e as any) != (null as any)) return {
    kind: "by",
    name: e,
    updatedOn: (n as any).updatedOn
  };
}
function pe(this: any, n: any): any {
  (pe as any).d = 256;
  const e: any = ((g as any).c as any)(2),
    {
      updatedOn: s
    }: any = n;
  let t: any;
  return ((e as any)[0] as any) !== (s as any) ? (t = ((o as any).jsx as any)(S, {
    id: "FJvi2S",
    values: {
      updatedOn: s
    }
  }), (e as any)[0] = s, (e as any)[1] = t) : t = (e as any)[1], t;
}
function Je(this: any, n: any): any {
  (Je as any).d = 265;
  const e: any = ((g as any).c as any)(11),
    {
      lead: s
    }: any = n;
  if (((s as any).kind as any) === ("updated" as any)) {
    let c: any;
    return ((e as any)[0] as any) !== ((s as any).updatedOn as any) ? (c = ((o as any).jsx as any)(pe, {
      updatedOn: (s as any).updatedOn
    }), (e as any)[0] = (s as any).updatedOn, (e as any)[1] = c) : c = (e as any)[1], c;
  }
  let t: any;
  ((e as any)[2] as any) !== ((s as any).name as any) ? (t = {
    creatorName: (s as any).name
  }, (e as any)[2] = (s as any).name, (e as any)[3] = t) : t = (e as any)[3];
  const d: any = t;
  let a: any;
  ((e as any)[4] as any) !== ((d as any).creatorName as any) ? (a = ((o as any).jsx as any)(S, {
    id: "aavdrC",
    values: {
      0: (d as any).creatorName
    }
  }), (e as any)[4] = (d as any).creatorName, (e as any)[5] = a) : a = (e as any)[5];
  let i: any;
  ((e as any)[6] as any) !== ((s as any).updatedOn as any) ? (i = ((s as any).updatedOn as any) == (null as any) ? null : ((o as any).jsxs as any)((o as any).Fragment, {
    children: [((o as any).jsx as any)("span", {
      "aria-hidden": !0,
      children: " · "
    }), ((o as any).jsx as any)(pe, {
      updatedOn: (s as any).updatedOn
    })]
  }), (e as any)[6] = (s as any).updatedOn, (e as any)[7] = i) : i = (e as any)[7];
  let l: any;
  return ((e as any)[8] as any) !== (a as any) || ((e as any)[9] as any) !== (i as any) ? (l = ((o as any).jsxs as any)((o as any).Fragment, {
    children: [a, i]
  }), (e as any)[8] = a, (e as any)[9] = i, (e as any)[10] = l) : l = (e as any)[10], l;
}
function es(this: any, n: any): any {
  (es as any).d = 258;
  const e: any = ((g as any).c as any)(18),
    {
      template: s,
      description: t
    }: any = n,
    {
      status: d
    }: any = (Le as any)();
  let a: any;
  if (((e as any)[0] as any) !== (d as any) || ((e as any)[1] as any) !== ((s as any).createdAtMs as any) || ((e as any)[2] as any) !== ((s as any).creatorName as any) || ((e as any)[3] as any) !== ((s as any).sourceAgentId as any) || ((e as any)[4] as any) !== ((s as any).updatedAtMs as any)) {
    const k: any = (Re as any)((s as any).updatedAtMs ?? (s as any).createdAtMs, (Be as any)());
    a = (He as any)({
      creatorName: (s as any).creatorName,
      sourceAgentId: (s as any).sourceAgentId,
      signedInName: (Ye as any)(d),
      updatedOn: k
    }), (e as any)[0] = d, (e as any)[1] = (s as any).createdAtMs, (e as any)[2] = (s as any).creatorName, (e as any)[3] = (s as any).sourceAgentId, (e as any)[4] = (s as any).updatedAtMs, (e as any)[5] = a;
  } else a = (e as any)[5];
  const i: any = a;
  let l: any;
  ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-195vfkc sand-1y1aw1k sand-wib8y2"
  }, (e as any)[6] = l) : l = (e as any)[6];
  let c: any;
  ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = [(H as any).heading3, (Ve as any).medium, (w as any).title], (e as any)[7] = c) : c = (e as any)[7];
  let r: any;
  ((e as any)[8] as any) !== ((s as any).name as any) ? (r = ((o as any).jsx as any)((T as any).Title, {
    style: c,
    children: (s as any).name
  }), (e as any)[8] = (s as any).name, (e as any)[9] = r) : r = (e as any)[9];
  let u: any;
  ((e as any)[10] as any) !== (i as any) ? (u = (i as any) == (null as any) ? null : ((o as any).jsx as any)("div", {
    ...(Te as any)((H as any).body2, (w as any).creator),
    children: ((o as any).jsx as any)(Je, {
      lead: i
    })
  }), (e as any)[10] = i, (e as any)[11] = u) : u = (e as any)[11];
  let f: any;
  ((e as any)[12] as any) !== (t as any) ? (f = ((t as any).length as any) > (0 as any) ? ((o as any).jsx as any)("div", {
    className: "sand-2lah0s sand-1iorvi4",
    children: ((o as any).jsx as any)((T as any).Description, {
      style: [(H as any).body1, (w as any).description],
      children: t
    })
  }) : null, (e as any)[12] = t, (e as any)[13] = f) : f = (e as any)[13];
  let m: any;
  return ((e as any)[14] as any) !== (r as any) || ((e as any)[15] as any) !== (u as any) || ((e as any)[16] as any) !== (f as any) ? (m = ((o as any).jsxs as any)("div", {
    ...l,
    children: [r, u, f]
  }), (e as any)[14] = r, (e as any)[15] = u, (e as any)[16] = f, (e as any)[17] = m) : m = (e as any)[17], m;
}
function ss(this: any, n: any): any {
  (ss as any).d = 257;
  const e: any = ((g as any).c as any)(17),
    {
      onOpen: s,
      template: t
    }: any = n,
    d: any = (Us as any)(),
    a: any = (Ke as any)();
  let i: any, l: any, c: any, r: any, u: any;
  if (((e as any)[0] as any) !== (d as any) || ((e as any)[1] as any) !== (s as any) || ((e as any)[2] as any) !== (t as any) || ((e as any)[3] as any) !== (a as any)) {
    u = ((Symbol as any).for as any)("react.early_return_sentinel");
    e: {
      const k: any = (Ys as any)(t);
      if (((k as any).length as any) === (0 as any)) {
        u = null;
        break e;
      }
      ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = {
        className: "sand-yamay9"
      }, (e as any)[9] = r) : r = (e as any)[9], i = P, l = !0, c = ((k as any).map as any)((p: any): any => ((o as any).jsx as any)(J, {
        description: (dn as any)(p, t, d),
        label: (a as any)[p],
        onOpen: (): any => (s as any)(p),
        paneKey: p
      }, p));
    }
    (e as any)[0] = d, (e as any)[1] = s, (e as any)[2] = t, (e as any)[3] = a, (e as any)[4] = i, (e as any)[5] = l, (e as any)[6] = c, (e as any)[7] = r, (e as any)[8] = u;
  } else i = (e as any)[4], l = (e as any)[5], c = (e as any)[6], r = (e as any)[7], u = (e as any)[8];
  if ((u as any) !== (((Symbol as any).for as any)("react.early_return_sentinel") as any)) return u;
  let f: any;
  ((e as any)[10] as any) !== (i as any) || ((e as any)[11] as any) !== (l as any) || ((e as any)[12] as any) !== (c as any) ? (f = ((o as any).jsx as any)(i, {
    padded: l,
    children: c
  }), (e as any)[10] = i, (e as any)[11] = l, (e as any)[12] = c, (e as any)[13] = f) : f = (e as any)[13];
  let m: any;
  return ((e as any)[14] as any) !== (r as any) || ((e as any)[15] as any) !== (f as any) ? (m = ((o as any).jsx as any)("div", {
    ...r,
    children: f
  }), (e as any)[14] = r, (e as any)[15] = f, (e as any)[16] = m) : m = (e as any)[16], m;
}
function ee(this: any, n: any): any {
  (ee as any).d = 263;
  const e: any = ((g as any).c as any)(7),
    {
      label: s,
      children: t
    }: any = n;
  let d: any, a: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = {
    className: "sand-78zum5 sand-dt5ytf"
  }, a = (Te as any)((H as any).label, (w as any).sectionLabel), (e as any)[0] = d, (e as any)[1] = a) : (d = (e as any)[0], a = (e as any)[1]);
  let i: any;
  ((e as any)[2] as any) !== (s as any) ? (i = ((o as any).jsx as any)("div", {
    ...a,
    children: s
  }), (e as any)[2] = s, (e as any)[3] = i) : i = (e as any)[3];
  let l: any;
  return ((e as any)[4] as any) !== (t as any) || ((e as any)[5] as any) !== (i as any) ? (l = ((o as any).jsxs as any)("div", {
    ...d,
    children: [i, t]
  }), (e as any)[4] = t, (e as any)[5] = i, (e as any)[6] = l) : l = (e as any)[6], l;
}
function ns(this: any, n: any): any {
  (ns as any).d = 249;
  const e: any = ((g as any).c as any)(6),
    {
      onOpenMemory: s,
      onOpenSkill: t,
      template: d
    }: any = n;
  let a: any;
  ((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (t as any) || ((e as any)[2] as any) !== (d as any) ? (a = (((Ie as any)(d) as any).map as any)((c: any): any => ((o as any).jsx as any)(ts, {
    onOpenMemory: s,
    onOpenSkill: t,
    part: c,
    template: d
  }, c)), (e as any)[0] = s, (e as any)[1] = t, (e as any)[2] = d, (e as any)[3] = a) : a = (e as any)[3];
  let i: any;
  return ((e as any)[4] as any) !== (a as any) ? (i = ((o as any).jsx as any)((o as any).Fragment, {
    children: a
  }), (e as any)[4] = a, (e as any)[5] = i) : i = (e as any)[5], i;
}
function ts(this: any, n: any): any {
  (ts as any).d = 248;
  const e: any = ((g as any).c as any)(23),
    {
      part: s,
      template: t,
      onOpenMemory: d,
      onOpenSkill: a
    }: any = n;
  if ((s as any) === ("instructions" as any)) {
    const f: any = (((((t as any).description as any).replace as any)(/\s+/g, " ") as any).trim as any)();
    if (!(We as any)(f)) return null;
    let m: any;
    ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = ((o as any).jsx as any)(S, {
      id: "NxHkkp"
    }), (e as any)[0] = m) : m = (e as any)[0];
    let k: any;
    return ((e as any)[1] as any) !== ((t as any).description as any) ? (k = ((o as any).jsx as any)(ee, {
      label: m,
      children: ((o as any).jsx as any)($e, {
        tall: !0,
        value: (t as any).description
      })
    }), (e as any)[1] = (t as any).description, (e as any)[2] = k) : k = (e as any)[2], k;
  }
  if ((s as any) === ("memories" as any)) {
    let f: any;
    ((e as any)[3] as any) !== ((t as any).memory as any) ? (f = (t as any).memory ?? [], (e as any)[3] = (t as any).memory, (e as any)[4] = f) : f = (e as any)[4];
    const m: any = f;
    if (((m as any).length as any) === (0 as any)) return null;
    let k: any;
    ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (k = ((o as any).jsx as any)(S, {
      id: "QCEzof"
    }), (e as any)[5] = k) : k = (e as any)[5];
    let p: any;
    if (((e as any)[6] as any) !== (m as any) || ((e as any)[7] as any) !== (d as any)) {
      let h: any;
      ((e as any)[9] as any) !== (d as any) ? (h = (v: any, x: any): any => {
        const j: any = (Ze as any)((v as any).content, x);
        return ((o as any).jsx as any)(J, {
          label: (v as any).content,
          onOpen: (): any => (d as any)(j),
          paneKey: (se as any)({
            kind: "memory",
            key: j
          })
        }, j);
      }, (e as any)[9] = d, (e as any)[10] = h) : h = (e as any)[10], p = ((m as any).map as any)(h), (e as any)[6] = m, (e as any)[7] = d, (e as any)[8] = p;
    } else p = (e as any)[8];
    let y: any;
    return ((e as any)[11] as any) !== (p as any) ? (y = ((o as any).jsx as any)(ee, {
      label: k,
      children: ((o as any).jsx as any)(P, {
        padded: !0,
        children: p
      })
    }), (e as any)[11] = p, (e as any)[12] = y) : y = (e as any)[12], y;
  }
  let i: any;
  ((e as any)[13] as any) !== ((t as any).skills as any) ? (i = (t as any).skills ?? [], (e as any)[13] = (t as any).skills, (e as any)[14] = i) : i = (e as any)[14];
  const l: any = i;
  if (((l as any).length as any) === (0 as any)) return null;
  let c: any;
  ((e as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = ((o as any).jsx as any)(S, {
    id: "PCSkw2"
  }), (e as any)[15] = c) : c = (e as any)[15];
  let r: any;
  if (((e as any)[16] as any) !== (a as any) || ((e as any)[17] as any) !== (l as any)) {
    let f: any;
    ((e as any)[19] as any) !== (a as any) ? (f = (m: any): any => ((o as any).jsx as any)(J, {
      label: (m as any).name,
      onOpen: (): any => (a as any)((m as any).name),
      paneKey: (se as any)({
        kind: "skill",
        key: (m as any).name
      })
    }, (m as any).name), (e as any)[19] = a, (e as any)[20] = f) : f = (e as any)[20], r = ((l as any).map as any)(f), (e as any)[16] = a, (e as any)[17] = l, (e as any)[18] = r;
  } else r = (e as any)[18];
  let u: any;
  return ((e as any)[21] as any) !== (r as any) ? (u = ((o as any).jsx as any)(ee, {
    label: c,
    children: ((o as any).jsx as any)(P, {
      padded: !0,
      children: r
    })
  }), (e as any)[21] = r, (e as any)[22] = u) : u = (e as any)[22], u;
}
function as(this: any, n: any): any {
  (as as any).d = 260;
  const e: any = ((g as any).c as any)(9),
    {
      items: s,
      onOpen: t,
      rowPaneKey: d
    }: any = n;
  let a: any;
  if (((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (t as any) || ((e as any)[2] as any) !== (d as any)) {
    let l: any;
    ((e as any)[4] as any) !== (t as any) || ((e as any)[5] as any) !== (d as any) ? (l = (c: any): any => ((o as any).jsx as any)(J, {
      label: (c as any).title,
      ...(((c as any).description as any) == (null as any) ? {} : {
        description: (c as any).description
      }),
      ...((t as any) == (null as any) ? {} : {
        onOpen: (): any => (t as any)((c as any).key)
      }),
      ...((d as any) == (null as any) ? {} : {
        paneKey: (d as any)((c as any).key)
      })
    }, (c as any).key), (e as any)[4] = t, (e as any)[5] = d, (e as any)[6] = l) : l = (e as any)[6], a = ((s as any).map as any)(l), (e as any)[0] = s, (e as any)[1] = t, (e as any)[2] = d, (e as any)[3] = a;
  } else a = (e as any)[3];
  let i: any;
  return ((e as any)[7] as any) !== (a as any) ? (i = ((o as any).jsx as any)(P, {
    padded: !0,
    children: a
  }), (e as any)[7] = a, (e as any)[8] = i) : i = (e as any)[8], i;
}
function ls(this: any, n: any): any {
  (ls as any).d = 253;
  const e: any = ((g as any).c as any)(7),
    {
      items: s,
      resolve: t
    }: any = n;
  let d: any;
  if (((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (t as any)) {
    let i: any;
    ((e as any)[3] as any) !== (t as any) ? (i = (l: any): any => ((o as any).jsx as any)(J, {
      label: (l as any).title,
      leading: ((o as any).jsx as any)(Qe, {
        name: (l as any).title,
        pluginId: (l as any).key,
        resolve: t
      }),
      ...(((l as any).description as any) == (null as any) ? {} : {
        description: (l as any).description
      })
    }, (l as any).key), (e as any)[3] = t, (e as any)[4] = i) : i = (e as any)[4], d = ((s as any).map as any)(i), (e as any)[0] = s, (e as any)[1] = t, (e as any)[2] = d;
  } else d = (e as any)[2];
  let a: any;
  return ((e as any)[5] as any) !== (d as any) ? (a = ((o as any).jsx as any)(P, {
    padded: !0,
    children: d
  }), (e as any)[5] = d, (e as any)[6] = a) : a = (e as any)[6], a;
}
function he(this: any, n: any): any {
  (he as any).d = 252;
  const e: any = ((g as any).c as any)(5),
    {
      label: s,
      value: t
    }: any = n;
  let d: any;
  ((e as any)[0] as any) !== (t as any) ? (d = ((o as any).jsx as any)($e, {
    value: t
  }), (e as any)[0] = t, (e as any)[1] = d) : d = (e as any)[1];
  let a: any;
  return ((e as any)[2] as any) !== (s as any) || ((e as any)[3] as any) !== (d as any) ? (a = ((o as any).jsx as any)(ee, {
    label: s,
    children: d
  }), (e as any)[2] = s, (e as any)[3] = d, (e as any)[4] = a) : a = (e as any)[4], a;
}
function Oe(this: any, n: any): any {
  (Oe as any).d = 254;
  const e: any = ((g as any).c as any)(8),
    {
      description: s,
      content: t
    }: any = n;
  let d: any;
  ((e as any)[0] as any) !== (s as any) ? (d = (s as any) != (null as any) && ((s as any).length as any) > (0 as any) ? ((o as any).jsx as any)(he, {
    label: ((o as any).jsx as any)(S, {
      id: "Nu4oKW"
    }),
    value: s
  }) : null, (e as any)[0] = s, (e as any)[1] = d) : d = (e as any)[1];
  let a: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((o as any).jsx as any)(S, {
    id: "4b3oEV"
  }), (e as any)[2] = a) : a = (e as any)[2];
  let i: any;
  ((e as any)[3] as any) !== (t as any) ? (i = ((o as any).jsx as any)(he, {
    label: a,
    value: t
  }), (e as any)[3] = t, (e as any)[4] = i) : i = (e as any)[4];
  let l: any;
  return ((e as any)[5] as any) !== (d as any) || ((e as any)[6] as any) !== (i as any) ? (l = ((o as any).jsxs as any)((o as any).Fragment, {
    children: [d, i]
  }), (e as any)[5] = d, (e as any)[6] = i, (e as any)[7] = l) : l = (e as any)[7], l;
}
function is(this: any, n: any): any {
  (is as any).d = 255;
  const e: any = ((g as any).c as any)(15),
    {
      pane: s,
      template: t
    }: any = n;
  if (((s as any).kind as any) === ("memory" as any)) {
    let l: any;
    ((e as any)[0] as any) !== ((s as any).key as any) || ((e as any)[1] as any) !== (t as any) ? (l = (Xe as any)(t, (s as any).key), (e as any)[0] = (s as any).key, (e as any)[1] = t, (e as any)[2] = l) : l = (e as any)[2];
    const c: any = l;
    let r: any;
    return ((e as any)[3] as any) !== (c as any) ? (r = (c as any) == (null as any) ? null : ((o as any).jsx as any)(he, {
      label: ((o as any).jsx as any)(S, {
        id: "4b3oEV"
      }),
      value: (c as any).content
    }), (e as any)[3] = c, (e as any)[4] = r) : r = (e as any)[4], r;
  }
  if (((s as any).kind as any) === ("skill" as any)) {
    let l: any;
    ((e as any)[5] as any) !== ((s as any).key as any) || ((e as any)[6] as any) !== (t as any) ? (l = (Ue as any)(t, (s as any).key), (e as any)[5] = (s as any).key, (e as any)[6] = t, (e as any)[7] = l) : l = (e as any)[7];
    const c: any = l;
    let r: any;
    return ((e as any)[8] as any) !== (c as any) ? (r = (c as any) == (null as any) ? null : ((o as any).jsx as any)(Oe, {
      content: (c as any).content,
      description: (c as any).description
    }), (e as any)[8] = c, (e as any)[9] = r) : r = (e as any)[9], r;
  }
  let d: any;
  ((e as any)[10] as any) !== ((s as any).key as any) || ((e as any)[11] as any) !== (t as any) ? (d = (Ge as any)(t, (s as any).key), (e as any)[10] = (s as any).key, (e as any)[11] = t, (e as any)[12] = d) : d = (e as any)[12];
  const a: any = d;
  let i: any;
  return ((e as any)[13] as any) !== (a as any) ? (i = (a as any) == (null as any) ? null : ((o as any).jsx as any)(Oe, {
    content: (a as any).content,
    description: (a as any).description
  }), (e as any)[13] = a, (e as any)[14] = i) : i = (e as any)[14], i;
}
function ds(this: any, n: any): any {
  (ds as any).d = 264;
  const e: any = ((g as any).c as any)(24),
    {
      pane: s,
      template: t,
      resolve: d,
      onDeleted: a,
      onOpenMemory: i,
      onOpenSkill: l,
      onOpenAutomation: c
    }: any = n;
  if (((s as any).kind as any) === ("settings" as any)) {
    let u: any;
    return ((e as any)[0] as any) !== (a as any) || ((e as any)[1] as any) !== (t as any) ? (u = ((o as any).jsx as any)(De, {
      onDeleted: a,
      template: t
    }), (e as any)[0] = a, (e as any)[1] = t, (e as any)[2] = u) : u = (e as any)[2], u;
  }
  if (((s as any).kind as any) === ("context" as any)) {
    let u: any;
    return ((e as any)[3] as any) !== (i as any) || ((e as any)[4] as any) !== (l as any) || ((e as any)[5] as any) !== (t as any) ? (u = ((o as any).jsx as any)(ns, {
      onOpenMemory: i,
      onOpenSkill: l,
      template: t
    }), (e as any)[3] = i, (e as any)[4] = l, (e as any)[5] = t, (e as any)[6] = u) : u = (e as any)[6], u;
  }
  if (((s as any).kind as any) === ("routines" as any)) {
    let u: any;
    ((e as any)[7] as any) !== ((t as any).routines as any) ? (u = (t as any).routines ?? [], (e as any)[7] = (t as any).routines, (e as any)[8] = u) : u = (e as any)[8];
    let f: any;
    ((e as any)[9] as any) !== (u as any) ? (f = ((u as any).map as any)(cn), (e as any)[9] = u, (e as any)[10] = f) : f = (e as any)[10];
    let m: any;
    return ((e as any)[11] as any) !== (c as any) || ((e as any)[12] as any) !== (f as any) ? (m = ((o as any).jsx as any)(as, {
      items: f,
      onOpen: c,
      rowPaneKey: rn
    }), (e as any)[11] = c, (e as any)[12] = f, (e as any)[13] = m) : m = (e as any)[13], m;
  }
  if (((s as any).kind as any) === ("integrations" as any)) {
    let u: any;
    ((e as any)[14] as any) !== ((t as any).plugins as any) ? (u = (t as any).plugins ?? [], (e as any)[14] = (t as any).plugins, (e as any)[15] = u) : u = (e as any)[15];
    let f: any;
    ((e as any)[16] as any) !== (u as any) ? (f = ((u as any).map as any)(on), (e as any)[16] = u, (e as any)[17] = f) : f = (e as any)[17];
    let m: any;
    return ((e as any)[18] as any) !== (d as any) || ((e as any)[19] as any) !== (f as any) ? (m = ((o as any).jsx as any)(ls, {
      items: f,
      resolve: d
    }), (e as any)[18] = d, (e as any)[19] = f, (e as any)[20] = m) : m = (e as any)[20], m;
  }
  let r: any;
  return ((e as any)[21] as any) !== (s as any) || ((e as any)[22] as any) !== (t as any) ? (r = ((o as any).jsx as any)(is, {
    pane: s,
    template: t
  }), (e as any)[21] = s, (e as any)[22] = t, (e as any)[23] = r) : r = (e as any)[23], r;
}
function on(this: any, n: any): any {
  return {
    key: (n as any).pluginId,
    title: (n as any).name,
    ...(((n as any).description as any) == (null as any) ? {} : {
      description: (n as any).description
    })
  };
}
function rn(this: any, n: any): any {
  return (se as any)({
    kind: "automation",
    key: n
  });
}
function cn(this: any, n: any): any {
  return {
    key: (n as any).slug,
    title: (n as any).name
  };
}
function os(this: any, n: any): any {
  (os as any).d = 245;
  const e: any = ((g as any).c as any)(17),
    {
      share: s
    }: any = n,
    {
      _: t
    }: any = (ne as any)();
  if ((s as any).isPublished) {
    const f: any = (s as any).copyLink;
    let m: any;
    ((e as any)[0] as any) !== (t as any) ? (m = (t as any)({
      id: "/OV88s"
    }), (e as any)[0] = t, (e as any)[1] = m) : m = (e as any)[1];
    let k: any;
    ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (k = ((o as any).jsx as any)(ze, {
      mode: "copy-link"
    }), (e as any)[2] = k) : k = (e as any)[2];
    let p: any;
    return ((e as any)[3] as any) !== ((s as any).copyLink as any) || ((e as any)[4] as any) !== (m as any) ? (p = ((o as any).jsx as any)((T as any).Action, {
      onClick: f,
      title: m,
      variant: "primary",
      children: k
    }), (e as any)[3] = (s as any).copyLink, (e as any)[4] = m, (e as any)[5] = p) : p = (e as any)[5], p;
  }
  if (!(s as any).isAvailable) return null;
  const d: any = (s as any).isPublishing;
  let a: any;
  ((e as any)[6] as any) !== (s as any) ? (a = (): any => {
    ((s as any).publish as any)();
  }, (e as any)[6] = s, (e as any)[7] = a) : a = (e as any)[7];
  const i: any = (s as any).isPublishing;
  let l: any;
  ((e as any)[8] as any) !== (t as any) ? (l = (t as any)({
    id: "eORZUT"
  }), (e as any)[8] = t, (e as any)[9] = l) : l = (e as any)[9];
  const c: any = (s as any).isPublishing ? "publishing" : "publish";
  let r: any;
  ((e as any)[10] as any) !== (c as any) ? (r = ((o as any).jsx as any)(ze, {
    mode: c
  }), (e as any)[10] = c, (e as any)[11] = r) : r = (e as any)[11];
  let u: any;
  return ((e as any)[12] as any) !== ((s as any).isPublishing as any) || ((e as any)[13] as any) !== (a as any) || ((e as any)[14] as any) !== (l as any) || ((e as any)[15] as any) !== (r as any) ? (u = ((o as any).jsx as any)(_e, {
    disabled: d,
    onClick: a,
    pending: i,
    title: l,
    type: "button",
    variant: "primary",
    children: r
  }), (e as any)[12] = (s as any).isPublishing, (e as any)[13] = a, (e as any)[14] = l, (e as any)[15] = r, (e as any)[16] = u) : u = (e as any)[16], u;
}
function rs(this: any, n: any): any {
  (rs as any).d = 247;
  const e: any = ((g as any).c as any)(7),
    {
      leading: s,
      share: t
    }: any = n;
  let d: any, a: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = {
    className: "sand-78zum5 sand-dt5ytf sand-167g77z sand-1qjc9v5 sand-euugli sand-h8yej3"
  }, a = {
    className: "sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-167g77z sand-euugli"
  }, (e as any)[0] = d, (e as any)[1] = a) : (d = (e as any)[0], a = (e as any)[1]);
  let i: any;
  ((e as any)[2] as any) !== (t as any) ? (i = ((o as any).jsx as any)("div", {
    ...a,
    children: ((o as any).jsx as any)(os, {
      share: t
    })
  }), (e as any)[2] = t, (e as any)[3] = i) : i = (e as any)[3];
  let l: any;
  return ((e as any)[4] as any) !== (s as any) || ((e as any)[5] as any) !== (i as any) ? (l = ((o as any).jsx as any)((T as any).ActionBar, {
    style: (w as any).shareFooter,
    children: ((o as any).jsxs as any)("div", {
      "data-testid": "sand-bot-template-details-footer",
      ...d,
      children: [i, s]
    })
  }), (e as any)[4] = s, (e as any)[5] = i, (e as any)[6] = l) : l = (e as any)[6], l;
}
function cs(this: any, n: any): any {
  (cs as any).d = 259;
  const e: any = ((g as any).c as any)(27),
    {
      template: s,
      compact: t,
      share: d
    }: any = n;
  let a: any, i: any, l: any, c: any, r: any, u: any;
  if (((e as any)[0] as any) !== (d?.isMarkLive as any) || ((e as any)[1] as any) !== ((s as any).avatarColor as any) || ((e as any)[2] as any) !== ((s as any).avatarShape as any) || ((e as any)[3] as any) !== ((s as any).shareId as any)) {
    const v: any = {
        id: (s as any).shareId,
        avatarShape: (s as any).avatarShape,
        avatarColor: (s as any).avatarColor
      },
      x: any = d?.isMarkLive ?? !1;
    let j: any;
    ((e as any)[10] as any) !== (x as any) ? (j = (Ls as any)({
      parkUntilLive: !1,
      isMarkLive: x
    }), (e as any)[10] = x, (e as any)[11] = j) : j = (e as any)[11];
    const N: any = j;
    ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = {
      className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-h8yej3 sand-euugli"
    }, (e as any)[12] = u) : u = (e as any)[12], a = Ts, i = (Rs as any)(v), l = (N as any).isFollowingPointer, c = (N as any).isPaused, r = (Bs as any)(v), (e as any)[0] = d?.isMarkLive, (e as any)[1] = (s as any).avatarColor, (e as any)[2] = (s as any).avatarShape, (e as any)[3] = (s as any).shareId, (e as any)[4] = a, (e as any)[5] = i, (e as any)[6] = l, (e as any)[7] = c, (e as any)[8] = r, (e as any)[9] = u;
  } else a = (e as any)[4], i = (e as any)[5], l = (e as any)[6], c = (e as any)[7], r = (e as any)[8], u = (e as any)[9];
  const f: any = d?.spinSignal ?? 0,
    m: any = d?.markState ?? "idle",
    k: any = t && (w as any).markCompact;
  let p: any;
  ((e as any)[13] as any) !== (k as any) ? (p = [(w as any).mark, k], (e as any)[13] = k, (e as any)[14] = p) : p = (e as any)[14];
  let y: any;
  ((e as any)[15] as any) !== (a as any) || ((e as any)[16] as any) !== (i as any) || ((e as any)[17] as any) !== (l as any) || ((e as any)[18] as any) !== (c as any) || ((e as any)[19] as any) !== (r as any) || ((e as any)[20] as any) !== (f as any) || ((e as any)[21] as any) !== (m as any) || ((e as any)[22] as any) !== (p as any) ? (y = ((o as any).jsx as any)(a, {
    color: i,
    isFollowingPointer: l,
    isPaused: c,
    shape: r,
    sizePx: nn,
    spinSignal: f,
    state: m,
    style: p
  }), (e as any)[15] = a, (e as any)[16] = i, (e as any)[17] = l, (e as any)[18] = c, (e as any)[19] = r, (e as any)[20] = f, (e as any)[21] = m, (e as any)[22] = p, (e as any)[23] = y) : y = (e as any)[23];
  let h: any;
  return ((e as any)[24] as any) !== (y as any) || ((e as any)[25] as any) !== (u as any) ? (h = ((o as any).jsx as any)("div", {
    ...u,
    children: y
  }), (e as any)[24] = y, (e as any)[25] = u, (e as any)[26] = h) : h = (e as any)[26], h;
}
function un(this: any, n: any, e: any, s: any, t: any): any {
  return ((n as any).kind as any) === ("root" as any) ? (e as any).name : ((n as any).kind as any) === ("settings" as any) ? t : ((n as any).kind as any) === ("context" as any) || ((n as any).kind as any) === ("routines" as any) || ((n as any).kind as any) === ("integrations" as any) ? (s as any)[(n as any).kind] : ((n as any).kind as any) === ("memory" as any) ? (Xe as any)(e, (n as any).key)?.content ?? (s as any).context : ((n as any).kind as any) === ("skill" as any) ? (Ue as any)(e, (n as any).key)?.name ?? (s as any).context : (Ge as any)(e, (n as any).key)?.name ?? (s as any).routines;
}
function Ae(this: any, n: any): any {
  return ((n as any).kind as any) === ("settings" as any) || ((n as any).kind as any) === ("context" as any) || ((n as any).kind as any) === ("routines" as any) || ((n as any).kind as any) === ("integrations" as any);
}
function fn(this: any, n: any): any {
  return ((n as any).kind as any) === ("root" as any) || (Ae as any)(n);
}
function se(this: any, n: any): any {
  return "key" in n ? `${(n as any).kind}:${(n as any).key}` : (n as any).kind;
}
function us(this: any, n: any): any {
  (us as any).d = 261;
  const e: any = ((g as any).c as any)(31),
    {
      pane: s,
      template: t,
      isLoading: d,
      description: a,
      resolve: i,
      onPush: l,
      onDeleted: c
    }: any = n,
    r: any = (Vs as any)();
  if (((s as any).kind as any) === ("root" as any)) {
    let h: any;
    ((e as any)[0] as any) !== (r as any) ? (h = ({
      0: {
        className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-1y1aw1k sand-v54qhq sand-x6bls6 sand-f7dkkf"
      },
      1: {
        className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-1y1aw1k sand-x6bls6 sand-92arao sand-1bk0ktj"
      }
    } as any)[(!!r as any) << (0 as any)], (e as any)[0] = r, (e as any)[1] = h) : h = (e as any)[1];
    let v: any;
    ((e as any)[2] as any) !== (a as any) || ((e as any)[3] as any) !== (t as any) ? (v = ((o as any).jsx as any)(es, {
      description: a,
      template: t
    }), (e as any)[2] = a, (e as any)[3] = t, (e as any)[4] = v) : v = (e as any)[4];
    let x: any;
    ((e as any)[5] as any) !== (d as any) || ((e as any)[6] as any) !== (l as any) || ((e as any)[7] as any) !== (t as any) ? (x = d ? ((o as any).jsx as any)("div", {
      className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1iyjqo2 sand-1db3i3o",
      children: ((o as any).jsx as any)(Ce, {
        borderWidth: 1.5,
        size: 20
      })
    }) : ((o as any).jsx as any)(ss, {
      onOpen: (N: any): any => (l as any)({
        kind: N
      }),
      template: t
    }), (e as any)[5] = d, (e as any)[6] = l, (e as any)[7] = t, (e as any)[8] = x) : x = (e as any)[8];
    let j: any;
    return ((e as any)[9] as any) !== (h as any) || ((e as any)[10] as any) !== (v as any) || ((e as any)[11] as any) !== (x as any) ? (j = ((o as any).jsxs as any)("div", {
      ...h,
      children: [v, x]
    }), (e as any)[9] = h, (e as any)[10] = v, (e as any)[11] = x, (e as any)[12] = j) : j = (e as any)[12], j;
  }
  let u: any;
  ((e as any)[13] as any) !== (r as any) || ((e as any)[14] as any) !== (s as any) ? (u = ({
    0: {
      className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-ou54vl sand-1h8t67q sand-v54qhq sand-x6bls6 sand-f7dkkf"
    },
    2: {
      className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-ou54vl sand-v54qhq sand-x6bls6 sand-f7dkkf sand-7sb2j6"
    },
    1: {
      className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-ou54vl sand-1h8t67q sand-x6bls6 sand-92arao sand-1bk0ktj"
    },
    3: {
      className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-ou54vl sand-x6bls6 sand-7sb2j6 sand-92arao sand-1bk0ktj"
    }
  } as any)[((!!(Ae as any)(s) as any) << (1 as any) as any) | ((!!r as any) << (0 as any) as any)], (e as any)[13] = r, (e as any)[14] = s, (e as any)[15] = u) : u = (e as any)[15];
  let f: any, m: any, k: any;
  ((e as any)[16] as any) !== (l as any) ? (f = (h: any): any => (l as any)({
    kind: "memory",
    key: h
  }), m = (h: any): any => (l as any)({
    kind: "automation",
    key: h
  }), k = (h: any): any => (l as any)({
    kind: "skill",
    key: h
  }), (e as any)[16] = l, (e as any)[17] = f, (e as any)[18] = m, (e as any)[19] = k) : (f = (e as any)[17], m = (e as any)[18], k = (e as any)[19]);
  let p: any;
  ((e as any)[20] as any) !== (c as any) || ((e as any)[21] as any) !== (s as any) || ((e as any)[22] as any) !== (i as any) || ((e as any)[23] as any) !== (f as any) || ((e as any)[24] as any) !== (m as any) || ((e as any)[25] as any) !== (k as any) || ((e as any)[26] as any) !== (t as any) ? (p = ((o as any).jsx as any)(ds, {
    onDeleted: c,
    onOpenMemory: f,
    onOpenAutomation: m,
    onOpenSkill: k,
    pane: s,
    resolve: i,
    template: t
  }), (e as any)[20] = c, (e as any)[21] = s, (e as any)[22] = i, (e as any)[23] = f, (e as any)[24] = m, (e as any)[25] = k, (e as any)[26] = t, (e as any)[27] = p) : p = (e as any)[27];
  let y: any;
  return ((e as any)[28] as any) !== (u as any) || ((e as any)[29] as any) !== (p as any) ? (y = ((o as any).jsx as any)("div", {
    ...u,
    children: p
  }), (e as any)[28] = u, (e as any)[29] = p, (e as any)[30] = y) : y = (e as any)[30], y;
}
function qe(this: any, n: any): any {
  (qe as any).d = 246;
  const e: any = ((g as any).c as any)(88),
    {
      template: s,
      instructions: t,
      isLoading: d,
      onClose: a,
      action: i,
      share: l,
      embedded: c
    }: any = n,
    r: any = (c as any) === (void 0 as any) ? !1 : c,
    {
      _: u
    }: any = (ne as any)(),
    f: any = (Ke as any)(),
    m: any = ((M as any).useRef as any)(null),
    k: any = ((M as any).useRef as any)(null),
    p: any = ((M as any).useRef as any)(null),
    y: any = ((M as any).useRef as any)(null),
    h: any = ((M as any).useRef as any)(null);
  (Ps as any)();
  const v: any = (zs as any)(),
    {
      catalog: x
    }: any = (Os as any)();
  let j: any;
  ((e as any)[0] as any) !== (x as any) ? (j = (Cs as any)(x), (e as any)[0] = x, (e as any)[1] = j) : j = (e as any)[1];
  const N: any = j;
  let I: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (I = [{
    kind: "root"
  }], (e as any)[2] = I) : I = (e as any)[2];
  const [_, z]: any = ((M as any).useState as any)(I),
    $: any = (_ as any)[((_ as any).length as any) - (1 as any)] ?? {
      kind: "root"
    };
  let te: any;
  ((e as any)[3] as any) !== (t as any) || ((e as any)[4] as any) !== (s as any) ? (te = (t as any) === (void 0 as any) ? s : {
    ...s,
    description: t
  }, (e as any)[3] = t, (e as any)[4] = s, (e as any)[5] = te) : te = (e as any)[5];
  const ge: any = te,
    A: any = (Fs as any)({
      current: $,
      paneKey: se,
      resolveFocus: (b: any, q: any): any => (Xs as any)(b, {
        back: (p as any).current,
        incoming: q,
        title: (y as any).current,
        fallback: (k as any).current
      })
    });
  let ae: any;
  ((e as any)[6] as any) !== ((s as any).description as any) ? (ae = (((((s as any).description as any).replace as any)(/\s+/g, " ") as any).trim as any)(), (e as any)[6] = (s as any).description, (e as any)[7] = ae) : ae = (e as any)[7];
  const ye: any = ae,
    O: any = (($ as any).kind as any) !== ("root" as any),
    xe: any = (fn as any)($),
    je: any = (Ae as any)($),
    be: any = (un as any)($, s, f, (u as any)({
      id: "Tz0i8g"
    })),
    {
      status: ve
    }: any = (Le as any)();
  let le: any, C: any;
  ((e as any)[8] as any) !== (ve as any) || ((e as any)[9] as any) !== ((s as any).createdAtMs as any) || ((e as any)[10] as any) !== ((s as any).creatorName as any) || ((e as any)[11] as any) !== ((s as any).sourceAgentId as any) || ((e as any)[12] as any) !== ((s as any).updatedAtMs as any) ? (C = (Re as any)((s as any).updatedAtMs ?? (s as any).createdAtMs, (Be as any)()), le = (He as any)({
    creatorName: (s as any).creatorName,
    sourceAgentId: (s as any).sourceAgentId,
    signedInName: (Ye as any)(ve),
    updatedOn: C
  }), (e as any)[8] = ve, (e as any)[9] = (s as any).createdAtMs, (e as any)[10] = (s as any).creatorName, (e as any)[11] = (s as any).sourceAgentId, (e as any)[12] = (s as any).updatedAtMs, (e as any)[13] = le, (e as any)[14] = C) : (le = (e as any)[13], C = (e as any)[14]);
  const Me: any = le,
    ms: any = !O && ((Me?.kind as any) === ("updated" as any) || (Me?.updatedOn as any) != (null as any)),
    ie: any = (i as any) != (null as any) && (C as any) != (null as any) && !ms ? C : void 0;
  let de: any;
  ((e as any)[15] as any) !== (A as any) || ((e as any)[16] as any) !== (z as any) ? (de = (b: any): any => {
    const q: any = (h as any).current?.viewportElement;
    (q as any) != (null as any) && ((q as any).scrollTop = 0), ((A as any).navigate as any)({
      direction: "push",
      landing: {
        kind: "back"
      }
    }), (z as any)((ks: any): any => [...ks, b]);
  }, (e as any)[15] = A, (e as any)[16] = z, (e as any)[17] = de) : de = (e as any)[17];
  const L: any = de;
  let oe: any;
  ((e as any)[18] as any) !== (A as any) || ((e as any)[19] as any) !== ($ as any) || ((e as any)[20] as any) !== (z as any) || ((e as any)[21] as any) !== ((_ as any).length as any) ? (oe = (): any => {
    if (((_ as any).length as any) <= (1 as any)) return;
    const b: any = (h as any).current?.viewportElement;
    (b as any) != (null as any) && ((b as any).scrollTop = 0), ((A as any).navigate as any)({
      direction: "pop",
      landing: {
        kind: "row",
        paneKey: (se as any)($)
      }
    }), (z as any)(mn);
  }, (e as any)[18] = A, (e as any)[19] = $, (e as any)[20] = z, (e as any)[21] = (_ as any).length, (e as any)[22] = oe) : oe = (e as any)[22];
  const we: any = oe;
  let re: any;
  ((e as any)[23] as any) !== (ie as any) ? (re = (ie as any) == (null as any) ? null : ((o as any).jsx as any)(Ee, {
    color: "secondary",
    size: "sm",
    children: ((o as any).jsx as any)(pe, {
      updatedOn: ie
    })
  }), (e as any)[23] = ie, (e as any)[24] = re) : re = (e as any)[24];
  const R: any = re;
  let B: any = null;
  if ((($ as any).kind as any) === ("settings" as any)) B = null;else if ((i as any) != (null as any)) {
    let b: any;
    ((e as any)[25] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = ((o as any).jsx as any)((T as any).ActionSpacer, {}), (e as any)[25] = b) : b = (e as any)[25];
    let q: any;
    ((e as any)[26] as any) !== (i as any) || ((e as any)[27] as any) !== (R as any) ? (q = ((o as any).jsxs as any)((T as any).ActionBar, {
      style: (w as any).footer,
      children: [R, b, i]
    }), (e as any)[26] = i, (e as any)[27] = R, (e as any)[28] = q) : q = (e as any)[28], B = q;
  } else if ((l as any) != (null as any) && ((l as any).isAvailable || v && (l as any).isPublished)) {
    let b: any;
    ((e as any)[29] as any) !== (R as any) || ((e as any)[30] as any) !== (l as any) ? (b = ((o as any).jsx as any)(rs, {
      leading: R,
      share: l
    }), (e as any)[29] = R, (e as any)[30] = l, (e as any)[31] = b) : b = (e as any)[31], B = b;
  }
  let ce: any;
  ((e as any)[32] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ce = {
    className: "sand-1n2onr6 sand-78zum5 sand-dt5ytf sand-euugli sand-2lwn1j sand-1iyjqo2 sand-6ikm8r"
  }, (e as any)[32] = ce) : ce = (e as any)[32];
  let V: any;
  ((e as any)[33] as any) !== (u as any) || ((e as any)[34] as any) !== (i as any) || ((e as any)[35] as any) !== (r as any) || ((e as any)[36] as any) !== (O as any) || ((e as any)[37] as any) !== (L as any) || ((e as any)[38] as any) !== (l?.isPublished as any) ? (V = (i as any) == (null as any) && (l?.isPublished as any) === (!0 as any) && !O ? ((o as any).jsx as any)("div", {
    ...({
      0: {
        className: "sand-10l6tqk sand-1tk7jg1 sand-o2ifbc sand-zkaem6"
      },
      1: {
        className: "sand-10l6tqk sand-1tk7jg1 sand-zkaem6 sand-1wpkksf"
      }
    } as any)[(!r as any) << (0 as any)],
    children: ((o as any).jsx as any)(Pe, {
      "aria-label": (u as any)({
        id: "Tz0i8g"
      }),
      icon: "settings-gear",
      onClick: (): any => (L as any)({
        kind: "settings"
      })
    })
  }) : null, (e as any)[33] = u, (e as any)[34] = i, (e as any)[35] = r, (e as any)[36] = O, (e as any)[37] = L, (e as any)[38] = l?.isPublished, (e as any)[39] = V) : V = (e as any)[39];
  let E: any;
  ((e as any)[40] as any) !== (r as any) || ((e as any)[41] as any) !== (O as any) ? (E = ({
    0: {
      className: "sand-10l6tqk sand-13vifvy sand-1o0tod sand-tijo5x sand-htitgo sand-78zum5 sand-6s0dn4 sand-9f619 sand-euugli sand-dd8jsf sand-ou54vl sand-z9dl7a sand-2vl965 sand-sag5q8 sand-f7dkkf sand-10e981r sand-1hkp6id sand-1q0q8m5 sand-19145p9 sand-105ttfm sand-11xpdln sand-4wkmsb sand-q8ykup sand-12w9bfk sand-1554a8d"
    },
    2: {
      className: "sand-10l6tqk sand-13vifvy sand-1o0tod sand-tijo5x sand-htitgo sand-78zum5 sand-6s0dn4 sand-9f619 sand-euugli sand-dd8jsf sand-ou54vl sand-z9dl7a sand-2vl965 sand-sag5q8 sand-f7dkkf sand-10e981r sand-1hkp6id sand-1q0q8m5 sand-19145p9 sand-11xpdln sand-4wkmsb sand-q8ykup sand-12w9bfk sand-1554a8d sand-nn1q72"
    },
    1: {
      className: "sand-10l6tqk sand-13vifvy sand-1o0tod sand-tijo5x sand-htitgo sand-78zum5 sand-6s0dn4 sand-9f619 sand-euugli sand-dd8jsf sand-ou54vl sand-z9dl7a sand-2vl965 sand-sag5q8 sand-10e981r sand-1hkp6id sand-1q0q8m5 sand-19145p9 sand-105ttfm sand-11xpdln sand-4wkmsb sand-q8ykup sand-12w9bfk sand-1554a8d sand-92arao"
    },
    3: {
      className: "sand-10l6tqk sand-13vifvy sand-1o0tod sand-tijo5x sand-htitgo sand-78zum5 sand-6s0dn4 sand-9f619 sand-euugli sand-dd8jsf sand-ou54vl sand-z9dl7a sand-2vl965 sand-sag5q8 sand-10e981r sand-1hkp6id sand-1q0q8m5 sand-19145p9 sand-11xpdln sand-4wkmsb sand-q8ykup sand-12w9bfk sand-1554a8d sand-nn1q72 sand-92arao"
    }
  } as any)[((!!O as any) << (1 as any) as any) | ((!r as any) << (0 as any) as any)], (e as any)[40] = r, (e as any)[41] = O, (e as any)[42] = E) : E = (e as any)[42];
  let D: any;
  ((e as any)[43] as any) !== (u as any) || ((e as any)[44] as any) !== (p as any) || ((e as any)[45] as any) !== (be as any) || ((e as any)[46] as any) !== (O as any) || ((e as any)[47] as any) !== (we as any) || ((e as any)[48] as any) !== (y as any) ? (D = O ? ((o as any).jsxs as any)((o as any).Fragment, {
    children: [((o as any).jsx as any)(Pe, {
      "aria-label": (u as any)({
        id: "iH8pgl"
      }),
      icon: "chevron-left",
      onClick: we,
      ref: p
    }), ((o as any).jsx as any)("div", {
      ref: y,
      tabIndex: -1,
      className: "sand-1iyjqo2 sand-euugli sand-b3r6kr",
      children: ((o as any).jsx as any)((T as any).Title, {
        style: [(H as any).body1, (Ve as any).medium, (w as any).subviewTitleLabel],
        children: be
      })
    }), ((o as any).jsx as any)("div", {
      className: "sand-gd8bvy sand-1fgtraw sand-2lah0s"
    })]
  }) : null, (e as any)[43] = u, (e as any)[44] = p, (e as any)[45] = be, (e as any)[46] = O, (e as any)[47] = we, (e as any)[48] = y, (e as any)[49] = D) : D = (e as any)[49];
  let K: any;
  ((e as any)[50] as any) !== (E as any) || ((e as any)[51] as any) !== (D as any) ? (K = ((o as any).jsx as any)("div", {
    ...E,
    children: D
  }), (e as any)[50] = E, (e as any)[51] = D, (e as any)[52] = K) : K = (e as any)[52];
  let W: any;
  ((e as any)[53] as any) !== (r as any) ? (W = r ? null : ((o as any).jsx as any)("div", {
    className: "sand-10l6tqk sand-13vifvy sand-tijo5x sand-zkaem6",
    children: ((o as any).jsx as any)((T as any).CloseButton, {})
  }), (e as any)[53] = r, (e as any)[54] = W) : W = (e as any)[54];
  let F: any;
  ((e as any)[55] as any) !== (je as any) || ((e as any)[56] as any) !== (r as any) || ((e as any)[57] as any) !== (l as any) || ((e as any)[58] as any) !== (xe as any) || ((e as any)[59] as any) !== (s as any) ? (F = xe ? ((o as any).jsx as any)("div", {
    ...({
      0: {
        className: "sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-dt5ytf sand-2lah0s sand-9f619 sand-euugli sand-1miatn0 sand-v54qhq sand-18d9i69 sand-f7dkkf"
      },
      1: {
        className: "sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-dt5ytf sand-2lah0s sand-9f619 sand-euugli sand-1miatn0 sand-18d9i69 sand-92arao sand-1bk0ktj"
      }
    } as any)[(!r as any) << (0 as any)],
    children: ((o as any).jsx as any)(cs, {
      compact: je,
      share: l,
      template: s
    })
  }) : null, (e as any)[55] = je, (e as any)[56] = r, (e as any)[57] = l, (e as any)[58] = xe, (e as any)[59] = s, (e as any)[60] = F) : F = (e as any)[60];
  let Z: any;
  ((e as any)[61] as any) !== (ye as any) || ((e as any)[62] as any) !== (ge as any) || ((e as any)[63] as any) !== (d as any) || ((e as any)[64] as any) !== (a as any) || ((e as any)[65] as any) !== (L as any) || ((e as any)[66] as any) !== (N as any) ? (Z = (b: any): any => ((o as any).jsx as any)(us, {
    description: ye,
    isLoading: d,
    onDeleted: a,
    onPush: L,
    pane: b,
    resolve: N,
    template: ge
  }), (e as any)[61] = ye, (e as any)[62] = ge, (e as any)[63] = d, (e as any)[64] = a, (e as any)[65] = L, (e as any)[66] = N, (e as any)[67] = Z) : Z = (e as any)[67];
  let X: any;
  ((e as any)[68] as any) !== (A as any) || ((e as any)[69] as any) !== (Z as any) ? (X = ((o as any).jsx as any)(Zs, {
    navigation: A,
    renderPane: Z
  }), (e as any)[68] = A, (e as any)[69] = Z, (e as any)[70] = X) : X = (e as any)[70];
  let U: any;
  ((e as any)[71] as any) !== (F as any) || ((e as any)[72] as any) !== (X as any) ? (U = ((o as any).jsxs as any)(As, {
    ref: h,
    rootStyle: (w as any).mainViewScroll,
    scrollbarVisibility: "hover",
    children: [F, X]
  }), (e as any)[71] = F, (e as any)[72] = X, (e as any)[73] = U) : U = (e as any)[73];
  let G: any;
  ((e as any)[74] as any) !== (k as any) || ((e as any)[75] as any) !== (V as any) || ((e as any)[76] as any) !== (K as any) || ((e as any)[77] as any) !== (W as any) || ((e as any)[78] as any) !== (U as any) ? (G = ((o as any).jsx as any)((T as any).Body, {
    style: (w as any).body,
    children: ((o as any).jsxs as any)("div", {
      ref: k,
      tabIndex: -1,
      ...ce,
      children: [V, K, W, U]
    })
  }), (e as any)[74] = k, (e as any)[75] = V, (e as any)[76] = K, (e as any)[77] = W, (e as any)[78] = U, (e as any)[79] = G) : G = (e as any)[79];
  let ue: any;
  ((e as any)[80] as any) !== (B as any) || ((e as any)[81] as any) !== (G as any) ? (ue = ((o as any).jsxs as any)((o as any).Fragment, {
    children: [G, B]
  }), (e as any)[80] = B, (e as any)[81] = G, (e as any)[82] = ue) : ue = (e as any)[82];
  const fe: any = ue;
  if (r) return fe;
  let Q: any;
  ((e as any)[83] as any) !== (a as any) ? (Q = (b: any): any => {
    b || (a as any)();
  }, (e as any)[83] = a, (e as any)[84] = Q) : Q = (e as any)[84];
  let me: any;
  return ((e as any)[85] as any) !== (fe as any) || ((e as any)[86] as any) !== (Q as any) ? (me = ((o as any).jsx as any)((T as any).Root, {
    initialFocus: m,
    onOpenChange: Q,
    open: !0,
    ref: m,
    surfaceStyle: (w as any).surface,
    variant: "rich",
    width: "wide",
    children: fe
  }), (e as any)[85] = fe, (e as any)[86] = Q, (e as any)[87] = me) : me = (e as any)[87], me;
}
function mn(this: any, n: any): any {
  return ((n as any).slice as any)(0, -1);
}
function fs(this: any, n: any): any {
  (fs as any).d = 244;
  const e: any = ((g as any).c as any)(11),
    {
      template: s,
      onClose: t,
      action: d,
      sourceAgentId: a
    }: any = n;
  let i: any;
  ((e as any)[0] as any) !== (s as any) ? (i = (Ns as any)(s), (e as any)[0] = s, (e as any)[1] = i) : i = (e as any)[1];
  const l: any = i;
  (qs as any)((l as any).shareId, (l as any).version);
  const {
    view: c,
    isLoading: r
  }: any = (_s as any)(s);
  let u: any;
  ((e as any)[2] as any) !== (a as any) || ((e as any)[3] as any) !== (c as any) ? (u = (a as any) == (null as any) || ((c as any).sourceAgentId as any) === (a as any) ? c : {
    ...c,
    sourceAgentId: a
  }, (e as any)[2] = a, (e as any)[3] = c, (e as any)[4] = u) : u = (e as any)[4];
  const f: any = u,
    m: any = (Ms as any)(f);
  let k: any;
  return ((e as any)[5] as any) !== (d as any) || ((e as any)[6] as any) !== (r as any) || ((e as any)[7] as any) !== (t as any) || ((e as any)[8] as any) !== (m as any) || ((e as any)[9] as any) !== (f as any) ? (k = ((o as any).jsx as any)(qe, {
    action: d,
    isLoading: r,
    onClose: t,
    share: m,
    template: f
  }), (e as any)[5] = d, (e as any)[6] = r, (e as any)[7] = t, (e as any)[8] = m, (e as any)[9] = f, (e as any)[10] = k) : k = (e as any)[10], k;
}
const jn: any = ((Object as any).freeze as any)(((Object as any).defineProperty as any)({
  __proto__: null,
  BotTemplateDetailsDialog: fs,
  BotTemplateDetailsView: qe
}, (Symbol as any).toStringTag, {
  value: "Module"
}));
export { fs as B, ze as a, jn as b };
//# debugId=6b193885-ad5c-493b-a2e4-c49b732dbd43
