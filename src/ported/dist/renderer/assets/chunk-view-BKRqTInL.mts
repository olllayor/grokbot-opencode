declare var URL: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "92092553-12ad-403b-981f-a4a3d387709e", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-92092553-12ad-403b-981f-a4a3d387709e");
  } catch (e: any) {}
} as any)();
import { c as ge, j as t, u as xe, r as K, T as Q } from "./index.eager-vendor-Qbf9YA6n.js";
import { i as qe } from "./index.eager-platform-Dcfeegfw.js";
import { b7 as be, bA as we, bY as Ce, aU as Te, b0 as X, j as de, n as ue, p as je, aP as Ae, k as ye, b9 as Me, bT as Ee } from "./index.eager-app-Cj5f8Gby.js";
import { I as pe, z as he, an as Le, a5 as $e, a6 as Ne } from "./index-ZYxf-aBb.js";
import { b as Fe, e as Pe, J as Oe } from "./index.eager-common-CdCvBQNJ.js";
import { a as ze, b as Ge } from "./chunk-provider-credentials-yP7QsOsy.js";
const De: any = (120 as any) * (1e3 as any),
  M: any = {
    paragraph: {
      kqGvvJ: "sand-10im51j",
      k7Eaqz: "sand-euugli",
      $$css: !0
    },
    secondary: {
      kMwMTN: "sand-1o0liin",
      $$css: !0
    },
    danger: {
      kMwMTN: "sand-6rl5ky",
      $$css: !0
    }
  };
