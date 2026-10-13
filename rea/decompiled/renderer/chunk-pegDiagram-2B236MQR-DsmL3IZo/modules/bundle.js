import { g as g_1, r as renderer, d as d_1 } from "./chunk-chunk-MOJQB5TN-Dc0kYzUb.js";
import { p } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _, l } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { d as d_2, M } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "645c4d55-4a4f-4213-90f1-50015d4bb96d";
            e._sentryDebugIdIdentifier = "sentry-dbid-645c4d55-4a4f-4213-90f1-50015d4bb96d";
        }
    } catch (e) {}
})();
const LangiumParser = d_2().RailroadPeg.parser.LangiumParser;
const i = _((e)=>{
    const alternatives = e.alternatives.map(d);
    if (alternatives.length === 1) {
        return alternatives[0];
    }
    return {
        type: "choice",
        alternatives
    };
}, "transformOrderedChoice");
var d = _((e)=>{
    const elements = e.elements.map(P);
    if (elements.length === 1) {
        return elements[0];
    }
    return {
        type: "sequence",
        elements
    };
}, "transformSequence");
var P = _((e)=>{
    const r = g(e.suffix);
    if (e.operator) {
        return {
            type: "special",
            text: e.operator === "&" ? `&${s(r)}` : `!${s(r)}`
        };
    }
    return r;
}, "transformPrefix");
var s = _((e)=>{
    switch(e.type){
        case "terminal":
            return `"${e.value}"`;
        case "nonterminal":
            return e.name;
        case "special":
            return e.text;
        default:
            return "(...)";
    }
}, "nodeToLabel");
var g = _((e)=>{
    const element = v(e.primary);
    if (!e.operator) {
        return element;
    }
    switch(e.operator){
        case "?":
            return {
                type: "optional",
                element
            };
        case "*":
            return {
                type: "repetition",
                element,
                min: 0,
                max: Infinity
            };
        case "+":
            return {
                type: "repetition",
                element,
                min: 1,
                max: Infinity
            };
        default:
            throw new Error(`Unsupported PEG suffix operator: ${e.operator}`);
    }
}, "transformSuffix");
var v = _((e)=>{
    switch(e.$type){
        case "PegLiteral":
            return {
                type: "terminal",
                value: e.value
            };
        case "PegIdentifier":
            return {
                type: "nonterminal",
                name: e.name
            };
        case "PegGroup":
            return i(e.element);
        case "PegAny":
            return {
                type: "special",
                text: e.dot
            };
        default:
            throw new Error(`Unsupported PEG primary node: ${e.$type}`);
    }
}, "transformPrimary");
const y = _((e)=>({
        name: e.name,
        definition: i(e.definition)
    }), "transformRule");
const h = _((e)=>{
    p(e, d_1);
    if (e.title) {
        d_1.setTitle(e.title);
    }
    e.rules.map((r)=>d_1.addRule(y(r)));
}, "populateDb");
const parser = {
    parse: _((e)=>{
        d_1.clear();
        l.debug("[PEG Parser] Starting Langium parse");
        const r = LangiumParser.parse(e);
        if (r.lexerErrors.length > 0 || r.parserErrors.length > 0) {
            throw new M(r);
        }
        const r_value = r.value;
        l.debug("[PEG Parser] Parsed rules:", r_value.rules.length);
        h(r_value);
        l.debug("[PEG Parser] Parse complete");
    }, "parse"),
    parser: {
        yy: d_1
    }
};
export const diagram = {
    parser,
    db: d_1,
    renderer,
    styles: g_1
};
