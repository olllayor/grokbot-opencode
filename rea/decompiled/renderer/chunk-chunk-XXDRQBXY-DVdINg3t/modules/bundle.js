import { _, d } from "./chunk-mermaid.core-B9Iu5CoE.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "c1d02d51-2fc8-4d52-ba5b-b15716057a20";
            e._sentryDebugIdIdentifier = "sentry-dbid-c1d02d51-2fc8-4d52-ba5b-b15716057a20";
        }
    } catch (e) {}
})();
export const g = _((t, e)=>{
    let n;
    if (e === "sandbox") {
        n = d(`#i${t}`);
    }
    return (e === "sandbox" ? d(n.nodes()[0].contentDocument.body) : d("body")).select(`[id="${t}"]`);
}, "getDiagramElement");
