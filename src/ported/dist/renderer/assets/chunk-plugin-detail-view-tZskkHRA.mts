declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "bfa6f54f-7d5f-40ad-9b69-022db2fb3eee", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-bfa6f54f-7d5f-40ad-9b69-022db2fb3eee");
  } catch (e: any) {}
} as any)();
import { c as B, u as ts, j as n, T as I, r as W, p as Ks } from "./index.eager-vendor-Qbf9YA6n.js";
import { cq as Be, cs as me, bO as Oe, f5 as $e, b9 as Ue, bA as ee, e9 as Ke, eb as Bs, f6 as Vs, r as g, ed as fe, ec as Me, ea as Ge, bj as He, f7 as Ve, ee as Zs, f8 as We, f9 as Ze, e8 as Je, fa as Xe, fb as he, fc as Qe, fd as pe, fe as Ye, ff as je, a_ as sn, cu as en, fg as nn, fh as an, aK as Js, aT as tn } from "./index.eager-app-Cj5f8Gby.js";
import { i as $s, a as Ws } from "./chunk-finance-CSw6gjXN.js";
import { aY as us } from "./index.eager-platform-Dcfeegfw.js";
import { z as X, W as hs, g as Es, H as ln, m as dn, bx as cn } from "./index-ZYxf-aBb.js";
import { a as rn } from "./chunk-provider-listener-integrations-CR9f28xA.js";
import { C as on, b as un } from "./chunk-plugins-rows-2d0UrD7L.js";
import { C as mn, S as fn, f as xe, p as hn, i as pn, a as jn } from "./chunk-view-BudImuR0.js";
import { t as xn, r as be, e as bn, p as yn } from "./chunk-marketplace-browse-model-DoOY91TS.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
import "./chunk-use-active-option-scroll-B1hXdW5d.js";
import "./chunk-wipe-navigation-B3wgZxtA.js";
import "./chunk-pane-header-DzXd4Vgr.js";
import "./chunk-scroll-pane-CoxKzaOs.js";
import "./chunk-native-plugin-state-AwCLFZLB.js";
import "./chunk-provider-credentials-yP7QsOsy.js";
function ne(this: any, l: any): any {
  (ne as any).d = 898;
  const s: any = ((B as any).c as any)(35),
    {
      server: e,
      isBusy: a
    }: any = l,
    {
      _: t
    }: any = (ts as any)(),
    i: any = (e as any).cursorScmProvider,
    d: any = (rn as any)(),
    r: any = (Be as any)(),
    {
      refetch: m
    }: any = (me as any)();
  if ((i as any) == (null as any) || ((e as any).credentialIsCursorAccount as any) === (!0 as any)) return null;
  const c: any = (Oe as any)(i)?.displayName ?? (e as any).name,
    x: any = a || (d as any).isPending;
  if (((e as any).status as any) === ("needsAuth" as any)) {
    let j: any;
    ((s as any)[0] as any) !== (i as any) || ((s as any)[1] as any) !== (d as any) ? (j = (): any => {
      ((d as any).connect as any)(i);
    }, (s as any)[0] = i, (s as any)[1] = d, (s as any)[2] = j) : j = (s as any)[2];
    let k: any;
    ((s as any)[3] as any) !== (c as any) ? (k = ((n as any).jsx as any)(I, {
      id: "trIsPs",
      values: {
        providerName: c
      }
    }), (s as any)[3] = c, (s as any)[4] = k) : k = (s as any)[4];
    let w: any;
    return ((s as any)[5] as any) !== (x as any) || ((s as any)[6] as any) !== (j as any) || ((s as any)[7] as any) !== (k as any) ? (w = ((n as any).jsx as any)(X, {
      disabled: x,
      onClick: j,
      size: "lg",
      type: "button",
      variant: "secondary",
      children: k
    }), (s as any)[5] = x, (s as any)[6] = j, (s as any)[7] = k, (s as any)[8] = w) : w = (s as any)[8], w;
  }
  let f: any;
  ((s as any)[9] as any) !== (t as any) || ((s as any)[10] as any) !== (r as any) || ((s as any)[11] as any) !== (i as any) || ((s as any)[12] as any) !== (c as any) || ((s as any)[13] as any) !== (m as any) || ((s as any)[14] as any) !== (d as any) ? (f = (): any => {
    (r as any)({
      title: (t as any)({
        id: "8U6a8X",
        values: {
          providerName: c
        }
      }),
      description: (t as any)({
        id: "/rs6zp",
        values: {
          providerName: c
        }
      }),
      confirmLabel: (t as any)({
        id: "+K0AvT"
      }),
      cancelLabel: (t as any)({
        id: "dEgA5A"
      }),
      destructive: !0,
      perform: async (): Promise<any> => (await ((d as any).disconnect as any)(i), (m as any)(), null)
    });
  }, (s as any)[9] = t, (s as any)[10] = r, (s as any)[11] = i, (s as any)[12] = c, (s as any)[13] = m, (s as any)[14] = d, (s as any)[15] = f) : f = (s as any)[15];
  const p: any = f;
  let u: any;
  ((s as any)[16] as any) !== (x as any) || ((s as any)[17] as any) !== (i as any) || ((s as any)[18] as any) !== (d as any) ? (u = (i as any) === ("github" as any) ? ((n as any).jsx as any)(X, {
    disabled: x,
    onClick: (): any => {
      ((d as any).connect as any)(i);
    },
    size: "lg",
    type: "button",
    variant: "secondary",
    children: ((n as any).jsx as any)(I, {
      id: "dJNmzF"
    })
  }) : null, (s as any)[16] = x, (s as any)[17] = i, (s as any)[18] = d, (s as any)[19] = u) : u = (s as any)[19];
  let b: any;
  ((s as any)[20] as any) !== (i as any) || ((s as any)[21] as any) !== (d as any) ? (b = (): any => {
    ((d as any).reconnect as any)(i);
  }, (s as any)[20] = i, (s as any)[21] = d, (s as any)[22] = b) : b = (s as any)[22];
  let h: any;
  ((s as any)[23] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = ((n as any).jsx as any)(I, {
    id: "gcoiFh"
  }), (s as any)[23] = h) : h = (s as any)[23];
  let y: any;
  ((s as any)[24] as any) !== (x as any) || ((s as any)[25] as any) !== (b as any) ? (y = ((n as any).jsx as any)(X, {
    disabled: x,
    onClick: b,
    size: "lg",
    type: "button",
    variant: "secondary",
    children: h
  }), (s as any)[24] = x, (s as any)[25] = b, (s as any)[26] = y) : y = (s as any)[26];
  let v: any;
  ((s as any)[27] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = ((n as any).jsx as any)(I, {
    id: "+K0AvT"
  }), (s as any)[27] = v) : v = (s as any)[27];
  let N: any;
  ((s as any)[28] as any) !== (p as any) || ((s as any)[29] as any) !== (x as any) ? (N = ((n as any).jsx as any)(X, {
    disabled: x,
    onClick: p,
    sentiment: "danger",
    size: "lg",
    type: "button",
    variant: "secondary",
    children: v
  }), (s as any)[28] = p, (s as any)[29] = x, (s as any)[30] = N) : N = (s as any)[30];
  let o: any;
  return ((s as any)[31] as any) !== (u as any) || ((s as any)[32] as any) !== (y as any) || ((s as any)[33] as any) !== (N as any) ? (o = ((n as any).jsxs as any)((n as any).Fragment, {
    children: [u, y, N]
  }), (s as any)[31] = u, (s as any)[32] = y, (s as any)[33] = N, (s as any)[34] = o) : o = (s as any)[34], o;
}
function ye(this: any, l: any): any {
  if (((l as any).marketplace?.ownership as any) === ("user" as any)) return null;
  const s: any = ($e as any)((l as any).id);
  return (s as any) == (null as any) ? null : ((l as any).isPublicListed as any) === (!0 as any) ? `https://x.ai/bot/plugin/${(l as any).id}` : s;
}
function vn(this: any, l: any): any {
  return (fe as any)(l);
}
function Nn(this: any, l: any): any {
  return ((l as any).accountKey as any) !== (Zs as any) || ((l as any).status as any) !== ("needsAuth" as any);
}
function gn(this: any, l: any): any {
  return ((l as any).servedBy as any) === ("grok" as any) && (((l as any).accountKey as any) === (Zs as any) || ((l as any).accountKey as any) === (Vs as any));
}
function ve(this: any, l: any): any {
  (ve as any).d = 1178;
  const s: any = ((B as any).c as any)(88),
    {
      slots: e,
      isBusy: a,
      onAuthenticate: t,
      onAddAccount: i,
      onRenameAccount: d,
      onRemoveAccount: r
    }: any = l,
    {
      i18n: m,
      _: c
    }: any = (ts as any)(),
    x: any = (Ue as any)("mcp_multi_account"),
    f: any = (ee as any)(),
    p: any = (Ke as any)(),
    [u, b]: any = ((W as any).useState as any)(null),
    [h, y]: any = ((W as any).useState as any)(null),
    [v, N]: any = ((W as any).useState as any)(null),
    o: any = (e as any)[0];
  if ((o as any) == (null as any)) return null;
  const j: any = (o as any).id,
    k: any = x && ((o as any).url as any) != (null as any) && ((o as any).servedBy as any) !== ("grok" as any) && ((o as any).cursorScmProvider as any) == (null as any),
    w: any = (o as any).rowServerIdentifier;
  let A: any;
  ((s as any)[0] as any) !== (e as any) ? (A = new (Set as any)(((e as any).map as any)(wn)), (s as any)[0] = e, (s as any)[1] = A) : A = (s as any)[1];
  const T: any = A;
  let R: any;
  ((s as any)[2] as any) !== (e as any) ? (R = new (Set as any)(((e as any).map as any)(kn)), (s as any)[2] = e, (s as any)[3] = R) : R = (s as any)[3];
  const C: any = R;
  let S: any, P: any, D: any, L: any, E: any, O: any;
  if (((s as any)[4] as any) !== (c as any) || ((s as any)[5] as any) !== (h as any) || ((s as any)[6] as any) !== (k as any) || ((s as any)[7] as any) !== (v as any) || ((s as any)[8] as any) !== (u as any) || ((s as any)[9] as any) !== (p as any) || ((s as any)[10] as any) !== (m as any) || ((s as any)[11] as any) !== (a as any) || ((s as any)[12] as any) !== (i as any) || ((s as any)[13] as any) !== (t as any) || ((s as any)[14] as any) !== (r as any) || ((s as any)[15] as any) !== (d as any) || ((s as any)[16] as any) !== (f as any) || ((s as any)[17] as any) !== (w as any) || ((s as any)[18] as any) !== (j as any) || ((s as any)[19] as any) !== (C as any) || ((s as any)[20] as any) !== (T as any) || ((s as any)[21] as any) !== (e as any)) {
    const F: any = [],
      Z: any = `${w}--`;
    for (const [q, z] of p) {
      if (!((q as any).startsWith as any)(Z) || ((T as any).has as any)(q) || ((z as any).status as any) !== ("waiting" as any)) continue;
      const M: any = ((q as any).slice as any)((Z as any).length);
      ((C as any).has as any)(M) || ((F as any).push as any)({
        key: q,
        label: M
      });
    }
    let es: any;
    ((s as any)[28] as any) !== (u as any) ? (es = (u as any) != (null as any) && ((Bs as any)((u as any).draft) as any) === (Vs as any) && ((Bs as any)((u as any).draft) as any) !== ((u as any).accountKey as any), (s as any)[28] = u, (s as any)[29] = es) : es = (s as any)[29];
    const Q: any = es;
    let J: any;
    ((s as any)[30] as any) !== (h as any) ? (J = (h as any) != (null as any) && ((Bs as any)(h) as any) === (Vs as any), (s as any)[30] = h, (s as any)[31] = J) : J = (s as any)[31], S = J;
    let ls: any;
    ((s as any)[32] as any) !== (u as any) || ((s as any)[33] as any) !== (d as any) || ((s as any)[34] as any) !== (j as any) ? (ls = (): any => {
      if ((u as any) == (null as any)) return;
      const q: any = (Bs as any)((u as any).draft);
      if (((q as any).length as any) === (0 as any) || (q as any) === ((u as any).accountKey as any)) {
        (b as any)(null);
        return;
      }
      (q as any) !== (Vs as any) && ((b as any)(null), (d as any)({
        serverId: j,
        accountKey: (u as any).accountKey,
        newAccountKey: q
      }));
    }, (s as any)[32] = u, (s as any)[33] = d, (s as any)[34] = j, (s as any)[35] = ls) : ls = (s as any)[35];
    const Y: any = ls;
    let cs: any;
    ((s as any)[36] as any) !== (h as any) || ((s as any)[37] as any) !== (S as any) || ((s as any)[38] as any) !== (i as any) || ((s as any)[39] as any) !== (t as any) || ((s as any)[40] as any) !== (j as any) || ((s as any)[41] as any) !== (C as any) ? (cs = (): any => {
      if ((h as any) == (null as any) || S) return;
      const q: any = (Bs as any)(h);
      if (((q as any).length as any) !== (0 as any)) {
        if ((y as any)(null), ((C as any).has as any)(q)) {
          (t as any)({
            serverId: j,
            accountKey: q
          });
          return;
        }
        (i as any)({
          serverId: j,
          label: q
        });
      }
    }, (s as any)[36] = h, (s as any)[37] = S, (s as any)[38] = i, (s as any)[39] = t, (s as any)[40] = j, (s as any)[41] = C, (s as any)[42] = cs) : cs = (s as any)[42], P = cs;
    let G: any;
    ((s as any)[43] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (G = (g as any)("sand-9f619 sand-1y1aw1k sand-1pic42t sand-10b6aqq sand-1onr9mi"), (s as any)[43] = G) : G = (s as any)[43];
    let ns: any;
    if (((s as any)[44] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ns = ((n as any).jsx as any)(I, {
      id: "bPwFdf"
    }), (s as any)[44] = ns) : ns = (s as any)[44], ((s as any)[45] as any) !== (G as any) ? (O = ((n as any).jsx as any)(us, {
      as: "h3",
      className: G,
      color: "tertiary",
      size: "sm",
      children: ns
    }), (s as any)[45] = G, (s as any)[46] = O) : O = (s as any)[46], ((s as any)[47] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (D = (g as any)("sand-plugins-detail__accounts", "sand-9f619 sand-ixl9f9 sand-i07v4r"), (s as any)[47] = D) : D = (s as any)[47], ((s as any)[48] as any) !== (c as any) || ((s as any)[49] as any) !== (k as any) || ((s as any)[50] as any) !== (v as any) || ((s as any)[51] as any) !== (u as any) || ((s as any)[52] as any) !== (m as any) || ((s as any)[53] as any) !== (a as any) || ((s as any)[54] as any) !== (Q as any) || ((s as any)[55] as any) !== (t as any) || ((s as any)[56] as any) !== (r as any) || ((s as any)[57] as any) !== (j as any) || ((s as any)[58] as any) !== (e as any) || ((s as any)[59] as any) !== (Y as any)) {
      let q: any;
      ((s as any)[61] as any) !== (c as any) || ((s as any)[62] as any) !== (k as any) || ((s as any)[63] as any) !== (v as any) || ((s as any)[64] as any) !== (u as any) || ((s as any)[65] as any) !== (m as any) || ((s as any)[66] as any) !== (a as any) || ((s as any)[67] as any) !== (Q as any) || ((s as any)[68] as any) !== (t as any) || ((s as any)[69] as any) !== (r as any) || ((s as any)[70] as any) !== (j as any) || ((s as any)[71] as any) !== (Y as any) ? (q = (z: any, M: any): any => {
        const as: any = ((z as any).servedBy as any) === ("grok" as any),
          ss: any = (gn as any)(z),
          _: any = ss ? (c as any)({
            id: "dlHT84"
          }) : (vn as any)((z as any).accountKey),
          V: any = !as && (u?.accountKey as any) === ((z as any).accountKey as any) ? u : null,
          ps: any = (He as any)((z as any).statusDetail, m),
          fs: any = ss && ((z as any).rowServerIdentifier as any) === (Ve as any) && ((z as any).status as any) === ("connected" as any);
        return ((n as any).jsxs as any)("div", {
          children: [(M as any) > (0 as any) ? ((n as any).jsx as any)("div", {
            "aria-hidden": !0,
            className: (g as any)("sand-9f619 sand-28ko6u sand-1diwwjn sand-bmvrgn sand-1m4ooaa")
          }) : null, ((n as any).jsxs as any)("div", {
            className: (g as any)((({
              0: {
                className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi"
              },
              1: {
                className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-1onr9mi sand-18d9i69"
              }
            } as any)[(!!fs as any) << (0 as any)] as any).className),
            children: [((n as any).jsxs as any)("span", {
              className: (g as any)("sand-9f619 sand-78zum5 sand-dt5ytf sand-12mrbbr sand-euugli"),
              children: [((n as any).jsxs as any)("span", {
                className: (g as any)("sand-9f619 sand-78zum5 sand-6s0dn4 sand-1nejdyq sand-euugli"),
                children: [(V as any) != (null as any) ? ((n as any).jsx as any)("input", {
                  "aria-label": (c as any)({
                    id: "BJ7R7v",
                    values: {
                      label: _
                    }
                  }),
                  autoFocus: !0,
                  className: (g as any)("sand-9f619 sand-5f5z56 sand-15kz4h8 sand-193iq5w sand-1717udv sand-c342km sand-ng3xce sand-jbqb8w sand-1wd3ewq sand-jb2p0i sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-1t137rt"),
                  onChange: (os: any): any => (b as any)({
                    ...V,
                    draft: ((os as any).target as any).value
                  }),
                  onKeyDown: (os: any): any => {
                    ((os as any).key as any) === ("Enter" as any) && (Y as any)(), ((os as any).key as any) === ("Escape" as any) && (b as any)(null);
                  },
                  type: "text",
                  value: (V as any).draft
                }) : ((n as any).jsx as any)("span", {
                  className: (g as any)((({
                    0: {
                      className: "sand-9f619 sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-1wd3ewq sand-lyipyv sand-uxw1ft"
                    },
                    1: {
                      className: "sand-2lah0s sand-4b2ntj sand-1wm8ruf sand-1d3mw78 sand-uxw1ft"
                    }
                  } as any)[(!!ss as any) << (0 as any)] as any).className),
                  children: _
                }), k && !as ? ((n as any).jsx as any)("button", {
                  "aria-expanded": (V as any) != (null as any),
                  "aria-label": (V as any) != (null as any) ? (c as any)({
                    id: "xzJ6xV",
                    values: {
                      label: _
                    }
                  }) : (c as any)({
                    id: "tT4tWM",
                    values: {
                      label: _
                    }
                  }),
                  className: (g as any)("sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-1717udv sand-c342km sand-ng3xce sand-jbqb8w sand-4b2ntj sand-7gh5u8 sand-1ypdohk"),
                  disabled: a,
                  onClick: (): any => {
                    if ((V as any) != (null as any)) {
                      (Y as any)();
                      return;
                    }
                    (b as any)({
                      accountKey: (z as any).accountKey,
                      draft: (z as any).accountKey,
                      isConfirmingRemove: !1
                    });
                  },
                  type: "button",
                  children: ((n as any).jsx as any)(hs, {
                    "aria-hidden": !0,
                    name: (V as any) != (null as any) ? "check" : "pencil-square",
                    size: "xs"
                  })
                }) : null]
              }), (V as any) != (null as any) && Q ? ((n as any).jsx as any)("span", {
                className: "sand-9f619 sand-1wm8ruf sand-1d3mw78 sand-12oo3zp sand-1jh5svw",
                children: ((n as any).jsx as any)(I, {
                  id: "wLsCed"
                })
              }) : null, ((z as any).status as any) === ("error" as any) && (ps as any) != (null as any) ? ((n as any).jsx as any)("span", {
                className: (g as any)("sand-plugins-detail__account-error", "sand-9f619 sand-1wm8ruf sand-1d3mw78 sand-12oo3zp sand-19aaqeu sand-j0a0fe sand-eaf4i8 sand-1hx0egp sand-1ed109x"),
                children: ps
              }) : null]
            }), ((n as any).jsx as any)("span", {
              className: (g as any)("sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-167g77z sand-1c4vz4f sand-2lah0s sand-dl72j9"),
              children: (V as any) == (null as any) ? ((n as any).jsxs as any)((n as any).Fragment, {
                children: [((n as any).jsx as any)(on, {
                  server: z
                }), ((n as any).jsx as any)(mn, {
                  isBusy: a,
                  onAuthenticate: (os: any): any => (t as any)({
                    serverId: os,
                    accountKey: as ? Zs : (z as any).accountKey
                  }),
                  server: z
                }), (We as any)(z) ? ((n as any).jsx as any)(Ne, {
                  isBusy: a,
                  isConfirming: (v as any) === ((z as any).serverIdentifier as any),
                  onConfirm: (): any => {
                    (N as any)(null), (r as any)({
                      serverId: j,
                      accountKey: Zs
                    });
                  },
                  onStart: (): any => (N as any)((z as any).serverIdentifier),
                  title: (z as any).name
                }) : null]
              }) : (Nn as any)(z) ? (V as any).isConfirmingRemove ? ((n as any).jsx as any)(X, {
                "aria-label": (c as any)({
                  id: "XjTWWS",
                  values: {
                    label: _
                  }
                }),
                disabled: a,
                onClick: (): any => {
                  (b as any)(null), (r as any)({
                    serverId: j,
                    accountKey: (z as any).accountKey
                  });
                },
                sentiment: "danger",
                size: "sm",
                type: "button",
                children: ((n as any).jsx as any)(I, {
                  id: "tIBXVv"
                })
              }) : ((n as any).jsx as any)(X, {
                "aria-label": (c as any)({
                  id: "Z+kvAO",
                  values: {
                    label: _
                  }
                }),
                disabled: a,
                onClick: (): any => (b as any)({
                  ...V,
                  isConfirmingRemove: !0
                }),
                sentiment: "danger",
                size: "sm",
                type: "button",
                variant: "secondary",
                children: ((n as any).jsx as any)(I, {
                  id: "t/YqKh"
                })
              }) : null
            })]
          }), fs ? ((n as any).jsx as any)(fn, {
            isBusy: a
          }) : null]
        }, (z as any).serverIdentifier);
      }, (s as any)[61] = c, (s as any)[62] = k, (s as any)[63] = v, (s as any)[64] = u, (s as any)[65] = m, (s as any)[66] = a, (s as any)[67] = Q, (s as any)[68] = t, (s as any)[69] = r, (s as any)[70] = j, (s as any)[71] = Y, (s as any)[72] = q) : q = (s as any)[72], L = ((e as any).map as any)(q), (s as any)[48] = c, (s as any)[49] = k, (s as any)[50] = v, (s as any)[51] = u, (s as any)[52] = m, (s as any)[53] = a, (s as any)[54] = Q, (s as any)[55] = t, (s as any)[56] = r, (s as any)[57] = j, (s as any)[58] = e, (s as any)[59] = Y, (s as any)[60] = L;
    } else L = (s as any)[60];
    E = ((F as any).map as any)((q: any): any => {
      const {
        key: z,
        label: M
      }: any = q;
      return ((n as any).jsxs as any)("div", {
        children: [((n as any).jsx as any)("div", {
          "aria-hidden": !0,
          className: (g as any)("sand-9f619 sand-28ko6u sand-1diwwjn sand-bmvrgn sand-1m4ooaa")
        }), ((n as any).jsxs as any)("div", {
          className: (g as any)("sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi"),
          children: [((n as any).jsx as any)("span", {
            className: (g as any)("sand-9f619 sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-1wd3ewq sand-lyipyv sand-uxw1ft"),
            children: (fe as any)(M)
          }), ((n as any).jsxs as any)("span", {
            className: (g as any)("sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-167g77z sand-1c4vz4f sand-2lah0s sand-dl72j9"),
            children: [((n as any).jsx as any)(hs, {
              "aria-hidden": !0,
              modifier: "spin",
              name: "loading",
              size: "sm"
            }), ((n as any).jsx as any)(Es, {
              disabled: a,
              onClick: (): any => (Me as any)(z, f, (): any => (i as any)({
                serverId: j,
                label: M
              })),
              size: "sm",
              type: "button",
              variant: "secondary",
              children: ((n as any).jsx as any)(I, {
                id: "M7SqjM"
              })
            })]
          })]
        })]
      }, z);
    }), (s as any)[4] = c, (s as any)[5] = h, (s as any)[6] = k, (s as any)[7] = v, (s as any)[8] = u, (s as any)[9] = p, (s as any)[10] = m, (s as any)[11] = a, (s as any)[12] = i, (s as any)[13] = t, (s as any)[14] = r, (s as any)[15] = d, (s as any)[16] = f, (s as any)[17] = w, (s as any)[18] = j, (s as any)[19] = C, (s as any)[20] = T, (s as any)[21] = e, (s as any)[22] = S, (s as any)[23] = P, (s as any)[24] = D, (s as any)[25] = L, (s as any)[26] = E, (s as any)[27] = O;
  } else S = (s as any)[22], P = (s as any)[23], D = (s as any)[24], L = (s as any)[25], E = (s as any)[26], O = (s as any)[27];
  let $: any;
  ((s as any)[73] as any) !== (c as any) || ((s as any)[74] as any) !== (h as any) || ((s as any)[75] as any) !== (k as any) || ((s as any)[76] as any) !== (a as any) || ((s as any)[77] as any) !== (S as any) || ((s as any)[78] as any) !== (P as any) ? ($ = k ? ((n as any).jsxs as any)((n as any).Fragment, {
    children: [((n as any).jsx as any)("div", {
      "aria-hidden": !0,
      className: (g as any)("sand-9f619 sand-28ko6u sand-1diwwjn sand-bmvrgn sand-1m4ooaa")
    }), (h as any) == (null as any) ? ((n as any).jsxs as any)("button", {
      className: (g as any)("sand-plugins-detail__add-account", "sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-h8yej3 sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi sand-c342km sand-ng3xce sand-jbqb8w sand-19aaqeu sand-7gh5u8 sand-jb2p0i sand-11wthnw sand-12oo3zp sand-1yc453h sand-1ypdohk"),
      disabled: a,
      onClick: (): any => (y as any)(""),
      type: "button",
      children: [((n as any).jsx as any)(hs, {
        "aria-hidden": !0,
        name: "plus",
        size: "xs"
      }), ((n as any).jsx as any)(I, {
        id: "FGnQEW"
      })]
    }) : ((n as any).jsxs as any)("div", {
      className: (g as any)("sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi"),
      children: [((n as any).jsxs as any)("span", {
        className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-12mrbbr sand-euugli sand-1iyjqo2 sand-s83m0k sand-dl72j9",
        children: [((n as any).jsx as any)("input", {
          "aria-label": (c as any)({
            id: "R2hekE"
          }),
          autoFocus: !0,
          className: (g as any)("sand-9f619 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-1i9suas sand-1fgtraw sand-mzvs34 sand-f159sx sand-ur7f20 sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-18gyud7 sand-1wd3ewq sand-jb2p0i sand-1wm8ruf sand-1t137rt"),
          onChange: (F: any): any => (y as any)(((F as any).target as any).value),
          onKeyDown: (F: any): any => {
            ((F as any).key as any) === ("Enter" as any) && (P as any)(), ((F as any).key as any) === ("Escape" as any) && (y as any)(null);
          },
          placeholder: (c as any)({
            id: "mwTfIH"
          }),
          type: "text",
          value: h
        }), S ? ((n as any).jsx as any)("span", {
          className: "sand-9f619 sand-1wm8ruf sand-1d3mw78 sand-12oo3zp sand-1jh5svw",
          children: ((n as any).jsx as any)(I, {
            id: "wLsCed"
          })
        }) : null]
      }), ((n as any).jsx as any)(Es, {
        disabled: a,
        onClick: P,
        size: "sm",
        type: "button",
        children: ((n as any).jsx as any)(I, {
          id: "yIVrHZ"
        })
      }), ((n as any).jsx as any)(Es, {
        onClick: (): any => (y as any)(null),
        size: "sm",
        type: "button",
        variant: "ghost",
        children: ((n as any).jsx as any)(I, {
          id: "dEgA5A"
        })
      })]
    })]
  }) : null, (s as any)[73] = c, (s as any)[74] = h, (s as any)[75] = k, (s as any)[76] = a, (s as any)[77] = S, (s as any)[78] = P, (s as any)[79] = $) : $ = (s as any)[79];
  let K: any;
  ((s as any)[80] as any) !== (D as any) || ((s as any)[81] as any) !== (L as any) || ((s as any)[82] as any) !== (E as any) || ((s as any)[83] as any) !== ($ as any) ? (K = ((n as any).jsxs as any)("div", {
    className: D,
    children: [L, E, $]
  }), (s as any)[80] = D, (s as any)[81] = L, (s as any)[82] = E, (s as any)[83] = $, (s as any)[84] = K) : K = (s as any)[84];
  let rs: any;
  return ((s as any)[85] as any) !== (O as any) || ((s as any)[86] as any) !== (K as any) ? (rs = ((n as any).jsxs as any)("div", {
    children: [O, K]
  }), (s as any)[85] = O, (s as any)[86] = K, (s as any)[87] = rs) : rs = (s as any)[87], rs;
}
function kn(this: any, l: any): any {
  return (l as any).accountKey;
}
function wn(this: any, l: any): any {
  return (Ge as any)((l as any).serverIdentifier);
}
function Ne(this: any, l: any): any {
  (Ne as any).d = 1177;
  const s: any = ((B as any).c as any)(16),
    {
      title: e,
      isBusy: a,
      isConfirming: t,
      onStart: i,
      onConfirm: d
    }: any = l,
    {
      _: r
    }: any = (ts as any)();
  if (t) {
    let f: any;
    ((s as any)[0] as any) !== (r as any) || ((s as any)[1] as any) !== (e as any) ? (f = (r as any)({
      id: "2Du68H",
      values: {
        title: e
      }
    }), (s as any)[0] = r, (s as any)[1] = e, (s as any)[2] = f) : f = (s as any)[2];
    let p: any;
    ((s as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = ((n as any).jsx as any)(I, {
      id: "Ddq3zT"
    }), (s as any)[3] = p) : p = (s as any)[3];
    let u: any;
    return ((s as any)[4] as any) !== (a as any) || ((s as any)[5] as any) !== (d as any) || ((s as any)[6] as any) !== (f as any) ? (u = ((n as any).jsx as any)(X, {
      "aria-label": f,
      disabled: a,
      onClick: d,
      sentiment: "danger",
      size: "sm",
      type: "button",
      children: p
    }), (s as any)[4] = a, (s as any)[5] = d, (s as any)[6] = f, (s as any)[7] = u) : u = (s as any)[7], u;
  }
  let m: any;
  ((s as any)[8] as any) !== (r as any) || ((s as any)[9] as any) !== (e as any) ? (m = (r as any)({
    id: "W1vIjE",
    values: {
      title: e
    }
  }), (s as any)[8] = r, (s as any)[9] = e, (s as any)[10] = m) : m = (s as any)[10];
  let c: any;
  ((s as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = ((n as any).jsx as any)(I, {
    id: "+K0AvT"
  }), (s as any)[11] = c) : c = (s as any)[11];
  let x: any;
  return ((s as any)[12] as any) !== (a as any) || ((s as any)[13] as any) !== (i as any) || ((s as any)[14] as any) !== (m as any) ? (x = ((n as any).jsx as any)(X, {
    "aria-label": m,
    disabled: a,
    onClick: i,
    sentiment: "danger",
    size: "sm",
    type: "button",
    variant: "secondary",
    children: c
  }), (s as any)[12] = a, (s as any)[13] = i, (s as any)[14] = m, (s as any)[15] = x) : x = (s as any)[15], x;
}
const zn: any = {
    sectionLabel: {
      kB7OPa: "sand-9f619",
      kLKAdn: "sand-1y1aw1k",
      kwRFfy: "sand-1pic42t",
      kGO01o: "sand-10b6aqq",
      kZCmMZ: "sand-1onr9mi",
      $$css: !0
    }
  },
  Sn: any = {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-167g77z"
  },
  ae: any = {
    className: "sand-9f619 sand-ixl9f9 sand-i07v4r"
  },
  te: any = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi"
  },
  Ys: any = {
    className: "sand-9f619 sand-28ko6u sand-1diwwjn sand-bmvrgn sand-1m4ooaa"
  },
  _n: any = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi sand-11wthnw sand-d4r4e8 sand-19aaqeu"
  },
  Cn: any = {
    className: "sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-11wthnw sand-d4r4e8 sand-1jh5svw"
  },
  ge: any = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-11wthnw sand-d4r4e8 sand-1jh5svw"
  },
  In: any = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-883omv sand-euugli"
  },
  An: any = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-1td3qas sand-10w6t97 sand-ur7f20 sand-b3r6kr sand-59yu97 sand-19aaqeu"
  },
  ue: any = {
    className: "sand-h8yej3 sand-5yr21d sand-19kjcj4"
  },
  Pn: any = {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-12mrbbr sand-euugli"
  },
  Ln: any = {
    className: "sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-1rhlpx6 sand-1wd3ewq sand-lyipyv sand-uxw1ft"
  },
  Rn: any = {
    className: "sand-1wm8ruf sand-1d3mw78 sand-1jh5svw"
  },
  qn: any = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-883omv sand-euugli"
  },
  Tn: any = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-gd8bvy sand-1fgtraw sand-u4hgxq sand-59yu97 sand-19aaqeu"
  },
  Dn: any = {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-12mrbbr sand-euugli"
  },
  Fn: any = {
    className: "sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-1wd3ewq sand-lyipyv sand-uxw1ft"
  },
  En: any = {
    className: "sand-b3r6kr sand-1wm8ruf sand-1d3mw78 sand-4b2ntj sand-lyipyv sand-uxw1ft"
  },
  Bn: any = {
    className: "sand-2lah0s sand-11wthnw sand-d4r4e8 sand-1wd3ewq sand-ss6m8b"
  },
  On: any = {
    cash: {
      id: "/rHUhS"
    },
    investment: {
      id: "gpF4nE"
    },
    liability: {
      id: "plszrw"
    },
    unknown: {
      id: "AeXO77"
    }
  },
  $n: any = {
    cash: "banknote",
    investment: "chart-line",
    liability: "credit-card",
    unknown: "wallet"
  };
