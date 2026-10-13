declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "72be5991-2fd8-4d7b-b833-344599335df4", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-72be5991-2fd8-4d7b-b833-344599335df4");
  } catch (e: any) {}
} as any)();
import { i as a } from "./chunk-init-Gi6I4Gst.js";
class o extends (Map as any) {
  [key: string]: any;
  constructor(n: any, t: any = h) {
    if (super(), ((Object as any).defineProperties as any)(this, {
      _intern: {
        value: new (Map as any)()
      },
      _key: {
        value: t
      }
    }), (n as any) != (null as any)) for (const [r, s] of n) ((this as any).set as any)(r, s);
  }
  get(n: any): any {
    return (super.get as any)((c as any)(this, n));
  }
  has(n: any): any {
    return (super.has as any)((c as any)(this, n));
  }
  set(n: any, t: any): any {
    return (super.set as any)((p as any)(this, n), t);
  }
  delete(n: any): any {
    return (super.delete as any)((g as any)(this, n));
  }
}
function c(this: any, {
  _intern: e,
  _key: n
}: any, t: any): any {
  const r: any = (n as any)(t);
  return ((e as any).has as any)(r) ? ((e as any).get as any)(r) : t;
}
function p(this: any, {
  _intern: e,
  _key: n
}: any, t: any): any {
  const r: any = (n as any)(t);
  return ((e as any).has as any)(r) ? ((e as any).get as any)(r) : (((e as any).set as any)(r, t), t);
}
function g(this: any, {
  _intern: e,
  _key: n
}: any, t: any): any {
  const r: any = (n as any)(t);
  return ((e as any).has as any)(r) && (t = ((e as any).get as any)(t), ((e as any).delete as any)(r)), t;
}
function h(this: any, e: any): any {
  return (e as any) !== (null as any) && (typeof e as any) == ("object" as any) ? ((e as any).valueOf as any)() : e;
}
const f: any = (Symbol as any)("implicit");
function l(this: any): any {
  var e: any = new (o as any)(),
    n: any = [],
    t: any = [],
    r: any = f;
  function s(this: any, i: any): any {
    let u: any = ((e as any).get as any)(i);
    if ((u as any) === (void 0 as any)) {
      if ((r as any) !== (f as any)) return r;
      ((e as any).set as any)(i, u = (((n as any).push as any)(i) as any) - (1 as any));
    }
    return (t as any)[(u as any) % ((t as any).length as any)];
  }
  return (s as any).domain = function (this: any, i: any): any {
    if (!(arguments as any).length) return ((n as any).slice as any)();
    n = [], e = new (o as any)();
    for (const u of i) ((e as any).has as any)(u) || ((e as any).set as any)(u, (((n as any).push as any)(u) as any) - (1 as any));
    return s;
  }, (s as any).range = function (this: any, i: any): any {
    return (arguments as any).length ? (t = ((Array as any).from as any)(i), s) : ((t as any).slice as any)();
  }, (s as any).unknown = function (this: any, i: any): any {
    return (arguments as any).length ? (r = i, s) : r;
  }, (s as any).copy = function (this: any): any {
    return (((l as any)(n, t) as any).unknown as any)(r);
  }, ((a as any).apply as any)(s, arguments), s;
}
export { l as o };
//# debugId=72be5991-2fd8-4d7b-b833-344599335df4
