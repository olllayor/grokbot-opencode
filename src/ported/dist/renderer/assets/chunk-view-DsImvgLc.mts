declare var ResizeObserver: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "7d2a5790-fc84-43ea-8a8f-7a00f1a07d46", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-7d2a5790-fc84-43ea-8a8f-7a00f1a07d46");
  } catch (e: any) {}
} as any)();
import { c as ye, u as We, r as T, j as n, p as Ze, T as Xe } from "./index.eager-vendor-Qbf9YA6n.js";
import { a_ as fs, u as ms, x as hs, i as ys } from "./index.eager-platform-Dcfeegfw.js";
import { aZ as ss, a$ as ps, a_ as Pe, eL as Be, aY as ks, aX as vs, aV as bs, aR as gs, eM as xs, d0 as js, dB as ws, bv as qs, eN as Ss, bP as _s, eO as Ns } from "./index.eager-app-Cj5f8Gby.js";
import { p as Qe, bs as Ms, I as as, t as he, bt as ls, g as ns, bu as Cs } from "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
const ts: number = 96;
function As(this: any, o: any, e: any = ts): any {
  const s: any = ((Math as any).max as any)(1, ((Math as any).min as any)(e, ts)),
    t: any = ((o as any).trim as any)(),
    d: any = (((t as any).split as any)(/[?\uFF1F]/u) as any)[0]?.replace(/[.!\u3002\uFF01]+$/u, "").trim() ?? "";
  return (zs as any)(((d as any).length as any) > (0 as any) ? d : t, s);
}
function zs(this: any, o: any, e: any): any {
  const s: any = ((o as any).trim as any)();
  if ((e as any) <= (1 as any)) return "\u2026";
  if (((s as any).length as any) <= (e as any)) return s;
  const t: any = ((s as any).slice as any)(0, e),
    d: any = ((Math as any).max as any)(((t as any).lastIndexOf as any)(" "), ((t as any).lastIndexOf as any)(`
`), ((t as any).lastIndexOf as any)("	")),
    a: any = (d as any) >= (((Math as any).floor as any)((e as any) * (.55 as any)) as any) ? d : e;
  return `${((((t as any).slice as any)(0, a) as any).trimEnd as any)()}\u2026`;
}
const $s: number = 210,
  Rs: number = 4,
  Es: string = "--voice-call-pill-inset",
  Is: any = {
    iconSize: "sm",
    shape: "circle",
    size: "xs"
  };
