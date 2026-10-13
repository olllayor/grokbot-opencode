declare var Node: any;
declare var global: any;
declare var key: any;
declare var navigator: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "1ce3c0f4-d582-436b-be45-82fcd3a749ca", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-1ce3c0f4-d582-436b-be45-82fcd3a749ca");
  } catch (e: any) {}
} as any)();
import { c as Z, u as me, r as O, j as l, T as w, R as Ds, p as ue } from "./index.eager-vendor-Qbf9YA6n.js";
import { u as Vs, G as Hs, a as Gn, v as Us, b as Kn, c as Gs, d as Ks } from "./chunk-grok-bot-secret-problem-text-DKm2VrEb.js";
import { hH as Ws, h$ as Js, bh as Ys, d0 as Wn, jh as Jn, ji as cn, a_ as Yn, b0 as En, ff as Xs, jm as Qs, aU as et, cm as nt, eY as Xn, fB as Ge, aK as st } from "./index.eager-app-Cj5f8Gby.js";
import { aY as J } from "./index.eager-platform-Dcfeegfw.js";
import { g as pe, aX as ne, x as xe, cC as tt, cD as lt, bN as Le, W as vn, bx as at, cE as Qn, P as it, O as rt, I as Ve, cF as ot, cG as ct, z as dt, cH as On, cI as Ke, t as Ee, aV as ut } from "./index-ZYxf-aBb.js";
import { a as Fe, P as mt } from "./chunk-use-team-bot-access-BG6AYhPN.js";
import { A as ft } from "./chunk-plugins-rows-2d0UrD7L.js";
import { S as be } from "./chunk-SegmentedControl-Bj94OhnT.js";
import { b as Xe, a as es } from "./chunk-team-setup-pills-7uDu4vf1.js";
import { t as pt, e as ht, b as gt, a as yt } from "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
const jt: any = {
    empty: {
      kogj98: "sand-1ghz6dp",
      k8WAf4: "sand-1vvogim",
      kMwMTN: "sand-169k319",
      $$css: !0
    }
  },
  vt: string = "new-secret";
