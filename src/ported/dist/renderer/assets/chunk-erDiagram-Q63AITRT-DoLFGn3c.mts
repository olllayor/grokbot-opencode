declare var CSS: any;
declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "61b9a9fd-e201-46da-a251-59d61f1685ea", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-61b9a9fd-e201-46da-a251-59d61f1685ea");
  } catch (e: any) {}
} as any)();
import { g as Bt } from "./chunk-chunk-XXDRQBXY-DVdINg3t.js";
import { s as Ft } from "./chunk-chunk-VR4S4FIN-HF2Hbh9A.js";
import { _ as d, b as Yt, a as Pt, s as zt, g as Gt, o as Kt, p as Ut, c as rt, l as V, q as Zt, r as jt, t as Wt, u as qt, v as Qt, x as Xt, d as Ht, y as Jt } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { c as $t } from "./chunk-channel-Bm516PE5.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var gt: any = (function (this: any): any {
  var s: any = (d as any)(function (this: any, I: any, n: any, a: any, o: any): any {
      for (a = a || {}, o = (I as any).length; o--; (a as any)[(I as any)[o]] = n);
      return a;
    }, "o"),
    i: any = [6, 8, 10, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40, 43, 44, 48, 50, 51, 52],
    c: any = [1, 10],
    h: any = [1, 11],
    l: any = [1, 12],
    p: any = [1, 13],
    y: any = [1, 23],
    u: any = [1, 24],
    m: any = [1, 25],
    W: any = [1, 26],
    q: any = [1, 27],
    S: any = [1, 19],
    Q: any = [1, 28],
    B: any = [1, 29],
    D: any = [1, 20],
    R: any = [1, 18],
    T: any = [1, 21],
    C: any = [1, 22],
    at: any = [1, 36],
    ct: any = [1, 37],
    ot: any = [1, 38],
    lt: any = [1, 39],
    ht: any = [1, 40],
    F: any = [6, 8, 10, 13, 15, 17, 20, 21, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40, 43, 44, 48, 50, 51, 52, 66, 67, 68, 69, 70],
    O: any = [1, 45],
    N: any = [1, 46],
    Y: any = [1, 55],
    P: any = [40, 48, 50, 51, 52, 71, 72],
    z: any = [1, 66],
    G: any = [1, 64],
    A: any = [1, 61],
    K: any = [1, 65],
    U: any = [1, 67],
    X: any = [6, 8, 10, 13, 17, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40, 41, 42, 43, 44, 48, 49, 50, 51, 52, 66, 67, 68, 69, 70],
    bt: any = [66, 67, 68, 69, 70],
    kt: any = [1, 85],
    mt: any = [1, 84],
    Et: any = [1, 82],
    St: any = [1, 83],
    Tt: any = [6, 10, 42, 47],
    L: any = [6, 10, 13, 41, 42, 47, 48, 49],
    H: any = [1, 93],
    J: any = [1, 92],
    $: any = [1, 91],
    Z: any = [19, 58],
    Ot: any = [1, 102],
    Nt: any = [1, 101],
    ut: any = [19, 58, 61, 63],
    dt: any = {
      trace: (d as any)(function (this: any): any {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        ER_DIAGRAM: 4,
        document: 5,
        EOF: 6,
        line: 7,
        SPACE: 8,
        statement: 9,
        NEWLINE: 10,
        entityName: 11,
        relSpec: 12,
        COLON: 13,
        role: 14,
        STYLE_SEPARATOR: 15,
        idList: 16,
        BLOCK_START: 17,
        attributes: 18,
        BLOCK_STOP: 19,
        SQS: 20,
        SQE: 21,
        title: 22,
        title_value: 23,
        acc_title: 24,
        acc_title_value: 25,
        acc_descr: 26,
        acc_descr_value: 27,
        acc_descr_multiline_value: 28,
        direction: 29,
        classDefStatement: 30,
        classStatement: 31,
        styleStatement: 32,
        direction_tb: 33,
        direction_bt: 34,
        direction_rl: 35,
        direction_lr: 36,
        CLASSDEF: 37,
        stylesOpt: 38,
        separator: 39,
        UNICODE_TEXT: 40,
        STYLE_TEXT: 41,
        COMMA: 42,
        CLASS: 43,
        STYLE: 44,
        style: 45,
        styleComponent: 46,
        SEMI: 47,
        NUM: 48,
        BRKT: 49,
        ENTITY_NAME: 50,
        DECIMAL_NUM: 51,
        ENTITY_ONE: 52,
        attribute: 53,
        attributeType: 54,
        attributeName: 55,
        attributeKeyTypeList: 56,
        attributeComment: 57,
        ATTRIBUTE_WORD: 58,
        "?": 59,
        attributeKeyType: 60,
        ",": 61,
        ATTRIBUTE_KEY: 62,
        COMMENT: 63,
        cardinality: 64,
        relType: 65,
        ZERO_OR_ONE: 66,
        ZERO_OR_MORE: 67,
        ONE_OR_MORE: 68,
        ONLY_ONE: 69,
        MD_PARENT: 70,
        NON_IDENTIFYING: 71,
        IDENTIFYING: 72,
        WORD: 73,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        4: "ER_DIAGRAM",
        6: "EOF",
        8: "SPACE",
        10: "NEWLINE",
        13: "COLON",
        15: "STYLE_SEPARATOR",
        17: "BLOCK_START",
        19: "BLOCK_STOP",
        20: "SQS",
        21: "SQE",
        22: "title",
        23: "title_value",
        24: "acc_title",
        25: "acc_title_value",
        26: "acc_descr",
        27: "acc_descr_value",
        28: "acc_descr_multiline_value",
        33: "direction_tb",
        34: "direction_bt",
        35: "direction_rl",
        36: "direction_lr",
        37: "CLASSDEF",
        40: "UNICODE_TEXT",
        41: "STYLE_TEXT",
        42: "COMMA",
        43: "CLASS",
        44: "STYLE",
        47: "SEMI",
        48: "NUM",
        49: "BRKT",
        50: "ENTITY_NAME",
        51: "DECIMAL_NUM",
        52: "ENTITY_ONE",
        58: "ATTRIBUTE_WORD",
        59: "?",
        61: ",",
        62: "ATTRIBUTE_KEY",
        63: "COMMENT",
        66: "ZERO_OR_ONE",
        67: "ZERO_OR_MORE",
        68: "ONE_OR_MORE",
        69: "ONLY_ONE",
        70: "MD_PARENT",
        71: "NON_IDENTIFYING",
        72: "IDENTIFYING",
        73: "WORD"
      },
      productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 5], [9, 9], [9, 7], [9, 7], [9, 4], [9, 6], [9, 3], [9, 5], [9, 1], [9, 3], [9, 7], [9, 9], [9, 6], [9, 8], [9, 4], [9, 6], [9, 2], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [29, 1], [29, 1], [29, 1], [29, 1], [30, 4], [16, 1], [16, 1], [16, 3], [16, 3], [31, 3], [32, 4], [38, 1], [38, 3], [45, 1], [45, 2], [39, 1], [39, 1], [39, 1], [46, 1], [46, 1], [46, 1], [46, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [18, 1], [18, 2], [53, 2], [53, 3], [53, 3], [53, 4], [54, 1], [54, 2], [55, 1], [56, 1], [56, 3], [60, 1], [57, 1], [12, 3], [64, 1], [64, 1], [64, 1], [64, 1], [64, 1], [65, 1], [65, 1], [14, 1], [14, 1], [14, 1]],
      performAction: (d as any)(function (this: any, n: any, a: any, o: any, r: any, f: any, t: any, j: any): any {
        var e: any = ((t as any).length as any) - (1 as any);
        switch (f) {
          case 1:
            break;
          case 2:
            (this as any).$ = [];
            break;
          case 3:
            (((t as any)[(e as any) - (1 as any)] as any).push as any)((t as any)[e]), (this as any).$ = (t as any)[(e as any) - (1 as any)];
            break;
          case 4:
          case 5:
            (this as any).$ = (t as any)[e];
            break;
          case 6:
          case 7:
            (this as any).$ = [];
            break;
          case 8:
            ((r as any).addEntity as any)((t as any)[(e as any) - (4 as any)]), ((r as any).addEntity as any)((t as any)[(e as any) - (2 as any)]), ((r as any).addRelationship as any)((t as any)[(e as any) - (4 as any)], (t as any)[e], (t as any)[(e as any) - (2 as any)], (t as any)[(e as any) - (3 as any)]);
            break;
          case 9:
            ((r as any).addEntity as any)((t as any)[(e as any) - (8 as any)]), ((r as any).addEntity as any)((t as any)[(e as any) - (4 as any)]), ((r as any).addRelationship as any)((t as any)[(e as any) - (8 as any)], (t as any)[e], (t as any)[(e as any) - (4 as any)], (t as any)[(e as any) - (5 as any)]), ((r as any).setClass as any)([(t as any)[(e as any) - (8 as any)]], (t as any)[(e as any) - (6 as any)]), ((r as any).setClass as any)([(t as any)[(e as any) - (4 as any)]], (t as any)[(e as any) - (2 as any)]);
            break;
          case 10:
            ((r as any).addEntity as any)((t as any)[(e as any) - (6 as any)]), ((r as any).addEntity as any)((t as any)[(e as any) - (2 as any)]), ((r as any).addRelationship as any)((t as any)[(e as any) - (6 as any)], (t as any)[e], (t as any)[(e as any) - (2 as any)], (t as any)[(e as any) - (3 as any)]), ((r as any).setClass as any)([(t as any)[(e as any) - (6 as any)]], (t as any)[(e as any) - (4 as any)]);
            break;
          case 11:
            ((r as any).addEntity as any)((t as any)[(e as any) - (6 as any)]), ((r as any).addEntity as any)((t as any)[(e as any) - (4 as any)]), ((r as any).addRelationship as any)((t as any)[(e as any) - (6 as any)], (t as any)[e], (t as any)[(e as any) - (4 as any)], (t as any)[(e as any) - (5 as any)]), ((r as any).setClass as any)([(t as any)[(e as any) - (4 as any)]], (t as any)[(e as any) - (2 as any)]);
            break;
          case 12:
            ((r as any).addEntity as any)((t as any)[(e as any) - (3 as any)]), ((r as any).addAttributes as any)((t as any)[(e as any) - (3 as any)], (t as any)[(e as any) - (1 as any)]);
            break;
          case 13:
            ((r as any).addEntity as any)((t as any)[(e as any) - (5 as any)]), ((r as any).addAttributes as any)((t as any)[(e as any) - (5 as any)], (t as any)[(e as any) - (1 as any)]), ((r as any).setClass as any)([(t as any)[(e as any) - (5 as any)]], (t as any)[(e as any) - (3 as any)]);
            break;
          case 14:
            ((r as any).addEntity as any)((t as any)[(e as any) - (2 as any)]);
            break;
          case 15:
            ((r as any).addEntity as any)((t as any)[(e as any) - (4 as any)]), ((r as any).setClass as any)([(t as any)[(e as any) - (4 as any)]], (t as any)[(e as any) - (2 as any)]);
            break;
          case 16:
            ((r as any).addEntity as any)((t as any)[e]);
            break;
          case 17:
            ((r as any).addEntity as any)((t as any)[(e as any) - (2 as any)]), ((r as any).setClass as any)([(t as any)[(e as any) - (2 as any)]], (t as any)[e]);
            break;
          case 18:
            ((r as any).addEntity as any)((t as any)[(e as any) - (6 as any)], (t as any)[(e as any) - (4 as any)]), ((r as any).addAttributes as any)((t as any)[(e as any) - (6 as any)], (t as any)[(e as any) - (1 as any)]);
            break;
          case 19:
            ((r as any).addEntity as any)((t as any)[(e as any) - (8 as any)], (t as any)[(e as any) - (6 as any)]), ((r as any).addAttributes as any)((t as any)[(e as any) - (8 as any)], (t as any)[(e as any) - (1 as any)]), ((r as any).setClass as any)([(t as any)[(e as any) - (8 as any)]], (t as any)[(e as any) - (3 as any)]);
            break;
          case 20:
            ((r as any).addEntity as any)((t as any)[(e as any) - (5 as any)], (t as any)[(e as any) - (3 as any)]);
            break;
          case 21:
            ((r as any).addEntity as any)((t as any)[(e as any) - (7 as any)], (t as any)[(e as any) - (5 as any)]), ((r as any).setClass as any)([(t as any)[(e as any) - (7 as any)]], (t as any)[(e as any) - (2 as any)]);
            break;
          case 22:
            ((r as any).addEntity as any)((t as any)[(e as any) - (3 as any)], (t as any)[(e as any) - (1 as any)]);
            break;
          case 23:
            ((r as any).addEntity as any)((t as any)[(e as any) - (5 as any)], (t as any)[(e as any) - (3 as any)]), ((r as any).setClass as any)([(t as any)[(e as any) - (5 as any)]], (t as any)[e]);
            break;
          case 24:
          case 25:
            (this as any).$ = (((t as any)[e] as any).trim as any)(), ((r as any).setAccTitle as any)((this as any).$);
            break;
          case 26:
          case 27:
            (this as any).$ = (((t as any)[e] as any).trim as any)(), ((r as any).setAccDescription as any)((this as any).$);
            break;
          case 32:
            ((r as any).setDirection as any)("TB");
            break;
          case 33:
            ((r as any).setDirection as any)("BT");
            break;
          case 34:
            ((r as any).setDirection as any)("RL");
            break;
          case 35:
            ((r as any).setDirection as any)("LR");
            break;
          case 36:
            (this as any).$ = (t as any)[(e as any) - (3 as any)], ((r as any).addClass as any)((t as any)[(e as any) - (2 as any)], (t as any)[(e as any) - (1 as any)]);
            break;
          case 37:
          case 38:
          case 59:
          case 68:
            (this as any).$ = [(t as any)[e]];
            break;
          case 39:
          case 40:
            (this as any).$ = (((t as any)[(e as any) - (2 as any)] as any).concat as any)([(t as any)[e]]);
            break;
          case 41:
            (this as any).$ = (t as any)[(e as any) - (2 as any)], ((r as any).setClass as any)((t as any)[(e as any) - (1 as any)], (t as any)[e]);
            break;
          case 42:
            (this as any).$ = (t as any)[(e as any) - (3 as any)], ((r as any).addCssStyles as any)((t as any)[(e as any) - (2 as any)], (t as any)[(e as any) - (1 as any)]);
            break;
          case 43:
            (this as any).$ = [(t as any)[e]];
            break;
          case 44:
            (((t as any)[(e as any) - (2 as any)] as any).push as any)((t as any)[e]), (this as any).$ = (t as any)[(e as any) - (2 as any)];
            break;
          case 46:
            (this as any).$ = ((t as any)[(e as any) - (1 as any)] as any) + ((t as any)[e] as any);
            break;
          case 54:
          case 80:
          case 81:
            (this as any).$ = (((t as any)[e] as any).replace as any)(/"/g, "");
            break;
          case 55:
          case 56:
          case 57:
          case 58:
          case 82:
            (this as any).$ = (t as any)[e];
            break;
          case 60:
            (((t as any)[e] as any).push as any)((t as any)[(e as any) - (1 as any)]), (this as any).$ = (t as any)[e];
            break;
          case 61:
            (this as any).$ = {
              type: (t as any)[(e as any) - (1 as any)],
              name: (t as any)[e]
            };
            break;
          case 62:
            (this as any).$ = {
              type: (t as any)[(e as any) - (2 as any)],
              name: (t as any)[(e as any) - (1 as any)],
              keys: (t as any)[e]
            };
            break;
          case 63:
            (this as any).$ = {
              type: (t as any)[(e as any) - (2 as any)],
              name: (t as any)[(e as any) - (1 as any)],
              comment: (t as any)[e]
            };
            break;
          case 64:
            (this as any).$ = {
              type: (t as any)[(e as any) - (3 as any)],
              name: (t as any)[(e as any) - (2 as any)],
              keys: (t as any)[(e as any) - (1 as any)],
              comment: (t as any)[e]
            };
            break;
          case 65:
          case 67:
          case 70:
            (this as any).$ = (t as any)[e];
            break;
          case 66:
            (this as any).$ = ((t as any)[(e as any) - (1 as any)] as any) + ((t as any)[e] as any);
            break;
          case 69:
            (((t as any)[(e as any) - (2 as any)] as any).push as any)((t as any)[e]), (this as any).$ = (t as any)[(e as any) - (2 as any)];
            break;
          case 71:
            (this as any).$ = (((t as any)[e] as any).replace as any)(/"/g, "");
            break;
          case 72:
            (this as any).$ = {
              cardA: (t as any)[e],
              relType: (t as any)[(e as any) - (1 as any)],
              cardB: (t as any)[(e as any) - (2 as any)]
            };
            break;
          case 73:
            (this as any).$ = ((r as any).Cardinality as any).ZERO_OR_ONE;
            break;
          case 74:
            (this as any).$ = ((r as any).Cardinality as any).ZERO_OR_MORE;
            break;
          case 75:
            (this as any).$ = ((r as any).Cardinality as any).ONE_OR_MORE;
            break;
          case 76:
            (this as any).$ = ((r as any).Cardinality as any).ONLY_ONE;
            break;
          case 77:
            (this as any).$ = ((r as any).Cardinality as any).MD_PARENT;
            break;
          case 78:
            (this as any).$ = ((r as any).Identification as any).NON_IDENTIFYING;
            break;
          case 79:
            (this as any).$ = ((r as any).Identification as any).IDENTIFYING;
            break;
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: [1, 2]
      }, {
        1: [3]
      }, (s as any)(i, [2, 2], {
        5: 3
      }), {
        6: [1, 4],
        7: 5,
        8: [1, 6],
        9: 7,
        10: [1, 8],
        11: 9,
        22: c,
        24: h,
        26: l,
        28: p,
        29: 14,
        30: 15,
        31: 16,
        32: 17,
        33: y,
        34: u,
        35: m,
        36: W,
        37: q,
        40: S,
        43: Q,
        44: B,
        48: D,
        50: R,
        51: T,
        52: C
      }, (s as any)(i, [2, 7], {
        1: [2, 1]
      }), (s as any)(i, [2, 3]), {
        9: 30,
        11: 9,
        22: c,
        24: h,
        26: l,
        28: p,
        29: 14,
        30: 15,
        31: 16,
        32: 17,
        33: y,
        34: u,
        35: m,
        36: W,
        37: q,
        40: S,
        43: Q,
        44: B,
        48: D,
        50: R,
        51: T,
        52: C
      }, (s as any)(i, [2, 5]), (s as any)(i, [2, 6]), (s as any)(i, [2, 16], {
        12: 31,
        64: 35,
        15: [1, 32],
        17: [1, 33],
        20: [1, 34],
        66: at,
        67: ct,
        68: ot,
        69: lt,
        70: ht
      }), {
        23: [1, 41]
      }, {
        25: [1, 42]
      }, {
        27: [1, 43]
      }, (s as any)(i, [2, 27]), (s as any)(i, [2, 28]), (s as any)(i, [2, 29]), (s as any)(i, [2, 30]), (s as any)(i, [2, 31]), (s as any)(F, [2, 54]), (s as any)(F, [2, 55]), (s as any)(F, [2, 56]), (s as any)(F, [2, 57]), (s as any)(F, [2, 58]), (s as any)(i, [2, 32]), (s as any)(i, [2, 33]), (s as any)(i, [2, 34]), (s as any)(i, [2, 35]), {
        16: 44,
        40: O,
        41: N
      }, {
        16: 47,
        40: O,
        41: N
      }, {
        16: 48,
        40: O,
        41: N
      }, (s as any)(i, [2, 4]), {
        11: 49,
        40: S,
        48: D,
        50: R,
        51: T,
        52: C
      }, {
        16: 50,
        40: O,
        41: N
      }, {
        18: 51,
        19: [1, 52],
        53: 53,
        54: 54,
        58: Y
      }, {
        11: 56,
        40: S,
        48: D,
        50: R,
        51: T,
        52: C
      }, {
        65: 57,
        71: [1, 58],
        72: [1, 59]
      }, (s as any)(P, [2, 73]), (s as any)(P, [2, 74]), (s as any)(P, [2, 75]), (s as any)(P, [2, 76]), (s as any)(P, [2, 77]), (s as any)(i, [2, 24]), (s as any)(i, [2, 25]), (s as any)(i, [2, 26]), {
        13: z,
        38: 60,
        41: G,
        42: A,
        45: 62,
        46: 63,
        48: K,
        49: U
      }, (s as any)(X, [2, 37]), (s as any)(X, [2, 38]), {
        16: 68,
        40: O,
        41: N,
        42: A
      }, {
        13: z,
        38: 69,
        41: G,
        42: A,
        45: 62,
        46: 63,
        48: K,
        49: U
      }, {
        13: [1, 70],
        15: [1, 71]
      }, (s as any)(i, [2, 17], {
        64: 35,
        12: 72,
        17: [1, 73],
        42: A,
        66: at,
        67: ct,
        68: ot,
        69: lt,
        70: ht
      }), {
        19: [1, 74]
      }, (s as any)(i, [2, 14]), {
        18: 75,
        19: [2, 59],
        53: 53,
        54: 54,
        58: Y
      }, {
        55: 76,
        58: [1, 77]
      }, {
        58: [2, 65],
        59: [1, 78]
      }, {
        21: [1, 79]
      }, {
        64: 80,
        66: at,
        67: ct,
        68: ot,
        69: lt,
        70: ht
      }, (s as any)(bt, [2, 78]), (s as any)(bt, [2, 79]), {
        6: kt,
        10: mt,
        39: 81,
        42: Et,
        47: St
      }, {
        40: [1, 86],
        41: [1, 87]
      }, (s as any)(Tt, [2, 43], {
        46: 88,
        13: z,
        41: G,
        48: K,
        49: U
      }), (s as any)(L, [2, 45]), (s as any)(L, [2, 50]), (s as any)(L, [2, 51]), (s as any)(L, [2, 52]), (s as any)(L, [2, 53]), (s as any)(i, [2, 41], {
        42: A
      }), {
        6: kt,
        10: mt,
        39: 89,
        42: Et,
        47: St
      }, {
        14: 90,
        40: H,
        50: J,
        73: $
      }, {
        16: 94,
        40: O,
        41: N
      }, {
        11: 95,
        40: S,
        48: D,
        50: R,
        51: T,
        52: C
      }, {
        18: 96,
        19: [1, 97],
        53: 53,
        54: 54,
        58: Y
      }, (s as any)(i, [2, 12]), {
        19: [2, 60]
      }, (s as any)(Z, [2, 61], {
        56: 98,
        57: 99,
        60: 100,
        62: Ot,
        63: Nt
      }), (s as any)([19, 58, 62, 63], [2, 67]), {
        58: [2, 66]
      }, (s as any)(i, [2, 22], {
        15: [1, 104],
        17: [1, 103]
      }), (s as any)([40, 48, 50, 51, 52], [2, 72]), (s as any)(i, [2, 36]), {
        13: z,
        41: G,
        45: 105,
        46: 63,
        48: K,
        49: U
      }, (s as any)(i, [2, 47]), (s as any)(i, [2, 48]), (s as any)(i, [2, 49]), (s as any)(X, [2, 39]), (s as any)(X, [2, 40]), (s as any)(L, [2, 46]), (s as any)(i, [2, 42]), (s as any)(i, [2, 8]), (s as any)(i, [2, 80]), (s as any)(i, [2, 81]), (s as any)(i, [2, 82]), {
        13: [1, 106],
        42: A
      }, {
        13: [1, 108],
        15: [1, 107]
      }, {
        19: [1, 109]
      }, (s as any)(i, [2, 15]), (s as any)(Z, [2, 62], {
        57: 110,
        61: [1, 111],
        63: Nt
      }), (s as any)(Z, [2, 63]), (s as any)(ut, [2, 68]), (s as any)(Z, [2, 71]), (s as any)(ut, [2, 70]), {
        18: 112,
        19: [1, 113],
        53: 53,
        54: 54,
        58: Y
      }, {
        16: 114,
        40: O,
        41: N
      }, (s as any)(Tt, [2, 44], {
        46: 88,
        13: z,
        41: G,
        48: K,
        49: U
      }), {
        14: 115,
        40: H,
        50: J,
        73: $
      }, {
        16: 116,
        40: O,
        41: N
      }, {
        14: 117,
        40: H,
        50: J,
        73: $
      }, (s as any)(i, [2, 13]), (s as any)(Z, [2, 64]), {
        60: 118,
        62: Ot
      }, {
        19: [1, 119]
      }, (s as any)(i, [2, 20]), (s as any)(i, [2, 23], {
        17: [1, 120],
        42: A
      }), (s as any)(i, [2, 11]), {
        13: [1, 121],
        42: A
      }, (s as any)(i, [2, 10]), (s as any)(ut, [2, 69]), (s as any)(i, [2, 18]), {
        18: 122,
        19: [1, 123],
        53: 53,
        54: 54,
        58: Y
      }, {
        14: 124,
        40: H,
        50: J,
        73: $
      }, {
        19: [1, 125]
      }, (s as any)(i, [2, 21]), (s as any)(i, [2, 9]), (s as any)(i, [2, 19])],
      defaultActions: {
        75: [2, 60],
        78: [2, 66]
      },
      parseError: (d as any)(function (this: any, n: any, a: any): any {
        if ((a as any).recoverable) ((this as any).trace as any)(n);else {
          var o: any = new (Error as any)(n);
          throw (o as any).hash = a, o;
        }
      }, "parseError"),
      parse: (d as any)(function (this: any, n: any): any {
        var pt: any;
        var a: any = this,
          o: any = [0],
          r: any = [],
          f: any = [null],
          t: any = [],
          j: any = (this as any).table,
          e: any = "",
          et: any = 0,
          At: any = 0,
          Lt: number = 2,
          It: number = 1,
          wt: any = (((t as any).slice as any).call as any)(arguments, 1),
          _: any = ((Object as any).create as any)((this as any).lexer),
          x: any = {
            yy: {}
          };
        for (pt in (this as any).yy) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).yy, pt) && (((x as any).yy as any)[pt] = ((this as any).yy as any)[pt]);
        ((_ as any).setInput as any)(n, (x as any).yy), ((x as any).yy as any).lexer = _, ((x as any).yy as any).parser = this, (typeof (_ as any).yylloc as any) > ("u" as any) && ((_ as any).yylloc = {});
        var ft: any = (_ as any).yylloc;
        ((t as any).push as any)(ft);
        var Vt: any = (_ as any).options && ((_ as any).options as any).ranges;
        (typeof ((x as any).yy as any).parseError as any) == ("function" as any) ? (this as any).parseError = ((x as any).yy as any).parseError : (this as any).parseError = (((Object as any).getPrototypeOf as any)(this) as any).parseError;
        function Mt(this: any, b: any): any {
          (o as any).length = ((o as any).length as any) - ((2 as any) * (b as any) as any), (f as any).length = ((f as any).length as any) - (b as any), (t as any).length = ((t as any).length as any) - (b as any);
        }
        (d as any)(Mt, "popStack");
        function Rt(this: any): any {
          var b: any;
          return b = ((r as any).pop as any)() || ((_ as any).lex as any)() || It, (typeof b as any) != ("number" as any) && (b instanceof Array && (r = b, b = ((r as any).pop as any)()), b = ((a as any).symbols_ as any)[b] || b), b;
        }
        (d as any)(Rt, "lex");
        for (var g: any, v: any, k: any, yt: any, w: any = {}, st: any, E: any, Ct: any, it: any;;) {
          if (v = (o as any)[((o as any).length as any) - (1 as any)], ((this as any).defaultActions as any)[v] ? k = ((this as any).defaultActions as any)[v] : (((g as any) === (null as any) || (typeof g as any) > ("u" as any)) && (g = (Rt as any)()), k = (j as any)[v] && ((j as any)[v] as any)[g]), (typeof k as any) > ("u" as any) || !(k as any).length || !(k as any)[0]) {
            var _t: any = "";
            it = [];
            for (st in (j as any)[v]) ((this as any).terminals_ as any)[st] && (st as any) > (Lt as any) && ((it as any).push as any)((("'" as any) + (((this as any).terminals_ as any)[st] as any) as any) + ("'" as any));
            (_ as any).showPosition ? _t = (((((((("Parse error on line " as any) + ((et as any) + (1 as any) as any) as any) + (`:
` as any) as any) + (((_ as any).showPosition as any)() as any) as any) + (`
Expecting ` as any) as any) + (((it as any).join as any)(", ") as any) as any) + (", got '" as any) as any) + ((((this as any).terminals_ as any)[g] || g) as any) as any) + ("'" as any) : _t = ((("Parse error on line " as any) + ((et as any) + (1 as any) as any) as any) + (": Unexpected " as any) as any) + (((g as any) == (It as any) ? "end of input" : (("'" as any) + ((((this as any).terminals_ as any)[g] || g) as any) as any) + ("'" as any)) as any), ((this as any).parseError as any)(_t, {
              text: (_ as any).match,
              token: ((this as any).terminals_ as any)[g] || g,
              line: (_ as any).yylineno,
              loc: ft,
              expected: it
            });
          }
          if ((k as any)[0] instanceof Array && ((k as any).length as any) > (1 as any)) throw new (Error as any)(((("Parse Error: multiple actions possible at state: " as any) + (v as any) as any) + (", token: " as any) as any) + (g as any));
          switch ((k as any)[0]) {
            case 1:
              ((o as any).push as any)(g), ((f as any).push as any)((_ as any).yytext), ((t as any).push as any)((_ as any).yylloc), ((o as any).push as any)((k as any)[1]), g = null, At = (_ as any).yyleng, e = (_ as any).yytext, et = (_ as any).yylineno, ft = (_ as any).yylloc;
              break;
            case 2:
              if (E = (((this as any).productions_ as any)[(k as any)[1]] as any)[1], (w as any).$ = (f as any)[((f as any).length as any) - (E as any)], (w as any)._$ = {
                first_line: ((t as any)[((t as any).length as any) - ((E || 1) as any)] as any).first_line,
                last_line: ((t as any)[((t as any).length as any) - (1 as any)] as any).last_line,
                first_column: ((t as any)[((t as any).length as any) - ((E || 1) as any)] as any).first_column,
                last_column: ((t as any)[((t as any).length as any) - (1 as any)] as any).last_column
              }, Vt && (((w as any)._$ as any).range = [(((t as any)[((t as any).length as any) - ((E || 1) as any)] as any).range as any)[0], (((t as any)[((t as any).length as any) - (1 as any)] as any).range as any)[1]]), yt = (((this as any).performAction as any).apply as any)(w, (([e, At, et, (x as any).yy, (k as any)[1], f, t] as any).concat as any)(wt)), (typeof yt as any) < ("u" as any)) return yt;
              E && (o = ((o as any).slice as any)(0, ((-1 as any) * (E as any) as any) * (2 as any)), f = ((f as any).slice as any)(0, (-1 as any) * (E as any)), t = ((t as any).slice as any)(0, (-1 as any) * (E as any))), ((o as any).push as any)((((this as any).productions_ as any)[(k as any)[1]] as any)[0]), ((f as any).push as any)((w as any).$), ((t as any).push as any)((w as any)._$), Ct = ((j as any)[(o as any)[((o as any).length as any) - (2 as any)]] as any)[(o as any)[((o as any).length as any) - (1 as any)]], ((o as any).push as any)(Ct);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }, "parse")
    },
    Dt: any = (function (this: any): any {
      var I: any = {
        EOF: 1,
        parseError: (d as any)(function (this: any, a: any, o: any): any {
          if (((this as any).yy as any).parser) ((((this as any).yy as any).parser as any).parseError as any)(a, o);else throw new (Error as any)(a);
        }, "parseError"),
        setInput: (d as any)(function (this: any, n: any, a: any): any {
          return (this as any).yy = a || (this as any).yy || {}, (this as any)._input = n, (this as any)._more = (this as any)._backtrack = (this as any).done = !1, (this as any).yylineno = (this as any).yyleng = 0, (this as any).yytext = (this as any).matched = (this as any).match = "", (this as any).conditionStack = ["INITIAL"], (this as any).yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [0, 0]), (this as any).offset = 0, this;
        }, "setInput"),
        input: (d as any)(function (this: any): any {
          var n: any = ((this as any)._input as any)[0];
          (this as any).yytext += n, (this as any).yyleng++, (this as any).offset++, (this as any).match += n, (this as any).matched += n;
          var a: any = ((n as any).match as any)(/(?:\r\n?|\n).*/g);
          return a ? ((this as any).yylineno++, ((this as any).yylloc as any).last_line++) : ((this as any).yylloc as any).last_column++, ((this as any).options as any).ranges && (((this as any).yylloc as any).range as any)[1]++, (this as any)._input = (((this as any)._input as any).slice as any)(1), n;
        }, "input"),
        unput: (d as any)(function (this: any, n: any): any {
          var a: any = (n as any).length,
            o: any = ((n as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any)._input = (n as any) + ((this as any)._input as any), (this as any).yytext = (((this as any).yytext as any).substr as any)(0, (((this as any).yytext as any).length as any) - (a as any)), (this as any).offset -= a;
          var r: any = (((this as any).match as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any).match = (((this as any).match as any).substr as any)(0, (((this as any).match as any).length as any) - (1 as any)), (this as any).matched = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (1 as any)), ((o as any).length as any) - (1 as any) && ((this as any).yylineno -= ((o as any).length as any) - (1 as any));
          var f: any = ((this as any).yylloc as any).range;
          return (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).first_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).first_column,
            last_column: o ? (((((o as any).length as any) === ((r as any).length as any) ? ((this as any).yylloc as any).first_column : 0) as any) + (((r as any)[((r as any).length as any) - ((o as any).length as any)] as any).length as any) as any) - (((o as any)[0] as any).length as any) : (((this as any).yylloc as any).first_column as any) - (a as any)
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(f as any)[0], (((f as any)[0] as any) + ((this as any).yyleng as any) as any) - (a as any)]), (this as any).yyleng = ((this as any).yytext as any).length, this;
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
        less: (d as any)(function (this: any, n: any): any {
          ((this as any).unput as any)((((this as any).match as any).slice as any)(n));
        }, "less"),
        pastInput: (d as any)(function (this: any): any {
          var n: any = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (((this as any).match as any).length as any));
          return ((((n as any).length as any) > (20 as any) ? "..." : "") as any) + (((((n as any).substr as any)(-20) as any).replace as any)(/\n/g, "") as any);
        }, "pastInput"),
        upcomingInput: (d as any)(function (this: any): any {
          var n: any = (this as any).match;
          return ((n as any).length as any) < (20 as any) && (n += (((this as any)._input as any).substr as any)(0, (20 as any) - ((n as any).length as any))), (((((n as any).substr as any)(0, 20) as any) + ((((n as any).length as any) > (20 as any) ? "..." : "") as any) as any).replace as any)(/\n/g, "");
        }, "upcomingInput"),
        showPosition: (d as any)(function (this: any): any {
          var n: any = ((this as any).pastInput as any)(),
            a: any = ((new (Array as any)(((n as any).length as any) + (1 as any)) as any).join as any)("-");
          return ((((n as any) + (((this as any).upcomingInput as any)() as any) as any) + (`
` as any) as any) + (a as any) as any) + ("^" as any);
        }, "showPosition"),
        test_match: (d as any)(function (this: any, n: any, a: any): any {
          var t: any;
          var o: any, r: any, f: any;
          if (((this as any).options as any).backtrack_lexer && (f = {
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
          }, ((this as any).options as any).ranges && (((f as any).yylloc as any).range = ((((this as any).yylloc as any).range as any).slice as any)(0))), r = (((n as any)[0] as any).match as any)(/(?:\r\n?|\n).*/g), r && ((this as any).yylineno += (r as any).length), (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).last_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).last_column,
            last_column: r ? (((r as any)[((r as any).length as any) - (1 as any)] as any).length as any) - ((((((r as any)[((r as any).length as any) - (1 as any)] as any).match as any)(/\r?\n?/) as any)[0] as any).length as any) : (((this as any).yylloc as any).last_column as any) + (((n as any)[0] as any).length as any)
          }, (this as any).yytext += (n as any)[0], (this as any).match += (n as any)[0], (this as any).matches = n, (this as any).yyleng = ((this as any).yytext as any).length, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(this as any).offset, (this as any).offset += (this as any).yyleng]), (this as any)._more = !1, (this as any)._backtrack = !1, (this as any)._input = (((this as any)._input as any).slice as any)(((n as any)[0] as any).length), (this as any).matched += (n as any)[0], o = (((this as any).performAction as any).call as any)(this, (this as any).yy, this, a, ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]), (this as any).done && (this as any)._input && ((this as any).done = !1), o) return o;
          if ((this as any)._backtrack) {
            for (t in f) (this as any)[t] = (f as any)[t];
            return !1;
          }
          return !1;
        }, "test_match"),
        next: (d as any)(function (this: any): any {
          if ((this as any).done) return (this as any).EOF;
          (this as any)._input || ((this as any).done = !0);
          var n: any, a: any, o: any, r: any;
          (this as any)._more || ((this as any).yytext = "", (this as any).match = "");
          for (var f: any = ((this as any)._currentRules as any)(), t: any = 0; (t as any) < ((f as any).length as any); t++) if (o = (((this as any)._input as any).match as any)(((this as any).rules as any)[(f as any)[t]]), o && (!a || (((o as any)[0] as any).length as any) > (((a as any)[0] as any).length as any))) {
            if (a = o, r = t, ((this as any).options as any).backtrack_lexer) {
              if (n = ((this as any).test_match as any)(o, (f as any)[t]), (n as any) !== (!1 as any)) return n;
              if ((this as any)._backtrack) {
                a = !1;
                continue;
              } else return !1;
            } else if (!((this as any).options as any).flex) break;
          }
          return a ? (n = ((this as any).test_match as any)(a, (f as any)[r]), (n as any) !== (!1 as any) ? n : !1) : ((this as any)._input as any) === ("" as any) ? (this as any).EOF : ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. Unrecognized text.
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
        }, "next"),
        lex: (d as any)(function (this: any): any {
          var a: any = ((this as any).next as any)();
          return a || ((this as any).lex as any)();
        }, "lex"),
        begin: (d as any)(function (this: any, a: any): any {
          (((this as any).conditionStack as any).push as any)(a);
        }, "begin"),
        popState: (d as any)(function (this: any): any {
          var a: any = (((this as any).conditionStack as any).length as any) - (1 as any);
          return (a as any) > (0 as any) ? (((this as any).conditionStack as any).pop as any)() : ((this as any).conditionStack as any)[0];
        }, "popState"),
        _currentRules: (d as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length && ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)] ? (((this as any).conditions as any)[((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]] as any).rules : (((this as any).conditions as any).INITIAL as any).rules;
        }, "_currentRules"),
        topState: (d as any)(function (this: any, a: any): any {
          return a = ((((this as any).conditionStack as any).length as any) - (1 as any) as any) - (((Math as any).abs as any)(a || 0) as any), (a as any) >= (0 as any) ? ((this as any).conditionStack as any)[a] : "INITIAL";
        }, "topState"),
        pushState: (d as any)(function (this: any, a: any): any {
          ((this as any).begin as any)(a);
        }, "pushState"),
        stateStackSize: (d as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": !0
        },
        performAction: (d as any)(function (this: any, a: any, o: any, r: any, f: any): any {
          switch (r) {
            case 0:
              return ((this as any).begin as any)("acc_title"), 24;
            case 1:
              return ((this as any).popState as any)(), "acc_title_value";
            case 2:
              return ((this as any).begin as any)("acc_descr"), 26;
            case 3:
              return ((this as any).popState as any)(), "acc_descr_value";
            case 4:
              ((this as any).begin as any)("acc_descr_multiline");
              break;
            case 5:
              ((this as any).popState as any)();
              break;
            case 6:
              return "acc_descr_multiline_value";
            case 7:
              return 33;
            case 8:
              return 34;
            case 9:
              return 35;
            case 10:
              return 36;
            case 11:
              return 10;
            case 12:
              break;
            case 13:
              return 8;
            case 14:
              return 50;
            case 15:
              return 73;
            case 16:
              return 4;
            case 17:
              return ((this as any).begin as any)("block"), 17;
            case 18:
              return 49;
            case 19:
              return 49;
            case 20:
              return 42;
            case 21:
              return 15;
            case 22:
              return 13;
            case 23:
              break;
            case 24:
              return 62;
            case 25:
              return 58;
            case 26:
              return 58;
            case 27:
              ((this as any).begin as any)("block_bq");
              break;
            case 28:
              return 58;
            case 29:
              ((this as any).popState as any)();
              break;
            case 30:
              return 63;
            case 31:
              break;
            case 32:
              return ((this as any).popState as any)(), 19;
            case 33:
              return ((o as any).yytext as any)[0];
            case 34:
              return 20;
            case 35:
              return 21;
            case 36:
              return ((this as any).begin as any)("style"), 44;
            case 37:
              return ((this as any).popState as any)(), 10;
            case 38:
              break;
            case 39:
              return 13;
            case 40:
              return 42;
            case 41:
              return 49;
            case 42:
              return ((this as any).begin as any)("style"), 37;
            case 43:
              return 43;
            case 44:
              return 66;
            case 45:
              return 68;
            case 46:
              return 68;
            case 47:
              return 68;
            case 48:
              return 66;
            case 49:
              return 66;
            case 50:
              return 67;
            case 51:
              return 67;
            case 52:
              return 67;
            case 53:
              return 67;
            case 54:
              return 67;
            case 55:
              return 68;
            case 56:
              return 67;
            case 57:
              return 68;
            case 58:
              return 69;
            case 59:
              return 69;
            case 60:
              return 51;
            case 61:
              return 69;
            case 62:
              return 69;
            case 63:
              return 69;
            case 64:
              return 52;
            case 65:
              return 48;
            case 66:
              return 69;
            case 67:
              return 66;
            case 68:
              return 67;
            case 69:
              return 68;
            case 70:
              return 70;
            case 71:
              return 71;
            case 72:
              return 72;
            case 73:
              return 72;
            case 74:
              return 71;
            case 75:
              return 71;
            case 76:
              return 71;
            case 77:
              return 41;
            case 78:
              return 47;
            case 79:
              return 40;
            case 80:
              return ((o as any).yytext as any)[0];
            case 81:
              return 6;
          }
        }, "anonymous"),
        rules: [/^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:[\s]+)/i, /^(?:"[^"%\r\n\v\b\\]+")/i, /^(?:"[^"]*")/i, /^(?:erDiagram\b)/i, /^(?:\{)/i, /^(?:#)/i, /^(?:#)/i, /^(?:,)/i, /^(?::::)/i, /^(?::)/i, /^(?:\s+)/i, /^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i, /^(?:([^\s]*)[~].*[~]([^\s]*))/i, /^(?:([\*A-Za-z_\u00C0-\uFFFF][A-Za-z0-9\-\_\[\]\(\)\.,\u00C0-\uFFFF\*]*))/i, /^(?:[`])/i, /^(?:[^`]+)/i, /^(?:[`])/i, /^(?:"[^"]*")/i, /^(?:[\n]+)/i, /^(?:\})/i, /^(?:.)/i, /^(?:\[)/i, /^(?:\])/i, /^(?:style\b)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?::)/i, /^(?:,)/i, /^(?:#)/i, /^(?:classDef\b)/i, /^(?:class\b)/i, /^(?:one or zero\b)/i, /^(?:one or more\b)/i, /^(?:one or many\b)/i, /^(?:1\+)/i, /^(?:\|o\b)/i, /^(?:zero or one\b)/i, /^(?:zero or more\b)/i, /^(?:zero or many\b)/i, /^(?:0\+)/i, /^(?:\}o\b)/i, /^(?:many\(0\))/i, /^(?:many\(1\))/i, /^(?:many\b)/i, /^(?:\}\|)/i, /^(?:one\b)/i, /^(?:only one\b)/i, /^(?:[0-9]+\.[0-9]+)/i, /^(?:1(?=\s+[A-Za-z_"']))/i, /^(?:1(?=\s+[0-9]))/i, /^(?:1(?=(--|\.\.|\.-|-\.)))/i, /^(?:1\b)/i, /^(?:[0-9]+)/i, /^(?:\|\|)/i, /^(?:o\|)/i, /^(?:o\{)/i, /^(?:\|\{)/i, /^(?:u(?=[\.\-\|]))/i, /^(?:\.\.)/i, /^(?:--)/i, /^(?:to\b)/i, /^(?:optionally to\b)/i, /^(?:\.-)/i, /^(?:-\.)/i, /^(?:([^\x00-\x7F]|\w|-|\*)+)/i, /^(?:;)/i, /^(?:([^\x00-\x7F]|\w|-|\*|\.)+)/i, /^(?:.)/i, /^(?:$)/i],
        conditions: {
          style: {
            rules: [37, 38, 39, 40, 41, 77, 78],
            inclusive: !1
          },
          acc_descr_multiline: {
            rules: [5, 6],
            inclusive: !1
          },
          acc_descr: {
            rules: [3],
            inclusive: !1
          },
          acc_title: {
            rules: [1],
            inclusive: !1
          },
          block_bq: {
            rules: [28, 29],
            inclusive: !1
          },
          block: {
            rules: [23, 24, 25, 26, 27, 30, 31, 32, 33],
            inclusive: !1
          },
          INITIAL: {
            rules: [0, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 34, 35, 36, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 79, 80, 81],
            inclusive: !0
          }
        }
      };
      return I;
    } as any)();
  (dt as any).lexer = Dt;
  function tt(this: any): any {
    (this as any).yy = {};
  }
  return (d as any)(tt, "Parser"), (tt as any).prototype = dt, (dt as any).Parser = tt, new (tt as any)();
} as any)();
(gt as any).parser = gt;
var te: any = gt,
  M: any,
  ee: any = (M = class {
    declare getConfig: any;
    declare getDiagramTitle: any;
    declare setDiagramTitle: any;
    declare getAccDescription: any;
    declare setAccDescription: any;
    declare getAccTitle: any;
    declare setAccTitle: any;
    declare Identification: any;
    declare Cardinality: any;
    declare direction: any;
    declare classes: any;
    declare relationships: any;
    declare entities: any;
    [key: string]: any;
    constructor() {
      (this as any).entities = new (Map as any)(), (this as any).relationships = [], (this as any).classes = new (Map as any)(), (this as any).direction = "TB", (this as any).Cardinality = {
        ZERO_OR_ONE: "ZERO_OR_ONE",
        ZERO_OR_MORE: "ZERO_OR_MORE",
        ONE_OR_MORE: "ONE_OR_MORE",
        ONLY_ONE: "ONLY_ONE",
        MD_PARENT: "MD_PARENT"
      }, (this as any).Identification = {
        NON_IDENTIFYING: "NON_IDENTIFYING",
        IDENTIFYING: "IDENTIFYING"
      }, (this as any).setAccTitle = Yt, (this as any).getAccTitle = Pt, (this as any).setAccDescription = zt, (this as any).getAccDescription = Gt, (this as any).setDiagramTitle = Kt, (this as any).getDiagramTitle = Ut, (this as any).getConfig = (d as any)((): any => ((rt as any)() as any).er, "getConfig"), ((this as any).clear as any)(), (this as any).addEntity = (((this as any).addEntity as any).bind as any)(this), (this as any).addAttributes = (((this as any).addAttributes as any).bind as any)(this), (this as any).addRelationship = (((this as any).addRelationship as any).bind as any)(this), (this as any).setDirection = (((this as any).setDirection as any).bind as any)(this), (this as any).addCssStyles = (((this as any).addCssStyles as any).bind as any)(this), (this as any).addClass = (((this as any).addClass as any).bind as any)(this), (this as any).setClass = (((this as any).setClass as any).bind as any)(this), (this as any).setAccTitle = (((this as any).setAccTitle as any).bind as any)(this), (this as any).setAccDescription = (((this as any).setAccDescription as any).bind as any)(this);
    }
    addEntity(i: any, c: any = ""): any {
      return (((this as any).entities as any).has as any)(i) ? !(((this as any).entities as any).get as any)(i)?.alias && c && (((((this as any).entities as any).get as any)(i) as any).alias = c, ((V as any).info as any)(`Add alias '${c}' to entity '${i}'`)) : ((((this as any).entities as any).set as any)(i, {
        id: `entity-${i}-${((this as any).entities as any).size}`,
        label: i,
        attributes: [],
        alias: c,
        shape: "erBox",
        look: ((rt as any)() as any).look ?? "default",
        cssClasses: "default",
        cssStyles: [],
        labelType: "markdown"
      }), ((V as any).info as any)("Added new entity :", i)), (((this as any).entities as any).get as any)(i);
    }
    getEntity(i: any): any {
      return (((this as any).entities as any).get as any)(i);
    }
    getEntities(): any {
      return (this as any).entities;
    }
    getClasses(): any {
      return (this as any).classes;
    }
    addAttributes(i: any, c: any): any {
      const h: any = ((this as any).addEntity as any)(i);
      let l: any;
      for (l = ((c as any).length as any) - (1 as any); (l as any) >= (0 as any); l--) ((c as any)[l] as any).keys || (((c as any)[l] as any).keys = []), ((c as any)[l] as any).comment || (((c as any)[l] as any).comment = ""), (((h as any).attributes as any).push as any)((c as any)[l]), ((V as any).debug as any)("Added attribute ", ((c as any)[l] as any).name);
    }
    addRelationship(i: any, c: any, h: any, l: any): any {
      const p: any = (((this as any).entities as any).get as any)(i),
        y: any = (((this as any).entities as any).get as any)(h);
      if (!p || !y) return;
      const u: any = {
        entityA: (p as any).id,
        roleA: c,
        entityB: (y as any).id,
        relSpec: l
      };
      (((this as any).relationships as any).push as any)(u), ((V as any).debug as any)("Added new relationship :", u);
    }
    getRelationships(): any {
      return (this as any).relationships;
    }
    getDirection(): any {
      return (this as any).direction;
    }
    setDirection(i: any): any {
      (this as any).direction = i;
    }
    getCompiledStyles(i: any): any {
      let c: any = [];
      for (const h of i) {
        const l: any = (((this as any).classes as any).get as any)(h);
        l?.styles && (c = (([...c, ...((l as any).styles ?? [])] as any).map as any)((p: any): any => ((p as any).trim as any)())), l?.textStyles && (c = (([...c, ...((l as any).textStyles ?? [])] as any).map as any)((p: any): any => ((p as any).trim as any)()));
      }
      return c;
    }
    addCssStyles(i: any, c: any): any {
      for (const h of i) {
        const l: any = (((this as any).entities as any).get as any)(h);
        if (!c || !l) return;
        for (const p of c) (((l as any).cssStyles as any).push as any)(p);
      }
    }
    addClass(i: any, c: any): any {
      ((i as any).forEach as any)((h: any): any => {
        let l: any = (((this as any).classes as any).get as any)(h);
        (l as any) === (void 0 as any) && (l = {
          id: h,
          styles: [],
          textStyles: []
        }, (((this as any).classes as any).set as any)(h, l)), c && ((c as any).forEach as any)(function (this: any, p: any): any {
          if (((/color/ as any).exec as any)(p)) {
            const y: any = ((p as any).replace as any)("fill", "bgFill");
            (((l as any).textStyles as any).push as any)(y);
          }
          (((l as any).styles as any).push as any)(p);
        });
      });
    }
    setClass(i: any, c: any): any {
      for (const h of i) {
        const l: any = (((this as any).entities as any).get as any)(h);
        if (l) for (const p of c) (l as any).cssClasses += (" " as any) + (p as any);
      }
    }
    clear(): any {
      (this as any).entities = new (Map as any)(), (this as any).classes = new (Map as any)(), (this as any).relationships = [], (Zt as any)();
    }
    getData(): any {
      const i: any = [],
        c: any = [],
        h: any = (rt as any)();
      let l: any = 0;
      for (const y of (((this as any).entities as any).keys as any)()) {
        const u: any = (((this as any).entities as any).get as any)(y);
        u && ((u as any).cssCompiledStyles = ((this as any).getCompiledStyles as any)((((u as any).cssClasses as any).split as any)(" ")), (u as any).colorIndex = l++, ((i as any).push as any)(u));
      }
      let p: any = 0;
      for (const y of (this as any).relationships) {
        const u: any = {
          id: (jt as any)((y as any).entityA, (y as any).entityB, {
            prefix: "id",
            counter: p++
          }),
          type: "normal",
          curve: "basis",
          start: (y as any).entityA,
          end: (y as any).entityB,
          label: (y as any).roleA,
          labelpos: "c",
          thickness: "normal",
          classes: "relationshipLine",
          arrowTypeStart: ((((y as any).relSpec as any).cardB as any).toLowerCase as any)(),
          arrowTypeEnd: ((((y as any).relSpec as any).cardA as any).toLowerCase as any)(),
          pattern: (((y as any).relSpec as any).relType as any) == ("IDENTIFYING" as any) ? "solid" : "dashed",
          look: (h as any).look,
          labelType: "markdown"
        };
        ((c as any).push as any)(u);
      }
      return {
        nodes: i,
        edges: c,
        other: {},
        config: h,
        direction: "TB"
      };
    }
  }, (d as any)(M, "ErDB"), M),
  vt: any = {};
