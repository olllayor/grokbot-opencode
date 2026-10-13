import { s as styles, c as renderer, a as parser, C } from "./chunk-chunk-V7JOEXUC-CALFiiwu.js";
import { _ } from "./chunk-mermaid.core-B9Iu5CoE.js";
import "./chunk-chunk-5VM5RSS4-CTCaRfNa.js";
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
            e._sentryDebugIds[n] = "0c5804d3-e265-4284-a81a-f42bae9e4c1f";
            e._sentryDebugIdIdentifier = "sentry-dbid-0c5804d3-e265-4284-a81a-f42bae9e4c1f";
        }
    } catch (e) {}
})();
export const diagram = {
    parser,
    get db () {
        return new C;
    },
    renderer,
    styles,
    init: _((r)=>{
        if (!r.class) {
            r.class = {};
        }
        r.class.arrowMarkerAbsolute = r.arrowMarkerAbsolute;
    }, "init")
};
