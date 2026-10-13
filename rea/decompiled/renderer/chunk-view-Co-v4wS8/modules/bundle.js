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
            e._sentryDebugIds[n] = "5298a2c8-a6f7-44a8-8537-b8f520d02302";
            e._sentryDebugIdIdentifier = "sentry-dbid-5298a2c8-a6f7-44a8-8537-b8f520d02302";
        }
    } catch (e) {}
})();
function EComponent() {
    EComponent.d = 968;
    const e = c.c(8);
    const t = bl();
    const m = b9("grok_bot_multiplayer");
    const l = ba(t, m);
    const { contextAccess } = u(l && t != null ? t.id : null);
    const { close } = aZ();
    if (!l || t == null) {
        return null;
    }
    let agentName;
    if (e[0] !== t) {
        agentName = bc(t);
        e[0] = t;
        e[1] = agentName;
    } else {
        agentName = e[1];
    }
    let onClose;
    if (e[2] !== close) {
        onClose = ()=>close(c8);
        e[2] = close;
        e[3] = onClose;
    } else {
        onClose = e[3];
    }
    let a;
    if (e[4] !== contextAccess || e[5] !== agentName || e[6] !== onClose) {
        a = <T access={contextAccess} agentName={agentName} onClose={onClose} surface="files"/>;
        e[4] = contextAccess;
        e[5] = agentName;
        e[6] = onClose;
        e[7] = a;
    } else {
        a = e[7];
    }
    return a;
}
export { EComponent as default };
