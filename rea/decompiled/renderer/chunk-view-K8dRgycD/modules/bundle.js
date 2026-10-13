import { c } from "./index.eager-vendor-Qbf9YA6n.js";
import "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import { aZ as S } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "ac613338-30cf-4cc5-bb42-44d4f4a5c297";
            e._sentryDebugIdIdentifier = "sentry-dbid-ac613338-30cf-4cc5-bb42-44d4f4a5c297";
        }
    } catch (e) {}
})();
function MComponent(i) {
    MComponent.d = 281;
    const t = c.c(2);
    const { description } = i;
    let r;
    if (t[0] !== description) {
        r = <S isTruncating title={description}>{description}</S>;
        t[0] = description;
        t[1] = r;
    } else {
        r = t[1];
    }
    return r;
}
export { MComponent as default };
