import { c } from "./index.eager-vendor-Qbf9YA6n.js";
import "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { a5 as N, a6 as L1 } from "./index-ZYxf-aBb.js";
import { L } from "./chunk-listener-integrations-CRJyd9rc.js";
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
            e._sentryDebugIds[n] = "c2db2f73-f7dd-4961-91ef-52afa8769de4";
            e._sentryDebugIdIdentifier = "sentry-dbid-c2db2f73-f7dd-4961-91ef-52afa8769de4";
        }
    } catch (e) {}
})();
function FComponent(i) {
    FComponent.d = 319;
    const s = c.c(10);
    const { entry, adjacency } = i;
    let e;
    if (s[0] !== entry.message.platform || s[1] !== entry.message.reason) {
        e = <L platform={entry.message.platform} reason={entry.message.reason}/>;
        s[0] = entry.message.platform;
        s[1] = entry.message.reason;
        s[2] = e;
    } else {
        e = s[2];
    }
    let a;
    if (s[3] !== adjacency.isGroupStart || s[4] !== entry.timestampMs || s[5] !== e) {
        a = <N className="sand-tab-card-wrap" isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="tab">{e}</N>;
        s[3] = adjacency.isGroupStart;
        s[4] = entry.timestampMs;
        s[5] = e;
        s[6] = a;
    } else {
        a = s[6];
    }
    let r;
    if (s[7] !== entry || s[8] !== a) {
        r = <L1 entry={entry}>{a}</L1>;
        s[7] = entry;
        s[8] = a;
        s[9] = r;
    } else {
        r = s[9];
    }
    return r;
}
export { FComponent as default };
