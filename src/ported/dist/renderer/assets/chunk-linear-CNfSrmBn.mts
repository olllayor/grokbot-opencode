declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "b4ef3c5d-828f-4b50-baa4-6bd9dda449e8", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-b4ef3c5d-828f-4b50-baa4-6bd9dda449e8");
  } catch (e: any) {}
} as any)();
import { b9 as j, ba as p, bb as w, bc as q, bd as k } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { i as D } from "./chunk-init-Gi6I4Gst.js";
import { e as g, f as F, a as z, b as B } from "./chunk-defaultLocale-pEppTWzK.js";
function M(this: any, n: any, r: any): any {
  return (n as any) == (null as any) || (r as any) == (null as any) ? NaN : (n as any) < (r as any) ? -1 : (n as any) > (r as any) ? 1 : (n as any) >= (r as any) ? 0 : NaN;
}
function I(this: any, n: any, r: any): any {
  return (n as any) == (null as any) || (r as any) == (null as any) ? NaN : (r as any) < (n as any) ? -1 : (r as any) > (n as any) ? 1 : (r as any) >= (n as any) ? 0 : NaN;
}
function R(this: any, n: any): any {
  let r: any, t: any, e: any;
  ((n as any).length as any) !== (2 as any) ? (r = M, t = (o: any, c: any): any => (M as any)((n as any)(o), c), e = (o: any, c: any): any => ((n as any)(o) as any) - (c as any)) : (r = (n as any) === (M as any) || (n as any) === (I as any) ? n : P, t = n, e = n);
  function u(this: any, o: any, c: any, i: any = 0, h: any = (o as any).length): any {
    if ((i as any) < (h as any)) {
      if (((r as any)(c, c) as any) !== (0 as any)) return h;
      do {
        const l: any = ((i as any) + (h as any) as any) >>> (1 as any);
        ((t as any)((o as any)[l], c) as any) < (0 as any) ? i = (l as any) + (1 as any) : h = l;
      } while ((i as any) < (h as any));
    }
    return i;
  }
  function f(this: any, o: any, c: any, i: any = 0, h: any = (o as any).length): any {
    if ((i as any) < (h as any)) {
      if (((r as any)(c, c) as any) !== (0 as any)) return h;
      do {
        const l: any = ((i as any) + (h as any) as any) >>> (1 as any);
        ((t as any)((o as any)[l], c) as any) <= (0 as any) ? i = (l as any) + (1 as any) : h = l;
      } while ((i as any) < (h as any));
    }
    return i;
  }
  function a(this: any, o: any, c: any, i: any = 0, h: any = (o as any).length): any {
    const l: any = (u as any)(o, c, i, (h as any) - (1 as any));
    return (l as any) > (i as any) && ((e as any)((o as any)[(l as any) - (1 as any)], c) as any) > (-(e as any)((o as any)[l], c) as any) ? (l as any) - (1 as any) : l;
  }
  return {
    left: u,
    center: a,
    right: f
  };
}
function P(this: any): any {
  return 0;
}
function V(this: any, n: any): any {
  return (n as any) === (null as any) ? NaN : +n;
}
const $: any = (R as any)(M),
  x: any = ($ as any).right;
((R as any)(V) as any).center;
const O: any = ((Math as any).sqrt as any)(50),
  T: any = ((Math as any).sqrt as any)(10),
  C: any = ((Math as any).sqrt as any)(2);
