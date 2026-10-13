import { c as c_1, u } from "./index.eager-vendor-Qbf9YA6n.js";
import { b9, bS } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { am as G, a5 as J, a6 as M } from "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "4f69e907-74f8-4f01-bc66-948804498d44";
            e._sentryDebugIdIdentifier = "sentry-dbid-4f69e907-74f8-4f01-bc66-948804498d44";
        }
    } catch (e) {}
})();
function SComponent(c) {
    SComponent.d = 321;
    const t = c_1.c(12);
    const { entry, adjacency } = c;
    const { _ } = u();
    const onePasswordBrokered = b9("sand_new_1pass");
    const adjacency_isGroupStart = adjacency.isGroupStart;
    const entry_timestampMs = entry.timestampMs;
    let entry_1;
    if (t[0] !== _ || t[1] !== onePasswordBrokered) {
        entry_1 = bS(_, "onepassword", {
            onePasswordBrokered
        });
        t[0] = _;
        t[1] = onePasswordBrokered;
        t[2] = entry_1;
    } else {
        entry_1 = t[2];
    }
    let a;
    if (t[3] !== entry_1) {
        a = <G entry={entry_1} startConnecting/>;
        t[3] = entry_1;
        t[4] = a;
    } else {
        a = t[4];
    }
    let r;
    if (t[5] !== adjacency.isGroupStart || t[6] !== entry.timestampMs || t[7] !== a) {
        r = <J isGroupStart={adjacency_isGroupStart} timestampMs={entry_timestampMs} variant="question">{a}</J>;
        t[5] = adjacency.isGroupStart;
        t[6] = entry.timestampMs;
        t[7] = a;
        t[8] = r;
    } else {
        r = t[8];
    }
    let n;
    if (t[9] !== entry || t[10] !== r) {
        n = <M entry={entry}>{r}</M>;
        t[9] = entry;
        t[10] = r;
        t[11] = n;
    } else {
        n = t[11];
    }
    return n;
}
export { SComponent as default };
