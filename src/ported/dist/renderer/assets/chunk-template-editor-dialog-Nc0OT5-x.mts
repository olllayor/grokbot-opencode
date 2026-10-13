declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "a3e76d7f-9efb-44dd-be8a-aea8252fefd2", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-a3e76d7f-9efb-44dd-be8a-aea8252fefd2");
  } catch (e: any) {}
} as any)();
import { c as U, j as t, r as R, T as k } from "./index.eager-vendor-Qbf9YA6n.js";
import { b4 as J, b5 as K, b6 as Q } from "./index.eager-app-Cj5f8Gby.js";
import { Q as W, U as Z, x as o } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import { C as ee } from "./chunk-agent-character-picker-DUX3hpCp.js";
import "./index.eager-common-CdCvBQNJ.js";
function te(this: any, i: any): any {
  const e: any = {
    id: "",
    avatarShape: (i as any).avatarShape,
    avatarColor: (i as any).avatarColor
  };
  return {
    name: (i as any).name,
    body: (i as any).body,
    shape: (Z as any)(e),
    color: (W as any)(e),
    ...(((i as any).visibility as any) == (null as any) ? {} : {
      visibility: (i as any).visibility
    })
  };
}
function X(this: any, i: any): any {
  (X as any).d = 277;
  const e: any = ((U as any).c as any)(50),
    {
      initial: n,
      isPending: a,
      showFailure: r,
      onClose: d,
      onSave: c
    }: any = i,
    [s, h]: any = ((R as any).useState as any)((n as any).name),
    [b, Y]: any = ((R as any).useState as any)((n as any).body),
    [f, $]: any = ((R as any).useState as any)((n as any).shape),
    [y, I]: any = ((R as any).useState as any)((n as any).color);
  let m: any, T: any;
  if (((e as any)[0] as any) !== (b as any) || ((e as any)[1] as any) !== (y as any) || ((e as any)[2] as any) !== ((n as any).visibility as any) || ((e as any)[3] as any) !== (a as any) || ((e as any)[4] as any) !== (s as any) || ((e as any)[5] as any) !== (f as any)) {
    const l: any = ((s as any).trim as any)(),
      G: any = ((b as any).trim as any)();
    m = {
      name: l,
      avatarShape: f,
      avatarColor: y,
      body: G,
      ...(((n as any).visibility as any) == (null as any) ? {} : {
        visibility: (n as any).visibility
      })
    }, T = ((l as any).length as any) > (0 as any) && ((G as any).length as any) > (0 as any) && ((l as any).length as any) <= (K as any) && ((G as any).length as any) <= (Q as any) && (J as any)(m) && !a, (e as any)[0] = b, (e as any)[1] = y, (e as any)[2] = (n as any).visibility, (e as any)[3] = a, (e as any)[4] = s, (e as any)[5] = f, (e as any)[6] = m, (e as any)[7] = T;
  } else m = (e as any)[6], T = (e as any)[7];
  const V: any = T;
  let u: any;
  ((e as any)[8] as any) !== (a as any) || ((e as any)[9] as any) !== (d as any) ? (u = (l: any): any => {
    !l && !a && (d as any)();
  }, (e as any)[8] = a, (e as any)[9] = d, (e as any)[10] = u) : u = (e as any)[10];
  let C: any;
  ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (C = ((t as any).jsx as any)((o as any).CloseButton, {}), (e as any)[11] = C) : C = (e as any)[11];
  let N: any;
  ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (N = ((t as any).jsx as any)((o as any).Header, {
    children: ((t as any).jsx as any)((o as any).Title, {
      children: ((t as any).jsx as any)(k, {
        id: "bHboUQ"
      })
    })
  }), (e as any)[12] = N) : N = (e as any)[12];
  let E: any, A: any, B: any, D: any;
  ((e as any)[13] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (E = {
    className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
  }, A = {
    className: "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-1o0liin sand-1wm8ruf"
  }, B = ((t as any).jsx as any)(k, {
    id: "6YtxFj"
  }), D = {
    className: "sand-h8yej3 sand-9f619 sand-1y1aw1k sand-2vl965 sand-wib8y2 sand-e2zdcy sand-1qmwy7c sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1k57tk5 sand-784prv sand-1t137rt sand-9v5kkp sand-4sht9k"
  }, (e as any)[13] = E, (e as any)[14] = A, (e as any)[15] = B, (e as any)[16] = D) : (E = (e as any)[13], A = (e as any)[14], B = (e as any)[15], D = (e as any)[16]);
  let q: any;
  ((e as any)[17] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (q = (l: any): any => (h as any)(((l as any).currentTarget as any).value), (e as any)[17] = q) : q = (e as any)[17];
  let p: any;
  ((e as any)[18] as any) !== (s as any) ? (p = ((t as any).jsxs as any)("label", {
    ...A,
    children: [B, ((t as any).jsx as any)("input", {
      ...D,
      maxLength: K,
      onChange: q,
      value: s
    })]
  }), (e as any)[18] = s, (e as any)[19] = p) : p = (e as any)[19];
  let j: any;
  ((e as any)[20] as any) !== (y as any) || ((e as any)[21] as any) !== (f as any) ? (j = ((t as any).jsx as any)(ee, {
    color: y,
    layout: "row",
    onSelectColor: I,
    onSelectShape: $,
    shape: f
  }), (e as any)[20] = y, (e as any)[21] = f, (e as any)[22] = j) : j = (e as any)[22];
  let F: any, z: any, L: any;
  ((e as any)[23] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (F = {
    className: "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-1o0liin sand-1wm8ruf"
  }, z = ((t as any).jsx as any)(k, {
    id: "/K2CvV"
  }), L = {
    className: "sand-h8yej3 sand-7v6ubd sand-288g5 sand-9f619 sand-1y1aw1k sand-2vl965 sand-wib8y2 sand-e2zdcy sand-1qmwy7c sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-tyxrsu sand-jb2p0i sand-11wthnw sand-37zpob sand-1k57tk5 sand-784prv sand-1t137rt sand-9v5kkp sand-4sht9k"
  }, (e as any)[23] = F, (e as any)[24] = z, (e as any)[25] = L) : (F = (e as any)[23], z = (e as any)[24], L = (e as any)[25]);
  let M: any;
  ((e as any)[26] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (M = (l: any): any => (Y as any)(((l as any).currentTarget as any).value), (e as any)[26] = M) : M = (e as any)[26];
  let x: any;
  ((e as any)[27] as any) !== (b as any) ? (x = ((t as any).jsxs as any)("label", {
    ...F,
    children: [z, ((t as any).jsx as any)("textarea", {
      ...L,
      maxLength: Q,
      onChange: M,
      value: b
    })]
  }), (e as any)[27] = b, (e as any)[28] = x) : x = (e as any)[28];
  let v: any;
  ((e as any)[29] as any) !== (r as any) ? (v = r ? ((t as any).jsx as any)("span", {
    className: "sand-6rl5ky sand-1wm8ruf",
    role: "alert",
    children: ((t as any).jsx as any)(k, {
      id: "uSuoHw"
    })
  }) : null, (e as any)[29] = r, (e as any)[30] = v) : v = (e as any)[30];
  let S: any;
  ((e as any)[31] as any) !== (p as any) || ((e as any)[32] as any) !== (j as any) || ((e as any)[33] as any) !== (x as any) || ((e as any)[34] as any) !== (v as any) ? (S = ((t as any).jsx as any)((o as any).Body, {
    children: ((t as any).jsxs as any)("div", {
      ...E,
      children: [p, j, x, v]
    })
  }), (e as any)[31] = p, (e as any)[32] = j, (e as any)[33] = x, (e as any)[34] = v, (e as any)[35] = S) : S = (e as any)[35];
  let P: any;
  ((e as any)[36] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (P = ((t as any).jsx as any)((o as any).ActionSpacer, {}), (e as any)[36] = P) : P = (e as any)[36];
  const O: any = !V;
  let _: any;
  ((e as any)[37] as any) !== (m as any) || ((e as any)[38] as any) !== (c as any) ? (_ = (): any => (c as any)(m), (e as any)[37] = m, (e as any)[38] = c, (e as any)[39] = _) : _ = (e as any)[39];
  let g: any;
  ((e as any)[40] as any) !== (a as any) ? (g = a ? ((t as any).jsx as any)(k, {
    id: "K/F6pa"
  }) : ((t as any).jsx as any)(k, {
    id: "tfDRzk"
  }), (e as any)[40] = a, (e as any)[41] = g) : g = (e as any)[41];
  let w: any;
  ((e as any)[42] as any) !== (O as any) || ((e as any)[43] as any) !== (_ as any) || ((e as any)[44] as any) !== (g as any) ? (w = ((t as any).jsxs as any)((o as any).ActionBar, {
    children: [P, ((t as any).jsx as any)((o as any).Action, {
      disabled: O,
      onClick: _,
      variant: "primary",
      children: g
    })]
  }), (e as any)[42] = O, (e as any)[43] = _, (e as any)[44] = g, (e as any)[45] = w) : w = (e as any)[45];
  let H: any;
  return ((e as any)[46] as any) !== (S as any) || ((e as any)[47] as any) !== (u as any) || ((e as any)[48] as any) !== (w as any) ? (H = ((t as any).jsxs as any)((o as any).Root, {
    className: "sand-bot-template-editor-dialog",
    onOpenChange: u,
    open: !0,
    variant: "rich",
    width: 480,
    children: [C, N, S, w]
  }), (e as any)[46] = S, (e as any)[47] = u, (e as any)[48] = w, (e as any)[49] = H) : H = (e as any)[49], H;
}
function ae(this: any, i: any): any {
  (ae as any).d = 276;
  const e: any = ((U as any).c as any)(8),
    {
      draft: n,
      isSubmitting: a,
      submitFailed: r,
      onClose: d,
      onSubmit: c
    }: any = i;
  let s: any;
  ((e as any)[0] as any) !== (n as any) ? (s = (te as any)(n), (e as any)[0] = n, (e as any)[1] = s) : s = (e as any)[1];
  let h: any;
  return ((e as any)[2] as any) !== (a as any) || ((e as any)[3] as any) !== (d as any) || ((e as any)[4] as any) !== (c as any) || ((e as any)[5] as any) !== (r as any) || ((e as any)[6] as any) !== (s as any) ? (h = ((t as any).jsx as any)(X, {
    initial: s,
    isPending: a,
    onClose: d,
    onSave: c,
    showFailure: r
  }), (e as any)[2] = a, (e as any)[3] = d, (e as any)[4] = c, (e as any)[5] = r, (e as any)[6] = s, (e as any)[7] = h) : h = (e as any)[7], h;
}
export { ae as BotTemplateDraftDialog };
//# debugId=a3e76d7f-9efb-44dd-be8a-aea8252fefd2
