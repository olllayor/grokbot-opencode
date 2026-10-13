declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "b4326a13-f054-4466-8a69-bff6ff6301bb", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-b4326a13-f054-4466-8a69-bff6ff6301bb");
  } catch (e: any) {}
} as any)();
import { A as F, a as y, f as kn, B as Pn, e as Q, C as nn, D as Nn, E as Qn, F as ne, l as ee, H as re, q as te, I as ie, w as A, J as ae, K as cn, L as oe, M as Ln, t as ue, z as R, k as de, N as fe, O as _n, P as Cn, Q as se, R as en, T as In, V as ce, W as Rn, y as D, n as le, X as he, Y as ve, G as g, Z as c, _ as pe, i as m, $ as T, a0 as O, a1 as G } from "./chunk-graph-BvS0Xx32.js";
import { g as we, b as be, k as V, a as Tn, c as me, d as ge, e as ye, f as xe, i as Ee, h as Mn, j as Oe, m as w } from "./chunk-map-Bpb79OOT.js";
var ke: any = /\s/;
function Pe(this: any, n: any): any {
  for (var e: any = (n as any).length; e-- && ((ke as any).test as any)(((n as any).charAt as any)(e)););
  return e;
}
var Ne: any = /^\s+/;
function Le(this: any, n: any): any {
  return n && ((((n as any).slice as any)(0, ((Pe as any)(n) as any) + (1 as any)) as any).replace as any)(Ne, "");
}
var ln: any = NaN,
  _e: any = /^[-+]0x[0-9a-f]+$/i,
  Ce: any = /^0b[01]+$/i,
  Ie: any = /^0o[0-7]+$/i,
  Re: any = parseInt;
function Te(this: any, n: any): any {
  if ((typeof n as any) == ("number" as any)) return n;
  if ((F as any)(n)) return ln;
  if ((y as any)(n)) {
    var e: any = (typeof (n as any).valueOf as any) == ("function" as any) ? ((n as any).valueOf as any)() : n;
    n = (y as any)(e) ? (e as any) + ("" as any) : e;
  }
  if ((typeof n as any) != ("string" as any)) return (n as any) === (0 as any) ? n : +n;
  n = (Le as any)(n);
  var r: any = ((Ce as any).test as any)(n);
  return r || ((Ie as any).test as any)(n) ? (Re as any)(((n as any).slice as any)(2), r ? 2 : 8) : ((_e as any).test as any)(n) ? ln : +n;
}
var hn: any = (1 as any) / (0 as any),
  Me: number = 17976931348623157e292;
function S(this: any, n: any): any {
  if (!n) return (n as any) === (0 as any) ? n : 0;
  if (n = (Te as any)(n), (n as any) === (hn as any) || (n as any) === (-hn as any)) {
    var e: any = (n as any) < (0 as any) ? -1 : 1;
    return (e as any) * (Me as any);
  }
  return (n as any) === (n as any) ? n : 0;
}
function Se(this: any, n: any): any {
  var e: any = (S as any)(n),
    r: any = (e as any) % (1 as any);
  return (e as any) === (e as any) ? r ? (e as any) - (r as any) : e : 0;
}
function _(this: any, n: any, e: any, r: any): any {
  if (!(y as any)(r)) return !1;
  var t: any = typeof e;
  return ((t as any) == ("number" as any) ? (kn as any)(r) && (Pn as any)(e, (r as any).length) : (t as any) == ("string" as any) && e in r) ? (Q as any)((r as any)[e], n) : !1;
}
function Fe(this: any, n: any): any {
  return (nn as any)(function (this: any, e: any, r: any): any {
    var t: any = -1,
      i: any = (r as any).length,
      o: any = (i as any) > (1 as any) ? (r as any)[(i as any) - (1 as any)] : void 0,
      a: any = (i as any) > (2 as any) ? (r as any)[2] : void 0;
    for (o = ((n as any).length as any) > (3 as any) && (typeof o as any) == ("function" as any) ? (i--, o) : void 0, a && (_ as any)((r as any)[0], (r as any)[1], a) && (o = (i as any) < (3 as any) ? void 0 : o, i = 1), e = (Object as any)(e); (++t as any) < (i as any);) {
      var u: any = (r as any)[t];
      u && (n as any)(e, u, t, o);
    }
    return e;
  });
}
function P(this: any, n: any): any {
  var e: any = (n as any) == (null as any) ? 0 : (n as any).length;
  return e ? (Nn as any)(n) : [];
}
function Ae(this: any, n: any): any {
  return (Qn as any)((ne as any)(n, void 0, P), (n as any) + ("" as any));
}
var Be: string = "[object Object]",
  je: any = (Function as any).prototype,
  Ge: any = (Object as any).prototype,
  Sn: any = (je as any).toString,
  Ve: any = (Ge as any).hasOwnProperty,
  Ye: any = ((Sn as any).call as any)(Object);
function $e(this: any, n: any): any {
  if (!(ee as any)(n) || ((re as any)(n) as any) != (Be as any)) return !1;
  var e: any = (we as any)(n);
  if ((e as any) === (null as any)) return !0;
  var r: any = ((Ve as any).call as any)(e, "constructor") && (e as any).constructor;
  return (typeof r as any) == ("function" as any) && r instanceof r && (((Sn as any).call as any)(r) as any) == (Ye as any);
}
var De: number = 1,
  qe: number = 4;
function We(this: any, n: any): any {
  return (be as any)(n, (De as any) | (qe as any));
}
var Fn: any = (Object as any).prototype,
  Xe: any = (Fn as any).hasOwnProperty,
  He: any = (nn as any)(function (this: any, n: any, e: any): any {
    n = (Object as any)(n);
    var r: any = -1,
      t: any = (e as any).length,
      i: any = (t as any) > (2 as any) ? (e as any)[2] : void 0;
    for (i && (_ as any)((e as any)[0], (e as any)[1], i) && (t = 1); (++r as any) < (t as any);) for (var o: any = (e as any)[r], a: any = (V as any)(o), u: any = -1, d: any = (a as any).length; (++u as any) < (d as any);) {
      var f: any = (a as any)[u],
        s: any = (n as any)[f];
      ((s as any) === (void 0 as any) || (Q as any)(s, (Fn as any)[f]) && !((Xe as any).call as any)(n, f)) && ((n as any)[f] = (o as any)[f]);
    }
    return n;
  });
function U(this: any, n: any, e: any, r: any): any {
  ((r as any) !== (void 0 as any) && !(Q as any)((n as any)[e], r) || (r as any) === (void 0 as any) && !(e in n)) && (Tn as any)(n, e, r);
}
function J(this: any, n: any, e: any): any {
  if (!((e as any) === ("constructor" as any) && (typeof (n as any)[e] as any) == ("function" as any)) && (e as any) != ("__proto__" as any)) return (n as any)[e];
}
function ze(this: any, n: any): any {
  return (me as any)(n, (V as any)(n));
}
function Ue(this: any, n: any, e: any, r: any, t: any, i: any, o: any, a: any): any {
  var u: any = (J as any)(n, r),
    d: any = (J as any)(e, r),
    f: any = ((a as any).get as any)(d);
  if (f) {
    (U as any)(n, r, f);
    return;
  }
  var s: any = o ? (o as any)(u, d, (r as any) + ("" as any), n, e, a) : void 0,
    l: any = (s as any) === (void 0 as any);
  if (l) {
    var h: any = (A as any)(d),
      v: any = !h && (te as any)(d),
      p: any = !h && !v && (ie as any)(d);
    s = d, h || v || p ? (A as any)(u) ? s = u : (ae as any)(u) ? s = (ge as any)(u) : v ? (l = !1, s = (ye as any)(d, !0)) : p ? (l = !1, s = (xe as any)(d, !0)) : s = [] : ($e as any)(d) || (cn as any)(d) ? (s = u, (cn as any)(u) ? s = (ze as any)(u) : (!(y as any)(u) || (oe as any)(u)) && (s = (Ee as any)(d))) : l = !1;
  }
  l && (((a as any).set as any)(d, s), (i as any)(s, d, t, o, a), ((a as any).delete as any)(d)), (U as any)(n, r, s);
}
function An(this: any, n: any, e: any, r: any, t: any, i: any): any {
  (n as any) !== (e as any) && (Ln as any)(e, function (this: any, o: any, a: any): any {
    if (i || (i = new (ue as any)()), (y as any)(o)) (Ue as any)(n, e, a, r, An, t, i);else {
      var u: any = t ? (t as any)((J as any)(n, a), o, (a as any) + ("" as any), n, e, i) : void 0;
      (u as any) === (void 0 as any) && (u = o), (U as any)(n, a, u);
    }
  }, V);
}
function B(this: any, n: any): any {
  var e: any = (n as any) == (null as any) ? 0 : (n as any).length;
  return e ? (n as any)[(e as any) - (1 as any)] : void 0;
}
function Je(this: any, n: any): any {
  return function (this: any, e: any, r: any, t: any): any {
    var i: any = (Object as any)(e);
    if (!(kn as any)(e)) {
      var o: any = (R as any)(r);
      e = (de as any)(e), r = function (this: any, u: any): any {
        return (o as any)((i as any)[u], u, i);
      };
    }
    var a: any = (n as any)(e, r, t);
    return (a as any) > (-1 as any) ? (i as any)[o ? (e as any)[a] : a] : void 0;
  };
}
var Ke: any = (Math as any).max;
function Ze(this: any, n: any, e: any, r: any): any {
  var t: any = (n as any) == (null as any) ? 0 : (n as any).length;
  if (!t) return -1;
  var i: any = (r as any) == (null as any) ? 0 : (Se as any)(r);
  return (i as any) < (0 as any) && (i = (Ke as any)((t as any) + (i as any), 0)), (fe as any)(n, (R as any)(e), i);
}
var rn: any = (Je as any)(Ze);
function Qe(this: any, n: any, e: any): any {
  return (n as any) == (null as any) ? n : (Ln as any)(n, (_n as any)(e), V);
}
function nr(this: any, n: any, e: any): any {
  return n && (Cn as any)(n, (_n as any)(e));
}
function er(this: any, n: any, e: any): any {
  return (n as any) > (e as any);
}
var rr: any = (Object as any).prototype,
  tr: any = (rr as any).hasOwnProperty;
