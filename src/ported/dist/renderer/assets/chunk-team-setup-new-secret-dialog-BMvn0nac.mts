declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "9ff9de8e-b8d8-4dab-8a49-8bf4bc38e0f7", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-9ff9de8e-b8d8-4dab-8a49-8bf4bc38e0f7");
  } catch (e: any) {}
} as any)();
import { c as Ae, u as Ue, r as f, j as t, T as p } from "./index.eager-vendor-Qbf9YA6n.js";
import { u as Je, G as $e, a as He, v as Me, b as We } from "./chunk-grok-bot-secret-problem-text-DKm2VrEb.js";
import { x as U } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-app-Cj5f8Gby.js";
import { T as Xe, a as Ye } from "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
const Ze: any = {
    body: {
      k1xSpc: "sand-78zum5",
      kXwgrk: "sand-dt5ytf",
      kOIVth: "sand-1v2ro7d",
      kLKAdn: "sand-1y1aw1k",
      kGO01o: "sand-1l90r2v",
      $$css: !0
    }
  },
  Ve: any = {
    className: "sand-1ghz6dp sand-1wm8ruf sand-1d3mw78 sand-6rl5ky"
  };
function Oe(this: any, n: any): any {
  return ((n as any).relatedTarget?.closest("button") as any) != (null as any);
}
function Qe(this: any, n: any, e: any, o: any, d: any): any {
  if (((n as any).length as any) === (0 as any)) return null;
  if (((e as any).has as any)(n)) return d;
  const r: any = (Me as any)(n);
  return (r as any) === (null as any) ? null : ((o as any).name as any)(r);
}
function et(this: any, n: any, e: any): any {
  if (((n as any).length as any) === (0 as any)) return null;
  const o: any = (We as any)(((n as any).trim as any)());
  return (o as any) === (null as any) ? null : ((e as any).value as any)(o);
}
function De(this: any, n: any): any {
  (De as any).d = 1057;
  const e: any = ((Ae as any).c as any)(3),
    {
      id: o,
      problem: d
    }: any = n;
  if ((d as any) === (null as any)) return null;
  let r: any;
  return ((e as any)[0] as any) !== (o as any) || ((e as any)[1] as any) !== (d as any) ? (r = ((t as any).jsx as any)("p", {
    id: o,
    role: "alert",
    ...Ve,
    children: d
  }), (e as any)[0] = o, (e as any)[1] = d, (e as any)[2] = r) : r = (e as any)[2], r;
}
function tt(this: any, n: any): any {
  (tt as any).d = 1058;
  const e: any = ((Ae as any).c as any)(122),
    {
      open: o,
      onOpenChange: d,
      takenNames: r,
      isDisabled: a,
      onAdd: we
    }: any = n,
    {
      _: l
    }: any = (Ue as any)(),
    y: any = (Je as any)(),
    J: any = ((f as any).useId as any)(),
    $: any = ((f as any).useId as any)(),
    [j, Pe]: any = ((f as any).useState as any)(""),
    [x, Ge]: any = ((f as any).useState as any)(""),
    [i, Ie]: any = ((f as any).useState as any)(""),
    [Fe, ve]: any = ((f as any).useState as any)(!1),
    [Ke, ge]: any = ((f as any).useState as any)(!1),
    [Ne, Te]: any = ((f as any).useState as any)(!1),
    [H, Re]: any = ((f as any).useState as any)(!1);
  let M: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (M = (): any => {
    (Pe as any)(""), (Ge as any)(""), (Ie as any)(""), (ve as any)(!1), (ge as any)(!1), (Te as any)(!1);
  }, (e as any)[0] = M) : M = (e as any)[0];
  const Le: any = M;
  let W: any;
  ((e as any)[1] as any) !== (d as any) ? (W = (s: any): any => {
    s || (Le as any)(), (d as any)(s);
  }, (e as any)[1] = d, (e as any)[2] = W) : W = (e as any)[2];
  const c: any = W;
  let b: any, m: any, X: any, h: any;
  if (((e as any)[3] as any) !== (l as any) || ((e as any)[4] as any) !== (a as any) || ((e as any)[5] as any) !== (H as any) || ((e as any)[6] as any) !== (j as any) || ((e as any)[7] as any) !== (y as any) || ((e as any)[8] as any) !== (r as any) || ((e as any)[9] as any) !== (i as any)) {
    m = ((((j as any).trim as any)() as any).toUpperCase as any)();
    let s: any;
    ((e as any)[14] as any) !== (i as any) ? (s = ((i as any).trim as any)(), (e as any)[14] = i, (e as any)[15] = s) : s = (e as any)[15], h = s, b = !a && !H && ((m as any).length as any) > (0 as any) && ((h as any).length as any) > (0 as any), X = (Qe as any)(m, r, y, (l as any)({
      id: "YNjRIY",
      values: {
        name: m
      }
    })), (e as any)[3] = l, (e as any)[4] = a, (e as any)[5] = H, (e as any)[6] = j, (e as any)[7] = y, (e as any)[8] = r, (e as any)[9] = i, (e as any)[10] = b, (e as any)[11] = m, (e as any)[12] = X, (e as any)[13] = h;
  } else b = (e as any)[10], m = (e as any)[11], X = (e as any)[12], h = (e as any)[13];
  const Y: any = X;
  let Z: any;
  ((e as any)[16] as any) !== (y as any) || ((e as any)[17] as any) !== (i as any) ? (Z = (et as any)(i, y), (e as any)[16] = y, (e as any)[17] = i, (e as any)[18] = Z) : Z = (e as any)[18];
  const Q: any = Z,
    K: any = Fe && !H ? Y : null,
    L: any = Ke || ((i as any).length as any) > (0 as any) && ((h as any).length as any) === (0 as any) ? Q : null;
  let ee: any;
  ((e as any)[19] as any) !== (b as any) || ((e as any)[20] as any) !== (x as any) || ((e as any)[21] as any) !== (c as any) || ((e as any)[22] as any) !== (m as any) || ((e as any)[23] as any) !== (Y as any) || ((e as any)[24] as any) !== (we as any) || ((e as any)[25] as any) !== (h as any) || ((e as any)[26] as any) !== (Q as any) ? (ee = async (): Promise<any> => {
    if (!b || ((Te as any)(!1), (ve as any)(!0), (ge as any)(!0), (Y as any) !== (null as any) || (Q as any) !== (null as any))) return;
    const s: any = (we as any)({
      name: m,
      description: ((x as any).trim as any)(),
      value: h
    });
    let ze: any = s;
    if ((typeof s as any) != ("boolean" as any) && ((Re as any)(!0), ze = await s, (Re as any)(!1)), !ze) {
      (Te as any)(!0);
      return;
    }
    (c as any)(!1);
  }, (e as any)[19] = b, (e as any)[20] = x, (e as any)[21] = c, (e as any)[22] = m, (e as any)[23] = Y, (e as any)[24] = we, (e as any)[25] = h, (e as any)[26] = Q, (e as any)[27] = ee) : ee = (e as any)[27];
  const S: any = ee;
  let te: any;
  ((e as any)[28] as any) !== (S as any) ? (te = (s: any): any => {
    ((s as any).key as any) === ("Enter" as any) && (((s as any).preventDefault as any)(), (S as any)());
  }, (e as any)[28] = S, (e as any)[29] = te) : te = (e as any)[29];
  const u: any = te;
  let _: any;
  ((e as any)[30] as any) !== (c as any) ? (_ = (): any => (c as any)(!1), (e as any)[30] = c, (e as any)[31] = _) : _ = (e as any)[31];
  let se: any;
  ((e as any)[32] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (se = ((t as any).jsx as any)(Xe, {
    description: ((t as any).jsx as any)(p, {
      id: "F/3xsR"
    }),
    title: ((t as any).jsx as any)(p, {
      id: "E0czcG"
    })
  }), (e as any)[32] = se) : se = (e as any)[32];
  let le: any, ae: any, ne: any;
  ((e as any)[33] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ne = {
    className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
  }, le = {
    className: "sand-78zum5 sand-dt5ytf sand-17d4w8g"
  }, ae = ((t as any).jsx as any)("span", {
    className: "sand-11wthnw sand-d4r4e8 sand-tyxrsu",
    children: ((t as any).jsx as any)(p, {
      id: "vPWtZ+"
    })
  }), (e as any)[33] = le, (e as any)[34] = ae, (e as any)[35] = ne) : (le = (e as any)[33], ae = (e as any)[34], ne = (e as any)[35]);
  const Ce: any = (K as any) === (null as any) ? void 0 : J,
    ke: any = (K as any) !== (null as any);
  let w: any;
  ((e as any)[36] as any) !== (l as any) ? (w = (l as any)({
    id: "ysrOqg"
  }), (e as any)[36] = l, (e as any)[37] = w) : w = (e as any)[37];
  let oe: any, ie: any;
  ((e as any)[38] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (oe = (s: any): any => {
    (Oe as any)(s) || (ve as any)(!0);
  }, ie = (s: any): any => (Pe as any)(((s as any).currentTarget as any).value), (e as any)[38] = oe, (e as any)[39] = ie) : (oe = (e as any)[38], ie = (e as any)[39]);
  let v: any;
  ((e as any)[40] as any) !== (l as any) ? (v = (l as any)({
    id: "i0OHcl"
  }), (e as any)[40] = l, (e as any)[41] = v) : v = (e as any)[41];
  let re: any;
  ((e as any)[42] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (re = {
    className: "sand-9f619 sand-h8yej3 sand-10w6t97 sand-t970qd sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-1tiofj7 sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1h7ufjq"
  }, (e as any)[42] = re) : re = (e as any)[42];
  let g: any;
  ((e as any)[43] as any) !== (a as any) || ((e as any)[44] as any) !== (j as any) || ((e as any)[45] as any) !== (u as any) || ((e as any)[46] as any) !== (Ce as any) || ((e as any)[47] as any) !== (ke as any) || ((e as any)[48] as any) !== (w as any) || ((e as any)[49] as any) !== (v as any) ? (g = ((t as any).jsx as any)("input", {
    "aria-describedby": Ce,
    "aria-invalid": ke,
    "aria-label": w,
    autoCapitalize: "characters",
    autoComplete: "off",
    autoFocus: !0,
    disabled: a,
    maxLength: $e,
    onBlur: oe,
    onChange: ie,
    onKeyDown: u,
    placeholder: v,
    spellCheck: !1,
    value: j,
    ...re
  }), (e as any)[43] = a, (e as any)[44] = j, (e as any)[45] = u, (e as any)[46] = Ce, (e as any)[47] = ke, (e as any)[48] = w, (e as any)[49] = v, (e as any)[50] = g) : g = (e as any)[50];
  let N: any;
  ((e as any)[51] as any) !== (J as any) || ((e as any)[52] as any) !== (K as any) ? (N = ((t as any).jsx as any)(De, {
    id: J,
    problem: K
  }), (e as any)[51] = J, (e as any)[52] = K, (e as any)[53] = N) : N = (e as any)[53];
  let T: any;
  ((e as any)[54] as any) !== (g as any) || ((e as any)[55] as any) !== (N as any) ? (T = ((t as any).jsxs as any)("label", {
    ...le,
    children: [ae, g, N]
  }), (e as any)[54] = g, (e as any)[55] = N, (e as any)[56] = T) : T = (e as any)[56];
  let de: any, ce: any;
  ((e as any)[57] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (de = {
    className: "sand-78zum5 sand-dt5ytf sand-17d4w8g"
  }, ce = ((t as any).jsx as any)("span", {
    className: "sand-11wthnw sand-d4r4e8 sand-tyxrsu",
    children: ((t as any).jsx as any)(p, {
      id: "JGRUw+"
    })
  }), (e as any)[57] = de, (e as any)[58] = ce) : (de = (e as any)[57], ce = (e as any)[58]);
  let C: any;
  ((e as any)[59] as any) !== (l as any) ? (C = (l as any)({
    id: "JGRUw+"
  }), (e as any)[59] = l, (e as any)[60] = C) : C = (e as any)[60];
  let me: any;
  ((e as any)[61] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (me = (s: any): any => (Ge as any)(((s as any).currentTarget as any).value), (e as any)[61] = me) : me = (e as any)[61];
  let k: any;
  ((e as any)[62] as any) !== (l as any) ? (k = (l as any)({
    id: "JGRUw+"
  }), (e as any)[62] = l, (e as any)[63] = k) : k = (e as any)[63];
  let ue: any;
  ((e as any)[64] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ue = {
    className: "sand-9f619 sand-h8yej3 sand-10w6t97 sand-t970qd sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-1tiofj7 sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1h7ufjq"
  }, (e as any)[64] = ue) : ue = (e as any)[64];
  let q: any;
  ((e as any)[65] as any) !== (x as any) || ((e as any)[66] as any) !== (a as any) || ((e as any)[67] as any) !== (u as any) || ((e as any)[68] as any) !== (C as any) || ((e as any)[69] as any) !== (k as any) ? (q = ((t as any).jsxs as any)("label", {
    ...de,
    children: [ce, ((t as any).jsx as any)("input", {
      "aria-label": C,
      autoComplete: "off",
      disabled: a,
      maxLength: He,
      onChange: me,
      onKeyDown: u,
      placeholder: k,
      value: x,
      ...ue
    })]
  }), (e as any)[65] = x, (e as any)[66] = a, (e as any)[67] = u, (e as any)[68] = C, (e as any)[69] = k, (e as any)[70] = q) : q = (e as any)[70];
  let fe: any, he: any;
  ((e as any)[71] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (fe = {
    className: "sand-78zum5 sand-dt5ytf sand-17d4w8g"
  }, he = ((t as any).jsx as any)("span", {
    className: "sand-11wthnw sand-d4r4e8 sand-tyxrsu",
    children: ((t as any).jsx as any)(p, {
      id: "dDvWpB"
    })
  }), (e as any)[71] = fe, (e as any)[72] = he) : (fe = (e as any)[71], he = (e as any)[72]);
  const qe: any = (L as any) === (null as any) ? void 0 : $,
    Ee: any = (L as any) !== (null as any);
  let E: any;
  ((e as any)[73] as any) !== (l as any) ? (E = (l as any)({
    id: "dDvWpB"
  }), (e as any)[73] = l, (e as any)[74] = E) : E = (e as any)[74];
  let pe: any, be: any;
  ((e as any)[75] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (pe = (s: any): any => {
    (Oe as any)(s) || (ge as any)(!0);
  }, be = (s: any): any => (Ie as any)(((s as any).currentTarget as any).value), (e as any)[75] = pe, (e as any)[76] = be) : (pe = (e as any)[75], be = (e as any)[76]);
  let B: any;
  ((e as any)[77] as any) !== (l as any) ? (B = (l as any)({
    id: "3r2aS+"
  }), (e as any)[77] = l, (e as any)[78] = B) : B = (e as any)[78];
  let ye: any;
  ((e as any)[79] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ye = {
    className: "sand-9f619 sand-h8yej3 sand-10w6t97 sand-t970qd sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-1tiofj7 sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1h7ufjq"
  }, (e as any)[79] = ye) : ye = (e as any)[79];
  let D: any;
  ((e as any)[80] as any) !== (a as any) || ((e as any)[81] as any) !== (u as any) || ((e as any)[82] as any) !== (qe as any) || ((e as any)[83] as any) !== (Ee as any) || ((e as any)[84] as any) !== (E as any) || ((e as any)[85] as any) !== (B as any) || ((e as any)[86] as any) !== (i as any) ? (D = ((t as any).jsx as any)("input", {
    "aria-describedby": qe,
    "aria-invalid": Ee,
    "aria-label": E,
    autoComplete: "off",
    disabled: a,
    onBlur: pe,
    onChange: be,
    onKeyDown: u,
    placeholder: B,
    spellCheck: !1,
    type: "password",
    value: i,
    ...ye
  }), (e as any)[80] = a, (e as any)[81] = u, (e as any)[82] = qe, (e as any)[83] = Ee, (e as any)[84] = E, (e as any)[85] = B, (e as any)[86] = i, (e as any)[87] = D) : D = (e as any)[87];
  let P: any;
  ((e as any)[88] as any) !== (L as any) || ((e as any)[89] as any) !== ($ as any) ? (P = ((t as any).jsx as any)(De, {
    id: $,
    problem: L
  }), (e as any)[88] = L, (e as any)[89] = $, (e as any)[90] = P) : P = (e as any)[90];
  let G: any;
  ((e as any)[91] as any) !== (D as any) || ((e as any)[92] as any) !== (P as any) ? (G = ((t as any).jsxs as any)("label", {
    ...fe,
    children: [he, D, P]
  }), (e as any)[91] = D, (e as any)[92] = P, (e as any)[93] = G) : G = (e as any)[93];
  let I: any;
  ((e as any)[94] as any) !== (Ne as any) ? (I = Ne ? ((t as any).jsx as any)("p", {
    role: "alert",
    ...Ve,
    children: ((t as any).jsx as any)(p, {
      id: "JUpeyb"
    })
  }) : null, (e as any)[94] = Ne, (e as any)[95] = I) : I = (e as any)[95];
  let R: any;
  ((e as any)[96] as any) !== (T as any) || ((e as any)[97] as any) !== (q as any) || ((e as any)[98] as any) !== (G as any) || ((e as any)[99] as any) !== (I as any) ? (R = ((t as any).jsx as any)((U as any).Body, {
    style: (Ze as any).body,
    children: ((t as any).jsxs as any)("div", {
      ...ne,
      children: [T, q, G, I]
    })
  }), (e as any)[96] = T, (e as any)[97] = q, (e as any)[98] = G, (e as any)[99] = I, (e as any)[100] = R) : R = (e as any)[100];
  let z: any;
  ((e as any)[101] as any) !== (c as any) ? (z = (): any => (c as any)(!1), (e as any)[101] = c, (e as any)[102] = z) : z = (e as any)[102];
  let je: any;
  ((e as any)[103] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (je = ((t as any).jsx as any)(p, {
    id: "dEgA5A"
  }), (e as any)[103] = je) : je = (e as any)[103];
  let O: any;
  ((e as any)[104] as any) !== (a as any) || ((e as any)[105] as any) !== (z as any) ? (O = ((t as any).jsx as any)((U as any).Action, {
    disabled: a,
    onClick: z,
    variant: "secondary",
    children: je
  }), (e as any)[104] = a, (e as any)[105] = z, (e as any)[106] = O) : O = (e as any)[106];
  let xe: any;
  ((e as any)[107] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (xe = ((t as any).jsx as any)((U as any).ActionSpacer, {}), (e as any)[107] = xe) : xe = (e as any)[107];
  const Be: any = !b;
  let A: any;
  ((e as any)[108] as any) !== (S as any) ? (A = (): any => {
    (S as any)();
  }, (e as any)[108] = S, (e as any)[109] = A) : A = (e as any)[109];
  let Se: any;
  ((e as any)[110] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Se = ((t as any).jsx as any)(p, {
    id: "zNpxuN"
  }), (e as any)[110] = Se) : Se = (e as any)[110];
  let V: any;
  ((e as any)[111] as any) !== (Be as any) || ((e as any)[112] as any) !== (A as any) ? (V = ((t as any).jsx as any)((U as any).Action, {
    disabled: Be,
    onClick: A,
    variant: "primary",
    children: Se
  }), (e as any)[111] = Be, (e as any)[112] = A, (e as any)[113] = V) : V = (e as any)[113];
  let F: any;
  ((e as any)[114] as any) !== (O as any) || ((e as any)[115] as any) !== (V as any) ? (F = ((t as any).jsxs as any)((U as any).ActionBar, {
    children: [O, xe, V]
  }), (e as any)[114] = O, (e as any)[115] = V, (e as any)[116] = F) : F = (e as any)[116];
  let _e: any;
  return ((e as any)[117] as any) !== (o as any) || ((e as any)[118] as any) !== (R as any) || ((e as any)[119] as any) !== (F as any) || ((e as any)[120] as any) !== (_ as any) ? (_e = ((t as any).jsxs as any)(Ye, {
    height: "hug",
    onClose: _,
    open: o,
    children: [se, R, F]
  }), (e as any)[117] = o, (e as any)[118] = R, (e as any)[119] = F, (e as any)[120] = _, (e as any)[121] = _e) : _e = (e as any)[121], _e;
}
export { tt as T };
//# debugId=9ff9de8e-b8d8-4dab-8a49-8bf4bc38e0f7
