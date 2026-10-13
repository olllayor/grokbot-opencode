import { c as c_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { an, aq, ar as F, a5 as X, a6 as J } from "./index-ZYxf-aBb.js";
import "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "3e5f828f-f78e-4018-8d8e-56edc57ac30f";
            e._sentryDebugIdIdentifier = "sentry-dbid-3e5f828f-f78e-4018-8d8e-56edc57ac30f";
        }
    } catch (e) {}
})();
function MComponent(p) {
    MComponent.d = 327;
    const s = c_1.c(10);
    const { entry, adjacency } = p;
    const agentId = an();
    const c = aq(agentId, entry);
    let r;
    if (s[0] !== agentId || s[1] !== entry) {
        r = <F agentId={agentId} entry={entry} reason={entry.message.reason}/>;
        s[0] = agentId;
        s[1] = entry;
        s[2] = r;
    } else {
        r = s[2];
    }
    const i = r;
    if (c !== null) {
        return i;
    }
    let e;
    if (s[3] !== adjacency.isGroupStart || s[4] !== i || s[5] !== entry.timestampMs) {
        e = <X isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="question">{i}</X>;
        s[3] = adjacency.isGroupStart;
        s[4] = i;
        s[5] = entry.timestampMs;
        s[6] = e;
    } else {
        e = s[6];
    }
    let o;
    if (s[7] !== entry || s[8] !== e) {
        o = <J entry={entry}>{e}</J>;
        s[7] = entry;
        s[8] = e;
        s[9] = o;
    } else {
        o = s[9];
    }
    return o;
}
export { MComponent as default };
