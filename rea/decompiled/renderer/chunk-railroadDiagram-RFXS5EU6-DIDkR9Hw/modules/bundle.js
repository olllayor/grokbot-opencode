import { g as g_1, r as renderer, d } from "./chunk-chunk-MOJQB5TN-Dc0kYzUb.js";
import { p } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _, l } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { c as c_1, M } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "c8db0398-27b0-4562-a4a1-c72924fe2f17";
            e._sentryDebugIdIdentifier = "sentry-dbid-c8db0398-27b0-4562-a4a1-c72924fe2f17";
        }
    } catch (e) {}
})();
const LangiumParser = c_1().Railroad.parser.LangiumParser;
var a = _((e)=>{
    switch(e.$type){
        case "RailroadTerminalExpr":
            return {
                type: "terminal",
                value: e.value
            };
        case "RailroadNonTerminalExpr":
            return {
                type: "nonterminal",
                name: e.name
            };
        case "RailroadSpecialExpr":
            return {
                type: "special",
                text: e.text
            };
        case "RailroadSequenceExpr":
            {
                const elements = e.elements.map(a);
                if (elements.length === 1) {
                    return elements[0];
                }
                return {
                    type: "sequence",
                    elements
                };
            }
        case "RailroadChoiceExpr":
            {
                const alternatives = e.alternatives.map(a);
                if (alternatives.length === 1) {
                    return alternatives[0];
                }
                return {
                    type: "choice",
                    alternatives
                };
            }
        case "RailroadOptionalExpr":
            return {
                type: "optional",
                element: a(e.element)
            };
        case "RailroadOneOrMoreExpr":
            return {
                type: "repetition",
                element: a(e.element),
                min: 1,
                max: Infinity
            };
        case "RailroadZeroOrMoreExpr":
            return {
                type: "repetition",
                element: a(e.element),
                min: 0,
                max: Infinity
            };
        default:
            throw new Error(`Unsupported railroad expression: ${e.$type}`);
    }
}, "transformExpression");
const c = _((e)=>({
        name: e.name,
        definition: a(e.definition)
    }), "transformRule");
const g = _((e)=>{
    p(e, d);
    if (e.title) {
        d.setTitle(e.title);
    }
    e.rules.map((r)=>d.addRule(c(r)));
}, "populateDb");
const parser = {
    parse: _((e)=>{
        d.clear();
        l.debug("[Railroad Parser] Starting Langium parse");
        const r = LangiumParser.parse(e);
        if (r.lexerErrors.length > 0 || r.parserErrors.length > 0) {
            throw new M(r);
        }
        const r_value = r.value;
        l.debug("[Railroad Parser] Parsed rules:", r_value.rules.length);
        g(r_value);
        l.debug("[Railroad Parser] Parse complete");
    }, "parse"),
    parser: {
        yy: d
    }
};
export const diagram = {
    parser,
    db: d,
    renderer,
    styles: g_1
};
