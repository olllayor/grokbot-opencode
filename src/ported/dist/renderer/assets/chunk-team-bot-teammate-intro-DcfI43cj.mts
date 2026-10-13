declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "4f53a21f-8556-4a31-acce-2404bd3bf4eb", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-4f53a21f-8556-4a31-acce-2404bd3bf4eb");
  } catch (e: any) {}
} as any)();
import { c as N, j as a, p as x, T as w } from "./index.eager-vendor-Qbf9YA6n.js";
import { a$ as z, a_ as b, bc as T } from "./index.eager-app-Cj5f8Gby.js";
import { a3 as _ } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
const g: any = {
  title: {
    kogj98: "sand-1ghz6dp",
    k9WMMc: "sand-2b8uid",
    kMwMTN: "sand-tyxrsu",
    $$css: !0
  },
  description: {
    kogj98: "sand-1ghz6dp",
    k9WMMc: "sand-2b8uid",
    kMwMTN: "sand-1o0liin",
    k1xSpc: "sand-104kibb",
    kgKLqz: "sand-1ua5tub",
    kJFfOR: "sand-1gzmk7r",
    kVQacm: "sand-b3r6kr",
    kHjlTd: "sand-j0a0fe",
    $$css: !0
  },
  byline: {
    k9WMMc: "sand-2b8uid",
    kMwMTN: "sand-169k319",
    $$css: !0
  }
};
function $(this: any, M: any): any {
  ($ as any).d = 1056;
  const s: any = ((N as any).c as any)(26),
    {
      agent: e
    }: any = M;
  let c: any;
  ((s as any)[0] as any) !== ((e as any).description as any) ? (c = (((e as any).description as any).trim as any)(), (s as any)[0] = (e as any).description, (s as any)[1] = c) : c = (s as any)[1];
  const o: any = c;
  let m: any;
  ((s as any)[2] as any) !== ((e as any).ownerDisplayName as any) ? (m = (e as any).ownerDisplayName?.trim() ?? "", (s as any)[2] = (e as any).ownerDisplayName, (s as any)[3] = m) : m = (s as any)[3];
  const p: any = m;
  let f: any, u: any;
  ((s as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-1iyjqo2 sand-2lwn1j sand-euugli sand-n2ks54 sand-wxc41k sand-4l9tsp sand-1odjw0f"
  }, u = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-33pbmt sand-h8yej3 sand-1j9u4d2 sand-1nkss2m"
  }, (s as any)[4] = f, (s as any)[5] = u) : (f = (s as any)[4], u = (s as any)[5]);
  let j: any;
  ((s as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = {
    className: "sand-78zum5 sand-2lah0s sand-6s0dn4 sand-l56j7k"
  }, (s as any)[6] = j) : j = (s as any)[6];
  let n: any;
  ((s as any)[7] as any) !== (e as any) ? (n = ((a as any).jsx as any)("div", {
    "aria-hidden": !0,
    ...j,
    children: ((a as any).jsx as any)(_, {
      agent: e,
      size: "xl"
    })
  }), (s as any)[7] = e, (s as any)[8] = n) : n = (s as any)[8];
  let h: any;
  ((s as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-167g77z sand-h8yej3"
  }, (s as any)[9] = h) : h = (s as any)[9];
  let k: any;
  ((s as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (k = (x as any)((b as any).heading1, (z as any).medium, (g as any).title), (s as any)[10] = k) : k = (s as any)[10];
  let t: any;
  ((s as any)[11] as any) !== (e as any) ? (t = (T as any)(e), (s as any)[11] = e, (s as any)[12] = t) : t = (s as any)[12];
  let d: any;
  ((s as any)[13] as any) !== (t as any) ? (d = ((a as any).jsx as any)("h2", {
    dir: "auto",
    ...k,
    children: t
  }), (s as any)[13] = t, (s as any)[14] = d) : d = (s as any)[14];
  let i: any;
  ((s as any)[15] as any) !== (o as any) ? (i = ((o as any).length as any) > (0 as any) ? ((a as any).jsx as any)("p", {
    dir: "auto",
    title: o,
    ...(x as any)((b as any).body1, (g as any).description),
    children: o
  }) : null, (s as any)[15] = o, (s as any)[16] = i) : i = (s as any)[16];
  let l: any;
  ((s as any)[17] as any) !== (p as any) ? (l = ((p as any).length as any) > (0 as any) ? ((a as any).jsx as any)("span", {
    ...(x as any)((b as any).body2, (g as any).byline),
    children: ((a as any).jsx as any)(w, {
      id: "Mj5jM2",
      values: {
        ownerName: p
      }
    })
  }) : null, (s as any)[17] = p, (s as any)[18] = l) : l = (s as any)[18];
  let r: any;
  ((s as any)[19] as any) !== (d as any) || ((s as any)[20] as any) !== (i as any) || ((s as any)[21] as any) !== (l as any) ? (r = ((a as any).jsxs as any)("div", {
    ...h,
    children: [d, i, l]
  }), (s as any)[19] = d, (s as any)[20] = i, (s as any)[21] = l, (s as any)[22] = r) : r = (s as any)[22];
  let y: any;
  return ((s as any)[23] as any) !== (r as any) || ((s as any)[24] as any) !== (n as any) ? (y = ((a as any).jsx as any)("div", {
    ...f,
    children: ((a as any).jsxs as any)("div", {
      ...u,
      children: [n, r]
    })
  }), (s as any)[23] = r, (s as any)[24] = n, (s as any)[25] = y) : y = (s as any)[25], y;
}
export { $ as TeamBotTeammateIntro };
//# debugId=4f53a21f-8556-4a31-acce-2404bd3bf4eb
