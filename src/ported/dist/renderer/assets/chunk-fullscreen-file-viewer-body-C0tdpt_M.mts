declare var AbortController: any;
declare var DOMParser: any;
declare var Element: any;
declare var IntersectionObserver: any;
declare var Node: any;
declare var ResizeObserver: any;
declare var TextDecoder: any;
declare var TextEncoder: any;
declare var URL: any;
declare var document: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "4366f201-86dd-4069-a882-0c46e38bf071", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-4366f201-86dd-4069-a882-0c46e38bf071");
  } catch (e: any) {}
} as any)();
const __vite__mapDeps: any = (i: any, m: any = __vite__mapDeps, d: any = (m as any).f || ((m as any).f = ["./chunk-index-BmwT6aHM.js", "./index.eager-vendor-Qbf9YA6n.js", "./chunk-code-body-CpFpPIsl.js", "./index.eager-platform-Dcfeegfw.js", "./index.eager-common-CdCvBQNJ.js", "./chunk-DefaultCode-CGxOfvcH.js", "./chunk-shiki-token-cache-hLYN1QGX.js", "./chunk-index-C0dBjfzC.js", "./chunk-file-markdown-46Rn501q.js", "./index.eager-app-Cj5f8Gby.js", "./index-ZYxf-aBb.js", "./index-B9V4agTc.css", "./chunk-markdown-math-D9a2zKdp.js"])): any => ((i as any).map as any)((i: any): any => (d as any)[i]);
import { c as I, j as o, u as ie, r as R, p as Ne, R as $s, _ as Xe, T as Ee, i as pt } from "./index.eager-vendor-Qbf9YA6n.js";
import { jd as Ws, je as Hs, aL as Vs, r as ne, b0 as We, jf as Fs, eT as Bs, jg as jt, bA as Xs, hv as Gs, t as Us, d0 as kt, jh as Ks, ji as Zs, eY as Qs, q as Kt, a7 as Zt, a6 as Be, jj as Ys, jk as Js, gz as en, aT as tn, cm as sn, jl as nn, a8 as zt, ae as an } from "./index.eager-app-Cj5f8Gby.js";
import { i as vt, a_ as ze, c as St, aY as Nt, x as ln } from "./index.eager-platform-Dcfeegfw.js";
import { cs as rn, ct as Qt, p as lt, cu as Fe, cv as U, g as Le, cw as Me, cx as on, W as cn, cy as Lt, cz as dn, cA as un, cB as fn } from "./index-ZYxf-aBb.js";
import { c as mn, r as hn, w as pn } from "./index.eager-common-CdCvBQNJ.js";
const xn: any = {
  status: "failed"
};
function _t(this: any, s: any): any {
  const e: any = new (WeakMap as any)();
  return (t: any): any => {
    const n: any = ((e as any).get as any)(t);
    if ((n as any) !== (void 0 as any)) return n;
    const a: any = (s as any)(t);
    return ((e as any).set as any)(t, a), a;
  };
}
function Re(this: any, s: any, e: any): any {
  const t: any = (Ws as any)(s),
    n: any = (rn as any)(s, "bytes", e && (t as any) == (null as any));
  return (t as any) != (null as any) ? (t as any).bytes ?? null : e ? ((n as any).status as any) === ("failed" as any) ? xn : (n as any).bytes : null;
}
const dt: any = {
  stage: {
    kVAEAm: "sand-ixxii4",
    kpwlN0: "sand-10a8y8t",
    kY2c9j: "sand-fo81ep",
    k1xSpc: "sand-78zum5",
    kGNEyG: "sand-6s0dn4",
    kjj79g: "sand-l56j7k",
    k8WAf4: "sand-1oh1f12",
    kg3NbH: "sand-1bzy8qs",
    kB7OPa: "sand-9f619",
    kWkggS: "sand-1846v19",
    $$css: !0
  },
  title: {
    kVQacm: "sand-b3r6kr",
    kg5iWk: "sand-lyipyv",
    khDVqt: "sand-uxw1ft",
    kMwMTN: "sand-tyxrsu",
    $$css: !0
  },
  subtitle: {
    kMwMTN: "sand-169k319",
    $$css: !0
  }
};
function Pe(this: any, s: any): any {
  (Pe as any).d = 443;
  const e: any = ((I as any).c as any)(5);
  let t: any, n: any;
  if (((e as any)[0] as any) !== (s as any) ? ({
    isOpen: t,
    ...n
  } = s, (e as any)[0] = s, (e as any)[1] = t, (e as any)[2] = n) : (t = (e as any)[1], n = (e as any)[2]), !t) return null;
  let a: any;
  return ((e as any)[3] as any) !== (n as any) ? (a = ((o as any).jsx as any)(Yt, {
    ...n
  }), (e as any)[3] = n, (e as any)[4] = a) : a = (e as any)[4], a;
}
function Yt(this: any, s: any): any {
  (Yt as any).d = 444;
  const e: any = ((I as any).c as any)(73),
    {
      title: t,
      subtitle: n,
      toolbar: a,
      actions: l,
      children: r,
      isWide: i,
      onClose: c
    }: any = s,
    d: any = (i as any) === (void 0 as any) ? !1 : i,
    {
      _: m
    }: any = (ie as any)();
  let u: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = {
    modal: !0
  }, (e as any)[0] = u) : u = (e as any)[0];
  const f: any = (Qt as any)(u),
    b: any = (Hs as any)((f as any).isTop),
    j: any = ((R as any).useId as any)();
  let k: any;
  ((e as any)[1] as any) !== (c as any) ? (k = (): any => c, (e as any)[1] = c, (e as any)[2] = k) : k = (e as any)[2];
  const [x]: any = ((R as any).useState as any)(k);
  let p: any;
  ((e as any)[3] as any) !== (x as any) || ((e as any)[4] as any) !== (f as any) || ((e as any)[5] as any) !== (b as any) ? (p = (he: any): any => {
    if ((he as any) == (null as any)) return;
    ((b as any).contain as any)(he);
    const J: any = (ke: any): any => {
      ((ke as any).key as any) !== ("Escape" as any) || !((f as any).isTop as any)() || (((ke as any).preventDefault as any)(), ((ke as any).stopPropagation as any)(), (x as any)());
    };
    ((document as any).addEventListener as any)("keydown", J, !0);
    const we: any = (((document as any).body as any).style as any).overflow;
    return (((document as any).body as any).style as any).overflow = "hidden", (): any => {
      ((document as any).removeEventListener as any)("keydown", J, !0), (((document as any).body as any).style as any).overflow = we;
    };
  }, (e as any)[3] = x, (e as any)[4] = f, (e as any)[5] = b, (e as any)[6] = p) : p = (e as any)[6];
  const g: any = p;
  let h: any;
  ((e as any)[7] as any) !== (x as any) ? (h = function (this: any, J: any): any {
    ((J as any).target as any) === ((J as any).currentTarget as any) && (x as any)();
  }, (e as any)[7] = x, (e as any)[8] = h) : h = (e as any)[8];
  const w: any = h;
  let P: any;
  ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (P = function (this: any, J: any): any {
    ((J as any).stopPropagation as any)();
  }, (e as any)[9] = P) : P = (e as any)[9];
  const E: any = P;
  let N: any, C: any, S: any, y: any, v: any, z: any, M: any, O: any, W: any, T: any, D: any;
  if (((e as any)[10] as any) !== (g as any) || ((e as any)[11] as any) !== ((f as any).ariaModal as any) || ((e as any)[12] as any) !== (w as any) || ((e as any)[13] as any) !== (d as any) || ((e as any)[14] as any) !== (j as any)) {
    const he: any = (Ne as any)((dt as any).stage, (Vs as any).noDrag);
    N = ({
      0: {
        className: "sand-1n2onr6 sand-78zum5 sand-dt5ytf sand-h8yej3 sand-5yr21d sand-1wmrhtn sand-mz0i5r sand-2lwn1j sand-hojbe8 sand-b3r6kr sand-vvtkfd sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-anlk42"
      },
      1: {
        className: "sand-1n2onr6 sand-78zum5 sand-dt5ytf sand-h8yej3 sand-5yr21d sand-mz0i5r sand-2lwn1j sand-hojbe8 sand-b3r6kr sand-vvtkfd sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-anlk42 sand-186ixgm"
      }
    } as any)[(!!d as any) << (0 as any)], O = ($s as any).createPortal, T = j, D = (f as any).ariaModal, C = (ne as any)("sand-file-viewer", (he as any).className), S = w, y = E, v = g, z = "dialog", M = (he as any).style, W = (ne as any)("sand-file-viewer__panel", (N as any).className), (e as any)[10] = g, (e as any)[11] = (f as any).ariaModal, (e as any)[12] = w, (e as any)[13] = d, (e as any)[14] = j, (e as any)[15] = N, (e as any)[16] = C, (e as any)[17] = S, (e as any)[18] = y, (e as any)[19] = v, (e as any)[20] = z, (e as any)[21] = M, (e as any)[22] = O, (e as any)[23] = W, (e as any)[24] = T, (e as any)[25] = D;
  } else N = (e as any)[15], C = (e as any)[16], S = (e as any)[17], y = (e as any)[18], v = (e as any)[19], z = (e as any)[20], M = (e as any)[21], O = (e as any)[22], W = (e as any)[23], T = (e as any)[24], D = (e as any)[25];
  const V: any = (N as any).style;
  let F: any, G: any;
  ((e as any)[26] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (F = (ne as any)("sand-file-viewer__header", "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-2lah0s sand-9f619 sand-1y1aw1k sand-wib8y2 sand-f7dkkf sand-pdmqnj sand-1hkp6id sand-1q0q8m5 sand-1kp61ed sand-s6r99b"), G = {
    className: "sand-78zum5 sand-dt5ytf sand-12mrbbr sand-euugli sand-1iyjqo2 sand-s83m0k"
  }, (e as any)[26] = F, (e as any)[27] = G) : (F = (e as any)[26], G = (e as any)[27]);
  let oe: any;
  ((e as any)[28] as any) !== (t as any) || ((e as any)[29] as any) !== (j as any) ? (oe = ((o as any).jsx as any)(We, {
    id: j,
    level: "body2",
    style: (dt as any).title,
    weight: "medium",
    children: t
  }), (e as any)[28] = t, (e as any)[29] = j, (e as any)[30] = oe) : oe = (e as any)[30];
  let le: any;
  ((e as any)[31] as any) !== (n as any) ? (le = (n as any) != (null as any) ? ((o as any).jsx as any)(We, {
    level: "caption",
    style: (dt as any).subtitle,
    weight: "regular",
    children: n
  }) : null, (e as any)[31] = n, (e as any)[32] = le) : le = (e as any)[32];
  let fe: any;
  ((e as any)[33] as any) !== (oe as any) || ((e as any)[34] as any) !== (le as any) ? (fe = ((o as any).jsxs as any)("div", {
    className: (G as any).className,
    children: [oe, le]
  }), (e as any)[33] = oe, (e as any)[34] = le, (e as any)[35] = fe) : fe = (e as any)[35];
  let re: any;
  ((e as any)[36] as any) !== (a as any) ? (re = (a as any) != (null as any) ? ((o as any).jsx as any)("div", {
    className: (ne as any)("sand-file-viewer__toolbar", "sand-78zum5 sand-6s0dn4 sand-167g77z sand-vc5jky sand-2lah0s"),
    children: a
  }) : null, (e as any)[36] = a, (e as any)[37] = re) : re = (e as any)[37];
  let xe: any;
  ((e as any)[38] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (xe = (ne as any)("sand-file-viewer__actions", "sand-78zum5 sand-6s0dn4 sand-167g77z sand-2lah0s"), (e as any)[38] = xe) : xe = (e as any)[38];
  let ce: any;
  ((e as any)[39] as any) !== (m as any) ? (ce = (m as any)({
    id: "fJGhA7"
  }), (e as any)[39] = m, (e as any)[40] = ce) : ce = (e as any)[40];
  let me: any;
  ((e as any)[41] as any) !== (x as any) || ((e as any)[42] as any) !== (ce as any) ? (me = ((o as any).jsx as any)(lt, {
    "aria-label": ce,
    icon: "close",
    onClick: x,
    shape: "square",
    size: "sm",
    variant: "ghost"
  }), (e as any)[41] = x, (e as any)[42] = ce, (e as any)[43] = me) : me = (e as any)[43];
  let Z: any;
  ((e as any)[44] as any) !== (l as any) || ((e as any)[45] as any) !== (me as any) ? (Z = ((o as any).jsxs as any)("div", {
    className: xe,
    children: [l, me]
  }), (e as any)[44] = l, (e as any)[45] = me, (e as any)[46] = Z) : Z = (e as any)[46];
  let ee: any;
  ((e as any)[47] as any) !== (fe as any) || ((e as any)[48] as any) !== (re as any) || ((e as any)[49] as any) !== (Z as any) ? (ee = ((o as any).jsxs as any)("div", {
    className: F,
    children: [fe, re, Z]
  }), (e as any)[47] = fe, (e as any)[48] = re, (e as any)[49] = Z, (e as any)[50] = ee) : ee = (e as any)[50];
  let be: any;
  ((e as any)[51] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (be = (ne as any)("sand-file-viewer__body", "sand-1n2onr6 sand-1iyjqo2 sand-2lwn1j sand-78zum5 sand-dt5ytf sand-vvtkfd"), (e as any)[51] = be) : be = (e as any)[51];
  let B: any;
  ((e as any)[52] as any) !== (r as any) ? (B = ((o as any).jsx as any)("div", {
    className: be,
    children: r
  }), (e as any)[52] = r, (e as any)[53] = B) : B = (e as any)[53];
  let de: any;
  ((e as any)[54] as any) !== ((N as any).style as any) || ((e as any)[55] as any) !== (ee as any) || ((e as any)[56] as any) !== (B as any) || ((e as any)[57] as any) !== (W as any) ? (de = ((o as any).jsxs as any)("div", {
    className: W,
    style: V,
    children: [ee, B]
  }), (e as any)[54] = (N as any).style, (e as any)[55] = ee, (e as any)[56] = B, (e as any)[57] = W, (e as any)[58] = de) : de = (e as any)[58];
  let K: any;
  ((e as any)[59] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (K = ((o as any).jsx as any)(Fs, {}), (e as any)[59] = K) : K = (e as any)[59];
  let $: any;
  ((e as any)[60] as any) !== (C as any) || ((e as any)[61] as any) !== (S as any) || ((e as any)[62] as any) !== (y as any) || ((e as any)[63] as any) !== (v as any) || ((e as any)[64] as any) !== (z as any) || ((e as any)[65] as any) !== (M as any) || ((e as any)[66] as any) !== (de as any) || ((e as any)[67] as any) !== (T as any) || ((e as any)[68] as any) !== (D as any) ? ($ = ((o as any).jsxs as any)("div", {
    "aria-labelledby": T,
    "aria-modal": D,
    className: C,
    onClick: S,
    onContextMenu: y,
    ref: v,
    role: z,
    style: M,
    children: [de, K]
  }), (e as any)[60] = C, (e as any)[61] = S, (e as any)[62] = y, (e as any)[63] = v, (e as any)[64] = z, (e as any)[65] = M, (e as any)[66] = de, (e as any)[67] = T, (e as any)[68] = D, (e as any)[69] = $) : $ = (e as any)[69];
  let ge: any;
  return ((e as any)[70] as any) !== (O as any) || ((e as any)[71] as any) !== ($ as any) ? (ge = (O as any)($, (document as any).body), (e as any)[70] = O, (e as any)[71] = $, (e as any)[72] = ge) : ge = (e as any)[72], ge;
}
const gn: any = {
  p: !0,
  br: !0,
  hr: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  ul: !0,
  ol: !0,
  li: !0,
  strong: !0,
  b: !0,
  em: !0,
  i: !0,
  u: !0,
  s: !0,
  sub: !0,
  sup: !0,
  blockquote: !0,
  code: !0,
  pre: !0,
  span: !0,
  a: !0,
  img: !0,
  table: !0,
  thead: !0,
  tbody: !0,
  tr: !0,
  td: !0,
  th: !0
};
function Jt(this: any, s: any): any {
  return (Bs as any)(gn, s);
}
function es(this: any, s: any): any {
  try {
    const e: any = new (URL as any)(s, "https://sand.invalid");
    return ((e as any).protocol as any) === ("https:" as any) || ((e as any).protocol as any) === ("http:" as any) || ((e as any).protocol as any) === ("mailto:" as any);
  } catch {
    return !1;
  }
}
function ts(this: any, s: any): any {
  return ((/^data:image\//i as any).test as any)(s) || ((/^https:\/\//i as any).test as any)(s);
}
function ss(this: any, s: any): any {
  for (const e of ((Array as any).from as any)((s as any).children)) {
    (ss as any)(e);
    const t: any = (((e as any).tagName as any).toLowerCase as any)();
    if (!(Jt as any)(t)) {
      ((e as any).replaceWith as any)(...((Array as any).from as any)((e as any).childNodes));
      continue;
    }
    for (const n of ((Array as any).from as any)((e as any).attributes)) {
      const a: any = (((n as any).name as any).toLowerCase as any)();
      (t as any) === ("a" as any) && (a as any) === ("href" as any) && (es as any)((n as any).value) || (t as any) === ("img" as any) && (a as any) === ("src" as any) && (ts as any)((n as any).value) || (t as any) === ("img" as any) && (a as any) === ("alt" as any) || ((t as any) === ("td" as any) || (t as any) === ("th" as any)) && ((a as any) === ("colspan" as any) || (a as any) === ("rowspan" as any)) || ((e as any).removeAttribute as any)((n as any).name);
    }
  }
}
function wn(this: any, s: any): any {
  const e: any = ((new (DOMParser as any)() as any).parseFromString as any)(s, "text/html");
  return ((((e as any).querySelectorAll as any)("script, style, link, meta, iframe, object, embed") as any).forEach as any)((t: any): any => ((t as any).remove as any)()), (ss as any)((e as any).body), ((e as any).body as any).innerHTML;
}
async function yn(this: any, s: any): Promise<any> {
  const e: any = await (Xe as any)((): any => ((import("./chunk-index-BmwT6aHM.js") as any).then as any)((a: any): any => (a as any).i), (__vite__mapDeps as any)([0, 1]), (import.meta as any).url),
    t: any = (((s as any).slice as any)() as any).buffer,
    n: any = await ((e as any).convertToHtml as any)({
      arrayBuffer: t
    });
  return (wn as any)((n as any).value);
}
function ae(this: any, s: any): any {
  (ae as any).d = 793;
  const e: any = ((I as any).c as any)(9),
    {
      href: t,
      downloadName: n
    }: any = s,
    {
      _: a
    }: any = (ie as any)(),
    l: any = (jt as any)();
  let r: any;
  ((e as any)[0] as any) !== (l as any) || ((e as any)[1] as any) !== (n as any) || ((e as any)[2] as any) !== (t as any) ? (r = (): any => {
    l?.([{
      path: t,
      suggestedName: n
    }]).catch(bn);
  }, (e as any)[0] = l, (e as any)[1] = n, (e as any)[2] = t, (e as any)[3] = r) : r = (e as any)[3];
  const i: any = r;
  let c: any;
  ((e as any)[4] as any) !== (a as any) ? (c = (a as any)({
    id: "WcWS//"
  }), (e as any)[4] = a, (e as any)[5] = c) : c = (e as any)[5];
  let d: any;
  return ((e as any)[6] as any) !== (i as any) || ((e as any)[7] as any) !== (c as any) ? (d = ((o as any).jsx as any)(lt, {
    "aria-label": c,
    icon: "desktop-download",
    onClick: i,
    shape: "square",
    size: "sm",
    variant: "ghost"
  }), (e as any)[6] = i, (e as any)[7] = c, (e as any)[8] = d) : d = (e as any)[8], d;
}
function bn(this: any): any {}
const He: any = {
    leaf: {
      keoZOQ: "sand-dj266r",
      k1K539: "sand-at24cr",
      $$css: !0
    },
    list: {
      kZCmMZ: "sand-92arao",
      kLWn49: "sand-1ja60sm",
      kpqbRz: "sand-43c9pm",
      $$css: !0
    },
    nestedList: {
      keoZOQ: "sand-1om1abp",
      kZCmMZ: "sand-8fiw5y",
      $$css: !0
    },
    unorderedListDisc: {
      kH6xsr: "sand-taz4m5",
      $$css: !0
    },
    unorderedListCircle: {
      kH6xsr: "sand-rylv2j",
      $$css: !0
    },
    unorderedListSquare: {
      kH6xsr: "sand-152237o",
      $$css: !0
    }
  },
  ns: any = {
    status: "loading"
  },
  jn: string = "docx",
  kn: any = {
    arm: (): any => (): any => {},
    subscribe: (): any => (): any => {},
    getSnapshot: (): any => ns
  };
function vn(this: any, s: any): any {
  const e: any = (St as any)(ns);
  let t: any = !1;
  return {
    getSnapshot: (e as any).get,
    subscribe: (e as any).subscribe,
    arm: (): any => t ? (): any => {} : (t = !0, (((((yn as any)(s) as any).then as any)((n: any): any => {
      ((e as any).set as any)({
        status: "ready",
        html: n
      });
    }) as any).catch as any)((n: any): any => {
      (kt as any)(n, {
        level: "warning",
        tags: {
          sand_area: "docx-viewer"
        }
      }), ((e as any).set as any)({
        status: "error"
      });
    }), (): any => {})
  };
}
const Sn: any = (_t as any)(vn);
function Nn(this: any, s: any): any {
  if ((s as any) == (null as any)) return;
  const e: any = (Number as any)(s);
  return ((Number as any).isInteger as any)(e) && (e as any) > (0 as any) ? e : void 0;
}
function _n(this: any, s: any): any {
  if ((s as any) == (null as any)) return;
  const e: any = (Number as any)(s);
  return ((Number as any).isInteger as any)(e) && (e as any) >= (0 as any) ? e : void 0;
}
function Pn(this: any, s: any): any {
  if (((s as any).nodeType as any) === ((Node as any).TEXT_NODE as any)) return [{
    kind: "text",
    value: (s as any).textContent ?? ""
  }];
  if (!(s instanceof Element)) return [];
  const e: any = (as as any)(s),
    t: any = (((s as any).tagName as any).toLowerCase as any)();
  if (!(Jt as any)(t)) return e;
  switch (t) {
    case "a":
      {
        const n: any = ((s as any).getAttribute as any)("href");
        return [{
          kind: "link",
          tag: t,
          href: (n as any) != (null as any) && (es as any)(n) ? n : null,
          children: e
        }];
      }
    case "img":
      {
        const n: any = ((s as any).getAttribute as any)("src");
        return [{
          kind: "image",
          tag: t,
          src: (n as any) != (null as any) && (ts as any)(n) ? n : null,
          alt: ((s as any).getAttribute as any)("alt")
        }];
      }
    case "td":
    case "th":
      return [{
        kind: "table-cell",
        tag: t,
        colSpan: (Nn as any)(((s as any).getAttribute as any)("colspan")),
        rowSpan: (_n as any)(((s as any).getAttribute as any)("rowspan")),
        children: e
      }];
    default:
      return [{
        kind: "element",
        tag: t,
        children: e
      }];
  }
}
function as(this: any, s: any): any {
  const e: any = [];
  for (const t of (s as any).childNodes) ((e as any).push as any)(...(Pn as any)(t));
  return e;
}
function Cn(this: any, s: any): any {
  const e: any = ((new (DOMParser as any)() as any).parseFromString as any)(s, "text/html");
  return (as as any)((e as any).body);
}
function ut(this: any, s: any, e: any): any {
  return {
    parentTag: (s as any).tag,
    unorderedListDepth: ((e as any).unorderedListDepth as any) + ((((s as any).tag as any) === ("ul" as any) ? 1 : 0) as any),
    isFinalTbodyRow: ((e as any).parentTag as any) === ("tbody" as any) && ((s as any).tag as any) === ("tr" as any) && ((e as any).elementSibling as any).isLast
  };
}
function nt(this: any, s: any, e: any, t: any): any {
  let n: any = 0;
  for (const r of s) ((r as any).kind as any) !== ("text" as any) && (n += 1);
  let a: any = 0;
  const l: any = [];
  for (const [r, i] of ((s as any).entries as any)()) {
    if (((i as any).kind as any) === ("text" as any)) {
      ((l as any).push as any)((i as any).value);
      continue;
    }
    const c: any = a;
    a += 1, ((l as any).push as any)((zn as any)(i, {
      ...e,
      elementSibling: {
        index: c,
        count: n,
        isFirst: (c as any) === (0 as any),
        isLast: (c as any) === ((n as any) - (1 as any) as any)
      }
    }, `${t}.${r}`));
  }
  return l;
}
function En(this: any, s: any): any {
  return (s as any) === (0 as any) ? (He as any).unorderedListDisc : (s as any) === (1 as any) ? (He as any).unorderedListCircle : (He as any).unorderedListSquare;
}
function zn(this: any, s: any, e: any, t: any): any {
  switch ((s as any).kind) {
    case "element":
      {
        const n: any = (nt as any)((s as any).children, (ut as any)(s, e), t);
        return (Ln as any)(s, e, n, t);
      }
    case "link":
      return ((o as any).jsx as any)(ls, {
        href: (s as any).href,
        children: (nt as any)((s as any).children, (ut as any)(s, e), t)
      }, t);
    case "image":
      return ((o as any).jsx as any)("img", {
        className: "sand-dj266r sand-at24cr sand-193iq5w sand-t7dq6l sand-1e1y6u3",
        alt: (s as any).alt ?? "",
        src: (s as any).src ?? void 0
      }, t);
    case "table-cell":
      {
        const n: any = (nt as any)((s as any).children, (ut as any)(s, e), t);
        return ((s as any).tag as any) === ("td" as any) ? ((R as any).createElement as any)("td", {
          ...({
            0: {
              className: "sand-dj266r sand-at24cr sand-y3jwiz sand-13e3tqs sand-so031l sand-1q0q8m5 sand-17fyfba sand-1yc453h sand-16dsc37"
            },
            1: {
              className: "sand-dj266r sand-at24cr sand-y3jwiz sand-13e3tqs sand-17fyfba sand-1yc453h sand-16dsc37 sand-1qhh985 sand-1sy0etr"
            }
          } as any)[(!!(((e as any).parentTag as any) === ("tr" as any) && (e as any).isFinalTbodyRow) as any) << (0 as any)],
          colSpan: (s as any).colSpan,
          key: t,
          rowSpan: (s as any).rowSpan
        }, n) : ((o as any).jsx as any)("th", {
          className: "sand-dj266r sand-at24cr sand-y3jwiz sand-13e3tqs sand-so031l sand-1q0q8m5 sand-17fyfba sand-1yc453h sand-16dsc37 sand-xzm5a7",
          colSpan: (s as any).colSpan,
          rowSpan: (s as any).rowSpan,
          children: n
        }, t);
      }
    default:
      return s;
  }
}
function Ln(this: any, s: any, e: any, t: any, n: any): any {
  switch ((s as any).tag) {
    case "p":
      return ((R as any).createElement as any)("p", {
        ...({
          0: {
            className: "sand-dj266r sand-at24cr sand-126k92a"
          },
          1: {
            className: "sand-dj266r sand-at24cr sand-eaf4i8"
          }
        } as any)[((((e as any).parentTag as any) === ("li" as any)) as any) << (0 as any)],
        key: n
      }, t);
    case "br":
      return ((o as any).jsx as any)("br", {
        className: "sand-dj266r sand-at24cr"
      }, n);
    case "hr":
      return ((o as any).jsx as any)("hr", {
        className: "sand-dj266r sand-at24cr sand-178xt8z sand-13fuv20 sand-1aeic0j sand-18oe1m7 sand-1sy0etr sand-stzfhl"
      }, n);
    case "h1":
      return ((o as any).jsx as any)("h1", {
        className: "sand-dj266r sand-at24cr sand-1heor9g sand-xzm5a7 sand-1ja60sm sand-10siri3",
        children: t
      }, n);
    case "h2":
      return ((o as any).jsx as any)("h2", {
        className: "sand-dj266r sand-at24cr sand-1heor9g sand-xzm5a7 sand-1ja60sm sand-1b5m78i",
        children: t
      }, n);
    case "h3":
      return ((o as any).jsx as any)("h3", {
        className: "sand-dj266r sand-at24cr sand-1heor9g sand-xzm5a7 sand-1ja60sm sand-140imcn",
        children: t
      }, n);
    case "h4":
      return ((o as any).jsx as any)("h4", {
        className: "sand-dj266r sand-at24cr sand-1heor9g sand-xzm5a7 sand-1ja60sm sand-rv4cvt",
        children: t
      }, n);
    case "h5":
      return ((o as any).jsx as any)("h5", {
        className: "sand-dj266r sand-at24cr sand-1heor9g sand-xzm5a7 sand-1ja60sm sand-rv4cvt",
        children: t
      }, n);
    case "h6":
      return ((o as any).jsx as any)("h6", {
        className: "sand-dj266r sand-at24cr sand-1heor9g sand-xzm5a7 sand-1ja60sm sand-rv4cvt",
        children: t
      }, n);
    case "ul":
      return ((R as any).createElement as any)("ul", {
        ...(Ne as any)((He as any).leaf, (He as any).list, (En as any)((e as any).unorderedListDepth), ((e as any).parentTag as any) === ("li" as any) && (He as any).nestedList),
        key: n
      }, t);
    case "ol":
      return ((R as any).createElement as any)("ol", {
        ...({
          0: {
            className: "sand-dj266r sand-at24cr sand-92arao sand-1ja60sm sand-43c9pm sand-3yw8vx"
          },
          1: {
            className: "sand-at24cr sand-1ja60sm sand-43c9pm sand-3yw8vx sand-1om1abp sand-8fiw5y"
          }
        } as any)[((((e as any).parentTag as any) === ("li" as any)) as any) << (0 as any)],
        key: n
      }, t);
    case "li":
      return ((R as any).createElement as any)("li", {
        ...({
          0: {
            className: "sand-dj266r sand-at24cr sand-eaf4i8 sand-kwbhjd"
          },
          1: {
            className: "sand-at24cr sand-eaf4i8 sand-kwbhjd sand-1om1abp"
          }
        } as any)[((!((e as any).elementSibling as any).isFirst && (((e as any).parentTag as any) === ("ul" as any) || ((e as any).parentTag as any) === ("ol" as any))) as any) << (0 as any)],
        key: n
      }, t);
    case "strong":
      return ((o as any).jsx as any)("strong", {
        className: "sand-dj266r sand-at24cr",
        children: t
      }, n);
    case "b":
      return ((o as any).jsx as any)("b", {
        className: "sand-dj266r sand-at24cr",
        children: t
      }, n);
    case "em":
      return ((o as any).jsx as any)("em", {
        className: "sand-dj266r sand-at24cr",
        children: t
      }, n);
    case "i":
      return ((o as any).jsx as any)("i", {
        className: "sand-dj266r sand-at24cr",
        children: t
      }, n);
    case "u":
      return ((o as any).jsx as any)("u", {
        className: "sand-dj266r sand-at24cr",
        children: t
      }, n);
    case "s":
      return ((o as any).jsx as any)("s", {
        className: "sand-dj266r sand-at24cr",
        children: t
      }, n);
    case "sub":
      return ((o as any).jsx as any)("sub", {
        className: "sand-dj266r sand-at24cr",
        children: t
      }, n);
    case "sup":
      return ((o as any).jsx as any)("sup", {
        className: "sand-dj266r sand-at24cr",
        children: t
      }, n);
    case "blockquote":
      return ((o as any).jsx as any)("blockquote", {
        className: "sand-dj266r sand-at24cr sand-rxpjvj sand-8fiw5y sand-yumdvf sand-1t7ytsu sand-4n2izg sand-19aaqeu",
        children: t
      }, n);
    case "code":
      return ((R as any).createElement as any)("code", {
        ...({
          0: {
            className: "sand-dj266r sand-at24cr sand-t970qd sand-1bfovwe sand-1e1y6u3 sand-1hhjprl sand-67nlm8 sand-eb7xqv"
          },
          1: {
            className: "sand-dj266r sand-at24cr sand-67nlm8 sand-t970qd sand-njsko4 sand-2u8bby sand-jbqb8w sand-1wm8ruf"
          }
        } as any)[((((e as any).parentTag as any) === ("pre" as any)) as any) << (0 as any)],
        key: n
      }, t);
    case "pre":
      return ((o as any).jsx as any)("pre", {
        className: "sand-dj266r sand-at24cr sand-12ffz05 sand-1m31zm8 sand-1043rbw sand-qcqck4 sand-w2csxc sand-spwq11",
        children: t
      }, n);
    case "span":
      return ((o as any).jsx as any)("span", {
        className: "sand-dj266r sand-at24cr",
        children: t
      }, n);
    case "table":
      return ((o as any).jsx as any)("table", {
        className: "sand-dj266r sand-at24cr sand-1mwwwfo sand-1wm8ruf",
        children: t
      }, n);
    case "thead":
      return ((o as any).jsx as any)("thead", {
        className: "sand-dj266r sand-at24cr",
        children: t
      }, n);
    case "tbody":
      return ((o as any).jsx as any)("tbody", {
        className: "sand-dj266r sand-at24cr",
        children: t
      }, n);
    case "tr":
      return ((o as any).jsx as any)("tr", {
        className: "sand-dj266r sand-at24cr",
        children: t
      }, n);
    default:
      return (s as any).tag;
  }
}
function ls(this: any, s: any): any {
  (ls as any).d = 790;
  const e: any = ((I as any).c as any)(11),
    {
      href: t,
      children: n
    }: any = s,
    a: any = (Xs as any)();
  let l: any;
  ((e as any)[0] as any) !== (t as any) ? (l = (Gs as any)(t), (e as any)[0] = t, (e as any)[1] = l) : l = (e as any)[1];
  const r: any = l,
    i: any = (on as any)(r);
  let c: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = {
    className: "sand-dj266r sand-at24cr sand-l1v4ol sand-krqix3 sand-1sur9pj"
  }, (e as any)[2] = c) : c = (e as any)[2];
  let d: any;
  ((e as any)[3] as any) !== (a as any) || ((e as any)[4] as any) !== (r as any) ? (d = (Us as any)(r, a), (e as any)[3] = a, (e as any)[4] = r, (e as any)[5] = d) : d = (e as any)[5];
  const m: any = t ?? void 0;
  let u: any;
  return ((e as any)[6] as any) !== (n as any) || ((e as any)[7] as any) !== (i as any) || ((e as any)[8] as any) !== (d as any) || ((e as any)[9] as any) !== (m as any) ? (u = ((o as any).jsx as any)("a", {
    ...c,
    ...i,
    ...d,
    href: m,
    rel: "noopener noreferrer",
    target: "_blank",
    children: n
  }), (e as any)[6] = n, (e as any)[7] = i, (e as any)[8] = d, (e as any)[9] = m, (e as any)[10] = u) : u = (e as any)[10], u;
}
function rs(this: any, s: any): any {
  (rs as any).d = 789;
  const e: any = ((I as any).c as any)(12),
    {
      html: t
    }: any = s;
  let n: any, a: any, l: any, r: any;
  if (((e as any)[0] as any) !== (t as any)) {
    const c: any = (Cn as any)(t);
    let d: any;
    ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = {
      className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-euugli sand-apjn7j sand-dj266r sand-11t971q sand-at24cr sand-vc5jky sand-1avjwpx sand-7tr390 sand-1l37tef sand-zazumk sand-j0a0fe sand-ehausa sand-1heor9g sand-1qlqyl8 sand-1yxxptd"
    }, n = (ne as any)("sand-docx-content", (d as any).className), (e as any)[5] = d, (e as any)[6] = n) : (d = (e as any)[5], n = (e as any)[6]), a = !0, l = (d as any).style, r = (nt as any)(c, {
      parentTag: null,
      unorderedListDepth: 0,
      isFinalTbodyRow: !1
    }, jn), (e as any)[0] = t, (e as any)[1] = n, (e as any)[2] = a, (e as any)[3] = l, (e as any)[4] = r;
  } else n = (e as any)[1], a = (e as any)[2], l = (e as any)[3], r = (e as any)[4];
  let i: any;
  return ((e as any)[7] as any) !== (n as any) || ((e as any)[8] as any) !== (a as any) || ((e as any)[9] as any) !== (l as any) || ((e as any)[10] as any) !== (r as any) ? (i = ((o as any).jsx as any)("div", {
    className: n,
    "data-docx-content": a,
    style: l,
    children: r
  }), (e as any)[7] = n, (e as any)[8] = a, (e as any)[9] = l, (e as any)[10] = r, (e as any)[11] = i) : i = (e as any)[11], i;
}
function is(this: any, s: any): any {
  (is as any).d = 791;
  const e: any = ((I as any).c as any)(2);
  if (!(s as any).isOpen) return null;
  let t: any;
  return ((e as any)[0] as any) !== (s as any) ? (t = ((o as any).jsx as any)(os, {
    ...s
  }), (e as any)[0] = s, (e as any)[1] = t) : t = (e as any)[1], t;
}
function os(this: any, s: any): any {
  (os as any).d = 792;
  const e: any = ((I as any).c as any)(23),
    {
      source: t,
      name: n,
      downloadName: a,
      isOpen: l,
      onClose: r
    }: any = s,
    i: any = (jt as any)(),
    {
      _: c
    }: any = (ie as any)(),
    d: any = (Re as any)(t, l),
    m: any = (Fe as any)(t);
  let u: any;
  ((e as any)[0] as any) !== (d as any) ? (u = (d?.status as any) === ("ready" as any) ? (Sn as any)((d as any).bytes) : kn, (e as any)[0] = d, (e as any)[1] = u) : u = (e as any)[1];
  const f: any = u,
    b: any = ((R as any).useSyncExternalStore as any)((f as any).subscribe, (f as any).getSnapshot, (f as any).getSnapshot);
  (vt as any)((f as any).arm);
  let j: any;
  ((e as any)[2] as any) !== (a as any) || ((e as any)[3] as any) !== (t as any) ? (j = ((o as any).jsx as any)(ae, {
    downloadName: a,
    href: t
  }), (e as any)[2] = a, (e as any)[3] = t, (e as any)[4] = j) : j = (e as any)[4];
  let k: any;
  ((e as any)[5] as any) !== (i as any) || ((e as any)[6] as any) !== (a as any) || ((e as any)[7] as any) !== (t as any) ? (k = (): any => {
    i?.([{
      path: t,
      suggestedName: a
    }]).catch(Mn);
  }, (e as any)[5] = i, (e as any)[6] = a, (e as any)[7] = t, (e as any)[8] = k) : k = (e as any)[8];
  let x: any;
  ((e as any)[9] as any) !== (c as any) || ((e as any)[10] as any) !== (d as any) || ((e as any)[11] as any) !== (b as any) || ((e as any)[12] as any) !== (a as any) || ((e as any)[13] as any) !== (m as any) || ((e as any)[14] as any) !== (t as any) || ((e as any)[15] as any) !== (k as any) ? (x = (Tn as any)({
    translate: c,
    bytes: d,
    docx: b,
    source: t,
    downloadName: a,
    onDownload: k,
    onRetry: m
  }), (e as any)[9] = c, (e as any)[10] = d, (e as any)[11] = b, (e as any)[12] = a, (e as any)[13] = m, (e as any)[14] = t, (e as any)[15] = k, (e as any)[16] = x) : x = (e as any)[16];
  let p: any;
  return ((e as any)[17] as any) !== (l as any) || ((e as any)[18] as any) !== (n as any) || ((e as any)[19] as any) !== (r as any) || ((e as any)[20] as any) !== (j as any) || ((e as any)[21] as any) !== (x as any) ? (p = ((o as any).jsx as any)(Pe, {
    actions: j,
    isOpen: l,
    onClose: r,
    title: n,
    children: x
  }), (e as any)[17] = l, (e as any)[18] = n, (e as any)[19] = r, (e as any)[20] = j, (e as any)[21] = x, (e as any)[22] = p) : p = (e as any)[22], p;
}
function Mn(this: any): any {}
function Tn(this: any, {
  translate: s,
  bytes: e,
  docx: t,
  source: n,
  downloadName: a,
  onDownload: l,
  onRetry: r
}: any): any {
  return (e?.status as any) === ("too-large" as any) ? ((o as any).jsx as any)(U, {
    action: ((o as any).jsx as any)(ae, {
      downloadName: a,
      href: n
    }),
    detail: (s as any)({
      id: "4iMSkK"
    }),
    icon: "file-text",
    title: (s as any)({
      id: "h7dRpk"
    })
  }) : (e?.status as any) === ("failed" as any) ? ((o as any).jsx as any)(U, {
    action: ((o as any).jsx as any)(Le, {
      onClick: r,
      size: "sm",
      variant: "secondary",
      children: ((o as any).jsx as any)(Ee, {
        id: "6gRgw8"
      })
    }),
    icon: "file-text",
    title: (s as any)({
      id: "OZ1zWg"
    })
  }) : (e?.status as any) === ("missing" as any) ? ((o as any).jsx as any)(U, {
    icon: "file-text",
    title: (s as any)({
      id: "bks/Jy"
    })
  }) : ((t as any).status as any) === ("error" as any) ? ((o as any).jsx as any)(U, {
    action: ((o as any).jsx as any)(Le, {
      onClick: l,
      size: "sm",
      variant: "secondary",
      children: ((o as any).jsx as any)(Ee, {
        id: "mzI/c+"
      })
    }),
    detail: (s as any)({
      id: "UCNgnS"
    }),
    icon: "file-text",
    title: (s as any)({
      id: "ciNBep"
    })
  }) : (e as any) == (null as any) || ((t as any).status as any) === ("loading" as any) ? ((o as any).jsx as any)(Me, {
    label: (s as any)({
      id: "PZctm0"
    })
  }) : ((o as any).jsx as any)(ze, {
    className: "sand-1iyjqo2 sand-2lwn1j",
    scrollbarVisibility: "hover",
    children: ((o as any).jsx as any)(rs, {
      html: (t as any).html
    })
  });
}
const Rn: string = "sand-html-preview",
  Dn: string = "attachment";
function On(this: any, s: any): any {
  return `${Rn}://${Dn}/${(encodeURIComponent as any)(s)}`;
}
const rt: any = -1,
  An: any = {
    anchor: rt,
    focus: rt
  };
function Mt(this: any, s: any, e: any): any {
  if ((s as any) == (null as any)) return rt;
  let t: any = e;
  for (; (t as any) != (null as any) && ((t as any).parentNode as any) !== (s as any);) t = (t as any).parentNode;
  return (t as any) == (null as any) ? rt : ((((Array as any).prototype as any).indexOf as any).call as any)((s as any).childNodes, t);
}
function In(this: any, s: any): any {
  let e: any = An;
  return {
    subscribe: (t: any): any => (((document as any).addEventListener as any)("selectionchange", t), (): any => ((document as any).removeEventListener as any)("selectionchange", t)),
    getSnapshot: (): any => {
      const t: any = ((document as any).getSelection as any)(),
        n: any = (Mt as any)(s, t?.anchorNode ?? null),
        a: any = (Mt as any)(s, t?.focusNode ?? null);
      return ((n as any) !== ((e as any).anchor as any) || (a as any) !== ((e as any).focus as any)) && (e = {
        anchor: n,
        focus: a
      }), e;
    }
  };
}
const qn: any = {
    kzqmXN: "sand-ezivpi",
    kCygrm: "sand-b5mbof",
    kM8eXF: "sand-12a1x4x",
    $$css: !0
  },
  $n: any = ((R as any).lazy as any)((): any => (((Xe as any)((): any => import("./chunk-code-body-CpFpPIsl.js"), (__vite__mapDeps as any)([2, 1, 3, 4, 5, 6, 7]), (import.meta as any).url) as any).then as any)((s: any): any => ({
    default: (s as any).CodeBody
  }))),
  Wn: any = ((R as any).lazy as any)((): any => (((Xe as any)((): any => import("./chunk-file-markdown-46Rn501q.js"), (__vite__mapDeps as any)([8, 1, 9, 3, 4, 10, 11, 12, 7]), (import.meta as any).url) as any).then as any)((s: any): any => ({
    default: (s as any).FileMarkdown
  }))),
  Ve: number = 15e5,
  Hn: number = 20,
  Vn: any = {
    lineBlock: (s: any): any => [qn, {
      "--x-containIntrinsicHeight": (((e: any): any => (typeof e as any) == ("number" as any) ? (e as any) + ("px" as any) : e ?? void 0) as any)(`auto ${s}px`)
    }]
  },
  Fn: number = 2e5,
  Bn: number = 5e3,
  xt: number = 1e3,
  Xn: number = 9,
  Tt: number = 8,
  Gn: number = 1,
  Un: number = 2,
  Kn: any = /[\t\u1100-\uffff]/,
  ft: any = {
    lineIndex: -1,
    start: 0,
    end: 0,
    columns: 0
  };
function Zn(this: any, s: any): any {
  return (s as any) >= (4352 as any) && (s as any) <= (4447 as any) || (s as any) >= (11904 as any) && (s as any) <= (42191 as any) || (s as any) >= (44032 as any) && (s as any) <= (55203 as any) || (s as any) >= (55296 as any) && (s as any) <= (56319 as any) || (s as any) >= (63744 as any) && (s as any) <= (64255 as any) || (s as any) >= (65072 as any) && (s as any) <= (65103 as any) || (s as any) >= (65280 as any) && (s as any) <= (65376 as any) || (s as any) >= (65504 as any) && (s as any) <= (65510 as any);
}
function Rt(this: any, s: any, e: any, t: any): any {
  return (e as any) === (Xn as any) ? ((((Math as any).floor as any)((s as any) / (Tt as any)) as any) + (1 as any) as any) * (Tt as any) : (e as any) >= (56320 as any) && (e as any) <= (57343 as any) ? s : (s as any) + (((Zn as any)(e) ? t : 1) as any);
}
function Qn(this: any, s: any): any {
  const e: any = ((Kn as any).test as any)(s),
    t: any = [];
  let n: any = ft,
    a: any = ft,
    l: any = 0;
  for (let i: any = 0; (i as any) < ((s as any).length as any); l += 1) {
    ((l as any) % (xt as any) as any) === (0 as any) && ((t as any).push as any)(i);
    const c: any = ((s as any).indexOf as any)(`
`, i),
      d: any = (c as any) === (-1 as any) ? (s as any).length : c;
    let m: any = (d as any) - (i as any),
      u: any = m;
    if (e) {
      m = 0, u = 0;
      for (let b: any = i; (b as any) < (d as any); b += 1) {
        const j: any = ((s as any).charCodeAt as any)(b);
        m = (Rt as any)(m, j, Gn), u = (Rt as any)(u, j, Un);
      }
    }
    const f: any = (c as any) === (-1 as any) ? (s as any).length : (c as any) + (1 as any);
    (m as any) > ((n as any).columns as any) && (n = {
      lineIndex: l,
      start: i,
      end: f,
      columns: m
    }), (u as any) > ((a as any).columns as any) && (a = {
      lineIndex: l,
      start: i,
      end: f,
      columns: u
    }), i = f;
  }
  const r: any = ((n as any).lineIndex as any) === ((a as any).lineIndex as any) ? [n] : [n, a];
  return {
    lineTotal: l,
    groupStarts: t,
    widestLines: ((((r as any).filter as any)((i: any): any => (i as any) !== (ft as any)) as any).sort as any)((i: any, c: any): any => ((i as any).start as any) - ((c as any).start as any))
  };
}
function Yn(this: any, s: any): any {
  const {
      lineTotal: e,
      groupStarts: t,
      widestLines: n
    }: any = (Qn as any)(s),
    a: any = [],
    l: any = (r: any, i: any, c: any, d: any): any => {
      (c as any) > (0 as any) && ((a as any).push as any)({
        text: ((s as any).slice as any)(r, i),
        lineCount: c,
        isWidestLine: d
      });
    };
  return ((t as any).forEach as any)((r: any, i: any): any => {
    const c: any = (t as any)[(i as any) + (1 as any)] ?? (s as any).length,
      d: any = ((Math as any).min as any)(((i as any) + (1 as any) as any) * (xt as any), e);
    let m: any = r,
      u: any = (i as any) * (xt as any);
    for (const f of n) ((f as any).start as any) < (r as any) || ((f as any).start as any) >= (c as any) || ((l as any)(m, (f as any).start, ((f as any).lineIndex as any) - (u as any), !1), (l as any)((f as any).start, (f as any).end, 1, !0), m = (f as any).end, u = ((f as any).lineIndex as any) + (1 as any));
    (l as any)(m, c, (d as any) - (u as any), !1);
  }), a;
}
function Jn(this: any, s: any, e: any): any {
  let t: any = 0,
    n: any = 0;
  for (; (n as any) < ((s as any).length as any);) {
    if (t += 1, (t as any) > (e as any)) return !0;
    const a: any = ((s as any).indexOf as any)(`
`, n);
    if ((a as any) === (-1 as any)) return !1;
    n = (a as any) + (1 as any);
  }
  return !1;
}
function cs(this: any, s: any): any {
  (cs as any).d = 815;
  const e: any = ((I as any).c as any)(2);
  if (!(s as any).isOpen) return null;
  let t: any;
  return ((e as any)[0] as any) !== (s as any) ? (t = ((o as any).jsx as any)(ds, {
    ...s
  }), (e as any)[0] = s, (e as any)[1] = t) : t = (e as any)[1], t;
}
function ds(this: any, s: any): any {
  (ds as any).d = 812;
  const e: any = ((I as any).c as any)(51),
    {
      source: t,
      name: n,
      downloadName: a,
      isMarkdown: l,
      isOpen: r,
      onClose: i
    }: any = s,
    {
      _: c
    }: any = (ie as any)(),
    d: any = (Re as any)(t, r),
    m: any = (Fe as any)(t);
  let u: any;
  e: {
    if ((d?.status as any) !== ("ready" as any)) {
      u = null;
      break e;
    }
    let g: any, h: any;
    if (((e as any)[0] as any) !== ((d as any).bytes as any)) {
      const P: any = ((new (TextDecoder as any)("utf-8", {
        fatal: !1
      }) as any).decode as any)((d as any).bytes);
      g = ((P as any).length as any) > (Ve as any), h = g ? ((P as any).slice as any)(0, Ve) : P, (e as any)[0] = (d as any).bytes, (e as any)[1] = g, (e as any)[2] = h;
    } else g = (e as any)[1], h = (e as any)[2];
    let w: any;
    ((e as any)[3] as any) !== (g as any) || ((e as any)[4] as any) !== (h as any) ? (w = {
      text: h,
      isTruncated: g
    }, (e as any)[3] = g, (e as any)[4] = h, (e as any)[5] = w) : w = (e as any)[5], u = w;
  }
  const f: any = u;
  let b: any;
  e: {
    if ((d?.status as any) === ("too-large" as any)) {
      let h: any;
      ((e as any)[6] as any) !== (a as any) || ((e as any)[7] as any) !== (t as any) ? (h = ((o as any).jsx as any)(ae, {
        downloadName: a,
        href: t
      }), (e as any)[6] = a, (e as any)[7] = t, (e as any)[8] = h) : h = (e as any)[8];
      let w: any;
      ((e as any)[9] as any) !== (c as any) ? (w = (c as any)({
        id: "X0/8Ci"
      }), (e as any)[9] = c, (e as any)[10] = w) : w = (e as any)[10];
      let P: any;
      ((e as any)[11] as any) !== (c as any) ? (P = (c as any)({
        id: "QxMRBI"
      }), (e as any)[11] = c, (e as any)[12] = P) : P = (e as any)[12];
      let E: any;
      ((e as any)[13] as any) !== (h as any) || ((e as any)[14] as any) !== (w as any) || ((e as any)[15] as any) !== (P as any) ? (E = ((o as any).jsx as any)(U, {
        action: h,
        detail: w,
        icon: "file-text",
        title: P
      }), (e as any)[13] = h, (e as any)[14] = w, (e as any)[15] = P, (e as any)[16] = E) : E = (e as any)[16], b = E;
      break e;
    }
    if ((d?.status as any) === ("failed" as any)) {
      let h: any;
      ((e as any)[17] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = ((o as any).jsx as any)(Ee, {
        id: "6gRgw8"
      }), (e as any)[17] = h) : h = (e as any)[17];
      let w: any;
      ((e as any)[18] as any) !== (m as any) ? (w = ((o as any).jsx as any)(Le, {
        onClick: m,
        size: "sm",
        variant: "secondary",
        children: h
      }), (e as any)[18] = m, (e as any)[19] = w) : w = (e as any)[19];
      let P: any;
      ((e as any)[20] as any) !== (c as any) ? (P = (c as any)({
        id: "OZ1zWg"
      }), (e as any)[20] = c, (e as any)[21] = P) : P = (e as any)[21];
      let E: any;
      ((e as any)[22] as any) !== (w as any) || ((e as any)[23] as any) !== (P as any) ? (E = ((o as any).jsx as any)(U, {
        action: w,
        icon: "file-text",
        title: P
      }), (e as any)[22] = w, (e as any)[23] = P, (e as any)[24] = E) : E = (e as any)[24], b = E;
      break e;
    }
    if ((d?.status as any) === ("missing" as any)) {
      let h: any;
      ((e as any)[25] as any) !== (c as any) ? (h = (c as any)({
        id: "bks/Jy"
      }), (e as any)[25] = c, (e as any)[26] = h) : h = (e as any)[26];
      let w: any;
      ((e as any)[27] as any) !== (h as any) ? (w = ((o as any).jsx as any)(U, {
        icon: "file-text",
        title: h
      }), (e as any)[27] = h, (e as any)[28] = w) : w = (e as any)[28], b = w;
      break e;
    }
    if ((f as any) == (null as any)) {
      let h: any;
      ((e as any)[29] as any) !== (c as any) ? (h = (c as any)({
        id: "zSf+pB"
      }), (e as any)[29] = c, (e as any)[30] = h) : h = (e as any)[30];
      let w: any;
      ((e as any)[31] as any) !== (h as any) ? (w = ((o as any).jsx as any)(Me, {
        label: h
      }), (e as any)[31] = h, (e as any)[32] = w) : w = (e as any)[32], b = w;
      break e;
    }
    if (l) {
      let h: any;
      ((e as any)[33] as any) !== ((f as any).text as any) ? (h = ((o as any).jsx as any)(us, {
        text: (f as any).text
      }), (e as any)[33] = (f as any).text, (e as any)[34] = h) : h = (e as any)[34], b = h;
      break e;
    }
    let g: any;
    ((e as any)[35] as any) !== ((f as any).text as any) || ((e as any)[36] as any) !== (t as any) ? (g = ((o as any).jsx as any)(ot, {
      name: t,
      text: (f as any).text
    }), (e as any)[35] = (f as any).text, (e as any)[36] = t, (e as any)[37] = g) : g = (e as any)[37], b = g;
  }
  const j: any = b;
  let k: any;
  ((e as any)[38] as any) !== (a as any) || ((e as any)[39] as any) !== (t as any) ? (k = ((o as any).jsx as any)(ae, {
    downloadName: a,
    href: t
  }), (e as any)[38] = a, (e as any)[39] = t, (e as any)[40] = k) : k = (e as any)[40];
  let x: any;
  ((e as any)[41] as any) !== (c as any) || ((e as any)[42] as any) !== (f?.isTruncated as any) ? (x = (f?.isTruncated as any) === (!0 as any) ? (c as any)({
    id: "FuZTcE"
  }) : void 0, (e as any)[41] = c, (e as any)[42] = f?.isTruncated, (e as any)[43] = x) : x = (e as any)[43];
  let p: any;
  return ((e as any)[44] as any) !== (j as any) || ((e as any)[45] as any) !== (r as any) || ((e as any)[46] as any) !== (n as any) || ((e as any)[47] as any) !== (i as any) || ((e as any)[48] as any) !== (k as any) || ((e as any)[49] as any) !== (x as any) ? (p = ((o as any).jsx as any)(Pe, {
    actions: k,
    isOpen: r,
    onClose: i,
    subtitle: x,
    title: n,
    children: j
  }), (e as any)[44] = j, (e as any)[45] = r, (e as any)[46] = n, (e as any)[47] = i, (e as any)[48] = k, (e as any)[49] = x, (e as any)[50] = p) : p = (e as any)[50], p;
}
function us(this: any, s: any): any {
  (us as any).d = 811;
  const e: any = ((I as any).c as any)(11),
    {
      text: t
    }: any = s,
    {
      _: n
    }: any = (ie as any)();
  let a: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = {
    className: "sand-1iyjqo2 sand-2lwn1j"
  }, (e as any)[0] = a) : a = (e as any)[0];
  const l: any = (a as any).className;
  let r: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = (ne as any)("sand-file-markdown-page", "sand-9f619 sand-c5f494 sand-vc5jky sand-11t971q sand-13zrc24 sand-161sli9 sand-1mfogq2 sand-sfy40s sand-1hx0egp"), (e as any)[1] = r) : r = (e as any)[1];
  let i: any;
  ((e as any)[2] as any) !== (n as any) ? (i = (n as any)({
    id: "zSf+pB"
  }), (e as any)[2] = n, (e as any)[3] = i) : i = (e as any)[3];
  let c: any;
  ((e as any)[4] as any) !== (i as any) ? (c = ((o as any).jsx as any)(Me, {
    label: i
  }), (e as any)[4] = i, (e as any)[5] = c) : c = (e as any)[5];
  let d: any;
  ((e as any)[6] as any) !== (t as any) ? (d = ((o as any).jsx as any)(Wn, {
    text: t
  }), (e as any)[6] = t, (e as any)[7] = d) : d = (e as any)[7];
  let m: any;
  return ((e as any)[8] as any) !== (c as any) || ((e as any)[9] as any) !== (d as any) ? (m = ((o as any).jsx as any)(ze, {
    className: l,
    scrollbarVisibility: "hover",
    children: ((o as any).jsx as any)("div", {
      className: r,
      children: ((o as any).jsx as any)((R as any).Suspense, {
        fallback: c,
        children: d
      })
    })
  }), (e as any)[8] = c, (e as any)[9] = d, (e as any)[10] = m) : m = (e as any)[10], m;
}
function ot(this: any, s: any): any {
  (ot as any).d = 810;
  const e: any = ((I as any).c as any)(11),
    {
      _: t
    }: any = (ie as any)();
  if ((((s as any).text as any).length as any) > (Fn as any) || (Jn as any)((s as any).text, Bn)) {
    let i: any;
    return ((e as any)[0] as any) !== ((s as any).text as any) ? (i = ((o as any).jsx as any)(fs, {
      text: (s as any).text
    }), (e as any)[0] = (s as any).text, (e as any)[1] = i) : i = (e as any)[1], i;
  }
  let n: any;
  ((e as any)[2] as any) !== (t as any) ? (n = (t as any)({
    id: "zSf+pB"
  }), (e as any)[2] = t, (e as any)[3] = n) : n = (e as any)[3];
  let a: any;
  ((e as any)[4] as any) !== (n as any) ? (a = ((o as any).jsx as any)(Me, {
    label: n
  }), (e as any)[4] = n, (e as any)[5] = a) : a = (e as any)[5];
  let l: any;
  ((e as any)[6] as any) !== (s as any) ? (l = ((o as any).jsx as any)($n, {
    ...s
  }), (e as any)[6] = s, (e as any)[7] = l) : l = (e as any)[7];
  let r: any;
  return ((e as any)[8] as any) !== (a as any) || ((e as any)[9] as any) !== (l as any) ? (r = ((o as any).jsx as any)((R as any).Suspense, {
    fallback: a,
    children: l
  }), (e as any)[8] = a, (e as any)[9] = l, (e as any)[10] = r) : r = (e as any)[10], r;
}
function fs(this: any, s: any): any {
  (fs as any).d = 814;
  const e: any = ((I as any).c as any)(4),
    {
      text: t
    }: any = s;
  let n: any;
  ((e as any)[0] as any) !== (t as any) ? (n = (Yn as any)(t), (e as any)[0] = t, (e as any)[1] = n) : n = (e as any)[1];
  let a: any;
  return ((e as any)[2] as any) !== (n as any) ? (a = ((o as any).jsx as any)(ms, {
    blocks: n
  }), (e as any)[2] = n, (e as any)[3] = a) : a = (e as any)[3], a;
}
function ms(this: any, s: any): any {
  (ms as any).d = 813;
  const e: any = ((I as any).c as any)(13),
    {
      blocks: t
    }: any = s,
    [n, a]: any = ((R as any).useState as any)(null);
  let l: any;
  ((e as any)[0] as any) !== (n as any) ? (l = (In as any)(n), (e as any)[0] = n, (e as any)[1] = l) : l = (e as any)[1];
  const r: any = l,
    {
      anchor: i,
      focus: c
    }: any = ((R as any).useSyncExternalStore as any)((r as any).subscribe, (r as any).getSnapshot, (r as any).getSnapshot);
  let d: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = {
    className: "sand-1iyjqo2 sand-2lwn1j"
  }, (e as any)[2] = d) : d = (e as any)[2];
  const m: any = (d as any).className;
  let u: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = {
    className: "sand-1ghz6dp sand-1us19tq sand-yamay9 sand-wxc41k sand-f7dkkf sand-v54qhq sand-1ua6jya sand-1wd3ewq sand-xwulf8 sand-1ct8sxb sand-1fc57z9 sand-1sdyfia sand-1hx0egp"
  }, (e as any)[3] = u) : u = (e as any)[3];
  const f: any = (u as any).className;
  let b: any;
  if (((e as any)[4] as any) !== (i as any) || ((e as any)[5] as any) !== (t as any) || ((e as any)[6] as any) !== (c as any)) {
    let k: any;
    ((e as any)[8] as any) !== (i as any) || ((e as any)[9] as any) !== (c as any) ? (k = (x: any, p: any): any => {
      const g: any = !(x as any).isWidestLine && (p as any) !== (i as any) && (p as any) !== (c as any);
      return ((R as any).createElement as any)("div", {
        ...(Ne as any)(g && ((Vn as any).lineBlock as any)(((x as any).lineCount as any) * (Hn as any))),
        key: p
      }, (x as any).text);
    }, (e as any)[8] = i, (e as any)[9] = c, (e as any)[10] = k) : k = (e as any)[10], b = ((t as any).map as any)(k), (e as any)[4] = i, (e as any)[5] = t, (e as any)[6] = c, (e as any)[7] = b;
  } else b = (e as any)[7];
  let j: any;
  return ((e as any)[11] as any) !== (b as any) ? (j = ((o as any).jsx as any)(ze, {
    className: m,
    direction: "both",
    scrollbarVisibility: "hover",
    children: ((o as any).jsx as any)("pre", {
      className: f,
      dir: "ltr",
      ref: a,
      children: b
    })
  }), (e as any)[11] = b, (e as any)[12] = j) : j = (e as any)[12], j;
}
const ea: string = "allow-scripts";
function hs(this: any, s: any): any {
  (hs as any).d = 794;
  const e: any = ((I as any).c as any)(72),
    {
      source: t,
      name: n,
      downloadName: a,
      isOpen: l,
      onClose: r
    }: any = s,
    {
      _: i
    }: any = (ie as any)(),
    c: any = (Re as any)(t, l),
    d: any = (Fe as any)(t),
    [m, u]: any = ((R as any).useState as any)(!1);
  let f: any;
  e: {
    if ((c?.status as any) !== ("ready" as any)) {
      f = null;
      break e;
    }
    let M: any, O: any;
    if (((e as any)[0] as any) !== ((c as any).bytes as any)) {
      const T: any = ((new (TextDecoder as any)("utf-8", {
        fatal: !1
      }) as any).decode as any)((c as any).bytes);
      M = ((T as any).length as any) > (Ve as any), O = M ? ((T as any).slice as any)(0, Ve) : T, (e as any)[0] = (c as any).bytes, (e as any)[1] = M, (e as any)[2] = O;
    } else M = (e as any)[1], O = (e as any)[2];
    let W: any;
    ((e as any)[3] as any) !== (M as any) || ((e as any)[4] as any) !== (O as any) ? (W = {
      text: O,
      isTruncated: M
    }, (e as any)[3] = M, (e as any)[4] = O, (e as any)[5] = W) : W = (e as any)[5], f = W;
  }
  const b: any = f;
  let j: any;
  ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = {
    className: "sand-78zum5 sand-6s0dn4 sand-1jnr06f"
  }, (e as any)[6] = j) : j = (e as any)[6];
  const k: any = !m;
  let x: any;
  ((e as any)[7] as any) !== (i as any) ? (x = (i as any)({
    id: "rdUucN"
  }), (e as any)[7] = i, (e as any)[8] = x) : x = (e as any)[8];
  let p: any;
  ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = (): any => (u as any)(!1), (e as any)[9] = p) : p = (e as any)[9];
  let g: any;
  ((e as any)[10] as any) !== (k as any) || ((e as any)[11] as any) !== (x as any) ? (g = ((o as any).jsx as any)(gt, {
    isActive: k,
    label: x,
    onSelect: p
  }), (e as any)[10] = k, (e as any)[11] = x, (e as any)[12] = g) : g = (e as any)[12];
  let h: any;
  ((e as any)[13] as any) !== (i as any) ? (h = (i as any)({
    id: "wdxz7K"
  }), (e as any)[13] = i, (e as any)[14] = h) : h = (e as any)[14];
  let w: any;
  ((e as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = (): any => (u as any)(!0), (e as any)[15] = w) : w = (e as any)[15];
  let P: any;
  ((e as any)[16] as any) !== (m as any) || ((e as any)[17] as any) !== (h as any) ? (P = ((o as any).jsx as any)(gt, {
    isActive: m,
    label: h,
    onSelect: w
  }), (e as any)[16] = m, (e as any)[17] = h, (e as any)[18] = P) : P = (e as any)[18];
  let E: any;
  ((e as any)[19] as any) !== (g as any) || ((e as any)[20] as any) !== (P as any) ? (E = ((o as any).jsxs as any)("div", {
    ...j,
    children: [g, P]
  }), (e as any)[19] = g, (e as any)[20] = P, (e as any)[21] = E) : E = (e as any)[21];
  const N: any = E;
  let C: any;
  e: {
    if ((c?.status as any) === ("too-large" as any)) {
      let T: any;
      ((e as any)[22] as any) !== (a as any) || ((e as any)[23] as any) !== (t as any) ? (T = ((o as any).jsx as any)(ae, {
        downloadName: a,
        href: t
      }), (e as any)[22] = a, (e as any)[23] = t, (e as any)[24] = T) : T = (e as any)[24];
      let D: any;
      ((e as any)[25] as any) !== (i as any) ? (D = (i as any)({
        id: "X0/8Ci"
      }), (e as any)[25] = i, (e as any)[26] = D) : D = (e as any)[26];
      let V: any;
      ((e as any)[27] as any) !== (i as any) ? (V = (i as any)({
        id: "QxMRBI"
      }), (e as any)[27] = i, (e as any)[28] = V) : V = (e as any)[28];
      let F: any;
      ((e as any)[29] as any) !== (T as any) || ((e as any)[30] as any) !== (D as any) || ((e as any)[31] as any) !== (V as any) ? (F = ((o as any).jsx as any)(U, {
        action: T,
        detail: D,
        icon: "file-text",
        title: V
      }), (e as any)[29] = T, (e as any)[30] = D, (e as any)[31] = V, (e as any)[32] = F) : F = (e as any)[32], C = F;
      break e;
    }
    if ((c?.status as any) === ("failed" as any)) {
      let T: any;
      ((e as any)[33] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (T = ((o as any).jsx as any)(Ee, {
        id: "6gRgw8"
      }), (e as any)[33] = T) : T = (e as any)[33];
      let D: any;
      ((e as any)[34] as any) !== (d as any) ? (D = ((o as any).jsx as any)(Le, {
        onClick: d,
        size: "sm",
        variant: "secondary",
        children: T
      }), (e as any)[34] = d, (e as any)[35] = D) : D = (e as any)[35];
      let V: any;
      ((e as any)[36] as any) !== (i as any) ? (V = (i as any)({
        id: "OZ1zWg"
      }), (e as any)[36] = i, (e as any)[37] = V) : V = (e as any)[37];
      let F: any;
      ((e as any)[38] as any) !== (D as any) || ((e as any)[39] as any) !== (V as any) ? (F = ((o as any).jsx as any)(U, {
        action: D,
        icon: "file-text",
        title: V
      }), (e as any)[38] = D, (e as any)[39] = V, (e as any)[40] = F) : F = (e as any)[40], C = F;
      break e;
    }
    if ((c?.status as any) === ("missing" as any)) {
      let T: any;
      ((e as any)[41] as any) !== (i as any) ? (T = (i as any)({
        id: "bks/Jy"
      }), (e as any)[41] = i, (e as any)[42] = T) : T = (e as any)[42];
      let D: any;
      ((e as any)[43] as any) !== (T as any) ? (D = ((o as any).jsx as any)(U, {
        icon: "file-text",
        title: T
      }), (e as any)[43] = T, (e as any)[44] = D) : D = (e as any)[44], C = D;
      break e;
    }
    if ((b as any) == (null as any)) {
      let T: any;
      ((e as any)[45] as any) !== (i as any) ? (T = (i as any)({
        id: "zSf+pB"
      }), (e as any)[45] = i, (e as any)[46] = T) : T = (e as any)[46];
      let D: any;
      ((e as any)[47] as any) !== (T as any) ? (D = ((o as any).jsx as any)(Me, {
        label: T
      }), (e as any)[47] = T, (e as any)[48] = D) : D = (e as any)[48], C = D;
      break e;
    }
    if (m) {
      let T: any;
      ((e as any)[49] as any) !== ((b as any).text as any) || ((e as any)[50] as any) !== (t as any) ? (T = ((o as any).jsx as any)(ot, {
        name: t,
        text: (b as any).text
      }), (e as any)[49] = (b as any).text, (e as any)[50] = t, (e as any)[51] = T) : T = (e as any)[51], C = T;
      break e;
    }
    let M: any;
    ((e as any)[52] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (M = {
      className: "sand-1iyjqo2 sand-2lwn1j sand-h8yej3 sand-ng3xce sand-83z2og sand-19aimcq sand-4sht9k sand-2ssjo2 sand-1t137rt sand-54jfk2 sand-1k57tk5 sand-yqzfj1"
    }, (e as any)[52] = M) : M = (e as any)[52];
    let O: any;
    ((e as any)[53] as any) !== (t as any) ? (O = (On as any)(t), (e as any)[53] = t, (e as any)[54] = O) : O = (e as any)[54];
    let W: any;
    ((e as any)[55] as any) !== (n as any) || ((e as any)[56] as any) !== (O as any) ? (W = ((o as any).jsx as any)("iframe", {
      ...M,
      referrerPolicy: "no-referrer",
      sandbox: ea,
      src: O,
      title: n
    }), (e as any)[55] = n, (e as any)[56] = O, (e as any)[57] = W) : W = (e as any)[57], C = W;
  }
  const S: any = C;
  let y: any;
  ((e as any)[58] as any) !== (a as any) || ((e as any)[59] as any) !== (t as any) ? (y = ((o as any).jsx as any)(ae, {
    downloadName: a,
    href: t
  }), (e as any)[58] = a, (e as any)[59] = t, (e as any)[60] = y) : y = (e as any)[60];
  let v: any;
  ((e as any)[61] as any) !== (i as any) || ((e as any)[62] as any) !== (b?.isTruncated as any) ? (v = (b?.isTruncated as any) === (!0 as any) ? (i as any)({
    id: "FuZTcE"
  }) : void 0, (e as any)[61] = i, (e as any)[62] = b?.isTruncated, (e as any)[63] = v) : v = (e as any)[63];
  let z: any;
  return ((e as any)[64] as any) !== (S as any) || ((e as any)[65] as any) !== (l as any) || ((e as any)[66] as any) !== (n as any) || ((e as any)[67] as any) !== (r as any) || ((e as any)[68] as any) !== (y as any) || ((e as any)[69] as any) !== (v as any) || ((e as any)[70] as any) !== (N as any) ? (z = ((o as any).jsx as any)(Pe, {
    actions: y,
    isOpen: l,
    onClose: r,
    subtitle: v,
    title: n,
    toolbar: N,
    children: S
  }), (e as any)[64] = S, (e as any)[65] = l, (e as any)[66] = n, (e as any)[67] = r, (e as any)[68] = y, (e as any)[69] = v, (e as any)[70] = N, (e as any)[71] = z) : z = (e as any)[71], z;
}
function gt(this: any, s: any): any {
  (gt as any).d = 795;
  const e: any = ((I as any).c as any)(9),
    {
      isActive: t,
      label: n,
      onSelect: a
    }: any = s;
  let l: any;
  ((e as any)[0] as any) !== (t as any) ? (l = ({
    0: {
      className: "sand-2lah0s sand-jyslct sand-ng3xce sand-u4hgxq sand-yqdw3p sand-g8j3zb sand-e2zdcy sand-2vl965 sand-1ypdohk sand-jbqb8w sand-p09uzz sand-4b2ntj"
    },
    1: {
      className: "sand-2lah0s sand-jyslct sand-ng3xce sand-u4hgxq sand-yqdw3p sand-g8j3zb sand-e2zdcy sand-2vl965 sand-1ypdohk sand-10sxruw sand-1wd3ewq"
    }
  } as any)[(!!t as any) << (0 as any)], (e as any)[0] = t, (e as any)[1] = l) : l = (e as any)[1];
  let r: any;
  ((e as any)[2] as any) !== (n as any) ? (r = ((o as any).jsx as any)(Nt, {
    size: "xs",
    weight: "regular",
    children: n
  }), (e as any)[2] = n, (e as any)[3] = r) : r = (e as any)[3];
  let i: any;
  return ((e as any)[4] as any) !== (t as any) || ((e as any)[5] as any) !== (a as any) || ((e as any)[6] as any) !== (l as any) || ((e as any)[7] as any) !== (r as any) ? (i = ((o as any).jsx as any)("button", {
    ...l,
    "aria-pressed": t,
    onClick: a,
    type: "button",
    children: r
  }), (e as any)[4] = t, (e as any)[5] = a, (e as any)[6] = l, (e as any)[7] = r, (e as any)[8] = i) : i = (e as any)[8], i;
}
function ta(this: any, s: any): any {
  const e: any = [s];
  for (; ((e as any).length as any) > (0 as any);) {
    const t: any = ((e as any).pop as any)();
    if ((t as any) === (null as any)) continue;
    const n: any = typeof t;
    if (!((n as any) === ("boolean" as any) || (n as any) === ("number" as any) || (n as any) === ("string" as any))) {
      if (((Array as any).isArray as any)(t)) {
        for (const a of t) ((e as any).push as any)(a);
        continue;
      }
      if (!(Zs as any)(t)) return !1;
      for (const a in t) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(t, a) && ((e as any).push as any)((t as any)[a]);
    }
  }
  return !0;
}
function sa(this: any, s: any): any {
  const e: any = (Ks as any)(s);
  return (e as any) === (void 0 as any) || !(ta as any)(e) ? {
    status: "error"
  } : {
    status: "ok",
    value: e
  };
}
function Pt(this: any, s: any): any {
  return (typeof s as any) == ("object" as any) && (s as any) !== (null as any);
}
function Ct(this: any, s: any): any {
  return ((Array as any).isArray as any)(s);
}
function ps(this: any, s: any): any {
  let e: any = 0;
  for (const t in s) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(s, t) && (e += 1);
  return e;
}
function na(this: any, s: any): any {
  return (Pt as any)(s) ? (Ct as any)(s) ? (s as any).length : (ps as any)(s) : 0;
}
function aa(this: any, s: any, e: any): any {
  if (!(Pt as any)(s)) return [];
  if ((Ct as any)(s)) {
    const a: any = ((Math as any).min as any)(e, (s as any).length),
      l: any = [];
    for (let r: any = 0; (r as any) < (a as any); r++) {
      const i: any = (s as any)[r];
      (i as any) !== (void 0 as any) && ((l as any).push as any)([(String as any)(r), i]);
    }
    return l;
  }
  const t: any = [],
    n: any = e;
  for (const a in s) {
    if (!((((Object as any).prototype as any).hasOwnProperty as any).call as any)(s, a)) continue;
    if (((t as any).length as any) >= (n as any)) break;
    const l: any = (s as any)[a];
    (l as any) !== (void 0 as any) && ((t as any).push as any)([a, l]);
  }
  return t;
}
function la(this: any, s: any): any {
  if ((Ct as any)(s)) return `[${((pt as any)._ as any)({
    id: "6ki7F2",
    values: {
      0: (s as any).length
    }
  })}]`;
  const e: any = (ps as any)(s);
  return `{${((pt as any)._ as any)({
    id: "bdXW8L",
    values: {
      keys: e
    }
  })}}`;
}
function ra(this: any, s: any): any {
  return (typeof s as any) == ("string" as any) ? "string" : (typeof s as any) == ("number" as any) ? "number" : "keyword";
}
const ia: number = 200,
  mt: any = {
    valueString: {
      kMwMTN: "sand-1w5rjie",
      $$css: !0
    },
    valueNumber: {
      kMwMTN: "sand-11pqmr",
      $$css: !0
    },
    valueKeyword: {
      kMwMTN: "sand-169g1at",
      $$css: !0
    }
  },
  oa: any = {
    string: (mt as any).valueString,
    number: (mt as any).valueNumber,
    keyword: (mt as any).valueKeyword
  };
function xs(this: any, s: any): any {
  (xs as any).d = 796;
  const e: any = ((I as any).c as any)(4),
    {
      value: t,
      defaultExpandedDepth: n
    }: any = s;
  let a: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = (ne as any)("sand-json-tree", "sand-xwulf8 sand-1wm8ruf sand-a7kkou sand-19aaqeu sand-1hx0egp"), (e as any)[0] = a) : a = (e as any)[0];
  let l: any;
  return ((e as any)[1] as any) !== (n as any) || ((e as any)[2] as any) !== (t as any) ? (l = ((o as any).jsx as any)("div", {
    className: a,
    children: ((o as any).jsx as any)(yt, {
      defaultExpandedDepth: n,
      depth: 0,
      name: null,
      value: t
    })
  }), (e as any)[1] = n, (e as any)[2] = t, (e as any)[3] = l) : l = (e as any)[3], l;
}
function wt(this: any, s: any): any {
  (wt as any).d = 798;
  const e: any = ((I as any).c as any)(6),
    {
      name: t
    }: any = s;
  if ((t as any) == (null as any)) return null;
  let n: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = {
    className: "sand-1izesbo"
  }, (e as any)[0] = n) : n = (e as any)[0];
  let a: any;
  ((e as any)[1] as any) !== (t as any) ? (a = ((o as any).jsx as any)("span", {
    className: (n as any).className,
    children: t
  }), (e as any)[1] = t, (e as any)[2] = a) : a = (e as any)[2];
  let l: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = ((o as any).jsx as any)("span", {
    className: "sand-1e4uaio",
    children: ": "
  }), (e as any)[3] = l) : l = (e as any)[3];
  let r: any;
  return ((e as any)[4] as any) !== (a as any) ? (r = ((o as any).jsxs as any)((o as any).Fragment, {
    children: [a, l]
  }), (e as any)[4] = a, (e as any)[5] = r) : r = (e as any)[5], r;
}
function yt(this: any, s: any): any {
  (yt as any).d = 797;
  const e: any = ((I as any).c as any)(51),
    {
      name: t,
      value: n,
      depth: a,
      defaultExpandedDepth: l
    }: any = s,
    {
      _: r
    }: any = (ie as any)(),
    [i, c]: any = ((R as any).useState as any)((a as any) < (l as any));
  if (!(Pt as any)(n)) {
    let j: any;
    ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = {
      className: "sand-78zum5 sand-1cy8zhl sand-euugli"
    }, (e as any)[0] = j) : j = (e as any)[0];
    const k: any = (j as any).className;
    let x: any, p: any;
    ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = ((o as any).jsx as any)("span", {
      "aria-hidden": !0,
      className: "sand-2lah0s sand-1kky2od"
    }), p = {
      className: "sand-126k92a sand-j0a0fe sand-euugli"
    }, (e as any)[1] = x, (e as any)[2] = p) : (x = (e as any)[1], p = (e as any)[2]);
    const g: any = (p as any).className;
    let h: any;
    ((e as any)[3] as any) !== (t as any) ? (h = ((o as any).jsx as any)(wt, {
      name: t
    }), (e as any)[3] = t, (e as any)[4] = h) : h = (e as any)[4];
    let w: any;
    ((e as any)[5] as any) !== (n as any) ? (w = (Ne as any)((oa as any)[(ra as any)(n)]), (e as any)[5] = n, (e as any)[6] = w) : w = (e as any)[6];
    const P: any = (w as any).className;
    let E: any;
    ((e as any)[7] as any) !== (n as any) ? (E = ((JSON as any).stringify as any)(n), (e as any)[7] = n, (e as any)[8] = E) : E = (e as any)[8];
    let N: any;
    ((e as any)[9] as any) !== ((w as any).className as any) || ((e as any)[10] as any) !== (E as any) ? (N = ((o as any).jsx as any)("span", {
      className: P,
      children: E
    }), (e as any)[9] = (w as any).className, (e as any)[10] = E, (e as any)[11] = N) : N = (e as any)[11];
    let C: any;
    return ((e as any)[12] as any) !== (N as any) || ((e as any)[13] as any) !== (h as any) ? (C = ((o as any).jsxs as any)("div", {
      className: k,
      children: [x, ((o as any).jsxs as any)("span", {
        className: g,
        children: [h, N]
      })]
    }), (e as any)[12] = N, (e as any)[13] = h, (e as any)[14] = C) : C = (e as any)[14], C;
  }
  const d: any = (na as any)(n);
  let m: any;
  ((e as any)[15] as any) !== (n as any) ? (m = (la as any)(n), (e as any)[15] = n, (e as any)[16] = m) : m = (e as any)[16];
  const u: any = m,
    f: any = (d as any) > (0 as any);
  let b: any;
  if (((e as any)[17] as any) !== (r as any) || ((e as any)[18] as any) !== (d as any) || ((e as any)[19] as any) !== (l as any) || ((e as any)[20] as any) !== (a as any) || ((e as any)[21] as any) !== (f as any) || ((e as any)[22] as any) !== (i as any) || ((e as any)[23] as any) !== (t as any) || ((e as any)[24] as any) !== (u as any) || ((e as any)[25] as any) !== (n as any)) {
    const j: any = (aa as any)(n, ia),
      k: any = (d as any) - ((j as any).length as any);
    let x: any;
    ((e as any)[27] as any) !== (r as any) || ((e as any)[28] as any) !== (t as any) ? (x = (t as any) == (null as any) ? (r as any)({
      id: "hmkddV"
    }) : (r as any)({
      id: "7O3wht",
      values: {
        nodeName: t
      }
    }), (e as any)[27] = r, (e as any)[28] = t, (e as any)[29] = x) : x = (e as any)[29];
    const p: any = x;
    let g: any;
    ((e as any)[30] as any) !== (r as any) || ((e as any)[31] as any) !== (t as any) ? (g = (t as any) == (null as any) ? (r as any)({
      id: "Cdwdg/"
    }) : (r as any)({
      id: "69sY7m",
      values: {
        nodeName: t
      }
    }), (e as any)[30] = r, (e as any)[31] = t, (e as any)[32] = g) : g = (e as any)[32];
    const h: any = g;
    let w: any;
    ((e as any)[33] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = {
      className: "sand-78zum5 sand-1cy8zhl sand-euugli"
    }, (e as any)[33] = w) : w = (e as any)[33];
    const P: any = (w as any).className;
    let E: any;
    ((e as any)[34] as any) !== (p as any) || ((e as any)[35] as any) !== (h as any) || ((e as any)[36] as any) !== (f as any) || ((e as any)[37] as any) !== (i as any) ? (E = f ? ((o as any).jsx as any)("button", {
      "aria-expanded": i,
      "aria-label": i ? p : h,
      className: (ne as any)("sand-json-tree__caret", "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-1kky2od sand-1qx5ct2 sand-1ghz6dp sand-1717udv sand-jyslct sand-ng3xce sand-jbqb8w sand-1ypdohk sand-1e4uaio sand-7gh5u8 sand-1t137rt sand-zur7ow sand-12oqio5"),
      onClick: (): any => (c as any)(ca),
      type: "button",
      children: ((o as any).jsx as any)(cn, {
        "aria-hidden": !0,
        name: i ? "chevron-down-small" : "chevron-right-small",
        size: 10
      })
    }) : ((o as any).jsx as any)("span", {
      "aria-hidden": !0,
      className: "sand-2lah0s sand-1kky2od"
    }), (e as any)[34] = p, (e as any)[35] = h, (e as any)[36] = f, (e as any)[37] = i, (e as any)[38] = E) : E = (e as any)[38];
    let N: any;
    ((e as any)[39] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (N = {
      className: "sand-126k92a sand-j0a0fe sand-euugli"
    }, (e as any)[39] = N) : N = (e as any)[39];
    const C: any = (N as any).className;
    let S: any;
    ((e as any)[40] as any) !== (t as any) ? (S = ((o as any).jsx as any)(wt, {
      name: t
    }), (e as any)[40] = t, (e as any)[41] = S) : S = (e as any)[41];
    let y: any;
    ((e as any)[42] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = {
      className: "sand-4b2ntj"
    }, (e as any)[42] = y) : y = (e as any)[42];
    let v: any;
    ((e as any)[43] as any) !== (u as any) ? (v = ((o as any).jsx as any)("span", {
      className: (y as any).className,
      children: u
    }), (e as any)[43] = u, (e as any)[44] = v) : v = (e as any)[44];
    let z: any;
    ((e as any)[45] as any) !== (S as any) || ((e as any)[46] as any) !== (v as any) ? (z = ((o as any).jsxs as any)("span", {
      className: C,
      children: [S, v]
    }), (e as any)[45] = S, (e as any)[46] = v, (e as any)[47] = z) : z = (e as any)[47];
    let M: any;
    ((e as any)[48] as any) !== (z as any) || ((e as any)[49] as any) !== (E as any) ? (M = ((o as any).jsxs as any)("div", {
      className: P,
      children: [E, z]
    }), (e as any)[48] = z, (e as any)[49] = E, (e as any)[50] = M) : M = (e as any)[50], b = ((o as any).jsxs as any)("div", {
      children: [M, i && f ? ((o as any).jsxs as any)("div", {
        className: (ne as any)("sand-json-tree__children", "sand-13k8ehh sand-7coems sand-pilrb4 sand-1t7ytsu sand-gvg6ma"),
        children: [((j as any).map as any)((O: any): any => {
          const [W, T]: any = O;
          return ((o as any).jsx as any)(yt, {
            defaultExpandedDepth: l,
            depth: (a as any) + (1 as any),
            name: W,
            value: T
          }, W);
        }), (k as any) > (0 as any) ? ((o as any).jsx as any)("div", {
          className: "sand-78zum5 sand-1cy8zhl sand-euugli sand-f7dkkf sand-1e4uaio",
          children: (r as any)({
            id: "P1w8a0",
            values: {
              0: ((k as any).toLocaleString as any)((Qs as any)())
            }
          })
        }) : null]
      }) : null]
    }), (e as any)[17] = r, (e as any)[18] = d, (e as any)[19] = l, (e as any)[20] = a, (e as any)[21] = f, (e as any)[22] = i, (e as any)[23] = t, (e as any)[24] = u, (e as any)[25] = n, (e as any)[26] = b;
  } else b = (e as any)[26];
  return b;
}
function ca(this: any, s: any): any {
  return !s;
}
function da(this: any, s: any): any {
  if (((s as any).length as any) <= (Ve as any)) return s;
  const e: any = ((s as any).slice as any)(0, Ve);
  return ((new (TextDecoder as any)("utf-8", {
    ignoreBOM: !0
  }) as any).decode as any)(((new (TextEncoder as any)() as any).encode as any)(e));
}
const ua: any = (_t as any)((s: any): any => {
  const e: any = ((new (TextDecoder as any)("utf-8", {
      fatal: !1
    }) as any).decode as any)(s),
    t: any = (sa as any)(e);
  return ((t as any).status as any) === ("ok" as any) ? {
    status: "tree",
    value: (t as any).value
  } : {
    status: "source",
    text: (da as any)(e)
  };
});
function gs(this: any, s: any): any {
  (gs as any).d = 799;
  const e: any = ((I as any).c as any)(2);
  if (!(s as any).isOpen) return null;
  let t: any;
  return ((e as any)[0] as any) !== (s as any) ? (t = ((o as any).jsx as any)(ws, {
    ...s
  }), (e as any)[0] = s, (e as any)[1] = t) : t = (e as any)[1], t;
}
function ws(this: any, s: any): any {
  (ws as any).d = 800;
  const e: any = ((I as any).c as any)(45),
    {
      source: t,
      name: n,
      downloadName: a,
      isOpen: l,
      onClose: r
    }: any = s,
    {
      _: i
    }: any = (ie as any)(),
    c: any = (Re as any)(t, l),
    d: any = (Fe as any)(t);
  let m: any;
  ((e as any)[0] as any) !== (c as any) ? (m = (c?.status as any) === ("ready" as any) ? (ua as any)((c as any).bytes) : null, (e as any)[0] = c, (e as any)[1] = m) : m = (e as any)[1];
  const u: any = m;
  let f: any;
  e: {
    if ((c?.status as any) === ("too-large" as any)) {
      let p: any;
      ((e as any)[2] as any) !== (a as any) || ((e as any)[3] as any) !== (t as any) ? (p = ((o as any).jsx as any)(ae, {
        downloadName: a,
        href: t
      }), (e as any)[2] = a, (e as any)[3] = t, (e as any)[4] = p) : p = (e as any)[4];
      let g: any;
      ((e as any)[5] as any) !== (i as any) ? (g = (i as any)({
        id: "X0/8Ci"
      }), (e as any)[5] = i, (e as any)[6] = g) : g = (e as any)[6];
      let h: any;
      ((e as any)[7] as any) !== (i as any) ? (h = (i as any)({
        id: "QxMRBI"
      }), (e as any)[7] = i, (e as any)[8] = h) : h = (e as any)[8];
      let w: any;
      ((e as any)[9] as any) !== (p as any) || ((e as any)[10] as any) !== (g as any) || ((e as any)[11] as any) !== (h as any) ? (w = ((o as any).jsx as any)(U, {
        action: p,
        detail: g,
        icon: "brackets-curly",
        title: h
      }), (e as any)[9] = p, (e as any)[10] = g, (e as any)[11] = h, (e as any)[12] = w) : w = (e as any)[12], f = w;
      break e;
    }
    if ((c?.status as any) === ("failed" as any)) {
      let p: any;
      ((e as any)[13] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = ((o as any).jsx as any)(Ee, {
        id: "6gRgw8"
      }), (e as any)[13] = p) : p = (e as any)[13];
      let g: any;
      ((e as any)[14] as any) !== (d as any) ? (g = ((o as any).jsx as any)(Le, {
        onClick: d,
        size: "sm",
        variant: "secondary",
        children: p
      }), (e as any)[14] = d, (e as any)[15] = g) : g = (e as any)[15];
      let h: any;
      ((e as any)[16] as any) !== (i as any) ? (h = (i as any)({
        id: "OZ1zWg"
      }), (e as any)[16] = i, (e as any)[17] = h) : h = (e as any)[17];
      let w: any;
      ((e as any)[18] as any) !== (g as any) || ((e as any)[19] as any) !== (h as any) ? (w = ((o as any).jsx as any)(U, {
        action: g,
        icon: "brackets-curly",
        title: h
      }), (e as any)[18] = g, (e as any)[19] = h, (e as any)[20] = w) : w = (e as any)[20], f = w;
      break e;
    }
    if ((c?.status as any) === ("missing" as any)) {
      let p: any;
      ((e as any)[21] as any) !== (i as any) ? (p = (i as any)({
        id: "bks/Jy"
      }), (e as any)[21] = i, (e as any)[22] = p) : p = (e as any)[22];
      let g: any;
      ((e as any)[23] as any) !== (p as any) ? (g = ((o as any).jsx as any)(U, {
        icon: "brackets-curly",
        title: p
      }), (e as any)[23] = p, (e as any)[24] = g) : g = (e as any)[24], f = g;
      break e;
    }
    if ((u as any) == (null as any)) {
      let p: any;
      ((e as any)[25] as any) !== (i as any) ? (p = (i as any)({
        id: "zSf+pB"
      }), (e as any)[25] = i, (e as any)[26] = p) : p = (e as any)[26];
      let g: any;
      ((e as any)[27] as any) !== (p as any) ? (g = ((o as any).jsx as any)(Me, {
        label: p
      }), (e as any)[27] = p, (e as any)[28] = g) : g = (e as any)[28], f = g;
      break e;
    }
    if (((u as any).status as any) === ("tree" as any)) {
      let p: any;
      ((e as any)[29] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = {
        className: "sand-1iyjqo2 sand-2lwn1j"
      }, (e as any)[29] = p) : p = (e as any)[29];
      const g: any = (p as any).className;
      let h: any;
      ((e as any)[30] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = {
        className: "sand-9f619 sand-1xr5p7o sand-yamay9 sand-64bnmy sand-84yb8i sand-13jy36j"
      }, (e as any)[30] = h) : h = (e as any)[30];
      let w: any;
      ((e as any)[31] as any) !== ((u as any).value as any) ? (w = ((o as any).jsx as any)(ze, {
        className: g,
        scrollbarVisibility: "hover",
        children: ((o as any).jsx as any)("div", {
          className: (h as any).className,
          children: ((o as any).jsx as any)(xs, {
            defaultExpandedDepth: 2,
            value: (u as any).value
          })
        })
      }), (e as any)[31] = (u as any).value, (e as any)[32] = w) : w = (e as any)[32], f = w;
      break e;
    }
    let x: any;
    ((e as any)[33] as any) !== ((u as any).text as any) || ((e as any)[34] as any) !== (t as any) ? (x = ((o as any).jsx as any)(ot, {
      name: t,
      text: (u as any).text
    }), (e as any)[33] = (u as any).text, (e as any)[34] = t, (e as any)[35] = x) : x = (e as any)[35], f = x;
  }
  const b: any = f;
  let j: any;
  ((e as any)[36] as any) !== (a as any) || ((e as any)[37] as any) !== (t as any) ? (j = ((o as any).jsx as any)(ae, {
    downloadName: a,
    href: t
  }), (e as any)[36] = a, (e as any)[37] = t, (e as any)[38] = j) : j = (e as any)[38];
  let k: any;
  return ((e as any)[39] as any) !== (b as any) || ((e as any)[40] as any) !== (l as any) || ((e as any)[41] as any) !== (n as any) || ((e as any)[42] as any) !== (r as any) || ((e as any)[43] as any) !== (j as any) ? (k = ((o as any).jsx as any)(Pe, {
    actions: j,
    isOpen: l,
    onClose: r,
    title: n,
    children: b
  }), (e as any)[39] = b, (e as any)[40] = l, (e as any)[41] = n, (e as any)[42] = r, (e as any)[43] = j, (e as any)[44] = k) : k = (e as any)[44], k;
}
let Dt: any = !1;
async function ys(this: any): Promise<any> {
  const s: any = await (Xe as any)((): any => import("./chunk-pdf-CyhaVadp.js"), [], (import.meta as any).url);
  return !Dt && (((s as any).GlobalWorkerOptions as any).workerSrc as any) === ("" as any) && (((s as any).GlobalWorkerOptions as any).workerSrc = (new (URL as any)(("" as any) + ((new (URL as any)("pdf.worker.min-qwK7q_zL.mjs", (import.meta as any).url) as any).href as any), (import.meta as any).url) as any).href, Dt = !0), s;
}
async function bs(this: any, s: any): Promise<any> {
  const e: any = await (ys as any)(),
    t: any = new (Uint8Array as any)(s);
  return await (((e as any).getDocument as any)({
    data: t,
    isEvalSupported: !1,
    disableAutoFetch: !0
  }) as any).promise;
}
const fa: any = {
  scale: 1,
  viewportWidth: 0,
  viewportHeight: 0,
  devicePixelRatio: 1
};
function ma(this: any, s: any, e: any): any {
  return ((s as any).scale as any) === ((e as any).scale as any) && ((s as any).viewportWidth as any) === ((e as any).viewportWidth as any) && ((s as any).viewportHeight as any) === ((e as any).viewportHeight as any) && ((s as any).devicePixelRatio as any) === ((e as any).devicePixelRatio as any);
}
function ha(this: any, {
  live: s,
  deferred: e
}: any): any {
  return ((e as any).viewportWidth as any) > (0 as any) && ((e as any).viewportHeight as any) > (0 as any) ? e : s;
}
function Ot(this: any, s: any, e: any): any {
  return ((s as any).displayScale as any) === ((e as any).displayScale as any) && ((s as any).devicePixelRatio as any) === ((e as any).devicePixelRatio as any) && ((s as any).viewportWidth as any) === ((e as any).viewportWidth as any) && ((s as any).viewportHeight as any) === ((e as any).viewportHeight as any);
}
const pa: number = 8,
  At: any = (1 as any) << (24 as any),
  It: number = 32767;