(qt as any)(vt, {
  draw: (): any => se
});
var se: any = (d as any)(async function (this: any, s: any, i: any, c: any, h: any): Promise<any> {
    ((V as any).info as any)("REF0:"), ((V as any).info as any)("Drawing er diagram (unified)", i);
    const {
        securityLevel: l,
        er: p,
        layout: y
      }: any = (rt as any)(),
      u: any = (((h as any).db as any).getData as any)(),
      m: any = (Bt as any)(i, l);
    (u as any).type = (h as any).type, (u as any).layoutAlgorithm = (Qt as any)(y), (((u as any).config as any).flowchart as any).nodeSpacing = p?.nodeSpacing || 140, (((u as any).config as any).flowchart as any).rankSpacing = p?.rankSpacing || 80, (u as any).direction = (((h as any).db as any).getDirection as any)();
    const {
        config: W
      }: any = u,
      {
        look: q
      }: any = W;
    (q as any) === ("neo" as any) ? (u as any).markers = ["only_one_neo", "zero_or_one_neo", "one_or_more_neo", "zero_or_more_neo"] : (u as any).markers = ["only_one", "zero_or_one", "one_or_more", "zero_or_more"], (u as any).diagramId = i, await (Xt as any)(u, m), ((u as any).layoutAlgorithm as any) === ("elk" as any) && ((((m as any).select as any)(".edges") as any).lower as any)();
    const S: any = ((m as any).selectAll as any)('[id*="-background"]');
    ((((Array as any).from as any)(S) as any).length as any) > (0 as any) && ((S as any).each as any)(function (this: any): any {
      const B: any = (Ht as any)(this),
        R: any = ((((B as any).attr as any)("id") as any).replace as any)("-background", ""),
        T: any = ((m as any).select as any)(`#${((CSS as any).escape as any)(R)}`);
      if (!((T as any).empty as any)()) {
        const C: any = ((T as any).attr as any)("transform");
        ((B as any).attr as any)("transform", C);
      }
    });
    const Q: number = 8;
    ((Jt as any).insertTitle as any)(m, "erDiagramTitleText", p?.titleTopMargin ?? 25, (((h as any).db as any).getDiagramTitle as any)()), (Ft as any)(m, Q, "erDiagram", p?.useMaxWidth ?? !0);
  }, "draw"),
  xt: any = (d as any)((s: any, i: any): any => {
    const c: any = $t,
      h: any = (c as any)(s, "r"),
      l: any = (c as any)(s, "g"),
      p: any = (c as any)(s, "b");
    return (Wt as any)(h, l, p, i);
  }, "fade"),
  nt: any = new (Set as any)(["redux-color", "redux-dark-color"]),
  ie: any = (d as any)((s: any): any => {
    const {
      theme: i,
      look: c,
      bkgColorArray: h,
      borderColorArray: l
    }: any = s;
    if (!((nt as any).has as any)(i)) return "";
    const p: any = (h?.length as any) > (0 as any);
    let y: any = "";
    for (let u: any = 0; (u as any) < ((s as any).THEME_COLOR_LIMIT as any); u++) y += `

    [data-look="${c}"][data-color-id="color-${u}"].node path {
    stroke: ${(l as any)[u]};
    ${p ? `fill: ${(h as any)[u]};` : ""}
    }

    [data-look="${c}"][data-color-id="color-${u}"].node  rect {
    stroke: ${(l as any)[u]};
    ${p ? `fill: ${(h as any)[u]};` : ""}
     }
    `;
    return y;
  }, "genColor"),
  re: any = (d as any)((s: any): any => {
    const {
      look: i,
      theme: c,
      erEdgeLabelBackground: h,
      strokeWidth: l
    }: any = s;
    return `
    ${(ie as any)(s)}
  .entityBox {
    fill: ${(s as any).mainBkg};
    stroke: ${(s as any).nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${(s as any).tertiaryColor};
    opacity: 0.7;
    background-color: ${(s as any).tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

  .labelBkg {
    background-color: ${((nt as any).has as any)(c) && h ? h : (xt as any)((s as any).tertiaryColor, .5)};
  }

  .edgeLabel {
    background-color: ${((nt as any).has as any)(c) && h ? h : (s as any).edgeLabelBackground};
  }
  .edgeLabel .label rect {
    fill: ${((nt as any).has as any)(c) && h ? h : (s as any).edgeLabelBackground};
  }
  .edgeLabel .label text {
    fill: ${(s as any).textColor};
  }

  .edgeLabel .label {
    fill: ${(s as any).nodeBorder};
    font-size: 14px;
  }

  .label {
    font-family: ${(s as any).fontFamily};
    color: ${(s as any).nodeTextColor || (s as any).textColor};
  }

  .edge-pattern-dashed {
    stroke-dasharray: 8,8;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon
  {
    fill: ${(s as any).mainBkg};
    stroke: ${(s as any).nodeBorder};
    stroke-width: ${(i as any) === ("neo" as any) ? l : "1px"};
  }

  .relationshipLine {
    stroke: ${(s as any).lineColor};
    stroke-width: ${(i as any) === ("neo" as any) ? l : "1px"};
    fill: none;
  }

  .marker {
    fill: none !important;
    stroke: ${(s as any).lineColor} !important;
    stroke-width: 1;
  }
  [data-look=neo].labelBkg {
    background-color: ${(xt as any)((s as any).tertiaryColor, .5)};
  }
`;
  }, "getStyles"),
  ne: any = re,
  ue: any = {
    parser: te,
    get db(): any {
      return new (ee as any)();
    },
    renderer: vt,
    styles: ne
  };
export { ue as diagram };
//# debugId=61b9a9fd-e201-46da-a251-59d61f1685ea
