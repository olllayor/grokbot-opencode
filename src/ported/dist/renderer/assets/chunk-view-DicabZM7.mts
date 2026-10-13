declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "533e1944-fdd0-44d5-914a-1f7a3f476815", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-533e1944-fdd0-44d5-914a-1f7a3f476815");
  } catch (e: any) {}
} as any)();
import { c as _e, u as Ie, j as g, T as ze } from "./index.eager-vendor-Qbf9YA6n.js";
import { W as We, E as Be, br as Ae, b9 as Ue, an as Ye, ah as Ke, a5 as Ze, a6 as Qe } from "./index-ZYxf-aBb.js";
import { aY as Xe, i as Je } from "./index.eager-platform-Dcfeegfw.js";
import { bh as et, bt as tt, eG as nt, bA as st, b7 as at, c1 as Se, b9 as it, eH as lt, bT as rt, eI as dt, V as ot, bB as W, eJ as ct } from "./index.eager-app-Cj5f8Gby.js";
import { L as ut } from "./chunk-link-brand-logo-zFXjq3li.js";
import "./index.eager-common-CdCvBQNJ.js";
const fe: any = {
  pickerPopupHuggingRows: {
    k7Eaqz: "sand-80t9vs",
    $$css: !0
  },
  pickerTrigger: {
    kZKoxP: "sand-10w6t97",
    kOIVth: "sand-167g77z",
    kLKAdn: "sand-exx8yu",
    kGO01o: "sand-18d9i69",
    kZCmMZ: "sand-1g0dm76",
    kwRFfy: "sand-2vl965",
    kaIpWk: "sand-ur7f20",
    kGuDYH: "sand-1wm8ruf",
    kLWn49: "sand-spwq11",
    $$css: !0
  },
  pickerLabel: {
    kMv6JI: "sand-mpsg8l",
    kcqcaj: "sand-ss6m8b",
    $$css: !0
  },
  note: {
    k7Eaqz: "sand-euugli",
    kHjlTd: "sand-j0a0fe",
    $$css: !0
  }
};
function ft(this: any, s: any): any {
  const e: any = (et as any)(s);
  if ((e?.needsAuth as any) === (!0 as any)) return {
    kind: "needs-auth"
  };
  if ((e as any) != (null as any) && (((e as any).paymentMethods as any).length as any) > (0 as any)) return {
    kind: "ready",
    paymentMethods: (e as any).paymentMethods,
    unavailableCount: (e as any).unavailableCount
  };
  switch ((s as any).status) {
    case "loading":
      return {
        kind: "loading"
      };
    case "ready":
      return {
        kind: "empty",
        unavailableCount: e?.unavailableCount ?? 0
      };
    case "empty":
    case "unavailable":
    case "failed":
      return {
        kind: "failed"
      };
  }
}
function pt(this: any, s: any): any {
  return (((s as any).find as any)((e: any): any => (e as any).isDefault) ?? (s as any)[0])?.id;
}
function mt(this: any, s: any, e: any): any {
  return (e as any) !== (void 0 as any) && ((s as any).some as any)((c: any): any => ((c as any).id as any) === (e as any)) ? e : (pt as any)(s);
}
function kt(this: any, s: any, e: any): any {
  const n: any = (((s as any).name as any).length as any) > (0 as any) ? (s as any).name : e;
  return ((s as any).last4 as any) === (void 0 as any) ? n : `${n} ···· ${(s as any).last4}`;
}
function Re(this: any, s: any): any {
  (Re as any).d = 578;
  const e: any = ((_e as any).c as any)(33),
    {
      view: n,
      selectedId: c,
      onSelect: o,
      disabled: r,
      onRetry: u
    }: any = s,
    {
      _: a
    }: any = (Ie as any)();
  if (((n as any).kind as any) !== ("ready" as any)) {
    let i: any;
    if (((n as any).kind as any) === ("loading" as any)) {
      let p: any;
      ((e as any)[0] as any) !== (a as any) ? (p = (a as any)({
        id: "QnXQSv"
      }), (e as any)[0] = a, (e as any)[1] = p) : p = (e as any)[1], i = p;
    } else if (((n as any).kind as any) === ("needs-auth" as any)) {
      let p: any;
      ((e as any)[2] as any) !== (a as any) ? (p = (a as any)({
        id: "62dBHV"
      }), (e as any)[2] = a, (e as any)[3] = p) : p = (e as any)[3], i = p;
    } else if (((n as any).kind as any) === ("empty" as any)) {
      let p: any;
      ((e as any)[4] as any) !== (a as any) || ((e as any)[5] as any) !== ((n as any).unavailableCount as any) ? (p = ((n as any).unavailableCount as any) > (0 as any) ? (a as any)({
        id: "dYQ/0d"
      }) : (a as any)({
        id: "4pRpF4"
      }), (e as any)[4] = a, (e as any)[5] = (n as any).unavailableCount, (e as any)[6] = p) : p = (e as any)[6], i = p;
    } else {
      let p: any;
      ((e as any)[7] as any) !== (a as any) ? (p = (a as any)({
        id: "QTWmrb"
      }), (e as any)[7] = a, (e as any)[8] = p) : p = (e as any)[8], i = p;
    }
    let h: any;
    ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = {
      className: "sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-1jnr06f sand-h8yej3 sand-euugli sand-12nagc"
    }, (e as any)[9] = h) : h = (e as any)[9];
    let O: any;
    ((e as any)[10] as any) !== (i as any) ? (O = ((g as any).jsx as any)(Xe, {
      color: "tertiary",
      rootStyle: (fe as any).note,
      size: "md",
      children: i
    }), (e as any)[10] = i, (e as any)[11] = O) : O = (e as any)[11];
    let C: any;
    ((e as any)[12] as any) !== (a as any) || ((e as any)[13] as any) !== (u as any) || ((e as any)[14] as any) !== ((n as any).kind as any) ? (C = ((n as any).kind as any) === ("loading" as any) ? null : ((g as any).jsx as any)("button", {
      onClick: u,
      type: "button",
      className: "sand-1717udv sand-c342km sand-ng3xce sand-jbqb8w sand-jb2p0i sand-1wm8ruf sand-frs9s4 sand-19aaqeu sand-7gh5u8 sand-vvdyaj sand-ujl8zx sand-1ypdohk sand-1t137rt",
      children: (a as any)({
        id: "KDw4GX"
      })
    }), (e as any)[12] = a, (e as any)[13] = u, (e as any)[14] = (n as any).kind, (e as any)[15] = C) : C = (e as any)[15];
    let T: any;
    return ((e as any)[16] as any) !== (O as any) || ((e as any)[17] as any) !== (C as any) ? (T = ((g as any).jsxs as any)("div", {
      ...h,
      children: [O, C]
    }), (e as any)[16] = O, (e as any)[17] = C, (e as any)[18] = T) : T = (e as any)[18], T;
  }
  let v: any;
  if (((e as any)[19] as any) !== (a as any) || ((e as any)[20] as any) !== ((n as any).paymentMethods as any)) {
    const i: any = (a as any)({
      id: "kryGs+"
    });
    v = (((n as any).paymentMethods as any).map as any)((h: any): any => ({
      value: (h as any).id,
      label: (kt as any)(h, i),
      ...((h as any).isDefault ? {
        labelMeta: (a as any)({
          id: "ovBPCi"
        })
      } : {})
    })), (e as any)[19] = a, (e as any)[20] = (n as any).paymentMethods, (e as any)[21] = v;
  } else v = (e as any)[21];
  const E: any = v;
  let b: any;
  ((e as any)[22] as any) !== (a as any) ? (b = (a as any)({
    id: "ENEPLY"
  }), (e as any)[22] = a, (e as any)[23] = b) : b = (e as any)[23];
  let _: any;
  ((e as any)[24] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (_ = ((g as any).jsx as any)(We, {
    "aria-hidden": !0,
    name: "credit-card",
    size: "sm"
  }), (e as any)[24] = _) : _ = (e as any)[24];
  let S: any;
  ((e as any)[25] as any) !== (o as any) ? (S = (i: any): any => {
    (i as any) !== (null as any) && (o as any)(i);
  }, (e as any)[25] = o, (e as any)[26] = S) : S = (e as any)[26];
  const f: any = c ?? null;
  let N: any;
  return ((e as any)[27] as any) !== (r as any) || ((e as any)[28] as any) !== (E as any) || ((e as any)[29] as any) !== (b as any) || ((e as any)[30] as any) !== (S as any) || ((e as any)[31] as any) !== (f as any) ? (N = ((g as any).jsx as any)(Be, {
    "aria-label": b,
    contentStyle: (fe as any).pickerPopupHuggingRows,
    disabled: r,
    labelStyle: (fe as any).pickerLabel,
    leading: _,
    onValueChange: S,
    options: E,
    rootStyle: (fe as any).pickerTrigger,
    size: "lg",
    value: f,
    variant: "secondary"
  }), (e as any)[27] = r, (e as any)[28] = E, (e as any)[29] = b, (e as any)[30] = S, (e as any)[31] = f, (e as any)[32] = N) : N = (e as any)[32], N;
}
function yt(this: any, s: any, e: any): any {
  return (s as any) !== ("pending" as any) ? {
    status: s,
    answeredHere: !1,
    finishesInLink: !1
  } : (e as any) === (void 0 as any) ? {
    status: "pending",
    answeredHere: !1,
    finishesInLink: !1
  } : (e as any) === ("approved-in-link" as any) ? {
    status: "approved",
    answeredHere: !0,
    finishesInLink: !0
  } : {
    status: e,
    answeredHere: !0,
    finishesInLink: !1
  };
}
const vt: any = {
    id: "rSS2pH"
  },
  bt: any = {
    id: "iTb4WV"
  },
  Ne: any = {
    id: "diyr2o"
  },
  Pe: any = {
    id: "7+ZMvO"
  },
  ht: any = {
    id: "Py8RuH"
  },
  gt: any = {
    id: "ncQUmz"
  },
  Et: any = {
    id: "5RxLlA"
  },
  Ct: any = {
    id: "UzGiVD"
  },
  xt: any = {
    id: "cg/3Wz"
  },
  je: any = {
    id: "WL9+S4"
  },
  Te: any = {
    id: "hQwopa"
  },
  St: any = {
    id: "cclgb2"
  },
  Le: string = "grok_bot_spend_approval_passkey";
