declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "c8db0398-27b0-4562-a4a1-c72924fe2f17", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-c8db0398-27b0-4562-a4a1-c72924fe2f17");
  } catch (e: any) {}
} as any)();
import { g as s, r as l, d as t } from "./chunk-chunk-MOJQB5TN-Dc0kYzUb.js";
import { p as m } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _ as n, l as i } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { c as p, M as u } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var d: any = ((((p as any)() as any).Railroad as any).parser as any).LangiumParser,
  a: any = (n as any)((e: any): any => {
    switch ((e as any).$type) {
      case "RailroadTerminalExpr":
        return {
          type: "terminal",
          value: (e as any).value
        };
      case "RailroadNonTerminalExpr":
        return {
          type: "nonterminal",
          name: (e as any).name
        };
      case "RailroadSpecialExpr":
        return {
          type: "special",
          text: (e as any).text
        };
      case "RailroadSequenceExpr":
        {
          const r: any = (((e as any).elements as any).map as any)(a);
          return ((r as any).length as any) === (1 as any) ? (r as any)[0] : {
            type: "sequence",
            elements: r
          };
        }
      case "RailroadChoiceExpr":
        {
          const r: any = (((e as any).alternatives as any).map as any)(a);
          return ((r as any).length as any) === (1 as any) ? (r as any)[0] : {
            type: "choice",
            alternatives: r
          };
        }
      case "RailroadOptionalExpr":
        return {
          type: "optional",
          element: (a as any)((e as any).element)
        };
      case "RailroadOneOrMoreExpr":
        return {
          type: "repetition",
          element: (a as any)((e as any).element),
          min: 1,
          max: (1 as any) / (0 as any)
        };
      case "RailroadZeroOrMoreExpr":
        return {
          type: "repetition",
          element: (a as any)((e as any).element),
          min: 0,
          max: (1 as any) / (0 as any)
        };
      default:
        throw new (Error as any)(`Unsupported railroad expression: ${(e as any).$type}`);
    }
  }, "transformExpression"),
  c: any = (n as any)((e: any): any => ({
    name: (e as any).name,
    definition: (a as any)((e as any).definition)
  }), "transformRule"),
  g: any = (n as any)((e: any): any => {
    (m as any)(e, t), (e as any).title && ((t as any).setTitle as any)((e as any).title), (((e as any).rules as any).map as any)((r: any): any => ((t as any).addRule as any)((c as any)(r)));
  }, "populateDb"),
  y: any = {
    parse: (n as any)((e: any): any => {
      ((t as any).clear as any)(), ((i as any).debug as any)("[Railroad Parser] Starting Langium parse");
      const r: any = ((d as any).parse as any)(e);
      if ((((r as any).lexerErrors as any).length as any) > (0 as any) || (((r as any).parserErrors as any).length as any) > (0 as any)) throw new (u as any)(r);
      const o: any = (r as any).value;
      ((i as any).debug as any)("[Railroad Parser] Parsed rules:", ((o as any).rules as any).length), (g as any)(o), ((i as any).debug as any)("[Railroad Parser] Parse complete");
    }, "parse"),
    parser: {
      yy: t
    }
  },
  x: any = {
    parser: y,
    db: t,
    renderer: l,
    styles: s
  };
export { x as diagram };
//# debugId=c8db0398-27b0-4562-a4a1-c72924fe2f17
