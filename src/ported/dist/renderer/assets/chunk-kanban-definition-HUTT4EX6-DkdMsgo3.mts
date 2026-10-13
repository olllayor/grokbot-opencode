declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "8543acfe-6a62-4934-94e8-9da854ad02ad", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-8543acfe-6a62-4934-94e8-9da854ad02ad");
  } catch (e: any) {}
} as any)();
import { _ as o, l as te, c as H, F as fe, af as ye, ag as be, ah as me, ad as _e, D as Y, i as j, Y as ke, Z as Ee, aa as Se, ab as ce, ac as le } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { g as Ne } from "./chunk-chunk-5VM5RSS4-CTCaRfNa.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var $: any = (function (this: any): any {
  var e: any = (o as any)(function (this: any, O: any, i: any, n: any, r: any): any {
      for (n = n || {}, r = (O as any).length; r--; (n as any)[(O as any)[r]] = i);
      return n;
    }, "o"),
    h: any = [1, 4],
    p: any = [1, 13],
    s: any = [1, 12],
    d: any = [1, 15],
    _: any = [1, 16],
    m: any = [1, 20],
    l: any = [1, 19],
    D: any = [6, 7, 8],
    I: any = [1, 26],
    g: any = [1, 24],
    w: any = [1, 25],
    k: any = [6, 7, 11],
    G: any = [1, 31],
    N: any = [6, 7, 11, 24],
    V: any = [1, 6, 13, 16, 17, 20, 23],
    f: any = [1, 35],
    A: any = [1, 36],
    L: any = [1, 6, 7, 11, 13, 16, 17, 20, 23],
    M: any = [1, 38],
    T: any = {
      trace: (o as any)(function (this: any): any {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        mindMap: 4,
        spaceLines: 5,
        SPACELINE: 6,
        NL: 7,
        KANBAN: 8,
        document: 9,
        stop: 10,
        EOF: 11,
        statement: 12,
        SPACELIST: 13,
        node: 14,
        shapeData: 15,
        ICON: 16,
        CLASS: 17,
        nodeWithId: 18,
        nodeWithoutId: 19,
        NODE_DSTART: 20,
        NODE_DESCR: 21,
        NODE_DEND: 22,
        NODE_ID: 23,
        SHAPE_DATA: 24,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        6: "SPACELINE",
        7: "NL",
        8: "KANBAN",
        11: "EOF",
        13: "SPACELIST",
        16: "ICON",
        17: "CLASS",
        20: "NODE_DSTART",
        21: "NODE_DESCR",
        22: "NODE_DEND",
        23: "NODE_ID",
        24: "SHAPE_DATA"
      },
      productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 3], [12, 2], [12, 2], [12, 2], [12, 1], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [19, 3], [18, 1], [18, 4], [15, 2], [15, 1]],
      performAction: (o as any)(function (this: any, i: any, n: any, r: any, a: any, u: any, t: any, U: any): any {
        var c: any = ((t as any).length as any) - (1 as any);
        switch (u) {
          case 6:
          case 7:
            return a;
          case 8:
            ((((a as any).getLogger as any)() as any).trace as any)("Stop NL ");
            break;
          case 9:
            ((((a as any).getLogger as any)() as any).trace as any)("Stop EOF ");
            break;
          case 11:
            ((((a as any).getLogger as any)() as any).trace as any)("Stop NL2 ");
            break;
          case 12:
            ((((a as any).getLogger as any)() as any).trace as any)("Stop EOF2 ");
            break;
          case 15:
            ((((a as any).getLogger as any)() as any).info as any)("Node: ", ((t as any)[(c as any) - (1 as any)] as any).id), ((a as any).addNode as any)(((t as any)[(c as any) - (2 as any)] as any).length, ((t as any)[(c as any) - (1 as any)] as any).id, ((t as any)[(c as any) - (1 as any)] as any).descr, ((t as any)[(c as any) - (1 as any)] as any).type, (t as any)[c]);
            break;
          case 16:
            ((((a as any).getLogger as any)() as any).info as any)("Node: ", ((t as any)[c] as any).id), ((a as any).addNode as any)(((t as any)[(c as any) - (1 as any)] as any).length, ((t as any)[c] as any).id, ((t as any)[c] as any).descr, ((t as any)[c] as any).type);
            break;
          case 17:
            ((((a as any).getLogger as any)() as any).trace as any)("Icon: ", (t as any)[c]), ((a as any).decorateNode as any)({
              icon: (t as any)[c]
            });
            break;
          case 18:
          case 23:
            ((a as any).decorateNode as any)({
              class: (t as any)[c]
            });
            break;
          case 19:
            ((((a as any).getLogger as any)() as any).trace as any)("SPACELIST");
            break;
          case 20:
            ((((a as any).getLogger as any)() as any).trace as any)("Node: ", ((t as any)[(c as any) - (1 as any)] as any).id), ((a as any).addNode as any)(0, ((t as any)[(c as any) - (1 as any)] as any).id, ((t as any)[(c as any) - (1 as any)] as any).descr, ((t as any)[(c as any) - (1 as any)] as any).type, (t as any)[c]);
            break;
          case 21:
            ((((a as any).getLogger as any)() as any).trace as any)("Node: ", ((t as any)[c] as any).id), ((a as any).addNode as any)(0, ((t as any)[c] as any).id, ((t as any)[c] as any).descr, ((t as any)[c] as any).type);
            break;
          case 22:
            ((a as any).decorateNode as any)({
              icon: (t as any)[c]
            });
            break;
          case 27:
            ((((a as any).getLogger as any)() as any).trace as any)("node found ..", (t as any)[(c as any) - (2 as any)]), (this as any).$ = {
              id: (t as any)[(c as any) - (1 as any)],
              descr: (t as any)[(c as any) - (1 as any)],
              type: ((a as any).getType as any)((t as any)[(c as any) - (2 as any)], (t as any)[c])
            };
            break;
          case 28:
            (this as any).$ = {
              id: (t as any)[c],
              descr: (t as any)[c],
              type: 0
            };
            break;
          case 29:
            ((((a as any).getLogger as any)() as any).trace as any)("node found ..", (t as any)[(c as any) - (3 as any)]), (this as any).$ = {
              id: (t as any)[(c as any) - (3 as any)],
              descr: (t as any)[(c as any) - (1 as any)],
              type: ((a as any).getType as any)((t as any)[(c as any) - (2 as any)], (t as any)[c])
            };
            break;
          case 30:
            (this as any).$ = ((t as any)[(c as any) - (1 as any)] as any) + ((t as any)[c] as any);
            break;
          case 31:
            (this as any).$ = (t as any)[c];
            break;
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: 2,
        5: 3,
        6: [1, 5],
        8: h
      }, {
        1: [3]
      }, {
        1: [2, 1]
      }, {
        4: 6,
        6: [1, 7],
        7: [1, 8],
        8: h
      }, {
        6: p,
        7: [1, 10],
        9: 9,
        12: 11,
        13: s,
        14: 14,
        16: d,
        17: _,
        18: 17,
        19: 18,
        20: m,
        23: l
      }, (e as any)(D, [2, 3]), {
        1: [2, 2]
      }, (e as any)(D, [2, 4]), (e as any)(D, [2, 5]), {
        1: [2, 6],
        6: p,
        12: 21,
        13: s,
        14: 14,
        16: d,
        17: _,
        18: 17,
        19: 18,
        20: m,
        23: l
      }, {
        6: p,
        9: 22,
        12: 11,
        13: s,
        14: 14,
        16: d,
        17: _,
        18: 17,
        19: 18,
        20: m,
        23: l
      }, {
        6: I,
        7: g,
        10: 23,
        11: w
      }, (e as any)(k, [2, 24], {
        18: 17,
        19: 18,
        14: 27,
        16: [1, 28],
        17: [1, 29],
        20: m,
        23: l
      }), (e as any)(k, [2, 19]), (e as any)(k, [2, 21], {
        15: 30,
        24: G
      }), (e as any)(k, [2, 22]), (e as any)(k, [2, 23]), (e as any)(N, [2, 25]), (e as any)(N, [2, 26]), (e as any)(N, [2, 28], {
        20: [1, 32]
      }), {
        21: [1, 33]
      }, {
        6: I,
        7: g,
        10: 34,
        11: w
      }, {
        1: [2, 7],
        6: p,
        12: 21,
        13: s,
        14: 14,
        16: d,
        17: _,
        18: 17,
        19: 18,
        20: m,
        23: l
      }, (e as any)(V, [2, 14], {
        7: f,
        11: A
      }), (e as any)(L, [2, 8]), (e as any)(L, [2, 9]), (e as any)(L, [2, 10]), (e as any)(k, [2, 16], {
        15: 37,
        24: G
      }), (e as any)(k, [2, 17]), (e as any)(k, [2, 18]), (e as any)(k, [2, 20], {
        24: M
      }), (e as any)(N, [2, 31]), {
        21: [1, 39]
      }, {
        22: [1, 40]
      }, (e as any)(V, [2, 13], {
        7: f,
        11: A
      }), (e as any)(L, [2, 11]), (e as any)(L, [2, 12]), (e as any)(k, [2, 15], {
        24: M
      }), (e as any)(N, [2, 30]), {
        22: [1, 41]
      }, (e as any)(N, [2, 27]), (e as any)(N, [2, 29])],
      defaultActions: {
        2: [2, 1],
        6: [2, 2]
      },
      parseError: (o as any)(function (this: any, i: any, n: any): any {
        if ((n as any).recoverable) ((this as any).trace as any)(i);else {
          var r: any = new (Error as any)(i);
          throw (r as any).hash = n, r;
        }
      }, "parseError"),
      parse: (o as any)(function (this: any, i: any): any {
        var J: any;
        var n: any = this,
          r: any = [0],
          a: any = [],
          u: any = [null],
          t: any = [],
          U: any = (this as any).table,
          c: any = "",
          W: any = 0,
          se: any = 0,
          ue: number = 2,
          re: number = 1,
          ge: any = (((t as any).slice as any).call as any)(arguments, 1),
          b: any = ((Object as any).create as any)((this as any).lexer),
          R: any = {
            yy: {}
          };
        for (J in (this as any).yy) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).yy, J) && (((R as any).yy as any)[J] = ((this as any).yy as any)[J]);
        ((b as any).setInput as any)(i, (R as any).yy), ((R as any).yy as any).lexer = b, ((R as any).yy as any).parser = this, (typeof (b as any).yylloc as any) > ("u" as any) && ((b as any).yylloc = {});
        var Z: any = (b as any).yylloc;
        ((t as any).push as any)(Z);
        var de: any = (b as any).options && ((b as any).options as any).ranges;
        (typeof ((R as any).yy as any).parseError as any) == ("function" as any) ? (this as any).parseError = ((R as any).yy as any).parseError : (this as any).parseError = (((Object as any).getPrototypeOf as any)(this) as any).parseError;
        function pe(this: any, S: any): any {
          (r as any).length = ((r as any).length as any) - ((2 as any) * (S as any) as any), (u as any).length = ((u as any).length as any) - (S as any), (t as any).length = ((t as any).length as any) - (S as any);
        }
        (o as any)(pe, "popStack");
        function ae(this: any): any {
          var S: any;
          return S = ((a as any).pop as any)() || ((b as any).lex as any)() || re, (typeof S as any) != ("number" as any) && (S instanceof Array && (a = S, S = ((a as any).pop as any)()), S = ((n as any).symbols_ as any)[S] || S), S;
        }
        (o as any)(ae, "lex");
        for (var E: any, P: any, x: any, q: any, F: any = {}, z: any, C: any, oe: any, X: any;;) {
          if (P = (r as any)[((r as any).length as any) - (1 as any)], ((this as any).defaultActions as any)[P] ? x = ((this as any).defaultActions as any)[P] : (((E as any) === (null as any) || (typeof E as any) > ("u" as any)) && (E = (ae as any)()), x = (U as any)[P] && ((U as any)[P] as any)[E]), (typeof x as any) > ("u" as any) || !(x as any).length || !(x as any)[0]) {
            var Q: any = "";
            X = [];
            for (z in (U as any)[P]) ((this as any).terminals_ as any)[z] && (z as any) > (ue as any) && ((X as any).push as any)((("'" as any) + (((this as any).terminals_ as any)[z] as any) as any) + ("'" as any));
            (b as any).showPosition ? Q = (((((((("Parse error on line " as any) + ((W as any) + (1 as any) as any) as any) + (`:
` as any) as any) + (((b as any).showPosition as any)() as any) as any) + (`
Expecting ` as any) as any) + (((X as any).join as any)(", ") as any) as any) + (", got '" as any) as any) + ((((this as any).terminals_ as any)[E] || E) as any) as any) + ("'" as any) : Q = ((("Parse error on line " as any) + ((W as any) + (1 as any) as any) as any) + (": Unexpected " as any) as any) + (((E as any) == (re as any) ? "end of input" : (("'" as any) + ((((this as any).terminals_ as any)[E] || E) as any) as any) + ("'" as any)) as any), ((this as any).parseError as any)(Q, {
              text: (b as any).match,
              token: ((this as any).terminals_ as any)[E] || E,
              line: (b as any).yylineno,
              loc: Z,
              expected: X
            });
          }
          if ((x as any)[0] instanceof Array && ((x as any).length as any) > (1 as any)) throw new (Error as any)(((("Parse Error: multiple actions possible at state: " as any) + (P as any) as any) + (", token: " as any) as any) + (E as any));
          switch ((x as any)[0]) {
            case 1:
              ((r as any).push as any)(E), ((u as any).push as any)((b as any).yytext), ((t as any).push as any)((b as any).yylloc), ((r as any).push as any)((x as any)[1]), E = null, se = (b as any).yyleng, c = (b as any).yytext, W = (b as any).yylineno, Z = (b as any).yylloc;
              break;
            case 2:
              if (C = (((this as any).productions_ as any)[(x as any)[1]] as any)[1], (F as any).$ = (u as any)[((u as any).length as any) - (C as any)], (F as any)._$ = {
                first_line: ((t as any)[((t as any).length as any) - ((C || 1) as any)] as any).first_line,
                last_line: ((t as any)[((t as any).length as any) - (1 as any)] as any).last_line,
                first_column: ((t as any)[((t as any).length as any) - ((C || 1) as any)] as any).first_column,
                last_column: ((t as any)[((t as any).length as any) - (1 as any)] as any).last_column
              }, de && (((F as any)._$ as any).range = [(((t as any)[((t as any).length as any) - ((C || 1) as any)] as any).range as any)[0], (((t as any)[((t as any).length as any) - (1 as any)] as any).range as any)[1]]), q = (((this as any).performAction as any).apply as any)(F, (([c, se, W, (R as any).yy, (x as any)[1], u, t] as any).concat as any)(ge)), (typeof q as any) < ("u" as any)) return q;
              C && (r = ((r as any).slice as any)(0, ((-1 as any) * (C as any) as any) * (2 as any)), u = ((u as any).slice as any)(0, (-1 as any) * (C as any)), t = ((t as any).slice as any)(0, (-1 as any) * (C as any))), ((r as any).push as any)((((this as any).productions_ as any)[(x as any)[1]] as any)[0]), ((u as any).push as any)((F as any).$), ((t as any).push as any)((F as any)._$), oe = ((U as any)[(r as any)[((r as any).length as any) - (2 as any)]] as any)[(r as any)[((r as any).length as any) - (1 as any)]], ((r as any).push as any)(oe);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }, "parse")
    },
    K: any = (function (this: any): any {
      var O: any = {
        EOF: 1,
        parseError: (o as any)(function (this: any, n: any, r: any): any {
          if (((this as any).yy as any).parser) ((((this as any).yy as any).parser as any).parseError as any)(n, r);else throw new (Error as any)(n);
        }, "parseError"),
        setInput: (o as any)(function (this: any, i: any, n: any): any {
          return (this as any).yy = n || (this as any).yy || {}, (this as any)._input = i, (this as any)._more = (this as any)._backtrack = (this as any).done = !1, (this as any).yylineno = (this as any).yyleng = 0, (this as any).yytext = (this as any).matched = (this as any).match = "", (this as any).conditionStack = ["INITIAL"], (this as any).yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [0, 0]), (this as any).offset = 0, this;
        }, "setInput"),
        input: (o as any)(function (this: any): any {
          var i: any = ((this as any)._input as any)[0];
          (this as any).yytext += i, (this as any).yyleng++, (this as any).offset++, (this as any).match += i, (this as any).matched += i;
          var n: any = ((i as any).match as any)(/(?:\r\n?|\n).*/g);
          return n ? ((this as any).yylineno++, ((this as any).yylloc as any).last_line++) : ((this as any).yylloc as any).last_column++, ((this as any).options as any).ranges && (((this as any).yylloc as any).range as any)[1]++, (this as any)._input = (((this as any)._input as any).slice as any)(1), i;
        }, "input"),
        unput: (o as any)(function (this: any, i: any): any {
          var n: any = (i as any).length,
            r: any = ((i as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any)._input = (i as any) + ((this as any)._input as any), (this as any).yytext = (((this as any).yytext as any).substr as any)(0, (((this as any).yytext as any).length as any) - (n as any)), (this as any).offset -= n;
          var a: any = (((this as any).match as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any).match = (((this as any).match as any).substr as any)(0, (((this as any).match as any).length as any) - (1 as any)), (this as any).matched = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (1 as any)), ((r as any).length as any) - (1 as any) && ((this as any).yylineno -= ((r as any).length as any) - (1 as any));
          var u: any = ((this as any).yylloc as any).range;
          return (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).first_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).first_column,
            last_column: r ? (((((r as any).length as any) === ((a as any).length as any) ? ((this as any).yylloc as any).first_column : 0) as any) + (((a as any)[((a as any).length as any) - ((r as any).length as any)] as any).length as any) as any) - (((r as any)[0] as any).length as any) : (((this as any).yylloc as any).first_column as any) - (n as any)
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(u as any)[0], (((u as any)[0] as any) + ((this as any).yyleng as any) as any) - (n as any)]), (this as any).yyleng = ((this as any).yytext as any).length, this;
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
        less: (o as any)(function (this: any, i: any): any {
          ((this as any).unput as any)((((this as any).match as any).slice as any)(i));
        }, "less"),
        pastInput: (o as any)(function (this: any): any {
          var i: any = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (((this as any).match as any).length as any));
          return ((((i as any).length as any) > (20 as any) ? "..." : "") as any) + (((((i as any).substr as any)(-20) as any).replace as any)(/\n/g, "") as any);
        }, "pastInput"),
        upcomingInput: (o as any)(function (this: any): any {
          var i: any = (this as any).match;
          return ((i as any).length as any) < (20 as any) && (i += (((this as any)._input as any).substr as any)(0, (20 as any) - ((i as any).length as any))), (((((i as any).substr as any)(0, 20) as any) + ((((i as any).length as any) > (20 as any) ? "..." : "") as any) as any).replace as any)(/\n/g, "");
        }, "upcomingInput"),
        showPosition: (o as any)(function (this: any): any {
          var i: any = ((this as any).pastInput as any)(),
            n: any = ((new (Array as any)(((i as any).length as any) + (1 as any)) as any).join as any)("-");
          return ((((i as any) + (((this as any).upcomingInput as any)() as any) as any) + (`
` as any) as any) + (n as any) as any) + ("^" as any);
        }, "showPosition"),
        test_match: (o as any)(function (this: any, i: any, n: any): any {
          var t: any;
          var r: any, a: any, u: any;
          if (((this as any).options as any).backtrack_lexer && (u = {
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
          }, ((this as any).options as any).ranges && (((u as any).yylloc as any).range = ((((this as any).yylloc as any).range as any).slice as any)(0))), a = (((i as any)[0] as any).match as any)(/(?:\r\n?|\n).*/g), a && ((this as any).yylineno += (a as any).length), (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).last_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).last_column,
            last_column: a ? (((a as any)[((a as any).length as any) - (1 as any)] as any).length as any) - ((((((a as any)[((a as any).length as any) - (1 as any)] as any).match as any)(/\r?\n?/) as any)[0] as any).length as any) : (((this as any).yylloc as any).last_column as any) + (((i as any)[0] as any).length as any)
          }, (this as any).yytext += (i as any)[0], (this as any).match += (i as any)[0], (this as any).matches = i, (this as any).yyleng = ((this as any).yytext as any).length, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(this as any).offset, (this as any).offset += (this as any).yyleng]), (this as any)._more = !1, (this as any)._backtrack = !1, (this as any)._input = (((this as any)._input as any).slice as any)(((i as any)[0] as any).length), (this as any).matched += (i as any)[0], r = (((this as any).performAction as any).call as any)(this, (this as any).yy, this, n, ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]), (this as any).done && (this as any)._input && ((this as any).done = !1), r) return r;
          if ((this as any)._backtrack) {
            for (t in u) (this as any)[t] = (u as any)[t];
            return !1;
          }
          return !1;
        }, "test_match"),
        next: (o as any)(function (this: any): any {
          if ((this as any).done) return (this as any).EOF;
          (this as any)._input || ((this as any).done = !0);
          var i: any, n: any, r: any, a: any;
          (this as any)._more || ((this as any).yytext = "", (this as any).match = "");
          for (var u: any = ((this as any)._currentRules as any)(), t: any = 0; (t as any) < ((u as any).length as any); t++) if (r = (((this as any)._input as any).match as any)(((this as any).rules as any)[(u as any)[t]]), r && (!n || (((r as any)[0] as any).length as any) > (((n as any)[0] as any).length as any))) {
            if (n = r, a = t, ((this as any).options as any).backtrack_lexer) {
              if (i = ((this as any).test_match as any)(r, (u as any)[t]), (i as any) !== (!1 as any)) return i;
              if ((this as any)._backtrack) {
                n = !1;
                continue;
              } else return !1;
            } else if (!((this as any).options as any).flex) break;
          }
          return n ? (i = ((this as any).test_match as any)(n, (u as any)[a]), (i as any) !== (!1 as any) ? i : !1) : ((this as any)._input as any) === ("" as any) ? (this as any).EOF : ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. Unrecognized text.
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
        }, "next"),
        lex: (o as any)(function (this: any): any {
          var n: any = ((this as any).next as any)();
          return n || ((this as any).lex as any)();
        }, "lex"),
        begin: (o as any)(function (this: any, n: any): any {
          (((this as any).conditionStack as any).push as any)(n);
        }, "begin"),
        popState: (o as any)(function (this: any): any {
          var n: any = (((this as any).conditionStack as any).length as any) - (1 as any);
          return (n as any) > (0 as any) ? (((this as any).conditionStack as any).pop as any)() : ((this as any).conditionStack as any)[0];
        }, "popState"),
        _currentRules: (o as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length && ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)] ? (((this as any).conditions as any)[((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]] as any).rules : (((this as any).conditions as any).INITIAL as any).rules;
        }, "_currentRules"),
        topState: (o as any)(function (this: any, n: any): any {
          return n = ((((this as any).conditionStack as any).length as any) - (1 as any) as any) - (((Math as any).abs as any)(n || 0) as any), (n as any) >= (0 as any) ? ((this as any).conditionStack as any)[n] : "INITIAL";
        }, "topState"),
        pushState: (o as any)(function (this: any, n: any): any {
          ((this as any).begin as any)(n);
        }, "pushState"),
        stateStackSize: (o as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": !0
        },
        performAction: (o as any)(function (this: any, n: any, r: any, a: any, u: any): any {
          switch (a) {
            case 0:
              return ((this as any).pushState as any)("shapeData"), (r as any).yytext = "", 24;
            case 1:
              return ((this as any).pushState as any)("shapeDataStr"), 24;
            case 2:
              return ((this as any).popState as any)(), 24;
            case 3:
              const t: any = /\n\s*/g;
              return (r as any).yytext = (((r as any).yytext as any).replace as any)(t, "<br/>"), 24;
            case 4:
              return 24;
            case 5:
              ((this as any).popState as any)();
              break;
            case 6:
              return ((((n as any).getLogger as any)() as any).trace as any)("Found comment", (r as any).yytext), 6;
            case 7:
              return 8;
            case 8:
              ((this as any).begin as any)("CLASS");
              break;
            case 9:
              return ((this as any).popState as any)(), 17;
            case 10:
              ((this as any).popState as any)();
              break;
            case 11:
              ((((n as any).getLogger as any)() as any).trace as any)("Begin icon"), ((this as any).begin as any)("ICON");
              break;
            case 12:
              return ((((n as any).getLogger as any)() as any).trace as any)("SPACELINE"), 6;
            case 13:
              return 7;
            case 14:
              return 16;
            case 15:
              ((((n as any).getLogger as any)() as any).trace as any)("end icon"), ((this as any).popState as any)();
              break;
            case 16:
              return ((((n as any).getLogger as any)() as any).trace as any)("Exploding node"), ((this as any).begin as any)("NODE"), 20;
            case 17:
              return ((((n as any).getLogger as any)() as any).trace as any)("Cloud"), ((this as any).begin as any)("NODE"), 20;
            case 18:
              return ((((n as any).getLogger as any)() as any).trace as any)("Explosion Bang"), ((this as any).begin as any)("NODE"), 20;
            case 19:
              return ((((n as any).getLogger as any)() as any).trace as any)("Cloud Bang"), ((this as any).begin as any)("NODE"), 20;
            case 20:
              return ((this as any).begin as any)("NODE"), 20;
            case 21:
              return ((this as any).begin as any)("NODE"), 20;
            case 22:
              return ((this as any).begin as any)("NODE"), 20;
            case 23:
              return ((this as any).begin as any)("NODE"), 20;
            case 24:
              return 13;
            case 25:
              return 23;
            case 26:
              return 11;
            case 27:
              ((this as any).begin as any)("NSTR2");
              break;
            case 28:
              return "NODE_DESCR";
            case 29:
              ((this as any).popState as any)();
              break;
            case 30:
              ((((n as any).getLogger as any)() as any).trace as any)("Starting NSTR"), ((this as any).begin as any)("NSTR");
              break;
            case 31:
              return ((((n as any).getLogger as any)() as any).trace as any)("description:", (r as any).yytext), "NODE_DESCR";
            case 32:
              ((this as any).popState as any)();
              break;
            case 33:
              return ((this as any).popState as any)(), ((((n as any).getLogger as any)() as any).trace as any)("node end ))"), "NODE_DEND";
            case 34:
              return ((this as any).popState as any)(), ((((n as any).getLogger as any)() as any).trace as any)("node end )"), "NODE_DEND";
            case 35:
              return ((this as any).popState as any)(), ((((n as any).getLogger as any)() as any).trace as any)("node end ...", (r as any).yytext), "NODE_DEND";
            case 36:
              return ((this as any).popState as any)(), ((((n as any).getLogger as any)() as any).trace as any)("node end (("), "NODE_DEND";
            case 37:
              return ((this as any).popState as any)(), ((((n as any).getLogger as any)() as any).trace as any)("node end (-"), "NODE_DEND";
            case 38:
              return ((this as any).popState as any)(), ((((n as any).getLogger as any)() as any).trace as any)("node end (-"), "NODE_DEND";
            case 39:
              return ((this as any).popState as any)(), ((((n as any).getLogger as any)() as any).trace as any)("node end (("), "NODE_DEND";
            case 40:
              return ((this as any).popState as any)(), ((((n as any).getLogger as any)() as any).trace as any)("node end (("), "NODE_DEND";
            case 41:
              return ((((n as any).getLogger as any)() as any).trace as any)("Long description:", (r as any).yytext), 21;
            case 42:
              return ((((n as any).getLogger as any)() as any).trace as any)("Long description:", (r as any).yytext), 21;
          }
        }, "anonymous"),
        rules: [/^(?:@\{)/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^\"]+)/i, /^(?:[^}^"]+)/i, /^(?:\})/i, /^(?:\s*%%.*)/i, /^(?:kanban\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}@]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i],
        conditions: {
          shapeDataEndBracket: {
            rules: [],
            inclusive: !1
          },
          shapeDataStr: {
            rules: [2, 3],
            inclusive: !1
          },
          shapeData: {
            rules: [1, 4, 5],
            inclusive: !1
          },
          CLASS: {
            rules: [9, 10],
            inclusive: !1
          },
          ICON: {
            rules: [14, 15],
            inclusive: !1
          },
          NSTR2: {
            rules: [28, 29],
            inclusive: !1
          },
          NSTR: {
            rules: [31, 32],
            inclusive: !1
          },
          NODE: {
            rules: [27, 30, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
            inclusive: !1
          },
          INITIAL: {
            rules: [0, 6, 7, 8, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
            inclusive: !0
          }
        }
      };
      return O;
    } as any)();
  (T as any).lexer = K;
  function B(this: any): any {
    (this as any).yy = {};
  }
  return (o as any)(B, "Parser"), (B as any).prototype = T, (T as any).Parser = B, new (B as any)();
} as any)();
($ as any).parser = $;
var xe: any = $,
  v: any = [],
  ne: any = [],
  ee: any = 0,
  ie: any = {},
  ve: any = (o as any)((): any => {
    v = [], ne = [], ee = 0, ie = {};
  }, "clear"),
  De: any = (o as any)((e: any): any => {
    if (((v as any).length as any) === (0 as any)) return null;
    const h: any = ((v as any)[0] as any).level;
    let p: any = null;
    for (let s: any = ((v as any).length as any) - (1 as any); (s as any) >= (0 as any); s--) if ((((v as any)[s] as any).level as any) === (h as any) && !p && (p = (v as any)[s]), (((v as any)[s] as any).level as any) < (h as any)) throw new (Error as any)((('Items without section detected, found section ("' as any) + (((v as any)[s] as any).label as any) as any) + ('")' as any));
    return (e as any) === (p?.level as any) ? null : p;
  }, "getSection"),
  he: any = (o as any)(function (this: any): any {
    return ne;
  }, "getSections"),
  Le: any = (o as any)(function (this: any): any {
    const e: any = [],
      h: any = [],
      p: any = (he as any)(),
      s: any = (H as any)();
    for (const d of p) {
      const _: any = {
        id: (d as any).id,
        label: (j as any)((d as any).label ?? "", s),
        labelType: "markdown",
        isGroup: !0,
        ticket: (d as any).ticket,
        shape: "kanbanSection",
        level: (d as any).level,
        look: (s as any).look
      };
      ((h as any).push as any)(_);
      const m: any = ((v as any).filter as any)((l: any): any => ((l as any).parentId as any) === ((d as any).id as any));
      for (const l of m) {
        const D: any = {
          id: (l as any).id,
          parentId: (d as any).id,
          label: (j as any)((l as any).label ?? "", s),
          labelType: "markdown",
          isGroup: !1,
          ticket: l?.ticket,
          priority: l?.priority,
          assigned: l?.assigned,
          icon: l?.icon,
          shape: "kanbanItem",
          level: (l as any).level,
          rx: 5,
          ry: 5,
          cssStyles: ["text-align: left"]
        };
        ((h as any).push as any)(D);
      }
    }
    return {
      nodes: h,
      edges: e,
      other: {},
      config: (H as any)()
    };
  }, "getData"),
  Oe: any = (o as any)((e: any, h: any, p: any, s: any, d: any): any => {
    const _: any = (H as any)();
    let m: any = (_ as any).mindmap?.padding ?? ((Y as any).mindmap as any).padding;
    switch (s) {
      case (y as any).ROUNDED_RECT:
      case (y as any).RECT:
      case (y as any).HEXAGON:
        m *= 2;
    }
    const l: any = {
      id: (j as any)(h, _) || ("kbn" as any) + (ee++ as any),
      level: e,
      label: (j as any)(p, _),
      width: (_ as any).mindmap?.maxNodeWidth ?? ((Y as any).mindmap as any).maxNodeWidth,
      padding: m,
      isGroup: !1
    };
    if ((d as any) !== (void 0 as any)) {
      let I: any;
      ((d as any).includes as any)(`
`) ? I = (d as any) + (`
` as any) : I = ((`{
` as any) + (d as any) as any) + (`
}` as any);
      const g: any = (ke as any)(I, {
        schema: Ee
      });
      if ((g as any).shape && (((g as any).shape as any) !== ((((g as any).shape as any).toLowerCase as any)() as any) || (((g as any).shape as any).includes as any)("_"))) throw new (Error as any)(`No such shape: ${(g as any).shape}. Shape names should be lowercase.`);
      g?.shape && ((g as any).shape as any) === ("kanbanItem" as any) && ((l as any).shape = g?.shape), g?.label && ((l as any).label = g?.label), g?.icon && ((l as any).icon = g?.icon.toString()), g?.assigned && ((l as any).assigned = g?.assigned.toString()), g?.ticket && ((l as any).ticket = g?.ticket.toString()), g?.priority && ((l as any).priority = g?.priority);
    }
    const D: any = (De as any)(e);
    D ? (l as any).parentId = (D as any).id || ("kbn" as any) + (ee++ as any) : ((ne as any).push as any)(l), ((v as any).push as any)(l);
  }, "addNode"),
  y: any = {
    DEFAULT: 0,
    NO_BORDER: 0,
    ROUNDED_RECT: 1,
    RECT: 2,
    CIRCLE: 3,
    CLOUD: 4,
    BANG: 5,
    HEXAGON: 6
  },
  Ie: any = (o as any)((e: any, h: any): any => {
    switch (((te as any).debug as any)("In get type", e, h), e) {
      case "[":
        return (y as any).RECT;
      case "(":
        return (h as any) === (")" as any) ? (y as any).ROUNDED_RECT : (y as any).CLOUD;
      case "((":
        return (y as any).CIRCLE;
      case ")":
        return (y as any).CLOUD;
      case "))":
        return (y as any).BANG;
      case "{{":
        return (y as any).HEXAGON;
      default:
        return (y as any).DEFAULT;
    }
  }, "getType"),
  Ce: any = (o as any)((e: any, h: any): any => {
    (ie as any)[e] = h;
  }, "setElementForId"),
  we: any = (o as any)((e: any): any => {
    if (!e) return;
    const h: any = (H as any)(),
      p: any = (v as any)[((v as any).length as any) - (1 as any)];
    (e as any).icon && ((p as any).icon = (j as any)((e as any).icon, h)), (e as any).class && ((p as any).cssClasses = (j as any)((e as any).class, h));
  }, "decorateNode"),
  Ae: any = (o as any)((e: any): any => {
    switch (e) {
      case (y as any).DEFAULT:
        return "no-border";
      case (y as any).RECT:
        return "rect";
      case (y as any).ROUNDED_RECT:
        return "rounded-rect";
      case (y as any).CIRCLE:
        return "circle";
      case (y as any).CLOUD:
        return "cloud";
      case (y as any).BANG:
        return "bang";
      case (y as any).HEXAGON:
        return "hexgon";
      default:
        return "no-border";
    }
  }, "type2Str"),
  Te: any = (o as any)((): any => te, "getLogger"),
  Re: any = (o as any)((e: any): any => (ie as any)[e], "getElementById"),
  Pe: any = {
    clear: ve,
    addNode: Oe,
    getSections: he,
    getData: Le,
    nodeType: y,
    getType: Ie,
    setElementForId: Ce,
    decorateNode: we,
    type2Str: Ae,
    getLogger: Te,
    getElementById: Re
  },
  Ve: any = Pe,
  Be: any = (o as any)(async (e: any, h: any, p: any, s: any): Promise<any> => {
    ((te as any).debug as any)((`Rendering kanban diagram
` as any) + (e as any));
    const _: any = (((s as any).db as any).getData as any)(),
      m: any = (H as any)();
    (m as any).htmlLabels = !1;
    const l: any = (fe as any)(h);
    for (const f of (_ as any).nodes) (f as any).domId = `${h}-${(f as any).id}`;
    const D: any = ((l as any).append as any)("g");
    ((D as any).attr as any)("class", "sections");
    const I: any = ((l as any).append as any)("g");
    ((I as any).attr as any)("class", "items");
    const g: any = (((_ as any).nodes as any).filter as any)((f: any): any => (f as any).isGroup);
    let w: any = 0;
    const k: number = 10,
      G: any = [];
    let N: any = 25;
    for (const f of g) {
      const A: any = m?.kanban?.sectionWidth || 200;
      w = (w as any) + (1 as any), (f as any).x = ((A as any) * (w as any) as any) + ((((w as any) - (1 as any) as any) * (k as any) as any) / (2 as any) as any), (f as any).width = A, (f as any).y = 0, (f as any).height = (A as any) * (3 as any), (f as any).rx = 5, (f as any).ry = 5, (f as any).cssClasses = (((f as any).cssClasses as any) + (" section-" as any) as any) + (w as any);
      const L: any = await (ye as any)(D, f);
      N = ((Math as any).max as any)(N, L?.labelBBox?.height), ((G as any).push as any)(L);
    }
    let V: any = 0;
    for (const f of g) {
      const A: any = (G as any)[V];
      V = (V as any) + (1 as any);
      const L: any = m?.kanban?.sectionWidth || 200,
        M: any = (((-L as any) * (3 as any) as any) / (2 as any) as any) + (N as any);
      let T: any = M;
      const K: any = (((_ as any).nodes as any).filter as any)((i: any): any => ((i as any).parentId as any) === ((f as any).id as any));
      for (const i of K) {
        if ((i as any).isGroup) throw new (Error as any)("Groups within groups are not allowed in Kanban diagrams");
        (i as any).x = (f as any).x, (i as any).width = (L as any) - ((1.5 as any) * (k as any) as any);
        const r: any = (((((await (be as any)(I, i, {
          config: m
        })) as any).node as any)() as any).getBBox as any)();
        (i as any).y = (T as any) + (((r as any).height as any) / (2 as any) as any), await (me as any)(i), T = (((i as any).y as any) + (((r as any).height as any) / (2 as any) as any) as any) + ((k as any) / (2 as any) as any);
      }
      const B: any = (((A as any).cluster as any).select as any)("rect"),
        O: any = (((Math as any).max as any)(((T as any) - (M as any) as any) + ((3 as any) * (k as any) as any), 50) as any) + ((N as any) - (25 as any) as any);
      ((B as any).attr as any)("height", O);
    }
    (_e as any)(void 0, l, (m as any).mindmap?.padding ?? ((Y as any).kanban as any).padding, (m as any).mindmap?.useMaxWidth ?? ((Y as any).kanban as any).useMaxWidth);
  }, "draw"),
  Fe: any = {
    draw: Be
  },
  je: any = (o as any)((e: any): any => {
    let h: any = "";
    for (let s: any = 0; (s as any) < ((e as any).THEME_COLOR_LIMIT as any); s++) (e as any)[("lineColor" as any) + (s as any)] = (e as any)[("lineColor" as any) + (s as any)] || (e as any)[("cScaleInv" as any) + (s as any)], (Se as any)((e as any)[("lineColor" as any) + (s as any)]) ? (e as any)[("lineColor" as any) + (s as any)] = (ce as any)((e as any)[("lineColor" as any) + (s as any)], 20) : (e as any)[("lineColor" as any) + (s as any)] = (le as any)((e as any)[("lineColor" as any) + (s as any)], 20);
    const p: any = (o as any)((s: any, d: any): any => (e as any).darkMode ? (le as any)(s, d) : (ce as any)(s, d), "adjuster");
    for (let s: any = 0; (s as any) < ((e as any).THEME_COLOR_LIMIT as any); s++) {
      const d: any = ("" as any) + ((17 as any) - ((3 as any) * (s as any) as any) as any);
      h += `
    .section-${(s as any) - (1 as any)} rect, .section-${(s as any) - (1 as any)} path, .section-${(s as any) - (1 as any)} circle, .section-${(s as any) - (1 as any)} polygon, .section-${(s as any) - (1 as any)} path  {
      fill: ${(p as any)((e as any)[("cScale" as any) + (s as any)], 10)};
      stroke: ${(p as any)((e as any)[("cScale" as any) + (s as any)], 10)};

    }
    .section-${(s as any) - (1 as any)} text {
     fill: ${(e as any)[("cScaleLabel" as any) + (s as any)]};
    }
    .node-icon-${(s as any) - (1 as any)} {
      font-size: 40px;
      color: ${(e as any)[("cScaleLabel" as any) + (s as any)]};
    }
    .section-edge-${(s as any) - (1 as any)}{
      stroke: ${(e as any)[("cScale" as any) + (s as any)]};
    }
    .edge-depth-${(s as any) - (1 as any)}{
      stroke-width: ${d};
    }
    .section-${(s as any) - (1 as any)} line {
      stroke: ${(e as any)[("cScaleInv" as any) + (s as any)]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${(e as any).background};
    stroke: ${(e as any).nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${(e as any).background};
    stroke: ${(e as any).nodeBorder};
    text-decoration: underline;
  }
    `;
    }
    return h;
  }, "genSections"),
  Ge: any = (o as any)((e: any): any => `
  .edge {
    stroke-width: 3;
  }
  ${(je as any)(e)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${(e as any).git0};
  }
  .section-root text {
    fill: ${(e as any).gitBranchLabel0};
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
  .cluster-label, .label {
    color: ${(e as any).textColor};
    fill: ${(e as any).textColor};
    }
  .kanban-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
    ${(Ne as any)()}
`, "getStyles"),
  Me: any = Ge,
  ze: any = {
    db: Ve,
    renderer: Fe,
    parser: xe,
    styles: Me
  };
export { ze as diagram };
//# debugId=8543acfe-6a62-4934-94e8-9da854ad02ad