function qt(this: any, s: any): any {
  return (s as any) > (0 as any);
}
function xa(this: any, s: any, e: any): any {
  const t: any = ((s as any).width as any) * ((s as any).height as any),
    n: any = ((e as any).displayScale as any) * ((e as any).devicePixelRatio as any),
    a: any = (qt as any)(n) ? n : 1;
  if (!(qt as any)(t)) return a;
  const l: any = (((e as any).viewportWidth as any) * ((e as any).viewportHeight as any) as any) * (((e as any).devicePixelRatio as any) ** (2 as any) as any),
    r: any = (l as any) > (0 as any) ? ((Math as any).min as any)(At, (l as any) * (pa as any)) : At;
  return ((Math as any).min as any)(a, ((Math as any).sqrt as any)((r as any) / (t as any)), (It as any) / ((s as any).width as any), (It as any) / ((s as any).height as any));
}
function ga(this: any, s: any, e: any): any {
  const t: any = ((s as any).getViewport as any)({
      scale: 1
    }),
    n: any = {
      width: (t as any).width,
      height: (t as any).height
    },
    a: any = ((s as any).getViewport as any)({
      scale: (xa as any)(n, e)
    });
  return {
    pageSize: n,
    viewport: a,
    canvasWidth: ((Math as any).max as any)(1, ((Math as any).floor as any)((a as any).width)),
    canvasHeight: ((Math as any).max as any)(1, ((Math as any).floor as any)((a as any).height))
  };
}
async function wa(this: any, {
  page: s,
  container: e,
  viewport: t
}: any): Promise<any> {
  const n: any = await (ys as any)();
  ((e as any).replaceChildren as any)();
  const a: any = new ((n as any).TextLayer as any)({
    textContentSource: ((s as any).streamTextContent as any)(),
    container: e,
    viewport: t
  });
  return {
    rendered: ((a as any).render as any)(),
    cancel(): any {
      ((a as any).cancel as any)();
    }
  };
}
const ya: any = (mn as any)({
    name: "pdf-viewer-scroll-page",
    delayMs: 0
  }),
  js: number = .25,
  ba: number = 4,
  tt: number = .25,
  ja: number = .5,
  ka: number = 4,
  va: string = "400px 0px";
