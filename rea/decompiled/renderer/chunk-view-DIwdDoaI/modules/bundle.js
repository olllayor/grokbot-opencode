import { c } from "./index.eager-vendor-Qbf9YA6n.js";
import { aZ } from "./index.eager-platform-Dcfeegfw.js";
import { bl, b9, ba, bc, c8 } from "./index.eager-app-Cj5f8Gby.js";
import "./index-ZYxf-aBb.js";
import { T } from "./chunk-team-bot-context-dialog-9mLHC6gW.js";
import { u } from "./chunk-use-team-bot-access-BG6AYhPN.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-plugins-rows-2d0UrD7L.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
import "./chunk-team-setup-new-skill-dialog-sf9oPof1.js";
import "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
import "./chunk-get-file-icon-ZAkFyGfn.js";
import "./chunk-team-setup-pills-7uDu4vf1.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "092e9de1-61ae-4751-b224-525b9906be7e";
            e._sentryDebugIdIdentifier = "sentry-dbid-092e9de1-61ae-4751-b224-525b9906be7e";
        }
    } catch (e) {}
})();
function EComponent() {
    EComponent.d = 970;
    const t = c.c(8);
    const e = bl();
    const m = b9("grok_bot_multiplayer");
    const l = ba(e, m);
    const { contextAccess } = u(l && e != null ? e.id : null);
    const { close } = aZ();
    if (!l || e == null) {
        return null;
    }
    let agentName;
    if (t[0] !== e) {
        agentName = bc(e);
        t[0] = e;
        t[1] = agentName;
    } else {
        agentName = t[1];
    }
    let onClose;
    if (t[2] !== close) {
        onClose = ()=>close(c8);
        t[2] = close;
        t[3] = onClose;
    } else {
        onClose = t[3];
    }
    let a;
    if (t[4] !== contextAccess || t[5] !== agentName || t[6] !== onClose) {
        a = <T access={contextAccess} agentName={agentName} onClose={onClose} surface="skills"/>;
        t[4] = contextAccess;
        t[5] = agentName;
        t[6] = onClose;
        t[7] = a;
    } else {
        a = t[7];
    }
    return a;
}
export { EComponent as default };