function ns(this: any, s: any): any {
  (ns as any).d = 967;
  const e: any = ((Z as any).c as any)(25),
    {
      secret: n,
      disabled: t,
      isPending: i,
      onReplace: r,
      onRemove: a
    }: any = s;
  let o: any, d: any, u: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = {
    className: "sand-rvj5dj sand-ju1xpo sand-6s0dn4 sand-1v2ro7d sand-1vvogim sand-aope02 sand-1hkp6id sand-1q0q8m5 sand-1kp61ed sand-14tvv71"
  }, d = {
    className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-euugli"
  }, u = {
    className: "sand-1ey7xld sand-1wm8ruf sand-tyxrsu sand-j0a0fe"
  }, (e as any)[0] = o, (e as any)[1] = d, (e as any)[2] = u) : (o = (e as any)[0], d = (e as any)[1], u = (e as any)[2]);
  let c: any;
  ((e as any)[3] as any) !== ((n as any).name as any) ? (c = ((l as any).jsx as any)("code", {
    ...u,
    children: (n as any).name
  }), (e as any)[3] = (n as any).name, (e as any)[4] = c) : c = (e as any)[4];
  let m: any;
  ((e as any)[5] as any) !== ((n as any).description as any) ? (m = (((n as any).description as any).length as any) > (0 as any) ? ((l as any).jsx as any)(J, {
    as: "span",
    color: "secondary",
    size: "xs",
    children: (n as any).description
  }) : null, (e as any)[5] = (n as any).description, (e as any)[6] = m) : m = (e as any)[6];
  let f: any;
  ((e as any)[7] as any) !== (c as any) || ((e as any)[8] as any) !== (m as any) ? (f = ((l as any).jsxs as any)("div", {
    ...d,
    children: [c, m]
  }), (e as any)[7] = c, (e as any)[8] = m, (e as any)[9] = f) : f = (e as any)[9];
  let p: any;
  ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = {
    className: "sand-78zum5 sand-17d4w8g"
  }, (e as any)[10] = p) : p = (e as any)[10];
  const g: any = t || i;
  let h: any;
  ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = ((l as any).jsx as any)(w, {
    id: "fqSfXY"
  }), (e as any)[11] = h) : h = (e as any)[11];
  let y: any;
  ((e as any)[12] as any) !== (r as any) || ((e as any)[13] as any) !== (g as any) ? (y = ((l as any).jsx as any)(pe, {
    disabled: g,
    onClick: r,
    size: "sm",
    type: "button",
    variant: "secondary",
    children: h
  }), (e as any)[12] = r, (e as any)[13] = g, (e as any)[14] = y) : y = (e as any)[14];
  let b: any;
  ((e as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = ((l as any).jsx as any)(w, {
    id: "t/YqKh"
  }), (e as any)[15] = b) : b = (e as any)[15];
  let j: any;
  ((e as any)[16] as any) !== (i as any) || ((e as any)[17] as any) !== (a as any) ? (j = ((l as any).jsx as any)(pe, {
    disabled: i,
    onClick: a,
    size: "sm",
    type: "button",
    variant: "secondary",
    children: b
  }), (e as any)[16] = i, (e as any)[17] = a, (e as any)[18] = j) : j = (e as any)[18];
  let v: any;
  ((e as any)[19] as any) !== (y as any) || ((e as any)[20] as any) !== (j as any) ? (v = ((l as any).jsxs as any)("div", {
    ...p,
    children: [y, j]
  }), (e as any)[19] = y, (e as any)[20] = j, (e as any)[21] = v) : v = (e as any)[21];
  let x: any;
  return ((e as any)[22] as any) !== (v as any) || ((e as any)[23] as any) !== (f as any) ? (x = ((l as any).jsxs as any)("li", {
    ...o,
    children: [f, v]
  }), (e as any)[22] = v, (e as any)[23] = f, (e as any)[24] = x) : x = (e as any)[24], x;
}
function xt(this: any, s: any): any {
  (xt as any).d = 966;
  const e: any = ((Z as any).c as any)(46),
    {
      serverId: n,
      agentName: t,
      disabled: i
    }: any = s,
    r: any = (i as any) === (void 0 as any) ? !1 : i,
    {
      _: a
    }: any = (me as any)(),
    o: any = ((O as any).useId as any)(),
    d: any = (Ws as any)(n),
    u: any = (Js as any)(),
    [c, m]: any = ((O as any).useState as any)(null),
    [f, p]: any = ((O as any).useState as any)(null),
    [g, h]: any = ((O as any).useState as any)(null),
    y: any = ((u as any).saveFailure as any) !== (g as any) ? (u as any).saveFailure : null,
    b: any = (Vs as any)(),
    j: any = ((O as any).useRef as any)(null),
    v: any = ((O as any).useRef as any)(null),
    x: any = ((O as any).useRef as any)(null),
    _: any = (Ys as any)(d) ?? [];
  let k: any;
  ((e as any)[0] as any) !== (c?.replacing as any) ? (k = (z: any): any => ((z as any).name as any) !== (c?.replacing as any), (e as any)[0] = c?.replacing, (e as any)[1] = k) : k = (e as any)[1];
  const S: any = ((_ as any).filter as any)(k),
    T: any = ((d as any).status as any) === ("loading" as any) && ((_ as any).length as any) === (0 as any),
    I: any = ((d as any).status as any) === ("failed" as any) || ((d as any).status as any) === ("unavailable" as any),
    C: any = ((d as any).status as any) === ("ready" as any) || ((d as any).status as any) === ("empty" as any);
  let P: any;
  ((e as any)[2] as any) !== ((u as any).saveFailure as any) ? (P = (z: any): any => {
    (m as any)(z), (p as any)(null), (h as any)((u as any).saveFailure);
  }, (e as any)[2] = (u as any).saveFailure, (e as any)[3] = P) : P = (e as any)[3];
  const N: any = P;
  let E: any;
  ((e as any)[4] as any) !== (N as any) ? (E = (): any => (N as any)(null), (e as any)[4] = N, (e as any)[5] = E) : E = (e as any)[5];
  const D: any = E,
    A: any = (z: any): any => {
      if (((z as any).preventDefault as any)(), (c as any) === (null as any) || r || (u as any).isPending || ((c as any).replacing as any) === (null as any) && !C) return;
      const R: any = (x as any).current,
        K: any = (c as any).replacing ?? (j as any).current?.value.trim().toUpperCase() ?? "",
        te: any = (v as any).current?.value.trim() ?? "",
        ee: any = (((R?.value ?? "") as any).trim as any)(),
        re: any = (Us as any)(K);
      if ((re as any) !== (null as any)) {
        (p as any)(((b as any).name as any)(re));
        return;
      }
      if (((c as any).replacing as any) === (null as any) && ((_ as any).some as any)((ke: any): any => ((ke as any).name as any) === (K as any))) {
        (p as any)((a as any)({
          id: "Zqkifc",
          values: {
            name: K
          }
        }));
        return;
      }
      const he: any = (Kn as any)(ee);
      if ((he as any) !== (null as any)) {
        (p as any)(((b as any).value as any)(he));
        return;
      }
      (p as any)(null), (h as any)((u as any).saveFailure), ((((u as any).put as any)(n, {
        name: K,
        description: te,
        value: ee
      }) as any).then as any)((): any => {
        (R as any) != (null as any) && (R as any).isConnected && ((R as any).value = ""), (D as any)();
      }, bt);
    };
  let U: any = null;
  if ((f as any) !== (null as any)) U = f;else if ((y as any) !== (null as any)) {
    let z: any;
    ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (z = ((l as any).jsx as any)(w, {
      id: "JUpeyb"
    }), (e as any)[6] = z) : z = (e as any)[6], U = z;
  }
  let B: any = null;
  if (T) {
    let z: any;
    ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (z = ((l as any).jsx as any)(J, {
      as: "p",
      color: "secondary",
      role: "status",
      size: "sm",
      children: ((l as any).jsx as any)(w, {
        id: "yQE2r9"
      })
    }), (e as any)[7] = z) : z = (e as any)[7], B = z;
  } else if (((_ as any).length as any) === (0 as any) && !I) {
    let z: any;
    ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (z = ((l as any).jsx as any)(J, {
      as: "p",
      rootStyle: (jt as any).empty,
      size: "sm",
      children: ((l as any).jsx as any)(w, {
        id: "pA2odF"
      })
    }), (e as any)[8] = z) : z = (e as any)[8], B = z;
  } else if (((S as any).length as any) > (0 as any)) {
    let z: any;
    ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (z = {
      className: "sand-78zum5 sand-dt5ytf sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c"
    }, (e as any)[9] = z) : z = (e as any)[9];
    let R: any;
    ((e as any)[10] as any) !== (u as any) || ((e as any)[11] as any) !== (r as any) || ((e as any)[12] as any) !== (N as any) || ((e as any)[13] as any) !== (n as any) ? (R = (K: any): any => ((l as any).jsx as any)(ns, {
      disabled: r,
      isPending: (u as any).isPending,
      onRemove: (): any => ((u as any).remove as any)({
        serverId: n,
        name: (K as any).name
      }),
      onReplace: (): any => (N as any)({
        replacing: (K as any).name
      }),
      secret: K
    }, (K as any).name), (e as any)[10] = u, (e as any)[11] = r, (e as any)[12] = N, (e as any)[13] = n, (e as any)[14] = R) : R = (e as any)[14], B = ((l as any).jsx as any)("ul", {
      ...z,
      children: ((S as any).map as any)(R)
    });
  }
  let q: any, L: any, V: any;
  ((e as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (q = {
    className: "sand-78zum5 sand-dt5ytf sand-883omv sand-euugli"
  }, L = {
    className: "sand-78zum5 sand-6s0dn4 sand-1qughib sand-1v2ro7d"
  }, V = {
    className: "sand-78zum5 sand-dt5ytf sand-1jnr06f sand-euugli"
  }, (e as any)[15] = q, (e as any)[16] = L, (e as any)[17] = V) : (q = (e as any)[15], L = (e as any)[16], V = (e as any)[17]);
  let $: any;
  ((e as any)[18] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? ($ = ((l as any).jsx as any)(w, {
    id: "MAv87s"
  }), (e as any)[18] = $) : $ = (e as any)[18];
  let F: any;
  ((e as any)[19] as any) !== (o as any) ? (F = ((l as any).jsx as any)(J, {
    as: "h3",
    id: o,
    size: "sm",
    weight: "semibold",
    children: $
  }), (e as any)[19] = o, (e as any)[20] = F) : F = (e as any)[20];
  let G: any;
  ((e as any)[21] as any) !== (t as any) ? (G = ((l as any).jsx as any)(J, {
    as: "span",
    color: "secondary",
    size: "sm",
    children: ((l as any).jsx as any)(w, {
      id: "6eckAH",
      values: {
        agentName: t
      }
    })
  }), (e as any)[21] = t, (e as any)[22] = G) : G = (e as any)[22];
  let H: any;
  ((e as any)[23] as any) !== (G as any) || ((e as any)[24] as any) !== (F as any) ? (H = ((l as any).jsxs as any)("div", {
    ...V,
    children: [F, G]
  }), (e as any)[23] = G, (e as any)[24] = F, (e as any)[25] = H) : H = (e as any)[25];
  const se: any = r || !C || (u as any).isPending || (c as any) !== (null as any);
  let W: any;
  ((e as any)[26] as any) !== (N as any) ? (W = (): any => (N as any)({
    replacing: null
  }), (e as any)[26] = N, (e as any)[27] = W) : W = (e as any)[27];
  let ae: any;
  ((e as any)[28] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ae = ((l as any).jsx as any)(w, {
    id: "oBU93f"
  }), (e as any)[28] = ae) : ae = (e as any)[28];
  let ie: any;
  ((e as any)[29] as any) !== (se as any) || ((e as any)[30] as any) !== (W as any) ? (ie = ((l as any).jsx as any)(pe, {
    disabled: se,
    onClick: W,
    size: "sm",
    type: "button",
    variant: "secondary",
    children: ae
  }), (e as any)[29] = se, (e as any)[30] = W, (e as any)[31] = ie) : ie = (e as any)[31];
  let X: any;
  ((e as any)[32] as any) !== (H as any) || ((e as any)[33] as any) !== (ie as any) ? (X = ((l as any).jsxs as any)("div", {
    ...L,
    children: [H, ie]
  }), (e as any)[32] = H, (e as any)[33] = ie, (e as any)[34] = X) : X = (e as any)[34];
  const le: any = (c as any) !== (null as any) ? ((l as any).jsxs as any)("form", {
    onSubmit: A,
    className: "sand-78zum5 sand-dt5ytf sand-167g77z sand-c7ga6q sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c",
    children: [((l as any).jsxs as any)("label", {
      className: "sand-78zum5 sand-dt5ytf sand-1jnr06f",
      children: [((l as any).jsx as any)(J, {
        as: "span",
        color: "secondary",
        size: "xs",
        children: ((l as any).jsx as any)(w, {
          id: "ysrOqg"
        })
      }), ((l as any).jsx as any)("input", {
        autoCapitalize: "characters",
        autoComplete: "off",
        autoFocus: ((c as any).replacing as any) === (null as any),
        defaultValue: (c as any).replacing ?? "",
        maxLength: Hs,
        placeholder: "CRM_API_TOKEN",
        readOnly: ((c as any).replacing as any) !== (null as any),
        ref: j,
        spellCheck: !1,
        className: "sand-1ghz6dp sand-knfcqp sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-jbqb8w sand-jb2p0i sand-11wthnw sand-tyxrsu sand-1h7ufjq"
      })]
    }), ((l as any).jsxs as any)("label", {
      className: "sand-78zum5 sand-dt5ytf sand-1jnr06f",
      children: [((l as any).jsx as any)(J, {
        as: "span",
        color: "secondary",
        size: "xs",
        children: ((l as any).jsx as any)(w, {
          id: "0tI9Xz"
        })
      }), ((l as any).jsx as any)("input", {
        autoComplete: "off",
        defaultValue: ((c as any).replacing as any) === (null as any) ? "" : ((_ as any).find as any)((z: any): any => ((z as any).name as any) === ((c as any).replacing as any))?.description ?? "",
        maxLength: Gn,
        ref: v,
        className: "sand-1ghz6dp sand-knfcqp sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-jbqb8w sand-jb2p0i sand-11wthnw sand-tyxrsu sand-1h7ufjq"
      })]
    }), ((l as any).jsxs as any)("label", {
      className: "sand-78zum5 sand-dt5ytf sand-1jnr06f",
      children: [((l as any).jsx as any)(J, {
        as: "span",
        color: "secondary",
        size: "xs",
        children: ((l as any).jsx as any)(w, {
          id: "wMHvYH"
        })
      }), ((l as any).jsx as any)("input", {
        autoComplete: "off",
        autoFocus: ((c as any).replacing as any) !== (null as any),
        placeholder: (a as any)({
          id: "qNV794"
        }),
        ref: x,
        spellCheck: !1,
        type: "password",
        className: "sand-1ghz6dp sand-knfcqp sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-jbqb8w sand-jb2p0i sand-11wthnw sand-tyxrsu sand-1h7ufjq"
      })]
    }), (U as any) !== (null as any) ? ((l as any).jsx as any)(J, {
      as: "p",
      color: "red",
      role: "alert",
      size: "xs",
      children: U
    }) : null, ((l as any).jsxs as any)("div", {
      className: "sand-78zum5 sand-13a6bvl sand-17d4w8g",
      children: [((l as any).jsx as any)(pe, {
        disabled: (u as any).isPending,
        onClick: D,
        size: "sm",
        type: "button",
        variant: "secondary",
        children: ((l as any).jsx as any)(w, {
          id: "dEgA5A"
        })
      }), ((l as any).jsx as any)(pe, {
        disabled: r || (u as any).isPending || ((c as any).replacing as any) === (null as any) && !C,
        size: "sm",
        type: "submit",
        variant: "primary",
        children: ((c as any).replacing as any) === (null as any) ? ((l as any).jsx as any)(w, {
          id: "zNpxuN"
        }) : ((l as any).jsx as any)(w, {
          id: "VyryCM"
        })
      })]
    })]
  }, (c as any).replacing ?? vt) : null;
  let Q: any;
  ((e as any)[35] as any) !== (u as any) || ((e as any)[36] as any) !== (I as any) || ((e as any)[37] as any) !== (n as any) ? (Q = ((u as any).removeFailure as any) !== (null as any) || I ? ((l as any).jsxs as any)((l as any).Fragment, {
    children: [((l as any).jsx as any)(J, {
      as: "p",
      color: "red",
      role: "alert",
      size: "sm",
      children: ((l as any).jsx as any)(w, {
        id: "D2AZQg"
      })
    }), I ? ((l as any).jsx as any)(pe, {
      disabled: (u as any).isPending,
      onClick: (): any => ((u as any).refresh as any)(n),
      size: "sm",
      type: "button",
      variant: "secondary",
      children: ((l as any).jsx as any)(w, {
        id: "qJb6G2"
      })
    }) : null]
  }) : null, (e as any)[35] = u, (e as any)[36] = I, (e as any)[37] = n, (e as any)[38] = Q) : Q = (e as any)[38];
  let M: any;
  return ((e as any)[39] as any) !== (o as any) || ((e as any)[40] as any) !== (B as any) || ((e as any)[41] as any) !== (X as any) || ((e as any)[42] as any) !== (le as any) || ((e as any)[43] as any) !== (Q as any) || ((e as any)[44] as any) !== (q as any) ? (M = ((l as any).jsxs as any)("section", {
    "aria-labelledby": o,
    ...q,
    children: [X, le, B, Q]
  }), (e as any)[39] = o, (e as any)[40] = B, (e as any)[41] = X, (e as any)[42] = le, (e as any)[43] = Q, (e as any)[44] = q, (e as any)[45] = M) : M = (e as any)[45], M;
}
function bt(this: any, s: any): any {
  (Wn as any)(s, {
    tags: {
      sand_area: "grok-bot-team"
    }
  });
}
function Y(this: any, s: any, e: any, n: any): any {
  function t(this: any, o: any, d: any): any {
    var u: any;
    ((Object as any).defineProperty as any)(o, "_zod", {
      value: (o as any)._zod ?? {},
      enumerable: !1
    }), ((u = (o as any)._zod) as any).traits ?? ((u as any).traits = new (Set as any)()), ((((o as any)._zod as any).traits as any).add as any)(s), (e as any)(o, d);
    for (const c in (a as any).prototype) c in o || ((Object as any).defineProperty as any)(o, c, {
      value: ((((a as any).prototype as any)[c] as any).bind as any)(o)
    });
    ((o as any)._zod as any).constr = a, ((o as any)._zod as any).def = d;
  }
  const i: any = n?.Parent ?? Object;
  class r extends (i as any) {
    [key: string]: any;
  }
  ((Object as any).defineProperty as any)(r, "name", {
    value: s
  });
  function a(this: any, o: any): any {
    var d: any;
    const u: any = n?.Parent ? new (r as any)() : this;
    (t as any)(u, o), ((d = (u as any)._zod) as any).deferred ?? ((d as any).deferred = []);
    for (const c of ((u as any)._zod as any).deferred) (c as any)();
    return u;
  }
  return ((Object as any).defineProperty as any)(a, "init", {
    value: t
  }), ((Object as any).defineProperty as any)(a, (Symbol as any).hasInstance, {
    value: (o: any): any => n?.Parent && o instanceof (n as any).Parent ? !0 : o?._zod?.traits?.has(s)
  }), ((Object as any).defineProperty as any)(a, "name", {
    value: s
  }), a;
}
class We extends (Error as any) {
  [key: string]: any;
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
const ss: any = {};
function Re(this: any, s: any): any {
  return ss;
}
function _t(this: any, s: any): any {
  const e: any = ((((Object as any).values as any)(s) as any).filter as any)((t: any): any => (typeof t as any) == ("number" as any));
  return ((((((Object as any).entries as any)(s) as any).filter as any)(([t, i]: any): any => (((e as any).indexOf as any)(+t) as any) === (-1 as any)) as any).map as any)(([t, i]: any): any => i);
}
function kt(this: any, s: any, e: any): any {
  return (typeof e as any) == ("bigint" as any) ? ((e as any).toString as any)() : e;
}
function ts(this: any, s: any): any {
  return {
    get value(): any {
      {
        const e: any = (s as any)();
        return ((Object as any).defineProperty as any)(this, "value", {
          value: e
        }), e;
      }
    }
  };
}
function ls(this: any, s: any): any {
  return (s as any) == (null as any);
}
function as(this: any, s: any): any {
  const e: any = ((s as any).startsWith as any)("^") ? 1 : 0,
    n: any = ((s as any).endsWith as any)("$") ? ((s as any).length as any) - (1 as any) : (s as any).length;
  return ((s as any).slice as any)(e, n);
}
function Se(this: any, s: any, e: any, n: any): any {
  ((Object as any).defineProperty as any)(s, e, {
    get(): any {
      {
        const t: any = (n as any)();
        return (s as any)[e] = t, t;
      }
    },
    set(t: any): any {
      ((Object as any).defineProperty as any)(s, e, {
        value: t
      });
    },
    configurable: !0
  });
}
function is(this: any, s: any, e: any, n: any): any {
  ((Object as any).defineProperty as any)(s, e, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function qe(this: any, s: any): any {
  return ((JSON as any).stringify as any)(s);
}
const rs: any = (Error as any).captureStackTrace ? (Error as any).captureStackTrace : (...s: any): any => {};
function dn(this: any, s: any): any {
  return (typeof s as any) == ("object" as any) && (s as any) !== (null as any) && !((Array as any).isArray as any)(s);
}
const wt: any = (ts as any)((): any => {
  if ((typeof navigator as any) < ("u" as any) && navigator?.userAgent?.includes("Cloudflare")) return !1;
  try {
    const s: any = Function;
    return new (s as any)(""), !0;
  } catch {
    return !1;
  }
});
function St(this: any, s: any): any {
  if (((dn as any)(s) as any) === (!1 as any)) return !1;
  const e: any = (s as any).constructor;
  if ((e as any) === (void 0 as any)) return !0;
  const n: any = (e as any).prototype;
  return !(((dn as any)(n) as any) === (!1 as any) || (((((Object as any).prototype as any).hasOwnProperty as any).call as any)(n, "isPrototypeOf") as any) === (!1 as any));
}
const zt: any = new (Set as any)(["string", "number", "symbol"]);
function os(this: any, s: any): any {
  return ((s as any).replace as any)(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ct(this: any, s: any, e: any, n: any): any {
  const t: any = new (((s as any)._zod as any).constr as any)(e ?? ((s as any)._zod as any).def);
  return (!e || n?.parent) && (((t as any)._zod as any).parent = s), t;
}
function ve(this: any, s: any): any {
  return {};
}
function It(this: any, s: any): any {
  return ((((Object as any).keys as any)(s) as any).filter as any)((e: any): any => ((((s as any)[e] as any)._zod as any).optin as any) === ("optional" as any) && ((((s as any)[e] as any)._zod as any).optout as any) === ("optional" as any));
}
function an(this: any, s: any, e: any = 0): any {
  for (let n: any = e; (n as any) < (((s as any).issues as any).length as any); n++) if ((((s as any).issues as any)[n]?.continue as any) !== (!0 as any)) return !0;
  return !1;
}
function ze(this: any, s: any, e: any): any {
  return ((e as any).map as any)((n: any): any => {
    var t: any;
    return ((t = n) as any).path ?? ((t as any).path = []), (((n as any).path as any).unshift as any)(s), n;
  });
}
function Ze(this: any, s: any): any {
  return (typeof s as any) == ("string" as any) ? s : s?.message;
}
function Ae(this: any, s: any, e: any, n: any): any {
  const t: any = {
    ...s,
    path: (s as any).path ?? []
  };
  if (!(s as any).message) {
    const i: any = (Ze as any)((s as any).inst?._zod.def?.error?.(s)) ?? (Ze as any)(e?.error?.(s)) ?? (Ze as any)((n as any).customError?.(s)) ?? (Ze as any)((n as any).localeError?.(s)) ?? "Invalid input";
    (t as any).message = i;
  }
  return delete (t as any).inst, delete (t as any).continue, e?.reportInput || delete (t as any).input, t;
}
function cs(this: any, s: any): any {
  return ((Array as any).isArray as any)(s) ? "array" : (typeof s as any) == ("string" as any) ? "string" : "unknown";
}
const ds: any = (s: any, e: any): any => {
    (s as any).name = "$ZodError", ((Object as any).defineProperty as any)(s, "_zod", {
      value: (s as any)._zod,
      enumerable: !1
    }), ((Object as any).defineProperty as any)(s, "issues", {
      value: e,
      enumerable: !1
    }), ((Object as any).defineProperty as any)(s, "message", {
      get(): any {
        return ((JSON as any).stringify as any)(e, kt, 2);
      },
      enumerable: !0
    }), ((Object as any).defineProperty as any)(s, "toString", {
      value: (): any => (s as any).message,
      enumerable: !1
    });
  },
  Tt: any = (Y as any)("$ZodError", ds),
  Qe: any = (Y as any)("$ZodError", ds, {
    Parent: Error
  }),
  Nt: any = (s: any): any => (e: any, n: any, t: any, i: any): any => {
    const r: any = t ? ((Object as any).assign as any)(t, {
        async: !1
      }) : {
        async: !1
      },
      a: any = (((e as any)._zod as any).run as any)({
        value: n,
        issues: []
      }, r);
    if (a instanceof Promise) throw new (We as any)();
    if (((a as any).issues as any).length) {
      const o: any = new ((i?.Err ?? s) as any)((((a as any).issues as any).map as any)((d: any): any => (Ae as any)(d, r, (Re as any)())));
      throw (rs as any)(o, i?.callee), o;
    }
    return (a as any).value;
  },
  Pt: any = (Nt as any)(Qe),
  $t: any = (s: any): any => async (e: any, n: any, t: any, i: any): Promise<any> => {
    const r: any = t ? ((Object as any).assign as any)(t, {
      async: !0
    }) : {
      async: !0
    };
    let a: any = (((e as any)._zod as any).run as any)({
      value: n,
      issues: []
    }, r);
    if (a instanceof Promise && (a = await a), ((a as any).issues as any).length) {
      const o: any = new ((i?.Err ?? s) as any)((((a as any).issues as any).map as any)((d: any): any => (Ae as any)(d, r, (Re as any)())));
      throw (rs as any)(o, i?.callee), o;
    }
    return (a as any).value;
  },
  Et: any = ($t as any)(Qe),
  Ot: any = (s: any): any => (e: any, n: any, t: any): any => {
    const i: any = t ? {
        ...t,
        async: !1
      } : {
        async: !1
      },
      r: any = (((e as any)._zod as any).run as any)({
        value: n,
        issues: []
      }, i);
    if (r instanceof Promise) throw new (We as any)();
    return ((r as any).issues as any).length ? {
      success: !1,
      error: new ((s ?? Tt) as any)((((r as any).issues as any).map as any)((a: any): any => (Ae as any)(a, i, (Re as any)())))
    } : {
      success: !0,
      data: (r as any).value
    };
  },
  us: any = (Ot as any)(Qe),
  Rt: any = (s: any): any => async (e: any, n: any, t: any): Promise<any> => {
    const i: any = t ? ((Object as any).assign as any)(t, {
      async: !0
    }) : {
      async: !0
    };
    let r: any = (((e as any)._zod as any).run as any)({
      value: n,
      issues: []
    }, i);
    return r instanceof Promise && (r = await r), ((r as any).issues as any).length ? {
      success: !1,
      error: new (s as any)((((r as any).issues as any).map as any)((a: any): any => (Ae as any)(a, i, (Re as any)())))
    } : {
      success: !0,
      data: (r as any).value
    };
  },
  ms: any = (Rt as any)(Qe),
  At: any = (s: any): any => {
    const e: any = s ? `[\\s\\S]{${s?.minimum ?? 0},${s?.maximum ?? ""}}` : "[\\s\\S]*";
    return new (RegExp as any)(`^${e}$`);
  },
  xn: any = (Y as any)("$ZodCheck", (s: any, e: any): any => {
    var n: any;
    (s as any)._zod ?? ((s as any)._zod = {}), ((s as any)._zod as any).def = e, ((n = (s as any)._zod) as any).onattach ?? ((n as any).onattach = []);
  }),
  qt: any = (Y as any)("$ZodCheckMaxLength", (s: any, e: any): any => {
    var n: any;
    ((xn as any).init as any)(s, e), ((n = ((s as any)._zod as any).def) as any).when ?? ((n as any).when = (t: any): any => {
      const i: any = (t as any).value;
      return !(ls as any)(i) && ((i as any).length as any) !== (void 0 as any);
    }), ((((s as any)._zod as any).onattach as any).push as any)((t: any): any => {
      const i: any = (((t as any)._zod as any).bag as any).maximum ?? (Number as any).POSITIVE_INFINITY;
      ((e as any).maximum as any) < (i as any) && ((((t as any)._zod as any).bag as any).maximum = (e as any).maximum);
    }), ((s as any)._zod as any).check = (t: any): any => {
      const i: any = (t as any).value;
      if (((i as any).length as any) <= ((e as any).maximum as any)) return;
      const a: any = (cs as any)(i);
      (((t as any).issues as any).push as any)({
        origin: a,
        code: "too_big",
        maximum: (e as any).maximum,
        inclusive: !0,
        input: i,
        inst: s,
        continue: !(e as any).abort
      });
    };
  }),
  Bt: any = (Y as any)("$ZodCheckMinLength", (s: any, e: any): any => {
    var n: any;
    ((xn as any).init as any)(s, e), ((n = ((s as any)._zod as any).def) as any).when ?? ((n as any).when = (t: any): any => {
      const i: any = (t as any).value;
      return !(ls as any)(i) && ((i as any).length as any) !== (void 0 as any);
    }), ((((s as any)._zod as any).onattach as any).push as any)((t: any): any => {
      const i: any = (((t as any)._zod as any).bag as any).minimum ?? (Number as any).NEGATIVE_INFINITY;
      ((e as any).minimum as any) > (i as any) && ((((t as any)._zod as any).bag as any).minimum = (e as any).minimum);
    }), ((s as any)._zod as any).check = (t: any): any => {
      const i: any = (t as any).value;
      if (((i as any).length as any) >= ((e as any).minimum as any)) return;
      const a: any = (cs as any)(i);
      (((t as any).issues as any).push as any)({
        origin: a,
        code: "too_small",
        minimum: (e as any).minimum,
        inclusive: !0,
        input: i,
        inst: s,
        continue: !(e as any).abort
      });
    };
  }),
  Lt: any = (Y as any)("$ZodCheckOverwrite", (s: any, e: any): any => {
    ((xn as any).init as any)(s, e), ((s as any)._zod as any).check = (n: any): any => {
      (n as any).value = ((e as any).tx as any)((n as any).value);
    };
  });
class Ft {
  declare args: any;
  declare indent: any;
  declare content: any;
  [key: string]: any;
  constructor(e: any = []) {
    (this as any).content = [], (this as any).indent = 0, this && ((this as any).args = e);
  }
  indented(e: any): any {
    (this as any).indent += 1, (e as any)(this), (this as any).indent -= 1;
  }
  write(e: any): any {
    if ((typeof e as any) == ("function" as any)) {
      (e as any)(this, {
        execution: "sync"
      }), (e as any)(this, {
        execution: "async"
      });
      return;
    }
    const t: any = ((((e as any).split as any)(`
`) as any).filter as any)((a: any): any => a),
      i: any = ((Math as any).min as any)(...((t as any).map as any)((a: any): any => ((a as any).length as any) - ((((a as any).trimStart as any)() as any).length as any))),
      r: any = ((((t as any).map as any)((a: any): any => ((a as any).slice as any)(i)) as any).map as any)((a: any): any => (((" " as any).repeat as any)(((this as any).indent as any) * (2 as any)) as any) + (a as any));
    for (const a of r) (((this as any).content as any).push as any)(a);
  }
  compile(): any {
    const e: any = Function,
      n: any = this?.args,
      i: any = [...(((this?.content ?? [""]) as any).map as any)((r: any): any => `  ${r}`)];
    return new (e as any)(...n, ((i as any).join as any)(`
`));
  }
}
const Mt: any = {
    major: 4,
    minor: 0,
    patch: 0
  },
  je: any = (Y as any)("$ZodType", (s: any, e: any): any => {
    var n: any;
    s ?? (s = {}), ((s as any)._zod as any).def = e, ((s as any)._zod as any).bag = ((s as any)._zod as any).bag || {}, ((s as any)._zod as any).version = Mt;
    const t: any = [...((((s as any)._zod as any).def as any).checks ?? [])];
    ((((s as any)._zod as any).traits as any).has as any)("$ZodCheck") && ((t as any).unshift as any)(s);
    for (const i of t) for (const r of ((i as any)._zod as any).onattach) (r as any)(s);
    if (((t as any).length as any) === (0 as any)) ((n = (s as any)._zod) as any).deferred ?? ((n as any).deferred = []), ((s as any)._zod as any).deferred?.push((): any => {
      ((s as any)._zod as any).run = ((s as any)._zod as any).parse;
    });else {
      const i: any = (r: any, a: any, o: any): any => {
        let d: any = (an as any)(r),
          u: any;
        for (const c of a) {
          if ((((c as any)._zod as any).def as any).when) {
            if (!((((c as any)._zod as any).def as any).when as any)(r)) continue;
          } else if (d) continue;
          const m: any = ((r as any).issues as any).length,
            f: any = (((c as any)._zod as any).check as any)(r);
          if (f instanceof Promise && (o?.async as any) === (!1 as any)) throw new (We as any)();
          if (u || f instanceof Promise) u = (((u ?? ((Promise as any).resolve as any)()) as any).then as any)(async (): Promise<any> => {
            await f, (((r as any).issues as any).length as any) !== (m as any) && (d || (d = (an as any)(r, m)));
          });else {
            if ((((r as any).issues as any).length as any) === (m as any)) continue;
            d || (d = (an as any)(r, m));
          }
        }
        return u ? ((u as any).then as any)((): any => r) : r;
      };
      ((s as any)._zod as any).run = (r: any, a: any): any => {
        const o: any = (((s as any)._zod as any).parse as any)(r, a);
        if (o instanceof Promise) {
          if (((a as any).async as any) === (!1 as any)) throw new (We as any)();
          return ((o as any).then as any)((d: any): any => (i as any)(d, t, a));
        }
        return (i as any)(o, t, a);
      };
    }
    (s as any)["~standard"] = {
      validate: (i: any): any => {
        try {
          const r: any = (us as any)(s, i);
          return (r as any).success ? {
            value: (r as any).data
          } : {
            issues: (r as any).error?.issues
          };
        } catch {
          return (((ms as any)(s, i) as any).then as any)((a: any): any => (a as any).success ? {
            value: (a as any).data
          } : {
            issues: (a as any).error?.issues
          });
        }
      },
      vendor: "zod",
      version: 1
    };
  }),
  Zt: any = (Y as any)("$ZodString", (s: any, e: any): any => {
    ((je as any).init as any)(s, e), ((s as any)._zod as any).pattern = (([...(s?._zod.bag?.patterns ?? [])] as any).pop as any)() ?? (At as any)(((s as any)._zod as any).bag), ((s as any)._zod as any).parse = (n: any, t: any): any => {
      if ((e as any).coerce) try {
        (n as any).value = (String as any)((n as any).value);
      } catch {}
      return (typeof (n as any).value as any) == ("string" as any) || (((n as any).issues as any).push as any)({
        expected: "string",
        code: "invalid_type",
        input: (n as any).value,
        inst: s
      }), n;
    };
  }),
  Dt: any = (Y as any)("$ZodNever", (s: any, e: any): any => {
    ((je as any).init as any)(s, e), ((s as any)._zod as any).parse = (n: any, t: any): any => ((((n as any).issues as any).push as any)({
      expected: "never",
      code: "invalid_type",
      input: (n as any).value,
      inst: s
    }), n);
  });
function Rn(this: any, s: any, e: any, n: any): any {
  ((s as any).issues as any).length && (((e as any).issues as any).push as any)(...(ze as any)(n, (s as any).issues)), ((e as any).value as any)[n] = (s as any).value;
}
const Vt: any = (Y as any)("$ZodArray", (s: any, e: any): any => {
  ((je as any).init as any)(s, e), ((s as any)._zod as any).parse = (n: any, t: any): any => {
    const i: any = (n as any).value;
    if (!((Array as any).isArray as any)(i)) return (((n as any).issues as any).push as any)({
      expected: "array",
      code: "invalid_type",
      input: i,
      inst: s
    }), n;
    (n as any).value = (Array as any)((i as any).length);
    const r: any = [];
    for (let a: any = 0; (a as any) < ((i as any).length as any); a++) {
      const o: any = (i as any)[a],
        d: any = ((((e as any).element as any)._zod as any).run as any)({
          value: o,
          issues: []
        }, t);
      d instanceof Promise ? ((r as any).push as any)(((d as any).then as any)((u: any): any => (Rn as any)(u, n, a))) : (Rn as any)(d, n, a);
    }
    return (r as any).length ? ((((Promise as any).all as any)(r) as any).then as any)((): any => n) : n;
  };
});
function De(this: any, s: any, e: any, n: any): any {
  ((s as any).issues as any).length && (((e as any).issues as any).push as any)(...(ze as any)(n, (s as any).issues)), ((e as any).value as any)[n] = (s as any).value;
}
function An(this: any, s: any, e: any, n: any, t: any): any {
  ((s as any).issues as any).length ? ((t as any)[n] as any) === (void 0 as any) ? n in t ? ((e as any).value as any)[n] = void 0 : ((e as any).value as any)[n] = (s as any).value : (((e as any).issues as any).push as any)(...(ze as any)(n, (s as any).issues)) : ((s as any).value as any) === (void 0 as any) ? n in t && (((e as any).value as any)[n] = void 0) : ((e as any).value as any)[n] = (s as any).value;
}
const Ht: any = (Y as any)("$ZodObject", (s: any, e: any): any => {
  ((je as any).init as any)(s, e);
  const n: any = (ts as any)((): any => {
    const m: any = ((Object as any).keys as any)((e as any).shape);
    for (const p of m) if (!(((e as any).shape as any)[p] instanceof je)) throw new (Error as any)(`Invalid element at key "${p}": expected a Zod schema`);
    const f: any = (It as any)((e as any).shape);
    return {
      shape: (e as any).shape,
      keys: m,
      keySet: new (Set as any)(m),
      numKeys: (m as any).length,
      optionalKeys: new (Set as any)(f)
    };
  });
  (Se as any)((s as any)._zod, "propValues", (): any => {
    const m: any = (e as any).shape,
      f: any = {};
    for (const p in m) {
      const g: any = ((m as any)[p] as any)._zod;
      if ((g as any).values) {
        (f as any)[p] ?? ((f as any)[p] = new (Set as any)());
        for (const h of (g as any).values) (((f as any)[p] as any).add as any)(h);
      }
    }
    return f;
  });
  const t: any = (m: any): any => {
    const f: any = new (Ft as any)(["shape", "payload", "ctx"]),
      p: any = (n as any).value,
      g: any = (j: any): any => {
        const v: any = (qe as any)(j);
        return `shape[${v}]._zod.run({ value: input[${v}], issues: [] }, ctx)`;
      };
    ((f as any).write as any)("const input = payload.value;");
    const h: any = ((Object as any).create as any)(null);
    let y: any = 0;
    for (const j of (p as any).keys) (h as any)[j] = `key_${y++}`;
    ((f as any).write as any)("const newResult = {}");
    for (const j of (p as any).keys) if ((((p as any).optionalKeys as any).has as any)(j)) {
      const v: any = (h as any)[j];
      ((f as any).write as any)(`const ${v} = ${(g as any)(j)};`);
      const x: any = (qe as any)(j);
      ((f as any).write as any)(`
        if (${v}.issues.length) {
          if (input[${x}] === undefined) {
            if (${x} in input) {
              newResult[${x}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${v}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${x}, ...iss.path] : [${x}],
              }))
            );
          }
        } else if (${v}.value === undefined) {
          if (${x} in input) newResult[${x}] = undefined;
        } else {
          newResult[${x}] = ${v}.value;
        }
        `);
    } else {
      const v: any = (h as any)[j];
      ((f as any).write as any)(`const ${v} = ${(g as any)(j)};`), ((f as any).write as any)(`
          if (${v}.issues.length) payload.issues = payload.issues.concat(${v}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${(qe as any)(j)}, ...iss.path] : [${(qe as any)(j)}]
          })));`), ((f as any).write as any)(`newResult[${(qe as any)(j)}] = ${v}.value`);
    }
    ((f as any).write as any)("payload.value = newResult;"), ((f as any).write as any)("return payload;");
    const b: any = ((f as any).compile as any)();
    return (j: any, v: any): any => (b as any)(m, j, v);
  };
  let i: any;
  const r: any = dn,
    a: any = !(ss as any).jitless,
    d: any = a && (wt as any).value,
    u: any = (e as any).catchall;
  let c: any;
  ((s as any)._zod as any).parse = (m: any, f: any): any => {
    c ?? (c = (n as any).value);
    const p: any = (m as any).value;
    if (!(r as any)(p)) return (((m as any).issues as any).push as any)({
      expected: "object",
      code: "invalid_type",
      input: p,
      inst: s
    }), m;
    const g: any = [];
    if (a && d && (f?.async as any) === (!1 as any) && ((f as any).jitless as any) !== (!0 as any)) i || (i = (t as any)((e as any).shape)), m = (i as any)(m, f);else {
      (m as any).value = {};
      const v: any = (c as any).shape;
      for (const x of (c as any).keys) {
        const _: any = (v as any)[x],
          k: any = (((_ as any)._zod as any).run as any)({
            value: (p as any)[x],
            issues: []
          }, f),
          S: any = (((_ as any)._zod as any).optin as any) === ("optional" as any) && (((_ as any)._zod as any).optout as any) === ("optional" as any);
        k instanceof Promise ? ((g as any).push as any)(((k as any).then as any)((T: any): any => S ? (An as any)(T, m, x, p) : (De as any)(T, m, x))) : S ? (An as any)(k, m, x, p) : (De as any)(k, m, x);
      }
    }
    if (!u) return (g as any).length ? ((((Promise as any).all as any)(g) as any).then as any)((): any => m) : m;
    const h: any = [],
      y: any = (c as any).keySet,
      b: any = (u as any)._zod,
      j: any = ((b as any).def as any).type;
    for (const v of ((Object as any).keys as any)(p)) {
      if (((y as any).has as any)(v)) continue;
      if ((j as any) === ("never" as any)) {
        ((h as any).push as any)(v);
        continue;
      }
      const x: any = ((b as any).run as any)({
        value: (p as any)[v],
        issues: []
      }, f);
      x instanceof Promise ? ((g as any).push as any)(((x as any).then as any)((_: any): any => (De as any)(_, m, v))) : (De as any)(x, m, v);
    }
    return (h as any).length && (((m as any).issues as any).push as any)({
      code: "unrecognized_keys",
      keys: h,
      input: p,
      inst: s
    }), (g as any).length ? ((((Promise as any).all as any)(g) as any).then as any)((): any => m) : m;
  };
});
function qn(this: any, s: any, e: any, n: any, t: any): any {
  for (const i of s) if ((((i as any).issues as any).length as any) === (0 as any)) return (e as any).value = (i as any).value, e;
  return (((e as any).issues as any).push as any)({
    code: "invalid_union",
    input: (e as any).value,
    inst: n,
    errors: ((s as any).map as any)((i: any): any => (((i as any).issues as any).map as any)((r: any): any => (Ae as any)(r, t, (Re as any)())))
  }), e;
}
const Ut: any = (Y as any)("$ZodUnion", (s: any, e: any): any => {
    ((je as any).init as any)(s, e), (Se as any)((s as any)._zod, "optin", (): any => (((e as any).options as any).some as any)((n: any): any => (((n as any)._zod as any).optin as any) === ("optional" as any)) ? "optional" : void 0), (Se as any)((s as any)._zod, "optout", (): any => (((e as any).options as any).some as any)((n: any): any => (((n as any)._zod as any).optout as any) === ("optional" as any)) ? "optional" : void 0), (Se as any)((s as any)._zod, "values", (): any => {
      if ((((e as any).options as any).every as any)((n: any): any => ((n as any)._zod as any).values)) return new (Set as any)((((e as any).options as any).flatMap as any)((n: any): any => ((Array as any).from as any)(((n as any)._zod as any).values)));
    }), (Se as any)((s as any)._zod, "pattern", (): any => {
      if ((((e as any).options as any).every as any)((n: any): any => ((n as any)._zod as any).pattern)) {
        const n: any = (((e as any).options as any).map as any)((t: any): any => ((t as any)._zod as any).pattern);
        return new (RegExp as any)(`^(${((((n as any).map as any)((t: any): any => (as as any)((t as any).source)) as any).join as any)("|")})$`);
      }
    }), ((s as any)._zod as any).parse = (n: any, t: any): any => {
      let i: any = !1;
      const r: any = [];
      for (const a of (e as any).options) {
        const o: any = (((a as any)._zod as any).run as any)({
          value: (n as any).value,
          issues: []
        }, t);
        if (o instanceof Promise) ((r as any).push as any)(o), i = !0;else {
          if ((((o as any).issues as any).length as any) === (0 as any)) return o;
          ((r as any).push as any)(o);
        }
      }
      return i ? ((((Promise as any).all as any)(r) as any).then as any)((a: any): any => (qn as any)(a, n, s, t)) : (qn as any)(r, n, s, t);
    };
  }),
  Gt: any = (Y as any)("$ZodRecord", (s: any, e: any): any => {
    ((je as any).init as any)(s, e), ((s as any)._zod as any).parse = (n: any, t: any): any => {
      const i: any = (n as any).value;
      if (!(St as any)(i)) return (((n as any).issues as any).push as any)({
        expected: "record",
        code: "invalid_type",
        input: i,
        inst: s
      }), n;
      const r: any = [];
      if ((((e as any).keyType as any)._zod as any).values) {
        const a: any = (((e as any).keyType as any)._zod as any).values;
        (n as any).value = {};
        for (const d of a) if ((typeof d as any) == ("string" as any) || (typeof d as any) == ("number" as any) || (typeof d as any) == ("symbol" as any)) {
          const u: any = ((((e as any).valueType as any)._zod as any).run as any)({
            value: (i as any)[d],
            issues: []
          }, t);
          u instanceof Promise ? ((r as any).push as any)(((u as any).then as any)((c: any): any => {
            ((c as any).issues as any).length && (((n as any).issues as any).push as any)(...(ze as any)(d, (c as any).issues)), ((n as any).value as any)[d] = (c as any).value;
          })) : (((u as any).issues as any).length && (((n as any).issues as any).push as any)(...(ze as any)(d, (u as any).issues)), ((n as any).value as any)[d] = (u as any).value);
        }
        let o: any;
        for (const d in i) ((a as any).has as any)(d) || (o = o ?? [], ((o as any).push as any)(d));
        o && ((o as any).length as any) > (0 as any) && (((n as any).issues as any).push as any)({
          code: "unrecognized_keys",
          input: i,
          inst: s,
          keys: o
        });
      } else {
        (n as any).value = {};
        for (const a of ((Reflect as any).ownKeys as any)(i)) {
          if ((a as any) === ("__proto__" as any)) continue;
          const o: any = ((((e as any).keyType as any)._zod as any).run as any)({
            value: a,
            issues: []
          }, t);
          if (o instanceof Promise) throw new (Error as any)("Async schemas not supported in object keys currently");
          if (((o as any).issues as any).length) {
            (((n as any).issues as any).push as any)({
              origin: "record",
              code: "invalid_key",
              issues: (((o as any).issues as any).map as any)((u: any): any => (Ae as any)(u, t, (Re as any)())),
              input: a,
              path: [a],
              inst: s
            }), ((n as any).value as any)[(o as any).value] = (o as any).value;
            continue;
          }
          const d: any = ((((e as any).valueType as any)._zod as any).run as any)({
            value: (i as any)[a],
            issues: []
          }, t);
          d instanceof Promise ? ((r as any).push as any)(((d as any).then as any)((u: any): any => {
            ((u as any).issues as any).length && (((n as any).issues as any).push as any)(...(ze as any)(a, (u as any).issues)), ((n as any).value as any)[(o as any).value] = (u as any).value;
          })) : (((d as any).issues as any).length && (((n as any).issues as any).push as any)(...(ze as any)(a, (d as any).issues)), ((n as any).value as any)[(o as any).value] = (d as any).value);
        }
      }
      return (r as any).length ? ((((Promise as any).all as any)(r) as any).then as any)((): any => n) : n;
    };
  }),
  Kt: any = (Y as any)("$ZodEnum", (s: any, e: any): any => {
    ((je as any).init as any)(s, e);
    const n: any = (_t as any)((e as any).entries);
    ((s as any)._zod as any).values = new (Set as any)(n), ((s as any)._zod as any).pattern = new (RegExp as any)(`^(${((((((n as any).filter as any)((t: any): any => ((zt as any).has as any)(typeof t)) as any).map as any)((t: any): any => (typeof t as any) == ("string" as any) ? (os as any)(t) : ((t as any).toString as any)()) as any).join as any)("|")})$`), ((s as any)._zod as any).parse = (t: any, i: any): any => {
      const r: any = (t as any).value;
      return ((((s as any)._zod as any).values as any).has as any)(r) || (((t as any).issues as any).push as any)({
        code: "invalid_value",
        values: n,
        input: r,
        inst: s
      }), t;
    };
  }),
  Wt: any = (Y as any)("$ZodLiteral", (s: any, e: any): any => {
    ((je as any).init as any)(s, e), ((s as any)._zod as any).values = new (Set as any)((e as any).values), ((s as any)._zod as any).pattern = new (RegExp as any)(`^(${(((((e as any).values as any).map as any)((n: any): any => (typeof n as any) == ("string" as any) ? (os as any)(n) : n ? ((n as any).toString as any)() : (String as any)(n)) as any).join as any)("|")})$`), ((s as any)._zod as any).parse = (n: any, t: any): any => {
      const i: any = (n as any).value;
      return ((((s as any)._zod as any).values as any).has as any)(i) || (((n as any).issues as any).push as any)({
        code: "invalid_value",
        values: (e as any).values,
        input: i,
        inst: s
      }), n;
    };
  }),
  Jt: any = (Y as any)("$ZodOptional", (s: any, e: any): any => {
    ((je as any).init as any)(s, e), ((s as any)._zod as any).optin = "optional", ((s as any)._zod as any).optout = "optional", (Se as any)((s as any)._zod, "values", (): any => (((e as any).innerType as any)._zod as any).values ? new (Set as any)([...(((e as any).innerType as any)._zod as any).values, void 0]) : void 0), (Se as any)((s as any)._zod, "pattern", (): any => {
      const n: any = (((e as any).innerType as any)._zod as any).pattern;
      return n ? new (RegExp as any)(`^(${(as as any)((n as any).source)})?$`) : void 0;
    }), ((s as any)._zod as any).parse = (n: any, t: any): any => ((((e as any).innerType as any)._zod as any).optin as any) === ("optional" as any) ? ((((e as any).innerType as any)._zod as any).run as any)(n, t) : ((n as any).value as any) === (void 0 as any) ? n : ((((e as any).innerType as any)._zod as any).run as any)(n, t);
  });
function Yt(this: any, s: any, e: any): any {
  return new (s as any)({
    type: "string",
    ...(ve as any)()
  });
}
function Xt(this: any, s: any, e: any): any {
  return new (s as any)({
    type: "never",
    ...(ve as any)()
  });
}
function Qt(this: any, s: any, e: any): any {
  return new (qt as any)({
    check: "max_length",
    ...(ve as any)(),
    maximum: s
  });
}
function el(this: any, s: any, e: any): any {
  return new (Bt as any)({
    check: "min_length",
    ...(ve as any)(),
    minimum: s
  });
}
function nl(this: any, s: any): any {
  return new (Lt as any)({
    check: "overwrite",
    tx: s
  });
}
function sl(this: any): any {
  return (nl as any)((s: any): any => ((s as any).trim as any)());
}
const _e: any = (Y as any)("ZodMiniType", (s: any, e: any): any => {
    if (!(s as any)._zod) throw new (Error as any)("Uninitialized schema in ZodMiniType.");
    ((je as any).init as any)(s, e), (s as any).def = e, (s as any).parse = (n: any, t: any): any => (Pt as any)(s, n, t, {
      callee: (s as any).parse
    }), (s as any).safeParse = (n: any, t: any): any => (us as any)(s, n, t), (s as any).parseAsync = async (n: any, t: any): Promise<any> => (Et as any)(s, n, t, {
      callee: (s as any).parseAsync
    }), (s as any).safeParseAsync = async (n: any, t: any): Promise<any> => (ms as any)(s, n, t), (s as any).check = (...n: any): any => ((s as any).clone as any)({
      ...e,
      checks: [...((e as any).checks ?? []), ...((n as any).map as any)((t: any): any => (typeof t as any) == ("function" as any) ? {
        _zod: {
          check: t,
          def: {
            check: "custom"
          },
          onattach: []
        }
      } : t)]
    }), (s as any).clone = (n: any, t: any): any => (Ct as any)(s, n, t), (s as any).brand = (): any => s, (s as any).register = (n: any, t: any): any => (((n as any).add as any)(s, t), s);
  }),
  tl: any = (Y as any)("ZodMiniString", (s: any, e: any): any => {
    ((Zt as any).init as any)(s, e), ((_e as any).init as any)(s, e);
  });
function oe(this: any, s: any): any {
  return (Yt as any)(tl);
}
const ll: any = (Y as any)("ZodMiniNever", (s: any, e: any): any => {
  ((Dt as any).init as any)(s, e), ((_e as any).init as any)(s, e);
});
function al(this: any, s: any): any {
  return (Xt as any)(ll);
}
const il: any = (Y as any)("ZodMiniArray", (s: any, e: any): any => {
  ((Vt as any).init as any)(s, e), ((_e as any).init as any)(s, e);
});
function Je(this: any, s: any, e: any): any {
  return new (il as any)({
    type: "array",
    element: s,
    ...(ve as any)()
  });
}
const fs: any = (Y as any)("ZodMiniObject", (s: any, e: any): any => {
  ((Ht as any).init as any)(s, e), ((_e as any).init as any)(s, e), (Se as any)(s, "shape", (): any => (e as any).shape);
});
function en(this: any, s: any, e: any): any {
  const n: any = {
    type: "object",
    get shape(): any {
      return (is as any)(this, "shape", {
        ...s
      }), (this as any).shape;
    },
    ...(ve as any)()
  };
  return new (fs as any)(n);
}
function rl(this: any, s: any, e: any): any {
  return new (fs as any)({
    type: "object",
    get shape(): any {
      return (is as any)(this, "shape", {
        ...s
      }), (this as any).shape;
    },
    catchall: (al as any)(),
    ...(ve as any)()
  });
}
const ol: any = (Y as any)("ZodMiniUnion", (s: any, e: any): any => {
  ((Ut as any).init as any)(s, e), ((_e as any).init as any)(s, e);
});
function cl(this: any, s: any, e: any): any {
  return new (ol as any)({
    type: "union",
    options: s,
    ...(ve as any)()
  });
}
const dl: any = (Y as any)("ZodMiniRecord", (s: any, e: any): any => {
  ((Gt as any).init as any)(s, e), ((_e as any).init as any)(s, e);
});
function bn(this: any, s: any, e: any, n: any): any {
  return new (dl as any)({
    type: "record",
    keyType: s,
    valueType: e,
    ...(ve as any)()
  });
}
const ul: any = (Y as any)("ZodMiniEnum", (s: any, e: any): any => {
  ((Kt as any).init as any)(s, e), ((_e as any).init as any)(s, e);
});
function Bn(this: any, s: any, e: any): any {
  const n: any = ((Array as any).isArray as any)(s) ? ((Object as any).fromEntries as any)(((s as any).map as any)((t: any): any => [t, t])) : s;
  return new (ul as any)({
    type: "enum",
    entries: n,
    ...(ve as any)()
  });
}
const ml: any = (Y as any)("ZodMiniLiteral", (s: any, e: any): any => {
  ((Wt as any).init as any)(s, e), ((_e as any).init as any)(s, e);
});
function fl(this: any, s: any, e: any): any {
  return new (ml as any)({
    type: "literal",
    values: ((Array as any).isArray as any)(s) ? s : [s],
    ...(ve as any)()
  });
}
const pl: any = (Y as any)("ZodMiniOptional", (s: any, e: any): any => {
  ((Jt as any).init as any)(s, e), ((_e as any).init as any)(s, e);
});
function fe(this: any, s: any): any {
  return new (pl as any)({
    type: "optional",
    innerType: s
  });
}
const hl: any = (128 as any) * (1024 as any),
  gl: any = (en as any)({
    CLIENT_ID: (oe as any)(),
    CLIENT_SECRET: (fe as any)((oe as any)()),
    scopes: (fe as any)((Je as any)((oe as any)()))
  }),
  yl: any = (rl as any)({
    caBundle: (((oe as any)() as any).check as any)((sl as any)(), (el as any)(1), (Qt as any)(hl))
  }),
  jl: any = (en as any)({
    type: (fe as any)((fl as any)("stdio")),
    command: (oe as any)(),
    args: (fe as any)((Je as any)((oe as any)())),
    env: (fe as any)((bn as any)((oe as any)(), (oe as any)())),
    envFile: (fe as any)((oe as any)()),
    cwd: (fe as any)((oe as any)()),
    enabledTools: (fe as any)((Je as any)((oe as any)()))
  }),
  vl: any = (en as any)({
    type: (fe as any)((Bn as any)(["http", "sse"])),
    url: (oe as any)(),
    headers: (fe as any)((bn as any)((oe as any)(), (oe as any)())),
    auth: (fe as any)(gl),
    tls: (fe as any)(yl),
    placement: (fe as any)((Bn as any)(["server", "client"])),
    enabledTools: (fe as any)((Je as any)((oe as any)()))
  }),
  ps: any = (cl as any)([jl, vl]);
(en as any)({
  mcpServers: (bn as any)((oe as any)(), ps)
});
function xl(this: any, s: any): any {
  const e: any = ((ps as any).safeParse as any)(s);
  return (e as any).success ? (e as any).data : void 0;
}
class ye extends (Error as any) {
  declare problem: any;
  declare name: any;
  [key: string]: any;
  constructor(e: any, n: any) {
    super(n), (this as any).name = "McpConfigError", (this as any).problem = e;
  }
}
const Ye: any = (s: any): any => (typeof s as any) == ("object" as any) && (s as any) !== (null as any) && !((Array as any).isArray as any)(s),
  bl: any = (s: any): any => {
    try {
      return ((JSON as any).parse as any)(s);
    } catch {
      throw new (ye as any)("invalid_json", "Config is not valid JSON.");
    }
  },
  _l: any = (s: any, e: any): any => {
    const n: any = (xl as any)(e);
    if ((n as any) === (void 0 as any)) throw (Ye as any)(e) && ((e as any).command as any) === (void 0 as any) && ((e as any).url as any) === (void 0 as any) ? new (ye as any)("no_transport", `Server "${s}" must have either a command or url.`) : new (ye as any)("invalid_server", `Invalid configuration for server "${s}".`);
    return n;
  };
function kl(this: any, s: any): any {
  if ((s as any) === (void 0 as any)) return;
  const e: any = (((s as any).CLIENT_ID as any).trim as any)(),
    n: any = (s as any).CLIENT_SECRET?.trim() ?? "";
  if ((e as any) === ("" as any) && (n as any) === ("" as any)) return;
  const t: any = {
    ...s,
    CLIENT_ID: e,
    CLIENT_SECRET: n
  };
  return (n as any) === ("" as any) && delete (t as any).CLIENT_SECRET, t;
}
function wl(this: any, s: any): any {
  return ((Object as any).fromEntries as any)(((((((Object as any).entries as any)(s) as any).map as any)(([e, n]: any): any => [((e as any).trim as any)(), ((n as any).trim as any)()]) as any).filter as any)(([e, n]: any): any => (e as any) !== ("" as any) && (n as any) !== ("" as any)));
}
function Sl(this: any, s: any): any {
  const e: any = s?.caBundle.trim();
  return e ? {
    caBundle: e
  } : void 0;
}
const zl: any = (s: any): any => ((Object as any).fromEntries as any)(((((((Object as any).entries as any)(s) as any).map as any)(([e, n]: any): any => [((e as any).trim as any)(), n]) as any).filter as any)(([e]: any): any => (e as any) !== ("" as any)));
function un(this: any, s: any): any {
  if ("command" in s) {
    const r: any = ((((((s as any).args ?? []) as any).map as any)((d: any): any => ((d as any).trim as any)()) as any).filter as any)((d: any): any => (d as any) !== ("" as any)),
      a: any = (zl as any)((s as any).env ?? {}),
      o: any = {
        ...s,
        command: (((s as any).command as any).trim as any)(),
        args: r,
        env: a
      };
    return ((r as any).length as any) === (0 as any) && delete (o as any).args, ((((Object as any).keys as any)(a) as any).length as any) === (0 as any) && delete (o as any).env, o;
  }
  const e: any = (wl as any)((s as any).headers ?? {}),
    n: any = (kl as any)((s as any).auth),
    t: any = (Sl as any)((s as any).tls),
    i: any = {
      ...s,
      url: (((s as any).url as any).trim as any)(),
      headers: e,
      auth: n,
      tls: t
    };
  return ((((Object as any).keys as any)(e) as any).length as any) === (0 as any) && delete (i as any).headers, (n as any) === (void 0 as any) && delete (i as any).auth, (t as any) === (void 0 as any) && delete (i as any).tls, i;
}
function hs(this: any, s: any, e: any): any {
  if ("command" in e) {
    if (((((e as any).command as any).trim as any)() as any) === ("" as any)) return new (ye as any)("no_transport", "Command is required.");
  } else {
    if (((((e as any).url as any).trim as any)() as any) === ("" as any)) return new (ye as any)("no_transport", "URL is required.");
    if (((e as any).auth as any) !== (void 0 as any) && (((((e as any).auth as any).CLIENT_ID as any).trim as any)() as any) === ("" as any) && ((((e as any).auth as any).CLIENT_SECRET?.trim() ?? "") as any) !== ("" as any)) return new (ye as any)("client_id_required", "Client ID is required when a client secret is set.");
  }
  return (((s as any).trim as any)() as any) === ("" as any) ? new (ye as any)("blank_name", "Server name is required and must be a non-empty string.") : void 0;
}
const Cl: any = (s: any): any => {
  if (!(Ye as any)(s) || (typeof (s as any).command as any) != ("string" as any) || ((((s as any).command as any).trim as any)() as any) !== ("" as any) || (typeof (s as any).url as any) != ("string" as any) || ((((s as any).url as any).trim as any)() as any) === ("" as any)) return s;
  const e: any = {
    ...s
  };
  return delete (e as any).command, ((e as any).type as any) === ("stdio" as any) && delete (e as any).type, e;
};
function Il(this: any, s: any): any {
  const e: any = (bl as any)(s);
  if (!(Ye as any)(e)) throw new (ye as any)("not_an_object", "Expected a JSON object.");
  const n: any = ((Object as any).keys as any)(e),
    t: any = ((n as any).length as any) === (1 as any) && ((n as any)[0] as any) === ("mcpServers" as any) && (Ye as any)((e as any).mcpServers) ? (e as any).mcpServers : e,
    [i, ...r]: any = ((Object as any).entries as any)(t);
  if ((i as any) === (void 0 as any)) throw new (ye as any)("no_server", "No server defined.");
  if (((r as any).length as any) > (0 as any)) throw new (ye as any)("many_servers", "Only one server can be defined.");
  const [a, o]: any = i;
  return {
    name: ((a as any).trim as any)(),
    config: (un as any)((_l as any)(a, (Cl as any)(o)))
  };
}
const mn: any = {
    name: "",
    type: "HTTP",
    url: "",
    headers: [],
    clientId: "",
    clientSecret: "",
    command: "",
    args: []
  },
  Tl: any = {
    key: "",
    value: ""
  };
function Nl(this: any, s: any): any {
  const e: any = ((s as any).at as any)(-1);
  return (e as any) != (null as any) && ((e as any).key as any) === ("" as any) && ((e as any).value as any) === ("" as any) ? s : [...s, Tl];
}
function Pl(this: any, s: any): any {
  return (((s as any).at as any)(-1) as any) === ("" as any) ? s : [...s, ""];
}
function $l(this: any, s: any): any {
  const e: any = (s as any).loadedConfig;
  return (e as any) !== (void 0 as any) && "url" in e ? e : {
    url: ""
  };
}
function El(this: any, s: any): any {
  const e: any = (s as any).loadedConfig;
  return (e as any) !== (void 0 as any) && "command" in e ? e : {
    command: ""
  };
}
function _n(this: any, s: any): any {
  switch ((s as any).type) {
    case "STDIO":
      return (un as any)({
        ...(El as any)(s),
        command: (s as any).command,
        args: [...(s as any).args]
      });
    case "HTTP":
      {
        const e: any = ($l as any)(s);
        return (un as any)({
          ...e,
          url: (s as any).url,
          headers: ((Object as any).fromEntries as any)((((s as any).headers as any).map as any)((n: any): any => [(n as any).key, (n as any).value])),
          auth: {
            ...(e as any).auth,
            CLIENT_ID: (s as any).clientId,
            CLIENT_SECRET: (s as any).clientSecret
          }
        });
      }
  }
}
function gs(this: any, s: any): any {
  return (hs as any)((s as any).name, (_n as any)(s))?.problem;
}
function Ol(this: any, s: any): any {
  return ((gs as any)(s) as any) === ("client_id_required" as any);
}
function Ln(this: any, s: any): any {
  const e: any = (((s as any).name as any).trim as any)(),
    n: any = (_n as any)(s);
  return ((hs as any)(e, n) as any) === (void 0 as any) ? {
    name: e,
    config: n
  } : null;
}
function ys(this: any, {
  name: s,
  config: e
}: any): any {
  return "command" in e ? {
    ...mn,
    name: s,
    type: "STDIO",
    command: (e as any).command,
    args: (e as any).args ?? [],
    loadedConfig: e
  } : {
    ...mn,
    name: s,
    type: "HTTP",
    url: (e as any).url,
    headers: ((((Object as any).entries as any)((e as any).headers ?? {}) as any).map as any)(([n, t]: any): any => ({
      key: n,
      value: t
    })),
    clientId: (e as any).auth?.CLIENT_ID ?? "",
    clientSecret: (e as any).auth?.CLIENT_SECRET ?? "",
    loadedConfig: e
  };
}
function fn(this: any, {
  name: s,
  config: e
}: any): any {
  return ((JSON as any).stringify as any)({
    mcpServers: {
      [s]: e
    }
  });
}
function Fn(this: any, s: any): any {
  return ((JSON as any).stringify as any)({
    [(s as any).name]: (_n as any)(s)
  }, null, 2);
}
function js(this: any, s: any): any {
  try {
    return {
      kind: "ok",
      server: (Il as any)(s)
    };
  } catch (e: any) {
    if (e instanceof ye) return {
      kind: "invalid",
      problem: (e as any).problem
    };
    throw e;
  }
}
function Rl(this: any, s: any): any {
  const e: any = (js as any)(s);
  return ((e as any).kind as any) === ("ok" as any) ? (e as any).server : null;
}
function vs(this: any, s: any): any {
  return ((((((((s as any).trim as any)() as any).toLowerCase as any)() as any).replace as any)(/[^a-z0-9]+/g, "-") as any).replace as any)(/^-+|-+$/g, "");
}
function xs(this: any, s: any, e: any): any {
  const n: any = (vs as any)(s);
  return (n as any) === ("" as any) ? "empty_name" : ((e as any).some as any)((t: any): any => ((t as any).name as any) === (n as any)) ? "duplicate_name" : null;
}
function Al(this: any, s: any, e: any): any {
  const n: any = (xs as any)((s as any).name, e);
  return (n as any) != (null as any) ? {
    kind: "invalid",
    problem: n
  } : {
    kind: "ok",
    write: {
      kind: "inline",
      name: (vs as any)((s as any).name),
      displayName: (((s as any).name as any).trim as any)(),
      description: "",
      mcpConfigJson: (fn as any)(s)
    }
  };
}
const ql: string = "https://example.com/mcp",
  Bl: string = "npx",
  Mn: any = {
    pairInput: {
      kzQI83: "sand-1iyjqo2",
      kmuXW: "sand-s83m0k",
      kCS8Yb: "sand-1r8uery",
      k7Eaqz: "sand-euugli",
      $$css: !0
    }
  };
function kn(this: any, s: any): any {
  (kn as any).d = 944;
  const e: any = ((Z as any).c as any)(14),
    {
      canSave: n,
      host: t,
      onCancel: i,
      onSave: r
    }: any = s;
  if ((t as any) == (null as any)) return null;
  let a: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((l as any).jsx as any)(w, {
    id: "dEgA5A"
  }), (e as any)[0] = a) : a = (e as any)[0];
  let o: any;
  ((e as any)[1] as any) !== (i as any) ? (o = ((l as any).jsx as any)((xe as any).Action, {
    onClick: i,
    variant: "secondary",
    children: a
  }), (e as any)[1] = i, (e as any)[2] = o) : o = (e as any)[2];
  let d: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = ((l as any).jsx as any)((xe as any).ActionSpacer, {}), (e as any)[3] = d) : d = (e as any)[3];
  const u: any = !n;
  let c: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = ((l as any).jsx as any)(w, {
    id: "tfDRzk"
  }), (e as any)[4] = c) : c = (e as any)[4];
  let m: any;
  ((e as any)[5] as any) !== (r as any) || ((e as any)[6] as any) !== (u as any) ? (m = ((l as any).jsx as any)((xe as any).Action, {
    disabled: u,
    onClick: r,
    variant: "primary",
    children: c
  }), (e as any)[5] = r, (e as any)[6] = u, (e as any)[7] = m) : m = (e as any)[7];
  let f: any;
  ((e as any)[8] as any) !== (o as any) || ((e as any)[9] as any) !== (m as any) ? (f = ((l as any).jsxs as any)((l as any).Fragment, {
    children: [o, d, m]
  }), (e as any)[8] = o, (e as any)[9] = m, (e as any)[10] = f) : f = (e as any)[10];
  let p: any;
  return ((e as any)[11] as any) !== (t as any) || ((e as any)[12] as any) !== (f as any) ? (p = ((Ds as any).createPortal as any)(f, t), (e as any)[11] = t, (e as any)[12] = f, (e as any)[13] = p) : p = (e as any)[13], p;
}
function Ll(this: any, s: any): any {
  if (((s as any).view as any) === ("fields" as any)) return {
    kind: "draft",
    draft: (s as any).draft
  };
  const e: any = (js as any)((s as any).text);
  return ((e as any).kind as any) === ("ok" as any) ? {
    kind: "draft",
    draft: (ys as any)((e as any).server)
  } : e;
}
function Fl(this: any, s: any): any {
  return (s as any) === ("STDIO" as any) ? "STDIO" : "HTTP";
}
function ge(this: any, s: any): any {
  (ge as any).d = 943;
  const e: any = ((Z as any).c as any)(17),
    {
      label: n,
      layout: t,
      target: i,
      children: r
    }: any = s,
    a: any = (t as any) === ("row" as any);
  let o: any;
  ((e as any)[0] as any) !== (a as any) ? (o = ({
    0: {
      className: "sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-ygnafs sand-123j3cw sand-87ps6o"
    },
    1: {
      className: "sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-ygnafs sand-87ps6o sand-exx8yu"
    }
  } as any)[(!!a as any) << (0 as any)], (e as any)[0] = a, (e as any)[1] = o) : o = (e as any)[1];
  const d: any = o;
  let u: any;
  ((e as any)[2] as any) !== (n as any) ? (u = ((l as any).jsx as any)(J, {
    as: "span",
    color: "secondary",
    size: "md",
    children: n
  }), (e as any)[2] = n, (e as any)[3] = u) : u = (e as any)[3];
  const c: any = u;
  let m: any;
  ((e as any)[4] as any) !== (a as any) ? (m = ({
    0: {
      className: "sand-78zum5 sand-1cy8zhl sand-1v2ro7d sand-euugli"
    },
    1: {
      className: "sand-78zum5 sand-1v2ro7d sand-euugli sand-6s0dn4"
    }
  } as any)[(!!a as any) << (0 as any)], (e as any)[4] = a, (e as any)[5] = m) : m = (e as any)[5];
  let f: any;
  ((e as any)[6] as any) !== (d as any) || ((e as any)[7] as any) !== (i as any) || ((e as any)[8] as any) !== (c as any) ? (f = "htmlFor" in i ? ((l as any).jsx as any)("label", {
    htmlFor: (i as any).htmlFor,
    ...d,
    children: c
  }) : ((l as any).jsx as any)("span", {
    id: (i as any).labelId,
    ...d,
    children: c
  }), (e as any)[6] = d, (e as any)[7] = i, (e as any)[8] = c, (e as any)[9] = f) : f = (e as any)[9];
  let p: any;
  ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = {
    className: "sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-17d4w8g sand-euugli"
  }, (e as any)[10] = p) : p = (e as any)[10];
  let g: any;
  ((e as any)[11] as any) !== (r as any) ? (g = ((l as any).jsx as any)("div", {
    ...p,
    children: r
  }), (e as any)[11] = r, (e as any)[12] = g) : g = (e as any)[12];
  let h: any;
  return ((e as any)[13] as any) !== (m as any) || ((e as any)[14] as any) !== (f as any) || ((e as any)[15] as any) !== (g as any) ? (h = ((l as any).jsxs as any)("div", {
    ...m,
    children: [f, g]
  }), (e as any)[13] = m, (e as any)[14] = f, (e as any)[15] = g, (e as any)[16] = h) : h = (e as any)[16], h;
}
function nn(this: any, s: any): any {
  (nn as any).d = 950;
  const e: any = ((Z as any).c as any)(3),
    {
      id: n,
      children: t
    }: any = s;
  let i: any;
  return ((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (n as any) ? (i = ((l as any).jsx as any)(J, {
    as: "p",
    color: "red",
    id: n,
    size: "sm",
    children: t
  }), (e as any)[0] = t, (e as any)[1] = n, (e as any)[2] = i) : i = (e as any)[2], i;
}
function wn(this: any, s: any): any {
  (wn as any).d = 949;
  const e: any = ((Z as any).c as any)(9),
    {
      problem: n,
      name: t
    }: any = s,
    {
      _: i
    }: any = (me as any)();
  switch (n) {
    case "empty_name":
      {
        let r: any;
        ((e as any)[0] as any) !== (i as any) ? (r = (i as any)({
          id: "AUlCmR"
        }), (e as any)[0] = i, (e as any)[1] = r) : r = (e as any)[1];
        let a: any;
        return ((e as any)[2] as any) !== (r as any) ? (a = ((l as any).jsx as any)((l as any).Fragment, {
          children: r
        }), (e as any)[2] = r, (e as any)[3] = a) : a = (e as any)[3], a;
      }
    case "duplicate_name":
      {
        let r: any;
        ((e as any)[4] as any) !== (i as any) || ((e as any)[5] as any) !== (t as any) ? (r = (i as any)({
          id: "BMJU7y",
          values: {
            name: t
          }
        }), (e as any)[4] = i, (e as any)[5] = t, (e as any)[6] = r) : r = (e as any)[6];
        let a: any;
        return ((e as any)[7] as any) !== (r as any) ? (a = ((l as any).jsx as any)((l as any).Fragment, {
          children: r
        }), (e as any)[7] = r, (e as any)[8] = a) : a = (e as any)[8], a;
      }
  }
}
function Sn(this: any): any {
  (Sn as any).d = 940;
  const s: any = ((Z as any).c as any)(6),
    {
      _: e
    }: any = (me as any)();
  let n: any;
  ((s as any)[0] as any) !== (e as any) ? (n = (e as any)({
    id: "b9Y4up"
  }), (s as any)[0] = e, (s as any)[1] = n) : n = (s as any)[1];
  let t: any;
  ((s as any)[2] as any) !== (n as any) ? (t = {
    label: n
  }, (s as any)[2] = n, (s as any)[3] = t) : t = (s as any)[3];
  const i: any = t;
  let r: any;
  return ((s as any)[4] as any) !== ((i as any).label as any) ? (r = ((l as any).jsx as any)(w, {
    id: "MbjbEk",
    values: {
      0: (i as any).label
    }
  }), (s as any)[4] = (i as any).label, (s as any)[5] = r) : r = (s as any)[5], r;
}
function pn(this: any, s: any): any {
  (pn as any).d = 947;
  const e: any = ((Z as any).c as any)(7),
    {
      problem: n
    }: any = s;
  switch (n) {
    case "invalid_json":
    case "invalid_server":
      {
        let t: any;
        return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = ((l as any).jsx as any)(w, {
          id: "NjG+x8"
        }), (e as any)[0] = t) : t = (e as any)[0], t;
      }
    case "not_an_object":
      {
        let t: any;
        return ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = ((l as any).jsx as any)(w, {
          id: "ARSuTm"
        }), (e as any)[1] = t) : t = (e as any)[1], t;
      }
    case "no_server":
      {
        let t: any;
        return ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = ((l as any).jsx as any)(w, {
          id: "kMkfSS"
        }), (e as any)[2] = t) : t = (e as any)[2], t;
      }
    case "many_servers":
      {
        let t: any;
        return ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = ((l as any).jsx as any)(w, {
          id: "Q6t+vO"
        }), (e as any)[3] = t) : t = (e as any)[3], t;
      }
    case "blank_name":
      {
        let t: any;
        return ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = ((l as any).jsx as any)(w, {
          id: "Ra3OR9"
        }), (e as any)[4] = t) : t = (e as any)[4], t;
      }
    case "no_transport":
      {
        let t: any;
        return ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = ((l as any).jsx as any)(w, {
          id: "YH8mbG"
        }), (e as any)[5] = t) : t = (e as any)[5], t;
      }
    case "client_id_required":
      {
        let t: any;
        return ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = ((l as any).jsx as any)(Sn, {}), (e as any)[6] = t) : t = (e as any)[6], t;
      }
  }
}
function bs(this: any, s: any): any {
  (bs as any).d = 948;
  const e: any = ((Z as any).c as any)(14),
    {
      rows: n,
      labelledBy: t,
      onChange: i
    }: any = s,
    {
      _: r
    }: any = (me as any)();
  let a: any, o: any, d: any, u: any;
  if (((e as any)[0] as any) !== (r as any) || ((e as any)[1] as any) !== (t as any) || ((e as any)[2] as any) !== (i as any) || ((e as any)[3] as any) !== (n as any)) {
    const m: any = (Nl as any)(n),
      f: any = (p: any, g: any): any => {
        (i as any)(((m as any).map as any)((h: any, y: any): any => (y as any) === (p as any) ? {
          ...h,
          ...g
        } : h));
      };
    a = t, o = "group", ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = {
      className: "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-euugli"
    }, (e as any)[8] = d) : d = (e as any)[8], u = ((m as any).map as any)((p: any, g: any): any => ((l as any).jsxs as any)("div", {
      className: "sand-78zum5 sand-1qjc9v5 sand-167g77z sand-euugli",
      children: [((l as any).jsx as any)(ne, {
        rootStyle: (Mn as any).pairInput,
        size: "lg",
        children: ((l as any).jsx as any)((ne as any).Input, {
          autoComplete: "off",
          onChange: (h: any): any => (f as any)(g, {
            key: ((h as any).currentTarget as any).value
          }),
          placeholder: (r as any)({
            id: "7sMeHQ"
          }),
          spellCheck: !1,
          value: (p as any).key
        })
      }), ((l as any).jsx as any)(ne, {
        rootStyle: (Mn as any).pairInput,
        size: "lg",
        children: ((l as any).jsx as any)((ne as any).Input, {
          autoComplete: "off",
          onChange: (h: any): any => (f as any)(g, {
            value: ((h as any).currentTarget as any).value
          }),
          placeholder: (r as any)({
            id: "wMHvYH"
          }),
          value: (p as any).value
        })
      })]
    }, g)), (e as any)[0] = r, (e as any)[1] = t, (e as any)[2] = i, (e as any)[3] = n, (e as any)[4] = a, (e as any)[5] = o, (e as any)[6] = d, (e as any)[7] = u;
  } else a = (e as any)[4], o = (e as any)[5], d = (e as any)[6], u = (e as any)[7];
  let c: any;
  return ((e as any)[9] as any) !== (a as any) || ((e as any)[10] as any) !== (o as any) || ((e as any)[11] as any) !== (d as any) || ((e as any)[12] as any) !== (u as any) ? (c = ((l as any).jsx as any)("div", {
    "aria-labelledby": a,
    role: o,
    ...d,
    children: u
  }), (e as any)[9] = a, (e as any)[10] = o, (e as any)[11] = d, (e as any)[12] = u, (e as any)[13] = c) : c = (e as any)[13], c;
}
function _s(this: any, s: any): any {
  (_s as any).d = 951;
  const e: any = ((Z as any).c as any)(14),
    {
      values: n,
      labelledBy: t,
      placeholder: i,
      onChange: r
    }: any = s;
  let a: any, o: any, d: any, u: any;
  if (((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (r as any) || ((e as any)[2] as any) !== (i as any) || ((e as any)[3] as any) !== (n as any)) {
    const m: any = (Pl as any)(n),
      f: any = (p: any, g: any): any => {
        (r as any)(((m as any).map as any)((h: any, y: any): any => (y as any) === (p as any) ? g : h));
      };
    a = t, o = "group", ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = {
      className: "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-euugli"
    }, (e as any)[8] = d) : d = (e as any)[8], u = ((m as any).map as any)((p: any, g: any): any => ((l as any).jsx as any)(ne, {
      size: "lg",
      children: ((l as any).jsx as any)((ne as any).Input, {
        autoComplete: "off",
        onChange: (h: any): any => (f as any)(g, ((h as any).currentTarget as any).value),
        placeholder: i,
        spellCheck: !1,
        value: p
      })
    }, g)), (e as any)[0] = t, (e as any)[1] = r, (e as any)[2] = i, (e as any)[3] = n, (e as any)[4] = a, (e as any)[5] = o, (e as any)[6] = d, (e as any)[7] = u;
  } else a = (e as any)[4], o = (e as any)[5], d = (e as any)[6], u = (e as any)[7];
  let c: any;
  return ((e as any)[9] as any) !== (a as any) || ((e as any)[10] as any) !== (o as any) || ((e as any)[11] as any) !== (d as any) || ((e as any)[12] as any) !== (u as any) ? (c = ((l as any).jsx as any)("div", {
    "aria-labelledby": a,
    role: o,
    ...d,
    children: u
  }), (e as any)[9] = a, (e as any)[10] = o, (e as any)[11] = d, (e as any)[12] = u, (e as any)[13] = c) : c = (e as any)[13], c;
}
function ks(this: any, s: any): any {
  (ks as any).d = 952;
  const e: any = ((Z as any).c as any)(104),
    {
      draft: n,
      onChange: t
    }: any = s,
    {
      _: i
    }: any = (me as any)(),
    r: any = ((O as any).useId as any)(),
    a: any = ((O as any).useId as any)(),
    o: any = ((O as any).useId as any)(),
    d: any = ((O as any).useId as any)(),
    u: any = ((O as any).useId as any)(),
    c: any = ((O as any).useId as any)(),
    m: any = ((O as any).useId as any)();
  let f: any;
  ((e as any)[0] as any) !== (n as any) ? (f = (Ol as any)(n), (e as any)[0] = n, (e as any)[1] = f) : f = (e as any)[1];
  const p: any = f;
  switch ((n as any).type) {
    case "HTTP":
      {
        let g: any;
        ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = ((l as any).jsx as any)(w, {
          id: "9rG25a"
        }), (e as any)[2] = g) : g = (e as any)[2];
        let h: any;
        ((e as any)[3] as any) !== (r as any) ? (h = {
          htmlFor: r
        }, (e as any)[3] = r, (e as any)[4] = h) : h = (e as any)[4];
        let y: any;
        ((e as any)[5] as any) !== (n as any) || ((e as any)[6] as any) !== (t as any) ? (y = (H: any): any => (t as any)({
          ...n,
          url: ((H as any).currentTarget as any).value
        }), (e as any)[5] = n, (e as any)[6] = t, (e as any)[7] = y) : y = (e as any)[7];
        let b: any;
        ((e as any)[8] as any) !== ((n as any).url as any) || ((e as any)[9] as any) !== (y as any) || ((e as any)[10] as any) !== (r as any) ? (b = ((l as any).jsx as any)(ne, {
          size: "lg",
          children: ((l as any).jsx as any)((ne as any).Input, {
            autoComplete: "off",
            id: r,
            onChange: y,
            placeholder: ql,
            spellCheck: !1,
            type: "url",
            value: (n as any).url
          })
        }), (e as any)[8] = (n as any).url, (e as any)[9] = y, (e as any)[10] = r, (e as any)[11] = b) : b = (e as any)[11];
        let j: any;
        ((e as any)[12] as any) !== (h as any) || ((e as any)[13] as any) !== (b as any) ? (j = ((l as any).jsx as any)(ge, {
          label: g,
          layout: "row",
          target: h,
          children: b
        }), (e as any)[12] = h, (e as any)[13] = b, (e as any)[14] = j) : j = (e as any)[14];
        let v: any;
        ((e as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = ((l as any).jsx as any)(w, {
          id: "VPpyHp"
        }), (e as any)[15] = v) : v = (e as any)[15];
        let x: any;
        ((e as any)[16] as any) !== (a as any) ? (x = {
          labelId: a
        }, (e as any)[16] = a, (e as any)[17] = x) : x = (e as any)[17];
        let _: any;
        ((e as any)[18] as any) !== (n as any) || ((e as any)[19] as any) !== (t as any) ? (_ = (H: any): any => (t as any)({
          ...n,
          headers: H
        }), (e as any)[18] = n, (e as any)[19] = t, (e as any)[20] = _) : _ = (e as any)[20];
        let k: any;
        ((e as any)[21] as any) !== ((n as any).headers as any) || ((e as any)[22] as any) !== (a as any) || ((e as any)[23] as any) !== (_ as any) ? (k = ((l as any).jsx as any)(bs, {
          labelledBy: a,
          onChange: _,
          rows: (n as any).headers
        }), (e as any)[21] = (n as any).headers, (e as any)[22] = a, (e as any)[23] = _, (e as any)[24] = k) : k = (e as any)[24];
        let S: any;
        ((e as any)[25] as any) !== (k as any) || ((e as any)[26] as any) !== (x as any) ? (S = ((l as any).jsx as any)(ge, {
          label: v,
          layout: "stack",
          target: x,
          children: k
        }), (e as any)[25] = k, (e as any)[26] = x, (e as any)[27] = S) : S = (e as any)[27];
        let T: any;
        ((e as any)[28] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (T = ((l as any).jsx as any)(w, {
          id: "b9Y4up"
        }), (e as any)[28] = T) : T = (e as any)[28];
        let I: any;
        ((e as any)[29] as any) !== (o as any) ? (I = {
          htmlFor: o
        }, (e as any)[29] = o, (e as any)[30] = I) : I = (e as any)[30];
        const C: any = p ? d : void 0,
          P: any = p ? !0 : void 0;
        let N: any;
        ((e as any)[31] as any) !== (n as any) || ((e as any)[32] as any) !== (t as any) ? (N = (H: any): any => (t as any)({
          ...n,
          clientId: ((H as any).currentTarget as any).value
        }), (e as any)[31] = n, (e as any)[32] = t, (e as any)[33] = N) : N = (e as any)[33];
        let E: any;
        ((e as any)[34] as any) !== (i as any) ? (E = (i as any)({
          id: "9IZdhX"
        }), (e as any)[34] = i, (e as any)[35] = E) : E = (e as any)[35];
        let D: any;
        ((e as any)[36] as any) !== (o as any) || ((e as any)[37] as any) !== ((n as any).clientId as any) || ((e as any)[38] as any) !== (C as any) || ((e as any)[39] as any) !== (P as any) || ((e as any)[40] as any) !== (N as any) || ((e as any)[41] as any) !== (E as any) ? (D = ((l as any).jsx as any)(ne, {
          size: "lg",
          children: ((l as any).jsx as any)((ne as any).Input, {
            "aria-describedby": C,
            "aria-invalid": P,
            autoComplete: "off",
            id: o,
            onChange: N,
            placeholder: E,
            value: (n as any).clientId
          })
        }), (e as any)[36] = o, (e as any)[37] = (n as any).clientId, (e as any)[38] = C, (e as any)[39] = P, (e as any)[40] = N, (e as any)[41] = E, (e as any)[42] = D) : D = (e as any)[42];
        let A: any;
        ((e as any)[43] as any) !== (p as any) || ((e as any)[44] as any) !== (d as any) ? (A = p ? ((l as any).jsx as any)(nn, {
          id: d,
          children: ((l as any).jsx as any)(Sn, {})
        }) : null, (e as any)[43] = p, (e as any)[44] = d, (e as any)[45] = A) : A = (e as any)[45];
        let U: any;
        ((e as any)[46] as any) !== (I as any) || ((e as any)[47] as any) !== (D as any) || ((e as any)[48] as any) !== (A as any) ? (U = ((l as any).jsxs as any)(ge, {
          label: T,
          layout: "row",
          target: I,
          children: [D, A]
        }), (e as any)[46] = I, (e as any)[47] = D, (e as any)[48] = A, (e as any)[49] = U) : U = (e as any)[49];
        let B: any;
        ((e as any)[50] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (B = ((l as any).jsx as any)(w, {
          id: "Bdj4LI"
        }), (e as any)[50] = B) : B = (e as any)[50];
        let q: any;
        ((e as any)[51] as any) !== (u as any) ? (q = {
          htmlFor: u
        }, (e as any)[51] = u, (e as any)[52] = q) : q = (e as any)[52];
        let L: any;
        ((e as any)[53] as any) !== (n as any) || ((e as any)[54] as any) !== (t as any) ? (L = (H: any): any => (t as any)({
          ...n,
          clientSecret: ((H as any).currentTarget as any).value
        }), (e as any)[53] = n, (e as any)[54] = t, (e as any)[55] = L) : L = (e as any)[55];
        let V: any;
        ((e as any)[56] as any) !== (i as any) ? (V = (i as any)({
          id: "roPPU9"
        }), (e as any)[56] = i, (e as any)[57] = V) : V = (e as any)[57];
        let $: any;
        ((e as any)[58] as any) !== (u as any) || ((e as any)[59] as any) !== ((n as any).clientSecret as any) || ((e as any)[60] as any) !== (L as any) || ((e as any)[61] as any) !== (V as any) ? ($ = ((l as any).jsx as any)(ne, {
          size: "lg",
          children: ((l as any).jsx as any)((ne as any).Input, {
            autoComplete: "off",
            id: u,
            onChange: L,
            placeholder: V,
            type: "password",
            value: (n as any).clientSecret
          })
        }), (e as any)[58] = u, (e as any)[59] = (n as any).clientSecret, (e as any)[60] = L, (e as any)[61] = V, (e as any)[62] = $) : $ = (e as any)[62];
        let F: any;
        ((e as any)[63] as any) !== (q as any) || ((e as any)[64] as any) !== ($ as any) ? (F = ((l as any).jsx as any)(ge, {
          label: B,
          layout: "row",
          target: q,
          children: $
        }), (e as any)[63] = q, (e as any)[64] = $, (e as any)[65] = F) : F = (e as any)[65];
        let G: any;
        return ((e as any)[66] as any) !== (S as any) || ((e as any)[67] as any) !== (U as any) || ((e as any)[68] as any) !== (F as any) || ((e as any)[69] as any) !== (j as any) ? (G = ((l as any).jsxs as any)((l as any).Fragment, {
          children: [j, S, U, F]
        }), (e as any)[66] = S, (e as any)[67] = U, (e as any)[68] = F, (e as any)[69] = j, (e as any)[70] = G) : G = (e as any)[70], G;
      }
    case "STDIO":
      {
        let g: any;
        ((e as any)[71] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = ((l as any).jsx as any)(w, {
          id: "sjVfrA"
        }), (e as any)[71] = g) : g = (e as any)[71];
        let h: any;
        ((e as any)[72] as any) !== (c as any) ? (h = {
          htmlFor: c
        }, (e as any)[72] = c, (e as any)[73] = h) : h = (e as any)[73];
        let y: any;
        ((e as any)[74] as any) !== (n as any) || ((e as any)[75] as any) !== (t as any) ? (y = (P: any): any => (t as any)({
          ...n,
          command: ((P as any).currentTarget as any).value
        }), (e as any)[74] = n, (e as any)[75] = t, (e as any)[76] = y) : y = (e as any)[76];
        let b: any;
        ((e as any)[77] as any) !== (c as any) || ((e as any)[78] as any) !== ((n as any).command as any) || ((e as any)[79] as any) !== (y as any) ? (b = ((l as any).jsx as any)(ne, {
          size: "lg",
          children: ((l as any).jsx as any)((ne as any).Input, {
            autoComplete: "off",
            id: c,
            onChange: y,
            placeholder: Bl,
            spellCheck: !1,
            value: (n as any).command
          })
        }), (e as any)[77] = c, (e as any)[78] = (n as any).command, (e as any)[79] = y, (e as any)[80] = b) : b = (e as any)[80];
        let j: any;
        ((e as any)[81] as any) !== (h as any) || ((e as any)[82] as any) !== (b as any) ? (j = ((l as any).jsx as any)(ge, {
          label: g,
          layout: "row",
          target: h,
          children: b
        }), (e as any)[81] = h, (e as any)[82] = b, (e as any)[83] = j) : j = (e as any)[83];
        let v: any;
        ((e as any)[84] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = ((l as any).jsx as any)(w, {
          id: "OgB1k4"
        }), (e as any)[84] = v) : v = (e as any)[84];
        let x: any;
        ((e as any)[85] as any) !== (m as any) ? (x = {
          labelId: m
        }, (e as any)[85] = m, (e as any)[86] = x) : x = (e as any)[86];
        let _: any;
        ((e as any)[87] as any) !== (n as any) || ((e as any)[88] as any) !== (t as any) ? (_ = (P: any): any => (t as any)({
          ...n,
          args: P
        }), (e as any)[87] = n, (e as any)[88] = t, (e as any)[89] = _) : _ = (e as any)[89];
        let k: any;
        ((e as any)[90] as any) !== (i as any) ? (k = (i as any)({
          id: "tTh1LD"
        }), (e as any)[90] = i, (e as any)[91] = k) : k = (e as any)[91];
        let S: any;
        ((e as any)[92] as any) !== (m as any) || ((e as any)[93] as any) !== ((n as any).args as any) || ((e as any)[94] as any) !== (k as any) || ((e as any)[95] as any) !== (_ as any) ? (S = ((l as any).jsx as any)(_s, {
          labelledBy: m,
          onChange: _,
          placeholder: k,
          values: (n as any).args
        }), (e as any)[92] = m, (e as any)[93] = (n as any).args, (e as any)[94] = k, (e as any)[95] = _, (e as any)[96] = S) : S = (e as any)[96];
        let T: any;
        ((e as any)[97] as any) !== (S as any) || ((e as any)[98] as any) !== (x as any) ? (T = ((l as any).jsx as any)(ge, {
          label: v,
          layout: "stack",
          target: x,
          children: S
        }), (e as any)[97] = S, (e as any)[98] = x, (e as any)[99] = T) : T = (e as any)[99];
        let I: any;
        ((e as any)[100] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (I = ((l as any).jsx as any)(J, {
          as: "p",
          color: "secondary",
          size: "sm",
          children: ((l as any).jsx as any)(w, {
            id: "S6uAcw"
          })
        }), (e as any)[100] = I) : I = (e as any)[100];
        let C: any;
        return ((e as any)[101] as any) !== (T as any) || ((e as any)[102] as any) !== (j as any) ? (C = ((l as any).jsxs as any)((l as any).Fragment, {
          children: [j, T, I]
        }), (e as any)[101] = T, (e as any)[102] = j, (e as any)[103] = C) : C = (e as any)[103], C;
      }
  }
}
function ws(this: any, s: any): any {
  (ws as any).d = 941;
  const e: any = ((Z as any).c as any)(43),
    {
      autoFocusName: n,
      draft: t,
      nameLocked: i,
      plugins: r,
      typeLocked: a,
      onChange: o
    }: any = s,
    {
      _: d
    }: any = (me as any)(),
    u: any = ((O as any).useId as any)(),
    c: any = ((O as any).useId as any)(),
    m: any = ((O as any).useId as any)();
  let f: any;
  ((e as any)[0] as any) !== ((t as any).name as any) || ((e as any)[1] as any) !== (i as any) || ((e as any)[2] as any) !== (r as any) ? (f = i || ((((t as any).name as any).trim as any)() as any) === ("" as any) ? null : (xs as any)((t as any).name, r), (e as any)[0] = (t as any).name, (e as any)[1] = i, (e as any)[2] = r, (e as any)[3] = f) : f = (e as any)[3];
  const p: any = f;
  let g: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = ((l as any).jsx as any)(w, {
    id: "6YtxFj"
  }), (e as any)[4] = g) : g = (e as any)[4];
  let h: any;
  ((e as any)[5] as any) !== (u as any) ? (h = {
    htmlFor: u
  }, (e as any)[5] = u, (e as any)[6] = h) : h = (e as any)[6];
  const y: any = (p as any) == (null as any) ? void 0 : c,
    b: any = (p as any) == (null as any) ? void 0 : !0;
  let j: any;
  ((e as any)[7] as any) !== (t as any) || ((e as any)[8] as any) !== (o as any) ? (j = (P: any): any => (o as any)({
    ...t,
    name: ((P as any).currentTarget as any).value
  }), (e as any)[7] = t, (e as any)[8] = o, (e as any)[9] = j) : j = (e as any)[9];
  let v: any;
  ((e as any)[10] as any) !== (d as any) ? (v = (d as any)({
    id: "6YtxFj"
  }), (e as any)[10] = d, (e as any)[11] = v) : v = (e as any)[11];
  let x: any;
  ((e as any)[12] as any) !== (n as any) || ((e as any)[13] as any) !== ((t as any).name as any) || ((e as any)[14] as any) !== (u as any) || ((e as any)[15] as any) !== (y as any) || ((e as any)[16] as any) !== (b as any) || ((e as any)[17] as any) !== (j as any) || ((e as any)[18] as any) !== (v as any) ? (x = ((l as any).jsx as any)((ne as any).Input, {
    "aria-describedby": y,
    "aria-invalid": b,
    autoComplete: "off",
    autoFocus: n,
    id: u,
    onChange: j,
    placeholder: v,
    spellCheck: !1,
    value: (t as any).name
  }), (e as any)[12] = n, (e as any)[13] = (t as any).name, (e as any)[14] = u, (e as any)[15] = y, (e as any)[16] = b, (e as any)[17] = j, (e as any)[18] = v, (e as any)[19] = x) : x = (e as any)[19];
  let _: any;
  ((e as any)[20] as any) !== (i as any) || ((e as any)[21] as any) !== (x as any) ? (_ = ((l as any).jsx as any)(ne, {
    disabled: i,
    size: "lg",
    children: x
  }), (e as any)[20] = i, (e as any)[21] = x, (e as any)[22] = _) : _ = (e as any)[22];
  let k: any;
  ((e as any)[23] as any) !== ((t as any).name as any) || ((e as any)[24] as any) !== (p as any) || ((e as any)[25] as any) !== (c as any) ? (k = (p as any) == (null as any) ? null : ((l as any).jsx as any)(nn, {
    id: c,
    children: ((l as any).jsx as any)(wn, {
      name: (((t as any).name as any).trim as any)(),
      problem: p
    })
  }), (e as any)[23] = (t as any).name, (e as any)[24] = p, (e as any)[25] = c, (e as any)[26] = k) : k = (e as any)[26];
  let S: any;
  ((e as any)[27] as any) !== (k as any) || ((e as any)[28] as any) !== (h as any) || ((e as any)[29] as any) !== (_ as any) ? (S = ((l as any).jsxs as any)(ge, {
    label: g,
    layout: "row",
    target: h,
    children: [_, k]
  }), (e as any)[27] = k, (e as any)[28] = h, (e as any)[29] = _, (e as any)[30] = S) : S = (e as any)[30];
  let T: any;
  ((e as any)[31] as any) !== (t as any) || ((e as any)[32] as any) !== (o as any) || ((e as any)[33] as any) !== (m as any) || ((e as any)[34] as any) !== (a as any) ? (T = a ? null : ((l as any).jsx as any)(ge, {
    label: ((l as any).jsx as any)(w, {
      id: "+zy2Nq"
    }),
    layout: "row",
    target: {
      labelId: m
    },
    children: ((l as any).jsxs as any)(be, {
      "aria-labelledby": m,
      fullWidth: !0,
      onValueChange: (P: any): any => (o as any)({
        ...t,
        type: (Fl as any)(P)
      }),
      size: "lg",
      value: (t as any).type,
      children: [((l as any).jsx as any)((be as any).Item, {
        value: "HTTP",
        children: ((l as any).jsx as any)(w, {
          id: "fy6XDM"
        })
      }), ((l as any).jsx as any)((be as any).Item, {
        value: "STDIO",
        children: ((l as any).jsx as any)(w, {
          id: "sjVfrA"
        })
      })]
    })
  }), (e as any)[31] = t, (e as any)[32] = o, (e as any)[33] = m, (e as any)[34] = a, (e as any)[35] = T) : T = (e as any)[35];
  let I: any;
  ((e as any)[36] as any) !== (t as any) || ((e as any)[37] as any) !== (o as any) ? (I = ((l as any).jsx as any)(ks, {
    draft: t,
    onChange: o
  }), (e as any)[36] = t, (e as any)[37] = o, (e as any)[38] = I) : I = (e as any)[38];
  let C: any;
  return ((e as any)[39] as any) !== (S as any) || ((e as any)[40] as any) !== (T as any) || ((e as any)[41] as any) !== (I as any) ? (C = ((l as any).jsxs as any)((l as any).Fragment, {
    children: [S, T, I]
  }), (e as any)[39] = S, (e as any)[40] = T, (e as any)[41] = I, (e as any)[42] = C) : C = (e as any)[42], C;
}
function Ml(this: any, s: any, e: any): any {
  if (((s as any).kind as any) === ("invalid" as any)) return ((l as any).jsx as any)(pn, {
    problem: (s as any).problem
  });
  const n: any = (gs as any)((s as any).draft);
  return (n as any) !== (void 0 as any) ? ((l as any).jsx as any)(pn, {
    problem: n
  }) : (e?.kind as any) === ("invalid" as any) ? ((l as any).jsx as any)(wn, {
    name: ((s as any).draft as any).name,
    problem: (e as any).problem
  }) : null;
}
function Ss(this: any, s: any): any {
  (Ss as any).d = 946;
  const e: any = ((Z as any).c as any)(18),
    {
      text: n,
      problem: t,
      onChange: i
    }: any = s,
    r: any = ((O as any).useId as any)(),
    a: any = ((O as any).useId as any)();
  let o: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = ((l as any).jsx as any)(w, {
    id: "pyrZbp"
  }), (e as any)[0] = o) : o = (e as any)[0];
  let d: any;
  ((e as any)[1] as any) !== (r as any) ? (d = {
    htmlFor: r
  }, (e as any)[1] = r, (e as any)[2] = d) : d = (e as any)[2];
  const u: any = (t as any) == (null as any) ? void 0 : a,
    c: any = (t as any) == (null as any) ? void 0 : !0;
  let m: any;
  ((e as any)[3] as any) !== (i as any) ? (m = (h: any): any => (i as any)(((h as any).currentTarget as any).value), (e as any)[3] = i, (e as any)[4] = m) : m = (e as any)[4];
  let f: any;
  ((e as any)[5] as any) !== (u as any) || ((e as any)[6] as any) !== (c as any) || ((e as any)[7] as any) !== (m as any) || ((e as any)[8] as any) !== (n as any) || ((e as any)[9] as any) !== (r as any) ? (f = ((l as any).jsx as any)(ne, {
    layout: "textarea",
    mono: !0,
    size: "lg",
    children: ((l as any).jsx as any)((ne as any).Textarea, {
      "aria-describedby": u,
      "aria-invalid": c,
      autoResize: !1,
      id: r,
      onChange: m,
      rows: 14,
      spellCheck: !1,
      value: n
    })
  }), (e as any)[5] = u, (e as any)[6] = c, (e as any)[7] = m, (e as any)[8] = n, (e as any)[9] = r, (e as any)[10] = f) : f = (e as any)[10];
  let p: any;
  ((e as any)[11] as any) !== (t as any) || ((e as any)[12] as any) !== (a as any) ? (p = (t as any) == (null as any) ? null : ((l as any).jsx as any)(nn, {
    id: a,
    children: t
  }), (e as any)[11] = t, (e as any)[12] = a, (e as any)[13] = p) : p = (e as any)[13];
  let g: any;
  return ((e as any)[14] as any) !== (d as any) || ((e as any)[15] as any) !== (f as any) || ((e as any)[16] as any) !== (p as any) ? (g = ((l as any).jsxs as any)(ge, {
    label: o,
    layout: "stack",
    target: d,
    children: [f, p]
  }), (e as any)[14] = d, (e as any)[15] = f, (e as any)[16] = p, (e as any)[17] = g) : g = (e as any)[17], g;
}
function zs(this: any, s: any): any {
  (zs as any).d = 942;
  const e: any = ((Z as any).c as any)(14),
    {
      view: n,
      onChange: t
    }: any = s,
    i: any = ((O as any).useId as any)();
  let r: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = ((l as any).jsx as any)(w, {
    id: "uBAxNB"
  }), (e as any)[0] = r) : r = (e as any)[0];
  let a: any;
  ((e as any)[1] as any) !== (i as any) ? (a = {
    labelId: i
  }, (e as any)[1] = i, (e as any)[2] = a) : a = (e as any)[2];
  let o: any;
  ((e as any)[3] as any) !== (t as any) ? (o = (f: any): any => (t as any)((f as any) === ("json" as any) ? "json" : "fields"), (e as any)[3] = t, (e as any)[4] = o) : o = (e as any)[4];
  let d: any;
  ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = ((l as any).jsx as any)((be as any).Item, {
    value: "fields",
    children: ((l as any).jsx as any)(w, {
      id: "QRAWTO"
    })
  }), (e as any)[5] = d) : d = (e as any)[5];
  let u: any;
  ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = ((l as any).jsx as any)((be as any).Item, {
    value: "json",
    children: ((l as any).jsx as any)(w, {
      id: "B2Zb/F"
    })
  }), (e as any)[6] = u) : u = (e as any)[6];
  let c: any;
  ((e as any)[7] as any) !== (i as any) || ((e as any)[8] as any) !== (o as any) || ((e as any)[9] as any) !== (n as any) ? (c = ((l as any).jsxs as any)(be, {
    "aria-labelledby": i,
    fullWidth: !0,
    onValueChange: o,
    size: "lg",
    value: n,
    children: [d, u]
  }), (e as any)[7] = i, (e as any)[8] = o, (e as any)[9] = n, (e as any)[10] = c) : c = (e as any)[10];
  let m: any;
  return ((e as any)[11] as any) !== (a as any) || ((e as any)[12] as any) !== (c as any) ? (m = ((l as any).jsx as any)(ge, {
    label: r,
    layout: "row",
    target: a,
    children: c
  }), (e as any)[11] = a, (e as any)[12] = c, (e as any)[13] = m) : m = (e as any)[13], m;
}
function sn(this: any, s: any): any {
  (sn as any).d = 945;
  const e: any = ((Z as any).c as any)(48),
    {
      access: n,
      dialogActionsHost: t,
      onBack: i,
      plugin: r
    }: any = s,
    a: any = (t as any) === (void 0 as any) ? null : t;
  let o: any;
  if (((e as any)[0] as any) !== (r as any)) {
    const E: any = (r?.mcpConfigJson as any) == (null as any) ? null : (Rl as any)((r as any).mcpConfigJson);
    o = (E as any) == (null as any) ? null : (ys as any)(E), (e as any)[0] = r, (e as any)[1] = o;
  } else o = (e as any)[1];
  const d: any = o;
  let u: any;
  ((e as any)[2] as any) !== (d as any) ? (u = (): any => ({
    view: "fields",
    draft: d ?? mn
  }), (e as any)[2] = d, (e as any)[3] = u) : u = (e as any)[3];
  const [c, m]: any = ((O as any).useState as any)(u),
    [f, p]: any = ((O as any).useState as any)(!1),
    g: any = (r as any) != (null as any),
    h: any = ((n as any).listing as any).plugins,
    y: any = (n as any).isPending || ((n as any).load as any) !== ("ready" as any);
  let b: any, j: any, v: any, x: any, _: any, k: any, S: any;
  if (((e as any)[4] as any) !== (n as any) || ((e as any)[5] as any) !== (c as any) || ((e as any)[6] as any) !== (f as any) || ((e as any)[7] as any) !== (d as any) || ((e as any)[8] as any) !== (g as any) || ((e as any)[9] as any) !== (i as any) || ((e as any)[10] as any) !== (r as any) || ((e as any)[11] as any) !== (h as any) || ((e as any)[12] as any) !== (y as any)) {
    S = ((Symbol as any).for as any)("react.early_return_sentinel");
    e: {
      const E: any = (Ll as any)(c),
        D: any = ((E as any).kind as any) === ("draft" as any) ? (Ln as any)((E as any).draft) : null,
        A: any = !g && (D as any) != (null as any) ? (Al as any)(D, h) : null,
        U: any = !y && (A?.kind as any) === ("ok" as any) ? (A as any).write : null;
      let B: any;
      if (((e as any)[20] as any) !== (d as any)) {
        const $: any = (d as any) == (null as any) ? null : (Ln as any)(d);
        B = ($ as any) == (null as any) ? null : (fn as any)($), (e as any)[20] = d, (e as any)[21] = B;
      } else B = (e as any)[21];
      const q: any = B,
        L: any = (D as any) == (null as any) ? null : (fn as any)(D),
        V: any = g && !y && (L as any) != (null as any) && (L as any) !== (q as any);
      if (v = ($: any): any => {
        if (($ as any) !== ((c as any).view as any)) switch ((p as any)(!0), (c as any).view) {
          case "fields":
            {
              (m as any)({
                view: "json",
                draft: (c as any).draft,
                text: (Fn as any)((c as any).draft)
              });
              return;
            }
          case "json":
            {
              ((((c as any).text as any).trim as any)() as any) === ("" as any) || ((c as any).text as any) === ((Fn as any)((c as any).draft) as any) ? (m as any)({
                view: "fields",
                draft: (c as any).draft
              }) : ((E as any).kind as any) === ("draft" as any) && (m as any)({
                view: "fields",
                draft: (E as any).draft
              });
              return;
            }
        }
      }, j = async (): Promise<any> => {
        if ((r as any) != (null as any)) {
          if ((L as any) == (null as any) || !V) return;
          await ((n as any).updateCustom as any)((r as any).pluginId, L);
          return;
        }
        (U as any) != (null as any) && (await ((n as any).addCustom as any)(U)) && (i as any)();
      }, b = g ? V : (U as any) != (null as any), g && (d as any) == (null as any)) {
        let $: any;
        ((e as any)[22] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? ($ = {
          className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-h8yej3 sand-euugli sand-11lfxj5"
        }, (e as any)[22] = $) : $ = (e as any)[22];
        let F: any;
        ((e as any)[23] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (F = ((l as any).jsx as any)("div", {
          ...$,
          children: ((l as any).jsx as any)(J, {
            as: "p",
            color: "red",
            role: "alert",
            size: "sm",
            children: ((l as any).jsx as any)(w, {
              id: "D2AZQg"
            })
          })
        }), (e as any)[23] = F) : F = (e as any)[23], S = F;
        break e;
      }
      ((e as any)[24] as any) !== (g as any) ? (k = ({
        0: {
          className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-h8yej3 sand-euugli"
        },
        1: {
          className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-h8yej3 sand-euugli sand-11lfxj5"
        }
      } as any)[(!!g as any) << (0 as any)], (e as any)[24] = g, (e as any)[25] = k) : k = (e as any)[25], ((e as any)[26] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = {
        className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d sand-euugli"
      }, (e as any)[26] = x) : x = (e as any)[26], _ = ((c as any).view as any) === ("fields" as any) ? ((l as any).jsx as any)(ws, {
        autoFocusName: !g && !f,
        draft: (c as any).draft,
        nameLocked: g,
        onChange: ($: any): any => (m as any)({
          view: "fields",
          draft: $
        }),
        plugins: h,
        typeLocked: g
      }) : ((l as any).jsx as any)(Ss, {
        onChange: ($: any): any => (m as any)({
          ...c,
          text: $
        }),
        problem: (Ml as any)(E, A),
        text: (c as any).text
      });
    }
    (e as any)[4] = n, (e as any)[5] = c, (e as any)[6] = f, (e as any)[7] = d, (e as any)[8] = g, (e as any)[9] = i, (e as any)[10] = r, (e as any)[11] = h, (e as any)[12] = y, (e as any)[13] = b, (e as any)[14] = j, (e as any)[15] = v, (e as any)[16] = x, (e as any)[17] = _, (e as any)[18] = k, (e as any)[19] = S;
  } else b = (e as any)[13], j = (e as any)[14], v = (e as any)[15], x = (e as any)[16], _ = (e as any)[17], k = (e as any)[18], S = (e as any)[19];
  if ((S as any) !== (((Symbol as any).for as any)("react.early_return_sentinel") as any)) return S;
  let T: any;
  ((e as any)[27] as any) !== ((c as any).view as any) || ((e as any)[28] as any) !== (g as any) || ((e as any)[29] as any) !== (v as any) ? (T = g ? null : ((l as any).jsx as any)(zs, {
    onChange: v,
    view: (c as any).view
  }), (e as any)[27] = (c as any).view, (e as any)[28] = g, (e as any)[29] = v, (e as any)[30] = T) : T = (e as any)[30];
  let I: any;
  ((e as any)[31] as any) !== (x as any) || ((e as any)[32] as any) !== (_ as any) || ((e as any)[33] as any) !== (T as any) ? (I = ((l as any).jsxs as any)("div", {
    ...x,
    children: [_, T]
  }), (e as any)[31] = x, (e as any)[32] = _, (e as any)[33] = T, (e as any)[34] = I) : I = (e as any)[34];
  let C: any;
  ((e as any)[35] as any) !== (n as any) ? (C = ((l as any).jsx as any)(Fe, {
    access: n
  }), (e as any)[35] = n, (e as any)[36] = C) : C = (e as any)[36];
  let P: any;
  ((e as any)[37] as any) !== (b as any) || ((e as any)[38] as any) !== (a as any) || ((e as any)[39] as any) !== (g as any) || ((e as any)[40] as any) !== (i as any) || ((e as any)[41] as any) !== (j as any) ? (P = g ? ((l as any).jsx as any)("div", {
    className: "sand-78zum5 sand-6s0dn4 sand-167g77z",
    children: ((l as any).jsxs as any)("div", {
      className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-vc5jky",
      children: [((l as any).jsx as any)(pe, {
        onClick: i,
        size: "sm",
        type: "button",
        variant: "secondary",
        children: ((l as any).jsx as any)(w, {
          id: "dEgA5A"
        })
      }), ((l as any).jsx as any)(pe, {
        disabled: !b,
        onClick: (): any => {
          (j as any)();
        },
        size: "sm",
        type: "button",
        variant: "primary",
        children: ((l as any).jsx as any)(w, {
          id: "tfDRzk"
        })
      })]
    })
  }) : ((l as any).jsx as any)(kn, {
    canSave: b,
    host: a,
    onCancel: i,
    onSave: (): any => {
      (j as any)();
    }
  }), (e as any)[37] = b, (e as any)[38] = a, (e as any)[39] = g, (e as any)[40] = i, (e as any)[41] = j, (e as any)[42] = P) : P = (e as any)[42];
  let N: any;
  return ((e as any)[43] as any) !== (C as any) || ((e as any)[44] as any) !== (P as any) || ((e as any)[45] as any) !== (k as any) || ((e as any)[46] as any) !== (I as any) ? (N = ((l as any).jsxs as any)("div", {
    ...k,
    children: [I, C, P]
  }), (e as any)[43] = C, (e as any)[44] = P, (e as any)[45] = k, (e as any)[46] = I, (e as any)[47] = N) : N = (e as any)[47], N;
}
const Be: string = "mcp-servers",
  rn: string = "secrets";
function Cs(this: any, s: any): any {
  (Cs as any).d = 953;
  const e: any = ((Z as any).c as any)(25),
    {
      access: n,
      dialogActionsHost: t,
      secrets: i,
      onBack: r
    }: any = s,
    a: any = (t as any) === (void 0 as any) ? null : t,
    {
      _: o
    }: any = (me as any)(),
    [d, u]: any = ((O as any).useState as any)(Be),
    c: any = (d as any) === (Be as any);
  let m: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = {
    className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-h8yej3 sand-euugli"
  }, (e as any)[0] = m) : m = (e as any)[0];
  let f: any;
  ((e as any)[1] as any) !== (o as any) ? (f = (o as any)({
    id: "8Tg/JR"
  }), (e as any)[1] = o, (e as any)[2] = f) : f = (e as any)[2];
  let p: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = (T: any): any => {
    (u as any)((T as any) === (rn as any) ? rn : Be);
  }, (e as any)[3] = p) : p = (e as any)[3];
  let g: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = ((l as any).jsx as any)((be as any).Item, {
    value: Be,
    children: ((l as any).jsx as any)(w, {
      id: "JgMRiA"
    })
  }), (e as any)[4] = g) : g = (e as any)[4];
  let h: any;
  ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = ((l as any).jsx as any)((be as any).Item, {
    value: rn,
    children: ((l as any).jsx as any)(w, {
      id: "MAv87s"
    })
  }), (e as any)[5] = h) : h = (e as any)[5];
  let y: any;
  ((e as any)[6] as any) !== (f as any) || ((e as any)[7] as any) !== (d as any) ? (y = ((l as any).jsxs as any)(be, {
    "aria-label": f,
    fullWidth: !0,
    onValueChange: p,
    size: "lg",
    value: d,
    children: [g, h]
  }), (e as any)[6] = f, (e as any)[7] = d, (e as any)[8] = y) : y = (e as any)[8];
  const b: any = (d as any) !== (Be as any),
    j: any = c ? a : null;
  let v: any;
  ((e as any)[9] as any) !== (n as any) || ((e as any)[10] as any) !== (r as any) || ((e as any)[11] as any) !== (j as any) ? (v = ((l as any).jsx as any)(sn, {
    access: n,
    onBack: r,
    dialogActionsHost: j
  }), (e as any)[9] = n, (e as any)[10] = r, (e as any)[11] = j, (e as any)[12] = v) : v = (e as any)[12];
  let x: any;
  ((e as any)[13] as any) !== (v as any) || ((e as any)[14] as any) !== (b as any) ? (x = ((l as any).jsx as any)("div", {
    hidden: b,
    children: v
  }), (e as any)[13] = v, (e as any)[14] = b, (e as any)[15] = x) : x = (e as any)[15];
  const _: any = c ? null : i;
  let k: any;
  ((e as any)[16] as any) !== (a as any) || ((e as any)[17] as any) !== (c as any) || ((e as any)[18] as any) !== (r as any) ? (k = c ? null : ((l as any).jsx as any)(kn, {
    canSave: !1,
    host: a,
    onCancel: r,
    onSave: Zl
  }), (e as any)[16] = a, (e as any)[17] = c, (e as any)[18] = r, (e as any)[19] = k) : k = (e as any)[19];
  let S: any;
  return ((e as any)[20] as any) !== (x as any) || ((e as any)[21] as any) !== (_ as any) || ((e as any)[22] as any) !== (k as any) || ((e as any)[23] as any) !== (y as any) ? (S = ((l as any).jsxs as any)("div", {
    ...m,
    children: [y, x, _, k]
  }), (e as any)[20] = x, (e as any)[21] = _, (e as any)[22] = k, (e as any)[23] = y, (e as any)[24] = S) : S = (e as any)[24], S;
}
function Zl(this: any): any {}
const Dl: any = new (Set as any)(["CREDENTIAL", "CREDENTIALS", "KEY", "PASSPHRASE", "PASSWORD", "SECRET", "TOKEN"]);
function zn(this: any, s: any): any {
  return ((((((((((((((s as any).replace as any)(/([a-z\d])([A-Z])/g, "$1_$2") as any).replace as any)(/([A-Z]+)([A-Z][a-z])/g, "$1_$2") as any).replace as any)(/[^a-z\d]+/gi, "_") as any).toUpperCase as any)() as any).split as any)("_") as any).filter as any)((e: any): any => ((e as any).length as any) > (0 as any)) as any).some as any)((e: any): any => ((Dl as any).has as any)(e));
}
function Is(this: any, s: any): any {
  return ((((((((s as any).split as any)("_") as any).filter as any)((e: any): any => ((e as any).length as any) > (0 as any)) as any).map as any)((e: any): any => ((e as any).length as any) <= (3 as any) ? e : `${((e as any).charAt as any)(0)}${((((e as any).slice as any)(1) as any).toLowerCase as any)()}`) as any).join as any)(" ");
}
function Vl(this: any, s: any): any {
  return ((Array as any).isArray as any)(s) ? new (Set as any)(((s as any).filter as any)((e: any): any => (typeof e as any) == ("string" as any))) : new (Set as any)();
}
function Hl(this: any, s: any): any {
  if (!((Array as any).isArray as any)(s) || ((s as any).length as any) === (0 as any)) return;
  const e: any = [];
  for (const n of s) if ((typeof n as any) == ("string" as any) || (typeof n as any) == ("number" as any) || (typeof n as any) == ("boolean" as any)) ((e as any).push as any)({
    label: (String as any)(n),
    value: n
  });else return;
  return e;
}
function Ul(this: any, s: any): any {
  if ((s as any) === ("string" as any) || (s as any) === ("number" as any) || (s as any) === ("integer" as any) || (s as any) === ("boolean" as any)) return s;
}
function Gl(this: any, s: any, e: any, n: any): any {
  if (!(cn as any)(e)) return;
  const t: any = (Ul as any)((e as any).type);
  if ((t as any) === (void 0 as any)) return;
  const i: any = (Hl as any)((e as any).enum);
  if (((e as any).enum as any) !== (void 0 as any) && (i as any) === (void 0 as any)) return;
  const r: any = (typeof (e as any).title as any) == ("string" as any) && (((e as any).title as any).length as any) > (0 as any) ? (e as any).title : (Is as any)(s);
  return {
    name: s,
    label: r,
    required: n,
    secret: ((e as any).writeOnly as any) === (!0 as any) || (typeof (e as any).format as any) == ("string" as any) && ((((e as any).format as any).toLowerCase as any)() as any) === ("password" as any) || (zn as any)(s),
    type: t,
    ...((i as any) !== (void 0 as any) ? {
      options: i
    } : {})
  };
}
function Kl(this: any, s: any): any {
  if ((s as any) == (null as any) || ((s as any).length as any) === (0 as any)) return null;
  const e: any = (Jn as any)(s);
  if (!(cn as any)(e) || !(cn as any)((e as any).properties)) return null;
  const n: any = (Vl as any)((e as any).required),
    t: any = [];
  for (const [i, r] of ((Object as any).entries as any)((e as any).properties)) {
    const a: any = (Gl as any)(i, r, ((n as any).has as any)(i));
    (a as any) !== (void 0 as any) && ((t as any).push as any)(a);
  }
  return ((t as any).length as any) > (0 as any) ? t : null;
}
function Wl(this: any, s: any): any {
  const e: any = (Jn as any)(s);
  return (typeof e as any) == ("string" as any) || (typeof e as any) == ("number" as any) || (typeof e as any) == ("boolean" as any) ? e : s;
}
function Jl(this: any, s: any): any {
  return ((s as any).map as any)((e: any): any => ({
    name: (e as any).key,
    label: (e as any).label,
    required: ((e as any).isRequired as any) === (!0 as any),
    secret: ((e as any).isSecret as any) === (!0 as any) || (zn as any)((e as any).key),
    type: (e as any).type,
    ...(((e as any).options as any) != (null as any) ? {
      options: (((e as any).options as any).map as any)((n: any): any => ({
        label: (n as any).label,
        value: (Wl as any)((n as any).rawValue)
      }))
    } : {})
  }));
}
function Yl(this: any, s: any): any {
  return ((s as any).map as any)((e: any): any => ({
    name: e,
    label: (Is as any)(e),
    required: !1,
    secret: (zn as any)(e),
    type: "string"
  }));
}
function Xl(this: any, s: any, e: any): any {
  return (Kl as any)((s as any).variablesJson) ?? ((e as any) != (null as any) && ((e as any).length as any) > (0 as any) ? (Jl as any)(e) : (Yl as any)((s as any).variableNames));
}
function on(this: any, s: any): any {
  const e: any = {};
  for (const n of s) (e as any)[(n as any).name] = ((n as any).type as any) === ("boolean" as any) ? !1 : "";
  return e;
}
function Ql(this: any, s: any): any {
  return (typeof s as any) == ("string" as any) ? ((((s as any).trim as any)() as any).length as any) === (0 as any) : (s as any) === (void 0 as any);
}
function ea(this: any, s: any, e: any): any {
  return ((s as any).filter as any)((n: any): any => (n as any).required && ((n as any).type as any) !== ("boolean" as any) && (Ql as any)((e as any)[(n as any).name]));
}
function na(this: any, s: any, e: any): any {
  const n: any = {};
  for (const t of s) {
    const i: any = (e as any)[(t as any).name];
    if (((t as any).type as any) === ("boolean" as any)) {
      (typeof i as any) == ("boolean" as any) && ((n as any)[(t as any).name] = i);
      continue;
    }
    if ((typeof i as any) != ("string" as any) || ((((i as any).trim as any)() as any).length as any) === (0 as any)) continue;
    if (((t as any).options as any) != (null as any)) {
      const a: any = ((t as any).options as any)[(Number as any)(i)];
      (a as any) !== (void 0 as any) && ((n as any)[(t as any).name] = (a as any).value);
      continue;
    }
    if (((t as any).type as any) === ("string" as any)) {
      (n as any)[(t as any).name] = i;
      continue;
    }
    const r: any = (Number as any)(i);
    ((Number as any).isFinite as any)(r) && ((n as any)[(t as any).name] = r);
  }
  return n;
}
const Zn: string = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
async function sa(this: any, s: any, e: any): Promise<any> {
  try {
    return {
      saved: await (s as any)(e)
    };
  } catch (n: any) {
    return (Wn as any)(n, {
      tags: {
        sand_area: "grok-bot-team"
      }
    }), {
      saved: !1,
      error: n
    };
  }
}
const ta: any = {
    clear: {
      k71WvV: "sand-11t971q",
      $$css: !0
    }
  },
  Dn: any = {
    number: "number",
    integer: "number",
    string: "text",
    secret: "password"
  };
