declare var CSS: any;
declare var document: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "7eef8e1e-261b-4ee6-ac5d-6e2dee1abd04", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-7eef8e1e-261b-4ee6-ac5d-6e2dee1abd04");
  } catch (e: any) {}
} as any)();
import { bg as on, bh as On, bi as cn, bj as un, bk as ln, bl as ue, bm as Hn, _ as d, g as Nn, s as Pn, p as Vn, o as Rn, a as zn, b as qn, c as Ft, d as Bt, e as Zn, bn as it, l as Tt, k as Bn, j as Xn, q as Gn, y as jn } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { a4 as oe } from "./index.eager-vendor-Qbf9YA6n.js";
import { b as Qn, t as Ne, c as Jn, a as Kn, l as tr } from "./chunk-linear-CNfSrmBn.js";
import { i as er } from "./chunk-init-Gi6I4Gst.js";
import "./chunk-defaultLocale-pEppTWzK.js";
function nr(this: any, t: any, e: any): any {
  let n: any;
  if ((e as any) === (void 0 as any)) for (const r of t) (r as any) != (null as any) && ((n as any) < (r as any) || (n as any) === (void 0 as any) && (r as any) >= (r as any)) && (n = r);else {
    let r: any = -1;
    for (let i of t) ((i = (e as any)(i, ++r, t)) as any) != (null as any) && ((n as any) < (i as any) || (n as any) === (void 0 as any) && (i as any) >= (i as any)) && (n = i);
  }
  return n;
}
function rr(this: any, t: any, e: any): any {
  let n: any;
  if ((e as any) === (void 0 as any)) for (const r of t) (r as any) != (null as any) && ((n as any) > (r as any) || (n as any) === (void 0 as any) && (r as any) >= (r as any)) && (n = r);else {
    let r: any = -1;
    for (let i of t) ((i = (e as any)(i, ++r, t)) as any) != (null as any) && ((n as any) > (i as any) || (n as any) === (void 0 as any) && (i as any) >= (i as any)) && (n = i);
  }
  return n;
}
function ir(this: any, t: any): any {
  return t;
}
var Gt: number = 1,
  le: number = 2,
  xe: number = 3,
  Xt: number = 4,
  Pe: number = 1e-6;
function sr(this: any, t: any): any {
  return (("translate(" as any) + (t as any) as any) + (",0)" as any);
}
function ar(this: any, t: any): any {
  return (("translate(0," as any) + (t as any) as any) + (")" as any);
}
function or(this: any, t: any): any {
  return (e: any): any => +(t as any)(e);
}
function cr(this: any, t: any, e: any): any {
  return e = (((Math as any).max as any)(0, (((t as any).bandwidth as any)() as any) - ((e as any) * (2 as any) as any)) as any) / (2 as any), ((t as any).round as any)() && (e = ((Math as any).round as any)(e)), (n: any): any => (+(t as any)(n) as any) + (e as any);
}
function ur(this: any): any {
  return !(this as any).__axis;
}
function fn(this: any, t: any, e: any): any {
  var n: any = [],
    r: any = null,
    i: any = null,
    s: any = 6,
    a: any = 6,
    y: any = 3,
    Y: any = (typeof window as any) < ("u" as any) && ((window as any).devicePixelRatio as any) > (1 as any) ? 0 : .5,
    S: any = (t as any) === (Gt as any) || (t as any) === (Xt as any) ? -1 : 1,
    w: any = (t as any) === (Xt as any) || (t as any) === (le as any) ? "x" : "y",
    P: any = (t as any) === (Gt as any) || (t as any) === (xe as any) ? sr : ar;
  function _(this: any, F: any): any {
    var X: any = r ?? ((e as any).ticks ? (((e as any).ticks as any).apply as any)(e, n) : ((e as any).domain as any)()),
      Z: any = i ?? ((e as any).tickFormat ? (((e as any).tickFormat as any).apply as any)(e, n) : ir),
      v: any = (((Math as any).max as any)(s, 0) as any) + (y as any),
      U: any = ((e as any).range as any)(),
      R: any = (+(U as any)[0] as any) + (Y as any),
      E: any = (+(U as any)[((U as any).length as any) - (1 as any)] as any) + (Y as any),
      z: any = (((e as any).bandwidth ? cr : or) as any)(((e as any).copy as any)(), Y),
      G: any = (F as any).selection ? ((F as any).selection as any)() : F,
      T: any = ((((G as any).selectAll as any)(".domain") as any).data as any)([null]),
      k: any = ((((((G as any).selectAll as any)(".tick") as any).data as any)(X, e) as any).order as any)(),
      p: any = ((k as any).exit as any)(),
      L: any = ((((((k as any).enter as any)() as any).append as any)("g") as any).attr as any)("class", "tick"),
      x: any = ((k as any).select as any)("line"),
      C: any = ((k as any).select as any)("text");
    T = ((T as any).merge as any)(((((((((T as any).enter as any)() as any).insert as any)("path", ".tick") as any).attr as any)("class", "domain") as any).attr as any)("stroke", "currentColor")), k = ((k as any).merge as any)(L), x = ((x as any).merge as any)(((((((L as any).append as any)("line") as any).attr as any)("stroke", "currentColor") as any).attr as any)((w as any) + ("2" as any), (S as any) * (s as any))), C = ((C as any).merge as any)(((((((((L as any).append as any)("text") as any).attr as any)("fill", "currentColor") as any).attr as any)(w, (S as any) * (v as any)) as any).attr as any)("dy", (t as any) === (Gt as any) ? "0em" : (t as any) === (xe as any) ? "0.71em" : "0.32em")), (F as any) !== (G as any) && (T = ((T as any).transition as any)(F), k = ((k as any).transition as any)(F), x = ((x as any).transition as any)(F), C = ((C as any).transition as any)(F), p = ((((((p as any).transition as any)(F) as any).attr as any)("opacity", Pe) as any).attr as any)("transform", function (this: any, M: any): any {
      return (isFinite as any)(M = (z as any)(M)) ? (P as any)((M as any) + (Y as any)) : ((this as any).getAttribute as any)("transform");
    }), ((((L as any).attr as any)("opacity", Pe) as any).attr as any)("transform", function (this: any, M: any): any {
      var D: any = ((this as any).parentNode as any).__axis;
      return (P as any)(((D && (isFinite as any)(D = (D as any)(M)) ? D : (z as any)(M)) as any) + (Y as any));
    })), ((p as any).remove as any)(), ((T as any).attr as any)("d", (t as any) === (Xt as any) || (t as any) === (le as any) ? a ? ((((((((("M" as any) + ((S as any) * (a as any) as any) as any) + ("," as any) as any) + (R as any) as any) + ("H" as any) as any) + (Y as any) as any) + ("V" as any) as any) + (E as any) as any) + ("H" as any) as any) + ((S as any) * (a as any) as any) : ((((("M" as any) + (Y as any) as any) + ("," as any) as any) + (R as any) as any) + ("V" as any) as any) + (E as any) : a ? ((((((((("M" as any) + (R as any) as any) + ("," as any) as any) + ((S as any) * (a as any) as any) as any) + ("V" as any) as any) + (Y as any) as any) + ("H" as any) as any) + (E as any) as any) + ("V" as any) as any) + ((S as any) * (a as any) as any) : ((((("M" as any) + (R as any) as any) + ("," as any) as any) + (Y as any) as any) + ("H" as any) as any) + (E as any)), ((((k as any).attr as any)("opacity", 1) as any).attr as any)("transform", function (this: any, M: any): any {
      return (P as any)(((z as any)(M) as any) + (Y as any));
    }), ((x as any).attr as any)((w as any) + ("2" as any), (S as any) * (s as any)), ((((C as any).attr as any)(w, (S as any) * (v as any)) as any).text as any)(Z), ((((((((((G as any).filter as any)(ur) as any).attr as any)("fill", "none") as any).attr as any)("font-size", 10) as any).attr as any)("font-family", "sans-serif") as any).attr as any)("text-anchor", (t as any) === (le as any) ? "start" : (t as any) === (Xt as any) ? "end" : "middle"), ((G as any).each as any)(function (this: any): any {
      (this as any).__axis = z;
    });
  }
  return (_ as any).scale = function (this: any, F: any): any {
    return (arguments as any).length ? (e = F, _) : e;
  }, (_ as any).ticks = function (this: any): any {
    return n = ((Array as any).from as any)(arguments), _;
  }, (_ as any).tickArguments = function (this: any, F: any): any {
    return (arguments as any).length ? (n = (F as any) == (null as any) ? [] : ((Array as any).from as any)(F), _) : ((n as any).slice as any)();
  }, (_ as any).tickValues = function (this: any, F: any): any {
    return (arguments as any).length ? (r = (F as any) == (null as any) ? null : ((Array as any).from as any)(F), _) : r && ((r as any).slice as any)();
  }, (_ as any).tickFormat = function (this: any, F: any): any {
    return (arguments as any).length ? (i = F, _) : i;
  }, (_ as any).tickSize = function (this: any, F: any): any {
    return (arguments as any).length ? (s = a = +F, _) : s;
  }, (_ as any).tickSizeInner = function (this: any, F: any): any {
    return (arguments as any).length ? (s = +F, _) : s;
  }, (_ as any).tickSizeOuter = function (this: any, F: any): any {
    return (arguments as any).length ? (a = +F, _) : a;
  }, (_ as any).tickPadding = function (this: any, F: any): any {
    return (arguments as any).length ? (y = +F, _) : y;
  }, (_ as any).offset = function (this: any, F: any): any {
    return (arguments as any).length ? (Y = +F, _) : Y;
  }, _;
}
function lr(this: any, t: any): any {
  return (fn as any)(Gt, t);
}
function fr(this: any, t: any): any {
  return (fn as any)(xe, t);
}
const dr: any = ((Math as any).PI as any) / (180 as any),
  hr: any = (180 as any) / ((Math as any).PI as any),
  ne: number = 18,
  dn: number = .96422,
  hn: number = 1,
  mn: number = .82521,
  gn: any = (4 as any) / (29 as any),
  Yt: any = (6 as any) / (29 as any),
  yn: any = ((3 as any) * (Yt as any) as any) * (Yt as any),
  mr: any = ((Yt as any) * (Yt as any) as any) * (Yt as any);
function kn(this: any, t: any): any {
  if (t instanceof ft) return new (ft as any)((t as any).l, (t as any).a, (t as any).b, (t as any).opacity);
  if (t instanceof ht) return (pn as any)(t);
  t instanceof on || (t = (On as any)(t));
  var e: any = (me as any)((t as any).r),
    n: any = (me as any)((t as any).g),
    r: any = (me as any)((t as any).b),
    i: any = (fe as any)(((((.2225045 as any) * (e as any) as any) + ((.7168786 as any) * (n as any) as any) as any) + ((.0606169 as any) * (r as any) as any) as any) / (hn as any)),
    s: any,
    a: any;
  return (e as any) === (n as any) && (n as any) === (r as any) ? s = a = i : (s = (fe as any)(((((.4360747 as any) * (e as any) as any) + ((.3850649 as any) * (n as any) as any) as any) + ((.1430804 as any) * (r as any) as any) as any) / (dn as any)), a = (fe as any)(((((.0139322 as any) * (e as any) as any) + ((.0971045 as any) * (n as any) as any) as any) + ((.7141733 as any) * (r as any) as any) as any) / (mn as any))), new (ft as any)(((116 as any) * (i as any) as any) - (16 as any), (500 as any) * ((s as any) - (i as any) as any), (200 as any) * ((i as any) - (a as any) as any), (t as any).opacity);
}
function gr(this: any, t: any, e: any, n: any, r: any): any {
  return ((arguments as any).length as any) === (1 as any) ? (kn as any)(t) : new (ft as any)(t, e, n, r ?? 1);
}
function ft(this: any, t: any, e: any, n: any, r: any): any {
  (this as any).l = +t, (this as any).a = +e, (this as any).b = +n, (this as any).opacity = +r;
}
(cn as any)(ft, gr, (un as any)(ln, {
  brighter(t: any): any {
    return new (ft as any)(((this as any).l as any) + ((ne as any) * ((t ?? 1) as any) as any), (this as any).a, (this as any).b, (this as any).opacity);
  },
  darker(t: any): any {
    return new (ft as any)(((this as any).l as any) - ((ne as any) * ((t ?? 1) as any) as any), (this as any).a, (this as any).b, (this as any).opacity);
  },
  rgb(): any {
    var t: any = (((this as any).l as any) + (16 as any) as any) / (116 as any),
      e: any = (isNaN as any)((this as any).a) ? t : (t as any) + (((this as any).a as any) / (500 as any) as any),
      n: any = (isNaN as any)((this as any).b) ? t : (t as any) - (((this as any).b as any) / (200 as any) as any);
    return e = (dn as any) * ((de as any)(e) as any), t = (hn as any) * ((de as any)(t) as any), n = (mn as any) * ((de as any)(n) as any), new (on as any)((he as any)((((3.1338561 as any) * (e as any) as any) - ((1.6168667 as any) * (t as any) as any) as any) - ((.4906146 as any) * (n as any) as any)), (he as any)((((-.9787684 as any) * (e as any) as any) + ((1.9161415 as any) * (t as any) as any) as any) + ((.033454 as any) * (n as any) as any)), (he as any)((((.0719453 as any) * (e as any) as any) - ((.2289914 as any) * (t as any) as any) as any) + ((1.4052427 as any) * (n as any) as any)), (this as any).opacity);
  }
}));
function fe(this: any, t: any): any {
  return (t as any) > (mr as any) ? ((Math as any).pow as any)(t, (1 as any) / (3 as any)) : ((t as any) / (yn as any) as any) + (gn as any);
}
function de(this: any, t: any): any {
  return (t as any) > (Yt as any) ? ((t as any) * (t as any) as any) * (t as any) : (yn as any) * ((t as any) - (gn as any) as any);
}
function he(this: any, t: any): any {
  return (255 as any) * (((t as any) <= (.0031308 as any) ? (12.92 as any) * (t as any) : ((1.055 as any) * (((Math as any).pow as any)(t, (1 as any) / (2.4 as any)) as any) as any) - (.055 as any)) as any);
}
function me(this: any, t: any): any {
  return ((t /= 255) as any) <= (.04045 as any) ? (t as any) / (12.92 as any) : ((Math as any).pow as any)(((t as any) + (.055 as any) as any) / (1.055 as any), 2.4);
}
function yr(this: any, t: any): any {
  if (t instanceof ht) return new (ht as any)((t as any).h, (t as any).c, (t as any).l, (t as any).opacity);
  if (t instanceof ft || (t = (kn as any)(t)), ((t as any).a as any) === (0 as any) && ((t as any).b as any) === (0 as any)) return new (ht as any)(NaN, (0 as any) < ((t as any).l as any) && ((t as any).l as any) < (100 as any) ? 0 : NaN, (t as any).l, (t as any).opacity);
  var e: any = (((Math as any).atan2 as any)((t as any).b, (t as any).a) as any) * (hr as any);
  return new (ht as any)((e as any) < (0 as any) ? (e as any) + (360 as any) : e, ((Math as any).sqrt as any)((((t as any).a as any) * ((t as any).a as any) as any) + (((t as any).b as any) * ((t as any).b as any) as any)), (t as any).l, (t as any).opacity);
}
function be(this: any, t: any, e: any, n: any, r: any): any {
  return ((arguments as any).length as any) === (1 as any) ? (yr as any)(t) : new (ht as any)(t, e, n, r ?? 1);
}
function ht(this: any, t: any, e: any, n: any, r: any): any {
  (this as any).h = +t, (this as any).c = +e, (this as any).l = +n, (this as any).opacity = +r;
}
function pn(this: any, t: any): any {
  if ((isNaN as any)((t as any).h)) return new (ft as any)((t as any).l, 0, 0, (t as any).opacity);
  var e: any = ((t as any).h as any) * (dr as any);
  return new (ft as any)((t as any).l, (((Math as any).cos as any)(e) as any) * ((t as any).c as any), (((Math as any).sin as any)(e) as any) * ((t as any).c as any), (t as any).opacity);
}
(cn as any)(ht, be, (un as any)(ln, {
  brighter(t: any): any {
    return new (ht as any)((this as any).h, (this as any).c, ((this as any).l as any) + ((ne as any) * ((t ?? 1) as any) as any), (this as any).opacity);
  },
  darker(t: any): any {
    return new (ht as any)((this as any).h, (this as any).c, ((this as any).l as any) - ((ne as any) * ((t ?? 1) as any) as any), (this as any).opacity);
  },
  rgb(): any {
    return (((pn as any)(this) as any).rgb as any)();
  }
}));
function kr(this: any, t: any): any {
  return function (this: any, e: any, n: any): any {
    var r: any = (t as any)(((e = (be as any)(e)) as any).h, ((n = (be as any)(n)) as any).h),
      i: any = (ue as any)((e as any).c, (n as any).c),
      s: any = (ue as any)((e as any).l, (n as any).l),
      a: any = (ue as any)((e as any).opacity, (n as any).opacity);
    return function (this: any, y: any): any {
      return (e as any).h = (r as any)(y), (e as any).c = (i as any)(y), (e as any).l = (s as any)(y), (e as any).opacity = (a as any)(y), (e as any) + ("" as any);
    };
  };
}
const pr: any = (kr as any)(Hn);
function vr(this: any, t: any, e: any): any {
  t = ((t as any).slice as any)();
  var n: any = 0,
    r: any = ((t as any).length as any) - (1 as any),
    i: any = (t as any)[n],
    s: any = (t as any)[r],
    a: any;
  return (s as any) < (i as any) && (a = n, n = r, r = a, a = i, i = s, s = a), (t as any)[n] = ((e as any).floor as any)(i), (t as any)[r] = ((e as any).ceil as any)(s), t;
}
const ge: any = new (Date as any)(),
  ye: any = new (Date as any)();
function nt(this: any, t: any, e: any, n: any, r: any): any {
  function i(this: any, s: any): any {
    return (t as any)(s = ((arguments as any).length as any) === (0 as any) ? new (Date as any)() : new (Date as any)(+s)), s;
  }
  return (i as any).floor = (s: any): any => ((t as any)(s = new (Date as any)(+s)), s), (i as any).ceil = (s: any): any => ((t as any)(s = new (Date as any)((s as any) - (1 as any))), (e as any)(s, 1), (t as any)(s), s), (i as any).round = (s: any): any => {
    const a: any = (i as any)(s),
      y: any = ((i as any).ceil as any)(s);
    return ((s as any) - (a as any) as any) < ((y as any) - (s as any) as any) ? a : y;
  }, (i as any).offset = (s: any, a: any): any => ((e as any)(s = new (Date as any)(+s), (a as any) == (null as any) ? 1 : ((Math as any).floor as any)(a)), s), (i as any).range = (s: any, a: any, y: any): any => {
    const Y: any = [];
    if (s = ((i as any).ceil as any)(s), y = (y as any) == (null as any) ? 1 : ((Math as any).floor as any)(y), !((s as any) < (a as any)) || !((y as any) > (0 as any))) return Y;
    let S: any;
    do ((Y as any).push as any)(S = new (Date as any)(+s)), (e as any)(s, y), (t as any)(s); while ((S as any) < (s as any) && (s as any) < (a as any));
    return Y;
  }, (i as any).filter = (s: any): any => (nt as any)((a: any): any => {
    if ((a as any) >= (a as any)) for (; (t as any)(a), !(s as any)(a);) ((a as any).setTime as any)((a as any) - (1 as any));
  }, (a: any, y: any): any => {
    if ((a as any) >= (a as any)) if ((y as any) < (0 as any)) for (; (++y as any) <= (0 as any);) for (; (e as any)(a, -1), !(s as any)(a););else for (; (--y as any) >= (0 as any);) for (; (e as any)(a, 1), !(s as any)(a););
  }), n && ((i as any).count = (s: any, a: any): any => (((ge as any).setTime as any)(+s), ((ye as any).setTime as any)(+a), (t as any)(ge), (t as any)(ye), ((Math as any).floor as any)((n as any)(ge, ye))), (i as any).every = (s: any): any => (s = ((Math as any).floor as any)(s), !(isFinite as any)(s) || !((s as any) > (0 as any)) ? null : (s as any) > (1 as any) ? ((i as any).filter as any)(r ? (a: any): any => (((r as any)(a) as any) % (s as any) as any) === (0 as any) : (a: any): any => ((((i as any).count as any)(0, a) as any) % (s as any) as any) === (0 as any)) : i)), i;
}
const Et: any = (nt as any)((): any => {}, (t: any, e: any): any => {
  ((t as any).setTime as any)((+t as any) + (e as any));
}, (t: any, e: any): any => (e as any) - (t as any));
(Et as any).every = (t: any): any => (t = ((Math as any).floor as any)(t), !(isFinite as any)(t) || !((t as any) > (0 as any)) ? null : (t as any) > (1 as any) ? (nt as any)((e: any): any => {
  ((e as any).setTime as any)((((Math as any).floor as any)((e as any) / (t as any)) as any) * (t as any));
}, (e: any, n: any): any => {
  ((e as any).setTime as any)((+e as any) + ((n as any) * (t as any) as any));
}, (e: any, n: any): any => ((n as any) - (e as any) as any) / (t as any)) : Et);
(Et as any).range;
const mt: number = 1e3,
  ct: any = (mt as any) * (60 as any),
  gt: any = (ct as any) * (60 as any),
  yt: any = (gt as any) * (24 as any),
  Se: any = (yt as any) * (7 as any),
  Ve: any = (yt as any) * (30 as any),
  ke: any = (yt as any) * (365 as any),
  vt: any = (nt as any)((t: any): any => {
    ((t as any).setTime as any)((t as any) - (((t as any).getMilliseconds as any)() as any));
  }, (t: any, e: any): any => {
    ((t as any).setTime as any)((+t as any) + ((e as any) * (mt as any) as any));
  }, (t: any, e: any): any => ((e as any) - (t as any) as any) / (mt as any), (t: any): any => ((t as any).getUTCSeconds as any)());
