declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "4febf859-95ad-4912-bb04-2f2f86d3146c", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-4febf859-95ad-4912-bb04-2f2f86d3146c");
  } catch (e: any) {}
} as any)();
import { c as ue, u as me, r as te, p as fe, j as a, T as h } from "./index.eager-vendor-Qbf9YA6n.js";
import { aV as ke, d2 as de, d3 as pe, bc as be, bX as he, aK as H, Q as ye, af as oe, X as ge, b0 as Y, bY as je, d4 as xe, d5 as ve } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { b2 as ze, Z as qe, b3 as Se, Y as Pe, U as Te, Q as Ce, g as le, an as Be, b4 as _e } from "./index-ZYxf-aBb.js";
import { b as we } from "./index.eager-common-CdCvBQNJ.js";
import { s as Me } from "./chunk-bot-template-share-card-frame-gOKZUO-a.js";
import { u as Ee, T as Ae } from "./chunk-team-setup-row-BCHimoZ0.js";
import { u as Ne } from "./chunk-team-bot-details-pane-CISL5cWF.js";
import "./chunk-team-setup-pills-7uDu4vf1.js";
const re: number = 160,
  Ie: any = (we as any)({
    name: "team-bot-publish-mark-reaction",
    ttlMs: 2200
  }),
  y: any = {
    card: {
      kanfag: "sand-oyr6j1",
      k9g6sI: "sand-12h1iku",
      kVAEAm: "sand-1n2onr6",
      kB7OPa: "sand-9f619",
      kzqmXN: "sand-zibbub",
      ks0D6T: "sand-193iq5w",
      k7Eaqz: "sand-euugli",
      kAzted: "sand-hvfr7q",
      kaIpWk: "sand-gqmno8",
      kVQacm: "sand-b3r6kr",
      k9WMMc: "sand-1yc453h",
      kHBbk8: "sand-c8icb0",
      $$css: !0
    },
    title: {
      kzQI83: "sand-1iyjqo2",
      k7Eaqz: "sand-euugli",
      kqGvvJ: "sand-10im51j",
      kMwMTN: "sand-tyxrsu",
      k1xSpc: "sand-104kibb",
      kJFfOR: "sand-1h7i4cw",
      kgKLqz: "sand-1ua5tub",
      kVQacm: "sand-b3r6kr",
      kg5iWk: "sand-lyipyv",
      kTgw9: "sand-13faqbe",
      $$css: !0
    },
    subtitle: {
      kqGvvJ: "sand-10im51j",
      k7Eaqz: "sand-euugli",
      kMwMTN: "sand-1o0liin",
      kVQacm: "sand-b3r6kr",
      k1xSpc: "sand-104kibb",
      kJFfOR: "sand-1gzmk7r",
      kgKLqz: "sand-1ua5tub",
      kTgw9: "sand-13faqbe",
      $$css: !0
    },
    problem: {
      kqGvvJ: "sand-10im51j",
      k7Eaqz: "sand-euugli",
      kMwMTN: "sand-6rl5ky",
      kVQacm: "sand-b3r6kr",
      k1xSpc: "sand-104kibb",
      kJFfOR: "sand-1gzmk7r",
      kgKLqz: "sand-1ua5tub",
      kTgw9: "sand-13faqbe",
      $$css: !0
    },
    action: {
      kzQI83: "sand-1iyjqo2",
      kmuXW: "sand-s83m0k",
      kCS8Yb: "sand-1r8uery sand-1tgy5j5",
      k7Eaqz: "sand-euugli",
      $$css: !0
    }
  };
