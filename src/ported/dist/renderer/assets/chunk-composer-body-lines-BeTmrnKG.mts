declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "e3eb3efa-f1ab-410b-8fa9-04b067c57393", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-e3eb3efa-f1ab-410b-8fa9-04b067c57393");
  } catch (e: any) {}
} as any)();
import { c as h, r as _, j as r, T as f } from "./index.eager-vendor-Qbf9YA6n.js";
import { dc as O, b7 as E, b8 as j } from "./index.eager-app-Cj5f8Gby.js";
import { aY as C } from "./index.eager-platform-Dcfeegfw.js";
import { g as R } from "./index-ZYxf-aBb.js";
function S(this: any, a: any): any {
  (S as any).d = 491;
  const e: any = ((h as any).c as any)(11),
    {
      agentId: t
    }: any = a,
    o: any = (((O as any)() as any).find as any)((i: any): any => ((i as any).id as any) === (t as any)),
    {
      drafting: p
    }: any = (E as any)(),
    {
      dispatch: m,
      failure: l,
      isPending: c
    }: any = (j as any)((p as any).setDisabled),
    [x, g]: any = ((_ as any).useState as any)(!1);
  if ((o as any) == (null as any) || (o as any).isGroup || ((o as any).viewerIsOwner as any) === (!1 as any)) return null;
  if (x && !c && (l as any) == (null as any)) {
    let i: any;
    ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = {
      className: "sand-2vl965 sand-e2zdcy"
    }, (e as any)[0] = i) : i = (e as any)[0];
    let d: any;
    return ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = ((r as any).jsx as any)("span", {
      ...i,
      role: "status",
      children: ((r as any).jsx as any)(C, {
        color: "tertiary",
        size: "sm",
        children: ((r as any).jsx as any)(f, {
          id: "iQ0tBZ"
        })
      })
    }), (e as any)[1] = d) : d = (e as any)[1], d;
  }
  let s: any;
  ((e as any)[2] as any) !== (t as any) || ((e as any)[3] as any) !== (m as any) ? (s = (): any => {
    (g as any)(!0), (m as any)(t, !0);
  }, (e as any)[2] = t, (e as any)[3] = m, (e as any)[4] = s) : s = (e as any)[4];
  let n: any;
  ((e as any)[5] as any) !== (l as any) ? (n = (l as any) == (null as any) ? ((r as any).jsx as any)(f, {
    id: "F+h5UJ"
  }) : ((r as any).jsx as any)(f, {
    id: "QqKsGg"
  }), (e as any)[5] = l, (e as any)[6] = n) : n = (e as any)[6];
  let u: any;
  return ((e as any)[7] as any) !== (c as any) || ((e as any)[8] as any) !== (s as any) || ((e as any)[9] as any) !== (n as any) ? (u = ((r as any).jsx as any)(R, {
    disabled: c,
    onClick: s,
    size: "sm",
    type: "button",
    variant: "ghost",
    children: n
  }), (e as any)[7] = c, (e as any)[8] = s, (e as any)[9] = n, (e as any)[10] = u) : u = (e as any)[10], u;
}
const b: number = 72,
  L: number = 8;
function y(this: any, a: any, e: any): any {
  return ((((a as any).split as any)(`
`) as any).reduce as any)((t: any, o: any): any => (t as any) + (((Math as any).max as any)(1, ((Math as any).ceil as any)(((o as any).length as any) / (e as any))) as any), 0);
}
function M(this: any, a: any): any {
  return ((y as any)(a, b) as any) > (L as any);
}
export { S as D, M as i };
//# debugId=e3eb3efa-f1ab-410b-8fa9-04b067c57393