function Ts(this: any, s: any): any {
  (Ts as any).d = 956;
  const e: any = ((Z as any).c as any)(72),
    {
      fields: n,
      hasConfiguredVariables: t,
      pluginDisplayName: i,
      disabled: r,
      onSave: a
    }: any = s,
    {
      _: o
    }: any = (me as any)(),
    d: any = ((O as any).useId as any)();
  let u: any;
  ((e as any)[0] as any) !== (n as any) ? (u = (): any => (on as any)(n), (e as any)[0] = n, (e as any)[1] = u) : u = (e as any)[1];
  const [c, m]: any = ((O as any).useState as any)(u),
    [f, p]: any = ((O as any).useState as any)(!1),
    [g, h]: any = ((O as any).useState as any)(!1),
    [y, b]: any = ((O as any).useState as any)(!1),
    j: any = r || f,
    v: any = t || y;
  let x: any, _: any;
  ((e as any)[2] as any) !== (n as any) || ((e as any)[3] as any) !== (c as any) ? (x = (ea as any)(n, c), _ = new (Set as any)(((x as any).map as any)(aa)), (e as any)[2] = n, (e as any)[3] = c, (e as any)[4] = x, (e as any)[5] = _) : (x = (e as any)[4], _ = (e as any)[5]);
  const k: any = _;
  let S: any;
  if (((e as any)[6] as any) !== (n as any) || ((e as any)[7] as any) !== (c as any)) {
    let M: any;
    ((e as any)[9] as any) !== (c as any) ? (M = (z: any): any => {
      const R: any = (c as any)[(z as any).name];
      return ((z as any).type as any) === ("boolean" as any) ? (R as any) !== (!0 as any) : (typeof R as any) != ("string" as any) || ((R as any).length as any) === (0 as any);
    }, (e as any)[9] = c, (e as any)[10] = M) : M = (e as any)[10], S = ((n as any).every as any)(M), (e as any)[6] = n, (e as any)[7] = c, (e as any)[8] = S;
  } else S = (e as any)[8];
  const T: any = S;
  let I: any;
  ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (I = (M: any, z: any): any => {
    (m as any)((R: any): any => ({
      ...R,
      [M]: z
    }));
  }, (e as any)[11] = I) : I = (e as any)[11];
  const C: any = I;
  let P: any;
  ((e as any)[12] as any) !== (n as any) || ((e as any)[13] as any) !== (a as any) ? (P = (M: any): any => {
    (p as any)(!0), ((async (): Promise<any> => (((await (sa as any)(a, M)) as any).saved && ((b as any)(((((Object as any).keys as any)(M) as any).length as any) > (0 as any)), (m as any)((on as any)(n))), (p as any)(!1))) as any)();
  }, (e as any)[12] = n, (e as any)[13] = a, (e as any)[14] = P) : P = (e as any)[14];
  const N: any = P;
  let E: any;
  ((e as any)[15] as any) !== (n as any) || ((e as any)[16] as any) !== (T as any) || ((e as any)[17] as any) !== (j as any) || ((e as any)[18] as any) !== (x as any) || ((e as any)[19] as any) !== (N as any) || ((e as any)[20] as any) !== (c as any) ? (E = (M: any): any => {
    if (((M as any).preventDefault as any)(), !(j || T)) {
      if (((x as any).length as any) > (0 as any)) {
        (h as any)(!0);
        return;
      }
      (h as any)(!1), (N as any)((na as any)(n, c));
    }
  }, (e as any)[15] = n, (e as any)[16] = T, (e as any)[17] = j, (e as any)[18] = x, (e as any)[19] = N, (e as any)[20] = c, (e as any)[21] = E) : E = (e as any)[21];
  const D: any = E;
  let A: any;
  ((e as any)[22] as any) !== (n as any) || ((e as any)[23] as any) !== (j as any) || ((e as any)[24] as any) !== (N as any) || ((e as any)[25] as any) !== (v as any) ? (A = (): any => {
    j || ((m as any)((on as any)(n)), (h as any)(!1), v && (N as any)({}));
  }, (e as any)[22] = n, (e as any)[23] = j, (e as any)[24] = N, (e as any)[25] = v, (e as any)[26] = A) : A = (e as any)[26];
  const U: any = A;
  let B: any, q: any, L: any;
  if (((e as any)[27] as any) !== (o as any) || ((e as any)[28] as any) !== (D as any) || ((e as any)[29] as any) !== (i as any) || ((e as any)[30] as any) !== (v as any)) {
    const M: any = {
      displayName: i
    };
    ((e as any)[34] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (q = {
      className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
    }, (e as any)[34] = q) : q = (e as any)[34], L = D, B = v ? ((l as any).jsxs as any)(J, {
      as: "p",
      color: "secondary",
      size: "sm",
      children: [(o as any)({
        id: "BbG6WA",
        values: {
          0: (M as any).displayName
        }
      }), " ", ((l as any).jsx as any)(w, {
        id: "+CwemP"
      })]
    }) : null, (e as any)[27] = o, (e as any)[28] = D, (e as any)[29] = i, (e as any)[30] = v, (e as any)[31] = B, (e as any)[32] = q, (e as any)[33] = L;
  } else B = (e as any)[31], q = (e as any)[32], L = (e as any)[33];
  let V: any;
  ((e as any)[35] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (V = {
    className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
  }, (e as any)[35] = V) : V = (e as any)[35];
  let $: any;
  if (((e as any)[36] as any) !== (o as any) || ((e as any)[37] as any) !== (n as any) || ((e as any)[38] as any) !== (d as any) || ((e as any)[39] as any) !== (j as any) || ((e as any)[40] as any) !== (k as any) || ((e as any)[41] as any) !== (g as any) || ((e as any)[42] as any) !== (v as any) || ((e as any)[43] as any) !== (c as any)) {
    let M: any;
    ((e as any)[45] as any) !== (o as any) || ((e as any)[46] as any) !== (d as any) || ((e as any)[47] as any) !== (j as any) || ((e as any)[48] as any) !== (k as any) || ((e as any)[49] as any) !== (g as any) || ((e as any)[50] as any) !== (v as any) || ((e as any)[51] as any) !== (c as any) ? (M = (z: any): any => {
      const R: any = `${d}-${(z as any).name}`,
        K: any = (c as any)[(z as any).name],
        te: any = g && ((k as any).has as any)((z as any).name);
      let ee: any;
      if (((z as any).type as any) === ("boolean" as any)) ee = ((l as any).jsx as any)("input", {
        checked: (K as any) === (!0 as any),
        disabled: j,
        id: R,
        onChange: (re: any): any => (C as any)((z as any).name, ((re as any).currentTarget as any).checked),
        type: "checkbox",
        className: "sand-qcrz7y sand-1kky2od sand-lup9mm"
      });else if (((z as any).options as any) != (null as any)) ee = ((l as any).jsxs as any)("select", {
        "aria-invalid": te || void 0,
        disabled: j,
        id: R,
        onChange: (re: any): any => (C as any)((z as any).name, ((re as any).currentTarget as any).value),
        value: (typeof K as any) == ("string" as any) ? K : "",
        ...({
          0: {
            className: "sand-9f619 sand-10w6t97 sand-t970qd sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-1tiofj7 sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1h7ufjq"
          },
          1: {
            className: "sand-9f619 sand-10w6t97 sand-t970qd sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-1qmwy7c sand-1a2a7pz sand-1tiofj7 sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1h7ufjq sand-14g0ujm"
          }
        } as any)[(!!te as any) << (0 as any)],
        children: [((l as any).jsx as any)("option", {
          value: "",
          children: v ? Zn : (o as any)({
            id: "02ePaq",
            values: {
              0: (z as any).label
            }
          })
        }), (((z as any).options as any).map as any)(la)]
      });else {
        let re: any = (Dn as any)[(z as any).type];
        ((z as any).type as any) === ("string" as any) && (z as any).secret && (re = (Dn as any).secret), ee = ((l as any).jsx as any)("input", {
          "aria-invalid": te || void 0,
          disabled: j,
          id: R,
          onChange: (he: any): any => (C as any)((z as any).name, ((he as any).currentTarget as any).value),
          placeholder: v ? Zn : void 0,
          spellCheck: !1,
          type: re,
          value: (typeof K as any) == ("string" as any) ? K : "",
          ...({
            0: {
              className: "sand-9f619 sand-10w6t97 sand-t970qd sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-1tiofj7 sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1h7ufjq"
            },
            1: {
              className: "sand-9f619 sand-10w6t97 sand-t970qd sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-1qmwy7c sand-1a2a7pz sand-1tiofj7 sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1h7ufjq sand-14g0ujm"
            }
          } as any)[(!!te as any) << (0 as any)]
        });
      }
      return ((l as any).jsxs as any)("div", {
        className: "sand-78zum5 sand-dt5ytf sand-17d4w8g",
        children: [((l as any).jsxs as any)("label", {
          htmlFor: R,
          className: "sand-78zum5 sand-6s0dn4 sand-1jnr06f sand-11wthnw sand-d4r4e8 sand-tyxrsu",
          children: [((l as any).jsx as any)("span", {
            children: (z as any).label
          }), (z as any).required ? null : ((l as any).jsx as any)("span", {
            className: "sand-169k319",
            children: ((l as any).jsx as any)(w, {
              id: "WyGyYp"
            })
          })]
        }), ee, te ? ((l as any).jsx as any)("p", {
          className: "sand-1ghz6dp sand-1wm8ruf sand-1d3mw78 sand-6rl5ky",
          children: ((l as any).jsx as any)(w, {
            id: "MbjbEk",
            values: {
              0: (z as any).label
            }
          })
        }) : null]
      }, (z as any).name);
    }, (e as any)[45] = o, (e as any)[46] = d, (e as any)[47] = j, (e as any)[48] = k, (e as any)[49] = g, (e as any)[50] = v, (e as any)[51] = c, (e as any)[52] = M) : M = (e as any)[52], $ = ((n as any).map as any)(M), (e as any)[36] = o, (e as any)[37] = n, (e as any)[38] = d, (e as any)[39] = j, (e as any)[40] = k, (e as any)[41] = g, (e as any)[42] = v, (e as any)[43] = c, (e as any)[44] = $;
  } else $ = (e as any)[44];
  let F: any;
  ((e as any)[53] as any) !== ($ as any) ? (F = ((l as any).jsx as any)("div", {
    ...V,
    children: $
  }), (e as any)[53] = $, (e as any)[54] = F) : F = (e as any)[54];
  let G: any;
  ((e as any)[55] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (G = {
    className: "sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-167g77z"
  }, (e as any)[55] = G) : G = (e as any)[55];
  const H: any = j || !v && T;
  let se: any;
  ((e as any)[56] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (se = ((l as any).jsx as any)(w, {
    id: "xCJdfg"
  }), (e as any)[56] = se) : se = (e as any)[56];
  let W: any;
  ((e as any)[57] as any) !== (U as any) || ((e as any)[58] as any) !== (H as any) ? (W = ((l as any).jsx as any)(pe, {
    disabled: H,
    onClick: U,
    rootStyle: (ta as any).clear,
    size: "sm",
    type: "button",
    variant: "text",
    children: se
  }), (e as any)[57] = U, (e as any)[58] = H, (e as any)[59] = W) : W = (e as any)[59];
  const ae: any = j || T;
  let ie: any;
  ((e as any)[60] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ie = ((l as any).jsx as any)(w, {
    id: "tfDRzk"
  }), (e as any)[60] = ie) : ie = (e as any)[60];
  let X: any;
  ((e as any)[61] as any) !== (ae as any) ? (X = ((l as any).jsx as any)(pe, {
    disabled: ae,
    size: "sm",
    type: "submit",
    variant: "primary",
    children: ie
  }), (e as any)[61] = ae, (e as any)[62] = X) : X = (e as any)[62];
  let le: any;
  ((e as any)[63] as any) !== (W as any) || ((e as any)[64] as any) !== (X as any) ? (le = ((l as any).jsxs as any)("div", {
    ...G,
    children: [W, X]
  }), (e as any)[63] = W, (e as any)[64] = X, (e as any)[65] = le) : le = (e as any)[65];
  let Q: any;
  return ((e as any)[66] as any) !== (B as any) || ((e as any)[67] as any) !== (F as any) || ((e as any)[68] as any) !== (le as any) || ((e as any)[69] as any) !== (q as any) || ((e as any)[70] as any) !== (L as any) ? (Q = ((l as any).jsxs as any)("form", {
    ...q,
    onSubmit: L,
    children: [B, F, le]
  }), (e as any)[66] = B, (e as any)[67] = F, (e as any)[68] = le, (e as any)[69] = q, (e as any)[70] = L, (e as any)[71] = Q) : Q = (e as any)[71], Q;
}
function la(this: any, s: any, e: any): any {
  return ((l as any).jsx as any)("option", {
    value: (String as any)(e),
    children: (s as any).label
  }, `${(s as any).label}:${(String as any)((s as any).value)}`);
}
function aa(this: any, s: any): any {
  return (s as any).name;
}
const Cn: any = {
  detailDescription: {
    ks0D6T: "sand-193iq5w",
    kHjlTd: "sand-j0a0fe",
    $$css: !0
  }
};
function Ns(this: any, s: any): any {
  (Ns as any).d = 964;
  const e: any = ((Z as any).c as any)(4),
    {
      name: n
    }: any = s;
  let t: any, i: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = {
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-1useyqa sand-sdox4t sand-hojbe8 sand-1tiofj7 sand-1o0liin sand-b3r6kr"
  }, i = ((l as any).jsx as any)(vn, {
    name: "key",
    size: "base"
  }), (e as any)[0] = t, (e as any)[1] = i) : (t = (e as any)[0], i = (e as any)[1]);
  let r: any;
  return ((e as any)[2] as any) !== (n as any) ? (r = ((l as any).jsx as any)("span", {
    "aria-label": n,
    role: "img",
    ...t,
    children: i
  }), (e as any)[2] = n, (e as any)[3] = r) : r = (e as any)[3], r;
}
function In(this: any, s: any): any {
  (In as any).d = 961;
  const e: any = ((Z as any).c as any)(6),
    {
      name: n,
      iconUrl: t
    }: any = s;
  let i: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = {
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-1useyqa sand-sdox4t sand-hojbe8 sand-1tiofj7 sand-1o0liin sand-b3r6kr"
  }, (e as any)[0] = i) : i = (e as any)[0];
  let r: any;
  ((e as any)[1] as any) !== (t as any) ? (r = (t as any) == (null as any) || ((t as any).length as any) === (0 as any) ? ((l as any).jsx as any)(vn, {
    name: "plug",
    size: "base"
  }) : ((l as any).jsx as any)("img", {
    alt: "",
    src: t,
    className: "sand-h8yej3 sand-5yr21d sand-l1xv1r"
  }), (e as any)[1] = t, (e as any)[2] = r) : r = (e as any)[2];
  let a: any;
  return ((e as any)[3] as any) !== (n as any) || ((e as any)[4] as any) !== (r as any) ? (a = ((l as any).jsx as any)("span", {
    "aria-label": n,
    role: "img",
    ...i,
    children: r
  }), (e as any)[3] = n, (e as any)[4] = r, (e as any)[5] = a) : a = (e as any)[5], a;
}
function Ps(this: any, s: any, e: any): any {
  return (e?.skills as any) != (null as any) && (((e as any).skills as any).length as any) > (0 as any) ? (e as any).skills : (((s as any).skills as any).map as any)((n: any): any => ({
    name: (n as any).name,
    description: (n as any).description
  }));
}
function Tn(this: any, s: any): any {
  (Tn as any).d = 965;
  const e: any = ((Z as any).c as any)(13),
    {
      skills: n,
      onOpen: t
    }: any = s,
    {
      _: i
    }: any = (me as any)();
  if (((n as any).length as any) === (0 as any)) return null;
  let r: any;
  ((e as any)[0] as any) !== (i as any) || ((e as any)[1] as any) !== ((n as any).length as any) ? (r = (i as any)({
    id: "nXrLxC",
    values: {
      0: (n as any).length
    }
  }), (e as any)[0] = i, (e as any)[1] = (n as any).length, (e as any)[2] = r) : r = (e as any)[2];
  const a: any = r;
  let o: any, d: any, u: any, c: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = {
    className: "sand-14vqqas"
  }, d = ((l as any).jsx as any)("p", {
    className: "sand-1ghz6dp sand-zueoph sand-169k319 sand-1wm8ruf sand-1d3mw78",
    children: ((l as any).jsx as any)(w, {
      id: "PCSkw2"
    })
  }), u = {
    className: "sand-hojbe8 sand-1tiofj7 sand-b3r6kr"
  }, c = {
    className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-1qughib sand-1v2ro7d sand-h8yej3 sand-1xn8qrt sand-aope02 sand-ng3xce sand-jbqb8w sand-tyxrsu sand-jb2p0i sand-11wthnw sand-d4r4e8 sand-1yc453h sand-1ypdohk"
  }, (e as any)[3] = o, (e as any)[4] = d, (e as any)[5] = u, (e as any)[6] = c) : (o = (e as any)[3], d = (e as any)[4], u = (e as any)[5], c = (e as any)[6]);
  let m: any;
  ((e as any)[7] as any) !== (a as any) ? (m = ((l as any).jsx as any)("span", {
    children: a
  }), (e as any)[7] = a, (e as any)[8] = m) : m = (e as any)[8];
  let f: any;
  ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = ((l as any).jsx as any)("span", {
    "aria-hidden": !0,
    className: "sand-3nfvp2 sand-169k319",
    children: ((l as any).jsx as any)(vn, {
      name: "chevron-right",
      size: "xs"
    })
  }), (e as any)[9] = f) : f = (e as any)[9];
  let p: any;
  return ((e as any)[10] as any) !== (t as any) || ((e as any)[11] as any) !== (m as any) ? (p = ((l as any).jsxs as any)("div", {
    ...o,
    children: [d, ((l as any).jsx as any)("div", {
      ...u,
      children: ((l as any).jsxs as any)("button", {
        ...c,
        onClick: t,
        type: "button",
        children: [m, f]
      })
    })]
  }), (e as any)[10] = t, (e as any)[11] = m, (e as any)[12] = p) : p = (e as any)[12], p;
}
function hn(this: any, s: any): any {
  (hn as any).d = 962;
  const e: any = ((Z as any).c as any)(6),
    {
      skills: n
    }: any = s;
  let t: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = {
    className: "sand-78zum5 sand-dt5ytf sand-1c1vhfx sand-h8yej3 sand-euugli sand-11lfxj5"
  }, (e as any)[0] = t) : t = (e as any)[0];
  let i: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = ((l as any).jsx as any)(J, {
    as: "h3",
    size: "lg",
    weight: "medium",
    children: ((l as any).jsx as any)(w, {
      id: "PCSkw2"
    })
  }), (e as any)[1] = i) : i = (e as any)[1];
  let r: any;
  ((e as any)[2] as any) !== (n as any) ? (r = ((n as any).length as any) === (0 as any) ? null : ((l as any).jsx as any)("ul", {
    className: "sand-78zum5 sand-dt5ytf sand-1ghz6dp sand-1717udv sand-3ct3a4 sand-hojbe8 sand-1tiofj7 sand-b3r6kr",
    children: ((n as any).map as any)(ia)
  }), (e as any)[2] = n, (e as any)[3] = r) : r = (e as any)[3];
  let a: any;
  return ((e as any)[4] as any) !== (r as any) ? (a = ((l as any).jsxs as any)("div", {
    ...t,
    children: [i, r]
  }), (e as any)[4] = r, (e as any)[5] = a) : a = (e as any)[5], a;
}
function ia(this: any, s: any): any {
  return ((l as any).jsxs as any)("li", {
    className: "sand-rvj5dj sand-jvrg09 sand-ou54vl sand-p59q4u sand-aope02",
    children: [((l as any).jsx as any)("span", {
      children: (s as any).name
    }), ((l as any).jsx as any)("span", {
      className: "sand-169k319 sand-p4054r",
      children: (s as any).description
    })]
  }, (s as any).name);
}
function Nn(this: any, s: any): any {
  (Nn as any).d = 958;
  const e: any = ((Z as any).c as any)(9),
    {
      connectorType: n
    }: any = s,
    {
      _: t
    }: any = (me as any)();
  let i: any;
  ((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (n as any) ? (i = (t as any)((n as any) === ("team" as any) ? {
    id: "auMtyx"
  } : {
    id: "Hj4RAZ"
  }), (e as any)[0] = t, (e as any)[1] = n, (e as any)[2] = i) : i = (e as any)[2];
  const r: any = i;
  let a: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = {
    className: "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-splgde sand-1xijbu4 sand-149ho13 sand-1tiofj7 sand-169k319 sand-1wm8ruf sand-1d3mw78 sand-uxw1ft sand-t0e3qv"
  }, (e as any)[3] = a) : a = (e as any)[3];
  let o: any;
  ((e as any)[4] as any) !== (n as any) ? (o = ((l as any).jsx as any)("span", {
    ...a,
    children: (n as any) === ("team" as any) ? ((l as any).jsx as any)(w, {
      id: "KM6m8p"
    }) : ((l as any).jsx as any)(w, {
      id: "7PzzBU"
    })
  }), (e as any)[4] = n, (e as any)[5] = o) : o = (e as any)[5];
  let d: any;
  return ((e as any)[6] as any) !== (r as any) || ((e as any)[7] as any) !== (o as any) ? (d = ((l as any).jsx as any)(at, {
    content: r,
    openDelay: 0,
    children: o
  }), (e as any)[6] = r, (e as any)[7] = o, (e as any)[8] = d) : d = (e as any)[8], d;
}
function gn(this: any, s: any): any {
  (gn as any).d = 960;
  const e: any = ((Z as any).c as any)(49),
    {
      plugin: n,
      access: t,
      onBack: i,
      onOpenSkills: r
    }: any = s;
  let a: any, o: any, d: any, u: any, c: any;
  if (((e as any)[0] as any) !== ((t as any).catalog as any) || ((e as any)[1] as any) !== ((t as any).isPending as any) || ((e as any)[2] as any) !== ((t as any).load as any) || ((e as any)[3] as any) !== (n as any)) {
    let C: any;
    ((e as any)[9] as any) !== (n as any) ? (C = (N: any): any => (Qn as any)(n, N), (e as any)[9] = n, (e as any)[10] = C) : C = (e as any)[10];
    const P: any = (((t as any).catalog as any).find as any)(C);
    o = P?.iconUrl ?? (n as any).logoUrl, u = (Le as any)(n, P), c = (t as any).isPending || ((t as any).load as any) !== ("ready" as any), a = (Xl as any)(n, P?.fields), d = (Ps as any)(n, P), (e as any)[0] = (t as any).catalog, (e as any)[1] = (t as any).isPending, (e as any)[2] = (t as any).load, (e as any)[3] = n, (e as any)[4] = a, (e as any)[5] = o, (e as any)[6] = d, (e as any)[7] = u, (e as any)[8] = c;
  } else a = (e as any)[4], o = (e as any)[5], d = (e as any)[6], u = (e as any)[7], c = (e as any)[8];
  const m: any = d;
  let f: any, p: any;
  ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = {
    className: "sand-78zum5 sand-dt5ytf sand-1c1vhfx sand-h8yej3 sand-euugli sand-11lfxj5"
  }, p = {
    className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-euugli"
  }, (e as any)[11] = f, (e as any)[12] = p) : (f = (e as any)[11], p = (e as any)[12]);
  let g: any;
  ((e as any)[13] as any) !== (o as any) || ((e as any)[14] as any) !== (u as any) ? (g = ((l as any).jsx as any)(In, {
    iconUrl: o,
    name: u
  }), (e as any)[13] = o, (e as any)[14] = u, (e as any)[15] = g) : g = (e as any)[15];
  let h: any, y: any;
  ((e as any)[16] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = {
    className: "sand-78zum5 sand-dt5ytf sand-1ed6fcf sand-1iyjqo2 sand-euugli"
  }, y = {
    className: "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-167g77z sand-euugli"
  }, (e as any)[16] = h, (e as any)[17] = y) : (h = (e as any)[16], y = (e as any)[17]);
  let b: any;
  ((e as any)[18] as any) !== (u as any) ? (b = ((l as any).jsx as any)(J, {
    as: "h3",
    size: "lg",
    weight: "medium",
    children: u
  }), (e as any)[18] = u, (e as any)[19] = b) : b = (e as any)[19];
  let j: any;
  ((e as any)[20] as any) !== ((n as any).connectorType as any) ? (j = ((l as any).jsx as any)(Nn, {
    connectorType: (n as any).connectorType
  }), (e as any)[20] = (n as any).connectorType, (e as any)[21] = j) : j = (e as any)[21];
  let v: any;
  ((e as any)[22] as any) !== (b as any) || ((e as any)[23] as any) !== (j as any) ? (v = ((l as any).jsx as any)("div", {
    ...h,
    children: ((l as any).jsxs as any)("div", {
      ...y,
      children: [b, j]
    })
  }), (e as any)[22] = b, (e as any)[23] = j, (e as any)[24] = v) : v = (e as any)[24];
  let x: any;
  ((e as any)[25] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = {
    className: "sand-78zum5 sand-6s0dn4 sand-2lah0s sand-1a02dak sand-13a6bvl sand-167g77z sand-vc5jky"
  }, (e as any)[25] = x) : x = (e as any)[25];
  let _: any;
  ((e as any)[26] as any) !== (t as any) || ((e as any)[27] as any) !== ((n as any).pluginId as any) ? (_ = (): any => ((t as any).remove as any)((n as any).pluginId), (e as any)[26] = t, (e as any)[27] = (n as any).pluginId, (e as any)[28] = _) : _ = (e as any)[28];
  let k: any;
  ((e as any)[29] as any) !== (_ as any) || ((e as any)[30] as any) !== (u as any) || ((e as any)[31] as any) !== (c as any) ? (k = ((l as any).jsx as any)("div", {
    ...x,
    children: ((l as any).jsx as any)(Xe, {
      disabled: c,
      name: u,
      onRemove: _
    })
  }), (e as any)[29] = _, (e as any)[30] = u, (e as any)[31] = c, (e as any)[32] = k) : k = (e as any)[32];
  let S: any;
  ((e as any)[33] as any) !== (k as any) || ((e as any)[34] as any) !== (g as any) || ((e as any)[35] as any) !== (v as any) ? (S = ((l as any).jsxs as any)("div", {
    ...p,
    children: [g, v, k]
  }), (e as any)[33] = k, (e as any)[34] = g, (e as any)[35] = v, (e as any)[36] = S) : S = (e as any)[36];
  let T: any;
  ((e as any)[37] as any) !== (t as any) || ((e as any)[38] as any) !== (a as any) || ((e as any)[39] as any) !== (i as any) || ((e as any)[40] as any) !== (r as any) || ((e as any)[41] as any) !== (n as any) || ((e as any)[42] as any) !== (m as any) || ((e as any)[43] as any) !== (u as any) || ((e as any)[44] as any) !== (c as any) ? (T = ((n as any).mcpConfigJson as any) != (null as any) ? ((l as any).jsx as any)(sn, {
    access: t,
    onBack: i,
    plugin: n
  }) : ((l as any).jsxs as any)((l as any).Fragment, {
    children: [(((n as any).description as any).length as any) > (0 as any) ? ((l as any).jsx as any)(J, {
      as: "p",
      color: "secondary",
      rootStyle: (Cn as any).detailDescription,
      size: "md",
      children: (n as any).description
    }) : null, ((a as any).length as any) > (0 as any) ? ((l as any).jsxs as any)("div", {
      className: "sand-78zum5 sand-dt5ytf sand-167g77z sand-10dr8xq sand-aope02 sand-hojbe8 sand-1tiofj7",
      children: [((l as any).jsx as any)(J, {
        as: "span",
        size: "sm",
        weight: "semibold",
        children: ((l as any).jsx as any)(w, {
          id: "gpmbqk"
        })
      }), ((l as any).jsx as any)(Ts, {
        disabled: c,
        fields: a,
        hasConfiguredVariables: ((n as any).hasConfiguredVariables as any) === (!0 as any),
        onSave: (C: any): any => ((t as any).configure as any)((n as any).pluginId, C),
        pluginDisplayName: u
      }), ((l as any).jsx as any)(Fe, {
        access: t
      })]
    }) : ((l as any).jsx as any)(Fe, {
      access: t
    }), ((l as any).jsx as any)(Tn, {
      onOpen: r,
      skills: m
    })]
  }), (e as any)[37] = t, (e as any)[38] = a, (e as any)[39] = i, (e as any)[40] = r, (e as any)[41] = n, (e as any)[42] = m, (e as any)[43] = u, (e as any)[44] = c, (e as any)[45] = T) : T = (e as any)[45];
  let I: any;
  return ((e as any)[46] as any) !== (S as any) || ((e as any)[47] as any) !== (T as any) ? (I = ((l as any).jsxs as any)("div", {
    ...f,
    children: [S, T]
  }), (e as any)[46] = S, (e as any)[47] = T, (e as any)[48] = I) : I = (e as any)[48], I;
}
function $s(this: any, s: any): any {
  ($s as any).d = 957;
  const e: any = ((Z as any).c as any)(40),
    {
      entry: n,
      access: t,
      isAdded: i,
      onOpenSkills: r
    }: any = s,
    a: any = (t as any).isPending || ((t as any).load as any) !== ("ready" as any);
  let o: any, d: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = {
    className: "sand-78zum5 sand-dt5ytf sand-1c1vhfx sand-h8yej3 sand-euugli sand-11lfxj5"
  }, d = {
    className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-euugli"
  }, (e as any)[0] = o, (e as any)[1] = d) : (o = (e as any)[0], d = (e as any)[1]);
  let u: any;
  ((e as any)[2] as any) !== ((n as any).displayName as any) || ((e as any)[3] as any) !== ((n as any).iconUrl as any) ? (u = ((l as any).jsx as any)(In, {
    iconUrl: (n as any).iconUrl,
    name: (n as any).displayName
  }), (e as any)[2] = (n as any).displayName, (e as any)[3] = (n as any).iconUrl, (e as any)[4] = u) : u = (e as any)[4];
  let c: any, m: any;
  ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = {
    className: "sand-78zum5 sand-dt5ytf sand-1ed6fcf sand-1iyjqo2 sand-euugli"
  }, m = {
    className: "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-167g77z sand-euugli"
  }, (e as any)[5] = c, (e as any)[6] = m) : (c = (e as any)[5], m = (e as any)[6]);
  let f: any;
  ((e as any)[7] as any) !== ((n as any).displayName as any) ? (f = ((l as any).jsx as any)(J, {
    as: "h3",
    size: "lg",
    weight: "medium",
    children: (n as any).displayName
  }), (e as any)[7] = (n as any).displayName, (e as any)[8] = f) : f = (e as any)[8];
  let p: any;
  ((e as any)[9] as any) !== (n as any) ? (p = (lt as any)(n), (e as any)[9] = n, (e as any)[10] = p) : p = (e as any)[10];
  let g: any;
  ((e as any)[11] as any) !== (p as any) ? (g = ((l as any).jsx as any)(Nn, {
    connectorType: p
  }), (e as any)[11] = p, (e as any)[12] = g) : g = (e as any)[12];
  let h: any;
  ((e as any)[13] as any) !== (f as any) || ((e as any)[14] as any) !== (g as any) ? (h = ((l as any).jsx as any)("div", {
    ...c,
    children: ((l as any).jsxs as any)("div", {
      ...m,
      children: [f, g]
    })
  }), (e as any)[13] = f, (e as any)[14] = g, (e as any)[15] = h) : h = (e as any)[15];
  let y: any;
  ((e as any)[16] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = {
    className: "sand-78zum5 sand-6s0dn4 sand-2lah0s sand-1a02dak sand-13a6bvl sand-167g77z sand-vc5jky"
  }, (e as any)[16] = y) : y = (e as any)[16];
  let b: any;
  ((e as any)[17] as any) !== (t as any) || ((e as any)[18] as any) !== (n as any) || ((e as any)[19] as any) !== (i as any) || ((e as any)[20] as any) !== (a as any) ? (b = ((l as any).jsx as any)("div", {
    ...y,
    children: i ? ((l as any).jsx as any)(Xe, {
      name: (n as any).displayName,
      readOnly: !0
    }) : ((l as any).jsx as any)(es, {
      disabled: a,
      name: (n as any).displayName,
      onAdd: (): any => ((t as any).add as any)(n)
    })
  }), (e as any)[17] = t, (e as any)[18] = n, (e as any)[19] = i, (e as any)[20] = a, (e as any)[21] = b) : b = (e as any)[21];
  let j: any;
  ((e as any)[22] as any) !== (b as any) || ((e as any)[23] as any) !== (u as any) || ((e as any)[24] as any) !== (h as any) ? (j = ((l as any).jsxs as any)("div", {
    ...d,
    children: [u, h, b]
  }), (e as any)[22] = b, (e as any)[23] = u, (e as any)[24] = h, (e as any)[25] = j) : j = (e as any)[25];
  let v: any;
  ((e as any)[26] as any) !== ((n as any).description as any) ? (v = (((n as any).description as any).length as any) > (0 as any) ? ((l as any).jsx as any)(J, {
    as: "p",
    color: "secondary",
    rootStyle: (Cn as any).detailDescription,
    size: "md",
    children: (n as any).description
  }) : null, (e as any)[26] = (n as any).description, (e as any)[27] = v) : v = (e as any)[27];
  let x: any;
  ((e as any)[28] as any) !== ((n as any).skills as any) ? (x = (n as any).skills ?? [], (e as any)[28] = (n as any).skills, (e as any)[29] = x) : x = (e as any)[29];
  let _: any;
  ((e as any)[30] as any) !== (r as any) || ((e as any)[31] as any) !== (x as any) ? (_ = ((l as any).jsx as any)(Tn, {
    onOpen: r,
    skills: x
  }), (e as any)[30] = r, (e as any)[31] = x, (e as any)[32] = _) : _ = (e as any)[32];
  let k: any;
  ((e as any)[33] as any) !== (t as any) ? (k = ((l as any).jsx as any)(Fe, {
    access: t
  }), (e as any)[33] = t, (e as any)[34] = k) : k = (e as any)[34];
  let S: any;
  return ((e as any)[35] as any) !== (j as any) || ((e as any)[36] as any) !== (v as any) || ((e as any)[37] as any) !== (_ as any) || ((e as any)[38] as any) !== (k as any) ? (S = ((l as any).jsxs as any)("div", {
    ...o,
    children: [j, v, _, k]
  }), (e as any)[35] = j, (e as any)[36] = v, (e as any)[37] = _, (e as any)[38] = k, (e as any)[39] = S) : S = (e as any)[39], S;
}
function Es(this: any, s: any): any {
  (Es as any).d = 963;
  const e: any = ((Z as any).c as any)(55),
    {
      secret: n,
      installedSecrets: t
    }: any = s,
    {
      _: i
    }: any = (me as any)(),
    [r, a]: any = ((O as any).useState as any)(!1),
    [o, d]: any = ((O as any).useState as any)(null),
    u: any = ((O as any).useRef as any)(null),
    c: any = ((O as any).useRef as any)(null),
    m: any = (t as any).isPending;
  let f: any;
  ((e as any)[0] as any) !== (i as any) ? (f = (G: any): any => {
    switch ((G as any).kind) {
      case "empty":
        return (i as any)({
          id: "qNV794"
        });
      case "short":
        return (i as any)({
          id: "Cr5BJv",
          values: {
            GROK_BOT_SECRET_VALUE_MIN_LENGTH: Ks
          }
        });
      case "long":
        return (i as any)({
          id: "jTBLMU",
          values: {
            GROK_BOT_SECRET_VALUE_MAX_KIB: Gs
          }
        });
    }
  }, (e as any)[0] = i, (e as any)[1] = f) : f = (e as any)[1];
  const p: any = f;
  let g: any;
  ((e as any)[2] as any) !== (i as any) || ((e as any)[3] as any) !== (p as any) || ((e as any)[4] as any) !== (t as any) || ((e as any)[5] as any) !== ((n as any).name as any) || ((e as any)[6] as any) !== (m as any) ? (g = async (G: any): Promise<any> => {
    if (((G as any).preventDefault as any)(), m) return;
    const H: any = ((((c as any).current?.value ?? "") as any).trim as any)(),
      se: any = (u as any).current?.value.trim() ?? "",
      W: any = (Kn as any)(H);
    if ((W as any) !== (null as any)) {
      (d as any)((p as any)(W));
      return;
    }
    if ((d as any)(null), !(await ((t as any).replace as any)({
      name: (n as any).name,
      description: se,
      value: H
    }))) {
      (d as any)((i as any)({
        id: "JUpeyb"
      }));
      return;
    }
    ((c as any).current as any) != (null as any) && ((c as any).current as any).isConnected && (((c as any).current as any).value = ""), (a as any)(!1);
  }, (e as any)[2] = i, (e as any)[3] = p, (e as any)[4] = t, (e as any)[5] = (n as any).name, (e as any)[6] = m, (e as any)[7] = g) : g = (e as any)[7];
  const h: any = g;
  let y: any, b: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = {
    className: "sand-78zum5 sand-dt5ytf sand-1c1vhfx sand-h8yej3 sand-euugli sand-11lfxj5"
  }, b = {
    className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-euugli"
  }, (e as any)[8] = y, (e as any)[9] = b) : (y = (e as any)[8], b = (e as any)[9]);
  let j: any;
  ((e as any)[10] as any) !== ((n as any).name as any) ? (j = ((l as any).jsx as any)(Ns, {
    name: (n as any).name
  }), (e as any)[10] = (n as any).name, (e as any)[11] = j) : j = (e as any)[11];
  let v: any, x: any;
  ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = {
    className: "sand-78zum5 sand-dt5ytf sand-1ed6fcf sand-1iyjqo2 sand-euugli"
  }, x = {
    className: "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-167g77z sand-euugli"
  }, (e as any)[12] = v, (e as any)[13] = x) : (v = (e as any)[12], x = (e as any)[13]);
  let _: any;
  ((e as any)[14] as any) !== ((n as any).name as any) ? (_ = ((l as any).jsx as any)(J, {
    as: "h3",
    size: "lg",
    weight: "medium",
    children: (n as any).name
  }), (e as any)[14] = (n as any).name, (e as any)[15] = _) : _ = (e as any)[15];
  let k: any;
  ((e as any)[16] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (k = ((l as any).jsx as any)(J, {
    as: "span",
    color: "tertiary",
    size: "sm",
    children: ((l as any).jsx as any)(w, {
      id: "8VEDbV"
    })
  }), (e as any)[16] = k) : k = (e as any)[16];
  let S: any;
  ((e as any)[17] as any) !== (_ as any) ? (S = ((l as any).jsxs as any)("div", {
    ...x,
    children: [_, k]
  }), (e as any)[17] = _, (e as any)[18] = S) : S = (e as any)[18];
  let T: any;
  ((e as any)[19] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (T = ((l as any).jsx as any)(ft, {}), (e as any)[19] = T) : T = (e as any)[19];
  let I: any;
  ((e as any)[20] as any) !== (S as any) ? (I = ((l as any).jsxs as any)("div", {
    ...v,
    children: [S, T]
  }), (e as any)[20] = S, (e as any)[21] = I) : I = (e as any)[21];
  let C: any;
  ((e as any)[22] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (C = {
    className: "sand-78zum5 sand-6s0dn4 sand-2lah0s sand-1a02dak sand-13a6bvl sand-167g77z sand-vc5jky"
  }, (e as any)[22] = C) : C = (e as any)[22];
  const P: any = m || r;
  let N: any;
  ((e as any)[23] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (N = (): any => {
    (a as any)(!0), (d as any)(null);
  }, (e as any)[23] = N) : N = (e as any)[23];
  let E: any;
  ((e as any)[24] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (E = ((l as any).jsx as any)(w, {
    id: "fqSfXY"
  }), (e as any)[24] = E) : E = (e as any)[24];
  let D: any;
  ((e as any)[25] as any) !== (P as any) ? (D = ((l as any).jsx as any)(pe, {
    disabled: P,
    onClick: N,
    size: "sm",
    type: "button",
    variant: "secondary",
    children: E
  }), (e as any)[25] = P, (e as any)[26] = D) : D = (e as any)[26];
  let A: any;
  ((e as any)[27] as any) !== (t as any) || ((e as any)[28] as any) !== ((n as any).name as any) ? (A = (): any => ((t as any).remove as any)((n as any).name), (e as any)[27] = t, (e as any)[28] = (n as any).name, (e as any)[29] = A) : A = (e as any)[29];
  let U: any;
  ((e as any)[30] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (U = ((l as any).jsx as any)(w, {
    id: "t/YqKh"
  }), (e as any)[30] = U) : U = (e as any)[30];
  let B: any;
  ((e as any)[31] as any) !== (A as any) || ((e as any)[32] as any) !== (m as any) ? (B = ((l as any).jsx as any)(pe, {
    disabled: m,
    onClick: A,
    size: "sm",
    tone: "danger",
    type: "button",
    variant: "secondary",
    children: U
  }), (e as any)[31] = A, (e as any)[32] = m, (e as any)[33] = B) : B = (e as any)[33];
  let q: any;
  ((e as any)[34] as any) !== (D as any) || ((e as any)[35] as any) !== (B as any) ? (q = ((l as any).jsxs as any)("div", {
    ...C,
    children: [D, B]
  }), (e as any)[34] = D, (e as any)[35] = B, (e as any)[36] = q) : q = (e as any)[36];
  let L: any;
  ((e as any)[37] as any) !== (I as any) || ((e as any)[38] as any) !== (q as any) || ((e as any)[39] as any) !== (j as any) ? (L = ((l as any).jsxs as any)("div", {
    ...b,
    children: [j, I, q]
  }), (e as any)[37] = I, (e as any)[38] = q, (e as any)[39] = j, (e as any)[40] = L) : L = (e as any)[40];
  let V: any;
  ((e as any)[41] as any) !== ((n as any).description as any) ? (V = (((n as any).description as any).length as any) > (0 as any) ? ((l as any).jsx as any)(J, {
    as: "p",
    color: "secondary",
    rootStyle: (Cn as any).detailDescription,
    size: "md",
    children: (n as any).description
  }) : null, (e as any)[41] = (n as any).description, (e as any)[42] = V) : V = (e as any)[42];
  let $: any;
  ((e as any)[43] as any) !== (i as any) || ((e as any)[44] as any) !== (o as any) || ((e as any)[45] as any) !== ((t as any).isPending as any) || ((e as any)[46] as any) !== (r as any) || ((e as any)[47] as any) !== ((n as any).description as any) || ((e as any)[48] as any) !== (h as any) || ((e as any)[49] as any) !== (m as any) ? ($ = r ? ((l as any).jsxs as any)("form", {
    onSubmit: (G: any): any => {
      (h as any)(G);
    },
    className: "sand-78zum5 sand-dt5ytf sand-167g77z sand-c7ga6q sand-hojbe8 sand-1tiofj7",
    children: [((l as any).jsxs as any)("label", {
      className: "sand-78zum5 sand-dt5ytf sand-1jnr06f",
      children: [((l as any).jsx as any)(J, {
        as: "span",
        color: "secondary",
        size: "xs",
        children: ((l as any).jsx as any)(w, {
          id: "0tI9Xz"
        })
      }), ((l as any).jsx as any)("input", {
        autoComplete: "off",
        defaultValue: (n as any).description,
        maxLength: Gn,
        ref: u,
        className: "sand-1ghz6dp sand-knfcqp sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-jbqb8w sand-jb2p0i sand-11wthnw sand-tyxrsu sand-1h7ufjq"
      })]
    }), ((l as any).jsxs as any)("label", {
      className: "sand-78zum5 sand-dt5ytf sand-1jnr06f",
      children: [((l as any).jsx as any)(J, {
        as: "span",
        color: "secondary",
        size: "xs",
        children: ((l as any).jsx as any)(w, {
          id: "wMHvYH"
        })
      }), ((l as any).jsx as any)("input", {
        autoComplete: "off",
        autoFocus: !0,
        placeholder: (i as any)({
          id: "qNV794"
        }),
        ref: c,
        spellCheck: !1,
        type: "password",
        className: "sand-1ghz6dp sand-knfcqp sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-jbqb8w sand-jb2p0i sand-11wthnw sand-tyxrsu sand-1h7ufjq"
      })]
    }), (o as any) !== (null as any) ? ((l as any).jsx as any)(J, {
      as: "p",
      color: "red",
      role: "alert",
      size: "xs",
      children: o
    }) : null, ((l as any).jsxs as any)("div", {
      className: "sand-78zum5 sand-13a6bvl sand-17d4w8g",
      children: [((l as any).jsx as any)(pe, {
        disabled: (t as any).isPending,
        onClick: (): any => {
          (a as any)(!1), (d as any)(null);
        },
        size: "sm",
        type: "button",
        variant: "secondary",
        children: ((l as any).jsx as any)(w, {
          id: "dEgA5A"
        })
      }), ((l as any).jsx as any)(pe, {
        disabled: m,
        size: "sm",
        type: "submit",
        variant: "primary",
        children: ((l as any).jsx as any)(w, {
          id: "VyryCM"
        })
      })]
    })]
  }) : null, (e as any)[43] = i, (e as any)[44] = o, (e as any)[45] = (t as any).isPending, (e as any)[46] = r, (e as any)[47] = (n as any).description, (e as any)[48] = h, (e as any)[49] = m, (e as any)[50] = $) : $ = (e as any)[50];
  let F: any;
  return ((e as any)[51] as any) !== (L as any) || ((e as any)[52] as any) !== (V as any) || ((e as any)[53] as any) !== ($ as any) ? (F = ((l as any).jsxs as any)("div", {
    ...y,
    children: [L, V, $]
  }), (e as any)[51] = L, (e as any)[52] = V, (e as any)[53] = $, (e as any)[54] = F) : F = (e as any)[54], F;
}
function yn(this: any, s: any): any {
  (yn as any).d = 959;
  const e: any = ((Z as any).c as any)(65),
    {
      access: n,
      installedSecrets: t,
      customDialogActionsHost: i,
      secrets: r,
      view: a,
      onPaneChange: o
    }: any = s,
    d: any = (t as any) === (void 0 as any) ? null : t,
    u: any = (i as any) === (void 0 as any) ? null : i,
    c: any = (r as any) === (void 0 as any) ? null : r;
  let m: any;
  ((e as any)[0] as any) !== (o as any) ? (m = (): any => (o as any)({
    kind: "list"
  }), (e as any)[0] = o, (e as any)[1] = m) : m = (e as any)[1];
  const f: any = m;
  let p: any;
  ((e as any)[2] as any) !== (o as any) ? (p = (h: any): any => (o as any)({
    kind: h
  }), (e as any)[2] = o, (e as any)[3] = p) : p = (e as any)[3];
  const g: any = p;
  switch ((a as any).kind) {
    case "plugin":
      {
        let h: any;
        ((e as any)[4] as any) !== (g as any) || ((e as any)[5] as any) !== ((a as any).from as any) ? (h = (): any => (g as any)((a as any).from), (e as any)[4] = g, (e as any)[5] = (a as any).from, (e as any)[6] = h) : h = (e as any)[6];
        let y: any;
        ((e as any)[7] as any) !== (o as any) || ((e as any)[8] as any) !== ((a as any).from as any) || ((e as any)[9] as any) !== (((a as any).plugin as any).pluginId as any) ? (y = (): any => (o as any)({
          kind: "plugin-skills",
          pluginId: ((a as any).plugin as any).pluginId,
          from: (a as any).from
        }), (e as any)[7] = o, (e as any)[8] = (a as any).from, (e as any)[9] = ((a as any).plugin as any).pluginId, (e as any)[10] = y) : y = (e as any)[10];
        let b: any;
        return ((e as any)[11] as any) !== (n as any) || ((e as any)[12] as any) !== (h as any) || ((e as any)[13] as any) !== (y as any) || ((e as any)[14] as any) !== ((a as any).plugin as any) ? (b = ((l as any).jsx as any)(gn, {
          access: n,
          onBack: h,
          onOpenSkills: y,
          plugin: (a as any).plugin
        }), (e as any)[11] = n, (e as any)[12] = h, (e as any)[13] = y, (e as any)[14] = (a as any).plugin, (e as any)[15] = b) : b = (e as any)[15], b;
      }
    case "plugin-skills":
      {
        let h: any, y: any;
        if (((e as any)[16] as any) !== ((n as any).catalog as any) || ((e as any)[17] as any) !== ((a as any).plugin as any)) {
          let j: any;
          ((e as any)[20] as any) !== ((a as any).plugin as any) ? (j = (x: any): any => (Qn as any)((a as any).plugin, x), (e as any)[20] = (a as any).plugin, (e as any)[21] = j) : j = (e as any)[21];
          const v: any = (((n as any).catalog as any).find as any)(j);
          h = hn, y = (Ps as any)((a as any).plugin, v), (e as any)[16] = (n as any).catalog, (e as any)[17] = (a as any).plugin, (e as any)[18] = h, (e as any)[19] = y;
        } else h = (e as any)[18], y = (e as any)[19];
        let b: any;
        return ((e as any)[22] as any) !== (h as any) || ((e as any)[23] as any) !== (y as any) ? (b = ((l as any).jsx as any)(h, {
          skills: y
        }), (e as any)[22] = h, (e as any)[23] = y, (e as any)[24] = b) : b = (e as any)[24], b;
      }
    case "catalog":
      {
        let h: any;
        ((e as any)[25] as any) !== (n as any) || ((e as any)[26] as any) !== ((a as any).entry as any) || ((e as any)[27] as any) !== ((a as any).isAdded as any) ? (h = (a as any).isAdded ? (tt as any)(((n as any).listing as any).plugins, (a as any).entry) : void 0, (e as any)[25] = n, (e as any)[26] = (a as any).entry, (e as any)[27] = (a as any).isAdded, (e as any)[28] = h) : h = (e as any)[28];
        const y: any = h;
        if ((y as any) != (null as any)) {
          let v: any;
          ((e as any)[29] as any) !== (g as any) || ((e as any)[30] as any) !== ((a as any).from as any) ? (v = (): any => (g as any)((a as any).from), (e as any)[29] = g, (e as any)[30] = (a as any).from, (e as any)[31] = v) : v = (e as any)[31];
          let x: any;
          ((e as any)[32] as any) !== ((y as any).pluginId as any) || ((e as any)[33] as any) !== (o as any) || ((e as any)[34] as any) !== ((a as any).from as any) ? (x = (): any => (o as any)({
            kind: "plugin-skills",
            pluginId: (y as any).pluginId,
            from: (a as any).from
          }), (e as any)[32] = (y as any).pluginId, (e as any)[33] = o, (e as any)[34] = (a as any).from, (e as any)[35] = x) : x = (e as any)[35];
          let _: any;
          return ((e as any)[36] as any) !== (n as any) || ((e as any)[37] as any) !== (y as any) || ((e as any)[38] as any) !== (v as any) || ((e as any)[39] as any) !== (x as any) ? (_ = ((l as any).jsx as any)(gn, {
            access: n,
            onBack: v,
            onOpenSkills: x,
            plugin: y
          }), (e as any)[36] = n, (e as any)[37] = y, (e as any)[38] = v, (e as any)[39] = x, (e as any)[40] = _) : _ = (e as any)[40], _;
        }
        let b: any;
        ((e as any)[41] as any) !== (o as any) || ((e as any)[42] as any) !== (((a as any).entry as any).id as any) || ((e as any)[43] as any) !== ((a as any).from as any) ? (b = (): any => (o as any)({
          kind: "catalog-skills",
          entryId: ((a as any).entry as any).id,
          from: (a as any).from
        }), (e as any)[41] = o, (e as any)[42] = ((a as any).entry as any).id, (e as any)[43] = (a as any).from, (e as any)[44] = b) : b = (e as any)[44];
        let j: any;
        return ((e as any)[45] as any) !== (n as any) || ((e as any)[46] as any) !== (b as any) || ((e as any)[47] as any) !== ((a as any).entry as any) || ((e as any)[48] as any) !== ((a as any).isAdded as any) ? (j = ((l as any).jsx as any)($s, {
          access: n,
          entry: (a as any).entry,
          isAdded: (a as any).isAdded,
          onOpenSkills: b
        }), (e as any)[45] = n, (e as any)[46] = b, (e as any)[47] = (a as any).entry, (e as any)[48] = (a as any).isAdded, (e as any)[49] = j) : j = (e as any)[49], j;
      }
    case "catalog-skills":
      {
        let h: any;
        ((e as any)[50] as any) !== (((a as any).entry as any).skills as any) ? (h = ((a as any).entry as any).skills ?? [], (e as any)[50] = ((a as any).entry as any).skills, (e as any)[51] = h) : h = (e as any)[51];
        let y: any;
        return ((e as any)[52] as any) !== (h as any) ? (y = ((l as any).jsx as any)(hn, {
          skills: h
        }), (e as any)[52] = h, (e as any)[53] = y) : y = (e as any)[53], y;
      }
    case "custom":
      {
        let h: any;
        return ((e as any)[54] as any) !== (n as any) || ((e as any)[55] as any) !== (u as any) || ((e as any)[56] as any) !== (c as any) || ((e as any)[57] as any) !== (f as any) ? (h = (c as any) == (null as any) ? ((l as any).jsx as any)(sn, {
          access: n,
          dialogActionsHost: u,
          onBack: f
        }) : ((l as any).jsx as any)(Cs, {
          access: n,
          dialogActionsHost: u,
          onBack: f,
          secrets: c
        }), (e as any)[54] = n, (e as any)[55] = u, (e as any)[56] = c, (e as any)[57] = f, (e as any)[58] = h) : h = (e as any)[58], h;
      }
    case "secret":
      {
        let h: any;
        ((e as any)[59] as any) !== (d?.secrets as any) || ((e as any)[60] as any) !== ((a as any).name as any) ? (h = d?.secrets.find((j: any): any => ((j as any).name as any) === ((a as any).name as any)), (e as any)[59] = d?.secrets, (e as any)[60] = (a as any).name, (e as any)[61] = h) : h = (e as any)[61];
        const y: any = h;
        if ((y as any) == (null as any) || (d as any) == (null as any)) return null;
        let b: any;
        return ((e as any)[62] as any) !== (d as any) || ((e as any)[63] as any) !== (y as any) ? (b = ((l as any).jsx as any)(Es, {
          installedSecrets: d,
          secret: y
        }), (e as any)[62] = d, (e as any)[63] = y, (e as any)[64] = b) : b = (e as any)[64], b;
      }
    case "list":
    case "connected":
      return null;
  }
}
const ra: any = {
    k1xSpc: "sand-78zum5",
    kmuXW: "sand-2lah0s",
    $$css: !0
  },
  oa: number = 32,
  jn: number = 48,
  Vn: any = {
    inset: {
      kZCmMZ: "sand-mzvs34",
      kwRFfy: "sand-f159sx",
      $$css: !0
    }
  },
  Oe: any = {
    windowRow: (s: any): any => [ra, {
      kZKoxP: (s as any) != (null as any) ? "sand-16ye13r" : s,
      $$css: !0
    }, {
      "--x-height": (((e: any): any => (typeof e as any) == ("number" as any) ? (e as any) + ("px" as any) : e ?? void 0) as any)(s)
    }],
    sectionTitle: {
      kVAEAm: "sand-7wzq59",
      k87sOh: "sand-13vifvy",
      kY2c9j: "sand-1vjfegm",
      kogj98: "sand-1ghz6dp",
      kLKAdn: "sand-1y1aw1k",
      kGO01o: "sand-10b6aqq",
      kZCmMZ: "sand-mzvs34",
      kwRFfy: "sand-f159sx",
      kWkggS: "sand-f1vpex",
      kMwMTN: "sand-169k319",
      $$css: !0
    },
    row: {
      k1xSpc: "sand-78zum5",
      kGNEyG: "sand-6s0dn4",
      kOIVth: "sand-167g77z",
      kB7OPa: "sand-9f619",
      kAzted: "sand-1wxaq2x",
      kLKAdn: "sand-1y1aw1k",
      kGO01o: "sand-wib8y2",
      kZCmMZ: "sand-mzvs34",
      kwRFfy: "sand-f159sx",
      kaIpWk: "sand-1qmwy7c",
      kWkggS: "sand-jbqb8w sand-aalx5g",
      $$css: !0
    },
    rowTitle: {
      kmuXW: "sand-2lah0s",
      ks0D6T: "sand-h9uqaf",
      kVQacm: "sand-b3r6kr",
      kg5iWk: "sand-lyipyv",
      $$css: !0
    },
    rowReason: {
      kzQI83: "sand-1iyjqo2",
      k7Eaqz: "sand-euugli",
      kVQacm: "sand-b3r6kr",
      kg5iWk: "sand-lyipyv",
      kMwMTN: "sand-169k319",
      $$css: !0
    }
  };
function Os(this: any, {
  entry: s,
  title: e,
  name: n,
  logoUrl: t,
  sizePx: i = oa
}: any): any {
  return ((l as any).jsx as any)(it, {
    ...(rt as any)(s ?? {
      name: n ?? e,
      displayName: e,
      ...((t as any) != (null as any) && ((t as any).length as any) > (0 as any) ? {
        iconUrl: t
      } : {})
    }),
    name: e,
    size: i
  });
}
function ca(this: any, s: any, e: any): any {
  return e?.iconUrl ?? (s as any).logoUrl;
}
function tn(this: any, s: any): any {
  (tn as any).d = 1036;
  const e: any = ((Z as any).c as any)(27),
    {
      name: n,
      description: t,
      icon: i,
      trailing: r,
      titleId: a,
      onOpen: o
    }: any = s,
    {
      _: d
    }: any = (me as any)();
  let u: any;
  ((e as any)[0] as any) !== (d as any) || ((e as any)[1] as any) !== (n as any) ? (u = (d as any)({
    id: "T9mwDN",
    values: {
      name: n
    }
  }), (e as any)[0] = d, (e as any)[1] = n, (e as any)[2] = u) : u = (e as any)[2];
  let c: any, m: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = {
    className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-1iyjqo2 sand-euugli sand-1717udv sand-c342km sand-ng3xce sand-jbqb8w sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk"
  }, m = {
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-1td3qas sand-10w6t97 sand-b3r6kr sand-1qmwy7c sand-1tiofj7"
  }, (e as any)[3] = c, (e as any)[4] = m) : (c = (e as any)[3], m = (e as any)[4]);
  let f: any;
  ((e as any)[5] as any) !== (i as any) ? (f = ((l as any).jsx as any)("span", {
    ...m,
    children: i
  }), (e as any)[5] = i, (e as any)[6] = f) : f = (e as any)[6];
  let p: any;
  ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = {
    className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1iyjqo2 sand-euugli sand-uxw1ft"
  }, (e as any)[7] = p) : p = (e as any)[7];
  let g: any;
  ((e as any)[8] as any) !== (n as any) || ((e as any)[9] as any) !== (a as any) ? (g = ((l as any).jsx as any)(En, {
    id: a,
    level: "body2",
    style: (Oe as any).rowTitle,
    children: n
  }), (e as any)[8] = n, (e as any)[9] = a, (e as any)[10] = g) : g = (e as any)[10];
  let h: any;
  ((e as any)[11] as any) !== (t as any) ? (h = (t as any) == (null as any) || ((t as any).length as any) === (0 as any) ? null : ((l as any).jsx as any)(En, {
    level: "body2",
    style: (Oe as any).rowReason,
    children: t
  }), (e as any)[11] = t, (e as any)[12] = h) : h = (e as any)[12];
  let y: any;
  ((e as any)[13] as any) !== (g as any) || ((e as any)[14] as any) !== (h as any) ? (y = ((l as any).jsxs as any)("span", {
    ...p,
    children: [g, h]
  }), (e as any)[13] = g, (e as any)[14] = h, (e as any)[15] = y) : y = (e as any)[15];
  let b: any;
  ((e as any)[16] as any) !== (o as any) || ((e as any)[17] as any) !== (u as any) || ((e as any)[18] as any) !== (f as any) || ((e as any)[19] as any) !== (y as any) ? (b = ((l as any).jsxs as any)("button", {
    "aria-label": u,
    onClick: o,
    type: "button",
    ...c,
    children: [f, y]
  }), (e as any)[16] = o, (e as any)[17] = u, (e as any)[18] = f, (e as any)[19] = y, (e as any)[20] = b) : b = (e as any)[20];
  let j: any;
  ((e as any)[21] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = {
    className: "sand-78zum5 sand-6s0dn4 sand-2lah0s sand-vc5jky sand-f7dkkf"
  }, (e as any)[21] = j) : j = (e as any)[21];
  let v: any;
  ((e as any)[22] as any) !== (r as any) ? (v = ((l as any).jsx as any)("span", {
    ...j,
    children: r
  }), (e as any)[22] = r, (e as any)[23] = v) : v = (e as any)[23];
  let x: any;
  return ((e as any)[24] as any) !== (v as any) || ((e as any)[25] as any) !== (b as any) ? (x = ((l as any).jsxs as any)((l as any).Fragment, {
    children: [b, v]
  }), (e as any)[24] = v, (e as any)[25] = b, (e as any)[26] = x) : x = (e as any)[26], x;
}
function Hn(this: any, s: any, e: any, n: any): any {
  return (e as any) == (null as any) ? ((l as any).jsx as any)("li", {
    "aria-hidden": "true",
    role: "presentation",
    ...(ue as any)(((Oe as any).windowRow as any)(jn))
  }, s) : ((l as any).jsx as any)("li", {
    "aria-labelledby": (e as any).titleId,
    "aria-posinset": ((e as any).index as any) + (1 as any),
    "aria-setsize": (e as any).count,
    onBlur: (e as any).onBlur,
    onFocus: (e as any).onFocus,
    ...(ue as any)((Oe as any).row, ((Oe as any).windowRow as any)(jn)),
    children: n
  }, s);
}
function Pn(this: any, s: any): any {
  (Pn as any).d = 1035;
  const e: any = ((Z as any).c as any)(15),
    {
      sectionTitle: n,
      listLabel: t,
      titleRef: i,
      children: r
    }: any = s,
    a: any = ((O as any).useId as any)();
  let o: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = (ue as any)((Yn as any).label, (Oe as any).sectionTitle), (e as any)[0] = o) : o = (e as any)[0];
  let d: any;
  ((e as any)[1] as any) !== (n as any) || ((e as any)[2] as any) !== (a as any) || ((e as any)[3] as any) !== (i as any) ? (d = ((l as any).jsx as any)("div", {
    id: a,
    ref: i,
    ...o,
    children: n
  }), (e as any)[1] = n, (e as any)[2] = a, (e as any)[3] = i, (e as any)[4] = d) : d = (e as any)[4];
  let u: any;
  ((e as any)[5] as any) !== (t as any) || ((e as any)[6] as any) !== (a as any) ? (u = (t as any) == (null as any) ? {
    "aria-labelledby": a
  } : {
    "aria-label": t
  }, (e as any)[5] = t, (e as any)[6] = a, (e as any)[7] = u) : u = (e as any)[7];
  let c: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = {
    className: "sand-78zum5 sand-dt5ytf sand-1ghz6dp sand-1717udv sand-e8uvvx"
  }, (e as any)[8] = c) : c = (e as any)[8];
  let m: any;
  ((e as any)[9] as any) !== (r as any) || ((e as any)[10] as any) !== (u as any) ? (m = ((l as any).jsx as any)("ul", {
    ...u,
    ...c,
    children: r
  }), (e as any)[9] = r, (e as any)[10] = u, (e as any)[11] = m) : m = (e as any)[11];
  let f: any;
  return ((e as any)[12] as any) !== (d as any) || ((e as any)[13] as any) !== (m as any) ? (f = ((l as any).jsxs as any)((l as any).Fragment, {
    children: [d, m]
  }), (e as any)[12] = d, (e as any)[13] = m, (e as any)[14] = f) : f = (e as any)[14], f;
}
function $n(this: any, s: any): any {
  ($n as any).d = 1034;
  const e: any = ((Z as any).c as any)(19),
    {
      plugin: n,
      entry: t,
      disabled: i,
      titleId: r,
      autoFocusToggle: a,
      onOpen: o,
      onRemove: d
    }: any = s,
    u: any = (a as any) === (void 0 as any) ? !1 : a;
  let c: any, m: any, f: any, p: any;
  ((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (n as any) ? (p = (Le as any)(n, t), c = tn, m = (n as any).description || t?.description || null, f = (Os as any)({
    entry: t,
    title: p,
    name: (n as any).name,
    logoUrl: (n as any).logoUrl
  }), (e as any)[0] = t, (e as any)[1] = n, (e as any)[2] = c, (e as any)[3] = m, (e as any)[4] = f, (e as any)[5] = p) : (c = (e as any)[2], m = (e as any)[3], f = (e as any)[4], p = (e as any)[5]);
  let g: any;
  ((e as any)[6] as any) !== (u as any) || ((e as any)[7] as any) !== (i as any) || ((e as any)[8] as any) !== (d as any) || ((e as any)[9] as any) !== (p as any) ? (g = ((l as any).jsx as any)(Xe, {
    autoFocus: u,
    disabled: i,
    name: p,
    onRemove: d
  }), (e as any)[6] = u, (e as any)[7] = i, (e as any)[8] = d, (e as any)[9] = p, (e as any)[10] = g) : g = (e as any)[10];
  let h: any;
  return ((e as any)[11] as any) !== (c as any) || ((e as any)[12] as any) !== (o as any) || ((e as any)[13] as any) !== (m as any) || ((e as any)[14] as any) !== (f as any) || ((e as any)[15] as any) !== (g as any) || ((e as any)[16] as any) !== (p as any) || ((e as any)[17] as any) !== (r as any) ? (h = ((l as any).jsx as any)(c, {
    description: m,
    icon: f,
    name: p,
    onOpen: o,
    titleId: r,
    trailing: g
  }), (e as any)[11] = c, (e as any)[12] = o, (e as any)[13] = m, (e as any)[14] = f, (e as any)[15] = g, (e as any)[16] = p, (e as any)[17] = r, (e as any)[18] = h) : h = (e as any)[18], h;
}
function Rs(this: any, s: any): any {
  (Rs as any).d = 1033;
  const e: any = ((Z as any).c as any)(7),
    n: any = ((O as any).useId as any)();
  let t: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = {
    className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-9f619 sand-1wxaq2x sand-1y1aw1k sand-wib8y2 sand-mzvs34 sand-f159sx sand-1qmwy7c sand-jbqb8w sand-aalx5g"
  }, (e as any)[0] = t) : t = (e as any)[0];
  let i: any;
  ((e as any)[1] as any) !== (s as any) || ((e as any)[2] as any) !== (n as any) ? (i = ((l as any).jsx as any)($n, {
    ...s,
    titleId: n
  }), (e as any)[1] = s, (e as any)[2] = n, (e as any)[3] = i) : i = (e as any)[3];
  let r: any;
  return ((e as any)[4] as any) !== (i as any) || ((e as any)[5] as any) !== (n as any) ? (r = ((l as any).jsx as any)("li", {
    "aria-labelledby": n,
    ...t,
    children: i
  }), (e as any)[4] = i, (e as any)[5] = n, (e as any)[6] = r) : r = (e as any)[6], r;
}
function As(this: any, s: any): any {
  (As as any).d = 1032;
  const e: any = ((Z as any).c as any)(15),
    {
      entry: n,
      disabled: t,
      titleId: i,
      autoFocusToggle: r,
      onAdd: a,
      onOpen: o
    }: any = s,
    d: any = (r as any) === (void 0 as any) ? !1 : r,
    u: any = (n as any).description || null;
  let c: any;
  ((e as any)[0] as any) !== (n as any) ? (c = (Os as any)({
    entry: n,
    title: (n as any).displayName
  }), (e as any)[0] = n, (e as any)[1] = c) : c = (e as any)[1];
  const m: any = d && !t,
    f: any = d && t ? "locked" : "ready";
  let p: any;
  ((e as any)[2] as any) !== (t as any) || ((e as any)[3] as any) !== ((n as any).displayName as any) || ((e as any)[4] as any) !== (a as any) || ((e as any)[5] as any) !== (m as any) || ((e as any)[6] as any) !== (f as any) ? (p = ((l as any).jsx as any)(es, {
    autoFocus: m,
    disabled: t,
    name: (n as any).displayName,
    onAdd: a
  }, f), (e as any)[2] = t, (e as any)[3] = (n as any).displayName, (e as any)[4] = a, (e as any)[5] = m, (e as any)[6] = f, (e as any)[7] = p) : p = (e as any)[7];
  let g: any;
  return ((e as any)[8] as any) !== ((n as any).displayName as any) || ((e as any)[9] as any) !== (o as any) || ((e as any)[10] as any) !== (u as any) || ((e as any)[11] as any) !== (c as any) || ((e as any)[12] as any) !== (p as any) || ((e as any)[13] as any) !== (i as any) ? (g = ((l as any).jsx as any)(tn, {
    description: u,
    icon: c,
    name: (n as any).displayName,
    onOpen: o,
    titleId: i,
    trailing: p
  }), (e as any)[8] = (n as any).displayName, (e as any)[9] = o, (e as any)[10] = u, (e as any)[11] = c, (e as any)[12] = p, (e as any)[13] = i, (e as any)[14] = g) : g = (e as any)[14], g;
}
function qs(this: any, s: any): any {
  (qs as any).d = 1037;
  const e: any = ((Z as any).c as any)(16),
    {
      name: n,
      description: t,
      onOpen: i
    }: any = s,
    r: any = ((O as any).useId as any)();
  let a: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = {
    className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-9f619 sand-1wxaq2x sand-1y1aw1k sand-wib8y2 sand-mzvs34 sand-f159sx sand-1qmwy7c sand-jbqb8w sand-aalx5g"
  }, (e as any)[0] = a) : a = (e as any)[0];
  let o: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = ((l as any).jsx as any)(Ve, {
    name: "key",
    size: "sm"
  }), (e as any)[1] = o) : o = (e as any)[1];
  let d: any;
  ((e as any)[2] as any) !== (n as any) ? (d = ((l as any).jsx as any)("span", {
    "aria-label": n,
    role: "img",
    children: o
  }), (e as any)[2] = n, (e as any)[3] = d) : d = (e as any)[3];
  let u: any;
  ((e as any)[4] as any) !== (n as any) ? (u = ((l as any).jsx as any)(Xe, {
    name: n,
    readOnly: !0
  }), (e as any)[4] = n, (e as any)[5] = u) : u = (e as any)[5];
  let c: any;
  ((e as any)[6] as any) !== (t as any) || ((e as any)[7] as any) !== (n as any) || ((e as any)[8] as any) !== (i as any) || ((e as any)[9] as any) !== (d as any) || ((e as any)[10] as any) !== (u as any) || ((e as any)[11] as any) !== (r as any) ? (c = ((l as any).jsx as any)(tn, {
    description: t,
    icon: d,
    name: n,
    onOpen: i,
    titleId: r,
    trailing: u
  }), (e as any)[6] = t, (e as any)[7] = n, (e as any)[8] = i, (e as any)[9] = d, (e as any)[10] = u, (e as any)[11] = r, (e as any)[12] = c) : c = (e as any)[12];
  let m: any;
  return ((e as any)[13] as any) !== (c as any) || ((e as any)[14] as any) !== (r as any) ? (m = ((l as any).jsx as any)("li", {
    "aria-labelledby": r,
    ...a,
    children: c
  }), (e as any)[13] = c, (e as any)[14] = r, (e as any)[15] = m) : m = (e as any)[15], m;
}
const de: any = pt,
  He: any = {
    header: {
      kGO01o: "sand-wib8y2",
      $$css: !0
    },
    body: {
      kOIVth: "sand-1665zp3",
      $$css: !0
    },
    chrome: {
      k1xSpc: "sand-78zum5",
      kXwgrk: "sand-dt5ytf",
      kmuXW: "sand-2lah0s",
      kOIVth: "sand-ou54vl",
      $$css: !0
    },
    sortTrigger: {
      k1xSpc: "sand-3nfvp2",
      kGNEyG: "sand-6s0dn4",
      kOIVth: "sand-195vfkc",
      kmVPX3: "sand-1717udv",
      ksu8eU: "sand-ng3xce",
      kaIpWk: "sand-12oqio5",
      kWkggS: "sand-jbqb8w",
      kMwMTN: "sand-1o0liin",
      kMv6JI: "sand-jb2p0i",
      kGuDYH: "sand-1wm8ruf",
      kLWn49: "sand-1d3mw78",
      kkrTdU: "sand-1ypdohk",
      $$css: !0
    }
  },
  Ue: any = (ue as any)((Yn as any).body2, (de as any).empty);
