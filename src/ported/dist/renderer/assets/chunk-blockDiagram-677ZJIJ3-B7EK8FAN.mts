declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "9cd5e8e2-5c59-4cd9-9364-8ae82a73e537", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-9cd5e8e2-5c59-4cd9-9364-8ae82a73e537");
  } catch (e: any) {}
} as any)();
import { g as ve } from "./chunk-chunk-5VM5RSS4-CTCaRfNa.js";
import { aA as Ee, aB as Ut, aC as _e, aD as Xt, aE as Vt, aF as Gt, aG as Zt, aH as bt, aI as jt, aJ as qt, aK as Jt, aL as Qt, aM as $t, aN as te, aO as Te, aP as De, aQ as Be, aR as Ne, aS as Ie, aT as Ce, aU as Oe, aV as Re, aW as Ae, aX as ze, aY as Me, _ as u, z as rt, d as D, e as Pe, l as k, q as Fe, t as We, c as R, aZ as Ye, a7 as He, a8 as Ke, a3 as Ue, a_ as M, a$ as vt, b0 as Q, as as Xe, y as $, k as Ve, b1 as Ge, i as Ot, b2 as Rt, b3 as Ze } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { G as je } from "./chunk-graph-BvS0Xx32.js";
import { c as qe } from "./chunk-channel-Bm516PE5.js";
import "./index.eager-vendor-Qbf9YA6n.js";
function Je(this: any, e: any): any {
  return ((Array as any).isArray as any)(e);
}
function Qe(this: any, e: any): any {
  if ((Ee as any)(e)) return e;
  const t: any = (Ut as any)(e);
  if (!($e as any)(e)) return {};
  if ((Je as any)(e)) {
    const s: any = ((Array as any).from as any)(e);
    return ((e as any).length as any) > (0 as any) && (typeof (e as any)[0] as any) == ("string" as any) && ((Object as any).hasOwn as any)(e, "index") && ((s as any).index = (e as any).index, (s as any).input = (e as any).input), s;
  }
  if ((_e as any)(e)) {
    const s: any = e,
      i: any = (s as any).constructor;
    return new (i as any)((s as any).buffer, (s as any).byteOffset, (s as any).length);
  }
  if ((t as any) === (Xt as any)) return new (ArrayBuffer as any)((e as any).byteLength);
  if ((t as any) === (Vt as any)) {
    const s: any = e,
      i: any = (s as any).buffer,
      c: any = (s as any).byteOffset,
      r: any = (s as any).byteLength,
      n: any = new (ArrayBuffer as any)(r),
      l: any = new (Uint8Array as any)(i, c, r);
    return ((new (Uint8Array as any)(n) as any).set as any)(l), new (DataView as any)(n);
  }
  if ((t as any) === (Gt as any) || (t as any) === (Zt as any) || (t as any) === (bt as any)) {
    const s: any = (e as any).constructor,
      i: any = new (s as any)(((e as any).valueOf as any)());
    return (t as any) === (bt as any) ? (er as any)(i, e) : (xt as any)(i, e), i;
  }
  if ((t as any) === (jt as any)) return new (Date as any)((Number as any)(e));
  if ((t as any) === (qt as any)) {
    const s: any = e,
      i: any = new (RegExp as any)((s as any).source, (s as any).flags);
    return (i as any).lastIndex = (s as any).lastIndex, i;
  }
  if ((t as any) === (Jt as any)) return (Object as any)(((((Symbol as any).prototype as any).valueOf as any).call as any)(e));
  if ((t as any) === (Qt as any)) {
    const s: any = e,
      i: any = new (Map as any)();
    return ((s as any).forEach as any)((c: any, r: any): any => {
      ((i as any).set as any)(r, c);
    }), i;
  }
  if ((t as any) === ($t as any)) {
    const s: any = e,
      i: any = new (Set as any)();
    return ((s as any).forEach as any)((c: any): any => {
      ((i as any).add as any)(c);
    }), i;
  }
  if ((t as any) === (te as any)) {
    const s: any = e,
      i: any = {};
    return (xt as any)(i, s), (i as any).length = (s as any).length, (i as any)[(Symbol as any).iterator] = (s as any)[(Symbol as any).iterator], i;
  }
  const a: any = {};
  return (rr as any)(a, e), (xt as any)(a, e), (tr as any)(a, e), a;
}
function $e(this: any, e: any): any {
  switch ((Ut as any)(e)) {
    case te:
    case Me:
    case Xt:
    case Vt:
    case Gt:
    case jt:
    case ze:
    case Ae:
    case Re:
    case Oe:
    case Ce:
    case Qt:
    case Zt:
    case Ie:
    case qt:
    case $t:
    case bt:
    case Jt:
    case Ne:
    case Be:
    case De:
    case Te:
      return !0;
    default:
      return !1;
  }
}
function xt(this: any, e: any, t: any): any {
  for (const a in t) ((Object as any).hasOwn as any)(t, a) && ((e as any)[a] = (t as any)[a]);
}
function tr(this: any, e: any, t: any): any {
  const a: any = ((Object as any).getOwnPropertySymbols as any)(t);
  for (let s: any = 0; (s as any) < ((a as any).length as any); s++) {
    const i: any = (a as any)[s];
    ((((Object as any).prototype as any).propertyIsEnumerable as any).call as any)(t, i) && ((e as any)[i] = (t as any)[i]);
  }
}
function er(this: any, e: any, t: any): any {
  const a: any = (((t as any).valueOf as any)() as any).length;
  for (const s in t) ((Object as any).hasOwn as any)(t, s) && (((Number as any).isNaN as any)((Number as any)(s)) || ((Number as any)(s) as any) >= (a as any)) && ((e as any)[s] = (t as any)[s]);
}
function rr(this: any, e: any, t: any): any {
  const a: any = ((Object as any).getPrototypeOf as any)(t);
  (a as any) !== (null as any) && (typeof (t as any).constructor as any) == ("function" as any) && ((Object as any).setPrototypeOf as any)(e, a);
}
var wt: any = (function (this: any): any {
  var e: any = (u as any)(function (this: any, T: any, m: any, p: any, x: any): any {
      for (p = p || {}, x = (T as any).length; x--; (p as any)[(T as any)[x]] = m);
      return p;
    }, "o"),
    t: any = [1, 15],
    a: any = [1, 7],
    s: any = [1, 13],
    i: any = [1, 14],
    c: any = [1, 19],
    r: any = [1, 16],
    n: any = [1, 17],
    l: any = [1, 18],
    g: any = [8, 30],
    h: any = [8, 10, 21, 28, 29, 30, 31, 39, 43, 46],
    d: any = [1, 23],
    b: any = [1, 24],
    w: any = [8, 10, 15, 16, 21, 28, 29, 30, 31, 39, 43, 46],
    y: any = [8, 10, 15, 16, 21, 27, 28, 29, 30, 31, 39, 43, 46],
    v: any = [1, 49],
    S: any = {
      trace: (u as any)(function (this: any): any {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        spaceLines: 3,
        SPACELINE: 4,
        NL: 5,
        separator: 6,
        SPACE: 7,
        EOF: 8,
        start: 9,
        BLOCK_DIAGRAM_KEY: 10,
        document: 11,
        stop: 12,
        statement: 13,
        link: 14,
        LINK: 15,
        START_LINK: 16,
        LINK_LABEL: 17,
        STR: 18,
        nodeStatement: 19,
        columnsStatement: 20,
        SPACE_BLOCK: 21,
        blockStatement: 22,
        classDefStatement: 23,
        cssClassStatement: 24,
        styleStatement: 25,
        node: 26,
        SIZE: 27,
        COLUMNS: 28,
        "id-block": 29,
        end: 30,
        NODE_ID: 31,
        nodeShapeNLabel: 32,
        dirList: 33,
        DIR: 34,
        NODE_DSTART: 35,
        NODE_DEND: 36,
        BLOCK_ARROW_START: 37,
        BLOCK_ARROW_END: 38,
        classDef: 39,
        CLASSDEF_ID: 40,
        CLASSDEF_STYLEOPTS: 41,
        DEFAULT: 42,
        class: 43,
        CLASSENTITY_IDS: 44,
        STYLECLASS: 45,
        style: 46,
        STYLE_ENTITY_IDS: 47,
        STYLE_DEFINITION_DATA: 48,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        4: "SPACELINE",
        5: "NL",
        7: "SPACE",
        8: "EOF",
        10: "BLOCK_DIAGRAM_KEY",
        15: "LINK",
        16: "START_LINK",
        17: "LINK_LABEL",
        18: "STR",
        21: "SPACE_BLOCK",
        27: "SIZE",
        28: "COLUMNS",
        29: "id-block",
        30: "end",
        31: "NODE_ID",
        34: "DIR",
        35: "NODE_DSTART",
        36: "NODE_DEND",
        37: "BLOCK_ARROW_START",
        38: "BLOCK_ARROW_END",
        39: "classDef",
        40: "CLASSDEF_ID",
        41: "CLASSDEF_STYLEOPTS",
        42: "DEFAULT",
        43: "class",
        44: "CLASSENTITY_IDS",
        45: "STYLECLASS",
        46: "style",
        47: "STYLE_ENTITY_IDS",
        48: "STYLE_DEFINITION_DATA"
      },
      productions_: [0, [3, 1], [3, 2], [3, 2], [6, 1], [6, 1], [6, 1], [9, 3], [12, 1], [12, 1], [12, 2], [12, 2], [11, 1], [11, 2], [14, 1], [14, 4], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [19, 3], [19, 2], [19, 1], [20, 1], [22, 4], [22, 3], [26, 1], [26, 2], [33, 1], [33, 2], [32, 3], [32, 4], [23, 3], [23, 3], [24, 3], [25, 3]],
      performAction: (u as any)(function (this: any, m: any, p: any, x: any, L: any, E: any, o: any, F: any): any {
        var f: any = ((o as any).length as any) - (1 as any);
        switch (E) {
          case 4:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: separator (NL) ");
            break;
          case 5:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: separator (Space) ");
            break;
          case 6:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: separator (EOF) ");
            break;
          case 7:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: hierarchy: ", (o as any)[(f as any) - (1 as any)]), ((L as any).setHierarchy as any)((o as any)[(f as any) - (1 as any)]);
            break;
          case 8:
            ((((L as any).getLogger as any)() as any).debug as any)("Stop NL ");
            break;
          case 9:
            ((((L as any).getLogger as any)() as any).debug as any)("Stop EOF ");
            break;
          case 10:
            ((((L as any).getLogger as any)() as any).debug as any)("Stop NL2 ");
            break;
          case 11:
            ((((L as any).getLogger as any)() as any).debug as any)("Stop EOF2 ");
            break;
          case 12:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: statement: ", (o as any)[f]), (typeof ((o as any)[f] as any).length as any) == ("number" as any) ? (this as any).$ = (o as any)[f] : (this as any).$ = [(o as any)[f]];
            break;
          case 13:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: statement #2: ", (o as any)[(f as any) - (1 as any)]), (this as any).$ = (([(o as any)[(f as any) - (1 as any)]] as any).concat as any)((o as any)[f]);
            break;
          case 14:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: link: ", (o as any)[f], m), (this as any).$ = {
              edgeTypeStr: (o as any)[f],
              label: ""
            };
            break;
          case 15:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: LABEL link: ", (o as any)[(f as any) - (3 as any)], (o as any)[(f as any) - (1 as any)], (o as any)[f]), (this as any).$ = {
              edgeTypeStr: (o as any)[f],
              label: (o as any)[(f as any) - (1 as any)]
            };
            break;
          case 18:
            const C: any = (parseInt as any)((o as any)[f]),
              j: any = ((L as any).generateId as any)();
            (this as any).$ = {
              id: j,
              type: "space",
              label: "",
              width: C,
              children: []
            };
            break;
          case 23:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: (nodeStatement link node) ", (o as any)[(f as any) - (2 as any)], (o as any)[(f as any) - (1 as any)], (o as any)[f], " typestr: ", ((o as any)[(f as any) - (1 as any)] as any).edgeTypeStr);
            const V: any = ((L as any).edgeStrToEdgeData as any)(((o as any)[(f as any) - (1 as any)] as any).edgeTypeStr),
              at: any = ((L as any).edgeStrToEdgeStartData as any)(((o as any)[(f as any) - (1 as any)] as any).edgeTypeStr),
              gt: any = ((L as any).edgeStrToThickness as any)(((o as any)[(f as any) - (1 as any)] as any).edgeTypeStr),
              O: any = ((L as any).edgeStrToPattern as any)(((o as any)[(f as any) - (1 as any)] as any).edgeTypeStr);
            (this as any).$ = [{
              id: ((o as any)[(f as any) - (2 as any)] as any).id,
              label: ((o as any)[(f as any) - (2 as any)] as any).label,
              type: ((o as any)[(f as any) - (2 as any)] as any).type,
              directions: ((o as any)[(f as any) - (2 as any)] as any).directions
            }, {
              id: ((((o as any)[(f as any) - (2 as any)] as any).id as any) + ("-" as any) as any) + (((o as any)[f] as any).id as any),
              start: ((o as any)[(f as any) - (2 as any)] as any).id,
              end: ((o as any)[f] as any).id,
              label: ((o as any)[(f as any) - (1 as any)] as any).label,
              type: "edge",
              thickness: gt,
              pattern: O,
              directions: ((o as any)[f] as any).directions,
              arrowTypeEnd: V,
              arrowTypeStart: at
            }, {
              id: ((o as any)[f] as any).id,
              label: ((o as any)[f] as any).label,
              type: ((L as any).typeStr2Type as any)(((o as any)[f] as any).typeStr),
              directions: ((o as any)[f] as any).directions
            }];
            break;
          case 24:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: nodeStatement (abc88 node size) ", (o as any)[(f as any) - (1 as any)], (o as any)[f]), (this as any).$ = {
              id: ((o as any)[(f as any) - (1 as any)] as any).id,
              label: ((o as any)[(f as any) - (1 as any)] as any).label,
              type: ((L as any).typeStr2Type as any)(((o as any)[(f as any) - (1 as any)] as any).typeStr),
              directions: ((o as any)[(f as any) - (1 as any)] as any).directions,
              widthInColumns: (parseInt as any)((o as any)[f], 10)
            };
            break;
          case 25:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: nodeStatement (node) ", (o as any)[f]), (this as any).$ = {
              id: ((o as any)[f] as any).id,
              label: ((o as any)[f] as any).label,
              type: ((L as any).typeStr2Type as any)(((o as any)[f] as any).typeStr),
              directions: ((o as any)[f] as any).directions,
              widthInColumns: 1
            };
            break;
          case 26:
            ((((L as any).getLogger as any)() as any).debug as any)("APA123", this ? this : "na"), ((((L as any).getLogger as any)() as any).debug as any)("COLUMNS: ", (o as any)[f]), (this as any).$ = {
              type: "column-setting",
              columns: ((o as any)[f] as any) === ("auto" as any) ? -1 : (parseInt as any)((o as any)[f])
            };
            break;
          case 27:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: id-block statement : ", (o as any)[(f as any) - (2 as any)], (o as any)[(f as any) - (1 as any)]), ((L as any).generateId as any)(), (this as any).$ = {
              ...(o as any)[(f as any) - (2 as any)],
              type: "composite",
              children: (o as any)[(f as any) - (1 as any)]
            };
            break;
          case 28:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: blockStatement : ", (o as any)[(f as any) - (2 as any)], (o as any)[(f as any) - (1 as any)], (o as any)[f]);
            const G: any = ((L as any).generateId as any)();
            (this as any).$ = {
              id: G,
              type: "composite",
              label: "",
              children: (o as any)[(f as any) - (1 as any)]
            };
            break;
          case 29:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: node (NODE_ID separator): ", (o as any)[f]), (this as any).$ = {
              id: (o as any)[f]
            };
            break;
          case 30:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: node (NODE_ID nodeShapeNLabel separator): ", (o as any)[(f as any) - (1 as any)], (o as any)[f]), (this as any).$ = {
              id: (o as any)[(f as any) - (1 as any)],
              label: ((o as any)[f] as any).label,
              typeStr: ((o as any)[f] as any).typeStr,
              directions: ((o as any)[f] as any).directions
            };
            break;
          case 31:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: dirList: ", (o as any)[f]), (this as any).$ = [(o as any)[f]];
            break;
          case 32:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: dirList: ", (o as any)[(f as any) - (1 as any)], (o as any)[f]), (this as any).$ = (([(o as any)[(f as any) - (1 as any)]] as any).concat as any)((o as any)[f]);
            break;
          case 33:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: nodeShapeNLabel: ", (o as any)[(f as any) - (2 as any)], (o as any)[(f as any) - (1 as any)], (o as any)[f]), (this as any).$ = {
              typeStr: ((o as any)[(f as any) - (2 as any)] as any) + ((o as any)[f] as any),
              label: (o as any)[(f as any) - (1 as any)]
            };
            break;
          case 34:
            ((((L as any).getLogger as any)() as any).debug as any)("Rule: BLOCK_ARROW nodeShapeNLabel: ", (o as any)[(f as any) - (3 as any)], (o as any)[(f as any) - (2 as any)], " #3:", (o as any)[(f as any) - (1 as any)], (o as any)[f]), (this as any).$ = {
              typeStr: ((o as any)[(f as any) - (3 as any)] as any) + ((o as any)[f] as any),
              label: (o as any)[(f as any) - (2 as any)],
              directions: (o as any)[(f as any) - (1 as any)]
            };
            break;
          case 35:
          case 36:
            (this as any).$ = {
              type: "classDef",
              id: (((o as any)[(f as any) - (1 as any)] as any).trim as any)(),
              css: (((o as any)[f] as any).trim as any)()
            };
            break;
          case 37:
            (this as any).$ = {
              type: "applyClass",
              id: (((o as any)[(f as any) - (1 as any)] as any).trim as any)(),
              styleClass: (((o as any)[f] as any).trim as any)()
            };
            break;
          case 38:
            (this as any).$ = {
              type: "applyStyles",
              id: (((o as any)[(f as any) - (1 as any)] as any).trim as any)(),
              stylesStr: (((o as any)[f] as any).trim as any)()
            };
            break;
        }
      }, "anonymous"),
      table: [{
        9: 1,
        10: [1, 2]
      }, {
        1: [3]
      }, {
        10: t,
        11: 3,
        13: 4,
        19: 5,
        20: 6,
        21: a,
        22: 8,
        23: 9,
        24: 10,
        25: 11,
        26: 12,
        28: s,
        29: i,
        31: c,
        39: r,
        43: n,
        46: l
      }, {
        8: [1, 20]
      }, (e as any)(g, [2, 12], {
        13: 4,
        19: 5,
        20: 6,
        22: 8,
        23: 9,
        24: 10,
        25: 11,
        26: 12,
        11: 21,
        10: t,
        21: a,
        28: s,
        29: i,
        31: c,
        39: r,
        43: n,
        46: l
      }), (e as any)(h, [2, 16], {
        14: 22,
        15: d,
        16: b
      }), (e as any)(h, [2, 17]), (e as any)(h, [2, 18]), (e as any)(h, [2, 19]), (e as any)(h, [2, 20]), (e as any)(h, [2, 21]), (e as any)(h, [2, 22]), (e as any)(w, [2, 25], {
        27: [1, 25]
      }), (e as any)(h, [2, 26]), {
        19: 26,
        26: 12,
        31: c
      }, {
        10: t,
        11: 27,
        13: 4,
        19: 5,
        20: 6,
        21: a,
        22: 8,
        23: 9,
        24: 10,
        25: 11,
        26: 12,
        28: s,
        29: i,
        31: c,
        39: r,
        43: n,
        46: l
      }, {
        40: [1, 28],
        42: [1, 29]
      }, {
        44: [1, 30]
      }, {
        47: [1, 31]
      }, (e as any)(y, [2, 29], {
        32: 32,
        35: [1, 33],
        37: [1, 34]
      }), {
        1: [2, 7]
      }, (e as any)(g, [2, 13]), {
        26: 35,
        31: c
      }, {
        31: [2, 14]
      }, {
        17: [1, 36]
      }, (e as any)(w, [2, 24]), {
        10: t,
        11: 37,
        13: 4,
        14: 22,
        15: d,
        16: b,
        19: 5,
        20: 6,
        21: a,
        22: 8,
        23: 9,
        24: 10,
        25: 11,
        26: 12,
        28: s,
        29: i,
        31: c,
        39: r,
        43: n,
        46: l
      }, {
        30: [1, 38]
      }, {
        41: [1, 39]
      }, {
        41: [1, 40]
      }, {
        45: [1, 41]
      }, {
        48: [1, 42]
      }, (e as any)(y, [2, 30]), {
        18: [1, 43]
      }, {
        18: [1, 44]
      }, (e as any)(w, [2, 23]), {
        18: [1, 45]
      }, {
        30: [1, 46]
      }, (e as any)(h, [2, 28]), (e as any)(h, [2, 35]), (e as any)(h, [2, 36]), (e as any)(h, [2, 37]), (e as any)(h, [2, 38]), {
        36: [1, 47]
      }, {
        33: 48,
        34: v
      }, {
        15: [1, 50]
      }, (e as any)(h, [2, 27]), (e as any)(y, [2, 33]), {
        38: [1, 51]
      }, {
        33: 52,
        34: v,
        38: [2, 31]
      }, {
        31: [2, 15]
      }, (e as any)(y, [2, 34]), {
        38: [2, 32]
      }],
      defaultActions: {
        20: [2, 7],
        23: [2, 14],
        50: [2, 15],
        52: [2, 32]
      },
      parseError: (u as any)(function (this: any, m: any, p: any): any {
        if ((p as any).recoverable) ((this as any).trace as any)(m);else {
          var x: any = new (Error as any)(m);
          throw (x as any).hash = p, x;
        }
      }, "parseError"),
      parse: (u as any)(function (this: any, m: any): any {
        var ut: any;
        var p: any = this,
          x: any = [0],
          L: any = [],
          E: any = [null],
          o: any = [],
          F: any = (this as any).table,
          f: any = "",
          C: any = 0,
          j: any = 0,
          V: number = 2,
          at: number = 1,
          gt: any = (((o as any).slice as any).call as any)(arguments, 1),
          O: any = ((Object as any).create as any)((this as any).lexer),
          G: any = {
            yy: {}
          };
        for (ut in (this as any).yy) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).yy, ut) && (((G as any).yy as any)[ut] = ((this as any).yy as any)[ut]);
        ((O as any).setInput as any)(m, (G as any).yy), ((G as any).yy as any).lexer = O, ((G as any).yy as any).parser = this, (typeof (O as any).yylloc as any) > ("u" as any) && ((O as any).yylloc = {});
        var dt: any = (O as any).yylloc;
        ((o as any).push as any)(dt);
        var Le: any = (O as any).options && ((O as any).options as any).ranges;
        (typeof ((G as any).yy as any).parseError as any) == ("function" as any) ? (this as any).parseError = ((G as any).yy as any).parseError : (this as any).parseError = (((Object as any).getPrototypeOf as any)(this) as any).parseError;
        function ke(this: any, W: any): any {
          (x as any).length = ((x as any).length as any) - ((2 as any) * (W as any) as any), (E as any).length = ((E as any).length as any) - (W as any), (o as any).length = ((o as any).length as any) - (W as any);
        }
        (u as any)(ke, "popStack");
        function It(this: any): any {
          var W: any;
          return W = ((L as any).pop as any)() || ((O as any).lex as any)() || at, (typeof W as any) != ("number" as any) && (W instanceof Array && (L = W, W = ((L as any).pop as any)()), W = ((p as any).symbols_ as any)[W] || W), W;
        }
        (u as any)(It, "lex");
        for (var P: any, q: any, H: any, pt: any, J: any = {}, st: any, Z: any, Ct: any, it: any;;) {
          if (q = (x as any)[((x as any).length as any) - (1 as any)], ((this as any).defaultActions as any)[q] ? H = ((this as any).defaultActions as any)[q] : (((P as any) === (null as any) || (typeof P as any) > ("u" as any)) && (P = (It as any)()), H = (F as any)[q] && ((F as any)[q] as any)[P]), (typeof H as any) > ("u" as any) || !(H as any).length || !(H as any)[0]) {
            var ft: any = "";
            it = [];
            for (st in (F as any)[q]) ((this as any).terminals_ as any)[st] && (st as any) > (V as any) && ((it as any).push as any)((("'" as any) + (((this as any).terminals_ as any)[st] as any) as any) + ("'" as any));
            (O as any).showPosition ? ft = (((((((("Parse error on line " as any) + ((C as any) + (1 as any) as any) as any) + (`:
` as any) as any) + (((O as any).showPosition as any)() as any) as any) + (`
Expecting ` as any) as any) + (((it as any).join as any)(", ") as any) as any) + (", got '" as any) as any) + ((((this as any).terminals_ as any)[P] || P) as any) as any) + ("'" as any) : ft = ((("Parse error on line " as any) + ((C as any) + (1 as any) as any) as any) + (": Unexpected " as any) as any) + (((P as any) == (at as any) ? "end of input" : (("'" as any) + ((((this as any).terminals_ as any)[P] || P) as any) as any) + ("'" as any)) as any), ((this as any).parseError as any)(ft, {
              text: (O as any).match,
              token: ((this as any).terminals_ as any)[P] || P,
              line: (O as any).yylineno,
              loc: dt,
              expected: it
            });
          }
          if ((H as any)[0] instanceof Array && ((H as any).length as any) > (1 as any)) throw new (Error as any)(((("Parse Error: multiple actions possible at state: " as any) + (q as any) as any) + (", token: " as any) as any) + (P as any));
          switch ((H as any)[0]) {
            case 1:
              ((x as any).push as any)(P), ((E as any).push as any)((O as any).yytext), ((o as any).push as any)((O as any).yylloc), ((x as any).push as any)((H as any)[1]), P = null, j = (O as any).yyleng, f = (O as any).yytext, C = (O as any).yylineno, dt = (O as any).yylloc;
              break;
            case 2:
              if (Z = (((this as any).productions_ as any)[(H as any)[1]] as any)[1], (J as any).$ = (E as any)[((E as any).length as any) - (Z as any)], (J as any)._$ = {
                first_line: ((o as any)[((o as any).length as any) - ((Z || 1) as any)] as any).first_line,
                last_line: ((o as any)[((o as any).length as any) - (1 as any)] as any).last_line,
                first_column: ((o as any)[((o as any).length as any) - ((Z || 1) as any)] as any).first_column,
                last_column: ((o as any)[((o as any).length as any) - (1 as any)] as any).last_column
              }, Le && (((J as any)._$ as any).range = [(((o as any)[((o as any).length as any) - ((Z || 1) as any)] as any).range as any)[0], (((o as any)[((o as any).length as any) - (1 as any)] as any).range as any)[1]]), pt = (((this as any).performAction as any).apply as any)(J, (([f, j, C, (G as any).yy, (H as any)[1], E, o] as any).concat as any)(gt)), (typeof pt as any) < ("u" as any)) return pt;
              Z && (x = ((x as any).slice as any)(0, ((-1 as any) * (Z as any) as any) * (2 as any)), E = ((E as any).slice as any)(0, (-1 as any) * (Z as any)), o = ((o as any).slice as any)(0, (-1 as any) * (Z as any))), ((x as any).push as any)((((this as any).productions_ as any)[(H as any)[1]] as any)[0]), ((E as any).push as any)((J as any).$), ((o as any).push as any)((J as any)._$), Ct = ((F as any)[(x as any)[((x as any).length as any) - (2 as any)]] as any)[(x as any)[((x as any).length as any) - (1 as any)]], ((x as any).push as any)(Ct);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }, "parse")
    },
    N: any = (function (this: any): any {
      var T: any = {
        EOF: 1,
        parseError: (u as any)(function (this: any, p: any, x: any): any {
          if (((this as any).yy as any).parser) ((((this as any).yy as any).parser as any).parseError as any)(p, x);else throw new (Error as any)(p);
        }, "parseError"),
        setInput: (u as any)(function (this: any, m: any, p: any): any {
          return (this as any).yy = p || (this as any).yy || {}, (this as any)._input = m, (this as any)._more = (this as any)._backtrack = (this as any).done = !1, (this as any).yylineno = (this as any).yyleng = 0, (this as any).yytext = (this as any).matched = (this as any).match = "", (this as any).conditionStack = ["INITIAL"], (this as any).yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [0, 0]), (this as any).offset = 0, this;
        }, "setInput"),
        input: (u as any)(function (this: any): any {
          var m: any = ((this as any)._input as any)[0];
          (this as any).yytext += m, (this as any).yyleng++, (this as any).offset++, (this as any).match += m, (this as any).matched += m;
          var p: any = ((m as any).match as any)(/(?:\r\n?|\n).*/g);
          return p ? ((this as any).yylineno++, ((this as any).yylloc as any).last_line++) : ((this as any).yylloc as any).last_column++, ((this as any).options as any).ranges && (((this as any).yylloc as any).range as any)[1]++, (this as any)._input = (((this as any)._input as any).slice as any)(1), m;
        }, "input"),
        unput: (u as any)(function (this: any, m: any): any {
          var p: any = (m as any).length,
            x: any = ((m as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any)._input = (m as any) + ((this as any)._input as any), (this as any).yytext = (((this as any).yytext as any).substr as any)(0, (((this as any).yytext as any).length as any) - (p as any)), (this as any).offset -= p;
          var L: any = (((this as any).match as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any).match = (((this as any).match as any).substr as any)(0, (((this as any).match as any).length as any) - (1 as any)), (this as any).matched = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (1 as any)), ((x as any).length as any) - (1 as any) && ((this as any).yylineno -= ((x as any).length as any) - (1 as any));
          var E: any = ((this as any).yylloc as any).range;
          return (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).first_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).first_column,
            last_column: x ? (((((x as any).length as any) === ((L as any).length as any) ? ((this as any).yylloc as any).first_column : 0) as any) + (((L as any)[((L as any).length as any) - ((x as any).length as any)] as any).length as any) as any) - (((x as any)[0] as any).length as any) : (((this as any).yylloc as any).first_column as any) - (p as any)
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(E as any)[0], (((E as any)[0] as any) + ((this as any).yyleng as any) as any) - (p as any)]), (this as any).yyleng = ((this as any).yytext as any).length, this;
        }, "unput"),
        more: (u as any)(function (this: any): any {
          return (this as any)._more = !0, this;
        }, "more"),
        reject: (u as any)(function (this: any): any {
          if (((this as any).options as any).backtrack_lexer) (this as any)._backtrack = !0;else return ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
          return this;
        }, "reject"),
        less: (u as any)(function (this: any, m: any): any {
          ((this as any).unput as any)((((this as any).match as any).slice as any)(m));
        }, "less"),
        pastInput: (u as any)(function (this: any): any {
          var m: any = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (((this as any).match as any).length as any));
          return ((((m as any).length as any) > (20 as any) ? "..." : "") as any) + (((((m as any).substr as any)(-20) as any).replace as any)(/\n/g, "") as any);
        }, "pastInput"),
        upcomingInput: (u as any)(function (this: any): any {
          var m: any = (this as any).match;
          return ((m as any).length as any) < (20 as any) && (m += (((this as any)._input as any).substr as any)(0, (20 as any) - ((m as any).length as any))), (((((m as any).substr as any)(0, 20) as any) + ((((m as any).length as any) > (20 as any) ? "..." : "") as any) as any).replace as any)(/\n/g, "");
        }, "upcomingInput"),
        showPosition: (u as any)(function (this: any): any {
          var m: any = ((this as any).pastInput as any)(),
            p: any = ((new (Array as any)(((m as any).length as any) + (1 as any)) as any).join as any)("-");
          return ((((m as any) + (((this as any).upcomingInput as any)() as any) as any) + (`
` as any) as any) + (p as any) as any) + ("^" as any);
        }, "showPosition"),
        test_match: (u as any)(function (this: any, m: any, p: any): any {
          var o: any;
          var x: any, L: any, E: any;
          if (((this as any).options as any).backtrack_lexer && (E = {
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
          }, ((this as any).options as any).ranges && (((E as any).yylloc as any).range = ((((this as any).yylloc as any).range as any).slice as any)(0))), L = (((m as any)[0] as any).match as any)(/(?:\r\n?|\n).*/g), L && ((this as any).yylineno += (L as any).length), (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).last_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).last_column,
            last_column: L ? (((L as any)[((L as any).length as any) - (1 as any)] as any).length as any) - ((((((L as any)[((L as any).length as any) - (1 as any)] as any).match as any)(/\r?\n?/) as any)[0] as any).length as any) : (((this as any).yylloc as any).last_column as any) + (((m as any)[0] as any).length as any)
          }, (this as any).yytext += (m as any)[0], (this as any).match += (m as any)[0], (this as any).matches = m, (this as any).yyleng = ((this as any).yytext as any).length, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(this as any).offset, (this as any).offset += (this as any).yyleng]), (this as any)._more = !1, (this as any)._backtrack = !1, (this as any)._input = (((this as any)._input as any).slice as any)(((m as any)[0] as any).length), (this as any).matched += (m as any)[0], x = (((this as any).performAction as any).call as any)(this, (this as any).yy, this, p, ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]), (this as any).done && (this as any)._input && ((this as any).done = !1), x) return x;
          if ((this as any)._backtrack) {
            for (o in E) (this as any)[o] = (E as any)[o];
            return !1;
          }
          return !1;
        }, "test_match"),
        next: (u as any)(function (this: any): any {
          if ((this as any).done) return (this as any).EOF;
          (this as any)._input || ((this as any).done = !0);
          var m: any, p: any, x: any, L: any;
          (this as any)._more || ((this as any).yytext = "", (this as any).match = "");
          for (var E: any = ((this as any)._currentRules as any)(), o: any = 0; (o as any) < ((E as any).length as any); o++) if (x = (((this as any)._input as any).match as any)(((this as any).rules as any)[(E as any)[o]]), x && (!p || (((x as any)[0] as any).length as any) > (((p as any)[0] as any).length as any))) {
            if (p = x, L = o, ((this as any).options as any).backtrack_lexer) {
              if (m = ((this as any).test_match as any)(x, (E as any)[o]), (m as any) !== (!1 as any)) return m;
              if ((this as any)._backtrack) {
                p = !1;
                continue;
              } else return !1;
            } else if (!((this as any).options as any).flex) break;
          }
          return p ? (m = ((this as any).test_match as any)(p, (E as any)[L]), (m as any) !== (!1 as any) ? m : !1) : ((this as any)._input as any) === ("" as any) ? (this as any).EOF : ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. Unrecognized text.
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
        }, "next"),
        lex: (u as any)(function (this: any): any {
          var p: any = ((this as any).next as any)();
          return p || ((this as any).lex as any)();
        }, "lex"),
        begin: (u as any)(function (this: any, p: any): any {
          (((this as any).conditionStack as any).push as any)(p);
        }, "begin"),
        popState: (u as any)(function (this: any): any {
          var p: any = (((this as any).conditionStack as any).length as any) - (1 as any);
          return (p as any) > (0 as any) ? (((this as any).conditionStack as any).pop as any)() : ((this as any).conditionStack as any)[0];
        }, "popState"),
        _currentRules: (u as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length && ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)] ? (((this as any).conditions as any)[((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]] as any).rules : (((this as any).conditions as any).INITIAL as any).rules;
        }, "_currentRules"),
        topState: (u as any)(function (this: any, p: any): any {
          return p = ((((this as any).conditionStack as any).length as any) - (1 as any) as any) - (((Math as any).abs as any)(p || 0) as any), (p as any) >= (0 as any) ? ((this as any).conditionStack as any)[p] : "INITIAL";
        }, "topState"),
        pushState: (u as any)(function (this: any, p: any): any {
          ((this as any).begin as any)(p);
        }, "pushState"),
        stateStackSize: (u as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length;
        }, "stateStackSize"),
        options: {},
        performAction: (u as any)(function (this: any, p: any, x: any, L: any, E: any): any {
          switch (L) {
            case 0:
              return ((((p as any).getLogger as any)() as any).debug as any)("Found block-beta"), 10;
            case 1:
              return ((((p as any).getLogger as any)() as any).debug as any)("Found id-block"), 29;
            case 2:
              return ((((p as any).getLogger as any)() as any).debug as any)("Found block"), 10;
            case 3:
              ((((p as any).getLogger as any)() as any).debug as any)(".", (x as any).yytext);
              break;
            case 4:
              ((((p as any).getLogger as any)() as any).debug as any)("_", (x as any).yytext);
              break;
            case 5:
              return 5;
            case 6:
              return (x as any).yytext = -1, 28;
            case 7:
              return (x as any).yytext = (((x as any).yytext as any).replace as any)(/columns\s+/, ""), ((((p as any).getLogger as any)() as any).debug as any)("COLUMNS (LEX)", (x as any).yytext), 28;
            case 8:
              ((this as any).pushState as any)("md_string");
              break;
            case 9:
              return "MD_STR";
            case 10:
              ((this as any).popState as any)();
              break;
            case 11:
              ((this as any).pushState as any)("string");
              break;
            case 12:
              ((((p as any).getLogger as any)() as any).debug as any)("LEX: POPPING STR:", (x as any).yytext), ((this as any).popState as any)();
              break;
            case 13:
              return ((((p as any).getLogger as any)() as any).debug as any)("LEX: STR end:", (x as any).yytext), "STR";
            case 14:
              return (x as any).yytext = (((x as any).yytext as any).replace as any)(/space\:/, ""), ((((p as any).getLogger as any)() as any).debug as any)("SPACE NUM (LEX)", (x as any).yytext), 21;
            case 15:
              return (x as any).yytext = "1", ((((p as any).getLogger as any)() as any).debug as any)("COLUMNS (LEX)", (x as any).yytext), 21;
            case 16:
              return 42;
            case 17:
              return "LINKSTYLE";
            case 18:
              return "INTERPOLATE";
            case 19:
              return ((this as any).pushState as any)("CLASSDEF"), 39;
            case 20:
              return ((this as any).popState as any)(), ((this as any).pushState as any)("CLASSDEFID"), "DEFAULT_CLASSDEF_ID";
            case 21:
              return ((this as any).popState as any)(), ((this as any).pushState as any)("CLASSDEFID"), 40;
            case 22:
              return ((this as any).popState as any)(), 41;
            case 23:
              return ((this as any).pushState as any)("CLASS"), 43;
            case 24:
              return ((this as any).popState as any)(), ((this as any).pushState as any)("CLASS_STYLE"), 44;
            case 25:
              return ((this as any).popState as any)(), 45;
            case 26:
              return ((this as any).pushState as any)("STYLE_STMNT"), 46;
            case 27:
              return ((this as any).popState as any)(), ((this as any).pushState as any)("STYLE_DEFINITION"), 47;
            case 28:
              return ((this as any).popState as any)(), 48;
            case 29:
              return ((this as any).pushState as any)("acc_title"), "acc_title";
            case 30:
              return ((this as any).popState as any)(), "acc_title_value";
            case 31:
              return ((this as any).pushState as any)("acc_descr"), "acc_descr";
            case 32:
              return ((this as any).popState as any)(), "acc_descr_value";
            case 33:
              ((this as any).pushState as any)("acc_descr_multiline");
              break;
            case 34:
              ((this as any).popState as any)();
              break;
            case 35:
              return "acc_descr_multiline_value";
            case 36:
              return 30;
            case 37:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: (("), "NODE_DEND";
            case 38:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: (("), "NODE_DEND";
            case 39:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: ))"), "NODE_DEND";
            case 40:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: (("), "NODE_DEND";
            case 41:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: (("), "NODE_DEND";
            case 42:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: (-"), "NODE_DEND";
            case 43:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: -)"), "NODE_DEND";
            case 44:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: (("), "NODE_DEND";
            case 45:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: ]]"), "NODE_DEND";
            case 46:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: ("), "NODE_DEND";
            case 47:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: ])"), "NODE_DEND";
            case 48:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: /]"), "NODE_DEND";
            case 49:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: /]"), "NODE_DEND";
            case 50:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: )]"), "NODE_DEND";
            case 51:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: )"), "NODE_DEND";
            case 52:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: ]>"), "NODE_DEND";
            case 53:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: ]"), "NODE_DEND";
            case 54:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lexa: -)"), ((this as any).pushState as any)("NODE"), 35;
            case 55:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lexa: (-"), ((this as any).pushState as any)("NODE"), 35;
            case 56:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lexa: ))"), ((this as any).pushState as any)("NODE"), 35;
            case 57:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lexa: )"), ((this as any).pushState as any)("NODE"), 35;
            case 58:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lex: ((("), ((this as any).pushState as any)("NODE"), 35;
            case 59:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lexa: )"), ((this as any).pushState as any)("NODE"), 35;
            case 60:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lexa: )"), ((this as any).pushState as any)("NODE"), 35;
            case 61:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lexa: )"), ((this as any).pushState as any)("NODE"), 35;
            case 62:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lexc: >"), ((this as any).pushState as any)("NODE"), 35;
            case 63:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lexa: (["), ((this as any).pushState as any)("NODE"), 35;
            case 64:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lexa: )"), ((this as any).pushState as any)("NODE"), 35;
            case 65:
              return ((this as any).pushState as any)("NODE"), 35;
            case 66:
              return ((this as any).pushState as any)("NODE"), 35;
            case 67:
              return ((this as any).pushState as any)("NODE"), 35;
            case 68:
              return ((this as any).pushState as any)("NODE"), 35;
            case 69:
              return ((this as any).pushState as any)("NODE"), 35;
            case 70:
              return ((this as any).pushState as any)("NODE"), 35;
            case 71:
              return ((this as any).pushState as any)("NODE"), 35;
            case 72:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lexa: ["), ((this as any).pushState as any)("NODE"), 35;
            case 73:
              return ((this as any).pushState as any)("BLOCK_ARROW"), ((((p as any).getLogger as any)() as any).debug as any)("LEX ARR START"), 37;
            case 74:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lex: NODE_ID", (x as any).yytext), 31;
            case 75:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lex: EOF", (x as any).yytext), 8;
            case 76:
              ((this as any).pushState as any)("md_string");
              break;
            case 77:
              ((this as any).pushState as any)("md_string");
              break;
            case 78:
              return "NODE_DESCR";
            case 79:
              ((this as any).popState as any)();
              break;
            case 80:
              ((((p as any).getLogger as any)() as any).debug as any)("Lex: Starting string"), ((this as any).pushState as any)("string");
              break;
            case 81:
              ((((p as any).getLogger as any)() as any).debug as any)("LEX ARR: Starting string"), ((this as any).pushState as any)("string");
              break;
            case 82:
              return ((((p as any).getLogger as any)() as any).debug as any)("LEX: NODE_DESCR:", (x as any).yytext), "NODE_DESCR";
            case 83:
              ((((p as any).getLogger as any)() as any).debug as any)("LEX POPPING"), ((this as any).popState as any)();
              break;
            case 84:
              ((((p as any).getLogger as any)() as any).debug as any)("Lex: =>BAE"), ((this as any).pushState as any)("ARROW_DIR");
              break;
            case 85:
              return (x as any).yytext = (((x as any).yytext as any).replace as any)(/^,\s*/, ""), ((((p as any).getLogger as any)() as any).debug as any)("Lex (right): dir:", (x as any).yytext), "DIR";
            case 86:
              return (x as any).yytext = (((x as any).yytext as any).replace as any)(/^,\s*/, ""), ((((p as any).getLogger as any)() as any).debug as any)("Lex (left):", (x as any).yytext), "DIR";
            case 87:
              return (x as any).yytext = (((x as any).yytext as any).replace as any)(/^,\s*/, ""), ((((p as any).getLogger as any)() as any).debug as any)("Lex (x):", (x as any).yytext), "DIR";
            case 88:
              return (x as any).yytext = (((x as any).yytext as any).replace as any)(/^,\s*/, ""), ((((p as any).getLogger as any)() as any).debug as any)("Lex (y):", (x as any).yytext), "DIR";
            case 89:
              return (x as any).yytext = (((x as any).yytext as any).replace as any)(/^,\s*/, ""), ((((p as any).getLogger as any)() as any).debug as any)("Lex (up):", (x as any).yytext), "DIR";
            case 90:
              return (x as any).yytext = (((x as any).yytext as any).replace as any)(/^,\s*/, ""), ((((p as any).getLogger as any)() as any).debug as any)("Lex (down):", (x as any).yytext), "DIR";
            case 91:
              return (x as any).yytext = "]>", ((((p as any).getLogger as any)() as any).debug as any)("Lex (ARROW_DIR end):", (x as any).yytext), ((this as any).popState as any)(), ((this as any).popState as any)(), "BLOCK_ARROW_END";
            case 92:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lex: LINK", (("#" as any) + ((x as any).yytext as any) as any) + ("#" as any)), 15;
            case 93:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lex: LINK", (x as any).yytext), 15;
            case 94:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lex: LINK", (x as any).yytext), 15;
            case 95:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lex: LINK", (x as any).yytext), 15;
            case 96:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lex: START_LINK", (x as any).yytext), ((this as any).pushState as any)("LLABEL"), 16;
            case 97:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lex: START_LINK", (x as any).yytext), ((this as any).pushState as any)("LLABEL"), 16;
            case 98:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lex: START_LINK", (x as any).yytext), ((this as any).pushState as any)("LLABEL"), 16;
            case 99:
              ((this as any).pushState as any)("md_string");
              break;
            case 100:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lex: Starting string"), ((this as any).pushState as any)("string"), "LINK_LABEL";
            case 101:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: LINK", (("#" as any) + ((x as any).yytext as any) as any) + ("#" as any)), 15;
            case 102:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: LINK", (x as any).yytext), 15;
            case 103:
              return ((this as any).popState as any)(), ((((p as any).getLogger as any)() as any).debug as any)("Lex: LINK", (x as any).yytext), 15;
            case 104:
              return ((((p as any).getLogger as any)() as any).debug as any)("Lex: COLON", (x as any).yytext), (x as any).yytext = (((x as any).yytext as any).slice as any)(1), 27;
          }
        }, "anonymous"),
        rules: [/^(?:block-beta\b)/, /^(?:block:)/, /^(?:block\b)/, /^(?:[\s]+)/, /^(?:[\n]+)/, /^(?:((\u000D\u000A)|(\u000A)))/, /^(?:columns\s+auto\b)/, /^(?:columns\s+[\d]+)/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]*)/, /^(?:space[:]\d+)/, /^(?:space\b)/, /^(?:default\b)/, /^(?:linkStyle\b)/, /^(?:interpolate\b)/, /^(?:classDef\s+)/, /^(?:DEFAULT\s+)/, /^(?:\w+\s+)/, /^(?:[^\n]*)/, /^(?:class\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:style\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:end\b\s*)/, /^(?:\(\(\()/, /^(?:\)\)\))/, /^(?:[\)]\))/, /^(?:\}\})/, /^(?:\})/, /^(?:\(-)/, /^(?:-\))/, /^(?:\(\()/, /^(?:\]\])/, /^(?:\()/, /^(?:\]\))/, /^(?:\\\])/, /^(?:\/\])/, /^(?:\)\])/, /^(?:[\)])/, /^(?:\]>)/, /^(?:[\]])/, /^(?:-\))/, /^(?:\(-)/, /^(?:\)\))/, /^(?:\))/, /^(?:\(\(\()/, /^(?:\(\()/, /^(?:\{\{)/, /^(?:\{)/, /^(?:>)/, /^(?:\(\[)/, /^(?:\()/, /^(?:\[\[)/, /^(?:\[\|)/, /^(?:\[\()/, /^(?:\)\)\))/, /^(?:\[\\)/, /^(?:\[\/)/, /^(?:\[\\)/, /^(?:\[)/, /^(?:<\[)/, /^(?:[^\(\[\n\-\)\{\}\s\<\>:=]+)/, /^(?:$)/, /^(?:["][`])/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]+)/, /^(?:["])/, /^(?:\]>\s*\()/, /^(?:,?\s*right\s*)/, /^(?:,?\s*left\s*)/, /^(?:,?\s*x\s*)/, /^(?:,?\s*y\s*)/, /^(?:,?\s*up\s*)/, /^(?:,?\s*down\s*)/, /^(?:\)\s*)/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?:\s*~~[\~]+\s*)/, /^(?:\s*[xo<]?--\s*)/, /^(?:\s*[xo<]?==\s*)/, /^(?:\s*[xo<]?-\.\s*)/, /^(?:["][`])/, /^(?:["])/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?::\d+)/],
        conditions: {
          STYLE_DEFINITION: {
            rules: [28],
            inclusive: !1
          },
          STYLE_STMNT: {
            rules: [27],
            inclusive: !1
          },
          CLASSDEFID: {
            rules: [22],
            inclusive: !1
          },
          CLASSDEF: {
            rules: [20, 21],
            inclusive: !1
          },
          CLASS_STYLE: {
            rules: [25],
            inclusive: !1
          },
          CLASS: {
            rules: [24],
            inclusive: !1
          },
          LLABEL: {
            rules: [99, 100, 101, 102, 103],
            inclusive: !1
          },
          ARROW_DIR: {
            rules: [85, 86, 87, 88, 89, 90, 91],
            inclusive: !1
          },
          BLOCK_ARROW: {
            rules: [76, 81, 84],
            inclusive: !1
          },
          NODE: {
            rules: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 77, 80],
            inclusive: !1
          },
          md_string: {
            rules: [9, 10, 78, 79],
            inclusive: !1
          },
          space: {
            rules: [],
            inclusive: !1
          },
          string: {
            rules: [12, 13, 82, 83],
            inclusive: !1
          },
          acc_descr_multiline: {
            rules: [34, 35],
            inclusive: !1
          },
          acc_descr: {
            rules: [32],
            inclusive: !1
          },
          acc_title: {
            rules: [30],
            inclusive: !1
          },
          INITIAL: {
            rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 14, 15, 16, 17, 18, 19, 23, 26, 29, 31, 33, 36, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 92, 93, 94, 95, 96, 97, 98, 104],
            inclusive: !0
          }
        }
      };
      return T;
    } as any)();
  (S as any).lexer = N;
  function _(this: any): any {
    (this as any).yy = {};
  }
  return (u as any)(_, "Parser"), (_ as any).prototype = S, (S as any).Parser = _, new (_ as any)();
} as any)();
(wt as any).parser = wt;
var ar: any = wt,
  U: any = new (Map as any)(),
  Et: any = [],
  mt: any = new (Map as any)(),
  At: string = "color",
  zt: string = "fill",
  sr: string = "bgFill",
  ee: string = ",",
  ct: any = new (Map as any)(),
  _t: any = "",
  ir: any = (u as any)((e: any): any => ((Ve as any).sanitizeText as any)(e, (R as any)()), "sanitizeText"),
  nr: any = (u as any)(function (this: any, e: any, t: any = ""): any {
    let a: any = ((ct as any).get as any)(e);
    a || (a = {
      id: e,
      styles: [],
      textStyles: []
    }, ((ct as any).set as any)(e, a)), t?.split(ee).forEach((s: any): any => {
      const i: any = ((((s as any).replace as any)(/([^;]*);/, "$1") as any).trim as any)();
      if ((((RegExp as any)(At) as any).exec as any)(s)) {
        const r: any = ((((i as any).replace as any)(zt, sr) as any).replace as any)(At, zt);
        (((a as any).textStyles as any).push as any)(r);
      }
      (((a as any).styles as any).push as any)(i);
    });
  }, "addStyleClass"),
  cr: any = (u as any)(function (this: any, e: any, t: any = ""): any {
    const a: any = ((U as any).get as any)(e);
    (t as any) != (null as any) && ((a as any).styles = ((t as any).split as any)(ee));
  }, "addStyle2Node"),
  lr: any = (u as any)(function (this: any, e: any, t: any): any {
    ((((e as any).split as any)(",") as any).forEach as any)(function (this: any, a: any): any {
      let s: any = ((U as any).get as any)(a);
      if ((s as any) === (void 0 as any)) {
        const i: any = ((a as any).trim as any)();
        s = {
          id: i,
          type: "na",
          children: []
        }, ((U as any).set as any)(i, s);
      }
      (s as any).classes || ((s as any).classes = []), (((s as any).classes as any).push as any)(t);
    });
  }, "setCssClass"),
  re: any = (u as any)((e: any, t: any): any => {
    const a: any = ((e as any).flat as any)(),
      s: any = [],
      c: any = ((a as any).find as any)((r: any): any => (r?.type as any) === ("column-setting" as any))?.columns ?? -1;
    for (const r of a) {
      if ((typeof c as any) == ("number" as any) && (c as any) > (0 as any) && ((r as any).type as any) !== ("column-setting" as any) && (typeof (r as any).widthInColumns as any) == ("number" as any) && ((r as any).widthInColumns as any) > (c as any) && ((k as any).warn as any)(`Block ${(r as any).id} width ${(r as any).widthInColumns} exceeds configured column width ${c}`), (r as any).label && ((r as any).label = (ir as any)((r as any).label)), ((r as any).type as any) === ("classDef" as any)) {
        (nr as any)((r as any).id, (r as any).css);
        continue;
      }
      if (((r as any).type as any) === ("applyClass" as any)) {
        (lr as any)((r as any).id, r?.styleClass ?? "");
        continue;
      }
      if (((r as any).type as any) === ("applyStyles" as any)) {
        r?.stylesStr && (cr as any)((r as any).id, r?.stylesStr);
        continue;
      }
      if (((r as any).type as any) === ("column-setting" as any)) (t as any).columns = (r as any).columns ?? -1;else if (((r as any).type as any) === ("edge" as any)) {
        const n: any = ((((mt as any).get as any)((r as any).id) ?? 0) as any) + (1 as any);
        ((mt as any).set as any)((r as any).id, n), (r as any).id = ((n as any) + ("-" as any) as any) + ((r as any).id as any), ((Et as any).push as any)(r);
      } else {
        (r as any).label || (((r as any).type as any) === ("composite" as any) ? (r as any).label = "" : (r as any).label = (r as any).id);
        const n: any = ((U as any).get as any)((r as any).id);
        if ((n as any) === (void 0 as any) ? ((U as any).set as any)((r as any).id, r) : (((r as any).type as any) !== ("na" as any) && ((n as any).type = (r as any).type), ((r as any).label as any) !== ((r as any).id as any) && ((n as any).label = (r as any).label)), (r as any).children && (re as any)((r as any).children, r), ((r as any).type as any) === ("space" as any)) {
          const l: any = (r as any).width ?? 1;
          for (let g: any = 0; (g as any) < (l as any); g++) {
            const h: any = (Qe as any)(r);
            (h as any).id = (((h as any).id as any) + ("-" as any) as any) + (g as any), ((U as any).set as any)((h as any).id, h), ((s as any).push as any)(h);
          }
        } else (n as any) === (void 0 as any) && ((s as any).push as any)(r);
      }
    }
    (t as any).children = s;
  }, "populateBlockDatabase"),
  Tt: any = [],
  et: any = {
    id: "root",
    type: "composite",
    children: [],
    columns: -1
  },
  or: any = (u as any)((): any => {
    ((k as any).debug as any)("Clear called"), (Fe as any)(), et = {
      id: "root",
      type: "composite",
      children: [],
      columns: -1
    }, U = new (Map as any)([["root", et]]), Tt = [], ct = new (Map as any)(), Et = [], mt = new (Map as any)(), _t = "";
  }, "clear");
function ae(this: any, e: any): any {
  switch (((k as any).debug as any)("typeStr2Type", e), e) {
    case "[]":
      return "square";
    case "()":
      return ((k as any).debug as any)("we have a round"), "round";
    case "(())":
      return "circle";
    case ">]":
      return "rect_left_inv_arrow";
    case "{}":
      return "diamond";
    case "{{}}":
      return "hexagon";
    case "([])":
      return "stadium";
    case "[[]]":
      return "subroutine";
    case "[()]":
      return "cylinder";
    case "((()))":
      return "doublecircle";
    case "[//]":
      return "lean_right";
    case "[\\\\]":
      return "lean_left";
    case "[/\\]":
      return "trapezoid";
    case "[\\/]":
      return "inv_trapezoid";
    case "<[]>":
      return "block_arrow";
    default:
      return "na";
  }
}
(u as any)(ae, "typeStr2Type");
function se(this: any, e: any): any {
  return ((k as any).debug as any)("typeStr2Type", e), (e as any) === ("==" as any) ? "thick" : "normal";
}
(u as any)(se, "edgeTypeStr2Type");
function ie(this: any, e: any): any {
  switch (((((e as any).trim as any)() as any).slice as any)(-1)) {
    case "x":
      return "arrow_cross";
    case "o":
      return "arrow_circle";
    case ">":
      return "arrow_point";
    default:
      return "";
  }
}
(u as any)(ie, "edgeStrToEdgeData");
function ne(this: any, e: any): any {
  switch (((((e as any).trim as any)() as any).charAt as any)(0)) {
    case "x":
      return "arrow_cross";
    case "o":
      return "arrow_circle";
    case "<":
      return "arrow_point";
    default:
      return "arrow_open";
  }
}
(u as any)(ne, "edgeStrToEdgeStartData");
function ce(this: any, e: any): any {
  return ((e as any).includes as any)("==") ? "thick" : "normal";
}
(u as any)(ce, "edgeStrToThickness");
function le(this: any, e: any): any {
  return ((e as any).includes as any)(".-") ? "dotted" : "solid";
}
(u as any)(le, "edgeStrToPattern");
var Mt: any = 0,
  hr: any = (u as any)((): any => (Mt++, ((("id-" as any) + (((((((Math as any).random as any)() as any).toString as any)(36) as any).substr as any)(2, 12) as any) as any) + ("-" as any) as any) + (Mt as any)), "generateId"),
  gr: any = (u as any)((e: any): any => {
    (et as any).children = e, (re as any)(e, et), Tt = (et as any).children;
  }, "setHierarchy"),
  ur: any = (u as any)((e: any): any => {
    const t: any = ((U as any).get as any)(e);
    return t ? (t as any).columns ? (t as any).columns : (t as any).children ? ((t as any).children as any).length : -1 : -1;
  }, "getColumns"),
  dr: any = (u as any)((): any => [...((U as any).values as any)()], "getBlocksFlat"),
  pr: any = (u as any)((): any => Tt || [], "getBlocks"),
  fr: any = (u as any)((): any => Et, "getEdges"),
  xr: any = (u as any)((e: any): any => ((U as any).get as any)(e), "getBlock"),
  yr: any = (u as any)((e: any): any => {
    ((U as any).set as any)((e as any).id, e);
  }, "setBlock"),
  br: any = (u as any)((e: any): any => {
    _t = e;
  }, "setDiagramId"),
  wr: any = (u as any)((): any => _t, "getDiagramId"),
  mr: any = (u as any)((): any => k, "getLogger"),
  Sr: any = (u as any)(function (this: any): any {
    return ct;
  }, "getClasses"),
  Lr: any = {
    getConfig: (u as any)((): any => ((rt as any)() as any).block, "getConfig"),
    typeStr2Type: ae,
    edgeTypeStr2Type: se,
    edgeStrToEdgeData: ie,
    edgeStrToEdgeStartData: ne,
    edgeStrToThickness: ce,
    edgeStrToPattern: le,
    getLogger: mr,
    getBlocksFlat: dr,
    getBlocks: pr,
    getEdges: fr,
    setHierarchy: gr,
    getBlock: xr,
    setBlock: yr,
    getColumns: ur,
    getClasses: Sr,
    clear: or,
    generateId: hr,
    setDiagramId: br,
    getDiagramId: wr
  },
  kr: any = Lr,
  yt: any = (u as any)((e: any, t: any): any => {
    const a: any = qe,
      s: any = (a as any)(e, "r"),
      i: any = (a as any)(e, "g"),
      c: any = (a as any)(e, "b");
    return (We as any)(s, i, c, t);
  }, "fade"),
  vr: any = (u as any)((e: any): any => `.label {
    font-family: ${(e as any).fontFamily};
    color: ${(e as any).nodeTextColor || (e as any).textColor};
  }
  .cluster-label text {
    fill: ${(e as any).titleColor};
  }
  .cluster-label span,p {
    color: ${(e as any).titleColor};
  }



  .label text,span,p {
    fill: ${(e as any).nodeTextColor || (e as any).textColor};
    color: ${(e as any).nodeTextColor || (e as any).textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${(e as any).mainBkg};
    stroke: ${(e as any).nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${(e as any).arrowheadColor};
  }

  .edgePath .path {
    stroke: ${(e as any).lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${(e as any).lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${(e as any).edgeLabelBackground};
    /*
     * This is for backward compatibility with existing code that didn't
     * add a \`<p>\` around edge labels.
     *
     * TODO: We should probably remove this in a future release.
     */
    p {
      margin: 0;
      padding: 0;
      display: inline;
    }
    rect {
      opacity: 0.5;
      background-color: ${(e as any).edgeLabelBackground};
      fill: ${(e as any).edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${(e as any).edgeLabelBackground};
  }

  .node .cluster {
    // fill: ${(yt as any)((e as any).mainBkg, .5)};
    fill: ${(yt as any)((e as any).clusterBkg, .5)};
    stroke: ${(yt as any)((e as any).clusterBorder, .2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${(e as any).titleColor};
  }

  .cluster span,p {
    color: ${(e as any).titleColor};
  }
  /* .cluster div {
    color: ${(e as any).titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${(e as any).fontFamily};
    font-size: 12px;
    background: ${(e as any).tertiaryColor};
    border: 1px solid ${(e as any).border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${(e as any).textColor};
  }
  ${(ve as any)()}
`, "getStyles"),
  Er: any = vr,
  _r: any = (u as any)((e: any, t: any, a: any, s: any): any => {
    ((t as any).forEach as any)((i: any): any => {
      ((zr as any)[i] as any)(e, a, s);
    });
  }, "insertMarkers"),
  Tr: any = (u as any)((e: any, t: any, a: any): any => {
    ((k as any).trace as any)("Making markers for ", a), ((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (((a as any) + ("_" as any) as any) + (t as any) as any) + ("-extensionStart" as any)) as any).attr as any)("class", ("marker extension " as any) + (t as any)) as any).attr as any)("refX", 18) as any).attr as any)("refY", 7) as any).attr as any)("markerWidth", 190) as any).attr as any)("markerHeight", 240) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 1,7 L18,13 V 1 Z"), ((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (((a as any) + ("_" as any) as any) + (t as any) as any) + ("-extensionEnd" as any)) as any).attr as any)("class", ("marker extension " as any) + (t as any)) as any).attr as any)("refX", 1) as any).attr as any)("refY", 7) as any).attr as any)("markerWidth", 20) as any).attr as any)("markerHeight", 28) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 1,1 V 13 L18,7 Z");
  }, "extension"),
  Dr: any = (u as any)((e: any, t: any, a: any): any => {
    ((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (((a as any) + ("_" as any) as any) + (t as any) as any) + ("-compositionStart" as any)) as any).attr as any)("class", ("marker composition " as any) + (t as any)) as any).attr as any)("refX", 18) as any).attr as any)("refY", 7) as any).attr as any)("markerWidth", 190) as any).attr as any)("markerHeight", 240) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 18,7 L9,13 L1,7 L9,1 Z"), ((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (((a as any) + ("_" as any) as any) + (t as any) as any) + ("-compositionEnd" as any)) as any).attr as any)("class", ("marker composition " as any) + (t as any)) as any).attr as any)("refX", 1) as any).attr as any)("refY", 7) as any).attr as any)("markerWidth", 20) as any).attr as any)("markerHeight", 28) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  }, "composition"),
  Br: any = (u as any)((e: any, t: any, a: any): any => {
    ((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (((a as any) + ("_" as any) as any) + (t as any) as any) + ("-aggregationStart" as any)) as any).attr as any)("class", ("marker aggregation " as any) + (t as any)) as any).attr as any)("refX", 18) as any).attr as any)("refY", 7) as any).attr as any)("markerWidth", 190) as any).attr as any)("markerHeight", 240) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 18,7 L9,13 L1,7 L9,1 Z"), ((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (((a as any) + ("_" as any) as any) + (t as any) as any) + ("-aggregationEnd" as any)) as any).attr as any)("class", ("marker aggregation " as any) + (t as any)) as any).attr as any)("refX", 1) as any).attr as any)("refY", 7) as any).attr as any)("markerWidth", 20) as any).attr as any)("markerHeight", 28) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  }, "aggregation"),
  Nr: any = (u as any)((e: any, t: any, a: any): any => {
    ((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (((a as any) + ("_" as any) as any) + (t as any) as any) + ("-dependencyStart" as any)) as any).attr as any)("class", ("marker dependency " as any) + (t as any)) as any).attr as any)("refX", 6) as any).attr as any)("refY", 7) as any).attr as any)("markerWidth", 190) as any).attr as any)("markerHeight", 240) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 5,7 L9,13 L1,7 L9,1 Z"), ((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (((a as any) + ("_" as any) as any) + (t as any) as any) + ("-dependencyEnd" as any)) as any).attr as any)("class", ("marker dependency " as any) + (t as any)) as any).attr as any)("refX", 13) as any).attr as any)("refY", 7) as any).attr as any)("markerWidth", 20) as any).attr as any)("markerHeight", 28) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 18,7 L9,13 L14,7 L9,1 Z");
  }, "dependency"),
  Ir: any = (u as any)((e: any, t: any, a: any): any => {
    ((((((((((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (((a as any) + ("_" as any) as any) + (t as any) as any) + ("-lollipopStart" as any)) as any).attr as any)("class", ("marker lollipop " as any) + (t as any)) as any).attr as any)("refX", 13) as any).attr as any)("refY", 7) as any).attr as any)("markerWidth", 190) as any).attr as any)("markerHeight", 240) as any).attr as any)("orient", "auto") as any).append as any)("circle") as any).attr as any)("stroke", "black") as any).attr as any)("fill", "transparent") as any).attr as any)("cx", 7) as any).attr as any)("cy", 7) as any).attr as any)("r", 6), ((((((((((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (((a as any) + ("_" as any) as any) + (t as any) as any) + ("-lollipopEnd" as any)) as any).attr as any)("class", ("marker lollipop " as any) + (t as any)) as any).attr as any)("refX", 1) as any).attr as any)("refY", 7) as any).attr as any)("markerWidth", 190) as any).attr as any)("markerHeight", 240) as any).attr as any)("orient", "auto") as any).append as any)("circle") as any).attr as any)("stroke", "black") as any).attr as any)("fill", "transparent") as any).attr as any)("cx", 7) as any).attr as any)("cy", 7) as any).attr as any)("r", 6);
  }, "lollipop"),
  Cr: any = (u as any)((e: any, t: any, a: any): any => {
    ((((((((((((((((((((((((((((((e as any).append as any)("marker") as any).attr as any)("id", (((a as any) + ("_" as any) as any) + (t as any) as any) + ("-pointEnd" as any)) as any).attr as any)("class", ("marker " as any) + (t as any)) as any).attr as any)("viewBox", "0 0 10 10") as any).attr as any)("refX", 6) as any).attr as any)("refY", 5) as any).attr as any)("markerUnits", "userSpaceOnUse") as any).attr as any)("markerWidth", 12) as any).attr as any)("markerHeight", 12) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 0 0 L 10 5 L 0 10 z") as any).attr as any)("class", "arrowMarkerPath") as any).style as any)("stroke-width", 1) as any).style as any)("stroke-dasharray", "1,0"), ((((((((((((((((((((((((((((((e as any).append as any)("marker") as any).attr as any)("id", (((a as any) + ("_" as any) as any) + (t as any) as any) + ("-pointStart" as any)) as any).attr as any)("class", ("marker " as any) + (t as any)) as any).attr as any)("viewBox", "0 0 10 10") as any).attr as any)("refX", 4.5) as any).attr as any)("refY", 5) as any).attr as any)("markerUnits", "userSpaceOnUse") as any).attr as any)("markerWidth", 12) as any).attr as any)("markerHeight", 12) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 0 5 L 10 10 L 10 0 z") as any).attr as any)("class", "arrowMarkerPath") as any).style as any)("stroke-width", 1) as any).style as any)("stroke-dasharray", "1,0");
  }, "point"),
  Or: any = (u as any)((e: any, t: any, a: any): any => {
    ((((((((((((((((((((((((((((((((((e as any).append as any)("marker") as any).attr as any)("id", (((a as any) + ("_" as any) as any) + (t as any) as any) + ("-circleEnd" as any)) as any).attr as any)("class", ("marker " as any) + (t as any)) as any).attr as any)("viewBox", "0 0 10 10") as any).attr as any)("refX", 11) as any).attr as any)("refY", 5) as any).attr as any)("markerUnits", "userSpaceOnUse") as any).attr as any)("markerWidth", 11) as any).attr as any)("markerHeight", 11) as any).attr as any)("orient", "auto") as any).append as any)("circle") as any).attr as any)("cx", "5") as any).attr as any)("cy", "5") as any).attr as any)("r", "5") as any).attr as any)("class", "arrowMarkerPath") as any).style as any)("stroke-width", 1) as any).style as any)("stroke-dasharray", "1,0"), ((((((((((((((((((((((((((((((((((e as any).append as any)("marker") as any).attr as any)("id", (((a as any) + ("_" as any) as any) + (t as any) as any) + ("-circleStart" as any)) as any).attr as any)("class", ("marker " as any) + (t as any)) as any).attr as any)("viewBox", "0 0 10 10") as any).attr as any)("refX", -1) as any).attr as any)("refY", 5) as any).attr as any)("markerUnits", "userSpaceOnUse") as any).attr as any)("markerWidth", 11) as any).attr as any)("markerHeight", 11) as any).attr as any)("orient", "auto") as any).append as any)("circle") as any).attr as any)("cx", "5") as any).attr as any)("cy", "5") as any).attr as any)("r", "5") as any).attr as any)("class", "arrowMarkerPath") as any).style as any)("stroke-width", 1) as any).style as any)("stroke-dasharray", "1,0");
  }, "circle"),
  Rr: any = (u as any)((e: any, t: any, a: any): any => {
    ((((((((((((((((((((((((((((((e as any).append as any)("marker") as any).attr as any)("id", (((a as any) + ("_" as any) as any) + (t as any) as any) + ("-crossEnd" as any)) as any).attr as any)("class", ("marker cross " as any) + (t as any)) as any).attr as any)("viewBox", "0 0 11 11") as any).attr as any)("refX", 12) as any).attr as any)("refY", 5.2) as any).attr as any)("markerUnits", "userSpaceOnUse") as any).attr as any)("markerWidth", 11) as any).attr as any)("markerHeight", 11) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 1,1 l 9,9 M 10,1 l -9,9") as any).attr as any)("class", "arrowMarkerPath") as any).style as any)("stroke-width", 2) as any).style as any)("stroke-dasharray", "1,0"), ((((((((((((((((((((((((((((((e as any).append as any)("marker") as any).attr as any)("id", (((a as any) + ("_" as any) as any) + (t as any) as any) + ("-crossStart" as any)) as any).attr as any)("class", ("marker cross " as any) + (t as any)) as any).attr as any)("viewBox", "0 0 11 11") as any).attr as any)("refX", -1) as any).attr as any)("refY", 5.2) as any).attr as any)("markerUnits", "userSpaceOnUse") as any).attr as any)("markerWidth", 11) as any).attr as any)("markerHeight", 11) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 1,1 l 9,9 M 10,1 l -9,9") as any).attr as any)("class", "arrowMarkerPath") as any).style as any)("stroke-width", 2) as any).style as any)("stroke-dasharray", "1,0");
  }, "cross"),
  Ar: any = (u as any)((e: any, t: any, a: any): any => {
    ((((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (((a as any) + ("_" as any) as any) + (t as any) as any) + ("-barbEnd" as any)) as any).attr as any)("refX", 19) as any).attr as any)("refY", 7) as any).attr as any)("markerWidth", 20) as any).attr as any)("markerHeight", 14) as any).attr as any)("markerUnits", "strokeWidth") as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 19,7 L9,13 L14,7 L9,1 Z");
  }, "barb"),
  zr: any = {
    extension: Tr,
    composition: Dr,
    aggregation: Br,
    dependency: Nr,
    lollipop: Ir,
    point: Cr,
    circle: Or,
    cross: Rr,
    barb: Ar
  },
  Mr: any = _r;
function St(this: any, e: any, t: any): any {
  if ((e as any) === (0 as any) || !((Number as any).isInteger as any)(e)) throw new (Error as any)("Columns must be an integer !== 0.");
  if ((t as any) < (0 as any) || !((Number as any).isInteger as any)(t)) throw new (Error as any)(("Position must be a non-negative integer." as any) + (t as any));
  if ((e as any) < (0 as any)) return {
    px: t,
    py: 0
  };
  if ((e as any) === (1 as any)) return {
    px: 0,
    py: t
  };
  const a: any = (t as any) % (e as any),
    s: any = ((Math as any).floor as any)((t as any) / (e as any));
  return {
    px: a,
    py: s
  };
}
(u as any)(St, "calculateBlockPosition");
var Pr: any = (u as any)((e: any): any => {
  let t: any = 0,
    a: any = 0;
  for (const s of (e as any).children) {
    const {
      width: i,
      height: c,
      x: r,
      y: n
    }: any = (s as any).size ?? {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    };
    if (((k as any).debug as any)("getMaxChildSize abc95 child:", (s as any).id, "width:", i, "height:", c, "x:", r, "y:", n, (s as any).type), ((s as any).type as any) === ("space" as any)) continue;
    const l: any = (i as any) / (((s as any).widthInColumns ?? 1) as any);
    (l as any) > (t as any) && (t = l), (c as any) > (a as any) && (a = c);
  }
  return {
    width: t,
    height: a
  };
}, "getMaxChildSize");
function lt(this: any, e: any, t: any, a: any = 0, s: any = 0, i: any = 8): any {
  ((k as any).debug as any)("setBlockSizes abc95 (start)", (e as any).id, e?.size?.x, "block width =", e?.size, "siblingWidth", a), e?.size?.width || ((e as any).size = {
    width: a,
    height: s,
    x: 0,
    y: 0
  });
  let c: any = 0,
    r: any = 0;
  if (((e as any).children?.length as any) > (0 as any)) {
    for (const y of (e as any).children) (lt as any)(y, t, 0, 0, i);
    const n: any = (Pr as any)(e);
    c = (n as any).width, r = (n as any).height, ((k as any).debug as any)("setBlockSizes abc95 maxWidth of", (e as any).id, ":s children is ", c, r);
    for (const y of (e as any).children) (y as any).size && (((k as any).debug as any)(`abc95 Setting size of children of ${(e as any).id} id=${(y as any).id} ${c} ${r} ${((JSON as any).stringify as any)((y as any).size)}`), ((y as any).size as any).width = ((c as any) * (((y as any).widthInColumns ?? 1) as any) as any) + ((i as any) * ((((y as any).widthInColumns ?? 1) as any) - (1 as any) as any) as any), ((y as any).size as any).height = r, ((y as any).size as any).x = 0, ((y as any).size as any).y = 0, ((k as any).debug as any)(`abc95 updating size of ${(e as any).id} children child:${(y as any).id} maxWidth:${c} maxHeight:${r}`));
    for (const y of (e as any).children) (lt as any)(y, t, c, r, i);
    const l: any = (e as any).columns ?? -1;
    let g: any = 0;
    for (const y of (e as any).children) g += (y as any).widthInColumns ?? 1;
    let h: any = ((e as any).children as any).length;
    (l as any) > (0 as any) && (l as any) < (g as any) && (h = l);
    const d: any = ((Math as any).ceil as any)((g as any) / (h as any));
    let b: any = ((h as any) * ((c as any) + (i as any) as any) as any) + (i as any),
      w: any = ((d as any) * ((r as any) + (i as any) as any) as any) + (i as any);
    if ((b as any) < (a as any)) {
      ((k as any).debug as any)(`Detected to small sibling: abc95 ${(e as any).id} siblingWidth ${a} siblingHeight ${s} width ${b}`), b = a, w = s;
      const y: any = (((a as any) - ((h as any) * (i as any) as any) as any) - (i as any) as any) / (h as any),
        v: any = (((s as any) - ((d as any) * (i as any) as any) as any) - (i as any) as any) / (d as any);
      ((k as any).debug as any)("Size indata abc88", (e as any).id, "childWidth", y, "maxWidth", c), ((k as any).debug as any)("Size indata abc88", (e as any).id, "childHeight", v, "maxHeight", r), ((k as any).debug as any)("Size indata abc88 xSize", h, "padding", i);
      for (const S of (e as any).children) (S as any).size && (((S as any).size as any).width = y, ((S as any).size as any).height = v, ((S as any).size as any).x = 0, ((S as any).size as any).y = 0);
    }
    if (((k as any).debug as any)(`abc95 (finale calc) ${(e as any).id} xSize ${h} ySize ${d} columns ${l}${((e as any).children as any).length} width=${((Math as any).max as any)(b, (e as any).size?.width || 0)}`), (b as any) < ((e?.size?.width || 0) as any)) {
      b = e?.size?.width || 0;
      const y: any = (l as any) > (0 as any) ? ((Math as any).min as any)(((e as any).children as any).length, l) : ((e as any).children as any).length;
      if ((y as any) > (0 as any)) {
        const v: any = (((b as any) - ((y as any) * (i as any) as any) as any) - (i as any) as any) / (y as any);
        ((k as any).debug as any)("abc95 (growing to fit) width", (e as any).id, b, (e as any).size?.width, v);
        for (const S of (e as any).children) (S as any).size && (((S as any).size as any).width = v);
      }
    }
    (e as any).size = {
      width: b,
      height: w,
      x: 0,
      y: 0
    };
  }
  ((k as any).debug as any)("setBlockSizes abc94 (done)", (e as any).id, e?.size?.x, e?.size?.width, e?.size?.y, e?.size?.height);
}
(u as any)(lt, "setBlockSizes");
function Dt(this: any, e: any, t: any, a: any = 8): any {
  ((k as any).debug as any)(`abc85 layout blocks (=>layoutBlocks) ${(e as any).id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`);
  const s: any = (e as any).columns ?? -1;
  if (((k as any).debug as any)("layoutBlocks columns abc95", (e as any).id, "=>", s, e), (e as any).children && (((e as any).children as any).length as any) > (0 as any)) {
    const i: any = e?.children[0]?.size?.width ?? 0,
      c: any = ((((e as any).children as any).length as any) * (i as any) as any) + (((((e as any).children as any).length as any) - (1 as any) as any) * (a as any) as any);
    ((k as any).debug as any)("widthOfChildren 88", c, "posX");
    const r: any = new (Map as any)();
    {
      let d: any = 0;
      for (const b of (e as any).children) {
        if (!(b as any).size) continue;
        const {
            py: w
          }: any = (St as any)(s, d),
          y: any = ((r as any).get as any)(w) ?? 0;
        (((b as any).size as any).height as any) > (y as any) && ((r as any).set as any)(w, ((b as any).size as any).height);
        let v: any = b?.widthInColumns ?? 1;
        (s as any) > (0 as any) && (v = ((Math as any).min as any)(v, (s as any) - ((d as any) % (s as any) as any))), d += v;
      }
    }
    const n: any = new (Map as any)();
    {
      let d: any = 0;
      const b: any = (([...((r as any).keys as any)()] as any).sort as any)((w: any, y: any): any => (w as any) - (y as any));
      for (const w of b) ((n as any).set as any)(w, d), d += ((((r as any).get as any)(w) ?? 0) as any) + (a as any);
    }
    let l: any = 0;
    ((k as any).debug as any)("abc91 block?.size?.x", (e as any).id, e?.size?.x);
    let g: any = e?.size?.x ? (e?.size?.x as any) + (((-e?.size?.width as any) / (2 as any) || 0) as any) : -a,
      h: any = 0;
    for (const d of (e as any).children) {
      const b: any = e;
      if (!(d as any).size) continue;
      const {
          width: w,
          height: y
        }: any = (d as any).size,
        {
          px: v,
          py: S
        }: any = (St as any)(s, l);
      if ((S as any) != (h as any) && (h = S, g = e?.size?.x ? (e?.size?.x as any) + (((-e?.size?.width as any) / (2 as any) || 0) as any) : -a, ((k as any).debug as any)("New row in layout for block", (e as any).id, " and child ", (d as any).id, h)), ((k as any).debug as any)(`abc89 layout blocks (child) id: ${(d as any).id} Pos: ${l} (px, py) ${v},${S} (${b?.size?.x},${b?.size?.y}) parent: ${(b as any).id} width: ${w}${a}`), (b as any).size) {
        const _: any = (w as any) / (2 as any);
        ((d as any).size as any).x = ((g as any) + (a as any) as any) + (_ as any), ((k as any).debug as any)(`abc91 layout blocks (calc) px, pyid:${(d as any).id} startingPos=X${g} new startingPosX${((d as any).size as any).x} ${_} padding=${a} width=${w} halfWidth=${_} => x:${((d as any).size as any).x} y:${((d as any).size as any).y} ${(d as any).widthInColumns} (width * (child?.w || 1)) / 2 ${((w as any) * ((d?.widthInColumns ?? 1) as any) as any) / (2 as any)}`), g = (((d as any).size as any).x as any) + (_ as any);
        const T: any = ((n as any).get as any)(S) ?? 0,
          m: any = ((r as any).get as any)(S) ?? y;
        ((d as any).size as any).y = ((((((b as any).size as any).y as any) - ((((b as any).size as any).height as any) / (2 as any) as any) as any) + (T as any) as any) + ((m as any) / (2 as any) as any) as any) + (a as any), ((k as any).debug as any)(`abc88 layout blocks (calc) px, pyid:${(d as any).id}startingPosX${g}${a}${_}=>x:${((d as any).size as any).x}y:${((d as any).size as any).y}${(d as any).widthInColumns}(width * (child?.w || 1)) / 2${((w as any) * ((d?.widthInColumns ?? 1) as any) as any) / (2 as any)}`);
      }
      (d as any).children && (Dt as any)(d, t, a);
      let N: any = d?.widthInColumns ?? 1;
      (s as any) > (0 as any) && (N = ((Math as any).min as any)(N, (s as any) - ((l as any) % (s as any) as any))), l += N, ((k as any).debug as any)("abc88 columnsPos", d, l);
    }
  }
  ((k as any).debug as any)(`layout blocks (<==layoutBlocks) ${(e as any).id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`);
}
(u as any)(Dt, "layoutBlocks");
function Bt(this: any, e: any, {
  minX: t,
  minY: a,
  maxX: s,
  maxY: i
}: any = {
  minX: 0,
  minY: 0,
  maxX: 0,
  maxY: 0
}): any {
  if ((e as any).size && ((e as any).id as any) !== ("root" as any)) {
    const {
      x: c,
      y: r,
      width: n,
      height: l
    }: any = (e as any).size;
    ((c as any) - ((n as any) / (2 as any) as any) as any) < (t as any) && (t = (c as any) - ((n as any) / (2 as any) as any)), ((r as any) - ((l as any) / (2 as any) as any) as any) < (a as any) && (a = (r as any) - ((l as any) / (2 as any) as any)), ((c as any) + ((n as any) / (2 as any) as any) as any) > (s as any) && (s = (c as any) + ((n as any) / (2 as any) as any)), ((r as any) + ((l as any) / (2 as any) as any) as any) > (i as any) && (i = (r as any) + ((l as any) / (2 as any) as any));
  }
  if ((e as any).children) for (const c of (e as any).children) ({
    minX: t,
    minY: a,
    maxX: s,
    maxY: i
  } = (Bt as any)(c, {
    minX: t,
    minY: a,
    maxX: s,
    maxY: i
  }));
  return {
    minX: t,
    minY: a,
    maxX: s,
    maxY: i
  };
}
(u as any)(Bt, "findBounds");
function oe(this: any, e: any): any {
  const t: any = ((e as any).getBlock as any)("root");
  if (!t) return;
  const a: any = (R as any)()?.block?.padding ?? 8;
  (lt as any)(t, e, 0, 0, a), (Dt as any)(t, e, a), ((k as any).debug as any)("getBlocks", ((JSON as any).stringify as any)(t, null, 2));
  const {
      minX: s,
      minY: i,
      maxX: c,
      maxY: r
    }: any = (Bt as any)(t),
    n: any = (r as any) - (i as any),
    l: any = (c as any) - (s as any);
  return {
    x: s,
    y: i,
    width: l,
    height: n
  };
}
(u as any)(oe, "layout");
var Fr: any = (u as any)(async (e: any, t: any, a: any, s: any = !1, i: any = !1): Promise<any> => {
    let c: any = t || "";
    (typeof c as any) == ("object" as any) && (c = (c as any)[0]);
    const r: any = (R as any)(),
      n: any = (M as any)(r);
    return await (vt as any)(e, c, {
      style: a,
      isTitle: s,
      useHtmlLabels: n,
      markdown: !1,
      isNode: i,
      width: (Number as any).POSITIVE_INFINITY
    }, r);
  }, "createLabel"),
  K: any = Fr,
  Wr: any = (u as any)((e: any, t: any, a: any, s: any, i: any): any => {
    (t as any).arrowTypeStart && (Pt as any)(e, "start", (t as any).arrowTypeStart, a, s, i), (t as any).arrowTypeEnd && (Pt as any)(e, "end", (t as any).arrowTypeEnd, a, s, i);
  }, "addEdgeMarkers"),
  Yr: any = {
    arrow_cross: "cross",
    arrow_point: "point",
    arrow_barb: "barb",
    arrow_circle: "circle",
    aggregation: "aggregation",
    extension: "extension",
    composition: "composition",
    dependency: "dependency",
    lollipop: "lollipop"
  },
  Pt: any = (u as any)((e: any, t: any, a: any, s: any, i: any, c: any): any => {
    const r: any = (Yr as any)[a];
    if (!r) {
      ((k as any).warn as any)(`Unknown arrow type: ${a}`);
      return;
    }
    const n: any = (t as any) === ("start" as any) ? "Start" : "End";
    ((e as any).attr as any)(`marker-${t}`, `url(${s}#${i}_${c}-${r}${n})`);
  }, "addEdgeMarker"),
  Lt: any = {},
  z: any = {},
  Hr: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const a: any = (R as any)(),
      s: any = (M as any)(a),
      i: any = ((((e as any).insert as any)("g") as any).attr as any)("class", "edgeLabel"),
      c: any = ((((i as any).insert as any)("g") as any).attr as any)("class", "label"),
      r: any = ((t as any).labelType as any) === ("markdown" as any),
      n: any = await (vt as any)(e, (t as any).label, {
        style: (t as any).labelStyle,
        useHtmlLabels: s,
        addSvgBackground: r,
        isNode: !1,
        markdown: r,
        width: r ? void 0 : (Number as any).POSITIVE_INFINITY
      }, a);
    ((((c as any).node as any)() as any).appendChild as any)(n);
    let l: any = ((n as any).getBBox as any)(),
      g: any = l;
    if (s) {
      const d: any = ((n as any).children as any)[0],
        b: any = (D as any)(n);
      l = ((d as any).getBoundingClientRect as any)(), g = l, ((b as any).attr as any)("width", (l as any).width), ((b as any).attr as any)("height", (l as any).height);
    } else {
      const d: any = (((((D as any)(n) as any).select as any)("text") as any).node as any)();
      d && (typeof (d as any).getBBox as any) == ("function" as any) && (g = ((d as any).getBBox as any)());
    }
    ((c as any).attr as any)("transform", (Q as any)(g, s)), (Lt as any)[(t as any).id] = i, (t as any).width = (l as any).width, (t as any).height = (l as any).height;
    let h: any;
    if ((t as any).startLabelLeft) {
      const d: any = ((((e as any).insert as any)("g") as any).attr as any)("class", "edgeTerminals"),
        b: any = ((((d as any).insert as any)("g") as any).attr as any)("class", "inner"),
        w: any = await (K as any)(b, (t as any).startLabelLeft, (t as any).labelStyle);
      h = w;
      let y: any = ((w as any).getBBox as any)();
      if (s) {
        const v: any = ((w as any).children as any)[0],
          S: any = (D as any)(w);
        y = ((v as any).getBoundingClientRect as any)(), ((S as any).attr as any)("width", (y as any).width), ((S as any).attr as any)("height", (y as any).height);
      }
      ((b as any).attr as any)("transform", (Q as any)(y, s)), (z as any)[(t as any).id] || ((z as any)[(t as any).id] = {}), ((z as any)[(t as any).id] as any).startLeft = d, (tt as any)(h, (t as any).startLabelLeft);
    }
    if ((t as any).startLabelRight) {
      const d: any = ((((e as any).insert as any)("g") as any).attr as any)("class", "edgeTerminals"),
        b: any = ((((d as any).insert as any)("g") as any).attr as any)("class", "inner"),
        w: any = await (K as any)(b, (t as any).startLabelRight, (t as any).labelStyle);
      h = w;
      let y: any = ((w as any).getBBox as any)();
      if (s) {
        const v: any = ((w as any).children as any)[0],
          S: any = (D as any)(w);
        y = ((v as any).getBoundingClientRect as any)(), ((S as any).attr as any)("width", (y as any).width), ((S as any).attr as any)("height", (y as any).height);
      }
      ((b as any).attr as any)("transform", (Q as any)(y, s)), (z as any)[(t as any).id] || ((z as any)[(t as any).id] = {}), ((z as any)[(t as any).id] as any).startRight = d, (tt as any)(h, (t as any).startLabelRight);
    }
    if ((t as any).endLabelLeft) {
      const d: any = ((((e as any).insert as any)("g") as any).attr as any)("class", "edgeTerminals"),
        b: any = ((((d as any).insert as any)("g") as any).attr as any)("class", "inner"),
        w: any = await (K as any)(d, (t as any).endLabelLeft, (t as any).labelStyle);
      h = w;
      let y: any = ((w as any).getBBox as any)();
      if (s) {
        const v: any = ((w as any).children as any)[0],
          S: any = (D as any)(w);
        y = ((v as any).getBoundingClientRect as any)(), ((S as any).attr as any)("width", (y as any).width), ((S as any).attr as any)("height", (y as any).height);
      }
      ((b as any).attr as any)("transform", (Q as any)(y, s)), (z as any)[(t as any).id] || ((z as any)[(t as any).id] = {}), ((z as any)[(t as any).id] as any).endLeft = d, (tt as any)(h, (t as any).endLabelLeft);
    }
    if ((t as any).endLabelRight) {
      const d: any = ((((e as any).insert as any)("g") as any).attr as any)("class", "edgeTerminals"),
        b: any = ((((d as any).insert as any)("g") as any).attr as any)("class", "inner"),
        w: any = await (K as any)(d, (t as any).endLabelRight, (t as any).labelStyle);
      h = w;
      let y: any = ((w as any).getBBox as any)();
      if (s) {
        const v: any = ((w as any).children as any)[0],
          S: any = (D as any)(w);
        y = ((v as any).getBoundingClientRect as any)(), ((S as any).attr as any)("width", (y as any).width), ((S as any).attr as any)("height", (y as any).height);
      }
      ((b as any).attr as any)("transform", (Q as any)(y, s)), (z as any)[(t as any).id] || ((z as any)[(t as any).id] = {}), ((z as any)[(t as any).id] as any).endRight = d, (tt as any)(h, (t as any).endLabelRight);
    }
    return n;
  }, "insertEdgeLabel");
function tt(this: any, e: any, t: any): any {
  (M as any)((R as any)()) && e && (((e as any).style as any).width = (((t as any).length as any) * (9 as any) as any) + ("px" as any), ((e as any).style as any).height = "12px");
}
(u as any)(tt, "setTerminalWidth");
var Kr: any = (u as any)((e: any, t: any): any => {
    ((k as any).debug as any)("Moving label abc88 ", (e as any).id, (e as any).label, (Lt as any)[(e as any).id], t);
    let a: any = (t as any).updatedPath ? (t as any).updatedPath : (t as any).originalPath;
    const s: any = (R as any)(),
      {
        subGraphTitleTotalMargin: i
      }: any = (Xe as any)(s);
    if ((e as any).label) {
      const c: any = (Lt as any)[(e as any).id];
      let r: any = (e as any).x,
        n: any = (e as any).y;
      if (a) {
        const l: any = (($ as any).calcLabelPosition as any)(a);
        ((k as any).debug as any)((("Moving label " as any) + ((e as any).label as any) as any) + (" from (" as any), r, ",", n, ") to (", (l as any).x, ",", (l as any).y, ") abc88"), (t as any).updatedPath && (r = (l as any).x, n = (l as any).y);
      }
      ((c as any).attr as any)("transform", `translate(${r}, ${(n as any) + ((i as any) / (2 as any) as any)})`);
    }
    if ((e as any).startLabelLeft) {
      const c: any = ((z as any)[(e as any).id] as any).startLeft;
      let r: any = (e as any).x,
        n: any = (e as any).y;
      if (a) {
        const l: any = (($ as any).calcTerminalLabelPosition as any)((e as any).arrowTypeStart ? 10 : 0, "start_left", a);
        r = (l as any).x, n = (l as any).y;
      }
      ((c as any).attr as any)("transform", `translate(${r}, ${n})`);
    }
    if ((e as any).startLabelRight) {
      const c: any = ((z as any)[(e as any).id] as any).startRight;
      let r: any = (e as any).x,
        n: any = (e as any).y;
      if (a) {
        const l: any = (($ as any).calcTerminalLabelPosition as any)((e as any).arrowTypeStart ? 10 : 0, "start_right", a);
        r = (l as any).x, n = (l as any).y;
      }
      ((c as any).attr as any)("transform", `translate(${r}, ${n})`);
    }
    if ((e as any).endLabelLeft) {
      const c: any = ((z as any)[(e as any).id] as any).endLeft;
      let r: any = (e as any).x,
        n: any = (e as any).y;
      if (a) {
        const l: any = (($ as any).calcTerminalLabelPosition as any)((e as any).arrowTypeEnd ? 10 : 0, "end_left", a);
        r = (l as any).x, n = (l as any).y;
      }
      ((c as any).attr as any)("transform", `translate(${r}, ${n})`);
    }
    if ((e as any).endLabelRight) {
      const c: any = ((z as any)[(e as any).id] as any).endRight;
      let r: any = (e as any).x,
        n: any = (e as any).y;
      if (a) {
        const l: any = (($ as any).calcTerminalLabelPosition as any)((e as any).arrowTypeEnd ? 10 : 0, "end_right", a);
        r = (l as any).x, n = (l as any).y;
      }
      ((c as any).attr as any)("transform", `translate(${r}, ${n})`);
    }
  }, "positionEdgeLabel"),
  Ur: any = (u as any)((e: any, t: any): any => {
    const a: any = (e as any).x,
      s: any = (e as any).y,
      i: any = ((Math as any).abs as any)(((t as any).x as any) - (a as any)),
      c: any = ((Math as any).abs as any)(((t as any).y as any) - (s as any)),
      r: any = ((e as any).width as any) / (2 as any),
      n: any = ((e as any).height as any) / (2 as any);
    return (i as any) >= (r as any) || (c as any) >= (n as any);
  }, "outsideNode"),
  Xr: any = (u as any)((e: any, t: any, a: any): any => {
    ((k as any).debug as any)(`intersection calc abc89:
  outsidePoint: ${((JSON as any).stringify as any)(t)}
  insidePoint : ${((JSON as any).stringify as any)(a)}
  node        : x:${(e as any).x} y:${(e as any).y} w:${(e as any).width} h:${(e as any).height}`);
    const s: any = (e as any).x,
      i: any = (e as any).y,
      c: any = ((Math as any).abs as any)((s as any) - ((a as any).x as any)),
      r: any = ((e as any).width as any) / (2 as any);
    let n: any = ((a as any).x as any) < ((t as any).x as any) ? (r as any) - (c as any) : (r as any) + (c as any);
    const l: any = ((e as any).height as any) / (2 as any),
      g: any = ((Math as any).abs as any)(((t as any).y as any) - ((a as any).y as any)),
      h: any = ((Math as any).abs as any)(((t as any).x as any) - ((a as any).x as any));
    if (((((Math as any).abs as any)((i as any) - ((t as any).y as any)) as any) * (r as any) as any) > ((((Math as any).abs as any)((s as any) - ((t as any).x as any)) as any) * (l as any) as any)) {
      let d: any = ((a as any).y as any) < ((t as any).y as any) ? (((t as any).y as any) - (l as any) as any) - (i as any) : ((i as any) - (l as any) as any) - ((t as any).y as any);
      n = ((h as any) * (d as any) as any) / (g as any);
      const b: any = {
        x: ((a as any).x as any) < ((t as any).x as any) ? ((a as any).x as any) + (n as any) : (((a as any).x as any) - (h as any) as any) + (n as any),
        y: ((a as any).y as any) < ((t as any).y as any) ? (((a as any).y as any) + (g as any) as any) - (d as any) : (((a as any).y as any) - (g as any) as any) + (d as any)
      };
      return (n as any) === (0 as any) && ((b as any).x = (t as any).x, (b as any).y = (t as any).y), (h as any) === (0 as any) && ((b as any).x = (t as any).x), (g as any) === (0 as any) && ((b as any).y = (t as any).y), ((k as any).debug as any)(`abc89 topp/bott calc, Q ${g}, q ${d}, R ${h}, r ${n}`, b), b;
    } else {
      ((a as any).x as any) < ((t as any).x as any) ? n = (((t as any).x as any) - (r as any) as any) - (s as any) : n = ((s as any) - (r as any) as any) - ((t as any).x as any);
      let d: any = ((g as any) * (n as any) as any) / (h as any),
        b: any = ((a as any).x as any) < ((t as any).x as any) ? (((a as any).x as any) + (h as any) as any) - (n as any) : (((a as any).x as any) - (h as any) as any) + (n as any),
        w: any = ((a as any).y as any) < ((t as any).y as any) ? ((a as any).y as any) + (d as any) : ((a as any).y as any) - (d as any);
      return ((k as any).debug as any)(`sides calc abc89, Q ${g}, q ${d}, R ${h}, r ${n}`, {
        _x: b,
        _y: w
      }), (n as any) === (0 as any) && (b = (t as any).x, w = (t as any).y), (h as any) === (0 as any) && (b = (t as any).x), (g as any) === (0 as any) && (w = (t as any).y), {
        x: b,
        y: w
      };
    }
  }, "intersection"),
  Ft: any = (u as any)((e: any, t: any): any => {
    ((k as any).debug as any)("abc88 cutPathAtIntersect", e, t);
    let a: any = [],
      s: any = (e as any)[0],
      i: any = !1;
    return ((e as any).forEach as any)((c: any): any => {
      if (!(Ur as any)(t, c) && !i) {
        const r: any = (Xr as any)(t, s, c);
        let n: any = !1;
        ((a as any).forEach as any)((l: any): any => {
          n = n || ((l as any).x as any) === ((r as any).x as any) && ((l as any).y as any) === ((r as any).y as any);
        }), ((a as any).some as any)((l: any): any => ((l as any).x as any) === ((r as any).x as any) && ((l as any).y as any) === ((r as any).y as any)) || ((a as any).push as any)(r), i = !0;
      } else s = c, i || ((a as any).push as any)(c);
    }), a;
  }, "cutPathAtIntersect"),
  Vr: any = (u as any)(function (this: any, e: any, t: any, a: any, s: any, i: any, c: any, r: any): any {
    let n: any = (a as any).points;
    ((k as any).debug as any)("abc88 InsertEdge: edge=", a, "e=", t);
    let l: any = !1;
    const g: any = ((c as any).node as any)((t as any).v);
    var h: any = ((c as any).node as any)((t as any).w);
    h?.intersect && g?.intersect && (n = ((n as any).slice as any)(1, (((a as any).points as any).length as any) - (1 as any)), ((n as any).unshift as any)(((g as any).intersect as any)((n as any)[0])), ((n as any).push as any)(((h as any).intersect as any)((n as any)[((n as any).length as any) - (1 as any)]))), (a as any).toCluster && (((k as any).debug as any)("to cluster abc88", (s as any)[(a as any).toCluster]), n = (Ft as any)((a as any).points, ((s as any)[(a as any).toCluster] as any).node), l = !0), (a as any).fromCluster && (((k as any).debug as any)("from cluster abc88", (s as any)[(a as any).fromCluster]), n = (((Ft as any)(((n as any).reverse as any)(), ((s as any)[(a as any).fromCluster] as any).node) as any).reverse as any)(), l = !0);
    const d: any = ((n as any).filter as any)((m: any): any => !((Number as any).isNaN as any)((m as any).y));
    let b: any = Ke;
    (a as any).curve && ((i as any) === ("graph" as any) || (i as any) === ("flowchart" as any)) && (b = (a as any).curve);
    const {
        x: w,
        y
      }: any = (Ye as any)(a),
      v: any = (((((((He as any)() as any).x as any)(w) as any).y as any)(y) as any).curve as any)(b);
    let S: any;
    switch ((a as any).thickness) {
      case "normal":
        S = "edge-thickness-normal";
        break;
      case "thick":
        S = "edge-thickness-thick";
        break;
      case "invisible":
        S = "edge-thickness-thick";
        break;
      default:
        S = "";
    }
    switch ((a as any).pattern) {
      case "solid":
        S += " edge-pattern-solid";
        break;
      case "dotted":
        S += " edge-pattern-dotted";
        break;
      case "dashed":
        S += " edge-pattern-dashed";
        break;
    }
    const N: any = ((((((((((e as any).append as any)("path") as any).attr as any)("d", (v as any)(d)) as any).attr as any)("id", (a as any).id) as any).attr as any)("class", ((" " as any) + (S as any) as any) + (((a as any).classes ? (" " as any) + ((a as any).classes as any) : "") as any)) as any).attr as any)("style", (a as any).style);
    let _: any = "";
    ((((R as any)() as any).flowchart as any).arrowMarkerAbsolute || (((R as any)() as any).state as any).arrowMarkerAbsolute) && (_ = (Ue as any)(!0)), (Wr as any)(N, a, _, r, i);
    let T: any = {};
    return l && ((T as any).updatedPath = n), (T as any).originalPath = (a as any).points, T;
  }, "insertEdge"),
  Gr: any = (u as any)((e: any): any => {
    const t: any = new (Set as any)();
    for (const a of e) switch (a) {
      case "x":
        ((t as any).add as any)("right"), ((t as any).add as any)("left");
        break;
      case "y":
        ((t as any).add as any)("up"), ((t as any).add as any)("down");
        break;
      default:
        ((t as any).add as any)(a);
        break;
    }
    return t;
  }, "expandAndDeduplicateDirections"),
  Zr: any = (u as any)((e: any, t: any, a: any, s: any): any => {
    const i: any = (Gr as any)(e),
      c: number = 2,
      r: any = ((t as any).height as any) + ((2 as any) * ((a as any).padding as any) as any),
      n: any = (r as any) / (c as any),
      l: any = s ?? (((t as any).width as any) + ((2 as any) * (n as any) as any) as any) + ((a as any).padding as any),
      g: any = ((a as any).padding as any) / (2 as any);
    return ((i as any).has as any)("right") && ((i as any).has as any)("left") && ((i as any).has as any)("up") && ((i as any).has as any)("down") ? [{
      x: 0,
      y: 0
    }, {
      x: n,
      y: 0
    }, {
      x: (l as any) / (2 as any),
      y: (2 as any) * (g as any)
    }, {
      x: (l as any) - (n as any),
      y: 0
    }, {
      x: l,
      y: 0
    }, {
      x: l,
      y: (-r as any) / (3 as any)
    }, {
      x: (l as any) + ((2 as any) * (g as any) as any),
      y: (-r as any) / (2 as any)
    }, {
      x: l,
      y: ((-2 as any) * (r as any) as any) / (3 as any)
    }, {
      x: l,
      y: -r
    }, {
      x: (l as any) - (n as any),
      y: -r
    }, {
      x: (l as any) / (2 as any),
      y: (-r as any) - ((2 as any) * (g as any) as any)
    }, {
      x: n,
      y: -r
    }, {
      x: 0,
      y: -r
    }, {
      x: 0,
      y: ((-2 as any) * (r as any) as any) / (3 as any)
    }, {
      x: (-2 as any) * (g as any),
      y: (-r as any) / (2 as any)
    }, {
      x: 0,
      y: (-r as any) / (3 as any)
    }] : ((i as any).has as any)("right") && ((i as any).has as any)("left") && ((i as any).has as any)("up") ? [{
      x: n,
      y: 0
    }, {
      x: (l as any) - (n as any),
      y: 0
    }, {
      x: l,
      y: (-r as any) / (2 as any)
    }, {
      x: (l as any) - (n as any),
      y: -r
    }, {
      x: n,
      y: -r
    }, {
      x: 0,
      y: (-r as any) / (2 as any)
    }] : ((i as any).has as any)("right") && ((i as any).has as any)("left") && ((i as any).has as any)("down") ? [{
      x: 0,
      y: 0
    }, {
      x: n,
      y: -r
    }, {
      x: (l as any) - (n as any),
      y: -r
    }, {
      x: l,
      y: 0
    }] : ((i as any).has as any)("right") && ((i as any).has as any)("up") && ((i as any).has as any)("down") ? [{
      x: 0,
      y: 0
    }, {
      x: l,
      y: -n
    }, {
      x: l,
      y: (-r as any) + (n as any)
    }, {
      x: 0,
      y: -r
    }] : ((i as any).has as any)("left") && ((i as any).has as any)("up") && ((i as any).has as any)("down") ? [{
      x: l,
      y: 0
    }, {
      x: 0,
      y: -n
    }, {
      x: 0,
      y: (-r as any) + (n as any)
    }, {
      x: l,
      y: -r
    }] : ((i as any).has as any)("right") && ((i as any).has as any)("left") ? [{
      x: n,
      y: 0
    }, {
      x: n,
      y: -g
    }, {
      x: (l as any) - (n as any),
      y: -g
    }, {
      x: (l as any) - (n as any),
      y: 0
    }, {
      x: l,
      y: (-r as any) / (2 as any)
    }, {
      x: (l as any) - (n as any),
      y: -r
    }, {
      x: (l as any) - (n as any),
      y: (-r as any) + (g as any)
    }, {
      x: n,
      y: (-r as any) + (g as any)
    }, {
      x: n,
      y: -r
    }, {
      x: 0,
      y: (-r as any) / (2 as any)
    }] : ((i as any).has as any)("up") && ((i as any).has as any)("down") ? [{
      x: (l as any) / (2 as any),
      y: 0
    }, {
      x: 0,
      y: -g
    }, {
      x: n,
      y: -g
    }, {
      x: n,
      y: (-r as any) + (g as any)
    }, {
      x: 0,
      y: (-r as any) + (g as any)
    }, {
      x: (l as any) / (2 as any),
      y: -r
    }, {
      x: l,
      y: (-r as any) + (g as any)
    }, {
      x: (l as any) - (n as any),
      y: (-r as any) + (g as any)
    }, {
      x: (l as any) - (n as any),
      y: -g
    }, {
      x: l,
      y: -g
    }] : ((i as any).has as any)("right") && ((i as any).has as any)("up") ? [{
      x: 0,
      y: 0
    }, {
      x: l,
      y: -n
    }, {
      x: 0,
      y: -r
    }] : ((i as any).has as any)("right") && ((i as any).has as any)("down") ? [{
      x: 0,
      y: 0
    }, {
      x: l,
      y: 0
    }, {
      x: 0,
      y: -r
    }] : ((i as any).has as any)("left") && ((i as any).has as any)("up") ? [{
      x: l,
      y: 0
    }, {
      x: 0,
      y: -n
    }, {
      x: l,
      y: -r
    }] : ((i as any).has as any)("left") && ((i as any).has as any)("down") ? [{
      x: l,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: l,
      y: -r
    }] : ((i as any).has as any)("right") ? [{
      x: n,
      y: -g
    }, {
      x: n,
      y: -g
    }, {
      x: (l as any) - (n as any),
      y: -g
    }, {
      x: (l as any) - (n as any),
      y: 0
    }, {
      x: l,
      y: (-r as any) / (2 as any)
    }, {
      x: (l as any) - (n as any),
      y: -r
    }, {
      x: (l as any) - (n as any),
      y: (-r as any) + (g as any)
    }, {
      x: n,
      y: (-r as any) + (g as any)
    }, {
      x: n,
      y: (-r as any) + (g as any)
    }] : ((i as any).has as any)("left") ? [{
      x: n,
      y: 0
    }, {
      x: n,
      y: -g
    }, {
      x: (l as any) - (n as any),
      y: -g
    }, {
      x: (l as any) - (n as any),
      y: (-r as any) + (g as any)
    }, {
      x: n,
      y: (-r as any) + (g as any)
    }, {
      x: n,
      y: -r
    }, {
      x: 0,
      y: (-r as any) / (2 as any)
    }] : ((i as any).has as any)("up") ? [{
      x: n,
      y: -g
    }, {
      x: n,
      y: (-r as any) + (g as any)
    }, {
      x: 0,
      y: (-r as any) + (g as any)
    }, {
      x: (l as any) / (2 as any),
      y: -r
    }, {
      x: l,
      y: (-r as any) + (g as any)
    }, {
      x: (l as any) - (n as any),
      y: (-r as any) + (g as any)
    }, {
      x: (l as any) - (n as any),
      y: -g
    }] : ((i as any).has as any)("down") ? [{
      x: (l as any) / (2 as any),
      y: 0
    }, {
      x: 0,
      y: -g
    }, {
      x: n,
      y: -g
    }, {
      x: n,
      y: (-r as any) + (g as any)
    }, {
      x: (l as any) - (n as any),
      y: (-r as any) + (g as any)
    }, {
      x: (l as any) - (n as any),
      y: -g
    }, {
      x: l,
      y: -g
    }] : [{
      x: 0,
      y: 0
    }];
  }, "getArrowPoints");
function he(this: any, e: any, t: any): any {
  return ((e as any).intersect as any)(t);
}
(u as any)(he, "intersectNode");
var jr: any = he;
function ge(this: any, e: any, t: any, a: any, s: any): any {
  var i: any = (e as any).x,
    c: any = (e as any).y,
    r: any = (i as any) - ((s as any).x as any),
    n: any = (c as any) - ((s as any).y as any),
    l: any = ((Math as any).sqrt as any)(((((t as any) * (t as any) as any) * (n as any) as any) * (n as any) as any) + ((((a as any) * (a as any) as any) * (r as any) as any) * (r as any) as any)),
    g: any = ((Math as any).abs as any)((((t as any) * (a as any) as any) * (r as any) as any) / (l as any));
  ((s as any).x as any) < (i as any) && (g = -g);
  var h: any = ((Math as any).abs as any)((((t as any) * (a as any) as any) * (n as any) as any) / (l as any));
  return ((s as any).y as any) < (c as any) && (h = -h), {
    x: (i as any) + (g as any),
    y: (c as any) + (h as any)
  };
}
(u as any)(ge, "intersectEllipse");
var ue: any = ge;
function de(this: any, e: any, t: any, a: any): any {
  return (ue as any)(e, t, t, a);
}
(u as any)(de, "intersectCircle");
var qr: any = de;
function pe(this: any, e: any, t: any, a: any, s: any): any {
  var i: any, c: any, r: any, n: any, l: any, g: any, h: any, d: any, b: any, w: any, y: any, v: any, S: any, N: any, _: any;
  if (i = ((t as any).y as any) - ((e as any).y as any), r = ((e as any).x as any) - ((t as any).x as any), l = (((t as any).x as any) * ((e as any).y as any) as any) - (((e as any).x as any) * ((t as any).y as any) as any), b = (((i as any) * ((a as any).x as any) as any) + ((r as any) * ((a as any).y as any) as any) as any) + (l as any), w = (((i as any) * ((s as any).x as any) as any) + ((r as any) * ((s as any).y as any) as any) as any) + (l as any), !((b as any) !== (0 as any) && (w as any) !== (0 as any) && (kt as any)(b, w)) && (c = ((s as any).y as any) - ((a as any).y as any), n = ((a as any).x as any) - ((s as any).x as any), g = (((s as any).x as any) * ((a as any).y as any) as any) - (((a as any).x as any) * ((s as any).y as any) as any), h = (((c as any) * ((e as any).x as any) as any) + ((n as any) * ((e as any).y as any) as any) as any) + (g as any), d = (((c as any) * ((t as any).x as any) as any) + ((n as any) * ((t as any).y as any) as any) as any) + (g as any), !((h as any) !== (0 as any) && (d as any) !== (0 as any) && (kt as any)(h, d)) && (y = ((i as any) * (n as any) as any) - ((c as any) * (r as any) as any), (y as any) !== (0 as any)))) return v = ((Math as any).abs as any)((y as any) / (2 as any)), S = ((r as any) * (g as any) as any) - ((n as any) * (l as any) as any), N = (S as any) < (0 as any) ? ((S as any) - (v as any) as any) / (y as any) : ((S as any) + (v as any) as any) / (y as any), S = ((c as any) * (l as any) as any) - ((i as any) * (g as any) as any), _ = (S as any) < (0 as any) ? ((S as any) - (v as any) as any) / (y as any) : ((S as any) + (v as any) as any) / (y as any), {
    x: N,
    y: _
  };
}
(u as any)(pe, "intersectLine");
function kt(this: any, e: any, t: any): any {
  return ((e as any) * (t as any) as any) > (0 as any);
}
(u as any)(kt, "sameSign");
var Jr: any = pe,
  Qr: any = fe;
function fe(this: any, e: any, t: any, a: any): any {
  var s: any = (e as any).x,
    i: any = (e as any).y,
    c: any = [],
    r: any = (Number as any).POSITIVE_INFINITY,
    n: any = (Number as any).POSITIVE_INFINITY;
  (typeof (t as any).forEach as any) == ("function" as any) ? ((t as any).forEach as any)(function (this: any, y: any): any {
    r = ((Math as any).min as any)(r, (y as any).x), n = ((Math as any).min as any)(n, (y as any).y);
  }) : (r = ((Math as any).min as any)(r, (t as any).x), n = ((Math as any).min as any)(n, (t as any).y));
  for (var l: any = ((s as any) - (((e as any).width as any) / (2 as any) as any) as any) - (r as any), g: any = ((i as any) - (((e as any).height as any) / (2 as any) as any) as any) - (n as any), h: any = 0; (h as any) < ((t as any).length as any); h++) {
    var d: any = (t as any)[h],
      b: any = (t as any)[(h as any) < (((t as any).length as any) - (1 as any) as any) ? (h as any) + (1 as any) : 0],
      w: any = (Jr as any)(e, a, {
        x: (l as any) + ((d as any).x as any),
        y: (g as any) + ((d as any).y as any)
      }, {
        x: (l as any) + ((b as any).x as any),
        y: (g as any) + ((b as any).y as any)
      });
    w && ((c as any).push as any)(w);
  }
  return (c as any).length ? (((c as any).length as any) > (1 as any) && ((c as any).sort as any)(function (this: any, y: any, v: any): any {
    var S: any = ((y as any).x as any) - ((a as any).x as any),
      N: any = ((y as any).y as any) - ((a as any).y as any),
      _: any = ((Math as any).sqrt as any)(((S as any) * (S as any) as any) + ((N as any) * (N as any) as any)),
      T: any = ((v as any).x as any) - ((a as any).x as any),
      m: any = ((v as any).y as any) - ((a as any).y as any),
      p: any = ((Math as any).sqrt as any)(((T as any) * (T as any) as any) + ((m as any) * (m as any) as any));
    return (_ as any) < (p as any) ? -1 : (_ as any) === (p as any) ? 0 : 1;
  }), (c as any)[0]) : e;
}
(u as any)(fe, "intersectPolygon");
var $r: any = (u as any)((e: any, t: any): any => {
    var a: any = (e as any).x,
      s: any = (e as any).y,
      i: any = ((t as any).x as any) - (a as any),
      c: any = ((t as any).y as any) - (s as any),
      r: any = ((e as any).width as any) / (2 as any),
      n: any = ((e as any).height as any) / (2 as any),
      l: any,
      g: any;
    return ((((Math as any).abs as any)(c) as any) * (r as any) as any) > ((((Math as any).abs as any)(i) as any) * (n as any) as any) ? ((c as any) < (0 as any) && (n = -n), l = (c as any) === (0 as any) ? 0 : ((n as any) * (i as any) as any) / (c as any), g = n) : ((i as any) < (0 as any) && (r = -r), l = r, g = (i as any) === (0 as any) ? 0 : ((r as any) * (c as any) as any) / (i as any)), {
      x: (a as any) + (l as any),
      y: (s as any) + (g as any)
    };
  }, "intersectRect"),
  ta: any = $r,
  B: any = {
    node: jr,
    circle: qr,
    ellipse: ue,
    polygon: Qr,
    rect: ta
  },
  A: any = (u as any)(async (e: any, t: any, a: any, s: any): Promise<any> => {
    const i: any = (R as any)();
    let c: any;
    const r: any = (t as any).useHtmlLabels || (M as any)(i);
    a ? c = a : c = "node default";
    const n: any = ((((((e as any).insert as any)("g") as any).attr as any)("class", c) as any).attr as any)("id", (t as any).domId || (t as any).id),
      l: any = ((((((n as any).insert as any)("g") as any).attr as any)("class", "label") as any).attr as any)("style", (t as any).labelStyle);
    let g: any;
    ((t as any).labelText as any) === (void 0 as any) ? g = "" : g = (typeof (t as any).labelText as any) == ("string" as any) ? (t as any).labelText : ((t as any).labelText as any)[0];
    let h: any;
    ((t as any).labelType as any) === ("markdown" as any) ? h = (vt as any)(l, (Ot as any)((Rt as any)(g), i), {
      useHtmlLabels: r,
      width: (t as any).width || ((i as any).flowchart as any).wrappingWidth,
      classes: "markdown-node-label"
    }, i) : h = await (K as any)(l, (Ot as any)((Rt as any)(g), i), (t as any).labelStyle, !1, s);
    let d: any = ((h as any).getBBox as any)();
    const b: any = ((t as any).padding as any) / (2 as any);
    if ((M as any)(i)) {
      const w: any = ((h as any).children as any)[0],
        y: any = (D as any)(h);
      await (Ze as any)(w, g), d = ((w as any).getBoundingClientRect as any)(), ((y as any).attr as any)("width", (d as any).width), ((y as any).attr as any)("height", (d as any).height);
    }
    return r ? ((l as any).attr as any)("transform", (((("translate(" as any) + ((-(d as any).width as any) / (2 as any) as any) as any) + (", " as any) as any) + ((-(d as any).height as any) / (2 as any) as any) as any) + (")" as any)) : ((l as any).attr as any)("transform", (("translate(0, " as any) + ((-(d as any).height as any) / (2 as any) as any) as any) + (")" as any)), (t as any).centerLabel && ((l as any).attr as any)("transform", (((("translate(" as any) + ((-(d as any).width as any) / (2 as any) as any) as any) + (", " as any) as any) + ((-(d as any).height as any) / (2 as any) as any) as any) + (")" as any)), ((l as any).insert as any)("rect", ":first-child"), {
      shapeSvg: n,
      bbox: d,
      halfPadding: b,
      label: l
    };
  }, "labelHelper"),
  I: any = (u as any)((e: any, t: any): any => {
    const a: any = ((((t as any).node as any)() as any).getBBox as any)();
    (e as any).width = (a as any).width, (e as any).height = (a as any).height;
  }, "updateNodeBounds");
function X(this: any, e: any, t: any, a: any, s: any): any {
  return ((((((((e as any).insert as any)("polygon", ":first-child") as any).attr as any)("points", ((((s as any).map as any)(function (this: any, i: any): any {
    return (((i as any).x as any) + ("," as any) as any) + ((i as any).y as any);
  }) as any).join as any)(" ")) as any).attr as any)("class", "label-container") as any).attr as any)("transform", (((("translate(" as any) + ((-t as any) / (2 as any) as any) as any) + ("," as any) as any) + ((a as any) / (2 as any) as any) as any) + (")" as any));
}
(u as any)(X, "insertPolygonShape");
var ea: any = (u as any)(async (e: any, t: any): Promise<any> => {
    (t as any).useHtmlLabels || (M as any)((R as any)()) || ((t as any).centerLabel = !0);
    const {
      shapeSvg: s,
      bbox: i,
      halfPadding: c
    }: any = await (A as any)(e, t, ("node " as any) + ((t as any).classes as any), !0);
    ((k as any).info as any)("Classes = ", (t as any).classes);
    const r: any = ((s as any).insert as any)("rect", ":first-child");
    return ((((((((((((r as any).attr as any)("rx", (t as any).rx) as any).attr as any)("ry", (t as any).ry) as any).attr as any)("x", ((-(i as any).width as any) / (2 as any) as any) - (c as any)) as any).attr as any)("y", ((-(i as any).height as any) / (2 as any) as any) - (c as any)) as any).attr as any)("width", ((i as any).width as any) + ((t as any).padding as any)) as any).attr as any)("height", ((i as any).height as any) + ((t as any).padding as any)), (I as any)(t, r), (t as any).intersect = function (this: any, n: any): any {
      return ((B as any).rect as any)(t, n);
    }, s;
  }, "note"),
  ra: any = ea,
  Wt: any = (u as any)((e: any): any => e ? (" " as any) + (e as any) : "", "formatClass"),
  Y: any = (u as any)((e: any, t: any): any => `${t || "node default"}${(Wt as any)((e as any).classes)} ${(Wt as any)((e as any).class)}`, "getClassesFromNode"),
  Yt: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const {
        shapeSvg: a,
        bbox: s
      }: any = await (A as any)(e, t, (Y as any)(t, void 0), !0),
      i: any = ((s as any).width as any) + ((t as any).padding as any),
      c: any = ((s as any).height as any) + ((t as any).padding as any),
      r: any = (i as any) + (c as any),
      n: any = [{
        x: (r as any) / (2 as any),
        y: 0
      }, {
        x: r,
        y: (-r as any) / (2 as any)
      }, {
        x: (r as any) / (2 as any),
        y: -r
      }, {
        x: 0,
        y: (-r as any) / (2 as any)
      }];
    ((k as any).info as any)("Question main (Circle)");
    const l: any = (X as any)(a, r, r, n);
    return ((l as any).attr as any)("style", (t as any).style), (I as any)(t, l), (t as any).intersect = function (this: any, g: any): any {
      return ((k as any).warn as any)("Intersect called"), ((B as any).polygon as any)(t, n, g);
    }, a;
  }, "question"),
  aa: any = (u as any)((e: any, t: any): any => {
    const a: any = ((((((e as any).insert as any)("g") as any).attr as any)("class", "node default") as any).attr as any)("id", (t as any).domId || (t as any).id),
      s: number = 28,
      i: any = [{
        x: 0,
        y: (s as any) / (2 as any)
      }, {
        x: (s as any) / (2 as any),
        y: 0
      }, {
        x: 0,
        y: (-s as any) / (2 as any)
      }, {
        x: (-s as any) / (2 as any),
        y: 0
      }];
    return ((((((((((((a as any).insert as any)("polygon", ":first-child") as any).attr as any)("points", ((((i as any).map as any)(function (this: any, r: any): any {
      return (((r as any).x as any) + ("," as any) as any) + ((r as any).y as any);
    }) as any).join as any)(" ")) as any).attr as any)("class", "state-start") as any).attr as any)("r", 7) as any).attr as any)("width", 28) as any).attr as any)("height", 28), (t as any).width = 28, (t as any).height = 28, (t as any).intersect = function (this: any, r: any): any {
      return ((B as any).circle as any)(t, 14, r);
    }, a;
  }, "choice"),
  sa: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const {
        shapeSvg: a,
        bbox: s
      }: any = await (A as any)(e, t, (Y as any)(t, void 0), !0),
      i: number = 4,
      c: any = (t as any).positioned ? (t as any).height : ((s as any).height as any) + ((t as any).padding as any),
      r: any = (c as any) / (i as any),
      n: any = (t as any).positioned ? (t as any).width : (((s as any).width as any) + ((2 as any) * (r as any) as any) as any) + ((t as any).padding as any),
      l: any = [{
        x: r,
        y: 0
      }, {
        x: (n as any) - (r as any),
        y: 0
      }, {
        x: n,
        y: (-c as any) / (2 as any)
      }, {
        x: (n as any) - (r as any),
        y: -c
      }, {
        x: r,
        y: -c
      }, {
        x: 0,
        y: (-c as any) / (2 as any)
      }],
      g: any = (X as any)(a, n, c, l);
    return ((g as any).attr as any)("style", (t as any).style), (I as any)(t, g), (t as any).intersect = function (this: any, h: any): any {
      return ((B as any).polygon as any)(t, l, h);
    }, a;
  }, "hexagon"),
  ia: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const {
        shapeSvg: a,
        bbox: s
      }: any = await (A as any)(e, t, void 0, !0),
      i: number = 2,
      c: any = ((s as any).height as any) + ((2 as any) * ((t as any).padding as any) as any),
      r: any = (c as any) / (i as any),
      n: any = (((s as any).width as any) + ((2 as any) * (r as any) as any) as any) + ((t as any).padding as any),
      g: any = (t as any).positioned && (((t as any).widthInColumns ?? 1) as any) > (1 as any) && ((t as any).width as any) > (n as any) ? (t as any).width : n,
      h: any = (Zr as any)((t as any).directions, s, t, g),
      d: any = (X as any)(a, g, c, h);
    return ((d as any).attr as any)("style", (t as any).style), (I as any)(t, d), (t as any).intersect = function (this: any, b: any): any {
      return ((B as any).polygon as any)(t, h, b);
    }, a;
  }, "block_arrow"),
  na: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const {
        shapeSvg: a,
        bbox: s
      }: any = await (A as any)(e, t, (Y as any)(t, void 0), !0),
      i: any = ((s as any).width as any) + ((t as any).padding as any),
      c: any = ((s as any).height as any) + ((t as any).padding as any),
      r: any = [{
        x: (-c as any) / (2 as any),
        y: 0
      }, {
        x: i,
        y: 0
      }, {
        x: i,
        y: -c
      }, {
        x: (-c as any) / (2 as any),
        y: -c
      }, {
        x: 0,
        y: (-c as any) / (2 as any)
      }];
    return (((X as any)(a, i, c, r) as any).attr as any)("style", (t as any).style), (t as any).width = (i as any) + (c as any), (t as any).height = c, (t as any).intersect = function (this: any, l: any): any {
      return ((B as any).polygon as any)(t, r, l);
    }, a;
  }, "rect_left_inv_arrow"),
  ca: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const {
        shapeSvg: a,
        bbox: s
      }: any = await (A as any)(e, t, (Y as any)(t), !0),
      i: any = ((s as any).width as any) + ((t as any).padding as any),
      c: any = ((s as any).height as any) + ((t as any).padding as any),
      r: any = [{
        x: ((-2 as any) * (c as any) as any) / (6 as any),
        y: 0
      }, {
        x: (i as any) - ((c as any) / (6 as any) as any),
        y: 0
      }, {
        x: (i as any) + (((2 as any) * (c as any) as any) / (6 as any) as any),
        y: -c
      }, {
        x: (c as any) / (6 as any),
        y: -c
      }],
      n: any = (X as any)(a, i, c, r);
    return ((n as any).attr as any)("style", (t as any).style), (I as any)(t, n), (t as any).intersect = function (this: any, l: any): any {
      return ((B as any).polygon as any)(t, r, l);
    }, a;
  }, "lean_right"),
  la: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const {
        shapeSvg: a,
        bbox: s
      }: any = await (A as any)(e, t, (Y as any)(t, void 0), !0),
      i: any = ((s as any).width as any) + ((t as any).padding as any),
      c: any = ((s as any).height as any) + ((t as any).padding as any),
      r: any = [{
        x: ((2 as any) * (c as any) as any) / (6 as any),
        y: 0
      }, {
        x: (i as any) + ((c as any) / (6 as any) as any),
        y: 0
      }, {
        x: (i as any) - (((2 as any) * (c as any) as any) / (6 as any) as any),
        y: -c
      }, {
        x: (-c as any) / (6 as any),
        y: -c
      }],
      n: any = (X as any)(a, i, c, r);
    return ((n as any).attr as any)("style", (t as any).style), (I as any)(t, n), (t as any).intersect = function (this: any, l: any): any {
      return ((B as any).polygon as any)(t, r, l);
    }, a;
  }, "lean_left"),
  oa: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const {
        shapeSvg: a,
        bbox: s
      }: any = await (A as any)(e, t, (Y as any)(t, void 0), !0),
      i: any = ((s as any).width as any) + ((t as any).padding as any),
      c: any = ((s as any).height as any) + ((t as any).padding as any),
      r: any = [{
        x: ((-2 as any) * (c as any) as any) / (6 as any),
        y: 0
      }, {
        x: (i as any) + (((2 as any) * (c as any) as any) / (6 as any) as any),
        y: 0
      }, {
        x: (i as any) - ((c as any) / (6 as any) as any),
        y: -c
      }, {
        x: (c as any) / (6 as any),
        y: -c
      }],
      n: any = (X as any)(a, i, c, r);
    return ((n as any).attr as any)("style", (t as any).style), (I as any)(t, n), (t as any).intersect = function (this: any, l: any): any {
      return ((B as any).polygon as any)(t, r, l);
    }, a;
  }, "trapezoid"),
  ha: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const {
        shapeSvg: a,
        bbox: s
      }: any = await (A as any)(e, t, (Y as any)(t, void 0), !0),
      i: any = ((s as any).width as any) + ((t as any).padding as any),
      c: any = ((s as any).height as any) + ((t as any).padding as any),
      r: any = [{
        x: (c as any) / (6 as any),
        y: 0
      }, {
        x: (i as any) - ((c as any) / (6 as any) as any),
        y: 0
      }, {
        x: (i as any) + (((2 as any) * (c as any) as any) / (6 as any) as any),
        y: -c
      }, {
        x: ((-2 as any) * (c as any) as any) / (6 as any),
        y: -c
      }],
      n: any = (X as any)(a, i, c, r);
    return ((n as any).attr as any)("style", (t as any).style), (I as any)(t, n), (t as any).intersect = function (this: any, l: any): any {
      return ((B as any).polygon as any)(t, r, l);
    }, a;
  }, "inv_trapezoid"),
  ga: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const {
        shapeSvg: a,
        bbox: s
      }: any = await (A as any)(e, t, (Y as any)(t, void 0), !0),
      i: any = ((s as any).width as any) + ((t as any).padding as any),
      c: any = ((s as any).height as any) + ((t as any).padding as any),
      r: any = [{
        x: 0,
        y: 0
      }, {
        x: (i as any) + ((c as any) / (2 as any) as any),
        y: 0
      }, {
        x: i,
        y: (-c as any) / (2 as any)
      }, {
        x: (i as any) + ((c as any) / (2 as any) as any),
        y: -c
      }, {
        x: 0,
        y: -c
      }],
      n: any = (X as any)(a, i, c, r);
    return ((n as any).attr as any)("style", (t as any).style), (I as any)(t, n), (t as any).intersect = function (this: any, l: any): any {
      return ((B as any).polygon as any)(t, r, l);
    }, a;
  }, "rect_right_inv_arrow"),
  ua: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const {
        shapeSvg: a,
        bbox: s
      }: any = await (A as any)(e, t, (Y as any)(t, void 0), !0),
      i: any = ((s as any).width as any) + ((t as any).padding as any),
      c: any = (i as any) / (2 as any),
      r: any = (c as any) / ((2.5 as any) + ((i as any) / (50 as any) as any) as any),
      n: any = (((s as any).height as any) + (r as any) as any) + ((t as any).padding as any),
      l: any = ((((((((((((((((((((((("M 0," as any) + (r as any) as any) + (" a " as any) as any) + (c as any) as any) + ("," as any) as any) + (r as any) as any) + (" 0,0,0 " as any) as any) + (i as any) as any) + (" 0 a " as any) as any) + (c as any) as any) + ("," as any) as any) + (r as any) as any) + (" 0,0,0 " as any) as any) + (-i as any) as any) + (" 0 l 0," as any) as any) + (n as any) as any) + (" a " as any) as any) + (c as any) as any) + ("," as any) as any) + (r as any) as any) + (" 0,0,0 " as any) as any) + (i as any) as any) + (" 0 l 0," as any) as any) + (-n as any),
      g: any = ((((((((((a as any).attr as any)("label-offset-y", r) as any).insert as any)("path", ":first-child") as any).attr as any)("style", (t as any).style) as any).attr as any)("d", l) as any).attr as any)("transform", (((("translate(" as any) + ((-i as any) / (2 as any) as any) as any) + ("," as any) as any) + (-(((n as any) / (2 as any) as any) + (r as any)) as any) as any) + (")" as any));
    return (I as any)(t, g), (t as any).intersect = function (this: any, h: any): any {
      const d: any = ((B as any).rect as any)(t, h),
        b: any = ((d as any).x as any) - ((t as any).x as any);
      if ((c as any) != (0 as any) && ((((Math as any).abs as any)(b) as any) < (((t as any).width as any) / (2 as any) as any) || (((Math as any).abs as any)(b) as any) == (((t as any).width as any) / (2 as any) as any) && (((Math as any).abs as any)(((d as any).y as any) - ((t as any).y as any)) as any) > ((((t as any).height as any) / (2 as any) as any) - (r as any) as any))) {
        let w: any = ((r as any) * (r as any) as any) * ((1 as any) - (((b as any) * (b as any) as any) / ((c as any) * (c as any) as any) as any) as any);
        (w as any) != (0 as any) && (w = ((Math as any).sqrt as any)(w)), w = (r as any) - (w as any), (((h as any).y as any) - ((t as any).y as any) as any) > (0 as any) && (w = -w), (d as any).y += w;
      }
      return d;
    }, a;
  }, "cylinder"),
  da: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const {
        shapeSvg: a,
        bbox: s,
        halfPadding: i
      }: any = await (A as any)(e, t, ((("node " as any) + ((t as any).classes as any) as any) + (" " as any) as any) + ((t as any).class as any), !0),
      c: any = ((a as any).insert as any)("rect", ":first-child"),
      r: any = (t as any).positioned ? (t as any).width : ((s as any).width as any) + ((t as any).padding as any),
      n: any = (t as any).positioned ? (t as any).height : ((s as any).height as any) + ((t as any).padding as any),
      l: any = (t as any).positioned ? (-r as any) / (2 as any) : ((-(s as any).width as any) / (2 as any) as any) - (i as any),
      g: any = (t as any).positioned ? (-n as any) / (2 as any) : ((-(s as any).height as any) / (2 as any) as any) - (i as any);
    if (((((((((((((((((c as any).attr as any)("class", "basic label-container") as any).attr as any)("style", (t as any).style) as any).attr as any)("rx", (t as any).rx) as any).attr as any)("ry", (t as any).ry) as any).attr as any)("x", l) as any).attr as any)("y", g) as any).attr as any)("width", r) as any).attr as any)("height", n), (t as any).props) {
      const h: any = new (Set as any)(((Object as any).keys as any)((t as any).props));
      ((t as any).props as any).borders && ((ot as any)(c, ((t as any).props as any).borders, r, n), ((h as any).delete as any)("borders")), ((h as any).forEach as any)((d: any): any => {
        ((k as any).warn as any)(`Unknown node property ${d}`);
      });
    }
    return (I as any)(t, c), (t as any).intersect = function (this: any, h: any): any {
      return ((B as any).rect as any)(t, h);
    }, a;
  }, "rect"),
  pa: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const {
        shapeSvg: a,
        bbox: s,
        halfPadding: i
      }: any = await (A as any)(e, t, ("node " as any) + ((t as any).classes as any), !0),
      c: any = ((a as any).insert as any)("rect", ":first-child"),
      r: any = (t as any).positioned ? (t as any).width : ((s as any).width as any) + ((t as any).padding as any),
      n: any = (t as any).positioned ? (t as any).height : ((s as any).height as any) + ((t as any).padding as any),
      l: any = (t as any).positioned ? (-r as any) / (2 as any) : ((-(s as any).width as any) / (2 as any) as any) - (i as any),
      g: any = (t as any).positioned ? (-n as any) / (2 as any) : ((-(s as any).height as any) / (2 as any) as any) - (i as any);
    if (((((((((((((((((c as any).attr as any)("class", "basic cluster composite label-container") as any).attr as any)("style", (t as any).style) as any).attr as any)("rx", (t as any).rx) as any).attr as any)("ry", (t as any).ry) as any).attr as any)("x", l) as any).attr as any)("y", g) as any).attr as any)("width", r) as any).attr as any)("height", n), (t as any).props) {
      const h: any = new (Set as any)(((Object as any).keys as any)((t as any).props));
      ((t as any).props as any).borders && ((ot as any)(c, ((t as any).props as any).borders, r, n), ((h as any).delete as any)("borders")), ((h as any).forEach as any)((d: any): any => {
        ((k as any).warn as any)(`Unknown node property ${d}`);
      });
    }
    return (I as any)(t, c), (t as any).intersect = function (this: any, h: any): any {
      return ((B as any).rect as any)(t, h);
    }, a;
  }, "composite"),
  fa: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const {
      shapeSvg: a
    }: any = await (A as any)(e, t, "label", !0);
    ((k as any).trace as any)("Classes = ", (t as any).class);
    const s: any = ((a as any).insert as any)("rect", ":first-child"),
      i: number = 0,
      c: number = 0;
    if (((((s as any).attr as any)("width", i) as any).attr as any)("height", c), ((a as any).attr as any)("class", "label edgeLabel"), (t as any).props) {
      const r: any = new (Set as any)(((Object as any).keys as any)((t as any).props));
      ((t as any).props as any).borders && ((ot as any)(s, ((t as any).props as any).borders, i, c), ((r as any).delete as any)("borders")), ((r as any).forEach as any)((n: any): any => {
        ((k as any).warn as any)(`Unknown node property ${n}`);
      });
    }
    return (I as any)(t, s), (t as any).intersect = function (this: any, r: any): any {
      return ((B as any).rect as any)(t, r);
    }, a;
  }, "labelRect");
