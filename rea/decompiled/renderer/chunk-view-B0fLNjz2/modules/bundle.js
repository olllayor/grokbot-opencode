import { c as c_1, u as u_1, r, T as T_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { bt, eK, d0, aZ as N } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { p as A, x, an, ah } from "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "66d1f415-c40b-489b-b862-ed119fbd955d";
            e._sentryDebugIdIdentifier = "sentry-dbid-66d1f415-c40b-489b-b862-ed119fbd955d";
        }
    } catch (e) {}
})();
function PComponent(j) {
    PComponent.d = 903;
    const e = c_1.c(16);
    const { upLabel, downLabel, disabled, onVote } = j;
    const disabled_1 = disabled === undefined ? false : disabled;
    let x;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        x = {
            className: "sand-3nfvp2 sand-6s0dn4 sand-195vfkc"
        };
        e[0] = x;
    } else {
        x = e[0];
    }
    let m;
    if (e[1] !== onVote) {
        m = ()=>onVote("up");
        e[1] = onVote;
        e[2] = m;
    } else {
        m = e[2];
    }
    let f;
    if (e[3] !== disabled_1 || e[4] !== m || e[5] !== upLabel) {
        f = <A aria-label={upLabel} disabled={disabled_1} icon="thumbs-up" onClick={m} shape="circle" size="sm" variant="ghost"/>;
        e[3] = disabled_1;
        e[4] = m;
        e[5] = upLabel;
        e[6] = f;
    } else {
        f = e[6];
    }
    let d;
    if (e[7] !== onVote) {
        d = ()=>onVote("down");
        e[7] = onVote;
        e[8] = d;
    } else {
        d = e[8];
    }
    let c;
    if (e[9] !== disabled_1 || e[10] !== downLabel || e[11] !== d) {
        c = <A aria-label={downLabel} disabled={disabled_1} icon="thumbs-down" onClick={d} shape="circle" size="sm" variant="ghost"/>;
        e[9] = disabled_1;
        e[10] = downLabel;
        e[11] = d;
        e[12] = c;
    } else {
        c = e[12];
    }
    let l;
    if (e[13] !== f || e[14] !== c) {
        l = <span {...x}>{f}{c}</span>;
        e[13] = f;
        e[14] = c;
        e[15] = l;
    } else {
        l = e[15];
    }
    return l;
}
const Y = [
    {
        id: "not_what_i_asked",
        label: {
            id: "XeOkNa"
        }
    },
    {
        id: "inaccurate",
        label: {
            id: "Qk+SyG"
        }
    },
    {
        id: "low_quality",
        label: {
            id: "9cm/hp"
        }
    },
    {
        id: "too_slow",
        label: {
            id: "YJPN3F"
        }
    }
];
function Component(j) {
    Component.d = 904;
    const e = c_1.c(37);
    const { draft, categories, error, isSubmitting, onToggleCategory, onCommentChange, onSubmit, onDismiss } = j;
    const d = categories === undefined ? Y : categories;
    const { i18n, _: __1 } = u_1();
    let onOpenChange;
    if (e[0] !== onDismiss) {
        onOpenChange = (n)=>{
            if (!n) {
                onDismiss();
            }
        };
        e[0] = onDismiss;
        e[1] = onOpenChange;
    } else {
        onOpenChange = e[1];
    }
    let S;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        S = <x.CloseButton/>;
        e[2] = S;
    } else {
        S = e[2];
    }
    let R;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        R = <x.Header><x.Title><T_1 id="HHOP3h"/></x.Title></x.Header>;
        e[3] = R;
    } else {
        R = e[3];
    }
    let u;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        u = {
            className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
        };
        e[4] = u;
    } else {
        u = e[4];
    }
    let w;
    if (e[5] !== d || e[6] !== draft.categories || e[7] !== i18n || e[8] !== onToggleCategory) {
        w = d.length === 0 ? null : <div className="sand-78zum5 sand-1a02dak sand-167g77z">{d.map((n)=>{
            const z = draft.categories.has(n.id);
            return <button {...{
                0: {
                    className: "sand-3nfvp2 sand-6s0dn4 sand-1iorvi4 sand-2vl965 sand-jkvuk6 sand-e2zdcy sand-149ho13 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-tyxrsu sand-jb2p0i sand-1wm8ruf sand-1ypdohk sand-1k57tk5 sand-784prv sand-1t137rt sand-9v5kkp sand-4sht9k sand-1y3gkto sand-ts7igz sand-1firant"
                },
                1: {
                    className: "sand-3nfvp2 sand-6s0dn4 sand-1iorvi4 sand-2vl965 sand-jkvuk6 sand-e2zdcy sand-149ho13 sand-qjedn3 sand-1y0btm7 sand-tyxrsu sand-jb2p0i sand-1wm8ruf sand-1ypdohk sand-1k57tk5 sand-784prv sand-1t137rt sand-9v5kkp sand-4sht9k sand-1y3gkto sand-ts7igz sand-1firant sand-luhinc sand-1b7rqjq"
                }
            }[!!z << 0]} aria-pressed={z} key={n.id} onClick={()=>onToggleCategory(n.id)} type="button">{i18n._(n.label)}</button>;
        })}</div>;
        e[5] = d;
        e[6] = draft.categories;
        e[7] = i18n;
        e[8] = onToggleCategory;
        e[9] = w;
    } else {
        w = e[9];
    }
    let _;
    if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
        _ = {
            className: "sand-h8yej3 sand-1qafhyn sand-288g5 sand-9f619 sand-1y1aw1k sand-2vl965 sand-wib8y2 sand-e2zdcy sand-ur7f20 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-tyxrsu sand-jb2p0i sand-11wthnw sand-37zpob sand-1k57tk5 sand-784prv sand-1t137rt sand-9v5kkp sand-4sht9k"
        };
        e[10] = _;
    } else {
        _ = e[10];
    }
    let p;
    if (e[11] !== __1) {
        p = __1({
            id: "VrRR3V"
        });
        e[11] = __1;
        e[12] = p;
    } else {
        p = e[12];
    }
    let onChange;
    if (e[13] !== onCommentChange) {
        onChange = (n)=>onCommentChange(n.currentTarget.value);
        e[13] = onCommentChange;
        e[14] = onChange;
    } else {
        onChange = e[14];
    }
    let placeholder;
    if (e[15] !== __1) {
        placeholder = __1({
            id: "VrRR3V"
        });
        e[15] = __1;
        e[16] = placeholder;
    } else {
        placeholder = e[16];
    }
    let v;
    if (e[17] !== draft.comment || e[18] !== placeholder || e[19] !== p || e[20] !== onChange) {
        v = <textarea {..._} aria-label={p} onChange={onChange} placeholder={placeholder} value={draft.comment}/>;
        e[17] = draft.comment;
        e[18] = placeholder;
        e[19] = p;
        e[20] = onChange;
        e[21] = v;
    } else {
        v = e[21];
    }
    let k;
    if (e[22] !== error) {
        k = error != null ? <span className="sand-6rl5ky sand-1wm8ruf" role="alert">{error}</span> : null;
        e[22] = error;
        e[23] = k;
    } else {
        k = e[23];
    }
    let g;
    if (e[24] !== v || e[25] !== k || e[26] !== w) {
        g = <x.Body><div {...u}>{w}{v}{k}</div></x.Body>;
        e[24] = v;
        e[25] = k;
        e[26] = w;
        e[27] = g;
    } else {
        g = e[27];
    }
    let C;
    if (e[28] === Symbol.for("react.memo_cache_sentinel")) {
        C = <x.ActionSpacer/>;
        e[28] = C;
    } else {
        C = e[28];
    }
    let E;
    if (e[29] === Symbol.for("react.memo_cache_sentinel")) {
        E = <T_1 id="hQRttt"/>;
        e[29] = E;
    } else {
        E = e[29];
    }
    let T;
    if (e[30] !== isSubmitting || e[31] !== onSubmit) {
        T = <x.ActionBar>{C}<x.Action disabled={isSubmitting} onClick={onSubmit} variant="primary">{E}</x.Action></x.ActionBar>;
        e[30] = isSubmitting;
        e[31] = onSubmit;
        e[32] = T;
    } else {
        T = e[32];
    }
    let t;
    if (e[33] !== g || e[34] !== T || e[35] !== onOpenChange) {
        t = <x.Root className="sand-feedback-improve-dialog" onOpenChange={onOpenChange} open variant="rich" width={520}>{S}{R}{g}{T}</x.Root>;
        e[33] = g;
        e[34] = T;
        e[35] = onOpenChange;
        e[36] = t;
    } else {
        t = e[36];
    }
    return t;
}
const B = {
    categories: new Set,
    comment: ""
};
const J = {
    id: "KSgnPO"
};
function M(action) {
    switch(action){
        case "revert":
            return "prompt";
        case "down":
            return "improve";
        default:
            return "voted";
    }
}
function Z(action, e) {
    if (action !== "submit") {
        return {};
    }
    return {
        categories: [
            ...e.categories
        ],
        ...e.comment.length > 0 ? {
            comment: e.comment
        } : {}
    };
}
function HComponent(j) {
    HComponent.d = 900;
    const e = c_1.c(44);
    const { entry } = j;
    const { _: __1 } = u_1();
    const { _: __2 } = u_1();
    const agentId = an();
    const { isReadOnly } = ah();
    const { voteFeedback } = bt();
    const [m, setM] = r.useState(null);
    const [d, setD] = r.useState(B);
    const [l, setL] = r.useState(null);
    const [S, setS] = r.useState(false);
    const u = m?.untilEntryLeaves === entry.state ? m.shows : entry.state;
    let w;
    if (e[0] !== __1 || e[1] !== agentId || e[2] !== d || e[3] !== entry.id || e[4] !== entry.state || e[5] !== S || e[6] !== voteFeedback) {
        w = (action)=>{
            agentId != null && (S && action !== "revert" || (setL(null), setS(true), setM({
                untilEntryLeaves: entry.state,
                shows: M(action)
            }), action === "revert" && setD(B), voteFeedback({
                agentId,
                entryId: entry.id,
                action,
                ...Z(action, d)
            }).then(()=>setS(false), (n)=>{
                d0(n, {
                    tags: {
                        sand_area: "feedback"
                    }
                });
                setM(null);
                setL(__1(J));
                setS(false);
            })));
        };
        e[0] = __1;
        e[1] = agentId;
        e[2] = d;
        e[3] = entry.id;
        e[4] = entry.state;
        e[5] = S;
        e[6] = voteFeedback;
        e[7] = w;
    } else {
        w = e[7];
    }
    const onVote = w;
    if (u === "voted") {
        let t;
        if (e[8] !== __1 || e[9] !== u) {
            t = __1(eK(u));
            e[8] = __1;
            e[9] = u;
            e[10] = t;
        } else {
            t = e[10];
        }
        let n;
        if (e[11] !== t) {
            n = <N>{t}</N>;
            e[11] = t;
            e[12] = n;
        } else {
            n = e[12];
        }
        return n;
    }
    if (isReadOnly) {
        let t;
        if (e[13] !== __2) {
            t = __2({
                id: "s7XoNw"
            });
            e[13] = __2;
            e[14] = t;
        } else {
            t = e[14];
        }
        let n;
        if (e[15] !== t) {
            n = <N>{t}</N>;
            e[15] = t;
            e[16] = n;
        } else {
            n = e[16];
        }
        return n;
    }
    const p = u === "improve";
    let h;
    if (e[17] !== __1 || e[18] !== u) {
        h = __1(eK(u));
        e[17] = __1;
        e[18] = u;
        e[19] = h;
    } else {
        h = e[19];
    }
    let b;
    if (e[20] !== h) {
        b = <N>{h}</N>;
        e[20] = h;
        e[21] = b;
    } else {
        b = e[21];
    }
    let downLabel;
    if (e[22] !== __2) {
        downLabel = __2({
            id: "qBe+RT"
        });
        e[22] = __2;
        e[23] = downLabel;
    } else {
        downLabel = e[23];
    }
    let upLabel;
    if (e[24] !== __2) {
        upLabel = __2({
            id: "7E+79I"
        });
        e[24] = __2;
        e[25] = upLabel;
    } else {
        upLabel = e[25];
    }
    let g;
    if (e[26] !== downLabel || e[27] !== upLabel || e[28] !== onVote) {
        g = <PComponent downLabel={downLabel} onVote={onVote} upLabel={upLabel}/>;
        e[26] = downLabel;
        e[27] = upLabel;
        e[28] = onVote;
        e[29] = g;
    } else {
        g = e[29];
    }
    let C;
    if (e[30] !== l || e[31] !== p) {
        C = l != null && !p ? <N role="alert">{l}</N> : null;
        e[30] = l;
        e[31] = p;
        e[32] = C;
    } else {
        C = e[32];
    }
    let E;
    if (e[33] !== d || e[34] !== l || e[35] !== p || e[36] !== S || e[37] !== onVote) {
        E = p ? <Component draft={d} error={l} isSubmitting={S} onCommentChange={(comment)=>setD((n)=>({
                    ...n,
                    comment
                }))} onDismiss={()=>onVote("revert")} onSubmit={()=>onVote("submit")} onToggleCategory={(t)=>setD((n)=>{
                const categories = new Set(n.categories);
                if (!categories.delete(t)) {
                    categories.add(t);
                }
                return {
                    ...n,
                    categories
                };
            })}/> : null;
        e[33] = d;
        e[34] = l;
        e[35] = p;
        e[36] = S;
        e[37] = onVote;
        e[38] = E;
    } else {
        E = e[38];
    }
    let T;
    if (e[39] !== b || e[40] !== g || e[41] !== C || e[42] !== E) {
        T = <>{b}{g}{C}{E}</>;
        e[39] = b;
        e[40] = g;
        e[41] = C;
        e[42] = E;
        e[43] = T;
    } else {
        T = e[43];
    }
    return T;
}
function UComponent(j) {
    UComponent.d = 899;
    const e = c_1.c(2);
    const { entry } = j;
    let i;
    if (e[0] !== entry) {
        i = <HComponent entry={entry}/>;
        e[0] = entry;
        e[1] = i;
    } else {
        i = e[1];
    }
    return i;
}
export { UComponent as default };
