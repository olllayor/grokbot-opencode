import { s as styles, b as renderer, a as parser, S } from "./chunk-chunk-EX3LRPZG-CXrsEYy0.js";
import { _ } from "./chunk-mermaid.core-B9Iu5CoE.js";
import "./chunk-chunk-XXDRQBXY-DVdINg3t.js";
import "./chunk-chunk-VR4S4FIN-HF2Hbh9A.js";
import "./chunk-chunk-32BRIVSS-CL4hvhVG.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "4a1595e0-2e28-4524-a73a-6b177fda1cd1";
            e._sentryDebugIdIdentifier = "sentry-dbid-4a1595e0-2e28-4524-a73a-6b177fda1cd1";
        }
    } catch (e) {}
})();
export const diagram = {
    parser,
    get db () {
        return new S(2);
    },
    renderer,
    styles,
    init: _((t)=>{
        if (!t.state) {
            t.state = {};
        }
        t.state.arrowMarkerAbsolute = t.arrowMarkerAbsolute;
    }, "init")
};
