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
            e._sentryDebugIds[n] = "5380705b-0a83-4488-856e-9a17a29abbee";
            e._sentryDebugIdIdentifier = "sentry-dbid-5380705b-0a83-4488-856e-9a17a29abbee";
        }
    } catch (e) {}
})();
function MComponent(i) {
    MComponent.d = 295;
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
