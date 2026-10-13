declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "75523828-d687-4f59-b5df-43aa91af2e23", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-75523828-d687-4f59-b5df-43aa91af2e23");
  } catch (e: any) {}
} as any)();
import { c as ee, u as J, r as se, j as a, p as Z, T as K } from "./index.eager-vendor-Qbf9YA6n.js";
import { b7 as te, aU as U, b9 as pe, bN as ne, bd as he, u as ye, bO as ae, r as Q, aK as ge, j as Ce, n as je } from "./index.eager-app-Cj5f8Gby.js";
import { aY as W } from "./index.eager-platform-Dcfeegfw.js";
import { u as ie, a as le, b as Ne } from "./chunk-provider-listener-integrations-CR9f28xA.js";
import { ak as ce, i as be, W as Y, j as de, al as oe, k as xe, g as ke } from "./index-ZYxf-aBb.js";
import { C as Se } from "./chunk-connector-card-view-fPUuNO3n.js";
const re: any = {
  card: {
    k1xSpc: "sand-78zum5",
    kGNEyG: "sand-1cy8zhl",
    kOIVth: "sand-883omv",
    kzqmXN: "sand-wl9fdd",
    ks0D6T: "sand-193iq5w",
    kLKAdn: "sand-z9dl7a",
    kGO01o: "sand-sag5q8",
    kZCmMZ: "sand-1g0dm76",
    kwRFfy: "sand-pdmqnj",
    kMzoRj: "sand-mkeg23",
    ksu8eU: "sand-1y0btm7",
    kVAM5u: "sand-qz0629",
    kaIpWk: "sand-ixl9f9",
    $$css: !0
  },
  cardCentered: {
    kGNEyG: "sand-6s0dn4",
    $$css: !0
  }
};
function ze(this: any, d: any, e: any, n: any): any {
  return (d as any)((e as any) === ("slack" as any) ? {
    id: "IQDXxM"
  } : (e as any) === ("github" as any) || (e as any) === ("origin" as any) ? {
    id: "qthRAP",
    values: {
      displayName: n
    }
  } : {
    id: "SVaREQ",
    values: {
      displayName: n
    }
  });
}
function Ae(this: any, d: any): any {
  (Ae as any).d = 894;
  const e: any = ((ee as any).c as any)(76),
    {
      platform: n,
      reason: g
    }: any = d,
    {
      _: l
    }: any = (J as any)(),
    {
      _: z
    }: any = (J as any)(),
    q: any = (he as any)(),
    {
      view: t,
      isLoading: b
    }: any = (ie as any)();
  (U as any)((((te as any)() as any).listenerIntegrations as any).load);
  const {
      connect: w,
      isPending: E
    }: any = (le as any)(),
    D: any = (ce as any)(),
    x: any = ((se as any).useId as any)(),
    G: any = (ye as any)(x);
  let C: any, p: any, i: any, y: any, j: any, c: any, f: any, r: any, _: any, R: any, m: any, k: any, u: any, o: any;
  if (((e as any)[0] as any) !== (l as any) || ((e as any)[1] as any) !== (z as any) || ((e as any)[2] as any) !== (G as any) || ((e as any)[3] as any) !== (q as any) || ((e as any)[4] as any) !== (D as any) || ((e as any)[5] as any) !== (w as any) || ((e as any)[6] as any) !== (b as any) || ((e as any)[7] as any) !== (E as any) || ((e as any)[8] as any) !== (n as any) || ((e as any)[9] as any) !== (g as any) || ((e as any)[10] as any) !== (x as any) || ((e as any)[11] as any) !== (t as any)) {
    c = ((Symbol as any).for as any)("react.early_return_sentinel");
    e: {
      const B: any = (ae as any)(n);
      if ((B as any) == (null as any)) {
        c = null;
        break e;
      }
      let I: any;
      if (((e as any)[26] as any) !== (n as any) || ((e as any)[27] as any) !== ((t as any).integrations as any)) {
        let T: any;
        ((e as any)[29] as any) !== (n as any) ? (T = (O: any): any => ((O as any).platform as any) === (n as any), (e as any)[29] = n, (e as any)[30] = T) : T = (e as any)[30], I = (((t as any).integrations as any).find as any)(T), (e as any)[26] = n, (e as any)[27] = (t as any).integrations, (e as any)[28] = I;
      } else I = (e as any)[28];
      const $: any = I;
      i = ($?.isConnected as any) === (!0 as any);
      const N: any = async (): Promise<any> => {
          (await (D as any)((oe as any)(n, (B as any).displayName))) && (await (w as any)(n));
        },
        H: any = ($ as any) != (null as any) || !b;
      p = (g as any) != (null as any) && ((g as any).length as any) > (0 as any) ? (l as any)({
        id: "T2bXh+",
        values: {
          0: (B as any).displayName,
          reason: g
        }
      }) : (ze as any)(l, n, (B as any).displayName);
      let V: any;
      s: {
        if (i) {
          let v: any, P: any;
          ((e as any)[31] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = (Q as any)("sand-78zum5 sand-6s0dn4 sand-1nejdyq sand-2lah0s sand-134ynso"), P = ((a as any).jsx as any)(Y, {
            "aria-hidden": !0,
            color: "green",
            name: "check-circle",
            size: "sm"
          }), (e as any)[31] = v, (e as any)[32] = P) : (v = (e as any)[31], P = (e as any)[32]);
          let X: any;
          ((e as any)[33] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (X = ((a as any).jsx as any)(W, {
            size: "xs",
            weight: "medium",
            children: ((a as any).jsx as any)(K, {
              id: "QHcLEN"
            })
          }), (e as any)[33] = X) : X = (e as any)[33];
          let F: any;
          ((e as any)[34] as any) !== (v as any) ? (F = ((a as any).jsxs as any)("span", {
            className: v,
            children: [P, X]
          }), (e as any)[34] = v, (e as any)[35] = F) : F = (e as any)[35], V = F;
          break s;
        }
        if (!H) {
          let v: any;
          ((e as any)[36] as any) !== (z as any) ? (v = (z as any)({
            id: "QwpUXp"
          }), (e as any)[36] = z, (e as any)[37] = v) : v = (e as any)[37];
          let P: any;
          ((e as any)[38] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (P = (Q as any)("sand-78zum5 sand-6s0dn4 sand-l56j7k sand-xk0z11 sand-e2zdcy sand-2vl965 sand-2lah0s"), (e as any)[38] = P) : P = (e as any)[38];
          let X: any;
          ((e as any)[39] as any) !== (q as any) ? (X = ((q as any).renderSpinner as any)(14), (e as any)[39] = q, (e as any)[40] = X) : X = (e as any)[40];
          let F: any;
          ((e as any)[41] as any) !== (v as any) || ((e as any)[42] as any) !== (P as any) || ((e as any)[43] as any) !== (X as any) ? (F = ((a as any).jsx as any)("span", {
            "aria-label": v,
            className: P,
            children: X
          }), (e as any)[41] = v, (e as any)[42] = P, (e as any)[43] = X, (e as any)[44] = F) : F = (e as any)[44], V = F;
          break s;
        }
        let T: any;
        ((e as any)[45] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (T = (Q as any)("sand-2lah0s"), (e as any)[45] = T) : T = (e as any)[45];
        let O: any;
        ((e as any)[46] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (O = ((a as any).jsx as any)(K, {
          id: "iSLIjg"
        }), (e as any)[46] = O) : O = (e as any)[46], V = ((a as any).jsx as any)(ke, {
          className: T,
          tone: "monochrome",
          disabled: E,
          onClick: (): any => {
            (N as any)();
          },
          size: "sm",
          variant: "primary",
          children: O
        });
      }
      y = V, k = x, ((e as any)[47] as any) !== (i as any) ? (u = (Q as any)("sand-listener-connect-card", ((Z as any)((ge as any).transcriptWidget, (re as any).card, i && (re as any).cardCentered) as any).className), (e as any)[47] = i, (e as any)[48] = u) : u = (e as any)[48];
      let s: any;
      ((e as any)[49] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = (Q as any)("sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1849jeq sand-1gnnpzl sand-2lah0s sand-ur7f20 sand-arj5zm"), (e as any)[49] = s) : s = (e as any)[49];
      let L: any;
      ((e as any)[50] as any) !== (n as any) ? (L = ((a as any).jsx as any)(ne, {
        platform: n,
        size: 18
      }), (e as any)[50] = n, (e as any)[51] = L) : L = (e as any)[51], ((e as any)[52] as any) !== (s as any) || ((e as any)[53] as any) !== (L as any) ? (o = ((a as any).jsx as any)("span", {
        className: s,
        children: L
      }), (e as any)[52] = s, (e as any)[53] = L, (e as any)[54] = o) : o = (e as any)[54], ((e as any)[55] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = (Q as any)("sand-78zum5 sand-dt5ytf sand-1ed6fcf sand-1iyjqo2 sand-s83m0k sand-euugli"), (e as any)[55] = m) : m = (e as any)[55], C = W, j = x, f = G, r = "sm", _ = "semibold", R = (l as any)(i ? {
        id: "h6Jkfm",
        values: {
          0: (B as any).displayName
        }
      } : {
        id: "5ZzgbQ",
        values: {
          0: (B as any).displayName
        }
      });
    }
    (e as any)[0] = l, (e as any)[1] = z, (e as any)[2] = G, (e as any)[3] = q, (e as any)[4] = D, (e as any)[5] = w, (e as any)[6] = b, (e as any)[7] = E, (e as any)[8] = n, (e as any)[9] = g, (e as any)[10] = x, (e as any)[11] = t, (e as any)[12] = C, (e as any)[13] = p, (e as any)[14] = i, (e as any)[15] = y, (e as any)[16] = j, (e as any)[17] = c, (e as any)[18] = f, (e as any)[19] = r, (e as any)[20] = _, (e as any)[21] = R, (e as any)[22] = m, (e as any)[23] = k, (e as any)[24] = u, (e as any)[25] = o;
  } else C = (e as any)[12], p = (e as any)[13], i = (e as any)[14], y = (e as any)[15], j = (e as any)[16], c = (e as any)[17], f = (e as any)[18], r = (e as any)[19], _ = (e as any)[20], R = (e as any)[21], m = (e as any)[22], k = (e as any)[23], u = (e as any)[24], o = (e as any)[25];
  if ((c as any) !== (((Symbol as any).for as any)("react.early_return_sentinel") as any)) return c;
  let S: any;
  ((e as any)[56] as any) !== (C as any) || ((e as any)[57] as any) !== (j as any) || ((e as any)[58] as any) !== (f as any) || ((e as any)[59] as any) !== (r as any) || ((e as any)[60] as any) !== (_ as any) || ((e as any)[61] as any) !== (R as any) ? (S = ((a as any).jsx as any)(C, {
    id: j,
    ref: f,
    size: r,
    weight: _,
    children: R
  }), (e as any)[56] = C, (e as any)[57] = j, (e as any)[58] = f, (e as any)[59] = r, (e as any)[60] = _, (e as any)[61] = R, (e as any)[62] = S) : S = (e as any)[62];
  let A: any;
  ((e as any)[63] as any) !== (p as any) || ((e as any)[64] as any) !== (i as any) ? (A = i ? null : ((a as any).jsx as any)(W, {
    className: (Q as any)("sand-euugli sand-1w2vvpw sand-13faqbe"),
    color: "secondary",
    size: "sm",
    children: p
  }), (e as any)[63] = p, (e as any)[64] = i, (e as any)[65] = A) : A = (e as any)[65];
  let h: any;
  ((e as any)[66] as any) !== (S as any) || ((e as any)[67] as any) !== (A as any) || ((e as any)[68] as any) !== (m as any) ? (h = ((a as any).jsxs as any)("span", {
    className: m,
    children: [S, A]
  }), (e as any)[66] = S, (e as any)[67] = A, (e as any)[68] = m, (e as any)[69] = h) : h = (e as any)[69];
  let M: any;
  return ((e as any)[70] as any) !== (y as any) || ((e as any)[71] as any) !== (h as any) || ((e as any)[72] as any) !== (k as any) || ((e as any)[73] as any) !== (u as any) || ((e as any)[74] as any) !== (o as any) ? (M = ((a as any).jsxs as any)("article", {
    "aria-labelledby": k,
    className: u,
    children: [o, h, y]
  }), (e as any)[70] = y, (e as any)[71] = h, (e as any)[72] = k, (e as any)[73] = u, (e as any)[74] = o, (e as any)[75] = M) : M = (e as any)[75], M;
}
const we: any = ["github", "gitlab", "bitbucket", "azure-devops"],
  _e: any = {
    card: {
      kzqmXN: "sand-wl9fdd",
      ks0D6T: "sand-193iq5w",
      $$css: !0
    }
  };
function fe(this: any, d: any): any {
  return ((d as any).reason as any) == (null as any) || (((d as any).reason as any).length as any) === (0 as any) ? !1 : ((d as any).sentAtMs as any) === (void 0 as any) || ((d as any).connectedAtMs as any) === (void 0 as any) ? !0 : ((d as any).connectedAtMs as any) <= ((d as any).sentAtMs as any);
}
function Re(this: any, d: any): any {
  (Re as any).d = 895;
  const e: any = ((ee as any).c as any)(65),
    {
      provider: n,
      intent: g,
      reason: l,
      repo: z,
      sentAtMs: q
    }: any = d,
    {
      _: t
    }: any = (J as any)(),
    {
      view: b
    }: any = (ie as any)(),
    {
      listenerIntegrations: w
    }: any = (te as any)();
  (U as any)((w as any).load);
  const {
      connect: E,
      isPending: D
    }: any = (le as any)(),
    x: any = (ce as any)(),
    G: any = ((se as any).useId as any)(),
    C: any = (pe as any)("sand_desktop_scm_connect"),
    p: any = C && (g as any) === ("access" as any) ? z : void 0;
  let i: any;
  ((e as any)[0] as any) !== (w as any) || ((e as any)[1] as any) !== (p as any) ? (i = (p as any) == (null as any) ? me : (((w as any).repoAccess as any)(p) as any).load, (e as any)[0] = w, (e as any)[1] = p, (e as any)[2] = i) : i = (e as any)[2], (U as any)(i);
  const y: any = ((Ne as any)(p) as any) === (!0 as any);
  let j: any;
  ((e as any)[3] as any) !== (C as any) || ((e as any)[4] as any) !== (z as any) || ((e as any)[5] as any) !== (b as any) || ((e as any)[6] as any) !== (y as any) ? (j = C ? y : (Ie as any)(b, z), (e as any)[3] = C, (e as any)[4] = z, (e as any)[5] = b, (e as any)[6] = y, (e as any)[7] = j) : j = (e as any)[7];
  const c: any = j,
    f: any = C ? q : void 0;
  if ((n as any) != (null as any)) {
    let h: any;
    return ((e as any)[8] as any) !== (g as any) || ((e as any)[9] as any) !== (n as any) || ((e as any)[10] as any) !== (l as any) || ((e as any)[11] as any) !== (f as any) || ((e as any)[12] as any) !== (c as any) ? (h = ((a as any).jsx as any)(ue, {
      intent: g,
      provider: n,
      reason: l,
      repoGranted: c,
      sentAtMs: f
    }), (e as any)[8] = g, (e as any)[9] = n, (e as any)[10] = l, (e as any)[11] = f, (e as any)[12] = c, (e as any)[13] = h) : h = (e as any)[13], h;
  }
  const r: any = (g as any) === ("access" as any);
  let _: any, R: any, m: any, k: any, u: any, o: any;
  if (((e as any)[14] as any) !== (t as any) || ((e as any)[15] as any) !== (x as any) || ((e as any)[16] as any) !== (E as any) || ((e as any)[17] as any) !== (r as any) || ((e as any)[18] as any) !== (D as any) || ((e as any)[19] as any) !== (l as any) || ((e as any)[20] as any) !== (f as any) || ((e as any)[21] as any) !== (c as any) || ((e as any)[22] as any) !== (G as any) || ((e as any)[23] as any) !== (b as any)) {
    let h: any;
    ((e as any)[30] as any) !== (r as any) || ((e as any)[31] as any) !== (l as any) || ((e as any)[32] as any) !== (f as any) || ((e as any)[33] as any) !== (b as any) ? (h = (s: any): any => {
      const L: any = (ae as any)(s);
      if ((L as any) == (null as any)) return [];
      const T: any = (((b as any).integrations as any).find as any)((P: any): any => ((P as any).platform as any) === (s as any)),
        O: any = (T?.isConnected as any) === (!0 as any),
        v: any = !r && (fe as any)({
          reason: l,
          sentAtMs: f,
          connectedAtMs: T?.connectedAtMs
        });
      return [{
        platform: s,
        displayName: (L as any).displayName,
        isConnected: O,
        needsReconnect: v
      }];
    }, (e as any)[30] = r, (e as any)[31] = l, (e as any)[32] = f, (e as any)[33] = b, (e as any)[34] = h) : h = (e as any)[34];
    const M: any = ((we as any).flatMap as any)(h),
      B: any = !r && (l as any) != (null as any) && ((l as any).length as any) > (0 as any) && ((M as any).every as any)(Me);
    let I: any;
    if (r) {
      if (c) {
        let s: any;
        ((e as any)[37] as any) !== (t as any) ? (s = (t as any)({
          id: "VgmSvp"
        }), (e as any)[37] = t, (e as any)[38] = s) : s = (e as any)[38], I = s;
      } else {
        let s: any;
        ((e as any)[39] as any) !== (t as any) ? (s = (t as any)({
          id: "NLXecH"
        }), (e as any)[39] = t, (e as any)[40] = s) : s = (e as any)[40], I = s;
      }
    } else {
      let s: any;
      ((e as any)[35] as any) !== (t as any) ? (s = (t as any)({
        id: "xDeR2v"
      }), (e as any)[35] = t, (e as any)[36] = s) : s = (e as any)[36], I = s;
    }
    let $: any;
    if (r) {
      let s: any;
      ((e as any)[41] as any) !== (t as any) || ((e as any)[42] as any) !== (c as any) ? (s = (t as any)(c ? {
        id: "7KByAE"
      } : {
        id: "NWocBB"
      }), (e as any)[41] = t, (e as any)[42] = c, (e as any)[43] = s) : s = (e as any)[43], $ = s;
    } else if (B) {
      let s: any;
      ((e as any)[44] as any) !== (t as any) || ((e as any)[45] as any) !== (l as any) ? (s = (t as any)({
        id: "f2FSdn",
        values: {
          reason: l
        }
      }), (e as any)[44] = t, (e as any)[45] = l, (e as any)[46] = s) : s = (e as any)[46], $ = s;
    } else {
      let s: any;
      ((e as any)[47] as any) !== (t as any) ? (s = (t as any)({
        id: "pm4BbY"
      }), (e as any)[47] = t, (e as any)[48] = s) : s = (e as any)[48], $ = s;
    }
    const N: any = ((M as any).some as any)(ve);
    let H: any;
    ((e as any)[49] as any) !== (x as any) || ((e as any)[50] as any) !== (E as any) ? (H = async (s: any): Promise<any> => {
      ((s as any).isConnected || (await (x as any)((oe as any)((s as any).platform, (s as any).displayName)))) && (await (E as any)((s as any).platform));
    }, (e as any)[49] = x, (e as any)[50] = E, (e as any)[51] = H) : H = (e as any)[51];
    const V: any = H;
    R = Ce, k = G, u = (_e as any).card, ((e as any)[52] as any) !== ($ as any) || ((e as any)[53] as any) !== (I as any) || ((e as any)[54] as any) !== (G as any) ? (o = ((a as any).jsx as any)(je, {
      subtitle: $,
      title: I,
      titleId: G
    }), (e as any)[52] = $, (e as any)[53] = I, (e as any)[54] = G, (e as any)[55] = o) : o = (e as any)[55], _ = xe, m = ((M as any).map as any)((s: any): any => {
      const L: any = !(s as any).needsReconnect && (s as any).isConnected && (!r || c),
        T: any = {
          className: "sand-78zum5 sand-6s0dn4 sand-1nejdyq sand-2lah0s sand-134ynso"
        };
      return ((a as any).jsx as any)(be, {
        disabled: D || L,
        label: (s as any).displayName,
        leading: ((a as any).jsx as any)("span", {
          ...(Z as any)((de as any).rowLeading),
          children: ((a as any).jsx as any)(ne, {
            platform: (s as any).platform,
            size: 18
          })
        }),
        onClick: (): any => {
          L || (V as any)(s);
        },
        ...(N ? {
          trailing: ((a as any).jsx as any)("span", {
            ...(Z as any)((de as any).rowTrailing),
            children: L ? ((a as any).jsxs as any)("span", {
              ...T,
              children: [((a as any).jsx as any)(Y, {
                "aria-hidden": !0,
                color: "green",
                name: "check-circle",
                size: "sm"
              }), ((a as any).jsx as any)(W, {
                size: "sm",
                children: ((a as any).jsx as any)(K, {
                  id: "QHcLEN"
                })
              })]
            }) : ((a as any).jsxs as any)((a as any).Fragment, {
              children: [((a as any).jsx as any)(W, {
                size: "sm",
                children: (s as any).isConnected && !(s as any).needsReconnect ? ((a as any).jsx as any)(K, {
                  id: "dJNmzF"
                }) : ((a as any).jsx as any)(K, {
                  id: "iSLIjg"
                })
              }), ((a as any).jsx as any)(Y, {
                "aria-hidden": !0,
                name: "arrow-right-up",
                size: "sm"
              })]
            })
          })
        } : {})
      }, (s as any).platform);
    }), (e as any)[14] = t, (e as any)[15] = x, (e as any)[16] = E, (e as any)[17] = r, (e as any)[18] = D, (e as any)[19] = l, (e as any)[20] = f, (e as any)[21] = c, (e as any)[22] = G, (e as any)[23] = b, (e as any)[24] = _, (e as any)[25] = R, (e as any)[26] = m, (e as any)[27] = k, (e as any)[28] = u, (e as any)[29] = o;
  } else _ = (e as any)[24], R = (e as any)[25], m = (e as any)[26], k = (e as any)[27], u = (e as any)[28], o = (e as any)[29];
  let S: any;
  ((e as any)[56] as any) !== (_ as any) || ((e as any)[57] as any) !== (m as any) ? (S = ((a as any).jsx as any)(_, {
    children: m
  }), (e as any)[56] = _, (e as any)[57] = m, (e as any)[58] = S) : S = (e as any)[58];
  let A: any;
  return ((e as any)[59] as any) !== (R as any) || ((e as any)[60] as any) !== (k as any) || ((e as any)[61] as any) !== (u as any) || ((e as any)[62] as any) !== (o as any) || ((e as any)[63] as any) !== (S as any) ? (A = ((a as any).jsxs as any)(R, {
    "aria-labelledby": k,
    style: u,
    children: [o, S]
  }), (e as any)[59] = R, (e as any)[60] = k, (e as any)[61] = u, (e as any)[62] = o, (e as any)[63] = S, (e as any)[64] = A) : A = (e as any)[64], A;
}
function ve(this: any, d: any): any {
  return (d as any).isConnected;
}
function Me(this: any, d: any): any {
  return (d as any).needsReconnect || !(d as any).isConnected;
}
function me(this: any): any {}
function Ie(this: any, d: any, e: any): any {
  if ((e as any) == (null as any) || ((e as any).length as any) === (0 as any)) return !1;
  const n: any = ((e as any).toLowerCase as any)();
  return ((((d as any).integrations as any).find as any)((g: any): any => ((g as any).platform as any) === ("github" as any))?.grantedRepos?.some((g: any): any => (((g as any).toLowerCase as any)() as any) === (n as any)) as any) === (!0 as any);
}
function ue(this: any, d: any): any {
  (ue as any).d = 896;
  const e: any = ((ee as any).c as any)(56),
    {
      provider: n,
      intent: g,
      reason: l,
      repoGranted: z,
      sentAtMs: q
    }: any = d,
    {
      _: t
    }: any = (J as any)(),
    {
      view: b
    }: any = (ie as any)();
  (U as any)((((te as any)() as any).listenerIntegrations as any).load);
  const {
      connect: w,
      isPending: E
    }: any = (le as any)(),
    D: any = (ce as any)(),
    [x, G]: any = ((se as any).useState as any)(!1);
  let C: any, p: any, i: any, y: any, j: any, c: any, f: any;
  if (((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (D as any) || ((e as any)[2] as any) !== (w as any) || ((e as any)[3] as any) !== (g as any) || ((e as any)[4] as any) !== (x as any) || ((e as any)[5] as any) !== (n as any) || ((e as any)[6] as any) !== (l as any) || ((e as any)[7] as any) !== (z as any) || ((e as any)[8] as any) !== (q as any) || ((e as any)[9] as any) !== (b as any)) {
    f = ((Symbol as any).for as any)("react.early_return_sentinel");
    e: {
      if (y = (ae as any)(n), (y as any) == (null as any)) {
        f = null;
        break e;
      }
      i = (g as any) === ("access" as any);
      let h: any;
      ((e as any)[17] as any) !== (w as any) || ((e as any)[18] as any) !== (n as any) ? (h = async (): Promise<any> => {
        await (w as any)(n), (G as any)(!0);
      }, (e as any)[17] = w, (e as any)[18] = n, (e as any)[19] = h) : h = (e as any)[19], c = h;
      let M: any, B: any;
      if (((e as any)[20] as any) !== (i as any) || ((e as any)[21] as any) !== (n as any) || ((e as any)[22] as any) !== (l as any) || ((e as any)[23] as any) !== (q as any) || ((e as any)[24] as any) !== ((b as any).integrations as any)) {
        let N: any;
        ((e as any)[27] as any) !== (n as any) ? (N = (H: any): any => ((H as any).platform as any) === (n as any), (e as any)[27] = n, (e as any)[28] = N) : N = (e as any)[28], M = (((b as any).integrations as any).find as any)(N), B = !i && (fe as any)({
          reason: l,
          sentAtMs: q,
          connectedAtMs: M?.connectedAtMs
        }), (e as any)[20] = i, (e as any)[21] = n, (e as any)[22] = l, (e as any)[23] = q, (e as any)[24] = (b as any).integrations, (e as any)[25] = M, (e as any)[26] = B;
      } else M = (e as any)[25], B = (e as any)[26];
      const I: any = B,
        $: any = (M?.isConnected as any) === (!0 as any);
      if (C = async (): Promise<any> => {
        ($ || (await (D as any)((oe as any)(n, (y as any).displayName)))) && (await (i ? (w as any)(n) : (c as any)()));
      }, j = i && z || !i && !I && $, x && j && (G as any)(!1), i) {
        let N: any;
        ((e as any)[29] as any) !== (t as any) || ((e as any)[30] as any) !== (z as any) ? (N = (t as any)(z ? {
          id: "7KByAE"
        } : {
          id: "NLXecH"
        }), (e as any)[29] = t, (e as any)[30] = z, (e as any)[31] = N) : N = (e as any)[31], p = N;
      } else if (I) p = (t as any)({
        id: "T2bXh+",
        values: {
          0: (y as any).displayName,
          reason: l
        }
      });else {
        let N: any;
        ((e as any)[32] as any) !== (t as any) ? (N = (t as any)({
          id: "hPP8ld"
        }), (e as any)[32] = t, (e as any)[33] = N) : N = (e as any)[33], p = N;
      }
    }
    (e as any)[0] = t, (e as any)[1] = D, (e as any)[2] = w, (e as any)[3] = g, (e as any)[4] = x, (e as any)[5] = n, (e as any)[6] = l, (e as any)[7] = z, (e as any)[8] = q, (e as any)[9] = b, (e as any)[10] = C, (e as any)[11] = p, (e as any)[12] = i, (e as any)[13] = y, (e as any)[14] = j, (e as any)[15] = c, (e as any)[16] = f;
  } else C = (e as any)[10], p = (e as any)[11], i = (e as any)[12], y = (e as any)[13], j = (e as any)[14], c = (e as any)[15], f = (e as any)[16];
  if ((f as any) !== (((Symbol as any).for as any)("react.early_return_sentinel") as any)) return f;
  let r: any;
  ((e as any)[34] as any) !== (t as any) || ((e as any)[35] as any) !== (i as any) ? (r = (t as any)(i ? {
    id: "dJNmzF"
  } : {
    id: "iSLIjg"
  }), (e as any)[34] = t, (e as any)[35] = i, (e as any)[36] = r) : r = (e as any)[36];
  const _: any = p,
    R: any = (y as any).displayName;
  let m: any;
  ((e as any)[37] as any) !== (i as any) || ((e as any)[38] as any) !== (x as any) || ((e as any)[39] as any) !== (c as any) ? (m = x && !i ? {
    status: "waiting",
    onReopen: (): any => {
      (c as any)();
    },
    onRetry: (): any => {
      (c as any)();
    }
  } : null, (e as any)[37] = i, (e as any)[38] = x, (e as any)[39] = c, (e as any)[40] = m) : m = (e as any)[40];
  let k: any;
  ((e as any)[41] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (k = {
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1849jeq sand-1gnnpzl sand-2lah0s sand-ur7f20 sand-arj5zm"
  }, (e as any)[41] = k) : k = (e as any)[41];
  let u: any;
  ((e as any)[42] as any) !== (n as any) ? (u = ((a as any).jsx as any)("span", {
    ...k,
    children: ((a as any).jsx as any)(ne, {
      platform: n,
      size: 20
    })
  }), (e as any)[42] = n, (e as any)[43] = u) : u = (e as any)[43];
  let o: any;
  ((e as any)[44] as any) !== (C as any) ? (o = (): any => {
    (C as any)();
  }, (e as any)[44] = C, (e as any)[45] = o) : o = (e as any)[45];
  let S: any;
  ((e as any)[46] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (S = [], (e as any)[46] = S) : S = (e as any)[46];
  let A: any;
  return ((e as any)[47] as any) !== (p as any) || ((e as any)[48] as any) !== (E as any) || ((e as any)[49] as any) !== ((y as any).displayName as any) || ((e as any)[50] as any) !== (j as any) || ((e as any)[51] as any) !== (r as any) || ((e as any)[52] as any) !== (m as any) || ((e as any)[53] as any) !== (u as any) || ((e as any)[54] as any) !== (o as any) ? (A = ((a as any).jsx as any)(Se, {
    actionLabel: r,
    description: _,
    displayName: R,
    handoff: m,
    icon: u,
    isActionPending: E,
    isAdminDisabled: !1,
    isConnected: j,
    isTeam: !1,
    onAction: o,
    onBrowseMore: me,
    suggestions: S,
    toolCount: 0
  }), (e as any)[47] = p, (e as any)[48] = E, (e as any)[49] = (y as any).displayName, (e as any)[50] = j, (e as any)[51] = r, (e as any)[52] = m, (e as any)[53] = u, (e as any)[54] = o, (e as any)[55] = A) : A = (e as any)[55], A;
}
export { Ae as L, Re as S };
//# debugId=75523828-d687-4f59-b5df-43aa91af2e23
