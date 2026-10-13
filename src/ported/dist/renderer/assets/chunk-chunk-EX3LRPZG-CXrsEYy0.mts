declare var document: any;
declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "155d1d82-8668-48c6-a768-5fbcc958cd6d", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-155d1d82-8668-48c6-a768-5fbcc958cd6d");
  } catch (e: any) {}
} as any)();
import { g as ee } from "./chunk-chunk-XXDRQBXY-DVdINg3t.js";
import { s as se } from "./chunk-chunk-VR4S4FIN-HF2Hbh9A.js";
import { _ as p, l as b, c as $, x as ie, y as re, a as ae, b as ne, g as oe, s as le, o as ce, p as he, a9 as ue, k as j, q as de, d as kt, a5 as fe } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { f as pe } from "./chunk-chunk-32BRIVSS-CL4hvhVG.js";
var Ct: any = (function (this: any): any {
  var t: any = (p as any)(function (this: any, V: any, o: any, u: any, a: any): any {
      for (u = u || {}, a = (V as any).length; a--; (u as any)[(V as any)[a]] = o);
      return u;
    }, "o"),
    e: any = [1, 2],
    s: any = [1, 3],
    n: any = [1, 4],
    r: any = [2, 4],
    c: any = [1, 9],
    d: any = [1, 11],
    S: any = [1, 16],
    f: any = [1, 17],
    T: any = [1, 18],
    E: any = [1, 19],
    m: any = [1, 33],
    L: any = [1, 20],
    D: any = [1, 21],
    h: any = [1, 22],
    I: any = [1, 23],
    w: any = [1, 24],
    C: any = [1, 26],
    F: any = [1, 27],
    A: any = [1, 28],
    P: any = [1, 29],
    N: any = [1, 30],
    z: any = [1, 31],
    rt: any = [1, 32],
    at: any = [1, 35],
    nt: any = [1, 36],
    ot: any = [1, 37],
    lt: any = [1, 38],
    K: any = [1, 34],
    y: any = [1, 4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41, 45, 48, 51, 52, 53, 54, 57],
    ct: any = [1, 4, 5, 14, 15, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 39, 40, 41, 45, 48, 51, 52, 53, 54, 57],
    Lt: any = [4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41, 45, 48, 51, 52, 53, 54, 57],
    gt: any = {
      trace: (p as any)(function (this: any): any {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        SPACE: 4,
        NL: 5,
        SD: 6,
        document: 7,
        line: 8,
        statement: 9,
        classDefStatement: 10,
        styleStatement: 11,
        cssClassStatement: 12,
        idStatement: 13,
        DESCR: 14,
        "-->": 15,
        HIDE_EMPTY: 16,
        scale: 17,
        WIDTH: 18,
        COMPOSIT_STATE: 19,
        STRUCT_START: 20,
        STRUCT_STOP: 21,
        STATE_DESCR: 22,
        AS: 23,
        ID: 24,
        FORK: 25,
        JOIN: 26,
        CHOICE: 27,
        CONCURRENT: 28,
        note: 29,
        notePosition: 30,
        NOTE_TEXT: 31,
        direction: 32,
        acc_title: 33,
        acc_title_value: 34,
        acc_descr: 35,
        acc_descr_value: 36,
        acc_descr_multiline_value: 37,
        CLICK: 38,
        STRING: 39,
        HREF: 40,
        classDef: 41,
        CLASSDEF_ID: 42,
        CLASSDEF_STYLEOPTS: 43,
        DEFAULT: 44,
        style: 45,
        STYLE_IDS: 46,
        STYLEDEF_STYLEOPTS: 47,
        class: 48,
        CLASSENTITY_IDS: 49,
        STYLECLASS: 50,
        direction_tb: 51,
        direction_bt: 52,
        direction_rl: 53,
        direction_lr: 54,
        eol: 55,
        ";": 56,
        EDGE_STATE: 57,
        STYLE_SEPARATOR: 58,
        left_of: 59,
        right_of: 60,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        4: "SPACE",
        5: "NL",
        6: "SD",
        14: "DESCR",
        15: "-->",
        16: "HIDE_EMPTY",
        17: "scale",
        18: "WIDTH",
        19: "COMPOSIT_STATE",
        20: "STRUCT_START",
        21: "STRUCT_STOP",
        22: "STATE_DESCR",
        23: "AS",
        24: "ID",
        25: "FORK",
        26: "JOIN",
        27: "CHOICE",
        28: "CONCURRENT",
        29: "note",
        31: "NOTE_TEXT",
        33: "acc_title",
        34: "acc_title_value",
        35: "acc_descr",
        36: "acc_descr_value",
        37: "acc_descr_multiline_value",
        38: "CLICK",
        39: "STRING",
        40: "HREF",
        41: "classDef",
        42: "CLASSDEF_ID",
        43: "CLASSDEF_STYLEOPTS",
        44: "DEFAULT",
        45: "style",
        46: "STYLE_IDS",
        47: "STYLEDEF_STYLEOPTS",
        48: "class",
        49: "CLASSENTITY_IDS",
        50: "STYLECLASS",
        51: "direction_tb",
        52: "direction_bt",
        53: "direction_rl",
        54: "direction_lr",
        56: ";",
        57: "EDGE_STATE",
        58: "STYLE_SEPARATOR",
        59: "left_of",
        60: "right_of"
      },
      productions_: [0, [3, 2], [3, 2], [3, 2], [7, 0], [7, 2], [8, 2], [8, 1], [8, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 2], [9, 3], [9, 4], [9, 1], [9, 2], [9, 1], [9, 4], [9, 3], [9, 6], [9, 1], [9, 1], [9, 1], [9, 1], [9, 4], [9, 4], [9, 1], [9, 2], [9, 2], [9, 1], [9, 5], [9, 5], [10, 3], [10, 3], [11, 3], [12, 3], [32, 1], [32, 1], [32, 1], [32, 1], [55, 1], [55, 1], [13, 1], [13, 1], [13, 3], [13, 3], [30, 1], [30, 1]],
      performAction: (p as any)(function (this: any, o: any, u: any, a: any, g: any, _: any, i: any, B: any): any {
        var l: any = ((i as any).length as any) - (1 as any);
        switch (_) {
          case 3:
            return ((g as any).setRootDoc as any)((i as any)[l]), (i as any)[l];
          case 4:
            (this as any).$ = [];
            break;
          case 5:
            ((i as any)[l] as any) != ("nl" as any) && ((((i as any)[(l as any) - (1 as any)] as any).push as any)((i as any)[l]), (this as any).$ = (i as any)[(l as any) - (1 as any)]);
            break;
          case 6:
          case 7:
            (this as any).$ = (i as any)[l];
            break;
          case 8:
            (this as any).$ = "nl";
            break;
          case 12:
            (this as any).$ = (i as any)[l];
            break;
          case 13:
            const Z: any = (i as any)[(l as any) - (1 as any)];
            (Z as any).description = ((g as any).trimColon as any)((i as any)[l]), (this as any).$ = Z;
            break;
          case 14:
            (this as any).$ = {
              stmt: "relation",
              state1: (i as any)[(l as any) - (2 as any)],
              state2: (i as any)[l]
            };
            break;
          case 15:
            const Tt: any = ((g as any).trimColon as any)((i as any)[l]);
            (this as any).$ = {
              stmt: "relation",
              state1: (i as any)[(l as any) - (3 as any)],
              state2: (i as any)[(l as any) - (1 as any)],
              description: Tt
            };
            break;
          case 19:
            (this as any).$ = {
              stmt: "state",
              id: (i as any)[(l as any) - (3 as any)],
              type: "default",
              description: "",
              doc: (i as any)[(l as any) - (1 as any)]
            };
            break;
          case 20:
            var Y: any = (i as any)[l],
              X: any = (((i as any)[(l as any) - (2 as any)] as any).trim as any)();
            if ((((i as any)[l] as any).match as any)(":")) {
              var ut: any = (((i as any)[l] as any).split as any)(":");
              Y = (ut as any)[0], X = [X, (ut as any)[1]];
            }
            (this as any).$ = {
              stmt: "state",
              id: Y,
              type: "default",
              description: X
            };
            break;
          case 21:
            (this as any).$ = {
              stmt: "state",
              id: (i as any)[(l as any) - (3 as any)],
              type: "default",
              description: (i as any)[(l as any) - (5 as any)],
              doc: (i as any)[(l as any) - (1 as any)]
            };
            break;
          case 22:
            (this as any).$ = {
              stmt: "state",
              id: (i as any)[l],
              type: "fork"
            };
            break;
          case 23:
            (this as any).$ = {
              stmt: "state",
              id: (i as any)[l],
              type: "join"
            };
            break;
          case 24:
            (this as any).$ = {
              stmt: "state",
              id: (i as any)[l],
              type: "choice"
            };
            break;
          case 25:
            (this as any).$ = {
              stmt: "state",
              id: ((g as any).getDividerId as any)(),
              type: "divider"
            };
            break;
          case 26:
            (this as any).$ = {
              stmt: "state",
              id: (((i as any)[(l as any) - (1 as any)] as any).trim as any)(),
              note: {
                position: (((i as any)[(l as any) - (2 as any)] as any).trim as any)(),
                text: (((i as any)[l] as any).trim as any)()
              }
            };
            break;
          case 29:
            (this as any).$ = (((i as any)[l] as any).trim as any)(), ((g as any).setAccTitle as any)((this as any).$);
            break;
          case 30:
          case 31:
            (this as any).$ = (((i as any)[l] as any).trim as any)(), ((g as any).setAccDescription as any)((this as any).$);
            break;
          case 32:
            (this as any).$ = {
              stmt: "click",
              id: (i as any)[(l as any) - (3 as any)],
              url: (i as any)[(l as any) - (2 as any)],
              tooltip: (i as any)[(l as any) - (1 as any)]
            };
            break;
          case 33:
            (this as any).$ = {
              stmt: "click",
              id: (i as any)[(l as any) - (3 as any)],
              url: (i as any)[(l as any) - (1 as any)],
              tooltip: ""
            };
            break;
          case 34:
          case 35:
            (this as any).$ = {
              stmt: "classDef",
              id: (((i as any)[(l as any) - (1 as any)] as any).trim as any)(),
              classes: (((i as any)[l] as any).trim as any)()
            };
            break;
          case 36:
            (this as any).$ = {
              stmt: "style",
              id: (((i as any)[(l as any) - (1 as any)] as any).trim as any)(),
              styleClass: (((i as any)[l] as any).trim as any)()
            };
            break;
          case 37:
            (this as any).$ = {
              stmt: "applyClass",
              id: (((i as any)[(l as any) - (1 as any)] as any).trim as any)(),
              styleClass: (((i as any)[l] as any).trim as any)()
            };
            break;
          case 38:
            ((g as any).setDirection as any)("TB"), (this as any).$ = {
              stmt: "dir",
              value: "TB"
            };
            break;
          case 39:
            ((g as any).setDirection as any)("BT"), (this as any).$ = {
              stmt: "dir",
              value: "BT"
            };
            break;
          case 40:
            ((g as any).setDirection as any)("RL"), (this as any).$ = {
              stmt: "dir",
              value: "RL"
            };
            break;
          case 41:
            ((g as any).setDirection as any)("LR"), (this as any).$ = {
              stmt: "dir",
              value: "LR"
            };
            break;
          case 44:
          case 45:
            (this as any).$ = {
              stmt: "state",
              id: (((i as any)[l] as any).trim as any)(),
              type: "default",
              description: ""
            };
            break;
          case 46:
            (this as any).$ = {
              stmt: "state",
              id: (((i as any)[(l as any) - (2 as any)] as any).trim as any)(),
              classes: [(((i as any)[l] as any).trim as any)()],
              type: "default",
              description: ""
            };
            break;
          case 47:
            (this as any).$ = {
              stmt: "state",
              id: (((i as any)[(l as any) - (2 as any)] as any).trim as any)(),
              classes: [(((i as any)[l] as any).trim as any)()],
              type: "default",
              description: ""
            };
            break;
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: e,
        5: s,
        6: n
      }, {
        1: [3]
      }, {
        3: 5,
        4: e,
        5: s,
        6: n
      }, {
        3: 6,
        4: e,
        5: s,
        6: n
      }, (t as any)([1, 4, 5, 16, 17, 19, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41, 45, 48, 51, 52, 53, 54, 57], r, {
        7: 7
      }), {
        1: [2, 1]
      }, {
        1: [2, 2]
      }, {
        1: [2, 3],
        4: c,
        5: d,
        8: 8,
        9: 10,
        10: 12,
        11: 13,
        12: 14,
        13: 15,
        16: S,
        17: f,
        19: T,
        22: E,
        24: m,
        25: L,
        26: D,
        27: h,
        28: I,
        29: w,
        32: 25,
        33: C,
        35: F,
        37: A,
        38: P,
        41: N,
        45: z,
        48: rt,
        51: at,
        52: nt,
        53: ot,
        54: lt,
        57: K
      }, (t as any)(y, [2, 5]), {
        9: 39,
        10: 12,
        11: 13,
        12: 14,
        13: 15,
        16: S,
        17: f,
        19: T,
        22: E,
        24: m,
        25: L,
        26: D,
        27: h,
        28: I,
        29: w,
        32: 25,
        33: C,
        35: F,
        37: A,
        38: P,
        41: N,
        45: z,
        48: rt,
        51: at,
        52: nt,
        53: ot,
        54: lt,
        57: K
      }, (t as any)(y, [2, 7]), (t as any)(y, [2, 8]), (t as any)(y, [2, 9]), (t as any)(y, [2, 10]), (t as any)(y, [2, 11]), (t as any)(y, [2, 12], {
        14: [1, 40],
        15: [1, 41]
      }), (t as any)(y, [2, 16]), {
        18: [1, 42]
      }, (t as any)(y, [2, 18], {
        20: [1, 43]
      }), {
        23: [1, 44]
      }, (t as any)(y, [2, 22]), (t as any)(y, [2, 23]), (t as any)(y, [2, 24]), (t as any)(y, [2, 25]), {
        30: 45,
        31: [1, 46],
        59: [1, 47],
        60: [1, 48]
      }, (t as any)(y, [2, 28]), {
        34: [1, 49]
      }, {
        36: [1, 50]
      }, (t as any)(y, [2, 31]), {
        13: 51,
        24: m,
        57: K
      }, {
        42: [1, 52],
        44: [1, 53]
      }, {
        46: [1, 54]
      }, {
        49: [1, 55]
      }, (t as any)(ct, [2, 44], {
        58: [1, 56]
      }), (t as any)(ct, [2, 45], {
        58: [1, 57]
      }), (t as any)(y, [2, 38]), (t as any)(y, [2, 39]), (t as any)(y, [2, 40]), (t as any)(y, [2, 41]), (t as any)(y, [2, 6]), (t as any)(y, [2, 13]), {
        13: 58,
        24: m,
        57: K
      }, (t as any)(y, [2, 17]), (t as any)(Lt, r, {
        7: 59
      }), {
        24: [1, 60]
      }, {
        24: [1, 61]
      }, {
        23: [1, 62]
      }, {
        24: [2, 48]
      }, {
        24: [2, 49]
      }, (t as any)(y, [2, 29]), (t as any)(y, [2, 30]), {
        39: [1, 63],
        40: [1, 64]
      }, {
        43: [1, 65]
      }, {
        43: [1, 66]
      }, {
        47: [1, 67]
      }, {
        50: [1, 68]
      }, {
        24: [1, 69]
      }, {
        24: [1, 70]
      }, (t as any)(y, [2, 14], {
        14: [1, 71]
      }), {
        4: c,
        5: d,
        8: 8,
        9: 10,
        10: 12,
        11: 13,
        12: 14,
        13: 15,
        16: S,
        17: f,
        19: T,
        21: [1, 72],
        22: E,
        24: m,
        25: L,
        26: D,
        27: h,
        28: I,
        29: w,
        32: 25,
        33: C,
        35: F,
        37: A,
        38: P,
        41: N,
        45: z,
        48: rt,
        51: at,
        52: nt,
        53: ot,
        54: lt,
        57: K
      }, (t as any)(y, [2, 20], {
        20: [1, 73]
      }), {
        31: [1, 74]
      }, {
        24: [1, 75]
      }, {
        39: [1, 76]
      }, {
        39: [1, 77]
      }, (t as any)(y, [2, 34]), (t as any)(y, [2, 35]), (t as any)(y, [2, 36]), (t as any)(y, [2, 37]), (t as any)(ct, [2, 46]), (t as any)(ct, [2, 47]), (t as any)(y, [2, 15]), (t as any)(y, [2, 19]), (t as any)(Lt, r, {
        7: 78
      }), (t as any)(y, [2, 26]), (t as any)(y, [2, 27]), {
        5: [1, 79]
      }, {
        5: [1, 80]
      }, {
        4: c,
        5: d,
        8: 8,
        9: 10,
        10: 12,
        11: 13,
        12: 14,
        13: 15,
        16: S,
        17: f,
        19: T,
        21: [1, 81],
        22: E,
        24: m,
        25: L,
        26: D,
        27: h,
        28: I,
        29: w,
        32: 25,
        33: C,
        35: F,
        37: A,
        38: P,
        41: N,
        45: z,
        48: rt,
        51: at,
        52: nt,
        53: ot,
        54: lt,
        57: K
      }, (t as any)(y, [2, 32]), (t as any)(y, [2, 33]), (t as any)(y, [2, 21])],
      defaultActions: {
        5: [2, 1],
        6: [2, 2],
        47: [2, 48],
        48: [2, 49]
      },
      parseError: (p as any)(function (this: any, o: any, u: any): any {
        if ((u as any).recoverable) ((this as any).trace as any)(o);else {
          var a: any = new (Error as any)(o);
          throw (a as any).hash = u, a;
        }
      }, "parseError"),
      parse: (p as any)(function (this: any, o: any): any {
        var Et: any;
        var u: any = this,
          a: any = [0],
          g: any = [],
          _: any = [null],
          i: any = [],
          B: any = (this as any).table,
          l: any = "",
          Y: any = 0,
          X: any = 0,
          ut: number = 2,
          Z: number = 1,
          Tt: any = (((i as any).slice as any).call as any)(arguments, 1),
          k: any = ((Object as any).create as any)((this as any).lexer),
          U: any = {
            yy: {}
          };
        for (Et in (this as any).yy) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).yy, Et) && (((U as any).yy as any)[Et] = ((this as any).yy as any)[Et]);
        ((k as any).setInput as any)(o, (U as any).yy), ((U as any).yy as any).lexer = k, ((U as any).yy as any).parser = this, (typeof (k as any).yylloc as any) > ("u" as any) && ((k as any).yylloc = {});
        var _t: any = (k as any).yylloc;
        ((i as any).push as any)(_t);
        var Zt: any = (k as any).options && ((k as any).options as any).ranges;
        (typeof ((U as any).yy as any).parseError as any) == ("function" as any) ? (this as any).parseError = ((U as any).yy as any).parseError : (this as any).parseError = (((Object as any).getPrototypeOf as any)(this) as any).parseError;
        function te(this: any, O: any): any {
          (a as any).length = ((a as any).length as any) - ((2 as any) * (O as any) as any), (_ as any).length = ((_ as any).length as any) - (O as any), (i as any).length = ((i as any).length as any) - (O as any);
        }
        (p as any)(te, "popStack");
        function It(this: any): any {
          var O: any;
          return O = ((g as any).pop as any)() || ((k as any).lex as any)() || Z, (typeof O as any) != ("number" as any) && (O instanceof Array && (g = O, O = ((g as any).pop as any)()), O = ((u as any).symbols_ as any)[O] || O), O;
        }
        (p as any)(It, "lex");
        for (var x: any, W: any, R: any, mt: any, J: any = {}, dt: any, G: any, wt: any, ft: any;;) {
          if (W = (a as any)[((a as any).length as any) - (1 as any)], ((this as any).defaultActions as any)[W] ? R = ((this as any).defaultActions as any)[W] : (((x as any) === (null as any) || (typeof x as any) > ("u" as any)) && (x = (It as any)()), R = (B as any)[W] && ((B as any)[W] as any)[x]), (typeof R as any) > ("u" as any) || !(R as any).length || !(R as any)[0]) {
            var bt: any = "";
            ft = [];
            for (dt in (B as any)[W]) ((this as any).terminals_ as any)[dt] && (dt as any) > (ut as any) && ((ft as any).push as any)((("'" as any) + (((this as any).terminals_ as any)[dt] as any) as any) + ("'" as any));
            (k as any).showPosition ? bt = (((((((("Parse error on line " as any) + ((Y as any) + (1 as any) as any) as any) + (`:
` as any) as any) + (((k as any).showPosition as any)() as any) as any) + (`
Expecting ` as any) as any) + (((ft as any).join as any)(", ") as any) as any) + (", got '" as any) as any) + ((((this as any).terminals_ as any)[x] || x) as any) as any) + ("'" as any) : bt = ((("Parse error on line " as any) + ((Y as any) + (1 as any) as any) as any) + (": Unexpected " as any) as any) + (((x as any) == (Z as any) ? "end of input" : (("'" as any) + ((((this as any).terminals_ as any)[x] || x) as any) as any) + ("'" as any)) as any), ((this as any).parseError as any)(bt, {
              text: (k as any).match,
              token: ((this as any).terminals_ as any)[x] || x,
              line: (k as any).yylineno,
              loc: _t,
              expected: ft
            });
          }
          if ((R as any)[0] instanceof Array && ((R as any).length as any) > (1 as any)) throw new (Error as any)(((("Parse Error: multiple actions possible at state: " as any) + (W as any) as any) + (", token: " as any) as any) + (x as any));
          switch ((R as any)[0]) {
            case 1:
              ((a as any).push as any)(x), ((_ as any).push as any)((k as any).yytext), ((i as any).push as any)((k as any).yylloc), ((a as any).push as any)((R as any)[1]), x = null, X = (k as any).yyleng, l = (k as any).yytext, Y = (k as any).yylineno, _t = (k as any).yylloc;
              break;
            case 2:
              if (G = (((this as any).productions_ as any)[(R as any)[1]] as any)[1], (J as any).$ = (_ as any)[((_ as any).length as any) - (G as any)], (J as any)._$ = {
                first_line: ((i as any)[((i as any).length as any) - ((G || 1) as any)] as any).first_line,
                last_line: ((i as any)[((i as any).length as any) - (1 as any)] as any).last_line,
                first_column: ((i as any)[((i as any).length as any) - ((G || 1) as any)] as any).first_column,
                last_column: ((i as any)[((i as any).length as any) - (1 as any)] as any).last_column
              }, Zt && (((J as any)._$ as any).range = [(((i as any)[((i as any).length as any) - ((G || 1) as any)] as any).range as any)[0], (((i as any)[((i as any).length as any) - (1 as any)] as any).range as any)[1]]), mt = (((this as any).performAction as any).apply as any)(J, (([l, X, Y, (U as any).yy, (R as any)[1], _, i] as any).concat as any)(Tt)), (typeof mt as any) < ("u" as any)) return mt;
              G && (a = ((a as any).slice as any)(0, ((-1 as any) * (G as any) as any) * (2 as any)), _ = ((_ as any).slice as any)(0, (-1 as any) * (G as any)), i = ((i as any).slice as any)(0, (-1 as any) * (G as any))), ((a as any).push as any)((((this as any).productions_ as any)[(R as any)[1]] as any)[0]), ((_ as any).push as any)((J as any).$), ((i as any).push as any)((J as any)._$), wt = ((B as any)[(a as any)[((a as any).length as any) - (2 as any)]] as any)[(a as any)[((a as any).length as any) - (1 as any)]], ((a as any).push as any)(wt);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }, "parse")
    },
    Qt: any = (function (this: any): any {
      var V: any = {
        EOF: 1,
        parseError: (p as any)(function (this: any, u: any, a: any): any {
          if (((this as any).yy as any).parser) ((((this as any).yy as any).parser as any).parseError as any)(u, a);else throw new (Error as any)(u);
        }, "parseError"),
        setInput: (p as any)(function (this: any, o: any, u: any): any {
          return (this as any).yy = u || (this as any).yy || {}, (this as any)._input = o, (this as any)._more = (this as any)._backtrack = (this as any).done = !1, (this as any).yylineno = (this as any).yyleng = 0, (this as any).yytext = (this as any).matched = (this as any).match = "", (this as any).conditionStack = ["INITIAL"], (this as any).yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [0, 0]), (this as any).offset = 0, this;
        }, "setInput"),
        input: (p as any)(function (this: any): any {
          var o: any = ((this as any)._input as any)[0];
          (this as any).yytext += o, (this as any).yyleng++, (this as any).offset++, (this as any).match += o, (this as any).matched += o;
          var u: any = ((o as any).match as any)(/(?:\r\n?|\n).*/g);
          return u ? ((this as any).yylineno++, ((this as any).yylloc as any).last_line++) : ((this as any).yylloc as any).last_column++, ((this as any).options as any).ranges && (((this as any).yylloc as any).range as any)[1]++, (this as any)._input = (((this as any)._input as any).slice as any)(1), o;
        }, "input"),
        unput: (p as any)(function (this: any, o: any): any {
          var u: any = (o as any).length,
            a: any = ((o as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any)._input = (o as any) + ((this as any)._input as any), (this as any).yytext = (((this as any).yytext as any).substr as any)(0, (((this as any).yytext as any).length as any) - (u as any)), (this as any).offset -= u;
          var g: any = (((this as any).match as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any).match = (((this as any).match as any).substr as any)(0, (((this as any).match as any).length as any) - (1 as any)), (this as any).matched = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (1 as any)), ((a as any).length as any) - (1 as any) && ((this as any).yylineno -= ((a as any).length as any) - (1 as any));
          var _: any = ((this as any).yylloc as any).range;
          return (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).first_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).first_column,
            last_column: a ? (((((a as any).length as any) === ((g as any).length as any) ? ((this as any).yylloc as any).first_column : 0) as any) + (((g as any)[((g as any).length as any) - ((a as any).length as any)] as any).length as any) as any) - (((a as any)[0] as any).length as any) : (((this as any).yylloc as any).first_column as any) - (u as any)
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(_ as any)[0], (((_ as any)[0] as any) + ((this as any).yyleng as any) as any) - (u as any)]), (this as any).yyleng = ((this as any).yytext as any).length, this;
        }, "unput"),
        more: (p as any)(function (this: any): any {
          return (this as any)._more = !0, this;
        }, "more"),
        reject: (p as any)(function (this: any): any {
          if (((this as any).options as any).backtrack_lexer) (this as any)._backtrack = !0;else return ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
          return this;
        }, "reject"),
        less: (p as any)(function (this: any, o: any): any {
          ((this as any).unput as any)((((this as any).match as any).slice as any)(o));
        }, "less"),
        pastInput: (p as any)(function (this: any): any {
          var o: any = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (((this as any).match as any).length as any));
          return ((((o as any).length as any) > (20 as any) ? "..." : "") as any) + (((((o as any).substr as any)(-20) as any).replace as any)(/\n/g, "") as any);
        }, "pastInput"),
        upcomingInput: (p as any)(function (this: any): any {
          var o: any = (this as any).match;
          return ((o as any).length as any) < (20 as any) && (o += (((this as any)._input as any).substr as any)(0, (20 as any) - ((o as any).length as any))), (((((o as any).substr as any)(0, 20) as any) + ((((o as any).length as any) > (20 as any) ? "..." : "") as any) as any).replace as any)(/\n/g, "");
        }, "upcomingInput"),
        showPosition: (p as any)(function (this: any): any {
          var o: any = ((this as any).pastInput as any)(),
            u: any = ((new (Array as any)(((o as any).length as any) + (1 as any)) as any).join as any)("-");
          return ((((o as any) + (((this as any).upcomingInput as any)() as any) as any) + (`
` as any) as any) + (u as any) as any) + ("^" as any);
        }, "showPosition"),
        test_match: (p as any)(function (this: any, o: any, u: any): any {
          var i: any;
          var a: any, g: any, _: any;
          if (((this as any).options as any).backtrack_lexer && (_ = {
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
          }, ((this as any).options as any).ranges && (((_ as any).yylloc as any).range = ((((this as any).yylloc as any).range as any).slice as any)(0))), g = (((o as any)[0] as any).match as any)(/(?:\r\n?|\n).*/g), g && ((this as any).yylineno += (g as any).length), (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).last_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).last_column,
            last_column: g ? (((g as any)[((g as any).length as any) - (1 as any)] as any).length as any) - ((((((g as any)[((g as any).length as any) - (1 as any)] as any).match as any)(/\r?\n?/) as any)[0] as any).length as any) : (((this as any).yylloc as any).last_column as any) + (((o as any)[0] as any).length as any)
          }, (this as any).yytext += (o as any)[0], (this as any).match += (o as any)[0], (this as any).matches = o, (this as any).yyleng = ((this as any).yytext as any).length, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(this as any).offset, (this as any).offset += (this as any).yyleng]), (this as any)._more = !1, (this as any)._backtrack = !1, (this as any)._input = (((this as any)._input as any).slice as any)(((o as any)[0] as any).length), (this as any).matched += (o as any)[0], a = (((this as any).performAction as any).call as any)(this, (this as any).yy, this, u, ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]), (this as any).done && (this as any)._input && ((this as any).done = !1), a) return a;
          if ((this as any)._backtrack) {
            for (i in _) (this as any)[i] = (_ as any)[i];
            return !1;
          }
          return !1;
        }, "test_match"),
        next: (p as any)(function (this: any): any {
          if ((this as any).done) return (this as any).EOF;
          (this as any)._input || ((this as any).done = !0);
          var o: any, u: any, a: any, g: any;
          (this as any)._more || ((this as any).yytext = "", (this as any).match = "");
          for (var _: any = ((this as any)._currentRules as any)(), i: any = 0; (i as any) < ((_ as any).length as any); i++) if (a = (((this as any)._input as any).match as any)(((this as any).rules as any)[(_ as any)[i]]), a && (!u || (((a as any)[0] as any).length as any) > (((u as any)[0] as any).length as any))) {
            if (u = a, g = i, ((this as any).options as any).backtrack_lexer) {
              if (o = ((this as any).test_match as any)(a, (_ as any)[i]), (o as any) !== (!1 as any)) return o;
              if ((this as any)._backtrack) {
                u = !1;
                continue;
              } else return !1;
            } else if (!((this as any).options as any).flex) break;
          }
          return u ? (o = ((this as any).test_match as any)(u, (_ as any)[g]), (o as any) !== (!1 as any) ? o : !1) : ((this as any)._input as any) === ("" as any) ? (this as any).EOF : ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. Unrecognized text.
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
        }, "next"),
        lex: (p as any)(function (this: any): any {
          var u: any = ((this as any).next as any)();
          return u || ((this as any).lex as any)();
        }, "lex"),
        begin: (p as any)(function (this: any, u: any): any {
          (((this as any).conditionStack as any).push as any)(u);
        }, "begin"),
        popState: (p as any)(function (this: any): any {
          var u: any = (((this as any).conditionStack as any).length as any) - (1 as any);
          return (u as any) > (0 as any) ? (((this as any).conditionStack as any).pop as any)() : ((this as any).conditionStack as any)[0];
        }, "popState"),
        _currentRules: (p as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length && ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)] ? (((this as any).conditions as any)[((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]] as any).rules : (((this as any).conditions as any).INITIAL as any).rules;
        }, "_currentRules"),
        topState: (p as any)(function (this: any, u: any): any {
          return u = ((((this as any).conditionStack as any).length as any) - (1 as any) as any) - (((Math as any).abs as any)(u || 0) as any), (u as any) >= (0 as any) ? ((this as any).conditionStack as any)[u] : "INITIAL";
        }, "topState"),
        pushState: (p as any)(function (this: any, u: any): any {
          ((this as any).begin as any)(u);
        }, "pushState"),
        stateStackSize: (p as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": !0
        },
        performAction: (p as any)(function (this: any, u: any, a: any, g: any, _: any): any {
          function i(this: any): any {
            const B: any = (((a as any).yytext as any).indexOf as any)("%%");
            if ((B as any) === (0 as any)) return !1;
            if ((B as any) > (0 as any)) {
              const l: any = (((a as any).yytext as any).slice as any)(0, B),
                Y: any = (((a as any).yytext as any).slice as any)(B);
              Y && (((u as any).lexer as any).unput as any)(Y), (a as any).yytext = l;
            }
            return !0;
          }
          switch ((p as any)(i, "processId"), g) {
            case 0:
              return 38;
            case 1:
              return 40;
            case 2:
              return 39;
            case 3:
              return 44;
            case 4:
              return 51;
            case 5:
              return 52;
            case 6:
              return 53;
            case 7:
              return 54;
            case 8:
              return 5;
            case 9:
              break;
            case 10:
              break;
            case 11:
              break;
            case 12:
              break;
            case 13:
              return ((this as any).pushState as any)("SCALE"), 17;
            case 14:
              return 18;
            case 15:
              ((this as any).popState as any)();
              break;
            case 16:
              return ((this as any).begin as any)("acc_title"), 33;
            case 17:
              return ((this as any).popState as any)(), "acc_title_value";
            case 18:
              return ((this as any).begin as any)("acc_descr"), 35;
            case 19:
              return ((this as any).popState as any)(), "acc_descr_value";
            case 20:
              ((this as any).begin as any)("acc_descr_multiline");
              break;
            case 21:
              ((this as any).popState as any)();
              break;
            case 22:
              return "acc_descr_multiline_value";
            case 23:
              return ((this as any).pushState as any)("CLASSDEF"), 41;
            case 24:
              return ((this as any).popState as any)(), ((this as any).pushState as any)("CLASSDEFID"), "DEFAULT_CLASSDEF_ID";
            case 25:
              return ((this as any).popState as any)(), ((this as any).pushState as any)("CLASSDEFID"), 42;
            case 26:
              return ((this as any).popState as any)(), 43;
            case 27:
              return ((this as any).pushState as any)("CLASS"), 48;
            case 28:
              return ((this as any).popState as any)(), ((this as any).pushState as any)("CLASS_STYLE"), 49;
            case 29:
              return ((this as any).popState as any)(), 50;
            case 30:
              return ((this as any).pushState as any)("STYLE"), 45;
            case 31:
              return ((this as any).popState as any)(), ((this as any).pushState as any)("STYLEDEF_STYLES"), 46;
            case 32:
              return ((this as any).popState as any)(), 47;
            case 33:
              return ((this as any).pushState as any)("SCALE"), 17;
            case 34:
              return 18;
            case 35:
              ((this as any).popState as any)();
              break;
            case 36:
              ((this as any).pushState as any)("STATE");
              break;
            case 37:
              return ((this as any).popState as any)(), (a as any).yytext = (((((a as any).yytext as any).slice as any)(0, -8) as any).trim as any)(), 25;
            case 38:
              return ((this as any).popState as any)(), (a as any).yytext = (((((a as any).yytext as any).slice as any)(0, -8) as any).trim as any)(), 26;
            case 39:
              return ((this as any).popState as any)(), (a as any).yytext = (((((a as any).yytext as any).slice as any)(0, -10) as any).trim as any)(), 27;
            case 40:
              return ((this as any).popState as any)(), (a as any).yytext = (((((a as any).yytext as any).slice as any)(0, -8) as any).trim as any)(), 25;
            case 41:
              return ((this as any).popState as any)(), (a as any).yytext = (((((a as any).yytext as any).slice as any)(0, -8) as any).trim as any)(), 26;
            case 42:
              return ((this as any).popState as any)(), (a as any).yytext = (((((a as any).yytext as any).slice as any)(0, -10) as any).trim as any)(), 27;
            case 43:
              return 51;
            case 44:
              return 52;
            case 45:
              return 53;
            case 46:
              return 54;
            case 47:
              ((this as any).pushState as any)("STATE_STRING");
              break;
            case 48:
              return ((this as any).pushState as any)("STATE_ID"), "AS";
            case 49:
              return (i as any)() ? (((this as any).popState as any)(), "ID") : void 0;
            case 50:
              ((this as any).popState as any)();
              break;
            case 51:
              return "STATE_DESCR";
            case 52:
              throw new (Error as any)((('Error: State name must be a single word. Found: "' as any) + ((((a as any).yytext as any).trim as any)() as any) as any) + ('"' as any));
            case 53:
              return 19;
            case 54:
              ((this as any).popState as any)();
              break;
            case 55:
              return ((this as any).popState as any)(), ((this as any).pushState as any)("struct"), 20;
            case 56:
              return ((this as any).popState as any)(), 21;
            case 57:
              break;
            case 58:
              return ((this as any).begin as any)("NOTE"), 29;
            case 59:
              return ((this as any).popState as any)(), ((this as any).pushState as any)("NOTE_ID"), 59;
            case 60:
              return ((this as any).popState as any)(), ((this as any).pushState as any)("NOTE_ID"), 60;
            case 61:
              ((this as any).popState as any)(), ((this as any).pushState as any)("FLOATING_NOTE");
              break;
            case 62:
              return ((this as any).popState as any)(), ((this as any).pushState as any)("FLOATING_NOTE_ID"), "AS";
            case 63:
              break;
            case 64:
              return "NOTE_TEXT";
            case 65:
              return (i as any)() ? (((this as any).popState as any)(), "ID") : void 0;
            case 66:
              return (i as any)() ? (((this as any).popState as any)(), ((this as any).pushState as any)("NOTE_TEXT"), 24) : void 0;
            case 67:
              return ((this as any).popState as any)(), (a as any).yytext = (((((a as any).yytext as any).substr as any)(2) as any).trim as any)(), 31;
            case 68:
              return ((this as any).popState as any)(), (a as any).yytext = (((((a as any).yytext as any).slice as any)(0, -8) as any).trim as any)(), 31;
            case 69:
              return 6;
            case 70:
              return 6;
            case 71:
              return 16;
            case 72:
              return 57;
            case 73:
              return (i as any)() ? 24 : void 0;
            case 74:
              return (a as any).yytext = (((a as any).yytext as any).trim as any)(), 14;
            case 75:
              return 15;
            case 76:
              return 28;
            case 77:
              return 58;
            case 78:
              return 5;
            case 79:
              return "INVALID";
          }
        }, "anonymous"),
        rules: [/^(?:click\b)/i, /^(?:href\b)/i, /^(?:"[^"]*")/i, /^(?:default\b)/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:[\n]+)/i, /^(?:[\s]+)/i, /^(?:((?!\n)\s)+)/i, /^(?:#[^\n]*)/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:scale\s+)/i, /^(?:\d+)/i, /^(?:\s+width\b)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:classDef\s+)/i, /^(?:DEFAULT\s+)/i, /^(?:\w+\s+)/i, /^(?:[^\n]*)/i, /^(?:class\s+)/i, /^(?:(\w+)+((,\s*\w+)*))/i, /^(?:[^\n]*)/i, /^(?:style\s+)/i, /^(?:[\w,]+\s+)/i, /^(?:[^\n]*)/i, /^(?:scale\s+)/i, /^(?:\d+)/i, /^(?:\s+width\b)/i, /^(?:state\s+)/i, /^(?:.*<<fork>>)/i, /^(?:.*<<join>>)/i, /^(?:.*<<choice>>)/i, /^(?:.*\[\[fork\]\])/i, /^(?:.*\[\[join\]\])/i, /^(?:.*\[\[choice\]\])/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:["])/i, /^(?:\s*as\s+)/i, /^(?:[^\n\{]*)/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:\w+\s+\w+.*?\{)/i, /^(?:[^\n\s\{]+)/i, /^(?:\n)/i, /^(?:\{)/i, /^(?:\})/i, /^(?:[\n])/i, /^(?:note\s+)/i, /^(?:left of\b)/i, /^(?:right of\b)/i, /^(?:")/i, /^(?:\s*as\s*)/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[^\n]*)/i, /^(?:\s*[^:\n\s\-]+)/i, /^(?:\s*:[^:\n;]+)/i, /^(?:[\s\S]*?\n\s*end note\b)/i, /^(?:stateDiagram\s+)/i, /^(?:stateDiagram-v2\s+)/i, /^(?:hide empty description\b)/i, /^(?:\[\*\])/i, /^(?:[^:\n\s\-\{]+)/i, /^(?:\s*:(?:[^:\n;]|:[^:\n;])+)/i, /^(?:-->)/i, /^(?:--)/i, /^(?::::)/i, /^(?:$)/i, /^(?:.)/i],
        conditions: {
          LINE: {
            rules: [10, 11, 12],
            inclusive: !1
          },
          struct: {
            rules: [10, 11, 12, 23, 27, 30, 36, 43, 44, 45, 46, 56, 57, 58, 72, 73, 74, 75, 76, 77],
            inclusive: !1
          },
          FLOATING_NOTE_ID: {
            rules: [65],
            inclusive: !1
          },
          FLOATING_NOTE: {
            rules: [62, 63, 64],
            inclusive: !1
          },
          NOTE_TEXT: {
            rules: [67, 68],
            inclusive: !1
          },
          NOTE_ID: {
            rules: [66],
            inclusive: !1
          },
          NOTE: {
            rules: [59, 60, 61],
            inclusive: !1
          },
          STYLEDEF_STYLEOPTS: {
            rules: [],
            inclusive: !1
          },
          STYLEDEF_STYLES: {
            rules: [32],
            inclusive: !1
          },
          STYLE_IDS: {
            rules: [],
            inclusive: !1
          },
          STYLE: {
            rules: [31],
            inclusive: !1
          },
          CLASS_STYLE: {
            rules: [29],
            inclusive: !1
          },
          CLASS: {
            rules: [28],
            inclusive: !1
          },
          CLASSDEFID: {
            rules: [26],
            inclusive: !1
          },
          CLASSDEF: {
            rules: [24, 25],
            inclusive: !1
          },
          acc_descr_multiline: {
            rules: [21, 22],
            inclusive: !1
          },
          acc_descr: {
            rules: [19],
            inclusive: !1
          },
          acc_title: {
            rules: [17],
            inclusive: !1
          },
          SCALE: {
            rules: [14, 15, 34, 35],
            inclusive: !1
          },
          ALIAS: {
            rules: [],
            inclusive: !1
          },
          STATE_ID: {
            rules: [49],
            inclusive: !1
          },
          STATE_STRING: {
            rules: [50, 51],
            inclusive: !1
          },
          FORK_STATE: {
            rules: [],
            inclusive: !1
          },
          STATE: {
            rules: [10, 11, 12, 37, 38, 39, 40, 41, 42, 47, 48, 52, 53, 54, 55],
            inclusive: !1
          },
          ID: {
            rules: [10, 11, 12],
            inclusive: !1
          },
          INITIAL: {
            rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 16, 18, 20, 23, 27, 30, 33, 36, 55, 58, 69, 70, 71, 72, 73, 74, 75, 77, 78, 79],
            inclusive: !0
          }
        }
      };
      return V;
    } as any)();
  (gt as any).lexer = Qt;
  function ht(this: any): any {
    (this as any).yy = {};
  }
  return (p as any)(ht, "Parser"), (ht as any).prototype = gt, (gt as any).Parser = ht, new (ht as any)();
} as any)();
(Ct as any).parser = Ct;
var We: any = Ct,
  Se: string = "TB",
  Yt: string = "TB",
  Nt: string = "dir",
  Q: string = "state",
  q: string = "root",
  At: string = "relation",
  ye: string = "classDef",
  ge: string = "style",
  Te: string = "applyClass",
  st: string = "default",
  Gt: string = "divider",
  Vt: string = "fill:none",
  Mt: string = "fill: #333",
  Ut: string = "c",
  Wt: string = "markdown",
  jt: string = "normal",
  Dt: string = "rect",
  vt: string = "rectWithTitle",
  Ee: string = "stateStart",
  _e: string = "stateEnd",
  Ot: string = "divider",
  Rt: string = "roundedWithTitle",
  me: string = "note",
  be: string = "noteGroup",
  it: string = "statediagram",
  ke: string = "state",
  De: any = `${it}-${ke}`,
  Ht: string = "transition",
  ve: string = "note",
  Ce: string = "note-edge",
  Ae: any = `${Ht} ${Ce}`,
  xe: any = `${it}-${ve}`,
  Le: string = "cluster",
  Ie: any = `${it}-${Le}`,
  we: string = "cluster-alt",
  Ne: any = `${it}-${we}`,
  zt: string = "parent",
  Kt: string = "note",
  Oe: string = "state",
  xt: string = "----",
  Re: any = `${xt}${Kt}`,
  $t: any = `${xt}${zt}`,
  Xt: any = (p as any)((t: any, e: any = Yt): any => {
    if (!(t as any).doc) return e;
    let s: any = e;
    for (const n of (t as any).doc) ((n as any).stmt as any) === ("dir" as any) && (s = (n as any).value);
    return s;
  }, "getDir"),
  $e: any = (p as any)(function (this: any, t: any, e: any): any {
    return (((e as any).db as any).getClasses as any)();
  }, "getClasses"),
  Fe: any = (p as any)(async function (this: any, t: any, e: any, s: any, n: any): Promise<any> {
    ((b as any).info as any)("REF0:"), ((b as any).info as any)("Drawing state diagram (v2)", e);
    const {
      securityLevel: r,
      state: c,
      layout: d
    }: any = ($ as any)();
    (((n as any).db as any).extract as any)((((n as any).db as any).getRootDocV2 as any)());
    const S: any = (((n as any).db as any).getData as any)(),
      f: any = (ee as any)(e, r);
    (S as any).type = (n as any).type, (S as any).layoutAlgorithm = d, (S as any).nodeSpacing = c?.nodeSpacing || 50, (S as any).rankSpacing = c?.rankSpacing || 50, ((($ as any)() as any).look as any) === ("neo" as any) ? (S as any).markers = ["barbNeo"] : (S as any).markers = ["barb"], (S as any).diagramId = e, await (ie as any)(S, f);
    const E: number = 8;
    try {
      ((((typeof ((n as any).db as any).getLinks as any) == ("function" as any) ? (((n as any).db as any).getLinks as any)() : new (Map as any)()) as any).forEach as any)((L: any, D: any): any => {
        const h: any = (typeof D as any) == ("string" as any) ? D : (typeof D?.id as any) == ("string" as any) ? (D as any).id : "",
          I: any = (((S as any).nodes as any).find as any)((N: any): any => ((N as any).id as any) === (h as any));
        if (!h) {
          ((b as any).warn as any)("\u26A0\uFE0F Invalid or missing stateId from key:", ((JSON as any).stringify as any)(D));
          return;
        }
        const w: any = ((f as any).node as any)()?.querySelectorAll("g.node, g.rough-node");
        let C: any;
        if (w?.forEach((N: any): any => {
          const z: any = (N as any).textContent?.trim();
          (((N as any).id as any) === (I?.domId as any) || (z as any) === (h as any)) && (C = N);
        }), !C) {
          ((b as any).warn as any)("\u26A0\uFE0F Could not find node matching text:", h);
          return;
        }
        const F: any = (C as any).parentNode;
        if (!F) {
          ((b as any).warn as any)("\u26A0\uFE0F Node has no parent, cannot wrap:", h);
          return;
        }
        const A: any = ((document as any).createElementNS as any)("http://www.w3.org/2000/svg", "a"),
          P: any = (((L as any).url as any).replace as any)(/^"+|"+$/g, "");
        if (((A as any).setAttributeNS as any)("http://www.w3.org/1999/xlink", "xlink:href", P), ((A as any).setAttribute as any)("target", "_blank"), (L as any).tooltip) {
          const N: any = (((L as any).tooltip as any).replace as any)(/^"+|"+$/g, "");
          ((A as any).setAttribute as any)("title", N), ((C as any).setAttribute as any)("title", N);
        }
        ((F as any).replaceChild as any)(A, C), ((A as any).appendChild as any)(C), ((b as any).info as any)("\uD83D\uDD17 Wrapped node in <a> tag for:", h, (L as any).url);
      });
    } catch (m: any) {
      ((b as any).error as any)("\u274C Error injecting clickable links:", m);
    }
    ((re as any).insertTitle as any)(f, "statediagramTitleText", c?.titleTopMargin ?? 25, (((n as any).db as any).getDiagramTitle as any)()), (se as any)(f, E, it, c?.useMaxWidth ?? !0);
  }, "draw"),
  je: any = {
    getClasses: $e,
    draw: Fe,
    getDir: Xt
  },
  St: any = new (Map as any)(),
  M: any = 0;
