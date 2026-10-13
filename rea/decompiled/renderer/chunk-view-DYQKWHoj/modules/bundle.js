import { c as c_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { aZ } from "./index.eager-platform-Dcfeegfw.js";
import { bl, b9, ba, bc, c8 } from "./index.eager-app-Cj5f8Gby.js";
import { ay } from "./index-ZYxf-aBb.js";
import { G, T } from "./chunk-team-bot-plugins-dialog-D6-x2Byv.js";
import { u } from "./chunk-use-team-bot-access-BG6AYhPN.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-grok-bot-secret-problem-text-DKm2VrEb.js";
import "./chunk-plugins-rows-2d0UrD7L.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
import "./chunk-SegmentedControl-Bj94OhnT.js";
import "./chunk-team-setup-pills-7uDu4vf1.js";
import "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "b23f1f1d-6ffe-4ea0-8e4a-df24f4cb3db8";
            e._sentryDebugIdIdentifier = "sentry-dbid-b23f1f1d-6ffe-4ea0-8e4a-df24f4cb3db8";
        }
    } catch (e) {}
})();
function EComponent() {
    EComponent.d = 969;
    const e = c_1.c(12);
    const t = bl();
    const d = b9("grok_bot_multiplayer");
    const c = ba(t, d);
    const { pluginsAccess } = u(c && t != null ? t.id : null);
    const installedSecrets = ay(t?.serverId);
    const { close } = aZ();
    if (!c || t == null) {
        return null;
    }
    let r;
    if (e[0] !== t) {
        r = t.serverId != null && t.serverId.length > 0 ? <G key={t.serverId} agentName={bc(t)} serverId={t.serverId}/> : null;
        e[0] = t;
        e[1] = r;
    } else {
        r = e[1];
    }
    const secretsSection = r;
    let agentName;
    if (e[2] !== t) {
        agentName = bc(t);
        e[2] = t;
        e[3] = agentName;
    } else {
        agentName = e[3];
    }
    let onClose;
    if (e[4] !== close) {
        onClose = ()=>close(c8);
        e[4] = close;
        e[5] = onClose;
    } else {
        onClose = e[5];
    }
    let a;
    if (e[6] !== installedSecrets || e[7] !== pluginsAccess || e[8] !== secretsSection || e[9] !== agentName || e[10] !== onClose) {
        a = <T access={pluginsAccess} agentName={agentName} installedSecrets={installedSecrets} onClose={onClose} secretsSection={secretsSection}/>;
        e[6] = installedSecrets;
        e[7] = pluginsAccess;
        e[8] = secretsSection;
        e[9] = agentName;
        e[10] = onClose;
        e[11] = a;
    } else {
        a = e[11];
    }
    return a;
}
export { EComponent as default };
