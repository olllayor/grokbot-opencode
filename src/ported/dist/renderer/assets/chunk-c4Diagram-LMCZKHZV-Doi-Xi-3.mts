declare var c: any;
declare var global: any;
declare var key: any;
declare var screen: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "1104688d-1e79-4549-9694-03393f2b67fd", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-1104688d-1e79-4549-9694-03393f2b67fd");
  } catch (e: any) {}
} as any)();
import { g as Se, d as De } from "./chunk-chunk-32BRIVSS-CL4hvhVG.js";
import { _ as y, s as Pe, g as Be, a as Ie, b as Me, c as Bt, d as jt, l as de, e as Le, f as Ne, h as Tt, i as ge, j as Ye, w as je, k as $t, m as fe } from "./chunk-mermaid.core-B9Iu5CoE.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var Ft: any = (function (this: any): any {
  var a: any = (y as any)(function (this: any, _t: any, x: any, v: any, E: any): any {
      for (v = v || {}, E = (_t as any).length; E--; (v as any)[(_t as any)[E]] = x);
      return v;
    }, "o"),
    t: any = [1, 24],
    s: any = [1, 25],
    o: any = [1, 26],
    r: any = [1, 27],
    l: any = [1, 28],
    e: any = [1, 63],
    n: any = [1, 64],
    i: any = [1, 65],
    u: any = [1, 66],
    d: any = [1, 67],
    p: any = [1, 68],
    g: any = [1, 69],
    m: any = [1, 29],
    O: any = [1, 30],
    S: any = [1, 31],
    P: any = [1, 32],
    M: any = [1, 33],
    U: any = [1, 34],
    H: any = [1, 35],
    q: any = [1, 36],
    G: any = [1, 37],
    K: any = [1, 38],
    J: any = [1, 39],
    Z: any = [1, 40],
    $: any = [1, 41],
    tt: any = [1, 42],
    et: any = [1, 43],
    at: any = [1, 44],
    it: any = [1, 45],
    nt: any = [1, 46],
    st: any = [1, 47],
    rt: any = [1, 48],
    lt: any = [1, 50],
    ot: any = [1, 51],
    ct: any = [1, 52],
    ht: any = [1, 53],
    ut: any = [1, 54],
    dt: any = [1, 55],
    ft: any = [1, 56],
    pt: any = [1, 57],
    yt: any = [1, 58],
    gt: any = [1, 59],
    bt: any = [1, 60],
    Ct: any = [14, 42],
    Qt: any = [14, 34, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74],
    St: any = [12, 14, 34, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74],
    A: any = [1, 82],
    k: any = [1, 83],
    C: any = [1, 84],
    w: any = [1, 85],
    T: any = [12, 14, 42],
    le: any = [12, 14, 33, 42],
    Mt: any = [12, 14, 33, 42, 76, 77, 79, 80],
    vt: any = [12, 33],
    Ht: any = [34, 36, 37, 38, 39, 40, 41, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74],
    qt: any = {
      trace: (y as any)(function (this: any): any {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        mermaidDoc: 4,
        direction: 5,
        direction_tb: 6,
        direction_bt: 7,
        direction_rl: 8,
        direction_lr: 9,
        graphConfig: 10,
        C4_CONTEXT: 11,
        NEWLINE: 12,
        statements: 13,
        EOF: 14,
        C4_CONTAINER: 15,
        C4_COMPONENT: 16,
        C4_DYNAMIC: 17,
        C4_DEPLOYMENT: 18,
        otherStatements: 19,
        diagramStatements: 20,
        otherStatement: 21,
        title: 22,
        accDescription: 23,
        acc_title: 24,
        acc_title_value: 25,
        acc_descr: 26,
        acc_descr_value: 27,
        acc_descr_multiline_value: 28,
        boundaryStatement: 29,
        boundaryStartStatement: 30,
        boundaryStopStatement: 31,
        boundaryStart: 32,
        LBRACE: 33,
        ENTERPRISE_BOUNDARY: 34,
        attributes: 35,
        SYSTEM_BOUNDARY: 36,
        BOUNDARY: 37,
        CONTAINER_BOUNDARY: 38,
        NODE: 39,
        NODE_L: 40,
        NODE_R: 41,
        RBRACE: 42,
        diagramStatement: 43,
        PERSON: 44,
        PERSON_EXT: 45,
        SYSTEM: 46,
        SYSTEM_DB: 47,
        SYSTEM_QUEUE: 48,
        SYSTEM_EXT: 49,
        SYSTEM_EXT_DB: 50,
        SYSTEM_EXT_QUEUE: 51,
        CONTAINER: 52,
        CONTAINER_DB: 53,
        CONTAINER_QUEUE: 54,
        CONTAINER_EXT: 55,
        CONTAINER_EXT_DB: 56,
        CONTAINER_EXT_QUEUE: 57,
        COMPONENT: 58,
        COMPONENT_DB: 59,
        COMPONENT_QUEUE: 60,
        COMPONENT_EXT: 61,
        COMPONENT_EXT_DB: 62,
        COMPONENT_EXT_QUEUE: 63,
        REL: 64,
        BIREL: 65,
        REL_U: 66,
        REL_D: 67,
        REL_L: 68,
        REL_R: 69,
        REL_B: 70,
        REL_INDEX: 71,
        UPDATE_EL_STYLE: 72,
        UPDATE_REL_STYLE: 73,
        UPDATE_LAYOUT_CONFIG: 74,
        attribute: 75,
        STR: 76,
        STR_KEY: 77,
        STR_VALUE: 78,
        ATTRIBUTE: 79,
        ATTRIBUTE_EMPTY: 80,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        6: "direction_tb",
        7: "direction_bt",
        8: "direction_rl",
        9: "direction_lr",
        11: "C4_CONTEXT",
        12: "NEWLINE",
        14: "EOF",
        15: "C4_CONTAINER",
        16: "C4_COMPONENT",
        17: "C4_DYNAMIC",
        18: "C4_DEPLOYMENT",
        22: "title",
        23: "accDescription",
        24: "acc_title",
        25: "acc_title_value",
        26: "acc_descr",
        27: "acc_descr_value",
        28: "acc_descr_multiline_value",
        33: "LBRACE",
        34: "ENTERPRISE_BOUNDARY",
        36: "SYSTEM_BOUNDARY",
        37: "BOUNDARY",
        38: "CONTAINER_BOUNDARY",
        39: "NODE",
        40: "NODE_L",
        41: "NODE_R",
        42: "RBRACE",
        44: "PERSON",
        45: "PERSON_EXT",
        46: "SYSTEM",
        47: "SYSTEM_DB",
        48: "SYSTEM_QUEUE",
        49: "SYSTEM_EXT",
        50: "SYSTEM_EXT_DB",
        51: "SYSTEM_EXT_QUEUE",
        52: "CONTAINER",
        53: "CONTAINER_DB",
        54: "CONTAINER_QUEUE",
        55: "CONTAINER_EXT",
        56: "CONTAINER_EXT_DB",
        57: "CONTAINER_EXT_QUEUE",
        58: "COMPONENT",
        59: "COMPONENT_DB",
        60: "COMPONENT_QUEUE",
        61: "COMPONENT_EXT",
        62: "COMPONENT_EXT_DB",
        63: "COMPONENT_EXT_QUEUE",
        64: "REL",
        65: "BIREL",
        66: "REL_U",
        67: "REL_D",
        68: "REL_L",
        69: "REL_R",
        70: "REL_B",
        71: "REL_INDEX",
        72: "UPDATE_EL_STYLE",
        73: "UPDATE_REL_STYLE",
        74: "UPDATE_LAYOUT_CONFIG",
        76: "STR",
        77: "STR_KEY",
        78: "STR_VALUE",
        79: "ATTRIBUTE",
        80: "ATTRIBUTE_EMPTY"
      },
      productions_: [0, [3, 1], [3, 1], [5, 1], [5, 1], [5, 1], [5, 1], [4, 1], [10, 4], [10, 4], [10, 4], [10, 4], [10, 4], [13, 1], [13, 1], [13, 2], [19, 1], [19, 2], [19, 3], [21, 1], [21, 1], [21, 2], [21, 2], [21, 1], [29, 3], [30, 3], [30, 3], [30, 4], [32, 2], [32, 2], [32, 2], [32, 2], [32, 2], [32, 2], [32, 2], [31, 1], [20, 1], [20, 2], [20, 3], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 1], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [35, 1], [35, 2], [75, 1], [75, 2], [75, 1], [75, 1]],
      performAction: (y as any)(function (this: any, x: any, v: any, E: any, b: any, R: any, h: any, Dt: any): any {
        var f: any = ((h as any).length as any) - (1 as any);
        switch (R) {
          case 3:
            ((b as any).setDirection as any)("TB");
            break;
          case 4:
            ((b as any).setDirection as any)("BT");
            break;
          case 5:
            ((b as any).setDirection as any)("RL");
            break;
          case 6:
            ((b as any).setDirection as any)("LR");
            break;
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
            ((b as any).setC4Type as any)((h as any)[(f as any) - (3 as any)]);
            break;
          case 19:
            ((b as any).setTitle as any)((((h as any)[f] as any).substring as any)(6)), (this as any).$ = (((h as any)[f] as any).substring as any)(6);
            break;
          case 20:
            ((b as any).setAccDescription as any)((((h as any)[f] as any).substring as any)(15)), (this as any).$ = (((h as any)[f] as any).substring as any)(15);
            break;
          case 21:
            (this as any).$ = (((h as any)[f] as any).trim as any)(), ((b as any).setTitle as any)((this as any).$);
            break;
          case 22:
          case 23:
            (this as any).$ = (((h as any)[f] as any).trim as any)(), ((b as any).setAccDescription as any)((this as any).$);
            break;
          case 28:
            (((h as any)[f] as any).splice as any)(2, 0, "ENTERPRISE"), ((b as any).addPersonOrSystemBoundary as any)(...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 29:
            (((h as any)[f] as any).splice as any)(2, 0, "SYSTEM"), ((b as any).addPersonOrSystemBoundary as any)(...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 30:
            ((b as any).addPersonOrSystemBoundary as any)(...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 31:
            (((h as any)[f] as any).splice as any)(2, 0, "CONTAINER"), ((b as any).addContainerBoundary as any)(...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 32:
            ((b as any).addDeploymentNode as any)("node", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 33:
            ((b as any).addDeploymentNode as any)("nodeL", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 34:
            ((b as any).addDeploymentNode as any)("nodeR", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 35:
            ((b as any).popBoundaryParseStack as any)();
            break;
          case 39:
            ((b as any).addPersonOrSystem as any)("person", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 40:
            ((b as any).addPersonOrSystem as any)("external_person", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 41:
            ((b as any).addPersonOrSystem as any)("system", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 42:
            ((b as any).addPersonOrSystem as any)("system_db", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 43:
            ((b as any).addPersonOrSystem as any)("system_queue", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 44:
            ((b as any).addPersonOrSystem as any)("external_system", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 45:
            ((b as any).addPersonOrSystem as any)("external_system_db", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 46:
            ((b as any).addPersonOrSystem as any)("external_system_queue", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 47:
            ((b as any).addContainer as any)("container", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 48:
            ((b as any).addContainer as any)("container_db", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 49:
            ((b as any).addContainer as any)("container_queue", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 50:
            ((b as any).addContainer as any)("external_container", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 51:
            ((b as any).addContainer as any)("external_container_db", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 52:
            ((b as any).addContainer as any)("external_container_queue", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 53:
            ((b as any).addComponent as any)("component", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 54:
            ((b as any).addComponent as any)("component_db", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 55:
            ((b as any).addComponent as any)("component_queue", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 56:
            ((b as any).addComponent as any)("external_component", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 57:
            ((b as any).addComponent as any)("external_component_db", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 58:
            ((b as any).addComponent as any)("external_component_queue", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 60:
            ((b as any).addRel as any)("rel", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 61:
            ((b as any).addRel as any)("birel", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 62:
            ((b as any).addRel as any)("rel_u", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 63:
            ((b as any).addRel as any)("rel_d", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 64:
            ((b as any).addRel as any)("rel_l", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 65:
            ((b as any).addRel as any)("rel_r", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 66:
            ((b as any).addRel as any)("rel_b", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 67:
            (((h as any)[f] as any).splice as any)(0, 1), ((b as any).addRel as any)("rel", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 68:
            ((b as any).updateElStyle as any)("update_el_style", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 69:
            ((b as any).updateRelStyle as any)("update_rel_style", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 70:
            ((b as any).updateLayoutConfig as any)("update_layout_config", ...(h as any)[f]), (this as any).$ = (h as any)[f];
            break;
          case 71:
            (this as any).$ = [(h as any)[f]];
            break;
          case 72:
            (((h as any)[f] as any).unshift as any)((h as any)[(f as any) - (1 as any)]), (this as any).$ = (h as any)[f];
            break;
          case 73:
          case 75:
            (this as any).$ = (((h as any)[f] as any).trim as any)();
            break;
          case 74:
            let Et: any = {};
            (Et as any)[(((h as any)[(f as any) - (1 as any)] as any).trim as any)()] = (((h as any)[f] as any).trim as any)(), (this as any).$ = Et;
            break;
          case 76:
            (this as any).$ = "";
            break;
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: 2,
        5: 3,
        6: [1, 5],
        7: [1, 6],
        8: [1, 7],
        9: [1, 8],
        10: 4,
        11: [1, 9],
        15: [1, 10],
        16: [1, 11],
        17: [1, 12],
        18: [1, 13]
      }, {
        1: [3]
      }, {
        1: [2, 1]
      }, {
        1: [2, 2]
      }, {
        1: [2, 7]
      }, {
        1: [2, 3]
      }, {
        1: [2, 4]
      }, {
        1: [2, 5]
      }, {
        1: [2, 6]
      }, {
        12: [1, 14]
      }, {
        12: [1, 15]
      }, {
        12: [1, 16]
      }, {
        12: [1, 17]
      }, {
        12: [1, 18]
      }, {
        13: 19,
        19: 20,
        20: 21,
        21: 22,
        22: t,
        23: s,
        24: o,
        26: r,
        28: l,
        29: 49,
        30: 61,
        32: 62,
        34: e,
        36: n,
        37: i,
        38: u,
        39: d,
        40: p,
        41: g,
        43: 23,
        44: m,
        45: O,
        46: S,
        47: P,
        48: M,
        49: U,
        50: H,
        51: q,
        52: G,
        53: K,
        54: J,
        55: Z,
        56: $,
        57: tt,
        58: et,
        59: at,
        60: it,
        61: nt,
        62: st,
        63: rt,
        64: lt,
        65: ot,
        66: ct,
        67: ht,
        68: ut,
        69: dt,
        70: ft,
        71: pt,
        72: yt,
        73: gt,
        74: bt
      }, {
        13: 70,
        19: 20,
        20: 21,
        21: 22,
        22: t,
        23: s,
        24: o,
        26: r,
        28: l,
        29: 49,
        30: 61,
        32: 62,
        34: e,
        36: n,
        37: i,
        38: u,
        39: d,
        40: p,
        41: g,
        43: 23,
        44: m,
        45: O,
        46: S,
        47: P,
        48: M,
        49: U,
        50: H,
        51: q,
        52: G,
        53: K,
        54: J,
        55: Z,
        56: $,
        57: tt,
        58: et,
        59: at,
        60: it,
        61: nt,
        62: st,
        63: rt,
        64: lt,
        65: ot,
        66: ct,
        67: ht,
        68: ut,
        69: dt,
        70: ft,
        71: pt,
        72: yt,
        73: gt,
        74: bt
      }, {
        13: 71,
        19: 20,
        20: 21,
        21: 22,
        22: t,
        23: s,
        24: o,
        26: r,
        28: l,
        29: 49,
        30: 61,
        32: 62,
        34: e,
        36: n,
        37: i,
        38: u,
        39: d,
        40: p,
        41: g,
        43: 23,
        44: m,
        45: O,
        46: S,
        47: P,
        48: M,
        49: U,
        50: H,
        51: q,
        52: G,
        53: K,
        54: J,
        55: Z,
        56: $,
        57: tt,
        58: et,
        59: at,
        60: it,
        61: nt,
        62: st,
        63: rt,
        64: lt,
        65: ot,
        66: ct,
        67: ht,
        68: ut,
        69: dt,
        70: ft,
        71: pt,
        72: yt,
        73: gt,
        74: bt
      }, {
        13: 72,
        19: 20,
        20: 21,
        21: 22,
        22: t,
        23: s,
        24: o,
        26: r,
        28: l,
        29: 49,
        30: 61,
        32: 62,
        34: e,
        36: n,
        37: i,
        38: u,
        39: d,
        40: p,
        41: g,
        43: 23,
        44: m,
        45: O,
        46: S,
        47: P,
        48: M,
        49: U,
        50: H,
        51: q,
        52: G,
        53: K,
        54: J,
        55: Z,
        56: $,
        57: tt,
        58: et,
        59: at,
        60: it,
        61: nt,
        62: st,
        63: rt,
        64: lt,
        65: ot,
        66: ct,
        67: ht,
        68: ut,
        69: dt,
        70: ft,
        71: pt,
        72: yt,
        73: gt,
        74: bt
      }, {
        13: 73,
        19: 20,
        20: 21,
        21: 22,
        22: t,
        23: s,
        24: o,
        26: r,
        28: l,
        29: 49,
        30: 61,
        32: 62,
        34: e,
        36: n,
        37: i,
        38: u,
        39: d,
        40: p,
        41: g,
        43: 23,
        44: m,
        45: O,
        46: S,
        47: P,
        48: M,
        49: U,
        50: H,
        51: q,
        52: G,
        53: K,
        54: J,
        55: Z,
        56: $,
        57: tt,
        58: et,
        59: at,
        60: it,
        61: nt,
        62: st,
        63: rt,
        64: lt,
        65: ot,
        66: ct,
        67: ht,
        68: ut,
        69: dt,
        70: ft,
        71: pt,
        72: yt,
        73: gt,
        74: bt
      }, {
        14: [1, 74]
      }, (a as any)(Ct, [2, 13], {
        43: 23,
        29: 49,
        30: 61,
        32: 62,
        20: 75,
        34: e,
        36: n,
        37: i,
        38: u,
        39: d,
        40: p,
        41: g,
        44: m,
        45: O,
        46: S,
        47: P,
        48: M,
        49: U,
        50: H,
        51: q,
        52: G,
        53: K,
        54: J,
        55: Z,
        56: $,
        57: tt,
        58: et,
        59: at,
        60: it,
        61: nt,
        62: st,
        63: rt,
        64: lt,
        65: ot,
        66: ct,
        67: ht,
        68: ut,
        69: dt,
        70: ft,
        71: pt,
        72: yt,
        73: gt,
        74: bt
      }), (a as any)(Ct, [2, 14]), (a as any)(Qt, [2, 16], {
        12: [1, 76]
      }), (a as any)(Ct, [2, 36], {
        12: [1, 77]
      }), (a as any)(St, [2, 19]), (a as any)(St, [2, 20]), {
        25: [1, 78]
      }, {
        27: [1, 79]
      }, (a as any)(St, [2, 23]), {
        35: 80,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 86,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 87,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 88,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 89,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 90,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 91,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 92,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 93,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 94,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 95,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 96,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 97,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 98,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 99,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 100,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 101,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 102,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 103,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 104,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, (a as any)(T, [2, 59]), {
        35: 105,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 106,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 107,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 108,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 109,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 110,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 111,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 112,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 113,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 114,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 115,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        20: 116,
        29: 49,
        30: 61,
        32: 62,
        34: e,
        36: n,
        37: i,
        38: u,
        39: d,
        40: p,
        41: g,
        43: 23,
        44: m,
        45: O,
        46: S,
        47: P,
        48: M,
        49: U,
        50: H,
        51: q,
        52: G,
        53: K,
        54: J,
        55: Z,
        56: $,
        57: tt,
        58: et,
        59: at,
        60: it,
        61: nt,
        62: st,
        63: rt,
        64: lt,
        65: ot,
        66: ct,
        67: ht,
        68: ut,
        69: dt,
        70: ft,
        71: pt,
        72: yt,
        73: gt,
        74: bt
      }, {
        12: [1, 118],
        33: [1, 117]
      }, {
        35: 119,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 120,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 121,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 122,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 123,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 124,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        35: 125,
        75: 81,
        76: A,
        77: k,
        79: C,
        80: w
      }, {
        14: [1, 126]
      }, {
        14: [1, 127]
      }, {
        14: [1, 128]
      }, {
        14: [1, 129]
      }, {
        1: [2, 8]
      }, (a as any)(Ct, [2, 15]), (a as any)(Qt, [2, 17], {
        21: 22,
        19: 130,
        22: t,
        23: s,
        24: o,
        26: r,
        28: l
      }), (a as any)(Ct, [2, 37], {
        19: 20,
        20: 21,
        21: 22,
        43: 23,
        29: 49,
        30: 61,
        32: 62,
        13: 131,
        22: t,
        23: s,
        24: o,
        26: r,
        28: l,
        34: e,
        36: n,
        37: i,
        38: u,
        39: d,
        40: p,
        41: g,
        44: m,
        45: O,
        46: S,
        47: P,
        48: M,
        49: U,
        50: H,
        51: q,
        52: G,
        53: K,
        54: J,
        55: Z,
        56: $,
        57: tt,
        58: et,
        59: at,
        60: it,
        61: nt,
        62: st,
        63: rt,
        64: lt,
        65: ot,
        66: ct,
        67: ht,
        68: ut,
        69: dt,
        70: ft,
        71: pt,
        72: yt,
        73: gt,
        74: bt
      }), (a as any)(St, [2, 21]), (a as any)(St, [2, 22]), (a as any)(T, [2, 39]), (a as any)(le, [2, 71], {
        75: 81,
        35: 132,
        76: A,
        77: k,
        79: C,
        80: w
      }), (a as any)(Mt, [2, 73]), {
        78: [1, 133]
      }, (a as any)(Mt, [2, 75]), (a as any)(Mt, [2, 76]), (a as any)(T, [2, 40]), (a as any)(T, [2, 41]), (a as any)(T, [2, 42]), (a as any)(T, [2, 43]), (a as any)(T, [2, 44]), (a as any)(T, [2, 45]), (a as any)(T, [2, 46]), (a as any)(T, [2, 47]), (a as any)(T, [2, 48]), (a as any)(T, [2, 49]), (a as any)(T, [2, 50]), (a as any)(T, [2, 51]), (a as any)(T, [2, 52]), (a as any)(T, [2, 53]), (a as any)(T, [2, 54]), (a as any)(T, [2, 55]), (a as any)(T, [2, 56]), (a as any)(T, [2, 57]), (a as any)(T, [2, 58]), (a as any)(T, [2, 60]), (a as any)(T, [2, 61]), (a as any)(T, [2, 62]), (a as any)(T, [2, 63]), (a as any)(T, [2, 64]), (a as any)(T, [2, 65]), (a as any)(T, [2, 66]), (a as any)(T, [2, 67]), (a as any)(T, [2, 68]), (a as any)(T, [2, 69]), (a as any)(T, [2, 70]), {
        31: 134,
        42: [1, 135]
      }, {
        12: [1, 136]
      }, {
        33: [1, 137]
      }, (a as any)(vt, [2, 28]), (a as any)(vt, [2, 29]), (a as any)(vt, [2, 30]), (a as any)(vt, [2, 31]), (a as any)(vt, [2, 32]), (a as any)(vt, [2, 33]), (a as any)(vt, [2, 34]), {
        1: [2, 9]
      }, {
        1: [2, 10]
      }, {
        1: [2, 11]
      }, {
        1: [2, 12]
      }, (a as any)(Qt, [2, 18]), (a as any)(Ct, [2, 38]), (a as any)(le, [2, 72]), (a as any)(Mt, [2, 74]), (a as any)(T, [2, 24]), (a as any)(T, [2, 35]), (a as any)(Ht, [2, 25]), (a as any)(Ht, [2, 26], {
        12: [1, 138]
      }), (a as any)(Ht, [2, 27])],
      defaultActions: {
        2: [2, 1],
        3: [2, 2],
        4: [2, 7],
        5: [2, 3],
        6: [2, 4],
        7: [2, 5],
        8: [2, 6],
        74: [2, 8],
        126: [2, 9],
        127: [2, 10],
        128: [2, 11],
        129: [2, 12]
      },
      parseError: (y as any)(function (this: any, x: any, v: any): any {
        if ((v as any).recoverable) ((this as any).trace as any)(x);else {
          var E: any = new (Error as any)(x);
          throw (E as any).hash = v, E;
        }
      }, "parseError"),
      parse: (y as any)(function (this: any, x: any): any {
        var Gt: any;
        var v: any = this,
          E: any = [0],
          b: any = [],
          R: any = [null],
          h: any = [],
          Dt: any = (this as any).table,
          f: any = "",
          Et: any = 0,
          oe: any = 0,
          we: number = 2,
          ce: number = 1,
          Te: any = (((h as any).slice as any).call as any)(arguments, 1),
          D: any = ((Object as any).create as any)((this as any).lexer),
          At: any = {
            yy: {}
          };
        for (Gt in (this as any).yy) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).yy, Gt) && (((At as any).yy as any)[Gt] = ((this as any).yy as any)[Gt]);
        ((D as any).setInput as any)(x, (At as any).yy), ((At as any).yy as any).lexer = D, ((At as any).yy as any).parser = this, (typeof (D as any).yylloc as any) > ("u" as any) && ((D as any).yylloc = {});
        var Kt: any = (D as any).yylloc;
        ((h as any).push as any)(Kt);
        var Oe: any = (D as any).options && ((D as any).options as any).ranges;
        (typeof ((At as any).yy as any).parseError as any) == ("function" as any) ? (this as any).parseError = ((At as any).yy as any).parseError : (this as any).parseError = (((Object as any).getPrototypeOf as any)(this) as any).parseError;
        function Re(this: any, L: any): any {
          (E as any).length = ((E as any).length as any) - ((2 as any) * (L as any) as any), (R as any).length = ((R as any).length as any) - (L as any), (h as any).length = ((h as any).length as any) - (L as any);
        }
        (y as any)(Re, "popStack");
        function he(this: any): any {
          var L: any;
          return L = ((b as any).pop as any)() || ((D as any).lex as any)() || ce, (typeof L as any) != ("number" as any) && (L instanceof Array && (b = L, L = ((b as any).pop as any)()), L = ((v as any).symbols_ as any)[L] || L), L;
        }
        (y as any)(he, "lex");
        for (var I: any, kt: any, N: any, Jt: any, wt: any = {}, Nt: any, W: any, ue: any, Yt: any;;) {
          if (kt = (E as any)[((E as any).length as any) - (1 as any)], ((this as any).defaultActions as any)[kt] ? N = ((this as any).defaultActions as any)[kt] : (((I as any) === (null as any) || (typeof I as any) > ("u" as any)) && (I = (he as any)()), N = (Dt as any)[kt] && ((Dt as any)[kt] as any)[I]), (typeof N as any) > ("u" as any) || !(N as any).length || !(N as any)[0]) {
            var Zt: any = "";
            Yt = [];
            for (Nt in (Dt as any)[kt]) ((this as any).terminals_ as any)[Nt] && (Nt as any) > (we as any) && ((Yt as any).push as any)((("'" as any) + (((this as any).terminals_ as any)[Nt] as any) as any) + ("'" as any));
            (D as any).showPosition ? Zt = (((((((("Parse error on line " as any) + ((Et as any) + (1 as any) as any) as any) + (`:
` as any) as any) + (((D as any).showPosition as any)() as any) as any) + (`
Expecting ` as any) as any) + (((Yt as any).join as any)(", ") as any) as any) + (", got '" as any) as any) + ((((this as any).terminals_ as any)[I] || I) as any) as any) + ("'" as any) : Zt = ((("Parse error on line " as any) + ((Et as any) + (1 as any) as any) as any) + (": Unexpected " as any) as any) + (((I as any) == (ce as any) ? "end of input" : (("'" as any) + ((((this as any).terminals_ as any)[I] || I) as any) as any) + ("'" as any)) as any), ((this as any).parseError as any)(Zt, {
              text: (D as any).match,
              token: ((this as any).terminals_ as any)[I] || I,
              line: (D as any).yylineno,
              loc: Kt,
              expected: Yt
            });
          }
          if ((N as any)[0] instanceof Array && ((N as any).length as any) > (1 as any)) throw new (Error as any)(((("Parse Error: multiple actions possible at state: " as any) + (kt as any) as any) + (", token: " as any) as any) + (I as any));
          switch ((N as any)[0]) {
            case 1:
              ((E as any).push as any)(I), ((R as any).push as any)((D as any).yytext), ((h as any).push as any)((D as any).yylloc), ((E as any).push as any)((N as any)[1]), I = null, oe = (D as any).yyleng, f = (D as any).yytext, Et = (D as any).yylineno, Kt = (D as any).yylloc;
              break;
            case 2:
              if (W = (((this as any).productions_ as any)[(N as any)[1]] as any)[1], (wt as any).$ = (R as any)[((R as any).length as any) - (W as any)], (wt as any)._$ = {
                first_line: ((h as any)[((h as any).length as any) - ((W || 1) as any)] as any).first_line,
                last_line: ((h as any)[((h as any).length as any) - (1 as any)] as any).last_line,
                first_column: ((h as any)[((h as any).length as any) - ((W || 1) as any)] as any).first_column,
                last_column: ((h as any)[((h as any).length as any) - (1 as any)] as any).last_column
              }, Oe && (((wt as any)._$ as any).range = [(((h as any)[((h as any).length as any) - ((W || 1) as any)] as any).range as any)[0], (((h as any)[((h as any).length as any) - (1 as any)] as any).range as any)[1]]), Jt = (((this as any).performAction as any).apply as any)(wt, (([f, oe, Et, (At as any).yy, (N as any)[1], R, h] as any).concat as any)(Te)), (typeof Jt as any) < ("u" as any)) return Jt;
              W && (E = ((E as any).slice as any)(0, ((-1 as any) * (W as any) as any) * (2 as any)), R = ((R as any).slice as any)(0, (-1 as any) * (W as any)), h = ((h as any).slice as any)(0, (-1 as any) * (W as any))), ((E as any).push as any)((((this as any).productions_ as any)[(N as any)[1]] as any)[0]), ((R as any).push as any)((wt as any).$), ((h as any).push as any)((wt as any)._$), ue = ((Dt as any)[(E as any)[((E as any).length as any) - (2 as any)]] as any)[(E as any)[((E as any).length as any) - (1 as any)]], ((E as any).push as any)(ue);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }, "parse")
    },
    Ce: any = (function (this: any): any {
      var _t: any = {
        EOF: 1,
        parseError: (y as any)(function (this: any, v: any, E: any): any {
          if (((this as any).yy as any).parser) ((((this as any).yy as any).parser as any).parseError as any)(v, E);else throw new (Error as any)(v);
        }, "parseError"),
        setInput: (y as any)(function (this: any, x: any, v: any): any {
          return (this as any).yy = v || (this as any).yy || {}, (this as any)._input = x, (this as any)._more = (this as any)._backtrack = (this as any).done = !1, (this as any).yylineno = (this as any).yyleng = 0, (this as any).yytext = (this as any).matched = (this as any).match = "", (this as any).conditionStack = ["INITIAL"], (this as any).yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [0, 0]), (this as any).offset = 0, this;
        }, "setInput"),
        input: (y as any)(function (this: any): any {
          var x: any = ((this as any)._input as any)[0];
          (this as any).yytext += x, (this as any).yyleng++, (this as any).offset++, (this as any).match += x, (this as any).matched += x;
          var v: any = ((x as any).match as any)(/(?:\r\n?|\n).*/g);
          return v ? ((this as any).yylineno++, ((this as any).yylloc as any).last_line++) : ((this as any).yylloc as any).last_column++, ((this as any).options as any).ranges && (((this as any).yylloc as any).range as any)[1]++, (this as any)._input = (((this as any)._input as any).slice as any)(1), x;
        }, "input"),
        unput: (y as any)(function (this: any, x: any): any {
          var v: any = (x as any).length,
            E: any = ((x as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any)._input = (x as any) + ((this as any)._input as any), (this as any).yytext = (((this as any).yytext as any).substr as any)(0, (((this as any).yytext as any).length as any) - (v as any)), (this as any).offset -= v;
          var b: any = (((this as any).match as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any).match = (((this as any).match as any).substr as any)(0, (((this as any).match as any).length as any) - (1 as any)), (this as any).matched = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (1 as any)), ((E as any).length as any) - (1 as any) && ((this as any).yylineno -= ((E as any).length as any) - (1 as any));
          var R: any = ((this as any).yylloc as any).range;
          return (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).first_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).first_column,
            last_column: E ? (((((E as any).length as any) === ((b as any).length as any) ? ((this as any).yylloc as any).first_column : 0) as any) + (((b as any)[((b as any).length as any) - ((E as any).length as any)] as any).length as any) as any) - (((E as any)[0] as any).length as any) : (((this as any).yylloc as any).first_column as any) - (v as any)
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(R as any)[0], (((R as any)[0] as any) + ((this as any).yyleng as any) as any) - (v as any)]), (this as any).yyleng = ((this as any).yytext as any).length, this;
        }, "unput"),
        more: (y as any)(function (this: any): any {
          return (this as any)._more = !0, this;
        }, "more"),
        reject: (y as any)(function (this: any): any {
          if (((this as any).options as any).backtrack_lexer) (this as any)._backtrack = !0;else return ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
          return this;
        }, "reject"),
        less: (y as any)(function (this: any, x: any): any {
          ((this as any).unput as any)((((this as any).match as any).slice as any)(x));
        }, "less"),
        pastInput: (y as any)(function (this: any): any {
          var x: any = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (((this as any).match as any).length as any));
          return ((((x as any).length as any) > (20 as any) ? "..." : "") as any) + (((((x as any).substr as any)(-20) as any).replace as any)(/\n/g, "") as any);
        }, "pastInput"),
        upcomingInput: (y as any)(function (this: any): any {
          var x: any = (this as any).match;
          return ((x as any).length as any) < (20 as any) && (x += (((this as any)._input as any).substr as any)(0, (20 as any) - ((x as any).length as any))), (((((x as any).substr as any)(0, 20) as any) + ((((x as any).length as any) > (20 as any) ? "..." : "") as any) as any).replace as any)(/\n/g, "");
        }, "upcomingInput"),
        showPosition: (y as any)(function (this: any): any {
          var x: any = ((this as any).pastInput as any)(),
            v: any = ((new (Array as any)(((x as any).length as any) + (1 as any)) as any).join as any)("-");
          return ((((x as any) + (((this as any).upcomingInput as any)() as any) as any) + (`
` as any) as any) + (v as any) as any) + ("^" as any);
        }, "showPosition"),
        test_match: (y as any)(function (this: any, x: any, v: any): any {
          var h: any;
          var E: any, b: any, R: any;
          if (((this as any).options as any).backtrack_lexer && (R = {
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
          }, ((this as any).options as any).ranges && (((R as any).yylloc as any).range = ((((this as any).yylloc as any).range as any).slice as any)(0))), b = (((x as any)[0] as any).match as any)(/(?:\r\n?|\n).*/g), b && ((this as any).yylineno += (b as any).length), (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).last_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).last_column,
            last_column: b ? (((b as any)[((b as any).length as any) - (1 as any)] as any).length as any) - ((((((b as any)[((b as any).length as any) - (1 as any)] as any).match as any)(/\r?\n?/) as any)[0] as any).length as any) : (((this as any).yylloc as any).last_column as any) + (((x as any)[0] as any).length as any)
          }, (this as any).yytext += (x as any)[0], (this as any).match += (x as any)[0], (this as any).matches = x, (this as any).yyleng = ((this as any).yytext as any).length, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(this as any).offset, (this as any).offset += (this as any).yyleng]), (this as any)._more = !1, (this as any)._backtrack = !1, (this as any)._input = (((this as any)._input as any).slice as any)(((x as any)[0] as any).length), (this as any).matched += (x as any)[0], E = (((this as any).performAction as any).call as any)(this, (this as any).yy, this, v, ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]), (this as any).done && (this as any)._input && ((this as any).done = !1), E) return E;
          if ((this as any)._backtrack) {
            for (h in R) (this as any)[h] = (R as any)[h];
            return !1;
          }
          return !1;
        }, "test_match"),
        next: (y as any)(function (this: any): any {
          if ((this as any).done) return (this as any).EOF;
          (this as any)._input || ((this as any).done = !0);
          var x: any, v: any, E: any, b: any;
          (this as any)._more || ((this as any).yytext = "", (this as any).match = "");
          for (var R: any = ((this as any)._currentRules as any)(), h: any = 0; (h as any) < ((R as any).length as any); h++) if (E = (((this as any)._input as any).match as any)(((this as any).rules as any)[(R as any)[h]]), E && (!v || (((E as any)[0] as any).length as any) > (((v as any)[0] as any).length as any))) {
            if (v = E, b = h, ((this as any).options as any).backtrack_lexer) {
              if (x = ((this as any).test_match as any)(E, (R as any)[h]), (x as any) !== (!1 as any)) return x;
              if ((this as any)._backtrack) {
                v = !1;
                continue;
              } else return !1;
            } else if (!((this as any).options as any).flex) break;
          }
          return v ? (x = ((this as any).test_match as any)(v, (R as any)[b]), (x as any) !== (!1 as any) ? x : !1) : ((this as any)._input as any) === ("" as any) ? (this as any).EOF : ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. Unrecognized text.
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
        }, "next"),
        lex: (y as any)(function (this: any): any {
          var v: any = ((this as any).next as any)();
          return v || ((this as any).lex as any)();
        }, "lex"),
        begin: (y as any)(function (this: any, v: any): any {
          (((this as any).conditionStack as any).push as any)(v);
        }, "begin"),
        popState: (y as any)(function (this: any): any {
          var v: any = (((this as any).conditionStack as any).length as any) - (1 as any);
          return (v as any) > (0 as any) ? (((this as any).conditionStack as any).pop as any)() : ((this as any).conditionStack as any)[0];
        }, "popState"),
        _currentRules: (y as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length && ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)] ? (((this as any).conditions as any)[((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]] as any).rules : (((this as any).conditions as any).INITIAL as any).rules;
        }, "_currentRules"),
        topState: (y as any)(function (this: any, v: any): any {
          return v = ((((this as any).conditionStack as any).length as any) - (1 as any) as any) - (((Math as any).abs as any)(v || 0) as any), (v as any) >= (0 as any) ? ((this as any).conditionStack as any)[v] : "INITIAL";
        }, "topState"),
        pushState: (y as any)(function (this: any, v: any): any {
          ((this as any).begin as any)(v);
        }, "pushState"),
        stateStackSize: (y as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length;
        }, "stateStackSize"),
        options: {},
        performAction: (y as any)(function (this: any, v: any, E: any, b: any, R: any): any {
          switch (b) {
            case 0:
              return 6;
            case 1:
              return 7;
            case 2:
              return 8;
            case 3:
              return 9;
            case 4:
              return 22;
            case 5:
              return 23;
            case 6:
              return ((this as any).begin as any)("acc_title"), 24;
            case 7:
              return ((this as any).popState as any)(), "acc_title_value";
            case 8:
              return ((this as any).begin as any)("acc_descr"), 26;
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
              break;
            case 14:
              c;
              break;
            case 15:
              return 12;
            case 16:
              break;
            case 17:
              return 11;
            case 18:
              return 15;
            case 19:
              return 16;
            case 20:
              return 17;
            case 21:
              return 18;
            case 22:
              return ((this as any).begin as any)("person_ext"), 45;
            case 23:
              return ((this as any).begin as any)("person"), 44;
            case 24:
              return ((this as any).begin as any)("system_ext_queue"), 51;
            case 25:
              return ((this as any).begin as any)("system_ext_db"), 50;
            case 26:
              return ((this as any).begin as any)("system_ext"), 49;
            case 27:
              return ((this as any).begin as any)("system_queue"), 48;
            case 28:
              return ((this as any).begin as any)("system_db"), 47;
            case 29:
              return ((this as any).begin as any)("system"), 46;
            case 30:
              return ((this as any).begin as any)("boundary"), 37;
            case 31:
              return ((this as any).begin as any)("enterprise_boundary"), 34;
            case 32:
              return ((this as any).begin as any)("system_boundary"), 36;
            case 33:
              return ((this as any).begin as any)("container_ext_queue"), 57;
            case 34:
              return ((this as any).begin as any)("container_ext_db"), 56;
            case 35:
              return ((this as any).begin as any)("container_ext"), 55;
            case 36:
              return ((this as any).begin as any)("container_queue"), 54;
            case 37:
              return ((this as any).begin as any)("container_db"), 53;
            case 38:
              return ((this as any).begin as any)("container"), 52;
            case 39:
              return ((this as any).begin as any)("container_boundary"), 38;
            case 40:
              return ((this as any).begin as any)("component_ext_queue"), 63;
            case 41:
              return ((this as any).begin as any)("component_ext_db"), 62;
            case 42:
              return ((this as any).begin as any)("component_ext"), 61;
            case 43:
              return ((this as any).begin as any)("component_queue"), 60;
            case 44:
              return ((this as any).begin as any)("component_db"), 59;
            case 45:
              return ((this as any).begin as any)("component"), 58;
            case 46:
              return ((this as any).begin as any)("node"), 39;
            case 47:
              return ((this as any).begin as any)("node"), 39;
            case 48:
              return ((this as any).begin as any)("node_l"), 40;
            case 49:
              return ((this as any).begin as any)("node_r"), 41;
            case 50:
              return ((this as any).begin as any)("rel"), 64;
            case 51:
              return ((this as any).begin as any)("birel"), 65;
            case 52:
              return ((this as any).begin as any)("rel_u"), 66;
            case 53:
              return ((this as any).begin as any)("rel_u"), 66;
            case 54:
              return ((this as any).begin as any)("rel_d"), 67;
            case 55:
              return ((this as any).begin as any)("rel_d"), 67;
            case 56:
              return ((this as any).begin as any)("rel_l"), 68;
            case 57:
              return ((this as any).begin as any)("rel_l"), 68;
            case 58:
              return ((this as any).begin as any)("rel_r"), 69;
            case 59:
              return ((this as any).begin as any)("rel_r"), 69;
            case 60:
              return ((this as any).begin as any)("rel_b"), 70;
            case 61:
              return ((this as any).begin as any)("rel_index"), 71;
            case 62:
              return ((this as any).begin as any)("update_el_style"), 72;
            case 63:
              return ((this as any).begin as any)("update_rel_style"), 73;
            case 64:
              return ((this as any).begin as any)("update_layout_config"), 74;
            case 65:
              return "EOF_IN_STRUCT";
            case 66:
              return ((this as any).begin as any)("attribute"), "ATTRIBUTE_EMPTY";
            case 67:
              ((this as any).begin as any)("attribute");
              break;
            case 68:
              ((this as any).popState as any)(), ((this as any).popState as any)();
              break;
            case 69:
              return 80;
            case 70:
              break;
            case 71:
              return 80;
            case 72:
              ((this as any).begin as any)("string");
              break;
            case 73:
              ((this as any).popState as any)();
              break;
            case 74:
              return "STR";
            case 75:
              ((this as any).begin as any)("string_kv");
              break;
            case 76:
              return ((this as any).begin as any)("string_kv_key"), "STR_KEY";
            case 77:
              ((this as any).popState as any)(), ((this as any).begin as any)("string_kv_value");
              break;
            case 78:
              return "STR_VALUE";
            case 79:
              ((this as any).popState as any)(), ((this as any).popState as any)();
              break;
            case 80:
              return "STR";
            case 81:
              return "LBRACE";
            case 82:
              return "RBRACE";
            case 83:
              return "SPACE";
            case 84:
              return "EOL";
            case 85:
              return 14;
          }
        }, "anonymous"),
        rules: [/^(?:.*direction\s+TB[^\n]*)/, /^(?:.*direction\s+BT[^\n]*)/, /^(?:.*direction\s+RL[^\n]*)/, /^(?:.*direction\s+LR[^\n]*)/, /^(?:title\s[^#\n;]+)/, /^(?:accDescription\s[^#\n;]+)/, /^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:%%(?!\{)*[^\n]*(\r?\n?)+)/, /^(?:%%[^\n]*(\r?\n)*)/, /^(?:\s*(\r?\n)+)/, /^(?:\s+)/, /^(?:C4Context\b)/, /^(?:C4Container\b)/, /^(?:C4Component\b)/, /^(?:C4Dynamic\b)/, /^(?:C4Deployment\b)/, /^(?:Person_Ext\b)/, /^(?:Person\b)/, /^(?:SystemQueue_Ext\b)/, /^(?:SystemDb_Ext\b)/, /^(?:System_Ext\b)/, /^(?:SystemQueue\b)/, /^(?:SystemDb\b)/, /^(?:System\b)/, /^(?:Boundary\b)/, /^(?:Enterprise_Boundary\b)/, /^(?:System_Boundary\b)/, /^(?:ContainerQueue_Ext\b)/, /^(?:ContainerDb_Ext\b)/, /^(?:Container_Ext\b)/, /^(?:ContainerQueue\b)/, /^(?:ContainerDb\b)/, /^(?:Container\b)/, /^(?:Container_Boundary\b)/, /^(?:ComponentQueue_Ext\b)/, /^(?:ComponentDb_Ext\b)/, /^(?:Component_Ext\b)/, /^(?:ComponentQueue\b)/, /^(?:ComponentDb\b)/, /^(?:Component\b)/, /^(?:Deployment_Node\b)/, /^(?:Node\b)/, /^(?:Node_L\b)/, /^(?:Node_R\b)/, /^(?:Rel\b)/, /^(?:BiRel\b)/, /^(?:Rel_Up\b)/, /^(?:Rel_U\b)/, /^(?:Rel_Down\b)/, /^(?:Rel_D\b)/, /^(?:Rel_Left\b)/, /^(?:Rel_L\b)/, /^(?:Rel_Right\b)/, /^(?:Rel_R\b)/, /^(?:Rel_Back\b)/, /^(?:RelIndex\b)/, /^(?:UpdateElementStyle\b)/, /^(?:UpdateRelStyle\b)/, /^(?:UpdateLayoutConfig\b)/, /^(?:$)/, /^(?:[(][ ]*[,])/, /^(?:[(])/, /^(?:[)])/, /^(?:,,)/, /^(?:,)/, /^(?:[ ]*["]["])/, /^(?:[ ]*["])/, /^(?:["])/, /^(?:[^"]*)/, /^(?:[ ]*[\$])/, /^(?:[^=]*)/, /^(?:[=][ ]*["])/, /^(?:[^"]+)/, /^(?:["])/, /^(?:[^,]+)/, /^(?:\{)/, /^(?:\})/, /^(?:[\s]+)/, /^(?:[\n\r]+)/, /^(?:$)/],
        conditions: {
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
          string_kv_value: {
            rules: [78, 79],
            inclusive: !1
          },
          string_kv_key: {
            rules: [77],
            inclusive: !1
          },
          string_kv: {
            rules: [76],
            inclusive: !1
          },
          string: {
            rules: [73, 74],
            inclusive: !1
          },
          attribute: {
            rules: [68, 69, 70, 71, 72, 75, 80],
            inclusive: !1
          },
          update_layout_config: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          update_rel_style: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          update_el_style: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          rel_b: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          rel_r: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          rel_l: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          rel_d: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          rel_u: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          rel_bi: {
            rules: [],
            inclusive: !1
          },
          rel: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          node_r: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          node_l: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          node: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          index: {
            rules: [],
            inclusive: !1
          },
          rel_index: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          component_ext_queue: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          component_ext_db: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          component_ext: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          component_queue: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          component_db: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          component: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          container_boundary: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          container_ext_queue: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          container_ext_db: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          container_ext: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          container_queue: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          container_db: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          container: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          birel: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          system_boundary: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          enterprise_boundary: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          boundary: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          system_ext_queue: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          system_ext_db: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          system_ext: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          system_queue: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          system_db: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          system: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          person_ext: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          person: {
            rules: [65, 66, 67, 68],
            inclusive: !1
          },
          INITIAL: {
            rules: [0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 81, 82, 83, 84, 85],
            inclusive: !0
          }
        }
      };
      return _t;
    } as any)();
  (qt as any).lexer = Ce;
  function Lt(this: any): any {
    (this as any).yy = {};
  }
  return (y as any)(Lt, "Parser"), (Lt as any).prototype = qt, (qt as any).Parser = Lt, new (Lt as any)();
} as any)();
(Ft as any).parser = Ft;
var Ue: any = Ft,
  V: any = [],
  xt: any = [""],
  B: any = "global",
  F: any = "",
  X: any = [{
    alias: "global",
    label: {
      text: "global"
    },
    type: {
      text: "global"
    },
    tags: null,
    link: null,
    parentBoundary: ""
  }],
  It: any = [],
  ie: any = "",
  ne: any = !1,
  Vt: any = 4,
  zt: any = 2,
  be: any,
  Fe: any = (y as any)(function (this: any): any {
    return be;
  }, "getC4Type"),
  Ve: any = (y as any)(function (this: any, a: any): any {
    be = (ge as any)(a, (Bt as any)());
  }, "setC4Type"),
  ze: any = (y as any)(function (this: any, a: any, t: any, s: any, o: any, r: any, l: any, e: any, n: any, i: any): any {
    if ((a as any) == (null as any) || (t as any) === (void 0 as any) || (t as any) === (null as any) || (s as any) === (void 0 as any) || (s as any) === (null as any) || (o as any) === (void 0 as any) || (o as any) === (null as any)) return;
    let u: any = {};
    const d: any = ((It as any).find as any)((p: any): any => ((p as any).from as any) === (t as any) && ((p as any).to as any) === (s as any));
    if (d ? u = d : ((It as any).push as any)(u), (u as any).type = a, (u as any).from = t, (u as any).to = s, (u as any).label = {
      text: o
    }, (r as any) == (null as any)) (u as any).techn = {
      text: ""
    };else if ((typeof r as any) == ("object" as any)) {
      let [p, g]: any = (((Object as any).entries as any)(r) as any)[0];
      (u as any)[p] = {
        text: g
      };
    } else (u as any).techn = {
      text: r
    };
    if ((l as any) == (null as any)) (u as any).descr = {
      text: ""
    };else if ((typeof l as any) == ("object" as any)) {
      let [p, g]: any = (((Object as any).entries as any)(l) as any)[0];
      (u as any)[p] = {
        text: g
      };
    } else (u as any).descr = {
      text: l
    };
    if ((typeof e as any) == ("object" as any)) {
      let [p, g]: any = (((Object as any).entries as any)(e) as any)[0];
      (u as any)[p] = g;
    } else (u as any).sprite = e;
    if ((typeof n as any) == ("object" as any)) {
      let [p, g]: any = (((Object as any).entries as any)(n) as any)[0];
      (u as any)[p] = g;
    } else (u as any).tags = n;
    if ((typeof i as any) == ("object" as any)) {
      let [p, g]: any = (((Object as any).entries as any)(i) as any)[0];
      (u as any)[p] = g;
    } else (u as any).link = i;
    (u as any).wrap = (mt as any)();
  }, "addRel"),
  Xe: any = (y as any)(function (this: any, a: any, t: any, s: any, o: any, r: any, l: any, e: any): any {
    if ((t as any) === (null as any) || (s as any) === (null as any)) return;
    let n: any = {};
    const i: any = ((V as any).find as any)((u: any): any => ((u as any).alias as any) === (t as any));
    if (i && (t as any) === ((i as any).alias as any) ? n = i : ((n as any).alias = t, ((V as any).push as any)(n)), (s as any) == (null as any) ? (n as any).label = {
      text: ""
    } : (n as any).label = {
      text: s
    }, (o as any) == (null as any)) (n as any).descr = {
      text: ""
    };else if ((typeof o as any) == ("object" as any)) {
      let [u, d]: any = (((Object as any).entries as any)(o) as any)[0];
      (n as any)[u] = {
        text: d
      };
    } else (n as any).descr = {
      text: o
    };
    if ((typeof r as any) == ("object" as any)) {
      let [u, d]: any = (((Object as any).entries as any)(r) as any)[0];
      (n as any)[u] = d;
    } else (n as any).sprite = r;
    if ((typeof l as any) == ("object" as any)) {
      let [u, d]: any = (((Object as any).entries as any)(l) as any)[0];
      (n as any)[u] = d;
    } else (n as any).tags = l;
    if ((typeof e as any) == ("object" as any)) {
      let [u, d]: any = (((Object as any).entries as any)(e) as any)[0];
      (n as any)[u] = d;
    } else (n as any).link = e;
    (n as any).typeC4Shape = {
      text: a
    }, (n as any).parentBoundary = B, (n as any).wrap = (mt as any)();
  }, "addPersonOrSystem"),
  We: any = (y as any)(function (this: any, a: any, t: any, s: any, o: any, r: any, l: any, e: any, n: any): any {
    if ((t as any) === (null as any) || (s as any) === (null as any)) return;
    let i: any = {};
    const u: any = ((V as any).find as any)((d: any): any => ((d as any).alias as any) === (t as any));
    if (u && (t as any) === ((u as any).alias as any) ? i = u : ((i as any).alias = t, ((V as any).push as any)(i)), (s as any) == (null as any) ? (i as any).label = {
      text: ""
    } : (i as any).label = {
      text: s
    }, (o as any) == (null as any)) (i as any).techn = {
      text: ""
    };else if ((typeof o as any) == ("object" as any)) {
      let [d, p]: any = (((Object as any).entries as any)(o) as any)[0];
      (i as any)[d] = {
        text: p
      };
    } else (i as any).techn = {
      text: o
    };
    if ((r as any) == (null as any)) (i as any).descr = {
      text: ""
    };else if ((typeof r as any) == ("object" as any)) {
      let [d, p]: any = (((Object as any).entries as any)(r) as any)[0];
      (i as any)[d] = {
        text: p
      };
    } else (i as any).descr = {
      text: r
    };
    if ((typeof l as any) == ("object" as any)) {
      let [d, p]: any = (((Object as any).entries as any)(l) as any)[0];
      (i as any)[d] = p;
    } else (i as any).sprite = l;
    if ((typeof e as any) == ("object" as any)) {
      let [d, p]: any = (((Object as any).entries as any)(e) as any)[0];
      (i as any)[d] = p;
    } else (i as any).tags = e;
    if ((typeof n as any) == ("object" as any)) {
      let [d, p]: any = (((Object as any).entries as any)(n) as any)[0];
      (i as any)[d] = p;
    } else (i as any).link = n;
    (i as any).wrap = (mt as any)(), (i as any).typeC4Shape = {
      text: a
    }, (i as any).parentBoundary = B;
  }, "addContainer"),
  Qe: any = (y as any)(function (this: any, a: any, t: any, s: any, o: any, r: any, l: any, e: any, n: any): any {
    if ((t as any) === (null as any) || (s as any) === (null as any)) return;
    let i: any = {};
    const u: any = ((V as any).find as any)((d: any): any => ((d as any).alias as any) === (t as any));
    if (u && (t as any) === ((u as any).alias as any) ? i = u : ((i as any).alias = t, ((V as any).push as any)(i)), (s as any) == (null as any) ? (i as any).label = {
      text: ""
    } : (i as any).label = {
      text: s
    }, (o as any) == (null as any)) (i as any).techn = {
      text: ""
    };else if ((typeof o as any) == ("object" as any)) {
      let [d, p]: any = (((Object as any).entries as any)(o) as any)[0];
      (i as any)[d] = {
        text: p
      };
    } else (i as any).techn = {
      text: o
    };
    if ((r as any) == (null as any)) (i as any).descr = {
      text: ""
    };else if ((typeof r as any) == ("object" as any)) {
      let [d, p]: any = (((Object as any).entries as any)(r) as any)[0];
      (i as any)[d] = {
        text: p
      };
    } else (i as any).descr = {
      text: r
    };
    if ((typeof l as any) == ("object" as any)) {
      let [d, p]: any = (((Object as any).entries as any)(l) as any)[0];
      (i as any)[d] = p;
    } else (i as any).sprite = l;
    if ((typeof e as any) == ("object" as any)) {
      let [d, p]: any = (((Object as any).entries as any)(e) as any)[0];
      (i as any)[d] = p;
    } else (i as any).tags = e;
    if ((typeof n as any) == ("object" as any)) {
      let [d, p]: any = (((Object as any).entries as any)(n) as any)[0];
      (i as any)[d] = p;
    } else (i as any).link = n;
    (i as any).wrap = (mt as any)(), (i as any).typeC4Shape = {
      text: a
    }, (i as any).parentBoundary = B;
  }, "addComponent"),
  He: any = (y as any)(function (this: any, a: any, t: any, s: any, o: any, r: any): any {
    if ((a as any) === (null as any) || (t as any) === (null as any)) return;
    let l: any = {};
    const e: any = ((X as any).find as any)((n: any): any => ((n as any).alias as any) === (a as any));
    if (e && (a as any) === ((e as any).alias as any) ? l = e : ((l as any).alias = a, ((X as any).push as any)(l)), (t as any) == (null as any) ? (l as any).label = {
      text: ""
    } : (l as any).label = {
      text: t
    }, (s as any) == (null as any)) (l as any).type = {
      text: "system"
    };else if ((typeof s as any) == ("object" as any)) {
      let [n, i]: any = (((Object as any).entries as any)(s) as any)[0];
      (l as any)[n] = {
        text: i
      };
    } else (l as any).type = {
      text: s
    };
    if ((typeof o as any) == ("object" as any)) {
      let [n, i]: any = (((Object as any).entries as any)(o) as any)[0];
      (l as any)[n] = i;
    } else (l as any).tags = o;
    if ((typeof r as any) == ("object" as any)) {
      let [n, i]: any = (((Object as any).entries as any)(r) as any)[0];
      (l as any)[n] = i;
    } else (l as any).link = r;
    (l as any).parentBoundary = B, (l as any).wrap = (mt as any)(), F = B, B = a, ((xt as any).push as any)(F);
  }, "addPersonOrSystemBoundary"),
  qe: any = (y as any)(function (this: any, a: any, t: any, s: any, o: any, r: any): any {
    if ((a as any) === (null as any) || (t as any) === (null as any)) return;
    let l: any = {};
    const e: any = ((X as any).find as any)((n: any): any => ((n as any).alias as any) === (a as any));
    if (e && (a as any) === ((e as any).alias as any) ? l = e : ((l as any).alias = a, ((X as any).push as any)(l)), (t as any) == (null as any) ? (l as any).label = {
      text: ""
    } : (l as any).label = {
      text: t
    }, (s as any) == (null as any)) (l as any).type = {
      text: "container"
    };else if ((typeof s as any) == ("object" as any)) {
      let [n, i]: any = (((Object as any).entries as any)(s) as any)[0];
      (l as any)[n] = {
        text: i
      };
    } else (l as any).type = {
      text: s
    };
    if ((typeof o as any) == ("object" as any)) {
      let [n, i]: any = (((Object as any).entries as any)(o) as any)[0];
      (l as any)[n] = i;
    } else (l as any).tags = o;
    if ((typeof r as any) == ("object" as any)) {
      let [n, i]: any = (((Object as any).entries as any)(r) as any)[0];
      (l as any)[n] = i;
    } else (l as any).link = r;
    (l as any).parentBoundary = B, (l as any).wrap = (mt as any)(), F = B, B = a, ((xt as any).push as any)(F);
  }, "addContainerBoundary"),
  Ge: any = (y as any)(function (this: any, a: any, t: any, s: any, o: any, r: any, l: any, e: any, n: any): any {
    if ((t as any) === (null as any) || (s as any) === (null as any)) return;
    let i: any = {};
    const u: any = ((X as any).find as any)((d: any): any => ((d as any).alias as any) === (t as any));
    if (u && (t as any) === ((u as any).alias as any) ? i = u : ((i as any).alias = t, ((X as any).push as any)(i)), (s as any) == (null as any) ? (i as any).label = {
      text: ""
    } : (i as any).label = {
      text: s
    }, (o as any) == (null as any)) (i as any).type = {
      text: "node"
    };else if ((typeof o as any) == ("object" as any)) {
      let [d, p]: any = (((Object as any).entries as any)(o) as any)[0];
      (i as any)[d] = {
        text: p
      };
    } else (i as any).type = {
      text: o
    };
    if ((r as any) == (null as any)) (i as any).descr = {
      text: ""
    };else if ((typeof r as any) == ("object" as any)) {
      let [d, p]: any = (((Object as any).entries as any)(r) as any)[0];
      (i as any)[d] = {
        text: p
      };
    } else (i as any).descr = {
      text: r
    };
    if ((typeof e as any) == ("object" as any)) {
      let [d, p]: any = (((Object as any).entries as any)(e) as any)[0];
      (i as any)[d] = p;
    } else (i as any).tags = e;
    if ((typeof n as any) == ("object" as any)) {
      let [d, p]: any = (((Object as any).entries as any)(n) as any)[0];
      (i as any)[d] = p;
    } else (i as any).link = n;
    (i as any).nodeType = a, (i as any).parentBoundary = B, (i as any).wrap = (mt as any)(), F = B, B = t, ((xt as any).push as any)(F);
  }, "addDeploymentNode"),
  Ke: any = (y as any)(function (this: any): any {
    B = F, ((xt as any).pop as any)(), F = ((xt as any).pop as any)(), ((xt as any).push as any)(F);
  }, "popBoundaryParseStack"),
  Je: any = (y as any)(function (this: any, a: any, t: any, s: any, o: any, r: any, l: any, e: any, n: any, i: any, u: any, d: any): any {
    let p: any = ((V as any).find as any)((g: any): any => ((g as any).alias as any) === (t as any));
    if (!((p as any) === (void 0 as any) && (p = ((X as any).find as any)((g: any): any => ((g as any).alias as any) === (t as any)), (p as any) === (void 0 as any)))) {
      if ((s as any) != (null as any)) if ((typeof s as any) == ("object" as any)) {
        let [g, m]: any = (((Object as any).entries as any)(s) as any)[0];
        (p as any)[g] = m;
      } else (p as any).bgColor = s;
      if ((o as any) != (null as any)) if ((typeof o as any) == ("object" as any)) {
        let [g, m]: any = (((Object as any).entries as any)(o) as any)[0];
        (p as any)[g] = m;
      } else (p as any).fontColor = o;
      if ((r as any) != (null as any)) if ((typeof r as any) == ("object" as any)) {
        let [g, m]: any = (((Object as any).entries as any)(r) as any)[0];
        (p as any)[g] = m;
      } else (p as any).borderColor = r;
      if ((l as any) != (null as any)) if ((typeof l as any) == ("object" as any)) {
        let [g, m]: any = (((Object as any).entries as any)(l) as any)[0];
        (p as any)[g] = m;
      } else (p as any).shadowing = l;
      if ((e as any) != (null as any)) if ((typeof e as any) == ("object" as any)) {
        let [g, m]: any = (((Object as any).entries as any)(e) as any)[0];
        (p as any)[g] = m;
      } else (p as any).shape = e;
      if ((n as any) != (null as any)) if ((typeof n as any) == ("object" as any)) {
        let [g, m]: any = (((Object as any).entries as any)(n) as any)[0];
        (p as any)[g] = m;
      } else (p as any).sprite = n;
      if ((i as any) != (null as any)) if ((typeof i as any) == ("object" as any)) {
        let [g, m]: any = (((Object as any).entries as any)(i) as any)[0];
        (p as any)[g] = m;
      } else (p as any).techn = i;
      if ((u as any) != (null as any)) if ((typeof u as any) == ("object" as any)) {
        let [g, m]: any = (((Object as any).entries as any)(u) as any)[0];
        (p as any)[g] = m;
      } else (p as any).legendText = u;
      if ((d as any) != (null as any)) if ((typeof d as any) == ("object" as any)) {
        let [g, m]: any = (((Object as any).entries as any)(d) as any)[0];
        (p as any)[g] = m;
      } else (p as any).legendSprite = d;
    }
  }, "updateElStyle"),
  Ze: any = (y as any)(function (this: any, a: any, t: any, s: any, o: any, r: any, l: any, e: any): any {
    const n: any = ((It as any).find as any)((i: any): any => ((i as any).from as any) === (t as any) && ((i as any).to as any) === (s as any));
    if ((n as any) !== (void 0 as any)) {
      if ((o as any) != (null as any)) if ((typeof o as any) == ("object" as any)) {
        let [i, u]: any = (((Object as any).entries as any)(o) as any)[0];
        (n as any)[i] = u;
      } else (n as any).textColor = o;
      if ((r as any) != (null as any)) if ((typeof r as any) == ("object" as any)) {
        let [i, u]: any = (((Object as any).entries as any)(r) as any)[0];
        (n as any)[i] = u;
      } else (n as any).lineColor = r;
      if ((l as any) != (null as any)) if ((typeof l as any) == ("object" as any)) {
        let [i, u]: any = (((Object as any).entries as any)(l) as any)[0];
        (n as any)[i] = (parseInt as any)(u);
      } else (n as any).offsetX = (parseInt as any)(l);
      if ((e as any) != (null as any)) if ((typeof e as any) == ("object" as any)) {
        let [i, u]: any = (((Object as any).entries as any)(e) as any)[0];
        (n as any)[i] = (parseInt as any)(u);
      } else (n as any).offsetY = (parseInt as any)(e);
    }
  }, "updateRelStyle"),
  $e: any = (y as any)(function (this: any, a: any, t: any, s: any): any {
    let o: any = Vt,
      r: any = zt;
    if ((typeof t as any) == ("object" as any)) {
      const l: any = (((Object as any).values as any)(t) as any)[0];
      o = (parseInt as any)(l);
    } else o = (parseInt as any)(t);
    if ((typeof s as any) == ("object" as any)) {
      const l: any = (((Object as any).values as any)(s) as any)[0];
      r = (parseInt as any)(l);
    } else r = (parseInt as any)(s);
    (o as any) >= (1 as any) && (Vt = o), (r as any) >= (1 as any) && (zt = r);
  }, "updateLayoutConfig"),
  t0: any = (y as any)(function (this: any): any {
    return Vt;
  }, "getC4ShapeInRow"),
  e0: any = (y as any)(function (this: any): any {
    return zt;
  }, "getC4BoundaryInRow"),
  a0: any = (y as any)(function (this: any): any {
    return B;
  }, "getCurrentBoundaryParse"),
  i0: any = (y as any)(function (this: any): any {
    return F;
  }, "getParentBoundaryParse"),
  _e: any = (y as any)(function (this: any, a: any): any {
    return (a as any) == (null as any) ? V : ((V as any).filter as any)((t: any): any => ((t as any).parentBoundary as any) === (a as any));
  }, "getC4ShapeArray"),
  n0: any = (y as any)(function (this: any, a: any): any {
    return ((V as any).find as any)((t: any): any => ((t as any).alias as any) === (a as any));
  }, "getC4Shape"),
  s0: any = (y as any)(function (this: any, a: any): any {
    return ((Object as any).keys as any)((_e as any)(a));
  }, "getC4ShapeKeys"),
  xe: any = (y as any)(function (this: any, a: any): any {
    return (a as any) == (null as any) ? X : ((X as any).filter as any)((t: any): any => ((t as any).parentBoundary as any) === (a as any));
  }, "getBoundaries"),
  r0: any = xe,
  l0: any = (y as any)(function (this: any): any {
    return It;
  }, "getRels"),
  o0: any = (y as any)(function (this: any): any {
    return ie;
  }, "getTitle"),
  c0: any = (y as any)(function (this: any, a: any): any {
    ne = a;
  }, "setWrap"),
  mt: any = (y as any)(function (this: any): any {
    return ne;
  }, "autoWrap"),
  h0: any = (y as any)(function (this: any): any {
    V = [], X = [{
      alias: "global",
      label: {
        text: "global"
      },
      type: {
        text: "global"
      },
      tags: null,
      link: null,
      parentBoundary: ""
    }], F = "", B = "global", xt = [""], It = [], xt = [""], ie = "", ne = !1, Vt = 4, zt = 2;
  }, "clear"),
  u0: any = {
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
    DOTTED_POINT: 25
  },
  d0: any = {
    FILLED: 0,
    OPEN: 1
  },
  f0: any = {
    LEFTOF: 0,
    RIGHTOF: 1,
    OVER: 2
  },
  p0: any = (y as any)(function (this: any, a: any): any {
    ie = (ge as any)(a, (Bt as any)());
  }, "setTitle"),
  te: any = {
    addPersonOrSystem: Xe,
    addPersonOrSystemBoundary: He,
    addContainer: We,
    addContainerBoundary: qe,
    addComponent: Qe,
    addDeploymentNode: Ge,
    popBoundaryParseStack: Ke,
    addRel: ze,
    updateElStyle: Je,
    updateRelStyle: Ze,
    updateLayoutConfig: $e,
    autoWrap: mt,
    setWrap: c0,
    getC4ShapeArray: _e,
    getC4Shape: n0,
    getC4ShapeKeys: s0,
    getBoundaries: xe,
    getBoundarys: r0,
    getCurrentBoundaryParse: a0,
    getParentBoundaryParse: i0,
    getRels: l0,
    getTitle: o0,
    getC4Type: Fe,
    getC4ShapeInRow: t0,
    getC4BoundaryInRow: e0,
    setAccTitle: Me,
    getAccTitle: Ie,
    getAccDescription: Be,
    setAccDescription: Pe,
    getConfig: (y as any)((): any => ((Bt as any)() as any).c4, "getConfig"),
    clear: h0,
    LINETYPE: u0,
    ARROWTYPE: d0,
    PLACEMENT: f0,
    setTitle: p0,
    setC4Type: Ve
  },
  se: any = (y as any)(function (this: any, a: any, t: any): any {
    return (De as any)(a, t);
  }, "drawRect"),
  me: any = (y as any)(function (this: any, a: any, t: any, s: any, o: any, r: any, l: any): any {
    const e: any = ((a as any).append as any)("image");
    ((e as any).attr as any)("width", t), ((e as any).attr as any)("height", s), ((e as any).attr as any)("x", o), ((e as any).attr as any)("y", r);
    let n: any = ((l as any).startsWith as any)("data:image/png;base64") ? l : ((Ye as any).sanitizeUrl as any)(l);
    ((e as any).attr as any)("xlink:href", n);
  }, "drawImage"),
  y0: any = (y as any)((a: any, t: any, s: any, o: any): any => {
    const r: any = ((a as any).append as any)("g");
    let l: any = 0;
    for (let e of t) {
      let n: any = (e as any).textColor ? (e as any).textColor : "#444444",
        i: any = (e as any).lineColor ? (e as any).lineColor : "#444444",
        u: any = (e as any).offsetX ? (parseInt as any)((e as any).offsetX) : 0,
        d: any = (e as any).offsetY ? (parseInt as any)((e as any).offsetY) : 0,
        p: string = "";
      if ((l as any) === (0 as any)) {
        let m: any = ((r as any).append as any)("line");
        ((m as any).attr as any)("x1", ((e as any).startPoint as any).x), ((m as any).attr as any)("y1", ((e as any).startPoint as any).y), ((m as any).attr as any)("x2", ((e as any).endPoint as any).x), ((m as any).attr as any)("y2", ((e as any).endPoint as any).y), ((m as any).attr as any)("stroke-width", "1"), ((m as any).attr as any)("stroke", i), ((m as any).style as any)("fill", "none"), ((e as any).type as any) !== ("rel_b" as any) && ((m as any).attr as any)("marker-end", (((("url(" as any) + (p as any) as any) + ("#" as any) as any) + (o as any) as any) + ("-arrowhead)" as any)), (((e as any).type as any) === ("birel" as any) || ((e as any).type as any) === ("rel_b" as any)) && ((m as any).attr as any)("marker-start", (((("url(" as any) + (p as any) as any) + ("#" as any) as any) + (o as any) as any) + ("-arrowend)" as any)), l = -1;
      } else {
        let m: any = ((r as any).append as any)("path");
        ((((((((m as any).attr as any)("fill", "none") as any).attr as any)("stroke-width", "1") as any).attr as any)("stroke", i) as any).attr as any)("d", (((((((((((("Mstartx,starty Qcontrolx,controly stopx,stopy " as any).replaceAll as any)("startx", ((e as any).startPoint as any).x) as any).replaceAll as any)("starty", ((e as any).startPoint as any).y) as any).replaceAll as any)("controlx", ((((e as any).startPoint as any).x as any) + (((((e as any).endPoint as any).x as any) - (((e as any).startPoint as any).x as any) as any) / (2 as any) as any) as any) - (((((e as any).endPoint as any).x as any) - (((e as any).startPoint as any).x as any) as any) / (4 as any) as any)) as any).replaceAll as any)("controly", (((e as any).startPoint as any).y as any) + (((((e as any).endPoint as any).y as any) - (((e as any).startPoint as any).y as any) as any) / (2 as any) as any)) as any).replaceAll as any)("stopx", ((e as any).endPoint as any).x) as any).replaceAll as any)("stopy", ((e as any).endPoint as any).y)), ((e as any).type as any) !== ("rel_b" as any) && ((m as any).attr as any)("marker-end", (((("url(" as any) + (p as any) as any) + ("#" as any) as any) + (o as any) as any) + ("-arrowhead)" as any)), (((e as any).type as any) === ("birel" as any) || ((e as any).type as any) === ("rel_b" as any)) && ((m as any).attr as any)("marker-start", (((("url(" as any) + (p as any) as any) + ("#" as any) as any) + (o as any) as any) + ("-arrowend)" as any));
      }
      let g: any = ((s as any).messageFont as any)();
      ((Q as any)(s) as any)(((e as any).label as any).text, r, ((((Math as any).min as any)(((e as any).startPoint as any).x, ((e as any).endPoint as any).x) as any) + ((((Math as any).abs as any)((((e as any).endPoint as any).x as any) - (((e as any).startPoint as any).x as any)) as any) / (2 as any) as any) as any) + (u as any), ((((Math as any).min as any)(((e as any).startPoint as any).y, ((e as any).endPoint as any).y) as any) + ((((Math as any).abs as any)((((e as any).endPoint as any).y as any) - (((e as any).startPoint as any).y as any)) as any) / (2 as any) as any) as any) + (d as any), ((e as any).label as any).width, ((e as any).label as any).height, {
        fill: n
      }, g), (e as any).techn && (((e as any).techn as any).text as any) !== ("" as any) && (g = ((s as any).messageFont as any)(), ((Q as any)(s) as any)((("[" as any) + (((e as any).techn as any).text as any) as any) + ("]" as any), r, ((((Math as any).min as any)(((e as any).startPoint as any).x, ((e as any).endPoint as any).x) as any) + ((((Math as any).abs as any)((((e as any).endPoint as any).x as any) - (((e as any).startPoint as any).x as any)) as any) / (2 as any) as any) as any) + (u as any), ((((((Math as any).min as any)(((e as any).startPoint as any).y, ((e as any).endPoint as any).y) as any) + ((((Math as any).abs as any)((((e as any).endPoint as any).y as any) - (((e as any).startPoint as any).y as any)) as any) / (2 as any) as any) as any) + ((s as any).messageFontSize as any) as any) + (5 as any) as any) + (d as any), ((Math as any).max as any)(((e as any).label as any).width, ((e as any).techn as any).width), ((e as any).techn as any).height, {
        fill: n,
        "font-style": "italic"
      }, g));
    }
  }, "drawRels"),
  g0: any = (y as any)(function (this: any, a: any, t: any, s: any): any {
    const o: any = ((a as any).append as any)("g");
    let r: any = (t as any).bgColor ? (t as any).bgColor : "none",
      l: any = (t as any).borderColor ? (t as any).borderColor : "#444444",
      e: any = (t as any).fontColor ? (t as any).fontColor : "black",
      n: any = {
        "stroke-width": 1,
        "stroke-dasharray": "7.0,7.0"
      };
    (t as any).nodeType && (n = {
      "stroke-width": 1
    });
    let i: any = {
      x: (t as any).x,
      y: (t as any).y,
      fill: r,
      stroke: l,
      width: (t as any).width,
      height: (t as any).height,
      rx: 2.5,
      ry: 2.5,
      attrs: n
    };
    (se as any)(o, i);
    let u: any = ((s as any).boundaryFont as any)();
    (u as any).fontWeight = "bold", (u as any).fontSize = ((u as any).fontSize as any) + (2 as any), (u as any).fontColor = e, ((Q as any)(s) as any)(((t as any).label as any).text, o, (t as any).x, ((t as any).y as any) + (((t as any).label as any).Y as any), (t as any).width, (t as any).height, {
      fill: "#444444"
    }, u), (t as any).type && (((t as any).type as any).text as any) !== ("" as any) && (u = ((s as any).boundaryFont as any)(), (u as any).fontColor = e, ((Q as any)(s) as any)(((t as any).type as any).text, o, (t as any).x, ((t as any).y as any) + (((t as any).type as any).Y as any), (t as any).width, (t as any).height, {
      fill: "#444444"
    }, u)), (t as any).descr && (((t as any).descr as any).text as any) !== ("" as any) && (u = ((s as any).boundaryFont as any)(), (u as any).fontSize = ((u as any).fontSize as any) - (2 as any), (u as any).fontColor = e, ((Q as any)(s) as any)(((t as any).descr as any).text, o, (t as any).x, ((t as any).y as any) + (((t as any).descr as any).Y as any), (t as any).width, (t as any).height, {
      fill: "#444444"
    }, u));
  }, "drawBoundary"),
  b0: any = (y as any)(function (this: any, a: any, t: any, s: any): any {
    let o: any = (t as any).bgColor ? (t as any).bgColor : (s as any)[(((t as any).typeC4Shape as any).text as any) + ("_bg_color" as any)],
      r: any = (t as any).borderColor ? (t as any).borderColor : (s as any)[(((t as any).typeC4Shape as any).text as any) + ("_border_color" as any)],
      l: any = (t as any).fontColor ? (t as any).fontColor : "#FFFFFF",
      e: any = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAACD0lEQVR4Xu2YoU4EMRCGT+4j8Ai8AhaH4QHgAUjQuFMECUgMIUgwJAgMhgQsAYUiJCiQIBBY+EITsjfTdme6V24v4c8vyGbb+ZjOtN0bNcvjQXmkH83WvYBWto6PLm6v7p7uH1/w2fXD+PBycX1Pv2l3IdDm/vn7x+dXQiAubRzoURa7gRZWd0iGRIiJbOnhnfYBQZNJjNbuyY2eJG8fkDE3bbG4ep6MHUAsgYxmE3nVs6VsBWJSGccsOlFPmLIViMzLOB7pCVO2AtHJMohH7Fh6zqitQK7m0rJvAVYgGcEpe//PLdDz65sM4pF9N7ICcXDKIB5Nv6j7tD0NoSdM2QrU9Gg0ewE1LqBhHR3BBdvj2vapnidjHxD/q6vd7Pvhr31AwcY8eXMTXAKECZZJFXuEq27aLgQK5uLMohCenGGuGewOxSjBvYBqeG6B+Nqiblggdjnc+ZXDy+FNFpFzw76O3UBAROuXh6FoiAcf5g9eTvUgzy0nWg6I8cXHRUpg5bOVBCo+KDpFajOf23GgPme7RSQ+lacIENUgJ6gg1k6HjgOlqnLqip4tEuhv0hNEMXUD0clyXE3p6pZA0S2nnvTlXwLJEZWlb7cTQH1+USgTN4VhAenm/wea1OCAOmqo6fE1WCb9WSKBah+rbUWPWAmE2Rvk0ApiB45eOyNAzU8xcTvj8KvkKEoOaIYeHNA3ZuygAvFMUO0AAAAASUVORK5CYII=";
    switch (((t as any).typeC4Shape as any).text) {
      case "person":
        e = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAACD0lEQVR4Xu2YoU4EMRCGT+4j8Ai8AhaH4QHgAUjQuFMECUgMIUgwJAgMhgQsAYUiJCiQIBBY+EITsjfTdme6V24v4c8vyGbb+ZjOtN0bNcvjQXmkH83WvYBWto6PLm6v7p7uH1/w2fXD+PBycX1Pv2l3IdDm/vn7x+dXQiAubRzoURa7gRZWd0iGRIiJbOnhnfYBQZNJjNbuyY2eJG8fkDE3bbG4ep6MHUAsgYxmE3nVs6VsBWJSGccsOlFPmLIViMzLOB7pCVO2AtHJMohH7Fh6zqitQK7m0rJvAVYgGcEpe//PLdDz65sM4pF9N7ICcXDKIB5Nv6j7tD0NoSdM2QrU9Gg0ewE1LqBhHR3BBdvj2vapnidjHxD/q6vd7Pvhr31AwcY8eXMTXAKECZZJFXuEq27aLgQK5uLMohCenGGuGewOxSjBvYBqeG6B+Nqiblggdjnc+ZXDy+FNFpFzw76O3UBAROuXh6FoiAcf5g9eTvUgzy0nWg6I8cXHRUpg5bOVBCo+KDpFajOf23GgPme7RSQ+lacIENUgJ6gg1k6HjgOlqnLqip4tEuhv0hNEMXUD0clyXE3p6pZA0S2nnvTlXwLJEZWlb7cTQH1+USgTN4VhAenm/wea1OCAOmqo6fE1WCb9WSKBah+rbUWPWAmE2Rvk0ApiB45eOyNAzU8xcTvj8KvkKEoOaIYeHNA3ZuygAvFMUO0AAAAASUVORK5CYII=";
        break;
      case "external_person":
        e = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAB6ElEQVR4Xu2YLY+EMBCG9+dWr0aj0Wg0Go1Go0+j8Xdv2uTCvv1gpt0ebHKPuhDaeW4605Z9mJvx4AdXUyTUdd08z+u6flmWZRnHsWkafk9DptAwDPu+f0eAYtu2PEaGWuj5fCIZrBAC2eLBAnRCsEkkxmeaJp7iDJ2QMDdHsLg8SxKFEJaAo8lAXnmuOFIhTMpxxKATebo4UiFknuNo4OniSIXQyRxEA3YsnjGCVEjVXD7yLUAqxBGUyPv/Y4W2beMgGuS7kVQIBycH0fD+oi5pezQETxdHKmQKGk1eQEYldK+jw5GxPfZ9z7Mk0Qnhf1W1m3w//EUn5BDmSZsbR44QQLBEqrBHqOrmSKaQAxdnLArCrxZcM7A7ZKs4ioRq8LFC+NpC3WCBJsvpVw5edm9iEXFuyNfxXAgSwfrFQ1c0iNda8AdejvUgnktOtJQQxmcfFzGglc5WVCj7oDgFqU18boeFSs52CUh8LE8BIVQDT1ABrB0HtgSEYlX5doJnCwv9TXocKCaKbnwhdDKPq4lf3SwU3HLq4V/+WYhHVMa/3b4IlfyikAduCkcBc7mQ3/z/Qq/cTuikhkzB12Ae/mcJC9U+Vo8Ej1gWAtgbeGgFsAMHr50BIWOLCbezvhpBFUdY6EJuJ/QDW0XoMX60zZ0AAAAASUVORK5CYII=";
        break;
    }
    const n: any = ((a as any).append as any)("g");
    ((n as any).attr as any)("class", "person-man");
    const i: any = (Se as any)();
    switch (((t as any).typeC4Shape as any).text) {
      case "person":
      case "external_person":
      case "system":
      case "external_system":
      case "container":
      case "external_container":
      case "component":
      case "external_component":
        (i as any).x = (t as any).x, (i as any).y = (t as any).y, (i as any).fill = o, (i as any).width = (t as any).width, (i as any).height = (t as any).height, (i as any).stroke = r, (i as any).rx = 2.5, (i as any).ry = 2.5, (i as any).attrs = {
          "stroke-width": .5
        }, (se as any)(n, i);
        break;
      case "system_db":
      case "external_system_db":
      case "container_db":
      case "external_container_db":
      case "component_db":
      case "external_component_db":
        ((((((((((n as any).append as any)("path") as any).attr as any)("fill", o) as any).attr as any)("stroke-width", "0.5") as any).attr as any)("stroke", r) as any).attr as any)("d", (((((((("Mstartx,startyc0,-10 half,-10 half,-10c0,0 half,0 half,10l0,heightc0,10 -half,10 -half,10c0,0 -half,0 -half,-10l0,-height" as any).replaceAll as any)("startx", (t as any).x) as any).replaceAll as any)("starty", (t as any).y) as any).replaceAll as any)("half", ((t as any).width as any) / (2 as any)) as any).replaceAll as any)("height", (t as any).height)), ((((((((((n as any).append as any)("path") as any).attr as any)("fill", "none") as any).attr as any)("stroke-width", "0.5") as any).attr as any)("stroke", r) as any).attr as any)("d", (((((("Mstartx,startyc0,10 half,10 half,10c0,0 half,0 half,-10" as any).replaceAll as any)("startx", (t as any).x) as any).replaceAll as any)("starty", (t as any).y) as any).replaceAll as any)("half", ((t as any).width as any) / (2 as any)));
        break;
      case "system_queue":
      case "external_system_queue":
      case "container_queue":
      case "external_container_queue":
      case "component_queue":
      case "external_component_queue":
        ((((((((((n as any).append as any)("path") as any).attr as any)("fill", o) as any).attr as any)("stroke-width", "0.5") as any).attr as any)("stroke", r) as any).attr as any)("d", (((((((("Mstartx,startylwidth,0c5,0 5,half 5,halfc0,0 0,half -5,halfl-width,0c-5,0 -5,-half -5,-halfc0,0 0,-half 5,-half" as any).replaceAll as any)("startx", (t as any).x) as any).replaceAll as any)("starty", (t as any).y) as any).replaceAll as any)("width", (t as any).width) as any).replaceAll as any)("half", ((t as any).height as any) / (2 as any))), ((((((((((n as any).append as any)("path") as any).attr as any)("fill", "none") as any).attr as any)("stroke-width", "0.5") as any).attr as any)("stroke", r) as any).attr as any)("d", (((((("Mstartx,startyc-5,0 -5,half -5,halfc0,half 5,half 5,half" as any).replaceAll as any)("startx", ((t as any).x as any) + ((t as any).width as any)) as any).replaceAll as any)("starty", (t as any).y) as any).replaceAll as any)("half", ((t as any).height as any) / (2 as any)));
        break;
    }
    let u: any = (C0 as any)(s, ((t as any).typeC4Shape as any).text);
    switch (((((((((((((((((((((n as any).append as any)("text") as any).attr as any)("fill", l) as any).attr as any)("font-family", (u as any).fontFamily) as any).attr as any)("font-size", ((u as any).fontSize as any) - (2 as any)) as any).attr as any)("font-style", "italic") as any).attr as any)("lengthAdjust", "spacing") as any).attr as any)("textLength", ((t as any).typeC4Shape as any).width) as any).attr as any)("x", (((t as any).x as any) + (((t as any).width as any) / (2 as any) as any) as any) - ((((t as any).typeC4Shape as any).width as any) / (2 as any) as any)) as any).attr as any)("y", ((t as any).y as any) + (((t as any).typeC4Shape as any).Y as any)) as any).text as any)((("<<" as any) + (((t as any).typeC4Shape as any).text as any) as any) + (">>" as any)), ((t as any).typeC4Shape as any).text) {
      case "person":
      case "external_person":
        (me as any)(n, 48, 48, (((t as any).x as any) + (((t as any).width as any) / (2 as any) as any) as any) - (24 as any), ((t as any).y as any) + (((t as any).image as any).Y as any), e);
        break;
    }
    let d: any = ((s as any)[(((t as any).typeC4Shape as any).text as any) + ("Font" as any)] as any)();
    return (d as any).fontWeight = "bold", (d as any).fontSize = ((d as any).fontSize as any) + (2 as any), (d as any).fontColor = l, ((Q as any)(s) as any)(((t as any).label as any).text, n, (t as any).x, ((t as any).y as any) + (((t as any).label as any).Y as any), (t as any).width, (t as any).height, {
      fill: l
    }, d), d = ((s as any)[(((t as any).typeC4Shape as any).text as any) + ("Font" as any)] as any)(), (d as any).fontColor = l, (t as any).techn && ((t as any).techn?.text as any) !== ("" as any) ? ((Q as any)(s) as any)(((t as any).techn as any).text, n, (t as any).x, ((t as any).y as any) + (((t as any).techn as any).Y as any), (t as any).width, (t as any).height, {
      fill: l,
      "font-style": "italic"
    }, d) : (t as any).type && (((t as any).type as any).text as any) !== ("" as any) && ((Q as any)(s) as any)(((t as any).type as any).text, n, (t as any).x, ((t as any).y as any) + (((t as any).type as any).Y as any), (t as any).width, (t as any).height, {
      fill: l,
      "font-style": "italic"
    }, d), (t as any).descr && (((t as any).descr as any).text as any) !== ("" as any) && (d = ((s as any).personFont as any)(), (d as any).fontColor = l, ((Q as any)(s) as any)(((t as any).descr as any).text, n, (t as any).x, ((t as any).y as any) + (((t as any).descr as any).Y as any), (t as any).width, (t as any).height, {
      fill: l
    }, d)), (t as any).height;
  }, "drawC4Shape"),
  _0: any = (y as any)(function (this: any, a: any, t: any): any {
    ((((((((((((((((a as any).append as any)("defs") as any).append as any)("symbol") as any).attr as any)("id", (t as any) + ("-database" as any)) as any).attr as any)("fill-rule", "evenodd") as any).attr as any)("clip-rule", "evenodd") as any).append as any)("path") as any).attr as any)("transform", "scale(.5)") as any).attr as any)("d", "M12.258.001l.256.004.255.005.253.008.251.01.249.012.247.015.246.016.242.019.241.02.239.023.236.024.233.027.231.028.229.031.225.032.223.034.22.036.217.038.214.04.211.041.208.043.205.045.201.046.198.048.194.05.191.051.187.053.183.054.18.056.175.057.172.059.168.06.163.061.16.063.155.064.15.066.074.033.073.033.071.034.07.034.069.035.068.035.067.035.066.035.064.036.064.036.062.036.06.036.06.037.058.037.058.037.055.038.055.038.053.038.052.038.051.039.05.039.048.039.047.039.045.04.044.04.043.04.041.04.04.041.039.041.037.041.036.041.034.041.033.042.032.042.03.042.029.042.027.042.026.043.024.043.023.043.021.043.02.043.018.044.017.043.015.044.013.044.012.044.011.045.009.044.007.045.006.045.004.045.002.045.001.045v17l-.001.045-.002.045-.004.045-.006.045-.007.045-.009.044-.011.045-.012.044-.013.044-.015.044-.017.043-.018.044-.02.043-.021.043-.023.043-.024.043-.026.043-.027.042-.029.042-.03.042-.032.042-.033.042-.034.041-.036.041-.037.041-.039.041-.04.041-.041.04-.043.04-.044.04-.045.04-.047.039-.048.039-.05.039-.051.039-.052.038-.053.038-.055.038-.055.038-.058.037-.058.037-.06.037-.06.036-.062.036-.064.036-.064.036-.066.035-.067.035-.068.035-.069.035-.07.034-.071.034-.073.033-.074.033-.15.066-.155.064-.16.063-.163.061-.168.06-.172.059-.175.057-.18.056-.183.054-.187.053-.191.051-.194.05-.198.048-.201.046-.205.045-.208.043-.211.041-.214.04-.217.038-.22.036-.223.034-.225.032-.229.031-.231.028-.233.027-.236.024-.239.023-.241.02-.242.019-.246.016-.247.015-.249.012-.251.01-.253.008-.255.005-.256.004-.258.001-.258-.001-.256-.004-.255-.005-.253-.008-.251-.01-.249-.012-.247-.015-.245-.016-.243-.019-.241-.02-.238-.023-.236-.024-.234-.027-.231-.028-.228-.031-.226-.032-.223-.034-.22-.036-.217-.038-.214-.04-.211-.041-.208-.043-.204-.045-.201-.046-.198-.048-.195-.05-.19-.051-.187-.053-.184-.054-.179-.056-.176-.057-.172-.059-.167-.06-.164-.061-.159-.063-.155-.064-.151-.066-.074-.033-.072-.033-.072-.034-.07-.034-.069-.035-.068-.035-.067-.035-.066-.035-.064-.036-.063-.036-.062-.036-.061-.036-.06-.037-.058-.037-.057-.037-.056-.038-.055-.038-.053-.038-.052-.038-.051-.039-.049-.039-.049-.039-.046-.039-.046-.04-.044-.04-.043-.04-.041-.04-.04-.041-.039-.041-.037-.041-.036-.041-.034-.041-.033-.042-.032-.042-.03-.042-.029-.042-.027-.042-.026-.043-.024-.043-.023-.043-.021-.043-.02-.043-.018-.044-.017-.043-.015-.044-.013-.044-.012-.044-.011-.045-.009-.044-.007-.045-.006-.045-.004-.045-.002-.045-.001-.045v-17l.001-.045.002-.045.004-.045.006-.045.007-.045.009-.044.011-.045.012-.044.013-.044.015-.044.017-.043.018-.044.02-.043.021-.043.023-.043.024-.043.026-.043.027-.042.029-.042.03-.042.032-.042.033-.042.034-.041.036-.041.037-.041.039-.041.04-.041.041-.04.043-.04.044-.04.046-.04.046-.039.049-.039.049-.039.051-.039.052-.038.053-.038.055-.038.056-.038.057-.037.058-.037.06-.037.061-.036.062-.036.063-.036.064-.036.066-.035.067-.035.068-.035.069-.035.07-.034.072-.034.072-.033.074-.033.151-.066.155-.064.159-.063.164-.061.167-.06.172-.059.176-.057.179-.056.184-.054.187-.053.19-.051.195-.05.198-.048.201-.046.204-.045.208-.043.211-.041.214-.04.217-.038.22-.036.223-.034.226-.032.228-.031.231-.028.234-.027.236-.024.238-.023.241-.02.243-.019.245-.016.247-.015.249-.012.251-.01.253-.008.255-.005.256-.004.258-.001.258.001zm-9.258 20.499v.01l.001.021.003.021.004.022.005.021.006.022.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.023.018.024.019.024.021.024.022.025.023.024.024.025.052.049.056.05.061.051.066.051.07.051.075.051.079.052.084.052.088.052.092.052.097.052.102.051.105.052.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.048.144.049.147.047.152.047.155.047.16.045.163.045.167.043.171.043.176.041.178.041.183.039.187.039.19.037.194.035.197.035.202.033.204.031.209.03.212.029.216.027.219.025.222.024.226.021.23.02.233.018.236.016.24.015.243.012.246.01.249.008.253.005.256.004.259.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.021.224-.024.22-.026.216-.027.212-.028.21-.031.205-.031.202-.034.198-.034.194-.036.191-.037.187-.039.183-.04.179-.04.175-.042.172-.043.168-.044.163-.045.16-.046.155-.046.152-.047.148-.048.143-.049.139-.049.136-.05.131-.05.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.053.083-.051.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.05.023-.024.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.023.01-.022.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.127l-.077.055-.08.053-.083.054-.085.053-.087.052-.09.052-.093.051-.095.05-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.045-.118.044-.12.043-.122.042-.124.042-.126.041-.128.04-.13.04-.132.038-.134.038-.135.037-.138.037-.139.035-.142.035-.143.034-.144.033-.147.032-.148.031-.15.03-.151.03-.153.029-.154.027-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.01-.179.008-.179.008-.181.006-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.006-.179-.008-.179-.008-.178-.01-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.027-.153-.029-.151-.03-.15-.03-.148-.031-.146-.032-.145-.033-.143-.034-.141-.035-.14-.035-.137-.037-.136-.037-.134-.038-.132-.038-.13-.04-.128-.04-.126-.041-.124-.042-.122-.042-.12-.044-.117-.043-.116-.045-.113-.045-.112-.046-.109-.047-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.05-.093-.052-.09-.051-.087-.052-.085-.053-.083-.054-.08-.054-.077-.054v4.127zm0-5.654v.011l.001.021.003.021.004.021.005.022.006.022.007.022.009.022.01.022.011.023.012.023.013.023.015.024.016.023.017.024.018.024.019.024.021.024.022.024.023.025.024.024.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.052.11.051.114.051.119.052.123.05.127.051.131.05.135.049.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.044.171.042.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.022.23.02.233.018.236.016.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.012.241-.015.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.048.139-.05.136-.049.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.051.051-.049.023-.025.023-.024.021-.025.02-.024.019-.024.018-.024.017-.024.015-.023.014-.023.013-.024.012-.022.01-.023.01-.023.008-.022.006-.022.006-.022.004-.021.004-.022.001-.021.001-.021v-4.139l-.077.054-.08.054-.083.054-.085.052-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.044-.118.044-.12.044-.122.042-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.035-.143.033-.144.033-.147.033-.148.031-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.009-.179.009-.179.007-.181.007-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.007-.179-.007-.179-.009-.178-.009-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.031-.146-.033-.145-.033-.143-.033-.141-.035-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.04-.126-.041-.124-.042-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.051-.093-.051-.09-.051-.087-.053-.085-.052-.083-.054-.08-.054-.077-.054v4.139zm0-5.666v.011l.001.02.003.022.004.021.005.022.006.021.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.024.018.023.019.024.021.025.022.024.023.024.024.025.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.051.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.043.171.043.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.021.23.02.233.018.236.017.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.013.241-.014.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.049.139-.049.136-.049.131-.051.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.049.023-.025.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.022.01-.023.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.153l-.077.054-.08.054-.083.053-.085.053-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.048-.105.048-.106.048-.109.046-.111.046-.114.046-.115.044-.118.044-.12.043-.122.043-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.034-.143.034-.144.033-.147.032-.148.032-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.024-.161.024-.162.023-.163.023-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.01-.178.01-.179.009-.179.007-.181.006-.182.006-.182.004-.184.003-.184.001-.185.001-.185-.001-.184-.001-.184-.003-.182-.004-.182-.006-.181-.006-.179-.007-.179-.009-.178-.01-.176-.01-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.023-.162-.023-.161-.024-.159-.024-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.032-.146-.032-.145-.033-.143-.034-.141-.034-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.041-.126-.041-.124-.041-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.048-.105-.048-.102-.048-.1-.05-.097-.049-.095-.051-.093-.051-.09-.052-.087-.052-.085-.053-.083-.053-.08-.054-.077-.054v4.153zm8.74-8.179l-.257.004-.254.005-.25.008-.247.011-.244.012-.241.014-.237.016-.233.018-.231.021-.226.022-.224.023-.22.026-.216.027-.212.028-.21.031-.205.032-.202.033-.198.034-.194.036-.191.038-.187.038-.183.04-.179.041-.175.042-.172.043-.168.043-.163.045-.16.046-.155.046-.152.048-.148.048-.143.048-.139.049-.136.05-.131.05-.126.051-.123.051-.118.051-.114.052-.11.052-.106.052-.101.052-.096.052-.092.052-.088.052-.083.052-.079.052-.074.051-.07.052-.065.051-.06.05-.056.05-.051.05-.023.025-.023.024-.021.024-.02.025-.019.024-.018.024-.017.023-.015.024-.014.023-.013.023-.012.023-.01.023-.01.022-.008.022-.006.023-.006.021-.004.022-.004.021-.001.021-.001.021.001.021.001.021.004.021.004.022.006.021.006.023.008.022.01.022.01.023.012.023.013.023.014.023.015.024.017.023.018.024.019.024.02.025.021.024.023.024.023.025.051.05.056.05.06.05.065.051.07.052.074.051.079.052.083.052.088.052.092.052.096.052.101.052.106.052.11.052.114.052.118.051.123.051.126.051.131.05.136.05.139.049.143.048.148.048.152.048.155.046.16.046.163.045.168.043.172.043.175.042.179.041.183.04.187.038.191.038.194.036.198.034.202.033.205.032.21.031.212.028.216.027.22.026.224.023.226.022.231.021.233.018.237.016.241.014.244.012.247.011.25.008.254.005.257.004.26.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.022.224-.023.22-.026.216-.027.212-.028.21-.031.205-.032.202-.033.198-.034.194-.036.191-.038.187-.038.183-.04.179-.041.175-.042.172-.043.168-.043.163-.045.16-.046.155-.046.152-.048.148-.048.143-.048.139-.049.136-.05.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.05.051-.05.023-.025.023-.024.021-.024.02-.025.019-.024.018-.024.017-.023.015-.024.014-.023.013-.023.012-.023.01-.023.01-.022.008-.022.006-.023.006-.021.004-.022.004-.021.001-.021.001-.021-.001-.021-.001-.021-.004-.021-.004-.022-.006-.021-.006-.023-.008-.022-.01-.022-.01-.023-.012-.023-.013-.023-.014-.023-.015-.024-.017-.023-.018-.024-.019-.024-.02-.025-.021-.024-.023-.024-.023-.025-.051-.05-.056-.05-.06-.05-.065-.051-.07-.052-.074-.051-.079-.052-.083-.052-.088-.052-.092-.052-.096-.052-.101-.052-.106-.052-.11-.052-.114-.052-.118-.051-.123-.051-.126-.051-.131-.05-.136-.05-.139-.049-.143-.048-.148-.048-.152-.048-.155-.046-.16-.046-.163-.045-.168-.043-.172-.043-.175-.042-.179-.041-.183-.04-.187-.038-.191-.038-.194-.036-.198-.034-.202-.033-.205-.032-.21-.031-.212-.028-.216-.027-.22-.026-.224-.023-.226-.022-.231-.021-.233-.018-.237-.016-.241-.014-.244-.012-.247-.011-.25-.008-.254-.005-.257-.004-.26-.001-.26.001z");
  }, "insertDatabaseIcon"),
  x0: any = (y as any)(function (this: any, a: any, t: any): any {
    ((((((((((((((((a as any).append as any)("defs") as any).append as any)("symbol") as any).attr as any)("id", (t as any) + ("-computer" as any)) as any).attr as any)("width", "24") as any).attr as any)("height", "24") as any).append as any)("path") as any).attr as any)("transform", "scale(.5)") as any).attr as any)("d", "M2 2v13h20v-13h-20zm18 11h-16v-9h16v9zm-10.228 6l.466-1h3.524l.467 1h-4.457zm14.228 3h-24l2-6h2.104l-1.33 4h18.45l-1.297-4h2.073l2 6zm-5-10h-14v-7h14v7z");
  }, "insertComputerIcon"),
  m0: any = (y as any)(function (this: any, a: any, t: any): any {
    ((((((((((((((((a as any).append as any)("defs") as any).append as any)("symbol") as any).attr as any)("id", (t as any) + ("-clock" as any)) as any).attr as any)("width", "24") as any).attr as any)("height", "24") as any).append as any)("path") as any).attr as any)("transform", "scale(.5)") as any).attr as any)("d", "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z");
  }, "insertClockIcon"),
  v0: any = (y as any)(function (this: any, a: any, t: any): any {
    ((((((((((((((((((((((a as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (t as any) + ("-arrowhead" as any)) as any).attr as any)("refX", 9) as any).attr as any)("refY", 5) as any).attr as any)("markerUnits", "userSpaceOnUse") as any).attr as any)("markerWidth", 12) as any).attr as any)("markerHeight", 12) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 0 0 L 10 5 L 0 10 z");
  }, "insertArrowHead"),
  E0: any = (y as any)(function (this: any, a: any, t: any): any {
    ((((((((((((((((((((((a as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (t as any) + ("-arrowend" as any)) as any).attr as any)("refX", 1) as any).attr as any)("refY", 5) as any).attr as any)("markerUnits", "userSpaceOnUse") as any).attr as any)("markerWidth", 12) as any).attr as any)("markerHeight", 12) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 10 0 L 0 5 L 10 10 z");
  }, "insertArrowEnd"),
  A0: any = (y as any)(function (this: any, a: any, t: any): any {
    ((((((((((((((((((((a as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (t as any) + ("-filled-head" as any)) as any).attr as any)("refX", 18) as any).attr as any)("refY", 7) as any).attr as any)("markerWidth", 20) as any).attr as any)("markerHeight", 28) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 18,7 L9,13 L14,7 L9,1 Z");
  }, "insertArrowFilledHead"),
  k0: any = (y as any)(function (this: any, a: any, t: any): any {
    const o: any = ((((((((((((((((a as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (t as any) + ("-crosshead" as any)) as any).attr as any)("markerWidth", 15) as any).attr as any)("markerHeight", 8) as any).attr as any)("orient", "auto") as any).attr as any)("refX", 16) as any).attr as any)("refY", 4);
    ((((((((((((o as any).append as any)("path") as any).attr as any)("fill", "black") as any).attr as any)("stroke", "#000000") as any).style as any)("stroke-dasharray", "0, 0") as any).attr as any)("stroke-width", "1px") as any).attr as any)("d", "M 9,2 V 6 L16,4 Z"), ((((((((((((o as any).append as any)("path") as any).attr as any)("fill", "none") as any).attr as any)("stroke", "#000000") as any).style as any)("stroke-dasharray", "0, 0") as any).attr as any)("stroke-width", "1px") as any).attr as any)("d", "M 0,1 L 6,7 M 6,1 L 0,7");
  }, "insertArrowCrossHead"),
  C0: any = (y as any)((a: any, t: any): any => ({
    fontFamily: (a as any)[(t as any) + ("FontFamily" as any)],
    fontSize: (a as any)[(t as any) + ("FontSize" as any)],
    fontWeight: (a as any)[(t as any) + ("FontWeight" as any)]
  }), "getC4ShapeFont"),
  Q: any = (function (this: any): any {
    function a(this: any, r: any, l: any, e: any, n: any, i: any, u: any, d: any): any {
      const p: any = ((((((((((l as any).append as any)("text") as any).attr as any)("x", (e as any) + ((i as any) / (2 as any) as any)) as any).attr as any)("y", ((n as any) + ((u as any) / (2 as any) as any) as any) + (5 as any)) as any).style as any)("text-anchor", "middle") as any).text as any)(r);
      (o as any)(p, d);
    }
    (y as any)(a, "byText");
    function t(this: any, r: any, l: any, e: any, n: any, i: any, u: any, d: any, p: any): any {
      const {
          fontSize: g,
          fontFamily: m,
          fontWeight: O
        }: any = p,
        S: any = ((r as any).split as any)(($t as any).lineBreakRegex);
      for (let P: any = 0; (P as any) < ((S as any).length as any); P++) {
        const M: any = ((P as any) * (g as any) as any) - (((g as any) * (((S as any).length as any) - (1 as any) as any) as any) / (2 as any) as any),
          U: any = ((((((((((((((((l as any).append as any)("text") as any).attr as any)("x", (e as any) + ((i as any) / (2 as any) as any)) as any).attr as any)("y", n) as any).style as any)("text-anchor", "middle") as any).attr as any)("dominant-baseline", "middle") as any).style as any)("font-size", g) as any).style as any)("font-weight", O) as any).style as any)("font-family", m);
        ((((((((U as any).append as any)("tspan") as any).attr as any)("dy", M) as any).text as any)((S as any)[P]) as any).attr as any)("alignment-baseline", "mathematical"), (o as any)(U, d);
      }
    }
    (y as any)(t, "byTspan");
    function s(this: any, r: any, l: any, e: any, n: any, i: any, u: any, d: any, p: any): any {
      const g: any = ((l as any).append as any)("switch"),
        O: any = ((((((((((((((((((g as any).append as any)("foreignObject") as any).attr as any)("x", e) as any).attr as any)("y", n) as any).attr as any)("width", i) as any).attr as any)("height", u) as any).append as any)("xhtml:div") as any).style as any)("display", "table") as any).style as any)("height", "100%") as any).style as any)("width", "100%");
      ((((((((((O as any).append as any)("div") as any).style as any)("display", "table-cell") as any).style as any)("text-align", "center") as any).style as any)("vertical-align", "middle") as any).text as any)(r), (t as any)(r, g, e, n, i, u, d, p), (o as any)(O, d);
    }
    (y as any)(s, "byFo");
    function o(this: any, r: any, l: any): any {
      for (const e in l) ((l as any).hasOwnProperty as any)(e) && ((r as any).attr as any)(e, (l as any)[e]);
    }
    return (y as any)(o, "_setTextAttrs"), function (this: any, r: any): any {
      return ((r as any).textPlacement as any) === ("fo" as any) ? s : ((r as any).textPlacement as any) === ("old" as any) ? a : t;
    };
  } as any)(),
  z: any = {
    drawRect: se,
    drawBoundary: g0,
    drawC4Shape: b0,
    drawRels: y0,
    drawImage: me,
    insertArrowHead: v0,
    insertArrowEnd: E0,
    insertArrowFilledHead: A0,
    insertArrowCrossHead: k0,
    insertDatabaseIcon: _0,
    insertComputerIcon: x0,
    insertClockIcon: m0
  },
  Xt: any = 0,
  Wt: any = 0,
  ve: any = 4,
  ee: any = 2;
(Ft as any).yy = te;
var _: any = {},
  Ot: any,
  Ee: any = (Ot = class {
    declare nextData: any;
    declare data: any;
    declare name: any;
    [key: string]: any;
    constructor(t: any) {
      (this as any).name = "", (this as any).data = {}, ((this as any).data as any).startx = void 0, ((this as any).data as any).stopx = void 0, ((this as any).data as any).starty = void 0, ((this as any).data as any).stopy = void 0, ((this as any).data as any).widthLimit = void 0, (this as any).nextData = {}, ((this as any).nextData as any).startx = void 0, ((this as any).nextData as any).stopx = void 0, ((this as any).nextData as any).starty = void 0, ((this as any).nextData as any).stopy = void 0, ((this as any).nextData as any).cnt = 0, (ae as any)((((t as any).db as any).getConfig as any)());
    }
    setData(t: any, s: any, o: any, r: any): any {
      ((this as any).nextData as any).startx = ((this as any).data as any).startx = t, ((this as any).nextData as any).stopx = ((this as any).data as any).stopx = s, ((this as any).nextData as any).starty = ((this as any).data as any).starty = o, ((this as any).nextData as any).stopy = ((this as any).data as any).stopy = r;
    }
    updateVal(t: any, s: any, o: any, r: any): any {
      ((t as any)[s] as any) === (void 0 as any) ? (t as any)[s] = o : (t as any)[s] = (r as any)(o, (t as any)[s]);
    }
    insert(t: any): any {
      ((this as any).nextData as any).cnt = (((this as any).nextData as any).cnt as any) + (1 as any);
      let s: any = (((this as any).nextData as any).startx as any) === (((this as any).nextData as any).stopx as any) ? (((this as any).nextData as any).stopx as any) + ((t as any).margin as any) : (((this as any).nextData as any).stopx as any) + (((t as any).margin as any) * (2 as any) as any),
        o: any = (s as any) + ((t as any).width as any),
        r: any = (((this as any).nextData as any).starty as any) + (((t as any).margin as any) * (2 as any) as any),
        l: any = (r as any) + ((t as any).height as any);
      ((s as any) >= (((this as any).data as any).widthLimit as any) || (o as any) >= (((this as any).data as any).widthLimit as any) || (((this as any).nextData as any).cnt as any) > (ve as any)) && (s = ((((this as any).nextData as any).startx as any) + ((t as any).margin as any) as any) + ((_ as any).nextLinePaddingX as any), r = (((this as any).nextData as any).stopy as any) + (((t as any).margin as any) * (2 as any) as any), ((this as any).nextData as any).stopx = o = (s as any) + ((t as any).width as any), ((this as any).nextData as any).starty = ((this as any).nextData as any).stopy, ((this as any).nextData as any).stopy = l = (r as any) + ((t as any).height as any), ((this as any).nextData as any).cnt = 1), (t as any).x = s, (t as any).y = r, ((this as any).updateVal as any)((this as any).data, "startx", s, (Math as any).min), ((this as any).updateVal as any)((this as any).data, "starty", r, (Math as any).min), ((this as any).updateVal as any)((this as any).data, "stopx", o, (Math as any).max), ((this as any).updateVal as any)((this as any).data, "stopy", l, (Math as any).max), ((this as any).updateVal as any)((this as any).nextData, "startx", s, (Math as any).min), ((this as any).updateVal as any)((this as any).nextData, "starty", r, (Math as any).min), ((this as any).updateVal as any)((this as any).nextData, "stopx", o, (Math as any).max), ((this as any).updateVal as any)((this as any).nextData, "stopy", l, (Math as any).max);
    }
    init(t: any): any {
      (this as any).name = "", (this as any).data = {
        startx: void 0,
        stopx: void 0,
        starty: void 0,
        stopy: void 0,
        widthLimit: void 0
      }, (this as any).nextData = {
        startx: void 0,
        stopx: void 0,
        starty: void 0,
        stopy: void 0,
        cnt: 0
      }, (ae as any)((((t as any).db as any).getConfig as any)());
    }
    bumpLastMargin(t: any): any {
      ((this as any).data as any).stopx += t, ((this as any).data as any).stopy += t;
    }
  }, (y as any)(Ot, "Bounds"), Ot),
  ae: any = (y as any)(function (this: any, a: any): any {
    (Ne as any)(_, a), (a as any).fontFamily && ((_ as any).personFontFamily = (_ as any).systemFontFamily = (_ as any).messageFontFamily = (a as any).fontFamily), (a as any).fontSize && ((_ as any).personFontSize = (_ as any).systemFontSize = (_ as any).messageFontSize = (a as any).fontSize), (a as any).fontWeight && ((_ as any).personFontWeight = (_ as any).systemFontWeight = (_ as any).messageFontWeight = (a as any).fontWeight);
  }, "setConf"),
  Pt: any = (y as any)((a: any, t: any): any => ({
    fontFamily: (a as any)[(t as any) + ("FontFamily" as any)],
    fontSize: (a as any)[(t as any) + ("FontSize" as any)],
    fontWeight: (a as any)[(t as any) + ("FontWeight" as any)]
  }), "c4ShapeFont"),
  Ut: any = (y as any)((a: any): any => ({
    fontFamily: (a as any).boundaryFontFamily,
    fontSize: (a as any).boundaryFontSize,
    fontWeight: (a as any).boundaryFontWeight
  }), "boundaryFont"),
  w0: any = (y as any)((a: any): any => ({
    fontFamily: (a as any).messageFontFamily,
    fontSize: (a as any).messageFontSize,
    fontWeight: (a as any).messageFontWeight
  }), "messageFont");
function j(this: any, a: any, t: any, s: any, o: any, r: any): any {
  if (!((t as any)[a] as any).width) if (s) ((t as any)[a] as any).text = (je as any)(((t as any)[a] as any).text, r, o), ((t as any)[a] as any).textLines = (((((t as any)[a] as any).text as any).split as any)(($t as any).lineBreakRegex) as any).length, ((t as any)[a] as any).width = r, ((t as any)[a] as any).height = (fe as any)(((t as any)[a] as any).text, o);else {
    let l: any = ((((t as any)[a] as any).text as any).split as any)(($t as any).lineBreakRegex);
    ((t as any)[a] as any).textLines = (l as any).length;
    let e: any = 0;
    ((t as any)[a] as any).height = 0, ((t as any)[a] as any).width = 0;
    for (const n of l) ((t as any)[a] as any).width = ((Math as any).max as any)((Tt as any)(n, o), ((t as any)[a] as any).width), e = (fe as any)(n, o), ((t as any)[a] as any).height = (((t as any)[a] as any).height as any) + (e as any);
  }
}
(y as any)(j, "calcC4ShapeTextWH");
var Ae: any = (y as any)(function (this: any, a: any, t: any, s: any): any {
    (t as any).x = ((s as any).data as any).startx, (t as any).y = ((s as any).data as any).starty, (t as any).width = (((s as any).data as any).stopx as any) - (((s as any).data as any).startx as any), (t as any).height = (((s as any).data as any).stopy as any) - (((s as any).data as any).starty as any), ((t as any).label as any).y = ((_ as any).c4ShapeMargin as any) - (35 as any);
    let o: any = (t as any).wrap && (_ as any).wrap,
      r: any = (Ut as any)(_);
    (r as any).fontSize = ((r as any).fontSize as any) + (2 as any), (r as any).fontWeight = "bold";
    let l: any = (Tt as any)(((t as any).label as any).text, r);
    (j as any)("label", t, o, r, l), ((z as any).drawBoundary as any)(a, t, _);
  }, "drawBoundary"),
  ke: any = (y as any)(function (this: any, a: any, t: any, s: any, o: any): any {
    let r: any = 0;
    for (const l of o) {
      r = 0;
      const e: any = (s as any)[l];
      let n: any = (Pt as any)(_, ((e as any).typeC4Shape as any).text);
      switch ((n as any).fontSize = ((n as any).fontSize as any) - (2 as any), ((e as any).typeC4Shape as any).width = (Tt as any)((("«" as any) + (((e as any).typeC4Shape as any).text as any) as any) + ("»" as any), n), ((e as any).typeC4Shape as any).height = ((n as any).fontSize as any) + (2 as any), ((e as any).typeC4Shape as any).Y = (_ as any).c4ShapePadding, r = ((((e as any).typeC4Shape as any).Y as any) + (((e as any).typeC4Shape as any).height as any) as any) - (4 as any), (e as any).image = {
        width: 0,
        height: 0,
        Y: 0
      }, ((e as any).typeC4Shape as any).text) {
        case "person":
        case "external_person":
          ((e as any).image as any).width = 48, ((e as any).image as any).height = 48, ((e as any).image as any).Y = r, r = (((e as any).image as any).Y as any) + (((e as any).image as any).height as any);
          break;
      }
      (e as any).sprite && (((e as any).image as any).width = 48, ((e as any).image as any).height = 48, ((e as any).image as any).Y = r, r = (((e as any).image as any).Y as any) + (((e as any).image as any).height as any));
      let i: any = (e as any).wrap && (_ as any).wrap,
        u: any = ((_ as any).width as any) - (((_ as any).c4ShapePadding as any) * (2 as any) as any),
        d: any = (Pt as any)(_, ((e as any).typeC4Shape as any).text);
      if ((d as any).fontSize = ((d as any).fontSize as any) + (2 as any), (d as any).fontWeight = "bold", (j as any)("label", e, i, d, u), ((e as any).label as any).Y = (r as any) + (8 as any), r = (((e as any).label as any).Y as any) + (((e as any).label as any).height as any), (e as any).type && (((e as any).type as any).text as any) !== ("" as any)) {
        ((e as any).type as any).text = (("[" as any) + (((e as any).type as any).text as any) as any) + ("]" as any);
        let m: any = (Pt as any)(_, ((e as any).typeC4Shape as any).text);
        (j as any)("type", e, i, m, u), ((e as any).type as any).Y = (r as any) + (5 as any), r = (((e as any).type as any).Y as any) + (((e as any).type as any).height as any);
      } else if ((e as any).techn && (((e as any).techn as any).text as any) !== ("" as any)) {
        ((e as any).techn as any).text = (("[" as any) + (((e as any).techn as any).text as any) as any) + ("]" as any);
        let m: any = (Pt as any)(_, ((e as any).techn as any).text);
        (j as any)("techn", e, i, m, u), ((e as any).techn as any).Y = (r as any) + (5 as any), r = (((e as any).techn as any).Y as any) + (((e as any).techn as any).height as any);
      }
      let p: any = r,
        g: any = ((e as any).label as any).width;
      if ((e as any).descr && (((e as any).descr as any).text as any) !== ("" as any)) {
        let m: any = (Pt as any)(_, ((e as any).typeC4Shape as any).text);
        (j as any)("descr", e, i, m, u), ((e as any).descr as any).Y = (r as any) + (20 as any), r = (((e as any).descr as any).Y as any) + (((e as any).descr as any).height as any), g = ((Math as any).max as any)(((e as any).label as any).width, ((e as any).descr as any).width), p = (r as any) - ((((e as any).descr as any).textLines as any) * (5 as any) as any);
      }
      g = (g as any) + ((_ as any).c4ShapePadding as any), (e as any).width = ((Math as any).max as any)((e as any).width || (_ as any).width, g, (_ as any).width), (e as any).height = ((Math as any).max as any)((e as any).height || (_ as any).height, p, (_ as any).height), (e as any).margin = (e as any).margin || (_ as any).c4ShapeMargin, ((a as any).insert as any)(e), ((z as any).drawC4Shape as any)(t, e, _);
    }
    ((a as any).bumpLastMargin as any)((_ as any).c4ShapeMargin);
  }, "drawC4ShapeArray"),
  Rt: any,
  Y: any = (Rt = class {
    declare y: any;
    declare x: any;
    [key: string]: any;
    constructor(t: any, s: any) {
      (this as any).x = t, (this as any).y = s;
    }
  }, (y as any)(Rt, "Point"), Rt),
  pe: any = (y as any)(function (this: any, a: any, t: any): any {
    let s: any = (a as any).x,
      o: any = (a as any).y,
      r: any = (t as any).x,
      l: any = (t as any).y,
      e: any = (s as any) + (((a as any).width as any) / (2 as any) as any),
      n: any = (o as any) + (((a as any).height as any) / (2 as any) as any),
      i: any = ((Math as any).abs as any)((s as any) - (r as any)),
      u: any = ((Math as any).abs as any)((o as any) - (l as any)),
      d: any = (u as any) / (i as any),
      p: any = ((a as any).height as any) / ((a as any).width as any),
      g: any = null;
    return (o as any) == (l as any) && (s as any) < (r as any) ? g = new (Y as any)((s as any) + ((a as any).width as any), n) : (o as any) == (l as any) && (s as any) > (r as any) ? g = new (Y as any)(s, n) : (s as any) == (r as any) && (o as any) < (l as any) ? g = new (Y as any)(e, (o as any) + ((a as any).height as any)) : (s as any) == (r as any) && (o as any) > (l as any) && (g = new (Y as any)(e, o)), (s as any) > (r as any) && (o as any) < (l as any) ? (p as any) >= (d as any) ? g = new (Y as any)(s, (n as any) + (((d as any) * ((a as any).width as any) as any) / (2 as any) as any)) : g = new (Y as any)((e as any) - ((((i as any) / (u as any) as any) * ((a as any).height as any) as any) / (2 as any) as any), (o as any) + ((a as any).height as any)) : (s as any) < (r as any) && (o as any) < (l as any) ? (p as any) >= (d as any) ? g = new (Y as any)((s as any) + ((a as any).width as any), (n as any) + (((d as any) * ((a as any).width as any) as any) / (2 as any) as any)) : g = new (Y as any)((e as any) + ((((i as any) / (u as any) as any) * ((a as any).height as any) as any) / (2 as any) as any), (o as any) + ((a as any).height as any)) : (s as any) < (r as any) && (o as any) > (l as any) ? (p as any) >= (d as any) ? g = new (Y as any)((s as any) + ((a as any).width as any), (n as any) - (((d as any) * ((a as any).width as any) as any) / (2 as any) as any)) : g = new (Y as any)((e as any) + (((((a as any).height as any) / (2 as any) as any) * (i as any) as any) / (u as any) as any), o) : (s as any) > (r as any) && (o as any) > (l as any) && ((p as any) >= (d as any) ? g = new (Y as any)(s, (n as any) - ((((a as any).width as any) / (2 as any) as any) * (d as any) as any)) : g = new (Y as any)((e as any) - (((((a as any).height as any) / (2 as any) as any) * (i as any) as any) / (u as any) as any), o)), g;
  }, "getIntersectPoint"),
  T0: any = (y as any)(function (this: any, a: any, t: any): any {
    let s: any = {
      x: 0,
      y: 0
    };
    (s as any).x = ((t as any).x as any) + (((t as any).width as any) / (2 as any) as any), (s as any).y = ((t as any).y as any) + (((t as any).height as any) / (2 as any) as any);
    let o: any = (pe as any)(a, s);
    (s as any).x = ((a as any).x as any) + (((a as any).width as any) / (2 as any) as any), (s as any).y = ((a as any).y as any) + (((a as any).height as any) / (2 as any) as any);
    let r: any = (pe as any)(t, s);
    return {
      startPoint: o,
      endPoint: r
    };
  }, "getIntersectPoints"),
  O0: any = (y as any)(function (this: any, a: any, t: any, s: any, o: any, r: any): any {
    let l: any = 0;
    for (let e of t) {
      l = (l as any) + (1 as any);
      let n: any = (e as any).wrap && (_ as any).wrap,
        i: any = (w0 as any)(_);
      ((((o as any).db as any).getC4Type as any)() as any) === ("C4Dynamic" as any) && (((e as any).label as any).text = ((l as any) + (": " as any) as any) + (((e as any).label as any).text as any));
      let d: any = (Tt as any)(((e as any).label as any).text, i);
      (j as any)("label", e, n, i, d), (e as any).techn && (((e as any).techn as any).text as any) !== ("" as any) && (d = (Tt as any)(((e as any).techn as any).text, i), (j as any)("techn", e, n, i, d)), (e as any).descr && (((e as any).descr as any).text as any) !== ("" as any) && (d = (Tt as any)(((e as any).descr as any).text, i), (j as any)("descr", e, n, i, d));
      let p: any = (s as any)((e as any).from),
        g: any = (s as any)((e as any).to),
        m: any = (T0 as any)(p, g);
      (e as any).startPoint = (m as any).startPoint, (e as any).endPoint = (m as any).endPoint;
    }
    ((z as any).drawRels as any)(a, t, _, r);
  }, "drawRels");
function re(this: any, a: any, t: any, s: any, o: any, r: any): any {
  let l: any = new (Ee as any)(r);
  ((l as any).data as any).widthLimit = (((s as any).data as any).widthLimit as any) / (((Math as any).min as any)(ee, (o as any).length) as any);
  for (let [e, n] of ((o as any).entries as any)()) {
    let i: any = 0;
    (n as any).image = {
      width: 0,
      height: 0,
      Y: 0
    }, (n as any).sprite && (((n as any).image as any).width = 48, ((n as any).image as any).height = 48, ((n as any).image as any).Y = i, i = (((n as any).image as any).Y as any) + (((n as any).image as any).height as any));
    let u: any = (n as any).wrap && (_ as any).wrap,
      d: any = (Ut as any)(_);
    if ((d as any).fontSize = ((d as any).fontSize as any) + (2 as any), (d as any).fontWeight = "bold", (j as any)("label", n, u, d, ((l as any).data as any).widthLimit), ((n as any).label as any).Y = (i as any) + (8 as any), i = (((n as any).label as any).Y as any) + (((n as any).label as any).height as any), (n as any).type && (((n as any).type as any).text as any) !== ("" as any)) {
      ((n as any).type as any).text = (("[" as any) + (((n as any).type as any).text as any) as any) + ("]" as any);
      let O: any = (Ut as any)(_);
      (j as any)("type", n, u, O, ((l as any).data as any).widthLimit), ((n as any).type as any).Y = (i as any) + (5 as any), i = (((n as any).type as any).Y as any) + (((n as any).type as any).height as any);
    }
    if ((n as any).descr && (((n as any).descr as any).text as any) !== ("" as any)) {
      let O: any = (Ut as any)(_);
      (O as any).fontSize = ((O as any).fontSize as any) - (2 as any), (j as any)("descr", n, u, O, ((l as any).data as any).widthLimit), ((n as any).descr as any).Y = (i as any) + (20 as any), i = (((n as any).descr as any).Y as any) + (((n as any).descr as any).height as any);
    }
    if ((e as any) == (0 as any) || ((e as any) % (ee as any) as any) === (0 as any)) {
      let O: any = (((s as any).data as any).startx as any) + ((_ as any).diagramMarginX as any),
        S: any = ((((s as any).data as any).stopy as any) + ((_ as any).diagramMarginY as any) as any) + (i as any);
      ((l as any).setData as any)(O, O, S, S);
    } else {
      let O: any = (((l as any).data as any).stopx as any) !== (((l as any).data as any).startx as any) ? (((l as any).data as any).stopx as any) + ((_ as any).diagramMarginX as any) : ((l as any).data as any).startx,
        S: any = ((l as any).data as any).starty;
      ((l as any).setData as any)(O, O, S, S);
    }
    (l as any).name = (n as any).alias;
    let p: any = (((r as any).db as any).getC4ShapeArray as any)((n as any).alias),
      g: any = (((r as any).db as any).getC4ShapeKeys as any)((n as any).alias);
    ((g as any).length as any) > (0 as any) && (ke as any)(l, a, p, g), t = (n as any).alias;
    let m: any = (((r as any).db as any).getBoundaries as any)(t);
    ((m as any).length as any) > (0 as any) && (re as any)(a, t, l, m, r), ((n as any).alias as any) !== ("global" as any) && (Ae as any)(a, n, l), ((s as any).data as any).stopy = ((Math as any).max as any)((((l as any).data as any).stopy as any) + ((_ as any).c4ShapeMargin as any), ((s as any).data as any).stopy), ((s as any).data as any).stopx = ((Math as any).max as any)((((l as any).data as any).stopx as any) + ((_ as any).c4ShapeMargin as any), ((s as any).data as any).stopx), Xt = ((Math as any).max as any)(Xt, ((s as any).data as any).stopx), Wt = ((Math as any).max as any)(Wt, ((s as any).data as any).stopy);
  }
}
(y as any)(re, "drawInsideBoundary");
var R0: any = (y as any)(function (this: any, a: any, t: any, s: any, o: any): any {
    _ = ((Bt as any)() as any).c4;
    const r: any = ((Bt as any)() as any).securityLevel;
    let l: any;
    (r as any) === ("sandbox" as any) && (l = (jt as any)(("#i" as any) + (t as any)));
    const e: any = (r as any) === ("sandbox" as any) ? (jt as any)((((((l as any).nodes as any)() as any)[0] as any).contentDocument as any).body) : (jt as any)("body");
    let n: any = (o as any).db;
    (((o as any).db as any).setWrap as any)((_ as any).wrap), ve = ((n as any).getC4ShapeInRow as any)(), ee = ((n as any).getC4BoundaryInRow as any)(), ((de as any).debug as any)(`C:${((JSON as any).stringify as any)(_, null, 2)}`);
    const i: any = (r as any) === ("sandbox" as any) ? ((e as any).select as any)(`[id="${t}"]`) : (jt as any)(`[id="${t}"]`);
    ((z as any).insertComputerIcon as any)(i, t), ((z as any).insertDatabaseIcon as any)(i, t), ((z as any).insertClockIcon as any)(i, t);
    let u: any = new (Ee as any)(o);
    ((u as any).setData as any)((_ as any).diagramMarginX, (_ as any).diagramMarginX, (_ as any).diagramMarginY, (_ as any).diagramMarginY), ((u as any).data as any).widthLimit = (screen as any).availWidth, Xt = (_ as any).diagramMarginX, Wt = (_ as any).diagramMarginY;
    const d: any = (((o as any).db as any).getTitle as any)();
    let p: any = (((o as any).db as any).getBoundaries as any)("");
    (re as any)(i, "", u, p, o), ((z as any).insertArrowHead as any)(i, t), ((z as any).insertArrowEnd as any)(i, t), ((z as any).insertArrowCrossHead as any)(i, t), ((z as any).insertArrowFilledHead as any)(i, t), (O0 as any)(i, (((o as any).db as any).getRels as any)(), ((o as any).db as any).getC4Shape, o, t), ((u as any).data as any).stopx = Xt, ((u as any).data as any).stopy = Wt;
    const g: any = (u as any).data;
    let O: any = (((g as any).stopy as any) - ((g as any).starty as any) as any) + ((2 as any) * ((_ as any).diagramMarginY as any) as any);
    const P: any = (((g as any).stopx as any) - ((g as any).startx as any) as any) + ((2 as any) * ((_ as any).diagramMarginX as any) as any);
    d && ((((((((i as any).append as any)("text") as any).text as any)(d) as any).attr as any)("x", ((((g as any).stopx as any) - ((g as any).startx as any) as any) / (2 as any) as any) - ((4 as any) * ((_ as any).diagramMarginX as any) as any)) as any).attr as any)("y", ((g as any).starty as any) + ((_ as any).diagramMarginY as any)), (Le as any)(i, O, P, (_ as any).useMaxWidth);
    const M: any = d ? 60 : 0;
    ((i as any).attr as any)("viewBox", ((((((((g as any).startx as any) - ((_ as any).diagramMarginX as any) as any) + (" -" as any) as any) + (((_ as any).diagramMarginY as any) + (M as any) as any) as any) + (" " as any) as any) + (P as any) as any) + (" " as any) as any) + ((O as any) + (M as any) as any)), ((de as any).debug as any)("models:", g);
  }, "draw"),
  ye: any = {
    drawPersonOrSystemArray: ke,
    drawBoundary: Ae,
    setConf: ae,
    draw: R0
  },
  S0: any = (y as any)((a: any): any => `.person {
    stroke: ${(a as any).personBorder};
    fill: ${(a as any).personBkg};
  }
`, "getStyles"),
  D0: any = S0,
  M0: any = {
    parser: Ue,
    db: te,
    renderer: ye,
    styles: D0,
    init: (y as any)(({
      c4: a,
      wrap: t
    }: any): any => {
      ((ye as any).setConf as any)(a), ((te as any).setWrap as any)(t);
    }, "init")
  };
export { M0 as diagram };
//# debugId=1104688d-1e79-4549-9694-03393f2b67fd