(vt as any).range;
const Nt: any = (nt as any)((t: any): any => {
  ((t as any).setTime as any)(((t as any) - (((t as any).getMilliseconds as any)() as any) as any) - ((((t as any).getSeconds as any)() as any) * (mt as any) as any));
}, (t: any, e: any): any => {
  ((t as any).setTime as any)((+t as any) + ((e as any) * (ct as any) as any));
}, (t: any, e: any): any => ((e as any) - (t as any) as any) / (ct as any), (t: any): any => ((t as any).getMinutes as any)());
(Nt as any).range;
const Tr: any = (nt as any)((t: any): any => {
  ((t as any).setUTCSeconds as any)(0, 0);
}, (t: any, e: any): any => {
  ((t as any).setTime as any)((+t as any) + ((e as any) * (ct as any) as any));
}, (t: any, e: any): any => ((e as any) - (t as any) as any) / (ct as any), (t: any): any => ((t as any).getUTCMinutes as any)());
(Tr as any).range;
const Pt: any = (nt as any)((t: any): any => {
  ((t as any).setTime as any)((((t as any) - (((t as any).getMilliseconds as any)() as any) as any) - ((((t as any).getSeconds as any)() as any) * (mt as any) as any) as any) - ((((t as any).getMinutes as any)() as any) * (ct as any) as any));
}, (t: any, e: any): any => {
  ((t as any).setTime as any)((+t as any) + ((e as any) * (gt as any) as any));
}, (t: any, e: any): any => ((e as any) - (t as any) as any) / (gt as any), (t: any): any => ((t as any).getHours as any)());
(Pt as any).range;
const xr: any = (nt as any)((t: any): any => {
  ((t as any).setUTCMinutes as any)(0, 0, 0);
}, (t: any, e: any): any => {
  ((t as any).setTime as any)((+t as any) + ((e as any) * (gt as any) as any));
}, (t: any, e: any): any => ((e as any) - (t as any) as any) / (gt as any), (t: any): any => ((t as any).getUTCHours as any)());
(xr as any).range;
const xt: any = (nt as any)((t: any): any => ((t as any).setHours as any)(0, 0, 0, 0), (t: any, e: any): any => ((t as any).setDate as any)((((t as any).getDate as any)() as any) + (e as any)), (t: any, e: any): any => (((e as any) - (t as any) as any) - (((((e as any).getTimezoneOffset as any)() as any) - (((t as any).getTimezoneOffset as any)() as any) as any) * (ct as any) as any) as any) / (yt as any), (t: any): any => (((t as any).getDate as any)() as any) - (1 as any));
(xt as any).range;
const _e: any = (nt as any)((t: any): any => {
  ((t as any).setUTCHours as any)(0, 0, 0, 0);
}, (t: any, e: any): any => {
  ((t as any).setUTCDate as any)((((t as any).getUTCDate as any)() as any) + (e as any));
}, (t: any, e: any): any => ((e as any) - (t as any) as any) / (yt as any), (t: any): any => (((t as any).getUTCDate as any)() as any) - (1 as any));
(_e as any).range;
const br: any = (nt as any)((t: any): any => {
  ((t as any).setUTCHours as any)(0, 0, 0, 0);
}, (t: any, e: any): any => {
  ((t as any).setUTCDate as any)((((t as any).getUTCDate as any)() as any) + (e as any));
}, (t: any, e: any): any => ((e as any) - (t as any) as any) / (yt as any), (t: any): any => ((Math as any).floor as any)((t as any) / (yt as any)));
(br as any).range;
function Dt(this: any, t: any): any {
  return (nt as any)((e: any): any => {
    ((e as any).setDate as any)((((e as any).getDate as any)() as any) - ((((((e as any).getDay as any)() as any) + (7 as any) as any) - (t as any) as any) % (7 as any) as any)), ((e as any).setHours as any)(0, 0, 0, 0);
  }, (e: any, n: any): any => {
    ((e as any).setDate as any)((((e as any).getDate as any)() as any) + ((n as any) * (7 as any) as any));
  }, (e: any, n: any): any => (((n as any) - (e as any) as any) - (((((n as any).getTimezoneOffset as any)() as any) - (((e as any).getTimezoneOffset as any)() as any) as any) * (ct as any) as any) as any) / (Se as any));
}
const zt: any = (Dt as any)(0),
  Vt: any = (Dt as any)(1),
  vn: any = (Dt as any)(2),
  Tn: any = (Dt as any)(3),
  bt: any = (Dt as any)(4),
  xn: any = (Dt as any)(5),
  bn: any = (Dt as any)(6);
(zt as any).range;
(Vt as any).range;
(vn as any).range;
(Tn as any).range;
(bt as any).range;
(xn as any).range;
(bn as any).range;
function Mt(this: any, t: any): any {
  return (nt as any)((e: any): any => {
    ((e as any).setUTCDate as any)((((e as any).getUTCDate as any)() as any) - ((((((e as any).getUTCDay as any)() as any) + (7 as any) as any) - (t as any) as any) % (7 as any) as any)), ((e as any).setUTCHours as any)(0, 0, 0, 0);
  }, (e: any, n: any): any => {
    ((e as any).setUTCDate as any)((((e as any).getUTCDate as any)() as any) + ((n as any) * (7 as any) as any));
  }, (e: any, n: any): any => ((n as any) - (e as any) as any) / (Se as any));
}
const wn: any = (Mt as any)(0),
  re: any = (Mt as any)(1),
  wr: any = (Mt as any)(2),
  Dr: any = (Mt as any)(3),
  It: any = (Mt as any)(4),
  Mr: any = (Mt as any)(5),
  Cr: any = (Mt as any)(6);
(wn as any).range;
(re as any).range;
(wr as any).range;
(Dr as any).range;
(It as any).range;
(Mr as any).range;
(Cr as any).range;
const Rt: any = (nt as any)((t: any): any => {
  ((t as any).setDate as any)(1), ((t as any).setHours as any)(0, 0, 0, 0);
}, (t: any, e: any): any => {
  ((t as any).setMonth as any)((((t as any).getMonth as any)() as any) + (e as any));
}, (t: any, e: any): any => ((((e as any).getMonth as any)() as any) - (((t as any).getMonth as any)() as any) as any) + (((((e as any).getFullYear as any)() as any) - (((t as any).getFullYear as any)() as any) as any) * (12 as any) as any), (t: any): any => ((t as any).getMonth as any)());
(Rt as any).range;
const Sr: any = (nt as any)((t: any): any => {
  ((t as any).setUTCDate as any)(1), ((t as any).setUTCHours as any)(0, 0, 0, 0);
}, (t: any, e: any): any => {
  ((t as any).setUTCMonth as any)((((t as any).getUTCMonth as any)() as any) + (e as any));
}, (t: any, e: any): any => ((((e as any).getUTCMonth as any)() as any) - (((t as any).getUTCMonth as any)() as any) as any) + (((((e as any).getUTCFullYear as any)() as any) - (((t as any).getUTCFullYear as any)() as any) as any) * (12 as any) as any), (t: any): any => ((t as any).getUTCMonth as any)());
(Sr as any).range;
const kt: any = (nt as any)((t: any): any => {
  ((t as any).setMonth as any)(0, 1), ((t as any).setHours as any)(0, 0, 0, 0);
}, (t: any, e: any): any => {
  ((t as any).setFullYear as any)((((t as any).getFullYear as any)() as any) + (e as any));
}, (t: any, e: any): any => (((e as any).getFullYear as any)() as any) - (((t as any).getFullYear as any)() as any), (t: any): any => ((t as any).getFullYear as any)());
(kt as any).every = (t: any): any => !(isFinite as any)(t = ((Math as any).floor as any)(t)) || !((t as any) > (0 as any)) ? null : (nt as any)((e: any): any => {
  ((e as any).setFullYear as any)((((Math as any).floor as any)((((e as any).getFullYear as any)() as any) / (t as any)) as any) * (t as any)), ((e as any).setMonth as any)(0, 1), ((e as any).setHours as any)(0, 0, 0, 0);
}, (e: any, n: any): any => {
  ((e as any).setFullYear as any)((((e as any).getFullYear as any)() as any) + ((n as any) * (t as any) as any));
});
(kt as any).range;
const wt: any = (nt as any)((t: any): any => {
  ((t as any).setUTCMonth as any)(0, 1), ((t as any).setUTCHours as any)(0, 0, 0, 0);
}, (t: any, e: any): any => {
  ((t as any).setUTCFullYear as any)((((t as any).getUTCFullYear as any)() as any) + (e as any));
}, (t: any, e: any): any => (((e as any).getUTCFullYear as any)() as any) - (((t as any).getUTCFullYear as any)() as any), (t: any): any => ((t as any).getUTCFullYear as any)());
(wt as any).every = (t: any): any => !(isFinite as any)(t = ((Math as any).floor as any)(t)) || !((t as any) > (0 as any)) ? null : (nt as any)((e: any): any => {
  ((e as any).setUTCFullYear as any)((((Math as any).floor as any)((((e as any).getUTCFullYear as any)() as any) / (t as any)) as any) * (t as any)), ((e as any).setUTCMonth as any)(0, 1), ((e as any).setUTCHours as any)(0, 0, 0, 0);
}, (e: any, n: any): any => {
  ((e as any).setUTCFullYear as any)((((e as any).getUTCFullYear as any)() as any) + ((n as any) * (t as any) as any));
});
(wt as any).range;
function _r(this: any, t: any, e: any, n: any, r: any, i: any, s: any): any {
  const a: any = [[vt, 1, mt], [vt, 5, (5 as any) * (mt as any)], [vt, 15, (15 as any) * (mt as any)], [vt, 30, (30 as any) * (mt as any)], [s, 1, ct], [s, 5, (5 as any) * (ct as any)], [s, 15, (15 as any) * (ct as any)], [s, 30, (30 as any) * (ct as any)], [i, 1, gt], [i, 3, (3 as any) * (gt as any)], [i, 6, (6 as any) * (gt as any)], [i, 12, (12 as any) * (gt as any)], [r, 1, yt], [r, 2, (2 as any) * (yt as any)], [n, 1, Se], [e, 1, Ve], [e, 3, (3 as any) * (Ve as any)], [t, 1, ke]];
  function y(this: any, S: any, w: any, P: any): any {
    const _: any = (w as any) < (S as any);
    _ && ([S, w] = [w, S]);
    const F: any = P && (typeof (P as any).range as any) == ("function" as any) ? P : (Y as any)(S, w, P),
      X: any = F ? ((F as any).range as any)(S, (+w as any) + (1 as any)) : [];
    return _ ? ((X as any).reverse as any)() : X;
  }
  function Y(this: any, S: any, w: any, P: any): any {
    const _: any = (((Math as any).abs as any)((w as any) - (S as any)) as any) / (P as any),
      F: any = (((Qn as any)(([,, v]: any): any => v) as any).right as any)(a, _);
    if ((F as any) === ((a as any).length as any)) return ((t as any).every as any)((Ne as any)((S as any) / (ke as any), (w as any) / (ke as any), P));
    if ((F as any) === (0 as any)) return ((Et as any).every as any)(((Math as any).max as any)((Ne as any)(S, w, P), 1));
    const [X, Z]: any = (a as any)[((_ as any) / (((a as any)[(F as any) - (1 as any)] as any)[2] as any) as any) < ((((a as any)[F] as any)[2] as any) / (_ as any) as any) ? (F as any) - (1 as any) : F];
    return ((X as any).every as any)(Z);
  }
  return [y, Y];
}
const [Fr, Yr]: any = (_r as any)(kt, Rt, zt, xt, Pt, Nt);
function pe(this: any, t: any): any {
  if ((0 as any) <= ((t as any).y as any) && ((t as any).y as any) < (100 as any)) {
    var e: any = new (Date as any)(-1, (t as any).m, (t as any).d, (t as any).H, (t as any).M, (t as any).S, (t as any).L);
    return ((e as any).setFullYear as any)((t as any).y), e;
  }
  return new (Date as any)((t as any).y, (t as any).m, (t as any).d, (t as any).H, (t as any).M, (t as any).S, (t as any).L);
}
function ve(this: any, t: any): any {
  if ((0 as any) <= ((t as any).y as any) && ((t as any).y as any) < (100 as any)) {
    var e: any = new (Date as any)(((Date as any).UTC as any)(-1, (t as any).m, (t as any).d, (t as any).H, (t as any).M, (t as any).S, (t as any).L));
    return ((e as any).setUTCFullYear as any)((t as any).y), e;
  }
  return new (Date as any)(((Date as any).UTC as any)((t as any).y, (t as any).m, (t as any).d, (t as any).H, (t as any).M, (t as any).S, (t as any).L));
}
function $t(this: any, t: any, e: any, n: any): any {
  return {
    y: t,
    m: e,
    d: n,
    H: 0,
    M: 0,
    S: 0,
    L: 0
  };
}
function Ur(this: any, t: any): any {
  var e: any = (t as any).dateTime,
    n: any = (t as any).date,
    r: any = (t as any).time,
    i: any = (t as any).periods,
    s: any = (t as any).days,
    a: any = (t as any).shortDays,
    y: any = (t as any).months,
    Y: any = (t as any).shortMonths,
    S: any = (Ot as any)(i),
    w: any = (Ht as any)(i),
    P: any = (Ot as any)(s),
    _: any = (Ht as any)(s),
    F: any = (Ot as any)(a),
    X: any = (Ht as any)(a),
    Z: any = (Ot as any)(y),
    v: any = (Ht as any)(y),
    U: any = (Ot as any)(Y),
    R: any = (Ht as any)(Y),
    E: any = {
      a: m,
      A: I,
      b: o,
      B: W,
      c: null,
      d: Xe,
      e: Xe,
      f: ti,
      g: li,
      G: di,
      H: Qr,
      I: Jr,
      j: Kr,
      L: Dn,
      m: ei,
      M: ni,
      p: u,
      q: K,
      Q: Qe,
      s: Je,
      S: ri,
      u: ii,
      U: si,
      V: ai,
      w: oi,
      W: ci,
      x: null,
      X: null,
      y: ui,
      Y: fi,
      Z: hi,
      "%": je
    },
    z: any = {
      a: l,
      A: $,
      b: O,
      B: j,
      c: null,
      d: Ge,
      e: Ge,
      f: ki,
      g: Si,
      G: Fi,
      H: mi,
      I: gi,
      j: yi,
      L: Cn,
      m: pi,
      M: vi,
      p: H,
      q: J,
      Q: Qe,
      s: Je,
      S: Ti,
      u: xi,
      U: bi,
      V: wi,
      w: Di,
      W: Mi,
      x: null,
      X: null,
      y: Ci,
      Y: _i,
      Z: Yi,
      "%": je
    },
    G: any = {
      a: x,
      A: C,
      b: M,
      B: D,
      c,
      d: Ze,
      e: Ze,
      f: Br,
      g: qe,
      G: ze,
      H: Be,
      I: Be,
      j: Rr,
      L: Zr,
      m: Vr,
      M: zr,
      p: L,
      q: Pr,
      Q: Gr,
      s: jr,
      S: qr,
      u: Wr,
      U: $r,
      V: Or,
      w: Ar,
      W: Hr,
      x: g,
      X: b,
      y: qe,
      Y: ze,
      Z: Nr,
      "%": Xr
    };
  (E as any).x = (T as any)(n, E), (E as any).X = (T as any)(r, E), (E as any).c = (T as any)(e, E), (z as any).x = (T as any)(n, z), (z as any).X = (T as any)(r, z), (z as any).c = (T as any)(e, z);
  function T(this: any, h: any, N: any): any {
    return function (this: any, V: any): any {
      var f: any = [],
        tt: any = -1,
        A: any = 0,
        Q: any = (h as any).length,
        B: any,
        st: any,
        at: any;
      for (V instanceof Date || (V = new (Date as any)(+V)); (++tt as any) < (Q as any);) (((h as any).charCodeAt as any)(tt) as any) === (37 as any) && (((f as any).push as any)(((h as any).slice as any)(A, tt)), ((st = (Re as any)[B = ((h as any).charAt as any)(++tt)]) as any) != (null as any) ? B = ((h as any).charAt as any)(++tt) : st = (B as any) === ("e" as any) ? " " : "0", (at = (N as any)[B]) && (B = (at as any)(V, st)), ((f as any).push as any)(B), A = (tt as any) + (1 as any));
      return ((f as any).push as any)(((h as any).slice as any)(A, tt)), ((f as any).join as any)("");
    };
  }
  function k(this: any, h: any, N: any): any {
    return function (this: any, V: any): any {
      var f: any = ($t as any)(1900, void 0, 1),
        tt: any = (p as any)(f, h, V += "", 0),
        A: any,
        Q: any;
      if ((tt as any) != ((V as any).length as any)) return null;
      if ("Q" in f) return new (Date as any)((f as any).Q);
      if ("s" in f) return new (Date as any)((((f as any).s as any) * (1e3 as any) as any) + (("L" in f ? (f as any).L : 0) as any));
      if (N && !("Z" in f) && ((f as any).Z = 0), "p" in f && ((f as any).H = (((f as any).H as any) % (12 as any) as any) + (((f as any).p as any) * (12 as any) as any)), ((f as any).m as any) === (void 0 as any) && ((f as any).m = "q" in f ? (f as any).q : 0), "V" in f) {
        if (((f as any).V as any) < (1 as any) || ((f as any).V as any) > (53 as any)) return null;
        "w" in f || ((f as any).w = 1), "Z" in f ? (A = (ve as any)(($t as any)((f as any).y, 0, 1)), Q = ((A as any).getUTCDay as any)(), A = (Q as any) > (4 as any) || (Q as any) === (0 as any) ? ((re as any).ceil as any)(A) : (re as any)(A), A = ((_e as any).offset as any)(A, (((f as any).V as any) - (1 as any) as any) * (7 as any)), (f as any).y = ((A as any).getUTCFullYear as any)(), (f as any).m = ((A as any).getUTCMonth as any)(), (f as any).d = (((A as any).getUTCDate as any)() as any) + ((((f as any).w as any) + (6 as any) as any) % (7 as any) as any)) : (A = (pe as any)(($t as any)((f as any).y, 0, 1)), Q = ((A as any).getDay as any)(), A = (Q as any) > (4 as any) || (Q as any) === (0 as any) ? ((Vt as any).ceil as any)(A) : (Vt as any)(A), A = ((xt as any).offset as any)(A, (((f as any).V as any) - (1 as any) as any) * (7 as any)), (f as any).y = ((A as any).getFullYear as any)(), (f as any).m = ((A as any).getMonth as any)(), (f as any).d = (((A as any).getDate as any)() as any) + ((((f as any).w as any) + (6 as any) as any) % (7 as any) as any));
      } else ("W" in f || "U" in f) && ("w" in f || ((f as any).w = "u" in f ? ((f as any).u as any) % (7 as any) : "W" in f ? 1 : 0), Q = "Z" in f ? (((ve as any)(($t as any)((f as any).y, 0, 1)) as any).getUTCDay as any)() : (((pe as any)(($t as any)((f as any).y, 0, 1)) as any).getDay as any)(), (f as any).m = 0, (f as any).d = "W" in f ? (((((f as any).w as any) + (6 as any) as any) % (7 as any) as any) + (((f as any).W as any) * (7 as any) as any) as any) - (((Q as any) + (5 as any) as any) % (7 as any) as any) : (((f as any).w as any) + (((f as any).U as any) * (7 as any) as any) as any) - (((Q as any) + (6 as any) as any) % (7 as any) as any));
      return "Z" in f ? ((f as any).H += (((f as any).Z as any) / (100 as any) as any) | (0 as any), (f as any).M += ((f as any).Z as any) % (100 as any), (ve as any)(f)) : (pe as any)(f);
    };
  }
  function p(this: any, h: any, N: any, V: any, f: any): any {
    for (var tt: any = 0, A: any = (N as any).length, Q: any = (V as any).length, B: any, st: any; (tt as any) < (A as any);) {
      if ((f as any) >= (Q as any)) return -1;
      if (B = ((N as any).charCodeAt as any)(tt++), (B as any) === (37 as any)) {
        if (B = ((N as any).charAt as any)(tt++), st = (G as any)[B in Re ? ((N as any).charAt as any)(tt++) : B], !st || ((f = (st as any)(h, V, f)) as any) < (0 as any)) return -1;
      } else if ((B as any) != (((V as any).charCodeAt as any)(f++) as any)) return -1;
    }
    return f;
  }
  function L(this: any, h: any, N: any, V: any): any {
    var f: any = ((S as any).exec as any)(((N as any).slice as any)(V));
    return f ? ((h as any).p = ((w as any).get as any)((((f as any)[0] as any).toLowerCase as any)()), (V as any) + (((f as any)[0] as any).length as any)) : -1;
  }
  function x(this: any, h: any, N: any, V: any): any {
    var f: any = ((F as any).exec as any)(((N as any).slice as any)(V));
    return f ? ((h as any).w = ((X as any).get as any)((((f as any)[0] as any).toLowerCase as any)()), (V as any) + (((f as any)[0] as any).length as any)) : -1;
  }
  function C(this: any, h: any, N: any, V: any): any {
    var f: any = ((P as any).exec as any)(((N as any).slice as any)(V));
    return f ? ((h as any).w = ((_ as any).get as any)((((f as any)[0] as any).toLowerCase as any)()), (V as any) + (((f as any)[0] as any).length as any)) : -1;
  }
  function M(this: any, h: any, N: any, V: any): any {
    var f: any = ((U as any).exec as any)(((N as any).slice as any)(V));
    return f ? ((h as any).m = ((R as any).get as any)((((f as any)[0] as any).toLowerCase as any)()), (V as any) + (((f as any)[0] as any).length as any)) : -1;
  }
  function D(this: any, h: any, N: any, V: any): any {
    var f: any = ((Z as any).exec as any)(((N as any).slice as any)(V));
    return f ? ((h as any).m = ((v as any).get as any)((((f as any)[0] as any).toLowerCase as any)()), (V as any) + (((f as any)[0] as any).length as any)) : -1;
  }
  function c(this: any, h: any, N: any, V: any): any {
    return (p as any)(h, e, N, V);
  }
  function g(this: any, h: any, N: any, V: any): any {
    return (p as any)(h, n, N, V);
  }
  function b(this: any, h: any, N: any, V: any): any {
    return (p as any)(h, r, N, V);
  }
  function m(this: any, h: any): any {
    return (a as any)[((h as any).getDay as any)()];
  }
  function I(this: any, h: any): any {
    return (s as any)[((h as any).getDay as any)()];
  }
  function o(this: any, h: any): any {
    return (Y as any)[((h as any).getMonth as any)()];
  }
  function W(this: any, h: any): any {
    return (y as any)[((h as any).getMonth as any)()];
  }
  function u(this: any, h: any): any {
    return (i as any)[+((((h as any).getHours as any)() as any) >= (12 as any))];
  }
  function K(this: any, h: any): any {
    return (1 as any) + (~~((((h as any).getMonth as any)() as any) / (3 as any)) as any);
  }
  function l(this: any, h: any): any {
    return (a as any)[((h as any).getUTCDay as any)()];
  }
  function $(this: any, h: any): any {
    return (s as any)[((h as any).getUTCDay as any)()];
  }
  function O(this: any, h: any): any {
    return (Y as any)[((h as any).getUTCMonth as any)()];
  }
  function j(this: any, h: any): any {
    return (y as any)[((h as any).getUTCMonth as any)()];
  }
  function H(this: any, h: any): any {
    return (i as any)[+((((h as any).getUTCHours as any)() as any) >= (12 as any))];
  }
  function J(this: any, h: any): any {
    return (1 as any) + (~~((((h as any).getUTCMonth as any)() as any) / (3 as any)) as any);
  }
  return {
    format: function (this: any, h: any): any {
      var N: any = (T as any)(h += "", E);
      return (N as any).toString = function (this: any): any {
        return h;
      }, N;
    },
    parse: function (this: any, h: any): any {
      var N: any = (k as any)(h += "", !1);
      return (N as any).toString = function (this: any): any {
        return h;
      }, N;
    },
    utcFormat: function (this: any, h: any): any {
      var N: any = (T as any)(h += "", z);
      return (N as any).toString = function (this: any): any {
        return h;
      }, N;
    },
    utcParse: function (this: any, h: any): any {
      var N: any = (k as any)(h += "", !0);
      return (N as any).toString = function (this: any): any {
        return h;
      }, N;
    }
  };
}
var Re: any = {
    "-": "",
    _: " ",
    0: "0"
  },
  rt: any = /^\s*\d+/,
  Er: any = /^%/,
  Ir: any = /[\\^$*+?|[\]().{}]/g;
