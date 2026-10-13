import { c as c_1, u as u_1, r as r_1, p, T } from "./index.eager-vendor-Qbf9YA6n.js";
import { b5, b6, b7, b8, g as R, an, a5 as Re, a6 as Ne } from "./index-ZYxf-aBb.js";
import { i, aY as J } from "./index.eager-platform-Dcfeegfw.js";
import { b7 as b7_1, d6, d7, d8, d9, aK, r as r_2, da, aP as Fe, db } from "./index.eager-app-Cj5f8Gby.js";
import { B as B_1, a as Y } from "./chunk-bot-template-details-dialog-CbD31Hrp.js";
import { s as s_1, B as B_2 } from "./chunk-bot-template-share-card-frame-gOKZUO-a.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-wipe-navigation-B3wgZxtA.js";
import "./chunk-bot-template-details-focus-BkZ83BHB.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "7ffc5c42-c59e-4d48-a720-caf210a765de";
            e._sentryDebugIdIdentifier = "sentry-dbid-7ffc5c42-c59e-4d48-a720-caf210a765de";
        }
    } catch (e) {}
})();
function QComponent(A) {
    QComponent.d = 272;
    const e = c_1.c(17);
    const { share } = A;
    const { _ } = u_1();
    const t = db();
    if (share.isPublished && (share.isAvailable || t)) {
        const onClick = share.copyLink;
        let o;
        if (e[0] !== _) {
            o = _({
                id: "a83GDF"
            });
            e[0] = _;
            e[1] = o;
        } else {
            o = e[1];
        }
        let f;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            f = <Y mode="copy-link"/>;
            e[2] = f;
        } else {
            f = e[2];
        }
        let d;
        if (e[3] !== share.copyLink || e[4] !== o) {
            d = <R tone="monochrome" onClick={onClick} rootStyle={aK.askCardButton} size="md" title={o} variant="primary">{f}</R>;
            e[3] = share.copyLink;
            e[4] = o;
            e[5] = d;
        } else {
            d = e[5];
        }
        return d;
    }
    if (!share.isAvailable) {
        return null;
    }
    const share_isPublishing = share.isPublishing;
    let s;
    if (e[6] !== share) {
        s = ()=>{
            share.publish();
        };
        e[6] = share;
        e[7] = s;
    } else {
        s = e[7];
    }
    let r;
    if (e[8] !== _) {
        r = _({
            id: "eORZUT"
        });
        e[8] = _;
        e[9] = r;
    } else {
        r = e[9];
    }
    const mode = share.isPublishing ? "publishing" : "publish";
    let n;
    if (e[10] !== mode) {
        n = <Y mode={mode}/>;
        e[10] = mode;
        e[11] = n;
    } else {
        n = e[11];
    }
    let m;
    if (e[12] !== share.isPublishing || e[13] !== s || e[14] !== r || e[15] !== n) {
        m = <R tone="monochrome" disabled={share_isPublishing} onClick={s} rootStyle={aK.askCardButton} size="md" title={r} variant="primary">{n}</R>;
        e[12] = share.isPublishing;
        e[13] = s;
        e[14] = r;
        e[15] = n;
        e[16] = m;
    } else {
        m = e[16];
    }
    return m;
}
function XComponent(A) {
    XComponent.d = 273;
    const e = c_1.c(67);
    const { template, sourceAgentId } = A;
    const { _: __1 } = u_1();
    const { botTemplates } = b7_1();
    b5(template.shareId, template.version);
    const s = d6(template);
    let r;
    if (e[0] !== template.version || e[1] !== s) {
        r = d7(s) ? s.version ?? template.version : undefined;
        e[0] = template.version;
        e[1] = s;
        e[2] = r;
    } else {
        r = e[2];
    }
    b6(template.shareId, r);
    const c = d8(template.shareId);
    let n;
    if (e[3] !== botTemplates || e[4] !== c || e[5] !== sourceAgentId || e[6] !== template) {
        n = ()=>{
            const view = sourceAgentId == null ? template : {
                ...template,
                sourceAgentId
            };
            if (c !== "deleted") {
                botTemplates.applyShareResult(view);
            }
            if (sourceAgentId == null || c === "deleted") {
                return ge;
            }
            botTemplates.associateSourceAgent({
                shareId: template.shareId,
                sourceAgentId,
                view
            });
            return ye;
        };
        e[3] = botTemplates;
        e[4] = c;
        e[5] = sourceAgentId;
        e[6] = template;
        e[7] = n;
    } else {
        n = e[7];
    }
    i(n);
    let m;
    if (e[8] !== s) {
        m = d9(s);
        e[8] = s;
        e[9] = m;
    } else {
        m = e[9];
    }
    const u = m;
    b5(s.shareId, u);
    const [o, setO] = r_1.useState(false);
    const [d, setD] = r_1.useState(false);
    const share = b7(s);
    if (c === "deleted") {
        let b;
        let S;
        let _;
        if (e[10] !== __1 || e[11] !== s.name) {
            b = p(aK.transcriptWidget, s_1.card);
            S = __1({
                id: "n3iJiO",
                values: {
                    0: s.name
                }
            });
            _ = r_2("sand-bot-template-share-card", b.className);
            e[10] = __1;
            e[11] = s.name;
            e[12] = b;
            e[13] = S;
            e[14] = _;
        } else {
            b = e[12];
            S = e[13];
            _ = e[14];
        }
        const style = b.style;
        let P;
        if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
            P = r_2(p(s_1.title).className);
            e[15] = P;
        } else {
            P = e[15];
        }
        let L;
        if (e[16] !== P || e[17] !== s.name) {
            L = <J className={P} dir="auto" size="lg" weight="semibold">{s.name}</J>;
            e[16] = P;
            e[17] = s.name;
            e[18] = L;
        } else {
            L = e[18];
        }
        let M;
        if (e[19] === Symbol.for("react.memo_cache_sentinel")) {
            M = r_2("sand-10im51j sand-euugli sand-1o0liin sand-13faqbe");
            e[19] = M;
        } else {
            M = e[19];
        }
        let z;
        if (e[20] === Symbol.for("react.memo_cache_sentinel")) {
            z = <T id="WZKu5f"/>;
            e[20] = z;
        } else {
            z = e[20];
        }
        let V;
        if (e[21] !== M) {
            V = <J as="p" className={M} size="lg">{z}</J>;
            e[21] = M;
            e[22] = V;
        } else {
            V = e[22];
        }
        let O;
        if (e[23] !== b.style || e[24] !== V || e[25] !== S || e[26] !== _ || e[27] !== L) {
            O = <article aria-label={S} className={_} style={style}>{L}{V}</article>;
            e[23] = b.style;
            e[24] = V;
            e[25] = S;
            e[26] = _;
            e[27] = L;
            e[28] = O;
        } else {
            O = e[28];
        }
        return O;
    }
    let v;
    if (e[29] !== share) {
        v = <QComponent share={share}/>;
        e[29] = share;
        e[30] = v;
    } else {
        v = e[30];
    }
    let y;
    if (e[31] !== botTemplates || e[32] !== u || e[33] !== s.shareId) {
        y = ()=>{
            setD(true);
            const b = u == null ? Promise.resolve() : botTemplates.prefetchVersion(s.shareId, u);
            const S = ()=>{
                setD(false);
                setO(true);
            };
            b.then(S, S);
        };
        e[31] = botTemplates;
        e[32] = u;
        e[33] = s.shareId;
        e[34] = y;
    } else {
        y = e[34];
    }
    let rootStyle;
    if (e[35] === Symbol.for("react.memo_cache_sentinel")) {
        rootStyle = [
            aK.askCardButton,
            s_1.actionSecondary
        ];
        e[35] = rootStyle;
    } else {
        rootStyle = e[35];
    }
    let g;
    if (e[36] !== __1) {
        g = __1({
            id: "kthsWj"
        });
        e[36] = __1;
        e[37] = g;
    } else {
        g = e[37];
    }
    let x;
    if (e[38] !== d) {
        x = d ? <Fe borderWidth={1.5} size={14}/> : null;
        e[38] = d;
        e[39] = x;
    } else {
        x = e[39];
    }
    let w;
    if (e[40] === Symbol.for("react.memo_cache_sentinel")) {
        w = <T id="SZw9tS"/>;
        e[40] = w;
    } else {
        w = e[40];
    }
    let k;
    if (e[41] !== d || e[42] !== y || e[43] !== g || e[44] !== x) {
        k = <R disabled={d} onClick={y} rootStyle={rootStyle} size="md" title={g} variant="outline">{x}{w}</R>;
        e[41] = d;
        e[42] = y;
        e[43] = g;
        e[44] = x;
        e[45] = k;
    } else {
        k = e[45];
    }
    let footer;
    if (e[46] !== k || e[47] !== v) {
        footer = <>{v}{k}</>;
        e[46] = k;
        e[47] = v;
        e[48] = footer;
    } else {
        footer = e[48];
    }
    const p_isPublished = share.isPublished;
    let B;
    if (e[49] !== share.isMarkLive) {
        B = b8({
            parkUntilLive: true,
            isMarkLive: share.isMarkLive
        });
        e[49] = share.isMarkLive;
        e[50] = B;
    } else {
        B = e[50];
    }
    let mark;
    if (e[51] !== share.markState || e[52] !== share.spinSignal || e[53] !== B) {
        mark = {
            ...B,
            state: share.markState,
            spinSignal: share.spinSignal
        };
        e[51] = share.markState;
        e[52] = share.spinSignal;
        e[53] = B;
        e[54] = mark;
    } else {
        mark = e[54];
    }
    let C;
    if (e[55] !== share.isPublished || e[56] !== footer || e[57] !== mark || e[58] !== s) {
        C = <B_2 footer={footer} isPublished={p_isPublished} mark={mark} template={s}/>;
        e[55] = share.isPublished;
        e[56] = footer;
        e[57] = mark;
        e[58] = s;
        e[59] = C;
    } else {
        C = e[59];
    }
    let I;
    if (e[60] !== o || e[61] !== sourceAgentId || e[62] !== s) {
        I = o ? <B_1 onClose={()=>setO(false)} {...sourceAgentId == null ? {} : {
            sourceAgentId
        }} template={da(s)}/> : null;
        e[60] = o;
        e[61] = sourceAgentId;
        e[62] = s;
        e[63] = I;
    } else {
        I = e[63];
    }
    let D;
    if (e[64] !== C || e[65] !== I) {
        D = <>{C}{I}</>;
        e[64] = C;
        e[65] = I;
        e[66] = D;
    } else {
        D = e[66];
    }
    return D;
}
function ye() {}
function ge() {}
function XeComponent(A) {
    XeComponent.d = 311;
    const e = c_1.c(31);
    const { entry, adjacency } = A;
    const { message } = entry;
    const sourceAgentId = an();
    let s;
    if (e[0] !== sourceAgentId) {
        s = sourceAgentId === null ? {} : {
            sourceAgentId
        };
        e[0] = sourceAgentId;
        e[1] = s;
    } else {
        s = e[1];
    }
    let r;
    if (e[2] !== message.version) {
        r = message.version == null ? {} : {
            version: message.version
        };
        e[2] = message.version;
        e[3] = r;
    } else {
        r = e[3];
    }
    let c;
    if (e[4] !== message.published) {
        c = message.published == null ? {} : {
            published: message.published
        };
        e[4] = message.published;
        e[5] = c;
    } else {
        c = e[5];
    }
    let n;
    if (e[6] !== message.activeVersion) {
        n = message.activeVersion == null ? {} : {
            activeVersion: message.activeVersion
        };
        e[6] = message.activeVersion;
        e[7] = n;
    } else {
        n = e[7];
    }
    let m;
    if (e[8] !== message.visibility) {
        m = message.visibility == null ? {} : {
            visibility: message.visibility
        };
        e[8] = message.visibility;
        e[9] = m;
    } else {
        m = e[9];
    }
    let u;
    if (e[10] !== message.avatarColor || e[11] !== message.avatarShape || e[12] !== message.body || e[13] !== message.name || e[14] !== message.shareId || e[15] !== message.shareUrl || e[16] !== r || e[17] !== c || e[18] !== n || e[19] !== m) {
        u = {
            shareId: message.shareId,
            name: message.name,
            avatarShape: message.avatarShape,
            avatarColor: message.avatarColor,
            description: message.body,
            shareUrl: message.shareUrl,
            ...r,
            ...c,
            ...n,
            ...m
        };
        e[10] = message.avatarColor;
        e[11] = message.avatarShape;
        e[12] = message.body;
        e[13] = message.name;
        e[14] = message.shareId;
        e[15] = message.shareUrl;
        e[16] = r;
        e[17] = c;
        e[18] = n;
        e[19] = m;
        e[20] = u;
    } else {
        u = e[20];
    }
    let o;
    if (e[21] !== s || e[22] !== u) {
        o = <XComponent {...s} template={u}/>;
        e[21] = s;
        e[22] = u;
        e[23] = o;
    } else {
        o = e[23];
    }
    let f;
    if (e[24] !== adjacency.isGroupStart || e[25] !== entry.timestampMs || e[26] !== o) {
        f = <Re className="sand-bot-template-share-card-wrap" isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="tab">{o}</Re>;
        e[24] = adjacency.isGroupStart;
        e[25] = entry.timestampMs;
        e[26] = o;
        e[27] = f;
    } else {
        f = e[27];
    }
    let d;
    if (e[28] !== entry || e[29] !== f) {
        d = <Ne entry={entry}>{f}</Ne>;
        e[28] = entry;
        e[29] = f;
        e[30] = d;
    } else {
        d = e[30];
    }
    return d;
}
export { XeComponent as default };
