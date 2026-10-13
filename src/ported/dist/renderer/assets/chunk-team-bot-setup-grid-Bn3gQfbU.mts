declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "78b83172-996c-41c4-8e45-9f48abff67f1", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-78b83172-996c-41c4-8e45-9f48abff67f1");
  } catch (e: any) {}
} as any)();
import { c as j, j as l, p as x, u as T, T as v } from "./index.eager-vendor-Qbf9YA6n.js";
import { a$ as _, a_ as g } from "./index.eager-app-Cj5f8Gby.js";
import { I as z } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
const V: any = ["integrations", "secrets", "skills", "files"],
  B: any = {
    integrations: "plug",
    secrets: "key",
    skills: "cube",
    files: "file"
  },
  S: any = {
    title: {
      kVQacm: "sand-b3r6kr",
      kg5iWk: "sand-lyipyv",
      khDVqt: "sand-uxw1ft",
      kMwMTN: "sand-tyxrsu",
      $$css: !0
    },
    subtitle: {
      kVQacm: "sand-b3r6kr",
      kg5iWk: "sand-lyipyv",
      khDVqt: "sand-uxw1ft",
      kMwMTN: "sand-169k319",
      $$css: !0
    }
  };
function N(this: any, d: any): any {
  (N as any).d = 1048;
  const s: any = ((j as any).c as any)(6),
    {
      labelledBy: a,
      children: t
    }: any = d;
  let e: any;
  ((s as any)[0] as any) !== (a as any) ? (e = (a as any) == (null as any) ? {} : {
    "aria-labelledby": a
  }, (s as any)[0] = a, (s as any)[1] = e) : e = (s as any)[1];
  let n: any;
  ((s as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = {
    className: "sand-rvj5dj sand-nby9oq sand-167g77z sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl sand-e8uvvx"
  }, (s as any)[2] = n) : n = (s as any)[2];
  let i: any;
  return ((s as any)[3] as any) !== (t as any) || ((s as any)[4] as any) !== (e as any) ? (i = ((l as any).jsx as any)("ul", {
    ...e,
    ...n,
    children: t
  }), (s as any)[3] = t, (s as any)[4] = e, (s as any)[5] = i) : i = (s as any)[5], i;
}
function E(this: any, d: any): any {
  (E as any).d = 1046;
  const s: any = ((j as any).c as any)(20),
    {
      icon: a,
      title: t,
      subtitle: e,
      paneKey: n,
      onOpen: i
    }: any = d;
  let u: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = {
    className: "sand-78zum5 sand-euugli"
  }, (s as any)[0] = u) : u = (s as any)[0];
  let f: any;
  ((s as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = {
    className: "sand-jyslct sand-1lugfcp sand-9f619 sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-883omv sand-h8yej3 sand-euugli sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-z9dl7a sand-pdmqnj sand-sag5q8 sand-1g0dm76 sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-hojbe8 sand-10e981r sand-kxk3po sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk sand-1k57tk5 sand-784prv sand-1t137rt sand-9v5kkp sand-4sht9k sand-2ssjo2"
  }, (s as any)[1] = f) : f = (s as any)[1];
  let y: any;
  ((s as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = {
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-gd8bvy sand-1fgtraw sand-149ho13 sand-1b8i4yy sand-1o0liin"
  }, (s as any)[2] = y) : y = (s as any)[2];
  let r: any;
  ((s as any)[3] as any) !== (a as any) ? (r = ((l as any).jsx as any)("span", {
    "aria-hidden": !0,
    ...y,
    children: ((l as any).jsx as any)(z, {
      name: a,
      size: "sm"
    })
  }), (s as any)[3] = a, (s as any)[4] = r) : r = (s as any)[4];
  let h: any, b: any;
  ((s as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = {
    className: "sand-78zum5 sand-dt5ytf sand-h8yej3 sand-euugli"
  }, b = (x as any)((g as any).body2, (_ as any).regular, (S as any).title), (s as any)[5] = h, (s as any)[6] = b) : (h = (s as any)[5], b = (s as any)[6]);
  let c: any;
  ((s as any)[7] as any) !== (t as any) ? (c = ((l as any).jsx as any)("span", {
    ...b,
    children: ((l as any).jsx as any)("bdi", {
      children: t
    })
  }), (s as any)[7] = t, (s as any)[8] = c) : c = (s as any)[8];
  let p: any;
  ((s as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = (x as any)((g as any).label, (_ as any).regular, (S as any).subtitle), (s as any)[9] = p) : p = (s as any)[9];
  let o: any;
  ((s as any)[10] as any) !== (e as any) ? (o = ((l as any).jsx as any)("span", {
    ...p,
    children: ((l as any).jsx as any)("bdi", {
      children: e
    })
  }), (s as any)[10] = e, (s as any)[11] = o) : o = (s as any)[11];
  let m: any;
  ((s as any)[12] as any) !== (c as any) || ((s as any)[13] as any) !== (o as any) ? (m = ((l as any).jsxs as any)("span", {
    ...h,
    children: [c, o]
  }), (s as any)[12] = c, (s as any)[13] = o, (s as any)[14] = m) : m = (s as any)[14];
  let k: any;
  return ((s as any)[15] as any) !== (i as any) || ((s as any)[16] as any) !== (n as any) || ((s as any)[17] as any) !== (m as any) || ((s as any)[18] as any) !== (r as any) ? (k = ((l as any).jsx as any)("li", {
    ...u,
    children: ((l as any).jsxs as any)("button", {
      "data-details-pane": n,
      "data-setup-card": !0,
      onClick: i,
      type: "button",
      ...f,
      children: [r, m]
    })
  }), (s as any)[15] = i, (s as any)[16] = n, (s as any)[17] = m, (s as any)[18] = r, (s as any)[19] = k) : k = (s as any)[19], k;
}
function $(this: any, d: any): any {
  ($ as any).d = 1047;
  const s: any = ((j as any).c as any)(4),
    {
      _: a
    }: any = (T as any)(),
    t: any = ((d as any).count as any) === (1 as any) ? ((d as any).names as any)[0] : void 0;
  if (((d as any).count as any) === (0 as any)) {
    let n: any;
    return ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((l as any).jsx as any)(v, {
      id: "EdQY6l"
    }), (s as any)[0] = n) : n = (s as any)[0], n;
  }
  if ((t as any) != (null as any) && ((((t as any).trim as any)() as any).length as any) > (0 as any)) return t;
  let e: any;
  return ((s as any)[1] as any) !== (a as any) || ((s as any)[2] as any) !== ((d as any).count as any) ? (e = (a as any)({
    id: "kRr3s3",
    values: {
      0: (d as any).count
    }
  }), (s as any)[1] = a, (s as any)[2] = (d as any).count, (s as any)[3] = e) : e = (s as any)[3], e;
}
export { B as O, E as T, N as a, $ as b, V as c };
//# debugId=78b83172-996c-41c4-8e45-9f48abff67f1