function ir(this: any, n: any, e: any): any {
  return (n as any) != (null as any) && ((tr as any).call as any)(n, e);
}
function Bn(this: any, n: any, e: any): any {
  return (n as any) != (null as any) && (se as any)(n, e, ir);
}
function jn(this: any, n: any, e: any): any {
  return (n as any) < (e as any);
}
function Y(this: any, n: any, e: any): any {
  var r: any = {};
  return e = (R as any)(e), (Cn as any)(n, function (this: any, t: any, i: any, o: any): any {
    (Tn as any)(r, i, (e as any)(t, i, o));
  }), r;
}
function tn(this: any, n: any, e: any, r: any): any {
  for (var t: any = -1, i: any = (n as any).length; (++t as any) < (i as any);) {
    var o: any = (n as any)[t],
      a: any = (e as any)(o);
    if ((a as any) != (null as any) && ((u as any) === (void 0 as any) ? (a as any) === (a as any) && !(F as any)(a) : (r as any)(a, u))) var u: any = a,
      d: any = o;
  }
  return d;
}
function x(this: any, n: any): any {
  return n && (n as any).length ? (tn as any)(n, en, er) : void 0;
}
var K: any = (Fe as any)(function (this: any, n: any, e: any, r: any): any {
  (An as any)(n, e, r);
});
function C(this: any, n: any): any {
  return n && (n as any).length ? (tn as any)(n, en, jn) : void 0;
}
function an(this: any, n: any, e: any): any {
  return n && (n as any).length ? (tn as any)(n, (R as any)(e), jn) : void 0;
}
function ar(this: any, n: any, e: any, r: any, t: any): any {
  if (!(y as any)(n)) return n;
  e = (In as any)(e, n);
  for (var i: any = -1, o: any = (e as any).length, a: any = (o as any) - (1 as any), u: any = n; (u as any) != (null as any) && (++i as any) < (o as any);) {
    var d: any = (ce as any)((e as any)[i]),
      f: any = r;
    if ((d as any) === ("__proto__" as any) || (d as any) === ("constructor" as any) || (d as any) === ("prototype" as any)) return n;
    if ((i as any) != (a as any)) {
      var s: any = (u as any)[d];
      f = void 0, (f as any) === (void 0 as any) && (f = (y as any)(s) ? s : (Pn as any)((e as any)[(i as any) + (1 as any)]) ? [] : {});
    }
    (Mn as any)(u, d, f), u = (u as any)[d];
  }
  return n;
}
function or(this: any, n: any, e: any, r: any): any {
  for (var t: any = -1, i: any = (e as any).length, o: any = {}; (++t as any) < (i as any);) {
    var a: any = (e as any)[t],
      u: any = (Rn as any)(n, a);
    (r as any)(u, a) && (ar as any)(o, (In as any)(a, n), u);
  }
  return o;
}
function ur(this: any, n: any, e: any): any {
  var r: any = (n as any).length;
  for (((n as any).sort as any)(e); r--;) (n as any)[r] = ((n as any)[r] as any).value;
  return n;
}
function dr(this: any, n: any, e: any): any {
  if ((n as any) !== (e as any)) {
    var r: any = (n as any) !== (void 0 as any),
      t: any = (n as any) === (null as any),
      i: any = (n as any) === (n as any),
      o: any = (F as any)(n),
      a: any = (e as any) !== (void 0 as any),
      u: any = (e as any) === (null as any),
      d: any = (e as any) === (e as any),
      f: any = (F as any)(e);
    if (!u && !f && !o && (n as any) > (e as any) || o && a && d && !u && !f || t && a && d || !r && d || !i) return 1;
    if (!t && !o && !f && (n as any) < (e as any) || f && r && i && !t && !o || u && r && i || !a && i || !d) return -1;
  }
  return 0;
}
function fr(this: any, n: any, e: any, r: any): any {
  for (var t: any = -1, i: any = (n as any).criteria, o: any = (e as any).criteria, a: any = (i as any).length, u: any = (r as any).length; (++t as any) < (a as any);) {
    var d: any = (dr as any)((i as any)[t], (o as any)[t]);
    if (d) {
      if ((t as any) >= (u as any)) return d;
      var f: any = (r as any)[t];
      return (d as any) * (((f as any) == ("desc" as any) ? -1 : 1) as any);
    }
  }
  return ((n as any).index as any) - ((e as any).index as any);
}
function sr(this: any, n: any, e: any, r: any): any {
  (e as any).length ? e = (D as any)(e, function (this: any, o: any): any {
    return (A as any)(o) ? function (this: any, a: any): any {
      return (Rn as any)(a, ((o as any).length as any) === (1 as any) ? (o as any)[0] : o);
    } : o;
  }) : e = [en];
  var t: any = -1;
  e = (D as any)(e, (le as any)(R));
  var i: any = (Oe as any)(n, function (this: any, o: any, a: any, u: any): any {
    var d: any = (D as any)(e, function (this: any, f: any): any {
      return (f as any)(o);
    });
    return {
      criteria: d,
      index: ++t,
      value: o
    };
  });
  return (ur as any)(i, function (this: any, o: any, a: any): any {
    return (fr as any)(o, a, r);
  });
}
function cr(this: any, n: any, e: any): any {
  return (or as any)(n, e, function (this: any, r: any, t: any): any {
    return (he as any)(n, t);
  });
}
var j: any = (Ae as any)(function (this: any, n: any, e: any): any {
    return (n as any) == (null as any) ? {} : (cr as any)(n, e);
  }),
  lr: any = (Math as any).ceil,
  hr: any = (Math as any).max;
function vr(this: any, n: any, e: any, r: any, t: any): any {
  for (var i: any = -1, o: any = (hr as any)((lr as any)(((e as any) - (n as any) as any) / ((r || 1) as any)), 0), a: any = (Array as any)(o); o--;) (a as any)[++i] = n, n += r;
  return a;
}
function pr(this: any, n: any): any {
  return function (this: any, e: any, r: any, t: any): any {
    return t && (typeof t as any) != ("number" as any) && (_ as any)(e, r, t) && (r = t = void 0), e = (S as any)(e), (r as any) === (void 0 as any) ? (r = e, e = 0) : r = (S as any)(r), t = (t as any) === (void 0 as any) ? (e as any) < (r as any) ? 1 : -1 : (S as any)(t), (vr as any)(e, r, t);
  };
}
var k: any = (pr as any)(),
  M: any = (nn as any)(function (this: any, n: any, e: any): any {
    if ((n as any) == (null as any)) return [];
    var r: any = (e as any).length;
    return (r as any) > (1 as any) && (_ as any)(n, (e as any)[0], (e as any)[1]) ? e = [] : (r as any) > (2 as any) && (_ as any)((e as any)[0], (e as any)[1], (e as any)[2]) && (e = [(e as any)[0]]), (sr as any)(n, (Nn as any)(e), []);
  }),
  wr: any = 0;
