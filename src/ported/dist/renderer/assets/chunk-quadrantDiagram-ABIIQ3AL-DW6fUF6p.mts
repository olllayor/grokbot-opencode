declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "e63eae47-bef9-40b2-a632-9e94473ca66a", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-e63eae47-bef9-40b2-a632-9e94473ca66a");
  } catch (e: any) {}
} as any)();
import { _ as o, s as Ae, g as ke, p as ae, o as Fe, a as Pe, b as ve, c as zt, l as bt, d as Lt, e as Ce, q as Le, D as z, W as Ee, i as De } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { l as ie } from "./chunk-linear-CNfSrmBn.js";
import "./index.eager-vendor-Qbf9YA6n.js";
import "./chunk-init-Gi6I4Gst.js";
import "./chunk-defaultLocale-pEppTWzK.js";
var Et: any = (function (this: any): any {
  var t: any = (o as any)(function (this: any, Y: any, r: any, l: any, x: any): any {
      for (l = l || {}, x = (Y as any).length; x--; (l as any)[(Y as any)[x]] = r);
      return l;
    }, "o"),
    n: any = [1, 3],
    f: any = [1, 4],
    d: any = [1, 5],
    h: any = [1, 6],
    p: any = [1, 7],
    y: any = [1, 4, 5, 10, 12, 13, 14, 15, 18, 25, 35, 37, 39, 41, 42, 48, 50, 51, 52, 53, 54, 55, 56, 57, 60, 61, 63, 64, 65, 66, 67],
    _: any = [1, 4, 5, 10, 12, 13, 14, 15, 18, 25, 28, 35, 37, 39, 41, 42, 48, 50, 51, 52, 53, 54, 55, 56, 57, 60, 61, 63, 64, 65, 66, 67],
    a: any = [55, 56, 57],
    k: any = [2, 36],
    u: any = [1, 37],
    T: any = [1, 36],
    q: any = [1, 38],
    m: any = [1, 35],
    b: any = [1, 43],
    g: any = [1, 41],
    A: any = [1, 45],
    ht: any = [1, 14],
    xt: any = [1, 23],
    ft: any = [1, 18],
    gt: any = [1, 19],
    ct: any = [1, 20],
    _t: any = [1, 21],
    dt: any = [1, 22],
    i: any = [1, 24],
    Vt: any = [1, 25],
    It: any = [1, 26],
    wt: any = [1, 27],
    Bt: any = [1, 28],
    Rt: any = [1, 29],
    U: any = [1, 32],
    Q: any = [1, 33],
    F: any = [1, 34],
    P: any = [1, 39],
    v: any = [1, 40],
    C: any = [1, 42],
    L: any = [1, 44],
    H: any = [1, 63],
    X: any = [1, 62],
    E: any = [4, 5, 8, 10, 12, 13, 14, 15, 18, 44, 47, 49, 55, 56, 57, 63, 64, 65, 66, 67],
    Nt: any = [1, 66],
    Wt: any = [1, 67],
    Ut: any = [1, 68],
    Qt: any = [1, 69],
    Ot: any = [1, 70],
    Ht: any = [1, 71],
    Xt: any = [1, 72],
    Mt: any = [1, 73],
    Yt: any = [1, 74],
    jt: any = [1, 75],
    Gt: any = [1, 76],
    Kt: any = [1, 77],
    w: any = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18],
    K: any = [1, 91],
    Z: any = [1, 92],
    J: any = [1, 93],
    $: any = [1, 100],
    tt: any = [1, 94],
    et: any = [1, 97],
    it: any = [1, 95],
    at: any = [1, 96],
    nt: any = [1, 98],
    st: any = [1, 99],
    At: any = [1, 103],
    Zt: any = [10, 55, 56, 57],
    N: any = [4, 5, 6, 8, 10, 11, 13, 17, 18, 19, 20, 55, 56, 57],
    kt: any = {
      trace: (o as any)(function (this: any): any {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        idStringToken: 3,
        ALPHA: 4,
        NUM: 5,
        NODE_STRING: 6,
        DOWN: 7,
        MINUS: 8,
        DEFAULT: 9,
        COMMA: 10,
        COLON: 11,
        AMP: 12,
        BRKT: 13,
        MULT: 14,
        UNICODE_TEXT: 15,
        styleComponent: 16,
        UNIT: 17,
        SPACE: 18,
        STYLE: 19,
        PCT: 20,
        idString: 21,
        style: 22,
        stylesOpt: 23,
        classDefStatement: 24,
        CLASSDEF: 25,
        start: 26,
        eol: 27,
        QUADRANT: 28,
        document: 29,
        line: 30,
        statement: 31,
        axisDetails: 32,
        quadrantDetails: 33,
        points: 34,
        title: 35,
        title_value: 36,
        acc_title: 37,
        acc_title_value: 38,
        acc_descr: 39,
        acc_descr_value: 40,
        acc_descr_multiline_value: 41,
        section: 42,
        text: 43,
        point_start: 44,
        point_x: 45,
        point_y: 46,
        class_name: 47,
        "X-AXIS": 48,
        "AXIS-TEXT-DELIMITER": 49,
        "Y-AXIS": 50,
        QUADRANT_1: 51,
        QUADRANT_2: 52,
        QUADRANT_3: 53,
        QUADRANT_4: 54,
        NEWLINE: 55,
        SEMI: 56,
        EOF: 57,
        alphaNumToken: 58,
        textNoTagsToken: 59,
        STR: 60,
        MD_STR: 61,
        alphaNum: 62,
        PUNCTUATION: 63,
        PLUS: 64,
        EQUALS: 65,
        DOT: 66,
        UNDERSCORE: 67,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        4: "ALPHA",
        5: "NUM",
        6: "NODE_STRING",
        7: "DOWN",
        8: "MINUS",
        9: "DEFAULT",
        10: "COMMA",
        11: "COLON",
        12: "AMP",
        13: "BRKT",
        14: "MULT",
        15: "UNICODE_TEXT",
        17: "UNIT",
        18: "SPACE",
        19: "STYLE",
        20: "PCT",
        25: "CLASSDEF",
        28: "QUADRANT",
        35: "title",
        36: "title_value",
        37: "acc_title",
        38: "acc_title_value",
        39: "acc_descr",
        40: "acc_descr_value",
        41: "acc_descr_multiline_value",
        42: "section",
        44: "point_start",
        45: "point_x",
        46: "point_y",
        47: "class_name",
        48: "X-AXIS",
        49: "AXIS-TEXT-DELIMITER",
        50: "Y-AXIS",
        51: "QUADRANT_1",
        52: "QUADRANT_2",
        53: "QUADRANT_3",
        54: "QUADRANT_4",
        55: "NEWLINE",
        56: "SEMI",
        57: "EOF",
        60: "STR",
        61: "MD_STR",
        63: "PUNCTUATION",
        64: "PLUS",
        65: "EQUALS",
        66: "DOT",
        67: "UNDERSCORE"
      },
      productions_: [0, [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [16, 1], [16, 1], [16, 1], [16, 1], [16, 1], [16, 1], [16, 1], [16, 1], [16, 1], [16, 1], [21, 1], [21, 2], [22, 1], [22, 2], [23, 1], [23, 3], [24, 5], [26, 2], [26, 2], [26, 2], [29, 0], [29, 2], [30, 2], [31, 0], [31, 1], [31, 2], [31, 1], [31, 1], [31, 1], [31, 2], [31, 2], [31, 2], [31, 1], [31, 1], [34, 4], [34, 5], [34, 5], [34, 6], [32, 4], [32, 3], [32, 2], [32, 4], [32, 3], [32, 2], [33, 2], [33, 2], [33, 2], [33, 2], [27, 1], [27, 1], [27, 1], [43, 1], [43, 2], [43, 1], [43, 1], [62, 1], [62, 2], [58, 1], [58, 1], [58, 1], [58, 1], [58, 1], [58, 1], [58, 1], [58, 1], [58, 1], [58, 1], [58, 1], [58, 1], [59, 1], [59, 1], [59, 1]],
      performAction: (o as any)(function (this: any, r: any, l: any, x: any, c: any, S: any, e: any, ut: any): any {
        var s: any = ((e as any).length as any) - (1 as any);
        switch (S) {
          case 23:
            (this as any).$ = (e as any)[s];
            break;
          case 24:
            (this as any).$ = (((e as any)[(s as any) - (1 as any)] as any) + ("" as any) as any) + ((e as any)[s] as any);
            break;
          case 26:
            (this as any).$ = ((e as any)[(s as any) - (1 as any)] as any) + ((e as any)[s] as any);
            break;
          case 27:
            (this as any).$ = [(((e as any)[s] as any).trim as any)()];
            break;
          case 28:
            (((e as any)[(s as any) - (2 as any)] as any).push as any)((((e as any)[s] as any).trim as any)()), (this as any).$ = (e as any)[(s as any) - (2 as any)];
            break;
          case 29:
            (this as any).$ = (e as any)[(s as any) - (4 as any)], ((c as any).addClass as any)((e as any)[(s as any) - (2 as any)], (e as any)[s]);
            break;
          case 37:
            (this as any).$ = [];
            break;
          case 42:
            (this as any).$ = (((e as any)[s] as any).trim as any)(), ((c as any).setDiagramTitle as any)((this as any).$);
            break;
          case 43:
            (this as any).$ = (((e as any)[s] as any).trim as any)(), ((c as any).setAccTitle as any)((this as any).$);
            break;
          case 44:
          case 45:
            (this as any).$ = (((e as any)[s] as any).trim as any)(), ((c as any).setAccDescription as any)((this as any).$);
            break;
          case 46:
            ((c as any).addSection as any)((((e as any)[s] as any).substr as any)(8)), (this as any).$ = (((e as any)[s] as any).substr as any)(8);
            break;
          case 47:
            ((c as any).addPoint as any)((e as any)[(s as any) - (3 as any)], "", (e as any)[(s as any) - (1 as any)], (e as any)[s], []);
            break;
          case 48:
            ((c as any).addPoint as any)((e as any)[(s as any) - (4 as any)], (e as any)[(s as any) - (3 as any)], (e as any)[(s as any) - (1 as any)], (e as any)[s], []);
            break;
          case 49:
            ((c as any).addPoint as any)((e as any)[(s as any) - (4 as any)], "", (e as any)[(s as any) - (2 as any)], (e as any)[(s as any) - (1 as any)], (e as any)[s]);
            break;
          case 50:
            ((c as any).addPoint as any)((e as any)[(s as any) - (5 as any)], (e as any)[(s as any) - (4 as any)], (e as any)[(s as any) - (2 as any)], (e as any)[(s as any) - (1 as any)], (e as any)[s]);
            break;
          case 51:
            ((c as any).setXAxisLeftText as any)((e as any)[(s as any) - (2 as any)]), ((c as any).setXAxisRightText as any)((e as any)[s]);
            break;
          case 52:
            ((e as any)[(s as any) - (1 as any)] as any).text += " \u27F6 ", ((c as any).setXAxisLeftText as any)((e as any)[(s as any) - (1 as any)]);
            break;
          case 53:
            ((c as any).setXAxisLeftText as any)((e as any)[s]);
            break;
          case 54:
            ((c as any).setYAxisBottomText as any)((e as any)[(s as any) - (2 as any)]), ((c as any).setYAxisTopText as any)((e as any)[s]);
            break;
          case 55:
            ((e as any)[(s as any) - (1 as any)] as any).text += " \u27F6 ", ((c as any).setYAxisBottomText as any)((e as any)[(s as any) - (1 as any)]);
            break;
          case 56:
            ((c as any).setYAxisBottomText as any)((e as any)[s]);
            break;
          case 57:
            ((c as any).setQuadrant1Text as any)((e as any)[s]);
            break;
          case 58:
            ((c as any).setQuadrant2Text as any)((e as any)[s]);
            break;
          case 59:
            ((c as any).setQuadrant3Text as any)((e as any)[s]);
            break;
          case 60:
            ((c as any).setQuadrant4Text as any)((e as any)[s]);
            break;
          case 64:
            (this as any).$ = {
              text: (e as any)[s],
              type: "text"
            };
            break;
          case 65:
            (this as any).$ = {
              text: ((((e as any)[(s as any) - (1 as any)] as any).text as any) + ("" as any) as any) + ((e as any)[s] as any),
              type: ((e as any)[(s as any) - (1 as any)] as any).type
            };
            break;
          case 66:
            (this as any).$ = {
              text: (e as any)[s],
              type: "text"
            };
            break;
          case 67:
            (this as any).$ = {
              text: (e as any)[s],
              type: "markdown"
            };
            break;
          case 68:
            (this as any).$ = (e as any)[s];
            break;
          case 69:
            (this as any).$ = (((e as any)[(s as any) - (1 as any)] as any) + ("" as any) as any) + ((e as any)[s] as any);
            break;
        }
      }, "anonymous"),
      table: [{
        18: n,
        26: 1,
        27: 2,
        28: f,
        55: d,
        56: h,
        57: p
      }, {
        1: [3]
      }, {
        18: n,
        26: 8,
        27: 2,
        28: f,
        55: d,
        56: h,
        57: p
      }, {
        18: n,
        26: 9,
        27: 2,
        28: f,
        55: d,
        56: h,
        57: p
      }, (t as any)(y, [2, 33], {
        29: 10
      }), (t as any)(_, [2, 61]), (t as any)(_, [2, 62]), (t as any)(_, [2, 63]), {
        1: [2, 30]
      }, {
        1: [2, 31]
      }, (t as any)(a, k, {
        30: 11,
        31: 12,
        24: 13,
        32: 15,
        33: 16,
        34: 17,
        43: 30,
        58: 31,
        1: [2, 32],
        4: u,
        5: T,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        18: ht,
        25: xt,
        35: ft,
        37: gt,
        39: ct,
        41: _t,
        42: dt,
        48: i,
        50: Vt,
        51: It,
        52: wt,
        53: Bt,
        54: Rt,
        60: U,
        61: Q,
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }), (t as any)(y, [2, 34]), {
        27: 46,
        55: d,
        56: h,
        57: p
      }, (t as any)(a, [2, 37]), (t as any)(a, k, {
        24: 13,
        32: 15,
        33: 16,
        34: 17,
        43: 30,
        58: 31,
        31: 47,
        4: u,
        5: T,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        18: ht,
        25: xt,
        35: ft,
        37: gt,
        39: ct,
        41: _t,
        42: dt,
        48: i,
        50: Vt,
        51: It,
        52: wt,
        53: Bt,
        54: Rt,
        60: U,
        61: Q,
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }), (t as any)(a, [2, 39]), (t as any)(a, [2, 40]), (t as any)(a, [2, 41]), {
        36: [1, 48]
      }, {
        38: [1, 49]
      }, {
        40: [1, 50]
      }, (t as any)(a, [2, 45]), (t as any)(a, [2, 46]), {
        18: [1, 51]
      }, {
        4: u,
        5: T,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        43: 52,
        58: 31,
        60: U,
        61: Q,
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }, {
        4: u,
        5: T,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        43: 53,
        58: 31,
        60: U,
        61: Q,
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }, {
        4: u,
        5: T,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        43: 54,
        58: 31,
        60: U,
        61: Q,
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }, {
        4: u,
        5: T,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        43: 55,
        58: 31,
        60: U,
        61: Q,
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }, {
        4: u,
        5: T,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        43: 56,
        58: 31,
        60: U,
        61: Q,
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }, {
        4: u,
        5: T,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        43: 57,
        58: 31,
        60: U,
        61: Q,
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }, {
        4: u,
        5: T,
        8: H,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        18: X,
        44: [1, 58],
        47: [1, 59],
        58: 61,
        59: 60,
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }, (t as any)(E, [2, 64]), (t as any)(E, [2, 66]), (t as any)(E, [2, 67]), (t as any)(E, [2, 70]), (t as any)(E, [2, 71]), (t as any)(E, [2, 72]), (t as any)(E, [2, 73]), (t as any)(E, [2, 74]), (t as any)(E, [2, 75]), (t as any)(E, [2, 76]), (t as any)(E, [2, 77]), (t as any)(E, [2, 78]), (t as any)(E, [2, 79]), (t as any)(E, [2, 80]), (t as any)(E, [2, 81]), (t as any)(y, [2, 35]), (t as any)(a, [2, 38]), (t as any)(a, [2, 42]), (t as any)(a, [2, 43]), (t as any)(a, [2, 44]), {
        3: 65,
        4: Nt,
        5: Wt,
        6: Ut,
        7: Qt,
        8: Ot,
        9: Ht,
        10: Xt,
        11: Mt,
        12: Yt,
        13: jt,
        14: Gt,
        15: Kt,
        21: 64
      }, (t as any)(a, [2, 53], {
        59: 60,
        58: 61,
        4: u,
        5: T,
        8: H,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        18: X,
        49: [1, 78],
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }), (t as any)(a, [2, 56], {
        59: 60,
        58: 61,
        4: u,
        5: T,
        8: H,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        18: X,
        49: [1, 79],
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }), (t as any)(a, [2, 57], {
        59: 60,
        58: 61,
        4: u,
        5: T,
        8: H,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        18: X,
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }), (t as any)(a, [2, 58], {
        59: 60,
        58: 61,
        4: u,
        5: T,
        8: H,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        18: X,
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }), (t as any)(a, [2, 59], {
        59: 60,
        58: 61,
        4: u,
        5: T,
        8: H,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        18: X,
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }), (t as any)(a, [2, 60], {
        59: 60,
        58: 61,
        4: u,
        5: T,
        8: H,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        18: X,
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }), {
        45: [1, 80]
      }, {
        44: [1, 81]
      }, (t as any)(E, [2, 65]), (t as any)(E, [2, 82]), (t as any)(E, [2, 83]), (t as any)(E, [2, 84]), {
        3: 83,
        4: Nt,
        5: Wt,
        6: Ut,
        7: Qt,
        8: Ot,
        9: Ht,
        10: Xt,
        11: Mt,
        12: Yt,
        13: jt,
        14: Gt,
        15: Kt,
        18: [1, 82]
      }, (t as any)(w, [2, 23]), (t as any)(w, [2, 1]), (t as any)(w, [2, 2]), (t as any)(w, [2, 3]), (t as any)(w, [2, 4]), (t as any)(w, [2, 5]), (t as any)(w, [2, 6]), (t as any)(w, [2, 7]), (t as any)(w, [2, 8]), (t as any)(w, [2, 9]), (t as any)(w, [2, 10]), (t as any)(w, [2, 11]), (t as any)(w, [2, 12]), (t as any)(a, [2, 52], {
        58: 31,
        43: 84,
        4: u,
        5: T,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        60: U,
        61: Q,
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }), (t as any)(a, [2, 55], {
        58: 31,
        43: 85,
        4: u,
        5: T,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        60: U,
        61: Q,
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }), {
        46: [1, 86]
      }, {
        45: [1, 87]
      }, {
        4: K,
        5: Z,
        6: J,
        8: $,
        11: tt,
        13: et,
        16: 90,
        17: it,
        18: at,
        19: nt,
        20: st,
        22: 89,
        23: 88
      }, (t as any)(w, [2, 24]), (t as any)(a, [2, 51], {
        59: 60,
        58: 61,
        4: u,
        5: T,
        8: H,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        18: X,
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }), (t as any)(a, [2, 54], {
        59: 60,
        58: 61,
        4: u,
        5: T,
        8: H,
        10: q,
        12: m,
        13: b,
        14: g,
        15: A,
        18: X,
        63: F,
        64: P,
        65: v,
        66: C,
        67: L
      }), (t as any)(a, [2, 47], {
        22: 89,
        16: 90,
        23: 101,
        4: K,
        5: Z,
        6: J,
        8: $,
        11: tt,
        13: et,
        17: it,
        18: at,
        19: nt,
        20: st
      }), {
        46: [1, 102]
      }, (t as any)(a, [2, 29], {
        10: At
      }), (t as any)(Zt, [2, 27], {
        16: 104,
        4: K,
        5: Z,
        6: J,
        8: $,
        11: tt,
        13: et,
        17: it,
        18: at,
        19: nt,
        20: st
      }), (t as any)(N, [2, 25]), (t as any)(N, [2, 13]), (t as any)(N, [2, 14]), (t as any)(N, [2, 15]), (t as any)(N, [2, 16]), (t as any)(N, [2, 17]), (t as any)(N, [2, 18]), (t as any)(N, [2, 19]), (t as any)(N, [2, 20]), (t as any)(N, [2, 21]), (t as any)(N, [2, 22]), (t as any)(a, [2, 49], {
        10: At
      }), (t as any)(a, [2, 48], {
        22: 89,
        16: 90,
        23: 105,
        4: K,
        5: Z,
        6: J,
        8: $,
        11: tt,
        13: et,
        17: it,
        18: at,
        19: nt,
        20: st
      }), {
        4: K,
        5: Z,
        6: J,
        8: $,
        11: tt,
        13: et,
        16: 90,
        17: it,
        18: at,
        19: nt,
        20: st,
        22: 106
      }, (t as any)(N, [2, 26]), (t as any)(a, [2, 50], {
        10: At
      }), (t as any)(Zt, [2, 28], {
        16: 104,
        4: K,
        5: Z,
        6: J,
        8: $,
        11: tt,
        13: et,
        17: it,
        18: at,
        19: nt,
        20: st
      })],
      defaultActions: {
        8: [2, 30],
        9: [2, 31]
      },
      parseError: (o as any)(function (this: any, r: any, l: any): any {
        if ((l as any).recoverable) ((this as any).trace as any)(r);else {
          var x: any = new (Error as any)(r);
          throw (x as any).hash = l, x;
        }
      }, "parseError"),
      parse: (o as any)(function (this: any, r: any): any {
        var Ft: any;
        var l: any = this,
          x: any = [0],
          c: any = [],
          S: any = [null],
          e: any = [],
          ut: any = (this as any).table,
          s: any = "",
          yt: any = 0,
          Jt: any = 0,
          me: number = 2,
          $t: number = 1,
          be: any = (((e as any).slice as any).call as any)(arguments, 1),
          D: any = ((Object as any).create as any)((this as any).lexer),
          j: any = {
            yy: {}
          };
        for (Ft in (this as any).yy) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).yy, Ft) && (((j as any).yy as any)[Ft] = ((this as any).yy as any)[Ft]);
        ((D as any).setInput as any)(r, (j as any).yy), ((j as any).yy as any).lexer = D, ((j as any).yy as any).parser = this, (typeof (D as any).yylloc as any) > ("u" as any) && ((D as any).yylloc = {});
        var Pt: any = (D as any).yylloc;
        ((e as any).push as any)(Pt);
        var Se: any = (D as any).options && ((D as any).options as any).ranges;
        (typeof ((j as any).yy as any).parseError as any) == ("function" as any) ? (this as any).parseError = ((j as any).yy as any).parseError : (this as any).parseError = (((Object as any).getPrototypeOf as any)(this) as any).parseError;
        function _e(this: any, R: any): any {
          (x as any).length = ((x as any).length as any) - ((2 as any) * (R as any) as any), (S as any).length = ((S as any).length as any) - (R as any), (e as any).length = ((e as any).length as any) - (R as any);
        }
        (o as any)(_e, "popStack");
        function te(this: any): any {
          var R: any;
          return R = ((c as any).pop as any)() || ((D as any).lex as any)() || $t, (typeof R as any) != ("number" as any) && (R instanceof Array && (c = R, R = ((c as any).pop as any)()), R = ((l as any).symbols_ as any)[R] || R), R;
        }
        (o as any)(te, "lex");
        for (var B: any, G: any, W: any, vt: any, rt: any = {}, Tt: any, M: any, ee: any, qt: any;;) {
          if (G = (x as any)[((x as any).length as any) - (1 as any)], ((this as any).defaultActions as any)[G] ? W = ((this as any).defaultActions as any)[G] : (((B as any) === (null as any) || (typeof B as any) > ("u" as any)) && (B = (te as any)()), W = (ut as any)[G] && ((ut as any)[G] as any)[B]), (typeof W as any) > ("u" as any) || !(W as any).length || !(W as any)[0]) {
            var Ct: any = "";
            qt = [];
            for (Tt in (ut as any)[G]) ((this as any).terminals_ as any)[Tt] && (Tt as any) > (me as any) && ((qt as any).push as any)((("'" as any) + (((this as any).terminals_ as any)[Tt] as any) as any) + ("'" as any));
            (D as any).showPosition ? Ct = (((((((("Parse error on line " as any) + ((yt as any) + (1 as any) as any) as any) + (`:
` as any) as any) + (((D as any).showPosition as any)() as any) as any) + (`
Expecting ` as any) as any) + (((qt as any).join as any)(", ") as any) as any) + (", got '" as any) as any) + ((((this as any).terminals_ as any)[B] || B) as any) as any) + ("'" as any) : Ct = ((("Parse error on line " as any) + ((yt as any) + (1 as any) as any) as any) + (": Unexpected " as any) as any) + (((B as any) == ($t as any) ? "end of input" : (("'" as any) + ((((this as any).terminals_ as any)[B] || B) as any) as any) + ("'" as any)) as any), ((this as any).parseError as any)(Ct, {
              text: (D as any).match,
              token: ((this as any).terminals_ as any)[B] || B,
              line: (D as any).yylineno,
              loc: Pt,
              expected: qt
            });
          }
          if ((W as any)[0] instanceof Array && ((W as any).length as any) > (1 as any)) throw new (Error as any)(((("Parse Error: multiple actions possible at state: " as any) + (G as any) as any) + (", token: " as any) as any) + (B as any));
          switch ((W as any)[0]) {
            case 1:
              ((x as any).push as any)(B), ((S as any).push as any)((D as any).yytext), ((e as any).push as any)((D as any).yylloc), ((x as any).push as any)((W as any)[1]), B = null, Jt = (D as any).yyleng, s = (D as any).yytext, yt = (D as any).yylineno, Pt = (D as any).yylloc;
              break;
            case 2:
              if (M = (((this as any).productions_ as any)[(W as any)[1]] as any)[1], (rt as any).$ = (S as any)[((S as any).length as any) - (M as any)], (rt as any)._$ = {
                first_line: ((e as any)[((e as any).length as any) - ((M || 1) as any)] as any).first_line,
                last_line: ((e as any)[((e as any).length as any) - (1 as any)] as any).last_line,
                first_column: ((e as any)[((e as any).length as any) - ((M || 1) as any)] as any).first_column,
                last_column: ((e as any)[((e as any).length as any) - (1 as any)] as any).last_column
              }, Se && (((rt as any)._$ as any).range = [(((e as any)[((e as any).length as any) - ((M || 1) as any)] as any).range as any)[0], (((e as any)[((e as any).length as any) - (1 as any)] as any).range as any)[1]]), vt = (((this as any).performAction as any).apply as any)(rt, (([s, Jt, yt, (j as any).yy, (W as any)[1], S, e] as any).concat as any)(be)), (typeof vt as any) < ("u" as any)) return vt;
              M && (x = ((x as any).slice as any)(0, ((-1 as any) * (M as any) as any) * (2 as any)), S = ((S as any).slice as any)(0, (-1 as any) * (M as any)), e = ((e as any).slice as any)(0, (-1 as any) * (M as any))), ((x as any).push as any)((((this as any).productions_ as any)[(W as any)[1]] as any)[0]), ((S as any).push as any)((rt as any).$), ((e as any).push as any)((rt as any)._$), ee = ((ut as any)[(x as any)[((x as any).length as any) - (2 as any)]] as any)[(x as any)[((x as any).length as any) - (1 as any)]], ((x as any).push as any)(ee);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }, "parse")
    },
    qe: any = (function (this: any): any {
      var Y: any = {
        EOF: 1,
        parseError: (o as any)(function (this: any, l: any, x: any): any {
          if (((this as any).yy as any).parser) ((((this as any).yy as any).parser as any).parseError as any)(l, x);else throw new (Error as any)(l);
        }, "parseError"),
        setInput: (o as any)(function (this: any, r: any, l: any): any {
          return (this as any).yy = l || (this as any).yy || {}, (this as any)._input = r, (this as any)._more = (this as any)._backtrack = (this as any).done = !1, (this as any).yylineno = (this as any).yyleng = 0, (this as any).yytext = (this as any).matched = (this as any).match = "", (this as any).conditionStack = ["INITIAL"], (this as any).yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [0, 0]), (this as any).offset = 0, this;
        }, "setInput"),
        input: (o as any)(function (this: any): any {
          var r: any = ((this as any)._input as any)[0];
          (this as any).yytext += r, (this as any).yyleng++, (this as any).offset++, (this as any).match += r, (this as any).matched += r;
          var l: any = ((r as any).match as any)(/(?:\r\n?|\n).*/g);
          return l ? ((this as any).yylineno++, ((this as any).yylloc as any).last_line++) : ((this as any).yylloc as any).last_column++, ((this as any).options as any).ranges && (((this as any).yylloc as any).range as any)[1]++, (this as any)._input = (((this as any)._input as any).slice as any)(1), r;
        }, "input"),
        unput: (o as any)(function (this: any, r: any): any {
          var l: any = (r as any).length,
            x: any = ((r as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any)._input = (r as any) + ((this as any)._input as any), (this as any).yytext = (((this as any).yytext as any).substr as any)(0, (((this as any).yytext as any).length as any) - (l as any)), (this as any).offset -= l;
          var c: any = (((this as any).match as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any).match = (((this as any).match as any).substr as any)(0, (((this as any).match as any).length as any) - (1 as any)), (this as any).matched = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (1 as any)), ((x as any).length as any) - (1 as any) && ((this as any).yylineno -= ((x as any).length as any) - (1 as any));
          var S: any = ((this as any).yylloc as any).range;
          return (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).first_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).first_column,
            last_column: x ? (((((x as any).length as any) === ((c as any).length as any) ? ((this as any).yylloc as any).first_column : 0) as any) + (((c as any)[((c as any).length as any) - ((x as any).length as any)] as any).length as any) as any) - (((x as any)[0] as any).length as any) : (((this as any).yylloc as any).first_column as any) - (l as any)
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(S as any)[0], (((S as any)[0] as any) + ((this as any).yyleng as any) as any) - (l as any)]), (this as any).yyleng = ((this as any).yytext as any).length, this;
        }, "unput"),
        more: (o as any)(function (this: any): any {
          return (this as any)._more = !0, this;
        }, "more"),
        reject: (o as any)(function (this: any): any {
          if (((this as any).options as any).backtrack_lexer) (this as any)._backtrack = !0;else return ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
          return this;
        }, "reject"),
        less: (o as any)(function (this: any, r: any): any {
          ((this as any).unput as any)((((this as any).match as any).slice as any)(r));
        }, "less"),
        pastInput: (o as any)(function (this: any): any {
          var r: any = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (((this as any).match as any).length as any));
          return ((((r as any).length as any) > (20 as any) ? "..." : "") as any) + (((((r as any).substr as any)(-20) as any).replace as any)(/\n/g, "") as any);
        }, "pastInput"),
        upcomingInput: (o as any)(function (this: any): any {
          var r: any = (this as any).match;
          return ((r as any).length as any) < (20 as any) && (r += (((this as any)._input as any).substr as any)(0, (20 as any) - ((r as any).length as any))), (((((r as any).substr as any)(0, 20) as any) + ((((r as any).length as any) > (20 as any) ? "..." : "") as any) as any).replace as any)(/\n/g, "");
        }, "upcomingInput"),
        showPosition: (o as any)(function (this: any): any {
          var r: any = ((this as any).pastInput as any)(),
            l: any = ((new (Array as any)(((r as any).length as any) + (1 as any)) as any).join as any)("-");
          return ((((r as any) + (((this as any).upcomingInput as any)() as any) as any) + (`
` as any) as any) + (l as any) as any) + ("^" as any);
        }, "showPosition"),
        test_match: (o as any)(function (this: any, r: any, l: any): any {
          var e: any;
          var x: any, c: any, S: any;
          if (((this as any).options as any).backtrack_lexer && (S = {
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
          }, ((this as any).options as any).ranges && (((S as any).yylloc as any).range = ((((this as any).yylloc as any).range as any).slice as any)(0))), c = (((r as any)[0] as any).match as any)(/(?:\r\n?|\n).*/g), c && ((this as any).yylineno += (c as any).length), (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).last_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).last_column,
            last_column: c ? (((c as any)[((c as any).length as any) - (1 as any)] as any).length as any) - ((((((c as any)[((c as any).length as any) - (1 as any)] as any).match as any)(/\r?\n?/) as any)[0] as any).length as any) : (((this as any).yylloc as any).last_column as any) + (((r as any)[0] as any).length as any)
          }, (this as any).yytext += (r as any)[0], (this as any).match += (r as any)[0], (this as any).matches = r, (this as any).yyleng = ((this as any).yytext as any).length, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(this as any).offset, (this as any).offset += (this as any).yyleng]), (this as any)._more = !1, (this as any)._backtrack = !1, (this as any)._input = (((this as any)._input as any).slice as any)(((r as any)[0] as any).length), (this as any).matched += (r as any)[0], x = (((this as any).performAction as any).call as any)(this, (this as any).yy, this, l, ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]), (this as any).done && (this as any)._input && ((this as any).done = !1), x) return x;
          if ((this as any)._backtrack) {
            for (e in S) (this as any)[e] = (S as any)[e];
            return !1;
          }
          return !1;
        }, "test_match"),
        next: (o as any)(function (this: any): any {
          if ((this as any).done) return (this as any).EOF;
          (this as any)._input || ((this as any).done = !0);
          var r: any, l: any, x: any, c: any;
          (this as any)._more || ((this as any).yytext = "", (this as any).match = "");
          for (var S: any = ((this as any)._currentRules as any)(), e: any = 0; (e as any) < ((S as any).length as any); e++) if (x = (((this as any)._input as any).match as any)(((this as any).rules as any)[(S as any)[e]]), x && (!l || (((x as any)[0] as any).length as any) > (((l as any)[0] as any).length as any))) {
            if (l = x, c = e, ((this as any).options as any).backtrack_lexer) {
              if (r = ((this as any).test_match as any)(x, (S as any)[e]), (r as any) !== (!1 as any)) return r;
              if ((this as any)._backtrack) {
                l = !1;
                continue;
              } else return !1;
            } else if (!((this as any).options as any).flex) break;
          }
          return l ? (r = ((this as any).test_match as any)(l, (S as any)[c]), (r as any) !== (!1 as any) ? r : !1) : ((this as any)._input as any) === ("" as any) ? (this as any).EOF : ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. Unrecognized text.
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
        }, "next"),
        lex: (o as any)(function (this: any): any {
          var l: any = ((this as any).next as any)();
          return l || ((this as any).lex as any)();
        }, "lex"),
        begin: (o as any)(function (this: any, l: any): any {
          (((this as any).conditionStack as any).push as any)(l);
        }, "begin"),
        popState: (o as any)(function (this: any): any {
          var l: any = (((this as any).conditionStack as any).length as any) - (1 as any);
          return (l as any) > (0 as any) ? (((this as any).conditionStack as any).pop as any)() : ((this as any).conditionStack as any)[0];
        }, "popState"),
        _currentRules: (o as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length && ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)] ? (((this as any).conditions as any)[((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]] as any).rules : (((this as any).conditions as any).INITIAL as any).rules;
        }, "_currentRules"),
        topState: (o as any)(function (this: any, l: any): any {
          return l = ((((this as any).conditionStack as any).length as any) - (1 as any) as any) - (((Math as any).abs as any)(l || 0) as any), (l as any) >= (0 as any) ? ((this as any).conditionStack as any)[l] : "INITIAL";
        }, "topState"),
        pushState: (o as any)(function (this: any, l: any): any {
          ((this as any).begin as any)(l);
        }, "pushState"),
        stateStackSize: (o as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": !0
        },
        performAction: (o as any)(function (this: any, l: any, x: any, c: any, S: any): any {
          switch (c) {
            case 0:
              break;
            case 1:
              break;
            case 2:
              return 55;
            case 3:
              break;
            case 4:
              return ((this as any).begin as any)("title"), 35;
            case 5:
              return ((this as any).popState as any)(), "title_value";
            case 6:
              return ((this as any).begin as any)("acc_title"), 37;
            case 7:
              return ((this as any).popState as any)(), "acc_title_value";
            case 8:
              return ((this as any).begin as any)("acc_descr"), 39;
            case 9:
              return ((this as any).popState as any)(), "acc_descr_value";
            case 10:
              ((this as any).begin as any)("acc_descr_multiline");
              break;
            case 11:
              ((this as any).popState as any)();
              break;
            case 12:
              return "acc_descr_multiline_value";
            case 13:
              return 48;
            case 14:
              return 50;
            case 15:
              return 49;
            case 16:
              return 51;
            case 17:
              return 52;
            case 18:
              return 53;
            case 19:
              return 54;
            case 20:
              return 25;
            case 21:
              ((this as any).begin as any)("md_string");
              break;
            case 22:
              return "MD_STR";
            case 23:
              ((this as any).popState as any)();
              break;
            case 24:
              ((this as any).begin as any)("string");
              break;
            case 25:
              ((this as any).popState as any)();
              break;
            case 26:
              return "STR";
            case 27:
              ((this as any).begin as any)("class_name");
              break;
            case 28:
              return ((this as any).popState as any)(), 47;
            case 29:
              return ((this as any).begin as any)("point_start"), 44;
            case 30:
              return ((this as any).begin as any)("point_x"), 45;
            case 31:
              ((this as any).popState as any)();
              break;
            case 32:
              ((this as any).popState as any)(), ((this as any).begin as any)("point_y");
              break;
            case 33:
              return ((this as any).popState as any)(), 46;
            case 34:
              return 28;
            case 35:
              return 4;
            case 36:
              return 15;
            case 37:
              return 11;
            case 38:
              return 64;
            case 39:
              return 10;
            case 40:
              return 65;
            case 41:
              return 65;
            case 42:
              return 14;
            case 43:
              return 13;
            case 44:
              return 67;
            case 45:
              return 66;
            case 46:
              return 12;
            case 47:
              return 8;
            case 48:
              return 5;
            case 49:
              return 18;
            case 50:
              return 56;
            case 51:
              return 63;
            case 52:
              return 57;
          }
        }, "anonymous"),
        rules: [/^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:title\b)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?: *x-axis *)/i, /^(?: *y-axis *)/i, /^(?: *--+> *)/i, /^(?: *quadrant-1 *)/i, /^(?: *quadrant-2 *)/i, /^(?: *quadrant-3 *)/i, /^(?: *quadrant-4 *)/i, /^(?:classDef\b)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?::::)/i, /^(?:^\w+)/i, /^(?:\s*:\s*\[\s*)/i, /^(?:(1)|(0(.\d+)?))/i, /^(?:\s*\] *)/i, /^(?:\s*,\s*)/i, /^(?:(1)|(0(.\d+)?))/i, /^(?: *quadrantChart *)/i, /^(?:[A-Za-z]+)/i, /^(?:[^\x00-\x7F]+)/i, /^(?::)/i, /^(?:\+)/i, /^(?:,)/i, /^(?:=)/i, /^(?:=)/i, /^(?:\*)/i, /^(?:#)/i, /^(?:[\_])/i, /^(?:\.)/i, /^(?:&)/i, /^(?:-)/i, /^(?:[0-9]+)/i, /^(?:\s)/i, /^(?:;)/i, /^(?:[!"#$%&'*+,-.`?\\_/])/i, /^(?:$)/i],
        conditions: {
          class_name: {
            rules: [28],
            inclusive: !1
          },
          point_y: {
            rules: [33],
            inclusive: !1
          },
          point_x: {
            rules: [32],
            inclusive: !1
          },
          point_start: {
            rules: [30, 31],
            inclusive: !1
          },
          acc_descr_multiline: {
            rules: [11, 12],
            inclusive: !1
          },
          acc_descr: {
            rules: [9],
            inclusive: !1
          },
          acc_title: {
            rules: [7],
            inclusive: !1
          },
          title: {
            rules: [5],
            inclusive: !1
          },
          md_string: {
            rules: [22, 23],
            inclusive: !1
          },
          string: {
            rules: [25, 26],
            inclusive: !1
          },
          INITIAL: {
            rules: [0, 1, 2, 3, 4, 6, 8, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 24, 27, 29, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
            inclusive: !0
          }
        }
      };
      return Y;
    } as any)();
  (kt as any).lexer = qe;
  function pt(this: any): any {
    (this as any).yy = {};
  }
  return (o as any)(pt, "Parser"), (pt as any).prototype = kt, (kt as any).Parser = pt, new (pt as any)();
} as any)();
(Et as any).parser = Et;
var ze: any = Et,
  I: any = (Ee as any)(),
  ot: any,
  Ve: any = (ot = class {
    declare data: any;
    declare themeConfig: any;
    declare config: any;
    declare classes: any;
    [key: string]: any;
    constructor() {
      (this as any).classes = new (Map as any)(), (this as any).config = ((this as any).getDefaultConfig as any)(), (this as any).themeConfig = ((this as any).getDefaultThemeConfig as any)(), (this as any).data = ((this as any).getDefaultData as any)();
    }
    getDefaultData(): any {
      return {
        titleText: "",
        quadrant1Text: "",
        quadrant2Text: "",
        quadrant3Text: "",
        quadrant4Text: "",
        xAxisLeftText: "",
        xAxisRightText: "",
        yAxisBottomText: "",
        yAxisTopText: "",
        points: []
      };
    }
    getDefaultConfig(): any {
      return {
        showXAxis: !0,
        showYAxis: !0,
        showTitle: !0,
        chartHeight: (z as any).quadrantChart?.chartWidth || 500,
        chartWidth: (z as any).quadrantChart?.chartHeight || 500,
        titlePadding: (z as any).quadrantChart?.titlePadding || 10,
        titleFontSize: (z as any).quadrantChart?.titleFontSize || 20,
        quadrantPadding: (z as any).quadrantChart?.quadrantPadding || 5,
        xAxisLabelPadding: (z as any).quadrantChart?.xAxisLabelPadding || 5,
        yAxisLabelPadding: (z as any).quadrantChart?.yAxisLabelPadding || 5,
        xAxisLabelFontSize: (z as any).quadrantChart?.xAxisLabelFontSize || 16,
        yAxisLabelFontSize: (z as any).quadrantChart?.yAxisLabelFontSize || 16,
        quadrantLabelFontSize: (z as any).quadrantChart?.quadrantLabelFontSize || 16,
        quadrantTextTopPadding: (z as any).quadrantChart?.quadrantTextTopPadding || 5,
        pointTextPadding: (z as any).quadrantChart?.pointTextPadding || 5,
        pointLabelFontSize: (z as any).quadrantChart?.pointLabelFontSize || 12,
        pointRadius: (z as any).quadrantChart?.pointRadius || 5,
        xAxisPosition: (z as any).quadrantChart?.xAxisPosition || "top",
        yAxisPosition: (z as any).quadrantChart?.yAxisPosition || "left",
        quadrantInternalBorderStrokeWidth: (z as any).quadrantChart?.quadrantInternalBorderStrokeWidth || 1,
        quadrantExternalBorderStrokeWidth: (z as any).quadrantChart?.quadrantExternalBorderStrokeWidth || 2
      };
    }
    getDefaultThemeConfig(): any {
      return {
        quadrant1Fill: (I as any).quadrant1Fill,
        quadrant2Fill: (I as any).quadrant2Fill,
        quadrant3Fill: (I as any).quadrant3Fill,
        quadrant4Fill: (I as any).quadrant4Fill,
        quadrant1TextFill: (I as any).quadrant1TextFill,
        quadrant2TextFill: (I as any).quadrant2TextFill,
        quadrant3TextFill: (I as any).quadrant3TextFill,
        quadrant4TextFill: (I as any).quadrant4TextFill,
        quadrantPointFill: (I as any).quadrantPointFill,
        quadrantPointTextFill: (I as any).quadrantPointTextFill,
        quadrantXAxisTextFill: (I as any).quadrantXAxisTextFill,
        quadrantYAxisTextFill: (I as any).quadrantYAxisTextFill,
        quadrantTitleFill: (I as any).quadrantTitleFill,
        quadrantInternalBorderStrokeFill: (I as any).quadrantInternalBorderStrokeFill,
        quadrantExternalBorderStrokeFill: (I as any).quadrantExternalBorderStrokeFill
      };
    }
    clear(): any {
      (this as any).config = ((this as any).getDefaultConfig as any)(), (this as any).themeConfig = ((this as any).getDefaultThemeConfig as any)(), (this as any).data = ((this as any).getDefaultData as any)(), (this as any).classes = new (Map as any)(), ((bt as any).info as any)("clear called");
    }
    setData(n: any): any {
      (this as any).data = {
        ...(this as any).data,
        ...n
      };
    }
    addPoints(n: any): any {
      ((this as any).data as any).points = [...n, ...((this as any).data as any).points];
    }
    addClass(n: any, f: any): any {
      (((this as any).classes as any).set as any)(n, f);
    }
    setConfig(n: any): any {
      ((bt as any).trace as any)("setConfig called with: ", n), (this as any).config = {
        ...(this as any).config,
        ...n
      };
    }
    setThemeConfig(n: any): any {
      ((bt as any).trace as any)("setThemeConfig called with: ", n), (this as any).themeConfig = {
        ...(this as any).themeConfig,
        ...n
      };
    }
    calculateSpace(n: any, f: any, d: any, h: any): any {
      const p: any = ((((this as any).config as any).xAxisLabelPadding as any) * (2 as any) as any) + (((this as any).config as any).xAxisLabelFontSize as any),
        y: any = {
          top: (n as any) === ("top" as any) && f ? p : 0,
          bottom: (n as any) === ("bottom" as any) && f ? p : 0
        },
        _: any = ((((this as any).config as any).yAxisLabelPadding as any) * (2 as any) as any) + (((this as any).config as any).yAxisLabelFontSize as any),
        a: any = {
          left: (((this as any).config as any).yAxisPosition as any) === ("left" as any) && d ? _ : 0,
          right: (((this as any).config as any).yAxisPosition as any) === ("right" as any) && d ? _ : 0
        },
        k: any = (((this as any).config as any).titleFontSize as any) + ((((this as any).config as any).titlePadding as any) * (2 as any) as any),
        u: any = {
          top: h ? k : 0
        },
        T: any = (((this as any).config as any).quadrantPadding as any) + ((a as any).left as any),
        q: any = ((((this as any).config as any).quadrantPadding as any) + ((y as any).top as any) as any) + ((u as any).top as any),
        m: any = (((((this as any).config as any).chartWidth as any) - ((((this as any).config as any).quadrantPadding as any) * (2 as any) as any) as any) - ((a as any).left as any) as any) - ((a as any).right as any),
        b: any = ((((((this as any).config as any).chartHeight as any) - ((((this as any).config as any).quadrantPadding as any) * (2 as any) as any) as any) - ((y as any).top as any) as any) - ((y as any).bottom as any) as any) - ((u as any).top as any),
        g: any = (m as any) / (2 as any),
        A: any = (b as any) / (2 as any);
      return {
        xAxisSpace: y,
        yAxisSpace: a,
        titleSpace: u,
        quadrantSpace: {
          quadrantLeft: T,
          quadrantTop: q,
          quadrantWidth: m,
          quadrantHalfWidth: g,
          quadrantHeight: b,
          quadrantHalfHeight: A
        }
      };
    }
    getAxisLabels(n: any, f: any, d: any, h: any): any {
      const {
          quadrantSpace: p,
          titleSpace: y
        }: any = h,
        {
          quadrantHalfHeight: _,
          quadrantHeight: a,
          quadrantLeft: k,
          quadrantHalfWidth: u,
          quadrantTop: T,
          quadrantWidth: q
        }: any = p,
        m: any = !!((this as any).data as any).xAxisRightText,
        b: any = !!((this as any).data as any).yAxisTopText,
        g: any = [];
      return ((this as any).data as any).xAxisLeftText && f && ((g as any).push as any)({
        text: ((this as any).data as any).xAxisLeftText,
        fill: ((this as any).themeConfig as any).quadrantXAxisTextFill,
        x: (k as any) + ((m ? (u as any) / (2 as any) : 0) as any),
        y: (n as any) === ("top" as any) ? (((this as any).config as any).xAxisLabelPadding as any) + ((y as any).top as any) : (((((this as any).config as any).xAxisLabelPadding as any) + (T as any) as any) + (a as any) as any) + (((this as any).config as any).quadrantPadding as any),
        fontSize: ((this as any).config as any).xAxisLabelFontSize,
        verticalPos: m ? "center" : "left",
        horizontalPos: "top",
        rotation: 0
      }), ((this as any).data as any).xAxisRightText && f && ((g as any).push as any)({
        text: ((this as any).data as any).xAxisRightText,
        fill: ((this as any).themeConfig as any).quadrantXAxisTextFill,
        x: ((k as any) + (u as any) as any) + ((m ? (u as any) / (2 as any) : 0) as any),
        y: (n as any) === ("top" as any) ? (((this as any).config as any).xAxisLabelPadding as any) + ((y as any).top as any) : (((((this as any).config as any).xAxisLabelPadding as any) + (T as any) as any) + (a as any) as any) + (((this as any).config as any).quadrantPadding as any),
        fontSize: ((this as any).config as any).xAxisLabelFontSize,
        verticalPos: m ? "center" : "left",
        horizontalPos: "top",
        rotation: 0
      }), ((this as any).data as any).yAxisBottomText && d && ((g as any).push as any)({
        text: ((this as any).data as any).yAxisBottomText,
        fill: ((this as any).themeConfig as any).quadrantYAxisTextFill,
        x: (((this as any).config as any).yAxisPosition as any) === ("left" as any) ? ((this as any).config as any).yAxisLabelPadding : (((((this as any).config as any).yAxisLabelPadding as any) + (k as any) as any) + (q as any) as any) + (((this as any).config as any).quadrantPadding as any),
        y: ((T as any) + (a as any) as any) - ((b ? (_ as any) / (2 as any) : 0) as any),
        fontSize: ((this as any).config as any).yAxisLabelFontSize,
        verticalPos: b ? "center" : "left",
        horizontalPos: "top",
        rotation: -90
      }), ((this as any).data as any).yAxisTopText && d && ((g as any).push as any)({
        text: ((this as any).data as any).yAxisTopText,
        fill: ((this as any).themeConfig as any).quadrantYAxisTextFill,
        x: (((this as any).config as any).yAxisPosition as any) === ("left" as any) ? ((this as any).config as any).yAxisLabelPadding : (((((this as any).config as any).yAxisLabelPadding as any) + (k as any) as any) + (q as any) as any) + (((this as any).config as any).quadrantPadding as any),
        y: ((T as any) + (_ as any) as any) - ((b ? (_ as any) / (2 as any) : 0) as any),
        fontSize: ((this as any).config as any).yAxisLabelFontSize,
        verticalPos: b ? "center" : "left",
        horizontalPos: "top",
        rotation: -90
      }), g;
    }
    getQuadrants(n: any): any {
      const {
          quadrantSpace: f
        }: any = n,
        {
          quadrantHalfHeight: d,
          quadrantLeft: h,
          quadrantHalfWidth: p,
          quadrantTop: y
        }: any = f,
        _: any = [{
          text: {
            text: ((this as any).data as any).quadrant1Text,
            fill: ((this as any).themeConfig as any).quadrant1TextFill,
            x: 0,
            y: 0,
            fontSize: ((this as any).config as any).quadrantLabelFontSize,
            verticalPos: "center",
            horizontalPos: "middle",
            rotation: 0
          },
          x: (h as any) + (p as any),
          y,
          width: p,
          height: d,
          fill: ((this as any).themeConfig as any).quadrant1Fill
        }, {
          text: {
            text: ((this as any).data as any).quadrant2Text,
            fill: ((this as any).themeConfig as any).quadrant2TextFill,
            x: 0,
            y: 0,
            fontSize: ((this as any).config as any).quadrantLabelFontSize,
            verticalPos: "center",
            horizontalPos: "middle",
            rotation: 0
          },
          x: h,
          y,
          width: p,
          height: d,
          fill: ((this as any).themeConfig as any).quadrant2Fill
        }, {
          text: {
            text: ((this as any).data as any).quadrant3Text,
            fill: ((this as any).themeConfig as any).quadrant3TextFill,
            x: 0,
            y: 0,
            fontSize: ((this as any).config as any).quadrantLabelFontSize,
            verticalPos: "center",
            horizontalPos: "middle",
            rotation: 0
          },
          x: h,
          y: (y as any) + (d as any),
          width: p,
          height: d,
          fill: ((this as any).themeConfig as any).quadrant3Fill
        }, {
          text: {
            text: ((this as any).data as any).quadrant4Text,
            fill: ((this as any).themeConfig as any).quadrant4TextFill,
            x: 0,
            y: 0,
            fontSize: ((this as any).config as any).quadrantLabelFontSize,
            verticalPos: "center",
            horizontalPos: "middle",
            rotation: 0
          },
          x: (h as any) + (p as any),
          y: (y as any) + (d as any),
          width: p,
          height: d,
          fill: ((this as any).themeConfig as any).quadrant4Fill
        }];
      for (const a of _) ((a as any).text as any).x = ((a as any).x as any) + (((a as any).width as any) / (2 as any) as any), ((((this as any).data as any).points as any).length as any) === (0 as any) ? (((a as any).text as any).y = ((a as any).y as any) + (((a as any).height as any) / (2 as any) as any), ((a as any).text as any).horizontalPos = "middle") : (((a as any).text as any).y = ((a as any).y as any) + (((this as any).config as any).quadrantTextTopPadding as any), ((a as any).text as any).horizontalPos = "top");
      return _;
    }
    getQuadrantPoints(n: any): any {
      const {
          quadrantSpace: f
        }: any = n,
        {
          quadrantHeight: d,
          quadrantLeft: h,
          quadrantTop: p,
          quadrantWidth: y
        }: any = f,
        _: any = (((((ie as any)() as any).domain as any)([0, 1]) as any).range as any)([h, (y as any) + (h as any)]),
        a: any = (((((ie as any)() as any).domain as any)([0, 1]) as any).range as any)([(d as any) + (p as any), p]);
      return ((((this as any).data as any).points as any).map as any)((u: any): any => {
        const T: any = (((this as any).classes as any).get as any)((u as any).className);
        return T && (u = {
          ...T,
          ...u
        }), {
          x: (_ as any)((u as any).x),
          y: (a as any)((u as any).y),
          fill: (u as any).color ?? ((this as any).themeConfig as any).quadrantPointFill,
          radius: (u as any).radius ?? ((this as any).config as any).pointRadius,
          text: {
            text: (u as any).text,
            fill: ((this as any).themeConfig as any).quadrantPointTextFill,
            x: (_ as any)((u as any).x),
            y: ((a as any)((u as any).y) as any) + (((this as any).config as any).pointTextPadding as any),
            verticalPos: "center",
            horizontalPos: "top",
            fontSize: ((this as any).config as any).pointLabelFontSize,
            rotation: 0
          },
          strokeColor: (u as any).strokeColor ?? ((this as any).themeConfig as any).quadrantPointFill,
          strokeWidth: (u as any).strokeWidth ?? "0px"
        };
      });
    }
    getBorders(n: any): any {
      const f: any = (((this as any).config as any).quadrantExternalBorderStrokeWidth as any) / (2 as any),
        {
          quadrantSpace: d
        }: any = n,
        {
          quadrantHalfHeight: h,
          quadrantHeight: p,
          quadrantLeft: y,
          quadrantHalfWidth: _,
          quadrantTop: a,
          quadrantWidth: k
        }: any = d;
      return [{
        strokeFill: ((this as any).themeConfig as any).quadrantExternalBorderStrokeFill,
        strokeWidth: ((this as any).config as any).quadrantExternalBorderStrokeWidth,
        x1: (y as any) - (f as any),
        y1: a,
        x2: ((y as any) + (k as any) as any) + (f as any),
        y2: a
      }, {
        strokeFill: ((this as any).themeConfig as any).quadrantExternalBorderStrokeFill,
        strokeWidth: ((this as any).config as any).quadrantExternalBorderStrokeWidth,
        x1: (y as any) + (k as any),
        y1: (a as any) + (f as any),
        x2: (y as any) + (k as any),
        y2: ((a as any) + (p as any) as any) - (f as any)
      }, {
        strokeFill: ((this as any).themeConfig as any).quadrantExternalBorderStrokeFill,
        strokeWidth: ((this as any).config as any).quadrantExternalBorderStrokeWidth,
        x1: (y as any) - (f as any),
        y1: (a as any) + (p as any),
        x2: ((y as any) + (k as any) as any) + (f as any),
        y2: (a as any) + (p as any)
      }, {
        strokeFill: ((this as any).themeConfig as any).quadrantExternalBorderStrokeFill,
        strokeWidth: ((this as any).config as any).quadrantExternalBorderStrokeWidth,
        x1: y,
        y1: (a as any) + (f as any),
        x2: y,
        y2: ((a as any) + (p as any) as any) - (f as any)
      }, {
        strokeFill: ((this as any).themeConfig as any).quadrantInternalBorderStrokeFill,
        strokeWidth: ((this as any).config as any).quadrantInternalBorderStrokeWidth,
        x1: (y as any) + (_ as any),
        y1: (a as any) + (f as any),
        x2: (y as any) + (_ as any),
        y2: ((a as any) + (p as any) as any) - (f as any)
      }, {
        strokeFill: ((this as any).themeConfig as any).quadrantInternalBorderStrokeFill,
        strokeWidth: ((this as any).config as any).quadrantInternalBorderStrokeWidth,
        x1: (y as any) + (f as any),
        y1: (a as any) + (h as any),
        x2: ((y as any) + (k as any) as any) - (f as any),
        y2: (a as any) + (h as any)
      }];
    }
    getTitle(n: any): any {
      if (n) return {
        text: ((this as any).data as any).titleText,
        fill: ((this as any).themeConfig as any).quadrantTitleFill,
        fontSize: ((this as any).config as any).titleFontSize,
        horizontalPos: "top",
        verticalPos: "center",
        rotation: 0,
        y: ((this as any).config as any).titlePadding,
        x: (((this as any).config as any).chartWidth as any) / (2 as any)
      };
    }
    build(): any {
      const n: any = ((this as any).config as any).showXAxis && !!(((this as any).data as any).xAxisLeftText || ((this as any).data as any).xAxisRightText),
        f: any = ((this as any).config as any).showYAxis && !!(((this as any).data as any).yAxisTopText || ((this as any).data as any).yAxisBottomText),
        d: any = ((this as any).config as any).showTitle && !!((this as any).data as any).titleText,
        h: any = ((((this as any).data as any).points as any).length as any) > (0 as any) ? "bottom" : ((this as any).config as any).xAxisPosition,
        p: any = ((this as any).calculateSpace as any)(h, n, f, d);
      return {
        points: ((this as any).getQuadrantPoints as any)(p),
        quadrants: ((this as any).getQuadrants as any)(p),
        axisLabels: ((this as any).getAxisLabels as any)(h, n, f, p),
        borderLines: ((this as any).getBorders as any)(p),
        title: ((this as any).getTitle as any)(d)
      };
    }
  }, (o as any)(ot, "QuadrantBuilder"), ot),
  lt: any,
  mt: any = (lt = class extends (Error as any) {
    declare name: any;
    [key: string]: any;
    constructor(n: any, f: any, d: any) {
      super(`value for ${n} ${f} is invalid, please use a valid ${d}`), (this as any).name = "InvalidStyleError";
    }
  }, (o as any)(lt, "InvalidStyleError"), lt);
