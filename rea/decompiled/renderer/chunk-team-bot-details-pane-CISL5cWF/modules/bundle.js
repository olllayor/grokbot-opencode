import { c } from "./index.eager-vendor-Qbf9YA6n.js";
import { b9, ba } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { Z } from "./index-ZYxf-aBb.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "8bd6dc94-a68d-4003-aa3d-c36359733b47";
            e._sentryDebugIdIdentifier = "sentry-dbid-8bd6dc94-a68d-4003-aa3d-c36359733b47";
        }
    } catch (e) {}
})();
export function u(i) {
    const e = c.c(3);
    const t = Z()?.openPane;
    const o = b9("sand_simplified_right_pane");
    const a = b9("grok_bot_multiplayer");
    if (t == null || !o || !ba(i, a)) {
        return null;
    }
    let r;
    if (e[0] !== i.id || e[1] !== t) {
        r = ()=>t({
                agentId: i.id,
                overviewTab: "overview"
            });
        e[0] = i.id;
        e[1] = t;
        e[2] = r;
    } else {
        r = e[2];
    }
    return r;
}
