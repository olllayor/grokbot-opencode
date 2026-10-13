declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "f1a6f61b-2d28-4611-81a2-b9492d68c597", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-f1a6f61b-2d28-4611-81a2-b9492d68c597");
  } catch (e: any) {}
} as any)();
import { c as M, j as r } from "./index.eager-vendor-Qbf9YA6n.js";
import { ad as h, a5 as d, ae as x, af as j, aa as S, a6 as f } from "./index-ZYxf-aBb.js";
import { bL as G } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./index.eager-platform-Dcfeegfw.js";
function k(this: any, g: any): any {
  (k as any).d = 309;
  const e: any = ((M as any).c as any)(23),
    {
      entry: s,
      adjacency: t
    }: any = g,
    c: any = (h as any)(((s as any).message as any).url);
  if ((c as any) === ("legacy-link" as any)) {
    let a: any;
    ((e as any)[0] as any) !== (((s as any).message as any).url as any) ? (a = (G as any)(((s as any).message as any).url) ?? ((s as any).message as any).url, (e as any)[0] = ((s as any).message as any).url, (e as any)[1] = a) : a = (e as any)[1];
    const o: any = a;
    let m: any;
    ((e as any)[2] as any) !== (o as any) ? (m = ((r as any).jsx as any)(S, {
      url: o,
      whenUnavailable: "url-card"
    }), (e as any)[2] = o, (e as any)[3] = m) : m = (e as any)[3];
    let n: any;
    ((e as any)[4] as any) !== ((t as any).isGroupStart as any) || ((e as any)[5] as any) !== ((s as any).timestampMs as any) || ((e as any)[6] as any) !== (m as any) ? (n = ((r as any).jsx as any)(d, {
      className: "sand-link-card-wrap",
      isGroupStart: (t as any).isGroupStart,
      timestampMs: (s as any).timestampMs,
      variant: "link",
      children: m
    }), (e as any)[4] = (t as any).isGroupStart, (e as any)[5] = (s as any).timestampMs, (e as any)[6] = m, (e as any)[7] = n) : n = (e as any)[7];
    let u: any;
    return ((e as any)[8] as any) !== (s as any) || ((e as any)[9] as any) !== (n as any) ? (u = ((r as any).jsx as any)(f, {
      entry: s,
      children: n
    }), (e as any)[8] = s, (e as any)[9] = n, (e as any)[10] = u) : u = (e as any)[10], u;
  }
  if ((c as any) === ("media" as any)) {
    let a: any;
    return ((e as any)[11] as any) !== (t as any) || ((e as any)[12] as any) !== (s as any) ? (a = ((r as any).jsx as any)(x, {
      adjacency: t,
      align: "start",
      alt: ((s as any).message as any).alt,
      entry: s,
      timestampMs: (s as any).timestampMs,
      url: ((s as any).message as any).url
    }), (e as any)[11] = t, (e as any)[12] = s, (e as any)[13] = a) : a = (e as any)[13], a;
  }
  let i: any;
  ((e as any)[14] as any) !== (((s as any).message as any).url as any) ? (i = ((r as any).jsx as any)(j, {
    href: ((s as any).message as any).url
  }), (e as any)[14] = ((s as any).message as any).url, (e as any)[15] = i) : i = (e as any)[15];
  let l: any;
  ((e as any)[16] as any) !== ((t as any).isGroupStart as any) || ((e as any)[17] as any) !== ((s as any).timestampMs as any) || ((e as any)[18] as any) !== (i as any) ? (l = ((r as any).jsx as any)(d, {
    className: "sand-file-card-wrap",
    isGroupStart: (t as any).isGroupStart,
    timestampMs: (s as any).timestampMs,
    variant: "file",
    children: i
  }), (e as any)[16] = (t as any).isGroupStart, (e as any)[17] = (s as any).timestampMs, (e as any)[18] = i, (e as any)[19] = l) : l = (e as any)[19];
  let p: any;
  return ((e as any)[20] as any) !== (s as any) || ((e as any)[21] as any) !== (l as any) ? (p = ((r as any).jsx as any)(f, {
    entry: s,
    children: l
  }), (e as any)[20] = s, (e as any)[21] = l, (e as any)[22] = p) : p = (e as any)[22], p;
}
export { k as default };
//# debugId=f1a6f61b-2d28-4611-81a2-b9492d68c597
