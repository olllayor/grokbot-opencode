import { c } from "./index.eager-vendor-Qbf9YA6n.js";
import "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import { aZ as N } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "31632f4e-91dd-4840-8a0d-95e9b5ec9926";
            e._sentryDebugIdIdentifier = "sentry-dbid-31632f4e-91dd-4840-8a0d-95e9b5ec9926";
        }
    } catch (e) {}
})();
function MComponent(i) {
    MComponent.d = 294;
    const t = c.c(2);
    const { description } = i;
    let r;
    if (t[0] !== description) {
        r = <N isTruncating title={description}>{description}</N>;
        t[0] = description;
        t[1] = r;
    } else {
        r = t[1];
    }
    return r;
}
export { MComponent as default };