function Sa(this: any, s: any): any {
  return (((Math as any).round as any)((s as any) * (4 as any)) as any) / (4 as any) || js;
}
function ks(this: any): any {
  const s: any = (window as any).devicePixelRatio;
  return ((Number as any).isFinite as any)(s) && (s as any) > (0 as any) ? s : 1;
}
function Na(this: any, s: any, e: any, t: any): any {
  const n: any = ((e as any).width as any) - (32 as any),
    a: any = {
      scale: (n as any) > (0 as any) ? (Kt as any)((n as any) / ((t as any).width as any), js, ba) : (s as any).scale,
      viewportWidth: (e as any).width,
      viewportHeight: (e as any).height,
      devicePixelRatio: (ks as any)()
    };
  return (ma as any)(s, a) ? s : a;
}
const at: any = {
    status: "loading"
  },
  _a: any = (): any => (): any => {},
  Pa: any = (): any => (): any => {},
  $t: any = (): any => at,
  it: any = new (WeakMap as any)(),
  Ca: number = 2,
  Ea: number = 200,
  _e: any = new (Map as any)();
function vs(this: any, s: any): any {
  const e: any = ((_e as any).get as any)(s);
  return (e as any) == (null as any) ? null : (((_e as any).delete as any)(s), (((e as any).reparse as any).dispose as any)(), (e as any).ready);
}
function bt(this: any, s: any): any {
  (vs as any)(s)?.doc.destroy();
}
function za(this: any, s: any, e: any): any {
  (((bs as any)(s) as any).then as any)((t: any): any => {
    if ((((_e as any).get as any)(s) as any) !== (e as any)) {
      ((t as any).destroy as any)();
      return;
    }
    const n: any = ((it as any).get as any)(((e as any).ready as any).doc);
    (n as any) != (null as any) && ((it as any).set as any)(t, n), ((_e as any).set as any)(s, {
      ready: {
        ...(e as any).ready,
        doc: t
      },
      reparse: (e as any).reparse
    }), ((((e as any).ready as any).doc as any).destroy as any)();
  }, (t: any): any => {
    (kt as any)(t, {
      level: "warning",
      tags: {
        sand_area: "pdf-viewer"
      }
    }), (((_e as any).get as any)(s) as any) === (e as any) && (bt as any)(s);
  });
}
function La(this: any, s: any, e: any): any {
  (bt as any)(s);
  const t: any = {
    ready: e,
    reparse: ((hn as any).schedule as any)(Ea, (): any => {
      (za as any)(s, t);
    })
  };
  ((_e as any).set as any)(s, t);
  for (const n of ((_e as any).keys as any)()) {
    if (((_e as any).size as any) <= (Ca as any)) break;
    (bt as any)(n);
  }
}
function Ma(this: any, s: any): any {
  const e: any = (St as any)(((_e as any).get as any)(s)?.ready ?? at);
  let t: any = 0,
    n: any = 0;
  const a: any = async (l: any): Promise<any> => {
    let r: any = null;
    try {
      if (r = await (bs as any)(s), (t as any) !== (l as any) || (n as any) === (0 as any)) {
        ((r as any).destroy as any)();
        return;
      }
      const c: any = (((await ((r as any).getPage as any)(1)) as any).getViewport as any)({
        scale: 1
      });
      if ((t as any) !== (l as any) || (n as any) === (0 as any)) {
        ((r as any).destroy as any)();
        return;
      }
      const d: any = r;
      r = null, ((e as any).set as any)({
        status: "ready",
        doc: d,
        baseSize: {
          width: (c as any).width,
          height: (c as any).height
        }
      });
    } catch {
      if (r?.destroy(), (t as any) !== (l as any) || (n as any) === (0 as any)) return;
      ((e as any).set as any)({
        status: "error"
      });
    }
  };
  return {
    getSnapshot: (e as any).get,
    subscribe: (e as any).subscribe,
    arm: (): any => {
      const l: any = (n as any) === (0 as any);
      if (n += 1, l) {
        const i: any = (vs as any)(s);
        ((e as any).set as any)(i ?? at), t += 1, (i as any) == (null as any) && (a as any)(t);
      }
      let r: any = !0;
      return (): any => {
        if (!r || (r = !1, n -= 1, (n as any) !== (0 as any))) return;
        t += 1;
        const i: any = ((e as any).get as any)();
        ((e as any).set as any)(at), ((i as any).status as any) === ("ready" as any) && (La as any)(s, i);
      };
    }
  };
}
function Ss(this: any, s: any): any {
  (Ss as any).d = 806;
  const e: any = ((I as any).c as any)(5),
    {
      source: t,
      name: n,
      downloadName: a,
      isOpen: l,
      onClose: r
    }: any = s;
  if (!l) return null;
  let i: any;
  return ((e as any)[0] as any) !== (a as any) || ((e as any)[1] as any) !== (n as any) || ((e as any)[2] as any) !== (r as any) || ((e as any)[3] as any) !== (t as any) ? (i = ((o as any).jsx as any)(Ns, {
    downloadName: a,
    name: n,
    onClose: r,
    source: t
  }, t), (e as any)[0] = a, (e as any)[1] = n, (e as any)[2] = r, (e as any)[3] = t, (e as any)[4] = i) : i = (e as any)[4], i;
}
function Ns(this: any, s: any): any {
  (Ns as any).d = 801;
  const e: any = ((I as any).c as any)(48),
    {
      source: t,
      name: n,
      downloadName: a,
      onClose: l
    }: any = s,
    {
      _: r
    }: any = (ie as any)(),
    {
      _: i
    }: any = (ie as any)(),
    c: any = (Re as any)(t, !0),
    d: any = (Fe as any)(t);
  let m: any;
  ((e as any)[0] as any) !== (c as any) ? (m = (c?.status as any) === ("ready" as any) ? (Ma as any)((c as any).bytes) : null, (e as any)[0] = c, (e as any)[1] = m) : m = (e as any)[1];
  const u: any = m,
    f: any = ((R as any).useSyncExternalStore as any)(u?.subscribe ?? _a, u?.getSnapshot ?? $t, u?.getSnapshot ?? $t);
  (vt as any)(u?.arm ?? Pa);
  const b: any = ((f as any).status as any) === ("ready" as any) ? (f as any).doc : null,
    j: any = ((f as any).status as any) === ("ready" as any) ? (f as any).baseSize : null,
    [k, x]: any = ((R as any).useState as any)(fa),
    p: any = ((R as any).useDeferredValue as any)(k),
    [g, h]: any = ((R as any).useState as any)(1),
    [w, P]: any = ((R as any).useState as any)(1),
    [E, N]: any = ((R as any).useState as any)(null),
    C: any = ((R as any).useRef as any)(null);
  let S: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (S = [], (e as any)[2] = S) : S = (e as any)[2];
  const y: any = ((R as any).useRef as any)(S),
    v: any = ((R as any).useRef as any)(null),
    z: any = b?.numPages ?? 0;
  let M: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (M = (K: any): any => {
    (h as any)(($: any): any => (Kt as any)(($ as any) + (K as any), ja, ka));
  }, (e as any)[3] = M) : M = (e as any)[3];
  const O: any = M;
  let W: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (W = (K: any): any => {
    if ((K as any) == (null as any)) return;
    const $: any = new (ResizeObserver as any)((): any => {
      (v as any).current = {
        width: (K as any).clientWidth,
        height: (K as any).clientHeight
      };
    });
    return (($ as any).observe as any)(K), (): any => (($ as any).disconnect as any)();
  }, (e as any)[4] = W) : W = (e as any)[4];
  const T: any = W;
  let D: any;
  ((e as any)[5] as any) !== (j as any) || ((e as any)[6] as any) !== (z as any) ? (D = (K: any): any => {
    (C as any).current = K;
    const $: any = K?.viewportElement ?? null;
    if (($ as any) == (null as any) || (j as any) == (null as any)) return;
    const ge: any = (H: any): any => {
      (v as any).current = H, (x as any)((Q: any): any => (Na as any)(Q, H, j));
    };
    (N as any)($), (ge as any)((v as any).current ?? {
      width: ($ as any).clientWidth,
      height: ($ as any).clientHeight
    });
    const he: any = new (ResizeObserver as any)((): any => {
      (ge as any)({
        width: ($ as any).clientWidth,
        height: ($ as any).clientHeight
      });
    });
    ((he as any).observe as any)($);
    const J: any = new (AbortController as any)();
    ((window as any).addEventListener as any)("resize", (): any => (ge as any)({
      width: ($ as any).clientWidth,
      height: ($ as any).clientHeight
    }), {
      signal: (J as any).signal
    });
    let we: any = null;
    const ke: any = function (this: any): any {
      we?.removeEventListener("change", Ce), we = ((window as any).matchMedia as any)(`(resolution: ${(ks as any)()}dppx)`), ((we as any).addEventListener as any)("change", Ce);
    };
    function Ce(this: any): any {
      ((v as any).current as any) != (null as any) && (ge as any)((v as any).current), (ke as any)();
    }
    (ke as any)();
    const De: any = (H: any): any => {
        let Q: any = 1;
        for (let Y: any = 0; (Y as any) < (((y as any).current as any).length as any); Y = (Y as any) + (1 as any), Y) {
          const pe: any = ((y as any).current as any)[Y];
          (pe as any) != (null as any) && ((pe as any).offsetTop as any) <= (H as any) && (Q = (Y as any) + (1 as any));
        }
        (P as any)(Q);
      },
      Te: any = ((ya as any).wrap as any)(De);
    (($ as any).addEventListener as any)("scroll", (): any => {
      (Te as any)((($ as any).scrollTop as any) + (80 as any));
    }, {
      passive: !0,
      signal: (J as any).signal
    });
    const Oe: any = (H: any): any => {
        const Q: any = ((y as any).current as any)[(H as any) - (1 as any)];
        (Q as any) != (null as any) && (($ as any).scrollTo as any)({
          top: ((Math as any).max as any)(0, ((Q as any).offsetTop as any) - (16 as any))
        });
      },
      Ae: any = (H: any): any => {
        const Q: any = (Zt as any)((H as any).key, (Be as any)());
        ((H as any).key as any) === ("+" as any) || ((H as any).key as any) === ("=" as any) ? (((H as any).preventDefault as any)(), (O as any)(tt)) : ((H as any).key as any) === ("-" as any) ? (((H as any).preventDefault as any)(), (O as any)(-tt)) : ((H as any).key as any) === ("PageDown" as any) || (Q as any) === (1 as any) ? (((H as any).preventDefault as any)(), (P as any)((Y: any): any => {
          const pe: any = ((Math as any).min as any)(z, (Y as any) + (1 as any));
          return (Oe as any)(pe), pe;
        })) : (((H as any).key as any) === ("PageUp" as any) || (Q as any) === (-1 as any)) && (((H as any).preventDefault as any)(), (P as any)((Y: any): any => {
          const pe: any = ((Math as any).max as any)(1, (Y as any) - (1 as any));
          return (Oe as any)(pe), pe;
        }));
      };
    return ((document as any).addEventListener as any)("keydown", Ae), (): any => {
      ((he as any).disconnect as any)(), ((J as any).abort as any)(), we?.removeEventListener("change", Ce), ((document as any).removeEventListener as any)("keydown", Ae), ((Te as any).dispose as any)(), ((C as any).current as any) === (K as any) && ((C as any).current = null);
    };
  }, (e as any)[5] = j, (e as any)[6] = z, (e as any)[7] = D) : D = (e as any)[7];
  const V: any = D,
    F: any = ((k as any).scale as any) * (g as any);
  let G: any, oe: any;
  ((e as any)[8] as any) !== (p as any) || ((e as any)[9] as any) !== (k as any) ? (G = (ha as any)({
    live: k,
    deferred: p
  }), oe = (Sa as any)((G as any).scale), (e as any)[8] = p, (e as any)[9] = k, (e as any)[10] = G, (e as any)[11] = oe) : (G = (e as any)[10], oe = (e as any)[11]);
  const le: any = oe,
    fe: any = ((G as any).scale as any) * (g as any);
  let re: any;
  ((e as any)[12] as any) !== ((G as any).devicePixelRatio as any) || ((e as any)[13] as any) !== ((G as any).viewportHeight as any) || ((e as any)[14] as any) !== ((G as any).viewportWidth as any) || ((e as any)[15] as any) !== (fe as any) ? (re = {
    displayScale: fe,
    devicePixelRatio: (G as any).devicePixelRatio,
    viewportWidth: (G as any).viewportWidth,
    viewportHeight: (G as any).viewportHeight
  }, (e as any)[12] = (G as any).devicePixelRatio, (e as any)[13] = (G as any).viewportHeight, (e as any)[14] = (G as any).viewportWidth, (e as any)[15] = fe, (e as any)[16] = re) : re = (e as any)[16];
  const xe: any = re;
  let ce: any;
  ((e as any)[17] as any) !== (r as any) || ((e as any)[18] as any) !== (w as any) || ((e as any)[19] as any) !== (b as any) || ((e as any)[20] as any) !== (z as any) ? (ce = (b as any) != (null as any) ? ((o as any).jsxs as any)((o as any).Fragment, {
    children: [((o as any).jsx as any)(Lt, {
      "aria-label": (r as any)({
        id: "FjkaiT"
      }),
      icon: "magnifying-glass-minus",
      onClick: (): any => (O as any)(-tt),
      size: "sm"
    }), ((o as any).jsx as any)(Nt, {
      className: "sand-gtd3b9 sand-2b8uid sand-ss6m8b",
      color: "secondary",
      size: "xs",
      children: (r as any)({
        id: "zvGLsM",
        values: {
          currentPage: w,
          numPages: z
        }
      })
    }), ((o as any).jsx as any)(Lt, {
      "aria-label": (r as any)({
        id: "AWOSPo"
      }),
      icon: "magnifying-glass-plus",
      onClick: (): any => (O as any)(tt),
      size: "sm"
    })]
  }) : void 0, (e as any)[17] = r, (e as any)[18] = w, (e as any)[19] = b, (e as any)[20] = z, (e as any)[21] = ce) : ce = (e as any)[21];
  const me: any = ce;
  let Z: any;
  ((e as any)[22] as any) !== (a as any) || ((e as any)[23] as any) !== (t as any) ? (Z = ((o as any).jsx as any)(ae, {
    downloadName: a,
    href: t
  }), (e as any)[22] = a, (e as any)[23] = t, (e as any)[24] = Z) : Z = (e as any)[24];
  let ee: any;
  ((e as any)[25] as any) !== (r as any) || ((e as any)[26] as any) !== (z as any) ? (ee = (z as any) > (0 as any) ? (r as any)({
    id: "mrNxhr",
    values: {
      numPages: z
    }
  }) : void 0, (e as any)[25] = r, (e as any)[26] = z, (e as any)[27] = ee) : ee = (e as any)[27];
  const be: any = ((k as any).viewportWidth as any) > (0 as any);
  let B: any;
  ((e as any)[28] as any) !== (i as any) || ((e as any)[29] as any) !== (V as any) || ((e as any)[30] as any) !== (c as any) || ((e as any)[31] as any) !== (F as any) || ((e as any)[32] as any) !== (f as any) || ((e as any)[33] as any) !== (a as any) || ((e as any)[34] as any) !== (xe as any) || ((e as any)[35] as any) !== (d as any) || ((e as any)[36] as any) !== (t as any) || ((e as any)[37] as any) !== (be as any) || ((e as any)[38] as any) !== (le as any) || ((e as any)[39] as any) !== (E as any) ? (B = ((o as any).jsx as any)(_s, {
    attachScrollArea: V,
    attachViewportSlot: T,
    bytes: c,
    displayScale: F,
    documentState: f,
    downloadName: a,
    href: t,
    isMeasured: be,
    onRetry: d,
    pageRefs: y,
    rasterTarget: xe,
    textLayerScale: le,
    translate: i,
    viewportEl: E
  }), (e as any)[28] = i, (e as any)[29] = V, (e as any)[30] = c, (e as any)[31] = F, (e as any)[32] = f, (e as any)[33] = a, (e as any)[34] = xe, (e as any)[35] = d, (e as any)[36] = t, (e as any)[37] = be, (e as any)[38] = le, (e as any)[39] = E, (e as any)[40] = B) : B = (e as any)[40];
  let de: any;
  return ((e as any)[41] as any) !== (n as any) || ((e as any)[42] as any) !== (l as any) || ((e as any)[43] as any) !== (Z as any) || ((e as any)[44] as any) !== (ee as any) || ((e as any)[45] as any) !== (B as any) || ((e as any)[46] as any) !== (me as any) ? (de = ((o as any).jsx as any)(Pe, {
    actions: Z,
    isOpen: !0,
    onClose: l,
    subtitle: ee,
    title: n,
    toolbar: me,
    children: B
  }), (e as any)[41] = n, (e as any)[42] = l, (e as any)[43] = Z, (e as any)[44] = ee, (e as any)[45] = B, (e as any)[46] = me, (e as any)[47] = de) : de = (e as any)[47], de;
}
function _s(this: any, s: any): any {
  (_s as any).d = 802;
  const e: any = ((I as any).c as any)(54),
    {
      translate: t,
      bytes: n,
      documentState: a,
      displayScale: l,
      textLayerScale: r,
      rasterTarget: i,
      isMeasured: c,
      attachViewportSlot: d,
      attachScrollArea: m,
      viewportEl: u,
      pageRefs: f,
      href: b,
      downloadName: j,
      onRetry: k
    }: any = s;
  if ((n?.status as any) === ("too-large" as any)) {
    let N: any;
    ((e as any)[0] as any) !== (j as any) || ((e as any)[1] as any) !== (b as any) ? (N = ((o as any).jsx as any)(ae, {
      downloadName: j,
      href: b
    }), (e as any)[0] = j, (e as any)[1] = b, (e as any)[2] = N) : N = (e as any)[2];
    let C: any;
    ((e as any)[3] as any) !== (t as any) ? (C = (t as any)({
      id: "Ot2xhW"
    }), (e as any)[3] = t, (e as any)[4] = C) : C = (e as any)[4];
    let S: any;
    ((e as any)[5] as any) !== (t as any) ? (S = (t as any)({
      id: "CxqhaM"
    }), (e as any)[5] = t, (e as any)[6] = S) : S = (e as any)[6];
    let y: any;
    return ((e as any)[7] as any) !== (N as any) || ((e as any)[8] as any) !== (C as any) || ((e as any)[9] as any) !== (S as any) ? (y = ((o as any).jsx as any)(U, {
      action: N,
      detail: C,
      icon: "file-pdf",
      title: S
    }), (e as any)[7] = N, (e as any)[8] = C, (e as any)[9] = S, (e as any)[10] = y) : y = (e as any)[10], y;
  }
  if ((n?.status as any) === ("failed" as any)) {
    let N: any;
    ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (N = ((o as any).jsx as any)(Ee, {
      id: "6gRgw8"
    }), (e as any)[11] = N) : N = (e as any)[11];
    let C: any;
    ((e as any)[12] as any) !== (k as any) ? (C = ((o as any).jsx as any)(Le, {
      onClick: k,
      size: "sm",
      variant: "secondary",
      children: N
    }), (e as any)[12] = k, (e as any)[13] = C) : C = (e as any)[13];
    let S: any;
    ((e as any)[14] as any) !== (t as any) ? (S = (t as any)({
      id: "OZ1zWg"
    }), (e as any)[14] = t, (e as any)[15] = S) : S = (e as any)[15];
    let y: any;
    return ((e as any)[16] as any) !== (C as any) || ((e as any)[17] as any) !== (S as any) ? (y = ((o as any).jsx as any)(U, {
      action: C,
      icon: "file-pdf",
      title: S
    }), (e as any)[16] = C, (e as any)[17] = S, (e as any)[18] = y) : y = (e as any)[18], y;
  }
  if ((n?.status as any) === ("missing" as any) || ((a as any).status as any) === ("error" as any)) {
    let N: any;
    ((e as any)[19] as any) !== ((a as any).status as any) || ((e as any)[20] as any) !== (t as any) ? (N = ((a as any).status as any) === ("error" as any) ? (t as any)({
      id: "YA05MO"
    }) : (t as any)({
      id: "bks/Jy"
    }), (e as any)[19] = (a as any).status, (e as any)[20] = t, (e as any)[21] = N) : N = (e as any)[21];
    let C: any;
    return ((e as any)[22] as any) !== (N as any) ? (C = ((o as any).jsx as any)(U, {
      icon: "file-pdf",
      title: N
    }), (e as any)[22] = N, (e as any)[23] = C) : C = (e as any)[23], C;
  }
  if (((a as any).status as any) !== ("ready" as any)) {
    let N: any;
    ((e as any)[24] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (N = {
      className: "sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-2lwn1j"
    }, (e as any)[24] = N) : N = (e as any)[24];
    let C: any;
    ((e as any)[25] as any) !== (t as any) ? (C = (t as any)({
      id: "IGQBHQ"
    }), (e as any)[25] = t, (e as any)[26] = C) : C = (e as any)[26];
    let S: any;
    ((e as any)[27] as any) !== (C as any) ? (S = ((o as any).jsx as any)(Me, {
      label: C
    }), (e as any)[27] = C, (e as any)[28] = S) : S = (e as any)[28];
    let y: any;
    return ((e as any)[29] as any) !== (d as any) || ((e as any)[30] as any) !== (S as any) ? (y = ((o as any).jsx as any)("div", {
      ...N,
      ref: d,
      children: S
    }), (e as any)[29] = d, (e as any)[30] = S, (e as any)[31] = y) : y = (e as any)[31], y;
  }
  const {
    doc: x,
    baseSize: p
  }: any = a;
  let g: any;
  ((e as any)[32] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = {
    className: "sand-1iyjqo2 sand-2lwn1j sand-1ua6jya"
  }, (e as any)[32] = g) : g = (e as any)[32];
  const h: any = (g as any).className;
  let w: any;
  ((e as any)[33] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-ou54vl sand-1cnzs8 sand-84yb8i sand-f7dkkf sand-v54qhq"
  }, (e as any)[33] = w) : w = (e as any)[33];
  let P: any;
  if (((e as any)[34] as any) !== (p as any) || ((e as any)[35] as any) !== (l as any) || ((e as any)[36] as any) !== (x as any) || ((e as any)[37] as any) !== (c as any) || ((e as any)[38] as any) !== (f as any) || ((e as any)[39] as any) !== (i as any) || ((e as any)[40] as any) !== (r as any) || ((e as any)[41] as any) !== (u as any)) {
    let N: any;
    ((e as any)[43] as any) !== (p as any) || ((e as any)[44] as any) !== (l as any) || ((e as any)[45] as any) !== (x as any) || ((e as any)[46] as any) !== (f as any) || ((e as any)[47] as any) !== (i as any) || ((e as any)[48] as any) !== (r as any) || ((e as any)[49] as any) !== (u as any) ? (N = (C: any, S: any): any => ((o as any).jsx as any)(Ps, {
      baseSize: p,
      doc: x,
      displayScale: l,
      pageRefs: f,
      pageNumber: (S as any) + (1 as any),
      rasterTarget: i,
      textLayerScale: r,
      viewport: u
    }, S), (e as any)[43] = p, (e as any)[44] = l, (e as any)[45] = x, (e as any)[46] = f, (e as any)[47] = i, (e as any)[48] = r, (e as any)[49] = u, (e as any)[50] = N) : N = (e as any)[50], P = ((o as any).jsx as any)("div", {
      className: (w as any).className,
      children: ((Array as any).from as any)({
        length: c ? (x as any).numPages : 0
      }, N)
    }), (e as any)[34] = p, (e as any)[35] = l, (e as any)[36] = x, (e as any)[37] = c, (e as any)[38] = f, (e as any)[39] = i, (e as any)[40] = r, (e as any)[41] = u, (e as any)[42] = P;
  } else P = (e as any)[42];
  let E: any;
  return ((e as any)[51] as any) !== (m as any) || ((e as any)[52] as any) !== (P as any) ? (E = ((o as any).jsx as any)(ze, {
    className: h,
    direction: "both",
    ref: m,
    scrollbarVisibility: "hover",
    children: P
  }), (e as any)[51] = m, (e as any)[52] = P, (e as any)[53] = E) : E = (e as any)[53], E;
}
function Wt(this: any, s: any, e: any, t: any): any {
  ((s as any).current as any)[e] = t;
}
function Ta(this: any, s: any, e: any): any {
  return ((s as any).current as any)[e] ?? null;
}
function Ps(this: any, s: any): any {
  (Ps as any).d = 805;
  const e: any = ((I as any).c as any)(31),
    {
      doc: t,
      pageNumber: n,
      displayScale: a,
      textLayerScale: l,
      rasterTarget: r,
      baseSize: i,
      viewport: c,
      pageRefs: d
    }: any = s,
    [m, u]: any = ((R as any).useState as any)(!1),
    [f, b]: any = ((R as any).useState as any)(null),
    j: any = f ?? i;
  let k: any;
  ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (d as any) || ((e as any)[2] as any) !== (c as any) ? (k = (v: any): any => {
    if ((Wt as any)(d, (n as any) - (1 as any), v), (v as any) == (null as any) || (c as any) == (null as any)) return;
    const z: any = new (IntersectionObserver as any)((M: any): any => {
      const O: any = (M as any)[0];
      (O as any) != (null as any) && (u as any)((O as any).isIntersecting);
    }, {
      root: c,
      rootMargin: va
    });
    return ((z as any).observe as any)(v), (): any => {
      ((z as any).disconnect as any)(), ((Ta as any)(d, (n as any) - (1 as any)) as any) === (v as any) && (Wt as any)(d, (n as any) - (1 as any), null);
    };
  }, (e as any)[0] = n, (e as any)[1] = d, (e as any)[2] = c, (e as any)[3] = k) : k = (e as any)[3];
  const x: any = k;
  let p: any;
  ((e as any)[4] as any) !== (i as any) ? (p = (v: any): any => {
    (b as any)((z: any): any => {
      const M: any = z ?? i;
      return ((M as any).width as any) === ((v as any).width as any) && ((M as any).height as any) === ((v as any).height as any) ? z : v;
    });
  }, (e as any)[4] = i, (e as any)[5] = p) : p = (e as any)[5];
  const g: any = p;
  let h: any, w: any, P: any, E: any;
  if (((e as any)[6] as any) !== (a as any) || ((e as any)[7] as any) !== ((j as any).height as any) || ((e as any)[8] as any) !== ((j as any).width as any)) {
    const v: any = {
      className: "sand-1n2onr6 sand-83z2og sand-a7y4k sand-1cum3z5 sand-b3r6kr sand-2lah0s"
    };
    w = ((j as any).width as any) * (a as any), h = ((j as any).height as any) * (a as any), P = {
      ...(v as any).style,
      width: w,
      height: h,
      "--total-scale-factor": (String as any)(a),
      "--scale-round-x": "1px",
      "--scale-round-y": "1px"
    }, E = (ne as any)("sand-pdf-page", (v as any).className), (e as any)[6] = a, (e as any)[7] = (j as any).height, (e as any)[8] = (j as any).width, (e as any)[9] = h, (e as any)[10] = w, (e as any)[11] = P, (e as any)[12] = E;
  } else h = (e as any)[9], w = (e as any)[10], P = (e as any)[11], E = (e as any)[12];
  let N: any;
  ((e as any)[13] as any) !== (h as any) || ((e as any)[14] as any) !== (w as any) || ((e as any)[15] as any) !== (t as any) || ((e as any)[16] as any) !== (m as any) || ((e as any)[17] as any) !== (n as any) || ((e as any)[18] as any) !== (r as any) || ((e as any)[19] as any) !== (g as any) || ((e as any)[20] as any) !== (l as any) ? (N = m ? ((o as any).jsxs as any)((o as any).Fragment, {
    children: [((o as any).jsx as any)(Cs, {
      displayHeight: h,
      displayWidth: w,
      doc: t,
      onPageSize: g,
      pageNumber: n,
      target: r
    }), ((o as any).jsx as any)(Es, {
      doc: t,
      pageNumber: n,
      scale: l
    }, l)]
  }) : null, (e as any)[13] = h, (e as any)[14] = w, (e as any)[15] = t, (e as any)[16] = m, (e as any)[17] = n, (e as any)[18] = r, (e as any)[19] = g, (e as any)[20] = l, (e as any)[21] = N) : N = (e as any)[21];
  let C: any;
  ((e as any)[22] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (C = (ne as any)("sand-pdf-page__badge", "sand-10l6tqk sand-1nrll8i sand-qo3gd sand-uuh30 sand-1nn3v0j sand-1120s5i sand-mzvs34 sand-f159sx sand-149ho13 sand-8qq8ib sand-60d0xz sand-47corl sand-htitgo"), (e as any)[22] = C) : C = (e as any)[22];
  let S: any;
  ((e as any)[23] as any) !== (n as any) ? (S = ((o as any).jsx as any)("span", {
    className: C,
    children: ((o as any).jsx as any)(Nt, {
      size: "xs",
      weight: "regular",
      children: n
    })
  }), (e as any)[23] = n, (e as any)[24] = S) : S = (e as any)[24];
  let y: any;
  return ((e as any)[25] as any) !== (x as any) || ((e as any)[26] as any) !== (P as any) || ((e as any)[27] as any) !== (E as any) || ((e as any)[28] as any) !== (N as any) || ((e as any)[29] as any) !== (S as any) ? (y = ((o as any).jsxs as any)("div", {
    className: E,
    ref: x,
    style: P,
    children: [N, S]
  }), (e as any)[25] = x, (e as any)[26] = P, (e as any)[27] = E, (e as any)[28] = N, (e as any)[29] = S, (e as any)[30] = y) : y = (e as any)[30], y;
}
function Ra(this: any, {
  doc: s,
  pageNumber: e,
  target: t,
  onPageSize: n,
  setImage: a
}: any): any {
  const l: any = ((document as any).createElement as any)("canvas");
  let r: any = null,
    i: any = !1,
    c: any = !1;
  return ((async (): Promise<any> => {
    try {
      const d: any = await ((s as any).getPage as any)(e);
      if (i) return;
      const m: any = (ga as any)(d, t);
      (n as any)((m as any).pageSize);
      const u: any = ((l as any).getContext as any)("2d");
      if ((u as any) == (null as any) || ((l as any).width = (m as any).canvasWidth, (l as any).height = (m as any).canvasHeight, r = ((d as any).render as any)({
        canvas: l,
        canvasContext: u,
        viewport: (m as any).viewport
      }), await (r as any).promise, c = !0, i)) return;
      const f: any = ((l as any).toDataURL as any)("image/png");
      (l as any).width = 0, (l as any).height = 0, (a as any)({
        target: t,
        url: f
      });
    } catch {}
  }) as any)(), (): any => {
    i = !0, c || r?.cancel();
  };
}
function Cs(this: any, s: any): any {
  (Cs as any).d = 803;
  const e: any = ((I as any).c as any)(18),
    {
      doc: t,
      pageNumber: n,
      target: a,
      displayWidth: l,
      displayHeight: r,
      onPageSize: i
    }: any = s;
  let c: any;
  ((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (n as any) || ((e as any)[2] as any) !== (a as any) ? (c = (): any => {
    const p: any = (n as any) === (1 as any) ? ((it as any).get as any)(t) : void 0;
    return (p as any) != (null as any) && (Ot as any)((p as any).target, a) ? p : null;
  }, (e as any)[0] = t, (e as any)[1] = n, (e as any)[2] = a, (e as any)[3] = c) : c = (e as any)[3];
  const [d, m]: any = ((R as any).useState as any)(c);
  let u: any;
  ((e as any)[4] as any) !== (t as any) || ((e as any)[5] as any) !== (d as any) || ((e as any)[6] as any) !== (i as any) || ((e as any)[7] as any) !== (n as any) || ((e as any)[8] as any) !== (a as any) ? (u = (p: any): any => {
    if ((p as any) == (null as any) || (d as any) != (null as any) && (Ot as any)((d as any).target, a)) return;
    const g: any = (n as any) === (1 as any) && (d as any) == (null as any);
    return (Ra as any)({
      doc: t,
      pageNumber: n,
      target: a,
      onPageSize: i,
      setImage: (h: any): any => {
        g && ((it as any).set as any)(t, h), (m as any)(h);
      }
    });
  }, (e as any)[4] = t, (e as any)[5] = d, (e as any)[6] = i, (e as any)[7] = n, (e as any)[8] = a, (e as any)[9] = u) : u = (e as any)[9];
  const f: any = u;
  let b: any;
  ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = {
    className: "sand-10l6tqk sand-10a8y8t"
  }, (e as any)[10] = b) : b = (e as any)[10];
  const j: any = b;
  let k: any;
  ((e as any)[11] as any) !== (r as any) || ((e as any)[12] as any) !== (l as any) || ((e as any)[13] as any) !== (d as any) ? (k = (d as any) != (null as any) ? ((o as any).jsx as any)("img", {
    alt: "",
    "aria-hidden": !0,
    className: "sand-1lliihq",
    src: (d as any).url,
    style: {
      width: l,
      height: r
    }
  }) : null, (e as any)[11] = r, (e as any)[12] = l, (e as any)[13] = d, (e as any)[14] = k) : k = (e as any)[14];
  let x: any;
  return ((e as any)[15] as any) !== (f as any) || ((e as any)[16] as any) !== (k as any) ? (x = ((o as any).jsx as any)("div", {
    className: (j as any).className,
    ref: f,
    style: (j as any).style,
    children: k
  }), (e as any)[15] = f, (e as any)[16] = k, (e as any)[17] = x) : x = (e as any)[17], x;
}
function Da(this: any, {
  doc: s,
  pageNumber: e,
  scale: t,
  container: n
}: any): any {
  let a: any = null,
    l: any = !1;
  return ((async (): Promise<any> => {
    try {
      const r: any = await ((s as any).getPage as any)(e);
      if (l) return;
      a = await (wa as any)({
        page: r,
        container: n,
        viewport: ((r as any).getViewport as any)({
          scale: t
        })
      }), l && ((a as any).cancel as any)(), await (a as any).rendered;
    } catch {}
  }) as any)(), (): any => {
    l = !0, a?.cancel();
  };
}
function Es(this: any, s: any): any {
  (Es as any).d = 804;
  const e: any = ((I as any).c as any)(4),
    {
      doc: t,
      pageNumber: n,
      scale: a
    }: any = s;
  let l: any;
  if (((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (n as any) || ((e as any)[2] as any) !== (a as any)) {
    const r: any = (i: any): any => {
      if ((i as any) != (null as any)) return (Da as any)({
        doc: t,
        pageNumber: n,
        scale: a,
        container: i
      });
    };
    l = ((o as any).jsx as any)("div", {
      className: "sand-pdf-page__text",
      ref: r
    }), (e as any)[0] = t, (e as any)[1] = n, (e as any)[2] = a, (e as any)[3] = l;
  } else l = (e as any)[3];
  return l;
}
const Se: any = -1;
function zs(this: any, {
  anchor: s,
  focus: e
}: any): any {
  return {
    top: ((Math as any).min as any)((s as any).row, (e as any).row),
    bottom: ((Math as any).max as any)((s as any).row, (e as any).row),
    left: ((Math as any).min as any)((s as any).col, (e as any).col),
    right: ((Math as any).max as any)((s as any).col, (e as any).col)
  };
}
function Oa(this: any, s: any, e: any, t: any): any {
  return (e as any) >= ((s as any).top as any) && (e as any) <= ((s as any).bottom as any) && (t as any) >= ((s as any).left as any) && (t as any) <= ((s as any).right as any);
}
function Et(this: any, s: any): any {
  return ((((s as any).bottom as any) - ((s as any).top as any) as any) + (1 as any) as any) * ((((s as any).right as any) - ((s as any).left as any) as any) + (1 as any) as any);
}
const Ht: number = 26;
function Aa(this: any, s: any): any {
  let e: any = "",
    t: any = s;
  do e = (((String as any).fromCharCode as any)((65 as any) + ((t as any) % (Ht as any) as any)) as any) + (e as any), t = (((Math as any).floor as any)((t as any) / (Ht as any)) as any) - (1 as any); while ((t as any) >= (0 as any));
  return e;
}
function Vt(this: any, {
  row: s,
  col: e
}: any): any {
  return `${(Aa as any)(e)}${(s as any) + (2 as any)}`;
}
function Ia(this: any, s: any): any {
  const e: any = (Vt as any)({
    row: (s as any).top,
    col: (s as any).left
  });
  return ((Et as any)(s) as any) === (1 as any) ? e : `${e}:${(Vt as any)({
    row: (s as any).bottom,
    col: (s as any).right
  })}`;
}
function je(this: any, {
  row: s,
  col: e
}: any, t: any): any {
  return {
    row: ((Math as any).min as any)(((Math as any).max as any)(s, Se), ((t as any).rowCount as any) - (1 as any)),
    col: ((Math as any).min as any)(((Math as any).max as any)(e, 0), ((t as any).columnCount as any) - (1 as any))
  };
}
function qa(this: any, s: any, e: any, t: any, n: any, a: any): any {
  const l: any = (s as any).ctrlKey || (s as any).metaKey,
    r: any = ((t as any).rowCount as any) - (1 as any),
    i: any = ((t as any).columnCount as any) - (1 as any),
    c: any = (Zt as any)((s as any).key, n);
  if ((c as any) != (null as any)) return (je as any)(l ? {
    row: (e as any).row,
    col: (c as any) > (0 as any) ? i : 0
  } : {
    row: (e as any).row,
    col: ((e as any).col as any) + (c as any)
  }, t);
  switch ((s as any).key) {
    case "ArrowUp":
      return (je as any)({
        row: l ? Se : ((e as any).row as any) - (1 as any),
        col: (e as any).col
      }, t);
    case "ArrowDown":
      return (je as any)({
        row: l ? r : ((e as any).row as any) + (1 as any),
        col: (e as any).col
      }, t);
    case "PageUp":
      return (je as any)({
        row: ((e as any).row as any) - (a as any),
        col: (e as any).col
      }, t);
    case "PageDown":
      return (je as any)({
        row: ((e as any).row as any) + (a as any),
        col: (e as any).col
      }, t);
    case "Home":
      return (je as any)({
        row: l ? Se : (e as any).row,
        col: 0
      }, t);
    case "End":
      return (je as any)({
        row: l ? r : (e as any).row,
        col: i
      }, t);
    default:
      return null;
  }
}
function $a(this: any, s: any): any {
  return ((/[\t\n\r"]/ as any).test as any)(s) ? `"${((s as any).replaceAll as any)('"', '""')}"` : s;
}
function Wa(this: any, s: any, e: any): any {
  const t: any = (zs as any)(s);
  if (((Et as any)(t) as any) === (1 as any)) return (e as any)((t as any).top, (t as any).left);
  const n: any = [];
  for (let a: any = (t as any).top; (a as any) <= ((t as any).bottom as any); a += 1) {
    const l: any = [];
    for (let r: any = (t as any).left; (r as any) <= ((t as any).right as any); r += 1) ((l as any).push as any)(($a as any)((e as any)(a, r)));
    ((n as any).push as any)(((l as any).join as any)("	"));
  }
  return ((n as any).join as any)(`
`);
}
const Ha: number = 7,
  Va: number = 16,
  Fa: number = 56,
  Ba: number = 360,
  Xa: any = /^[-+]?[$\u20AC£¥]?\d[\d,]*(\.\d+)?%?$/;
function Ga(this: any, s: any, e: any, t: any): any {
  const n: any = ((Array as any).from as any)({
      length: t
    }, (r: any, i: any): any => (((s as any)[i] ?? "") as any).length),
    a: any = ((Array as any).from as any)({
      length: t
    }, (): any => 0),
    l: any = ((Array as any).from as any)({
      length: t
    }, (): any => 0);
  for (const r of e) {
    const i: any = ((Math as any).min as any)((r as any).length, t);
    for (let c: any = 0; (c as any) < (i as any); c += 1) {
      const d: any = (r as any)[c] ?? "";
      ((d as any).length as any) !== (0 as any) && ((l as any)[c] = (((l as any)[c] ?? 0) as any) + (1 as any), ((Xa as any).test as any)(d) && ((a as any)[c] = (((a as any)[c] ?? 0) as any) + (1 as any)), ((d as any).length as any) > (((n as any)[c] ?? 0) as any) && ((n as any)[c] = (d as any).length));
    }
  }
  return ((n as any).map as any)((r: any, i: any): any => ({
    widthPx: ((Math as any).min as any)(((Math as any).max as any)(((r as any) * (Ha as any) as any) + (Va as any), Fa), Ba),
    isNumeric: (((l as any)[i] ?? 0) as any) > (0 as any) && ((a as any)[i] as any) === ((l as any)[i] as any)
  }));
}
function Ua(this: any, s: any, e: any): any {
  const t: any = (((Math as any).floor as any)((((e as any).block as any) - ((s as any).paddingPx as any) as any) / ((s as any).rowHeightPx as any)) as any) - (1 as any),
    n: any = (((e as any).inline as any) - ((s as any).paddingPx as any) as any) - ((s as any).indexWidthPx as any);
  let a: any = 0;
  for (let l: any = 1; (l as any) < (((s as any).columnStartsPx as any).length as any) && !(((((s as any).columnStartsPx as any)[l] ?? 0) as any) > (n as any)); l += 1) a = l;
  return (je as any)({
    row: t,
    col: a
  }, (s as any).bounds);
}
const Ft: number = 4,
  Bt: number = 48;
function Xt(this: any, {
  offset: s,
  bandStart: e,
  bandEnd: t
}: any): any {
  return (s as any) < (e as any) ? -((Math as any).min as any)(Bt, (Ft as any) + (((e as any) - (s as any) as any) / (2 as any) as any)) : (s as any) > (t as any) ? ((Math as any).min as any)(Bt, (Ft as any) + (((s as any) - (t as any) as any) / (2 as any) as any)) : 0;
}
function Gt(this: any, s: any, e: any): any {
  return ((s as any).start as any) < (((e as any).start as any) + ((e as any).leadingInset as any) as any) ? ((Math as any).max as any)(0, ((s as any).start as any) - ((e as any).leadingInset as any)) : ((s as any).end as any) > (((e as any).start as any) + ((e as any).size as any) as any) ? ((s as any).end as any) - ((e as any).size as any) : null;
}
function Ka(this: any, s: any, e: any = {}): any {
  const t: any = (e as any).delimiter ?? ",",
    n: any = (e as any).maxRows ?? (Number as any).POSITIVE_INFINITY,
    a: any = [];
  let l: any = "",
    r: any = [],
    i: any = !1,
    c: any = !1;
  const d: any = (): any => {
      ((r as any).push as any)(l), l = "";
    },
    m: any = (): any => {
      (d as any)(), ((a as any).push as any)(r), r = [], c = !1;
    };
  for (let u: any = 0; (u as any) < ((s as any).length as any) && !(((a as any).length as any) >= (n as any)); u += 1) {
    const f: any = (s as any)[u];
    if (i) {
      (f as any) === ('"' as any) ? ((s as any)[(u as any) + (1 as any)] as any) === ('"' as any) ? (l += '"', u += 1) : i = !1 : l += f;
      continue;
    }
    if ((f as any) === ('"' as any)) {
      i = !0, c = !0;
      continue;
    }
    if ((f as any) === (t as any)) {
      c = !0, (d as any)();
      continue;
    }
    if ((f as any) === (`
` as any)) {
      (m as any)();
      continue;
    }
    if ((f as any) === ("\r" as any)) {
      ((s as any)[(u as any) + (1 as any)] as any) === (`
` as any) && (u += 1), (m as any)();
      continue;
    }
    l += f, c = !0;
  }
  return ((a as any).length as any) < (n as any) && (c || ((l as any).length as any) > (0 as any) || ((r as any).length as any) > (0 as any)) && (m as any)(), a;
}
function Za(this: any, s: any): any {
  let e: any = 0,
    t: any = !1,
    n: any = !1;
  for (let a: any = 0; (a as any) < ((s as any).length as any); a += 1) {
    const l: any = (s as any)[a];
    if ((l as any) === ('"' as any)) {
      if (t && ((s as any)[(a as any) + (1 as any)] as any) === ('"' as any)) {
        a += 1;
        continue;
      }
      t = !t, n = !0;
      continue;
    }
    if (!t && ((l as any) === (`
` as any) || (l as any) === ("\r" as any))) {
      (l as any) === ("\r" as any) && ((s as any)[(a as any) + (1 as any)] as any) === (`
` as any) && (a += 1), e += 1, n = !1;
      continue;
    }
    n = !0;
  }
  return n ? (e as any) + (1 as any) : e;
}
function Qa(this: any, s: any, e: any = ","): any {
  const t: any = ((((s as any).split as any)(/\r?\n/) as any).find as any)((r: any): any => ((r as any).length as any) > (0 as any)) ?? "",
    n: any = [e, ",", "	", ";", "|"];
  let a: any = e,
    l: any = -1;
  for (const r of n) {
    const i: any = (Ya as any)(t, r);
    (i as any) > (l as any) && (a = r, l = i);
  }
  return (l as any) > (0 as any) ? a : e;
}
function Ya(this: any, s: any, e: any): any {
  let t: any = 0,
    n: any = !1;
  for (let a: any = 0; (a as any) < ((s as any).length as any); a += 1) {
    const l: any = (s as any)[a];
    if ((l as any) === ('"' as any)) {
      if (n && ((s as any)[(a as any) + (1 as any)] as any) === ('"' as any)) {
        a += 1;
        continue;
      }
      n = !n;
      continue;
    }
    !n && (l as any) === (e as any) && (t += 1);
  }
  return t;
}
async function Ja(this: any, s: any, e: any, t: any): Promise<any> {
  if ((Ys as any)(e)) {
    const l: any = ((new (TextDecoder as any)("utf-8", {
        fatal: !1
      }) as any).decode as any)(s),
      r: any = (Qa as any)(l, (Js as any)(e)),
      i: any = (Ka as any)(l, {
        delimiter: r,
        maxRows: t
      }),
      c: any = ((i as any).length as any) < (t as any) ? (i as any).length : (Za as any)(l);
    return [{
      name: ((pt as any)._ as any)({
        id: "0LfCxn"
      }),
      rows: i,
      totalRows: c
    }];
  }
  const n: any = await (Xe as any)((): any => import("./chunk-xlsx-UGAa5ljQ.js"), [], (import.meta as any).url),
    a: any = ((n as any).read as any)(s, {
      type: "array"
    });
  return (((a as any).SheetNames as any).map as any)((l: any): any => {
    const r: any = ((a as any).Sheets as any)[l];
    if ((r as any) == (null as any)) return {
      name: l,
      rows: [],
      totalRows: 0
    };
    const i: any = (((n as any).utils as any).sheet_to_json as any)(r, {
        header: 1,
        blankrows: !1,
        defval: "",
        raw: !1
      }),
      c: any = ((((i as any).slice as any)(0, t) as any).map as any)((d: any): any => ((d as any).map as any)((m: any): any => (m as any) == (null as any) ? "" : (String as any)(m)));
    return {
      name: l,
      rows: c,
      totalRows: (i as any).length
    };
  });
}
const Ls: any = {
    status: "loading"
  },
  el: any = {
    arm: (): any => (): any => {},
    subscribe: (): any => (): any => {},
    getSnapshot: (): any => Ls
  };
function tl(this: any, s: any, e: any, t: any): any {
  const n: any = (St as any)(Ls);
  let a: any = !1;
  return {
    getSnapshot: (n as any).get,
    subscribe: (n as any).subscribe,
    arm: (): any => a ? (): any => {} : (a = !0, (((((Ja as any)(s, e, t) as any).then as any)((l: any): any => {
      ((n as any).set as any)({
        status: "ready",
        sheets: l
      });
    }) as any).catch as any)((l: any): any => {
      (kt as any)(l, {
        level: "warning",
        tags: {
          sand_area: "table-viewer"
        }
      }), ((n as any).set as any)({
        status: "error"
      });
    }), (): any => {})
  };
}
const sl: any = (_t as any)((): any => new (Map as any)());
function nl(this: any, s: any, e: any, t: any): any {
  const n: any = (sl as any)(s),
    a: any = `${t}:${e}`,
    l: any = ((n as any).get as any)(a);
  if ((l as any) != (null as any)) return l;
  const r: any = (tl as any)(s, e, t);
  return ((n as any).set as any)(a, r), r;
}
function al(this: any, s: any, e: any, t: any): any {
  const n: any = ((I as any).c as any)(4);
  let a: any;
  ((n as any)[0] as any) !== (s as any) || ((n as any)[1] as any) !== (e as any) || ((n as any)[2] as any) !== (t as any) ? (a = (s as any) == (null as any) ? el : (nl as any)(s, e, t), (n as any)[0] = s, (n as any)[1] = e, (n as any)[2] = t, (n as any)[3] = a) : a = (n as any)[3];
  const l: any = a,
    r: any = ((R as any).useSyncExternalStore as any)((l as any).subscribe, (l as any).getSnapshot, (l as any).getSnapshot);
  return (vt as any)((l as any).arm), r;
}
const ll: any = {
    k1xSpc: "sand-rvj5dj",
    $$css: !0
  },
  rl: any = {
    kmuXW: "sand-2lah0s",
    $$css: !0
  },
  il: number = 1e4,
  ol: number = 200,
  ye: number = 28,
  st: number = 12,
  cl: number = 8,
  dl: number = 40,
  ul: any = an ? "\u2318C" : "Ctrl+C",
  fl: any = (en as any)((s: any): any => new ((Intl as any).NumberFormat as any)(s, {
    maximumFractionDigits: 0
  })),
  ml: any = (pn as any)({
    name: "sheet-drag-edge-scroll"
  }),
  se: any = {
    address: {
      kmuXW: "sand-2lah0s",
      k7Eaqz: "sand-1nb6za0",
      kB7OPa: "sand-9f619",
      kLKAdn: "sand-1nn3v0j",
      kGO01o: "sand-1120s5i",
      kZCmMZ: "sand-25sj25",
      kwRFfy: "sand-1icxu4v",
      kaIpWk: "sand-1i6gnc1",
      kWkggS: "sand-1tiofj7",
      kMwMTN: "sand-1o0liin",
      k9WMMc: "sand-2b8uid",
      kcqcaj: "sand-ss6m8b",
      $$css: !0
    },
    value: {
      kzQI83: "sand-1iyjqo2",
      k7Eaqz: "sand-euugli",
      kVQacm: "sand-b3r6kr",
      kg5iWk: "sand-lyipyv",
      khDVqt: "sand-uxw1ft",
      kcqcaj: "sand-ss6m8b",
      kMwMTN: "sand-tyxrsu",
      kfSwDN: "sand-1hx0egp",
      $$css: !0
    },
    valueQuiet: {
      kMwMTN: "sand-169k319",
      $$css: !0
    },
    valueExpandedText: {
      kogj98: "sand-1ghz6dp",
      kLKAdn: "sand-1y1aw1k",
      kGO01o: "sand-1a8lsjc",
      kZCmMZ: "sand-1g0dm76",
      kwRFfy: "sand-pdmqnj",
      khDVqt: "sand-126k92a",
      kHjlTd: "sand-j0a0fe",
      kcqcaj: "sand-ss6m8b",
      kMwMTN: "sand-tyxrsu",
      kfSwDN: "sand-1hx0egp",
      $$css: !0
    },
    row: (s: any): any => [ll, {
      kumcoG: (s as any) != (null as any) ? "sand-qketvx" : s,
      $$css: !0
    }, {
      "--x-gridTemplateColumns": s ?? void 0
    }],
    headerRow: {
      kVAEAm: "sand-7wzq59",
      k87sOh: "sand-13vifvy",
      kY2c9j: "sand-htitgo",
      $$css: !0
    },
    spacer: (s: any): any => [rl, {
      kZKoxP: (s as any) != (null as any) ? "sand-16ye13r" : s,
      $$css: !0
    }, {
      "--x-height": (((e: any): any => (typeof e as any) == ("number" as any) ? (e as any) + ("px" as any) : e ?? void 0) as any)(s)
    }],
    cell: {
      kB7OPa: "sand-9f619",
      kZKoxP: "sand-1fgtraw",
      kLKAdn: "sand-1yrsyyn",
      kGO01o: "sand-10b6aqq",
      kZCmMZ: "sand-mzvs34",
      kwRFfy: "sand-f159sx",
      kt9PQ7: "sand-1hkp6id",
      kfdmCh: "sand-1q0q8m5",
      kL6WhQ: "sand-19145p9",
      ke9TFa: "sand-qm0940",
      k8ry5P: "sand-18b5jzi",
      kBCPoo: "sand-3dt9c2",
      khDVqt: "sand-1sdyfia",
      kVQacm: "sand-b3r6kr",
      kg5iWk: "sand-lyipyv",
      k9WMMc: "sand-1yc453h",
      $$css: !0
    },
    cellNumeric: {
      k9WMMc: "sand-p4054r",
      $$css: !0
    },
    headerCell: {
      kWkggS: "sand-s6r99b",
      kL6WhQ: "sand-1kp61ed",
      kMwMTN: "sand-tyxrsu",
      k63SB2: "sand-1rhlpx6",
      $$css: !0
    },
    stickyCellActive: {
      kWkggS: "sand-1jgat75",
      kMwMTN: "sand-tyxrsu",
      $$css: !0
    },
    cellInRange: {
      kWkggS: "sand-ctg3rd",
      kMwMTN: "sand-tyxrsu",
      $$css: !0
    },
    cellFocus: {
      kGVxlE: "sand-1ivh6bt",
      $$css: !0
    }
  };
function Ms(this: any, s: any): any {
  (Ms as any).d = 809;
  const e: any = ((I as any).c as any)(8),
    {
      source: t
    }: any = s;
  let n: any;
  ((e as any)[0] as any) !== (t as any) ? (n = {
    source: t,
    index: 0
  }, (e as any)[0] = t, (e as any)[1] = n) : n = (e as any)[1];
  const [a, l]: any = ((R as any).useState as any)(n);
  if (!(s as any).isOpen) return null;
  const r: any = ((a as any).source as any) === (t as any) ? (a as any).index : 0;
  let i: any;
  ((e as any)[2] as any) !== (t as any) ? (i = (d: any): any => (l as any)({
    source: t,
    index: d
  }), (e as any)[2] = t, (e as any)[3] = i) : i = (e as any)[3];
  let c: any;
  return ((e as any)[4] as any) !== (s as any) || ((e as any)[5] as any) !== (r as any) || ((e as any)[6] as any) !== (i as any) ? (c = ((o as any).jsx as any)(Ts, {
    ...s,
    chosenIndex: r,
    onChooseSheet: i
  }), (e as any)[4] = s, (e as any)[5] = r, (e as any)[6] = i, (e as any)[7] = c) : c = (e as any)[7], c;
}
function Ts(this: any, s: any): any {
  (Ts as any).d = 807;
  const e: any = ((I as any).c as any)(57),
    {
      source: t,
      name: n,
      downloadName: a,
      isOpen: l,
      onClose: r,
      chosenIndex: i,
      onChooseSheet: c
    }: any = s,
    {
      _: d
    }: any = (ie as any)(),
    m: any = (Re as any)(t, l),
    u: any = (Fe as any)(t),
    f: any = (al as any)((m?.status as any) === ("ready" as any) ? (m as any).bytes : null, t, (il as any) + (1 as any)),
    b: any = ((f as any).status as any) === ("ready" as any) ? (f as any).sheets : null,
    j: any = ((f as any).status as any) === ("error" as any),
    k: any = (b as any) != (null as any) && (i as any) < ((b as any).length as any) ? i : 0,
    x: any = b?.[k] ?? null;
  let p: any;
  e: {
    if ((x as any) == (null as any)) {
      p = void 0;
      break e;
    }
    const S: any = ((Math as any).max as any)(0, ((x as any).totalRows as any) - (1 as any)),
      y: any = ((Math as any).max as any)(0, (((x as any).rows as any).length as any) - (1 as any));
    if ((y as any) < (S as any)) {
      let z: any;
      if (((e as any)[0] as any) !== (d as any) || ((e as any)[1] as any) !== (S as any) || ((e as any)[2] as any) !== (y as any)) {
        const M: any = (((fl as any)() as any).format as any)(y);
        z = (d as any)({
          id: "UU5RmR",
          values: {
            rows: S,
            shown: M
          }
        }), (e as any)[0] = d, (e as any)[1] = S, (e as any)[2] = y, (e as any)[3] = z;
      } else z = (e as any)[3];
      p = z;
      break e;
    }
    let v: any;
    ((e as any)[4] as any) !== (d as any) || ((e as any)[5] as any) !== (S as any) ? (v = (d as any)({
      id: "tiruMz",
      values: {
        rows: S
      }
    }), (e as any)[4] = d, (e as any)[5] = S, (e as any)[6] = v) : v = (e as any)[6], p = v;
  }
  const g: any = p;
  let h: any;
  ((e as any)[7] as any) !== (k as any) || ((e as any)[8] as any) !== (c as any) || ((e as any)[9] as any) !== (b as any) ? (h = (b as any) != (null as any) && ((b as any).length as any) > (1 as any) ? ((o as any).jsx as any)(ze, {
    className: "sand-1pfbilc",
    direction: "horizontal",
    mapVerticalWheelToHorizontal: !0,
    scrollbarVisibility: "hover",
    children: ((o as any).jsx as any)("div", {
      className: "sand-78zum5 sand-6s0dn4 sand-1jnr06f",
      children: ((b as any).map as any)((S: any, y: any): any => ((o as any).jsx as any)("button", {
        className: (ne as any)((({
          0: {
            className: "sand-2lah0s sand-jyslct sand-ng3xce sand-t9pb60 sand-yqdw3p sand-g8j3zb sand-e2zdcy sand-2vl965 sand-1ypdohk sand-jbqb8w sand-aalx5g sand-169k319"
          },
          1: {
            className: "sand-2lah0s sand-jyslct sand-ng3xce sand-t9pb60 sand-yqdw3p sand-g8j3zb sand-e2zdcy sand-2vl965 sand-1ypdohk sand-luhinc sand-tyxrsu"
          }
        } as any)[(((y as any) === (k as any)) as any) << (0 as any)] as any).className),
        onClick: (): any => (c as any)(y),
        type: "button",
        children: ((o as any).jsx as any)(We, {
          level: "caption",
          weight: "regular",
          children: (S as any).name
        })
      }, `${(S as any).name}-${y}`))
    })
  }) : void 0, (e as any)[7] = k, (e as any)[8] = c, (e as any)[9] = b, (e as any)[10] = h) : h = (e as any)[10];
  const w: any = h;
  let P: any;
  e: {
    if ((m?.status as any) === ("too-large" as any)) {
      let y: any;
      ((e as any)[11] as any) !== (a as any) || ((e as any)[12] as any) !== (t as any) ? (y = ((o as any).jsx as any)(ae, {
        downloadName: a,
        href: t
      }), (e as any)[11] = a, (e as any)[12] = t, (e as any)[13] = y) : y = (e as any)[13];
      let v: any;
      ((e as any)[14] as any) !== (d as any) ? (v = (d as any)({
        id: "wvkV+z"
      }), (e as any)[14] = d, (e as any)[15] = v) : v = (e as any)[15];
      let z: any;
      ((e as any)[16] as any) !== (d as any) ? (z = (d as any)({
        id: "lUvavw"
      }), (e as any)[16] = d, (e as any)[17] = z) : z = (e as any)[17];
      let M: any;
      ((e as any)[18] as any) !== (y as any) || ((e as any)[19] as any) !== (v as any) || ((e as any)[20] as any) !== (z as any) ? (M = ((o as any).jsx as any)(U, {
        action: y,
        detail: v,
        icon: "table",
        title: z
      }), (e as any)[18] = y, (e as any)[19] = v, (e as any)[20] = z, (e as any)[21] = M) : M = (e as any)[21], P = M;
      break e;
    }
    if ((m?.status as any) === ("failed" as any)) {
      let y: any;
      ((e as any)[22] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = ((o as any).jsx as any)(Ee, {
        id: "6gRgw8"
      }), (e as any)[22] = y) : y = (e as any)[22];
      let v: any;
      ((e as any)[23] as any) !== (u as any) ? (v = ((o as any).jsx as any)(Le, {
        onClick: u,
        size: "sm",
        variant: "secondary",
        children: y
      }), (e as any)[23] = u, (e as any)[24] = v) : v = (e as any)[24];
      let z: any;
      ((e as any)[25] as any) !== (d as any) ? (z = (d as any)({
        id: "OZ1zWg"
      }), (e as any)[25] = d, (e as any)[26] = z) : z = (e as any)[26];
      let M: any;
      ((e as any)[27] as any) !== (v as any) || ((e as any)[28] as any) !== (z as any) ? (M = ((o as any).jsx as any)(U, {
        action: v,
        icon: "table",
        title: z
      }), (e as any)[27] = v, (e as any)[28] = z, (e as any)[29] = M) : M = (e as any)[29], P = M;
      break e;
    }
    if ((m?.status as any) === ("missing" as any) || j) {
      let y: any;
      ((e as any)[30] as any) !== (d as any) || ((e as any)[31] as any) !== (j as any) ? (y = (d as any)(j ? {
        id: "1MuOLy"
      } : {
        id: "bks/Jy"
      }), (e as any)[30] = d, (e as any)[31] = j, (e as any)[32] = y) : y = (e as any)[32];
      let v: any;
      ((e as any)[33] as any) !== (y as any) ? (v = ((o as any).jsx as any)(U, {
        icon: "table",
        title: y
      }), (e as any)[33] = y, (e as any)[34] = v) : v = (e as any)[34], P = v;
      break e;
    }
    if ((x as any) == (null as any)) {
      let y: any;
      ((e as any)[35] as any) !== (d as any) ? (y = (d as any)({
        id: "tUtFbf"
      }), (e as any)[35] = d, (e as any)[36] = y) : y = (e as any)[36];
      let v: any;
      ((e as any)[37] as any) !== (y as any) ? (v = ((o as any).jsx as any)(Me, {
        label: y
      }), (e as any)[37] = y, (e as any)[38] = v) : v = (e as any)[38], P = v;
      break e;
    }
    if ((((x as any).rows as any).length as any) === (0 as any)) {
      let y: any;
      ((e as any)[39] as any) !== (d as any) ? (y = (d as any)({
        id: "DXzGZn"
      }), (e as any)[39] = d, (e as any)[40] = y) : y = (e as any)[40];
      let v: any;
      ((e as any)[41] as any) !== (y as any) ? (v = ((o as any).jsx as any)(U, {
        icon: "table",
        title: y
      }), (e as any)[41] = y, (e as any)[42] = v) : v = (e as any)[42], P = v;
      break e;
    }
    let S: any;
    ((e as any)[43] as any) !== (k as any) || ((e as any)[44] as any) !== (x as any) ? (S = ((o as any).jsx as any)(Rs, {
      sheet: x
    }, k), (e as any)[43] = k, (e as any)[44] = x, (e as any)[45] = S) : S = (e as any)[45], P = S;
  }
  const E: any = P;
  let N: any;
  ((e as any)[46] as any) !== (a as any) || ((e as any)[47] as any) !== (t as any) ? (N = ((o as any).jsx as any)(ae, {
    downloadName: a,
    href: t
  }), (e as any)[46] = a, (e as any)[47] = t, (e as any)[48] = N) : N = (e as any)[48];
  let C: any;
  return ((e as any)[49] as any) !== (E as any) || ((e as any)[50] as any) !== (l as any) || ((e as any)[51] as any) !== (n as any) || ((e as any)[52] as any) !== (r as any) || ((e as any)[53] as any) !== (g as any) || ((e as any)[54] as any) !== (N as any) || ((e as any)[55] as any) !== (w as any) ? (C = ((o as any).jsx as any)(Pe, {
    actions: N,
    isOpen: l,
    onClose: r,
    subtitle: g,
    title: n,
    toolbar: w,
    children: E
  }), (e as any)[49] = E, (e as any)[50] = l, (e as any)[51] = n, (e as any)[52] = r, (e as any)[53] = g, (e as any)[54] = N, (e as any)[55] = w, (e as any)[56] = C) : C = (e as any)[56], C;
}
function hl(this: any, s: any, e: any): any {
  let t: any = (s as any).length;
  for (const d of e) t = ((Math as any).max as any)(t, (d as any).length);
  const n: any = ((Math as any).min as any)(t, ol),
    a: any = (Ga as any)(s, e, n),
    l: any = [];
  let r: any = 0;
  for (const d of a) ((l as any).push as any)(r), r += (d as any).widthPx;
  const i: any = ((Math as any).max as any)(dl, ((((String as any)(((e as any).length as any) + (1 as any)) as any).length as any) * (cl as any) as any) + (16 as any)),
    c: any = (((([i, ...((a as any).map as any)((d: any): any => (d as any).widthPx)] as any).map as any)((d: any): any => `${d}px`) as any).join as any)(" ");
  return {
    columnCount: n,
    columns: a,
    columnStartsPx: l,
    indexWidthPx: i,
    template: c
  };
}
function pl(this: any, s: any): any {
  if (!(s instanceof Element)) return null;
  const e: any = ((s as any).closest as any)("[data-cell]");
  if ((e as any) == (null as any)) return null;
  const t: any = (Number as any)(((e as any).dataset as any).row);
  if (!((Number as any).isInteger as any)(t)) return null;
  const n: any = ((e as any).dataset as any).col;
  if ((n as any) == (null as any)) return {
    row: t,
    col: null
  };
  const a: any = (Number as any)(n);
  return ((Number as any).isInteger as any)(a) ? {
    row: t,
    col: a
  } : null;
}
function ht(this: any, s: any, e: any): any {
  return ((s as any).row as any) === ((e as any).row as any) && ((s as any).col as any) === ((e as any).col as any);
}
function xl(this: any, s: any): any {
  return ((s as any).metaKey || (s as any).ctrlKey) && !(s as any).altKey && !(s as any).shiftKey && ((((s as any).key as any).toLowerCase as any)() as any) === ("c" as any);
}
function gl(this: any): any {
  const s: any = ((window as any).getSelection as any)();
  return (s as any) != (null as any) && !(s as any).isCollapsed && ((((s as any).toString as any)() as any).length as any) > (0 as any);
}
function Ut(this: any, s: any, e: any): any {
  const t: any = ((e as any).getBoundingClientRect as any)(),
    n: any = ((s as any).clientX as any) - ((t as any).left as any);
  return {
    inline: ((Be as any)() as any) === ("rtl" as any) ? ((t as any).width as any) - (n as any) : n,
    block: ((s as any).clientY as any) - ((t as any).top as any)
  };
}
function Rs(this: any, s: any): any {
  (Rs as any).d = 808;
  const e: any = ((I as any).c as any)(51),
    {
      sheet: t
    }: any = s,
    {
      _: n
    }: any = (ie as any)(),
    a: any = ((t as any).rows as any)[0] ?? [],
    l: any = (((t as any).rows as any).slice as any)(1),
    r: any = (hl as any)(a, l),
    i: any = {
      rowCount: (l as any).length,
      columnCount: (r as any).columnCount
    },
    c: any = ((Array as any).from as any)({
      length: (r as any).columnCount
    }, yl),
    d: any = {
      paddingPx: st,
      rowHeightPx: ye,
      indexWidthPx: (r as any).indexWidthPx,
      columnStartsPx: (r as any).columnStartsPx,
      bounds: i
    },
    [m, u]: any = ((R as any).useState as any)(null),
    [f, b]: any = ((R as any).useState as any)(!1),
    [j, k]: any = ((R as any).useState as any)(null),
    x: any = ((R as any).useRef as any)(null),
    p: any = ((R as any).useRef as any)(null),
    g: any = ((R as any).useRef as any)(null),
    {
      status: h,
      copy: w
    }: any = (tn as any)(),
    P: any = (sn as any)({
      scrollEl: j,
      rowCount: (l as any).length,
      rowPitchPx: ye,
      leadingOffsetPx: (st as any) + (ye as any)
    }),
    E: any = (m as any) == (null as any) ? null : (zs as any)(m),
    N: any = function (this: any, _: any, L: any): any {
      return ((_ as any) === (Se as any) ? a : (l as any)[_])?.[L] ?? "";
    },
    C: any = function (this: any, _: any, L: any): any {
      return {
        anchor: {
          row: _,
          col: ((r as any).columnCount as any) - (1 as any)
        },
        focus: {
          row: L,
          col: 0
        }
      };
    },
    S: any = function (this: any): any {
      (m as any) != (null as any) && (w as any)((Wa as any)(m, N));
    },
    y: any = function (this: any, _: any): any {
      const L: any = (x as any).current;
      if ((L as any) == (null as any)) return;
      const A: any = (st as any) + ((ye as any) * (((_ as any).row as any) + (1 as any) as any) as any),
        X: any = ((_ as any).row as any) === (Se as any) ? null : (Gt as any)({
          start: A,
          end: (A as any) + (ye as any)
        }, {
          start: (L as any).scrollTop,
          size: (L as any).clientHeight,
          leadingInset: ye
        }),
        te: any = ((st as any) + ((r as any).indexWidthPx as any) as any) + ((((r as any).columnStartsPx as any)[(_ as any).col] ?? 0) as any),
        ue: any = (Gt as any)({
          start: te,
          end: (te as any) + ((((r as any).columns as any)[(_ as any).col]?.widthPx ?? 0) as any)
        }, {
          start: ((Math as any).abs as any)((L as any).scrollLeft),
          size: (L as any).clientWidth,
          leadingInset: (r as any).indexWidthPx
        });
      (X as any) == (null as any) && (ue as any) == (null as any) || ((L as any).scrollTo as any)({
        top: X ?? (L as any).scrollTop,
        left: (ue as any) == (null as any) ? (L as any).scrollLeft : (zt as any)(ue, (Be as any)())
      });
    };
  let v: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = function (this: any): any {
    (g as any).current?.edgeScroll?.dispose(), (g as any).current = null;
  }, (e as any)[0] = v) : v = (e as any)[0];
  const z: any = v,
    M: any = (m as any) != (null as any);
  let O: any;
  ((e as any)[1] as any) !== (M as any) ? (O = {
    isOpen: M
  }, (e as any)[1] = M, (e as any)[2] = O) : O = (e as any)[2];
  const W: any = (Qt as any)(O);
  let T: any;
  ((e as any)[3] as any) !== (z as any) || ((e as any)[4] as any) !== (m as any) ? (T = (): any => (m as any) == (null as any) ? !1 : ((z as any)(), (u as any)(null), !0), (e as any)[3] = z, (e as any)[4] = m, (e as any)[5] = T) : T = (e as any)[5];
  const D: any = (nn as any)(T, W),
    V: any = (ln as any)((q: any): any => {
      !(xl as any)(q) || (m as any) == (null as any) || (gl as any)() || (((q as any).preventDefault as any)(), (S as any)());
    });
  let F: any;
  ((e as any)[6] as any) !== (D as any) || ((e as any)[7] as any) !== (V as any) ? (F = (q: any): any => {
    if ((q as any) == (null as any)) return;
    const _: any = (D as any)(q);
    return ((document as any).addEventListener as any)("keydown", V), (): any => {
      (typeof _ as any) == ("function" as any) && (_ as any)(), ((document as any).removeEventListener as any)("keydown", V);
    };
  }, (e as any)[6] = D, (e as any)[7] = V, (e as any)[8] = F) : F = (e as any)[8];
  const G: any = F,
    oe: any = (q: any): any => {
      const _: any = q?.viewportElement ?? null;
      (x as any).current = _, (k as any)(_);
    },
    le: any = function (this: any, _: any): any {
      (p as any).current = (_ as any).focus, (u as any)(_);
    },
    fe: any = function (this: any, _: any, L: any): any {
      const A: any = (Ut as any)((_ as any).pointer, L),
        X: any = (Ua as any)(d, {
          inline: ((A as any).inline as any) + (((Math as any).abs as any)((L as any).scrollLeft) as any),
          block: ((A as any).block as any) + ((L as any).scrollTop as any)
        });
      return (_ as any).isRowDrag ? {
        row: (X as any).row,
        col: 0
      } : X;
    },
    re: any = function (this: any, _: any, L: any): any {
      const A: any = (fe as any)(_, L);
      (p as any).current = A, (u as any)((X: any): any => (X as any) != (null as any) && (ht as any)((X as any).focus, A) && (ht as any)((X as any).anchor, (_ as any).anchor) ? X : {
        anchor: (_ as any).anchor,
        focus: A
      });
    },
    xe: any = function (this: any, _: any, L: any): any {
      const A: any = (Ut as any)((_ as any).pointer, L);
      return {
        inline: (Xt as any)({
          offset: (A as any).inline,
          bandStart: (r as any).indexWidthPx,
          bandEnd: (L as any).clientWidth
        }),
        block: (Xt as any)({
          offset: (A as any).block,
          bandStart: ye,
          bandEnd: (L as any).clientHeight
        })
      };
    },
    ce: any = function (this: any, _: any): any {
      if (((_ as any).button as any) !== (0 as any)) return;
      const L: any = (pl as any)((_ as any).target);
      if ((L as any) == (null as any)) {
        (u as any)(null);
        return;
      }
      const A: any = {
          row: (L as any).row,
          col: (L as any).col ?? 0
        },
        X: any = (_ as any).shiftKey && (m as any) != (null as any);
      let te: any;
      ((L as any).col as any) == (null as any) ? te = (C as any)(X ? ((m as any).anchor as any).row : (L as any).row, (L as any).row) : te = X ? {
        anchor: (m as any).anchor,
        focus: A
      } : {
        anchor: A,
        focus: A
      }, (((_ as any).currentTarget as any).setPointerCapture as any)((_ as any).pointerId), (g as any).current = {
        anchor: (te as any).anchor,
        isRowDrag: ((L as any).col as any) == (null as any),
        pointer: {
          clientX: (_ as any).clientX,
          clientY: (_ as any).clientY
        },
        edgeScroll: null
      }, (le as any)(te);
    },
    me: any = function (this: any, _: any): any {
      const L: any = (g as any).current,
        A: any = (x as any).current;
      if ((L as any) == (null as any) || (A as any) == (null as any)) return;
      if (((((_ as any).buttons as any) & (1 as any)) as any) === (0 as any)) {
        (z as any)();
        return;
      }
      (L as any).pointer = {
        clientX: (_ as any).clientX,
        clientY: (_ as any).clientY
      }, (re as any)(L, A);
      const X: any = (xe as any)(L, A),
        te: any = ((X as any).inline as any) !== (0 as any) || ((X as any).block as any) !== (0 as any);
      te && ((L as any).edgeScroll as any) == (null as any) ? (L as any).edgeScroll = ((ml as any).arm as any)((): any => {
        if (((g as any).current as any) !== (L as any) || !(A as any).isConnected) return "done";
        const ue: any = (xe as any)(L, A);
        return ((ue as any).inline as any) === (0 as any) && ((ue as any).block as any) === (0 as any) ? ((L as any).edgeScroll = null, "done") : (((A as any).scrollBy as any)({
          top: (ue as any).block,
          left: (zt as any)((ue as any).inline, (Be as any)())
        }), (re as any)(L, A), "continue");
      }) : !te && ((L as any).edgeScroll as any) != (null as any) && ((((L as any).edgeScroll as any).dispose as any)(), (L as any).edgeScroll = null);
    };
  let Z: any;
  ((e as any)[9] as any) !== (m as any) ? (Z = function (this: any): any {
    (m as any) != (null as any) && (b as any)(!0);
  }, (e as any)[9] = m, (e as any)[10] = Z) : Z = (e as any)[10];
  const ee: any = Z,
    be: any = function (this: any, _: any): any {
      if ((_ as any).defaultPrevented || ((_ as any).nativeEvent as any).isComposing) return;
      if (((_ as any).metaKey || (_ as any).ctrlKey) && !(_ as any).altKey && ((((_ as any).key as any).toLowerCase as any)() as any) === ("a" as any)) {
        ((_ as any).preventDefault as any)(), (le as any)({
          anchor: {
            row: ((i as any).rowCount as any) - (1 as any),
            col: ((r as any).columnCount as any) - (1 as any)
          },
          focus: {
            row: Se,
            col: 0
          }
        });
        return;
      }
      const L: any = (x as any).current?.clientHeight ?? 0,
        A: any = ((Math as any).max as any)(1, (((Math as any).floor as any)(((L as any) - (ye as any) as any) / (ye as any)) as any) - (1 as any)),
        X: any = m?.focus ?? (p as any).current,
        te: any = X ?? (je as any)({
          row: 0,
          col: 0
        }, i),
        ue: any = (qa as any)(_, te, i, (Be as any)(), A);
      if ((ue as any) == (null as any)) return;
      ((_ as any).preventDefault as any)();
      const ve: any = (X as any) == (null as any) ? te : ue;
      (le as any)((_ as any).shiftKey && (m as any) != (null as any) ? {
        anchor: (m as any).anchor,
        focus: ve
      } : {
        anchor: ve,
        focus: ve
      }), (y as any)(ve);
    },
    B: any = (m as any) == (null as any) ? "" : (N as any)(((m as any).focus as any).row, ((m as any).focus as any).col),
    de: any = (m as any) == (null as any) || ((B as any).length as any) === (0 as any);
  let K: any;
  e: {
    if ((m as any) == (null as any)) {
      let _: any;
      ((e as any)[11] as any) !== (n as any) ? (_ = (n as any)({
        id: "tbPNQB",
        values: {
          COPY_SHORTCUT_LABEL: ul
        }
      }), (e as any)[11] = n, (e as any)[12] = _) : _ = (e as any)[12], K = _;
      break e;
    }
    let q: any;
    ((e as any)[13] as any) !== (n as any) || ((e as any)[14] as any) !== (B as any) ? (q = ((B as any).length as any) === (0 as any) ? (n as any)({
      id: "bLoMy2"
    }) : B, (e as any)[13] = n, (e as any)[14] = B, (e as any)[15] = q) : q = (e as any)[15], K = q;
  }
  const $: any = K,
    ge: any = (E as any) == (null as any) ? 1 : (Et as any)(E),
    he: any = (n as any)({
      id: "9WMwCC",
      values: {
        cellCount: ge
      }
    }),
    J: any = ((P as any).start as any) * (ye as any),
    we: any = (((Math as any).max as any)(0, ((l as any).length as any) - ((P as any).end as any)) as any) * (ye as any),
    ke: any = function (this: any, _: any, L: any, A: any): any {
      const X: any = (E as any) != (null as any) && (Oa as any)(E, _, L),
        te: any = (E as any) != (null as any) && (L as any) >= ((E as any).left as any) && (L as any) <= ((E as any).right as any),
        ue: any = (m as any) != (null as any) && (ht as any)((m as any).focus, {
          row: _,
          col: L
        }),
        ve: any = (_ as any) === (Se as any);
      return ((R as any).createElement as any)("div", {
        ...(Ne as any)((se as any).cell, ve && (se as any).headerCell, !ve && (((r as any).columns as any)[L]?.isNumeric as any) === (!0 as any) && (se as any).cellNumeric, ve ? te && (se as any).stickyCellActive : X && (se as any).cellInRange, ue && (se as any).cellFocus),
        "aria-colindex": (L as any) + (2 as any),
        "aria-selected": X ? !0 : void 0,
        "data-cell": "",
        "data-col": L,
        "data-row": _,
        key: L,
        role: ve ? "columnheader" : "gridcell",
        title: ((A as any).length as any) > (0 as any) ? A : void 0
      }, A);
    },
    Ce: any = function (this: any, _: any): any {
      const L: any = (E as any) != (null as any) && (_ as any) >= ((E as any).top as any) && (_ as any) <= ((E as any).bottom as any);
      return ((o as any).jsx as any)("div", {
        ...({
          0: {
            className: "sand-9f619 sand-1fgtraw sand-1yrsyyn sand-10b6aqq sand-mzvs34 sand-f159sx sand-1hkp6id sand-1q0q8m5 sand-19145p9 sand-qm0940 sand-18b5jzi sand-3dt9c2 sand-1sdyfia sand-b3r6kr sand-lyipyv sand-7wzq59 sand-1o0tod sand-1vjfegm sand-s6r99b sand-169k319 sand-p4054r"
          },
          1: {
            className: "sand-9f619 sand-1fgtraw sand-1yrsyyn sand-10b6aqq sand-mzvs34 sand-f159sx sand-1hkp6id sand-1q0q8m5 sand-19145p9 sand-qm0940 sand-18b5jzi sand-3dt9c2 sand-1sdyfia sand-b3r6kr sand-lyipyv sand-7wzq59 sand-1o0tod sand-1vjfegm sand-p4054r sand-1jgat75 sand-tyxrsu"
          }
        } as any)[(!!L as any) << (0 as any)],
        "aria-colindex": 1,
        "data-cell": "",
        "data-row": _,
        role: "rowheader",
        children: (_ as any) + (2 as any)
      });
    };
  let De: any, Te: any;
  ((e as any)[16] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (De = (ne as any)("sand-sheet-value-bar", "sand-78zum5 sand-dt5ytf sand-2lah0s sand-1hkp6id sand-1q0q8m5 sand-1kp61ed sand-s6r99b"), Te = {
    className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-c9qbxq sand-9f619 sand-1g0dm76 sand-f159sx"
  }, (e as any)[16] = De, (e as any)[17] = Te) : (De = (e as any)[16], Te = (e as any)[17]);
  const Oe: any = (E as any) != (null as any) ? ((o as any).jsx as any)(We, {
      level: "caption",
      style: (se as any).address,
      weight: "medium",
      children: (Ia as any)(E)
    }) : null,
    Ae: any = de && (se as any).valueQuiet;
  let H: any;
  ((e as any)[18] as any) !== (Ae as any) ? (H = [(se as any).value, Ae], (e as any)[18] = Ae, (e as any)[19] = H) : H = (e as any)[19];
  let Q: any;
  ((e as any)[20] as any) !== (H as any) || ((e as any)[21] as any) !== ($ as any) ? (Q = ((o as any).jsx as any)(We, {
    level: "label",
    style: H,
    children: $
  }), (e as any)[20] = H, (e as any)[21] = $, (e as any)[22] = Q) : Q = (e as any)[22];
  let Y: any;
  ((e as any)[23] as any) !== (n as any) || ((e as any)[24] as any) !== (f as any) ? (Y = (n as any)(f ? {
    id: "MweuVR"
  } : {
    id: "ZnXY/c"
  }), (e as any)[23] = n, (e as any)[24] = f, (e as any)[25] = Y) : Y = (e as any)[25];
  const pe: any = f ? "chevron-up" : "chevron-down";
  let Ge: any;
  ((e as any)[26] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ge = (): any => (b as any)(wl), (e as any)[26] = Ge) : Ge = (e as any)[26];
  let Ie: any;
  ((e as any)[27] as any) !== (Y as any) || ((e as any)[28] as any) !== (pe as any) ? (Ie = ((o as any).jsx as any)(lt, {
    "aria-label": Y,
    icon: pe,
    onClick: Ge,
    shape: "square",
    size: "sm",
    variant: "ghost"
  }), (e as any)[27] = Y, (e as any)[28] = pe, (e as any)[29] = Ie) : Ie = (e as any)[29];
  const ct: any = (m as any) != (null as any) ? ((o as any).jsx as any)(lt, {
    "aria-label": (h as any) === ("copied" as any) ? (n as any)({
      id: "6V3Ea3"
    }) : he,
    icon: (h as any) === ("copied" as any) ? "check" : "copy",
    onClick: S,
    shape: "square",
    size: "sm",
    variant: "ghost"
  }) : null;
  let qe: any;
  ((e as any)[30] as any) !== (Oe as any) || ((e as any)[31] as any) !== (Q as any) || ((e as any)[32] as any) !== (Ie as any) || ((e as any)[33] as any) !== (ct as any) ? (qe = ((o as any).jsxs as any)("div", {
    ...Te,
    children: [Oe, Q, Ie, ct]
  }), (e as any)[30] = Oe, (e as any)[31] = Q, (e as any)[32] = Ie, (e as any)[33] = ct, (e as any)[34] = qe) : qe = (e as any)[34];
  let $e: any;
  ((e as any)[35] as any) !== (B as any) || ((e as any)[36] as any) !== (f as any) ? ($e = f ? ((o as any).jsx as any)(ze, {
    className: "sand-19swzb4 sand-2lah0s sand-1hc762m sand-13fuv20 sand-t8lcch",
    scrollbarVisibility: "hover",
    children: ((o as any).jsx as any)(We, {
      as: "p",
      level: "label",
      style: (se as any).valueExpandedText,
      children: B
    })
  }) : null, (e as any)[35] = B, (e as any)[36] = f, (e as any)[37] = $e) : $e = (e as any)[37];
  let Ue: any;
  ((e as any)[38] as any) !== (qe as any) || ((e as any)[39] as any) !== ($e as any) ? (Ue = ((o as any).jsxs as any)("div", {
    className: De,
    children: [qe, $e]
  }), (e as any)[38] = qe, (e as any)[39] = $e, (e as any)[40] = Ue) : Ue = (e as any)[40];
  let Ke: any;
  ((e as any)[41] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ke = {
    className: "sand-1iyjqo2 sand-2lwn1j"
  }, (e as any)[41] = Ke) : Ke = (e as any)[41];
  const As: any = (Ke as any).className;
  let Ze: any;
  ((e as any)[42] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ze = {
    className: "sand-1iyjqo2 sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-9f619 sand-c7ga6q"
  }, (e as any)[42] = Ze) : Ze = (e as any)[42];
  let Qe: any;
  ((e as any)[43] as any) !== (m as any) ? (Qe = ({
    0: {
      className: "sand-78zum5 sand-dt5ytf sand-ezivpi sand-1ct8sxb sand-1d3mw78 sand-ss6m8b sand-1o0liin sand-87ps6o sand-t0e3qv sand-1hc762m sand-13fuv20 sand-t8lcch sand-1sd92yl sand-1t7ytsu sand-14mixaj sand-1de99jn sand-1t137rt sand-9v5kkp sand-4sht9k sand-2ssjo2"
    },
    1: {
      className: "sand-78zum5 sand-dt5ytf sand-ezivpi sand-1ct8sxb sand-1d3mw78 sand-ss6m8b sand-1o0liin sand-87ps6o sand-t0e3qv sand-1hc762m sand-13fuv20 sand-t8lcch sand-1sd92yl sand-1t7ytsu sand-14mixaj sand-1de99jn sand-4sht9k sand-2ssjo2 sand-1t137rt"
    }
  } as any)[(((m as any) != (null as any)) as any) << (0 as any)], (e as any)[43] = m, (e as any)[44] = Qe) : Qe = (e as any)[44];
  const Is: any = (t as any).name,
    qs: any = (Ne as any)(((se as any).row as any)((r as any).template), (se as any).headerRow);
  let Ye: any;
  ((e as any)[45] as any) !== (Ce as any) ? (Ye = (Ce as any)(Se), (e as any)[45] = Ce, (e as any)[46] = Ye) : Ye = (e as any)[46];
  let Je: any;
  ((e as any)[47] as any) !== (J as any) ? (Je = (J as any) > (0 as any) ? ((o as any).jsx as any)("div", {
    ...(Ne as any)(((se as any).spacer as any)(J)),
    "aria-hidden": !0
  }) : null, (e as any)[47] = J, (e as any)[48] = Je) : Je = (e as any)[48];
  let et: any;
  return ((e as any)[49] as any) !== (we as any) ? (et = (we as any) > (0 as any) ? ((o as any).jsx as any)("div", {
    ...(Ne as any)(((se as any).spacer as any)(we)),
    "aria-hidden": !0
  }) : null, (e as any)[49] = we, (e as any)[50] = et) : et = (e as any)[50], ((o as any).jsxs as any)((o as any).Fragment, {
    children: [Ue, ((o as any).jsx as any)(ze, {
      className: As,
      direction: "both",
      ref: oe,
      scrollbarVisibility: "hover",
      children: ((o as any).jsx as any)("div", {
        ...Ze,
        onDoubleClick: ee,
        onLostPointerCapture: z,
        onPointerCancel: z,
        onPointerDown: ce,
        onPointerMove: me,
        onPointerUp: z,
        children: ((o as any).jsxs as any)("div", {
          ...Qe,
          "aria-colcount": ((r as any).columnCount as any) + (1 as any),
          "aria-label": Is,
          "aria-multiselectable": !0,
          "aria-rowcount": ((l as any).length as any) + (1 as any),
          onKeyDown: be,
          ref: G,
          role: "grid",
          tabIndex: 0,
          children: [((o as any).jsxs as any)("div", {
            ...qs,
            "aria-rowindex": 1,
            role: "row",
            children: [Ye, ((c as any).map as any)((q: any): any => (ke as any)(Se, q, (a as any)[q] ?? ""))]
          }), Je, ((((l as any).slice as any)((P as any).start, (P as any).end) as any).map as any)((q: any, _: any): any => {
            const L: any = ((P as any).start as any) + (_ as any);
            return ((R as any).createElement as any)("div", {
              ...(Ne as any)(((se as any).row as any)((r as any).template)),
              "aria-rowindex": (L as any) + (2 as any),
              key: L,
              role: "row"
            }, (Ce as any)(L), ((c as any).map as any)((A: any): any => (ke as any)(L, A, (q as any)[A] ?? "")));
          }), et]
        })
      })
    })]
  });
}
function wl(this: any, s: any): any {
  return !s;
}
function yl(this: any, s: any, e: any): any {
  return e;
}
function bl(this: any, s: any, e: any): any {
  return (s as any) === ("audio" as any) ? "loaded" : (s as any) === ("unknown" as any) || (e as any) == (null as any) ? "pending" : ((e as any).status as any) === ("failed" as any) ? "retryable" : ((e as any).status as any) === ("ready" as any) ? "loaded" : "failed";
}
function Ds(this: any, s: any): any {
  (Ds as any).d = 438;
  const e: any = ((I as any).c as any)(3),
    {
      source: t,
      kind: n
    }: any = s,
    l: any = (Re as any)(t, (n as any) !== ("audio" as any) && (n as any) !== ("unknown" as any));
  let r: any;
  return ((e as any)[0] as any) !== (l as any) || ((e as any)[1] as any) !== (n as any) ? (r = (bl as any)(n, l), (e as any)[0] = l, (e as any)[1] = n, (e as any)[2] = r) : r = (e as any)[2], (fn as any)(t, r), null;
}
function jl(this: any, s: any): any {
  (jl as any).d = 437;
  const e: any = ((I as any).c as any)(9),
    {
      source: t,
      kind: n,
      isOpen: a
    }: any = s;
  let l: any;
  ((e as any)[0] as any) !== (a as any) || ((e as any)[1] as any) !== (n as any) || ((e as any)[2] as any) !== (t as any) ? (l = a && (n as any) !== ("image" as any) && (n as any) !== ("video" as any) ? ((o as any).jsx as any)(Ds, {
    kind: n,
    source: t
  }) : null, (e as any)[0] = a, (e as any)[1] = n, (e as any)[2] = t, (e as any)[3] = l) : l = (e as any)[3];
  let r: any;
  ((e as any)[4] as any) !== (s as any) ? (r = ((o as any).jsx as any)(Os, {
    ...s
  }), (e as any)[4] = s, (e as any)[5] = r) : r = (e as any)[5];
  let i: any;
  return ((e as any)[6] as any) !== (l as any) || ((e as any)[7] as any) !== (r as any) ? (i = ((o as any).jsxs as any)((o as any).Fragment, {
    children: [l, r]
  }), (e as any)[6] = l, (e as any)[7] = r, (e as any)[8] = i) : i = (e as any)[8], i;
}
function Os(this: any, s: any): any {
  (Os as any).d = 436;
  const e: any = ((I as any).c as any)(80),
    {
      source: t,
      kind: n,
      name: a,
      downloadName: l,
      isOpen: r,
      onClose: i,
      audioSession: c
    }: any = s,
    {
      _: d
    }: any = (ie as any)(),
    m: any = (jt as any)();
  switch (n) {
    case "image":
    case "video":
      {
        let u: any;
        ((e as any)[0] as any) !== (t as any) ? (u = [t], (e as any)[0] = t, (e as any)[1] = u) : u = (e as any)[1];
        let f: any;
        return ((e as any)[2] as any) !== (r as any) || ((e as any)[3] as any) !== (i as any) || ((e as any)[4] as any) !== (u as any) ? (f = ((o as any).jsx as any)(un, {
          isOpen: r,
          onClose: i,
          sources: u,
          startIndex: 0
        }), (e as any)[2] = r, (e as any)[3] = i, (e as any)[4] = u, (e as any)[5] = f) : f = (e as any)[5], f;
      }
    case "pdf":
      {
        let u: any;
        return ((e as any)[6] as any) !== (l as any) || ((e as any)[7] as any) !== (r as any) || ((e as any)[8] as any) !== (a as any) || ((e as any)[9] as any) !== (i as any) || ((e as any)[10] as any) !== (t as any) ? (u = ((o as any).jsx as any)(Ss, {
          downloadName: l,
          isOpen: r,
          name: a,
          onClose: i,
          source: t
        }), (e as any)[6] = l, (e as any)[7] = r, (e as any)[8] = a, (e as any)[9] = i, (e as any)[10] = t, (e as any)[11] = u) : u = (e as any)[11], u;
      }
    case "markdown":
    case "text":
      {
        const u: any = (n as any) === ("markdown" as any);
        let f: any;
        return ((e as any)[12] as any) !== (l as any) || ((e as any)[13] as any) !== (r as any) || ((e as any)[14] as any) !== (a as any) || ((e as any)[15] as any) !== (i as any) || ((e as any)[16] as any) !== (t as any) || ((e as any)[17] as any) !== (u as any) ? (f = ((o as any).jsx as any)(cs, {
          downloadName: l,
          isMarkdown: u,
          isOpen: r,
          name: a,
          onClose: i,
          source: t
        }), (e as any)[12] = l, (e as any)[13] = r, (e as any)[14] = a, (e as any)[15] = i, (e as any)[16] = t, (e as any)[17] = u, (e as any)[18] = f) : f = (e as any)[18], f;
      }
    case "html":
      {
        let u: any;
        return ((e as any)[19] as any) !== (l as any) || ((e as any)[20] as any) !== (r as any) || ((e as any)[21] as any) !== (a as any) || ((e as any)[22] as any) !== (i as any) || ((e as any)[23] as any) !== (t as any) ? (u = ((o as any).jsx as any)(hs, {
          downloadName: l,
          isOpen: r,
          name: a,
          onClose: i,
          source: t
        }), (e as any)[19] = l, (e as any)[20] = r, (e as any)[21] = a, (e as any)[22] = i, (e as any)[23] = t, (e as any)[24] = u) : u = (e as any)[24], u;
      }
    case "json":
      {
        let u: any;
        return ((e as any)[25] as any) !== (l as any) || ((e as any)[26] as any) !== (r as any) || ((e as any)[27] as any) !== (a as any) || ((e as any)[28] as any) !== (i as any) || ((e as any)[29] as any) !== (t as any) ? (u = ((o as any).jsx as any)(gs, {
          downloadName: l,
          isOpen: r,
          name: a,
          onClose: i,
          source: t
        }), (e as any)[25] = l, (e as any)[26] = r, (e as any)[27] = a, (e as any)[28] = i, (e as any)[29] = t, (e as any)[30] = u) : u = (e as any)[30], u;
      }
    case "table":
      {
        let u: any;
        return ((e as any)[31] as any) !== (l as any) || ((e as any)[32] as any) !== (r as any) || ((e as any)[33] as any) !== (a as any) || ((e as any)[34] as any) !== (i as any) || ((e as any)[35] as any) !== (t as any) ? (u = ((o as any).jsx as any)(Ms, {
          downloadName: l,
          isOpen: r,
          name: a,
          onClose: i,
          source: t
        }), (e as any)[31] = l, (e as any)[32] = r, (e as any)[33] = a, (e as any)[34] = i, (e as any)[35] = t, (e as any)[36] = u) : u = (e as any)[36], u;
      }
    case "audio":
      {
        let u: any;
        ((e as any)[37] as any) !== (l as any) || ((e as any)[38] as any) !== (t as any) ? (u = ((o as any).jsx as any)(ae, {
          downloadName: l,
          href: t
        }), (e as any)[37] = l, (e as any)[38] = t, (e as any)[39] = u) : u = (e as any)[39];
        let f: any;
        ((e as any)[40] as any) !== (c as any) || ((e as any)[41] as any) !== (a as any) || ((e as any)[42] as any) !== (t as any) ? (f = ((o as any).jsx as any)(dn, {
          href: t,
          name: a,
          session: c
        }), (e as any)[40] = c, (e as any)[41] = a, (e as any)[42] = t, (e as any)[43] = f) : f = (e as any)[43];
        let b: any;
        return ((e as any)[44] as any) !== (r as any) || ((e as any)[45] as any) !== (a as any) || ((e as any)[46] as any) !== (i as any) || ((e as any)[47] as any) !== (u as any) || ((e as any)[48] as any) !== (f as any) ? (b = ((o as any).jsx as any)(Pe, {
          actions: u,
          isOpen: r,
          onClose: i,
          title: a,
          children: f
        }), (e as any)[44] = r, (e as any)[45] = a, (e as any)[46] = i, (e as any)[47] = u, (e as any)[48] = f, (e as any)[49] = b) : b = (e as any)[49], b;
      }
    case "docx":
      {
        let u: any;
        return ((e as any)[50] as any) !== (l as any) || ((e as any)[51] as any) !== (r as any) || ((e as any)[52] as any) !== (a as any) || ((e as any)[53] as any) !== (i as any) || ((e as any)[54] as any) !== (t as any) ? (u = ((o as any).jsx as any)(is, {
          downloadName: l,
          isOpen: r,
          name: a,
          onClose: i,
          source: t
        }), (e as any)[50] = l, (e as any)[51] = r, (e as any)[52] = a, (e as any)[53] = i, (e as any)[54] = t, (e as any)[55] = u) : u = (e as any)[55], u;
      }
    case "unknown":
      {
        let u: any;
        ((e as any)[56] as any) !== (l as any) || ((e as any)[57] as any) !== (t as any) ? (u = ((o as any).jsx as any)(ae, {
          downloadName: l,
          href: t
        }), (e as any)[56] = l, (e as any)[57] = t, (e as any)[58] = u) : u = (e as any)[58];
        let f: any;
        ((e as any)[59] as any) !== (m as any) || ((e as any)[60] as any) !== (l as any) || ((e as any)[61] as any) !== (t as any) ? (f = (): any => {
          m?.([{
            path: t,
            suggestedName: l
          }]).catch(kl);
        }, (e as any)[59] = m, (e as any)[60] = l, (e as any)[61] = t, (e as any)[62] = f) : f = (e as any)[62];
        let b: any;
        ((e as any)[63] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = ((o as any).jsx as any)(Ee, {
          id: "mzI/c+"
        }), (e as any)[63] = b) : b = (e as any)[63];
        let j: any;
        ((e as any)[64] as any) !== (f as any) ? (j = ((o as any).jsx as any)(Le, {
          onClick: f,
          size: "sm",
          variant: "secondary",
          children: b
        }), (e as any)[64] = f, (e as any)[65] = j) : j = (e as any)[65];
        let k: any;
        ((e as any)[66] as any) !== (d as any) ? (k = (d as any)({
          id: "c0a6YO"
        }), (e as any)[66] = d, (e as any)[67] = k) : k = (e as any)[67];
        let x: any;
        ((e as any)[68] as any) !== (d as any) ? (x = (d as any)({
          id: "ciNBep"
        }), (e as any)[68] = d, (e as any)[69] = x) : x = (e as any)[69];
        let p: any;
        ((e as any)[70] as any) !== (j as any) || ((e as any)[71] as any) !== (k as any) || ((e as any)[72] as any) !== (x as any) ? (p = ((o as any).jsx as any)(U, {
          action: j,
          detail: k,
          icon: "file",
          title: x
        }), (e as any)[70] = j, (e as any)[71] = k, (e as any)[72] = x, (e as any)[73] = p) : p = (e as any)[73];
        let g: any;
        return ((e as any)[74] as any) !== (r as any) || ((e as any)[75] as any) !== (a as any) || ((e as any)[76] as any) !== (i as any) || ((e as any)[77] as any) !== (u as any) || ((e as any)[78] as any) !== (p as any) ? (g = ((o as any).jsx as any)(Pe, {
          actions: u,
          isOpen: r,
          onClose: i,
          title: a,
          children: p
        }), (e as any)[74] = r, (e as any)[75] = a, (e as any)[76] = i, (e as any)[77] = u, (e as any)[78] = p, (e as any)[79] = g) : g = (e as any)[79], g;
      }
  }
}
function kl(this: any): any {}
export { jl as FullscreenFileViewerBody };
//# debugId=4366f201-86dd-4069-a882-0c46e38bf071
