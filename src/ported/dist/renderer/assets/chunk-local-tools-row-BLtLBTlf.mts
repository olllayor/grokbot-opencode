declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "fe5f0e70-9bdf-408b-81e7-01485ffc6458", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-fe5f0e70-9bdf-408b-81e7-01485ffc6458");
  } catch (e: any) {}
} as any)();
import { c as j, u as G, j as m } from "./index.eager-vendor-Qbf9YA6n.js";
import { b7 as D, aU as R, c9 as w, ca as y, cb as z, cc as M, cd as X } from "./index.eager-app-Cj5f8Gby.js";
import { az as k, aA as H, E as K } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import { S as g, a as W } from "./chunk-settings-row-I8ggwIzt.js";
import { u as F } from "./chunk-provider-team-policy-CBjUAi-4.js";
const Q: any = {
    id: "fuUvu2"
  },
  Z: any = {
    id: "hrkSSQ"
  },
  q: any = {
    id: "ENHi8c"
  },
  V: any = {
    always: {
      id: "NoKBgy"
    },
    ask: {
      id: "6CTZeX"
    },
    never: {
      id: "wvd4WD"
    }
  };
function $(this: any, x: any): any {
  ($ as any).d = 1286;
  const e: any = ((j as any).c as any)(39),
    {
      machine: i,
      executionLabel: b
    }: any = x,
    {
      i18n: o,
      _: l
    }: any = (G as any)(),
    N: any = (D as any)();
  (R as any)(((N as any).localToolPermission as any).load), (R as any)(((N as any).teamPolicy as any).load);
  const B: any = (k as any)(),
    t: any = (F as any)(),
    I: any = (i as any) === (void 0 as any) ? B : (i as any).localToolPermission ?? w;
  let _: any;
  ((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (I as any) ? (_ = (X as any)(I, t), (e as any)[0] = t, (e as any)[1] = I, (e as any)[2] = _) : _ = (e as any)[2];
  const p: any = _,
    {
      dispatchPermission: P,
      failure: U,
      isPending: h
    }: any = (H as any)();
  let S: any;
  ((e as any)[3] as any) !== (t as any) || ((e as any)[4] as any) !== (o as any) ? (S = ((y as any).map as any)((s: any): any => ({
    value: s,
    label: ((o as any)._ as any)((V as any)[s]),
    disabled: (z as any)(s, t)
  })), (e as any)[3] = t, (e as any)[4] = o, (e as any)[5] = S) : S = (e as any)[5];
  const A: any = S;
  let T: any;
  ((e as any)[6] as any) !== (l as any) || ((e as any)[7] as any) !== (o as any) || ((e as any)[8] as any) !== (i as any) ? (T = (i as any) === (void 0 as any) ? ((o as any)._ as any)(Q) : (l as any)({
    id: "kvhz1P"
  }), (e as any)[6] = l, (e as any)[7] = o, (e as any)[8] = i, (e as any)[9] = T) : T = (e as any)[9];
  const u: any = T;
  let E: any;
  ((e as any)[10] as any) !== (o as any) || ((e as any)[11] as any) !== (i as any) ? (E = (i as any) === (void 0 as any) ? ((o as any)._ as any)(Z) : ((o as any)._ as any)(q), (e as any)[10] = o, (e as any)[11] = i, (e as any)[12] = E) : E = (e as any)[12];
  const f: any = E;
  let L: any;
  if ((U as any) != (null as any)) {
    let s: any;
    ((e as any)[13] as any) !== (l as any) ? (s = (l as any)({
      id: "QqKsGg"
    }), (e as any)[13] = l, (e as any)[14] = s) : s = (e as any)[14], L = s;
  } else (i as any) !== (void 0 as any) && (L = f);
  const C: any = (i as any) === (void 0 as any) || (i as any).isCurrent ? "local-execution" : M;
  let n: any;
  ((e as any)[15] as any) !== (f as any) || ((e as any)[16] as any) !== (i as any) ? (n = (i as any) === (void 0 as any) ? ((m as any).jsx as any)(g, {
    children: f
  }) : null, (e as any)[15] = f, (e as any)[16] = i, (e as any)[17] = n) : n = (e as any)[17];
  let a: any;
  ((e as any)[18] as any) !== (l as any) || ((e as any)[19] as any) !== (t as any) ? (a = (t as any) === (void 0 as any) ? null : ((m as any).jsx as any)(g, {
    children: (l as any)({
      id: "68SHzZ",
      values: {
        ceiling: t
      }
    })
  }), (e as any)[18] = l, (e as any)[19] = t, (e as any)[20] = a) : a = (e as any)[20];
  let c: any;
  ((e as any)[21] as any) !== (n as any) || ((e as any)[22] as any) !== (a as any) ? (c = ((m as any).jsxs as any)((m as any).Fragment, {
    children: [n, a]
  }), (e as any)[21] = n, (e as any)[22] = a, (e as any)[23] = c) : c = (e as any)[23];
  const v: any = b ?? u;
  let r: any;
  ((e as any)[24] as any) !== (P as any) || ((e as any)[25] as any) !== (i?.machineId as any) ? (r = (s: any): any => {
    (s as any) !== (null as any) && (P as any)(s, i?.machineId);
  }, (e as any)[24] = P, (e as any)[25] = i?.machineId, (e as any)[26] = r) : r = (e as any)[26];
  let d: any;
  ((e as any)[27] as any) !== (h as any) || ((e as any)[28] as any) !== (A as any) || ((e as any)[29] as any) !== (p as any) || ((e as any)[30] as any) !== (v as any) || ((e as any)[31] as any) !== (r as any) ? (d = ((m as any).jsx as any)(K, {
    "aria-label": v,
    disabled: h,
    onValueChange: r,
    options: A,
    placement: "bottom-end",
    size: "lg",
    value: p,
    variant: "ghost"
  }), (e as any)[27] = h, (e as any)[28] = A, (e as any)[29] = p, (e as any)[30] = v, (e as any)[31] = r, (e as any)[32] = d) : d = (e as any)[32];
  let O: any;
  return ((e as any)[33] as any) !== (L as any) || ((e as any)[34] as any) !== (u as any) || ((e as any)[35] as any) !== (d as any) || ((e as any)[36] as any) !== (C as any) || ((e as any)[37] as any) !== (c as any) ? (O = ((m as any).jsx as any)(W, {
    anchorId: C,
    description: L,
    extraCopy: c,
    label: u,
    variant: "card",
    children: d
  }), (e as any)[33] = L, (e as any)[34] = u, (e as any)[35] = d, (e as any)[36] = C, (e as any)[37] = c, (e as any)[38] = O) : O = (e as any)[38], O;
}
export { $ as L };
//# debugId=fe5f0e70-9bdf-408b-81e7-01485ffc6458
