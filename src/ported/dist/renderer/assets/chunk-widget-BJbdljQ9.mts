declare var HTMLElement: any;
declare var HTMLInputElement: any;
declare var HTMLSelectElement: any;
declare var HTMLTextAreaElement: any;
declare var document: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "5df76e07-823a-4dad-a7a5-87706b19349a", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-5df76e07-823a-4dad-a7a5-87706b19349a");
  } catch (e: any) {}
} as any)();
import { c as Re, u as Le, r as re, j as t, p as $e, T as fe } from "./index.eager-vendor-Qbf9YA6n.js";
import { bo as Be, bp as Ge, bq as Ae, Z as ve, b0 as Me, br as ze, bs as Ne, bt as Qe, b7 as Xe, b9 as Je, n as Ke, m as Fe, k as Oe, bu as Ze, j as Ve, p as Pe } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { k as pe, j as D, Z as Ue, h as Ye, z as Te, a4 as Ee, p as et, I as tt, i as st } from "./index-ZYxf-aBb.js";
import { C as nt, c as it } from "./chunk-card-field-BW4hZ8b8.js";
function qe(this: any, i: any): any {
  return !!(i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement || i instanceof HTMLSelectElement || i instanceof HTMLElement && (i as any).isContentEditable);
}
function de(this: any, i: any): any {
  return ((String as any).fromCharCode as any)((65 as any) + (i as any));
}
function F(this: any, i: any): any {
  return (i as any).value ?? (i as any).label;
}
function We(this: any, i: any, e: any): any {
  const n: any = new (Set as any)(i);
  return ((n as any).has as any)(e) ? ((n as any).delete as any)(e) : ((n as any).add as any)(e), n;
}
const p: any = {
  widget: {
    kKVMdj: "sand-jocqv1 sand-n4un0z",
    k44tkh: "sand-zsfktn sand-4csvff",
    kyAemX: "sand-1lfcbla sand-w5ffez",
    kWV6AL: "sand-skzprw",
    k3aq6I: "sand-uupxpy",
    $$css: !0
  },
  dismiss: {
    kzqmXN: "sand-w4jnvo",
    kZKoxP: "sand-1qx5ct2",
    $$css: !0
  },
  dismissedInk: {
    kMwMTN: "sand-1o0liin",
    $$css: !0
  },
  optionKey: {
    kWkggS: "sand-luhinc",
    kMwMTN: "sand-169k319",
    $$css: !0
  },
  settledKey: {
    kSiTet: "sand-ti2d7y",
    $$css: !0
  },
  settledText: {
    kMwMTN: "sand-1ybxsvs",
    $$css: !0
  },
  settledTextFlat: {
    kMwMTN: "sand-1o0liin",
    $$css: !0
  },
  skippedInk: {
    kMwMTN: "sand-1e4uaio",
    $$css: !0
  },
  multiSettledRawText: {
    khDVqt: "sand-126k92a",
    $$css: !0
  },
  customSubmit: {
    kmuXW: "sand-2lah0s",
    kKVMdj: "sand-1l2fjsv",
    k44tkh: "sand-1au7bnr sand-1u6grsq",
    kyAemX: "sand-1lfcbla",
    kWV6AL: "sand-skzprw",
    $$css: !0
  },
  customField: {
    kzQI83: "sand-1iyjqo2",
    kmuXW: "sand-s83m0k",
    kCS8Yb: "sand-1r8uery",
    $$css: !0
  },
  customInput: {
    kOwNse: "sand-5f5z56",
    khDVqt: "sand-126k92a",
    kHjlTd: "sand-j0a0fe",
    kHenm0: "sand-tt52l0",
    kORKVm: "sand-10wlt62",
    $$css: !0
  }
};
function _e(this: any): any {
  (_e as any).d = 582;
  const i: any = ((Re as any).c as any)(6),
    {
      _: e
    }: any = (Le as any)();
  let n: any;
  ((i as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = {
    className: "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1o0liin"
  }, (i as any)[0] = n) : n = (i as any)[0];
  let l: any;
  ((i as any)[1] as any) !== (e as any) ? (l = (e as any)({
    id: "ylXj1N"
  }), (i as any)[1] = e, (i as any)[2] = l) : l = (i as any)[2];
  let K: any;
  ((i as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (K = ((t as any).jsx as any)(tt, {
    "aria-hidden": !0,
    name: "check",
    size: "md"
  }), (i as any)[3] = K) : K = (i as any)[3];
  let f: any;
  return ((i as any)[4] as any) !== (l as any) ? (f = ((t as any).jsx as any)("span", {
    ...n,
    title: l,
    children: K
  }), (i as any)[4] = l, (i as any)[5] = f) : f = (i as any)[5], f;
}
function lt(this: any, i: any): any {
  (lt as any).d = 581;
  const e: any = ((Re as any).c as any)(110),
    {
      entryId: n,
      widget: l,
      isKeyboardTarget: K,
      agentId: f,
      isReadOnly: v,
      surface: j,
      onChoose: h,
      headerTrailing: z
    }: any = i,
    S: any = (K as any) === (void 0 as any) ? !1 : K,
    s: any = (v as any) === (void 0 as any) ? !1 : v,
    I: any = (j as any) === (void 0 as any) ? "bubble" : j,
    C: any = (z as any) === (void 0 as any) ? null : z,
    {
      i18n: y,
      _: d
    }: any = (Le as any)(),
    {
      respondToWidget: m,
      dismissWidget: g
    }: any = (Qe as any)(),
    {
      localAnswers: o
    }: any = (Xe as any)(),
    T: any = (Je as any)("sand_grok_main_agent"),
    $: any = (Ue as any)()?.replaceMainAgent;
  let L: any;
  ((e as any)[0] as any) !== (f as any) || ((e as any)[1] as any) !== (n as any) ? (L = (f as any) == (null as any) ? null : {
    agentId: f,
    entryId: n
  }, (e as any)[0] = f, (e as any)[1] = n, (e as any)[2] = L) : L = (e as any)[2];
  const r: any = L;
  let _: any;
  ((e as any)[3] as any) !== (r as any) || ((e as any)[4] as any) !== (o as any) ? (_ = (): any => (r as any) == (null as any) ? "" : ((o as any).get as any)("widget-draft", r) ?? "", (e as any)[3] = r, (e as any)[4] = o, (e as any)[5] = _) : _ = (e as any)[5];
  const [E, O]: any = ((re as any).useState as any)(_);
  let c: any;
  ((e as any)[6] as any) !== (r as any) || ((e as any)[7] as any) !== (o as any) ? (c = (): any => new (Set as any)((r as any) == (null as any) ? [] : ((o as any).get as any)("widget-selection", r) ?? []), (e as any)[6] = r, (e as any)[7] = o, (e as any)[8] = c) : c = (e as any)[8];
  const [b, R]: any = ((re as any).useState as any)(c),
    k: any = ((re as any).useId as any)(),
    Z: any = ((re as any).useRef as any)(null);
  let V: any, N: any, W: any, A: any, H: any, B: any, G: any, Q: any, P: any, U: any, X: any;
  if (((e as any)[9] as any) !== (d as any) || ((e as any)[10] as any) !== (r as any) || ((e as any)[11] as any) !== (E as any) || ((e as any)[12] as any) !== (g as any) || ((e as any)[13] as any) !== (y as any) || ((e as any)[14] as any) !== (S as any) || ((e as any)[15] as any) !== (T as any) || ((e as any)[16] as any) !== (s as any) || ((e as any)[17] as any) !== (o as any) || ((e as any)[18] as any) !== (h as any) || ((e as any)[19] as any) !== ($ as any) || ((e as any)[20] as any) !== (m as any) || ((e as any)[21] as any) !== (b as any) || ((e as any)[22] as any) !== (I as any) || ((e as any)[23] as any) !== (l as any)) {
    X = ((Symbol as any).for as any)("react.early_return_sentinel");
    e: {
      const J: any = ((Array as any).isArray as any)((l as any).options) ? (l as any).options : [];
      let he: any;
      ((e as any)[35] as any) !== (y as any) || ((e as any)[36] as any) !== (l as any) ? (he = (Ne as any)(y, l), (e as any)[35] = y, (e as any)[36] = l, (e as any)[37] = he) : he = (e as any)[37], Q = he;
      const q: any = (I as any) === ("elevated" as any);
      V = ((l as any).allowCustom as any) === (!0 as any);
      const w: any = ((l as any).multiSelect as any) === (!0 as any),
        He: any = q && w && V,
        ye: any = ((E as any).trim as any)();
      let ge: any;
      ((e as any)[38] as any) !== (b as any) ? (ge = (x: any): any => ((b as any).has as any)((F as any)(x)) ? [(F as any)(x)] : [], (e as any)[38] = b, (e as any)[39] = ge) : ge = (e as any)[39];
      const ke: any = (Ae as any)([...((J as any).flatMap as any)(ge), V ? ye : ""]);
      P = !w && V && ((ye as any).length as any) > (0 as any), U = w && ((ke as any).length as any) > (0 as any);
      let xe: any;
      ((e as any)[40] as any) !== (r as any) || ((e as any)[41] as any) !== (s as any) || ((e as any)[42] as any) !== (o as any) ? (xe = function (this: any, a: any, u: any): any {
        if (s || (r as any) == (null as any) || (((o as any).get as any)("widget", r) as any) != (null as any)) return;
        ((o as any).record as any)("widget", r, a);
        const M: any = (): any => ((o as any).clear as any)("widget", r);
        (((u as any)(r) as any).then as any)((oe: any): any => {
          (oe?.accepted as any) === (!1 as any) && (M as any)();
        }, M);
      }, (e as any)[40] = r, (e as any)[41] = s, (e as any)[42] = o, (e as any)[43] = xe) : xe = (e as any)[43];
      const ae: any = xe;
      let be: any;
      ((e as any)[44] as any) !== (ae as any) || ((e as any)[45] as any) !== (m as any) ? (be = function (this: any, a: any): any {
        ((a as any).length as any) !== (0 as any) && (ae as any)({
          kind: "answered",
          value: a
        }, (u: any): any => {
          const {
            agentId: M,
            entryId: oe
          }: any = u;
          return (m as any)({
            entryId: oe,
            value: a,
            agentId: M
          });
        });
      }, (e as any)[44] = ae, (e as any)[45] = m, (e as any)[46] = be) : be = (e as any)[46];
      const ce: any = be;
      let we: any;
      ((e as any)[47] as any) !== (ae as any) || ((e as any)[48] as any) !== (g as any) ? (we = function (this: any): any {
        (ae as any)({
          kind: "dismissed"
        }, (a: any): any => {
          const {
            agentId: u,
            entryId: M
          }: any = a;
          return (g as any)({
            entryId: M,
            agentId: u
          });
        });
      }, (e as any)[47] = ae, (e as any)[48] = g, (e as any)[49] = we) : we = (e as any)[49], W = we;
      let je: any;
      ((e as any)[50] as any) !== (r as any) || ((e as any)[51] as any) !== (T as any) || ((e as any)[52] as any) !== (w as any) || ((e as any)[53] as any) !== (s as any) || ((e as any)[54] as any) !== (o as any) || ((e as any)[55] as any) !== (h as any) || ((e as any)[56] as any) !== ($ as any) || ((e as any)[57] as any) !== (ce as any) ? (je = function (this: any, a: any): any {
        if (!s) {
          if ((h as any) !== (void 0 as any)) {
            (h as any)(a);
            return;
          }
          if (T && (a as any) === (Ze as any)) {
            $?.();
            return;
          }
          if (!w) {
            (ce as any)(a);
            return;
          }
          (R as any)((u: any): any => (We as any)(u, a)), (r as any) != (null as any) && ((o as any).record as any)("widget-selection", r, [...(We as any)(new (Set as any)(((o as any).get as any)("widget-selection", r) ?? []), a)]);
        }
      }, (e as any)[50] = r, (e as any)[51] = T, (e as any)[52] = w, (e as any)[53] = s, (e as any)[54] = o, (e as any)[55] = h, (e as any)[56] = $, (e as any)[57] = ce, (e as any)[58] = je) : je = (e as any)[58];
      const Se: any = je,
        ue: any = S && ((J as any).length as any) > (0 as any);
      N = (x: any): any => {
        if ((x as any) == (null as any) || !ue) return;
        const a: any = (u: any): any => {
          if ((u as any).defaultPrevented || (u as any).metaKey || (u as any).ctrlKey || (u as any).altKey || (u as any).shiftKey || (((u as any).key as any).length as any) !== (1 as any) || (qe as any)((u as any).target) || (qe as any)((document as any).activeElement) || (((document as any).querySelector as any)('[role="dialog"], [aria-modal="true"]') as any) != (null as any)) return;
          const M: any = ((((((u as any).key as any).toUpperCase as any)() as any).charCodeAt as any)(0) as any) - (65 as any),
            oe: any = (J as any)[M];
          if ((oe as any) == (null as any)) {
            const De: any = (Z as any).current;
            if ((M as any) !== ((J as any).length as any) || (De as any) == (null as any)) return;
            ((u as any).preventDefault as any)(), ((De as any).focus as any)();
            return;
          }
          ((u as any).preventDefault as any)(), (Se as any)((F as any)(oe));
        };
        return ((document as any).addEventListener as any)("keydown", a, !0), (): any => ((document as any).removeEventListener as any)("keydown", a, !0);
      };
      let Ie: any;
      if (((e as any)[59] as any) !== (r as any) || ((e as any)[60] as any) !== (o as any) ? (Ie = function (this: any, a: any): any {
        const {
          value: u
        }: any = (a as any).currentTarget;
        (O as any)(u), (r as any) != (null as any) && ((o as any).record as any)("widget-draft", r, u);
      }, (e as any)[59] = r, (e as any)[60] = o, (e as any)[61] = Ie) : Ie = (e as any)[61], A = Ie, H = function (this: any, a: any): any {
        ((a as any).key as any) !== ("Enter" as any) || (a as any).shiftKey || (((a as any).preventDefault as any)(), (ce as any)(w ? ke : ye));
      }, B = function (this: any, a: any): any {
        ((a as any).preventDefault as any)(), (ce as any)(w ? ke : ye);
      }, ((J as any).length as any) === (0 as any) || (typeof (l as any).prompt as any) != ("string" as any)) {
        X = null;
        break e;
      }
      let Ce: any;
      if (((e as any)[62] as any) !== (Se as any) || ((e as any)[63] as any) !== (y as any) || ((e as any)[64] as any) !== (q as any) || ((e as any)[65] as any) !== (ue as any) || ((e as any)[66] as any) !== (w as any) || ((e as any)[67] as any) !== (s as any) || ((e as any)[68] as any) !== (b as any) || ((e as any)[69] as any) !== (l as any) ? (Ce = (x: any, a: any): any => {
        const u: any = (F as any)(x),
          M: any = w && ((b as any).has as any)(u);
        return ((t as any).jsx as any)(st, {
          disabled: s,
          label: (ze as any)(y, l, x),
          leading: ((t as any).jsx as any)(ve, {
            "aria-hidden": !0,
            isSelected: q && M,
            size: q ? "lg" : "sm",
            style: !q && (p as any).optionKey,
            children: (de as any)(a)
          }),
          onClick: (): any => (Se as any)(u),
          selected: M,
          ...(((x as any).description as any) != (null as any) ? {
            description: (x as any).description
          } : {}),
          ...(ue ? {
            keyShortcut: (((de as any)(a) as any).toLowerCase as any)()
          } : {}),
          ...(w ? {
            pressed: M
          } : {}),
          ...(M && !q ? {
            trailing: ((t as any).jsx as any)(_e, {})
          } : {})
        }, `${u}-${a}`);
      }, (e as any)[62] = Se, (e as any)[63] = y, (e as any)[64] = q, (e as any)[65] = ue, (e as any)[66] = w, (e as any)[67] = s, (e as any)[68] = b, (e as any)[69] = l, (e as any)[70] = Ce) : Ce = (e as any)[70], G = ((J as any).map as any)(Ce), q) {
        const x: any = (de as any)((J as any).length);
        let a: any;
        ((e as any)[71] as any) !== (d as any) || ((e as any)[72] as any) !== (w as any) ? (a = w ? ((t as any).jsx as any)(Ke, {
          title: (d as any)({
            id: "08KMGH"
          })
        }) : null, (e as any)[71] = d, (e as any)[72] = w, (e as any)[73] = a) : a = (e as any)[73], X = ((t as any).jsxs as any)(Fe, {
          "aria-label": Q,
          onSubmit: B,
          ref: N,
          style: (p as any).widget,
          surface: "elevated",
          children: [a, ((t as any).jsx as any)(pe, {
            children: [...G, He ? ((t as any).jsx as any)(Ye, {
              "aria-label": (d as any)({
                id: "dN9Fia"
              }),
              disabled: s,
              keyLabel: x,
              onChange: A,
              onKeyDown: H,
              placeholder: (d as any)({
                id: "aQyGJc"
              }),
              ref: Z,
              value: E,
              ...(ue ? {
                keyShortcut: ((x as any).toLowerCase as any)()
              } : {})
            }, "custom") : null]
          }), w ? ((t as any).jsx as any)(Oe, {
            trailing: ((t as any).jsxs as any)((t as any).Fragment, {
              children: [((t as any).jsx as any)(Te, {
                disabled: s,
                onClick: W,
                size: "lg",
                variant: "secondary",
                children: ((t as any).jsx as any)(fe, {
                  id: "6Uau97"
                })
              }), ((t as any).jsx as any)(Te, {
                disabled: s || ((ke as any).length as any) === (0 as any),
                size: "lg",
                type: "submit",
                variant: "primary",
                children: ((t as any).jsx as any)(fe, {
                  id: "hQRttt"
                })
              })]
            })
          }) : null]
        });
        break e;
      }
    }
    (e as any)[9] = d, (e as any)[10] = r, (e as any)[11] = E, (e as any)[12] = g, (e as any)[13] = y, (e as any)[14] = S, (e as any)[15] = T, (e as any)[16] = s, (e as any)[17] = o, (e as any)[18] = h, (e as any)[19] = $, (e as any)[20] = m, (e as any)[21] = b, (e as any)[22] = I, (e as any)[23] = l, (e as any)[24] = V, (e as any)[25] = N, (e as any)[26] = W, (e as any)[27] = A, (e as any)[28] = H, (e as any)[29] = B, (e as any)[30] = G, (e as any)[31] = Q, (e as any)[32] = P, (e as any)[33] = U, (e as any)[34] = X;
  } else V = (e as any)[24], N = (e as any)[25], W = (e as any)[26], A = (e as any)[27], H = (e as any)[28], B = (e as any)[29], G = (e as any)[30], Q = (e as any)[31], P = (e as any)[32], U = (e as any)[33], X = (e as any)[34];
  if ((X as any) !== (((Symbol as any).for as any)("react.early_return_sentinel") as any)) return X;
  let Y: any;
  ((e as any)[74] as any) !== ((l as any).helpText as any) ? (Y = ((l as any).helpText as any) == (null as any) ? void 0 : ((t as any).jsx as any)(Ee, {
    content: (l as any).helpText
  }), (e as any)[74] = (l as any).helpText, (e as any)[75] = Y) : Y = (e as any)[75];
  let ee: any;
  ((e as any)[76] as any) !== (Q as any) ? (ee = ((t as any).jsx as any)(Ee, {
    content: Q
  }), (e as any)[76] = Q, (e as any)[77] = ee) : ee = (e as any)[77];
  let te: any;
  ((e as any)[78] as any) !== (d as any) || ((e as any)[79] as any) !== (W as any) || ((e as any)[80] as any) !== (C as any) || ((e as any)[81] as any) !== (s as any) || ((e as any)[82] as any) !== (h as any) ? (te = (h as any) === (void 0 as any) ? ((t as any).jsx as any)(et, {
    "aria-label": (d as any)({
      id: "i+D6RG"
    }),
    icon: "x",
    iconSize: "sm",
    disabled: s,
    onClick: W,
    size: "sm",
    style: (p as any).dismiss,
    title: (d as any)({
      id: "ZNqNak"
    }),
    type: "button"
  }) : C, (e as any)[78] = d, (e as any)[79] = W, (e as any)[80] = C, (e as any)[81] = s, (e as any)[82] = h, (e as any)[83] = te) : te = (e as any)[83];
  let se: any;
  ((e as any)[84] as any) !== (ee as any) || ((e as any)[85] as any) !== (te as any) || ((e as any)[86] as any) !== (Y as any) || ((e as any)[87] as any) !== (k as any) ? (se = ((t as any).jsx as any)(Ke, {
    subtitle: Y,
    title: ee,
    titleId: k,
    trailing: te
  }), (e as any)[84] = ee, (e as any)[85] = te, (e as any)[86] = Y, (e as any)[87] = k, (e as any)[88] = se) : se = (e as any)[88];
  let ne: any;
  ((e as any)[89] as any) !== (G as any) ? (ne = ((t as any).jsx as any)(pe, {
    children: G
  }), (e as any)[89] = G, (e as any)[90] = ne) : ne = (e as any)[90];
  let ie: any;
  ((e as any)[91] as any) !== (d as any) || ((e as any)[92] as any) !== (V as any) || ((e as any)[93] as any) !== (E as any) || ((e as any)[94] as any) !== (A as any) || ((e as any)[95] as any) !== (H as any) || ((e as any)[96] as any) !== (s as any) || ((e as any)[97] as any) !== (P as any) ? (ie = V ? ((t as any).jsxs as any)("div", {
    className: "sand-78zum5 sand-1cy8zhl sand-167g77z sand-h8yej3 sand-euugli",
    children: [((t as any).jsx as any)(nt, {
      style: (p as any).customField,
      children: ((t as any).jsx as any)("textarea", {
        "aria-label": (d as any)({
          id: "dN9Fia"
        }),
        autoComplete: "off",
        disabled: s,
        onChange: A,
        onKeyDown: H,
        placeholder: (d as any)({
          id: "ovrcCJ"
        }),
        rows: 1,
        spellCheck: !1,
        value: E,
        ...($e as any)((it as any).control, (p as any).customInput)
      })
    }), P ? ((t as any).jsx as any)(Te, {
      disabled: s,
      size: "md",
      style: (p as any).customSubmit,
      type: "submit",
      children: ((t as any).jsx as any)(fe, {
        id: "hQRttt"
      })
    }) : null]
  }) : null, (e as any)[91] = d, (e as any)[92] = V, (e as any)[93] = E, (e as any)[94] = A, (e as any)[95] = H, (e as any)[96] = s, (e as any)[97] = P, (e as any)[98] = ie) : ie = (e as any)[98];
  let le: any;
  ((e as any)[99] as any) !== (s as any) || ((e as any)[100] as any) !== (U as any) ? (le = U ? ((t as any).jsx as any)(Oe, {
    trailing: ((t as any).jsx as any)(Te, {
      disabled: s,
      size: "md",
      style: (p as any).customSubmit,
      type: "submit",
      children: ((t as any).jsx as any)(fe, {
        id: "hQRttt"
      })
    })
  }) : null, (e as any)[99] = s, (e as any)[100] = U, (e as any)[101] = le) : le = (e as any)[101];
  let me: any;
  return ((e as any)[102] as any) !== (N as any) || ((e as any)[103] as any) !== (B as any) || ((e as any)[104] as any) !== (se as any) || ((e as any)[105] as any) !== (ne as any) || ((e as any)[106] as any) !== (ie as any) || ((e as any)[107] as any) !== (le as any) || ((e as any)[108] as any) !== (k as any) ? (me = ((t as any).jsxs as any)(Fe, {
    "aria-labelledby": k,
    onSubmit: B,
    ref: N,
    style: (p as any).widget,
    children: [se, ne, ie, le]
  }), (e as any)[102] = N, (e as any)[103] = B, (e as any)[104] = se, (e as any)[105] = ne, (e as any)[106] = ie, (e as any)[107] = le, (e as any)[108] = k, (e as any)[109] = me) : me = (e as any)[109], me;
}
function at(this: any, i: any): any {
  (at as any).d = 580;
  const e: any = ((Re as any).c as any)(40),
    {
      widget: n,
      answer: l,
      surface: K
    }: any = i,
    f: any = (K as any) === (void 0 as any) ? "bubble" : K,
    {
      i18n: v,
      _: j
    }: any = (Le as any)(),
    h: any = ((re as any).useId as any)();
  if ((typeof (n as any).prompt as any) != ("string" as any)) return null;
  let z: any, S: any, s: any, I: any, C: any, y: any, d: any, m: any, g: any;
  if (((e as any)[0] as any) !== (j as any) || ((e as any)[1] as any) !== (l as any) || ((e as any)[2] as any) !== (v as any) || ((e as any)[3] as any) !== (f as any) || ((e as any)[4] as any) !== (h as any) || ((e as any)[5] as any) !== (n as any)) {
    g = ((Symbol as any).for as any)("react.early_return_sentinel");
    e: {
      const $: any = ((Array as any).isArray as any)((n as any).options) ? (n as any).options : [],
        L: any = ((n as any).multiSelect as any) === (!0 as any),
        r: any = [];
      if (L) {
        const c: any = (Be as any)(l),
          b: any = new (Set as any)(c),
          R: any = new (Set as any)();
        for (const [Z, V] of (($ as any).entries as any)()) {
          const N: any = (Ge as any)((F as any)(V));
          ((R as any).add as any)(N), ((b as any).has as any)(N) && ((r as any).push as any)({
            kind: "option",
            option: V,
            optionIndex: Z
          });
        }
        const k: any = (Ae as any)(((c as any).filter as any)((Z: any): any => !((R as any).has as any)(Z)));
        ((k as any).length as any) > (0 as any) && ((r as any).push as any)({
          kind: "raw",
          answer: k
        });
      } else {
        const c: any = (($ as any).findIndex as any)((R: any): any => ((F as any)(R) as any) === (l as any)),
          b: any = ($ as any)[c];
        ((r as any).push as any)((b as any) == (null as any) ? {
          kind: "raw",
          answer: l
        } : {
          kind: "option",
          option: b,
          optionIndex: c
        });
      }
      if ((f as any) === ("elevated" as any)) {
        let c: any;
        ((e as any)[15] as any) !== (j as any) ? (c = (j as any)({
          id: "Vtq6ex"
        }), (e as any)[15] = j, (e as any)[16] = c) : c = (e as any)[16];
        const b: any = ((t as any).jsx as any)(pe, {
          label: c,
          role: "group",
          children: ((r as any).map as any)((k: any): any => ((t as any).jsxs as any)("div", {
            className: "sand-78zum5 sand-1cy8zhl sand-1jnr06f sand-9f619 sand-h8yej3 sand-euugli sand-e8ttls",
            children: [((t as any).jsx as any)(ve, {
              "aria-hidden": !0,
              isSelected: !0,
              size: "lg",
              children: (de as any)(((k as any).kind as any) === ("option" as any) ? (k as any).optionIndex : ($ as any).length)
            }), ((t as any).jsx as any)("span", {
              ...($e as any)((D as any).rowBody, (D as any).rowBodyFlat),
              children: ((t as any).jsx as any)(Me, {
                style: [(D as any).rowLabel, (p as any).settledTextFlat, ((k as any).kind as any) === ("raw" as any) && (p as any).multiSettledRawText],
                children: ((k as any).kind as any) === ("option" as any) ? (ze as any)(v, n, (k as any).option) : (k as any).answer
              })
            })]
          }, ((k as any).kind as any) === ("option" as any) ? `${(F as any)((k as any).option)}-${(k as any).optionIndex}` : "raw"))
        });
        let R: any;
        ((e as any)[17] as any) !== (b as any) ? (R = ((t as any).jsx as any)(Ve, {
          role: "group",
          style: (p as any).widget,
          surface: "elevated",
          children: b
        }), (e as any)[17] = b, (e as any)[18] = R) : R = (e as any)[18], g = R;
        break e;
      }
      let _: any;
      ((e as any)[19] as any) !== (v as any) || ((e as any)[20] as any) !== (n as any) ? (_ = (Ne as any)(v, n), (e as any)[19] = v, (e as any)[20] = n, (e as any)[21] = _) : _ = (e as any)[21];
      const E: any = _;
      S = Ve, y = "group", d = (p as any).widget;
      let O: any;
      ((e as any)[22] as any) !== (E as any) ? (O = ((t as any).jsx as any)(Ee, {
        content: E
      }), (e as any)[22] = E, (e as any)[23] = O) : O = (e as any)[23], ((e as any)[24] as any) !== (O as any) || ((e as any)[25] as any) !== (h as any) ? (m = ((t as any).jsx as any)(Ke, {
        title: O,
        titleId: h
      }), (e as any)[24] = O, (e as any)[25] = h, (e as any)[26] = m) : m = (e as any)[26], z = pe, ((e as any)[27] as any) !== (j as any) ? (s = (j as any)({
        id: "Vtq6ex"
      }), (e as any)[27] = j, (e as any)[28] = s) : s = (e as any)[28], I = "group", C = ((r as any).map as any)((c: any): any => ((t as any).jsxs as any)("div", {
        className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3 sand-euugli sand-e8ttls",
        children: [((c as any).kind as any) === ("option" as any) ? ((t as any).jsx as any)(ve, {
          "aria-hidden": !0,
          style: [(p as any).optionKey, (p as any).settledKey],
          children: (de as any)((c as any).optionIndex)
        }) : null, ((t as any).jsx as any)("span", {
          ...($e as any)((D as any).rowBody),
          children: ((t as any).jsx as any)(Me, {
            style: [(D as any).rowLabel, (p as any).settledText, L && ((c as any).kind as any) === ("raw" as any) && (p as any).multiSettledRawText],
            children: ((c as any).kind as any) === ("option" as any) ? (ze as any)(v, n, (c as any).option) : (c as any).answer
          })
        }), ((t as any).jsx as any)(_e, {})]
      }, ((c as any).kind as any) === ("option" as any) ? `${(F as any)((c as any).option)}-${(c as any).optionIndex}` : "raw"));
    }
    (e as any)[0] = j, (e as any)[1] = l, (e as any)[2] = v, (e as any)[3] = f, (e as any)[4] = h, (e as any)[5] = n, (e as any)[6] = z, (e as any)[7] = S, (e as any)[8] = s, (e as any)[9] = I, (e as any)[10] = C, (e as any)[11] = y, (e as any)[12] = d, (e as any)[13] = m, (e as any)[14] = g;
  } else z = (e as any)[6], S = (e as any)[7], s = (e as any)[8], I = (e as any)[9], C = (e as any)[10], y = (e as any)[11], d = (e as any)[12], m = (e as any)[13], g = (e as any)[14];
  if ((g as any) !== (((Symbol as any).for as any)("react.early_return_sentinel") as any)) return g;
  let o: any;
  ((e as any)[29] as any) !== (z as any) || ((e as any)[30] as any) !== (s as any) || ((e as any)[31] as any) !== (I as any) || ((e as any)[32] as any) !== (C as any) ? (o = ((t as any).jsx as any)(z, {
    label: s,
    role: I,
    children: C
  }), (e as any)[29] = z, (e as any)[30] = s, (e as any)[31] = I, (e as any)[32] = C, (e as any)[33] = o) : o = (e as any)[33];
  let T: any;
  return ((e as any)[34] as any) !== (S as any) || ((e as any)[35] as any) !== (y as any) || ((e as any)[36] as any) !== (d as any) || ((e as any)[37] as any) !== (m as any) || ((e as any)[38] as any) !== (o as any) ? (T = ((t as any).jsxs as any)(S, {
    role: y,
    style: d,
    children: [m, o]
  }), (e as any)[34] = S, (e as any)[35] = y, (e as any)[36] = d, (e as any)[37] = m, (e as any)[38] = o, (e as any)[39] = T) : T = (e as any)[39], T;
}
function ot(this: any, i: any): any {
  (ot as any).d = 579;
  const e: any = ((Re as any).c as any)(24),
    {
      widget: n,
      surface: l
    }: any = i,
    K: any = (l as any) === (void 0 as any) ? "bubble" : l,
    {
      i18n: f,
      _: v
    }: any = (Le as any)(),
    j: any = ((re as any).useId as any)();
  if ((typeof (n as any).prompt as any) != ("string" as any)) return null;
  if ((K as any) === ("elevated" as any)) {
    let y: any;
    ((e as any)[0] as any) !== ((n as any).options as any) ? (y = ((Array as any).isArray as any)((n as any).options) ? (n as any).options : [], (e as any)[0] = (n as any).options, (e as any)[1] = y) : y = (e as any)[1];
    const d: any = y;
    let m: any;
    ((e as any)[2] as any) !== (v as any) ? (m = (v as any)({
      id: "J6hrEy"
    }), (e as any)[2] = v, (e as any)[3] = m) : m = (e as any)[3];
    let g: any;
    if (((e as any)[4] as any) !== (f as any) || ((e as any)[5] as any) !== (d as any) || ((e as any)[6] as any) !== (n as any)) {
      let T: any;
      ((e as any)[8] as any) !== (f as any) || ((e as any)[9] as any) !== (n as any) ? (T = ($: any, L: any): any => ((t as any).jsxs as any)("div", {
        className: "sand-78zum5 sand-1cy8zhl sand-1jnr06f sand-9f619 sand-h8yej3 sand-euugli sand-e8ttls",
        children: [((t as any).jsx as any)(ve, {
          "aria-hidden": !0,
          size: "lg",
          style: (p as any).skippedInk,
          children: (de as any)(L)
        }), ((t as any).jsxs as any)("span", {
          ...($e as any)((D as any).rowBody, (D as any).rowBodyFlat),
          children: [((t as any).jsx as any)(Me, {
            style: [(D as any).rowLabel, (p as any).skippedInk],
            children: (ze as any)(f, n, $)
          }), (($ as any).description as any) == (null as any) ? null : ((t as any).jsx as any)(Me, {
            style: [(D as any).rowDescription, (p as any).skippedInk],
            children: ($ as any).description
          })]
        })]
      }, `${(F as any)($)}-${L}`), (e as any)[8] = f, (e as any)[9] = n, (e as any)[10] = T) : T = (e as any)[10], g = ((d as any).map as any)(T), (e as any)[4] = f, (e as any)[5] = d, (e as any)[6] = n, (e as any)[7] = g;
    } else g = (e as any)[7];
    let o: any;
    return ((e as any)[11] as any) !== (m as any) || ((e as any)[12] as any) !== (g as any) ? (o = ((t as any).jsx as any)(Ve, {
      role: "group",
      style: (p as any).widget,
      surface: "elevated",
      children: ((t as any).jsx as any)(pe, {
        label: m,
        role: "group",
        children: g
      })
    }), (e as any)[11] = m, (e as any)[12] = g, (e as any)[13] = o) : o = (e as any)[13], o;
  }
  let h: any;
  ((e as any)[14] as any) !== (f as any) || ((e as any)[15] as any) !== (n as any) ? (h = (Ne as any)(f, n), (e as any)[14] = f, (e as any)[15] = n, (e as any)[16] = h) : h = (e as any)[16];
  const z: any = h;
  let S: any;
  ((e as any)[17] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (S = [(p as any).widget, (p as any).dismissedInk], (e as any)[17] = S) : S = (e as any)[17];
  let s: any;
  ((e as any)[18] as any) !== (z as any) ? (s = ((t as any).jsx as any)(Ee, {
    content: z
  }), (e as any)[18] = z, (e as any)[19] = s) : s = (e as any)[19];
  let I: any;
  ((e as any)[20] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (I = ((t as any).jsx as any)(Pe, {
    isDotted: !0,
    kind: "muted",
    children: ((t as any).jsx as any)(fe, {
      id: "J6hrEy"
    })
  }), (e as any)[20] = I) : I = (e as any)[20];
  let C: any;
  return ((e as any)[21] as any) !== (s as any) || ((e as any)[22] as any) !== (j as any) ? (C = ((t as any).jsx as any)(Ve, {
    role: "group",
    style: S,
    children: ((t as any).jsx as any)(Ke, {
      title: s,
      titleId: j,
      trailing: I
    })
  }), (e as any)[21] = s, (e as any)[22] = j, (e as any)[23] = C) : C = (e as any)[23], C;
}
export { at as S, lt as a, ot as b };
//# debugId=5df76e07-823a-4dad-a7a5-87706b19349a