function v(this: any, n: any, r: any, t: any): any {
  const e: any = ((r as any) - (n as any) as any) / (((Math as any).max as any)(0, t) as any),
    u: any = ((Math as any).floor as any)(((Math as any).log10 as any)(e)),
    f: any = (e as any) / (((Math as any).pow as any)(10, u) as any),
    a: any = (f as any) >= (O as any) ? 10 : (f as any) >= (T as any) ? 5 : (f as any) >= (C as any) ? 2 : 1;
  let o: any, c: any, i: any;
  return (u as any) < (0 as any) ? (i = (((Math as any).pow as any)(10, -u) as any) / (a as any), o = ((Math as any).round as any)((n as any) * (i as any)), c = ((Math as any).round as any)((r as any) * (i as any)), ((o as any) / (i as any) as any) < (n as any) && ++o, ((c as any) / (i as any) as any) > (r as any) && --c, i = -i) : (i = (((Math as any).pow as any)(10, u) as any) * (a as any), o = ((Math as any).round as any)((n as any) / (i as any)), c = ((Math as any).round as any)((r as any) / (i as any)), ((o as any) * (i as any) as any) < (n as any) && ++o, ((c as any) * (i as any) as any) > (r as any) && --c), (c as any) < (o as any) && (.5 as any) <= (t as any) && (t as any) < (2 as any) ? (v as any)(n, r, (t as any) * (2 as any)) : [o, c, i];
}
function E(this: any, n: any, r: any, t: any): any {
  if (r = +r, n = +n, t = +t, !((t as any) > (0 as any))) return [];
  if ((n as any) === (r as any)) return [n];
  const e: any = (r as any) < (n as any),
    [u, f, a]: any = e ? (v as any)(r, n, t) : (v as any)(n, r, t);
  if (!((f as any) >= (u as any))) return [];
  const o: any = ((f as any) - (u as any) as any) + (1 as any),
    c: any = new (Array as any)(o);
  if (e) {
    if ((a as any) < (0 as any)) for (let i: any = 0; (i as any) < (o as any); ++i) (c as any)[i] = ((f as any) - (i as any) as any) / (-a as any);else for (let i: any = 0; (i as any) < (o as any); ++i) (c as any)[i] = ((f as any) - (i as any) as any) * (a as any);
  } else if ((a as any) < (0 as any)) for (let i: any = 0; (i as any) < (o as any); ++i) (c as any)[i] = ((u as any) + (i as any) as any) / (-a as any);else for (let i: any = 0; (i as any) < (o as any); ++i) (c as any)[i] = ((u as any) + (i as any) as any) * (a as any);
  return c;
}
function y(this: any, n: any, r: any, t: any): any {
  return r = +r, n = +n, t = +t, ((v as any)(n, r, t) as any)[2];
}
function G(this: any, n: any, r: any, t: any): any {
  r = +r, n = +n, t = +t;
  const e: any = (r as any) < (n as any),
    u: any = e ? (y as any)(r, n, t) : (y as any)(n, r, t);
  return ((e ? -1 : 1) as any) * (((u as any) < (0 as any) ? (1 as any) / (-u as any) : u) as any);
}
function H(this: any, n: any, r: any): any {
  r || (r = []);
  var t: any = n ? ((Math as any).min as any)((r as any).length, (n as any).length) : 0,
    e: any = ((r as any).slice as any)(),
    u: any;
  return function (this: any, f: any): any {
    for (u = 0; (u as any) < (t as any); ++u) (e as any)[u] = (((n as any)[u] as any) * ((1 as any) - (f as any) as any) as any) + (((r as any)[u] as any) * (f as any) as any);
    return e;
  };
}
function J(this: any, n: any): any {
  return ((ArrayBuffer as any).isView as any)(n) && !(n instanceof DataView);
}
function K(this: any, n: any, r: any): any {
  var t: any = r ? (r as any).length : 0,
    e: any = n ? ((Math as any).min as any)(t, (n as any).length) : 0,
    u: any = new (Array as any)(e),
    f: any = new (Array as any)(t),
    a: any;
  for (a = 0; (a as any) < (e as any); ++a) (u as any)[a] = (N as any)((n as any)[a], (r as any)[a]);
  for (; (a as any) < (t as any); ++a) (f as any)[a] = (r as any)[a];
  return function (this: any, o: any): any {
    for (a = 0; (a as any) < (e as any); ++a) (f as any)[a] = ((u as any)[a] as any)(o);
    return f;
  };
}
function L(this: any, n: any, r: any): any {
  var t: any = new (Date as any)();
  return n = +n, r = +r, function (this: any, e: any): any {
    return ((t as any).setTime as any)(((n as any) * ((1 as any) - (e as any) as any) as any) + ((r as any) * (e as any) as any)), t;
  };
}
function Q(this: any, n: any, r: any): any {
  var t: any = {},
    e: any = {},
    u: any;
  ((n as any) === (null as any) || (typeof n as any) != ("object" as any)) && (n = {}), ((r as any) === (null as any) || (typeof r as any) != ("object" as any)) && (r = {});
  for (u in r) u in n ? (t as any)[u] = (N as any)((n as any)[u], (r as any)[u]) : (e as any)[u] = (r as any)[u];
  return function (this: any, f: any): any {
    for (u in t) (e as any)[u] = ((t as any)[u] as any)(f);
    return e;
  };
}
function N(this: any, n: any, r: any): any {
  var t: any = typeof r,
    e: any;
  return (r as any) == (null as any) || (t as any) === ("boolean" as any) ? (j as any)(r) : (((t as any) === ("number" as any) ? p : (t as any) === ("string" as any) ? (e = (k as any)(r)) ? (r = e, w) : q : r instanceof k ? w : r instanceof Date ? L : (J as any)(r) ? H : ((Array as any).isArray as any)(r) ? K : (typeof (r as any).valueOf as any) != ("function" as any) && (typeof (r as any).toString as any) != ("function" as any) || (isNaN as any)(r) ? Q : p) as any)(n, r);
}
function U(this: any, n: any, r: any): any {
  return n = +n, r = +r, function (this: any, t: any): any {
    return ((Math as any).round as any)(((n as any) * ((1 as any) - (t as any) as any) as any) + ((r as any) * (t as any) as any));
  };
}
function W(this: any, n: any): any {
  return ((Math as any).max as any)(0, -(g as any)(((Math as any).abs as any)(n)));
}
function X(this: any, n: any, r: any): any {
  return ((Math as any).max as any)(0, ((((Math as any).max as any)(-8, ((Math as any).min as any)(8, ((Math as any).floor as any)(((g as any)(r) as any) / (3 as any)))) as any) * (3 as any) as any) - ((g as any)(((Math as any).abs as any)(n)) as any));
}
function Y(this: any, n: any, r: any): any {
  return n = ((Math as any).abs as any)(n), r = (((Math as any).abs as any)(r) as any) - (n as any), (((Math as any).max as any)(0, ((g as any)(r) as any) - ((g as any)(n) as any)) as any) + (1 as any);
}
function Z(this: any, n: any): any {
  return function (this: any): any {
    return n;
  };
}
function _(this: any, n: any): any {
  return +n;
}
var A: any = [0, 1];
function m(this: any, n: any): any {
  return n;
}
function d(this: any, n: any, r: any): any {
  return (r -= n = +n) ? function (this: any, t: any): any {
    return ((t as any) - (n as any) as any) / (r as any);
  } : (Z as any)((isNaN as any)(r) ? NaN : .5);
}
function b(this: any, n: any, r: any): any {
  var t: any;
  return (n as any) > (r as any) && (t = n, n = r, r = t), function (this: any, e: any): any {
    return ((Math as any).max as any)(n, ((Math as any).min as any)(r, e));
  };
}
function nn(this: any, n: any, r: any, t: any): any {
  var e: any = (n as any)[0],
    u: any = (n as any)[1],
    f: any = (r as any)[0],
    a: any = (r as any)[1];
  return (u as any) < (e as any) ? (e = (d as any)(u, e), f = (t as any)(a, f)) : (e = (d as any)(e, u), f = (t as any)(f, a)), function (this: any, o: any): any {
    return (f as any)((e as any)(o));
  };
}
function rn(this: any, n: any, r: any, t: any): any {
  var e: any = (((Math as any).min as any)((n as any).length, (r as any).length) as any) - (1 as any),
    u: any = new (Array as any)(e),
    f: any = new (Array as any)(e),
    a: any = -1;
  for (((n as any)[e] as any) < ((n as any)[0] as any) && (n = ((((n as any).slice as any)() as any).reverse as any)(), r = ((((r as any).slice as any)() as any).reverse as any)()); (++a as any) < (e as any);) (u as any)[a] = (d as any)((n as any)[a], (n as any)[(a as any) + (1 as any)]), (f as any)[a] = (t as any)((r as any)[a], (r as any)[(a as any) + (1 as any)]);
  return function (this: any, o: any): any {
    var c: any = ((x as any)(n, o, 1, e) as any) - (1 as any);
    return ((f as any)[c] as any)(((u as any)[c] as any)(o));
  };
}
function en(this: any, n: any, r: any): any {
  return ((((((((((r as any).domain as any)(((n as any).domain as any)()) as any).range as any)(((n as any).range as any)()) as any).interpolate as any)(((n as any).interpolate as any)()) as any).clamp as any)(((n as any).clamp as any)()) as any).unknown as any)(((n as any).unknown as any)());
}
function tn(this: any): any {
  var n: any = A,
    r: any = A,
    t: any = N,
    e: any,
    u: any,
    f: any,
    a: any = m,
    o: any,
    c: any,
    i: any;
  function h(this: any): any {
    var s: any = ((Math as any).min as any)((n as any).length, (r as any).length);
    return (a as any) !== (m as any) && (a = (b as any)((n as any)[0], (n as any)[(s as any) - (1 as any)])), o = (s as any) > (2 as any) ? rn : nn, c = i = null, l;
  }
  function l(this: any, s: any): any {
    return (s as any) == (null as any) || (isNaN as any)(s = +s) ? f : ((c || (c = (o as any)(((n as any).map as any)(e), r, t))) as any)((e as any)((a as any)(s)));
  }
  return (l as any).invert = function (this: any, s: any): any {
    return (a as any)((u as any)(((i || (i = (o as any)(r, ((n as any).map as any)(e), p))) as any)(s)));
  }, (l as any).domain = function (this: any, s: any): any {
    return (arguments as any).length ? (n = ((Array as any).from as any)(s, _), (h as any)()) : ((n as any).slice as any)();
  }, (l as any).range = function (this: any, s: any): any {
    return (arguments as any).length ? (r = ((Array as any).from as any)(s), (h as any)()) : ((r as any).slice as any)();
  }, (l as any).rangeRound = function (this: any, s: any): any {
    return r = ((Array as any).from as any)(s), t = U, (h as any)();
  }, (l as any).clamp = function (this: any, s: any): any {
    return (arguments as any).length ? (a = s ? !0 : m, (h as any)()) : (a as any) !== (m as any);
  }, (l as any).interpolate = function (this: any, s: any): any {
    return (arguments as any).length ? (t = s, (h as any)()) : t;
  }, (l as any).unknown = function (this: any, s: any): any {
    return (arguments as any).length ? (f = s, l) : f;
  }, function (this: any, s: any, S: any): any {
    return e = s, u = S, (h as any)();
  };
}
function un(this: any): any {
  return ((tn as any)() as any)(m, m);
}
function an(this: any, n: any, r: any, t: any, e: any): any {
  var u: any = (G as any)(n, r, t),
    f: any;
  switch (e = (F as any)(e ?? ",f"), (e as any).type) {
    case "s":
      {
        var a: any = ((Math as any).max as any)(((Math as any).abs as any)(n), ((Math as any).abs as any)(r));
        return ((e as any).precision as any) == (null as any) && !(isNaN as any)(f = (X as any)(u, a)) && ((e as any).precision = f), (z as any)(e, a);
      }
    case "":
    case "e":
    case "g":
    case "p":
    case "r":
      {
        ((e as any).precision as any) == (null as any) && !(isNaN as any)(f = (Y as any)(u, ((Math as any).max as any)(((Math as any).abs as any)(n), ((Math as any).abs as any)(r)))) && ((e as any).precision = (f as any) - ((((e as any).type as any) === ("e" as any)) as any));
        break;
      }
    case "f":
    case "%":
      {
        ((e as any).precision as any) == (null as any) && !(isNaN as any)(f = (W as any)(u)) && ((e as any).precision = (f as any) - (((((e as any).type as any) === ("%" as any)) as any) * (2 as any) as any));
        break;
      }
  }
  return (B as any)(e);
}
function on(this: any, n: any): any {
  var r: any = (n as any).domain;
  return (n as any).ticks = function (this: any, t: any): any {
    var e: any = (r as any)();
    return (E as any)((e as any)[0], (e as any)[((e as any).length as any) - (1 as any)], t ?? 10);
  }, (n as any).tickFormat = function (this: any, t: any, e: any): any {
    var u: any = (r as any)();
    return (an as any)((u as any)[0], (u as any)[((u as any).length as any) - (1 as any)], t ?? 10, e);
  }, (n as any).nice = function (this: any, t: any): any {
    (t as any) == (null as any) && (t = 10);
    var e: any = (r as any)(),
      u: any = 0,
      f: any = ((e as any).length as any) - (1 as any),
      a: any = (e as any)[u],
      o: any = (e as any)[f],
      c: any,
      i: any,
      h: any = 10;
    for ((o as any) < (a as any) && (i = a, a = o, o = i, i = u, u = f, f = i); (h-- as any) > (0 as any);) {
      if (i = (y as any)(a, o, t), (i as any) === (c as any)) return (e as any)[u] = a, (e as any)[f] = o, (r as any)(e);
      if ((i as any) > (0 as any)) a = (((Math as any).floor as any)((a as any) / (i as any)) as any) * (i as any), o = (((Math as any).ceil as any)((o as any) / (i as any)) as any) * (i as any);else if ((i as any) < (0 as any)) a = (((Math as any).ceil as any)((a as any) * (i as any)) as any) / (i as any), o = (((Math as any).floor as any)((o as any) * (i as any)) as any) / (i as any);else break;
      c = i;
    }
    return n;
  }, n;
}
function fn(this: any): any {
  var n: any = (un as any)();
  return (n as any).copy = function (this: any): any {
    return (en as any)(n, (fn as any)());
  }, ((D as any).apply as any)(n, arguments), (on as any)(n);
}
export { en as a, R as b, un as c, fn as l, G as t };
//# debugId=b4ef3c5d-828f-4b50-baa4-6bd9dda449e8