function yt(this: any, t: any = "", e: any = 0, s: any = "", n: any = xt): any {
  const r: any = (s as any) !== (null as any) && ((s as any).length as any) > (0 as any) ? `${n}${s}` : "";
  return `${Oe}-${t}${r}-${e}`;
}
(p as any)(yt, "stateDomId");
var Pe: any = (p as any)((t: any, e: any, s: any, n: any, r: any, c: any, d: any, S: any): any => {
    ((b as any).trace as any)("items", e), ((e as any).forEach as any)((f: any): any => {
      switch ((f as any).stmt) {
        case Q:
          (et as any)(t, f, s, n, r, c, d, S);
          break;
        case st:
          (et as any)(t, f, s, n, r, c, d, S);
          break;
        case At:
          {
            (et as any)(t, (f as any).state1, s, n, r, c, d, S), (et as any)(t, (f as any).state2, s, n, r, c, d, S);
            const T: any = (d as any) === ("neo" as any),
              E: any = {
                id: ("edge" as any) + (M as any),
                start: ((f as any).state1 as any).id,
                end: ((f as any).state2 as any).id,
                arrowhead: "normal",
                arrowTypeEnd: T ? "arrow_barb_neo" : "arrow_barb",
                style: Vt,
                labelStyle: "",
                label: ((j as any).sanitizeText as any)((f as any).description ?? "", ($ as any)()),
                arrowheadStyle: Mt,
                labelpos: Ut,
                labelType: Wt,
                thickness: jt,
                classes: Ht,
                look: d
              };
            ((r as any).push as any)(E), M++;
          }
          break;
      }
    });
  }, "setupDoc"),
  Ft: any = (p as any)((t: any, e: any = Yt): any => {
    let s: any = e;
    if ((t as any).doc) for (const n of (t as any).doc) ((n as any).stmt as any) === ("dir" as any) && (s = (n as any).value);
    return s;
  }, "getDir");