function Dt(this: any, t: any): any {
  return !((/^#?([\dA-Fa-f]{6}|[\dA-Fa-f]{3})$/ as any).test as any)(t);
}
(o as any)(Dt, "validateHexCode");
function ne(this: any, t: any): any {
  return !((/^\d+$/ as any).test as any)(t);
}
(o as any)(ne, "validateNumber");
function se(this: any, t: any): any {
  return !((/^\d+px$/ as any).test as any)(t);
}
(o as any)(se, "validateSizeInPixels");
function O(this: any, t: any): any {
  return (De as any)(((t as any).trim as any)(), (zt as any)());
}
(o as any)(O, "textSanitizer");
var V: any = new (Ve as any)();
function re(this: any, t: any): any {
  ((V as any).setData as any)({
    quadrant1Text: (O as any)((t as any).text)
  });
}
(o as any)(re, "setQuadrant1Text");
function oe(this: any, t: any): any {
  ((V as any).setData as any)({
    quadrant2Text: (O as any)((t as any).text)
  });
}
(o as any)(oe, "setQuadrant2Text");
function le(this: any, t: any): any {
  ((V as any).setData as any)({
    quadrant3Text: (O as any)((t as any).text)
  });
}
(o as any)(le, "setQuadrant3Text");
function he(this: any, t: any): any {
  ((V as any).setData as any)({
    quadrant4Text: (O as any)((t as any).text)
  });
}
(o as any)(he, "setQuadrant4Text");
function ce(this: any, t: any): any {
  ((V as any).setData as any)({
    xAxisLeftText: (O as any)((t as any).text)
  });
}
(o as any)(ce, "setXAxisLeftText");
function de(this: any, t: any): any {
  ((V as any).setData as any)({
    xAxisRightText: (O as any)((t as any).text)
  });
}
(o as any)(de, "setXAxisRightText");
function ue(this: any, t: any): any {
  ((V as any).setData as any)({
    yAxisTopText: (O as any)((t as any).text)
  });
}
(o as any)(ue, "setYAxisTopText");
function xe(this: any, t: any): any {
  ((V as any).setData as any)({
    yAxisBottomText: (O as any)((t as any).text)
  });
}
(o as any)(xe, "setYAxisBottomText");
function St(this: any, t: any): any {
  const n: any = {};
  for (const f of t) {
    const [d, h]: any = ((((f as any).trim as any)() as any).split as any)(/\s*:\s*/);
    if ((d as any) === ("radius" as any)) {
      if ((ne as any)(h)) throw new (mt as any)(d, h, "number");
      (n as any).radius = (parseInt as any)(h);
    } else if ((d as any) === ("color" as any)) {
      if ((Dt as any)(h)) throw new (mt as any)(d, h, "hex code");
      (n as any).color = h;
    } else if ((d as any) === ("stroke-color" as any)) {
      if ((Dt as any)(h)) throw new (mt as any)(d, h, "hex code");
      (n as any).strokeColor = h;
    } else if ((d as any) === ("stroke-width" as any)) {
      if ((se as any)(h)) throw new (mt as any)(d, h, "number of pixels (eg. 10px)");
      (n as any).strokeWidth = h;
    } else throw new (Error as any)(`style named ${d} is not supported.`);
  }
  return n;
}
(o as any)(St, "parseStyles");
function fe(this: any, t: any, n: any, f: any, d: any, h: any): any {
  const p: any = (St as any)(h);
  ((V as any).addPoints as any)([{
    x: f,
    y: d,
    text: (O as any)((t as any).text),
    className: n,
    ...p
  }]);
}
(o as any)(fe, "addPoint");
function ge(this: any, t: any, n: any): any {
  ((V as any).addClass as any)(t, (St as any)(n));
}
(o as any)(ge, "addClass");
function pe(this: any, t: any): any {
  ((V as any).setConfig as any)({
    chartWidth: t
  });
}
(o as any)(pe, "setWidth");
function ye(this: any, t: any): any {
  ((V as any).setConfig as any)({
    chartHeight: t
  });
}
(o as any)(ye, "setHeight");
function Te(this: any): any {
  const t: any = (zt as any)(),
    {
      themeVariables: n,
      quadrantChart: f
    }: any = t;
  return f && ((V as any).setConfig as any)(f), ((V as any).setThemeConfig as any)({
    quadrant1Fill: (n as any).quadrant1Fill,
    quadrant2Fill: (n as any).quadrant2Fill,
    quadrant3Fill: (n as any).quadrant3Fill,
    quadrant4Fill: (n as any).quadrant4Fill,
    quadrant1TextFill: (n as any).quadrant1TextFill,
    quadrant2TextFill: (n as any).quadrant2TextFill,
    quadrant3TextFill: (n as any).quadrant3TextFill,
    quadrant4TextFill: (n as any).quadrant4TextFill,
    quadrantPointFill: (n as any).quadrantPointFill,
    quadrantPointTextFill: (n as any).quadrantPointTextFill,
    quadrantXAxisTextFill: (n as any).quadrantXAxisTextFill,
    quadrantYAxisTextFill: (n as any).quadrantYAxisTextFill,
    quadrantExternalBorderStrokeFill: (n as any).quadrantExternalBorderStrokeFill,
    quadrantInternalBorderStrokeFill: (n as any).quadrantInternalBorderStrokeFill,
    quadrantTitleFill: (n as any).quadrantTitleFill
  }), ((V as any).setData as any)({
    titleText: (ae as any)()
  }), ((V as any).build as any)();
}
(o as any)(Te, "getQuadrantData");
var Ie: any = (o as any)(function (this: any): any {
    ((V as any).clear as any)(), (Le as any)();
  }, "clear"),
  we: any = {
    setWidth: pe,
    setHeight: ye,
    setQuadrant1Text: re,
    setQuadrant2Text: oe,
    setQuadrant3Text: le,
    setQuadrant4Text: he,
    setXAxisLeftText: ce,
    setXAxisRightText: de,
    setYAxisTopText: ue,
    setYAxisBottomText: xe,
    parseStyles: St,
    addPoint: fe,
    addClass: ge,
    getQuadrantData: Te,
    clear: Ie,
    setAccTitle: ve,
    getAccTitle: Pe,
    setDiagramTitle: Fe,
    getDiagramTitle: ae,
    getAccDescription: ke,
    setAccDescription: Ae
  },
  Be: any = (o as any)((t: any, n: any, f: any, d: any): any => {
    function h(this: any, i: any): any {
      return (i as any) === ("top" as any) ? "hanging" : "middle";
    }
    (o as any)(h, "getDominantBaseLine");
    function p(this: any, i: any): any {
      return (i as any) === ("left" as any) ? "start" : "middle";
    }
    (o as any)(p, "getTextAnchor");
    function y(this: any, i: any): any {
      return `translate(${(i as any).x}, ${(i as any).y}) rotate(${(i as any).rotation || 0})`;
    }
    (o as any)(y, "getTransformation");
    const _: any = (zt as any)();
    ((bt as any).debug as any)((`Rendering quadrant chart
` as any) + (t as any));
    const a: any = (_ as any).securityLevel;
    let k: any;
    (a as any) === ("sandbox" as any) && (k = (Lt as any)(("#i" as any) + (n as any)));
    const T: any = ((((a as any) === ("sandbox" as any) ? (Lt as any)((((((k as any).nodes as any)() as any)[0] as any).contentDocument as any).body) : (Lt as any)("body")) as any).select as any)(`[id="${n}"]`),
      q: any = ((((T as any).append as any)("g") as any).attr as any)("class", "main"),
      m: any = (_ as any).quadrantChart?.chartWidth ?? 500,
      b: any = (_ as any).quadrantChart?.chartHeight ?? 500;
    (Ce as any)(T, b, m, (_ as any).quadrantChart?.useMaxWidth ?? !0), ((T as any).attr as any)("viewBox", ((("0 0 " as any) + (m as any) as any) + (" " as any) as any) + (b as any)), (((d as any).db as any).setHeight as any)(b), (((d as any).db as any).setWidth as any)(m);
    const g: any = (((d as any).db as any).getQuadrantData as any)(),
      A: any = ((((q as any).append as any)("g") as any).attr as any)("class", "quadrants"),
      ht: any = ((((q as any).append as any)("g") as any).attr as any)("class", "border"),
      xt: any = ((((q as any).append as any)("g") as any).attr as any)("class", "data-points"),
      ft: any = ((((q as any).append as any)("g") as any).attr as any)("class", "labels"),
      gt: any = ((((q as any).append as any)("g") as any).attr as any)("class", "title");
    (g as any).title && ((((((((((((((((((gt as any).append as any)("text") as any).attr as any)("x", 0) as any).attr as any)("y", 0) as any).attr as any)("fill", ((g as any).title as any).fill) as any).attr as any)("font-size", ((g as any).title as any).fontSize) as any).attr as any)("dominant-baseline", (h as any)(((g as any).title as any).horizontalPos)) as any).attr as any)("text-anchor", (p as any)(((g as any).title as any).verticalPos)) as any).attr as any)("transform", (y as any)((g as any).title)) as any).text as any)(((g as any).title as any).text), (g as any).borderLines && ((((((((((((((((((((ht as any).selectAll as any)("line") as any).data as any)((g as any).borderLines) as any).enter as any)() as any).append as any)("line") as any).attr as any)("x1", (i: any): any => (i as any).x1) as any).attr as any)("y1", (i: any): any => (i as any).y1) as any).attr as any)("x2", (i: any): any => (i as any).x2) as any).attr as any)("y2", (i: any): any => (i as any).y2) as any).style as any)("stroke", (i: any): any => (i as any).strokeFill) as any).style as any)("stroke-width", (i: any): any => (i as any).strokeWidth);
    const ct: any = ((((((((((A as any).selectAll as any)("g.quadrant") as any).data as any)((g as any).quadrants) as any).enter as any)() as any).append as any)("g") as any).attr as any)("class", "quadrant");
    ((((((((((((ct as any).append as any)("rect") as any).attr as any)("x", (i: any): any => (i as any).x) as any).attr as any)("y", (i: any): any => (i as any).y) as any).attr as any)("width", (i: any): any => (i as any).width) as any).attr as any)("height", (i: any): any => (i as any).height) as any).attr as any)("fill", (i: any): any => (i as any).fill), ((((((((((((((((((ct as any).append as any)("text") as any).attr as any)("x", 0) as any).attr as any)("y", 0) as any).attr as any)("fill", (i: any): any => ((i as any).text as any).fill) as any).attr as any)("font-size", (i: any): any => ((i as any).text as any).fontSize) as any).attr as any)("dominant-baseline", (i: any): any => (h as any)(((i as any).text as any).horizontalPos)) as any).attr as any)("text-anchor", (i: any): any => (p as any)(((i as any).text as any).verticalPos)) as any).attr as any)("transform", (i: any): any => (y as any)((i as any).text)) as any).text as any)((i: any): any => ((i as any).text as any).text), ((((((((((((((((((((((((((((ft as any).selectAll as any)("g.label") as any).data as any)((g as any).axisLabels) as any).enter as any)() as any).append as any)("g") as any).attr as any)("class", "label") as any).append as any)("text") as any).attr as any)("x", 0) as any).attr as any)("y", 0) as any).text as any)((i: any): any => (i as any).text) as any).attr as any)("fill", (i: any): any => (i as any).fill) as any).attr as any)("font-size", (i: any): any => (i as any).fontSize) as any).attr as any)("dominant-baseline", (i: any): any => (h as any)((i as any).horizontalPos)) as any).attr as any)("text-anchor", (i: any): any => (p as any)((i as any).verticalPos)) as any).attr as any)("transform", (i: any): any => (y as any)(i));
    const dt: any = ((((((((((xt as any).selectAll as any)("g.data-point") as any).data as any)((g as any).points) as any).enter as any)() as any).append as any)("g") as any).attr as any)("class", "data-point");
    ((((((((((((((dt as any).append as any)("circle") as any).attr as any)("cx", (i: any): any => (i as any).x) as any).attr as any)("cy", (i: any): any => (i as any).y) as any).attr as any)("r", (i: any): any => (i as any).radius) as any).attr as any)("fill", (i: any): any => (i as any).fill) as any).attr as any)("stroke", (i: any): any => (i as any).strokeColor) as any).attr as any)("stroke-width", (i: any): any => (i as any).strokeWidth), ((((((((((((((((((dt as any).append as any)("text") as any).attr as any)("x", 0) as any).attr as any)("y", 0) as any).text as any)((i: any): any => ((i as any).text as any).text) as any).attr as any)("fill", (i: any): any => ((i as any).text as any).fill) as any).attr as any)("font-size", (i: any): any => ((i as any).text as any).fontSize) as any).attr as any)("dominant-baseline", (i: any): any => (h as any)(((i as any).text as any).horizontalPos)) as any).attr as any)("text-anchor", (i: any): any => (p as any)(((i as any).text as any).verticalPos)) as any).attr as any)("transform", (i: any): any => (y as any)((i as any).text));
  }, "draw"),
  Re: any = {
    draw: Be
  },
  He: any = {
    parser: ze,
    db: we,
    renderer: Re,
    styles: (o as any)((): any => "", "styles")
  };
export { He as diagram };
//# debugId=e63eae47-bef9-40b2-a632-9e94473ca66a
