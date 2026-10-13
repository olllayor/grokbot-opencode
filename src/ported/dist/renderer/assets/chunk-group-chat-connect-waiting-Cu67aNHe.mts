declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "b923ad13-c576-4af6-823c-9e44aadb2f77", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-b923ad13-c576-4af6-823c-9e44aadb2f77");
  } catch (e: any) {}
} as any)();
import { c as u, u as c, j as a } from "./index.eager-vendor-Qbf9YA6n.js";
import { ag as f } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import { aZ as m } from "./index.eager-app-Cj5f8Gby.js";
function p(this: any, s: any, t: any): any {
  if (!((s as any) === (void 0 as any) || (((s as any).forUser as any).authId as any) === (t as any))) return ((s as any).forUser as any).name;
}
function j(this: any, {
  targeted: s,
  viewerAuthId: t,
  transcriptAgentId: n
}: any): any {
  return (s as any) === (void 0 as any) ? {
    agentId: n
  } : {
    agentId: ((s as any).answerAt as any).agentId,
    groupChat: {
      sessionId: ((s as any).answerAt as any).sessionId,
      waitingOn: (p as any)(s, t)
    }
  };
}
function l(this: any, s: any): any {
  (l as any).d = 496;
  const t: any = ((u as any).c as any)(2),
    {
      label: n
    }: any = s;
  let i: any;
  return ((t as any)[0] as any) !== (n as any) ? (i = ((a as any).jsx as any)(f, {
    children: ((a as any).jsx as any)(m, {
      isTruncating: !0,
      title: n,
      children: n
    })
  }), (t as any)[0] = n, (t as any)[1] = i) : i = (t as any)[1], i;
}
function d(this: any, s: any): any {
  (d as any).d = 493;
  const t: any = ((u as any).c as any)(5),
    {
      name: n
    }: any = s,
    {
      _: i
    }: any = (c as any)();
  let e: any;
  ((t as any)[0] as any) !== (i as any) || ((t as any)[1] as any) !== (n as any) ? (e = (i as any)({
    id: "C9DhJs",
    values: {
      name: n
    }
  }), (t as any)[0] = i, (t as any)[1] = n, (t as any)[2] = e) : e = (t as any)[2];
  let r: any;
  return ((t as any)[3] as any) !== (e as any) ? (r = ((a as any).jsx as any)(l, {
    label: e
  }), (t as any)[3] = e, (t as any)[4] = r) : r = (t as any)[4], r;
}
function g(this: any, s: any): any {
  (g as any).d = 494;
  const t: any = ((u as any).c as any)(6),
    {
      name: n,
      serverName: i
    }: any = s,
    {
      _: e
    }: any = (c as any)();
  let r: any;
  ((t as any)[0] as any) !== (e as any) || ((t as any)[1] as any) !== (n as any) || ((t as any)[2] as any) !== (i as any) ? (r = (e as any)({
    id: "1B27rj",
    values: {
      name: n,
      serverName: i
    }
  }), (t as any)[0] = e, (t as any)[1] = n, (t as any)[2] = i, (t as any)[3] = r) : r = (t as any)[3];
  let o: any;
  return ((t as any)[4] as any) !== (r as any) ? (o = ((a as any).jsx as any)(l, {
    label: r
  }), (t as any)[4] = r, (t as any)[5] = o) : o = (t as any)[5], o;
}
function h(this: any, s: any): any {
  (h as any).d = 495;
  const t: any = ((u as any).c as any)(5),
    {
      name: n
    }: any = s,
    {
      _: i
    }: any = (c as any)();
  let e: any;
  ((t as any)[0] as any) !== (i as any) || ((t as any)[1] as any) !== (n as any) ? (e = (i as any)({
    id: "GZbbNk",
    values: {
      name: n
    }
  }), (t as any)[0] = i, (t as any)[1] = n, (t as any)[2] = e) : e = (t as any)[2];
  let r: any;
  return ((t as any)[3] as any) !== (e as any) ? (r = ((a as any).jsx as any)(l, {
    label: e
  }), (t as any)[3] = e, (t as any)[4] = r) : r = (t as any)[4], r;
}
export { d as G, j as a, g as b, h as c, p as g };
//# debugId=b923ad13-c576-4af6-823c-9e44aadb2f77