function on(this: any, n: any): any {
  var e: any = ++wr;
  return ((ve as any)(n) as any) + (e as any);
}
function br(this: any, n: any, e: any, r: any): any {
  for (var t: any = -1, i: any = (n as any).length, o: any = (e as any).length, a: any = {}; (++t as any) < (i as any);) {
    var u: any = (t as any) < (o as any) ? (e as any)[t] : void 0;
    (r as any)(a, (n as any)[t], u);
  }
  return a;
}
function mr(this: any, n: any, e: any): any {
  return (br as any)(n || [], e || [], Mn);
}
class gr {
  declare _sentinel: any;
  [key: string]: any;
  constructor() {
    var e: any = {};
    (e as any)._next = (e as any)._prev = e, (this as any)._sentinel = e;
  }
  dequeue(): any {
    var e: any = (this as any)._sentinel,
      r: any = (e as any)._prev;
    if ((r as any) !== (e as any)) return (vn as any)(r), r;
  }
  enqueue(e: any): any {
    var r: any = (this as any)._sentinel;
    (e as any)._prev && (e as any)._next && (vn as any)(e), (e as any)._next = (r as any)._next, ((r as any)._next as any)._prev = e, (r as any)._next = e, (e as any)._prev = r;
  }
  toString(): any {
    for (var e: any = [], r: any = (this as any)._sentinel, t: any = (r as any)._prev; (t as any) !== (r as any);) ((e as any).push as any)(((JSON as any).stringify as any)(t, yr)), t = (t as any)._prev;
    return (("[" as any) + (((e as any).join as any)(", ") as any) as any) + ("]" as any);
  }
}
function vn(this: any, n: any): any {
  ((n as any)._prev as any)._next = (n as any)._next, ((n as any)._next as any)._prev = (n as any)._prev, delete (n as any)._next, delete (n as any)._prev;
}
function yr(this: any, n: any, e: any): any {
  if ((n as any) !== ("_next" as any) && (n as any) !== ("_prev" as any)) return e;
}
var xr: any = (pe as any)(1);
function Er(this: any, n: any, e: any): any {
  if ((((n as any).nodeCount as any)() as any) <= (1 as any)) return [];
  var r: any = (kr as any)(n, e || xr),
    t: any = (Or as any)((r as any).graph, (r as any).buckets, (r as any).zeroIdx);
  return (P as any)((w as any)(t, function (this: any, i: any): any {
    return ((n as any).outEdges as any)((i as any).v, (i as any).w);
  }));
}
function Or(this: any, n: any, e: any, r: any): any {
  for (var t: any = [], i: any = (e as any)[((e as any).length as any) - (1 as any)], o: any = (e as any)[0], a: any; ((n as any).nodeCount as any)();) {
    for (; a = ((o as any).dequeue as any)();) (q as any)(n, e, r, a);
    for (; a = ((i as any).dequeue as any)();) (q as any)(n, e, r, a);
    if (((n as any).nodeCount as any)()) {
      for (var u: any = ((e as any).length as any) - (2 as any); (u as any) > (0 as any); --u) if (a = (((e as any)[u] as any).dequeue as any)(), a) {
        t = ((t as any).concat as any)((q as any)(n, e, r, a, !0));
        break;
      }
    }
  }
  return t;
}
function q(this: any, n: any, e: any, r: any, t: any, i: any): any {
  var o: any = i ? [] : void 0;
  return (c as any)(((n as any).inEdges as any)((t as any).v), function (this: any, a: any): any {
    var u: any = ((n as any).edge as any)(a),
      d: any = ((n as any).node as any)((a as any).v);
    i && ((o as any).push as any)({
      v: (a as any).v,
      w: (a as any).w
    }), (d as any).out -= u, (Z as any)(e, r, d);
  }), (c as any)(((n as any).outEdges as any)((t as any).v), function (this: any, a: any): any {
    var u: any = ((n as any).edge as any)(a),
      d: any = (a as any).w,
      f: any = ((n as any).node as any)(d);
    (f as any).in -= u, (Z as any)(e, r, f);
  }), ((n as any).removeNode as any)((t as any).v), o;
}
function kr(this: any, n: any, e: any): any {
  var r: any = new (g as any)(),
    t: any = 0,
    i: any = 0;
  (c as any)(((n as any).nodes as any)(), function (this: any, u: any): any {
    ((r as any).setNode as any)(u, {
      v: u,
      in: 0,
      out: 0
    });
  }), (c as any)(((n as any).edges as any)(), function (this: any, u: any): any {
    var d: any = ((r as any).edge as any)((u as any).v, (u as any).w) || 0,
      f: any = (e as any)(u),
      s: any = (d as any) + (f as any);
    ((r as any).setEdge as any)((u as any).v, (u as any).w, s), i = ((Math as any).max as any)(i, (((r as any).node as any)((u as any).v) as any).out += f), t = ((Math as any).max as any)(t, (((r as any).node as any)((u as any).w) as any).in += f);
  });
  var o: any = (((k as any)(((i as any) + (t as any) as any) + (3 as any)) as any).map as any)(function (this: any): any {
      return new (gr as any)();
    }),
    a: any = (t as any) + (1 as any);
  return (c as any)(((r as any).nodes as any)(), function (this: any, u: any): any {
    (Z as any)(o, a, ((r as any).node as any)(u));
  }), {
    graph: r,
    buckets: o,
    zeroIdx: a
  };
}
function Z(this: any, n: any, e: any, r: any): any {
  (r as any).out ? (r as any).in ? (((n as any)[(((r as any).out as any) - ((r as any).in as any) as any) + (e as any)] as any).enqueue as any)(r) : (((n as any)[((n as any).length as any) - (1 as any)] as any).enqueue as any)(r) : (((n as any)[0] as any).enqueue as any)(r);
}
function Pr(this: any, n: any): any {
  var e: any = ((((n as any).graph as any)() as any).acyclicer as any) === ("greedy" as any) ? (Er as any)(n, (r as any)(n)) : (Nr as any)(n);
  (c as any)(e, function (this: any, t: any): any {
    var i: any = ((n as any).edge as any)(t);
    ((n as any).removeEdge as any)(t), (i as any).forwardName = (t as any).name, (i as any).reversed = !0, ((n as any).setEdge as any)((t as any).w, (t as any).v, i, (on as any)("rev"));
  });
  function r(this: any, t: any): any {
    return function (this: any, i: any): any {
      return (((t as any).edge as any)(i) as any).weight;
    };
  }
}
function Nr(this: any, n: any): any {
  var e: any = [],
    r: any = {},
    t: any = {};
  function i(this: any, o: any): any {
    ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(t, o) || ((t as any)[o] = !0, (r as any)[o] = !0, (c as any)(((n as any).outEdges as any)(o), function (this: any, a: any): any {
      ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(r, (a as any).w) ? ((e as any).push as any)(a) : (i as any)((a as any).w);
    }), delete (r as any)[o]);
  }
  return (c as any)(((n as any).nodes as any)(), i), e;
}
function Lr(this: any, n: any): any {
  (c as any)(((n as any).edges as any)(), function (this: any, e: any): any {
    var r: any = ((n as any).edge as any)(e);
    if ((r as any).reversed) {
      ((n as any).removeEdge as any)(e);
      var t: any = (r as any).forwardName;
      delete (r as any).reversed, delete (r as any).forwardName, ((n as any).setEdge as any)((e as any).w, (e as any).v, r, t);
    }
  });
}
function N(this: any, n: any, e: any, r: any, t: any): any {
  var i: any;
  do i = (on as any)(t); while (((n as any).hasNode as any)(i));
  return (r as any).dummy = e, ((n as any).setNode as any)(i, r), i;
}
function _r(this: any, n: any): any {
  var e: any = ((new (g as any)() as any).setGraph as any)(((n as any).graph as any)());
  return (c as any)(((n as any).nodes as any)(), function (this: any, r: any): any {
    ((e as any).setNode as any)(r, ((n as any).node as any)(r));
  }), (c as any)(((n as any).edges as any)(), function (this: any, r: any): any {
    var t: any = ((e as any).edge as any)((r as any).v, (r as any).w) || {
        weight: 0,
        minlen: 1
      },
      i: any = ((n as any).edge as any)(r);
    ((e as any).setEdge as any)((r as any).v, (r as any).w, {
      weight: ((t as any).weight as any) + ((i as any).weight as any),
      minlen: ((Math as any).max as any)((t as any).minlen, (i as any).minlen)
    });
  }), e;
}
function Gn(this: any, n: any): any {
  var e: any = ((new (g as any)({
    multigraph: ((n as any).isMultigraph as any)()
  }) as any).setGraph as any)(((n as any).graph as any)());
  return (c as any)(((n as any).nodes as any)(), function (this: any, r: any): any {
    (((n as any).children as any)(r) as any).length || ((e as any).setNode as any)(r, ((n as any).node as any)(r));
  }), (c as any)(((n as any).edges as any)(), function (this: any, r: any): any {
    ((e as any).setEdge as any)(r, ((n as any).edge as any)(r));
  }), e;
}
function pn(this: any, n: any, e: any): any {
  var r: any = (n as any).x,
    t: any = (n as any).y,
    i: any = ((e as any).x as any) - (r as any),
    o: any = ((e as any).y as any) - (t as any),
    a: any = ((n as any).width as any) / (2 as any),
    u: any = ((n as any).height as any) / (2 as any);
  if (!i && !o) throw new (Error as any)("Not possible to find intersection inside of the rectangle");
  var d: any, f: any;
  return ((((Math as any).abs as any)(o) as any) * (a as any) as any) > ((((Math as any).abs as any)(i) as any) * (u as any) as any) ? ((o as any) < (0 as any) && (u = -u), d = ((u as any) * (i as any) as any) / (o as any), f = u) : ((i as any) < (0 as any) && (a = -a), d = a, f = ((a as any) * (o as any) as any) / (i as any)), {
    x: (r as any) + (d as any),
    y: (t as any) + (f as any)
  };
}
function $(this: any, n: any): any {
  var e: any = (w as any)((k as any)(((Vn as any)(n) as any) + (1 as any)), function (this: any): any {
    return [];
  });
  return (c as any)(((n as any).nodes as any)(), function (this: any, r: any): any {
    var t: any = ((n as any).node as any)(r),
      i: any = (t as any).rank;
    (m as any)(i) || (((e as any)[i] as any)[(t as any).order] = r);
  }), e;
}
function Cr(this: any, n: any): any {
  var e: any = (C as any)((w as any)(((n as any).nodes as any)(), function (this: any, r: any): any {
    return (((n as any).node as any)(r) as any).rank;
  }));
  (c as any)(((n as any).nodes as any)(), function (this: any, r: any): any {
    var t: any = ((n as any).node as any)(r);
    (Bn as any)(t, "rank") && ((t as any).rank -= e);
  });
}
function Ir(this: any, n: any): any {
  var e: any = (C as any)((w as any)(((n as any).nodes as any)(), function (this: any, o: any): any {
      return (((n as any).node as any)(o) as any).rank;
    })),
    r: any = [];
  (c as any)(((n as any).nodes as any)(), function (this: any, o: any): any {
    var a: any = ((((n as any).node as any)(o) as any).rank as any) - (e as any);
    (r as any)[a] || ((r as any)[a] = []), (((r as any)[a] as any).push as any)(o);
  });
  var t: any = 0,
    i: any = (((n as any).graph as any)() as any).nodeRankFactor;
  (c as any)(r, function (this: any, o: any, a: any): any {
    (m as any)(o) && ((a as any) % (i as any) as any) !== (0 as any) ? --t : t && (c as any)(o, function (this: any, u: any): any {
      (((n as any).node as any)(u) as any).rank += t;
    });
  });
}
function wn(this: any, n: any, e: any, r: any, t: any): any {
  var i: any = {
    width: 0,
    height: 0
  };
  return ((arguments as any).length as any) >= (4 as any) && ((i as any).rank = r, (i as any).order = t), (N as any)(n, "border", i, e);
}
function Vn(this: any, n: any): any {
  return (x as any)((w as any)(((n as any).nodes as any)(), function (this: any, e: any): any {
    var r: any = (((n as any).node as any)(e) as any).rank;
    if (!(m as any)(r)) return r;
  }));
}
function Rr(this: any, n: any, e: any): any {
  var r: any = {
    lhs: [],
    rhs: []
  };
  return (c as any)(n, function (this: any, t: any): any {
    (e as any)(t) ? (((r as any).lhs as any).push as any)(t) : (((r as any).rhs as any).push as any)(t);
  }), r;
}
function Tr(this: any, n: any, e: any): any {
  return (e as any)();
}
function Mr(this: any, n: any): any {
  function e(this: any, r: any): any {
    var t: any = ((n as any).children as any)(r),
      i: any = ((n as any).node as any)(r);
    if ((t as any).length && (c as any)(t, e), ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(i, "minRank")) {
      (i as any).borderLeft = [], (i as any).borderRight = [];
      for (var o: any = (i as any).minRank, a: any = ((i as any).maxRank as any) + (1 as any); (o as any) < (a as any); ++o) (bn as any)(n, "borderLeft", "_bl", r, i, o), (bn as any)(n, "borderRight", "_br", r, i, o);
    }
  }
  (c as any)(((n as any).children as any)(), e);
}
function bn(this: any, n: any, e: any, r: any, t: any, i: any, o: any): any {
  var a: any = {
      width: 0,
      height: 0,
      rank: o,
      borderType: e
    },
    u: any = ((i as any)[e] as any)[(o as any) - (1 as any)],
    d: any = (N as any)(n, "border", a, r);
  ((i as any)[e] as any)[o] = d, ((n as any).setParent as any)(d, t), u && ((n as any).setEdge as any)(u, d, {
    weight: 1
  });
}
function Sr(this: any, n: any): any {
  var e: any = (((((n as any).graph as any)() as any).rankdir as any).toLowerCase as any)();
  ((e as any) === ("lr" as any) || (e as any) === ("rl" as any)) && (Yn as any)(n);
}
function Fr(this: any, n: any): any {
  var e: any = (((((n as any).graph as any)() as any).rankdir as any).toLowerCase as any)();
  ((e as any) === ("bt" as any) || (e as any) === ("rl" as any)) && (Ar as any)(n), ((e as any) === ("lr" as any) || (e as any) === ("rl" as any)) && ((Br as any)(n), (Yn as any)(n));
}
function Yn(this: any, n: any): any {
  (c as any)(((n as any).nodes as any)(), function (this: any, e: any): any {
    (mn as any)(((n as any).node as any)(e));
  }), (c as any)(((n as any).edges as any)(), function (this: any, e: any): any {
    (mn as any)(((n as any).edge as any)(e));
  });
}
function mn(this: any, n: any): any {
  var e: any = (n as any).width;
  (n as any).width = (n as any).height, (n as any).height = e;
}
function Ar(this: any, n: any): any {
  (c as any)(((n as any).nodes as any)(), function (this: any, e: any): any {
    (W as any)(((n as any).node as any)(e));
  }), (c as any)(((n as any).edges as any)(), function (this: any, e: any): any {
    var r: any = ((n as any).edge as any)(e);
    (c as any)((r as any).points, W), ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(r, "y") && (W as any)(r);
  });
}
function W(this: any, n: any): any {
  (n as any).y = -(n as any).y;
}
function Br(this: any, n: any): any {
  (c as any)(((n as any).nodes as any)(), function (this: any, e: any): any {
    (X as any)(((n as any).node as any)(e));
  }), (c as any)(((n as any).edges as any)(), function (this: any, e: any): any {
    var r: any = ((n as any).edge as any)(e);
    (c as any)((r as any).points, X), ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(r, "x") && (X as any)(r);
  });
}
function X(this: any, n: any): any {
  var e: any = (n as any).x;
  (n as any).x = (n as any).y, (n as any).y = e;
}
function jr(this: any, n: any): any {
  (((n as any).graph as any)() as any).dummyChains = [], (c as any)(((n as any).edges as any)(), function (this: any, e: any): any {
    (Gr as any)(n, e);
  });
}
function Gr(this: any, n: any, e: any): any {
  var r: any = (e as any).v,
    t: any = (((n as any).node as any)(r) as any).rank,
    i: any = (e as any).w,
    o: any = (((n as any).node as any)(i) as any).rank,
    a: any = (e as any).name,
    u: any = ((n as any).edge as any)(e),
    d: any = (u as any).labelRank;
  if ((o as any) !== ((t as any) + (1 as any) as any)) {
    ((n as any).removeEdge as any)(e);
    var f: any = void 0,
      s: any,
      l: any;
    for (l = 0, ++t; (t as any) < (o as any); ++l, ++t) (u as any).points = [], f = {
      width: 0,
      height: 0,
      edgeLabel: u,
      edgeObj: e,
      rank: t
    }, s = (N as any)(n, "edge", f, "_d"), (t as any) === (d as any) && ((f as any).width = (u as any).width, (f as any).height = (u as any).height, (f as any).dummy = "edge-label", (f as any).labelpos = (u as any).labelpos), ((n as any).setEdge as any)(r, s, {
      weight: (u as any).weight
    }, a), (l as any) === (0 as any) && (((((n as any).graph as any)() as any).dummyChains as any).push as any)(s), r = s;
    ((n as any).setEdge as any)(r, i, {
      weight: (u as any).weight
    }, a);
  }
}
function Vr(this: any, n: any): any {
  (c as any)((((n as any).graph as any)() as any).dummyChains, function (this: any, e: any): any {
    var r: any = ((n as any).node as any)(e),
      t: any = (r as any).edgeLabel,
      i: any;
    for (((n as any).setEdge as any)((r as any).edgeObj, t); (r as any).dummy;) i = (((n as any).successors as any)(e) as any)[0], ((n as any).removeNode as any)(e), (((t as any).points as any).push as any)({
      x: (r as any).x,
      y: (r as any).y
    }), ((r as any).dummy as any) === ("edge-label" as any) && ((t as any).x = (r as any).x, (t as any).y = (r as any).y, (t as any).width = (r as any).width, (t as any).height = (r as any).height), e = i, r = ((n as any).node as any)(e);
  });
}
function un(this: any, n: any): any {
  var e: any = {};
  function r(this: any, t: any): any {
    var i: any = ((n as any).node as any)(t);
    if (((((Object as any).prototype as any).hasOwnProperty as any).call as any)(e, t)) return (i as any).rank;
    (e as any)[t] = !0;
    var o: any = (C as any)((w as any)(((n as any).outEdges as any)(t), function (this: any, a: any): any {
      return ((r as any)((a as any).w) as any) - ((((n as any).edge as any)(a) as any).minlen as any);
    }));
    return ((o as any) === ((Number as any).POSITIVE_INFINITY as any) || (o as any) === (void 0 as any) || (o as any) === (null as any)) && (o = 0), (i as any).rank = o;
  }
  (c as any)(((n as any).sources as any)(), r);
}
function I(this: any, n: any, e: any): any {
  return (((((n as any).node as any)((e as any).w) as any).rank as any) - ((((n as any).node as any)((e as any).v) as any).rank as any) as any) - ((((n as any).edge as any)(e) as any).minlen as any);
}
function $n(this: any, n: any): any {
  var e: any = new (g as any)({
      directed: !1
    }),
    r: any = (((n as any).nodes as any)() as any)[0],
    t: any = ((n as any).nodeCount as any)();
  ((e as any).setNode as any)(r, {});
  for (var i: any, o: any; ((Yr as any)(e, n) as any) < (t as any);) i = ($r as any)(e, n), o = ((e as any).hasNode as any)((i as any).v) ? (I as any)(n, i) : -(I as any)(n, i), (Dr as any)(e, n, o);
  return e;
}
function Yr(this: any, n: any, e: any): any {
  function r(this: any, t: any): any {
    (c as any)(((e as any).nodeEdges as any)(t), function (this: any, i: any): any {
      var o: any = (i as any).v,
        a: any = (t as any) === (o as any) ? (i as any).w : o;
      !((n as any).hasNode as any)(a) && !(I as any)(e, i) && (((n as any).setNode as any)(a, {}), ((n as any).setEdge as any)(t, a, {}), (r as any)(a));
    });
  }
  return (c as any)(((n as any).nodes as any)(), r), ((n as any).nodeCount as any)();
}
function $r(this: any, n: any, e: any): any {
  return (an as any)(((e as any).edges as any)(), function (this: any, r: any): any {
    if ((((n as any).hasNode as any)((r as any).v) as any) !== (((n as any).hasNode as any)((r as any).w) as any)) return (I as any)(e, r);
  });
}
function Dr(this: any, n: any, e: any, r: any): any {
  (c as any)(((n as any).nodes as any)(), function (this: any, t: any): any {
    (((e as any).node as any)(t) as any).rank += r;
  });
}
function qr(this: any): any {}
(qr as any).prototype = new (Error as any)();
function Dn(this: any, n: any, e: any, r: any): any {
  (A as any)(e) || (e = [e]);
  var t: any = (((((n as any).isDirected as any)() ? (n as any).successors : (n as any).neighbors) as any).bind as any)(n),
    i: any = [],
    o: any = {};
  return (c as any)(e, function (this: any, a: any): any {
    if (!((n as any).hasNode as any)(a)) throw new (Error as any)(("Graph does not have node: " as any) + (a as any));
    (qn as any)(n, a, (r as any) === ("post" as any), o, t, i);
  }), i;
}
function qn(this: any, n: any, e: any, r: any, t: any, i: any, o: any): any {
  ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(t, e) || ((t as any)[e] = !0, r || ((o as any).push as any)(e), (c as any)((i as any)(e), function (this: any, a: any): any {
    (qn as any)(n, a, r, t, i, o);
  }), r && ((o as any).push as any)(e));
}
function Wr(this: any, n: any, e: any): any {
  return (Dn as any)(n, e, "post");
}
function Xr(this: any, n: any, e: any): any {
  return (Dn as any)(n, e, "pre");
}
(E as any).initLowLimValues = fn;
(E as any).initCutValues = dn;
(E as any).calcCutValue = Wn;
(E as any).leaveEdge = Hn;
(E as any).enterEdge = zn;
(E as any).exchangeEdges = Un;
function E(this: any, n: any): any {
  n = (_r as any)(n), (un as any)(n);
  var e: any = ($n as any)(n);
  (fn as any)(e), (dn as any)(e, n);
  for (var r: any, t: any; r = (Hn as any)(e);) t = (zn as any)(e, n, r), (Un as any)(e, n, r, t);
}
function dn(this: any, n: any, e: any): any {
  var r: any = (Wr as any)(n, ((n as any).nodes as any)());
  r = ((r as any).slice as any)(0, ((r as any).length as any) - (1 as any)), (c as any)(r, function (this: any, t: any): any {
    (Hr as any)(n, e, t);
  });
}
function Hr(this: any, n: any, e: any, r: any): any {
  var t: any = ((n as any).node as any)(r),
    i: any = (t as any).parent;
  (((n as any).edge as any)(r, i) as any).cutvalue = (Wn as any)(n, e, r);
}
function Wn(this: any, n: any, e: any, r: any): any {
  var t: any = ((n as any).node as any)(r),
    i: any = (t as any).parent,
    o: any = !0,
    a: any = ((e as any).edge as any)(r, i),
    u: any = 0;
  return a || (o = !1, a = ((e as any).edge as any)(i, r)), u = (a as any).weight, (c as any)(((e as any).nodeEdges as any)(r), function (this: any, d: any): any {
    var f: any = ((d as any).v as any) === (r as any),
      s: any = f ? (d as any).w : (d as any).v;
    if ((s as any) !== (i as any)) {
      var l: any = (f as any) === (o as any),
        h: any = (((e as any).edge as any)(d) as any).weight;
      if (u += l ? h : -h, (Ur as any)(n, r, s)) {
        var v: any = (((n as any).edge as any)(r, s) as any).cutvalue;
        u += l ? -v : v;
      }
    }
  }), u;
}
function fn(this: any, n: any, e: any): any {
  ((arguments as any).length as any) < (2 as any) && (e = (((n as any).nodes as any)() as any)[0]), (Xn as any)(n, {}, 1, e);
}
function Xn(this: any, n: any, e: any, r: any, t: any, i: any): any {
  var o: any = r,
    a: any = ((n as any).node as any)(t);
  return (e as any)[t] = !0, (c as any)(((n as any).neighbors as any)(t), function (this: any, u: any): any {
    ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(e, u) || (r = (Xn as any)(n, e, r, u, t));
  }), (a as any).low = o, (a as any).lim = r++, i ? (a as any).parent = i : delete (a as any).parent, r;
}
function Hn(this: any, n: any): any {
  return (rn as any)(((n as any).edges as any)(), function (this: any, e: any): any {
    return ((((n as any).edge as any)(e) as any).cutvalue as any) < (0 as any);
  });
}
function zn(this: any, n: any, e: any, r: any): any {
  var t: any = (r as any).v,
    i: any = (r as any).w;
  ((e as any).hasEdge as any)(t, i) || (t = (r as any).w, i = (r as any).v);
  var o: any = ((n as any).node as any)(t),
    a: any = ((n as any).node as any)(i),
    u: any = o,
    d: any = !1;
  ((o as any).lim as any) > ((a as any).lim as any) && (u = a, d = !0);
  var f: any = (T as any)(((e as any).edges as any)(), function (this: any, s: any): any {
    return (d as any) === ((gn as any)(n, ((n as any).node as any)((s as any).v), u) as any) && (d as any) !== ((gn as any)(n, ((n as any).node as any)((s as any).w), u) as any);
  });
  return (an as any)(f, function (this: any, s: any): any {
    return (I as any)(e, s);
  });
}
function Un(this: any, n: any, e: any, r: any, t: any): any {
  var i: any = (r as any).v,
    o: any = (r as any).w;
  ((n as any).removeEdge as any)(i, o), ((n as any).setEdge as any)((t as any).v, (t as any).w, {}), (fn as any)(n), (dn as any)(n, e), (zr as any)(n, e);
}
function zr(this: any, n: any, e: any): any {
  var r: any = (rn as any)(((n as any).nodes as any)(), function (this: any, i: any): any {
      return !(((e as any).node as any)(i) as any).parent;
    }),
    t: any = (Xr as any)(n, r);
  t = ((t as any).slice as any)(1), (c as any)(t, function (this: any, i: any): any {
    var o: any = (((n as any).node as any)(i) as any).parent,
      a: any = ((e as any).edge as any)(i, o),
      u: any = !1;
    a || (a = ((e as any).edge as any)(o, i), u = !0), (((e as any).node as any)(i) as any).rank = ((((e as any).node as any)(o) as any).rank as any) + ((u ? (a as any).minlen : -(a as any).minlen) as any);
  });
}
function Ur(this: any, n: any, e: any, r: any): any {
  return ((n as any).hasEdge as any)(e, r);
}
function gn(this: any, n: any, e: any, r: any): any {
  return ((r as any).low as any) <= ((e as any).lim as any) && ((e as any).lim as any) <= ((r as any).lim as any);
}
function Jr(this: any, n: any): any {
  switch ((((n as any).graph as any)() as any).ranker) {
    case "network-simplex":
      (yn as any)(n);
      break;
    case "tight-tree":
      (Zr as any)(n);
      break;
    case "longest-path":
      (Kr as any)(n);
      break;
    default:
      (yn as any)(n);
  }
}
var Kr: any = un;
function Zr(this: any, n: any): any {
  (un as any)(n), ($n as any)(n);
}
function yn(this: any, n: any): any {
  (E as any)(n);
}
function Qr(this: any, n: any): any {
  var e: any = (N as any)(n, "root", {}, "_root"),
    r: any = (nt as any)(n),
    t: any = ((x as any)((O as any)(r)) as any) - (1 as any),
    i: any = ((2 as any) * (t as any) as any) + (1 as any);
  (((n as any).graph as any)() as any).nestingRoot = e, (c as any)(((n as any).edges as any)(), function (this: any, a: any): any {
    (((n as any).edge as any)(a) as any).minlen *= i;
  });
  var o: any = ((et as any)(n) as any) + (1 as any);
  (c as any)(((n as any).children as any)(), function (this: any, a: any): any {
    (Jn as any)(n, e, i, o, t, r, a);
  }), (((n as any).graph as any)() as any).nodeRankFactor = i;
}
function Jn(this: any, n: any, e: any, r: any, t: any, i: any, o: any, a: any): any {
  var u: any = ((n as any).children as any)(a);
  if (!(u as any).length) {
    (a as any) !== (e as any) && ((n as any).setEdge as any)(e, a, {
      weight: 0,
      minlen: r
    });
    return;
  }
  var d: any = (wn as any)(n, "_bt"),
    f: any = (wn as any)(n, "_bb"),
    s: any = ((n as any).node as any)(a);
  ((n as any).setParent as any)(d, a), (s as any).borderTop = d, ((n as any).setParent as any)(f, a), (s as any).borderBottom = f, (c as any)(u, function (this: any, l: any): any {
    (Jn as any)(n, e, r, t, i, o, l);
    var h: any = ((n as any).node as any)(l),
      v: any = (h as any).borderTop ? (h as any).borderTop : l,
      p: any = (h as any).borderBottom ? (h as any).borderBottom : l,
      b: any = (h as any).borderTop ? t : (2 as any) * (t as any),
      L: any = (v as any) !== (p as any) ? 1 : ((i as any) - ((o as any)[a] as any) as any) + (1 as any);
    ((n as any).setEdge as any)(d, v, {
      weight: b,
      minlen: L,
      nestingEdge: !0
    }), ((n as any).setEdge as any)(p, f, {
      weight: b,
      minlen: L,
      nestingEdge: !0
    });
  }), ((n as any).parent as any)(a) || ((n as any).setEdge as any)(e, d, {
    weight: 0,
    minlen: (i as any) + ((o as any)[a] as any)
  });
}
function nt(this: any, n: any): any {
  var e: any = {};
  function r(this: any, t: any, i: any): any {
    var o: any = ((n as any).children as any)(t);
    o && (o as any).length && (c as any)(o, function (this: any, a: any): any {
      (r as any)(a, (i as any) + (1 as any));
    }), (e as any)[t] = i;
  }
  return (c as any)(((n as any).children as any)(), function (this: any, t: any): any {
    (r as any)(t, 1);
  }), e;
}
function et(this: any, n: any): any {
  return (G as any)(((n as any).edges as any)(), function (this: any, e: any, r: any): any {
    return (e as any) + ((((n as any).edge as any)(r) as any).weight as any);
  }, 0);
}
function rt(this: any, n: any): any {
  var e: any = ((n as any).graph as any)();
  ((n as any).removeNode as any)((e as any).nestingRoot), delete (e as any).nestingRoot, (c as any)(((n as any).edges as any)(), function (this: any, r: any): any {
    var t: any = ((n as any).edge as any)(r);
    (t as any).nestingEdge && ((n as any).removeEdge as any)(r);
  });
}
function tt(this: any, n: any, e: any, r: any): any {
  var t: any = {},
    i: any;
  (c as any)(r, function (this: any, o: any): any {
    for (var a: any = ((n as any).parent as any)(o), u: any, d: any; a;) {
      if (u = ((n as any).parent as any)(a), u ? (d = (t as any)[u], (t as any)[u] = a) : (d = i, i = a), d && (d as any) !== (a as any)) {
        ((e as any).setEdge as any)(d, a);
        return;
      }
      a = u;
    }
  });
}
function it(this: any, n: any, e: any, r: any): any {
  var t: any = (at as any)(n),
    i: any = ((((new (g as any)({
      compound: !0
    }) as any).setGraph as any)({
      root: t
    }) as any).setDefaultNodeLabel as any)(function (this: any, o: any): any {
      return ((n as any).node as any)(o);
    });
  return (c as any)(((n as any).nodes as any)(), function (this: any, o: any): any {
    var a: any = ((n as any).node as any)(o),
      u: any = ((n as any).parent as any)(o);
    (((a as any).rank as any) === (e as any) || ((a as any).minRank as any) <= (e as any) && (e as any) <= ((a as any).maxRank as any)) && (((i as any).setNode as any)(o), ((i as any).setParent as any)(o, u || t), (c as any)(((n as any)[r] as any)(o), function (this: any, d: any): any {
      var f: any = ((d as any).v as any) === (o as any) ? (d as any).w : (d as any).v,
        s: any = ((i as any).edge as any)(f, o),
        l: any = (m as any)(s) ? 0 : (s as any).weight;
      ((i as any).setEdge as any)(f, o, {
        weight: ((((n as any).edge as any)(d) as any).weight as any) + (l as any)
      });
    }), ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(a, "minRank") && ((i as any).setNode as any)(o, {
      borderLeft: ((a as any).borderLeft as any)[e],
      borderRight: ((a as any).borderRight as any)[e]
    }));
  }), i;
}
function at(this: any, n: any): any {
  for (var e: any; ((n as any).hasNode as any)(e = (on as any)("_root")););
  return e;
}
function ot(this: any, n: any, e: any): any {
  for (var r: any = 0, t: any = 1; (t as any) < ((e as any).length as any); ++t) r += (ut as any)(n, (e as any)[(t as any) - (1 as any)], (e as any)[t]);
  return r;
}
function ut(this: any, n: any, e: any, r: any): any {
  for (var t: any = (mr as any)(r, (w as any)(r, function (this: any, f: any, s: any): any {
      return s;
    })), i: any = (P as any)((w as any)(e, function (this: any, f: any): any {
      return (M as any)((w as any)(((n as any).outEdges as any)(f), function (this: any, s: any): any {
        return {
          pos: (t as any)[(s as any).w],
          weight: (((n as any).edge as any)(s) as any).weight
        };
      }), "pos");
    })), o: any = 1; (o as any) < ((r as any).length as any);) o <<= 1;
  var a: any = ((2 as any) * (o as any) as any) - (1 as any);
  o -= 1;
  var u: any = (w as any)(new (Array as any)(a), function (this: any): any {
      return 0;
    }),
    d: any = 0;
  return (c as any)(((i as any).forEach as any)(function (this: any, f: any): any {
    var s: any = ((f as any).pos as any) + (o as any);
    (u as any)[s] += (f as any).weight;
    for (var l: any = 0; (s as any) > (0 as any);) (s as any) % (2 as any) && (l += (u as any)[(s as any) + (1 as any)]), s = ((s as any) - (1 as any) as any) >> (1 as any), (u as any)[s] += (f as any).weight;
    d += ((f as any).weight as any) * (l as any);
  })), d;
}
function dt(this: any, n: any): any {
  var e: any = {},
    r: any = (T as any)(((n as any).nodes as any)(), function (this: any, u: any): any {
      return !(((n as any).children as any)(u) as any).length;
    }),
    t: any = (x as any)((w as any)(r, function (this: any, u: any): any {
      return (((n as any).node as any)(u) as any).rank;
    })),
    i: any = (w as any)((k as any)((t as any) + (1 as any)), function (this: any): any {
      return [];
    });
  function o(this: any, u: any): any {
    if (!(Bn as any)(e, u)) {
      (e as any)[u] = !0;
      var d: any = ((n as any).node as any)(u);
      (((i as any)[(d as any).rank] as any).push as any)(u), (c as any)(((n as any).successors as any)(u), o);
    }
  }
  var a: any = (M as any)(r, function (this: any, u: any): any {
    return (((n as any).node as any)(u) as any).rank;
  });
  return (c as any)(a, o), i;
}
function ft(this: any, n: any, e: any): any {
  return (w as any)(e, function (this: any, r: any): any {
    var t: any = ((n as any).inEdges as any)(r);
    if ((t as any).length) {
      var i: any = (G as any)(t, function (this: any, o: any, a: any): any {
        var u: any = ((n as any).edge as any)(a),
          d: any = ((n as any).node as any)((a as any).v);
        return {
          sum: ((o as any).sum as any) + (((u as any).weight as any) * ((d as any).order as any) as any),
          weight: ((o as any).weight as any) + ((u as any).weight as any)
        };
      }, {
        sum: 0,
        weight: 0
      });
      return {
        v: r,
        barycenter: ((i as any).sum as any) / ((i as any).weight as any),
        weight: (i as any).weight
      };
    } else return {
      v: r
    };
  });
}
function st(this: any, n: any, e: any): any {
  var r: any = {};
  (c as any)(n, function (this: any, i: any, o: any): any {
    var a: any = (r as any)[(i as any).v] = {
      indegree: 0,
      in: [],
      out: [],
      vs: [(i as any).v],
      i: o
    };
    (m as any)((i as any).barycenter) || ((a as any).barycenter = (i as any).barycenter, (a as any).weight = (i as any).weight);
  }), (c as any)(((e as any).edges as any)(), function (this: any, i: any): any {
    var o: any = (r as any)[(i as any).v],
      a: any = (r as any)[(i as any).w];
    !(m as any)(o) && !(m as any)(a) && ((a as any).indegree++, (((o as any).out as any).push as any)((r as any)[(i as any).w]));
  });
  var t: any = (T as any)(r, function (this: any, i: any): any {
    return !(i as any).indegree;
  });
  return (ct as any)(t);
}
function ct(this: any, n: any): any {
  var e: any = [];
  function r(this: any, o: any): any {
    return function (this: any, a: any): any {
      (a as any).merged || ((m as any)((a as any).barycenter) || (m as any)((o as any).barycenter) || ((a as any).barycenter as any) >= ((o as any).barycenter as any)) && (lt as any)(o, a);
    };
  }
  function t(this: any, o: any): any {
    return function (this: any, a: any): any {
      (((a as any).in as any).push as any)(o), (--(a as any).indegree as any) === (0 as any) && ((n as any).push as any)(a);
    };
  }
  for (; (n as any).length;) {
    var i: any = ((n as any).pop as any)();
    ((e as any).push as any)(i), (c as any)((((i as any).in as any).reverse as any)(), (r as any)(i)), (c as any)((i as any).out, (t as any)(i));
  }
  return (w as any)((T as any)(e, function (this: any, o: any): any {
    return !(o as any).merged;
  }), function (this: any, o: any): any {
    return (j as any)(o, ["vs", "i", "barycenter", "weight"]);
  });
}
function lt(this: any, n: any, e: any): any {
  var r: any = 0,
    t: any = 0;
  (n as any).weight && (r += ((n as any).barycenter as any) * ((n as any).weight as any), t += (n as any).weight), (e as any).weight && (r += ((e as any).barycenter as any) * ((e as any).weight as any), t += (e as any).weight), (n as any).vs = (((e as any).vs as any).concat as any)((n as any).vs), (n as any).barycenter = (r as any) / (t as any), (n as any).weight = t, (n as any).i = ((Math as any).min as any)((e as any).i, (n as any).i), (e as any).merged = !0;
}
function ht(this: any, n: any, e: any): any {
  var r: any = (Rr as any)(n, function (this: any, s: any): any {
      return ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(s, "barycenter");
    }),
    t: any = (r as any).lhs,
    i: any = (M as any)((r as any).rhs, function (this: any, s: any): any {
      return -(s as any).i;
    }),
    o: any = [],
    a: any = 0,
    u: any = 0,
    d: any = 0;
  ((t as any).sort as any)((vt as any)(!!e)), d = (xn as any)(o, i, d), (c as any)(t, function (this: any, s: any): any {
    d += ((s as any).vs as any).length, ((o as any).push as any)((s as any).vs), a += ((s as any).barycenter as any) * ((s as any).weight as any), u += (s as any).weight, d = (xn as any)(o, i, d);
  });
  var f: any = {
    vs: (P as any)(o)
  };
  return u && ((f as any).barycenter = (a as any) / (u as any), (f as any).weight = u), f;
}
function xn(this: any, n: any, e: any, r: any): any {
  for (var t: any; (e as any).length && (((t = (B as any)(e)) as any).i as any) <= (r as any);) ((e as any).pop as any)(), ((n as any).push as any)((t as any).vs), r++;
  return r;
}
function vt(this: any, n: any): any {
  return function (this: any, e: any, r: any): any {
    return ((e as any).barycenter as any) < ((r as any).barycenter as any) ? -1 : ((e as any).barycenter as any) > ((r as any).barycenter as any) ? 1 : n ? ((r as any).i as any) - ((e as any).i as any) : ((e as any).i as any) - ((r as any).i as any);
  };
}
function Kn(this: any, n: any, e: any, r: any, t: any): any {
  var i: any = ((n as any).children as any)(e),
    o: any = ((n as any).node as any)(e),
    a: any = o ? (o as any).borderLeft : void 0,
    u: any = o ? (o as any).borderRight : void 0,
    d: any = {};
  a && (i = (T as any)(i, function (this: any, p: any): any {
    return (p as any) !== (a as any) && (p as any) !== (u as any);
  }));
  var f: any = (ft as any)(n, i);
  (c as any)(f, function (this: any, p: any): any {
    if ((((n as any).children as any)((p as any).v) as any).length) {
      var b: any = (Kn as any)(n, (p as any).v, r, t);
      (d as any)[(p as any).v] = b, ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(b, "barycenter") && (wt as any)(p, b);
    }
  });
  var s: any = (st as any)(f, r);
  (pt as any)(s, d);
  var l: any = (ht as any)(s, t);
  if (a && ((l as any).vs = (P as any)([a, (l as any).vs, u]), (((n as any).predecessors as any)(a) as any).length)) {
    var h: any = ((n as any).node as any)((((n as any).predecessors as any)(a) as any)[0]),
      v: any = ((n as any).node as any)((((n as any).predecessors as any)(u) as any)[0]);
    ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(l, "barycenter") || ((l as any).barycenter = 0, (l as any).weight = 0), (l as any).barycenter = (((((l as any).barycenter as any) * ((l as any).weight as any) as any) + ((h as any).order as any) as any) + ((v as any).order as any) as any) / (((l as any).weight as any) + (2 as any) as any), (l as any).weight += 2;
  }
  return l;
}
function pt(this: any, n: any, e: any): any {
  (c as any)(n, function (this: any, r: any): any {
    (r as any).vs = (P as any)((((r as any).vs as any).map as any)(function (this: any, t: any): any {
      return (e as any)[t] ? ((e as any)[t] as any).vs : t;
    }));
  });
}
function wt(this: any, n: any, e: any): any {
  (m as any)((n as any).barycenter) ? ((n as any).barycenter = (e as any).barycenter, (n as any).weight = (e as any).weight) : ((n as any).barycenter = ((((n as any).barycenter as any) * ((n as any).weight as any) as any) + (((e as any).barycenter as any) * ((e as any).weight as any) as any) as any) / (((n as any).weight as any) + ((e as any).weight as any) as any), (n as any).weight += (e as any).weight);
}
function bt(this: any, n: any): any {
  var e: any = (Vn as any)(n),
    r: any = (En as any)(n, (k as any)(1, (e as any) + (1 as any)), "inEdges"),
    t: any = (En as any)(n, (k as any)((e as any) - (1 as any), -1, -1), "outEdges"),
    i: any = (dt as any)(n);
  (On as any)(n, i);
  for (var o: any = (Number as any).POSITIVE_INFINITY, a: any, u: any = 0, d: any = 0; (d as any) < (4 as any); ++u, ++d) {
    (mt as any)((u as any) % (2 as any) ? r : t, ((u as any) % (4 as any) as any) >= (2 as any)), i = ($ as any)(n);
    var f: any = (ot as any)(n, i);
    (f as any) < (o as any) && (d = 0, a = (We as any)(i), o = f);
  }
  (On as any)(n, a);
}
function En(this: any, n: any, e: any, r: any): any {
  return (w as any)(e, function (this: any, t: any): any {
    return (it as any)(n, t, r);
  });
}
function mt(this: any, n: any, e: any): any {
  var r: any = new (g as any)();
  (c as any)(n, function (this: any, t: any): any {
    var i: any = (((t as any).graph as any)() as any).root,
      o: any = (Kn as any)(t, i, r, e);
    (c as any)((o as any).vs, function (this: any, a: any, u: any): any {
      (((t as any).node as any)(a) as any).order = u;
    }), (tt as any)(t, r, (o as any).vs);
  });
}
function On(this: any, n: any, e: any): any {
  (c as any)(e, function (this: any, r: any): any {
    (c as any)(r, function (this: any, t: any, i: any): any {
      (((n as any).node as any)(t) as any).order = i;
    });
  });
}
function gt(this: any, n: any): any {
  var e: any = (xt as any)(n);
  (c as any)((((n as any).graph as any)() as any).dummyChains, function (this: any, r: any): any {
    for (var t: any = ((n as any).node as any)(r), i: any = (t as any).edgeObj, o: any = (yt as any)(n, e, (i as any).v, (i as any).w), a: any = (o as any).path, u: any = (o as any).lca, d: any = 0, f: any = (a as any)[d], s: any = !0; (r as any) !== ((i as any).w as any);) {
      if (t = ((n as any).node as any)(r), s) {
        for (; ((f = (a as any)[d]) as any) !== (u as any) && ((((n as any).node as any)(f) as any).maxRank as any) < ((t as any).rank as any);) d++;
        (f as any) === (u as any) && (s = !1);
      }
      if (!s) {
        for (; (d as any) < (((a as any).length as any) - (1 as any) as any) && ((((n as any).node as any)(f = (a as any)[(d as any) + (1 as any)]) as any).minRank as any) <= ((t as any).rank as any);) d++;
        f = (a as any)[d];
      }
      ((n as any).setParent as any)(r, f), r = (((n as any).successors as any)(r) as any)[0];
    }
  });
}
function yt(this: any, n: any, e: any, r: any, t: any): any {
  var i: any = [],
    o: any = [],
    a: any = ((Math as any).min as any)(((e as any)[r] as any).low, ((e as any)[t] as any).low),
    u: any = ((Math as any).max as any)(((e as any)[r] as any).lim, ((e as any)[t] as any).lim),
    d: any,
    f: any;
  d = r;
  do d = ((n as any).parent as any)(d), ((i as any).push as any)(d); while (d && ((((e as any)[d] as any).low as any) > (a as any) || (u as any) > (((e as any)[d] as any).lim as any)));
  for (f = d, d = t; ((d = ((n as any).parent as any)(d)) as any) !== (f as any);) ((o as any).push as any)(d);
  return {
    path: ((i as any).concat as any)(((o as any).reverse as any)()),
    lca: f
  };
}
function xt(this: any, n: any): any {
  var e: any = {},
    r: any = 0;
  function t(this: any, i: any): any {
    var o: any = r;
    (c as any)(((n as any).children as any)(i), t), (e as any)[i] = {
      low: o,
      lim: r++
    };
  }
  return (c as any)(((n as any).children as any)(), t), e;
}
function Et(this: any, n: any, e: any): any {
  var r: any = {};
  function t(this: any, i: any, o: any): any {
    var a: any = 0,
      u: any = 0,
      d: any = (i as any).length,
      f: any = (B as any)(o);
    return (c as any)(o, function (this: any, s: any, l: any): any {
      var h: any = (kt as any)(n, s),
        v: any = h ? (((n as any).node as any)(h) as any).order : d;
      (h || (s as any) === (f as any)) && ((c as any)(((o as any).slice as any)(u, (l as any) + (1 as any)), function (this: any, p: any): any {
        (c as any)(((n as any).predecessors as any)(p), function (this: any, b: any): any {
          var L: any = ((n as any).node as any)(b),
            sn: any = (L as any).order;
          ((sn as any) < (a as any) || (v as any) < (sn as any)) && !((L as any).dummy && (((n as any).node as any)(p) as any).dummy) && (Zn as any)(r, b, p);
        });
      }), u = (l as any) + (1 as any), a = v);
    }), o;
  }
  return (G as any)(e, t), r;
}
function Ot(this: any, n: any, e: any): any {
  var r: any = {};
  function t(this: any, o: any, a: any, u: any, d: any, f: any): any {
    var s: any;
    (c as any)((k as any)(a, u), function (this: any, l: any): any {
      s = (o as any)[l], (((n as any).node as any)(s) as any).dummy && (c as any)(((n as any).predecessors as any)(s), function (this: any, h: any): any {
        var v: any = ((n as any).node as any)(h);
        (v as any).dummy && (((v as any).order as any) < (d as any) || ((v as any).order as any) > (f as any)) && (Zn as any)(r, h, s);
      });
    });
  }
  function i(this: any, o: any, a: any): any {
    var u: any = -1,
      d: any,
      f: any = 0;
    return (c as any)(a, function (this: any, s: any, l: any): any {
      if (((((n as any).node as any)(s) as any).dummy as any) === ("border" as any)) {
        var h: any = ((n as any).predecessors as any)(s);
        (h as any).length && (d = (((n as any).node as any)((h as any)[0]) as any).order, (t as any)(a, f, l, u, d), f = l, u = d);
      }
      (t as any)(a, f, (a as any).length, d, (o as any).length);
    }), a;
  }
  return (G as any)(e, i), r;
}
function kt(this: any, n: any, e: any): any {
  if ((((n as any).node as any)(e) as any).dummy) return (rn as any)(((n as any).predecessors as any)(e), function (this: any, r: any): any {
    return (((n as any).node as any)(r) as any).dummy;
  });
}
function Zn(this: any, n: any, e: any, r: any): any {
  if ((e as any) > (r as any)) {
    var t: any = e;
    e = r, r = t;
  }
  ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(n, e) || ((Object as any).defineProperty as any)(n, e, {
    enumerable: !0,
    configurable: !0,
    value: {},
    writable: !0
  });
  var i: any = (n as any)[e];
  ((Object as any).defineProperty as any)(i, r, {
    enumerable: !0,
    configurable: !0,
    value: !0,
    writable: !0
  });
}
function Pt(this: any, n: any, e: any, r: any): any {
  if ((e as any) > (r as any)) {
    var t: any = e;
    e = r, r = t;
  }
  return !!(n as any)[e] && ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((n as any)[e], r);
}
function Nt(this: any, n: any, e: any, r: any, t: any): any {
  var i: any = {},
    o: any = {},
    a: any = {};
  return (c as any)(e, function (this: any, u: any): any {
    (c as any)(u, function (this: any, d: any, f: any): any {
      (i as any)[d] = d, (o as any)[d] = d, (a as any)[d] = f;
    });
  }), (c as any)(e, function (this: any, u: any): any {
    var d: any = -1;
    (c as any)(u, function (this: any, f: any): any {
      var s: any = (t as any)(f);
      if ((s as any).length) {
        s = (M as any)(s, function (this: any, b: any): any {
          return (a as any)[b];
        });
        for (var l: any = (((s as any).length as any) - (1 as any) as any) / (2 as any), h: any = ((Math as any).floor as any)(l), v: any = ((Math as any).ceil as any)(l); (h as any) <= (v as any); ++h) {
          var p: any = (s as any)[h];
          ((o as any)[f] as any) === (f as any) && (d as any) < ((a as any)[p] as any) && !(Pt as any)(r, f, p) && ((o as any)[p] = f, (o as any)[f] = (i as any)[f] = (i as any)[p], d = (a as any)[p]);
        }
      }
    });
  }), {
    root: i,
    align: o
  };
}
function Lt(this: any, n: any, e: any, r: any, t: any, i: any): any {
  var o: any = {},
    a: any = (_t as any)(n, e, r, i),
    u: any = i ? "borderLeft" : "borderRight";
  function d(this: any, l: any, h: any): any {
    for (var v: any = ((a as any).nodes as any)(), p: any = ((v as any).pop as any)(), b: any = {}; p;) (b as any)[p] ? (l as any)(p) : ((b as any)[p] = !0, ((v as any).push as any)(p), v = ((v as any).concat as any)((h as any)(p))), p = ((v as any).pop as any)();
  }
  function f(this: any, l: any): any {
    (o as any)[l] = ((((a as any).inEdges as any)(l) as any).reduce as any)(function (this: any, h: any, v: any): any {
      return ((Math as any).max as any)(h, ((o as any)[(v as any).v] as any) + (((a as any).edge as any)(v) as any));
    }, 0);
  }
  function s(this: any, l: any): any {
    var h: any = ((((a as any).outEdges as any)(l) as any).reduce as any)(function (this: any, p: any, b: any): any {
        return ((Math as any).min as any)(p, ((o as any)[(b as any).w] as any) - (((a as any).edge as any)(b) as any));
      }, (Number as any).POSITIVE_INFINITY),
      v: any = ((n as any).node as any)(l);
    (h as any) !== ((Number as any).POSITIVE_INFINITY as any) && ((v as any).borderType as any) !== (u as any) && ((o as any)[l] = ((Math as any).max as any)((o as any)[l], h));
  }
  return (d as any)(f, (((a as any).predecessors as any).bind as any)(a)), (d as any)(s, (((a as any).successors as any).bind as any)(a)), (c as any)(t, function (this: any, l: any): any {
    (o as any)[l] = (o as any)[(r as any)[l]];
  }), o;
}
function _t(this: any, n: any, e: any, r: any, t: any): any {
  var i: any = new (g as any)(),
    o: any = ((n as any).graph as any)(),
    a: any = (Mt as any)((o as any).nodesep, (o as any).edgesep, t);
  return (c as any)(e, function (this: any, u: any): any {
    var d: any;
    (c as any)(u, function (this: any, f: any): any {
      var s: any = (r as any)[f];
      if (((i as any).setNode as any)(s), d) {
        var l: any = (r as any)[d],
          h: any = ((i as any).edge as any)(l, s);
        ((i as any).setEdge as any)(l, s, ((Math as any).max as any)((a as any)(n, f, d), h || 0));
      }
      d = f;
    });
  }), i;
}
function Ct(this: any, n: any, e: any): any {
  return (an as any)((O as any)(e), function (this: any, r: any): any {
    var t: any = (Number as any).NEGATIVE_INFINITY,
      i: any = (Number as any).POSITIVE_INFINITY;
    return (Qe as any)(r, function (this: any, o: any, a: any): any {
      var u: any = ((St as any)(n, a) as any) / (2 as any);
      t = ((Math as any).max as any)((o as any) + (u as any), t), i = ((Math as any).min as any)((o as any) - (u as any), i);
    }), (t as any) - (i as any);
  });
}
function It(this: any, n: any, e: any): any {
  var r: any = (O as any)(e),
    t: any = (C as any)(r),
    i: any = (x as any)(r);
  (c as any)(["u", "d"], function (this: any, o: any): any {
    (c as any)(["l", "r"], function (this: any, a: any): any {
      var u: any = (o as any) + (a as any),
        d: any = (n as any)[u],
        f: any;
      if ((d as any) !== (e as any)) {
        var s: any = (O as any)(d);
        f = (a as any) === ("l" as any) ? (t as any) - ((C as any)(s) as any) : (i as any) - ((x as any)(s) as any), f && ((n as any)[u] = (Y as any)(d, function (this: any, l: any): any {
          return (l as any) + (f as any);
        }));
      }
    });
  });
}
function Rt(this: any, n: any, e: any): any {
  return (Y as any)((n as any).ul, function (this: any, r: any, t: any): any {
    if (e) return ((n as any)[((e as any).toLowerCase as any)()] as any)[t];
    var i: any = (M as any)((w as any)(n, t));
    return (((i as any)[1] as any) + ((i as any)[2] as any) as any) / (2 as any);
  });
}
function Tt(this: any, n: any): any {
  var e: any = ($ as any)(n),
    r: any = (K as any)((Et as any)(n, e), (Ot as any)(n, e)),
    t: any = {},
    i: any;
  (c as any)(["u", "d"], function (this: any, a: any): any {
    i = (a as any) === ("u" as any) ? e : (((O as any)(e) as any).reverse as any)(), (c as any)(["l", "r"], function (this: any, u: any): any {
      (u as any) === ("r" as any) && (i = (w as any)(i, function (this: any, l: any): any {
        return (((O as any)(l) as any).reverse as any)();
      }));
      var d: any = ((((a as any) === ("u" as any) ? (n as any).predecessors : (n as any).successors) as any).bind as any)(n),
        f: any = (Nt as any)(n, i, r, d),
        s: any = (Lt as any)(n, i, (f as any).root, (f as any).align, (u as any) === ("r" as any));
      (u as any) === ("r" as any) && (s = (Y as any)(s, function (this: any, l: any): any {
        return -l;
      })), (t as any)[(a as any) + (u as any)] = s;
    });
  });
  var o: any = (Ct as any)(n, t);
  return (It as any)(t, o), (Rt as any)(t, (((n as any).graph as any)() as any).align);
}
function Mt(this: any, n: any, e: any, r: any): any {
  return function (this: any, t: any, i: any, o: any): any {
    var a: any = ((t as any).node as any)(i),
      u: any = ((t as any).node as any)(o),
      d: any = 0,
      f: any;
    if (d += ((a as any).width as any) / (2 as any), ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(a, "labelpos")) switch ((((a as any).labelpos as any).toLowerCase as any)()) {
      case "l":
        f = (-(a as any).width as any) / (2 as any);
        break;
      case "r":
        f = ((a as any).width as any) / (2 as any);
        break;
    }
    if (f && (d += r ? f : -f), f = 0, d += (((a as any).dummy ? e : n) as any) / (2 as any), d += (((u as any).dummy ? e : n) as any) / (2 as any), d += ((u as any).width as any) / (2 as any), ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(u, "labelpos")) switch ((((u as any).labelpos as any).toLowerCase as any)()) {
      case "l":
        f = ((u as any).width as any) / (2 as any);
        break;
      case "r":
        f = (-(u as any).width as any) / (2 as any);
        break;
    }
    return f && (d += r ? f : -f), f = 0, d;
  };
}
function St(this: any, n: any, e: any): any {
  return (((n as any).node as any)(e) as any).width;
}
function Ft(this: any, n: any): any {
  n = (Gn as any)(n), (At as any)(n), (nr as any)((Tt as any)(n), function (this: any, e: any, r: any): any {
    (((n as any).node as any)(r) as any).x = e;
  });
}
function At(this: any, n: any): any {
  var e: any = ($ as any)(n),
    r: any = (((n as any).graph as any)() as any).ranksep,
    t: any = 0;
  (c as any)(e, function (this: any, i: any): any {
    var o: any = (x as any)((w as any)(i, function (this: any, a: any): any {
      return (((n as any).node as any)(a) as any).height;
    }));
    (c as any)(i, function (this: any, a: any): any {
      (((n as any).node as any)(a) as any).y = (t as any) + ((o as any) / (2 as any) as any);
    }), t += (o as any) + (r as any);
  });
}
function di(this: any, n: any, e: any): any {
  var r: any = Tr;
  (r as any)("layout", (): any => {
    var t: any = (r as any)("  buildLayoutGraph", (): any => (Ht as any)(n));
    (r as any)("  runLayout", (): any => (Bt as any)(t, r)), (r as any)("  updateInputGraph", (): any => (jt as any)(n, t));
  });
}
function Bt(this: any, n: any, e: any): any {
  (e as any)("    makeSpaceForEdgeLabels", (): any => (zt as any)(n)), (e as any)("    removeSelfEdges", (): any => (ti as any)(n)), (e as any)("    acyclic", (): any => (Pr as any)(n)), (e as any)("    nestingGraph.run", (): any => (Qr as any)(n)), (e as any)("    rank", (): any => (Jr as any)((Gn as any)(n))), (e as any)("    injectEdgeLabelProxies", (): any => (Ut as any)(n)), (e as any)("    removeEmptyRanks", (): any => (Ir as any)(n)), (e as any)("    nestingGraph.cleanup", (): any => (rt as any)(n)), (e as any)("    normalizeRanks", (): any => (Cr as any)(n)), (e as any)("    assignRankMinMax", (): any => (Jt as any)(n)), (e as any)("    removeEdgeLabelProxies", (): any => (Kt as any)(n)), (e as any)("    normalize.run", (): any => (jr as any)(n)), (e as any)("    parentDummyChains", (): any => (gt as any)(n)), (e as any)("    addBorderSegments", (): any => (Mr as any)(n)), (e as any)("    order", (): any => (bt as any)(n)), (e as any)("    insertSelfEdges", (): any => (ii as any)(n)), (e as any)("    adjustCoordinateSystem", (): any => (Sr as any)(n)), (e as any)("    position", (): any => (Ft as any)(n)), (e as any)("    positionSelfEdges", (): any => (ai as any)(n)), (e as any)("    removeBorderNodes", (): any => (ri as any)(n)), (e as any)("    normalize.undo", (): any => (Vr as any)(n)), (e as any)("    fixupEdgeLabelCoords", (): any => (ni as any)(n)), (e as any)("    undoCoordinateSystem", (): any => (Fr as any)(n)), (e as any)("    translateGraph", (): any => (Zt as any)(n)), (e as any)("    assignNodeIntersects", (): any => (Qt as any)(n)), (e as any)("    reversePoints", (): any => (ei as any)(n)), (e as any)("    acyclic.undo", (): any => (Lr as any)(n));
}
function jt(this: any, n: any, e: any): any {
  (c as any)(((n as any).nodes as any)(), function (this: any, r: any): any {
    var t: any = ((n as any).node as any)(r),
      i: any = ((e as any).node as any)(r);
    t && ((t as any).x = (i as any).x, (t as any).y = (i as any).y, (((e as any).children as any)(r) as any).length && ((t as any).width = (i as any).width, (t as any).height = (i as any).height));
  }), (c as any)(((n as any).edges as any)(), function (this: any, r: any): any {
    var t: any = ((n as any).edge as any)(r),
      i: any = ((e as any).edge as any)(r);
    (t as any).points = (i as any).points, ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(i, "x") && ((t as any).x = (i as any).x, (t as any).y = (i as any).y);
  }), (((n as any).graph as any)() as any).width = (((e as any).graph as any)() as any).width, (((n as any).graph as any)() as any).height = (((e as any).graph as any)() as any).height;
}
var Gt: any = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
  Vt: any = {
    ranksep: 50,
    edgesep: 20,
    nodesep: 50,
    rankdir: "tb"
  },
  Yt: any = ["acyclicer", "ranker", "rankdir", "align"],
  $t: any = ["width", "height"],
  Dt: any = {
    width: 0,
    height: 0
  },
  qt: any = ["minlen", "weight", "width", "height", "labeloffset"],
  Wt: any = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r"
  },
  Xt: any = ["labelpos"];
