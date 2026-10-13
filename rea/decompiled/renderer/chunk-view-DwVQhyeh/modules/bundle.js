import { c } from "./index.eager-vendor-Qbf9YA6n.js";
import { aZ } from "./index.eager-platform-Dcfeegfw.js";
import { bl, c7 } from "./index.eager-app-Cj5f8Gby.js";
import { G } from "./chunk-grok-bot-slack-dialog-live-CcLC4Tfx.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./index-ZYxf-aBb.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "c5fcb213-9ada-4990-99e3-d097b1ad6213";
            e._sentryDebugIdIdentifier = "sentry-dbid-c5fcb213-9ada-4990-99e3-d097b1ad6213";
        }
    } catch (e) {}
})();
function PComponent() {
    PComponent.d = 938;
    const t = c.c(5);
    const agent = bl();
    const { close } = aZ();
    if (agent == null) {
        return null;
    }
    let onClose;
    if (t[0] !== close) {
        onClose = ()=>close(c7);
        t[0] = close;
        t[1] = onClose;
    } else {
        onClose = t[1];
    }
    let r;
    if (t[2] !== agent || t[3] !== onClose) {
        r = <G agent={agent} onClose={onClose}/>;
        t[2] = agent;
        t[3] = onClose;
        t[4] = r;
    } else {
        r = t[4];
    }
    return r;
}
export { PComponent as default };
