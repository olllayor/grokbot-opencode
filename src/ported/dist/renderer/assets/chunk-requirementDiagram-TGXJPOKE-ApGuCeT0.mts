declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "47c367dd-803a-4748-a3a5-8c7931428abc", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-47c367dd-803a-4748-a3a5-8c7931428abc");
  } catch (e: any) {}
} as any)();
import { g as Ge } from "./chunk-chunk-XXDRQBXY-DVdINg3t.js";
import { s as Xe } from "./chunk-chunk-VR4S4FIN-HF2Hbh9A.js";
import { _ as f, z as Be, b as Je, a as Ze, s as et, g as tt, o as st, p as it, c as Ne, l as qe, q as rt, u as nt, v as at, x as lt, y as ct } from "./chunk-mermaid.core-B9Iu5CoE.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var Ce: any = (function (this: any): any {
  var e: any = (f as any)(function (this: any, $: any, i: any, l: any, o: any): any {
      for (l = l || {}, o = ($ as any).length; o--; (l as any)[($ as any)[o]] = i);
      return l;
    }, "o"),
    n: any = [1, 3],
    u: any = [1, 4],
    h: any = [1, 5],
    r: any = [1, 6],
    a: any = [5, 6, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 77, 89, 90],
    m: any = [1, 22],
    p: any = [2, 7],
    y: any = [1, 26],
    S: any = [1, 27],
    k: any = [1, 28],
    q: any = [1, 29],
    C: any = [1, 33],
    A: any = [1, 34],
    V: any = [1, 35],
    v: any = [1, 36],
    L: any = [1, 37],
    x: any = [1, 38],
    O: any = [1, 24],
    w: any = [1, 31],
    D: any = [1, 32],
    M: any = [1, 30],
    R: any = [1, 39],
    g: any = [1, 40],
    E: any = [5, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 77, 89, 90],
    P: any = [1, 61],
    X: any = [89, 90],
    Ae: any = [5, 8, 9, 11, 13, 21, 22, 23, 24, 27, 29, 41, 42, 43, 44, 45, 46, 54, 61, 63, 72, 74, 75, 76, 77, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    Ee: any = [27, 29],
    Ve: any = [1, 70],
    ve: any = [1, 71],
    Le: any = [1, 72],
    xe: any = [1, 73],
    Oe: any = [1, 74],
    we: any = [1, 75],
    De: any = [1, 76],
    ee: any = [1, 83],
    U: any = [1, 80],
    te: any = [1, 84],
    se: any = [1, 85],
    ie: any = [1, 86],
    re: any = [1, 87],
    ne: any = [1, 88],
    ae: any = [1, 89],
    le: any = [1, 90],
    ce: any = [1, 91],
    oe: any = [1, 92],
    pe: any = [5, 8, 9, 11, 13, 21, 22, 23, 24, 27, 41, 42, 43, 44, 45, 46, 54, 72, 74, 75, 76, 77, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    Y: any = [63, 64],
    Me: any = [1, 101],
    Fe: any = [5, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 76, 77, 89, 90],
    T: any = [5, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 75, 76, 77, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    B: any = [1, 110],
    Q: any = [1, 106],
    H: any = [1, 107],
    K: any = [1, 108],
    W: any = [1, 109],
    j: any = [1, 111],
    he: any = [1, 116],
    ue: any = [1, 117],
    fe: any = [1, 114],
    me: any = [1, 115],
    Se: any = {
      trace: (f as any)(function (this: any): any {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        directive: 4,
        NEWLINE: 5,
        RD: 6,
        diagram: 7,
        EOF: 8,
        acc_title: 9,
        acc_title_value: 10,
        acc_descr: 11,
        acc_descr_value: 12,
        acc_descr_multiline_value: 13,
        requirementDef: 14,
        elementDef: 15,
        relationshipDef: 16,
        direction: 17,
        styleStatement: 18,
        classDefStatement: 19,
        classStatement: 20,
        direction_tb: 21,
        direction_bt: 22,
        direction_rl: 23,
        direction_lr: 24,
        requirementType: 25,
        requirementName: 26,
        STRUCT_START: 27,
        requirementBody: 28,
        STYLE_SEPARATOR: 29,
        idList: 30,
        ID: 31,
        COLONSEP: 32,
        id: 33,
        TEXT: 34,
        text: 35,
        RISK: 36,
        riskLevel: 37,
        VERIFYMTHD: 38,
        verifyType: 39,
        STRUCT_STOP: 40,
        REQUIREMENT: 41,
        FUNCTIONAL_REQUIREMENT: 42,
        INTERFACE_REQUIREMENT: 43,
        PERFORMANCE_REQUIREMENT: 44,
        PHYSICAL_REQUIREMENT: 45,
        DESIGN_CONSTRAINT: 46,
        LOW_RISK: 47,
        MED_RISK: 48,
        HIGH_RISK: 49,
        VERIFY_ANALYSIS: 50,
        VERIFY_DEMONSTRATION: 51,
        VERIFY_INSPECTION: 52,
        VERIFY_TEST: 53,
        ELEMENT: 54,
        elementName: 55,
        elementBody: 56,
        TYPE: 57,
        type: 58,
        DOCREF: 59,
        ref: 60,
        END_ARROW_L: 61,
        relationship: 62,
        LINE: 63,
        END_ARROW_R: 64,
        CONTAINS: 65,
        COPIES: 66,
        DERIVES: 67,
        SATISFIES: 68,
        VERIFIES: 69,
        REFINES: 70,
        TRACES: 71,
        CLASSDEF: 72,
        stylesOpt: 73,
        CLASS: 74,
        ALPHA: 75,
        COMMA: 76,
        STYLE: 77,
        style: 78,
        styleComponent: 79,
        NUM: 80,
        COLON: 81,
        UNIT: 82,
        SPACE: 83,
        BRKT: 84,
        PCT: 85,
        MINUS: 86,
        LABEL: 87,
        SEMICOLON: 88,
        unqString: 89,
        qString: 90,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        5: "NEWLINE",
        6: "RD",
        8: "EOF",
        9: "acc_title",
        10: "acc_title_value",
        11: "acc_descr",
        12: "acc_descr_value",
        13: "acc_descr_multiline_value",
        21: "direction_tb",
        22: "direction_bt",
        23: "direction_rl",
        24: "direction_lr",
        27: "STRUCT_START",
        29: "STYLE_SEPARATOR",
        31: "ID",
        32: "COLONSEP",
        34: "TEXT",
        36: "RISK",
        38: "VERIFYMTHD",
        40: "STRUCT_STOP",
        41: "REQUIREMENT",
        42: "FUNCTIONAL_REQUIREMENT",
        43: "INTERFACE_REQUIREMENT",
        44: "PERFORMANCE_REQUIREMENT",
        45: "PHYSICAL_REQUIREMENT",
        46: "DESIGN_CONSTRAINT",
        47: "LOW_RISK",
        48: "MED_RISK",
        49: "HIGH_RISK",
        50: "VERIFY_ANALYSIS",
        51: "VERIFY_DEMONSTRATION",
        52: "VERIFY_INSPECTION",
        53: "VERIFY_TEST",
        54: "ELEMENT",
        57: "TYPE",
        59: "DOCREF",
        61: "END_ARROW_L",
        63: "LINE",
        64: "END_ARROW_R",
        65: "CONTAINS",
        66: "COPIES",
        67: "DERIVES",
        68: "SATISFIES",
        69: "VERIFIES",
        70: "REFINES",
        71: "TRACES",
        72: "CLASSDEF",
        74: "CLASS",
        75: "ALPHA",
        76: "COMMA",
        77: "STYLE",
        80: "NUM",
        81: "COLON",
        82: "UNIT",
        83: "SPACE",
        84: "BRKT",
        85: "PCT",
        86: "MINUS",
        87: "LABEL",
        88: "SEMICOLON",
        89: "unqString",
        90: "qString"
      },
      productions_: [0, [3, 3], [3, 2], [3, 4], [4, 2], [4, 2], [4, 1], [7, 0], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [17, 1], [17, 1], [17, 1], [17, 1], [14, 5], [14, 7], [28, 5], [28, 5], [28, 5], [28, 5], [28, 2], [28, 1], [25, 1], [25, 1], [25, 1], [25, 1], [25, 1], [25, 1], [37, 1], [37, 1], [37, 1], [39, 1], [39, 1], [39, 1], [39, 1], [15, 5], [15, 7], [56, 5], [56, 5], [56, 2], [56, 1], [16, 5], [16, 5], [62, 1], [62, 1], [62, 1], [62, 1], [62, 1], [62, 1], [62, 1], [19, 3], [20, 3], [20, 3], [30, 1], [30, 3], [30, 1], [30, 3], [18, 3], [73, 1], [73, 3], [78, 1], [78, 2], [79, 1], [79, 1], [79, 1], [79, 1], [79, 1], [79, 1], [79, 1], [79, 1], [79, 1], [79, 1], [26, 1], [26, 1], [33, 1], [33, 1], [35, 1], [35, 1], [55, 1], [55, 1], [58, 1], [58, 1], [60, 1], [60, 1]],
      performAction: (f as any)(function (this: any, i: any, l: any, o: any, s: any, d: any, t: any, de: any): any {
        var c: any = ((t as any).length as any) - (1 as any);
        switch (d) {
          case 4:
            (this as any).$ = (((t as any)[c] as any).trim as any)(), ((s as any).setAccTitle as any)((this as any).$);
            break;
          case 5:
          case 6:
            (this as any).$ = (((t as any)[c] as any).trim as any)(), ((s as any).setAccDescription as any)((this as any).$);
            break;
          case 7:
            (this as any).$ = [];
            break;
          case 17:
            ((s as any).setDirection as any)("TB");
            break;
          case 18:
            ((s as any).setDirection as any)("BT");
            break;
          case 19:
            ((s as any).setDirection as any)("RL");
            break;
          case 20:
            ((s as any).setDirection as any)("LR");
            break;
          case 21:
            ((s as any).addRequirement as any)((t as any)[(c as any) - (3 as any)], (t as any)[(c as any) - (4 as any)]);
            break;
          case 22:
            ((s as any).addRequirement as any)((t as any)[(c as any) - (5 as any)], (t as any)[(c as any) - (6 as any)]), ((s as any).setClass as any)([(t as any)[(c as any) - (5 as any)]], (t as any)[(c as any) - (3 as any)]);
            break;
          case 23:
            ((s as any).setNewReqId as any)((t as any)[(c as any) - (2 as any)]);
            break;
          case 24:
            ((s as any).setNewReqText as any)((t as any)[(c as any) - (2 as any)]);
            break;
          case 25:
            ((s as any).setNewReqRisk as any)((t as any)[(c as any) - (2 as any)]);
            break;
          case 26:
            ((s as any).setNewReqVerifyMethod as any)((t as any)[(c as any) - (2 as any)]);
            break;
          case 29:
            (this as any).$ = ((s as any).RequirementType as any).REQUIREMENT;
            break;
          case 30:
            (this as any).$ = ((s as any).RequirementType as any).FUNCTIONAL_REQUIREMENT;
            break;
          case 31:
            (this as any).$ = ((s as any).RequirementType as any).INTERFACE_REQUIREMENT;
            break;
          case 32:
            (this as any).$ = ((s as any).RequirementType as any).PERFORMANCE_REQUIREMENT;
            break;
          case 33:
            (this as any).$ = ((s as any).RequirementType as any).PHYSICAL_REQUIREMENT;
            break;
          case 34:
            (this as any).$ = ((s as any).RequirementType as any).DESIGN_CONSTRAINT;
            break;
          case 35:
            (this as any).$ = ((s as any).RiskLevel as any).LOW_RISK;
            break;
          case 36:
            (this as any).$ = ((s as any).RiskLevel as any).MED_RISK;
            break;
          case 37:
            (this as any).$ = ((s as any).RiskLevel as any).HIGH_RISK;
            break;
          case 38:
            (this as any).$ = ((s as any).VerifyType as any).VERIFY_ANALYSIS;
            break;
          case 39:
            (this as any).$ = ((s as any).VerifyType as any).VERIFY_DEMONSTRATION;
            break;
          case 40:
            (this as any).$ = ((s as any).VerifyType as any).VERIFY_INSPECTION;
            break;
          case 41:
            (this as any).$ = ((s as any).VerifyType as any).VERIFY_TEST;
            break;
          case 42:
            ((s as any).addElement as any)((t as any)[(c as any) - (3 as any)]);
            break;
          case 43:
            ((s as any).addElement as any)((t as any)[(c as any) - (5 as any)]), ((s as any).setClass as any)([(t as any)[(c as any) - (5 as any)]], (t as any)[(c as any) - (3 as any)]);
            break;
          case 44:
            ((s as any).setNewElementType as any)((t as any)[(c as any) - (2 as any)]);
            break;
          case 45:
            ((s as any).setNewElementDocRef as any)((t as any)[(c as any) - (2 as any)]);
            break;
          case 48:
            ((s as any).addRelationship as any)((t as any)[(c as any) - (2 as any)], (t as any)[c], (t as any)[(c as any) - (4 as any)]);
            break;
          case 49:
            ((s as any).addRelationship as any)((t as any)[(c as any) - (2 as any)], (t as any)[(c as any) - (4 as any)], (t as any)[c]);
            break;
          case 50:
            (this as any).$ = ((s as any).Relationships as any).CONTAINS;
            break;
          case 51:
            (this as any).$ = ((s as any).Relationships as any).COPIES;
            break;
          case 52:
            (this as any).$ = ((s as any).Relationships as any).DERIVES;
            break;
          case 53:
            (this as any).$ = ((s as any).Relationships as any).SATISFIES;
            break;
          case 54:
            (this as any).$ = ((s as any).Relationships as any).VERIFIES;
            break;
          case 55:
            (this as any).$ = ((s as any).Relationships as any).REFINES;
            break;
          case 56:
            (this as any).$ = ((s as any).Relationships as any).TRACES;
            break;
          case 57:
            (this as any).$ = (t as any)[(c as any) - (2 as any)], ((s as any).defineClass as any)((t as any)[(c as any) - (1 as any)], (t as any)[c]);
            break;
          case 58:
            ((s as any).setClass as any)((t as any)[(c as any) - (1 as any)], (t as any)[c]);
            break;
          case 59:
            ((s as any).setClass as any)([(t as any)[(c as any) - (2 as any)]], (t as any)[c]);
            break;
          case 60:
          case 62:
            (this as any).$ = [(t as any)[c]];
            break;
          case 61:
          case 63:
            (this as any).$ = (((t as any)[(c as any) - (2 as any)] as any).concat as any)([(t as any)[c]]);
            break;
          case 64:
            (this as any).$ = (t as any)[(c as any) - (2 as any)], ((s as any).setCssStyle as any)((t as any)[(c as any) - (1 as any)], (t as any)[c]);
            break;
          case 65:
            (this as any).$ = [(t as any)[c]];
            break;
          case 66:
            (((t as any)[(c as any) - (2 as any)] as any).push as any)((t as any)[c]), (this as any).$ = (t as any)[(c as any) - (2 as any)];
            break;
          case 68:
            (this as any).$ = ((t as any)[(c as any) - (1 as any)] as any) + ((t as any)[c] as any);
            break;
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: 2,
        6: n,
        9: u,
        11: h,
        13: r
      }, {
        1: [3]
      }, {
        3: 8,
        4: 2,
        5: [1, 7],
        6: n,
        9: u,
        11: h,
        13: r
      }, {
        5: [1, 9]
      }, {
        10: [1, 10]
      }, {
        12: [1, 11]
      }, (e as any)(a, [2, 6]), {
        3: 12,
        4: 2,
        6: n,
        9: u,
        11: h,
        13: r
      }, {
        1: [2, 2]
      }, {
        4: 17,
        5: m,
        7: 13,
        8: p,
        9: u,
        11: h,
        13: r,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: y,
        22: S,
        23: k,
        24: q,
        25: 23,
        33: 25,
        41: C,
        42: A,
        43: V,
        44: v,
        45: L,
        46: x,
        54: O,
        72: w,
        74: D,
        77: M,
        89: R,
        90: g
      }, (e as any)(a, [2, 4]), (e as any)(a, [2, 5]), {
        1: [2, 1]
      }, {
        8: [1, 41]
      }, {
        4: 17,
        5: m,
        7: 42,
        8: p,
        9: u,
        11: h,
        13: r,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: y,
        22: S,
        23: k,
        24: q,
        25: 23,
        33: 25,
        41: C,
        42: A,
        43: V,
        44: v,
        45: L,
        46: x,
        54: O,
        72: w,
        74: D,
        77: M,
        89: R,
        90: g
      }, {
        4: 17,
        5: m,
        7: 43,
        8: p,
        9: u,
        11: h,
        13: r,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: y,
        22: S,
        23: k,
        24: q,
        25: 23,
        33: 25,
        41: C,
        42: A,
        43: V,
        44: v,
        45: L,
        46: x,
        54: O,
        72: w,
        74: D,
        77: M,
        89: R,
        90: g
      }, {
        4: 17,
        5: m,
        7: 44,
        8: p,
        9: u,
        11: h,
        13: r,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: y,
        22: S,
        23: k,
        24: q,
        25: 23,
        33: 25,
        41: C,
        42: A,
        43: V,
        44: v,
        45: L,
        46: x,
        54: O,
        72: w,
        74: D,
        77: M,
        89: R,
        90: g
      }, {
        4: 17,
        5: m,
        7: 45,
        8: p,
        9: u,
        11: h,
        13: r,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: y,
        22: S,
        23: k,
        24: q,
        25: 23,
        33: 25,
        41: C,
        42: A,
        43: V,
        44: v,
        45: L,
        46: x,
        54: O,
        72: w,
        74: D,
        77: M,
        89: R,
        90: g
      }, {
        4: 17,
        5: m,
        7: 46,
        8: p,
        9: u,
        11: h,
        13: r,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: y,
        22: S,
        23: k,
        24: q,
        25: 23,
        33: 25,
        41: C,
        42: A,
        43: V,
        44: v,
        45: L,
        46: x,
        54: O,
        72: w,
        74: D,
        77: M,
        89: R,
        90: g
      }, {
        4: 17,
        5: m,
        7: 47,
        8: p,
        9: u,
        11: h,
        13: r,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: y,
        22: S,
        23: k,
        24: q,
        25: 23,
        33: 25,
        41: C,
        42: A,
        43: V,
        44: v,
        45: L,
        46: x,
        54: O,
        72: w,
        74: D,
        77: M,
        89: R,
        90: g
      }, {
        4: 17,
        5: m,
        7: 48,
        8: p,
        9: u,
        11: h,
        13: r,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: y,
        22: S,
        23: k,
        24: q,
        25: 23,
        33: 25,
        41: C,
        42: A,
        43: V,
        44: v,
        45: L,
        46: x,
        54: O,
        72: w,
        74: D,
        77: M,
        89: R,
        90: g
      }, {
        4: 17,
        5: m,
        7: 49,
        8: p,
        9: u,
        11: h,
        13: r,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: y,
        22: S,
        23: k,
        24: q,
        25: 23,
        33: 25,
        41: C,
        42: A,
        43: V,
        44: v,
        45: L,
        46: x,
        54: O,
        72: w,
        74: D,
        77: M,
        89: R,
        90: g
      }, {
        4: 17,
        5: m,
        7: 50,
        8: p,
        9: u,
        11: h,
        13: r,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: y,
        22: S,
        23: k,
        24: q,
        25: 23,
        33: 25,
        41: C,
        42: A,
        43: V,
        44: v,
        45: L,
        46: x,
        54: O,
        72: w,
        74: D,
        77: M,
        89: R,
        90: g
      }, {
        26: 51,
        89: [1, 52],
        90: [1, 53]
      }, {
        55: 54,
        89: [1, 55],
        90: [1, 56]
      }, {
        29: [1, 59],
        61: [1, 57],
        63: [1, 58]
      }, (e as any)(E, [2, 17]), (e as any)(E, [2, 18]), (e as any)(E, [2, 19]), (e as any)(E, [2, 20]), {
        30: 60,
        33: 62,
        75: P,
        89: R,
        90: g
      }, {
        30: 63,
        33: 62,
        75: P,
        89: R,
        90: g
      }, {
        30: 64,
        33: 62,
        75: P,
        89: R,
        90: g
      }, (e as any)(X, [2, 29]), (e as any)(X, [2, 30]), (e as any)(X, [2, 31]), (e as any)(X, [2, 32]), (e as any)(X, [2, 33]), (e as any)(X, [2, 34]), (e as any)(Ae, [2, 81]), (e as any)(Ae, [2, 82]), {
        1: [2, 3]
      }, {
        8: [2, 8]
      }, {
        8: [2, 9]
      }, {
        8: [2, 10]
      }, {
        8: [2, 11]
      }, {
        8: [2, 12]
      }, {
        8: [2, 13]
      }, {
        8: [2, 14]
      }, {
        8: [2, 15]
      }, {
        8: [2, 16]
      }, {
        27: [1, 65],
        29: [1, 66]
      }, (e as any)(Ee, [2, 79]), (e as any)(Ee, [2, 80]), {
        27: [1, 67],
        29: [1, 68]
      }, (e as any)(Ee, [2, 85]), (e as any)(Ee, [2, 86]), {
        62: 69,
        65: Ve,
        66: ve,
        67: Le,
        68: xe,
        69: Oe,
        70: we,
        71: De
      }, {
        62: 77,
        65: Ve,
        66: ve,
        67: Le,
        68: xe,
        69: Oe,
        70: we,
        71: De
      }, {
        30: 78,
        33: 62,
        75: P,
        89: R,
        90: g
      }, {
        73: 79,
        75: ee,
        76: U,
        78: 81,
        79: 82,
        80: te,
        81: se,
        82: ie,
        83: re,
        84: ne,
        85: ae,
        86: le,
        87: ce,
        88: oe
      }, (e as any)(pe, [2, 60]), (e as any)(pe, [2, 62]), {
        73: 93,
        75: ee,
        76: U,
        78: 81,
        79: 82,
        80: te,
        81: se,
        82: ie,
        83: re,
        84: ne,
        85: ae,
        86: le,
        87: ce,
        88: oe
      }, {
        30: 94,
        33: 62,
        75: P,
        76: U,
        89: R,
        90: g
      }, {
        5: [1, 95]
      }, {
        30: 96,
        33: 62,
        75: P,
        89: R,
        90: g
      }, {
        5: [1, 97]
      }, {
        30: 98,
        33: 62,
        75: P,
        89: R,
        90: g
      }, {
        63: [1, 99]
      }, (e as any)(Y, [2, 50]), (e as any)(Y, [2, 51]), (e as any)(Y, [2, 52]), (e as any)(Y, [2, 53]), (e as any)(Y, [2, 54]), (e as any)(Y, [2, 55]), (e as any)(Y, [2, 56]), {
        64: [1, 100]
      }, (e as any)(E, [2, 59], {
        76: U
      }), (e as any)(E, [2, 64], {
        76: Me
      }), {
        33: 103,
        75: [1, 102],
        89: R,
        90: g
      }, (e as any)(Fe, [2, 65], {
        79: 104,
        75: ee,
        80: te,
        81: se,
        82: ie,
        83: re,
        84: ne,
        85: ae,
        86: le,
        87: ce,
        88: oe
      }), (e as any)(T, [2, 67]), (e as any)(T, [2, 69]), (e as any)(T, [2, 70]), (e as any)(T, [2, 71]), (e as any)(T, [2, 72]), (e as any)(T, [2, 73]), (e as any)(T, [2, 74]), (e as any)(T, [2, 75]), (e as any)(T, [2, 76]), (e as any)(T, [2, 77]), (e as any)(T, [2, 78]), (e as any)(E, [2, 57], {
        76: Me
      }), (e as any)(E, [2, 58], {
        76: U
      }), {
        5: B,
        28: 105,
        31: Q,
        34: H,
        36: K,
        38: W,
        40: j
      }, {
        27: [1, 112],
        76: U
      }, {
        5: he,
        40: ue,
        56: 113,
        57: fe,
        59: me
      }, {
        27: [1, 118],
        76: U
      }, {
        33: 119,
        89: R,
        90: g
      }, {
        33: 120,
        89: R,
        90: g
      }, {
        75: ee,
        78: 121,
        79: 82,
        80: te,
        81: se,
        82: ie,
        83: re,
        84: ne,
        85: ae,
        86: le,
        87: ce,
        88: oe
      }, (e as any)(pe, [2, 61]), (e as any)(pe, [2, 63]), (e as any)(T, [2, 68]), (e as any)(E, [2, 21]), {
        32: [1, 122]
      }, {
        32: [1, 123]
      }, {
        32: [1, 124]
      }, {
        32: [1, 125]
      }, {
        5: B,
        28: 126,
        31: Q,
        34: H,
        36: K,
        38: W,
        40: j
      }, (e as any)(E, [2, 28]), {
        5: [1, 127]
      }, (e as any)(E, [2, 42]), {
        32: [1, 128]
      }, {
        32: [1, 129]
      }, {
        5: he,
        40: ue,
        56: 130,
        57: fe,
        59: me
      }, (e as any)(E, [2, 47]), {
        5: [1, 131]
      }, (e as any)(E, [2, 48]), (e as any)(E, [2, 49]), (e as any)(Fe, [2, 66], {
        79: 104,
        75: ee,
        80: te,
        81: se,
        82: ie,
        83: re,
        84: ne,
        85: ae,
        86: le,
        87: ce,
        88: oe
      }), {
        33: 132,
        89: R,
        90: g
      }, {
        35: 133,
        89: [1, 134],
        90: [1, 135]
      }, {
        37: 136,
        47: [1, 137],
        48: [1, 138],
        49: [1, 139]
      }, {
        39: 140,
        50: [1, 141],
        51: [1, 142],
        52: [1, 143],
        53: [1, 144]
      }, (e as any)(E, [2, 27]), {
        5: B,
        28: 145,
        31: Q,
        34: H,
        36: K,
        38: W,
        40: j
      }, {
        58: 146,
        89: [1, 147],
        90: [1, 148]
      }, {
        60: 149,
        89: [1, 150],
        90: [1, 151]
      }, (e as any)(E, [2, 46]), {
        5: he,
        40: ue,
        56: 152,
        57: fe,
        59: me
      }, {
        5: [1, 153]
      }, {
        5: [1, 154]
      }, {
        5: [2, 83]
      }, {
        5: [2, 84]
      }, {
        5: [1, 155]
      }, {
        5: [2, 35]
      }, {
        5: [2, 36]
      }, {
        5: [2, 37]
      }, {
        5: [1, 156]
      }, {
        5: [2, 38]
      }, {
        5: [2, 39]
      }, {
        5: [2, 40]
      }, {
        5: [2, 41]
      }, (e as any)(E, [2, 22]), {
        5: [1, 157]
      }, {
        5: [2, 87]
      }, {
        5: [2, 88]
      }, {
        5: [1, 158]
      }, {
        5: [2, 89]
      }, {
        5: [2, 90]
      }, (e as any)(E, [2, 43]), {
        5: B,
        28: 159,
        31: Q,
        34: H,
        36: K,
        38: W,
        40: j
      }, {
        5: B,
        28: 160,
        31: Q,
        34: H,
        36: K,
        38: W,
        40: j
      }, {
        5: B,
        28: 161,
        31: Q,
        34: H,
        36: K,
        38: W,
        40: j
      }, {
        5: B,
        28: 162,
        31: Q,
        34: H,
        36: K,
        38: W,
        40: j
      }, {
        5: he,
        40: ue,
        56: 163,
        57: fe,
        59: me
      }, {
        5: he,
        40: ue,
        56: 164,
        57: fe,
        59: me
      }, (e as any)(E, [2, 23]), (e as any)(E, [2, 24]), (e as any)(E, [2, 25]), (e as any)(E, [2, 26]), (e as any)(E, [2, 44]), (e as any)(E, [2, 45])],
      defaultActions: {
        8: [2, 2],
        12: [2, 1],
        41: [2, 3],
        42: [2, 8],
        43: [2, 9],
        44: [2, 10],
        45: [2, 11],
        46: [2, 12],
        47: [2, 13],
        48: [2, 14],
        49: [2, 15],
        50: [2, 16],
        134: [2, 83],
        135: [2, 84],
        137: [2, 35],
        138: [2, 36],
        139: [2, 37],
        141: [2, 38],
        142: [2, 39],
        143: [2, 40],
        144: [2, 41],
        147: [2, 87],
        148: [2, 88],
        150: [2, 89],
        151: [2, 90]
      },
      parseError: (f as any)(function (this: any, i: any, l: any): any {
        if ((l as any).recoverable) ((this as any).trace as any)(i);else {
          var o: any = new (Error as any)(i);
          throw (o as any).hash = l, o;
        }
      }, "parseError"),
      parse: (f as any)(function (this: any, i: any): any {
        var be: any;
        var l: any = this,
          o: any = [0],
          s: any = [],
          d: any = [null],
          t: any = [],
          de: any = (this as any).table,
          c: any = "",
          ge: any = 0,
          $e: any = 0,
          Ke: number = 2,
          Pe: number = 1,
          We: any = (((t as any).slice as any).call as any)(arguments, 1),
          _: any = ((Object as any).create as any)((this as any).lexer),
          z: any = {
            yy: {}
          };
        for (be in (this as any).yy) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).yy, be) && (((z as any).yy as any)[be] = ((this as any).yy as any)[be]);
        ((_ as any).setInput as any)(i, (z as any).yy), ((z as any).yy as any).lexer = _, ((z as any).yy as any).parser = this, (typeof (_ as any).yylloc as any) > ("u" as any) && ((_ as any).yylloc = {});
        var Ie: any = (_ as any).yylloc;
        ((t as any).push as any)(Ie);
        var je: any = (_ as any).options && ((_ as any).options as any).ranges;
        (typeof ((z as any).yy as any).parseError as any) == ("function" as any) ? (this as any).parseError = ((z as any).yy as any).parseError : (this as any).parseError = (((Object as any).getPrototypeOf as any)(this) as any).parseError;
        function ze(this: any, I: any): any {
          (o as any).length = ((o as any).length as any) - ((2 as any) * (I as any) as any), (d as any).length = ((d as any).length as any) - (I as any), (t as any).length = ((t as any).length as any) - (I as any);
        }
        (f as any)(ze, "popStack");
        function Ue(this: any): any {
          var I: any;
          return I = ((s as any).pop as any)() || ((_ as any).lex as any)() || Pe, (typeof I as any) != ("number" as any) && (I instanceof Array && (s = I, I = ((s as any).pop as any)()), I = ((l as any).symbols_ as any)[I] || I), I;
        }
        (f as any)(Ue, "lex");
        for (var b: any, G: any, N: any, ke: any, J: any = {}, ye: any, F: any, Ye: any, _e: any;;) {
          if (G = (o as any)[((o as any).length as any) - (1 as any)], ((this as any).defaultActions as any)[G] ? N = ((this as any).defaultActions as any)[G] : (((b as any) === (null as any) || (typeof b as any) > ("u" as any)) && (b = (Ue as any)()), N = (de as any)[G] && ((de as any)[G] as any)[b]), (typeof N as any) > ("u" as any) || !(N as any).length || !(N as any)[0]) {
            var Te: any = "";
            _e = [];
            for (ye in (de as any)[G]) ((this as any).terminals_ as any)[ye] && (ye as any) > (Ke as any) && ((_e as any).push as any)((("'" as any) + (((this as any).terminals_ as any)[ye] as any) as any) + ("'" as any));
            (_ as any).showPosition ? Te = (((((((("Parse error on line " as any) + ((ge as any) + (1 as any) as any) as any) + (`:
` as any) as any) + (((_ as any).showPosition as any)() as any) as any) + (`
Expecting ` as any) as any) + (((_e as any).join as any)(", ") as any) as any) + (", got '" as any) as any) + ((((this as any).terminals_ as any)[b] || b) as any) as any) + ("'" as any) : Te = ((("Parse error on line " as any) + ((ge as any) + (1 as any) as any) as any) + (": Unexpected " as any) as any) + (((b as any) == (Pe as any) ? "end of input" : (("'" as any) + ((((this as any).terminals_ as any)[b] || b) as any) as any) + ("'" as any)) as any), ((this as any).parseError as any)(Te, {
              text: (_ as any).match,
              token: ((this as any).terminals_ as any)[b] || b,
              line: (_ as any).yylineno,
              loc: Ie,
              expected: _e
            });
          }
          if ((N as any)[0] instanceof Array && ((N as any).length as any) > (1 as any)) throw new (Error as any)(((("Parse Error: multiple actions possible at state: " as any) + (G as any) as any) + (", token: " as any) as any) + (b as any));
          switch ((N as any)[0]) {
            case 1:
              ((o as any).push as any)(b), ((d as any).push as any)((_ as any).yytext), ((t as any).push as any)((_ as any).yylloc), ((o as any).push as any)((N as any)[1]), b = null, $e = (_ as any).yyleng, c = (_ as any).yytext, ge = (_ as any).yylineno, Ie = (_ as any).yylloc;
              break;
            case 2:
              if (F = (((this as any).productions_ as any)[(N as any)[1]] as any)[1], (J as any).$ = (d as any)[((d as any).length as any) - (F as any)], (J as any)._$ = {
                first_line: ((t as any)[((t as any).length as any) - ((F || 1) as any)] as any).first_line,
                last_line: ((t as any)[((t as any).length as any) - (1 as any)] as any).last_line,
                first_column: ((t as any)[((t as any).length as any) - ((F || 1) as any)] as any).first_column,
                last_column: ((t as any)[((t as any).length as any) - (1 as any)] as any).last_column
              }, je && (((J as any)._$ as any).range = [(((t as any)[((t as any).length as any) - ((F || 1) as any)] as any).range as any)[0], (((t as any)[((t as any).length as any) - (1 as any)] as any).range as any)[1]]), ke = (((this as any).performAction as any).apply as any)(J, (([c, $e, ge, (z as any).yy, (N as any)[1], d, t] as any).concat as any)(We)), (typeof ke as any) < ("u" as any)) return ke;
              F && (o = ((o as any).slice as any)(0, ((-1 as any) * (F as any) as any) * (2 as any)), d = ((d as any).slice as any)(0, (-1 as any) * (F as any)), t = ((t as any).slice as any)(0, (-1 as any) * (F as any))), ((o as any).push as any)((((this as any).productions_ as any)[(N as any)[1]] as any)[0]), ((d as any).push as any)((J as any).$), ((t as any).push as any)((J as any)._$), Ye = ((de as any)[(o as any)[((o as any).length as any) - (2 as any)]] as any)[(o as any)[((o as any).length as any) - (1 as any)]], ((o as any).push as any)(Ye);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }, "parse")
    },
    He: any = (function (this: any): any {
      var $: any = {
        EOF: 1,
        parseError: (f as any)(function (this: any, l: any, o: any): any {
          if (((this as any).yy as any).parser) ((((this as any).yy as any).parser as any).parseError as any)(l, o);else throw new (Error as any)(l);
        }, "parseError"),
        setInput: (f as any)(function (this: any, i: any, l: any): any {
          return (this as any).yy = l || (this as any).yy || {}, (this as any)._input = i, (this as any)._more = (this as any)._backtrack = (this as any).done = !1, (this as any).yylineno = (this as any).yyleng = 0, (this as any).yytext = (this as any).matched = (this as any).match = "", (this as any).conditionStack = ["INITIAL"], (this as any).yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [0, 0]), (this as any).offset = 0, this;
        }, "setInput"),
        input: (f as any)(function (this: any): any {
          var i: any = ((this as any)._input as any)[0];
          (this as any).yytext += i, (this as any).yyleng++, (this as any).offset++, (this as any).match += i, (this as any).matched += i;
          var l: any = ((i as any).match as any)(/(?:\r\n?|\n).*/g);
          return l ? ((this as any).yylineno++, ((this as any).yylloc as any).last_line++) : ((this as any).yylloc as any).last_column++, ((this as any).options as any).ranges && (((this as any).yylloc as any).range as any)[1]++, (this as any)._input = (((this as any)._input as any).slice as any)(1), i;
        }, "input"),
        unput: (f as any)(function (this: any, i: any): any {
          var l: any = (i as any).length,
            o: any = ((i as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any)._input = (i as any) + ((this as any)._input as any), (this as any).yytext = (((this as any).yytext as any).substr as any)(0, (((this as any).yytext as any).length as any) - (l as any)), (this as any).offset -= l;
          var s: any = (((this as any).match as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any).match = (((this as any).match as any).substr as any)(0, (((this as any).match as any).length as any) - (1 as any)), (this as any).matched = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (1 as any)), ((o as any).length as any) - (1 as any) && ((this as any).yylineno -= ((o as any).length as any) - (1 as any));
          var d: any = ((this as any).yylloc as any).range;
          return (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).first_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).first_column,
            last_column: o ? (((((o as any).length as any) === ((s as any).length as any) ? ((this as any).yylloc as any).first_column : 0) as any) + (((s as any)[((s as any).length as any) - ((o as any).length as any)] as any).length as any) as any) - (((o as any)[0] as any).length as any) : (((this as any).yylloc as any).first_column as any) - (l as any)
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(d as any)[0], (((d as any)[0] as any) + ((this as any).yyleng as any) as any) - (l as any)]), (this as any).yyleng = ((this as any).yytext as any).length, this;
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
        less: (f as any)(function (this: any, i: any): any {
          ((this as any).unput as any)((((this as any).match as any).slice as any)(i));
        }, "less"),
        pastInput: (f as any)(function (this: any): any {
          var i: any = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (((this as any).match as any).length as any));
          return ((((i as any).length as any) > (20 as any) ? "..." : "") as any) + (((((i as any).substr as any)(-20) as any).replace as any)(/\n/g, "") as any);
        }, "pastInput"),
        upcomingInput: (f as any)(function (this: any): any {
          var i: any = (this as any).match;
          return ((i as any).length as any) < (20 as any) && (i += (((this as any)._input as any).substr as any)(0, (20 as any) - ((i as any).length as any))), (((((i as any).substr as any)(0, 20) as any) + ((((i as any).length as any) > (20 as any) ? "..." : "") as any) as any).replace as any)(/\n/g, "");
        }, "upcomingInput"),
        showPosition: (f as any)(function (this: any): any {
          var i: any = ((this as any).pastInput as any)(),
            l: any = ((new (Array as any)(((i as any).length as any) + (1 as any)) as any).join as any)("-");
          return ((((i as any) + (((this as any).upcomingInput as any)() as any) as any) + (`
` as any) as any) + (l as any) as any) + ("^" as any);
        }, "showPosition"),
        test_match: (f as any)(function (this: any, i: any, l: any): any {
          var t: any;
          var o: any, s: any, d: any;
          if (((this as any).options as any).backtrack_lexer && (d = {
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
          }, ((this as any).options as any).ranges && (((d as any).yylloc as any).range = ((((this as any).yylloc as any).range as any).slice as any)(0))), s = (((i as any)[0] as any).match as any)(/(?:\r\n?|\n).*/g), s && ((this as any).yylineno += (s as any).length), (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).last_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).last_column,
            last_column: s ? (((s as any)[((s as any).length as any) - (1 as any)] as any).length as any) - ((((((s as any)[((s as any).length as any) - (1 as any)] as any).match as any)(/\r?\n?/) as any)[0] as any).length as any) : (((this as any).yylloc as any).last_column as any) + (((i as any)[0] as any).length as any)
          }, (this as any).yytext += (i as any)[0], (this as any).match += (i as any)[0], (this as any).matches = i, (this as any).yyleng = ((this as any).yytext as any).length, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(this as any).offset, (this as any).offset += (this as any).yyleng]), (this as any)._more = !1, (this as any)._backtrack = !1, (this as any)._input = (((this as any)._input as any).slice as any)(((i as any)[0] as any).length), (this as any).matched += (i as any)[0], o = (((this as any).performAction as any).call as any)(this, (this as any).yy, this, l, ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]), (this as any).done && (this as any)._input && ((this as any).done = !1), o) return o;
          if ((this as any)._backtrack) {
            for (t in d) (this as any)[t] = (d as any)[t];
            return !1;
          }
          return !1;
        }, "test_match"),
        next: (f as any)(function (this: any): any {
          if ((this as any).done) return (this as any).EOF;
          (this as any)._input || ((this as any).done = !0);
          var i: any, l: any, o: any, s: any;
          (this as any)._more || ((this as any).yytext = "", (this as any).match = "");
          for (var d: any = ((this as any)._currentRules as any)(), t: any = 0; (t as any) < ((d as any).length as any); t++) if (o = (((this as any)._input as any).match as any)(((this as any).rules as any)[(d as any)[t]]), o && (!l || (((o as any)[0] as any).length as any) > (((l as any)[0] as any).length as any))) {
            if (l = o, s = t, ((this as any).options as any).backtrack_lexer) {
              if (i = ((this as any).test_match as any)(o, (d as any)[t]), (i as any) !== (!1 as any)) return i;
              if ((this as any)._backtrack) {
                l = !1;
                continue;
              } else return !1;
            } else if (!((this as any).options as any).flex) break;
          }
          return l ? (i = ((this as any).test_match as any)(l, (d as any)[s]), (i as any) !== (!1 as any) ? i : !1) : ((this as any)._input as any) === ("" as any) ? (this as any).EOF : ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. Unrecognized text.
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
        }, "next"),
        lex: (f as any)(function (this: any): any {
          var l: any = ((this as any).next as any)();
          return l || ((this as any).lex as any)();
        }, "lex"),
        begin: (f as any)(function (this: any, l: any): any {
          (((this as any).conditionStack as any).push as any)(l);
        }, "begin"),
        popState: (f as any)(function (this: any): any {
          var l: any = (((this as any).conditionStack as any).length as any) - (1 as any);
          return (l as any) > (0 as any) ? (((this as any).conditionStack as any).pop as any)() : ((this as any).conditionStack as any)[0];
        }, "popState"),
        _currentRules: (f as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length && ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)] ? (((this as any).conditions as any)[((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]] as any).rules : (((this as any).conditions as any).INITIAL as any).rules;
        }, "_currentRules"),
        topState: (f as any)(function (this: any, l: any): any {
          return l = ((((this as any).conditionStack as any).length as any) - (1 as any) as any) - (((Math as any).abs as any)(l || 0) as any), (l as any) >= (0 as any) ? ((this as any).conditionStack as any)[l] : "INITIAL";
        }, "topState"),
        pushState: (f as any)(function (this: any, l: any): any {
          ((this as any).begin as any)(l);
        }, "pushState"),
        stateStackSize: (f as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": !0
        },
        performAction: (f as any)(function (this: any, l: any, o: any, s: any, d: any): any {
          switch (s) {
            case 0:
              return "title";
            case 1:
              return ((this as any).begin as any)("acc_title"), 9;
            case 2:
              return ((this as any).popState as any)(), "acc_title_value";
            case 3:
              return ((this as any).begin as any)("acc_descr"), 11;
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
              return 21;
            case 9:
              return 22;
            case 10:
              return 23;
            case 11:
              return 24;
            case 12:
              return 5;
            case 13:
              break;
            case 14:
              break;
            case 15:
              break;
            case 16:
              return 8;
            case 17:
              return 6;
            case 18:
              return 27;
            case 19:
              return 40;
            case 20:
              return 29;
            case 21:
              return 32;
            case 22:
              return 31;
            case 23:
              return 34;
            case 24:
              return 36;
            case 25:
              return 38;
            case 26:
              return 41;
            case 27:
              return 42;
            case 28:
              return 43;
            case 29:
              return 44;
            case 30:
              return 45;
            case 31:
              return 46;
            case 32:
              return 47;
            case 33:
              return 48;
            case 34:
              return 49;
            case 35:
              return 50;
            case 36:
              return 51;
            case 37:
              return 52;
            case 38:
              return 53;
            case 39:
              return 54;
            case 40:
              return 65;
            case 41:
              return 66;
            case 42:
              return 67;
            case 43:
              return 68;
            case 44:
              return 69;
            case 45:
              return 70;
            case 46:
              return 71;
            case 47:
              return 57;
            case 48:
              return 59;
            case 49:
              return ((this as any).begin as any)("style"), 77;
            case 50:
              return 75;
            case 51:
              return 81;
            case 52:
              return 88;
            case 53:
              return "PERCENT";
            case 54:
              return 86;
            case 55:
              return 84;
            case 56:
              break;
            case 57:
              ((this as any).begin as any)("string");
              break;
            case 58:
              ((this as any).popState as any)();
              break;
            case 59:
              return ((this as any).begin as any)("style"), 72;
            case 60:
              return ((this as any).begin as any)("style"), 74;
            case 61:
              return 61;
            case 62:
              return 64;
            case 63:
              return 63;
            case 64:
              ((this as any).begin as any)("string");
              break;
            case 65:
              ((this as any).popState as any)();
              break;
            case 66:
              return "qString";
            case 67:
              return (o as any).yytext = (((o as any).yytext as any).trim as any)(), 89;
            case 68:
              return 75;
            case 69:
              return 80;
            case 70:
              return 76;
          }
        }, "anonymous"),
        rules: [/^(?:title\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:(\r?\n)+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:$)/i, /^(?:requirementDiagram\b)/i, /^(?:\{)/i, /^(?:\})/i, /^(?::{3})/i, /^(?::)/i, /^(?:id\b)/i, /^(?:text\b)/i, /^(?:risk\b)/i, /^(?:verifyMethod\b)/i, /^(?:requirement\b)/i, /^(?:functionalRequirement\b)/i, /^(?:interfaceRequirement\b)/i, /^(?:performanceRequirement\b)/i, /^(?:physicalRequirement\b)/i, /^(?:designConstraint\b)/i, /^(?:low\b)/i, /^(?:medium\b)/i, /^(?:high\b)/i, /^(?:analysis\b)/i, /^(?:demonstration\b)/i, /^(?:inspection\b)/i, /^(?:test\b)/i, /^(?:element\b)/i, /^(?:contains\b)/i, /^(?:copies\b)/i, /^(?:derives\b)/i, /^(?:satisfies\b)/i, /^(?:verifies\b)/i, /^(?:refines\b)/i, /^(?:traces\b)/i, /^(?:type\b)/i, /^(?:docref\b)/i, /^(?:style\b)/i, /^(?:\w+)/i, /^(?::)/i, /^(?:;)/i, /^(?:%)/i, /^(?:-)/i, /^(?:#)/i, /^(?: )/i, /^(?:["])/i, /^(?:\n)/i, /^(?:classDef\b)/i, /^(?:class\b)/i, /^(?:<-)/i, /^(?:->)/i, /^(?:-)/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[\w][^:,\r\n\{\<\>\-\=]*)/i, /^(?:\w+)/i, /^(?:[0-9]+)/i, /^(?:,)/i],
        conditions: {
          acc_descr_multiline: {
            rules: [6, 7, 68, 69, 70],
            inclusive: !1
          },
          acc_descr: {
            rules: [4, 68, 69, 70],
            inclusive: !1
          },
          acc_title: {
            rules: [2, 68, 69, 70],
            inclusive: !1
          },
          style: {
            rules: [50, 51, 52, 53, 54, 55, 56, 57, 58, 68, 69, 70],
            inclusive: !1
          },
          unqString: {
            rules: [68, 69, 70],
            inclusive: !1
          },
          token: {
            rules: [68, 69, 70],
            inclusive: !1
          },
          string: {
            rules: [65, 66, 68, 69, 70],
            inclusive: !1
          },
          INITIAL: {
            rules: [0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 59, 60, 61, 62, 63, 64, 67, 68, 69, 70],
            inclusive: !0
          }
        }
      };
      return $;
    } as any)();
  (Se as any).lexer = He;
  function Re(this: any): any {
    (this as any).yy = {};
  }
  return (f as any)(Re, "Parser"), (Re as any).prototype = Se, (Se as any).Parser = Re, new (Re as any)();
} as any)();
(Ce as any).parser = Ce;
var ot: any = Ce,
  Z: any,
  ht: any = (Z = class {
    declare getConfig: any;
    declare getDiagramTitle: any;
    declare setDiagramTitle: any;
    declare getAccDescription: any;
    declare setAccDescription: any;
    declare getAccTitle: any;
    declare setAccTitle: any;
    declare Relationships: any;
    declare VerifyType: any;
    declare RiskLevel: any;
    declare RequirementType: any;
    declare direction: any;
    declare classes: any;
    declare elements: any;
    declare latestElement: any;
    declare requirements: any;
    declare latestRequirement: any;
    declare relations: any;
    [key: string]: any;
    constructor() {
      (this as any).relations = [], (this as any).latestRequirement = ((this as any).getInitialRequirement as any)(), (this as any).requirements = new (Map as any)(), (this as any).latestElement = ((this as any).getInitialElement as any)(), (this as any).elements = new (Map as any)(), (this as any).classes = new (Map as any)(), (this as any).direction = "TB", (this as any).RequirementType = {
        REQUIREMENT: "Requirement",
        FUNCTIONAL_REQUIREMENT: "Functional Requirement",
        INTERFACE_REQUIREMENT: "Interface Requirement",
        PERFORMANCE_REQUIREMENT: "Performance Requirement",
        PHYSICAL_REQUIREMENT: "Physical Requirement",
        DESIGN_CONSTRAINT: "Design Constraint"
      }, (this as any).RiskLevel = {
        LOW_RISK: "Low",
        MED_RISK: "Medium",
        HIGH_RISK: "High"
      }, (this as any).VerifyType = {
        VERIFY_ANALYSIS: "Analysis",
        VERIFY_DEMONSTRATION: "Demonstration",
        VERIFY_INSPECTION: "Inspection",
        VERIFY_TEST: "Test"
      }, (this as any).Relationships = {
        CONTAINS: "contains",
        COPIES: "copies",
        DERIVES: "derives",
        SATISFIES: "satisfies",
        VERIFIES: "verifies",
        REFINES: "refines",
        TRACES: "traces"
      }, (this as any).setAccTitle = Je, (this as any).getAccTitle = Ze, (this as any).setAccDescription = et, (this as any).getAccDescription = tt, (this as any).setDiagramTitle = st, (this as any).getDiagramTitle = it, (this as any).getConfig = (f as any)((): any => ((Ne as any)() as any).requirement, "getConfig"), ((this as any).clear as any)(), (this as any).setDirection = (((this as any).setDirection as any).bind as any)(this), (this as any).addRequirement = (((this as any).addRequirement as any).bind as any)(this), (this as any).setNewReqId = (((this as any).setNewReqId as any).bind as any)(this), (this as any).setNewReqRisk = (((this as any).setNewReqRisk as any).bind as any)(this), (this as any).setNewReqText = (((this as any).setNewReqText as any).bind as any)(this), (this as any).setNewReqVerifyMethod = (((this as any).setNewReqVerifyMethod as any).bind as any)(this), (this as any).addElement = (((this as any).addElement as any).bind as any)(this), (this as any).setNewElementType = (((this as any).setNewElementType as any).bind as any)(this), (this as any).setNewElementDocRef = (((this as any).setNewElementDocRef as any).bind as any)(this), (this as any).addRelationship = (((this as any).addRelationship as any).bind as any)(this), (this as any).setCssStyle = (((this as any).setCssStyle as any).bind as any)(this), (this as any).setClass = (((this as any).setClass as any).bind as any)(this), (this as any).defineClass = (((this as any).defineClass as any).bind as any)(this), (this as any).setAccTitle = (((this as any).setAccTitle as any).bind as any)(this), (this as any).setAccDescription = (((this as any).setAccDescription as any).bind as any)(this);
    }
    getDirection(): any {
      return (this as any).direction;
    }
    setDirection(n: any): any {
      (this as any).direction = n;
    }
    resetLatestRequirement(): any {
      (this as any).latestRequirement = ((this as any).getInitialRequirement as any)();
    }
    resetLatestElement(): any {
      (this as any).latestElement = ((this as any).getInitialElement as any)();
    }
    getInitialRequirement(): any {
      return {
        requirementId: "",
        text: "",
        risk: "",
        verifyMethod: "",
        name: "",
        type: "",
        cssStyles: [],
        classes: ["default"]
      };
    }
    getInitialElement(): any {
      return {
        name: "",
        type: "",
        docRef: "",
        cssStyles: [],
        classes: ["default"]
      };
    }
    addRequirement(n: any, u: any): any {
      return (((this as any).requirements as any).has as any)(n) || (((this as any).requirements as any).set as any)(n, {
        name: n,
        type: u,
        requirementId: ((this as any).latestRequirement as any).requirementId,
        text: ((this as any).latestRequirement as any).text,
        risk: ((this as any).latestRequirement as any).risk,
        verifyMethod: ((this as any).latestRequirement as any).verifyMethod,
        cssStyles: [],
        classes: ["default"]
      }), ((this as any).resetLatestRequirement as any)(), (((this as any).requirements as any).get as any)(n);
    }
    getRequirements(): any {
      return (this as any).requirements;
    }
    setNewReqId(n: any): any {
      ((this as any).latestRequirement as any) !== (void 0 as any) && (((this as any).latestRequirement as any).requirementId = n);
    }
    setNewReqText(n: any): any {
      ((this as any).latestRequirement as any) !== (void 0 as any) && (((this as any).latestRequirement as any).text = n);
    }
    setNewReqRisk(n: any): any {
      ((this as any).latestRequirement as any) !== (void 0 as any) && (((this as any).latestRequirement as any).risk = n);
    }
    setNewReqVerifyMethod(n: any): any {
      ((this as any).latestRequirement as any) !== (void 0 as any) && (((this as any).latestRequirement as any).verifyMethod = n);
    }
    addElement(n: any): any {
      return (((this as any).elements as any).has as any)(n) || ((((this as any).elements as any).set as any)(n, {
        name: n,
        type: ((this as any).latestElement as any).type,
        docRef: ((this as any).latestElement as any).docRef,
        cssStyles: [],
        classes: ["default"]
      }), ((qe as any).info as any)("Added new element: ", n)), ((this as any).resetLatestElement as any)(), (((this as any).elements as any).get as any)(n);
    }
    getElements(): any {
      return (this as any).elements;
    }
    setNewElementType(n: any): any {
      ((this as any).latestElement as any) !== (void 0 as any) && (((this as any).latestElement as any).type = n);
    }
    setNewElementDocRef(n: any): any {
      ((this as any).latestElement as any) !== (void 0 as any) && (((this as any).latestElement as any).docRef = n);
    }
    addRelationship(n: any, u: any, h: any): any {
      (((this as any).relations as any).push as any)({
        type: n,
        src: u,
        dst: h
      });
    }
    getRelationships(): any {
      return (this as any).relations;
    }
    clear(): any {
      (this as any).relations = [], ((this as any).resetLatestRequirement as any)(), (this as any).requirements = new (Map as any)(), ((this as any).resetLatestElement as any)(), (this as any).elements = new (Map as any)(), (this as any).classes = new (Map as any)(), (rt as any)();
    }
    setCssStyle(n: any, u: any): any {
      for (const h of n) {
        const r: any = (((this as any).requirements as any).get as any)(h) ?? (((this as any).elements as any).get as any)(h);
        if (!u || !r) return;
        for (const a of u) ((a as any).includes as any)(",") ? (((r as any).cssStyles as any).push as any)(...((a as any).split as any)(",")) : (((r as any).cssStyles as any).push as any)(a);
      }
    }
    setClass(n: any, u: any): any {
      for (const h of n) {
        const r: any = (((this as any).requirements as any).get as any)(h) ?? (((this as any).elements as any).get as any)(h);
        if (r) for (const a of u) {
          (((r as any).classes as any).push as any)(a);
          const m: any = (((this as any).classes as any).get as any)(a)?.styles;
          m && (((r as any).cssStyles as any).push as any)(...m);
        }
      }
    }
    defineClass(n: any, u: any): any {
      for (const h of n) {
        let r: any = (((this as any).classes as any).get as any)(h);
        (r as any) === (void 0 as any) && (r = {
          id: h,
          styles: [],
          textStyles: []
        }, (((this as any).classes as any).set as any)(h, r)), u && ((u as any).forEach as any)(function (this: any, a: any): any {
          if (((/color/ as any).exec as any)(a)) {
            const m: any = ((a as any).replace as any)("fill", "bgFill");
            (((r as any).textStyles as any).push as any)(m);
          }
          (((r as any).styles as any).push as any)(a);
        }), (((this as any).requirements as any).forEach as any)((a: any): any => {
          (((a as any).classes as any).includes as any)(h) && (((a as any).cssStyles as any).push as any)(...((u as any).flatMap as any)((m: any): any => ((m as any).split as any)(",")));
        }), (((this as any).elements as any).forEach as any)((a: any): any => {
          (((a as any).classes as any).includes as any)(h) && (((a as any).cssStyles as any).push as any)(...((u as any).flatMap as any)((m: any): any => ((m as any).split as any)(",")));
        });
      }
    }
    getClasses(): any {
      return (this as any).classes;
    }
    getData(): any {
      const n: any = (Ne as any)(),
        u: any = [],
        h: any = [];
      for (const r of (((this as any).requirements as any).values as any)()) {
        const a: any = r;
        (a as any).id = (r as any).name, (a as any).cssStyles = (r as any).cssStyles, (a as any).cssClasses = (((r as any).classes as any).join as any)(" "), (a as any).shape = "requirementBox", (a as any).look = (n as any).look, (a as any).colorIndex = (u as any).length, ((u as any).push as any)(a);
      }
      for (const r of (((this as any).elements as any).values as any)()) {
        const a: any = r;
        (a as any).shape = "requirementBox", (a as any).look = (n as any).look, (a as any).id = (r as any).name, (a as any).cssStyles = (r as any).cssStyles, (a as any).cssClasses = (((r as any).classes as any).join as any)(" "), (a as any).colorIndex = (u as any).length, ((u as any).push as any)(a);
      }
      for (const r of (this as any).relations) {
        let a: any = 0;
        const m: any = ((r as any).type as any) === (((this as any).Relationships as any).CONTAINS as any),
          p: any = {
            id: `${(r as any).src}-${(r as any).dst}-${a}`,
            start: (((this as any).requirements as any).get as any)((r as any).src)?.name ?? (((this as any).elements as any).get as any)((r as any).src)?.name,
            end: (((this as any).requirements as any).get as any)((r as any).dst)?.name ?? (((this as any).elements as any).get as any)((r as any).dst)?.name,
            label: `&lt;&lt;${(r as any).type}&gt;&gt;`,
            classes: "relationshipLine",
            style: ["fill:none", m ? "" : "stroke-dasharray: 10,7"],
            labelpos: "c",
            thickness: "normal",
            type: "normal",
            pattern: m ? "normal" : "dashed",
            arrowTypeStart: m ? "requirement_contains" : "",
            arrowTypeEnd: m ? "" : "requirement_arrow",
            look: (n as any).look,
            labelType: "markdown"
          };
        ((h as any).push as any)(p), a++;
      }
      return {
        nodes: u,
        edges: h,
        other: {},
        config: n,
        direction: ((this as any).getDirection as any)()
      };
    }
  }, (f as any)(Z, "RequirementDB"), Z),
  ut: any = (f as any)((e: any): any => {
    const n: any = (Be as any)(),
      {
        themeVariables: u,
        look: h
      }: any = n,
      {
        bkgColorArray: r,
        borderColorArray: a
      }: any = u;
    if (!a?.length) return "";
    let m: any = "";
    for (let p: any = 0; (p as any) < ((e as any).THEME_COLOR_LIMIT as any); p++) m += `

    [data-look="${h}"][data-color-id="color-${p}"].node path {
    stroke: ${(a as any)[p]};
    fill: ${r?.length ? (r as any)[p] : ""};
    }

    [data-look="${h}"][data-color-id="color-${p}"].node  rect {
    stroke: ${(a as any)[p]};
    fill: ${r?.length ? (r as any)[p] : ""};
     }
    `;
    return m;
  }, "genColor"),
  ft: any = (f as any)((e: any): any => {
    const n: any = (Be as any)(),
      {
        look: u,
        themeVariables: h
      }: any = n,
      {
        requirementEdgeLabelBackground: r
      }: any = h;
    return `
  ${(ut as any)(e)}
  marker {
    fill: ${(e as any).relationColor};
    stroke: ${(e as any).relationColor};
  }

  marker.cross {
    stroke: ${(e as any).lineColor};
  }

  svg {
    font-family: ${(e as any).fontFamily};
    font-size: ${(e as any).fontSize};
  }

  .reqBox {
    fill: ${(e as any).requirementBackground};
    fill-opacity: 1.0;
    stroke: ${(e as any).requirementBorderColor};
    stroke-width: ${(e as any).requirementBorderSize};
  }
  
  .reqTitle, .reqLabel{
    fill:  ${(e as any).requirementTextColor};
  }
  .reqLabelBox {
    fill: ${(e as any).relationLabelBackground};
    fill-opacity: 1.0;
  }

  .req-title-line {
    stroke: ${(e as any).requirementBorderColor};
    stroke-width: ${(e as any).requirementBorderSize};
  }
  .relationshipLine {
    stroke: ${(e as any).relationColor};
    stroke-width: ${(u as any) === ("neo" as any) ? (e as any).strokeWidth : "1px"};
  }
  .relationshipLabel {
    fill: ${(e as any).relationLabelColor};
  }
    .edgeLabel {
    background-color: ${(e as any).edgeLabelBackground};
  }
  .edgeLabel .label rect {
    fill: ${(e as any).edgeLabelBackground};
  }
  .edgeLabel .label text {
    fill: ${(e as any).relationLabelColor};
  }
  .divider {
    stroke: ${(e as any).nodeBorder};
    stroke-width: 1;
  }
  .label {
    font-family: ${(e as any).fontFamily};
    color: ${(e as any).nodeTextColor || (e as any).textColor};
  }
  .label text,span {
    fill: ${(e as any).nodeTextColor || (e as any).textColor};
    color: ${(e as any).nodeTextColor || (e as any).textColor};
  }
  .labelBkg {
    background-color: ${r ?? (e as any).edgeLabelBackground};
  }

`;
  }, "getStyles"),
  mt: any = ft,
  Qe: any = {};
