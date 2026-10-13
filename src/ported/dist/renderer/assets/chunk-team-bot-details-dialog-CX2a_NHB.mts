declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "058bba05-724c-4f8c-a44a-13ccbf8f6c27", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-058bba05-724c-4f8c-a44a-13ccbf8f6c27");
  } catch (e: any) {}
} as any)();
import { c as H, u as Ze, r as K, j as s, p as ie, T as D } from "./index.eager-vendor-Qbf9YA6n.js";
import { eY as Es, fI as $s, a_ as Y, a$ as Xe, cw as us, c$ as Cs, cq as Bs, cr as Ps, fJ as ps, d0 as Ls, aP as cs, f as Is, bc as ks, b7 as Os, dC as qs, fx as Fs, cg as Rs, fK as Ws, d2 as Gs } from "./index.eager-app-Cj5f8Gby.js";
import { a_ as Vs } from "./index.eager-platform-Dcfeegfw.js";
import { x as W, J as Ks, p as Us, bQ as Hs, W as Js, bw as Xs, bL as Zs, bR as Qs } from "./index-ZYxf-aBb.js";
import { T as Ys, G as et } from "./chunk-team-bot-plugins-dialog-D6-x2Byv.js";
import { a as st, T as tt } from "./chunk-team-bot-context-dialog-9mLHC6gW.js";
import { e as nt } from "./index.eager-common-CdCvBQNJ.js";
import { u as it, W as at } from "./chunk-wipe-navigation-B3wgZxtA.js";
import { r as lt } from "./chunk-bot-template-details-focus-BkZ83BHB.js";
import { c as ot, T as dt, O as rt, b as ct, a as mt } from "./chunk-team-bot-setup-grid-Bn3gQfbU.js";
import { d as ft, T as ut, P as pt, M as Qe, e as kt, A as os, D as ds, f as Ue, b as ht } from "./chunk-team-bot-details-rows-zXlABTd_.js";
import { g as gt } from "./chunk-get-file-icon-ZAkFyGfn.js";
import { a as hs } from "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
import { u as jt, a as xt } from "./chunk-grok-bot-slack-dialog-live-CcLC4Tfx.js";
import { T as bt } from "./chunk-team-setup-new-secret-dialog-BMvn0nac.js";
import { u as yt } from "./chunk-use-team-bot-access-BG6AYhPN.js";
const rs: any = {
    error: {
      kMwMTN: "sand-6rl5ky",
      $$css: !0
    },
    fieldFooter: {
      k1xSpc: "sand-78zum5",
      kjj79g: "sand-1qughib",
      kOIVth: "sand-167g77z",
      $$css: !0
    }
  },
  gs: number = 140;