function ke(this: any, l: any): any {
  return `··${l}`;
}
function Un(this: any, l: any, s: any): any {
  const {
    amount: e,
    currency: a
  }: any = s;
  if ((e as any) == (null as any)) return null;
  const t: any = (Number as any)(e);
  if (!((Number as any).isFinite as any)(t)) return null;
  if ((a as any) == (null as any)) return e;
  try {
    return ((l as any).number as any)(t, {
      style: "currency",
      currency: a
    });
  } catch {
    return `${e} ${a}`;
  }
}
function Kn(this: any, l: any, s: any): any {
  if (((l as any).name as any) != (null as any)) return (l as any).name;
  const e: any = (([(l as any).subtype, ((l as any).mask as any) == (null as any) ? void 0 : (ke as any)((l as any).mask)] as any).filter as any)((a: any): any => (a as any) != (null as any));
  return ((e as any).length as any) > (0 as any) ? ((e as any).join as any)(" · ") : s;
}
function Mn(this: any, l: any, s: any): any {
  return (((([s, ((l as any).mask as any) == (null as any) ? void 0 : (ke as any)((l as any).mask), (l as any).subtype] as any).filter as any)((e: any): any => (e as any) != (null as any)) as any).join as any)(" · ");
}
function Gn(this: any, l: any, s: any): any {
  return (l as any).institutionName ?? ((l as any).accounts as any)[0]?.name ?? s;
}
function Hn(this: any, l: any): any {
  return ((l as any).status as any) === ("error" as any) || ((l as any).status as any) === ("disconnected" as any);
}
async function Vn(this: any, {
  remove: l,
  connectionId: s,
  setFailed: e
}: any): Promise<any> {
  (e as any)(!1);
  try {
    await (l as any)(s);
  } catch {
    (e as any)(!0);
  }
}
async function Wn(this: any, {
  start: l,
  setFailed: s
}: any): Promise<any> {
  (s as any)(!1);
  try {
    const e: any = await (l as any)();
    (s as any)(((e as any).status as any) !== ("started" as any));
  } catch {
    (s as any)(!0);
  }
}
function we(this: any, l: any): any {
  (we as any).d = 1185;
  const s: any = ((B as any).c as any)(5),
    {
      connection: e
    }: any = l;
  if (((e as any).institutionLogo as any) != (null as any)) {
    const t: any = `data:image/png;base64,${(e as any).institutionLogo}`;
    let i: any;
    return ((s as any)[0] as any) !== (t as any) ? (i = ((n as any).jsx as any)("img", {
      alt: "",
      src: t,
      ...ue
    }), (s as any)[0] = t, (s as any)[1] = i) : i = (s as any)[1], i;
  }
  if (((e as any).institutionIconUrl as any) != (null as any)) {
    let t: any;
    return ((s as any)[2] as any) !== ((e as any).institutionIconUrl as any) ? (t = ((n as any).jsx as any)("img", {
      alt: "",
      src: (e as any).institutionIconUrl,
      ...ue
    }), (s as any)[2] = (e as any).institutionIconUrl, (s as any)[3] = t) : t = (s as any)[3], t;
  }
  let a: any;
  return ((s as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((n as any).jsx as any)(hs, {
    "aria-hidden": !0,
    name: "building",
    size: 16
  }), (s as any)[4] = a) : a = (s as any)[4], a;
}
function ze(this: any, l: any): any {
  (ze as any).d = 1179;
  const s: any = ((B as any).c as any)(33),
    {
      account: e
    }: any = l,
    {
      i18n: a
    }: any = (ts as any)();
  let t: any, i: any, d: any, r: any, m: any, c: any, x: any, f: any;
  if (((s as any)[0] as any) !== (e as any) || ((s as any)[1] as any) !== (a as any)) {
    const v: any = ((a as any)._ as any)((On as any)[(e as any).accountClass]);
    let N: any;
    ((s as any)[10] as any) !== ((e as any).currency as any) || ((s as any)[11] as any) !== ((e as any).currentBalance as any) || ((s as any)[12] as any) !== (a as any) ? (N = (Un as any)(a, {
      amount: (e as any).currentBalance,
      currency: (e as any).currency
    }), (s as any)[10] = (e as any).currency, (s as any)[11] = (e as any).currentBalance, (s as any)[12] = a, (s as any)[13] = N) : N = (s as any)[13], t = N, f = te, c = qn;
    const o: any = ($n as any)[(e as any).accountClass];
    ((s as any)[14] as any) !== (o as any) ? (x = ((n as any).jsx as any)("span", {
      "aria-hidden": !0,
      ...Tn,
      children: ((n as any).jsx as any)(hs, {
        name: o,
        size: 14
      })
    }), (s as any)[14] = o, (s as any)[15] = x) : x = (s as any)[15], r = Dn, m = ((n as any).jsx as any)("span", {
      ...Fn,
      children: (Kn as any)(e, v)
    }), i = En, d = (Mn as any)(e, v), (s as any)[0] = e, (s as any)[1] = a, (s as any)[2] = t, (s as any)[3] = i, (s as any)[4] = d, (s as any)[5] = r, (s as any)[6] = m, (s as any)[7] = c, (s as any)[8] = x, (s as any)[9] = f;
  } else t = (s as any)[2], i = (s as any)[3], d = (s as any)[4], r = (s as any)[5], m = (s as any)[6], c = (s as any)[7], x = (s as any)[8], f = (s as any)[9];
  let p: any;
  ((s as any)[16] as any) !== (i as any) || ((s as any)[17] as any) !== (d as any) ? (p = ((n as any).jsx as any)("span", {
    ...i,
    children: d
  }), (s as any)[16] = i, (s as any)[17] = d, (s as any)[18] = p) : p = (s as any)[18];
  let u: any;
  ((s as any)[19] as any) !== (r as any) || ((s as any)[20] as any) !== (m as any) || ((s as any)[21] as any) !== (p as any) ? (u = ((n as any).jsxs as any)("span", {
    ...r,
    children: [m, p]
  }), (s as any)[19] = r, (s as any)[20] = m, (s as any)[21] = p, (s as any)[22] = u) : u = (s as any)[22];
  let b: any;
  ((s as any)[23] as any) !== (c as any) || ((s as any)[24] as any) !== (x as any) || ((s as any)[25] as any) !== (u as any) ? (b = ((n as any).jsxs as any)("span", {
    ...c,
    children: [x, u]
  }), (s as any)[23] = c, (s as any)[24] = x, (s as any)[25] = u, (s as any)[26] = b) : b = (s as any)[26];
  let h: any;
  ((s as any)[27] as any) !== (t as any) ? (h = (t as any) != (null as any) ? ((n as any).jsx as any)("span", {
    ...Bn,
    children: t
  }) : null, (s as any)[27] = t, (s as any)[28] = h) : h = (s as any)[28];
  let y: any;
  return ((s as any)[29] as any) !== (b as any) || ((s as any)[30] as any) !== (h as any) || ((s as any)[31] as any) !== (f as any) ? (y = ((n as any).jsxs as any)("div", {
    ...f,
    children: [b, h]
  }), (s as any)[29] = b, (s as any)[30] = h, (s as any)[31] = f, (s as any)[32] = y) : y = (s as any)[32], y;
}
function Se(this: any, l: any): any {
  (Se as any).d = 1180;
  const s: any = ((B as any).c as any)(38),
    {
      connection: e,
      isBusy: a
    }: any = l,
    {
      _: t
    }: any = (ts as any)(),
    {
      remove: i,
      isPending: d
    }: any = (Xe as any)(),
    [r, m]: any = ((W as any).useState as any)(!1),
    [c, x]: any = ((W as any).useState as any)(!1);
  let f: any;
  ((s as any)[0] as any) !== (t as any) || ((s as any)[1] as any) !== (e as any) ? (f = (Gn as any)(e, (t as any)({
    id: "yOxJ0/"
  })), (s as any)[0] = t, (s as any)[1] = e, (s as any)[2] = f) : f = (s as any)[2];
  const p: any = f;
  let u: any;
  ((s as any)[3] as any) !== (e as any) ? (u = ((n as any).jsx as any)("span", {
    "aria-hidden": !0,
    ...An,
    children: ((n as any).jsx as any)(we, {
      connection: e
    })
  }), (s as any)[3] = e, (s as any)[4] = u) : u = (s as any)[4];
  let b: any;
  ((s as any)[5] as any) !== (p as any) ? (b = ((n as any).jsx as any)("span", {
    ...Ln,
    children: p
  }), (s as any)[5] = p, (s as any)[6] = b) : b = (s as any)[6];
  let h: any;
  ((s as any)[7] as any) !== (e as any) ? (h = (Hn as any)(e) ? ((n as any).jsx as any)("span", {
    ...Rn,
    children: ((n as any).jsx as any)(I, {
      id: "NMW5sD"
    })
  }) : null, (s as any)[7] = e, (s as any)[8] = h) : h = (s as any)[8];
  let y: any;
  ((s as any)[9] as any) !== (b as any) || ((s as any)[10] as any) !== (h as any) ? (y = ((n as any).jsxs as any)("span", {
    ...Pn,
    children: [b, h]
  }), (s as any)[9] = b, (s as any)[10] = h, (s as any)[11] = y) : y = (s as any)[11];
  let v: any;
  ((s as any)[12] as any) !== (u as any) || ((s as any)[13] as any) !== (y as any) ? (v = ((n as any).jsxs as any)("span", {
    ...In,
    children: [u, y]
  }), (s as any)[12] = u, (s as any)[13] = y, (s as any)[14] = v) : v = (s as any)[14];
  let N: any;
  ((s as any)[15] as any) !== (t as any) || ((s as any)[16] as any) !== ((e as any).connectionId as any) || ((s as any)[17] as any) !== (a as any) || ((s as any)[18] as any) !== (r as any) || ((s as any)[19] as any) !== (d as any) || ((s as any)[20] as any) !== (i as any) || ((s as any)[21] as any) !== (p as any) ? (N = r ? ((n as any).jsx as any)(X, {
    "aria-label": (t as any)({
      id: "2Du68H",
      values: {
        title: p
      }
    }),
    disabled: a || d,
    onClick: (): any => {
      (m as any)(!1), (Vn as any)({
        remove: i,
        connectionId: (e as any).connectionId,
        setFailed: x
      });
    },
    sentiment: "danger",
    size: "sm",
    type: "button",
    children: ((n as any).jsx as any)(I, {
      id: "Ddq3zT"
    })
  }) : ((n as any).jsx as any)(X, {
    "aria-label": (t as any)({
      id: "W1vIjE",
      values: {
        title: p
      }
    }),
    disabled: a || d,
    onClick: (): any => (m as any)(!0),
    sentiment: "danger",
    size: "sm",
    type: "button",
    variant: "secondary",
    children: ((n as any).jsx as any)(I, {
      id: "+K0AvT"
    })
  }), (s as any)[15] = t, (s as any)[16] = (e as any).connectionId, (s as any)[17] = a, (s as any)[18] = r, (s as any)[19] = d, (s as any)[20] = i, (s as any)[21] = p, (s as any)[22] = N) : N = (s as any)[22];
  let o: any;
  ((s as any)[23] as any) !== (v as any) || ((s as any)[24] as any) !== (N as any) ? (o = ((n as any).jsxs as any)("div", {
    ...te,
    children: [v, N]
  }), (s as any)[23] = v, (s as any)[24] = N, (s as any)[25] = o) : o = (s as any)[25];
  let j: any;
  ((s as any)[26] as any) !== ((e as any).accounts as any) ? (j = (((e as any).accounts as any).map as any)(Zn), (s as any)[26] = (e as any).accounts, (s as any)[27] = j) : j = (s as any)[27];
  let k: any;
  ((s as any)[28] as any) !== (((e as any).accounts as any).length as any) || ((s as any)[29] as any) !== ((e as any).hasSynced as any) ? (k = (((e as any).accounts as any).length as any) === (0 as any) ? ((n as any).jsxs as any)((n as any).Fragment, {
    children: [((n as any).jsx as any)("div", {
      "aria-hidden": !0,
      ...Ys
    }), ((n as any).jsx as any)("div", {
      ..._n,
      children: (e as any).hasSynced ? ((n as any).jsx as any)(I, {
        id: "0yjW5y"
      }) : ((n as any).jsx as any)(I, {
        id: "BOcHTG"
      })
    })]
  }) : null, (s as any)[28] = ((e as any).accounts as any).length, (s as any)[29] = (e as any).hasSynced, (s as any)[30] = k) : k = (s as any)[30];
  let w: any;
  ((s as any)[31] as any) !== (c as any) ? (w = c ? ((n as any).jsxs as any)((n as any).Fragment, {
    children: [((n as any).jsx as any)("div", {
      "aria-hidden": !0,
      ...Ys
    }), ((n as any).jsx as any)("p", {
      role: "alert",
      ...ge,
      children: ((n as any).jsx as any)(I, {
        id: "mkcO2d"
      })
    })]
  }) : null, (s as any)[31] = c, (s as any)[32] = w) : w = (s as any)[32];
  let A: any;
  return ((s as any)[33] as any) !== (k as any) || ((s as any)[34] as any) !== (w as any) || ((s as any)[35] as any) !== (o as any) || ((s as any)[36] as any) !== (j as any) ? (A = ((n as any).jsxs as any)("div", {
    ...ae,
    children: [o, j, k, w]
  }), (s as any)[33] = k, (s as any)[34] = w, (s as any)[35] = o, (s as any)[36] = j, (s as any)[37] = A) : A = (s as any)[37], A;
}
function Zn(this: any, l: any): any {
  return ((n as any).jsxs as any)("div", {
    children: [((n as any).jsx as any)("div", {
      "aria-hidden": !0,
      ...Ys
    }), ((n as any).jsx as any)(ze, {
      account: l
    })]
  }, (l as any).accountId);
}
function _e(this: any, l: any): any {
  (_e as any).d = 1182;
  const s: any = ((B as any).c as any)(4),
    {
      onRetry: e
    }: any = l;
  let a: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((n as any).jsx as any)("span", {
    ...Cn,
    children: ((n as any).jsx as any)(I, {
      id: "r2LrGR"
    })
  }), (s as any)[0] = a) : a = (s as any)[0];
  let t: any;
  ((s as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = ((n as any).jsx as any)(I, {
    id: "qJb6G2"
  }), (s as any)[1] = t) : t = (s as any)[1];
  let i: any;
  return ((s as any)[2] as any) !== (e as any) ? (i = ((n as any).jsx as any)("div", {
    ...ae,
    children: ((n as any).jsxs as any)("div", {
      role: "alert",
      ...te,
      children: [a, ((n as any).jsx as any)(Es, {
        onClick: e,
        size: "sm",
        type: "button",
        variant: "secondary",
        children: t
      })]
    })
  }), (s as any)[2] = e, (s as any)[3] = i) : i = (s as any)[3], i;
}
function Ce(this: any, l: any): any {
  (Ce as any).d = 1181;
  const s: any = ((B as any).c as any)(25),
    {
      overview: e,
      isBusy: a,
      hasFailed: t,
      onRetry: i
    }: any = l,
    {
      _: d
    }: any = (ts as any)(),
    {
      start: r,
      isPending: m
    }: any = (Je as any)(),
    [c, x]: any = ((W as any).useState as any)(!1);
  let f: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = ((n as any).jsx as any)(us, {
    as: "h3",
    color: "tertiary",
    rootStyle: (zn as any).sectionLabel,
    size: "sm",
    children: ((n as any).jsx as any)(I, {
      id: "bPwFdf"
    })
  }), (s as any)[0] = f) : f = (s as any)[0];
  let p: any;
  if (((s as any)[1] as any) !== (a as any) || ((s as any)[2] as any) !== ((e as any).connections as any)) {
    let k: any;
    ((s as any)[4] as any) !== (a as any) ? (k = (w: any): any => ((n as any).jsx as any)(Se, {
      connection: w,
      isBusy: a
    }, (w as any).connectionId), (s as any)[4] = a, (s as any)[5] = k) : k = (s as any)[5], p = (((e as any).connections as any).map as any)(k), (s as any)[1] = a, (s as any)[2] = (e as any).connections, (s as any)[3] = p;
  } else p = (s as any)[3];
  let u: any;
  ((s as any)[6] as any) !== (t as any) || ((s as any)[7] as any) !== (i as any) ? (u = t ? ((n as any).jsx as any)(_e, {
    onRetry: i
  }) : null, (s as any)[6] = t, (s as any)[7] = i, (s as any)[8] = u) : u = (s as any)[8];
  let b: any;
  ((s as any)[9] as any) !== (c as any) ? (b = c ? ((n as any).jsx as any)("div", {
    ...ae,
    children: ((n as any).jsx as any)("p", {
      role: "alert",
      ...ge,
      children: ((n as any).jsx as any)(I, {
        id: "Bjts9t"
      })
    })
  }) : null, (s as any)[9] = c, (s as any)[10] = b) : b = (s as any)[10];
  let h: any;
  ((s as any)[11] as any) !== (d as any) ? (h = (d as any)({
    id: "MPPZ54"
  }), (s as any)[11] = d, (s as any)[12] = h) : h = (s as any)[12];
  const y: any = a || m;
  let v: any;
  ((s as any)[13] as any) !== (r as any) ? (v = (): any => {
    (Wn as any)({
      start: r,
      setFailed: x
    });
  }, (s as any)[13] = r, (s as any)[14] = v) : v = (s as any)[14];
  let N: any;
  ((s as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (N = ((n as any).jsx as any)(I, {
    id: "5a1gAl"
  }), (s as any)[15] = N) : N = (s as any)[15];
  let o: any;
  ((s as any)[16] as any) !== (h as any) || ((s as any)[17] as any) !== (y as any) || ((s as any)[18] as any) !== (v as any) ? (o = ((n as any).jsx as any)("div", {
    children: ((n as any).jsx as any)(Es, {
      "aria-label": h,
      disabled: y,
      onClick: v,
      size: "sm",
      type: "button",
      variant: "secondary",
      children: N
    })
  }), (s as any)[16] = h, (s as any)[17] = y, (s as any)[18] = v, (s as any)[19] = o) : o = (s as any)[19];
  let j: any;
  return ((s as any)[20] as any) !== (p as any) || ((s as any)[21] as any) !== (u as any) || ((s as any)[22] as any) !== (b as any) || ((s as any)[23] as any) !== (o as any) ? (j = ((n as any).jsxs as any)("div", {
    children: [f, ((n as any).jsxs as any)("div", {
      ...Sn,
      children: [p, u, b, o]
    })]
  }), (s as any)[20] = p, (s as any)[21] = u, (s as any)[22] = b, (s as any)[23] = o, (s as any)[24] = j) : j = (s as any)[24], j;
}
const Jn: any = {
  connections: [],
  pendingLinkSessions: 0
};
function Ie(this: any, l: any): any {
  (Ie as any).d = 1184;
  const s: any = ((B as any).c as any)(5),
    {
      isBusy: e
    }: any = l,
    {
      overview: a,
      hasFailed: t,
      refetch: i
    }: any = (Ze as any)(),
    d: any = a ?? Jn;
  let r: any;
  return ((s as any)[0] as any) !== (t as any) || ((s as any)[1] as any) !== (e as any) || ((s as any)[2] as any) !== (i as any) || ((s as any)[3] as any) !== (d as any) ? (r = ((n as any).jsx as any)(Ce, {
    hasFailed: t,
    isBusy: e,
    onRetry: i,
    overview: d
  }), (s as any)[0] = t, (s as any)[1] = e, (s as any)[2] = i, (s as any)[3] = d, (s as any)[4] = r) : r = (s as any)[4], r;
}
function le(this: any, l: any): any {
  (le as any).d = 1183;
  const s: any = ((B as any).c as any)(8);
  let e: any, a: any, t: any;
  if (((s as any)[0] as any) !== (l as any) ? ({
    financeKeys: e,
    ...a
  } = l, t = (((a as any).slots as any).find as any)($s), (s as any)[0] = l, (s as any)[1] = e, (s as any)[2] = a, (s as any)[3] = t) : (e = (s as any)[1], a = (s as any)[2], t = (s as any)[3]), ((t ?? ((e?.some(Ws) as any) === (!0 as any) ? ((a as any).slots as any)[0] : void 0)) as any) != (null as any)) {
    let m: any;
    return ((s as any)[4] as any) !== (a as any) ? (m = ((n as any).jsx as any)(Ie, {
      ...a
    }), (s as any)[4] = a, (s as any)[5] = m) : m = (s as any)[5], m;
  }
  let r: any;
  return ((s as any)[6] as any) !== (a as any) ? (r = ((n as any).jsx as any)(ve, {
    ...a
  }), (s as any)[6] = a, (s as any)[7] = r) : r = (s as any)[7], r;
}
const ds: any = {
    description: {
      kB7OPa: "sand-9f619",
      keoZOQ: "sand-dj266r",
      k71WvV: "sand-14z9mp",
      k1K539: "sand-at24cr",
      keTefX: "sand-1lziwak",
      kMwMTN: "sand-19aaqeu",
      $$css: !0
    },
    sectionLabel: {
      kB7OPa: "sand-9f619",
      kLKAdn: "sand-1y1aw1k",
      kwRFfy: "sand-1pic42t",
      kGO01o: "sand-10b6aqq",
      kZCmMZ: "sand-1onr9mi",
      $$css: !0
    },
    detailsRow: {
      kB7OPa: "sand-9f619",
      k1xSpc: "sand-78zum5",
      kGNEyG: "sand-6s0dn4",
      kjj79g: "sand-1qughib",
      kOIVth: "sand-167g77z",
      kLKAdn: "sand-z9dl7a",
      kwRFfy: "sand-1pic42t",
      kGO01o: "sand-sag5q8",
      kZCmMZ: "sand-1onr9mi",
      $$css: !0
    },
    summaryRow: {
      kysU6D: "sand-jyslct",
      k3lkva: "sand-1lugfcp",
      kzqmXN: "sand-h8yej3",
      keoZOQ: "sand-dj266r",
      k71WvV: "sand-14z9mp",
      k1K539: "sand-at24cr",
      keTefX: "sand-1lziwak",
      kMzoRj: "sand-c342km",
      ksu8eU: "sand-ng3xce",
      kaIpWk: "sand-ixl9f9",
      kMv6JI: "sand-jb2p0i",
      kGuDYH: "sand-1qlqyl8",
      k9WMMc: "sand-1yc453h",
      kkrTdU: "sand-1ypdohk",
      $$css: !0
    },
    summaryRowExpanded: {
      kVL7Gh: "sand-biv7yw",
      kT0f0o: "sand-16uus16",
      $$css: !0
    },
    revealMoreRow: {
      kjj79g: "sand-13a6bvl",
      krdFHd: "sand-15mokao",
      kfmiAY: "sand-1ga7v0g",
      $$css: !0
    }
  },
  Xn: string = "\u2014",
  Qn: number = 5,
  Us: any = {
    className: "sand-9f619 sand-28ko6u sand-1diwwjn sand-bmvrgn sand-1m4ooaa"
  },
  Xs: any = {
    className: "sand-9f619 sand-2lah0s sand-thy2uy sand-b3r6kr sand-uxw1ft sand-lyipyv sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-1wd3ewq"
  },
  Ae: any = {
    className: "sand-9f619 sand-dj266r sand-2fvf9 sand-at24cr sand-1lziwak sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-4b2ntj sand-p4054r sand-lyipyv sand-uxw1ft"
  },
  Yn: any = {
    className: "sand-9f619 sand-ixl9f9 sand-i07v4r"
  },
  sa: any = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-19aaqeu"
  };
function ie(this: any, l: any): any {
  (ie as any).d = 1190;
  const s: any = ((B as any).c as any)(10),
    {
      label: e,
      rows: a
    }: any = l;
  let t: any;
  ((s as any)[0] as any) !== (e as any) ? (t = ((n as any).jsx as any)(us, {
    as: "h3",
    color: "tertiary",
    rootStyle: (ds as any).sectionLabel,
    size: "sm",
    children: e
  }), (s as any)[0] = e, (s as any)[1] = t) : t = (s as any)[1];
  let i: any;
  ((s as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = {
    className: "sand-ixl9f9 sand-i07v4r sand-9f619 sand-78zum5 sand-dt5ytf sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak"
  }, (s as any)[2] = i) : i = (s as any)[2];
  let d: any;
  ((s as any)[3] as any) !== (a as any) ? (d = ((a as any).map as any)(ea), (s as any)[3] = a, (s as any)[4] = d) : d = (s as any)[4];
  let r: any;
  ((s as any)[5] as any) !== (d as any) ? (r = ((n as any).jsx as any)("dl", {
    ...i,
    children: d
  }), (s as any)[5] = d, (s as any)[6] = r) : r = (s as any)[6];
  let m: any;
  return ((s as any)[7] as any) !== (t as any) || ((s as any)[8] as any) !== (r as any) ? (m = ((n as any).jsxs as any)("div", {
    children: [t, r]
  }), (s as any)[7] = t, (s as any)[8] = r, (s as any)[9] = m) : m = (s as any)[9], m;
}
function ea(this: any, l: any, s: any): any {
  return ((n as any).jsxs as any)((W as any).Fragment, {
    children: [(s as any) > (0 as any) ? ((n as any).jsx as any)("div", {
      "aria-hidden": !0,
      ...Us
    }) : null, ((n as any).jsxs as any)("div", {
      className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi",
      children: [((n as any).jsx as any)("dt", {
        ...Xs,
        children: (l as any).term
      }), ((n as any).jsx as any)("dd", {
        title: (l as any).value ?? void 0,
        ...Ae,
        children: (l as any).value ?? Xn
      })]
    })]
  }, (l as any).term);
}
const na: any = {
    http: {
      id: "LUTGt0"
    },
    sse: {
      id: "bdyjwx"
    },
    stdio: {
      id: "sjVfrA"
    }
  },
  Pe: string = "/dashboard/integrations?view=finance",
  Le: string = "https://cursor.com",
  aa: string = "http://localhost:4000",
  Ta: any = `${Le}${Pe}`;
function ta(this: any, l: any = !0): any {
  return `${l ? Le : aa}${Pe}`;
}
function la(this: any, l: any, s: any, e: any): any {
  return (Ws as any)((l as any).name) || (Ws as any)((l as any).displayName) || (Ws as any)((l as any).pluginName) || (e as any) != (null as any) && ($s as any)(e) ? !0 : ((s as any).some as any)($s);
}
function de(this: any): any {
  (de as any).d = 1192;
  const l: any = ((B as any).c as any)(6),
    s: any = (ee as any)(),
    {
      usesProductionBackend: e
    }: any = (an as any)(),
    a: any = (e as any) === (void 0 as any) ? !0 : e;
  let t: any;
  ((l as any)[0] as any) !== (s as any) || ((l as any)[1] as any) !== (a as any) ? (t = (): any => {
    (s as any)((ta as any)(a));
  }, (l as any)[0] = s, (l as any)[1] = a, (l as any)[2] = t) : t = (l as any)[2];
  let i: any;
  ((l as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = ((n as any).jsx as any)(I, {
    id: "iAL9tI"
  }), (l as any)[3] = i) : i = (l as any)[3];
  let d: any;
  return ((l as any)[4] as any) !== (t as any) ? (d = ((n as any).jsx as any)(X, {
    onClick: t,
    size: "lg",
    type: "button",
    variant: "secondary",
    children: i
  }), (l as any)[4] = t, (l as any)[5] = d) : d = (l as any)[5], d;
}
function Os(this: any, l: any): any {
  (Os as any).d = 1193;
  const s: any = ((B as any).c as any)(3),
    {
      children: e
    }: any = l;
  let a: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-167g77z sand-1c4vz4f sand-2lah0s sand-dl72j9"
  }, (s as any)[0] = a) : a = (s as any)[0];
  let t: any;
  return ((s as any)[1] as any) !== (e as any) ? (t = ((n as any).jsx as any)("div", {
    ...a,
    children: e
  }), (s as any)[1] = e, (s as any)[2] = t) : t = (s as any)[2], t;
}
function ce(this: any, l: any): any {
  (ce as any).d = 1194;
  const s: any = ((B as any).c as any)(21),
    {
      mode: e,
      isBusy: a,
      shareButton: t,
      afterLabel: i,
      removalBlockedReason: d,
      onAction: r
    }: any = l,
    {
      i18n: m
    }: any = (ts as any)();
  let c: any, x: any, f: any, p: any;
  if (((s as any)[0] as any) !== (i as any) || ((s as any)[1] as any) !== (m as any) || ((s as any)[2] as any) !== (a as any) || ((s as any)[3] as any) !== (e as any) || ((s as any)[4] as any) !== (r as any) || ((s as any)[5] as any) !== (d as any) || ((s as any)[6] as any) !== (t as any)) {
    const b: any = (pn as any)(e),
      h: any = (jn as any)(e);
    c = (b as any) != (null as any) ? ((n as any).jsx as any)(X, {
      disabled: !0,
      size: "lg",
      type: "button",
      variant: "tertiary",
      children: ((m as any)._ as any)(b)
    }) : null, x = i, f = t;
    let y: any;
    ((s as any)[11] as any) !== (m as any) || ((s as any)[12] as any) !== (a as any) || ((s as any)[13] as any) !== (r as any) || ((s as any)[14] as any) !== (d as any) ? (y = (v: any): any => {
      const N: any = ((n as any).jsx as any)(X, {
        disabled: a || (d as any) != (null as any),
        onClick: (): any => (r as any)((v as any).id),
        size: "lg",
        type: "button",
        variant: "secondary",
        children: ((m as any)._ as any)((v as any).label)
      });
      return (d as any) == (null as any) ? ((n as any).jsx as any)((W as any).Fragment, {
        children: N
      }, (v as any).id) : ((n as any).jsx as any)(cn, {
        content: d,
        openDelay: 0,
        children: ((n as any).jsx as any)("span", {
          className: "sand-3nfvp2",
          children: N
        })
      }, (v as any).id);
    }, (s as any)[11] = m, (s as any)[12] = a, (s as any)[13] = r, (s as any)[14] = d, (s as any)[15] = y) : y = (s as any)[15], p = ((h as any).map as any)(y), (s as any)[0] = i, (s as any)[1] = m, (s as any)[2] = a, (s as any)[3] = e, (s as any)[4] = r, (s as any)[5] = d, (s as any)[6] = t, (s as any)[7] = c, (s as any)[8] = x, (s as any)[9] = f, (s as any)[10] = p;
  } else c = (s as any)[7], x = (s as any)[8], f = (s as any)[9], p = (s as any)[10];
  let u: any;
  return ((s as any)[16] as any) !== (c as any) || ((s as any)[17] as any) !== (x as any) || ((s as any)[18] as any) !== (f as any) || ((s as any)[19] as any) !== (p as any) ? (u = ((n as any).jsxs as any)((n as any).Fragment, {
    children: [c, x, f, p]
  }), (s as any)[16] = c, (s as any)[17] = x, (s as any)[18] = f, (s as any)[19] = p, (s as any)[20] = u) : u = (s as any)[20], u;
}
function Re(this: any, l: any): any {
  (Re as any).d = 1199;
  const s: any = ((B as any).c as any)(13),
    {
      url: e
    }: any = l,
    {
      _: a
    }: any = (ts as any)(),
    {
      status: t,
      copy: i
    }: any = (tn as any)();
  let d: any;
  ((s as any)[0] as any) !== (a as any) ? (d = (a as any)({
    id: "Z8lGw6"
  }), (s as any)[0] = a, (s as any)[1] = d) : d = (s as any)[1];
  let r: any = d;
  if ((t as any) === ("copied" as any)) {
    let f: any;
    ((s as any)[2] as any) !== (a as any) ? (f = (a as any)({
      id: "6V3Ea3"
    }), (s as any)[2] = a, (s as any)[3] = f) : f = (s as any)[3], r = f;
  } else if ((t as any) === ("error" as any)) {
    let f: any;
    ((s as any)[4] as any) !== (a as any) ? (f = (a as any)({
      id: "9sj0G8"
    }), (s as any)[4] = a, (s as any)[5] = f) : f = (s as any)[5], r = f;
  }
  const m: any = (t as any) === ("copied" as any) ? "check" : "link";
  let c: any;
  ((s as any)[6] as any) !== (i as any) || ((s as any)[7] as any) !== (e as any) ? (c = (): any => (i as any)(e), (s as any)[6] = i, (s as any)[7] = e, (s as any)[8] = c) : c = (s as any)[8];
  let x: any;
  return ((s as any)[9] as any) !== (r as any) || ((s as any)[10] as any) !== (m as any) || ((s as any)[11] as any) !== (c as any) ? (x = ((n as any).jsx as any)(X, {
    leadingIcon: m,
    onClick: c,
    size: "lg",
    type: "button",
    variant: "secondary",
    children: r
  }), (s as any)[9] = r, (s as any)[10] = m, (s as any)[11] = c, (s as any)[12] = x) : x = (s as any)[12], x;
}
function qe(this: any, l: any): any {
  (qe as any).d = 1191;
  const s: any = ((B as any).c as any)(32),
    {
      label: e,
      summary: a,
      cardClassName: t,
      children: i
    }: any = l,
    [d, r]: any = ((W as any).useState as any)(!1),
    m: any = ((W as any).useId as any)();
  let c: any;
  ((s as any)[0] as any) !== (e as any) ? (c = ((n as any).jsx as any)(us, {
    as: "h3",
    color: "tertiary",
    rootStyle: (ds as any).sectionLabel,
    size: "sm",
    children: e
  }), (s as any)[0] = e, (s as any)[1] = c) : c = (s as any)[1];
  let x: any;
  ((s as any)[2] as any) !== (t as any) ? (x = (g as any)(t, "sand-9f619 sand-ixl9f9 sand-i07v4r"), (s as any)[2] = t, (s as any)[3] = x) : x = (s as any)[3];
  const f: any = d ? m : void 0;
  let p: any;
  ((s as any)[4] as any) !== (d as any) ? (p = (g as any)(((Ks as any)((ds as any).detailsRow, (ds as any).summaryRow, d && (ds as any).summaryRowExpanded, (Js as any).interactive, (Js as any).keyboardFocus) as any).className), (s as any)[4] = d, (s as any)[5] = p) : p = (s as any)[5];
  let u: any;
  ((s as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = (): any => (r as any)(ia), (s as any)[6] = u) : u = (s as any)[6];
  let b: any;
  ((s as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = (g as any)((Xs as any).className), (s as any)[7] = b) : b = (s as any)[7];
  let h: any;
  ((s as any)[8] as any) !== (a as any) ? (h = ((n as any).jsx as any)("span", {
    className: b,
    children: a
  }), (s as any)[8] = a, (s as any)[9] = h) : h = (s as any)[9];
  let y: any;
  ((s as any)[10] as any) !== (d as any) ? (y = (g as any)((({
    0: {
      className: "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-4b2ntj sand-11xpdln sand-1firant sand-wji4o3"
    },
    1: {
      className: "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-4b2ntj sand-11xpdln sand-1firant sand-wji4o3 sand-19jd1h0"
    }
  } as any)[(!!d as any) << (0 as any)] as any).className), (s as any)[10] = d, (s as any)[11] = y) : y = (s as any)[11];
  let v: any;
  ((s as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = ((n as any).jsx as any)(hs, {
    name: "chevron-down",
    size: "xs"
  }), (s as any)[12] = v) : v = (s as any)[12];
  let N: any;
  ((s as any)[13] as any) !== (y as any) ? (N = ((n as any).jsx as any)("span", {
    "aria-hidden": !0,
    className: y,
    children: v
  }), (s as any)[13] = y, (s as any)[14] = N) : N = (s as any)[14];
  let o: any;
  ((s as any)[15] as any) !== (d as any) || ((s as any)[16] as any) !== (N as any) || ((s as any)[17] as any) !== (f as any) || ((s as any)[18] as any) !== (p as any) || ((s as any)[19] as any) !== (h as any) ? (o = ((n as any).jsxs as any)("button", {
    "aria-controls": f,
    "aria-expanded": d,
    className: p,
    onClick: u,
    type: "button",
    children: [h, N]
  }), (s as any)[15] = d, (s as any)[16] = N, (s as any)[17] = f, (s as any)[18] = p, (s as any)[19] = h, (s as any)[20] = o) : o = (s as any)[20];
  let j: any;
  ((s as any)[21] as any) !== (m as any) || ((s as any)[22] as any) !== (i as any) || ((s as any)[23] as any) !== (d as any) ? (j = d ? ((n as any).jsx as any)("div", {
    id: m,
    children: i
  }) : null, (s as any)[21] = m, (s as any)[22] = i, (s as any)[23] = d, (s as any)[24] = j) : j = (s as any)[24];
  let k: any;
  ((s as any)[25] as any) !== (o as any) || ((s as any)[26] as any) !== (j as any) || ((s as any)[27] as any) !== (x as any) ? (k = ((n as any).jsxs as any)("div", {
    className: x,
    children: [o, j]
  }), (s as any)[25] = o, (s as any)[26] = j, (s as any)[27] = x, (s as any)[28] = k) : k = (s as any)[28];
  let w: any;
  return ((s as any)[29] as any) !== (c as any) || ((s as any)[30] as any) !== (k as any) ? (w = ((n as any).jsxs as any)("div", {
    children: [c, k]
  }), (s as any)[29] = c, (s as any)[30] = k, (s as any)[31] = w) : w = (s as any)[31], w;
}
function ia(this: any, l: any): any {
  return !l;
}
async function da(this: any, {
  toggle: l,
  serverId: s,
  toolName: e,
  applyOptimisticToggle: a,
  setToggleFailure: t
}: any): Promise<any> {
  (a as any)(e);
  try {
    await (l as any)({
      serverId: s,
      toolName: e
    }), (t as any)(null);
  } catch (i: any) {
    (t as any)(i instanceof Error ? (i as any).message : (String as any)(i));
  }
}
function re(this: any, l: any): any {
  (re as any).d = 1200;
  const s: any = ((B as any).c as any)(22),
    {
      serverId: e
    }: any = l,
    {
      _: a
    }: any = (ts as any)(),
    {
      tools: t
    }: any = (he as any)(e),
    {
      toggle: i
    }: any = (Qe as any)(),
    [d, r]: any = ((W as any).useState as any)(null),
    [m, c]: any = ((W as any).useOptimistic as any)(t, ra),
    [, x]: any = ((W as any).useTransition as any)();
  if (((m as any).length as any) === (0 as any)) return null;
  let f: any, p: any, u: any, b: any, h: any;
  if (((s as any)[0] as any) !== (a as any) || ((s as any)[1] as any) !== (c as any) || ((s as any)[2] as any) !== (m as any) || ((s as any)[3] as any) !== (e as any) || ((s as any)[4] as any) !== (x as any) || ((s as any)[5] as any) !== (i as any)) {
    const N: any = (((m as any).filter as any)(ca) as any).length,
      o: any = (xn as any)(m);
    f = qe, p = "sand-plugins-detail__tools", ((s as any)[11] as any) !== (a as any) ? (u = (a as any)({
      id: "xdA/+p"
    }), (s as any)[11] = a, (s as any)[12] = u) : u = (s as any)[12], b = (a as any)({
      id: "bWyJ+b",
      values: {
        0: (m as any).length,
        enabledCount: N
      }
    }), h = ((m as any).map as any)((j: any): any => ((n as any).jsxs as any)((W as any).Fragment, {
      children: [((n as any).jsx as any)("div", {
        "aria-hidden": !0,
        className: (g as any)((Us as any).className)
      }), ((n as any).jsxs as any)("div", {
        className: (g as any)(((Ks as any)((ds as any).detailsRow) as any).className),
        children: [((n as any).jsx as any)("span", {
          className: (g as any)((Xs as any).className),
          title: (j as any).description,
          children: ((o as any).get as any)((j as any).name) ?? (j as any).name
        }), ((n as any).jsx as any)(ln, {
          isChecked: !(j as any).isDisabled,
          label: (j as any).isDisabled ? (a as any)({
            id: "FZtBeR",
            values: {
              0: ((o as any).get as any)((j as any).name) ?? (j as any).name
            }
          }) : (a as any)({
            id: "y5UgU8",
            values: {
              0: ((o as any).get as any)((j as any).name) ?? (j as any).name
            }
          }),
          onToggle: (): any => {
            (x as any)((): any => (da as any)({
              toggle: i,
              serverId: e,
              toolName: (j as any).name,
              applyOptimisticToggle: c,
              setToggleFailure: r
            }));
          }
        })]
      })]
    }, (j as any).name)), (s as any)[0] = a, (s as any)[1] = c, (s as any)[2] = m, (s as any)[3] = e, (s as any)[4] = x, (s as any)[5] = i, (s as any)[6] = f, (s as any)[7] = p, (s as any)[8] = u, (s as any)[9] = b, (s as any)[10] = h;
  } else f = (s as any)[6], p = (s as any)[7], u = (s as any)[8], b = (s as any)[9], h = (s as any)[10];
  let y: any;
  ((s as any)[13] as any) !== (d as any) ? (y = (d as any) != (null as any) ? ((n as any).jsxs as any)((n as any).Fragment, {
    children: [((n as any).jsx as any)("div", {
      "aria-hidden": !0,
      className: (g as any)((Us as any).className)
    }), ((n as any).jsx as any)("p", {
      className: (g as any)("sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-pmgbkh"),
      role: "alert",
      children: d
    })]
  }) : null, (s as any)[13] = d, (s as any)[14] = y) : y = (s as any)[14];
  let v: any;
  return ((s as any)[15] as any) !== (f as any) || ((s as any)[16] as any) !== (p as any) || ((s as any)[17] as any) !== (u as any) || ((s as any)[18] as any) !== (b as any) || ((s as any)[19] as any) !== (h as any) || ((s as any)[20] as any) !== (y as any) ? (v = ((n as any).jsxs as any)(f, {
    cardClassName: p,
    label: u,
    summary: b,
    children: [h, y]
  }), (s as any)[15] = f, (s as any)[16] = p, (s as any)[17] = u, (s as any)[18] = b, (s as any)[19] = h, (s as any)[20] = y, (s as any)[21] = v) : v = (s as any)[21], v;
}
function ca(this: any, l: any): any {
  return !(l as any).isDisabled;
}
function ra(this: any, l: any, s: any): any {
  return ((l as any).map as any)((e: any): any => ((e as any).name as any) === (s as any) ? {
    ...e,
    isDisabled: !(e as any).isDisabled
  } : e);
}
function se(this: any, l: any): any {
  (se as any).d = 1189;
  const s: any = ((B as any).c as any)(43),
    {
      label: e,
      noun: a,
      cardClassName: t,
      items: i,
      isDisabled: d
    }: any = l,
    r: any = (d as any) === (void 0 as any) ? !1 : d,
    {
      _: m
    }: any = (ts as any)(),
    [c, x]: any = ((W as any).useState as any)(!1),
    f: any = ((W as any).useId as any)();
  if (((i as any).length as any) === (0 as any)) return null;
  let p: any;
  ((s as any)[0] as any) !== (m as any) || ((s as any)[1] as any) !== (a as any) ? (p = (m as any)((a as any) === ("connector" as any) ? {
    id: "cQpGeE"
  } : {
    id: "OZJeTZ"
  }), (s as any)[0] = m, (s as any)[1] = a, (s as any)[2] = p) : p = (s as any)[2];
  const u: any = p;
  let b: any;
  ((s as any)[3] as any) !== (c as any) || ((s as any)[4] as any) !== (i as any) ? (b = c ? i : ((i as any).slice as any)(0, Qn), (s as any)[3] = c, (s as any)[4] = i, (s as any)[5] = b) : b = (s as any)[5];
  const h: any = b,
    y: any = ((i as any).length as any) - ((h as any).length as any),
    v: any = r || void 0;
  let N: any;
  ((s as any)[6] as any) !== (r as any) ? (N = ({
    0: {},
    1: {
      className: "sand-byyjgo"
    }
  } as any)[(!!r as any) << (0 as any)], (s as any)[6] = r, (s as any)[7] = N) : N = (s as any)[7];
  let o: any;
  ((s as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = (g as any)("sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1y1aw1k sand-1pic42t sand-10b6aqq sand-1onr9mi"), (s as any)[8] = o) : o = (s as any)[8];
  let j: any;
  ((s as any)[9] as any) !== (e as any) ? (j = ((n as any).jsx as any)(us, {
    as: "h3",
    color: "primary",
    size: "sm",
    children: e
  }), (s as any)[9] = e, (s as any)[10] = j) : j = (s as any)[10];
  let k: any;
  ((s as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (k = (g as any)("sand-4b2ntj"), (s as any)[11] = k) : k = (s as any)[11];
  let w: any;
  ((s as any)[12] as any) !== ((i as any).length as any) || ((s as any)[13] as any) !== (k as any) ? (w = ((n as any).jsx as any)(us, {
    as: "span",
    className: k,
    size: "sm",
    children: (i as any).length
  }), (s as any)[12] = (i as any).length, (s as any)[13] = k, (s as any)[14] = w) : w = (s as any)[14];
  let A: any;
  ((s as any)[15] as any) !== (o as any) || ((s as any)[16] as any) !== (j as any) || ((s as any)[17] as any) !== (w as any) ? (A = ((n as any).jsxs as any)("div", {
    className: o,
    children: [j, w]
  }), (s as any)[15] = o, (s as any)[16] = j, (s as any)[17] = w, (s as any)[18] = A) : A = (s as any)[18];
  let T: any;
  ((s as any)[19] as any) !== (t as any) ? (T = (g as any)(t, "sand-9f619 sand-ixl9f9 sand-i07v4r"), (s as any)[19] = t, (s as any)[20] = T) : T = (s as any)[20];
  let R: any;
  if (((s as any)[21] as any) !== (a as any) || ((s as any)[22] as any) !== (u as any) || ((s as any)[23] as any) !== (h as any)) {
    let D: any;
    ((s as any)[25] as any) !== (a as any) || ((s as any)[26] as any) !== (u as any) ? (D = (L: any, E: any): any => ((n as any).jsxs as any)((W as any).Fragment, {
      children: [(E as any) > (0 as any) ? ((n as any).jsx as any)("div", {
        "aria-hidden": !0,
        className: (g as any)((Us as any).className)
      }) : null, ((n as any).jsxs as any)("div", {
        className: (g as any)("sand-9f619 sand-78zum5 sand-6s0dn4 sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi sand-1nhvcw1"),
        children: [((n as any).jsx as any)("span", {
          className: (g as any)("sand-78zum5 sand-2lah0s sand-4b2ntj"),
          children: ((n as any).jsx as any)(hs, {
            "aria-hidden": !0,
            name: (a as any) === ("connector" as any) ? "plug" : "cube",
            size: 16
          })
        }), ((n as any).jsxs as any)("span", {
          className: (g as any)("sand-78zum5 sand-dt5ytf sand-euugli"),
          children: [((n as any).jsx as any)("span", {
            className: (g as any)("sand-b3r6kr sand-1wd3ewq sand-11wthnw sand-d4r4e8 sand-lyipyv sand-uxw1ft"),
            children: (L as any).name
          }), ((n as any).jsx as any)("span", {
            className: (g as any)("sand-b3r6kr sand-4b2ntj sand-1wm8ruf sand-1d3mw78 sand-lyipyv sand-uxw1ft"),
            title: (L as any).description,
            children: (((L as any).description as any).length as any) > (0 as any) ? (L as any).description : u
          })]
        })]
      })]
    }, (L as any).name), (s as any)[25] = a, (s as any)[26] = u, (s as any)[27] = D) : D = (s as any)[27], R = ((h as any).map as any)(D), (s as any)[21] = a, (s as any)[22] = u, (s as any)[23] = h, (s as any)[24] = R;
  } else R = (s as any)[24];
  let C: any;
  ((s as any)[28] as any) !== (m as any) || ((s as any)[29] as any) !== (y as any) || ((s as any)[30] as any) !== (r as any) || ((s as any)[31] as any) !== (f as any) ? (C = (y as any) > (0 as any) ? ((n as any).jsxs as any)((n as any).Fragment, {
    children: [((n as any).jsx as any)("div", {
      "aria-hidden": !0,
      className: (g as any)((Us as any).className)
    }), ((n as any).jsx as any)("button", {
      "aria-controls": f,
      "aria-expanded": !1,
      className: (g as any)(((Ks as any)((ds as any).detailsRow, (ds as any).summaryRow, (ds as any).revealMoreRow, (Js as any).interactive, (Js as any).keyboardFocus) as any).className),
      disabled: r,
      onClick: (): any => (x as any)(!0),
      type: "button",
      children: ((n as any).jsx as any)("span", {
        className: (g as any)((Ae as any).className),
        children: (m as any)({
          id: "UhKOdj",
          values: {
            hiddenCount: y
          }
        })
      })
    })]
  }) : null, (s as any)[28] = m, (s as any)[29] = y, (s as any)[30] = r, (s as any)[31] = f, (s as any)[32] = C) : C = (s as any)[32];
  let S: any;
  ((s as any)[33] as any) !== (f as any) || ((s as any)[34] as any) !== (T as any) || ((s as any)[35] as any) !== (R as any) || ((s as any)[36] as any) !== (C as any) ? (S = ((n as any).jsxs as any)("div", {
    className: T,
    id: f,
    children: [R, C]
  }), (s as any)[33] = f, (s as any)[34] = T, (s as any)[35] = R, (s as any)[36] = C, (s as any)[37] = S) : S = (s as any)[37];
  let P: any;
  return ((s as any)[38] as any) !== (A as any) || ((s as any)[39] as any) !== (S as any) || ((s as any)[40] as any) !== (v as any) || ((s as any)[41] as any) !== (N as any) ? (P = ((n as any).jsxs as any)("div", {
    "aria-disabled": v,
    ...N,
    children: [A, S]
  }), (s as any)[38] = A, (s as any)[39] = S, (s as any)[40] = v, (s as any)[41] = N, (s as any)[42] = P) : P = (s as any)[42], P;
}
function Te(this: any, l: any): any {
  (Te as any).d = 1201;
  const s: any = ((B as any).c as any)(8),
    {
      isBusy: e,
      onEditSetup: a
    }: any = l;
  let t: any, i: any, d: any, r: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = ((n as any).jsx as any)(us, {
    as: "h3",
    color: "tertiary",
    rootStyle: (ds as any).sectionLabel,
    size: "sm",
    children: ((n as any).jsx as any)(I, {
      id: "RDjuBN"
    })
  }), i = (g as any)("sand-plugins-detail__setup", "sand-9f619 sand-ixl9f9 sand-i07v4r"), d = (g as any)(((Ks as any)((ds as any).detailsRow) as any).className), r = ((n as any).jsx as any)("span", {
    className: (g as any)((Xs as any).className),
    children: ((n as any).jsx as any)(I, {
      id: "mrRDVU"
    })
  }), (s as any)[0] = t, (s as any)[1] = i, (s as any)[2] = d, (s as any)[3] = r) : (t = (s as any)[0], i = (s as any)[1], d = (s as any)[2], r = (s as any)[3]);
  let m: any;
  ((s as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = ((n as any).jsx as any)(I, {
    id: "kDCdbL"
  }), (s as any)[4] = m) : m = (s as any)[4];
  let c: any;
  return ((s as any)[5] as any) !== (e as any) || ((s as any)[6] as any) !== (a as any) ? (c = ((n as any).jsxs as any)("div", {
    children: [t, ((n as any).jsx as any)("div", {
      className: i,
      children: ((n as any).jsxs as any)("div", {
        className: d,
        children: [r, ((n as any).jsx as any)(Es, {
          disabled: e,
          onClick: a,
          size: "sm",
          type: "button",
          variant: "secondary",
          children: m
        })]
      })
    })]
  }), (s as any)[5] = e, (s as any)[6] = a, (s as any)[7] = c) : c = (s as any)[7], c;
}
function De(this: any): any {
  (De as any).d = 1202;
  const l: any = ((B as any).c as any)(2);
  let s: any;
  ((l as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((n as any).jsx as any)(us, {
    as: "h3",
    color: "tertiary",
    rootStyle: (ds as any).sectionLabel,
    size: "sm",
    children: ((n as any).jsx as any)(I, {
      id: "bPwFdf"
    })
  }), (l as any)[0] = s) : s = (l as any)[0];
  let e: any;
  return ((l as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (e = ((n as any).jsxs as any)("div", {
    children: [s, ((n as any).jsx as any)("div", {
      ...Yn,
      children: ((n as any).jsx as any)("p", {
        ...sa,
        children: ((n as any).jsx as any)(I, {
          id: "9IIGQU"
        })
      })
    })]
  }), (l as any)[1] = e) : e = (l as any)[1], e;
}
function oa(this: any, l: any): any {
  (oa as any).d = 1195;
  const s: any = ((B as any).c as any)(113),
    {
      server: e,
      accountSlots: a,
      isBusy: t,
      accountActions: i,
      icon: d,
      onUninstall: r
    }: any = l,
    {
      i18n: m,
      _: c
    }: any = (ts as any)(),
    {
      ToolIcon: x
    }: any = (pe as any)(),
    f: any = ((e as any).cursorScmProvider as any) != (null as any);
  let p: any;
  ((s as any)[0] as any) !== ((e as any).cursorScmProvider as any) || ((s as any)[1] as any) !== ((e as any).url as any) ? (p = ((e as any).cursorScmProvider as any) != (null as any) ? (Ye as any)((e as any).cursorScmProvider) ?? null : (be as any)(void 0, (e as any).url), (s as any)[0] = (e as any).cursorScmProvider, (s as any)[1] = (e as any).url, (s as any)[2] = p) : p = (s as any)[2];
  const u: any = p,
    {
      tools: b
    }: any = (he as any)((e as any).id);
  let h: any, y: any, v: any, N: any, o: any, j: any, k: any, w: any, A: any, T: any;
  if (((s as any)[3] as any) !== (x as any) || ((s as any)[4] as any) !== (c as any) || ((s as any)[5] as any) !== (i as any) || ((s as any)[6] as any) !== (a as any) || ((s as any)[7] as any) !== (u as any) || ((s as any)[8] as any) !== (m as any) || ((s as any)[9] as any) !== (d?.iconId as any) || ((s as any)[10] as any) !== (d?.iconUrl as any) || ((s as any)[11] as any) !== (f as any) || ((s as any)[12] as any) !== (t as any) || ((s as any)[13] as any) !== (r as any) || ((s as any)[14] as any) !== (e as any) || ((s as any)[15] as any) !== (b as any)) {
    const D: any = (((b as any).filter as any)(ua) as any).length;
    let L: any;
    ((s as any)[26] as any) !== (e as any) ? (L = (xe as any)(e), (s as any)[26] = e, (s as any)[27] = L) : L = (s as any)[27];
    const E: any = L;
    let O: any;
    ((s as any)[28] as any) !== (c as any) ? (O = (c as any)({
      id: "hO1TWp"
    }), (s as any)[28] = c, (s as any)[29] = O) : O = (s as any)[29];
    let $: any = O;
    if (f) {
      let _: any;
      ((s as any)[30] as any) !== (c as any) ? (_ = (c as any)({
        id: "+7fBMP"
      }), (s as any)[30] = c, (s as any)[31] = _) : _ = (s as any)[31], $ = _;
    } else if (((e as any).servedBy as any) === ("grok" as any)) {
      let _: any;
      ((s as any)[32] as any) !== (c as any) ? (_ = (c as any)({
        id: "dlHT84"
      }), (s as any)[32] = c, (s as any)[33] = _) : _ = (s as any)[33], $ = _;
    } else if ((e as any).isTeamServer) {
      let _: any;
      ((s as any)[34] as any) !== (c as any) ? (_ = (c as any)({
        id: "vhSOwR"
      }), (s as any)[34] = c, (s as any)[35] = _) : _ = (s as any)[35], $ = _;
    }
    let K: any;
    ((s as any)[36] as any) !== (c as any) || ((s as any)[37] as any) !== ((e as any).command as any) || ((s as any)[38] as any) !== ((e as any).url as any) ? (K = ((e as any).url as any) != (null as any) ? {
      term: (c as any)({
        id: "IagCbF"
      }),
      value: (e as any).url
    } : {
      term: (c as any)({
        id: "sjVfrA"
      }),
      value: (e as any).command ?? null
    }, (s as any)[36] = c, (s as any)[37] = (e as any).command, (s as any)[38] = (e as any).url, (s as any)[39] = K) : K = (s as any)[39];
    const rs: any = K;
    let F: any;
    ((s as any)[40] as any) !== (e as any) ? (F = ($s as any)(e) ? ((n as any).jsx as any)(de, {}) : null, (s as any)[40] = e, (s as any)[41] = F) : F = (s as any)[41];
    let Z: any;
    ((s as any)[42] as any) !== (r as any) || ((s as any)[43] as any) !== ((e as any).id as any) ? (Z = (_: any): any => {
      switch (_) {
        case "uninstall":
          {
            (r as any)((e as any).id);
            return;
          }
        case "remove":
          return;
        default:
          return _;
      }
    }, (s as any)[42] = r, (s as any)[43] = (e as any).id, (s as any)[44] = Z) : Z = (s as any)[44];
    let es: any;
    ((s as any)[45] as any) !== (t as any) || ((s as any)[46] as any) !== (E as any) || ((s as any)[47] as any) !== (F as any) || ((s as any)[48] as any) !== (Z as any) ? (es = ((n as any).jsx as any)(ce, {
      afterLabel: F,
      isBusy: t,
      mode: E,
      removalBlockedReason: null,
      shareButton: null,
      onAction: Z
    }), (s as any)[45] = t, (s as any)[46] = E, (s as any)[47] = F, (s as any)[48] = Z, (s as any)[49] = es) : es = (s as any)[49];
    const Q: any = es;
    let J: any = Q;
    if (f) {
      let _: any;
      ((s as any)[50] as any) !== (t as any) || ((s as any)[51] as any) !== (e as any) ? (_ = ((n as any).jsx as any)(ne, {
        isBusy: t,
        server: e
      }), (s as any)[50] = t, (s as any)[51] = e, (s as any)[52] = _) : _ = (s as any)[52], J = _;
    } else if (($s as any)(e)) {
      let _: any;
      ((s as any)[53] as any) !== (Q as any) ? (_ = ((n as any).jsx as any)(Os, {
        children: Q
      }), (s as any)[53] = Q, (s as any)[54] = _) : _ = (s as any)[54], J = _;
    } else ((e as any).servedBy as any) === ("grok" as any) && (J = null);
    let ls: any;
    ((s as any)[55] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = (g as any)("sand-plugins-detail", "sand-9f619 sand-78zum5 sand-dt5ytf sand-1665zp3"), ls = (g as any)("sand-plugins-detail__header", "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-1xr8qbc sand-jodmca"), (s as any)[55] = ls, (s as any)[56] = w) : (ls = (s as any)[55], w = (s as any)[56]);
    const Y: any = d?.iconId,
      cs: any = d?.iconUrl;
    let G: any;
    ((s as any)[57] as any) !== (x as any) || ((s as any)[58] as any) !== ((e as any).name as any) || ((s as any)[59] as any) !== (Y as any) || ((s as any)[60] as any) !== (cs as any) ? (G = ((n as any).jsx as any)(x, {
      iconId: Y,
      iconUrl: cs,
      name: (e as any).name,
      size: 56
    }), (s as any)[57] = x, (s as any)[58] = (e as any).name, (s as any)[59] = Y, (s as any)[60] = cs, (s as any)[61] = G) : G = (s as any)[61];
    let ns: any;
    ((s as any)[62] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ns = (g as any)("sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-dt5ytf sand-195vfkc sand-euugli"), (s as any)[62] = ns) : ns = (s as any)[62];
    let q: any;
    ((s as any)[63] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (q = (g as any)("sand-19d36u7 sand-1o2sk6j sand-1deyeav sand-1rhlpx6"), (s as any)[63] = q) : q = (s as any)[63];
    let z: any;
    ((s as any)[64] as any) !== ((e as any).name as any) ? (z = ((n as any).jsx as any)(us, {
      as: "h3",
      className: q,
      children: (e as any).name
    }), (s as any)[64] = (e as any).name, (s as any)[65] = z) : z = (s as any)[65];
    let M: any;
    ((s as any)[66] as any) !== (u as any) ? (M = (u as any) != (null as any) ? ((n as any).jsx as any)("span", {
      className: (g as any)("sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-19aaqeu sand-uxw1ft"),
      children: ((n as any).jsx as any)("span", {
        className: (g as any)("sand-9f619 sand-euugli sand-b3r6kr sand-lyipyv"),
        children: u
      })
    }) : null, (s as any)[66] = u, (s as any)[67] = M) : M = (s as any)[67];
    let as: any;
    ((s as any)[68] as any) !== (z as any) || ((s as any)[69] as any) !== (M as any) ? (as = ((n as any).jsxs as any)("div", {
      className: ns,
      children: [z, M]
    }), (s as any)[68] = z, (s as any)[69] = M, (s as any)[70] = as) : as = (s as any)[70], ((s as any)[71] as any) !== (J as any) || ((s as any)[72] as any) !== (G as any) || ((s as any)[73] as any) !== (as as any) ? (A = ((n as any).jsxs as any)("header", {
      className: ls,
      children: [G, as, J]
    }), (s as any)[71] = J, (s as any)[72] = G, (s as any)[73] = as, (s as any)[74] = A) : A = (s as any)[74], ((s as any)[75] as any) !== (i as any) || ((s as any)[76] as any) !== (a as any) || ((s as any)[77] as any) !== (t as any) ? (T = ((n as any).jsx as any)(le, {
      isBusy: t,
      slots: a,
      ...i
    }), (s as any)[75] = i, (s as any)[76] = a, (s as any)[77] = t, (s as any)[78] = T) : T = (s as any)[78], ((s as any)[79] as any) !== ((e as any).id as any) ? (y = ((n as any).jsx as any)(re, {
      serverId: (e as any).id
    }), (s as any)[79] = (e as any).id, (s as any)[80] = y) : y = (s as any)[80], h = ie, ((s as any)[81] as any) !== (c as any) ? (k = (c as any)({
      id: "URmyfc"
    }), (s as any)[81] = c, (s as any)[82] = k) : k = (s as any)[82];
    let ss: any;
    ((s as any)[83] as any) !== (c as any) ? (ss = (c as any)({
      id: "wdxz7K"
    }), (s as any)[83] = c, (s as any)[84] = ss) : ss = (s as any)[84], ((s as any)[85] as any) !== ($ as any) || ((s as any)[86] as any) !== (ss as any) ? (o = {
      term: ss,
      value: $
    }, (s as any)[85] = $, (s as any)[86] = ss, (s as any)[87] = o) : o = (s as any)[87], ((s as any)[88] as any) !== (c as any) || ((s as any)[89] as any) !== (m as any) || ((s as any)[90] as any) !== (f as any) || ((s as any)[91] as any) !== (rs as any) || ((s as any)[92] as any) !== ((e as any).transport as any) ? (j = f ? [] : [{
      term: (c as any)({
        id: "bv4cFj"
      }),
      value: ((m as any)._ as any)((na as any)[(e as any).transport])
    }, rs], (s as any)[88] = c, (s as any)[89] = m, (s as any)[90] = f, (s as any)[91] = rs, (s as any)[92] = (e as any).transport, (s as any)[93] = j) : j = (s as any)[93], ((s as any)[94] as any) !== (c as any) ? (v = (c as any)({
      id: "xdA/+p"
    }), (s as any)[94] = c, (s as any)[95] = v) : v = (s as any)[95], N = ((b as any).length as any) > (0 as any) ? (c as any)({
      id: "CzixCu",
      values: {
        0: (b as any).length,
        enabledToolCount: D
      }
    }) : (String as any)((e as any).toolCount), (s as any)[3] = x, (s as any)[4] = c, (s as any)[5] = i, (s as any)[6] = a, (s as any)[7] = u, (s as any)[8] = m, (s as any)[9] = d?.iconId, (s as any)[10] = d?.iconUrl, (s as any)[11] = f, (s as any)[12] = t, (s as any)[13] = r, (s as any)[14] = e, (s as any)[15] = b, (s as any)[16] = h, (s as any)[17] = y, (s as any)[18] = v, (s as any)[19] = N, (s as any)[20] = o, (s as any)[21] = j, (s as any)[22] = k, (s as any)[23] = w, (s as any)[24] = A, (s as any)[25] = T;
  } else h = (s as any)[16], y = (s as any)[17], v = (s as any)[18], N = (s as any)[19], o = (s as any)[20], j = (s as any)[21], k = (s as any)[22], w = (s as any)[23], A = (s as any)[24], T = (s as any)[25];
  let R: any;
  ((s as any)[96] as any) !== (v as any) || ((s as any)[97] as any) !== (N as any) ? (R = {
    term: v,
    value: N
  }, (s as any)[96] = v, (s as any)[97] = N, (s as any)[98] = R) : R = (s as any)[98];
  let C: any;
  ((s as any)[99] as any) !== (R as any) || ((s as any)[100] as any) !== (o as any) || ((s as any)[101] as any) !== (j as any) ? (C = [o, ...j, R], (s as any)[99] = R, (s as any)[100] = o, (s as any)[101] = j, (s as any)[102] = C) : C = (s as any)[102];
  let S: any;
  ((s as any)[103] as any) !== (h as any) || ((s as any)[104] as any) !== (C as any) || ((s as any)[105] as any) !== (k as any) ? (S = ((n as any).jsx as any)(h, {
    label: k,
    rows: C
  }), (s as any)[103] = h, (s as any)[104] = C, (s as any)[105] = k, (s as any)[106] = S) : S = (s as any)[106];
  let P: any;
  return ((s as any)[107] as any) !== (y as any) || ((s as any)[108] as any) !== (S as any) || ((s as any)[109] as any) !== (w as any) || ((s as any)[110] as any) !== (A as any) || ((s as any)[111] as any) !== (T as any) ? (P = ((n as any).jsxs as any)("div", {
    className: w,
    children: [A, T, y, S]
  }), (s as any)[107] = y, (s as any)[108] = S, (s as any)[109] = w, (s as any)[110] = A, (s as any)[111] = T, (s as any)[112] = P) : P = (s as any)[112], P;
}
function ua(this: any, l: any): any {
  return !(l as any).isDisabled;
}
function ma(this: any, l: any, s: any): any {
  return ((s as any).builtinServerIdentifier as any) != (null as any) ? (l as any)({
    id: "+7fBMP"
  }) : ((s as any).marketplace?.ownership as any) === ("team" as any) ? (l as any)({
    id: "vhSOwR"
  }) : ((s as any).isPublicListed as any) === (!0 as any) ? (l as any)({
    id: "7d1a0d"
  }) : null;
}
function Fe(this: any, l: any): any {
  (Fe as any).d = 1197;
  const s: any = ((B as any).c as any)(7),
    {
      header: e,
      children: a
    }: any = l;
  let t: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = (g as any)("sand-plugins-detail", "sand-9f619 sand-78zum5 sand-dt5ytf sand-1665zp3"), (s as any)[0] = t) : t = (s as any)[0];
  let i: any;
  ((s as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = (g as any)("sand-9f619 sand-78zum5 sand-dt5ytf sand-ou54vl"), (s as any)[1] = i) : i = (s as any)[1];
  let d: any;
  ((s as any)[2] as any) !== (a as any) ? (d = ((n as any).jsx as any)("div", {
    className: i,
    children: a
  }), (s as any)[2] = a, (s as any)[3] = d) : d = (s as any)[3];
  let r: any;
  return ((s as any)[4] as any) !== (e as any) || ((s as any)[5] as any) !== (d as any) ? (r = ((n as any).jsxs as any)("div", {
    className: t,
    children: [e, d]
  }), (s as any)[4] = e, (s as any)[5] = d, (s as any)[6] = r) : r = (s as any)[6], r;
}
function Ee(this: any, l: any): any {
  (Ee as any).d = 1196;
  const s: any = ((B as any).c as any)(46),
    {
      entry: e,
      action: a
    }: any = l,
    {
      _: t
    }: any = (ts as any)(),
    {
      ToolIcon: i,
      catalogEntryIcon: d,
      externalLinkHandlers: r
    }: any = (pe as any)(),
    m: any = (ee as any)(),
    {
      counts: c
    }: any = (je as any)();
  let x: any;
  ((s as any)[0] as any) !== (d as any) || ((s as any)[1] as any) !== (e as any) ? (x = (d as any)(e), (s as any)[0] = d, (s as any)[1] = e, (s as any)[2] = x) : x = (s as any)[2];
  const f: any = x,
    p: any = (e as any).marketplace?.displayName;
  let u: any;
  ((s as any)[3] as any) !== (t as any) ? (u = (rs: any): any => (t as any)({
    id: "bCbNMB",
    values: {
      count: rs
    }
  }), (s as any)[3] = t, (s as any)[4] = u) : u = (s as any)[4];
  const b: any = u,
    h: any = (c as any)[(e as any).id],
    y: any = (h as any) != (null as any) && (h as any) > (0 as any),
    v: any = ((e as any).builtinServerIdentifier as any) == (null as any) ? (e as any).repositoryUrl : void 0;
  let N: any;
  ((s as any)[5] as any) !== (e as any) ? (N = (ye as any)(e), (s as any)[5] = e, (s as any)[6] = N) : N = (s as any)[6];
  const o: any = N;
  let j: any, k: any;
  ((s as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = (g as any)("sand-9f619 sand-78zum5 sand-dt5ytf sand-1v2ro7d"), k = (g as any)("sand-plugins-detail__header", "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-1xr8qbc sand-jodmca"), (s as any)[7] = j, (s as any)[8] = k) : (j = (s as any)[7], k = (s as any)[8]);
  let w: any;
  ((s as any)[9] as any) !== (i as any) || ((s as any)[10] as any) !== ((e as any).displayName as any) || ((s as any)[11] as any) !== ((f as any).iconId as any) || ((s as any)[12] as any) !== ((f as any).iconUrl as any) ? (w = ((n as any).jsx as any)(i, {
    iconId: (f as any).iconId,
    iconUrl: (f as any).iconUrl,
    name: (e as any).displayName,
    size: 56
  }), (s as any)[9] = i, (s as any)[10] = (e as any).displayName, (s as any)[11] = (f as any).iconId, (s as any)[12] = (f as any).iconUrl, (s as any)[13] = w) : w = (s as any)[13];
  let A: any, T: any;
  ((s as any)[14] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (A = (g as any)("sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-dt5ytf sand-195vfkc sand-euugli"), T = (g as any)("sand-9f619 sand-78zum5 sand-6s0dn4 sand-1jnr06f sand-euugli"), (s as any)[14] = A, (s as any)[15] = T) : (A = (s as any)[14], T = (s as any)[15]);
  let R: any;
  ((s as any)[16] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (R = (g as any)("sand-19d36u7 sand-1o2sk6j sand-1deyeav sand-1rhlpx6"), (s as any)[16] = R) : R = (s as any)[16];
  let C: any;
  ((s as any)[17] as any) !== ((e as any).displayName as any) ? (C = ((n as any).jsx as any)(us, {
    as: "h3",
    className: R,
    children: (e as any).displayName
  }), (s as any)[17] = (e as any).displayName, (s as any)[18] = C) : C = (s as any)[18];
  let S: any;
  ((s as any)[19] as any) !== (t as any) || ((s as any)[20] as any) !== (o as any) ? (S = (o as any) != (null as any) ? ((n as any).jsx as any)(dn, {
    label: (t as any)({
      id: "bXJKzj"
    }),
    url: o
  }) : null, (s as any)[19] = t, (s as any)[20] = o, (s as any)[21] = S) : S = (s as any)[21];
  let P: any;
  ((s as any)[22] as any) !== (C as any) || ((s as any)[23] as any) !== (S as any) ? (P = ((n as any).jsxs as any)("div", {
    className: T,
    "data-detail-hero-title": "",
    children: [C, S]
  }), (s as any)[22] = C, (s as any)[23] = S, (s as any)[24] = P) : P = (s as any)[24];
  let D: any;
  ((s as any)[25] as any) !== (r as any) || ((s as any)[26] as any) !== (y as any) || ((s as any)[27] as any) !== (p as any) || ((s as any)[28] as any) !== (m as any) || ((s as any)[29] as any) !== (v as any) || ((s as any)[30] as any) !== (h as any) || ((s as any)[31] as any) !== (b as any) ? (D = (p as any) != (null as any) || y || (v as any) != (null as any) ? ((n as any).jsxs as any)("span", {
    className: (g as any)("sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-19aaqeu sand-uxw1ft"),
    children: [(p as any) != (null as any) ? ((n as any).jsx as any)("span", {
      className: (g as any)("sand-9f619 sand-euugli sand-b3r6kr sand-lyipyv"),
      children: p
    }) : null, (p as any) != (null as any) && y ? ((n as any).jsx as any)("span", {
      "aria-hidden": !0,
      className: (g as any)("sand-9f619 sand-1c4vz4f sand-2lah0s sand-dl72j9"),
      children: "·"
    }) : null, y ? ((n as any).jsx as any)("span", {
      className: (g as any)("sand-9f619 sand-1c4vz4f sand-2lah0s sand-dl72j9"),
      children: (b as any)(h)
    }) : null, ((p as any) != (null as any) || y) && (v as any) != (null as any) ? ((n as any).jsx as any)("span", {
      "aria-hidden": !0,
      className: (g as any)("sand-9f619 sand-1c4vz4f sand-2lah0s sand-dl72j9"),
      children: "·"
    }) : null, (v as any) != (null as any) ? ((n as any).jsxs as any)("a", {
      ...(r as any)(v, m),
      className: (g as any)("sand-3nfvp2 sand-6s0dn4 sand-1jnr06f sand-19aaqeu sand-7gh5u8 sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-krqix3 sand-1ypdohk sand-9f619 sand-1c4vz4f sand-2lah0s sand-dl72j9"),
      href: v,
      rel: "noopener noreferrer",
      target: "_blank",
      children: [((n as any).jsx as any)(I, {
        id: "HMUxPu"
      }), ((n as any).jsx as any)(hs, {
        name: "arrow-right-up",
        size: 13
      })]
    }) : null]
  }) : null, (s as any)[25] = r, (s as any)[26] = y, (s as any)[27] = p, (s as any)[28] = m, (s as any)[29] = v, (s as any)[30] = h, (s as any)[31] = b, (s as any)[32] = D) : D = (s as any)[32];
  let L: any;
  ((s as any)[33] as any) !== (P as any) || ((s as any)[34] as any) !== (D as any) ? (L = ((n as any).jsxs as any)("div", {
    className: A,
    children: [P, D]
  }), (s as any)[33] = P, (s as any)[34] = D, (s as any)[35] = L) : L = (s as any)[35];
  let E: any;
  ((s as any)[36] as any) !== (a as any) || ((s as any)[37] as any) !== (L as any) || ((s as any)[38] as any) !== (w as any) ? (E = ((n as any).jsxs as any)("header", {
    className: k,
    children: [w, L, a]
  }), (s as any)[36] = a, (s as any)[37] = L, (s as any)[38] = w, (s as any)[39] = E) : E = (s as any)[39];
  let O: any;
  ((s as any)[40] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (O = (g as any)("sand-plugins-detail__desc", ((Ks as any)((sn as any).body1, (ds as any).description) as any).className), (s as any)[40] = O) : O = (s as any)[40];
  let $: any;
  ((s as any)[41] as any) !== ((e as any).description as any) ? ($ = ((n as any).jsx as any)("p", {
    className: O,
    children: (e as any).description
  }), (s as any)[41] = (e as any).description, (s as any)[42] = $) : $ = (s as any)[42];
  let K: any;
  return ((s as any)[43] as any) !== (E as any) || ((s as any)[44] as any) !== ($ as any) ? (K = ((n as any).jsxs as any)("div", {
    className: j,
    children: [E, $]
  }), (s as any)[43] = E, (s as any)[44] = $, (s as any)[45] = K) : K = (s as any)[45], K;
}
function fa(this: any, l: any): any {
  (fa as any).d = 1198;
  const s: any = ((B as any).c as any)(164),
    {
      entry: e,
      installedServer: a,
      accountSlots: t,
      installedPlugin: i,
      installMode: d,
      isBusy: r,
      isAddPending: m,
      isPublishedByViewer: c,
      accountActions: x,
      onAdd: f,
      onUninstall: p,
      onUninstallPlugin: u,
      onEditSetup: b,
      onUnpublish: h
    }: any = l,
    y: any = (d as any) === (void 0 as any) ? null : d,
    v: any = (m as any) === (void 0 as any) ? !1 : m,
    {
      _: N
    }: any = (ts as any)(),
    {
      _: o
    }: any = (ts as any)(),
    {
      counts: j
    }: any = (je as any)(),
    {
      state: k
    }: any = (me as any)();
  let w: any;
  ((s as any)[0] as any) !== (o as any) ? (w = (U: any): any => (o as any)({
    id: "bCbNMB",
    values: {
      count: U
    }
  }), (s as any)[0] = o, (s as any)[1] = w) : w = (s as any)[1];
  const A: any = w,
    T: any = (j as any)[(e as any).id];
  let R: any, C: any, S: any, P: any, D: any, L: any, E: any;
  if (((s as any)[2] as any) !== (o as any) || ((s as any)[3] as any) !== (e as any)) {
    R = (bn as any)(e), C = (e as any).skills ?? [], S = (e as any).publisher?.displayName ?? null;
    let U: any;
    ((s as any)[11] as any) !== ((e as any).websiteUrl as any) ? (U = (be as any)((e as any).websiteUrl), (s as any)[11] = (e as any).websiteUrl, (s as any)[12] = U) : U = (s as any)[12], E = U, P = ((e as any).builtinServerIdentifier as any) != (null as any), D = ((R as any).length as any) > (0 as any) ? (o as any)({
      id: "VdObnj",
      values: {
        0: (R as any).length
      }
    }) : null, L = ((C as any).length as any) > (0 as any) ? (o as any)({
      id: "Yb5NVb",
      values: {
        0: (C as any).length
      }
    }) : null, (s as any)[2] = o, (s as any)[3] = e, (s as any)[4] = R, (s as any)[5] = C, (s as any)[6] = S, (s as any)[7] = P, (s as any)[8] = D, (s as any)[9] = L, (s as any)[10] = E;
  } else R = (s as any)[4], C = (s as any)[5], S = (s as any)[6], P = (s as any)[7], D = (s as any)[8], L = (s as any)[9], E = (s as any)[10];
  let O: any;
  ((s as any)[13] as any) !== (D as any) || ((s as any)[14] as any) !== (L as any) ? (O = (([D, L] as any).filter as any)(ja), (s as any)[13] = D, (s as any)[14] = L, (s as any)[15] = O) : O = (s as any)[15];
  const $: any = ((O as any).join as any)(", ");
  let K: any;
  s: {
    if ((i as any) != (null as any)) {
      let U: any;
      ((s as any)[16] as any) !== (i as any) ? (U = (hn as any)(i), (s as any)[16] = i, (s as any)[17] = U) : U = (s as any)[17], K = U;
      break s;
    }
    if ((a as any) != (null as any)) {
      let U: any;
      ((s as any)[18] as any) !== (a as any) ? (U = (xe as any)(a), (s as any)[18] = a, (s as any)[19] = U) : U = (s as any)[19], K = U;
      break s;
    }
    K = null;
  }
  const F: any = y ?? K,
    Z: any = (a as any) != (null as any) && (((a as any).cursorScmProvider as any) == (null as any) || (en as any)(a)) ? a : void 0;
  let es: any;
  ((s as any)[20] as any) !== (t as any) || ((s as any)[21] as any) !== (Z as any) ? (es = Z ?? ((t as any).find as any)(pa), (s as any)[20] = t, (s as any)[21] = Z, (s as any)[22] = es) : es = (s as any)[22];
  const Q: any = es;
  let J: any;
  ((s as any)[23] as any) !== (t as any) || ((s as any)[24] as any) !== (F as any) ? (J = (F as any) == (null as any) && ((t as any).some as any)(ha), (s as any)[23] = t, (s as any)[24] = F, (s as any)[25] = J) : J = (s as any)[25];
  const ls: any = J;
  let Y: any;
  ((s as any)[26] as any) !== ((t as any).length as any) || ((s as any)[27] as any) !== (e as any) || ((s as any)[28] as any) !== (k as any) || ((s as any)[29] as any) !== (F as any) ? (Y = (F as any) != (null as any) && (k as any) != (null as any) && ((t as any).length as any) === (0 as any) && (nn as any)(e), (s as any)[26] = (t as any).length, (s as any)[27] = e, (s as any)[28] = k, (s as any)[29] = F, (s as any)[30] = Y) : Y = (s as any)[30];
  const cs: any = Y;
  let G: any;
  ((s as any)[31] as any) !== (e as any) ? (G = (ye as any)(e), (s as any)[31] = e, (s as any)[32] = G) : G = (s as any)[32];
  const ns: any = G;
  let q: any;
  ((s as any)[33] as any) !== (ns as any) ? (q = (ns as any) != (null as any) ? ((n as any).jsx as any)(Re, {
    url: ns
  }) : null, (s as any)[33] = ns, (s as any)[34] = q) : q = (s as any)[34];
  const z: any = q;
  let M: any;
  ((s as any)[35] as any) !== (r as any) || ((s as any)[36] as any) !== (h as any) ? (M = (h as any) != (null as any) ? ((n as any).jsx as any)("div", {
    className: "sand-9f619 sand-78zum5 sand-1nhvcw1 sand-1y1aw1k",
    children: ((n as any).jsx as any)(X, {
      disabled: r,
      onClick: h,
      sentiment: "danger",
      size: "lg",
      type: "button",
      variant: "secondary",
      children: ((n as any).jsx as any)(I, {
        id: "4DLZUa"
      })
    })
  }) : null, (s as any)[35] = r, (s as any)[36] = h, (s as any)[37] = M) : M = (s as any)[37];
  const as: any = M;
  let ss: any;
  ((s as any)[38] as any) !== (t as any) || ((s as any)[39] as any) !== (e as any) || ((s as any)[40] as any) !== (a as any) || ((s as any)[41] as any) !== (F as any) ? (ss = (F as any) != (null as any) && (la as any)(e, t, a), (s as any)[38] = t, (s as any)[39] = e, (s as any)[40] = a, (s as any)[41] = F, (s as any)[42] = ss) : ss = (s as any)[42];
  const _: any = ss;
  let V: any;
  ((s as any)[43] as any) !== (_ as any) ? (V = _ ? ((n as any).jsx as any)(de, {}) : null, (s as any)[43] = _, (s as any)[44] = V) : V = (s as any)[44];
  const ps: any = V;
  let fs: any;
  s: {
    if ((a?.cursorScmProvider as any) != (null as any)) {
      let H: any;
      ((s as any)[45] as any) !== (a as any) || ((s as any)[46] as any) !== (r as any) ? (H = ((n as any).jsx as any)(ne, {
        isBusy: r,
        server: a
      }), (s as any)[45] = a, (s as any)[46] = r, (s as any)[47] = H) : H = (s as any)[47], fs = H;
      break s;
    }
    if ((F as any) != (null as any)) {
      let H: any;
      ((s as any)[48] as any) !== (o as any) || ((s as any)[49] as any) !== (c as any) ? (H = c ? (o as any)({
        id: "Kvsbal"
      }) : null, (s as any)[48] = o, (s as any)[49] = c, (s as any)[50] = H) : H = (s as any)[50];
      let is: any;
      ((s as any)[51] as any) !== (i as any) || ((s as any)[52] as any) !== (a as any) || ((s as any)[53] as any) !== (p as any) || ((s as any)[54] as any) !== (u as any) ? (is = (oe: any): any => {
        switch (oe) {
          case "uninstall":
          case "remove":
            {
              (i as any) != (null as any) ? u?.((i as any).pluginId) : (a as any) != (null as any) && (p as any)((a as any).id);
              return;
            }
          default:
            return oe;
        }
      }, (s as any)[51] = i, (s as any)[52] = a, (s as any)[53] = p, (s as any)[54] = u, (s as any)[55] = is) : is = (s as any)[55];
      let ms: any;
      ((s as any)[56] as any) !== (ps as any) || ((s as any)[57] as any) !== (r as any) || ((s as any)[58] as any) !== (F as any) || ((s as any)[59] as any) !== (z as any) || ((s as any)[60] as any) !== (H as any) || ((s as any)[61] as any) !== (is as any) ? (ms = ((n as any).jsx as any)(Os, {
        children: ((n as any).jsx as any)(ce, {
          afterLabel: ps,
          isBusy: r,
          mode: F,
          removalBlockedReason: H,
          shareButton: z,
          onAction: is
        })
      }), (s as any)[56] = ps, (s as any)[57] = r, (s as any)[58] = F, (s as any)[59] = z, (s as any)[60] = H, (s as any)[61] = is, (s as any)[62] = ms) : ms = (s as any)[62], fs = ms;
      break s;
    }
    if (v) {
      let H: any;
      ((s as any)[63] as any) !== (o as any) || ((s as any)[64] as any) !== ((e as any).displayName as any) ? (H = (o as any)({
        id: "xcwvFe",
        values: {
          0: (e as any).displayName
        }
      }), (s as any)[63] = o, (s as any)[64] = (e as any).displayName, (s as any)[65] = H) : H = (s as any)[65];
      let is: any;
      ((s as any)[66] as any) !== (H as any) ? (is = ((n as any).jsx as any)(un, {
        label: H
      }), (s as any)[66] = H, (s as any)[67] = is) : is = (s as any)[67];
      let ms: any;
      ((s as any)[68] as any) !== (z as any) || ((s as any)[69] as any) !== (is as any) ? (ms = ((n as any).jsxs as any)(Os, {
        children: [z, is]
      }), (s as any)[68] = z, (s as any)[69] = is, (s as any)[70] = ms) : ms = (s as any)[70], fs = ms;
      break s;
    }
    let U: any;
    ((s as any)[71] as any) !== (e as any) || ((s as any)[72] as any) !== (f as any) ? (U = (): any => (f as any)(e), (s as any)[71] = e, (s as any)[72] = f, (s as any)[73] = U) : U = (s as any)[73];
    let Gs: any;
    ((s as any)[74] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Gs = ((n as any).jsx as any)(I, {
      id: "m16xKo"
    }), (s as any)[74] = Gs) : Gs = (s as any)[74];
    let Fs: any;
    ((s as any)[75] as any) !== (r as any) || ((s as any)[76] as any) !== (U as any) ? (Fs = ((n as any).jsx as any)(X, {
      disabled: r,
      onClick: U,
      size: "lg",
      type: "button",
      variant: "primary",
      children: Gs
    }), (s as any)[75] = r, (s as any)[76] = U, (s as any)[77] = Fs) : Fs = (s as any)[77];
    let Hs: any;
    ((s as any)[78] as any) !== (z as any) || ((s as any)[79] as any) !== (Fs as any) ? (Hs = ((n as any).jsxs as any)(Os, {
      children: [z, Fs]
    }), (s as any)[78] = z, (s as any)[79] = Fs, (s as any)[80] = Hs) : Hs = (s as any)[80], fs = Hs;
  }
  const os: any = fs;
  let js: any;
  ((s as any)[81] as any) !== (os as any) || ((s as any)[82] as any) !== (e as any) ? (js = ((n as any).jsx as any)(Ee, {
    action: os,
    entry: e
  }), (s as any)[81] = os, (s as any)[82] = e, (s as any)[83] = js) : js = (s as any)[83];
  let xs: any;
  ((s as any)[84] as any) !== (x as any) || ((s as any)[85] as any) !== (t as any) || ((s as any)[86] as any) !== (Z as any) || ((s as any)[87] as any) !== ((e as any).displayName as any) || ((s as any)[88] as any) !== ((e as any).name as any) || ((s as any)[89] as any) !== ((e as any).pluginName as any) || ((s as any)[90] as any) !== (a as any) || ((s as any)[91] as any) !== (r as any) ? (xs = ((t as any).length as any) > (0 as any) && ((a as any) == (null as any) || (Z as any) != (null as any)) ? ((n as any).jsx as any)(le, {
    financeKeys: [(e as any).name, (e as any).displayName, (e as any).pluginName],
    isBusy: r,
    slots: t,
    ...x
  }) : null, (s as any)[84] = x, (s as any)[85] = t, (s as any)[86] = Z, (s as any)[87] = (e as any).displayName, (s as any)[88] = (e as any).name, (s as any)[89] = (e as any).pluginName, (s as any)[90] = a, (s as any)[91] = r, (s as any)[92] = xs) : xs = (s as any)[92];
  let bs: any;
  ((s as any)[93] as any) !== (cs as any) ? (bs = cs ? ((n as any).jsx as any)(De, {}) : null, (s as any)[93] = cs, (s as any)[94] = bs) : bs = (s as any)[94];
  let ys: any;
  ((s as any)[95] as any) !== (Q as any) ? (ys = (Q as any) != (null as any) ? ((n as any).jsx as any)(re, {
    serverId: (Q as any).id
  }) : null, (s as any)[95] = Q, (s as any)[96] = ys) : ys = (s as any)[96];
  let vs: any;
  ((s as any)[97] as any) !== (i as any) || ((s as any)[98] as any) !== (a as any) || ((s as any)[99] as any) !== (r as any) || ((s as any)[100] as any) !== (b as any) ? (vs = ((i as any) != (null as any) || (a as any) != (null as any)) && (b as any) != (null as any) ? ((n as any).jsx as any)(Te, {
    isBusy: r,
    onEditSetup: b
  }) : null, (s as any)[97] = i, (s as any)[98] = a, (s as any)[99] = r, (s as any)[100] = b, (s as any)[101] = vs) : vs = (s as any)[101];
  let Ns: any;
  ((s as any)[102] as any) !== (o as any) ? (Ns = (o as any)({
    id: "VDvaN2"
  }), (s as any)[102] = o, (s as any)[103] = Ns) : Ns = (s as any)[103];
  let gs: any;
  ((s as any)[104] as any) !== (R as any) || ((s as any)[105] as any) !== (Ns as any) ? (gs = ((n as any).jsx as any)(se, {
    cardClassName: "sand-plugins-detail__connectors",
    items: R,
    label: Ns,
    noun: "connector"
  }), (s as any)[104] = R, (s as any)[105] = Ns, (s as any)[106] = gs) : gs = (s as any)[106];
  let ks: any;
  ((s as any)[107] as any) !== (o as any) ? (ks = (o as any)({
    id: "PCSkw2"
  }), (s as any)[107] = o, (s as any)[108] = ks) : ks = (s as any)[108];
  let ws: any;
  ((s as any)[109] as any) !== (C as any) || ((s as any)[110] as any) !== (ls as any) || ((s as any)[111] as any) !== (ks as any) ? (ws = ((n as any).jsx as any)(se, {
    cardClassName: "sand-plugins-detail__skills",
    items: C,
    isDisabled: ls,
    label: ks,
    noun: "skill"
  }), (s as any)[109] = C, (s as any)[110] = ls, (s as any)[111] = ks, (s as any)[112] = ws) : ws = (s as any)[112];
  let zs: any;
  ((s as any)[113] as any) !== (o as any) ? (zs = (o as any)({
    id: "nSkB8g"
  }), (s as any)[113] = o, (s as any)[114] = zs) : zs = (s as any)[114];
  let Ss: any;
  ((s as any)[115] as any) !== (o as any) ? (Ss = (o as any)({
    id: "Qx7DM7"
  }), (s as any)[115] = o, (s as any)[116] = Ss) : Ss = (s as any)[116];
  const Qs: any = (($ as any).length as any) > (0 as any) ? $ : null;
  let _s: any;
  ((s as any)[117] as any) !== (Ss as any) || ((s as any)[118] as any) !== (Qs as any) ? (_s = {
    term: Ss,
    value: Qs
  }, (s as any)[117] = Ss, (s as any)[118] = Qs, (s as any)[119] = _s) : _s = (s as any)[119];
  let Cs: any;
  ((s as any)[120] as any) !== (o as any) || ((s as any)[121] as any) !== (S as any) || ((s as any)[122] as any) !== (P as any) ? (Cs = (S as any) == (null as any) || P ? [] : [{
    term: (o as any)({
      id: "7aDnUb"
    }),
    value: S
  }], (s as any)[120] = o, (s as any)[121] = S, (s as any)[122] = P, (s as any)[123] = Cs) : Cs = (s as any)[123];
  let Is: any;
  ((s as any)[124] as any) !== (N as any) || ((s as any)[125] as any) !== (o as any) || ((s as any)[126] as any) !== (e as any) || ((s as any)[127] as any) !== (P as any) ? (Is = P ? [] : [{
    term: (o as any)({
      id: "K7tIrx"
    }),
    value: (yn as any)(N, e)
  }], (s as any)[124] = N, (s as any)[125] = o, (s as any)[126] = e, (s as any)[127] = P, (s as any)[128] = Is) : Is = (s as any)[128];
  let As: any;
  ((s as any)[129] as any) !== (o as any) || ((s as any)[130] as any) !== (T as any) || ((s as any)[131] as any) !== (A as any) ? (As = (T as any) != (null as any) && (T as any) > (0 as any) ? [{
    term: (o as any)({
      id: "20QE6w"
    }),
    value: (A as any)(T)
  }] : [], (s as any)[129] = o, (s as any)[130] = T, (s as any)[131] = A, (s as any)[132] = As) : As = (s as any)[132];
  let Ps: any;
  ((s as any)[133] as any) !== (o as any) || ((s as any)[134] as any) !== (E as any) ? (Ps = (E as any) == (null as any) ? [] : [{
    term: (o as any)({
      id: "On0aF2"
    }),
    value: E
  }], (s as any)[133] = o, (s as any)[134] = E, (s as any)[135] = Ps) : Ps = (s as any)[135];
  let Ls: any;
  ((s as any)[136] as any) !== (o as any) ? (Ls = (o as any)({
    id: "lXkUEV"
  }), (s as any)[136] = o, (s as any)[137] = Ls) : Ls = (s as any)[137];
  let Rs: any;
  ((s as any)[138] as any) !== (N as any) || ((s as any)[139] as any) !== (e as any) ? (Rs = (ma as any)(N, e), (s as any)[138] = N, (s as any)[139] = e, (s as any)[140] = Rs) : Rs = (s as any)[140];
  let qs: any;
  ((s as any)[141] as any) !== (Ls as any) || ((s as any)[142] as any) !== (Rs as any) ? (qs = {
    term: Ls,
    value: Rs
  }, (s as any)[141] = Ls, (s as any)[142] = Rs, (s as any)[143] = qs) : qs = (s as any)[143];
  let Ts: any;
  ((s as any)[144] as any) !== (_s as any) || ((s as any)[145] as any) !== (Cs as any) || ((s as any)[146] as any) !== (Is as any) || ((s as any)[147] as any) !== (As as any) || ((s as any)[148] as any) !== (Ps as any) || ((s as any)[149] as any) !== (qs as any) ? (Ts = [_s, ...Cs, ...Is, ...As, ...Ps, qs], (s as any)[144] = _s, (s as any)[145] = Cs, (s as any)[146] = Is, (s as any)[147] = As, (s as any)[148] = Ps, (s as any)[149] = qs, (s as any)[150] = Ts) : Ts = (s as any)[150];
  let Ds: any;
  ((s as any)[151] as any) !== (zs as any) || ((s as any)[152] as any) !== (Ts as any) ? (Ds = ((n as any).jsx as any)(ie, {
    label: zs,
    rows: Ts
  }), (s as any)[151] = zs, (s as any)[152] = Ts, (s as any)[153] = Ds) : Ds = (s as any)[153];
  let Ms: any;
  return ((s as any)[154] as any) !== (js as any) || ((s as any)[155] as any) !== (xs as any) || ((s as any)[156] as any) !== (bs as any) || ((s as any)[157] as any) !== (ys as any) || ((s as any)[158] as any) !== (vs as any) || ((s as any)[159] as any) !== (gs as any) || ((s as any)[160] as any) !== (ws as any) || ((s as any)[161] as any) !== (Ds as any) || ((s as any)[162] as any) !== (as as any) ? (Ms = ((n as any).jsxs as any)(Fe, {
    header: js,
    children: [xs, bs, ys, vs, gs, ws, Ds, as]
  }), (s as any)[154] = js, (s as any)[155] = xs, (s as any)[156] = bs, (s as any)[157] = ys, (s as any)[158] = vs, (s as any)[159] = gs, (s as any)[160] = ws, (s as any)[161] = Ds, (s as any)[162] = as, (s as any)[163] = Ms) : Ms = (s as any)[163], Ms;
}
function ha(this: any, l: any): any {
  return ((l as any).servedBy as any) === ("grok" as any);
}
function pa(this: any, l: any): any {
  return ((l as any).servedBy as any) === ("grok" as any);
}
function ja(this: any, l: any): any {
  return (l as any) != (null as any);
}
export { ie as DetailsList, Ta as FINANCE_INTEGRATIONS_DASHBOARD_URL, oa as InstalledServerDetailView, Ee as PluginDetailHeader, Fe as PluginDetailLayout, fa as PluginDetailView, re as PluginToolsSection, ta as financeIntegrationsDashboardUrl, ma as pluginAvailabilityLabel };
//# debugId=bfa6f54f-7d5f-40ad-9b69-022db2fb3eee
