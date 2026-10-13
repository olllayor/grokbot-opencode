declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "56543f17-18c5-4e0a-bc86-b0b726a6a3be", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-56543f17-18c5-4e0a-bc86-b0b726a6a3be");
  } catch (e: any) {}
} as any)();
import { g as p, r as u, d as a } from "./chunk-chunk-MOJQB5TN-Dc0kYzUb.js";
import { p as f } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _ as n, l as o } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { b as c, M as d } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var v: any = ((((c as any)() as any).RailroadAbnf as any).parser as any).LangiumParser,
  i: any = (n as any)((e: any): any => {
    const r: any = (((e as any).alternatives as any).map as any)(g);
    return ((r as any).length as any) === (1 as any) ? (r as any)[0] : {
      type: "choice",
      alternatives: r
    };
  }, "transformAlternation"),
  g: any = (n as any)((e: any): any => {
    const r: any = (((e as any).elements as any).map as any)(y);
    return ((r as any).length as any) === (1 as any) ? (r as any)[0] : {
      type: "sequence",
      elements: r
    };
  }, "transformConcatenation"),
  b: any = (n as any)((e: any): any => {
    if (((e as any).includes as any)("*")) {
      const [t, s]: any = ((e as any).split as any)("*"),
        l: any = t ? (parseInt as any)(t, 10) : 0,
        m: any = s ? (parseInt as any)(s, 10) : (1 as any) / (0 as any);
      return {
        min: l,
        max: m
      };
    }
    const r: any = (parseInt as any)(e, 10);
    return {
      min: r,
      max: r
    };
  }, "parseRepeat"),
  y: any = (n as any)((e: any): any => {
    const r: any = (A as any)((e as any).primary);
    if (!(e as any).repeat) return r;
    const {
      min: t,
      max: s
    }: any = (b as any)((e as any).repeat);
    return (t as any) === (0 as any) && (s as any) === (1 as any) ? {
      type: "optional",
      element: r
    } : {
      type: "repetition",
      element: r,
      min: t,
      max: s
    };
  }, "transformElement"),
  A: any = (n as any)((e: any): any => {
    switch ((e as any).$type) {
      case "AbnfStringLiteral":
        return {
          type: "terminal",
          value: (e as any).value
        };
      case "AbnfNumVal":
        return {
          type: "terminal",
          value: (e as any).value
        };
      case "AbnfRuleName":
        return {
          type: "nonterminal",
          name: (e as any).name
        };
      case "AbnfGroup":
        return (i as any)((e as any).element);
      case "AbnfOptionalGroup":
        return {
          type: "optional",
          element: (i as any)((e as any).element)
        };
      default:
        throw new (Error as any)(`Unsupported ABNF primary node: ${(e as any).$type}`);
    }
  }, "transformPrimary"),
  P: any = (n as any)((e: any): any => ({
    name: (e as any).name,
    definition: (i as any)((e as any).definition)
  }), "transformRule"),
  h: any = (n as any)((e: any): any => {
    (f as any)(e, a), (e as any).title && ((a as any).setTitle as any)((e as any).title), (((e as any).rules as any).map as any)((r: any): any => ((a as any).addRule as any)((P as any)(r)));
  }, "populateDb"),
  R: any = {
    parse: (n as any)((e: any): any => {
      ((a as any).clear as any)(), ((o as any).debug as any)("[ABNF Parser] Starting Langium parse");
      const r: any = ((v as any).parse as any)(e);
      if ((((r as any).lexerErrors as any).length as any) > (0 as any) || (((r as any).parserErrors as any).length as any) > (0 as any)) throw new (d as any)(r);
      const t: any = (r as any).value;
      ((o as any).debug as any)("[ABNF Parser] Parsed rules:", ((t as any).rules as any).length), (h as any)(t), ((o as any).debug as any)("[ABNF Parser] Parse complete");
    }, "parse"),
    parser: {
      yy: a
    }
  },
  B: any = {
    parser: R,
    db: a,
    renderer: u,
    styles: p
  };
export { B as diagram };
//# debugId=56543f17-18c5-4e0a-bc86-b0b726a6a3be
