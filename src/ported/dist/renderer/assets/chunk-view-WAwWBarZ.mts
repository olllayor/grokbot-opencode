declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "7ffc5c42-c59e-4d48-a720-caf210a765de", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-7ffc5c42-c59e-4d48-a720-caf210a765de");
  } catch (e: any) {}
} as any)();
import { c as W, u as H, r as Z, p as $, j as l, T as K } from "./index.eager-vendor-Qbf9YA6n.js";
import { b5 as q, b6 as se, b7 as ae, b8 as ie, g as R, an as le, a5 as re, a6 as ne } from "./index-ZYxf-aBb.js";
import { i as oe, aY as J } from "./index.eager-platform-Dcfeegfw.js";
import { b7 as ce, d6 as me, d7 as de, d8 as pe, d9 as he, aK as U, r as E, da as ue, aP as fe, db as be } from "./index.eager-app-Cj5f8Gby.js";
import { B as Se, a as Y } from "./chunk-bot-template-details-dialog-CbD31Hrp.js";
import { s as G, B as ve } from "./chunk-bot-template-share-card-frame-gOKZUO-a.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-wipe-navigation-B3wgZxtA.js";
import "./chunk-bot-template-details-focus-BkZ83BHB.js";
function Q(this: any, A: any): any {
  (Q as any).d = 272;
  const e: any = ((W as any).c as any)(17),
    {
      share: a
    }: any = A,
    {
      _: i
    }: any = (H as any)(),
    t: any = (be as any)();
  if ((a as any).isPublished && ((a as any).isAvailable || t)) {
    const u: any = (a as any).copyLink;
    let o: any;
    ((e as any)[0] as any) !== (i as any) ? (o = (i as any)({
      id: "a83GDF"
    }), (e as any)[0] = i, (e as any)[1] = o) : o = (e as any)[1];
    let f: any;
    ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = ((l as any).jsx as any)(Y, {
      mode: "copy-link"
    }), (e as any)[2] = f) : f = (e as any)[2];
    let d: any;
    return ((e as any)[3] as any) !== ((a as any).copyLink as any) || ((e as any)[4] as any) !== (o as any) ? (d = ((l as any).jsx as any)(R, {
      tone: "monochrome",
      onClick: u,
      rootStyle: (U as any).askCardButton,
      size: "md",
      title: o,
      variant: "primary",
      children: f
    }), (e as any)[3] = (a as any).copyLink, (e as any)[4] = o, (e as any)[5] = d) : d = (e as any)[5], d;
  }
  if (!(a as any).isAvailable) return null;
  const h: any = (a as any).isPublishing;
  let s: any;
  ((e as any)[6] as any) !== (a as any) ? (s = (): any => {
    ((a as any).publish as any)();
  }, (e as any)[6] = a, (e as any)[7] = s) : s = (e as any)[7];
  let r: any;
  ((e as any)[8] as any) !== (i as any) ? (r = (i as any)({
    id: "eORZUT"
  }), (e as any)[8] = i, (e as any)[9] = r) : r = (e as any)[9];
  const c: any = (a as any).isPublishing ? "publishing" : "publish";
  let n: any;
  ((e as any)[10] as any) !== (c as any) ? (n = ((l as any).jsx as any)(Y, {
    mode: c
  }), (e as any)[10] = c, (e as any)[11] = n) : n = (e as any)[11];
  let m: any;
  return ((e as any)[12] as any) !== ((a as any).isPublishing as any) || ((e as any)[13] as any) !== (s as any) || ((e as any)[14] as any) !== (r as any) || ((e as any)[15] as any) !== (n as any) ? (m = ((l as any).jsx as any)(R, {
    tone: "monochrome",
    disabled: h,
    onClick: s,
    rootStyle: (U as any).askCardButton,
    size: "md",
    title: r,
    variant: "primary",
    children: n
  }), (e as any)[12] = (a as any).isPublishing, (e as any)[13] = s, (e as any)[14] = r, (e as any)[15] = n, (e as any)[16] = m) : m = (e as any)[16], m;
}
function X(this: any, A: any): any {
  (X as any).d = 273;
  const e: any = ((W as any).c as any)(67),
    {
      template: a,
      sourceAgentId: i
    }: any = A,
    {
      _: t
    }: any = (H as any)(),
    {
      botTemplates: h
    }: any = (ce as any)();
  (q as any)((a as any).shareId, (a as any).version);
  const s: any = (me as any)(a);
  let r: any;
  ((e as any)[0] as any) !== ((a as any).version as any) || ((e as any)[1] as any) !== (s as any) ? (r = (de as any)(s) ? (s as any).version ?? (a as any).version : void 0, (e as any)[0] = (a as any).version, (e as any)[1] = s, (e as any)[2] = r) : r = (e as any)[2], (se as any)((a as any).shareId, r);
  const c: any = (pe as any)((a as any).shareId);
  let n: any;
  ((e as any)[3] as any) !== (h as any) || ((e as any)[4] as any) !== (c as any) || ((e as any)[5] as any) !== (i as any) || ((e as any)[6] as any) !== (a as any) ? (n = (): any => {
    const b: any = (i as any) == (null as any) ? a : {
      ...a,
      sourceAgentId: i
    };
    return (c as any) !== ("deleted" as any) && ((h as any).applyShareResult as any)(b), (i as any) == (null as any) || (c as any) === ("deleted" as any) ? ge : (((h as any).associateSourceAgent as any)({
      shareId: (a as any).shareId,
      sourceAgentId: i,
      view: b
    }), ye);
  }, (e as any)[3] = h, (e as any)[4] = c, (e as any)[5] = i, (e as any)[6] = a, (e as any)[7] = n) : n = (e as any)[7], (oe as any)(n);
  let m: any;
  ((e as any)[8] as any) !== (s as any) ? (m = (he as any)(s), (e as any)[8] = s, (e as any)[9] = m) : m = (e as any)[9];
  const u: any = m;
  (q as any)((s as any).shareId, u);
  const [o, f]: any = ((Z as any).useState as any)(!1),
    [d, F]: any = ((Z as any).useState as any)(!1),
    p: any = (ae as any)(s);
  if ((c as any) === ("deleted" as any)) {
    let b: any, S: any, _: any;
    ((e as any)[10] as any) !== (t as any) || ((e as any)[11] as any) !== ((s as any).name as any) ? (b = ($ as any)((U as any).transcriptWidget, (G as any).card), S = (t as any)({
      id: "n3iJiO",
      values: {
        0: (s as any).name
      }
    }), _ = (E as any)("sand-bot-template-share-card", (b as any).className), (e as any)[10] = t, (e as any)[11] = (s as any).name, (e as any)[12] = b, (e as any)[13] = S, (e as any)[14] = _) : (b = (e as any)[12], S = (e as any)[13], _ = (e as any)[14]);
    const te: any = (b as any).style;
    let P: any;
    ((e as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (P = (E as any)((($ as any)((G as any).title) as any).className), (e as any)[15] = P) : P = (e as any)[15];
    let L: any;
    ((e as any)[16] as any) !== (P as any) || ((e as any)[17] as any) !== ((s as any).name as any) ? (L = ((l as any).jsx as any)(J, {
      className: P,
      dir: "auto",
      size: "lg",
      weight: "semibold",
      children: (s as any).name
    }), (e as any)[16] = P, (e as any)[17] = (s as any).name, (e as any)[18] = L) : L = (e as any)[18];
    let M: any;
    ((e as any)[19] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (M = (E as any)("sand-10im51j sand-euugli sand-1o0liin sand-13faqbe"), (e as any)[19] = M) : M = (e as any)[19];
    let z: any;
    ((e as any)[20] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (z = ((l as any).jsx as any)(K, {
      id: "WZKu5f"
    }), (e as any)[20] = z) : z = (e as any)[20];
    let V: any;
    ((e as any)[21] as any) !== (M as any) ? (V = ((l as any).jsx as any)(J, {
      as: "p",
      className: M,
      size: "lg",
      children: z
    }), (e as any)[21] = M, (e as any)[22] = V) : V = (e as any)[22];
    let O: any;
    return ((e as any)[23] as any) !== ((b as any).style as any) || ((e as any)[24] as any) !== (V as any) || ((e as any)[25] as any) !== (S as any) || ((e as any)[26] as any) !== (_ as any) || ((e as any)[27] as any) !== (L as any) ? (O = ((l as any).jsxs as any)("article", {
      "aria-label": S,
      className: _,
      style: te,
      children: [L, V]
    }), (e as any)[23] = (b as any).style, (e as any)[24] = V, (e as any)[25] = S, (e as any)[26] = _, (e as any)[27] = L, (e as any)[28] = O) : O = (e as any)[28], O;
  }
  let v: any;
  ((e as any)[29] as any) !== (p as any) ? (v = ((l as any).jsx as any)(Q, {
    share: p
  }), (e as any)[29] = p, (e as any)[30] = v) : v = (e as any)[30];
  let y: any;
  ((e as any)[31] as any) !== (h as any) || ((e as any)[32] as any) !== (u as any) || ((e as any)[33] as any) !== ((s as any).shareId as any) ? (y = (): any => {
    (F as any)(!0);
    const b: any = (u as any) == (null as any) ? ((Promise as any).resolve as any)() : ((h as any).prefetchVersion as any)((s as any).shareId, u),
      S: any = (): any => {
        (F as any)(!1), (f as any)(!0);
      };
    ((b as any).then as any)(S, S);
  }, (e as any)[31] = h, (e as any)[32] = u, (e as any)[33] = (s as any).shareId, (e as any)[34] = y) : y = (e as any)[34];
  let N: any;
  ((e as any)[35] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (N = [(U as any).askCardButton, (G as any).actionSecondary], (e as any)[35] = N) : N = (e as any)[35];
  let g: any;
  ((e as any)[36] as any) !== (t as any) ? (g = (t as any)({
    id: "kthsWj"
  }), (e as any)[36] = t, (e as any)[37] = g) : g = (e as any)[37];
  let x: any;
  ((e as any)[38] as any) !== (d as any) ? (x = d ? ((l as any).jsx as any)(fe, {
    borderWidth: 1.5,
    size: 14
  }) : null, (e as any)[38] = d, (e as any)[39] = x) : x = (e as any)[39];
  let w: any;
  ((e as any)[40] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = ((l as any).jsx as any)(K, {
    id: "SZw9tS"
  }), (e as any)[40] = w) : w = (e as any)[40];
  let k: any;
  ((e as any)[41] as any) !== (d as any) || ((e as any)[42] as any) !== (y as any) || ((e as any)[43] as any) !== (g as any) || ((e as any)[44] as any) !== (x as any) ? (k = ((l as any).jsxs as any)(R, {
    disabled: d,
    onClick: y,
    rootStyle: N,
    size: "md",
    title: g,
    variant: "outline",
    children: [x, w]
  }), (e as any)[41] = d, (e as any)[42] = y, (e as any)[43] = g, (e as any)[44] = x, (e as any)[45] = k) : k = (e as any)[45];
  let j: any;
  ((e as any)[46] as any) !== (k as any) || ((e as any)[47] as any) !== (v as any) ? (j = ((l as any).jsxs as any)((l as any).Fragment, {
    children: [v, k]
  }), (e as any)[46] = k, (e as any)[47] = v, (e as any)[48] = j) : j = (e as any)[48];
  const ee: any = (p as any).isPublished;
  let B: any;
  ((e as any)[49] as any) !== ((p as any).isMarkLive as any) ? (B = (ie as any)({
    parkUntilLive: !0,
    isMarkLive: (p as any).isMarkLive
  }), (e as any)[49] = (p as any).isMarkLive, (e as any)[50] = B) : B = (e as any)[50];
  let T: any;
  ((e as any)[51] as any) !== ((p as any).markState as any) || ((e as any)[52] as any) !== ((p as any).spinSignal as any) || ((e as any)[53] as any) !== (B as any) ? (T = {
    ...B,
    state: (p as any).markState,
    spinSignal: (p as any).spinSignal
  }, (e as any)[51] = (p as any).markState, (e as any)[52] = (p as any).spinSignal, (e as any)[53] = B, (e as any)[54] = T) : T = (e as any)[54];
  let C: any;
  ((e as any)[55] as any) !== ((p as any).isPublished as any) || ((e as any)[56] as any) !== (j as any) || ((e as any)[57] as any) !== (T as any) || ((e as any)[58] as any) !== (s as any) ? (C = ((l as any).jsx as any)(ve, {
    footer: j,
    isPublished: ee,
    mark: T,
    template: s
  }), (e as any)[55] = (p as any).isPublished, (e as any)[56] = j, (e as any)[57] = T, (e as any)[58] = s, (e as any)[59] = C) : C = (e as any)[59];
  let I: any;
  ((e as any)[60] as any) !== (o as any) || ((e as any)[61] as any) !== (i as any) || ((e as any)[62] as any) !== (s as any) ? (I = o ? ((l as any).jsx as any)(Se, {
    onClose: (): any => (f as any)(!1),
    ...((i as any) == (null as any) ? {} : {
      sourceAgentId: i
    }),
    template: (ue as any)(s)
  }) : null, (e as any)[60] = o, (e as any)[61] = i, (e as any)[62] = s, (e as any)[63] = I) : I = (e as any)[63];
  let D: any;
  return ((e as any)[64] as any) !== (C as any) || ((e as any)[65] as any) !== (I as any) ? (D = ((l as any).jsxs as any)((l as any).Fragment, {
    children: [C, I]
  }), (e as any)[64] = C, (e as any)[65] = I, (e as any)[66] = D) : D = (e as any)[66], D;
}
function ye(this: any): any {}
function ge(this: any): any {}
function xe(this: any, A: any): any {
  (xe as any).d = 311;
  const e: any = ((W as any).c as any)(31),
    {
      entry: a,
      adjacency: i
    }: any = A,
    {
      message: t
    }: any = a,
    h: any = (le as any)();
  let s: any;
  ((e as any)[0] as any) !== (h as any) ? (s = (h as any) === (null as any) ? {} : {
    sourceAgentId: h
  }, (e as any)[0] = h, (e as any)[1] = s) : s = (e as any)[1];
  let r: any;
  ((e as any)[2] as any) !== ((t as any).version as any) ? (r = ((t as any).version as any) == (null as any) ? {} : {
    version: (t as any).version
  }, (e as any)[2] = (t as any).version, (e as any)[3] = r) : r = (e as any)[3];
  let c: any;
  ((e as any)[4] as any) !== ((t as any).published as any) ? (c = ((t as any).published as any) == (null as any) ? {} : {
    published: (t as any).published
  }, (e as any)[4] = (t as any).published, (e as any)[5] = c) : c = (e as any)[5];
  let n: any;
  ((e as any)[6] as any) !== ((t as any).activeVersion as any) ? (n = ((t as any).activeVersion as any) == (null as any) ? {} : {
    activeVersion: (t as any).activeVersion
  }, (e as any)[6] = (t as any).activeVersion, (e as any)[7] = n) : n = (e as any)[7];
  let m: any;
  ((e as any)[8] as any) !== ((t as any).visibility as any) ? (m = ((t as any).visibility as any) == (null as any) ? {} : {
    visibility: (t as any).visibility
  }, (e as any)[8] = (t as any).visibility, (e as any)[9] = m) : m = (e as any)[9];
  let u: any;
  ((e as any)[10] as any) !== ((t as any).avatarColor as any) || ((e as any)[11] as any) !== ((t as any).avatarShape as any) || ((e as any)[12] as any) !== ((t as any).body as any) || ((e as any)[13] as any) !== ((t as any).name as any) || ((e as any)[14] as any) !== ((t as any).shareId as any) || ((e as any)[15] as any) !== ((t as any).shareUrl as any) || ((e as any)[16] as any) !== (r as any) || ((e as any)[17] as any) !== (c as any) || ((e as any)[18] as any) !== (n as any) || ((e as any)[19] as any) !== (m as any) ? (u = {
    shareId: (t as any).shareId,
    name: (t as any).name,
    avatarShape: (t as any).avatarShape,
    avatarColor: (t as any).avatarColor,
    description: (t as any).body,
    shareUrl: (t as any).shareUrl,
    ...r,
    ...c,
    ...n,
    ...m
  }, (e as any)[10] = (t as any).avatarColor, (e as any)[11] = (t as any).avatarShape, (e as any)[12] = (t as any).body, (e as any)[13] = (t as any).name, (e as any)[14] = (t as any).shareId, (e as any)[15] = (t as any).shareUrl, (e as any)[16] = r, (e as any)[17] = c, (e as any)[18] = n, (e as any)[19] = m, (e as any)[20] = u) : u = (e as any)[20];
  let o: any;
  ((e as any)[21] as any) !== (s as any) || ((e as any)[22] as any) !== (u as any) ? (o = ((l as any).jsx as any)(X, {
    ...s,
    template: u
  }), (e as any)[21] = s, (e as any)[22] = u, (e as any)[23] = o) : o = (e as any)[23];
  let f: any;
  ((e as any)[24] as any) !== ((i as any).isGroupStart as any) || ((e as any)[25] as any) !== ((a as any).timestampMs as any) || ((e as any)[26] as any) !== (o as any) ? (f = ((l as any).jsx as any)(re, {
    className: "sand-bot-template-share-card-wrap",
    isGroupStart: (i as any).isGroupStart,
    timestampMs: (a as any).timestampMs,
    variant: "tab",
    children: o
  }), (e as any)[24] = (i as any).isGroupStart, (e as any)[25] = (a as any).timestampMs, (e as any)[26] = o, (e as any)[27] = f) : f = (e as any)[27];
  let d: any;
  return ((e as any)[28] as any) !== (a as any) || ((e as any)[29] as any) !== (f as any) ? (d = ((l as any).jsx as any)(ne, {
    entry: a,
    children: f
  }), (e as any)[28] = a, (e as any)[29] = f, (e as any)[30] = d) : d = (e as any)[30], d;
}
export { xe as default };
//# debugId=7ffc5c42-c59e-4d48-a720-caf210a765de
