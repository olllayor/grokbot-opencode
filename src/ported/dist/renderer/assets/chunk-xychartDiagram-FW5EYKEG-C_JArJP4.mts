declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "53a9e2bf-bb72-4280-960a-8c342e12b07c", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-53a9e2bf-bb72-4280-960a-8c342e12b07c");
  } catch (e: any) {}
} as any)();
import { _ as n, s as xi, g as di, p as Yt, o as fi, a as pi, b as mi, l as Nt, F as yi, e as bi, q as Ai, z as kt, B as Ht, D as wi, W as Ci, i as Si, az as Ri, a7 as Ot } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { i as _i } from "./chunk-init-Gi6I4Gst.js";
import { o as ki } from "./chunk-ordinal-BB0u7Tqq.js";
import { l as Wt } from "./chunk-linear-CNfSrmBn.js";
import "./index.eager-vendor-Qbf9YA6n.js";
import "./chunk-defaultLocale-pEppTWzK.js";
function Ti(this: any, e: any, t: any, i: any): any {
  e = +e, t = +t, i = ((a = (arguments as any).length) as any) < (2 as any) ? (t = e, e = 0, 1) : (a as any) < (3 as any) ? 1 : +i;
  for (var s: any = -1, a: any = (((Math as any).max as any)(0, ((Math as any).ceil as any)(((t as any) - (e as any) as any) / (i as any))) as any) | (0 as any), o: any = new (Array as any)(a); (++s as any) < (a as any);) (o as any)[s] = (e as any) + ((s as any) * (i as any) as any);
  return o;
}
function wt(this: any): any {
  var e: any = (((ki as any)() as any).unknown as any)(void 0),
    t: any = (e as any).domain,
    i: any = (e as any).range,
    s: any = 0,
    a: any = 1,
    o: any,
    l: any,
    f: any = !1,
    d: any = 0,
    k: any = 0,
    T: any = .5;
  delete (e as any).unknown;
  function _(this: any): any {
    var b: any = ((t as any)() as any).length,
      E: any = (a as any) < (s as any),
      L: any = E ? a : s,
      P: any = E ? s : a;
    o = ((P as any) - (L as any) as any) / (((Math as any).max as any)(1, ((b as any) - (d as any) as any) + ((k as any) * (2 as any) as any)) as any), f && (o = ((Math as any).floor as any)(o)), L += (((P as any) - (L as any) as any) - ((o as any) * ((b as any) - (d as any) as any) as any) as any) * (T as any), l = (o as any) * ((1 as any) - (d as any) as any), f && (L = ((Math as any).round as any)(L), l = ((Math as any).round as any)(l));
    var I: any = (((Ti as any)(b) as any).map as any)(function (this: any, m: any): any {
      return (L as any) + ((o as any) * (m as any) as any);
    });
    return (i as any)(E ? ((I as any).reverse as any)() : I);
  }
  return (e as any).domain = function (this: any, b: any): any {
    return (arguments as any).length ? ((t as any)(b), (_ as any)()) : (t as any)();
  }, (e as any).range = function (this: any, b: any): any {
    return (arguments as any).length ? ([s, a] = b, s = +s, a = +a, (_ as any)()) : [s, a];
  }, (e as any).rangeRound = function (this: any, b: any): any {
    return [s, a] = b, s = +s, a = +a, f = !0, (_ as any)();
  }, (e as any).bandwidth = function (this: any): any {
    return l;
  }, (e as any).step = function (this: any): any {
    return o;
  }, (e as any).round = function (this: any, b: any): any {
    return (arguments as any).length ? (f = !!b, (_ as any)()) : f;
  }, (e as any).padding = function (this: any, b: any): any {
    return (arguments as any).length ? (d = ((Math as any).min as any)(1, k = +b), (_ as any)()) : d;
  }, (e as any).paddingInner = function (this: any, b: any): any {
    return (arguments as any).length ? (d = ((Math as any).min as any)(1, b), (_ as any)()) : d;
  }, (e as any).paddingOuter = function (this: any, b: any): any {
    return (arguments as any).length ? (k = +b, (_ as any)()) : k;
  }, (e as any).align = function (this: any, b: any): any {
    return (arguments as any).length ? (T = ((Math as any).max as any)(0, ((Math as any).min as any)(1, b)), (_ as any)()) : T;
  }, (e as any).copy = function (this: any): any {
    return (((((((((wt as any)((t as any)(), [s, a]) as any).round as any)(f) as any).paddingInner as any)(d) as any).paddingOuter as any)(k) as any).align as any)(T);
  }, ((_i as any).apply as any)((_ as any)(), arguments);
}
var Ct: any = (function (this: any): any {
  var e: any = (n as any)(function (this: any, F: any, h: any, u: any, g: any): any {
      for (u = u || {}, g = (F as any).length; g--; (u as any)[(F as any)[g]] = h);
      return u;
    }, "o"),
    t: any = [1, 10, 12, 14, 16, 18, 19, 21, 23],
    i: any = [2, 6],
    s: any = [1, 3],
    a: any = [1, 5],
    o: any = [1, 6],
    l: any = [1, 7],
    f: any = [1, 5, 10, 12, 14, 16, 18, 19, 21, 23, 36, 37, 38],
    d: any = [1, 25],
    k: any = [1, 26],
    T: any = [1, 28],
    _: any = [1, 29],
    b: any = [1, 30],
    E: any = [1, 31],
    L: any = [1, 32],
    P: any = [1, 33],
    I: any = [1, 34],
    m: any = [1, 35],
    D: any = [1, 36],
    c: any = [1, 37],
    B: any = [1, 43],
    W: any = [1, 42],
    X: any = [1, 47],
    Y: any = [1, 50],
    S: any = [1, 10, 12, 14, 16, 18, 19, 21, 23, 36, 37, 38],
    H: any = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 28, 29, 36, 37, 38],
    A: any = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 28, 29, 36, 37, 38, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
    w: any = [1, 65],
    V: any = [26, 28],
    R: any = {
      trace: (n as any)(function (this: any): any {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        eol: 4,
        XYCHART: 5,
        chartConfig: 6,
        document: 7,
        CHART_ORIENTATION: 8,
        statement: 9,
        title: 10,
        text: 11,
        X_AXIS: 12,
        parseXAxis: 13,
        Y_AXIS: 14,
        parseYAxis: 15,
        LINE: 16,
        plotData: 17,
        BAR: 18,
        acc_title: 19,
        acc_title_value: 20,
        acc_descr: 21,
        acc_descr_value: 22,
        acc_descr_multiline_value: 23,
        SQUARE_BRACES_START: 24,
        dataPoints: 25,
        SQUARE_BRACES_END: 26,
        dataPoint: 27,
        COMMA: 28,
        NUMBER_WITH_DECIMAL: 29,
        STR: 30,
        xAxisData: 31,
        bandData: 32,
        ARROW_DELIMITER: 33,
        commaSeparatedTexts: 34,
        yAxisData: 35,
        NEWLINE: 36,
        SEMI: 37,
        EOF: 38,
        alphaNum: 39,
        MD_STR: 40,
        alphaNumToken: 41,
        AMP: 42,
        NUM: 43,
        ALPHA: 44,
        PLUS: 45,
        EQUALS: 46,
        MULT: 47,
        DOT: 48,
        BRKT: 49,
        MINUS: 50,
        UNDERSCORE: 51,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        5: "XYCHART",
        8: "CHART_ORIENTATION",
        10: "title",
        12: "X_AXIS",
        14: "Y_AXIS",
        16: "LINE",
        18: "BAR",
        19: "acc_title",
        20: "acc_title_value",
        21: "acc_descr",
        22: "acc_descr_value",
        23: "acc_descr_multiline_value",
        24: "SQUARE_BRACES_START",
        26: "SQUARE_BRACES_END",
        28: "COMMA",
        29: "NUMBER_WITH_DECIMAL",
        30: "STR",
        33: "ARROW_DELIMITER",
        36: "NEWLINE",
        37: "SEMI",
        38: "EOF",
        40: "MD_STR",
        42: "AMP",
        43: "NUM",
        44: "ALPHA",
        45: "PLUS",
        46: "EQUALS",
        47: "MULT",
        48: "DOT",
        49: "BRKT",
        50: "MINUS",
        51: "UNDERSCORE"
      },
      productions_: [0, [3, 2], [3, 3], [3, 2], [3, 1], [6, 1], [7, 0], [7, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 3], [9, 2], [9, 3], [9, 2], [9, 2], [9, 1], [17, 3], [25, 3], [25, 1], [27, 2], [27, 1], [13, 1], [13, 2], [13, 1], [31, 1], [31, 3], [32, 3], [34, 3], [34, 1], [15, 1], [15, 2], [15, 1], [35, 3], [4, 1], [4, 1], [4, 1], [11, 1], [11, 1], [11, 1], [39, 1], [39, 2], [41, 1], [41, 1], [41, 1], [41, 1], [41, 1], [41, 1], [41, 1], [41, 1], [41, 1], [41, 1]],
      performAction: (n as any)(function (this: any, h: any, u: any, g: any, x: any, C: any, r: any, rt: any): any {
        var p: any = ((r as any).length as any) - (1 as any);
        switch (C) {
          case 5:
            ((x as any).setOrientation as any)((r as any)[p]);
            break;
          case 9:
            ((x as any).setDiagramTitle as any)(((((r as any)[p] as any).text as any).trim as any)());
            break;
          case 12:
            ((x as any).setLineData as any)({
              text: "",
              type: "text"
            }, (r as any)[p]);
            break;
          case 13:
            ((x as any).setLineData as any)((r as any)[(p as any) - (1 as any)], (r as any)[p]);
            break;
          case 14:
            ((x as any).setBarData as any)({
              text: "",
              type: "text"
            }, (r as any)[p]);
            break;
          case 15:
            ((x as any).setBarData as any)((r as any)[(p as any) - (1 as any)], (r as any)[p]);
            break;
          case 16:
            (this as any).$ = (((r as any)[p] as any).trim as any)(), ((x as any).setAccTitle as any)((this as any).$);
            break;
          case 17:
          case 18:
            (this as any).$ = (((r as any)[p] as any).trim as any)(), ((x as any).setAccDescription as any)((this as any).$);
            break;
          case 19:
            (this as any).$ = (r as any)[(p as any) - (1 as any)];
            break;
          case 20:
          case 30:
            (this as any).$ = [(r as any)[(p as any) - (2 as any)], ...(r as any)[p]];
            break;
          case 21:
          case 31:
            (this as any).$ = [(r as any)[p]];
            break;
          case 22:
            (this as any).$ = {
              value: (Number as any)((r as any)[(p as any) - (1 as any)]),
              label: (r as any)[p]
            };
            break;
          case 23:
            (this as any).$ = {
              value: (Number as any)((r as any)[p]),
              label: ""
            };
            break;
          case 24:
            ((x as any).setXAxisTitle as any)((r as any)[p]);
            break;
          case 25:
            ((x as any).setXAxisTitle as any)((r as any)[(p as any) - (1 as any)]);
            break;
          case 26:
            ((x as any).setXAxisTitle as any)({
              type: "text",
              text: ""
            });
            break;
          case 27:
            ((x as any).setXAxisBand as any)((r as any)[p]);
            break;
          case 28:
            ((x as any).setXAxisRangeData as any)((Number as any)((r as any)[(p as any) - (2 as any)]), (Number as any)((r as any)[p]));
            break;
          case 29:
            (this as any).$ = (r as any)[(p as any) - (1 as any)];
            break;
          case 32:
            ((x as any).setYAxisTitle as any)((r as any)[p]);
            break;
          case 33:
            ((x as any).setYAxisTitle as any)((r as any)[(p as any) - (1 as any)]);
            break;
          case 34:
            ((x as any).setYAxisTitle as any)({
              type: "text",
              text: ""
            });
            break;
          case 35:
            ((x as any).setYAxisRangeData as any)((Number as any)((r as any)[(p as any) - (2 as any)]), (Number as any)((r as any)[p]));
            break;
          case 39:
            (this as any).$ = {
              text: (r as any)[p],
              type: "text"
            };
            break;
          case 40:
            (this as any).$ = {
              text: (r as any)[p],
              type: "text"
            };
            break;
          case 41:
            (this as any).$ = {
              text: (r as any)[p],
              type: "markdown"
            };
            break;
          case 42:
            (this as any).$ = (r as any)[p];
            break;
          case 43:
            (this as any).$ = (((r as any)[(p as any) - (1 as any)] as any) + ("" as any) as any) + ((r as any)[p] as any);
            break;
        }
      }, "anonymous"),
      table: [(e as any)(t, i, {
        3: 1,
        4: 2,
        7: 4,
        5: s,
        36: a,
        37: o,
        38: l
      }), {
        1: [3]
      }, (e as any)(t, i, {
        4: 2,
        7: 4,
        3: 8,
        5: s,
        36: a,
        37: o,
        38: l
      }), (e as any)(t, i, {
        4: 2,
        7: 4,
        6: 9,
        3: 10,
        5: s,
        8: [1, 11],
        36: a,
        37: o,
        38: l
      }), {
        1: [2, 4],
        9: 12,
        10: [1, 13],
        12: [1, 14],
        14: [1, 15],
        16: [1, 16],
        18: [1, 17],
        19: [1, 18],
        21: [1, 19],
        23: [1, 20]
      }, (e as any)(f, [2, 36]), (e as any)(f, [2, 37]), (e as any)(f, [2, 38]), {
        1: [2, 1]
      }, (e as any)(t, i, {
        4: 2,
        7: 4,
        3: 21,
        5: s,
        36: a,
        37: o,
        38: l
      }), {
        1: [2, 3]
      }, (e as any)(f, [2, 5]), (e as any)(t, [2, 7], {
        4: 22,
        36: a,
        37: o,
        38: l
      }), {
        11: 23,
        30: d,
        39: 24,
        40: k,
        41: 27,
        42: T,
        43: _,
        44: b,
        45: E,
        46: L,
        47: P,
        48: I,
        49: m,
        50: D,
        51: c
      }, {
        11: 39,
        13: 38,
        24: B,
        29: W,
        30: d,
        31: 40,
        32: 41,
        39: 24,
        40: k,
        41: 27,
        42: T,
        43: _,
        44: b,
        45: E,
        46: L,
        47: P,
        48: I,
        49: m,
        50: D,
        51: c
      }, {
        11: 45,
        15: 44,
        29: X,
        30: d,
        35: 46,
        39: 24,
        40: k,
        41: 27,
        42: T,
        43: _,
        44: b,
        45: E,
        46: L,
        47: P,
        48: I,
        49: m,
        50: D,
        51: c
      }, {
        11: 49,
        17: 48,
        24: Y,
        30: d,
        39: 24,
        40: k,
        41: 27,
        42: T,
        43: _,
        44: b,
        45: E,
        46: L,
        47: P,
        48: I,
        49: m,
        50: D,
        51: c
      }, {
        11: 52,
        17: 51,
        24: Y,
        30: d,
        39: 24,
        40: k,
        41: 27,
        42: T,
        43: _,
        44: b,
        45: E,
        46: L,
        47: P,
        48: I,
        49: m,
        50: D,
        51: c
      }, {
        20: [1, 53]
      }, {
        22: [1, 54]
      }, (e as any)(S, [2, 18]), {
        1: [2, 2]
      }, (e as any)(S, [2, 8]), (e as any)(S, [2, 9]), (e as any)(H, [2, 39], {
        41: 55,
        42: T,
        43: _,
        44: b,
        45: E,
        46: L,
        47: P,
        48: I,
        49: m,
        50: D,
        51: c
      }), (e as any)(H, [2, 40]), (e as any)(H, [2, 41]), (e as any)(A, [2, 42]), (e as any)(A, [2, 44]), (e as any)(A, [2, 45]), (e as any)(A, [2, 46]), (e as any)(A, [2, 47]), (e as any)(A, [2, 48]), (e as any)(A, [2, 49]), (e as any)(A, [2, 50]), (e as any)(A, [2, 51]), (e as any)(A, [2, 52]), (e as any)(A, [2, 53]), (e as any)(S, [2, 10]), (e as any)(S, [2, 24], {
        32: 41,
        31: 56,
        24: B,
        29: W
      }), (e as any)(S, [2, 26]), (e as any)(S, [2, 27]), {
        33: [1, 57]
      }, {
        11: 59,
        30: d,
        34: 58,
        39: 24,
        40: k,
        41: 27,
        42: T,
        43: _,
        44: b,
        45: E,
        46: L,
        47: P,
        48: I,
        49: m,
        50: D,
        51: c
      }, (e as any)(S, [2, 11]), (e as any)(S, [2, 32], {
        35: 60,
        29: X
      }), (e as any)(S, [2, 34]), {
        33: [1, 61]
      }, (e as any)(S, [2, 12]), {
        17: 62,
        24: Y
      }, {
        25: 63,
        27: 64,
        29: w
      }, (e as any)(S, [2, 14]), {
        17: 66,
        24: Y
      }, (e as any)(S, [2, 16]), (e as any)(S, [2, 17]), (e as any)(A, [2, 43]), (e as any)(S, [2, 25]), {
        29: [1, 67]
      }, {
        26: [1, 68]
      }, {
        26: [2, 31],
        28: [1, 69]
      }, (e as any)(S, [2, 33]), {
        29: [1, 70]
      }, (e as any)(S, [2, 13]), {
        26: [1, 71]
      }, {
        26: [2, 21],
        28: [1, 72]
      }, (e as any)(V, [2, 23], {
        30: [1, 73]
      }), (e as any)(S, [2, 15]), (e as any)(S, [2, 28]), (e as any)(S, [2, 29]), {
        11: 59,
        30: d,
        34: 74,
        39: 24,
        40: k,
        41: 27,
        42: T,
        43: _,
        44: b,
        45: E,
        46: L,
        47: P,
        48: I,
        49: m,
        50: D,
        51: c
      }, (e as any)(S, [2, 35]), (e as any)(S, [2, 19]), {
        25: 75,
        27: 64,
        29: w
      }, (e as any)(V, [2, 22]), {
        26: [2, 30]
      }, {
        26: [2, 20]
      }],
      defaultActions: {
        8: [2, 1],
        10: [2, 3],
        21: [2, 2],
        74: [2, 30],
        75: [2, 20]
      },
      parseError: (n as any)(function (this: any, h: any, u: any): any {
        if ((u as any).recoverable) ((this as any).trace as any)(h);else {
          var g: any = new (Error as any)(h);
          throw (g as any).hash = u, g;
        }
      }, "parseError"),
      parse: (n as any)(function (this: any, h: any): any {
        var mt: any;
        var u: any = this,
          g: any = [0],
          x: any = [],
          C: any = [null],
          r: any = [],
          rt: any = (this as any).table,
          p: any = "",
          gt: any = 0,
          Mt: any = 0,
          li: number = 2,
          zt: number = 1,
          ci: any = (((r as any).slice as any).call as any)(arguments, 1),
          v: any = ((Object as any).create as any)((this as any).lexer),
          U: any = {
            yy: {}
          };
        for (mt in (this as any).yy) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).yy, mt) && (((U as any).yy as any)[mt] = ((this as any).yy as any)[mt]);
        ((v as any).setInput as any)(h, (U as any).yy), ((U as any).yy as any).lexer = v, ((U as any).yy as any).parser = this, (typeof (v as any).yylloc as any) > ("u" as any) && ((v as any).yylloc = {});
        var yt: any = (v as any).yylloc;
        ((r as any).push as any)(yt);
        var ui: any = (v as any).options && ((v as any).options as any).ranges;
        (typeof ((U as any).yy as any).parseError as any) == ("function" as any) ? (this as any).parseError = ((U as any).yy as any).parseError : (this as any).parseError = (((Object as any).getPrototypeOf as any)(this) as any).parseError;
        function gi(this: any, z: any): any {
          (g as any).length = ((g as any).length as any) - ((2 as any) * (z as any) as any), (C as any).length = ((C as any).length as any) - (z as any), (r as any).length = ((r as any).length as any) - (z as any);
        }
        (n as any)(gi, "popStack");
        function Bt(this: any): any {
          var z: any;
          return z = ((x as any).pop as any)() || ((v as any).lex as any)() || zt, (typeof z as any) != ("number" as any) && (z instanceof Array && (x = z, z = ((x as any).pop as any)()), z = ((u as any).symbols_ as any)[z] || z), z;
        }
        (n as any)(Bt, "lex");
        for (var M: any, $: any, O: any, bt: any, G: any = {}, xt: any, N: any, Vt: any, dt: any;;) {
          if ($ = (g as any)[((g as any).length as any) - (1 as any)], ((this as any).defaultActions as any)[$] ? O = ((this as any).defaultActions as any)[$] : (((M as any) === (null as any) || (typeof M as any) > ("u" as any)) && (M = (Bt as any)()), O = (rt as any)[$] && ((rt as any)[$] as any)[M]), (typeof O as any) > ("u" as any) || !(O as any).length || !(O as any)[0]) {
            var At: any = "";
            dt = [];
            for (xt in (rt as any)[$]) ((this as any).terminals_ as any)[xt] && (xt as any) > (li as any) && ((dt as any).push as any)((("'" as any) + (((this as any).terminals_ as any)[xt] as any) as any) + ("'" as any));
            (v as any).showPosition ? At = (((((((("Parse error on line " as any) + ((gt as any) + (1 as any) as any) as any) + (`:
` as any) as any) + (((v as any).showPosition as any)() as any) as any) + (`
Expecting ` as any) as any) + (((dt as any).join as any)(", ") as any) as any) + (", got '" as any) as any) + ((((this as any).terminals_ as any)[M] || M) as any) as any) + ("'" as any) : At = ((("Parse error on line " as any) + ((gt as any) + (1 as any) as any) as any) + (": Unexpected " as any) as any) + (((M as any) == (zt as any) ? "end of input" : (("'" as any) + ((((this as any).terminals_ as any)[M] || M) as any) as any) + ("'" as any)) as any), ((this as any).parseError as any)(At, {
              text: (v as any).match,
              token: ((this as any).terminals_ as any)[M] || M,
              line: (v as any).yylineno,
              loc: yt,
              expected: dt
            });
          }
          if ((O as any)[0] instanceof Array && ((O as any).length as any) > (1 as any)) throw new (Error as any)(((("Parse Error: multiple actions possible at state: " as any) + ($ as any) as any) + (", token: " as any) as any) + (M as any));
          switch ((O as any)[0]) {
            case 1:
              ((g as any).push as any)(M), ((C as any).push as any)((v as any).yytext), ((r as any).push as any)((v as any).yylloc), ((g as any).push as any)((O as any)[1]), M = null, Mt = (v as any).yyleng, p = (v as any).yytext, gt = (v as any).yylineno, yt = (v as any).yylloc;
              break;
            case 2:
              if (N = (((this as any).productions_ as any)[(O as any)[1]] as any)[1], (G as any).$ = (C as any)[((C as any).length as any) - (N as any)], (G as any)._$ = {
                first_line: ((r as any)[((r as any).length as any) - ((N || 1) as any)] as any).first_line,
                last_line: ((r as any)[((r as any).length as any) - (1 as any)] as any).last_line,
                first_column: ((r as any)[((r as any).length as any) - ((N || 1) as any)] as any).first_column,
                last_column: ((r as any)[((r as any).length as any) - (1 as any)] as any).last_column
              }, ui && (((G as any)._$ as any).range = [(((r as any)[((r as any).length as any) - ((N || 1) as any)] as any).range as any)[0], (((r as any)[((r as any).length as any) - (1 as any)] as any).range as any)[1]]), bt = (((this as any).performAction as any).apply as any)(G, (([p, Mt, gt, (U as any).yy, (O as any)[1], C, r] as any).concat as any)(ci)), (typeof bt as any) < ("u" as any)) return bt;
              N && (g = ((g as any).slice as any)(0, ((-1 as any) * (N as any) as any) * (2 as any)), C = ((C as any).slice as any)(0, (-1 as any) * (N as any)), r = ((r as any).slice as any)(0, (-1 as any) * (N as any))), ((g as any).push as any)((((this as any).productions_ as any)[(O as any)[1]] as any)[0]), ((C as any).push as any)((G as any).$), ((r as any).push as any)((G as any)._$), Vt = ((rt as any)[(g as any)[((g as any).length as any) - (2 as any)]] as any)[(g as any)[((g as any).length as any) - (1 as any)]], ((g as any).push as any)(Vt);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }, "parse")
    },
    ot: any = (function (this: any): any {
      var F: any = {
        EOF: 1,
        parseError: (n as any)(function (this: any, u: any, g: any): any {
          if (((this as any).yy as any).parser) ((((this as any).yy as any).parser as any).parseError as any)(u, g);else throw new (Error as any)(u);
        }, "parseError"),
        setInput: (n as any)(function (this: any, h: any, u: any): any {
          return (this as any).yy = u || (this as any).yy || {}, (this as any)._input = h, (this as any)._more = (this as any)._backtrack = (this as any).done = !1, (this as any).yylineno = (this as any).yyleng = 0, (this as any).yytext = (this as any).matched = (this as any).match = "", (this as any).conditionStack = ["INITIAL"], (this as any).yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [0, 0]), (this as any).offset = 0, this;
        }, "setInput"),
        input: (n as any)(function (this: any): any {
          var h: any = ((this as any)._input as any)[0];
          (this as any).yytext += h, (this as any).yyleng++, (this as any).offset++, (this as any).match += h, (this as any).matched += h;
          var u: any = ((h as any).match as any)(/(?:\r\n?|\n).*/g);
          return u ? ((this as any).yylineno++, ((this as any).yylloc as any).last_line++) : ((this as any).yylloc as any).last_column++, ((this as any).options as any).ranges && (((this as any).yylloc as any).range as any)[1]++, (this as any)._input = (((this as any)._input as any).slice as any)(1), h;
        }, "input"),
        unput: (n as any)(function (this: any, h: any): any {
          var u: any = (h as any).length,
            g: any = ((h as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any)._input = (h as any) + ((this as any)._input as any), (this as any).yytext = (((this as any).yytext as any).substr as any)(0, (((this as any).yytext as any).length as any) - (u as any)), (this as any).offset -= u;
          var x: any = (((this as any).match as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any).match = (((this as any).match as any).substr as any)(0, (((this as any).match as any).length as any) - (1 as any)), (this as any).matched = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (1 as any)), ((g as any).length as any) - (1 as any) && ((this as any).yylineno -= ((g as any).length as any) - (1 as any));
          var C: any = ((this as any).yylloc as any).range;
          return (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).first_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).first_column,
            last_column: g ? (((((g as any).length as any) === ((x as any).length as any) ? ((this as any).yylloc as any).first_column : 0) as any) + (((x as any)[((x as any).length as any) - ((g as any).length as any)] as any).length as any) as any) - (((g as any)[0] as any).length as any) : (((this as any).yylloc as any).first_column as any) - (u as any)
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(C as any)[0], (((C as any)[0] as any) + ((this as any).yyleng as any) as any) - (u as any)]), (this as any).yyleng = ((this as any).yytext as any).length, this;
        }, "unput"),
        more: (n as any)(function (this: any): any {
          return (this as any)._more = !0, this;
        }, "more"),
        reject: (n as any)(function (this: any): any {
          if (((this as any).options as any).backtrack_lexer) (this as any)._backtrack = !0;else return ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
          return this;
        }, "reject"),
        less: (n as any)(function (this: any, h: any): any {
          ((this as any).unput as any)((((this as any).match as any).slice as any)(h));
        }, "less"),
        pastInput: (n as any)(function (this: any): any {
          var h: any = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (((this as any).match as any).length as any));
          return ((((h as any).length as any) > (20 as any) ? "..." : "") as any) + (((((h as any).substr as any)(-20) as any).replace as any)(/\n/g, "") as any);
        }, "pastInput"),
        upcomingInput: (n as any)(function (this: any): any {
          var h: any = (this as any).match;
          return ((h as any).length as any) < (20 as any) && (h += (((this as any)._input as any).substr as any)(0, (20 as any) - ((h as any).length as any))), (((((h as any).substr as any)(0, 20) as any) + ((((h as any).length as any) > (20 as any) ? "..." : "") as any) as any).replace as any)(/\n/g, "");
        }, "upcomingInput"),
        showPosition: (n as any)(function (this: any): any {
          var h: any = ((this as any).pastInput as any)(),
            u: any = ((new (Array as any)(((h as any).length as any) + (1 as any)) as any).join as any)("-");
          return ((((h as any) + (((this as any).upcomingInput as any)() as any) as any) + (`
` as any) as any) + (u as any) as any) + ("^" as any);
        }, "showPosition"),
        test_match: (n as any)(function (this: any, h: any, u: any): any {
          var r: any;
          var g: any, x: any, C: any;
          if (((this as any).options as any).backtrack_lexer && (C = {
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
          }, ((this as any).options as any).ranges && (((C as any).yylloc as any).range = ((((this as any).yylloc as any).range as any).slice as any)(0))), x = (((h as any)[0] as any).match as any)(/(?:\r\n?|\n).*/g), x && ((this as any).yylineno += (x as any).length), (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).last_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).last_column,
            last_column: x ? (((x as any)[((x as any).length as any) - (1 as any)] as any).length as any) - ((((((x as any)[((x as any).length as any) - (1 as any)] as any).match as any)(/\r?\n?/) as any)[0] as any).length as any) : (((this as any).yylloc as any).last_column as any) + (((h as any)[0] as any).length as any)
          }, (this as any).yytext += (h as any)[0], (this as any).match += (h as any)[0], (this as any).matches = h, (this as any).yyleng = ((this as any).yytext as any).length, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(this as any).offset, (this as any).offset += (this as any).yyleng]), (this as any)._more = !1, (this as any)._backtrack = !1, (this as any)._input = (((this as any)._input as any).slice as any)(((h as any)[0] as any).length), (this as any).matched += (h as any)[0], g = (((this as any).performAction as any).call as any)(this, (this as any).yy, this, u, ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]), (this as any).done && (this as any)._input && ((this as any).done = !1), g) return g;
          if ((this as any)._backtrack) {
            for (r in C) (this as any)[r] = (C as any)[r];
            return !1;
          }
          return !1;
        }, "test_match"),
        next: (n as any)(function (this: any): any {
          if ((this as any).done) return (this as any).EOF;
          (this as any)._input || ((this as any).done = !0);
          var h: any, u: any, g: any, x: any;
          (this as any)._more || ((this as any).yytext = "", (this as any).match = "");
          for (var C: any = ((this as any)._currentRules as any)(), r: any = 0; (r as any) < ((C as any).length as any); r++) if (g = (((this as any)._input as any).match as any)(((this as any).rules as any)[(C as any)[r]]), g && (!u || (((g as any)[0] as any).length as any) > (((u as any)[0] as any).length as any))) {
            if (u = g, x = r, ((this as any).options as any).backtrack_lexer) {
              if (h = ((this as any).test_match as any)(g, (C as any)[r]), (h as any) !== (!1 as any)) return h;
              if ((this as any)._backtrack) {
                u = !1;
                continue;
              } else return !1;
            } else if (!((this as any).options as any).flex) break;
          }
          return u ? (h = ((this as any).test_match as any)(u, (C as any)[x]), (h as any) !== (!1 as any) ? h : !1) : ((this as any)._input as any) === ("" as any) ? (this as any).EOF : ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. Unrecognized text.
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
        }, "next"),
        lex: (n as any)(function (this: any): any {
          var u: any = ((this as any).next as any)();
          return u || ((this as any).lex as any)();
        }, "lex"),
        begin: (n as any)(function (this: any, u: any): any {
          (((this as any).conditionStack as any).push as any)(u);
        }, "begin"),
        popState: (n as any)(function (this: any): any {
          var u: any = (((this as any).conditionStack as any).length as any) - (1 as any);
          return (u as any) > (0 as any) ? (((this as any).conditionStack as any).pop as any)() : ((this as any).conditionStack as any)[0];
        }, "popState"),
        _currentRules: (n as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length && ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)] ? (((this as any).conditions as any)[((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]] as any).rules : (((this as any).conditions as any).INITIAL as any).rules;
        }, "_currentRules"),
        topState: (n as any)(function (this: any, u: any): any {
          return u = ((((this as any).conditionStack as any).length as any) - (1 as any) as any) - (((Math as any).abs as any)(u || 0) as any), (u as any) >= (0 as any) ? ((this as any).conditionStack as any)[u] : "INITIAL";
        }, "topState"),
        pushState: (n as any)(function (this: any, u: any): any {
          ((this as any).begin as any)(u);
        }, "pushState"),
        stateStackSize: (n as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": !0
        },
        performAction: (n as any)(function (this: any, u: any, g: any, x: any, C: any): any {
          switch (x) {
            case 0:
              break;
            case 1:
              break;
            case 2:
              return ((this as any).popState as any)(), 36;
            case 3:
              return ((this as any).popState as any)(), 36;
            case 4:
              return 36;
            case 5:
              break;
            case 6:
              return 10;
            case 7:
              return ((this as any).pushState as any)("acc_title"), 19;
            case 8:
              return ((this as any).popState as any)(), "acc_title_value";
            case 9:
              return ((this as any).pushState as any)("acc_descr"), 21;
            case 10:
              return ((this as any).popState as any)(), "acc_descr_value";
            case 11:
              ((this as any).pushState as any)("acc_descr_multiline");
              break;
            case 12:
              ((this as any).popState as any)();
              break;
            case 13:
              return "acc_descr_multiline_value";
            case 14:
              return 5;
            case 15:
              return 5;
            case 16:
              return 8;
            case 17:
              return ((this as any).pushState as any)("axis_data"), "X_AXIS";
            case 18:
              return ((this as any).pushState as any)("axis_data"), "Y_AXIS";
            case 19:
              return ((this as any).pushState as any)("axis_band_data"), 24;
            case 20:
              return 33;
            case 21:
              return ((this as any).pushState as any)("data"), 16;
            case 22:
              return ((this as any).pushState as any)("data"), 18;
            case 23:
              return ((this as any).pushState as any)("data_inner"), 24;
            case 24:
              return 29;
            case 25:
              return ((this as any).popState as any)(), 26;
            case 26:
              ((this as any).popState as any)();
              break;
            case 27:
              ((this as any).pushState as any)("string");
              break;
            case 28:
              ((this as any).popState as any)();
              break;
            case 29:
              return "STR";
            case 30:
              return 24;
            case 31:
              return 26;
            case 32:
              return 44;
            case 33:
              return "COLON";
            case 34:
              return 45;
            case 35:
              return 28;
            case 36:
              return 46;
            case 37:
              return 47;
            case 38:
              return 49;
            case 39:
              return 51;
            case 40:
              return 48;
            case 41:
              return 42;
            case 42:
              return 50;
            case 43:
              return 43;
            case 44:
              break;
            case 45:
              return 37;
            case 46:
              return 38;
          }
        }, "anonymous"),
        rules: [/^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:(\r?\n))/i, /^(?:(\r?\n))/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:title\b)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:\})/i, /^(?:[^\}]*)/i, /^(?:xychart-beta\b)/i, /^(?:xychart\b)/i, /^(?:(?:vertical|horizontal))/i, /^(?:x-axis\b)/i, /^(?:y-axis\b)/i, /^(?:\[)/i, /^(?:-->)/i, /^(?:line\b)/i, /^(?:bar\b)/i, /^(?:\[)/i, /^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i, /^(?:\])/i, /^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:\[)/i, /^(?:\])/i, /^(?:[A-Za-z]+)/i, /^(?::)/i, /^(?:\+)/i, /^(?:,)/i, /^(?:=)/i, /^(?:\*)/i, /^(?:#)/i, /^(?:[\_])/i, /^(?:\.)/i, /^(?:&)/i, /^(?:-)/i, /^(?:[0-9]+)/i, /^(?:\s+)/i, /^(?:;)/i, /^(?:$)/i],
        conditions: {
          data_inner: {
            rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 24, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
            inclusive: !0
          },
          data: {
            rules: [0, 1, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 23, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
            inclusive: !0
          },
          axis_band_data: {
            rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
            inclusive: !0
          },
          axis_data: {
            rules: [0, 1, 2, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
            inclusive: !0
          },
          acc_descr_multiline: {
            rules: [12, 13],
            inclusive: !1
          },
          acc_descr: {
            rules: [10],
            inclusive: !1
          },
          acc_title: {
            rules: [8],
            inclusive: !1
          },
          title: {
            rules: [],
            inclusive: !1
          },
          md_string: {
            rules: [],
            inclusive: !1
          },
          string: {
            rules: [28, 29],
            inclusive: !1
          },
          INITIAL: {
            rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
            inclusive: !0
          }
        }
      };
      return F;
    } as any)();
  (R as any).lexer = ot;
  function q(this: any): any {
    (this as any).yy = {};
  }
  return (n as any)(q, "Parser"), (q as any).prototype = R, (R as any).Parser = q, new (q as any)();
} as any)();
(Ct as any).parser = Ct;
var Di: any = Ct;
function St(this: any, e: any): any {
  return ((e as any).type as any) === ("bar" as any);
}
(n as any)(St, "isBarPlot");
function ft(this: any, e: any): any {
  return ((e as any).type as any) === ("band" as any);
}
(n as any)(ft, "isBandAxisData");
function j(this: any, e: any): any {
  return ((e as any).type as any) === ("linear" as any);
}
(n as any)(j, "isLinearAxisData");
var Q: any,
  Ut: any = (Q = class {
    declare parentGroup: any;
    [key: string]: any;
    constructor(t: any) {
      (this as any).parentGroup = t;
    }
    getMaxDimension(t: any, i: any): any {
      if (!(this as any).parentGroup) return {
        width: (((t as any).reduce as any)((o: any, l: any): any => ((Math as any).max as any)((l as any).length, o), 0) as any) * (i as any),
        height: i
      };
      const s: any = {
          width: 0,
          height: 0
        },
        a: any = (((((((this as any).parentGroup as any).append as any)("g") as any).attr as any)("visibility", "hidden") as any).attr as any)("font-size", i);
      for (const o of t) {
        const l: any = (Ri as any)(a, 1, o),
          f: any = l ? (l as any).width : ((o as any).length as any) * (i as any),
          d: any = l ? (l as any).height : i;
        (s as any).width = ((Math as any).max as any)((s as any).width, f), (s as any).height = ((Math as any).max as any)((s as any).height, d);
      }
      return ((a as any).remove as any)(), s;
    }
  }, (n as any)(Q, "TextDimensionCalculatorWithFont"), Q),
  Ft: number = .7,
  Xt: number = .2,
  K: any,
  $t: any = (K = class {
    declare range: any;
    declare normalizedLabelRotationInRad: any;
    declare labelTextHeight: any;
    declare titleTextHeight: any;
    declare outerPadding: any;
    declare showAxisLine: any;
    declare showTick: any;
    declare showLabel: any;
    declare showTitle: any;
    declare axisPosition: any;
    declare boundingRect: any;
    declare axisThemeConfig: any;
    declare textDimensionCalculator: any;
    declare title: any;
    declare axisConfig: any;
    [key: string]: any;
    constructor(t: any, i: any, s: any, a: any) {
      (this as any).axisConfig = t, (this as any).title = i, (this as any).textDimensionCalculator = s, (this as any).axisThemeConfig = a, (this as any).boundingRect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, (this as any).axisPosition = "left", (this as any).showTitle = !1, (this as any).showLabel = !1, (this as any).showTick = !1, (this as any).showAxisLine = !1, (this as any).outerPadding = 0, (this as any).titleTextHeight = 0, (this as any).labelTextHeight = 0, (this as any).normalizedLabelRotationInRad = 0, (this as any).range = [0, 10], (this as any).boundingRect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, (this as any).axisPosition = "left", (this as any).normalizedLabelRotationInRad = (((this as any).axisConfig as any).labelRotation as any) >= (-90 as any) && (((this as any).axisConfig as any).labelRotation as any) <= (90 as any) ? ((((this as any).axisConfig as any).labelRotation as any) * ((Math as any).PI as any) as any) / (180 as any) : 0;
    }
    setRange(t: any): any {
      (this as any).range = t, ((this as any).axisPosition as any) === ("left" as any) || ((this as any).axisPosition as any) === ("right" as any) ? ((this as any).boundingRect as any).height = ((t as any)[1] as any) - ((t as any)[0] as any) : ((this as any).boundingRect as any).width = ((t as any)[1] as any) - ((t as any)[0] as any), ((this as any).recalculateScale as any)();
    }
    getRange(): any {
      return [(((this as any).range as any)[0] as any) + ((this as any).outerPadding as any), (((this as any).range as any)[1] as any) - ((this as any).outerPadding as any)];
    }
    setAxisPosition(t: any): any {
      (this as any).axisPosition = t, ((this as any).setRange as any)((this as any).range);
    }
    getTickDistance(): any {
      const t: any = ((this as any).getRange as any)();
      return (((Math as any).abs as any)(((t as any)[0] as any) - ((t as any)[1] as any)) as any) / ((((this as any).getTickValues as any)() as any).length as any);
    }
    getAxisOuterPadding(): any {
      return (this as any).outerPadding;
    }
    getLabelDimension(): any {
      return (((this as any).textDimensionCalculator as any).getMaxDimension as any)(((((this as any).getTickValues as any)() as any).map as any)((t: any): any => ((t as any).toString as any)()), ((this as any).axisConfig as any).labelFontSize);
    }
    recalculateOuterPaddingToDrawBar(): any {
      ((Ft as any) * (((this as any).getTickDistance as any)() as any) as any) > (((this as any).outerPadding as any) * (2 as any) as any) && ((this as any).outerPadding = ((Math as any).floor as any)(((Ft as any) * (((this as any).getTickDistance as any)() as any) as any) / (2 as any))), ((this as any).recalculateScale as any)();
    }
    calculateSpaceIfDrawnHorizontally(t: any): any {
      let i: any = (t as any).height;
      if (((this as any).axisConfig as any).showAxisLine && (i as any) > (((this as any).axisConfig as any).axisLineWidth as any) && (i -= ((this as any).axisConfig as any).axisLineWidth, (this as any).showAxisLine = !0), ((this as any).axisConfig as any).showLabel) {
        const s: any = ((this as any).getLabelDimension as any)(),
          a: any = (Xt as any) * ((t as any).width as any);
        (this as any).outerPadding = ((Math as any).min as any)(((s as any).width as any) / (2 as any), a);
        let o: any = (s as any).height;
        ((this as any).axisPosition as any) === ("bottom" as any) && ((this as any).normalizedLabelRotationInRad as any) !== (0 as any) && (o = ((Math as any).max as any)(o, (((Math as any).abs as any)((((Math as any).sin as any)((this as any).normalizedLabelRotationInRad) as any) * ((s as any).width as any)) as any) + (((Math as any).abs as any)((((Math as any).cos as any)((this as any).normalizedLabelRotationInRad) as any) * ((s as any).height as any)) as any))), o += (((this as any).axisConfig as any).labelPadding as any) * (2 as any), (this as any).labelTextHeight = (s as any).height, (o as any) <= (i as any) && (i -= o, (this as any).showLabel = !0);
      }
      if (((this as any).axisConfig as any).showTick && (i as any) >= (((this as any).axisConfig as any).tickLength as any) && ((this as any).showTick = !0, i -= ((this as any).axisConfig as any).tickLength), ((this as any).axisConfig as any).showTitle && (this as any).title) {
        const s: any = (((this as any).textDimensionCalculator as any).getMaxDimension as any)([(this as any).title], ((this as any).axisConfig as any).titleFontSize),
          a: any = ((s as any).height as any) + ((((this as any).axisConfig as any).titlePadding as any) * (2 as any) as any);
        (this as any).titleTextHeight = (s as any).height, (a as any) <= (i as any) && (i -= a, (this as any).showTitle = !0);
      }
      ((this as any).boundingRect as any).width = (t as any).width, ((this as any).boundingRect as any).height = ((t as any).height as any) - (i as any);
    }
    calculateSpaceIfDrawnVertical(t: any): any {
      let i: any = (t as any).width;
      if (((this as any).axisConfig as any).showAxisLine && (i as any) > (((this as any).axisConfig as any).axisLineWidth as any) && (i -= ((this as any).axisConfig as any).axisLineWidth, (this as any).showAxisLine = !0), ((this as any).axisConfig as any).showLabel) {
        const s: any = ((this as any).getLabelDimension as any)(),
          a: any = (Xt as any) * ((t as any).height as any);
        (this as any).outerPadding = ((Math as any).min as any)(((s as any).height as any) / (2 as any), a);
        const o: any = ((s as any).width as any) + ((((this as any).axisConfig as any).labelPadding as any) * (2 as any) as any);
        (o as any) <= (i as any) && (i -= o, (this as any).showLabel = !0);
      }
      if (((this as any).axisConfig as any).showTick && (i as any) >= (((this as any).axisConfig as any).tickLength as any) && ((this as any).showTick = !0, i -= ((this as any).axisConfig as any).tickLength), ((this as any).axisConfig as any).showTitle && (this as any).title) {
        const s: any = (((this as any).textDimensionCalculator as any).getMaxDimension as any)([(this as any).title], ((this as any).axisConfig as any).titleFontSize),
          a: any = ((s as any).height as any) + ((((this as any).axisConfig as any).titlePadding as any) * (2 as any) as any);
        (this as any).titleTextHeight = (s as any).height, (a as any) <= (i as any) && (i -= a, (this as any).showTitle = !0);
      }
      ((this as any).boundingRect as any).width = ((t as any).width as any) - (i as any), ((this as any).boundingRect as any).height = (t as any).height;
    }
    calculateSpace(t: any): any {
      return ((this as any).axisPosition as any) === ("left" as any) || ((this as any).axisPosition as any) === ("right" as any) ? ((this as any).calculateSpaceIfDrawnVertical as any)(t) : ((this as any).calculateSpaceIfDrawnHorizontally as any)(t), ((this as any).recalculateScale as any)(), {
        width: ((this as any).boundingRect as any).width,
        height: ((this as any).boundingRect as any).height
      };
    }
    setBoundingBoxXY(t: any): any {
      ((this as any).boundingRect as any).x = (t as any).x, ((this as any).boundingRect as any).y = (t as any).y;
    }
    calculateOffsetByRotation(t: any): any {
      const i: any = (this as any).normalizedLabelRotationInRad;
      return (i as any) === (0 as any) ? 0 : ((((Math as any).sin as any)(i) as any) * ((((this as any).getLabelDimension as any)() as any)[t] as any) as any) / (2 as any);
    }
    getDrawableElementsForLeftAxis(): any {
      const t: any = [];
      if ((this as any).showAxisLine) {
        const i: any = ((((this as any).boundingRect as any).x as any) + (((this as any).boundingRect as any).width as any) as any) - ((((this as any).axisConfig as any).axisLineWidth as any) / (2 as any) as any);
        ((t as any).push as any)({
          type: "path",
          groupTexts: ["left-axis", "axisl-line"],
          data: [{
            path: `M ${i},${((this as any).boundingRect as any).y} L ${i},${(((this as any).boundingRect as any).y as any) + (((this as any).boundingRect as any).height as any)} `,
            strokeFill: ((this as any).axisThemeConfig as any).axisLineColor,
            strokeWidth: ((this as any).axisConfig as any).axisLineWidth
          }]
        });
      }
      if ((this as any).showLabel && ((t as any).push as any)({
        type: "text",
        groupTexts: ["left-axis", "label"],
        data: ((((this as any).getTickValues as any)() as any).map as any)((i: any): any => ({
          text: ((i as any).toString as any)(),
          x: ((((((this as any).boundingRect as any).x as any) + (((this as any).boundingRect as any).width as any) as any) - (((this as any).showLabel ? ((this as any).axisConfig as any).labelPadding : 0) as any) as any) - (((this as any).showTick ? ((this as any).axisConfig as any).tickLength : 0) as any) as any) - (((this as any).showAxisLine ? ((this as any).axisConfig as any).axisLineWidth : 0) as any),
          y: ((this as any).getScaleValue as any)(i),
          fill: ((this as any).axisThemeConfig as any).labelColor,
          fontSize: ((this as any).axisConfig as any).labelFontSize,
          rotation: 0,
          verticalPos: "middle",
          horizontalPos: "right"
        }))
      }), (this as any).showTick) {
        const i: any = ((((this as any).boundingRect as any).x as any) + (((this as any).boundingRect as any).width as any) as any) - (((this as any).showAxisLine ? ((this as any).axisConfig as any).axisLineWidth : 0) as any);
        ((t as any).push as any)({
          type: "path",
          groupTexts: ["left-axis", "ticks"],
          data: ((((this as any).getTickValues as any)() as any).map as any)((s: any): any => ({
            path: `M ${i},${((this as any).getScaleValue as any)(s)} L ${(i as any) - (((this as any).axisConfig as any).tickLength as any)},${((this as any).getScaleValue as any)(s)}`,
            strokeFill: ((this as any).axisThemeConfig as any).tickColor,
            strokeWidth: ((this as any).axisConfig as any).tickWidth
          }))
        });
      }
      return (this as any).showTitle && ((t as any).push as any)({
        type: "text",
        groupTexts: ["left-axis", "title"],
        data: [{
          text: (this as any).title,
          x: (((this as any).boundingRect as any).x as any) + (((this as any).axisConfig as any).titlePadding as any),
          y: (((this as any).boundingRect as any).y as any) + ((((this as any).boundingRect as any).height as any) / (2 as any) as any),
          fill: ((this as any).axisThemeConfig as any).titleColor,
          fontSize: ((this as any).axisConfig as any).titleFontSize,
          rotation: 270,
          verticalPos: "top",
          horizontalPos: "center"
        }]
      }), t;
    }
    getDrawableElementsForBottomAxis(): any {
      const t: any = [];
      if ((this as any).showAxisLine) {
        const i: any = (((this as any).boundingRect as any).y as any) + ((((this as any).axisConfig as any).axisLineWidth as any) / (2 as any) as any);
        ((t as any).push as any)({
          type: "path",
          groupTexts: ["bottom-axis", "axis-line"],
          data: [{
            path: `M ${((this as any).boundingRect as any).x},${i} L ${(((this as any).boundingRect as any).x as any) + (((this as any).boundingRect as any).width as any)},${i}`,
            strokeFill: ((this as any).axisThemeConfig as any).axisLineColor,
            strokeWidth: ((this as any).axisConfig as any).axisLineWidth
          }]
        });
      }
      if ((this as any).showLabel && ((t as any).push as any)({
        type: "text",
        groupTexts: ["bottom-axis", "label"],
        data: ((((this as any).getTickValues as any)() as any).map as any)((i: any): any => ({
          text: ((i as any).toString as any)(),
          x: (((this as any).getScaleValue as any)(i) as any) + (((this as any).calculateOffsetByRotation as any)("height") as any),
          y: ((((((this as any).boundingRect as any).y as any) + (((this as any).axisConfig as any).labelPadding as any) as any) + (((this as any).showTick ? ((this as any).axisConfig as any).tickLength : 0) as any) as any) + (((this as any).showAxisLine ? ((this as any).axisConfig as any).axisLineWidth : 0) as any) as any) + (((Math as any).abs as any)(((this as any).calculateOffsetByRotation as any)("width")) as any),
          fill: ((this as any).axisThemeConfig as any).labelColor,
          fontSize: ((this as any).axisConfig as any).labelFontSize,
          rotation: (((this as any).normalizedLabelRotationInRad as any) * (180 as any) as any) / ((Math as any).PI as any),
          verticalPos: "top",
          horizontalPos: "center"
        }))
      }), (this as any).showTick) {
        const i: any = (((this as any).boundingRect as any).y as any) + (((this as any).showAxisLine ? ((this as any).axisConfig as any).axisLineWidth : 0) as any);
        ((t as any).push as any)({
          type: "path",
          groupTexts: ["bottom-axis", "ticks"],
          data: ((((this as any).getTickValues as any)() as any).map as any)((s: any): any => ({
            path: `M ${((this as any).getScaleValue as any)(s)},${i} L ${((this as any).getScaleValue as any)(s)},${(i as any) + (((this as any).axisConfig as any).tickLength as any)}`,
            strokeFill: ((this as any).axisThemeConfig as any).tickColor,
            strokeWidth: ((this as any).axisConfig as any).tickWidth
          }))
        });
      }
      return (this as any).showTitle && ((t as any).push as any)({
        type: "text",
        groupTexts: ["bottom-axis", "title"],
        data: [{
          text: (this as any).title,
          x: (((this as any).range as any)[0] as any) + (((((this as any).range as any)[1] as any) - (((this as any).range as any)[0] as any) as any) / (2 as any) as any),
          y: (((((this as any).boundingRect as any).y as any) + (((this as any).boundingRect as any).height as any) as any) - (((this as any).axisConfig as any).titlePadding as any) as any) - ((this as any).titleTextHeight as any),
          fill: ((this as any).axisThemeConfig as any).titleColor,
          fontSize: ((this as any).axisConfig as any).titleFontSize,
          rotation: 0,
          verticalPos: "top",
          horizontalPos: "center"
        }]
      }), t;
    }
    getDrawableElementsForTopAxis(): any {
      const t: any = [];
      if ((this as any).showAxisLine) {
        const i: any = ((((this as any).boundingRect as any).y as any) + (((this as any).boundingRect as any).height as any) as any) - ((((this as any).axisConfig as any).axisLineWidth as any) / (2 as any) as any);
        ((t as any).push as any)({
          type: "path",
          groupTexts: ["top-axis", "axis-line"],
          data: [{
            path: `M ${((this as any).boundingRect as any).x},${i} L ${(((this as any).boundingRect as any).x as any) + (((this as any).boundingRect as any).width as any)},${i}`,
            strokeFill: ((this as any).axisThemeConfig as any).axisLineColor,
            strokeWidth: ((this as any).axisConfig as any).axisLineWidth
          }]
        });
      }
      if ((this as any).showLabel && ((t as any).push as any)({
        type: "text",
        groupTexts: ["top-axis", "label"],
        data: ((((this as any).getTickValues as any)() as any).map as any)((i: any): any => ({
          text: ((i as any).toString as any)(),
          x: ((this as any).getScaleValue as any)(i),
          y: ((((this as any).boundingRect as any).y as any) + (((this as any).showTitle ? ((this as any).titleTextHeight as any) + ((((this as any).axisConfig as any).titlePadding as any) * (2 as any) as any) : 0) as any) as any) + (((this as any).axisConfig as any).labelPadding as any),
          fill: ((this as any).axisThemeConfig as any).labelColor,
          fontSize: ((this as any).axisConfig as any).labelFontSize,
          rotation: 0,
          verticalPos: "top",
          horizontalPos: "center"
        }))
      }), (this as any).showTick) {
        const i: any = ((this as any).boundingRect as any).y;
        ((t as any).push as any)({
          type: "path",
          groupTexts: ["top-axis", "ticks"],
          data: ((((this as any).getTickValues as any)() as any).map as any)((s: any): any => ({
            path: `M ${((this as any).getScaleValue as any)(s)},${((i as any) + (((this as any).boundingRect as any).height as any) as any) - (((this as any).showAxisLine ? ((this as any).axisConfig as any).axisLineWidth : 0) as any)} L ${((this as any).getScaleValue as any)(s)},${(((i as any) + (((this as any).boundingRect as any).height as any) as any) - (((this as any).axisConfig as any).tickLength as any) as any) - (((this as any).showAxisLine ? ((this as any).axisConfig as any).axisLineWidth : 0) as any)}`,
            strokeFill: ((this as any).axisThemeConfig as any).tickColor,
            strokeWidth: ((this as any).axisConfig as any).tickWidth
          }))
        });
      }
      return (this as any).showTitle && ((t as any).push as any)({
        type: "text",
        groupTexts: ["top-axis", "title"],
        data: [{
          text: (this as any).title,
          x: (((this as any).boundingRect as any).x as any) + ((((this as any).boundingRect as any).width as any) / (2 as any) as any),
          y: (((this as any).boundingRect as any).y as any) + (((this as any).axisConfig as any).titlePadding as any),
          fill: ((this as any).axisThemeConfig as any).titleColor,
          fontSize: ((this as any).axisConfig as any).titleFontSize,
          rotation: 0,
          verticalPos: "top",
          horizontalPos: "center"
        }]
      }), t;
    }
    getDrawableElements(): any {
      if (((this as any).axisPosition as any) === ("left" as any)) return ((this as any).getDrawableElementsForLeftAxis as any)();
      if (((this as any).axisPosition as any) === ("right" as any)) throw (Error as any)("Drawing of right axis is not implemented");
      return ((this as any).axisPosition as any) === ("bottom" as any) ? ((this as any).getDrawableElementsForBottomAxis as any)() : ((this as any).axisPosition as any) === ("top" as any) ? ((this as any).getDrawableElementsForTopAxis as any)() : [];
    }
  }, (n as any)(K, "BaseAxis"), K),
  Z: any,
  vi: any = (Z = class extends ($t as any) {
    declare scale: any;
    declare categories: any;
    [key: string]: any;
    constructor(t: any, i: any, s: any, a: any, o: any) {
      super(t, a, o, i), (this as any).categories = s, (this as any).scale = (((((wt as any)() as any).domain as any)((this as any).categories) as any).range as any)(((this as any).getRange as any)());
    }
    setRange(t: any): any {
      (super.setRange as any)(t);
    }
    recalculateScale(): any {
      (this as any).scale = (((((((((((wt as any)() as any).domain as any)((this as any).categories) as any).range as any)(((this as any).getRange as any)()) as any).paddingInner as any)(1) as any).paddingOuter as any)(0) as any).align as any)(.5), ((Nt as any).trace as any)("BandAxis axis final categories, range: ", (this as any).categories, ((this as any).getRange as any)());
    }
    getTickValues(): any {
      return (this as any).categories;
    }
    getScaleValue(t: any): any {
      return ((this as any).scale as any)(t) ?? (((this as any).getRange as any)() as any)[0];
    }
  }, (n as any)(Z, "BandAxis"), Z),
  J: any,
  Li: any = (J = class extends ($t as any) {
    declare scale: any;
    declare domain: any;
    [key: string]: any;
    constructor(t: any, i: any, s: any, a: any, o: any) {
      super(t, a, o, i), (this as any).domain = s, (this as any).scale = (((((Wt as any)() as any).domain as any)((this as any).domain) as any).range as any)(((this as any).getRange as any)());
    }
    getTickValues(): any {
      return (((this as any).scale as any).ticks as any)();
    }
    recalculateScale(): any {
      const t: any = [...(this as any).domain];
      ((this as any).axisPosition as any) === ("left" as any) && ((t as any).reverse as any)(), (this as any).scale = (((((Wt as any)() as any).domain as any)(t) as any).range as any)(((this as any).getRange as any)());
    }
    getScaleValue(t: any): any {
      return ((this as any).scale as any)(t);
    }
  }, (n as any)(J, "LinearAxis"), J);