function ce(this: any, Z: any): any {
  (ce as any).d = 607;
  const e: any = ((ue as any).c as any)(89),
    {
      agent: s,
      step: g
    }: any = Z,
    u: any = (g as any) === (void 0 as any) ? null : g,
    {
      _: o
    }: any = (me as any)(),
    [m, f]: any = (ke as any)(),
    [v, ne]: any = ((te as any).useState as any)("idle"),
    ee: any = ((te as any).useRef as any)(null);
  let A: any;
  ((e as any)[0] as any) !== ((s as any).id as any) ? (A = {
    onPublished: (): any => {
      (oe as any)() || ((ne as any)("happy"), (ee as any).current?.poke("spin", {
        turns: 2
      }), (ee as any).current?.poke("bounce"), ((Ie as any).arm as any)((s as any).id, (): any => {
        (ne as any)("idle");
      }));
    }
  }, (e as any)[0] = (s as any).id, (e as any)[1] = A) : A = (e as any)[1];
  const {
      status: N,
      publish: se
    }: any = (ze as any)((s as any).id, A),
    I: any = (qe as any)()?.openPane,
    O: any = ((te as any).useContext as any)(Se)?.openBotDetails ?? null,
    ie: any = (Ne as any)(s),
    r: any = (Ee as any)(),
    $: any = ((s as any).visibility as any) === ("team" as any) && ((s as any).viewerIsOwner as any) !== (!1 as any);
  let R: any;
  ((e as any)[2] as any) !== (s as any) || ((e as any)[3] as any) !== ($ as any) ? (R = $ && !(de as any)(s), (e as any)[2] = s, (e as any)[3] = $, (e as any)[4] = R) : R = (e as any)[4];
  const ae: any = (pe as any)(s, R);
  if (!$) return null;
  let j: any = null;
  if ((ie as any) != (null as any)) j = ie;else if ((O as any) != (null as any)) {
    let n: any;
    ((e as any)[5] as any) !== (O as any) ? (n = (): any => (O as any)(), (e as any)[5] = O, (e as any)[6] = n) : n = (e as any)[6], j = n;
  } else if ((I as any) != (null as any)) {
    let n: any;
    ((e as any)[7] as any) !== ((s as any).id as any) || ((e as any)[8] as any) !== (I as any) ? (n = (): any => (I as any)({
      agentId: (s as any).id
    }), (e as any)[7] = (s as any).id, (e as any)[8] = I, (e as any)[9] = n) : n = (e as any)[9], j = n;
  }
  let k: any, l: any, x: any, c: any, p: any, b: any, z: any;
  if (((e as any)[10] as any) !== (o as any) || ((e as any)[11] as any) !== (s as any) || ((e as any)[12] as any) !== (r as any) || ((e as any)[13] as any) !== (N as any)) {
    c = (be as any)(s);
    let n: any;
    ((e as any)[21] as any) !== (s as any) ? (n = (de as any)(s), (e as any)[21] = s, (e as any)[22] = n) : n = (e as any)[22], l = n, x = (N as any) === ("publishing" as any);
    let U: any;
    if (((e as any)[23] as any) !== ((s as any).id as any) ? (U = (he as any)((s as any).id), (e as any)[23] = (s as any).id, (e as any)[24] = U) : U = (e as any)[24], k = U, p = (s as any).avatarDataUrl, l) {
      let t: any;
      ((e as any)[25] as any) !== (r as any) ? (t = [r, (y as any).subtitle], (e as any)[25] = r, (e as any)[26] = t) : t = (e as any)[26];
      let i: any;
      ((e as any)[27] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = ((a as any).jsx as any)(h, {
        id: "e+CQMj"
      }), (e as any)[27] = i) : i = (e as any)[27];
      let d: any;
      ((e as any)[28] as any) !== (t as any) ? (d = ((a as any).jsx as any)(Y, {
        as: "p",
        dir: "auto",
        level: "body1",
        style: t,
        children: i
      }), (e as any)[28] = t, (e as any)[29] = d) : d = (e as any)[29], b = d;
    } else if ((N as any) === ("failed" as any)) {
      let t: any;
      ((e as any)[30] as any) !== (r as any) ? (t = [r, (y as any).problem], (e as any)[30] = r, (e as any)[31] = t) : t = (e as any)[31];
      let i: any;
      ((e as any)[32] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = ((a as any).jsx as any)(h, {
        id: "JWzXie"
      }), (e as any)[32] = i) : i = (e as any)[32];
      let d: any;
      ((e as any)[33] as any) !== (t as any) ? (d = ((a as any).jsx as any)(Y, {
        as: "p",
        dir: "auto",
        level: "body1",
        role: "alert",
        style: t,
        children: i
      }), (e as any)[33] = t, (e as any)[34] = d) : d = (e as any)[34], b = d;
    } else {
      let t: any;
      ((e as any)[35] as any) !== (r as any) ? (t = [r, (y as any).subtitle], (e as any)[35] = r, (e as any)[36] = t) : t = (e as any)[36];
      let i: any;
      ((e as any)[37] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = ((a as any).jsx as any)(h, {
        id: "PatjSf"
      }), (e as any)[37] = i) : i = (e as any)[37];
      let d: any;
      ((e as any)[38] as any) !== (t as any) ? (d = ((a as any).jsx as any)(Y, {
        as: "p",
        dir: "auto",
        level: "body1",
        style: t,
        children: i
      }), (e as any)[38] = t, (e as any)[39] = d) : d = (e as any)[39], b = d;
    }
    z = (o as any)(l ? {
      id: "hAa74A",
      values: {
        name: c
      }
    } : {
      id: "vI8feN",
      values: {
        name: c
      }
    }), (e as any)[10] = o, (e as any)[11] = s, (e as any)[12] = r, (e as any)[13] = N, (e as any)[14] = k, (e as any)[15] = l, (e as any)[16] = x, (e as any)[17] = c, (e as any)[18] = p, (e as any)[19] = b, (e as any)[20] = z;
  } else k = (e as any)[14], l = (e as any)[15], x = (e as any)[16], c = (e as any)[17], p = (e as any)[18], b = (e as any)[19], z = (e as any)[20];
  let D: any;
  ((e as any)[40] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (D = (fe as any)((y as any).card, (H as any).transcriptWidget), (e as any)[40] = D) : D = (e as any)[40];
  let L: any, Q: any;
  ((e as any)[41] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (L = {
    className: "sand-10l6tqk sand-10a8y8t sand-47corl sand-1rea2x4 sand-1ja2u2z"
  }, Q = {
    className: "sand-10l6tqk sand-1kzkgjr sand-1pkjq1s sand-omnu4r sand-1nmzwpf"
  }, (e as any)[41] = L, (e as any)[42] = Q) : (L = (e as any)[41], Q = (e as any)[42]);
  let q: any;
  ((e as any)[43] as any) !== (s as any) || ((e as any)[44] as any) !== (v as any) || ((e as any)[45] as any) !== (p as any) ? (q = ((a as any).jsx as any)("div", {
    "aria-hidden": !0,
    ...L,
    children: ((a as any).jsx as any)("div", {
      ...Q,
      children: (p as any) != (null as any) && ((p as any).length as any) > (0 as any) ? ((a as any).jsx as any)(Pe, {
        avatarKey: (s as any).id,
        dataUrl: p,
        fillPx: re
      }) : ((a as any).jsx as any)(ye, {
        ref: ee,
        color: (Ce as any)(s),
        isFollowingPointer: !1,
        isPaused: (oe as any)(),
        shape: (Te as any)(s),
        sizePx: re,
        state: v
      })
    })
  }), (e as any)[43] = s, (e as any)[44] = v, (e as any)[45] = p, (e as any)[46] = q) : q = (e as any)[46];
  let J: any, F: any, W: any, G: any, K: any;
  ((e as any)[47] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (K = {
    className: "sand-1n2onr6 sand-78zum5 sand-1qjc9v5 sand-h8yej3 sand-hvfr7q sand-1vjfegm"
  }, J = ((a as any).jsx as any)("div", {
    className: "sand-2lah0s sand-2pejg6 sand-fzkdsy sand-15l03u9 sand-1wg1ya"
  }), F = {
    className: "sand-78zum5 sand-dt5ytf sand-1qughib sand-1v2ro7d sand-1iyjqo2 sand-euugli sand-yamay9 sand-v54qhq sand-1dzx5q7 sand-1l90r2v sand-1g0dm76"
  }, W = {
    className: "sand-78zum5 sand-dt5ytf sand-1jnr06f sand-euugli"
  }, G = {
    className: "sand-78zum5 sand-1cy8zhl sand-17d4w8g sand-euugli"
  }, (e as any)[47] = J, (e as any)[48] = F, (e as any)[49] = W, (e as any)[50] = G, (e as any)[51] = K) : (J = (e as any)[47], F = (e as any)[48], W = (e as any)[49], G = (e as any)[50], K = (e as any)[51]);
  let S: any;
  ((e as any)[52] as any) !== (l as any) || ((e as any)[53] as any) !== (c as any) ? (S = ((a as any).jsx as any)(Y, {
    as: "p",
    dir: "auto",
    level: "body1",
    style: (y as any).title,
    weight: "medium",
    children: l ? ((a as any).jsx as any)(h, {
      id: "hAa74A",
      values: {
        name: c
      }
    }) : ((a as any).jsx as any)(h, {
      id: "vI8feN",
      values: {
        name: c
      }
    })
  }), (e as any)[52] = l, (e as any)[53] = c, (e as any)[54] = S) : S = (e as any)[54];
  let P: any;
  ((e as any)[55] as any) !== (l as any) || ((e as any)[56] as any) !== (u as any) ? (P = (u as any) === (null as any) || l ? null : ((a as any).jsx as any)(Ae, {
    step: u
  }), (e as any)[55] = l, (e as any)[56] = u, (e as any)[57] = P) : P = (e as any)[57];
  let T: any;
  ((e as any)[58] as any) !== (S as any) || ((e as any)[59] as any) !== (P as any) ? (T = ((a as any).jsxs as any)("div", {
    ...G,
    children: [S, P]
  }), (e as any)[58] = S, (e as any)[59] = P, (e as any)[60] = T) : T = (e as any)[60];
  let C: any;
  ((e as any)[61] as any) !== (b as any) || ((e as any)[62] as any) !== (T as any) ? (C = ((a as any).jsxs as any)("div", {
    ...W,
    children: [T, b]
  }), (e as any)[61] = b, (e as any)[62] = T, (e as any)[63] = C) : C = (e as any)[63];
  let V: any;
  ((e as any)[64] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (V = {
    className: "sand-78zum5 sand-6s0dn4 sand-ozqiw3 sand-1295est sand-167g77z sand-h8yej3 sand-euugli"
  }, (e as any)[64] = V) : V = (e as any)[64];
  let B: any;
  ((e as any)[65] as any) !== (o as any) || ((e as any)[66] as any) !== (f as any) || ((e as any)[67] as any) !== (k as any) || ((e as any)[68] as any) !== (m as any) || ((e as any)[69] as any) !== (l as any) ? (B = l ? ((a as any).jsx as any)(le, {
    disabled: (k as any) == (null as any),
    leadingIcon: m ? "check" : "link",
    onClick: (): any => {
      (k as any) != (null as any) && (f as any)(k);
    },
    rootStyle: [(H as any).askCardButton, (y as any).action],
    shape: "pill",
    size: "md",
    title: (o as any)({
      id: "a83GDF"
    }),
    tone: "monochrome",
    variant: "primary",
    children: ((a as any).jsx as any)(ge, {
      isCopied: m
    })
  }) : null, (e as any)[65] = o, (e as any)[66] = f, (e as any)[67] = k, (e as any)[68] = m, (e as any)[69] = l, (e as any)[70] = B) : B = (e as any)[70];
  let _: any;
  ((e as any)[71] as any) !== (ae as any) || ((e as any)[72] as any) !== (l as any) || ((e as any)[73] as any) !== (x as any) || ((e as any)[74] as any) !== (se as any) ? (_ = !l && (ae as any) === (!0 as any) ? ((a as any).jsx as any)(le, {
    disabled: x,
    onClick: se,
    rootStyle: [(H as any).askCardButton, (y as any).action],
    shape: "pill",
    size: "md",
    tone: "monochrome",
    variant: "primary",
    children: x ? ((a as any).jsx as any)(h, {
      id: "baaWCJ"
    }) : ((a as any).jsx as any)(h, {
      id: "pHhmq9"
    })
  }) : null, (e as any)[71] = ae, (e as any)[72] = l, (e as any)[73] = x, (e as any)[74] = se, (e as any)[75] = _) : _ = (e as any)[75];
  let w: any;
  ((e as any)[76] as any) !== (j as any) ? (w = (j as any) == (null as any) ? null : ((a as any).jsx as any)(le, {
    onClick: j,
    rootStyle: [(H as any).askCardButton, (Me as any).actionSecondary, (y as any).action],
    shape: "pill",
    size: "md",
    variant: "outline",
    children: ((a as any).jsx as any)(h, {
      id: "2Eoi/a"
    })
  }), (e as any)[76] = j, (e as any)[77] = w) : w = (e as any)[77];
  let M: any;
  ((e as any)[78] as any) !== (B as any) || ((e as any)[79] as any) !== (_ as any) || ((e as any)[80] as any) !== (w as any) ? (M = ((a as any).jsxs as any)("div", {
    ...V,
    children: [B, _, w]
  }), (e as any)[78] = B, (e as any)[79] = _, (e as any)[80] = w, (e as any)[81] = M) : M = (e as any)[81];
  let E: any;
  ((e as any)[82] as any) !== (C as any) || ((e as any)[83] as any) !== (M as any) ? (E = ((a as any).jsxs as any)("div", {
    ...K,
    children: [J, ((a as any).jsxs as any)("div", {
      ...F,
      children: [C, M]
    })]
  }), (e as any)[82] = C, (e as any)[83] = M, (e as any)[84] = E) : E = (e as any)[84];
  let X: any;
  return ((e as any)[85] as any) !== (E as any) || ((e as any)[86] as any) !== (z as any) || ((e as any)[87] as any) !== (q as any) ? (X = ((a as any).jsxs as any)("article", {
    "aria-label": z,
    ...D,
    children: [q, E]
  }), (e as any)[85] = E, (e as any)[86] = z, (e as any)[87] = q, (e as any)[88] = X) : X = (e as any)[88], X;
}
function Oe(this: any, Z: any): any {
  (Oe as any).d = 298;
  const e: any = ((ue as any).c as any)(6),
    {
      entry: s
    }: any = Z,
    g: any = (je as any)((Be as any)()),
    u: any = (_e as any)();
  let o: any;
  if (((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (u as any)) {
    const v: any = (u as any) == (null as any) ? void 0 : (xe as any)((s as any).id, (u as any).resolveEntry);
    o = (v as any) === (void 0 as any) ? null : (ve as any)(v), (e as any)[0] = s, (e as any)[1] = u, (e as any)[2] = o;
  } else o = (e as any)[2];
  const m: any = o;
  let f: any;
  return ((e as any)[3] as any) !== (g as any) || ((e as any)[4] as any) !== (m as any) ? (f = (g as any) == (null as any) ? null : ((a as any).jsx as any)(ce, {
    agent: g,
    step: m
  }), (e as any)[3] = g, (e as any)[4] = m, (e as any)[5] = f) : f = (e as any)[5], f;
}
export { Oe as default };
//# debugId=4febf859-95ad-4912-bb04-2f2f86d3146c
