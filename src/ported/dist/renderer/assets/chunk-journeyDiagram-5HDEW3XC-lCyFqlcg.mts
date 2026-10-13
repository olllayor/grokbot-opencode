declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "e50e91cf-842d-43f7-9ce1-7a591f578e4e", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-e50e91cf-842d-43f7-9ce1-7a591f578e4e");
  } catch (e: any) {}
} as any)();
import { g as gt } from "./chunk-chunk-5VM5RSS4-CTCaRfNa.js";
import { a as mt, g as lt, h as xt, d as kt } from "./chunk-chunk-32BRIVSS-CL4hvhVG.js";
import { _ as s, g as _t, s as vt, a as bt, b as wt, p as Tt, o as St, c as R, d as X, e as $t, q as Mt } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { d as it } from "./chunk-arc-DIyNF4LI.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var U: any = (function (this: any): any {
  var t: any = (s as any)(function (this: any, h: any, r: any, n: any, l: any): any {
      for (n = n || {}, l = (h as any).length; l--; (n as any)[(h as any)[l]] = r);
      return n;
    }, "o"),
    e: any = [6, 8, 10, 11, 12, 14, 16, 17, 18],
    a: any = [1, 9],
    f: any = [1, 10],
    i: any = [1, 11],
    u: any = [1, 12],
    p: any = [1, 13],
    o: any = [1, 14],
    g: any = {
      trace: (s as any)(function (this: any): any {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        journey: 4,
        document: 5,
        EOF: 6,
        line: 7,
        SPACE: 8,
        statement: 9,
        NEWLINE: 10,
        title: 11,
        acc_title: 12,
        acc_title_value: 13,
        acc_descr: 14,
        acc_descr_value: 15,
        acc_descr_multiline_value: 16,
        section: 17,
        taskName: 18,
        taskData: 19,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        4: "journey",
        6: "EOF",
        8: "SPACE",
        10: "NEWLINE",
        11: "title",
        12: "acc_title",
        13: "acc_title_value",
        14: "acc_descr",
        15: "acc_descr_value",
        16: "acc_descr_multiline_value",
        17: "section",
        18: "taskName",
        19: "taskData"
      },
      productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 2]],
      performAction: (s as any)(function (this: any, r: any, n: any, l: any, y: any, d: any, c: any, v: any): any {
        var k: any = ((c as any).length as any) - (1 as any);
        switch (d) {
          case 1:
            return (c as any)[(k as any) - (1 as any)];
          case 2:
            (this as any).$ = [];
            break;
          case 3:
            (((c as any)[(k as any) - (1 as any)] as any).push as any)((c as any)[k]), (this as any).$ = (c as any)[(k as any) - (1 as any)];
            break;
          case 4:
          case 5:
            (this as any).$ = (c as any)[k];
            break;
          case 6:
          case 7:
            (this as any).$ = [];
            break;
          case 8:
            ((y as any).setDiagramTitle as any)((((c as any)[k] as any).substr as any)(6)), (this as any).$ = (((c as any)[k] as any).substr as any)(6);
            break;
          case 9:
            (this as any).$ = (((c as any)[k] as any).trim as any)(), ((y as any).setAccTitle as any)((this as any).$);
            break;
          case 10:
          case 11:
            (this as any).$ = (((c as any)[k] as any).trim as any)(), ((y as any).setAccDescription as any)((this as any).$);
            break;
          case 12:
            ((y as any).addSection as any)((((c as any)[k] as any).substr as any)(8)), (this as any).$ = (((c as any)[k] as any).substr as any)(8);
            break;
          case 13:
            ((y as any).addTask as any)((c as any)[(k as any) - (1 as any)], (c as any)[k]), (this as any).$ = "task";
            break;
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: [1, 2]
      }, {
        1: [3]
      }, (t as any)(e, [2, 2], {
        5: 3
      }), {
        6: [1, 4],
        7: 5,
        8: [1, 6],
        9: 7,
        10: [1, 8],
        11: a,
        12: f,
        14: i,
        16: u,
        17: p,
        18: o
      }, (t as any)(e, [2, 7], {
        1: [2, 1]
      }), (t as any)(e, [2, 3]), {
        9: 15,
        11: a,
        12: f,
        14: i,
        16: u,
        17: p,
        18: o
      }, (t as any)(e, [2, 5]), (t as any)(e, [2, 6]), (t as any)(e, [2, 8]), {
        13: [1, 16]
      }, {
        15: [1, 17]
      }, (t as any)(e, [2, 11]), (t as any)(e, [2, 12]), {
        19: [1, 18]
      }, (t as any)(e, [2, 4]), (t as any)(e, [2, 9]), (t as any)(e, [2, 10]), (t as any)(e, [2, 13])],
      defaultActions: {},
      parseError: (s as any)(function (this: any, r: any, n: any): any {
        if ((n as any).recoverable) ((this as any).trace as any)(r);else {
          var l: any = new (Error as any)(r);
          throw (l as any).hash = n, l;
        }
      }, "parseError"),
      parse: (s as any)(function (this: any, r: any): any {
        var O: any;
        var n: any = this,
          l: any = [0],
          y: any = [],
          d: any = [null],
          c: any = [],
          v: any = (this as any).table,
          k: any = "",
          C: any = 0,
          Q: any = 0,
          yt: number = 2,
          D: number = 1,
          dt: any = (((c as any).slice as any).call as any)(arguments, 1),
          _: any = ((Object as any).create as any)((this as any).lexer),
          I: any = {
            yy: {}
          };
        for (O in (this as any).yy) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).yy, O) && (((I as any).yy as any)[O] = ((this as any).yy as any)[O]);
        ((_ as any).setInput as any)(r, (I as any).yy), ((I as any).yy as any).lexer = _, ((I as any).yy as any).parser = this, (typeof (_ as any).yylloc as any) > ("u" as any) && ((_ as any).yylloc = {});
        var Y: any = (_ as any).yylloc;
        ((c as any).push as any)(Y);
        var ft: any = (_ as any).options && ((_ as any).options as any).ranges;
        (typeof ((I as any).yy as any).parseError as any) == ("function" as any) ? (this as any).parseError = ((I as any).yy as any).parseError : (this as any).parseError = (((Object as any).getPrototypeOf as any)(this) as any).parseError;
        function pt(this: any, w: any): any {
          (l as any).length = ((l as any).length as any) - ((2 as any) * (w as any) as any), (d as any).length = ((d as any).length as any) - (w as any), (c as any).length = ((c as any).length as any) - (w as any);
        }
        (s as any)(pt, "popStack");
        function tt(this: any): any {
          var w: any;
          return w = ((y as any).pop as any)() || ((_ as any).lex as any)() || D, (typeof w as any) != ("number" as any) && (w instanceof Array && (y = w, w = ((y as any).pop as any)()), w = ((n as any).symbols_ as any)[w] || w), w;
        }
        (s as any)(tt, "lex");
        for (var b: any, A: any, T: any, q: any, F: any = {}, N: any, M: any, et: any, z: any;;) {
          if (A = (l as any)[((l as any).length as any) - (1 as any)], ((this as any).defaultActions as any)[A] ? T = ((this as any).defaultActions as any)[A] : (((b as any) === (null as any) || (typeof b as any) > ("u" as any)) && (b = (tt as any)()), T = (v as any)[A] && ((v as any)[A] as any)[b]), (typeof T as any) > ("u" as any) || !(T as any).length || !(T as any)[0]) {
            var H: any = "";
            z = [];
            for (N in (v as any)[A]) ((this as any).terminals_ as any)[N] && (N as any) > (yt as any) && ((z as any).push as any)((("'" as any) + (((this as any).terminals_ as any)[N] as any) as any) + ("'" as any));
            (_ as any).showPosition ? H = (((((((("Parse error on line " as any) + ((C as any) + (1 as any) as any) as any) + (`:
` as any) as any) + (((_ as any).showPosition as any)() as any) as any) + (`
Expecting ` as any) as any) + (((z as any).join as any)(", ") as any) as any) + (", got '" as any) as any) + ((((this as any).terminals_ as any)[b] || b) as any) as any) + ("'" as any) : H = ((("Parse error on line " as any) + ((C as any) + (1 as any) as any) as any) + (": Unexpected " as any) as any) + (((b as any) == (D as any) ? "end of input" : (("'" as any) + ((((this as any).terminals_ as any)[b] || b) as any) as any) + ("'" as any)) as any), ((this as any).parseError as any)(H, {
              text: (_ as any).match,
              token: ((this as any).terminals_ as any)[b] || b,
              line: (_ as any).yylineno,
              loc: Y,
              expected: z
            });
          }
          if ((T as any)[0] instanceof Array && ((T as any).length as any) > (1 as any)) throw new (Error as any)(((("Parse Error: multiple actions possible at state: " as any) + (A as any) as any) + (", token: " as any) as any) + (b as any));
          switch ((T as any)[0]) {
            case 1:
              ((l as any).push as any)(b), ((d as any).push as any)((_ as any).yytext), ((c as any).push as any)((_ as any).yylloc), ((l as any).push as any)((T as any)[1]), b = null, Q = (_ as any).yyleng, k = (_ as any).yytext, C = (_ as any).yylineno, Y = (_ as any).yylloc;
              break;
            case 2:
              if (M = (((this as any).productions_ as any)[(T as any)[1]] as any)[1], (F as any).$ = (d as any)[((d as any).length as any) - (M as any)], (F as any)._$ = {
                first_line: ((c as any)[((c as any).length as any) - ((M || 1) as any)] as any).first_line,
                last_line: ((c as any)[((c as any).length as any) - (1 as any)] as any).last_line,
                first_column: ((c as any)[((c as any).length as any) - ((M || 1) as any)] as any).first_column,
                last_column: ((c as any)[((c as any).length as any) - (1 as any)] as any).last_column
              }, ft && (((F as any)._$ as any).range = [(((c as any)[((c as any).length as any) - ((M || 1) as any)] as any).range as any)[0], (((c as any)[((c as any).length as any) - (1 as any)] as any).range as any)[1]]), q = (((this as any).performAction as any).apply as any)(F, (([k, Q, C, (I as any).yy, (T as any)[1], d, c] as any).concat as any)(dt)), (typeof q as any) < ("u" as any)) return q;
              M && (l = ((l as any).slice as any)(0, ((-1 as any) * (M as any) as any) * (2 as any)), d = ((d as any).slice as any)(0, (-1 as any) * (M as any)), c = ((c as any).slice as any)(0, (-1 as any) * (M as any))), ((l as any).push as any)((((this as any).productions_ as any)[(T as any)[1]] as any)[0]), ((d as any).push as any)((F as any).$), ((c as any).push as any)((F as any)._$), et = ((v as any)[(l as any)[((l as any).length as any) - (2 as any)]] as any)[(l as any)[((l as any).length as any) - (1 as any)]], ((l as any).push as any)(et);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }, "parse")
    },
    m: any = (function (this: any): any {
      var h: any = {
        EOF: 1,
        parseError: (s as any)(function (this: any, n: any, l: any): any {
          if (((this as any).yy as any).parser) ((((this as any).yy as any).parser as any).parseError as any)(n, l);else throw new (Error as any)(n);
        }, "parseError"),
        setInput: (s as any)(function (this: any, r: any, n: any): any {
          return (this as any).yy = n || (this as any).yy || {}, (this as any)._input = r, (this as any)._more = (this as any)._backtrack = (this as any).done = !1, (this as any).yylineno = (this as any).yyleng = 0, (this as any).yytext = (this as any).matched = (this as any).match = "", (this as any).conditionStack = ["INITIAL"], (this as any).yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [0, 0]), (this as any).offset = 0, this;
        }, "setInput"),
        input: (s as any)(function (this: any): any {
          var r: any = ((this as any)._input as any)[0];
          (this as any).yytext += r, (this as any).yyleng++, (this as any).offset++, (this as any).match += r, (this as any).matched += r;
          var n: any = ((r as any).match as any)(/(?:\r\n?|\n).*/g);
          return n ? ((this as any).yylineno++, ((this as any).yylloc as any).last_line++) : ((this as any).yylloc as any).last_column++, ((this as any).options as any).ranges && (((this as any).yylloc as any).range as any)[1]++, (this as any)._input = (((this as any)._input as any).slice as any)(1), r;
        }, "input"),
        unput: (s as any)(function (this: any, r: any): any {
          var n: any = (r as any).length,
            l: any = ((r as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any)._input = (r as any) + ((this as any)._input as any), (this as any).yytext = (((this as any).yytext as any).substr as any)(0, (((this as any).yytext as any).length as any) - (n as any)), (this as any).offset -= n;
          var y: any = (((this as any).match as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any).match = (((this as any).match as any).substr as any)(0, (((this as any).match as any).length as any) - (1 as any)), (this as any).matched = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (1 as any)), ((l as any).length as any) - (1 as any) && ((this as any).yylineno -= ((l as any).length as any) - (1 as any));
          var d: any = ((this as any).yylloc as any).range;
          return (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).first_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).first_column,
            last_column: l ? (((((l as any).length as any) === ((y as any).length as any) ? ((this as any).yylloc as any).first_column : 0) as any) + (((y as any)[((y as any).length as any) - ((l as any).length as any)] as any).length as any) as any) - (((l as any)[0] as any).length as any) : (((this as any).yylloc as any).first_column as any) - (n as any)
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(d as any)[0], (((d as any)[0] as any) + ((this as any).yyleng as any) as any) - (n as any)]), (this as any).yyleng = ((this as any).yytext as any).length, this;
        }, "unput"),
        more: (s as any)(function (this: any): any {
          return (this as any)._more = !0, this;
        }, "more"),
        reject: (s as any)(function (this: any): any {
          if (((this as any).options as any).backtrack_lexer) (this as any)._backtrack = !0;else return ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
          return this;
        }, "reject"),
        less: (s as any)(function (this: any, r: any): any {
          ((this as any).unput as any)((((this as any).match as any).slice as any)(r));
        }, "less"),
        pastInput: (s as any)(function (this: any): any {
          var r: any = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (((this as any).match as any).length as any));
          return ((((r as any).length as any) > (20 as any) ? "..." : "") as any) + (((((r as any).substr as any)(-20) as any).replace as any)(/\n/g, "") as any);
        }, "pastInput"),
        upcomingInput: (s as any)(function (this: any): any {
          var r: any = (this as any).match;
          return ((r as any).length as any) < (20 as any) && (r += (((this as any)._input as any).substr as any)(0, (20 as any) - ((r as any).length as any))), (((((r as any).substr as any)(0, 20) as any) + ((((r as any).length as any) > (20 as any) ? "..." : "") as any) as any).replace as any)(/\n/g, "");
        }, "upcomingInput"),
        showPosition: (s as any)(function (this: any): any {
          var r: any = ((this as any).pastInput as any)(),
            n: any = ((new (Array as any)(((r as any).length as any) + (1 as any)) as any).join as any)("-");
          return ((((r as any) + (((this as any).upcomingInput as any)() as any) as any) + (`
` as any) as any) + (n as any) as any) + ("^" as any);
        }, "showPosition"),
        test_match: (s as any)(function (this: any, r: any, n: any): any {
          var c: any;
          var l: any, y: any, d: any;
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
          }, ((this as any).options as any).ranges && (((d as any).yylloc as any).range = ((((this as any).yylloc as any).range as any).slice as any)(0))), y = (((r as any)[0] as any).match as any)(/(?:\r\n?|\n).*/g), y && ((this as any).yylineno += (y as any).length), (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).last_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).last_column,
            last_column: y ? (((y as any)[((y as any).length as any) - (1 as any)] as any).length as any) - ((((((y as any)[((y as any).length as any) - (1 as any)] as any).match as any)(/\r?\n?/) as any)[0] as any).length as any) : (((this as any).yylloc as any).last_column as any) + (((r as any)[0] as any).length as any)
          }, (this as any).yytext += (r as any)[0], (this as any).match += (r as any)[0], (this as any).matches = r, (this as any).yyleng = ((this as any).yytext as any).length, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(this as any).offset, (this as any).offset += (this as any).yyleng]), (this as any)._more = !1, (this as any)._backtrack = !1, (this as any)._input = (((this as any)._input as any).slice as any)(((r as any)[0] as any).length), (this as any).matched += (r as any)[0], l = (((this as any).performAction as any).call as any)(this, (this as any).yy, this, n, ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]), (this as any).done && (this as any)._input && ((this as any).done = !1), l) return l;
          if ((this as any)._backtrack) {
            for (c in d) (this as any)[c] = (d as any)[c];
            return !1;
          }
          return !1;
        }, "test_match"),
        next: (s as any)(function (this: any): any {
          if ((this as any).done) return (this as any).EOF;
          (this as any)._input || ((this as any).done = !0);
          var r: any, n: any, l: any, y: any;
          (this as any)._more || ((this as any).yytext = "", (this as any).match = "");
          for (var d: any = ((this as any)._currentRules as any)(), c: any = 0; (c as any) < ((d as any).length as any); c++) if (l = (((this as any)._input as any).match as any)(((this as any).rules as any)[(d as any)[c]]), l && (!n || (((l as any)[0] as any).length as any) > (((n as any)[0] as any).length as any))) {
            if (n = l, y = c, ((this as any).options as any).backtrack_lexer) {
              if (r = ((this as any).test_match as any)(l, (d as any)[c]), (r as any) !== (!1 as any)) return r;
              if ((this as any)._backtrack) {
                n = !1;
                continue;
              } else return !1;
            } else if (!((this as any).options as any).flex) break;
          }
          return n ? (r = ((this as any).test_match as any)(n, (d as any)[y]), (r as any) !== (!1 as any) ? r : !1) : ((this as any)._input as any) === ("" as any) ? (this as any).EOF : ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. Unrecognized text.
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
        }, "next"),
        lex: (s as any)(function (this: any): any {
          var n: any = ((this as any).next as any)();
          return n || ((this as any).lex as any)();
        }, "lex"),
        begin: (s as any)(function (this: any, n: any): any {
          (((this as any).conditionStack as any).push as any)(n);
        }, "begin"),
        popState: (s as any)(function (this: any): any {
          var n: any = (((this as any).conditionStack as any).length as any) - (1 as any);
          return (n as any) > (0 as any) ? (((this as any).conditionStack as any).pop as any)() : ((this as any).conditionStack as any)[0];
        }, "popState"),
        _currentRules: (s as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length && ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)] ? (((this as any).conditions as any)[((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]] as any).rules : (((this as any).conditions as any).INITIAL as any).rules;
        }, "_currentRules"),
        topState: (s as any)(function (this: any, n: any): any {
          return n = ((((this as any).conditionStack as any).length as any) - (1 as any) as any) - (((Math as any).abs as any)(n || 0) as any), (n as any) >= (0 as any) ? ((this as any).conditionStack as any)[n] : "INITIAL";
        }, "topState"),
        pushState: (s as any)(function (this: any, n: any): any {
          ((this as any).begin as any)(n);
        }, "pushState"),
        stateStackSize: (s as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": !0
        },
        performAction: (s as any)(function (this: any, n: any, l: any, y: any, d: any): any {
          switch (y) {
            case 0:
              break;
            case 1:
              break;
            case 2:
              return 10;
            case 3:
              break;
            case 4:
              break;
            case 5:
              return 4;
            case 6:
              return 11;
            case 7:
              return ((this as any).begin as any)("acc_title"), 12;
            case 8:
              return ((this as any).popState as any)(), "acc_title_value";
            case 9:
              return ((this as any).begin as any)("acc_descr"), 14;
            case 10:
              return ((this as any).popState as any)(), "acc_descr_value";
            case 11:
              ((this as any).begin as any)("acc_descr_multiline");
              break;
            case 12:
              ((this as any).popState as any)();
              break;
            case 13:
              return "acc_descr_multiline_value";
            case 14:
              return 17;
            case 15:
              return 18;
            case 16:
              return 19;
            case 17:
              return ":";
            case 18:
              return 6;
            case 19:
              return "INVALID";
          }
        }, "anonymous"),
        rules: [/^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:journey\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
        conditions: {
          acc_descr_multiline: {
            rules: [12, 13],
            inclusive: !1
          },
          acc_descr: {
            rules: [10],
            inclusive: !1
          },
          acc_title: {
            rules: [8],
            inclusive: !1
          },
          INITIAL: {
            rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19],
            inclusive: !0
          }
        }
      };
      return h;
    } as any)();
  (g as any).lexer = m;
  function x(this: any): any {
    (this as any).yy = {};
  }
  return (s as any)(x, "Parser"), (x as any).prototype = g, (g as any).Parser = x, new (x as any)();
} as any)();
(U as any).parser = U;
var Et: any = U,
  V: any = "",
  J: any = [],
  L: any = [],
  B: any = [],
  Ct: any = (s as any)(function (this: any): any {
    (J as any).length = 0, (L as any).length = 0, V = "", (B as any).length = 0, (Mt as any)();
  }, "clear"),
  Pt: any = (s as any)(function (this: any, t: any): any {
    V = t, ((J as any).push as any)(t);
  }, "addSection"),
  It: any = (s as any)(function (this: any): any {
    return J;
  }, "getSections"),
  At: any = (s as any)(function (this: any): any {
    let t: any = (rt as any)();
    const e: number = 100;
    let a: any = 0;
    for (; !t && (a as any) < (e as any);) t = (rt as any)(), a++;
    return ((L as any).push as any)(...B), L;
  }, "getTasks"),
  Ft: any = (s as any)(function (this: any): any {
    const t: any = [];
    return ((L as any).forEach as any)((a: any): any => {
      (a as any).people && ((t as any).push as any)(...(a as any).people);
    }), (([...new (Set as any)(t)] as any).sort as any)();
  }, "updateActors"),
  Vt: any = (s as any)(function (this: any, t: any, e: any): any {
    const a: any = ((((e as any).substr as any)(1) as any).split as any)(":");
    let f: any = 0,
      i: any = [];
    ((a as any).length as any) === (1 as any) ? (f = (Number as any)((a as any)[0]), i = []) : (f = (Number as any)((a as any)[0]), i = (((a as any)[1] as any).split as any)(","));
    const u: any = ((i as any).map as any)((o: any): any => ((o as any).trim as any)()),
      p: any = {
        section: V,
        type: V,
        people: u,
        task: t,
        score: f
      };
    ((B as any).push as any)(p);
  }, "addTask"),
  Rt: any = (s as any)(function (this: any, t: any): any {
    const e: any = {
      section: V,
      type: V,
      description: t,
      task: t,
      classes: []
    };
    ((L as any).push as any)(e);
  }, "addTaskOrg"),
  rt: any = (s as any)(function (this: any): any {
    const t: any = (s as any)(function (this: any, a: any): any {
      return ((B as any)[a] as any).processed;
    }, "compileTask");
    let e: any = !0;
    for (const [a, f] of ((B as any).entries as any)()) (t as any)(a), e = e && (f as any).processed;
    return e;
  }, "compileTasks"),
  Lt: any = (s as any)(function (this: any): any {
    return (Ft as any)();
  }, "getActors"),
  nt: any = {
    getConfig: (s as any)((): any => ((R as any)() as any).journey, "getConfig"),
    clear: Ct,
    setDiagramTitle: St,
    getDiagramTitle: Tt,
    setAccTitle: wt,
    getAccTitle: bt,
    setAccDescription: vt,
    getAccDescription: _t,
    addSection: Pt,
    getSections: It,
    getTasks: At,
    addTask: Vt,
    addTaskOrg: Rt,
    getActors: Lt
  },
  Bt: any = (s as any)((t: any): any => `.label {
    font-family: ${(t as any).fontFamily};
    color: ${(t as any).textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${(t as any).textColor}
  }

  .legend {
    fill: ${(t as any).textColor};
    font-family: ${(t as any).fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${(t as any).textColor}
  }

  .face {
    ${(t as any).faceColor ? `fill: ${(t as any).faceColor}` : "fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${(t as any).mainBkg};
    stroke: ${(t as any).nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${(t as any).arrowheadColor};
  }

  .edgePath .path {
    stroke: ${(t as any).lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${(t as any).lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${(t as any).edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${(t as any).titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${(t as any).fontFamily};
    font-size: 12px;
    background: ${(t as any).tertiaryColor};
    border: 1px solid ${(t as any).border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${(t as any).fillType0 ? `fill: ${(t as any).fillType0}` : ""};
  }
  .task-type-1, .section-type-1  {
    ${(t as any).fillType0 ? `fill: ${(t as any).fillType1}` : ""};
  }
  .task-type-2, .section-type-2  {
    ${(t as any).fillType0 ? `fill: ${(t as any).fillType2}` : ""};
  }
  .task-type-3, .section-type-3  {
    ${(t as any).fillType0 ? `fill: ${(t as any).fillType3}` : ""};
  }
  .task-type-4, .section-type-4  {
    ${(t as any).fillType0 ? `fill: ${(t as any).fillType4}` : ""};
  }
  .task-type-5, .section-type-5  {
    ${(t as any).fillType0 ? `fill: ${(t as any).fillType5}` : ""};
  }
  .task-type-6, .section-type-6  {
    ${(t as any).fillType0 ? `fill: ${(t as any).fillType6}` : ""};
  }
  .task-type-7, .section-type-7  {
    ${(t as any).fillType0 ? `fill: ${(t as any).fillType7}` : ""};
  }

  .actor-0 {
    ${(t as any).actor0 ? `fill: ${(t as any).actor0}` : ""};
  }
  .actor-1 {
    ${(t as any).actor1 ? `fill: ${(t as any).actor1}` : ""};
  }
  .actor-2 {
    ${(t as any).actor2 ? `fill: ${(t as any).actor2}` : ""};
  }
  .actor-3 {
    ${(t as any).actor3 ? `fill: ${(t as any).actor3}` : ""};
  }
  .actor-4 {
    ${(t as any).actor4 ? `fill: ${(t as any).actor4}` : ""};
  }
  .actor-5 {
    ${(t as any).actor5 ? `fill: ${(t as any).actor5}` : ""};
  }
  ${(gt as any)()}
`, "getStyles"),
  jt: any = Bt,
  K: any = (s as any)(function (this: any, t: any, e: any): any {
    return (kt as any)(t, e);
  }, "drawRect"),
  Nt: any = (s as any)(function (this: any, t: any, e: any): any {
    const f: any = ((((((((((((((t as any).append as any)("circle") as any).attr as any)("cx", (e as any).cx) as any).attr as any)("cy", (e as any).cy) as any).attr as any)("class", "face") as any).attr as any)("r", 15) as any).attr as any)("stroke-width", 2) as any).attr as any)("overflow", "visible"),
      i: any = ((t as any).append as any)("g");
    ((((((((((((((i as any).append as any)("circle") as any).attr as any)("cx", ((e as any).cx as any) - ((15 as any) / (3 as any) as any)) as any).attr as any)("cy", ((e as any).cy as any) - ((15 as any) / (3 as any) as any)) as any).attr as any)("r", 1.5) as any).attr as any)("stroke-width", 2) as any).attr as any)("fill", "#666") as any).attr as any)("stroke", "#666"), ((((((((((((((i as any).append as any)("circle") as any).attr as any)("cx", ((e as any).cx as any) + ((15 as any) / (3 as any) as any)) as any).attr as any)("cy", ((e as any).cy as any) - ((15 as any) / (3 as any) as any)) as any).attr as any)("r", 1.5) as any).attr as any)("stroke-width", 2) as any).attr as any)("fill", "#666") as any).attr as any)("stroke", "#666");
    function u(this: any, g: any): any {
      const m: any = (((((((((it as any)() as any).startAngle as any)(((Math as any).PI as any) / (2 as any)) as any).endAngle as any)((3 as any) * (((Math as any).PI as any) / (2 as any) as any)) as any).innerRadius as any)(7.5) as any).outerRadius as any)(6.8181818181818175);
      ((((((((g as any).append as any)("path") as any).attr as any)("class", "mouth") as any).attr as any)("d", m) as any).attr as any)("transform", (((("translate(" as any) + ((e as any).cx as any) as any) + ("," as any) as any) + (((e as any).cy as any) + (2 as any) as any) as any) + (")" as any));
    }
    (s as any)(u, "smile");
    function p(this: any, g: any): any {
      const m: any = (((((((((it as any)() as any).startAngle as any)(((3 as any) * ((Math as any).PI as any) as any) / (2 as any)) as any).endAngle as any)((5 as any) * (((Math as any).PI as any) / (2 as any) as any)) as any).innerRadius as any)(7.5) as any).outerRadius as any)(6.8181818181818175);
      ((((((((g as any).append as any)("path") as any).attr as any)("class", "mouth") as any).attr as any)("d", m) as any).attr as any)("transform", (((("translate(" as any) + ((e as any).cx as any) as any) + ("," as any) as any) + (((e as any).cy as any) + (7 as any) as any) as any) + (")" as any));
    }
    (s as any)(p, "sad");
    function o(this: any, g: any): any {
      ((((((((((((((((((((g as any).append as any)("line") as any).attr as any)("class", "mouth") as any).attr as any)("stroke", 2) as any).attr as any)("x1", ((e as any).cx as any) - (5 as any)) as any).attr as any)("y1", ((e as any).cy as any) + (7 as any)) as any).attr as any)("x2", ((e as any).cx as any) + (5 as any)) as any).attr as any)("y2", ((e as any).cy as any) + (7 as any)) as any).attr as any)("class", "mouth") as any).attr as any)("stroke-width", "1px") as any).attr as any)("stroke", "#666");
    }
    return (s as any)(o, "ambivalent"), ((e as any).score as any) > (3 as any) ? (u as any)(i) : ((e as any).score as any) < (3 as any) ? (p as any)(i) : (o as any)(i), f;
  }, "drawFace"),
  ot: any = (s as any)(function (this: any, t: any, e: any): any {
    const a: any = ((t as any).append as any)("circle");
    return ((a as any).attr as any)("cx", (e as any).cx), ((a as any).attr as any)("cy", (e as any).cy), ((a as any).attr as any)("class", ("actor-" as any) + ((e as any).pos as any)), ((a as any).attr as any)("fill", (e as any).fill), ((a as any).attr as any)("stroke", (e as any).stroke), ((a as any).attr as any)("r", (e as any).r), ((a as any).class as any) !== (void 0 as any) && ((a as any).attr as any)("class", (a as any).class), ((e as any).title as any) !== (void 0 as any) && ((((a as any).append as any)("title") as any).text as any)((e as any).title), a;
  }, "drawCircle"),
  ct: any = (s as any)(function (this: any, t: any, e: any): any {
    return (xt as any)(t, e);
  }, "drawText"),
  zt: any = (s as any)(function (this: any, t: any, e: any): any {
    function a(this: any, i: any, u: any, p: any, o: any, g: any): any {
      return ((((((((((((((((((i as any) + ("," as any) as any) + (u as any) as any) + (" " as any) as any) + ((i as any) + (p as any) as any) as any) + ("," as any) as any) + (u as any) as any) + (" " as any) as any) + ((i as any) + (p as any) as any) as any) + ("," as any) as any) + (((u as any) + (o as any) as any) - (g as any) as any) as any) + (" " as any) as any) + (((i as any) + (p as any) as any) - ((g as any) * (1.2 as any) as any) as any) as any) + ("," as any) as any) + ((u as any) + (o as any) as any) as any) + (" " as any) as any) + (i as any) as any) + ("," as any) as any) + ((u as any) + (o as any) as any);
    }
    (s as any)(a, "genPoints");
    const f: any = ((t as any).append as any)("polygon");
    ((f as any).attr as any)("points", (a as any)((e as any).x, (e as any).y, 50, 20, 7)), ((f as any).attr as any)("class", "labelBox"), (e as any).y = ((e as any).y as any) + ((e as any).labelMargin as any), (e as any).x = ((e as any).x as any) + ((.5 as any) * ((e as any).labelMargin as any) as any), (ct as any)(t, e);
  }, "drawLabel"),
  Wt: any = (s as any)(function (this: any, t: any, e: any, a: any): any {
    const f: any = ((t as any).append as any)("g"),
      i: any = (lt as any)();
    (i as any).x = (e as any).x, (i as any).y = (e as any).y, (i as any).fill = (e as any).fill, (i as any).width = (((a as any).width as any) * ((e as any).taskCount as any) as any) + (((a as any).diagramMarginX as any) * (((e as any).taskCount as any) - (1 as any) as any) as any), (i as any).height = (a as any).height, (i as any).class = ("journey-section section-type-" as any) + ((e as any).num as any), (i as any).rx = 3, (i as any).ry = 3, (K as any)(f, i), ((ht as any)(a) as any)((e as any).text, f, (i as any).x, (i as any).y, (i as any).width, (i as any).height, {
      class: ("journey-section section-type-" as any) + ((e as any).num as any)
    }, a, (e as any).colour);
  }, "drawSection"),
  Z: any = -1,
  Ot: any = (s as any)(function (this: any, t: any, e: any, a: any, f: any): any {
    const i: any = ((e as any).x as any) + (((a as any).width as any) / (2 as any) as any),
      u: any = ((t as any).append as any)("g");
    Z++, ((((((((((((((((((((u as any).append as any)("line") as any).attr as any)("id", ((f as any) + ("-task" as any) as any) + (Z as any)) as any).attr as any)("x1", i) as any).attr as any)("y1", (e as any).y) as any).attr as any)("x2", i) as any).attr as any)("y2", 450) as any).attr as any)("class", "task-line") as any).attr as any)("stroke-width", "1px") as any).attr as any)("stroke-dasharray", "4 2") as any).attr as any)("stroke", "#666"), (Nt as any)(u, {
      cx: i,
      cy: (300 as any) + (((5 as any) - ((e as any).score as any) as any) * (30 as any) as any),
      score: (e as any).score
    });
    const o: any = (lt as any)();
    (o as any).x = (e as any).x, (o as any).y = (e as any).y, (o as any).fill = (e as any).fill, (o as any).width = (a as any).width, (o as any).height = (a as any).height, (o as any).class = ("task task-type-" as any) + ((e as any).num as any), (o as any).rx = 3, (o as any).ry = 3, (K as any)(u, o);
    let g: any = ((e as any).x as any) + (14 as any);
    (((e as any).people as any).forEach as any)((m: any): any => {
      const x: any = (((e as any).actors as any)[m] as any).color,
        h: any = {
          cx: g,
          cy: (e as any).y,
          r: 7,
          fill: x,
          stroke: "#000",
          title: m,
          pos: (((e as any).actors as any)[m] as any).position
        };
      (ot as any)(u, h), g += 10;
    }), ((ht as any)(a) as any)((e as any).task, u, (o as any).x, (o as any).y, (o as any).width, (o as any).height, {
      class: "task"
    }, a, (e as any).colour);
  }, "drawTask"),
  Yt: any = (s as any)(function (this: any, t: any, e: any): any {
    (mt as any)(t, e);
  }, "drawBackgroundRect"),
  ht: any = (function (this: any): any {
    function t(this: any, i: any, u: any, p: any, o: any, g: any, m: any, x: any, h: any): any {
      const r: any = ((((((((((((u as any).append as any)("text") as any).attr as any)("x", (p as any) + ((g as any) / (2 as any) as any)) as any).attr as any)("y", ((o as any) + ((m as any) / (2 as any) as any) as any) + (5 as any)) as any).style as any)("font-color", h) as any).style as any)("text-anchor", "middle") as any).text as any)(i);
      (f as any)(r, x);
    }
    (s as any)(t, "byText");
    function e(this: any, i: any, u: any, p: any, o: any, g: any, m: any, x: any, h: any, r: any): any {
      const {
          taskFontSize: n,
          taskFontFamily: l
        }: any = h,
        y: any = ((i as any).split as any)(/<br\s*\/?>/gi);
      for (let d: any = 0; (d as any) < ((y as any).length as any); d++) {
        const c: any = ((d as any) * (n as any) as any) - (((n as any) * (((y as any).length as any) - (1 as any) as any) as any) / (2 as any) as any),
          v: any = ((((((((((((((u as any).append as any)("text") as any).attr as any)("x", (p as any) + ((g as any) / (2 as any) as any)) as any).attr as any)("y", o) as any).attr as any)("fill", r) as any).style as any)("text-anchor", "middle") as any).style as any)("font-size", n) as any).style as any)("font-family", l);
        ((((((((v as any).append as any)("tspan") as any).attr as any)("x", (p as any) + ((g as any) / (2 as any) as any)) as any).attr as any)("dy", c) as any).text as any)((y as any)[d]), ((((((v as any).attr as any)("y", (o as any) + ((m as any) / (2 as any) as any)) as any).attr as any)("dominant-baseline", "central") as any).attr as any)("alignment-baseline", "central"), (f as any)(v, x);
      }
    }
    (s as any)(e, "byTspan");
    function a(this: any, i: any, u: any, p: any, o: any, g: any, m: any, x: any, h: any): any {
      const r: any = ((u as any).append as any)("switch"),
        l: any = ((((((((((((((((((((r as any).append as any)("foreignObject") as any).attr as any)("x", p) as any).attr as any)("y", o) as any).attr as any)("width", g) as any).attr as any)("height", m) as any).attr as any)("position", "fixed") as any).append as any)("xhtml:div") as any).style as any)("display", "table") as any).style as any)("height", "100%") as any).style as any)("width", "100%");
      ((((((((((((l as any).append as any)("div") as any).attr as any)("class", "label") as any).style as any)("display", "table-cell") as any).style as any)("text-align", "center") as any).style as any)("vertical-align", "middle") as any).text as any)(i), (e as any)(i, r, p, o, g, m, x, h), (f as any)(l, x);
    }
    (s as any)(a, "byFo");
    function f(this: any, i: any, u: any): any {
      for (const p in u) p in u && ((i as any).attr as any)(p, (u as any)[p]);
    }
    return (s as any)(f, "_setTextAttrs"), function (this: any, i: any): any {
      return ((i as any).textPlacement as any) === ("fo" as any) ? a : ((i as any).textPlacement as any) === ("old" as any) ? t : e;
    };
  } as any)(),
  qt: any = (s as any)(function (this: any, t: any, e: any): any {
    Z = -1, ((((((((((((((((((((t as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (e as any) + ("-arrowhead" as any)) as any).attr as any)("refX", 5) as any).attr as any)("refY", 2) as any).attr as any)("markerWidth", 6) as any).attr as any)("markerHeight", 4) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 0,0 V 4 L6,2 Z");
  }, "initGraphics"),
  j: any = {
    drawRect: K,
    drawCircle: ot,
    drawSection: Wt,
    drawText: ct,
    drawLabel: zt,
    drawTask: Ot,
    drawBackgroundRect: Yt,
    initGraphics: qt
  },
  Ht: any = (s as any)(function (this: any, t: any): any {
    ((((Object as any).keys as any)(t) as any).forEach as any)(function (this: any, a: any): any {
      ($ as any)[a] = (t as any)[a];
    });
  }, "setConf"),
  E: any = {},
  W: any = 0;
function ut(this: any, t: any): any {
  const e: any = ((R as any)() as any).journey,
    a: any = (e as any).maxLabelWidth;
  W = 0;
  let f: any = 60;
  ((((Object as any).keys as any)(E) as any).forEach as any)((i: any): any => {
    const u: any = ((E as any)[i] as any).color,
      p: any = {
        cx: 20,
        cy: f,
        r: 7,
        fill: u,
        stroke: "#000",
        pos: ((E as any)[i] as any).position
      };
    ((j as any).drawCircle as any)(t, p);
    let o: any = ((((((t as any).append as any)("text") as any).attr as any)("visibility", "hidden") as any).text as any)(i);
    const g: any = (((((o as any).node as any)() as any).getBoundingClientRect as any)() as any).width;
    ((o as any).remove as any)();
    let m: any = [];
    if ((g as any) <= (a as any)) m = [i];else {
      const x: any = ((i as any).split as any)(" ");
      let h: any = "";
      o = ((((t as any).append as any)("text") as any).attr as any)("visibility", "hidden"), ((x as any).forEach as any)((r: any): any => {
        const n: any = h ? `${h} ${r}` : r;
        if (((o as any).text as any)(n), ((((((o as any).node as any)() as any).getBoundingClientRect as any)() as any).width as any) > (a as any)) {
          if (h && ((m as any).push as any)(h), h = r, ((o as any).text as any)(r), ((((((o as any).node as any)() as any).getBoundingClientRect as any)() as any).width as any) > (a as any)) {
            let y: any = "";
            for (const d of r) y += d, ((o as any).text as any)((y as any) + ("-" as any)), ((((((o as any).node as any)() as any).getBoundingClientRect as any)() as any).width as any) > (a as any) && (((m as any).push as any)((((y as any).slice as any)(0, -1) as any) + ("-" as any)), y = d);
            h = y;
          }
        } else h = n;
      }), h && ((m as any).push as any)(h), ((o as any).remove as any)();
    }
    ((m as any).forEach as any)((x: any, h: any): any => {
      const r: any = {
          x: 40,
          y: ((f as any) + (7 as any) as any) + ((h as any) * (20 as any) as any),
          fill: "#666",
          text: x,
          textMargin: (e as any).boxTextMargin ?? 5
        },
        l: any = (((((((j as any).drawText as any)(t, r) as any).node as any)() as any).getBoundingClientRect as any)() as any).width;
      (l as any) > (W as any) && (l as any) > (((e as any).leftMargin as any) - (l as any) as any) && (W = l);
    }), f += ((Math as any).max as any)(20, ((m as any).length as any) * (20 as any));
  });
}
(s as any)(ut, "drawActorLegend");
var $: any = ((R as any)() as any).journey,
  P: any = 0,
  Xt: any = (s as any)(function (this: any, t: any, e: any, a: any, f: any): any {
    const i: any = (R as any)(),
      u: any = ((i as any).journey as any).titleColor,
      p: any = ((i as any).journey as any).titleFontSize,
      o: any = ((i as any).journey as any).titleFontFamily,
      g: any = (i as any).securityLevel;
    let m: any;
    (g as any) === ("sandbox" as any) && (m = (X as any)(("#i" as any) + (e as any)));
    const x: any = (g as any) === ("sandbox" as any) ? (X as any)((((((m as any).nodes as any)() as any)[0] as any).contentDocument as any).body) : (X as any)("body");
    ((S as any).init as any)();
    const h: any = ((x as any).select as any)(("#" as any) + (e as any));
    ((j as any).initGraphics as any)(h, e);
    const r: any = (((f as any).db as any).getTasks as any)(),
      n: any = (((f as any).db as any).getDiagramTitle as any)(),
      l: any = (((f as any).db as any).getActors as any)();
    for (const C in E) delete (E as any)[C];
    let y: any = 0;
    ((l as any).forEach as any)((C: any): any => {
      (E as any)[C] = {
        color: (($ as any).actorColours as any)[(y as any) % ((($ as any).actorColours as any).length as any)],
        position: y
      }, y++;
    }), (ut as any)(h), P = (($ as any).leftMargin as any) + (W as any), ((S as any).insert as any)(0, 0, P, ((((Object as any).keys as any)(E) as any).length as any) * (50 as any)), (Gt as any)(h, r, 0, e);
    const d: any = ((S as any).getBounds as any)();
    n && ((((((((((((((((h as any).append as any)("text") as any).text as any)(n) as any).attr as any)("x", P) as any).attr as any)("font-size", p) as any).attr as any)("font-weight", "bold") as any).attr as any)("y", 25) as any).attr as any)("fill", u) as any).attr as any)("font-family", o);
    const c: any = (((d as any).stopy as any) - ((d as any).starty as any) as any) + ((2 as any) * (($ as any).diagramMarginY as any) as any),
      v: any = ((P as any) + ((d as any).stopx as any) as any) + ((2 as any) * (($ as any).diagramMarginX as any) as any);
    ($t as any)(h, c, v, ($ as any).useMaxWidth), ((((((((((((((((h as any).append as any)("line") as any).attr as any)("x1", P) as any).attr as any)("y1", (($ as any).height as any) * (4 as any)) as any).attr as any)("x2", ((v as any) - (P as any) as any) - (4 as any)) as any).attr as any)("y2", (($ as any).height as any) * (4 as any)) as any).attr as any)("stroke-width", 4) as any).attr as any)("stroke", "black") as any).attr as any)("marker-end", (("url(#" as any) + (e as any) as any) + ("-arrowhead)" as any));
    const k: any = n ? 70 : 0;
    ((h as any).attr as any)("viewBox", `${(d as any).startx} -25 ${v} ${(c as any) + (k as any)}`), ((h as any).attr as any)("preserveAspectRatio", "xMinYMin meet"), ((h as any).attr as any)("height", ((c as any) + (k as any) as any) + (25 as any));
  }, "draw"),
  S: any = {
    data: {
      startx: void 0,
      stopx: void 0,
      starty: void 0,
      stopy: void 0
    },
    verticalPos: 0,
    sequenceItems: [],
    init: (s as any)(function (this: any): any {
      (this as any).sequenceItems = [], (this as any).data = {
        startx: void 0,
        stopx: void 0,
        starty: void 0,
        stopy: void 0
      }, (this as any).verticalPos = 0;
    }, "init"),
    updateVal: (s as any)(function (this: any, t: any, e: any, a: any, f: any): any {
      ((t as any)[e] as any) === (void 0 as any) ? (t as any)[e] = a : (t as any)[e] = (f as any)(a, (t as any)[e]);
    }, "updateVal"),
    updateBounds: (s as any)(function (this: any, t: any, e: any, a: any, f: any): any {
      const i: any = ((R as any)() as any).journey,
        u: any = this;
      let p: any = 0;
      function o(this: any, g: any): any {
        return (s as any)(function (this: any, x: any): any {
          p++;
          const h: any = ((((u as any).sequenceItems as any).length as any) - (p as any) as any) + (1 as any);
          ((u as any).updateVal as any)(x, "starty", (e as any) - ((h as any) * ((i as any).boxMargin as any) as any), (Math as any).min), ((u as any).updateVal as any)(x, "stopy", (f as any) + ((h as any) * ((i as any).boxMargin as any) as any), (Math as any).max), ((u as any).updateVal as any)((S as any).data, "startx", (t as any) - ((h as any) * ((i as any).boxMargin as any) as any), (Math as any).min), ((u as any).updateVal as any)((S as any).data, "stopx", (a as any) + ((h as any) * ((i as any).boxMargin as any) as any), (Math as any).max), (g as any) !== ("activation" as any) && (((u as any).updateVal as any)(x, "startx", (t as any) - ((h as any) * ((i as any).boxMargin as any) as any), (Math as any).min), ((u as any).updateVal as any)(x, "stopx", (a as any) + ((h as any) * ((i as any).boxMargin as any) as any), (Math as any).max), ((u as any).updateVal as any)((S as any).data, "starty", (e as any) - ((h as any) * ((i as any).boxMargin as any) as any), (Math as any).min), ((u as any).updateVal as any)((S as any).data, "stopy", (f as any) + ((h as any) * ((i as any).boxMargin as any) as any), (Math as any).max));
        }, "updateItemBounds");
      }
      (s as any)(o, "updateFn"), (((this as any).sequenceItems as any).forEach as any)((o as any)());
    }, "updateBounds"),
    insert: (s as any)(function (this: any, t: any, e: any, a: any, f: any): any {
      const i: any = ((Math as any).min as any)(t, a),
        u: any = ((Math as any).max as any)(t, a),
        p: any = ((Math as any).min as any)(e, f),
        o: any = ((Math as any).max as any)(e, f);
      ((this as any).updateVal as any)((S as any).data, "startx", i, (Math as any).min), ((this as any).updateVal as any)((S as any).data, "starty", p, (Math as any).min), ((this as any).updateVal as any)((S as any).data, "stopx", u, (Math as any).max), ((this as any).updateVal as any)((S as any).data, "stopy", o, (Math as any).max), ((this as any).updateBounds as any)(i, p, u, o);
    }, "insert"),
    bumpVerticalPos: (s as any)(function (this: any, t: any): any {
      (this as any).verticalPos = ((this as any).verticalPos as any) + (t as any), ((this as any).data as any).stopy = (this as any).verticalPos;
    }, "bumpVerticalPos"),
    getVerticalPos: (s as any)(function (this: any): any {
      return (this as any).verticalPos;
    }, "getVerticalPos"),
    getBounds: (s as any)(function (this: any): any {
      return (this as any).data;
    }, "getBounds")
  },
  G: any = ($ as any).sectionFills,
  st: any = ($ as any).sectionColours,
  Gt: any = (s as any)(function (this: any, t: any, e: any, a: any, f: any): any {
    const i: any = ((R as any)() as any).journey;
    let u: any = "";
    const p: any = (((i as any).height as any) * (2 as any) as any) + ((i as any).diagramMarginY as any),
      o: any = (a as any) + (p as any);
    let g: any = 0,
      m: any = "#CCC",
      x: any = "black",
      h: any = 0;
    for (const [r, n] of ((e as any).entries as any)()) {
      if ((u as any) !== ((n as any).section as any)) {
        m = (G as any)[(g as any) % ((G as any).length as any)], h = (g as any) % ((G as any).length as any), x = (st as any)[(g as any) % ((st as any).length as any)];
        let y: any = 0;
        const d: any = (n as any).section;
        for (let v: any = r; (v as any) < ((e as any).length as any) && (((e as any)[v] as any).section as any) == (d as any); v++) y = (y as any) + (1 as any);
        const c: any = {
          x: (((r as any) * ((i as any).taskMargin as any) as any) + ((r as any) * ((i as any).width as any) as any) as any) + (P as any),
          y: 50,
          text: (n as any).section,
          fill: m,
          num: h,
          colour: x,
          taskCount: y
        };
        ((j as any).drawSection as any)(t, c, i), u = (n as any).section, g++;
      }
      const l: any = (((n as any).people as any).reduce as any)((y: any, d: any): any => ((E as any)[d] && ((y as any)[d] = (E as any)[d]), y), {});
      (n as any).x = (((r as any) * ((i as any).taskMargin as any) as any) + ((r as any) * ((i as any).width as any) as any) as any) + (P as any), (n as any).y = o, (n as any).width = (i as any).diagramMarginX, (n as any).height = (i as any).diagramMarginY, (n as any).colour = x, (n as any).fill = m, (n as any).num = h, (n as any).actors = l, ((j as any).drawTask as any)(t, n, i, f), ((S as any).insert as any)((n as any).x, (n as any).y, (((n as any).x as any) + ((n as any).width as any) as any) + ((i as any).taskMargin as any), 450);
    }
  }, "drawTasks"),
  at: any = {
    setConf: Ht,
    draw: Xt
  },
  Dt: any = {
    parser: Et,
    db: nt,
    renderer: at,
    styles: jt,
    init: (s as any)((t: any): any => {
      ((at as any).setConf as any)((t as any).journey), ((nt as any).clear as any)();
    }, "init")
  };
export { Dt as diagram };
//# debugId=e50e91cf-842d-43f7-9ce1-7a591f578e4e
