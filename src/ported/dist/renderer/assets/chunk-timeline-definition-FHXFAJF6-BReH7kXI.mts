declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "178d9650-eb73-44c3-ab71-1ca0b58ca7a0", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-178d9650-eb73-44c3-ab71-1ca0b58ca7a0");
  } catch (e: any) {}
} as any)();
import { _ as o, z as pt, aa as Rt, ab as Ct, ac as Wt, c as gt, l as E, F as Pt, a1 as Bt, ad as ft, d as U, u as Vt, ae as Ft, q as zt } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { d as ot } from "./chunk-arc-DIyNF4LI.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var tt: any = (function (this: any): any {
  var e: any = (o as any)(function (this: any, k: any, s: any, d: any, l: any): any {
      for (d = d || {}, l = (k as any).length; l--; (d as any)[(k as any)[l]] = s);
      return d;
    }, "o"),
    t: any = [6, 11, 13, 14, 15, 17, 19, 20, 23, 24],
    n: any = [1, 12],
    i: any = [1, 13],
    r: any = [1, 14],
    h: any = [1, 15],
    c: any = [1, 16],
    a: any = [1, 19],
    f: any = [1, 20],
    g: any = {
      trace: (o as any)(function (this: any): any {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        timeline_header: 4,
        document: 5,
        EOF: 6,
        timeline: 7,
        timeline_lr: 8,
        timeline_td: 9,
        line: 10,
        SPACE: 11,
        statement: 12,
        NEWLINE: 13,
        title: 14,
        acc_title: 15,
        acc_title_value: 16,
        acc_descr: 17,
        acc_descr_value: 18,
        acc_descr_multiline_value: 19,
        section: 20,
        period_statement: 21,
        event_statement: 22,
        period: 23,
        event: 24,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        6: "EOF",
        7: "timeline",
        8: "timeline_lr",
        9: "timeline_td",
        11: "SPACE",
        13: "NEWLINE",
        14: "title",
        15: "acc_title",
        16: "acc_title_value",
        17: "acc_descr",
        18: "acc_descr_value",
        19: "acc_descr_multiline_value",
        20: "section",
        23: "period",
        24: "event"
      },
      productions_: [0, [3, 3], [4, 1], [4, 1], [4, 1], [5, 0], [5, 2], [10, 2], [10, 1], [10, 1], [10, 1], [12, 1], [12, 2], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [21, 1], [22, 1]],
      performAction: (o as any)(function (this: any, s: any, d: any, l: any, p: any, x: any, u: any, S: any): any {
        var v: any = ((u as any).length as any) - (1 as any);
        switch (x) {
          case 1:
            return (u as any)[(v as any) - (1 as any)];
          case 3:
            ((p as any).setDirection as any)("LR");
            break;
          case 4:
            ((p as any).setDirection as any)("TD");
            break;
          case 5:
            (this as any).$ = [];
            break;
          case 6:
            (((u as any)[(v as any) - (1 as any)] as any).push as any)((u as any)[v]), (this as any).$ = (u as any)[(v as any) - (1 as any)];
            break;
          case 7:
          case 8:
            (this as any).$ = (u as any)[v];
            break;
          case 9:
          case 10:
            (this as any).$ = [];
            break;
          case 11:
            ((((p as any).getCommonDb as any)() as any).setDiagramTitle as any)((((u as any)[v] as any).substr as any)(6)), (this as any).$ = (((u as any)[v] as any).substr as any)(6);
            break;
          case 12:
            (this as any).$ = (((u as any)[v] as any).trim as any)(), ((((p as any).getCommonDb as any)() as any).setAccTitle as any)((this as any).$);
            break;
          case 13:
          case 14:
            (this as any).$ = (((u as any)[v] as any).trim as any)(), ((((p as any).getCommonDb as any)() as any).setAccDescription as any)((this as any).$);
            break;
          case 15:
            ((p as any).addSection as any)((((u as any)[v] as any).substr as any)(8)), (this as any).$ = (((u as any)[v] as any).substr as any)(8);
            break;
          case 18:
            ((p as any).addTask as any)((u as any)[v], 0, ""), (this as any).$ = (u as any)[v];
            break;
          case 19:
            ((p as any).addEvent as any)((((u as any)[v] as any).substr as any)(2)), (this as any).$ = (u as any)[v];
            break;
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: 2,
        7: [1, 3],
        8: [1, 4],
        9: [1, 5]
      }, {
        1: [3]
      }, (e as any)(t, [2, 5], {
        5: 6
      }), (e as any)(t, [2, 2]), (e as any)(t, [2, 3]), (e as any)(t, [2, 4]), {
        6: [1, 7],
        10: 8,
        11: [1, 9],
        12: 10,
        13: [1, 11],
        14: n,
        15: i,
        17: r,
        19: h,
        20: c,
        21: 17,
        22: 18,
        23: a,
        24: f
      }, (e as any)(t, [2, 10], {
        1: [2, 1]
      }), (e as any)(t, [2, 6]), {
        12: 21,
        14: n,
        15: i,
        17: r,
        19: h,
        20: c,
        21: 17,
        22: 18,
        23: a,
        24: f
      }, (e as any)(t, [2, 8]), (e as any)(t, [2, 9]), (e as any)(t, [2, 11]), {
        16: [1, 22]
      }, {
        18: [1, 23]
      }, (e as any)(t, [2, 14]), (e as any)(t, [2, 15]), (e as any)(t, [2, 16]), (e as any)(t, [2, 17]), (e as any)(t, [2, 18]), (e as any)(t, [2, 19]), (e as any)(t, [2, 7]), (e as any)(t, [2, 12]), (e as any)(t, [2, 13])],
      defaultActions: {},
      parseError: (o as any)(function (this: any, s: any, d: any): any {
        if ((d as any).recoverable) ((this as any).trace as any)(s);else {
          var l: any = new (Error as any)(s);
          throw (l as any).hash = d, l;
        }
      }, "parseError"),
      parse: (o as any)(function (this: any, s: any): any {
        var V: any;
        var d: any = this,
          l: any = [0],
          p: any = [],
          x: any = [null],
          u: any = [],
          S: any = (this as any).table,
          v: any = "",
          I: any = 0,
          R: any = 0,
          W: number = 2,
          O: number = 1,
          L: any = (((u as any).slice as any).call as any)(arguments, 1),
          w: any = ((Object as any).create as any)((this as any).lexer),
          H: any = {
            yy: {}
          };
        for (V in (this as any).yy) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).yy, V) && (((H as any).yy as any)[V] = ((this as any).yy as any)[V]);
        ((w as any).setInput as any)(s, (H as any).yy), ((H as any).yy as any).lexer = w, ((H as any).yy as any).parser = this, (typeof (w as any).yylloc as any) > ("u" as any) && ((w as any).yylloc = {});
        var F: any = (w as any).yylloc;
        ((u as any).push as any)(F);
        var K: any = (w as any).options && ((w as any).options as any).ranges;
        (typeof ((H as any).yy as any).parseError as any) == ("function" as any) ? (this as any).parseError = ((H as any).yy as any).parseError : (this as any).parseError = (((Object as any).getPrototypeOf as any)(this) as any).parseError;
        function N(this: any, A: any): any {
          (l as any).length = ((l as any).length as any) - ((2 as any) * (A as any) as any), (x as any).length = ((x as any).length as any) - (A as any), (u as any).length = ((u as any).length as any) - (A as any);
        }
        (o as any)(N, "popStack");
        function b(this: any): any {
          var A: any;
          return A = ((p as any).pop as any)() || ((w as any).lex as any)() || O, (typeof A as any) != ("number" as any) && (A instanceof Array && (p = A, A = ((p as any).pop as any)()), A = ((d as any).symbols_ as any)[A] || A), A;
        }
        (o as any)(b, "lex");
        for (var _: any, $: any, T: any, P: any, C: any = {}, G: any, B: any, X: any, Z: any;;) {
          if ($ = (l as any)[((l as any).length as any) - (1 as any)], ((this as any).defaultActions as any)[$] ? T = ((this as any).defaultActions as any)[$] : (((_ as any) === (null as any) || (typeof _ as any) > ("u" as any)) && (_ = (b as any)()), T = (S as any)[$] && ((S as any)[$] as any)[_]), (typeof T as any) > ("u" as any) || !(T as any).length || !(T as any)[0]) {
            var Y: any = "";
            Z = [];
            for (G in (S as any)[$]) ((this as any).terminals_ as any)[G] && (G as any) > (W as any) && ((Z as any).push as any)((("'" as any) + (((this as any).terminals_ as any)[G] as any) as any) + ("'" as any));
            (w as any).showPosition ? Y = (((((((("Parse error on line " as any) + ((I as any) + (1 as any) as any) as any) + (`:
` as any) as any) + (((w as any).showPosition as any)() as any) as any) + (`
Expecting ` as any) as any) + (((Z as any).join as any)(", ") as any) as any) + (", got '" as any) as any) + ((((this as any).terminals_ as any)[_] || _) as any) as any) + ("'" as any) : Y = ((("Parse error on line " as any) + ((I as any) + (1 as any) as any) as any) + (": Unexpected " as any) as any) + (((_ as any) == (O as any) ? "end of input" : (("'" as any) + ((((this as any).terminals_ as any)[_] || _) as any) as any) + ("'" as any)) as any), ((this as any).parseError as any)(Y, {
              text: (w as any).match,
              token: ((this as any).terminals_ as any)[_] || _,
              line: (w as any).yylineno,
              loc: F,
              expected: Z
            });
          }
          if ((T as any)[0] instanceof Array && ((T as any).length as any) > (1 as any)) throw new (Error as any)(((("Parse Error: multiple actions possible at state: " as any) + ($ as any) as any) + (", token: " as any) as any) + (_ as any));
          switch ((T as any)[0]) {
            case 1:
              ((l as any).push as any)(_), ((x as any).push as any)((w as any).yytext), ((u as any).push as any)((w as any).yylloc), ((l as any).push as any)((T as any)[1]), _ = null, R = (w as any).yyleng, v = (w as any).yytext, I = (w as any).yylineno, F = (w as any).yylloc;
              break;
            case 2:
              if (B = (((this as any).productions_ as any)[(T as any)[1]] as any)[1], (C as any).$ = (x as any)[((x as any).length as any) - (B as any)], (C as any)._$ = {
                first_line: ((u as any)[((u as any).length as any) - ((B || 1) as any)] as any).first_line,
                last_line: ((u as any)[((u as any).length as any) - (1 as any)] as any).last_line,
                first_column: ((u as any)[((u as any).length as any) - ((B || 1) as any)] as any).first_column,
                last_column: ((u as any)[((u as any).length as any) - (1 as any)] as any).last_column
              }, K && (((C as any)._$ as any).range = [(((u as any)[((u as any).length as any) - ((B || 1) as any)] as any).range as any)[0], (((u as any)[((u as any).length as any) - (1 as any)] as any).range as any)[1]]), P = (((this as any).performAction as any).apply as any)(C, (([v, R, I, (H as any).yy, (T as any)[1], x, u] as any).concat as any)(L)), (typeof P as any) < ("u" as any)) return P;
              B && (l = ((l as any).slice as any)(0, ((-1 as any) * (B as any) as any) * (2 as any)), x = ((x as any).slice as any)(0, (-1 as any) * (B as any)), u = ((u as any).slice as any)(0, (-1 as any) * (B as any))), ((l as any).push as any)((((this as any).productions_ as any)[(T as any)[1]] as any)[0]), ((x as any).push as any)((C as any).$), ((u as any).push as any)((C as any)._$), X = ((S as any)[(l as any)[((l as any).length as any) - (2 as any)]] as any)[(l as any)[((l as any).length as any) - (1 as any)]], ((l as any).push as any)(X);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }, "parse")
    },
    m: any = (function (this: any): any {
      var k: any = {
        EOF: 1,
        parseError: (o as any)(function (this: any, d: any, l: any): any {
          if (((this as any).yy as any).parser) ((((this as any).yy as any).parser as any).parseError as any)(d, l);else throw new (Error as any)(d);
        }, "parseError"),
        setInput: (o as any)(function (this: any, s: any, d: any): any {
          return (this as any).yy = d || (this as any).yy || {}, (this as any)._input = s, (this as any)._more = (this as any)._backtrack = (this as any).done = !1, (this as any).yylineno = (this as any).yyleng = 0, (this as any).yytext = (this as any).matched = (this as any).match = "", (this as any).conditionStack = ["INITIAL"], (this as any).yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [0, 0]), (this as any).offset = 0, this;
        }, "setInput"),
        input: (o as any)(function (this: any): any {
          var s: any = ((this as any)._input as any)[0];
          (this as any).yytext += s, (this as any).yyleng++, (this as any).offset++, (this as any).match += s, (this as any).matched += s;
          var d: any = ((s as any).match as any)(/(?:\r\n?|\n).*/g);
          return d ? ((this as any).yylineno++, ((this as any).yylloc as any).last_line++) : ((this as any).yylloc as any).last_column++, ((this as any).options as any).ranges && (((this as any).yylloc as any).range as any)[1]++, (this as any)._input = (((this as any)._input as any).slice as any)(1), s;
        }, "input"),
        unput: (o as any)(function (this: any, s: any): any {
          var d: any = (s as any).length,
            l: any = ((s as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any)._input = (s as any) + ((this as any)._input as any), (this as any).yytext = (((this as any).yytext as any).substr as any)(0, (((this as any).yytext as any).length as any) - (d as any)), (this as any).offset -= d;
          var p: any = (((this as any).match as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any).match = (((this as any).match as any).substr as any)(0, (((this as any).match as any).length as any) - (1 as any)), (this as any).matched = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (1 as any)), ((l as any).length as any) - (1 as any) && ((this as any).yylineno -= ((l as any).length as any) - (1 as any));
          var x: any = ((this as any).yylloc as any).range;
          return (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).first_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).first_column,
            last_column: l ? (((((l as any).length as any) === ((p as any).length as any) ? ((this as any).yylloc as any).first_column : 0) as any) + (((p as any)[((p as any).length as any) - ((l as any).length as any)] as any).length as any) as any) - (((l as any)[0] as any).length as any) : (((this as any).yylloc as any).first_column as any) - (d as any)
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(x as any)[0], (((x as any)[0] as any) + ((this as any).yyleng as any) as any) - (d as any)]), (this as any).yyleng = ((this as any).yytext as any).length, this;
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
        less: (o as any)(function (this: any, s: any): any {
          ((this as any).unput as any)((((this as any).match as any).slice as any)(s));
        }, "less"),
        pastInput: (o as any)(function (this: any): any {
          var s: any = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (((this as any).match as any).length as any));
          return ((((s as any).length as any) > (20 as any) ? "..." : "") as any) + (((((s as any).substr as any)(-20) as any).replace as any)(/\n/g, "") as any);
        }, "pastInput"),
        upcomingInput: (o as any)(function (this: any): any {
          var s: any = (this as any).match;
          return ((s as any).length as any) < (20 as any) && (s += (((this as any)._input as any).substr as any)(0, (20 as any) - ((s as any).length as any))), (((((s as any).substr as any)(0, 20) as any) + ((((s as any).length as any) > (20 as any) ? "..." : "") as any) as any).replace as any)(/\n/g, "");
        }, "upcomingInput"),
        showPosition: (o as any)(function (this: any): any {
          var s: any = ((this as any).pastInput as any)(),
            d: any = ((new (Array as any)(((s as any).length as any) + (1 as any)) as any).join as any)("-");
          return ((((s as any) + (((this as any).upcomingInput as any)() as any) as any) + (`
` as any) as any) + (d as any) as any) + ("^" as any);
        }, "showPosition"),
        test_match: (o as any)(function (this: any, s: any, d: any): any {
          var u: any;
          var l: any, p: any, x: any;
          if (((this as any).options as any).backtrack_lexer && (x = {
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
          }, ((this as any).options as any).ranges && (((x as any).yylloc as any).range = ((((this as any).yylloc as any).range as any).slice as any)(0))), p = (((s as any)[0] as any).match as any)(/(?:\r\n?|\n).*/g), p && ((this as any).yylineno += (p as any).length), (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).last_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).last_column,
            last_column: p ? (((p as any)[((p as any).length as any) - (1 as any)] as any).length as any) - ((((((p as any)[((p as any).length as any) - (1 as any)] as any).match as any)(/\r?\n?/) as any)[0] as any).length as any) : (((this as any).yylloc as any).last_column as any) + (((s as any)[0] as any).length as any)
          }, (this as any).yytext += (s as any)[0], (this as any).match += (s as any)[0], (this as any).matches = s, (this as any).yyleng = ((this as any).yytext as any).length, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(this as any).offset, (this as any).offset += (this as any).yyleng]), (this as any)._more = !1, (this as any)._backtrack = !1, (this as any)._input = (((this as any)._input as any).slice as any)(((s as any)[0] as any).length), (this as any).matched += (s as any)[0], l = (((this as any).performAction as any).call as any)(this, (this as any).yy, this, d, ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]), (this as any).done && (this as any)._input && ((this as any).done = !1), l) return l;
          if ((this as any)._backtrack) {
            for (u in x) (this as any)[u] = (x as any)[u];
            return !1;
          }
          return !1;
        }, "test_match"),
        next: (o as any)(function (this: any): any {
          if ((this as any).done) return (this as any).EOF;
          (this as any)._input || ((this as any).done = !0);
          var s: any, d: any, l: any, p: any;
          (this as any)._more || ((this as any).yytext = "", (this as any).match = "");
          for (var x: any = ((this as any)._currentRules as any)(), u: any = 0; (u as any) < ((x as any).length as any); u++) if (l = (((this as any)._input as any).match as any)(((this as any).rules as any)[(x as any)[u]]), l && (!d || (((l as any)[0] as any).length as any) > (((d as any)[0] as any).length as any))) {
            if (d = l, p = u, ((this as any).options as any).backtrack_lexer) {
              if (s = ((this as any).test_match as any)(l, (x as any)[u]), (s as any) !== (!1 as any)) return s;
              if ((this as any)._backtrack) {
                d = !1;
                continue;
              } else return !1;
            } else if (!((this as any).options as any).flex) break;
          }
          return d ? (s = ((this as any).test_match as any)(d, (x as any)[p]), (s as any) !== (!1 as any) ? s : !1) : ((this as any)._input as any) === ("" as any) ? (this as any).EOF : ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. Unrecognized text.
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
        }, "next"),
        lex: (o as any)(function (this: any): any {
          var d: any = ((this as any).next as any)();
          return d || ((this as any).lex as any)();
        }, "lex"),
        begin: (o as any)(function (this: any, d: any): any {
          (((this as any).conditionStack as any).push as any)(d);
        }, "begin"),
        popState: (o as any)(function (this: any): any {
          var d: any = (((this as any).conditionStack as any).length as any) - (1 as any);
          return (d as any) > (0 as any) ? (((this as any).conditionStack as any).pop as any)() : ((this as any).conditionStack as any)[0];
        }, "popState"),
        _currentRules: (o as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length && ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)] ? (((this as any).conditions as any)[((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]] as any).rules : (((this as any).conditions as any).INITIAL as any).rules;
        }, "_currentRules"),
        topState: (o as any)(function (this: any, d: any): any {
          return d = ((((this as any).conditionStack as any).length as any) - (1 as any) as any) - (((Math as any).abs as any)(d || 0) as any), (d as any) >= (0 as any) ? ((this as any).conditionStack as any)[d] : "INITIAL";
        }, "topState"),
        pushState: (o as any)(function (this: any, d: any): any {
          ((this as any).begin as any)(d);
        }, "pushState"),
        stateStackSize: (o as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": !0
        },
        performAction: (o as any)(function (this: any, d: any, l: any, p: any, x: any): any {
          switch (p) {
            case 0:
              break;
            case 1:
              break;
            case 2:
              return 13;
            case 3:
              break;
            case 4:
              break;
            case 5:
              return 8;
            case 6:
              return 9;
            case 7:
              return 7;
            case 8:
              return 14;
            case 9:
              return ((this as any).begin as any)("acc_title"), 15;
            case 10:
              return ((this as any).popState as any)(), "acc_title_value";
            case 11:
              return ((this as any).begin as any)("acc_descr"), 17;
            case 12:
              return ((this as any).popState as any)(), "acc_descr_value";
            case 13:
              ((this as any).begin as any)("acc_descr_multiline");
              break;
            case 14:
              ((this as any).popState as any)();
              break;
            case 15:
              return "acc_descr_multiline_value";
            case 16:
              return 20;
            case 17:
              return 24;
            case 18:
              return 23;
            case 19:
              return 6;
            case 20:
              return "INVALID";
          }
        }, "anonymous"),
        rules: [/^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:timeline[ \t]+LR\b)/i, /^(?:timeline[ \t]+TD\b)/i, /^(?:timeline\b)/i, /^(?:title\s[^\n]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^:\n]+)/i, /^(?::\s(?:[^:\n]|:(?!\s))+)/i, /^(?:[^#:\n]+)/i, /^(?:$)/i, /^(?:.)/i],
        conditions: {
          acc_descr_multiline: {
            rules: [14, 15],
            inclusive: !1
          },
          acc_descr: {
            rules: [12],
            inclusive: !1
          },
          acc_title: {
            rules: [10],
            inclusive: !1
          },
          INITIAL: {
            rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 16, 17, 18, 19, 20],
            inclusive: !0
          }
        }
      };
      return k;
    } as any)();
  (g as any).lexer = m;
  function y(this: any): any {
    (this as any).yy = {};
  }
  return (o as any)(y, "Parser"), (y as any).prototype = g, (g as any).Parser = y, new (y as any)();
} as any)();
(tt as any).parser = tt;
var Ot: any = tt,
  yt: any = {};
