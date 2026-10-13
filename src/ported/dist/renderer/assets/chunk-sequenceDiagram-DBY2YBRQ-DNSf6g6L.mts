declare var Option: any;
declare var document: any;
declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "341c861e-a053-45c4-b850-58e6102205fa", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-341c861e-a053-45c4-b850-58e6102205fa");
  } catch (e: any) {}
} as any)();
import { I as er } from "./chunk-chunk-2Q5K7J3B-BdCp588o.js";
import { _ as x, X as rr, c as $, d as Yt, l as at, j as Me, e as ar, f as sr, k as N, b as De, s as ir, o as nr, a as or, g as cr, p as lr, Y as hr, Z as dr, q as Tr, i as Wt, y as Z, $ as Q, a0 as kt, a1 as Be, a2 as pr, z as Ft, a3 as Er, a4 as Ve } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { a as ur, b as se, g as dt, d as fr, c as ie, e as ne } from "./chunk-chunk-32BRIVSS-CL4hvhVG.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var ee: any = (function (this: any): any {
  var e: any = (x as any)(function (this: any, ut: any, S: any, v: any, P: any): any {
      for (v = v || {}, P = (ut as any).length; P--; (v as any)[(ut as any)[P]] = S);
      return v;
    }, "o"),
    t: any = [1, 2],
    a: any = [1, 3],
    r: any = [1, 4],
    i: any = [2, 4],
    n: any = [1, 9],
    s: any = [1, 11],
    c: any = [1, 12],
    E: any = [1, 14],
    h: any = [1, 15],
    p: any = [1, 17],
    _: any = [1, 18],
    u: any = [1, 19],
    O: any = [1, 25],
    T: any = [1, 26],
    g: any = [1, 27],
    f: any = [1, 28],
    I: any = [1, 29],
    L: any = [1, 30],
    b: any = [1, 31],
    w: any = [1, 32],
    A: any = [1, 33],
    D: any = [1, 34],
    M: any = [1, 35],
    V: any = [1, 36],
    W: any = [1, 37],
    U: any = [1, 38],
    G: any = [1, 39],
    X: any = [1, 40],
    nt: any = [1, 42],
    j: any = [1, 43],
    H: any = [1, 44],
    st: any = [1, 45],
    tt: any = [1, 46],
    Y: any = [1, 47],
    C: any = [1, 4, 5, 10, 14, 15, 17, 19, 22, 24, 30, 31, 32, 34, 36, 37, 38, 39, 40, 42, 44, 45, 47, 48, 49, 50, 51, 53, 54, 56, 61, 62, 63, 64, 73],
    St: any = [1, 74],
    Dt: any = [1, 80],
    m: any = [1, 81],
    k: any = [1, 82],
    lt: any = [1, 83],
    et: any = [1, 84],
    K: any = [1, 85],
    Ot: any = [1, 86],
    oe: any = [1, 87],
    ce: any = [1, 88],
    le: any = [1, 89],
    he: any = [1, 90],
    de: any = [1, 91],
    Te: any = [1, 92],
    pe: any = [1, 93],
    Ee: any = [1, 94],
    ue: any = [1, 95],
    fe: any = [1, 96],
    _e: any = [1, 97],
    ge: any = [1, 98],
    xe: any = [1, 99],
    Ie: any = [1, 100],
    ye: any = [1, 101],
    Re: any = [1, 102],
    Oe: any = [1, 103],
    Le: any = [1, 104],
    be: any = [1, 105],
    me: any = [2, 78],
    wt: any = [4, 5, 17, 51, 53, 54],
    vt: any = [4, 5, 10, 14, 15, 17, 19, 22, 24, 30, 31, 32, 34, 36, 37, 38, 39, 40, 42, 44, 45, 47, 51, 53, 54, 56, 61, 62, 63, 64, 73],
    Ae: any = [4, 5, 10, 14, 15, 17, 19, 22, 24, 30, 31, 32, 34, 36, 37, 38, 39, 40, 42, 44, 45, 47, 50, 51, 53, 54, 56, 61, 62, 63, 64, 73],
    Gt: any = [4, 5, 10, 14, 15, 17, 19, 22, 24, 30, 31, 32, 34, 36, 37, 38, 39, 40, 42, 44, 45, 47, 49, 51, 53, 54, 56, 61, 62, 63, 64, 73],
    Se: any = [4, 5, 10, 14, 15, 17, 19, 22, 24, 30, 31, 32, 34, 36, 37, 38, 39, 40, 42, 44, 45, 47, 48, 51, 53, 54, 56, 61, 62, 63, 64, 73],
    Xt: any = [5, 52],
    F: any = [70, 71, 72, 73],
    ot: any = [1, 151],
    Jt: any = {
      trace: (x as any)(function (this: any): any {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        SPACE: 4,
        NEWLINE: 5,
        SD: 6,
        document: 7,
        line: 8,
        statement: 9,
        INVALID: 10,
        box_section: 11,
        box_line: 12,
        participant_statement: 13,
        create: 14,
        box: 15,
        restOfLine: 16,
        end: 17,
        signal: 18,
        autonumber: 19,
        NUM: 20,
        off: 21,
        activate: 22,
        actor: 23,
        deactivate: 24,
        note_statement: 25,
        links_statement: 26,
        link_statement: 27,
        properties_statement: 28,
        details_statement: 29,
        title: 30,
        legacy_title: 31,
        acc_title: 32,
        acc_title_value: 33,
        acc_descr: 34,
        acc_descr_value: 35,
        acc_descr_multiline_value: 36,
        loop: 37,
        rect: 38,
        opt: 39,
        alt: 40,
        else_sections: 41,
        par: 42,
        par_sections: 43,
        par_over: 44,
        critical: 45,
        option_sections: 46,
        break: 47,
        option: 48,
        and: 49,
        else: 50,
        participant: 51,
        AS: 52,
        participant_actor: 53,
        destroy: 54,
        actor_with_config: 55,
        note: 56,
        placement: 57,
        text2: 58,
        over: 59,
        actor_pair: 60,
        links: 61,
        link: 62,
        properties: 63,
        details: 64,
        spaceList: 65,
        ",": 66,
        left_of: 67,
        right_of: 68,
        signaltype: 69,
        "+": 70,
        "-": 71,
        "()": 72,
        ACTOR: 73,
        config_object: 74,
        CONFIG_START: 75,
        CONFIG_CONTENT: 76,
        CONFIG_END: 77,
        SOLID_OPEN_ARROW: 78,
        DOTTED_OPEN_ARROW: 79,
        SOLID_ARROW: 80,
        SOLID_ARROW_TOP: 81,
        SOLID_ARROW_BOTTOM: 82,
        STICK_ARROW_TOP: 83,
        STICK_ARROW_BOTTOM: 84,
        SOLID_ARROW_TOP_DOTTED: 85,
        SOLID_ARROW_BOTTOM_DOTTED: 86,
        STICK_ARROW_TOP_DOTTED: 87,
        STICK_ARROW_BOTTOM_DOTTED: 88,
        SOLID_ARROW_TOP_REVERSE: 89,
        SOLID_ARROW_BOTTOM_REVERSE: 90,
        STICK_ARROW_TOP_REVERSE: 91,
        STICK_ARROW_BOTTOM_REVERSE: 92,
        SOLID_ARROW_TOP_REVERSE_DOTTED: 93,
        SOLID_ARROW_BOTTOM_REVERSE_DOTTED: 94,
        STICK_ARROW_TOP_REVERSE_DOTTED: 95,
        STICK_ARROW_BOTTOM_REVERSE_DOTTED: 96,
        BIDIRECTIONAL_SOLID_ARROW: 97,
        DOTTED_ARROW: 98,
        BIDIRECTIONAL_DOTTED_ARROW: 99,
        SOLID_CROSS: 100,
        DOTTED_CROSS: 101,
        SOLID_POINT: 102,
        DOTTED_POINT: 103,
        TXT: 104,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        4: "SPACE",
        5: "NEWLINE",
        6: "SD",
        10: "INVALID",
        14: "create",
        15: "box",
        16: "restOfLine",
        17: "end",
        19: "autonumber",
        20: "NUM",
        21: "off",
        22: "activate",
        24: "deactivate",
        30: "title",
        31: "legacy_title",
        32: "acc_title",
        33: "acc_title_value",
        34: "acc_descr",
        35: "acc_descr_value",
        36: "acc_descr_multiline_value",
        37: "loop",
        38: "rect",
        39: "opt",
        40: "alt",
        42: "par",
        44: "par_over",
        45: "critical",
        47: "break",
        48: "option",
        49: "and",
        50: "else",
        51: "participant",
        52: "AS",
        53: "participant_actor",
        54: "destroy",
        56: "note",
        59: "over",
        61: "links",
        62: "link",
        63: "properties",
        64: "details",
        66: ",",
        67: "left_of",
        68: "right_of",
        70: "+",
        71: "-",
        72: "()",
        73: "ACTOR",
        75: "CONFIG_START",
        76: "CONFIG_CONTENT",
        77: "CONFIG_END",
        78: "SOLID_OPEN_ARROW",
        79: "DOTTED_OPEN_ARROW",
        80: "SOLID_ARROW",
        81: "SOLID_ARROW_TOP",
        82: "SOLID_ARROW_BOTTOM",
        83: "STICK_ARROW_TOP",
        84: "STICK_ARROW_BOTTOM",
        85: "SOLID_ARROW_TOP_DOTTED",
        86: "SOLID_ARROW_BOTTOM_DOTTED",
        87: "STICK_ARROW_TOP_DOTTED",
        88: "STICK_ARROW_BOTTOM_DOTTED",
        89: "SOLID_ARROW_TOP_REVERSE",
        90: "SOLID_ARROW_BOTTOM_REVERSE",
        91: "STICK_ARROW_TOP_REVERSE",
        92: "STICK_ARROW_BOTTOM_REVERSE",
        93: "SOLID_ARROW_TOP_REVERSE_DOTTED",
        94: "SOLID_ARROW_BOTTOM_REVERSE_DOTTED",
        95: "STICK_ARROW_TOP_REVERSE_DOTTED",
        96: "STICK_ARROW_BOTTOM_REVERSE_DOTTED",
        97: "BIDIRECTIONAL_SOLID_ARROW",
        98: "DOTTED_ARROW",
        99: "BIDIRECTIONAL_DOTTED_ARROW",
        100: "SOLID_CROSS",
        101: "DOTTED_CROSS",
        102: "SOLID_POINT",
        103: "DOTTED_POINT",
        104: "TXT"
      },
      productions_: [0, [3, 2], [3, 2], [3, 2], [7, 0], [7, 2], [8, 2], [8, 1], [8, 1], [8, 1], [11, 0], [11, 2], [12, 2], [12, 1], [12, 1], [9, 1], [9, 2], [9, 4], [9, 2], [9, 4], [9, 3], [9, 3], [9, 2], [9, 3], [9, 3], [9, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [46, 1], [46, 4], [43, 1], [43, 4], [41, 1], [41, 4], [13, 5], [13, 3], [13, 5], [13, 3], [13, 3], [13, 5], [13, 3], [13, 5], [13, 3], [25, 4], [25, 4], [26, 3], [27, 3], [28, 3], [29, 3], [65, 2], [65, 1], [60, 3], [60, 1], [57, 1], [57, 1], [18, 5], [18, 5], [18, 5], [18, 5], [18, 6], [18, 4], [55, 2], [74, 3], [23, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [69, 1], [58, 1]],
      performAction: (x as any)(function (this: any, S: any, v: any, P: any, y: any, z: any, o: any, Nt: any): any {
        var d: any = ((o as any).length as any) - (1 as any);
        switch (z) {
          case 3:
            return ((y as any).apply as any)((o as any)[d]), (o as any)[d];
          case 4:
          case 10:
            (this as any).$ = [];
            break;
          case 5:
          case 11:
            (((o as any)[(d as any) - (1 as any)] as any).push as any)((o as any)[d]), (this as any).$ = (o as any)[(d as any) - (1 as any)];
            break;
          case 6:
          case 7:
          case 12:
          case 13:
            (this as any).$ = (o as any)[d];
            break;
          case 8:
          case 9:
          case 14:
            (this as any).$ = [];
            break;
          case 16:
            ((o as any)[d] as any).type = "createParticipant", (this as any).$ = (o as any)[d];
            break;
          case 17:
            (((o as any)[(d as any) - (1 as any)] as any).unshift as any)({
              type: "boxStart",
              boxData: ((y as any).parseBoxData as any)((o as any)[(d as any) - (2 as any)])
            }), (((o as any)[(d as any) - (1 as any)] as any).push as any)({
              type: "boxEnd",
              boxText: (o as any)[(d as any) - (2 as any)]
            }), (this as any).$ = (o as any)[(d as any) - (1 as any)];
            break;
          case 19:
            (this as any).$ = {
              type: "sequenceIndex",
              sequenceIndex: (Number as any)((o as any)[(d as any) - (2 as any)]),
              sequenceIndexStep: (Number as any)((o as any)[(d as any) - (1 as any)]),
              sequenceVisible: !0,
              signalType: ((y as any).LINETYPE as any).AUTONUMBER
            };
            break;
          case 20:
            (this as any).$ = {
              type: "sequenceIndex",
              sequenceIndex: (Number as any)((o as any)[(d as any) - (1 as any)]),
              sequenceIndexStep: 1,
              sequenceVisible: !0,
              signalType: ((y as any).LINETYPE as any).AUTONUMBER
            };
            break;
          case 21:
            (this as any).$ = {
              type: "sequenceIndex",
              sequenceVisible: !1,
              signalType: ((y as any).LINETYPE as any).AUTONUMBER
            };
            break;
          case 22:
            (this as any).$ = {
              type: "sequenceIndex",
              sequenceVisible: !0,
              signalType: ((y as any).LINETYPE as any).AUTONUMBER
            };
            break;
          case 23:
            (this as any).$ = {
              type: "activeStart",
              signalType: ((y as any).LINETYPE as any).ACTIVE_START,
              actor: ((o as any)[(d as any) - (1 as any)] as any).actor
            };
            break;
          case 24:
            (this as any).$ = {
              type: "activeEnd",
              signalType: ((y as any).LINETYPE as any).ACTIVE_END,
              actor: ((o as any)[(d as any) - (1 as any)] as any).actor
            };
            break;
          case 30:
            ((y as any).setDiagramTitle as any)((((o as any)[d] as any).substring as any)(6)), (this as any).$ = (((o as any)[d] as any).substring as any)(6);
            break;
          case 31:
            ((y as any).setDiagramTitle as any)((((o as any)[d] as any).substring as any)(7)), (this as any).$ = (((o as any)[d] as any).substring as any)(7);
            break;
          case 32:
            (this as any).$ = (((o as any)[d] as any).trim as any)(), ((y as any).setAccTitle as any)((this as any).$);
            break;
          case 33:
          case 34:
            (this as any).$ = (((o as any)[d] as any).trim as any)(), ((y as any).setAccDescription as any)((this as any).$);
            break;
          case 35:
            (((o as any)[(d as any) - (1 as any)] as any).unshift as any)({
              type: "loopStart",
              loopText: ((y as any).parseMessage as any)((o as any)[(d as any) - (2 as any)]),
              signalType: ((y as any).LINETYPE as any).LOOP_START
            }), (((o as any)[(d as any) - (1 as any)] as any).push as any)({
              type: "loopEnd",
              loopText: (o as any)[(d as any) - (2 as any)],
              signalType: ((y as any).LINETYPE as any).LOOP_END
            }), (this as any).$ = (o as any)[(d as any) - (1 as any)];
            break;
          case 36:
            (((o as any)[(d as any) - (1 as any)] as any).unshift as any)({
              type: "rectStart",
              color: ((y as any).parseMessage as any)((o as any)[(d as any) - (2 as any)]),
              signalType: ((y as any).LINETYPE as any).RECT_START
            }), (((o as any)[(d as any) - (1 as any)] as any).push as any)({
              type: "rectEnd",
              color: ((y as any).parseMessage as any)((o as any)[(d as any) - (2 as any)]),
              signalType: ((y as any).LINETYPE as any).RECT_END
            }), (this as any).$ = (o as any)[(d as any) - (1 as any)];
            break;
          case 37:
            (((o as any)[(d as any) - (1 as any)] as any).unshift as any)({
              type: "optStart",
              optText: ((y as any).parseMessage as any)((o as any)[(d as any) - (2 as any)]),
              signalType: ((y as any).LINETYPE as any).OPT_START
            }), (((o as any)[(d as any) - (1 as any)] as any).push as any)({
              type: "optEnd",
              optText: ((y as any).parseMessage as any)((o as any)[(d as any) - (2 as any)]),
              signalType: ((y as any).LINETYPE as any).OPT_END
            }), (this as any).$ = (o as any)[(d as any) - (1 as any)];
            break;
          case 38:
            (((o as any)[(d as any) - (1 as any)] as any).unshift as any)({
              type: "altStart",
              altText: ((y as any).parseMessage as any)((o as any)[(d as any) - (2 as any)]),
              signalType: ((y as any).LINETYPE as any).ALT_START
            }), (((o as any)[(d as any) - (1 as any)] as any).push as any)({
              type: "altEnd",
              signalType: ((y as any).LINETYPE as any).ALT_END
            }), (this as any).$ = (o as any)[(d as any) - (1 as any)];
            break;
          case 39:
            (((o as any)[(d as any) - (1 as any)] as any).unshift as any)({
              type: "parStart",
              parText: ((y as any).parseMessage as any)((o as any)[(d as any) - (2 as any)]),
              signalType: ((y as any).LINETYPE as any).PAR_START
            }), (((o as any)[(d as any) - (1 as any)] as any).push as any)({
              type: "parEnd",
              signalType: ((y as any).LINETYPE as any).PAR_END
            }), (this as any).$ = (o as any)[(d as any) - (1 as any)];
            break;
          case 40:
            (((o as any)[(d as any) - (1 as any)] as any).unshift as any)({
              type: "parStart",
              parText: ((y as any).parseMessage as any)((o as any)[(d as any) - (2 as any)]),
              signalType: ((y as any).LINETYPE as any).PAR_OVER_START
            }), (((o as any)[(d as any) - (1 as any)] as any).push as any)({
              type: "parEnd",
              signalType: ((y as any).LINETYPE as any).PAR_END
            }), (this as any).$ = (o as any)[(d as any) - (1 as any)];
            break;
          case 41:
            (((o as any)[(d as any) - (1 as any)] as any).unshift as any)({
              type: "criticalStart",
              criticalText: ((y as any).parseMessage as any)((o as any)[(d as any) - (2 as any)]),
              signalType: ((y as any).LINETYPE as any).CRITICAL_START
            }), (((o as any)[(d as any) - (1 as any)] as any).push as any)({
              type: "criticalEnd",
              signalType: ((y as any).LINETYPE as any).CRITICAL_END
            }), (this as any).$ = (o as any)[(d as any) - (1 as any)];
            break;
          case 42:
            (((o as any)[(d as any) - (1 as any)] as any).unshift as any)({
              type: "breakStart",
              breakText: ((y as any).parseMessage as any)((o as any)[(d as any) - (2 as any)]),
              signalType: ((y as any).LINETYPE as any).BREAK_START
            }), (((o as any)[(d as any) - (1 as any)] as any).push as any)({
              type: "breakEnd",
              optText: ((y as any).parseMessage as any)((o as any)[(d as any) - (2 as any)]),
              signalType: ((y as any).LINETYPE as any).BREAK_END
            }), (this as any).$ = (o as any)[(d as any) - (1 as any)];
            break;
          case 44:
            (this as any).$ = (((o as any)[(d as any) - (3 as any)] as any).concat as any)([{
              type: "option",
              optionText: ((y as any).parseMessage as any)((o as any)[(d as any) - (1 as any)]),
              signalType: ((y as any).LINETYPE as any).CRITICAL_OPTION
            }, (o as any)[d]]);
            break;
          case 46:
            (this as any).$ = (((o as any)[(d as any) - (3 as any)] as any).concat as any)([{
              type: "and",
              parText: ((y as any).parseMessage as any)((o as any)[(d as any) - (1 as any)]),
              signalType: ((y as any).LINETYPE as any).PAR_AND
            }, (o as any)[d]]);
            break;
          case 48:
            (this as any).$ = (((o as any)[(d as any) - (3 as any)] as any).concat as any)([{
              type: "else",
              altText: ((y as any).parseMessage as any)((o as any)[(d as any) - (1 as any)]),
              signalType: ((y as any).LINETYPE as any).ALT_ELSE
            }, (o as any)[d]]);
            break;
          case 49:
            ((o as any)[(d as any) - (3 as any)] as any).draw = "participant", ((o as any)[(d as any) - (3 as any)] as any).type = "addParticipant", ((o as any)[(d as any) - (3 as any)] as any).description = ((y as any).parseMessage as any)((o as any)[(d as any) - (1 as any)]), (this as any).$ = (o as any)[(d as any) - (3 as any)];
            break;
          case 50:
            ((o as any)[(d as any) - (1 as any)] as any).draw = "participant", ((o as any)[(d as any) - (1 as any)] as any).type = "addParticipant", (this as any).$ = (o as any)[(d as any) - (1 as any)];
            break;
          case 51:
            ((o as any)[(d as any) - (3 as any)] as any).draw = "actor", ((o as any)[(d as any) - (3 as any)] as any).type = "addParticipant", ((o as any)[(d as any) - (3 as any)] as any).description = ((y as any).parseMessage as any)((o as any)[(d as any) - (1 as any)]), (this as any).$ = (o as any)[(d as any) - (3 as any)];
            break;
          case 52:
          case 57:
            ((o as any)[(d as any) - (1 as any)] as any).draw = "actor", ((o as any)[(d as any) - (1 as any)] as any).type = "addParticipant", (this as any).$ = (o as any)[(d as any) - (1 as any)];
            break;
          case 53:
            ((o as any)[(d as any) - (1 as any)] as any).type = "destroyParticipant", (this as any).$ = (o as any)[(d as any) - (1 as any)];
            break;
          case 54:
            ((o as any)[(d as any) - (3 as any)] as any).draw = "participant", ((o as any)[(d as any) - (3 as any)] as any).type = "addParticipant", ((o as any)[(d as any) - (3 as any)] as any).description = ((y as any).parseMessage as any)((o as any)[(d as any) - (1 as any)]), (this as any).$ = (o as any)[(d as any) - (3 as any)];
            break;
          case 55:
            ((o as any)[(d as any) - (1 as any)] as any).draw = "participant", ((o as any)[(d as any) - (1 as any)] as any).type = "addParticipant", (this as any).$ = (o as any)[(d as any) - (1 as any)];
            break;
          case 56:
            ((o as any)[(d as any) - (3 as any)] as any).draw = "actor", ((o as any)[(d as any) - (3 as any)] as any).type = "addParticipant", ((o as any)[(d as any) - (3 as any)] as any).description = ((y as any).parseMessage as any)((o as any)[(d as any) - (1 as any)]), (this as any).$ = (o as any)[(d as any) - (3 as any)];
            break;
          case 58:
            (this as any).$ = [(o as any)[(d as any) - (1 as any)], {
              type: "addNote",
              placement: (o as any)[(d as any) - (2 as any)],
              actor: ((o as any)[(d as any) - (1 as any)] as any).actor,
              text: (o as any)[d]
            }];
            break;
          case 59:
            (o as any)[(d as any) - (2 as any)] = (((([] as any).concat as any)((o as any)[(d as any) - (1 as any)], (o as any)[(d as any) - (1 as any)]) as any).slice as any)(0, 2), ((o as any)[(d as any) - (2 as any)] as any)[0] = (((o as any)[(d as any) - (2 as any)] as any)[0] as any).actor, ((o as any)[(d as any) - (2 as any)] as any)[1] = (((o as any)[(d as any) - (2 as any)] as any)[1] as any).actor, (this as any).$ = [(o as any)[(d as any) - (1 as any)], {
              type: "addNote",
              placement: ((y as any).PLACEMENT as any).OVER,
              actor: (((o as any)[(d as any) - (2 as any)] as any).slice as any)(0, 2),
              text: (o as any)[d]
            }];
            break;
          case 60:
            (this as any).$ = [(o as any)[(d as any) - (1 as any)], {
              type: "addLinks",
              actor: ((o as any)[(d as any) - (1 as any)] as any).actor,
              text: (o as any)[d]
            }];
            break;
          case 61:
            (this as any).$ = [(o as any)[(d as any) - (1 as any)], {
              type: "addALink",
              actor: ((o as any)[(d as any) - (1 as any)] as any).actor,
              text: (o as any)[d]
            }];
            break;
          case 62:
            (this as any).$ = [(o as any)[(d as any) - (1 as any)], {
              type: "addProperties",
              actor: ((o as any)[(d as any) - (1 as any)] as any).actor,
              text: (o as any)[d]
            }];
            break;
          case 63:
            (this as any).$ = [(o as any)[(d as any) - (1 as any)], {
              type: "addDetails",
              actor: ((o as any)[(d as any) - (1 as any)] as any).actor,
              text: (o as any)[d]
            }];
            break;
          case 66:
            (this as any).$ = [(o as any)[(d as any) - (2 as any)], (o as any)[d]];
            break;
          case 67:
            (this as any).$ = (o as any)[d];
            break;
          case 68:
            (this as any).$ = ((y as any).PLACEMENT as any).LEFTOF;
            break;
          case 69:
            (this as any).$ = ((y as any).PLACEMENT as any).RIGHTOF;
            break;
          case 70:
            (this as any).$ = [(o as any)[(d as any) - (4 as any)], (o as any)[(d as any) - (1 as any)], {
              type: "addMessage",
              from: ((o as any)[(d as any) - (4 as any)] as any).actor,
              to: ((o as any)[(d as any) - (1 as any)] as any).actor,
              signalType: (o as any)[(d as any) - (3 as any)],
              msg: (o as any)[d],
              activate: !0
            }, {
              type: "activeStart",
              signalType: ((y as any).LINETYPE as any).ACTIVE_START,
              actor: ((o as any)[(d as any) - (1 as any)] as any).actor
            }];
            break;
          case 71:
            (this as any).$ = [(o as any)[(d as any) - (4 as any)], (o as any)[(d as any) - (1 as any)], {
              type: "addMessage",
              from: ((o as any)[(d as any) - (4 as any)] as any).actor,
              to: ((o as any)[(d as any) - (1 as any)] as any).actor,
              signalType: (o as any)[(d as any) - (3 as any)],
              msg: (o as any)[d]
            }, {
              type: "activeEnd",
              signalType: ((y as any).LINETYPE as any).ACTIVE_END,
              actor: ((o as any)[(d as any) - (4 as any)] as any).actor
            }];
            break;
          case 72:
            (this as any).$ = [(o as any)[(d as any) - (4 as any)], (o as any)[(d as any) - (1 as any)], {
              type: "addMessage",
              from: ((o as any)[(d as any) - (4 as any)] as any).actor,
              to: ((o as any)[(d as any) - (1 as any)] as any).actor,
              signalType: (o as any)[(d as any) - (3 as any)],
              msg: (o as any)[d],
              activate: !0,
              centralConnection: ((y as any).LINETYPE as any).CENTRAL_CONNECTION
            }, {
              type: "centralConnection",
              signalType: ((y as any).LINETYPE as any).CENTRAL_CONNECTION,
              actor: ((o as any)[(d as any) - (1 as any)] as any).actor
            }];
            break;
          case 73:
            (this as any).$ = [(o as any)[(d as any) - (4 as any)], (o as any)[(d as any) - (1 as any)], {
              type: "addMessage",
              from: ((o as any)[(d as any) - (4 as any)] as any).actor,
              to: ((o as any)[(d as any) - (1 as any)] as any).actor,
              signalType: (o as any)[(d as any) - (2 as any)],
              msg: (o as any)[d],
              activate: !1,
              centralConnection: ((y as any).LINETYPE as any).CENTRAL_CONNECTION_REVERSE
            }, {
              type: "centralConnectionReverse",
              signalType: ((y as any).LINETYPE as any).CENTRAL_CONNECTION_REVERSE,
              actor: ((o as any)[(d as any) - (4 as any)] as any).actor
            }];
            break;
          case 74:
            (this as any).$ = [(o as any)[(d as any) - (5 as any)], (o as any)[(d as any) - (1 as any)], {
              type: "addMessage",
              from: ((o as any)[(d as any) - (5 as any)] as any).actor,
              to: ((o as any)[(d as any) - (1 as any)] as any).actor,
              signalType: (o as any)[(d as any) - (3 as any)],
              msg: (o as any)[d],
              activate: !0,
              centralConnection: ((y as any).LINETYPE as any).CENTRAL_CONNECTION_DUAL
            }, {
              type: "centralConnection",
              signalType: ((y as any).LINETYPE as any).CENTRAL_CONNECTION,
              actor: ((o as any)[(d as any) - (1 as any)] as any).actor
            }, {
              type: "centralConnectionReverse",
              signalType: ((y as any).LINETYPE as any).CENTRAL_CONNECTION_REVERSE,
              actor: ((o as any)[(d as any) - (5 as any)] as any).actor
            }];
            break;
          case 75:
            (this as any).$ = [(o as any)[(d as any) - (3 as any)], (o as any)[(d as any) - (1 as any)], {
              type: "addMessage",
              from: ((o as any)[(d as any) - (3 as any)] as any).actor,
              to: ((o as any)[(d as any) - (1 as any)] as any).actor,
              signalType: (o as any)[(d as any) - (2 as any)],
              msg: (o as any)[d]
            }];
            break;
          case 76:
            (this as any).$ = {
              type: "addParticipant",
              actor: (o as any)[(d as any) - (1 as any)],
              config: (o as any)[d]
            };
            break;
          case 77:
            (this as any).$ = (((o as any)[(d as any) - (1 as any)] as any).trim as any)();
            break;
          case 78:
            (this as any).$ = {
              type: "addParticipant",
              actor: (o as any)[d]
            };
            break;
          case 79:
            (this as any).$ = ((y as any).LINETYPE as any).SOLID_OPEN;
            break;
          case 80:
            (this as any).$ = ((y as any).LINETYPE as any).DOTTED_OPEN;
            break;
          case 81:
            (this as any).$ = ((y as any).LINETYPE as any).SOLID;
            break;
          case 82:
            (this as any).$ = ((y as any).LINETYPE as any).SOLID_TOP;
            break;
          case 83:
            (this as any).$ = ((y as any).LINETYPE as any).SOLID_BOTTOM;
            break;
          case 84:
            (this as any).$ = ((y as any).LINETYPE as any).STICK_TOP;
            break;
          case 85:
            (this as any).$ = ((y as any).LINETYPE as any).STICK_BOTTOM;
            break;
          case 86:
            (this as any).$ = ((y as any).LINETYPE as any).SOLID_TOP_DOTTED;
            break;
          case 87:
            (this as any).$ = ((y as any).LINETYPE as any).SOLID_BOTTOM_DOTTED;
            break;
          case 88:
            (this as any).$ = ((y as any).LINETYPE as any).STICK_TOP_DOTTED;
            break;
          case 89:
            (this as any).$ = ((y as any).LINETYPE as any).STICK_BOTTOM_DOTTED;
            break;
          case 90:
            (this as any).$ = ((y as any).LINETYPE as any).SOLID_ARROW_TOP_REVERSE;
            break;
          case 91:
            (this as any).$ = ((y as any).LINETYPE as any).SOLID_ARROW_BOTTOM_REVERSE;
            break;
          case 92:
            (this as any).$ = ((y as any).LINETYPE as any).STICK_ARROW_TOP_REVERSE;
            break;
          case 93:
            (this as any).$ = ((y as any).LINETYPE as any).STICK_ARROW_BOTTOM_REVERSE;
            break;
          case 94:
            (this as any).$ = ((y as any).LINETYPE as any).SOLID_ARROW_TOP_REVERSE_DOTTED;
            break;
          case 95:
            (this as any).$ = ((y as any).LINETYPE as any).SOLID_ARROW_BOTTOM_REVERSE_DOTTED;
            break;
          case 96:
            (this as any).$ = ((y as any).LINETYPE as any).STICK_ARROW_TOP_REVERSE_DOTTED;
            break;
          case 97:
            (this as any).$ = ((y as any).LINETYPE as any).STICK_ARROW_BOTTOM_REVERSE_DOTTED;
            break;
          case 98:
            (this as any).$ = ((y as any).LINETYPE as any).BIDIRECTIONAL_SOLID;
            break;
          case 99:
            (this as any).$ = ((y as any).LINETYPE as any).DOTTED;
            break;
          case 100:
            (this as any).$ = ((y as any).LINETYPE as any).BIDIRECTIONAL_DOTTED;
            break;
          case 101:
            (this as any).$ = ((y as any).LINETYPE as any).SOLID_CROSS;
            break;
          case 102:
            (this as any).$ = ((y as any).LINETYPE as any).DOTTED_CROSS;
            break;
          case 103:
            (this as any).$ = ((y as any).LINETYPE as any).SOLID_POINT;
            break;
          case 104:
            (this as any).$ = ((y as any).LINETYPE as any).DOTTED_POINT;
            break;
          case 105:
            (this as any).$ = ((y as any).parseMessage as any)((((((o as any)[d] as any).trim as any)() as any).substring as any)(1));
            break;
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: t,
        5: a,
        6: r
      }, {
        1: [3]
      }, {
        3: 5,
        4: t,
        5: a,
        6: r
      }, {
        3: 6,
        4: t,
        5: a,
        6: r
      }, (e as any)([1, 4, 5, 10, 14, 15, 19, 22, 24, 30, 31, 32, 34, 36, 37, 38, 39, 40, 42, 44, 45, 47, 51, 53, 54, 56, 61, 62, 63, 64, 73], i, {
        7: 7
      }), {
        1: [2, 1]
      }, {
        1: [2, 2]
      }, {
        1: [2, 3],
        4: n,
        5: s,
        8: 8,
        9: 10,
        10: c,
        13: 13,
        14: E,
        15: h,
        18: 16,
        19: p,
        22: _,
        23: 41,
        24: u,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: 24,
        30: O,
        31: T,
        32: g,
        34: f,
        36: I,
        37: L,
        38: b,
        39: w,
        40: A,
        42: D,
        44: M,
        45: V,
        47: W,
        51: U,
        53: G,
        54: X,
        56: nt,
        61: j,
        62: H,
        63: st,
        64: tt,
        73: Y
      }, (e as any)(C, [2, 5]), {
        9: 48,
        13: 13,
        14: E,
        15: h,
        18: 16,
        19: p,
        22: _,
        23: 41,
        24: u,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: 24,
        30: O,
        31: T,
        32: g,
        34: f,
        36: I,
        37: L,
        38: b,
        39: w,
        40: A,
        42: D,
        44: M,
        45: V,
        47: W,
        51: U,
        53: G,
        54: X,
        56: nt,
        61: j,
        62: H,
        63: st,
        64: tt,
        73: Y
      }, (e as any)(C, [2, 7]), (e as any)(C, [2, 8]), (e as any)(C, [2, 9]), (e as any)(C, [2, 15]), {
        13: 49,
        51: U,
        53: G,
        54: X
      }, {
        16: [1, 50]
      }, {
        5: [1, 51]
      }, {
        5: [1, 54],
        20: [1, 52],
        21: [1, 53]
      }, {
        23: 55,
        73: Y
      }, {
        23: 56,
        73: Y
      }, {
        5: [1, 57]
      }, {
        5: [1, 58]
      }, {
        5: [1, 59]
      }, {
        5: [1, 60]
      }, {
        5: [1, 61]
      }, (e as any)(C, [2, 30]), (e as any)(C, [2, 31]), {
        33: [1, 62]
      }, {
        35: [1, 63]
      }, (e as any)(C, [2, 34]), {
        16: [1, 64]
      }, {
        16: [1, 65]
      }, {
        16: [1, 66]
      }, {
        16: [1, 67]
      }, {
        16: [1, 68]
      }, {
        16: [1, 69]
      }, {
        16: [1, 70]
      }, {
        16: [1, 71]
      }, {
        23: 72,
        55: 73,
        73: St
      }, {
        23: 75,
        55: 76,
        73: St
      }, {
        23: 77,
        73: Y
      }, {
        69: 78,
        72: [1, 79],
        78: Dt,
        79: m,
        80: k,
        81: lt,
        82: et,
        83: K,
        84: Ot,
        85: oe,
        86: ce,
        87: le,
        88: he,
        89: de,
        90: Te,
        91: pe,
        92: Ee,
        93: ue,
        94: fe,
        95: _e,
        96: ge,
        97: xe,
        98: Ie,
        99: ye,
        100: Re,
        101: Oe,
        102: Le,
        103: be
      }, {
        57: 106,
        59: [1, 107],
        67: [1, 108],
        68: [1, 109]
      }, {
        23: 110,
        73: Y
      }, {
        23: 111,
        73: Y
      }, {
        23: 112,
        73: Y
      }, {
        23: 113,
        73: Y
      }, (e as any)([5, 66, 72, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], me), (e as any)(C, [2, 6]), (e as any)(C, [2, 16]), (e as any)(wt, [2, 10], {
        11: 114
      }), (e as any)(C, [2, 18]), {
        5: [1, 116],
        20: [1, 115]
      }, {
        5: [1, 117]
      }, (e as any)(C, [2, 22]), {
        5: [1, 118]
      }, {
        5: [1, 119]
      }, (e as any)(C, [2, 25]), (e as any)(C, [2, 26]), (e as any)(C, [2, 27]), (e as any)(C, [2, 28]), (e as any)(C, [2, 29]), (e as any)(C, [2, 32]), (e as any)(C, [2, 33]), (e as any)(vt, i, {
        7: 120
      }), (e as any)(vt, i, {
        7: 121
      }), (e as any)(vt, i, {
        7: 122
      }), (e as any)(Ae, i, {
        41: 123,
        7: 124
      }), (e as any)(Gt, i, {
        43: 125,
        7: 126
      }), (e as any)(Gt, i, {
        7: 126,
        43: 127
      }), (e as any)(Se, i, {
        46: 128,
        7: 129
      }), (e as any)(vt, i, {
        7: 130
      }), {
        5: [1, 132],
        52: [1, 131]
      }, {
        5: [1, 134],
        52: [1, 133]
      }, (e as any)(Xt, me, {
        74: 135,
        75: [1, 136]
      }), {
        5: [1, 138],
        52: [1, 137]
      }, {
        5: [1, 140],
        52: [1, 139]
      }, {
        5: [1, 141]
      }, {
        23: 145,
        70: [1, 142],
        71: [1, 143],
        72: [1, 144],
        73: Y
      }, {
        69: 146,
        78: Dt,
        79: m,
        80: k,
        81: lt,
        82: et,
        83: K,
        84: Ot,
        85: oe,
        86: ce,
        87: le,
        88: he,
        89: de,
        90: Te,
        91: pe,
        92: Ee,
        93: ue,
        94: fe,
        95: _e,
        96: ge,
        97: xe,
        98: Ie,
        99: ye,
        100: Re,
        101: Oe,
        102: Le,
        103: be
      }, (e as any)(F, [2, 79]), (e as any)(F, [2, 80]), (e as any)(F, [2, 81]), (e as any)(F, [2, 82]), (e as any)(F, [2, 83]), (e as any)(F, [2, 84]), (e as any)(F, [2, 85]), (e as any)(F, [2, 86]), (e as any)(F, [2, 87]), (e as any)(F, [2, 88]), (e as any)(F, [2, 89]), (e as any)(F, [2, 90]), (e as any)(F, [2, 91]), (e as any)(F, [2, 92]), (e as any)(F, [2, 93]), (e as any)(F, [2, 94]), (e as any)(F, [2, 95]), (e as any)(F, [2, 96]), (e as any)(F, [2, 97]), (e as any)(F, [2, 98]), (e as any)(F, [2, 99]), (e as any)(F, [2, 100]), (e as any)(F, [2, 101]), (e as any)(F, [2, 102]), (e as any)(F, [2, 103]), (e as any)(F, [2, 104]), {
        23: 147,
        73: Y
      }, {
        23: 149,
        60: 148,
        73: Y
      }, {
        73: [2, 68]
      }, {
        73: [2, 69]
      }, {
        58: 150,
        104: ot
      }, {
        58: 152,
        104: ot
      }, {
        58: 153,
        104: ot
      }, {
        58: 154,
        104: ot
      }, {
        4: [1, 157],
        5: [1, 159],
        12: 156,
        13: 158,
        17: [1, 155],
        51: U,
        53: G,
        54: X
      }, {
        5: [1, 160]
      }, (e as any)(C, [2, 20]), (e as any)(C, [2, 21]), (e as any)(C, [2, 23]), (e as any)(C, [2, 24]), {
        4: n,
        5: s,
        8: 8,
        9: 10,
        10: c,
        13: 13,
        14: E,
        15: h,
        17: [1, 161],
        18: 16,
        19: p,
        22: _,
        23: 41,
        24: u,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: 24,
        30: O,
        31: T,
        32: g,
        34: f,
        36: I,
        37: L,
        38: b,
        39: w,
        40: A,
        42: D,
        44: M,
        45: V,
        47: W,
        51: U,
        53: G,
        54: X,
        56: nt,
        61: j,
        62: H,
        63: st,
        64: tt,
        73: Y
      }, {
        4: n,
        5: s,
        8: 8,
        9: 10,
        10: c,
        13: 13,
        14: E,
        15: h,
        17: [1, 162],
        18: 16,
        19: p,
        22: _,
        23: 41,
        24: u,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: 24,
        30: O,
        31: T,
        32: g,
        34: f,
        36: I,
        37: L,
        38: b,
        39: w,
        40: A,
        42: D,
        44: M,
        45: V,
        47: W,
        51: U,
        53: G,
        54: X,
        56: nt,
        61: j,
        62: H,
        63: st,
        64: tt,
        73: Y
      }, {
        4: n,
        5: s,
        8: 8,
        9: 10,
        10: c,
        13: 13,
        14: E,
        15: h,
        17: [1, 163],
        18: 16,
        19: p,
        22: _,
        23: 41,
        24: u,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: 24,
        30: O,
        31: T,
        32: g,
        34: f,
        36: I,
        37: L,
        38: b,
        39: w,
        40: A,
        42: D,
        44: M,
        45: V,
        47: W,
        51: U,
        53: G,
        54: X,
        56: nt,
        61: j,
        62: H,
        63: st,
        64: tt,
        73: Y
      }, {
        17: [1, 164]
      }, {
        4: n,
        5: s,
        8: 8,
        9: 10,
        10: c,
        13: 13,
        14: E,
        15: h,
        17: [2, 47],
        18: 16,
        19: p,
        22: _,
        23: 41,
        24: u,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: 24,
        30: O,
        31: T,
        32: g,
        34: f,
        36: I,
        37: L,
        38: b,
        39: w,
        40: A,
        42: D,
        44: M,
        45: V,
        47: W,
        50: [1, 165],
        51: U,
        53: G,
        54: X,
        56: nt,
        61: j,
        62: H,
        63: st,
        64: tt,
        73: Y
      }, {
        17: [1, 166]
      }, {
        4: n,
        5: s,
        8: 8,
        9: 10,
        10: c,
        13: 13,
        14: E,
        15: h,
        17: [2, 45],
        18: 16,
        19: p,
        22: _,
        23: 41,
        24: u,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: 24,
        30: O,
        31: T,
        32: g,
        34: f,
        36: I,
        37: L,
        38: b,
        39: w,
        40: A,
        42: D,
        44: M,
        45: V,
        47: W,
        49: [1, 167],
        51: U,
        53: G,
        54: X,
        56: nt,
        61: j,
        62: H,
        63: st,
        64: tt,
        73: Y
      }, {
        17: [1, 168]
      }, {
        17: [1, 169]
      }, {
        4: n,
        5: s,
        8: 8,
        9: 10,
        10: c,
        13: 13,
        14: E,
        15: h,
        17: [2, 43],
        18: 16,
        19: p,
        22: _,
        23: 41,
        24: u,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: 24,
        30: O,
        31: T,
        32: g,
        34: f,
        36: I,
        37: L,
        38: b,
        39: w,
        40: A,
        42: D,
        44: M,
        45: V,
        47: W,
        48: [1, 170],
        51: U,
        53: G,
        54: X,
        56: nt,
        61: j,
        62: H,
        63: st,
        64: tt,
        73: Y
      }, {
        4: n,
        5: s,
        8: 8,
        9: 10,
        10: c,
        13: 13,
        14: E,
        15: h,
        17: [1, 171],
        18: 16,
        19: p,
        22: _,
        23: 41,
        24: u,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: 24,
        30: O,
        31: T,
        32: g,
        34: f,
        36: I,
        37: L,
        38: b,
        39: w,
        40: A,
        42: D,
        44: M,
        45: V,
        47: W,
        51: U,
        53: G,
        54: X,
        56: nt,
        61: j,
        62: H,
        63: st,
        64: tt,
        73: Y
      }, {
        16: [1, 172]
      }, (e as any)(C, [2, 50]), {
        16: [1, 173]
      }, (e as any)(C, [2, 55]), (e as any)(Xt, [2, 76]), {
        76: [1, 174]
      }, {
        16: [1, 175]
      }, (e as any)(C, [2, 52]), {
        16: [1, 176]
      }, (e as any)(C, [2, 57]), (e as any)(C, [2, 53]), {
        23: 177,
        73: Y
      }, {
        23: 178,
        73: Y
      }, {
        23: 179,
        73: Y
      }, {
        58: 180,
        104: ot
      }, {
        23: 181,
        72: [1, 182],
        73: Y
      }, {
        58: 183,
        104: ot
      }, {
        58: 184,
        104: ot
      }, {
        66: [1, 185],
        104: [2, 67]
      }, {
        5: [2, 60]
      }, {
        5: [2, 105]
      }, {
        5: [2, 61]
      }, {
        5: [2, 62]
      }, {
        5: [2, 63]
      }, (e as any)(C, [2, 17]), (e as any)(wt, [2, 11]), {
        13: 186,
        51: U,
        53: G,
        54: X
      }, (e as any)(wt, [2, 13]), (e as any)(wt, [2, 14]), (e as any)(C, [2, 19]), (e as any)(C, [2, 35]), (e as any)(C, [2, 36]), (e as any)(C, [2, 37]), (e as any)(C, [2, 38]), {
        16: [1, 187]
      }, (e as any)(C, [2, 39]), {
        16: [1, 188]
      }, (e as any)(C, [2, 40]), (e as any)(C, [2, 41]), {
        16: [1, 189]
      }, (e as any)(C, [2, 42]), {
        5: [1, 190]
      }, {
        5: [1, 191]
      }, {
        77: [1, 192]
      }, {
        5: [1, 193]
      }, {
        5: [1, 194]
      }, {
        58: 195,
        104: ot
      }, {
        58: 196,
        104: ot
      }, {
        58: 197,
        104: ot
      }, {
        5: [2, 75]
      }, {
        58: 198,
        104: ot
      }, {
        23: 199,
        73: Y
      }, {
        5: [2, 58]
      }, {
        5: [2, 59]
      }, {
        23: 200,
        73: Y
      }, (e as any)(wt, [2, 12]), (e as any)(Ae, i, {
        7: 124,
        41: 201
      }), (e as any)(Gt, i, {
        7: 126,
        43: 202
      }), (e as any)(Se, i, {
        7: 129,
        46: 203
      }), (e as any)(C, [2, 49]), (e as any)(C, [2, 54]), (e as any)(Xt, [2, 77]), (e as any)(C, [2, 51]), (e as any)(C, [2, 56]), {
        5: [2, 70]
      }, {
        5: [2, 71]
      }, {
        5: [2, 72]
      }, {
        5: [2, 73]
      }, {
        58: 204,
        104: ot
      }, {
        104: [2, 66]
      }, {
        17: [2, 48]
      }, {
        17: [2, 46]
      }, {
        17: [2, 44]
      }, {
        5: [2, 74]
      }],
      defaultActions: {
        5: [2, 1],
        6: [2, 2],
        108: [2, 68],
        109: [2, 69],
        150: [2, 60],
        151: [2, 105],
        152: [2, 61],
        153: [2, 62],
        154: [2, 63],
        180: [2, 75],
        183: [2, 58],
        184: [2, 59],
        195: [2, 70],
        196: [2, 71],
        197: [2, 72],
        198: [2, 73],
        200: [2, 66],
        201: [2, 48],
        202: [2, 46],
        203: [2, 44],
        204: [2, 74]
      },
      parseError: (x as any)(function (this: any, S: any, v: any): any {
        if ((v as any).recoverable) ((this as any).trace as any)(S);else {
          var P: any = new (Error as any)(S);
          throw (P as any).hash = v, P;
        }
      }, "parseError"),
      parse: (x as any)(function (this: any, S: any): any {
        var Zt: any;
        var v: any = this,
          P: any = [0],
          y: any = [],
          z: any = [null],
          o: any = [],
          Nt: any = (this as any).table,
          d: any = "",
          Mt: any = 0,
          we: any = 0,
          Qe: number = 2,
          Ne: number = 1,
          $e: any = (((o as any).slice as any).call as any)(arguments, 1),
          J: any = ((Object as any).create as any)((this as any).lexer),
          gt: any = {
            yy: {}
          };
        for (Zt in (this as any).yy) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).yy, Zt) && (((gt as any).yy as any)[Zt] = ((this as any).yy as any)[Zt]);
        ((J as any).setInput as any)(S, (gt as any).yy), ((gt as any).yy as any).lexer = J, ((gt as any).yy as any).parser = this, (typeof (J as any).yylloc as any) > ("u" as any) && ((J as any).yylloc = {});
        var Qt: any = (J as any).yylloc;
        ((o as any).push as any)(Qt);
        var je: any = (J as any).options && ((J as any).options as any).ranges;
        (typeof ((gt as any).yy as any).parseError as any) == ("function" as any) ? (this as any).parseError = ((gt as any).yy as any).parseError : (this as any).parseError = (((Object as any).getPrototypeOf as any)(this) as any).parseError;
        function tr(this: any, it: any): any {
          (P as any).length = ((P as any).length as any) - ((2 as any) * (it as any) as any), (z as any).length = ((z as any).length as any) - (it as any), (o as any).length = ((o as any).length as any) - (it as any);
        }
        (x as any)(tr, "popStack");
        function Pe(this: any): any {
          var it: any;
          return it = ((y as any).pop as any)() || ((J as any).lex as any)() || Ne, (typeof it as any) != ("number" as any) && (it instanceof Array && (y = it, it = ((y as any).pop as any)()), it = ((v as any).symbols_ as any)[it] || it), it;
        }
        (x as any)(Pe, "lex");
        for (var rt: any, xt: any, ct: any, $t: any, Lt: any = {}, Bt: any, Tt: any, ke: any, Vt: any;;) {
          if (xt = (P as any)[((P as any).length as any) - (1 as any)], ((this as any).defaultActions as any)[xt] ? ct = ((this as any).defaultActions as any)[xt] : (((rt as any) === (null as any) || (typeof rt as any) > ("u" as any)) && (rt = (Pe as any)()), ct = (Nt as any)[xt] && ((Nt as any)[xt] as any)[rt]), (typeof ct as any) > ("u" as any) || !(ct as any).length || !(ct as any)[0]) {
            var jt: any = "";
            Vt = [];
            for (Bt in (Nt as any)[xt]) ((this as any).terminals_ as any)[Bt] && (Bt as any) > (Qe as any) && ((Vt as any).push as any)((("'" as any) + (((this as any).terminals_ as any)[Bt] as any) as any) + ("'" as any));
            (J as any).showPosition ? jt = (((((((("Parse error on line " as any) + ((Mt as any) + (1 as any) as any) as any) + (`:
` as any) as any) + (((J as any).showPosition as any)() as any) as any) + (`
Expecting ` as any) as any) + (((Vt as any).join as any)(", ") as any) as any) + (", got '" as any) as any) + ((((this as any).terminals_ as any)[rt] || rt) as any) as any) + ("'" as any) : jt = ((("Parse error on line " as any) + ((Mt as any) + (1 as any) as any) as any) + (": Unexpected " as any) as any) + (((rt as any) == (Ne as any) ? "end of input" : (("'" as any) + ((((this as any).terminals_ as any)[rt] || rt) as any) as any) + ("'" as any)) as any), ((this as any).parseError as any)(jt, {
              text: (J as any).match,
              token: ((this as any).terminals_ as any)[rt] || rt,
              line: (J as any).yylineno,
              loc: Qt,
              expected: Vt
            });
          }
          if ((ct as any)[0] instanceof Array && ((ct as any).length as any) > (1 as any)) throw new (Error as any)(((("Parse Error: multiple actions possible at state: " as any) + (xt as any) as any) + (", token: " as any) as any) + (rt as any));
          switch ((ct as any)[0]) {
            case 1:
              ((P as any).push as any)(rt), ((z as any).push as any)((J as any).yytext), ((o as any).push as any)((J as any).yylloc), ((P as any).push as any)((ct as any)[1]), rt = null, we = (J as any).yyleng, d = (J as any).yytext, Mt = (J as any).yylineno, Qt = (J as any).yylloc;
              break;
            case 2:
              if (Tt = (((this as any).productions_ as any)[(ct as any)[1]] as any)[1], (Lt as any).$ = (z as any)[((z as any).length as any) - (Tt as any)], (Lt as any)._$ = {
                first_line: ((o as any)[((o as any).length as any) - ((Tt || 1) as any)] as any).first_line,
                last_line: ((o as any)[((o as any).length as any) - (1 as any)] as any).last_line,
                first_column: ((o as any)[((o as any).length as any) - ((Tt || 1) as any)] as any).first_column,
                last_column: ((o as any)[((o as any).length as any) - (1 as any)] as any).last_column
              }, je && (((Lt as any)._$ as any).range = [(((o as any)[((o as any).length as any) - ((Tt || 1) as any)] as any).range as any)[0], (((o as any)[((o as any).length as any) - (1 as any)] as any).range as any)[1]]), $t = (((this as any).performAction as any).apply as any)(Lt, (([d, we, Mt, (gt as any).yy, (ct as any)[1], z, o] as any).concat as any)($e)), (typeof $t as any) < ("u" as any)) return $t;
              Tt && (P = ((P as any).slice as any)(0, ((-1 as any) * (Tt as any) as any) * (2 as any)), z = ((z as any).slice as any)(0, (-1 as any) * (Tt as any)), o = ((o as any).slice as any)(0, (-1 as any) * (Tt as any))), ((P as any).push as any)((((this as any).productions_ as any)[(ct as any)[1]] as any)[0]), ((z as any).push as any)((Lt as any).$), ((o as any).push as any)((Lt as any)._$), ke = ((Nt as any)[(P as any)[((P as any).length as any) - (2 as any)]] as any)[(P as any)[((P as any).length as any) - (1 as any)]], ((P as any).push as any)(ke);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }, "parse")
    },
    Ze: any = (function (this: any): any {
      var ut: any = {
        EOF: 1,
        parseError: (x as any)(function (this: any, v: any, P: any): any {
          if (((this as any).yy as any).parser) ((((this as any).yy as any).parser as any).parseError as any)(v, P);else throw new (Error as any)(v);
        }, "parseError"),
        setInput: (x as any)(function (this: any, S: any, v: any): any {
          return (this as any).yy = v || (this as any).yy || {}, (this as any)._input = S, (this as any)._more = (this as any)._backtrack = (this as any).done = !1, (this as any).yylineno = (this as any).yyleng = 0, (this as any).yytext = (this as any).matched = (this as any).match = "", (this as any).conditionStack = ["INITIAL"], (this as any).yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [0, 0]), (this as any).offset = 0, this;
        }, "setInput"),
        input: (x as any)(function (this: any): any {
          var S: any = ((this as any)._input as any)[0];
          (this as any).yytext += S, (this as any).yyleng++, (this as any).offset++, (this as any).match += S, (this as any).matched += S;
          var v: any = ((S as any).match as any)(/(?:\r\n?|\n).*/g);
          return v ? ((this as any).yylineno++, ((this as any).yylloc as any).last_line++) : ((this as any).yylloc as any).last_column++, ((this as any).options as any).ranges && (((this as any).yylloc as any).range as any)[1]++, (this as any)._input = (((this as any)._input as any).slice as any)(1), S;
        }, "input"),
        unput: (x as any)(function (this: any, S: any): any {
          var v: any = (S as any).length,
            P: any = ((S as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any)._input = (S as any) + ((this as any)._input as any), (this as any).yytext = (((this as any).yytext as any).substr as any)(0, (((this as any).yytext as any).length as any) - (v as any)), (this as any).offset -= v;
          var y: any = (((this as any).match as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any).match = (((this as any).match as any).substr as any)(0, (((this as any).match as any).length as any) - (1 as any)), (this as any).matched = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (1 as any)), ((P as any).length as any) - (1 as any) && ((this as any).yylineno -= ((P as any).length as any) - (1 as any));
          var z: any = ((this as any).yylloc as any).range;
          return (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).first_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).first_column,
            last_column: P ? (((((P as any).length as any) === ((y as any).length as any) ? ((this as any).yylloc as any).first_column : 0) as any) + (((y as any)[((y as any).length as any) - ((P as any).length as any)] as any).length as any) as any) - (((P as any)[0] as any).length as any) : (((this as any).yylloc as any).first_column as any) - (v as any)
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(z as any)[0], (((z as any)[0] as any) + ((this as any).yyleng as any) as any) - (v as any)]), (this as any).yyleng = ((this as any).yytext as any).length, this;
        }, "unput"),
        more: (x as any)(function (this: any): any {
          return (this as any)._more = !0, this;
        }, "more"),
        reject: (x as any)(function (this: any): any {
          if (((this as any).options as any).backtrack_lexer) (this as any)._backtrack = !0;else return ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
          return this;
        }, "reject"),
        less: (x as any)(function (this: any, S: any): any {
          ((this as any).unput as any)((((this as any).match as any).slice as any)(S));
        }, "less"),
        pastInput: (x as any)(function (this: any): any {
          var S: any = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (((this as any).match as any).length as any));
          return ((((S as any).length as any) > (20 as any) ? "..." : "") as any) + (((((S as any).substr as any)(-20) as any).replace as any)(/\n/g, "") as any);
        }, "pastInput"),
        upcomingInput: (x as any)(function (this: any): any {
          var S: any = (this as any).match;
          return ((S as any).length as any) < (20 as any) && (S += (((this as any)._input as any).substr as any)(0, (20 as any) - ((S as any).length as any))), (((((S as any).substr as any)(0, 20) as any) + ((((S as any).length as any) > (20 as any) ? "..." : "") as any) as any).replace as any)(/\n/g, "");
        }, "upcomingInput"),
        showPosition: (x as any)(function (this: any): any {
          var S: any = ((this as any).pastInput as any)(),
            v: any = ((new (Array as any)(((S as any).length as any) + (1 as any)) as any).join as any)("-");
          return ((((S as any) + (((this as any).upcomingInput as any)() as any) as any) + (`
` as any) as any) + (v as any) as any) + ("^" as any);
        }, "showPosition"),
        test_match: (x as any)(function (this: any, S: any, v: any): any {
          var o: any;
          var P: any, y: any, z: any;
          if (((this as any).options as any).backtrack_lexer && (z = {
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
          }, ((this as any).options as any).ranges && (((z as any).yylloc as any).range = ((((this as any).yylloc as any).range as any).slice as any)(0))), y = (((S as any)[0] as any).match as any)(/(?:\r\n?|\n).*/g), y && ((this as any).yylineno += (y as any).length), (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).last_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).last_column,
            last_column: y ? (((y as any)[((y as any).length as any) - (1 as any)] as any).length as any) - ((((((y as any)[((y as any).length as any) - (1 as any)] as any).match as any)(/\r?\n?/) as any)[0] as any).length as any) : (((this as any).yylloc as any).last_column as any) + (((S as any)[0] as any).length as any)
          }, (this as any).yytext += (S as any)[0], (this as any).match += (S as any)[0], (this as any).matches = S, (this as any).yyleng = ((this as any).yytext as any).length, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(this as any).offset, (this as any).offset += (this as any).yyleng]), (this as any)._more = !1, (this as any)._backtrack = !1, (this as any)._input = (((this as any)._input as any).slice as any)(((S as any)[0] as any).length), (this as any).matched += (S as any)[0], P = (((this as any).performAction as any).call as any)(this, (this as any).yy, this, v, ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]), (this as any).done && (this as any)._input && ((this as any).done = !1), P) return P;
          if ((this as any)._backtrack) {
            for (o in z) (this as any)[o] = (z as any)[o];
            return !1;
          }
          return !1;
        }, "test_match"),
        next: (x as any)(function (this: any): any {
          if ((this as any).done) return (this as any).EOF;
          (this as any)._input || ((this as any).done = !0);
          var S: any, v: any, P: any, y: any;
          (this as any)._more || ((this as any).yytext = "", (this as any).match = "");
          for (var z: any = ((this as any)._currentRules as any)(), o: any = 0; (o as any) < ((z as any).length as any); o++) if (P = (((this as any)._input as any).match as any)(((this as any).rules as any)[(z as any)[o]]), P && (!v || (((P as any)[0] as any).length as any) > (((v as any)[0] as any).length as any))) {
            if (v = P, y = o, ((this as any).options as any).backtrack_lexer) {
              if (S = ((this as any).test_match as any)(P, (z as any)[o]), (S as any) !== (!1 as any)) return S;
              if ((this as any)._backtrack) {
                v = !1;
                continue;
              } else return !1;
            } else if (!((this as any).options as any).flex) break;
          }
          return v ? (S = ((this as any).test_match as any)(v, (z as any)[y]), (S as any) !== (!1 as any) ? S : !1) : ((this as any)._input as any) === ("" as any) ? (this as any).EOF : ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. Unrecognized text.
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
        }, "next"),
        lex: (x as any)(function (this: any): any {
          var v: any = ((this as any).next as any)();
          return v || ((this as any).lex as any)();
        }, "lex"),
        begin: (x as any)(function (this: any, v: any): any {
          (((this as any).conditionStack as any).push as any)(v);
        }, "begin"),
        popState: (x as any)(function (this: any): any {
          var v: any = (((this as any).conditionStack as any).length as any) - (1 as any);
          return (v as any) > (0 as any) ? (((this as any).conditionStack as any).pop as any)() : ((this as any).conditionStack as any)[0];
        }, "popState"),
        _currentRules: (x as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length && ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)] ? (((this as any).conditions as any)[((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]] as any).rules : (((this as any).conditions as any).INITIAL as any).rules;
        }, "_currentRules"),
        topState: (x as any)(function (this: any, v: any): any {
          return v = ((((this as any).conditionStack as any).length as any) - (1 as any) as any) - (((Math as any).abs as any)(v || 0) as any), (v as any) >= (0 as any) ? ((this as any).conditionStack as any)[v] : "INITIAL";
        }, "topState"),
        pushState: (x as any)(function (this: any, v: any): any {
          ((this as any).begin as any)(v);
        }, "pushState"),
        stateStackSize: (x as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": !0
        },
        performAction: (x as any)(function (this: any, v: any, P: any, y: any, z: any): any {
          switch (y) {
            case 0:
              return 5;
            case 1:
              break;
            case 2:
              break;
            case 3:
              break;
            case 4:
              break;
            case 5:
              break;
            case 6:
              return 20;
            case 7:
              return ((this as any).begin as any)("CONFIG"), 75;
            case 8:
              return 76;
            case 9:
              return ((this as any).popState as any)(), ((this as any).begin as any)("ALIAS"), 77;
            case 10:
              return ((this as any).popState as any)(), ((this as any).popState as any)(), 77;
            case 11:
              return (P as any).yytext = (((P as any).yytext as any).trim as any)(), 73;
            case 12:
              return (P as any).yytext = (((P as any).yytext as any).trim as any)(), ((this as any).begin as any)("ALIAS"), 73;
            case 13:
              return (P as any).yytext = (((P as any).yytext as any).trim as any)(), ((this as any).popState as any)(), 73;
            case 14:
              return ((this as any).popState as any)(), 10;
            case 15:
              return (P as any).yytext = (((P as any).yytext as any).trim as any)(), ((this as any).popState as any)(), 10;
            case 16:
              return ((this as any).begin as any)("LINE"), 15;
            case 17:
              return ((this as any).begin as any)("ID"), 51;
            case 18:
              return ((this as any).begin as any)("ID"), 53;
            case 19:
              return 14;
            case 20:
              return ((this as any).begin as any)("ID"), 54;
            case 21:
              return ((this as any).popState as any)(), ((this as any).popState as any)(), ((this as any).begin as any)("LINE"), 52;
            case 22:
              return ((this as any).popState as any)(), ((this as any).popState as any)(), 5;
            case 23:
              return ((this as any).begin as any)("LINE"), 37;
            case 24:
              return ((this as any).begin as any)("LINE"), 38;
            case 25:
              return ((this as any).begin as any)("LINE"), 39;
            case 26:
              return ((this as any).begin as any)("LINE"), 40;
            case 27:
              return ((this as any).begin as any)("LINE"), 50;
            case 28:
              return ((this as any).begin as any)("LINE"), 42;
            case 29:
              return ((this as any).begin as any)("LINE"), 44;
            case 30:
              return ((this as any).begin as any)("LINE"), 49;
            case 31:
              return ((this as any).begin as any)("LINE"), 45;
            case 32:
              return ((this as any).begin as any)("LINE"), 48;
            case 33:
              return ((this as any).begin as any)("LINE"), 47;
            case 34:
              return ((this as any).popState as any)(), 16;
            case 35:
              return 17;
            case 36:
              return 67;
            case 37:
              return 68;
            case 38:
              return 61;
            case 39:
              return 62;
            case 40:
              return 63;
            case 41:
              return 64;
            case 42:
              return 59;
            case 43:
              return 56;
            case 44:
              return ((this as any).begin as any)("ID"), 22;
            case 45:
              return ((this as any).begin as any)("ID"), 24;
            case 46:
              return 30;
            case 47:
              return 31;
            case 48:
              return ((this as any).begin as any)("acc_title"), 32;
            case 49:
              return ((this as any).popState as any)(), "acc_title_value";
            case 50:
              return ((this as any).begin as any)("acc_descr"), 34;
            case 51:
              return ((this as any).popState as any)(), "acc_descr_value";
            case 52:
              ((this as any).begin as any)("acc_descr_multiline");
              break;
            case 53:
              ((this as any).popState as any)();
              break;
            case 54:
              return "acc_descr_multiline_value";
            case 55:
              return 6;
            case 56:
              return 19;
            case 57:
              return 21;
            case 58:
              return 66;
            case 59:
              return 5;
            case 60:
              return (P as any).yytext = (((P as any).yytext as any).trim as any)(), 73;
            case 61:
              return 80;
            case 62:
              return 97;
            case 63:
              return 98;
            case 64:
              return 99;
            case 65:
              return 78;
            case 66:
              return 79;
            case 67:
              return 100;
            case 68:
              return 101;
            case 69:
              return 102;
            case 70:
              return 103;
            case 71:
              return 85;
            case 72:
              return 86;
            case 73:
              return 87;
            case 74:
              return 88;
            case 75:
              return 93;
            case 76:
              return 94;
            case 77:
              return 95;
            case 78:
              return 96;
            case 79:
              return 81;
            case 80:
              return 82;
            case 81:
              return 83;
            case 82:
              return 84;
            case 83:
              return 89;
            case 84:
              return 90;
            case 85:
              return 91;
            case 86:
              return 92;
            case 87:
              return 104;
            case 88:
              return 104;
            case 89:
              return 70;
            case 90:
              return 71;
            case 91:
              return 72;
            case 92:
              return 5;
            case 93:
              return 10;
          }
        }, "anonymous"),
        rules: [/^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:((?!\n)\s)+)/i, /^(?:#[^\n]*)/i, /^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:([0-9]+(\.[0-9]{1,2})?|\.[0-9]{1,2})(?=[ \n]+))/i, /^(?:@\{)/i, /^(?:[^\}]+)/i, /^(?:\}(?=\s+as\s))/i, /^(?:\})/i, /^(?:[^\<->\->:\n,;@\s]+(?=@\{))/i, /^(?:[^<>:\n,;@\s]+(?=\s+as\s))/i, /^(?:[^<>:\n,;@]+(?=\s*[\n;#]|$))/i, /^(?:[^<>:\n,;@]*<[^\n]*)/i, /^(?:[^\n]+)/i, /^(?:box\b)/i, /^(?:participant\b)/i, /^(?:actor\b)/i, /^(?:create\b)/i, /^(?:destroy\b)/i, /^(?:as\b)/i, /^(?:(?:))/i, /^(?:loop\b)/i, /^(?:rect\b)/i, /^(?:opt\b)/i, /^(?:alt\b)/i, /^(?:else\b)/i, /^(?:par\b)/i, /^(?:par_over\b)/i, /^(?:and\b)/i, /^(?:critical\b)/i, /^(?:option\b)/i, /^(?:break\b)/i, /^(?:(?:[:]?(?:no)?wrap)?[^#\n;]*)/i, /^(?:end\b)/i, /^(?:left of\b)/i, /^(?:right of\b)/i, /^(?:links\b)/i, /^(?:link\b)/i, /^(?:properties\b)/i, /^(?:details\b)/i, /^(?:over\b)/i, /^(?:note\b)/i, /^(?:activate\b)/i, /^(?:deactivate\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:title:\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:sequenceDiagram\b)/i, /^(?:autonumber\b)/i, /^(?:off\b)/i, /^(?:,)/i, /^(?:;)/i, /^(?:[^\/\\\+\()\+<\->\->:\n,;]+((?!(-x|--x|-\)|--\)|-\|\\|-\\|-\/|-\/\/|-\|\/|\/\|-|\\\|-|\/\/-|\\\\-|\/\|-|--\|\\|--|\(\)))[\-]*[^\+<\->\->:\n,;]+)*)/i, /^(?:->>)/i, /^(?:<<->>)/i, /^(?:-->>)/i, /^(?:<<-->>)/i, /^(?:->)/i, /^(?:-->)/i, /^(?:-[x])/i, /^(?:--[x])/i, /^(?:-[\)])/i, /^(?:--[\)])/i, /^(?:--\|\\)/i, /^(?:--\|\/)/i, /^(?:--\\\\)/i, /^(?:--\/\/)/i, /^(?:\/\|--)/i, /^(?:\\\|--)/i, /^(?:\/\/--)/i, /^(?:\\\\--)/i, /^(?:-\|\\)/i, /^(?:-\|\/)/i, /^(?:-\\\\)/i, /^(?:-\/\/)/i, /^(?:\/\|-)/i, /^(?:\\\|-)/i, /^(?:\/\/-)/i, /^(?:\\\\-)/i, /^(?::(?:(?:no)?wrap)?[^#\n;]*)/i, /^(?::)/i, /^(?:\+)/i, /^(?:-)/i, /^(?:\(\))/i, /^(?:$)/i, /^(?:.)/i],
        conditions: {
          acc_descr_multiline: {
            rules: [53, 54],
            inclusive: !1
          },
          acc_descr: {
            rules: [51],
            inclusive: !1
          },
          acc_title: {
            rules: [49],
            inclusive: !1
          },
          ID: {
            rules: [2, 3, 7, 11, 12, 13, 14, 15],
            inclusive: !1
          },
          ALIAS: {
            rules: [2, 3, 21, 22],
            inclusive: !1
          },
          LINE: {
            rules: [2, 3, 34],
            inclusive: !1
          },
          CONFIG: {
            rules: [8, 9, 10],
            inclusive: !1
          },
          CONFIG_DATA: {
            rules: [],
            inclusive: !1
          },
          INITIAL: {
            rules: [0, 1, 3, 4, 5, 6, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 50, 52, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93],
            inclusive: !0
          }
        }
      };
      return ut;
    } as any)();
  (Jt as any).lexer = Ze;
  function Ct(this: any): any {
    (this as any).yy = {};
  }
  return (x as any)(Ct, "Parser"), (Ct as any).prototype = Jt, (Jt as any).Parser = Ct, new (Ct as any)();
} as any)();
(ee as any).parser = ee;
var _r: any = ee,
  gr: any = {
    SOLID: 0,
    DOTTED: 1,
    NOTE: 2,
    SOLID_CROSS: 3,
    DOTTED_CROSS: 4,
    SOLID_OPEN: 5,
    DOTTED_OPEN: 6,
    LOOP_START: 10,
    LOOP_END: 11,
    ALT_START: 12,
    ALT_ELSE: 13,
    ALT_END: 14,
    OPT_START: 15,
    OPT_END: 16,
    ACTIVE_START: 17,
    ACTIVE_END: 18,
    PAR_START: 19,
    PAR_AND: 20,
    PAR_END: 21,
    RECT_START: 22,
    RECT_END: 23,
    SOLID_POINT: 24,
    DOTTED_POINT: 25,
    AUTONUMBER: 26,
    CRITICAL_START: 27,
    CRITICAL_OPTION: 28,
    CRITICAL_END: 29,
    BREAK_START: 30,
    BREAK_END: 31,
    PAR_OVER_START: 32,
    BIDIRECTIONAL_SOLID: 33,
    BIDIRECTIONAL_DOTTED: 34,
    SOLID_TOP: 41,
    SOLID_BOTTOM: 42,
    STICK_TOP: 43,
    STICK_BOTTOM: 44,
    SOLID_ARROW_TOP_REVERSE: 45,
    SOLID_ARROW_BOTTOM_REVERSE: 46,
    STICK_ARROW_TOP_REVERSE: 47,
    STICK_ARROW_BOTTOM_REVERSE: 48,
    SOLID_TOP_DOTTED: 51,
    SOLID_BOTTOM_DOTTED: 52,
    STICK_TOP_DOTTED: 53,
    STICK_BOTTOM_DOTTED: 54,
    SOLID_ARROW_TOP_REVERSE_DOTTED: 55,
    SOLID_ARROW_BOTTOM_REVERSE_DOTTED: 56,
    STICK_ARROW_TOP_REVERSE_DOTTED: 57,
    STICK_ARROW_BOTTOM_REVERSE_DOTTED: 58,
    CENTRAL_CONNECTION: 59,
    CENTRAL_CONNECTION_REVERSE: 60,
    CENTRAL_CONNECTION_DUAL: 61
  },
  xr: any = {
    FILLED: 0,
    OPEN: 1
  },
  Ir: any = {
    LEFTOF: 0,
    RIGHTOF: 1,
    OVER: 2
  },
  Kt: any = {
    ACTOR: "actor",
    CONTROL: "control",
    DATABASE: "database",
    ENTITY: "entity"
  },
  mt: any,
  yr: any = (mt = class {
    declare PLACEMENT: any;
    declare ARROWTYPE: any;
    declare LINETYPE: any;
    declare getDiagramTitle: any;
    declare getAccDescription: any;
    declare getAccTitle: any;
    declare setDiagramTitle: any;
    declare setAccDescription: any;
    declare setAccTitle: any;
    declare state: any;
    [key: string]: any;
    constructor() {
      (this as any).state = new (er as any)((): any => ({
        prevActor: void 0,
        actors: new (Map as any)(),
        createdActors: new (Map as any)(),
        destroyedActors: new (Map as any)(),
        boxes: [],
        messages: [],
        notes: [],
        sequenceNumbersEnabled: !1,
        wrapEnabled: void 0,
        currentBox: void 0,
        lastCreated: void 0,
        lastDestroyed: void 0
      })), (this as any).setAccTitle = De, (this as any).setAccDescription = ir, (this as any).setDiagramTitle = nr, (this as any).getAccTitle = or, (this as any).getAccDescription = cr, (this as any).getDiagramTitle = lr, (this as any).apply = (((this as any).apply as any).bind as any)(this), (this as any).parseBoxData = (((this as any).parseBoxData as any).bind as any)(this), (this as any).parseMessage = (((this as any).parseMessage as any).bind as any)(this), ((this as any).clear as any)(), ((this as any).setWrap as any)((($ as any)() as any).wrap), (this as any).LINETYPE = gr, (this as any).ARROWTYPE = xr, (this as any).PLACEMENT = Ir;
    }
    addBox(t: any): any {
      (((((this as any).state as any).records as any).boxes as any).push as any)({
        name: (t as any).text,
        wrap: (t as any).wrap ?? ((this as any).autoWrap as any)(),
        fill: (t as any).color,
        actorKeys: []
      }), (((this as any).state as any).records as any).currentBox = ((((((this as any).state as any).records as any).boxes as any).slice as any)(-1) as any)[0];
    }
    addActor(t: any, a: any, r: any, i: any, n: any): any {
      let s: any = (((this as any).state as any).records as any).currentBox,
        c: any;
      if ((n as any) !== (void 0 as any)) {
        let h: any;
        ((n as any).includes as any)(`
`) ? h = (n as any) + (`
` as any) : h = ((`{
` as any) + (n as any) as any) + (`
}` as any), c = (hr as any)(h, {
          schema: dr
        });
      }
      i = c?.type ?? i, c?.alias && (!r || ((r as any).text as any) === (a as any)) && (r = {
        text: (c as any).alias,
        wrap: r?.wrap,
        type: i
      });
      const E: any = (((((this as any).state as any).records as any).actors as any).get as any)(t);
      if (E) {
        if ((((this as any).state as any).records as any).currentBox && (E as any).box && ((((this as any).state as any).records as any).currentBox as any) !== ((E as any).box as any)) throw new (Error as any)(`A same participant should only be defined in one Box: ${(E as any).name} can't be in '${((E as any).box as any).name}' and in '${((((this as any).state as any).records as any).currentBox as any).name}' at the same time.`);
        if (s = (E as any).box ? (E as any).box : (((this as any).state as any).records as any).currentBox, (E as any).box = s, E && (a as any) === ((E as any).name as any) && (r as any) == (null as any)) return;
      }
      if ((r?.text as any) == (null as any) && (r = {
        text: a,
        type: i
      }), ((i as any) == (null as any) || ((r as any).text as any) == (null as any)) && (r = {
        text: a,
        type: i
      }), (((((this as any).state as any).records as any).actors as any).set as any)(t, {
        box: s,
        name: a,
        description: (r as any).text,
        wrap: (r as any).wrap ?? ((this as any).autoWrap as any)(),
        prevActor: (((this as any).state as any).records as any).prevActor,
        links: {},
        properties: {},
        actorCnt: null,
        rectData: null,
        type: i ?? "participant"
      }), (((this as any).state as any).records as any).prevActor) {
        const h: any = (((((this as any).state as any).records as any).actors as any).get as any)((((this as any).state as any).records as any).prevActor);
        h && ((h as any).nextActor = t);
      }
      (((this as any).state as any).records as any).currentBox && ((((((this as any).state as any).records as any).currentBox as any).actorKeys as any).push as any)(t), (((this as any).state as any).records as any).prevActor = t;
    }
    activationCount(t: any): any {
      let a: any,
        r: any = 0;
      if (!t) return 0;
      for (a = 0; (a as any) < (((((this as any).state as any).records as any).messages as any).length as any); a++) ((((((this as any).state as any).records as any).messages as any)[a] as any).type as any) === (((this as any).LINETYPE as any).ACTIVE_START as any) && ((((((this as any).state as any).records as any).messages as any)[a] as any).from as any) === (t as any) && r++, ((((((this as any).state as any).records as any).messages as any)[a] as any).type as any) === (((this as any).LINETYPE as any).ACTIVE_END as any) && ((((((this as any).state as any).records as any).messages as any)[a] as any).from as any) === (t as any) && r--;
      return r;
    }
    addMessage(t: any, a: any, r: any, i: any): any {
      (((((this as any).state as any).records as any).messages as any).push as any)({
        id: ((((((this as any).state as any).records as any).messages as any).length as any).toString as any)(),
        from: t,
        to: a,
        message: (r as any).text,
        wrap: (r as any).wrap ?? ((this as any).autoWrap as any)(),
        answer: i
      });
    }
    addSignal(t: any, a: any, r: any, i: any, n: any = !1, s: any): any {
      if ((i as any) === (((this as any).LINETYPE as any).ACTIVE_END as any) && (((this as any).activationCount as any)(t ?? "") as any) < (1 as any)) {
        const E: any = new (Error as any)((("Trying to inactivate an inactive participant (" as any) + (t as any) as any) + (")" as any));
        throw (E as any).hash = {
          text: "->>-",
          token: "->>-",
          line: "1",
          loc: {
            first_line: 1,
            last_line: 1,
            first_column: 1,
            last_column: 1
          },
          expected: ["'ACTIVE_PARTICIPANT'"]
        }, E;
      }
      return (((((this as any).state as any).records as any).messages as any).push as any)({
        id: ((((((this as any).state as any).records as any).messages as any).length as any).toString as any)(),
        from: t,
        to: a,
        message: r?.text ?? "",
        wrap: r?.wrap ?? ((this as any).autoWrap as any)(),
        type: i,
        activate: n,
        centralConnection: s ?? 0
      }), !0;
    }
    hasAtLeastOneBox(): any {
      return (((((this as any).state as any).records as any).boxes as any).length as any) > (0 as any);
    }
    hasAtLeastOneBoxWithTitle(): any {
      return (((((this as any).state as any).records as any).boxes as any).some as any)((t: any): any => (t as any).name);
    }
    getMessages(): any {
      return (((this as any).state as any).records as any).messages;
    }
    getBoxes(): any {
      return (((this as any).state as any).records as any).boxes;
    }
    getActors(): any {
      return (((this as any).state as any).records as any).actors;
    }
    getCreatedActors(): any {
      return (((this as any).state as any).records as any).createdActors;
    }
    getDestroyedActors(): any {
      return (((this as any).state as any).records as any).destroyedActors;
    }
    getActor(t: any): any {
      return (((((this as any).state as any).records as any).actors as any).get as any)(t);
    }
    getActorKeys(): any {
      return [...(((((this as any).state as any).records as any).actors as any).keys as any)()];
    }
    enableSequenceNumbers(): any {
      (((this as any).state as any).records as any).sequenceNumbersEnabled = !0;
    }
    disableSequenceNumbers(): any {
      (((this as any).state as any).records as any).sequenceNumbersEnabled = !1;
    }
    showSequenceNumbers(): any {
      return (((this as any).state as any).records as any).sequenceNumbersEnabled;
    }
    setWrap(t: any): any {
      (((this as any).state as any).records as any).wrapEnabled = t;
    }
    extractWrap(t: any): any {
      if ((t as any) === (void 0 as any)) return {};
      t = ((t as any).trim as any)();
      const a: any = (((/^:?wrap:/ as any).exec as any)(t) as any) !== (null as any) ? !0 : (((/^:?nowrap:/ as any).exec as any)(t) as any) !== (null as any) ? !1 : void 0;
      return {
        cleanedText: ((((a as any) === (void 0 as any) ? t : ((t as any).replace as any)(/^:?(?:no)?wrap:/, "")) as any).trim as any)(),
        wrap: a
      };
    }
    autoWrap(): any {
      return ((((this as any).state as any).records as any).wrapEnabled as any) !== (void 0 as any) ? (((this as any).state as any).records as any).wrapEnabled : (($ as any)() as any).sequence?.wrap ?? !1;
    }
    clear(): any {
      (((this as any).state as any).reset as any)(), (Tr as any)();
    }
    parseMessage(t: any): any {
      const a: any = ((t as any).trim as any)(),
        {
          wrap: r,
          cleanedText: i
        }: any = ((this as any).extractWrap as any)(a),
        n: any = {
          text: i,
          wrap: r
        };
      return ((at as any).debug as any)(`parseMessage: ${((JSON as any).stringify as any)(n)}`), n;
    }
    parseBoxData(t: any): any {
      const a: any = ((/^((?:rgba?|hsla?)\s*\(.*\)|\w*)(.*)$/ as any).exec as any)(t);
      let r: any = a?.[1] ? (((a as any)[1] as any).trim as any)() : "transparent",
        i: any = a?.[2] ? (((a as any)[2] as any).trim as any)() : void 0;
      if (window?.CSS) (((window as any).CSS as any).supports as any)("color", r) || (r = "transparent", i = ((t as any).trim as any)());else {
        const c: any = (new (Option as any)() as any).style;
        (c as any).color = r, ((c as any).color as any) !== (r as any) && (r = "transparent", i = ((t as any).trim as any)());
      }
      const {
        wrap: n,
        cleanedText: s
      }: any = ((this as any).extractWrap as any)(i);
      return {
        text: s ? (Wt as any)(s, ($ as any)()) : void 0,
        color: r,
        wrap: n
      };
    }
    addNote(t: any, a: any, r: any): any {
      const i: any = {
          actor: t,
          placement: a,
          message: (r as any).text,
          wrap: (r as any).wrap ?? ((this as any).autoWrap as any)()
        },
        n: any = (([] as any).concat as any)(t, t);
      (((((this as any).state as any).records as any).notes as any).push as any)(i), (((((this as any).state as any).records as any).messages as any).push as any)({
        id: ((((((this as any).state as any).records as any).messages as any).length as any).toString as any)(),
        from: (n as any)[0],
        to: (n as any)[1],
        message: (r as any).text,
        wrap: (r as any).wrap ?? ((this as any).autoWrap as any)(),
        type: ((this as any).LINETYPE as any).NOTE,
        placement: a
      });
    }
    addLinks(t: any, a: any): any {
      const r: any = ((this as any).getActor as any)(t);
      try {
        let i: any = (Wt as any)((a as any).text, ($ as any)());
        i = ((i as any).replace as any)(/&equals;/g, "="), i = ((i as any).replace as any)(/&amp;/g, "&");
        const n: any = ((JSON as any).parse as any)(i);
        ((this as any).insertLinks as any)(r, n);
      } catch (i: any) {
        ((at as any).error as any)("error while parsing actor link text", i);
      }
    }
    addALink(t: any, a: any): any {
      const r: any = ((this as any).getActor as any)(t);
      try {
        const i: any = {};
        let n: any = (Wt as any)((a as any).text, ($ as any)());
        const s: any = ((n as any).indexOf as any)("@");
        n = ((n as any).replace as any)(/&equals;/g, "="), n = ((n as any).replace as any)(/&amp;/g, "&");
        const c: any = ((((n as any).slice as any)(0, (s as any) - (1 as any)) as any).trim as any)(),
          E: any = ((((n as any).slice as any)((s as any) + (1 as any)) as any).trim as any)();
        (i as any)[c] = E, ((this as any).insertLinks as any)(r, i);
      } catch (i: any) {
        ((at as any).error as any)("error while parsing actor link text", i);
      }
    }
    insertLinks(t: any, a: any): any {
      if (((t as any).links as any) == (null as any)) (t as any).links = a;else for (const r in a) ((t as any).links as any)[r] = (a as any)[r];
    }
    addProperties(t: any, a: any): any {
      const r: any = ((this as any).getActor as any)(t);
      try {
        const i: any = (Wt as any)((a as any).text, ($ as any)()),
          n: any = ((JSON as any).parse as any)(i);
        ((this as any).insertProperties as any)(r, n);
      } catch (i: any) {
        ((at as any).error as any)("error while parsing actor properties text", i);
      }
    }
    insertProperties(t: any, a: any): any {
      if (((t as any).properties as any) == (null as any)) (t as any).properties = a;else for (const r in a) ((t as any).properties as any)[r] = (a as any)[r];
    }
    boxEnd(): any {
      (((this as any).state as any).records as any).currentBox = void 0;
    }
    addDetails(t: any, a: any): any {
      const r: any = ((this as any).getActor as any)(t),
        i: any = ((document as any).getElementById as any)((a as any).text);
      try {
        const n: any = (i as any).innerHTML,
          s: any = ((JSON as any).parse as any)(n);
        (s as any).properties && ((this as any).insertProperties as any)(r, (s as any).properties), (s as any).links && ((this as any).insertLinks as any)(r, (s as any).links);
      } catch (n: any) {
        ((at as any).error as any)("error while parsing actor details text", n);
      }
    }
    getActorProperty(t: any, a: any): any {
      if ((t?.properties as any) !== (void 0 as any)) return ((t as any).properties as any)[a];
    }
    apply(t: any): any {
      if (((Array as any).isArray as any)(t)) ((t as any).forEach as any)((a: any): any => {
        ((this as any).apply as any)(a);
      });else switch ((t as any).type) {
        case "sequenceIndex":
          (((((this as any).state as any).records as any).messages as any).push as any)({
            id: ((((((this as any).state as any).records as any).messages as any).length as any).toString as any)(),
            from: void 0,
            to: void 0,
            message: {
              start: (t as any).sequenceIndex,
              step: (t as any).sequenceIndexStep,
              visible: (t as any).sequenceVisible
            },
            wrap: !1,
            type: (t as any).signalType
          });
          break;
        case "addParticipant":
          ((this as any).addActor as any)((t as any).actor, (t as any).actor, (t as any).description, (t as any).draw, (t as any).config);
          break;
        case "createParticipant":
          if ((((((this as any).state as any).records as any).actors as any).has as any)((t as any).actor)) throw new (Error as any)("It is not possible to have actors with the same id, even if one is destroyed before the next is created. Use 'AS' aliases to simulate the behavior");
          (((this as any).state as any).records as any).lastCreated = (t as any).actor, ((this as any).addActor as any)((t as any).actor, (t as any).actor, (t as any).description, (t as any).draw, (t as any).config), (((((this as any).state as any).records as any).createdActors as any).set as any)((t as any).actor, ((((this as any).state as any).records as any).messages as any).length);
          break;
        case "destroyParticipant":
          (((this as any).state as any).records as any).lastDestroyed = (t as any).actor, (((((this as any).state as any).records as any).destroyedActors as any).set as any)((t as any).actor, ((((this as any).state as any).records as any).messages as any).length);
          break;
        case "activeStart":
          ((this as any).addSignal as any)((t as any).actor, void 0, void 0, (t as any).signalType);
          break;
        case "centralConnection":
          ((this as any).addSignal as any)((t as any).actor, void 0, void 0, (t as any).signalType);
          break;
        case "centralConnectionReverse":
          ((this as any).addSignal as any)((t as any).actor, void 0, void 0, (t as any).signalType);
          break;
        case "activeEnd":
          ((this as any).addSignal as any)((t as any).actor, void 0, void 0, (t as any).signalType);
          break;
        case "addNote":
          ((this as any).addNote as any)((t as any).actor, (t as any).placement, (t as any).text);
          break;
        case "addLinks":
          ((this as any).addLinks as any)((t as any).actor, (t as any).text);
          break;
        case "addALink":
          ((this as any).addALink as any)((t as any).actor, (t as any).text);
          break;
        case "addProperties":
          ((this as any).addProperties as any)((t as any).actor, (t as any).text);
          break;
        case "addDetails":
          ((this as any).addDetails as any)((t as any).actor, (t as any).text);
          break;
        case "addMessage":
          if ((((this as any).state as any).records as any).lastCreated) {
            if (((t as any).to as any) !== ((((this as any).state as any).records as any).lastCreated as any)) throw new (Error as any)((("The created participant " as any) + (((((this as any).state as any).records as any).lastCreated as any).name as any) as any) + (" does not have an associated creating message after its declaration. Please check the sequence diagram." as any));
            (((this as any).state as any).records as any).lastCreated = void 0;
          } else if ((((this as any).state as any).records as any).lastDestroyed) {
            if (((t as any).to as any) !== ((((this as any).state as any).records as any).lastDestroyed as any) && ((t as any).from as any) !== ((((this as any).state as any).records as any).lastDestroyed as any)) throw new (Error as any)((("The destroyed participant " as any) + (((((this as any).state as any).records as any).lastDestroyed as any).name as any) as any) + (" does not have an associated destroying message after its declaration. Please check the sequence diagram." as any));
            (((this as any).state as any).records as any).lastDestroyed = void 0;
          }
          ((this as any).addSignal as any)((t as any).from, (t as any).to, (t as any).msg, (t as any).signalType, (t as any).activate, (t as any).centralConnection);
          break;
        case "boxStart":
          ((this as any).addBox as any)((t as any).boxData);
          break;
        case "boxEnd":
          ((this as any).boxEnd as any)();
          break;
        case "loopStart":
          ((this as any).addSignal as any)(void 0, void 0, (t as any).loopText, (t as any).signalType);
          break;
        case "loopEnd":
          ((this as any).addSignal as any)(void 0, void 0, void 0, (t as any).signalType);
          break;
        case "rectStart":
          ((this as any).addSignal as any)(void 0, void 0, (t as any).color, (t as any).signalType);
          break;
        case "rectEnd":
          ((this as any).addSignal as any)(void 0, void 0, void 0, (t as any).signalType);
          break;
        case "optStart":
          ((this as any).addSignal as any)(void 0, void 0, (t as any).optText, (t as any).signalType);
          break;
        case "optEnd":
          ((this as any).addSignal as any)(void 0, void 0, void 0, (t as any).signalType);
          break;
        case "altStart":
          ((this as any).addSignal as any)(void 0, void 0, (t as any).altText, (t as any).signalType);
          break;
        case "else":
          ((this as any).addSignal as any)(void 0, void 0, (t as any).altText, (t as any).signalType);
          break;
        case "altEnd":
          ((this as any).addSignal as any)(void 0, void 0, void 0, (t as any).signalType);
          break;
        case "setAccTitle":
          (De as any)((t as any).text);
          break;
        case "parStart":
          ((this as any).addSignal as any)(void 0, void 0, (t as any).parText, (t as any).signalType);
          break;
        case "and":
          ((this as any).addSignal as any)(void 0, void 0, (t as any).parText, (t as any).signalType);
          break;
        case "parEnd":
          ((this as any).addSignal as any)(void 0, void 0, void 0, (t as any).signalType);
          break;
        case "criticalStart":
          ((this as any).addSignal as any)(void 0, void 0, (t as any).criticalText, (t as any).signalType);
          break;
        case "option":
          ((this as any).addSignal as any)(void 0, void 0, (t as any).optionText, (t as any).signalType);
          break;
        case "criticalEnd":
          ((this as any).addSignal as any)(void 0, void 0, void 0, (t as any).signalType);
          break;
        case "breakStart":
          ((this as any).addSignal as any)(void 0, void 0, (t as any).breakText, (t as any).signalType);
          break;
        case "breakEnd":
          ((this as any).addSignal as any)(void 0, void 0, void 0, (t as any).signalType);
          break;
      }
    }
    getConfig(): any {
      return (($ as any)() as any).sequence;
    }
  }, (x as any)(mt, "SequenceDB"), mt),
  Rr: any = (x as any)((e: any): any => {
    const t: any = (e as any).dropShadow ?? "none",
      {
        look: a
      }: any = ($ as any)();
    return `.actor {
    stroke: ${(e as any).actorBorder};
    fill: ${(e as any).actorBkg};
    stroke-width: ${(e as any).strokeWidth ?? 1};
  }

  rect.actor.outer-path[data-look="neo"] {
      filter: ${t};
  }

  rect.note[data-look="neo"] {
      stroke:${(e as any).noteBorderColor};
      fill:${(e as any).noteBkgColor};
      filter: ${t};
  }

  text.actor > tspan {
    fill: ${(e as any).actorTextColor};
    stroke: none;
  }

  .actor-line {
    stroke: ${(e as any).actorLineColor};
  }

  .innerArc {
    stroke-width: 1.5;
    stroke-dasharray: none;
  }

  .messageLine0 {
    stroke-width: 1.5;
    stroke-dasharray: none;
    stroke: ${(e as any).signalColor};
  }

  .messageLine1 {
    stroke-width: 1.5;
    stroke-dasharray: 2, 2;
    stroke: ${(e as any).signalColor};
  }

  [id$="-arrowhead"] path {
    fill: ${(e as any).signalColor};
    stroke: ${(e as any).signalColor};
  }

  .sequenceNumber {
    fill: ${(e as any).sequenceNumberColor};
  }

  [id$="-sequencenumber"] {
    fill: ${(e as any).signalColor};
  }

  [id$="-crosshead"] path {
    fill: ${(e as any).signalColor};
    stroke: ${(e as any).signalColor};
  }

  .messageText {
    fill: ${(e as any).signalTextColor};
    stroke: none;
  }

  .labelBox {
    stroke: ${(e as any).labelBoxBorderColor};
    fill: ${(e as any).labelBoxBkgColor};
    filter: ${(a as any) === ("neo" as any) ? t : "none"};
  }

  .labelText, .labelText > tspan {
    fill: ${(e as any).labelTextColor};
    stroke: none;
  }

  .loopText, .loopText > tspan {
    fill: ${(e as any).loopTextColor};
    stroke: none;
  }

  .sectionTitle, .sectionTitle > tspan {
    fill: ${(e as any).loopTextColor};
    stroke: none;
  }

  .loopLine {
    stroke-width: 2px;
    stroke-dasharray: 2, 2;
    stroke: ${(e as any).labelBoxBorderColor};
    fill: ${(e as any).labelBoxBorderColor};
  }

  .note {
    //stroke: #decc93;
    stroke: ${(e as any).noteBorderColor};
    fill: ${(e as any).noteBkgColor};
  }

  .noteText, .noteText > tspan {
    fill: ${(e as any).noteTextColor};
    stroke: none;
    ${(e as any).noteFontWeight ? `font-weight: ${(e as any).noteFontWeight};` : ""}
  }

  .activation0 {
    fill: ${(e as any).activationBkgColor};
    stroke: ${(e as any).activationBorderColor};
  }

  .activation1 {
    fill: ${(e as any).activationBkgColor};
    stroke: ${(e as any).activationBorderColor};
  }

  .activation2 {
    fill: ${(e as any).activationBkgColor};
    stroke: ${(e as any).activationBorderColor};
  }

  .actorPopupMenu {
    position: absolute;
  }

  .actorPopupMenuPanel {
    position: absolute;
    fill: ${(e as any).actorBkg};
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
}
  .actor-man circle, line {
    fill: ${(e as any).actorBkg};
    stroke-width: 2px;
  }

  g rect.rect {
    filter: ${t};
    stroke: ${(e as any).nodeBorder};
  }
`;
  }, "getStyles"),
  Or: any = Rr,
  It: number = 36,
  ft: string = "actor-top",
  _t: string = "actor-bottom",
  Ht: string = "actor-box",
  yt: string = "actor-man",
  pt: any = new (Set as any)(["redux-color", "redux-dark-color"]),
  Pt: any = (x as any)(function (this: any, e: any, t: any): any {
    const a: any = (fr as any)(e, t);
    return (((Ft as any)() as any).look as any) === ("neo" as any) && ((a as any).attr as any)("data-look", "neo"), a;
  }, "drawRect"),
  Lr: any = (x as any)(function (this: any, e: any, t: any, a: any, r: any, i: any): any {
    if (((t as any).links as any) === (void 0 as any) || ((t as any).links as any) === (null as any) || ((((Object as any).keys as any)((t as any).links) as any).length as any) === (0 as any)) return {
      height: 0,
      width: 0
    };
    const n: any = (t as any).links,
      s: any = (t as any).actorCnt,
      c: any = (t as any).rectData;
    var E: any = "none";
    i && (E = "block !important");
    const h: any = ((e as any).append as any)("g");
    ((h as any).attr as any)("id", (("actor" as any) + (s as any) as any) + ("_popup" as any)), ((h as any).attr as any)("class", "actorPopupMenu"), ((h as any).attr as any)("display", E);
    var p: any = "";
    ((c as any).class as any) !== (void 0 as any) && (p = (" " as any) + ((c as any).class as any));
    let _: any = ((c as any).width as any) > (a as any) ? (c as any).width : a;
    const u: any = ((h as any).append as any)("rect");
    if (((u as any).attr as any)("class", ("actorPopupMenuPanel" as any) + (p as any)), ((u as any).attr as any)("x", (c as any).x), ((u as any).attr as any)("y", (c as any).height), ((u as any).attr as any)("fill", (c as any).fill), ((u as any).attr as any)("stroke", (c as any).stroke), ((u as any).attr as any)("width", _), ((u as any).attr as any)("height", (c as any).height), ((u as any).attr as any)("rx", (c as any).rx), ((u as any).attr as any)("ry", (c as any).ry), (n as any) != (null as any)) {
      var O: any = 20;
      for (let f in n) {
        var T: any = ((h as any).append as any)("a"),
          g: any = ((Me as any).sanitizeUrl as any)((n as any)[f]);
        ((T as any).attr as any)("xlink:href", g), ((T as any).attr as any)("target", "_blank"), ((Gr as any)(r) as any)(f, T, ((c as any).x as any) + (10 as any), ((c as any).height as any) + (O as any), _, 20, {
          class: "actor"
        }, r), O += 30;
      }
    }
    return ((u as any).attr as any)("height", O), {
      height: ((c as any).height as any) + (O as any),
      width: _
    };
  }, "drawPopup"),
  zt: any = (x as any)(function (this: any, e: any): any {
    return (("var pu = document.getElementById('" as any) + (e as any) as any) + ("'); if (pu != null) { pu.style.display = pu.style.display == 'block' ? 'none' : 'block'; }" as any);
  }, "popupMenuToggle"),
  qt: any = (x as any)(async function (this: any, e: any, t: any, a: any = null): Promise<any> {
    let r: any = ((e as any).append as any)("foreignObject");
    const i: any = await (Ve as any)((t as any).text, (Ft as any)()),
      s: any = ((((((((((((r as any).append as any)("xhtml:div") as any).attr as any)("style", "width: fit-content;") as any).attr as any)("xmlns", "http://www.w3.org/1999/xhtml") as any).html as any)(i) as any).node as any)() as any).getBoundingClientRect as any)();
    if (((((r as any).attr as any)("height", ((Math as any).round as any)((s as any).height)) as any).attr as any)("width", ((Math as any).round as any)((s as any).width)), ((t as any).class as any) === ("noteText" as any)) {
      const c: any = (((e as any).node as any)() as any).firstChild;
      ((c as any).setAttribute as any)("height", ((s as any).height as any) + ((2 as any) * ((t as any).textMargin as any) as any));
      const E: any = ((c as any).getBBox as any)();
      ((((r as any).attr as any)("x", ((Math as any).round as any)((((E as any).x as any) + (((E as any).width as any) / (2 as any) as any) as any) - (((s as any).width as any) / (2 as any) as any))) as any).attr as any)("y", ((Math as any).round as any)((((E as any).y as any) + (((E as any).height as any) / (2 as any) as any) as any) - (((s as any).height as any) / (2 as any) as any)));
    } else if (a) {
      let {
        startx: c,
        stopx: E,
        starty: h
      }: any = a;
      if ((c as any) > (E as any)) {
        const p: any = c;
        c = E, E = p;
      }
      ((r as any).attr as any)("x", ((Math as any).round as any)(((c as any) + ((((Math as any).abs as any)((c as any) - (E as any)) as any) / (2 as any) as any) as any) - (((s as any).width as any) / (2 as any) as any))), ((t as any).class as any) === ("loopText" as any) ? ((r as any).attr as any)("y", ((Math as any).round as any)(h)) : ((r as any).attr as any)("y", ((Math as any).round as any)((h as any) - ((s as any).height as any)));
    }
    return [r];
  }, "drawKatex"),
  At: any = (x as any)(function (this: any, e: any, t: any): any {
    let a: any = 0,
      r: any = 0;
    const i: any = (((t as any).text as any).split as any)((N as any).lineBreakRegex),
      [n, s]: any = (Be as any)((t as any).fontSize);
    let c: any = [],
      E: any = 0,
      h: any = (x as any)((): any => (t as any).y, "yfunc");
    if (((t as any).valign as any) !== (void 0 as any) && ((t as any).textMargin as any) !== (void 0 as any) && ((t as any).textMargin as any) > (0 as any)) switch ((t as any).valign) {
      case "top":
      case "start":
        h = (x as any)((): any => ((Math as any).round as any)(((t as any).y as any) + ((t as any).textMargin as any)), "yfunc");
        break;
      case "middle":
      case "center":
        h = (x as any)((): any => ((Math as any).round as any)(((t as any).y as any) + ((((a as any) + (r as any) as any) + ((t as any).textMargin as any) as any) / (2 as any) as any)), "yfunc");
        break;
      case "bottom":
      case "end":
        h = (x as any)((): any => ((Math as any).round as any)((((t as any).y as any) + (((a as any) + (r as any) as any) + ((2 as any) * ((t as any).textMargin as any) as any) as any) as any) - ((t as any).textMargin as any)), "yfunc");
        break;
    }
    if (((t as any).anchor as any) !== (void 0 as any) && ((t as any).textMargin as any) !== (void 0 as any) && ((t as any).width as any) !== (void 0 as any)) switch ((t as any).anchor) {
      case "left":
      case "start":
        (t as any).x = ((Math as any).round as any)(((t as any).x as any) + ((t as any).textMargin as any)), (t as any).anchor = "start", (t as any).dominantBaseline = "middle", (t as any).alignmentBaseline = "middle";
        break;
      case "middle":
      case "center":
        (t as any).x = ((Math as any).round as any)(((t as any).x as any) + (((t as any).width as any) / (2 as any) as any)), (t as any).anchor = "middle", (t as any).dominantBaseline = "middle", (t as any).alignmentBaseline = "middle";
        break;
      case "right":
      case "end":
        (t as any).x = ((Math as any).round as any)((((t as any).x as any) + ((t as any).width as any) as any) - ((t as any).textMargin as any)), (t as any).anchor = "end", (t as any).dominantBaseline = "middle", (t as any).alignmentBaseline = "middle";
        break;
    }
    for (let [p, _] of ((i as any).entries as any)()) {
      ((t as any).textMargin as any) !== (void 0 as any) && ((t as any).textMargin as any) === (0 as any) && (n as any) !== (void 0 as any) && (E = (p as any) * (n as any));
      const u: any = ((e as any).append as any)("text");
      ((u as any).attr as any)("x", (t as any).x), ((u as any).attr as any)("y", (h as any)()), ((t as any).anchor as any) !== (void 0 as any) && ((((((u as any).attr as any)("text-anchor", (t as any).anchor) as any).attr as any)("dominant-baseline", (t as any).dominantBaseline) as any).attr as any)("alignment-baseline", (t as any).alignmentBaseline), ((t as any).fontFamily as any) !== (void 0 as any) && ((u as any).style as any)("font-family", (t as any).fontFamily), (s as any) !== (void 0 as any) && ((u as any).style as any)("font-size", s), ((t as any).fontWeight as any) !== (void 0 as any) && ((u as any).style as any)("font-weight", (t as any).fontWeight), ((t as any).fill as any) !== (void 0 as any) && ((u as any).attr as any)("fill", (t as any).fill), ((t as any).class as any) !== (void 0 as any) && ((u as any).attr as any)("class", (t as any).class), ((t as any).dy as any) !== (void 0 as any) ? ((u as any).attr as any)("dy", (t as any).dy) : (E as any) !== (0 as any) && ((u as any).attr as any)("dy", E);
      const O: any = _ || pr;
      if ((t as any).tspan) {
        const T: any = ((u as any).append as any)("tspan");
        ((T as any).attr as any)("x", (t as any).x), ((t as any).fill as any) !== (void 0 as any) && ((T as any).attr as any)("fill", (t as any).fill), ((T as any).text as any)(O);
      } else ((u as any).text as any)(O);
      ((t as any).valign as any) !== (void 0 as any) && ((t as any).textMargin as any) !== (void 0 as any) && ((t as any).textMargin as any) > (0 as any) && (r += (((((((u as any)._groups || u) as any)[0] as any)[0] as any).getBBox as any)() as any).height, a = r), ((c as any).push as any)(u);
    }
    return c;
  }, "drawText"),
  Ye: any = (x as any)(function (this: any, e: any, t: any): any {
    function a(this: any, i: any, n: any, s: any, c: any, E: any): any {
      return ((((((((((((((((((i as any) + ("," as any) as any) + (n as any) as any) + (" " as any) as any) + ((i as any) + (s as any) as any) as any) + ("," as any) as any) + (n as any) as any) + (" " as any) as any) + ((i as any) + (s as any) as any) as any) + ("," as any) as any) + (((n as any) + (c as any) as any) - (E as any) as any) as any) + (" " as any) as any) + (((i as any) + (s as any) as any) - ((E as any) * (1.2 as any) as any) as any) as any) + ("," as any) as any) + ((n as any) + (c as any) as any) as any) + (" " as any) as any) + (i as any) as any) + ("," as any) as any) + ((n as any) + (c as any) as any);
    }
    (x as any)(a, "genPoints");
    const r: any = ((e as any).append as any)("polygon");
    return ((r as any).attr as any)("points", (a as any)((t as any).x, (t as any).y, (t as any).width, (t as any).height, 7)), ((r as any).attr as any)("class", "labelBox"), (t as any).y = ((t as any).y as any) + (((t as any).height as any) / (2 as any) as any), (At as any)(e, t), r;
  }, "drawLabel"),
  B: any = -1,
  We: any = (x as any)((e: any, t: any, a: any, r: any): any => {
    (e as any).select && ((a as any).forEach as any)((i: any): any => {
      const n: any = ((t as any).get as any)(i),
        s: any = ((e as any).select as any)(("#actor" as any) + ((n as any).actorCnt as any));
      !(r as any).mirrorActors && (n as any).stopy ? ((s as any).attr as any)("y2", ((n as any).stopy as any) + (((n as any).height as any) / (2 as any) as any)) : (r as any).mirrorActors && ((s as any).attr as any)("y2", (n as any).stopy);
    });
  }, "fixLifeLineHeights"),
  br: any = (x as any)(function (this: any, e: any, t: any, a: any, r: any, i: any): any {
    const n: any = r ? (t as any).stopy : (t as any).starty,
      s: any = ((t as any).x as any) + (((t as any).width as any) / (2 as any) as any),
      c: any = (n as any) + ((t as any).height as any),
      {
        look: E,
        theme: h,
        themeVariables: p
      }: any = a,
      {
        bkgColorArray: _,
        borderColorArray: u
      }: any = p,
      O: any = ((((e as any).append as any)("g") as any).lower as any)();
    var T: any = O;
    r || (B++, (((Object as any).keys as any)((t as any).links || {}) as any).length && !(a as any).forceMenus && ((((T as any).attr as any)("onclick", (zt as any)(`actor${B}_popup`)) as any).attr as any)("cursor", "pointer"), ((((((((((((((((((((((((T as any).append as any)("line") as any).attr as any)("id", ("actor" as any) + (B as any)) as any).attr as any)("x1", s) as any).attr as any)("y1", c) as any).attr as any)("x2", s) as any).attr as any)("y2", 2e3) as any).attr as any)("class", "actor-line 200") as any).attr as any)("stroke-width", "0.5px") as any).attr as any)("stroke", "#999") as any).attr as any)("name", (t as any).name) as any).attr as any)("data-et", "life-line") as any).attr as any)("data-id", (t as any).name), T = ((O as any).append as any)("g"), (t as any).actorCnt = B, ((t as any).links as any) != (null as any) && ((T as any).attr as any)("id", ("root-" as any) + (B as any)), (E as any) === ("neo" as any) && ((T as any).attr as any)("data-look", "neo"));
    const g: any = (dt as any)();
    var f: any = "actor";
    (t as any).properties?.class ? f = ((t as any).properties as any).class : (g as any).fill = "#eaeaea", r ? f += ` ${_t}` : f += ` ${ft}`, (g as any).x = (t as any).x, (g as any).y = n, (g as any).width = (t as any).width, (g as any).height = (t as any).height, (g as any).class = f, (g as any).rx = 3, (g as any).ry = 3, (g as any).name = (t as any).name, (E as any) === ("neo" as any) && ((g as any).rx = 6, (g as any).ry = 6);
    const I: any = (Pt as any)(T, g),
      L: any = ((i as any).get as any)((t as any).name) ?? 0;
    if (((pt as any).has as any)(h) && (((I as any).style as any)("stroke", (u as any)[(L as any) % ((u as any).length as any)]), ((I as any).style as any)("fill", (_ as any)[(L as any) % ((u as any).length as any)])), (E as any) === ("neo" as any) && ((I as any).attr as any)("filter", "url(#drop-shadow)"), (t as any).rectData = g, (t as any).properties?.icon) {
      const w: any = ((((t as any).properties as any).icon as any).trim as any)();
      (((w as any).charAt as any)(0) as any) === ("@" as any) ? (ie as any)(T, (((g as any).x as any) + ((g as any).width as any) as any) - (20 as any), ((g as any).y as any) + (10 as any), ((w as any).substr as any)(1)) : (ne as any)(T, (((g as any).x as any) + ((g as any).width as any) as any) - (20 as any), ((g as any).y as any) + (10 as any), w);
    }
    r || (((T as any).attr as any)("data-et", "participant"), ((T as any).attr as any)("data-type", "participant"), ((T as any).attr as any)("data-id", (t as any).name)), ((Et as any)(a, (Q as any)((t as any).description)) as any)((t as any).description, T, (g as any).x, (g as any).y, (g as any).width, (g as any).height, {
      class: `actor ${Ht}`
    }, a);
    let b: any = (t as any).height;
    if ((I as any).node) {
      const w: any = ((((I as any).node as any)() as any).getBBox as any)();
      (t as any).height = (w as any).height, b = (w as any).height;
    }
    return b;
  }, "drawActorTypeParticipant"),
  mr: any = (x as any)(function (this: any, e: any, t: any, a: any, r: any, i: any): any {
    const n: any = r ? (t as any).stopy : (t as any).starty,
      s: any = ((t as any).x as any) + (((t as any).width as any) / (2 as any) as any),
      c: any = (n as any) + ((t as any).height as any),
      {
        look: E,
        theme: h,
        themeVariables: p
      }: any = a,
      {
        bkgColorArray: _,
        borderColorArray: u
      }: any = p,
      O: any = ((((e as any).append as any)("g") as any).lower as any)();
    var T: any = O;
    r || (B++, (((Object as any).keys as any)((t as any).links || {}) as any).length && !(a as any).forceMenus && ((((T as any).attr as any)("onclick", (zt as any)(`actor${B}_popup`)) as any).attr as any)("cursor", "pointer"), ((((((((((((((((((((((((T as any).append as any)("line") as any).attr as any)("id", ("actor" as any) + (B as any)) as any).attr as any)("x1", s) as any).attr as any)("y1", c) as any).attr as any)("x2", s) as any).attr as any)("y2", 2e3) as any).attr as any)("class", "actor-line 200") as any).attr as any)("stroke-width", "0.5px") as any).attr as any)("stroke", "#999") as any).attr as any)("name", (t as any).name) as any).attr as any)("data-et", "life-line") as any).attr as any)("data-id", (t as any).name), T = ((O as any).append as any)("g"), (t as any).actorCnt = B, ((t as any).links as any) != (null as any) && ((T as any).attr as any)("id", ("root-" as any) + (B as any)), (E as any) === ("neo" as any) && ((T as any).attr as any)("data-look", "neo"));
    const g: any = (dt as any)();
    var f: any = "actor";
    (t as any).properties?.class ? f = ((t as any).properties as any).class : (g as any).fill = "#eaeaea", r ? f += ` ${_t}` : f += ` ${ft}`, (g as any).x = (t as any).x, (g as any).y = n, (g as any).width = (t as any).width, (g as any).height = (t as any).height, (g as any).class = f, (g as any).name = (t as any).name;
    const I: number = 6,
      L: any = {
        ...g,
        x: ((g as any).x as any) + (-I as any),
        y: ((g as any).y as any) + (+I as any),
        class: "actor"
      },
      b: any = (Pt as any)(T, g),
      w: any = (Pt as any)(T, L);
    (t as any).rectData = g, (E as any) === ("neo" as any) && ((T as any).attr as any)("filter", "url(#drop-shadow)");
    const A: any = ((i as any).get as any)((t as any).name) ?? 0;
    if (((pt as any).has as any)(h) && (((b as any).style as any)("stroke", (u as any)[(A as any) % ((u as any).length as any)]), ((b as any).style as any)("fill", (_ as any)[(A as any) % ((u as any).length as any)]), ((w as any).style as any)("stroke", (u as any)[(A as any) % ((u as any).length as any)]), ((w as any).style as any)("fill", (_ as any)[(A as any) % ((u as any).length as any)])), (t as any).properties?.icon) {
      const M: any = ((((t as any).properties as any).icon as any).trim as any)();
      (((M as any).charAt as any)(0) as any) === ("@" as any) ? (ie as any)(T, (((g as any).x as any) + ((g as any).width as any) as any) - (20 as any), ((g as any).y as any) + (10 as any), ((M as any).substr as any)(1)) : (ne as any)(T, (((g as any).x as any) + ((g as any).width as any) as any) - (20 as any), ((g as any).y as any) + (10 as any), M);
    }
    ((Et as any)(a, (Q as any)((t as any).description)) as any)((t as any).description, T, ((g as any).x as any) - (I as any), ((g as any).y as any) + (I as any), (g as any).width, (g as any).height, {
      class: `actor ${Ht}`
    }, a);
    let D: any = (t as any).height;
    if ((b as any).node) {
      const M: any = ((((b as any).node as any)() as any).getBBox as any)();
      (t as any).height = (M as any).height, D = (M as any).height;
    }
    return r || (((T as any).attr as any)("data-et", "participant"), ((T as any).attr as any)("data-type", "collections"), ((T as any).attr as any)("data-id", (t as any).name)), D;
  }, "drawActorTypeCollections"),
  Ar: any = (x as any)(function (this: any, e: any, t: any, a: any, r: any, i: any): any {
    const n: any = r ? (t as any).stopy : (t as any).starty,
      s: any = ((t as any).x as any) + (((t as any).width as any) / (2 as any) as any),
      c: any = (n as any) + ((t as any).height as any),
      {
        look: E,
        theme: h,
        themeVariables: p
      }: any = a,
      {
        bkgColorArray: _,
        borderColorArray: u
      }: any = p,
      O: any = ((((e as any).append as any)("g") as any).lower as any)();
    let T: any = O;
    r || (B++, (((Object as any).keys as any)((t as any).links || {}) as any).length && !(a as any).forceMenus && ((((T as any).attr as any)("onclick", (zt as any)(`actor${B}_popup`)) as any).attr as any)("cursor", "pointer"), ((((((((((((((((((((((((T as any).append as any)("line") as any).attr as any)("id", ("actor" as any) + (B as any)) as any).attr as any)("x1", s) as any).attr as any)("y1", c) as any).attr as any)("x2", s) as any).attr as any)("y2", 2e3) as any).attr as any)("class", "actor-line 200") as any).attr as any)("stroke-width", "0.5px") as any).attr as any)("stroke", "#999") as any).attr as any)("name", (t as any).name) as any).attr as any)("data-et", "life-line") as any).attr as any)("data-id", (t as any).name), T = ((O as any).append as any)("g"), (t as any).actorCnt = B, ((t as any).links as any) != (null as any) && ((T as any).attr as any)("id", ("root-" as any) + (B as any)), (E as any) === ("neo" as any) && ((T as any).attr as any)("data-look", "neo"));
    const g: any = (dt as any)();
    let f: any = "actor";
    (t as any).properties?.class ? f = ((t as any).properties as any).class : (g as any).fill = "#eaeaea", r ? f += ` ${_t}` : f += ` ${ft}`, ((T as any).attr as any)("class", f), (g as any).x = (t as any).x, (g as any).y = n, (g as any).width = (t as any).width, (g as any).height = (t as any).height, (g as any).name = (t as any).name;
    const I: any = ((g as any).height as any) / (2 as any),
      L: any = (I as any) / ((2.5 as any) + (((g as any).height as any) / (50 as any) as any) as any),
      b: any = ((T as any).append as any)("g"),
      w: any = ((T as any).append as any)("g"),
      A: any = `M ${(g as any).x},${((g as any).y as any) + (I as any)}
    a ${L},${I} 0 0 0 0,${(g as any).height}
    h ${((g as any).width as any) - ((2 as any) * (L as any) as any)}
    a ${L},${I} 0 0 0 0,-${(g as any).height}
    Z
  `;
    ((((b as any).append as any)("path") as any).attr as any)("d", A), ((((w as any).append as any)("path") as any).attr as any)("d", `M ${(g as any).x},${((g as any).y as any) + (I as any)}
      a ${L},${I} 0 0 0 0,${(g as any).height}`), ((b as any).attr as any)("transform", `translate(${L}, ${-(((g as any).height as any) / (2 as any))})`), ((w as any).attr as any)("transform", `translate(${((g as any).width as any) - (L as any)}, ${(-(g as any).height as any) / (2 as any)})`), (t as any).rectData = g, (E as any) === ("neo" as any) && ((b as any).attr as any)("filter", "url(#drop-shadow)");
    const D: any = ((i as any).get as any)((t as any).name) ?? 0;
    if (((pt as any).has as any)(h) && (((b as any).style as any)("stroke", (u as any)[(D as any) % ((u as any).length as any)]), ((b as any).style as any)("fill", (_ as any)[(D as any) % ((u as any).length as any)]), ((w as any).style as any)("stroke", (u as any)[(D as any) % ((u as any).length as any)]), ((w as any).style as any)("fill", (_ as any)[(D as any) % ((u as any).length as any)])), (t as any).properties?.icon) {
      const W: any = ((((t as any).properties as any).icon as any).trim as any)(),
        U: any = (((g as any).x as any) + ((g as any).width as any) as any) - (20 as any),
        G: any = ((g as any).y as any) + (10 as any);
      (((W as any).charAt as any)(0) as any) === ("@" as any) ? (ie as any)(T, U, G, ((W as any).substr as any)(1)) : (ne as any)(T, U, G, W);
    }
    ((Et as any)(a, (Q as any)((t as any).description)) as any)((t as any).description, T, (g as any).x, (g as any).y, (g as any).width, (g as any).height, {
      class: `actor ${Ht}`
    }, a);
    let M: any = (t as any).height;
    const V: any = ((b as any).select as any)("path:last-child");
    if (((V as any).node as any)()) {
      const W: any = ((((V as any).node as any)() as any).getBBox as any)();
      (t as any).height = (W as any).height, M = (W as any).height;
    }
    return r || (((T as any).attr as any)("data-et", "participant"), ((T as any).attr as any)("data-type", "queue"), ((T as any).attr as any)("data-id", (t as any).name)), M;
  }, "drawActorTypeQueue"),
  Sr: any = (x as any)(function (this: any, e: any, t: any, a: any, r: any, i: any, n: any): any {
    const s: any = r ? (t as any).stopy : (t as any).starty,
      c: any = ((t as any).x as any) + (((t as any).width as any) / (2 as any) as any),
      E: any = (s as any) + (75 as any),
      {
        look: h,
        theme: p,
        themeVariables: _
      }: any = a,
      {
        bkgColorArray: u,
        borderColorArray: O,
        actorBorder: T,
        actorBkg: g
      }: any = _,
      f: any = ((((e as any).append as any)("g") as any).lower as any)();
    r || (B++, ((((((((((((((((((((((((f as any).append as any)("line") as any).attr as any)("id", ("actor" as any) + (B as any)) as any).attr as any)("x1", c) as any).attr as any)("y1", E) as any).attr as any)("x2", c) as any).attr as any)("y2", 2e3) as any).attr as any)("class", "actor-line 200") as any).attr as any)("stroke-width", "0.5px") as any).attr as any)("stroke", "#999") as any).attr as any)("name", (t as any).name) as any).attr as any)("data-et", "life-line") as any).attr as any)("data-id", (t as any).name), (t as any).actorCnt = B);
    const I: any = ((e as any).append as any)("g");
    let L: any = yt;
    r ? L += ` ${_t}` : L += ` ${ft}`, ((I as any).attr as any)("class", L), ((I as any).attr as any)("name", (t as any).name);
    const b: any = (dt as any)();
    (b as any).x = (t as any).x, (b as any).y = s, (b as any).fill = "#eaeaea", (b as any).width = (t as any).width, (b as any).height = (t as any).height, (b as any).class = "actor";
    const w: any = ((t as any).x as any) + (((t as any).width as any) / (2 as any) as any),
      A: any = (s as any) + (32 as any),
      D: number = 22;
    ((((((((((((((((((((((I as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (i as any) + ("-filled-head-control" as any)) as any).attr as any)("refX", 11) as any).attr as any)("refY", 5.8) as any).attr as any)("markerWidth", 20) as any).attr as any)("markerHeight", 28) as any).attr as any)("orient", "172.5") as any).attr as any)("stroke-width", 1.2) as any).append as any)("path") as any).attr as any)("d", "M 14.4 5.6 L 7.2 10.4 L 8.8 5.6 L 7.2 0.8 Z"), ((((((((((I as any).append as any)("circle") as any).attr as any)("cx", w) as any).attr as any)("cy", A) as any).attr as any)("r", D) as any).attr as any)("filter", `${(h as any) === ("neo" as any) ? "url(#drop-shadow)" : ""}`), ((((((I as any).append as any)("line") as any).attr as any)("marker-end", (("url(#" as any) + (i as any) as any) + ("-filled-head-control)" as any)) as any).attr as any)("transform", `translate(${w}, ${(A as any) - (D as any)})`);
    const M: any = ((n as any).get as any)((t as any).name) ?? 0;
    ((pt as any).has as any)(p) ? (((I as any).style as any)("stroke", (O as any)[(M as any) % ((O as any).length as any)]), ((I as any).style as any)("fill", (u as any)[(M as any) % ((O as any).length as any)])) : (((I as any).style as any)("stroke", T), ((I as any).style as any)("fill", g));
    const V: any = ((((I as any).node as any)() as any).getBBox as any)();
    return (t as any).height = ((V as any).height as any) + ((2 as any) * ((a?.sequence?.labelBoxHeight ?? 0) as any) as any), ((Et as any)(a, (Q as any)((t as any).description)) as any)((t as any).description, I, (b as any).x, (((b as any).y as any) + (D as any) as any) + ((r ? 5 : 12) as any), (b as any).width, (b as any).height, {
      class: `actor ${yt}`
    }, a), r || (((I as any).attr as any)("data-et", "participant"), ((I as any).attr as any)("data-type", "control"), ((I as any).attr as any)("data-id", (t as any).name)), (t as any).height;
  }, "drawActorTypeControl"),
  wr: any = (x as any)(function (this: any, e: any, t: any, a: any, r: any, i: any): any {
    const n: any = r ? (t as any).stopy : (t as any).starty,
      s: any = ((t as any).x as any) + (((t as any).width as any) / (2 as any) as any),
      c: any = (n as any) + (75 as any),
      {
        look: E,
        theme: h,
        themeVariables: p
      }: any = a,
      {
        bkgColorArray: _,
        borderColorArray: u
      }: any = p,
      O: any = ((((e as any).append as any)("g") as any).lower as any)(),
      T: any = ((e as any).append as any)("g");
    let g: any = "actor";
    r ? g += ` ${_t}` : g += ` ${ft}`, ((T as any).attr as any)("class", g), ((T as any).attr as any)("name", (t as any).name);
    const f: any = (dt as any)();
    (f as any).x = (t as any).x, (f as any).y = n, (f as any).fill = "#eaeaea", (f as any).width = (t as any).width, (f as any).height = (t as any).height, (f as any).class = "actor";
    const I: any = ((t as any).x as any) + (((t as any).width as any) / (2 as any) as any),
      L: any = (n as any) + ((r ? 10 : 25) as any),
      b: number = 22;
    ((((((((((((T as any).append as any)("circle") as any).attr as any)("cx", I) as any).attr as any)("cy", L) as any).attr as any)("r", b) as any).attr as any)("width", (t as any).width) as any).attr as any)("height", (t as any).height), ((((((((((((T as any).append as any)("line") as any).attr as any)("x1", (I as any) - (b as any)) as any).attr as any)("x2", (I as any) + (b as any)) as any).attr as any)("y1", (L as any) + (b as any)) as any).attr as any)("y2", (L as any) + (b as any)) as any).attr as any)("stroke-width", 2), (E as any) === ("neo" as any) && ((T as any).attr as any)("filter", "url(#drop-shadow)");
    const w: any = ((i as any).get as any)((t as any).name) ?? 0;
    ((pt as any).has as any)(h) && (((T as any).style as any)("stroke", (u as any)[(w as any) % ((u as any).length as any)]), ((T as any).style as any)("fill", (_ as any)[(w as any) % ((u as any).length as any)]));
    const A: any = ((((T as any).node as any)() as any).getBBox as any)();
    return (t as any).height = ((A as any).height as any) + ((a?.sequence?.labelBoxHeight ?? 0) as any), r || (B++, ((((((((((((((((((((((((O as any).append as any)("line") as any).attr as any)("id", ("actor" as any) + (B as any)) as any).attr as any)("x1", s) as any).attr as any)("y1", c) as any).attr as any)("x2", s) as any).attr as any)("y2", 2e3) as any).attr as any)("class", "actor-line 200") as any).attr as any)("stroke-width", "0.5px") as any).attr as any)("stroke", "#999") as any).attr as any)("name", (t as any).name) as any).attr as any)("data-et", "life-line") as any).attr as any)("data-id", (t as any).name), (t as any).actorCnt = B), ((Et as any)(a, (Q as any)((t as any).description)) as any)((t as any).description, T, (f as any).x, ((f as any).y as any) + ((r ? 15 : 30) as any), (f as any).width, (f as any).height, {
      class: `actor ${yt}`
    }, a), r ? ((T as any).attr as any)("transform", `translate(0, ${b})`) : (((T as any).attr as any)("transform", `translate(0, ${((b as any) / (2 as any) as any) - (5 as any)})`), ((T as any).attr as any)("data-et", "participant"), ((T as any).attr as any)("data-type", "entity"), ((T as any).attr as any)("data-id", (t as any).name)), (t as any).height;
  }, "drawActorTypeEntity"),
  Nr: any = (x as any)(function (this: any, e: any, t: any, a: any, r: any, i: any): any {
    const n: any = r ? (t as any).stopy : (t as any).starty,
      s: any = ((t as any).x as any) + (((t as any).width as any) / (2 as any) as any),
      c: any = ((n as any) + ((t as any).height as any) as any) + ((2 as any) * ((a as any).boxTextMargin as any) as any),
      {
        theme: E,
        themeVariables: h,
        look: p
      }: any = a,
      {
        bkgColorArray: _,
        borderColorArray: u,
        actorBorder: O
      }: any = h,
      T: any = ((((e as any).append as any)("g") as any).lower as any)();
    let g: any = T;
    r || (B++, (((Object as any).keys as any)((t as any).links || {}) as any).length && !(a as any).forceMenus && ((((g as any).attr as any)("onclick", (zt as any)(`actor${B}_popup`)) as any).attr as any)("cursor", "pointer"), ((((((((((((((((((((((((g as any).append as any)("line") as any).attr as any)("id", ("actor" as any) + (B as any)) as any).attr as any)("x1", s) as any).attr as any)("y1", c) as any).attr as any)("x2", s) as any).attr as any)("y2", 2e3) as any).attr as any)("class", "actor-line 200") as any).attr as any)("stroke-width", "0.5px") as any).attr as any)("stroke", "#999") as any).attr as any)("name", (t as any).name) as any).attr as any)("data-et", "life-line") as any).attr as any)("data-id", (t as any).name), g = ((T as any).append as any)("g"), (t as any).actorCnt = B, ((t as any).links as any) != (null as any) && ((g as any).attr as any)("id", ("root-" as any) + (B as any)), (p as any) === ("neo" as any) && ((g as any).attr as any)("data-look", "neo"));
    const f: any = (dt as any)();
    let I: any = "actor";
    (t as any).properties?.class ? I = ((t as any).properties as any).class : (f as any).fill = "#eaeaea", r ? I += ` ${_t}` : I += ` ${ft}`, (f as any).x = (t as any).x, (f as any).y = n, (f as any).width = (t as any).width, (f as any).height = (t as any).height, (f as any).class = I, (f as any).name = (t as any).name, (f as any).x = (t as any).x, (f as any).y = n;
    const L: any = ((f as any).width as any) / (3 as any),
      b: any = ((f as any).width as any) / (3 as any),
      w: any = (L as any) / (2 as any),
      A: any = (w as any) / ((2.5 as any) + ((L as any) / (50 as any) as any) as any),
      D: any = ((g as any).append as any)("g");
    ((D as any).attr as any)("class", I);
    const M: any = `
  M ${(f as any).x},${((f as any).y as any) + (A as any)}
  a ${w},${A} 0 0 0 ${L},0
  a ${w},${A} 0 0 0 -${L},0
  l 0,${(b as any) - ((2 as any) * (A as any) as any)}
  a ${w},${A} 0 0 0 ${L},0
  l 0,-${(b as any) - ((2 as any) * (A as any) as any)}
`;
    ((((D as any).append as any)("path") as any).attr as any)("d", M), (p as any) === ("neo" as any) && ((D as any).attr as any)("filter", "url(#drop-shadow)");
    const V: any = ((i as any).get as any)((t as any).name) ?? 0;
    ((pt as any).has as any)(E) ? (((D as any).style as any)("stroke", (u as any)[(V as any) % ((u as any).length as any)]), ((D as any).style as any)("fill", (_ as any)[(V as any) % ((u as any).length as any)])) : ((D as any).style as any)("stroke", O), ((D as any).attr as any)("transform", `translate(${L}, ${A})`), (t as any).rectData = f, ((Et as any)(a, (Q as any)((t as any).description)) as any)((t as any).description, g, (f as any).x, ((f as any).y as any) + (35 as any), (f as any).width, (f as any).height, {
      class: `actor ${Ht}`
    }, a);
    const W: any = ((D as any).select as any)("path:last-child");
    if (((W as any).node as any)()) {
      const U: any = ((((W as any).node as any)() as any).getBBox as any)();
      (t as any).height = ((U as any).height as any) + ((((a as any).sequence as any).labelBoxHeight ?? 0) as any);
    }
    return r || (((g as any).attr as any)("data-et", "participant"), ((g as any).attr as any)("data-type", "database"), ((g as any).attr as any)("data-id", (t as any).name)), (t as any).height;
  }, "drawActorTypeDatabase"),
  Pr: any = (x as any)(function (this: any, e: any, t: any, a: any, r: any, i: any): any {
    const n: any = r ? (t as any).stopy : (t as any).starty,
      s: any = ((t as any).x as any) + (((t as any).width as any) / (2 as any) as any),
      c: any = (n as any) + (80 as any),
      E: number = 22,
      h: any = ((((e as any).append as any)("g") as any).lower as any)(),
      {
        look: p,
        theme: _,
        themeVariables: u
      }: any = a,
      {
        bkgColorArray: O,
        borderColorArray: T,
        actorBorder: g
      }: any = u;
    r || (B++, ((((((((((((((((((((((((h as any).append as any)("line") as any).attr as any)("id", ("actor" as any) + (B as any)) as any).attr as any)("x1", s) as any).attr as any)("y1", c) as any).attr as any)("x2", s) as any).attr as any)("y2", 2e3) as any).attr as any)("class", "actor-line 200") as any).attr as any)("stroke-width", "0.5px") as any).attr as any)("stroke", "#999") as any).attr as any)("name", (t as any).name) as any).attr as any)("data-et", "life-line") as any).attr as any)("data-id", (t as any).name), (t as any).actorCnt = B);
    const f: any = ((e as any).append as any)("g");
    let I: any = yt;
    r ? I += ` ${_t}` : I += ` ${ft}`, ((f as any).attr as any)("class", I), ((f as any).attr as any)("name", (t as any).name);
    const L: any = (dt as any)();
    (L as any).x = (t as any).x, (L as any).y = n, (L as any).fill = "#eaeaea", (L as any).width = (t as any).width, (L as any).height = (t as any).height, (L as any).class = "actor", ((((((((((((f as any).append as any)("line") as any).attr as any)("id", ("actor-man-torso" as any) + (B as any)) as any).attr as any)("x1", (((t as any).x as any) + (((t as any).width as any) / (2 as any) as any) as any) - ((E as any) * (2.5 as any) as any)) as any).attr as any)("y1", (n as any) + (12 as any)) as any).attr as any)("x2", (((t as any).x as any) + (((t as any).width as any) / (2 as any) as any) as any) - (15 as any)) as any).attr as any)("y2", (n as any) + (12 as any)), ((((((((((((f as any).append as any)("line") as any).attr as any)("id", ("actor-man-arms" as any) + (B as any)) as any).attr as any)("x1", (((t as any).x as any) + (((t as any).width as any) / (2 as any) as any) as any) - ((E as any) * (2.5 as any) as any)) as any).attr as any)("y1", (n as any) + (2 as any)) as any).attr as any)("x2", (((t as any).x as any) + (((t as any).width as any) / (2 as any) as any) as any) - ((E as any) * (2.5 as any) as any)) as any).attr as any)("y2", (n as any) + (22 as any)), ((((((((f as any).append as any)("circle") as any).attr as any)("cx", ((t as any).x as any) + (((t as any).width as any) / (2 as any) as any)) as any).attr as any)("cy", (n as any) + (12 as any)) as any).attr as any)("r", E), (p as any) === ("neo" as any) && ((f as any).attr as any)("filter", "url(#drop-shadow)");
    const b: any = ((i as any).get as any)((t as any).name) ?? 0;
    ((pt as any).has as any)(_) ? (((f as any).style as any)("stroke", (T as any)[(b as any) % ((T as any).length as any)]), ((f as any).style as any)("fill", (O as any)[(b as any) % ((T as any).length as any)])) : ((f as any).style as any)("stroke", g);
    const w: any = ((((f as any).node as any)() as any).getBBox as any)();
    return (t as any).height = ((w as any).height as any) + ((((a as any).sequence as any).labelBoxHeight ?? 0) as any), ((Et as any)(a, (Q as any)((t as any).description)) as any)((t as any).description, f, (L as any).x, ((L as any).y as any) + (15 as any), (L as any).width, (L as any).height, {
      class: `actor ${yt}`
    }, a), ((f as any).attr as any)("transform", `translate(0,${((E as any) / (2 as any) as any) + (10 as any)})`), r || (((f as any).attr as any)("data-et", "participant"), ((f as any).attr as any)("data-type", "boundary"), ((f as any).attr as any)("data-id", (t as any).name)), (t as any).height;
  }, "drawActorTypeBoundary"),
  kr: any = (x as any)(function (this: any, e: any, t: any, a: any, r: any, i: any): any {
    const n: any = r ? (t as any).stopy : (t as any).starty,
      s: any = ((t as any).x as any) + (((t as any).width as any) / (2 as any) as any),
      c: any = (n as any) + (80 as any),
      {
        look: E,
        theme: h,
        themeVariables: p
      }: any = a,
      {
        bkgColorArray: _,
        borderColorArray: u,
        actorBorder: O
      }: any = p,
      T: any = ((((e as any).append as any)("g") as any).lower as any)();
    r || (B++, ((((((((((((((((((((((((T as any).append as any)("line") as any).attr as any)("id", ("actor" as any) + (B as any)) as any).attr as any)("x1", s) as any).attr as any)("y1", c) as any).attr as any)("x2", s) as any).attr as any)("y2", 2e3) as any).attr as any)("class", "actor-line 200") as any).attr as any)("stroke-width", "0.5px") as any).attr as any)("stroke", "#999") as any).attr as any)("name", (t as any).name) as any).attr as any)("data-et", "life-line") as any).attr as any)("data-id", (t as any).name), (t as any).actorCnt = B);
    const g: any = ((e as any).append as any)("g");
    let f: any = yt;
    r ? f += ` ${_t}` : f += ` ${ft}`, ((g as any).attr as any)("class", f), ((g as any).attr as any)("name", (t as any).name), r || ((((((g as any).attr as any)("data-et", "participant") as any).attr as any)("data-type", "actor") as any).attr as any)("data-id", (t as any).name);
    const I: any = (E as any) === ("neo" as any) ? .5 : 1,
      L: any = (E as any) === ("neo" as any) ? (n as any) + (((1 as any) - (I as any) as any) * (30 as any) as any) : n;
    ((((((((((((g as any).append as any)("line") as any).attr as any)("id", ("actor-man-torso" as any) + (B as any)) as any).attr as any)("x1", s) as any).attr as any)("y1", (L as any) + ((25 as any) * (I as any) as any)) as any).attr as any)("x2", s) as any).attr as any)("y2", (L as any) + ((45 as any) * (I as any) as any)), ((((((((((((g as any).append as any)("line") as any).attr as any)("id", ("actor-man-arms" as any) + (B as any)) as any).attr as any)("x1", (s as any) - (((It as any) / (2 as any) as any) * (I as any) as any)) as any).attr as any)("y1", (L as any) + ((33 as any) * (I as any) as any)) as any).attr as any)("x2", (s as any) + (((It as any) / (2 as any) as any) * (I as any) as any)) as any).attr as any)("y2", (L as any) + ((33 as any) * (I as any) as any)), ((((((((((g as any).append as any)("line") as any).attr as any)("x1", (s as any) - (((It as any) / (2 as any) as any) * (I as any) as any)) as any).attr as any)("y1", (L as any) + ((60 as any) * (I as any) as any)) as any).attr as any)("x2", s) as any).attr as any)("y2", (L as any) + ((45 as any) * (I as any) as any)), ((((((((((g as any).append as any)("line") as any).attr as any)("x1", s) as any).attr as any)("y1", (L as any) + ((45 as any) * (I as any) as any)) as any).attr as any)("x2", (s as any) + ((((It as any) / (2 as any) as any) - (2 as any) as any) * (I as any) as any)) as any).attr as any)("y2", (L as any) + ((60 as any) * (I as any) as any));
    const b: any = ((g as any).append as any)("circle");
    ((b as any).attr as any)("cx", ((t as any).x as any) + (((t as any).width as any) / (2 as any) as any)), ((b as any).attr as any)("cy", (L as any) + ((10 as any) * (I as any) as any)), ((b as any).attr as any)("r", (15 as any) * (I as any)), ((b as any).attr as any)("width", ((t as any).width as any) * (I as any)), ((b as any).attr as any)("height", ((t as any).height as any) * (I as any));
    const w: any = ((((g as any).node as any)() as any).getBBox as any)();
    (t as any).height = (w as any).height;
    const A: any = (dt as any)();
    (A as any).x = (t as any).x, (A as any).y = L, (A as any).fill = "#eaeaea", (A as any).width = (t as any).width, (A as any).height = ((t as any).height as any) / (I as any), (A as any).class = "actor", (A as any).rx = 3, (A as any).ry = 3;
    const D: any = ((i as any).get as any)((t as any).name) ?? 0;
    return ((pt as any).has as any)(h) ? (((g as any).style as any)("stroke", (u as any)[(D as any) % ((u as any).length as any)]), ((g as any).style as any)("fill", (_ as any)[(D as any) % ((u as any).length as any)])) : ((g as any).style as any)("stroke", O), ((Et as any)(a, (Q as any)((t as any).description)) as any)((t as any).description, g, (A as any).x, ((L as any) + ((35 as any) * (I as any) as any) as any) - (((E as any) === ("neo" as any) ? 10 : 0) as any), (A as any).width, (A as any).height, {
      class: `actor ${yt}`
    }, a), (t as any).height;
  }, "drawActorTypeActor"),
  Dr: any = (x as any)(async function (this: any, e: any, t: any, a: any, r: any, i: any, n: any, s: any): Promise<any> {
    const c: any = s ?? new (Map as any)((([...(((((n as any).db as any).getActors as any)() as any).values as any)()] as any).map as any)((E: any, h: any): any => [(E as any).name, h]));
    switch ((t as any).type) {
      case "actor":
        return await (kr as any)(e, t, a, r, c);
      case "participant":
        return await (br as any)(e, t, a, r, c);
      case "boundary":
        return await (Pr as any)(e, t, a, r, c);
      case "control":
        return await (Sr as any)(e, t, a, r, i, c);
      case "entity":
        return await (wr as any)(e, t, a, r, c);
      case "database":
        return await (Nr as any)(e, t, a, r, c);
      case "collections":
        return await (mr as any)(e, t, a, r, c);
      case "queue":
        return await (Ar as any)(e, t, a, r, c);
    }
  }, "drawActor"),
  vr: any = (x as any)(function (this: any, e: any, t: any, a: any): any {
    const i: any = ((e as any).append as any)("g");
    (Ke as any)(i, t), (t as any).name && ((Et as any)(a) as any)((t as any).name, i, (t as any).x, (((t as any).y as any) + ((a as any).boxTextMargin as any) as any) + ((((t as any).textMaxHeight || 0) as any) / (2 as any) as any), (t as any).width, 0, {
      class: "text"
    }, a), ((i as any).lower as any)();
  }, "drawBox"),
  Cr: any = (x as any)(function (this: any, e: any): any {
    return ((e as any).append as any)("g");
  }, "anchorElement"),
  Mr: any = (x as any)(function (this: any, e: any, t: any, a: any, r: any, i: any, n: any, s: any): any {
    const {
        theme: c,
        themeVariables: E
      }: any = r,
      {
        bkgColorArray: h,
        borderColorArray: p,
        mainBkg: _
      }: any = E,
      u: any = (dt as any)(),
      O: any = (t as any).anchored,
      T: any = (t as any).actor;
    (u as any).x = (t as any).startx, (u as any).y = (t as any).starty, (u as any).class = ("activation" as any) + ((i as any) % (3 as any) as any), (u as any).width = ((t as any).stopx as any) - ((t as any).startx as any), (u as any).height = (a as any) - ((t as any).starty as any);
    const g: any = (Pt as any)(O, u),
      I: any = (((s ?? new (Map as any)((([...(((((n as any).db as any).getActors as any)() as any).values as any)()] as any).map as any)((L: any, b: any): any => [(L as any).name, b]))) as any).get as any)(T) ?? 0;
    ((pt as any).has as any)(c) && (((g as any).style as any)("stroke", (p as any)[(I as any) % ((p as any).length as any)]), ((g as any).style as any)("fill", (h as any)[(I as any) % ((p as any).length as any)] ?? _));
  }, "drawActivation"),
  Br: any = (x as any)(async function (this: any, e: any, t: any, a: any, r: any, i: any): Promise<any> {
    const {
        boxMargin: n,
        boxTextMargin: s,
        labelBoxHeight: c,
        labelBoxWidth: E,
        messageFontFamily: h,
        messageFontSize: p,
        messageFontWeight: _
      }: any = r,
      u: any = ((((((e as any).append as any)("g") as any).attr as any)("data-et", "control-structure") as any).attr as any)("data-id", ("i" as any) + ((i as any).id as any)),
      O: any = (x as any)(function (this: any, f: any, I: any, L: any, b: any): any {
        return ((((((((((((u as any).append as any)("line") as any).attr as any)("x1", f) as any).attr as any)("y1", I) as any).attr as any)("x2", L) as any).attr as any)("y2", b) as any).attr as any)("class", "loopLine");
      }, "drawLoopLine");
    (O as any)((t as any).startx, (t as any).starty, (t as any).stopx, (t as any).starty), (O as any)((t as any).stopx, (t as any).starty, (t as any).stopx, (t as any).stopy), (O as any)((t as any).startx, (t as any).stopy, (t as any).stopx, (t as any).stopy), (O as any)((t as any).startx, (t as any).starty, (t as any).startx, (t as any).stopy), ((t as any).sections as any) !== (void 0 as any) && (((t as any).sections as any).forEach as any)(function (this: any, f: any): any {
      (((O as any)((t as any).startx, (f as any).y, (t as any).stopx, (f as any).y) as any).style as any)("stroke-dasharray", "3, 3");
    });
    let T: any = (se as any)();
    (T as any).text = a, (T as any).x = (t as any).startx, (T as any).y = (t as any).starty, (T as any).fontFamily = h, (T as any).fontSize = p, (T as any).fontWeight = _, (T as any).anchor = "middle", (T as any).valign = "middle", (T as any).tspan = !1, (T as any).width = ((Math as any).max as any)(E ?? 0, 50), (T as any).height = (c as any) + ((((r as any).look as any) === ("neo" as any) ? 15 : 0) as any) || 20, (T as any).textMargin = s, (T as any).class = "labelText", (Ye as any)(u, T), T = (Fe as any)(), (T as any).text = (t as any).title, (T as any).x = (((t as any).startx as any) + ((E as any) / (2 as any) as any) as any) + ((((t as any).stopx as any) - ((t as any).startx as any) as any) / (2 as any) as any), (T as any).y = (((t as any).starty as any) + (n as any) as any) + (s as any), (T as any).anchor = "middle", (T as any).valign = "middle", (T as any).textMargin = s, (T as any).class = "loopText", (T as any).fontFamily = h, (T as any).fontSize = p, (T as any).fontWeight = _, (T as any).wrap = !0;
    let g: any = (Q as any)((T as any).text) ? await (qt as any)(u, T, t) : (At as any)(u, T);
    if (((t as any).sectionTitles as any) !== (void 0 as any)) {
      for (const [f, I] of ((Object as any).entries as any)((t as any).sectionTitles)) if ((I as any).message) {
        (T as any).text = (I as any).message, (T as any).x = ((t as any).startx as any) + ((((t as any).stopx as any) - ((t as any).startx as any) as any) / (2 as any) as any), (T as any).y = (((((t as any).sections as any)[f] as any).y as any) + (n as any) as any) + (s as any), (T as any).class = "sectionTitle", (T as any).anchor = "middle", (T as any).valign = "middle", (T as any).tspan = !1, (T as any).fontFamily = h, (T as any).fontSize = p, (T as any).fontWeight = _, (T as any).wrap = (t as any).wrap, (Q as any)((T as any).text) ? ((t as any).starty = (((t as any).sections as any)[f] as any).y, await (qt as any)(u, T, t)) : (At as any)(u, T);
        let L: any = ((Math as any).round as any)(((((g as any).map as any)((b: any): any => (((((((b as any)._groups || b) as any)[0] as any)[0] as any).getBBox as any)() as any).height) as any).reduce as any)((b: any, w: any): any => (b as any) + (w as any)));
        (((t as any).sections as any)[f] as any).height += (L as any) - ((n as any) + (s as any) as any);
      }
    }
    return (t as any).height = ((Math as any).round as any)(((t as any).stopy as any) - ((t as any).starty as any)), u;
  }, "drawLoop"),
  Ke: any = (x as any)(function (this: any, e: any, t: any): any {
    (ur as any)(e, t);
  }, "drawBackgroundRect"),
  Vr: any = (x as any)(function (this: any, e: any, t: any): any {
    ((((((((((((((((e as any).append as any)("defs") as any).append as any)("symbol") as any).attr as any)("id", (t as any) + ("-database" as any)) as any).attr as any)("fill-rule", "evenodd") as any).attr as any)("clip-rule", "evenodd") as any).append as any)("path") as any).attr as any)("transform", "scale(.5)") as any).attr as any)("d", "M12.258.001l.256.004.255.005.253.008.251.01.249.012.247.015.246.016.242.019.241.02.239.023.236.024.233.027.231.028.229.031.225.032.223.034.22.036.217.038.214.04.211.041.208.043.205.045.201.046.198.048.194.05.191.051.187.053.183.054.18.056.175.057.172.059.168.06.163.061.16.063.155.064.15.066.074.033.073.033.071.034.07.034.069.035.068.035.067.035.066.035.064.036.064.036.062.036.06.036.06.037.058.037.058.037.055.038.055.038.053.038.052.038.051.039.05.039.048.039.047.039.045.04.044.04.043.04.041.04.04.041.039.041.037.041.036.041.034.041.033.042.032.042.03.042.029.042.027.042.026.043.024.043.023.043.021.043.02.043.018.044.017.043.015.044.013.044.012.044.011.045.009.044.007.045.006.045.004.045.002.045.001.045v17l-.001.045-.002.045-.004.045-.006.045-.007.045-.009.044-.011.045-.012.044-.013.044-.015.044-.017.043-.018.044-.02.043-.021.043-.023.043-.024.043-.026.043-.027.042-.029.042-.03.042-.032.042-.033.042-.034.041-.036.041-.037.041-.039.041-.04.041-.041.04-.043.04-.044.04-.045.04-.047.039-.048.039-.05.039-.051.039-.052.038-.053.038-.055.038-.055.038-.058.037-.058.037-.06.037-.06.036-.062.036-.064.036-.064.036-.066.035-.067.035-.068.035-.069.035-.07.034-.071.034-.073.033-.074.033-.15.066-.155.064-.16.063-.163.061-.168.06-.172.059-.175.057-.18.056-.183.054-.187.053-.191.051-.194.05-.198.048-.201.046-.205.045-.208.043-.211.041-.214.04-.217.038-.22.036-.223.034-.225.032-.229.031-.231.028-.233.027-.236.024-.239.023-.241.02-.242.019-.246.016-.247.015-.249.012-.251.01-.253.008-.255.005-.256.004-.258.001-.258-.001-.256-.004-.255-.005-.253-.008-.251-.01-.249-.012-.247-.015-.245-.016-.243-.019-.241-.02-.238-.023-.236-.024-.234-.027-.231-.028-.228-.031-.226-.032-.223-.034-.22-.036-.217-.038-.214-.04-.211-.041-.208-.043-.204-.045-.201-.046-.198-.048-.195-.05-.19-.051-.187-.053-.184-.054-.179-.056-.176-.057-.172-.059-.167-.06-.164-.061-.159-.063-.155-.064-.151-.066-.074-.033-.072-.033-.072-.034-.07-.034-.069-.035-.068-.035-.067-.035-.066-.035-.064-.036-.063-.036-.062-.036-.061-.036-.06-.037-.058-.037-.057-.037-.056-.038-.055-.038-.053-.038-.052-.038-.051-.039-.049-.039-.049-.039-.046-.039-.046-.04-.044-.04-.043-.04-.041-.04-.04-.041-.039-.041-.037-.041-.036-.041-.034-.041-.033-.042-.032-.042-.03-.042-.029-.042-.027-.042-.026-.043-.024-.043-.023-.043-.021-.043-.02-.043-.018-.044-.017-.043-.015-.044-.013-.044-.012-.044-.011-.045-.009-.044-.007-.045-.006-.045-.004-.045-.002-.045-.001-.045v-17l.001-.045.002-.045.004-.045.006-.045.007-.045.009-.044.011-.045.012-.044.013-.044.015-.044.017-.043.018-.044.02-.043.021-.043.023-.043.024-.043.026-.043.027-.042.029-.042.03-.042.032-.042.033-.042.034-.041.036-.041.037-.041.039-.041.04-.041.041-.04.043-.04.044-.04.046-.04.046-.039.049-.039.049-.039.051-.039.052-.038.053-.038.055-.038.056-.038.057-.037.058-.037.06-.037.061-.036.062-.036.063-.036.064-.036.066-.035.067-.035.068-.035.069-.035.07-.034.072-.034.072-.033.074-.033.151-.066.155-.064.159-.063.164-.061.167-.06.172-.059.176-.057.179-.056.184-.054.187-.053.19-.051.195-.05.198-.048.201-.046.204-.045.208-.043.211-.041.214-.04.217-.038.22-.036.223-.034.226-.032.228-.031.231-.028.234-.027.236-.024.238-.023.241-.02.243-.019.245-.016.247-.015.249-.012.251-.01.253-.008.255-.005.256-.004.258-.001.258.001zm-9.258 20.499v.01l.001.021.003.021.004.022.005.021.006.022.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.023.018.024.019.024.021.024.022.025.023.024.024.025.052.049.056.05.061.051.066.051.07.051.075.051.079.052.084.052.088.052.092.052.097.052.102.051.105.052.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.048.144.049.147.047.152.047.155.047.16.045.163.045.167.043.171.043.176.041.178.041.183.039.187.039.19.037.194.035.197.035.202.033.204.031.209.03.212.029.216.027.219.025.222.024.226.021.23.02.233.018.236.016.24.015.243.012.246.01.249.008.253.005.256.004.259.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.021.224-.024.22-.026.216-.027.212-.028.21-.031.205-.031.202-.034.198-.034.194-.036.191-.037.187-.039.183-.04.179-.04.175-.042.172-.043.168-.044.163-.045.16-.046.155-.046.152-.047.148-.048.143-.049.139-.049.136-.05.131-.05.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.053.083-.051.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.05.023-.024.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.023.01-.022.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.127l-.077.055-.08.053-.083.054-.085.053-.087.052-.09.052-.093.051-.095.05-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.045-.118.044-.12.043-.122.042-.124.042-.126.041-.128.04-.13.04-.132.038-.134.038-.135.037-.138.037-.139.035-.142.035-.143.034-.144.033-.147.032-.148.031-.15.03-.151.03-.153.029-.154.027-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.01-.179.008-.179.008-.181.006-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.006-.179-.008-.179-.008-.178-.01-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.027-.153-.029-.151-.03-.15-.03-.148-.031-.146-.032-.145-.033-.143-.034-.141-.035-.14-.035-.137-.037-.136-.037-.134-.038-.132-.038-.13-.04-.128-.04-.126-.041-.124-.042-.122-.042-.12-.044-.117-.043-.116-.045-.113-.045-.112-.046-.109-.047-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.05-.093-.052-.09-.051-.087-.052-.085-.053-.083-.054-.08-.054-.077-.054v4.127zm0-5.654v.011l.001.021.003.021.004.021.005.022.006.022.007.022.009.022.01.022.011.023.012.023.013.023.015.024.016.023.017.024.018.024.019.024.021.024.022.024.023.025.024.024.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.052.11.051.114.051.119.052.123.05.127.051.131.05.135.049.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.044.171.042.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.022.23.02.233.018.236.016.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.012.241-.015.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.048.139-.05.136-.049.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.051.051-.049.023-.025.023-.024.021-.025.02-.024.019-.024.018-.024.017-.024.015-.023.014-.023.013-.024.012-.022.01-.023.01-.023.008-.022.006-.022.006-.022.004-.021.004-.022.001-.021.001-.021v-4.139l-.077.054-.08.054-.083.054-.085.052-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.044-.118.044-.12.044-.122.042-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.035-.143.033-.144.033-.147.033-.148.031-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.009-.179.009-.179.007-.181.007-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.007-.179-.007-.179-.009-.178-.009-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.031-.146-.033-.145-.033-.143-.033-.141-.035-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.04-.126-.041-.124-.042-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.051-.093-.051-.09-.051-.087-.053-.085-.052-.083-.054-.08-.054-.077-.054v4.139zm0-5.666v.011l.001.02.003.022.004.021.005.022.006.021.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.024.018.023.019.024.021.025.022.024.023.024.024.025.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.051.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.043.171.043.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.021.23.02.233.018.236.017.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.013.241-.014.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.049.139-.049.136-.049.131-.051.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.049.023-.025.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.022.01-.023.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.153l-.077.054-.08.054-.083.053-.085.053-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.048-.105.048-.106.048-.109.046-.111.046-.114.046-.115.044-.118.044-.12.043-.122.043-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.034-.143.034-.144.033-.147.032-.148.032-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.024-.161.024-.162.023-.163.023-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.01-.178.01-.179.009-.179.007-.181.006-.182.006-.182.004-.184.003-.184.001-.185.001-.185-.001-.184-.001-.184-.003-.182-.004-.182-.006-.181-.006-.179-.007-.179-.009-.178-.01-.176-.01-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.023-.162-.023-.161-.024-.159-.024-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.032-.146-.032-.145-.033-.143-.034-.141-.034-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.041-.126-.041-.124-.041-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.048-.105-.048-.102-.048-.1-.05-.097-.049-.095-.051-.093-.051-.09-.052-.087-.052-.085-.053-.083-.053-.08-.054-.077-.054v4.153zm8.74-8.179l-.257.004-.254.005-.25.008-.247.011-.244.012-.241.014-.237.016-.233.018-.231.021-.226.022-.224.023-.22.026-.216.027-.212.028-.21.031-.205.032-.202.033-.198.034-.194.036-.191.038-.187.038-.183.04-.179.041-.175.042-.172.043-.168.043-.163.045-.16.046-.155.046-.152.048-.148.048-.143.048-.139.049-.136.05-.131.05-.126.051-.123.051-.118.051-.114.052-.11.052-.106.052-.101.052-.096.052-.092.052-.088.052-.083.052-.079.052-.074.051-.07.052-.065.051-.06.05-.056.05-.051.05-.023.025-.023.024-.021.024-.02.025-.019.024-.018.024-.017.023-.015.024-.014.023-.013.023-.012.023-.01.023-.01.022-.008.022-.006.023-.006.021-.004.022-.004.021-.001.021-.001.021.001.021.001.021.004.021.004.022.006.021.006.023.008.022.01.022.01.023.012.023.013.023.014.023.015.024.017.023.018.024.019.024.02.025.021.024.023.024.023.025.051.05.056.05.06.05.065.051.07.052.074.051.079.052.083.052.088.052.092.052.096.052.101.052.106.052.11.052.114.052.118.051.123.051.126.051.131.05.136.05.139.049.143.048.148.048.152.048.155.046.16.046.163.045.168.043.172.043.175.042.179.041.183.04.187.038.191.038.194.036.198.034.202.033.205.032.21.031.212.028.216.027.22.026.224.023.226.022.231.021.233.018.237.016.241.014.244.012.247.011.25.008.254.005.257.004.26.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.022.224-.023.22-.026.216-.027.212-.028.21-.031.205-.032.202-.033.198-.034.194-.036.191-.038.187-.038.183-.04.179-.041.175-.042.172-.043.168-.043.163-.045.16-.046.155-.046.152-.048.148-.048.143-.048.139-.049.136-.05.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.05.051-.05.023-.025.023-.024.021-.024.02-.025.019-.024.018-.024.017-.023.015-.024.014-.023.013-.023.012-.023.01-.023.01-.022.008-.022.006-.023.006-.021.004-.022.004-.021.001-.021.001-.021-.001-.021-.001-.021-.004-.021-.004-.022-.006-.021-.006-.023-.008-.022-.01-.022-.01-.023-.012-.023-.013-.023-.014-.023-.015-.024-.017-.023-.018-.024-.019-.024-.02-.025-.021-.024-.023-.024-.023-.025-.051-.05-.056-.05-.06-.05-.065-.051-.07-.052-.074-.051-.079-.052-.083-.052-.088-.052-.092-.052-.096-.052-.101-.052-.106-.052-.11-.052-.114-.052-.118-.051-.123-.051-.126-.051-.131-.05-.136-.05-.139-.049-.143-.048-.148-.048-.152-.048-.155-.046-.16-.046-.163-.045-.168-.043-.172-.043-.175-.042-.179-.041-.183-.04-.187-.038-.191-.038-.194-.036-.198-.034-.202-.033-.205-.032-.21-.031-.212-.028-.216-.027-.22-.026-.224-.023-.226-.022-.231-.021-.233-.018-.237-.016-.241-.014-.244-.012-.247-.011-.25-.008-.254-.005-.257-.004-.26-.001-.26.001z");
  }, "insertDatabaseIcon"),
  Yr: any = (x as any)(function (this: any, e: any, t: any): any {
    ((((((((((((((((e as any).append as any)("defs") as any).append as any)("symbol") as any).attr as any)("id", (t as any) + ("-computer" as any)) as any).attr as any)("width", "24") as any).attr as any)("height", "24") as any).append as any)("path") as any).attr as any)("transform", "scale(.5)") as any).attr as any)("d", "M2 2v13h20v-13h-20zm18 11h-16v-9h16v9zm-10.228 6l.466-1h3.524l.467 1h-4.457zm14.228 3h-24l2-6h2.104l-1.33 4h18.45l-1.297-4h2.073l2 6zm-5-10h-14v-7h14v7z");
  }, "insertComputerIcon"),
  Wr: any = (x as any)(function (this: any, e: any, t: any): any {
    ((((((((((((((((e as any).append as any)("defs") as any).append as any)("symbol") as any).attr as any)("id", (t as any) + ("-clock" as any)) as any).attr as any)("width", "24") as any).attr as any)("height", "24") as any).append as any)("path") as any).attr as any)("transform", "scale(.5)") as any).attr as any)("d", "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z");
  }, "insertClockIcon"),
  Kr: any = (x as any)(function (this: any, e: any, t: any): any {
    ((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (t as any) + ("-arrowhead" as any)) as any).attr as any)("refX", 7.9) as any).attr as any)("refY", 5) as any).attr as any)("markerUnits", "userSpaceOnUse") as any).attr as any)("markerWidth", 12) as any).attr as any)("markerHeight", 12) as any).attr as any)("orient", "auto-start-reverse") as any).append as any)("path") as any).attr as any)("d", "M -1 0 L 10 5 L 0 10 z");
  }, "insertArrowHead"),
  Fr: any = (x as any)(function (this: any, e: any, t: any): any {
    ((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (t as any) + ("-filled-head" as any)) as any).attr as any)("refX", 15.5) as any).attr as any)("refY", 7) as any).attr as any)("markerWidth", 20) as any).attr as any)("markerHeight", 28) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 18,7 L9,13 L14,7 L9,1 Z");
  }, "insertArrowFilledHead"),
  qr: any = (x as any)(function (this: any, e: any, t: any): any {
    ((((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (t as any) + ("-sequencenumber" as any)) as any).attr as any)("refX", 15) as any).attr as any)("refY", 15) as any).attr as any)("markerWidth", 60) as any).attr as any)("markerHeight", 40) as any).attr as any)("orient", "auto") as any).append as any)("circle") as any).attr as any)("cx", 15) as any).attr as any)("cy", 15) as any).attr as any)("r", 6);
  }, "insertSequenceNumber"),
  Hr: any = (x as any)(function (this: any, e: any, t: any): any {
    ((((((((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (t as any) + ("-crosshead" as any)) as any).attr as any)("markerWidth", 15) as any).attr as any)("markerHeight", 8) as any).attr as any)("orient", "auto") as any).attr as any)("refX", 4) as any).attr as any)("refY", 4.5) as any).append as any)("path") as any).attr as any)("fill", "none") as any).attr as any)("stroke", "#000000") as any).style as any)("stroke-dasharray", "0, 0") as any).attr as any)("stroke-width", "1pt") as any).attr as any)("d", "M 1,2 L 6,7 M 6,2 L 1,7");
  }, "insertArrowCrossHead"),
  zr: any = (x as any)(function (this: any, e: any, t: any): any {
    const {
      theme: a
    }: any = t;
    ((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("filter") as any).attr as any)("id", "drop-shadow") as any).attr as any)("height", "130%") as any).attr as any)("width", "130%") as any).append as any)("feDropShadow") as any).attr as any)("dx", "4") as any).attr as any)("dy", "4") as any).attr as any)("stdDeviation", 0) as any).attr as any)("flood-opacity", "0.06") as any).attr as any)("flood-color", `${(a as any) === ("redux" as any) || (a as any) === ("redux-color" as any) ? "#000000" : "#FFFFFF"}`);
  }, "insertDropShadow"),
  Fe: any = (x as any)(function (this: any): any {
    return {
      x: 0,
      y: 0,
      fill: void 0,
      anchor: void 0,
      style: "#666",
      width: void 0,
      height: void 0,
      textMargin: 0,
      rx: 0,
      ry: 0,
      tspan: !0,
      valign: void 0
    };
  }, "getTextObj"),
  Ur: any = (x as any)(function (this: any): any {
    return {
      x: 0,
      y: 0,
      fill: "#EDF2AE",
      stroke: "#666",
      width: 100,
      anchor: "start",
      height: 100,
      rx: 0,
      ry: 0
    };
  }, "getNoteRect"),
  Et: any = (function (this: any): any {
    function e(this: any, n: any, s: any, c: any, E: any, h: any, p: any, _: any): any {
      const u: any = ((((((((((s as any).append as any)("text") as any).attr as any)("x", (c as any) + ((h as any) / (2 as any) as any)) as any).attr as any)("y", ((E as any) + ((p as any) / (2 as any) as any) as any) + (5 as any)) as any).style as any)("text-anchor", "middle") as any).text as any)(n);
      (i as any)(u, _);
    }
    (x as any)(e, "byText");
    function t(this: any, n: any, s: any, c: any, E: any, h: any, p: any, _: any, u: any): any {
      const {
          actorFontSize: O,
          actorFontFamily: T,
          actorFontWeight: g
        }: any = u,
        [f, I]: any = (Be as any)(O),
        L: any = ((n as any).split as any)((N as any).lineBreakRegex);
      for (let b: any = 0; (b as any) < ((L as any).length as any); b++) {
        const w: any = ((b as any) * (f as any) as any) - (((f as any) * (((L as any).length as any) - (1 as any) as any) as any) / (2 as any) as any),
          A: any = ((((((((((((((s as any).append as any)("text") as any).attr as any)("x", (c as any) + ((h as any) / (2 as any) as any)) as any).attr as any)("y", E) as any).style as any)("text-anchor", "middle") as any).style as any)("font-size", I) as any).style as any)("font-weight", g) as any).style as any)("font-family", T);
        ((((((((A as any).append as any)("tspan") as any).attr as any)("x", (c as any) + ((h as any) / (2 as any) as any)) as any).attr as any)("dy", w) as any).text as any)((L as any)[b]), ((((((A as any).attr as any)("y", (E as any) + ((p as any) / (2 as any) as any)) as any).attr as any)("dominant-baseline", "central") as any).attr as any)("alignment-baseline", "central"), (i as any)(A, _);
      }
    }
    (x as any)(t, "byTspan");
    function a(this: any, n: any, s: any, c: any, E: any, h: any, p: any, _: any, u: any): any {
      const O: any = ((s as any).append as any)("switch"),
        g: any = ((((((((((((((((((O as any).append as any)("foreignObject") as any).attr as any)("x", c) as any).attr as any)("y", E) as any).attr as any)("width", h) as any).attr as any)("height", p) as any).append as any)("xhtml:div") as any).style as any)("display", "table") as any).style as any)("height", "100%") as any).style as any)("width", "100%");
      ((((((((((g as any).append as any)("div") as any).style as any)("display", "table-cell") as any).style as any)("text-align", "center") as any).style as any)("vertical-align", "middle") as any).text as any)(n), (t as any)(n, O, c, E, h, p, _, u), (i as any)(g, _);
    }
    (x as any)(a, "byFo");
    async function r(this: any, n: any, s: any, c: any, E: any, h: any, p: any, _: any, u: any): Promise<any> {
      const O: any = await (kt as any)(n, (Ft as any)()),
        T: any = ((s as any).append as any)("switch"),
        f: any = ((((((((((((((((T as any).append as any)("foreignObject") as any).attr as any)("x", ((c as any) + ((h as any) / (2 as any) as any) as any) - (((O as any).width as any) / (2 as any) as any)) as any).attr as any)("y", ((E as any) + ((p as any) / (2 as any) as any) as any) - (((O as any).height as any) / (2 as any) as any)) as any).attr as any)("width", (O as any).width) as any).attr as any)("height", (O as any).height) as any).append as any)("xhtml:div") as any).style as any)("height", "100%") as any).style as any)("width", "100%");
      ((((((((f as any).append as any)("div") as any).style as any)("text-align", "center") as any).style as any)("vertical-align", "middle") as any).html as any)(await (Ve as any)(n, (Ft as any)())), (t as any)(n, T, c, E, h, p, _, u), (i as any)(f, _);
    }
    (x as any)(r, "byKatex");
    function i(this: any, n: any, s: any): any {
      for (const c in s) ((s as any).hasOwnProperty as any)(c) && ((n as any).attr as any)(c, (s as any)[c]);
    }
    return (x as any)(i, "_setTextAttrs"), function (this: any, n: any, s: any = !1): any {
      return s ? r : ((n as any).textPlacement as any) === ("fo" as any) ? a : ((n as any).textPlacement as any) === ("old" as any) ? e : t;
    };
  } as any)(),
  Gr: any = (function (this: any): any {
    function e(this: any, i: any, n: any, s: any, c: any, E: any, h: any, p: any): any {
      const _: any = ((((((((((n as any).append as any)("text") as any).attr as any)("x", s) as any).attr as any)("y", c) as any).style as any)("text-anchor", "start") as any).text as any)(i);
      (r as any)(_, p);
    }
    (x as any)(e, "byText");
    function t(this: any, i: any, n: any, s: any, c: any, E: any, h: any, p: any, _: any): any {
      const {
          actorFontSize: u,
          actorFontFamily: O,
          actorFontWeight: T
        }: any = _,
        g: any = ((i as any).split as any)((N as any).lineBreakRegex);
      for (let f: any = 0; (f as any) < ((g as any).length as any); f++) {
        const I: any = ((f as any) * (u as any) as any) - (((u as any) * (((g as any).length as any) - (1 as any) as any) as any) / (2 as any) as any),
          L: any = ((((((((((((((n as any).append as any)("text") as any).attr as any)("x", s) as any).attr as any)("y", c) as any).style as any)("text-anchor", "start") as any).style as any)("font-size", u) as any).style as any)("font-weight", T) as any).style as any)("font-family", O);
        ((((((((L as any).append as any)("tspan") as any).attr as any)("x", s) as any).attr as any)("dy", I) as any).text as any)((g as any)[f]), ((((((L as any).attr as any)("y", (c as any) + ((h as any) / (2 as any) as any)) as any).attr as any)("dominant-baseline", "central") as any).attr as any)("alignment-baseline", "central"), (r as any)(L, p);
      }
    }
    (x as any)(t, "byTspan");
    function a(this: any, i: any, n: any, s: any, c: any, E: any, h: any, p: any, _: any): any {
      const u: any = ((n as any).append as any)("switch"),
        T: any = ((((((((((((((((((u as any).append as any)("foreignObject") as any).attr as any)("x", s) as any).attr as any)("y", c) as any).attr as any)("width", E) as any).attr as any)("height", h) as any).append as any)("xhtml:div") as any).style as any)("display", "table") as any).style as any)("height", "100%") as any).style as any)("width", "100%");
      ((((((((((T as any).append as any)("div") as any).style as any)("display", "table-cell") as any).style as any)("text-align", "center") as any).style as any)("vertical-align", "middle") as any).text as any)(i), (t as any)(i, u, s, c, E, h, p, _), (r as any)(T, p);
    }
    (x as any)(a, "byFo");
    function r(this: any, i: any, n: any): any {
      for (const s in n) ((n as any).hasOwnProperty as any)(s) && ((i as any).attr as any)(s, (n as any)[s]);
    }
    return (x as any)(r, "_setTextAttrs"), function (this: any, i: any): any {
      return ((i as any).textPlacement as any) === ("fo" as any) ? a : ((i as any).textPlacement as any) === ("old" as any) ? e : t;
    };
  } as any)(),
  Xr: any = (x as any)(function (this: any, e: any, t: any): any {
    ((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (t as any) + ("-solidTopArrowHead" as any)) as any).attr as any)("refX", 7.9) as any).attr as any)("refY", 7.25) as any).attr as any)("markerUnits", "userSpaceOnUse") as any).attr as any)("markerWidth", 12) as any).attr as any)("markerHeight", 12) as any).attr as any)("orient", "auto-start-reverse") as any).append as any)("path") as any).attr as any)("d", "M 0 0 L 10 8 L 0 8 z");
  }, "insertSolidTopArrowHead"),
  Jr: any = (x as any)(function (this: any, e: any, t: any): any {
    ((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (t as any) + ("-solidBottomArrowHead" as any)) as any).attr as any)("refX", 7.9) as any).attr as any)("refY", .75) as any).attr as any)("markerUnits", "userSpaceOnUse") as any).attr as any)("markerWidth", 12) as any).attr as any)("markerHeight", 12) as any).attr as any)("orient", "auto-start-reverse") as any).append as any)("path") as any).attr as any)("d", "M 0 0 L 10 0 L 0 8 z");
  }, "insertSolidBottomArrowHead"),
  Zr: any = (x as any)(function (this: any, e: any, t: any): any {
    ((((((((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (t as any) + ("-stickTopArrowHead" as any)) as any).attr as any)("refX", 7.5) as any).attr as any)("refY", 7) as any).attr as any)("markerUnits", "userSpaceOnUse") as any).attr as any)("markerWidth", 12) as any).attr as any)("markerHeight", 12) as any).attr as any)("orient", "auto-start-reverse") as any).append as any)("path") as any).attr as any)("d", "M 0 0 L 7 7") as any).attr as any)("stroke", "black") as any).attr as any)("stroke-width", 1.5) as any).attr as any)("fill", "none");
  }, "insertStickTopArrowHead"),
  Qr: any = (x as any)(function (this: any, e: any, t: any): any {
    ((((((((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (t as any) + ("-stickBottomArrowHead" as any)) as any).attr as any)("refX", 7.5) as any).attr as any)("refY", 0) as any).attr as any)("markerUnits", "userSpaceOnUse") as any).attr as any)("markerWidth", 12) as any).attr as any)("markerHeight", 12) as any).attr as any)("orient", "auto-start-reverse") as any).append as any)("path") as any).attr as any)("d", "M 0 7 L 7 0") as any).attr as any)("stroke", "black") as any).attr as any)("stroke-width", 1.5) as any).attr as any)("fill", "none");
  }, "insertStickBottomArrowHead"),
  q: any = {
    drawRect: Pt,
    drawText: At,
    drawLabel: Ye,
    drawActor: Dr,
    drawBox: vr,
    drawPopup: Lr,
    anchorElement: Cr,
    drawActivation: Mr,
    drawLoop: Br,
    drawBackgroundRect: Ke,
    insertArrowHead: Kr,
    insertArrowFilledHead: Fr,
    insertSequenceNumber: qr,
    insertArrowCrossHead: Hr,
    insertDatabaseIcon: Vr,
    insertComputerIcon: Yr,
    insertClockIcon: Wr,
    getTextObj: Fe,
    getNoteRect: Ur,
    fixLifeLineHeights: We,
    sanitizeUrl: (Me as any).sanitizeUrl,
    insertDropShadow: zr,
    insertSolidTopArrowHead: Xr,
    insertSolidBottomArrowHead: Jr,
    insertStickTopArrowHead: Zr,
    insertStickBottomArrowHead: Qr
  },
  l: any = {},
  R: any = {
    data: {
      startx: void 0,
      stopx: void 0,
      starty: void 0,
      stopy: void 0
    },
    verticalPos: 0,
    sequenceItems: [],
    activations: [],
    models: {
      getHeight: (x as any)(function (this: any): any {
        return ((((((Math as any).max as any).apply as any)(null, (((this as any).actors as any).length as any) === (0 as any) ? [0] : (((this as any).actors as any).map as any)((e: any): any => (e as any).height || 0)) as any) + (((((this as any).loops as any).length as any) === (0 as any) ? 0 : (((((this as any).loops as any).map as any)((e: any): any => (e as any).height || 0) as any).reduce as any)((e: any, t: any): any => (e as any) + (t as any))) as any) as any) + (((((this as any).messages as any).length as any) === (0 as any) ? 0 : (((((this as any).messages as any).map as any)((e: any): any => (e as any).height || 0) as any).reduce as any)((e: any, t: any): any => (e as any) + (t as any))) as any) as any) + (((((this as any).notes as any).length as any) === (0 as any) ? 0 : (((((this as any).notes as any).map as any)((e: any): any => (e as any).height || 0) as any).reduce as any)((e: any, t: any): any => (e as any) + (t as any))) as any);
      }, "getHeight"),
      clear: (x as any)(function (this: any): any {
        (this as any).actors = [], (this as any).boxes = [], (this as any).loops = [], (this as any).messages = [], (this as any).notes = [];
      }, "clear"),
      addBox: (x as any)(function (this: any, e: any): any {
        (((this as any).boxes as any).push as any)(e);
      }, "addBox"),
      addActor: (x as any)(function (this: any, e: any): any {
        (((this as any).actors as any).push as any)(e);
      }, "addActor"),
      addLoop: (x as any)(function (this: any, e: any): any {
        (((this as any).loops as any).push as any)(e);
      }, "addLoop"),
      addMessage: (x as any)(function (this: any, e: any): any {
        (((this as any).messages as any).push as any)(e);
      }, "addMessage"),
      addNote: (x as any)(function (this: any, e: any): any {
        (((this as any).notes as any).push as any)(e);
      }, "addNote"),
      lastActor: (x as any)(function (this: any): any {
        return ((this as any).actors as any)[(((this as any).actors as any).length as any) - (1 as any)];
      }, "lastActor"),
      lastLoop: (x as any)(function (this: any): any {
        return ((this as any).loops as any)[(((this as any).loops as any).length as any) - (1 as any)];
      }, "lastLoop"),
      lastMessage: (x as any)(function (this: any): any {
        return ((this as any).messages as any)[(((this as any).messages as any).length as any) - (1 as any)];
      }, "lastMessage"),
      lastNote: (x as any)(function (this: any): any {
        return ((this as any).notes as any)[(((this as any).notes as any).length as any) - (1 as any)];
      }, "lastNote"),
      actors: [],
      boxes: [],
      loops: [],
      messages: [],
      notes: []
    },
    init: (x as any)(function (this: any): any {
      (this as any).sequenceItems = [], (this as any).activations = [], (((this as any).models as any).clear as any)(), (this as any).data = {
        startx: void 0,
        stopx: void 0,
        starty: void 0,
        stopy: void 0
      }, (this as any).verticalPos = 0, (ze as any)(($ as any)());
    }, "init"),
    updateVal: (x as any)(function (this: any, e: any, t: any, a: any, r: any): any {
      ((e as any)[t] as any) === (void 0 as any) ? (e as any)[t] = a : (e as any)[t] = (r as any)(a, (e as any)[t]);
    }, "updateVal"),
    updateBounds: (x as any)(function (this: any, e: any, t: any, a: any, r: any): any {
      const i: any = this;
      let n: any = 0;
      function s(this: any, c: any): any {
        return (x as any)(function (this: any, h: any): any {
          n++;
          const p: any = ((((i as any).sequenceItems as any).length as any) - (n as any) as any) + (1 as any);
          ((i as any).updateVal as any)(h, "starty", (t as any) - ((p as any) * ((l as any).boxMargin as any) as any), (Math as any).min), ((i as any).updateVal as any)(h, "stopy", (r as any) + ((p as any) * ((l as any).boxMargin as any) as any), (Math as any).max), ((i as any).updateVal as any)((R as any).data, "startx", (e as any) - ((p as any) * ((l as any).boxMargin as any) as any), (Math as any).min), ((i as any).updateVal as any)((R as any).data, "stopx", (a as any) + ((p as any) * ((l as any).boxMargin as any) as any), (Math as any).max), (c as any) !== ("activation" as any) && (((i as any).updateVal as any)(h, "startx", (e as any) - ((p as any) * ((l as any).boxMargin as any) as any), (Math as any).min), ((i as any).updateVal as any)(h, "stopx", (a as any) + ((p as any) * ((l as any).boxMargin as any) as any), (Math as any).max), ((i as any).updateVal as any)((R as any).data, "starty", (t as any) - ((p as any) * ((l as any).boxMargin as any) as any), (Math as any).min), ((i as any).updateVal as any)((R as any).data, "stopy", (r as any) + ((p as any) * ((l as any).boxMargin as any) as any), (Math as any).max));
        }, "updateItemBounds");
      }
      (x as any)(s, "updateFn"), (((this as any).sequenceItems as any).forEach as any)((s as any)()), (((this as any).activations as any).forEach as any)((s as any)("activation"));
    }, "updateBounds"),
    insert: (x as any)(function (this: any, e: any, t: any, a: any, r: any): any {
      const i: any = ((N as any).getMin as any)(e, a),
        n: any = ((N as any).getMax as any)(e, a),
        s: any = ((N as any).getMin as any)(t, r),
        c: any = ((N as any).getMax as any)(t, r);
      ((this as any).updateVal as any)((R as any).data, "startx", i, (Math as any).min), ((this as any).updateVal as any)((R as any).data, "starty", s, (Math as any).min), ((this as any).updateVal as any)((R as any).data, "stopx", n, (Math as any).max), ((this as any).updateVal as any)((R as any).data, "stopy", c, (Math as any).max), ((this as any).updateBounds as any)(i, s, n, c);
    }, "insert"),
    newActivation: (x as any)(function (this: any, e: any, t: any, a: any): any {
      const r: any = ((a as any).get as any)((e as any).from),
        i: any = ((Ut as any)((e as any).from) as any).length || 0,
        n: any = (((r as any).x as any) + (((r as any).width as any) / (2 as any) as any) as any) + ((((i as any) - (1 as any) as any) * ((l as any).activationWidth as any) as any) / (2 as any) as any);
      (((this as any).activations as any).push as any)({
        startx: n,
        starty: ((this as any).verticalPos as any) + (2 as any),
        stopx: (n as any) + ((l as any).activationWidth as any),
        stopy: void 0,
        actor: (e as any).from,
        anchored: ((q as any).anchorElement as any)(t)
      });
    }, "newActivation"),
    endActivation: (x as any)(function (this: any, e: any): any {
      const t: any = (((((this as any).activations as any).map as any)(function (this: any, a: any): any {
        return (a as any).actor;
      }) as any).lastIndexOf as any)((e as any).from);
      return ((((this as any).activations as any).splice as any)(t, 1) as any)[0];
    }, "endActivation"),
    createLoop: (x as any)(function (this: any, e: any = {
      message: void 0,
      wrap: !1,
      width: void 0
    }, t: any): any {
      return {
        startx: void 0,
        starty: (this as any).verticalPos,
        stopx: void 0,
        stopy: void 0,
        title: (e as any).message,
        wrap: (e as any).wrap,
        width: (e as any).width,
        height: 0,
        fill: t
      };
    }, "createLoop"),
    newLoop: (x as any)(function (this: any, e: any = {
      message: void 0,
      wrap: !1,
      width: void 0
    }, t: any): any {
      (((this as any).sequenceItems as any).push as any)(((this as any).createLoop as any)(e, t));
    }, "newLoop"),
    endLoop: (x as any)(function (this: any): any {
      return (((this as any).sequenceItems as any).pop as any)();
    }, "endLoop"),
    isLoopOverlap: (x as any)(function (this: any): any {
      return ((this as any).sequenceItems as any).length ? (((this as any).sequenceItems as any)[(((this as any).sequenceItems as any).length as any) - (1 as any)] as any).overlap : !1;
    }, "isLoopOverlap"),
    addSectionToLoop: (x as any)(function (this: any, e: any): any {
      const t: any = (((this as any).sequenceItems as any).pop as any)();
      (t as any).sections = (t as any).sections || [], (t as any).sectionTitles = (t as any).sectionTitles || [], (((t as any).sections as any).push as any)({
        y: ((R as any).getVerticalPos as any)(),
        height: 0
      }), (((t as any).sectionTitles as any).push as any)(e), (((this as any).sequenceItems as any).push as any)(t);
    }, "addSectionToLoop"),
    saveVerticalPos: (x as any)(function (this: any): any {
      ((this as any).isLoopOverlap as any)() && ((this as any).savedVerticalPos = (this as any).verticalPos);
    }, "saveVerticalPos"),
    resetVerticalPos: (x as any)(function (this: any): any {
      ((this as any).isLoopOverlap as any)() && ((this as any).verticalPos = (this as any).savedVerticalPos);
    }, "resetVerticalPos"),
    bumpVerticalPos: (x as any)(function (this: any, e: any): any {
      (this as any).verticalPos = ((this as any).verticalPos as any) + (e as any), ((this as any).data as any).stopy = ((N as any).getMax as any)(((this as any).data as any).stopy, (this as any).verticalPos);
    }, "bumpVerticalPos"),
    getVerticalPos: (x as any)(function (this: any): any {
      return (this as any).verticalPos;
    }, "getVerticalPos"),
    getBounds: (x as any)(function (this: any): any {
      return {
        bounds: (this as any).data,
        models: (this as any).models
      };
    }, "getBounds")
  },
  $r: any = (x as any)(async function (this: any, e: any, t: any, a: any): Promise<any> {
    ((R as any).bumpVerticalPos as any)((l as any).boxMargin), (t as any).height = (l as any).boxMargin, (t as any).starty = ((R as any).getVerticalPos as any)();
    const r: any = (dt as any)();
    (r as any).x = (t as any).startx, (r as any).y = (t as any).starty, (r as any).width = (t as any).width || (l as any).width, (r as any).class = "note";
    const i: any = ((e as any).append as any)("g");
    ((i as any).attr as any)("data-et", "note"), ((i as any).attr as any)("data-id", ("i" as any) + (a as any));
    const n: any = ((q as any).drawRect as any)(i, r),
      s: any = (se as any)();
    (s as any).x = (t as any).startx, (s as any).y = (t as any).starty, (s as any).width = (r as any).width, (s as any).dy = "1em", (s as any).text = (t as any).message, (s as any).class = "noteText", (s as any).fontFamily = (l as any).noteFontFamily, (s as any).fontSize = (l as any).noteFontSize, (s as any).fontWeight = (l as any).noteFontWeight, (s as any).anchor = (l as any).noteAlign, (s as any).textMargin = (l as any).noteMargin, (s as any).valign = "center";
    const c: any = (Q as any)((s as any).text) ? await (qt as any)(i, s) : (At as any)(i, s),
      E: any = ((Math as any).round as any)(((((c as any).map as any)((h: any): any => (((((((h as any)._groups || h) as any)[0] as any)[0] as any).getBBox as any)() as any).height) as any).reduce as any)((h: any, p: any): any => (h as any) + (p as any)));
    ((n as any).attr as any)("height", (E as any) + ((2 as any) * ((l as any).noteMargin as any) as any)), (t as any).height += (E as any) + ((2 as any) * ((l as any).noteMargin as any) as any), ((R as any).bumpVerticalPos as any)((E as any) + ((2 as any) * ((l as any).noteMargin as any) as any)), (t as any).stopy = (((t as any).starty as any) + (E as any) as any) + ((2 as any) * ((l as any).noteMargin as any) as any), (t as any).stopx = ((t as any).startx as any) + ((r as any).width as any), ((R as any).insert as any)((t as any).startx, (t as any).starty, (t as any).stopx, (t as any).stopy), (((R as any).models as any).addNote as any)(t);
  }, "drawNote"),
  ve: any = (x as any)(function (this: any, e: any, t: any, a: any, r: any, i: any, n: any, s: any): any {
    const c: any = (((r as any).db as any).getActors as any)(),
      E: any = ((c as any).get as any)((t as any).from),
      h: any = ((c as any).get as any)((t as any).to),
      p: any = (a as any).sequenceVisible;
    let _: any = ((E as any).x as any) + (((E as any).width as any) / (2 as any) as any),
      u: any = ((h as any).x as any) + (((h as any).width as any) / (2 as any) as any);
    const O: any = (_ as any) <= (u as any),
      T: any = (Je as any)(t, r),
      g: any = ((e as any).append as any)("g"),
      f: number = 16.5,
      I: any = (x as any)((D: any, M: any): any => {
        const V: any = D ? f : -f;
        return M ? -V : V;
      }, "getCircleOffset"),
      L: any = (x as any)((D: any): any => {
        ((((((((((((g as any).append as any)("circle") as any).attr as any)("cx", D) as any).attr as any)("cy", s) as any).attr as any)("r", 5) as any).attr as any)("width", 10) as any).attr as any)("height", 10);
      }, "drawCircle"),
      {
        CENTRAL_CONNECTION: b,
        CENTRAL_CONNECTION_REVERSE: w,
        CENTRAL_CONNECTION_DUAL: A
      }: any = ((r as any).db as any).LINETYPE;
    if (p) switch ((t as any).centralConnection) {
      case b:
        T && (u += (I as any)(O, !0));
        break;
      case w:
        T || (_ += (I as any)(O, !1));
        break;
      case A:
        T ? u += (I as any)(O, !0) : _ += (I as any)(O, !1);
        break;
    }
    switch ((t as any).centralConnection) {
      case b:
        (L as any)(u);
        break;
      case w:
        (L as any)(_);
        break;
      case A:
        (L as any)(_), (L as any)(u);
        break;
    }
  }, "drawCentralConnection"),
  Rt: any = (x as any)((e: any): any => ({
    fontFamily: (e as any).messageFontFamily,
    fontSize: (e as any).messageFontSize,
    fontWeight: (e as any).messageFontWeight
  }), "messageFont"),
  bt: any = (x as any)((e: any): any => ({
    fontFamily: (e as any).noteFontFamily,
    fontSize: (e as any).noteFontSize,
    fontWeight: (e as any).noteFontWeight
  }), "noteFont"),
  re: any = (x as any)((e: any): any => ({
    fontFamily: (e as any).actorFontFamily,
    fontSize: (e as any).actorFontSize,
    fontWeight: (e as any).actorFontWeight
  }), "actorFont");
