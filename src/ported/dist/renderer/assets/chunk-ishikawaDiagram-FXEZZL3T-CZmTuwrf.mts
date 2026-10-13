declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "3d5a45f3-c3ff-4cf0-8193-290eedf58673", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-3d5a45f3-c3ff-4cf0-8193-290eedf58673");
  } catch (e: any) {}
} as any)();
import { _ as o, c as ot, a1 as ut, F as dt, al as yt, q as ft, k as pt, o as it, a as gt, b as kt, g as mt, s as wt, p as _t, e as bt } from "./chunk-mermaid.core-B9Iu5CoE.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var J: any = (function (this: any): any {
  var e: any = (o as any)(function (this: any, T: any, t: any, s: any, i: any): any {
      for (s = s || {}, i = (T as any).length; i--; (s as any)[(T as any)[i]] = t);
      return s;
    }, "o"),
    h: any = [1, 4],
    r: any = [1, 14],
    a: any = [1, 12],
    l: any = [1, 13],
    y: any = [6, 7, 8],
    f: any = [1, 20],
    d: any = [1, 18],
    m: any = [1, 19],
    u: any = [6, 7, 11],
    k: any = [1, 6, 13, 14],
    g: any = [1, 23],
    _: any = [1, 24],
    x: any = [1, 6, 7, 11, 13, 14],
    D: any = {
      trace: (o as any)(function (this: any): any {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        ishikawa: 4,
        spaceLines: 5,
        SPACELINE: 6,
        NL: 7,
        ISHIKAWA: 8,
        document: 9,
        stop: 10,
        EOF: 11,
        statement: 12,
        SPACELIST: 13,
        TEXT: 14,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        6: "SPACELINE",
        7: "NL",
        8: "ISHIKAWA",
        11: "EOF",
        13: "SPACELIST",
        14: "TEXT"
      },
      productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 2], [12, 1], [12, 1], [12, 1]],
      performAction: (o as any)(function (this: any, t: any, s: any, i: any, c: any, p: any, n: any, v: any): any {
        var w: any = ((n as any).length as any) - (1 as any);
        switch (p) {
          case 6:
          case 7:
            return c;
          case 15:
            ((c as any).addNode as any)(((n as any)[(w as any) - (1 as any)] as any).length, (((n as any)[w] as any).trim as any)());
            break;
          case 16:
            ((c as any).addNode as any)(0, (((n as any)[w] as any).trim as any)());
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
        6: r,
        7: [1, 10],
        9: 9,
        12: 11,
        13: a,
        14: l
      }, (e as any)(y, [2, 3]), {
        1: [2, 2]
      }, (e as any)(y, [2, 4]), (e as any)(y, [2, 5]), {
        1: [2, 6],
        6: r,
        12: 15,
        13: a,
        14: l
      }, {
        6: r,
        9: 16,
        12: 11,
        13: a,
        14: l
      }, {
        6: f,
        7: d,
        10: 17,
        11: m
      }, (e as any)(u, [2, 18], {
        14: [1, 21]
      }), (e as any)(u, [2, 16]), (e as any)(u, [2, 17]), {
        6: f,
        7: d,
        10: 22,
        11: m
      }, {
        1: [2, 7],
        6: r,
        12: 15,
        13: a,
        14: l
      }, (e as any)(k, [2, 14], {
        7: g,
        11: _
      }), (e as any)(x, [2, 8]), (e as any)(x, [2, 9]), (e as any)(x, [2, 10]), (e as any)(u, [2, 15]), (e as any)(k, [2, 13], {
        7: g,
        11: _
      }), (e as any)(x, [2, 11]), (e as any)(x, [2, 12])],
      defaultActions: {
        2: [2, 1],
        6: [2, 2]
      },
      parseError: (o as any)(function (this: any, t: any, s: any): any {
        if ((s as any).recoverable) ((this as any).trace as any)(t);else {
          var i: any = new (Error as any)(t);
          throw (i as any).hash = s, i;
        }
      }, "parseError"),
      parse: (o as any)(function (this: any, t: any): any {
        var P: any;
        var s: any = this,
          i: any = [0],
          c: any = [],
          p: any = [null],
          n: any = [],
          v: any = (this as any).table,
          w: any = "",
          I: any = 0,
          $: any = 0,
          L: number = 2,
          A: number = 1,
          C: any = (((n as any).slice as any).call as any)(arguments, 1),
          b: any = ((Object as any).create as any)((this as any).lexer),
          S: any = {
            yy: {}
          };
        for (P in (this as any).yy) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).yy, P) && (((S as any).yy as any)[P] = ((this as any).yy as any)[P]);
        ((b as any).setInput as any)(t, (S as any).yy), ((S as any).yy as any).lexer = b, ((S as any).yy as any).parser = this, (typeof (b as any).yylloc as any) > ("u" as any) && ((b as any).yylloc = {});
        var R: any = (b as any).yylloc;
        ((n as any).push as any)(R);
        var G: any = (b as any).options && ((b as any).options as any).ranges;
        (typeof ((S as any).yy as any).parseError as any) == ("function" as any) ? (this as any).parseError = ((S as any).yy as any).parseError : (this as any).parseError = (((Object as any).getPrototypeOf as any)(this) as any).parseError;
        function Y(this: any, B: any): any {
          (i as any).length = ((i as any).length as any) - ((2 as any) * (B as any) as any), (p as any).length = ((p as any).length as any) - (B as any), (n as any).length = ((n as any).length as any) - (B as any);
        }
        (o as any)(Y, "popStack");
        function tt(this: any): any {
          var B: any;
          return B = ((c as any).pop as any)() || ((b as any).lex as any)() || A, (typeof B as any) != ("number" as any) && (B instanceof Array && (c = B, B = ((c as any).pop as any)()), B = ((s as any).symbols_ as any)[B] || B), B;
        }
        (o as any)(tt, "lex");
        for (var M: any, F: any, N: any, q: any, W: any = {}, U: any, V: any, et: any, Z: any;;) {
          if (F = (i as any)[((i as any).length as any) - (1 as any)], ((this as any).defaultActions as any)[F] ? N = ((this as any).defaultActions as any)[F] : (((M as any) === (null as any) || (typeof M as any) > ("u" as any)) && (M = (tt as any)()), N = (v as any)[F] && ((v as any)[F] as any)[M]), (typeof N as any) > ("u" as any) || !(N as any).length || !(N as any)[0]) {
            var K: any = "";
            Z = [];
            for (U in (v as any)[F]) ((this as any).terminals_ as any)[U] && (U as any) > (L as any) && ((Z as any).push as any)((("'" as any) + (((this as any).terminals_ as any)[U] as any) as any) + ("'" as any));
            (b as any).showPosition ? K = (((((((("Parse error on line " as any) + ((I as any) + (1 as any) as any) as any) + (`:
` as any) as any) + (((b as any).showPosition as any)() as any) as any) + (`
Expecting ` as any) as any) + (((Z as any).join as any)(", ") as any) as any) + (", got '" as any) as any) + ((((this as any).terminals_ as any)[M] || M) as any) as any) + ("'" as any) : K = ((("Parse error on line " as any) + ((I as any) + (1 as any) as any) as any) + (": Unexpected " as any) as any) + (((M as any) == (A as any) ? "end of input" : (("'" as any) + ((((this as any).terminals_ as any)[M] || M) as any) as any) + ("'" as any)) as any), ((this as any).parseError as any)(K, {
              text: (b as any).match,
              token: ((this as any).terminals_ as any)[M] || M,
              line: (b as any).yylineno,
              loc: R,
              expected: Z
            });
          }
          if ((N as any)[0] instanceof Array && ((N as any).length as any) > (1 as any)) throw new (Error as any)(((("Parse Error: multiple actions possible at state: " as any) + (F as any) as any) + (", token: " as any) as any) + (M as any));
          switch ((N as any)[0]) {
            case 1:
              ((i as any).push as any)(M), ((p as any).push as any)((b as any).yytext), ((n as any).push as any)((b as any).yylloc), ((i as any).push as any)((N as any)[1]), M = null, $ = (b as any).yyleng, w = (b as any).yytext, I = (b as any).yylineno, R = (b as any).yylloc;
              break;
            case 2:
              if (V = (((this as any).productions_ as any)[(N as any)[1]] as any)[1], (W as any).$ = (p as any)[((p as any).length as any) - (V as any)], (W as any)._$ = {
                first_line: ((n as any)[((n as any).length as any) - ((V || 1) as any)] as any).first_line,
                last_line: ((n as any)[((n as any).length as any) - (1 as any)] as any).last_line,
                first_column: ((n as any)[((n as any).length as any) - ((V || 1) as any)] as any).first_column,
                last_column: ((n as any)[((n as any).length as any) - (1 as any)] as any).last_column
              }, G && (((W as any)._$ as any).range = [(((n as any)[((n as any).length as any) - ((V || 1) as any)] as any).range as any)[0], (((n as any)[((n as any).length as any) - (1 as any)] as any).range as any)[1]]), q = (((this as any).performAction as any).apply as any)(W, (([w, $, I, (S as any).yy, (N as any)[1], p, n] as any).concat as any)(C)), (typeof q as any) < ("u" as any)) return q;
              V && (i = ((i as any).slice as any)(0, ((-1 as any) * (V as any) as any) * (2 as any)), p = ((p as any).slice as any)(0, (-1 as any) * (V as any)), n = ((n as any).slice as any)(0, (-1 as any) * (V as any))), ((i as any).push as any)((((this as any).productions_ as any)[(N as any)[1]] as any)[0]), ((p as any).push as any)((W as any).$), ((n as any).push as any)((W as any)._$), et = ((v as any)[(i as any)[((i as any).length as any) - (2 as any)]] as any)[(i as any)[((i as any).length as any) - (1 as any)]], ((i as any).push as any)(et);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }, "parse")
    },
    O: any = (function (this: any): any {
      var T: any = {
        EOF: 1,
        parseError: (o as any)(function (this: any, s: any, i: any): any {
          if (((this as any).yy as any).parser) ((((this as any).yy as any).parser as any).parseError as any)(s, i);else throw new (Error as any)(s);
        }, "parseError"),
        setInput: (o as any)(function (this: any, t: any, s: any): any {
          return (this as any).yy = s || (this as any).yy || {}, (this as any)._input = t, (this as any)._more = (this as any)._backtrack = (this as any).done = !1, (this as any).yylineno = (this as any).yyleng = 0, (this as any).yytext = (this as any).matched = (this as any).match = "", (this as any).conditionStack = ["INITIAL"], (this as any).yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [0, 0]), (this as any).offset = 0, this;
        }, "setInput"),
        input: (o as any)(function (this: any): any {
          var t: any = ((this as any)._input as any)[0];
          (this as any).yytext += t, (this as any).yyleng++, (this as any).offset++, (this as any).match += t, (this as any).matched += t;
          var s: any = ((t as any).match as any)(/(?:\r\n?|\n).*/g);
          return s ? ((this as any).yylineno++, ((this as any).yylloc as any).last_line++) : ((this as any).yylloc as any).last_column++, ((this as any).options as any).ranges && (((this as any).yylloc as any).range as any)[1]++, (this as any)._input = (((this as any)._input as any).slice as any)(1), t;
        }, "input"),
        unput: (o as any)(function (this: any, t: any): any {
          var s: any = (t as any).length,
            i: any = ((t as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any)._input = (t as any) + ((this as any)._input as any), (this as any).yytext = (((this as any).yytext as any).substr as any)(0, (((this as any).yytext as any).length as any) - (s as any)), (this as any).offset -= s;
          var c: any = (((this as any).match as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any).match = (((this as any).match as any).substr as any)(0, (((this as any).match as any).length as any) - (1 as any)), (this as any).matched = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (1 as any)), ((i as any).length as any) - (1 as any) && ((this as any).yylineno -= ((i as any).length as any) - (1 as any));
          var p: any = ((this as any).yylloc as any).range;
          return (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).first_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).first_column,
            last_column: i ? (((((i as any).length as any) === ((c as any).length as any) ? ((this as any).yylloc as any).first_column : 0) as any) + (((c as any)[((c as any).length as any) - ((i as any).length as any)] as any).length as any) as any) - (((i as any)[0] as any).length as any) : (((this as any).yylloc as any).first_column as any) - (s as any)
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(p as any)[0], (((p as any)[0] as any) + ((this as any).yyleng as any) as any) - (s as any)]), (this as any).yyleng = ((this as any).yytext as any).length, this;
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
        less: (o as any)(function (this: any, t: any): any {
          ((this as any).unput as any)((((this as any).match as any).slice as any)(t));
        }, "less"),
        pastInput: (o as any)(function (this: any): any {
          var t: any = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (((this as any).match as any).length as any));
          return ((((t as any).length as any) > (20 as any) ? "..." : "") as any) + (((((t as any).substr as any)(-20) as any).replace as any)(/\n/g, "") as any);
        }, "pastInput"),
        upcomingInput: (o as any)(function (this: any): any {
          var t: any = (this as any).match;
          return ((t as any).length as any) < (20 as any) && (t += (((this as any)._input as any).substr as any)(0, (20 as any) - ((t as any).length as any))), (((((t as any).substr as any)(0, 20) as any) + ((((t as any).length as any) > (20 as any) ? "..." : "") as any) as any).replace as any)(/\n/g, "");
        }, "upcomingInput"),
        showPosition: (o as any)(function (this: any): any {
          var t: any = ((this as any).pastInput as any)(),
            s: any = ((new (Array as any)(((t as any).length as any) + (1 as any)) as any).join as any)("-");
          return ((((t as any) + (((this as any).upcomingInput as any)() as any) as any) + (`
` as any) as any) + (s as any) as any) + ("^" as any);
        }, "showPosition"),
        test_match: (o as any)(function (this: any, t: any, s: any): any {
          var n: any;
          var i: any, c: any, p: any;
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
          }, ((this as any).options as any).ranges && (((p as any).yylloc as any).range = ((((this as any).yylloc as any).range as any).slice as any)(0))), c = (((t as any)[0] as any).match as any)(/(?:\r\n?|\n).*/g), c && ((this as any).yylineno += (c as any).length), (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).last_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).last_column,
            last_column: c ? (((c as any)[((c as any).length as any) - (1 as any)] as any).length as any) - ((((((c as any)[((c as any).length as any) - (1 as any)] as any).match as any)(/\r?\n?/) as any)[0] as any).length as any) : (((this as any).yylloc as any).last_column as any) + (((t as any)[0] as any).length as any)
          }, (this as any).yytext += (t as any)[0], (this as any).match += (t as any)[0], (this as any).matches = t, (this as any).yyleng = ((this as any).yytext as any).length, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(this as any).offset, (this as any).offset += (this as any).yyleng]), (this as any)._more = !1, (this as any)._backtrack = !1, (this as any)._input = (((this as any)._input as any).slice as any)(((t as any)[0] as any).length), (this as any).matched += (t as any)[0], i = (((this as any).performAction as any).call as any)(this, (this as any).yy, this, s, ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]), (this as any).done && (this as any)._input && ((this as any).done = !1), i) return i;
          if ((this as any)._backtrack) {
            for (n in p) (this as any)[n] = (p as any)[n];
            return !1;
          }
          return !1;
        }, "test_match"),
        next: (o as any)(function (this: any): any {
          if ((this as any).done) return (this as any).EOF;
          (this as any)._input || ((this as any).done = !0);
          var t: any, s: any, i: any, c: any;
          (this as any)._more || ((this as any).yytext = "", (this as any).match = "");
          for (var p: any = ((this as any)._currentRules as any)(), n: any = 0; (n as any) < ((p as any).length as any); n++) if (i = (((this as any)._input as any).match as any)(((this as any).rules as any)[(p as any)[n]]), i && (!s || (((i as any)[0] as any).length as any) > (((s as any)[0] as any).length as any))) {
            if (s = i, c = n, ((this as any).options as any).backtrack_lexer) {
              if (t = ((this as any).test_match as any)(i, (p as any)[n]), (t as any) !== (!1 as any)) return t;
              if ((this as any)._backtrack) {
                s = !1;
                continue;
              } else return !1;
            } else if (!((this as any).options as any).flex) break;
          }
          return s ? (t = ((this as any).test_match as any)(s, (p as any)[c]), (t as any) !== (!1 as any) ? t : !1) : ((this as any)._input as any) === ("" as any) ? (this as any).EOF : ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. Unrecognized text.
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
        }, "next"),
        lex: (o as any)(function (this: any): any {
          var s: any = ((this as any).next as any)();
          return s || ((this as any).lex as any)();
        }, "lex"),
        begin: (o as any)(function (this: any, s: any): any {
          (((this as any).conditionStack as any).push as any)(s);
        }, "begin"),
        popState: (o as any)(function (this: any): any {
          var s: any = (((this as any).conditionStack as any).length as any) - (1 as any);
          return (s as any) > (0 as any) ? (((this as any).conditionStack as any).pop as any)() : ((this as any).conditionStack as any)[0];
        }, "popState"),
        _currentRules: (o as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length && ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)] ? (((this as any).conditions as any)[((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]] as any).rules : (((this as any).conditions as any).INITIAL as any).rules;
        }, "_currentRules"),
        topState: (o as any)(function (this: any, s: any): any {
          return s = ((((this as any).conditionStack as any).length as any) - (1 as any) as any) - (((Math as any).abs as any)(s || 0) as any), (s as any) >= (0 as any) ? ((this as any).conditionStack as any)[s] : "INITIAL";
        }, "topState"),
        pushState: (o as any)(function (this: any, s: any): any {
          ((this as any).begin as any)(s);
        }, "pushState"),
        stateStackSize: (o as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": !0
        },
        performAction: (o as any)(function (this: any, s: any, i: any, c: any, p: any): any {
          switch (c) {
            case 0:
              return 6;
            case 1:
              return 8;
            case 2:
              return 8;
            case 3:
              return 6;
            case 4:
              return 7;
            case 5:
              return 13;
            case 6:
              return 14;
            case 7:
              return 11;
          }
        }, "anonymous"),
        rules: [/^(?:\s*%%.*)/i, /^(?:ishikawa-beta\b)/i, /^(?:ishikawa\b)/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[\s]+)/i, /^(?:[^\n]+)/i, /^(?:$)/i],
        conditions: {
          INITIAL: {
            rules: [0, 1, 2, 3, 4, 5, 6, 7],
            inclusive: !0
          }
        }
      };
      return T;
    } as any)();
  (D as any).lexer = O;
  function E(this: any): any {
    (this as any).yy = {};
  }
  return (o as any)(E, "Parser"), (E as any).prototype = D, (D as any).Parser = E, new (E as any)();
} as any)();
(J as any).parser = J;
var xt: any = J,
  H: any,
  vt: any = (H = class {
    declare baseLevel: any;
    declare root: any;
    declare stack: any;
    [key: string]: any;
    constructor() {
      (this as any).stack = [], (this as any).clear = (((this as any).clear as any).bind as any)(this), (this as any).addNode = (((this as any).addNode as any).bind as any)(this), (this as any).getRoot = (((this as any).getRoot as any).bind as any)(this);
    }
    clear(): any {
      (this as any).root = void 0, (this as any).stack = [], (this as any).baseLevel = void 0, (ft as any)();
    }
    getRoot(): any {
      return (this as any).root;
    }
    addNode(h: any, r: any): any {
      const a: any = ((pt as any).sanitizeText as any)(r, (ot as any)());
      if (!(this as any).root) {
        (this as any).root = {
          text: a,
          children: []
        }, (this as any).stack = [{
          level: 0,
          node: (this as any).root
        }], (it as any)(a);
        return;
      }
      (this as any).baseLevel ??= h;
      let l: any = ((h as any) - ((this as any).baseLevel as any) as any) + (1 as any);
      for ((l as any) <= (0 as any) && (l = 1); (((this as any).stack as any).length as any) > (1 as any) && ((((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)] as any).level as any) >= (l as any);) (((this as any).stack as any).pop as any)();
      const y: any = (((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)] as any).node,
        f: any = {
          text: a,
          children: []
        };
      (((y as any).children as any).push as any)(f), (((this as any).stack as any).push as any)({
        level: l,
        node: f
      });
    }
    getAccTitle(): any {
      return (gt as any)();
    }
    setAccTitle(h: any): any {
      (kt as any)(h);
    }
    getAccDescription(): any {
      return (mt as any)();
    }
    setAccDescription(h: any): any {
      (wt as any)(h);
    }
    getDiagramTitle(): any {
      return (_t as any)();
    }
    setDiagramTitle(h: any): any {
      (it as any)(h);
    }
  }, (o as any)(H, "IshikawaDB"), H),
  St: number = 14,
  j: number = 250,
  $t: number = 30,
  Et: number = 60,
  At: number = 5,
  ht: any = ((82 as any) * ((Math as any).PI as any) as any) / (180 as any),
  st: any = ((Math as any).cos as any)(ht),
  nt: any = ((Math as any).sin as any)(ht),
  at: any = (o as any)((e: any, h: any, r: any): any => {
    const a: any = ((((e as any).node as any)() as any).getBBox as any)(),
      l: any = ((a as any).width as any) + ((h as any) * (2 as any) as any),
      y: any = ((a as any).height as any) + ((h as any) * (2 as any) as any);
    (bt as any)(e, y, l, r), ((e as any).attr as any)("viewBox", `${((a as any).x as any) - (h as any)} ${((a as any).y as any) - (h as any)} ${l} ${y}`);
  }, "applyPaddedViewBox"),
  It: any = (o as any)((e: any, h: any, r: any, a: any): any => {
    const y: any = (((a as any).db as any).getRoot as any)();
    if (!y) return;
    const f: any = (ot as any)(),
      {
        look: d,
        handDrawnSeed: m,
        themeVariables: u
      }: any = f,
      k: any = ((ut as any)((f as any).fontSize) as any)[0] ?? St,
      g: any = (d as any) === ("handDrawn" as any),
      _: any = (y as any).children ?? [],
      x: any = (f as any).ishikawa?.diagramPadding ?? 20,
      D: any = (f as any).ishikawa?.useMaxWidth ?? !1,
      O: any = (dt as any)(h),
      E: any = ((((O as any).append as any)("g") as any).attr as any)("class", "ishikawa"),
      T: any = g ? ((yt as any).svg as any)(((O as any).node as any)()) : void 0,
      t: any = T ? {
        roughSvg: T,
        seed: m ?? 0,
        lineColor: u?.lineColor ?? "#333",
        fillColor: u?.mainBkg ?? "#fff"
      } : void 0,
      s: any = `ishikawa-arrow-${h}`;
    g || ((((((((((((((((((((((((E as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", s) as any).attr as any)("viewBox", "0 0 10 10") as any).attr as any)("refX", 0) as any).attr as any)("refY", 5) as any).attr as any)("markerWidth", 6) as any).attr as any)("markerHeight", 6) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 10 0 L 0 5 L 10 10 Z") as any).attr as any)("class", "ishikawa-arrow");
    let i: any = 0,
      c: any = j;
    const p: any = g ? void 0 : (z as any)(E, i, c, i, c, "ishikawa-spine");
    if ((Lt as any)(E, i, c, (y as any).text, k, t), !(_ as any).length) {
      g && (z as any)(E, i, c, i, c, "ishikawa-spine", t), (at as any)(O, x, D);
      return;
    }
    i -= 20;
    const n: any = ((_ as any).filter as any)((S: any, P: any): any => ((P as any) % (2 as any) as any) === (0 as any)),
      v: any = ((_ as any).filter as any)((S: any, P: any): any => ((P as any) % (2 as any) as any) === (1 as any)),
      w: any = (rt as any)(n),
      I: any = (rt as any)(v),
      $: any = ((w as any).total as any) + ((I as any).total as any);
    let L: any = j,
      A: any = j;
    if (($ as any) > (0 as any)) {
      const S: any = (j as any) * (2 as any),
        P: any = (j as any) * (.3 as any);
      L = ((Math as any).max as any)(P, (S as any) * (((w as any).total as any) / ($ as any) as any)), A = ((Math as any).max as any)(P, (S as any) * (((I as any).total as any) / ($ as any) as any));
    }
    const C: any = (k as any) * (2 as any);
    L = ((Math as any).max as any)(L, ((w as any).max as any) * (C as any)), A = ((Math as any).max as any)(A, ((I as any).max as any) * (C as any)), c = ((Math as any).max as any)(L, j), p && ((((p as any).attr as any)("y1", c) as any).attr as any)("y2", c), ((((E as any).select as any)(".ishikawa-head-group") as any).attr as any)("transform", `translate(0,${c})`);
    const b: any = ((Math as any).ceil as any)(((_ as any).length as any) / (2 as any));
    for (let S: any = 0; (S as any) < (b as any); S++) {
      const P: any = ((((E as any).append as any)("g") as any).attr as any)("class", "ishikawa-pair");
      for (const [R, G, Y] of [[(_ as any)[(S as any) * (2 as any)], -1, L], [(_ as any)[((S as any) * (2 as any) as any) + (1 as any)], 1, A]]) R && (Pt as any)(P, R, i, c, G, Y, k, t);
      i = ((((((P as any).selectAll as any)("text") as any).nodes as any)() as any).reduce as any)((R: any, G: any): any => ((Math as any).min as any)(R, (((G as any).getBBox as any)() as any).x), (1 as any) / (0 as any));
    }
    if (g) (z as any)(E, i, c, 0, c, "ishikawa-spine", t);else {
      ((p as any).attr as any)("x1", i);
      const S: any = `url(#${s})`;
      ((((E as any).selectAll as any)("line.ishikawa-branch, line.ishikawa-sub-branch") as any).attr as any)("marker-start", S);
    }
    (at as any)(O, x, D);
  }, "draw"),
  rt: any = (o as any)((e: any): any => {
    const h: any = (o as any)((r: any): any => (((r as any).children as any).reduce as any)((a: any, l: any): any => ((a as any) + (1 as any) as any) + ((h as any)(l) as any), 0), "countDescendants");
    return ((e as any).reduce as any)((r: any, a: any): any => {
      const l: any = (h as any)(a);
      return (r as any).total += l, (r as any).max = ((Math as any).max as any)((r as any).max, l), r;
    }, {
      total: 0,
      max: 0
    });
  }, "sideStats"),
  Lt: any = (o as any)((e: any, h: any, r: any, a: any, l: any, y: any): any => {
    const f: any = ((Math as any).max as any)(6, ((Math as any).floor as any)((110 as any) / ((l as any) * (.6 as any) as any))),
      d: any = ((((((e as any).append as any)("g") as any).attr as any)("class", "ishikawa-head-group") as any).attr as any)("transform", `translate(${h},${r})`),
      m: any = (X as any)(d, (ct as any)(a, f), 0, 0, "ishikawa-head-label", "start", l),
      u: any = ((((m as any).node as any)() as any).getBBox as any)(),
      k: any = ((Math as any).max as any)(60, ((u as any).width as any) + (6 as any)),
      g: any = ((Math as any).max as any)(40, (((u as any).height as any) * (2 as any) as any) + (40 as any)),
      _: any = `M 0 ${(-g as any) / (2 as any)} L 0 ${(g as any) / (2 as any)} Q ${(k as any) * (2.4 as any)} 0 0 ${(-g as any) / (2 as any)} Z`;
    if (y) {
      const x: any = (((y as any).roughSvg as any).path as any)(_, {
        roughness: 1.5,
        seed: (y as any).seed,
        fill: (y as any).fillColor,
        fillStyle: "hachure",
        fillWeight: 2.5,
        hachureGap: 5,
        stroke: (y as any).lineColor,
        strokeWidth: 2
      });
      ((((d as any).insert as any)((): any => x, ":first-child") as any).attr as any)("class", "ishikawa-head");
    } else ((((((d as any).insert as any)("path", ":first-child") as any).attr as any)("class", "ishikawa-head") as any).attr as any)("d", _);
    ((m as any).attr as any)("transform", `translate(${((((k as any) - ((u as any).width as any) as any) / (2 as any) as any) - ((u as any).x as any) as any) + (3 as any)},${(-(u as any).y as any) - (((u as any).height as any) / (2 as any) as any)})`);
  }, "drawHead"),
  Tt: any = (o as any)((e: any, h: any): any => {
    const r: any = [],
      a: any = [],
      l: any = (o as any)((y: any, f: any, d: any): any => {
        const m: any = (h as any) === (-1 as any) ? (([...y] as any).reverse as any)() : y;
        for (const u of m) {
          const k: any = (r as any).length,
            g: any = (u as any).children ?? [];
          ((r as any).push as any)({
            depth: d,
            text: (ct as any)((u as any).text, 15),
            parentIndex: f,
            childCount: (g as any).length
          }), ((d as any) % (2 as any) as any) === (0 as any) ? (((a as any).push as any)(k), (g as any).length && (l as any)(g, k, (d as any) + (1 as any))) : ((g as any).length && (l as any)(g, k, (d as any) + (1 as any)), ((a as any).push as any)(k));
        }
      }, "walk");
    return (l as any)(e, -1, 2), {
      entries: r,
      yOrder: a
    };
  }, "flattenTree"),
  Mt: any = (o as any)((e: any, h: any, r: any, a: any, l: any, y: any, f: any): any => {
    const d: any = ((((e as any).append as any)("g") as any).attr as any)("class", "ishikawa-label-group"),
      u: any = (((((X as any)(d, h, r, (a as any) + ((11 as any) * (l as any) as any), "ishikawa-label cause", "middle", y) as any).node as any)() as any).getBBox as any)();
    if (f) {
      const k: any = (((f as any).roughSvg as any).rectangle as any)(((u as any).x as any) - (20 as any), ((u as any).y as any) - (2 as any), ((u as any).width as any) + (40 as any), ((u as any).height as any) + (4 as any), {
        roughness: 1.5,
        seed: (f as any).seed,
        fill: (f as any).fillColor,
        fillStyle: "hachure",
        fillWeight: 2.5,
        hachureGap: 5,
        stroke: (f as any).lineColor,
        strokeWidth: 2
      });
      ((((d as any).insert as any)((): any => k, ":first-child") as any).attr as any)("class", "ishikawa-label-box");
    } else ((((((((((((d as any).insert as any)("rect", ":first-child") as any).attr as any)("class", "ishikawa-label-box") as any).attr as any)("x", ((u as any).x as any) - (20 as any)) as any).attr as any)("y", ((u as any).y as any) - (2 as any)) as any).attr as any)("width", ((u as any).width as any) + (40 as any)) as any).attr as any)("height", ((u as any).height as any) + (4 as any));
  }, "drawCauseLabel"),
  Q: any = (o as any)((e: any, h: any, r: any, a: any, l: any, y: any): any => {
    const f: any = ((Math as any).sqrt as any)(((a as any) * (a as any) as any) + ((l as any) * (l as any) as any));
    if ((f as any) === (0 as any)) return;
    const d: any = (a as any) / (f as any),
      m: any = (l as any) / (f as any),
      u: number = 6,
      k: any = (-m as any) * (u as any),
      g: any = (d as any) * (u as any),
      _: any = h,
      x: any = r,
      D: any = `M ${_} ${x} L ${((_ as any) - (((d as any) * (u as any) as any) * (2 as any) as any) as any) + (k as any)} ${((x as any) - (((m as any) * (u as any) as any) * (2 as any) as any) as any) + (g as any)} L ${((_ as any) - (((d as any) * (u as any) as any) * (2 as any) as any) as any) - (k as any)} ${((x as any) - (((m as any) * (u as any) as any) * (2 as any) as any) as any) - (g as any)} Z`,
      O: any = (((y as any).roughSvg as any).path as any)(D, {
        roughness: 1,
        seed: (y as any).seed,
        fill: (y as any).lineColor,
        fillStyle: "solid",
        stroke: (y as any).lineColor,
        strokeWidth: 1
      });
    ((e as any).append as any)((): any => O);
  }, "drawArrowMarker"),
  Pt: any = (o as any)((e: any, h: any, r: any, a: any, l: any, y: any, f: any, d: any): any => {
    const m: any = (h as any).children ?? [],
      u: any = (y as any) * (((m as any).length ? 1 : .2) as any),
      k: any = (-st as any) * (u as any),
      g: any = ((nt as any) * (u as any) as any) * (l as any),
      _: any = (r as any) + (k as any),
      x: any = (a as any) + (g as any);
    if ((z as any)(e, r, a, _, x, "ishikawa-branch", d), d && (Q as any)(e, r, a, (r as any) - (_ as any), (a as any) - (x as any), d), (Mt as any)(e, (h as any).text, _, x, l, f, d), !(m as any).length) return;
    const {
        entries: D,
        yOrder: O
      }: any = (Tt as any)(m, l),
      E: any = (D as any).length,
      T: any = new (Array as any)(E);
    for (const [p, n] of ((O as any).entries as any)()) (T as any)[n] = (a as any) + ((g as any) * (((p as any) + (1 as any) as any) / ((E as any) + (1 as any) as any) as any) as any);
    const t: any = new (Map as any)();
    ((t as any).set as any)(-1, {
      x0: r,
      y0: a,
      x1: _,
      y1: x,
      childCount: (m as any).length,
      childrenDrawn: 0
    });
    const s: any = -st,
      i: any = (nt as any) * (l as any),
      c: any = (l as any) < (0 as any) ? "ishikawa-label up" : "ishikawa-label down";
    for (const [p, n] of ((D as any).entries as any)()) {
      const v: any = (T as any)[p],
        w: any = ((t as any).get as any)((n as any).parentIndex),
        I: any = ((((e as any).append as any)("g") as any).attr as any)("class", "ishikawa-sub-group");
      let $: any = 0,
        L: any = 0,
        A: any = 0;
      if ((((n as any).depth as any) % (2 as any) as any) === (0 as any)) {
        const C: any = ((w as any).y1 as any) - ((w as any).y0 as any);
        $ = (lt as any)((w as any).x0, (w as any).x1, C ? ((v as any) - ((w as any).y0 as any) as any) / (C as any) : .5), L = v, A = ($ as any) - ((((n as any).childCount as any) > (0 as any) ? (Et as any) + (((n as any).childCount as any) * (At as any) as any) : $t) as any), (z as any)(I, $, v, A, v, "ishikawa-sub-branch", d), d && (Q as any)(I, $, v, 1, 0, d), (X as any)(I, (n as any).text, A, v, "ishikawa-label align", "end", f);
      } else {
        const C: any = (w as any).childrenDrawn++;
        $ = (lt as any)((w as any).x0, (w as any).x1, (((w as any).childCount as any) - (C as any) as any) / (((w as any).childCount as any) + (1 as any) as any)), L = (w as any).y0, A = ($ as any) + ((s as any) * (((v as any) - (L as any) as any) / (i as any) as any) as any), (z as any)(I, $, L, A, v, "ishikawa-sub-branch", d), d && (Q as any)(I, $, L, ($ as any) - (A as any), (L as any) - (v as any), d), (X as any)(I, (n as any).text, A, v, c, "end", f);
      }
      ((n as any).childCount as any) > (0 as any) && ((t as any).set as any)(p, {
        x0: $,
        y0: L,
        x1: A,
        y1: v,
        childCount: (n as any).childCount,
        childrenDrawn: 0
      });
    }
  }, "drawBranch"),
  Bt: any = (o as any)((e: any): any => ((e as any).split as any)(/<br\s*\/?>|\n/), "splitLines"),
  ct: any = (o as any)((e: any, h: any): any => {
    if (((e as any).length as any) <= (h as any)) return e;
    const r: any = [];
    for (const a of ((e as any).split as any)(/\s+/)) {
      const l: any = ((r as any).length as any) - (1 as any);
      (l as any) >= (0 as any) && (((((r as any)[l] as any).length as any) + (1 as any) as any) + ((a as any).length as any) as any) <= (h as any) ? (r as any)[l] += (" " as any) + (a as any) : ((r as any).push as any)(a);
    }
    return ((r as any).join as any)(`
`);
  }, "wrapText"),
  X: any = (o as any)((e: any, h: any, r: any, a: any, l: any, y: any, f: any): any => {
    const d: any = (Bt as any)(h),
      m: any = (f as any) * (1.05 as any),
      u: any = ((((((((((e as any).append as any)("text") as any).attr as any)("class", l) as any).attr as any)("text-anchor", y) as any).attr as any)("x", r) as any).attr as any)("y", (a as any) - (((((d as any).length as any) - (1 as any) as any) * (m as any) as any) / (2 as any) as any));
    for (const [k, g] of ((d as any).entries as any)()) ((((((((u as any).append as any)("tspan") as any).attr as any)("x", r) as any).attr as any)("dy", (k as any) === (0 as any) ? 0 : m) as any).text as any)(g);
    return u;
  }, "drawMultilineText"),
  lt: any = (o as any)((e: any, h: any, r: any): any => (e as any) + (((h as any) - (e as any) as any) * (r as any) as any), "lerp"),
  z: any = (o as any)((e: any, h: any, r: any, a: any, l: any, y: any, f: any): any => {
    if (f) {
      const d: any = (((f as any).roughSvg as any).line as any)(h, r, a, l, {
        roughness: 1.5,
        seed: (f as any).seed,
        stroke: (f as any).lineColor,
        strokeWidth: 2
      });
      ((((e as any).append as any)((): any => d) as any).attr as any)("class", y);
      return;
    }
    return ((((((((((((e as any).append as any)("line") as any).attr as any)("class", y) as any).attr as any)("x1", h) as any).attr as any)("y1", r) as any).attr as any)("x2", a) as any).attr as any)("y2", l);
  }, "drawLine"),
  Nt: any = {
    draw: It
  },
  Dt: any = (o as any)((e: any): any => `
.ishikawa .ishikawa-spine,
.ishikawa .ishikawa-branch,
.ishikawa .ishikawa-sub-branch {
  stroke: ${(e as any).lineColor};
  stroke-width: 2;
  fill: none;
}

.ishikawa .ishikawa-sub-branch {
  stroke-width: 1;
}

.ishikawa .ishikawa-arrow {
  fill: ${(e as any).lineColor};
}

.ishikawa .ishikawa-head {
  fill: ${(e as any).mainBkg};
  stroke: ${(e as any).lineColor};
  stroke-width: 2;
}

.ishikawa .ishikawa-label-box {
  fill: ${(e as any).mainBkg};
  stroke: ${(e as any).lineColor};
  stroke-width: 2;
}

.ishikawa text {
  font-family: ${(e as any).fontFamily};
  font-size: ${(e as any).fontSize};
  fill: ${(e as any).textColor};
}

.ishikawa .ishikawa-head-label {
  font-weight: 600;
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: 14px;
}

.ishikawa .ishikawa-label {
  text-anchor: end;
}

.ishikawa .ishikawa-label.cause {
  text-anchor: middle;
  dominant-baseline: middle;
}

.ishikawa .ishikawa-label.align {
  text-anchor: end;
  dominant-baseline: middle;
}

.ishikawa .ishikawa-label.up {
  dominant-baseline: baseline;
}

.ishikawa .ishikawa-label.down {
  dominant-baseline: hanging;
}
`, "getStyles"),
  Ot: any = Dt,
  Rt: any = {
    parser: xt,
    get db(): any {
      return new (vt as any)();
    },
    renderer: Nt,
    styles: Ot
  };
export { Rt as diagram };
//# debugId=3d5a45f3-c3ff-4cf0-8193-290eedf58673