function vt(this: any, r: any, e: any): any {
  const n: any = (((r as any).description as any).trim as any)();
  return {
    isNameEmpty: (((((r as any).name as any).trim as any)() as any).length as any) === (0 as any),
    isDescriptionTooLong: (n as any) !== (((e as any).trim as any)() as any) && ((n as any).length as any) > (gs as any)
  };
}
function js(this: any, r: any): any {
  (js as any).d = 987;
  const e: any = ((H as any).c as any)(60),
    {
      draft: n,
      problems: t,
      onChange: i,
      failure: l
    }: any = r,
    {
      _: a
    }: any = (Ze as any)(),
    d: any = ((K as any).useId as any)(),
    c: any = ((K as any).useId as any)();
  let o: any, j: any;
  if (((e as any)[0] as any) !== ((n as any).description as any)) {
    const R: any = (Es as any)();
    o = ((((((n as any).description as any).trim as any)() as any).length as any).toLocaleString as any)(R), j = ((gs as any).toLocaleString as any)(R), (e as any)[0] = (n as any).description, (e as any)[1] = o, (e as any)[2] = j;
  } else o = (e as any)[1], j = (e as any)[2];
  const S: any = j;
  let f: any, k: any, g: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = {
    className: "sand-78zum5 sand-dt5ytf sand-1af02g3"
  }, k = {
    className: "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-1o0liin sand-1wm8ruf"
  }, g = ((s as any).jsx as any)(D, {
    id: "6YtxFj"
  }), (e as any)[3] = f, (e as any)[4] = k, (e as any)[5] = g) : (f = (e as any)[3], k = (e as any)[4], g = (e as any)[5]);
  const x: any = (t as any).isNameEmpty ? d : void 0,
    M: any = (t as any).isNameEmpty;
  let u: any;
  ((e as any)[6] as any) !== (a as any) ? (u = (a as any)({
    id: "RFtRvq"
  }), (e as any)[6] = a, (e as any)[7] = u) : u = (e as any)[7];
  let w: any;
  ((e as any)[8] as any) !== (n as any) || ((e as any)[9] as any) !== (i as any) ? (w = (R: any): any => (i as any)({
    ...n,
    name: ((R as any).currentTarget as any).value
  }), (e as any)[8] = n, (e as any)[9] = i, (e as any)[10] = w) : w = (e as any)[10];
  const p: any = (n as any).name;
  let A: any;
  ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (A = {
    className: "sand-9f619 sand-h8yej3 sand-1wxaq2x sand-889kno sand-pdmqnj sand-1a8lsjc sand-1g0dm76 sand-c342km sand-hojbe8 sand-1b8i4yy sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1k57tk5 sand-784prv sand-1t137rt sand-9v5kkp sand-4sht9k"
  }, (e as any)[11] = A) : A = (e as any)[11];
  let T: any;
  ((e as any)[12] as any) !== ((n as any).name as any) || ((e as any)[13] as any) !== ((t as any).isNameEmpty as any) || ((e as any)[14] as any) !== (x as any) || ((e as any)[15] as any) !== (u as any) || ((e as any)[16] as any) !== (w as any) ? (T = ((s as any).jsx as any)("input", {
    "aria-describedby": x,
    "aria-invalid": M,
    "aria-label": u,
    maxLength: $s,
    onChange: w,
    value: p,
    ...A
  }), (e as any)[12] = (n as any).name, (e as any)[13] = (t as any).isNameEmpty, (e as any)[14] = x, (e as any)[15] = u, (e as any)[16] = w, (e as any)[17] = T) : T = (e as any)[17];
  let E: any;
  ((e as any)[18] as any) !== (d as any) || ((e as any)[19] as any) !== ((t as any).isNameEmpty as any) ? (E = (t as any).isNameEmpty ? ((s as any).jsx as any)("span", {
    id: d,
    ...(ie as any)((Y as any).body2, (rs as any).error),
    children: ((s as any).jsx as any)(D, {
      id: "Lf9rlW"
    })
  }) : null, (e as any)[18] = d, (e as any)[19] = (t as any).isNameEmpty, (e as any)[20] = E) : E = (e as any)[20];
  let z: any;
  ((e as any)[21] as any) !== (T as any) || ((e as any)[22] as any) !== (E as any) ? (z = ((s as any).jsxs as any)("label", {
    ...k,
    children: [g, T, E]
  }), (e as any)[21] = T, (e as any)[22] = E, (e as any)[23] = z) : z = (e as any)[23];
  let b: any, y: any;
  ((e as any)[24] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = {
    className: "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-1o0liin sand-1wm8ruf"
  }, y = ((s as any).jsx as any)(D, {
    id: "Nu4oKW"
  }), (e as any)[24] = b, (e as any)[25] = y) : (b = (e as any)[24], y = (e as any)[25]);
  const $: any = (t as any).isDescriptionTooLong;
  let N: any;
  ((e as any)[26] as any) !== (a as any) ? (N = (a as any)({
    id: "NDq8h1"
  }), (e as any)[26] = a, (e as any)[27] = N) : N = (e as any)[27];
  let C: any;
  ((e as any)[28] as any) !== (n as any) || ((e as any)[29] as any) !== (i as any) ? (C = (R: any): any => (i as any)({
    ...n,
    description: ((R as any).currentTarget as any).value
  }), (e as any)[28] = n, (e as any)[29] = i, (e as any)[30] = C) : C = (e as any)[30];
  const B: any = (n as any).description;
  let _: any;
  ((e as any)[31] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (_ = {
    className: "sand-9f619 sand-h8yej3 sand-889kno sand-pdmqnj sand-1a8lsjc sand-1g0dm76 sand-c342km sand-hojbe8 sand-1b8i4yy sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1k57tk5 sand-784prv sand-1t137rt sand-9v5kkp sand-4sht9k sand-6lgdlw sand-tt52l0"
  }, (e as any)[31] = _) : _ = (e as any)[31];
  let V: any;
  ((e as any)[32] as any) !== (c as any) || ((e as any)[33] as any) !== ((n as any).description as any) || ((e as any)[34] as any) !== ((t as any).isDescriptionTooLong as any) || ((e as any)[35] as any) !== (N as any) || ((e as any)[36] as any) !== (C as any) ? (V = ((s as any).jsx as any)("textarea", {
    "aria-describedby": c,
    "aria-invalid": $,
    "aria-label": N,
    onChange: C,
    value: B,
    ..._
  }), (e as any)[32] = c, (e as any)[33] = (n as any).description, (e as any)[34] = (t as any).isDescriptionTooLong, (e as any)[35] = N, (e as any)[36] = C, (e as any)[37] = V) : V = (e as any)[37];
  let P: any;
  ((e as any)[38] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (P = (ie as any)((Y as any).body2, (rs as any).fieldFooter), (e as any)[38] = P) : P = (e as any)[38];
  let G: any;
  ((e as any)[39] as any) !== ((t as any).isDescriptionTooLong as any) ? (G = (t as any).isDescriptionTooLong ? ((s as any).jsx as any)("span", {
    className: "sand-6rl5ky",
    children: ((s as any).jsx as any)(D, {
      id: "k5X50P"
    })
  }) : null, (e as any)[39] = (t as any).isDescriptionTooLong, (e as any)[40] = G) : G = (e as any)[40];
  let O: any;
  ((e as any)[41] as any) !== ((t as any).isDescriptionTooLong as any) ? (O = ({
    0: {
      className: "sand-vc5jky sand-169k319 sand-ss6m8b"
    },
    1: {
      className: "sand-vc5jky sand-ss6m8b sand-6rl5ky"
    }
  } as any)[(!!(t as any).isDescriptionTooLong as any) << (0 as any)], (e as any)[41] = (t as any).isDescriptionTooLong, (e as any)[42] = O) : O = (e as any)[42];
  let X: any;
  ((e as any)[43] as any) !== (o as any) || ((e as any)[44] as any) !== (S as any) || ((e as any)[45] as any) !== (O as any) ? (X = ((s as any).jsxs as any)("span", {
    ...O,
    children: [o, "/", S]
  }), (e as any)[43] = o, (e as any)[44] = S, (e as any)[45] = O, (e as any)[46] = X) : X = (e as any)[46];
  let U: any;
  ((e as any)[47] as any) !== (c as any) || ((e as any)[48] as any) !== (G as any) || ((e as any)[49] as any) !== (X as any) ? (U = ((s as any).jsxs as any)("span", {
    id: c,
    ...P,
    children: [G, X]
  }), (e as any)[47] = c, (e as any)[48] = G, (e as any)[49] = X, (e as any)[50] = U) : U = (e as any)[50];
  let q: any;
  ((e as any)[51] as any) !== (V as any) || ((e as any)[52] as any) !== (U as any) ? (q = ((s as any).jsxs as any)("label", {
    ...b,
    children: [y, V, U]
  }), (e as any)[51] = V, (e as any)[52] = U, (e as any)[53] = q) : q = (e as any)[53];
  let F: any;
  ((e as any)[54] as any) !== (l as any) ? (F = l ? ((s as any).jsx as any)("div", {
    role: "alert",
    ...(ie as any)((Y as any).body2, (rs as any).error),
    children: ((s as any).jsx as any)(D, {
      id: "uSuoHw"
    })
  }) : null, (e as any)[54] = l, (e as any)[55] = F) : F = (e as any)[55];
  let v: any;
  return ((e as any)[56] as any) !== (z as any) || ((e as any)[57] as any) !== (q as any) || ((e as any)[58] as any) !== (F as any) ? (v = ((s as any).jsxs as any)("div", {
    ...f,
    children: [z, q, F]
  }), (e as any)[56] = z, (e as any)[57] = q, (e as any)[58] = F, (e as any)[59] = v) : v = (e as any)[59], v;
}
const ms: any = {
  title: {
    k9WMMc: "sand-2b8uid",
    kMwMTN: "sand-tyxrsu",
    $$css: !0
  },
  description: {
    keoZOQ: "sand-dj266r",
    k71WvV: "sand-14z9mp",
    k1K539: "sand-at24cr",
    keTefX: "sand-1lziwak",
    k9WMMc: "sand-2b8uid",
    kMwMTN: "sand-1o0liin",
    k1xSpc: "sand-104kibb",
    kJFfOR: "sand-1gzmk7r",
    kgKLqz: "sand-1ua5tub",
    kXHlph: "sand-6ikm8r",
    kORKVm: "sand-10wlt62",
    kTgw9: "sand-13faqbe",
    $$css: !0
  }
};
function xs(this: any, r: any): any {
  (xs as any).d = 995;
  const e: any = ((H as any).c as any)(12),
    {
      template: n,
      description: t,
      detailsStatus: i
    }: any = r;
  let l: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-195vfkc sand-1y1aw1k sand-wib8y2"
  }, (e as any)[0] = l) : l = (e as any)[0];
  let a: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = [(Y as any).heading3, (Xe as any).medium, (ms as any).title], (e as any)[1] = a) : a = (e as any)[1];
  let d: any;
  ((e as any)[2] as any) !== ((n as any).name as any) ? (d = ((s as any).jsx as any)((W as any).Title, {
    style: a,
    children: (n as any).name
  }), (e as any)[2] = (n as any).name, (e as any)[3] = d) : d = (e as any)[3];
  let c: any;
  ((e as any)[4] as any) !== (t as any) ? (c = ((t as any).length as any) > (0 as any) ? ((s as any).jsx as any)("div", {
    className: "sand-2lah0s sand-1iorvi4",
    children: ((s as any).jsx as any)((W as any).Description, {
      style: [(Y as any).body1, (ms as any).description],
      children: t
    })
  }) : null, (e as any)[4] = t, (e as any)[5] = c) : c = (e as any)[5];
  let o: any;
  ((e as any)[6] as any) !== (i as any) ? (o = (i as any) == (null as any) ? null : ((s as any).jsx as any)("div", {
    className: "sand-889kno",
    children: ((s as any).jsxs as any)("div", {
      ...({
        0: {
          className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1nn3v0j sand-f159sx sand-1120s5i sand-mzvs34 sand-149ho13 sand-1b8i4yy sand-4on0b6"
        },
        1: {
          className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1nn3v0j sand-f159sx sand-1120s5i sand-mzvs34 sand-149ho13 sand-yjcdl2 sand-1le6hhr"
        }
      } as any)[(((i as any) === ("published" as any)) as any) << (0 as any)],
      children: [((s as any).jsx as any)("span", {
        "aria-hidden": !0,
        ...({
          0: {
            className: "sand-1v4s8kt sand-ols6we sand-2lah0s sand-149ho13 sand-3zn3jg"
          },
          1: {
            className: "sand-1v4s8kt sand-ols6we sand-2lah0s sand-149ho13 sand-1rm5x0x"
          }
        } as any)[(((i as any) === ("published" as any)) as any) << (0 as any)]
      }), ((s as any).jsx as any)("span", {
        ...(ie as any)((Y as any).body2, (Xe as any).medium),
        children: (i as any) === ("published" as any) ? ((s as any).jsx as any)(D, {
          id: "u3wRF+"
        }) : ((s as any).jsx as any)(D, {
          id: "eneWvv"
        })
      })]
    })
  }), (e as any)[6] = i, (e as any)[7] = o) : o = (e as any)[7];
  let j: any;
  return ((e as any)[8] as any) !== (d as any) || ((e as any)[9] as any) !== (c as any) || ((e as any)[10] as any) !== (o as any) ? (j = ((s as any).jsxs as any)("div", {
    ...l,
    children: [d, c, o]
  }), (e as any)[8] = d, (e as any)[9] = c, (e as any)[10] = o, (e as any)[11] = j) : j = (e as any)[11], j;
}
function bs(this: any, r: any): any {
  (bs as any).d = 994;
  const e: any = ((H as any).c as any)(46),
    {
      onOpen: n,
      secrets: t,
      slack: i,
      unpublish: l,
      template: a,
      skills: d,
      fileSkills: c
    }: any = r,
    {
      _: o
    }: any = (Ze as any)();
  let j: any;
  ((e as any)[0] as any) !== (o as any) ? (j = (o as any)({
    id: "ohUJJM"
  }), (e as any)[0] = o, (e as any)[1] = j) : j = (e as any)[1];
  let S: any;
  ((e as any)[2] as any) !== (o as any) ? (S = (o as any)({
    id: "MAv87s"
  }), (e as any)[2] = o, (e as any)[3] = S) : S = (e as any)[3];
  let f: any;
  ((e as any)[4] as any) !== (o as any) ? (f = (o as any)({
    id: "PCSkw2"
  }), (e as any)[4] = o, (e as any)[5] = f) : f = (e as any)[5];
  let k: any;
  ((e as any)[6] as any) !== (o as any) ? (k = (o as any)({
    id: "sER+bs"
  }), (e as any)[6] = o, (e as any)[7] = k) : k = (e as any)[7];
  let g: any;
  ((e as any)[8] as any) !== (j as any) || ((e as any)[9] as any) !== (S as any) || ((e as any)[10] as any) !== (f as any) || ((e as any)[11] as any) !== (k as any) ? (g = {
    integrations: j,
    secrets: S,
    skills: f,
    files: k
  }, (e as any)[8] = j, (e as any)[9] = S, (e as any)[10] = f, (e as any)[11] = k, (e as any)[12] = g) : g = (e as any)[12];
  const x: any = g;
  let M: any;
  ((e as any)[13] as any) !== ((a as any).plugins as any) ? (M = (a as any).plugins ?? [], (e as any)[13] = (a as any).plugins, (e as any)[14] = M) : M = (e as any)[14];
  let u: any;
  ((e as any)[15] as any) !== (M as any) ? (u = ((M as any).map as any)(wt), (e as any)[15] = M, (e as any)[16] = u) : u = (e as any)[16];
  let w: any;
  ((e as any)[17] as any) !== (t as any) ? (w = ((t as any).map as any)(_t), (e as any)[17] = t, (e as any)[18] = w) : w = (e as any)[18];
  let p: any;
  ((e as any)[19] as any) !== (d as any) ? (p = ((d as any).map as any)(St), (e as any)[19] = d, (e as any)[20] = p) : p = (e as any)[20];
  let A: any;
  ((e as any)[21] as any) !== (c as any) ? (A = ((c as any).map as any)(us), (e as any)[21] = c, (e as any)[22] = A) : A = (e as any)[22];
  let T: any;
  ((e as any)[23] as any) !== (A as any) || ((e as any)[24] as any) !== (u as any) || ((e as any)[25] as any) !== (w as any) || ((e as any)[26] as any) !== (p as any) ? (T = {
    integrations: u,
    secrets: w,
    skills: p,
    files: A
  }, (e as any)[23] = A, (e as any)[24] = u, (e as any)[25] = w, (e as any)[26] = p, (e as any)[27] = T) : T = (e as any)[27];
  const E: any = T;
  let z: any;
  ((e as any)[28] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (z = {
    className: "sand-78zum5 sand-dt5ytf sand-883omv sand-yamay9"
  }, (e as any)[28] = z) : z = (e as any)[28];
  let b: any;
  ((e as any)[29] as any) !== (x as any) || ((e as any)[30] as any) !== (E as any) || ((e as any)[31] as any) !== (n as any) ? (b = ((ot as any).map as any)((_: any): any => ((s as any).jsx as any)(dt, {
    icon: (rt as any)[_],
    onOpen: (): any => (n as any)(_),
    paneKey: _,
    subtitle: ((s as any).jsx as any)(ct, {
      count: ((E as any)[_] as any).length,
      names: (E as any)[_]
    }),
    title: (x as any)[_]
  }, _)), (e as any)[29] = x, (e as any)[30] = E, (e as any)[31] = n, (e as any)[32] = b) : b = (e as any)[32];
  let y: any;
  ((e as any)[33] as any) !== (b as any) ? (y = ((s as any).jsx as any)(mt, {
    children: b
  }), (e as any)[33] = b, (e as any)[34] = y) : y = (e as any)[34];
  let $: any;
  ((e as any)[35] as any) !== ((i as any).onOpen as any) ? ($ = ((i as any).onOpen as any) == (null as any) ? {} : {
    onOpen: (i as any).onOpen
  }, (e as any)[35] = (i as any).onOpen, (e as any)[36] = $) : $ = (e as any)[36];
  let N: any;
  ((e as any)[37] as any) !== ((i as any).status as any) || ((e as any)[38] as any) !== ($ as any) ? (N = ((s as any).jsx as any)(ft, {
    paneKey: "slack",
    status: (i as any).status,
    ...$
  }), (e as any)[37] = (i as any).status, (e as any)[38] = $, (e as any)[39] = N) : N = (e as any)[39];
  let C: any;
  ((e as any)[40] as any) !== (l as any) ? (C = (l as any) == (null as any) ? null : ((s as any).jsx as any)(ut, {
    unpublish: l
  }), (e as any)[40] = l, (e as any)[41] = C) : C = (e as any)[41];
  let B: any;
  return ((e as any)[42] as any) !== (y as any) || ((e as any)[43] as any) !== (N as any) || ((e as any)[44] as any) !== (C as any) ? (B = ((s as any).jsxs as any)("div", {
    ...z,
    children: [y, N, C]
  }), (e as any)[42] = y, (e as any)[43] = N, (e as any)[44] = C, (e as any)[45] = B) : B = (e as any)[45], B;
}
function St(this: any, r: any): any {
  return (r as any).title;
}
function _t(this: any, r: any): any {
  return (r as any).name;
}
function wt(this: any, r: any): any {
  return (r as any).name;
}
function ys(this: any, r: any): any {
  (ys as any).d = 992;
  const e: any = ((H as any).c as any)(9),
    {
      plugins: n,
      actions: t,
      resolve: i
    }: any = r;
  let l: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = ((s as any).jsx as any)(D, {
    id: "fen5O4"
  }), (e as any)[0] = l) : l = (e as any)[0];
  let a: any;
  ((e as any)[1] as any) !== (n as any) ? (a = ((n as any).map as any)(At), (e as any)[1] = n, (e as any)[2] = a) : a = (e as any)[2];
  let d: any;
  ((e as any)[3] as any) !== (i as any) ? (d = (o: any): any => ((s as any).jsx as any)(pt, {
    name: (o as any).title,
    pluginId: (o as any).key,
    resolve: i
  }), (e as any)[3] = i, (e as any)[4] = d) : d = (e as any)[4];
  let c: any;
  return ((e as any)[5] as any) !== (t as any) || ((e as any)[6] as any) !== (a as any) || ((e as any)[7] as any) !== (d as any) ? (c = ((s as any).jsx as any)(Qe, {
    actions: t,
    intro: l,
    items: a,
    leadingOf: d
  }), (e as any)[5] = t, (e as any)[6] = a, (e as any)[7] = d, (e as any)[8] = c) : c = (e as any)[8], c;
}
function At(this: any, r: any): any {
  return {
    key: (r as any).pluginId,
    title: (r as any).name
  };
}
function vs(this: any, r: any): any {
  (vs as any).d = 993;
  const e: any = ((H as any).c as any)(4),
    {
      skills: n,
      actions: t
    }: any = r;
  let i: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = ((s as any).jsx as any)(D, {
    id: "3X44Vi"
  }), (e as any)[0] = i) : i = (e as any)[0];
  let l: any;
  return ((e as any)[1] as any) !== (t as any) || ((e as any)[2] as any) !== (n as any) ? (l = ((s as any).jsx as any)(Qe, {
    actions: t,
    intro: i,
    items: n
  }), (e as any)[1] = t, (e as any)[2] = n, (e as any)[3] = l) : l = (e as any)[3], l;
}
function Ss(this: any, r: any): any {
  (Ss as any).d = 991;
  const e: any = ((H as any).c as any)(6),
    {
      fileSkills: n,
      actions: t
    }: any = r;
  let i: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = ((s as any).jsx as any)(D, {
    id: "uGw/Ea"
  }), (e as any)[0] = i) : i = (e as any)[0];
  let l: any;
  ((e as any)[1] as any) !== (n as any) ? (l = ((n as any).map as any)(Nt), (e as any)[1] = n, (e as any)[2] = l) : l = (e as any)[2];
  let a: any;
  return ((e as any)[3] as any) !== (t as any) || ((e as any)[4] as any) !== (l as any) ? (a = ((s as any).jsx as any)(Qe, {
    actions: t,
    intro: i,
    items: l,
    leadingOf: Tt,
    removesWithTrash: !0
  }), (e as any)[3] = t, (e as any)[4] = l, (e as any)[5] = a) : a = (e as any)[5], a;
}
function Tt(this: any, r: any): any {
  return ((s as any).jsx as any)(kt, {
    name: (gt as any)((r as any).title)
  });
}
function Nt(this: any, r: any): any {
  return {
    key: (r as any).name,
    title: (us as any)(r)
  };
}
const Mt: number = 80,
  Ae: any = {
    body: {
      k1xSpc: "sand-78zum5",
      kXwgrk: "sand-dt5ytf",
      kAzted: "sand-2lwn1j",
      kzQI83: "sand-1iyjqo2",
      kLKAdn: "sand-exx8yu",
      kwRFfy: "sand-yri2b",
      kGO01o: "sand-18d9i69",
      kZCmMZ: "sand-1c1uobl",
      kXHlph: "sand-6ikm8r",
      kORKVm: "sand-10wlt62",
      $$css: !0
    },
    mark: {
      k3nNDw: "sand-tj8gnn",
      k3aq6I: "sand-vvkyix",
      k1ekBW: "sand-11xpdln sand-4wkmsb",
      kIyJzY: "sand-q8ykup sand-12w9bfk",
      kAMwcw: "sand-1554a8d",
      $$css: !0
    },
    markCompact: {
      k3aq6I: "sand-1ov92gx",
      $$css: !0
    },
    mainViewScroll: {
      k7Eaqz: "sand-euugli",
      kAzted: "sand-2lwn1j",
      kzQI83: "sand-1iyjqo2",
      $$css: !0
    },
    editAction: {
      kLKAdn: "sand-1yrsyyn",
      kwRFfy: "sand-f159sx",
      kGO01o: "sand-10b6aqq",
      kZCmMZ: "sand-mzvs34",
      kMzoRj: "sand-c342km",
      kWkggS: "sand-jbqb8w",
      kMwMTN: "sand-1o0liin",
      kkrTdU: "sand-1ypdohk",
      kMv6JI: "sand-jb2p0i",
      $$css: !0
    },
    subviewTitleLabel: {
      kg5iWk: "sand-lyipyv",
      k9WMMc: "sand-2b8uid",
      khDVqt: "sand-uxw1ft",
      $$css: !0
    }
  };
