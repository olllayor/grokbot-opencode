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
            e._sentryDebugIds[n] = "fbb1d2ca-bbd9-4433-b5d6-10746ba0a87c";
            e._sentryDebugIdIdentifier = "sentry-dbid-fbb1d2ca-bbd9-4433-b5d6-10746ba0a87c";
        }
    } catch (e) {}
})();
function MComponent(o) {
    MComponent.d = 297;
    const t = c.c(2);
    const { description } = o;
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
