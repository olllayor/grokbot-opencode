declare var global: any;
declare var navigator: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "d04b4a45-cf37-4fa4-b018-99356fc5df2e", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-d04b4a45-cf37-4fa4-b018-99356fc5df2e");
  } catch (e: any) {}
} as any)();
import { c as C, j as p, u as S, p as P, r as z } from "./index.eager-vendor-Qbf9YA6n.js";
import { i as D, aY as H } from "./index.eager-platform-Dcfeegfw.js";
import { b9 as U, b7 as B, bv as G, bw as W, bx as N, by as $, bz as F, bA as X, bB as J, bC as L, bD as O, bE as V, bF as Y, bG as Z } from "./index.eager-app-Cj5f8Gby.js";
import { a5 as K, a6 as Q, g as ee } from "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
const _: any = {
  surface: {
    kB7OPa: "sand-9f619",
    kVQacm: "sand-b3r6kr",
    kzqmXN: "sand-h8yej3",
    kaIpWk: "sand-hojbe8",
    kWkggS: "sand-13l7odt",
    $$css: !0
  },
  bordered: {
    kMzoRj: "sand-qjedn3",
    ksu8eU: "sand-1y0btm7",
    kVAM5u: "sand-fnq37j",
    $$css: !0
  },
  frame: {
    kWkggS: "sand-jbqb8w",
    kMzoRj: "sand-c342km",
    k1xSpc: "sand-1lliihq",
    kzqmXN: "sand-h8yej3",
    $$css: !0
  },
  height: (a: any): any => [{
    kZKoxP: (a as any) != (null as any) ? "sand-16ye13r" : a,
    $$css: !0
  }, {
    "--x-height": (((e: any): any => (typeof e as any) == ("number" as any) ? (e as any) + ("px" as any) : e ?? void 0) as any)(a)
  }]
};
function te(this: any, a: any): any {
  (te as any).d = 301;
  const e: any = ((C as any).c as any)(22),
    {
      entry: t,
      adjacency: s,
      agentId: i
    }: any = a,
    l: any = (U as any)("sand_mcp_apps"),
    {
      mcpApps: o
    }: any = (B as any)(),
    n: any = (G as any)(),
    r: any = l ? (t as any).resourceUri : "",
    y: any = i ?? n ?? "";
  let x: any;
  ((e as any)[0] as any) !== ((t as any).serverIdentifier as any) || ((e as any)[1] as any) !== (r as any) || ((e as any)[2] as any) !== (y as any) ? (x = {
    serverIdentifier: (t as any).serverIdentifier,
    resourceUri: r,
    agentId: y
  }, (e as any)[0] = (t as any).serverIdentifier, (e as any)[1] = r, (e as any)[2] = y, (e as any)[3] = x) : x = (e as any)[3];
  const d: any = x,
    v: any = (W as any)(d);
  let k: any;
  if (((e as any)[4] as any) !== (o as any) || ((e as any)[5] as any) !== (d as any) ? (k = (): any => (N as any)(d) ? ((((o as any).document as any)(d) as any).retain as any)() : se, (e as any)[4] = o, (e as any)[5] = d, (e as any)[6] = k) : k = (e as any)[6], (D as any)(k), !l) return null;
  let m: any;
  ((e as any)[7] as any) !== (o as any) || ((e as any)[8] as any) !== (d as any) ? (m = (): any => {
    (N as any)(d) && ((((o as any).document as any)(d) as any).refresh as any)();
  }, (e as any)[7] = o, (e as any)[8] = d, (e as any)[9] = m) : m = (e as any)[9];
  const h: any = m;
  let b: any;
  ((e as any)[10] as any) !== (t as any) || ((e as any)[11] as any) !== (h as any) || ((e as any)[12] as any) !== (v as any) ? (b = ((p as any).jsx as any)(R, {
    entry: t,
    state: v,
    onRetry: h
  }), (e as any)[10] = t, (e as any)[11] = h, (e as any)[12] = v, (e as any)[13] = b) : b = (e as any)[13];
  let c: any;
  ((e as any)[14] as any) !== ((s as any).isGroupStart as any) || ((e as any)[15] as any) !== ((t as any).resourceUri as any) || ((e as any)[16] as any) !== ((t as any).timestampMs as any) || ((e as any)[17] as any) !== (b as any) ? (c = ((p as any).jsx as any)(K, {
    "data-mcp-app": (t as any).resourceUri,
    isGroupStart: (s as any).isGroupStart,
    timestampMs: (t as any).timestampMs,
    variant: "mcpApp",
    children: b
  }), (e as any)[14] = (s as any).isGroupStart, (e as any)[15] = (t as any).resourceUri, (e as any)[16] = (t as any).timestampMs, (e as any)[17] = b, (e as any)[18] = c) : c = (e as any)[18];
  let j: any;
  return ((e as any)[19] as any) !== (t as any) || ((e as any)[20] as any) !== (c as any) ? (j = ((p as any).jsx as any)(Q, {
    entry: t,
    children: c
  }), (e as any)[19] = t, (e as any)[20] = c, (e as any)[21] = j) : j = (e as any)[21], j;
}
function se(this: any): any {}
function R(this: any, a: any): any {
  (R as any).d = 300;
  const e: any = ((C as any).c as any)(15),
    {
      entry: t,
      state: s,
      onRetry: i
    }: any = a,
    {
      _: l
    }: any = (S as any)();
  if (((s as any).status as any) === ("ready" as any)) {
    let n: any;
    return ((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== ((s as any).value as any) ? (n = ((p as any).jsx as any)(q, {
      app: (s as any).value,
      entry: t
    }), (e as any)[0] = t, (e as any)[1] = (s as any).value, (e as any)[2] = n) : n = (e as any)[2], n;
  }
  if (((s as any).status as any) === ("failed" as any)) {
    let n: any;
    ((e as any)[3] as any) !== (l as any) || ((e as any)[4] as any) !== ((t as any).serverName as any) ? (n = (l as any)({
      id: "EHxqRb",
      values: {
        0: (t as any).serverName
      }
    }), (e as any)[3] = l, (e as any)[4] = (t as any).serverName, (e as any)[5] = n) : n = (e as any)[5];
    let r: any;
    return ((e as any)[6] as any) !== (i as any) || ((e as any)[7] as any) !== (n as any) ? (r = ((p as any).jsx as any)(E, {
      text: n,
      onRetry: i
    }), (e as any)[6] = i, (e as any)[7] = n, (e as any)[8] = r) : r = (e as any)[8], r;
  }
  if (((s as any).status as any) === ("unavailable" as any) || ((s as any).status as any) === ("empty" as any)) {
    let n: any;
    ((e as any)[9] as any) !== (l as any) || ((e as any)[10] as any) !== ((t as any).serverName as any) ? (n = (l as any)({
      id: "u98B5U",
      values: {
        0: (t as any).serverName
      }
    }), (e as any)[9] = l, (e as any)[10] = (t as any).serverName, (e as any)[11] = n) : n = (e as any)[11];
    let r: any;
    return ((e as any)[12] as any) !== (n as any) ? (r = ((p as any).jsx as any)(E, {
      text: n
    }), (e as any)[12] = n, (e as any)[13] = r) : r = (e as any)[13], r;
  }
  let o: any;
  return ((e as any)[14] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = ((p as any).jsx as any)("div", {
    "aria-hidden": !0,
    ...(P as any)((_ as any).surface, (_ as any).bordered, ((_ as any).height as any)($))
  }), (e as any)[14] = o) : o = (e as any)[14], o;
}
function E(this: any, a: any): any {
  (E as any).d = 303;
  const e: any = ((C as any).c as any)(9),
    {
      text: t,
      onRetry: s
    }: any = a,
    {
      _: i
    }: any = (S as any)();
  let l: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = {
    className: "sand-9f619 sand-b3r6kr sand-h8yej3 sand-hojbe8 sand-13l7odt sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-6s0dn4 sand-78zum5 sand-167g77z sand-1qughib sand-1vvogim sand-1awh872"
  }, (e as any)[0] = l) : l = (e as any)[0];
  let o: any;
  ((e as any)[1] as any) !== (t as any) ? (o = ((p as any).jsx as any)(H, {
    color: "tertiary",
    size: "sm",
    children: t
  }), (e as any)[1] = t, (e as any)[2] = o) : o = (e as any)[2];
  let n: any;
  ((e as any)[3] as any) !== (i as any) || ((e as any)[4] as any) !== (s as any) ? (n = (s as any) == (null as any) ? null : ((p as any).jsx as any)(ee, {
    onClick: s,
    size: "xs",
    tone: "monochrome",
    variant: "ghost",
    children: (i as any)({
      id: "6gRgw8"
    })
  }), (e as any)[3] = i, (e as any)[4] = s, (e as any)[5] = n) : n = (e as any)[5];
  let r: any;
  return ((e as any)[6] as any) !== (o as any) || ((e as any)[7] as any) !== (n as any) ? (r = ((p as any).jsxs as any)("div", {
    ...l,
    children: [o, n]
  }), (e as any)[6] = o, (e as any)[7] = n, (e as any)[8] = r) : r = (e as any)[8], r;
}
function q(this: any, a: any): any {
  (q as any).d = 302;
  const e: any = ((C as any).c as any)(23),
    {
      app: t,
      entry: s
    }: any = a,
    i: any = (((F as any)() as any).resolved as any) === ("dark" as any) ? "dark" : "light",
    [l, o]: any = ((z as any).useState as any)(null),
    n: any = (X as any)();
  let r: any;
  ((e as any)[0] as any) !== (n as any) ? (r = (f: any, A: any, g: any): any => {
    (((n as any)(g) as any).then as any)((): any => (w as any)(f, {
      id: A,
      result: {}
    }), (M: any): any => {
      (J as any)(M), (w as any)(f, (Z as any)(A));
    });
  }, (e as any)[0] = n, (e as any)[1] = r) : r = (e as any)[1];
  const y: any = r;
  let x: any;
  ((e as any)[2] as any) !== (s as any) || ((e as any)[3] as any) !== (y as any) || ((e as any)[4] as any) !== (i as any) ? (x = (f: any, A: any): any => {
    const g: any = (f as any).contentWindow,
      M: any = ((f as any).ownerDocument as any).defaultView;
    if ((g as any) == (null as any) || (M as any) == (null as any)) return;
    const I: any = (L as any)(A, {
      hostContext: (T as any)(s, i),
      userActivation: ((M as any).navigator as any).userActivation,
      ...(((s as any).toolArgumentsJson as any) == (null as any) ? {} : {
        toolArgumentsJson: (s as any).toolArgumentsJson
      }),
      ...(((s as any).toolResultJson as any) == (null as any) ? {} : {
        toolResultJson: (s as any).toolResultJson
      })
    });
    for (const u of I) e: switch ((u as any).kind) {
      case "resize":
        {
          (o as any)((u as any).heightPx);
          break e;
        }
      case "wheel":
        {
          (ne as any)(f, u);
          break e;
        }
      case "notify":
        {
          (w as any)(g, {
            method: (u as any).method,
            params: (u as any).params
          });
          break e;
        }
      case "respond":
        {
          (w as any)(g, {
            id: (u as any).id,
            result: (u as any).result
          });
          break e;
        }
      case "open-link":
        {
          (y as any)(g, (u as any).id, (u as any).url);
          break e;
        }
      case "reject":
        (w as any)(g, {
          id: (u as any).id,
          error: {
            code: (u as any).code,
            message: (u as any).message
          }
        });
    }
  }, (e as any)[2] = s, (e as any)[3] = y, (e as any)[4] = i, (e as any)[5] = x) : x = (e as any)[5];
  const d: any = x;
  let v: any;
  ((e as any)[6] as any) !== (s as any) || ((e as any)[7] as any) !== (d as any) || ((e as any)[8] as any) !== (i as any) ? (v = (f: any): any => {
    const A: any = ((f as any).ownerDocument as any).defaultView,
      g: any = (M: any): any => {
        if (!(ae as any)(M, f)) return;
        const I: any = (V as any)((M as any).data);
        (I as any) != (null as any) && (d as any)(f, I);
      };
    return A?.addEventListener("message", g), (re as any)(f, s, i), (): any => {
      A?.removeEventListener("message", g);
    };
  }, (e as any)[6] = s, (e as any)[7] = d, (e as any)[8] = i, (e as any)[9] = v) : v = (e as any)[9];
  const k: any = v;
  let m: any;
  ((e as any)[10] as any) !== ((t as any).prefersBorder as any) ? (m = ({
    0: {
      className: "sand-9f619 sand-b3r6kr sand-h8yej3 sand-hojbe8 sand-13l7odt"
    },
    1: {
      className: "sand-9f619 sand-b3r6kr sand-h8yej3 sand-hojbe8 sand-13l7odt sand-qjedn3 sand-1y0btm7 sand-fnq37j"
    }
  } as any)[(!!(t as any).prefersBorder as any) << (0 as any)], (e as any)[10] = (t as any).prefersBorder, (e as any)[11] = m) : m = (e as any)[11];
  let h: any;
  ((e as any)[12] as any) !== (l as any) ? (h = (P as any)((_ as any).frame, ((_ as any).height as any)(l ?? $)), (e as any)[12] = l, (e as any)[13] = h) : h = (e as any)[13];
  const b: any = `${(s as any).serverName} ${(s as any).toolName}`;
  let c: any;
  ((e as any)[14] as any) !== ((t as any).allow as any) || ((e as any)[15] as any) !== ((t as any).frameUrl as any) || ((e as any)[16] as any) !== (k as any) || ((e as any)[17] as any) !== (h as any) || ((e as any)[18] as any) !== (b as any) ? (c = ((p as any).jsx as any)("iframe", {
    ...h,
    allow: (t as any).allow,
    ref: k,
    sandbox: "allow-scripts",
    src: (t as any).frameUrl,
    title: b
  }), (e as any)[14] = (t as any).allow, (e as any)[15] = (t as any).frameUrl, (e as any)[16] = k, (e as any)[17] = h, (e as any)[18] = b, (e as any)[19] = c) : c = (e as any)[19];
  let j: any;
  return ((e as any)[20] as any) !== (m as any) || ((e as any)[21] as any) !== (c as any) ? (j = ((p as any).jsx as any)("div", {
    ...m,
    children: c
  }), (e as any)[20] = m, (e as any)[21] = c, (e as any)[22] = j) : j = (e as any)[22], j;
}
function T(this: any, a: any, e: any): any {
  return {
    theme: e,
    displayMode: "inline",
    availableDisplayModes: ["inline"],
    containerDimensions: {
      maxHeight: O
    },
    locale: (navigator as any).language,
    timeZone: (((((Intl as any).DateTimeFormat as any)() as any).resolvedOptions as any)() as any).timeZone,
    platform: "desktop",
    userAgent: "grok-bot",
    toolInfo: {
      id: (a as any).toolCallId,
      tool: {
        name: (a as any).toolName,
        inputSchema: {
          type: "object"
        }
      }
    }
  };
}
function ne(this: any, a: any, e: any): any {
  const t: any = ((a as any).ownerDocument as any).defaultView;
  (t as any) != (null as any) && ((a as any).dispatchEvent as any)(new ((t as any).WheelEvent as any)("wheel", {
    bubbles: !0,
    cancelable: !0,
    deltaMode: (e as any).deltaMode,
    deltaX: (e as any).deltaX,
    deltaY: (e as any).deltaY
  }));
}
function ae(this: any, a: any, e: any): any {
  return ((a as any).source as any) != (null as any) && ((a as any).source as any) === ((e as any).contentWindow as any);
}
function re(this: any, a: any, e: any, t: any): any {
  const s: any = (a as any).contentWindow;
  (s as any) != (null as any) && (w as any)(s, {
    method: Y,
    params: (T as any)(e, t)
  });
}
function w(this: any, a: any, e: any): any {
  ((a as any).postMessage as any)({
    jsonrpc: "2.0",
    ...e
  }, "*");
}
export { te as default };
//# debugId=d04b4a45-cf37-4fa4-b018-99356fc5df2e