function tt(this: any, t: any, e: any, s: any): any {
  if (!(e as any).id || ((e as any).id as any) === ("</join></fork>" as any) || ((e as any).id as any) === ("</choice>" as any)) return;
  (e as any).cssClasses && (((Array as any).isArray as any)((e as any).cssCompiledStyles) || ((e as any).cssCompiledStyles = []), (((((e as any).cssClasses as any).split as any)(" ") as any).forEach as any)((r: any): any => {
    const c: any = ((s as any).get as any)(r);
    c && ((e as any).cssCompiledStyles = [...((e as any).cssCompiledStyles ?? []), ...(c as any).styles]);
  }));
  const n: any = ((t as any).find as any)((r: any): any => ((r as any).id as any) === ((e as any).id as any));
  n ? ((Object as any).assign as any)(n, e) : ((t as any).push as any)(e);
}
(p as any)(tt, "insertOrUpdateNode");
function Jt(this: any, t: any): any {
  return t?.classes?.join(" ") ?? "";
}
(p as any)(Jt, "getClassesFromDbInfo");
function qt(this: any, t: any): any {
  return t?.styles ?? [];
}
(p as any)(qt, "getStylesFromDbInfo");
var et: any = (p as any)((t: any, e: any, s: any, n: any, r: any, c: any, d: any, S: any): any => {
    const f: any = (e as any).id,
      T: any = ((s as any).get as any)(f),
      E: any = (Jt as any)(T),
      m: any = (qt as any)(T),
      L: any = ($ as any)();
    if (((b as any).info as any)("dataFetcher parsedItem", e, T, m), (f as any) !== ("root" as any)) {
      let D: any = Dt;
      ((e as any).start as any) === (!0 as any) ? D = Ee : ((e as any).start as any) === (!1 as any) && (D = _e), ((e as any).type as any) !== (st as any) && (D = (e as any).type), ((St as any).get as any)(f) || ((St as any).set as any)(f, {
        id: f,
        shape: D,
        description: ((j as any).sanitizeText as any)(f, L),
        cssClasses: `${E} ${De}`,
        cssStyles: m
      });
      const h: any = ((St as any).get as any)(f);
      (e as any).description && (((Array as any).isArray as any)((h as any).description) ? ((h as any).shape = vt, (((h as any).description as any).push as any)((e as any).description)) : (h as any).description?.length && (((h as any).description as any).length as any) > (0 as any) ? ((h as any).shape = vt, ((h as any).description as any) === (f as any) ? (h as any).description = [(e as any).description] : (h as any).description = [(h as any).description, (e as any).description]) : ((h as any).shape = Dt, (h as any).description = (e as any).description), (h as any).description = ((j as any).sanitizeTextOrArray as any)((h as any).description, L)), ((h as any).description?.length as any) === (1 as any) && ((h as any).shape as any) === (vt as any) && (((h as any).type as any) === ("group" as any) ? (h as any).shape = Rt : (h as any).shape = Dt), !(h as any).type && (e as any).doc && (((b as any).info as any)("Setting cluster for XCX", f, (Ft as any)(e)), (h as any).type = "group", (h as any).isGroup = !0, (h as any).dir = (Ft as any)(e), (h as any).explicitDir = (((e as any).doc as any).some as any)((w: any): any => ((w as any).stmt as any) === ("dir" as any)), (h as any).shape = ((e as any).type as any) === (Gt as any) ? Ot : Rt, (h as any).cssClasses = `${(h as any).cssClasses} ${Ie} ${c ? Ne : ""}`);
      const I: any = {
        labelStyle: "",
        shape: (h as any).shape,
        label: (h as any).description,
        cssClasses: (h as any).cssClasses,
        cssCompiledStyles: [],
        cssStyles: (h as any).cssStyles,
        id: f,
        dir: (h as any).dir,
        domId: (yt as any)(f, M),
        type: (h as any).type,
        isGroup: ((h as any).type as any) === ("group" as any),
        padding: 8,
        rx: 10,
        ry: 10,
        look: d,
        labelType: "markdown"
      };
      if (((I as any).shape as any) === (Ot as any) && ((I as any).label = ""), t && ((t as any).id as any) !== ("root" as any) && (((b as any).trace as any)("Setting node ", f, " to be child of its parent ", (t as any).id), (I as any).parentId = (t as any).id), (I as any).centerLabel = !0, (e as any).note) {
        const w: any = {
            labelStyle: "",
            shape: me,
            label: ((e as any).note as any).text,
            labelType: "markdown",
            cssClasses: xe,
            cssStyles: [],
            cssCompiledStyles: [],
            id: (((f as any) + (Re as any) as any) + ("-" as any) as any) + (M as any),
            domId: (yt as any)(f, M, Kt),
            type: (h as any).type,
            isGroup: ((h as any).type as any) === ("group" as any),
            padding: (L as any).flowchart?.padding,
            look: d,
            position: ((e as any).note as any).position
          },
          C: any = (f as any) + ($t as any),
          F: any = {
            labelStyle: "",
            shape: be,
            label: ((e as any).note as any).text,
            cssClasses: (h as any).cssClasses,
            cssStyles: [],
            id: (f as any) + ($t as any),
            domId: (yt as any)(f, M, zt),
            type: "group",
            isGroup: !0,
            padding: 16,
            look: d,
            position: ((e as any).note as any).position
          };
        M++, (F as any).id = C, (w as any).parentId = C, (tt as any)(n, F, S), (tt as any)(n, w, S), (tt as any)(n, I, S);
        let A: any = f,
          P: any = (w as any).id;
        (((e as any).note as any).position as any) === ("left of" as any) && (A = (w as any).id, P = f), ((r as any).push as any)({
          id: ((A as any) + ("-" as any) as any) + (P as any),
          start: A,
          end: P,
          arrowhead: "none",
          arrowTypeEnd: "",
          style: Vt,
          labelStyle: "",
          classes: Ae,
          arrowheadStyle: Mt,
          labelpos: Ut,
          labelType: Wt,
          thickness: jt,
          look: d
        });
      } else (tt as any)(n, I, S);
    }
    (e as any).doc && (((b as any).trace as any)("Adding nodes children "), (Pe as any)(e, (e as any).doc, s, n, r, !c, d, S));
  }, "dataFetcher"),
  Be: any = (p as any)((): any => {
    ((St as any).clear as any)(), M = 0;
  }, "reset"),
  v: any = {
    START_NODE: "[*]",
    START_TYPE: "start",
    END_NODE: "[*]",
    END_TYPE: "end",
    COLOR_KEYWORD: "color",
    FILL_KEYWORD: "fill",
    BG_FILL: "bgFill",
    STYLECLASS_SEP: ","
  },
  Pt: any = (p as any)((): any => new (Map as any)(), "newClassesList"),
  Bt: any = (p as any)((): any => ({
    relations: [],
    states: new (Map as any)(),
    documents: {}
  }), "newDoc"),
  pt: any = (p as any)((t: any): any => ((JSON as any).parse as any)(((JSON as any).stringify as any)(t)), "clone"),
  H: any,
  He: any = (H = class {
    declare getDiagramTitle: any;
    declare setDiagramTitle: any;
    declare setAccDescription: any;
    declare getAccDescription: any;
    declare setAccTitle: any;
    declare getAccTitle: any;
    declare funs: any;
    declare links: any;
    declare dividerCnt: any;
    declare startEndCount: any;
    declare currentDocument: any;
    declare documents: any;
    declare classes: any;
    declare rootDoc: any;
    declare edges: any;
    declare nodes: any;
    declare version: any;
    [key: string]: any;
    constructor(e: any) {
      (this as any).version = e, (this as any).nodes = [], (this as any).edges = [], (this as any).rootDoc = [], (this as any).classes = (Pt as any)(), (this as any).documents = {
        root: (Bt as any)()
      }, (this as any).currentDocument = ((this as any).documents as any).root, (this as any).startEndCount = 0, (this as any).dividerCnt = 0, (this as any).links = new (Map as any)(), (this as any).funs = [], (this as any).getAccTitle = ae, (this as any).setAccTitle = ne, (this as any).getAccDescription = oe, (this as any).setAccDescription = le, (this as any).setDiagramTitle = ce, (this as any).getDiagramTitle = he, ((this as any).clear as any)(), (this as any).setRootDoc = (((this as any).setRootDoc as any).bind as any)(this), (this as any).getDividerId = (((this as any).getDividerId as any).bind as any)(this), (this as any).setDirection = (((this as any).setDirection as any).bind as any)(this), (this as any).trimColon = (((this as any).trimColon as any).bind as any)(this), (this as any).bindFunctions = (((this as any).bindFunctions as any).bind as any)(this);
    }
    extract(e: any): any {
      ((this as any).clear as any)(!0);
      for (const r of ((Array as any).isArray as any)(e) ? e : (e as any).doc) switch ((r as any).stmt) {
        case Q:
          ((this as any).addState as any)((((r as any).id as any).trim as any)(), (r as any).type, (r as any).doc, (r as any).description, (r as any).note);
          break;
        case At:
          ((this as any).addRelation as any)((r as any).state1, (r as any).state2, (r as any).description);
          break;
        case ye:
          ((this as any).addStyleClass as any)((((r as any).id as any).trim as any)(), (r as any).classes);
          break;
        case ge:
          ((this as any).handleStyleDef as any)(r);
          break;
        case Te:
          ((this as any).setCssClass as any)((((r as any).id as any).trim as any)(), (r as any).styleClass);
          break;
        case "click":
          ((this as any).addLink as any)((r as any).id, (r as any).url, (r as any).tooltip);
          break;
      }
      const s: any = ((this as any).getStates as any)(),
        n: any = ($ as any)();
      (Be as any)(), (et as any)(void 0, ((this as any).getRootDocV2 as any)(), s, (this as any).nodes, (this as any).edges, !0, (n as any).look, (this as any).classes);
      for (const r of (this as any).nodes) if (((Array as any).isArray as any)((r as any).label)) {
        if ((r as any).description = (((r as any).label as any).slice as any)(1), (r as any).isGroup && (((r as any).description as any).length as any) > (0 as any)) throw new (Error as any)(`Group nodes can only have label. Remove the additional description for node [${(r as any).id}]`);
        (r as any).label = ((r as any).label as any)[0];
      }
    }
    handleStyleDef(e: any): any {
      const s: any = (((((e as any).id as any).trim as any)() as any).split as any)(","),
        n: any = (((e as any).styleClass as any).split as any)(",");
      for (const r of s) {
        let c: any = ((this as any).getState as any)(r);
        if (!c) {
          const d: any = ((r as any).trim as any)();
          ((this as any).addState as any)(d), c = ((this as any).getState as any)(d);
        }
        c && ((c as any).styles = ((n as any).map as any)((d: any): any => ((d as any).replace as any)(/;/g, "")?.trim()));
      }
    }
    setRootDoc(e: any): any {
      ((b as any).info as any)("Setting root doc", e), (this as any).rootDoc = e, ((this as any).version as any) === (1 as any) ? ((this as any).extract as any)(e) : ((this as any).extract as any)(((this as any).getRootDocV2 as any)());
    }
    docTranslator(e: any, s: any, n: any): any {
      if (((s as any).stmt as any) === (At as any)) {
        ((this as any).docTranslator as any)(e, (s as any).state1, !0), ((this as any).docTranslator as any)(e, (s as any).state2, !1);
        return;
      }
      if (((s as any).stmt as any) === (Q as any) && (((s as any).id as any) === ((v as any).START_NODE as any) ? ((s as any).id = ((e as any).id as any) + ((n ? "_start" : "_end") as any), (s as any).start = n) : (s as any).id = (((s as any).id as any).trim as any)()), ((s as any).stmt as any) !== (q as any) && ((s as any).stmt as any) !== (Q as any) || !(s as any).doc) return;
      const r: any = [];
      let c: any = [];
      for (const d of (s as any).doc) if (((d as any).type as any) === (Gt as any)) {
        const S: any = (pt as any)(d);
        (S as any).doc = (pt as any)(c), ((r as any).push as any)(S), c = [];
      } else ((c as any).push as any)(d);
      if (((r as any).length as any) > (0 as any) && ((c as any).length as any) > (0 as any)) {
        const d: any = {
          stmt: Q,
          id: (ue as any)(),
          type: "divider",
          doc: (pt as any)(c)
        };
        ((r as any).push as any)((pt as any)(d)), (s as any).doc = r;
      }
      (((s as any).doc as any).forEach as any)((d: any): any => ((this as any).docTranslator as any)(s, d, !0));
    }
    getRootDocV2(): any {
      return ((this as any).docTranslator as any)({
        id: q,
        stmt: q
      }, {
        id: q,
        stmt: q,
        doc: (this as any).rootDoc
      }, !0), {
        id: q,
        doc: (this as any).rootDoc
      };
    }
    addState(e: any, s: any = st, n: any = void 0, r: any = void 0, c: any = void 0, d: any = void 0, S: any = void 0, f: any = void 0): any {
      const T: any = e?.trim();
      if (!((((this as any).currentDocument as any).states as any).has as any)(T)) ((b as any).info as any)("Adding state ", T, r), ((((this as any).currentDocument as any).states as any).set as any)(T, {
        stmt: Q,
        id: T,
        descriptions: [],
        type: s,
        doc: n,
        note: c,
        classes: [],
        styles: [],
        textStyles: []
      });else {
        const E: any = ((((this as any).currentDocument as any).states as any).get as any)(T);
        if (!E) throw new (Error as any)(`State not found: ${T}`);
        (E as any).doc || ((E as any).doc = n), (E as any).type || ((E as any).type = s);
      }
      if (r && (((b as any).info as any)("Setting state description", T, r), (((((Array as any).isArray as any)(r) ? r : [r]) as any).forEach as any)((m: any): any => ((this as any).addDescription as any)(T, ((m as any).trim as any)()))), c) {
        const E: any = ((((this as any).currentDocument as any).states as any).get as any)(T);
        if (!E) throw new (Error as any)(`State not found: ${T}`);
        (E as any).note = c, ((E as any).note as any).text = ((j as any).sanitizeText as any)(((E as any).note as any).text, ($ as any)());
      }
      d && (((b as any).info as any)("Setting state classes", T, d), (((((Array as any).isArray as any)(d) ? d : [d]) as any).forEach as any)((m: any): any => ((this as any).setCssClass as any)(T, ((m as any).trim as any)()))), S && (((b as any).info as any)("Setting state styles", T, S), (((((Array as any).isArray as any)(S) ? S : [S]) as any).forEach as any)((m: any): any => ((this as any).setStyle as any)(T, ((m as any).trim as any)()))), f && (((b as any).info as any)("Setting state styles", T, S), (((((Array as any).isArray as any)(f) ? f : [f]) as any).forEach as any)((m: any): any => ((this as any).setTextStyle as any)(T, ((m as any).trim as any)())));
    }
    clear(e: any): any {
      (this as any).nodes = [], (this as any).edges = [], (this as any).funs = [(((this as any).setupToolTips as any).bind as any)(this)], (this as any).documents = {
        root: (Bt as any)()
      }, (this as any).currentDocument = ((this as any).documents as any).root, (this as any).startEndCount = 0, (this as any).classes = (Pt as any)(), e || ((this as any).links = new (Map as any)(), (de as any)());
    }
    getState(e: any): any {
      return ((((this as any).currentDocument as any).states as any).get as any)(e);
    }
    getStates(): any {
      return ((this as any).currentDocument as any).states;
    }
    logDocuments(): any {
      ((b as any).info as any)("Documents = ", (this as any).documents);
    }
    getRelations(): any {
      return ((this as any).currentDocument as any).relations;
    }
    addLink(e: any, s: any, n: any): any {
      (((this as any).links as any).set as any)(e, {
        url: s,
        tooltip: n
      }), ((b as any).warn as any)("Adding link", e, s, n);
    }
    getLinks(): any {
      return (this as any).links;
    }
    startIdIfNeeded(e: any = ""): any {
      return (e as any) === ((v as any).START_NODE as any) ? ((this as any).startEndCount++, `${(v as any).START_TYPE}${(this as any).startEndCount}`) : e;
    }
    startTypeIfNeeded(e: any = "", s: any = st): any {
      return (e as any) === ((v as any).START_NODE as any) ? (v as any).START_TYPE : s;
    }
    endIdIfNeeded(e: any = ""): any {
      return (e as any) === ((v as any).END_NODE as any) ? ((this as any).startEndCount++, `${(v as any).END_TYPE}${(this as any).startEndCount}`) : e;
    }
    endTypeIfNeeded(e: any = "", s: any = st): any {
      return (e as any) === ((v as any).END_NODE as any) ? (v as any).END_TYPE : s;
    }
    addRelationObjs(e: any, s: any, n: any = ""): any {
      const r: any = ((this as any).startIdIfNeeded as any)((((e as any).id as any).trim as any)()),
        c: any = ((this as any).startTypeIfNeeded as any)((((e as any).id as any).trim as any)(), (e as any).type),
        d: any = ((this as any).startIdIfNeeded as any)((((s as any).id as any).trim as any)()),
        S: any = ((this as any).startTypeIfNeeded as any)((((s as any).id as any).trim as any)(), (s as any).type);
      ((this as any).addState as any)(r, c, (e as any).doc, (e as any).description, (e as any).note, (e as any).classes, (e as any).styles, (e as any).textStyles), ((this as any).addState as any)(d, S, (s as any).doc, (s as any).description, (s as any).note, (s as any).classes, (s as any).styles, (s as any).textStyles), ((((this as any).currentDocument as any).relations as any).push as any)({
        id1: r,
        id2: d,
        relationTitle: ((j as any).sanitizeText as any)(n, ($ as any)())
      });
    }
    addRelation(e: any, s: any, n: any): any {
      if ((typeof e as any) == ("object" as any) && (typeof s as any) == ("object" as any)) ((this as any).addRelationObjs as any)(e, s, n);else if ((typeof e as any) == ("string" as any) && (typeof s as any) == ("string" as any)) {
        const r: any = ((this as any).startIdIfNeeded as any)(((e as any).trim as any)()),
          c: any = ((this as any).startTypeIfNeeded as any)(e),
          d: any = ((this as any).endIdIfNeeded as any)(((s as any).trim as any)()),
          S: any = ((this as any).endTypeIfNeeded as any)(s);
        ((this as any).addState as any)(r, c), ((this as any).addState as any)(d, S), ((((this as any).currentDocument as any).relations as any).push as any)({
          id1: r,
          id2: d,
          relationTitle: n ? ((j as any).sanitizeText as any)(n, ($ as any)()) : void 0
        });
      }
    }
    addDescription(e: any, s: any): any {
      const n: any = ((((this as any).currentDocument as any).states as any).get as any)(e),
        r: any = ((s as any).startsWith as any)(":") ? ((((s as any).replace as any)(":", "") as any).trim as any)() : s;
      n?.descriptions?.push(((j as any).sanitizeText as any)(r, ($ as any)()));
    }
    cleanupLabel(e: any): any {
      return ((e as any).startsWith as any)(":") ? ((((e as any).slice as any)(2) as any).trim as any)() : ((e as any).trim as any)();
    }
    getDividerId(): any {
      return (this as any).dividerCnt++, `divider-id-${(this as any).dividerCnt}`;
    }
    addStyleClass(e: any, s: any = ""): any {
      (((this as any).classes as any).has as any)(e) || (((this as any).classes as any).set as any)(e, {
        id: e,
        styles: [],
        textStyles: []
      });
      const n: any = (((this as any).classes as any).get as any)(e);
      s && n && ((((s as any).split as any)((v as any).STYLECLASS_SEP) as any).forEach as any)((r: any): any => {
        const c: any = ((((r as any).replace as any)(/([^;]*);/, "$1") as any).trim as any)();
        if ((((RegExp as any)((v as any).COLOR_KEYWORD) as any).exec as any)(r)) {
          const S: any = ((((c as any).replace as any)((v as any).FILL_KEYWORD, (v as any).BG_FILL) as any).replace as any)((v as any).COLOR_KEYWORD, (v as any).FILL_KEYWORD);
          (((n as any).textStyles as any).push as any)(S);
        }
        (((n as any).styles as any).push as any)(c);
      });
    }
    getClasses(): any {
      return (this as any).classes;
    }
    setupToolTips(e: any): any {
      const s: any = (pe as any)();
      (((((((((kt as any)(e) as any).select as any)("svg") as any).selectAll as any)("g.node, g.rough-node") as any).on as any)("mouseover", (c: any): any => {
        const d: any = (kt as any)((c as any).currentTarget),
          S: any = ((d as any).attr as any)("title");
        if ((S as any) === (null as any)) return;
        const f: any = (c as any).currentTarget?.getBoundingClientRect();
        ((((((s as any).transition as any)() as any).duration as any)(200) as any).style as any)("opacity", ".9"), ((((s as any).style as any)("left", ((((window as any).scrollX as any) + ((f as any).left as any) as any) + ((((f as any).right as any) - ((f as any).left as any) as any) / (2 as any) as any) as any) + ("px" as any)) as any).style as any)("top", (((window as any).scrollY as any) + ((f as any).bottom as any) as any) + ("px" as any)), ((s as any).html as any)(((fe as any).sanitize as any)(S)), ((d as any).classed as any)("hover", !0);
      }) as any).on as any)("mouseout", (c: any): any => {
        ((((((s as any).transition as any)() as any).duration as any)(500) as any).style as any)("opacity", 0), (((kt as any)((c as any).currentTarget) as any).classed as any)("hover", !1);
      });
    }
    setCssClass(e: any, s: any): any {
      ((((e as any).split as any)(",") as any).forEach as any)((n: any): any => {
        let r: any = ((this as any).getState as any)(n);
        if (!r) {
          const c: any = ((n as any).trim as any)();
          ((this as any).addState as any)(c), r = ((this as any).getState as any)(c);
        }
        r?.classes?.push(s);
      });
    }
    setStyle(e: any, s: any): any {
      ((this as any).getState as any)(e)?.styles?.push(s);
    }
    setTextStyle(e: any, s: any): any {
      ((this as any).getState as any)(e)?.textStyles?.push(s);
    }
    bindFunctions(e: any): any {
      (((this as any).funs as any).forEach as any)((s: any): any => {
        (s as any)(e);
      });
    }
    getDirectionStatement(): any {
      return (((this as any).rootDoc as any).find as any)((e: any): any => ((e as any).stmt as any) === (Nt as any));
    }
    getDirection(): any {
      return ((this as any).getDirectionStatement as any)()?.value ?? Se;
    }
    setDirection(e: any): any {
      const s: any = ((this as any).getDirectionStatement as any)();
      s ? (s as any).value = e : (((this as any).rootDoc as any).unshift as any)({
        stmt: Nt,
        value: e
      });
    }
    trimColon(e: any): any {
      return ((e as any).startsWith as any)(":") ? ((((e as any).slice as any)(1) as any).trim as any)() : ((e as any).trim as any)();
    }
    getData(): any {
      const e: any = ($ as any)();
      return {
        nodes: (this as any).nodes,
        edges: (this as any).edges,
        other: {},
        config: e,
        direction: (Xt as any)(((this as any).getRootDocV2 as any)())
      };
    }
    getConfig(): any {
      return (($ as any)() as any).state;
    }
  }, (p as any)(H, "StateDB"), (H as any).relationType = {
    AGGREGATION: 0,
    EXTENSION: 1,
    COMPOSITION: 2,
    DEPENDENCY: 3
  }, H),
  Ye: any = (p as any)((t: any): any => `
defs [id$="-barbEnd"] {
    fill: ${(t as any).transitionColor};
    stroke: ${(t as any).transitionColor};
  }
g.stateGroup text {
  fill: ${(t as any).nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${(t as any).textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${(t as any).stateLabelColor};
}

g.stateGroup rect {
  fill: ${(t as any).mainBkg};
  stroke: ${(t as any).nodeBorder};
}

g.stateGroup line {
  stroke: ${(t as any).lineColor};
  stroke-width: ${(t as any).strokeWidth || 1};
}

.transition {
  stroke: ${(t as any).transitionColor};
  stroke-width: ${(t as any).strokeWidth || 1};
  fill: none;
}

.stateGroup .composit {
  fill: ${(t as any).background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${(t as any).noteBorderColor};
  fill: ${(t as any).noteBkgColor};

  text {
    fill: ${(t as any).noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${(t as any).mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${(t as any).labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${(t as any).edgeLabelBackground};
  p {
    background-color: ${(t as any).edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${(t as any).edgeLabelBackground};
    fill: ${(t as any).edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${(t as any).transitionLabelColor || (t as any).tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${(t as any).transitionLabelColor || (t as any).tertiaryTextColor};
}

.stateLabel text {
  fill: ${(t as any).stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${(t as any).specialStateColor};
  stroke: ${(t as any).specialStateColor};
}

.node .fork-join {
  fill: ${(t as any).specialStateColor};
  stroke: ${(t as any).specialStateColor};
}

.node circle.state-end {
  fill: ${(t as any).innerEndBackground};
  stroke: ${(t as any).background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${(t as any).compositeBackground || (t as any).background};
  // stroke: ${(t as any).background};
  stroke-width: 1.5
}

.node rect {
  fill: ${(t as any).stateBkg || (t as any).mainBkg};
  stroke: ${(t as any).stateBorder || (t as any).nodeBorder};
  stroke-width: ${(t as any).strokeWidth || 1}px;
}
.node polygon {
  fill: ${(t as any).mainBkg};
  stroke: ${(t as any).stateBorder || (t as any).nodeBorder};;
  stroke-width: ${(t as any).strokeWidth || 1}px;
}
[id$="-barbEnd"] {
  fill: ${(t as any).lineColor};
}

.statediagram-cluster rect {
  fill: ${(t as any).compositeTitleBackground};
  stroke: ${(t as any).stateBorder || (t as any).nodeBorder};
  stroke-width: ${(t as any).strokeWidth || 1}px;
}

.cluster-label, .nodeLabel {
  color: ${(t as any).stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${(t as any).stateBorder || (t as any).nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${(t as any).compositeBackground || (t as any).background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${(t as any).altBackground ? (t as any).altBackground : "#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${(t as any).altBackground ? (t as any).altBackground : "#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${(t as any).noteBkgColor};
  stroke: ${(t as any).noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${(t as any).noteBkgColor};
  stroke: ${(t as any).noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${(t as any).noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${(t as any).noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${(t as any).noteTextColor};
}

[id$="-dependencyStart"], [id$="-dependencyEnd"] {
  fill: ${(t as any).lineColor};
  stroke: ${(t as any).lineColor};
  stroke-width: ${(t as any).strokeWidth || 1};
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${(t as any).textColor};
}

[data-look="neo"].statediagram-cluster rect {
  fill: ${(t as any).mainBkg};
  stroke: ${(t as any).useGradient ? (("url(" as any) + ((t as any).svgId as any) as any) + ("-gradient)" as any) : (t as any).stateBorder || (t as any).nodeBorder};
  stroke-width: ${(t as any).strokeWidth ?? 1};
}
[data-look="neo"].statediagram-cluster rect.outer {
  rx: ${(t as any).radius}px;
  ry: ${(t as any).radius}px;
  filter: ${(t as any).dropShadow ? (((t as any).dropShadow as any).replace as any)("url(#drop-shadow)", `url(${(t as any).svgId}-drop-shadow)`) : "none"}
}
`, "getStyles"),
  ze: any = Ye;
export { He as S, We as a, je as b, ze as s };
//# debugId=155d1d82-8668-48c6-a768-5fbcc958cd6d
