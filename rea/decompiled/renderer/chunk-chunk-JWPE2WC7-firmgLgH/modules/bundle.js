import { _ } from "./chunk-mermaid.core-B9Iu5CoE.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "ea6a2031-e5a8-44ce-8f9c-58bca88188ff";
            e._sentryDebugIdIdentifier = "sentry-dbid-ea6a2031-e5a8-44ce-8f9c-58bca88188ff";
        }
    } catch (e) {}
})();
export function p(c, e) {
    c.accDescr && e.setAccDescription?.(c.accDescr);
    c.accTitle && e.setAccTitle?.(c.accTitle);
    c.title && e.setDiagramTitle?.(c.title);
}
_(p, "populateCommonDb");
