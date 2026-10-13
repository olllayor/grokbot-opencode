import { c } from "./index.eager-vendor-Qbf9YA6n.js";
import { bH, bI, bJ, bK } from "./index.eager-app-Cj5f8Gby.js";
import { a7, a8 as K, a9 as H, a5 as B1, a6 as M, aa as W, ab as B, ac } from "./index-ZYxf-aBb.js";
import { u as u_1, V } from "./chunk-voice-memo-bubble-DS-O9kmx.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-voice-memo-waveform-Bfx_1R7r.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "ddd4d5aa-ccde-4e89-9527-e1981586b67c";
            e._sentryDebugIdIdentifier = "sentry-dbid-ddd4d5aa-ccde-4e89-9527-e1981586b67c";
        }
    } catch (e) {}
})();
function YComponent(f) {
    YComponent.d = 305;
    const t = c.c(14);
    const { entry, adjacency } = f;
    let i;
    if (t[0] !== entry.content) {
        i = ()=>{
            navigator.clipboard.writeText(entry.content);
        };
        t[0] = entry.content;
        t[1] = i;
    } else {
        i = t[1];
    }
    const { content, images } = entry;
    let s;
    if (t[2] !== entry) {
        s = bJ(entry);
        t[2] = entry;
        t[3] = s;
    } else {
        s = t[3];
    }
    let o;
    if (t[4] !== adjacency || t[5] !== entry.content || t[6] !== entry.images || t[7] !== entry.timestampMs || t[8] !== s) {
        o = <H adjacency={adjacency} content={content} images={images} isStandaloneEmoji={s} timestampMs={entry.timestampMs}/>;
        t[4] = adjacency;
        t[5] = entry.content;
        t[6] = entry.images;
        t[7] = entry.timestampMs;
        t[8] = s;
        t[9] = o;
    } else {
        o = t[9];
    }
    let u;
    if (t[10] !== entry || t[11] !== i || t[12] !== o) {
        u = <M entry={entry} onCopy={i}>{o}</M>;
        t[10] = entry;
        t[11] = i;
        t[12] = o;
        t[13] = u;
    } else {
        u = t[13];
    }
    return u;
}
function V1Component(f) {
    V1Component.d = 307;
    const t = c.c(37);
    const { entry, adjacency } = f;
    let i;
    if (t[0] !== entry) {
        i = bK(entry);
        t[0] = entry;
        t[1] = i;
    } else {
        i = t[1];
    }
    const url = i;
    const memo = u_1(entry);
    if (url != null) {
        let l;
        if (t[2] !== url) {
            l = <W url={url} whenUnavailable="url-card"/>;
            t[2] = url;
            t[3] = l;
        } else {
            l = t[3];
        }
        let c;
        if (t[4] !== adjacency.isGroupStart || t[5] !== entry.timestampMs || t[6] !== l) {
            c = <B1 className="sand-link-card-wrap" isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="link">{l}</B1>;
            t[4] = adjacency.isGroupStart;
            t[5] = entry.timestampMs;
            t[6] = l;
            t[7] = c;
        } else {
            c = t[7];
        }
        let p;
        if (t[8] !== entry || t[9] !== c) {
            p = <M entry={entry}>{c}</M>;
            t[8] = entry;
            t[9] = c;
            t[10] = p;
        } else {
            p = t[10];
        }
        return p;
    }
    let s;
    if (t[11] !== entry.content) {
        s = ()=>{
            navigator.clipboard.writeText(entry.content);
        };
        t[11] = entry.content;
        t[12] = s;
    } else {
        s = t[12];
    }
    const o = s;
    if (memo != null) {
        let voice;
        if (t[13] !== entry) {
            voice = {
                tone: "user",
                entryId: entry.id,
                entry
            };
            t[13] = entry;
            t[14] = voice;
        } else {
            voice = t[14];
        }
        let c;
        if (t[15] !== adjacency || t[16] !== voice || t[17] !== memo) {
            c = <V adjacency={adjacency} memo={memo} voice={voice}/>;
            t[15] = adjacency;
            t[16] = voice;
            t[17] = memo;
            t[18] = c;
        } else {
            c = t[18];
        }
        let p;
        if (t[19] !== adjacency.isGroupStart || t[20] !== entry.timestampMs || t[21] !== c) {
            p = <B1 isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="voice-memo">{c}</B1>;
            t[19] = adjacency.isGroupStart;
            t[20] = entry.timestampMs;
            t[21] = c;
            t[22] = p;
        } else {
            p = t[22];
        }
        let g;
        if (t[23] !== entry || t[24] !== o || t[25] !== p) {
            g = <M entry={entry} onCopy={o}>{p}</M>;
            t[23] = entry;
            t[24] = o;
            t[25] = p;
            t[26] = g;
        } else {
            g = t[26];
        }
        return g;
    }
    let u;
    if (t[27] !== entry) {
        u = bJ(entry);
        t[27] = entry;
        t[28] = u;
    } else {
        u = t[28];
    }
    let d;
    if (t[29] !== adjacency || t[30] !== entry || t[31] !== u) {
        d = <B adjacency={adjacency} entry={entry} isStandaloneEmoji={u}/>;
        t[29] = adjacency;
        t[30] = entry;
        t[31] = u;
        t[32] = d;
    } else {
        d = t[32];
    }
    let x;
    if (t[33] !== entry || t[34] !== o || t[35] !== d) {
        x = <M entry={entry} onCopy={o}>{d}</M>;
        t[33] = entry;
        t[34] = o;
        t[35] = d;
        t[36] = x;
    } else {
        x = t[36];
    }
    return x;
}
function AComponent(f) {
    AComponent.d = 304;
    const t = c.c(12);
    const { entry, adjacency } = f;
    let i;
    if (t[0] !== entry.content || t[1] !== entry.isStreaming) {
        i = ()=>ac(entry.content, entry.isStreaming);
        t[0] = entry.content;
        t[1] = entry.isStreaming;
        t[2] = i;
    } else {
        i = t[2];
    }
    let r;
    if (t[3] !== adjacency || t[4] !== entry.content || t[5] !== entry.isStreaming || t[6] !== entry.timestampMs) {
        r = <H adjacency={adjacency} content={entry.content} isSourceTrusted isStreaming={entry.isStreaming} timestampMs={entry.timestampMs}/>;
        t[3] = adjacency;
        t[4] = entry.content;
        t[5] = entry.isStreaming;
        t[6] = entry.timestampMs;
        t[7] = r;
    } else {
        r = t[7];
    }
    let m;
    if (t[8] !== entry || t[9] !== i || t[10] !== r) {
        m = <M entry={entry} onCopy={i}>{r}</M>;
        t[8] = entry;
        t[9] = i;
        t[10] = r;
        t[11] = m;
    } else {
        m = t[11];
    }
    return m;
}
function LComponent(f) {
    LComponent.d = 306;
    const t = c.c(11);
    const { entry, adjacency } = f;
    const i = bH(entry, a7());
    if (bI(entry)) {
        let s;
        if (t[0] !== entry) {
            s = <K entry={entry}/>;
            t[0] = entry;
            t[1] = s;
        } else {
            s = t[1];
        }
        return s;
    }
    if (i == null ? entry.role === "user" && entry.fromUser != null : i.kind !== "own") {
        let s;
        if (t[2] !== adjacency || t[3] !== entry) {
            s = <YComponent adjacency={adjacency} entry={entry}/>;
            t[2] = adjacency;
            t[3] = entry;
            t[4] = s;
        } else {
            s = t[4];
        }
        return s;
    }
    switch(entry.role){
        case "user":
            {
                let s;
                if (t[5] !== adjacency || t[6] !== entry) {
                    s = <V1Component adjacency={adjacency} entry={entry}/>;
                    t[5] = adjacency;
                    t[6] = entry;
                    t[7] = s;
                } else {
                    s = t[7];
                }
                return s;
            }
        case "assistant":
            {
                let s;
                if (t[8] !== adjacency || t[9] !== entry) {
                    s = <AComponent adjacency={adjacency} entry={entry}/>;
                    t[8] = adjacency;
                    t[9] = entry;
                    t[10] = s;
                } else {
                    s = t[10];
                }
                return s;
            }
    }
    return entry.role;
}
export { LComponent as default };
