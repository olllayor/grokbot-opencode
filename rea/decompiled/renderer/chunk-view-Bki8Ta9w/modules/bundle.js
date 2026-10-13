import { c } from "./index.eager-vendor-Qbf9YA6n.js";
import "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import { aZ as M } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "b86194bd-33ba-4f31-9d11-66c104c0182d";
            e._sentryDebugIdIdentifier = "sentry-dbid-b86194bd-33ba-4f31-9d11-66c104c0182d";
        }
    } catch (e) {}
})();
function NComponent(o) {
    NComponent.d = 293;
    const t = c.c(2);
    const { description } = o;
    let r;
    if (t[0] !== description) {
        r = <M isTruncating title={description}>{description}</M>;
        t[0] = description;
        t[1] = r;
    } else {
        r = t[1];
    }
    return r;
}
export { NComponent as default };
