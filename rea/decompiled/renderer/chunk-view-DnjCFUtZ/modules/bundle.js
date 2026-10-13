import { c } from "./index.eager-vendor-Qbf9YA6n.js";
import { bM } from "./index.eager-app-Cj5f8Gby.js";
import { aj as D, a5 as U, a6 as G } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "fd32862c-098d-4003-aab0-55f5ade27c0a";
            e._sentryDebugIdIdentifier = "sentry-dbid-fd32862c-098d-4003-aab0-55f5ade27c0a";
        }
    } catch (e) {}
})();
function CComponent(n) {
    CComponent.d = 317;
    const s = c.c(12);
    const { entry, adjacency } = n;
    const isCompact = bM();
    let a;
    if (s[0] !== entry.message.bcId || s[1] !== entry.message.title || s[2] !== isCompact) {
        a = <D bcId={entry.message.bcId} isCompact={isCompact} launchTitle={entry.message.title}/>;
        s[0] = entry.message.bcId;
        s[1] = entry.message.title;
        s[2] = isCompact;
        s[3] = a;
    } else {
        a = s[3];
    }
    let r;
    if (s[4] !== adjacency.isGroupStart || s[5] !== entry.timestampMs || s[6] !== a) {
        r = <U className="sand-cursor-agent-card-wrap" isGroupStart={adjacency.isGroupStart} role="group" timestampMs={entry.timestampMs} variant="question">{a}</U>;
        s[4] = adjacency.isGroupStart;
        s[5] = entry.timestampMs;
        s[6] = a;
        s[7] = r;
    } else {
        r = s[7];
    }
    const o = r;
    let i;
    if (s[8] !== o || s[9] !== entry || s[10] !== isCompact) {
        i = isCompact ? o : <G entry={entry}>{o}</G>;
        s[8] = o;
        s[9] = entry;
        s[10] = isCompact;
        s[11] = i;
    } else {
        i = s[11];
    }
    return i;
}
export { CComponent as default };
