declare var URL: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "117985a3-4aff-4cd5-958b-a636edaacf9d", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-117985a3-4aff-4cd5-958b-a636edaacf9d");
  } catch (e: any) {}
} as any)();
import { c as je, r as _e, p as qe, j as s, T as m, u as ve } from "./index.eager-vendor-Qbf9YA6n.js";
import { aY as k, i as is } from "./index.eager-platform-Dcfeegfw.js";
import { bA as js, fV as Je, t as ds, b7 as ns, fh as cs, b9 as es, bT as ys, fW as Te, aP as ss, aU as rs, fX as Ds, cc as De, fY as Ms, a_ as Os, fZ as Ls, f_ as $s } from "./index.eager-app-Cj5f8Gby.js";
import { z as ne, x as xe, I as ps, bU as Fs, aX as as, bV as _s, n as Bs } from "./index-ZYxf-aBb.js";
import { J as Se } from "./index.eager-common-CdCvBQNJ.js";
import { c as Gs, d as Ws, e as Vs, a as Hs, f as Ks } from "./chunk-provider-credentials-yP7QsOsy.js";
import { G as Ue, a as Me } from "./chunk-settings-row-I8ggwIzt.js";
import { a as bs, b as gs, u as Ys } from "./chunk-native-plugin-state-AwCLFZLB.js";
import { c as Zs } from "./chunk-plugins-rows-2d0UrD7L.js";
import { PluginDetailHeader as Qs, DetailsList as Xs, PluginDetailLayout as Js } from "./chunk-plugin-detail-view-tZskkHRA.js";
import { r as en, p as sn } from "./chunk-marketplace-browse-model-DoOY91TS.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
import "./chunk-finance-CSw6gjXN.js";
import "./chunk-provider-listener-integrations-CR9f28xA.js";
import "./chunk-view-BudImuR0.js";
import "./chunk-use-active-option-scroll-B1hXdW5d.js";
import "./chunk-wipe-navigation-B3wgZxtA.js";
import "./chunk-pane-header-DzXd4Vgr.js";
import "./chunk-scroll-pane-CoxKzaOs.js";
const fs: string = "https://developer.1password.com/docs/service-accounts/get-started/",
  Pe: any = {
    step: {
      k1xSpc: "sand-78zum5",
      kGNEyG: "sand-1cy8zhl",
      kOIVth: "sand-1v2ro7d",
      $$css: !0
    },
    stepMarker: {
      k1xSpc: "sand-78zum5",
      kGNEyG: "sand-6s0dn4",
      kjj79g: "sand-l56j7k",
      kmuXW: "sand-2lah0s",
      kzqmXN: "sand-vy4d1p",
      kZKoxP: "sand-xk0z11",
      kaIpWk: "sand-1e6avla",
      kWkggS: "sand-i07v4r",
      kMwMTN: "sand-19aaqeu",
      $$css: !0
    },
    stepCopy: {
      k7Eaqz: "sand-euugli",
      kLKAdn: "sand-1nn3v0j",
      $$css: !0
    }
  };
