import { c, r as r_1 } from "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "09f4e8de-e14d-48e2-9028-d1aebc190d57";
            e._sentryDebugIdIdentifier = "sentry-dbid-09f4e8de-e14d-48e2-9028-d1aebc190d57";
        }
    } catch (e) {}
})();
export function u() {
    const e = c.c(2);
    const oRef = r_1.useRef(false);
    let t;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        t = ()=>{
            oRef.current = true;
        };
        e[0] = t;
    } else {
        t = e[0];
    }
    const markKeyboardNavigation = t;
    let r;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            activeOptionRef: (c)=>{
                if (!(c == null || !oRef.current)) {
                    oRef.current = false;
                    c.scrollIntoView({
                        block: "nearest"
                    });
                }
            },
            markKeyboardNavigation
        };
        e[1] = r;
    } else {
        r = e[1];
    }
    return r;
}
