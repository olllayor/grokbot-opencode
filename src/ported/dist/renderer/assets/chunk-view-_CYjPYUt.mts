declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "35b097d9-fda2-4a09-8f43-c7f164edac02", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-35b097d9-fda2-4a09-8f43-c7f164edac02");
  } catch (e: any) {}
} as any)();
import { c as z, u as v, p as I, j as e } from "./index.eager-vendor-Qbf9YA6n.js";
import { bl as M, bm as N, aK as T } from "./index.eager-app-Cj5f8Gby.js";
import { aY as j } from "./index.eager-platform-Dcfeegfw.js";
import { W as E } from "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
const g: any = {
  card: {
    kysU6D: "sand-jyslct",
    k1xSpc: "sand-78zum5",
    kGNEyG: "sand-6s0dn4",
    kOIVth: "sand-1v2ro7d",
    kzqmXN: "sand-h8yej3",
    k7Eaqz: "sand-euugli",
    kmVPX3: "sand-c7ga6q",
    kMzoRj: "sand-c342km",
    kaIpWk: "sand-gqmno8",
    kMwMTN: "sand-1heor9g",
    kMv6JI: "sand-jb2p0i",
    k9WMMc: "sand-1yc453h",
    kkrTdU: "sand-1ypdohk",
    $$css: !0
  },
  line: {
    k7Eaqz: "sand-euugli",
    kVQacm: "sand-b3r6kr",
    kg5iWk: "sand-lyipyv",
    khDVqt: "sand-uxw1ft",
    $$css: !0
  }
};
function S(this: any, x: any): any {
  (S as any).d = 76;
  const s: any = ((z as any).c as any)(25),
    {
      entry: b
    }: any = x,
    {
      _: f
    }: any = (v as any)(),
    m: any = (M as any)()?.id ?? null,
    h: any = (N as any)(),
    {
      taskId: a,
      taskName: n,
      taskDescription: t
    }: any = (b as any).event;
  let d: any;
  ((s as any)[0] as any) !== (f as any) || ((s as any)[1] as any) !== (n as any) ? (d = (f as any)({
    id: "wnXRn7",
    values: {
      name: n
    }
  }), (s as any)[0] = f, (s as any)[1] = n, (s as any)[2] = d) : d = (s as any)[2];
  let i: any;
  ((s as any)[3] as any) !== (m as any) || ((s as any)[4] as any) !== (h as any) || ((s as any)[5] as any) !== (a as any) ? (i = (q: any): any => {
    ((q as any).stopPropagation as any)(), (m as any) != (null as any) && ((h as any).openThread as any)({
      agentId: m,
      taskId: a
    });
  }, (s as any)[3] = m, (s as any)[4] = h, (s as any)[5] = a, (s as any)[6] = i) : i = (s as any)[6];
  let u: any, k: any, p: any;
  ((s as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = (I as any)((T as any).transcriptWidget, (g as any).card), k = ((e as any).jsx as any)("span", {
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-100vrsf sand-1vqgdyp sand-1q4ynmn sand-59yu97 sand-19aaqeu",
    children: ((e as any).jsx as any)(E, {
      "aria-hidden": !0,
      name: "list-todo",
      size: "lg"
    })
  }), p = {
    className: "sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-1r8uery sand-euugli"
  }, (s as any)[7] = u, (s as any)[8] = k, (s as any)[9] = p) : (u = (s as any)[7], k = (s as any)[8], p = (s as any)[9]);
  let l: any;
  ((s as any)[10] as any) !== (n as any) ? (l = ((e as any).jsx as any)(j, {
    rootStyle: (g as any).line,
    size: "md",
    weight: "medium",
    children: ((e as any).jsx as any)("bdi", {
      children: n
    })
  }), (s as any)[10] = n, (s as any)[11] = l) : l = (s as any)[11];
  let r: any;
  ((s as any)[12] as any) !== (t as any) ? (r = ((e as any).jsx as any)("bdi", {
    children: t
  }), (s as any)[12] = t, (s as any)[13] = r) : r = (s as any)[13];
  let o: any;
  ((s as any)[14] as any) !== (r as any) || ((s as any)[15] as any) !== (t as any) ? (o = ((e as any).jsx as any)(j, {
    rootStyle: (g as any).line,
    color: "secondary",
    size: "md",
    title: t,
    children: r
  }), (s as any)[14] = r, (s as any)[15] = t, (s as any)[16] = o) : o = (s as any)[16];
  let c: any;
  ((s as any)[17] as any) !== (l as any) || ((s as any)[18] as any) !== (o as any) ? (c = ((e as any).jsxs as any)("span", {
    ...p,
    children: [l, o]
  }), (s as any)[17] = l, (s as any)[18] = o, (s as any)[19] = c) : c = (s as any)[19];
  let y: any;
  return ((s as any)[20] as any) !== (d as any) || ((s as any)[21] as any) !== (i as any) || ((s as any)[22] as any) !== (c as any) || ((s as any)[23] as any) !== (a as any) ? (y = ((e as any).jsxs as any)("button", {
    "aria-label": d,
    "data-task-card": a,
    onClick: i,
    type: "button",
    ...u,
    children: [k, c]
  }), (s as any)[20] = d, (s as any)[21] = i, (s as any)[22] = c, (s as any)[23] = a, (s as any)[24] = y) : y = (s as any)[24], y;
}
export { S as default };
//# debugId=35b097d9-fda2-4a09-8f43-c7f164edac02
