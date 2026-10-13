declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "847c3dca-ee33-40cd-9532-c358288fd221", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-847c3dca-ee33-40cd-9532-c358288fd221");
  } catch (e: any) {}
} as any)();
import { g as l, r as m, d as n } from "./chunk-chunk-MOJQB5TN-Dc0kYzUb.js";
import { p } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _ as t, l as o } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { a as u, M as f } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var c: any = ((((u as any)() as any).RailroadEbnf as any).parser as any).LangiumParser,
  s: any = (t as any)((e: any): any => {
    const r: any = (((e as any).alternatives as any).map as any)(E);
    return ((r as any).length as any) === (1 as any) ? (r as any)[0] : {
      type: "choice",
      alternatives: r
    };
  }, "transformChoice"),
  E: any = (t as any)((e: any): any => {
    const r: any = (((e as any).elements as any).map as any)(d);
    return ((r as any).length as any) === (1 as any) ? (r as any)[0] : {
      type: "sequence",
      elements: r
    };
  }, "transformSequence"),
  i: any = (t as any)((e: any): any => {
    switch ((e as any).$type) {
      case "EbnfTerminal":
        return {
          type: "terminal",
          value: (e as any).value
        };
      case "EbnfNonTerminal":
        return {
          type: "nonterminal",
          name: (e as any).name
        };
      case "EbnfSpecial":
        return {
          type: "special",
          text: (e as any).text
        };
      case "EbnfGroup":
        return (s as any)((e as any).element);
      case "EbnfOptional":
        return {
          type: "optional",
          element: (s as any)((e as any).element)
        };
      case "EbnfRepetition":
        return {
          type: "repetition",
          element: (s as any)((e as any).element),
          min: 0,
          max: (1 as any) / (0 as any)
        };
      default:
        throw new (Error as any)(`Unsupported EBNF primary node: ${(e as any).$type}`);
    }
  }, "transformPrimary"),
  b: any = (t as any)((e: any, r: any): any => {
    switch ((r as any).$type) {
      case "EbnfOptionalPostfix":
        return {
          type: "optional",
          element: e
        };
      case "EbnfZeroOrMorePostfix":
        return {
          type: "repetition",
          element: e,
          min: 0,
          max: (1 as any) / (0 as any)
        };
      case "EbnfOneOrMorePostfix":
        return {
          type: "repetition",
          element: e,
          min: 1,
          max: (1 as any) / (0 as any)
        };
      case "EbnfExceptionPostfix":
        return {
          type: "sequence",
          elements: [e, {
            type: "terminal",
            value: "-"
          }, (i as any)((r as any).except)]
        };
      default:
        throw new (Error as any)(`Unsupported EBNF postfix node: ${(r as any).$type}`);
    }
  }, "transformPostfix"),
  d: any = (t as any)((e: any): any => (((e as any).postfixes as any).reduce as any)((r: any, a: any): any => (b as any)(r, a), (i as any)((e as any).base)), "transformTerm"),
  y: any = (t as any)((e: any): any => ({
    name: (e as any).name,
    definition: (s as any)((e as any).definition)
  }), "transformRule"),
  v: any = (t as any)((e: any): any => {
    (p as any)(e, n), (e as any).title && ((n as any).setTitle as any)((e as any).title), (((e as any).rules as any).map as any)((r: any): any => ((n as any).addRule as any)((y as any)(r)));
  }, "populateDb"),
  g: any = {
    parse: (t as any)((e: any): any => {
      ((n as any).clear as any)(), ((o as any).debug as any)("[EBNF Parser] Starting Langium parse");
      const r: any = ((c as any).parse as any)(e);
      if ((((r as any).lexerErrors as any).length as any) > (0 as any) || (((r as any).parserErrors as any).length as any) > (0 as any)) throw new (f as any)(r);
      const a: any = (r as any).value;
      ((o as any).debug as any)("[EBNF Parser] Parsed rules:", ((a as any).rules as any).length), (v as any)(a), ((o as any).debug as any)("[EBNF Parser] Parse complete");
    }, "parse"),
    parser: {
      yy: n
    }
  },
  R: any = {
    parser: g,
    db: n,
    renderer: m,
    styles: l
  };
export { R as diagram };
//# debugId=847c3dca-ee33-40cd-9532-c358288fd221