async function Nt(this: any, s: any, e: any): Promise<any> {
  try {
    return await ((s as any).run as any)({
      ceremonyId: (e as any).ceremonyId,
      path: (e as any).ceremonyPath,
      token: (e as any).ceremonyToken,
      challengeId: (e as any).challengeId
    }), {
      confirmed: !0
    };
  } catch (n: any) {
    return {
      confirmed: !1,
      cause: n
    };
  }
}
function Tt(this: any, s: any): any {
  switch ((ct as any)(s)) {
    case "cancelled":
    case "expired":
      return !0;
    case "failed":
    case "unavailable":
    case null:
      return !1;
  }
}
async function It(this: any, s: any): Promise<any> {
  if ((s as any) === (null as any)) return !1;
  try {
    return await (s as any)();
  } catch (e: any) {
    return (W as any)(e), !1;
  }
}
const _t: any = [],
  Ot: any = /^[A-Za-z]{3}$/;
function we(this: any, s: any, e: any, n: any): any {
  const c: any = (s as any) / (100 as any);
  return ((Ot as any).test as any)(e) ? ((new ((Intl as any).NumberFormat as any)(n, {
    style: "currency",
    currency: ((e as any).toUpperCase as any)()
  }) as any).format as any)(c) : `${((c as any).toFixed as any)(2)} ${((e as any).toUpperCase as any)()}`;
}
function Mt(this: any, s: any, e: any): any {
  switch (e) {
    case "pending":
      return;
    case "approved":
      return {
        kind: "success",
        label: (s as any)({
          id: "NxjG+h"
        })
      };
    case "denied":
      return {
        kind: "danger",
        label: (s as any)({
          id: "ztGxi6"
        })
      };
    case "failed":
      return {
        kind: "danger",
        label: (s as any)({
          id: "7Bj3x9"
        })
      };
    case "expired":
      return {
        kind: "muted",
        label: (s as any)({
          id: "M1RnFv"
        })
      };
  }
}
function Pt(this: any, s: any, e: any, n: any): any {
  switch ((e as any).status) {
    case "pending":
      return;
    case "approved":
      return (e as any).answeredHere ? (s as any)((e as any).finishesInLink ? ht : gt) : void 0;
    case "denied":
      return (s as any)(Et);
    case "expired":
      return (s as any)(Ct);
    case "failed":
      return (n as any).failureReason ?? (s as any)(xt);
  }
}
function He(this: any, s: any): any {
  (He as any).d = 576;
  const e: any = ((_e as any).c as any)(127),
    {
      entryId: n,
      approval: c,
      agentId: o
    }: any = s,
    {
      i18n: r,
      _: u
    }: any = (Ie as any)(),
    {
      _: a
    }: any = (Ie as any)(),
    {
      beginSpendApproval: v,
      resolveVirtualCardApproval: E
    }: any = (tt as any)(),
    b: any = (nt as any)(),
    _: any = (Ae as any)(),
    S: any = (st as any)(),
    {
      localAnswers: f
    }: any = (at as any)();
  let N: any;
  ((e as any)[0] as any) !== (o as any) || ((e as any)[1] as any) !== (n as any) ? (N = {
    agentId: o,
    entryId: n
  }, (e as any)[0] = o, (e as any)[1] = n, (e as any)[2] = N) : N = (e as any)[2];
  const i: any = (Se as any)("virtual-card-submit", N);
  let h: any;
  ((e as any)[3] as any) !== (o as any) || ((e as any)[4] as any) !== (n as any) ? (h = {
    agentId: o,
    entryId: n
  }, (e as any)[3] = o, (e as any)[4] = n, (e as any)[5] = h) : h = (e as any)[5];
  const O: any = (Se as any)("virtual-card", h),
    C: any = (yt as any)((c as any).status, O),
    T: any = ((C as any).status as any) === ("pending" as any),
    p: any = (i as any) != (null as any) && ((i as any).kind as any) !== ("failed" as any),
    De: any = (it as any)(Le),
    Oe: any = (lt as any)(),
    pe: any = (rt as any)(),
    me: any = T && !p && Oe;
  let B: any;
  ((e as any)[6] as any) !== (pe as any) || ((e as any)[7] as any) !== (me as any) ? (B = (): any => (me && (pe as any)(Le), jt), (e as any)[6] = pe, (e as any)[7] = me, (e as any)[8] = B) : B = (e as any)[8], (Je as any)(B);
  const j: any = T && !p && !(De && Oe) && (o as any) != (null as any),
    A: any = (dt as any)(T),
    M: any = (ft as any)((A as any).state);
  let U: any;
  ((e as any)[9] as any) !== (o as any) || ((e as any)[10] as any) !== (n as any) ? (U = {
    agentId: o,
    entryId: n
  }, (e as any)[9] = o, (e as any)[10] = n, (e as any)[11] = U) : U = (e as any)[11];
  const Ge: any = (Se as any)("virtual-card-payment-method", U),
    x: any = (mt as any)(((M as any).kind as any) === ("ready" as any) ? (M as any).paymentMethods : _t, Ge);
  let Y: any;
  ((e as any)[12] as any) !== (n as any) ? (Y = (t: any): any => ({
    agentId: t,
    entryId: n
  }), (e as any)[12] = n, (e as any)[13] = Y) : Y = (e as any)[13];
  const m: any = Y;
  let K: any;
  ((e as any)[14] as any) !== (o as any) || ((e as any)[15] as any) !== (f as any) || ((e as any)[16] as any) !== (m as any) ? (K = (t: any): any => {
    (o as any) != (null as any) && ((f as any).record as any)("virtual-card-payment-method", (m as any)(o), t);
  }, (e as any)[14] = o, (e as any)[15] = f, (e as any)[16] = m, (e as any)[17] = K) : K = (e as any)[17];
  const ke: any = K;
  let Z: any;
  ((e as any)[18] as any) !== (f as any) || ((e as any)[19] as any) !== (m as any) ? (Z = (t: any, l: any): any => {
    ((f as any).record as any)("virtual-card-submit", (m as any)(t), l);
  }, (e as any)[18] = f, (e as any)[19] = m, (e as any)[20] = Z) : Z = (e as any)[20];
  const d: any = Z;
  let Q: any;
  ((e as any)[21] as any) !== (f as any) || ((e as any)[22] as any) !== (m as any) ? (Q = (t: any, l: any): any => {
    ((f as any).record as any)("virtual-card", (m as any)(t), l), ((f as any).clear as any)("virtual-card-submit", (m as any)(t));
  }, (e as any)[21] = f, (e as any)[22] = m, (e as any)[23] = Q) : Q = (e as any)[23];
  const I: any = Q;
  let X: any;
  ((e as any)[24] as any) !== ((c as any).requestId as any) || ((e as any)[25] as any) !== (n as any) || ((e as any)[26] as any) !== (r as any) || ((e as any)[27] as any) !== (S as any) || ((e as any)[28] as any) !== (E as any) || ((e as any)[29] as any) !== (x as any) || ((e as any)[30] as any) !== (d as any) || ((e as any)[31] as any) !== (I as any) ? (X = async (t: any, l: any, k: any): Promise<any> => {
    const y: any = await (E as any)({
      entryId: n,
      requestId: (c as any).requestId,
      resolution: l,
      agentId: t,
      ...((l as any) === ("approved" as any) && (x as any) !== (void 0 as any) ? {
        paymentMethodId: x
      } : {}),
      ...((k as any) === (void 0 as any) ? {} : {
        attestation: k
      })
    });
    switch ((y as any).status) {
      case "unreachable":
        return (d as any)(t, {
          kind: "failed",
          note: ((r as any)._ as any)(Ne)
        }), "settled";
      case "unanswered":
        return (d as any)(t, {
          kind: "failed",
          note: ((r as any)._ as any)(Pe)
        }), "settled";
      case "approved":
        return ((y as any).approvalUrl as any) === (void 0 as any) ? ((I as any)(t, "approved"), "settled") : ((I as any)(t, "approved-in-link"), (((S as any)((y as any).approvalUrl) as any).catch as any)(W), "settled");
      case "denied":
        return (I as any)(t, (y as any).status), "settled";
      case "needs_auth":
        return (d as any)(t, {
          kind: "failed",
          note: ((r as any)._ as any)(vt)
        }), "settled";
      case "needs_enrollment":
        return "needs_enrollment";
      case "needs_passkey":
        return (d as any)(t, {
          kind: "failed",
          note: ((r as any)._ as any)(bt)
        }), "settled";
      case "failed":
        return (d as any)(t, {
          kind: "failed",
          note: (y as any).message
        }), "settled";
      case "expired":
        return (I as any)(t, (y as any).status), "settled";
    }
  }, (e as any)[24] = (c as any).requestId, (e as any)[25] = n, (e as any)[26] = r, (e as any)[27] = S, (e as any)[28] = E, (e as any)[29] = x, (e as any)[30] = d, (e as any)[31] = I, (e as any)[32] = X) : X = (e as any)[32];
  const P: any = X;
  let J: any;
  ((e as any)[33] as any) !== ((c as any).requestId as any) || ((e as any)[34] as any) !== (v as any) || ((e as any)[35] as any) !== (n as any) || ((e as any)[36] as any) !== (r as any) || ((e as any)[37] as any) !== (f as any) || ((e as any)[38] as any) !== (b as any) || ((e as any)[39] as any) !== (P as any) || ((e as any)[40] as any) !== (x as any) || ((e as any)[41] as any) !== (d as any) || ((e as any)[42] as any) !== (I as any) || ((e as any)[43] as any) !== (m as any) ? (J = async (t: any): Promise<any> => {
    (d as any)(t, {
      kind: "submitting"
    });
    const l: any = await (v as any)({
      entryId: n,
      agentId: t,
      requestId: (c as any).requestId,
      ...((x as any) === (void 0 as any) ? {} : {
        paymentMethodId: x
      })
    });
    switch ((l as any).status) {
      case "unreachable":
        return (d as any)(t, {
          kind: "failed",
          note: ((r as any)._ as any)(Ne)
        }), "settled";
      case "unanswered":
        return (d as any)(t, {
          kind: "failed",
          note: ((r as any)._ as any)(Pe)
        }), "settled";
      case "expired":
        return (I as any)(t, (l as any).status), "settled";
      case "needs_enrollment":
        return "needs_enrollment";
      case "not_required":
        return await (P as any)(t, "approved", void 0);
      case "challenge":
        {
          (d as any)(t, {
            kind: "confirming",
            ceremonyId: (l as any).ceremonyId
          });
          const k: any = await (Nt as any)(b, l),
            y: any = ((f as any).get as any)("virtual-card-submit", (m as any)(t));
          return (y?.kind as any) === ("cancelling" as any) && ((y as any).ceremonyId as any) === ((l as any).ceremonyId as any) ? ((d as any)(t, {
            kind: "failed",
            note: ((r as any)._ as any)(je)
          }), "settled") : (k as any).confirmed ? ((d as any)(t, {
            kind: "submitting"
          }), await (P as any)(t, "approved", {
            challengeId: (l as any).challengeId
          })) : ((Tt as any)((k as any).cause) || (W as any)((k as any).cause), (d as any)(t, {
            kind: "failed",
            note: ((r as any)._ as any)(je)
          }), "settled");
        }
    }
  }, (e as any)[33] = (c as any).requestId, (e as any)[34] = v, (e as any)[35] = n, (e as any)[36] = r, (e as any)[37] = f, (e as any)[38] = b, (e as any)[39] = P, (e as any)[40] = x, (e as any)[41] = d, (e as any)[42] = I, (e as any)[43] = m, (e as any)[44] = J) : J = (e as any)[44];
  const ee: any = J;
  let te: any;
  ((e as any)[45] as any) !== (ee as any) || ((e as any)[46] as any) !== (r as any) || ((e as any)[47] as any) !== (_ as any) || ((e as any)[48] as any) !== (d as any) ? (te = async (t: any): Promise<any> => {
    if (((await (ee as any)(t)) as any) !== ("settled" as any)) {
      if (!(await (It as any)(_))) {
        (d as any)(t, {
          kind: "failed",
          note: ((r as any)._ as any)(Te)
        });
        return;
      }
      ((await (ee as any)(t)) as any) === ("needs_enrollment" as any) && (d as any)(t, {
        kind: "failed",
        note: ((r as any)._ as any)(Te)
      });
    }
  }, (e as any)[45] = ee, (e as any)[46] = r, (e as any)[47] = _, (e as any)[48] = d, (e as any)[49] = te) : te = (e as any)[49];
  const ye: any = te;
  let ne: any;
  ((e as any)[50] as any) !== (r as any) || ((e as any)[51] as any) !== (P as any) || ((e as any)[52] as any) !== (d as any) ? (ne = async (t: any): Promise<any> => {
    (d as any)(t, {
      kind: "submitting"
    }), ((await (P as any)(t, "denied", void 0)) as any) === ("needs_enrollment" as any) && (d as any)(t, {
      kind: "failed",
      note: ((r as any)._ as any)(Te)
    });
  }, (e as any)[50] = r, (e as any)[51] = P, (e as any)[52] = d, (e as any)[53] = ne) : ne = (e as any)[53];
  const ve: any = ne;
  let se: any;
  ((e as any)[54] as any) !== (o as any) || ((e as any)[55] as any) !== (ye as any) || ((e as any)[56] as any) !== (j as any) || ((e as any)[57] as any) !== (ve as any) || ((e as any)[58] as any) !== (r as any) || ((e as any)[59] as any) !== (f as any) || ((e as any)[60] as any) !== (d as any) || ((e as any)[61] as any) !== (m as any) ? (se = (t: any): any => {
    if (!j || (o as any) == (null as any)) return;
    const l: any = o;
    if ((((f as any).get as any)("virtual-card", (m as any)(l)) as any) != (null as any)) return;
    const k: any = ((f as any).get as any)("virtual-card-submit", (m as any)(l));
    (k as any) != (null as any) && ((k as any).kind as any) !== ("failed" as any) || ((((t as any) === ("approved" as any) ? (ye as any)(l) : (ve as any)(l)) as any).catch as any)((y: any): any => {
      (W as any)(y), (((f as any).get as any)("virtual-card", (m as any)(l)) as any) == (null as any) && (d as any)(l, {
        kind: "failed",
        note: ((r as any)._ as any)(Ne)
      });
    });
  }, (e as any)[54] = o, (e as any)[55] = ye, (e as any)[56] = j, (e as any)[57] = ve, (e as any)[58] = r, (e as any)[59] = f, (e as any)[60] = d, (e as any)[61] = m, (e as any)[62] = se) : se = (e as any)[62];
  const L: any = se;
  let ae: any;
  ((e as any)[63] as any) !== (o as any) || ((e as any)[64] as any) !== (b as any) || ((e as any)[65] as any) !== (d as any) || ((e as any)[66] as any) !== (i as any) ? (ae = (): any => {
    (i?.kind as any) !== ("confirming" as any) || (o as any) == (null as any) || ((d as any)(o, {
      kind: "cancelling",
      ceremonyId: (i as any).ceremonyId
    }), ((((b as any).cancel as any)((i as any).ceremonyId) as any).catch as any)(W));
  }, (e as any)[63] = o, (e as any)[64] = b, (e as any)[65] = d, (e as any)[66] = i, (e as any)[67] = ae) : ae = (e as any)[67];
  const be: any = ae,
    Me: any = (we as any)((c as any).amountCents, (c as any).currency, (r as any).locale),
    ie: any = (Mt as any)(a, (C as any).status),
    Ve: any = (c as any).title,
    le: any = (Pt as any)(a, C, c),
    Fe: any = ((C as any).status as any) === ("pending" as any) || ((C as any).status as any) === ("approved" as any);
  let re: any;
  ((e as any)[68] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (re = [], (e as any)[68] = re) : re = (e as any)[68];
  let z: any = re;
  if ((i?.kind as any) === ("confirming" as any) || (i?.kind as any) === ("cancelling" as any)) {
    let t: any;
    ((e as any)[69] as any) !== (u as any) ? (t = (u as any)({
      id: "dEgA5A"
    }), (e as any)[69] = u, (e as any)[70] = t) : t = (e as any)[70];
    const l: any = ((i as any).kind as any) === ("cancelling" as any);
    let k: any;
    ((e as any)[71] as any) !== (be as any) || ((e as any)[72] as any) !== (t as any) || ((e as any)[73] as any) !== (l as any) ? (k = [{
      label: t,
      onClick: be,
      disabled: l
    }], (e as any)[71] = be, (e as any)[72] = t, (e as any)[73] = l, (e as any)[74] = k) : k = (e as any)[74], z = k;
  } else if (T) {
    let t: any;
    ((e as any)[75] as any) !== (u as any) ? (t = (u as any)({
      id: "Z7ZXbT"
    }), (e as any)[75] = u, (e as any)[76] = t) : t = (e as any)[76];
    let l: any;
    ((e as any)[77] as any) !== (L as any) ? (l = (): any => (L as any)("approved"), (e as any)[77] = L, (e as any)[78] = l) : l = (e as any)[78];
    const k: any = !j;
    let y: any;
    ((e as any)[79] as any) !== (t as any) || ((e as any)[80] as any) !== (l as any) || ((e as any)[81] as any) !== (k as any) ? (y = {
      label: t,
      onClick: l,
      disabled: k,
      variant: "primary"
    }, (e as any)[79] = t, (e as any)[80] = l, (e as any)[81] = k, (e as any)[82] = y) : y = (e as any)[82];
    let F: any;
    ((e as any)[83] as any) !== (u as any) ? (F = (u as any)({
      id: "cFCKYZ"
    }), (e as any)[83] = u, (e as any)[84] = F) : F = (e as any)[84];
    let $: any;
    ((e as any)[85] as any) !== (L as any) ? ($ = (): any => (L as any)("denied"), (e as any)[85] = L, (e as any)[86] = $) : $ = (e as any)[86];
    const xe: any = !j;
    let q: any;
    ((e as any)[87] as any) !== (F as any) || ((e as any)[88] as any) !== ($ as any) || ((e as any)[89] as any) !== (xe as any) ? (q = {
      label: F,
      onClick: $,
      disabled: xe
    }, (e as any)[87] = F, (e as any)[88] = $, (e as any)[89] = xe, (e as any)[90] = q) : q = (e as any)[90];
    let ue: any;
    ((e as any)[91] as any) !== (y as any) || ((e as any)[92] as any) !== (q as any) ? (ue = [y, q], (e as any)[91] = y, (e as any)[92] = q, (e as any)[93] = ue) : ue = (e as any)[93], z = ue;
  }
  const he: any = !j;
  let de: any;
  ((e as any)[94] as any) !== (ke as any) || ((e as any)[95] as any) !== (x as any) || ((e as any)[96] as any) !== (he as any) || ((e as any)[97] as any) !== ((A as any).refresh as any) || ((e as any)[98] as any) !== (M as any) ? (de = ((g as any).jsx as any)(Re, {
    disabled: he,
    onRetry: (A as any).refresh,
    onSelect: ke,
    selectedId: x,
    view: M
  }), (e as any)[94] = ke, (e as any)[95] = x, (e as any)[96] = he, (e as any)[97] = (A as any).refresh, (e as any)[98] = M, (e as any)[99] = de) : de = (e as any)[99];
  const oe: any = de,
    ge: any = Ue,
    $e: any = z;
  let w: any;
  ((e as any)[100] as any) !== (u as any) ? (w = (u as any)({
    id: "K1m9nw"
  }), (e as any)[100] = u, (e as any)[101] = w) : w = (e as any)[101];
  let R: any;
  ((e as any)[102] as any) !== (oe as any) || ((e as any)[103] as any) !== ((M as any).kind as any) ? (R = ((M as any).kind as any) === ("ready" as any) ? {
    actionsTrailing: oe
  } : {
    body: oe
  }, (e as any)[102] = oe, (e as any)[103] = (M as any).kind, (e as any)[104] = R) : R = (e as any)[104];
  const Ee: any = Fe ? {
      breakdown: {
        rows: (((c as any).lineItems as any).map as any)((t: any): any => ({
          label: (t as any).label,
          amount: (we as any)((t as any).amountCents, (c as any).currency, (r as any).locale)
        })),
        total: {
          label: (u as any)({
            id: "72c5Qo"
          }),
          amount: Me
        },
        note: ((g as any).jsx as any)(ze, {
          id: "lRHAS0",
          components: {
            0: ((g as any).jsx as any)(ut, {
              heightPx: 14
            }),
            1: ((g as any).jsx as any)(ot, {})
          }
        })
      }
    } : {},
    qe: any = (c as any).context;
  let H: any;
  ((e as any)[105] as any) !== (i as any) ? (H = (i?.kind as any) === ("failed" as any) ? {
    failureNote: (i as any).note
  } : {}, (e as any)[105] = i, (e as any)[106] = H) : H = (e as any)[106];
  let D: any;
  ((e as any)[107] as any) !== (a as any) || ((e as any)[108] as any) !== (i?.kind as any) ? (D = (i?.kind as any) === ("confirming" as any) || (i?.kind as any) === ("cancelling" as any) ? {
    answeredNote: (a as any)(St)
  } : {}, (e as any)[107] = a, (e as any)[108] = i?.kind, (e as any)[109] = D) : D = (e as any)[109];
  let G: any;
  ((e as any)[110] as any) !== (ie as any) ? (G = (ie as any) === (void 0 as any) ? {} : {
    status: ie
  }, (e as any)[110] = ie, (e as any)[111] = G) : G = (e as any)[111];
  let V: any;
  ((e as any)[112] as any) !== (le as any) ? (V = (le as any) === (void 0 as any) ? {} : {
    settledNote: le
  }, (e as any)[112] = le, (e as any)[113] = V) : V = (e as any)[113];
  const Ce: any = (u as any)({
    id: "HcL6sP",
    values: {
      purchase: Ve,
      amount: Me
    }
  });
  let ce: any;
  return ((e as any)[114] as any) !== (ge as any) || ((e as any)[115] as any) !== (z as any) || ((e as any)[116] as any) !== ((c as any).context as any) || ((e as any)[117] as any) !== (n as any) || ((e as any)[118] as any) !== (w as any) || ((e as any)[119] as any) !== (R as any) || ((e as any)[120] as any) !== (Ee as any) || ((e as any)[121] as any) !== (H as any) || ((e as any)[122] as any) !== (D as any) || ((e as any)[123] as any) !== (G as any) || ((e as any)[124] as any) !== (V as any) || ((e as any)[125] as any) !== (Ce as any) ? (ce = ((g as any).jsx as any)(ge, {
    actions: $e,
    ariaLabel: w,
    ...R,
    ...Ee,
    context: qe,
    entryId: n,
    ...H,
    ...D,
    ...G,
    ...V,
    title: Ce
  }), (e as any)[114] = ge, (e as any)[115] = z, (e as any)[116] = (c as any).context, (e as any)[117] = n, (e as any)[118] = w, (e as any)[119] = R, (e as any)[120] = Ee, (e as any)[121] = H, (e as any)[122] = D, (e as any)[123] = G, (e as any)[124] = V, (e as any)[125] = Ce, (e as any)[126] = ce) : ce = (e as any)[126], ce;
}
function jt(this: any): any {}
function Lt(this: any, s: any): any {
  (Lt as any).d = 359;
  const e: any = ((_e as any).c as any)(11),
    {
      entry: n,
      adjacency: c
    }: any = s,
    o: any = (Ye as any)(),
    {
      isReadOnly: r
    }: any = (Ke as any)(),
    u: any = r ? void 0 : o ?? void 0;
  let a: any;
  ((e as any)[0] as any) !== ((n as any).id as any) || ((e as any)[1] as any) !== (((n as any).message as any).approval as any) || ((e as any)[2] as any) !== (u as any) ? (a = ((g as any).jsx as any)(He, {
    agentId: u,
    approval: ((n as any).message as any).approval,
    entryId: (n as any).id
  }), (e as any)[0] = (n as any).id, (e as any)[1] = ((n as any).message as any).approval, (e as any)[2] = u, (e as any)[3] = a) : a = (e as any)[3];
  let v: any;
  ((e as any)[4] as any) !== ((c as any).isGroupStart as any) || ((e as any)[5] as any) !== ((n as any).timestampMs as any) || ((e as any)[6] as any) !== (a as any) ? (v = ((g as any).jsx as any)(Ze, {
    isGroupStart: (c as any).isGroupStart,
    timestampMs: (n as any).timestampMs,
    variant: "widget",
    children: a
  }), (e as any)[4] = (c as any).isGroupStart, (e as any)[5] = (n as any).timestampMs, (e as any)[6] = a, (e as any)[7] = v) : v = (e as any)[7];
  let E: any;
  return ((e as any)[8] as any) !== (n as any) || ((e as any)[9] as any) !== (v as any) ? (E = ((g as any).jsx as any)(Qe, {
    entry: n,
    children: v
  }), (e as any)[8] = n, (e as any)[9] = v, (e as any)[10] = E) : E = (e as any)[10], E;
}
export { Lt as default };
//# debugId=533e1944-fdd0-44d5-914a-1f7a3f476815