function q(this: any, t: any, e: any, n: any): any {
  var r: any = (t as any) < (0 as any) ? "-" : "",
    i: any = ((r ? -t : t) as any) + ("" as any),
    s: any = (i as any).length;
  return (r as any) + (((s as any) < (n as any) ? (((new (Array as any)(((n as any) - (s as any) as any) + (1 as any)) as any).join as any)(e) as any) + (i as any) : i) as any);
}
function Lr(this: any, t: any): any {
  return ((t as any).replace as any)(Ir, "\\$&");
}
function Ot(this: any, t: any): any {
  return new (RegExp as any)((("^(?:" as any) + (((((t as any).map as any)(Lr) as any).join as any)("|") as any) as any) + (")" as any), "i");
}
function Ht(this: any, t: any): any {
  return new (Map as any)(((t as any).map as any)((e: any, n: any): any => [((e as any).toLowerCase as any)(), n]));
}
function Ar(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n, (n as any) + (1 as any)));
  return r ? ((t as any).w = +(r as any)[0], (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function Wr(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n, (n as any) + (1 as any)));
  return r ? ((t as any).u = +(r as any)[0], (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function $r(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n, (n as any) + (2 as any)));
  return r ? ((t as any).U = +(r as any)[0], (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function Or(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n, (n as any) + (2 as any)));
  return r ? ((t as any).V = +(r as any)[0], (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function Hr(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n, (n as any) + (2 as any)));
  return r ? ((t as any).W = +(r as any)[0], (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function ze(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n, (n as any) + (4 as any)));
  return r ? ((t as any).y = +(r as any)[0], (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function qe(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n, (n as any) + (2 as any)));
  return r ? ((t as any).y = (+(r as any)[0] as any) + (((+(r as any)[0] as any) > (68 as any) ? 1900 : 2e3) as any), (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function Nr(this: any, t: any, e: any, n: any): any {
  var r: any = ((/^(Z)|([+-]\d\d)(?::?(\d\d))?/ as any).exec as any)(((e as any).slice as any)(n, (n as any) + (6 as any)));
  return r ? ((t as any).Z = (r as any)[1] ? 0 : -(((r as any)[2] as any) + (((r as any)[3] || "00") as any)), (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function Pr(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n, (n as any) + (1 as any)));
  return r ? ((t as any).q = (((r as any)[0] as any) * (3 as any) as any) - (3 as any), (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function Vr(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n, (n as any) + (2 as any)));
  return r ? ((t as any).m = ((r as any)[0] as any) - (1 as any), (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function Ze(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n, (n as any) + (2 as any)));
  return r ? ((t as any).d = +(r as any)[0], (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function Rr(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n, (n as any) + (3 as any)));
  return r ? ((t as any).m = 0, (t as any).d = +(r as any)[0], (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function Be(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n, (n as any) + (2 as any)));
  return r ? ((t as any).H = +(r as any)[0], (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function zr(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n, (n as any) + (2 as any)));
  return r ? ((t as any).M = +(r as any)[0], (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function qr(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n, (n as any) + (2 as any)));
  return r ? ((t as any).S = +(r as any)[0], (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function Zr(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n, (n as any) + (3 as any)));
  return r ? ((t as any).L = +(r as any)[0], (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function Br(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n, (n as any) + (6 as any)));
  return r ? ((t as any).L = ((Math as any).floor as any)(((r as any)[0] as any) / (1e3 as any)), (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function Xr(this: any, t: any, e: any, n: any): any {
  var r: any = ((Er as any).exec as any)(((e as any).slice as any)(n, (n as any) + (1 as any)));
  return r ? (n as any) + (((r as any)[0] as any).length as any) : -1;
}
function Gr(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n));
  return r ? ((t as any).Q = +(r as any)[0], (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function jr(this: any, t: any, e: any, n: any): any {
  var r: any = ((rt as any).exec as any)(((e as any).slice as any)(n));
  return r ? ((t as any).s = +(r as any)[0], (n as any) + (((r as any)[0] as any).length as any)) : -1;
}
function Xe(this: any, t: any, e: any): any {
  return (q as any)(((t as any).getDate as any)(), e, 2);
}
function Qr(this: any, t: any, e: any): any {
  return (q as any)(((t as any).getHours as any)(), e, 2);
}
function Jr(this: any, t: any, e: any): any {
  return (q as any)((((t as any).getHours as any)() as any) % (12 as any) || 12, e, 2);
}
function Kr(this: any, t: any, e: any): any {
  return (q as any)((1 as any) + (((xt as any).count as any)((kt as any)(t), t) as any), e, 3);
}
function Dn(this: any, t: any, e: any): any {
  return (q as any)(((t as any).getMilliseconds as any)(), e, 3);
}
function ti(this: any, t: any, e: any): any {
  return ((Dn as any)(t, e) as any) + ("000" as any);
}
function ei(this: any, t: any, e: any): any {
  return (q as any)((((t as any).getMonth as any)() as any) + (1 as any), e, 2);
}
function ni(this: any, t: any, e: any): any {
  return (q as any)(((t as any).getMinutes as any)(), e, 2);
}
function ri(this: any, t: any, e: any): any {
  return (q as any)(((t as any).getSeconds as any)(), e, 2);
}
function ii(this: any, t: any): any {
  var e: any = ((t as any).getDay as any)();
  return (e as any) === (0 as any) ? 7 : e;
}
function si(this: any, t: any, e: any): any {
  return (q as any)(((zt as any).count as any)(((kt as any)(t) as any) - (1 as any), t), e, 2);
}
function Mn(this: any, t: any): any {
  var e: any = ((t as any).getDay as any)();
  return (e as any) >= (4 as any) || (e as any) === (0 as any) ? (bt as any)(t) : ((bt as any).ceil as any)(t);
}
function ai(this: any, t: any, e: any): any {
  return t = (Mn as any)(t), (q as any)((((bt as any).count as any)((kt as any)(t), t) as any) + ((((((kt as any)(t) as any).getDay as any)() as any) === (4 as any)) as any), e, 2);
}
function oi(this: any, t: any): any {
  return ((t as any).getDay as any)();
}
function ci(this: any, t: any, e: any): any {
  return (q as any)(((Vt as any).count as any)(((kt as any)(t) as any) - (1 as any), t), e, 2);
}
function ui(this: any, t: any, e: any): any {
  return (q as any)((((t as any).getFullYear as any)() as any) % (100 as any), e, 2);
}
function li(this: any, t: any, e: any): any {
  return t = (Mn as any)(t), (q as any)((((t as any).getFullYear as any)() as any) % (100 as any), e, 2);
}
function fi(this: any, t: any, e: any): any {
  return (q as any)((((t as any).getFullYear as any)() as any) % (1e4 as any), e, 4);
}
function di(this: any, t: any, e: any): any {
  var n: any = ((t as any).getDay as any)();
  return t = (n as any) >= (4 as any) || (n as any) === (0 as any) ? (bt as any)(t) : ((bt as any).ceil as any)(t), (q as any)((((t as any).getFullYear as any)() as any) % (1e4 as any), e, 4);
}
function hi(this: any, t: any): any {
  var e: any = ((t as any).getTimezoneOffset as any)();
  return ((((e as any) > (0 as any) ? "-" : (e *= -1, "+")) as any) + ((q as any)(((e as any) / (60 as any) as any) | (0 as any), "0", 2) as any) as any) + ((q as any)((e as any) % (60 as any), "0", 2) as any);
}
function Ge(this: any, t: any, e: any): any {
  return (q as any)(((t as any).getUTCDate as any)(), e, 2);
}
function mi(this: any, t: any, e: any): any {
  return (q as any)(((t as any).getUTCHours as any)(), e, 2);
}
function gi(this: any, t: any, e: any): any {
  return (q as any)((((t as any).getUTCHours as any)() as any) % (12 as any) || 12, e, 2);
}
function yi(this: any, t: any, e: any): any {
  return (q as any)((1 as any) + (((_e as any).count as any)((wt as any)(t), t) as any), e, 3);
}
function Cn(this: any, t: any, e: any): any {
  return (q as any)(((t as any).getUTCMilliseconds as any)(), e, 3);
}
function ki(this: any, t: any, e: any): any {
  return ((Cn as any)(t, e) as any) + ("000" as any);
}
function pi(this: any, t: any, e: any): any {
  return (q as any)((((t as any).getUTCMonth as any)() as any) + (1 as any), e, 2);
}
function vi(this: any, t: any, e: any): any {
  return (q as any)(((t as any).getUTCMinutes as any)(), e, 2);
}
function Ti(this: any, t: any, e: any): any {
  return (q as any)(((t as any).getUTCSeconds as any)(), e, 2);
}
function xi(this: any, t: any): any {
  var e: any = ((t as any).getUTCDay as any)();
  return (e as any) === (0 as any) ? 7 : e;
}
function bi(this: any, t: any, e: any): any {
  return (q as any)(((wn as any).count as any)(((wt as any)(t) as any) - (1 as any), t), e, 2);
}
function Sn(this: any, t: any): any {
  var e: any = ((t as any).getUTCDay as any)();
  return (e as any) >= (4 as any) || (e as any) === (0 as any) ? (It as any)(t) : ((It as any).ceil as any)(t);
}
function wi(this: any, t: any, e: any): any {
  return t = (Sn as any)(t), (q as any)((((It as any).count as any)((wt as any)(t), t) as any) + ((((((wt as any)(t) as any).getUTCDay as any)() as any) === (4 as any)) as any), e, 2);
}
function Di(this: any, t: any): any {
  return ((t as any).getUTCDay as any)();
}
function Mi(this: any, t: any, e: any): any {
  return (q as any)(((re as any).count as any)(((wt as any)(t) as any) - (1 as any), t), e, 2);
}
function Ci(this: any, t: any, e: any): any {
  return (q as any)((((t as any).getUTCFullYear as any)() as any) % (100 as any), e, 2);
}
function Si(this: any, t: any, e: any): any {
  return t = (Sn as any)(t), (q as any)((((t as any).getUTCFullYear as any)() as any) % (100 as any), e, 2);
}
function _i(this: any, t: any, e: any): any {
  return (q as any)((((t as any).getUTCFullYear as any)() as any) % (1e4 as any), e, 4);
}
function Fi(this: any, t: any, e: any): any {
  var n: any = ((t as any).getUTCDay as any)();
  return t = (n as any) >= (4 as any) || (n as any) === (0 as any) ? (It as any)(t) : ((It as any).ceil as any)(t), (q as any)((((t as any).getUTCFullYear as any)() as any) % (1e4 as any), e, 4);
}
function Yi(this: any): any {
  return "+0000";
}
function je(this: any): any {
  return "%";
}
function Qe(this: any, t: any): any {
  return +t;
}
function Je(this: any, t: any): any {
  return ((Math as any).floor as any)((+t as any) / (1e3 as any));
}
var St: any, ie: any;
(Ui as any)({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Ui(this: any, t: any): any {
  return St = (Ur as any)(t), ie = (St as any).format, (St as any).parse, (St as any).utcFormat, (St as any).utcParse, St;
}
function Ei(this: any, t: any): any {
  return new (Date as any)(t);
}
function Ii(this: any, t: any): any {
  return t instanceof Date ? +t : +new (Date as any)(+t);
}
function _n(this: any, t: any, e: any, n: any, r: any, i: any, s: any, a: any, y: any, Y: any, S: any): any {
  var w: any = (Jn as any)(),
    P: any = (w as any).invert,
    _: any = (w as any).domain,
    F: any = (S as any)(".%L"),
    X: any = (S as any)(":%S"),
    Z: any = (S as any)("%I:%M"),
    v: any = (S as any)("%I %p"),
    U: any = (S as any)("%a %d"),
    R: any = (S as any)("%b %d"),
    E: any = (S as any)("%B"),
    z: any = (S as any)("%Y");
  function G(this: any, T: any): any {
    return ((((Y as any)(T) as any) < (T as any) ? F : ((y as any)(T) as any) < (T as any) ? X : ((a as any)(T) as any) < (T as any) ? Z : ((s as any)(T) as any) < (T as any) ? v : ((r as any)(T) as any) < (T as any) ? ((i as any)(T) as any) < (T as any) ? U : R : ((n as any)(T) as any) < (T as any) ? E : z) as any)(T);
  }
  return (w as any).invert = function (this: any, T: any): any {
    return new (Date as any)((P as any)(T));
  }, (w as any).domain = function (this: any, T: any): any {
    return (arguments as any).length ? (_ as any)(((Array as any).from as any)(T, Ii)) : (((_ as any)() as any).map as any)(Ei);
  }, (w as any).ticks = function (this: any, T: any): any {
    var k: any = (_ as any)();
    return (t as any)((k as any)[0], (k as any)[((k as any).length as any) - (1 as any)], T ?? 10);
  }, (w as any).tickFormat = function (this: any, T: any, k: any): any {
    return (k as any) == (null as any) ? G : (S as any)(k);
  }, (w as any).nice = function (this: any, T: any): any {
    var k: any = (_ as any)();
    return (!T || (typeof (T as any).range as any) != ("function" as any)) && (T = (e as any)((k as any)[0], (k as any)[((k as any).length as any) - (1 as any)], T ?? 10)), T ? (_ as any)((vr as any)(k, T)) : w;
  }, (w as any).copy = function (this: any): any {
    return (Kn as any)(w, (_n as any)(t, e, n, r, i, s, a, y, Y, S));
  }, w;
}
function Li(this: any): any {
  return ((er as any).apply as any)((((_n as any)(Fr, Yr, kt, Rt, zt, xt, Pt, Nt, vt, ie) as any).domain as any)([new (Date as any)(2e3, 0, 1), new (Date as any)(2e3, 0, 2)]), arguments);
}
var jt: any = {
    exports: {}
  },
  Ai: any = (jt as any).exports,
  Ke: any;
function Wi(this: any): any {
  return Ke || (Ke = 1, (function (this: any, t: any, e: any): any {
    (function (this: any, n: any, r: any): any {
      (t as any).exports = (r as any)();
    } as any)(Ai, function (this: any): any {
      var n: string = "day";
      return function (this: any, r: any, i: any, s: any): any {
        var a: any = function (this: any, S: any): any {
            return ((S as any).add as any)((4 as any) - (((S as any).isoWeekday as any)() as any), n);
          },
          y: any = (i as any).prototype;
        (y as any).isoWeekYear = function (this: any): any {
          return (((a as any)(this) as any).year as any)();
        }, (y as any).isoWeek = function (this: any, S: any): any {
          if (!((((this as any).$utils as any)() as any).u as any)(S)) return ((this as any).add as any)((7 as any) * ((S as any) - (((this as any).isoWeek as any)() as any) as any), n);
          var w: any,
            P: any,
            _: any,
            F: any,
            X: any = (a as any)(this),
            Z: any = (w = ((this as any).isoWeekYear as any)(), P = (this as any).$u, _ = ((((((P ? (s as any).utc : s) as any)() as any).year as any)(w) as any).startOf as any)("year"), F = (4 as any) - (((_ as any).isoWeekday as any)() as any), (((_ as any).isoWeekday as any)() as any) > (4 as any) && (F += 7), ((_ as any).add as any)(F, n));
          return (((X as any).diff as any)(Z, "week") as any) + (1 as any);
        }, (y as any).isoWeekday = function (this: any, S: any): any {
          return ((((this as any).$utils as any)() as any).u as any)(S) ? ((this as any).day as any)() || 7 : ((this as any).day as any)((((this as any).day as any)() as any) % (7 as any) ? S : (S as any) - (7 as any));
        };
        var Y: any = (y as any).startOf;
        (y as any).startOf = function (this: any, S: any, w: any): any {
          var P: any = ((this as any).$utils as any)(),
            _: any = !!((P as any).u as any)(w) || w;
          return (((P as any).p as any)(S) as any) === ("isoweek" as any) ? _ ? ((((this as any).date as any)((((this as any).date as any)() as any) - ((((this as any).isoWeekday as any)() as any) - (1 as any) as any)) as any).startOf as any)("day") : ((((this as any).date as any)((((((this as any).date as any)() as any) - (1 as any) as any) - ((((this as any).isoWeekday as any)() as any) - (1 as any) as any) as any) + (7 as any)) as any).endOf as any)("day") : (((Y as any).bind as any)(this) as any)(S, w);
        };
      };
    });
  } as any)(jt)), (jt as any).exports;
}
var $i: any = (Wi as any)();
const Oi: any = (oe as any)($i);
var Qt: any = {
    exports: {}
  },
  Hi: any = (Qt as any).exports,
  tn: any;
function Ni(this: any): any {
  return tn || (tn = 1, (function (this: any, t: any, e: any): any {
    (function (this: any, n: any, r: any): any {
      (t as any).exports = (r as any)();
    } as any)(Hi, function (this: any): any {
      var n: any = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        r: any = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
        i: any = /\d/,
        s: any = /\d\d/,
        a: any = /\d\d?/,
        y: any = /\d*[^-_:/,()\s\d]+/,
        Y: any = {},
        S: any = function (this: any, v: any): any {
          return ((v = +v) as any) + (((v as any) > (68 as any) ? 1900 : 2e3) as any);
        },
        w: any = function (this: any, v: any): any {
          return function (this: any, U: any): any {
            (this as any)[v] = +U;
          };
        },
        P: any = [/[+-]\d\d:?(\d\d)?|Z/, function (this: any, v: any): any {
          (((this as any).zone || ((this as any).zone = {})) as any).offset = (function (this: any, U: any): any {
            if (!U || (U as any) === ("Z" as any)) return 0;
            var R: any = ((U as any).match as any)(/([+-]|\d\d)/g),
              E: any = ((60 as any) * ((R as any)[1] as any) as any) + ((+(R as any)[2] || 0) as any);
            return (E as any) === (0 as any) ? 0 : ((R as any)[0] as any) === ("+" as any) ? -E : E;
          } as any)(v);
        }],
        _: any = function (this: any, v: any): any {
          var U: any = (Y as any)[v];
          return U && ((U as any).indexOf ? U : (((U as any).s as any).concat as any)((U as any).f));
        },
        F: any = function (this: any, v: any, U: any): any {
          var R: any,
            E: any = (Y as any).meridiem;
          if (E) {
            for (var z: any = 1; (z as any) <= (24 as any); z += 1) if ((((v as any).indexOf as any)((E as any)(z, 0, U)) as any) > (-1 as any)) {
              R = (z as any) > (12 as any);
              break;
            }
          } else R = (v as any) === ((U ? "pm" : "PM") as any);
          return R;
        },
        X: any = {
          A: [y, function (this: any, v: any): any {
            (this as any).afternoon = (F as any)(v, !1);
          }],
          a: [y, function (this: any, v: any): any {
            (this as any).afternoon = (F as any)(v, !0);
          }],
          Q: [i, function (this: any, v: any): any {
            (this as any).month = ((3 as any) * ((v as any) - (1 as any) as any) as any) + (1 as any);
          }],
          S: [i, function (this: any, v: any): any {
            (this as any).milliseconds = (100 as any) * (+v as any);
          }],
          SS: [s, function (this: any, v: any): any {
            (this as any).milliseconds = (10 as any) * (+v as any);
          }],
          SSS: [/\d{3}/, function (this: any, v: any): any {
            (this as any).milliseconds = +v;
          }],
          s: [a, (w as any)("seconds")],
          ss: [a, (w as any)("seconds")],
          m: [a, (w as any)("minutes")],
          mm: [a, (w as any)("minutes")],
          H: [a, (w as any)("hours")],
          h: [a, (w as any)("hours")],
          HH: [a, (w as any)("hours")],
          hh: [a, (w as any)("hours")],
          D: [a, (w as any)("day")],
          DD: [s, (w as any)("day")],
          Do: [y, function (this: any, v: any): any {
            var U: any = (Y as any).ordinal,
              R: any = ((v as any).match as any)(/\d+/);
            if ((this as any).day = (R as any)[0], U) for (var E: any = 1; (E as any) <= (31 as any); E += 1) ((((U as any)(E) as any).replace as any)(/\[|\]/g, "") as any) === (v as any) && ((this as any).day = E);
          }],
          w: [a, (w as any)("week")],
          ww: [s, (w as any)("week")],
          M: [a, (w as any)("month")],
          MM: [s, (w as any)("month")],
          MMM: [y, function (this: any, v: any): any {
            var U: any = (_ as any)("months"),
              R: any = (((((_ as any)("monthsShort") || ((U as any).map as any)(function (this: any, E: any): any {
                return ((E as any).slice as any)(0, 3);
              })) as any).indexOf as any)(v) as any) + (1 as any);
            if ((R as any) < (1 as any)) throw new (Error as any)();
            (this as any).month = (R as any) % (12 as any) || R;
          }],
          MMMM: [y, function (this: any, v: any): any {
            var U: any = ((((_ as any)("months") as any).indexOf as any)(v) as any) + (1 as any);
            if ((U as any) < (1 as any)) throw new (Error as any)();
            (this as any).month = (U as any) % (12 as any) || U;
          }],
          Y: [/[+-]?\d+/, (w as any)("year")],
          YY: [s, function (this: any, v: any): any {
            (this as any).year = (S as any)(v);
          }],
          YYYY: [/\d{4}/, (w as any)("year")],
          Z: P,
          ZZ: P
        };
      function Z(this: any, v: any): any {
        var U: any, R: any;
        U = v, R = Y && (Y as any).formats;
        for (var E: any = (((v = ((U as any).replace as any)(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (this: any, x: any, C: any, M: any): any {
            var D: any = M && ((M as any).toUpperCase as any)();
            return C || (R as any)[M] || (n as any)[M] || (((R as any)[D] as any).replace as any)(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (this: any, c: any, g: any, b: any): any {
              return g || ((b as any).slice as any)(1);
            });
          })) as any).match as any)(r), z: any = (E as any).length, G: any = 0; (G as any) < (z as any); G += 1) {
          var T: any = (E as any)[G],
            k: any = (X as any)[T],
            p: any = k && (k as any)[0],
            L: any = k && (k as any)[1];
          (E as any)[G] = L ? {
            regex: p,
            parser: L
          } : ((T as any).replace as any)(/^\[|\]$/g, "");
        }
        return function (this: any, x: any): any {
          for (var C: any = {}, M: any = 0, D: any = 0; (M as any) < (z as any); M += 1) {
            var c: any = (E as any)[M];
            if ((typeof c as any) == ("string" as any)) D += (c as any).length;else {
              var g: any = (c as any).regex,
                b: any = (c as any).parser,
                m: any = ((x as any).slice as any)(D),
                I: any = (((g as any).exec as any)(m) as any)[0];
              ((b as any).call as any)(C, I), x = ((x as any).replace as any)(I, "");
            }
          }
          return (function (this: any, o: any): any {
            var W: any = (o as any).afternoon;
            if ((W as any) !== (void 0 as any)) {
              var u: any = (o as any).hours;
              W ? (u as any) < (12 as any) && ((o as any).hours += 12) : (u as any) === (12 as any) && ((o as any).hours = 0), delete (o as any).afternoon;
            }
          } as any)(C), C;
        };
      }
      return function (this: any, v: any, U: any, R: any): any {
        ((R as any).p as any).customParseFormat = !0, v && (v as any).parseTwoDigitYear && (S = (v as any).parseTwoDigitYear);
        var E: any = (U as any).prototype,
          z: any = (E as any).parse;
        (E as any).parse = function (this: any, G: any): any {
          var T: any = (G as any).date,
            k: any = (G as any).utc,
            p: any = (G as any).args;
          (this as any).$u = k;
          var L: any = (p as any)[1];
          if ((typeof L as any) == ("string" as any)) {
            var x: any = ((p as any)[2] as any) === (!0 as any),
              C: any = ((p as any)[3] as any) === (!0 as any),
              M: any = x || C,
              D: any = (p as any)[2];
            C && (D = (p as any)[2]), Y = ((this as any).$locale as any)(), !x && D && (Y = ((R as any).Ls as any)[D]), (this as any).$d = (function (this: any, m: any, I: any, o: any, W: any): any {
              try {
                if ((((["x", "X"] as any).indexOf as any)(I) as any) > (-1 as any)) return new (Date as any)((((I as any) === ("X" as any) ? 1e3 : 1) as any) * (m as any));
                var u: any = ((Z as any)(I) as any)(m),
                  K: any = (u as any).year,
                  l: any = (u as any).month,
                  $: any = (u as any).day,
                  O: any = (u as any).hours,
                  j: any = (u as any).minutes,
                  H: any = (u as any).seconds,
                  J: any = (u as any).milliseconds,
                  h: any = (u as any).zone,
                  N: any = (u as any).week,
                  V: any = new (Date as any)(),
                  f: any = $ || (K || l ? 1 : ((V as any).getDate as any)()),
                  tt: any = K || ((V as any).getFullYear as any)(),
                  A: any = 0;
                K && !l || (A = (l as any) > (0 as any) ? (l as any) - (1 as any) : ((V as any).getMonth as any)());
                var Q: any,
                  B: any = O || 0,
                  st: any = j || 0,
                  at: any = H || 0,
                  pt: any = J || 0;
                return h ? new (Date as any)(((Date as any).UTC as any)(tt, A, f, B, st, at, (pt as any) + (((60 as any) * ((h as any).offset as any) as any) * (1e3 as any) as any))) : o ? new (Date as any)(((Date as any).UTC as any)(tt, A, f, B, st, at, pt)) : (Q = new (Date as any)(tt, A, f, B, st, at, pt), N && (Q = (((((W as any)(Q) as any).week as any)(N) as any).toDate as any)()), Q);
              } catch {
                return new (Date as any)("");
              }
            } as any)(T, L, k, R), ((this as any).init as any)(), D && (D as any) !== (!0 as any) && ((this as any).$L = (((this as any).locale as any)(D) as any).$L), M && (T as any) != (((this as any).format as any)(L) as any) && ((this as any).$d = new (Date as any)("")), Y = {};
          } else if (L instanceof Array) for (var c: any = (L as any).length, g: any = 1; (g as any) <= (c as any); g += 1) {
            (p as any)[1] = (L as any)[(g as any) - (1 as any)];
            var b: any = ((R as any).apply as any)(this, p);
            if (((b as any).isValid as any)()) {
              (this as any).$d = (b as any).$d, (this as any).$L = (b as any).$L, ((this as any).init as any)();
              break;
            }
            (g as any) === (c as any) && ((this as any).$d = new (Date as any)(""));
          } else ((z as any).call as any)(this, G);
        };
      };
    });
  } as any)(Qt)), (Qt as any).exports;
}
var Pi: any = (Ni as any)();
const Vi: any = (oe as any)(Pi);
var Jt: any = {
    exports: {}
  },
  Ri: any = (Jt as any).exports,
  en: any;
function zi(this: any): any {
  return en || (en = 1, (function (this: any, t: any, e: any): any {
    (function (this: any, n: any, r: any): any {
      (t as any).exports = (r as any)();
    } as any)(Ri, function (this: any): any {
      return function (this: any, n: any, r: any): any {
        var i: any = (r as any).prototype,
          s: any = (i as any).format;
        (i as any).format = function (this: any, a: any): any {
          var y: any = this,
            Y: any = ((this as any).$locale as any)();
          if (!((this as any).isValid as any)()) return (((s as any).bind as any)(this) as any)(a);
          var S: any = ((this as any).$utils as any)(),
            w: any = (((a || "YYYY-MM-DDTHH:mm:ssZ") as any).replace as any)(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function (this: any, P: any): any {
              switch (P) {
                case "Q":
                  return ((Math as any).ceil as any)((((y as any).$M as any) + (1 as any) as any) / (3 as any));
                case "Do":
                  return ((Y as any).ordinal as any)((y as any).$D);
                case "gggg":
                  return ((y as any).weekYear as any)();
                case "GGGG":
                  return ((y as any).isoWeekYear as any)();
                case "wo":
                  return ((Y as any).ordinal as any)(((y as any).week as any)(), "W");
                case "w":
                case "ww":
                  return ((S as any).s as any)(((y as any).week as any)(), (P as any) === ("w" as any) ? 1 : 2, "0");
                case "W":
                case "WW":
                  return ((S as any).s as any)(((y as any).isoWeek as any)(), (P as any) === ("W" as any) ? 1 : 2, "0");
                case "k":
                case "kk":
                  return ((S as any).s as any)((String as any)(((y as any).$H as any) === (0 as any) ? 24 : (y as any).$H), (P as any) === ("k" as any) ? 1 : 2, "0");
                case "X":
                  return ((Math as any).floor as any)(((((y as any).$d as any).getTime as any)() as any) / (1e3 as any));
                case "x":
                  return (((y as any).$d as any).getTime as any)();
                case "z":
                  return (("[" as any) + (((y as any).offsetName as any)() as any) as any) + ("]" as any);
                case "zzz":
                  return (("[" as any) + (((y as any).offsetName as any)("long") as any) as any) + ("]" as any);
                default:
                  return P;
              }
            });
          return (((s as any).bind as any)(this) as any)(w);
        };
      };
    });
  } as any)(Jt)), (Jt as any).exports;
}
var qi: any = (zi as any)();
const Zi: any = (oe as any)(qi);
var Kt: any = {
    exports: {}
  },
  Bi: any = (Kt as any).exports,
  nn: any;
function Xi(this: any): any {
  return nn || (nn = 1, (function (this: any, t: any, e: any): any {
    (function (this: any, n: any, r: any): any {
      (t as any).exports = (r as any)();
    } as any)(Bi, function (this: any): any {
      var n: any,
        r: any,
        i: number = 1e3,
        s: number = 6e4,
        a: number = 36e5,
        y: number = 864e5,
        Y: any = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        S: number = 31536e6,
        w: number = 2628e6,
        P: any = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
        _: any = {
          years: S,
          months: w,
          days: y,
          hours: a,
          minutes: s,
          seconds: i,
          milliseconds: 1,
          weeks: 6048e5
        },
        F: any = function (this: any, T: any): any {
          return T instanceof z;
        },
        X: any = function (this: any, T: any, k: any, p: any): any {
          return new (z as any)(T, p, (k as any).$l);
        },
        Z: any = function (this: any, T: any): any {
          return (((r as any).p as any)(T) as any) + ("s" as any);
        },
        v: any = function (this: any, T: any): any {
          return (T as any) < (0 as any);
        },
        U: any = function (this: any, T: any): any {
          return (v as any)(T) ? ((Math as any).ceil as any)(T) : ((Math as any).floor as any)(T);
        },
        R: any = function (this: any, T: any): any {
          return ((Math as any).abs as any)(T);
        },
        E: any = function (this: any, T: any, k: any): any {
          return T ? (v as any)(T) ? {
            negative: !0,
            format: (("" as any) + ((R as any)(T) as any) as any) + (k as any)
          } : {
            negative: !1,
            format: (("" as any) + (T as any) as any) + (k as any)
          } : {
            negative: !1,
            format: ""
          };
        },
        z: any = (function (this: any): any {
          function T(this: any, p: any, L: any, x: any): any {
            var C: any = this;
            if ((this as any).$d = {}, (this as any).$l = x, (p as any) === (void 0 as any) && ((this as any).$ms = 0, ((this as any).parseFromMilliseconds as any)()), L) return (X as any)((p as any) * ((_ as any)[(Z as any)(L)] as any), this);
            if ((typeof p as any) == ("number" as any)) return (this as any).$ms = p, ((this as any).parseFromMilliseconds as any)(), this;
            if ((typeof p as any) == ("object" as any)) return ((((Object as any).keys as any)(p) as any).forEach as any)(function (this: any, c: any): any {
              ((C as any).$d as any)[(Z as any)(c)] = (p as any)[c];
            }), ((this as any).calMilliseconds as any)(), this;
            if ((typeof p as any) == ("string" as any)) {
              var M: any = ((p as any).match as any)(P);
              if (M) {
                var D: any = ((((M as any).slice as any)(2) as any).map as any)(function (this: any, c: any): any {
                  return (c as any) != (null as any) ? (Number as any)(c) : 0;
                });
                return ((this as any).$d as any).years = (D as any)[0], ((this as any).$d as any).months = (D as any)[1], ((this as any).$d as any).weeks = (D as any)[2], ((this as any).$d as any).days = (D as any)[3], ((this as any).$d as any).hours = (D as any)[4], ((this as any).$d as any).minutes = (D as any)[5], ((this as any).$d as any).seconds = (D as any)[6], ((this as any).calMilliseconds as any)(), this;
              }
            }
            return this;
          }
          var k: any = (T as any).prototype;
          return (k as any).calMilliseconds = function (this: any): any {
            var p: any = this;
            (this as any).$ms = ((((Object as any).keys as any)((this as any).$d) as any).reduce as any)(function (this: any, L: any, x: any): any {
              return (L as any) + (((((p as any).$d as any)[x] || 0) as any) * ((_ as any)[x] as any) as any);
            }, 0);
          }, (k as any).parseFromMilliseconds = function (this: any): any {
            var p: any = (this as any).$ms;
            ((this as any).$d as any).years = (U as any)((p as any) / (S as any)), p %= S, ((this as any).$d as any).months = (U as any)((p as any) / (w as any)), p %= w, ((this as any).$d as any).days = (U as any)((p as any) / (y as any)), p %= y, ((this as any).$d as any).hours = (U as any)((p as any) / (a as any)), p %= a, ((this as any).$d as any).minutes = (U as any)((p as any) / (s as any)), p %= s, ((this as any).$d as any).seconds = (U as any)((p as any) / (i as any)), p %= i, ((this as any).$d as any).milliseconds = p;
          }, (k as any).toISOString = function (this: any): any {
            var p: any = (E as any)(((this as any).$d as any).years, "Y"),
              L: any = (E as any)(((this as any).$d as any).months, "M"),
              x: any = +((this as any).$d as any).days || 0;
            ((this as any).$d as any).weeks && (x += (7 as any) * (((this as any).$d as any).weeks as any));
            var C: any = (E as any)(x, "D"),
              M: any = (E as any)(((this as any).$d as any).hours, "H"),
              D: any = (E as any)(((this as any).$d as any).minutes, "M"),
              c: any = ((this as any).$d as any).seconds || 0;
            ((this as any).$d as any).milliseconds && (c += (((this as any).$d as any).milliseconds as any) / (1e3 as any), c = (((Math as any).round as any)((1e3 as any) * (c as any)) as any) / (1e3 as any));
            var g: any = (E as any)(c, "S"),
              b: any = (p as any).negative || (L as any).negative || (C as any).negative || (M as any).negative || (D as any).negative || (g as any).negative,
              m: any = (M as any).format || (D as any).format || (g as any).format ? "T" : "",
              I: any = (((((((((b ? "-" : "") as any) + ("P" as any) as any) + ((p as any).format as any) as any) + ((L as any).format as any) as any) + ((C as any).format as any) as any) + (m as any) as any) + ((M as any).format as any) as any) + ((D as any).format as any) as any) + ((g as any).format as any);
            return (I as any) === ("P" as any) || (I as any) === ("-P" as any) ? "P0D" : I;
          }, (k as any).toJSON = function (this: any): any {
            return ((this as any).toISOString as any)();
          }, (k as any).format = function (this: any, p: any): any {
            var L: any = p || "YYYY-MM-DDTHH:mm:ss",
              x: any = {
                Y: ((this as any).$d as any).years,
                YY: ((r as any).s as any)(((this as any).$d as any).years, 2, "0"),
                YYYY: ((r as any).s as any)(((this as any).$d as any).years, 4, "0"),
                M: ((this as any).$d as any).months,
                MM: ((r as any).s as any)(((this as any).$d as any).months, 2, "0"),
                D: ((this as any).$d as any).days,
                DD: ((r as any).s as any)(((this as any).$d as any).days, 2, "0"),
                H: ((this as any).$d as any).hours,
                HH: ((r as any).s as any)(((this as any).$d as any).hours, 2, "0"),
                m: ((this as any).$d as any).minutes,
                mm: ((r as any).s as any)(((this as any).$d as any).minutes, 2, "0"),
                s: ((this as any).$d as any).seconds,
                ss: ((r as any).s as any)(((this as any).$d as any).seconds, 2, "0"),
                SSS: ((r as any).s as any)(((this as any).$d as any).milliseconds, 3, "0")
              };
            return ((L as any).replace as any)(Y, function (this: any, C: any, M: any): any {
              return M || (String as any)((x as any)[C]);
            });
          }, (k as any).as = function (this: any, p: any): any {
            return ((this as any).$ms as any) / ((_ as any)[(Z as any)(p)] as any);
          }, (k as any).get = function (this: any, p: any): any {
            var L: any = (this as any).$ms,
              x: any = (Z as any)(p);
            return (x as any) === ("milliseconds" as any) ? L %= 1e3 : L = (x as any) === ("weeks" as any) ? (U as any)((L as any) / ((_ as any)[x] as any)) : ((this as any).$d as any)[x], L || 0;
          }, (k as any).add = function (this: any, p: any, L: any, x: any): any {
            var C: any;
            return C = L ? (p as any) * ((_ as any)[(Z as any)(L)] as any) : (F as any)(p) ? (p as any).$ms : ((X as any)(p, this) as any).$ms, (X as any)(((this as any).$ms as any) + ((C as any) * ((x ? -1 : 1) as any) as any), this);
          }, (k as any).subtract = function (this: any, p: any, L: any): any {
            return ((this as any).add as any)(p, L, !0);
          }, (k as any).locale = function (this: any, p: any): any {
            var L: any = ((this as any).clone as any)();
            return (L as any).$l = p, L;
          }, (k as any).clone = function (this: any): any {
            return (X as any)((this as any).$ms, this);
          }, (k as any).humanize = function (this: any, p: any): any {
            return (((((((n as any)() as any).add as any)((this as any).$ms, "ms") as any).locale as any)((this as any).$l) as any).fromNow as any)(!p);
          }, (k as any).valueOf = function (this: any): any {
            return ((this as any).asMilliseconds as any)();
          }, (k as any).milliseconds = function (this: any): any {
            return ((this as any).get as any)("milliseconds");
          }, (k as any).asMilliseconds = function (this: any): any {
            return ((this as any).as as any)("milliseconds");
          }, (k as any).seconds = function (this: any): any {
            return ((this as any).get as any)("seconds");
          }, (k as any).asSeconds = function (this: any): any {
            return ((this as any).as as any)("seconds");
          }, (k as any).minutes = function (this: any): any {
            return ((this as any).get as any)("minutes");
          }, (k as any).asMinutes = function (this: any): any {
            return ((this as any).as as any)("minutes");
          }, (k as any).hours = function (this: any): any {
            return ((this as any).get as any)("hours");
          }, (k as any).asHours = function (this: any): any {
            return ((this as any).as as any)("hours");
          }, (k as any).days = function (this: any): any {
            return ((this as any).get as any)("days");
          }, (k as any).asDays = function (this: any): any {
            return ((this as any).as as any)("days");
          }, (k as any).weeks = function (this: any): any {
            return ((this as any).get as any)("weeks");
          }, (k as any).asWeeks = function (this: any): any {
            return ((this as any).as as any)("weeks");
          }, (k as any).months = function (this: any): any {
            return ((this as any).get as any)("months");
          }, (k as any).asMonths = function (this: any): any {
            return ((this as any).as as any)("months");
          }, (k as any).years = function (this: any): any {
            return ((this as any).get as any)("years");
          }, (k as any).asYears = function (this: any): any {
            return ((this as any).as as any)("years");
          }, T;
        } as any)(),
        G: any = function (this: any, T: any, k: any, p: any): any {
          return ((((((((((((((T as any).add as any)((((k as any).years as any)() as any) * (p as any), "y") as any).add as any)((((k as any).months as any)() as any) * (p as any), "M") as any).add as any)((((k as any).days as any)() as any) * (p as any), "d") as any).add as any)((((k as any).hours as any)() as any) * (p as any), "h") as any).add as any)((((k as any).minutes as any)() as any) * (p as any), "m") as any).add as any)((((k as any).seconds as any)() as any) * (p as any), "s") as any).add as any)((((k as any).milliseconds as any)() as any) * (p as any), "ms");
        };
      return function (this: any, T: any, k: any, p: any): any {
        n = p, r = (((p as any)() as any).$utils as any)(), (p as any).duration = function (this: any, C: any, M: any): any {
          var D: any = ((p as any).locale as any)();
          return (X as any)(C, {
            $l: D
          }, M);
        }, (p as any).isDuration = F;
        var L: any = ((k as any).prototype as any).add,
          x: any = ((k as any).prototype as any).subtract;
        ((k as any).prototype as any).add = function (this: any, C: any, M: any): any {
          return (F as any)(C) ? (G as any)(this, C, 1) : (((L as any).bind as any)(this) as any)(C, M);
        }, ((k as any).prototype as any).subtract = function (this: any, C: any, M: any): any {
          return (F as any)(C) ? (G as any)(this, C, -1) : (((x as any).bind as any)(this) as any)(C, M);
        };
      };
    });
  } as any)(Kt)), (Kt as any).exports;
}
var Gi: any = (Xi as any)();
const ji: any = (oe as any)(Gi);
var we: any = (function (this: any): any {
  var t: any = (d as any)(function (this: any, D: any, c: any, g: any, b: any): any {
      for (g = g || {}, b = (D as any).length; b--; (g as any)[(D as any)[b]] = c);
      return g;
    }, "o"),
    e: any = [6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 35, 36, 38, 40],
    n: any = [1, 26],
    r: any = [1, 27],
    i: any = [1, 28],
    s: any = [1, 29],
    a: any = [1, 30],
    y: any = [1, 31],
    Y: any = [1, 32],
    S: any = [1, 33],
    w: any = [1, 34],
    P: any = [1, 9],
    _: any = [1, 10],
    F: any = [1, 11],
    X: any = [1, 12],
    Z: any = [1, 13],
    v: any = [1, 14],
    U: any = [1, 15],
    R: any = [1, 16],
    E: any = [1, 19],
    z: any = [1, 20],
    G: any = [1, 21],
    T: any = [1, 22],
    k: any = [1, 23],
    p: any = [1, 25],
    L: any = [1, 35],
    x: any = {
      trace: (d as any)(function (this: any): any {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        gantt: 4,
        document: 5,
        EOF: 6,
        line: 7,
        SPACE: 8,
        statement: 9,
        NL: 10,
        weekday: 11,
        weekday_monday: 12,
        weekday_tuesday: 13,
        weekday_wednesday: 14,
        weekday_thursday: 15,
        weekday_friday: 16,
        weekday_saturday: 17,
        weekday_sunday: 18,
        weekend: 19,
        weekend_friday: 20,
        weekend_saturday: 21,
        dateFormat: 22,
        inclusiveEndDates: 23,
        topAxis: 24,
        axisFormat: 25,
        tickInterval: 26,
        excludes: 27,
        includes: 28,
        todayMarker: 29,
        title: 30,
        acc_title: 31,
        acc_title_value: 32,
        acc_descr: 33,
        acc_descr_value: 34,
        acc_descr_multiline_value: 35,
        section: 36,
        clickStatement: 37,
        taskTxt: 38,
        taskData: 39,
        click: 40,
        callbackname: 41,
        callbackargs: 42,
        href: 43,
        clickStatementDebug: 44,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        4: "gantt",
        6: "EOF",
        8: "SPACE",
        10: "NL",
        12: "weekday_monday",
        13: "weekday_tuesday",
        14: "weekday_wednesday",
        15: "weekday_thursday",
        16: "weekday_friday",
        17: "weekday_saturday",
        18: "weekday_sunday",
        20: "weekend_friday",
        21: "weekend_saturday",
        22: "dateFormat",
        23: "inclusiveEndDates",
        24: "topAxis",
        25: "axisFormat",
        26: "tickInterval",
        27: "excludes",
        28: "includes",
        29: "todayMarker",
        30: "title",
        31: "acc_title",
        32: "acc_title_value",
        33: "acc_descr",
        34: "acc_descr_value",
        35: "acc_descr_multiline_value",
        36: "section",
        38: "taskTxt",
        39: "taskData",
        40: "click",
        41: "callbackname",
        42: "callbackargs",
        43: "href"
      },
      productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [19, 1], [19, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 2], [37, 2], [37, 3], [37, 3], [37, 4], [37, 3], [37, 4], [37, 2], [44, 2], [44, 3], [44, 3], [44, 4], [44, 3], [44, 4], [44, 2]],
      performAction: (d as any)(function (this: any, c: any, g: any, b: any, m: any, I: any, o: any, W: any): any {
        var u: any = ((o as any).length as any) - (1 as any);
        switch (I) {
          case 1:
            return (o as any)[(u as any) - (1 as any)];
          case 2:
            (this as any).$ = [];
            break;
          case 3:
            (((o as any)[(u as any) - (1 as any)] as any).push as any)((o as any)[u]), (this as any).$ = (o as any)[(u as any) - (1 as any)];
            break;
          case 4:
          case 5:
            (this as any).$ = (o as any)[u];
            break;
          case 6:
          case 7:
            (this as any).$ = [];
            break;
          case 8:
            ((m as any).setWeekday as any)("monday");
            break;
          case 9:
            ((m as any).setWeekday as any)("tuesday");
            break;
          case 10:
            ((m as any).setWeekday as any)("wednesday");
            break;
          case 11:
            ((m as any).setWeekday as any)("thursday");
            break;
          case 12:
            ((m as any).setWeekday as any)("friday");
            break;
          case 13:
            ((m as any).setWeekday as any)("saturday");
            break;
          case 14:
            ((m as any).setWeekday as any)("sunday");
            break;
          case 15:
            ((m as any).setWeekend as any)("friday");
            break;
          case 16:
            ((m as any).setWeekend as any)("saturday");
            break;
          case 17:
            ((m as any).setDateFormat as any)((((o as any)[u] as any).substr as any)(11)), (this as any).$ = (((o as any)[u] as any).substr as any)(11);
            break;
          case 18:
            ((m as any).enableInclusiveEndDates as any)(), (this as any).$ = (((o as any)[u] as any).substr as any)(18);
            break;
          case 19:
            ((m as any).TopAxis as any)(), (this as any).$ = (((o as any)[u] as any).substr as any)(8);
            break;
          case 20:
            ((m as any).setAxisFormat as any)((((o as any)[u] as any).substr as any)(11)), (this as any).$ = (((o as any)[u] as any).substr as any)(11);
            break;
          case 21:
            ((m as any).setTickInterval as any)((((o as any)[u] as any).substr as any)(13)), (this as any).$ = (((o as any)[u] as any).substr as any)(13);
            break;
          case 22:
            ((m as any).setExcludes as any)((((o as any)[u] as any).substr as any)(9)), (this as any).$ = (((o as any)[u] as any).substr as any)(9);
            break;
          case 23:
            ((m as any).setIncludes as any)((((o as any)[u] as any).substr as any)(9)), (this as any).$ = (((o as any)[u] as any).substr as any)(9);
            break;
          case 24:
            ((m as any).setTodayMarker as any)((((o as any)[u] as any).substr as any)(12)), (this as any).$ = (((o as any)[u] as any).substr as any)(12);
            break;
          case 27:
            ((m as any).setDiagramTitle as any)((((o as any)[u] as any).substr as any)(6)), (this as any).$ = (((o as any)[u] as any).substr as any)(6);
            break;
          case 28:
            (this as any).$ = (((o as any)[u] as any).trim as any)(), ((m as any).setAccTitle as any)((this as any).$);
            break;
          case 29:
          case 30:
            (this as any).$ = (((o as any)[u] as any).trim as any)(), ((m as any).setAccDescription as any)((this as any).$);
            break;
          case 31:
            ((m as any).addSection as any)((((o as any)[u] as any).substr as any)(8)), (this as any).$ = (((o as any)[u] as any).substr as any)(8);
            break;
          case 33:
            ((m as any).addTask as any)((o as any)[(u as any) - (1 as any)], (o as any)[u]), (this as any).$ = "task";
            break;
          case 34:
            (this as any).$ = (o as any)[(u as any) - (1 as any)], ((m as any).setClickEvent as any)((o as any)[(u as any) - (1 as any)], (o as any)[u], null);
            break;
          case 35:
            (this as any).$ = (o as any)[(u as any) - (2 as any)], ((m as any).setClickEvent as any)((o as any)[(u as any) - (2 as any)], (o as any)[(u as any) - (1 as any)], (o as any)[u]);
            break;
          case 36:
            (this as any).$ = (o as any)[(u as any) - (2 as any)], ((m as any).setClickEvent as any)((o as any)[(u as any) - (2 as any)], (o as any)[(u as any) - (1 as any)], null), ((m as any).setLink as any)((o as any)[(u as any) - (2 as any)], (o as any)[u]);
            break;
          case 37:
            (this as any).$ = (o as any)[(u as any) - (3 as any)], ((m as any).setClickEvent as any)((o as any)[(u as any) - (3 as any)], (o as any)[(u as any) - (2 as any)], (o as any)[(u as any) - (1 as any)]), ((m as any).setLink as any)((o as any)[(u as any) - (3 as any)], (o as any)[u]);
            break;
          case 38:
            (this as any).$ = (o as any)[(u as any) - (2 as any)], ((m as any).setClickEvent as any)((o as any)[(u as any) - (2 as any)], (o as any)[u], null), ((m as any).setLink as any)((o as any)[(u as any) - (2 as any)], (o as any)[(u as any) - (1 as any)]);
            break;
          case 39:
            (this as any).$ = (o as any)[(u as any) - (3 as any)], ((m as any).setClickEvent as any)((o as any)[(u as any) - (3 as any)], (o as any)[(u as any) - (1 as any)], (o as any)[u]), ((m as any).setLink as any)((o as any)[(u as any) - (3 as any)], (o as any)[(u as any) - (2 as any)]);
            break;
          case 40:
            (this as any).$ = (o as any)[(u as any) - (1 as any)], ((m as any).setLink as any)((o as any)[(u as any) - (1 as any)], (o as any)[u]);
            break;
          case 41:
          case 47:
            (this as any).$ = (((o as any)[(u as any) - (1 as any)] as any) + (" " as any) as any) + ((o as any)[u] as any);
            break;
          case 42:
          case 43:
          case 45:
            (this as any).$ = (((((o as any)[(u as any) - (2 as any)] as any) + (" " as any) as any) + ((o as any)[(u as any) - (1 as any)] as any) as any) + (" " as any) as any) + ((o as any)[u] as any);
            break;
          case 44:
          case 46:
            (this as any).$ = (((((((o as any)[(u as any) - (3 as any)] as any) + (" " as any) as any) + ((o as any)[(u as any) - (2 as any)] as any) as any) + (" " as any) as any) + ((o as any)[(u as any) - (1 as any)] as any) as any) + (" " as any) as any) + ((o as any)[u] as any);
            break;
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: [1, 2]
      }, {
        1: [3]
      }, (t as any)(e, [2, 2], {
        5: 3
      }), {
        6: [1, 4],
        7: 5,
        8: [1, 6],
        9: 7,
        10: [1, 8],
        11: 17,
        12: n,
        13: r,
        14: i,
        15: s,
        16: a,
        17: y,
        18: Y,
        19: 18,
        20: S,
        21: w,
        22: P,
        23: _,
        24: F,
        25: X,
        26: Z,
        27: v,
        28: U,
        29: R,
        30: E,
        31: z,
        33: G,
        35: T,
        36: k,
        37: 24,
        38: p,
        40: L
      }, (t as any)(e, [2, 7], {
        1: [2, 1]
      }), (t as any)(e, [2, 3]), {
        9: 36,
        11: 17,
        12: n,
        13: r,
        14: i,
        15: s,
        16: a,
        17: y,
        18: Y,
        19: 18,
        20: S,
        21: w,
        22: P,
        23: _,
        24: F,
        25: X,
        26: Z,
        27: v,
        28: U,
        29: R,
        30: E,
        31: z,
        33: G,
        35: T,
        36: k,
        37: 24,
        38: p,
        40: L
      }, (t as any)(e, [2, 5]), (t as any)(e, [2, 6]), (t as any)(e, [2, 17]), (t as any)(e, [2, 18]), (t as any)(e, [2, 19]), (t as any)(e, [2, 20]), (t as any)(e, [2, 21]), (t as any)(e, [2, 22]), (t as any)(e, [2, 23]), (t as any)(e, [2, 24]), (t as any)(e, [2, 25]), (t as any)(e, [2, 26]), (t as any)(e, [2, 27]), {
        32: [1, 37]
      }, {
        34: [1, 38]
      }, (t as any)(e, [2, 30]), (t as any)(e, [2, 31]), (t as any)(e, [2, 32]), {
        39: [1, 39]
      }, (t as any)(e, [2, 8]), (t as any)(e, [2, 9]), (t as any)(e, [2, 10]), (t as any)(e, [2, 11]), (t as any)(e, [2, 12]), (t as any)(e, [2, 13]), (t as any)(e, [2, 14]), (t as any)(e, [2, 15]), (t as any)(e, [2, 16]), {
        41: [1, 40],
        43: [1, 41]
      }, (t as any)(e, [2, 4]), (t as any)(e, [2, 28]), (t as any)(e, [2, 29]), (t as any)(e, [2, 33]), (t as any)(e, [2, 34], {
        42: [1, 42],
        43: [1, 43]
      }), (t as any)(e, [2, 40], {
        41: [1, 44]
      }), (t as any)(e, [2, 35], {
        43: [1, 45]
      }), (t as any)(e, [2, 36]), (t as any)(e, [2, 38], {
        42: [1, 46]
      }), (t as any)(e, [2, 37]), (t as any)(e, [2, 39])],
      defaultActions: {},
      parseError: (d as any)(function (this: any, c: any, g: any): any {
        if ((g as any).recoverable) ((this as any).trace as any)(c);else {
          var b: any = new (Error as any)(c);
          throw (b as any).hash = g, b;
        }
      }, "parseError"),
      parse: (d as any)(function (this: any, c: any): any {
        var h: any;
        var g: any = this,
          b: any = [0],
          m: any = [],
          I: any = [null],
          o: any = [],
          W: any = (this as any).table,
          u: any = "",
          K: any = 0,
          l: any = 0,
          $: number = 2,
          O: number = 1,
          j: any = (((o as any).slice as any).call as any)(arguments, 1),
          H: any = ((Object as any).create as any)((this as any).lexer),
          J: any = {
            yy: {}
          };
        for (h in (this as any).yy) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).yy, h) && (((J as any).yy as any)[h] = ((this as any).yy as any)[h]);
        ((H as any).setInput as any)(c, (J as any).yy), ((J as any).yy as any).lexer = H, ((J as any).yy as any).parser = this, (typeof (H as any).yylloc as any) > ("u" as any) && ((H as any).yylloc = {});
        var N: any = (H as any).yylloc;
        ((o as any).push as any)(N);
        var V: any = (H as any).options && ((H as any).options as any).ranges;
        (typeof ((J as any).yy as any).parseError as any) == ("function" as any) ? (this as any).parseError = ((J as any).yy as any).parseError : (this as any).parseError = (((Object as any).getPrototypeOf as any)(this) as any).parseError;
        function f(this: any, ot: any): any {
          (b as any).length = ((b as any).length as any) - ((2 as any) * (ot as any) as any), (I as any).length = ((I as any).length as any) - (ot as any), (o as any).length = ((o as any).length as any) - (ot as any);
        }
        (d as any)(f, "popStack");
        function tt(this: any): any {
          var ot: any;
          return ot = ((m as any).pop as any)() || ((H as any).lex as any)() || O, (typeof ot as any) != ("number" as any) && (ot instanceof Array && (m = ot, ot = ((m as any).pop as any)()), ot = ((g as any).symbols_ as any)[ot] || ot), ot;
        }
        (d as any)(tt, "lex");
        for (var A: any, Q: any, B: any, st: any, at: any = {}, pt: any, ut: any, He: any, Zt: any;;) {
          if (Q = (b as any)[((b as any).length as any) - (1 as any)], ((this as any).defaultActions as any)[Q] ? B = ((this as any).defaultActions as any)[Q] : (((A as any) === (null as any) || (typeof A as any) > ("u" as any)) && (A = (tt as any)()), B = (W as any)[Q] && ((W as any)[Q] as any)[A]), (typeof B as any) > ("u" as any) || !(B as any).length || !(B as any)[0]) {
            var ce: any = "";
            Zt = [];
            for (pt in (W as any)[Q]) ((this as any).terminals_ as any)[pt] && (pt as any) > ($ as any) && ((Zt as any).push as any)((("'" as any) + (((this as any).terminals_ as any)[pt] as any) as any) + ("'" as any));
            (H as any).showPosition ? ce = (((((((("Parse error on line " as any) + ((K as any) + (1 as any) as any) as any) + (`:
` as any) as any) + (((H as any).showPosition as any)() as any) as any) + (`
Expecting ` as any) as any) + (((Zt as any).join as any)(", ") as any) as any) + (", got '" as any) as any) + ((((this as any).terminals_ as any)[A] || A) as any) as any) + ("'" as any) : ce = ((("Parse error on line " as any) + ((K as any) + (1 as any) as any) as any) + (": Unexpected " as any) as any) + (((A as any) == (O as any) ? "end of input" : (("'" as any) + ((((this as any).terminals_ as any)[A] || A) as any) as any) + ("'" as any)) as any), ((this as any).parseError as any)(ce, {
              text: (H as any).match,
              token: ((this as any).terminals_ as any)[A] || A,
              line: (H as any).yylineno,
              loc: N,
              expected: Zt
            });
          }
          if ((B as any)[0] instanceof Array && ((B as any).length as any) > (1 as any)) throw new (Error as any)(((("Parse Error: multiple actions possible at state: " as any) + (Q as any) as any) + (", token: " as any) as any) + (A as any));
          switch ((B as any)[0]) {
            case 1:
              ((b as any).push as any)(A), ((I as any).push as any)((H as any).yytext), ((o as any).push as any)((H as any).yylloc), ((b as any).push as any)((B as any)[1]), A = null, l = (H as any).yyleng, u = (H as any).yytext, K = (H as any).yylineno, N = (H as any).yylloc;
              break;
            case 2:
              if (ut = (((this as any).productions_ as any)[(B as any)[1]] as any)[1], (at as any).$ = (I as any)[((I as any).length as any) - (ut as any)], (at as any)._$ = {
                first_line: ((o as any)[((o as any).length as any) - ((ut || 1) as any)] as any).first_line,
                last_line: ((o as any)[((o as any).length as any) - (1 as any)] as any).last_line,
                first_column: ((o as any)[((o as any).length as any) - ((ut || 1) as any)] as any).first_column,
                last_column: ((o as any)[((o as any).length as any) - (1 as any)] as any).last_column
              }, V && (((at as any)._$ as any).range = [(((o as any)[((o as any).length as any) - ((ut || 1) as any)] as any).range as any)[0], (((o as any)[((o as any).length as any) - (1 as any)] as any).range as any)[1]]), st = (((this as any).performAction as any).apply as any)(at, (([u, l, K, (J as any).yy, (B as any)[1], I, o] as any).concat as any)(j)), (typeof st as any) < ("u" as any)) return st;
              ut && (b = ((b as any).slice as any)(0, ((-1 as any) * (ut as any) as any) * (2 as any)), I = ((I as any).slice as any)(0, (-1 as any) * (ut as any)), o = ((o as any).slice as any)(0, (-1 as any) * (ut as any))), ((b as any).push as any)((((this as any).productions_ as any)[(B as any)[1]] as any)[0]), ((I as any).push as any)((at as any).$), ((o as any).push as any)((at as any)._$), He = ((W as any)[(b as any)[((b as any).length as any) - (2 as any)]] as any)[(b as any)[((b as any).length as any) - (1 as any)]], ((b as any).push as any)(He);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }, "parse")
    },
    C: any = (function (this: any): any {
      var D: any = {
        EOF: 1,
        parseError: (d as any)(function (this: any, g: any, b: any): any {
          if (((this as any).yy as any).parser) ((((this as any).yy as any).parser as any).parseError as any)(g, b);else throw new (Error as any)(g);
        }, "parseError"),
        setInput: (d as any)(function (this: any, c: any, g: any): any {
          return (this as any).yy = g || (this as any).yy || {}, (this as any)._input = c, (this as any)._more = (this as any)._backtrack = (this as any).done = !1, (this as any).yylineno = (this as any).yyleng = 0, (this as any).yytext = (this as any).matched = (this as any).match = "", (this as any).conditionStack = ["INITIAL"], (this as any).yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [0, 0]), (this as any).offset = 0, this;
        }, "setInput"),
        input: (d as any)(function (this: any): any {
          var c: any = ((this as any)._input as any)[0];
          (this as any).yytext += c, (this as any).yyleng++, (this as any).offset++, (this as any).match += c, (this as any).matched += c;
          var g: any = ((c as any).match as any)(/(?:\r\n?|\n).*/g);
          return g ? ((this as any).yylineno++, ((this as any).yylloc as any).last_line++) : ((this as any).yylloc as any).last_column++, ((this as any).options as any).ranges && (((this as any).yylloc as any).range as any)[1]++, (this as any)._input = (((this as any)._input as any).slice as any)(1), c;
        }, "input"),
        unput: (d as any)(function (this: any, c: any): any {
          var g: any = (c as any).length,
            b: any = ((c as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any)._input = (c as any) + ((this as any)._input as any), (this as any).yytext = (((this as any).yytext as any).substr as any)(0, (((this as any).yytext as any).length as any) - (g as any)), (this as any).offset -= g;
          var m: any = (((this as any).match as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any).match = (((this as any).match as any).substr as any)(0, (((this as any).match as any).length as any) - (1 as any)), (this as any).matched = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (1 as any)), ((b as any).length as any) - (1 as any) && ((this as any).yylineno -= ((b as any).length as any) - (1 as any));
          var I: any = ((this as any).yylloc as any).range;
          return (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).first_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).first_column,
            last_column: b ? (((((b as any).length as any) === ((m as any).length as any) ? ((this as any).yylloc as any).first_column : 0) as any) + (((m as any)[((m as any).length as any) - ((b as any).length as any)] as any).length as any) as any) - (((b as any)[0] as any).length as any) : (((this as any).yylloc as any).first_column as any) - (g as any)
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(I as any)[0], (((I as any)[0] as any) + ((this as any).yyleng as any) as any) - (g as any)]), (this as any).yyleng = ((this as any).yytext as any).length, this;
        }, "unput"),
        more: (d as any)(function (this: any): any {
          return (this as any)._more = !0, this;
        }, "more"),
        reject: (d as any)(function (this: any): any {
          if (((this as any).options as any).backtrack_lexer) (this as any)._backtrack = !0;else return ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
          return this;
        }, "reject"),
        less: (d as any)(function (this: any, c: any): any {
          ((this as any).unput as any)((((this as any).match as any).slice as any)(c));
        }, "less"),
        pastInput: (d as any)(function (this: any): any {
          var c: any = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (((this as any).match as any).length as any));
          return ((((c as any).length as any) > (20 as any) ? "..." : "") as any) + (((((c as any).substr as any)(-20) as any).replace as any)(/\n/g, "") as any);
        }, "pastInput"),
        upcomingInput: (d as any)(function (this: any): any {
          var c: any = (this as any).match;
          return ((c as any).length as any) < (20 as any) && (c += (((this as any)._input as any).substr as any)(0, (20 as any) - ((c as any).length as any))), (((((c as any).substr as any)(0, 20) as any) + ((((c as any).length as any) > (20 as any) ? "..." : "") as any) as any).replace as any)(/\n/g, "");
        }, "upcomingInput"),
        showPosition: (d as any)(function (this: any): any {
          var c: any = ((this as any).pastInput as any)(),
            g: any = ((new (Array as any)(((c as any).length as any) + (1 as any)) as any).join as any)("-");
          return ((((c as any) + (((this as any).upcomingInput as any)() as any) as any) + (`
` as any) as any) + (g as any) as any) + ("^" as any);
        }, "showPosition"),
        test_match: (d as any)(function (this: any, c: any, g: any): any {
          var o: any;
          var b: any, m: any, I: any;
          if (((this as any).options as any).backtrack_lexer && (I = {
            yylineno: (this as any).yylineno,
            yylloc: {
              first_line: ((this as any).yylloc as any).first_line,
              last_line: (this as any).last_line,
              first_column: ((this as any).yylloc as any).first_column,
              last_column: ((this as any).yylloc as any).last_column
            },
            yytext: (this as any).yytext,
            match: (this as any).match,
            matches: (this as any).matches,
            matched: (this as any).matched,
            yyleng: (this as any).yyleng,
            offset: (this as any).offset,
            _more: (this as any)._more,
            _input: (this as any)._input,
            yy: (this as any).yy,
            conditionStack: (((this as any).conditionStack as any).slice as any)(0),
            done: (this as any).done
          }, ((this as any).options as any).ranges && (((I as any).yylloc as any).range = ((((this as any).yylloc as any).range as any).slice as any)(0))), m = (((c as any)[0] as any).match as any)(/(?:\r\n?|\n).*/g), m && ((this as any).yylineno += (m as any).length), (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).last_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).last_column,
            last_column: m ? (((m as any)[((m as any).length as any) - (1 as any)] as any).length as any) - ((((((m as any)[((m as any).length as any) - (1 as any)] as any).match as any)(/\r?\n?/) as any)[0] as any).length as any) : (((this as any).yylloc as any).last_column as any) + (((c as any)[0] as any).length as any)
          }, (this as any).yytext += (c as any)[0], (this as any).match += (c as any)[0], (this as any).matches = c, (this as any).yyleng = ((this as any).yytext as any).length, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(this as any).offset, (this as any).offset += (this as any).yyleng]), (this as any)._more = !1, (this as any)._backtrack = !1, (this as any)._input = (((this as any)._input as any).slice as any)(((c as any)[0] as any).length), (this as any).matched += (c as any)[0], b = (((this as any).performAction as any).call as any)(this, (this as any).yy, this, g, ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]), (this as any).done && (this as any)._input && ((this as any).done = !1), b) return b;
          if ((this as any)._backtrack) {
            for (o in I) (this as any)[o] = (I as any)[o];
            return !1;
          }
          return !1;
        }, "test_match"),
        next: (d as any)(function (this: any): any {
          if ((this as any).done) return (this as any).EOF;
          (this as any)._input || ((this as any).done = !0);
          var c: any, g: any, b: any, m: any;
          (this as any)._more || ((this as any).yytext = "", (this as any).match = "");
          for (var I: any = ((this as any)._currentRules as any)(), o: any = 0; (o as any) < ((I as any).length as any); o++) if (b = (((this as any)._input as any).match as any)(((this as any).rules as any)[(I as any)[o]]), b && (!g || (((b as any)[0] as any).length as any) > (((g as any)[0] as any).length as any))) {
            if (g = b, m = o, ((this as any).options as any).backtrack_lexer) {
              if (c = ((this as any).test_match as any)(b, (I as any)[o]), (c as any) !== (!1 as any)) return c;
              if ((this as any)._backtrack) {
                g = !1;
                continue;
              } else return !1;
            } else if (!((this as any).options as any).flex) break;
          }
          return g ? (c = ((this as any).test_match as any)(g, (I as any)[m]), (c as any) !== (!1 as any) ? c : !1) : ((this as any)._input as any) === ("" as any) ? (this as any).EOF : ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. Unrecognized text.
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
        }, "next"),
        lex: (d as any)(function (this: any): any {
          var g: any = ((this as any).next as any)();
          return g || ((this as any).lex as any)();
        }, "lex"),
        begin: (d as any)(function (this: any, g: any): any {
          (((this as any).conditionStack as any).push as any)(g);
        }, "begin"),
        popState: (d as any)(function (this: any): any {
          var g: any = (((this as any).conditionStack as any).length as any) - (1 as any);
          return (g as any) > (0 as any) ? (((this as any).conditionStack as any).pop as any)() : ((this as any).conditionStack as any)[0];
        }, "popState"),
        _currentRules: (d as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length && ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)] ? (((this as any).conditions as any)[((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]] as any).rules : (((this as any).conditions as any).INITIAL as any).rules;
        }, "_currentRules"),
        topState: (d as any)(function (this: any, g: any): any {
          return g = ((((this as any).conditionStack as any).length as any) - (1 as any) as any) - (((Math as any).abs as any)(g || 0) as any), (g as any) >= (0 as any) ? ((this as any).conditionStack as any)[g] : "INITIAL";
        }, "topState"),
        pushState: (d as any)(function (this: any, g: any): any {
          ((this as any).begin as any)(g);
        }, "pushState"),
        stateStackSize: (d as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": !0
        },
        performAction: (d as any)(function (this: any, g: any, b: any, m: any, I: any): any {
          switch (m) {
            case 0:
              return ((this as any).begin as any)("open_directive"), "open_directive";
            case 1:
              return ((this as any).begin as any)("acc_title"), 31;
            case 2:
              return ((this as any).popState as any)(), "acc_title_value";
            case 3:
              return ((this as any).begin as any)("acc_descr"), 33;
            case 4:
              return ((this as any).popState as any)(), "acc_descr_value";
            case 5:
              ((this as any).begin as any)("acc_descr_multiline");
              break;
            case 6:
              ((this as any).popState as any)();
              break;
            case 7:
              return "acc_descr_multiline_value";
            case 8:
              break;
            case 9:
              break;
            case 10:
              break;
            case 11:
              return 10;
            case 12:
              break;
            case 13:
              break;
            case 14:
              ((this as any).begin as any)("href");
              break;
            case 15:
              ((this as any).popState as any)();
              break;
            case 16:
              return 43;
            case 17:
              ((this as any).begin as any)("callbackname");
              break;
            case 18:
              ((this as any).popState as any)();
              break;
            case 19:
              ((this as any).popState as any)(), ((this as any).begin as any)("callbackargs");
              break;
            case 20:
              return 41;
            case 21:
              ((this as any).popState as any)();
              break;
            case 22:
              return 42;
            case 23:
              ((this as any).begin as any)("click");
              break;
            case 24:
              ((this as any).popState as any)();
              break;
            case 25:
              return 40;
            case 26:
              return 4;
            case 27:
              return 22;
            case 28:
              return 23;
            case 29:
              return 24;
            case 30:
              return 25;
            case 31:
              return 26;
            case 32:
              return 28;
            case 33:
              return 27;
            case 34:
              return 29;
            case 35:
              return 12;
            case 36:
              return 13;
            case 37:
              return 14;
            case 38:
              return 15;
            case 39:
              return 16;
            case 40:
              return 17;
            case 41:
              return 18;
            case 42:
              return 20;
            case 43:
              return 21;
            case 44:
              return "date";
            case 45:
              return 30;
            case 46:
              return "accDescription";
            case 47:
              return 36;
            case 48:
              return 38;
            case 49:
              return 39;
            case 50:
              return ":";
            case 51:
              return 6;
            case 52:
              return "INVALID";
          }
        }, "anonymous"),
        rules: [/^(?:%%\{)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%(?!\{)*[^\n]*)/i, /^(?:[^\}]%%*[^\n]*)/i, /^(?:%%*[^\n]*[\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:%[^\n]*)/i, /^(?:href[\s]+["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:call[\s]+)/i, /^(?:\([\s]*\))/i, /^(?:\()/i, /^(?:[^(]*)/i, /^(?:\))/i, /^(?:[^)]*)/i, /^(?:click[\s]+)/i, /^(?:[\s\n])/i, /^(?:[^\s\n]*)/i, /^(?:gantt\b)/i, /^(?:dateFormat\s[^#\n;]+)/i, /^(?:inclusiveEndDates\b)/i, /^(?:topAxis\b)/i, /^(?:axisFormat\s[^#\n;]+)/i, /^(?:tickInterval\s[^#\n;]+)/i, /^(?:includes\s[^#\n;]+)/i, /^(?:excludes\s[^#\n;]+)/i, /^(?:todayMarker\s[^\n;]+)/i, /^(?:weekday\s+monday\b)/i, /^(?:weekday\s+tuesday\b)/i, /^(?:weekday\s+wednesday\b)/i, /^(?:weekday\s+thursday\b)/i, /^(?:weekday\s+friday\b)/i, /^(?:weekday\s+saturday\b)/i, /^(?:weekday\s+sunday\b)/i, /^(?:weekend\s+friday\b)/i, /^(?:weekend\s+saturday\b)/i, /^(?:\d\d\d\d-\d\d-\d\d\b)/i, /^(?:title\s[^\n]+)/i, /^(?:accDescription\s[^#\n;]+)/i, /^(?:section\s[^\n]+)/i, /^(?:[^:\n]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
        conditions: {
          acc_descr_multiline: {
            rules: [6, 7],
            inclusive: !1
          },
          acc_descr: {
            rules: [4],
            inclusive: !1
          },
          acc_title: {
            rules: [2],
            inclusive: !1
          },
          callbackargs: {
            rules: [21, 22],
            inclusive: !1
          },
          callbackname: {
            rules: [18, 19, 20],
            inclusive: !1
          },
          href: {
            rules: [15, 16],
            inclusive: !1
          },
          click: {
            rules: [24, 25],
            inclusive: !1
          },
          INITIAL: {
            rules: [0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 17, 23, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
            inclusive: !0
          }
        }
      };
      return D;
    } as any)();
  (x as any).lexer = C;
  function M(this: any): any {
    (this as any).yy = {};
  }
  return (d as any)(M, "Parser"), (M as any).prototype = x, (x as any).Parser = M, new (M as any)();
} as any)();
(we as any).parser = we;
var Qi: any = we;
((it as any).extend as any)(Oi);
((it as any).extend as any)(Vi);
((it as any).extend as any)(Zi);
var rn: any = {
    friday: 5,
    saturday: 6
  },
  lt: any = "",
  Fe: any = "",
  Ye: any = void 0,
  Ue: any = "",
  Lt: any = [],
  At: any = [],
  Ee: any = new (Map as any)(),
  Ie: any = [],
  se: any = [],
  Wt: any = "",
  Le: any = "",
  Fn: any = ["active", "done", "crit", "milestone", "vert"],
  Ae: any = [],
  _t: any = "",
  qt: any = !1,
  We: any = !1,
  $e: any = "sunday",
  ae: any = "saturday",
  De: any = 0,
  Ji: any = (d as any)(function (this: any): any {
    Ie = [], se = [], Wt = "", Ae = [], te = 0, Ce = void 0, ee = void 0, et = [], lt = "", Fe = "", Le = "", Ye = void 0, Ue = "", Lt = [], At = [], qt = !1, We = !1, De = 0, Ee = new (Map as any)(), _t = "", (Gn as any)(), $e = "sunday", ae = "saturday";
  }, "clear"),
  Ki: any = (d as any)(function (this: any, t: any): any {
    _t = t;
  }, "setDiagramId"),
  ts: any = (d as any)(function (this: any, t: any): any {
    Fe = t;
  }, "setAxisFormat"),
  es: any = (d as any)(function (this: any): any {
    return Fe;
  }, "getAxisFormat"),
  ns: any = (d as any)(function (this: any, t: any): any {
    Ye = t;
  }, "setTickInterval"),
  rs: any = (d as any)(function (this: any): any {
    return Ye;
  }, "getTickInterval"),
  is: any = (d as any)(function (this: any, t: any): any {
    Ue = t;
  }, "setTodayMarker"),
  ss: any = (d as any)(function (this: any): any {
    return Ue;
  }, "getTodayMarker"),
  as: any = (d as any)(function (this: any, t: any): any {
    lt = t;
  }, "setDateFormat"),
  os: any = (d as any)(function (this: any): any {
    qt = !0;
  }, "enableInclusiveEndDates"),
  cs: any = (d as any)(function (this: any): any {
    return qt;
  }, "endDatesAreInclusive"),
  us: any = (d as any)(function (this: any): any {
    We = !0;
  }, "enableTopAxis"),
  ls: any = (d as any)(function (this: any): any {
    return We;
  }, "topAxisEnabled"),
  fs: any = (d as any)(function (this: any, t: any): any {
    Le = t;
  }, "setDisplayMode"),
  ds: any = (d as any)(function (this: any): any {
    return Le;
  }, "getDisplayMode"),
  hs: any = (d as any)(function (this: any): any {
    return lt;
  }, "getDateFormat"),
  Yn: any = (d as any)((t: any, e: any): any => {
    const n: any = ((((((e as any).toLowerCase as any)() as any).split as any)(/[\s,]+/) as any).filter as any)((r: any): any => (r as any) !== ("" as any));
    return [...new (Set as any)([...t, ...n])];
  }, "mergeTokens"),
  ms: any = (d as any)(function (this: any, t: any): any {
    Lt = (Yn as any)(Lt, t);
  }, "setIncludes"),
  gs: any = (d as any)(function (this: any): any {
    return Lt;
  }, "getIncludes"),
  ys: any = (d as any)(function (this: any, t: any): any {
    At = (Yn as any)(At, t);
  }, "setExcludes"),
  ks: any = (d as any)(function (this: any): any {
    return At;
  }, "getExcludes"),
  ps: any = (d as any)(function (this: any): any {
    return Ee;
  }, "getLinks"),
  vs: any = (d as any)(function (this: any, t: any): any {
    Wt = t, ((Ie as any).push as any)(t);
  }, "addSection"),
  Ts: any = (d as any)(function (this: any): any {
    return Ie;
  }, "getSections"),
  xs: any = (d as any)(function (this: any): any {
    let t: any = (sn as any)();
    const e: number = 10;
    let n: any = 0;
    for (; !t && (n as any) < (e as any);) t = (sn as any)(), n++;
    return se = et, se;
  }, "getTasks"),
  Un: any = (d as any)(function (this: any, t: any, e: any, n: any, r: any): any {
    const i: any = ((t as any).format as any)(((e as any).trim as any)()),
      s: any = ((t as any).format as any)("YYYY-MM-DD");
    return ((r as any).includes as any)(i) || ((r as any).includes as any)(s) ? !1 : ((n as any).includes as any)("weekends") && ((((t as any).isoWeekday as any)() as any) === ((rn as any)[ae] as any) || (((t as any).isoWeekday as any)() as any) === (((rn as any)[ae] as any) + (1 as any) as any)) || ((n as any).includes as any)(((((t as any).format as any)("dddd") as any).toLowerCase as any)()) ? !0 : ((n as any).includes as any)(i) || ((n as any).includes as any)(s);
  }, "isInvalidDate"),
  bs: any = (d as any)(function (this: any, t: any): any {
    $e = t;
  }, "setWeekday"),
  ws: any = (d as any)(function (this: any): any {
    return $e;
  }, "getWeekday"),
  Ds: any = (d as any)(function (this: any, t: any): any {
    ae = t;
  }, "setWeekend"),
  En: any = (d as any)(function (this: any, t: any, e: any, n: any, r: any): any {
    if (!(n as any).length || (t as any).manualEndTime) return;
    let i: any;
    (t as any).startTime instanceof Date ? i = (it as any)((t as any).startTime) : i = (it as any)((t as any).startTime, e, !0), i = ((i as any).add as any)(1, "d");
    let s: any;
    (t as any).endTime instanceof Date ? s = (it as any)((t as any).endTime) : s = (it as any)((t as any).endTime, e, !0);
    const [a, y]: any = (Ms as any)(i, s, e, n, r);
    (t as any).endTime = ((a as any).toDate as any)(), (t as any).renderEndTime = y;
  }, "checkTaskDates"),
  Ms: any = (d as any)(function (this: any, t: any, e: any, n: any, r: any, i: any): any {
    let s: any = !1,
      a: any = null;
    const y: any = ((e as any).add as any)(1e4, "d");
    for (; (t as any) <= (e as any);) {
      if (s || (a = ((e as any).toDate as any)()), s = (Un as any)(t, n, r, i), s && (e = ((e as any).add as any)(1, "d"), (e as any) > (y as any))) throw new (Error as any)("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");
      t = ((t as any).add as any)(1, "d");
    }
    return [e, a];
  }, "fixTaskDates"),
  Me: any = (d as any)(function (this: any, t: any, e: any, n: any): any {
    if (n = ((n as any).trim as any)(), ((d as any)((y: any): any => {
      const Y: any = ((y as any).trim as any)();
      return (Y as any) === ("x" as any) || (Y as any) === ("X" as any);
    }, "isTimestampFormat") as any)(e) && ((/^\d+$/ as any).test as any)(n)) return new (Date as any)((Number as any)(n));
    const s: any = ((/^after\s+(?<ids>[\d\w- ]+)/ as any).exec as any)(n);
    if ((s as any) !== (null as any)) {
      let y: any = null;
      for (const S of ((((s as any).groups as any).ids as any).split as any)(" ")) {
        let w: any = (Ct as any)(S);
        (w as any) !== (void 0 as any) && (!y || ((w as any).endTime as any) > ((y as any).endTime as any)) && (y = w);
      }
      if (y) return (y as any).endTime;
      const Y: any = new (Date as any)();
      return ((Y as any).setHours as any)(0, 0, 0, 0), Y;
    }
    let a: any = (it as any)(n, ((e as any).trim as any)(), !0);
    if (((a as any).isValid as any)()) return ((a as any).toDate as any)();
    {
      ((Tt as any).debug as any)(("Invalid date:" as any) + (n as any)), ((Tt as any).debug as any)(("With date format:" as any) + (((e as any).trim as any)() as any));
      const y: any = new (Date as any)(n);
      if ((y as any) === (void 0 as any) || (isNaN as any)(((y as any).getTime as any)()) || (((y as any).getFullYear as any)() as any) < (-1e4 as any) || (((y as any).getFullYear as any)() as any) > (1e4 as any)) throw new (Error as any)(("Invalid date:" as any) + (n as any));
      return y;
    }
  }, "getStartDate"),
  In: any = (d as any)(function (this: any, t: any): any {
    const e: any = ((/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/ as any).exec as any)(((t as any).trim as any)());
    return (e as any) !== (null as any) ? [((Number as any).parseFloat as any)((e as any)[1]), (e as any)[2]] : [NaN, "ms"];
  }, "parseDuration"),
  Ln: any = (d as any)(function (this: any, t: any, e: any, n: any, r: any = !1): any {
    n = ((n as any).trim as any)();
    const s: any = ((/^until\s+(?<ids>[\d\w- ]+)/ as any).exec as any)(n);
    if ((s as any) !== (null as any)) {
      let w: any = null;
      for (const _ of ((((s as any).groups as any).ids as any).split as any)(" ")) {
        let F: any = (Ct as any)(_);
        (F as any) !== (void 0 as any) && (!w || ((F as any).startTime as any) < ((w as any).startTime as any)) && (w = F);
      }
      if (w) return (w as any).startTime;
      const P: any = new (Date as any)();
      return ((P as any).setHours as any)(0, 0, 0, 0), P;
    }
    let a: any = (it as any)(n, ((e as any).trim as any)(), !0);
    if (((a as any).isValid as any)()) return r && (a = ((a as any).add as any)(1, "d")), ((a as any).toDate as any)();
    let y: any = (it as any)(t);
    const [Y, S]: any = (In as any)(n);
    if (!((Number as any).isNaN as any)(Y)) {
      const w: any = ((y as any).add as any)(Y, S);
      ((w as any).isValid as any)() && (y = w);
    }
    return ((y as any).toDate as any)();
  }, "getEndDate"),
  te: any = 0,
  Ut: any = (d as any)(function (this: any, t: any): any {
    return (t as any) === (void 0 as any) ? (te = (te as any) + (1 as any), ("task" as any) + (te as any)) : t;
  }, "parseId"),
  Cs: any = (d as any)(function (this: any, t: any, e: any): any {
    let n: any;
    (((e as any).substr as any)(0, 1) as any) === (":" as any) ? n = ((e as any).substr as any)(1, (e as any).length) : n = e;
    const r: any = ((n as any).split as any)(","),
      i: any = {};
    (Oe as any)(r, i, Fn);
    for (let a: any = 0; (a as any) < ((r as any).length as any); a++) (r as any)[a] = (((r as any)[a] as any).trim as any)();
    let s: any = "";
    switch ((r as any).length) {
      case 1:
        (i as any).id = (Ut as any)(), (i as any).startTime = (t as any).endTime, s = (r as any)[0];
        break;
      case 2:
        (i as any).id = (Ut as any)(), (i as any).startTime = (Me as any)(void 0, lt, (r as any)[0]), s = (r as any)[1];
        break;
      case 3:
        (i as any).id = (Ut as any)((r as any)[0]), (i as any).startTime = (Me as any)(void 0, lt, (r as any)[1]), s = (r as any)[2];
        break;
    }
    return s && ((i as any).endTime = (Ln as any)((i as any).startTime, lt, s, qt), (i as any).manualEndTime = (((it as any)(s, "YYYY-MM-DD", !0) as any).isValid as any)(), (En as any)(i, lt, At, Lt)), i;
  }, "compileData"),
  Ss: any = (d as any)(function (this: any, t: any, e: any): any {
    let n: any;
    (((e as any).substr as any)(0, 1) as any) === (":" as any) ? n = ((e as any).substr as any)(1, (e as any).length) : n = e;
    const r: any = ((n as any).split as any)(","),
      i: any = {};
    (Oe as any)(r, i, Fn);
    for (let s: any = 0; (s as any) < ((r as any).length as any); s++) (r as any)[s] = (((r as any)[s] as any).trim as any)();
    switch ((r as any).length) {
      case 1:
        (i as any).id = (Ut as any)(), (i as any).startTime = {
          type: "prevTaskEnd",
          id: t
        }, (i as any).endTime = {
          data: (r as any)[0]
        };
        break;
      case 2:
        (i as any).id = (Ut as any)(), (i as any).startTime = {
          type: "getStartDate",
          startData: (r as any)[0]
        }, (i as any).endTime = {
          data: (r as any)[1]
        };
        break;
      case 3:
        (i as any).id = (Ut as any)((r as any)[0]), (i as any).startTime = {
          type: "getStartDate",
          startData: (r as any)[1]
        }, (i as any).endTime = {
          data: (r as any)[2]
        };
        break;
    }
    return i;
  }, "parseData"),
  Ce: any,
  ee: any,
  et: any = [],
  An: any = {},
  _s: any = (d as any)(function (this: any, t: any, e: any): any {
    const n: any = {
        section: Wt,
        type: Wt,
        processed: !1,
        manualEndTime: !1,
        renderEndTime: null,
        raw: {
          data: e
        },
        task: t,
        classes: []
      },
      r: any = (Ss as any)(ee, e);
    ((n as any).raw as any).startTime = (r as any).startTime, ((n as any).raw as any).endTime = (r as any).endTime, (n as any).id = (r as any).id, (n as any).prevTaskId = ee, (n as any).active = (r as any).active, (n as any).done = (r as any).done, (n as any).crit = (r as any).crit, (n as any).milestone = (r as any).milestone, (n as any).vert = (r as any).vert, (n as any).vert ? (n as any).order = -1 : ((n as any).order = De, De++);
    const i: any = ((et as any).push as any)(n);
    ee = (n as any).id, (An as any)[(n as any).id] = (i as any) - (1 as any);
  }, "addTask"),
  Ct: any = (d as any)(function (this: any, t: any): any {
    const e: any = (An as any)[t];
    return (et as any)[e];
  }, "findTaskById"),
  Fs: any = (d as any)(function (this: any, t: any, e: any): any {
    const n: any = {
        section: Wt,
        type: Wt,
        description: t,
        task: t,
        classes: []
      },
      r: any = (Cs as any)(Ce, e);
    (n as any).startTime = (r as any).startTime, (n as any).endTime = (r as any).endTime, (n as any).id = (r as any).id, (n as any).active = (r as any).active, (n as any).done = (r as any).done, (n as any).crit = (r as any).crit, (n as any).milestone = (r as any).milestone, (n as any).vert = (r as any).vert, Ce = n, ((se as any).push as any)(n);
  }, "addTaskOrg"),
  sn: any = (d as any)(function (this: any): any {
    const t: any = (d as any)(function (this: any, n: any): any {
      const r: any = (et as any)[n];
      let i: any = "";
      switch (((((et as any)[n] as any).raw as any).startTime as any).type) {
        case "prevTaskEnd":
          {
            const s: any = (Ct as any)((r as any).prevTaskId);
            (r as any).startTime = (s as any).endTime;
            break;
          }
        case "getStartDate":
          i = (Me as any)(void 0, lt, ((((et as any)[n] as any).raw as any).startTime as any).startData), i && (((et as any)[n] as any).startTime = i);
          break;
      }
      return ((et as any)[n] as any).startTime && (((et as any)[n] as any).endTime = (Ln as any)(((et as any)[n] as any).startTime, lt, ((((et as any)[n] as any).raw as any).endTime as any).data, qt), ((et as any)[n] as any).endTime && (((et as any)[n] as any).processed = !0, ((et as any)[n] as any).manualEndTime = (((it as any)(((((et as any)[n] as any).raw as any).endTime as any).data, "YYYY-MM-DD", !0) as any).isValid as any)(), (En as any)((et as any)[n], lt, At, Lt))), ((et as any)[n] as any).processed;
    }, "compileTask");
    let e: any = !0;
    for (const [n, r] of ((et as any).entries as any)()) (t as any)(n), e = e && (r as any).processed;
    return e;
  }, "compileTasks"),
  Ys: any = (d as any)(function (this: any, t: any, e: any): any {
    let n: any = e;
    (((Ft as any)() as any).securityLevel as any) !== ("loose" as any) && (n = ((Xn as any).sanitizeUrl as any)(e)), ((((t as any).split as any)(",") as any).forEach as any)(function (this: any, r: any): any {
      ((Ct as any)(r) as any) !== (void 0 as any) && (($n as any)(r, (): any => {
        ((window as any).open as any)(n, "_self");
      }), ((Ee as any).set as any)(r, n));
    }), (Wn as any)(t, "clickable");
  }, "setLink"),
  Wn: any = (d as any)(function (this: any, t: any, e: any): any {
    ((((t as any).split as any)(",") as any).forEach as any)(function (this: any, n: any): any {
      let r: any = (Ct as any)(n);
      (r as any) !== (void 0 as any) && (((r as any).classes as any).push as any)(e);
    });
  }, "setClass"),
  Us: any = (d as any)(function (this: any, t: any, e: any, n: any): any {
    if ((((Ft as any)() as any).securityLevel as any) !== ("loose" as any) || (e as any) === (void 0 as any)) return;
    let r: any = [];
    if ((typeof n as any) == ("string" as any)) {
      r = ((n as any).split as any)(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
      for (let s: any = 0; (s as any) < ((r as any).length as any); s++) {
        let a: any = (((r as any)[s] as any).trim as any)();
        ((a as any).startsWith as any)('"') && ((a as any).endsWith as any)('"') && (a = ((a as any).substr as any)(1, ((a as any).length as any) - (2 as any))), (r as any)[s] = a;
      }
    }
    ((r as any).length as any) === (0 as any) && ((r as any).push as any)(t), ((Ct as any)(t) as any) !== (void 0 as any) && ($n as any)(t, (): any => {
      ((jn as any).runFunc as any)(e, ...r);
    });
  }, "setClickFun"),
  $n: any = (d as any)(function (this: any, t: any, e: any): any {
    ((Ae as any).push as any)(function (this: any): any {
      const n: any = _t ? `${_t}-${t}` : t,
        r: any = ((document as any).querySelector as any)(`[id="${n}"]`);
      (r as any) !== (null as any) && ((r as any).addEventListener as any)("click", function (this: any): any {
        (e as any)();
      });
    }, function (this: any): any {
      const n: any = _t ? `${_t}-${t}` : t,
        r: any = ((document as any).querySelector as any)(`[id="${n}-text"]`);
      (r as any) !== (null as any) && ((r as any).addEventListener as any)("click", function (this: any): any {
        (e as any)();
      });
    });
  }, "pushFun"),
  Es: any = (d as any)(function (this: any, t: any, e: any, n: any): any {
    ((((t as any).split as any)(",") as any).forEach as any)(function (this: any, r: any): any {
      (Us as any)(r, e, n);
    }), (Wn as any)(t, "clickable");
  }, "setClickEvent"),
  Is: any = (d as any)(function (this: any, t: any): any {
    ((Ae as any).forEach as any)(function (this: any, e: any): any {
      (e as any)(t);
    });
  }, "bindFunctions"),
  Ls: any = {
    getConfig: (d as any)((): any => ((Ft as any)() as any).gantt, "getConfig"),
    clear: Ji,
    setDateFormat: as,
    getDateFormat: hs,
    enableInclusiveEndDates: os,
    endDatesAreInclusive: cs,
    enableTopAxis: us,
    topAxisEnabled: ls,
    setAxisFormat: ts,
    getAxisFormat: es,
    setTickInterval: ns,
    getTickInterval: rs,
    setTodayMarker: is,
    getTodayMarker: ss,
    setAccTitle: qn,
    getAccTitle: zn,
    setDiagramTitle: Rn,
    getDiagramTitle: Vn,
    setDiagramId: Ki,
    setDisplayMode: fs,
    getDisplayMode: ds,
    setAccDescription: Pn,
    getAccDescription: Nn,
    addSection: vs,
    getSections: Ts,
    getTasks: xs,
    addTask: _s,
    findTaskById: Ct,
    addTaskOrg: Fs,
    setIncludes: ms,
    getIncludes: gs,
    setExcludes: ys,
    getExcludes: ks,
    setClickEvent: Es,
    setLink: Ys,
    getLinks: ps,
    bindFunctions: Is,
    parseDuration: In,
    isInvalidDate: Un,
    setWeekday: bs,
    getWeekday: ws,
    setWeekend: Ds
  };
function Oe(this: any, t: any, e: any, n: any): any {
  let r: any = !0;
  for (; r;) r = !1, ((n as any).forEach as any)(function (this: any, i: any): any {
    const s: any = (("^\\s*" as any) + (i as any) as any) + ("\\s*$" as any),
      a: any = new (RegExp as any)(s);
    (((t as any)[0] as any).match as any)(a) && ((e as any)[i] = !0, ((t as any).shift as any)(1), r = !0);
  });
}
(d as any)(Oe, "getTaskTags");
((it as any).extend as any)(ji);
var As: any = (d as any)(function (this: any): any {
    ((Tt as any).debug as any)("Something is calling, setConf, remove the call");
  }, "setConf"),
  an: any = {
    monday: Vt,
    tuesday: vn,
    wednesday: Tn,
    thursday: bt,
    friday: xn,
    saturday: bn,
    sunday: zt
  },
  Ws: any = (d as any)((t: any, e: any): any => {
    let n: any = (([...t] as any).map as any)((): any => (-1 as any) / (0 as any)),
      r: any = (([...t] as any).sort as any)((s: any, a: any): any => ((s as any).startTime as any) - ((a as any).startTime as any) || ((s as any).order as any) - ((a as any).order as any)),
      i: any = 0;
    for (const s of r) for (let a: any = 0; (a as any) < ((n as any).length as any); a++) if (((s as any).startTime as any) >= ((n as any)[a] as any)) {
      (n as any)[a] = (s as any).endTime, (s as any).order = (a as any) + (e as any), (a as any) > (i as any) && (i = a);
      break;
    }
    return i;
  }, "getMaxIntersections"),
  dt: any,
  Te: number = 1e4,
  $s: any = (d as any)(function (this: any, t: any, e: any, n: any, r: any): any {
    const i: any = ((Ft as any)() as any).gantt;
    (((r as any).db as any).setDiagramId as any)(e);
    const s: any = ((Ft as any)() as any).securityLevel;
    let a: any;
    (s as any) === ("sandbox" as any) && (a = (Bt as any)(("#i" as any) + (e as any)));
    const y: any = (s as any) === ("sandbox" as any) ? (Bt as any)((((((a as any).nodes as any)() as any)[0] as any).contentDocument as any).body) : (Bt as any)("body"),
      Y: any = (s as any) === ("sandbox" as any) ? ((((a as any).nodes as any)() as any)[0] as any).contentDocument : document,
      S: any = ((Y as any).getElementById as any)(e);
    dt = ((S as any).parentElement as any).offsetWidth, (dt as any) === (void 0 as any) && (dt = 1200), ((i as any).useWidth as any) !== (void 0 as any) && (dt = (i as any).useWidth);
    const w: any = (((r as any).db as any).getTasks as any)(),
      P: any = ((w as any).filter as any)((x: any): any => !(x as any).vert);
    let _: any = [];
    for (const x of P) ((_ as any).push as any)((x as any).type);
    _ = (L as any)(_);
    const F: any = {};
    let X: any = (2 as any) * ((i as any).topPadding as any);
    if (((((r as any).db as any).getDisplayMode as any)() as any) === ("compact" as any) || ((i as any).displayMode as any) === ("compact" as any)) {
      const x: any = {};
      for (const M of P) ((x as any)[(M as any).section] as any) === (void 0 as any) ? (x as any)[(M as any).section] = [M] : (((x as any)[(M as any).section] as any).push as any)(M);
      let C: any = 0;
      for (const M of ((Object as any).keys as any)(x)) {
        const D: any = ((Ws as any)((x as any)[M], C) as any) + (1 as any);
        C += D, X += (D as any) * (((i as any).barHeight as any) + ((i as any).barGap as any) as any), (F as any)[M] = D;
      }
    } else {
      X += ((P as any).length as any) * (((i as any).barHeight as any) + ((i as any).barGap as any) as any);
      for (const x of _) (F as any)[x] = (((P as any).filter as any)((C: any): any => ((C as any).type as any) === (x as any)) as any).length;
    }
    ((S as any).setAttribute as any)("viewBox", ((("0 0 " as any) + (dt as any) as any) + (" " as any) as any) + (X as any));
    const Z: any = ((y as any).select as any)(`[id="${e}"]`),
      v: any = (((((Li as any)() as any).domain as any)([(rr as any)(w, function (this: any, x: any): any {
        return (x as any).startTime;
      }), (nr as any)(w, function (this: any, x: any): any {
        return (x as any).endTime;
      })]) as any).rangeRound as any)([0, ((dt as any) - ((i as any).leftPadding as any) as any) - ((i as any).rightPadding as any)]);
    function U(this: any, x: any, C: any): any {
      const M: any = (x as any).startTime,
        D: any = (C as any).startTime;
      let c: any = 0;
      return (M as any) > (D as any) ? c = 1 : (M as any) < (D as any) && (c = -1), c;
    }
    (d as any)(U, "taskCompare"), ((w as any).sort as any)(U), (R as any)(w, dt, X), (Zn as any)(Z, X, dt, (i as any).useMaxWidth), ((((((((((Z as any).append as any)("text") as any).text as any)((((r as any).db as any).getDiagramTitle as any)()) as any).attr as any)("x", (dt as any) / (2 as any)) as any).attr as any)("y", (i as any).titleTopMargin) as any).attr as any)("class", "titleText");
    function R(this: any, x: any, C: any, M: any): any {
      const D: any = (i as any).barHeight,
        c: any = (D as any) + ((i as any).barGap as any),
        g: any = (i as any).topPadding,
        b: any = (i as any).leftPadding,
        m: any = (((((((tr as any)() as any).domain as any)([0, (_ as any).length]) as any).range as any)(["#00B9FA", "#F95002"]) as any).interpolate as any)(pr);
      (z as any)(c, g, b, C, M, x, (((r as any).db as any).getExcludes as any)(), (((r as any).db as any).getIncludes as any)()), (T as any)(b, g, C, M), (E as any)(x, c, g, b, D, m, C), (k as any)(c, g), (p as any)(b, g, C, M);
    }
    (d as any)(R, "makeGantt");
    function E(this: any, x: any, C: any, M: any, D: any, c: any, g: any, b: any): any {
      ((x as any).sort as any)((l: any, $: any): any => ((l as any).vert as any) === (($ as any).vert as any) ? 0 : (l as any).vert ? 1 : -1);
      const m: any = ((x as any).filter as any)((l: any): any => !(l as any).vert),
        o: any = (([...new (Set as any)(((m as any).map as any)((l: any): any => (l as any).order))] as any).map as any)((l: any): any => ((m as any).find as any)(($: any): any => (($ as any).order as any) === (l as any)));
      ((((((((((((((((((((((Z as any).append as any)("g") as any).selectAll as any)("rect") as any).data as any)(o) as any).enter as any)() as any).append as any)("rect") as any).attr as any)("x", 0) as any).attr as any)("y", function (this: any, l: any, $: any): any {
        return $ = (l as any).order, ((($ as any) * (C as any) as any) + (M as any) as any) - (2 as any);
      }) as any).attr as any)("width", function (this: any): any {
        return (b as any) - (((i as any).rightPadding as any) / (2 as any) as any);
      }) as any).attr as any)("height", C) as any).attr as any)("class", function (this: any, l: any): any {
        for (const [$, O] of ((_ as any).entries as any)()) if (((l as any).type as any) === (O as any)) return ("section section" as any) + (($ as any) % ((i as any).numberSectionStyles as any) as any);
        return "section section0";
      }) as any).enter as any)();
      const W: any = ((((((((Z as any).append as any)("g") as any).selectAll as any)("rect") as any).data as any)(x) as any).enter as any)(),
        u: any = (((r as any).db as any).getLinks as any)();
      if (((((((((((((((((((((W as any).append as any)("rect") as any).attr as any)("id", function (this: any, l: any): any {
        return ((e as any) + ("-" as any) as any) + ((l as any).id as any);
      }) as any).attr as any)("rx", 3) as any).attr as any)("ry", 3) as any).attr as any)("x", function (this: any, l: any): any {
        return (l as any).milestone ? ((((v as any)((l as any).startTime) as any) + (D as any) as any) + ((.5 as any) * (((v as any)((l as any).endTime) as any) - ((v as any)((l as any).startTime) as any) as any) as any) as any) - ((.5 as any) * (c as any) as any) : ((v as any)((l as any).startTime) as any) + (D as any);
      }) as any).attr as any)("y", function (this: any, l: any, $: any): any {
        return $ = (l as any).order, (l as any).vert ? (i as any).gridLineStartPadding : (($ as any) * (C as any) as any) + (M as any);
      }) as any).attr as any)("width", function (this: any, l: any): any {
        return (l as any).milestone ? c : (l as any).vert ? (.08 as any) * (c as any) : ((v as any)((l as any).renderEndTime || (l as any).endTime) as any) - ((v as any)((l as any).startTime) as any);
      }) as any).attr as any)("height", function (this: any, l: any): any {
        return (l as any).vert ? (((m as any).length as any) * (((i as any).barHeight as any) + ((i as any).barGap as any) as any) as any) + (((i as any).barHeight as any) * (2 as any) as any) : c;
      }) as any).attr as any)("transform-origin", function (this: any, l: any, $: any): any {
        return $ = (l as any).order, ((((((((v as any)((l as any).startTime) as any) + (D as any) as any) + ((.5 as any) * (((v as any)((l as any).endTime) as any) - ((v as any)((l as any).startTime) as any) as any) as any) as any).toString as any)() as any) + ("px " as any) as any) + (((((($ as any) * (C as any) as any) + (M as any) as any) + ((.5 as any) * (c as any) as any) as any).toString as any)() as any) as any) + ("px" as any);
      }) as any).attr as any)("class", function (this: any, l: any): any {
        const $: string = "task";
        let O: any = "";
        (((l as any).classes as any).length as any) > (0 as any) && (O = (((l as any).classes as any).join as any)(" "));
        let j: any = 0;
        for (const [J, h] of ((_ as any).entries as any)()) ((l as any).type as any) === (h as any) && (j = (J as any) % ((i as any).numberSectionStyles as any));
        let H: any = "";
        return (l as any).active ? (l as any).crit ? H += " activeCrit" : H = " active" : (l as any).done ? (l as any).crit ? H = " doneCrit" : H = " done" : (l as any).crit && (H += " crit"), ((H as any).length as any) === (0 as any) && (H = " task"), (l as any).milestone && (H = (" milestone " as any) + (H as any)), (l as any).vert && (H = (" vert " as any) + (H as any)), H += j, H += (" " as any) + (O as any), ($ as any) + (H as any);
      }), ((((((((((((((((W as any).append as any)("text") as any).attr as any)("id", function (this: any, l: any): any {
        return (((e as any) + ("-" as any) as any) + ((l as any).id as any) as any) + ("-text" as any);
      }) as any).text as any)(function (this: any, l: any): any {
        return (l as any).task;
      }) as any).attr as any)("font-size", (i as any).fontSize) as any).attr as any)("x", function (this: any, l: any): any {
        let $: any = (v as any)((l as any).startTime),
          O: any = (v as any)((l as any).renderEndTime || (l as any).endTime);
        if ((l as any).milestone && ($ += ((.5 as any) * (((v as any)((l as any).endTime) as any) - ((v as any)((l as any).startTime) as any) as any) as any) - ((.5 as any) * (c as any) as any), O = ($ as any) + (c as any)), (l as any).vert) return ((v as any)((l as any).startTime) as any) + (D as any);
        const j: any = (((this as any).getBBox as any)() as any).width;
        return (j as any) > ((O as any) - ($ as any) as any) ? (((O as any) + (j as any) as any) + ((1.5 as any) * ((i as any).leftPadding as any) as any) as any) > (b as any) ? (($ as any) + (D as any) as any) - (5 as any) : ((O as any) + (D as any) as any) + (5 as any) : ((((O as any) - ($ as any) as any) / (2 as any) as any) + ($ as any) as any) + (D as any);
      }) as any).attr as any)("y", function (this: any, l: any, $: any): any {
        return (l as any).vert ? (((i as any).gridLineStartPadding as any) + (((m as any).length as any) * (((i as any).barHeight as any) + ((i as any).barGap as any) as any) as any) as any) + (60 as any) : ($ = (l as any).order, (((($ as any) * (C as any) as any) + (((i as any).barHeight as any) / (2 as any) as any) as any) + ((((i as any).fontSize as any) / (2 as any) as any) - (2 as any) as any) as any) + (M as any));
      }) as any).attr as any)("text-height", c) as any).attr as any)("class", function (this: any, l: any): any {
        const $: any = (v as any)((l as any).startTime);
        let O: any = (v as any)((l as any).endTime);
        (l as any).milestone && (O = ($ as any) + (c as any));
        const j: any = (((this as any).getBBox as any)() as any).width;
        let H: any = "";
        (((l as any).classes as any).length as any) > (0 as any) && (H = (((l as any).classes as any).join as any)(" "));
        let J: any = 0;
        for (const [N, V] of ((_ as any).entries as any)()) ((l as any).type as any) === (V as any) && (J = (N as any) % ((i as any).numberSectionStyles as any));
        let h: any = "";
        return (l as any).active && ((l as any).crit ? h = ("activeCritText" as any) + (J as any) : h = ("activeText" as any) + (J as any)), (l as any).done ? (l as any).crit ? h = ((h as any) + (" doneCritText" as any) as any) + (J as any) : h = ((h as any) + (" doneText" as any) as any) + (J as any) : (l as any).crit && (h = ((h as any) + (" critText" as any) as any) + (J as any)), (l as any).milestone && (h += " milestoneText"), (l as any).vert && (h += " vertText"), (j as any) > ((O as any) - ($ as any) as any) ? (((O as any) + (j as any) as any) + ((1.5 as any) * ((i as any).leftPadding as any) as any) as any) > (b as any) ? ((((H as any) + (" taskTextOutsideLeft taskTextOutside" as any) as any) + (J as any) as any) + (" " as any) as any) + (h as any) : ((((((H as any) + (" taskTextOutsideRight taskTextOutside" as any) as any) + (J as any) as any) + (" " as any) as any) + (h as any) as any) + (" width-" as any) as any) + (j as any) : ((((((H as any) + (" taskText taskText" as any) as any) + (J as any) as any) + (" " as any) as any) + (h as any) as any) + (" width-" as any) as any) + (j as any);
      }), (((Ft as any)() as any).securityLevel as any) === ("sandbox" as any)) {
        let l: any;
        l = (Bt as any)(("#i" as any) + (e as any));
        const $: any = ((((l as any).nodes as any)() as any)[0] as any).contentDocument;
        ((((W as any).filter as any)(function (this: any, O: any): any {
          return ((u as any).has as any)((O as any).id);
        }) as any).each as any)(function (this: any, O: any): any {
          var j: any = (($ as any).querySelector as any)(("#" as any) + (((CSS as any).escape as any)(((e as any) + ("-" as any) as any) + ((O as any).id as any)) as any)),
            H: any = (($ as any).querySelector as any)(("#" as any) + (((CSS as any).escape as any)((((e as any) + ("-" as any) as any) + ((O as any).id as any) as any) + ("-text" as any)) as any));
          const J: any = (j as any).parentNode;
          var h: any = (($ as any).createElement as any)("a");
          ((h as any).setAttribute as any)("xlink:href", ((u as any).get as any)((O as any).id)), ((h as any).setAttribute as any)("target", "_top"), ((J as any).appendChild as any)(h), ((h as any).appendChild as any)(j), ((h as any).appendChild as any)(H);
        });
      }
    }
    (d as any)(E, "drawRects");
    function z(this: any, x: any, C: any, M: any, D: any, c: any, g: any, b: any, m: any): any {
      if (((b as any).length as any) === (0 as any) && ((m as any).length as any) === (0 as any)) return;
      let I: any, o: any;
      for (const {
        startTime: O,
        endTime: j
      } of g) ((I as any) === (void 0 as any) || (O as any) < (I as any)) && (I = O), ((o as any) === (void 0 as any) || (j as any) > (o as any)) && (o = j);
      if (!I || !o) return;
      if (((((it as any)(o) as any).diff as any)((it as any)(I), "year") as any) > (5 as any)) {
        ((Tt as any).warn as any)("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");
        return;
      }
      const W: any = (((r as any).db as any).getDateFormat as any)(),
        u: any = [];
      let K: any = null,
        l: any = (it as any)(I);
      for (; (((l as any).valueOf as any)() as any) <= (o as any);) (((r as any).db as any).isInvalidDate as any)(l, W, b, m) ? K ? (K as any).end = l : K = {
        start: l,
        end: l
      } : K && (((u as any).push as any)(K), K = null), l = ((l as any).add as any)(1, "d");
      ((((((((((((((((((((((((Z as any).append as any)("g") as any).selectAll as any)("rect") as any).data as any)(u) as any).enter as any)() as any).append as any)("rect") as any).attr as any)("id", (O: any): any => ((e as any) + ("-exclude-" as any) as any) + ((((O as any).start as any).format as any)("YYYY-MM-DD") as any)) as any).attr as any)("x", (O: any): any => ((v as any)((((O as any).start as any).startOf as any)("day")) as any) + (M as any)) as any).attr as any)("y", (i as any).gridLineStartPadding) as any).attr as any)("width", (O: any): any => ((v as any)((((O as any).end as any).endOf as any)("day")) as any) - ((v as any)((((O as any).start as any).startOf as any)("day")) as any)) as any).attr as any)("height", ((c as any) - (C as any) as any) - ((i as any).gridLineStartPadding as any)) as any).attr as any)("transform-origin", function (this: any, O: any, j: any): any {
        return ((((((((v as any)((O as any).start) as any) + (M as any) as any) + ((.5 as any) * (((v as any)((O as any).end) as any) - ((v as any)((O as any).start) as any) as any) as any) as any).toString as any)() as any) + ("px " as any) as any) + (((((j as any) * (x as any) as any) + ((.5 as any) * (c as any) as any) as any).toString as any)() as any) as any) + ("px" as any);
      }) as any).attr as any)("class", "exclude-range");
    }
    (d as any)(z, "drawExcludeDays");
    function G(this: any, x: any, C: any, M: any, D: any): any {
      if ((M as any) <= (0 as any) || (x as any) > (C as any)) return (1 as any) / (0 as any);
      const c: any = (C as any) - (x as any),
        g: any = ((((it as any).duration as any)({
          [D ?? "day"]: M
        }) as any).asMilliseconds as any)();
      return (g as any) <= (0 as any) ? (1 as any) / (0 as any) : ((Math as any).ceil as any)((c as any) / (g as any));
    }
    (d as any)(G, "getEstimatedTickCount");
    function T(this: any, x: any, C: any, M: any, D: any): any {
      const c: any = (((r as any).db as any).getDateFormat as any)(),
        g: any = (((r as any).db as any).getAxisFormat as any)();
      let b: any;
      g ? b = g : (c as any) === ("D" as any) ? b = "%d" : b = (i as any).axisFormat ?? "%Y-%m-%d";
      let m: any = (((((fr as any)(v) as any).tickSize as any)(((-D as any) + (C as any) as any) + ((i as any).gridLineStartPadding as any)) as any).tickFormat as any)((ie as any)(b));
      const o: any = ((/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/ as any).exec as any)((((r as any).db as any).getTickInterval as any)() || (i as any).tickInterval);
      if ((o as any) !== (null as any)) {
        const W: any = (parseInt as any)((o as any)[1], 10);
        if ((isNaN as any)(W) || (W as any) <= (0 as any)) ((Tt as any).warn as any)(`Invalid tick interval value: "${(o as any)[1]}". Skipping custom tick interval.`);else {
          const u: any = (o as any)[2],
            K: any = (((r as any).db as any).getWeekday as any)() || (i as any).weekday,
            l: any = ((v as any).domain as any)(),
            $: any = (l as any)[0],
            O: any = (l as any)[1],
            j: any = (G as any)($, O, W, u);
          if ((j as any) > (Te as any)) ((Tt as any).warn as any)(`The tick interval "${W}${u}" would generate ${j} ticks, which exceeds the maximum allowed (${Te}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch (u) {
            case "millisecond":
              ((m as any).ticks as any)(((Et as any).every as any)(W));
              break;
            case "second":
              ((m as any).ticks as any)(((vt as any).every as any)(W));
              break;
            case "minute":
              ((m as any).ticks as any)(((Nt as any).every as any)(W));
              break;
            case "hour":
              ((m as any).ticks as any)(((Pt as any).every as any)(W));
              break;
            case "day":
              ((m as any).ticks as any)(((xt as any).every as any)(W));
              break;
            case "week":
              ((m as any).ticks as any)((((an as any)[K] as any).every as any)(W));
              break;
            case "month":
              ((m as any).ticks as any)(((Rt as any).every as any)(W));
              break;
          }
        }
      }
      if (((((((((((((((((((((Z as any).append as any)("g") as any).attr as any)("class", "grid") as any).attr as any)("transform", (((("translate(" as any) + (x as any) as any) + (", " as any) as any) + ((D as any) - (50 as any) as any) as any) + (")" as any)) as any).call as any)(m) as any).selectAll as any)("text") as any).style as any)("text-anchor", "middle") as any).attr as any)("fill", "#000") as any).attr as any)("stroke", "none") as any).attr as any)("font-size", 10) as any).attr as any)("dy", "1em"), (((r as any).db as any).topAxisEnabled as any)() || (i as any).topAxis) {
        let W: any = (((((lr as any)(v) as any).tickSize as any)(((-D as any) + (C as any) as any) + ((i as any).gridLineStartPadding as any)) as any).tickFormat as any)((ie as any)(b));
        if ((o as any) !== (null as any)) {
          const u: any = (parseInt as any)((o as any)[1], 10);
          if ((isNaN as any)(u) || (u as any) <= (0 as any)) ((Tt as any).warn as any)(`Invalid tick interval value: "${(o as any)[1]}". Skipping custom tick interval.`);else {
            const K: any = (o as any)[2],
              l: any = (((r as any).db as any).getWeekday as any)() || (i as any).weekday,
              $: any = ((v as any).domain as any)(),
              O: any = ($ as any)[0],
              j: any = ($ as any)[1];
            if (((G as any)(O, j, u, K) as any) <= (Te as any)) switch (K) {
              case "millisecond":
                ((W as any).ticks as any)(((Et as any).every as any)(u));
                break;
              case "second":
                ((W as any).ticks as any)(((vt as any).every as any)(u));
                break;
              case "minute":
                ((W as any).ticks as any)(((Nt as any).every as any)(u));
                break;
              case "hour":
                ((W as any).ticks as any)(((Pt as any).every as any)(u));
                break;
              case "day":
                ((W as any).ticks as any)(((xt as any).every as any)(u));
                break;
              case "week":
                ((W as any).ticks as any)((((an as any)[l] as any).every as any)(u));
                break;
              case "month":
                ((W as any).ticks as any)(((Rt as any).every as any)(u));
                break;
            }
          }
        }
        ((((((((((((((((((Z as any).append as any)("g") as any).attr as any)("class", "grid") as any).attr as any)("transform", (((("translate(" as any) + (x as any) as any) + (", " as any) as any) + (C as any) as any) + (")" as any)) as any).call as any)(W) as any).selectAll as any)("text") as any).style as any)("text-anchor", "middle") as any).attr as any)("fill", "#000") as any).attr as any)("stroke", "none") as any).attr as any)("font-size", 10);
      }
    }
    (d as any)(T, "makeGrid");
    function k(this: any, x: any, C: any): any {
      let M: any = 0;
      const D: any = ((((Object as any).keys as any)(F) as any).map as any)((c: any): any => [c, (F as any)[c]]);
      ((((((((((((((((((Z as any).append as any)("g") as any).selectAll as any)("text") as any).data as any)(D) as any).enter as any)() as any).append as any)(function (this: any, c: any): any {
        const g: any = (((c as any)[0] as any).split as any)((Bn as any).lineBreakRegex),
          b: any = (-(((g as any).length as any) - (1 as any)) as any) / (2 as any),
          m: any = ((Y as any).createElementNS as any)("http://www.w3.org/2000/svg", "text");
        ((m as any).setAttribute as any)("dy", (b as any) + ("em" as any));
        for (const [I, o] of ((g as any).entries as any)()) {
          const W: any = ((Y as any).createElementNS as any)("http://www.w3.org/2000/svg", "tspan");
          ((W as any).setAttribute as any)("alignment-baseline", "central"), ((W as any).setAttribute as any)("x", "10"), (I as any) > (0 as any) && ((W as any).setAttribute as any)("dy", "1em"), (W as any).textContent = o, ((m as any).appendChild as any)(W);
        }
        return m;
      }) as any).attr as any)("x", 10) as any).attr as any)("y", function (this: any, c: any, g: any): any {
        if ((g as any) > (0 as any)) for (let b: any = 0; (b as any) < (g as any); b++) return M += ((D as any)[(g as any) - (1 as any)] as any)[1], (((((c as any)[1] as any) * (x as any) as any) / (2 as any) as any) + ((M as any) * (x as any) as any) as any) + (C as any);else return ((((c as any)[1] as any) * (x as any) as any) / (2 as any) as any) + (C as any);
      }) as any).attr as any)("font-size", (i as any).sectionFontSize) as any).attr as any)("class", function (this: any, c: any): any {
        for (const [g, b] of ((_ as any).entries as any)()) if (((c as any)[0] as any) === (b as any)) return ("sectionTitle sectionTitle" as any) + ((g as any) % ((i as any).numberSectionStyles as any) as any);
        return "sectionTitle";
      });
    }
    (d as any)(k, "vertLabels");
    function p(this: any, x: any, C: any, M: any, D: any): any {
      const c: any = (((r as any).db as any).getTodayMarker as any)();
      if ((c as any) === ("off" as any)) return;
      const g: any = ((((Z as any).append as any)("g") as any).attr as any)("class", "today"),
        b: any = new (Date as any)(),
        m: any = ((g as any).append as any)("line");
      ((((((((((m as any).attr as any)("x1", ((v as any)(b) as any) + (x as any)) as any).attr as any)("x2", ((v as any)(b) as any) + (x as any)) as any).attr as any)("y1", (i as any).titleTopMargin) as any).attr as any)("y2", (D as any) - ((i as any).titleTopMargin as any)) as any).attr as any)("class", "today"), (c as any) !== ("" as any) && ((m as any).attr as any)("style", ((c as any).replace as any)(/,/g, ";"));
    }
    (d as any)(p, "drawToday");
    function L(this: any, x: any): any {
      const C: any = {},
        M: any = [];
      for (let D: any = 0, c: any = (x as any).length; (D as any) < (c as any); ++D) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(C, (x as any)[D]) || ((C as any)[(x as any)[D]] = !0, ((M as any).push as any)((x as any)[D]));
      return M;
    }
    (d as any)(L, "checkUnique");
  }, "draw"),
  Os: any = {
    setConf: As,
    draw: $s
  },
  Hs: any = (d as any)((t: any): any => `
  .mermaid-main-font {
        font-family: ${(t as any).fontFamily};
  }

  .exclude-range {
    fill: ${(t as any).excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${(t as any).sectionBkgColor};
  }

  .section2 {
    fill: ${(t as any).sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${(t as any).altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${(t as any).titleColor};
  }

  .sectionTitle1 {
    fill: ${(t as any).titleColor};
  }

  .sectionTitle2 {
    fill: ${(t as any).titleColor};
  }

  .sectionTitle3 {
    fill: ${(t as any).titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${(t as any).fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${(t as any).gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${(t as any).fontFamily};
    fill: ${(t as any).textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${(t as any).todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${(t as any).fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${(t as any).taskTextDarkColor};
    text-anchor: start;
    font-family: ${(t as any).fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${(t as any).taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${(t as any).taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${(t as any).taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${(t as any).taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${(t as any).taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${(t as any).taskBkgColor};
    stroke: ${(t as any).taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${(t as any).taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${(t as any).taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${(t as any).activeTaskBkgColor};
    stroke: ${(t as any).activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${(t as any).taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${(t as any).doneTaskBorderColor};
    fill: ${(t as any).doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${(t as any).taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${(t as any).taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${(t as any).critBorderColor};
    fill: ${(t as any).critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${(t as any).critBorderColor};
    fill: ${(t as any).activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${(t as any).critBorderColor};
    fill: ${(t as any).doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${(t as any).taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar \u2014 same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${(t as any).taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${(t as any).vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${(t as any).vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${(t as any).taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${(t as any).titleColor || (t as any).textColor};
    font-family: ${(t as any).fontFamily};
  }
`, "getStyles"),
  Ns: any = Hs,
  Zs: any = {
    parser: Qi,
    db: Ls,
    renderer: Os,
    styles: Ns
  };
export { Zs as diagram };
//# debugId=7eef8e1e-261b-4ee6-ac5d-6e2dee1abd04
