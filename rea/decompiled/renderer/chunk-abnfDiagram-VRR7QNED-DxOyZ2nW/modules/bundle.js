import { g as g_1, r as renderer, d } from "./chunk-chunk-MOJQB5TN-Dc0kYzUb.js";
import { p } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _, l } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { b as b_1, M } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "56543f17-18c5-4e0a-bc86-b0b726a6a3be";
            e._sentryDebugIdIdentifier = "sentry-dbid-56543f17-18c5-4e0a-bc86-b0b726a6a3be";
        }
    } catch (e) {}
})();
const LangiumParser = b_1().RailroadAbnf.parser.LangiumParser;
const i = _((e)=>{
    const alternatives = e.alternatives.map(g);
    if (alternatives.length === 1) {
        return alternatives[0];
    }
    return {
        type: "choice",
        alternatives
    };
}, "transformAlternation");
var g = _((e)=>{
    const elements = e.elements.map(y);
    if (elements.length === 1) {
        return elements[0];
    }
    return {
        type: "sequence",
        elements
    };
}, "transformConcatenation");
const b = _((e)=>{
    if (e.includes("*")) {
        const [t, s] = e.split("*");
        const min = t ? parseInt(t, 10) : 0;
        const max = s ? parseInt(s, 10) : Infinity;
        return {
            min,
            max
        };
    }
    const r = parseInt(e, 10);
    return {
        min: r,
        max: r
    };
}, "parseRepeat");
var y = _((e)=>{
    const element = A(e.primary);
    if (!e.repeat) {
        return element;
    }
    const { min, max } = b(e.repeat);
    if (min === 0 && max === 1) {
        return {
            type: "optional",
            element
        };
    }
    return {
        type: "repetition",
        element,
        min,
        max
    };
}, "transformElement");
var A = _((e)=>{
    switch(e.$type){
        case "AbnfStringLiteral":
            return {
                type: "terminal",
                value: e.value
            };
        case "AbnfNumVal":
            return {
                type: "terminal",
                value: e.value
            };
        case "AbnfRuleName":
            return {
                type: "nonterminal",
                name: e.name
            };
        case "AbnfGroup":
            return i(e.element);
        case "AbnfOptionalGroup":
            return {
                type: "optional",
                element: i(e.element)
            };
        default:
            throw new Error(`Unsupported ABNF primary node: ${e.$type}`);
    }
}, "transformPrimary");
const P = _((e)=>({
        name: e.name,
        definition: i(e.definition)
    }), "transformRule");
const h = _((e)=>{
    p(e, d);
    if (e.title) {
        d.setTitle(e.title);
    }
    e.rules.map((r)=>d.addRule(P(r)));
}, "populateDb");
const parser = {
    parse: _((e)=>{
        d.clear();
        l.debug("[ABNF Parser] Starting Langium parse");
        const r = LangiumParser.parse(e);
        if (r.lexerErrors.length > 0 || r.parserErrors.length > 0) {
            throw new M(r);
        }
        const r_value = r.value;
        l.debug("[ABNF Parser] Parsed rules:", r_value.rules.length);
        h(r_value);
        l.debug("[ABNF Parser] Parse complete");
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
