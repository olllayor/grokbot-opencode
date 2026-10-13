declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "9dac7a24-6cc1-4e1f-b89d-2fbe58d5a9fa", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-9dac7a24-6cc1-4e1f-b89d-2fbe58d5a9fa");
  } catch (e: any) {}
} as any)();
import { c as m } from "./index.eager-vendor-Qbf9YA6n.js";
import { bP as p, b7 as v, bR as d } from "./index.eager-app-Cj5f8Gby.js";
function l(this: any): any {
  return (p as any)((((v as any)() as any).teamPolicy as any).snapshots);
}
function r(this: any, e: any): any {
  switch ((e as any).status) {
    case "ready":
      return (e as any).value;
    case "loading":
    case "failed":
      return (e as any).previous;
    default:
      return;
  }
}
function f(this: any, e: any): any {
  return ((r as any)(e) as any) !== (void 0 as any) || ((e as any).status as any) === ("empty" as any) || ((e as any).status as any) === ("unavailable" as any);
}
function E(this: any): any {
  return (r as any)((l as any)())?.localToolPermissionCeiling;
}
function y(this: any): any {
  const e: any = ((m as any).c as any)(2),
    o: any = (l as any)();
  let t: any;
  return ((e as any)[0] as any) !== (o as any) ? (t = (f as any)(o), (e as any)[0] = o, (e as any)[1] = t) : t = (e as any)[1], t;
}
function P(this: any): any {
  const e: any = (l as any)(),
    o: any = (r as any)(e);
  return (o as any) === (void 0 as any) ? (f as any)(e) ? "free" : "unknown" : (o as any).localEgressAllowed ? "free" : "held";
}
function w(this: any): any {
  const e: any = ((m as any).c as any)(7),
    o: any = (l as any)();
  let t: any;
  ((e as any)[0] as any) !== (o as any) ? (t = (r as any)(o), (e as any)[0] = o, (e as any)[1] = t) : t = (e as any)[1];
  const s: any = t;
  if ((s as any) === (void 0 as any)) {
    const a: any = (f as any)(o) ? "free" : "unknown";
    let i: any;
    return ((e as any)[2] as any) !== (a as any) ? (i = {
      lock: a,
      rules: d
    }, (e as any)[2] = a, (e as any)[3] = i) : i = (e as any)[3], i;
  }
  const u: any = (s as any).autoReviewTeamEnforced ? "held" : "free",
    c: any = (s as any).autoReviewTeamEnforced ? (s as any).autoReviewTeamRules : d;
  let n: any;
  return ((e as any)[4] as any) !== (u as any) || ((e as any)[5] as any) !== (c as any) ? (n = {
    lock: u,
    rules: c
  }, (e as any)[4] = u, (e as any)[5] = c, (e as any)[6] = n) : n = (e as any)[6], n;
}
export { y as a, P as b, w as c, E as u };
//# debugId=9dac7a24-6cc1-4e1f-b89d-2fbe58d5a9fa
