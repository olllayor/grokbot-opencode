declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "33c5a903-9877-457f-b55b-89aa240b524a", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-33c5a903-9877-457f-b55b-89aa240b524a");
  } catch (e: any) {}
} as any)();
import { c as y, p as j, u as w, j as d } from "./index.eager-vendor-Qbf9YA6n.js";
import { r as b, a_ as v } from "./index.eager-app-Cj5f8Gby.js";
import { p as T, I as N } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
const u: any = {
  title: {
    kB7OPa: "sand-9f619",
    keoZOQ: "sand-dj266r",
    k71WvV: "sand-14z9mp",
    k1K539: "sand-at24cr",
    keTefX: "sand-1lziwak",
    k63SB2: "sand-1rhlpx6",
    kMwMTN: "sand-1wd3ewq",
    $$css: !0
  },
  titleInset: {
    kZCmMZ: "sand-22095l",
    $$css: !0
  },
  backLabelButton: {
    kB7OPa: "sand-9f619",
    k1xSpc: "sand-3nfvp2",
    kGNEyG: "sand-6s0dn4",
    kOIVth: "sand-195vfkc",
    ks0D6T: "sand-193iq5w",
    kZKoxP: "sand-1fgtraw",
    kLKAdn: "sand-exx8yu",
    kwRFfy: "sand-2vl965",
    kGO01o: "sand-18d9i69",
    kZCmMZ: "sand-25sj25",
    kMzoRj: "sand-c342km",
    ksu8eU: "sand-ng3xce",
    kaIpWk: "sand-149ho13",
    kWkggS: "sand-jbqb8w sand-aalx5g",
    kMwMTN: "sand-19aaqeu",
    kMv6JI: "sand-jb2p0i",
    kkrTdU: "sand-1ypdohk",
    k3XXqK: "sand-1t137rt sand-9v5kkp",
    kMeerF: "sand-1k57tk5 sand-784prv",
    kjBf7l: "sand-1uczgqu sand-1iolv91",
    $$css: !0
  },
  detailTitle: {
    kB7OPa: "sand-9f619",
    kzQI83: "sand-1iyjqo2",
    kmuXW: "sand-s83m0k",
    kCS8Yb: "sand-dl72j9",
    k7Eaqz: "sand-euugli",
    keoZOQ: "sand-dj266r",
    k71WvV: "sand-14z9mp",
    k1K539: "sand-at24cr",
    keTefX: "sand-1lziwak",
    kVQacm: "sand-b3r6kr",
    k63SB2: "sand-1rhlpx6",
    kMwMTN: "sand-1wd3ewq",
    k9WMMc: "sand-2b8uid",
    kg5iWk: "sand-lyipyv",
    khDVqt: "sand-uxw1ft",
    $$css: !0
  },
  detailTitleFading: {
    k1ekBW: "sand-19991ni",
    kIyJzY: "sand-h5t8r0 sand-12w9bfk",
    kAMwcw: "sand-9lcvmn",
    $$css: !0
  },
  detailTitleHidden: {
    kSiTet: "sand-g01cxk",
    $$css: !0
  }
};
function q(this: any, g: any): any {
  (q as any).d = 1231;
  const s: any = ((y as any).c as any)(10),
    {
      title: l,
      headingId: k,
      insetTitle: f,
      trailing: r
    }: any = g,
    i: any = (f as any) === (void 0 as any) ? !1 : f;
  let t: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = (b as any)("sand-settings-pane-header", "sand-9f619 sand-78zum5 sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-6s0dn4 sand-1qughib sand-195vfkc sand-1miatn0 sand-sfy40s sand-10b6aqq sand-1mfogq2"), (s as any)[0] = t) : t = (s as any)[0];
  let e: any;
  ((s as any)[1] as any) !== (i as any) ? (e = (b as any)(((j as any)((v as any).heading3, (u as any).title, i && (u as any).titleInset) as any).className), (s as any)[1] = i, (s as any)[2] = e) : e = (s as any)[2];
  let a: any;
  ((s as any)[3] as any) !== (k as any) || ((s as any)[4] as any) !== (e as any) || ((s as any)[5] as any) !== (l as any) ? (a = ((d as any).jsx as any)("h2", {
    className: e,
    id: k,
    children: l
  }), (s as any)[3] = k, (s as any)[4] = e, (s as any)[5] = l, (s as any)[6] = a) : a = (s as any)[6];
  const c: any = r ?? null;
  let n: any;
  return ((s as any)[7] as any) !== (a as any) || ((s as any)[8] as any) !== (c as any) ? (n = ((d as any).jsxs as any)("header", {
    className: t,
    children: [a, c]
  }), (s as any)[7] = a, (s as any)[8] = c, (s as any)[9] = n) : n = (s as any)[9], n;
}
function z(this: any, g: any): any {
  (z as any).d = 1230;
  const s: any = ((y as any).c as any)(17),
    {
      title: l,
      headingId: k,
      trailing: f,
      isTitleVisible: r,
      backLabel: i,
      onBack: t
    }: any = g,
    {
      _: e
    }: any = (w as any)();
  let a: any, c: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = (b as any)("sand-settings-detail-bar", "sand-9f619 sand-rvj5dj sand-37c5m6 sand-6s0dn4 sand-sdox4t sand-889kno sand-2vl965 sand-1a8lsjc sand-e2zdcy"), c = {
    className: "sand-1lqcxt8 sand-euugli"
  }, (s as any)[0] = a, (s as any)[1] = c) : (a = (s as any)[0], c = (s as any)[1]);
  let n: any;
  ((s as any)[2] as any) !== (e as any) || ((s as any)[3] as any) !== (i as any) || ((s as any)[4] as any) !== (t as any) ? (n = ((d as any).jsx as any)("div", {
    ...c,
    children: (i as any) == (null as any) ? ((d as any).jsx as any)(T, {
      "aria-label": (e as any)({
        id: "iH8pgl"
      }),
      icon: "chevron-left",
      onClick: t,
      shape: "circle",
      size: "md",
      variant: "ghost"
    }) : ((d as any).jsxs as any)("button", {
      onClick: t,
      type: "button",
      ...(j as any)((v as any).body2, (u as any).backLabelButton),
      children: [((d as any).jsx as any)(N, {
        "aria-hidden": !0,
        name: "chevron-left",
        size: "lg"
      }), ((d as any).jsx as any)("span", {
        className: "sand-b3r6kr sand-lyipyv sand-uxw1ft",
        children: i
      })]
    })
  }), (s as any)[2] = e, (s as any)[3] = i, (s as any)[4] = t, (s as any)[5] = n) : n = (s as any)[5];
  let o: any;
  ((s as any)[6] as any) !== (k as any) || ((s as any)[7] as any) !== (r as any) || ((s as any)[8] as any) !== (l as any) ? (o = (l as any) == (null as any) ? null : ((d as any).jsx as any)("h3", {
    "aria-hidden": (r as any) === (!1 as any) || void 0,
    className: (b as any)(((j as any)((v as any).body1, (u as any).detailTitle, (r as any) != (null as any) && (u as any).detailTitleFading, (r as any) === (!1 as any) && (u as any).detailTitleHidden) as any).className),
    id: k,
    children: l
  }), (s as any)[6] = k, (s as any)[7] = r, (s as any)[8] = l, (s as any)[9] = o) : o = (s as any)[9];
  let h: any;
  ((s as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = {
    className: "sand-78zum5 sand-6s0dn4 sand-1qab1bc sand-euugli"
  }, (s as any)[10] = h) : h = (s as any)[10];
  const x: any = f ?? null;
  let m: any;
  ((s as any)[11] as any) !== (x as any) ? (m = ((d as any).jsx as any)("div", {
    ...h,
    children: x
  }), (s as any)[11] = x, (s as any)[12] = m) : m = (s as any)[12];
  let p: any;
  return ((s as any)[13] as any) !== (n as any) || ((s as any)[14] as any) !== (o as any) || ((s as any)[15] as any) !== (m as any) ? (p = ((d as any).jsxs as any)("div", {
    className: a,
    children: [n, o, m]
  }), (s as any)[13] = n, (s as any)[14] = o, (s as any)[15] = m, (s as any)[16] = p) : p = (s as any)[16], p;
}
export { q as S, z as a };
//# debugId=33c5a903-9877-457f-b55b-89aa240b524a
