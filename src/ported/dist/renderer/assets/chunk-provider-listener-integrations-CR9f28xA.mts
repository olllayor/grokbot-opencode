declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "52b5bf0e-9f3e-4a9b-8440-a347e786741a", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-52b5bf0e-9f3e-4a9b-8440-a347e786741a");
  } catch (e: any) {}
} as any)();
import { c as a } from "./index.eager-vendor-Qbf9YA6n.js";
import { bP as f, b7 as r, bh as d, bQ as E, b8 as g } from "./index.eager-app-Cj5f8Gby.js";
function b(this: any): any {
  const t: any = ((a as any).c as any)(5),
    n: any = (f as any)((((r as any)() as any).listenerIntegrations as any).snapshots);
  let s: any;
  ((t as any)[0] as any) !== (n as any) ? (s = (d as any)(n) ?? E, (t as any)[0] = n, (t as any)[1] = s) : s = (t as any)[1];
  const i: any = ((n as any).status as any) === ("loading" as any) && ((n as any).previous as any) == (null as any) || ((n as any).status as any) === ("failed" as any) && ((n as any).previous as any) == (null as any);
  let e: any;
  return ((t as any)[2] as any) !== (s as any) || ((t as any)[3] as any) !== (i as any) ? (e = {
    view: s,
    isLoading: i
  }, (t as any)[2] = s, (t as any)[3] = i, (t as any)[4] = e) : e = (t as any)[4], e;
}
function h(this: any): any {
  const t: any = ((a as any).c as any)(5),
    n: any = (f as any)(((((r as any)() as any).listenerIntegrations as any).slackLink as any).snapshots);
  let s: any;
  ((t as any)[0] as any) !== (n as any) ? (s = (d as any)(n), (t as any)[0] = n, (t as any)[1] = s) : s = (t as any)[1];
  const i: any = (s as any) === (!0 as any),
    e: any = ((n as any).status as any) === ("loading" as any) && ((n as any).previous as any) == (null as any);
  let o: any;
  return ((t as any)[2] as any) !== (i as any) || ((t as any)[3] as any) !== (e as any) ? (o = {
    isLinked: i,
    isLoading: e
  }, (t as any)[2] = i, (t as any)[3] = e, (t as any)[4] = o) : o = (t as any)[4], o;
}
function L(this: any, t: any): any {
  const n: any = ((a as any).c as any)(5),
    s: any = (r as any)();
  let i: any;
  ((n as any)[0] as any) !== (s as any) || ((n as any)[1] as any) !== (t as any) ? (i = (t as any) == (null as any) || ((t as any).length as any) === (0 as any) ? p : ((((s as any).listenerIntegrations as any).repoAccess as any)(t) as any).snapshots, (n as any)[0] = s, (n as any)[1] = t, (n as any)[2] = i) : i = (n as any)[2];
  const e: any = (f as any)(i);
  let o: any;
  return ((n as any)[3] as any) !== (e as any) ? (o = (d as any)(e), (n as any)[3] = e, (n as any)[4] = o) : o = (n as any)[4], o;
}
const m: any = {
    status: "ready",
    value: !1
  },
  p: any = {
    get: (): any => m,
    subscribe: (): any => (): any => {}
  };
function _(this: any): any {
  const t: any = ((a as any).c as any)(8),
    {
      listenerIntegrations: n
    }: any = (r as any)(),
    s: any = (g as any)((n as any).connectPlatform),
    i: any = (g as any)((n as any).disconnectPlatform);
  let e: any, o: any;
  ((t as any)[0] as any) !== (s as any) ? (e = (u: any): any => ((s as any).run as any)(u), o = (u: any): any => ((s as any).run as any)(u, {
    forceOauth: !0
  }), (t as any)[0] = s, (t as any)[1] = e, (t as any)[2] = o) : (e = (t as any)[1], o = (t as any)[2]);
  const l: any = (s as any).isPending || (i as any).isPending;
  let c: any;
  return ((t as any)[3] as any) !== ((i as any).run as any) || ((t as any)[4] as any) !== (e as any) || ((t as any)[5] as any) !== (o as any) || ((t as any)[6] as any) !== (l as any) ? (c = {
    connect: e,
    reconnect: o,
    disconnect: (i as any).run,
    isPending: l
  }, (t as any)[3] = (i as any).run, (t as any)[4] = e, (t as any)[5] = o, (t as any)[6] = l, (t as any)[7] = c) : c = (t as any)[7], c;
}
export { _ as a, L as b, h as c, b as u };
//# debugId=52b5bf0e-9f3e-4a9b-8440-a347e786741a