function ot(this: any, e: any, t: any, a: any, s: any): any {
  const i: any = [],
    c: any = (u as any)((n: any): any => {
      ((i as any).push as any)(n, 0);
    }, "addBorder"),
    r: any = (u as any)((n: any): any => {
      ((i as any).push as any)(0, n);
    }, "skipBorder");
  ((t as any).includes as any)("t") ? (((k as any).debug as any)("add top border"), (c as any)(a)) : (r as any)(a), ((t as any).includes as any)("r") ? (((k as any).debug as any)("add right border"), (c as any)(s)) : (r as any)(s), ((t as any).includes as any)("b") ? (((k as any).debug as any)("add bottom border"), (c as any)(a)) : (r as any)(a), ((t as any).includes as any)("l") ? (((k as any).debug as any)("add left border"), (c as any)(s)) : (r as any)(s), ((e as any).attr as any)("stroke-dasharray", ((i as any).join as any)(" "));
}
(u as any)(ot, "applyNodePropertyBorders");
var xa: any = (u as any)(async (e: any, t: any): Promise<any> => {
    let a: any;
    (t as any).classes ? a = ("node " as any) + ((t as any).classes as any) : a = "node default";
    const s: any = ((((((e as any).insert as any)("g") as any).attr as any)("class", a) as any).attr as any)("id", (t as any).domId || (t as any).id),
      i: any = ((s as any).insert as any)("rect", ":first-child"),
      c: any = ((s as any).insert as any)("line"),
      r: any = ((((s as any).insert as any)("g") as any).attr as any)("class", "label"),
      n: any = ((t as any).labelText as any).flat ? (((t as any).labelText as any).flat as any)() : (t as any).labelText;
    let l: any = "";
    (typeof n as any) == ("object" as any) ? l = (n as any)[0] : l = n, ((k as any).info as any)("Label text abc79", l, n, (typeof n as any) == ("object" as any));
    const g: any = await (K as any)(r, l, (t as any).labelStyle, !0, !0);
    let h: any = {
      width: 0,
      height: 0
    };
    if ((M as any)((R as any)())) {
      const v: any = ((g as any).children as any)[0],
        S: any = (D as any)(g);
      h = ((v as any).getBoundingClientRect as any)(), ((S as any).attr as any)("width", (h as any).width), ((S as any).attr as any)("height", (h as any).height);
    }
    ((k as any).info as any)("Text 2", n);
    const d: any = ((n as any).slice as any)(1, (n as any).length);
    let b: any = ((g as any).getBBox as any)();
    const w: any = await (K as any)(r, (d as any).join ? ((d as any).join as any)("<br/>") : d, (t as any).labelStyle, !0, !0);
    if ((M as any)((R as any)())) {
      const v: any = ((w as any).children as any)[0],
        S: any = (D as any)(w);
      h = ((v as any).getBoundingClientRect as any)(), ((S as any).attr as any)("width", (h as any).width), ((S as any).attr as any)("height", (h as any).height);
    }
    const y: any = ((t as any).padding as any) / (2 as any);
    return (((D as any)(w) as any).attr as any)("transform", (((("translate( " as any) + ((((h as any).width as any) > ((b as any).width as any) ? 0 : (((b as any).width as any) - ((h as any).width as any) as any) / (2 as any)) as any) as any) + (", " as any) as any) + ((((b as any).height as any) + (y as any) as any) + (5 as any) as any) as any) + (")" as any)), (((D as any)(g) as any).attr as any)("transform", (("translate( " as any) + ((((h as any).width as any) < ((b as any).width as any) ? 0 : (-(((b as any).width as any) - ((h as any).width as any)) as any) / (2 as any)) as any) as any) + (", 0)" as any)), h = ((((r as any).node as any)() as any).getBBox as any)(), ((r as any).attr as any)("transform", (((("translate(" as any) + ((-(h as any).width as any) / (2 as any) as any) as any) + (", " as any) as any) + ((((-(h as any).height as any) / (2 as any) as any) - (y as any) as any) + (3 as any) as any) as any) + (")" as any)), ((((((((((i as any).attr as any)("class", "outer title-state") as any).attr as any)("x", ((-(h as any).width as any) / (2 as any) as any) - (y as any)) as any).attr as any)("y", ((-(h as any).height as any) / (2 as any) as any) - (y as any)) as any).attr as any)("width", ((h as any).width as any) + ((t as any).padding as any)) as any).attr as any)("height", ((h as any).height as any) + ((t as any).padding as any)), ((((((((((c as any).attr as any)("class", "divider") as any).attr as any)("x1", ((-(h as any).width as any) / (2 as any) as any) - (y as any)) as any).attr as any)("x2", (((h as any).width as any) / (2 as any) as any) + (y as any)) as any).attr as any)("y1", ((((-(h as any).height as any) / (2 as any) as any) - (y as any) as any) + ((b as any).height as any) as any) + (y as any)) as any).attr as any)("y2", ((((-(h as any).height as any) / (2 as any) as any) - (y as any) as any) + ((b as any).height as any) as any) + (y as any)), (I as any)(t, i), (t as any).intersect = function (this: any, v: any): any {
      return ((B as any).rect as any)(t, v);
    }, s;
  }, "rectWithTitle"),
  ya: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const {
        shapeSvg: a,
        bbox: s
      }: any = await (A as any)(e, t, (Y as any)(t, void 0), !0),
      i: any = ((s as any).height as any) + ((t as any).padding as any),
      c: any = (((s as any).width as any) + ((i as any) / (4 as any) as any) as any) + ((t as any).padding as any),
      r: any = ((((((((((((((((a as any).insert as any)("rect", ":first-child") as any).attr as any)("style", (t as any).style) as any).attr as any)("rx", (i as any) / (2 as any)) as any).attr as any)("ry", (i as any) / (2 as any)) as any).attr as any)("x", (-c as any) / (2 as any)) as any).attr as any)("y", (-i as any) / (2 as any)) as any).attr as any)("width", c) as any).attr as any)("height", i);
    return (I as any)(t, r), (t as any).intersect = function (this: any, n: any): any {
      return ((B as any).rect as any)(t, n);
    }, a;
  }, "stadium"),
  ba: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const {
        shapeSvg: a,
        bbox: s,
        halfPadding: i
      }: any = await (A as any)(e, t, (Y as any)(t, void 0), !0),
      c: any = ((a as any).insert as any)("circle", ":first-child");
    return ((((((((((((c as any).attr as any)("style", (t as any).style) as any).attr as any)("rx", (t as any).rx) as any).attr as any)("ry", (t as any).ry) as any).attr as any)("r", (((s as any).width as any) / (2 as any) as any) + (i as any)) as any).attr as any)("width", ((s as any).width as any) + ((t as any).padding as any)) as any).attr as any)("height", ((s as any).height as any) + ((t as any).padding as any)), ((k as any).info as any)("Circle main"), (I as any)(t, c), (t as any).intersect = function (this: any, r: any): any {
      return ((k as any).info as any)("Circle intersect", t, (((s as any).width as any) / (2 as any) as any) + (i as any), r), ((B as any).circle as any)(t, (((s as any).width as any) / (2 as any) as any) + (i as any), r);
    }, a;
  }, "circle"),
  wa: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const {
        shapeSvg: a,
        bbox: s,
        halfPadding: i
      }: any = await (A as any)(e, t, (Y as any)(t, void 0), !0),
      c: number = 5,
      r: any = ((a as any).insert as any)("g", ":first-child"),
      n: any = ((r as any).insert as any)("circle"),
      l: any = ((r as any).insert as any)("circle");
    return ((r as any).attr as any)("class", (t as any).class), ((((((((((((n as any).attr as any)("style", (t as any).style) as any).attr as any)("rx", (t as any).rx) as any).attr as any)("ry", (t as any).ry) as any).attr as any)("r", ((((s as any).width as any) / (2 as any) as any) + (i as any) as any) + (c as any)) as any).attr as any)("width", (((s as any).width as any) + ((t as any).padding as any) as any) + ((c as any) * (2 as any) as any)) as any).attr as any)("height", (((s as any).height as any) + ((t as any).padding as any) as any) + ((c as any) * (2 as any) as any)), ((((((((((((l as any).attr as any)("style", (t as any).style) as any).attr as any)("rx", (t as any).rx) as any).attr as any)("ry", (t as any).ry) as any).attr as any)("r", (((s as any).width as any) / (2 as any) as any) + (i as any)) as any).attr as any)("width", ((s as any).width as any) + ((t as any).padding as any)) as any).attr as any)("height", ((s as any).height as any) + ((t as any).padding as any)), ((k as any).info as any)("DoubleCircle main"), (I as any)(t, n), (t as any).intersect = function (this: any, g: any): any {
      return ((k as any).info as any)("DoubleCircle intersect", t, ((((s as any).width as any) / (2 as any) as any) + (i as any) as any) + (c as any), g), ((B as any).circle as any)(t, ((((s as any).width as any) / (2 as any) as any) + (i as any) as any) + (c as any), g);
    }, a;
  }, "doublecircle"),
  ma: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const {
        shapeSvg: a,
        bbox: s
      }: any = await (A as any)(e, t, (Y as any)(t, void 0), !0),
      i: any = ((s as any).width as any) + ((t as any).padding as any),
      c: any = ((s as any).height as any) + ((t as any).padding as any),
      r: any = [{
        x: 0,
        y: 0
      }, {
        x: i,
        y: 0
      }, {
        x: i,
        y: -c
      }, {
        x: 0,
        y: -c
      }, {
        x: 0,
        y: 0
      }, {
        x: -8,
        y: 0
      }, {
        x: (i as any) + (8 as any),
        y: 0
      }, {
        x: (i as any) + (8 as any),
        y: -c
      }, {
        x: -8,
        y: -c
      }, {
        x: -8,
        y: 0
      }],
      n: any = (X as any)(a, i, c, r);
    return ((n as any).attr as any)("style", (t as any).style), (I as any)(t, n), (t as any).intersect = function (this: any, l: any): any {
      return ((B as any).polygon as any)(t, r, l);
    }, a;
  }, "subroutine"),
  Sa: any = (u as any)((e: any, t: any): any => {
    const a: any = ((((((e as any).insert as any)("g") as any).attr as any)("class", "node default") as any).attr as any)("id", (t as any).domId || (t as any).id),
      s: any = ((a as any).insert as any)("circle", ":first-child");
    return ((((((((s as any).attr as any)("class", "state-start") as any).attr as any)("r", 7) as any).attr as any)("width", 14) as any).attr as any)("height", 14), (I as any)(t, s), (t as any).intersect = function (this: any, i: any): any {
      return ((B as any).circle as any)(t, 7, i);
    }, a;
  }, "start"),
  Ht: any = (u as any)((e: any, t: any, a: any): any => {
    const s: any = ((((((e as any).insert as any)("g") as any).attr as any)("class", "node default") as any).attr as any)("id", (t as any).domId || (t as any).id);
    let i: any = 70,
      c: any = 10;
    (a as any) === ("LR" as any) && (i = 10, c = 70);
    const r: any = ((((((((((((s as any).append as any)("rect") as any).attr as any)("x", ((-1 as any) * (i as any) as any) / (2 as any)) as any).attr as any)("y", ((-1 as any) * (c as any) as any) / (2 as any)) as any).attr as any)("width", i) as any).attr as any)("height", c) as any).attr as any)("class", "fork-join");
    return (I as any)(t, r), (t as any).height = ((t as any).height as any) + (((t as any).padding as any) / (2 as any) as any), (t as any).width = ((t as any).width as any) + (((t as any).padding as any) / (2 as any) as any), (t as any).intersect = function (this: any, n: any): any {
      return ((B as any).rect as any)(t, n);
    }, s;
  }, "forkJoin"),
  La: any = (u as any)((e: any, t: any): any => {
    const a: any = ((((((e as any).insert as any)("g") as any).attr as any)("class", "node default") as any).attr as any)("id", (t as any).domId || (t as any).id),
      s: any = ((a as any).insert as any)("circle", ":first-child"),
      i: any = ((a as any).insert as any)("circle", ":first-child");
    return ((((((((i as any).attr as any)("class", "state-start") as any).attr as any)("r", 7) as any).attr as any)("width", 14) as any).attr as any)("height", 14), ((((((((s as any).attr as any)("class", "state-end") as any).attr as any)("r", 5) as any).attr as any)("width", 10) as any).attr as any)("height", 10), (I as any)(t, i), (t as any).intersect = function (this: any, c: any): any {
      return ((B as any).circle as any)(t, 7, c);
    }, a;
  }, "end"),
  ka: any = (u as any)(async (e: any, t: any): Promise<any> => {
    const a: any = ((t as any).padding as any) / (2 as any),
      s: number = 4,
      i: number = 8;
    let c: any;
    (t as any).classes ? c = ("node " as any) + ((t as any).classes as any) : c = "node default";
    const r: any = ((((((e as any).insert as any)("g") as any).attr as any)("class", c) as any).attr as any)("id", (t as any).domId || (t as any).id),
      n: any = ((r as any).insert as any)("rect", ":first-child"),
      l: any = ((r as any).insert as any)("line"),
      g: any = ((r as any).insert as any)("line");
    let h: any = 0,
      d: any = s;
    const b: any = ((((r as any).insert as any)("g") as any).attr as any)("class", "label");
    let w: any = 0;
    const y: any = ((t as any).classData as any).annotations?.[0],
      v: any = (((t as any).classData as any).annotations as any)[0] ? (("«" as any) + ((((t as any).classData as any).annotations as any)[0] as any) as any) + ("»" as any) : "",
      S: any = await (K as any)(b, v, (t as any).labelStyle, !0, !0);
    let N: any = ((S as any).getBBox as any)();
    if ((M as any)((R as any)())) {
      const E: any = ((S as any).children as any)[0],
        o: any = (D as any)(S);
      N = ((E as any).getBoundingClientRect as any)(), ((o as any).attr as any)("width", (N as any).width), ((o as any).attr as any)("height", (N as any).height);
    }
    (((t as any).classData as any).annotations as any)[0] && (d += ((N as any).height as any) + (s as any), h += (N as any).width);
    let _: any = ((t as any).classData as any).label;
    (((t as any).classData as any).type as any) !== (void 0 as any) && (((t as any).classData as any).type as any) !== ("" as any) && ((M as any)((R as any)()) ? _ += (("&lt;" as any) + (((t as any).classData as any).type as any) as any) + ("&gt;" as any) : _ += (("<" as any) + (((t as any).classData as any).type as any) as any) + (">" as any));
    const T: any = await (K as any)(b, _, (t as any).labelStyle, !0, !0);
    (((D as any)(T) as any).attr as any)("class", "classTitle");
    let m: any = ((T as any).getBBox as any)();
    if ((M as any)((R as any)())) {
      const E: any = ((T as any).children as any)[0],
        o: any = (D as any)(T);
      m = ((E as any).getBoundingClientRect as any)(), ((o as any).attr as any)("width", (m as any).width), ((o as any).attr as any)("height", (m as any).height);
    }
    d += ((m as any).height as any) + (s as any), ((m as any).width as any) > (h as any) && (h = (m as any).width);
    const p: any = [];
    ((((t as any).classData as any).members as any).forEach as any)(async (E: any): Promise<any> => {
      const o: any = ((E as any).getDisplayDetails as any)();
      let F: any = (o as any).displayText;
      (M as any)((R as any)()) && (F = ((((F as any).replace as any)(/</g, "&lt;") as any).replace as any)(/>/g, "&gt;"));
      const f: any = await (K as any)(b, F, (o as any).cssStyle ? (o as any).cssStyle : (t as any).labelStyle, !0, !0);
      let C: any = ((f as any).getBBox as any)();
      if ((M as any)((R as any)())) {
        const j: any = ((f as any).children as any)[0],
          V: any = (D as any)(f);
        C = ((j as any).getBoundingClientRect as any)(), ((V as any).attr as any)("width", (C as any).width), ((V as any).attr as any)("height", (C as any).height);
      }
      ((C as any).width as any) > (h as any) && (h = (C as any).width), d += ((C as any).height as any) + (s as any), ((p as any).push as any)(f);
    }), d += i;
    const x: any = [];
    if (((((t as any).classData as any).methods as any).forEach as any)(async (E: any): Promise<any> => {
      const o: any = ((E as any).getDisplayDetails as any)();
      let F: any = (o as any).displayText;
      (M as any)((R as any)()) && (F = ((((F as any).replace as any)(/</g, "&lt;") as any).replace as any)(/>/g, "&gt;"));
      const f: any = await (K as any)(b, F, (o as any).cssStyle ? (o as any).cssStyle : (t as any).labelStyle, !0, !0);
      let C: any = ((f as any).getBBox as any)();
      if ((M as any)((R as any)())) {
        const j: any = ((f as any).children as any)[0],
          V: any = (D as any)(f);
        C = ((j as any).getBoundingClientRect as any)(), ((V as any).attr as any)("width", (C as any).width), ((V as any).attr as any)("height", (C as any).height);
      }
      ((C as any).width as any) > (h as any) && (h = (C as any).width), d += ((C as any).height as any) + (s as any), ((x as any).push as any)(f);
    }), d += i, y) {
      let E: any = ((h as any) - ((N as any).width as any) as any) / (2 as any);
      (((D as any)(S) as any).attr as any)("transform", (((("translate( " as any) + ((((-1 as any) * (h as any) as any) / (2 as any) as any) + (E as any) as any) as any) + (", " as any) as any) + (((-1 as any) * (d as any) as any) / (2 as any) as any) as any) + (")" as any)), w = ((N as any).height as any) + (s as any);
    }
    let L: any = ((h as any) - ((m as any).width as any) as any) / (2 as any);
    return (((D as any)(T) as any).attr as any)("transform", (((("translate( " as any) + ((((-1 as any) * (h as any) as any) / (2 as any) as any) + (L as any) as any) as any) + (", " as any) as any) + ((((-1 as any) * (d as any) as any) / (2 as any) as any) + (w as any) as any) as any) + (")" as any)), w += ((m as any).height as any) + (s as any), ((((((((((l as any).attr as any)("class", "divider") as any).attr as any)("x1", ((-h as any) / (2 as any) as any) - (a as any)) as any).attr as any)("x2", ((h as any) / (2 as any) as any) + (a as any)) as any).attr as any)("y1", ((((-d as any) / (2 as any) as any) - (a as any) as any) + (i as any) as any) + (w as any)) as any).attr as any)("y2", ((((-d as any) / (2 as any) as any) - (a as any) as any) + (i as any) as any) + (w as any)), w += i, ((p as any).forEach as any)((E: any): any => {
      (((D as any)(E) as any).attr as any)("transform", (((("translate( " as any) + ((-h as any) / (2 as any) as any) as any) + (", " as any) as any) + (((((-1 as any) * (d as any) as any) / (2 as any) as any) + (w as any) as any) + ((i as any) / (2 as any) as any) as any) as any) + (")" as any));
      const o: any = E?.getBBox();
      w += ((o?.height ?? 0) as any) + (s as any);
    }), w += i, ((((((((((g as any).attr as any)("class", "divider") as any).attr as any)("x1", ((-h as any) / (2 as any) as any) - (a as any)) as any).attr as any)("x2", ((h as any) / (2 as any) as any) + (a as any)) as any).attr as any)("y1", ((((-d as any) / (2 as any) as any) - (a as any) as any) + (i as any) as any) + (w as any)) as any).attr as any)("y2", ((((-d as any) / (2 as any) as any) - (a as any) as any) + (i as any) as any) + (w as any)), w += i, ((x as any).forEach as any)((E: any): any => {
      (((D as any)(E) as any).attr as any)("transform", (((("translate( " as any) + ((-h as any) / (2 as any) as any) as any) + (", " as any) as any) + ((((-1 as any) * (d as any) as any) / (2 as any) as any) + (w as any) as any) as any) + (")" as any));
      const o: any = E?.getBBox();
      w += ((o?.height ?? 0) as any) + (s as any);
    }), ((((((((((((n as any).attr as any)("style", (t as any).style) as any).attr as any)("class", "outer title-state") as any).attr as any)("x", ((-h as any) / (2 as any) as any) - (a as any)) as any).attr as any)("y", (-((d as any) / (2 as any)) as any) - (a as any)) as any).attr as any)("width", (h as any) + ((t as any).padding as any)) as any).attr as any)("height", (d as any) + ((t as any).padding as any)), (I as any)(t, n), (t as any).intersect = function (this: any, E: any): any {
      return ((B as any).rect as any)(t, E);
    }, r;
  }, "class_box"),
  Kt: any = {
    rhombus: Yt,
    composite: pa,
    question: Yt,
    rect: da,
    labelRect: fa,
    rectWithTitle: xa,
    choice: aa,
    circle: ba,
    doublecircle: wa,
    stadium: ya,
    hexagon: sa,
    block_arrow: ia,
    rect_left_inv_arrow: na,
    lean_right: ca,
    lean_left: la,
    trapezoid: oa,
    inv_trapezoid: ha,
    rect_right_inv_arrow: ga,
    cylinder: ua,
    start: Sa,
    end: La,
    note: ra,
    subroutine: ma,
    fork: Ht,
    join: Ht,
    class_box: ka
  },
  nt: any = {},
  xe: any = (u as any)(async (e: any, t: any, a: any): Promise<any> => {
    let s: any, i: any;
    if ((t as any).link) {
      let c: any;
      (((R as any)() as any).securityLevel as any) === ("sandbox" as any) ? c = "_top" : (t as any).linkTarget && (c = (t as any).linkTarget || "_blank"), s = ((((((e as any).insert as any)("svg:a") as any).attr as any)("xlink:href", (t as any).link) as any).attr as any)("target", c), i = await ((Kt as any)[(t as any).shape] as any)(s, t, a);
    } else i = await ((Kt as any)[(t as any).shape] as any)(e, t, a), s = i;
    return (t as any).tooltip && ((i as any).attr as any)("title", (t as any).tooltip), (t as any).class && ((i as any).attr as any)("class", ("node default " as any) + ((t as any).class as any)), (nt as any)[(t as any).id] = s, (t as any).haveCallback && (((nt as any)[(t as any).id] as any).attr as any)("class", ((((nt as any)[(t as any).id] as any).attr as any)("class") as any) + (" clickable" as any)), s;
  }, "insertNode"),
  va: any = (u as any)((e: any): any => {
    const t: any = (nt as any)[(e as any).id];
    ((k as any).trace as any)("Transforming node", (e as any).diff, e, (((("translate(" as any) + ((((e as any).x as any) - (((e as any).width as any) / (2 as any) as any) as any) - (5 as any) as any) as any) + (", " as any) as any) + (((e as any).width as any) / (2 as any) as any) as any) + (")" as any));
    const a: number = 8,
      s: any = (e as any).diff || 0;
    return (e as any).clusterNode ? ((t as any).attr as any)("transform", (((("translate(" as any) + ((((e as any).x as any) + (s as any) as any) - (((e as any).width as any) / (2 as any) as any) as any) as any) + (", " as any) as any) + ((((e as any).y as any) - (((e as any).height as any) / (2 as any) as any) as any) - (a as any) as any) as any) + (")" as any)) : ((t as any).attr as any)("transform", (((("translate(" as any) + ((e as any).x as any) as any) + (", " as any) as any) + ((e as any).y as any) as any) + (")" as any)), s;
  }, "positionNode");