async function qe(this: any, e: any, t: any): Promise<any> {
  ((R as any).bumpVerticalPos as any)(10);
  const {
      startx: a,
      stopx: r,
      message: i
    }: any = t,
    n: any = (((N as any).splitBreaks as any)(i) as any).length,
    s: any = (Q as any)(i),
    c: any = s ? await (kt as any)(i, ($ as any)()) : ((Z as any).calculateTextDimensions as any)(i, (Rt as any)(l));
  if (!s) {
    const _: any = ((c as any).height as any) / (n as any);
    (t as any).height += _, ((R as any).bumpVerticalPos as any)(_);
  }
  let E: any,
    h: any = ((c as any).height as any) - (10 as any);
  const p: any = (c as any).width;
  if ((a as any) === (r as any)) {
    E = (((R as any).getVerticalPos as any)() as any) + (h as any), (l as any).rightAngles || (h += (l as any).boxMargin, E = (((R as any).getVerticalPos as any)() as any) + (h as any)), h += 30;
    const _: any = ((N as any).getMax as any)((p as any) / (2 as any), ((l as any).width as any) / (2 as any));
    ((R as any).insert as any)((a as any) - (_ as any), ((((R as any).getVerticalPos as any)() as any) - (10 as any) as any) + (h as any), (r as any) + (_ as any), ((((R as any).getVerticalPos as any)() as any) + (30 as any) as any) + (h as any));
  } else h += (l as any).boxMargin, E = (((R as any).getVerticalPos as any)() as any) + (h as any), ((R as any).insert as any)(a, (E as any) - (10 as any), r, E);
  return ((R as any).bumpVerticalPos as any)(h), (t as any).height += h, (t as any).stopy = ((t as any).starty as any) + ((t as any).height as any), ((R as any).insert as any)((t as any).fromBounds, (t as any).starty, (t as any).toBounds, (t as any).stopy), E;
}
(x as any)(qe, "boundMessage");
var jr: any = (x as any)(async function (this: any, e: any, t: any, a: any, r: any, i: any, n: any): Promise<any> {
    const {
        startx: s,
        stopx: c,
        starty: E,
        message: h,
        type: p,
        sequenceIndex: _,
        sequenceVisible: u
      }: any = t,
      O: any = ((Z as any).calculateTextDimensions as any)(h, (Rt as any)(l)),
      T: any = (se as any)();
    (T as any).x = ((Math as any).min as any)(s, c), (T as any).y = (E as any) + (10 as any), (T as any).width = ((Math as any).abs as any)((c as any) - (s as any)), (T as any).class = "messageText", (T as any).dy = "1em", (T as any).text = h, (T as any).fontFamily = (l as any).messageFontFamily, (T as any).fontSize = (l as any).messageFontSize, (T as any).fontWeight = (l as any).messageFontWeight, (T as any).anchor = (l as any).messageAlign, (T as any).valign = "center", (T as any).textMargin = (l as any).wrapPadding, (T as any).tspan = !1, (Q as any)((T as any).text) ? await (qt as any)(e, T, {
      startx: s,
      stopx: c,
      starty: a
    }) : (At as any)(e, T);
    const g: any = (O as any).width;
    let f: any;
    if ((s as any) === (c as any)) {
      const L: any = u || (l as any).showSequenceNumbers,
        b: any = (Je as any)(i, r),
        w: any = (na as any)(i, r),
        A: any = (s as any) + ((L && (b || w) ? 10 : 0) as any);
      (l as any).rightAngles ? f = ((((e as any).append as any)("path") as any).attr as any)("d", `M  ${A},${a} H ${(s as any) + (((N as any).getMax as any)(((l as any).width as any) / (2 as any), (g as any) / (2 as any)) as any)} V ${(a as any) + (25 as any)} H ${s}`) : f = ((((e as any).append as any)("path") as any).attr as any)("d", ((((((((((((((("M " as any) + (A as any) as any) + ("," as any) as any) + (a as any) as any) + (" C " as any) as any) + ((A as any) + (60 as any) as any) as any) + ("," as any) as any) + ((a as any) - (10 as any) as any) as any) + (" " as any) as any) + ((s as any) + (60 as any) as any) as any) + ("," as any) as any) + ((a as any) + (30 as any) as any) as any) + (" " as any) as any) + (s as any) as any) + ("," as any) as any) + ((a as any) + (20 as any) as any)), (te as any)(i, r) && (ve as any)(e, i, t, r, s, c, a);
    } else f = ((e as any).append as any)("line"), ((f as any).attr as any)("x1", s), ((f as any).attr as any)("y1", a), ((f as any).attr as any)("x2", c), ((f as any).attr as any)("y2", a), (te as any)(i, r) && (ve as any)(e, i, t, r, s, c, a);
    (p as any) === ((((r as any).db as any).LINETYPE as any).DOTTED as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).DOTTED_CROSS as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).DOTTED_POINT as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).DOTTED_OPEN as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).BIDIRECTIONAL_DOTTED as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_TOP_DOTTED as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_BOTTOM_DOTTED as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).STICK_TOP_DOTTED as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).STICK_BOTTOM_DOTTED as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_ARROW_TOP_REVERSE_DOTTED as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_ARROW_BOTTOM_REVERSE_DOTTED as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).STICK_ARROW_TOP_REVERSE_DOTTED as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).STICK_ARROW_BOTTOM_REVERSE_DOTTED as any) ? (((f as any).style as any)("stroke-dasharray", "3, 3"), ((f as any).attr as any)("class", "messageLine1")) : ((f as any).attr as any)("class", "messageLine0"), ((f as any).attr as any)("data-et", "message"), ((f as any).attr as any)("data-id", ("i" as any) + ((t as any).id as any)), ((f as any).attr as any)("data-from", (t as any).from), ((f as any).attr as any)("data-to", (t as any).to);
    let I: any = "";
    if ((l as any).arrowMarkerAbsolute && (I = (Er as any)(!0)), ((f as any).attr as any)("stroke-width", 2), ((f as any).attr as any)("stroke", "none"), ((f as any).style as any)("fill", "none"), ((p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_TOP as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_TOP_DOTTED as any)) && ((f as any).attr as any)("marker-end", (((("url(" as any) + (I as any) as any) + ("#" as any) as any) + (n as any) as any) + ("-solidTopArrowHead)" as any)), ((p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_BOTTOM as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_BOTTOM_DOTTED as any)) && ((f as any).attr as any)("marker-end", (((("url(" as any) + (I as any) as any) + ("#" as any) as any) + (n as any) as any) + ("-solidBottomArrowHead)" as any)), ((p as any) === ((((r as any).db as any).LINETYPE as any).STICK_TOP as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).STICK_TOP_DOTTED as any)) && ((f as any).attr as any)("marker-end", (((("url(" as any) + (I as any) as any) + ("#" as any) as any) + (n as any) as any) + ("-stickTopArrowHead)" as any)), ((p as any) === ((((r as any).db as any).LINETYPE as any).STICK_BOTTOM as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).STICK_BOTTOM_DOTTED as any)) && ((f as any).attr as any)("marker-end", (((("url(" as any) + (I as any) as any) + ("#" as any) as any) + (n as any) as any) + ("-stickBottomArrowHead)" as any)), ((p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_ARROW_TOP_REVERSE as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_ARROW_TOP_REVERSE_DOTTED as any)) && ((f as any).attr as any)("marker-start", (((("url(" as any) + (I as any) as any) + ("#" as any) as any) + (n as any) as any) + ("-solidBottomArrowHead)" as any)), ((p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_ARROW_BOTTOM_REVERSE as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_ARROW_BOTTOM_REVERSE_DOTTED as any)) && ((f as any).attr as any)("marker-start", (((("url(" as any) + (I as any) as any) + ("#" as any) as any) + (n as any) as any) + ("-solidTopArrowHead)" as any)), ((p as any) === ((((r as any).db as any).LINETYPE as any).STICK_ARROW_TOP_REVERSE as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).STICK_ARROW_TOP_REVERSE_DOTTED as any)) && ((f as any).attr as any)("marker-start", (((("url(" as any) + (I as any) as any) + ("#" as any) as any) + (n as any) as any) + ("-stickBottomArrowHead)" as any)), ((p as any) === ((((r as any).db as any).LINETYPE as any).STICK_ARROW_BOTTOM_REVERSE as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).STICK_ARROW_BOTTOM_REVERSE_DOTTED as any)) && ((f as any).attr as any)("marker-start", (((("url(" as any) + (I as any) as any) + ("#" as any) as any) + (n as any) as any) + ("-stickTopArrowHead)" as any)), ((p as any) === ((((r as any).db as any).LINETYPE as any).SOLID as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).DOTTED as any)) && ((f as any).attr as any)("marker-end", (((("url(" as any) + (I as any) as any) + ("#" as any) as any) + (n as any) as any) + ("-arrowhead)" as any)), ((p as any) === ((((r as any).db as any).LINETYPE as any).BIDIRECTIONAL_SOLID as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).BIDIRECTIONAL_DOTTED as any)) && (((f as any).attr as any)("marker-start", (((("url(" as any) + (I as any) as any) + ("#" as any) as any) + (n as any) as any) + ("-arrowhead)" as any)), ((f as any).attr as any)("marker-end", (((("url(" as any) + (I as any) as any) + ("#" as any) as any) + (n as any) as any) + ("-arrowhead)" as any))), ((p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_POINT as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).DOTTED_POINT as any)) && ((f as any).attr as any)("marker-end", (((("url(" as any) + (I as any) as any) + ("#" as any) as any) + (n as any) as any) + ("-filled-head)" as any)), ((p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_CROSS as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).DOTTED_CROSS as any)) && ((f as any).attr as any)("marker-end", (((("url(" as any) + (I as any) as any) + ("#" as any) as any) + (n as any) as any) + ("-crosshead)" as any)), u || (l as any).showSequenceNumbers) {
      const L: any = (p as any) === ((((r as any).db as any).LINETYPE as any).BIDIRECTIONAL_SOLID as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).BIDIRECTIONAL_DOTTED as any),
        b: any = (p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_ARROW_TOP_REVERSE as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_ARROW_TOP_REVERSE_DOTTED as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_ARROW_BOTTOM_REVERSE as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).SOLID_ARROW_BOTTOM_REVERSE_DOTTED as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).STICK_ARROW_TOP_REVERSE as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).STICK_ARROW_TOP_REVERSE_DOTTED as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).STICK_ARROW_BOTTOM_REVERSE as any) || (p as any) === ((((r as any).db as any).LINETYPE as any).STICK_ARROW_BOTTOM_REVERSE_DOTTED as any),
        w: number = 6,
        A: any = (te as any)(i, r);
      let D: any = s,
        M: any = c;
      L ? ((s as any) < (c as any) ? D = (s as any) + ((w as any) * (2 as any) as any) : (D = ((s as any) - (w as any) as any) + ((A ? -5 : 0) as any), D += (i?.centralConnection as any) === ((((r as any).db as any).LINETYPE as any).CENTRAL_CONNECTION_DUAL as any) || (i?.centralConnection as any) === ((((r as any).db as any).LINETYPE as any).CENTRAL_CONNECTION_REVERSE as any) ? -7.5 : 0), ((f as any).attr as any)("x1", D)) : b ? ((c as any) > (s as any) ? M = (c as any) - ((2 as any) * (w as any) as any) : (M = (c as any) - (w as any), D += (i?.centralConnection as any) === ((((r as any).db as any).LINETYPE as any).CENTRAL_CONNECTION_DUAL as any) || (i?.centralConnection as any) === ((((r as any).db as any).LINETYPE as any).CENTRAL_CONNECTION_REVERSE as any) ? -7.5 : 0), M += A ? 15 : 0, ((f as any).attr as any)("x2", M), ((f as any).attr as any)("x1", D)) : ((f as any).attr as any)("x1", (s as any) + (w as any));
      let V: any = 0;
      const W: any = (s as any) === (c as any),
        U: any = (s as any) <= (c as any);
      W ? V = ((t as any).fromBounds as any) + (1 as any) : b ? V = U ? ((t as any).toBounds as any) - (1 as any) : ((t as any).fromBounds as any) + (1 as any) : V = U ? ((t as any).fromBounds as any) + (1 as any) : ((t as any).toBounds as any) - (1 as any);
      let G: any = "12px";
      const X: any = (((_ as any).toString as any)() as any).length;
      (X as any) > (5 as any) ? G = "7px" : (X as any) > (3 as any) && (G = "9px"), ((((((((((((((e as any).append as any)("line") as any).attr as any)("x1", V) as any).attr as any)("y1", a) as any).attr as any)("x2", V) as any).attr as any)("y2", a) as any).attr as any)("stroke-width", 0) as any).attr as any)("marker-start", (((("url(" as any) + (I as any) as any) + ("#" as any) as any) + (n as any) as any) + ("-sequencenumber)" as any)), ((((((((((((((((e as any).append as any)("text") as any).attr as any)("x", V) as any).attr as any)("y", (a as any) + (4 as any)) as any).attr as any)("font-family", "sans-serif") as any).attr as any)("font-size", G) as any).attr as any)("text-anchor", "middle") as any).attr as any)("class", "sequenceNumber") as any).text as any)(_);
    }
  }, "drawMessage"),
  ta: any = (x as any)(function (this: any, e: any, t: any, a: any, r: any, i: any, n: any, s: any): any {
    let c: any = 0,
      E: any = 0,
      h: any,
      p: any = 0;
    for (const _ of r) {
      const u: any = ((t as any).get as any)(_),
        O: any = (u as any).box;
      h && (h as any) != (O as any) && (s || (((R as any).models as any).addBox as any)(h), E += ((l as any).boxMargin as any) + ((h as any).margin as any)), O && (O as any) != (h as any) && (s || ((O as any).x = (c as any) + (E as any), (O as any).y = i), E += (O as any).margin), (u as any).width = ((N as any).getMax as any)((u as any).width || (l as any).width, (l as any).width), (u as any).height = ((N as any).getMax as any)((u as any).height || (l as any).height, (l as any).height), (u as any).margin = (u as any).margin || (l as any).actorMargin, p = ((N as any).getMax as any)(p, (u as any).height), ((a as any).get as any)((u as any).name) && (E += ((u as any).width as any) / (2 as any)), (u as any).x = (c as any) + (E as any), (u as any).starty = ((R as any).getVerticalPos as any)(), ((R as any).insert as any)((u as any).x, i, ((u as any).x as any) + ((u as any).width as any), (u as any).height), c += ((u as any).width as any) + (E as any), (u as any).box && (((u as any).box as any).width = ((c as any) + ((O as any).margin as any) as any) - (((u as any).box as any).x as any)), E = (u as any).margin, h = (u as any).box, (((R as any).models as any).addActor as any)(u);
    }
    h && !s && (((R as any).models as any).addBox as any)(h), ((R as any).bumpVerticalPos as any)(p);
  }, "addActorRenderingData"),
  ae: any = (x as any)(async function (this: any, e: any, t: any, a: any, r: any, i: any, n: any, s: any): Promise<any> {
    if (r) {
      let c: any = 0;
      ((R as any).bumpVerticalPos as any)(((l as any).boxMargin as any) * (2 as any));
      for (const E of a) {
        const h: any = ((t as any).get as any)(E);
        (h as any).stopy || ((h as any).stopy = ((R as any).getVerticalPos as any)());
        const p: any = await ((q as any).drawActor as any)(e, h, l, !0, i, n, s);
        c = ((N as any).getMax as any)(c, p);
      }
      ((R as any).bumpVerticalPos as any)((c as any) + ((l as any).boxMargin as any));
    } else for (const c of a) {
      const E: any = ((t as any).get as any)(c);
      await ((q as any).drawActor as any)(e, E, l, !1, i, n, s);
    }
  }, "drawActors"),
  He: any = (x as any)(function (this: any, e: any, t: any, a: any, r: any): any {
    let i: any = 0,
      n: any = 0;
    for (const s of a) {
      const c: any = ((t as any).get as any)(s),
        E: any = (ra as any)(c),
        h: any = ((q as any).drawPopup as any)(e, c, E, l, (l as any).forceMenus, r);
      ((h as any).height as any) > (i as any) && (i = (h as any).height), (((h as any).width as any) + ((c as any).x as any) as any) > (n as any) && (n = ((h as any).width as any) + ((c as any).x as any));
    }
    return {
      maxHeight: i,
      maxWidth: n
    };
  }, "drawActorsPopup"),
  ze: any = (x as any)(function (this: any, e: any): any {
    (sr as any)(l, e), (e as any).fontFamily && ((l as any).actorFontFamily = (l as any).noteFontFamily = (l as any).messageFontFamily = (e as any).fontFamily), (e as any).fontSize && ((l as any).actorFontSize = (l as any).noteFontSize = (l as any).messageFontSize = (e as any).fontSize), (e as any).fontWeight && ((l as any).actorFontWeight = (l as any).noteFontWeight = (l as any).messageFontWeight = (e as any).fontWeight);
  }, "setConf"),
  Ut: any = (x as any)(function (this: any, e: any): any {
    return (((R as any).activations as any).filter as any)(function (this: any, t: any): any {
      return ((t as any).actor as any) === (e as any);
    });
  }, "actorActivations"),
  Ce: any = (x as any)(function (this: any, e: any, t: any): any {
    const a: any = ((t as any).get as any)(e),
      r: any = (Ut as any)(e),
      i: any = ((r as any).reduce as any)(function (this: any, s: any, c: any): any {
        return ((N as any).getMin as any)(s, (c as any).startx);
      }, (((a as any).x as any) + (((a as any).width as any) / (2 as any) as any) as any) - (1 as any)),
      n: any = ((r as any).reduce as any)(function (this: any, s: any, c: any): any {
        return ((N as any).getMax as any)(s, (c as any).stopx);
      }, (((a as any).x as any) + (((a as any).width as any) / (2 as any) as any) as any) + (1 as any));
    return [i, n];
  }, "activationBounds");