(Vt as any)(yt, {
  addEvent: (): any => Tt,
  addSection: (): any => _t,
  addTask: (): any => Et,
  addTaskOrg: (): any => $t,
  clear: (): any => kt,
  default: (): any => Gt,
  getCommonDb: (): any => xt,
  getDirection: (): any => bt,
  getSections: (): any => wt,
  getTasks: (): any => St,
  setDirection: (): any => vt
});
var D: any = "",
  mt: any = 0,
  nt: any = "LR",
  rt: any = [],
  j: any = [],
  q: any = [],
  xt: any = (o as any)((): any => Ft, "getCommonDb"),
  kt: any = (o as any)(function (this: any): any {
    (rt as any).length = 0, (j as any).length = 0, D = "", (q as any).length = 0, nt = "LR", (zt as any)();
  }, "clear"),
  vt: any = (o as any)(function (this: any, e: any): any {
    nt = e;
  }, "setDirection"),
  bt: any = (o as any)(function (this: any): any {
    return nt;
  }, "getDirection"),
  _t: any = (o as any)(function (this: any, e: any): any {
    D = e, ((rt as any).push as any)(e);
  }, "addSection"),
  wt: any = (o as any)(function (this: any): any {
    return rt;
  }, "getSections"),
  St: any = (o as any)(function (this: any): any {
    let e: any = (ct as any)();
    const t: number = 100;
    let n: any = 0;
    for (; !e && (n as any) < (t as any);) e = (ct as any)(), n++;
    return ((j as any).push as any)(...q), j;
  }, "getTasks"),
  Et: any = (o as any)(function (this: any, e: any, t: any, n: any): any {
    const i: any = {
      id: mt++,
      section: D,
      type: D,
      task: e,
      score: t || 0,
      events: n ? [n] : []
    };
    ((q as any).push as any)(i);
  }, "addTask"),
  Tt: any = (o as any)(function (this: any, e: any): any {
    (((((q as any).find as any)((n: any): any => ((n as any).id as any) === ((mt as any) - (1 as any) as any)) as any).events as any).push as any)(e);
  }, "addEvent"),
  $t: any = (o as any)(function (this: any, e: any): any {
    const t: any = {
      section: D,
      type: D,
      description: e,
      task: e,
      classes: []
    };
    ((j as any).push as any)(t);
  }, "addTaskOrg"),
  ct: any = (o as any)(function (this: any): any {
    const e: any = (o as any)(function (this: any, n: any): any {
      return ((q as any)[n] as any).processed;
    }, "compileTask");
    let t: any = !0;
    for (const [n, i] of ((q as any).entries as any)()) (e as any)(n), t = t && (i as any).processed;
    return t;
  }, "compileTasks"),
  Gt: any = {
    clear: kt,
    getCommonDb: xt,
    getDirection: bt,
    setDirection: vt,
    addSection: _t,
    getSections: wt,
    getTasks: St,
    addTask: Et,
    addTaskOrg: $t,
    addEvent: Tt
  },
  Nt: any = 0,
  J: any = (o as any)(function (this: any, e: any, t: any): any {
    const n: any = ((e as any).append as any)("rect");
    return ((n as any).attr as any)("x", (t as any).x), ((n as any).attr as any)("y", (t as any).y), ((n as any).attr as any)("fill", (t as any).fill), ((n as any).attr as any)("stroke", (t as any).stroke), ((n as any).attr as any)("width", (t as any).width), ((n as any).attr as any)("height", (t as any).height), ((n as any).attr as any)("rx", (t as any).rx), ((n as any).attr as any)("ry", (t as any).ry), ((t as any).class as any) !== (void 0 as any) && ((n as any).attr as any)("class", (t as any).class), n;
  }, "drawRect"),
  Dt: any = (o as any)(function (this: any, e: any, t: any): any {
    const i: any = ((((((((((((((e as any).append as any)("circle") as any).attr as any)("cx", (t as any).cx) as any).attr as any)("cy", (t as any).cy) as any).attr as any)("class", "face") as any).attr as any)("r", 15) as any).attr as any)("stroke-width", 2) as any).attr as any)("overflow", "visible"),
      r: any = ((e as any).append as any)("g");
    ((((((((((((((r as any).append as any)("circle") as any).attr as any)("cx", ((t as any).cx as any) - ((15 as any) / (3 as any) as any)) as any).attr as any)("cy", ((t as any).cy as any) - ((15 as any) / (3 as any) as any)) as any).attr as any)("r", 1.5) as any).attr as any)("stroke-width", 2) as any).attr as any)("fill", "#666") as any).attr as any)("stroke", "#666"), ((((((((((((((r as any).append as any)("circle") as any).attr as any)("cx", ((t as any).cx as any) + ((15 as any) / (3 as any) as any)) as any).attr as any)("cy", ((t as any).cy as any) - ((15 as any) / (3 as any) as any)) as any).attr as any)("r", 1.5) as any).attr as any)("stroke-width", 2) as any).attr as any)("fill", "#666") as any).attr as any)("stroke", "#666");
    function h(this: any, f: any): any {
      const g: any = (((((((((ot as any)() as any).startAngle as any)(((Math as any).PI as any) / (2 as any)) as any).endAngle as any)((3 as any) * (((Math as any).PI as any) / (2 as any) as any)) as any).innerRadius as any)(7.5) as any).outerRadius as any)(6.8181818181818175);
      ((((((((f as any).append as any)("path") as any).attr as any)("class", "mouth") as any).attr as any)("d", g) as any).attr as any)("transform", (((("translate(" as any) + ((t as any).cx as any) as any) + ("," as any) as any) + (((t as any).cy as any) + (2 as any) as any) as any) + (")" as any));
    }
    (o as any)(h, "smile");
    function c(this: any, f: any): any {
      const g: any = (((((((((ot as any)() as any).startAngle as any)(((3 as any) * ((Math as any).PI as any) as any) / (2 as any)) as any).endAngle as any)((5 as any) * (((Math as any).PI as any) / (2 as any) as any)) as any).innerRadius as any)(7.5) as any).outerRadius as any)(6.8181818181818175);
      ((((((((f as any).append as any)("path") as any).attr as any)("class", "mouth") as any).attr as any)("d", g) as any).attr as any)("transform", (((("translate(" as any) + ((t as any).cx as any) as any) + ("," as any) as any) + (((t as any).cy as any) + (7 as any) as any) as any) + (")" as any));
    }
    (o as any)(c, "sad");
    function a(this: any, f: any): any {
      ((((((((((((((((((((f as any).append as any)("line") as any).attr as any)("class", "mouth") as any).attr as any)("stroke", 2) as any).attr as any)("x1", ((t as any).cx as any) - (5 as any)) as any).attr as any)("y1", ((t as any).cy as any) + (7 as any)) as any).attr as any)("x2", ((t as any).cx as any) + (5 as any)) as any).attr as any)("y2", ((t as any).cy as any) + (7 as any)) as any).attr as any)("class", "mouth") as any).attr as any)("stroke-width", "1px") as any).attr as any)("stroke", "#666");
    }
    return (o as any)(a, "ambivalent"), ((t as any).score as any) > (3 as any) ? (h as any)(r) : ((t as any).score as any) < (3 as any) ? (c as any)(r) : (a as any)(r), i;
  }, "drawFace"),
  qt: any = (o as any)(function (this: any, e: any, t: any): any {
    const n: any = ((e as any).append as any)("circle");
    return ((n as any).attr as any)("cx", (t as any).cx), ((n as any).attr as any)("cy", (t as any).cy), ((n as any).attr as any)("class", ("actor-" as any) + ((t as any).pos as any)), ((n as any).attr as any)("fill", (t as any).fill), ((n as any).attr as any)("stroke", (t as any).stroke), ((n as any).attr as any)("r", (t as any).r), ((n as any).class as any) !== (void 0 as any) && ((n as any).attr as any)("class", (n as any).class), ((t as any).title as any) !== (void 0 as any) && ((((n as any).append as any)("title") as any).text as any)((t as any).title), n;
  }, "drawCircle"),
  It: any = (o as any)(function (this: any, e: any, t: any): any {
    const n: any = (((t as any).text as any).replace as any)(/<br\s*\/?>/gi, " "),
      i: any = ((e as any).append as any)("text");
    ((i as any).attr as any)("x", (t as any).x), ((i as any).attr as any)("y", (t as any).y), ((i as any).attr as any)("class", "legend"), ((i as any).style as any)("text-anchor", (t as any).anchor), ((t as any).class as any) !== (void 0 as any) && ((i as any).attr as any)("class", (t as any).class);
    const r: any = ((i as any).append as any)("tspan");
    return ((r as any).attr as any)("x", ((t as any).x as any) + (((t as any).textMargin as any) * (2 as any) as any)), ((r as any).text as any)(n), i;
  }, "drawText"),
  Kt: any = (o as any)(function (this: any, e: any, t: any): any {
    function n(this: any, r: any, h: any, c: any, a: any, f: any): any {
      return ((((((((((((((((((r as any) + ("," as any) as any) + (h as any) as any) + (" " as any) as any) + ((r as any) + (c as any) as any) as any) + ("," as any) as any) + (h as any) as any) + (" " as any) as any) + ((r as any) + (c as any) as any) as any) + ("," as any) as any) + (((h as any) + (a as any) as any) - (f as any) as any) as any) + (" " as any) as any) + (((r as any) + (c as any) as any) - ((f as any) * (1.2 as any) as any) as any) as any) + ("," as any) as any) + ((h as any) + (a as any) as any) as any) + (" " as any) as any) + (r as any) as any) + ("," as any) as any) + ((h as any) + (a as any) as any);
    }
    (o as any)(n, "genPoints");
    const i: any = ((e as any).append as any)("polygon");
    ((i as any).attr as any)("points", (n as any)((t as any).x, (t as any).y, 50, 20, 7)), ((i as any).attr as any)("class", "labelBox"), (t as any).y = ((t as any).y as any) + ((t as any).labelMargin as any), (t as any).x = ((t as any).x as any) + ((.5 as any) * ((t as any).labelMargin as any) as any), (It as any)(e, t);
  }, "drawLabel"),
  Ut: any = (o as any)(function (this: any, e: any, t: any, n: any): any {
    const i: any = ((e as any).append as any)("g"),
      r: any = (st as any)();
    (r as any).x = (t as any).x, (r as any).y = (t as any).y, (r as any).fill = (t as any).fill, (r as any).width = (n as any).width, (r as any).height = (n as any).height, (r as any).class = ("journey-section section-type-" as any) + ((t as any).num as any), (r as any).rx = 3, (r as any).ry = 3, (J as any)(i, r), ((Ht as any)(n) as any)((t as any).text, i, (r as any).x, (r as any).y, (r as any).width, (r as any).height, {
      class: ("journey-section section-type-" as any) + ((t as any).num as any)
    }, n, (t as any).colour);
  }, "drawSection"),
  et: any = -1,
  Xt: any = (o as any)(function (this: any, e: any, t: any, n: any, i: any): any {
    const r: any = ((t as any).x as any) + (((n as any).width as any) / (2 as any) as any),
      h: any = ((e as any).append as any)("g");
    et++, ((((((((((((((((((((h as any).append as any)("line") as any).attr as any)("id", ((i as any) + ("-task" as any) as any) + (et as any)) as any).attr as any)("x1", r) as any).attr as any)("y1", (t as any).y) as any).attr as any)("x2", r) as any).attr as any)("y2", 450) as any).attr as any)("class", "task-line") as any).attr as any)("stroke-width", "1px") as any).attr as any)("stroke-dasharray", "4 2") as any).attr as any)("stroke", "#666"), (Dt as any)(h, {
      cx: r,
      cy: (300 as any) + (((5 as any) - ((t as any).score as any) as any) * (30 as any) as any),
      score: (t as any).score
    });
    const a: any = (st as any)();
    (a as any).x = (t as any).x, (a as any).y = (t as any).y, (a as any).fill = (t as any).fill, (a as any).width = (n as any).width, (a as any).height = (n as any).height, (a as any).class = ("task task-type-" as any) + ((t as any).num as any), (a as any).rx = 3, (a as any).ry = 3, (J as any)(h, a), ((Ht as any)(n) as any)((t as any).task, h, (a as any).x, (a as any).y, (a as any).width, (a as any).height, {
      class: "task"
    }, n, (t as any).colour);
  }, "drawTask"),
  Zt: any = (o as any)(function (this: any, e: any, t: any): any {
    (((J as any)(e, {
      x: (t as any).startx,
      y: (t as any).starty,
      width: ((t as any).stopx as any) - ((t as any).startx as any),
      height: ((t as any).stopy as any) - ((t as any).starty as any),
      fill: (t as any).fill,
      class: "rect"
    }) as any).lower as any)();
  }, "drawBackgroundRect"),
  jt: any = (o as any)(function (this: any): any {
    return {
      x: 0,
      y: 0,
      fill: void 0,
      "text-anchor": "start",
      width: 100,
      height: 100,
      textMargin: 0,
      rx: 0,
      ry: 0
    };
  }, "getTextObj"),
  st: any = (o as any)(function (this: any): any {
    return {
      x: 0,
      y: 0,
      width: 100,
      anchor: "start",
      height: 100,
      rx: 0,
      ry: 0
    };
  }, "getNoteRect"),
  Ht: any = (function (this: any): any {
    function e(this: any, r: any, h: any, c: any, a: any, f: any, g: any, m: any, y: any): any {
      const k: any = ((((((((((((h as any).append as any)("text") as any).attr as any)("x", (c as any) + ((f as any) / (2 as any) as any)) as any).attr as any)("y", ((a as any) + ((g as any) / (2 as any) as any) as any) + (5 as any)) as any).style as any)("font-color", y) as any).style as any)("text-anchor", "middle") as any).text as any)(r);
      (i as any)(k, m);
    }
    (o as any)(e, "byText");
    function t(this: any, r: any, h: any, c: any, a: any, f: any, g: any, m: any, y: any, k: any): any {
      const {
          taskFontSize: s,
          taskFontFamily: d
        }: any = y,
        l: any = ((r as any).split as any)(/<br\s*\/?>/gi);
      for (let p: any = 0; (p as any) < ((l as any).length as any); p++) {
        const x: any = ((p as any) * (s as any) as any) - (((s as any) * (((l as any).length as any) - (1 as any) as any) as any) / (2 as any) as any),
          u: any = ((((((((((((((h as any).append as any)("text") as any).attr as any)("x", (c as any) + ((f as any) / (2 as any) as any)) as any).attr as any)("y", a) as any).attr as any)("fill", k) as any).style as any)("text-anchor", "middle") as any).style as any)("font-size", s) as any).style as any)("font-family", d);
        ((((((((u as any).append as any)("tspan") as any).attr as any)("x", (c as any) + ((f as any) / (2 as any) as any)) as any).attr as any)("dy", x) as any).text as any)((l as any)[p]), ((((((u as any).attr as any)("y", (a as any) + ((g as any) / (2 as any) as any)) as any).attr as any)("dominant-baseline", "central") as any).attr as any)("alignment-baseline", "central"), (i as any)(u, m);
      }
    }
    (o as any)(t, "byTspan");
    function n(this: any, r: any, h: any, c: any, a: any, f: any, g: any, m: any, y: any): any {
      const k: any = ((h as any).append as any)("switch"),
        d: any = ((((((((((((((((((((k as any).append as any)("foreignObject") as any).attr as any)("x", c) as any).attr as any)("y", a) as any).attr as any)("width", f) as any).attr as any)("height", g) as any).attr as any)("position", "fixed") as any).append as any)("xhtml:div") as any).style as any)("display", "table") as any).style as any)("height", "100%") as any).style as any)("width", "100%");
      ((((((((((((d as any).append as any)("div") as any).attr as any)("class", "label") as any).style as any)("display", "table-cell") as any).style as any)("text-align", "center") as any).style as any)("vertical-align", "middle") as any).text as any)(r), (t as any)(r, k, c, a, f, g, m, y), (i as any)(d, m);
    }
    (o as any)(n, "byFo");
    function i(this: any, r: any, h: any): any {
      for (const c in h) c in h && ((r as any).attr as any)(c, (h as any)[c]);
    }
    return (o as any)(i, "_setTextAttrs"), function (this: any, r: any): any {
      return ((r as any).textPlacement as any) === ("fo" as any) ? n : ((r as any).textPlacement as any) === ("old" as any) ? e : t;
    };
  } as any)(),
  Jt: any = (o as any)(function (this: any, e: any, t: any): any {
    Nt = 0, et = -1, ((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", (t as any) + ("-arrowhead" as any)) as any).attr as any)("refX", 5) as any).attr as any)("refY", 2) as any).attr as any)("markerWidth", 6) as any).attr as any)("markerHeight", 4) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 0,0 V 4 L6,2 Z");
  }, "initGraphics");
function it(this: any, e: any, t: any): any {
  ((e as any).each as any)(function (this: any): any {
    var n: any = (U as any)(this),
      i: any = ((((((n as any).text as any)() as any).split as any)(/(\s+|<br>)/) as any).reverse as any)(),
      r: any,
      h: any = [],
      c: number = 1.1,
      a: any = ((n as any).attr as any)("y"),
      f: any = (parseFloat as any)(((n as any).attr as any)("dy")),
      g: any = ((((((((((n as any).text as any)(null) as any).append as any)("tspan") as any).attr as any)("x", 0) as any).attr as any)("y", a) as any).attr as any)("dy", (f as any) + ("em" as any));
    for (let m: any = 0; (m as any) < ((i as any).length as any); m++) r = (i as any)[(((i as any).length as any) - (1 as any) as any) - (m as any)], ((h as any).push as any)(r), ((g as any).text as any)(((((h as any).join as any)(" ") as any).trim as any)()), ((((((g as any).node as any)() as any).getComputedTextLength as any)() as any) > (t as any) || (r as any) === ("<br>" as any)) && (((h as any).pop as any)(), ((g as any).text as any)(((((h as any).join as any)(" ") as any).trim as any)()), (r as any) === ("<br>" as any) ? h = [""] : h = [r], g = ((((((((((n as any).append as any)("tspan") as any).attr as any)("x", 0) as any).attr as any)("y", a) as any).attr as any)("dy", (c as any) + ("em" as any)) as any).text as any)(r));
  });
}
(o as any)(it, "wrap");
var Qt: any = (o as any)(function (this: any, e: any, t: any, n: any, i: any, r: any, h: any = !1): any {
    const {
        theme: c,
        look: a
      }: any = i,
      f: any = c?.includes("redux"),
      g: any = i?.themeVariables?.THEME_COLOR_LIMIT ?? 12,
      m: any = ((n as any) % (g as any) as any) - (1 as any),
      y: any = ((e as any).append as any)("g");
    (t as any).section = m, ((y as any).attr as any)("class", ((((t as any).class ? ((t as any).class as any) + (" " as any) : "") as any) + ("timeline-node " as any) as any) + (("section-" as any) + (m as any) as any));
    const k: any = ((y as any).append as any)("g"),
      s: any = ((y as any).append as any)("g"),
      l: any = ((((((((((((((((((s as any).append as any)("text") as any).text as any)((t as any).descr) as any).attr as any)("dy", "1em") as any).attr as any)("alignment-baseline", "middle") as any).attr as any)("dominant-baseline", "middle") as any).attr as any)("text-anchor", "middle") as any).call as any)(it, (t as any).width) as any).node as any)() as any).getBBox as any)(),
      p: any = (i as any).fontSize?.replace ? (((i as any).fontSize as any).replace as any)("px", "") : (i as any).fontSize;
    if ((t as any).height = (((l as any).height as any) + (((p as any) * (1.1 as any) as any) * (.5 as any) as any) as any) + ((t as any).padding as any), (t as any).height = ((Math as any).max as any)((t as any).height, (t as any).maxHeight), (t as any).width = ((t as any).width as any) + ((2 as any) * ((t as any).padding as any) as any), ((s as any).attr as any)("transform", (((("translate(" as any) + (((t as any).width as any) / (2 as any) as any) as any) + (", " as any) as any) + (((t as any).padding as any) / (2 as any) as any) as any) + (")" as any)), f && ((s as any).attr as any)("transform", `translate(${((t as any).width as any) / (2 as any)}, ${h ? (((t as any).padding as any) / (2 as any) as any) + (3 as any) : (t as any).padding})`), (te as any)(k, t, m, r, i), (a as any) === ("neo" as any) && (((y as any).attr as any)("data-look", "neo"), f)) {
      const x: any = ((c as any).includes as any)("dark"),
        u: any = ((e as any).node as any)()?.ownerSVGElement ?? ((e as any).node as any)(),
        S: any = (U as any)(u),
        v: any = ((S as any).attr as any)("id") ?? "",
        I: any = v ? `${v}-drop-shadow` : "drop-shadow";
      if (((((S as any).select as any)(`#${I}`) as any).empty as any)()) {
        const R: any = ((S as any).select as any)("defs");
        (((((((((((((((((((((((R as any).empty as any)() ? ((S as any).append as any)("defs") : R) as any).append as any)("filter") as any).attr as any)("id", I) as any).attr as any)("height", "130%") as any).attr as any)("width", "130%") as any).append as any)("feDropShadow") as any).attr as any)("dx", "4") as any).attr as any)("dy", "4") as any).attr as any)("stdDeviation", 0) as any).attr as any)("flood-opacity", x ? "0.2" : "0.06") as any).attr as any)("flood-color", x ? "#FFFFFF" : "#000000");
      }
    }
    return t;
  }, "drawNode"),
  Yt: any = (o as any)(function (this: any, e: any, t: any, n: any): any {
    const i: any = ((e as any).append as any)("g"),
      h: any = ((((((((((((((((((i as any).append as any)("text") as any).text as any)((t as any).descr) as any).attr as any)("dy", "1em") as any).attr as any)("alignment-baseline", "middle") as any).attr as any)("dominant-baseline", "middle") as any).attr as any)("text-anchor", "middle") as any).call as any)(it, (t as any).width) as any).node as any)() as any).getBBox as any)(),
      c: any = (n as any).fontSize?.replace ? (((n as any).fontSize as any).replace as any)("px", "") : (n as any).fontSize;
    return ((i as any).remove as any)(), (((h as any).height as any) + (((c as any) * (1.1 as any) as any) * (.5 as any) as any) as any) + ((t as any).padding as any);
  }, "getVirtualNodeHeight"),
  te: any = (o as any)(function (this: any, e: any, t: any, n: any, i: any, r: any): any {
    const {
        theme: h
      }: any = r,
      c: any = h?.includes("redux") ? 0 : 5,
      a: number = 5,
      f: any = (c as any) > (0 as any) ? `M0 ${((t as any).height as any) - (a as any)} v${(-(t as any).height as any) + ((2 as any) * (a as any) as any)} q0,-${c},${c},-${c} h${((t as any).width as any) - ((2 as any) * (a as any) as any)} q${c},0,${c},${c} v${((t as any).height as any) - (a as any)} H0 Z` : `M0 ${((t as any).height as any) - (a as any)} v${-(((t as any).height as any) - (a as any))} h${(t as any).width} v${(t as any).height} H0 Z`;
    ((((((((e as any).append as any)("path") as any).attr as any)("id", ((i as any) + ("-node-" as any) as any) + (Nt++ as any)) as any).attr as any)("class", ("node-bkg node-" as any) + ((t as any).type as any)) as any).attr as any)("d", f), h?.includes("redux") || ((((((((((((e as any).append as any)("line") as any).attr as any)("class", ("node-line-" as any) + (n as any)) as any).attr as any)("x1", 0) as any).attr as any)("y1", (t as any).height) as any).attr as any)("x2", (t as any).width) as any).attr as any)("y2", (t as any).height);
  }, "defaultBkg"),
  M: any = {
    drawRect: J,
    drawCircle: qt,
    drawSection: Ut,
    drawText: It,
    drawLabel: Kt,
    drawTask: Xt,
    drawBackgroundRect: Zt,
    getTextObj: jt,
    getNoteRect: st,
    initGraphics: Jt,
    drawNode: Qt,
    getVirtualNodeHeight: Yt
  },
  ee: any = (o as any)(function (this: any, e: any, t: any, n: any, i: any): any {
    const r: any = (gt as any)(),
      {
        look: h,
        theme: c,
        themeVariables: a
      }: any = r,
      {
        useGradient: f,
        gradientStart: g,
        gradientStop: m
      }: any = a,
      y: any = (r as any).timeline?.leftMargin ?? 50;
    ((E as any).debug as any)("timeline", (i as any).db);
    const k: any = (r as any).securityLevel;
    let s: any;
    (k as any) === ("sandbox" as any) && (s = (U as any)(("#i" as any) + (t as any)));
    const l: any = ((((k as any) === ("sandbox" as any) ? (U as any)((((((s as any).nodes as any)() as any)[0] as any).contentDocument as any).body) : (U as any)("body")) as any).select as any)(("#" as any) + (t as any));
    ((l as any).append as any)("g");
    const p: any = (((i as any).db as any).getTasks as any)(),
      x: any = (((((i as any).db as any).getCommonDb as any)() as any).getDiagramTitle as any)();
    ((E as any).debug as any)("task", p), ((M as any).initGraphics as any)(l, t);
    const u: any = (((i as any).db as any).getSections as any)();
    ((E as any).debug as any)("sections", u);
    let S: any = 0,
      v: any = 0,
      I: any = 0,
      R: any = 0,
      W: any = (50 as any) + (y as any),
      O: any = 50;
    R = 50;
    let L: any = 0,
      w: any = !0;
    ((u as any).forEach as any)(function (this: any, N: any): any {
      const b: any = {
          number: L,
          descr: N,
          section: L,
          width: 150,
          padding: 20,
          maxHeight: S
        },
        _: any = ((M as any).getVirtualNodeHeight as any)(l, b, r);
      ((E as any).debug as any)("sectionHeight before draw", _), S = ((Math as any).max as any)(S, (_ as any) + (20 as any));
    });
    let H: any = 0,
      V: any = 0;
    ((E as any).debug as any)("tasks.length", (p as any).length);
    for (const [N, b] of ((p as any).entries as any)()) {
      const _: any = {
          number: N,
          descr: b,
          section: (b as any).section,
          width: 150,
          padding: 20,
          maxHeight: v
        },
        $: any = ((M as any).getVirtualNodeHeight as any)(l, _, r);
      ((E as any).debug as any)("taskHeight before draw", $), v = ((Math as any).max as any)(v, ($ as any) + (20 as any)), H = ((Math as any).max as any)(H, ((b as any).events as any).length);
      let T: any = 0;
      for (const P of (b as any).events) {
        const C: any = {
          descr: P,
          section: (b as any).section,
          number: (b as any).section,
          width: 150,
          padding: 20,
          maxHeight: 50
        };
        T += ((M as any).getVirtualNodeHeight as any)(l, C, r);
      }
      (((b as any).events as any).length as any) > (0 as any) && (T += ((((b as any).events as any).length as any) - (1 as any) as any) * (10 as any)), V = ((Math as any).max as any)(V, T);
    }
    ((E as any).debug as any)("maxSectionHeight before draw", S), ((E as any).debug as any)("maxTaskHeight before draw", v), u && ((u as any).length as any) > (0 as any) ? ((u as any).forEach as any)((N: any): any => {
      const b: any = ((p as any).filter as any)((P: any): any => ((P as any).section as any) === (N as any)),
        _: any = {
          number: L,
          descr: N,
          section: L,
          width: ((200 as any) * (((Math as any).max as any)((b as any).length, 1) as any) as any) - (50 as any),
          padding: 20,
          maxHeight: S
        };
      ((E as any).debug as any)("sectionNode", _);
      const $: any = ((l as any).append as any)("g"),
        T: any = ((M as any).drawNode as any)($, _, L, r, t);
      ((E as any).debug as any)("sectionNode output", T), (($ as any).attr as any)("transform", `translate(${W}, ${R})`), O += (S as any) + (50 as any), ((b as any).length as any) > (0 as any) && (lt as any)(l, b, L, W, O, v, r, H, V, S, !1, t), W += (200 as any) * (((Math as any).max as any)((b as any).length, 1) as any), O = R, L++;
    }) : (w = !1, (lt as any)(l, p, L, W, O, v, r, H, V, S, !0, t));
    const F: any = ((((l as any).node as any)() as any).getBBox as any)();
    if (((E as any).debug as any)("bounds", F), x && ((((((((((((l as any).append as any)("text") as any).text as any)(x) as any).attr as any)("x", (h as any) === ("neo" as any) ? (((F as any).x as any) * (2 as any) as any) + (y as any) : (((F as any).width as any) / (2 as any) as any) - (y as any)) as any).attr as any)("font-size", "4ex") as any).attr as any)("font-weight", "bold") as any).attr as any)("y", 20), I = w ? ((S as any) + (v as any) as any) + (150 as any) : (v as any) + (100 as any), ((((((((((((((((((((l as any).append as any)("g") as any).attr as any)("class", "lineWrapper") as any).append as any)("line") as any).attr as any)("x1", y) as any).attr as any)("y1", I) as any).attr as any)("x2", ((F as any).width as any) + ((3 as any) * (y as any) as any)) as any).attr as any)("y2", I) as any).attr as any)("stroke-width", 4) as any).attr as any)("stroke", "black") as any).attr as any)("marker-end", `url(#${t}-arrowhead)`), (h as any) === ("neo" as any) && f && (c as any) !== ("neutral" as any)) {
      const N: any = ((l as any).select as any)("defs"),
        _: any = (((((((((((((((((N as any).empty as any)() ? ((l as any).append as any)("defs") : N) as any).append as any)("linearGradient") as any).attr as any)("id", (((l as any).attr as any)("id") as any) + ("-gradient" as any)) as any).attr as any)("gradientUnits", "objectBoundingBox") as any).attr as any)("x1", "0%") as any).attr as any)("y1", "0%") as any).attr as any)("x2", "100%") as any).attr as any)("y2", "0%");
      ((((((((_ as any).append as any)("stop") as any).attr as any)("offset", "0%") as any).attr as any)("stop-color", g) as any).attr as any)("stop-opacity", 1), ((((((((_ as any).append as any)("stop") as any).attr as any)("offset", "100%") as any).attr as any)("stop-color", m) as any).attr as any)("stop-opacity", 1);
    }
    (ft as any)(void 0, l, (r as any).timeline?.padding ?? 50, (r as any).timeline?.useMaxWidth ?? !1);
  }, "draw"),
  lt: any = (o as any)(function (this: any, e: any, t: any, n: any, i: any, r: any, h: any, c: any, a: any, f: any, g: any, m: any, y: any): any {
    for (const k of t) {
      const s: any = {
        descr: (k as any).task,
        section: n,
        number: n,
        width: 150,
        padding: 20,
        maxHeight: h
      };
      ((E as any).debug as any)("taskNode", s);
      const d: any = ((((e as any).append as any)("g") as any).attr as any)("class", "taskWrapper"),
        p: any = (((M as any).drawNode as any)(d, s, n, c, y) as any).height;
      if (((E as any).debug as any)("taskHeight after draw", p), ((d as any).attr as any)("transform", `translate(${i}, ${r})`), h = ((Math as any).max as any)(h, p), (k as any).events) {
        const x: any = ((((e as any).append as any)("g") as any).attr as any)("class", "lineWrapper");
        let u: any = h;
        r += 100, u = (u as any) + ((ne as any)(e, (k as any).events, n, i, r, c, y) as any), r -= 100, ((((((((((((((((((x as any).append as any)("line") as any).attr as any)("x1", (i as any) + ((190 as any) / (2 as any) as any)) as any).attr as any)("y1", (r as any) + (h as any)) as any).attr as any)("x2", (i as any) + ((190 as any) / (2 as any) as any)) as any).attr as any)("y2", ((((r as any) + (h as any) as any) + (100 as any) as any) + (f as any) as any) + (100 as any)) as any).attr as any)("stroke-width", 2) as any).attr as any)("stroke", "black") as any).attr as any)("marker-end", `url(#${y}-arrowhead)`) as any).attr as any)("stroke-dasharray", "5,5");
      }
      i = (i as any) + (200 as any), m && !(c as any).timeline?.disableMulticolor && n++;
    }
    r = (r as any) - (10 as any);
  }, "drawTasks"),
  ne: any = (o as any)(function (this: any, e: any, t: any, n: any, i: any, r: any, h: any, c: any): any {
    let a: any = 0;
    const f: any = r;
    r = (r as any) + (100 as any);
    for (const g of t) {
      const m: any = {
        descr: g,
        section: n,
        number: n,
        width: 150,
        padding: 20,
        maxHeight: 50
      };
      ((E as any).debug as any)("eventNode", m);
      const y: any = ((((e as any).append as any)("g") as any).attr as any)("class", "eventWrapper"),
        s: any = (((M as any).drawNode as any)(y, m, n, h, c, !0) as any).height;
      a = (a as any) + (s as any), ((y as any).attr as any)("transform", `translate(${i}, ${r})`), r = ((r as any) + (10 as any) as any) + (s as any);
    }
    return r = f, a;
  }, "drawEvents"),
  re: any = {
    setConf: (o as any)((): any => {}, "setConf"),
    draw: ee
  },
  Q: number = 200,
  z: number = 5,
  se: any = (Q as any) + ((z as any) * (2 as any) as any),
  at: any = (Q as any) + (100 as any),
  ie: any = (at as any) + ((z as any) * (2 as any) as any),
  Lt: number = 10,
  ae: number = 0,
  ht: number = 20,
  Mt: number = 20,
  dt: number = 30,
  At: number = 50,
  oe: any = (o as any)(function (this: any, e: any, t: any, n: any, i: any): any {
    const r: any = (gt as any)(),
      h: any = (r as any).timeline?.leftMargin ?? 50;
    ((E as any).debug as any)("timeline", (i as any).db);
    const c: any = (Pt as any)(t);
    ((c as any).append as any)("g");
    const a: any = (((i as any).db as any).getTasks as any)(),
      f: any = (((((i as any).db as any).getCommonDb as any)() as any).getDiagramTitle as any)();
    ((E as any).debug as any)("task", a), ((M as any).initGraphics as any)(c);
    const g: any = (((i as any).db as any).getSections as any)();
    ((E as any).debug as any)("sections", g);
    let m: any = 0,
      y: any = 0;
    const k: any = (50 as any) + (h as any);
    let s: any = 50;
    const d: any = s,
      l: any = k,
      p: any = (se as any) + (Mt as any),
      x: any = (ie as any) + (At as any),
      u: any = (l as any) + (p as any);
    let S: any = 0;
    const v: any = g && ((g as any).length as any) > (0 as any),
      I: any = v ? u : (k as any) + (p as any),
      R: any = ((Math as any).max as any)(50, ((p as any) + (x as any) as any) - ((z as any) * (2 as any) as any));
    ((g as any).forEach as any)(function (this: any, N: any): any {
      const b: any = {
          number: S,
          descr: N,
          section: S,
          width: R,
          padding: z,
          maxHeight: m
        },
        _: any = ((M as any).getVirtualNodeHeight as any)(c, b, r);
      ((E as any).debug as any)("sectionHeight before draw", _), m = ((Math as any).max as any)(m, _);
    });
    let W: any = 0;
    ((E as any).debug as any)("tasks.length", (a as any).length);
    for (const [N, b] of ((a as any).entries as any)()) {
      const _: any = {
          number: N,
          descr: b,
          section: (b as any).section,
          width: Q,
          padding: z,
          maxHeight: y
        },
        $: any = ((M as any).getVirtualNodeHeight as any)(c, _, r);
      ((E as any).debug as any)("taskHeight before draw", $), y = ((Math as any).max as any)(y, $);
      let T: any = 0;
      for (const P of (b as any).events) {
        const C: any = {
          descr: P,
          section: (b as any).section,
          number: (b as any).section,
          width: at,
          padding: z,
          maxHeight: 50
        };
        T += ((M as any).getVirtualNodeHeight as any)(c, C, r);
      }
      (((b as any).events as any).length as any) > (0 as any) && (T += ((((b as any).events as any).length as any) - (1 as any) as any) * (Lt as any)), W = (((Math as any).max as any)(W, T) as any) + (ae as any);
    }
    ((E as any).debug as any)("maxSectionHeight before draw", m), ((E as any).debug as any)("maxTaskHeight before draw", y);
    const L: any = (((Math as any).max as any)(y, W) as any) + (dt as any);
    v ? ((g as any).forEach as any)((N: any): any => {
      const b: any = ((a as any).filter as any)((X: any): any => ((X as any).section as any) === (N as any)),
        _: any = {
          number: S,
          descr: N,
          section: S,
          width: R,
          padding: z,
          maxHeight: m
        };
      ((E as any).debug as any)("sectionNode", _);
      const $: any = ((c as any).append as any)("g"),
        T: any = ((M as any).drawNode as any)($, _, S, r);
      ((E as any).debug as any)("sectionNode output", T);
      const P: any = (I as any) - (p as any);
      (($ as any).attr as any)("transform", `translate(${P}, ${s})`);
      const C: any = ((s as any) + ((T as any).height as any) as any) + (ht as any);
      ((b as any).length as any) > (0 as any) && (ut as any)(c, b, S, I, C, y, r, L, !1);
      const G: any = (b as any).length,
        B: any = ((((T as any).height as any) + (ht as any) as any) + ((L as any) * (((Math as any).max as any)(G, 1) as any) as any) as any) - (((G as any) > (0 as any) ? (dt as any) * (2 as any) : 0) as any);
      s += B, S++;
    }) : (ut as any)(c, a, S, I, s, y, r, L, !0);
    let w: any = ((c as any).node as any)()?.getBBox();
    if (!w) throw new (Error as any)("bbox not found");
    if (((E as any).debug as any)("bounds", w), f) {
      if (((((((((((((c as any).append as any)("text") as any).text as any)(f) as any).attr as any)("x", (((w as any).width as any) / (2 as any) as any) - (h as any)) as any).attr as any)("font-size", "4ex") as any).attr as any)("font-weight", "bold") as any).attr as any)("y", 20), w = ((c as any).node as any)()?.getBBox(), !w) throw new (Error as any)("bbox not found");
      ((E as any).debug as any)("bounds after title", w);
    }
    const [H]: any = (Bt as any)((r as any).fontSize),
      V: any = ((H ?? 16) as any) * (2 as any),
      F: any = (((H ?? 16) as any) * (.5 as any) as any) + (20 as any),
      K: any = ((((c as any).append as any)("g") as any).attr as any)("class", "lineWrapper");
    ((((((((((((((((K as any).append as any)("line") as any).attr as any)("x1", I) as any).attr as any)("y1", (d as any) - (V as any)) as any).attr as any)("x2", I) as any).attr as any)("y2", (((w as any).y as any) + ((w as any).height as any) as any) + (F as any)) as any).attr as any)("stroke-width", 4) as any).attr as any)("stroke", "black") as any).attr as any)("marker-end", "url(#arrowhead)"), ((K as any).lower as any)(), (ft as any)(void 0, c, (r as any).timeline?.padding ?? 50, (r as any).timeline?.useMaxWidth ?? !1);
  }, "draw"),
  ut: any = (o as any)(function (this: any, e: any, t: any, n: any, i: any, r: any, h: any, c: any, a: any, f: any): any {
    for (const g of t) {
      const m: any = {
        descr: (g as any).task,
        section: n,
        number: n,
        width: Q,
        padding: z,
        maxHeight: h
      };
      ((E as any).debug as any)("taskNode", m);
      const y: any = ((((e as any).append as any)("g") as any).attr as any)("class", "taskWrapper"),
        k: any = ((M as any).drawNode as any)(y, m, n, c),
        s: any = (k as any).height;
      ((E as any).debug as any)("taskHeight after draw", s);
      const d: any = ((i as any) - (Mt as any) as any) - ((k as any).width as any);
      if (((y as any).attr as any)("transform", `translate(${d}, ${r})`), h = ((Math as any).max as any)(h, s), (g as any).events && (((g as any).events as any).length as any) > (0 as any)) {
        const l: any = r,
          p: any = (i as any) + (At as any);
        (ce as any)(e, (g as any).events, n, i, p, l, c);
      }
      r = (r as any) + (a as any), f && !(c as any).timeline?.disableMulticolor && n++;
    }
  }, "drawTasks"),
  ce: any = (o as any)(function (this: any, e: any, t: any, n: any, i: any, r: any, h: any, c: any): any {
    let a: any = h;
    for (const f of t) {
      const g: any = {
        descr: f,
        section: n,
        number: n,
        width: at,
        padding: z,
        maxHeight: 0
      };
      ((E as any).debug as any)("eventNode", g);
      const m: any = ((((e as any).append as any)("g") as any).attr as any)("class", "eventWrapper"),
        k: any = (((M as any).drawNode as any)(m, g, n, c) as any).height;
      ((m as any).attr as any)("transform", `translate(${r}, ${a})`);
      const s: any = ((((e as any).append as any)("g") as any).attr as any)("class", "lineWrapper"),
        d: any = (a as any) + ((k as any) / (2 as any) as any);
      ((((((((((((((((((s as any).append as any)("line") as any).attr as any)("x1", i) as any).attr as any)("y1", d) as any).attr as any)("x2", r) as any).attr as any)("y2", d) as any).attr as any)("stroke-width", 2) as any).attr as any)("stroke", "black") as any).attr as any)("marker-end", "url(#arrowhead)") as any).attr as any)("stroke-dasharray", "5,5"), a = ((a as any) + (k as any) as any) + (Lt as any);
    }
    return (a as any) - (h as any);
  }, "drawEvents"),
  le: any = {
    setConf: (o as any)((): any => {}, "setConf"),
    draw: oe
  },
  he: any = (o as any)((e: any): any => {
    const {
        theme: t
      }: any = (pt as any)(),
      n: any = t?.includes("dark"),
      i: any = t?.includes("color"),
      r: any = (e as any).svgId?.replace(/^#/, "") ?? "",
      h: any = r ? `url(#${r}-drop-shadow)` : (e as any).dropShadow ?? "none";
    let c: any = "";
    for (let a: any = 0; (a as any) < ((e as any).THEME_COLOR_LIMIT as any); a++) {
      const f: any = `${(17 as any) - ((3 as any) * (a as any) as any)}`,
        g: any = i ? ((e as any).borderColorArray as any)[a] : (e as any).mainBkg,
        m: any = i ? ((e as any).borderColorArray as any)[a] : (e as any).nodeBorder;
      c += `
    .section-${(a as any) - (1 as any)} rect,
    .section-${(a as any) - (1 as any)} path,
    .section-${(a as any) - (1 as any)} circle {
      fill: ${n && i ? (e as any).mainBkg : g};
      stroke: ${m};
      stroke-width: ${(e as any).strokeWidth};
      filter: ${h};
    }

    .section-${(a as any) - (1 as any)} text {
      fill: ${(e as any).nodeBorder};
      font-weight: ${(e as any).fontWeight}
    }

    .node-icon-${(a as any) - (1 as any)} {
      font-size: 40px;
      color: ${(e as any)[("cScaleLabel" as any) + (a as any)]};
    }

    .section-edge-${(a as any) - (1 as any)} {
      stroke: ${(e as any)[("cScale" as any) + (a as any)]};
    }

    .edge-depth-${(a as any) - (1 as any)} {
      stroke-width: ${f};
    }

    .section-${(a as any) - (1 as any)} line {
      stroke: ${(e as any)[("cScaleInv" as any) + (a as any)]};
      stroke-width: 3;
    }

    .lineWrapper line {
      stroke: ${(e as any).nodeBorder};
      stroke-width:${(e as any).strokeWidth}
    }

    .disabled,
    .disabled circle,
    .disabled text {
      fill: ${(e as any).tertiaryColor ?? "lightgray"};
    }

    .disabled text {
      fill: ${(e as any).clusterBorder ?? "#efefef"};
    }
    `;
    }
    return c;
  }, "genReduxSections"),
  de: any = (o as any)((e: any): any => {
    let t: any = "";
    for (let n: any = 0; (n as any) < ((e as any).THEME_COLOR_LIMIT as any); n++) (e as any)[("lineColor" as any) + (n as any)] = (e as any)[("lineColor" as any) + (n as any)] || (e as any)[("cScaleInv" as any) + (n as any)], (Rt as any)((e as any)[("lineColor" as any) + (n as any)]) ? (e as any)[("lineColor" as any) + (n as any)] = (Ct as any)((e as any)[("lineColor" as any) + (n as any)], 20) : (e as any)[("lineColor" as any) + (n as any)] = (Wt as any)((e as any)[("lineColor" as any) + (n as any)], 20);
    for (let n: any = 0; (n as any) < ((e as any).THEME_COLOR_LIMIT as any); n++) {
      const i: any = ("" as any) + ((17 as any) - ((3 as any) * (n as any) as any) as any);
      t += `
    .section-${(n as any) - (1 as any)} rect, .section-${(n as any) - (1 as any)} path, .section-${(n as any) - (1 as any)} circle, .section-${(n as any) - (1 as any)} path  {
      fill: ${(e as any)[("cScale" as any) + (n as any)]};
    }
    .section-${(n as any) - (1 as any)} text {
     fill: ${(e as any)[("cScaleLabel" as any) + (n as any)]};
    }
    .node-icon-${(n as any) - (1 as any)} {
      font-size: 40px;
      color: ${(e as any)[("cScaleLabel" as any) + (n as any)]};
    }
    .section-edge-${(n as any) - (1 as any)}{
      stroke: ${(e as any)[("cScale" as any) + (n as any)]};
    }
    .edge-depth-${(n as any) - (1 as any)}{
      stroke-width: ${i};
    }
    .section-${(n as any) - (1 as any)} line {
      stroke: ${(e as any)[("cScaleInv" as any) + (n as any)]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${(e as any)[("cScaleLabel" as any) + (n as any)]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: ${(e as any).tertiaryColor ?? "lightgray"};
    }
    .disabled text {
      fill: ${(e as any).clusterBorder ?? "#efefef"};
    }
    `;
    }
    return t;
  }, "genSections"),
  ue: any = (o as any)((e: any): any => {
    const {
        theme: t
      }: any = (pt as any)(),
      n: any = t?.includes("redux"),
      i: any = (t as any) === ("neutral" as any),
      r: any = (e as any).svgId?.replace(/^#/, "") ?? "";
    let h: any = "";
    if ((e as any).useGradient && r && (e as any).THEME_COLOR_LIMIT && !i) for (let c: any = 0; (c as any) < ((e as any).THEME_COLOR_LIMIT as any); c++) h += `
      .section-${(c as any) - (1 as any)}[data-look="neo"] rect,
      .section-${(c as any) - (1 as any)}[data-look="neo"] path,
      .section-${(c as any) - (1 as any)}[data-look="neo"] circle {
        fill: ${(e as any).mainBkg};
        stroke: url(#${r}-gradient);
        stroke-width: 2;
      }
      .section-${(c as any) - (1 as any)}[data-look="neo"] line {
        stroke: url(#${r}-gradient);
        stroke-width: 2;
      }`;
    return `
  .edge {
    stroke-width: 3;
  }
  ${n ? (he as any)(e) : (de as any)(e)}
  ${h}
  .section-root rect, .section-root path, .section-root circle  {
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
  .eventWrapper  {
   filter: brightness(120%);
  }
`;
  }, "getStyles"),
  pe: any = ue,
  ge: any = {
    setConf: (o as any)((): any => {}, "setConf"),
    draw: (o as any)((e: any, t: any, n: any, i: any): any => ((i?.db?.getDirection?.() ?? "LR") as any) === ("TD" as any) ? ((le as any).draw as any)(e, t, n, i) : ((re as any).draw as any)(e, t, n, i), "draw")
  },
  xe: any = {
    db: yt,
    renderer: ge,
    parser: Ot,
    styles: pe
  };
export { xe as diagram };
//# debugId=178d9650-eb73-44c3-ab71-1ca0b58ca7a0
