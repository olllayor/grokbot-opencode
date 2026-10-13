declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "0f64db26-2293-401a-9dda-a5fbae41fc09", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-0f64db26-2293-401a-9dda-a5fbae41fc09");
  } catch (e: any) {}
} as any)();
import { c as ws, u as vs, r as bs, p as Ts, j as a, T as g } from "./index.eager-vendor-Qbf9YA6n.js";
import { u as Is, r as c, aK as os, f as zs, bt as Ms, b$ as Ds, d0 as _s } from "./index.eager-app-Cj5f8Gby.js";
import { aY as b } from "./index.eager-platform-Dcfeegfw.js";
import { W as Bs, g as xs, an as Es, a5 as Ps, a6 as $s } from "./index-ZYxf-aBb.js";
import { i as Ls, D as Vs } from "./chunk-composer-body-lines-BeTmrnKG.js";
import { b as Ws, S as As } from "./chunk-settled-message-card-BSNKlGh6.js";
import "./index.eager-common-CdCvBQNJ.js";
const Ns: any = {
  card: {
    kzqmXN: "sand-h8yej3",
    k7Eaqz: "sand-euugli",
    kaIpWk: "sand-gqmno8",
    kVQacm: "sand-b3r6kr",
    k1xSpc: "sand-78zum5",
    kXwgrk: "sand-dt5ytf",
    kOIVth: "sand-883omv",
    kmVPX3: "sand-c7ga6q",
    $$css: !0
  },
  toggle: {
    kZKoxP: "sand-d7y6wv",
    keoZOQ: "sand-1gslohp",
    k71WvV: "sand-1sa5p1d",
    k1K539: "sand-yorhqc",
    keTefX: "sand-1hm9lzh",
    kwRFfy: "sand-1icxu4v",
    kZCmMZ: "sand-25sj25",
    kaIpWk: "sand-1kogg8i",
    kMwMTN: "sand-4b2ntj",
    $$css: !0
  },
  sendingButton: {
    kSiTet: "sand-1hc1fzr",
    kWkggS: "sand-hge7h4",
    kMwMTN: "sand-1ybxsvs",
    $$css: !0
  }
};
function qs(this: any, r: any): any {
  (qs as any).d = 516;
  const s: any = ((ws as any).c as any)(133),
    {
      draft: e,
      status: t,
      onSend: j,
      onDiscard: T,
      footerAccessory: i
    }: any = r,
    {
      _: n
    }: any = (vs as any)(),
    {
      _: o
    }: any = (vs as any)(),
    [l, N]: any = ((bs as any).useState as any)((e as any).body),
    [u, S]: any = ((bs as any).useState as any)(!1),
    p: any = ((bs as any).useId as any)(),
    f: any = (Is as any)(p);
  if ((t as any) !== ("editable" as any) && (t as any) !== ("sending" as any)) {
    let I: any;
    ((s as any)[0] as any) !== (o as any) || ((s as any)[1] as any) !== (e as any) || ((s as any)[2] as any) !== (t as any) ? (I = (Fs as any)(o, t, e), (s as any)[0] = o, (s as any)[1] = e, (s as any)[2] = t, (s as any)[3] = I) : I = (s as any)[3];
    const {
      label: X,
      showStatusDot: Z,
      summary: O,
      tone: C
    }: any = I;
    let Q: any;
    ((s as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Q = ((a as any).jsx as any)(zs, {
      name: "slack",
      sizePx: 20
    }), (s as any)[4] = Q) : Q = (s as any)[4];
    let y: any;
    ((s as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = ((a as any).jsx as any)(g, {
      id: "bCu1pq"
    }), (s as any)[5] = y) : y = (s as any)[5];
    let k: any;
    return ((s as any)[6] as any) !== (X as any) || ((s as any)[7] as any) !== (Z as any) || ((s as any)[8] as any) !== (O as any) || ((s as any)[9] as any) !== (C as any) ? (k = ((a as any).jsx as any)(As, {
      leading: Q,
      showStatusDot: Z,
      status: X,
      summary: O,
      title: y,
      tone: C
    }), (s as any)[6] = X, (s as any)[7] = Z, (s as any)[8] = O, (s as any)[9] = C, (s as any)[10] = k) : k = (s as any)[10], k;
  }
  const d: any = (t as any) === ("editable" as any);
  let x: any;
  ((s as any)[11] as any) !== (l as any) || ((s as any)[12] as any) !== (d as any) ? (x = d && ((((l as any).trim as any)() as any).length as any) > (0 as any), (s as any)[11] = l, (s as any)[12] = d, (s as any)[13] = x) : x = (s as any)[13];
  const m: any = x;
  let h: any, M: any, v: any, D: any, z: any, B: any, E: any, P: any, $: any, L: any, w: any, _: any, q: any;
  if (((s as any)[14] as any) !== (n as any) || ((s as any)[15] as any) !== (l as any) || ((s as any)[16] as any) !== (d as any) || ((s as any)[17] as any) !== (m as any) || ((s as any)[18] as any) !== (f as any) || ((s as any)[19] as any) !== ((e as any).target as any) || ((s as any)[20] as any) !== ((e as any).thread as any) || ((s as any)[21] as any) !== ((e as any).workspace as any) || ((s as any)[22] as any) !== (u as any) || ((s as any)[23] as any) !== (j as any) || ((s as any)[24] as any) !== (t as any) || ((s as any)[25] as any) !== (p as any)) {
    h = (Ls as any)(l);
    const I: any = d && h && !u,
      X: any = {
        className: "sand-euugli sand-1q4ynmn sand-1ua6jya sand-b3r6kr"
      },
      Z: any = ({
        0: {
          className: "sand-euugli sand-1edz59j"
        },
        1: {
          className: "sand-euugli sand-1edz59j sand-1n2onr6 sand-1vke2v8 sand-b3r6kr"
        }
      } as any)[(!!I as any) << (0 as any)],
      O: any = {
        className: "sand-1lliihq sand-h8yej3 sand-euugli sand-1edz59j sand-5f5z56 sand-9f619 sand-tt52l0 sand-889kno sand-2vl965 sand-1a8lsjc sand-e2zdcy sand-ng3xce sand-jbqb8w sand-1wd3ewq sand-jb2p0i sand-fc7y3v sand-1yxxptd sand-1t137rt sand-j0a0fe sand-126k92a sand-ompknl"
      };
    let C: any;
    ((s as any)[39] as any) !== (l as any) || ((s as any)[40] as any) !== (m as any) || ((s as any)[41] as any) !== ((e as any).target as any) || ((s as any)[42] as any) !== ((e as any).thread as any) || ((s as any)[43] as any) !== ((e as any).workspace as any) || ((s as any)[44] as any) !== (j as any) ? (C = function (this: any, Cs: any): any {
      ((Cs as any).preventDefault as any)(), m && (j as any)({
        ...(((e as any).workspace as any) == (null as any) ? {} : {
          workspace: (e as any).workspace
        }),
        target: (e as any).target,
        ...(((e as any).thread as any) == (null as any) ? {} : {
          thread: (e as any).thread
        }),
        body: l
      });
    }, (s as any)[39] = l, (s as any)[40] = m, (s as any)[41] = (e as any).target, (s as any)[42] = (e as any).thread, (s as any)[43] = (e as any).workspace, (s as any)[44] = j, (s as any)[45] = C) : C = (s as any)[45];
    const Q: any = C;
    M = p, ((s as any)[46] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = (c as any)("sand-slack-composer", ((Ts as any)((os as any).transcriptWidget, (Ns as any).card) as any).className), (s as any)[46] = v) : v = (s as any)[46], D = Q;
    let y: any, k: any, ps: any;
    ((s as any)[47] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = (c as any)("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli"), k = {
      className: "sand-78zum5 sand-6s0dn4 sand-1jnr06f sand-1iyjqo2 sand-s83m0k sand-euugli"
    }, ps = ((a as any).jsx as any)(zs, {
      name: "slack",
      sizePx: 20
    }), (s as any)[47] = y, (s as any)[48] = k, (s as any)[49] = ps) : (y = (s as any)[47], k = (s as any)[48], ps = (s as any)[49]);
    let Y: any;
    ((s as any)[50] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Y = (c as any)("sand-1iyjqo2 sand-s83m0k sand-euugli sand-j0a0fe"), (s as any)[50] = Y) : Y = (s as any)[50];
    let ys: any;
    ((s as any)[51] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ys = ((a as any).jsx as any)(g, {
      id: "bCu1pq"
    }), (s as any)[51] = ys) : ys = (s as any)[51];
    let H: any;
    ((s as any)[52] as any) !== (f as any) || ((s as any)[53] as any) !== (Y as any) || ((s as any)[54] as any) !== (p as any) ? (H = ((a as any).jsxs as any)("span", {
      ...k,
      children: [ps, ((a as any).jsx as any)(b, {
        className: Y,
        id: p,
        ref: f,
        size: "lg",
        weight: "medium",
        children: ys
      })]
    }), (s as any)[52] = f, (s as any)[53] = Y, (s as any)[54] = p, (s as any)[55] = H) : H = (s as any)[55];
    let U: any;
    ((s as any)[56] as any) !== (t as any) ? (U = (t as any) === ("sending" as any) ? ((a as any).jsxs as any)("span", {
      className: "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-1nn3v0j sand-f159sx sand-1120s5i sand-135b78x sand-149ho13 sand-1izesbo sand-s0v71k",
      role: "status",
      children: [((a as any).jsx as any)(Bs, {
        "aria-hidden": !0,
        color: "yellow",
        modifier: "spin",
        name: "loading",
        size: "base"
      }), ((a as any).jsx as any)(b, {
        size: "md",
        weight: "medium",
        children: ((a as any).jsx as any)(g, {
          id: "Sad2tK"
        })
      })]
    }) : ((a as any).jsxs as any)("span", {
      className: "sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-2lah0s sand-1nn3v0j sand-f159sx sand-1120s5i sand-mzvs34 sand-149ho13 sand-19aaqeu sand-1ciwos8",
      role: "status",
      children: [((a as any).jsx as any)("span", {
        "aria-hidden": !0,
        className: (c as any)("sand-1v4s8kt sand-ols6we sand-149ho13 sand-2lah0s sand-xa9ouo")
      }), ((a as any).jsx as any)(b, {
        color: "secondary",
        size: "sm",
        weight: "medium",
        children: ((a as any).jsx as any)(g, {
          id: "zovxVp"
        })
      })]
    }), (s as any)[56] = t, (s as any)[57] = U) : U = (s as any)[57], ((s as any)[58] as any) !== (y as any) || ((s as any)[59] as any) !== (H as any) || ((s as any)[60] as any) !== (U as any) ? (z = ((a as any).jsxs as any)("div", {
      className: y,
      children: [H, U]
    }), (s as any)[58] = y, (s as any)[59] = H, (s as any)[60] = U, (s as any)[61] = z) : z = (s as any)[61], $ = (c as any)((X as any).className), L = (X as any).style, ((s as any)[62] as any) !== ((e as any).workspace as any) ? (w = ((e as any).workspace as any) != (null as any) ? ((a as any).jsxs as any)("div", {
      className: (c as any)("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-m7lytj sand-2vl965 sand-1ykpatu sand-e2zdcy sand-so031l sand-1q0q8m5 sand-17fyfba"),
      children: [((a as any).jsx as any)(b, {
        className: (c as any)("sand-2lah0s"),
        color: "tertiary",
        size: "sm",
        children: ((a as any).jsx as any)(g, {
          id: "pmUArF"
        })
      }), ((a as any).jsx as any)(b, {
        className: (c as any)("sand-euugli sand-j0a0fe"),
        color: "secondary",
        size: "lg",
        children: (e as any).workspace
      })]
    }) : null, (s as any)[62] = (e as any).workspace, (s as any)[63] = w) : w = (s as any)[63];
    let J: any;
    ((s as any)[64] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (J = (c as any)("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-m7lytj sand-2vl965 sand-1ykpatu sand-e2zdcy sand-so031l sand-1q0q8m5 sand-17fyfba"), (s as any)[64] = J) : J = (s as any)[64];
    let ss: any;
    ((s as any)[65] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ss = (c as any)("sand-2lah0s"), (s as any)[65] = ss) : ss = (s as any)[65];
    let gs: any;
    ((s as any)[66] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (gs = ((a as any).jsx as any)(g, {
      id: "/jQctM"
    }), (s as any)[66] = gs) : gs = (s as any)[66];
    let es: any;
    ((s as any)[67] as any) !== (ss as any) ? (es = ((a as any).jsx as any)(b, {
      className: ss,
      color: "tertiary",
      size: "sm",
      children: gs
    }), (s as any)[67] = ss, (s as any)[68] = es) : es = (s as any)[68];
    let as: any;
    ((s as any)[69] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (as = (c as any)("sand-euugli sand-j0a0fe"), (s as any)[69] = as) : as = (s as any)[69];
    let ts: any;
    ((s as any)[70] as any) !== ((e as any).target as any) || ((s as any)[71] as any) !== (as as any) ? (ts = ((a as any).jsx as any)(b, {
      className: as,
      color: "secondary",
      size: "lg",
      children: (e as any).target
    }), (s as any)[70] = (e as any).target, (s as any)[71] = as, (s as any)[72] = ts) : ts = (s as any)[72], ((s as any)[73] as any) !== (J as any) || ((s as any)[74] as any) !== (es as any) || ((s as any)[75] as any) !== (ts as any) ? (_ = ((a as any).jsxs as any)("div", {
      className: J,
      children: [es, ts]
    }), (s as any)[73] = J, (s as any)[74] = es, (s as any)[75] = ts, (s as any)[76] = _) : _ = (s as any)[76];
    let ns: any;
    ((s as any)[77] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ns = (c as any)("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-m7lytj sand-2vl965 sand-1ykpatu sand-e2zdcy sand-so031l sand-1q0q8m5 sand-17fyfba"), (s as any)[77] = ns) : ns = (s as any)[77];
    let ds: any;
    ((s as any)[78] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ds = (c as any)("sand-2lah0s"), (s as any)[78] = ds) : ds = (s as any)[78];
    let js: any;
    ((s as any)[79] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (js = ((a as any).jsx as any)(g, {
      id: "e66y2Z"
    }), (s as any)[79] = js) : js = (s as any)[79];
    let ls: any;
    ((s as any)[80] as any) !== (ds as any) ? (ls = ((a as any).jsx as any)(b, {
      className: ds,
      color: "tertiary",
      size: "sm",
      children: js
    }), (s as any)[80] = ds, (s as any)[81] = ls) : ls = (s as any)[81];
    let rs: any;
    ((s as any)[82] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (rs = (c as any)("sand-euugli sand-j0a0fe"), (s as any)[82] = rs) : rs = (s as any)[82];
    let is: any;
    ((s as any)[83] as any) !== (n as any) || ((s as any)[84] as any) !== ((e as any).thread as any) ? (is = ((e as any).thread as any) == (null as any) ? (n as any)({
      id: "mTBAsF"
    }) : (n as any)({
      id: "qVdt3Y",
      values: {
        0: (e as any).thread
      }
    }), (s as any)[83] = n, (s as any)[84] = (e as any).thread, (s as any)[85] = is) : is = (s as any)[85];
    let cs: any;
    ((s as any)[86] as any) !== (rs as any) || ((s as any)[87] as any) !== (is as any) ? (cs = ((a as any).jsx as any)(b, {
      className: rs,
      color: "secondary",
      size: "lg",
      children: is
    }), (s as any)[86] = rs, (s as any)[87] = is, (s as any)[88] = cs) : cs = (s as any)[88], ((s as any)[89] as any) !== (ns as any) || ((s as any)[90] as any) !== (ls as any) || ((s as any)[91] as any) !== (cs as any) ? (q = ((a as any).jsxs as any)("div", {
      className: ns,
      children: [ls, cs]
    }), (s as any)[89] = ns, (s as any)[90] = ls, (s as any)[91] = cs, (s as any)[92] = q) : q = (s as any)[92], B = (c as any)((Z as any).className), E = (Z as any).style, P = I ? ((a as any).jsxs as any)((a as any).Fragment, {
      children: [((a as any).jsx as any)("p", {
        className: (c as any)("sand-10im51j sand-rxpjvj sand-889kno sand-2vl965 sand-1a8lsjc sand-e2zdcy sand-1wd3ewq sand-jb2p0i sand-fc7y3v sand-1yxxptd sand-j0a0fe sand-126k92a"),
        children: l
      }), ((a as any).jsx as any)("span", {
        "aria-hidden": !0,
        className: (c as any)("sand-10l6tqk sand-1o0tod sand-tijo5x sand-1ey2m1c sand-1vqgdyp sand-wsnlid sand-47corl")
      })]
    }) : ((a as any).jsx as any)("textarea", {
      "aria-label": (n as any)({
        id: "xDAtGP"
      }),
      autoComplete: "off",
      className: (c as any)("sand-slack-composer__body", (O as any).className),
      disabled: !d,
      onChange: (Ss: any): any => (N as any)(((Ss as any).currentTarget as any).value),
      placeholder: (n as any)({
        id: "eWlz27"
      }),
      rows: 4,
      spellCheck: !0,
      style: (O as any).style,
      value: l
    }), (s as any)[14] = n, (s as any)[15] = l, (s as any)[16] = d, (s as any)[17] = m, (s as any)[18] = f, (s as any)[19] = (e as any).target, (s as any)[20] = (e as any).thread, (s as any)[21] = (e as any).workspace, (s as any)[22] = u, (s as any)[23] = j, (s as any)[24] = t, (s as any)[25] = p, (s as any)[26] = h, (s as any)[27] = M, (s as any)[28] = v, (s as any)[29] = D, (s as any)[30] = z, (s as any)[31] = B, (s as any)[32] = E, (s as any)[33] = P, (s as any)[34] = $, (s as any)[35] = L, (s as any)[36] = w, (s as any)[37] = _, (s as any)[38] = q;
  } else h = (s as any)[26], M = (s as any)[27], v = (s as any)[28], D = (s as any)[29], z = (s as any)[30], B = (s as any)[31], E = (s as any)[32], P = (s as any)[33], $ = (s as any)[34], L = (s as any)[35], w = (s as any)[36], _ = (s as any)[37], q = (s as any)[38];
  let V: any;
  ((s as any)[93] as any) !== (B as any) || ((s as any)[94] as any) !== (E as any) || ((s as any)[95] as any) !== (P as any) ? (V = ((a as any).jsx as any)("div", {
    className: B,
    style: E,
    children: P
  }), (s as any)[93] = B, (s as any)[94] = E, (s as any)[95] = P, (s as any)[96] = V) : V = (s as any)[96];
  let W: any;
  ((s as any)[97] as any) !== (n as any) || ((s as any)[98] as any) !== (d as any) || ((s as any)[99] as any) !== (u as any) || ((s as any)[100] as any) !== (h as any) ? (W = d && h ? ((a as any).jsx as any)(xs, {
    onClick: (): any => (S as any)(Rs),
    rootStyle: (Ns as any).toggle,
    size: "xs",
    type: "button",
    variant: "ghost",
    trailingIcon: u ? "chevron-up" : "chevron-down",
    children: (n as any)(u ? {
      id: "6lGV3K"
    } : {
      id: "fMPkxb"
    })
  }) : null, (s as any)[97] = n, (s as any)[98] = d, (s as any)[99] = u, (s as any)[100] = h, (s as any)[101] = W) : W = (s as any)[101];
  let A: any;
  ((s as any)[102] as any) !== (V as any) || ((s as any)[103] as any) !== (W as any) || ((s as any)[104] as any) !== ($ as any) || ((s as any)[105] as any) !== (L as any) || ((s as any)[106] as any) !== (w as any) || ((s as any)[107] as any) !== (_ as any) || ((s as any)[108] as any) !== (q as any) ? (A = ((a as any).jsxs as any)("div", {
    className: $,
    style: L,
    children: [w, _, q, V, W]
  }), (s as any)[102] = V, (s as any)[103] = W, (s as any)[104] = $, (s as any)[105] = L, (s as any)[106] = w, (s as any)[107] = _, (s as any)[108] = q, (s as any)[109] = A) : A = (s as any)[109];
  let ms: any;
  ((s as any)[110] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ms = {
    className: "sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-167g77z"
  }, (s as any)[110] = ms) : ms = (s as any)[110];
  let R: any;
  ((s as any)[111] as any) !== (d as any) || ((s as any)[112] as any) !== (i as any) ? (R = d && (i as any) != (null as any) ? ((a as any).jsx as any)("span", {
    className: "sand-11t971q",
    children: i
  }) : null, (s as any)[111] = d, (s as any)[112] = i, (s as any)[113] = R) : R = (s as any)[113];
  const ks: any = !d;
  let us: any;
  ((s as any)[114] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (us = [(os as any).askCardButton, (os as any).askCardButtonTinted], (s as any)[114] = us) : us = (s as any)[114];
  let fs: any;
  ((s as any)[115] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (fs = ((a as any).jsx as any)(g, {
    id: "bzSI52"
  }), (s as any)[115] = fs) : fs = (s as any)[115];
  let F: any;
  ((s as any)[116] as any) !== (T as any) || ((s as any)[117] as any) !== (ks as any) ? (F = ((a as any).jsx as any)(xs, {
    disabled: ks,
    onClick: T,
    rootStyle: us,
    size: "md",
    type: "button",
    variant: "outline",
    children: fs
  }), (s as any)[116] = T, (s as any)[117] = ks, (s as any)[118] = F) : F = (s as any)[118];
  let G: any;
  ((s as any)[119] as any) !== (m as any) || ((s as any)[120] as any) !== (t as any) ? (G = (t as any) === ("sending" as any) ? ((a as any).jsx as any)(xs, {
    disabled: !0,
    rootStyle: [(os as any).askCardButton, (Ns as any).sendingButton],
    size: "md",
    type: "submit",
    variant: "secondary",
    leadingIcon: {
      name: "loading",
      modifier: "spin"
    },
    children: ((a as any).jsx as any)(g, {
      id: "Sad2tK"
    })
  }) : ((a as any).jsx as any)(xs, {
    tone: "monochrome",
    disabled: !m,
    rootStyle: (os as any).askCardButton,
    size: "md",
    type: "submit",
    variant: "primary",
    children: ((a as any).jsx as any)(g, {
      id: "pi1oME"
    })
  }), (s as any)[119] = m, (s as any)[120] = t, (s as any)[121] = G) : G = (s as any)[121];
  let K: any;
  ((s as any)[122] as any) !== (R as any) || ((s as any)[123] as any) !== (F as any) || ((s as any)[124] as any) !== (G as any) ? (K = ((a as any).jsxs as any)("div", {
    ...ms,
    children: [R, F, G]
  }), (s as any)[122] = R, (s as any)[123] = F, (s as any)[124] = G, (s as any)[125] = K) : K = (s as any)[125];
  let hs: any;
  return ((s as any)[126] as any) !== (M as any) || ((s as any)[127] as any) !== (v as any) || ((s as any)[128] as any) !== (D as any) || ((s as any)[129] as any) !== (z as any) || ((s as any)[130] as any) !== (A as any) || ((s as any)[131] as any) !== (K as any) ? (hs = ((a as any).jsxs as any)("form", {
    "aria-labelledby": M,
    className: v,
    onSubmit: D,
    children: [z, A, K]
  }), (s as any)[126] = M, (s as any)[127] = v, (s as any)[128] = D, (s as any)[129] = z, (s as any)[130] = A, (s as any)[131] = K, (s as any)[132] = hs) : hs = (s as any)[132], hs;
}
function Rs(this: any, r: any): any {
  return !r;
}
function Fs(this: any, r: any, s: any, e: any): any {
  const t: any = (Ws as any)((e as any).body);
  switch (s) {
    case "sent":
      return {
        label: (r as any)({
          id: "h69WC6"
        }),
        showStatusDot: !0,
        summary: (r as any)({
          id: "p0Rg3/",
          values: {
            0: (e as any).target,
            firstLine: t
          }
        }),
        tone: "success"
      };
    case "draft-created":
      return {
        label: (r as any)({
          id: "2EhiTa"
        }),
        showStatusDot: !0,
        summary: (r as any)({
          id: "MXL9r5",
          values: {
            0: (e as any).target,
            firstLine: t
          }
        }),
        tone: "success"
      };
    case "discarded":
      return {
        label: (r as any)({
          id: "rTjXfq"
        }),
        showStatusDot: !0,
        summary: (r as any)({
          id: "sdHT+L",
          values: {
            0: (e as any).target,
            firstLine: t
          }
        }),
        tone: "neutral"
      };
    case "unconfirmed":
      return {
        label: (r as any)({
          id: "s2j1h7"
        }),
        showStatusDot: !1,
        summary: (r as any)({
          id: "gt5MpL"
        }),
        tone: "neutral"
      };
  }
}
function Gs(this: any, r: any): any {
  (Gs as any).d = 326;
  const s: any = ((ws as any).c as any)(32),
    {
      entry: e,
      adjacency: t
    }: any = r,
    {
      sendDraft: j,
      discardDraft: T
    }: any = (Ms as any)(),
    i: any = (Es as any)(),
    n: any = (Ds as any)(i),
    o: any = (e as any).draftRouteVerified;
  let l: any = ((e as any).message as any).draft;
  if ((o?.platform as any) === ("slack" as any)) {
    let m: any;
    if (((s as any)[0] as any) !== ((((e as any).message as any).draft as any).body as any) || ((s as any)[1] as any) !== ((o as any).channelName as any) || ((s as any)[2] as any) !== ((o as any).workspace as any) ? (m = {
      workspace: (o as any).workspace,
      target: (o as any).channelName,
      body: (((e as any).message as any).draft as any).body
    }, (s as any)[0] = (((e as any).message as any).draft as any).body, (s as any)[1] = (o as any).channelName, (s as any)[2] = (o as any).workspace, (s as any)[3] = m) : m = (s as any)[3], l = m, ((o as any).thread as any) != (null as any)) {
      let h: any;
      ((s as any)[4] as any) !== (l as any) || ((s as any)[5] as any) !== ((o as any).thread as any) ? (h = {
        ...l,
        thread: (o as any).thread
      }, (s as any)[4] = l, (s as any)[5] = (o as any).thread, (s as any)[6] = h) : h = (s as any)[6], l = h;
    }
  }
  let N: any;
  ((s as any)[7] as any) !== (i as any) ? (N = (i as any) == (null as any) ? {} : {
    footerAccessory: ((a as any).jsx as any)(Vs, {
      agentId: i
    })
  }, (s as any)[7] = i, (s as any)[8] = N) : N = (s as any)[8];
  let u: any;
  ((s as any)[9] as any) !== (i as any) || ((s as any)[10] as any) !== (T as any) || ((s as any)[11] as any) !== ((e as any).id as any) || ((s as any)[12] as any) !== (n as any) ? (u = (): any => {
    (i as any) != (null as any) && (((T as any)({
      entryId: (e as any).id,
      agentId: i,
      ...(((n as any).length as any) > (0 as any) ? {
        sessionId: n
      } : {})
    }) as any).then as any)(void 0, Xs);
  }, (s as any)[9] = i, (s as any)[10] = T, (s as any)[11] = (e as any).id, (s as any)[12] = n, (s as any)[13] = u) : u = (s as any)[13];
  let S: any;
  ((s as any)[14] as any) !== (i as any) || ((s as any)[15] as any) !== ((e as any).id as any) || ((s as any)[16] as any) !== (j as any) || ((s as any)[17] as any) !== (n as any) ? (S = (m: any): any => {
    (i as any) != (null as any) && (((j as any)({
      entryId: (e as any).id,
      draft: {
        type: "slack-draft",
        draft: m
      },
      agentId: i,
      ...(((n as any).length as any) > (0 as any) ? {
        sessionId: n
      } : {})
    }) as any).then as any)(void 0, Ks);
  }, (s as any)[14] = i, (s as any)[15] = (e as any).id, (s as any)[16] = j, (s as any)[17] = n, (s as any)[18] = S) : S = (s as any)[18];
  const p: any = (e as any).draftSendState ?? "editable";
  let f: any;
  ((s as any)[19] as any) !== (l as any) || ((s as any)[20] as any) !== (N as any) || ((s as any)[21] as any) !== (u as any) || ((s as any)[22] as any) !== (S as any) || ((s as any)[23] as any) !== (p as any) ? (f = ((a as any).jsx as any)(qs, {
    draft: l,
    ...N,
    onDiscard: u,
    onSend: S,
    status: p
  }), (s as any)[19] = l, (s as any)[20] = N, (s as any)[21] = u, (s as any)[22] = S, (s as any)[23] = p, (s as any)[24] = f) : f = (s as any)[24];
  let d: any;
  ((s as any)[25] as any) !== ((t as any).isGroupStart as any) || ((s as any)[26] as any) !== ((e as any).timestampMs as any) || ((s as any)[27] as any) !== (f as any) ? (d = ((a as any).jsx as any)(Ps, {
    className: "sand-slack-composer-wrap",
    isGroupStart: (t as any).isGroupStart,
    timestampMs: (e as any).timestampMs,
    variant: "question",
    children: f
  }), (s as any)[25] = (t as any).isGroupStart, (s as any)[26] = (e as any).timestampMs, (s as any)[27] = f, (s as any)[28] = d) : d = (s as any)[28];
  let x: any;
  return ((s as any)[29] as any) !== (e as any) || ((s as any)[30] as any) !== (d as any) ? (x = ((a as any).jsx as any)($s, {
    entry: e,
    children: d
  }), (s as any)[29] = e, (s as any)[30] = d, (s as any)[31] = x) : x = (s as any)[31], x;
}
function Ks(this: any, r: any): any {
  (_s as any)(r, {
    tags: {
      sand_area: "draft-card-slack"
    }
  });
}
function Xs(this: any, r: any): any {
  (_s as any)(r, {
    tags: {
      sand_area: "draft-card-slack"
    }
  });
}
export { Gs as default };
//# debugId=0f64db26-2293-401a-9dda-a5fbae41fc09