function ht(this: any, e: any, t: any, a: any, r: any, i: any): any {
  ((R as any).bumpVerticalPos as any)(a);
  let n: any = r;
  if ((t as any).id && (t as any).message && (e as any)[(t as any).id]) {
    const s: any = ((e as any)[(t as any).id] as any).width,
      c: any = (Rt as any)(l);
    (t as any).message = ((Z as any).wrapLabel as any)(`[${(t as any).message}]`, (s as any) - ((2 as any) * ((l as any).wrapPadding as any) as any), c), (t as any).width = s, (t as any).wrap = !0;
    const E: any = ((Z as any).calculateTextDimensions as any)((t as any).message, c),
      h: any = ((N as any).getMax as any)((E as any).height, (l as any).labelBoxHeight);
    n = (r as any) + (h as any), ((at as any).debug as any)(`${h} - ${(t as any).message}`);
  }
  (i as any)(t), ((R as any).bumpVerticalPos as any)(n);
}
(x as any)(ht, "adjustLoopHeightForWrap");
function Ue(this: any, e: any, t: any, a: any, r: any, i: any, n: any, s: any): any {
  function c(this: any, p: any, _: any): any {
    ((p as any).x as any) < ((((i as any).get as any)((e as any).from) as any).x as any) ? (((R as any).insert as any)(((t as any).stopx as any) - (_ as any), (t as any).starty, (t as any).startx, (((t as any).stopy as any) + (((p as any).height as any) / (2 as any) as any) as any) + ((l as any).noteMargin as any)), (t as any).stopx = ((t as any).stopx as any) + (_ as any)) : (((R as any).insert as any)((t as any).startx, (t as any).starty, ((t as any).stopx as any) + (_ as any), (((t as any).stopy as any) + (((p as any).height as any) / (2 as any) as any) as any) + ((l as any).noteMargin as any)), (t as any).stopx = ((t as any).stopx as any) - (_ as any));
  }
  (x as any)(c, "receiverAdjustment");
  function E(this: any, p: any, _: any): any {
    ((p as any).x as any) < ((((i as any).get as any)((e as any).to) as any).x as any) ? (((R as any).insert as any)(((t as any).startx as any) - (_ as any), (t as any).starty, (t as any).stopx, (((t as any).stopy as any) + (((p as any).height as any) / (2 as any) as any) as any) + ((l as any).noteMargin as any)), (t as any).startx = ((t as any).startx as any) + (_ as any)) : (((R as any).insert as any)((t as any).stopx, (t as any).starty, ((t as any).startx as any) + (_ as any), (((t as any).stopy as any) + (((p as any).height as any) / (2 as any) as any) as any) + ((l as any).noteMargin as any)), (t as any).startx = ((t as any).startx as any) - (_ as any));
  }
  (x as any)(E, "senderAdjustment");
  const h: any = [(Kt as any).ACTOR, (Kt as any).CONTROL, (Kt as any).ENTITY, (Kt as any).DATABASE];
  if ((((n as any).get as any)((e as any).to) as any) == (r as any)) {
    const p: any = ((i as any).get as any)((e as any).to),
      _: any = ((h as any).includes as any)((p as any).type) ? ((It as any) / (2 as any) as any) + (3 as any) : (((p as any).width as any) / (2 as any) as any) + (3 as any);
    (c as any)(p, _), (p as any).starty = (a as any) - (((p as any).height as any) / (2 as any) as any), ((R as any).bumpVerticalPos as any)(((p as any).height as any) / (2 as any));
  } else if ((((s as any).get as any)((e as any).from) as any) == (r as any)) {
    const p: any = ((i as any).get as any)((e as any).from);
    if ((l as any).mirrorActors) {
      const _: any = ((h as any).includes as any)((p as any).type) ? (It as any) / (2 as any) : ((p as any).width as any) / (2 as any);
      (E as any)(p, _);
    }
    (p as any).stopy = (a as any) - (((p as any).height as any) / (2 as any) as any), ((R as any).bumpVerticalPos as any)(((p as any).height as any) / (2 as any));
  } else if ((((s as any).get as any)((e as any).to) as any) == (r as any)) {
    const p: any = ((i as any).get as any)((e as any).to);
    if ((l as any).mirrorActors) {
      const _: any = ((h as any).includes as any)((p as any).type) ? ((It as any) / (2 as any) as any) + (3 as any) : (((p as any).width as any) / (2 as any) as any) + (3 as any);
      (c as any)(p, _);
    }
    (p as any).stopy = (a as any) - (((p as any).height as any) / (2 as any) as any), ((R as any).bumpVerticalPos as any)(((p as any).height as any) / (2 as any));
  }
}
(x as any)(Ue, "adjustCreatedDestroyedData");
var ea: any = (x as any)(async function (this: any, e: any, t: any, a: any, r: any): Promise<any> {
  const {
    securityLevel: i,
    sequence: n,
    look: s,
    themeVariables: c
  }: any = ($ as any)();
  l = n;
  let E: any;
  (i as any) === ("sandbox" as any) && (E = (Yt as any)(("#i" as any) + (t as any)));
  const h: any = (i as any) === ("sandbox" as any) ? (Yt as any)((((((E as any).nodes as any)() as any)[0] as any).contentDocument as any).body) : (Yt as any)("body"),
    p: any = (i as any) === ("sandbox" as any) ? ((((E as any).nodes as any)() as any)[0] as any).contentDocument : document;
  ((R as any).init as any)(), ((at as any).debug as any)((r as any).db);
  const _: any = (i as any) === ("sandbox" as any) ? ((h as any).select as any)(`[id="${t}"]`) : (Yt as any)(`[id="${t}"]`),
    u: any = (((r as any).db as any).getActors as any)(),
    O: any = (((r as any).db as any).getCreatedActors as any)(),
    T: any = (((r as any).db as any).getDestroyedActors as any)(),
    g: any = (((r as any).db as any).getBoxes as any)();
  let f: any = (((r as any).db as any).getActorKeys as any)();
  const I: any = (((r as any).db as any).getMessages as any)(),
    L: any = (((r as any).db as any).getDiagramTitle as any)(),
    b: any = (((r as any).db as any).hasAtLeastOneBox as any)(),
    w: any = (((r as any).db as any).hasAtLeastOneBoxWithTitle as any)(),
    A: any = await (Ge as any)(u, I, r);
  if ((l as any).height = await (Xe as any)(u, A, g), ((q as any).insertComputerIcon as any)(_, t), ((q as any).insertDatabaseIcon as any)(_, t), ((q as any).insertClockIcon as any)(_, t), b && (((R as any).bumpVerticalPos as any)((l as any).boxMargin), w && ((R as any).bumpVerticalPos as any)(((g as any)[0] as any).textMaxHeight)), ((l as any).hideUnusedParticipants as any) === (!0 as any)) {
    const m: any = new (Set as any)();
    ((I as any).forEach as any)((k: any): any => {
      ((m as any).add as any)((k as any).from), ((m as any).add as any)((k as any).to);
    }), f = ((f as any).filter as any)((k: any): any => ((m as any).has as any)(k));
  }
  const D: any = new (Map as any)(((f as any).map as any)((m: any, k: any): any => [((u as any).get as any)(m)?.name ?? m, k]));
  (ta as any)(_, u, O, f, 0, I, !1);
  const M: any = await (ca as any)(I, u, A, r);
  ((q as any).insertArrowHead as any)(_, t), ((q as any).insertArrowCrossHead as any)(_, t), ((q as any).insertArrowFilledHead as any)(_, t), ((q as any).insertSequenceNumber as any)(_, t), ((q as any).insertSolidTopArrowHead as any)(_, t), ((q as any).insertSolidBottomArrowHead as any)(_, t), ((q as any).insertStickTopArrowHead as any)(_, t), ((q as any).insertStickBottomArrowHead as any)(_, t), (s as any) === ("neo" as any) && ((q as any).insertDropShadow as any)(_, l);
  function V(this: any, m: any, k: any): any {
    const lt: any = ((R as any).endActivation as any)(m);
    (((lt as any).starty as any) + (18 as any) as any) > (k as any) && ((lt as any).starty = (k as any) - (6 as any), k += 12), ((q as any).drawActivation as any)(_, lt, k, l, ((Ut as any)((m as any).from) as any).length, r, D), ((R as any).insert as any)((lt as any).startx, (k as any) - (10 as any), (lt as any).stopx, k);
  }
  (x as any)(V, "activeEnd");
  let W: any = 1,
    U: any = 1;
  const G: any = [],
    X: any = [];
  let nt: any = 0;
  for (const m of I) {
    let k: any, lt: any, et: any;
    switch ((m as any).type) {
      case (((r as any).db as any).LINETYPE as any).NOTE:
        ((R as any).resetVerticalPos as any)(), lt = (m as any).noteModel, await ($r as any)(_, lt, (m as any).id);
        break;
      case (((r as any).db as any).LINETYPE as any).ACTIVE_START:
        ((R as any).newActivation as any)(m, _, u);
        break;
      case (((r as any).db as any).LINETYPE as any).CENTRAL_CONNECTION:
        ((R as any).newActivation as any)(m, _, u);
        break;
      case (((r as any).db as any).LINETYPE as any).CENTRAL_CONNECTION_REVERSE:
        ((R as any).newActivation as any)(m, _, u);
        break;
      case (((r as any).db as any).LINETYPE as any).ACTIVE_END:
        (V as any)(m, ((R as any).getVerticalPos as any)());
        break;
      case (((r as any).db as any).LINETYPE as any).LOOP_START:
        (ht as any)(M, m, (l as any).boxMargin, ((l as any).boxMargin as any) + ((l as any).boxTextMargin as any), (K: any): any => ((R as any).newLoop as any)(K));
        break;
      case (((r as any).db as any).LINETYPE as any).LOOP_END:
        k = ((R as any).endLoop as any)(), await ((q as any).drawLoop as any)(_, k, "loop", l, m), ((R as any).bumpVerticalPos as any)(((k as any).stopy as any) - (((R as any).getVerticalPos as any)() as any)), (((R as any).models as any).addLoop as any)(k);
        break;
      case (((r as any).db as any).LINETYPE as any).RECT_START:
        (ht as any)(M, m, (l as any).boxMargin, (l as any).boxMargin, (K: any): any => {
          let Ot: any = (K as any).message;
          Ot || (Ot = c?.rectBkgColor || c?.actorBkg || "rgba(128, 128, 128, 0.5)"), ((R as any).newLoop as any)(void 0, Ot);
        });
        break;
      case (((r as any).db as any).LINETYPE as any).RECT_END:
        k = ((R as any).endLoop as any)(), ((X as any).push as any)(k), (((R as any).models as any).addLoop as any)(k), ((R as any).bumpVerticalPos as any)(((k as any).stopy as any) - (((R as any).getVerticalPos as any)() as any));
        break;
      case (((r as any).db as any).LINETYPE as any).OPT_START:
        (ht as any)(M, m, (l as any).boxMargin, ((l as any).boxMargin as any) + ((l as any).boxTextMargin as any), (K: any): any => ((R as any).newLoop as any)(K));
        break;
      case (((r as any).db as any).LINETYPE as any).OPT_END:
        k = ((R as any).endLoop as any)(), await ((q as any).drawLoop as any)(_, k, "opt", l, m), ((R as any).bumpVerticalPos as any)(((k as any).stopy as any) - (((R as any).getVerticalPos as any)() as any)), (((R as any).models as any).addLoop as any)(k);
        break;
      case (((r as any).db as any).LINETYPE as any).ALT_START:
        (ht as any)(M, m, (l as any).boxMargin, ((l as any).boxMargin as any) + ((l as any).boxTextMargin as any), (K: any): any => ((R as any).newLoop as any)(K));
        break;
      case (((r as any).db as any).LINETYPE as any).ALT_ELSE:
        (ht as any)(M, m, ((l as any).boxMargin as any) + ((l as any).boxTextMargin as any), (l as any).boxMargin, (K: any): any => ((R as any).addSectionToLoop as any)(K));
        break;
      case (((r as any).db as any).LINETYPE as any).ALT_END:
        k = ((R as any).endLoop as any)(), await ((q as any).drawLoop as any)(_, k, "alt", l, m), ((R as any).bumpVerticalPos as any)(((k as any).stopy as any) - (((R as any).getVerticalPos as any)() as any)), (((R as any).models as any).addLoop as any)(k);
        break;
      case (((r as any).db as any).LINETYPE as any).PAR_START:
      case (((r as any).db as any).LINETYPE as any).PAR_OVER_START:
        (ht as any)(M, m, (l as any).boxMargin, ((l as any).boxMargin as any) + ((l as any).boxTextMargin as any), (K: any): any => ((R as any).newLoop as any)(K)), ((R as any).saveVerticalPos as any)();
        break;
      case (((r as any).db as any).LINETYPE as any).PAR_AND:
        (ht as any)(M, m, ((l as any).boxMargin as any) + ((l as any).boxTextMargin as any), (l as any).boxMargin, (K: any): any => ((R as any).addSectionToLoop as any)(K));
        break;
      case (((r as any).db as any).LINETYPE as any).PAR_END:
        k = ((R as any).endLoop as any)(), await ((q as any).drawLoop as any)(_, k, "par", l, m), ((R as any).bumpVerticalPos as any)(((k as any).stopy as any) - (((R as any).getVerticalPos as any)() as any)), (((R as any).models as any).addLoop as any)(k);
        break;
      case (((r as any).db as any).LINETYPE as any).AUTONUMBER:
        W = ((m as any).message as any).start || W, U = ((m as any).message as any).step || U, ((m as any).message as any).visible ? (((r as any).db as any).enableSequenceNumbers as any)() : (((r as any).db as any).disableSequenceNumbers as any)();
        break;
      case (((r as any).db as any).LINETYPE as any).CRITICAL_START:
        (ht as any)(M, m, (l as any).boxMargin, ((l as any).boxMargin as any) + ((l as any).boxTextMargin as any), (K: any): any => ((R as any).newLoop as any)(K));
        break;
      case (((r as any).db as any).LINETYPE as any).CRITICAL_OPTION:
        (ht as any)(M, m, ((l as any).boxMargin as any) + ((l as any).boxTextMargin as any), (l as any).boxMargin, (K: any): any => ((R as any).addSectionToLoop as any)(K));
        break;
      case (((r as any).db as any).LINETYPE as any).CRITICAL_END:
        k = ((R as any).endLoop as any)(), await ((q as any).drawLoop as any)(_, k, "critical", l, m), ((R as any).bumpVerticalPos as any)(((k as any).stopy as any) - (((R as any).getVerticalPos as any)() as any)), (((R as any).models as any).addLoop as any)(k);
        break;
      case (((r as any).db as any).LINETYPE as any).BREAK_START:
        (ht as any)(M, m, (l as any).boxMargin, ((l as any).boxMargin as any) + ((l as any).boxTextMargin as any), (K: any): any => ((R as any).newLoop as any)(K));
        break;
      case (((r as any).db as any).LINETYPE as any).BREAK_END:
        k = ((R as any).endLoop as any)(), await ((q as any).drawLoop as any)(_, k, "break", l, m), ((R as any).bumpVerticalPos as any)(((k as any).stopy as any) - (((R as any).getVerticalPos as any)() as any)), (((R as any).models as any).addLoop as any)(k);
        break;
      default:
        try {
          et = (m as any).msgModel, (et as any).starty = ((R as any).getVerticalPos as any)(), (et as any).sequenceIndex = W, (et as any).sequenceVisible = (((r as any).db as any).showSequenceNumbers as any)(), (et as any).id = (m as any).id, (et as any).from = (m as any).from, (et as any).to = (m as any).to;
          const K: any = await (qe as any)(_, et);
          (Ue as any)(m, et, K, nt, u, O, T), ((G as any).push as any)({
            messageModel: et,
            lineStartY: K,
            msg: m
          }), (((R as any).models as any).addMessage as any)(et);
        } catch (K: any) {
          ((at as any).error as any)("error while drawing message", K);
        }
    }
    (([(((r as any).db as any).LINETYPE as any).SOLID_OPEN, (((r as any).db as any).LINETYPE as any).DOTTED_OPEN, (((r as any).db as any).LINETYPE as any).SOLID, (((r as any).db as any).LINETYPE as any).SOLID_TOP, (((r as any).db as any).LINETYPE as any).SOLID_BOTTOM, (((r as any).db as any).LINETYPE as any).STICK_TOP, (((r as any).db as any).LINETYPE as any).STICK_BOTTOM, (((r as any).db as any).LINETYPE as any).SOLID_TOP_DOTTED, (((r as any).db as any).LINETYPE as any).SOLID_BOTTOM_DOTTED, (((r as any).db as any).LINETYPE as any).STICK_TOP_DOTTED, (((r as any).db as any).LINETYPE as any).STICK_BOTTOM_DOTTED, (((r as any).db as any).LINETYPE as any).SOLID_ARROW_TOP_REVERSE, (((r as any).db as any).LINETYPE as any).SOLID_ARROW_BOTTOM_REVERSE, (((r as any).db as any).LINETYPE as any).STICK_ARROW_TOP_REVERSE, (((r as any).db as any).LINETYPE as any).STICK_ARROW_BOTTOM_REVERSE, (((r as any).db as any).LINETYPE as any).SOLID_ARROW_TOP_REVERSE_DOTTED, (((r as any).db as any).LINETYPE as any).SOLID_ARROW_BOTTOM_REVERSE_DOTTED, (((r as any).db as any).LINETYPE as any).STICK_ARROW_TOP_REVERSE_DOTTED, (((r as any).db as any).LINETYPE as any).STICK_ARROW_BOTTOM_REVERSE_DOTTED, (((r as any).db as any).LINETYPE as any).DOTTED, (((r as any).db as any).LINETYPE as any).SOLID_CROSS, (((r as any).db as any).LINETYPE as any).DOTTED_CROSS, (((r as any).db as any).LINETYPE as any).SOLID_POINT, (((r as any).db as any).LINETYPE as any).DOTTED_POINT, (((r as any).db as any).LINETYPE as any).BIDIRECTIONAL_SOLID, (((r as any).db as any).LINETYPE as any).BIDIRECTIONAL_DOTTED] as any).includes as any)((m as any).type) && (W = (((Math as any).round as any)(((W as any) + (U as any) as any) * (100 as any)) as any) / (100 as any)), nt++;
  }
  ((at as any).debug as any)("createdActors", O), ((at as any).debug as any)("destroyedActors", T), await (ae as any)(_, u, f, !1, t, r, D);
  for (const m of G) await (jr as any)(_, (m as any).messageModel, (m as any).lineStartY, r, (m as any).msg, t);
  (l as any).mirrorActors && (await (ae as any)(_, u, f, !0, t, r, D)), ((X as any).forEach as any)((m: any): any => ((q as any).drawBackgroundRect as any)(_, m)), (We as any)(_, u, f, l);
  for (const m of ((R as any).models as any).boxes) {
    (m as any).height = (((R as any).getVerticalPos as any)() as any) - ((m as any).y as any), ((R as any).insert as any)((m as any).x, (m as any).y, ((m as any).x as any) + ((m as any).width as any), (m as any).height);
    const k: any = ((l as any).boxMargin as any) * (2 as any);
    (m as any).startx = ((m as any).x as any) - (k as any), (m as any).starty = ((m as any).y as any) - ((k as any) * (.25 as any) as any), (m as any).stopx = (((m as any).startx as any) + ((m as any).width as any) as any) + ((2 as any) * (k as any) as any), (m as any).stopy = (((m as any).starty as any) + ((m as any).height as any) as any) + ((k as any) * (.75 as any) as any), (m as any).stroke = "rgb(0,0,0, 0.5)", ((q as any).drawBox as any)(_, m, l);
  }
  b && ((R as any).bumpVerticalPos as any)((l as any).boxMargin);
  const j: any = (He as any)(_, u, f, p),
    {
      bounds: H
    }: any = ((R as any).getBounds as any)();
  ((H as any).startx as any) === (void 0 as any) && ((H as any).startx = 0), ((H as any).starty as any) === (void 0 as any) && ((H as any).starty = 0), ((H as any).stopx as any) === (void 0 as any) && ((H as any).stopx = 0), ((H as any).stopy as any) === (void 0 as any) && ((H as any).stopy = 0);
  let st: any = ((H as any).stopy as any) - ((H as any).starty as any);
  (st as any) < ((j as any).maxHeight as any) && (st = (j as any).maxHeight);
  let tt: any = (st as any) + ((2 as any) * ((l as any).diagramMarginY as any) as any);
  (l as any).mirrorActors && (tt = ((tt as any) - ((l as any).boxMargin as any) as any) + ((l as any).bottomMarginAdj as any));
  let Y: any = ((H as any).stopx as any) - ((H as any).startx as any);
  (Y as any) < ((j as any).maxWidth as any) && (Y = (j as any).maxWidth);
  const C: any = (Y as any) + ((2 as any) * ((l as any).diagramMarginX as any) as any);
  L && ((((((((_ as any).append as any)("text") as any).text as any)(L) as any).attr as any)("x", ((((H as any).stopx as any) - ((H as any).startx as any) as any) / (2 as any) as any) - ((2 as any) * ((l as any).diagramMarginX as any) as any)) as any).attr as any)("y", -25), (ar as any)(_, tt, C, (l as any).useMaxWidth);
  const St: any = L ? 40 : 0,
    Dt: any = (u as any).size && (s as any) === ("neo" as any) ? 30 : 0;
  ((_ as any).attr as any)("viewBox", ((((((((H as any).startx as any) - ((l as any).diagramMarginX as any) as any) + (" -" as any) as any) + (((l as any).diagramMarginY as any) + (St as any) as any) as any) + (" " as any) as any) + (C as any) as any) + (" " as any) as any) + (((tt as any) + (St as any) as any) + (Dt as any) as any)), ((at as any).debug as any)("models:", (R as any).models);
}, "draw");
async function Ge(this: any, e: any, t: any, a: any): Promise<any> {
  const r: any = {};
  for (const i of t) if (((e as any).get as any)((i as any).to) && ((e as any).get as any)((i as any).from)) {
    const n: any = ((e as any).get as any)((i as any).to);
    if (((i as any).placement as any) === ((((a as any).db as any).PLACEMENT as any).LEFTOF as any) && !(n as any).prevActor || ((i as any).placement as any) === ((((a as any).db as any).PLACEMENT as any).RIGHTOF as any) && !(n as any).nextActor) continue;
    const s: any = ((i as any).placement as any) !== (void 0 as any),
      c: any = !s,
      E: any = s ? (bt as any)(l) : (Rt as any)(l),
      h: any = (i as any).wrap ? ((Z as any).wrapLabel as any)((i as any).message, ((l as any).width as any) - ((2 as any) * ((l as any).wrapPadding as any) as any), E) : (i as any).message,
      _: any = ((((Q as any)(h) ? await (kt as any)((i as any).message, ($ as any)()) : ((Z as any).calculateTextDimensions as any)(h, E)) as any).width as any) + ((2 as any) * ((l as any).wrapPadding as any) as any);
    c && ((i as any).from as any) === ((n as any).nextActor as any) ? (r as any)[(i as any).to] = ((N as any).getMax as any)((r as any)[(i as any).to] || 0, _) : c && ((i as any).from as any) === ((n as any).prevActor as any) ? (r as any)[(i as any).from] = ((N as any).getMax as any)((r as any)[(i as any).from] || 0, _) : c && ((i as any).from as any) === ((i as any).to as any) ? ((r as any)[(i as any).from] = ((N as any).getMax as any)((r as any)[(i as any).from] || 0, (_ as any) / (2 as any)), (r as any)[(i as any).to] = ((N as any).getMax as any)((r as any)[(i as any).to] || 0, (_ as any) / (2 as any))) : ((i as any).placement as any) === ((((a as any).db as any).PLACEMENT as any).RIGHTOF as any) ? (r as any)[(i as any).from] = ((N as any).getMax as any)((r as any)[(i as any).from] || 0, _) : ((i as any).placement as any) === ((((a as any).db as any).PLACEMENT as any).LEFTOF as any) ? (r as any)[(n as any).prevActor] = ((N as any).getMax as any)((r as any)[(n as any).prevActor] || 0, _) : ((i as any).placement as any) === ((((a as any).db as any).PLACEMENT as any).OVER as any) && ((n as any).prevActor && ((r as any)[(n as any).prevActor] = ((N as any).getMax as any)((r as any)[(n as any).prevActor] || 0, (_ as any) / (2 as any))), (n as any).nextActor && ((r as any)[(i as any).from] = ((N as any).getMax as any)((r as any)[(i as any).from] || 0, (_ as any) / (2 as any))));
  }
  return ((at as any).debug as any)("maxMessageWidthPerActor:", r), r;
}
(x as any)(Ge, "getMaxMessageWidthPerActor");
var ra: any = (x as any)(function (this: any, e: any): any {
  let t: any = 0;
  const a: any = (re as any)(l);
  for (const r in (e as any).links) {
    const n: any = (((((Z as any).calculateTextDimensions as any)(r, a) as any).width as any) + ((2 as any) * ((l as any).wrapPadding as any) as any) as any) + ((2 as any) * ((l as any).boxMargin as any) as any);
    (t as any) < (n as any) && (t = n);
  }
  return t;
}, "getRequiredPopupWidth");
async function Xe(this: any, e: any, t: any, a: any): Promise<any> {
  let r: any = 0;
  for (const n of ((e as any).keys as any)()) {
    const s: any = ((e as any).get as any)(n);
    (s as any).wrap && ((s as any).description = ((Z as any).wrapLabel as any)((s as any).description, ((l as any).width as any) - ((2 as any) * ((l as any).wrapPadding as any) as any), (re as any)(l)));
    const c: any = (Q as any)((s as any).description) ? await (kt as any)((s as any).description, ($ as any)()) : ((Z as any).calculateTextDimensions as any)((s as any).description, (re as any)(l));
    (s as any).width = (s as any).wrap ? (l as any).width : ((N as any).getMax as any)((l as any).width, ((c as any).width as any) + ((2 as any) * ((l as any).wrapPadding as any) as any)), (s as any).height = (s as any).wrap ? ((N as any).getMax as any)((c as any).height, (l as any).height) : (l as any).height, r = ((N as any).getMax as any)(r, (s as any).height);
  }
  for (const n in t) {
    const s: any = ((e as any).get as any)(n);
    if (!s) continue;
    const c: any = ((e as any).get as any)((s as any).nextActor);
    if (!c) {
      const _: any = (((t as any)[n] as any) + ((l as any).actorMargin as any) as any) - (((s as any).width as any) / (2 as any) as any);
      (s as any).margin = ((N as any).getMax as any)(_, (l as any).actorMargin);
      continue;
    }
    const h: any = ((((t as any)[n] as any) + ((l as any).actorMargin as any) as any) - (((s as any).width as any) / (2 as any) as any) as any) - (((c as any).width as any) / (2 as any) as any);
    (s as any).margin = ((N as any).getMax as any)(h, (l as any).actorMargin);
  }
  let i: any = 0;
  return ((a as any).forEach as any)((n: any): any => {
    const s: any = (Rt as any)(l);
    let c: any = (((n as any).actorKeys as any).reduce as any)((_: any, u: any): any => _ += ((((e as any).get as any)(u) as any).width as any) + (((((e as any).get as any)(u) as any).margin || 0) as any), 0);
    const E: any = ((l as any).boxMargin as any) * (8 as any);
    c += E, c -= (2 as any) * ((l as any).boxTextMargin as any), (n as any).wrap && ((n as any).name = ((Z as any).wrapLabel as any)((n as any).name, (c as any) - ((2 as any) * ((l as any).wrapPadding as any) as any), s));
    const h: any = ((Z as any).calculateTextDimensions as any)((n as any).name, s);
    i = ((N as any).getMax as any)((h as any).height, i);
    const p: any = ((N as any).getMax as any)(c, ((h as any).width as any) + ((2 as any) * ((l as any).wrapPadding as any) as any));
    if ((n as any).margin = (l as any).boxTextMargin, (c as any) < (p as any)) {
      const _: any = ((p as any) - (c as any) as any) / (2 as any);
      (n as any).margin += _;
    }
  }), ((a as any).forEach as any)((n: any): any => (n as any).textMaxHeight = i), ((N as any).getMax as any)(r, (l as any).height);
}
(x as any)(Xe, "calculateActorMargins");
var aa: any = (x as any)(async function (this: any, e: any, t: any, a: any): Promise<any> {
    const r: any = ((t as any).get as any)((e as any).from),
      i: any = ((t as any).get as any)((e as any).to),
      n: any = (r as any).x,
      s: any = (i as any).x,
      c: any = (e as any).wrap && (e as any).message;
    let E: any = (Q as any)((e as any).message) ? await (kt as any)((e as any).message, ($ as any)()) : ((Z as any).calculateTextDimensions as any)(c ? ((Z as any).wrapLabel as any)((e as any).message, (l as any).width, (bt as any)(l)) : (e as any).message, (bt as any)(l));
    const h: any = {
      width: c ? (l as any).width : ((N as any).getMax as any)((l as any).width, ((E as any).width as any) + ((2 as any) * ((l as any).noteMargin as any) as any)),
      height: 0,
      startx: (r as any).x,
      stopx: 0,
      starty: 0,
      stopy: 0,
      message: (e as any).message
    };
    return ((e as any).placement as any) === ((((a as any).db as any).PLACEMENT as any).RIGHTOF as any) ? ((h as any).width = c ? ((N as any).getMax as any)((l as any).width, (E as any).width) : ((N as any).getMax as any)((((r as any).width as any) / (2 as any) as any) + (((i as any).width as any) / (2 as any) as any), ((E as any).width as any) + ((2 as any) * ((l as any).noteMargin as any) as any)), (h as any).startx = (n as any) + ((((r as any).width as any) + ((l as any).actorMargin as any) as any) / (2 as any) as any)) : ((e as any).placement as any) === ((((a as any).db as any).PLACEMENT as any).LEFTOF as any) ? ((h as any).width = c ? ((N as any).getMax as any)((l as any).width, ((E as any).width as any) + ((2 as any) * ((l as any).noteMargin as any) as any)) : ((N as any).getMax as any)((((r as any).width as any) / (2 as any) as any) + (((i as any).width as any) / (2 as any) as any), ((E as any).width as any) + ((2 as any) * ((l as any).noteMargin as any) as any)), (h as any).startx = ((n as any) - ((h as any).width as any) as any) + ((((r as any).width as any) - ((l as any).actorMargin as any) as any) / (2 as any) as any)) : ((e as any).to as any) === ((e as any).from as any) ? (E = ((Z as any).calculateTextDimensions as any)(c ? ((Z as any).wrapLabel as any)((e as any).message, ((N as any).getMax as any)((l as any).width, (r as any).width), (bt as any)(l)) : (e as any).message, (bt as any)(l)), (h as any).width = c ? ((N as any).getMax as any)((l as any).width, (r as any).width) : ((N as any).getMax as any)((r as any).width, (l as any).width, ((E as any).width as any) + ((2 as any) * ((l as any).noteMargin as any) as any)), (h as any).startx = (n as any) + ((((r as any).width as any) - ((h as any).width as any) as any) / (2 as any) as any)) : ((h as any).width = (((Math as any).abs as any)(((n as any) + (((r as any).width as any) / (2 as any) as any) as any) - ((s as any) + (((i as any).width as any) / (2 as any) as any) as any)) as any) + ((l as any).actorMargin as any), (h as any).startx = (n as any) < (s as any) ? ((n as any) + (((r as any).width as any) / (2 as any) as any) as any) - (((l as any).actorMargin as any) / (2 as any) as any) : ((s as any) + (((i as any).width as any) / (2 as any) as any) as any) - (((l as any).actorMargin as any) / (2 as any) as any)), c && ((h as any).message = ((Z as any).wrapLabel as any)((e as any).message, ((h as any).width as any) - ((2 as any) * ((l as any).wrapPadding as any) as any), (bt as any)(l))), ((at as any).debug as any)(`NM:[${(h as any).startx},${(h as any).stopx},${(h as any).starty},${(h as any).stopy}:${(h as any).width},${(h as any).height}=${(e as any).message}]`), h;
  }, "buildNoteModel"),
  sa: number = 4,
  te: any = (x as any)(function (this: any, e: any, t: any): any {
    const {
      CENTRAL_CONNECTION: a,
      CENTRAL_CONNECTION_REVERSE: r,
      CENTRAL_CONNECTION_DUAL: i
    }: any = ((t as any).db as any).LINETYPE;
    return (([a, r, i] as any).includes as any)((e as any).centralConnection);
  }, "hasCentralConnection"),
  ia: any = (x as any)(function (this: any, e: any, t: any, a: any): any {
    const {
      CENTRAL_CONNECTION_REVERSE: r,
      CENTRAL_CONNECTION_DUAL: i,
      BIDIRECTIONAL_SOLID: n,
      BIDIRECTIONAL_DOTTED: s
    }: any = ((t as any).db as any).LINETYPE;
    let c: any = 0;
    return (((e as any).centralConnection as any) === (r as any) || ((e as any).centralConnection as any) === (i as any)) && (c += sa), (((e as any).centralConnection as any) === (r as any) || ((e as any).centralConnection as any) === (i as any)) && (((e as any).type as any) === (n as any) || ((e as any).type as any) === (s as any)) && (c += a ? 0 : -6), c;
  }, "calculateCentralConnectionOffset"),
  Je: any = (x as any)(function (this: any, e: any, t: any): any {
    const {
      SOLID_ARROW_TOP_REVERSE: a,
      SOLID_ARROW_TOP_REVERSE_DOTTED: r,
      SOLID_ARROW_BOTTOM_REVERSE: i,
      SOLID_ARROW_BOTTOM_REVERSE_DOTTED: n,
      STICK_ARROW_TOP_REVERSE: s,
      STICK_ARROW_TOP_REVERSE_DOTTED: c,
      STICK_ARROW_BOTTOM_REVERSE: E,
      STICK_ARROW_BOTTOM_REVERSE_DOTTED: h
    }: any = ((t as any).db as any).LINETYPE;
    return (([a, r, i, n, s, c, E, h] as any).includes as any)((e as any).type);
  }, "isReverseArrowType"),
  na: any = (x as any)(function (this: any, e: any, t: any): any {
    const {
      BIDIRECTIONAL_SOLID: a,
      BIDIRECTIONAL_DOTTED: r
    }: any = ((t as any).db as any).LINETYPE;
    return (([a, r] as any).includes as any)((e as any).type);
  }, "isBidirectionalArrowType"),
  oa: any = (x as any)(function (this: any, e: any, t: any, a: any): any {
    const {
      look: r
    }: any = ($ as any)();
    if (!(([(((a as any).db as any).LINETYPE as any).SOLID_OPEN, (((a as any).db as any).LINETYPE as any).DOTTED_OPEN, (((a as any).db as any).LINETYPE as any).SOLID, (((a as any).db as any).LINETYPE as any).SOLID_TOP, (((a as any).db as any).LINETYPE as any).SOLID_BOTTOM, (((a as any).db as any).LINETYPE as any).STICK_TOP, (((a as any).db as any).LINETYPE as any).STICK_BOTTOM, (((a as any).db as any).LINETYPE as any).SOLID_TOP_DOTTED, (((a as any).db as any).LINETYPE as any).SOLID_BOTTOM_DOTTED, (((a as any).db as any).LINETYPE as any).STICK_TOP_DOTTED, (((a as any).db as any).LINETYPE as any).STICK_BOTTOM_DOTTED, (((a as any).db as any).LINETYPE as any).SOLID_ARROW_TOP_REVERSE, (((a as any).db as any).LINETYPE as any).SOLID_ARROW_BOTTOM_REVERSE, (((a as any).db as any).LINETYPE as any).STICK_ARROW_TOP_REVERSE, (((a as any).db as any).LINETYPE as any).STICK_ARROW_BOTTOM_REVERSE, (((a as any).db as any).LINETYPE as any).SOLID_ARROW_TOP_REVERSE_DOTTED, (((a as any).db as any).LINETYPE as any).SOLID_ARROW_BOTTOM_REVERSE_DOTTED, (((a as any).db as any).LINETYPE as any).STICK_ARROW_TOP_REVERSE_DOTTED, (((a as any).db as any).LINETYPE as any).STICK_ARROW_BOTTOM_REVERSE_DOTTED, (((a as any).db as any).LINETYPE as any).DOTTED, (((a as any).db as any).LINETYPE as any).SOLID_CROSS, (((a as any).db as any).LINETYPE as any).DOTTED_CROSS, (((a as any).db as any).LINETYPE as any).SOLID_POINT, (((a as any).db as any).LINETYPE as any).DOTTED_POINT, (((a as any).db as any).LINETYPE as any).BIDIRECTIONAL_SOLID, (((a as any).db as any).LINETYPE as any).BIDIRECTIONAL_DOTTED] as any).includes as any)((e as any).type)) return {};
    const [i, n]: any = (Ce as any)((e as any).from, t),
      [s, c]: any = (Ce as any)((e as any).to, t),
      E: any = (i as any) <= (s as any);
    let h: any = E ? n : i,
      p: any = E ? s : c;
    (r as any) === ("neo" as any) && (((e as any).type as any) !== ((((a as any).db as any).LINETYPE as any).SOLID_OPEN as any) && (p += E ? -3 : 3), (((e as any).type as any) === ((((a as any).db as any).LINETYPE as any).BIDIRECTIONAL_SOLID as any) || ((e as any).type as any) === ((((a as any).db as any).LINETYPE as any).BIDIRECTIONAL_DOTTED as any)) && (h += E ? 3 : -3)), h += (ia as any)(e, a, E);
    const _: any = (((Math as any).abs as any)((s as any) - (c as any)) as any) > (2 as any),
      u: any = (x as any)((f: any): any => E ? -f : f, "adjustValue");
    ((e as any).from as any) === ((e as any).to as any) ? p = h : ((e as any).activate && !_ && (p += (u as any)((((l as any).activationWidth as any) / (2 as any) as any) - (1 as any))), (([(((a as any).db as any).LINETYPE as any).SOLID_OPEN, (((a as any).db as any).LINETYPE as any).DOTTED_OPEN, (((a as any).db as any).LINETYPE as any).STICK_TOP, (((a as any).db as any).LINETYPE as any).STICK_BOTTOM, (((a as any).db as any).LINETYPE as any).STICK_TOP_DOTTED, (((a as any).db as any).LINETYPE as any).STICK_BOTTOM_DOTTED, (((a as any).db as any).LINETYPE as any).SOLID_ARROW_TOP_REVERSE_DOTTED, (((a as any).db as any).LINETYPE as any).SOLID_ARROW_BOTTOM_REVERSE_DOTTED, (((a as any).db as any).LINETYPE as any).STICK_ARROW_TOP_REVERSE, (((a as any).db as any).LINETYPE as any).STICK_ARROW_BOTTOM_REVERSE, (((a as any).db as any).LINETYPE as any).STICK_ARROW_TOP_REVERSE_DOTTED, (((a as any).db as any).LINETYPE as any).STICK_ARROW_BOTTOM_REVERSE_DOTTED, (((a as any).db as any).LINETYPE as any).SOLID_ARROW_TOP_REVERSE, (((a as any).db as any).LINETYPE as any).SOLID_ARROW_BOTTOM_REVERSE] as any).includes as any)((e as any).type) || (p += (u as any)(3)), (([(((a as any).db as any).LINETYPE as any).BIDIRECTIONAL_SOLID, (((a as any).db as any).LINETYPE as any).BIDIRECTIONAL_DOTTED, (((a as any).db as any).LINETYPE as any).SOLID_ARROW_TOP_REVERSE_DOTTED, (((a as any).db as any).LINETYPE as any).SOLID_ARROW_BOTTOM_REVERSE_DOTTED, (((a as any).db as any).LINETYPE as any).SOLID_ARROW_TOP_REVERSE, (((a as any).db as any).LINETYPE as any).SOLID_ARROW_BOTTOM_REVERSE] as any).includes as any)((e as any).type) && (h -= (u as any)(3)));
    const O: any = [i, n, s, c],
      T: any = ((Math as any).abs as any)((h as any) - (p as any));
    (e as any).wrap && (e as any).message && ((e as any).message = ((Z as any).wrapLabel as any)((e as any).message, ((N as any).getMax as any)((T as any) + ((2 as any) * ((l as any).wrapPadding as any) as any), (l as any).width), (Rt as any)(l)));
    const g: any = ((Z as any).calculateTextDimensions as any)((e as any).message, (Rt as any)(l));
    return {
      width: ((N as any).getMax as any)((e as any).wrap ? 0 : ((g as any).width as any) + ((2 as any) * ((l as any).wrapPadding as any) as any), (T as any) + ((2 as any) * ((l as any).wrapPadding as any) as any), (l as any).width),
      height: 0,
      startx: h,
      stopx: p,
      starty: 0,
      stopy: 0,
      message: (e as any).message,
      type: (e as any).type,
      wrap: (e as any).wrap,
      fromBounds: (((Math as any).min as any).apply as any)(null, O),
      toBounds: (((Math as any).max as any).apply as any)(null, O)
    };
  }, "buildMessageModel"),
  ca: any = (x as any)(async function (this: any, e: any, t: any, a: any, r: any): Promise<any> {
    const i: any = {},
      n: any = [];
    let s: any, c: any, E: any;
    for (const h of e) {
      switch ((h as any).type) {
        case (((r as any).db as any).LINETYPE as any).LOOP_START:
        case (((r as any).db as any).LINETYPE as any).ALT_START:
        case (((r as any).db as any).LINETYPE as any).OPT_START:
        case (((r as any).db as any).LINETYPE as any).PAR_START:
        case (((r as any).db as any).LINETYPE as any).PAR_OVER_START:
        case (((r as any).db as any).LINETYPE as any).CRITICAL_START:
        case (((r as any).db as any).LINETYPE as any).BREAK_START:
          ((n as any).push as any)({
            id: (h as any).id,
            msg: (h as any).message,
            from: (Number as any).MAX_SAFE_INTEGER,
            to: (Number as any).MIN_SAFE_INTEGER,
            width: 0
          });
          break;
        case (((r as any).db as any).LINETYPE as any).ALT_ELSE:
        case (((r as any).db as any).LINETYPE as any).PAR_AND:
        case (((r as any).db as any).LINETYPE as any).CRITICAL_OPTION:
          (h as any).message && (s = ((n as any).pop as any)(), (i as any)[(s as any).id] = s, (i as any)[(h as any).id] = s, ((n as any).push as any)(s));
          break;
        case (((r as any).db as any).LINETYPE as any).LOOP_END:
        case (((r as any).db as any).LINETYPE as any).ALT_END:
        case (((r as any).db as any).LINETYPE as any).OPT_END:
        case (((r as any).db as any).LINETYPE as any).PAR_END:
        case (((r as any).db as any).LINETYPE as any).CRITICAL_END:
        case (((r as any).db as any).LINETYPE as any).BREAK_END:
          s = ((n as any).pop as any)(), (i as any)[(s as any).id] = s;
          break;
        case (((r as any).db as any).LINETYPE as any).ACTIVE_START:
          {
            const _: any = ((t as any).get as any)((h as any).from ? (h as any).from : ((h as any).to as any).actor),
              u: any = ((Ut as any)((h as any).from ? (h as any).from : ((h as any).to as any).actor) as any).length,
              O: any = (((_ as any).x as any) + (((_ as any).width as any) / (2 as any) as any) as any) + ((((u as any) - (1 as any) as any) * ((l as any).activationWidth as any) as any) / (2 as any) as any),
              T: any = {
                startx: O,
                stopx: (O as any) + ((l as any).activationWidth as any),
                actor: (h as any).from,
                enabled: !0
              };
            (((R as any).activations as any).push as any)(T);
          }
          break;
        case (((r as any).db as any).LINETYPE as any).ACTIVE_END:
          {
            const _: any = (((((R as any).activations as any).map as any)((u: any): any => (u as any).actor) as any).lastIndexOf as any)((h as any).from);
            (((((R as any).activations as any).splice as any)(_, 1) as any).splice as any)(0, 1);
          }
          break;
      }
      ((h as any).placement as any) !== (void 0 as any) ? (c = await (aa as any)(h, t, r), (h as any).noteModel = c, ((n as any).forEach as any)((_: any): any => {
        s = _, (s as any).from = ((N as any).getMin as any)((s as any).from, (c as any).startx), (s as any).to = ((N as any).getMax as any)((s as any).to, ((c as any).startx as any) + ((c as any).width as any)), (s as any).width = (((N as any).getMax as any)((s as any).width, ((Math as any).abs as any)(((s as any).from as any) - ((s as any).to as any))) as any) - ((l as any).labelBoxWidth as any);
      })) : (E = (oa as any)(h, t, r), (h as any).msgModel = E, (E as any).startx && (E as any).stopx && ((n as any).length as any) > (0 as any) && ((n as any).forEach as any)((_: any): any => {
        if (s = _, ((E as any).startx as any) === ((E as any).stopx as any)) {
          const u: any = ((t as any).get as any)((h as any).from),
            O: any = ((t as any).get as any)((h as any).to);
          (s as any).from = ((N as any).getMin as any)(((u as any).x as any) - (((E as any).width as any) / (2 as any) as any), ((u as any).x as any) - (((u as any).width as any) / (2 as any) as any), (s as any).from), (s as any).to = ((N as any).getMax as any)(((O as any).x as any) + (((E as any).width as any) / (2 as any) as any), ((O as any).x as any) + (((u as any).width as any) / (2 as any) as any), (s as any).to), (s as any).width = (((N as any).getMax as any)((s as any).width, ((Math as any).abs as any)(((s as any).to as any) - ((s as any).from as any))) as any) - ((l as any).labelBoxWidth as any);
        } else (s as any).from = ((N as any).getMin as any)((E as any).startx, (s as any).from), (s as any).to = ((N as any).getMax as any)((E as any).stopx, (s as any).to), (s as any).width = (((N as any).getMax as any)((s as any).width, (E as any).width) as any) - ((l as any).labelBoxWidth as any);
      }));
    }
    return (R as any).activations = [], ((at as any).debug as any)("Loop type widths:", i), i;
  }, "calculateLoopBounds"),
  la: any = {
    bounds: R,
    drawActors: ae,
    drawActorsPopup: He,
    setConf: ze,
    draw: ea
  },
  Ea: any = {
    parser: _r,
    get db(): any {
      return new (yr as any)();
    },
    renderer: la,
    styles: Or,
    init: (x as any)((e: any): any => {
      (e as any).sequence || ((e as any).sequence = {}), (e as any).wrap && (((e as any).sequence as any).wrap = (e as any).wrap, (rr as any)({
        sequence: {
          wrap: (e as any).wrap
        }
      }));
    }, "init")
  };
export { Ea as diagram };
//# debugId=341c861e-a053-45c4-b850-58e6102205fa
