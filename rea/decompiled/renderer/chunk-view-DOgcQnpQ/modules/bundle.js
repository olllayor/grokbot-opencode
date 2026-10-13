import { c } from "./index.eager-vendor-Qbf9YA6n.js";
import { an, ap as L, a5 as D, a6 as U } from "./index-ZYxf-aBb.js";
import "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "a5c22d4f-8f40-41ae-aa53-b9dd3c621f87";
            e._sentryDebugIdIdentifier = "sentry-dbid-a5c22d4f-8f40-41ae-aa53-b9dd3c621f87";
        }
    } catch (e) {}
})();
function FComponent(p) {
    FComponent.d = 325;
    const t = c.c(10);
    const { entry, adjacency } = p;
    const agentId = an();
    let a;
    if (t[0] !== agentId || t[1] !== entry) {
        a = <L agentId={agentId} entry={entry} reason={entry.message.reason}/>;
        t[0] = agentId;
        t[1] = entry;
        t[2] = a;
    } else {
        a = t[2];
    }
    let e;
    if (t[3] !== adjacency.isGroupStart || t[4] !== entry.timestampMs || t[5] !== a) {
        e = <D isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="tab">{a}</D>;
        t[3] = adjacency.isGroupStart;
        t[4] = entry.timestampMs;
        t[5] = a;
        t[6] = e;
    } else {
        e = t[6];
    }
    let r;
    if (t[7] !== entry || t[8] !== e) {
        r = <U entry={entry}>{e}</U>;
        t[7] = entry;
        t[8] = e;
        t[9] = r;
    } else {
        r = t[9];
    }
    return r;
}
export { FComponent as default };
