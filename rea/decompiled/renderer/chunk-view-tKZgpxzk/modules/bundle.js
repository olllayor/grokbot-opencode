import { c, r as r_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { bn } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "1d83bc30-7c64-417a-941e-54a859c6dd1a";
            e._sentryDebugIdIdentifier = "sentry-dbid-1d83bc30-7c64-417a-941e-54a859c6dd1a";
        }
    } catch (e) {}
})();
function CComponent(a) {
    CComponent.d = 275;
    const t = c.c(6);
    const { params } = a;
    const { renderImport } = bn();
    const params_shareId = params.shareId;
    let r;
    if (t[0] !== params.shareId || t[1] !== renderImport) {
        r = renderImport(params.shareId);
        t[0] = params.shareId;
        t[1] = renderImport;
        t[2] = r;
    } else {
        r = t[2];
    }
    let s;
    if (t[3] !== params.shareId || t[4] !== r) {
        s = <r_1.Fragment key={params_shareId}>{r}</r_1.Fragment>;
        t[3] = params.shareId;
        t[4] = r;
        t[5] = s;
    } else {
        s = t[5];
    }
    return s;
}
export { CComponent as default };
