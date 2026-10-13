import { c, u as u_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { bd, be, bf, aU, b7 } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index-ZYxf-aBb.js";
import { C as C_1 } from "./chunk-connector-card-view-fPUuNO3n.js";
import { u as u_2 } from "./chunk-native-plugin-state-AwCLFZLB.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
import "./chunk-provider-credentials-yP7QsOsy.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "294899eb-ae69-4df3-aebd-8d8951fc5a2a";
            e._sentryDebugIdIdentifier = "sentry-dbid-294899eb-ae69-4df3-aebd-8d8951fc5a2a";
        }
    } catch (e) {}
})();
export function NativeConnectorCard(h) {
    NativeConnectorCard.d = 1209;
    const e = c.c(32);
    const { entry, startConnecting } = h;
    const u = startConnecting === undefined ? false : startConnecting;
    const { _ } = u_1();
    const C = bd();
    const g = be();
    const y = bf();
    aU(b7().credentials.load);
    const N = u_2();
    let a;
    if (e[0] !== entry || e[1] !== N) {
        a = N(entry);
        e[0] = entry;
        e[1] = N;
        e[2] = a;
    } else {
        a = e[2];
    }
    const isConnected = a === true;
    let d;
    if (e[3] !== C || e[4] !== entry) {
        d = C.resolveCatalogEntryIcon(entry);
        e[3] = C;
        e[4] = entry;
        e[5] = d;
    } else {
        d = e[5];
    }
    const t = d;
    let p;
    if (e[6] !== entry.displayName || e[7] !== entry.id || e[8] !== g || e[9] !== u) {
        p = ()=>{
            g?.({
                kind: "plugin",
                pluginId: entry.id,
                ...u ? {
                    startConnecting: true
                } : {}
            }, entry.displayName);
        };
        e[6] = entry.displayName;
        e[7] = entry.id;
        e[8] = g;
        e[9] = u;
        e[10] = p;
    } else {
        p = e[10];
    }
    const onAction = p;
    let actionLabel;
    if (e[11] !== _) {
        actionLabel = _({
            id: "iSLIjg"
        });
        e[11] = _;
        e[12] = actionLabel;
    } else {
        actionLabel = e[12];
    }
    let connectedLabel;
    if (e[13] !== _) {
        connectedLabel = _({
            id: "QHcLEN"
        });
        e[13] = _;
        e[14] = connectedLabel;
    } else {
        connectedLabel = e[14];
    }
    let l;
    if (e[15] !== t.iconId) {
        l = t.iconId == null ? {} : {
            iconId: t.iconId
        };
        e[15] = t.iconId;
        e[16] = l;
    } else {
        l = e[16];
    }
    let r;
    if (e[17] !== t.iconUrl) {
        r = t.iconUrl == null ? {} : {
            iconUrl: t.iconUrl
        };
        e[17] = t.iconUrl;
        e[18] = r;
    } else {
        r = e[18];
    }
    let onBrowseMore;
    if (e[19] !== y) {
        onBrowseMore = ()=>y?.();
        e[19] = y;
        e[20] = onBrowseMore;
    } else {
        onBrowseMore = e[20];
    }
    let suggestions;
    if (e[21] === Symbol.for("react.memo_cache_sentinel")) {
        suggestions = [];
        e[21] = suggestions;
    } else {
        suggestions = e[21];
    }
    let f;
    if (e[22] !== entry.description || e[23] !== entry.displayName || e[24] !== isConnected || e[25] !== onAction || e[26] !== onBrowseMore || e[27] !== actionLabel || e[28] !== connectedLabel || e[29] !== l || e[30] !== r) {
        f = <C_1 actionLabel={actionLabel} connectedLabel={connectedLabel} description={entry.description} displayName={entry.displayName} handoff={null} {...l} {...r} isActionPending={false} isAdminDisabled={false} isConnected={isConnected} isTeam={false} onAction={onAction} onBrowseMore={onBrowseMore} suggestions={suggestions} toolCount={0}/>;
        e[22] = entry.description;
        e[23] = entry.displayName;
        e[24] = isConnected;
        e[25] = onAction;
        e[26] = onBrowseMore;
        e[27] = actionLabel;
        e[28] = connectedLabel;
        e[29] = l;
        e[30] = r;
        e[31] = f;
    } else {
        f = e[31];
    }
    return f;
}