function Os(this: any, o: any, e: any): any {
  return (e as any) === (null as any) ? o : `${o} · ${e}`;
}
const O: any = {
  head: {
    kVAEAm: "sand-1n2onr6",
    kzqmXN: "sand-h8yej3",
    ks0D6T: "sand-193iq5w",
    k7Eaqz: "sand-euugli",
    kB7OPa: "sand-9f619",
    $$css: !0
  },
  headOpen: {
    kZCmMZ: "sand-ciflc3",
    kwRFfy: "sand-194u5oj",
    $$css: !0
  },
  headControl: {
    kVAEAm: "sand-10l6tqk",
    k87sOh: "sand-wa60dl",
    k3aq6I: "sand-1cb1t30",
    kKVMdj: "sand-i8jd85 sand-1aquc0h",
    k44tkh: "sand-1g18oiy",
    kKxzle: "sand-1yq23n6",
    kyAemX: "sand-14tmpi7",
    kWV6AL: "sand-skzprw",
    $$css: !0
  },
  close: {
    kt4wiu: "sand-o2ifbc",
    $$css: !0
  },
  summaryChip: {
    ks0D6T: "sand-193iq5w",
    k7Eaqz: "sand-euugli",
    kWkggS: "sand-jbqb8w",
    $$css: !0
  },
  summary: {
    k7Eaqz: "sand-euugli",
    kVQacm: "sand-b3r6kr",
    khDVqt: "sand-uxw1ft",
    kg5iWk: "sand-lyipyv",
    kHjlTd: "sand-1h4wwuj",
    $$css: !0
  },
  duration: {
    kmuXW: "sand-2lah0s",
    kcqcaj: "sand-ss6m8b",
    khDVqt: "sand-1sdyfia",
    $$css: !0
  },
  fullSummary: {
    keoZOQ: "sand-14vqqas",
    k1K539: "sand-jpr12u",
    kzqmXN: "sand-h8yej3",
    kB7OPa: "sand-9f619",
    kwRFfy: "sand-v54qhq",
    kZCmMZ: "sand-f7dkkf",
    kLWn49: "sand-a7kkou",
    kMwMTN: "sand-yktyii",
    kN2L0X: "sand-1fzhlzt",
    kHjlTd: "sand-j0a0fe",
    k9WMMc: "sand-1yc453h",
    $$css: !0
  },
  transcript: {
    kzqmXN: "sand-h8yej3",
    ks0D6T: "sand-193iq5w",
    $$css: !0
  },
  transcriptBody: {
    k1xSpc: "sand-78zum5",
    kXwgrk: "sand-dt5ytf",
    kGNEyG: "sand-1cy8zhl",
    kzqmXN: "sand-h8yej3",
    k7Eaqz: "sand-euugli",
    ks0D6T: "sand-193iq5w",
    kOIVth: "sand-883omv",
    $$css: !0
  },
  relayAt: {
    kmuXW: "sand-2lah0s",
    k7Eaqz: "sand-1aasl1c",
    k9WMMc: "sand-p4054r",
    kMwMTN: "sand-1e4uaio",
    kcqcaj: "sand-ss6m8b",
    $$css: !0
  },
  relayGlyph: {
    keoZOQ: "sand-7r5mf7",
    $$css: !0
  },
  relayAnswer: {
    kMwMTN: "sand-19aaqeu",
    $$css: !0
  },
  relayCut: {
    kMwMTN: "sand-1e4uaio",
    $$css: !0
  }
};
function Ts(this: any, {
  turns: o,
  nudges: e,
  showsNudges: s
}: any): any {
  const t: any = ((o as any).map as any)((a: any): any => ({
      kind: "turn",
      atMs: (a as any).atMs,
      turn: a
    })),
    d: any = s ? ((e as any).map as any)((a: any): any => ({
      kind: "relay",
      atMs: (a as any).atMs,
      nudge: a
    })) : [];
  return (([...t, ...d] as any).sort as any)((a: any, u: any): any => ((a as any).atMs as any) - ((u as any).atMs as any));
}
function ds(this: any, o: any): any {
  (ds as any).d = 1355;
  const e: any = ((ye as any).c as any)(24),
    {
      conversationId: s,
      requestId: t,
      isAnysphereUser: d,
      showsNudges: a,
      onChangeShowsNudges: u
    }: any = o,
    {
      _: r,
      i18n: c
    }: any = (We as any)(),
    [, i]: any = (bs as any)(),
    w: any = (s as any) !== (null as any) || (t as any) !== (null as any);
  if (!w && !d) return null;
  let l: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = {
    className: "sand-78zum5 sand-6s0dn4 sand-2lah0s sand-195vfkc sand-10l6tqk sand-wa60dl sand-1cb1t30 sand-i8jd85 sand-1aquc0h sand-1g18oiy sand-1yq23n6 sand-14tmpi7 sand-skzprw sand-i5uv41"
  }, (e as any)[0] = l) : l = (e as any)[0];
  let h: any;
  ((e as any)[1] as any) !== (r as any) ? (h = (r as any)({
    id: "JcD7qf"
  }), (e as any)[1] = r, (e as any)[2] = h) : h = (e as any)[2];
  let S: any;
  ((e as any)[3] as any) !== (h as any) ? (S = ((n as any).jsx as any)((he as any).Trigger, {
    children: ((n as any).jsx as any)(Qe, {
      "aria-label": h,
      "data-voice-call-menu": !0,
      icon: "dots-3-horizontal",
      ...Is
    })
  }), (e as any)[3] = h, (e as any)[4] = S) : S = (e as any)[4];
  let y: any;
  ((e as any)[5] as any) !== (r as any) ? (y = (r as any)({
    id: "3Siwmw"
  }), (e as any)[5] = r, (e as any)[6] = y) : y = (e as any)[6];
  let b: any;
  ((e as any)[7] as any) !== (s as any) || ((e as any)[8] as any) !== (i as any) || ((e as any)[9] as any) !== (w as any) || ((e as any)[10] as any) !== (c as any) || ((e as any)[11] as any) !== (t as any) ? (b = w ? ((n as any).jsxs as any)((he as any).Section, {
    children: [(s as any) === (null as any) ? null : ((n as any).jsx as any)((he as any).Item, {
      onSelect: (): any => (i as any)(s),
      children: ((n as any).jsx as any)(Xe, {
        id: "la8mWk"
      })
    }), (t as any) === (null as any) ? null : ((n as any).jsx as any)((he as any).Item, {
      onSelect: (): any => (i as any)(t),
      children: ((c as any)._ as any)(gs)
    })]
  }) : null, (e as any)[7] = s, (e as any)[8] = i, (e as any)[9] = w, (e as any)[10] = c, (e as any)[11] = t, (e as any)[12] = b) : b = (e as any)[12];
  let x: any;
  ((e as any)[13] as any) !== (d as any) || ((e as any)[14] as any) !== (u as any) || ((e as any)[15] as any) !== (a as any) ? (x = d ? ((n as any).jsx as any)((he as any).Section, {
    children: ((n as any).jsx as any)((he as any).CheckboxItem, {
      checked: a,
      onChange: u,
      children: ((n as any).jsx as any)(Xe, {
        id: "Osn70z"
      })
    })
  }) : null, (e as any)[13] = d, (e as any)[14] = u, (e as any)[15] = a, (e as any)[16] = x) : x = (e as any)[16];
  let q: any;
  ((e as any)[17] as any) !== (y as any) || ((e as any)[18] as any) !== (b as any) || ((e as any)[19] as any) !== (x as any) ? (q = ((n as any).jsxs as any)((he as any).Content, {
    "aria-label": y,
    minWidth: 200,
    size: "md",
    children: [b, x]
  }), (e as any)[17] = y, (e as any)[18] = b, (e as any)[19] = x, (e as any)[20] = q) : q = (e as any)[20];
  let v: any;
  return ((e as any)[21] as any) !== (S as any) || ((e as any)[22] as any) !== (q as any) ? (v = ((n as any).jsx as any)("div", {
    "data-voice-call-tools": "",
    ...l,
    children: ((n as any).jsxs as any)(he, {
      placement: "bottom-start",
      children: [S, q]
    })
  }), (e as any)[21] = S, (e as any)[22] = q, (e as any)[23] = v) : v = (e as any)[23], v;
}
function Ue(this: any, o: any): any {
  (Ue as any).d = 1356;
  const e: any = ((ye as any).c as any)(13),
    {
      at: s,
      tone: t,
      isMeta: d,
      children: a
    }: any = o,
    u: any = (d as any) === (void 0 as any) ? !1 : d;
  let r: any, c: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = {
    className: "sand-78zum5 sand-1pha0wt sand-17d4w8g sand-euugli"
  }, c = (Ze as any)((Pe as any).label, (O as any).relayAt), (e as any)[0] = r, (e as any)[1] = c) : (r = (e as any)[0], c = (e as any)[1]);
  let i: any;
  ((e as any)[2] as any) !== (s as any) ? (i = ((n as any).jsx as any)("span", {
    ...c,
    children: s
  }), (e as any)[2] = s, (e as any)[3] = i) : i = (e as any)[3];
  let w: any;
  ((e as any)[4] as any) !== (u as any) || ((e as any)[5] as any) !== (t as any) ? (w = (Ze as any)(u ? (Pe as any).label : (Pe as any).body2, t), (e as any)[4] = u, (e as any)[5] = t, (e as any)[6] = w) : w = (e as any)[6];
  let l: any;
  ((e as any)[7] as any) !== (a as any) || ((e as any)[8] as any) !== (w as any) ? (l = ((n as any).jsx as any)("span", {
    ...w,
    children: a
  }), (e as any)[7] = a, (e as any)[8] = w, (e as any)[9] = l) : l = (e as any)[9];
  let h: any;
  return ((e as any)[10] as any) !== (i as any) || ((e as any)[11] as any) !== (l as any) ? (h = ((n as any).jsxs as any)("div", {
    ...r,
    children: [i, l]
  }), (e as any)[10] = i, (e as any)[11] = l, (e as any)[12] = h) : h = (e as any)[12], h;
}
function is(this: any, o: any): any {
  (is as any).d = 1354;
  const e: any = ((ye as any).c as any)(36),
    {
      nudge: s,
      startedAtMs: t
    }: any = o,
    d: any = (((Be as any).directionOf as any)(s) as any) === ("to-voice" as any),
    a: any = d ? (s as any).answer ?? (s as any).request : (s as any).request,
    u: any = d ? null : (s as any).answer;
  let r: any;
  ((e as any)[0] as any) !== (t as any) ? (r = (P: any): any => ((Be as any).formatDuration as any)((P as any) - (t as any)), (e as any)[0] = t, (e as any)[1] = r) : r = (e as any)[1];
  const c: any = r,
    i: any = (s as any).cut ?? null;
  let w: any;
  ((e as any)[2] as any) !== (i as any) ? (w = (i as any) === (null as any) ? "" : ((((i as any).heardMs as any) / (1e3 as any) as any).toFixed as any)(1), (e as any)[2] = i, (e as any)[3] = w) : w = (e as any)[3];
  const l: any = w;
  let h: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = {
    className: "sand-kh2ocl sand-78zum5 sand-1cy8zhl sand-17d4w8g sand-euugli sand-4b2ntj"
  }, (e as any)[4] = h) : h = (e as any)[4];
  let S: any;
  ((e as any)[5] as any) !== (s as any) ? (S = ((Be as any).directionOf as any)(s), (e as any)[5] = s, (e as any)[6] = S) : S = (e as any)[6];
  let y: any;
  ((e as any)[7] as any) !== (i as any) || ((e as any)[8] as any) !== (l as any) ? (y = (i as any) === (null as any) ? {} : {
    "data-nudge-cut": l
  }, (e as any)[7] = i, (e as any)[8] = l, (e as any)[9] = y) : y = (e as any)[9];
  const b: any = d ? "arrow-left-down" : "arrow-right-up";
  let x: any;
  ((e as any)[10] as any) !== (b as any) ? (x = ((n as any).jsx as any)(as, {
    "aria-hidden": !0,
    name: b,
    size: "xs",
    style: (O as any).relayGlyph
  }), (e as any)[10] = b, (e as any)[11] = x) : x = (e as any)[11];
  let q: any;
  ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (q = {
    className: "sand-78zum5 sand-dt5ytf sand-12mrbbr sand-euugli"
  }, (e as any)[12] = q) : q = (e as any)[12];
  let v: any;
  ((e as any)[13] as any) !== (c as any) || ((e as any)[14] as any) !== ((s as any).atMs as any) ? (v = (c as any)((s as any).atMs), (e as any)[13] = c, (e as any)[14] = (s as any).atMs, (e as any)[15] = v) : v = (e as any)[15];
  let g: any;
  ((e as any)[16] as any) !== (a as any) || ((e as any)[17] as any) !== (v as any) ? (g = ((n as any).jsx as any)(Ue, {
    at: v,
    children: a
  }), (e as any)[16] = a, (e as any)[17] = v, (e as any)[18] = g) : g = (e as any)[18];
  let f: any;
  ((e as any)[19] as any) !== (c as any) || ((e as any)[20] as any) !== ((s as any).answeredAtMs as any) || ((e as any)[21] as any) !== (u as any) ? (f = (u as any) === (null as any) ? null : ((n as any).jsx as any)(Ue, {
    at: ((s as any).answeredAtMs as any) == (null as any) ? null : (c as any)((s as any).answeredAtMs),
    tone: (O as any).relayAnswer,
    children: u
  }), (e as any)[19] = c, (e as any)[20] = (s as any).answeredAtMs, (e as any)[21] = u, (e as any)[22] = f) : f = (e as any)[22];
  let p: any;
  ((e as any)[23] as any) !== (i as any) || ((e as any)[24] as any) !== (l as any) || ((e as any)[25] as any) !== (c as any) ? (p = (i as any) === (null as any) ? null : ((n as any).jsx as any)(Ue, {
    at: (c as any)((i as any).atMs),
    isMeta: !0,
    tone: (O as any).relayCut,
    children: ((n as any).jsx as any)(Xe, {
      id: "SGu12N",
      values: {
        heard: l
      }
    })
  }), (e as any)[23] = i, (e as any)[24] = l, (e as any)[25] = c, (e as any)[26] = p) : p = (e as any)[26];
  let k: any;
  ((e as any)[27] as any) !== (g as any) || ((e as any)[28] as any) !== (f as any) || ((e as any)[29] as any) !== (p as any) ? (k = ((n as any).jsxs as any)("div", {
    ...q,
    children: [g, f, p]
  }), (e as any)[27] = g, (e as any)[28] = f, (e as any)[29] = p, (e as any)[30] = k) : k = (e as any)[30];
  let N: any;
  return ((e as any)[31] as any) !== (k as any) || ((e as any)[32] as any) !== (S as any) || ((e as any)[33] as any) !== (y as any) || ((e as any)[34] as any) !== (x as any) ? (N = ((n as any).jsxs as any)("div", {
    ...h,
    "data-nudge": S,
    "data-relayed-request": !0,
    ...y,
    children: [x, k]
  }), (e as any)[31] = k, (e as any)[32] = S, (e as any)[33] = y, (e as any)[34] = x, (e as any)[35] = N) : N = (e as any)[35], N;
}
function cs(this: any, o: any): any {
  (cs as any).d = 1357;
  const e: any = ((ye as any).c as any)(104),
    {
      title: s,
      duration: t,
      description: d,
      turns: a,
      nudges: u,
      startedAtMs: r,
      conversationId: c,
      requestId: i,
      isAnysphereUser: w,
      expanded: l,
      thumbs: h,
      tray: S,
      commentOpen: y,
      onToggle: b
    }: any = o,
    x: any = (a as any) === (void 0 as any) ? [] : a,
    q: any = (u as any) === (void 0 as any) ? [] : u,
    v: any = (r as any) === (void 0 as any) ? 0 : r,
    g: any = (c as any) === (void 0 as any) ? null : c,
    f: any = (i as any) === (void 0 as any) ? null : i,
    p: any = (w as any) === (void 0 as any) ? !1 : w,
    k: any = (h as any) === (void 0 as any) ? null : h,
    N: any = (S as any) === (void 0 as any) ? null : S,
    P: any = (y as any) === (void 0 as any) ? !1 : y,
    {
      _: L
    }: any = (We as any)(),
    [C, Z]: any = ((T as any).useState as any)(!1),
    [A, z]: any = ((T as any).useState as any)(!1),
    M: any = l || P,
    [E, $]: any = ((T as any).useState as any)(!1),
    I: any = ((T as any).useRef as any)(null),
    Q: any = ((T as any).useRef as any)(null),
    se: any = ((T as any).useRef as any)(null);
  let B: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (B = (j: any): any => {
    if ((j as any) == (null as any)) return;
    const me: any = (): any => ($ as any)(((j as any).scrollWidth as any) > (((j as any).clientWidth as any) + (1 as any) as any));
    if ((me as any)(), (typeof ResizeObserver as any) > ("u" as any)) return;
    const ke: any = new (ResizeObserver as any)(me);
    return ((ke as any).observe as any)(j), (): any => ((ke as any).disconnect as any)();
  }, (e as any)[0] = B) : B = (e as any)[0];
  const de: any = B;
  let ie: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ie = (j: any): any => {
    const me: any = (se as any).current;
    if ((j as any) == (null as any) || (me as any) == (null as any)) return;
    const ke: any = (): any => {
      const He: any = ((Math as any).max as any)(0, ((((j as any).offsetWidth as any) - ((me as any).offsetWidth as any) as any) / (2 as any) as any) - (Rs as any));
      (((j as any).style as any).setProperty as any)(Es, `${He}px`);
    };
    if ((ke as any)(), (typeof ResizeObserver as any) > ("u" as any)) return;
    const De: any = new (ResizeObserver as any)(ke);
    return ((De as any).observe as any)(me), ((De as any).observe as any)(j), (): any => ((De as any).disconnect as any)();
  }, (e as any)[1] = ie) : ie = (e as any)[1];
  const pe: any = ie;
  let ce: any;
  ((e as any)[2] as any) !== (d as any) ? (ce = (): any => (d as any) === (void 0 as any) || ((d as any).length as any) === (0 as any), (e as any)[2] = d, (e as any)[3] = ce) : ce = (e as any)[3];
  const [Y]: any = ((T as any).useState as any)(ce),
    R: any = (d as any) !== (void 0 as any) && ((d as any).length as any) > (0 as any),
    _: any = R && (d as any) !== (void 0 as any) ? d : s;
  let ne: any;
  ((e as any)[4] as any) !== (_ as any) ? (ne = (As as any)(_), (e as any)[4] = _, (e as any)[5] = ne) : ne = (e as any)[5];
  const te: any = ne;
  let W: any;
  if (((e as any)[6] as any) !== (_ as any)) {
    let j: any;
    ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = /[.!\u3002\uFF01]+$/u, (e as any)[8] = j) : j = (e as any)[8], W = ((((_ as any).trim as any)() as any).replace as any)(j, ""), (e as any)[6] = _, (e as any)[7] = W;
  } else W = (e as any)[7];
  const re: any = (te as any) !== (W as any);
  let X: any;
  ((e as any)[9] as any) !== (t as any) || ((e as any)[10] as any) !== (_ as any) ? (X = (Os as any)(_, t), (e as any)[9] = t, (e as any)[10] = _, (e as any)[11] = X) : X = (e as any)[11];
  const oe: any = X,
    ae: any = (Ts as any)({
      turns: x,
      nudges: q,
      showsNudges: C
    }),
    G: any = ((ae as any).length as any) > (0 as any),
    ve: string = "",
    ue: string = "message",
    be: string = "bubble",
    J: any = l ? "" : void 0;
  let V: any;
  ((e as any)[12] as any) !== (M as any) ? (V = ({
    0: {
      className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-h8yej3 sand-193iq5w sand-euugli sand-1n2onr6 sand-1717udv sand-ng3xce sand-jbqb8w sand-1heor9g sand-jb2p0i sand-1yc453h sand-m6vylc sand-7ayfe5 sand-4wkmsb sand-1vgdfw2 sand-1e6nqfh"
    },
    1: {
      className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-h8yej3 sand-193iq5w sand-euugli sand-1n2onr6 sand-1717udv sand-ng3xce sand-jbqb8w sand-1heor9g sand-jb2p0i sand-1yc453h sand-7ayfe5 sand-4wkmsb sand-1vgdfw2 sand-1e6nqfh sand-1vald79 sand-sag5q8"
    }
  } as any)[(!!M as any) << (0 as any)], (e as any)[12] = M, (e as any)[13] = V) : V = (e as any)[13];
  let K: any;
  ((e as any)[14] as any) !== (M as any) || ((e as any)[15] as any) !== (A as any) ? (K = ({
    0: {
      className: "sand-47corl sand-10l6tqk sand-13vifvy sand-1ey2m1c sand-13fihh6 sand-4pepcl sand-s6r99b sand-g01cxk sand-1vhny7y sand-4wkmsb sand-pwgtru sand-1e6nqfh"
    },
    2: {
      className: "sand-47corl sand-10l6tqk sand-13vifvy sand-1ey2m1c sand-13fihh6 sand-4pepcl sand-s6r99b sand-1vhny7y sand-4wkmsb sand-pwgtru sand-1e6nqfh sand-1hc1fzr"
    },
    1: {
      className: "sand-47corl sand-10l6tqk sand-1ey2m1c sand-4pepcl sand-s6r99b sand-1vhny7y sand-4wkmsb sand-pwgtru sand-1e6nqfh sand-tu2xtp sand-17y0mx6 sand-1hc1fzr"
    },
    3: {
      className: "sand-47corl sand-10l6tqk sand-1ey2m1c sand-4pepcl sand-s6r99b sand-1vhny7y sand-4wkmsb sand-pwgtru sand-1e6nqfh sand-tu2xtp sand-17y0mx6 sand-1hc1fzr"
    }
  } as any)[((!!A as any) << (1 as any) as any) | ((!!M as any) << (0 as any) as any)], (e as any)[14] = M, (e as any)[15] = A, (e as any)[16] = K) : K = (e as any)[16];
  let F: any;
  ((e as any)[17] as any) !== (K as any) ? (F = ((n as any).jsx as any)("div", {
    "aria-hidden": !0,
    "data-voice-call-fill": "",
    ...K
  }), (e as any)[17] = K, (e as any)[18] = F) : F = (e as any)[18];
  const ee: any = l && (O as any).headOpen;
  let D: any;
  ((e as any)[19] as any) !== (ee as any) ? (D = [(O as any).head, ee], (e as any)[19] = ee, (e as any)[20] = D) : D = (e as any)[20];
  let H: any;
  ((e as any)[21] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (H = {
    className: "sand-78zum5 sand-1q0g3np sand-6s0dn4 sand-l56j7k sand-193iq5w sand-euugli sand-195vfkc"
  }, (e as any)[21] = H) : H = (e as any)[21];
  let U: any;
  ((e as any)[22] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (U = ((n as any).jsx as any)(as, {
    name: "waveform",
    size: "sm"
  }), (e as any)[22] = U) : U = (e as any)[22];
  let le: any;
  ((e as any)[23] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (le = (): any => (z as any)(!1), (e as any)[23] = le) : le = (e as any)[23];
  let m: any, ge: any, fe: any;
  ((e as any)[24] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = (j: any): any => (z as any)((((j as any).currentTarget as any).matches as any)(":focus-visible")), ge = (): any => (z as any)(!0), fe = (): any => (z as any)(!1), (e as any)[24] = m, (e as any)[25] = ge, (e as any)[26] = fe) : (m = (e as any)[24], ge = (e as any)[25], fe = (e as any)[26]);
  let Ge: any;
  ((e as any)[27] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ge = {
    className: "sand-3nfvp2 sand-1pha0wt sand-193iq5w sand-euugli"
  }, (e as any)[27] = Ge) : Ge = (e as any)[27];
  let xe: any;
  ((e as any)[28] as any) !== (R as any) ? (xe = R ? {
    "data-voice-call-description": ""
  } : {}, (e as any)[28] = R, (e as any)[29] = xe) : xe = (e as any)[29];
  let je: any;
  ((e as any)[30] as any) !== (R as any) || ((e as any)[31] as any) !== (Y as any) ? (je = R && Y ? {
    "data-voice-call-description-load-in": ""
  } : {}, (e as any)[30] = R, (e as any)[31] = Y, (e as any)[32] = je) : je = (e as any)[32];
  let we: any;
  ((e as any)[33] as any) !== (te as any) || ((e as any)[34] as any) !== (_ as any) || ((e as any)[35] as any) !== (xe as any) || ((e as any)[36] as any) !== (je as any) ? (we = ((n as any).jsx as any)(ss, {
    "data-voice-call-summary": "",
    isTruncating: !0,
    ref: de,
    title: _,
    ...xe,
    ...je,
    style: (O as any).summary,
    children: te
  }), (e as any)[33] = te, (e as any)[34] = _, (e as any)[35] = xe, (e as any)[36] = je, (e as any)[37] = we) : we = (e as any)[37];
  let qe: any;
  ((e as any)[38] as any) !== (t as any) ? (qe = (t as any) === (null as any) ? null : ((n as any).jsx as any)(ss, {
    "data-voice-call-duration": "",
    tone: "tertiary",
    style: (O as any).duration,
    children: ` · ${t}`
  }), (e as any)[38] = t, (e as any)[39] = qe) : qe = (e as any)[39];
  let Se: any;
  ((e as any)[40] as any) !== (we as any) || ((e as any)[41] as any) !== (qe as any) ? (Se = ((n as any).jsxs as any)("span", {
    "data-voice-call-line": "",
    ...Ge,
    children: [we, qe]
  }), (e as any)[40] = we, (e as any)[41] = qe, (e as any)[42] = Se) : Se = (e as any)[42];
  let _e: any;
  ((e as any)[43] as any) !== (oe as any) || ((e as any)[44] as any) !== (l as any) || ((e as any)[45] as any) !== (b as any) || ((e as any)[46] as any) !== (Se as any) ? (_e = ((n as any).jsx as any)(ks, {
    "aria-expanded": l,
    "aria-label": oe,
    "data-voice-call-toggle": "",
    leading: U,
    leadingGap: 4,
    onBlur: le,
    onClick: b,
    onFocus: m,
    onPointerEnter: ge,
    onPointerLeave: fe,
    style: (O as any).summaryChip,
    title: oe,
    children: Se
  }), (e as any)[43] = oe, (e as any)[44] = l, (e as any)[45] = b, (e as any)[46] = Se, (e as any)[47] = _e) : _e = (e as any)[47];
  let Ne: any;
  ((e as any)[48] as any) !== (_e as any) || ((e as any)[49] as any) !== (k as any) ? (Ne = ((n as any).jsxs as any)("div", {
    "data-voice-call-rating-row": "",
    ref: se,
    ...H,
    children: [_e, k]
  }), (e as any)[48] = _e, (e as any)[49] = k, (e as any)[50] = Ne) : Ne = (e as any)[50];
  let Me: any;
  ((e as any)[51] as any) !== (L as any) || ((e as any)[52] as any) !== (l as any) || ((e as any)[53] as any) !== (b as any) ? (Me = l ? ((n as any).jsx as any)(Qe, {
    "aria-label": (L as any)({
      id: "H86f9p"
    }),
    "data-voice-call-close": "",
    icon: "x",
    onClick: b,
    shape: "circle",
    size: "sm",
    style: [(O as any).headControl, (O as any).close],
    variant: "ghost"
  }) : null, (e as any)[51] = L, (e as any)[52] = l, (e as any)[53] = b, (e as any)[54] = Me) : Me = (e as any)[54];
  let Ce: any;
  ((e as any)[55] as any) !== (g as any) || ((e as any)[56] as any) !== (l as any) || ((e as any)[57] as any) !== (p as any) || ((e as any)[58] as any) !== (f as any) || ((e as any)[59] as any) !== (C as any) ? (Ce = l ? ((n as any).jsx as any)(ds, {
    conversationId: g,
    isAnysphereUser: p,
    onChangeShowsNudges: Z,
    requestId: f,
    showsNudges: C
  }) : null, (e as any)[55] = g, (e as any)[56] = l, (e as any)[57] = p, (e as any)[58] = f, (e as any)[59] = C, (e as any)[60] = Ce) : Ce = (e as any)[60];
  let Ae: any;
  ((e as any)[61] as any) !== (l as any) ? (Ae = ({
    0: {
      className: "sand-47corl sand-10l6tqk sand-lqly2c sand-13fihh6 sand-437nxk sand-qjr0ry sand-g01cxk sand-uw3kh7 sand-4wkmsb sand-h86m8e sand-1e6nqfh"
    },
    1: {
      className: "sand-47corl sand-10l6tqk sand-lqly2c sand-437nxk sand-qjr0ry sand-uw3kh7 sand-4wkmsb sand-h86m8e sand-1e6nqfh sand-17y0mx6 sand-1hc1fzr"
    }
  } as any)[(!!l as any) << (0 as any)], (e as any)[61] = l, (e as any)[62] = Ae) : Ae = (e as any)[62];
  let ze: any;
  ((e as any)[63] as any) !== (Ae as any) ? (ze = ((n as any).jsx as any)("div", {
    "aria-hidden": !0,
    "data-voice-call-rule": "",
    ...Ae
  }), (e as any)[63] = Ae, (e as any)[64] = ze) : ze = (e as any)[64];
  let $e: any;
  ((e as any)[65] as any) !== (D as any) || ((e as any)[66] as any) !== (Ne as any) || ((e as any)[67] as any) !== (Me as any) || ((e as any)[68] as any) !== (Ce as any) || ((e as any)[69] as any) !== (ze as any) ? ($e = ((n as any).jsxs as any)(vs, {
    "data-voice-call-head": "",
    style: D,
    children: [Ne, Me, Ce, ze]
  }), (e as any)[65] = D, (e as any)[66] = Ne, (e as any)[67] = Me, (e as any)[68] = Ce, (e as any)[69] = ze, (e as any)[70] = $e) : $e = (e as any)[70];
  let Re: any;
  ((e as any)[71] as any) !== (N as any) ? (Re = (N as any) == (null as any) ? null : ((n as any).jsx as any)("div", {
    "data-voice-call-inset": "receipt",
    className: "sand-h8yej3 sand-9f619 sand-v54qhq sand-f7dkkf",
    children: N
  }), (e as any)[71] = N, (e as any)[72] = Re) : Re = (e as any)[72];
  const Ye: any = l ? void 0 : !0,
    us: string = "",
    Je: any = l ? void 0 : !0;
  let Ee: any;
  ((e as any)[73] as any) !== (l as any) ? (Ee = ({
    0: {
      className: "sand-1n2onr6 sand-rvj5dj sand-ihq33y sand-h8yej3 sand-193iq5w sand-euugli sand-b3r6kr sand-47corl sand-1qn9uv2 sand-4wkmsb sand-1vgdfw2 sand-1e6nqfh"
    },
    1: {
      className: "sand-1n2onr6 sand-rvj5dj sand-h8yej3 sand-193iq5w sand-euugli sand-b3r6kr sand-1qn9uv2 sand-4wkmsb sand-1vgdfw2 sand-1e6nqfh sand-1tu4anv sand-67bb7w"
    }
  } as any)[(!!l as any) << (0 as any)], (e as any)[73] = l, (e as any)[74] = Ee) : Ee = (e as any)[74];
  let Ie: any;
  ((e as any)[75] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ie = {
    className: "sand-2lwn1j sand-b3r6kr"
  }, (e as any)[75] = Ie) : Ie = (e as any)[75];
  let Oe: any;
  ((e as any)[76] as any) !== (l as any) || ((e as any)[77] as any) !== (G as any) ? (Oe = ({
    0: {
      className: "sand-96k8nx"
    },
    2: {
      className: "sand-96k8nx"
    },
    1: {
      className: "sand-1i80of2"
    },
    3: {
      className: "sand-1i80of2"
    }
  } as any)[((!!l as any) << (1 as any) as any) | ((!!(l && !G) as any) << (0 as any) as any)], (e as any)[76] = l, (e as any)[77] = G, (e as any)[78] = Oe) : Oe = (e as any)[78];
  let Te: any;
  ((e as any)[79] as any) !== (d as any) || ((e as any)[80] as any) !== (R as any) || ((e as any)[81] as any) !== (re as any) || ((e as any)[82] as any) !== (E as any) ? (Te = R && (d as any) !== (void 0 as any) && (re || E) ? ((n as any).jsx as any)("div", {
    "data-voice-call-full-summary": "",
    ...(Ze as any)((Pe as any).body2, (ps as any).regular, (O as any).fullSummary),
    children: d
  }) : null, (e as any)[79] = d, (e as any)[80] = R, (e as any)[81] = re, (e as any)[82] = E, (e as any)[83] = Te) : Te = (e as any)[83];
  const es: any = G ? ((n as any).jsx as any)("div", {
    "data-voice-call-inset": "receipt",
    "data-voice-call-transcript-frame": "",
    className: "sand-1n2onr6 sand-1anpbxc sand-h8yej3 sand-193iq5w sand-v54qhq sand-f7dkkf sand-9f619",
    children: ((n as any).jsx as any)(fs, {
      contentStyle: (O as any).transcriptBody,
      "data-voice-call-transcript-scroll": "",
      maxHeight: $s,
      onScrollStateChange: (j: any): any => {
        const {
            isAtBottom: me,
            isAtTop: ke
          }: any = j,
          De: any = (I as any).current;
        (De as any) != (null as any) && (((De as any).style as any).opacity = me ? "0" : "1");
        const He: any = (Q as any).current;
        (He as any) != (null as any) && (((He as any).style as any).opacity = ke ? "0" : "1");
      },
      overlay: ((n as any).jsxs as any)((n as any).Fragment, {
        children: [((n as any).jsx as any)("div", {
          "aria-hidden": !0,
          "data-voice-call-transcript-fade": "top",
          ref: Q,
          className: "sand-47corl sand-10l6tqk sand-1o0tod sand-tijo5x sand-1fgtraw sand-g01cxk sand-19991ni sand-4wkmsb sand-osayit sand-13vifvy sand-1xns1g9"
        }), ((n as any).jsx as any)("div", {
          "aria-hidden": !0,
          "data-voice-call-transcript-fade": "",
          ref: I,
          className: "sand-47corl sand-10l6tqk sand-1o0tod sand-tijo5x sand-1fgtraw sand-g01cxk sand-19991ni sand-4wkmsb sand-osayit sand-1ey2m1c sand-1nutzt5"
        })]
      }),
      rootStyle: (O as any).transcript,
      scrollbarVisibility: "hover",
      width: "100%",
      children: ((ae as any).map as any)((j: any): any => ((j as any).kind as any) === ("turn" as any) ? ((n as any).jsx as any)(Ms, {
        nest: "card",
        turn: (j as any).turn
      }, ((j as any).turn as any).id) : ((n as any).jsx as any)(is, {
        nudge: (j as any).nudge,
        startedAtMs: v
      }, ((j as any).nudge as any).id))
    })
  }) : null;
  let Le: any;
  ((e as any)[84] as any) !== (Oe as any) || ((e as any)[85] as any) !== (Te as any) || ((e as any)[86] as any) !== (es as any) ? (Le = ((n as any).jsxs as any)("div", {
    ...Oe,
    children: [Te, es]
  }), (e as any)[84] = Oe, (e as any)[85] = Te, (e as any)[86] = es, (e as any)[87] = Le) : Le = (e as any)[87];
  let Ve: any;
  ((e as any)[88] as any) !== (Ie as any) || ((e as any)[89] as any) !== (Le as any) ? (Ve = ((n as any).jsx as any)("div", {
    ...Ie,
    children: Le
  }), (e as any)[88] = Ie, (e as any)[89] = Le, (e as any)[90] = Ve) : Ve = (e as any)[90];
  let Fe: any;
  ((e as any)[91] as any) !== (Ye as any) || ((e as any)[92] as any) !== (Je as any) || ((e as any)[93] as any) !== (Ee as any) || ((e as any)[94] as any) !== (Ve as any) ? (Fe = ((n as any).jsx as any)("div", {
    "aria-hidden": Ye,
    "data-voice-call-transcript": us,
    inert: Je,
    ...Ee,
    children: Ve
  }), (e as any)[91] = Ye, (e as any)[92] = Je, (e as any)[93] = Ee, (e as any)[94] = Ve, (e as any)[95] = Fe) : Fe = (e as any)[95];
  let Ke: any;
  return ((e as any)[96] as any) !== (pe as any) || ((e as any)[97] as any) !== (J as any) || ((e as any)[98] as any) !== (V as any) || ((e as any)[99] as any) !== (F as any) || ((e as any)[100] as any) !== ($e as any) || ((e as any)[101] as any) !== (Re as any) || ((e as any)[102] as any) !== (Fe as any) ? (Ke = ((n as any).jsxs as any)("div", {
    "data-voice-call-receipt": ve,
    "data-voice-call-column": ue,
    "data-voice-call-sizing": be,
    "data-expanded": J,
    ref: pe,
    ...V,
    children: [F, $e, Re, Fe]
  }), (e as any)[96] = pe, (e as any)[97] = J, (e as any)[98] = V, (e as any)[99] = F, (e as any)[100] = $e, (e as any)[101] = Re, (e as any)[102] = Fe, (e as any)[103] = Ke) : Ke = (e as any)[103], Ke;
}
const Ls: any = {
    id: "KXd+dq"
  },
  Vs: any = {
    error: {
      kMwMTN: "sand-6rl5ky",
      $$css: !0
    }
  },
  Fs: any = {
    thumbs: null,
    tray: null,
    commentOpen: !1
  };
function rs(this: any, o: any): any {
  (rs as any).d = 1362;
  const e: any = ((ye as any).c as any)(97),
    {
      onSubmit: s,
      children: t
    }: any = o,
    {
      _: d
    }: any = (We as any)(),
    {
      _: a
    }: any = (We as any)(),
    u: any = ((T as any).useRef as any)(null);
  let r: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = {
    kind: "rating"
  }, (e as any)[0] = r) : r = (e as any)[0];
  const [c, i]: any = ((T as any).useState as any)(r),
    [w, l]: any = ((T as any).useState as any)(null),
    [h, S]: any = ((T as any).useState as any)(""),
    [y, b]: any = ((T as any).useState as any)(null);
  let x: any;
  ((e as any)[1] as any) !== (d as any) ? (x = (m: any): any => {
    (i as any)({
      kind: "detail",
      rating: m
    }), (b as any)((d as any)(Ls));
  }, (e as any)[1] = d, (e as any)[2] = x) : x = (e as any)[2];
  const q: any = x;
  let v: any;
  ((e as any)[3] as any) !== (s as any) || ((e as any)[4] as any) !== (q as any) ? (v = (m: any, ge: any): any => {
    (s as any) != (null as any) && ((i as any)({
      kind: "sending",
      rating: m
    }), (b as any)(null), (((s as any)(m, ge) as any).then as any)((fe: any): any => {
      if ((fe as any).ok) {
        (l as any)(m), (i as any)({
          kind: "rating"
        });
        return;
      }
      (q as any)(m);
    }, (fe: any): any => {
      (js as any)(fe, {
        tags: {
          sand_area: "voice-call-feedback"
        }
      }), (q as any)(m);
    }));
  }, (e as any)[3] = s, (e as any)[4] = q, (e as any)[5] = v) : v = (e as any)[5];
  const g: any = v,
    f: any = ((c as any).kind as any) === ("sending" as any),
    p: any = ((c as any).kind as any) === ("rating" as any) ? w : (c as any).rating,
    k: any = ((c as any).kind as any) !== ("rating" as any),
    N: any = ((T as any).useRef as any)(!1);
  let P: any;
  ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (P = (): any => {
    (N as any).current && ((N as any).current = !1, (u as any).current?.focus());
  }, (e as any)[6] = P) : P = (e as any)[6], (ms as any)(P);
  let L: any;
  ((e as any)[7] as any) !== ((c as any).kind as any) || ((e as any)[8] as any) !== ((c as any).rating as any) ? (L = (m: any): any => {
    if ((b as any)(null), ((c as any).kind as any) !== ("rating" as any) && ((c as any).rating as any) === (m as any)) {
      (i as any)({
        kind: "rating"
      });
      return;
    }
    (N as any).current = !0, (i as any)({
      kind: "detail",
      rating: m
    });
  }, (e as any)[7] = (c as any).kind, (e as any)[8] = (c as any).rating, (e as any)[9] = L) : L = (e as any)[9];
  const C: any = L;
  if ((s as any) == (null as any)) {
    let m: any;
    return ((e as any)[10] as any) !== (t as any) ? (m = (t as any)(Fs), (e as any)[10] = t, (e as any)[11] = m) : m = (e as any)[11], m;
  }
  let Z: any;
  ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Z = {
    className: "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-195vfkc"
  }, (e as any)[12] = Z) : Z = (e as any)[12];
  let A: any;
  ((e as any)[13] as any) !== (a as any) ? (A = (a as any)({
    id: "KacE/L"
  }), (e as any)[13] = a, (e as any)[14] = A) : A = (e as any)[14];
  let z: any;
  ((e as any)[15] as any) !== (a as any) ? (z = (a as any)({
    id: "OEEQKT"
  }), (e as any)[15] = a, (e as any)[16] = z) : z = (e as any)[16];
  const M: any = (p as any) === ("up" as any);
  let E: any;
  ((e as any)[17] as any) !== (C as any) ? (E = (m: any): any => {
    ((m as any).stopPropagation as any)(), (C as any)("up");
  }, (e as any)[17] = C, (e as any)[18] = E) : E = (e as any)[18];
  let $: any;
  ((e as any)[19] as any) !== (f as any) || ((e as any)[20] as any) !== (E as any) || ((e as any)[21] as any) !== (z as any) || ((e as any)[22] as any) !== (M as any) ? ($ = ((n as any).jsx as any)(Qe, {
    "aria-label": z,
    disabled: f,
    icon: "thumbs-up",
    isSelected: M,
    onClick: E,
    shape: "circle",
    size: "xs",
    variant: "ghost"
  }), (e as any)[19] = f, (e as any)[20] = E, (e as any)[21] = z, (e as any)[22] = M, (e as any)[23] = $) : $ = (e as any)[23];
  let I: any;
  ((e as any)[24] as any) !== (a as any) ? (I = (a as any)({
    id: "+f5Tkb"
  }), (e as any)[24] = a, (e as any)[25] = I) : I = (e as any)[25];
  const Q: any = (p as any) === ("down" as any);
  let se: any;
  ((e as any)[26] as any) !== (C as any) ? (se = (m: any): any => {
    ((m as any).stopPropagation as any)(), (C as any)("down");
  }, (e as any)[26] = C, (e as any)[27] = se) : se = (e as any)[27];
  let B: any;
  ((e as any)[28] as any) !== (f as any) || ((e as any)[29] as any) !== (I as any) || ((e as any)[30] as any) !== (Q as any) || ((e as any)[31] as any) !== (se as any) ? (B = ((n as any).jsx as any)(Qe, {
    "aria-label": I,
    disabled: f,
    icon: "thumbs-down",
    isSelected: Q,
    onClick: se,
    shape: "circle",
    size: "xs",
    variant: "ghost"
  }), (e as any)[28] = f, (e as any)[29] = I, (e as any)[30] = Q, (e as any)[31] = se, (e as any)[32] = B) : B = (e as any)[32];
  let de: any;
  ((e as any)[33] as any) !== ($ as any) || ((e as any)[34] as any) !== (B as any) || ((e as any)[35] as any) !== (A as any) ? (de = ((n as any).jsxs as any)("span", {
    ...Z,
    "aria-label": A,
    role: "group",
    children: [$, B]
  }), (e as any)[33] = $, (e as any)[34] = B, (e as any)[35] = A, (e as any)[36] = de) : de = (e as any)[36];
  const ie: any = k ? void 0 : !0,
    pe: any = k ? "" : void 0,
    ce: any = k ? void 0 : !0;
  let Y: any;
  ((e as any)[37] as any) !== (k as any) ? (Y = ({
    0: {
      className: "sand-rvj5dj sand-ihq33y sand-h8yej3 sand-euugli sand-2lwn1j sand-b3r6kr sand-47corl sand-1qn9uv2 sand-4wkmsb sand-1da2sx9 sand-1e6nqfh"
    },
    1: {
      className: "sand-rvj5dj sand-h8yej3 sand-euugli sand-2lwn1j sand-b3r6kr sand-1qn9uv2 sand-4wkmsb sand-1da2sx9 sand-1e6nqfh sand-1tu4anv sand-67bb7w"
    }
  } as any)[(!!k as any) << (0 as any)], (e as any)[37] = k, (e as any)[38] = Y) : Y = (e as any)[38];
  let R: any;
  ((e as any)[39] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (R = {
    className: "sand-2lwn1j sand-b3r6kr"
  }, (e as any)[39] = R) : R = (e as any)[39];
  let _: any;
  ((e as any)[40] as any) !== (k as any) ? (_ = ({
    0: {
      className: "sand-1y1aw1k sand-1v49fql sand-11xpdln sand-4wkmsb sand-1da2sx9 sand-1e6nqfh"
    },
    1: {
      className: "sand-1y1aw1k sand-11xpdln sand-4wkmsb sand-1da2sx9 sand-1e6nqfh sand-nn1q72"
    }
  } as any)[(!!k as any) << (0 as any)], (e as any)[40] = k, (e as any)[41] = _) : _ = (e as any)[41];
  let ne: any, te: any;
  ((e as any)[42] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ne = {
    className: "sand-78zum5 sand-dt5ytf sand-167g77z"
  }, te = {
    className: "sand-h8yej3 sand-bktkl8 sand-tt52l0 sand-9f619 sand-1y1aw1k sand-2vl965 sand-wib8y2 sand-e2zdcy sand-ur7f20 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-tyxrsu sand-jb2p0i sand-11wthnw sand-37zpob sand-1t137rt"
  }, (e as any)[42] = ne, (e as any)[43] = te) : (ne = (e as any)[42], te = (e as any)[43]);
  let W: any;
  ((e as any)[44] as any) !== (a as any) ? (W = (a as any)({
    id: "vYOUOk"
  }), (e as any)[44] = a, (e as any)[45] = W) : W = (e as any)[45];
  let re: any;
  ((e as any)[46] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (re = (m: any): any => (S as any)(((m as any).currentTarget as any).value), (e as any)[46] = re) : re = (e as any)[46];
  let X: any;
  ((e as any)[47] as any) !== (h as any) || ((e as any)[48] as any) !== (f as any) || ((e as any)[49] as any) !== (p as any) || ((e as any)[50] as any) !== (g as any) ? (X = (m: any): any => {
    ((m as any).key as any) !== ("Enter" as any) || !((m as any).metaKey || (m as any).ctrlKey) || (((m as any).preventDefault as any)(), ((m as any).stopPropagation as any)(), !((p as any) === (null as any) || f) && (g as any)(p, h));
  }, (e as any)[47] = h, (e as any)[48] = f, (e as any)[49] = p, (e as any)[50] = g, (e as any)[51] = X) : X = (e as any)[51];
  const oe: any = k ? 0 : -1;
  let ae: any;
  ((e as any)[52] as any) !== (h as any) || ((e as any)[53] as any) !== (f as any) || ((e as any)[54] as any) !== (W as any) || ((e as any)[55] as any) !== (X as any) || ((e as any)[56] as any) !== (oe as any) ? (ae = ((n as any).jsx as any)("textarea", {
    ...te,
    "aria-label": W,
    disabled: f,
    maxLength: xs,
    onChange: re,
    onKeyDown: X,
    ref: u,
    tabIndex: oe,
    value: h
  }), (e as any)[52] = h, (e as any)[53] = f, (e as any)[54] = W, (e as any)[55] = X, (e as any)[56] = oe, (e as any)[57] = ae) : ae = (e as any)[57];
  let G: any;
  ((e as any)[58] as any) !== (y as any) ? (G = (y as any) === (null as any) ? null : ((n as any).jsx as any)("span", {
    ...(Ze as any)((Pe as any).label, (Vs as any).error),
    role: "alert",
    children: y
  }), (e as any)[58] = y, (e as any)[59] = G) : G = (e as any)[59];
  let ve: any;
  ((e as any)[60] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ve = {
    className: "sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-17d4w8g"
  }, (e as any)[60] = ve) : ve = (e as any)[60];
  let ue: any;
  ((e as any)[61] as any) !== (p as any) || ((e as any)[62] as any) !== (g as any) ? (ue = (): any => {
    (p as any) !== (null as any) && (g as any)(p, "");
  }, (e as any)[61] = p, (e as any)[62] = g, (e as any)[63] = ue) : ue = (e as any)[63];
  let be: any;
  ((e as any)[64] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (be = ((n as any).jsx as any)(Xe, {
    id: "RBX7l+"
  }), (e as any)[64] = be) : be = (e as any)[64];
  let J: any;
  ((e as any)[65] as any) !== (f as any) || ((e as any)[66] as any) !== (ue as any) ? (J = ((n as any).jsx as any)(ns, {
    disabled: f,
    onClick: ue,
    size: "sm",
    variant: "ghost",
    children: be
  }), (e as any)[65] = f, (e as any)[66] = ue, (e as any)[67] = J) : J = (e as any)[67];
  let V: any;
  ((e as any)[68] as any) !== (h as any) || ((e as any)[69] as any) !== (p as any) || ((e as any)[70] as any) !== (g as any) ? (V = (): any => {
    (p as any) !== (null as any) && (g as any)(p, h);
  }, (e as any)[68] = h, (e as any)[69] = p, (e as any)[70] = g, (e as any)[71] = V) : V = (e as any)[71];
  let K: any;
  ((e as any)[72] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (K = ((n as any).jsx as any)(Xe, {
    id: "JlFcis"
  }), (e as any)[72] = K) : K = (e as any)[72];
  let F: any;
  ((e as any)[73] as any) !== (f as any) || ((e as any)[74] as any) !== (V as any) ? (F = ((n as any).jsx as any)(ns, {
    disabled: f,
    onClick: V,
    size: "sm",
    variant: "primary",
    children: K
  }), (e as any)[73] = f, (e as any)[74] = V, (e as any)[75] = F) : F = (e as any)[75];
  let ee: any;
  ((e as any)[76] as any) !== (J as any) || ((e as any)[77] as any) !== (F as any) ? (ee = ((n as any).jsxs as any)("div", {
    ...ve,
    children: [J, F]
  }), (e as any)[76] = J, (e as any)[77] = F, (e as any)[78] = ee) : ee = (e as any)[78];
  let D: any;
  ((e as any)[79] as any) !== (ae as any) || ((e as any)[80] as any) !== (G as any) || ((e as any)[81] as any) !== (ee as any) ? (D = ((n as any).jsxs as any)("div", {
    ...ne,
    children: [ae, G, ee]
  }), (e as any)[79] = ae, (e as any)[80] = G, (e as any)[81] = ee, (e as any)[82] = D) : D = (e as any)[82];
  let H: any;
  ((e as any)[83] as any) !== (_ as any) || ((e as any)[84] as any) !== (D as any) ? (H = ((n as any).jsx as any)("div", {
    ...R,
    children: ((n as any).jsx as any)("div", {
      ..._,
      children: D
    })
  }), (e as any)[83] = _, (e as any)[84] = D, (e as any)[85] = H) : H = (e as any)[85];
  let U: any;
  ((e as any)[86] as any) !== (ie as any) || ((e as any)[87] as any) !== (pe as any) || ((e as any)[88] as any) !== (ce as any) || ((e as any)[89] as any) !== (Y as any) || ((e as any)[90] as any) !== (H as any) ? (U = ((n as any).jsx as any)("div", {
    "aria-hidden": ie,
    "data-open": pe,
    "data-voice-call-feedback": "",
    "data-voice-call-feedback-detail": "",
    inert: ce,
    ...Y,
    children: H
  }), (e as any)[86] = ie, (e as any)[87] = pe, (e as any)[88] = ce, (e as any)[89] = Y, (e as any)[90] = H, (e as any)[91] = U) : U = (e as any)[91];
  let le: any;
  return ((e as any)[92] as any) !== (t as any) || ((e as any)[93] as any) !== (k as any) || ((e as any)[94] as any) !== (de as any) || ((e as any)[95] as any) !== (U as any) ? (le = (t as any)({
    commentOpen: k,
    thumbs: de,
    tray: U
  }), (e as any)[92] = t, (e as any)[93] = k, (e as any)[94] = de, (e as any)[95] = U, (e as any)[96] = le) : le = (e as any)[96], le;
}
function os(this: any, o: any): any {
  (os as any).d = 1361;
  const e: any = ((ye as any).c as any)(7),
    {
      agentId: s,
      callId: t,
      children: d
    }: any = o,
    a: any = (ls as any)();
  let u: any;
  ((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (t as any) || ((e as any)[2] as any) !== (a as any) ? (u = (s as any) == (null as any) ? null : (c: any, i: any): any => ((a as any).submitFeedback as any)({
    agentId: s,
    callId: t,
    rating: c,
    ...(((((i as any).trim as any)() as any).length as any) === (0 as any) ? {} : {
      comment: i
    })
  }), (e as any)[0] = s, (e as any)[1] = t, (e as any)[2] = a, (e as any)[3] = u) : u = (e as any)[3];
  let r: any;
  return ((e as any)[4] as any) !== (d as any) || ((e as any)[5] as any) !== (u as any) ? (r = ((n as any).jsx as any)(rs, {
    onSubmit: u,
    children: d
  }), (e as any)[4] = d, (e as any)[5] = u, (e as any)[6] = r) : r = (e as any)[6], r;
}
function Ds(this: any, o: any, e: any): any {
  const s: any = ((ye as any).c as any)(10),
    t: any = (ls as any)(),
    d: any = (_s as any)((t as any).records);
  let a: any;
  ((s as any)[0] as any) !== (o as any) || ((s as any)[1] as any) !== (d as any) || ((s as any)[2] as any) !== (e as any) ? (a = (o as any) == (null as any) ? null : (Ns as any)(d, {
    agentId: o,
    callId: e
  }), (s as any)[0] = o, (s as any)[1] = d, (s as any)[2] = e, (s as any)[3] = a) : a = (s as any)[3];
  const u: any = a;
  let r: any;
  ((s as any)[4] as any) !== (o as any) || ((s as any)[5] as any) !== (e as any) || ((s as any)[6] as any) !== (t as any) ? (r = (): any => {
    (o as any) == (null as any) || ((o as any).length as any) === (0 as any) || ((t as any).loadRecord as any)({
      agentId: o,
      callId: e
    });
  }, (s as any)[4] = o, (s as any)[5] = e, (s as any)[6] = t, (s as any)[7] = r) : r = (s as any)[7];
  const c: any = (hs as any)(r);
  let i: any;
  return ((s as any)[8] as any) !== (c as any) ? (i = (): any => ((c as any)(), Ps), (s as any)[8] = c, (s as any)[9] = i) : i = (s as any)[9], (ys as any)(i), u;
}
function Ps(this: any): any {}
function Bs(this: any, o: any): any {
  (Bs as any).d = 1358;
  const e: any = ((ye as any).c as any)(37),
    {
      entry: s,
      adjacency: t,
      agentId: d,
      onHold: a
    }: any = o,
    {
      _: u
    }: any = (We as any)(),
    r: any = (ws as any)(),
    c: any = (qs as any)(),
    i: any = (Ss as any)(),
    w: any = (Cs as any)(((s as any).call as any).callId),
    [l, h]: any = ((T as any).useState as any)(!1),
    S: any = d ?? c,
    y: any = (Ds as any)(S, ((s as any).call as any).callId),
    b: any = y?.realtimeConversationId ?? ((s as any).call as any).realtimeConversationId ?? null,
    x: any = y?.agentRequestId ?? ((s as any).call as any).agentRequestId ?? null;
  let q: any;
  ((e as any)[0] as any) !== ((s as any).call as any) ? (q = ((Be as any).hasNoDuration as any)((s as any).call), (e as any)[0] = (s as any).call, (e as any)[1] = q) : q = (e as any)[1];
  const v: any = q;
  let g: any;
  ((e as any)[2] as any) !== (u as any) || ((e as any)[3] as any) !== (v as any) ? (g = (u as any)(v ? {
    id: "LBLqth"
  } : {
    id: "MAnFFY"
  }), (e as any)[2] = u, (e as any)[3] = v, (e as any)[4] = g) : g = (e as any)[4];
  const f: any = g;
  let p: any;
  ((e as any)[5] as any) !== (((s as any).call as any).durationMs as any) || ((e as any)[6] as any) !== (v as any) ? (p = v ? null : ((Be as any).formatCardDuration as any)(((s as any).call as any).durationMs), (e as any)[5] = ((s as any).call as any).durationMs, (e as any)[6] = v, (e as any)[7] = p) : p = (e as any)[7];
  const k: any = p;
  let N: any;
  ((e as any)[8] as any) !== ((s as any).conversation?.turns as any) || ((e as any)[9] as any) !== (y?.turns as any) ? (N = (s as any).conversation?.turns ?? y?.turns ?? [], (e as any)[8] = (s as any).conversation?.turns, (e as any)[9] = y?.turns, (e as any)[10] = N) : N = (e as any)[10];
  const P: any = N;
  let L: any;
  ((e as any)[11] as any) !== ((s as any).conversation?.nudges as any) || ((e as any)[12] as any) !== (y?.nudges as any) ? (L = (s as any).conversation?.nudges ?? y?.nudges ?? [], (e as any)[11] = (s as any).conversation?.nudges, (e as any)[12] = y?.nudges, (e as any)[13] = L) : L = (e as any)[13];
  const C: any = L;
  if (!r) return null;
  const Z: any = v || w ? null : S;
  let A: any;
  ((e as any)[14] as any) !== ((i as any).isAnysphereUser as any) || ((e as any)[15] as any) !== (b as any) || ((e as any)[16] as any) !== (k as any) || ((e as any)[17] as any) !== (((s as any).call as any).description as any) || ((e as any)[18] as any) !== (((s as any).call as any).durationMs as any) || ((e as any)[19] as any) !== (((s as any).call as any).endedAtMs as any) || ((e as any)[20] as any) !== (l as any) || ((e as any)[21] as any) !== (C as any) || ((e as any)[22] as any) !== (a as any) || ((e as any)[23] as any) !== (x as any) || ((e as any)[24] as any) !== (f as any) || ((e as any)[25] as any) !== (P as any) ? (A = (Q: any): any => ((n as any).jsx as any)(cs, {
    commentOpen: (Q as any).commentOpen,
    conversationId: b,
    description: ((s as any).call as any).description,
    duration: k,
    expanded: l,
    isAnysphereUser: (i as any).isAnysphereUser,
    nudges: C,
    onToggle: (): any => {
      l || a?.(), (h as any)(Ws);
    },
    requestId: x,
    startedAtMs: (((s as any).call as any).endedAtMs as any) - (((s as any).call as any).durationMs as any),
    thumbs: (Q as any).thumbs,
    title: f,
    tray: (Q as any).tray,
    turns: P
  }), (e as any)[14] = (i as any).isAnysphereUser, (e as any)[15] = b, (e as any)[16] = k, (e as any)[17] = ((s as any).call as any).description, (e as any)[18] = ((s as any).call as any).durationMs, (e as any)[19] = ((s as any).call as any).endedAtMs, (e as any)[20] = l, (e as any)[21] = C, (e as any)[22] = a, (e as any)[23] = x, (e as any)[24] = f, (e as any)[25] = P, (e as any)[26] = A) : A = (e as any)[26];
  const z: any = A;
  let M: any;
  ((e as any)[27] as any) !== ((t as any).isGroupStart as any) ? (M = ({
    0: {
      className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-amitd3 sand-h8yej3 sand-1xl41tn sand-euugli sand-167g77z"
    },
    1: {
      className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-amitd3 sand-h8yej3 sand-1xl41tn sand-euugli sand-167g77z sand-19snzy6 sand-1sl1sun"
    }
  } as any)[(!!(t as any).isGroupStart as any) << (0 as any)], (e as any)[27] = (t as any).isGroupStart, (e as any)[28] = M) : M = (e as any)[28];
  const E: any = (t as any).isGroupStart || void 0;
  let $: any;
  ((e as any)[29] as any) !== (((s as any).call as any).callId as any) || ((e as any)[30] as any) !== (Z as any) || ((e as any)[31] as any) !== (z as any) ? ($ = ((n as any).jsx as any)(os, {
    agentId: Z,
    callId: ((s as any).call as any).callId,
    children: z
  }), (e as any)[29] = ((s as any).call as any).callId, (e as any)[30] = Z, (e as any)[31] = z, (e as any)[32] = $) : $ = (e as any)[32];
  let I: any;
  return ((e as any)[33] as any) !== (M as any) || ((e as any)[34] as any) !== (E as any) || ((e as any)[35] as any) !== ($ as any) ? (I = ((n as any).jsx as any)("div", {
    ...M,
    "data-group-start": E,
    "data-voice-call-stack": "row",
    children: $
  }), (e as any)[33] = M, (e as any)[34] = E, (e as any)[35] = $, (e as any)[36] = I) : I = (e as any)[36], I;
}
function Ws(this: any, o: any): any {
  return !o;
}
export { Bs as default };
//# debugId=7d2a5790-fc84-43ea-8a8f-7a00f1a07d46
