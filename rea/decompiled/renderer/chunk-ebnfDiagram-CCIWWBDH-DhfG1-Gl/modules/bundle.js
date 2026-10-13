import { g as styles, r as renderer, d as d_1 } from "./chunk-chunk-MOJQB5TN-Dc0kYzUb.js";
import { p } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _, l } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { a, M } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "847c3dca-ee33-40cd-9532-c358288fd221";
            e._sentryDebugIdIdentifier = "sentry-dbid-847c3dca-ee33-40cd-9532-c358288fd221";
        }
    } catch (e) {}
})();
const LangiumParser = a().RailroadEbnf.parser.LangiumParser;
const s = _((e)=>{
    const alternatives = e.alternatives.map(E);
    if (alternatives.length === 1) {
        return alternatives[0];
    }
    return {
        type: "choice",
        alternatives
    };
}, "transformChoice");
var E = _((e)=>{
    const elements = e.elements.map(d);
    if (elements.length === 1) {
        return elements[0];
    }
    return {
        type: "sequence",
        elements
    };
}, "transformSequence");
const i = _((e)=>{
    switch(e.$type){
        case "EbnfTerminal":
            return {
                type: "terminal",
                value: e.value
            };
        case "EbnfNonTerminal":
            return {
                type: "nonterminal",
                name: e.name
            };
        case "EbnfSpecial":
            return {
                type: "special",
                text: e.text
            };
        case "EbnfGroup":
            return s(e.element);
        case "EbnfOptional":
            return {
                type: "optional",
                element: s(e.element)
            };
        case "EbnfRepetition":
            return {
                type: "repetition",
                element: s(e.element),
                min: 0,
                max: Infinity
            };
        default:
            throw new Error(`Unsupported EBNF primary node: ${e.$type}`);
    }
}, "transformPrimary");
const b = _((element, r)=>{
    switch(r.$type){
        case "EbnfOptionalPostfix":
            return {
                type: "optional",
                element
            };
        case "EbnfZeroOrMorePostfix":
            return {
                type: "repetition",
                element,
                min: 0,
                max: Infinity
            };
        case "EbnfOneOrMorePostfix":
            return {
                type: "repetition",
                element,
                min: 1,
                max: Infinity
            };
        case "EbnfExceptionPostfix":
            return {
                type: "sequence",
                elements: [
                    element,
                    {
                        type: "terminal",
                        value: "-"
                    },
                    i(r.except)
                ]
            };
        default:
            throw new Error(`Unsupported EBNF postfix node: ${r.$type}`);
    }
}, "transformPostfix");
var d = _((e)=>e.postfixes.reduce((acc, postfix)=>b(acc, postfix), i(e.base)), "transformTerm");
const y = _((e)=>({
        name: e.name,
        definition: s(e.definition)
    }), "transformRule");
const v = _((e)=>{
    p(e, d_1);
    if (e.title) {
        d_1.setTitle(e.title);
    }
    e.rules.map((r)=>d_1.addRule(y(r)));
}, "populateDb");
const parser = {
    parse: _((e)=>{
        d_1.clear();
        l.debug("[EBNF Parser] Starting Langium parse");
        const r = LangiumParser.parse(e);
        if (r.lexerErrors.length > 0 || r.parserErrors.length > 0) {
            throw new M(r);
        }
        const r_value = r.value;
        l.debug("[EBNF Parser] Parsed rules:", r_value.rules.length);
        v(r_value);
        l.debug("[EBNF Parser] Parse complete");
    }, "parse"),
    parser: {
        yy: d_1
    }
};
export const diagram = {
    parser,
    db: d_1,
    renderer,
    styles
};
