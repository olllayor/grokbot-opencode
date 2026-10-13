declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "7ec2a1ea-26af-4ff9-96d4-6d8c48029555", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-7ec2a1ea-26af-4ff9-96d4-6d8c48029555");
  } catch (e: any) {}
} as any)();
function H(this: any, n: any): any {
  return (((Math as any).abs as any)(n = ((Math as any).round as any)(n)) as any) >= (1e21 as any) ? ((((n as any).toLocaleString as any)("en") as any).replace as any)(/,/g, "") : ((n as any).toString as any)(10);
}
function j(this: any, n: any, t: any): any {
  if (((e = (((n = t ? ((n as any).toExponential as any)((t as any) - (1 as any)) : ((n as any).toExponential as any)()) as any).indexOf as any)("e")) as any) < (0 as any)) return null;
  var e: any,
    i: any = ((n as any).slice as any)(0, e);
  return [((i as any).length as any) > (1 as any) ? ((i as any)[0] as any) + (((i as any).slice as any)(2) as any) : i, +((n as any).slice as any)((e as any) + (1 as any))];
}
function J(this: any, n: any): any {
  return n = (j as any)(((Math as any).abs as any)(n)), n ? (n as any)[1] : NaN;
}
function K(this: any, n: any, t: any): any {
  return function (this: any, e: any, i: any): any {
    for (var o: any = (e as any).length, f: any = [], c: any = 0, u: any = (n as any)[0], p: any = 0; (o as any) > (0 as any) && (u as any) > (0 as any) && ((((p as any) + (u as any) as any) + (1 as any) as any) > (i as any) && (u = ((Math as any).max as any)(1, (i as any) - (p as any))), ((f as any).push as any)(((e as any).substring as any)(o -= u, (o as any) + (u as any))), !(((p += (u as any) + (1 as any)) as any) > (i as any)));) u = (n as any)[c = ((c as any) + (1 as any) as any) % ((n as any).length as any)];
    return ((((f as any).reverse as any)() as any).join as any)(t);
  };
}
function Q(this: any, n: any): any {
  return function (this: any, t: any): any {
    return ((t as any).replace as any)(/[0-9]/g, function (this: any, e: any): any {
      return (n as any)[+e];
    });
  };
}
var V: any = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function N(this: any, n: any): any {
  if (!(t = ((V as any).exec as any)(n))) throw new (Error as any)(("invalid format: " as any) + (n as any));
  var t: any;
  return new ($ as any)({
    fill: (t as any)[1],
    align: (t as any)[2],
    sign: (t as any)[3],
    symbol: (t as any)[4],
    zero: (t as any)[5],
    width: (t as any)[6],
    comma: (t as any)[7],
    precision: (t as any)[8] && (((t as any)[8] as any).slice as any)(1),
    trim: (t as any)[9],
    type: (t as any)[10]
  });
}
(N as any).prototype = ($ as any).prototype;
function $(this: any, n: any): any {
  (this as any).fill = ((n as any).fill as any) === (void 0 as any) ? " " : ((n as any).fill as any) + ("" as any), (this as any).align = ((n as any).align as any) === (void 0 as any) ? ">" : ((n as any).align as any) + ("" as any), (this as any).sign = ((n as any).sign as any) === (void 0 as any) ? "-" : ((n as any).sign as any) + ("" as any), (this as any).symbol = ((n as any).symbol as any) === (void 0 as any) ? "" : ((n as any).symbol as any) + ("" as any), (this as any).zero = !!(n as any).zero, (this as any).width = ((n as any).width as any) === (void 0 as any) ? void 0 : +(n as any).width, (this as any).comma = !!(n as any).comma, (this as any).precision = ((n as any).precision as any) === (void 0 as any) ? void 0 : +(n as any).precision, (this as any).trim = !!(n as any).trim, (this as any).type = ((n as any).type as any) === (void 0 as any) ? "" : ((n as any).type as any) + ("" as any);
}
(($ as any).prototype as any).toString = function (this: any): any {
  return ((((((((((this as any).fill as any) + ((this as any).align as any) as any) + ((this as any).sign as any) as any) + ((this as any).symbol as any) as any) + (((this as any).zero ? "0" : "") as any) as any) + ((((this as any).width as any) === (void 0 as any) ? "" : ((Math as any).max as any)(1, ((this as any).width as any) | (0 as any))) as any) as any) + (((this as any).comma ? "," : "") as any) as any) + ((((this as any).precision as any) === (void 0 as any) ? "" : ("." as any) + (((Math as any).max as any)(0, ((this as any).precision as any) | (0 as any)) as any)) as any) as any) + (((this as any).trim ? "~" : "") as any) as any) + ((this as any).type as any);
};
function W(this: any, n: any): any {
  n: for (var t: any = (n as any).length, e: any = 1, i: any = -1, o: any; (e as any) < (t as any); ++e) switch ((n as any)[e]) {
    case ".":
      i = o = e;
      break;
    case "0":
      (i as any) === (0 as any) && (i = e), o = e;
      break;
    default:
      if (!+(n as any)[e]) break n;
      (i as any) > (0 as any) && (i = 0);
      break;
  }
  return (i as any) > (0 as any) ? (((n as any).slice as any)(0, i) as any) + (((n as any).slice as any)((o as any) + (1 as any)) as any) : n;
}
var U: any;
function _(this: any, n: any, t: any): any {
  var e: any = (j as any)(n, t);
  if (!e) return (n as any) + ("" as any);
  var i: any = (e as any)[0],
    o: any = (e as any)[1],
    f: any = ((o as any) - ((U = (((Math as any).max as any)(-8, ((Math as any).min as any)(8, ((Math as any).floor as any)((o as any) / (3 as any)))) as any) * (3 as any)) as any) as any) + (1 as any),
    c: any = (i as any).length;
  return (f as any) === (c as any) ? i : (f as any) > (c as any) ? (i as any) + (((new (Array as any)(((f as any) - (c as any) as any) + (1 as any)) as any).join as any)("0") as any) : (f as any) > (0 as any) ? ((((i as any).slice as any)(0, f) as any) + ("." as any) as any) + (((i as any).slice as any)(f) as any) : (("0." as any) + (((new (Array as any)((1 as any) - (f as any)) as any).join as any)("0") as any) as any) + (((j as any)(n, ((Math as any).max as any)(0, ((t as any) + (f as any) as any) - (1 as any))) as any)[0] as any);
}
function G(this: any, n: any, t: any): any {
  var e: any = (j as any)(n, t);
  if (!e) return (n as any) + ("" as any);
  var i: any = (e as any)[0],
    o: any = (e as any)[1];
  return (o as any) < (0 as any) ? (("0." as any) + (((new (Array as any)(-o) as any).join as any)("0") as any) as any) + (i as any) : ((i as any).length as any) > ((o as any) + (1 as any) as any) ? ((((i as any).slice as any)(0, (o as any) + (1 as any)) as any) + ("." as any) as any) + (((i as any).slice as any)((o as any) + (1 as any)) as any) : (i as any) + (((new (Array as any)(((o as any) - ((i as any).length as any) as any) + (2 as any)) as any).join as any)("0") as any);
}
const I: any = {
  "%": (n: any, t: any): any => (((n as any) * (100 as any) as any).toFixed as any)(t),
  b: (n: any): any => ((((Math as any).round as any)(n) as any).toString as any)(2),
  c: (n: any): any => (n as any) + ("" as any),
  d: H,
  e: (n: any, t: any): any => ((n as any).toExponential as any)(t),
  f: (n: any, t: any): any => ((n as any).toFixed as any)(t),
  g: (n: any, t: any): any => ((n as any).toPrecision as any)(t),
  o: (n: any): any => ((((Math as any).round as any)(n) as any).toString as any)(8),
  p: (n: any, t: any): any => (G as any)((n as any) * (100 as any), t),
  r: G,
  s: _,
  X: (n: any): any => ((((((Math as any).round as any)(n) as any).toString as any)(16) as any).toUpperCase as any)(),
  x: (n: any): any => ((((Math as any).round as any)(n) as any).toString as any)(16)
};
function X(this: any, n: any): any {
  return n;
}
var O: any = ((Array as any).prototype as any).map,
  R: any = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function v(this: any, n: any): any {
  var t: any = ((n as any).grouping as any) === (void 0 as any) || ((n as any).thousands as any) === (void 0 as any) ? X : (K as any)(((O as any).call as any)((n as any).grouping, Number), ((n as any).thousands as any) + ("" as any)),
    e: any = ((n as any).currency as any) === (void 0 as any) ? "" : (((n as any).currency as any)[0] as any) + ("" as any),
    i: any = ((n as any).currency as any) === (void 0 as any) ? "" : (((n as any).currency as any)[1] as any) + ("" as any),
    o: any = ((n as any).decimal as any) === (void 0 as any) ? "." : ((n as any).decimal as any) + ("" as any),
    f: any = ((n as any).numerals as any) === (void 0 as any) ? X : (Q as any)(((O as any).call as any)((n as any).numerals, String)),
    c: any = ((n as any).percent as any) === (void 0 as any) ? "%" : ((n as any).percent as any) + ("" as any),
    u: any = ((n as any).minus as any) === (void 0 as any) ? "\u2212" : ((n as any).minus as any) + ("" as any),
    p: any = ((n as any).nan as any) === (void 0 as any) ? "NaN" : ((n as any).nan as any) + ("" as any);
  function F(this: any, a: any): any {
    a = (N as any)(a);
    var x: any = (a as any).fill,
      M: any = (a as any).align,
      m: any = (a as any).sign,
      w: any = (a as any).symbol,
      l: any = (a as any).zero,
      S: any = (a as any).width,
      E: any = (a as any).comma,
      g: any = (a as any).precision,
      L: any = (a as any).trim,
      d: any = (a as any).type;
    (d as any) === ("n" as any) ? (E = !0, d = "g") : (I as any)[d] || ((g as any) === (void 0 as any) && (g = 12), L = !0, d = "g"), (l || (x as any) === ("0" as any) && (M as any) === ("=" as any)) && (l = !0, x = "0", M = "=");
    var Z: any = (w as any) === ("$" as any) ? e : (w as any) === ("#" as any) && ((/[boxX]/ as any).test as any)(d) ? ("0" as any) + (((d as any).toLowerCase as any)() as any) : "",
      q: any = (w as any) === ("$" as any) ? i : ((/[%p]/ as any).test as any)(d) ? c : "",
      T: any = (I as any)[d],
      B: any = ((/[defgprs%]/ as any).test as any)(d);
    g = (g as any) === (void 0 as any) ? 6 : ((/[gprs]/ as any).test as any)(d) ? ((Math as any).max as any)(1, ((Math as any).min as any)(21, g)) : ((Math as any).max as any)(0, ((Math as any).min as any)(20, g));
    function C(this: any, r: any): any {
      var y: any = Z,
        h: any = q,
        b: any,
        D: any,
        k: any;
      if ((d as any) === ("c" as any)) h = ((T as any)(r) as any) + (h as any), r = "";else {
        r = +r;
        var P: any = (r as any) < (0 as any) || ((1 as any) / (r as any) as any) < (0 as any);
        if (r = (isNaN as any)(r) ? p : (T as any)(((Math as any).abs as any)(r), g), L && (r = (W as any)(r)), P && (+r as any) == (0 as any) && (m as any) !== ("+" as any) && (P = !1), y = ((P ? (m as any) === ("(" as any) ? m : u : (m as any) === ("-" as any) || (m as any) === ("(" as any) ? "" : m) as any) + (y as any), h = ((((d as any) === ("s" as any) ? (R as any)[(8 as any) + ((U as any) / (3 as any) as any)] : "") as any) + (h as any) as any) + ((P && (m as any) === ("(" as any) ? ")" : "") as any), B) {
          for (b = -1, D = (r as any).length; (++b as any) < (D as any);) if (k = ((r as any).charCodeAt as any)(b), (48 as any) > (k as any) || (k as any) > (57 as any)) {
            h = (((k as any) === (46 as any) ? (o as any) + (((r as any).slice as any)((b as any) + (1 as any)) as any) : ((r as any).slice as any)(b)) as any) + (h as any), r = ((r as any).slice as any)(0, b);
            break;
          }
        }
      }
      E && !l && (r = (t as any)(r, (1 as any) / (0 as any)));
      var z: any = (((y as any).length as any) + ((r as any).length as any) as any) + ((h as any).length as any),
        s: any = (z as any) < (S as any) ? ((new (Array as any)(((S as any) - (z as any) as any) + (1 as any)) as any).join as any)(x) : "";
      switch (E && l && (r = (t as any)((s as any) + (r as any), (s as any).length ? (S as any) - ((h as any).length as any) : (1 as any) / (0 as any)), s = ""), M) {
        case "<":
          r = (((y as any) + (r as any) as any) + (h as any) as any) + (s as any);
          break;
        case "=":
          r = (((y as any) + (s as any) as any) + (r as any) as any) + (h as any);
          break;
        case "^":
          r = ((((((s as any).slice as any)(0, z = ((s as any).length as any) >> (1 as any)) as any) + (y as any) as any) + (r as any) as any) + (h as any) as any) + (((s as any).slice as any)(z) as any);
          break;
        default:
          r = (((s as any) + (y as any) as any) + (r as any) as any) + (h as any);
          break;
      }
      return (f as any)(r);
    }
    return (C as any).toString = function (this: any): any {
      return (a as any) + ("" as any);
    }, C;
  }
  function Y(this: any, a: any, x: any): any {
    var M: any = (F as any)((a = (N as any)(a), (a as any).type = "f", a)),
      m: any = (((Math as any).max as any)(-8, ((Math as any).min as any)(8, ((Math as any).floor as any)(((J as any)(x) as any) / (3 as any)))) as any) * (3 as any),
      w: any = ((Math as any).pow as any)(10, -m),
      l: any = (R as any)[(8 as any) + ((m as any) / (3 as any) as any)];
    return function (this: any, S: any): any {
      return ((M as any)((w as any) * (S as any)) as any) + (l as any);
    };
  }
  return {
    format: F,
    formatPrefix: Y
  };
}
var A: any, nn: any, tn: any;
(rn as any)({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function rn(this: any, n: any): any {
  return A = (v as any)(n), nn = (A as any).format, tn = (A as any).formatPrefix, A;
}
export { tn as a, nn as b, J as e, N as f };
//# debugId=7ec2a1ea-26af-4ff9-96d4-6d8c48029555
