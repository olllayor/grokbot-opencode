declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "24cef7a6-d4bf-42e1-b021-0f6ed91467ad", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-24cef7a6-d4bf-42e1-b021-0f6ed91467ad");
  } catch (e: any) {}
} as any)();
import { c as R, u as O, r as J, j as t, p as U, T as v } from "./index.eager-vendor-Qbf9YA6n.js";
import { cj as L, a_ as C, b0 as P, bc as B, dp as G, a$ as Y, D as ee, dq as se } from "./index.eager-app-Cj5f8Gby.js";
import { a_ as te } from "./index.eager-platform-Dcfeegfw.js";
import { W as K, a3 as ne, z as E, x as N } from "./index-ZYxf-aBb.js";
import { o as ae, m as le, b as de, a as ie } from "./chunk-team-agent-rows-BhWKSjqA.js";
import "./index.eager-common-CdCvBQNJ.js";
const b: any = {
  surface: {
    kZKoxP: "sand-16hay7m",
    $$css: !0
  },
  header: {
    k8WAf4: "sand-10dr8xq",
    kwRFfy: "sand-2vl965",
    kL6WhQ: "sand-19145p9",
    $$css: !0
  },
  secondary: {
    kMwMTN: "sand-1o0liin",
    $$css: !0
  },
  body: {
    k1xSpc: "sand-78zum5",
    kXwgrk: "sand-dt5ytf",
    kzQI83: "sand-1iyjqo2",
    kAzted: "sand-2lwn1j",
    k8WAf4: "sand-t970qd",
    $$css: !0
  },
  searchInput: {
    kzQI83: "sand-1iyjqo2",
    k7Eaqz: "sand-euugli",
    kogj98: "sand-1ghz6dp",
    kmVPX3: "sand-1717udv",
    ksu8eU: "sand-ng3xce",
    kI3sdo: "sand-1a2a7pz",
    kWkggS: "sand-jbqb8w",
    kMv6JI: "sand-jb2p0i",
    kMwMTN: "sand-tyxrsu",
    k8Qsv1: "sand-1h7ufjq",
    $$css: !0
  },
  listContent: {
    k8WAf4: "sand-10dr8xq",
    khm7nJ: "sand-1dbijih",
    $$css: !0
  },
  list: {
    kzQI83: "sand-1iyjqo2",
    kAzted: "sand-2lwn1j",
    $$css: !0
  },
  truncate: {
    k7Eaqz: "sand-euugli",
    kVQacm: "sand-b3r6kr",
    kg5iWk: "sand-lyipyv",
    khDVqt: "sand-uxw1ft",
    $$css: !0
  },
  rowName: {
    kMwMTN: "sand-tyxrsu",
    $$css: !0
  },
  rowDetail: {
    kMwMTN: "sand-169k319",
    $$css: !0
  }
};
function X(this: any, u: any): any {
  (X as any).d = 1348;
  const e: any = ((R as any).c as any)(18),
    {
      agent: s
    }: any = u,
    {
      _: y
    }: any = (O as any)(),
    h: any = (L as any)();
  let i: any, c: any, l: any;
  if (((e as any)[0] as any) !== (y as any) || ((e as any)[1] as any) !== (s as any) || ((e as any)[2] as any) !== (h as any)) {
    l = ((Symbol as any).for as any)("react.early_return_sentinel");
    e: {
      const d: any = (de as any)(s);
      let x: any;
      if (((e as any)[6] as any) !== (s as any) || ((e as any)[7] as any) !== (h as any) ? (x = (((s as any).description as any).trim as any)() || (ie as any)(s, h), (e as any)[6] = s, (e as any)[7] = h, (e as any)[8] = x) : x = (e as any)[8], c = x, ((c as any).length as any) === (0 as any) && (d as any) == (null as any)) {
        l = null;
        break e;
      }
      if (i = null, (d as any) === ("you" as any)) {
        let f: any;
        ((e as any)[9] as any) !== (y as any) ? (f = (y as any)({
          id: "ZZvRDK"
        }), (e as any)[9] = y, (e as any)[10] = f) : f = (e as any)[10], i = f;
      } else (d as any) != (null as any) && (i = (y as any)({
        id: "MTvQPd",
        values: {
          0: ((d as any).trim as any)()
        }
      }));
    }
    (e as any)[0] = y, (e as any)[1] = s, (e as any)[2] = h, (e as any)[3] = i, (e as any)[4] = c, (e as any)[5] = l;
  } else i = (e as any)[3], c = (e as any)[4], l = (e as any)[5];
  if ((l as any) !== (((Symbol as any).for as any)("react.early_return_sentinel") as any)) return l;
  let m: any;
  ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = [(b as any).truncate, (b as any).rowDetail], (e as any)[11] = m) : m = (e as any)[11];
  const o: any = c || void 0;
  let a: any;
  ((e as any)[12] as any) !== (i as any) || ((e as any)[13] as any) !== (c as any) ? (a = (([c, i] as any).filter as any)(oe), (e as any)[12] = i, (e as any)[13] = c, (e as any)[14] = a) : a = (e as any)[14];
  const n: any = ((a as any).join as any)(" · ");
  let r: any;
  return ((e as any)[15] as any) !== (o as any) || ((e as any)[16] as any) !== (n as any) ? (r = ((t as any).jsx as any)(P, {
    as: "span",
    level: "caption",
    style: m,
    title: o,
    children: n
  }), (e as any)[15] = o, (e as any)[16] = n, (e as any)[17] = r) : r = (e as any)[17], r;
}
function oe(this: any, u: any): any {
  return (u as any) != (null as any) && (u as any) !== ("" as any);
}
function Z(this: any, u: any): any {
  (Z as any).d = 1346;
  const e: any = ((R as any).c as any)(33),
    {
      agent: s,
      isAdded: y,
      onPreviewAgent: h,
      onAdd: i,
      onRemove: c
    }: any = u,
    l: any = `sand-team-agent-row-${(s as any).id}`;
  let m: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = {
    className: "sand-78zum5 sand-6s0dn4 sand-fex06f sand-1qmwy7c sand-jbqb8w sand-aalx5g"
  }, (e as any)[0] = m) : m = (e as any)[0];
  let o: any;
  ((e as any)[1] as any) !== ((s as any).id as any) || ((e as any)[2] as any) !== (h as any) ? (o = (): any => (h as any)((s as any).id), (e as any)[1] = (s as any).id, (e as any)[2] = h, (e as any)[3] = o) : o = (e as any)[3];
  let a: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = {
    className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-fex06f sand-1iyjqo2 sand-euugli sand-1t0vds8 sand-mzvs34 sand-1ghz6dp sand-ng3xce sand-1qmwy7c sand-jbqb8w sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk"
  }, (e as any)[4] = a) : a = (e as any)[4];
  let n: any;
  ((e as any)[5] as any) !== (s as any) ? (n = ((t as any).jsx as any)(ne, {
    agent: s,
    fillPx: 24,
    size: "sm"
  }), (e as any)[5] = s, (e as any)[6] = n) : n = (e as any)[6];
  let r: any;
  ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = {
    className: "sand-78zum5 sand-dt5ytf sand-euugli sand-1iyjqo2"
  }, (e as any)[7] = r) : r = (e as any)[7];
  let d: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = [(b as any).truncate, (b as any).rowName], (e as any)[8] = d) : d = (e as any)[8];
  let x: any;
  ((e as any)[9] as any) !== (s as any) ? (x = (B as any)(s), (e as any)[9] = s, (e as any)[10] = x) : x = (e as any)[10];
  let f: any;
  ((e as any)[11] as any) !== (l as any) || ((e as any)[12] as any) !== (x as any) ? (f = ((t as any).jsx as any)(P, {
    as: "span",
    id: l,
    level: "body2",
    style: d,
    children: x
  }), (e as any)[11] = l, (e as any)[12] = x, (e as any)[13] = f) : f = (e as any)[13];
  let g: any;
  ((e as any)[14] as any) !== (s as any) ? (g = ((t as any).jsx as any)(X, {
    agent: s
  }), (e as any)[14] = s, (e as any)[15] = g) : g = (e as any)[15];
  let j: any;
  ((e as any)[16] as any) !== (f as any) || ((e as any)[17] as any) !== (g as any) ? (j = ((t as any).jsxs as any)("span", {
    ...r,
    children: [f, g]
  }), (e as any)[16] = f, (e as any)[17] = g, (e as any)[18] = j) : j = (e as any)[18];
  let p: any;
  ((e as any)[19] as any) !== (j as any) || ((e as any)[20] as any) !== (o as any) || ((e as any)[21] as any) !== (n as any) ? (p = ((t as any).jsxs as any)("button", {
    onClick: o,
    type: "button",
    ...a,
    children: [n, j]
  }), (e as any)[19] = j, (e as any)[20] = o, (e as any)[21] = n, (e as any)[22] = p) : p = (e as any)[22];
  let k: any;
  ((e as any)[23] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (k = {
    className: "sand-2lah0s sand-f159sx"
  }, (e as any)[23] = k) : k = (e as any)[23];
  let _: any;
  ((e as any)[24] as any) !== (s as any) || ((e as any)[25] as any) !== (y as any) || ((e as any)[26] as any) !== (i as any) || ((e as any)[27] as any) !== (c as any) ? (_ = ((t as any).jsx as any)("span", {
    ...k,
    children: ((t as any).jsx as any)(F, {
      agent: s,
      isAdded: y,
      onAdd: i,
      onRemove: c
    })
  }), (e as any)[24] = s, (e as any)[25] = y, (e as any)[26] = i, (e as any)[27] = c, (e as any)[28] = _) : _ = (e as any)[28];
  let w: any;
  return ((e as any)[29] as any) !== (l as any) || ((e as any)[30] as any) !== (p as any) || ((e as any)[31] as any) !== (_ as any) ? (w = ((t as any).jsxs as any)("div", {
    "aria-labelledby": l,
    role: "group",
    ...m,
    children: [p, _]
  }), (e as any)[29] = l, (e as any)[30] = p, (e as any)[31] = _, (e as any)[32] = w) : w = (e as any)[32], w;
}
function F(this: any, u: any): any {
  (F as any).d = 1347;
  const e: any = ((R as any).c as any)(19),
    {
      agent: s,
      isAdded: y,
      onAdd: h,
      onRemove: i
    }: any = u,
    {
      _: c
    }: any = (O as any)();
  if ((G as any)(s)) {
    let a: any;
    ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = [(C as any).body2, (b as any).secondary], (e as any)[0] = a) : a = (e as any)[0];
    let n: any;
    ((e as any)[1] as any) !== (c as any) ? (n = (c as any)({
      id: "HrUSV3"
    }), (e as any)[1] = c, (e as any)[2] = n) : n = (e as any)[2];
    let r: any;
    ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = ((t as any).jsx as any)(v, {
      id: "hp8OtS"
    }), (e as any)[3] = r) : r = (e as any)[3];
    let d: any;
    return ((e as any)[4] as any) !== (n as any) ? (d = ((t as any).jsx as any)(E, {
      "aria-disabled": !0,
      disabled: !0,
      size: "sm",
      style: a,
      title: n,
      variant: "tertiary",
      children: r
    }), (e as any)[4] = n, (e as any)[5] = d) : d = (e as any)[5], d;
  }
  if (y) {
    let a: any;
    ((e as any)[6] as any) !== ((s as any).id as any) || ((e as any)[7] as any) !== (i as any) ? (a = (): any => (i as any)((s as any).id), (e as any)[6] = (s as any).id, (e as any)[7] = i, (e as any)[8] = a) : a = (e as any)[8];
    let n: any;
    ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = [(C as any).body2, (b as any).secondary], (e as any)[9] = n) : n = (e as any)[9];
    let r: any;
    ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = ((t as any).jsx as any)(v, {
      id: "hp8OtS"
    }), (e as any)[10] = r) : r = (e as any)[10];
    let d: any;
    return ((e as any)[11] as any) !== (a as any) ? (d = ((t as any).jsx as any)(E, {
      onClick: a,
      size: "sm",
      style: n,
      variant: "tertiary",
      children: r
    }), (e as any)[11] = a, (e as any)[12] = d) : d = (e as any)[12], d;
  }
  let l: any;
  ((e as any)[13] as any) !== ((s as any).id as any) || ((e as any)[14] as any) !== (h as any) ? (l = (): any => (h as any)((s as any).id), (e as any)[13] = (s as any).id, (e as any)[14] = h, (e as any)[15] = l) : l = (e as any)[15];
  let m: any;
  ((e as any)[16] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = ((t as any).jsx as any)(v, {
    id: "m16xKo"
  }), (e as any)[16] = m) : m = (e as any)[16];
  let o: any;
  return ((e as any)[17] as any) !== (l as any) ? (o = ((t as any).jsx as any)(E, {
    onClick: l,
    size: "sm",
    style: (C as any).body2,
    variant: "secondary",
    children: m
  }), (e as any)[17] = l, (e as any)[18] = o) : o = (e as any)[18], o;
}
function H(this: any, u: any): any {
  (H as any).d = 1349;
  const e: any = ((R as any).c as any)(50),
    {
      addedTeamAgents: s,
      availableTeamAgents: y,
      isOpen: h,
      onClose: i,
      onPreviewAgent: c,
      onAdd: l,
      onRemove: m
    }: any = u,
    {
      _: o
    }: any = (O as any)(),
    a: any = (L as any)(),
    [n, r]: any = ((J as any).useState as any)("");
  let d: any;
  ((e as any)[0] as any) !== (s as any) ? (d = new (Set as any)(((s as any).map as any)(re)), (e as any)[0] = s, (e as any)[1] = d) : d = (e as any)[1];
  const x: any = d;
  let f: any, g: any, j: any, p: any, k: any, _: any, w: any, T: any, S: any, $: any, q: any;
  if (((e as any)[2] as any) !== (o as any) || ((e as any)[3] as any) !== (x as any) || ((e as any)[4] as any) !== (s as any) || ((e as any)[5] as any) !== (a as any) || ((e as any)[6] as any) !== (y as any) || ((e as any)[7] as any) !== (h as any) || ((e as any)[8] as any) !== (l as any) || ((e as any)[9] as any) !== (i as any) || ((e as any)[10] as any) !== (c as any) || ((e as any)[11] as any) !== (m as any) || ((e as any)[12] as any) !== (n as any)) {
    let M: any;
    ((e as any)[24] as any) !== (a as any) || ((e as any)[25] as any) !== (n as any) ? (M = (A: any): any => (le as any)(A, n, B, a), (e as any)[24] = a, (e as any)[25] = n, (e as any)[26] = M) : M = (e as any)[26];
    const V: any = (((ae as any)([...y, ...s]) as any).filter as any)(M),
      I: any = (((s as any).length as any) + ((y as any).length as any) as any) > (0 as any);
    g = (N as any).Root, ((e as any)[27] as any) !== (i as any) ? (w = (A: any): any => {
      A || (i as any)();
    }, (e as any)[27] = i, (e as any)[28] = w) : w = (e as any)[28], T = h, S = (b as any).surface, $ = "rich", q = "wide";
    let Q: any;
    ((e as any)[29] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Q = [(C as any).body1, (Y as any).medium], (e as any)[29] = Q) : Q = (e as any)[29];
    let W: any;
    ((e as any)[30] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (W = ((t as any).jsx as any)((N as any).Title, {
      style: Q,
      children: ((t as any).jsx as any)(ee, {
        children: ((t as any).jsx as any)(v, {
          id: "8Ri8tN"
        })
      })
    }), (e as any)[30] = W) : W = (e as any)[30], ((e as any)[31] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = ((t as any).jsxs as any)((N as any).Header, {
      style: (b as any).header,
      children: [W, ((t as any).jsx as any)((N as any).Description, {
        style: [(C as any).body1, (b as any).secondary],
        children: ((t as any).jsx as any)(v, {
          id: "XWmreC"
        })
      }), ((t as any).jsx as any)((N as any).CloseButton, {})]
    }), (e as any)[31] = j) : j = (e as any)[31], f = (N as any).Body, p = (b as any).body, ((e as any)[32] as any) !== (o as any) || ((e as any)[33] as any) !== (I as any) || ((e as any)[34] as any) !== (n as any) ? (k = I ? ((t as any).jsxs as any)("div", {
      className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-2lah0s sand-14vqqas sand-1t0vds8 sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c",
      children: [((t as any).jsx as any)(K, {
        name: "search",
        size: "sm"
      }), ((t as any).jsx as any)("input", {
        "aria-label": (o as any)({
          id: "A1taO8"
        }),
        autoComplete: "off",
        onChange: (A: any): any => (r as any)(((A as any).currentTarget as any).value),
        placeholder: (o as any)({
          id: "A1taO8"
        }),
        spellCheck: !1,
        value: n,
        ...(U as any)((b as any).searchInput, (C as any).body1)
      })]
    }) : null, (e as any)[32] = o, (e as any)[33] = I, (e as any)[34] = n, (e as any)[35] = k) : k = (e as any)[35], _ = ((V as any).length as any) === (0 as any) ? ((t as any).jsxs as any)("div", {
      className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-l56j7k sand-17d4w8g sand-1iyjqo2 sand-2b8uid",
      children: [((t as any).jsx as any)(K, {
        color: "quaternary",
        name: "people",
        size: "2xl"
      }), ((t as any).jsx as any)(P, {
        as: "div",
        level: "body1",
        style: (b as any).secondary,
        weight: "medium",
        children: I ? ((t as any).jsx as any)(v, {
          id: "12i8o8"
        }) : ((t as any).jsx as any)(v, {
          id: "D6NKnp"
        })
      })]
    }) : ((t as any).jsx as any)(te, {
      contentStyle: (b as any).listContent,
      rootStyle: (b as any).list,
      children: ((V as any).map as any)((A: any): any => ((t as any).jsx as any)(Z, {
        agent: A,
        isAdded: ((x as any).has as any)((A as any).id),
        onAdd: l,
        onPreviewAgent: c,
        onRemove: m
      }, (A as any).id))
    }), (e as any)[2] = o, (e as any)[3] = x, (e as any)[4] = s, (e as any)[5] = a, (e as any)[6] = y, (e as any)[7] = h, (e as any)[8] = l, (e as any)[9] = i, (e as any)[10] = c, (e as any)[11] = m, (e as any)[12] = n, (e as any)[13] = f, (e as any)[14] = g, (e as any)[15] = j, (e as any)[16] = p, (e as any)[17] = k, (e as any)[18] = _, (e as any)[19] = w, (e as any)[20] = T, (e as any)[21] = S, (e as any)[22] = $, (e as any)[23] = q;
  } else f = (e as any)[13], g = (e as any)[14], j = (e as any)[15], p = (e as any)[16], k = (e as any)[17], _ = (e as any)[18], w = (e as any)[19], T = (e as any)[20], S = (e as any)[21], $ = (e as any)[22], q = (e as any)[23];
  let z: any;
  ((e as any)[36] as any) !== (f as any) || ((e as any)[37] as any) !== (p as any) || ((e as any)[38] as any) !== (k as any) || ((e as any)[39] as any) !== (_ as any) ? (z = ((t as any).jsxs as any)(f, {
    style: p,
    children: [k, _]
  }), (e as any)[36] = f, (e as any)[37] = p, (e as any)[38] = k, (e as any)[39] = _, (e as any)[40] = z) : z = (e as any)[40];
  let D: any;
  return ((e as any)[41] as any) !== (g as any) || ((e as any)[42] as any) !== (j as any) || ((e as any)[43] as any) !== (z as any) || ((e as any)[44] as any) !== (w as any) || ((e as any)[45] as any) !== (T as any) || ((e as any)[46] as any) !== (S as any) || ((e as any)[47] as any) !== ($ as any) || ((e as any)[48] as any) !== (q as any) ? (D = ((t as any).jsxs as any)(g, {
    onOpenChange: w,
    open: T,
    surfaceStyle: S,
    variant: $,
    width: q,
    children: [j, z]
  }), (e as any)[41] = g, (e as any)[42] = j, (e as any)[43] = z, (e as any)[44] = w, (e as any)[45] = T, (e as any)[46] = S, (e as any)[47] = $, (e as any)[48] = q, (e as any)[49] = D) : D = (e as any)[49], D;
}
function re(this: any, u: any): any {
  return (u as any).id;
}
function ce(this: any): any {
  (ce as any).d = 1342;
  const u: any = ((R as any).c as any)(2),
    e: any = (se as any)();
  let s: any;
  return ((u as any)[0] as any) !== (e as any) ? (s = ((t as any).jsx as any)(H, {
    ...e,
    isOpen: !0
  }), (u as any)[0] = e, (u as any)[1] = s) : s = (u as any)[1], s;
}
export { ce as default };
//# debugId=24cef7a6-d4bf-42e1-b021-0f6ed91467ad