function os(this: any, y: any): any {
  (os as any).d = 1219;
  const e: any = ((je as any).c as any)(65),
    {
      intent: n,
      vaultName: i,
      error: o,
      isPending: t,
      onSubmit: l,
      onCancel: j
    }: any = y,
    a: any = (n as any) === (void 0 as any) ? "connect" : n,
    x: any = (i as any) === (void 0 as any) ? Je : i,
    g: any = (js as any)(),
    p: any = ((_e as any).useRef as any)(null),
    [c, u]: any = ((_e as any).useState as any)(!1);
  let f: any;
  ((e as any)[0] as any) !== (g as any) ? (f = (ds as any)(fs, g), (e as any)[0] = g, (e as any)[1] = f) : f = (e as any)[1];
  let S: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (S = {
    className: "sand-1heor9g sand-ujl8zx sand-1ypdohk"
  }, (e as any)[2] = S) : S = (e as any)[2];
  let _: any;
  ((e as any)[3] as any) !== (f as any) ? (_ = {
    ...f,
    ...S,
    href: fs
  }, (e as any)[3] = f, (e as any)[4] = _) : _ = (e as any)[4];
  const z: any = _;
  let b: any;
  ((e as any)[5] as any) !== (t as any) || ((e as any)[6] as any) !== (l as any) ? (b = (be: any): any => {
    ((be as any).preventDefault as any)();
    const ge: any = (p as any).current,
      ze: any = ge?.value.trim() ?? "";
    ((ze as any).length as any) === (0 as any) || t || ((ge as any) != (null as any) && ((ge as any).value = ""), (u as any)(!1), (l as any)(ze));
  }, (e as any)[5] = t, (e as any)[6] = l, (e as any)[7] = b) : b = (e as any)[7];
  const N: any = b;
  let d: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = {
    className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d sand-11gisft"
  }, (e as any)[8] = d) : d = (e as any)[8];
  let r: any;
  ((e as any)[9] as any) !== (a as any) || ((e as any)[10] as any) !== (x as any) ? (r = ((s as any).jsx as any)(k, {
    color: "secondary",
    size: "md",
    children: (a as any) === ("renew" as any) ? ((s as any).jsx as any)(m, {
      id: "kJTcYz",
      values: {
        vaultName: x
      }
    }) : ((s as any).jsx as any)(m, {
      id: "6FJfAU",
      values: {
        vaultName: x
      }
    })
  }), (e as any)[9] = a, (e as any)[10] = x, (e as any)[11] = r) : r = (e as any)[11];
  let E: any;
  ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (E = {
    className: "sand-78zum5 sand-dt5ytf sand-883omv sand-1ghz6dp sand-1717udv sand-3ct3a4"
  }, (e as any)[12] = E) : E = (e as any)[12];
  let A: any;
  ((e as any)[13] as any) !== (a as any) || ((e as any)[14] as any) !== (x as any) ? (A = (a as any) === ("renew" as any) ? null : ((s as any).jsxs as any)("li", {
    className: "sand-78zum5 sand-1cy8zhl sand-1v2ro7d",
    children: [((s as any).jsx as any)(k, {
      as: "span",
      size: "sm",
      weight: "medium",
      className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-vy4d1p sand-xk0z11 sand-1e6avla sand-i07v4r sand-19aaqeu",
      children: "1"
    }), ((s as any).jsx as any)(k, {
      color: "secondary",
      size: "md",
      className: "sand-euugli sand-1nn3v0j",
      children: ((s as any).jsx as any)(m, {
        id: "puHhN4",
        values: {
          vaultName: x
        }
      })
    })]
  }), (e as any)[13] = a, (e as any)[14] = x, (e as any)[15] = A) : A = (e as any)[15];
  let q: any;
  ((e as any)[16] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (q = (qe as any)((Pe as any).step), (e as any)[16] = q) : q = (e as any)[16];
  let M: any;
  ((e as any)[17] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (M = (qe as any)((Pe as any).stepMarker), (e as any)[17] = M) : M = (e as any)[17];
  const F: any = (a as any) === ("renew" as any) ? 1 : 2;
  let O: any;
  ((e as any)[18] as any) !== (F as any) ? (O = ((s as any).jsx as any)(k, {
    as: "span",
    size: "sm",
    weight: "medium",
    ...M,
    children: F
  }), (e as any)[18] = F, (e as any)[19] = O) : O = (e as any)[19];
  let v: any;
  ((e as any)[20] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = (qe as any)((Pe as any).stepCopy), (e as any)[20] = v) : v = (e as any)[20];
  let oe: any;
  ((e as any)[21] as any) !== (z as any) ? (oe = ((s as any).jsx as any)(k, {
    color: "secondary",
    size: "md",
    ...v,
    children: ((s as any).jsx as any)(m, {
      id: "VJ6pK2",
      components: {
        0: ((s as any).jsx as any)("a", {
          ...z,
          rel: "noopener noreferrer",
          target: "_blank"
        })
      }
    })
  }), (e as any)[21] = z, (e as any)[22] = oe) : oe = (e as any)[22];
  let V: any;
  ((e as any)[23] as any) !== (O as any) || ((e as any)[24] as any) !== (oe as any) ? (V = ((s as any).jsxs as any)("li", {
    ...q,
    children: [O, oe]
  }), (e as any)[23] = O, (e as any)[24] = oe, (e as any)[25] = V) : V = (e as any)[25];
  let ye: any;
  ((e as any)[26] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ye = (qe as any)((Pe as any).step), (e as any)[26] = ye) : ye = (e as any)[26];
  let H: any;
  ((e as any)[27] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (H = (qe as any)((Pe as any).stepMarker), (e as any)[27] = H) : H = (e as any)[27];
  const le: any = (a as any) === ("renew" as any) ? 2 : 3;
  let P: any;
  ((e as any)[28] as any) !== (le as any) ? (P = ((s as any).jsx as any)(k, {
    as: "span",
    size: "sm",
    weight: "medium",
    ...H,
    children: le
  }), (e as any)[28] = le, (e as any)[29] = P) : P = (e as any)[29];
  let pe: any;
  ((e as any)[30] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (pe = ((s as any).jsx as any)(k, {
    color: "secondary",
    size: "md",
    className: "sand-euugli sand-1nn3v0j",
    children: ((s as any).jsx as any)(m, {
      id: "eZbAY8"
    })
  }), (e as any)[30] = pe) : pe = (e as any)[30];
  let me: any;
  ((e as any)[31] as any) !== (P as any) ? (me = ((s as any).jsxs as any)("li", {
    ...ye,
    children: [P, pe]
  }), (e as any)[31] = P, (e as any)[32] = me) : me = (e as any)[32];
  let ue: any;
  ((e as any)[33] as any) !== (A as any) || ((e as any)[34] as any) !== (V as any) || ((e as any)[35] as any) !== (me as any) ? (ue = ((s as any).jsxs as any)("ol", {
    ...E,
    children: [A, V, me]
  }), (e as any)[33] = A, (e as any)[34] = V, (e as any)[35] = me, (e as any)[36] = ue) : ue = (e as any)[36];
  let L: any;
  ((e as any)[37] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (L = {
    className: "sand-78zum5 sand-dt5ytf sand-1jnr06f"
  }, (e as any)[37] = L) : L = (e as any)[37];
  let ae: any;
  ((e as any)[38] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ae = ((s as any).jsx as any)(k, {
    as: "span",
    color: "secondary",
    size: "xs",
    children: ((s as any).jsx as any)(m, {
      id: "ZXpmme"
    })
  }), (e as any)[38] = ae) : ae = (e as any)[38];
  let ie: any;
  ((e as any)[39] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ie = (be: any): any => (u as any)(((((((be as any).currentTarget as any).value as any).trim as any)() as any).length as any) > (0 as any)), (e as any)[39] = ie) : ie = (e as any)[39];
  let Y: any;
  ((e as any)[40] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Y = {
    className: "sand-1ghz6dp sand-knfcqp sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-jbqb8w sand-jb2p0i sand-11wthnw sand-tyxrsu sand-1h7ufjq"
  }, (e as any)[40] = Y) : Y = (e as any)[40];
  let Z: any;
  ((e as any)[41] as any) !== (t as any) ? (Z = ((s as any).jsxs as any)("label", {
    ...L,
    children: [ae, ((s as any).jsx as any)("input", {
      autoComplete: "off",
      autoFocus: !0,
      disabled: t,
      name: "sand-1password-service-account-token",
      onChange: ie,
      ref: p,
      spellCheck: !1,
      type: "password",
      ...Y
    })]
  }), (e as any)[41] = t, (e as any)[42] = Z) : Z = (e as any)[42];
  let de: any;
  ((e as any)[43] as any) !== (o as any) ? (de = (o as any) != (null as any) ? ((s as any).jsx as any)(k, {
    color: "red",
    role: "alert",
    size: "md",
    children: o
  }) : null, (e as any)[43] = o, (e as any)[44] = de) : de = (e as any)[44];
  let fe: any;
  ((e as any)[45] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (fe = {
    className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-1a02dak"
  }, (e as any)[45] = fe) : fe = (e as any)[45];
  const te: any = !c || t;
  let Q: any;
  ((e as any)[46] as any) !== (a as any) ? (Q = (a as any) === ("renew" as any) ? ((s as any).jsx as any)(m, {
    id: "EkH9pt"
  }) : ((s as any).jsx as any)(m, {
    id: "Timamj"
  }), (e as any)[46] = a, (e as any)[47] = Q) : Q = (e as any)[47];
  let X: any;
  ((e as any)[48] as any) !== (te as any) || ((e as any)[49] as any) !== (Q as any) ? (X = ((s as any).jsx as any)(ne, {
    disabled: te,
    size: "md",
    type: "submit",
    variant: "primary",
    children: Q
  }), (e as any)[48] = te, (e as any)[49] = Q, (e as any)[50] = X) : X = (e as any)[50];
  let J: any;
  ((e as any)[51] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (J = ((s as any).jsx as any)(m, {
    id: "dEgA5A"
  }), (e as any)[51] = J) : J = (e as any)[51];
  let ce: any;
  ((e as any)[52] as any) !== (t as any) || ((e as any)[53] as any) !== (j as any) ? (ce = ((s as any).jsx as any)(ne, {
    disabled: t,
    onClick: j,
    size: "md",
    type: "button",
    variant: "secondary",
    children: J
  }), (e as any)[52] = t, (e as any)[53] = j, (e as any)[54] = ce) : ce = (e as any)[54];
  let T: any;
  ((e as any)[55] as any) !== (X as any) || ((e as any)[56] as any) !== (ce as any) ? (T = ((s as any).jsxs as any)("span", {
    ...fe,
    children: [X, ce]
  }), (e as any)[55] = X, (e as any)[56] = ce, (e as any)[57] = T) : T = (e as any)[57];
  let he: any;
  return ((e as any)[58] as any) !== (N as any) || ((e as any)[59] as any) !== (ue as any) || ((e as any)[60] as any) !== (Z as any) || ((e as any)[61] as any) !== (de as any) || ((e as any)[62] as any) !== (T as any) || ((e as any)[63] as any) !== (r as any) ? (he = ((s as any).jsxs as any)("form", {
    "data-testid": "credential-token-form",
    onSubmit: N,
    ...d,
    children: [r, ue, Z, de, T]
  }), (e as any)[58] = N, (e as any)[59] = ue, (e as any)[60] = Z, (e as any)[61] = de, (e as any)[62] = T, (e as any)[63] = r, (e as any)[64] = he) : he = (e as any)[64], he;
}
const hs: string = "https://1password.com/blog/service-accounts-sdks-agentic-ai",
  xs: string = "onepassword://settings/developers",
  nn: any = {
    intro: {
      ks0D6T: "sand-11gisft",
      $$css: !0
    }
  };
function vs(this: any, y: any): any {
  (vs as any).d = 1218;
  const e: any = ((je as any).c as any)(208),
    {
      onNotice: n,
      onSuccessHoldChange: i,
      connectedAccountUuids: o,
      initialView: t,
      onExit: l
    }: any = y;
  let j: any;
  ((e as any)[0] as any) !== (o as any) ? (j = (o as any) === (void 0 as any) ? [] : o, (e as any)[0] = o, (e as any)[1] = j) : j = (e as any)[1];
  const a: any = j,
    x: any = (t as any) === (void 0 as any) ? "intro" : t,
    g: any = (ns as any)(),
    p: any = (js as any)(),
    c: any = (((cs as any)() as any).platform as any) === ("darwin" as any),
    u: any = (es as any)("sand_1pass_manual_service_acct"),
    f: any = (ys as any)(),
    [S, _]: any = ((_e as any).useState as any)(x),
    z: any = (S as any) === ("pick" as any) && !c && u ? "token" : S,
    [b, N]: any = ((_e as any).useState as any)(null);
  let d: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = {}, (e as any)[2] = d) : d = (e as any)[2];
  const [r, E]: any = ((_e as any).useState as any)(d),
    [A, q]: any = ((_e as any).useState as any)(null);
  let M: any;
  ((e as any)[3] as any) !== (f as any) ? (M = (): any => ((f as any)("sand_1pass_manual_service_acct"), ln), (e as any)[3] = f, (e as any)[4] = M) : M = (e as any)[4], (is as any)(M);
  let F: any;
  ((e as any)[5] as any) !== (g as any) || ((e as any)[6] as any) !== (z as any) ? (F = (): any => ((z as any) === ("pick" as any) && (((g as any).credentials as any).refreshReadiness as any)(), tn), (e as any)[5] = g, (e as any)[6] = z, (e as any)[7] = F) : F = (e as any)[7], (is as any)(F);
  let O: any;
  ((e as any)[8] as any) !== (l as any) || ((e as any)[9] as any) !== (i as any) ? (O = {
    onSuccessHoldChange: i,
    onSuccessComplete: l
  }, (e as any)[8] = l, (e as any)[9] = i, (e as any)[10] = O) : O = (e as any)[10];
  const v: any = (Gs as any)((z as any) === ("pick" as any), O);
  let oe: any;
  ((e as any)[11] as any) !== ((v as any).readiness as any) ? (oe = ((v as any).readiness?.state as any) === ("ready" as any) ? ((v as any).readiness as any).accounts : [], (e as any)[11] = (v as any).readiness, (e as any)[12] = oe) : oe = (e as any)[12];
  const V: any = oe;
  let ye: any;
  ((e as any)[13] as any) !== (a as any) ? (ye = new (Set as any)(a), (e as any)[13] = a, (e as any)[14] = ye) : ye = (e as any)[14];
  const H: any = ye;
  let le: any;
  ((e as any)[15] as any) !== (V as any) || ((e as any)[16] as any) !== (H as any) || ((e as any)[17] as any) !== (b as any) ? (le = ((V as any).find as any)((h: any): any => ((h as any).accountUuid as any) === (b as any) && !((H as any).has as any)((h as any).accountUuid)) ?? ((V as any).find as any)((h: any): any => !((H as any).has as any)((h as any).accountUuid)) ?? null, (e as any)[15] = V, (e as any)[16] = H, (e as any)[17] = b, (e as any)[18] = le) : le = (e as any)[18];
  const P: any = le;
  let pe: any;
  ((e as any)[19] as any) !== (v as any) || ((e as any)[20] as any) !== (n as any) || ((e as any)[21] as any) !== (P as any) ? (pe = (): any => {
    (P as any) != (null as any) && ((n as any)(null), ((((v as any).start as any)({
      accountUuid: (P as any).accountUuid,
      vaultName: Je,
      accountUrl: (P as any).url,
      accountEmail: (P as any).email
    }) as any).then as any)((): any => (n as any)(null), (h: any): any => {
      const C: any = (Se as any)(h),
        w: any = (Ws as any)(h);
      if ((w as any) === ("cancelled" as any) || (w as any) === ("denied" as any)) {
        (n as any)(null);
        return;
      }
      if ((w as any) === ("permission" as any)) {
        (E as any)((R: any): any => ({
          ...R,
          [(P as any).accountUuid]: C
        }));
        return;
      }
      (n as any)({
        kind: "error",
        text: C
      });
    }));
  }, (e as any)[19] = v, (e as any)[20] = n, (e as any)[21] = P, (e as any)[22] = pe) : pe = (e as any)[22];
  const me: any = pe;
  let ue: any;
  ((e as any)[23] as any) !== (l as any) || ((e as any)[24] as any) !== (n as any) ? (ue = (): any => {
    if ((n as any)(null), (q as any)(null), (l as any) != (null as any)) {
      (l as any)();
      return;
    }
    (_ as any)("intro");
  }, (e as any)[23] = l, (e as any)[24] = n, (e as any)[25] = ue) : ue = (e as any)[25];
  const L: any = ue;
  let ae: any;
  ((e as any)[26] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ae = ((s as any).jsx as any)(m, {
    id: "dEgA5A"
  }), (e as any)[26] = ae) : ae = (e as any)[26];
  let ie: any;
  ((e as any)[27] as any) !== (L as any) ? (ie = ((s as any).jsx as any)(ne, {
    onClick: L,
    size: "md",
    type: "button",
    variant: "secondary",
    children: ae
  }), (e as any)[27] = L, (e as any)[28] = ie) : ie = (e as any)[28];
  const Y: any = ie;
  let Z: any;
  ((e as any)[29] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Z = (): any => (_ as any)("token"), (e as any)[29] = Z) : Z = (e as any)[29];
  let de: any;
  ((e as any)[30] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (de = ((s as any).jsx as any)(k, {
    color: "secondary",
    size: "sm",
    children: ((s as any).jsx as any)("button", {
      onClick: Z,
      type: "button",
      className: "sand-jyslct sand-jbqb8w sand-c342km sand-1717udv sand-ln7xf2 sand-1heor9g sand-ujl8zx sand-1ypdohk",
      children: ((s as any).jsx as any)(m, {
        id: "JCtpCD"
      })
    })
  }), (e as any)[30] = de) : de = (e as any)[30];
  const fe: any = de;
  if ((v as any).isMinting) {
    const h: any = ((v as any).stage as any) === ("connected" as any),
      C: any = (z as any) === ("token" as any) ? Te : P?.email ?? Te;
    let w: any;
    if (h) {
      let W: any;
      ((e as any)[31] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (W = ((s as any).jsx as any)(m, {
        id: "xUx8ml"
      }), (e as any)[31] = W) : W = (e as any)[31], w = W;
    } else if ((z as any) === ("token" as any)) {
      let W: any;
      ((e as any)[32] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (W = ((s as any).jsx as any)(m, {
        id: "2QKGtQ"
      }), (e as any)[32] = W) : W = (e as any)[32], w = W;
    } else {
      let W: any;
      ((e as any)[33] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (W = ((s as any).jsx as any)(m, {
        id: "VZZ5g2",
        values: {
          vaultName: Je
        }
      }), (e as any)[33] = W) : W = (e as any)[33], w = W;
    }
    const R: any = h ? "connected" : "connecting";
    let D: any;
    ((e as any)[34] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (D = {
      className: "sand-78zum5 sand-1cy8zhl sand-1v2ro7d sand-10dr8xq sand-qin4a2 sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-4pepcl"
    }, (e as any)[34] = D) : D = (e as any)[34];
    let $: any;
    ((e as any)[35] as any) !== (h as any) ? ($ = ({
      0: {
        className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-gd8bvy sand-1fgtraw sand-ur7f20 sand-i07v4r sand-19aaqeu"
      },
      1: {
        className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-gd8bvy sand-1fgtraw sand-ur7f20 sand-1buh4up sand-1w5rjie"
      }
    } as any)[(!!h as any) << (0 as any)], (e as any)[35] = h, (e as any)[36] = $) : $ = (e as any)[36];
    let U: any;
    ((e as any)[37] as any) !== (h as any) ? (U = h ? ((s as any).jsx as any)(ps, {
      name: "check",
      size: "md"
    }) : ((s as any).jsx as any)(ss, {
      size: 16,
      borderWidth: 2
    }), (e as any)[37] = h, (e as any)[38] = U) : U = (e as any)[38];
    let B: any;
    ((e as any)[39] as any) !== ($ as any) || ((e as any)[40] as any) !== (U as any) ? (B = ((s as any).jsx as any)("span", {
      ...$,
      children: U
    }), (e as any)[39] = $, (e as any)[40] = U, (e as any)[41] = B) : B = (e as any)[41];
    let G: any;
    ((e as any)[42] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (G = {
      className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-euugli"
    }, (e as any)[42] = G) : G = (e as any)[42];
    let I: any;
    ((e as any)[43] as any) !== (C as any) || ((e as any)[44] as any) !== (h as any) ? (I = ((s as any).jsx as any)(k, {
      size: "md",
      weight: "medium",
      children: h ? ((s as any).jsx as any)(m, {
        id: "3khQqh",
        values: {
          accountLabel: C
        }
      }) : ((s as any).jsx as any)(m, {
        id: "YfQhMM",
        values: {
          accountLabel: C
        }
      })
    }), (e as any)[43] = C, (e as any)[44] = h, (e as any)[45] = I) : I = (e as any)[45];
    let ee: any;
    ((e as any)[46] as any) !== (w as any) ? (ee = ((s as any).jsx as any)(k, {
      color: "secondary",
      size: "sm",
      children: w
    }), (e as any)[46] = w, (e as any)[47] = ee) : ee = (e as any)[47];
    let se: any;
    ((e as any)[48] as any) !== (I as any) || ((e as any)[49] as any) !== (ee as any) ? (se = ((s as any).jsxs as any)("span", {
      ...G,
      children: [I, ee]
    }), (e as any)[48] = I, (e as any)[49] = ee, (e as any)[50] = se) : se = (e as any)[50];
    let re: any;
    return ((e as any)[51] as any) !== (R as any) || ((e as any)[52] as any) !== (B as any) || ((e as any)[53] as any) !== (se as any) ? (re = ((s as any).jsxs as any)("div", {
      "aria-live": "polite",
      "data-stage": R,
      "data-testid": "credential-mint-progress",
      role: "status",
      ...D,
      children: [B, se]
    }), (e as any)[51] = R, (e as any)[52] = B, (e as any)[53] = se, (e as any)[54] = re) : re = (e as any)[54], re;
  }
  if ((z as any) === ("intro" as any)) {
    let h: any;
    ((e as any)[55] as any) !== (p as any) ? (h = (ds as any)(hs, p), (e as any)[55] = p, (e as any)[56] = h) : h = (e as any)[56];
    let C: any;
    ((e as any)[57] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (C = {
      className: "sand-1heor9g sand-ujl8zx sand-1ypdohk"
    }, (e as any)[57] = C) : C = (e as any)[57];
    let w: any;
    ((e as any)[58] as any) !== (h as any) ? (w = {
      ...h,
      ...C,
      href: hs
    }, (e as any)[58] = h, (e as any)[59] = w) : w = (e as any)[59];
    const R: any = w;
    let D: any = null;
    if (c && !u) {
      let K: any;
      ((e as any)[60] as any) !== (R as any) ? (K = ((s as any).jsx as any)(m, {
        id: "M+nO30",
        components: {
          0: ((s as any).jsx as any)("a", {
            ...R,
            rel: "noopener noreferrer",
            target: "_blank"
          })
        }
      }), (e as any)[60] = R, (e as any)[61] = K) : K = (e as any)[61], D = K;
    } else if (!c && u) {
      let K: any;
      ((e as any)[62] as any) !== (R as any) ? (K = ((s as any).jsx as any)(m, {
        id: "8n0E3W",
        components: {
          0: ((s as any).jsx as any)("a", {
            ...R,
            rel: "noopener noreferrer",
            target: "_blank"
          })
        }
      }), (e as any)[62] = R, (e as any)[63] = K) : K = (e as any)[63], D = K;
    } else if (!c) {
      let K: any;
      ((e as any)[64] as any) !== (R as any) ? (K = ((s as any).jsx as any)(m, {
        id: "gMoVaM",
        components: {
          0: ((s as any).jsx as any)("a", {
            ...R,
            rel: "noopener noreferrer",
            target: "_blank"
          })
        }
      }), (e as any)[64] = R, (e as any)[65] = K) : K = (e as any)[65], D = K;
    }
    let $: any;
    ((e as any)[66] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? ($ = {
      className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
    }, (e as any)[66] = $) : $ = (e as any)[66];
    let U: any;
    ((e as any)[67] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (U = (qe as any)((nn as any).intro), (e as any)[67] = U) : U = (e as any)[67];
    let B: any;
    ((e as any)[68] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (B = ((s as any).jsx as any)(k, {
      color: "secondary",
      size: "md",
      ...U,
      children: ((s as any).jsx as any)(m, {
        id: "yNDjKk",
        values: {
          vaultName: Je
        }
      })
    }), (e as any)[68] = B) : B = (e as any)[68];
    let G: any;
    ((e as any)[69] as any) !== (D as any) ? (G = (D as any) === (null as any) ? null : ((s as any).jsx as any)(k, {
      color: "secondary",
      size: "md",
      className: "sand-11gisft",
      children: D
    }), (e as any)[69] = D, (e as any)[70] = G) : G = (e as any)[70];
    let I: any;
    ((e as any)[71] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (I = {
      className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-1a02dak"
    }, (e as any)[71] = I) : I = (e as any)[71];
    let ee: any;
    ((e as any)[72] as any) !== (c as any) ? (ee = c ? ((s as any).jsx as any)(ne, {
      onClick: (): any => (_ as any)("pick"),
      size: "md",
      type: "button",
      variant: "primary",
      children: ((s as any).jsx as any)(m, {
        id: "Timamj"
      })
    }) : null, (e as any)[72] = c, (e as any)[73] = ee) : ee = (e as any)[73];
    let se: any;
    ((e as any)[74] as any) !== (c as any) || ((e as any)[75] as any) !== (u as any) ? (se = u && !c ? ((s as any).jsx as any)(ne, {
      onClick: (): any => (_ as any)("token"),
      size: "md",
      type: "button",
      variant: "primary",
      children: ((s as any).jsx as any)(m, {
        id: "3kACLg"
      })
    }) : null, (e as any)[74] = c, (e as any)[75] = u, (e as any)[76] = se) : se = (e as any)[76];
    let re: any;
    ((e as any)[77] as any) !== (ee as any) || ((e as any)[78] as any) !== (se as any) ? (re = ((s as any).jsxs as any)("span", {
      ...I,
      children: [ee, se]
    }), (e as any)[77] = ee, (e as any)[78] = se, (e as any)[79] = re) : re = (e as any)[79];
    const W: any = c && u ? fe : null;
    let ke: any;
    return ((e as any)[80] as any) !== (G as any) || ((e as any)[81] as any) !== (re as any) || ((e as any)[82] as any) !== (W as any) ? (ke = ((s as any).jsxs as any)("div", {
      ...$,
      children: [B, G, re, W]
    }), (e as any)[80] = G, (e as any)[81] = re, (e as any)[82] = W, (e as any)[83] = ke) : ke = (e as any)[83], ke;
  }
  if ((z as any) === ("token" as any)) {
    let h: any;
    ((e as any)[84] as any) !== (v as any) || ((e as any)[85] as any) !== (n as any) ? (h = (w: any): any => {
      (n as any)(null), (q as any)(null), ((((v as any).start as any)({
        serviceAccountToken: w
      }) as any).catch as any)((R: any): any => {
        (q as any)((Se as any)(R));
      });
    }, (e as any)[84] = v, (e as any)[85] = n, (e as any)[86] = h) : h = (e as any)[86];
    let C: any;
    return ((e as any)[87] as any) !== (L as any) || ((e as any)[88] as any) !== ((v as any).isMinting as any) || ((e as any)[89] as any) !== (h as any) || ((e as any)[90] as any) !== (A as any) ? (C = ((s as any).jsx as any)(os, {
      error: A,
      isPending: (v as any).isMinting,
      onCancel: L,
      onSubmit: h
    }), (e as any)[87] = L, (e as any)[88] = (v as any).isMinting, (e as any)[89] = h, (e as any)[90] = A, (e as any)[91] = C) : C = (e as any)[91], C;
  }
  if (((v as any).readiness as any) == (null as any)) {
    let h: any, C: any;
    ((e as any)[92] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = {
      className: "sand-78zum5 sand-6s0dn4 sand-883omv sand-21xpn4"
    }, C = ((s as any).jsx as any)(ss, {
      size: 18,
      borderWidth: 2
    }), (e as any)[92] = h, (e as any)[93] = C) : (h = (e as any)[92], C = (e as any)[93]);
    let w: any;
    return ((e as any)[94] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = ((s as any).jsxs as any)("div", {
      ...h,
      children: [C, ((s as any).jsx as any)(k, {
        color: "secondary",
        size: "md",
        children: ((s as any).jsx as any)(m, {
          id: "Pwqkdw"
        })
      })]
    }), (e as any)[94] = w) : w = (e as any)[94], w;
  }
  let te: any;
  ((e as any)[95] as any) !== (p as any) ? (te = (ds as any)(xs, p), (e as any)[95] = p, (e as any)[96] = te) : te = (e as any)[96];
  let Q: any;
  ((e as any)[97] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Q = {
    className: "sand-1heor9g sand-ujl8zx sand-1ypdohk"
  }, (e as any)[97] = Q) : Q = (e as any)[97];
  let X: any;
  ((e as any)[98] as any) !== (te as any) ? (X = {
    ...te,
    ...Q,
    href: xs
  }, (e as any)[98] = te, (e as any)[99] = X) : X = (e as any)[99];
  const J: any = X;
  if ((((v as any).readiness as any).state as any) === ("integration-off" as any)) {
    let h: any;
    ((e as any)[100] as any) !== (L as any) ? (h = (I: any): any => {
      I || (L as any)();
    }, (e as any)[100] = L, (e as any)[101] = h) : h = (e as any)[101];
    let C: any;
    ((e as any)[102] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (C = ((s as any).jsx as any)((xe as any).Title, {
      children: ((s as any).jsx as any)(m, {
        id: "30iDDf"
      })
    }), (e as any)[102] = C) : C = (e as any)[102];
    let w: any;
    ((e as any)[103] as any) !== (J as any) ? (w = ((s as any).jsxs as any)((xe as any).Header, {
      children: [C, ((s as any).jsx as any)((xe as any).Description, {
        children: ((s as any).jsx as any)(m, {
          id: "g+D903",
          components: {
            0: ((s as any).jsx as any)("a", {
              ...J,
              rel: "noopener noreferrer",
              target: "_blank"
            })
          }
        })
      })]
    }), (e as any)[103] = J, (e as any)[104] = w) : w = (e as any)[104];
    let R: any;
    ((e as any)[105] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (R = ((s as any).jsx as any)(m, {
      id: "dEgA5A"
    }), (e as any)[105] = R) : R = (e as any)[105];
    let D: any;
    ((e as any)[106] as any) !== (L as any) ? (D = ((s as any).jsx as any)((xe as any).Action, {
      onClick: L,
      children: R
    }), (e as any)[106] = L, (e as any)[107] = D) : D = (e as any)[107];
    let $: any;
    ((e as any)[108] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? ($ = ((s as any).jsx as any)(m, {
      id: "6gRgw8"
    }), (e as any)[108] = $) : $ = (e as any)[108];
    let U: any;
    ((e as any)[109] as any) !== ((v as any).isCheckingReadiness as any) || ((e as any)[110] as any) !== ((v as any).refreshReadiness as any) ? (U = ((s as any).jsx as any)((xe as any).Action, {
      disabled: (v as any).isCheckingReadiness,
      onClick: (v as any).refreshReadiness,
      variant: "primary",
      children: $
    }), (e as any)[109] = (v as any).isCheckingReadiness, (e as any)[110] = (v as any).refreshReadiness, (e as any)[111] = U) : U = (e as any)[111];
    let B: any;
    ((e as any)[112] as any) !== (D as any) || ((e as any)[113] as any) !== (U as any) ? (B = ((s as any).jsxs as any)((xe as any).ActionBar, {
      children: [D, U]
    }), (e as any)[112] = D, (e as any)[113] = U, (e as any)[114] = B) : B = (e as any)[114];
    let G: any;
    return ((e as any)[115] as any) !== (h as any) || ((e as any)[116] as any) !== (w as any) || ((e as any)[117] as any) !== (B as any) ? (G = ((s as any).jsxs as any)((xe as any).Root, {
      onOpenChange: h,
      open: !0,
      role: "alertdialog",
      variant: "rich",
      width: 440,
      children: [w, B]
    }), (e as any)[115] = h, (e as any)[116] = w, (e as any)[117] = B, (e as any)[118] = G) : G = (e as any)[118], G;
  }
  if ((((v as any).readiness as any).state as any) === ("app-unreachable" as any)) {
    let h: any;
    ((e as any)[119] as any) !== (L as any) ? (h = (Us: any): any => {
      Us || (L as any)();
    }, (e as any)[119] = L, (e as any)[120] = h) : h = (e as any)[120];
    let C: any;
    ((e as any)[121] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (C = ((s as any).jsx as any)((xe as any).Title, {
      children: ((s as any).jsx as any)(m, {
        id: "lMg8bZ"
      })
    }), (e as any)[121] = C) : C = (e as any)[121];
    let w: any;
    ((e as any)[122] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = ((s as any).jsxs as any)((xe as any).Header, {
      children: [C, ((s as any).jsx as any)((xe as any).Description, {
        children: ((s as any).jsx as any)(m, {
          id: "7hvNMc"
        })
      })]
    }), (e as any)[122] = w) : w = (e as any)[122];
    let R: any, D: any, $: any;
    ((e as any)[123] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (R = {
      className: "sand-78zum5 sand-dt5ytf sand-ou54vl"
    }, D = {
      className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d sand-1ghz6dp sand-1717udv sand-3ct3a4"
    }, $ = {
      className: "sand-78zum5 sand-1cy8zhl sand-1v2ro7d"
    }, (e as any)[123] = R, (e as any)[124] = D, (e as any)[125] = $) : (R = (e as any)[123], D = (e as any)[124], $ = (e as any)[125]);
    let U: any, B: any;
    ((e as any)[126] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (U = ((s as any).jsx as any)(k, {
      as: "span",
      size: "sm",
      weight: "medium",
      className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-vy4d1p sand-xk0z11 sand-1e6avla sand-i07v4r sand-19aaqeu",
      children: "1"
    }), B = {
      className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-euugli sand-1nn3v0j"
    }, (e as any)[126] = U, (e as any)[127] = B) : (U = (e as any)[126], B = (e as any)[127]);
    let G: any;
    ((e as any)[128] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (G = ((s as any).jsx as any)(k, {
      size: "md",
      weight: "medium",
      children: ((s as any).jsx as any)(m, {
        id: "g7GiX4"
      })
    }), (e as any)[128] = G) : G = (e as any)[128];
    let I: any;
    ((e as any)[129] as any) !== (J as any) ? (I = ((s as any).jsxs as any)("li", {
      ...$,
      children: [U, ((s as any).jsxs as any)("span", {
        ...B,
        children: [G, ((s as any).jsx as any)(k, {
          color: "secondary",
          size: "sm",
          children: ((s as any).jsx as any)(m, {
            id: "l4L0r4",
            components: {
              0: ((s as any).jsx as any)("a", {
                ...J,
                rel: "noopener noreferrer",
                target: "_blank"
              })
            }
          })
        })]
      })]
    }), (e as any)[129] = J, (e as any)[130] = I) : I = (e as any)[130];
    let ee: any;
    ((e as any)[131] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ee = {
      className: "sand-78zum5 sand-1cy8zhl sand-1v2ro7d"
    }, (e as any)[131] = ee) : ee = (e as any)[131];
    let se: any, re: any;
    ((e as any)[132] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (se = ((s as any).jsx as any)(k, {
      as: "span",
      size: "sm",
      weight: "medium",
      className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-vy4d1p sand-xk0z11 sand-1e6avla sand-i07v4r sand-19aaqeu",
      children: "2"
    }), re = {
      className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-euugli sand-1nn3v0j"
    }, (e as any)[132] = se, (e as any)[133] = re) : (se = (e as any)[132], re = (e as any)[133]);
    let W: any, ke: any;
    ((e as any)[134] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (W = ((s as any).jsxs as any)("li", {
      ...ee,
      children: [se, ((s as any).jsx as any)("span", {
        ...re,
        children: ((s as any).jsx as any)(k, {
          size: "md",
          weight: "medium",
          children: ((s as any).jsx as any)(m, {
            id: "gmBWuh"
          })
        })
      })]
    }), ke = {
      className: "sand-78zum5 sand-1cy8zhl sand-1v2ro7d"
    }, (e as any)[134] = W, (e as any)[135] = ke) : (W = (e as any)[134], ke = (e as any)[135]);
    let K: any, $e: any;
    ((e as any)[136] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (K = ((s as any).jsx as any)(k, {
      as: "span",
      size: "sm",
      weight: "medium",
      className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-vy4d1p sand-xk0z11 sand-1e6avla sand-i07v4r sand-19aaqeu",
      children: "3"
    }), $e = {
      className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-euugli sand-1nn3v0j"
    }, (e as any)[136] = K, (e as any)[137] = $e) : (K = (e as any)[136], $e = (e as any)[137]);
    let Fe: any;
    ((e as any)[138] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Fe = ((s as any).jsx as any)(k, {
      size: "md",
      weight: "medium",
      children: ((s as any).jsx as any)(m, {
        id: "KM+S+M"
      })
    }), (e as any)[138] = Fe) : Fe = (e as any)[138];
    let Be: any, Ge: any;
    ((e as any)[139] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Be = ((s as any).jsxs as any)("li", {
      ...ke,
      children: [K, ((s as any).jsxs as any)("span", {
        ...$e,
        children: [Fe, ((s as any).jsx as any)(k, {
          color: "secondary",
          size: "sm",
          children: ((s as any).jsx as any)(m, {
            id: "9vXkA2"
          })
        })]
      })]
    }), Ge = {
      className: "sand-78zum5 sand-1cy8zhl sand-1v2ro7d"
    }, (e as any)[139] = Be, (e as any)[140] = Ge) : (Be = (e as any)[139], Ge = (e as any)[140]);
    let We: any, Ve: any;
    ((e as any)[141] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (We = ((s as any).jsx as any)(k, {
      as: "span",
      size: "sm",
      weight: "medium",
      className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-vy4d1p sand-xk0z11 sand-1e6avla sand-i07v4r sand-19aaqeu",
      children: "4"
    }), Ve = {
      className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-euugli sand-1nn3v0j"
    }, (e as any)[141] = We, (e as any)[142] = Ve) : (We = (e as any)[141], Ve = (e as any)[142]);
    let He: any;
    ((e as any)[143] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (He = ((s as any).jsx as any)(k, {
      size: "md",
      weight: "medium",
      children: ((s as any).jsx as any)(m, {
        id: "dY0atl"
      })
    }), (e as any)[143] = He) : He = (e as any)[143];
    let Ke: any;
    ((e as any)[144] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ke = ((s as any).jsxs as any)("li", {
      ...Ge,
      children: [We, ((s as any).jsxs as any)("span", {
        ...Ve,
        children: [He, ((s as any).jsx as any)(k, {
          color: "secondary",
          size: "sm",
          children: ((s as any).jsx as any)(m, {
            id: "0JXV/h"
          })
        })]
      })]
    }), (e as any)[144] = Ke) : Ke = (e as any)[144];
    let we: any;
    ((e as any)[145] as any) !== (I as any) ? (we = ((s as any).jsxs as any)("ol", {
      ...D,
      children: [I, W, Be, Ke]
    }), (e as any)[145] = I, (e as any)[146] = we) : we = (e as any)[146];
    let Ye: any;
    ((e as any)[147] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ye = ((s as any).jsx as any)(k, {
      color: "secondary",
      size: "sm",
      children: ((s as any).jsx as any)(m, {
        id: "s1ydMg"
      })
    }), (e as any)[147] = Ye) : Ye = (e as any)[147];
    const ls: any = u ? fe : null;
    let Ae: any;
    ((e as any)[148] as any) !== (we as any) || ((e as any)[149] as any) !== (ls as any) ? (Ae = ((s as any).jsx as any)((xe as any).Body, {
      children: ((s as any).jsxs as any)("div", {
        ...R,
        children: [we, Ye, ls]
      })
    }), (e as any)[148] = we, (e as any)[149] = ls, (e as any)[150] = Ae) : Ae = (e as any)[150];
    let Ze: any;
    ((e as any)[151] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ze = ((s as any).jsx as any)(m, {
      id: "dEgA5A"
    }), (e as any)[151] = Ze) : Ze = (e as any)[151];
    let Ee: any;
    ((e as any)[152] as any) !== (L as any) ? (Ee = ((s as any).jsx as any)((xe as any).Action, {
      onClick: L,
      children: Ze
    }), (e as any)[152] = L, (e as any)[153] = Ee) : Ee = (e as any)[153];
    let Qe: any;
    ((e as any)[154] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Qe = ((s as any).jsx as any)(m, {
      id: "6gRgw8"
    }), (e as any)[154] = Qe) : Qe = (e as any)[154];
    let Re: any;
    ((e as any)[155] as any) !== ((v as any).isCheckingReadiness as any) || ((e as any)[156] as any) !== ((v as any).refreshReadiness as any) ? (Re = ((s as any).jsx as any)((xe as any).Action, {
      disabled: (v as any).isCheckingReadiness,
      onClick: (v as any).refreshReadiness,
      variant: "primary",
      children: Qe
    }), (e as any)[155] = (v as any).isCheckingReadiness, (e as any)[156] = (v as any).refreshReadiness, (e as any)[157] = Re) : Re = (e as any)[157];
    let Ie: any;
    ((e as any)[158] as any) !== (Ee as any) || ((e as any)[159] as any) !== (Re as any) ? (Ie = ((s as any).jsxs as any)((xe as any).ActionBar, {
      children: [Ee, Re]
    }), (e as any)[158] = Ee, (e as any)[159] = Re, (e as any)[160] = Ie) : Ie = (e as any)[160];
    let Xe: any;
    return ((e as any)[161] as any) !== (h as any) || ((e as any)[162] as any) !== (Ae as any) || ((e as any)[163] as any) !== (Ie as any) ? (Xe = ((s as any).jsxs as any)((xe as any).Root, {
      onOpenChange: h,
      open: !0,
      role: "alertdialog",
      variant: "rich",
      width: 440,
      children: [w, Ae, Ie]
    }), (e as any)[161] = h, (e as any)[162] = Ae, (e as any)[163] = Ie, (e as any)[164] = Xe) : Xe = (e as any)[164], Xe;
  }
  if ((((v as any).readiness as any).state as any) !== ("ready" as any)) {
    let h: any = null;
    if ((((v as any).readiness as any).state as any) === ("error" as any)) {
      let I: any;
      ((e as any)[165] as any) !== (((v as any).readiness as any).detail as any) ? (I = ((s as any).jsx as any)(k, {
        color: "red",
        size: "md",
        children: ((v as any).readiness as any).detail
      }), (e as any)[165] = ((v as any).readiness as any).detail, (e as any)[166] = I) : I = (e as any)[166], h = I;
    } else if ((((v as any).readiness as any).state as any) === ("missing-cli" as any) && u) {
      let I: any;
      ((e as any)[167] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (I = ((s as any).jsx as any)(k, {
        color: "secondary",
        size: "md",
        className: "sand-11gisft",
        children: ((s as any).jsx as any)(m, {
          id: "SDUL4S"
        })
      }), (e as any)[167] = I) : I = (e as any)[167], h = I;
    } else if ((((v as any).readiness as any).state as any) === ("missing-cli" as any) && !c) {
      let I: any;
      ((e as any)[168] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (I = ((s as any).jsx as any)(k, {
        color: "secondary",
        size: "md",
        className: "sand-11gisft",
        children: ((s as any).jsx as any)(m, {
          id: "H7CDxN"
        })
      }), (e as any)[168] = I) : I = (e as any)[168], h = I;
    }
    let C: any;
    ((e as any)[169] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (C = {
      className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
    }, (e as any)[169] = C) : C = (e as any)[169];
    const w: any = h;
    let R: any;
    ((e as any)[170] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (R = {
      className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-1a02dak"
    }, (e as any)[170] = R) : R = (e as any)[170];
    let D: any;
    ((e as any)[171] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (D = ((s as any).jsx as any)(m, {
      id: "Timamj"
    }), (e as any)[171] = D) : D = (e as any)[171];
    let $: any;
    ((e as any)[172] as any) !== ((v as any).isCheckingReadiness as any) || ((e as any)[173] as any) !== ((v as any).refreshReadiness as any) ? ($ = ((s as any).jsx as any)(ne, {
      disabled: (v as any).isCheckingReadiness,
      onClick: (v as any).refreshReadiness,
      size: "md",
      type: "button",
      variant: "primary",
      children: D
    }), (e as any)[172] = (v as any).isCheckingReadiness, (e as any)[173] = (v as any).refreshReadiness, (e as any)[174] = $) : $ = (e as any)[174];
    let U: any;
    ((e as any)[175] as any) !== (Y as any) || ((e as any)[176] as any) !== ($ as any) ? (U = ((s as any).jsxs as any)("span", {
      ...R,
      children: [$, Y]
    }), (e as any)[175] = Y, (e as any)[176] = $, (e as any)[177] = U) : U = (e as any)[177];
    const B: any = u ? fe : null;
    let G: any;
    return ((e as any)[178] as any) !== (h as any) || ((e as any)[179] as any) !== (U as any) || ((e as any)[180] as any) !== (B as any) ? (G = ((s as any).jsxs as any)("div", {
      ...C,
      children: [w, U, B]
    }), (e as any)[178] = h, (e as any)[179] = U, (e as any)[180] = B, (e as any)[181] = G) : G = (e as any)[181], G;
  }
  let ce: any;
  ((e as any)[182] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ce = {
    className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
  }, (e as any)[182] = ce) : ce = (e as any)[182];
  let T: any;
  ((e as any)[183] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (T = {
    className: "sand-78zum5 sand-dt5ytf sand-167g77z"
  }, (e as any)[183] = T) : T = (e as any)[183];
  let he: any;
  if (((e as any)[184] as any) !== (V as any) || ((e as any)[185] as any) !== (H as any) || ((e as any)[186] as any) !== (P?.accountUuid as any)) {
    let h: any;
    ((e as any)[188] as any) !== (H as any) || ((e as any)[189] as any) !== (P?.accountUuid as any) ? (h = (C: any): any => {
      const w: any = ((H as any).has as any)((C as any).accountUuid),
        R: any = (P?.accountUuid as any) === ((C as any).accountUuid as any);
      return ((s as any).jsxs as any)("label", {
        ...({
          0: {
            className: "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-10dr8xq sand-qin4a2 sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-4pepcl sand-1ypdohk sand-jbqb8w sand-1iuyybk"
          },
          2: {
            className: "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-10dr8xq sand-qin4a2 sand-mkeg23 sand-1y0btm7 sand-4pepcl sand-1ypdohk sand-1tjqsyf sand-f1vpex"
          },
          1: {
            className: "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-10dr8xq sand-qin4a2 sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-4pepcl sand-jbqb8w sand-1iuyybk sand-t0e3qv sand-197sbye"
          },
          3: {
            className: "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-10dr8xq sand-qin4a2 sand-mkeg23 sand-1y0btm7 sand-4pepcl sand-1tjqsyf sand-f1vpex sand-t0e3qv sand-197sbye"
          }
        } as any)[((!!R as any) << (1 as any) as any) | ((!!w as any) << (0 as any) as any)],
        children: [((s as any).jsx as any)("input", {
          checked: R,
          disabled: w,
          name: "sand-1password-account",
          onChange: (): any => (N as any)((C as any).accountUuid),
          type: "radio",
          value: (C as any).accountUuid,
          className: "sand-10l6tqk sand-1i1rx1s sand-jm9jq1 sand-1ghz6dp sand-g01cxk sand-47corl"
        }), ((s as any).jsx as any)(Fs, {
          checked: R,
          disabled: w
        }), ((s as any).jsxs as any)("span", {
          className: "sand-78zum5 sand-dt5ytf sand-euugli sand-1iyjqo2",
          children: [((s as any).jsx as any)(k, {
            size: "lg",
            weight: "medium",
            className: "sand-euugli sand-j0a0fe",
            children: (C as any).email
          }), ((s as any).jsx as any)(k, {
            color: "secondary",
            size: "sm",
            className: "sand-euugli sand-j0a0fe",
            children: (C as any).url
          })]
        })]
      }, (C as any).accountUuid);
    }, (e as any)[188] = H, (e as any)[189] = P?.accountUuid, (e as any)[190] = h) : h = (e as any)[190], he = ((V as any).map as any)(h), (e as any)[184] = V, (e as any)[185] = H, (e as any)[186] = P?.accountUuid, (e as any)[187] = he;
  } else he = (e as any)[187];
  let be: any;
  ((e as any)[191] as any) !== (he as any) ? (be = ((s as any).jsx as any)("div", {
    "aria-label": Te,
    role: "radiogroup",
    ...T,
    children: he
  }), (e as any)[191] = he, (e as any)[192] = be) : be = (e as any)[192];
  let ge: any;
  ((e as any)[193] as any) !== (r as any) || ((e as any)[194] as any) !== (P as any) ? (ge = (P as any) != (null as any) && ((r as any)[(P as any).accountUuid] as any) != (null as any) ? ((s as any).jsx as any)(k, {
    color: "red",
    size: "md",
    children: (r as any)[(P as any).accountUuid]
  }) : null, (e as any)[193] = r, (e as any)[194] = P, (e as any)[195] = ge) : ge = (e as any)[195];
  let ze: any;
  ((e as any)[196] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ze = {
    className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-1a02dak"
  }, (e as any)[196] = ze) : ze = (e as any)[196];
  const ts: any = (P as any) == (null as any);
  let Oe: any;
  ((e as any)[197] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Oe = ((s as any).jsx as any)(m, {
    id: "Timamj"
  }), (e as any)[197] = Oe) : Oe = (e as any)[197];
  let Ne: any;
  ((e as any)[198] as any) !== (me as any) || ((e as any)[199] as any) !== (ts as any) ? (Ne = ((s as any).jsx as any)(ne, {
    disabled: ts,
    onClick: me,
    size: "md",
    type: "button",
    variant: "primary",
    children: Oe
  }), (e as any)[198] = me, (e as any)[199] = ts, (e as any)[200] = Ne) : Ne = (e as any)[200];
  let Ce: any;
  ((e as any)[201] as any) !== (Y as any) || ((e as any)[202] as any) !== (Ne as any) ? (Ce = ((s as any).jsxs as any)("span", {
    ...ze,
    children: [Ne, Y]
  }), (e as any)[201] = Y, (e as any)[202] = Ne, (e as any)[203] = Ce) : Ce = (e as any)[203];
  let Le: any;
  return ((e as any)[204] as any) !== (be as any) || ((e as any)[205] as any) !== (ge as any) || ((e as any)[206] as any) !== (Ce as any) ? (Le = ((s as any).jsxs as any)("div", {
    ...ce,
    children: [be, ge, Ce]
  }), (e as any)[204] = be, (e as any)[205] = ge, (e as any)[206] = Ce, (e as any)[207] = Le) : Le = (e as any)[207], Le;
}
function tn(this: any): any {}
function ln(this: any): any {}
function an(this: any, y: any): any {
  try {
    return (new (URL as any)(((y as any).includes as any)("://") ? y : `https://${y}`) as any).hostname;
  } catch {
    return y;
  }
}
function ks(this: any, y: any): any {
  (ks as any).d = 1260;
  const e: any = ((je as any).c as any)(18),
    {
      account: n,
      items: i,
      failure: o,
      isSyncing: t
    }: any = y,
    {
      _: l
    }: any = (ve as any)();
  let j: any;
  if ((i as any) == (null as any) && (o as any) != (null as any)) {
    let c: any;
    ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = {
      className: "sand-78zum5 sand-6s0dn4 sand-ehausa sand-1lqmthn sand-13e3tqs"
    }, (e as any)[0] = c) : c = (e as any)[0];
    let u: any;
    ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = ((s as any).jsx as any)("div", {
      ...c,
      children: ((s as any).jsx as any)(k, {
        color: "secondary",
        size: "sm",
        children: ((s as any).jsx as any)(m, {
          id: "UAMTPZ"
        })
      })
    }), (e as any)[1] = u) : u = (e as any)[1], j = u;
  } else if ((i as any) == (null as any)) {
    let c: any, u: any;
    ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = {
      className: "sand-78zum5 sand-6s0dn4 sand-ehausa sand-1lqmthn sand-13e3tqs"
    }, u = ((s as any).jsx as any)(ss, {
      size: 14,
      borderWidth: 2
    }), (e as any)[2] = c, (e as any)[3] = u) : (c = (e as any)[2], u = (e as any)[3]);
    let f: any;
    ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = ((s as any).jsxs as any)("div", {
      ...c,
      children: [u, ((s as any).jsx as any)(k, {
        color: "secondary",
        size: "sm",
        children: ((s as any).jsx as any)(m, {
          id: "CU9sRu"
        })
      })]
    }), (e as any)[4] = f) : f = (e as any)[4], j = f;
  } else if (((i as any).length as any) === (0 as any)) {
    const c: any = (n as any).vaultName;
    let u: any;
    ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = {
      className: "sand-78zum5 sand-6s0dn4 sand-ehausa sand-1lqmthn sand-13e3tqs"
    }, (e as any)[5] = u) : u = (e as any)[5];
    let f: any;
    ((e as any)[6] as any) !== (c as any) ? (f = ((s as any).jsx as any)("div", {
      ...u,
      children: ((s as any).jsx as any)(k, {
        color: "secondary",
        size: "sm",
        children: ((s as any).jsx as any)(m, {
          id: "LhoDam",
          values: {
            vaultName: c
          }
        })
      })
    }), (e as any)[6] = c, (e as any)[7] = f) : f = (e as any)[7], j = f;
  } else {
    let c: any;
    ((e as any)[8] as any) !== (i as any) ? (c = ((i as any).map as any)(dn), (e as any)[8] = i, (e as any)[9] = c) : c = (e as any)[9], j = c;
  }
  const a: any = t || void 0;
  let x: any;
  ((e as any)[10] as any) !== (l as any) || ((e as any)[11] as any) !== ((n as any).vaultName as any) ? (x = (l as any)({
    id: "0T1/FY",
    values: {
      0: (n as any).vaultName
    }
  }), (e as any)[10] = l, (e as any)[11] = (n as any).vaultName, (e as any)[12] = x) : x = (e as any)[12];
  let g: any;
  ((e as any)[13] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = {
    className: "sand-78zum5 sand-dt5ytf sand-1xlntvz sand-2f45yy"
  }, (e as any)[13] = g) : g = (e as any)[13];
  let p: any;
  return ((e as any)[14] as any) !== (j as any) || ((e as any)[15] as any) !== (a as any) || ((e as any)[16] as any) !== (x as any) ? (p = ((s as any).jsx as any)("div", {
    "aria-busy": a,
    "aria-label": x,
    role: "group",
    ...g,
    children: j
  }), (e as any)[14] = j, (e as any)[15] = a, (e as any)[16] = x, (e as any)[17] = p) : p = (e as any)[17], p;
}
function dn(this: any, y: any): any {
  const e: any = ((y as any).sites as any)[0];
  return ((s as any).jsxs as any)("div", {
    className: "sand-78zum5 sand-6s0dn4 sand-1dbef6d sand-1lqmthn sand-13e3tqs sand-1q4ynmn sand-jbqb8w sand-urtx8w",
    children: [((s as any).jsx as any)("span", {
      className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-gd8bvy sand-1fgtraw sand-ur7f20 sand-1b8i4yy sand-1o0liin",
      children: ((s as any).jsx as any)(ps, {
        name: "key",
        size: "md"
      })
    }), ((s as any).jsxs as any)("span", {
      className: "sand-78zum5 sand-dt5ytf sand-euugli sand-1iyjqo2",
      children: [((s as any).jsx as any)(k, {
        size: "md",
        weight: "medium",
        className: "sand-euugli sand-j0a0fe",
        children: (y as any).title
      }), ((s as any).jsx as any)(k, {
        color: "secondary",
        size: "sm",
        className: "sand-euugli sand-j0a0fe",
        children: (e as any) == (null as any) ? (y as any).category : `${(y as any).category} · ${(an as any)(e)}`
      })]
    })]
  }, (y as any).credentialId);
}
function Ss(this: any, y: any): any {
  (Ss as any).d = 1257;
  const e: any = ((je as any).c as any)(81),
    {
      account: n,
      items: i,
      itemsFailure: o,
      mutations: t,
      onNotice: l,
      renewWithTokenEnabled: j
    }: any = y,
    {
      i18n: a,
      _: x
    }: any = (ve as any)(),
    g: any = (((cs as any)() as any).platform as any) === ("darwin" as any),
    [p, c]: any = ((_e as any).useState as any)(!1);
  let u: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = {
    open: !1,
    error: null
  }, (e as any)[0] = u) : u = (e as any)[0];
  const [f, S]: any = ((_e as any).useState as any)(u),
    _: any = ((n as any).lifecycleState as any) !== ("active" as any),
    z: any = ((n as any).accountUuid as any) === (Ds as any) || j && !g;
  let b: any;
  ((e as any)[1] as any) !== (l as any) ? (b = (T: any): any => {
    ((T as any).then as any)((): any => (l as any)(null), (he: any): any => (l as any)({
      kind: "error",
      text: (Se as any)(he)
    }));
  }, (e as any)[1] = l, (e as any)[2] = b) : b = (e as any)[2];
  const N: any = b;
  let d: any;
  ((e as any)[3] as any) !== (n as any) || ((e as any)[4] as any) !== (t as any) || ((e as any)[5] as any) !== (l as any) ? (d = (T: any): any => {
    (l as any)(null), (S as any)({
      open: !0,
      error: null
    }), ((((t as any).renew as any)(n, T) as any).then as any)((): any => (S as any)({
      open: !1,
      error: null
    }), (he: any): any => (S as any)({
      open: !0,
      error: (Se as any)(he)
    }));
  }, (e as any)[3] = n, (e as any)[4] = t, (e as any)[5] = l, (e as any)[6] = d) : d = (e as any)[6];
  const r: any = d;
  let E: any;
  ((e as any)[7] as any) !== (t as any) || ((e as any)[8] as any) !== (l as any) ? (E = (): any => {
    (c as any)(!0), ((((((t as any).sync as any)() as any).then as any)((): any => (l as any)(null), (T: any): any => (l as any)({
      kind: "error",
      text: (Se as any)(T)
    })) as any).finally as any)((): any => (c as any)(!1));
  }, (e as any)[7] = t, (e as any)[8] = l, (e as any)[9] = E) : E = (e as any)[9];
  const A: any = E,
    q: any = i?.length ?? (n as any).itemCount,
    M: any = ((n as any).accountEmail as any) == (null as any) ? null : (n as any).vaultName;
  let F: any;
  ((e as any)[10] as any) !== (x as any) || ((e as any)[11] as any) !== (q as any) ? (F = (x as any)({
    id: "55UuKo",
    values: {
      itemCount: q
    }
  }), (e as any)[10] = x, (e as any)[11] = q, (e as any)[12] = F) : F = (e as any)[12];
  let O: any;
  ((e as any)[13] as any) !== (x as any) || ((e as any)[14] as any) !== ((n as any).lastSuccessfulSyncAtMs as any) || ((e as any)[15] as any) !== (a as any) ? (O = ((n as any).lastSuccessfulSyncAtMs as any) == (null as any) ? (x as any)({
    id: "oL535e"
  }) : (x as any)({
    id: "f9XSNs",
    values: {
      0: ((a as any).date as any)(new (Date as any)((n as any).lastSuccessfulSyncAtMs), {
        timeStyle: "short"
      })
    }
  }), (e as any)[13] = x, (e as any)[14] = (n as any).lastSuccessfulSyncAtMs, (e as any)[15] = a, (e as any)[16] = O) : O = (e as any)[16];
  let v: any;
  ((e as any)[17] as any) !== (M as any) || ((e as any)[18] as any) !== (F as any) || ((e as any)[19] as any) !== (O as any) ? (v = (([M, F, O] as any).filter as any)(cn), (e as any)[17] = M, (e as any)[18] = F, (e as any)[19] = O, (e as any)[20] = v) : v = (e as any)[20];
  const oe: any = ((v as any).join as any)(" · "),
    V: any = (n as any).accountEmail ?? (n as any).vaultName;
  let ye: any;
  ((e as any)[21] as any) !== ((n as any).expiresAtMs as any) || ((e as any)[22] as any) !== (a as any) ? (ye = ((n as any).expiresAtMs as any) == (null as any) ? null : ((a as any).date as any)(new (Date as any)((n as any).expiresAtMs), {
    dateStyle: "medium"
  }), (e as any)[21] = (n as any).expiresAtMs, (e as any)[22] = a, (e as any)[23] = ye) : ye = (e as any)[23];
  const H: any = ye;
  let le: any = null;
  e: switch ((n as any).lifecycleState) {
    case "active":
      break e;
    case "expiring":
    case "grace":
      {
        let T: any;
        ((e as any)[24] as any) !== (H as any) ? (T = ((s as any).jsx as any)(k, {
          color: "yellow",
          size: "sm",
          children: (H as any) == (null as any) ? ((s as any).jsx as any)(m, {
            id: "FKdxEj"
          }) : ((s as any).jsx as any)(m, {
            id: "/BWOZr",
            values: {
              expiresAt: H
            }
          })
        }), (e as any)[24] = H, (e as any)[25] = T) : T = (e as any)[25], le = T;
        break e;
      }
    case "expired":
      {
        let T: any;
        ((e as any)[26] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (T = ((s as any).jsx as any)(k, {
          color: "red",
          size: "sm",
          children: ((s as any).jsx as any)(m, {
            id: "T1HX80"
          })
        }), (e as any)[26] = T) : T = (e as any)[26], le = T;
        break e;
      }
    case "provider-rejected":
      {
        let T: any;
        ((e as any)[27] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (T = ((s as any).jsx as any)(k, {
          color: "red",
          size: "sm",
          children: ((s as any).jsx as any)(m, {
            id: "fs0ZUQ"
          })
        }), (e as any)[27] = T) : T = (e as any)[27], le = T;
      }
  }
  let P: any;
  ((e as any)[28] as any) !== ((n as any).lastSyncErrorCode as any) || ((e as any)[29] as any) !== ((n as any).lifecycleState as any) ? (P = ((n as any).lastSyncErrorCode as any) == (null as any) || ((n as any).lifecycleState as any) === ("provider-rejected" as any) ? null : ((s as any).jsx as any)(k, {
    color: "red",
    size: "sm",
    children: ((s as any).jsx as any)(m, {
      id: "vANlhH"
    })
  }), (e as any)[28] = (n as any).lastSyncErrorCode, (e as any)[29] = (n as any).lifecycleState, (e as any)[30] = P) : P = (e as any)[30];
  const pe: any = P;
  let me: any;
  ((e as any)[31] as any) !== (le as any) || ((e as any)[32] as any) !== (pe as any) ? (me = (le as any) == (null as any) && (pe as any) == (null as any) ? void 0 : ((s as any).jsxs as any)((s as any).Fragment, {
    children: [le, pe]
  }), (e as any)[31] = le, (e as any)[32] = pe, (e as any)[33] = me) : me = (e as any)[33];
  const ue: any = me;
  let L: any;
  ((e as any)[34] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (L = {
    className: "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-13a6bvl sand-ehausa"
  }, (e as any)[34] = L) : L = (e as any)[34];
  let ae: any;
  ((e as any)[35] as any) !== (n as any) || ((e as any)[36] as any) !== (t as any) || ((e as any)[37] as any) !== (_ as any) || ((e as any)[38] as any) !== ((f as any).open as any) || ((e as any)[39] as any) !== (z as any) || ((e as any)[40] as any) !== (N as any) ? (ae = _ ? ((s as any).jsx as any)(ne, {
    disabled: (t as any).isPending || (f as any).open,
    onClick: (): any => z ? (S as any)({
      open: !0,
      error: null
    }) : (N as any)(((t as any).renew as any)(n)),
    size: "sm",
    type: "button",
    variant: "primary",
    children: ((s as any).jsx as any)(m, {
      id: "EkH9pt"
    })
  }) : null, (e as any)[35] = n, (e as any)[36] = t, (e as any)[37] = _, (e as any)[38] = (f as any).open, (e as any)[39] = z, (e as any)[40] = N, (e as any)[41] = ae) : ae = (e as any)[41];
  let ie: any;
  ((e as any)[42] as any) !== (p as any) ? (ie = p ? ((s as any).jsx as any)(m, {
    id: "ZDY7Fy"
  }) : ((s as any).jsx as any)(m, {
    id: "VclML5"
  }), (e as any)[42] = p, (e as any)[43] = ie) : ie = (e as any)[43];
  let Y: any;
  ((e as any)[44] as any) !== ((t as any).isPending as any) || ((e as any)[45] as any) !== (A as any) || ((e as any)[46] as any) !== (ie as any) ? (Y = ((s as any).jsx as any)(ne, {
    disabled: (t as any).isPending,
    onClick: A,
    size: "sm",
    type: "button",
    variant: "secondary",
    children: ie
  }), (e as any)[44] = (t as any).isPending, (e as any)[45] = A, (e as any)[46] = ie, (e as any)[47] = Y) : Y = (e as any)[47];
  let Z: any;
  ((e as any)[48] as any) !== ((n as any).connectionId as any) || ((e as any)[49] as any) !== (t as any) || ((e as any)[50] as any) !== (N as any) ? (Z = (): any => (N as any)(((t as any).disconnect as any)((n as any).connectionId)), (e as any)[48] = (n as any).connectionId, (e as any)[49] = t, (e as any)[50] = N, (e as any)[51] = Z) : Z = (e as any)[51];
  let de: any;
  ((e as any)[52] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (de = ((s as any).jsx as any)(m, {
    id: "t/YqKh"
  }), (e as any)[52] = de) : de = (e as any)[52];
  let fe: any;
  ((e as any)[53] as any) !== ((t as any).isPending as any) || ((e as any)[54] as any) !== (Z as any) ? (fe = ((s as any).jsx as any)(ne, {
    disabled: (t as any).isPending,
    onClick: Z,
    size: "sm",
    type: "button",
    variant: "secondary",
    children: de
  }), (e as any)[53] = (t as any).isPending, (e as any)[54] = Z, (e as any)[55] = fe) : fe = (e as any)[55];
  let te: any;
  ((e as any)[56] as any) !== (ae as any) || ((e as any)[57] as any) !== (Y as any) || ((e as any)[58] as any) !== (fe as any) ? (te = ((s as any).jsxs as any)("span", {
    ...L,
    children: [ae, Y, fe]
  }), (e as any)[56] = ae, (e as any)[57] = Y, (e as any)[58] = fe, (e as any)[59] = te) : te = (e as any)[59];
  let Q: any;
  ((e as any)[60] as any) !== (ue as any) || ((e as any)[61] as any) !== (V as any) || ((e as any)[62] as any) !== (oe as any) || ((e as any)[63] as any) !== (te as any) ? (Q = ((s as any).jsx as any)(Me, {
    anchorId: De,
    description: oe,
    extraCopy: ue,
    label: V,
    variant: "card",
    children: te
  }), (e as any)[60] = ue, (e as any)[61] = V, (e as any)[62] = oe, (e as any)[63] = te, (e as any)[64] = Q) : Q = (e as any)[64];
  let X: any;
  ((e as any)[65] as any) !== ((n as any).vaultName as any) || ((e as any)[66] as any) !== ((t as any).isPending as any) || ((e as any)[67] as any) !== (r as any) || ((e as any)[68] as any) !== ((f as any).error as any) || ((e as any)[69] as any) !== ((f as any).open as any) ? (X = (f as any).open ? ((s as any).jsx as any)("div", {
    className: "sand-12ffz05 sand-2f45yy",
    children: ((s as any).jsx as any)(os, {
      error: (f as any).error,
      intent: "renew",
      isPending: (t as any).isPending,
      onCancel: (): any => (S as any)({
        open: !1,
        error: null
      }),
      onSubmit: r,
      vaultName: (n as any).vaultName
    })
  }) : null, (e as any)[65] = (n as any).vaultName, (e as any)[66] = (t as any).isPending, (e as any)[67] = r, (e as any)[68] = (f as any).error, (e as any)[69] = (f as any).open, (e as any)[70] = X) : X = (e as any)[70];
  let J: any;
  ((e as any)[71] as any) !== (n as any) || ((e as any)[72] as any) !== (p as any) || ((e as any)[73] as any) !== (i as any) || ((e as any)[74] as any) !== (o as any) ? (J = ((s as any).jsx as any)(ks, {
    account: n,
    failure: o,
    isSyncing: p,
    items: i
  }), (e as any)[71] = n, (e as any)[72] = p, (e as any)[73] = i, (e as any)[74] = o, (e as any)[75] = J) : J = (e as any)[75];
  let ce: any;
  return ((e as any)[76] as any) !== (V as any) || ((e as any)[77] as any) !== (Q as any) || ((e as any)[78] as any) !== (X as any) || ((e as any)[79] as any) !== (J as any) ? (ce = ((s as any).jsxs as any)("div", {
    "aria-label": V,
    role: "group",
    children: [Q, X, J]
  }), (e as any)[76] = V, (e as any)[77] = Q, (e as any)[78] = X, (e as any)[79] = J, (e as any)[80] = ce) : ce = (e as any)[80], ce;
}
function cn(this: any, y: any): any {
  return (y as any) != (null as any);
}
function zs(this: any, y: any): any {
  (zs as any).d = 1256;
  const e: any = ((je as any).c as any)(33),
    {
      account: n,
      mutations: i,
      onNotice: o
    }: any = y,
    {
      _: t
    }: any = (ve as any)(),
    l: any = (n as any).brokerState ?? "connected";
  let j: any;
  ((e as any)[0] as any) !== (t as any) ? (j = (t as any)({
    id: "rQ+n+C"
  }), (e as any)[0] = t, (e as any)[1] = j) : j = (e as any)[1];
  let a: any = j;
  if ((l as any) === ("connected" as any)) {
    let r: any;
    ((e as any)[2] as any) !== (t as any) ? (r = (t as any)({
      id: "4PxcyL"
    }), (e as any)[2] = t, (e as any)[3] = r) : r = (e as any)[3], a = r;
  } else if ((l as any) === ("pairing" as any)) {
    let r: any;
    ((e as any)[4] as any) !== (t as any) ? (r = (t as any)({
      id: "hcqAkx"
    }), (e as any)[4] = t, (e as any)[5] = r) : r = (e as any)[5], a = r;
  }
  let x: any;
  ((e as any)[6] as any) !== ((n as any).connectionId as any) || ((e as any)[7] as any) !== (i as any) || ((e as any)[8] as any) !== (o as any) ? (x = (): any => {
    (o as any)(null), ((((i as any).connectOAuth as any)((n as any).connectionId) as any).then as any)((r: any): any => {
      !(r as any).ok && ((r as any).code as any) !== ("cancelled" as any) && (o as any)({
        kind: "error",
        text: (r as any).message
      });
    }, (r: any): any => (o as any)({
      kind: "error",
      text: (Se as any)(r)
    }));
  }, (e as any)[6] = (n as any).connectionId, (e as any)[7] = i, (e as any)[8] = o, (e as any)[9] = x) : x = (e as any)[9];
  const g: any = x;
  let p: any;
  ((e as any)[10] as any) !== (l as any) ? (p = (l as any) === ("connected" as any) ? void 0 : ((s as any).jsx as any)(k, {
    color: (l as any) === ("pairing" as any) ? "yellow" : "red",
    size: "sm",
    children: (l as any) === ("pairing" as any) ? ((s as any).jsx as any)(m, {
      id: "CraD1c"
    }) : ((s as any).jsx as any)(m, {
      id: "mHVPm5"
    })
  }), (e as any)[10] = l, (e as any)[11] = p) : p = (e as any)[11];
  const c: any = p,
    u: any = a;
  let f: any;
  ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = {
    className: "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-13a6bvl sand-ehausa"
  }, (e as any)[12] = f) : f = (e as any)[12];
  let S: any;
  ((e as any)[13] as any) !== ((i as any).isConnectingOAuth as any) || ((e as any)[14] as any) !== ((i as any).isPending as any) || ((e as any)[15] as any) !== (g as any) || ((e as any)[16] as any) !== (l as any) ? (S = (l as any) === ("connected" as any) ? null : ((s as any).jsx as any)(ne, {
    disabled: (i as any).isPending,
    onClick: g,
    size: "sm",
    type: "button",
    variant: "primary",
    children: (i as any).isConnectingOAuth ? ((s as any).jsx as any)(m, {
      id: "BtFje2"
    }) : ((s as any).jsx as any)(m, {
      id: "gcoiFh"
    })
  }), (e as any)[13] = (i as any).isConnectingOAuth, (e as any)[14] = (i as any).isPending, (e as any)[15] = g, (e as any)[16] = l, (e as any)[17] = S) : S = (e as any)[17];
  let _: any;
  ((e as any)[18] as any) !== ((n as any).connectionId as any) || ((e as any)[19] as any) !== (i as any) || ((e as any)[20] as any) !== (o as any) ? (_ = (): any => {
    ((((i as any).disconnect as any)((n as any).connectionId) as any).then as any)((): any => (o as any)(null), (r: any): any => (o as any)({
      kind: "error",
      text: (Se as any)(r)
    }));
  }, (e as any)[18] = (n as any).connectionId, (e as any)[19] = i, (e as any)[20] = o, (e as any)[21] = _) : _ = (e as any)[21];
  let z: any;
  ((e as any)[22] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (z = ((s as any).jsx as any)(m, {
    id: "+K0AvT"
  }), (e as any)[22] = z) : z = (e as any)[22];
  let b: any;
  ((e as any)[23] as any) !== ((i as any).isPending as any) || ((e as any)[24] as any) !== (_ as any) ? (b = ((s as any).jsx as any)(ne, {
    disabled: (i as any).isPending,
    onClick: _,
    size: "sm",
    type: "button",
    variant: "secondary",
    children: z
  }), (e as any)[23] = (i as any).isPending, (e as any)[24] = _, (e as any)[25] = b) : b = (e as any)[25];
  let N: any;
  ((e as any)[26] as any) !== (S as any) || ((e as any)[27] as any) !== (b as any) ? (N = ((s as any).jsxs as any)("span", {
    ...f,
    children: [S, b]
  }), (e as any)[26] = S, (e as any)[27] = b, (e as any)[28] = N) : N = (e as any)[28];
  let d: any;
  return ((e as any)[29] as any) !== (a as any) || ((e as any)[30] as any) !== (c as any) || ((e as any)[31] as any) !== (N as any) ? (d = ((s as any).jsx as any)("div", {
    "aria-label": Te,
    role: "group",
    children: ((s as any).jsx as any)(Me, {
      anchorId: De,
      description: u,
      extraCopy: c,
      label: Te,
      variant: "card",
      children: N
    })
  }), (e as any)[29] = a, (e as any)[30] = c, (e as any)[31] = N, (e as any)[32] = d) : d = (e as any)[32], d;
}
function Ns(this: any, y: any): any {
  (Ns as any).d = 1258;
  const e: any = ((je as any).c as any)(21),
    {
      mutations: n,
      onNotice: i
    }: any = y,
    [o, t]: any = ((_e as any).useState as any)(null);
  let l: any;
  ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (i as any) ? (l = (): any => {
    (t as any)(null), (i as any)(null), ((((n as any).connectOAuth as any)() as any).then as any)((_: any): any => {
      !(_ as any).ok && ((_ as any).code as any) !== ("cancelled" as any) && (t as any)((_ as any).message);
    }, (_: any): any => (t as any)((Se as any)(_)));
  }, (e as any)[0] = n, (e as any)[1] = i, (e as any)[2] = l) : l = (e as any)[2];
  const j: any = l;
  let a: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((s as any).jsx as any)(k, {
    color: "secondary",
    size: "md",
    children: ((s as any).jsx as any)(m, {
      id: "wF9KAc"
    })
  }), (e as any)[3] = a) : a = (e as any)[3];
  let x: any;
  ((e as any)[4] as any) !== (o as any) ? (x = (o as any) == (null as any) ? null : ((s as any).jsx as any)(k, {
    color: "red",
    size: "sm",
    children: o
  }), (e as any)[4] = o, (e as any)[5] = x) : x = (e as any)[5];
  let g: any;
  ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = {
    className: "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-13a6bvl sand-ehausa"
  }, (e as any)[6] = g) : g = (e as any)[6];
  let p: any;
  ((e as any)[7] as any) !== (n as any) ? (p = (n as any).isConnectingOAuth ? ((s as any).jsx as any)(ne, {
    onClick: (): any => {
      ((n as any).cancelOAuth as any)();
    },
    size: "md",
    type: "button",
    variant: "secondary",
    children: ((s as any).jsx as any)(m, {
      id: "dEgA5A"
    })
  }) : null, (e as any)[7] = n, (e as any)[8] = p) : p = (e as any)[8];
  let c: any;
  ((e as any)[9] as any) !== ((n as any).isConnectingOAuth as any) ? (c = (n as any).isConnectingOAuth ? ((s as any).jsx as any)(m, {
    id: "BtFje2"
  }) : ((s as any).jsx as any)(m, {
    id: "Timamj"
  }), (e as any)[9] = (n as any).isConnectingOAuth, (e as any)[10] = c) : c = (e as any)[10];
  let u: any;
  ((e as any)[11] as any) !== (j as any) || ((e as any)[12] as any) !== ((n as any).isPending as any) || ((e as any)[13] as any) !== (c as any) ? (u = ((s as any).jsx as any)(ne, {
    disabled: (n as any).isPending,
    onClick: j,
    size: "md",
    type: "button",
    variant: "primary",
    children: c
  }), (e as any)[11] = j, (e as any)[12] = (n as any).isPending, (e as any)[13] = c, (e as any)[14] = u) : u = (e as any)[14];
  let f: any;
  ((e as any)[15] as any) !== (p as any) || ((e as any)[16] as any) !== (u as any) ? (f = ((s as any).jsxs as any)("span", {
    ...g,
    children: [p, u]
  }), (e as any)[15] = p, (e as any)[16] = u, (e as any)[17] = f) : f = (e as any)[17];
  let S: any;
  return ((e as any)[18] as any) !== (x as any) || ((e as any)[19] as any) !== (f as any) ? (S = ((s as any).jsxs as any)((s as any).Fragment, {
    children: [a, x, f]
  }), (e as any)[18] = x, (e as any)[19] = f, (e as any)[20] = S) : S = (e as any)[20], S;
}
function Cs(this: any, y: any): any {
  (Cs as any).d = 1259;
  const e: any = ((je as any).c as any)(35),
    {
      onNotice: n,
      heading: i,
      startConnecting: o
    }: any = y,
    t: any = (i as any) === (void 0 as any) ? Te : i,
    l: any = (o as any) === (void 0 as any) ? !1 : o,
    j: any = (ns as any)(),
    a: any = (Vs as any)(),
    x: any = (Hs as any)(),
    g: any = (Ks as any)(),
    p: any = (es as any)("sand_1pass_manual_service_acct"),
    c: any = (es as any)("sand_new_1pass"),
    u: any = (ys as any)();
  let f: any;
  ((e as any)[0] as any) !== (u as any) ? (f = (): any => ((u as any)("sand_1pass_manual_service_acct"), (u as any)("sand_new_1pass"), rn), (e as any)[0] = u, (e as any)[1] = f) : f = (e as any)[1], (is as any)(f);
  const [S, _]: any = ((_e as any).useState as any)(!1);
  (rs as any)(((j as any).credentials as any).load);
  const z: any = (a as any).data;
  if ((z?.connected as any) === (!0 as any) && !S) {
    const d: any = (x as any).data;
    let r: any;
    if (((e as any)[2] as any) !== (d as any) || ((e as any)[3] as any) !== ((x as any).error as any) || ((e as any)[4] as any) !== (g as any) || ((e as any)[5] as any) !== (n as any) || ((e as any)[6] as any) !== (p as any) || ((e as any)[7] as any) !== ((z as any).accounts as any)) {
      let A: any;
      ((e as any)[9] as any) !== (d as any) || ((e as any)[10] as any) !== ((x as any).error as any) || ((e as any)[11] as any) !== (g as any) || ((e as any)[12] as any) !== (n as any) || ((e as any)[13] as any) !== (p as any) ? (A = (q: any, M: any): any => ((q as any).connectionKind as any) === ("oauth-broker" as any) ? ((s as any).jsx as any)(zs, {
        account: q,
        mutations: g,
        onNotice: n
      }, (q as any).connectionId) : ((s as any).jsx as any)(Ss, {
        account: q,
        items: (d as any) === (void 0 as any) ? null : d?.items.filter((F: any): any => ((F as any).connectionId as any) === ((q as any).connectionId as any)) ?? [],
        itemsFailure: (x as any).error,
        mutations: g,
        onNotice: n,
        renewWithTokenEnabled: p
      }, (q as any).connectionId), (e as any)[9] = d, (e as any)[10] = (x as any).error, (e as any)[11] = g, (e as any)[12] = n, (e as any)[13] = p, (e as any)[14] = A) : A = (e as any)[14], r = (((z as any).accounts as any).map as any)(A), (e as any)[2] = d, (e as any)[3] = (x as any).error, (e as any)[4] = g, (e as any)[5] = n, (e as any)[6] = p, (e as any)[7] = (z as any).accounts, (e as any)[8] = r;
    } else r = (e as any)[8];
    let E: any;
    return ((e as any)[15] as any) !== (t as any) || ((e as any)[16] as any) !== (r as any) ? (E = ((s as any).jsx as any)(Ue, {
      title: t,
      children: r
    }), (e as any)[15] = t, (e as any)[16] = r, (e as any)[17] = E) : E = (e as any)[17], E;
  }
  let b: any;
  if (((a as any).error as any) != (null as any)) {
    let d: any;
    ((e as any)[18] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = ((s as any).jsx as any)(k, {
      color: "secondary",
      size: "md",
      children: ((s as any).jsx as any)(m, {
        id: "mmzR7e"
      })
    }), (e as any)[18] = d) : d = (e as any)[18];
    let r: any;
    ((e as any)[19] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = ((s as any).jsx as any)(m, {
      id: "6gRgw8"
    }), (e as any)[19] = r) : r = (e as any)[19];
    let E: any;
    ((e as any)[20] as any) !== ((a as any).isFetching as any) || ((e as any)[21] as any) !== ((a as any).refresh as any) ? (E = ((s as any).jsxs as any)((s as any).Fragment, {
      children: [d, ((s as any).jsx as any)("span", {
        children: ((s as any).jsx as any)(ne, {
          disabled: (a as any).isFetching,
          onClick: (a as any).refresh,
          size: "md",
          type: "button",
          variant: "secondary",
          children: r
        })
      })]
    }), (e as any)[20] = (a as any).isFetching, (e as any)[21] = (a as any).refresh, (e as any)[22] = E) : E = (e as any)[22], b = E;
  } else if ((z as any) == (null as any)) {
    let d: any;
    ((e as any)[23] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = ((s as any).jsx as any)("div", {
      className: "sand-78zum5 sand-6s0dn4 sand-21xpn4",
      children: ((s as any).jsx as any)(ss, {
        size: 18,
        borderWidth: 2
      })
    }), (e as any)[23] = d) : d = (e as any)[23], b = d;
  } else if (c) {
    let d: any;
    ((e as any)[24] as any) !== (g as any) || ((e as any)[25] as any) !== (n as any) ? (d = ((s as any).jsx as any)(Ns, {
      mutations: g,
      onNotice: n
    }), (e as any)[24] = g, (e as any)[25] = n, (e as any)[26] = d) : d = (e as any)[26], b = d;
  } else {
    let d: any;
    ((e as any)[27] as any) !== (l as any) ? (d = l ? {
      initialView: "pick"
    } : {}, (e as any)[27] = l, (e as any)[28] = d) : d = (e as any)[28];
    let r: any;
    ((e as any)[29] as any) !== (n as any) || ((e as any)[30] as any) !== (d as any) ? (r = ((s as any).jsx as any)(vs, {
      onNotice: n,
      onSuccessHoldChange: _,
      ...d
    }), (e as any)[29] = n, (e as any)[30] = d, (e as any)[31] = r) : r = (e as any)[31], b = r;
  }
  let N: any;
  return ((e as any)[32] as any) !== (b as any) || ((e as any)[33] as any) !== (t as any) ? (N = ((s as any).jsx as any)(Ue, {
    surface: "plain",
    title: t,
    children: b
  }), (e as any)[32] = b, (e as any)[33] = t, (e as any)[34] = N) : N = (e as any)[34], N;
}
function rn(this: any): any {}
const ws: any = {
  addressText: {
    kVQacm: "sand-b3r6kr",
    kg5iWk: "sand-lyipyv",
    khDVqt: "sand-uxw1ft",
    $$css: !0
  },
  claimInputSurface: {
    kWkggS: "sand-13l7odt",
    $$css: !0
  }
};
function on(this: any, y: any): any {
  return (y as any)[0] ?? null;
}
function As(this: any, y: any): any {
  return (y as any) === ("loading" as any) ? "loading" : (y as any) === ("failed" as any) ? "failed" : "unavailable";
}
function Es(this: any, y: any): any {
  return ((y as any).status as any) === ("failed" as any) ? ((y as any).failure as any).grokBotEmailRefusal ?? null : null;
}
function ms(this: any, y: any): any {
  (ms as any).d = 1274;
  const e: any = ((je as any).c as any)(27),
    {
      domain: n,
      isPending: i,
      onClaim: o
    }: any = y,
    {
      _: t
    }: any = (ve as any)(),
    [l, j]: any = ((_e as any).useState as any)("");
  let a: any;
  ((e as any)[0] as any) !== (o as any) || ((e as any)[1] as any) !== (l as any) ? (a = (r: any): any => {
    ((r as any).preventDefault as any)(), (o as any)(((((l as any).trim as any)() as any).toLowerCase as any)());
  }, (e as any)[0] = o, (e as any)[1] = l, (e as any)[2] = a) : a = (e as any)[2];
  const x: any = a;
  let g: any, p: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = {
    className: "sand-78zum5 sand-6s0dn4 sand-ehausa"
  }, p = {
    className: "sand-dzyupr"
  }, (e as any)[3] = g, (e as any)[4] = p) : (g = (e as any)[3], p = (e as any)[4]);
  let c: any;
  ((e as any)[5] as any) !== (t as any) ? (c = (t as any)({
    id: "grJGrm"
  }), (e as any)[5] = t, (e as any)[6] = c) : c = (e as any)[6];
  let u: any;
  ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = (r: any): any => (j as any)(((r as any).currentTarget as any).value), (e as any)[7] = u) : u = (e as any)[7];
  let f: any;
  ((e as any)[8] as any) !== (t as any) ? (f = (t as any)({
    id: "2j4Igv"
  }), (e as any)[8] = t, (e as any)[9] = f) : f = (e as any)[9];
  let S: any;
  ((e as any)[10] as any) !== (i as any) || ((e as any)[11] as any) !== (c as any) || ((e as any)[12] as any) !== (f as any) || ((e as any)[13] as any) !== (l as any) ? (S = ((s as any).jsx as any)((as as any).Input, {
    "aria-label": c,
    autoCapitalize: "off",
    autoCorrect: "off",
    disabled: i,
    onChange: u,
    placeholder: f,
    spellCheck: !1,
    value: l
  }), (e as any)[10] = i, (e as any)[11] = c, (e as any)[12] = f, (e as any)[13] = l, (e as any)[14] = S) : S = (e as any)[14];
  let _: any;
  ((e as any)[15] as any) !== (n as any) ? (_ = ((s as any).jsxs as any)((as as any).Span, {
    children: ["@", n]
  }), (e as any)[15] = n, (e as any)[16] = _) : _ = (e as any)[16];
  let z: any;
  ((e as any)[17] as any) !== (S as any) || ((e as any)[18] as any) !== (_ as any) ? (z = ((s as any).jsx as any)("div", {
    ...p,
    children: ((s as any).jsxs as any)(as, {
      rootStyle: (ws as any).claimInputSurface,
      size: "lg",
      children: [S, _]
    })
  }), (e as any)[17] = S, (e as any)[18] = _, (e as any)[19] = z) : z = (e as any)[19];
  let b: any;
  ((e as any)[20] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = ((s as any).jsx as any)(m, {
    id: "cyvZe6"
  }), (e as any)[20] = b) : b = (e as any)[20];
  let N: any;
  ((e as any)[21] as any) !== (i as any) ? (N = ((s as any).jsx as any)(ne, {
    disabled: i,
    pending: i,
    size: "sm",
    type: "submit",
    variant: "secondary",
    children: b
  }), (e as any)[21] = i, (e as any)[22] = N) : N = (e as any)[22];
  let d: any;
  return ((e as any)[23] as any) !== (x as any) || ((e as any)[24] as any) !== (N as any) || ((e as any)[25] as any) !== (z as any) ? (d = ((s as any).jsxs as any)("form", {
    onSubmit: x,
    ...g,
    children: [z, N]
  }), (e as any)[23] = x, (e as any)[24] = N, (e as any)[25] = z, (e as any)[26] = d) : d = (e as any)[26], d;
}
function us(this: any, y: any): any {
  (us as any).d = 1276;
  const e: any = ((je as any).c as any)(9),
    {
      status: n,
      refusal: i,
      onRetry: o
    }: any = y;
  if ((n as any) === ("loading" as any)) {
    let l: any;
    return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = ((s as any).jsx as any)(k, {
      as: "span",
      color: "tertiary",
      size: "sm",
      children: ((s as any).jsx as any)(m, {
        id: "Pwqkdw"
      })
    }), (e as any)[0] = l) : l = (e as any)[0], l;
  }
  if ((i as any) != (null as any) && ((i as any).length as any) > (0 as any)) {
    let l: any;
    return ((e as any)[1] as any) !== (i as any) ? (l = ((s as any).jsx as any)(k, {
      as: "span",
      color: "tertiary",
      size: "sm",
      children: i
    }), (e as any)[1] = i, (e as any)[2] = l) : l = (e as any)[2], l;
  }
  if ((n as any) === ("failed" as any)) {
    let l: any;
    ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = {
      className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1oot3zn"
    }, (e as any)[3] = l) : l = (e as any)[3];
    let j: any;
    ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = ((s as any).jsx as any)(k, {
      as: "span",
      color: "red",
      size: "sm",
      children: ((s as any).jsx as any)(m, {
        id: "VHuQVL"
      })
    }), (e as any)[4] = j) : j = (e as any)[4];
    let a: any;
    ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((s as any).jsx as any)(m, {
      id: "6gRgw8"
    }), (e as any)[5] = a) : a = (e as any)[5];
    let x: any;
    return ((e as any)[6] as any) !== (o as any) ? (x = ((s as any).jsxs as any)("span", {
      ...l,
      children: [j, ((s as any).jsx as any)(ne, {
        onClick: o,
        size: "sm",
        variant: "secondary",
        children: a
      })]
    }), (e as any)[6] = o, (e as any)[7] = x) : x = (e as any)[7], x;
  }
  let t: any;
  return ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = ((s as any).jsx as any)(k, {
    as: "span",
    color: "tertiary",
    size: "sm",
    children: ((s as any).jsx as any)(m, {
      id: "0BvlbM"
    })
  }), (e as any)[8] = t) : t = (e as any)[8], t;
}
function Rs(this: any, y: any): any {
  (Rs as any).d = 1273;
  const e: any = ((je as any).c as any)(11),
    {
      inbox: n
    }: any = y,
    {
      _: i
    }: any = (ve as any)();
  let o: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = {
    className: "sand-3nfvp2 sand-6s0dn4 sand-11twubx sand-euugli"
  }, (e as any)[0] = o) : o = (e as any)[0];
  let t: any;
  ((e as any)[1] as any) !== ((n as any).email as any) ? (t = ((s as any).jsx as any)(k, {
    as: "span",
    color: "primary",
    rootStyle: (ws as any).addressText,
    size: "md",
    children: (n as any).email
  }), (e as any)[1] = (n as any).email, (e as any)[2] = t) : t = (e as any)[2];
  let l: any;
  ((e as any)[3] as any) !== (i as any) ? (l = (i as any)({
    id: "/lLfdi"
  }), (e as any)[3] = i, (e as any)[4] = l) : l = (e as any)[4];
  let j: any;
  ((e as any)[5] as any) !== ((n as any).email as any) || ((e as any)[6] as any) !== (l as any) ? (j = ((s as any).jsx as any)(Bs, {
    label: l,
    text: (n as any).email
  }), (e as any)[5] = (n as any).email, (e as any)[6] = l, (e as any)[7] = j) : j = (e as any)[7];
  let a: any;
  return ((e as any)[8] as any) !== (t as any) || ((e as any)[9] as any) !== (j as any) ? (a = ((s as any).jsxs as any)("span", {
    ...o,
    children: [t, j]
  }), (e as any)[8] = t, (e as any)[9] = j, (e as any)[10] = a) : a = (e as any)[10], a;
}
function Is(this: any, y: any): any {
  (Is as any).d = 1275;
  const e: any = ((je as any).c as any)(28),
    {
      domain: n
    }: any = y,
    {
      _: i
    }: any = (ve as any)(),
    o: any = (ns as any)();
  (rs as any)(((o as any).grokBotEmailInbox as any).load);
  const t: any = (bs as any)(),
    {
      create: l,
      isPending: j
    }: any = (gs as any)(),
    [a, x]: any = ((_e as any).useState as any)(null);
  let g: any = null;
  ((t as any).status as any) === ("ready" as any) ? g = (t as any).value : (((t as any).status as any) === ("loading" as any) || ((t as any).status as any) === ("failed" as any)) && (g = (t as any).previous ?? null);
  let p: any;
  ((e as any)[0] as any) !== (g as any) ? (p = (g as any) == (null as any) ? null : (on as any)(g), (e as any)[0] = g, (e as any)[1] = p) : p = (e as any)[1];
  const c: any = p;
  let u: any;
  ((e as any)[2] as any) !== (l as any) ? (u = (d: any): any => {
    (x as any)(null), (_s as any)(async (): Promise<any> => {
      await (l as any)({
        username: d,
        displayName: ""
      });
    }, x);
  }, (e as any)[2] = l, (e as any)[3] = u) : u = (e as any)[3];
  const f: any = u;
  let S: any;
  if ((c as any) != (null as any)) {
    let d: any;
    ((e as any)[4] as any) !== (c as any) ? (d = ((s as any).jsx as any)(Rs, {
      inbox: c
    }), (e as any)[4] = c, (e as any)[5] = d) : d = (e as any)[5], S = d;
  } else if ((g as any) != (null as any)) {
    let d: any;
    ((e as any)[6] as any) !== (f as any) || ((e as any)[7] as any) !== (n as any) || ((e as any)[8] as any) !== (j as any) ? (d = ((s as any).jsx as any)(ms, {
      domain: n,
      isPending: j,
      onClaim: f
    }), (e as any)[6] = f, (e as any)[7] = n, (e as any)[8] = j, (e as any)[9] = d) : d = (e as any)[9], S = d;
  } else {
    const d: any = ((o as any).grokBotEmailInbox as any).retry;
    let r: any;
    ((e as any)[10] as any) !== (t as any) ? (r = (Es as any)(t), (e as any)[10] = t, (e as any)[11] = r) : r = (e as any)[11];
    let E: any;
    ((e as any)[12] as any) !== ((t as any).status as any) ? (E = (As as any)((t as any).status), (e as any)[12] = (t as any).status, (e as any)[13] = E) : E = (e as any)[13];
    let A: any;
    ((e as any)[14] as any) !== (((o as any).grokBotEmailInbox as any).retry as any) || ((e as any)[15] as any) !== (r as any) || ((e as any)[16] as any) !== (E as any) ? (A = ((s as any).jsx as any)(us, {
      onRetry: d,
      refusal: r,
      status: E
    }), (e as any)[14] = ((o as any).grokBotEmailInbox as any).retry, (e as any)[15] = r, (e as any)[16] = E, (e as any)[17] = A) : A = (e as any)[17], S = A;
  }
  let _: any;
  ((e as any)[18] as any) !== (i as any) ? (_ = (i as any)({
    id: "ATGYL1"
  }), (e as any)[18] = i, (e as any)[19] = _) : _ = (e as any)[19];
  let z: any;
  ((e as any)[20] as any) !== (S as any) || ((e as any)[21] as any) !== (_ as any) ? (z = ((s as any).jsx as any)(Me, {
    anchorId: De,
    label: _,
    variant: "card",
    children: S
  }), (e as any)[20] = S, (e as any)[21] = _, (e as any)[22] = z) : z = (e as any)[22];
  let b: any;
  ((e as any)[23] as any) !== (a as any) ? (b = (a as any) == (null as any) ? null : ((s as any).jsx as any)("div", {
    className: "sand-9f619 sand-exx8yu sand-1n9uuka sand-usxwy5 sand-cssynl",
    role: "alert",
    children: ((s as any).jsx as any)(k, {
      as: "span",
      color: "red",
      size: "sm",
      children: (a as any).text
    })
  }), (e as any)[23] = a, (e as any)[24] = b) : b = (e as any)[24];
  let N: any;
  return ((e as any)[25] as any) !== (z as any) || ((e as any)[26] as any) !== (b as any) ? (N = ((s as any).jsxs as any)((s as any).Fragment, {
    children: [z, b]
  }), (e as any)[25] = z, (e as any)[26] = b, (e as any)[27] = N) : N = (e as any)[27], N;
}
function qs(this: any, y: any): any {
  (qs as any).d = 1277;
  const e: any = ((je as any).c as any)(7),
    {
      inboxes: n
    }: any = y,
    {
      _: i
    }: any = (ve as any)();
  let o: any;
  if (((e as any)[0] as any) !== (i as any) || ((e as any)[1] as any) !== (n as any)) {
    let l: any;
    ((e as any)[3] as any) !== (i as any) ? (l = (j: any, a: any): any => ((s as any).jsx as any)(Me, {
      anchorId: De,
      copyText: {
        label: (i as any)({
          id: "/lLfdi"
        }),
        value: (j as any).email
      },
      label: (j as any).email,
      variant: "card",
      children: null
    }, (j as any).email), (e as any)[3] = i, (e as any)[4] = l) : l = (e as any)[4], o = ((n as any).map as any)(l), (e as any)[0] = i, (e as any)[1] = n, (e as any)[2] = o;
  } else o = (e as any)[2];
  let t: any;
  return ((e as any)[5] as any) !== (o as any) ? (t = ((s as any).jsx as any)((s as any).Fragment, {
    children: o
  }), (e as any)[5] = o, (e as any)[6] = t) : t = (e as any)[6], t;
}
function Ts(this: any, y: any): any {
  (Ts as any).d = 1278;
  const e: any = ((je as any).c as any)(30),
    {
      domain: n
    }: any = y,
    {
      _: i
    }: any = (ve as any)(),
    o: any = (ns as any)();
  (rs as any)(((o as any).grokBotEmailInbox as any).load);
  const t: any = (bs as any)(),
    {
      create: l,
      isPending: j
    }: any = (gs as any)(),
    [a, x]: any = ((_e as any).useState as any)(null),
    [g, p]: any = ((_e as any).useState as any)(!1);
  let c: any = null;
  ((t as any).status as any) === ("ready" as any) ? c = (t as any).value : (((t as any).status as any) === ("loading" as any) || ((t as any).status as any) === ("failed" as any)) && (c = (t as any).previous ?? null);
  let u: any;
  ((e as any)[0] as any) !== (l as any) ? (u = (r: any): any => {
    (x as any)(null), (_s as any)(async (): Promise<any> => {
      await (l as any)({
        username: r,
        displayName: ""
      }), (p as any)(!1);
    }, x);
  }, (e as any)[0] = l, (e as any)[1] = u) : u = (e as any)[1];
  const f: any = u;
  if ((c as any) == (null as any)) {
    let r: any;
    ((e as any)[2] as any) !== (i as any) ? (r = (i as any)({
      id: "ATGYL1"
    }), (e as any)[2] = i, (e as any)[3] = r) : r = (e as any)[3];
    const E: any = ((o as any).grokBotEmailInbox as any).retry;
    let A: any;
    ((e as any)[4] as any) !== (t as any) ? (A = (Es as any)(t), (e as any)[4] = t, (e as any)[5] = A) : A = (e as any)[5];
    let q: any;
    ((e as any)[6] as any) !== ((t as any).status as any) ? (q = (As as any)((t as any).status), (e as any)[6] = (t as any).status, (e as any)[7] = q) : q = (e as any)[7];
    let M: any;
    ((e as any)[8] as any) !== (((o as any).grokBotEmailInbox as any).retry as any) || ((e as any)[9] as any) !== (A as any) || ((e as any)[10] as any) !== (q as any) ? (M = ((s as any).jsx as any)(us, {
      onRetry: E,
      refusal: A,
      status: q
    }), (e as any)[8] = ((o as any).grokBotEmailInbox as any).retry, (e as any)[9] = A, (e as any)[10] = q, (e as any)[11] = M) : M = (e as any)[11];
    let F: any;
    return ((e as any)[12] as any) !== (r as any) || ((e as any)[13] as any) !== (M as any) ? (F = ((s as any).jsx as any)(Ue, {
      title: null,
      children: ((s as any).jsx as any)(Me, {
        anchorId: De,
        label: r,
        variant: "card",
        children: M
      })
    }), (e as any)[12] = r, (e as any)[13] = M, (e as any)[14] = F) : F = (e as any)[14], F;
  }
  const S: any = g || ((c as any).length as any) === (0 as any);
  let _: any;
  ((e as any)[15] as any) !== ((c as any).length as any) ? (_ = (Ms as any)({
    claimed: (c as any).length
  }), (e as any)[15] = (c as any).length, (e as any)[16] = _) : _ = (e as any)[16];
  const z: any = _;
  let b: any;
  ((e as any)[17] as any) !== (i as any) || ((e as any)[18] as any) !== (c as any) ? (b = ((c as any).length as any) === (0 as any) ? null : ((s as any).jsx as any)(Ue, {
    title: (i as any)({
      id: "ATGYL1"
    }),
    children: ((s as any).jsx as any)(qs, {
      inboxes: c
    })
  }), (e as any)[17] = i, (e as any)[18] = c, (e as any)[19] = b) : b = (e as any)[19];
  let N: any;
  ((e as any)[20] as any) !== (z as any) || ((e as any)[21] as any) !== (f as any) || ((e as any)[22] as any) !== (n as any) || ((e as any)[23] as any) !== (j as any) || ((e as any)[24] as any) !== (a as any) || ((e as any)[25] as any) !== (S as any) ? (N = z ? ((s as any).jsxs as any)("div", {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-ehausa sand-1t8xvyj",
    children: [S ? ((s as any).jsx as any)(ms, {
      domain: n,
      isPending: j,
      onClaim: f
    }) : ((s as any).jsx as any)(ne, {
      onClick: (): any => (p as any)(!0),
      size: "md",
      style: (Os as any).body2,
      type: "button",
      variant: "secondary",
      children: ((s as any).jsx as any)(m, {
        id: "zmsQYr"
      })
    }), (a as any) == (null as any) ? null : ((s as any).jsx as any)("span", {
      role: "alert",
      children: ((s as any).jsx as any)(k, {
        as: "span",
        color: "red",
        size: "sm",
        children: (a as any).text
      })
    })]
  }) : null, (e as any)[20] = z, (e as any)[21] = f, (e as any)[22] = n, (e as any)[23] = j, (e as any)[24] = a, (e as any)[25] = S, (e as any)[26] = N) : N = (e as any)[26];
  let d: any;
  return ((e as any)[27] as any) !== (b as any) || ((e as any)[28] as any) !== (N as any) ? (d = ((s as any).jsxs as any)((s as any).Fragment, {
    children: [b, N]
  }), (e as any)[27] = b, (e as any)[28] = N, (e as any)[29] = d) : d = (e as any)[29], d;
}
function Ps(this: any): any {
  (Ps as any).d = 1279;
  const y: any = ((je as any).c as any)(4),
    {
      usesProductionBackend: e
    }: any = (cs as any)(),
    n: any = (e as any) === (void 0 as any) ? !0 : e,
    i: any = (es as any)("grok_bot_agent_mail_multiple_inboxes"),
    o: any = n ? Ls : $s;
  if (i) {
    let l: any;
    return ((y as any)[0] as any) !== (o as any) ? (l = ((s as any).jsx as any)(Ts, {
      domain: o
    }), (y as any)[0] = o, (y as any)[1] = l) : l = (y as any)[1], l;
  }
  let t: any;
  return ((y as any)[2] as any) !== (o as any) ? (t = ((s as any).jsx as any)(Ue, {
    title: null,
    children: ((s as any).jsx as any)(Is, {
      domain: o
    })
  }), (y as any)[2] = o, (y as any)[3] = t) : t = (y as any)[3], t;
}
function mn(this: any, y: any): any {
  (mn as any).d = 1211;
  const e: any = ((je as any).c as any)(41),
    {
      entry: n,
      nativeId: i,
      onNotice: o,
      startConnecting: t
    }: any = y,
    l: any = (t as any) === (void 0 as any) ? !1 : t,
    {
      _: j
    }: any = (ve as any)(),
    {
      _: a
    }: any = (ve as any)(),
    x: any = (Ys as any)();
  let g: any;
  ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (x as any) ? (g = (x as any)(n), (e as any)[0] = n, (e as any)[1] = x, (e as any)[2] = g) : g = (e as any)[2];
  const p: any = (g as any) === (!0 as any),
    c: any = (n as any).publisher?.displayName ?? null;
  let u: any;
  ((e as any)[3] as any) !== ((n as any).websiteUrl as any) ? (u = (en as any)((n as any).websiteUrl), (e as any)[3] = (n as any).websiteUrl, (e as any)[4] = u) : u = (e as any)[4];
  const f: any = u;
  let S: any;
  ((e as any)[5] as any) !== (p as any) ? (S = p ? ((s as any).jsx as any)(Zs, {}) : null, (e as any)[5] = p, (e as any)[6] = S) : S = (e as any)[6];
  let _: any;
  ((e as any)[7] as any) !== (n as any) || ((e as any)[8] as any) !== (S as any) ? (_ = ((s as any).jsx as any)(Qs, {
    action: S,
    entry: n
  }), (e as any)[7] = n, (e as any)[8] = S, (e as any)[9] = _) : _ = (e as any)[9];
  let z: any;
  e: {
    switch (i) {
      case "onepassword":
        {
          let O: any;
          ((e as any)[10] as any) !== (o as any) || ((e as any)[11] as any) !== (l as any) ? (O = ((s as any).jsx as any)(Cs, {
            heading: null,
            onNotice: o,
            startConnecting: l
          }), (e as any)[10] = o, (e as any)[11] = l, (e as any)[12] = O) : O = (e as any)[12], z = O;
          break e;
        }
      case "email":
        {
          let O: any;
          ((e as any)[13] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (O = ((s as any).jsx as any)(Ps, {}), (e as any)[13] = O) : O = (e as any)[13], z = O;
          break e;
        }
    }
    z = void 0;
  }
  let b: any;
  ((e as any)[14] as any) !== (a as any) ? (b = (a as any)({
    id: "nSkB8g"
  }), (e as any)[14] = a, (e as any)[15] = b) : b = (e as any)[15];
  let N: any;
  ((e as any)[16] as any) !== (a as any) || ((e as any)[17] as any) !== (c as any) ? (N = (c as any) == (null as any) ? [] : [{
    term: (a as any)({
      id: "7aDnUb"
    }),
    value: c
  }], (e as any)[16] = a, (e as any)[17] = c, (e as any)[18] = N) : N = (e as any)[18];
  let d: any;
  ((e as any)[19] as any) !== (a as any) ? (d = (a as any)({
    id: "K7tIrx"
  }), (e as any)[19] = a, (e as any)[20] = d) : d = (e as any)[20];
  let r: any;
  ((e as any)[21] as any) !== (j as any) || ((e as any)[22] as any) !== (n as any) ? (r = (sn as any)(j, n), (e as any)[21] = j, (e as any)[22] = n, (e as any)[23] = r) : r = (e as any)[23];
  let E: any;
  ((e as any)[24] as any) !== (d as any) || ((e as any)[25] as any) !== (r as any) ? (E = {
    term: d,
    value: r
  }, (e as any)[24] = d, (e as any)[25] = r, (e as any)[26] = E) : E = (e as any)[26];
  let A: any;
  ((e as any)[27] as any) !== (a as any) || ((e as any)[28] as any) !== (f as any) ? (A = (f as any) == (null as any) ? [] : [{
    term: (a as any)({
      id: "On0aF2"
    }),
    value: f
  }], (e as any)[27] = a, (e as any)[28] = f, (e as any)[29] = A) : A = (e as any)[29];
  let q: any;
  ((e as any)[30] as any) !== (E as any) || ((e as any)[31] as any) !== (A as any) || ((e as any)[32] as any) !== (N as any) ? (q = [...N, E, ...A], (e as any)[30] = E, (e as any)[31] = A, (e as any)[32] = N, (e as any)[33] = q) : q = (e as any)[33];
  let M: any;
  ((e as any)[34] as any) !== (q as any) || ((e as any)[35] as any) !== (b as any) ? (M = ((s as any).jsx as any)(Xs, {
    label: b,
    rows: q
  }), (e as any)[34] = q, (e as any)[35] = b, (e as any)[36] = M) : M = (e as any)[36];
  let F: any;
  return ((e as any)[37] as any) !== (M as any) || ((e as any)[38] as any) !== (_ as any) || ((e as any)[39] as any) !== (z as any) ? (F = ((s as any).jsxs as any)(Js, {
    header: _,
    children: [z, M]
  }), (e as any)[37] = M, (e as any)[38] = _, (e as any)[39] = z, (e as any)[40] = F) : F = (e as any)[40], F;
}
export { mn as NativePluginDetail };
//# debugId=117985a3-4aff-4cd5-958b-a636edaacf9d
