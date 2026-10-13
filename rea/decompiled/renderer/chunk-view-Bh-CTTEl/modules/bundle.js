import { c as c_1, u as u_1, p as p_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { bV, bW, bX, aA, aB, bY, bZ, b_, bK } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { an, a5 as _, a9 as A, aa as Te, a6 as G, ac, as, at, au as Se, av as Ae, aw as Ne } from "./index-ZYxf-aBb.js";
import { s, h as h_1, T, a as Ce } from "./chunk-team-bot-share-card-CeroIs_e.js";
import { a as a_1, V } from "./chunk-voice-memo-bubble-DS-O9kmx.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-bot-template-share-card-frame-gOKZUO-a.js";
import "./chunk-team-bot-details-pane-CISL5cWF.js";
import "./chunk-voice-memo-waveform-Bfx_1R7r.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "3968c893-4bd5-465c-9146-d3343468b55e";
            e._sentryDebugIdIdentifier = "sentry-dbid-3968c893-4bd5-465c-9146-d3343468b55e";
        }
    } catch (e) {}
})();
const $ = {
    messageStack: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kGNEyG: "sand-1cy8zhl",
        kOIVth: "sand-ehausa",
        kzqmXN: "sand-h8yej3",
        ks0D6T: "sand-1q8iv8g",
        k7Eaqz: "sand-euugli",
        $$css: true
    },
    canvasStack: {
        kzqmXN: "sand-gtz7ue",
        $$css: true
    }
};
function VComponent(v) {
    VComponent.d = 354;
    const e = c_1.c(32);
    const { entry, content, adjacency, canvas, isSuperseded } = v;
    const o = as();
    const i = an();
    const { _ } = u_1();
    const l = entry.streaming === true;
    const { link, isStandalone } = canvas;
    const revision = i == null ? entry.id : `${i}:${entry.id}`;
    let n;
    if (e[0] !== _ || e[1] !== link.label) {
        n = link.label ?? _({
            id: "Zty/IJ"
        });
        e[0] = _;
        e[1] = link.label;
        e[2] = n;
    } else {
        n = e[2];
    }
    const k = n;
    let p;
    if (e[3] !== content || e[4] !== l) {
        p = ()=>ac(content, l);
        e[3] = content;
        e[4] = l;
        e[5] = p;
    } else {
        p = e[5];
    }
    let g;
    if (e[6] !== adjacency || e[7] !== isStandalone) {
        g = p_1($.messageStack, $.canvasStack, isStandalone && adjacency.isGroupStart && at.groupStart);
        e[6] = adjacency;
        e[7] = isStandalone;
        e[8] = g;
    } else {
        g = e[8];
    }
    let S;
    if (e[9] !== adjacency || e[10] !== content || e[11] !== entry.attachments || e[12] !== entry.channelPermalink || e[13] !== entry.message || e[14] !== entry.timestampMs || e[15] !== isStandalone || e[16] !== l) {
        S = isStandalone ? null : <A adjacency={adjacency} channel={entry.message.channel} channelHref={entry.channelPermalink} content={content} images={entry.message.images} attachments={entry.attachments} isSourceTrusted isStreaming={l} timestampMs={entry.timestampMs} widthCap="container"/>;
        e[9] = adjacency;
        e[10] = content;
        e[11] = entry.attachments;
        e[12] = entry.channelPermalink;
        e[13] = entry.message;
        e[14] = entry.timestampMs;
        e[15] = isStandalone;
        e[16] = l;
        e[17] = S;
    } else {
        S = e[17];
    }
    let M;
    if (e[18] !== o || e[19] !== isSuperseded || e[20] !== link.locator || e[21] !== revision || e[22] !== k) {
        M = isSuperseded ? <Se title={k}/> : <Ae groupChatId={o} locator={link.locator} revision={revision} title={k}/>;
        e[18] = o;
        e[19] = isSuperseded;
        e[20] = link.locator;
        e[21] = revision;
        e[22] = k;
        e[23] = M;
    } else {
        M = e[23];
    }
    let j;
    if (e[24] !== g || e[25] !== S || e[26] !== M) {
        j = <div {...g}>{S}{M}</div>;
        e[24] = g;
        e[25] = S;
        e[26] = M;
        e[27] = j;
    } else {
        j = e[27];
    }
    let T;
    if (e[28] !== entry || e[29] !== p || e[30] !== j) {
        T = <G entry={entry} onCopy={p}>{j}</G>;
        e[28] = entry;
        e[29] = p;
        e[30] = j;
        e[31] = T;
    } else {
        T = e[31];
    }
    return T;
}
function OComponent(v) {
    OComponent.d = 355;
    const e = c_1.c(30);
    const { entry, content, adjacency, document } = v;
    const { _ } = u_1();
    const o = as();
    const i = entry.streaming === true;
    const { link, isStandalone } = document;
    let u;
    if (e[0] !== _ || e[1] !== link.label) {
        u = link.label ?? _({
            id: "7Zdnlq"
        });
        e[0] = _;
        e[1] = link.label;
        e[2] = u;
    } else {
        u = e[2];
    }
    const c = u;
    let a;
    if (e[3] !== content || e[4] !== i) {
        a = ()=>ac(content, i);
        e[3] = content;
        e[4] = i;
        e[5] = a;
    } else {
        a = e[5];
    }
    let n;
    if (e[6] !== adjacency || e[7] !== isStandalone) {
        n = p_1($.messageStack, $.canvasStack, isStandalone && adjacency.isGroupStart && at.groupStart);
        e[6] = adjacency;
        e[7] = isStandalone;
        e[8] = n;
    } else {
        n = e[8];
    }
    let k;
    if (e[9] !== adjacency || e[10] !== content || e[11] !== entry.attachments || e[12] !== entry.channelPermalink || e[13] !== entry.message || e[14] !== entry.timestampMs || e[15] !== isStandalone || e[16] !== i) {
        k = isStandalone ? null : <A adjacency={adjacency} channel={entry.message.channel} channelHref={entry.channelPermalink} content={content} images={entry.message.images} attachments={entry.attachments} isSourceTrusted isStreaming={i} timestampMs={entry.timestampMs} widthCap="container"/>;
        e[9] = adjacency;
        e[10] = content;
        e[11] = entry.attachments;
        e[12] = entry.channelPermalink;
        e[13] = entry.message;
        e[14] = entry.timestampMs;
        e[15] = isStandalone;
        e[16] = i;
        e[17] = k;
    } else {
        k = e[17];
    }
    let p;
    if (e[18] !== o || e[19] !== link.locator || e[20] !== c) {
        p = <Ne groupChatId={o} locator={link.locator} title={c}/>;
        e[18] = o;
        e[19] = link.locator;
        e[20] = c;
        e[21] = p;
    } else {
        p = e[21];
    }
    let g;
    if (e[22] !== n || e[23] !== k || e[24] !== p) {
        g = <div {...n}>{k}{p}</div>;
        e[22] = n;
        e[23] = k;
        e[24] = p;
        e[25] = g;
    } else {
        g = e[25];
    }
    let S;
    if (e[26] !== entry || e[27] !== a || e[28] !== g) {
        S = <G entry={entry} onCopy={a}>{g}</G>;
        e[26] = entry;
        e[27] = a;
        e[28] = g;
        e[29] = S;
    } else {
        S = e[29];
    }
    return S;
}
function UComponent(v) {
    UComponent.d = 357;
    const e = c_1.c(24);
    const { entry, content, adjacency, agent, href } = v;
    const o = entry.streaming === true;
    let i;
    if (e[0] !== content || e[1] !== o) {
        i = ()=>ac(content, o);
        e[0] = content;
        e[1] = o;
        e[2] = i;
    } else {
        i = e[2];
    }
    let h;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        h = {
            className: "sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-ehausa sand-h8yej3 sand-1q8iv8g sand-euugli"
        };
        e[3] = h;
    } else {
        h = e[3];
    }
    let l;
    if (e[4] !== adjacency || e[5] !== content || e[6] !== entry.attachments || e[7] !== entry.channelPermalink || e[8] !== entry.message.channel || e[9] !== entry.message.images || e[10] !== entry.timestampMs || e[11] !== o) {
        l = <T><A adjacency={adjacency} channel={entry.message.channel} channelHref={entry.channelPermalink} content={content} images={entry.message.images} attachments={entry.attachments} isSourceTrusted isStreaming={o} timestampMs={entry.timestampMs}/></T>;
        e[4] = adjacency;
        e[5] = content;
        e[6] = entry.attachments;
        e[7] = entry.channelPermalink;
        e[8] = entry.message.channel;
        e[9] = entry.message.images;
        e[10] = entry.timestampMs;
        e[11] = o;
        e[12] = l;
    } else {
        l = e[12];
    }
    let u;
    if (e[13] !== agent || e[14] !== entry.id || e[15] !== href) {
        u = <Ce agent={agent} closingEntryId={entry.id} href={href}/>;
        e[13] = agent;
        e[14] = entry.id;
        e[15] = href;
        e[16] = u;
    } else {
        u = e[16];
    }
    let c;
    if (e[17] !== l || e[18] !== u) {
        c = <div {...h}>{l}{u}</div>;
        e[17] = l;
        e[18] = u;
        e[19] = c;
    } else {
        c = e[19];
    }
    let a;
    if (e[20] !== entry || e[21] !== i || e[22] !== c) {
        a = <G entry={entry} onCopy={i}>{c}</G>;
        e[20] = entry;
        e[21] = i;
        e[22] = c;
        e[23] = a;
    } else {
        a = e[23];
    }
    return a;
}
function UeComponent(v) {
    UeComponent.d = 356;
    const e = c_1.c(72);
    const { entry, adjacency, isStale } = v;
    const y = bV();
    const x = bW();
    const images = entry.message.images;
    const i = entry.streaming === true;
    const h = an();
    const href = h == null ? null : bX(h);
    const { i18n } = u_1();
    const c = aA(i18n, aB(entry.message), entry.slackMentionNames);
    const a = href == null || i ? c : s({
        content: c,
        href
    });
    const n = a_1(entry, a);
    const agent = bY(href != null && h_1(a, href) ? h : null);
    let p;
    if (e[0] !== entry || e[1] !== y) {
        p = y ? bZ(entry) : null;
        e[0] = entry;
        e[1] = y;
        e[2] = p;
    } else {
        p = e[2];
    }
    const canvas = p;
    if (canvas != null) {
        const isSuperseded = isStale === true;
        let f;
        if (e[3] !== adjacency || e[4] !== canvas || e[5] !== entry || e[6] !== isSuperseded || e[7] !== c) {
            f = <VComponent adjacency={adjacency} canvas={canvas} content={c} entry={entry} isSuperseded={isSuperseded}/>;
            e[3] = adjacency;
            e[4] = canvas;
            e[5] = entry;
            e[6] = isSuperseded;
            e[7] = c;
            e[8] = f;
        } else {
            f = e[8];
        }
        return f;
    }
    let S;
    if (e[9] !== entry || e[10] !== x) {
        S = x ? b_(entry) : null;
        e[9] = entry;
        e[10] = x;
        e[11] = S;
    } else {
        S = e[11];
    }
    const document = S;
    if (document != null) {
        let r;
        if (e[12] !== adjacency || e[13] !== document || e[14] !== entry || e[15] !== c) {
            r = <OComponent adjacency={adjacency} content={c} document={document} entry={entry}/>;
            e[12] = adjacency;
            e[13] = document;
            e[14] = entry;
            e[15] = c;
            e[16] = r;
        } else {
            r = e[16];
        }
        return r;
    }
    if (agent != null && href != null && !i) {
        let r;
        if (e[17] !== adjacency || e[18] !== a || e[19] !== entry || e[20] !== agent || e[21] !== href) {
            r = <UComponent adjacency={adjacency} agent={agent} content={a} entry={entry} href={href}/>;
            e[17] = adjacency;
            e[18] = a;
            e[19] = entry;
            e[20] = agent;
            e[21] = href;
            e[22] = r;
        } else {
            r = e[22];
        }
        return r;
    }
    let j;
    if (e[23] !== entry) {
        j = bK(entry);
        e[23] = entry;
        e[24] = j;
    } else {
        j = e[24];
    }
    const url = j;
    if (url != null) {
        let r;
        if (e[25] !== url) {
            r = <Te url={url} whenUnavailable="url-card"/>;
            e[25] = url;
            e[26] = r;
        } else {
            r = e[26];
        }
        let f;
        if (e[27] !== adjacency.isGroupStart || e[28] !== entry.timestampMs || e[29] !== r) {
            f = <_ className="sand-link-card-wrap" isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="link">{r}</_>;
            e[27] = adjacency.isGroupStart;
            e[28] = entry.timestampMs;
            e[29] = r;
            e[30] = f;
        } else {
            f = e[30];
        }
        let b;
        if (e[31] !== entry || e[32] !== f) {
            b = <G entry={entry}>{f}</G>;
            e[31] = entry;
            e[32] = f;
            e[33] = b;
        } else {
            b = e[33];
        }
        return b;
    }
    const X = (images == null || images.length === 0) && entry.message.channel == null;
    if (n != null && X) {
        let r;
        if (e[34] !== a || e[35] !== i) {
            r = ()=>ac(a, i);
            e[34] = a;
            e[35] = i;
            e[36] = r;
        } else {
            r = e[36];
        }
        let voice;
        if (e[37] !== a || e[38] !== n.entryId || e[39] !== n.isTruncated || e[40] !== n.onSeek || e[41] !== n.onToggle || e[42] !== n.playback) {
            voice = {
                tone: "agent",
                entryId: n.entryId,
                content: a,
                isTruncated: n.isTruncated,
                playback: n.playback,
                onToggle: n.onToggle,
                onSeek: n.onSeek
            };
            e[37] = a;
            e[38] = n.entryId;
            e[39] = n.isTruncated;
            e[40] = n.onSeek;
            e[41] = n.onToggle;
            e[42] = n.playback;
            e[43] = voice;
        } else {
            voice = e[43];
        }
        let b;
        if (e[44] !== adjacency || e[45] !== voice || e[46] !== n.memo) {
            b = <V adjacency={adjacency} memo={n.memo} voice={voice}/>;
            e[44] = adjacency;
            e[45] = voice;
            e[46] = n.memo;
            e[47] = b;
        } else {
            b = e[47];
        }
        let P;
        if (e[48] !== adjacency.isGroupStart || e[49] !== entry.timestampMs || e[50] !== b) {
            P = <_ isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="voice-memo">{b}</_>;
            e[48] = adjacency.isGroupStart;
            e[49] = entry.timestampMs;
            e[50] = b;
            e[51] = P;
        } else {
            P = e[51];
        }
        let E;
        if (e[52] !== entry || e[53] !== r || e[54] !== P) {
            E = <G entry={entry} onCopy={r}>{P}</G>;
            e[52] = entry;
            e[53] = r;
            e[54] = P;
            e[55] = E;
        } else {
            E = e[55];
        }
        return E;
    }
    let C;
    if (e[56] !== a || e[57] !== i) {
        C = ()=>ac(a, i);
        e[56] = a;
        e[57] = i;
        e[58] = C;
    } else {
        C = e[58];
    }
    let I;
    if (e[59] !== adjacency || e[60] !== a || e[61] !== entry.attachments || e[62] !== entry.channelPermalink || e[63] !== entry.message.channel || e[64] !== entry.timestampMs || e[65] !== images || e[66] !== i) {
        I = <A adjacency={adjacency} channel={entry.message.channel} channelHref={entry.channelPermalink} content={a} images={images} attachments={entry.attachments} isSourceTrusted isStreaming={i} timestampMs={entry.timestampMs}/>;
        e[59] = adjacency;
        e[60] = a;
        e[61] = entry.attachments;
        e[62] = entry.channelPermalink;
        e[63] = entry.message.channel;
        e[64] = entry.timestampMs;
        e[65] = images;
        e[66] = i;
        e[67] = I;
    } else {
        I = e[67];
    }
    let w;
    if (e[68] !== entry || e[69] !== C || e[70] !== I) {
        w = <G entry={entry} onCopy={C}>{I}</G>;
        e[68] = entry;
        e[69] = C;
        e[70] = I;
        e[71] = w;
    } else {
        w = e[71];
    }
    return w;
}
export { UeComponent as default };
