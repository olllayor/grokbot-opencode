declare var document: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "cd0964d1-11ac-4a40-a773-e357dbfe8d5e", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-cd0964d1-11ac-4a40-a773-e357dbfe8d5e");
  } catch (e: any) {}
} as any)();
import { c as he, j as i, u as Ae, r as pe, T as M, i as je, p as gt } from "./index.eager-vendor-Qbf9YA6n.js";
import { bW as pt, x as C, bX as ht, E as xt, H as yt, z as Be, bY as bt, ba as kt, W as jt, bZ as vt } from "./index-ZYxf-aBb.js";
import { f$ as st, g0 as St, b7 as Ye, aU as _t, g1 as Bt, g2 as Tt, r as $e, g3 as Pt, g4 as Rt, g5 as Ct, g6 as At, g7 as Ut, a_ as Te, g8 as Nt, bA as wt, fd as Et, D as nt, g9 as Dt, bl as zt, ga as Lt, gb as Ot, gc as It, cq as Wt, gd as Ht, dc as Zt, dl as qt, dn as Mt } from "./index.eager-app-Cj5f8Gby.js";
import { aY as de, u as $t } from "./index.eager-platform-Dcfeegfw.js";
import { S as Gt } from "./chunk-scroll-pane-CoxKzaOs.js";
import { c as Vt } from "./index.eager-common-CdCvBQNJ.js";
import { s as Ft, a as Oe, G as Ve, S as Le, b as Jt } from "./chunk-settings-row-I8ggwIzt.js";
function Xt(this: any, {
  canUpdateBaseline: t,
  canUpdateBox: e,
  isBoxUpToDate: s
}: any): any {
  return t ? s ? "up-to-date" : e ? "ready" : "busy" : "unavailable";
}
const Ke: any = {
  id: "oca6v8"
};
async function it(this: any, t: any): Promise<any> {
  return await ((t as any).then as any)((): any => !0, (): any => !1);
}
function Yt(this: any, t: any): any {
  switch ((t as any).status) {
    case "loading":
      return ((t as any).previous as any) != (null as any) ? {
        description: {
          id: "iI4mRA",
          values: {
            0: (t as any).timeZone
          }
        },
        canSchedule: !0
      } : {
        description: {
          id: "XAWK/3"
        },
        canSchedule: !1
      };
    case "ready":
      return {
        description: {
          id: "iI4mRA",
          values: {
            0: (t as any).timeZone
          }
        },
        canSchedule: !0
      };
    case "empty":
      return {
        description: {
          id: "N1CX2f"
        },
        canSchedule: !1
      };
    case "unavailable":
      return {
        description: {
          id: "xtykbP"
        },
        canSchedule: !1
      };
    case "failed":
      return ((t as any).previous as any) != (null as any) ? {
        description: {
          id: "hNAE/B",
          values: {
            0: (t as any).timeZone
          }
        },
        canSchedule: !0
      } : {
        description: {
          id: "zmO5cN"
        },
        canSchedule: !1
      };
  }
}
const ke: any = {
  message: {
    keoZOQ: "sand-dj266r",
    k71WvV: "sand-14z9mp",
    k1K539: "sand-at24cr",
    keTefX: "sand-1lziwak",
    $$css: !0
  }
};
function lt(this: any, t: any): any {
  (lt as any).d = 860;
  const e: any = ((he as any).c as any)(17),
    {
      onClose: s,
      onSchedule: a,
      onUpdateNow: o,
      updateNowEnabled: l
    }: any = t,
    m: any = ((pe as any).useRef as any)(null);
  let c: any;
  ((e as any)[0] as any) !== (s as any) ? (c = (N: any): any => {
    N || (s as any)();
  }, (e as any)[0] = s, (e as any)[1] = c) : c = (e as any)[1];
  let p: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = ((i as any).jsx as any)((C as any).Title, {
    children: ((i as any).jsx as any)(M, {
      id: "5EQ+DK"
    })
  }), (e as any)[2] = p) : p = (e as any)[2];
  let g: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = ((i as any).jsxs as any)((C as any).Header, {
    children: [p, ((i as any).jsx as any)((C as any).Description, {
      children: ((i as any).jsx as any)(M, {
        id: "rH1I8B"
      })
    })]
  }), (e as any)[3] = g) : g = (e as any)[3];
  let x: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = ((i as any).jsx as any)(M, {
    id: "HW+8vB"
  }), (e as any)[4] = x) : x = (e as any)[4];
  let b: any;
  ((e as any)[5] as any) !== (a as any) ? (b = ((i as any).jsx as any)((C as any).Action, {
    onClick: a,
    children: x
  }), (e as any)[5] = a, (e as any)[6] = b) : b = (e as any)[6];
  const _: any = !l;
  let T: any;
  ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (T = ((i as any).jsx as any)(M, {
    id: "Q15keH"
  }), (e as any)[7] = T) : T = (e as any)[7];
  let S: any;
  ((e as any)[8] as any) !== (o as any) || ((e as any)[9] as any) !== (_ as any) ? (S = ((i as any).jsx as any)((C as any).Action, {
    disabled: _,
    onClick: o,
    ref: m,
    variant: "primary",
    children: T
  }), (e as any)[8] = o, (e as any)[9] = _, (e as any)[10] = S) : S = (e as any)[10];
  let f: any;
  ((e as any)[11] as any) !== (b as any) || ((e as any)[12] as any) !== (S as any) ? (f = ((i as any).jsxs as any)((C as any).ActionBar, {
    children: [b, S]
  }), (e as any)[11] = b, (e as any)[12] = S, (e as any)[13] = f) : f = (e as any)[13];
  let d: any;
  return ((e as any)[14] as any) !== (c as any) || ((e as any)[15] as any) !== (f as any) ? (d = ((i as any).jsxs as any)((C as any).Root, {
    className: "sand-computer-upgrade-choice-dialog",
    initialFocus: m,
    onOpenChange: c,
    open: !0,
    width: 440,
    children: [g, f]
  }), (e as any)[14] = c, (e as any)[15] = f, (e as any)[16] = d) : d = (e as any)[16], d;
}
function Fe(this: any, t: any): any {
  (Fe as any).d = 862;
  const e: any = ((he as any).c as any)(96),
    {
      initial: s,
      isReschedule: a,
      onClose: o,
      recurringLocked: l
    }: any = t,
    m: any = (l as any) === (void 0 as any) ? !1 : l,
    {
      i18n: c,
      _: p
    }: any = (Ae as any)(),
    g: any = (Ye as any)();
  (_t as any)(((g as any).timeZone as any).load);
  const x: any = (Bt as any)(),
    b: any = (Tt as any)(),
    _: any = (x as any).timeZone,
    T: any = (Yt as any)(x),
    S: any = ((x as any).status as any) === ("empty" as any) || ((x as any).status as any) === ("unavailable" as any) || ((x as any).status as any) === ("failed" as any),
    f: any = (st as any)(),
    [d, N]: any = ((pe as any).useState as any)((s as any).localTime),
    [P, R]: any = ((pe as any).useState as any)((s as any).recurring),
    h: any = ((pe as any).useRef as any)(null),
    j: any = {
      className: "sand-9f619 sand-h8yej3 sand-90ne7k sand-exx8yu sand-2vl965 sand-18d9i69 sand-e2zdcy sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1t6ttyj sand-vvtkfd sand-tyxrsu sand-ln7xf2 sand-4sht9k"
    },
    B: any = (): any => {
      if (!(T as any).canSchedule || (f as any).isPending || ((d as any).length as any) === (0 as any)) return;
      const ie: any = {
          localTime: d,
          timeZone: _,
          recurring: P
        },
        Ue: any = a ? ((f as any).reschedule as any)(ie) : ((f as any).schedule as any)(ie);
      (((it as any)(Ue) as any).then as any)((Ce: any): any => {
        Ce && (o as any)();
      });
    },
    L: any = C,
    te: string = "sand-computer-upgrade-schedule-dialog",
    w: any = !(f as any).isPending,
    F: any = !(f as any).isPending,
    J: any = !(f as any).isPending;
  let E: any;
  ((e as any)[0] as any) !== ((f as any).isPending as any) || ((e as any)[1] as any) !== (o as any) ? (E = (ie: any): any => {
    !ie && !(f as any).isPending && (o as any)();
  }, (e as any)[0] = (f as any).isPending, (e as any)[1] = o, (e as any)[2] = E) : E = (e as any)[2];
  const O: any = !0,
    k: number = 440;
  let A: any;
  ((e as any)[3] as any) !== (p as any) || ((e as any)[4] as any) !== (a as any) ? (A = (p as any)(a ? {
    id: "qMuJlf"
  } : {
    id: "FGceLl"
  }), (e as any)[3] = p, (e as any)[4] = a, (e as any)[5] = A) : A = (e as any)[5];
  let U: any;
  ((e as any)[6] as any) !== (A as any) ? (U = ((i as any).jsx as any)((C as any).Title, {
    children: A
  }), (e as any)[6] = A, (e as any)[7] = U) : U = (e as any)[7];
  const D: any = ((c as any)._ as any)((T as any).description);
  let I: any;
  ((e as any)[8] as any) !== (D as any) ? (I = ((i as any).jsx as any)((C as any).Description, {
    children: D
  }), (e as any)[8] = D, (e as any)[9] = I) : I = (e as any)[9];
  let n: any;
  ((e as any)[10] as any) !== (U as any) || ((e as any)[11] as any) !== (I as any) ? (n = ((i as any).jsxs as any)((C as any).Header, {
    children: [U, I]
  }), (e as any)[10] = U, (e as any)[11] = I, (e as any)[12] = n) : n = (e as any)[12];
  let r: any;
  ((e as any)[13] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = {
    className: "sand-jp7ctv"
  }, (e as any)[13] = r) : r = (e as any)[13];
  let $: any;
  ((e as any)[14] as any) !== (B as any) ? ($ = (ie: any): any => {
    ((ie as any).preventDefault as any)(), (B as any)();
  }, (e as any)[14] = B, (e as any)[15] = $) : $ = (e as any)[15];
  const se: any = C;
  let W: any, X: any, Y: any;
  ((e as any)[16] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (W = {
    className: "sand-78zum5 sand-dt5ytf sand-1af02g3"
  }, X = {
    className: "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-1o0liin sand-11wthnw"
  }, Y = ((i as any).jsx as any)("span", {
    children: ((i as any).jsx as any)(M, {
      id: "yIaZUV"
    })
  }), (e as any)[16] = W, (e as any)[17] = X, (e as any)[18] = Y) : (W = (e as any)[16], X = (e as any)[17], Y = (e as any)[18]);
  const fe: any = ($e as any)("sand-computer-upgrade-schedule-dialog__time", (j as any).className);
  let G: any;
  ((e as any)[19] as any) !== (N as any) ? (G = (ie: any): any => (N as any)(((ie as any).currentTarget as any).value), (e as any)[19] = N, (e as any)[20] = G) : G = (e as any)[20];
  let K: any;
  ((e as any)[21] as any) !== ((f as any).isPending as any) || ((e as any)[22] as any) !== (d as any) || ((e as any)[23] as any) !== (fe as any) || ((e as any)[24] as any) !== (G as any) || ((e as any)[25] as any) !== ((j as any).style as any) ? (K = ((i as any).jsx as any)("input", {
    className: fe,
    disabled: (f as any).isPending,
    onChange: G,
    ref: h,
    required: !0,
    style: (j as any).style,
    type: "time",
    value: d
  }), (e as any)[21] = (f as any).isPending, (e as any)[22] = d, (e as any)[23] = fe, (e as any)[24] = G, (e as any)[25] = (j as any).style, (e as any)[26] = K) : K = (e as any)[26];
  let H: any;
  ((e as any)[27] as any) !== (X as any) || ((e as any)[28] as any) !== (Y as any) || ((e as any)[29] as any) !== (K as any) ? (H = ((i as any).jsxs as any)("label", {
    ...X,
    children: [Y, K]
  }), (e as any)[27] = X, (e as any)[28] = Y, (e as any)[29] = K, (e as any)[30] = H) : H = (e as any)[30];
  let oe: any;
  ((e as any)[31] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (oe = {
    className: "sand-78zum5 sand-6s0dn4 sand-mmi0ta sand-1o0liin sand-11wthnw sand-1ypdohk"
  }, (e as any)[31] = oe) : oe = (e as any)[31];
  let y: any;
  ((e as any)[32] as any) !== (c as any) ? (y = ((c as any)._ as any)(Ke), (e as any)[32] = c, (e as any)[33] = y) : y = (e as any)[33];
  const ne: any = (f as any).isPending || m;
  let le: any;
  ((e as any)[34] as any) !== (P as any) || ((e as any)[35] as any) !== (R as any) || ((e as any)[36] as any) !== (y as any) || ((e as any)[37] as any) !== (ne as any) ? (le = ((i as any).jsx as any)(ht, {
    "aria-label": y,
    checked: P,
    disabled: ne,
    onCheckedChange: R,
    variant: "neutral"
  }), (e as any)[34] = P, (e as any)[35] = R, (e as any)[36] = y, (e as any)[37] = ne, (e as any)[38] = le) : le = (e as any)[38];
  let z: any;
  ((e as any)[39] as any) !== (c as any) ? (z = ((c as any)._ as any)(Ke), (e as any)[39] = c, (e as any)[40] = z) : z = (e as any)[40];
  let Q: any;
  ((e as any)[41] as any) !== (z as any) ? (Q = ((i as any).jsx as any)("span", {
    children: z
  }), (e as any)[41] = z, (e as any)[42] = Q) : Q = (e as any)[42];
  let V: any;
  ((e as any)[43] as any) !== (le as any) || ((e as any)[44] as any) !== (Q as any) ? (V = ((i as any).jsxs as any)("label", {
    ...oe,
    children: [le, Q]
  }), (e as any)[43] = le, (e as any)[44] = Q, (e as any)[45] = V) : V = (e as any)[45];
  let Z: any;
  ((e as any)[46] as any) !== (m as any) ? (Z = m ? ((i as any).jsx as any)(de, {
    as: "p",
    color: "secondary",
    rootStyle: (ke as any).message,
    size: "sm",
    children: ((i as any).jsx as any)(M, {
      id: "LgiFYi"
    })
  }) : null, (e as any)[46] = m, (e as any)[47] = Z) : Z = (e as any)[47];
  let ee: any;
  ((e as any)[48] as any) !== (p as any) || ((e as any)[49] as any) !== ((f as any).failure as any) || ((e as any)[50] as any) !== (a as any) ? (ee = ((f as any).failure as any) == (null as any) ? null : ((i as any).jsx as any)(de, {
    as: "p",
    color: "red",
    role: "alert",
    rootStyle: (ke as any).message,
    size: "sm",
    children: (p as any)(a ? {
      id: "7K9h7G"
    } : {
      id: "c3LQC5"
    })
  }), (e as any)[48] = p, (e as any)[49] = (f as any).failure, (e as any)[50] = a, (e as any)[51] = ee) : ee = (e as any)[51];
  let me: any;
  ((e as any)[52] as any) !== (W as any) || ((e as any)[53] as any) !== (H as any) || ((e as any)[54] as any) !== (V as any) || ((e as any)[55] as any) !== (Z as any) || ((e as any)[56] as any) !== (ee as any) ? (me = ((i as any).jsxs as any)("div", {
    ...W,
    children: [H, V, Z, ee]
  }), (e as any)[52] = W, (e as any)[53] = H, (e as any)[54] = V, (e as any)[55] = Z, (e as any)[56] = ee, (e as any)[57] = me) : me = (e as any)[57];
  let xe: any;
  ((e as any)[58] as any) !== ((se as any).Body as any) || ((e as any)[59] as any) !== (me as any) ? (xe = ((i as any).jsx as any)((se as any).Body, {
    children: me
  }), (e as any)[58] = (se as any).Body, (e as any)[59] = me, (e as any)[60] = xe) : xe = (e as any)[60];
  let ve: any;
  ((e as any)[61] as any) !== (p as any) || ((e as any)[62] as any) !== (m as any) ? (ve = (p as any)(m ? {
    id: "yz7wBu"
  } : {
    id: "dEgA5A"
  }), (e as any)[61] = p, (e as any)[62] = m, (e as any)[63] = ve) : ve = (e as any)[63];
  let ae: any;
  ((e as any)[64] as any) !== ((f as any).isPending as any) || ((e as any)[65] as any) !== (o as any) || ((e as any)[66] as any) !== (ve as any) ? (ae = ((i as any).jsx as any)((C as any).Action, {
    disabled: (f as any).isPending,
    onClick: o,
    type: "button",
    children: ve
  }), (e as any)[64] = (f as any).isPending, (e as any)[65] = o, (e as any)[66] = ve, (e as any)[67] = ae) : ae = (e as any)[67];
  let ge: any;
  ((e as any)[68] as any) !== (S as any) || ((e as any)[69] as any) !== ((f as any).isPending as any) || ((e as any)[70] as any) !== (b as any) ? (ge = S ? ((i as any).jsx as any)((C as any).Action, {
    disabled: (f as any).isPending,
    onClick: b,
    type: "button",
    children: ((i as any).jsx as any)(M, {
      id: "6gRgw8"
    })
  }) : null, (e as any)[68] = S, (e as any)[69] = (f as any).isPending, (e as any)[70] = b, (e as any)[71] = ge) : ge = (e as any)[71];
  const Se: any = !(T as any).canSchedule || ((d as any).length as any) === (0 as any);
  let ce: any;
  ((e as any)[72] as any) !== (p as any) || ((e as any)[73] as any) !== (a as any) ? (ce = (p as any)(a ? {
    id: "FzTsgz"
  } : {
    id: "HW+8vB"
  }), (e as any)[72] = p, (e as any)[73] = a, (e as any)[74] = ce) : ce = (e as any)[74];
  let re: any;
  ((e as any)[75] as any) !== ((f as any).isPending as any) || ((e as any)[76] as any) !== (Se as any) || ((e as any)[77] as any) !== (ce as any) ? (re = ((i as any).jsx as any)((C as any).Action, {
    disabled: Se,
    pending: (f as any).isPending,
    type: "submit",
    variant: "primary",
    children: ce
  }), (e as any)[75] = (f as any).isPending, (e as any)[76] = Se, (e as any)[77] = ce, (e as any)[78] = re) : re = (e as any)[78];
  let Pe: any;
  ((e as any)[79] as any) !== (ae as any) || ((e as any)[80] as any) !== (ge as any) || ((e as any)[81] as any) !== (re as any) ? (Pe = ((i as any).jsxs as any)((C as any).ActionBar, {
    children: [ae, ge, re]
  }), (e as any)[79] = ae, (e as any)[80] = ge, (e as any)[81] = re, (e as any)[82] = Pe) : Pe = (e as any)[82];
  let ue: any;
  ((e as any)[83] as any) !== (r as any) || ((e as any)[84] as any) !== ($ as any) || ((e as any)[85] as any) !== (xe as any) || ((e as any)[86] as any) !== (Pe as any) ? (ue = ((i as any).jsxs as any)("form", {
    ...r,
    onSubmit: $,
    children: [xe, Pe]
  }), (e as any)[83] = r, (e as any)[84] = $, (e as any)[85] = xe, (e as any)[86] = Pe, (e as any)[87] = ue) : ue = (e as any)[87];
  let Re: any;
  return ((e as any)[88] as any) !== (n as any) || ((e as any)[89] as any) !== ((L as any).Root as any) || ((e as any)[90] as any) !== (w as any) || ((e as any)[91] as any) !== (ue as any) || ((e as any)[92] as any) !== (F as any) || ((e as any)[93] as any) !== (J as any) || ((e as any)[94] as any) !== (E as any) ? (Re = ((i as any).jsxs as any)((L as any).Root, {
    className: te,
    closeOnBackdropClick: w,
    closeOnEscape: F,
    closeOnOutsidePress: J,
    initialFocus: h,
    onOpenChange: E,
    open: O,
    width: k,
    children: [n, ue]
  }), (e as any)[88] = n, (e as any)[89] = (L as any).Root, (e as any)[90] = w, (e as any)[91] = ue, (e as any)[92] = F, (e as any)[93] = J, (e as any)[94] = E, (e as any)[95] = Re) : Re = (e as any)[95], Re;
}
function Je(this: any, t: any): any {
  (Je as any).d = 863;
  const e: any = ((he as any).c as any)(104),
    {
      schedule: s,
      onClose: a,
      onReschedule: o
    }: any = t,
    {
      _: l
    }: any = (Ae as any)(),
    m: any = (st as any)(),
    c: any = (pt as any)(),
    p: any = (s?.state as any) === ("claimed" as any) || (s?.state as any) === ("running" as any),
    g: any = (s?.state as any) === ("failed" as any) || (s?.state as any) === ("missed" as any),
    x: any = (s as any) != (null as any) && (St as any)(s, c),
    b: any = (s as any) != (null as any) && !p,
    _: any = (s?.state as any) === ("scheduled" as any) || (s?.state as any) === ("waiting-for-image" as any),
    T: any = ((pe as any).useRef as any)(null);
  let S: any;
  ((e as any)[0] as any) !== (a as any) ? (S = (n: any): any => {
    (((it as any)(n) as any).then as any)((r: any): any => {
      r && (a as any)();
    });
  }, (e as any)[0] = a, (e as any)[1] = S) : S = (e as any)[1];
  const f: any = S;
  let d: any;
  ((e as any)[2] as any) !== (f as any) || ((e as any)[3] as any) !== (m as any) ? (d = (): any => (f as any)(((m as any).cancel as any)()), (e as any)[2] = f, (e as any)[3] = m, (e as any)[4] = d) : d = (e as any)[4];
  const N: any = d;
  let P: any;
  ((e as any)[5] as any) !== (f as any) || ((e as any)[6] as any) !== (m as any) ? (P = (): any => (f as any)(((m as any).dismissTerminal as any)()), (e as any)[5] = f, (e as any)[6] = m, (e as any)[7] = P) : P = (e as any)[7];
  const R: any = P;
  let h: any;
  if ((s as any) == (null as any)) {
    let n: any;
    ((e as any)[8] as any) !== (l as any) ? (n = (l as any)({
      id: "DJ8vO7"
    }), (e as any)[8] = l, (e as any)[9] = n) : n = (e as any)[9];
    let r: any;
    ((e as any)[10] as any) !== (n as any) ? (r = ((i as any).jsx as any)(de, {
      as: "p",
      color: "secondary",
      role: "status",
      rootStyle: (ke as any).message,
      size: "sm",
      children: n
    }), (e as any)[10] = n, (e as any)[11] = r) : r = (e as any)[11], h = r;
  } else if (p) {
    let n: any;
    ((e as any)[12] as any) !== (l as any) ? (n = (l as any)({
      id: "mOYKJB"
    }), (e as any)[12] = l, (e as any)[13] = n) : n = (e as any)[13];
    let r: any;
    ((e as any)[14] as any) !== (n as any) ? (r = ((i as any).jsx as any)(de, {
      as: "p",
      color: "secondary",
      role: "status",
      rootStyle: (ke as any).message,
      size: "sm",
      children: n
    }), (e as any)[14] = n, (e as any)[15] = r) : r = (e as any)[15], h = r;
  } else if (((m as any).failure as any) != (null as any)) {
    let n: any;
    ((e as any)[16] as any) !== (l as any) || ((e as any)[17] as any) !== (g as any) ? (n = (l as any)(g ? {
      id: "xl3sRN"
    } : {
      id: "8l1dw6"
    }), (e as any)[16] = l, (e as any)[17] = g, (e as any)[18] = n) : n = (e as any)[18];
    let r: any;
    ((e as any)[19] as any) !== (n as any) ? (r = ((i as any).jsx as any)(de, {
      as: "p",
      color: "red",
      role: "alert",
      rootStyle: (ke as any).message,
      size: "sm",
      children: n
    }), (e as any)[19] = n, (e as any)[20] = r) : r = (e as any)[20], h = r;
  } else if (((s as any).state as any) === ("waiting-for-image" as any)) {
    let n: any;
    ((e as any)[21] as any) !== (l as any) ? (n = (l as any)({
      id: "9B+F4E"
    }), (e as any)[21] = l, (e as any)[22] = n) : n = (e as any)[22];
    let r: any;
    ((e as any)[23] as any) !== (n as any) ? (r = ((i as any).jsx as any)(de, {
      as: "p",
      color: "secondary",
      role: "status",
      rootStyle: (ke as any).message,
      size: "sm",
      children: n
    }), (e as any)[23] = n, (e as any)[24] = r) : r = (e as any)[24], h = r;
  } else if (((s as any).state as any) === ("failed" as any)) {
    let n: any;
    ((e as any)[25] as any) !== (l as any) ? (n = (l as any)({
      id: "dvcSkb"
    }), (e as any)[25] = l, (e as any)[26] = n) : n = (e as any)[26];
    let r: any;
    ((e as any)[27] as any) !== (n as any) ? (r = ((i as any).jsx as any)(de, {
      as: "p",
      color: "red",
      role: "alert",
      rootStyle: (ke as any).message,
      size: "sm",
      children: n
    }), (e as any)[27] = n, (e as any)[28] = r) : r = (e as any)[28], h = r;
  } else if (((s as any).state as any) === ("missed" as any)) {
    let n: any;
    ((e as any)[29] as any) !== (l as any) ? (n = (l as any)({
      id: "SSawzU"
    }), (e as any)[29] = l, (e as any)[30] = n) : n = (e as any)[30];
    let r: any;
    ((e as any)[31] as any) !== (n as any) ? (r = ((i as any).jsx as any)(de, {
      as: "p",
      color: "secondary",
      role: "status",
      rootStyle: (ke as any).message,
      size: "sm",
      children: n
    }), (e as any)[31] = n, (e as any)[32] = r) : r = (e as any)[32], h = r;
  } else if (x) {
    let n: any;
    ((e as any)[33] as any) !== (l as any) ? (n = (l as any)({
      id: "zs7L+v"
    }), (e as any)[33] = l, (e as any)[34] = n) : n = (e as any)[34];
    let r: any;
    ((e as any)[35] as any) !== (n as any) ? (r = ((i as any).jsx as any)(de, {
      as: "p",
      color: "secondary",
      role: "status",
      rootStyle: (ke as any).message,
      size: "sm",
      children: n
    }), (e as any)[35] = n, (e as any)[36] = r) : r = (e as any)[36], h = r;
  } else if (((s as any).failureReason as any) != (null as any)) {
    let n: any;
    ((e as any)[37] as any) !== (l as any) ? (n = (l as any)({
      id: "DxG2Me"
    }), (e as any)[37] = l, (e as any)[38] = n) : n = (e as any)[38];
    let r: any;
    ((e as any)[39] as any) !== (n as any) ? (r = ((i as any).jsx as any)(de, {
      as: "p",
      color: "secondary",
      role: "status",
      rootStyle: (ke as any).message,
      size: "sm",
      children: n
    }), (e as any)[39] = n, (e as any)[40] = r) : r = (e as any)[40], h = r;
  } else {
    let n: any;
    ((e as any)[41] as any) !== (l as any) ? (n = (l as any)({
      id: "sVM9X6"
    }), (e as any)[41] = l, (e as any)[42] = n) : n = (e as any)[42];
    let r: any;
    ((e as any)[43] as any) !== (n as any) ? (r = ((i as any).jsx as any)(de, {
      as: "p",
      color: "secondary",
      role: "status",
      rootStyle: (ke as any).message,
      size: "sm",
      children: n
    }), (e as any)[43] = n, (e as any)[44] = r) : r = (e as any)[44], h = r;
  }
  let j: any;
  if ((s as any) == (null as any)) {
    let n: any;
    ((e as any)[45] as any) !== (l as any) ? (n = (l as any)({
      id: "O98MC0"
    }), (e as any)[45] = l, (e as any)[46] = n) : n = (e as any)[46], j = n;
  } else if (p) {
    let n: any;
    ((e as any)[47] as any) !== (l as any) ? (n = (l as any)({
      id: "EhmeFn"
    }), (e as any)[47] = l, (e as any)[48] = n) : n = (e as any)[48], j = n;
  } else if (((s as any).state as any) === ("waiting-for-image" as any)) {
    let n: any;
    ((e as any)[49] as any) !== (l as any) ? (n = (l as any)({
      id: "/VHWSR"
    }), (e as any)[49] = l, (e as any)[50] = n) : n = (e as any)[50], j = n;
  } else if (((s as any).state as any) === ("failed" as any)) {
    let n: any;
    ((e as any)[51] as any) !== (l as any) ? (n = (l as any)({
      id: "cpVY7s"
    }), (e as any)[51] = l, (e as any)[52] = n) : n = (e as any)[52], j = n;
  } else if (((s as any).state as any) === ("missed" as any)) {
    let n: any;
    ((e as any)[53] as any) !== (l as any) ? (n = (l as any)({
      id: "1LEY+X"
    }), (e as any)[53] = l, (e as any)[54] = n) : n = (e as any)[54], j = n;
  } else if (x) {
    let n: any;
    ((e as any)[55] as any) !== (l as any) ? (n = (l as any)({
      id: "Rh+qJi"
    }), (e as any)[55] = l, (e as any)[56] = n) : n = (e as any)[56], j = n;
  } else {
    let n: any;
    ((e as any)[57] as any) !== (l as any) ? (n = (l as any)({
      id: "PWHLaG"
    }), (e as any)[57] = l, (e as any)[58] = n) : n = (e as any)[58], j = n;
  }
  let B: any;
  if ((s as any) == (null as any)) {
    let n: any;
    ((e as any)[59] as any) !== (l as any) ? (n = (l as any)({
      id: "fs7tRr"
    }), (e as any)[59] = l, (e as any)[60] = n) : n = (e as any)[60], B = n;
  } else if ((s as any).recurring) {
    let n: any;
    ((e as any)[61] as any) !== (l as any) || ((e as any)[62] as any) !== ((s as any).localTime as any) || ((e as any)[63] as any) !== ((s as any).timeZone as any) ? (n = (l as any)({
      id: "YZbHiz",
      values: {
        0: (s as any).localTime,
        1: (s as any).timeZone
      }
    }), (e as any)[61] = l, (e as any)[62] = (s as any).localTime, (e as any)[63] = (s as any).timeZone, (e as any)[64] = n) : n = (e as any)[64], B = n;
  } else {
    let n: any;
    ((e as any)[65] as any) !== (l as any) || ((e as any)[66] as any) !== ((s as any).localTime as any) || ((e as any)[67] as any) !== ((s as any).timeZone as any) ? (n = (l as any)({
      id: "OnNsFO",
      values: {
        0: (s as any).localTime,
        1: (s as any).timeZone
      }
    }), (e as any)[65] = l, (e as any)[66] = (s as any).localTime, (e as any)[67] = (s as any).timeZone, (e as any)[68] = n) : n = (e as any)[68], B = n;
  }
  const L: any = !(m as any).isPending,
    te: any = !(m as any).isPending,
    w: any = !(m as any).isPending;
  let F: any;
  ((e as any)[69] as any) !== ((m as any).isPending as any) || ((e as any)[70] as any) !== (a as any) ? (F = (n: any): any => {
    !n && !(m as any).isPending && (a as any)();
  }, (e as any)[69] = (m as any).isPending, (e as any)[70] = a, (e as any)[71] = F) : F = (e as any)[71];
  let J: any;
  ((e as any)[72] as any) !== (j as any) ? (J = ((i as any).jsx as any)((C as any).Title, {
    children: j
  }), (e as any)[72] = j, (e as any)[73] = J) : J = (e as any)[73];
  let E: any;
  ((e as any)[74] as any) !== (B as any) ? (E = ((i as any).jsx as any)((C as any).Description, {
    children: B
  }), (e as any)[74] = B, (e as any)[75] = E) : E = (e as any)[75];
  let O: any;
  ((e as any)[76] as any) !== (J as any) || ((e as any)[77] as any) !== (E as any) ? (O = ((i as any).jsxs as any)((C as any).Header, {
    children: [J, E]
  }), (e as any)[76] = J, (e as any)[77] = E, (e as any)[78] = O) : O = (e as any)[78];
  let k: any;
  ((e as any)[79] as any) !== (h as any) ? (k = ((i as any).jsx as any)((C as any).Body, {
    children: h
  }), (e as any)[79] = h, (e as any)[80] = k) : k = (e as any)[80];
  let A: any;
  ((e as any)[81] as any) !== (l as any) || ((e as any)[82] as any) !== (_ as any) || ((e as any)[83] as any) !== (N as any) || ((e as any)[84] as any) !== ((m as any).isPending as any) || ((e as any)[85] as any) !== (R as any) || ((e as any)[86] as any) !== (g as any) ? (A = _ || g ? ((i as any).jsx as any)((C as any).Action, {
    disabled: (m as any).isPending,
    onClick: g ? R : N,
    children: (l as any)(g ? {
      id: "1QfxQT"
    } : {
      id: "EsyXEM"
    })
  }) : null, (e as any)[81] = l, (e as any)[82] = _, (e as any)[83] = N, (e as any)[84] = (m as any).isPending, (e as any)[85] = R, (e as any)[86] = g, (e as any)[87] = A) : A = (e as any)[87];
  let U: any;
  ((e as any)[88] as any) !== (b as any) || ((e as any)[89] as any) !== ((m as any).isPending as any) || ((e as any)[90] as any) !== (a as any) || ((e as any)[91] as any) !== (o as any) ? (U = b ? ((i as any).jsx as any)((C as any).Action, {
    disabled: (m as any).isPending,
    onClick: o,
    ref: T,
    variant: "primary",
    children: ((i as any).jsx as any)(M, {
      id: "QqW27M"
    })
  }) : ((i as any).jsx as any)((C as any).Action, {
    onClick: a,
    ref: T,
    variant: "primary",
    children: ((i as any).jsx as any)(M, {
      id: "yz7wBu"
    })
  }), (e as any)[88] = b, (e as any)[89] = (m as any).isPending, (e as any)[90] = a, (e as any)[91] = o, (e as any)[92] = U) : U = (e as any)[92];
  let D: any;
  ((e as any)[93] as any) !== (A as any) || ((e as any)[94] as any) !== (U as any) ? (D = ((i as any).jsxs as any)((C as any).ActionBar, {
    children: [A, U]
  }), (e as any)[93] = A, (e as any)[94] = U, (e as any)[95] = D) : D = (e as any)[95];
  let I: any;
  return ((e as any)[96] as any) !== (O as any) || ((e as any)[97] as any) !== (k as any) || ((e as any)[98] as any) !== (D as any) || ((e as any)[99] as any) !== (L as any) || ((e as any)[100] as any) !== (te as any) || ((e as any)[101] as any) !== (w as any) || ((e as any)[102] as any) !== (F as any) ? (I = ((i as any).jsxs as any)((C as any).Root, {
    className: "sand-computer-upgrade-scheduled-dialog",
    closeOnBackdropClick: L,
    closeOnEscape: te,
    closeOnOutsidePress: w,
    initialFocus: T,
    onOpenChange: F,
    open: !0,
    width: 440,
    children: [O, k, D]
  }), (e as any)[96] = O, (e as any)[97] = k, (e as any)[98] = D, (e as any)[99] = L, (e as any)[100] = te, (e as any)[101] = w, (e as any)[102] = F, (e as any)[103] = I) : I = (e as any)[103], I;
}
function Qe(this: any, t: any): any {
  return (t as any) == (null as any) ? "" : ((JSON as any).stringify as any)(t);
}
function at(this: any, t: any): any {
  (at as any).d = 861;
  const e: any = ((he as any).c as any)(27),
    {
      state: s,
      onClose: a,
      onSchedule: o,
      onUpdateNow: l,
      onReschedule: m,
      schedule: c,
      updateNowEnabled: p
    }: any = t;
  switch ((s as any).kind) {
    case "choice":
      {
        let g: any;
        return ((e as any)[0] as any) !== (a as any) || ((e as any)[1] as any) !== (o as any) || ((e as any)[2] as any) !== (l as any) || ((e as any)[3] as any) !== (p as any) ? (g = ((i as any).jsx as any)(lt, {
          onClose: a,
          onSchedule: o,
          onUpdateNow: l,
          updateNowEnabled: p
        }), (e as any)[0] = a, (e as any)[1] = o, (e as any)[2] = l, (e as any)[3] = p, (e as any)[4] = g) : g = (e as any)[4], g;
      }
    case "schedule":
      {
        let g: any;
        ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = {
          localTime: "00:00",
          recurring: !1
        }, (e as any)[5] = g) : g = (e as any)[5];
        let x: any;
        return ((e as any)[6] as any) !== (a as any) ? (x = ((i as any).jsx as any)(Fe, {
          initial: g,
          isReschedule: !1,
          onClose: a
        }), (e as any)[6] = a, (e as any)[7] = x) : x = (e as any)[7], x;
      }
    case "reschedule":
      {
        if ((c as any) == (null as any) || ((c as any).state as any) === ("claimed" as any) || ((c as any).state as any) === ("running" as any)) {
          let _: any;
          ((e as any)[8] as any) !== (c as any) ? (_ = (Qe as any)(c), (e as any)[8] = c, (e as any)[9] = _) : _ = (e as any)[9];
          let T: any;
          return ((e as any)[10] as any) !== (a as any) || ((e as any)[11] as any) !== (m as any) || ((e as any)[12] as any) !== (c as any) || ((e as any)[13] as any) !== (_ as any) ? (T = ((i as any).jsx as any)(Je, {
            onClose: a,
            onReschedule: m,
            schedule: c
          }, _), (e as any)[10] = a, (e as any)[11] = m, (e as any)[12] = c, (e as any)[13] = _, (e as any)[14] = T) : T = (e as any)[14], T;
        }
        const g: any = `${(c as any).localTime}:${(c as any).timeZone}:${(c as any).recurring}`,
          x: any = ((c as any).state as any) === ("waiting-for-image" as any);
        let b: any;
        return ((e as any)[15] as any) !== (a as any) || ((e as any)[16] as any) !== (c as any) || ((e as any)[17] as any) !== (g as any) || ((e as any)[18] as any) !== (x as any) ? (b = ((i as any).jsx as any)(Fe, {
          initial: c,
          isReschedule: !0,
          onClose: a,
          recurringLocked: x
        }, g), (e as any)[15] = a, (e as any)[16] = c, (e as any)[17] = g, (e as any)[18] = x, (e as any)[19] = b) : b = (e as any)[19], b;
      }
    case "scheduled":
      {
        let g: any;
        ((e as any)[20] as any) !== (c as any) ? (g = (Qe as any)(c), (e as any)[20] = c, (e as any)[21] = g) : g = (e as any)[21];
        let x: any;
        return ((e as any)[22] as any) !== (a as any) || ((e as any)[23] as any) !== (m as any) || ((e as any)[24] as any) !== (c as any) || ((e as any)[25] as any) !== (g as any) ? (x = ((i as any).jsx as any)(Je, {
          onClose: a,
          onReschedule: m,
          schedule: c
        }, g), (e as any)[22] = a, (e as any)[23] = m, (e as any)[24] = c, (e as any)[25] = g, (e as any)[26] = x) : x = (e as any)[26], x;
      }
  }
}
function Kt(this: any, {
  workingAgentNames: t
}: any): any {
  const e: any = ((t as any).length as any) === (0 as any) ? ((je as any)._ as any)({
    id: "1DiJOA"
  }) : ((je as any)._ as any)({
    id: "wICGd6",
    values: {
      0: (t as any).length
    }
  });
  return {
    title: ((je as any)._ as any)({
      id: "XysFzd"
    }),
    description: ((je as any)._ as any)({
      id: "5W53nw",
      values: {
        working: e
      }
    }),
    warning: ((je as any)._ as any)({
      id: "T9ijna"
    }),
    confirmLabel: ((je as any)._ as any)({
      id: "FB/gHq"
    }),
    pendingLabel: ((je as any)._ as any)({
      id: "xRPBky"
    }),
    cancelLabel: ((je as any)._ as any)({
      id: "dEgA5A"
    }),
    destructive: !0,
    width: "wide"
  };
}
function Qt(this: any, {
  action: t,
  snapshot: e
}: any): any {
  return (e as any).isBlocked ? ((je as any)._ as any)({
    id: "OY2DWP"
  }) : ((e as any).pendingKind as any) != (null as any) ? ((je as any)._ as any)({
    id: "NCxqyE"
  }) : (e as any).canReset ? null : ((je as any)._ as any)({
    id: "J8tdjR"
  });
}
function es(this: any, {
  request: t,
  action: e,
  readSnapshot: s,
  run: a
}: any): any {
  return {
    ...t,
    perform: async (): Promise<any> => {
      const o: any = (Qt as any)({
        action: e,
        snapshot: (s as any)()
      });
      return o ?? ((a as any)(), null);
    }
  };
}
const ts: any = {
  feed_fetch_failed: {
    id: "q/OE3r"
  },
  feed_malformed: {
    id: "gMUjc2"
  },
  update_apply_unsupported: {
    id: "6THE5M"
  },
  installer_backend_unavailable: {
    id: "alTz3O"
  },
  installer_signature_invalid: {
    id: "VZlSAx"
  },
  update_failed: {
    id: "eoHLiG"
  },
  staging_declined: {
    id: "QP0mYu"
  },
  staging_failed: {
    id: "QP0mYu"
  }
};
function et(this: any, t: any, e: any): any {
  const {
    failure: s
  }: any = e;
  return (s as any) == (null as any) ? (t as any)({
    id: "aFBZJb"
  }) : ((s as any).kind as any) === ("feed_http_status" as any) ? (t as any)({
    id: "r5CpW6",
    values: {
      0: (s as any).httpStatus
    }
  }) : ((s as any).kind as any) === ("staging_timeout" as any) ? (t as any)({
    id: "SUHrgt",
    values: {
      0: (s as any).version
    }
  }) : (t as any)((ts as any)[(s as any).kind]);
}
const We: any = {
    statusError: {
      kMwMTN: "sand-1jh5svw",
      $$css: !0
    },
    statusReady: {
      kMwMTN: "sand-kbann2",
      $$css: !0
    },
    statusVisuallyHidden: {
      kVAEAm: "sand-10l6tqk",
      kzqmXN: "sand-1i1rx1s",
      kZKoxP: "sand-jm9jq1",
      kogj98: "sand-kdpibf",
      kmVPX3: "sand-1717udv",
      kVQacm: "sand-b3r6kr",
      kMcinP: "sand-zpqnlu",
      khDVqt: "sand-uxw1ft",
      kMzoRj: "sand-c342km",
      $$css: !0
    },
    checkWeakBorder: {
      kGVxlE: "sand-lkpa4b",
      $$css: !0
    }
  },
  ss: any = {
    stable: {
      id: "B6aXGH"
    },
    nightly: {
      id: "cVY2Vt"
    },
    dogfood: {
      id: "C/wLBW"
    }
  },
  tt: string = "https://console.statsig.com/5oWaLs1Xr8U2ei9Hq2R45w/dynamic_configs/sand_internal_release_track_override";
function dt(this: any, t: any): any {
  (dt as any).d = 1319;
  const e: any = ((he as any).c as any)(9),
    {
      children: s
    }: any = t,
    a: any = (wt as any)(),
    {
      externalLinkHandlers: o
    }: any = (Et as any)();
  let l: any;
  ((e as any)[0] as any) !== (o as any) || ((e as any)[1] as any) !== (a as any) ? (l = (o as any)(tt, a), (e as any)[0] = o, (e as any)[1] = a, (e as any)[2] = l) : l = (e as any)[2];
  let m: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = {
    className: "sand-kbann2 sand-1ypdohk sand-ujl8zx"
  }, (e as any)[3] = m) : m = (e as any)[3];
  let c: any;
  ((e as any)[4] as any) !== (s as any) ? (c = ((i as any).jsx as any)(nt, {
    children: s
  }), (e as any)[4] = s, (e as any)[5] = c) : c = (e as any)[5];
  let p: any;
  return ((e as any)[6] as any) !== (l as any) || ((e as any)[7] as any) !== (c as any) ? (p = ((i as any).jsx as any)("a", {
    ...l,
    ...m,
    href: tt,
    rel: "noopener noreferrer",
    target: "_blank",
    children: c
  }), (e as any)[6] = l, (e as any)[7] = c, (e as any)[8] = p) : p = (e as any)[8], p;
}
function ot(this: any, t: any, e: any): any {
  if ((((e as any).state as any).type as any) !== ("disabled" as any)) return "";
  switch (((e as any).state as any).reason) {
    case "not-packaged":
      return (t as any)({
        id: "mHJfw8"
      });
    case "lab-build":
      return (t as any)({
        id: "LQb5zQ"
      });
    case "unsupported-platform":
      return (t as any)({
        id: "eWT6UF"
      });
    case "disabled-by-env":
      return (t as any)({
        id: "zQjC4P"
      });
  }
}
function ns(this: any, t: any, e: any): any {
  return (((e as any).state as any).type as any) === ("disabled" as any) ? (ot as any)(t, e) : ((e as any).delivery as any) === ("package-manager" as any) ? (t as any)({
    id: "UEIfad"
  }) : (t as any)({
    id: "t4oXCX",
    values: {
      0: (e as any).currentTrack
    }
  });
}
function is(this: any, t: any, e: any): any {
  const {
    state: s
  }: any = e;
  switch ((s as any).type) {
    case "disabled":
      return {
        text: (ot as any)(t, e),
        tone: "default"
      };
    case "checking":
      return {
        text: (t as any)({
          id: "YHOIrR"
        }),
        tone: "default"
      };
    case "available":
      return {
        text: (t as any)({
          id: "c82kGR",
          values: {
            0: (s as any).version
          }
        }),
        tone: "default"
      };
    case "downloading":
      return ((s as any).progress as any) == (null as any) ? {
        text: (t as any)({
          id: "KnfaGy",
          values: {
            0: (s as any).version
          }
        }),
        tone: "default"
      } : {
        text: (t as any)({
          id: "Z2WNfg",
          values: {
            0: (s as any).version,
            1: (Nt as any)((s as any).progress)
          }
        }),
        tone: "default"
      };
    case "staging":
      return {
        text: (t as any)({
          id: "W+HMod",
          values: {
            0: (s as any).version
          }
        }),
        tone: "default"
      };
    case "ready":
      {
        if (((s as any).lastCheck?.result as any) === ("error" as any)) {
          const a: any = (et as any)(t, (s as any).lastCheck);
          return {
            text: (t as any)({
              id: "ZEccfE",
              values: {
                0: (s as any).version,
                failureMessage: a
              }
            }),
            tone: "error"
          };
        }
        return {
          text: (t as any)({
            id: "jlzJCP",
            values: {
              0: (s as any).version
            }
          }),
          tone: "ready"
        };
      }
    case "move-required":
      return {
        text: (t as any)({
          id: "E2rHU1"
        }),
        tone: "error"
      };
    case "idle":
      {
        const {
          lastCheck: a
        }: any = s;
        if ((a as any) == (null as any)) return {
          text: "",
          tone: "default"
        };
        switch ((a as any).result) {
          case "up-to-date":
            return {
              text: (t as any)({
                id: "Ekblrc"
              }),
              tone: "default"
            };
          case "available-from-package-manager":
            return {
              text: (t as any)({
                id: "vj7UIZ",
                values: {
                  0: (a as any).version
                }
              }),
              tone: "default"
            };
          case "error":
            return {
              text: (et as any)(t, a),
              tone: "error"
            };
        }
      }
  }
}
function ct(this: any): any {
  (ct as any).d = 1320;
  const t: any = ((he as any).c as any)(110),
    {
      _: e
    }: any = (Ae as any)(),
    {
      _: s
    }: any = (Ae as any)(),
    {
      updatePrompt: a
    }: any = (Ye as any)(),
    {
      status: o,
      isLoading: l
    }: any = (Pt as any)(),
    {
      check: m,
      isPending: c
    }: any = (Rt as any)(),
    {
      setTrack: p,
      isPending: g,
      failure: x
    }: any = (Ct as any)(),
    {
      setAutoUpdateWhenIdle: b,
      isPending: _,
      failure: T
    }: any = (At as any)(),
    {
      quitAndInstall: S
    }: any = (Ut as any)();
  let f: any;
  ((t as any)[0] as any) !== (p as any) ? (f = (y: any): any => {
    ((y as any) === ("stable" as any) || (y as any) === ("nightly" as any) || (y as any) === ("dogfood" as any)) && (p as any)(y);
  }, (t as any)[0] = p, (t as any)[1] = f) : f = (t as any)[1];
  const d: any = f;
  let N: any;
  ((t as any)[2] as any) !== (s as any) ? (N = (s as any)({
    id: "ETzTLS"
  }), (t as any)[2] = s, (t as any)[3] = N) : N = (t as any)[3];
  let P: any = N;
  if (l) {
    let y: any;
    ((t as any)[4] as any) !== (s as any) ? (y = (s as any)({
      id: "Pwqkdw"
    }), (t as any)[4] = s, (t as any)[5] = y) : y = (t as any)[5], P = y;
  } else if (c) {
    let y: any;
    ((t as any)[6] as any) !== (s as any) ? (y = (s as any)({
      id: "RLe7Vk"
    }), (t as any)[6] = s, (t as any)[7] = y) : y = (t as any)[7], P = y;
  }
  if ((o as any) == (null as any)) {
    let y: any;
    ((t as any)[8] as any) !== (s as any) ? (y = (s as any)({
      id: "U+dVHJ"
    }), (t as any)[8] = s, (t as any)[9] = y) : y = (t as any)[9];
    let ne: any;
    ((t as any)[10] as any) !== (s as any) || ((t as any)[11] as any) !== (l as any) ? (ne = (s as any)(l ? {
      id: "+Vy0cC"
    } : {
      id: "wS2ikm"
    }), (t as any)[10] = s, (t as any)[11] = l, (t as any)[12] = ne) : ne = (t as any)[12];
    const le: any = l || c;
    let z: any;
    ((t as any)[13] as any) !== (m as any) || ((t as any)[14] as any) !== (a as any) ? (z = (): any => {
      ((a as any).reportAction as any)({
        surface: "settings",
        action: "clicked",
        kind: "check"
      }), (m as any)();
    }, (t as any)[13] = m, (t as any)[14] = a, (t as any)[15] = z) : z = (t as any)[15];
    let Q: any;
    ((t as any)[16] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Q = [(Te as any).body2, (We as any).checkWeakBorder], (t as any)[16] = Q) : Q = (t as any)[16];
    let V: any;
    ((t as any)[17] as any) !== (P as any) || ((t as any)[18] as any) !== (le as any) || ((t as any)[19] as any) !== (z as any) ? (V = ((i as any).jsx as any)(Be, {
      disabled: le,
      onClick: z,
      size: "md",
      style: Q,
      variant: "secondary",
      children: P
    }), (t as any)[17] = P, (t as any)[18] = le, (t as any)[19] = z, (t as any)[20] = V) : V = (t as any)[20];
    let Z: any;
    ((t as any)[21] as any) !== (ne as any) || ((t as any)[22] as any) !== (V as any) ? (Z = ((i as any).jsx as any)(Oe, {
      anchorId: "update-status",
      description: ne,
      variant: "card",
      children: V
    }), (t as any)[21] = ne, (t as any)[22] = V, (t as any)[23] = Z) : Z = (t as any)[23];
    let ee: any;
    return ((t as any)[24] as any) !== (y as any) || ((t as any)[25] as any) !== (Z as any) ? (ee = ((i as any).jsx as any)(Ve, {
      title: y,
      children: Z
    }), (t as any)[24] = y, (t as any)[25] = Z, (t as any)[26] = ee) : ee = (t as any)[26], ee;
  }
  const R: any = (o as any).currentVersion,
    {
      state: h
    }: any = o,
    j: any = ((h as any).type as any) === ("disabled" as any),
    B: any = ((o as any).delivery as any) === ("package-manager" as any),
    L: any = ((h as any).type as any) === ("checking" as any) || ((h as any).type as any) === ("available" as any) || ((h as any).type as any) === ("downloading" as any) || ((h as any).type as any) === ("staging" as any);
  let te: any;
  ((t as any)[27] as any) !== (e as any) || ((t as any)[28] as any) !== (o as any) ? (te = (is as any)(e, o), (t as any)[27] = e, (t as any)[28] = o, (t as any)[29] = te) : te = (t as any)[29];
  const w: any = te,
    F: any = !j && (((w as any).text as any).length as any) > (0 as any);
  let J: any;
  ((t as any)[30] as any) !== (s as any) || ((t as any)[31] as any) !== (x as any) ? (J = (x as any) != (null as any) ? (s as any)({
    id: "QqKsGg"
  }) : (s as any)({
    id: "9X6nZD"
  }), (t as any)[30] = s, (t as any)[31] = x, (t as any)[32] = J) : J = (t as any)[32];
  const E: any = J;
  let O: any;
  ((t as any)[33] as any) !== (F as any) || ((t as any)[34] as any) !== ((w as any).tone as any) ? (O = ($e as any)("sand-settings-updates__status", ((gt as any)((Ft as any).hint, ((w as any).tone as any) === ("error" as any) && (We as any).statusError, ((w as any).tone as any) === ("ready" as any) && (We as any).statusReady, !F && (We as any).statusVisuallyHidden) as any).className), (t as any)[33] = F, (t as any)[34] = (w as any).tone, (t as any)[35] = O) : O = (t as any)[35];
  const k: any = F ? (w as any).text : "";
  let A: any;
  ((t as any)[36] as any) !== (O as any) || ((t as any)[37] as any) !== (k as any) ? (A = ((i as any).jsx as any)(de, {
    "aria-live": "polite",
    as: "span",
    className: O,
    color: "secondary",
    role: "status",
    size: "md",
    children: k
  }), (t as any)[36] = O, (t as any)[37] = k, (t as any)[38] = A) : A = (t as any)[38];
  const U: any = A;
  let D: any;
  ((t as any)[39] as any) !== (s as any) ? (D = (s as any)({
    id: "U+dVHJ"
  }), (t as any)[39] = s, (t as any)[40] = D) : D = (t as any)[40];
  let I: any;
  ((t as any)[41] as any) !== (e as any) || ((t as any)[42] as any) !== (s as any) || ((t as any)[43] as any) !== (d as any) || ((t as any)[44] as any) !== (B as any) || ((t as any)[45] as any) !== (g as any) || ((t as any)[46] as any) !== (j as any) || ((t as any)[47] as any) !== ((o as any).availableTracks as any) || ((t as any)[48] as any) !== ((o as any).currentTrack as any) || ((t as any)[49] as any) !== ((o as any).isTrackManagedByPolicy as any) || ((t as any)[50] as any) !== (E as any) ? (I = B ? null : ((i as any).jsx as any)(Oe, {
    description: (o as any).isTrackManagedByPolicy ? ((i as any).jsx as any)(M, {
      id: "D6WGx5",
      components: {
        0: ((i as any).jsx as any)(dt, {})
      }
    }) : E,
    anchorId: "update-channel",
    variant: "card",
    children: ((i as any).jsx as any)(xt, {
      "aria-label": (s as any)({
        id: "/IUA77"
      }),
      disabled: j || g || (o as any).isTrackManagedByPolicy,
      onValueChange: (y: any): any => {
        (y as any) !== (null as any) && (d as any)(y);
      },
      options: (((o as any).availableTracks as any).map as any)((y: any): any => ({
        value: y,
        label: (e as any)((ss as any)[y])
      })),
      placement: "bottom-end",
      size: "lg",
      value: (o as any).currentTrack,
      variant: "ghost"
    })
  }), (t as any)[41] = e, (t as any)[42] = s, (t as any)[43] = d, (t as any)[44] = B, (t as any)[45] = g, (t as any)[46] = j, (t as any)[47] = (o as any).availableTracks, (t as any)[48] = (o as any).currentTrack, (t as any)[49] = (o as any).isTrackManagedByPolicy, (t as any)[50] = E, (t as any)[51] = I) : I = (t as any)[51];
  let n: any;
  ((t as any)[52] as any) !== (s as any) || ((t as any)[53] as any) !== (T as any) || ((t as any)[54] as any) !== (_ as any) || ((t as any)[55] as any) !== (B as any) || ((t as any)[56] as any) !== (j as any) || ((t as any)[57] as any) !== (b as any) || ((t as any)[58] as any) !== ((o as any).autoUpdateWhenIdle as any) ? (n = B ? null : ((i as any).jsx as any)(Oe, {
    anchorId: "automatic-updates",
    description: (T as any) != (null as any) ? (s as any)({
      id: "QqKsGg"
    }) : (s as any)({
      id: "4vprnG"
    }),
    variant: "card",
    children: ((i as any).jsx as any)(yt, {
      isChecked: (o as any).autoUpdateWhenIdle,
      isDisabled: j || _,
      label: (s as any)({
        id: "VmXinp"
      }),
      onToggle: (): any => (b as any)(!(o as any).autoUpdateWhenIdle),
      size: "md"
    })
  }), (t as any)[52] = s, (t as any)[53] = T, (t as any)[54] = _, (t as any)[55] = B, (t as any)[56] = j, (t as any)[57] = b, (t as any)[58] = (o as any).autoUpdateWhenIdle, (t as any)[59] = n) : n = (t as any)[59];
  let r: any;
  ((t as any)[60] as any) !== (s as any) ? (r = (s as any)({
    id: "tMuUgT"
  }), (t as any)[60] = s, (t as any)[61] = r) : r = (t as any)[61];
  let $: any;
  ((t as any)[62] as any) !== (r as any) || ((t as any)[63] as any) !== (R as any) ? ($ = {
    value: R,
    label: r
  }, (t as any)[62] = r, (t as any)[63] = R, (t as any)[64] = $) : $ = (t as any)[64];
  let se: any;
  ((t as any)[65] as any) !== (e as any) || ((t as any)[66] as any) !== (o as any) ? (se = (ns as any)(e, o), (t as any)[65] = e, (t as any)[66] = o, (t as any)[67] = se) : se = (t as any)[67];
  let W: any;
  ((t as any)[68] as any) !== (s as any) || ((t as any)[69] as any) !== (R as any) ? (W = (s as any)({
    id: "LcLBP8",
    values: {
      version: R
    }
  }), (t as any)[68] = s, (t as any)[69] = R, (t as any)[70] = W) : W = (t as any)[70];
  let X: any;
  ((t as any)[71] as any) !== (R as any) ? (X = {
    text: R,
    dir: "ltr"
  }, (t as any)[71] = R, (t as any)[72] = X) : X = (t as any)[72];
  let Y: any;
  ((t as any)[73] as any) !== (s as any) ? (Y = (s as any)({
    id: "eE0JZ4"
  }), (t as any)[73] = s, (t as any)[74] = Y) : Y = (t as any)[74];
  let fe: any;
  ((t as any)[75] as any) !== (S as any) || ((t as any)[76] as any) !== ((h as any).canMove as any) || ((t as any)[77] as any) !== ((h as any).type as any) || ((t as any)[78] as any) !== ((h as any).version as any) || ((t as any)[79] as any) !== (a as any) ? (fe = ((h as any).type as any) === ("move-required" as any) && (h as any).canMove ? ((i as any).jsx as any)(Be, {
    onClick: (): any => {
      ((a as any).reportAction as any)({
        surface: "settings",
        action: "clicked",
        kind: "error",
        targetVersion: (h as any).version
      }), (S as any)((h as any).version);
    },
    sentiment: "accent",
    size: "md",
    style: (Te as any).body2,
    type: "button",
    variant: "primary",
    children: ((i as any).jsx as any)(M, {
      id: "WfbkKQ"
    })
  }) : null, (t as any)[75] = S, (t as any)[76] = (h as any).canMove, (t as any)[77] = (h as any).type, (t as any)[78] = (h as any).version, (t as any)[79] = a, (t as any)[80] = fe) : fe = (t as any)[80];
  let G: any;
  ((t as any)[81] as any) !== (S as any) || ((t as any)[82] as any) !== ((h as any).type as any) || ((t as any)[83] as any) !== ((h as any).version as any) || ((t as any)[84] as any) !== (a as any) ? (G = ((h as any).type as any) === ("ready" as any) ? ((i as any).jsx as any)(Be, {
    onClick: (): any => {
      ((a as any).reportAction as any)({
        surface: "settings",
        action: "clicked",
        kind: "ready",
        targetVersion: (h as any).version
      }), (S as any)((h as any).version);
    },
    sentiment: "accent",
    size: "md",
    style: (Te as any).body2,
    type: "button",
    variant: "primary",
    children: ((i as any).jsx as any)(M, {
      id: "Cy8PUD"
    })
  }) : null, (t as any)[81] = S, (t as any)[82] = (h as any).type, (t as any)[83] = (h as any).version, (t as any)[84] = a, (t as any)[85] = G) : G = (t as any)[85];
  let K: any;
  ((t as any)[86] as any) !== (s as any) || ((t as any)[87] as any) !== (m as any) || ((t as any)[88] as any) !== (L as any) || ((t as any)[89] as any) !== (c as any) || ((t as any)[90] as any) !== (j as any) || ((t as any)[91] as any) !== ((h as any).type as any) || ((t as any)[92] as any) !== ((w as any).tone as any) || ((t as any)[93] as any) !== (a as any) ? (K = ((h as any).type as any) === ("ready" as any) || ((h as any).type as any) === ("move-required" as any) ? null : ((i as any).jsx as any)(Be, {
    disabled: j || L,
    onClick: (): any => {
      ((a as any).reportAction as any)({
        surface: "settings",
        action: "clicked",
        kind: ((w as any).tone as any) === ("error" as any) ? "error" : "check"
      }), (m as any)();
    },
    size: "md",
    style: [(Te as any).body2, (We as any).checkWeakBorder],
    variant: "secondary",
    children: (s as any)(L || c ? {
      id: "RLe7Vk"
    } : {
      id: "ETzTLS"
    })
  }), (t as any)[86] = s, (t as any)[87] = m, (t as any)[88] = L, (t as any)[89] = c, (t as any)[90] = j, (t as any)[91] = (h as any).type, (t as any)[92] = (w as any).tone, (t as any)[93] = a, (t as any)[94] = K) : K = (t as any)[94];
  let H: any;
  ((t as any)[95] as any) !== ($ as any) || ((t as any)[96] as any) !== (se as any) || ((t as any)[97] as any) !== (W as any) || ((t as any)[98] as any) !== (X as any) || ((t as any)[99] as any) !== (Y as any) || ((t as any)[100] as any) !== (fe as any) || ((t as any)[101] as any) !== (G as any) || ((t as any)[102] as any) !== (K as any) || ((t as any)[103] as any) !== (U as any) ? (H = ((i as any).jsxs as any)(Oe, {
    anchorId: "update-status",
    copyText: $,
    description: se,
    extraCopy: U,
    label: W,
    labelToken: X,
    settingName: Y,
    variant: "card",
    children: [fe, G, K]
  }), (t as any)[95] = $, (t as any)[96] = se, (t as any)[97] = W, (t as any)[98] = X, (t as any)[99] = Y, (t as any)[100] = fe, (t as any)[101] = G, (t as any)[102] = K, (t as any)[103] = U, (t as any)[104] = H) : H = (t as any)[104];
  let oe: any;
  return ((t as any)[105] as any) !== (H as any) || ((t as any)[106] as any) !== (D as any) || ((t as any)[107] as any) !== (I as any) || ((t as any)[108] as any) !== (n as any) ? (oe = ((i as any).jsxs as any)(Ve, {
    title: D,
    children: [I, n, H]
  }), (t as any)[105] = H, (t as any)[106] = D, (t as any)[107] = I, (t as any)[108] = n, (t as any)[109] = oe) : oe = (t as any)[109], oe;
}
const Ie: any = {
  confirmArmed: {
    kB7OPa: "sand-9f619",
    kMwMTN: "sand-1jh5svw",
    kWkggS: "sand-1mrk0n1",
    $$css: !0
  },
  settingsConfirmAction: {
    kB7OPa: "sand-9f619",
    kjj79g: "sand-l56j7k",
    $$css: !0
  },
  updateWeakBorder: {
    kGVxlE: "sand-lkpa4b",
    $$css: !0
  }
};
function ls(this: any, t: any): any {
  const e: any = ((t as any).closest as any)('[role="dialog"]') ?? (document as any).documentElement,
    s: any = (a: any): any => {
      ((a as any).target as any) !== (t as any) && (((t as any).removeAttribute as any)("tabindex"), ((e as any).removeEventListener as any)("focusin", s));
    };
  (t as any).tabIndex = -1, ((e as any).addEventListener as any)("focusin", s), ((t as any).focus as any)({
    preventScroll: !0
  });
}
function Xe(this: any, t: any): any {
  (Xe as any).d = 1268;
  const e: any = ((he as any).c as any)(18),
    {
      isPending: s,
      idleLabel: a,
      pendingLabel: o,
      disabled: l,
      onConfirm: m
    }: any = t,
    c: any = (l as any) === (void 0 as any) ? !1 : l,
    {
      _: p
    }: any = (Ae as any)(),
    [g, x]: any = ((pe as any).useState as any)(!1),
    b: any = ((pe as any).useRef as any)(null);
  let _: any;
  ((e as any)[0] as any) !== (c as any) || ((e as any)[1] as any) !== (g as any) || ((e as any)[2] as any) !== (s as any) || ((e as any)[3] as any) !== (m as any) ? (_ = (): any => {
    if (!(s || c)) {
      if (!g) {
        (b as any).current?.dispose();
        const B: any = (((Vt as any)({
          name: "settings-confirm-arm",
          delayMs: 3e3
        }) as any).wrap as any)((): any => {
          (b as any).current = null, (x as any)(!1);
        });
        (b as any).current = B, (B as any)(), (x as any)(!0);
        return;
      }
      (b as any).current?.dispose(), (b as any).current = null, (x as any)(!1), (m as any)();
    }
  }, (e as any)[0] = c, (e as any)[1] = g, (e as any)[2] = s, (e as any)[3] = m, (e as any)[4] = _) : _ = (e as any)[4];
  const T: any = _,
    S: any = g && !s && !c;
  let f: any = a,
    d: any = (t as any).ariaLabel;
  if (s && (o as any) != (null as any)) f = o;else if (S) {
    let B: any;
    if (((e as any)[5] as any) !== (p as any) || ((e as any)[6] as any) !== ((t as any).ariaLabel as any)) {
      const L: any = (p as any)({
        id: "Wi5nD5"
      });
      f = L, B = (p as any)({
        id: "5OJby0",
        values: {
          0: (t as any).ariaLabel,
          title: L
        }
      }), (e as any)[5] = p, (e as any)[6] = (t as any).ariaLabel, (e as any)[7] = B, (e as any)[8] = f;
    } else B = (e as any)[7], f = (e as any)[8];
    d = B;
  }
  const N: any = S || void 0,
    P: any = s || c,
    R: any = S && (Ie as any).confirmArmed;
  let h: any;
  ((e as any)[9] as any) !== (R as any) ? (h = [(Te as any).body2, (Ie as any).settingsConfirmAction, (Ie as any).updateWeakBorder, R], (e as any)[9] = R, (e as any)[10] = h) : h = (e as any)[10];
  let j: any;
  return ((e as any)[11] as any) !== (d as any) || ((e as any)[12] as any) !== (T as any) || ((e as any)[13] as any) !== (f as any) || ((e as any)[14] as any) !== (N as any) || ((e as any)[15] as any) !== (P as any) || ((e as any)[16] as any) !== (h as any) ? (j = ((i as any).jsx as any)(Be, {
    "aria-label": d,
    className: "sand-settings-reset",
    "data-confirming": N,
    disabled: P,
    onClick: T,
    size: "md",
    style: h,
    variant: "secondary",
    children: f
  }), (e as any)[11] = d, (e as any)[12] = T, (e as any)[13] = f, (e as any)[14] = N, (e as any)[15] = P, (e as any)[16] = h, (e as any)[17] = j) : j = (e as any)[17], j;
}
const as: any = {
    id: "oxmHsP"
  },
  ds: any = {
    id: "GUemL5"
  },
  os: any = {
    id: "cugI1r"
  },
  cs: any = {
    id: "nlDFDE"
  },
  rs: any = {
    id: "xW0Otx"
  };
