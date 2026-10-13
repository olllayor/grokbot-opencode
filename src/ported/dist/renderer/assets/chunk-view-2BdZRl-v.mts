declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "5ed02168-3ab4-4a59-bb8d-f2beb8111a98", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-5ed02168-3ab4-4a59-bb8d-f2beb8111a98");
  } catch (e: any) {}
} as any)();
import { c as y, u as fe, r as R, j as l, p as pe, T as p } from "./index.eager-vendor-Qbf9YA6n.js";
import { I as le, z as be, an as xe, a5 as he, a6 as ve } from "./index-ZYxf-aBb.js";
import { bt as je, b$ as ye, n as te, b0 as M, j as ae, d0 as Se, p as ge, m as ke, dd as Ie, de as Ee } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { c as _e, C as Ce } from "./chunk-card-field-BW4hZ8b8.js";
import "./index.eager-common-CdCvBQNJ.js";
const ne: any = {
  field: {
    kzQI83: "sand-1iyjqo2",
    kmuXW: "sand-s83m0k",
    kCS8Yb: "sand-1r8uery",
    $$css: !0
  },
  saveError: {
    kqGvvJ: "sand-10im51j",
    k7Eaqz: "sand-euugli",
    kMwMTN: "sand-6rl5ky",
    $$css: !0
  }
};
function qe(this: any, n: any, e: any): any {
  return ((/^(?:a|an|the|your|my)\s/i as any).test as any)(e) ? (n as any)({
    id: "6MC4Rb",
    values: {
      label: e
    }
  }) : (n as any)({
    id: "rJyxlD",
    values: {
      label: e
    }
  });
}
function ie(this: any, n: any): any {
  return n instanceof Ie && (((n as any).failure as any).code as any) === (Ee as any);
}
function $e(this: any, n: any, e: any): any {
  return (ie as any)(e) && (((e as any).message as any).length as any) > (0 as any) ? (e as any).message : (n as any)({
    id: "BJM4fh"
  });
}
function Re(this: any, n: any): any {
  switch ((n as any).kind) {
    case "box-env":
    case "channel-credential":
      return {
        kind: "personal"
      };
    case "bot-secret":
      return {
        kind: "bot-secret",
        varName: (n as any).name
      };
    case "bot-plugin-variable":
      return {
        kind: "bot-plugin-variable",
        pluginId: (n as any).pluginId,
        key: (n as any).key
      };
    default:
      return {
        kind: "unsupported"
      };
  }
}
function re(this: any, n: any): any {
  (re as any).d = 501;
  const e: any = ((y as any).c as any)(8),
    {
      presentation: s,
      copyId: t
    }: any = n;
  let i: any;
  ((e as any)[0] as any) !== ((s as any).key as any) || ((e as any)[1] as any) !== ((s as any).kind as any) || ((e as any)[2] as any) !== ((s as any).pluginId as any) || ((e as any)[3] as any) !== ((s as any).varName as any) ? (i = ((s as any).kind as any) === ("bot-secret" as any) ? ((l as any).jsx as any)(de, {
    varName: (s as any).varName
  }) : ((l as any).jsx as any)(ce, {
    varKey: (s as any).key,
    pluginId: (s as any).pluginId
  }), (e as any)[0] = (s as any).key, (e as any)[1] = (s as any).kind, (e as any)[2] = (s as any).pluginId, (e as any)[3] = (s as any).varName, (e as any)[4] = i) : i = (e as any)[4];
  let a: any;
  return ((e as any)[5] as any) !== (t as any) || ((e as any)[6] as any) !== (i as any) ? (a = ((l as any).jsx as any)(M, {
    as: "div",
    id: t,
    children: i
  }), (e as any)[5] = t, (e as any)[6] = i, (e as any)[7] = a) : a = (e as any)[7], a;
}
function de(this: any, n: any): any {
  (de as any).d = 502;
  const e: any = ((y as any).c as any)(2),
    {
      varName: s
    }: any = n;
  let t: any;
  return ((e as any)[0] as any) !== (s as any) ? (t = ((l as any).jsx as any)(p, {
    id: "bUk2ML",
    values: {
      varName: s
    }
  }), (e as any)[0] = s, (e as any)[1] = t) : t = (e as any)[1], t;
}
function ce(this: any, n: any): any {
  (ce as any).d = 500;
  const e: any = ((y as any).c as any)(3),
    {
      varKey: s,
      pluginId: t
    }: any = n;
  let i: any;
  return ((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (s as any) ? (i = ((l as any).jsx as any)(p, {
    id: "0EEvan",
    values: {
      varKey: s,
      pluginId: t
    }
  }), (e as any)[0] = t, (e as any)[1] = s, (e as any)[2] = i) : i = (e as any)[2], i;
}
function oe(this: any, n: any): any {
  (oe as any).d = 505;
  const e: any = ((y as any).c as any)(7),
    {
      label: s,
      titleId: t
    }: any = n;
  let i: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = ((l as any).jsx as any)(p, {
    id: "FZjSI/"
  }), (e as any)[0] = i) : i = (e as any)[0];
  let a: any;
  ((e as any)[1] as any) !== (s as any) || ((e as any)[2] as any) !== (t as any) ? (a = ((l as any).jsx as any)(te, {
    subtitle: i,
    title: s,
    titleId: t
  }), (e as any)[1] = s, (e as any)[2] = t, (e as any)[3] = a) : a = (e as any)[3];
  let r: any;
  return ((e as any)[4] as any) !== (a as any) || ((e as any)[5] as any) !== (t as any) ? (r = ((l as any).jsx as any)(ae, {
    "aria-labelledby": t,
    role: "region",
    children: a
  }), (e as any)[4] = a, (e as any)[5] = t, (e as any)[6] = r) : r = (e as any)[6], r;
}
function ue(this: any, n: any): any {
  (ue as any).d = 504;
  const e: any = ((y as any).c as any)(3),
    {
      presentation: s
    }: any = n;
  switch ((s as any).kind) {
    case "bot-plugin-variable":
      {
        let t: any;
        return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = ((l as any).jsx as any)(p, {
          id: "3dOgRM"
        }), (e as any)[0] = t) : t = (e as any)[0], t;
      }
    case "bot-secret":
      {
        let t: any;
        return ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = ((l as any).jsx as any)(p, {
          id: "lpgQZD"
        }), (e as any)[1] = t) : t = (e as any)[1], t;
      }
    case "personal":
      {
        let t: any;
        return ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = ((l as any).jsx as any)(p, {
          id: "o9/1q2"
        }), (e as any)[2] = t) : t = (e as any)[2], t;
      }
  }
}
function me(this: any, n: any): any {
  (me as any).d = 503;
  const e: any = ((y as any).c as any)(73),
    {
      entryId: s,
      request: t,
      isProvided: i,
      agentId: a
    }: any = n,
    {
      _: r
    }: any = (fe as any)(),
    {
      submitSecret: m
    }: any = (je as any)(),
    o: any = (ye as any)(a),
    [d, Q]: any = ((R as any).useState as any)(""),
    [W, Z]: any = ((R as any).useState as any)(!1),
    [S, se]: any = ((R as any).useState as any)(null),
    u: any = ((R as any).useId as any)(),
    N: any = ((R as any).useId as any)(),
    z: any = ((R as any).useId as any)();
  let T: any;
  ((e as any)[0] as any) !== (a as any) || ((e as any)[1] as any) !== (i as any) || ((e as any)[2] as any) !== (W as any) || ((e as any)[3] as any) !== (d as any) ? (T = ((((d as any).trim as any)() as any).length as any) > (0 as any) && !W && !i && (a as any) != (null as any), (e as any)[0] = a, (e as any)[1] = i, (e as any)[2] = W, (e as any)[3] = d, (e as any)[4] = T) : T = (e as any)[4];
  const B: any = T;
  let F: any;
  ((e as any)[5] as any) !== (r as any) || ((e as any)[6] as any) !== (a as any) || ((e as any)[7] as any) !== (B as any) || ((e as any)[8] as any) !== (s as any) || ((e as any)[9] as any) !== (o as any) || ((e as any)[10] as any) !== (m as any) || ((e as any)[11] as any) !== (d as any) ? (F = function (this: any, h: any): any {
    if (((h as any).preventDefault as any)(), !B || (a as any) == (null as any)) return;
    (Z as any)(!0), (se as any)(null);
    const j: any = d;
    (Q as any)(""), (((m as any)({
      entryId: s,
      value: j,
      agentId: a,
      ...(((o as any).length as any) > (0 as any) ? {
        sessionId: o
      } : {})
    }) as any).then as any)((): any => (Z as any)(!1), (f: any): any => {
      (ie as any)(f) || (Se as any)(f, {
        tags: {
          sand_area: "secret-request"
        }
      }), (Q as any)(j), (se as any)(($e as any)(r, f)), (Z as any)(!1);
    });
  }, (e as any)[5] = r, (e as any)[6] = a, (e as any)[7] = B, (e as any)[8] = s, (e as any)[9] = o, (e as any)[10] = m, (e as any)[11] = d, (e as any)[12] = F) : F = (e as any)[12];
  const H: any = F;
  let D: any;
  ((e as any)[13] as any) !== ((t as any).target as any) ? (D = (Re as any)((t as any).target), (e as any)[13] = (t as any).target, (e as any)[14] = D) : D = (e as any)[14];
  const b: any = D;
  if (((b as any).kind as any) === ("unsupported" as any)) {
    let c: any;
    return ((e as any)[15] as any) !== ((t as any).label as any) || ((e as any)[16] as any) !== (u as any) ? (c = ((l as any).jsx as any)(oe, {
      label: (t as any).label,
      titleId: u
    }), (e as any)[15] = (t as any).label, (e as any)[16] = u, (e as any)[17] = c) : c = (e as any)[17], c;
  }
  const w: any = ((b as any).kind as any) !== ("personal" as any),
    x: any = w ? `${u} ${N}` : u;
  let G: any;
  ((e as any)[18] as any) !== (N as any) || ((e as any)[19] as any) !== (b as any) ? (G = ((b as any).kind as any) === ("personal" as any) ? null : ((l as any).jsx as any)(re, {
    copyId: N,
    presentation: b
  }), (e as any)[18] = N, (e as any)[19] = b, (e as any)[20] = G) : G = (e as any)[20];
  const v: any = G;
  if (i) {
    let c: any;
    ((e as any)[21] as any) !== (b as any) ? (c = ((l as any).jsx as any)(M, {
      as: "div",
      children: ((l as any).jsx as any)(ue, {
        presentation: b
      })
    }), (e as any)[21] = b, (e as any)[22] = c) : c = (e as any)[22];
    let h: any;
    ((e as any)[23] as any) !== (v as any) || ((e as any)[24] as any) !== (c as any) ? (h = ((l as any).jsxs as any)((l as any).Fragment, {
      children: [v, c]
    }), (e as any)[23] = v, (e as any)[24] = c, (e as any)[25] = h) : h = (e as any)[25];
    let j: any;
    ((e as any)[26] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = ((l as any).jsx as any)(ge, {
      kind: "success",
      leading: ((l as any).jsx as any)(le, {
        "aria-hidden": !0,
        name: "check",
        size: "sm"
      }),
      children: ((l as any).jsx as any)(p, {
        id: "idD8Ev"
      })
    }), (e as any)[26] = j) : j = (e as any)[26];
    let f: any;
    ((e as any)[27] as any) !== ((t as any).label as any) || ((e as any)[28] as any) !== (h as any) || ((e as any)[29] as any) !== (u as any) ? (f = ((l as any).jsx as any)(te, {
      subtitle: h,
      title: (t as any).label,
      titleId: u,
      trailing: j
    }), (e as any)[27] = (t as any).label, (e as any)[28] = h, (e as any)[29] = u, (e as any)[30] = f) : f = (e as any)[30];
    let L: any;
    return ((e as any)[31] as any) !== (x as any) || ((e as any)[32] as any) !== (f as any) ? (L = ((l as any).jsx as any)(ae, {
      "aria-labelledby": x,
      role: "region",
      children: f
    }), (e as any)[31] = x, (e as any)[32] = f, (e as any)[33] = L) : L = (e as any)[33], L;
  }
  let g: any;
  ((e as any)[34] as any) !== (v as any) || ((e as any)[35] as any) !== ((t as any).description as any) ? (g = (v as any) == (null as any) && ((t as any).description as any) == (null as any) ? void 0 : ((l as any).jsxs as any)((l as any).Fragment, {
    children: [v, ((t as any).description as any) == (null as any) ? null : ((l as any).jsx as any)(M, {
      as: "div",
      children: (t as any).description
    })]
  }), (e as any)[34] = v, (e as any)[35] = (t as any).description, (e as any)[36] = g) : g = (e as any)[36];
  let k: any;
  ((e as any)[37] as any) !== ((t as any).label as any) || ((e as any)[38] as any) !== (g as any) || ((e as any)[39] as any) !== (u as any) ? (k = ((l as any).jsx as any)(te, {
    subtitle: g,
    title: (t as any).label,
    titleId: u
  }), (e as any)[37] = (t as any).label, (e as any)[38] = g, (e as any)[39] = u, (e as any)[40] = k) : k = (e as any)[40];
  let P: any;
  ((e as any)[41] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (P = {
    className: "sand-78zum5 sand-1cy8zhl sand-167g77z sand-h8yej3 sand-euugli"
  }, (e as any)[41] = P) : P = (e as any)[41];
  const X: any = (S as any) != (null as any) ? z : void 0,
    Y: any = (S as any) != (null as any) ? !0 : void 0;
  let V: any;
  ((e as any)[42] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (V = (c: any): any => (Q as any)(((c as any).currentTarget as any).value), (e as any)[42] = V) : V = (e as any)[42];
  let I: any;
  ((e as any)[43] as any) !== (r as any) || ((e as any)[44] as any) !== ((t as any).label as any) ? (I = (qe as any)(r, (t as any).label), (e as any)[43] = r, (e as any)[44] = (t as any).label, (e as any)[45] = I) : I = (e as any)[45];
  let A: any;
  ((e as any)[46] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (A = (pe as any)((_e as any).control), (e as any)[46] = A) : A = (e as any)[46];
  let E: any;
  ((e as any)[47] as any) !== (x as any) || ((e as any)[48] as any) !== (I as any) || ((e as any)[49] as any) !== (X as any) || ((e as any)[50] as any) !== (Y as any) || ((e as any)[51] as any) !== (d as any) ? (E = ((l as any).jsx as any)(Ce, {
    style: (ne as any).field,
    children: ((l as any).jsx as any)("input", {
      "aria-describedby": X,
      "aria-invalid": Y,
      "aria-labelledby": x,
      autoComplete: "off",
      onChange: V,
      placeholder: I,
      spellCheck: !1,
      type: "password",
      value: d,
      ...A
    })
  }), (e as any)[47] = x, (e as any)[48] = I, (e as any)[49] = X, (e as any)[50] = Y, (e as any)[51] = d, (e as any)[52] = E) : E = (e as any)[52];
  const ee: any = !B;
  let J: any;
  ((e as any)[53] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (J = ((l as any).jsx as any)(p, {
    id: "fMfdG0"
  }), (e as any)[53] = J) : J = (e as any)[53];
  let _: any;
  ((e as any)[54] as any) !== (ee as any) ? (_ = ((l as any).jsx as any)(be, {
    disabled: ee,
    type: "submit",
    variant: "primary",
    children: J
  }), (e as any)[54] = ee, (e as any)[55] = _) : _ = (e as any)[55];
  let C: any;
  ((e as any)[56] as any) !== (E as any) || ((e as any)[57] as any) !== (_ as any) ? (C = ((l as any).jsxs as any)("div", {
    ...P,
    children: [E, _]
  }), (e as any)[56] = E, (e as any)[57] = _, (e as any)[58] = C) : C = (e as any)[58];
  let q: any;
  ((e as any)[59] as any) !== (S as any) || ((e as any)[60] as any) !== (z as any) ? (q = (S as any) != (null as any) ? ((l as any).jsx as any)(M, {
    as: "p",
    id: z,
    level: "body2",
    role: "alert",
    style: (ne as any).saveError,
    children: S
  }) : null, (e as any)[59] = S, (e as any)[60] = z, (e as any)[61] = q) : q = (e as any)[61];
  let O: any, U: any;
  ((e as any)[62] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (O = {
    className: "sand-78zum5 sand-1cy8zhl sand-1jnr06f sand-euugli sand-169k319"
  }, U = ((l as any).jsx as any)("span", {
    className: "sand-78zum5 sand-2lah0s sand-vijh9v",
    children: ((l as any).jsx as any)(le, {
      "aria-hidden": !0,
      name: "shield-check",
      size: "sm"
    })
  }), (e as any)[62] = O, (e as any)[63] = U) : (O = (e as any)[62], U = (e as any)[63]);
  let $: any;
  ((e as any)[64] as any) !== (w as any) ? ($ = ((l as any).jsxs as any)("div", {
    ...O,
    children: [U, ((l as any).jsx as any)(M, {
      level: "body2",
      children: w ? ((l as any).jsx as any)(p, {
        id: "BicSEp"
      }) : ((l as any).jsx as any)(p, {
        id: "tCkO9y"
      })
    })]
  }), (e as any)[64] = w, (e as any)[65] = $) : $ = (e as any)[65];
  let K: any;
  return ((e as any)[66] as any) !== (H as any) || ((e as any)[67] as any) !== (x as any) || ((e as any)[68] as any) !== (C as any) || ((e as any)[69] as any) !== (q as any) || ((e as any)[70] as any) !== ($ as any) || ((e as any)[71] as any) !== (k as any) ? (K = ((l as any).jsxs as any)(ke, {
    "aria-labelledby": x,
    onSubmit: H,
    children: [k, C, q, $]
  }), (e as any)[66] = H, (e as any)[67] = x, (e as any)[68] = C, (e as any)[69] = q, (e as any)[70] = $, (e as any)[71] = k, (e as any)[72] = K) : K = (e as any)[72], K;
}
function Me(this: any, n: any): any {
  (Me as any).d = 324;
  const e: any = ((y as any).c as any)(12),
    {
      entry: s,
      adjacency: t
    }: any = n,
    a: any = (xe as any)() ?? void 0,
    r: any = ((s as any).secretProvided as any) === (!0 as any);
  let m: any;
  ((e as any)[0] as any) !== ((s as any).id as any) || ((e as any)[1] as any) !== (((s as any).message as any).secretRequest as any) || ((e as any)[2] as any) !== (a as any) || ((e as any)[3] as any) !== (r as any) ? (m = ((l as any).jsx as any)(me, {
    agentId: a,
    entryId: (s as any).id,
    isProvided: r,
    request: ((s as any).message as any).secretRequest
  }), (e as any)[0] = (s as any).id, (e as any)[1] = ((s as any).message as any).secretRequest, (e as any)[2] = a, (e as any)[3] = r, (e as any)[4] = m) : m = (e as any)[4];
  let o: any;
  ((e as any)[5] as any) !== ((t as any).isGroupStart as any) || ((e as any)[6] as any) !== ((s as any).timestampMs as any) || ((e as any)[7] as any) !== (m as any) ? (o = ((l as any).jsx as any)(he, {
    className: "sand-secret-request-wrap",
    isGroupStart: (t as any).isGroupStart,
    timestampMs: (s as any).timestampMs,
    variant: "question",
    children: m
  }), (e as any)[5] = (t as any).isGroupStart, (e as any)[6] = (s as any).timestampMs, (e as any)[7] = m, (e as any)[8] = o) : o = (e as any)[8];
  let d: any;
  return ((e as any)[9] as any) !== (s as any) || ((e as any)[10] as any) !== (o as any) ? (d = ((l as any).jsx as any)(ve, {
    entry: s,
    children: o
  }), (e as any)[9] = s, (e as any)[10] = o, (e as any)[11] = d) : d = (e as any)[11], d;
}
export { Me as default };
//# debugId=5ed02168-3ab4-4a59-bb8d-f2beb8111a98