function Rt(this: any, e: any, t: any, i: any, s: any): any {
  const a: any = new (Ut as any)(s);
  return (ft as any)(e) ? new (vi as any)(t, i, (e as any).categories, (e as any).title, a) : new (Li as any)(t, i, [(e as any).min, (e as any).max], (e as any).title, a);
}
(n as any)(Rt, "getAxis");
var tt: any,
  Pi: any = (tt = class {
    declare showChartTitle: any;
    declare boundingRect: any;
    declare chartThemeConfig: any;
    declare chartData: any;
    declare chartConfig: any;
    declare textDimensionCalculator: any;
    [key: string]: any;
    constructor(t: any, i: any, s: any, a: any) {
      (this as any).textDimensionCalculator = t, (this as any).chartConfig = i, (this as any).chartData = s, (this as any).chartThemeConfig = a, (this as any).boundingRect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, (this as any).showChartTitle = !1;
    }
    setBoundingBoxXY(t: any): any {
      ((this as any).boundingRect as any).x = (t as any).x, ((this as any).boundingRect as any).y = (t as any).y;
    }
    calculateSpace(t: any): any {
      const i: any = (((this as any).textDimensionCalculator as any).getMaxDimension as any)([((this as any).chartData as any).title], ((this as any).chartConfig as any).titleFontSize),
        s: any = ((Math as any).max as any)((i as any).width, (t as any).width),
        a: any = ((i as any).height as any) + ((2 as any) * (((this as any).chartConfig as any).titlePadding as any) as any);
      return ((i as any).width as any) <= (s as any) && ((i as any).height as any) <= (a as any) && ((this as any).chartConfig as any).showTitle && ((this as any).chartData as any).title && (((this as any).boundingRect as any).width = s, ((this as any).boundingRect as any).height = a, (this as any).showChartTitle = !0), {
        width: ((this as any).boundingRect as any).width,
        height: ((this as any).boundingRect as any).height
      };
    }
    getDrawableElements(): any {
      const t: any = [];
      return (this as any).showChartTitle && ((t as any).push as any)({
        groupTexts: ["chart-title"],
        type: "text",
        data: [{
          fontSize: ((this as any).chartConfig as any).titleFontSize,
          text: ((this as any).chartData as any).title,
          verticalPos: "middle",
          horizontalPos: "center",
          x: (((this as any).boundingRect as any).x as any) + ((((this as any).boundingRect as any).width as any) / (2 as any) as any),
          y: (((this as any).boundingRect as any).y as any) + ((((this as any).boundingRect as any).height as any) / (2 as any) as any),
          fill: ((this as any).chartThemeConfig as any).titleColor,
          rotation: 0
        }]
      }), t;
    }
  }, (n as any)(tt, "ChartTitle"), tt);
