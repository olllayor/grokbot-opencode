declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "58ed0f5b-228e-4b00-8349-6b7289ce8952", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-58ed0f5b-228e-4b00-8349-6b7289ce8952");
  } catch (e: any) {}
} as any)();
import { c as H, j as k, T as K, r as I } from "./index.eager-vendor-Qbf9YA6n.js";
import { g as se, W as te, aY as le, aZ as ee, a_ as ie, a$ as ne, b0 as re, b1 as oe } from "./index-ZYxf-aBb.js";
import { aY as ae } from "./index.eager-platform-Dcfeegfw.js";
import { b7 as ce, cR as ue, cf as de, cS as fe, cT as ge, cU as me, cV as pe, cW as ke, cX as Se, cY as ye, cZ as Pe, c_ as ve, c$ as we, d0 as Be, d1 as be } from "./index.eager-app-Cj5f8Gby.js";
import { u as xe, s as Ae } from "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
function Fe(this: any, f: any): any {
  (Fe as any).d = 954;
  const e: any = ((H as any).c as any)(8),
    {
      onBack: r,
      icon: g,
      autoFocus: t,
      children: o
    }: any = f,
    c: any = (g as any) === (void 0 as any) ? "arrow-left" : g,
    a: any = (t as any) === (void 0 as any) ? !1 : t;
  let i: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = {
    className: "sand-jyslct sand-3nfvp2 sand-6s0dn4 sand-qcrz7y sand-17d4w8g sand-1717udv sand-ng3xce sand-jbqb8w sand-1o0liin sand-jb2p0i sand-1ypdohk"
  }, (e as any)[0] = i) : i = (e as any)[0];
  let d: any;
  ((e as any)[1] as any) !== (c as any) ? (d = ((k as any).jsx as any)(te, {
    name: c,
    size: "sm"
  }), (e as any)[1] = c, (e as any)[2] = d) : d = (e as any)[2];
  let m: any;
  return ((e as any)[3] as any) !== (a as any) || ((e as any)[4] as any) !== (o as any) || ((e as any)[5] as any) !== (r as any) || ((e as any)[6] as any) !== (d as any) ? (m = ((k as any).jsxs as any)("button", {
    autoFocus: a,
    ...i,
    onClick: r,
    type: "button",
    children: [d, o]
  }), (e as any)[3] = a, (e as any)[4] = o, (e as any)[5] = r, (e as any)[6] = d, (e as any)[7] = m) : m = (e as any)[7], m;
}
function Re(this: any, f: any): any {
  (Re as any).d = 955;
  const e: any = ((H as any).c as any)(12),
    {
      access: r,
      writeFailure: g
    }: any = f,
    t: any = (g as any) === (void 0 as any) ? null : g;
  if (!(r as any).writeFailed && !(r as any).needsRetry) return null;
  let o: any;
  ((e as any)[0] as any) !== ((r as any).writeFailed as any) || ((e as any)[1] as any) !== (t as any) ? (o = (r as any).writeFailed && (t as any) != (null as any) ? t : ((k as any).jsx as any)(K, {
    id: "D2AZQg"
  }), (e as any)[0] = (r as any).writeFailed, (e as any)[1] = t, (e as any)[2] = o) : o = (e as any)[2];
  let c: any;
  ((e as any)[3] as any) !== (o as any) ? (c = ((k as any).jsx as any)(ae, {
    as: "p",
    color: "red",
    role: "alert",
    size: "sm",
    children: o
  }), (e as any)[3] = o, (e as any)[4] = c) : c = (e as any)[4];
  let a: any;
  ((e as any)[5] as any) !== ((r as any).isPending as any) || ((e as any)[6] as any) !== ((r as any).needsRetry as any) || ((e as any)[7] as any) !== ((r as any).retry as any) ? (a = (r as any).needsRetry ? ((k as any).jsx as any)(se, {
    disabled: (r as any).isPending,
    onClick: (r as any).retry,
    size: "sm",
    type: "button",
    variant: "secondary",
    children: ((k as any).jsx as any)(K, {
      id: "qJb6G2"
    })
  }) : null, (e as any)[5] = (r as any).isPending, (e as any)[6] = (r as any).needsRetry, (e as any)[7] = (r as any).retry, (e as any)[8] = a) : a = (e as any)[8];
  let i: any;
  return ((e as any)[9] as any) !== (c as any) || ((e as any)[10] as any) !== (a as any) ? (i = ((k as any).jsxs as any)((k as any).Fragment, {
    children: [c, a]
  }), (e as any)[9] = c, (e as any)[10] = a, (e as any)[11] = i) : i = (e as any)[11], i;
}
function Te(this: any, f: any): any {
  const e: any = ((H as any).c as any)(84),
    r: any = (ce as any)(),
    g: any = (ue as any)(f),
    t: any = (de as any)(f),
    o: any = (xe as any)(f),
    {
      plugins: c
    }: any = (fe as any)(),
    a: any = (ge as any)(),
    i: any = (me as any)(),
    d: any = (pe as any)(),
    m: any = (ke as any)(),
    U: any = (Se as any)(),
    Y: any = (ye as any)(),
    y: any = (Pe as any)(f);
  let T: any;
  ((e as any)[0] as any) !== (y as any) ? (T = (ve as any)(y, []), (e as any)[0] = y, (e as any)[1] = T) : T = (e as any)[1];
  const Z: any = T,
    {
      catalog: P
    }: any = (we as any)();
  let W: any;
  ((e as any)[2] as any) !== (o as any) || ((e as any)[3] as any) !== (P as any) || ((e as any)[4] as any) !== (c as any) || ((e as any)[5] as any) !== (t as any) ? (W = (le as any)(t, o, c, P), (e as any)[2] = o, (e as any)[3] = P, (e as any)[4] = c, (e as any)[5] = t, (e as any)[6] = W) : W = (e as any)[6];
  const v: any = W,
    [p, D]: any = ((I as any).useState as any)(!1),
    [w, J]: any = ((I as any).useState as any)(!1);
  let E: any;
  ((e as any)[7] as any) !== (p as any) ? (E = (l: any): any => p ? ((Promise as any).resolve as any)(!1) : ((D as any)(!0), (J as any)(!1), (((l as any)() as any).then as any)((): any => ((D as any)(!1), !0), (u: any): any => ((Be as any)(u, {
    tags: {
      sand_area: "grok-bot-team"
    }
  }), (J as any)(!0), (D as any)(!1), !1))), (e as any)[7] = p, (e as any)[8] = E) : E = (e as any)[8];
  const n: any = E,
    s: any = f ?? "";
  let $: any;
  ((e as any)[9] as any) !== (g as any) ? ($ = (ee as any)(g), (e as any)[9] = g, (e as any)[10] = $) : $ = (e as any)[10];
  const S: any = $;
  let z: any;
  ((e as any)[11] as any) !== (y as any) ? (z = (ee as any)(y), (e as any)[11] = y, (e as any)[12] = z) : z = (e as any)[12];
  const V: any = z;
  let B: any;
  ((e as any)[13] as any) !== (s as any) || ((e as any)[14] as any) !== (a as any) ? (B = (): any => (a as any)(s), (e as any)[13] = s, (e as any)[14] = a, (e as any)[15] = B) : B = (e as any)[15];
  let b: any;
  ((e as any)[16] as any) !== (s as any) || ((e as any)[17] as any) !== (t as any) || ((e as any)[18] as any) !== (n as any) || ((e as any)[19] as any) !== (i as any) ? (b = (l: any): any => {
    (n as any)((): any => (i as any)(s, (ie as any)((t as any).plugins, l)));
  }, (e as any)[16] = s, (e as any)[17] = t, (e as any)[18] = n, (e as any)[19] = i, (e as any)[20] = b) : b = (e as any)[20];
  let x: any;
  ((e as any)[21] as any) !== (o as any) || ((e as any)[22] as any) !== (s as any) || ((e as any)[23] as any) !== (t as any) || ((e as any)[24] as any) !== (n as any) || ((e as any)[25] as any) !== (i as any) ? (x = (l: any): any => {
    ((o as any).includes as any)(l) && (Ae as any)(s, l, !1), (((t as any).plugins as any).some as any)((u: any): any => ((u as any).pluginId as any) === (l as any)) && (n as any)((): any => (i as any)(s, (ne as any)((t as any).plugins, l)));
  }, (e as any)[21] = o, (e as any)[22] = s, (e as any)[23] = t, (e as any)[24] = n, (e as any)[25] = i, (e as any)[26] = x) : x = (e as any)[26];
  let A: any, F: any;
  ((e as any)[27] as any) !== (s as any) || ((e as any)[28] as any) !== (t as any) || ((e as any)[29] as any) !== (n as any) || ((e as any)[30] as any) !== (i as any) ? (A = (l: any): any => (n as any)((): any => (i as any)(s, (re as any)((t as any).plugins, l))), F = (l: any, u: any): any => (n as any)((): any => (i as any)(s, (oe as any)((t as any).plugins, l, u))), (e as any)[27] = s, (e as any)[28] = t, (e as any)[29] = n, (e as any)[30] = i, (e as any)[31] = A, (e as any)[32] = F) : (A = (e as any)[31], F = (e as any)[32]);
  let R: any;
  ((e as any)[33] as any) !== (s as any) || ((e as any)[34] as any) !== (t as any) || ((e as any)[35] as any) !== (n as any) || ((e as any)[36] as any) !== (d as any) || ((e as any)[37] as any) !== (i as any) ? (R = (l: any, u: any): any => (n as any)(async (): Promise<any> => {
    (((t as any).plugins as any).some as any)((X: any): any => ((X as any).pluginId as any) === (l as any)) || (await (i as any)(s, [...(be as any)((t as any).plugins), {
      kind: "plugin",
      pluginId: l
    }])), await (d as any)(s, l, u);
  }), (e as any)[33] = s, (e as any)[34] = t, (e as any)[35] = n, (e as any)[36] = d, (e as any)[37] = i, (e as any)[38] = R) : R = (e as any)[38];
  let _: any;
  ((e as any)[39] as any) !== (P as any) || ((e as any)[40] as any) !== (p as any) || ((e as any)[41] as any) !== (v as any) || ((e as any)[42] as any) !== (S as any) || ((e as any)[43] as any) !== (R as any) || ((e as any)[44] as any) !== (B as any) || ((e as any)[45] as any) !== (b as any) || ((e as any)[46] as any) !== (x as any) || ((e as any)[47] as any) !== (A as any) || ((e as any)[48] as any) !== (F as any) || ((e as any)[49] as any) !== (w as any) ? (_ = {
    listing: v,
    catalog: P,
    isPending: p,
    ...S,
    writeFailed: w,
    retry: B,
    add: b,
    remove: x,
    addCustom: A,
    updateCustom: F,
    configure: R
  }, (e as any)[39] = P, (e as any)[40] = p, (e as any)[41] = v, (e as any)[42] = S, (e as any)[43] = R, (e as any)[44] = B, (e as any)[45] = b, (e as any)[46] = x, (e as any)[47] = A, (e as any)[48] = F, (e as any)[49] = w, (e as any)[50] = _) : _ = (e as any)[50];
  const M: any = _,
    N: any = (S as any).needsRetry || (V as any).needsRetry;
  let h: any;
  ((e as any)[51] as any) !== (r as any) || ((e as any)[52] as any) !== (s as any) || ((e as any)[53] as any) !== (a as any) ? (h = (): any => {
    (a as any)(s), (((r as any).workflows as any).refresh as any)(s);
  }, (e as any)[51] = r, (e as any)[52] = s, (e as any)[53] = a, (e as any)[54] = h) : h = (e as any)[54];
  let j: any, C: any;
  ((e as any)[55] as any) !== (m as any) || ((e as any)[56] as any) !== (s as any) || ((e as any)[57] as any) !== (n as any) ? (j = (l: any): any => (n as any)((): any => (m as any)(s, l)), C = async (l: any): Promise<any> => {
    let u: any = 0;
    for (const X of l) (await (n as any)((): any => (m as any)(s, X))) && (u = (u as any) + (1 as any));
    return (u as any) < ((l as any).length as any) && (J as any)(!0), u;
  }, (e as any)[55] = m, (e as any)[56] = s, (e as any)[57] = n, (e as any)[58] = j, (e as any)[59] = C) : (j = (e as any)[58], C = (e as any)[59]);
  let G: any;
  ((e as any)[60] as any) !== (s as any) || ((e as any)[61] as any) !== (n as any) || ((e as any)[62] as any) !== (U as any) ? (G = (l: any): any => (n as any)((): any => (U as any)(s, l)), (e as any)[60] = s, (e as any)[61] = n, (e as any)[62] = U, (e as any)[63] = G) : G = (e as any)[63];
  let O: any;
  ((e as any)[64] as any) !== (s as any) || ((e as any)[65] as any) !== (Y as any) || ((e as any)[66] as any) !== (n as any) ? (O = (l: any): any => (n as any)((): any => (Y as any)(s, l)), (e as any)[64] = s, (e as any)[65] = Y, (e as any)[66] = n, (e as any)[67] = O) : O = (e as any)[67];
  let q: any;
  ((e as any)[68] as any) !== (p as any) || ((e as any)[69] as any) !== (v as any) || ((e as any)[70] as any) !== ((S as any).load as any) || ((e as any)[71] as any) !== (N as any) || ((e as any)[72] as any) !== (h as any) || ((e as any)[73] as any) !== (j as any) || ((e as any)[74] as any) !== (C as any) || ((e as any)[75] as any) !== (G as any) || ((e as any)[76] as any) !== (O as any) || ((e as any)[77] as any) !== (Z as any) || ((e as any)[78] as any) !== ((V as any).load as any) || ((e as any)[79] as any) !== (w as any) ? (q = {
    listing: v,
    userSkills: Z,
    userSkillsLoad: (V as any).load,
    isPending: p,
    load: (S as any).load,
    writeFailed: w,
    needsRetry: N,
    retry: h,
    addSkill: j,
    addSkills: C,
    updateSkill: G,
    removeBotSkill: O
  }, (e as any)[68] = p, (e as any)[69] = v, (e as any)[70] = (S as any).load, (e as any)[71] = N, (e as any)[72] = h, (e as any)[73] = j, (e as any)[74] = C, (e as any)[75] = G, (e as any)[76] = O, (e as any)[77] = Z, (e as any)[78] = (V as any).load, (e as any)[79] = w, (e as any)[80] = q) : q = (e as any)[80];
  const Q: any = q;
  let L: any;
  return ((e as any)[81] as any) !== (Q as any) || ((e as any)[82] as any) !== (M as any) ? (L = {
    pluginsAccess: M,
    contextAccess: Q
  }, (e as any)[81] = Q, (e as any)[82] = M, (e as any)[83] = L) : L = (e as any)[83], L;
}
export { Fe as P, Re as a, Te as u };
//# debugId=58ed0f5b-228e-4b00-8349-6b7289ce8952
