import { c as c_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { ah, a5 as U, a6 as F } from "./index-ZYxf-aBb.js";
import { S } from "./chunk-listener-integrations-CRJyd9rc.js";
import { g, G } from "./chunk-group-chat-connect-waiting-Cu67aNHe.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-provider-listener-integrations-CR9f28xA.js";
import "./chunk-connector-card-view-fPUuNO3n.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "68b1017c-47f9-4461-816c-f7b5abe0bc74";
            e._sentryDebugIdIdentifier = "sentry-dbid-68b1017c-47f9-4461-816c-f7b5abe0bc74";
        }
    } catch (e) {}
})();
function SComponent(c) {
    SComponent.d = 323;
    const e = c_1.c(18);
    const { entry, adjacency } = c;
    const { viewerAuthId } = ah();
    let a;
    if (e[0] !== entry.targeted || e[1] !== viewerAuthId) {
        a = g(entry.targeted, viewerAuthId);
        e[0] = entry.targeted;
        e[1] = viewerAuthId;
        e[2] = a;
    } else {
        a = e[2];
    }
    const i = a;
    if (i !== undefined) {
        let o;
        if (e[3] !== i) {
            o = <G name={i}/>;
            e[3] = i;
            e[4] = o;
        } else {
            o = e[4];
        }
        return o;
    }
    let s;
    if (e[5] !== entry.message.intent || e[6] !== entry.message.provider || e[7] !== entry.message.reason || e[8] !== entry.message.repo || e[9] !== entry.timestampMs) {
        s = <S provider={entry.message.provider} intent={entry.message.intent} reason={entry.message.reason} repo={entry.message.repo} sentAtMs={entry.timestampMs}/>;
        e[5] = entry.message.intent;
        e[6] = entry.message.provider;
        e[7] = entry.message.reason;
        e[8] = entry.message.repo;
        e[9] = entry.timestampMs;
        e[10] = s;
    } else {
        s = e[10];
    }
    let r;
    if (e[11] !== adjacency.isGroupStart || e[12] !== entry.timestampMs || e[13] !== s) {
        r = <U isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="tab">{s}</U>;
        e[11] = adjacency.isGroupStart;
        e[12] = entry.timestampMs;
        e[13] = s;
        e[14] = r;
    } else {
        r = e[14];
    }
    let m;
    if (e[15] !== entry || e[16] !== r) {
        m = <F entry={entry}>{r}</F>;
        e[15] = entry;
        e[16] = r;
        e[17] = m;
    } else {
        m = e[17];
    }
    return m;
}
export { SComponent as default };