function Nt(this: any, e: any, t: any, a: any = !1): any {
  const s: any = e;
  let i: any = "default";
  ((s?.classes?.length || 0) as any) > (0 as any) && (i = (((s?.classes ?? []) as any).join as any)(" ")), i = (i as any) + (" flowchart-label" as any);
  let c: any = 0,
    r: any = "",
    n: any;
  switch ((s as any).type) {
    case "round":
      c = 5, r = "rect";
      break;
    case "composite":
      c = 0, r = "composite", n = 0;
      break;
    case "square":
      r = "rect";
      break;
    case "diamond":
      r = "question";
      break;
    case "hexagon":
      r = "hexagon";
      break;
    case "block_arrow":
      r = "block_arrow";
      break;
    case "odd":
      r = "rect_left_inv_arrow";
      break;
    case "lean_right":
      r = "lean_right";
      break;
    case "lean_left":
      r = "lean_left";
      break;
    case "trapezoid":
      r = "trapezoid";
      break;
    case "inv_trapezoid":
      r = "inv_trapezoid";
      break;
    case "rect_left_inv_arrow":
      r = "rect_left_inv_arrow";
      break;
    case "circle":
      r = "circle";
      break;
    case "ellipse":
      r = "ellipse";
      break;
    case "stadium":
      r = "stadium";
      break;
    case "subroutine":
      r = "subroutine";
      break;
    case "cylinder":
      r = "cylinder";
      break;
    case "group":
      r = "rect";
      break;
    case "doublecircle":
      r = "doublecircle";
      break;
    default:
      r = "rect";
  }
  const l: any = (Ge as any)(s?.styles ?? []),
    g: any = (s as any).label,
    h: any = (s as any).size ?? {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    },
    d: any = ((t as any).getDiagramId as any)();
  return {
    labelStyle: (l as any).labelStyle,
    shape: r,
    labelText: g,
    rx: c,
    ry: c,
    class: i,
    style: (l as any).style,
    id: (s as any).id,
    domId: d ? `${d}-${(s as any).id}` : (s as any).id,
    directions: (s as any).directions,
    width: (h as any).width,
    height: (h as any).height,
    x: (h as any).x,
    y: (h as any).y,
    positioned: a,
    intersect: void 0,
    type: (s as any).type,
    padding: n ?? (rt as any)()?.block?.padding ?? 0,
    widthInColumns: (s as any).widthInColumns ?? 1
  };
}
(u as any)(Nt, "getNodeFromBlock");
async function ye(this: any, e: any, t: any, a: any): Promise<any> {
  const s: any = (Nt as any)(t, a, !1);
  if (((s as any).type as any) === ("group" as any)) return;
  const i: any = (rt as any)(),
    c: any = await (xe as any)(e, s, {
      config: i
    }),
    r: any = ((((c as any).node as any)() as any).getBBox as any)(),
    n: any = ((a as any).getBlock as any)((s as any).id);
  (n as any).size = {
    width: (r as any).width,
    height: (r as any).height,
    x: 0,
    y: 0,
    node: c
  }, ((a as any).setBlock as any)(n), ((c as any).remove as any)();
}
(u as any)(ye, "calculateBlockSize");
async function be(this: any, e: any, t: any, a: any): Promise<any> {
  const s: any = (Nt as any)(t, a, !0);
  if (((((a as any).getBlock as any)((s as any).id) as any).type as any) !== ("space" as any)) {
    const c: any = (rt as any)();
    await (xe as any)(e, s, {
      config: c
    }), (t as any).intersect = s?.intersect, (va as any)(s);
  }
}
(u as any)(be, "insertBlockPositioned");
async function ht(this: any, e: any, t: any, a: any, s: any): Promise<any> {
  for (const i of t) await (s as any)(e, i, a), (i as any).children && (await (ht as any)(e, (i as any).children, a, s));
}
(u as any)(ht, "performOperations");
async function we(this: any, e: any, t: any, a: any): Promise<any> {
  await (ht as any)(e, t, a, ye);
}
(u as any)(we, "calculateBlockSizes");
async function me(this: any, e: any, t: any, a: any): Promise<any> {
  await (ht as any)(e, t, a, be);
}
(u as any)(me, "insertBlocks");
async function Se(this: any, e: any, t: any, a: any, s: any, i: any): Promise<any> {
  const c: any = new (je as any)({
    multigraph: !0,
    compound: !0
  });
  ((c as any).setGraph as any)({
    rankdir: "TB",
    nodesep: 10,
    ranksep: 10,
    marginx: 8,
    marginy: 8
  });
  for (const r of a) (r as any).size && ((c as any).setNode as any)((r as any).id, {
    width: ((r as any).size as any).width,
    height: ((r as any).size as any).height,
    intersect: (r as any).intersect
  });
  for (const r of t) if ((r as any).start && (r as any).end) {
    const n: any = ((s as any).getBlock as any)((r as any).start),
      l: any = ((s as any).getBlock as any)((r as any).end);
    if (n?.size && l?.size) {
      const g: any = (n as any).size,
        h: any = (l as any).size,
        d: any = [{
          x: (g as any).x,
          y: (g as any).y
        }, {
          x: ((g as any).x as any) + ((((h as any).x as any) - ((g as any).x as any) as any) / (2 as any) as any),
          y: ((g as any).y as any) + ((((h as any).y as any) - ((g as any).y as any) as any) / (2 as any) as any)
        }, {
          x: (h as any).x,
          y: (h as any).y
        }],
        b: any = i ? `${i}-${(r as any).id}` : (r as any).id,
        w: any = ((r as any).thickness as any) === ("thick" as any) ? "edge-thickness-thick" : "edge-thickness-normal",
        y: any = ((r as any).pattern as any) === ("dotted" as any) ? "edge-pattern-dotted" : "edge-pattern-solid",
        v: any = `${w} ${y} flowchart-link LS-a1 LE-b1`;
      (Vr as any)(e, {
        v: (r as any).start,
        w: (r as any).end,
        name: b
      }, {
        ...r,
        id: b,
        arrowTypeEnd: (r as any).arrowTypeEnd,
        arrowTypeStart: (r as any).arrowTypeStart,
        points: d,
        classes: v
      }, void 0, "block", c, i), (r as any).label && (await (Hr as any)(e, {
        ...r,
        label: (r as any).label,
        labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
        arrowTypeEnd: (r as any).arrowTypeEnd,
        arrowTypeStart: (r as any).arrowTypeStart,
        points: d,
        classes: v
      }), (Kr as any)({
        ...r,
        x: ((d as any)[1] as any).x,
        y: ((d as any)[1] as any).y
      }, {
        originalPath: d
      }));
    }
  }
}
(u as any)(Se, "insertEdges");
var Ea: any = (u as any)(function (this: any, e: any, t: any): any {
    return (((t as any).db as any).getClasses as any)();
  }, "getClasses"),
  _a: any = (u as any)(async function (this: any, e: any, t: any, a: any, s: any): Promise<any> {
    const {
        securityLevel: i,
        block: c
      }: any = (rt as any)(),
      r: any = (s as any).db;
    ((r as any).setDiagramId as any)(t);
    let n: any;
    (i as any) === ("sandbox" as any) && (n = (D as any)(("#i" as any) + (t as any)));
    const l: any = (i as any) === ("sandbox" as any) ? (D as any)((((((n as any).nodes as any)() as any)[0] as any).contentDocument as any).body) : (D as any)("body"),
      g: any = (i as any) === ("sandbox" as any) ? ((l as any).select as any)(`[id="${t}"]`) : (D as any)(`[id="${t}"]`);
    (Mr as any)(g, ["point", "circle", "cross"], (s as any).type, t);
    const d: any = ((r as any).getBlocks as any)(),
      b: any = ((r as any).getBlocksFlat as any)(),
      w: any = ((r as any).getEdges as any)(),
      y: any = ((((g as any).insert as any)("g") as any).attr as any)("class", "block");
    await (we as any)(y, d, r);
    const v: any = (oe as any)(r);
    if (await (me as any)(y, d, r), await (Se as any)(y, w, b, r, t), v) {
      const S: any = v,
        N: any = ((Math as any).max as any)(1, ((Math as any).round as any)((.125 as any) * (((S as any).width as any) / ((S as any).height as any) as any))),
        _: any = (((S as any).height as any) + (N as any) as any) + (10 as any),
        T: any = ((S as any).width as any) + (10 as any),
        {
          useMaxWidth: m
        }: any = c;
      (Pe as any)(g, _, T, !!m), ((k as any).debug as any)("Here Bounds", v, S), ((g as any).attr as any)("viewBox", `${((S as any).x as any) - (5 as any)} ${((S as any).y as any) - (5 as any)} ${((S as any).width as any) + (10 as any)} ${((S as any).height as any) + (10 as any)}`);
    }
  }, "draw"),
  Ta: any = {
    draw: _a,
    getClasses: Ea
  },
  Oa: any = {
    parser: ar,
    db: kr,
    renderer: Ta,
    styles: Er
  };
export { Oa as diagram };
//# debugId=9cd5e8e2-5c59-4cd9-9364-8ae82a73e537