async function zt(this: any, r: any, e: any): Promise<any> {
  try {
    return await ((r as any).onSave as any)(e), {
      ok: !0
    };
  } catch (n: any) {
    if ((ps as any)(n)) return {
      ok: !1,
      noLongerManager: !0
    };
    const t: any = (nt as any)(n);
    return (Ls as any)(n, {
      tags: {
        sand_area: "team-bot-details",
        error_tag: t
      }
    }), {
      ok: !1,
      reason: t
    };
  }
}
function _s(this: any, r: any): any {
  (_s as any).d = 1012;
  const e: any = ((H as any).c as any)(18),
    {
      pane: n,
      template: t,
      secrets: i,
      plugins: l,
      secretsActions: a,
      skillsActions: d,
      filesActions: c,
      fileSkills: o,
      skills: j,
      resolve: S
    }: any = r;
  switch ((n as any).kind) {
    case "skills":
      {
        let f: any;
        return ((e as any)[0] as any) !== (j as any) || ((e as any)[1] as any) !== (d as any) ? (f = ((s as any).jsx as any)(vs, {
          actions: d,
          skills: j
        }), (e as any)[0] = j, (e as any)[1] = d, (e as any)[2] = f) : f = (e as any)[2], f;
      }
    case "files":
      {
        let f: any;
        return ((e as any)[3] as any) !== (o as any) || ((e as any)[4] as any) !== (c as any) ? (f = ((s as any).jsx as any)(Ss, {
          actions: c,
          fileSkills: o
        }), (e as any)[3] = o, (e as any)[4] = c, (e as any)[5] = f) : f = (e as any)[5], f;
      }
    case "secrets":
      {
        let f: any;
        ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = ((s as any).jsx as any)(D, {
          id: "PzFJDF"
        }), (e as any)[6] = f) : f = (e as any)[6];
        let k: any;
        ((e as any)[7] as any) !== (i as any) ? (k = ((i as any).map as any)(Dt), (e as any)[7] = i, (e as any)[8] = k) : k = (e as any)[8];
        let g: any;
        return ((e as any)[9] as any) !== (a as any) || ((e as any)[10] as any) !== (k as any) ? (g = ((s as any).jsx as any)(Qe, {
          actions: a,
          intro: f,
          items: k
        }), (e as any)[9] = a, (e as any)[10] = k, (e as any)[11] = g) : g = (e as any)[11], g;
      }
    case "integrations":
      {
        let f: any;
        ((e as any)[12] as any) !== ((t as any).plugins as any) ? (f = (t as any).plugins ?? [], (e as any)[12] = (t as any).plugins, (e as any)[13] = f) : f = (e as any)[13];
        let k: any;
        return ((e as any)[14] as any) !== (l as any) || ((e as any)[15] as any) !== (S as any) || ((e as any)[16] as any) !== (f as any) ? (k = ((s as any).jsx as any)(ys, {
          actions: l,
          plugins: f,
          resolve: S
        }), (e as any)[14] = l, (e as any)[15] = S, (e as any)[16] = f, (e as any)[17] = k) : k = (e as any)[17], k;
      }
  }
}
function Dt(this: any, r: any): any {
  return {
    key: (r as any).name,
    title: (r as any).name,
    description: (r as any).description ?? ""
  };
}
function ws(this: any, r: any): any {
  (ws as any).d = 1010;
  const e: any = ((H as any).c as any)(6),
    {
      agent: n,
      compact: t
    }: any = r;
  let i: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = {
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-h8yej3 sand-euugli"
  }, (e as any)[0] = i) : i = (e as any)[0];
  const l: any = t && (Ae as any).markCompact;
  let a: any;
  ((e as any)[1] as any) !== (l as any) ? (a = [(Ae as any).mark, l], (e as any)[1] = l, (e as any)[2] = a) : a = (e as any)[2];
  let d: any;
  return ((e as any)[3] as any) !== (n as any) || ((e as any)[4] as any) !== (a as any) ? (d = ((s as any).jsx as any)("div", {
    ...i,
    children: ((s as any).jsx as any)(Hs, {
      agent: n,
      sizePx: Mt,
      style: a
    })
  }), (e as any)[3] = n, (e as any)[4] = a, (e as any)[5] = d) : d = (e as any)[5], d;
}
function fs(this: any, r: any): any {
  return (r as any).kind;
}
function As(this: any, r: any): any {
  (As as any).d = 1011;
  const e: any = ((H as any).c as any)(40),
    {
      pane: n,
      secrets: t,
      slack: i,
      plugins: l,
      secretsActions: a,
      skillsActions: d,
      filesActions: c,
      fileSkills: o,
      skills: j,
      detailsStatus: S,
      unpublish: f,
      editDraft: k,
      editProblems: g,
      onEditDraftChange: x,
      editFailure: M,
      template: u,
      isLoading: w,
      description: p,
      resolve: A,
      onPush: T
    }: any = r;
  if (((n as any).kind as any) === ("root" as any)) {
    let b: any;
    ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = {
      className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-1y1aw1k sand-1bk0ktj sand-x6bls6 sand-92arao"
    }, (e as any)[0] = b) : b = (e as any)[0];
    let y: any;
    ((e as any)[1] as any) !== (p as any) || ((e as any)[2] as any) !== (S as any) || ((e as any)[3] as any) !== (u as any) ? (y = ((s as any).jsx as any)(xs, {
      description: p,
      detailsStatus: S,
      template: u
    }), (e as any)[1] = p, (e as any)[2] = S, (e as any)[3] = u, (e as any)[4] = y) : y = (e as any)[4];
    let $: any;
    ((e as any)[5] as any) !== (o as any) || ((e as any)[6] as any) !== (c as any) || ((e as any)[7] as any) !== (w as any) || ((e as any)[8] as any) !== (T as any) || ((e as any)[9] as any) !== (l as any) || ((e as any)[10] as any) !== (t as any) || ((e as any)[11] as any) !== (a as any) || ((e as any)[12] as any) !== (j as any) || ((e as any)[13] as any) !== (d as any) || ((e as any)[14] as any) !== (i as any) || ((e as any)[15] as any) !== (u as any) || ((e as any)[16] as any) !== (f as any) ? ($ = w ? ((s as any).jsx as any)("div", {
      className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1iyjqo2 sand-1db3i3o",
      children: ((s as any).jsx as any)(cs, {
        borderWidth: 1.5,
        size: 20
      })
    }) : ((s as any).jsx as any)(bs, {
      fileSkills: o,
      onOpen: (C: any): any => {
        const _: any = ({
          integrations: ((((u as any).plugins ?? []) as any).length as any) === (0 as any) ? (l as any).onAddMore : void 0,
          secrets: ((t as any).length as any) === (0 as any) ? (a as any).onAddMore : void 0,
          skills: ((j as any).length as any) === (0 as any) ? (d as any).onAddMore : void 0,
          files: ((o as any).length as any) === (0 as any) ? (c as any).onAddMore : void 0
        } as any)[C];
        (_ as any) != (null as any) ? (_ as any)() : (T as any)({
          kind: C
        });
      },
      secrets: t,
      skills: j,
      slack: i,
      template: u,
      unpublish: f
    }), (e as any)[5] = o, (e as any)[6] = c, (e as any)[7] = w, (e as any)[8] = T, (e as any)[9] = l, (e as any)[10] = t, (e as any)[11] = a, (e as any)[12] = j, (e as any)[13] = d, (e as any)[14] = i, (e as any)[15] = u, (e as any)[16] = f, (e as any)[17] = $) : $ = (e as any)[17];
    let N: any;
    return ((e as any)[18] as any) !== (y as any) || ((e as any)[19] as any) !== ($ as any) ? (N = ((s as any).jsxs as any)("div", {
      ...b,
      children: [y, $]
    }), (e as any)[18] = y, (e as any)[19] = $, (e as any)[20] = N) : N = (e as any)[20], N;
  }
  if (((n as any).kind as any) === ("edit" as any)) {
    let b: any;
    ((e as any)[21] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = {
      className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-ou54vl sand-1bk0ktj sand-x6bls6 sand-92arao sand-7sb2j6"
    }, (e as any)[21] = b) : b = (e as any)[21];
    let y: any;
    return ((e as any)[22] as any) !== (k as any) || ((e as any)[23] as any) !== (M as any) || ((e as any)[24] as any) !== (g as any) || ((e as any)[25] as any) !== (x as any) ? (y = ((s as any).jsx as any)("div", {
      ...b,
      children: ((s as any).jsx as any)(js, {
        draft: k,
        failure: M,
        onChange: x,
        problems: g
      })
    }), (e as any)[22] = k, (e as any)[23] = M, (e as any)[24] = g, (e as any)[25] = x, (e as any)[26] = y) : y = (e as any)[26], y;
  }
  if (w) {
    let b: any;
    return ((e as any)[27] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = ((s as any).jsx as any)("div", {
      className: "sand-dt5ytf sand-9f619 sand-euugli sand-ou54vl sand-1bk0ktj sand-x6bls6 sand-92arao sand-7sb2j6 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1iyjqo2 sand-1db3i3o",
      children: ((s as any).jsx as any)(cs, {
        borderWidth: 1.5,
        size: 20
      })
    }), (e as any)[27] = b) : b = (e as any)[27], b;
  }
  let E: any;
  ((e as any)[28] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (E = {
    className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-ou54vl sand-1bk0ktj sand-x6bls6 sand-92arao sand-7sb2j6"
  }, (e as any)[28] = E) : E = (e as any)[28];
  let z: any;
  return ((e as any)[29] as any) !== (o as any) || ((e as any)[30] as any) !== (c as any) || ((e as any)[31] as any) !== (n as any) || ((e as any)[32] as any) !== (l as any) || ((e as any)[33] as any) !== (A as any) || ((e as any)[34] as any) !== (t as any) || ((e as any)[35] as any) !== (a as any) || ((e as any)[36] as any) !== (j as any) || ((e as any)[37] as any) !== (d as any) || ((e as any)[38] as any) !== (u as any) ? (z = ((s as any).jsx as any)("div", {
    ...E,
    children: ((s as any).jsx as any)(_s, {
      fileSkills: o,
      filesActions: c,
      pane: n,
      plugins: l,
      resolve: A,
      secrets: t,
      secretsActions: a,
      skills: j,
      skillsActions: d,
      template: u
    })
  }), (e as any)[29] = o, (e as any)[30] = c, (e as any)[31] = n, (e as any)[32] = l, (e as any)[33] = A, (e as any)[34] = t, (e as any)[35] = a, (e as any)[36] = j, (e as any)[37] = d, (e as any)[38] = u, (e as any)[39] = z) : z = (e as any)[39], z;
}
function Ts(this: any, r: any): any {
  (Ts as any).d = 1013;
  const e: any = ((H as any).c as any)(174),
    {
      agent: n,
      template: t,
      secrets: i,
      slack: l,
      plugins: a,
      secretsActions: d,
      skillsActions: c,
      filesActions: o,
      fileSkills: j,
      skills: S,
      status: f,
      unpublish: k,
      edit: g,
      initialPane: x,
      isLoading: M,
      onClose: u,
      action: w
    }: any = r,
    {
      _: p
    }: any = (Ze as any)(),
    A: any = ((K as any).useRef as any)(null),
    T: any = ((K as any).useRef as any)(null),
    E: any = ((K as any).useRef as any)(null),
    z: any = ((K as any).useRef as any)(null),
    b: any = ((K as any).useRef as any)(null),
    {
      catalog: y
    }: any = (Cs as any)();
  let $: any;
  ((e as any)[0] as any) !== (y as any) ? ($ = (Ks as any)(y), (e as any)[0] = y, (e as any)[1] = $) : $ = (e as any)[1];
  const N: any = $;
  let C: any;
  ((e as any)[2] as any) !== (x as any) ? (C = (x as any) == (null as any) ? [{
    kind: "root"
  }] : [{
    kind: x
  }], (e as any)[2] = x, (e as any)[3] = C) : C = (e as any)[3];
  const [B, _]: any = ((K as any).useState as any)(C);
  let V: any;
  ((e as any)[4] as any) !== ((t as any).description as any) || ((e as any)[5] as any) !== ((t as any).name as any) ? (V = {
    name: (t as any).name,
    description: (t as any).description
  }, (e as any)[4] = (t as any).description, (e as any)[5] = (t as any).name, (e as any)[6] = V) : V = (e as any)[6];
  const [P, G]: any = ((K as any).useState as any)(V),
    [O, X]: any = ((K as any).useState as any)(!1),
    [U, q]: any = ((K as any).useState as any)(!1);
  let F: any;
  ((e as any)[7] as any) !== (B as any) ? (F = (B as any)[((B as any).length as any) - (1 as any)] ?? {
    kind: "root"
  }, (e as any)[7] = B, (e as any)[8] = F) : F = (e as any)[8];
  const v: any = F;
  let R: any;
  ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (R = (m: any, h: any): any => (lt as any)(m, {
    back: (E as any).current,
    incoming: h,
    title: (z as any).current,
    fallback: (T as any).current
  }), (e as any)[9] = R) : R = (e as any)[9];
  let ee: any;
  ((e as any)[10] as any) !== (v as any) ? (ee = {
    current: v,
    paneKey: fs,
    resolveFocus: R
  }, (e as any)[10] = v, (e as any)[11] = ee) : ee = (e as any)[11];
  const L: any = (it as any)(ee);
  let ae: any;
  ((e as any)[12] as any) !== ((t as any).description as any) ? (ae = (((((t as any).description as any).replace as any)(/\s+/g, " ") as any).trim as any)(), (e as any)[12] = (t as any).description, (e as any)[13] = ae) : ae = (e as any)[13];
  const Ye: any = ae,
    J: any = ((v as any).kind as any) !== ("root" as any);
  let le: any;
  ((e as any)[14] as any) !== (p as any) ? (le = (p as any)({
    id: "VFvVc6"
  }), (e as any)[14] = p, (e as any)[15] = le) : le = (e as any)[15];
  let oe: any;
  ((e as any)[16] as any) !== (p as any) ? (oe = (p as any)({
    id: "MAv87s"
  }), (e as any)[16] = p, (e as any)[17] = oe) : oe = (e as any)[17];
  let de: any;
  ((e as any)[18] as any) !== (p as any) ? (de = (p as any)({
    id: "ohUJJM"
  }), (e as any)[18] = p, (e as any)[19] = de) : de = (e as any)[19];
  let re: any;
  ((e as any)[20] as any) !== (p as any) ? (re = (p as any)({
    id: "PCSkw2"
  }), (e as any)[20] = p, (e as any)[21] = re) : re = (e as any)[21];
  let ce: any;
  ((e as any)[22] as any) !== (p as any) ? (ce = (p as any)({
    id: "sER+bs"
  }), (e as any)[22] = p, (e as any)[23] = ce) : ce = (e as any)[23];
  let Ne: any;
  ((e as any)[24] as any) !== (de as any) || ((e as any)[25] as any) !== (re as any) || ((e as any)[26] as any) !== (ce as any) || ((e as any)[27] as any) !== (le as any) || ((e as any)[28] as any) !== (oe as any) ? (Ne = {
    edit: le,
    secrets: oe,
    integrations: de,
    skills: re,
    files: ce
  }, (e as any)[24] = de, (e as any)[25] = re, (e as any)[26] = ce, (e as any)[27] = le, (e as any)[28] = oe, (e as any)[29] = Ne) : Ne = (e as any)[29];
  const Ds: any = Ne,
    es: any = ((v as any).kind as any) === ("root" as any) ? (t as any).name : (Ds as any)[(v as any).kind];
  let Me: any;
  ((e as any)[30] as any) !== (L as any) ? (Me = (m: any): any => {
    const h: any = (b as any).current?.viewportElement;
    (h as any) != (null as any) && ((h as any).scrollTop = 0), ((L as any).navigate as any)({
      direction: "push",
      landing: {
        kind: "back"
      }
    }), (_ as any)((I: any): any => [...I, m]);
  }, (e as any)[30] = L, (e as any)[31] = Me) : Me = (e as any)[31];
  const me: any = Me;
  let ze: any;
  ((e as any)[32] as any) !== (L as any) || ((e as any)[33] as any) !== (v as any) || ((e as any)[34] as any) !== ((B as any).length as any) ? (ze = (): any => {
    if (((B as any).length as any) <= (1 as any)) return;
    const m: any = (b as any).current?.viewportElement;
    (m as any) != (null as any) && ((m as any).scrollTop = 0), ((L as any).navigate as any)({
      direction: "pop",
      landing: {
        kind: "row",
        paneKey: (fs as any)(v)
      }
    }), (_ as any)(Et);
  }, (e as any)[32] = L, (e as any)[33] = v, (e as any)[34] = (B as any).length, (e as any)[35] = ze) : ze = (e as any)[35];
  const se: any = ze;
  let De: any;
  ((e as any)[36] as any) !== (me as any) || ((e as any)[37] as any) !== ((t as any).description as any) || ((e as any)[38] as any) !== ((t as any).name as any) ? (De = (): any => {
    (G as any)({
      name: (t as any).name,
      description: (t as any).description
    }), (q as any)(!1), (me as any)({
      kind: "edit"
    });
  }, (e as any)[36] = me, (e as any)[37] = (t as any).description, (e as any)[38] = (t as any).name, (e as any)[39] = De) : De = (e as any)[39];
  const ss: any = De;
  let fe: any;
  ((e as any)[40] as any) !== ((P as any).name as any) ? (fe = (((P as any).name as any).trim as any)(), (e as any)[40] = (P as any).name, (e as any)[41] = fe) : fe = (e as any)[41];
  let ue: any;
  ((e as any)[42] as any) !== ((P as any).description as any) ? (ue = (((P as any).description as any).trim as any)(), (e as any)[42] = (P as any).description, (e as any)[43] = ue) : ue = (e as any)[43];
  let Ee: any;
  ((e as any)[44] as any) !== (fe as any) || ((e as any)[45] as any) !== (ue as any) ? (Ee = {
    name: fe,
    description: ue
  }, (e as any)[44] = fe, (e as any)[45] = ue, (e as any)[46] = Ee) : Ee = (e as any)[46];
  const te: any = Ee;
  let $e: any;
  ((e as any)[47] as any) !== ((te as any).description as any) || ((e as any)[48] as any) !== ((te as any).name as any) || ((e as any)[49] as any) !== ((t as any).description as any) || ((e as any)[50] as any) !== ((t as any).name as any) ? ($e = ((te as any).name as any) !== ((((t as any).name as any).trim as any)() as any) || ((te as any).description as any) !== ((((t as any).description as any).trim as any)() as any), (e as any)[47] = (te as any).description, (e as any)[48] = (te as any).name, (e as any)[49] = (t as any).description, (e as any)[50] = (t as any).name, (e as any)[51] = $e) : $e = (e as any)[51];
  const Ce: any = $e;
  let Be: any;
  ((e as any)[52] as any) !== (P as any) || ((e as any)[53] as any) !== ((t as any).description as any) ? (Be = (vt as any)(P, (t as any).description), (e as any)[52] = P, (e as any)[53] = (t as any).description, (e as any)[54] = Be) : Be = (e as any)[54];
  const Te: any = Be,
    Pe: any = !O && Ce && !(Te as any).isNameEmpty && !(Te as any).isDescriptionTooLong,
    ts: any = (Bs as any)();
  let Le: any;
  ((e as any)[55] as any) !== (p as any) || ((e as any)[56] as any) !== (Ce as any) || ((e as any)[57] as any) !== (u as any) || ((e as any)[58] as any) !== ((v as any).kind as any) || ((e as any)[59] as any) !== (ts as any) ? (Le = async (): Promise<any> => {
    ((v as any).kind as any) === ("edit" as any) && Ce && !(await (ts as any)((Ps as any)({
      title: (p as any)({
        id: "0EcUWz"
      }),
      description: (p as any)({
        id: "yHRxo+"
      }),
      confirmLabel: (p as any)({
        id: "bzSI52"
      }),
      cancelLabel: (p as any)({
        id: "4OjqAQ"
      }),
      initialFocus: "cancel"
    }))) || (u as any)();
  }, (e as any)[55] = p, (e as any)[56] = Ce, (e as any)[57] = u, (e as any)[58] = (v as any).kind, (e as any)[59] = ts, (e as any)[60] = Le) : Le = (e as any)[60];
  const ns: any = Le;
  let Ie: any;
  ((e as any)[61] as any) !== (Pe as any) || ((e as any)[62] as any) !== (g as any) || ((e as any)[63] as any) !== (se as any) || ((e as any)[64] as any) !== (te as any) ? (Ie = async (): Promise<any> => {
    if ((g as any) == (null as any) || !Pe) return;
    (X as any)(!0), (q as any)(!1);
    const m: any = await (zt as any)(g, te);
    if ((X as any)(!1), (m as any).ok || "noLongerManager" in m && (m as any).noLongerManager) {
      (q as any)(!1), (se as any)();
      return;
    }
    (q as any)(!0);
  }, (e as any)[61] = Pe, (e as any)[62] = g, (e as any)[63] = se, (e as any)[64] = te, (e as any)[65] = Ie) : Ie = (e as any)[65];
  const is: any = Ie;
  let Oe: any;
  ((e as any)[66] as any) !== (u as any) ? (Oe = {
    onCancel: u
  }, (e as any)[66] = u, (e as any)[67] = Oe) : Oe = (e as any)[67];
  const ne: any = Oe;
  let Z: any;
  if (((v as any).kind as any) === ("edit" as any)) {
    let m: any;
    ((e as any)[68] as any) !== (O as any) || ((e as any)[69] as any) !== (se as any) ? (m = ((s as any).jsx as any)(ds, {
      disabled: O,
      onClick: se
    }), (e as any)[68] = O, (e as any)[69] = se, (e as any)[70] = m) : m = (e as any)[70];
    let h: any;
    ((e as any)[71] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = ((s as any).jsx as any)((W as any).ActionSpacer, {}), (e as any)[71] = h) : h = (e as any)[71];
    const I: any = !Pe;
    let Q: any;
    ((e as any)[72] as any) !== (is as any) ? (Q = (): any => {
      (is as any)();
    }, (e as any)[72] = is, (e as any)[73] = Q) : Q = (e as any)[73];
    let _e: any;
    ((e as any)[74] as any) !== (O as any) ? (_e = O ? ((s as any).jsx as any)(D, {
      id: "K/F6pa"
    }) : ((s as any).jsx as any)(D, {
      id: "tfDRzk"
    }), (e as any)[74] = O, (e as any)[75] = _e) : _e = (e as any)[75];
    let we: any;
    ((e as any)[76] as any) !== (I as any) || ((e as any)[77] as any) !== (Q as any) || ((e as any)[78] as any) !== (_e as any) ? (we = ((s as any).jsx as any)((W as any).Action, {
      disabled: I,
      onClick: Q,
      variant: "primary",
      children: _e
    }), (e as any)[76] = I, (e as any)[77] = Q, (e as any)[78] = _e, (e as any)[79] = we) : we = (e as any)[79];
    let Ke: any;
    ((e as any)[80] as any) !== (m as any) || ((e as any)[81] as any) !== (we as any) ? (Ke = ((s as any).jsxs as any)(Ue, {
      children: [m, h, we]
    }), (e as any)[80] = m, (e as any)[81] = we, (e as any)[82] = Ke) : Ke = (e as any)[82], Z = Ke;
  } else if (M && ((v as any).kind as any) !== ("root" as any)) Z = null;else if (((v as any).kind as any) === ("integrations" as any) && ((a as any).onAddMore as any) != (null as any)) {
    let m: any;
    ((e as any)[83] as any) !== ((t as any).plugins as any) ? (m = ((((t as any).plugins ?? []) as any).length as any) === (0 as any) ? ((s as any).jsx as any)(D, {
      id: "vc8og5"
    }) : ((s as any).jsx as any)(D, {
      id: "vr9OIt"
    }), (e as any)[83] = (t as any).plugins, (e as any)[84] = m) : m = (e as any)[84];
    let h: any;
    ((e as any)[85] as any) !== (ne as any) || ((e as any)[86] as any) !== ((a as any).onAddMore as any) || ((e as any)[87] as any) !== (m as any) ? (h = ((s as any).jsx as any)(os, {
      ...ne,
      label: m,
      onAddMore: (a as any).onAddMore
    }), (e as any)[85] = ne, (e as any)[86] = (a as any).onAddMore, (e as any)[87] = m, (e as any)[88] = h) : h = (e as any)[88], Z = h;
  } else if (((v as any).kind as any) === ("secrets" as any) && ((d as any).onAddMore as any) != (null as any)) {
    let m: any;
    ((e as any)[89] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = ((s as any).jsx as any)(D, {
      id: "oBU93f"
    }), (e as any)[89] = m) : m = (e as any)[89];
    let h: any;
    ((e as any)[90] as any) !== (ne as any) || ((e as any)[91] as any) !== ((d as any).onAddMore as any) ? (h = ((s as any).jsx as any)(os, {
      ...ne,
      label: m,
      onAddMore: (d as any).onAddMore,
      variant: "primary"
    }), (e as any)[90] = ne, (e as any)[91] = (d as any).onAddMore, (e as any)[92] = h) : h = (e as any)[92], Z = h;
  } else if (((v as any).kind as any) === ("skills" as any) && ((c as any).onAddMore as any) != (null as any)) {
    let m: any;
    ((e as any)[93] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = ((s as any).jsx as any)(D, {
      id: "uDGDEn"
    }), (e as any)[93] = m) : m = (e as any)[93];
    let h: any;
    ((e as any)[94] as any) !== (ne as any) || ((e as any)[95] as any) !== ((c as any).onAddMore as any) ? (h = ((s as any).jsx as any)(os, {
      ...ne,
      label: m,
      onAddMore: (c as any).onAddMore
    }), (e as any)[94] = ne, (e as any)[95] = (c as any).onAddMore, (e as any)[96] = h) : h = (e as any)[96], Z = h;
  } else if (((v as any).kind as any) === ("files" as any)) {
    let m: any;
    ((e as any)[97] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = ((s as any).jsx as any)((W as any).ActionSpacer, {}), (e as any)[97] = m) : m = (e as any)[97];
    let h: any;
    ((e as any)[98] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = ((s as any).jsx as any)(D, {
      id: "DPfwMq"
    }), (e as any)[98] = h) : h = (e as any)[98];
    let I: any;
    ((e as any)[99] as any) !== (u as any) ? (I = ((s as any).jsxs as any)(Ue, {
      children: [m, ((s as any).jsx as any)((W as any).Action, {
        onClick: u,
        variant: "primary",
        children: h
      })]
    }), (e as any)[99] = u, (e as any)[100] = I) : I = (e as any)[100], Z = I;
  } else if (J) {
    let m: any;
    ((e as any)[101] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = ((s as any).jsx as any)(D, {
      id: "DPfwMq"
    }), (e as any)[101] = m) : m = (e as any)[101];
    let h: any;
    ((e as any)[102] as any) !== (u as any) ? (h = ((s as any).jsx as any)(ds, {
      label: m,
      onClick: u
    }), (e as any)[102] = u, (e as any)[103] = h) : h = (e as any)[103];
    let I: any;
    ((e as any)[104] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (I = ((s as any).jsx as any)((W as any).ActionSpacer, {}), (e as any)[104] = I) : I = (e as any)[104];
    let Q: any;
    ((e as any)[105] as any) !== (h as any) ? (Q = ((s as any).jsxs as any)(Ue, {
      children: [h, I]
    }), (e as any)[105] = h, (e as any)[106] = Q) : Q = (e as any)[106], Z = Q;
  } else {
    let m: any;
    ((e as any)[107] as any) !== (u as any) ? (m = ((s as any).jsx as any)(ds, {
      onClick: u
    }), (e as any)[107] = u, (e as any)[108] = m) : m = (e as any)[108];
    let h: any;
    ((e as any)[109] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = ((s as any).jsx as any)((W as any).ActionSpacer, {}), (e as any)[109] = h) : h = (e as any)[109];
    let I: any;
    ((e as any)[110] as any) !== (w as any) || ((e as any)[111] as any) !== (m as any) ? (I = ((s as any).jsxs as any)(Ue, {
      children: [m, h, w]
    }), (e as any)[110] = w, (e as any)[111] = m, (e as any)[112] = I) : I = (e as any)[112], Z = I;
  }
  let qe: any;
  ((e as any)[113] as any) !== (g as any) || ((e as any)[114] as any) !== (J as any) || ((e as any)[115] as any) !== (ss as any) ? (qe = (g as any) != (null as any) && !J ? ((s as any).jsx as any)("div", {
    className: "sand-10l6tqk sand-1tk7jg1 sand-1ysvxap sand-zkaem6",
    children: ((s as any).jsx as any)("button", {
      "data-details-pane": "edit",
      onClick: ss,
      type: "button",
      ...(ie as any)((Y as any).body1, (Ae as any).editAction),
      children: ((s as any).jsx as any)(D, {
        id: "ePK91l"
      })
    })
  }) : null, (e as any)[113] = g, (e as any)[114] = J, (e as any)[115] = ss, (e as any)[116] = qe) : qe = (e as any)[116];
  const as: any = qe;
  let Fe: any;
  ((e as any)[117] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Fe = {
    className: "sand-1n2onr6 sand-78zum5 sand-dt5ytf sand-euugli sand-2lwn1j sand-1iyjqo2 sand-6ikm8r"
  }, (e as any)[117] = Fe) : Fe = (e as any)[117];
  let pe: any;
  ((e as any)[118] as any) !== (J as any) ? (pe = ({
    0: {
      className: "sand-10l6tqk sand-13vifvy sand-1o0tod sand-tijo5x sand-htitgo sand-78zum5 sand-6s0dn4 sand-9f619 sand-euugli sand-dd8jsf sand-ou54vl sand-z9dl7a sand-2vl965 sand-sag5q8 sand-92arao sand-10e981r sand-1hkp6id sand-1q0q8m5 sand-19145p9 sand-105ttfm sand-11xpdln sand-4wkmsb sand-q8ykup sand-12w9bfk sand-1554a8d"
    },
    1: {
      className: "sand-10l6tqk sand-13vifvy sand-1o0tod sand-tijo5x sand-htitgo sand-78zum5 sand-6s0dn4 sand-9f619 sand-euugli sand-dd8jsf sand-ou54vl sand-z9dl7a sand-2vl965 sand-sag5q8 sand-92arao sand-10e981r sand-1hkp6id sand-1q0q8m5 sand-19145p9 sand-11xpdln sand-4wkmsb sand-q8ykup sand-12w9bfk sand-1554a8d sand-nn1q72"
    }
  } as any)[(!!J as any) << (0 as any)], (e as any)[118] = J, (e as any)[119] = pe) : pe = (e as any)[119];
  let ke: any;
  ((e as any)[120] as any) !== (p as any) || ((e as any)[121] as any) !== (es as any) || ((e as any)[122] as any) !== (J as any) || ((e as any)[123] as any) !== ((v as any).kind as any) || ((e as any)[124] as any) !== (se as any) || ((e as any)[125] as any) !== ((B as any).length as any) ? (ke = J ? ((s as any).jsxs as any)((s as any).Fragment, {
    children: [((B as any).length as any) > (1 as any) && ((v as any).kind as any) !== ("files" as any) ? ((s as any).jsx as any)(Us, {
      "aria-label": (p as any)({
        id: "iH8pgl"
      }),
      icon: "chevron-left",
      onClick: se,
      ref: E
    }) : ((s as any).jsx as any)("div", {
      className: "sand-gd8bvy sand-1fgtraw sand-2lah0s"
    }), ((s as any).jsx as any)("div", {
      ref: z,
      tabIndex: -1,
      className: "sand-1iyjqo2 sand-euugli sand-b3r6kr",
      children: ((s as any).jsx as any)((W as any).Title, {
        style: [(Y as any).body1, (Xe as any).medium, (Ae as any).subviewTitleLabel],
        children: es
      })
    }), ((s as any).jsx as any)("div", {
      className: "sand-gd8bvy sand-1fgtraw sand-2lah0s"
    })]
  }) : null, (e as any)[120] = p, (e as any)[121] = es, (e as any)[122] = J, (e as any)[123] = (v as any).kind, (e as any)[124] = se, (e as any)[125] = (B as any).length, (e as any)[126] = ke) : ke = (e as any)[126];
  let he: any;
  ((e as any)[127] as any) !== (pe as any) || ((e as any)[128] as any) !== (ke as any) ? (he = ((s as any).jsx as any)("div", {
    ...pe,
    children: ke
  }), (e as any)[127] = pe, (e as any)[128] = ke, (e as any)[129] = he) : he = (e as any)[129];
  let Re: any;
  ((e as any)[130] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Re = ((s as any).jsx as any)("div", {
    className: "sand-10l6tqk sand-13vifvy sand-tijo5x sand-zkaem6",
    children: ((s as any).jsx as any)((W as any).CloseButton, {})
  }), (e as any)[130] = Re) : Re = (e as any)[130];
  let We: any;
  ((e as any)[131] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (We = {
    className: "sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-dt5ytf sand-2lah0s sand-9f619 sand-euugli sand-1miatn0 sand-1bk0ktj sand-18d9i69 sand-92arao"
  }, (e as any)[131] = We) : We = (e as any)[131];
  let ge: any;
  ((e as any)[132] as any) !== (n as any) || ((e as any)[133] as any) !== (J as any) ? (ge = ((s as any).jsx as any)(ws, {
    agent: n,
    compact: J
  }), (e as any)[132] = n, (e as any)[133] = J, (e as any)[134] = ge) : ge = (e as any)[134];
  let je: any;
  ((e as any)[135] as any) !== (as as any) || ((e as any)[136] as any) !== (ge as any) ? (je = ((s as any).jsxs as any)("div", {
    ...We,
    children: [as, ge]
  }), (e as any)[135] = as, (e as any)[136] = ge, (e as any)[137] = je) : je = (e as any)[137];
  let xe: any;
  ((e as any)[138] as any) !== (Ye as any) || ((e as any)[139] as any) !== (f as any) || ((e as any)[140] as any) !== (P as any) || ((e as any)[141] as any) !== (U as any) || ((e as any)[142] as any) !== (Te as any) || ((e as any)[143] as any) !== (j as any) || ((e as any)[144] as any) !== (o as any) || ((e as any)[145] as any) !== (M as any) || ((e as any)[146] as any) !== (a as any) || ((e as any)[147] as any) !== (me as any) || ((e as any)[148] as any) !== (N as any) || ((e as any)[149] as any) !== (i as any) || ((e as any)[150] as any) !== (d as any) || ((e as any)[151] as any) !== (S as any) || ((e as any)[152] as any) !== (c as any) || ((e as any)[153] as any) !== (l as any) || ((e as any)[154] as any) !== (k as any) || ((e as any)[155] as any) !== (t as any) ? (xe = (m: any): any => ((s as any).jsx as any)(As, {
    description: Ye,
    detailsStatus: f,
    editDraft: P,
    editFailure: U,
    editProblems: Te,
    fileSkills: j,
    filesActions: o,
    isLoading: M,
    onEditDraftChange: G,
    onPush: me,
    pane: m,
    plugins: a,
    resolve: N,
    secrets: i,
    secretsActions: d,
    skills: S,
    skillsActions: c,
    slack: l,
    template: t,
    unpublish: k
  }), (e as any)[138] = Ye, (e as any)[139] = f, (e as any)[140] = P, (e as any)[141] = U, (e as any)[142] = Te, (e as any)[143] = j, (e as any)[144] = o, (e as any)[145] = M, (e as any)[146] = a, (e as any)[147] = me, (e as any)[148] = N, (e as any)[149] = i, (e as any)[150] = d, (e as any)[151] = S, (e as any)[152] = c, (e as any)[153] = l, (e as any)[154] = k, (e as any)[155] = t, (e as any)[156] = xe) : xe = (e as any)[156];
  let be: any;
  ((e as any)[157] as any) !== (L as any) || ((e as any)[158] as any) !== (xe as any) ? (be = ((s as any).jsx as any)(at, {
    navigation: L,
    renderPane: xe
  }), (e as any)[157] = L, (e as any)[158] = xe, (e as any)[159] = be) : be = (e as any)[159];
  let ye: any;
  ((e as any)[160] as any) !== (je as any) || ((e as any)[161] as any) !== (be as any) ? (ye = ((s as any).jsxs as any)(Vs, {
    ref: b,
    rootStyle: (Ae as any).mainViewScroll,
    scrollbarVisibility: "hover",
    children: [je, be]
  }), (e as any)[160] = je, (e as any)[161] = be, (e as any)[162] = ye) : ye = (e as any)[162];
  let ve: any;
  ((e as any)[163] as any) !== (he as any) || ((e as any)[164] as any) !== (ye as any) ? (ve = ((s as any).jsx as any)((W as any).Body, {
    style: (Ae as any).body,
    children: ((s as any).jsxs as any)("div", {
      ref: T,
      tabIndex: -1,
      ...Fe,
      children: [he, Re, ye]
    })
  }), (e as any)[163] = he, (e as any)[164] = ye, (e as any)[165] = ve) : ve = (e as any)[165];
  let Ge: any;
  ((e as any)[166] as any) !== (Z as any) || ((e as any)[167] as any) !== (ve as any) ? (Ge = ((s as any).jsxs as any)((s as any).Fragment, {
    children: [ve, Z]
  }), (e as any)[166] = Z, (e as any)[167] = ve, (e as any)[168] = Ge) : Ge = (e as any)[168];
  const ls: any = Ge;
  let Se: any;
  ((e as any)[169] as any) !== (ns as any) ? (Se = (): any => {
    (ns as any)();
  }, (e as any)[169] = ns, (e as any)[170] = Se) : Se = (e as any)[170];
  let Ve: any;
  return ((e as any)[171] as any) !== (ls as any) || ((e as any)[172] as any) !== (Se as any) ? (Ve = ((s as any).jsx as any)(hs, {
    initialFocus: A,
    onClose: Se,
    ref: A,
    children: ls
  }), (e as any)[171] = ls, (e as any)[172] = Se, (e as any)[173] = Ve) : Ve = (e as any)[173], Ve;
}
function Et(this: any, r: any): any {
  return ((r as any).slice as any)(0, -1);
}
const He: any = {
  header: {
    kGNEyG: "sand-6s0dn4",
    kLKAdn: "sand-1miatn0",
    kGO01o: "sand-1l90r2v",
    kt9PQ7: "sand-1qhh985",
    $$css: !0
  },
  headline: {
    kogj98: "sand-1ghz6dp",
    kMwMTN: "sand-tyxrsu",
    $$css: !0
  },
  description: {
    kogj98: "sand-1ghz6dp",
    kMwMTN: "sand-1o0liin",
    $$css: !0
  },
  stepText: {
    kMwMTN: "sand-tyxrsu",
    $$css: !0
  }
};
function Je(this: any, r: any): any {
  (Je as any).d = 1054;
  const e: any = ((H as any).c as any)(10),
    {
      icon: n,
      children: t
    }: any = r;
  let i: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = {
    className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-1vvogim sand-aope02 sand-hojbe8 sand-8c2ked"
  }, (e as any)[0] = i) : i = (e as any)[0];
  let l: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = {
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-gd8bvy sand-1fgtraw sand-149ho13 sand-10e981r sand-1o0liin"
  }, (e as any)[1] = l) : l = (e as any)[1];
  let a: any;
  ((e as any)[2] as any) !== (n as any) ? (a = ((s as any).jsx as any)("span", {
    "aria-hidden": !0,
    ...l,
    children: ((s as any).jsx as any)(Js, {
      name: n,
      size: "sm"
    })
  }), (e as any)[2] = n, (e as any)[3] = a) : a = (e as any)[3];
  let d: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = (ie as any)((Y as any).body2, (He as any).stepText), (e as any)[4] = d) : d = (e as any)[4];
  let c: any;
  ((e as any)[5] as any) !== (t as any) ? (c = ((s as any).jsx as any)("span", {
    ...d,
    children: t
  }), (e as any)[5] = t, (e as any)[6] = c) : c = (e as any)[6];
  let o: any;
  return ((e as any)[7] as any) !== (a as any) || ((e as any)[8] as any) !== (c as any) ? (o = ((s as any).jsxs as any)("li", {
    ...i,
    children: [a, c]
  }), (e as any)[7] = a, (e as any)[8] = c, (e as any)[9] = o) : o = (e as any)[9], o;
}
function Ns(this: any, r: any): any {
  (Ns as any).d = 1055;
  const e: any = ((H as any).c as any)(26),
    {
      agentName: n,
      onClose: t
    }: any = r;
  let i: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = ((s as any).jsxs as any)((W as any).Header, {
    style: (He as any).header,
    children: [((s as any).jsx as any)((W as any).Title, {
      size: "3xl",
      weight: "medium",
      children: ((s as any).jsx as any)(D, {
        id: "cOlI3u"
      })
    }), ((s as any).jsx as any)((W as any).CloseButton, {})]
  }), (e as any)[0] = i) : i = (e as any)[0];
  let l: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-1c1vhfx sand-1y1aw1k sand-wib8y2"
  }, (e as any)[1] = l) : l = (e as any)[1];
  let a: any, d: any, c: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((s as any).jsx as any)("span", {
    "aria-hidden": !0,
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-29ncy0 sand-14nwjz3 sand-1khhgft sand-10e981r sand-755cs3",
    children: ((s as any).jsx as any)(Is, {
      name: "slack",
      sizePx: 44
    })
  }), d = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-167g77z sand-2b8uid"
  }, c = (ie as any)((Y as any).heading3, (Xe as any).medium, (He as any).headline), (e as any)[2] = a, (e as any)[3] = d, (e as any)[4] = c) : (a = (e as any)[2], d = (e as any)[3], c = (e as any)[4]);
  let o: any;
  ((e as any)[5] as any) !== (n as any) ? (o = ((s as any).jsx as any)("h3", {
    ...c,
    children: ((s as any).jsx as any)(D, {
      id: "C71RRG",
      values: {
        agentName: n
      }
    })
  }), (e as any)[5] = n, (e as any)[6] = o) : o = (e as any)[6];
  let j: any;
  ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = (ie as any)((Y as any).body2, (He as any).description), (e as any)[7] = j) : j = (e as any)[7];
  let S: any;
  ((e as any)[8] as any) !== (n as any) ? (S = ((s as any).jsx as any)("p", {
    ...j,
    children: ((s as any).jsx as any)(D, {
      id: "oAC5eF",
      values: {
        agentName: n
      }
    })
  }), (e as any)[8] = n, (e as any)[9] = S) : S = (e as any)[9];
  let f: any;
  ((e as any)[10] as any) !== (o as any) || ((e as any)[11] as any) !== (S as any) ? (f = ((s as any).jsxs as any)("div", {
    ...d,
    children: [o, S]
  }), (e as any)[10] = o, (e as any)[11] = S, (e as any)[12] = f) : f = (e as any)[12];
  let k: any;
  ((e as any)[13] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (k = {
    className: "sand-78zum5 sand-dt5ytf sand-1jnr06f sand-h8yej3 sand-1ghz6dp sand-1717udv sand-3ct3a4"
  }, (e as any)[13] = k) : k = (e as any)[13];
  let g: any;
  ((e as any)[14] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = ((s as any).jsx as any)(Je, {
    icon: "link",
    children: ((s as any).jsx as any)(D, {
      id: "2s0Kxl"
    })
  }), (e as any)[14] = g) : g = (e as any)[14];
  let x: any;
  ((e as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = ((s as any).jsx as any)(Je, {
    icon: "robot",
    children: ((s as any).jsx as any)(D, {
      id: "s9kpQR"
    })
  }), (e as any)[15] = x) : x = (e as any)[15];
  let M: any;
  ((e as any)[16] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (M = ((s as any).jsxs as any)("ul", {
    ...k,
    children: [g, x, ((s as any).jsx as any)(Je, {
      icon: "people",
      children: ((s as any).jsx as any)(D, {
        id: "5E/52t"
      })
    })]
  }), (e as any)[16] = M) : M = (e as any)[16];
  let u: any;
  ((e as any)[17] as any) !== (f as any) ? (u = ((s as any).jsx as any)((W as any).Body, {
    children: ((s as any).jsxs as any)("div", {
      ...l,
      children: [a, f, M]
    })
  }), (e as any)[17] = f, (e as any)[18] = u) : u = (e as any)[18];
  let w: any;
  ((e as any)[19] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = ((s as any).jsx as any)((W as any).ActionSpacer, {}), (e as any)[19] = w) : w = (e as any)[19];
  let p: any;
  ((e as any)[20] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = ((s as any).jsx as any)(D, {
    id: "yz7wBu"
  }), (e as any)[20] = p) : p = (e as any)[20];
  let A: any;
  ((e as any)[21] as any) !== (t as any) ? (A = ((s as any).jsxs as any)((W as any).ActionBar, {
    children: [w, ((s as any).jsx as any)((W as any).Action, {
      onClick: t,
      variant: "primary",
      children: p
    })]
  }), (e as any)[21] = t, (e as any)[22] = A) : A = (e as any)[22];
  let T: any;
  return ((e as any)[23] as any) !== (u as any) || ((e as any)[24] as any) !== (A as any) ? (T = ((s as any).jsxs as any)((s as any).Fragment, {
    children: [i, u, A]
  }), (e as any)[23] = u, (e as any)[24] = A, (e as any)[25] = T) : T = (e as any)[25], T;
}
function Ms(this: any, r: any): any {
  (Ms as any).d = 1053;
  const e: any = ((H as any).c as any)(7),
    {
      agent: n,
      onClose: t
    }: any = r,
    i: any = (jt as any)(n, t);
  let l: any;
  ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (i as any) || ((e as any)[2] as any) !== (t as any) ? (l = (i as any) == (null as any) ? ((s as any).jsx as any)(Ns, {
    agentName: (ks as any)(n),
    onClose: t
  }) : ((s as any).jsx as any)(xt, {
    agentName: (i as any).agentName,
    commands: (i as any).commands,
    creatorName: (i as any).creatorName,
    session: (i as any).session
  }), (e as any)[0] = n, (e as any)[1] = i, (e as any)[2] = t, (e as any)[3] = l) : l = (e as any)[3];
  let a: any;
  return ((e as any)[4] as any) !== (t as any) || ((e as any)[5] as any) !== (l as any) ? (a = ((s as any).jsx as any)(hs, {
    height: "hug",
    onClose: t,
    children: l
  }), (e as any)[4] = t, (e as any)[5] = l, (e as any)[6] = a) : a = (e as any)[6], a;
}
async function $t(this: any, r: any, e: any, n: any, t: any): Promise<any> {
  try {
    await (r as any)(e, n);
  } catch (i: any) {
    throw (ps as any)(i) && (t as any)(), i;
  }
}
function zs(this: any, r: any): any {
  (zs as any).d = 986;
  const e: any = ((H as any).c as any)(40),
    {
      agent: n,
      template: t,
      secrets: i,
      action: l,
      isOpen: a,
      initialPane: d,
      onClose: c
    }: any = r,
    {
      _: o
    }: any = (Ze as any)(),
    j: any = (Os as any)(),
    S: any = (qs as any)(),
    f: any = (Fs as any)(),
    k: any = (Xs as any)(),
    {
      pluginsAccess: g,
      contextAccess: x
    }: any = (yt as any)((n as any).id);
  let M: any;
  ((e as any)[0] as any) !== (o as any) || ((e as any)[1] as any) !== (k as any) ? (M = {
    onFailure: (): any => (k as any)({
      kind: "error",
      text: (o as any)({
        id: "D2AZQg"
      })
    })
  }, (e as any)[0] = o, (e as any)[1] = k, (e as any)[2] = M) : M = (e as any)[2];
  const {
      status: u,
      unpublish: w
    }: any = (Zs as any)((n as any).id, M),
    p: any = (Rs as any)(((g as any).listing as any).plugins),
    [A, T]: any = ((K as any).useState as any)(!1),
    [E, z]: any = ((K as any).useState as any)(null),
    [b, y]: any = ((K as any).useState as any)(null),
    [$, N]: any = ((K as any).useState as any)(!1);
  !a && (E as any) != (null as any) && (z as any)(null), !a && (b as any) != (null as any) && (y as any)(null), !a && $ && (N as any)(!1);
  const C: any = ((n as any).viewerIsOwner as any) !== (!1 as any);
  let B: any;
  ((e as any)[3] as any) !== (n as any) ? (B = (Ws as any)(n), (e as any)[3] = n, (e as any)[4] = B) : B = (e as any)[4];
  const _: any = B,
    V: any = (Gs as any)(n);
  let P: any;
  ((e as any)[5] as any) !== (n as any) ? (P = (ks as any)(n), (e as any)[5] = n, (e as any)[6] = P) : P = (e as any)[6];
  const G: any = P;
  let O: any;
  ((e as any)[7] as any) !== (_ as any) || ((e as any)[8] as any) !== ((x as any).isPending as any) || ((e as any)[9] as any) !== ((x as any).removeBotSkill as any) || ((e as any)[10] as any) !== ((x as any).writeFailed as any) || ((e as any)[11] as any) !== (y as any) ? (O = (L: any): any => ({
    isPending: (x as any).isPending,
    writeFailed: (x as any).writeFailed,
    ...(_ ? {
      onAddMore: (): any => (y as any)({
        surface: L
      }),
      onOpen: (ae: any): any => (y as any)({
        surface: L,
        initialPane: {
          kind: "skill",
          name: ae
        }
      }),
      onRemove: (x as any).removeBotSkill
    } : {})
  }), (e as any)[7] = _, (e as any)[8] = (x as any).isPending, (e as any)[9] = (x as any).removeBotSkill, (e as any)[10] = (x as any).writeFailed, (e as any)[11] = y, (e as any)[12] = O) : O = (e as any)[12];
  const X: any = O,
    U: any = a ? ((s as any).jsx as any)(Ts, {
      ...((l as any) == (null as any) ? {} : {
        action: l
      }),
      ...((d as any) == (null as any) ? {} : {
        initialPane: d
      }),
      agent: n,
      fileSkills: (p as any).fileSkills,
      filesActions: {
        ...(X as any)("files"),
        ...(_ ? {
          dropZone: ((s as any).jsx as any)(st, {
            access: x,
            disabled: (x as any).isPending
          })
        } : {})
      },
      ...(_ ? {
        edit: {
          onSave: (L: any): any => ($t as any)(((j as any).roster as any).updateAgent, (n as any).id, L, (): any => {
            (k as any)({
              kind: "error",
              text: (o as any)({
                id: "DPbGGo"
              })
            });
          })
        }
      } : {}),
      isLoading: ((g as any).load as any) === ("loading" as any) || (i?.load as any) === ("loading" as any),
      onClose: c,
      plugins: {
        isPending: (g as any).isPending,
        writeFailed: (g as any).writeFailed,
        ...(_ ? {
          onAddMore: (): any => (z as any)({
            kind: "list"
          }),
          onOpen: (L: any): any => (z as any)({
            kind: "plugin",
            pluginId: L,
            from: "connected"
          }),
          onRemove: (g as any).remove
        } : {})
      },
      secrets: i?.secrets ?? [],
      secretsActions: {
        isPending: (i?.isPending as any) === (!0 as any),
        writeFailed: (i?.removeFailure as any) != (null as any),
        ...(_ && (i as any) != (null as any) ? {
          onAddMore: (): any => (N as any)(!0),
          onOpen: (L: any): any => (z as any)({
            kind: "secret",
            name: L
          }),
          onRemove: (i as any).remove
        } : {})
      },
      skills: (Qs as any)((p as any).librarySkills),
      skillsActions: (X as any)("skills"),
      slack: {
        status: (ht as any)({
          serverStatus: (n as any).slackStatus ?? "none",
          isPublished: V,
          isAutoUpdating: (f as any) === ((n as any).id as any),
          step: (S?.agentId as any) === ((n as any).id as any) ? (S as any).step : null
        }),
        ...(_ && V ? {
          onOpen: (): any => {
            (c as any)(), (T as any)(!0);
          }
        } : {})
      },
      status: V ? "published" : "draft",
      template: t,
      ...(C && V ? {
        unpublish: {
          isPending: (u as any) === ("unpublishing" as any),
          onUnpublish: w
        }
      } : {})
    }, d ?? "root") : null;
  let q: any;
  ((e as any)[13] as any) !== (G as any) || ((e as any)[14] as any) !== (x as any) || ((e as any)[15] as any) !== (b as any) || ((e as any)[16] as any) !== (y as any) ? (q = (b as any) != (null as any) ? ((s as any).jsx as any)(tt, {
    access: x,
    agentName: G,
    onClose: (): any => (y as any)(null),
    ...b
  }) : null, (e as any)[13] = G, (e as any)[14] = x, (e as any)[15] = b, (e as any)[16] = y, (e as any)[17] = q) : q = (e as any)[17];
  let F: any;
  ((e as any)[18] as any) !== ((n as any).serverId as any) || ((e as any)[19] as any) !== (G as any) || ((e as any)[20] as any) !== (g as any) || ((e as any)[21] as any) !== (E as any) || ((e as any)[22] as any) !== (i as any) || ((e as any)[23] as any) !== (z as any) ? (F = (E as any) != (null as any) ? ((s as any).jsx as any)(Ys, {
    access: g,
    agentName: G,
    initialPane: E,
    installedSecrets: i,
    onClose: (): any => (z as any)(null),
    secretsSection: (i as any) != (null as any) && ((n as any).serverId as any) != (null as any) ? ((s as any).jsx as any)(et, {
      agentName: G,
      serverId: (n as any).serverId
    }, (n as any).serverId) : null
  }) : null, (e as any)[18] = (n as any).serverId, (e as any)[19] = G, (e as any)[20] = g, (e as any)[21] = E, (e as any)[22] = i, (e as any)[23] = z, (e as any)[24] = F) : F = (e as any)[24];
  let v: any;
  ((e as any)[25] as any) !== (n as any) || ((e as any)[26] as any) !== (A as any) || ((e as any)[27] as any) !== (T as any) ? (v = A ? ((s as any).jsx as any)(Ms, {
    agent: n,
    onClose: (): any => (T as any)(!1)
  }) : null, (e as any)[25] = n, (e as any)[26] = A, (e as any)[27] = T, (e as any)[28] = v) : v = (e as any)[28];
  let R: any;
  ((e as any)[29] as any) !== (_ as any) || ((e as any)[30] as any) !== ($ as any) || ((e as any)[31] as any) !== (i as any) || ((e as any)[32] as any) !== (N as any) ? (R = (i as any) != (null as any) ? ((s as any).jsx as any)(bt, {
    isDisabled: !_ || (i as any).isPending,
    onAdd: (L: any): any => ((i as any).replace as any)(L),
    onOpenChange: N,
    open: $,
    takenNames: new (Set as any)((((i as any).secrets as any).map as any)(Ct))
  }) : null, (e as any)[29] = _, (e as any)[30] = $, (e as any)[31] = i, (e as any)[32] = N, (e as any)[33] = R) : R = (e as any)[33];
  let ee: any;
  return ((e as any)[34] as any) !== (U as any) || ((e as any)[35] as any) !== (q as any) || ((e as any)[36] as any) !== (F as any) || ((e as any)[37] as any) !== (v as any) || ((e as any)[38] as any) !== (R as any) ? (ee = ((s as any).jsxs as any)((s as any).Fragment, {
    children: [U, q, F, v, R]
  }), (e as any)[34] = U, (e as any)[35] = q, (e as any)[36] = F, (e as any)[37] = v, (e as any)[38] = R, (e as any)[39] = ee) : ee = (e as any)[39], ee;
}
function Ct(this: any, r: any): any {
  return (r as any).name;
}
const Zt: any = ((Object as any).freeze as any)(((Object as any).defineProperty as any)({
  __proto__: null,
  TeamBotDetailsDialog: zs
}, (Symbol as any).toStringTag, {
  value: "Module"
}));
export { zs as T, Ms as a, Zt as t };
//# debugId=058bba05-724c-4f8c-a44a-13ccbf8f6c27
