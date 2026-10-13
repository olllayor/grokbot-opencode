declare var HTMLInputElement: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "a9f46f25-e2f4-4749-9098-c5342c4207d8", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-a9f46f25-e2f4-4749-9098-c5342c4207d8");
  } catch (e: any) {}
} as any)();
import { c as ns, u as ss, r as De, p as es, j as s, T as h } from "./index.eager-vendor-Qbf9YA6n.js";
import { u as os, r as i, aK as Ee, bt as cs, b$ as rs, d0 as ls } from "./index.eager-app-Cj5f8Gby.js";
import { aY as v } from "./index.eager-platform-Dcfeegfw.js";
import { W as ms, g as Oe, an as fs, a5 as us, a6 as ys } from "./index-ZYxf-aBb.js";
import { i as hs, D as ps } from "./chunk-composer-body-lines-BeTmrnKG.js";
import "./index.eager-common-CdCvBQNJ.js";
const oe: any = {
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
  sentDot: {
    kzqmXN: "sand-1v4s8kt",
    kZKoxP: "sand-ols6we",
    kaIpWk: "sand-149ho13",
    kmuXW: "sand-2lah0s",
    kWkggS: "sand-1my5qk1",
    $$css: !0
  },
  readyDot: {
    kzqmXN: "sand-1v4s8kt",
    kZKoxP: "sand-ols6we",
    kaIpWk: "sand-149ho13",
    kmuXW: "sand-2lah0s",
    kWkggS: "sand-xa9ouo",
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
function as(this: any, t: any): any {
  return ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/ as any).test as any)(t);
}
function ts(this: any, t: any): any {
  return ((((t as any).split as any)(",") as any).flatMap as any)((e: any): any => {
    const a: any = ((e as any).trim as any)();
    return ((a as any).length as any) > (0 as any) ? [a] : [];
  });
}
function ds(this: any, t: any): any {
  (ds as any).d = 492;
  const e: any = ((ns as any).c as any)(216),
    {
      draft: a,
      replyTo: n,
      status: l,
      onSend: P,
      onDiscard: r,
      footerAccessory: p
    }: any = t,
    {
      _: d
    }: any = (ss as any)(),
    {
      _: Q
    }: any = (ss as any)();
  let Z: any;
  ((e as any)[0] as any) !== ((a as any).to as any) ? (Z = (((a as any).to as any).join as any)(", "), (e as any)[0] = (a as any).to, (e as any)[1] = Z) : Z = (e as any)[1];
  const [j, F]: any = ((De as any).useState as any)(Z);
  let g: any;
  ((e as any)[2] as any) !== ((a as any).cc as any) ? (g = (a as any).cc ?? [], (e as any)[2] = (a as any).cc, (e as any)[3] = g) : g = (e as any)[3];
  let z: any;
  ((e as any)[4] as any) !== (g as any) ? (z = ((g as any).join as any)(", "), (e as any)[4] = g, (e as any)[5] = z) : z = (e as any)[5];
  const [f, Ke]: any = ((De as any).useState as any)(z),
    [u, O]: any = ((De as any).useState as any)((a as any).subject),
    [m, Le]: any = ((De as any).useState as any)((a as any).body),
    [le, is]: any = ((De as any).useState as any)(!1),
    x: any = ((De as any).useId as any)(),
    E: any = (os as any)(x);
  if ((l as any) !== ("editable" as any) && (l as any) !== ("sending" as any)) {
    const ie: any = (l as any) === ("sent" as any) || (l as any) === ("draft-created" as any);
    let B: any;
    ((e as any)[6] as any) !== (ie as any) ? (B = ({
      0: {
        className: "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-1nn3v0j sand-1bjonze sand-1120s5i sand-1pixwil sand-149ho13 sand-1ciwos8 sand-4b2ntj"
      },
      1: {
        className: "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-1nn3v0j sand-1bjonze sand-1120s5i sand-1pixwil sand-149ho13 sand-1buh4up sand-1w5rjie"
      }
    } as any)[(!!ie as any) << (0 as any)], (e as any)[6] = ie, (e as any)[7] = B) : B = (e as any)[7];
    const We: any = B;
    let R: any, o: any, _: any, q: any, te: any, w: any, $: any, y: any, b: any;
    if (((e as any)[8] as any) !== (Q as any) || ((e as any)[9] as any) !== (We as any) || ((e as any)[10] as any) !== (E as any) || ((e as any)[11] as any) !== (a as any) || ((e as any)[12] as any) !== (n as any) || ((e as any)[13] as any) !== (l as any) || ((e as any)[14] as any) !== (x as any)) {
      const {
        dotStyle: X,
        label: ne,
        summary: Se
      }: any = (gs as any)(Q, l, a);
      R = ne, o = Se, b = x, ((e as any)[24] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (_ = (i as any)("sand-email-composer", ((es as any)((Ee as any).transcriptWidget, (oe as any).card) as any).className), (e as any)[24] = _) : _ = (e as any)[24], q = "region", ((e as any)[25] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? ($ = (i as any)("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli"), (e as any)[25] = $) : $ = (e as any)[25];
      let S: any;
      ((e as any)[26] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (S = (i as any)("sand-1iyjqo2 sand-s83m0k sand-euugli sand-j0a0fe"), (e as any)[26] = S) : S = (e as any)[26];
      let M: any;
      ((e as any)[27] as any) !== (n as any) ? (M = (n as any) == (null as any) ? ((s as any).jsx as any)(h, {
        id: "xqAzrN"
      }) : ((s as any).jsx as any)(h, {
        id: "ImOQa9"
      }), (e as any)[27] = n, (e as any)[28] = M) : M = (e as any)[28], ((e as any)[29] as any) !== (E as any) || ((e as any)[30] as any) !== (S as any) || ((e as any)[31] as any) !== (M as any) || ((e as any)[32] as any) !== (x as any) ? (y = ((s as any).jsx as any)(v, {
        className: S,
        id: x,
        ref: E,
        size: "lg",
        weight: "medium",
        children: M
      }), (e as any)[29] = E, (e as any)[30] = S, (e as any)[31] = M, (e as any)[32] = x, (e as any)[33] = y) : y = (e as any)[33], te = We, w = (X as any) != (null as any) ? ((s as any).jsx as any)("span", {
        "aria-hidden": !0,
        ...(es as any)(X)
      }) : null, (e as any)[8] = Q, (e as any)[9] = We, (e as any)[10] = E, (e as any)[11] = a, (e as any)[12] = n, (e as any)[13] = l, (e as any)[14] = x, (e as any)[15] = R, (e as any)[16] = o, (e as any)[17] = _, (e as any)[18] = q, (e as any)[19] = te, (e as any)[20] = w, (e as any)[21] = $, (e as any)[22] = y, (e as any)[23] = b;
    } else R = (e as any)[15], o = (e as any)[16], _ = (e as any)[17], q = (e as any)[18], te = (e as any)[19], w = (e as any)[20], $ = (e as any)[21], y = (e as any)[22], b = (e as any)[23];
    const A: any = ie ? "green" : "secondary";
    let N: any;
    ((e as any)[34] as any) !== (R as any) || ((e as any)[35] as any) !== (A as any) ? (N = ((s as any).jsx as any)(v, {
      color: A,
      size: "sm",
      weight: "medium",
      children: R
    }), (e as any)[34] = R, (e as any)[35] = A, (e as any)[36] = N) : N = (e as any)[36];
    let k: any;
    ((e as any)[37] as any) !== (N as any) || ((e as any)[38] as any) !== (te as any) || ((e as any)[39] as any) !== (w as any) ? (k = ((s as any).jsxs as any)("span", {
      ...te,
      children: [w, N]
    }), (e as any)[37] = N, (e as any)[38] = te, (e as any)[39] = w, (e as any)[40] = k) : k = (e as any)[40];
    let C: any;
    ((e as any)[41] as any) !== (k as any) || ((e as any)[42] as any) !== ($ as any) || ((e as any)[43] as any) !== (y as any) ? (C = ((s as any).jsxs as any)("div", {
      className: $,
      children: [y, k]
    }), (e as any)[41] = k, (e as any)[42] = $, (e as any)[43] = y, (e as any)[44] = C) : C = (e as any)[44];
    let T: any;
    ((e as any)[45] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (T = (i as any)("sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft"), (e as any)[45] = T) : T = (e as any)[45];
    let I: any;
    ((e as any)[46] as any) !== (o as any) || ((e as any)[47] as any) !== (T as any) ? (I = ((s as any).jsx as any)(v, {
      className: T,
      color: "secondary",
      size: "lg",
      children: o
    }), (e as any)[46] = o, (e as any)[47] = T, (e as any)[48] = I) : I = (e as any)[48];
    let V: any;
    return ((e as any)[49] as any) !== (_ as any) || ((e as any)[50] as any) !== (q as any) || ((e as any)[51] as any) !== (C as any) || ((e as any)[52] as any) !== (I as any) || ((e as any)[53] as any) !== (b as any) ? (V = ((s as any).jsxs as any)("section", {
      "aria-labelledby": b,
      className: _,
      role: q,
      children: [C, I]
    }), (e as any)[49] = _, (e as any)[50] = q, (e as any)[51] = C, (e as any)[52] = I, (e as any)[53] = b, (e as any)[54] = V) : V = (e as any)[54], V;
  }
  let c: any, K: any, W: any, $e: any;
  ((e as any)[55] as any) !== (m as any) || ((e as any)[56] as any) !== (f as any) || ((e as any)[57] as any) !== (l as any) || ((e as any)[58] as any) !== (j as any) ? (W = (ts as any)(j), K = (ts as any)(f), c = (l as any) === ("editable" as any), $e = c && ((W as any).length as any) > (0 as any) && ((W as any).every as any)(as) && ((K as any).every as any)(as) && ((((m as any).trim as any)() as any).length as any) > (0 as any), (e as any)[55] = m, (e as any)[56] = f, (e as any)[57] = l, (e as any)[58] = j, (e as any)[59] = c, (e as any)[60] = K, (e as any)[61] = W, (e as any)[62] = $e) : (c = (e as any)[59], K = (e as any)[60], W = (e as any)[61], $e = (e as any)[62]);
  const L: any = $e;
  let de: any, Y: any, J: any, U: any, H: any, ce: any, ee: any, re: any, me: any, se: any, fe: any, ue: any, ye: any, he: any, ae: any;
  if (((e as any)[63] as any) !== (d as any) || ((e as any)[64] as any) !== (m as any) || ((e as any)[65] as any) !== (c as any) || ((e as any)[66] as any) !== (L as any) || ((e as any)[67] as any) !== (E as any) || ((e as any)[68] as any) !== (f as any) || ((e as any)[69] as any) !== (K as any) || ((e as any)[70] as any) !== ((a as any).from as any) || ((e as any)[71] as any) !== (le as any) || ((e as any)[72] as any) !== (P as any) || ((e as any)[73] as any) !== (W as any) || ((e as any)[74] as any) !== (n as any) || ((e as any)[75] as any) !== (l as any) || ((e as any)[76] as any) !== (u as any) || ((e as any)[77] as any) !== (x as any) || ((e as any)[78] as any) !== (j as any)) {
    de = (hs as any)(m);
    const ie: any = c && de && !le;
    let B: any;
    ((e as any)[94] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (B = {
      className: "sand-euugli sand-1q4ynmn sand-1ua6jya sand-b3r6kr"
    }, (e as any)[94] = B) : B = (e as any)[94];
    const We: any = B,
      R: any = ({
        0: {
          className: "sand-euugli sand-1edz59j"
        },
        1: {
          className: "sand-euugli sand-1edz59j sand-1n2onr6 sand-1vke2v8 sand-b3r6kr"
        }
      } as any)[(!!ie as any) << (0 as any)],
      o: any = {
        className: "sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli sand-1717udv sand-ng3xce sand-jbqb8w sand-19aaqeu sand-jb2p0i sand-fc7y3v sand-1yxxptd sand-1t137rt sand-ompknl"
      },
      _: any = {
        className: "sand-1lliihq sand-h8yej3 sand-euugli sand-1edz59j sand-5f5z56 sand-9f619 sand-tt52l0 sand-889kno sand-2vl965 sand-1a8lsjc sand-e2zdcy sand-ng3xce sand-jbqb8w sand-1wd3ewq sand-jb2p0i sand-fc7y3v sand-1yxxptd sand-1t137rt sand-j0a0fe sand-126k92a sand-ompknl"
      };
    let q: any;
    ((e as any)[95] as any) !== (m as any) || ((e as any)[96] as any) !== (L as any) || ((e as any)[97] as any) !== (K as any) || ((e as any)[98] as any) !== ((a as any).from as any) || ((e as any)[99] as any) !== (P as any) || ((e as any)[100] as any) !== (W as any) || ((e as any)[101] as any) !== (u as any) ? (q = function (this: any, D: any): any {
      ((D as any).preventDefault as any)(), L && (P as any)({
        from: (a as any).from,
        to: W,
        ...(((K as any).length as any) > (0 as any) ? {
          cc: K
        } : {}),
        subject: u,
        body: m
      });
    }, (e as any)[95] = m, (e as any)[96] = L, (e as any)[97] = K, (e as any)[98] = (a as any).from, (e as any)[99] = P, (e as any)[100] = W, (e as any)[101] = u, (e as any)[102] = q) : q = (e as any)[102];
    const te: any = q;
    let w: any;
    ((e as any)[103] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = function (this: any, D: any): any {
      if (!(((D as any).key as any) !== ("Enter" as any) || ((D as any).nativeEvent as any).isComposing)) {
        if ((D as any).metaKey || (D as any).ctrlKey) {
          ((D as any).preventDefault as any)(), ((D as any).stopPropagation as any)(), (((D as any).currentTarget as any).requestSubmit as any)();
          return;
        }
        (D as any).target instanceof HTMLInputElement && ((D as any).preventDefault as any)();
      }
    }, (e as any)[103] = w) : w = (e as any)[103];
    const $: any = w;
    ce = x, ((e as any)[104] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ee = (i as any)("sand-email-composer", ((es as any)((Ee as any).transcriptWidget, (oe as any).card) as any).className), (e as any)[104] = ee) : ee = (e as any)[104], re = $, me = te;
    let y: any;
    ((e as any)[105] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = (i as any)("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli"), (e as any)[105] = y) : y = (e as any)[105];
    let b: any;
    ((e as any)[106] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = (i as any)("sand-1iyjqo2 sand-s83m0k sand-euugli sand-j0a0fe"), (e as any)[106] = b) : b = (e as any)[106];
    let A: any;
    ((e as any)[107] as any) !== (n as any) ? (A = (n as any) == (null as any) ? ((s as any).jsx as any)(h, {
      id: "xqAzrN"
    }) : ((s as any).jsx as any)(h, {
      id: "ImOQa9"
    }), (e as any)[107] = n, (e as any)[108] = A) : A = (e as any)[108];
    let N: any;
    ((e as any)[109] as any) !== (E as any) || ((e as any)[110] as any) !== (b as any) || ((e as any)[111] as any) !== (A as any) || ((e as any)[112] as any) !== (x as any) ? (N = ((s as any).jsx as any)(v, {
      className: b,
      id: x,
      ref: E,
      size: "lg",
      weight: "medium",
      children: A
    }), (e as any)[109] = E, (e as any)[110] = b, (e as any)[111] = A, (e as any)[112] = x, (e as any)[113] = N) : N = (e as any)[113];
    let k: any;
    ((e as any)[114] as any) !== (l as any) ? (k = (l as any) === ("sending" as any) ? ((s as any).jsxs as any)("span", {
      className: "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-1nn3v0j sand-f159sx sand-1120s5i sand-135b78x sand-149ho13 sand-1izesbo sand-s0v71k",
      role: "status",
      children: [((s as any).jsx as any)(ms, {
        "aria-hidden": !0,
        color: "yellow",
        modifier: "spin",
        name: "loading",
        size: "base"
      }), ((s as any).jsx as any)(v, {
        size: "md",
        weight: "medium",
        children: ((s as any).jsx as any)(h, {
          id: "Sad2tK"
        })
      })]
    }) : ((s as any).jsxs as any)("span", {
      className: "sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-2lah0s sand-1nn3v0j sand-f159sx sand-1120s5i sand-mzvs34 sand-149ho13 sand-19aaqeu sand-1ciwos8",
      role: "status",
      children: [((s as any).jsx as any)("span", {
        "aria-hidden": !0,
        className: (i as any)("sand-1v4s8kt sand-ols6we sand-149ho13 sand-2lah0s sand-xa9ouo")
      }), ((s as any).jsx as any)(v, {
        color: "secondary",
        size: "sm",
        weight: "medium",
        children: ((s as any).jsx as any)(h, {
          id: "zovxVp"
        })
      })]
    }), (e as any)[114] = l, (e as any)[115] = k) : k = (e as any)[115], ((e as any)[116] as any) !== (y as any) || ((e as any)[117] as any) !== (N as any) || ((e as any)[118] as any) !== (k as any) ? (se = ((s as any).jsxs as any)("div", {
      className: y,
      children: [N, k]
    }), (e as any)[116] = y, (e as any)[117] = N, (e as any)[118] = k, (e as any)[119] = se) : se = (e as any)[119], he = We;
    let C: any;
    ((e as any)[120] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (C = {
      className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-m7lytj sand-2vl965 sand-1ykpatu sand-e2zdcy sand-so031l sand-1q0q8m5 sand-17fyfba"
    }, (e as any)[120] = C) : C = (e as any)[120];
    let T: any;
    ((e as any)[121] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (T = {
      className: "sand-2lah0s"
    }, (e as any)[121] = T) : T = (e as any)[121];
    let I: any;
    ((e as any)[122] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (I = ((s as any).jsx as any)(v, {
      ...T,
      color: "tertiary",
      size: "sm",
      children: ((s as any).jsx as any)(h, {
        id: "ejVYRQ"
      })
    }), (e as any)[122] = I) : I = (e as any)[122];
    let V: any;
    ((e as any)[123] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (V = {
      className: "sand-euugli sand-j0a0fe"
    }, (e as any)[123] = V) : V = (e as any)[123], ((e as any)[124] as any) !== ((a as any).from as any) ? (ae = ((s as any).jsxs as any)("div", {
      ...C,
      children: [I, ((s as any).jsx as any)(v, {
        ...V,
        color: "secondary",
        size: "lg",
        children: (a as any).from
      })]
    }), (e as any)[124] = (a as any).from, (e as any)[125] = ae) : ae = (e as any)[125], ((e as any)[126] as any) !== (n as any) ? (Y = (n as any) != (null as any) ? ((s as any).jsxs as any)("div", {
      className: (i as any)("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-m7lytj sand-2vl965 sand-1ykpatu sand-e2zdcy sand-so031l sand-1q0q8m5 sand-17fyfba"),
      children: [((s as any).jsx as any)(v, {
        className: (i as any)("sand-2lah0s"),
        color: "tertiary",
        size: "sm",
        children: ((s as any).jsx as any)(h, {
          id: "N+hFIL"
        })
      }), ((s as any).jsx as any)(v, {
        className: (i as any)("sand-euugli sand-j0a0fe"),
        color: "secondary",
        size: "lg",
        children: n
      })]
    }) : null, (e as any)[126] = n, (e as any)[127] = Y) : Y = (e as any)[127];
    let X: any;
    ((e as any)[128] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (X = (i as any)("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-m7lytj sand-2vl965 sand-1ykpatu sand-e2zdcy sand-so031l sand-1q0q8m5 sand-17fyfba"), (e as any)[128] = X) : X = (e as any)[128];
    let ne: any;
    ((e as any)[129] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ne = (i as any)("sand-2lah0s"), (e as any)[129] = ne) : ne = (e as any)[129];
    let Se: any;
    ((e as any)[130] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Se = ((s as any).jsx as any)(h, {
      id: "/jQctM"
    }), (e as any)[130] = Se) : Se = (e as any)[130];
    let S: any;
    ((e as any)[131] as any) !== (ne as any) ? (S = ((s as any).jsx as any)(v, {
      className: ne,
      color: "tertiary",
      size: "sm",
      children: Se
    }), (e as any)[131] = ne, (e as any)[132] = S) : S = (e as any)[132];
    const M: any = (i as any)("sand-email-composer__input", (o as any).className),
      Je: any = !c;
    let Re: any;
    ((e as any)[133] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Re = (G: any): any => (F as any)(((G as any).currentTarget as any).value), (e as any)[133] = Re) : Re = (e as any)[133];
    let ve: any;
    ((e as any)[134] as any) !== (d as any) ? (ve = (d as any)({
      id: "WcgzjF"
    }), (e as any)[134] = d, (e as any)[135] = ve) : ve = (e as any)[135];
    let ze: any;
    ((e as any)[136] as any) !== (o as any) || ((e as any)[137] as any) !== (M as any) || ((e as any)[138] as any) !== (Je as any) || ((e as any)[139] as any) !== (ve as any) || ((e as any)[140] as any) !== (j as any) ? (ze = ((s as any).jsx as any)("input", {
      autoComplete: "off",
      className: M,
      disabled: Je,
      onChange: Re,
      placeholder: ve,
      spellCheck: !1,
      style: (o as any).style,
      type: "text",
      value: j
    }), (e as any)[136] = o, (e as any)[137] = M, (e as any)[138] = Je, (e as any)[139] = ve, (e as any)[140] = j, (e as any)[141] = ze) : ze = (e as any)[141], ((e as any)[142] as any) !== (X as any) || ((e as any)[143] as any) !== (S as any) || ((e as any)[144] as any) !== (ze as any) ? (J = ((s as any).jsxs as any)("label", {
      className: X,
      children: [S, ze]
    }), (e as any)[142] = X, (e as any)[143] = S, (e as any)[144] = ze, (e as any)[145] = J) : J = (e as any)[145];
    let Ve: any;
    ((e as any)[146] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ve = {
      className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-m7lytj sand-2vl965 sand-1ykpatu sand-e2zdcy sand-so031l sand-1q0q8m5 sand-17fyfba"
    }, (e as any)[146] = Ve) : Ve = (e as any)[146];
    let Xe: any;
    ((e as any)[147] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Xe = {
      className: "sand-2lah0s"
    }, (e as any)[147] = Xe) : Xe = (e as any)[147];
    let Ge: any;
    ((e as any)[148] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ge = ((s as any).jsx as any)(v, {
      ...Xe,
      color: "tertiary",
      size: "sm",
      children: ((s as any).jsx as any)(h, {
        id: "RpYfjZ"
      })
    }), (e as any)[148] = Ge) : Ge = (e as any)[148];
    const Ue: any = !c;
    let Qe: any;
    ((e as any)[149] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Qe = (G: any): any => (Ke as any)(((G as any).currentTarget as any).value), (e as any)[149] = Qe) : Qe = (e as any)[149], ((e as any)[150] as any) !== (f as any) || ((e as any)[151] as any) !== (o as any) || ((e as any)[152] as any) !== (Ue as any) ? (U = ((s as any).jsxs as any)("label", {
      ...Ve,
      children: [Ge, ((s as any).jsx as any)("input", {
        ...o,
        autoComplete: "off",
        disabled: Ue,
        onChange: Qe,
        placeholder: "name@example.com",
        spellCheck: !1,
        type: "text",
        value: f
      })]
    }), (e as any)[150] = f, (e as any)[151] = o, (e as any)[152] = Ue, (e as any)[153] = U) : U = (e as any)[153];
    let _e: any;
    ((e as any)[154] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (_e = (i as any)("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-m7lytj sand-2vl965 sand-1ykpatu sand-e2zdcy sand-so031l sand-1q0q8m5 sand-17fyfba"), (e as any)[154] = _e) : _e = (e as any)[154];
    let qe: any;
    ((e as any)[155] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (qe = (i as any)("sand-2lah0s"), (e as any)[155] = qe) : qe = (e as any)[155];
    let Ze: any;
    ((e as any)[156] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ze = ((s as any).jsx as any)(h, {
      id: "UJmAAK"
    }), (e as any)[156] = Ze) : Ze = (e as any)[156];
    let we: any;
    ((e as any)[157] as any) !== (qe as any) ? (we = ((s as any).jsx as any)(v, {
      className: qe,
      color: "tertiary",
      size: "sm",
      children: Ze
    }), (e as any)[157] = qe, (e as any)[158] = we) : we = (e as any)[158];
    let Ce: any;
    ((e as any)[159] as any) !== (o as any) ? (Ce = (i as any)("sand-email-composer__input", (o as any).className), (e as any)[159] = o, (e as any)[160] = Ce) : Ce = (e as any)[160];
    const He: any = !c;
    let Fe: any;
    ((e as any)[161] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Fe = (G: any): any => (O as any)(((G as any).currentTarget as any).value), (e as any)[161] = Fe) : Fe = (e as any)[161];
    let Te: any;
    ((e as any)[162] as any) !== (d as any) ? (Te = (d as any)({
      id: "UJmAAK"
    }), (e as any)[162] = d, (e as any)[163] = Te) : Te = (e as any)[163];
    let Ie: any;
    ((e as any)[164] as any) !== (o as any) || ((e as any)[165] as any) !== (u as any) || ((e as any)[166] as any) !== (Ce as any) || ((e as any)[167] as any) !== (He as any) || ((e as any)[168] as any) !== (Te as any) ? (Ie = ((s as any).jsx as any)("input", {
      autoComplete: "off",
      className: Ce,
      disabled: He,
      onChange: Fe,
      placeholder: Te,
      spellCheck: !0,
      style: (o as any).style,
      type: "text",
      value: u
    }), (e as any)[164] = o, (e as any)[165] = u, (e as any)[166] = Ce, (e as any)[167] = He, (e as any)[168] = Te, (e as any)[169] = Ie) : Ie = (e as any)[169], ((e as any)[170] as any) !== (_e as any) || ((e as any)[171] as any) !== (we as any) || ((e as any)[172] as any) !== (Ie as any) ? (H = ((s as any).jsxs as any)("label", {
      className: _e,
      children: [we, Ie]
    }), (e as any)[170] = _e, (e as any)[171] = we, (e as any)[172] = Ie, (e as any)[173] = H) : H = (e as any)[173], fe = (i as any)((R as any).className), ue = (R as any).style, ye = ie ? ((s as any).jsxs as any)((s as any).Fragment, {
      children: [((s as any).jsx as any)("p", {
        className: (i as any)("sand-10im51j sand-rxpjvj sand-889kno sand-2vl965 sand-1a8lsjc sand-e2zdcy sand-1wd3ewq sand-jb2p0i sand-fc7y3v sand-1yxxptd sand-j0a0fe sand-126k92a"),
        children: m
      }), ((s as any).jsx as any)("span", {
        "aria-hidden": !0,
        className: (i as any)("sand-10l6tqk sand-1o0tod sand-tijo5x sand-1ey2m1c sand-1vqgdyp sand-wsnlid sand-47corl")
      })]
    }) : ((s as any).jsx as any)("textarea", {
      "aria-label": (d as any)({
        id: "xDAtGP"
      }),
      autoComplete: "off",
      className: (i as any)("sand-email-composer__body", (_ as any).className),
      disabled: !c,
      onChange: (G: any): any => (Le as any)(((G as any).currentTarget as any).value),
      placeholder: (d as any)({
        id: "eWlz27"
      }),
      rows: 4,
      spellCheck: !0,
      style: (_ as any).style,
      value: m
    }), (e as any)[63] = d, (e as any)[64] = m, (e as any)[65] = c, (e as any)[66] = L, (e as any)[67] = E, (e as any)[68] = f, (e as any)[69] = K, (e as any)[70] = (a as any).from, (e as any)[71] = le, (e as any)[72] = P, (e as any)[73] = W, (e as any)[74] = n, (e as any)[75] = l, (e as any)[76] = u, (e as any)[77] = x, (e as any)[78] = j, (e as any)[79] = de, (e as any)[80] = Y, (e as any)[81] = J, (e as any)[82] = U, (e as any)[83] = H, (e as any)[84] = ce, (e as any)[85] = ee, (e as any)[86] = re, (e as any)[87] = me, (e as any)[88] = se, (e as any)[89] = fe, (e as any)[90] = ue, (e as any)[91] = ye, (e as any)[92] = he, (e as any)[93] = ae;
  } else de = (e as any)[79], Y = (e as any)[80], J = (e as any)[81], U = (e as any)[82], H = (e as any)[83], ce = (e as any)[84], ee = (e as any)[85], re = (e as any)[86], me = (e as any)[87], se = (e as any)[88], fe = (e as any)[89], ue = (e as any)[90], ye = (e as any)[91], he = (e as any)[92], ae = (e as any)[93];
  let pe: any;
  ((e as any)[174] as any) !== (fe as any) || ((e as any)[175] as any) !== (ue as any) || ((e as any)[176] as any) !== (ye as any) ? (pe = ((s as any).jsx as any)("div", {
    className: fe,
    style: ue,
    children: ye
  }), (e as any)[174] = fe, (e as any)[175] = ue, (e as any)[176] = ye, (e as any)[177] = pe) : pe = (e as any)[177];
  let je: any;
  ((e as any)[178] as any) !== (d as any) || ((e as any)[179] as any) !== (c as any) || ((e as any)[180] as any) !== (le as any) || ((e as any)[181] as any) !== (de as any) ? (je = c && de ? ((s as any).jsx as any)(Oe, {
    onClick: (): any => (is as any)(js),
    rootStyle: (oe as any).toggle,
    size: "xs",
    type: "button",
    variant: "ghost",
    trailingIcon: le ? "chevron-up" : "chevron-down",
    children: (d as any)(le ? {
      id: "6lGV3K"
    } : {
      id: "fMPkxb"
    })
  }) : null, (e as any)[178] = d, (e as any)[179] = c, (e as any)[180] = le, (e as any)[181] = de, (e as any)[182] = je) : je = (e as any)[182];
  let ge: any;
  ((e as any)[183] as any) !== (Y as any) || ((e as any)[184] as any) !== (J as any) || ((e as any)[185] as any) !== (U as any) || ((e as any)[186] as any) !== (H as any) || ((e as any)[187] as any) !== (pe as any) || ((e as any)[188] as any) !== (je as any) || ((e as any)[189] as any) !== (he as any) || ((e as any)[190] as any) !== (ae as any) ? (ge = ((s as any).jsxs as any)("div", {
    ...he,
    children: [ae, Y, J, U, H, pe, je]
  }), (e as any)[183] = Y, (e as any)[184] = J, (e as any)[185] = U, (e as any)[186] = H, (e as any)[187] = pe, (e as any)[188] = je, (e as any)[189] = he, (e as any)[190] = ae, (e as any)[191] = ge) : ge = (e as any)[191];
  let Ae: any;
  ((e as any)[192] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ae = {
    className: "sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-167g77z"
  }, (e as any)[192] = Ae) : Ae = (e as any)[192];
  let xe: any;
  ((e as any)[193] as any) !== (c as any) || ((e as any)[194] as any) !== (p as any) ? (xe = c && (p as any) != (null as any) ? ((s as any).jsx as any)("span", {
    className: "sand-11t971q",
    children: p
  }) : null, (e as any)[193] = c, (e as any)[194] = p, (e as any)[195] = xe) : xe = (e as any)[195];
  const Ye: any = !c;
  let Me: any;
  ((e as any)[196] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Me = [(Ee as any).askCardButton, (Ee as any).askCardButtonTinted], (e as any)[196] = Me) : Me = (e as any)[196];
  let Pe: any;
  ((e as any)[197] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Pe = ((s as any).jsx as any)(h, {
    id: "bzSI52"
  }), (e as any)[197] = Pe) : Pe = (e as any)[197];
  let be: any;
  ((e as any)[198] as any) !== (r as any) || ((e as any)[199] as any) !== (Ye as any) ? (be = ((s as any).jsx as any)(Oe, {
    disabled: Ye,
    onClick: r,
    rootStyle: Me,
    size: "md",
    type: "button",
    variant: "outline",
    children: Pe
  }), (e as any)[198] = r, (e as any)[199] = Ye, (e as any)[200] = be) : be = (e as any)[200];
  let Ne: any;
  ((e as any)[201] as any) !== (L as any) || ((e as any)[202] as any) !== (l as any) ? (Ne = (l as any) === ("sending" as any) ? ((s as any).jsx as any)(Oe, {
    disabled: !0,
    rootStyle: [(Ee as any).askCardButton, (oe as any).sendingButton],
    size: "md",
    type: "submit",
    variant: "secondary",
    leadingIcon: {
      name: "loading",
      modifier: "spin"
    },
    children: ((s as any).jsx as any)(h, {
      id: "Sad2tK"
    })
  }) : ((s as any).jsx as any)(Oe, {
    tone: "monochrome",
    disabled: !L,
    rootStyle: (Ee as any).askCardButton,
    size: "md",
    type: "submit",
    variant: "primary",
    children: ((s as any).jsx as any)(h, {
      id: "65dxv8"
    })
  }), (e as any)[201] = L, (e as any)[202] = l, (e as any)[203] = Ne) : Ne = (e as any)[203];
  let ke: any;
  ((e as any)[204] as any) !== (xe as any) || ((e as any)[205] as any) !== (be as any) || ((e as any)[206] as any) !== (Ne as any) ? (ke = ((s as any).jsxs as any)("div", {
    ...Ae,
    children: [xe, be, Ne]
  }), (e as any)[204] = xe, (e as any)[205] = be, (e as any)[206] = Ne, (e as any)[207] = ke) : ke = (e as any)[207];
  let Be: any;
  return ((e as any)[208] as any) !== (ce as any) || ((e as any)[209] as any) !== (ee as any) || ((e as any)[210] as any) !== (re as any) || ((e as any)[211] as any) !== (me as any) || ((e as any)[212] as any) !== (se as any) || ((e as any)[213] as any) !== (ge as any) || ((e as any)[214] as any) !== (ke as any) ? (Be = ((s as any).jsxs as any)("form", {
    "aria-labelledby": ce,
    className: ee,
    onKeyDown: re,
    onSubmit: me,
    children: [se, ge, ke]
  }), (e as any)[208] = ce, (e as any)[209] = ee, (e as any)[210] = re, (e as any)[211] = me, (e as any)[212] = se, (e as any)[213] = ge, (e as any)[214] = ke, (e as any)[215] = Be) : Be = (e as any)[215], Be;
}
function js(this: any, t: any): any {
  return !t;
}
function gs(this: any, t: any, e: any, a: any): any {
  const n: any = ((a as any).to as any)[0] ?? "";
  switch (e) {
    case "sent":
      return {
        dotStyle: (oe as any).sentDot,
        label: (t as any)({
          id: "h69WC6"
        }),
        summary: (t as any)({
          id: "1isciF",
          values: {
            0: (a as any).subject,
            recipient: n
          }
        })
      };
    case "draft-created":
      return {
        dotStyle: (oe as any).sentDot,
        label: (t as any)({
          id: "2EhiTa"
        }),
        summary: (t as any)({
          id: "sovQ2K",
          values: {
            0: (a as any).subject,
            recipient: n
          }
        })
      };
    case "discarded":
      return {
        dotStyle: (oe as any).readyDot,
        label: (t as any)({
          id: "rTjXfq"
        }),
        summary: (t as any)({
          id: "AvK7yG",
          values: {
            0: (a as any).subject,
            recipient: n
          }
        })
      };
    case "unconfirmed":
      return {
        dotStyle: null,
        label: (t as any)({
          id: "s2j1h7"
        }),
        summary: (t as any)({
          id: "fuTgCk"
        })
      };
  }
}
function xs(this: any, t: any): any {
  (xs as any).d = 318;
  const e: any = ((ns as any).c as any)(31),
    {
      entry: a,
      adjacency: n
    }: any = t,
    {
      sendDraft: l,
      discardDraft: P
    }: any = (cs as any)(),
    r: any = (fs as any)(),
    p: any = (rs as any)(r),
    d: any = (a as any).draftRouteVerified;
  let Q: any;
  ((e as any)[0] as any) !== (((a as any).message as any).draft as any) || ((e as any)[1] as any) !== (d as any) ? (Q = (d?.platform as any) === ("email" as any) ? {
    ...((a as any).message as any).draft,
    from: (d as any).sendingAddress
  } : ((a as any).message as any).draft, (e as any)[0] = ((a as any).message as any).draft, (e as any)[1] = d, (e as any)[2] = Q) : Q = (e as any)[2];
  const Z: any = Q,
    j: any = (d?.platform as any) === ("email" as any) ? (d as any).replyTo : void 0;
  let F: any;
  ((e as any)[3] as any) !== (j as any) ? (F = (j as any) != (null as any) ? {
    replyTo: j
  } : {}, (e as any)[3] = j, (e as any)[4] = F) : F = (e as any)[4];
  let g: any;
  ((e as any)[5] as any) !== (r as any) ? (g = (r as any) == (null as any) ? {} : {
    footerAccessory: ((s as any).jsx as any)(ps, {
      agentId: r
    })
  }, (e as any)[5] = r, (e as any)[6] = g) : g = (e as any)[6];
  let z: any;
  ((e as any)[7] as any) !== (r as any) || ((e as any)[8] as any) !== (P as any) || ((e as any)[9] as any) !== ((a as any).id as any) || ((e as any)[10] as any) !== (p as any) ? (z = (): any => {
    (r as any) != (null as any) && (((P as any)({
      entryId: (a as any).id,
      agentId: r,
      ...(((p as any).length as any) > (0 as any) ? {
        sessionId: p
      } : {})
    }) as any).then as any)(void 0, Ns);
  }, (e as any)[7] = r, (e as any)[8] = P, (e as any)[9] = (a as any).id, (e as any)[10] = p, (e as any)[11] = z) : z = (e as any)[11];
  let f: any;
  ((e as any)[12] as any) !== (r as any) || ((e as any)[13] as any) !== ((a as any).id as any) || ((e as any)[14] as any) !== (l as any) || ((e as any)[15] as any) !== (p as any) ? (f = (Le: any): any => {
    (r as any) != (null as any) && (((l as any)({
      entryId: (a as any).id,
      draft: {
        type: "email-draft",
        draft: Le
      },
      agentId: r,
      ...(((p as any).length as any) > (0 as any) ? {
        sessionId: p
      } : {})
    }) as any).then as any)(void 0, bs);
  }, (e as any)[12] = r, (e as any)[13] = (a as any).id, (e as any)[14] = l, (e as any)[15] = p, (e as any)[16] = f) : f = (e as any)[16];
  const Ke: any = (a as any).draftSendState ?? "editable";
  let u: any;
  ((e as any)[17] as any) !== (Z as any) || ((e as any)[18] as any) !== (F as any) || ((e as any)[19] as any) !== (g as any) || ((e as any)[20] as any) !== (z as any) || ((e as any)[21] as any) !== (f as any) || ((e as any)[22] as any) !== (Ke as any) ? (u = ((s as any).jsx as any)(ds, {
    draft: Z,
    ...F,
    ...g,
    onDiscard: z,
    onSend: f,
    status: Ke
  }), (e as any)[17] = Z, (e as any)[18] = F, (e as any)[19] = g, (e as any)[20] = z, (e as any)[21] = f, (e as any)[22] = Ke, (e as any)[23] = u) : u = (e as any)[23];
  let O: any;
  ((e as any)[24] as any) !== ((n as any).isGroupStart as any) || ((e as any)[25] as any) !== ((a as any).timestampMs as any) || ((e as any)[26] as any) !== (u as any) ? (O = ((s as any).jsx as any)(us, {
    className: "sand-email-composer-wrap",
    isGroupStart: (n as any).isGroupStart,
    timestampMs: (a as any).timestampMs,
    variant: "question",
    children: u
  }), (e as any)[24] = (n as any).isGroupStart, (e as any)[25] = (a as any).timestampMs, (e as any)[26] = u, (e as any)[27] = O) : O = (e as any)[27];
  let m: any;
  return ((e as any)[28] as any) !== (a as any) || ((e as any)[29] as any) !== (O as any) ? (m = ((s as any).jsx as any)(ys, {
    entry: a,
    children: O
  }), (e as any)[28] = a, (e as any)[29] = O, (e as any)[30] = m) : m = (e as any)[30], m;
}
function bs(this: any, t: any): any {
  (ls as any)(t, {
    tags: {
      sand_area: "draft-card-email"
    }
  });
}
function Ns(this: any, t: any): any {
  (ls as any)(t, {
    tags: {
      sand_area: "draft-card-email"
    }
  });
}
export { xs as default };
//# debugId=a9f46f25-e2f4-4749-9098-c5342c4207d8
