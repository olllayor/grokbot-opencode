import { _ } from "./chunk-mermaid.core-B9Iu5CoE.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "415f7ecd-ce34-48ef-8d2e-e13413152ae2";
            e._sentryDebugIdIdentifier = "sentry-dbid-415f7ecd-ce34-48ef-8d2e-e13413152ae2";
        }
    } catch (e) {}
})();
export const I = class {
    constructor(i){
        this.init = i;
        this.records = this.init();
    }
    reset() {
        this.records = this.init();
    }
};
_(I, "ImperativeState");