function rt(this: any, t: any): any {
  (rt as any).d = 1271;
  const e: any = ((he as any).c as any)(12),
    {
      action: s
    }: any = t,
    {
      i18n: a
    }: any = (Ae as any)();
  let o: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = ($e as any)("sand-settings-uptodate-banner", "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-1oot3zn sand-13ly8rp sand-196pc8s sand-1xlntvz sand-8fiw5y sand-1m7fhj7 sand-1ww4gz9 sand-1lel89o"), (e as any)[0] = o) : o = (e as any)[0];
  let l: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-pkkfsy sand-euugli sand-n3e42v"
  }, (e as any)[1] = l) : l = (e as any)[1];
  const m: any = (l as any).className;
  let c: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = ((i as any).jsx as any)(jt, {
    "aria-hidden": !0,
    name: "check-circle",
    size: 14
  }), (e as any)[2] = c) : c = (e as any)[2];
  let p: any;
  ((e as any)[3] as any) !== (a as any) ? (p = ((a as any)._ as any)(as), (e as any)[3] = a, (e as any)[4] = p) : p = (e as any)[4];
  let g: any;
  ((e as any)[5] as any) !== (p as any) ? (g = ((i as any).jsxs as any)("div", {
    className: m,
    children: [c, ((i as any).jsx as any)(de, {
      as: "span",
      size: "md",
      children: p
    })]
  }), (e as any)[5] = p, (e as any)[6] = g) : g = (e as any)[6];
  let x: any;
  ((e as any)[7] as any) !== (s as any) ? (x = (s as any) != (null as any) ? ((i as any).jsx as any)("div", {
    className: "sand-9f619 sand-78zum5 sand-2lah0s sand-6s0dn4",
    children: s
  }) : null, (e as any)[7] = s, (e as any)[8] = x) : x = (e as any)[8];
  let b: any;
  return ((e as any)[9] as any) !== (g as any) || ((e as any)[10] as any) !== (x as any) ? (b = ((i as any).jsxs as any)("div", {
    className: o,
    role: "status",
    children: [g, x]
  }), (e as any)[9] = g, (e as any)[10] = x, (e as any)[11] = b) : b = (e as any)[11], b;
}
function ut(this: any, t: any): any {
  (ut as any).d = 1269;
  const e: any = ((he as any).c as any)(4),
    s: any = (Dt as any)(),
    a: any = s ? "scheduled-updates-on" : "scheduled-updates-off";
  let o: any;
  return ((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (t as any) || ((e as any)[2] as any) !== (a as any) ? (o = ((pe as any).createElement as any)(ft, {
    ...t,
    isSchedulingEnabled: s,
    key: a
  }), (e as any)[0] = s, (e as any)[1] = t, (e as any)[2] = a, (e as any)[3] = o) : o = (e as any)[3], o;
}
function ft(this: any, t: any): any {
  (ft as any).d = 1270;
  const e: any = ((he as any).c as any)(139),
    {
      isUpdateBoxPending: s,
      isResetBoxPending: a,
      canUpdateBaseline: o,
      canUpdateBox: l,
      canResetBox: m,
      isRebuildBlocked: c,
      isBoxUpToDate: p,
      isDevBuild: g,
      busyOneClickEnabled: x,
      workingAgentNames: b,
      onUpdateBox: _,
      onResetBox: T,
      isSchedulingEnabled: S
    }: any = t,
    {
      i18n: f,
      _: d
    }: any = (Ae as any)();
  let N: any;
  ((e as any)[0] as any) !== (o as any) || ((e as any)[1] as any) !== (l as any) || ((e as any)[2] as any) !== (p as any) ? (N = (Xt as any)({
    canUpdateBaseline: o,
    canUpdateBox: l,
    isBoxUpToDate: p
  }), (e as any)[0] = o, (e as any)[1] = l, (e as any)[2] = p, (e as any)[3] = N) : N = (e as any)[3];
  const P: any = N,
    R: any = (zt as any)(),
    h: any = ((bt as any)((R as any) == (null as any) || (R as any).isGroup ? null : (R as any).id) as any).status;
  let j: any;
  ((e as any)[4] as any) !== (h as any) ? (j = (Lt as any)(h), (e as any)[4] = h, (e as any)[5] = j) : j = (e as any)[5];
  const B: any = (j as any) === ("host" as any);
  let L: any;
  ((e as any)[6] as any) !== (f as any) || ((e as any)[7] as any) !== (B as any) ? (L = ((f as any)._ as any)(B ? rs : cs), (e as any)[6] = f, (e as any)[7] = B, (e as any)[8] = L) : L = (e as any)[8];
  const te: any = L,
    w: any = (P as any) === ("up-to-date" as any) && !c;
  (kt as any)(w ? "update-computer" : null);
  const {
      status: F,
      isLoading: J
    }: any = (Ot as any)(),
    E: any = F?.schedule ?? null;
  let O: any;
  ((e as any)[9] as any) !== (S as any) || ((e as any)[10] as any) !== (E as any) ? (O = S && (It as any)(E) ? E : null, (e as any)[9] = S, (e as any)[10] = E, (e as any)[11] = O) : O = (e as any)[11];
  const k: any = O,
    [A, U]: any = ((pe as any).useState as any)(null),
    [D, I]: any = ((pe as any).useState as any)(0),
    n: any = ((pe as any).useRef as any)(0),
    r: any = ((pe as any).useRef as any)(null);
  let $: any;
  ((e as any)[12] as any) !== (D as any) || ((e as any)[13] as any) !== (s as any) ? ($ = (): any => {
    if (((n as any).current as any) === (D as any)) return;
    (n as any).current = D;
    const u: any = (((document as any).querySelector as any)(":focus:enabled") as any) == (null as any),
      q: any = s && u ? (r as any).current : null;
    (q as any) != (null as any) && (ls as any)(q);
  }, (e as any)[12] = D, (e as any)[13] = s, (e as any)[14] = $) : $ = (e as any)[14], ($t as any)($);
  let se: any;
  ((e as any)[15] as any) !== (_ as any) ? (se = (): any => {
    (I as any)(us), (_ as any)();
  }, (e as any)[15] = _, (e as any)[16] = se) : se = (e as any)[16];
  const W: any = se,
    X: any = (Wt as any)(),
    {
      computerRebuild: Y,
      roster: fe
    }: any = (Ye as any)();
  let G: any;
  ((e as any)[17] as any) !== (Y as any) ? (G = (): any => (((Y as any).actionsSnapshots as any).get as any)(), (e as any)[17] = Y, (e as any)[18] = G) : G = (e as any)[18];
  const K: any = G,
    H: any = (Ht as any)((Zt as any)()),
    oe: any = (P as any) === ("ready" as any) || (P as any) === ("busy" as any) && x,
    y: any = S && oe && !J && !c && !s && !a;
  let ne: any;
  ((e as any)[19] as any) !== (X as any) || ((e as any)[20] as any) !== (T as any) || ((e as any)[21] as any) !== (K as any) || ((e as any)[22] as any) !== (b as any) ? (ne = async (): Promise<any> => {
    await (X as any)((es as any)({
      request: (Kt as any)({
        workingAgentNames: b
      }),
      action: "reset",
      readSnapshot: K,
      run: T
    }));
  }, (e as any)[19] = X, (e as any)[20] = T, (e as any)[21] = K, (e as any)[22] = b, (e as any)[23] = ne) : ne = (e as any)[23];
  const le: any = ne;
  let z: any = null;
  if ((k as any) != (null as any)) {
    let u: any;
    e: switch ((k as any).state) {
      case "claimed":
      case "running":
        {
          let v: any;
          ((e as any)[24] as any) !== (d as any) ? (v = (d as any)({
            id: "WpIfiI"
          }), (e as any)[24] = d, (e as any)[25] = v) : v = (e as any)[25], u = v;
          break e;
        }
      case "waiting-for-image":
        {
          let v: any;
          ((e as any)[26] as any) !== (d as any) || ((e as any)[27] as any) !== ((k as any).localTime as any) || ((e as any)[28] as any) !== ((k as any).timeZone as any) ? (v = (d as any)({
            id: "GeqnJ+",
            values: {
              0: (k as any).localTime,
              1: (k as any).timeZone
            }
          }), (e as any)[26] = d, (e as any)[27] = (k as any).localTime, (e as any)[28] = (k as any).timeZone, (e as any)[29] = v) : v = (e as any)[29], u = v;
          break e;
        }
      case "failed":
        {
          let v: any;
          ((e as any)[30] as any) !== (d as any) ? (v = (d as any)({
            id: "nXINc7"
          }), (e as any)[30] = d, (e as any)[31] = v) : v = (e as any)[31], u = v;
          break e;
        }
      case "missed":
        {
          let v: any;
          ((e as any)[32] as any) !== (d as any) ? (v = (d as any)({
            id: "lH1YVA"
          }), (e as any)[32] = d, (e as any)[33] = v) : v = (e as any)[33], u = v;
          break e;
        }
      default:
        {
          let v: any;
          ((e as any)[34] as any) !== (d as any) || ((e as any)[35] as any) !== ((k as any).localTime as any) || ((e as any)[36] as any) !== ((k as any).timeZone as any) ? (v = (d as any)({
            id: "PcoPji",
            values: {
              0: (k as any).localTime,
              1: (k as any).timeZone
            }
          }), (e as any)[34] = d, (e as any)[35] = (k as any).localTime, (e as any)[36] = (k as any).timeZone, (e as any)[37] = v) : v = (e as any)[37], u = v;
        }
    }
    let q: any;
    ((e as any)[38] as any) !== (u as any) ? (q = ((i as any).jsx as any)(Le, {
      children: u
    }), (e as any)[38] = u, (e as any)[39] = q) : q = (e as any)[39], z = q;
  }
  let Q: any = z;
  if ((z as any) == (null as any) && c) {
    let u: any;
    ((e as any)[40] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = ((i as any).jsx as any)(Le, {
      children: ((i as any).jsx as any)(M, {
        id: "OY2DWP"
      })
    }), (e as any)[40] = u) : u = (e as any)[40], Q = u;
  } else if ((z as any) == (null as any) && (P as any) === ("busy" as any)) {
    let u: any;
    ((e as any)[41] as any) !== (x as any) || ((e as any)[42] as any) !== (f as any) ? (u = ((f as any)._ as any)(x ? ds : os), (e as any)[41] = x, (e as any)[42] = f, (e as any)[43] = u) : u = (e as any)[43];
    let q: any;
    ((e as any)[44] as any) !== (u as any) ? (q = ((i as any).jsx as any)(Le, {
      children: u
    }), (e as any)[44] = u, (e as any)[45] = q) : q = (e as any)[45], Q = q;
  }
  let V: any;
  ((e as any)[46] as any) !== (d as any) ? (V = (d as any)({
    id: "4ba0NE"
  }), (e as any)[46] = d, (e as any)[47] = V) : V = (e as any)[47];
  let Z: any = V;
  if ((k?.state as any) === ("waiting-for-image" as any)) {
    let u: any;
    ((e as any)[48] as any) !== (d as any) ? (u = (d as any)({
      id: "WohNLi"
    }), (e as any)[48] = d, (e as any)[49] = u) : u = (e as any)[49], Z = u;
  } else if ((k?.state as any) === ("claimed" as any) || (k?.state as any) === ("running" as any)) {
    let u: any;
    ((e as any)[50] as any) !== (d as any) ? (u = (d as any)({
      id: "Jqe+Dc"
    }), (e as any)[50] = d, (e as any)[51] = u) : u = (e as any)[51], Z = u;
  } else if ((k?.state as any) === ("failed" as any) || (k?.state as any) === ("missed" as any)) {
    let u: any;
    ((e as any)[52] as any) !== (d as any) ? (u = (d as any)({
      id: "JheHpd"
    }), (e as any)[52] = d, (e as any)[53] = u) : u = (e as any)[53], Z = u;
  }
  let ee: any;
  ((e as any)[54] as any) !== (k as any) || ((e as any)[55] as any) !== (Z as any) ? (ee = (k as any) == (null as any) ? null : ((i as any).jsx as any)(Be, {
    className: "sand-settings-manage-computer-update-schedule",
    onClick: (): any => (U as any)({
      kind: "scheduled"
    }),
    size: "md",
    style: (Te as any).body2,
    type: "button",
    variant: "secondary",
    children: Z
  }), (e as any)[54] = k, (e as any)[55] = Z, (e as any)[56] = ee) : ee = (e as any)[56];
  const me: any = ee;
  let xe: any;
  ((e as any)[57] as any) !== (d as any) || ((e as any)[58] as any) !== (g as any) || ((e as any)[59] as any) !== (c as any) || ((e as any)[60] as any) !== (a as any) || ((e as any)[61] as any) !== (s as any) || ((e as any)[62] as any) !== (me as any) || ((e as any)[63] as any) !== (_ as any) ? (xe = me ?? (g ? ((i as any).jsx as any)(Be, {
    className: "sand-settings-force-refresh",
    disabled: c || s || a,
    onClick: (): any => (_ as any)(),
    size: "md",
    style: (Te as any).body2,
    title: (d as any)({
      id: "yT3Jyn"
    }),
    type: "button",
    variant: "secondary",
    children: ((i as any).jsx as any)(nt, {
      children: ((i as any).jsx as any)(M, {
        id: "FXpklv"
      })
    })
  }) : null), (e as any)[57] = d, (e as any)[58] = g, (e as any)[59] = c, (e as any)[60] = a, (e as any)[61] = s, (e as any)[62] = me, (e as any)[63] = _, (e as any)[64] = xe) : xe = (e as any)[64];
  const ve: any = xe;
  let ae: any;
  if ((me as any) != (null as any) && !B) ae = me;else if (S && oe && !B) {
    let u: any;
    ((e as any)[65] as any) !== (d as any) ? (u = (d as any)({
      id: "nnJerG"
    }), (e as any)[65] = d, (e as any)[66] = u) : u = (e as any)[66];
    const q: any = !y;
    let v: any;
    ((e as any)[67] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = (): any => (U as any)({
      kind: "choice"
    }), (e as any)[67] = v) : v = (e as any)[67];
    let ye: any;
    ((e as any)[68] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ye = [(Te as any).body2, (Ie as any).settingsConfirmAction, (Ie as any).updateWeakBorder], (e as any)[68] = ye) : ye = (e as any)[68];
    let be: any;
    ((e as any)[69] as any) !== (s as any) ? (be = s ? ((i as any).jsx as any)(M, {
      id: "Jqe+Dc"
    }) : ((i as any).jsx as any)(M, {
      id: "EkH9pt"
    }), (e as any)[69] = s, (e as any)[70] = be) : be = (e as any)[70];
    let _e: any;
    ((e as any)[71] as any) !== (u as any) || ((e as any)[72] as any) !== (q as any) || ((e as any)[73] as any) !== (be as any) ? (_e = ((i as any).jsx as any)(Be, {
      "aria-label": u,
      className: "sand-settings-reset",
      disabled: q,
      onClick: v,
      size: "md",
      style: ye,
      variant: "secondary",
      children: be
    }), (e as any)[71] = u, (e as any)[72] = q, (e as any)[73] = be, (e as any)[74] = _e) : _e = (e as any)[74], ae = _e;
  } else {
    let u: any;
    ((e as any)[75] as any) !== (d as any) ? (u = (d as any)({
      id: "nnJerG"
    }), (e as any)[75] = d, (e as any)[76] = u) : u = (e as any)[76];
    const q: any = c || !oe || a;
    let v: any;
    ((e as any)[77] as any) !== (d as any) ? (v = (d as any)({
      id: "EkH9pt"
    }), (e as any)[77] = d, (e as any)[78] = v) : v = (e as any)[78];
    let ye: any;
    ((e as any)[79] as any) !== (d as any) ? (ye = (d as any)({
      id: "Jqe+Dc"
    }), (e as any)[79] = d, (e as any)[80] = ye) : ye = (e as any)[80];
    let be: any;
    ((e as any)[81] as any) !== (s as any) || ((e as any)[82] as any) !== (W as any) || ((e as any)[83] as any) !== (u as any) || ((e as any)[84] as any) !== (q as any) || ((e as any)[85] as any) !== (v as any) || ((e as any)[86] as any) !== (ye as any) ? (be = ((i as any).jsx as any)(Xe, {
      ariaLabel: u,
      disabled: q,
      idleLabel: v,
      isPending: s,
      onConfirm: W,
      pendingLabel: ye
    }), (e as any)[81] = s, (e as any)[82] = W, (e as any)[83] = u, (e as any)[84] = q, (e as any)[85] = v, (e as any)[86] = ye, (e as any)[87] = be) : be = (e as any)[87];
    const _e: any = be;
    if ((P as any) === ("busy" as any) && !x && !c && (H as any) != (null as any)) {
      const Ze: any = (d as any)({
        id: "8AXB2Z",
        values: {
          0: (H as any).name
        }
      });
      let qe: any;
      ((e as any)[88] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (qe = {
        className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-ehausa"
      }, (e as any)[88] = qe) : qe = (e as any)[88];
      const Ge: any = (): any => {
        ((fe as any).interruptAgentRun as any)({
          agentId: (H as any).id
        });
      };
      let ze: any;
      ((e as any)[89] as any) !== (H as any) || ((e as any)[90] as any) !== (Ze as any) || ((e as any)[91] as any) !== (Ge as any) ? (ze = ((i as any).jsx as any)(Xe, {
        ariaLabel: Ze,
        idleLabel: Ze,
        isPending: !1,
        onConfirm: Ge
      }, (H as any).id), (e as any)[89] = H, (e as any)[90] = Ze, (e as any)[91] = Ge, (e as any)[92] = ze) : ze = (e as any)[92];
      let Me: any;
      ((e as any)[93] as any) !== (ze as any) || ((e as any)[94] as any) !== (_e as any) ? (Me = ((i as any).jsxs as any)("div", {
        ...qe,
        children: [ze, _e]
      }), (e as any)[93] = ze, (e as any)[94] = _e, (e as any)[95] = Me) : Me = (e as any)[95], ae = Me;
    } else ae = _e;
  }
  let ge: any = null;
  if (c) {
    let u: any;
    ((e as any)[96] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = ((i as any).jsx as any)(Le, {
      children: ((i as any).jsx as any)(M, {
        id: "OY2DWP"
      })
    }), (e as any)[96] = u) : u = (e as any)[96], ge = u;
  } else if (!m) {
    let u: any;
    ((e as any)[97] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = ((i as any).jsx as any)(Le, {
      children: ((i as any).jsx as any)(M, {
        id: "J8tdjR"
      })
    }), (e as any)[97] = u) : u = (e as any)[97], ge = u;
  }
  let Se: any;
  ((e as any)[98] as any) !== (d as any) ? (Se = (d as any)({
    id: "iXLVub"
  }), (e as any)[98] = d, (e as any)[99] = Se) : Se = (e as any)[99];
  let ce: any;
  ((e as any)[100] as any) !== (w as any) || ((e as any)[101] as any) !== (z as any) || ((e as any)[102] as any) !== (ve as any) || ((e as any)[103] as any) !== (ae as any) || ((e as any)[104] as any) !== (Q as any) || ((e as any)[105] as any) !== (te as any) ? (ce = w ? ((i as any).jsxs as any)("div", {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1oot3zn sand-1t8xvyj sand-1n9uuka sand-usxwy5 sand-cssynl sand-1xr8qbc sand-jodmca",
    id: (qt as any)("update-computer"),
    children: [((i as any).jsxs as any)("div", {
      className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-137clkk sand-euugli",
      children: [((i as any).jsxs as any)("div", {
        className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1jnr06f sand-euugli",
        children: [((i as any).jsx as any)(de, {
          as: "span",
          color: "primary",
          size: "md",
          children: ((i as any).jsx as any)(M, {
            id: "nnJerG"
          })
        }), ((i as any).jsx as any)(Jt, {
          anchor: "update-computer"
        })]
      }), ((i as any).jsx as any)(Le, {
        children: te
      })]
    }), ((i as any).jsx as any)(rt, {
      action: ve
    }), z]
  }) : ((i as any).jsx as any)(Oe, {
    anchorId: "update-computer",
    description: te,
    extraCopy: Q,
    labelFocusRef: r,
    variant: "card",
    children: ae
  }), (e as any)[100] = w, (e as any)[101] = z, (e as any)[102] = ve, (e as any)[103] = ae, (e as any)[104] = Q, (e as any)[105] = te, (e as any)[106] = ce) : ce = (e as any)[106];
  let re: any;
  ((e as any)[107] as any) !== (d as any) ? (re = (d as any)({
    id: "xJKvbI"
  }), (e as any)[107] = d, (e as any)[108] = re) : re = (e as any)[108];
  const Pe: any = ge;
  let ue: any;
  ((e as any)[109] as any) !== (d as any) ? (ue = (d as any)({
    id: "FB/gHq"
  }), (e as any)[109] = d, (e as any)[110] = ue) : ue = (e as any)[110];
  const Re: any = !m || c || s || a;
  let ie: any;
  ((e as any)[111] as any) !== (le as any) ? (ie = (): any => {
    (le as any)();
  }, (e as any)[111] = le, (e as any)[112] = ie) : ie = (e as any)[112];
  let Ue: any;
  ((e as any)[113] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ue = [(Te as any).body2, (Ie as any).settingsConfirmAction], (e as any)[113] = Ue) : Ue = (e as any)[113];
  let Ce: any;
  ((e as any)[114] as any) !== (d as any) || ((e as any)[115] as any) !== (a as any) ? (Ce = (d as any)(a ? {
    id: "xRPBky"
  } : {
    id: "OfhWJH"
  }), (e as any)[114] = d, (e as any)[115] = a, (e as any)[116] = Ce) : Ce = (e as any)[116];
  let Ne: any;
  ((e as any)[117] as any) !== (ue as any) || ((e as any)[118] as any) !== (Re as any) || ((e as any)[119] as any) !== (ie as any) || ((e as any)[120] as any) !== (Ce as any) ? (Ne = ((i as any).jsx as any)(Be, {
    "aria-label": ue,
    className: "sand-settings-reset",
    disabled: Re,
    onClick: ie,
    sentiment: "danger",
    size: "md",
    style: Ue,
    type: "button",
    variant: "primary",
    children: Ce
  }), (e as any)[117] = ue, (e as any)[118] = Re, (e as any)[119] = ie, (e as any)[120] = Ce, (e as any)[121] = Ne) : Ne = (e as any)[121];
  let we: any;
  ((e as any)[122] as any) !== (ge as any) || ((e as any)[123] as any) !== (re as any) || ((e as any)[124] as any) !== (Ne as any) ? (we = ((i as any).jsx as any)(Oe, {
    anchorId: "reset-computer",
    description: re,
    extraCopy: Pe,
    variant: "card",
    children: Ne
  }), (e as any)[122] = ge, (e as any)[123] = re, (e as any)[124] = Ne, (e as any)[125] = we) : we = (e as any)[125];
  let Ee: any;
  ((e as any)[126] as any) !== (Se as any) || ((e as any)[127] as any) !== (ce as any) || ((e as any)[128] as any) !== (we as any) ? (Ee = ((i as any).jsxs as any)(Ve, {
    title: Se,
    children: [ce, we]
  }), (e as any)[126] = Se, (e as any)[127] = ce, (e as any)[128] = we, (e as any)[129] = Ee) : Ee = (e as any)[129];
  let De: any;
  ((e as any)[130] as any) !== (y as any) || ((e as any)[131] as any) !== (S as any) || ((e as any)[132] as any) !== (k as any) || ((e as any)[133] as any) !== (W as any) || ((e as any)[134] as any) !== (A as any) ? (De = S && (A as any) != (null as any) ? ((i as any).jsx as any)(at, {
    onClose: (): any => (U as any)(null),
    onReschedule: (): any => (U as any)({
      kind: "reschedule"
    }),
    onSchedule: (): any => (U as any)({
      kind: "schedule"
    }),
    onUpdateNow: (): any => {
      ((A as any).kind as any) !== ("choice" as any) || !y || ((U as any)(null), (W as any)());
    },
    schedule: k,
    state: A,
    updateNowEnabled: y
  }) : null, (e as any)[130] = y, (e as any)[131] = S, (e as any)[132] = k, (e as any)[133] = W, (e as any)[134] = A, (e as any)[135] = De) : De = (e as any)[135];
  let He: any;
  return ((e as any)[136] as any) !== (Ee as any) || ((e as any)[137] as any) !== (De as any) ? (He = ((i as any).jsxs as any)((i as any).Fragment, {
    children: [Ee, De]
  }), (e as any)[136] = Ee, (e as any)[137] = De, (e as any)[138] = He) : He = (e as any)[138], He;
}
function us(this: any, t: any): any {
  return (t as any) + (1 as any);
}
function mt(this: any): any {
  (mt as any).d = 1225;
  const t: any = ((he as any).c as any)(15),
    e: any = (Mt as any)();
  let s: any, a: any;
  ((t as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ($e as any)("sand-settings-updates-stack", "sand-9f619 sand-78zum5 sand-dt5ytf sand-3qzy4x"), a = ((i as any).jsx as any)(ct, {}), (t as any)[0] = s, (t as any)[1] = a) : (s = (t as any)[0], a = (t as any)[1]);
  let o: any;
  return ((t as any)[2] as any) !== ((e as any).busyOneClickEnabled as any) || ((t as any)[3] as any) !== ((e as any).canResetBox as any) || ((t as any)[4] as any) !== ((e as any).canUpdateBaseline as any) || ((t as any)[5] as any) !== ((e as any).canUpdateBox as any) || ((t as any)[6] as any) !== ((e as any).isBoxUpToDate as any) || ((t as any)[7] as any) !== ((e as any).isDevBuild as any) || ((t as any)[8] as any) !== ((e as any).isRebuildBlocked as any) || ((t as any)[9] as any) !== ((e as any).isResetBoxPending as any) || ((t as any)[10] as any) !== ((e as any).isUpdateBoxPending as any) || ((t as any)[11] as any) !== ((e as any).onResetBox as any) || ((t as any)[12] as any) !== ((e as any).onUpdateBox as any) || ((t as any)[13] as any) !== ((e as any).workingAgentNames as any) ? (o = ((i as any).jsx as any)(Gt, {
    children: ((i as any).jsxs as any)("div", {
      className: s,
      children: [a, ((i as any).jsx as any)(ut, {
        busyOneClickEnabled: (e as any).busyOneClickEnabled,
        canResetBox: (e as any).canResetBox,
        canUpdateBaseline: (e as any).canUpdateBaseline,
        canUpdateBox: (e as any).canUpdateBox,
        isBoxUpToDate: (e as any).isBoxUpToDate,
        isDevBuild: (e as any).isDevBuild,
        isRebuildBlocked: (e as any).isRebuildBlocked,
        isResetBoxPending: (e as any).isResetBoxPending,
        isUpdateBoxPending: (e as any).isUpdateBoxPending,
        onResetBox: (e as any).onResetBox,
        onUpdateBox: (e as any).onUpdateBox,
        workingAgentNames: (e as any).workingAgentNames
      })]
    })
  }), (t as any)[2] = (e as any).busyOneClickEnabled, (t as any)[3] = (e as any).canResetBox, (t as any)[4] = (e as any).canUpdateBaseline, (t as any)[5] = (e as any).canUpdateBox, (t as any)[6] = (e as any).isBoxUpToDate, (t as any)[7] = (e as any).isDevBuild, (t as any)[8] = (e as any).isRebuildBlocked, (t as any)[9] = (e as any).isResetBoxPending, (t as any)[10] = (e as any).isUpdateBoxPending, (t as any)[11] = (e as any).onResetBox, (t as any)[12] = (e as any).onUpdateBox, (t as any)[13] = (e as any).workingAgentNames, (t as any)[14] = o) : o = (t as any)[14], o;
}
function fs(this: any, t: any): any {
  (fs as any).d = 1226;
  const e: any = ((he as any).c as any)(3),
    {
      params: s
    }: any = t,
    a: any = (s as any).focusSetting ?? null;
  let o: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = ((i as any).jsx as any)(mt, {}), (e as any)[0] = o) : o = (e as any)[0];
  let l: any;
  return ((e as any)[1] as any) !== (a as any) ? (l = ((i as any).jsx as any)(vt, {
    focus: a,
    children: o
  }), (e as any)[1] = a, (e as any)[2] = l) : l = (e as any)[2], l;
}
export { fs as default };
//# debugId=cd0964d1-11ac-4a40-a773-e357dbfe8d5e
