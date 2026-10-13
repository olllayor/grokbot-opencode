declare var crypto: any;
declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "b169587c-14c2-48f0-88dd-fdaca21358bf", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-b169587c-14c2-48f0-88dd-fdaca21358bf");
  } catch (e: any) {}
} as any)();
import { g as le } from "./chunk-chunk-XXDRQBXY-DVdINg3t.js";
import { s as he } from "./chunk-chunk-VR4S4FIN-HF2Hbh9A.js";
import { _ as h, l as C, v as de, x as ge, z as ue, D as j, c as B, i as G, b6 as pe, aa as fe, ab as me, ac as ye } from "./chunk-mermaid.core-B9Iu5CoE.js";
import "./index.eager-vendor-Qbf9YA6n.js";
const _: any = [];
for (let t: any = 0; (t as any) < (256 as any); ++t) ((_ as any).push as any)((((((t as any) + (256 as any) as any).toString as any)(16) as any).slice as any)(1));
function Ee(this: any, t: any, e: any = 0): any {
  return ((((((((((((((((((((((_ as any)[(t as any)[(e as any) + (0 as any)]] as any) + ((_ as any)[(t as any)[(e as any) + (1 as any)]] as any) as any) + ((_ as any)[(t as any)[(e as any) + (2 as any)]] as any) as any) + ((_ as any)[(t as any)[(e as any) + (3 as any)]] as any) as any) + ("-" as any) as any) + ((_ as any)[(t as any)[(e as any) + (4 as any)]] as any) as any) + ((_ as any)[(t as any)[(e as any) + (5 as any)]] as any) as any) + ("-" as any) as any) + ((_ as any)[(t as any)[(e as any) + (6 as any)]] as any) as any) + ((_ as any)[(t as any)[(e as any) + (7 as any)]] as any) as any) + ("-" as any) as any) + ((_ as any)[(t as any)[(e as any) + (8 as any)]] as any) as any) + ((_ as any)[(t as any)[(e as any) + (9 as any)]] as any) as any) + ("-" as any) as any) + ((_ as any)[(t as any)[(e as any) + (10 as any)]] as any) as any) + ((_ as any)[(t as any)[(e as any) + (11 as any)]] as any) as any) + ((_ as any)[(t as any)[(e as any) + (12 as any)]] as any) as any) + ((_ as any)[(t as any)[(e as any) + (13 as any)]] as any) as any) + ((_ as any)[(t as any)[(e as any) + (14 as any)]] as any) as any) + ((_ as any)[(t as any)[(e as any) + (15 as any)]] as any) as any).toLowerCase as any)();
}
let q: any;
const _e: any = new (Uint8Array as any)(16);
function be(this: any): any {
  if (!q) {
    if ((typeof crypto as any) > ("u" as any) || !(crypto as any).getRandomValues) throw new (Error as any)("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    q = (((crypto as any).getRandomValues as any).bind as any)(crypto);
  }
  return (q as any)(_e);
}
const ke: any = (typeof crypto as any) < ("u" as any) && (crypto as any).randomUUID && (((crypto as any).randomUUID as any).bind as any)(crypto),
  ie: any = {
    randomUUID: ke
  };
function Se(this: any, t: any, e: any, a: any): any {
  if ((ie as any).randomUUID && !t) return ((ie as any).randomUUID as any)();
  t = t || {};
  const l: any = (t as any).random ?? (t as any).rng?.() ?? (be as any)();
  if (((l as any).length as any) < (16 as any)) throw new (Error as any)("Random bytes length must be >= 16");
  return (l as any)[6] = ((((l as any)[6] as any) & (15 as any)) as any) | (64 as any), (l as any)[8] = ((((l as any)[8] as any) & (63 as any)) as any) | (128 as any), (Ee as any)(l);
}
var J: any = (function (this: any): any {
  var t: any = (h as any)(function (this: any, L: any, s: any, i: any, o: any): any {
      for (i = i || {}, o = (L as any).length; o--; (i as any)[(L as any)[o]] = s);
      return i;
    }, "o"),
    e: any = [1, 4],
    a: any = [1, 13],
    l: any = [1, 12],
    n: any = [1, 15],
    d: any = [1, 16],
    f: any = [1, 20],
    y: any = [1, 19],
    E: any = [6, 7, 8],
    b: any = [1, 26],
    v: any = [1, 24],
    R: any = [1, 25],
    g: any = [6, 7, 11],
    A: any = [1, 6, 13, 15, 16, 19, 22],
    K: any = [1, 33],
    Q: any = [1, 34],
    $: any = [1, 6, 7, 11, 13, 15, 16, 19, 22],
    H: any = {
      trace: (h as any)(function (this: any): any {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        mindMap: 4,
        spaceLines: 5,
        SPACELINE: 6,
        NL: 7,
        MINDMAP: 8,
        document: 9,
        stop: 10,
        EOF: 11,
        statement: 12,
        SPACELIST: 13,
        node: 14,
        ICON: 15,
        CLASS: 16,
        nodeWithId: 17,
        nodeWithoutId: 18,
        NODE_DSTART: 19,
        NODE_DESCR: 20,
        NODE_DEND: 21,
        NODE_ID: 22,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        6: "SPACELINE",
        7: "NL",
        8: "MINDMAP",
        11: "EOF",
        13: "SPACELIST",
        15: "ICON",
        16: "CLASS",
        19: "NODE_DSTART",
        20: "NODE_DESCR",
        21: "NODE_DEND",
        22: "NODE_ID"
      },
      productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 2], [12, 2], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [18, 3], [17, 1], [17, 4]],
      performAction: (h as any)(function (this: any, s: any, i: any, o: any, c: any, p: any, r: any, U: any): any {
        var u: any = ((r as any).length as any) - (1 as any);
        switch (p) {
          case 6:
          case 7:
            return c;
          case 8:
            ((((c as any).getLogger as any)() as any).trace as any)("Stop NL ");
            break;
          case 9:
            ((((c as any).getLogger as any)() as any).trace as any)("Stop EOF ");
            break;
          case 11:
            ((((c as any).getLogger as any)() as any).trace as any)("Stop NL2 ");
            break;
          case 12:
            ((((c as any).getLogger as any)() as any).trace as any)("Stop EOF2 ");
            break;
          case 15:
            ((((c as any).getLogger as any)() as any).info as any)("Node: ", ((r as any)[u] as any).id), ((c as any).addNode as any)(((r as any)[(u as any) - (1 as any)] as any).length, ((r as any)[u] as any).id, ((r as any)[u] as any).descr, ((r as any)[u] as any).type);
            break;
          case 16:
            ((((c as any).getLogger as any)() as any).trace as any)("Icon: ", (r as any)[u]), ((c as any).decorateNode as any)({
              icon: (r as any)[u]
            });
            break;
          case 17:
          case 21:
            ((c as any).decorateNode as any)({
              class: (r as any)[u]
            });
            break;
          case 18:
            ((((c as any).getLogger as any)() as any).trace as any)("SPACELIST");
            break;
          case 19:
            ((((c as any).getLogger as any)() as any).trace as any)("Node: ", ((r as any)[u] as any).id), ((c as any).addNode as any)(0, ((r as any)[u] as any).id, ((r as any)[u] as any).descr, ((r as any)[u] as any).type);
            break;
          case 20:
            ((c as any).decorateNode as any)({
              icon: (r as any)[u]
            });
            break;
          case 25:
            ((((c as any).getLogger as any)() as any).trace as any)("node found ..", (r as any)[(u as any) - (2 as any)]), (this as any).$ = {
              id: (r as any)[(u as any) - (1 as any)],
              descr: (r as any)[(u as any) - (1 as any)],
              type: ((c as any).getType as any)((r as any)[(u as any) - (2 as any)], (r as any)[u])
            };
            break;
          case 26:
            (this as any).$ = {
              id: (r as any)[u],
              descr: (r as any)[u],
              type: ((c as any).nodeType as any).DEFAULT
            };
            break;
          case 27:
            ((((c as any).getLogger as any)() as any).trace as any)("node found ..", (r as any)[(u as any) - (3 as any)]), (this as any).$ = {
              id: (r as any)[(u as any) - (3 as any)],
              descr: (r as any)[(u as any) - (1 as any)],
              type: ((c as any).getType as any)((r as any)[(u as any) - (2 as any)], (r as any)[u])
            };
            break;
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: 2,
        5: 3,
        6: [1, 5],
        8: e
      }, {
        1: [3]
      }, {
        1: [2, 1]
      }, {
        4: 6,
        6: [1, 7],
        7: [1, 8],
        8: e
      }, {
        6: a,
        7: [1, 10],
        9: 9,
        12: 11,
        13: l,
        14: 14,
        15: n,
        16: d,
        17: 17,
        18: 18,
        19: f,
        22: y
      }, (t as any)(E, [2, 3]), {
        1: [2, 2]
      }, (t as any)(E, [2, 4]), (t as any)(E, [2, 5]), {
        1: [2, 6],
        6: a,
        12: 21,
        13: l,
        14: 14,
        15: n,
        16: d,
        17: 17,
        18: 18,
        19: f,
        22: y
      }, {
        6: a,
        9: 22,
        12: 11,
        13: l,
        14: 14,
        15: n,
        16: d,
        17: 17,
        18: 18,
        19: f,
        22: y
      }, {
        6: b,
        7: v,
        10: 23,
        11: R
      }, (t as any)(g, [2, 22], {
        17: 17,
        18: 18,
        14: 27,
        15: [1, 28],
        16: [1, 29],
        19: f,
        22: y
      }), (t as any)(g, [2, 18]), (t as any)(g, [2, 19]), (t as any)(g, [2, 20]), (t as any)(g, [2, 21]), (t as any)(g, [2, 23]), (t as any)(g, [2, 24]), (t as any)(g, [2, 26], {
        19: [1, 30]
      }), {
        20: [1, 31]
      }, {
        6: b,
        7: v,
        10: 32,
        11: R
      }, {
        1: [2, 7],
        6: a,
        12: 21,
        13: l,
        14: 14,
        15: n,
        16: d,
        17: 17,
        18: 18,
        19: f,
        22: y
      }, (t as any)(A, [2, 14], {
        7: K,
        11: Q
      }), (t as any)($, [2, 8]), (t as any)($, [2, 9]), (t as any)($, [2, 10]), (t as any)(g, [2, 15]), (t as any)(g, [2, 16]), (t as any)(g, [2, 17]), {
        20: [1, 35]
      }, {
        21: [1, 36]
      }, (t as any)(A, [2, 13], {
        7: K,
        11: Q
      }), (t as any)($, [2, 11]), (t as any)($, [2, 12]), {
        21: [1, 37]
      }, (t as any)(g, [2, 25]), (t as any)(g, [2, 27])],
      defaultActions: {
        2: [2, 1],
        6: [2, 2]
      },
      parseError: (h as any)(function (this: any, s: any, i: any): any {
        if ((i as any).recoverable) ((this as any).trace as any)(s);else {
          var o: any = new (Error as any)(s);
          throw (o as any).hash = i, o;
        }
      }, "parseError"),
      parse: (h as any)(function (this: any, s: any): any {
        var z: any;
        var i: any = this,
          o: any = [0],
          c: any = [],
          p: any = [null],
          r: any = [],
          U: any = (this as any).table,
          u: any = "",
          M: any = 0,
          Z: any = 0,
          re: number = 2,
          ee: number = 1,
          oe: any = (((r as any).slice as any).call as any)(arguments, 1),
          m: any = ((Object as any).create as any)((this as any).lexer),
          T: any = {
            yy: {}
          };
        for (z in (this as any).yy) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).yy, z) && (((T as any).yy as any)[z] = ((this as any).yy as any)[z]);
        ((m as any).setInput as any)(s, (T as any).yy), ((T as any).yy as any).lexer = m, ((T as any).yy as any).parser = this, (typeof (m as any).yylloc as any) > ("u" as any) && ((m as any).yylloc = {});
        var W: any = (m as any).yylloc;
        ((r as any).push as any)(W);
        var ae: any = (m as any).options && ((m as any).options as any).ranges;
        (typeof ((T as any).yy as any).parseError as any) == ("function" as any) ? (this as any).parseError = ((T as any).yy as any).parseError : (this as any).parseError = (((Object as any).getPrototypeOf as any)(this) as any).parseError;
        function ce(this: any, S: any): any {
          (o as any).length = ((o as any).length as any) - ((2 as any) * (S as any) as any), (p as any).length = ((p as any).length as any) - (S as any), (r as any).length = ((r as any).length as any) - (S as any);
        }
        (h as any)(ce, "popStack");
        function te(this: any): any {
          var S: any;
          return S = ((c as any).pop as any)() || ((m as any).lex as any)() || ee, (typeof S as any) != ("number" as any) && (S instanceof Array && (c = S, S = ((c as any).pop as any)()), S = ((i as any).symbols_ as any)[S] || S), S;
        }
        (h as any)(te, "lex");
        for (var k: any, O: any, x: any, X: any, I: any = {}, V: any, D: any, ne: any, F: any;;) {
          if (O = (o as any)[((o as any).length as any) - (1 as any)], ((this as any).defaultActions as any)[O] ? x = ((this as any).defaultActions as any)[O] : (((k as any) === (null as any) || (typeof k as any) > ("u" as any)) && (k = (te as any)()), x = (U as any)[O] && ((U as any)[O] as any)[k]), (typeof x as any) > ("u" as any) || !(x as any).length || !(x as any)[0]) {
            var Y: any = "";
            F = [];
            for (V in (U as any)[O]) ((this as any).terminals_ as any)[V] && (V as any) > (re as any) && ((F as any).push as any)((("'" as any) + (((this as any).terminals_ as any)[V] as any) as any) + ("'" as any));
            (m as any).showPosition ? Y = (((((((("Parse error on line " as any) + ((M as any) + (1 as any) as any) as any) + (`:
` as any) as any) + (((m as any).showPosition as any)() as any) as any) + (`
Expecting ` as any) as any) + (((F as any).join as any)(", ") as any) as any) + (", got '" as any) as any) + ((((this as any).terminals_ as any)[k] || k) as any) as any) + ("'" as any) : Y = ((("Parse error on line " as any) + ((M as any) + (1 as any) as any) as any) + (": Unexpected " as any) as any) + (((k as any) == (ee as any) ? "end of input" : (("'" as any) + ((((this as any).terminals_ as any)[k] || k) as any) as any) + ("'" as any)) as any), ((this as any).parseError as any)(Y, {
              text: (m as any).match,
              token: ((this as any).terminals_ as any)[k] || k,
              line: (m as any).yylineno,
              loc: W,
              expected: F
            });
          }
          if ((x as any)[0] instanceof Array && ((x as any).length as any) > (1 as any)) throw new (Error as any)(((("Parse Error: multiple actions possible at state: " as any) + (O as any) as any) + (", token: " as any) as any) + (k as any));
          switch ((x as any)[0]) {
            case 1:
              ((o as any).push as any)(k), ((p as any).push as any)((m as any).yytext), ((r as any).push as any)((m as any).yylloc), ((o as any).push as any)((x as any)[1]), k = null, Z = (m as any).yyleng, u = (m as any).yytext, M = (m as any).yylineno, W = (m as any).yylloc;
              break;
            case 2:
              if (D = (((this as any).productions_ as any)[(x as any)[1]] as any)[1], (I as any).$ = (p as any)[((p as any).length as any) - (D as any)], (I as any)._$ = {
                first_line: ((r as any)[((r as any).length as any) - ((D || 1) as any)] as any).first_line,
                last_line: ((r as any)[((r as any).length as any) - (1 as any)] as any).last_line,
                first_column: ((r as any)[((r as any).length as any) - ((D || 1) as any)] as any).first_column,
                last_column: ((r as any)[((r as any).length as any) - (1 as any)] as any).last_column
              }, ae && (((I as any)._$ as any).range = [(((r as any)[((r as any).length as any) - ((D || 1) as any)] as any).range as any)[0], (((r as any)[((r as any).length as any) - (1 as any)] as any).range as any)[1]]), X = (((this as any).performAction as any).apply as any)(I, (([u, Z, M, (T as any).yy, (x as any)[1], p, r] as any).concat as any)(oe)), (typeof X as any) < ("u" as any)) return X;
              D && (o = ((o as any).slice as any)(0, ((-1 as any) * (D as any) as any) * (2 as any)), p = ((p as any).slice as any)(0, (-1 as any) * (D as any)), r = ((r as any).slice as any)(0, (-1 as any) * (D as any))), ((o as any).push as any)((((this as any).productions_ as any)[(x as any)[1]] as any)[0]), ((p as any).push as any)((I as any).$), ((r as any).push as any)((I as any)._$), ne = ((U as any)[(o as any)[((o as any).length as any) - (2 as any)]] as any)[(o as any)[((o as any).length as any) - (1 as any)]], ((o as any).push as any)(ne);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }, "parse")
    },
    se: any = (function (this: any): any {
      var L: any = {
        EOF: 1,
        parseError: (h as any)(function (this: any, i: any, o: any): any {
          if (((this as any).yy as any).parser) ((((this as any).yy as any).parser as any).parseError as any)(i, o);else throw new (Error as any)(i);
        }, "parseError"),
        setInput: (h as any)(function (this: any, s: any, i: any): any {
          return (this as any).yy = i || (this as any).yy || {}, (this as any)._input = s, (this as any)._more = (this as any)._backtrack = (this as any).done = !1, (this as any).yylineno = (this as any).yyleng = 0, (this as any).yytext = (this as any).matched = (this as any).match = "", (this as any).conditionStack = ["INITIAL"], (this as any).yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [0, 0]), (this as any).offset = 0, this;
        }, "setInput"),
        input: (h as any)(function (this: any): any {
          var s: any = ((this as any)._input as any)[0];
          (this as any).yytext += s, (this as any).yyleng++, (this as any).offset++, (this as any).match += s, (this as any).matched += s;
          var i: any = ((s as any).match as any)(/(?:\r\n?|\n).*/g);
          return i ? ((this as any).yylineno++, ((this as any).yylloc as any).last_line++) : ((this as any).yylloc as any).last_column++, ((this as any).options as any).ranges && (((this as any).yylloc as any).range as any)[1]++, (this as any)._input = (((this as any)._input as any).slice as any)(1), s;
        }, "input"),
        unput: (h as any)(function (this: any, s: any): any {
          var i: any = (s as any).length,
            o: any = ((s as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any)._input = (s as any) + ((this as any)._input as any), (this as any).yytext = (((this as any).yytext as any).substr as any)(0, (((this as any).yytext as any).length as any) - (i as any)), (this as any).offset -= i;
          var c: any = (((this as any).match as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any).match = (((this as any).match as any).substr as any)(0, (((this as any).match as any).length as any) - (1 as any)), (this as any).matched = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (1 as any)), ((o as any).length as any) - (1 as any) && ((this as any).yylineno -= ((o as any).length as any) - (1 as any));
          var p: any = ((this as any).yylloc as any).range;
          return (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).first_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).first_column,
            last_column: o ? (((((o as any).length as any) === ((c as any).length as any) ? ((this as any).yylloc as any).first_column : 0) as any) + (((c as any)[((c as any).length as any) - ((o as any).length as any)] as any).length as any) as any) - (((o as any)[0] as any).length as any) : (((this as any).yylloc as any).first_column as any) - (i as any)
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(p as any)[0], (((p as any)[0] as any) + ((this as any).yyleng as any) as any) - (i as any)]), (this as any).yyleng = ((this as any).yytext as any).length, this;
        }, "unput"),
        more: (h as any)(function (this: any): any {
          return (this as any)._more = !0, this;
        }, "more"),
        reject: (h as any)(function (this: any): any {
          if (((this as any).options as any).backtrack_lexer) (this as any)._backtrack = !0;else return ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
          return this;
        }, "reject"),
        less: (h as any)(function (this: any, s: any): any {
          ((this as any).unput as any)((((this as any).match as any).slice as any)(s));
        }, "less"),
        pastInput: (h as any)(function (this: any): any {
          var s: any = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (((this as any).match as any).length as any));
          return ((((s as any).length as any) > (20 as any) ? "..." : "") as any) + (((((s as any).substr as any)(-20) as any).replace as any)(/\n/g, "") as any);
        }, "pastInput"),
        upcomingInput: (h as any)(function (this: any): any {
          var s: any = (this as any).match;
          return ((s as any).length as any) < (20 as any) && (s += (((this as any)._input as any).substr as any)(0, (20 as any) - ((s as any).length as any))), (((((s as any).substr as any)(0, 20) as any) + ((((s as any).length as any) > (20 as any) ? "..." : "") as any) as any).replace as any)(/\n/g, "");
        }, "upcomingInput"),
        showPosition: (h as any)(function (this: any): any {
          var s: any = ((this as any).pastInput as any)(),
            i: any = ((new (Array as any)(((s as any).length as any) + (1 as any)) as any).join as any)("-");
          return ((((s as any) + (((this as any).upcomingInput as any)() as any) as any) + (`
` as any) as any) + (i as any) as any) + ("^" as any);
        }, "showPosition"),
        test_match: (h as any)(function (this: any, s: any, i: any): any {
          var r: any;
          var o: any, c: any, p: any;
          if (((this as any).options as any).backtrack_lexer && (p = {
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
          }, ((this as any).options as any).ranges && (((p as any).yylloc as any).range = ((((this as any).yylloc as any).range as any).slice as any)(0))), c = (((s as any)[0] as any).match as any)(/(?:\r\n?|\n).*/g), c && ((this as any).yylineno += (c as any).length), (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).last_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).last_column,
            last_column: c ? (((c as any)[((c as any).length as any) - (1 as any)] as any).length as any) - ((((((c as any)[((c as any).length as any) - (1 as any)] as any).match as any)(/\r?\n?/) as any)[0] as any).length as any) : (((this as any).yylloc as any).last_column as any) + (((s as any)[0] as any).length as any)
          }, (this as any).yytext += (s as any)[0], (this as any).match += (s as any)[0], (this as any).matches = s, (this as any).yyleng = ((this as any).yytext as any).length, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(this as any).offset, (this as any).offset += (this as any).yyleng]), (this as any)._more = !1, (this as any)._backtrack = !1, (this as any)._input = (((this as any)._input as any).slice as any)(((s as any)[0] as any).length), (this as any).matched += (s as any)[0], o = (((this as any).performAction as any).call as any)(this, (this as any).yy, this, i, ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]), (this as any).done && (this as any)._input && ((this as any).done = !1), o) return o;
          if ((this as any)._backtrack) {
            for (r in p) (this as any)[r] = (p as any)[r];
            return !1;
          }
          return !1;
        }, "test_match"),
        next: (h as any)(function (this: any): any {
          if ((this as any).done) return (this as any).EOF;
          (this as any)._input || ((this as any).done = !0);
          var s: any, i: any, o: any, c: any;
          (this as any)._more || ((this as any).yytext = "", (this as any).match = "");
          for (var p: any = ((this as any)._currentRules as any)(), r: any = 0; (r as any) < ((p as any).length as any); r++) if (o = (((this as any)._input as any).match as any)(((this as any).rules as any)[(p as any)[r]]), o && (!i || (((o as any)[0] as any).length as any) > (((i as any)[0] as any).length as any))) {
            if (i = o, c = r, ((this as any).options as any).backtrack_lexer) {
              if (s = ((this as any).test_match as any)(o, (p as any)[r]), (s as any) !== (!1 as any)) return s;
              if ((this as any)._backtrack) {
                i = !1;
                continue;
              } else return !1;
            } else if (!((this as any).options as any).flex) break;
          }
          return i ? (s = ((this as any).test_match as any)(i, (p as any)[c]), (s as any) !== (!1 as any) ? s : !1) : ((this as any)._input as any) === ("" as any) ? (this as any).EOF : ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. Unrecognized text.
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
        }, "next"),
        lex: (h as any)(function (this: any): any {
          var i: any = ((this as any).next as any)();
          return i || ((this as any).lex as any)();
        }, "lex"),
        begin: (h as any)(function (this: any, i: any): any {
          (((this as any).conditionStack as any).push as any)(i);
        }, "begin"),
        popState: (h as any)(function (this: any): any {
          var i: any = (((this as any).conditionStack as any).length as any) - (1 as any);
          return (i as any) > (0 as any) ? (((this as any).conditionStack as any).pop as any)() : ((this as any).conditionStack as any)[0];
        }, "popState"),
        _currentRules: (h as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length && ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)] ? (((this as any).conditions as any)[((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]] as any).rules : (((this as any).conditions as any).INITIAL as any).rules;
        }, "_currentRules"),
        topState: (h as any)(function (this: any, i: any): any {
          return i = ((((this as any).conditionStack as any).length as any) - (1 as any) as any) - (((Math as any).abs as any)(i || 0) as any), (i as any) >= (0 as any) ? ((this as any).conditionStack as any)[i] : "INITIAL";
        }, "topState"),
        pushState: (h as any)(function (this: any, i: any): any {
          ((this as any).begin as any)(i);
        }, "pushState"),
        stateStackSize: (h as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": !0
        },
        performAction: (h as any)(function (this: any, i: any, o: any, c: any, p: any): any {
          switch (c) {
            case 0:
              return ((((i as any).getLogger as any)() as any).trace as any)("Found comment", (o as any).yytext), 6;
            case 1:
              return 8;
            case 2:
              ((this as any).begin as any)("CLASS");
              break;
            case 3:
              return ((this as any).popState as any)(), 16;
            case 4:
              ((this as any).popState as any)();
              break;
            case 5:
              ((((i as any).getLogger as any)() as any).trace as any)("Begin icon"), ((this as any).begin as any)("ICON");
              break;
            case 6:
              return ((((i as any).getLogger as any)() as any).trace as any)("SPACELINE"), 6;
            case 7:
              return 7;
            case 8:
              return 15;
            case 9:
              ((((i as any).getLogger as any)() as any).trace as any)("end icon"), ((this as any).popState as any)();
              break;
            case 10:
              return ((((i as any).getLogger as any)() as any).trace as any)("Exploding node"), ((this as any).begin as any)("NODE"), 19;
            case 11:
              return ((((i as any).getLogger as any)() as any).trace as any)("Cloud"), ((this as any).begin as any)("NODE"), 19;
            case 12:
              return ((((i as any).getLogger as any)() as any).trace as any)("Explosion Bang"), ((this as any).begin as any)("NODE"), 19;
            case 13:
              return ((((i as any).getLogger as any)() as any).trace as any)("Cloud Bang"), ((this as any).begin as any)("NODE"), 19;
            case 14:
              return ((this as any).begin as any)("NODE"), 19;
            case 15:
              return ((this as any).begin as any)("NODE"), 19;
            case 16:
              return ((this as any).begin as any)("NODE"), 19;
            case 17:
              return ((this as any).begin as any)("NODE"), 19;
            case 18:
              return 13;
            case 19:
              return 22;
            case 20:
              return 11;
            case 21:
              ((this as any).begin as any)("NSTR2");
              break;
            case 22:
              return "NODE_DESCR";
            case 23:
              ((this as any).popState as any)();
              break;
            case 24:
              ((((i as any).getLogger as any)() as any).trace as any)("Starting NSTR"), ((this as any).begin as any)("NSTR");
              break;
            case 25:
              return ((((i as any).getLogger as any)() as any).trace as any)("description:", (o as any).yytext), "NODE_DESCR";
            case 26:
              ((this as any).popState as any)();
              break;
            case 27:
              return ((this as any).popState as any)(), ((((i as any).getLogger as any)() as any).trace as any)("node end ))"), "NODE_DEND";
            case 28:
              return ((this as any).popState as any)(), ((((i as any).getLogger as any)() as any).trace as any)("node end )"), "NODE_DEND";
            case 29:
              return ((this as any).popState as any)(), ((((i as any).getLogger as any)() as any).trace as any)("node end ...", (o as any).yytext), "NODE_DEND";
            case 30:
              return ((this as any).popState as any)(), ((((i as any).getLogger as any)() as any).trace as any)("node end (("), "NODE_DEND";
            case 31:
              return ((this as any).popState as any)(), ((((i as any).getLogger as any)() as any).trace as any)("node end (-"), "NODE_DEND";
            case 32:
              return ((this as any).popState as any)(), ((((i as any).getLogger as any)() as any).trace as any)("node end (-"), "NODE_DEND";
            case 33:
              return ((this as any).popState as any)(), ((((i as any).getLogger as any)() as any).trace as any)("node end (("), "NODE_DEND";
            case 34:
              return ((this as any).popState as any)(), ((((i as any).getLogger as any)() as any).trace as any)("node end (("), "NODE_DEND";
            case 35:
              return ((((i as any).getLogger as any)() as any).trace as any)("Long description:", (o as any).yytext), 20;
            case 36:
              return ((((i as any).getLogger as any)() as any).trace as any)("Long description:", (o as any).yytext), 20;
          }
        }, "anonymous"),
        rules: [/^(?:\s*%%.*)/i, /^(?:mindmap\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i],
        conditions: {
          CLASS: {
            rules: [3, 4],
            inclusive: !1
          },
          ICON: {
            rules: [8, 9],
            inclusive: !1
          },
          NSTR2: {
            rules: [22, 23],
            inclusive: !1
          },
          NSTR: {
            rules: [25, 26],
            inclusive: !1
          },
          NODE: {
            rules: [21, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
            inclusive: !1
          },
          INITIAL: {
            rules: [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            inclusive: !0
          }
        }
      };
      return L;
    } as any)();
  (H as any).lexer = se;
  function P(this: any): any {
    (this as any).yy = {};
  }
  return (h as any)(P, "Parser"), (P as any).prototype = H, (H as any).Parser = P, new (P as any)();
} as any)();
(J as any).parser = J;
var xe: any = J,
  De: number = 12,
  N: any = {
    DEFAULT: 0,
    NO_BORDER: 0,
    ROUNDED_RECT: 1,
    RECT: 2,
    CIRCLE: 3,
    CLOUD: 4,
    BANG: 5,
    HEXAGON: 6
  },
  w: any,
  Ne: any = (w = class {
    declare baseLevel: any;
    declare nodeType: any;
    declare elements: any;
    declare count: any;
    declare nodes: any;
    [key: string]: any;
    constructor() {
      (this as any).nodes = [], (this as any).count = 0, (this as any).elements = {}, (this as any).getLogger = (((this as any).getLogger as any).bind as any)(this), (this as any).nodeType = N, ((this as any).clear as any)(), (this as any).getType = (((this as any).getType as any).bind as any)(this), (this as any).getElementById = (((this as any).getElementById as any).bind as any)(this), (this as any).getParent = (((this as any).getParent as any).bind as any)(this), (this as any).getMindmap = (((this as any).getMindmap as any).bind as any)(this), (this as any).addNode = (((this as any).addNode as any).bind as any)(this), (this as any).decorateNode = (((this as any).decorateNode as any).bind as any)(this);
    }
    clear(): any {
      (this as any).nodes = [], (this as any).count = 0, (this as any).elements = {}, (this as any).baseLevel = void 0;
    }
    getParent(e: any): any {
      for (let a: any = (((this as any).nodes as any).length as any) - (1 as any); (a as any) >= (0 as any); a--) if (((((this as any).nodes as any)[a] as any).level as any) < (e as any)) return ((this as any).nodes as any)[a];
      return null;
    }
    getMindmap(): any {
      return (((this as any).nodes as any).length as any) > (0 as any) ? ((this as any).nodes as any)[0] : null;
    }
    addNode(e: any, a: any, l: any, n: any): any {
      ((C as any).info as any)("addNode", e, a, l, n);
      let d: any = !1;
      (((this as any).nodes as any).length as any) === (0 as any) ? ((this as any).baseLevel = e, e = 0, d = !0) : ((this as any).baseLevel as any) !== (void 0 as any) && (e = (e as any) - ((this as any).baseLevel as any), d = !1);
      const f: any = (B as any)();
      let y: any = (f as any).mindmap?.padding ?? ((j as any).mindmap as any).padding;
      switch (n) {
        case ((this as any).nodeType as any).ROUNDED_RECT:
        case ((this as any).nodeType as any).RECT:
        case ((this as any).nodeType as any).HEXAGON:
          y *= 2;
          break;
      }
      const E: any = {
          id: (this as any).count++,
          nodeId: (G as any)(a, f),
          level: e,
          descr: (G as any)(l, f),
          type: n,
          children: [],
          width: (f as any).mindmap?.maxNodeWidth ?? ((j as any).mindmap as any).maxNodeWidth,
          padding: y,
          isRoot: d
        },
        b: any = ((this as any).getParent as any)(e);
      if (b) (((b as any).children as any).push as any)(E), (((this as any).nodes as any).push as any)(E);else if (d) (((this as any).nodes as any).push as any)(E);else throw new (Error as any)(`There can be only one root. No parent could be found for ("${(E as any).descr}")`);
    }
    getType(e: any, a: any): any {
      switch (((C as any).debug as any)("In get type", e, a), e) {
        case "[":
          return ((this as any).nodeType as any).RECT;
        case "(":
          return (a as any) === (")" as any) ? ((this as any).nodeType as any).ROUNDED_RECT : ((this as any).nodeType as any).CLOUD;
        case "((":
          return ((this as any).nodeType as any).CIRCLE;
        case ")":
          return ((this as any).nodeType as any).CLOUD;
        case "))":
          return ((this as any).nodeType as any).BANG;
        case "{{":
          return ((this as any).nodeType as any).HEXAGON;
        default:
          return ((this as any).nodeType as any).DEFAULT;
      }
    }
    setElementForId(e: any, a: any): any {
      ((this as any).elements as any)[e] = a;
    }
    getElementById(e: any): any {
      return ((this as any).elements as any)[e];
    }
    decorateNode(e: any): any {
      if (!e) return;
      const a: any = (B as any)(),
        l: any = ((this as any).nodes as any)[(((this as any).nodes as any).length as any) - (1 as any)];
      (e as any).icon && ((l as any).icon = (G as any)((e as any).icon, a)), (e as any).class && ((l as any).class = (G as any)((e as any).class, a));
    }
    type2Str(e: any): any {
      switch (e) {
        case ((this as any).nodeType as any).DEFAULT:
          return "no-border";
        case ((this as any).nodeType as any).RECT:
          return "rect";
        case ((this as any).nodeType as any).ROUNDED_RECT:
          return "rounded-rect";
        case ((this as any).nodeType as any).CIRCLE:
          return "circle";
        case ((this as any).nodeType as any).CLOUD:
          return "cloud";
        case ((this as any).nodeType as any).BANG:
          return "bang";
        case ((this as any).nodeType as any).HEXAGON:
          return "hexgon";
        default:
          return "no-border";
      }
    }
    assignSections(e: any, a: any): any {
      if (((e as any).level as any) === (0 as any) ? (e as any).section = void 0 : (e as any).section = a, (e as any).children) for (const [l, n] of (((e as any).children as any).entries as any)()) {
        const d: any = ((e as any).level as any) === (0 as any) ? (l as any) % ((De as any) - (1 as any) as any) : a;
        ((this as any).assignSections as any)(n, d);
      }
    }
    flattenNodes(e: any, a: any): any {
      const l: any = (B as any)(),
        n: any = ["mindmap-node"];
      ((e as any).isRoot as any) === (!0 as any) ? ((n as any).push as any)("section-root", "section--1") : ((e as any).section as any) !== (void 0 as any) && ((n as any).push as any)(`section-${(e as any).section}`), (e as any).class && ((n as any).push as any)((e as any).class);
      const d: any = ((n as any).join as any)(" "),
        f: any = (h as any)((E: any): any => {
          const v: any = ((((l as any).theme?.toLowerCase() ?? "") as any).includes as any)("redux");
          switch (E) {
            case (N as any).CIRCLE:
              return "mindmapCircle";
            case (N as any).RECT:
              return "rect";
            case (N as any).ROUNDED_RECT:
              return "rounded";
            case (N as any).CLOUD:
              return "cloud";
            case (N as any).BANG:
              return "bang";
            case (N as any).HEXAGON:
              return "hexagon";
            case (N as any).DEFAULT:
              return v ? "rounded" : "defaultMindmapNode";
            case (N as any).NO_BORDER:
            default:
              return "rect";
          }
        }, "getShapeFromType"),
        y: any = {
          id: (((e as any).id as any).toString as any)(),
          domId: ("node_" as any) + ((((e as any).id as any).toString as any)() as any),
          label: (e as any).descr,
          labelType: "markdown",
          isGroup: !1,
          shape: (f as any)((e as any).type),
          width: (e as any).width,
          height: (e as any).height ?? 0,
          padding: (e as any).padding,
          cssClasses: d,
          cssStyles: [],
          look: (l as any).look,
          icon: (e as any).icon,
          x: (e as any).x,
          y: (e as any).y,
          level: (e as any).level,
          nodeId: (e as any).nodeId,
          type: (e as any).type,
          section: (e as any).section
        };
      if (((a as any).push as any)(y), (e as any).children) for (const E of (e as any).children) ((this as any).flattenNodes as any)(E, a);
    }
    generateEdges(e: any, a: any): any {
      if (!(e as any).children) return;
      const l: any = (B as any)();
      for (const n of (e as any).children) {
        let d: any = "edge";
        ((n as any).section as any) !== (void 0 as any) && (d += ` section-edge-${(n as any).section}`);
        const f: any = ((e as any).level as any) + (1 as any);
        d += ` edge-depth-${f}`;
        const y: any = {
          id: `edge_${(e as any).id}_${(n as any).id}`,
          start: (((e as any).id as any).toString as any)(),
          end: (((n as any).id as any).toString as any)(),
          type: "normal",
          curve: "basis",
          thickness: "normal",
          look: (l as any).look,
          classes: d,
          depth: (e as any).level,
          section: (n as any).section
        };
        ((a as any).push as any)(y), ((this as any).generateEdges as any)(n, a);
      }
    }
    getData(): any {
      const e: any = ((this as any).getMindmap as any)(),
        a: any = (B as any)(),
        n: any = (((pe as any)() as any).layout as any) !== (void 0 as any),
        d: any = a;
      if (n || ((d as any).layout = "cose-bilkent"), !e) return {
        nodes: [],
        edges: [],
        config: d
      };
      ((C as any).debug as any)("getData: mindmapRoot", e, a), ((this as any).assignSections as any)(e);
      const f: any = [],
        y: any = [];
      ((this as any).flattenNodes as any)(e, f), ((this as any).generateEdges as any)(e, y), ((C as any).debug as any)(`getData: processed ${(f as any).length} nodes and ${(y as any).length} edges`);
      const E: any = new (Map as any)();
      for (const b of f) ((E as any).set as any)((b as any).id, {
        shape: (b as any).shape,
        width: (b as any).width,
        height: (b as any).height,
        padding: (b as any).padding
      });
      return {
        nodes: f,
        edges: y,
        config: d,
        rootNode: e,
        markers: ["point"],
        direction: "TB",
        nodeSpacing: 50,
        rankSpacing: 50,
        shapes: ((Object as any).fromEntries as any)(E),
        type: "mindmap",
        diagramId: ("mindmap-" as any) + ((Se as any)() as any)
      };
    }
    getLogger(): any {
      return C;
    }
  }, (h as any)(w, "MindmapDB"), w),
  Le: any = (h as any)(async (t: any, e: any, a: any, l: any): Promise<any> => {
    ((C as any).debug as any)((`Rendering mindmap diagram
` as any) + (t as any));
    const n: any = (l as any).db,
      d: any = ((n as any).getData as any)(),
      f: any = (le as any)(e, ((d as any).config as any).securityLevel);
    if ((d as any).type = (l as any).type, (d as any).layoutAlgorithm = (de as any)(((d as any).config as any).layout, {
      fallback: "cose-bilkent"
    }), (d as any).diagramId = e, !((n as any).getMindmap as any)()) return;
    (((d as any).nodes as any).forEach as any)((g: any): any => {
      ((g as any).shape as any) === ("rounded" as any) ? ((g as any).radius = 15, (g as any).taper = 15, (g as any).stroke = "none", (g as any).width = 0, (g as any).padding = 15) : ((g as any).shape as any) === ("circle" as any) ? (g as any).padding = 10 : ((g as any).shape as any) === ("rect" as any) ? ((g as any).width = 0, (g as any).padding = 10) : ((g as any).shape as any) === ("hexagon" as any) && ((g as any).width = 0, (g as any).height = 0);
    }), await (ge as any)(d, f);
    const {
        themeVariables: E
      }: any = (ue as any)(),
      {
        useGradient: b,
        gradientStart: v,
        gradientStop: R
      }: any = E;
    if (b && v && R) {
      const g: any = ((f as any).attr as any)("id"),
        A: any = ((((((((((((((((f as any).append as any)("defs") as any).append as any)("linearGradient") as any).attr as any)("id", `${g}-gradient`) as any).attr as any)("gradientUnits", "objectBoundingBox") as any).attr as any)("x1", "0%") as any).attr as any)("y1", "0%") as any).attr as any)("x2", "100%") as any).attr as any)("y2", "0%");
      ((((((((A as any).append as any)("stop") as any).attr as any)("offset", "0%") as any).attr as any)("stop-color", v) as any).attr as any)("stop-opacity", 1), ((((((((A as any).append as any)("stop") as any).attr as any)("offset", "100%") as any).attr as any)("stop-color", R) as any).attr as any)("stop-opacity", 1);
    }
    (he as any)(f, ((d as any).config as any).mindmap?.padding ?? ((j as any).mindmap as any).padding, "mindmapDiagram", ((d as any).config as any).mindmap?.useMaxWidth ?? ((j as any).mindmap as any).useMaxWidth);
  }, "draw"),
  ve: any = {
    draw: Le
  },
  Te: any = (h as any)((t: any): any => {
    const {
      theme: e,
      look: a
    }: any = t;
    let l: any = "";
    for (let n: any = 0; (n as any) < ((t as any).THEME_COLOR_LIMIT as any); n++) (t as any)[("lineColor" as any) + (n as any)] = (t as any)[("lineColor" as any) + (n as any)] || (t as any)[("cScaleInv" as any) + (n as any)], (fe as any)((t as any)[("lineColor" as any) + (n as any)]) ? (t as any)[("lineColor" as any) + (n as any)] = (me as any)((t as any)[("lineColor" as any) + (n as any)], 20) : (t as any)[("lineColor" as any) + (n as any)] = (ye as any)((t as any)[("lineColor" as any) + (n as any)], 20);
    for (let n: any = 0; (n as any) < ((t as any).THEME_COLOR_LIMIT as any); n++) {
      const d: any = ("" as any) + (((a as any) === ("neo" as any) ? ((Math as any).max as any)((10 as any) - (((n as any) - (1 as any) as any) * (2 as any) as any), 2) : (17 as any) - ((3 as any) * (n as any) as any)) as any);
      l += `
    .section-${(n as any) - (1 as any)} rect, .section-${(n as any) - (1 as any)} path, .section-${(n as any) - (1 as any)} circle, .section-${(n as any) - (1 as any)} polygon, .section-${(n as any) - (1 as any)} path  {
      fill: ${(t as any)[("cScale" as any) + (n as any)]};
    }
    .section-${(n as any) - (1 as any)} text {
     fill: ${(t as any)[("cScaleLabel" as any) + (n as any)]};
    }
     .section-${(n as any) - (1 as any)} span {
     color: ${(t as any)[("cScaleLabel" as any) + (n as any)]};
    }
    .node-icon-${(n as any) - (1 as any)} {
      font-size: 40px;
      color: ${(t as any)[("cScaleLabel" as any) + (n as any)]};
    }
    .section-edge-${(n as any) - (1 as any)}{
      stroke: ${(t as any)[("cScale" as any) + (n as any)]};
    }
    .edge-depth-${(n as any) - (1 as any)}{
      stroke-width: ${d};
    }
    .section-${(n as any) - (1 as any)} line {
      stroke: ${(t as any)[("cScaleInv" as any) + (n as any)]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    [data-look="neo"].mindmap-node.section-${(n as any) - (1 as any)} rect, [data-look="neo"].mindmap-node.section-${(n as any) - (1 as any)} path, [data-look="neo"].mindmap-node.section-${(n as any) - (1 as any)} circle, [data-look="neo"].mindmap-node.section-${(n as any) - (1 as any)} polygon {
      fill: ${(e as any) === ("redux" as any) || (e as any) === ("redux-dark" as any) || (e as any) === ("neutral" as any) ? (t as any).mainBkg : (t as any)[("cScale" as any) + (n as any)]};
      stroke: ${(e as any) === ("redux" as any) || (e as any) === ("redux-dark" as any) ? (t as any).nodeBorder : (t as any)[("cScale" as any) + (n as any)]};
      stroke-width: ${(t as any).strokeWidth ?? 2}px;
    }
    [data-look="neo"].section-edge-${(n as any) - (1 as any)}{
      stroke: ${e?.includes("redux") || (e as any) === ("neo-dark" as any) ? (t as any).nodeBorder : (t as any)[("cScale" as any) + (n as any)]};
    }
    [data-look="neo"].mindmap-node.section-${(n as any) - (1 as any)} text {
     fill: ${(e as any) === ("redux" as any) || (e as any) === ("redux-dark" as any) ? (t as any).nodeBorder : (t as any)[("cScaleLabel" as any) + (((e as any) === ("neutral" as any) ? 1 : n) as any)]};
    }
    `;
    }
    return l;
  }, "genSections"),
  Oe: any = (h as any)((t: any, e: any, a: any): any => {
    let l: any = "";
    for (let n: any = 0; (n as any) < (t as any); n++) l += `
    [data-look="neo"].mindmap-node.section-${(n as any) - (1 as any)} rect, [data-look="neo"].mindmap-node.section-${(n as any) - (1 as any)} path, [data-look="neo"].mindmap-node.section-${(n as any) - (1 as any)} circle, [data-look="neo"].mindmap-node.section-${(n as any) - (1 as any)} polygon {
      stroke: url(${e}-gradient);
      fill: ${a};
    }
    .section-${(n as any) - (1 as any)} line {
      stroke-width: 0;
    }`;
    return l;
  }, "genGradient"),
  Ie: any = (h as any)((t: any): any => {
    const {
        theme: e
      }: any = t,
      a: any = (t as any).svgId,
      l: any = (t as any).dropShadow ? (((t as any).dropShadow as any).replace as any)("url(#drop-shadow)", `url(${a}-drop-shadow)`) : "none";
    return `
  .edge {
    stroke-width: 3;
  }
  ${(Te as any)(t)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${(t as any).git0};
  }
  .section-root text {
    fill: ${(t as any).gitBranchLabel0};
  }
  .section-root span {
    color: ${e?.includes("redux") ? (t as any).nodeBorder : (t as any).gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
  [data-look="neo"].mindmap-node  {
    filter: ${l};
  }
  [data-look="neo"].mindmap-node.section-root rect, [data-look="neo"].mindmap-node.section-root path, [data-look="neo"].mindmap-node.section-root circle, [data-look="neo"].mindmap-node.section-root polygon  {
    fill: ${e?.includes("redux") ? (t as any).mainBkg : (t as any).git0};
  }
  [data-look="neo"].mindmap-node.section-root .text-inner-tspan {
    fill:  ${e?.includes("redux") ? (t as any).nodeBorder : (t as any)[("cScaleLabel" as any) + (((e as any) === ("neutral" as any) ? 1 : 0) as any)]};
  }
  ${(t as any).useGradient && a && (t as any).mainBkg ? (Oe as any)((t as any).THEME_COLOR_LIMIT, a, (t as any).mainBkg) : ""}
`;
  }, "getStyles"),
  Ce: any = Ie,
  Ue: any = {
    get db(): any {
      return new (Ne as any)();
    },
    renderer: ve,
    parser: xe,
    styles: Ce
  };
export { Ue as diagram };
//# debugId=b169587c-14c2-48f0-88dd-fdaca21358bf
