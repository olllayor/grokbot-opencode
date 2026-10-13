declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "31000fa5-4eb5-4def-8ee6-3c564a5925df", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-31000fa5-4eb5-4def-8ee6-3c564a5925df");
  } catch (e: any) {}
} as any)();
import { c as ss, u as ns, r as U, j as n, p as as } from "./index.eager-vendor-Qbf9YA6n.js";
import { aZ as ts } from "./index.eager-platform-Dcfeegfw.js";
import { r as E, aK as ds, dm as ls, dn as is, b7 as os, aU as Z } from "./index.eager-app-Cj5f8Gby.js";
import { W as Y, bb as cs, bc as rs, D as ms, bd as fs, be as Q } from "./index-ZYxf-aBb.js";
import { S as us } from "./chunk-pane-header-DzXd4Vgr.js";
import "./index.eager-common-CdCvBQNJ.js";
const V: any = {
  dialog: {
    kzqmXN: "sand-qzs4y3",
    ks0D6T: "sand-1gy1zxj",
    kmVPX3: "sand-1717udv",
    kWkggS: "sand-vvtkfd",
    $$css: !0
  },
  navItem: {
    kB7OPa: "sand-9f619",
    k1xSpc: "sand-78zum5",
    kGNEyG: "sand-6s0dn4",
    kOIVth: "sand-mmi0ta",
    kzqmXN: "sand-h8yej3",
    kLKAdn: "sand-m7lytj",
    kwRFfy: "sand-rw5ot4",
    kGO01o: "sand-1ykpatu",
    kZCmMZ: "sand-7coems",
    kMzoRj: "sand-c342km",
    ksu8eU: "sand-ng3xce",
    kaIpWk: "sand-ur7f20",
    kMwMTN: "sand-1wd3ewq",
    kMv6JI: "sand-jb2p0i",
    kGuDYH: "sand-11wthnw",
    k9WMMc: "sand-1yc453h",
    kkrTdU: "sand-1ypdohk",
    k1ekBW: "sand-s2xxs2",
    kIyJzY: "sand-3m1ukm",
    kAMwcw: "sand-11udeeo",
    k3XXqK: "sand-1t137rt sand-9v5kkp",
    kMeerF: "sand-1k57tk5 sand-784prv",
    kjBf7l: "sand-1uczgqu sand-1725o6r",
    kInvED: "sand-1wfwxd8 sand-1bqaal",
    $$css: !0
  },
  navItemActive: {
    kWkggS: "sand-luhinc",
    kMwMTN: "sand-1wd3ewq",
    $$css: !0
  }
};
function es(this: any, H: any): any {
  (es as any).d = 1334;
  const s: any = ((ss as any).c as any)(59),
    {
      sections: f,
      activeSection: t,
      presentation: e,
      boxActionError: i,
      onSelectSection: u,
      onClose: l,
      children: o
    }: any = H,
    {
      i18n: d,
      _: a
    }: any = (ns as any)(),
    k: any = ((U as any).useRef as any)(null),
    [c, r]: any = ((U as any).useState as any)(null),
    [p, I]: any = ((U as any).useState as any)(i);
  (i as any) !== (p as any) && ((I as any)(i), (i as any) != (null as any) && (r as any)({
    kind: "error",
    text: i
  }));
  let $: any;
  ((s as any)[0] as any) !== (l as any) ? ($ = (m: any): any => {
    m || (l as any)();
  }, (s as any)[0] = l, (s as any)[1] = $) : $ = (s as any)[1];
  const J: any = $;
  let T: any;
  ((s as any)[2] as any) !== (u as any) ? (T = (m: any): any => {
    (r as any)(null), (u as any)(m);
  }, (s as any)[2] = u, (s as any)[3] = T) : T = (s as any)[3];
  const M: any = T;
  let O: any;
  ((s as any)[4] as any) !== ((t as any).label as any) || ((s as any)[5] as any) !== (d as any) ? (O = ((d as any)._ as any)((t as any).label), (s as any)[4] = (t as any).label, (s as any)[5] = d, (s as any)[6] = O) : O = (s as any)[6];
  const K: any = O,
    P: any = `sand-settings-panel-${(t as any).id}`,
    b: any = `${P}-heading`;
  let y: any;
  ((s as any)[7] as any) !== (a as any) ? (y = (a as any)({
    id: "0+WgJu"
  }), (s as any)[7] = a, (s as any)[8] = y) : y = (s as any)[8];
  let R: any;
  ((s as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (R = (E as any)("sand-settings-layout", "sand-9f619 sand-78zum5 sand-z03ioa sand-2lwn1j"), (s as any)[9] = R) : R = (s as any)[9];
  let g: any;
  ((s as any)[10] as any) !== (a as any) ? (g = (a as any)({
    id: "y1t8bQ"
  }), (s as any)[10] = a, (s as any)[11] = g) : g = (s as any)[11];
  let W: any;
  ((s as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (W = (E as any)("sand-settings-nav", "sand-9f619 sand-78zum5 sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-dt5ytf sand-195vfkc sand-tqaf1t sand-yamay9 sand-pdmqnj sand-1l90r2v sand-1g0dm76 sand-128c8uf sand-18b5jzi sand-5q6521 sand-s6r99b"), (s as any)[12] = W) : W = (s as any)[12];
  let h: any;
  if (((s as any)[13] as any) !== ((t as any).id as any) || ((s as any)[14] as any) !== (d as any) || ((s as any)[15] as any) !== (f as any) || ((s as any)[16] as any) !== (M as any)) {
    let m: any;
    ((s as any)[18] as any) !== ((t as any).id as any) || ((s as any)[19] as any) !== (d as any) || ((s as any)[20] as any) !== (M as any) ? (m = (A: any): any => {
      const C: any = ((A as any).id as any) === ((t as any).id as any);
      return ((n as any).jsxs as any)("button", {
        "aria-controls": C ? `sand-settings-panel-${(A as any).id}` : void 0,
        "aria-current": C ? "page" : void 0,
        className: (E as any)("sand-settings-nav__item", ((as as any)((V as any).navItem, (ds as any).interactive, C && (V as any).navItemActive) as any).className),
        "data-active": C || void 0,
        onClick: (): any => (M as any)(A),
        type: "button",
        children: [((n as any).jsx as any)(Y, {
          className: (({
            0: {
              className: "sand-9f619 sand-1wd3ewq"
            },
            1: {
              className: "sand-9f619 sand-1wd3ewq"
            }
          } as any)[(!!C as any) << (0 as any)] as any).className ?? "",
          name: (A as any).icon,
          size: 15
        }), ((n as any).jsx as any)("span", {
          children: ((d as any)._ as any)((A as any).label)
        })]
      }, (A as any).id);
    }, (s as any)[18] = (t as any).id, (s as any)[19] = d, (s as any)[20] = M, (s as any)[21] = m) : m = (s as any)[21], h = ((f as any).map as any)(m), (s as any)[13] = (t as any).id, (s as any)[14] = d, (s as any)[15] = f, (s as any)[16] = M, (s as any)[17] = h;
  } else h = (s as any)[17];
  let j: any;
  ((s as any)[22] as any) !== (g as any) || ((s as any)[23] as any) !== (h as any) ? (j = ((n as any).jsx as any)("nav", {
    "aria-label": g,
    className: W,
    children: h
  }), (s as any)[22] = g, (s as any)[23] = h, (s as any)[24] = j) : j = (s as any)[24];
  let B: any;
  ((s as any)[25] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (B = (E as any)("sand-settings-panel", "sand-9f619 sand-1n2onr6 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-dt5ytf sand-euugli"), (s as any)[25] = B) : B = (s as any)[25];
  let v: any;
  ((s as any)[26] as any) !== (a as any) ? (v = (a as any)({
    id: "yz7wBu"
  }), (s as any)[26] = a, (s as any)[27] = v) : v = (s as any)[27];
  let D: any;
  ((s as any)[28] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (D = (E as any)("sand-settings-panel__close", "sand-jyslct sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-9f619 sand-mjrt60 sand-t8t6p sand-ma39wp sand-phwom3 sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-972fbf sand-1ejq31n sand-1b4hy2t sand-10w94by sand-18oe1m7 sand-1273586 sand-1qhh985 sand-1sy0etr sand-1tnzt7h sand-14e42zd sand-stzfhl sand-1mi4oqr sand-1i4c3av sand-jb2p0i sand-1qlqyl8 sand-1pd3egz sand-15bjb6t sand-jbqb8w sand-maxl8c sand-4b2ntj sand-1abnqxm sand-1ypdohk sand-clmvi0 sand-m9ww9a sand-1t137rt sand-9v5kkp sand-1uczgqu sand-4dbuwk sand-1jioewy sand-14yj86l sand-ggy1nq sand-1oy24xj sand-g3p6pi sand-6ekqhr sand-1c071of sand-10l6tqk sand-1eu8d0j sand-o2ifbc sand-zkaem6"), (s as any)[28] = D) : D = (s as any)[28];
  let G: any;
  ((s as any)[29] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (G = ((n as any).jsx as any)(Y, {
    "aria-hidden": "true",
    name: "close",
    size: "base",
    variant: "outline"
  }), (s as any)[29] = G) : G = (s as any)[29];
  let x: any;
  ((s as any)[30] as any) !== (l as any) || ((s as any)[31] as any) !== (v as any) ? (x = ((n as any).jsx as any)("button", {
    "aria-label": v,
    className: D,
    onClick: l,
    type: "button",
    children: G
  }), (s as any)[30] = l, (s as any)[31] = v, (s as any)[32] = x) : x = (s as any)[32];
  let S: any;
  ((s as any)[33] as any) !== (b as any) || ((s as any)[34] as any) !== (K as any) ? (S = ((n as any).jsx as any)(us, {
    headingId: b,
    insetTitle: !0,
    title: K
  }), (s as any)[33] = b, (s as any)[34] = K, (s as any)[35] = S) : S = (s as any)[35];
  let L: any;
  ((s as any)[36] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (L = (E as any)("sand-settings-panel__body", "sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-dt5ytf sand-2lwn1j sand-b3r6kr"), (s as any)[36] = L) : L = (s as any)[36];
  let N: any;
  ((s as any)[37] as any) !== (o as any) ? (N = ((n as any).jsx as any)("div", {
    className: L,
    children: ((n as any).jsx as any)(cs, {
      value: r,
      children: o
    })
  }), (s as any)[37] = o, (s as any)[38] = N) : N = (s as any)[38];
  let X: any;
  ((s as any)[39] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (X = (): any => (r as any)(null), (s as any)[39] = X) : X = (s as any)[39];
  let w: any;
  ((s as any)[40] as any) !== (c as any) ? (w = ((n as any).jsx as any)(rs, {
    notice: c,
    onDismiss: X
  }), (s as any)[40] = c, (s as any)[41] = w) : w = (s as any)[41];
  let z: any;
  ((s as any)[42] as any) !== (b as any) || ((s as any)[43] as any) !== (P as any) || ((s as any)[44] as any) !== (x as any) || ((s as any)[45] as any) !== (S as any) || ((s as any)[46] as any) !== (N as any) || ((s as any)[47] as any) !== (w as any) ? (z = ((n as any).jsxs as any)("section", {
    "aria-labelledby": b,
    className: B,
    id: P,
    children: [x, S, N, w]
  }), (s as any)[42] = b, (s as any)[43] = P, (s as any)[44] = x, (s as any)[45] = S, (s as any)[46] = N, (s as any)[47] = w, (s as any)[48] = z) : z = (s as any)[48];
  let q: any;
  ((s as any)[49] as any) !== (z as any) || ((s as any)[50] as any) !== (j as any) ? (q = ((n as any).jsxs as any)("div", {
    className: R,
    children: [j, z]
  }), (s as any)[49] = z, (s as any)[50] = j, (s as any)[51] = q) : q = (s as any)[51];
  let _: any;
  ((s as any)[52] as any) !== (J as any) || ((s as any)[53] as any) !== (q as any) || ((s as any)[54] as any) !== (y as any) ? (_ = ((n as any).jsx as any)(ms, {
    "aria-label": y,
    className: "sand-settings-dialog",
    rootStylexStyles: (V as any).dialog,
    initialFocus: k,
    onOpenChange: J,
    open: !0,
    ref: k,
    size: "xxl",
    children: q
  }), (s as any)[52] = J, (s as any)[53] = q, (s as any)[54] = y, (s as any)[55] = _) : _ = (s as any)[55];
  let F: any;
  return ((s as any)[56] as any) !== (e as any) || ((s as any)[57] as any) !== (_ as any) ? (F = ((n as any).jsx as any)(ls, {
    presentation: e,
    children: _
  }), (s as any)[56] = e, (s as any)[57] = _, (s as any)[58] = F) : F = (s as any)[58], F;
}
function ks(this: any, H: any): any {
  (ks as any).d = 1223;
  const s: any = ((ss as any).c as any)(14),
    {
      children: f,
      activeChild: t
    }: any = H,
    e: any = (is as any)(),
    i: any = (ts as any)(),
    u: any = (os as any)();
  (Z as any)(((u as any).usageSummary as any).load), (Z as any)(((u as any).teamPolicy as any).refresh);
  const l: any = (fs as any)();
  let o: any;
  ((s as any)[0] as any) !== (t as any) ? (o = ((Q as any).find as any)((I: any): any => ((I as any).entrypoint as any) === (t as any)) ?? (Q as any)[0], (s as any)[0] = t, (s as any)[1] = o) : o = (s as any)[1];
  const d: any = o;
  let a: any;
  ((s as any)[2] as any) !== (i as any) ? (a = (I: any): any => {
    ((i as any).open as any)((((I as any).entrypoint as any).link as any)({}));
  }, (s as any)[2] = i, (s as any)[3] = a) : a = (s as any)[3];
  const k: any = a;
  let c: any;
  ((s as any)[4] as any) !== (e as any) ? (c = (): any => {
    ((((e as any).cursorAuth as any).status as any).kind as any) === ("logged-in" as any) && (((e as any).cursorAuth as any).clearError as any)(), ((e as any).onClose as any)();
  }, (s as any)[4] = e, (s as any)[5] = c) : c = (s as any)[5];
  const r: any = c;
  let p: any;
  return ((s as any)[6] as any) !== (d as any) || ((s as any)[7] as any) !== (f as any) || ((s as any)[8] as any) !== (r as any) || ((s as any)[9] as any) !== (k as any) || ((s as any)[10] as any) !== ((e as any).boxActionError as any) || ((s as any)[11] as any) !== ((e as any).presentation as any) || ((s as any)[12] as any) !== (l as any) ? (p = ((n as any).jsx as any)(es, {
    activeSection: d,
    boxActionError: (e as any).boxActionError,
    onClose: r,
    onSelectSection: k,
    presentation: (e as any).presentation,
    sections: l,
    children: f
  }), (s as any)[6] = d, (s as any)[7] = f, (s as any)[8] = r, (s as any)[9] = k, (s as any)[10] = (e as any).boxActionError, (s as any)[11] = (e as any).presentation, (s as any)[12] = l, (s as any)[13] = p) : p = (s as any)[13], p;
}
export { ks as default };
//# debugId=31000fa5-4eb5-4def-8ee6-3c564a5925df
