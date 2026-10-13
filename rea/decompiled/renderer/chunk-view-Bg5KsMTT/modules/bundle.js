import { c as c_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { ad, a5 as D, ae as X, af as J, aa as S, a6 as F } from "./index-ZYxf-aBb.js";
import { bL } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./index.eager-platform-Dcfeegfw.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "f1a6f61b-2d28-4611-81a2-b9492d68c597";
            e._sentryDebugIdIdentifier = "sentry-dbid-f1a6f61b-2d28-4611-81a2-b9492d68c597";
        }
    } catch (e) {}
})();
function KComponent(g) {
    KComponent.d = 309;
    const e = c_1.c(23);
    const { entry, adjacency } = g;
    const c = ad(entry.message.url);
    if (c === "legacy-link") {
        let a;
        if (e[0] !== entry.message.url) {
            a = bL(entry.message.url) ?? entry.message.url;
            e[0] = entry.message.url;
            e[1] = a;
        } else {
            a = e[1];
        }
        const url = a;
        let m;
        if (e[2] !== url) {
            m = <S url={url} whenUnavailable="url-card"/>;
            e[2] = url;
            e[3] = m;
        } else {
            m = e[3];
        }
        let n;
        if (e[4] !== adjacency.isGroupStart || e[5] !== entry.timestampMs || e[6] !== m) {
            n = <D className="sand-link-card-wrap" isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="link">{m}</D>;
            e[4] = adjacency.isGroupStart;
            e[5] = entry.timestampMs;
            e[6] = m;
            e[7] = n;
        } else {
            n = e[7];
        }
        let u;
        if (e[8] !== entry || e[9] !== n) {
            u = <F entry={entry}>{n}</F>;
            e[8] = entry;
            e[9] = n;
            e[10] = u;
        } else {
            u = e[10];
        }
        return u;
    }
    if (c === "media") {
        let a;
        if (e[11] !== adjacency || e[12] !== entry) {
            a = <X adjacency={adjacency} align="start" alt={entry.message.alt} entry={entry} timestampMs={entry.timestampMs} url={entry.message.url}/>;
            e[11] = adjacency;
            e[12] = entry;
            e[13] = a;
        } else {
            a = e[13];
        }
        return a;
    }
    let i;
    if (e[14] !== entry.message.url) {
        i = <J href={entry.message.url}/>;
        e[14] = entry.message.url;
        e[15] = i;
    } else {
        i = e[15];
    }
    let l;
    if (e[16] !== adjacency.isGroupStart || e[17] !== entry.timestampMs || e[18] !== i) {
        l = <D className="sand-file-card-wrap" isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="file">{i}</D>;
        e[16] = adjacency.isGroupStart;
        e[17] = entry.timestampMs;
        e[18] = i;
        e[19] = l;
    } else {
        l = e[19];
    }
    let p;
    if (e[20] !== entry || e[21] !== l) {
        p = <F entry={entry}>{l}</F>;
        e[20] = entry;
        e[21] = l;
        e[22] = p;
    } else {
        p = e[22];
    }
    return p;
}
export { KComponent as default };
