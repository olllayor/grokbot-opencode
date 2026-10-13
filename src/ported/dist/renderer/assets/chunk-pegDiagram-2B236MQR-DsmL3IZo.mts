declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "645c4d55-4a4f-4213-90f1-50015d4bb96d", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-645c4d55-4a4f-4213-90f1-50015d4bb96d");
  } catch (e: any) {}
} as any)();
import { g as l, r as m, d as a } from "./chunk-chunk-MOJQB5TN-Dc0kYzUb.js";
import { p } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _ as t, l as o } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { d as u, M as c } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var f: any = ((((u as any)() as any).RailroadPeg as any).parser as any).LangiumParser,
  i: any = (t as any)((e: any): any => {
    const r: any = (((e as any).alternatives as any).map as any)(d);
    return ((r as any).length as any) === (1 as any) ? (r as any)[0] : {
      type: "choice",
      alternatives: r
    };
  }, "transformOrderedChoice"),
  d: any = (t as any)((e: any): any => {
    const r: any = (((e as any).elements as any).map as any)(P);
    return ((r as any).length as any) === (1 as any) ? (r as any)[0] : {
      type: "sequence",
      elements: r
    };
  }, "transformSequence"),
  P: any = (t as any)((e: any): any => {
    const r: any = (g as any)((e as any).suffix);
    return (e as any).operator ? {
      type: "special",
      text: ((e as any).operator as any) === ("&" as any) ? `&${(s as any)(r)}` : `!${(s as any)(r)}`
    } : r;
  }, "transformPrefix"),
  s: any = (t as any)((e: any): any => {
    switch ((e as any).type) {
      case "terminal":
        return `"${(e as any).value}"`;
      case "nonterminal":
        return (e as any).name;
      case "special":
        return (e as any).text;
      default:
        return "(...)";
    }
  }, "nodeToLabel"),
  g: any = (t as any)((e: any): any => {
    const r: any = (v as any)((e as any).primary);
    if (!(e as any).operator) return r;
    switch ((e as any).operator) {
      case "?":
        return {
          type: "optional",
          element: r
        };
      case "*":
        return {
          type: "repetition",
          element: r,
          min: 0,
          max: (1 as any) / (0 as any)
        };
      case "+":
        return {
          type: "repetition",
          element: r,
          min: 1,
          max: (1 as any) / (0 as any)
        };
      default:
        throw new (Error as any)(`Unsupported PEG suffix operator: ${(e as any).operator}`);
    }
  }, "transformSuffix"),
  v: any = (t as any)((e: any): any => {
    switch ((e as any).$type) {
      case "PegLiteral":
        return {
          type: "terminal",
          value: (e as any).value
        };
      case "PegIdentifier":
        return {
          type: "nonterminal",
          name: (e as any).name
        };
      case "PegGroup":
        return (i as any)((e as any).element);
      case "PegAny":
        return {
          type: "special",
          text: (e as any).dot
        };
      default:
        throw new (Error as any)(`Unsupported PEG primary node: ${(e as any).$type}`);
    }
  }, "transformPrimary"),
  y: any = (t as any)((e: any): any => ({
    name: (e as any).name,
    definition: (i as any)((e as any).definition)
  }), "transformRule"),
  h: any = (t as any)((e: any): any => {
    (p as any)(e, a), (e as any).title && ((a as any).setTitle as any)((e as any).title), (((e as any).rules as any).map as any)((r: any): any => ((a as any).addRule as any)((y as any)(r)));
  }, "populateDb"),
  b: any = {
    parse: (t as any)((e: any): any => {
      ((a as any).clear as any)(), ((o as any).debug as any)("[PEG Parser] Starting Langium parse");
      const r: any = ((f as any).parse as any)(e);
      if ((((r as any).lexerErrors as any).length as any) > (0 as any) || (((r as any).parserErrors as any).length as any) > (0 as any)) throw new (c as any)(r);
      const n: any = (r as any).value;
      ((o as any).debug as any)("[PEG Parser] Parsed rules:", ((n as any).rules as any).length), (h as any)(n), ((o as any).debug as any)("[PEG Parser] Parse complete");
    }, "parse"),
    parser: {
      yy: a
    }
  },
  G: any = {
    parser: b,
    db: a,
    renderer: m,
    styles: l
  };
export { G as diagram };
//# debugId=645c4d55-4a4f-4213-90f1-50015d4bb96d
