declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "66d1f415-c40b-489b-b862-ed119fbd955d", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-66d1f415-c40b-489b-b862-ed119fbd955d");
  } catch (e: any) {}
} as any)();
import { c as F, j as s, u as D, r as I, T as L } from "./index.eager-vendor-Qbf9YA6n.js";
import { bt as K, eK as O, d0 as G, aZ as N } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { p as A, x as V, an as Q, ah as X } from "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
function P(this: any, j: any): any {
  (P as any).d = 903;
  const e: any = ((F as any).c as any)(16),
    {
      upLabel: a,
      downLabel: i,
      disabled: r,
      onVote: o
    }: any = j,
    y: any = (r as any) === (void 0 as any) ? !1 : r;
  let x: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = {
    className: "sand-3nfvp2 sand-6s0dn4 sand-195vfkc"
  }, (e as any)[0] = x) : x = (e as any)[0];
  let m: any;
  ((e as any)[1] as any) !== (o as any) ? (m = (): any => (o as any)("up"), (e as any)[1] = o, (e as any)[2] = m) : m = (e as any)[2];
  let f: any;
  ((e as any)[3] as any) !== (y as any) || ((e as any)[4] as any) !== (m as any) || ((e as any)[5] as any) !== (a as any) ? (f = ((s as any).jsx as any)(A, {
    "aria-label": a,
    disabled: y,
    icon: "thumbs-up",
    onClick: m,
    shape: "circle",
    size: "sm",
    variant: "ghost"
  }), (e as any)[3] = y, (e as any)[4] = m, (e as any)[5] = a, (e as any)[6] = f) : f = (e as any)[6];
  let d: any;
  ((e as any)[7] as any) !== (o as any) ? (d = (): any => (o as any)("down"), (e as any)[7] = o, (e as any)[8] = d) : d = (e as any)[8];
  let c: any;
  ((e as any)[9] as any) !== (y as any) || ((e as any)[10] as any) !== (i as any) || ((e as any)[11] as any) !== (d as any) ? (c = ((s as any).jsx as any)(A, {
    "aria-label": i,
    disabled: y,
    icon: "thumbs-down",
    onClick: d,
    shape: "circle",
    size: "sm",
    variant: "ghost"
  }), (e as any)[9] = y, (e as any)[10] = i, (e as any)[11] = d, (e as any)[12] = c) : c = (e as any)[12];
  let l: any;
  return ((e as any)[13] as any) !== (f as any) || ((e as any)[14] as any) !== (c as any) ? (l = ((s as any).jsxs as any)("span", {
    ...x,
    children: [f, c]
  }), (e as any)[13] = f, (e as any)[14] = c, (e as any)[15] = l) : l = (e as any)[15], l;
}
const Y: any = [{
  id: "not_what_i_asked",
  label: {
    id: "XeOkNa"
  }
}, {
  id: "inaccurate",
  label: {
    id: "Qk+SyG"
  }
}, {
  id: "low_quality",
  label: {
    id: "9cm/hp"
  }
}, {
  id: "too_slow",
  label: {
    id: "YJPN3F"
  }
}];
function $(this: any, j: any): any {
  ($ as any).d = 904;
  const e: any = ((F as any).c as any)(37),
    {
      draft: a,
      categories: i,
      error: r,
      isSubmitting: o,
      onToggleCategory: y,
      onCommentChange: x,
      onSubmit: m,
      onDismiss: f
    }: any = j,
    d: any = (i as any) === (void 0 as any) ? Y : i,
    {
      i18n: c,
      _: l
    }: any = (D as any)();
  let q: any;
  ((e as any)[0] as any) !== (f as any) ? (q = (n: any): any => {
    n || (f as any)();
  }, (e as any)[0] = f, (e as any)[1] = q) : q = (e as any)[1];
  let S: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (S = ((s as any).jsx as any)((V as any).CloseButton, {}), (e as any)[2] = S) : S = (e as any)[2];
  let R: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (R = ((s as any).jsx as any)((V as any).Header, {
    children: ((s as any).jsx as any)((V as any).Title, {
      children: ((s as any).jsx as any)(L, {
        id: "HHOP3h"
      })
    })
  }), (e as any)[3] = R) : R = (e as any)[3];
  let u: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = {
    className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
  }, (e as any)[4] = u) : u = (e as any)[4];
  let w: any;
  ((e as any)[5] as any) !== (d as any) || ((e as any)[6] as any) !== ((a as any).categories as any) || ((e as any)[7] as any) !== (c as any) || ((e as any)[8] as any) !== (y as any) ? (w = ((d as any).length as any) === (0 as any) ? null : ((s as any).jsx as any)("div", {
    className: "sand-78zum5 sand-1a02dak sand-167g77z",
    children: ((d as any).map as any)((n: any): any => {
      const z: any = (((a as any).categories as any).has as any)((n as any).id);
      return ((I as any).createElement as any)("button", {
        ...({
          0: {
            className: "sand-3nfvp2 sand-6s0dn4 sand-1iorvi4 sand-2vl965 sand-jkvuk6 sand-e2zdcy sand-149ho13 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-tyxrsu sand-jb2p0i sand-1wm8ruf sand-1ypdohk sand-1k57tk5 sand-784prv sand-1t137rt sand-9v5kkp sand-4sht9k sand-1y3gkto sand-ts7igz sand-1firant"
          },
          1: {
            className: "sand-3nfvp2 sand-6s0dn4 sand-1iorvi4 sand-2vl965 sand-jkvuk6 sand-e2zdcy sand-149ho13 sand-qjedn3 sand-1y0btm7 sand-tyxrsu sand-jb2p0i sand-1wm8ruf sand-1ypdohk sand-1k57tk5 sand-784prv sand-1t137rt sand-9v5kkp sand-4sht9k sand-1y3gkto sand-ts7igz sand-1firant sand-luhinc sand-1b7rqjq"
          }
        } as any)[(!!z as any) << (0 as any)],
        "aria-pressed": z,
        key: (n as any).id,
        onClick: (): any => (y as any)((n as any).id),
        type: "button"
      }, ((c as any)._ as any)((n as any).label));
    })
  }), (e as any)[5] = d, (e as any)[6] = (a as any).categories, (e as any)[7] = c, (e as any)[8] = y, (e as any)[9] = w) : w = (e as any)[9];
  let _: any;
  ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (_ = {
    className: "sand-h8yej3 sand-1qafhyn sand-288g5 sand-9f619 sand-1y1aw1k sand-2vl965 sand-wib8y2 sand-e2zdcy sand-ur7f20 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-tyxrsu sand-jb2p0i sand-11wthnw sand-37zpob sand-1k57tk5 sand-784prv sand-1t137rt sand-9v5kkp sand-4sht9k"
  }, (e as any)[10] = _) : _ = (e as any)[10];
  let p: any;
  ((e as any)[11] as any) !== (l as any) ? (p = (l as any)({
    id: "VrRR3V"
  }), (e as any)[11] = l, (e as any)[12] = p) : p = (e as any)[12];
  let h: any;
  ((e as any)[13] as any) !== (x as any) ? (h = (n: any): any => (x as any)(((n as any).currentTarget as any).value), (e as any)[13] = x, (e as any)[14] = h) : h = (e as any)[14];
  let b: any;
  ((e as any)[15] as any) !== (l as any) ? (b = (l as any)({
    id: "VrRR3V"
  }), (e as any)[15] = l, (e as any)[16] = b) : b = (e as any)[16];
  let v: any;
  ((e as any)[17] as any) !== ((a as any).comment as any) || ((e as any)[18] as any) !== (b as any) || ((e as any)[19] as any) !== (p as any) || ((e as any)[20] as any) !== (h as any) ? (v = ((s as any).jsx as any)("textarea", {
    ..._,
    "aria-label": p,
    onChange: h,
    placeholder: b,
    value: (a as any).comment
  }), (e as any)[17] = (a as any).comment, (e as any)[18] = b, (e as any)[19] = p, (e as any)[20] = h, (e as any)[21] = v) : v = (e as any)[21];
  let k: any;
  ((e as any)[22] as any) !== (r as any) ? (k = (r as any) != (null as any) ? ((s as any).jsx as any)("span", {
    className: "sand-6rl5ky sand-1wm8ruf",
    role: "alert",
    children: r
  }) : null, (e as any)[22] = r, (e as any)[23] = k) : k = (e as any)[23];
  let g: any;
  ((e as any)[24] as any) !== (v as any) || ((e as any)[25] as any) !== (k as any) || ((e as any)[26] as any) !== (w as any) ? (g = ((s as any).jsx as any)((V as any).Body, {
    children: ((s as any).jsxs as any)("div", {
      ...u,
      children: [w, v, k]
    })
  }), (e as any)[24] = v, (e as any)[25] = k, (e as any)[26] = w, (e as any)[27] = g) : g = (e as any)[27];
  let C: any;
  ((e as any)[28] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (C = ((s as any).jsx as any)((V as any).ActionSpacer, {}), (e as any)[28] = C) : C = (e as any)[28];
  let E: any;
  ((e as any)[29] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (E = ((s as any).jsx as any)(L, {
    id: "hQRttt"
  }), (e as any)[29] = E) : E = (e as any)[29];
  let T: any;
  ((e as any)[30] as any) !== (o as any) || ((e as any)[31] as any) !== (m as any) ? (T = ((s as any).jsxs as any)((V as any).ActionBar, {
    children: [C, ((s as any).jsx as any)((V as any).Action, {
      disabled: o,
      onClick: m,
      variant: "primary",
      children: E
    })]
  }), (e as any)[30] = o, (e as any)[31] = m, (e as any)[32] = T) : T = (e as any)[32];
  let t: any;
  return ((e as any)[33] as any) !== (g as any) || ((e as any)[34] as any) !== (T as any) || ((e as any)[35] as any) !== (q as any) ? (t = ((s as any).jsxs as any)((V as any).Root, {
    className: "sand-feedback-improve-dialog",
    onOpenChange: q,
    open: !0,
    variant: "rich",
    width: 520,
    children: [S, R, g, T]
  }), (e as any)[33] = g, (e as any)[34] = T, (e as any)[35] = q, (e as any)[36] = t) : t = (e as any)[36], t;
}
const B: any = {
    categories: new (Set as any)(),
    comment: ""
  },
  J: any = {
    id: "KSgnPO"
  };
function M(this: any, j: any): any {
  return (j as any) === ("revert" as any) ? "prompt" : (j as any) === ("down" as any) ? "improve" : "voted";
}
function Z(this: any, j: any, e: any): any {
  return (j as any) !== ("submit" as any) ? {} : {
    categories: [...(e as any).categories],
    ...((((e as any).comment as any).length as any) > (0 as any) ? {
      comment: (e as any).comment
    } : {})
  };
}
function H(this: any, j: any): any {
  (H as any).d = 900;
  const e: any = ((F as any).c as any)(44),
    {
      entry: a
    }: any = j,
    {
      _: i
    }: any = (D as any)(),
    {
      _: r
    }: any = (D as any)(),
    o: any = (Q as any)(),
    {
      isReadOnly: y
    }: any = (X as any)(),
    {
      voteFeedback: x
    }: any = (K as any)(),
    [m, f]: any = ((I as any).useState as any)(null),
    [d, c]: any = ((I as any).useState as any)(B),
    [l, q]: any = ((I as any).useState as any)(null),
    [S, R]: any = ((I as any).useState as any)(!1),
    u: any = (m?.untilEntryLeaves as any) === ((a as any).state as any) ? (m as any).shows : (a as any).state;
  let w: any;
  ((e as any)[0] as any) !== (i as any) || ((e as any)[1] as any) !== (o as any) || ((e as any)[2] as any) !== (d as any) || ((e as any)[3] as any) !== ((a as any).id as any) || ((e as any)[4] as any) !== ((a as any).state as any) || ((e as any)[5] as any) !== (S as any) || ((e as any)[6] as any) !== (x as any) ? (w = (t: any): any => {
    (o as any) != (null as any) && (S && (t as any) !== ("revert" as any) || ((q as any)(null), (R as any)(!0), (f as any)({
      untilEntryLeaves: (a as any).state,
      shows: (M as any)(t)
    }), (t as any) === ("revert" as any) && (c as any)(B), (((x as any)({
      agentId: o,
      entryId: (a as any).id,
      action: t,
      ...(Z as any)(t, d)
    }) as any).then as any)((): any => (R as any)(!1), (n: any): any => {
      (G as any)(n, {
        tags: {
          sand_area: "feedback"
        }
      }), (f as any)(null), (q as any)((i as any)(J)), (R as any)(!1);
    })));
  }, (e as any)[0] = i, (e as any)[1] = o, (e as any)[2] = d, (e as any)[3] = (a as any).id, (e as any)[4] = (a as any).state, (e as any)[5] = S, (e as any)[6] = x, (e as any)[7] = w) : w = (e as any)[7];
  const _: any = w;
  if ((u as any) === ("voted" as any)) {
    let t: any;
    ((e as any)[8] as any) !== (i as any) || ((e as any)[9] as any) !== (u as any) ? (t = (i as any)((O as any)(u)), (e as any)[8] = i, (e as any)[9] = u, (e as any)[10] = t) : t = (e as any)[10];
    let n: any;
    return ((e as any)[11] as any) !== (t as any) ? (n = ((s as any).jsx as any)(N, {
      children: t
    }), (e as any)[11] = t, (e as any)[12] = n) : n = (e as any)[12], n;
  }
  if (y) {
    let t: any;
    ((e as any)[13] as any) !== (r as any) ? (t = (r as any)({
      id: "s7XoNw"
    }), (e as any)[13] = r, (e as any)[14] = t) : t = (e as any)[14];
    let n: any;
    return ((e as any)[15] as any) !== (t as any) ? (n = ((s as any).jsx as any)(N, {
      children: t
    }), (e as any)[15] = t, (e as any)[16] = n) : n = (e as any)[16], n;
  }
  const p: any = (u as any) === ("improve" as any);
  let h: any;
  ((e as any)[17] as any) !== (i as any) || ((e as any)[18] as any) !== (u as any) ? (h = (i as any)((O as any)(u)), (e as any)[17] = i, (e as any)[18] = u, (e as any)[19] = h) : h = (e as any)[19];
  let b: any;
  ((e as any)[20] as any) !== (h as any) ? (b = ((s as any).jsx as any)(N, {
    children: h
  }), (e as any)[20] = h, (e as any)[21] = b) : b = (e as any)[21];
  let v: any;
  ((e as any)[22] as any) !== (r as any) ? (v = (r as any)({
    id: "qBe+RT"
  }), (e as any)[22] = r, (e as any)[23] = v) : v = (e as any)[23];
  let k: any;
  ((e as any)[24] as any) !== (r as any) ? (k = (r as any)({
    id: "7E+79I"
  }), (e as any)[24] = r, (e as any)[25] = k) : k = (e as any)[25];
  let g: any;
  ((e as any)[26] as any) !== (v as any) || ((e as any)[27] as any) !== (k as any) || ((e as any)[28] as any) !== (_ as any) ? (g = ((s as any).jsx as any)(P, {
    downLabel: v,
    onVote: _,
    upLabel: k
  }), (e as any)[26] = v, (e as any)[27] = k, (e as any)[28] = _, (e as any)[29] = g) : g = (e as any)[29];
  let C: any;
  ((e as any)[30] as any) !== (l as any) || ((e as any)[31] as any) !== (p as any) ? (C = (l as any) != (null as any) && !p ? ((s as any).jsx as any)(N, {
    role: "alert",
    children: l
  }) : null, (e as any)[30] = l, (e as any)[31] = p, (e as any)[32] = C) : C = (e as any)[32];
  let E: any;
  ((e as any)[33] as any) !== (d as any) || ((e as any)[34] as any) !== (l as any) || ((e as any)[35] as any) !== (p as any) || ((e as any)[36] as any) !== (S as any) || ((e as any)[37] as any) !== (_ as any) ? (E = p ? ((s as any).jsx as any)($, {
    draft: d,
    error: l,
    isSubmitting: S,
    onCommentChange: (t: any): any => (c as any)((n: any): any => ({
      ...n,
      comment: t
    })),
    onDismiss: (): any => (_ as any)("revert"),
    onSubmit: (): any => (_ as any)("submit"),
    onToggleCategory: (t: any): any => (c as any)((n: any): any => {
      const z: any = new (Set as any)((n as any).categories);
      return ((z as any).delete as any)(t) || ((z as any).add as any)(t), {
        ...n,
        categories: z
      };
    })
  }) : null, (e as any)[33] = d, (e as any)[34] = l, (e as any)[35] = p, (e as any)[36] = S, (e as any)[37] = _, (e as any)[38] = E) : E = (e as any)[38];
  let T: any;
  return ((e as any)[39] as any) !== (b as any) || ((e as any)[40] as any) !== (g as any) || ((e as any)[41] as any) !== (C as any) || ((e as any)[42] as any) !== (E as any) ? (T = ((s as any).jsxs as any)((s as any).Fragment, {
    children: [b, g, C, E]
  }), (e as any)[39] = b, (e as any)[40] = g, (e as any)[41] = C, (e as any)[42] = E, (e as any)[43] = T) : T = (e as any)[43], T;
}
function U(this: any, j: any): any {
  (U as any).d = 899;
  const e: any = ((F as any).c as any)(2),
    {
      entry: a
    }: any = j;
  let i: any;
  return ((e as any)[0] as any) !== (a as any) ? (i = ((s as any).jsx as any)(H, {
    entry: a
  }), (e as any)[0] = a, (e as any)[1] = i) : i = (e as any)[1], i;
}
export { U as default };
//# debugId=66d1f415-c40b-489b-b862-ed119fbd955d