(nt as any)(Qe, {
  draw: (): any => dt
});
var dt: any = (f as any)(async function (this: any, e: any, n: any, u: any, h: any): Promise<any> {
    ((qe as any).info as any)("REF0:"), ((qe as any).info as any)("Drawing requirement diagram (unified)", n);
    const {
        securityLevel: r,
        state: a,
        layout: m,
        look: p
      }: any = (Ne as any)(),
      y: any = (((h as any).db as any).getData as any)(),
      S: any = (Ge as any)(n, r);
    (y as any).type = (h as any).type, (y as any).layoutAlgorithm = (at as any)(m), (y as any).nodeSpacing = a?.nodeSpacing ?? 50, (y as any).rankSpacing = a?.rankSpacing ?? 50, (y as any).markers = (p as any) === ("neo" as any) ? ["requirement_contains_neo", "requirement_arrow_neo"] : ["requirement_contains", "requirement_arrow"], (y as any).diagramId = n, await (lt as any)(y, S);
    const k: number = 8;
    ((ct as any).insertTitle as any)(S, "requirementDiagramTitleText", a?.titleTopMargin ?? 25, (((h as any).db as any).getDiagramTitle as any)()), (Xe as any)(S, k, "requirementDiagram", a?.useMaxWidth ?? !0);
  }, "draw"),
  yt: any = {
    parser: ot,
    get db(): any {
      return new (ht as any)();
    },
    renderer: Qe,
    styles: mt
  };
export { yt as diagram };
//# debugId=47c367dd-803a-4748-a3a5-8c7931428abc
