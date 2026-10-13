declare var document: any;
declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "8c114ae8-f255-46ba-be87-2429eda9b0e6", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-8c114ae8-f255-46ba-be87-2429eda9b0e6");
  } catch (e: any) {}
} as any)();
import { g as st } from "./chunk-chunk-5VM5RSS4-CTCaRfNa.js";
import { g as it } from "./chunk-chunk-XXDRQBXY-DVdINg3t.js";
import { s as at } from "./chunk-chunk-VR4S4FIN-HF2Hbh9A.js";
import { _ as f, l as we, c as F, v as nt, x as rt, y as Ve, d as Ae, a5 as ut, b as lt, a as ct, s as ot, g as ht, o as dt, p as pt, k as I, q as At, r as ft, i as gt, a6 as U } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { f as mt } from "./chunk-chunk-32BRIVSS-CL4hvhVG.js";
var Pe: any = (function (this: any): any {
  var s: any = (f as any)(function (this: any, O: any, o: any, h: any, p: any): any {
      for (h = h || {}, p = (O as any).length; p--; (h as any)[(O as any)[p]] = o);
      return h;
    }, "o"),
    i: any = [1, 18],
    a: any = [1, 19],
    n: any = [1, 20],
    r: any = [1, 41],
    c: any = [1, 26],
    u: any = [1, 42],
    d: any = [1, 24],
    m: any = [1, 25],
    g: any = [1, 32],
    N: any = [1, 33],
    ge: any = [1, 34],
    b: any = [1, 45],
    me: any = [1, 35],
    Ce: any = [1, 36],
    be: any = [1, 37],
    ke: any = [1, 38],
    Ee: any = [1, 27],
    Te: any = [1, 28],
    ye: any = [1, 29],
    De: any = [1, 30],
    Fe: any = [1, 31],
    k: any = [1, 44],
    E: any = [1, 46],
    T: any = [1, 43],
    y: any = [1, 47],
    Be: any = [1, 9],
    A: any = [1, 8, 9],
    ee: any = [1, 58],
    te: any = [1, 59],
    se: any = [1, 60],
    ie: any = [1, 61],
    ae: any = [1, 62],
    _e: any = [1, 63],
    Se: any = [1, 64],
    _: any = [1, 8, 9, 41],
    Me: any = [1, 77],
    R: any = [1, 8, 9, 12, 13, 22, 39, 41, 44, 46, 68, 69, 70, 71, 72, 73, 74, 79, 81],
    ne: any = [1, 8, 9, 12, 13, 18, 20, 22, 39, 41, 44, 46, 47, 60, 68, 69, 70, 71, 72, 73, 74, 79, 81, 86, 100, 102, 103],
    re: any = [13, 60, 86, 100, 102, 103],
    Y: any = [13, 60, 73, 74, 86, 100, 102, 103],
    Re: any = [13, 60, 68, 69, 70, 71, 72, 86, 100, 102, 103],
    ue: any = [1, 103],
    K: any = [1, 121],
    W: any = [1, 117],
    Q: any = [1, 113],
    j: any = [1, 119],
    X: any = [1, 114],
    q: any = [1, 115],
    H: any = [1, 116],
    J: any = [1, 118],
    Z: any = [1, 120],
    Ge: any = [22, 50, 60, 61, 82, 86, 87, 88, 89, 90],
    Ue: any = [1, 128],
    le: any = [12, 39],
    Ne: any = [1, 8, 9, 39, 41, 44, 46],
    ce: any = [1, 8, 9, 22],
    ze: any = [1, 153],
    Ye: any = [1, 8, 9, 61],
    x: any = [1, 8, 9, 22, 50, 60, 61, 82, 86, 87, 88, 89, 90],
    Le: any = {
      trace: (f as any)(function (this: any): any {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        mermaidDoc: 4,
        statements: 5,
        graphConfig: 6,
        CLASS_DIAGRAM: 7,
        NEWLINE: 8,
        EOF: 9,
        statement: 10,
        classLabel: 11,
        SQS: 12,
        STR: 13,
        SQE: 14,
        namespaceName: 15,
        alphaNumToken: 16,
        classLiteralName: 17,
        DOT: 18,
        className: 19,
        GENERICTYPE: 20,
        relationStatement: 21,
        LABEL: 22,
        namespaceStatement: 23,
        classStatement: 24,
        memberStatement: 25,
        annotationStatement: 26,
        clickStatement: 27,
        styleStatement: 28,
        cssClassStatement: 29,
        noteStatement: 30,
        classDefStatement: 31,
        direction: 32,
        acc_title: 33,
        acc_title_value: 34,
        acc_descr: 35,
        acc_descr_value: 36,
        acc_descr_multiline_value: 37,
        namespaceIdentifier: 38,
        STRUCT_START: 39,
        classStatements: 40,
        STRUCT_STOP: 41,
        NAMESPACE: 42,
        classIdentifier: 43,
        STYLE_SEPARATOR: 44,
        members: 45,
        ANNOTATION_START: 46,
        ANNOTATION_END: 47,
        CLASS: 48,
        emptyBody: 49,
        SPACE: 50,
        MEMBER: 51,
        SEPARATOR: 52,
        relation: 53,
        NOTE_FOR: 54,
        noteText: 55,
        NOTE: 56,
        CLASSDEF: 57,
        classList: 58,
        stylesOpt: 59,
        ALPHA: 60,
        COMMA: 61,
        direction_tb: 62,
        direction_bt: 63,
        direction_rl: 64,
        direction_lr: 65,
        relationType: 66,
        lineType: 67,
        AGGREGATION: 68,
        EXTENSION: 69,
        COMPOSITION: 70,
        DEPENDENCY: 71,
        LOLLIPOP: 72,
        LINE: 73,
        DOTTED_LINE: 74,
        CALLBACK: 75,
        LINK: 76,
        LINK_TARGET: 77,
        CLICK: 78,
        CALLBACK_NAME: 79,
        CALLBACK_ARGS: 80,
        HREF: 81,
        STYLE: 82,
        CSSCLASS: 83,
        style: 84,
        styleComponent: 85,
        NUM: 86,
        COLON: 87,
        UNIT: 88,
        BRKT: 89,
        PCT: 90,
        commentToken: 91,
        textToken: 92,
        graphCodeTokens: 93,
        textNoTagsToken: 94,
        TAGSTART: 95,
        TAGEND: 96,
        "==": 97,
        "--": 98,
        DEFAULT: 99,
        MINUS: 100,
        keywords: 101,
        UNICODE_TEXT: 102,
        BQUOTE_STR: 103,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        7: "CLASS_DIAGRAM",
        8: "NEWLINE",
        9: "EOF",
        12: "SQS",
        13: "STR",
        14: "SQE",
        18: "DOT",
        20: "GENERICTYPE",
        22: "LABEL",
        33: "acc_title",
        34: "acc_title_value",
        35: "acc_descr",
        36: "acc_descr_value",
        37: "acc_descr_multiline_value",
        39: "STRUCT_START",
        41: "STRUCT_STOP",
        42: "NAMESPACE",
        44: "STYLE_SEPARATOR",
        46: "ANNOTATION_START",
        47: "ANNOTATION_END",
        48: "CLASS",
        50: "SPACE",
        51: "MEMBER",
        52: "SEPARATOR",
        54: "NOTE_FOR",
        56: "NOTE",
        57: "CLASSDEF",
        60: "ALPHA",
        61: "COMMA",
        62: "direction_tb",
        63: "direction_bt",
        64: "direction_rl",
        65: "direction_lr",
        68: "AGGREGATION",
        69: "EXTENSION",
        70: "COMPOSITION",
        71: "DEPENDENCY",
        72: "LOLLIPOP",
        73: "LINE",
        74: "DOTTED_LINE",
        75: "CALLBACK",
        76: "LINK",
        77: "LINK_TARGET",
        78: "CLICK",
        79: "CALLBACK_NAME",
        80: "CALLBACK_ARGS",
        81: "HREF",
        82: "STYLE",
        83: "CSSCLASS",
        86: "NUM",
        87: "COLON",
        88: "UNIT",
        89: "BRKT",
        90: "PCT",
        93: "graphCodeTokens",
        95: "TAGSTART",
        96: "TAGEND",
        97: "==",
        98: "--",
        99: "DEFAULT",
        100: "MINUS",
        101: "keywords",
        102: "UNICODE_TEXT",
        103: "BQUOTE_STR"
      },
      productions_: [0, [3, 1], [3, 1], [4, 1], [6, 4], [5, 1], [5, 2], [5, 3], [11, 3], [15, 1], [15, 1], [15, 3], [15, 2], [19, 1], [19, 3], [19, 1], [19, 2], [19, 2], [19, 2], [10, 1], [10, 2], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [10, 1], [23, 4], [23, 5], [38, 2], [38, 3], [40, 1], [40, 2], [40, 3], [40, 1], [40, 2], [40, 3], [40, 1], [40, 2], [40, 3], [24, 1], [24, 3], [24, 4], [24, 3], [24, 6], [24, 4], [24, 7], [24, 6], [43, 2], [43, 3], [49, 0], [49, 2], [49, 2], [26, 4], [45, 1], [45, 2], [25, 1], [25, 2], [25, 1], [25, 1], [21, 3], [21, 4], [21, 4], [21, 5], [30, 3], [30, 2], [31, 3], [58, 1], [58, 3], [32, 1], [32, 1], [32, 1], [32, 1], [53, 3], [53, 2], [53, 2], [53, 1], [66, 1], [66, 1], [66, 1], [66, 1], [66, 1], [67, 1], [67, 1], [27, 3], [27, 4], [27, 3], [27, 4], [27, 4], [27, 5], [27, 3], [27, 4], [27, 4], [27, 5], [27, 4], [27, 5], [27, 5], [27, 6], [28, 3], [29, 3], [59, 1], [59, 3], [84, 1], [84, 2], [85, 1], [85, 1], [85, 1], [85, 1], [85, 1], [85, 1], [85, 1], [85, 1], [85, 1], [91, 1], [91, 1], [92, 1], [92, 1], [92, 1], [92, 1], [92, 1], [92, 1], [92, 1], [94, 1], [94, 1], [94, 1], [94, 1], [16, 1], [16, 1], [16, 1], [16, 1], [17, 1], [55, 1]],
      performAction: (f as any)(function (this: any, o: any, h: any, p: any, l: any, C: any, e: any, $: any): any {
        var t: any = ((e as any).length as any) - (1 as any);
        switch (C) {
          case 8:
            (this as any).$ = (e as any)[(t as any) - (1 as any)];
            break;
          case 9:
          case 10:
          case 13:
          case 15:
            (this as any).$ = (e as any)[t];
            break;
          case 11:
          case 14:
            (this as any).$ = (((e as any)[(t as any) - (2 as any)] as any) + ("." as any) as any) + ((e as any)[t] as any);
            break;
          case 12:
          case 16:
            (this as any).$ = ((e as any)[(t as any) - (1 as any)] as any) + ((e as any)[t] as any);
            break;
          case 17:
          case 18:
            (this as any).$ = ((((e as any)[(t as any) - (1 as any)] as any) + ("~" as any) as any) + ((e as any)[t] as any) as any) + ("~" as any);
            break;
          case 19:
            ((l as any).addRelation as any)((e as any)[t]);
            break;
          case 20:
            ((e as any)[(t as any) - (1 as any)] as any).title = ((l as any).cleanupLabel as any)((e as any)[t]), ((l as any).addRelation as any)((e as any)[(t as any) - (1 as any)]);
            break;
          case 31:
            (this as any).$ = (((e as any)[t] as any).trim as any)(), ((l as any).setAccTitle as any)((this as any).$);
            break;
          case 32:
          case 33:
            (this as any).$ = (((e as any)[t] as any).trim as any)(), ((l as any).setAccDescription as any)((this as any).$);
            break;
          case 34:
            ((l as any).addClassesToNamespace as any)((e as any)[(t as any) - (3 as any)], ((e as any)[(t as any) - (1 as any)] as any)[0], ((e as any)[(t as any) - (1 as any)] as any)[1]), ((l as any).popNamespace as any)();
            break;
          case 35:
            ((l as any).addClassesToNamespace as any)((e as any)[(t as any) - (4 as any)], ((e as any)[(t as any) - (1 as any)] as any)[0], ((e as any)[(t as any) - (1 as any)] as any)[1]), ((l as any).popNamespace as any)();
            break;
          case 36:
            (this as any).$ = ((l as any).addNamespace as any)((e as any)[t]);
            break;
          case 37:
            (this as any).$ = ((l as any).addNamespace as any)((e as any)[(t as any) - (1 as any)], (e as any)[t]);
            break;
          case 38:
            (this as any).$ = [[(e as any)[t]], []];
            break;
          case 39:
            (this as any).$ = [[(e as any)[(t as any) - (1 as any)]], []];
            break;
          case 40:
            ((((e as any)[t] as any)[0] as any).unshift as any)((e as any)[(t as any) - (2 as any)]), (this as any).$ = (e as any)[t];
            break;
          case 41:
            (this as any).$ = [[], [(e as any)[t]]];
            break;
          case 42:
            (this as any).$ = [[], [(e as any)[(t as any) - (1 as any)]]];
            break;
          case 43:
            ((((e as any)[t] as any)[1] as any).unshift as any)((e as any)[(t as any) - (2 as any)]), (this as any).$ = (e as any)[t];
            break;
          case 44:
          case 45:
            (this as any).$ = [[], []];
            break;
          case 46:
            (this as any).$ = (e as any)[t];
            break;
          case 48:
            ((l as any).setCssClass as any)((e as any)[(t as any) - (2 as any)], (e as any)[t]);
            break;
          case 49:
            ((l as any).addMembers as any)((e as any)[(t as any) - (3 as any)], (e as any)[(t as any) - (1 as any)]);
            break;
          case 51:
            ((l as any).setCssClass as any)((e as any)[(t as any) - (5 as any)], (e as any)[(t as any) - (3 as any)]), ((l as any).addMembers as any)((e as any)[(t as any) - (5 as any)], (e as any)[(t as any) - (1 as any)]);
            break;
          case 52:
            ((l as any).addAnnotation as any)((e as any)[(t as any) - (3 as any)], (e as any)[(t as any) - (1 as any)]);
            break;
          case 53:
            ((l as any).addAnnotation as any)((e as any)[(t as any) - (6 as any)], (e as any)[(t as any) - (4 as any)]), ((l as any).addMembers as any)((e as any)[(t as any) - (6 as any)], (e as any)[(t as any) - (1 as any)]);
            break;
          case 54:
            ((l as any).addAnnotation as any)((e as any)[(t as any) - (5 as any)], (e as any)[(t as any) - (3 as any)]);
            break;
          case 55:
            (this as any).$ = (e as any)[t], ((l as any).addClass as any)((e as any)[t]);
            break;
          case 56:
            (this as any).$ = (e as any)[(t as any) - (1 as any)], ((l as any).addClass as any)((e as any)[(t as any) - (1 as any)]), ((l as any).setClassLabel as any)((e as any)[(t as any) - (1 as any)], (e as any)[t]);
            break;
          case 60:
            ((l as any).addAnnotation as any)((e as any)[t], (e as any)[(t as any) - (2 as any)]);
            break;
          case 61:
          case 74:
            (this as any).$ = [(e as any)[t]];
            break;
          case 62:
            (((e as any)[t] as any).push as any)((e as any)[(t as any) - (1 as any)]), (this as any).$ = (e as any)[t];
            break;
          case 63:
            break;
          case 64:
            ((l as any).addMember as any)((e as any)[(t as any) - (1 as any)], ((l as any).cleanupLabel as any)((e as any)[t]));
            break;
          case 65:
            break;
          case 66:
            break;
          case 67:
            (this as any).$ = {
              id1: (e as any)[(t as any) - (2 as any)],
              id2: (e as any)[t],
              relation: (e as any)[(t as any) - (1 as any)],
              relationTitle1: "none",
              relationTitle2: "none"
            };
            break;
          case 68:
            (this as any).$ = {
              id1: (e as any)[(t as any) - (3 as any)],
              id2: (e as any)[t],
              relation: (e as any)[(t as any) - (1 as any)],
              relationTitle1: (e as any)[(t as any) - (2 as any)],
              relationTitle2: "none"
            };
            break;
          case 69:
            (this as any).$ = {
              id1: (e as any)[(t as any) - (3 as any)],
              id2: (e as any)[t],
              relation: (e as any)[(t as any) - (2 as any)],
              relationTitle1: "none",
              relationTitle2: (e as any)[(t as any) - (1 as any)]
            };
            break;
          case 70:
            (this as any).$ = {
              id1: (e as any)[(t as any) - (4 as any)],
              id2: (e as any)[t],
              relation: (e as any)[(t as any) - (2 as any)],
              relationTitle1: (e as any)[(t as any) - (3 as any)],
              relationTitle2: (e as any)[(t as any) - (1 as any)]
            };
            break;
          case 71:
            (this as any).$ = ((l as any).addNote as any)((e as any)[t], (e as any)[(t as any) - (1 as any)]);
            break;
          case 72:
            (this as any).$ = ((l as any).addNote as any)((e as any)[t]);
            break;
          case 73:
            (this as any).$ = (e as any)[(t as any) - (2 as any)], ((l as any).defineClass as any)((e as any)[(t as any) - (1 as any)], (e as any)[t]);
            break;
          case 75:
            (this as any).$ = (((e as any)[(t as any) - (2 as any)] as any).concat as any)([(e as any)[t]]);
            break;
          case 76:
            ((l as any).setDirection as any)("TB");
            break;
          case 77:
            ((l as any).setDirection as any)("BT");
            break;
          case 78:
            ((l as any).setDirection as any)("RL");
            break;
          case 79:
            ((l as any).setDirection as any)("LR");
            break;
          case 80:
            (this as any).$ = {
              type1: (e as any)[(t as any) - (2 as any)],
              type2: (e as any)[t],
              lineType: (e as any)[(t as any) - (1 as any)]
            };
            break;
          case 81:
            (this as any).$ = {
              type1: "none",
              type2: (e as any)[t],
              lineType: (e as any)[(t as any) - (1 as any)]
            };
            break;
          case 82:
            (this as any).$ = {
              type1: (e as any)[(t as any) - (1 as any)],
              type2: "none",
              lineType: (e as any)[t]
            };
            break;
          case 83:
            (this as any).$ = {
              type1: "none",
              type2: "none",
              lineType: (e as any)[t]
            };
            break;
          case 84:
            (this as any).$ = ((l as any).relationType as any).AGGREGATION;
            break;
          case 85:
            (this as any).$ = ((l as any).relationType as any).EXTENSION;
            break;
          case 86:
            (this as any).$ = ((l as any).relationType as any).COMPOSITION;
            break;
          case 87:
            (this as any).$ = ((l as any).relationType as any).DEPENDENCY;
            break;
          case 88:
            (this as any).$ = ((l as any).relationType as any).LOLLIPOP;
            break;
          case 89:
            (this as any).$ = ((l as any).lineType as any).LINE;
            break;
          case 90:
            (this as any).$ = ((l as any).lineType as any).DOTTED_LINE;
            break;
          case 91:
          case 97:
            (this as any).$ = (e as any)[(t as any) - (2 as any)], ((l as any).setClickEvent as any)((e as any)[(t as any) - (1 as any)], (e as any)[t]);
            break;
          case 92:
          case 98:
            (this as any).$ = (e as any)[(t as any) - (3 as any)], ((l as any).setClickEvent as any)((e as any)[(t as any) - (2 as any)], (e as any)[(t as any) - (1 as any)]), ((l as any).setTooltip as any)((e as any)[(t as any) - (2 as any)], (e as any)[t]);
            break;
          case 93:
            (this as any).$ = (e as any)[(t as any) - (2 as any)], ((l as any).setLink as any)((e as any)[(t as any) - (1 as any)], (e as any)[t]);
            break;
          case 94:
            (this as any).$ = (e as any)[(t as any) - (3 as any)], ((l as any).setLink as any)((e as any)[(t as any) - (2 as any)], (e as any)[(t as any) - (1 as any)], (e as any)[t]);
            break;
          case 95:
            (this as any).$ = (e as any)[(t as any) - (3 as any)], ((l as any).setLink as any)((e as any)[(t as any) - (2 as any)], (e as any)[(t as any) - (1 as any)]), ((l as any).setTooltip as any)((e as any)[(t as any) - (2 as any)], (e as any)[t]);
            break;
          case 96:
            (this as any).$ = (e as any)[(t as any) - (4 as any)], ((l as any).setLink as any)((e as any)[(t as any) - (3 as any)], (e as any)[(t as any) - (2 as any)], (e as any)[t]), ((l as any).setTooltip as any)((e as any)[(t as any) - (3 as any)], (e as any)[(t as any) - (1 as any)]);
            break;
          case 99:
            (this as any).$ = (e as any)[(t as any) - (3 as any)], ((l as any).setClickEvent as any)((e as any)[(t as any) - (2 as any)], (e as any)[(t as any) - (1 as any)], (e as any)[t]);
            break;
          case 100:
            (this as any).$ = (e as any)[(t as any) - (4 as any)], ((l as any).setClickEvent as any)((e as any)[(t as any) - (3 as any)], (e as any)[(t as any) - (2 as any)], (e as any)[(t as any) - (1 as any)]), ((l as any).setTooltip as any)((e as any)[(t as any) - (3 as any)], (e as any)[t]);
            break;
          case 101:
            (this as any).$ = (e as any)[(t as any) - (3 as any)], ((l as any).setLink as any)((e as any)[(t as any) - (2 as any)], (e as any)[t]);
            break;
          case 102:
            (this as any).$ = (e as any)[(t as any) - (4 as any)], ((l as any).setLink as any)((e as any)[(t as any) - (3 as any)], (e as any)[(t as any) - (1 as any)], (e as any)[t]);
            break;
          case 103:
            (this as any).$ = (e as any)[(t as any) - (4 as any)], ((l as any).setLink as any)((e as any)[(t as any) - (3 as any)], (e as any)[(t as any) - (1 as any)]), ((l as any).setTooltip as any)((e as any)[(t as any) - (3 as any)], (e as any)[t]);
            break;
          case 104:
            (this as any).$ = (e as any)[(t as any) - (5 as any)], ((l as any).setLink as any)((e as any)[(t as any) - (4 as any)], (e as any)[(t as any) - (2 as any)], (e as any)[t]), ((l as any).setTooltip as any)((e as any)[(t as any) - (4 as any)], (e as any)[(t as any) - (1 as any)]);
            break;
          case 105:
            (this as any).$ = (e as any)[(t as any) - (2 as any)], ((l as any).setCssStyle as any)((e as any)[(t as any) - (1 as any)], (e as any)[t]);
            break;
          case 106:
            ((l as any).setCssClass as any)((e as any)[(t as any) - (1 as any)], (e as any)[t]);
            break;
          case 107:
            (this as any).$ = [(e as any)[t]];
            break;
          case 108:
            (((e as any)[(t as any) - (2 as any)] as any).push as any)((e as any)[t]), (this as any).$ = (e as any)[(t as any) - (2 as any)];
            break;
          case 110:
            (this as any).$ = ((e as any)[(t as any) - (1 as any)] as any) + ((e as any)[t] as any);
            break;
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: 2,
        5: 3,
        6: 4,
        7: [1, 6],
        10: 5,
        16: 39,
        17: 40,
        19: 21,
        21: 7,
        23: 8,
        24: 9,
        25: 10,
        26: 11,
        27: 12,
        28: 13,
        29: 14,
        30: 15,
        31: 16,
        32: 17,
        33: i,
        35: a,
        37: n,
        38: 22,
        42: r,
        43: 23,
        46: c,
        48: u,
        51: d,
        52: m,
        54: g,
        56: N,
        57: ge,
        60: b,
        62: me,
        63: Ce,
        64: be,
        65: ke,
        75: Ee,
        76: Te,
        78: ye,
        82: De,
        83: Fe,
        86: k,
        100: E,
        102: T,
        103: y
      }, {
        1: [3]
      }, {
        1: [2, 1]
      }, {
        1: [2, 2]
      }, {
        1: [2, 3]
      }, (s as any)(Be, [2, 5], {
        8: [1, 48]
      }), {
        8: [1, 49]
      }, (s as any)(A, [2, 19], {
        22: [1, 50]
      }), (s as any)(A, [2, 21]), (s as any)(A, [2, 22]), (s as any)(A, [2, 23]), (s as any)(A, [2, 24]), (s as any)(A, [2, 25]), (s as any)(A, [2, 26]), (s as any)(A, [2, 27]), (s as any)(A, [2, 28]), (s as any)(A, [2, 29]), (s as any)(A, [2, 30]), {
        34: [1, 51]
      }, {
        36: [1, 52]
      }, (s as any)(A, [2, 33]), (s as any)(A, [2, 63], {
        53: 53,
        66: 56,
        67: 57,
        13: [1, 54],
        22: [1, 55],
        68: ee,
        69: te,
        70: se,
        71: ie,
        72: ae,
        73: _e,
        74: Se
      }), {
        39: [1, 65]
      }, (s as any)(_, [2, 47], {
        39: [1, 67],
        44: [1, 66],
        46: [1, 68]
      }), (s as any)(A, [2, 65]), (s as any)(A, [2, 66]), {
        16: 69,
        60: b,
        86: k,
        100: E,
        102: T
      }, {
        16: 39,
        17: 40,
        19: 70,
        60: b,
        86: k,
        100: E,
        102: T,
        103: y
      }, {
        16: 39,
        17: 40,
        19: 71,
        60: b,
        86: k,
        100: E,
        102: T,
        103: y
      }, {
        16: 39,
        17: 40,
        19: 72,
        60: b,
        86: k,
        100: E,
        102: T,
        103: y
      }, {
        60: [1, 73]
      }, {
        13: [1, 74]
      }, {
        16: 39,
        17: 40,
        19: 75,
        60: b,
        86: k,
        100: E,
        102: T,
        103: y
      }, {
        13: Me,
        55: 76
      }, {
        58: 78,
        60: [1, 79]
      }, (s as any)(A, [2, 76]), (s as any)(A, [2, 77]), (s as any)(A, [2, 78]), (s as any)(A, [2, 79]), (s as any)(R, [2, 13], {
        16: 39,
        17: 40,
        19: 81,
        18: [1, 80],
        20: [1, 82],
        60: b,
        86: k,
        100: E,
        102: T,
        103: y
      }), (s as any)(R, [2, 15], {
        20: [1, 83]
      }), {
        15: 84,
        16: 85,
        17: 86,
        60: b,
        86: k,
        100: E,
        102: T,
        103: y
      }, {
        16: 39,
        17: 40,
        19: 87,
        60: b,
        86: k,
        100: E,
        102: T,
        103: y
      }, (s as any)(ne, [2, 133]), (s as any)(ne, [2, 134]), (s as any)(ne, [2, 135]), (s as any)(ne, [2, 136]), (s as any)([1, 8, 9, 12, 13, 20, 22, 39, 41, 44, 46, 68, 69, 70, 71, 72, 73, 74, 79, 81], [2, 137]), (s as any)(Be, [2, 6], {
        10: 5,
        21: 7,
        23: 8,
        24: 9,
        25: 10,
        26: 11,
        27: 12,
        28: 13,
        29: 14,
        30: 15,
        31: 16,
        32: 17,
        19: 21,
        38: 22,
        43: 23,
        16: 39,
        17: 40,
        5: 88,
        33: i,
        35: a,
        37: n,
        42: r,
        46: c,
        48: u,
        51: d,
        52: m,
        54: g,
        56: N,
        57: ge,
        60: b,
        62: me,
        63: Ce,
        64: be,
        65: ke,
        75: Ee,
        76: Te,
        78: ye,
        82: De,
        83: Fe,
        86: k,
        100: E,
        102: T,
        103: y
      }), {
        5: 89,
        10: 5,
        16: 39,
        17: 40,
        19: 21,
        21: 7,
        23: 8,
        24: 9,
        25: 10,
        26: 11,
        27: 12,
        28: 13,
        29: 14,
        30: 15,
        31: 16,
        32: 17,
        33: i,
        35: a,
        37: n,
        38: 22,
        42: r,
        43: 23,
        46: c,
        48: u,
        51: d,
        52: m,
        54: g,
        56: N,
        57: ge,
        60: b,
        62: me,
        63: Ce,
        64: be,
        65: ke,
        75: Ee,
        76: Te,
        78: ye,
        82: De,
        83: Fe,
        86: k,
        100: E,
        102: T,
        103: y
      }, (s as any)(A, [2, 20]), (s as any)(A, [2, 31]), (s as any)(A, [2, 32]), {
        13: [1, 91],
        16: 39,
        17: 40,
        19: 90,
        60: b,
        86: k,
        100: E,
        102: T,
        103: y
      }, {
        53: 92,
        66: 56,
        67: 57,
        68: ee,
        69: te,
        70: se,
        71: ie,
        72: ae,
        73: _e,
        74: Se
      }, (s as any)(A, [2, 64]), {
        67: 93,
        73: _e,
        74: Se
      }, (s as any)(re, [2, 83], {
        66: 94,
        68: ee,
        69: te,
        70: se,
        71: ie,
        72: ae
      }), (s as any)(Y, [2, 84]), (s as any)(Y, [2, 85]), (s as any)(Y, [2, 86]), (s as any)(Y, [2, 87]), (s as any)(Y, [2, 88]), (s as any)(Re, [2, 89]), (s as any)(Re, [2, 90]), {
        8: [1, 96],
        23: 99,
        24: 97,
        30: 98,
        38: 22,
        40: 95,
        42: r,
        43: 23,
        48: u,
        54: g,
        56: N
      }, {
        16: 100,
        60: b,
        86: k,
        100: E,
        102: T
      }, {
        41: [1, 102],
        45: 101,
        51: ue
      }, {
        16: 104,
        60: b,
        86: k,
        100: E,
        102: T
      }, {
        47: [1, 105]
      }, {
        13: [1, 106]
      }, {
        13: [1, 107]
      }, {
        79: [1, 108],
        81: [1, 109]
      }, {
        22: K,
        50: W,
        59: 110,
        60: Q,
        82: j,
        84: 111,
        85: 112,
        86: X,
        87: q,
        88: H,
        89: J,
        90: Z
      }, {
        60: [1, 122]
      }, {
        13: Me,
        55: 123
      }, (s as any)(_, [2, 72]), (s as any)(_, [2, 138]), {
        22: K,
        50: W,
        59: 124,
        60: Q,
        61: [1, 125],
        82: j,
        84: 111,
        85: 112,
        86: X,
        87: q,
        88: H,
        89: J,
        90: Z
      }, (s as any)(Ge, [2, 74]), {
        16: 39,
        17: 40,
        19: 126,
        60: b,
        86: k,
        100: E,
        102: T,
        103: y
      }, (s as any)(R, [2, 16]), (s as any)(R, [2, 17]), (s as any)(R, [2, 18]), {
        11: 127,
        12: Ue,
        39: [2, 36]
      }, (s as any)(le, [2, 9], {
        16: 85,
        17: 86,
        15: 130,
        18: [1, 129],
        60: b,
        86: k,
        100: E,
        102: T,
        103: y
      }), (s as any)(le, [2, 10]), (s as any)(Ne, [2, 55], {
        11: 131,
        12: Ue
      }), (s as any)(Be, [2, 7]), {
        9: [1, 132]
      }, (s as any)(ce, [2, 67]), {
        16: 39,
        17: 40,
        19: 133,
        60: b,
        86: k,
        100: E,
        102: T,
        103: y
      }, {
        13: [1, 135],
        16: 39,
        17: 40,
        19: 134,
        60: b,
        86: k,
        100: E,
        102: T,
        103: y
      }, (s as any)(re, [2, 82], {
        66: 136,
        68: ee,
        69: te,
        70: se,
        71: ie,
        72: ae
      }), (s as any)(re, [2, 81]), {
        41: [1, 137]
      }, {
        23: 99,
        24: 97,
        30: 98,
        38: 22,
        40: 138,
        42: r,
        43: 23,
        48: u,
        54: g,
        56: N
      }, {
        8: [1, 139],
        41: [2, 38]
      }, {
        8: [1, 140],
        41: [2, 41]
      }, {
        8: [1, 141],
        41: [2, 44]
      }, (s as any)(_, [2, 48], {
        39: [1, 142]
      }), {
        41: [1, 143]
      }, (s as any)(_, [2, 50]), {
        41: [2, 61],
        45: 144,
        51: ue
      }, {
        47: [1, 145]
      }, {
        16: 39,
        17: 40,
        19: 146,
        60: b,
        86: k,
        100: E,
        102: T,
        103: y
      }, (s as any)(A, [2, 91], {
        13: [1, 147]
      }), (s as any)(A, [2, 93], {
        13: [1, 149],
        77: [1, 148]
      }), (s as any)(A, [2, 97], {
        13: [1, 150],
        80: [1, 151]
      }), {
        13: [1, 152]
      }, (s as any)(A, [2, 105], {
        61: ze
      }), (s as any)(Ye, [2, 107], {
        85: 154,
        22: K,
        50: W,
        60: Q,
        82: j,
        86: X,
        87: q,
        88: H,
        89: J,
        90: Z
      }), (s as any)(x, [2, 109]), (s as any)(x, [2, 111]), (s as any)(x, [2, 112]), (s as any)(x, [2, 113]), (s as any)(x, [2, 114]), (s as any)(x, [2, 115]), (s as any)(x, [2, 116]), (s as any)(x, [2, 117]), (s as any)(x, [2, 118]), (s as any)(x, [2, 119]), (s as any)(A, [2, 106]), (s as any)(_, [2, 71]), (s as any)(A, [2, 73], {
        61: ze
      }), {
        60: [1, 155]
      }, (s as any)(R, [2, 14]), {
        39: [2, 37]
      }, {
        13: [1, 156]
      }, {
        15: 157,
        16: 85,
        17: 86,
        60: b,
        86: k,
        100: E,
        102: T,
        103: y
      }, (s as any)(le, [2, 12]), (s as any)(Ne, [2, 56]), {
        1: [2, 4]
      }, (s as any)(ce, [2, 69]), (s as any)(ce, [2, 68]), {
        16: 39,
        17: 40,
        19: 158,
        60: b,
        86: k,
        100: E,
        102: T,
        103: y
      }, (s as any)(re, [2, 80]), (s as any)(_, [2, 34]), {
        41: [1, 159]
      }, {
        23: 99,
        24: 97,
        30: 98,
        38: 22,
        40: 160,
        41: [2, 39],
        42: r,
        43: 23,
        48: u,
        54: g,
        56: N
      }, {
        23: 99,
        24: 97,
        30: 98,
        38: 22,
        40: 161,
        41: [2, 42],
        42: r,
        43: 23,
        48: u,
        54: g,
        56: N
      }, {
        23: 99,
        24: 97,
        30: 98,
        38: 22,
        40: 162,
        41: [2, 45],
        42: r,
        43: 23,
        48: u,
        54: g,
        56: N
      }, {
        45: 163,
        51: ue
      }, (s as any)(_, [2, 49]), {
        41: [2, 62]
      }, (s as any)(_, [2, 52], {
        39: [1, 164]
      }), (s as any)(A, [2, 60]), (s as any)(A, [2, 92]), (s as any)(A, [2, 94]), (s as any)(A, [2, 95], {
        77: [1, 165]
      }), (s as any)(A, [2, 98]), (s as any)(A, [2, 99], {
        13: [1, 166]
      }), (s as any)(A, [2, 101], {
        13: [1, 168],
        77: [1, 167]
      }), {
        22: K,
        50: W,
        60: Q,
        82: j,
        84: 169,
        85: 112,
        86: X,
        87: q,
        88: H,
        89: J,
        90: Z
      }, (s as any)(x, [2, 110]), (s as any)(Ge, [2, 75]), {
        14: [1, 170]
      }, (s as any)(le, [2, 11]), (s as any)(ce, [2, 70]), (s as any)(_, [2, 35]), {
        41: [2, 40]
      }, {
        41: [2, 43]
      }, {
        41: [2, 46]
      }, {
        41: [1, 171]
      }, {
        41: [1, 173],
        45: 172,
        51: ue
      }, (s as any)(A, [2, 96]), (s as any)(A, [2, 100]), (s as any)(A, [2, 102]), (s as any)(A, [2, 103], {
        77: [1, 174]
      }), (s as any)(Ye, [2, 108], {
        85: 154,
        22: K,
        50: W,
        60: Q,
        82: j,
        86: X,
        87: q,
        88: H,
        89: J,
        90: Z
      }), (s as any)(Ne, [2, 8]), (s as any)(_, [2, 51]), {
        41: [1, 175]
      }, (s as any)(_, [2, 54]), (s as any)(A, [2, 104]), (s as any)(_, [2, 53])],
      defaultActions: {
        2: [2, 1],
        3: [2, 2],
        4: [2, 3],
        127: [2, 37],
        132: [2, 4],
        144: [2, 62],
        160: [2, 40],
        161: [2, 43],
        162: [2, 46]
      },
      parseError: (f as any)(function (this: any, o: any, h: any): any {
        if ((h as any).recoverable) ((this as any).trace as any)(o);else {
          var p: any = new (Error as any)(o);
          throw (p as any).hash = h, p;
        }
      }, "parseError"),
      parse: (f as any)(function (this: any, o: any): any {
        var xe: any;
        var h: any = this,
          p: any = [0],
          l: any = [],
          C: any = [null],
          e: any = [],
          $: any = (this as any).table,
          t: any = "",
          he: any = 0,
          Ke: any = 0,
          Ze: number = 2,
          We: number = 1,
          $e: any = (((e as any).slice as any).call as any)(arguments, 1),
          D: any = ((Object as any).create as any)((this as any).lexer),
          V: any = {
            yy: {}
          };
        for (xe in (this as any).yy) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).yy, xe) && (((V as any).yy as any)[xe] = ((this as any).yy as any)[xe]);
        ((D as any).setInput as any)(o, (V as any).yy), ((V as any).yy as any).lexer = D, ((V as any).yy as any).parser = this, (typeof (D as any).yylloc as any) > ("u" as any) && ((D as any).yylloc = {});
        var ve: any = (D as any).yylloc;
        ((e as any).push as any)(ve);
        var et: any = (D as any).options && ((D as any).options as any).ranges;
        (typeof ((V as any).yy as any).parseError as any) == ("function" as any) ? (this as any).parseError = ((V as any).yy as any).parseError : (this as any).parseError = (((Object as any).getPrototypeOf as any)(this) as any).parseError;
        function tt(this: any, S: any): any {
          (p as any).length = ((p as any).length as any) - ((2 as any) * (S as any) as any), (C as any).length = ((C as any).length as any) - (S as any), (e as any).length = ((e as any).length as any) - (S as any);
        }
        (f as any)(tt, "popStack");
        function Qe(this: any): any {
          var S: any;
          return S = ((l as any).pop as any)() || ((D as any).lex as any)() || We, (typeof S as any) != ("number" as any) && (S instanceof Array && (l = S, S = ((l as any).pop as any)()), S = ((h as any).symbols_ as any)[S] || S), S;
        }
        (f as any)(Qe, "lex");
        for (var B: any, P: any, L: any, Ie: any, G: any = {}, de: any, v: any, je: any, pe: any;;) {
          if (P = (p as any)[((p as any).length as any) - (1 as any)], ((this as any).defaultActions as any)[P] ? L = ((this as any).defaultActions as any)[P] : (((B as any) === (null as any) || (typeof B as any) > ("u" as any)) && (B = (Qe as any)()), L = ($ as any)[P] && (($ as any)[P] as any)[B]), (typeof L as any) > ("u" as any) || !(L as any).length || !(L as any)[0]) {
            var Oe: any = "";
            pe = [];
            for (de in ($ as any)[P]) ((this as any).terminals_ as any)[de] && (de as any) > (Ze as any) && ((pe as any).push as any)((("'" as any) + (((this as any).terminals_ as any)[de] as any) as any) + ("'" as any));
            (D as any).showPosition ? Oe = (((((((("Parse error on line " as any) + ((he as any) + (1 as any) as any) as any) + (`:
` as any) as any) + (((D as any).showPosition as any)() as any) as any) + (`
Expecting ` as any) as any) + (((pe as any).join as any)(", ") as any) as any) + (", got '" as any) as any) + ((((this as any).terminals_ as any)[B] || B) as any) as any) + ("'" as any) : Oe = ((("Parse error on line " as any) + ((he as any) + (1 as any) as any) as any) + (": Unexpected " as any) as any) + (((B as any) == (We as any) ? "end of input" : (("'" as any) + ((((this as any).terminals_ as any)[B] || B) as any) as any) + ("'" as any)) as any), ((this as any).parseError as any)(Oe, {
              text: (D as any).match,
              token: ((this as any).terminals_ as any)[B] || B,
              line: (D as any).yylineno,
              loc: ve,
              expected: pe
            });
          }
          if ((L as any)[0] instanceof Array && ((L as any).length as any) > (1 as any)) throw new (Error as any)(((("Parse Error: multiple actions possible at state: " as any) + (P as any) as any) + (", token: " as any) as any) + (B as any));
          switch ((L as any)[0]) {
            case 1:
              ((p as any).push as any)(B), ((C as any).push as any)((D as any).yytext), ((e as any).push as any)((D as any).yylloc), ((p as any).push as any)((L as any)[1]), B = null, Ke = (D as any).yyleng, t = (D as any).yytext, he = (D as any).yylineno, ve = (D as any).yylloc;
              break;
            case 2:
              if (v = (((this as any).productions_ as any)[(L as any)[1]] as any)[1], (G as any).$ = (C as any)[((C as any).length as any) - (v as any)], (G as any)._$ = {
                first_line: ((e as any)[((e as any).length as any) - ((v || 1) as any)] as any).first_line,
                last_line: ((e as any)[((e as any).length as any) - (1 as any)] as any).last_line,
                first_column: ((e as any)[((e as any).length as any) - ((v || 1) as any)] as any).first_column,
                last_column: ((e as any)[((e as any).length as any) - (1 as any)] as any).last_column
              }, et && (((G as any)._$ as any).range = [(((e as any)[((e as any).length as any) - ((v || 1) as any)] as any).range as any)[0], (((e as any)[((e as any).length as any) - (1 as any)] as any).range as any)[1]]), Ie = (((this as any).performAction as any).apply as any)(G, (([t, Ke, he, (V as any).yy, (L as any)[1], C, e] as any).concat as any)($e)), (typeof Ie as any) < ("u" as any)) return Ie;
              v && (p = ((p as any).slice as any)(0, ((-1 as any) * (v as any) as any) * (2 as any)), C = ((C as any).slice as any)(0, (-1 as any) * (v as any)), e = ((e as any).slice as any)(0, (-1 as any) * (v as any))), ((p as any).push as any)((((this as any).productions_ as any)[(L as any)[1]] as any)[0]), ((C as any).push as any)((G as any).$), ((e as any).push as any)((G as any)._$), je = (($ as any)[(p as any)[((p as any).length as any) - (2 as any)]] as any)[(p as any)[((p as any).length as any) - (1 as any)]], ((p as any).push as any)(je);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }, "parse")
    },
    Je: any = (function (this: any): any {
      var O: any = {
        EOF: 1,
        parseError: (f as any)(function (this: any, h: any, p: any): any {
          if (((this as any).yy as any).parser) ((((this as any).yy as any).parser as any).parseError as any)(h, p);else throw new (Error as any)(h);
        }, "parseError"),
        setInput: (f as any)(function (this: any, o: any, h: any): any {
          return (this as any).yy = h || (this as any).yy || {}, (this as any)._input = o, (this as any)._more = (this as any)._backtrack = (this as any).done = !1, (this as any).yylineno = (this as any).yyleng = 0, (this as any).yytext = (this as any).matched = (this as any).match = "", (this as any).conditionStack = ["INITIAL"], (this as any).yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [0, 0]), (this as any).offset = 0, this;
        }, "setInput"),
        input: (f as any)(function (this: any): any {
          var o: any = ((this as any)._input as any)[0];
          (this as any).yytext += o, (this as any).yyleng++, (this as any).offset++, (this as any).match += o, (this as any).matched += o;
          var h: any = ((o as any).match as any)(/(?:\r\n?|\n).*/g);
          return h ? ((this as any).yylineno++, ((this as any).yylloc as any).last_line++) : ((this as any).yylloc as any).last_column++, ((this as any).options as any).ranges && (((this as any).yylloc as any).range as any)[1]++, (this as any)._input = (((this as any)._input as any).slice as any)(1), o;
        }, "input"),
        unput: (f as any)(function (this: any, o: any): any {
          var h: any = (o as any).length,
            p: any = ((o as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any)._input = (o as any) + ((this as any)._input as any), (this as any).yytext = (((this as any).yytext as any).substr as any)(0, (((this as any).yytext as any).length as any) - (h as any)), (this as any).offset -= h;
          var l: any = (((this as any).match as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any).match = (((this as any).match as any).substr as any)(0, (((this as any).match as any).length as any) - (1 as any)), (this as any).matched = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (1 as any)), ((p as any).length as any) - (1 as any) && ((this as any).yylineno -= ((p as any).length as any) - (1 as any));
          var C: any = ((this as any).yylloc as any).range;
          return (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).first_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).first_column,
            last_column: p ? (((((p as any).length as any) === ((l as any).length as any) ? ((this as any).yylloc as any).first_column : 0) as any) + (((l as any)[((l as any).length as any) - ((p as any).length as any)] as any).length as any) as any) - (((p as any)[0] as any).length as any) : (((this as any).yylloc as any).first_column as any) - (h as any)
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(C as any)[0], (((C as any)[0] as any) + ((this as any).yyleng as any) as any) - (h as any)]), (this as any).yyleng = ((this as any).yytext as any).length, this;
        }, "unput"),
        more: (f as any)(function (this: any): any {
          return (this as any)._more = !0, this;
        }, "more"),
        reject: (f as any)(function (this: any): any {
          if (((this as any).options as any).backtrack_lexer) (this as any)._backtrack = !0;else return ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
          return this;
        }, "reject"),
        less: (f as any)(function (this: any, o: any): any {
          ((this as any).unput as any)((((this as any).match as any).slice as any)(o));
        }, "less"),
        pastInput: (f as any)(function (this: any): any {
          var o: any = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (((this as any).match as any).length as any));
          return ((((o as any).length as any) > (20 as any) ? "..." : "") as any) + (((((o as any).substr as any)(-20) as any).replace as any)(/\n/g, "") as any);
        }, "pastInput"),
        upcomingInput: (f as any)(function (this: any): any {
          var o: any = (this as any).match;
          return ((o as any).length as any) < (20 as any) && (o += (((this as any)._input as any).substr as any)(0, (20 as any) - ((o as any).length as any))), (((((o as any).substr as any)(0, 20) as any) + ((((o as any).length as any) > (20 as any) ? "..." : "") as any) as any).replace as any)(/\n/g, "");
        }, "upcomingInput"),
        showPosition: (f as any)(function (this: any): any {
          var o: any = ((this as any).pastInput as any)(),
            h: any = ((new (Array as any)(((o as any).length as any) + (1 as any)) as any).join as any)("-");
          return ((((o as any) + (((this as any).upcomingInput as any)() as any) as any) + (`
` as any) as any) + (h as any) as any) + ("^" as any);
        }, "showPosition"),
        test_match: (f as any)(function (this: any, o: any, h: any): any {
          var e: any;
          var p: any, l: any, C: any;
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
          }, ((this as any).options as any).ranges && (((C as any).yylloc as any).range = ((((this as any).yylloc as any).range as any).slice as any)(0))), l = (((o as any)[0] as any).match as any)(/(?:\r\n?|\n).*/g), l && ((this as any).yylineno += (l as any).length), (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).last_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).last_column,
            last_column: l ? (((l as any)[((l as any).length as any) - (1 as any)] as any).length as any) - ((((((l as any)[((l as any).length as any) - (1 as any)] as any).match as any)(/\r?\n?/) as any)[0] as any).length as any) : (((this as any).yylloc as any).last_column as any) + (((o as any)[0] as any).length as any)
          }, (this as any).yytext += (o as any)[0], (this as any).match += (o as any)[0], (this as any).matches = o, (this as any).yyleng = ((this as any).yytext as any).length, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(this as any).offset, (this as any).offset += (this as any).yyleng]), (this as any)._more = !1, (this as any)._backtrack = !1, (this as any)._input = (((this as any)._input as any).slice as any)(((o as any)[0] as any).length), (this as any).matched += (o as any)[0], p = (((this as any).performAction as any).call as any)(this, (this as any).yy, this, h, ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]), (this as any).done && (this as any)._input && ((this as any).done = !1), p) return p;
          if ((this as any)._backtrack) {
            for (e in C) (this as any)[e] = (C as any)[e];
            return !1;
          }
          return !1;
        }, "test_match"),
        next: (f as any)(function (this: any): any {
          if ((this as any).done) return (this as any).EOF;
          (this as any)._input || ((this as any).done = !0);
          var o: any, h: any, p: any, l: any;
          (this as any)._more || ((this as any).yytext = "", (this as any).match = "");
          for (var C: any = ((this as any)._currentRules as any)(), e: any = 0; (e as any) < ((C as any).length as any); e++) if (p = (((this as any)._input as any).match as any)(((this as any).rules as any)[(C as any)[e]]), p && (!h || (((p as any)[0] as any).length as any) > (((h as any)[0] as any).length as any))) {
            if (h = p, l = e, ((this as any).options as any).backtrack_lexer) {
              if (o = ((this as any).test_match as any)(p, (C as any)[e]), (o as any) !== (!1 as any)) return o;
              if ((this as any)._backtrack) {
                h = !1;
                continue;
              } else return !1;
            } else if (!((this as any).options as any).flex) break;
          }
          return h ? (o = ((this as any).test_match as any)(h, (C as any)[l]), (o as any) !== (!1 as any) ? o : !1) : ((this as any)._input as any) === ("" as any) ? (this as any).EOF : ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. Unrecognized text.
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
        }, "next"),
        lex: (f as any)(function (this: any): any {
          var h: any = ((this as any).next as any)();
          return h || ((this as any).lex as any)();
        }, "lex"),
        begin: (f as any)(function (this: any, h: any): any {
          (((this as any).conditionStack as any).push as any)(h);
        }, "begin"),
        popState: (f as any)(function (this: any): any {
          var h: any = (((this as any).conditionStack as any).length as any) - (1 as any);
          return (h as any) > (0 as any) ? (((this as any).conditionStack as any).pop as any)() : ((this as any).conditionStack as any)[0];
        }, "popState"),
        _currentRules: (f as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length && ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)] ? (((this as any).conditions as any)[((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]] as any).rules : (((this as any).conditions as any).INITIAL as any).rules;
        }, "_currentRules"),
        topState: (f as any)(function (this: any, h: any): any {
          return h = ((((this as any).conditionStack as any).length as any) - (1 as any) as any) - (((Math as any).abs as any)(h || 0) as any), (h as any) >= (0 as any) ? ((this as any).conditionStack as any)[h] : "INITIAL";
        }, "topState"),
        pushState: (f as any)(function (this: any, h: any): any {
          ((this as any).begin as any)(h);
        }, "pushState"),
        stateStackSize: (f as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length;
        }, "stateStackSize"),
        options: {},
        performAction: (f as any)(function (this: any, h: any, p: any, l: any, C: any): any {
          switch (l) {
            case 0:
              return 62;
            case 1:
              return 63;
            case 2:
              return 64;
            case 3:
              return 65;
            case 4:
              break;
            case 5:
              break;
            case 6:
              return ((this as any).begin as any)("acc_title"), 33;
            case 7:
              return ((this as any).popState as any)(), "acc_title_value";
            case 8:
              return ((this as any).begin as any)("acc_descr"), 35;
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
              return 8;
            case 14:
              break;
            case 15:
              return 7;
            case 16:
              return 7;
            case 17:
              return "EDGE_STATE";
            case 18:
              ((this as any).begin as any)("callback_name");
              break;
            case 19:
              ((this as any).popState as any)();
              break;
            case 20:
              ((this as any).popState as any)(), ((this as any).begin as any)("callback_args");
              break;
            case 21:
              return 79;
            case 22:
              ((this as any).popState as any)();
              break;
            case 23:
              return 80;
            case 24:
              ((this as any).popState as any)();
              break;
            case 25:
              return "STR";
            case 26:
              ((this as any).begin as any)("string");
              break;
            case 27:
              return 82;
            case 28:
              return 57;
            case 29:
              return ((this as any).begin as any)("namespace"), 42;
            case 30:
              return ((this as any).popState as any)(), 8;
            case 31:
              break;
            case 32:
              return ((this as any).begin as any)("namespace-body"), 39;
            case 33:
              ((this as any).popState as any)(), ((this as any).less as any)(0);
              break;
            case 34:
              return ((this as any).popState as any)(), 41;
            case 35:
              return "EOF_IN_STRUCT";
            case 36:
              return 8;
            case 37:
              break;
            case 38:
              return "EDGE_STATE";
            case 39:
              return ((this as any).begin as any)("class"), 48;
            case 40:
              return ((this as any).popState as any)(), 8;
            case 41:
              break;
            case 42:
              return ((this as any).popState as any)(), ((this as any).popState as any)(), 41;
            case 43:
              return ((this as any).begin as any)("class-body"), 39;
            case 44:
              return ((this as any).popState as any)(), 41;
            case 45:
              return "EOF_IN_STRUCT";
            case 46:
              return "EDGE_STATE";
            case 47:
              return "OPEN_IN_STRUCT";
            case 48:
              break;
            case 49:
              return "MEMBER";
            case 50:
              return 83;
            case 51:
              return 75;
            case 52:
              return 76;
            case 53:
              return 78;
            case 54:
              return 54;
            case 55:
              return 56;
            case 56:
              return 46;
            case 57:
              return 47;
            case 58:
              return 81;
            case 59:
              ((this as any).popState as any)();
              break;
            case 60:
              return "GENERICTYPE";
            case 61:
              ((this as any).begin as any)("generic");
              break;
            case 62:
              ((this as any).popState as any)();
              break;
            case 63:
              return "BQUOTE_STR";
            case 64:
              ((this as any).begin as any)("bqstring");
              break;
            case 65:
              return 77;
            case 66:
              return 77;
            case 67:
              return 77;
            case 68:
              return 77;
            case 69:
              return 69;
            case 70:
              return 69;
            case 71:
              return 71;
            case 72:
              return 71;
            case 73:
              return 70;
            case 74:
              return 68;
            case 75:
              return 72;
            case 76:
              return 73;
            case 77:
              return 74;
            case 78:
              return 22;
            case 79:
              return 44;
            case 80:
              return 100;
            case 81:
              return 18;
            case 82:
              return "PLUS";
            case 83:
              return 87;
            case 84:
              return 61;
            case 85:
              return 89;
            case 86:
              return 89;
            case 87:
              return 90;
            case 88:
              return "EQUALS";
            case 89:
              return "EQUALS";
            case 90:
              return 60;
            case 91:
              return 12;
            case 92:
              return 14;
            case 93:
              return "PUNCTUATION";
            case 94:
              return 86;
            case 95:
              return 102;
            case 96:
              return 50;
            case 97:
              return 50;
            case 98:
              return 9;
          }
        }, "anonymous"),
        rules: [/^(?:.*direction\s+TB[^\n]*)/, /^(?:.*direction\s+BT[^\n]*)/, /^(?:.*direction\s+RL[^\n]*)/, /^(?:.*direction\s+LR[^\n]*)/, /^(?:%%(?!\{)*[^\n]*(\r?\n?)+)/, /^(?:%%[^\n]*(\r?\n)*)/, /^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:\s*(\r?\n)+)/, /^(?:\s+)/, /^(?:classDiagram-v2\b)/, /^(?:classDiagram\b)/, /^(?:\[\*\])/, /^(?:call[\s]+)/, /^(?:\([\s]*\))/, /^(?:\()/, /^(?:[^(]*)/, /^(?:\))/, /^(?:[^)]*)/, /^(?:["])/, /^(?:[^"]*)/, /^(?:["])/, /^(?:style\b)/, /^(?:classDef\b)/, /^(?:namespace\b)/, /^(?:\s*(\r?\n)+)/, /^(?:\s+)/, /^(?:[{])/, /^(?:[}])/, /^(?:[}])/, /^(?:$)/, /^(?:\s*(\r?\n)+)/, /^(?:\s+)/, /^(?:\[\*\])/, /^(?:class\b)/, /^(?:\s*(\r?\n)+)/, /^(?:\s+)/, /^(?:[}])/, /^(?:[{])/, /^(?:[}])/, /^(?:$)/, /^(?:\[\*\])/, /^(?:[{])/, /^(?:[\n])/, /^(?:[^{}\n]*)/, /^(?:cssClass\b)/, /^(?:callback\b)/, /^(?:link\b)/, /^(?:click\b)/, /^(?:note for\b)/, /^(?:note\b)/, /^(?:<<)/, /^(?:>>)/, /^(?:href\b)/, /^(?:[~])/, /^(?:[^~]*)/, /^(?:~)/, /^(?:[`])/, /^(?:[^`]+)/, /^(?:[`])/, /^(?:_self\b)/, /^(?:_blank\b)/, /^(?:_parent\b)/, /^(?:_top\b)/, /^(?:\s*<\|)/, /^(?:\s*\|>)/, /^(?:\s*>)/, /^(?:\s*<)/, /^(?:\s*\*)/, /^(?:\s*o\b)/, /^(?:\s*\(\))/, /^(?:--)/, /^(?:\.\.)/, /^(?::{1}[^:\n;]+)/, /^(?::{3})/, /^(?:-)/, /^(?:\.)/, /^(?:\+)/, /^(?::)/, /^(?:,)/, /^(?:#)/, /^(?:#)/, /^(?:%)/, /^(?:=)/, /^(?:=)/, /^(?:\w+)/, /^(?:\[)/, /^(?:\])/, /^(?:[!"#$%&'*+,-.`?\\/])/, /^(?:[0-9]+)/, /^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/, /^(?:\s)/, /^(?:\s)/, /^(?:$)/],
        conditions: {
          "namespace-body": {
            rules: [26, 29, 34, 35, 36, 37, 38, 39, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98],
            inclusive: !1
          },
          namespace: {
            rules: [26, 29, 30, 31, 32, 33, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98],
            inclusive: !1
          },
          "class-body": {
            rules: [26, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98],
            inclusive: !1
          },
          class: {
            rules: [26, 40, 41, 42, 43, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98],
            inclusive: !1
          },
          acc_descr_multiline: {
            rules: [11, 12, 26, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98],
            inclusive: !1
          },
          acc_descr: {
            rules: [9, 26, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98],
            inclusive: !1
          },
          acc_title: {
            rules: [7, 26, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98],
            inclusive: !1
          },
          callback_args: {
            rules: [22, 23, 26, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98],
            inclusive: !1
          },
          callback_name: {
            rules: [19, 20, 21, 26, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98],
            inclusive: !1
          },
          href: {
            rules: [26, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98],
            inclusive: !1
          },
          struct: {
            rules: [26, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98],
            inclusive: !1
          },
          generic: {
            rules: [26, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98],
            inclusive: !1
          },
          bqstring: {
            rules: [26, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98],
            inclusive: !1
          },
          string: {
            rules: [24, 25, 26, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98],
            inclusive: !1
          },
          INITIAL: {
            rules: [0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 14, 15, 16, 17, 18, 26, 27, 28, 29, 39, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98],
            inclusive: !0
          }
        }
      };
      return O;
    } as any)();
  (Le as any).lexer = Je;
  function oe(this: any): any {
    (this as any).yy = {};
  }
  return (f as any)(oe, "Parser"), (oe as any).prototype = Le, (Le as any).Parser = oe, new (oe as any)();
} as any)();
(Pe as any).parser = Pe;
var _t: any = Pe,
  Xe: any = ["#", "+", "~", "-", ""],
  z: any,
  qe: any = (z = class {
    declare returnType: any;
    declare parameters: any;
    declare id: any;
    declare text: any;
    declare classifier: any;
    declare visibility: any;
    declare memberType: any;
    [key: string]: any;
    constructor(i: any, a: any) {
      (this as any).memberType = a, (this as any).visibility = "", (this as any).classifier = "", (this as any).text = "";
      const n: any = (gt as any)(i, (F as any)());
      ((this as any).parseMember as any)(n);
    }
    getDisplayDetails(): any {
      let i: any = ((this as any).visibility as any) + ((U as any)((this as any).id) as any);
      ((this as any).memberType as any) === ("method" as any) && (i += `(${(U as any)((((this as any).parameters as any).trim as any)())})`, (this as any).returnType && (i += (" : " as any) + ((U as any)((this as any).returnType) as any))), i = ((i as any).trim as any)();
      const a: any = ((this as any).parseClassifier as any)();
      return {
        displayText: i,
        cssStyle: a
      };
    }
    parseMember(i: any): any {
      let a: any = "";
      if (((this as any).memberType as any) === ("method" as any)) {
        const c: any = ((/([#+~-])?(.+)\((.*)\)([\s$*])?(.*)([$*])?/ as any).exec as any)(i);
        if (c) {
          const u: any = (c as any)[1] ? (((c as any)[1] as any).trim as any)() : "";
          if (((Xe as any).includes as any)(u) && ((this as any).visibility = u), (this as any).id = (c as any)[2], (this as any).parameters = (c as any)[3] ? (((c as any)[3] as any).trim as any)() : "", a = (c as any)[4] ? (((c as any)[4] as any).trim as any)() : "", (this as any).returnType = (c as any)[5] ? (((c as any)[5] as any).trim as any)() : "", (a as any) === ("" as any)) {
            const d: any = (((this as any).returnType as any).substring as any)((((this as any).returnType as any).length as any) - (1 as any));
            ((/[$*]/ as any).exec as any)(d) && (a = d, (this as any).returnType = (((this as any).returnType as any).substring as any)(0, (((this as any).returnType as any).length as any) - (1 as any)));
          }
        }
      } else {
        const r: any = (i as any).length,
          c: any = ((i as any).substring as any)(0, 1),
          u: any = ((i as any).substring as any)((r as any) - (1 as any));
        ((Xe as any).includes as any)(c) && ((this as any).visibility = c), ((/[$*]/ as any).exec as any)(u) && (a = u), (this as any).id = ((i as any).substring as any)(((this as any).visibility as any) === ("" as any) ? 0 : 1, (a as any) === ("" as any) ? r : (r as any) - (1 as any));
      }
      (this as any).classifier = a, (this as any).id = (((this as any).id as any).startsWith as any)(" ") ? (" " as any) + ((((this as any).id as any).trim as any)() as any) : (((this as any).id as any).trim as any)();
      const n: any = `${(this as any).visibility ? ("\\" as any) + ((this as any).visibility as any) : ""}${(U as any)((this as any).id)}${((this as any).memberType as any) === ("method" as any) ? `(${(U as any)((this as any).parameters)})${(this as any).returnType ? (" : " as any) + ((U as any)((this as any).returnType) as any) : ""}` : ""}`;
      (this as any).text = ((((n as any).replaceAll as any)("<", "&lt;") as any).replaceAll as any)(">", "&gt;"), (((this as any).text as any).startsWith as any)("\\&lt;") && ((this as any).text = (((this as any).text as any).replace as any)("\\&lt;", "~"));
    }
    parseClassifier(): any {
      switch ((this as any).classifier) {
        case "*":
          return "font-style:italic;";
        case "$":
          return "text-decoration:underline;";
        default:
          return "";
      }
    }
  }, (f as any)(z, "ClassMember"), z),
  fe: string = "classId-",
  He: any = 0,
  M: any = (f as any)((s: any): any => ((I as any).sanitizeText as any)(s, (F as any)()), "sanitizeText"),
  w: any,
  St: any = (w = class {
    declare getConfig: any;
    declare getDiagramTitle: any;
    declare setDiagramTitle: any;
    declare getAccDescription: any;
    declare setAccDescription: any;
    declare getAccTitle: any;
    declare setAccTitle: any;
    declare direction: any;
    declare setupToolTips: any;
    declare relationType: any;
    declare lineType: any;
    declare functions: any;
    declare diagramId: any;
    declare namespaceStack: any;
    declare namespaceCounter: any;
    declare namespaces: any;
    declare interfaces: any;
    declare notes: any;
    declare styleClasses: any;
    declare classes: any;
    declare relations: any;
    [key: string]: any;
    constructor() {
      (this as any).relations = [], (this as any).classes = new (Map as any)(), (this as any).styleClasses = new (Map as any)(), (this as any).notes = new (Map as any)(), (this as any).interfaces = [], (this as any).namespaces = new (Map as any)(), (this as any).namespaceCounter = 0, (this as any).namespaceStack = [], (this as any).diagramId = "", (this as any).functions = [], (this as any).lineType = {
        LINE: 0,
        DOTTED_LINE: 1
      }, (this as any).relationType = {
        AGGREGATION: 0,
        EXTENSION: 1,
        COMPOSITION: 2,
        DEPENDENCY: 3,
        LOLLIPOP: 4
      }, (this as any).setupToolTips = (f as any)((i: any): any => {
        const a: any = (mt as any)();
        (((((((((((Ae as any)(i) as any).select as any)("svg") as any).selectAll as any)("g") as any).filter as any)(function (this: any): any {
          return ((((Ae as any)(this) as any).attr as any)("title") as any) !== (null as any);
        }) as any).on as any)("mouseover", (c: any): any => {
          const u: any = (Ae as any)((c as any).currentTarget),
            d: any = ((u as any).attr as any)("title");
          if (!d) return;
          const m: any = (((c as any).currentTarget as any).getBoundingClientRect as any)();
          ((((((a as any).transition as any)() as any).duration as any)(200) as any).style as any)("opacity", ".9"), ((((((a as any).html as any)(((ut as any).sanitize as any)(d)) as any).style as any)("left", `${(((window as any).scrollX as any) + ((m as any).left as any) as any) + (((m as any).width as any) / (2 as any) as any)}px`) as any).style as any)("top", `${(((window as any).scrollY as any) + ((m as any).bottom as any) as any) + (4 as any)}px`), ((u as any).classed as any)("hover", !0);
        }) as any).on as any)("mouseout", (c: any): any => {
          ((((((a as any).transition as any)() as any).duration as any)(500) as any).style as any)("opacity", 0), (((Ae as any)((c as any).currentTarget) as any).classed as any)("hover", !1);
        });
      }, "setupToolTips"), (this as any).direction = "TB", (this as any).setAccTitle = lt, (this as any).getAccTitle = ct, (this as any).setAccDescription = ot, (this as any).getAccDescription = ht, (this as any).setDiagramTitle = dt, (this as any).getDiagramTitle = pt, (this as any).getConfig = (f as any)((): any => ((F as any)() as any).class, "getConfig"), (((this as any).functions as any).push as any)((((this as any).setupToolTips as any).bind as any)(this)), ((this as any).clear as any)(), (this as any).addRelation = (((this as any).addRelation as any).bind as any)(this), (this as any).addClassesToNamespace = (((this as any).addClassesToNamespace as any).bind as any)(this), (this as any).addNamespace = (((this as any).addNamespace as any).bind as any)(this), (this as any).popNamespace = (((this as any).popNamespace as any).bind as any)(this), (this as any).setCssClass = (((this as any).setCssClass as any).bind as any)(this), (this as any).addMembers = (((this as any).addMembers as any).bind as any)(this), (this as any).addClass = (((this as any).addClass as any).bind as any)(this), (this as any).setClassLabel = (((this as any).setClassLabel as any).bind as any)(this), (this as any).addAnnotation = (((this as any).addAnnotation as any).bind as any)(this), (this as any).addMember = (((this as any).addMember as any).bind as any)(this), (this as any).cleanupLabel = (((this as any).cleanupLabel as any).bind as any)(this), (this as any).addNote = (((this as any).addNote as any).bind as any)(this), (this as any).defineClass = (((this as any).defineClass as any).bind as any)(this), (this as any).setDirection = (((this as any).setDirection as any).bind as any)(this), (this as any).setLink = (((this as any).setLink as any).bind as any)(this), (this as any).bindFunctions = (((this as any).bindFunctions as any).bind as any)(this), (this as any).clear = (((this as any).clear as any).bind as any)(this), (this as any).setTooltip = (((this as any).setTooltip as any).bind as any)(this), (this as any).setClickEvent = (((this as any).setClickEvent as any).bind as any)(this), (this as any).setCssStyle = (((this as any).setCssStyle as any).bind as any)(this);
    }
    splitClassNameAndType(i: any): any {
      const a: any = ((I as any).sanitizeText as any)(i, (F as any)());
      let n: any = "",
        r: any = a;
      if ((((a as any).indexOf as any)("~") as any) > (0 as any)) {
        const c: any = ((a as any).split as any)("~");
        r = (M as any)((c as any)[0]), n = (M as any)((c as any)[1]);
      }
      return {
        className: r,
        type: n
      };
    }
    setClassLabel(i: any, a: any): any {
      const n: any = ((I as any).sanitizeText as any)(i, (F as any)());
      a && (a = (M as any)(a));
      const {
        className: r
      }: any = ((this as any).splitClassNameAndType as any)(n);
      ((((this as any).classes as any).get as any)(r) as any).label = a, ((((this as any).classes as any).get as any)(r) as any).text = `${a}${((((this as any).classes as any).get as any)(r) as any).type ? `<${((((this as any).classes as any).get as any)(r) as any).type}>` : ""}`;
    }
    addClass(i: any): any {
      const a: any = ((I as any).sanitizeText as any)(i, (F as any)()),
        {
          className: n,
          type: r
        }: any = ((this as any).splitClassNameAndType as any)(a);
      if ((((this as any).classes as any).has as any)(n)) return;
      const c: any = ((I as any).sanitizeText as any)(n, (F as any)());
      (((this as any).classes as any).set as any)(c, {
        id: c,
        type: r,
        label: c,
        text: `${c}${r ? `&lt;${r}&gt;` : ""}`,
        shape: "classBox",
        cssClasses: "default",
        methods: [],
        members: [],
        annotations: [],
        styles: [],
        domId: (((fe as any) + (c as any) as any) + ("-" as any) as any) + (He as any)
      }), He++;
    }
    addInterface(i: any, a: any): any {
      const n: any = {
        id: `interface${((this as any).interfaces as any).length}`,
        label: i,
        classId: a
      };
      (((this as any).interfaces as any).push as any)(n);
    }
    setDiagramId(i: any): any {
      (this as any).diagramId = i;
    }
    lookUpDomId(i: any): any {
      const a: any = ((I as any).sanitizeText as any)(i, (F as any)());
      if ((((this as any).classes as any).has as any)(a)) {
        const n: any = ((((this as any).classes as any).get as any)(a) as any).domId;
        return (this as any).diagramId ? `${(this as any).diagramId}-${n}` : n;
      }
      throw new (Error as any)(("Class not found: " as any) + (a as any));
    }
    clear(): any {
      (this as any).relations = [], (this as any).classes = new (Map as any)(), (this as any).notes = new (Map as any)(), (this as any).interfaces = [], (this as any).functions = [], (((this as any).functions as any).push as any)((((this as any).setupToolTips as any).bind as any)(this)), (this as any).namespaces = new (Map as any)(), (this as any).namespaceCounter = 0, (this as any).namespaceStack = [], (this as any).diagramId = "", (this as any).direction = "TB", (At as any)();
    }
    getClass(i: any): any {
      return (((this as any).classes as any).get as any)(i);
    }
    getClasses(): any {
      return (this as any).classes;
    }
    getRelations(): any {
      return (this as any).relations;
    }
    getNote(i: any): any {
      const a: any = (typeof i as any) == ("number" as any) ? `note${i}` : i;
      return (((this as any).notes as any).get as any)(a);
    }
    getNotes(): any {
      return (this as any).notes;
    }
    addRelation(i: any): any {
      ((we as any).debug as any)(("Adding relation: " as any) + (((JSON as any).stringify as any)(i) as any));
      const a: any = [((this as any).relationType as any).LOLLIPOP, ((this as any).relationType as any).AGGREGATION, ((this as any).relationType as any).COMPOSITION, ((this as any).relationType as any).DEPENDENCY, ((this as any).relationType as any).EXTENSION];
      (((i as any).relation as any).type1 as any) === (((this as any).relationType as any).LOLLIPOP as any) && !((a as any).includes as any)(((i as any).relation as any).type2) ? (((this as any).addClass as any)((i as any).id2), ((this as any).addInterface as any)((i as any).id1, (i as any).id2), (i as any).id1 = `interface${(((this as any).interfaces as any).length as any) - (1 as any)}`) : (((i as any).relation as any).type2 as any) === (((this as any).relationType as any).LOLLIPOP as any) && !((a as any).includes as any)(((i as any).relation as any).type1) ? (((this as any).addClass as any)((i as any).id1), ((this as any).addInterface as any)((i as any).id2, (i as any).id1), (i as any).id2 = `interface${(((this as any).interfaces as any).length as any) - (1 as any)}`) : (((this as any).addClass as any)((i as any).id1), ((this as any).addClass as any)((i as any).id2)), (i as any).id1 = (((this as any).splitClassNameAndType as any)((i as any).id1) as any).className, (i as any).id2 = (((this as any).splitClassNameAndType as any)((i as any).id2) as any).className, (i as any).relationTitle1 = ((I as any).sanitizeText as any)((((i as any).relationTitle1 as any).trim as any)(), (F as any)()), (i as any).relationTitle2 = ((I as any).sanitizeText as any)((((i as any).relationTitle2 as any).trim as any)(), (F as any)()), (((this as any).relations as any).push as any)(i);
    }
    addAnnotation(i: any, a: any): any {
      const n: any = (((this as any).splitClassNameAndType as any)(i) as any).className;
      ((((((this as any).classes as any).get as any)(n) as any).annotations as any).push as any)(a);
    }
    addMember(i: any, a: any): any {
      ((this as any).addClass as any)(i);
      const n: any = (((this as any).splitClassNameAndType as any)(i) as any).className,
        r: any = (((this as any).classes as any).get as any)(n);
      if ((typeof a as any) == ("string" as any)) {
        const c: any = ((a as any).trim as any)();
        ((c as any).startsWith as any)("<<") && ((c as any).endsWith as any)(">>") ? (((r as any).annotations as any).push as any)((M as any)(((c as any).substring as any)(2, ((c as any).length as any) - (2 as any)))) : (((c as any).indexOf as any)(")") as any) > (0 as any) ? (((r as any).methods as any).push as any)(new (qe as any)(c, "method")) : c && (((r as any).members as any).push as any)(new (qe as any)(c, "attribute"));
      }
    }
    addMembers(i: any, a: any): any {
      ((Array as any).isArray as any)(a) && (((a as any).reverse as any)(), ((a as any).forEach as any)((n: any): any => ((this as any).addMember as any)(i, n)));
    }
    addNote(i: any, a: any): any {
      const n: any = ((this as any).notes as any).size,
        r: any = {
          id: `note${n}`,
          class: a,
          text: i,
          index: n
        };
      return (((this as any).notes as any).set as any)((r as any).id, r), (r as any).id;
    }
    cleanupLabel(i: any): any {
      return ((i as any).startsWith as any)(":") && (i = ((i as any).substring as any)(1)), (M as any)(((i as any).trim as any)());
    }
    setCssClass(i: any, a: any): any {
      ((((i as any).split as any)(",") as any).forEach as any)((n: any): any => {
        let r: any = n;
        ((/\d/ as any).exec as any)((n as any)[0]) && (r = (fe as any) + (r as any)), r = (((this as any).splitClassNameAndType as any)(r) as any).className;
        const c: any = (((this as any).classes as any).get as any)(r);
        c && ((c as any).cssClasses += (" " as any) + (a as any));
      });
    }
    defineClass(i: any, a: any): any {
      for (const n of i) {
        let r: any = (((this as any).styleClasses as any).get as any)(n);
        (r as any) === (void 0 as any) && (r = {
          id: n,
          styles: [],
          textStyles: []
        }, (((this as any).styleClasses as any).set as any)(n, r)), a && ((a as any).forEach as any)((c: any): any => {
          if (((/color/ as any).exec as any)(c)) {
            const u: any = ((c as any).replace as any)("fill", "bgFill");
            (((r as any).textStyles as any).push as any)(u);
          }
          (((r as any).styles as any).push as any)(c);
        }), (((this as any).classes as any).forEach as any)((c: any): any => {
          (((c as any).cssClasses as any).includes as any)(n) && (((c as any).styles as any).push as any)(...((a as any).flatMap as any)((u: any): any => ((u as any).split as any)(",")));
        });
      }
    }
    setTooltip(i: any, a: any): any {
      ((((i as any).split as any)(",") as any).forEach as any)((n: any): any => {
        if ((a as any) !== (void 0 as any)) {
          const r: any = (((this as any).splitClassNameAndType as any)(n) as any).className,
            c: any = (((this as any).classes as any).get as any)(r);
          c && ((c as any).tooltip = (M as any)(a));
        }
      });
    }
    getTooltip(i: any, a: any): any {
      return a && (((this as any).namespaces as any).has as any)(a) ? (((((((this as any).namespaces as any).get as any)(a) as any).classes as any).get as any)(i) as any).tooltip : ((((this as any).classes as any).get as any)(i) as any).tooltip;
    }
    setLink(i: any, a: any, n: any): any {
      const r: any = (F as any)();
      ((((i as any).split as any)(",") as any).forEach as any)((c: any): any => {
        let u: any = c;
        ((/\d/ as any).exec as any)((c as any)[0]) && (u = (fe as any) + (u as any)), u = (((this as any).splitClassNameAndType as any)(u) as any).className;
        const d: any = (((this as any).classes as any).get as any)(u);
        d && ((d as any).link = ((Ve as any).formatUrl as any)(a, r), ((r as any).securityLevel as any) === ("sandbox" as any) ? (d as any).linkTarget = "_top" : (typeof n as any) == ("string" as any) ? (d as any).linkTarget = (M as any)(n) : (d as any).linkTarget = "_blank");
      }), ((this as any).setCssClass as any)(i, "clickable");
    }
    setClickEvent(i: any, a: any, n: any): any {
      ((((i as any).split as any)(",") as any).forEach as any)((r: any): any => {
        ((this as any).setClickFunc as any)(r, a, n);
        const c: any = (((this as any).splitClassNameAndType as any)(r) as any).className,
          u: any = (((this as any).classes as any).get as any)(c);
        u && ((u as any).haveCallback = !0);
      }), ((this as any).setCssClass as any)(i, "clickable");
    }
    setClickFunc(i: any, a: any, n: any): any {
      const r: any = ((I as any).sanitizeText as any)(i, (F as any)());
      if ((((F as any)() as any).securityLevel as any) !== ("loose" as any) || (a as any) === (void 0 as any)) return;
      const u: any = (((this as any).splitClassNameAndType as any)(r) as any).className;
      if ((((this as any).classes as any).has as any)(u)) {
        let d: any = [];
        if ((typeof n as any) == ("string" as any)) {
          d = ((n as any).split as any)(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
          for (let m: any = 0; (m as any) < ((d as any).length as any); m++) {
            let g: any = (((d as any)[m] as any).trim as any)();
            ((g as any).startsWith as any)('"') && ((g as any).endsWith as any)('"') && (g = ((g as any).substr as any)(1, ((g as any).length as any) - (2 as any))), (d as any)[m] = g;
          }
        }
        ((d as any).length as any) === (0 as any) && ((d as any).push as any)(u), (((this as any).functions as any).push as any)((): any => {
          const m: any = ((this as any).lookUpDomId as any)(u),
            g: any = ((document as any).querySelector as any)(`[id="${m}"]`);
          (g as any) !== (null as any) && ((g as any).addEventListener as any)("click", (): any => {
            ((Ve as any).runFunc as any)(a, ...d);
          }, !1);
        });
      }
    }
    bindFunctions(i: any): any {
      (((this as any).functions as any).forEach as any)((a: any): any => {
        (a as any)(i);
      });
    }
    escapeHtml(i: any): any {
      return ((((((((((i as any).replace as any)(/&/g, "&amp;") as any).replace as any)(/</g, "&lt;") as any).replace as any)(/>/g, "&gt;") as any).replace as any)(/"/g, "&quot;") as any).replace as any)(/'/g, "&#39;");
    }
    getDirection(): any {
      return (this as any).direction;
    }
    setDirection(i: any): any {
      (this as any).direction = i;
    }
    static resolveQualifiedId(i: any, a: any): any {
      const n: any = ((a as any).at as any)(-1);
      return n ? `${n}.${i}` : i;
    }
    static getAncestorIds(i: any): any {
      const a: any = ((i as any).split as any)("."),
        n: any = new (Array as any)((a as any).length);
      (n as any)[0] = (a as any)[0];
      for (let r: any = 1; (r as any) < ((a as any).length as any); r++) (n as any)[r] = `${(n as any)[(r as any) - (1 as any)]}.${(a as any)[r]}`;
      return n;
    }
    createNamespaceNode(i: any, a: any, n: any, r: any = !1): any {
      return {
        id: i,
        label: a,
        classes: new (Map as any)(),
        notes: new (Map as any)(),
        children: new (Map as any)(),
        domId: (((fe as any) + (i as any) as any) + ("-" as any) as any) + ((this as any).namespaceCounter++ as any),
        parent: n,
        explicit: r
      };
    }
    linkParentChild(i: any, a: any): any {
      const n: any = (((this as any).namespaces as any).get as any)(i),
        r: any = (((this as any).namespaces as any).get as any)(a);
      !n || !r || ((((n as any).children as any).has as any)(a) || (((n as any).children as any).set as any)(a, r), (r as any).parent ??= i);
    }
    addNamespace(i: any, a: any): any {
      const n: any = ((w as any).resolveQualifiedId as any)(i, (this as any).namespaceStack);
      if ((((this as any).namespaceStack as any).push as any)(n), (((this as any).namespaces as any).has as any)(n)) {
        const u: any = (((this as any).namespaces as any).get as any)(n);
        return (u as any).explicit = !0, a && ((u as any).label = a), n;
      }
      const r: any = ((n as any).split as any)("."),
        c: any = ((w as any).getAncestorIds as any)(n);
      for (let u: any = 0; (u as any) < ((c as any).length as any); u++) {
        const d: any = (c as any)[u],
          m: any = (u as any) > (0 as any) ? (c as any)[(u as any) - (1 as any)] : void 0,
          g: any = (u as any) === (((c as any).length as any) - (1 as any) as any),
          N: any = g && a ? a : (r as any)[u];
        (((this as any).namespaces as any).has as any)(d) ? g && (((((this as any).namespaces as any).get as any)(d) as any).explicit = !0) : (((this as any).namespaces as any).set as any)(d, ((this as any).createNamespaceNode as any)(d, N, m, g)), m && ((this as any).linkParentChild as any)(m, d);
      }
      return n;
    }
    popNamespace(): any {
      (((this as any).namespaceStack as any).pop as any)();
    }
    getNamespace(i: any): any {
      return (((this as any).namespaces as any).get as any)(i);
    }
    getNamespaces(): any {
      return (this as any).namespaces;
    }
    addClassesToNamespace(i: any, a: any, n: any): any {
      if ((((this as any).namespaces as any).has as any)(i)) {
        for (const r of a) {
          const {
              className: c
            }: any = ((this as any).splitClassNameAndType as any)(r),
            u: any = ((this as any).getClass as any)(c);
          (u as any).parent = i, ((((((this as any).namespaces as any).get as any)(i) as any).classes as any).set as any)(c, u);
        }
        for (const r of n) {
          const c: any = ((this as any).getNote as any)(r);
          (c as any).parent = i, ((((((this as any).namespaces as any).get as any)(i) as any).notes as any).set as any)(r, c);
        }
      }
    }
    setCssStyle(i: any, a: any): any {
      const n: any = (((this as any).classes as any).get as any)(i);
      if (!(!a || !n)) for (const r of a) ((r as any).includes as any)(",") ? (((n as any).styles as any).push as any)(...((r as any).split as any)(",")) : (((n as any).styles as any).push as any)(r);
    }
    getArrowMarker(i: any): any {
      let a: any;
      switch (i) {
        case 0:
          a = "aggregation";
          break;
        case 1:
          a = "extension";
          break;
        case 2:
          a = "composition";
          break;
        case 3:
          a = "dependency";
          break;
        case 4:
          a = "lollipop";
          break;
        default:
          a = "none";
      }
      return a;
    }
    resolveExplicitAncestor(i: any): any {
      let a: any = i;
      for (; a;) {
        const n: any = (((this as any).namespaces as any).get as any)(a);
        if (!n) return;
        if ((n as any).explicit) return a;
        a = (n as any).parent;
      }
    }
    getData(): any {
      const i: any = [],
        a: any = [],
        n: any = (F as any)(),
        r: any = (n as any).class?.hierarchicalNamespaces ?? !0;
      for (const u of (((this as any).namespaces as any).values as any)()) {
        if (!r && !(u as any).explicit) continue;
        const d: any = {
          id: (u as any).id,
          label: r ? (u as any).label : (u as any).id,
          isGroup: !0,
          padding: ((n as any).class as any).padding ?? 16,
          shape: "rect",
          cssStyles: [],
          look: (n as any).look,
          parentId: r ? (u as any).parent : void 0
        };
        ((i as any).push as any)(d);
      }
      for (const u of (((this as any).classes as any).values as any)()) {
        const d: any = r ? (u as any).parent : ((this as any).resolveExplicitAncestor as any)((u as any).parent),
          m: any = {
            ...u,
            type: void 0,
            isGroup: !1,
            parentId: d,
            look: (n as any).look
          };
        ((i as any).push as any)(m);
      }
      for (const u of (((this as any).notes as any).values as any)()) {
        const d: any = r ? (u as any).parent : ((this as any).resolveExplicitAncestor as any)((u as any).parent),
          m: any = {
            id: (u as any).id,
            label: (u as any).text,
            isGroup: !1,
            shape: "note",
            padding: ((n as any).class as any).padding ?? 6,
            cssStyles: ["text-align: left", "white-space: nowrap", `fill: ${((n as any).themeVariables as any).noteBkgColor}`, `stroke: ${((n as any).themeVariables as any).noteBorderColor}`],
            look: (n as any).look,
            parentId: d,
            labelType: "markdown"
          };
        ((i as any).push as any)(m);
        const g: any = (((this as any).classes as any).get as any)((u as any).class)?.id;
        if (g) {
          const N: any = {
            id: `edgeNote${(u as any).index}`,
            start: (u as any).id,
            end: g,
            type: "normal",
            thickness: "normal",
            classes: "relation",
            arrowTypeStart: "none",
            arrowTypeEnd: "none",
            arrowheadStyle: "",
            labelStyle: [""],
            style: ["fill: none"],
            pattern: "dotted",
            look: (n as any).look
          };
          ((a as any).push as any)(N);
        }
      }
      for (const u of (this as any).interfaces) {
        const d: any = {
          id: (u as any).id,
          label: (u as any).label,
          isGroup: !1,
          shape: "rect",
          cssStyles: ["opacity: 0;"],
          look: (n as any).look
        };
        ((i as any).push as any)(d);
      }
      let c: any = 0;
      for (const u of (this as any).relations) {
        c++;
        const d: any = {
          id: (ft as any)((u as any).id1, (u as any).id2, {
            prefix: "id",
            counter: c
          }),
          start: (u as any).id1,
          end: (u as any).id2,
          type: "normal",
          label: (u as any).title,
          labelpos: "c",
          thickness: "normal",
          classes: "relation",
          arrowTypeStart: ((this as any).getArrowMarker as any)(((u as any).relation as any).type1),
          arrowTypeEnd: ((this as any).getArrowMarker as any)(((u as any).relation as any).type2),
          startLabelRight: ((u as any).relationTitle1 as any) === ("none" as any) ? "" : (u as any).relationTitle1,
          endLabelLeft: ((u as any).relationTitle2 as any) === ("none" as any) ? "" : (u as any).relationTitle2,
          arrowheadStyle: "",
          labelStyle: ["display: inline-block"],
          style: (u as any).style || "",
          pattern: (((u as any).relation as any).lineType as any) == (1 as any) ? "dashed" : "solid",
          look: (n as any).look,
          labelType: "markdown"
        };
        ((a as any).push as any)(d);
      }
      return {
        nodes: i,
        edges: a,
        other: {},
        config: n,
        direction: ((this as any).getDirection as any)()
      };
    }
  }, (f as any)(w, "ClassDB"), w),
  Ct: any = (f as any)((s: any): any => `g.classGroup text {
  fill: ${(s as any).nodeBorder || (s as any).classText};
  stroke: none;
  font-family: ${(s as any).fontFamily};
  font-size: 10px;

  .title {
    font-weight: bolder;
  }

}

  .cluster-label text {
    fill: ${(s as any).titleColor};
  }
  .cluster-label span {
    color: ${(s as any).titleColor};
  }
  .cluster-label span p {
    background-color: transparent;
  }

  .cluster rect {
    fill: ${(s as any).clusterBkg};
    stroke: ${(s as any).clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${(s as any).titleColor};
  }

  .cluster span {
    color: ${(s as any).titleColor};
  }

.nodeLabel, .edgeLabel {
  color: ${(s as any).classText};
}

.noteLabel .nodeLabel, .noteLabel .edgeLabel {
  color: ${(s as any).noteTextColor};
}
.edgeLabel .label rect {
  fill: ${(s as any).mainBkg};
}
.label text {
  fill: ${(s as any).classText};
}

.labelBkg {
  background: ${(s as any).mainBkg};
}
.edgeLabel .label span {
  background: ${(s as any).mainBkg};
}

.classTitle {
  font-weight: bolder;
}
.node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${(s as any).mainBkg};
    stroke: ${(s as any).nodeBorder};
    stroke-width: ${(s as any).strokeWidth};
  }


.divider {
  stroke: ${(s as any).nodeBorder};
  stroke-width: 1;
}

g.clickable {
  cursor: pointer;
}

g.classGroup rect {
  fill: ${(s as any).mainBkg};
  stroke: ${(s as any).nodeBorder};
}

g.classGroup line {
  stroke: ${(s as any).nodeBorder};
  stroke-width: 1;
}

.classLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${(s as any).mainBkg};
  opacity: 0.5;
}

.classLabel .label {
  fill: ${(s as any).nodeBorder};
  font-size: 10px;
}

.relation {
  stroke: ${(s as any).lineColor};
  stroke-width: ${(s as any).strokeWidth};
  fill: none;
}

.dashed-line{
  stroke-dasharray: 3;
}

.dotted-line{
  stroke-dasharray: 1 2;
}

[id$="-compositionStart"], .composition {
  fill: ${(s as any).lineColor} !important;
  stroke: ${(s as any).lineColor} !important;
  stroke-width: 1;
}

[id$="-compositionEnd"], .composition {
  fill: ${(s as any).lineColor} !important;
  stroke: ${(s as any).lineColor} !important;
  stroke-width: 1;
}

[id$="-dependencyStart"], .dependency {
  fill: ${(s as any).lineColor} !important;
  stroke: ${(s as any).lineColor} !important;
  stroke-width: 1;
}

[id$="-dependencyEnd"], .dependency {
  fill: ${(s as any).lineColor} !important;
  stroke: ${(s as any).lineColor} !important;
  stroke-width: 1;
}

[id$="-extensionStart"], .extension {
  fill: transparent !important;
  stroke: ${(s as any).lineColor} !important;
  stroke-width: 1;
}

[id$="-extensionEnd"], .extension {
  fill: transparent !important;
  stroke: ${(s as any).lineColor} !important;
  stroke-width: 1;
}

[id$="-aggregationStart"], .aggregation {
  fill: transparent !important;
  stroke: ${(s as any).lineColor} !important;
  stroke-width: 1;
}

[id$="-aggregationEnd"], .aggregation {
  fill: transparent !important;
  stroke: ${(s as any).lineColor} !important;
  stroke-width: 1;
}

[id$="-lollipopStart"], .lollipop {
  fill: ${(s as any).mainBkg} !important;
  stroke: ${(s as any).lineColor} !important;
  stroke-width: 1;
}

[id$="-lollipopEnd"], .lollipop {
  fill: ${(s as any).mainBkg} !important;
  stroke: ${(s as any).lineColor} !important;
  stroke-width: 1;
}

.edgeTerminals {
  font-size: 11px;
  line-height: initial;
}

.classTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${(s as any).textColor};
}

.edgeLabel[data-look="neo"] {
  background-color: ${(s as any).edgeLabelBackground};
  p {
    background-color: ${(s as any).edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${(s as any).edgeLabelBackground};
    fill: ${(s as any).edgeLabelBackground};
  }
  text-align: center;
}
  ${(st as any)()}
`, "getStyles"),
  Nt: any = Ct,
  bt: any = (f as any)((s: any, i: any = "TB"): any => {
    if (!(s as any).doc) return i;
    let a: any = i;
    for (const n of (s as any).doc) ((n as any).stmt as any) === ("dir" as any) && (a = (n as any).value);
    return a;
  }, "getDir"),
  kt: any = (f as any)(function (this: any, s: any, i: any): any {
    return (((i as any).db as any).getClasses as any)();
  }, "getClasses"),
  Et: any = (f as any)(async function (this: any, s: any, i: any, a: any, n: any): Promise<any> {
    ((we as any).info as any)("REF0:"), ((we as any).info as any)("Drawing class diagram (v3)", i);
    const {
      securityLevel: r,
      state: c,
      layout: u
    }: any = (F as any)();
    (((n as any).db as any).setDiagramId as any)(i);
    const d: any = (((n as any).db as any).getData as any)(),
      m: any = (it as any)(i, r);
    (d as any).type = (n as any).type, (d as any).layoutAlgorithm = (nt as any)(u), (d as any).nodeSpacing = c?.nodeSpacing || 50, (d as any).rankSpacing = c?.rankSpacing || 50, (d as any).markers = ["aggregation", "extension", "composition", "dependency", "lollipop"], (d as any).diagramId = i, await (rt as any)(d, m);
    const g: number = 8;
    ((Ve as any).insertTitle as any)(m, "classDiagramTitleText", c?.titleTopMargin ?? 25, (((n as any).db as any).getDiagramTitle as any)()), (at as any)(m, g, "classDiagram", c?.useMaxWidth ?? !0);
  }, "draw"),
  Lt: any = {
    getClasses: kt,
    draw: Et,
    getDir: bt
  };
export { St as C, _t as a, Lt as c, Nt as s };
//# debugId=8c114ae8-f255-46ba-be87-2429eda9b0e6