function qt(this: any, e: any, t: any, i: any, s: any): any {
  const a: any = new (Ut as any)(s);
  return new (Pi as any)(a, e, t, i);
}
(n as any)(qt, "getChartTitleComponent");
var it: any,
  Ei: any = (it = class {
    declare plotIndex: any;
    declare orientation: any;
    declare yAxis: any;
    declare xAxis: any;
    declare plotData: any;
    [key: string]: any;
    constructor(t: any, i: any, s: any, a: any, o: any) {
      (this as any).plotData = t, (this as any).xAxis = i, (this as any).yAxis = s, (this as any).orientation = a, (this as any).plotIndex = o;
    }
    getDrawableElement(): any {
      const t: any = ((((this as any).plotData as any).data as any).map as any)((a: any): any => [(((this as any).xAxis as any).getScaleValue as any)((a as any)[0]), (((this as any).yAxis as any).getScaleValue as any)((a as any)[1])]);
      let i: any;
      if (((this as any).orientation as any) === ("horizontal" as any) ? i = ((((((Ot as any)() as any).y as any)((a: any): any => (a as any)[0]) as any).x as any)((a: any): any => (a as any)[1]) as any)(t) : i = ((((((Ot as any)() as any).x as any)((a: any): any => (a as any)[0]) as any).y as any)((a: any): any => (a as any)[1]) as any)(t), !i) return [];
      const s: any = [{
        groupTexts: ["plot", `line-plot-${(this as any).plotIndex}`],
        type: "path",
        data: [{
          path: i,
          strokeFill: ((this as any).plotData as any).strokeFill,
          strokeWidth: ((this as any).plotData as any).strokeWidth
        }]
      }];
      if (((this as any).plotData as any).pointLabels && ((((this as any).plotData as any).pointLabels as any).length as any) > (0 as any)) {
        const l: any = [];
        for (const [f, [d, k]] of ((t as any).entries as any)()) {
          const T: any = (((this as any).plotData as any).pointLabels as any)[f];
          T && (((this as any).orientation as any) === ("horizontal" as any) ? ((l as any).push as any)({
            x: (k as any) + (10 as any),
            y: d,
            text: T,
            fill: ((this as any).plotData as any).strokeFill,
            verticalPos: "middle",
            horizontalPos: "left",
            fontSize: 12,
            rotation: 0
          }) : ((l as any).push as any)({
            x: d,
            y: (k as any) - (10 as any),
            text: T,
            fill: ((this as any).plotData as any).strokeFill,
            verticalPos: "middle",
            horizontalPos: "center",
            fontSize: 12,
            rotation: 0
          }));
        }
        ((l as any).length as any) > (0 as any) && ((s as any).push as any)({
          groupTexts: ["plot", `line-plot-${(this as any).plotIndex}`, "labels"],
          type: "text",
          data: l
        });
      }
      return s;
    }
  }, (n as any)(it, "LinePlot"), it),
  et: any,
  Ii: any = (et = class {
    declare plotIndex: any;
    declare orientation: any;
    declare yAxis: any;
    declare xAxis: any;
    declare boundingRect: any;
    declare barData: any;
    [key: string]: any;
    constructor(t: any, i: any, s: any, a: any, o: any, l: any) {
      (this as any).barData = t, (this as any).boundingRect = i, (this as any).xAxis = s, (this as any).yAxis = a, (this as any).orientation = o, (this as any).plotIndex = l;
    }
    getDrawableElement(): any {
      const t: any = ((((this as any).barData as any).data as any).map as any)((o: any): any => [(((this as any).xAxis as any).getScaleValue as any)((o as any)[0]), (((this as any).yAxis as any).getScaleValue as any)((o as any)[1])]),
        s: any = (((Math as any).min as any)(((((this as any).xAxis as any).getAxisOuterPadding as any)() as any) * (2 as any), (((this as any).xAxis as any).getTickDistance as any)()) as any) * ((1 as any) - (.05 as any) as any),
        a: any = (s as any) / (2 as any);
      return ((this as any).orientation as any) === ("horizontal" as any) ? [{
        groupTexts: ["plot", `bar-plot-${(this as any).plotIndex}`],
        type: "rect",
        data: ((t as any).map as any)((o: any): any => ({
          x: ((this as any).boundingRect as any).x,
          y: ((o as any)[0] as any) - (a as any),
          height: s,
          width: ((o as any)[1] as any) - (((this as any).boundingRect as any).x as any),
          fill: ((this as any).barData as any).fill,
          strokeWidth: 0,
          strokeFill: ((this as any).barData as any).fill
        }))
      }] : [{
        groupTexts: ["plot", `bar-plot-${(this as any).plotIndex}`],
        type: "rect",
        data: ((t as any).map as any)((o: any): any => ({
          x: ((o as any)[0] as any) - (a as any),
          y: (o as any)[1],
          width: s,
          height: ((((this as any).boundingRect as any).y as any) + (((this as any).boundingRect as any).height as any) as any) - ((o as any)[1] as any),
          fill: ((this as any).barData as any).fill,
          strokeWidth: 0,
          strokeFill: ((this as any).barData as any).fill
        }))
      }];
    }
  }, (n as any)(et, "BarPlot"), et),
  st: any,
  Mi: any = (st = class {
    declare yAxis: any;
    declare xAxis: any;
    declare boundingRect: any;
    declare chartThemeConfig: any;
    declare chartData: any;
    declare chartConfig: any;
    [key: string]: any;
    constructor(t: any, i: any, s: any) {
      (this as any).chartConfig = t, (this as any).chartData = i, (this as any).chartThemeConfig = s, (this as any).boundingRect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
    setAxes(t: any, i: any): any {
      (this as any).xAxis = t, (this as any).yAxis = i;
    }
    setBoundingBoxXY(t: any): any {
      ((this as any).boundingRect as any).x = (t as any).x, ((this as any).boundingRect as any).y = (t as any).y;
    }
    calculateSpace(t: any): any {
      return ((this as any).boundingRect as any).width = (t as any).width, ((this as any).boundingRect as any).height = (t as any).height, {
        width: ((this as any).boundingRect as any).width,
        height: ((this as any).boundingRect as any).height
      };
    }
    getDrawableElements(): any {
      if (!((this as any).xAxis && (this as any).yAxis)) throw (Error as any)("Axes must be passed to render Plots");
      const t: any = [];
      for (const [i, s] of ((((this as any).chartData as any).plots as any).entries as any)()) switch ((s as any).type) {
        case "line":
          {
            const a: any = new (Ei as any)(s, (this as any).xAxis, (this as any).yAxis, ((this as any).chartConfig as any).chartOrientation, i);
            ((t as any).push as any)(...((a as any).getDrawableElement as any)());
          }
          break;
        case "bar":
          {
            const a: any = new (Ii as any)(s, (this as any).boundingRect, (this as any).xAxis, (this as any).yAxis, ((this as any).chartConfig as any).chartOrientation, i);
            ((t as any).push as any)(...((a as any).getDrawableElement as any)());
          }
          break;
      }
      return t;
    }
  }, (n as any)(st, "BasePlot"), st);
function Gt(this: any, e: any, t: any, i: any): any {
  return new (Mi as any)(e, t, i);
}
(n as any)(Gt, "getPlotComponent");
var at: any,
  zi: any = (at = class {
    declare componentStore: any;
    declare chartData: any;
    declare chartConfig: any;
    [key: string]: any;
    constructor(t: any, i: any, s: any, a: any) {
      (this as any).chartConfig = t, (this as any).chartData = i, (this as any).componentStore = {
        title: (qt as any)(t, i, s, a),
        plot: (Gt as any)(t, i, s),
        xAxis: (Rt as any)((i as any).xAxis, (t as any).xAxis, {
          titleColor: (s as any).xAxisTitleColor,
          labelColor: (s as any).xAxisLabelColor,
          tickColor: (s as any).xAxisTickColor,
          axisLineColor: (s as any).xAxisLineColor
        }, a),
        yAxis: (Rt as any)((i as any).yAxis, (t as any).yAxis, {
          titleColor: (s as any).yAxisTitleColor,
          labelColor: (s as any).yAxisLabelColor,
          tickColor: (s as any).yAxisTickColor,
          axisLineColor: (s as any).yAxisLineColor
        }, a)
      };
    }
    calculateVerticalSpace(): any {
      let t: any = ((this as any).chartConfig as any).width,
        i: any = ((this as any).chartConfig as any).height,
        s: any = 0,
        a: any = 0,
        o: any = ((Math as any).floor as any)(((t as any) * (((this as any).chartConfig as any).plotReservedSpacePercent as any) as any) / (100 as any)),
        l: any = ((Math as any).floor as any)(((i as any) * (((this as any).chartConfig as any).plotReservedSpacePercent as any) as any) / (100 as any)),
        f: any = ((((this as any).componentStore as any).plot as any).calculateSpace as any)({
          width: o,
          height: l
        });
      t -= (f as any).width, i -= (f as any).height, f = ((((this as any).componentStore as any).title as any).calculateSpace as any)({
        width: ((this as any).chartConfig as any).width,
        height: i
      }), a = (f as any).height, i -= (f as any).height, ((((this as any).componentStore as any).xAxis as any).setAxisPosition as any)("bottom"), f = ((((this as any).componentStore as any).xAxis as any).calculateSpace as any)({
        width: t,
        height: i
      }), i -= (f as any).height, ((((this as any).componentStore as any).yAxis as any).setAxisPosition as any)("left"), f = ((((this as any).componentStore as any).yAxis as any).calculateSpace as any)({
        width: t,
        height: i
      }), s = (f as any).width, t -= (f as any).width, (t as any) > (0 as any) && (o += t, t = 0), (i as any) > (0 as any) && (l += i, i = 0), ((((this as any).componentStore as any).plot as any).calculateSpace as any)({
        width: o,
        height: l
      }), ((((this as any).componentStore as any).plot as any).setBoundingBoxXY as any)({
        x: s,
        y: a
      }), ((((this as any).componentStore as any).xAxis as any).setRange as any)([s, (s as any) + (o as any)]), ((((this as any).componentStore as any).xAxis as any).setBoundingBoxXY as any)({
        x: s,
        y: (a as any) + (l as any)
      }), ((((this as any).componentStore as any).yAxis as any).setRange as any)([a, (a as any) + (l as any)]), ((((this as any).componentStore as any).yAxis as any).setBoundingBoxXY as any)({
        x: 0,
        y: a
      }), ((((this as any).chartData as any).plots as any).some as any)((d: any): any => (St as any)(d)) && ((((this as any).componentStore as any).xAxis as any).recalculateOuterPaddingToDrawBar as any)();
    }
    calculateHorizontalSpace(): any {
      let t: any = ((this as any).chartConfig as any).width,
        i: any = ((this as any).chartConfig as any).height,
        s: any = 0,
        a: any = 0,
        o: any = 0,
        l: any = ((Math as any).floor as any)(((t as any) * (((this as any).chartConfig as any).plotReservedSpacePercent as any) as any) / (100 as any)),
        f: any = ((Math as any).floor as any)(((i as any) * (((this as any).chartConfig as any).plotReservedSpacePercent as any) as any) / (100 as any)),
        d: any = ((((this as any).componentStore as any).plot as any).calculateSpace as any)({
          width: l,
          height: f
        });
      t -= (d as any).width, i -= (d as any).height, d = ((((this as any).componentStore as any).title as any).calculateSpace as any)({
        width: ((this as any).chartConfig as any).width,
        height: i
      }), s = (d as any).height, i -= (d as any).height, ((((this as any).componentStore as any).xAxis as any).setAxisPosition as any)("left"), d = ((((this as any).componentStore as any).xAxis as any).calculateSpace as any)({
        width: t,
        height: i
      }), t -= (d as any).width, a = (d as any).width, ((((this as any).componentStore as any).yAxis as any).setAxisPosition as any)("top"), d = ((((this as any).componentStore as any).yAxis as any).calculateSpace as any)({
        width: t,
        height: i
      }), i -= (d as any).height, o = (s as any) + ((d as any).height as any), (t as any) > (0 as any) && (l += t, t = 0), (i as any) > (0 as any) && (f += i, i = 0), ((((this as any).componentStore as any).plot as any).calculateSpace as any)({
        width: l,
        height: f
      }), ((((this as any).componentStore as any).plot as any).setBoundingBoxXY as any)({
        x: a,
        y: o
      }), ((((this as any).componentStore as any).yAxis as any).setRange as any)([a, (a as any) + (l as any)]), ((((this as any).componentStore as any).yAxis as any).setBoundingBoxXY as any)({
        x: a,
        y: s
      }), ((((this as any).componentStore as any).xAxis as any).setRange as any)([o, (o as any) + (f as any)]), ((((this as any).componentStore as any).xAxis as any).setBoundingBoxXY as any)({
        x: 0,
        y: o
      }), ((((this as any).chartData as any).plots as any).some as any)((k: any): any => (St as any)(k)) && ((((this as any).componentStore as any).xAxis as any).recalculateOuterPaddingToDrawBar as any)();
    }
    calculateSpace(): any {
      (((this as any).chartConfig as any).chartOrientation as any) === ("horizontal" as any) ? ((this as any).calculateHorizontalSpace as any)() : ((this as any).calculateVerticalSpace as any)();
    }
    getDrawableElement(): any {
      ((this as any).calculateSpace as any)();
      const t: any = [];
      ((((this as any).componentStore as any).plot as any).setAxes as any)(((this as any).componentStore as any).xAxis, ((this as any).componentStore as any).yAxis);
      for (const i of ((Object as any).values as any)((this as any).componentStore)) ((t as any).push as any)(...((i as any).getDrawableElements as any)());
      return t;
    }
  }, (n as any)(at, "Orchestrator"), at),
  nt: any,
  Bi: any = (nt = class {
    [key: string]: any;
    static build(t: any, i: any, s: any, a: any): any {
      return ((new (zi as any)(t, i, s, a) as any).getDrawableElement as any)();
    }
  }, (n as any)(nt, "XYChartBuilder"), nt),
  ht: any = 0,
  jt: any,
  lt: any = (vt as any)(),
  ct: any = (Dt as any)(),
  y: any = (Lt as any)(),
  _t: any = (((((ct as any).plotColorPalette as any).split as any)(",") as any).map as any)((e: any): any => ((e as any).trim as any)()),
  pt: any = !1,
  Tt: any = !1;
function Dt(this: any): any {
  const e: any = (Ci as any)(),
    t: any = (kt as any)();
  return (Ht as any)((e as any).xyChart, ((t as any).themeVariables as any).xyChart);
}
(n as any)(Dt, "getChartDefaultThemeConfig");
function vt(this: any): any {
  const e: any = (kt as any)();
  return (Ht as any)((wi as any).xyChart, (e as any).xyChart);
}
(n as any)(vt, "getChartDefaultConfig");
function Lt(this: any): any {
  return {
    yAxis: {
      type: "linear",
      title: "",
      min: (1 as any) / (0 as any),
      max: (-1 as any) / (0 as any)
    },
    xAxis: {
      type: "band",
      title: "",
      categories: []
    },
    title: "",
    plots: []
  };
}
(n as any)(Lt, "getChartDefaultData");
function ut(this: any, e: any): any {
  const t: any = (kt as any)();
  return (Si as any)(((e as any).trim as any)(), t);
}
(n as any)(ut, "textSanitizer");
function Qt(this: any, e: any): any {
  jt = e;
}
(n as any)(Qt, "setTmpSVGG");
function Kt(this: any, e: any): any {
  (e as any) === ("horizontal" as any) ? (lt as any).chartOrientation = "horizontal" : (lt as any).chartOrientation = "vertical";
}
(n as any)(Kt, "setOrientation");
function Zt(this: any, e: any): any {
  ((y as any).xAxis as any).title = (ut as any)((e as any).text);
}
(n as any)(Zt, "setXAxisTitle");
function Pt(this: any, e: any, t: any): any {
  (y as any).xAxis = {
    type: "linear",
    title: ((y as any).xAxis as any).title,
    min: e,
    max: t
  }, pt = !0;
}
(n as any)(Pt, "setXAxisRangeData");
function Jt(this: any, e: any): any {
  (y as any).xAxis = {
    type: "band",
    title: ((y as any).xAxis as any).title,
    categories: ((e as any).map as any)((t: any): any => (ut as any)((t as any).text))
  }, pt = !0;
}
(n as any)(Jt, "setXAxisBand");
function ti(this: any, e: any): any {
  ((y as any).yAxis as any).title = (ut as any)((e as any).text);
}
(n as any)(ti, "setYAxisTitle");
function ii(this: any, e: any, t: any): any {
  (y as any).yAxis = {
    type: "linear",
    title: ((y as any).yAxis as any).title,
    min: e,
    max: t
  }, Tt = !0;
}
(n as any)(ii, "setYAxisRangeData");
function ei(this: any, e: any): any {
  const t: any = ((Math as any).min as any)(...e),
    i: any = ((Math as any).max as any)(...e),
    s: any = (j as any)((y as any).yAxis) ? ((y as any).yAxis as any).min : (1 as any) / (0 as any),
    a: any = (j as any)((y as any).yAxis) ? ((y as any).yAxis as any).max : (-1 as any) / (0 as any);
  (y as any).yAxis = {
    type: "linear",
    title: ((y as any).yAxis as any).title,
    min: ((Math as any).min as any)(s, t),
    max: ((Math as any).max as any)(a, i)
  };
}
(n as any)(ei, "setYAxisRangeFromPlotData");
function Et(this: any, e: any): any {
  let t: any = [];
  if (((e as any).length as any) === (0 as any)) return t;
  if (!pt) {
    const i: any = (j as any)((y as any).xAxis) ? ((y as any).xAxis as any).min : (1 as any) / (0 as any),
      s: any = (j as any)((y as any).xAxis) ? ((y as any).xAxis as any).max : (-1 as any) / (0 as any);
    (Pt as any)(((Math as any).min as any)(i, 1), ((Math as any).max as any)(s, (e as any).length));
  }
  if ((ft as any)((y as any).xAxis) && ((e as any).length as any) > ((((y as any).xAxis as any).categories as any).length as any) && (e = ((e as any).slice as any)(0, (((y as any).xAxis as any).categories as any).length)), Tt || (ei as any)(e), (ft as any)((y as any).xAxis) && (t = ((((y as any).xAxis as any).categories as any).map as any)((i: any, s: any): any => [i, (e as any)[s]])), (j as any)((y as any).xAxis)) {
    const i: any = ((y as any).xAxis as any).min,
      s: any = ((y as any).xAxis as any).max,
      a: any = ((s as any) - (i as any) as any) / (((e as any).length as any) - (1 as any) as any),
      o: any = [];
    for (let l: any = i; (l as any) <= (s as any); l += a) ((o as any).push as any)(`${l}`);
    t = ((o as any).map as any)((l: any, f: any): any => [l, (e as any)[f]]);
  }
  return t;
}
(n as any)(Et, "transformDataWithoutCategory");
function It(this: any, e: any): any {
  return (_t as any)[(e as any) === (0 as any) ? 0 : (e as any) % ((_t as any).length as any)];
}
(n as any)(It, "getPlotColorFromPalette");
function si(this: any, e: any, t: any): any {
  const i: any = ((t as any).map as any)((l: any): any => (l as any).value),
    s: any = ((t as any).map as any)((l: any): any => (l as any).label ? (ut as any)((l as any).label) : ""),
    a: any = (Et as any)(i),
    o: any = ((s as any).some as any)((l: any): any => (l as any) !== ("" as any));
  (((y as any).plots as any).push as any)({
    type: "line",
    strokeFill: (It as any)(ht),
    strokeWidth: 2,
    data: a,
    ...(o ? {
      pointLabels: s
    } : {})
  }), ht++;
}
(n as any)(si, "setLineData");
function ai(this: any, e: any, t: any): any {
  const i: any = ((t as any).map as any)((a: any): any => (a as any).value),
    s: any = (Et as any)(i);
  (((y as any).plots as any).push as any)({
    type: "bar",
    fill: (It as any)(ht),
    data: s
  }), ht++;
}
(n as any)(ai, "setBarData");
function ni(this: any): any {
  if ((((y as any).plots as any).length as any) === (0 as any)) throw (Error as any)("No Plot to render, please provide a plot with some data");
  return (y as any).title = (Yt as any)(), ((Bi as any).build as any)(lt, y, ct, jt);
}
(n as any)(ni, "getDrawableElem");
function oi(this: any): any {
  return ct;
}
(n as any)(oi, "getChartThemeConfig");
function ri(this: any): any {
  return lt;
}
(n as any)(ri, "getChartConfig");
function hi(this: any): any {
  return y;
}
(n as any)(hi, "getXYChartData");
var Vi: any = (n as any)(function (this: any): any {
    (Ai as any)(), ht = 0, lt = (vt as any)(), y = (Lt as any)(), ct = (Dt as any)(), _t = (((((ct as any).plotColorPalette as any).split as any)(",") as any).map as any)((e: any): any => ((e as any).trim as any)()), pt = !1, Tt = !1;
  }, "clear"),
  Oi: any = {
    getDrawableElem: ni,
    clear: Vi,
    setAccTitle: mi,
    getAccTitle: pi,
    setDiagramTitle: fi,
    getDiagramTitle: Yt,
    getAccDescription: di,
    setAccDescription: xi,
    setOrientation: Kt,
    setXAxisTitle: Zt,
    setXAxisRangeData: Pt,
    setXAxisBand: Jt,
    setYAxisTitle: ti,
    setYAxisRangeData: ii,
    setLineData: si,
    setBarData: ai,
    setTmpSVGG: Qt,
    getChartThemeConfig: oi,
    getChartConfig: ri,
    getXYChartData: hi
  },
  Wi: any = (n as any)((e: any, t: any, i: any, s: any): any => {
    const a: any = (s as any).db,
      o: any = ((a as any).getChartThemeConfig as any)(),
      l: any = ((a as any).getChartConfig as any)(),
      f: any = (((((((a as any).getXYChartData as any)() as any).plots as any)[0] as any).data as any).map as any)((m: any): any => (m as any)[1]);
    function d(this: any, m: any): any {
      return (m as any) === ("top" as any) ? "text-before-edge" : "middle";
    }
    (n as any)(d, "getDominantBaseLine");
    function k(this: any, m: any): any {
      return (m as any) === ("left" as any) ? "start" : (m as any) === ("right" as any) ? "end" : "middle";
    }
    (n as any)(k, "getTextAnchor");
    function T(this: any, m: any): any {
      return `translate(${(m as any).x}, ${(m as any).y}) rotate(${(m as any).rotation || 0})`;
    }
    (n as any)(T, "getTextTransformation"), ((Nt as any).debug as any)((`Rendering xychart chart
` as any) + (e as any));
    const _: any = (yi as any)(t),
      b: any = ((((_ as any).append as any)("g") as any).attr as any)("class", "main"),
      E: any = ((((((((b as any).append as any)("rect") as any).attr as any)("width", (l as any).width) as any).attr as any)("height", (l as any).height) as any).attr as any)("class", "background");
    (bi as any)(_, (l as any).height, (l as any).width, !0), ((_ as any).attr as any)("viewBox", `0 0 ${(l as any).width} ${(l as any).height}`), ((E as any).attr as any)("fill", (o as any).backgroundColor), ((a as any).setTmpSVGG as any)(((((_ as any).append as any)("g") as any).attr as any)("class", "mermaid-tmp-group"));
    const L: any = ((a as any).getDrawableElem as any)(),
      P: any = {};
    function I(this: any, m: any): any {
      let D: any = b,
        c: any = "";
      for (const [B] of ((m as any).entries as any)()) {
        let W: any = b;
        (B as any) > (0 as any) && (P as any)[c] && (W = (P as any)[c]), c += (m as any)[B], D = (P as any)[c], D || (D = (P as any)[c] = ((((W as any).append as any)("g") as any).attr as any)("class", (m as any)[B]));
      }
      return D;
    }
    (n as any)(I, "getGroup");
    for (const m of L) {
      if ((((m as any).data as any).length as any) === (0 as any)) continue;
      const D: any = (I as any)((m as any).groupTexts);
      switch ((m as any).type) {
        case "rect":
          if (((((((((((((((((((((((D as any).selectAll as any)("rect") as any).data as any)((m as any).data) as any).enter as any)() as any).append as any)("rect") as any).attr as any)("x", (c: any): any => (c as any).x) as any).attr as any)("y", (c: any): any => (c as any).y) as any).attr as any)("width", (c: any): any => (c as any).width) as any).attr as any)("height", (c: any): any => (c as any).height) as any).attr as any)("fill", (c: any): any => (c as any).fill) as any).attr as any)("stroke", (c: any): any => (c as any).strokeFill) as any).attr as any)("stroke-width", (c: any): any => (c as any).strokeWidth), (l as any).showDataLabel) {
            const c: any = (l as any).showDataLabelOutsideBar;
            if (((l as any).chartOrientation as any) === ("horizontal" as any)) {
              let B: any = function (this: any, w: any, V: any): any {
                const {
                  data: R,
                  label: ot
                }: any = w;
                return (((V as any) * ((ot as any).length as any) as any) * (W as any) as any) <= (((R as any).width as any) - (X as any) as any);
              };
              (n as any)(B, "fitsHorizontally");
              const W: number = .7,
                X: number = 10,
                Y: any = (((((m as any).data as any).map as any)((w: any, V: any): any => ({
                  data: w,
                  label: (((f as any)[V] as any).toString as any)()
                })) as any).filter as any)((w: any): any => (((w as any).data as any).width as any) > (0 as any) && (((w as any).data as any).height as any) > (0 as any)),
                S: any = ((Y as any).map as any)((w: any): any => {
                  const {
                    data: V
                  }: any = w;
                  let R: any = ((V as any).height as any) * (.7 as any);
                  for (; !(B as any)(w, R) && (R as any) > (0 as any);) R -= 1;
                  return R;
                }),
                H: any = ((Math as any).floor as any)(((Math as any).min as any)(...S)),
                A: any = (n as any)((w: any): any => c ? ((((w as any).data as any).x as any) + (((w as any).data as any).width as any) as any) + (X as any) : ((((w as any).data as any).x as any) + (((w as any).data as any).width as any) as any) - (X as any), "determineLabelXPosition");
              ((((((((((((((((((((((D as any).selectAll as any)("text") as any).data as any)(Y) as any).enter as any)() as any).append as any)("text") as any).attr as any)("x", A) as any).attr as any)("y", (w: any): any => (((w as any).data as any).y as any) + ((((w as any).data as any).height as any) / (2 as any) as any)) as any).attr as any)("text-anchor", c ? "start" : "end") as any).attr as any)("dominant-baseline", "middle") as any).attr as any)("fill", (o as any).dataLabelColor) as any).attr as any)("font-size", `${H}px`) as any).text as any)((w: any): any => (w as any).label);
            } else {
              let B: any = function (this: any, A: any, w: any, V: any): any {
                const {
                    data: R,
                    label: ot
                  }: any = A,
                  F: any = ((w as any) * ((ot as any).length as any) as any) * (.7 as any),
                  h: any = ((R as any).x as any) + (((R as any).width as any) / (2 as any) as any),
                  u: any = (h as any) - ((F as any) / (2 as any) as any),
                  g: any = (h as any) + ((F as any) / (2 as any) as any),
                  x: any = (u as any) >= ((R as any).x as any) && (g as any) <= (((R as any).x as any) + ((R as any).width as any) as any),
                  C: any = ((((R as any).y as any) + (V as any) as any) + (w as any) as any) <= (((R as any).y as any) + ((R as any).height as any) as any);
                return x && C;
              };
              (n as any)(B, "fitsInBar");
              const W: number = 10,
                X: any = (((((m as any).data as any).map as any)((A: any, w: any): any => ({
                  data: A,
                  label: (((f as any)[w] as any).toString as any)()
                })) as any).filter as any)((A: any): any => (((A as any).data as any).width as any) > (0 as any) && (((A as any).data as any).height as any) > (0 as any)),
                Y: any = ((X as any).map as any)((A: any): any => {
                  const {
                    data: w,
                    label: V
                  }: any = A;
                  let R: any = ((w as any).width as any) / (((V as any).length as any) * (.7 as any) as any);
                  for (; !(B as any)(A, R, W) && (R as any) > (0 as any);) R -= 1;
                  return R;
                }),
                S: any = ((Math as any).floor as any)(((Math as any).min as any)(...Y)),
                H: any = (n as any)((A: any): any => c ? (((A as any).data as any).y as any) - (W as any) : (((A as any).data as any).y as any) + (W as any), "determineLabelYPosition");
              ((((((((((((((((((((((D as any).selectAll as any)("text") as any).data as any)(X) as any).enter as any)() as any).append as any)("text") as any).attr as any)("x", (A: any): any => (((A as any).data as any).x as any) + ((((A as any).data as any).width as any) / (2 as any) as any)) as any).attr as any)("y", H) as any).attr as any)("text-anchor", "middle") as any).attr as any)("dominant-baseline", c ? "auto" : "hanging") as any).attr as any)("fill", (o as any).dataLabelColor) as any).attr as any)("font-size", `${S}px`) as any).text as any)((A: any): any => (A as any).label);
            }
          }
          break;
        case "text":
          ((((((((((((((((((((((((D as any).selectAll as any)("text") as any).data as any)((m as any).data) as any).enter as any)() as any).append as any)("text") as any).attr as any)("x", 0) as any).attr as any)("y", 0) as any).attr as any)("fill", (c: any): any => (c as any).fill) as any).attr as any)("font-size", (c: any): any => (c as any).fontSize) as any).attr as any)("dominant-baseline", (c: any): any => (d as any)((c as any).verticalPos)) as any).attr as any)("text-anchor", (c: any): any => (k as any)((c as any).horizontalPos)) as any).attr as any)("transform", (c: any): any => (T as any)(c)) as any).text as any)((c: any): any => (c as any).text);
          break;
        case "path":
          ((((((((((((((((D as any).selectAll as any)("path") as any).data as any)((m as any).data) as any).enter as any)() as any).append as any)("path") as any).attr as any)("d", (c: any): any => (c as any).path) as any).attr as any)("fill", (c: any): any => (c as any).fill ? (c as any).fill : "none") as any).attr as any)("stroke", (c: any): any => (c as any).strokeFill) as any).attr as any)("stroke-width", (c: any): any => (c as any).strokeWidth);
          break;
      }
    }
  }, "draw"),
  Fi: any = {
    draw: Wi
  },
  qi: any = {
    parser: Di,
    db: Oi,
    renderer: Fi
  };
export { qi as diagram };
//# debugId=53a9e2bf-bb72-4280-960a-8c342e12b07c
