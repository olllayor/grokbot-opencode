import { c } from "./index.eager-vendor-Qbf9YA6n.js";
import "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { ah, a5 as L, a6 as F } from "./index-ZYxf-aBb.js";
import { C } from "./chunk-connector-card-DAiBo2ga.js";
import { g, G } from "./chunk-group-chat-connect-waiting-Cu67aNHe.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-finance-CSw6gjXN.js";
import "./chunk-connector-card-view-fPUuNO3n.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "8a6b2ec7-7ef3-4c73-b968-12cb69437b23";
            e._sentryDebugIdIdentifier = "sentry-dbid-8a6b2ec7-7ef3-4c73-b968-12cb69437b23";
        }
    } catch (e) {}
})();
function HComponent(p) {
    HComponent.d = 313;
    const e = c.c(18);
    const { entry, adjacency } = p;
    const { viewerAuthId } = ah();
    let r;
    if (e[0] !== entry.targeted || e[1] !== viewerAuthId) {
        r = g(entry.targeted, viewerAuthId);
        e[0] = entry.targeted;
        e[1] = viewerAuthId;
        e[2] = r;
    } else {
        r = e[2];
    }
    const n = r;
    if (n !== undefined) {
        let i;
        if (e[3] !== n) {
            i = <G name={n}/>;
            e[3] = n;
            e[4] = i;
        } else {
            i = e[4];
        }
        return i;
    }
    let t;
    if (e[5] !== entry.message.connector || e[6] !== entry.message.reason || e[7] !== entry.message.serverId || e[8] !== entry.message.suggestions || e[9] !== entry.message.variant) {
        t = <C connector={entry.message.connector} reason={entry.message.reason} serverId={entry.message.serverId} suggestions={entry.message.suggestions} variant={entry.message.variant}/>;
        e[5] = entry.message.connector;
        e[6] = entry.message.reason;
        e[7] = entry.message.serverId;
        e[8] = entry.message.suggestions;
        e[9] = entry.message.variant;
        e[10] = t;
    } else {
        t = e[10];
    }
    let a;
    if (e[11] !== adjacency.isGroupStart || e[12] !== entry.timestampMs || e[13] !== t) {
        a = <L className="sand-connector-card-wrap" isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="question">{t}</L>;
        e[11] = adjacency.isGroupStart;
        e[12] = entry.timestampMs;
        e[13] = t;
        e[14] = a;
    } else {
        a = e[14];
    }
    let o;
    if (e[15] !== entry || e[16] !== a) {
        o = <F entry={entry}>{a}</F>;
        e[15] = entry;
        e[16] = a;
        e[17] = o;
    } else {
        o = e[17];
    }
    return o;
}
export { HComponent as default };
