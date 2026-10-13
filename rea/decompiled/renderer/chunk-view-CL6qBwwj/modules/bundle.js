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
            e._sentryDebugIds[n] = "c16bccd1-8eba-41f2-9856-f70e37baa983";
            e._sentryDebugIdIdentifier = "sentry-dbid-c16bccd1-8eba-41f2-9856-f70e37baa983";
        }
    } catch (e) {}
})();
function MComponent(i) {
    MComponent.d = 296;
    const t = c.c(2);
    const { description } = i;
    let e;
    if (t[0] !== description) {
        e = <N isTruncating title={description}>{description}</N>;
        t[0] = description;
        t[1] = e;
    } else {
        e = t[1];
    }
    return e;
}
export { MComponent as default };
