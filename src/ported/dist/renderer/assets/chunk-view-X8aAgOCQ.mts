declare var document: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "d6b7dc9d-f38f-447a-9568-3aebc642dc8e", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-d6b7dc9d-f38f-447a-9568-3aebc642dc8e");
  } catch (e: any) {}
} as any)();
const __vite__mapDeps: any = (i: any, m: any = __vite__mapDeps, d: any = (m as any).f || ((m as any).f = ["./chunk-index-DYBNJbIk.js", "./index.eager-vendor-Qbf9YA6n.js"])): any => ((i as any).map as any)((i: any): any => (d as any)[i]);
import { c as R, j as E, R as S, _ as w, i as L } from "./index.eager-vendor-Qbf9YA6n.js";
import { aZ as b, b1 as j, x as M, i as B } from "./index.eager-platform-Dcfeegfw.js";
import { bz as N, bA as I, es as k, et as D, ay as H, bk as V, aj as z, ah as G, z as Y, eu as $, d0 as g, ev as q } from "./index.eager-app-Cj5f8Gby.js";
import "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
const F: string = "en",
  Z: any = {
    "Buy credits": {
      id: "iM5q08"
    },
    "Auto top-up when balance is low": {
      id: "zTs8vS"
    },
    "Top up amount": {
      id: "EB1xbN"
    }
  };
function J(this: any, t: any): any {
  const e: any = {};
  for (const [o, n] of ((Object as any).entries as any)(Z)) (e as any)[o] = ((t as any)._ as any)(n);
  return e;
}
const K: string = "overlay",
  T: string = "unified-billing",
  Q: any = new (Set as any)(G);
async function W(this: any): Promise<any> {
  const t: any = await (w as any)((): any => import("./chunk-index-DYBNJbIk.js"), (__vite__mapDeps as any)([0, 1]), (import.meta as any).url);
  return await ((t as any).applyCursorTopUpCopy as any)(F, (J as any)(L)), t;
}
const x: any = (H as any)(W),
  X: any = ((x as any).component as any)((t: any): any => (t as any).CursorTopUpModal),
  ee: any = ((x as any).component as any)((t: any): any => (t as any).CursorAutoTopUpModal);
function te(this: any, t: any): any {
  if ((t as any) == (null as any)) return;
  const e: any = (Y as any)(),
    o: any = ((z as any).cover as any)({
      surface: T,
      regions: Q
    });
  return (): any => {
    (o as any)(), (e as any)();
  };
}
function A(this: any, t: any): any {
  (A as any).d = 1353;
  const e: any = ((R as any).c as any)(19),
    {
      view: o
    }: any = t,
    n: any = (b as any)(),
    l: any = (N as any)(),
    U: any = (I as any)(),
    {
      openPrepaidClient: _,
      subscribeNotice: v
    }: any = (k as any)(),
    i: any = (D as any)(),
    {
      portalLayerStyles: h
    }: any = (j as any)("modal", !0);
  let p: any;
  ((e as any)[0] as any) !== (n as any) ? (p = (): any => {
    ((n as any).close as any)(K);
  }, (e as any)[0] = n, (e as any)[1] = p) : p = (e as any)[1];
  const s: any = (M as any)(p);
  let c: any;
  ((e as any)[2] as any) !== (s as any) || ((e as any)[3] as any) !== (_ as any) || ((e as any)[4] as any) !== (v as any) ? (c = (): any => {
    let r: any = !0;
    ((async (): Promise<any> => {
      const y: any = await (_ as any)();
      r && ((y as any).status as any) !== ("ready" as any) && (s as any)();
    }) as any)();
    const P: any = (v as any)((y: any): any => {
      (y?.kind as any) === ("credits-purchased" as any) && (s as any)();
    });
    return (): any => {
      r = !1, (P as any)();
    };
  }, (e as any)[2] = s, (e as any)[3] = _, (e as any)[4] = v, (e as any)[5] = c) : c = (e as any)[5], (B as any)(c);
  let u: any;
  ((e as any)[6] as any) !== (U as any) ? (u = (r: any): any => {
    const O: any = ($ as any)(r);
    if ((O as any) === (null as any)) {
      (g as any)(new (q as any)("checkout"), {
        tags: {
          sand_area: T
        }
      });
      return;
    }
    (((U as any)(O) as any).catch as any)(oe);
  }, (e as any)[6] = U, (e as any)[7] = u) : u = (e as any)[7];
  const d: any = u;
  if (((i as any).status as any) !== ("ready" as any)) return null;
  let f: any;
  ((e as any)[8] as any) !== (s as any) ? (f = (r: any): any => {
    r || (s as any)();
  }, (e as any)[8] = s, (e as any)[9] = f) : f = (e as any)[9];
  const m: any = f;
  let a: any;
  ((e as any)[10] as any) !== ((i as any).client as any) || ((e as any)[11] as any) !== (m as any) || ((e as any)[12] as any) !== (d as any) || ((e as any)[13] as any) !== ((l as any).resolved as any) || ((e as any)[14] as any) !== (o as any) ? (a = (o as any) === ("auto-top-up" as any) ? ((E as any).jsx as any)(ee, {
    onOpenChange: m,
    onOpenUrl: d,
    open: !0,
    prepaidClient: (i as any).client,
    themeType: (l as any).resolved
  }) : ((E as any).jsx as any)(X, {
    onOpenChange: m,
    onOpenUrl: d,
    open: !0,
    prepaidClient: (i as any).client,
    returnUrl: V,
    themeType: (l as any).resolved
  }), (e as any)[10] = (i as any).client, (e as any)[11] = m, (e as any)[12] = d, (e as any)[13] = (l as any).resolved, (e as any)[14] = o, (e as any)[15] = a) : a = (e as any)[15];
  let C: any;
  return ((e as any)[16] as any) !== (h as any) || ((e as any)[17] as any) !== (a as any) ? (C = ((S as any).createPortal as any)(((E as any).jsx as any)("div", {
    "data-component": "top-up-modal-host",
    ref: te,
    style: h,
    children: a
  }), (document as any).body), (e as any)[16] = h, (e as any)[17] = a, (e as any)[18] = C) : C = (e as any)[18], C;
}
function oe(this: any, t: any): any {
  (g as any)(t, {
    tags: {
      sand_area: T
    }
  });
}
function ne(this: any, t: any): any {
  (ne as any).d = 1352;
  const e: any = ((R as any).c as any)(2),
    {
      params: o
    }: any = t;
  let n: any;
  return ((e as any)[0] as any) !== ((o as any).view as any) ? (n = ((E as any).jsx as any)(A, {
    view: (o as any).view
  }), (e as any)[0] = (o as any).view, (e as any)[1] = n) : n = (e as any)[1], n;
}
export { ne as default };
//# debugId=d6b7dc9d-f38f-447a-9568-3aebc642dc8e