function Be(this: any, n: any): any {
  return ((n as any).harness as any) === ("temporal" as any) ? "temporal" : "box";
}
function Se(this: any, n: any, e: any): any {
  switch (n) {
    case "approved":
      return {
        label: e,
        kind: "success"
      };
    case "denied":
      return {
        label: {
          id: "JsY1p5"
        },
        kind: "muted"
      };
    case "failed":
      return {
        label: {
          id: "7Bj3x9"
        },
        kind: "danger"
      };
  }
}
function ve(this: any, n: any): any {
  return ((URL as any).canParse as any)(n) ? (new (URL as any)(n) as any).host : n;
}
function Ie(this: any, n: any): any {
  return (n as any) === ("approved" as any) || (n as any) === ("denied" as any) || (n as any) === ("failed" as any);
}
function Re(this: any, n: any): any {
  (Re as any).d = 481;
  const e: any = ((ge as any).c as any)(2);
  let l: any;
  return ((e as any)[0] as any) !== (n as any) ? (l = (((n as any).request as any).kind as any) === ("brokered-login" as any) ? ((t as any).jsx as any)(ke, {
    ...n,
    request: (n as any).request
  }) : ((t as any).jsx as any)(_e, {
    ...n,
    request: (n as any).request
  }), (e as any)[0] = n, (e as any)[1] = l) : l = (e as any)[1], l;
}
function ke(this: any, n: any): any {
  (ke as any).d = 479;
  const e: any = ((ge as any).c as any)(73),
    {
      request: l,
      resolution: s
    }: any = n,
    {
      i18n: j
    }: any = (xe as any)(),
    h: any = (be as any)(),
    f: any = ((K as any).useId as any)(),
    D: any = (we as any)(),
    [a, y]: any = ((K as any).useState as any)(null),
    [m, x]: any = ((K as any).useState as any)(!1),
    p: any = ((K as any).useRef as any)(0);
  let C: any;
  ((e as any)[0] as any) !== ((h as any).clock as any) ? (C = (): any => (Fe as any)({
    name: "onepassword-approval-wait",
    ttlMs: De,
    clock: (h as any).clock
  }), (e as any)[0] = (h as any).clock, (e as any)[1] = C) : C = (e as any)[1];
  const [J]: any = ((K as any).useState as any)(C),
    T: any = (((l as any).appLink as any).startsWith as any)("onepassword://") ? (l as any).appLink : null;
  let W: any;
  ((e as any)[2] as any) !== (j as any) || ((e as any)[3] as any) !== ((l as any).goal as any) ? (W = (((l as any).goal as any).length as any) > (0 as any) ? (l as any).goal : ((j as any)._ as any)({
    id: "e3sv1H"
  }), (e as any)[2] = j, (e as any)[3] = (l as any).goal, (e as any)[4] = W) : W = (e as any)[4];
  const E: any = W;
  let H: any;
  ((e as any)[5] as any) !== ((l as any).entries as any) ? (H = (((((l as any).entries as any).map as any)(He) as any).join as any)(" · "), (e as any)[5] = (l as any).entries, (e as any)[6] = H) : H = (e as any)[6];
  const c: any = H;
  let U: any;
  ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (U = ((t as any).jsx as any)(pe, {
    "aria-hidden": !0,
    name: "key",
    size: "lg"
  }), (e as any)[7] = U) : U = (e as any)[7];
  const ce: any = U;
  if ((Ie as any)(s)) {
    let b: any, A: any, R: any, O: any, k: any, B: any, _: any, z: any, q: any, w: any, G: any, i: any;
    if (((e as any)[8] as any) !== (j as any) || ((e as any)[9] as any) !== (s as any) || ((e as any)[10] as any) !== (c as any) || ((e as any)[11] as any) !== (E as any) || ((e as any)[12] as any) !== (f as any)) {
      const u: any = (Se as any)(s, {
        id: "E0rSFg"
      });
      R = de, B = f, _ = "region", A = ue, G = ce, i = c, O = E, k = f, b = je, z = (u as any).kind, q = ((u as any).kind as any) === ("success" as any) ? ((t as any).jsx as any)(pe, {
        "aria-hidden": !0,
        name: "check",
        size: "sm"
      }) : null, w = ((j as any)._ as any)((u as any).label), (e as any)[8] = j, (e as any)[9] = s, (e as any)[10] = c, (e as any)[11] = E, (e as any)[12] = f, (e as any)[13] = b, (e as any)[14] = A, (e as any)[15] = R, (e as any)[16] = O, (e as any)[17] = k, (e as any)[18] = B, (e as any)[19] = _, (e as any)[20] = z, (e as any)[21] = q, (e as any)[22] = w, (e as any)[23] = G, (e as any)[24] = i;
    } else b = (e as any)[13], A = (e as any)[14], R = (e as any)[15], O = (e as any)[16], k = (e as any)[17], B = (e as any)[18], _ = (e as any)[19], z = (e as any)[20], q = (e as any)[21], w = (e as any)[22], G = (e as any)[23], i = (e as any)[24];
    let o: any;
    ((e as any)[25] as any) !== (b as any) || ((e as any)[26] as any) !== (z as any) || ((e as any)[27] as any) !== (q as any) || ((e as any)[28] as any) !== (w as any) ? (o = ((t as any).jsx as any)(b, {
      kind: z,
      leading: q,
      children: w
    }), (e as any)[25] = b, (e as any)[26] = z, (e as any)[27] = q, (e as any)[28] = w, (e as any)[29] = o) : o = (e as any)[29];
    let r: any;
    ((e as any)[30] as any) !== (A as any) || ((e as any)[31] as any) !== (O as any) || ((e as any)[32] as any) !== (k as any) || ((e as any)[33] as any) !== (o as any) || ((e as any)[34] as any) !== (G as any) || ((e as any)[35] as any) !== (i as any) ? (r = ((t as any).jsx as any)(A, {
      leading: G,
      subtitle: i,
      title: O,
      titleId: k,
      trailing: o
    }), (e as any)[30] = A, (e as any)[31] = O, (e as any)[32] = k, (e as any)[33] = o, (e as any)[34] = G, (e as any)[35] = i, (e as any)[36] = r) : r = (e as any)[36];
    let d: any;
    return ((e as any)[37] as any) !== (R as any) || ((e as any)[38] as any) !== (B as any) || ((e as any)[39] as any) !== (_ as any) || ((e as any)[40] as any) !== (r as any) ? (d = ((t as any).jsx as any)(R, {
      "aria-labelledby": B,
      role: _,
      children: r
    }), (e as any)[37] = R, (e as any)[38] = B, (e as any)[39] = _, (e as any)[40] = r, (e as any)[41] = d) : d = (e as any)[41], d;
  }
  let S: any;
  ((e as any)[42] as any) !== (c as any) || ((e as any)[43] as any) !== (E as any) || ((e as any)[44] as any) !== (f as any) ? (S = ((t as any).jsx as any)(ue, {
    leading: ce,
    subtitle: c,
    title: E,
    titleId: f
  }), (e as any)[42] = c, (e as any)[43] = E, (e as any)[44] = f, (e as any)[45] = S) : S = (e as any)[45];
  let L: any;
  ((e as any)[46] as any) !== ((l as any).entries as any) ? (L = (((l as any).entries as any).map as any)(We), (e as any)[46] = (l as any).entries, (e as any)[47] = L) : L = (e as any)[47];
  let $: any;
  ((e as any)[48] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? ($ = ((t as any).jsx as any)(X, {
    as: "p",
    level: "body2",
    style: [(M as any).paragraph, (M as any).secondary],
    children: ((t as any).jsx as any)(Q, {
      id: "eV6SNM"
    })
  }), (e as any)[48] = $) : $ = (e as any)[48];
  let g: any;
  ((e as any)[49] as any) !== (T as any) || ((e as any)[50] as any) !== (a as any) ? (g = (a as any) != (null as any) || (T as any) === (null as any) ? ((t as any).jsx as any)(X, {
    as: "p",
    level: "body2",
    style: [(M as any).paragraph, (M as any).danger],
    children: ((t as any).jsx as any)(Q, {
      id: "5SRweo"
    })
  }) : null, (e as any)[49] = T, (e as any)[50] = a, (e as any)[51] = g) : g = (e as any)[51];
  const v: any = (T as any) === (null as any);
  let N: any;
  ((e as any)[52] as any) !== (T as any) || ((e as any)[53] as any) !== (J as any) || ((e as any)[54] as any) !== (D as any) || ((e as any)[55] as any) !== ((l as any).accessRequestId as any) ? (N = (): any => {
    if ((T as any) === (null as any)) return;
    (p as any).current = ((p as any).current as any) + (1 as any);
    const b: any = (p as any).current;
    (y as any)(null), (x as any)(!0), ((J as any).arm as any)((l as any).accessRequestId, (): any => (x as any)(!1)), (((D as any)(T) as any).catch as any)((A: any): any => {
      (b as any) === ((p as any).current as any) && ((y as any)((Pe as any)(A)), (x as any)(!1));
    });
  }, (e as any)[52] = T, (e as any)[53] = J, (e as any)[54] = D, (e as any)[55] = (l as any).accessRequestId, (e as any)[56] = N) : N = (e as any)[56];
  const Z: any = m ? "secondary" : "primary";
  let V: any;
  ((e as any)[57] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (V = ((t as any).jsx as any)(Q, {
    id: "6jwlR6"
  }), (e as any)[57] = V) : V = (e as any)[57];
  let Y: any;
  ((e as any)[58] as any) !== (N as any) || ((e as any)[59] as any) !== (Z as any) || ((e as any)[60] as any) !== (v as any) ? (Y = ((t as any).jsx as any)(he, {
    disabled: v,
    onClick: N,
    variant: Z,
    children: V
  }), (e as any)[58] = N, (e as any)[59] = Z, (e as any)[60] = v, (e as any)[61] = Y) : Y = (e as any)[61];
  let I: any;
  ((e as any)[62] as any) !== (m as any) ? (I = m ? ((t as any).jsxs as any)("span", {
    role: "status",
    className: "sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-euugli sand-1o0liin",
    children: [((t as any).jsx as any)(Ae, {
      borderWidth: 2,
      inheritColor: !0,
      size: 14
    }), ((t as any).jsx as any)(X, {
      level: "body2",
      children: ((t as any).jsx as any)(Q, {
        id: "BtFje2"
      })
    })]
  }) : null, (e as any)[62] = m, (e as any)[63] = I) : I = (e as any)[63];
  let F: any;
  ((e as any)[64] as any) !== (Y as any) || ((e as any)[65] as any) !== (I as any) ? (F = ((t as any).jsxs as any)(ye, {
    children: [Y, I]
  }), (e as any)[64] = Y, (e as any)[65] = I, (e as any)[66] = F) : F = (e as any)[66];
  let P: any;
  return ((e as any)[67] as any) !== (F as any) || ((e as any)[68] as any) !== (S as any) || ((e as any)[69] as any) !== (L as any) || ((e as any)[70] as any) !== (g as any) || ((e as any)[71] as any) !== (f as any) ? (P = ((t as any).jsxs as any)(de, {
    "aria-labelledby": f,
    role: "region",
    children: [S, L, $, g, F]
  }), (e as any)[67] = F, (e as any)[68] = S, (e as any)[69] = L, (e as any)[70] = g, (e as any)[71] = f, (e as any)[72] = P) : P = (e as any)[72], P;
}
function We(this: any, n: any): any {
  return ((t as any).jsxs as any)(X, {
    as: "p",
    style: [(M as any).paragraph, (M as any).secondary],
    children: [(ve as any)((n as any).website), (((n as any).reason as any).length as any) > (0 as any) ? ` \u2014 ${(n as any).reason}` : ""]
  }, (n as any).entryId);
}
function He(this: any, n: any): any {
  return (ve as any)((n as any).website);
}
function _e(this: any, n: any): any {
  (_e as any).d = 480;
  const e: any = ((ge as any).c as any)(101),
    {
      entryId: l,
      request: s,
      resolution: j,
      agentId: h
    }: any = n,
    {
      i18n: f
    }: any = (xe as any)(),
    D: any = (be as any)(),
    a: any = ((K as any).useId as any)(),
    y: any = (ze as any)(),
    m: any = (Ge as any)(),
    x: any = (Ce as any)(h ?? null),
    [p, C]: any = ((K as any).useState as any)(!1),
    [J, T]: any = ((K as any).useState as any)();
  (Te as any)(((D as any).credentials as any).loadDirectory);
  let W: any;
  ((e as any)[0] as any) !== (x as any) ? (W = (x as any) === (null as any) ? void 0 : (Be as any)(x), (e as any)[0] = x, (e as any)[1] = W) : W = (e as any)[1];
  const E: any = W;
  let H: any;
  ((e as any)[2] as any) !== ((y as any).data?.items as any) || ((e as any)[3] as any) !== ((s as any).catalogRevision as any) || ((e as any)[4] as any) !== ((s as any).connectionId as any) || ((e as any)[5] as any) !== ((s as any).credentialId as any) ? (H = (y as any).data?.items.find((i: any): any => ((i as any).credentialId as any) === ((s as any).credentialId as any) && ((i as any).connectionId as any) === ((s as any).connectionId as any) && ((i as any).catalogRevision as any) === ((s as any).catalogRevision as any)), (e as any)[2] = (y as any).data?.items, (e as any)[3] = (s as any).catalogRevision, (e as any)[4] = (s as any).connectionId, (e as any)[5] = (s as any).credentialId, (e as any)[6] = H) : H = (e as any)[6];
  const c: any = H;
  let U: any;
  ((e as any)[7] as any) !== ((s as any).targetSite as any) ? (U = ((URL as any).canParse as any)((s as any).targetSite) ? new (URL as any)((s as any).targetSite) : null, (e as any)[7] = (s as any).targetSite, (e as any)[8] = U) : U = (e as any)[8];
  const ce: any = U,
    S: any = (ce?.protocol as any) === ("https:" as any) ? (ce as any).host : null;
  let L: any;
  ((e as any)[9] as any) !== (h as any) || ((e as any)[10] as any) !== (m as any) || ((e as any)[11] as any) !== (l as any) || ((e as any)[12] as any) !== (E as any) || ((e as any)[13] as any) !== (p as any) || ((e as any)[14] as any) !== ((s as any).catalogRevision as any) || ((e as any)[15] as any) !== ((s as any).connectionId as any) || ((e as any)[16] as any) !== ((s as any).credentialId as any) || ((e as any)[17] as any) !== ((s as any).targetSite as any) ? (L = function (this: any, o: any): any {
    if ((h as any) == (null as any) || p) return;
    (C as any)(!0), (T as any)(void 0);
    const r: any = (): any => (C as any)(!1),
      d: any = {
        entryId: l,
        agentId: h,
        ...((E as any) === (void 0 as any) ? {} : {
          harness: E
        })
      };
    if (!o) {
      ((((m as any).deny as any)(d) as any).then as any)(r, r);
      return;
    }
    ((((m as any).approve as any)({
      ...d,
      credentialId: (s as any).credentialId,
      connectionId: (s as any).connectionId,
      catalogRevision: (s as any).catalogRevision,
      targetSite: (s as any).targetSite
    }) as any).then as any)((u: any): any => {
      !(u as any).ok && ((u as any).detail as any) != (null as any) && (T as any)((u as any).detail), (r as any)();
    }, (u: any): any => {
      (T as any)((Oe as any)(u)), (r as any)();
    });
  }, (e as any)[9] = h, (e as any)[10] = m, (e as any)[11] = l, (e as any)[12] = E, (e as any)[13] = p, (e as any)[14] = (s as any).catalogRevision, (e as any)[15] = (s as any).connectionId, (e as any)[16] = (s as any).credentialId, (e as any)[17] = (s as any).targetSite, (e as any)[18] = L) : L = (e as any)[18];
  const $: any = L;
  let g: any = (s as any).purpose;
  if ((c as any) != (null as any)) {
    let i: any;
    ((e as any)[19] as any) !== (S as any) || ((e as any)[20] as any) !== ((c as any).category as any) || ((e as any)[21] as any) !== ((c as any).sites as any) || ((e as any)[22] as any) !== ((c as any).vaultName as any) ? (i = [(c as any).category], (S as any) != (null as any) ? ((i as any).push as any)(S) : (((c as any).sites as any).length as any) > (0 as any) && ((i as any).push as any)(((c as any).sites as any)[0]), ((c as any).vaultName as any) != (null as any) && ((i as any).push as any)((c as any).vaultName), (e as any)[19] = S, (e as any)[20] = (c as any).category, (e as any)[21] = (c as any).sites, (e as any)[22] = (c as any).vaultName, (e as any)[23] = i) : i = (e as any)[23], g = ((i as any).join as any)(" · ");
  }
  const v: any = c?.title ?? S ?? (s as any).targetSite;
  let N: any;
  ((e as any)[24] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (N = ((t as any).jsx as any)(pe, {
    "aria-hidden": !0,
    name: "key",
    size: "lg"
  }), (e as any)[24] = N) : N = (e as any)[24];
  const Z: any = N,
    V: any = ((s as any).autoFill as any) === (!0 as any);
  if ((Ie as any)(j)) {
    let i: any, o: any, r: any, d: any, u: any, ee: any, te: any, se: any, le: any, ne: any, ie: any, ae: any;
    if (((e as any)[25] as any) !== (V as any) || ((e as any)[26] as any) !== (f as any) || ((e as any)[27] as any) !== (g as any) || ((e as any)[28] as any) !== (j as any) || ((e as any)[29] as any) !== (v as any) || ((e as any)[30] as any) !== (a as any)) {
      const me: any = (Se as any)(j, V ? {
        id: "zZmf1N"
      } : {
        id: "gk2v4K"
      });
      r = de, te = a, se = "region", o = ue, ae = Z, d = g, u = v, ee = a, i = je, le = (me as any).kind, ne = ((me as any).kind as any) === ("success" as any) ? ((t as any).jsx as any)(pe, {
        "aria-hidden": !0,
        name: "check",
        size: "sm"
      }) : null, ie = ((f as any)._ as any)((me as any).label), (e as any)[25] = V, (e as any)[26] = f, (e as any)[27] = g, (e as any)[28] = j, (e as any)[29] = v, (e as any)[30] = a, (e as any)[31] = i, (e as any)[32] = o, (e as any)[33] = r, (e as any)[34] = d, (e as any)[35] = u, (e as any)[36] = ee, (e as any)[37] = te, (e as any)[38] = se, (e as any)[39] = le, (e as any)[40] = ne, (e as any)[41] = ie, (e as any)[42] = ae;
    } else i = (e as any)[31], o = (e as any)[32], r = (e as any)[33], d = (e as any)[34], u = (e as any)[35], ee = (e as any)[36], te = (e as any)[37], se = (e as any)[38], le = (e as any)[39], ne = (e as any)[40], ie = (e as any)[41], ae = (e as any)[42];
    let re: any;
    ((e as any)[43] as any) !== (i as any) || ((e as any)[44] as any) !== (le as any) || ((e as any)[45] as any) !== (ne as any) || ((e as any)[46] as any) !== (ie as any) ? (re = ((t as any).jsx as any)(i, {
      kind: le,
      leading: ne,
      children: ie
    }), (e as any)[43] = i, (e as any)[44] = le, (e as any)[45] = ne, (e as any)[46] = ie, (e as any)[47] = re) : re = (e as any)[47];
    let oe: any;
    ((e as any)[48] as any) !== (o as any) || ((e as any)[49] as any) !== (d as any) || ((e as any)[50] as any) !== (u as any) || ((e as any)[51] as any) !== (ee as any) || ((e as any)[52] as any) !== (re as any) || ((e as any)[53] as any) !== (ae as any) ? (oe = ((t as any).jsx as any)(o, {
      leading: ae,
      subtitle: d,
      title: u,
      titleId: ee,
      trailing: re
    }), (e as any)[48] = o, (e as any)[49] = d, (e as any)[50] = u, (e as any)[51] = ee, (e as any)[52] = re, (e as any)[53] = ae, (e as any)[54] = oe) : oe = (e as any)[54];
    let fe: any;
    return ((e as any)[55] as any) !== (r as any) || ((e as any)[56] as any) !== (te as any) || ((e as any)[57] as any) !== (se as any) || ((e as any)[58] as any) !== (oe as any) ? (fe = ((t as any).jsx as any)(r, {
      "aria-labelledby": te,
      role: se,
      children: oe
    }), (e as any)[55] = r, (e as any)[56] = te, (e as any)[57] = se, (e as any)[58] = oe, (e as any)[59] = fe) : fe = (e as any)[59], fe;
  }
  if ((j as any) === ("filling" as any) || V) {
    const i: any = S ?? (s as any).targetSite;
    let o: any;
    ((e as any)[60] as any) !== (g as any) || ((e as any)[61] as any) !== (v as any) || ((e as any)[62] as any) !== (a as any) ? (o = ((t as any).jsx as any)(ue, {
      leading: Z,
      subtitle: g,
      title: v,
      titleId: a
    }), (e as any)[60] = g, (e as any)[61] = v, (e as any)[62] = a, (e as any)[63] = o) : o = (e as any)[63];
    let r: any;
    ((e as any)[64] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = [(M as any).paragraph, (M as any).secondary], (e as any)[64] = r) : r = (e as any)[64];
    let d: any;
    ((e as any)[65] as any) !== (i as any) ? (d = ((t as any).jsx as any)(X, {
      as: "p",
      style: r,
      children: ((t as any).jsx as any)(Q, {
        id: "yc/lvg",
        values: {
          site: i
        }
      })
    }), (e as any)[65] = i, (e as any)[66] = d) : d = (e as any)[66];
    let u: any;
    return ((e as any)[67] as any) !== (o as any) || ((e as any)[68] as any) !== (d as any) || ((e as any)[69] as any) !== (a as any) ? (u = ((t as any).jsxs as any)(de, {
      "aria-labelledby": a,
      role: "region",
      children: [o, d]
    }), (e as any)[67] = o, (e as any)[68] = d, (e as any)[69] = a, (e as any)[70] = u) : u = (e as any)[70], u;
  }
  const Y: any = (h as any) != (null as any) && (c as any) != (null as any) && !p;
  let I: any;
  ((e as any)[71] as any) !== (g as any) || ((e as any)[72] as any) !== (v as any) || ((e as any)[73] as any) !== (a as any) ? (I = ((t as any).jsx as any)(ue, {
    leading: Z,
    subtitle: g,
    title: v,
    titleId: a
  }), (e as any)[71] = g, (e as any)[72] = v, (e as any)[73] = a, (e as any)[74] = I) : I = (e as any)[74];
  let F: any;
  ((e as any)[75] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (F = [(M as any).paragraph, (M as any).secondary], (e as any)[75] = F) : F = (e as any)[75];
  let P: any;
  ((e as any)[76] as any) !== ((s as any).purpose as any) ? (P = ((t as any).jsx as any)(X, {
    as: "p",
    style: F,
    children: (s as any).purpose
  }), (e as any)[76] = (s as any).purpose, (e as any)[77] = P) : P = (e as any)[77];
  let b: any;
  ((e as any)[78] as any) !== (J as any) ? (b = (J as any) != (null as any) ? ((t as any).jsx as any)(X, {
    as: "p",
    level: "body2",
    style: [(M as any).paragraph, (M as any).danger],
    children: J
  }) : null, (e as any)[78] = J, (e as any)[79] = b) : b = (e as any)[79];
  const A: any = !Y;
  let R: any;
  ((e as any)[80] as any) !== ($ as any) ? (R = (): any => ($ as any)(!0), (e as any)[80] = $, (e as any)[81] = R) : R = (e as any)[81];
  let O: any;
  ((e as any)[82] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (O = ((t as any).jsx as any)(Q, {
    id: "TsmNPS"
  }), (e as any)[82] = O) : O = (e as any)[82];
  let k: any;
  ((e as any)[83] as any) !== (A as any) || ((e as any)[84] as any) !== (R as any) ? (k = ((t as any).jsx as any)(he, {
    disabled: A,
    onClick: R,
    variant: "primary",
    children: O
  }), (e as any)[83] = A, (e as any)[84] = R, (e as any)[85] = k) : k = (e as any)[85];
  const B: any = (h as any) == (null as any) || p;
  let _: any;
  ((e as any)[86] as any) !== ($ as any) ? (_ = (): any => ($ as any)(!1), (e as any)[86] = $, (e as any)[87] = _) : _ = (e as any)[87];
  let z: any;
  ((e as any)[88] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (z = ((t as any).jsx as any)(Q, {
    id: "cFCKYZ"
  }), (e as any)[88] = z) : z = (e as any)[88];
  let q: any;
  ((e as any)[89] as any) !== (B as any) || ((e as any)[90] as any) !== (_ as any) ? (q = ((t as any).jsx as any)(he, {
    disabled: B,
    onClick: _,
    variant: "secondary",
    children: z
  }), (e as any)[89] = B, (e as any)[90] = _, (e as any)[91] = q) : q = (e as any)[91];
  let w: any;
  ((e as any)[92] as any) !== (k as any) || ((e as any)[93] as any) !== (q as any) ? (w = ((t as any).jsxs as any)(ye, {
    children: [k, q]
  }), (e as any)[92] = k, (e as any)[93] = q, (e as any)[94] = w) : w = (e as any)[94];
  let G: any;
  return ((e as any)[95] as any) !== (w as any) || ((e as any)[96] as any) !== (I as any) || ((e as any)[97] as any) !== (P as any) || ((e as any)[98] as any) !== (b as any) || ((e as any)[99] as any) !== (a as any) ? (G = ((t as any).jsxs as any)(de, {
    "aria-labelledby": a,
    role: "region",
    children: [I, P, b, w]
  }), (e as any)[95] = w, (e as any)[96] = I, (e as any)[97] = P, (e as any)[98] = b, (e as any)[99] = a, (e as any)[100] = G) : G = (e as any)[100], G;
}
function Ue(this: any, n: any): any {
  (Ue as any).d = 316;
  const e: any = ((ge as any).c as any)(18),
    {
      entry: l,
      adjacency: s
    }: any = n,
    j: any = (Me as any)("sand_1pass_integration"),
    h: any = (Ee as any)();
  let f: any;
  ((e as any)[0] as any) !== (h as any) ? (f = (): any => ((h as any)("sand_1pass_integration"), Ve), (e as any)[0] = h, (e as any)[1] = f) : f = (e as any)[1], (qe as any)(f);
  const D: any = (Le as any)();
  if (!j) return null;
  const a: any = ((l as any).credentialResolution as any) === ("retryable" as any) ? void 0 : (l as any).credentialResolution;
  let y: any;
  ((e as any)[2] as any) !== (D as any) ? (y = (D as any) == (null as any) ? {} : {
    agentId: D
  }, (e as any)[2] = D, (e as any)[3] = y) : y = (e as any)[3];
  let m: any;
  ((e as any)[4] as any) !== (a as any) ? (m = (a as any) == (null as any) ? {} : {
    resolution: a
  }, (e as any)[4] = a, (e as any)[5] = m) : m = (e as any)[5];
  let x: any;
  ((e as any)[6] as any) !== ((l as any).id as any) || ((e as any)[7] as any) !== (((l as any).message as any).credentialRequest as any) || ((e as any)[8] as any) !== (y as any) || ((e as any)[9] as any) !== (m as any) ? (x = ((t as any).jsx as any)(Re, {
    entryId: (l as any).id,
    request: ((l as any).message as any).credentialRequest,
    ...y,
    ...m
  }), (e as any)[6] = (l as any).id, (e as any)[7] = ((l as any).message as any).credentialRequest, (e as any)[8] = y, (e as any)[9] = m, (e as any)[10] = x) : x = (e as any)[10];
  let p: any;
  ((e as any)[11] as any) !== ((s as any).isGroupStart as any) || ((e as any)[12] as any) !== ((l as any).timestampMs as any) || ((e as any)[13] as any) !== (x as any) ? (p = ((t as any).jsx as any)($e, {
    isGroupStart: (s as any).isGroupStart,
    timestampMs: (l as any).timestampMs,
    variant: "question",
    children: x
  }), (e as any)[11] = (s as any).isGroupStart, (e as any)[12] = (l as any).timestampMs, (e as any)[13] = x, (e as any)[14] = p) : p = (e as any)[14];
  let C: any;
  return ((e as any)[15] as any) !== (l as any) || ((e as any)[16] as any) !== (p as any) ? (C = ((t as any).jsx as any)(Ne, {
    entry: l,
    children: p
  }), (e as any)[15] = l, (e as any)[16] = p, (e as any)[17] = C) : C = (e as any)[17], C;
}
function Ve(this: any): any {}
export { Ue as default };
//# debugId=92092553-12ad-403b-981f-a4a3d387709e
