import { c, u } from "./index.eager-vendor-Qbf9YA6n.js";
import { i } from "./index.eager-platform-Dcfeegfw.js";
import { bY, b$, b9, bT, c0, c1, bs, c2, c3, c4 } from "./index.eager-app-Cj5f8Gby.js";
import { an, ah, a6 as P, a9 as $, a5 as Se } from "./index-ZYxf-aBb.js";
import { S as S_1, a as Ae, b as Ie } from "./chunk-widget-BJbdljQ9.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-card-field-BW4hZ8b8.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "a88cc663-ea12-476e-aa9b-0dbb976cc85d";
            e._sentryDebugIdIdentifier = "sentry-dbid-a88cc663-ea12-476e-aa9b-0dbb976cc85d";
        }
    } catch (e) {}
})();
function NeComponent(q) {
    NeComponent.d = 360;
    const e = c.c(59);
    const { entry, adjacency, isStale, isKeyboardTarget } = q;
    const { i18n } = u();
    const d = an();
    const { isReadOnly, canAnswerCards } = ah();
    const G = bY(d);
    const R = b$(d);
    const isComposerAnswerPath = b9("sand_widget_v0");
    const V = bT();
    let v;
    if (e[0] !== V) {
        v = ()=>{
            V("sand_widget_v0");
            return re;
        };
        e[0] = V;
        e[1] = v;
    } else {
        v = e[1];
    }
    i(v);
    let h;
    if (e[2] !== R || e[3] !== G || e[4] !== canAnswerCards || e[5] !== isReadOnly) {
        h = !isReadOnly || canAnswerCards === true || c0(G, R);
        e[2] = R;
        e[3] = G;
        e[4] = canAnswerCards;
        e[5] = isReadOnly;
        e[6] = h;
    } else {
        h = e[6];
    }
    const E = h;
    let _;
    if (e[7] !== d || e[8] !== entry.id) {
        _ = {
            agentId: d,
            entryId: entry.id
        };
        e[7] = d;
        e[8] = entry.id;
        e[9] = _;
    } else {
        _ = e[9];
    }
    const S = c1("widget", _);
    const widget = entry.message.widget;
    let r;
    let f;
    let g;
    if (e[10] !== adjacency || e[11] !== d || e[12] !== entry || e[13] !== i18n || e[14] !== E || e[15] !== isKeyboardTarget || e[16] !== isStale || e[17] !== isComposerAnswerPath || e[18] !== S || e[19] !== widget) {
        g = Symbol.for("react.early_return_sentinel");
        e: {
            const content = bs(i18n, widget);
            let C;
            if (e[23] !== entry || e[24] !== isStale || e[25] !== isComposerAnswerPath || e[26] !== S) {
                C = c2(entry, S, isStale, {
                    isComposerAnswerPath
                });
                e[23] = entry;
                e[24] = isStale;
                e[25] = isComposerAnswerPath;
                e[26] = S;
                e[27] = C;
            } else {
                C = e[27];
            }
            const l = C;
            const N = ()=>{
                navigator.clipboard.writeText(content);
            };
            if (l.kind === "question") {
                g = <P entry={entry} onCopy={N}><$ adjacency={adjacency} content={content} isSourceTrusted timestampMs={entry.timestampMs}/></P>;
                break e;
            }
            const surface = isComposerAnswerPath ? "elevated" : "bubble";
            let I;
            s: {
                if (l.kind === "resolved") {
                    let a;
                    if (e[28] !== l.answer || e[29] !== surface || e[30] !== widget) {
                        a = <S_1 answer={l.answer} surface={surface} widget={widget}/>;
                        e[28] = l.answer;
                        e[29] = surface;
                        e[30] = widget;
                        e[31] = a;
                    } else {
                        a = e[31];
                    }
                    I = a;
                    break s;
                }
                if (l.kind === "dismissed") {
                    let a;
                    if (e[32] !== surface || e[33] !== widget) {
                        a = <Ie surface={surface} widget={widget}/>;
                        e[32] = surface;
                        e[33] = widget;
                        e[34] = a;
                    } else {
                        a = e[34];
                    }
                    I = a;
                    break s;
                }
                const c = d ?? undefined;
                const isReadOnly_1 = !E;
                let u;
                if (e[35] !== entry.id || e[36] !== isKeyboardTarget || e[37] !== surface || e[38] !== c || e[39] !== isReadOnly_1 || e[40] !== widget) {
                    u = <Ae agentId={c} entryId={entry.id} isKeyboardTarget={isKeyboardTarget} isReadOnly={isReadOnly_1} surface={surface} widget={widget}/>;
                    e[35] = entry.id;
                    e[36] = isKeyboardTarget;
                    e[37] = surface;
                    e[38] = c;
                    e[39] = isReadOnly_1;
                    e[40] = widget;
                    e[41] = u;
                } else {
                    u = e[41];
                }
                I = u;
            }
            r = I;
            f = l.kind === "resolved" ? ()=>{
                navigator.clipboard.writeText(`${content}
${c3(i18n, widget, l.answer)}`);
            } : undefined;
            if (isComposerAnswerPath) {
                let c;
                if (e[42] === Symbol.for("react.memo_cache_sentinel")) {
                    c = {
                        className: "sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-h8yej3 sand-euugli"
                    };
                    e[42] = c;
                } else {
                    c = e[42];
                }
                let adjacency_1;
                if (e[43] !== adjacency) {
                    adjacency_1 = {
                        ...adjacency,
                        isContinuedToNext: false
                    };
                    e[43] = adjacency;
                    e[44] = adjacency_1;
                } else {
                    adjacency_1 = e[44];
                }
                const u = <$ adjacency={adjacency_1} content={c4(content, widget.helpText)} isSourceTrusted timestampMs={entry.timestampMs}/>;
                let a;
                if (e[45] === Symbol.for("react.memo_cache_sentinel")) {
                    a = {
                        className: "sand-78zum5 sand-dt5ytf sand-h8yej3 sand-1q8iv8g sand-1om1abp"
                    };
                    e[45] = a;
                } else {
                    a = e[45];
                }
                let w;
                if (e[46] !== r) {
                    w = <div {...a}>{r}</div>;
                    e[46] = r;
                    e[47] = w;
                } else {
                    w = e[47];
                }
                let M;
                if (e[48] !== w || e[49] !== u) {
                    M = <div {...c}>{u}{w}</div>;
                    e[48] = w;
                    e[49] = u;
                    e[50] = M;
                } else {
                    M = e[50];
                }
                g = <P entry={entry} onCopy={f ?? N}>{M}</P>;
                break e;
            }
        }
        e[10] = adjacency;
        e[11] = d;
        e[12] = entry;
        e[13] = i18n;
        e[14] = E;
        e[15] = isKeyboardTarget;
        e[16] = isStale;
        e[17] = isComposerAnswerPath;
        e[18] = S;
        e[19] = widget;
        e[20] = r;
        e[21] = f;
        e[22] = g;
    } else {
        r = e[20];
        f = e[21];
        g = e[22];
    }
    if (g !== Symbol.for("react.early_return_sentinel")) {
        return g;
    }
    let b;
    if (e[51] !== adjacency.isGroupStart || e[52] !== r || e[53] !== entry.timestampMs) {
        b = <Se className="sand-widget-wrap" isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="question">{r}</Se>;
        e[51] = adjacency.isGroupStart;
        e[52] = r;
        e[53] = entry.timestampMs;
        e[54] = b;
    } else {
        b = e[54];
    }
    let T;
    if (e[55] !== entry || e[56] !== f || e[57] !== b) {
        T = <P entry={entry} onCopy={f}>{b}</P>;
        e[55] = entry;
        e[56] = f;
        e[57] = b;
        e[58] = T;
    } else {
        T = e[58];
    }
    return T;
}
function re() {}
export { NeComponent as default };