function Ht(this: any, n: any): any {
  var e: any = new (g as any)({
      multigraph: !0,
      compound: !0
    }),
    r: any = (z as any)(((n as any).graph as any)());
  return ((e as any).setGraph as any)((K as any)({}, Vt, (H as any)(r, Gt), (j as any)(r, Yt))), (c as any)(((n as any).nodes as any)(), function (this: any, t: any): any {
    var i: any = (z as any)(((n as any).node as any)(t));
    ((e as any).setNode as any)(t, (He as any)((H as any)(i, $t), Dt)), ((e as any).setParent as any)(t, ((n as any).parent as any)(t));
  }), (c as any)(((n as any).edges as any)(), function (this: any, t: any): any {
    var i: any = (z as any)(((n as any).edge as any)(t));
    ((e as any).setEdge as any)(t, (K as any)({}, Wt, (H as any)(i, qt), (j as any)(i, Xt)));
  }), e;
}
function zt(this: any, n: any): any {
  var e: any = ((n as any).graph as any)();
  (e as any).ranksep /= 2, (c as any)(((n as any).edges as any)(), function (this: any, r: any): any {
    var t: any = ((n as any).edge as any)(r);
    (t as any).minlen *= 2, ((((t as any).labelpos as any).toLowerCase as any)() as any) !== ("c" as any) && (((e as any).rankdir as any) === ("TB" as any) || ((e as any).rankdir as any) === ("BT" as any) ? (t as any).width += (t as any).labeloffset : (t as any).height += (t as any).labeloffset);
  });
}
function Ut(this: any, n: any): any {
  (c as any)(((n as any).edges as any)(), function (this: any, e: any): any {
    var r: any = ((n as any).edge as any)(e);
    if ((r as any).width && (r as any).height) {
      var t: any = ((n as any).node as any)((e as any).v),
        i: any = ((n as any).node as any)((e as any).w),
        o: any = {
          rank: ((((i as any).rank as any) - ((t as any).rank as any) as any) / (2 as any) as any) + ((t as any).rank as any),
          e
        };
      (N as any)(n, "edge-proxy", o, "_ep");
    }
  });
}
function Jt(this: any, n: any): any {
  var e: any = 0;
  (c as any)(((n as any).nodes as any)(), function (this: any, r: any): any {
    var t: any = ((n as any).node as any)(r);
    (t as any).borderTop && ((t as any).minRank = (((n as any).node as any)((t as any).borderTop) as any).rank, (t as any).maxRank = (((n as any).node as any)((t as any).borderBottom) as any).rank, e = (x as any)(e, (t as any).maxRank));
  }), (((n as any).graph as any)() as any).maxRank = e;
}
function Kt(this: any, n: any): any {
  (c as any)(((n as any).nodes as any)(), function (this: any, e: any): any {
    var r: any = ((n as any).node as any)(e);
    ((r as any).dummy as any) === ("edge-proxy" as any) && ((((n as any).edge as any)((r as any).e) as any).labelRank = (r as any).rank, ((n as any).removeNode as any)(e));
  });
}
function Zt(this: any, n: any): any {
  var e: any = (Number as any).POSITIVE_INFINITY,
    r: any = 0,
    t: any = (Number as any).POSITIVE_INFINITY,
    i: any = 0,
    o: any = ((n as any).graph as any)(),
    a: any = (o as any).marginx || 0,
    u: any = (o as any).marginy || 0;
  function d(this: any, f: any): any {
    var s: any = (f as any).x,
      l: any = (f as any).y,
      h: any = (f as any).width,
      v: any = (f as any).height;
    e = ((Math as any).min as any)(e, (s as any) - ((h as any) / (2 as any) as any)), r = ((Math as any).max as any)(r, (s as any) + ((h as any) / (2 as any) as any)), t = ((Math as any).min as any)(t, (l as any) - ((v as any) / (2 as any) as any)), i = ((Math as any).max as any)(i, (l as any) + ((v as any) / (2 as any) as any));
  }
  (c as any)(((n as any).nodes as any)(), function (this: any, f: any): any {
    (d as any)(((n as any).node as any)(f));
  }), (c as any)(((n as any).edges as any)(), function (this: any, f: any): any {
    var s: any = ((n as any).edge as any)(f);
    ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(s, "x") && (d as any)(s);
  }), e -= a, t -= u, (c as any)(((n as any).nodes as any)(), function (this: any, f: any): any {
    var s: any = ((n as any).node as any)(f);
    (s as any).x -= e, (s as any).y -= t;
  }), (c as any)(((n as any).edges as any)(), function (this: any, f: any): any {
    var s: any = ((n as any).edge as any)(f);
    (c as any)((s as any).points, function (this: any, l: any): any {
      (l as any).x -= e, (l as any).y -= t;
    }), ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(s, "x") && ((s as any).x -= e), ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(s, "y") && ((s as any).y -= t);
  }), (o as any).width = ((r as any) - (e as any) as any) + (a as any), (o as any).height = ((i as any) - (t as any) as any) + (u as any);
}
function Qt(this: any, n: any): any {
  (c as any)(((n as any).edges as any)(), function (this: any, e: any): any {
    var r: any = ((n as any).edge as any)(e),
      t: any = ((n as any).node as any)((e as any).v),
      i: any = ((n as any).node as any)((e as any).w),
      o: any,
      a: any;
    (r as any).points ? (o = ((r as any).points as any)[0], a = ((r as any).points as any)[(((r as any).points as any).length as any) - (1 as any)]) : ((r as any).points = [], o = i, a = t), (((r as any).points as any).unshift as any)((pn as any)(t, o)), (((r as any).points as any).push as any)((pn as any)(i, a));
  });
}
function ni(this: any, n: any): any {
  (c as any)(((n as any).edges as any)(), function (this: any, e: any): any {
    var r: any = ((n as any).edge as any)(e);
    if (((((Object as any).prototype as any).hasOwnProperty as any).call as any)(r, "x")) switch ((((r as any).labelpos as any) === ("l" as any) || ((r as any).labelpos as any) === ("r" as any)) && ((r as any).width -= (r as any).labeloffset), (r as any).labelpos) {
      case "l":
        (r as any).x -= (((r as any).width as any) / (2 as any) as any) + ((r as any).labeloffset as any);
        break;
      case "r":
        (r as any).x += (((r as any).width as any) / (2 as any) as any) + ((r as any).labeloffset as any);
        break;
    }
  });
}
function ei(this: any, n: any): any {
  (c as any)(((n as any).edges as any)(), function (this: any, e: any): any {
    var r: any = ((n as any).edge as any)(e);
    (r as any).reversed && (((r as any).points as any).reverse as any)();
  });
}
function ri(this: any, n: any): any {
  (c as any)(((n as any).nodes as any)(), function (this: any, e: any): any {
    if ((((n as any).children as any)(e) as any).length) {
      var r: any = ((n as any).node as any)(e),
        t: any = ((n as any).node as any)((r as any).borderTop),
        i: any = ((n as any).node as any)((r as any).borderBottom),
        o: any = ((n as any).node as any)((B as any)((r as any).borderLeft)),
        a: any = ((n as any).node as any)((B as any)((r as any).borderRight));
      (r as any).width = ((Math as any).abs as any)(((a as any).x as any) - ((o as any).x as any)), (r as any).height = ((Math as any).abs as any)(((i as any).y as any) - ((t as any).y as any)), (r as any).x = ((o as any).x as any) + (((r as any).width as any) / (2 as any) as any), (r as any).y = ((t as any).y as any) + (((r as any).height as any) / (2 as any) as any);
    }
  }), (c as any)(((n as any).nodes as any)(), function (this: any, e: any): any {
    ((((n as any).node as any)(e) as any).dummy as any) === ("border" as any) && ((n as any).removeNode as any)(e);
  });
}
function ti(this: any, n: any): any {
  (c as any)(((n as any).edges as any)(), function (this: any, e: any): any {
    if (((e as any).v as any) === ((e as any).w as any)) {
      var r: any = ((n as any).node as any)((e as any).v);
      (r as any).selfEdges || ((r as any).selfEdges = []), (((r as any).selfEdges as any).push as any)({
        e,
        label: ((n as any).edge as any)(e)
      }), ((n as any).removeEdge as any)(e);
    }
  });
}
function ii(this: any, n: any): any {
  var e: any = ($ as any)(n);
  (c as any)(e, function (this: any, r: any): any {
    var t: any = 0;
    (c as any)(r, function (this: any, i: any, o: any): any {
      var a: any = ((n as any).node as any)(i);
      (a as any).order = (o as any) + (t as any), (c as any)((a as any).selfEdges, function (this: any, u: any): any {
        (N as any)(n, "selfedge", {
          width: ((u as any).label as any).width,
          height: ((u as any).label as any).height,
          rank: (a as any).rank,
          order: (o as any) + (++t as any),
          e: (u as any).e,
          label: (u as any).label
        }, "_se");
      }), delete (a as any).selfEdges;
    });
  });
}
function ai(this: any, n: any): any {
  (c as any)(((n as any).nodes as any)(), function (this: any, e: any): any {
    var r: any = ((n as any).node as any)(e);
    if (((r as any).dummy as any) === ("selfedge" as any)) {
      var t: any = ((n as any).node as any)(((r as any).e as any).v),
        i: any = ((t as any).x as any) + (((t as any).width as any) / (2 as any) as any),
        o: any = (t as any).y,
        a: any = ((r as any).x as any) - (i as any),
        u: any = ((t as any).height as any) / (2 as any);
      ((n as any).setEdge as any)((r as any).e, (r as any).label), ((n as any).removeNode as any)(e), ((r as any).label as any).points = [{
        x: (i as any) + (((2 as any) * (a as any) as any) / (3 as any) as any),
        y: (o as any) - (u as any)
      }, {
        x: (i as any) + (((5 as any) * (a as any) as any) / (6 as any) as any),
        y: (o as any) - (u as any)
      }, {
        x: (i as any) + (a as any),
        y: o
      }, {
        x: (i as any) + (((5 as any) * (a as any) as any) / (6 as any) as any),
        y: (o as any) + (u as any)
      }, {
        x: (i as any) + (((2 as any) * (a as any) as any) / (3 as any) as any),
        y: (o as any) + (u as any)
      }], ((r as any).label as any).x = (r as any).x, ((r as any).label as any).y = (r as any).y;
    }
  });
}
function H(this: any, n: any, e: any): any {
  return (Y as any)((j as any)(n, e), Number);
}
function z(this: any, n: any): any {
  var e: any = {};
  return (c as any)(n, function (this: any, r: any, t: any): any {
    (e as any)[((t as any).toLowerCase as any)()] = r;
  }), e;
}
export { di as l };
//# debugId=b4326a13-f054-4466-8a69-bff6ff6301bb
