import { c } from "./index.eager-vendor-Qbf9YA6n.js";
import { a5 as N, ai as L, a6 as C } from "./index-ZYxf-aBb.js";
import "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "d96c5a34-bba0-4fe3-bb9e-046761328f51";
            e._sentryDebugIdIdentifier = "sentry-dbid-d96c5a34-bba0-4fe3-bb9e-046761328f51";
        }
    } catch (e) {}
})();
function DComponent(p) {
    DComponent.d = 315;
    const t = c.c(9);
    const { entry, adjacency } = p;
    let i;
    if (t[0] !== entry) {
        i = <L entry={entry}/>;
        t[0] = entry;
        t[1] = i;
    } else {
        i = t[1];
    }
    let s;
    if (t[2] !== adjacency.isGroupStart || t[3] !== entry.timestampMs || t[4] !== i) {
        s = <N isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="widget">{i}</N>;
        t[2] = adjacency.isGroupStart;
        t[3] = entry.timestampMs;
        t[4] = i;
        t[5] = s;
    } else {
        s = t[5];
    }
    let a;
    if (t[6] !== entry || t[7] !== s) {
        a = <C entry={entry}>{s}</C>;
        t[6] = entry;
        t[7] = s;
        t[8] = a;
    } else {
        a = t[8];
    }
    return a;
}
export { DComponent as default };