function da(this: any, s: any): any {
  const e: any = (Xn as any)();
  return (([...(ut as any)(((s as any).listing as any).plugins)] as any).sort as any)((n: any, t: any): any => {
    const i: any = (Ke as any)(n, (s as any).catalog),
      r: any = (Ke as any)(t, (s as any).catalog),
      a: any = (Ge as any)((Le as any)(n, i), e),
      o: any = (Ge as any)((Le as any)(t, r), e);
    return ((a as any).localeCompare as any)(o, e);
  });
}
function Bs(this: any, s: any): any {
  (Bs as any).d = 1039;
  const e: any = ((Z as any).c as any)(36),
    {
      sort: n,
      onChange: t
    }: any = s,
    {
      _: i
    }: any = (me as any)();
  let r: any;
  ((e as any)[0] as any) !== (i as any) || ((e as any)[1] as any) !== (n as any) ? (r = (i as any)((n as any) === ("popular" as any) ? {
    id: "gL/sdV"
  } : {
    id: "315BhT"
  }), (e as any)[0] = i, (e as any)[1] = n, (e as any)[2] = r) : r = (e as any)[2];
  const a: any = r;
  let o: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = (ue as any)((st as any).controlRing, (He as any).sortTrigger), (e as any)[3] = o) : o = (e as any)[3];
  let d: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = ((l as any).jsx as any)(Ve, {
    "aria-hidden": !0,
    name: "chevron-down",
    size: "xs"
  }), (e as any)[4] = d) : d = (e as any)[4];
  let u: any;
  ((e as any)[5] as any) !== (a as any) ? (u = ((l as any).jsx as any)((Ee as any).Trigger, {
    children: ((l as any).jsxs as any)("button", {
      type: "button",
      ...o,
      children: [a, d]
    })
  }), (e as any)[5] = a, (e as any)[6] = u) : u = (e as any)[6];
  let c: any;
  ((e as any)[7] as any) !== (i as any) ? (c = (i as any)({
    id: "6/kA7o"
  }), (e as any)[7] = i, (e as any)[8] = c) : c = (e as any)[8];
  let m: any;
  ((e as any)[9] as any) !== (t as any) ? (m = (): any => (t as any)("alphabetical"), (e as any)[9] = t, (e as any)[10] = m) : m = (e as any)[10];
  const f: any = (n as any) === ("alphabetical" as any);
  let p: any;
  ((e as any)[11] as any) !== (n as any) ? (p = (n as any) === ("alphabetical" as any) ? ((l as any).jsx as any)(Ve, {
    name: "check",
    size: "sm"
  }) : null, (e as any)[11] = n, (e as any)[12] = p) : p = (e as any)[12];
  let g: any;
  ((e as any)[13] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = ((l as any).jsx as any)(w, {
    id: "315BhT"
  }), (e as any)[13] = g) : g = (e as any)[13];
  let h: any;
  ((e as any)[14] as any) !== (m as any) || ((e as any)[15] as any) !== (f as any) || ((e as any)[16] as any) !== (p as any) ? (h = ((l as any).jsx as any)((Ee as any).Item, {
    onSelect: m,
    radioChecked: f,
    trailing: p,
    children: g
  }), (e as any)[14] = m, (e as any)[15] = f, (e as any)[16] = p, (e as any)[17] = h) : h = (e as any)[17];
  let y: any;
  ((e as any)[18] as any) !== (t as any) ? (y = (): any => (t as any)("popular"), (e as any)[18] = t, (e as any)[19] = y) : y = (e as any)[19];
  const b: any = (n as any) === ("popular" as any);
  let j: any;
  ((e as any)[20] as any) !== (n as any) ? (j = (n as any) === ("popular" as any) ? ((l as any).jsx as any)(Ve, {
    name: "check",
    size: "sm"
  }) : null, (e as any)[20] = n, (e as any)[21] = j) : j = (e as any)[21];
  let v: any;
  ((e as any)[22] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = ((l as any).jsx as any)(w, {
    id: "gL/sdV"
  }), (e as any)[22] = v) : v = (e as any)[22];
  let x: any;
  ((e as any)[23] as any) !== (y as any) || ((e as any)[24] as any) !== (b as any) || ((e as any)[25] as any) !== (j as any) ? (x = ((l as any).jsx as any)((Ee as any).Item, {
    onSelect: y,
    radioChecked: b,
    trailing: j,
    children: v
  }), (e as any)[23] = y, (e as any)[24] = b, (e as any)[25] = j, (e as any)[26] = x) : x = (e as any)[26];
  let _: any;
  ((e as any)[27] as any) !== (h as any) || ((e as any)[28] as any) !== (x as any) ? (_ = ((l as any).jsxs as any)((Ee as any).Section, {
    children: [h, x]
  }), (e as any)[27] = h, (e as any)[28] = x, (e as any)[29] = _) : _ = (e as any)[29];
  let k: any;
  ((e as any)[30] as any) !== (_ as any) || ((e as any)[31] as any) !== (c as any) ? (k = ((l as any).jsx as any)((Ee as any).Content, {
    "aria-label": c,
    minWidth: 180,
    size: "md",
    children: _
  }), (e as any)[30] = _, (e as any)[31] = c, (e as any)[32] = k) : k = (e as any)[32];
  let S: any;
  return ((e as any)[33] as any) !== (k as any) || ((e as any)[34] as any) !== (u as any) ? (S = ((l as any).jsxs as any)(Ee, {
    children: [u, k]
  }), (e as any)[33] = k, (e as any)[34] = u, (e as any)[35] = S) : S = (e as any)[35], S;
}
function Un(this: any, s: any): any {
  return ((s as any).kind as any) === ("installed" as any) ? `installed:${((s as any).plugin as any).pluginId}` : `available:${((s as any).entry as any).id}`;
}
function ua(this: any, s: any): any {
  return ((s as any).flatMap as any)((e: any): any => {
    const n: any = ((e as any).kind as any) === ("installed" as any) ? (ca as any)((e as any).plugin, (e as any).entry) : ((e as any).entry as any).iconUrl;
    return (n as any) == (null as any) ? [] : [n];
  });
}
function ma(this: any, {
  rowWindow: s,
  rowCount: e,
  focusedIndex: n,
  refocusIndex: t,
  heldRows: i
}: any): any {
  const r: any = new (Set as any)(i);
  for (let o: any = (s as any).start; (o as any) < ((s as any).end as any); o += 1) ((r as any).add as any)(o);
  const a: any = [0, (e as any) - (1 as any), (n as any) - (1 as any), n, (n as any) + (1 as any), t];
  for (const o of a) (o as any) >= (0 as any) && (o as any) < (e as any) && ((r as any).add as any)(o);
  return r;
}
function Ls(this: any, s: any): any {
  (Ls as any).d = 1040;
  const e: any = ((Z as any).c as any)(20),
    {
      access: n,
      query: t,
      sort: i,
      popularity: r,
      scrollEl: a,
      onOpenPlugin: o,
      onOpenCatalog: d,
      onSortChange: u
    }: any = s,
    {
      _: c
    }: any = (me as any)(),
    m: any = ((O as any).useId as any)(),
    [f, p]: any = ((O as any).useState as any)(null),
    [g, h]: any = ((O as any).useState as any)(null),
    y: any = (On as any)(n, "", i, r),
    b: any = ((((t as any).trim as any)() as any).length as any) === (0 as any) ? y : (On as any)(n, t, i, r),
    [j, v]: any = ((O as any).useState as any)(null),
    x: any = (j?.query as any) === (t as any) ? (j as any).entryId : null,
    _: any = (Qs as any)(),
    k: any = (ua as any)(y);
  (et as any)((): any => (_ as any)(k));
  const S: any = (nt as any)({
      scrollEl: a,
      leadingEl: f,
      rowCount: (b as any).length,
      rowPitchPx: jn,
      leadingOffsetPx: ht
    }),
    T: any = ((b as any).map as any)(Un),
    I: any = ((T as any).join as any)(`
`),
    C: any = `${(S as any).start}:${(S as any).end}`,
    P: any = ((T as any).slice as any)((S as any).start, (S as any).end),
    [N, E]: any = ((O as any).useState as any)({
      listSignature: I,
      windowRange: C,
      windowKeys: P
    });
  let D: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (D = [], (e as any)[0] = D) : D = (e as any)[0];
  const [A, U]: any = ((O as any).useState as any)(D);
  ((N as any).listSignature as any) !== (I as any) ? ((U as any)((N as any).windowKeys), (E as any)({
    listSignature: I,
    windowRange: C,
    windowKeys: P
  })) : ((N as any).windowRange as any) !== (C as any) && (((A as any).length as any) > (0 as any) && (U as any)([]), (E as any)({
    listSignature: I,
    windowRange: C,
    windowKeys: P
  }));
  let B: any;
  ((e as any)[1] as any) !== (A as any) ? (B = new (Set as any)(A), (e as any)[1] = A, (e as any)[2] = B) : B = (e as any)[2];
  const q: any = B;
  let L: any;
  ((e as any)[3] as any) !== (q as any) ? (L = (R: any, K: any): any => ((q as any).has as any)(R) ? [K] : [], (e as any)[3] = q, (e as any)[4] = L) : L = (e as any)[4];
  const V: any = (ma as any)({
    rowWindow: S,
    rowCount: (b as any).length,
    focusedIndex: (g as any) == (null as any) ? -1 : ((T as any).indexOf as any)(g),
    refocusIndex: (x as any) == (null as any) ? -1 : ((b as any).findIndex as any)((R: any): any => ((R as any).entry?.id as any) === (x as any)),
    heldRows: ((T as any).flatMap as any)(L)
  });
  let $: any;
  ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? ($ = (R: any, K: any): any => {
    const te: any = (K as any).relatedTarget;
    !(te instanceof Node) || (((K as any).currentTarget as any).contains as any)(te) || (h as any)((ee: any): any => (ee as any) === (R as any) ? null : ee);
  }, (e as any)[5] = $) : $ = (e as any)[5];
  const F: any = $,
    G: any = (n as any).isPending || ((n as any).load as any) !== ("ready" as any),
    H: any = ((n as any).load as any) === ("loading" as any) && ((b as any).length as any) === (0 as any);
  let se: any;
  ((e as any)[6] as any) !== (t as any) ? (se = ((t as any).trim as any)(), (e as any)[6] = t, (e as any)[7] = se) : se = (e as any)[7];
  const W: any = se,
    ae: any = !H && ((b as any).length as any) === (0 as any) && (W as any) === ("" as any),
    ie: any = !H && ((b as any).length as any) === (0 as any) && ((W as any).length as any) > (0 as any);
  let X: any;
  ((e as any)[8] as any) !== (H as any) ? (X = H ? ((l as any).jsx as any)("p", {
    ...Ue,
    role: "status",
    children: ((l as any).jsx as any)(w, {
      id: "yQE2r9"
    })
  }) : null, (e as any)[8] = H, (e as any)[9] = X) : X = (e as any)[9];
  const le: any = ((b as any).length as any) === (0 as any) ? null : ((l as any).jsx as any)(Pn, {
    listLabel: (c as any)({
      id: "G+I1gE"
    }),
    sectionTitle: ((l as any).jsx as any)(Bs, {
      onChange: u,
      sort: i
    }),
    titleRef: p,
    children: ((b as any).map as any)((R: any, K: any): any => {
      const te: any = (T as any)[K] ?? (Un as any)(R);
      if (!((V as any).has as any)(K)) return (Hn as any)(te, null, null);
      const ee: any = {
        index: K,
        count: (b as any).length,
        titleId: `${m}${te}`,
        onFocus: (): any => (h as any)(te),
        onBlur: (re: any): any => (F as any)(te, re)
      };
      return (Hn as any)(te, ee, ((R as any).kind as any) === ("installed" as any) ? ((l as any).jsx as any)($n, {
        autoFocusToggle: ((R as any).entry as any) != (null as any) && (((R as any).entry as any).id as any) === (x as any),
        disabled: G,
        entry: (R as any).entry,
        onOpen: (): any => (o as any)((R as any).plugin, "list"),
        onRemove: (): any => {
          ((R as any).entry as any) != (null as any) && (v as any)({
            entryId: ((R as any).entry as any).id,
            query: t
          }), ((n as any).remove as any)(((R as any).plugin as any).pluginId);
        },
        plugin: (R as any).plugin,
        titleId: (ee as any).titleId
      }) : ((l as any).jsx as any)(As, {
        autoFocusToggle: (((R as any).entry as any).id as any) === (x as any),
        disabled: G,
        entry: (R as any).entry,
        onAdd: (): any => {
          (v as any)({
            entryId: ((R as any).entry as any).id,
            query: t
          }), ((n as any).add as any)((R as any).entry);
        },
        onOpen: (): any => (d as any)((R as any).entry),
        titleId: (ee as any).titleId
      }));
    })
  });
  let Q: any;
  ((e as any)[10] as any) !== (ae as any) ? (Q = ae ? ((l as any).jsx as any)("p", {
    ...Ue,
    children: ((l as any).jsx as any)(w, {
      id: "IxPgq3"
    })
  }) : null, (e as any)[10] = ae, (e as any)[11] = Q) : Q = (e as any)[11];
  let M: any;
  ((e as any)[12] as any) !== (ie as any) || ((e as any)[13] as any) !== (W as any) ? (M = ie ? ((l as any).jsx as any)("p", {
    ...Ue,
    children: ((l as any).jsx as any)(w, {
      id: "mLyVIn",
      values: {
        trimmed: W
      }
    })
  }) : null, (e as any)[12] = ie, (e as any)[13] = W, (e as any)[14] = M) : M = (e as any)[14];
  let z: any;
  return ((e as any)[15] as any) !== (X as any) || ((e as any)[16] as any) !== (le as any) || ((e as any)[17] as any) !== (Q as any) || ((e as any)[18] as any) !== (M as any) ? (z = ((l as any).jsxs as any)((l as any).Fragment, {
    children: [X, le, Q, M]
  }), (e as any)[15] = X, (e as any)[16] = le, (e as any)[17] = Q, (e as any)[18] = M, (e as any)[19] = z) : z = (e as any)[19], z;
}
function Fs(this: any, s: any): any {
  (Fs as any).d = 1038;
  const e: any = ((Z as any).c as any)(12),
    {
      access: n,
      secrets: t,
      title: i,
      onOpenPlugin: r,
      onOpenSecret: a
    }: any = s;
  let o: any, d: any;
  if (((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (r as any) || ((e as any)[2] as any) !== (a as any) || ((e as any)[3] as any) !== (t as any) || ((e as any)[4] as any) !== (i as any)) {
    const c: any = (Xn as any)(),
      m: any = (da as any)(n),
      f: any = (([...t] as any).sort as any)((y: any, b: any): any => (((Ge as any)((y as any).name, c) as any).localeCompare as any)((Ge as any)((b as any).name, c), c)),
      p: any = ((n as any).load as any) === ("loading" as any) && ((m as any).length as any) === (0 as any) && ((t as any).length as any) === (0 as any),
      g: any = ((m as any).length as any) > (0 as any) || ((t as any).length as any) > (0 as any),
      h: any = (n as any).isPending || ((n as any).load as any) !== ("ready" as any);
    ((e as any)[7] as any) !== (p as any) ? (o = p ? ((l as any).jsx as any)("p", {
      ...Ue,
      role: "status",
      children: ((l as any).jsx as any)(w, {
        id: "yQE2r9"
      })
    }) : null, (e as any)[7] = p, (e as any)[8] = o) : o = (e as any)[8], d = g ? ((l as any).jsxs as any)(Pn, {
      sectionTitle: i,
      children: [((m as any).map as any)((y: any): any => ((l as any).jsx as any)(Rs, {
        disabled: h,
        entry: (Ke as any)(y, (n as any).catalog),
        onOpen: (): any => (r as any)(y, "connected"),
        onRemove: (): any => ((n as any).remove as any)((y as any).pluginId),
        plugin: y
      }, (y as any).pluginId)), ((f as any).map as any)((y: any): any => ((l as any).jsx as any)(qs, {
        description: (y as any).description || null,
        name: (y as any).name,
        onOpen: (): any => (a as any)(y)
      }, (y as any).name))]
    }) : null, (e as any)[0] = n, (e as any)[1] = r, (e as any)[2] = a, (e as any)[3] = t, (e as any)[4] = i, (e as any)[5] = o, (e as any)[6] = d;
  } else o = (e as any)[5], d = (e as any)[6];
  let u: any;
  return ((e as any)[9] as any) !== (o as any) || ((e as any)[10] as any) !== (d as any) ? (u = ((l as any).jsxs as any)((l as any).Fragment, {
    children: [o, d]
  }), (e as any)[9] = o, (e as any)[10] = d, (e as any)[11] = u) : u = (e as any)[11], u;
}
function fa(this: any, s: any, e: any): any {
  switch ((s as any).kind) {
    case "list":
      return null;
    case "connected":
      return {
        onBack: (): any => (e as any)({
          kind: "list"
        }),
        label: ((l as any).jsx as any)(w, {
          id: "iH8pgl"
        })
      };
    case "custom":
      return {
        onBack: (): any => (e as any)({
          kind: "list"
        }),
        label: ((l as any).jsx as any)(w, {
          id: "G+I1gE"
        })
      };
    case "plugin":
    case "catalog":
      return {
        onBack: (): any => (e as any)({
          kind: (s as any).from
        }),
        label: ((l as any).jsx as any)(w, {
          id: "iH8pgl"
        })
      };
    case "plugin-skills":
      return {
        onBack: (): any => (e as any)({
          kind: "plugin",
          pluginId: ((s as any).plugin as any).pluginId,
          from: (s as any).from
        }),
        label: ((l as any).jsx as any)(w, {
          id: "iH8pgl"
        })
      };
    case "catalog-skills":
      return {
        onBack: (): any => (e as any)({
          kind: "catalog",
          entryId: ((s as any).entry as any).id,
          from: (s as any).from
        }),
        label: ((l as any).jsx as any)(w, {
          id: "iH8pgl"
        })
      };
    case "secret":
      return {
        onBack: (): any => (e as any)({
          kind: "connected"
        }),
        label: ((l as any).jsx as any)(w, {
          id: "iH8pgl"
        })
      };
  }
}
function Ms(this: any, s: any): any {
  (Ms as any).d = 1041;
  const e: any = ((Z as any).c as any)(3),
    {
      write: n
    }: any = s,
    {
      name: t
    }: any = n;
  let i: any;
  return ((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== ((n as any).isRemoval as any) ? (i = (n as any).isRemoval ? ((l as any).jsx as any)(w, {
    id: "SY7f0i",
    values: {
      name: t
    }
  }) : ((l as any).jsx as any)(w, {
    id: "VmsMOp",
    values: {
      name: t
    }
  }), (e as any)[0] = t, (e as any)[1] = (n as any).isRemoval, (e as any)[2] = i) : i = (e as any)[2], i;
}
function pa(this: any, s: any): any {
  (pa as any).d = 1042;
  const e: any = ((Z as any).c as any)(104),
    {
      access: n,
      installedSecrets: t,
      secretsSection: i,
      initialPane: r,
      onClose: a
    }: any = s,
    o: any = (t as any) === (void 0 as any) ? null : t,
    d: any = (i as any) === (void 0 as any) ? null : i,
    {
      _: u
    }: any = (me as any)(),
    [c]: any = ((O as any).useState as any)(r);
  let m: any;
  ((e as any)[0] as any) !== (c as any) ? (m = c ?? {
    kind: "list"
  }, (e as any)[0] = c, (e as any)[1] = m) : m = (e as any)[1];
  const [f, p]: any = ((O as any).useState as any)(m),
    [g, h]: any = ((O as any).useState as any)(""),
    [y, b]: any = ((O as any).useState as any)("popular"),
    [j, v]: any = ((O as any).useState as any)(null),
    [x, _]: any = ((O as any).useState as any)(null),
    [k, S]: any = ((O as any).useState as any)(null),
    {
      counts: T
    }: any = (Xs as any)();
  let I: any, C: any, P: any, N: any, E: any, D: any, A: any;
  if (((e as any)[2] as any) !== (u as any) || ((e as any)[3] as any) !== ((n as any).catalog as any) || ((e as any)[4] as any) !== (((n as any).listing as any).plugins as any) || ((e as any)[5] as any) !== (o?.secrets as any) || ((e as any)[6] as any) !== (c as any) || ((e as any)[7] as any) !== (f as any)) {
    const ce: any = (((o?.secrets ?? []) as any).map as any)(ha);
    A = (ot as any)(f, ((n as any).listing as any).plugins, (n as any).catalog, ce);
    const we: any = (ct as any)(((n as any).listing as any).plugins, o?.secrets.length ?? 0);
    E = ((A as any).kind as any) === ("list" as any), P = ((A as any).kind as any) === ("connected" as any), N = ((A as any).kind as any) === ("custom" as any), C = E || P || N;
    const ln: any = (c as any) != (null as any) && (((JSON as any).stringify as any)(f) as any) === (((JSON as any).stringify as any)(c) as any);
    I = (u as any)({
      id: "nA+FBJ",
      values: {
        connectedCount: we
      }
    }), D = ln ? null : (fa as any)(A, p), (e as any)[2] = u, (e as any)[3] = (n as any).catalog, (e as any)[4] = ((n as any).listing as any).plugins, (e as any)[5] = o?.secrets, (e as any)[6] = c, (e as any)[7] = f, (e as any)[8] = I, (e as any)[9] = C, (e as any)[10] = P, (e as any)[11] = N, (e as any)[12] = E, (e as any)[13] = D, (e as any)[14] = A;
  } else I = (e as any)[8], C = (e as any)[9], P = (e as any)[10], N = (e as any)[11], E = (e as any)[12], D = (e as any)[13], A = (e as any)[14];
  const U: any = D,
    B: any = ((n as any).load as any) !== ("ready" as any);
  let q: any;
  ((e as any)[15] as any) !== (n as any) || ((e as any)[16] as any) !== (o as any) ? (q = (o?.needsRetry as any) === (!0 as any) ? {
    ...n,
    needsRetry: !0,
    isPending: (n as any).isPending || (o as any).isPending,
    retry: (): any => {
      (n as any).needsRetry && ((n as any).retry as any)(), ((o as any).retry as any)();
    }
  } : n, (e as any)[15] = n, (e as any)[16] = o, (e as any)[17] = q) : q = (e as any)[17];
  const L: any = q;
  let V: any, $: any;
  ((e as any)[18] as any) !== (n as any) || ((e as any)[19] as any) !== (f as any) ? (V = (ce: any): any => {
    (_ as any)({
      name: (ce as any).displayName,
      isRemoval: !1,
      onPane: f
    }), ((n as any).add as any)(ce);
  }, $ = (ce: any): any => {
    const we: any = ((((n as any).listing as any).plugins as any).find as any)((Zs: any): any => ((Zs as any).pluginId as any) === (ce as any)),
      ln: any = (we as any) === (void 0 as any) ? void 0 : (Ke as any)(we, (n as any).catalog);
    (_ as any)((we as any) === (void 0 as any) || (n as any).writeFailed ? null : {
      name: (Le as any)(we, ln),
      isRemoval: !0,
      onPane: f
    }), ((n as any).remove as any)(ce);
  }, (e as any)[18] = n, (e as any)[19] = f, (e as any)[20] = V, (e as any)[21] = $) : (V = (e as any)[20], $ = (e as any)[21]);
  let F: any;
  ((e as any)[22] as any) !== (n as any) || ((e as any)[23] as any) !== (V as any) || ((e as any)[24] as any) !== ($ as any) ? (F = {
    ...n,
    add: V,
    remove: $
  }, (e as any)[22] = n, (e as any)[23] = V, (e as any)[24] = $, (e as any)[25] = F) : F = (e as any)[25];
  const G: any = F;
  let H: any;
  ((e as any)[26] as any) !== (x as any) || ((e as any)[27] as any) !== (f as any) ? (H = (x?.onPane as any) === (f as any) ? ((l as any).jsx as any)(Ms, {
    write: x
  }) : null, (e as any)[26] = x, (e as any)[27] = f, (e as any)[28] = H) : H = (e as any)[28];
  let se: any;
  ((e as any)[29] as any) !== (L as any) || ((e as any)[30] as any) !== (H as any) ? (se = ((l as any).jsx as any)(Fe, {
    access: L,
    writeFailure: H
  }), (e as any)[29] = L, (e as any)[30] = H, (e as any)[31] = se) : se = (e as any)[31];
  const W: any = se;
  let ae: any;
  ((e as any)[32] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ae = (ce: any, we: any): any => {
    (p as any)({
      kind: "plugin",
      pluginId: (ce as any).pluginId,
      from: we
    });
  }, (e as any)[32] = ae) : ae = (e as any)[32];
  const ie: any = ae;
  let X: any;
  ((e as any)[33] as any) !== (f as any) || ((e as any)[34] as any) !== (U as any) ? (X = (U as any) == (null as any) ? null : ((l as any).jsx as any)(mt, {
    autoFocus: !0,
    icon: "chevron-left",
    onBack: (U as any).onBack,
    children: (U as any).label
  }, ((JSON as any).stringify as any)(f)), (e as any)[33] = f, (e as any)[34] = U, (e as any)[35] = X) : X = (e as any)[35];
  const le: any = X;
  let Q: any;
  ((e as any)[36] as any) !== (u as any) || ((e as any)[37] as any) !== (C as any) ? (Q = C ? void 0 : (u as any)({
    id: "v6CcJp"
  }), (e as any)[36] = u, (e as any)[37] = C, (e as any)[38] = Q) : Q = (e as any)[38];
  let M: any;
  ((e as any)[39] as any) !== (C as any) ? (M = C ? [(de as any).header, (He as any).header] : (de as any).headerCompact, (e as any)[39] = C, (e as any)[40] = M) : M = (e as any)[40];
  let z: any;
  ((e as any)[41] as any) !== (C as any) || ((e as any)[42] as any) !== (N as any) || ((e as any)[43] as any) !== (le as any) ? (z = C ? ((l as any).jsx as any)(gt, {
    description: N ? ((l as any).jsx as any)(w, {
      id: "WR80/F"
    }) : ((l as any).jsx as any)(w, {
      id: "+29mzl"
    }),
    paneBackButton: le,
    title: N ? ((l as any).jsx as any)(w, {
      id: "sNew++"
    }) : ((l as any).jsx as any)(w, {
      id: "v6CcJp"
    })
  }) : le, (e as any)[41] = C, (e as any)[42] = N, (e as any)[43] = le, (e as any)[44] = z) : z = (e as any)[44];
  let R: any;
  ((e as any)[45] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (R = ((l as any).jsx as any)((xe as any).CloseButton, {}), (e as any)[45] = R) : R = (e as any)[45];
  let K: any;
  ((e as any)[46] as any) !== (M as any) || ((e as any)[47] as any) !== (z as any) ? (K = ((l as any).jsxs as any)((xe as any).Header, {
    style: M,
    children: [z, R]
  }), (e as any)[46] = M, (e as any)[47] = z, (e as any)[48] = K) : K = (e as any)[48];
  const te: any = C && !E && (de as any).dialogBodySubpane;
  let ee: any;
  ((e as any)[49] as any) !== (te as any) ? (ee = [(de as any).dialogBody, te], (e as any)[49] = te, (e as any)[50] = ee) : ee = (e as any)[50];
  let re: any;
  ((e as any)[51] as any) !== (E as any) ? (re = (ue as any)((de as any).body, E && (He as any).body), (e as any)[51] = E, (e as any)[52] = re) : re = (e as any)[52];
  let he: any;
  ((e as any)[53] as any) !== (u as any) || ((e as any)[54] as any) !== (B as any) || ((e as any)[55] as any) !== (E as any) || ((e as any)[56] as any) !== (k as any) || ((e as any)[57] as any) !== (T as any) || ((e as any)[58] as any) !== (W as any) || ((e as any)[59] as any) !== (g as any) || ((e as any)[60] as any) !== (G as any) || ((e as any)[61] as any) !== (y as any) ? (he = E ? ((l as any).jsxs as any)((l as any).Fragment, {
    children: [((l as any).jsxs as any)("div", {
      ...(ue as any)((He as any).chrome, (Vn as any).inset),
      children: [((l as any).jsxs as any)("div", {
        ...(ue as any)((de as any).searchRow),
        children: [((l as any).jsx as any)("div", {
          ...(ue as any)((de as any).searchField),
          children: ((l as any).jsxs as any)(ne, {
            rootStyle: (de as any).searchRoot,
            shape: "pill",
            size: "lg",
            children: [((l as any).jsx as any)((ne as any).Icon, {
              name: "search"
            }), ((l as any).jsx as any)((ne as any).Input, {
              "aria-label": (u as any)({
                id: "S4qZX0"
              }),
              onChange: (ce: any): any => (h as any)(((ce as any).currentTarget as any).value),
              placeholder: (u as any)({
                id: "S4qZX0"
              }),
              value: g
            })]
          })
        }), ((l as any).jsx as any)(dt, {
          disabled: B,
          leadingIcon: "plus",
          onClick: (): any => (p as any)({
            kind: "custom"
          }),
          size: "md",
          type: "button",
          variant: "secondary",
          children: ((l as any).jsx as any)(w, {
            id: "sNew++"
          })
        })]
      }), W]
    }), ((l as any).jsx as any)("div", {
      ref: S,
      ...(ue as any)((de as any).scroller),
      children: ((l as any).jsx as any)(Ls, {
        access: G,
        onOpenCatalog: (ce: any): any => (p as any)({
          kind: "catalog",
          entryId: (ce as any).id,
          from: "list"
        }),
        onOpenPlugin: ie,
        onSortChange: b,
        popularity: T,
        query: g,
        scrollEl: k,
        sort: y
      })
    })]
  }) : null, (e as any)[53] = u, (e as any)[54] = B, (e as any)[55] = E, (e as any)[56] = k, (e as any)[57] = T, (e as any)[58] = W, (e as any)[59] = g, (e as any)[60] = G, (e as any)[61] = y, (e as any)[62] = he) : he = (e as any)[62];
  let ke: any;
  ((e as any)[63] as any) !== (I as any) || ((e as any)[64] as any) !== (o?.secrets as any) || ((e as any)[65] as any) !== (P as any) || ((e as any)[66] as any) !== (W as any) || ((e as any)[67] as any) !== (G as any) ? (ke = P ? ((l as any).jsxs as any)("div", {
    ...(ue as any)((de as any).subpane),
    children: [W, ((l as any).jsx as any)("div", {
      ...(ue as any)((de as any).scroller),
      children: ((l as any).jsx as any)(Fs, {
        access: G,
        onOpenPlugin: ie,
        onOpenSecret: (ce: any): any => (p as any)({
          kind: "secret",
          name: (ce as any).name
        }),
        secrets: o?.secrets ?? [],
        title: I
      })
    })]
  }) : null, (e as any)[63] = I, (e as any)[64] = o?.secrets, (e as any)[65] = P, (e as any)[66] = W, (e as any)[67] = G, (e as any)[68] = ke) : ke = (e as any)[68];
  let Ce: any;
  ((e as any)[69] as any) !== (n as any) || ((e as any)[70] as any) !== (j as any) || ((e as any)[71] as any) !== (o as any) || ((e as any)[72] as any) !== (N as any) || ((e as any)[73] as any) !== (d as any) || ((e as any)[74] as any) !== (A as any) ? (Ce = N ? ((l as any).jsx as any)("div", {
    ...(ue as any)((de as any).scroller, (Vn as any).inset),
    children: ((l as any).jsx as any)(yn, {
      access: n,
      installedSecrets: o,
      customDialogActionsHost: j,
      onPaneChange: p,
      secrets: d,
      view: A
    })
  }) : null, (e as any)[69] = n, (e as any)[70] = j, (e as any)[71] = o, (e as any)[72] = N, (e as any)[73] = d, (e as any)[74] = A, (e as any)[75] = Ce) : Ce = (e as any)[75];
  let Ie: any;
  ((e as any)[76] as any) !== (n as any) || ((e as any)[77] as any) !== (o as any) || ((e as any)[78] as any) !== (C as any) || ((e as any)[79] as any) !== (d as any) || ((e as any)[80] as any) !== (A as any) ? (Ie = C ? null : ((l as any).jsx as any)("div", {
    ...(ue as any)((de as any).scroller),
    children: ((l as any).jsx as any)(yn, {
      access: n,
      installedSecrets: o,
      onPaneChange: p,
      secrets: d,
      view: A
    })
  }), (e as any)[76] = n, (e as any)[77] = o, (e as any)[78] = C, (e as any)[79] = d, (e as any)[80] = A, (e as any)[81] = Ie) : Ie = (e as any)[81];
  let Te: any;
  ((e as any)[82] as any) !== (re as any) || ((e as any)[83] as any) !== (he as any) || ((e as any)[84] as any) !== (ke as any) || ((e as any)[85] as any) !== (Ce as any) || ((e as any)[86] as any) !== (Ie as any) ? (Te = ((l as any).jsxs as any)("div", {
    ...re,
    children: [he, ke, Ce, Ie]
  }), (e as any)[82] = re, (e as any)[83] = he, (e as any)[84] = ke, (e as any)[85] = Ce, (e as any)[86] = Ie, (e as any)[87] = Te) : Te = (e as any)[87];
  let Ne: any;
  ((e as any)[88] as any) !== (ee as any) || ((e as any)[89] as any) !== (Te as any) ? (Ne = ((l as any).jsx as any)((xe as any).Body, {
    style: ee,
    children: Te
  }), (e as any)[88] = ee, (e as any)[89] = Te, (e as any)[90] = Ne) : Ne = (e as any)[90];
  let Pe: any;
  ((e as any)[91] as any) !== (P as any) || ((e as any)[92] as any) !== (E as any) || ((e as any)[93] as any) !== (a as any) ? (Pe = E || P ? ((l as any).jsxs as any)((xe as any).ActionBar, {
    children: [((l as any).jsx as any)((xe as any).ActionSpacer, {}), ((l as any).jsx as any)((xe as any).Action, {
      onClick: a,
      variant: "primary",
      children: ((l as any).jsx as any)(w, {
        id: "DPfwMq"
      })
    })]
  }) : null, (e as any)[91] = P, (e as any)[92] = E, (e as any)[93] = a, (e as any)[94] = Pe) : Pe = (e as any)[94];
  let $e: any;
  ((e as any)[95] as any) !== (N as any) ? ($e = N ? ((l as any).jsx as any)((xe as any).ActionBar, {
    children: ((l as any).jsx as any)("div", {
      ref: v,
      ...(ue as any)((de as any).actionsHost)
    })
  }) : null, (e as any)[95] = N, (e as any)[96] = $e) : $e = (e as any)[96];
  let Me: any;
  return ((e as any)[97] as any) !== (a as any) || ((e as any)[98] as any) !== (Q as any) || ((e as any)[99] as any) !== (K as any) || ((e as any)[100] as any) !== (Ne as any) || ((e as any)[101] as any) !== (Pe as any) || ((e as any)[102] as any) !== ($e as any) ? (Me = ((l as any).jsxs as any)(yt, {
    ariaLabel: Q,
    onClose: a,
    children: [K, Ne, Pe, $e]
  }), (e as any)[97] = a, (e as any)[98] = Q, (e as any)[99] = K, (e as any)[100] = Ne, (e as any)[101] = Pe, (e as any)[102] = $e, (e as any)[103] = Me) : Me = (e as any)[103], Me;
}
function ha(this: any, s: any): any {
  return (s as any).name;
}
export { xt as G, pa as T };
//# debugId=1ce3c0f4-d582-436b-be45-82fcd3a749ca
