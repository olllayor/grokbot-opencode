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
            e._sentryDebugIds[n] = "164ef325-9962-40db-bdba-03de67ce95a2";
            e._sentryDebugIdIdentifier = "sentry-dbid-164ef325-9962-40db-bdba-03de67ce95a2";
        }
    } catch (e) {}
})();
function CComponent(i) {
    CComponent.d = 282;
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
export { CComponent as default };
