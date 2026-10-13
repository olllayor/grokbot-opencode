declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "eb2e3d8f-e894-474a-99e5-111e01f5a5a3", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-eb2e3d8f-e894-474a-99e5-111e01f5a5a3");
  } catch (e: any) {}
} as any)();
import { c as r, p as f, j as i } from "./index.eager-vendor-Qbf9YA6n.js";
import { a_ as m, b0 as b } from "./index.eager-app-Cj5f8Gby.js";
const x: any = {
    control: {
      k1xSpc: "sand-1lliihq",
      kzQI83: "sand-1iyjqo2",
      kmuXW: "sand-s83m0k",
      kCS8Yb: "sand-1r8uery",
      k7Eaqz: "sand-euugli",
      kB7OPa: "sand-9f619",
      kLKAdn: "sand-123j3cw",
      kwRFfy: "sand-2vl965",
      kGO01o: "sand-s9asl8",
      kZCmMZ: "sand-e2zdcy",
      ksu8eU: "sand-ng3xce",
      kaIpWk: "sand-1qmwy7c",
      kWkggS: "sand-jbqb8w",
      kMwMTN: "sand-tyxrsu",
      kMv6JI: "sand-jb2p0i",
      kGuDYH: "sand-1qlqyl8",
      kLWn49: "sand-15bjb6t",
      kb6lSQ: "sand-4gjf66",
      k3XXqK: "sand-1t137rt",
      k8Qsv1: "sand-1h7ufjq",
      $$css: !0
    }
  },
  u: any = {
    root: {
      k1xSpc: "sand-78zum5",
      kGNEyG: "sand-1qjc9v5",
      k7Eaqz: "sand-euugli",
      kAzted: "sand-21xpn4",
      kB7OPa: "sand-9f619",
      kMzoRj: "sand-mkeg23",
      ksu8eU: "sand-1y0btm7",
      kVAM5u: "sand-fnq37j sand-5obw34",
      kaIpWk: "sand-1qmwy7c",
      kWkggS: "sand-vvtkfd",
      k1ekBW: "sand-shfolx",
      kIyJzY: "sand-1firant",
      kAMwcw: "sand-wji4o3",
      $$css: !0
    },
    label: {
      kMwMTN: "sand-1o0liin",
      $$css: !0
    }
  };
function y(this: any, o: any): any {
  (y as any).d = 1393;
  const s: any = ((r as any).c as any)(5),
    {
      children: n,
      style: e
    }: any = o;
  let a: any;
  ((s as any)[0] as any) !== (e as any) ? (a = (f as any)((u as any).root, (m as any).body1, e), (s as any)[0] = e, (s as any)[1] = a) : a = (s as any)[1];
  let d: any;
  return ((s as any)[2] as any) !== (n as any) || ((s as any)[3] as any) !== (a as any) ? (d = ((i as any).jsx as any)("div", {
    ...a,
    children: n
  }), (s as any)[2] = n, (s as any)[3] = a, (s as any)[4] = d) : d = (s as any)[4], d;
}
function j(this: any, o: any): any {
  (j as any).d = 1394;
  const s: any = ((r as any).c as any)(7),
    {
      label: n,
      isRequired: e,
      children: a
    }: any = o,
    d: any = (e as any) === (void 0 as any) ? !1 : e;
  let l: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = {
    className: "sand-78zum5 sand-dt5ytf sand-1jnr06f sand-euugli"
  }, (s as any)[0] = l) : l = (s as any)[0];
  const c: any = d ? " *" : null;
  let t: any;
  ((s as any)[1] as any) !== (n as any) || ((s as any)[2] as any) !== (c as any) ? (t = ((i as any).jsxs as any)(b, {
    level: "body2",
    style: (u as any).label,
    children: [n, c]
  }), (s as any)[1] = n, (s as any)[2] = c, (s as any)[3] = t) : t = (s as any)[3];
  let k: any;
  return ((s as any)[4] as any) !== (a as any) || ((s as any)[5] as any) !== (t as any) ? (k = ((i as any).jsxs as any)("label", {
    ...l,
    children: [t, a]
  }), (s as any)[4] = a, (s as any)[5] = t, (s as any)[6] = k) : k = (s as any)[6], k;
}
export { y as C, j as a, x as c };
//# debugId=eb2e3d8f-e894-474a-99e5-111e01f5a5a3
