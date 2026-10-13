import { c, r, T as T_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { b4, b5, b6 } from "./index.eager-app-Cj5f8Gby.js";
import { Q, U, x as x_1 } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import { C as C_1 } from "./chunk-agent-character-picker-DUX3hpCp.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "a3e76d7f-9efb-44dd-be8a-aea8252fefd2";
            e._sentryDebugIdIdentifier = "sentry-dbid-a3e76d7f-9efb-44dd-be8a-aea8252fefd2";
        }
    } catch (e) {}
})();
function te(draft) {
    const e = {
        id: "",
        avatarShape: draft.avatarShape,
        avatarColor: draft.avatarColor
    };
    return {
        name: draft.name,
        body: draft.body,
        shape: U(e),
        color: Q(e),
        ...draft.visibility == null ? {} : {
            visibility: draft.visibility
        }
    };
}
function XComponent(i) {
    XComponent.d = 277;
    const e = c.c(50);
    const { initial, isPending, showFailure, onClose, onSave } = i;
    const [s, setS] = r.useState(initial.name);
    const [b, setB] = r.useState(initial.body);
    const [f, setF] = r.useState(initial.shape);
    const [y, setY] = r.useState(initial.color);
    let m;
    let T;
    if (e[0] !== b || e[1] !== y || e[2] !== initial.visibility || e[3] !== isPending || e[4] !== s || e[5] !== f) {
        const l = s.trim();
        const body = b.trim();
        m = {
            name: l,
            avatarShape: f,
            avatarColor: y,
            body,
            ...initial.visibility == null ? {} : {
                visibility: initial.visibility
            }
        };
        T = l.length > 0 && body.length > 0 && l.length <= b5 && body.length <= b6 && b4(m) && !isPending;
        e[0] = b;
        e[1] = y;
        e[2] = initial.visibility;
        e[3] = isPending;
        e[4] = s;
        e[5] = f;
        e[6] = m;
        e[7] = T;
    } else {
        m = e[6];
        T = e[7];
    }
    const V = T;
    let onOpenChange;
    if (e[8] !== isPending || e[9] !== onClose) {
        onOpenChange = (l)=>{
            if (!l && !isPending) {
                onClose();
            }
        };
        e[8] = isPending;
        e[9] = onClose;
        e[10] = onOpenChange;
    } else {
        onOpenChange = e[10];
    }
    let C;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        C = <x_1.CloseButton/>;
        e[11] = C;
    } else {
        C = e[11];
    }
    let N;
    if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
        N = <x_1.Header><x_1.Title><T_1 id="bHboUQ"/></x_1.Title></x_1.Header>;
        e[12] = N;
    } else {
        N = e[12];
    }
    let E;
    let A;
    let B;
    let D;
    if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
        E = {
            className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
        };
        A = {
            className: "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-1o0liin sand-1wm8ruf"
        };
        B = <T_1 id="6YtxFj"/>;
        D = {
            className: "sand-h8yej3 sand-9f619 sand-1y1aw1k sand-2vl965 sand-wib8y2 sand-e2zdcy sand-1qmwy7c sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1k57tk5 sand-784prv sand-1t137rt sand-9v5kkp sand-4sht9k"
        };
        e[13] = E;
        e[14] = A;
        e[15] = B;
        e[16] = D;
    } else {
        E = e[13];
        A = e[14];
        B = e[15];
        D = e[16];
    }
    let q;
    if (e[17] === Symbol.for("react.memo_cache_sentinel")) {
        q = (l)=>setS(l.currentTarget.value);
        e[17] = q;
    } else {
        q = e[17];
    }
    let p;
    if (e[18] !== s) {
        p = <label {...A}>{B}<input {...D} maxLength={b5} onChange={q} value={s}/></label>;
        e[18] = s;
        e[19] = p;
    } else {
        p = e[19];
    }
    let j;
    if (e[20] !== y || e[21] !== f) {
        j = <C_1 color={y} layout="row" onSelectColor={setY} onSelectShape={setF} shape={f}/>;
        e[20] = y;
        e[21] = f;
        e[22] = j;
    } else {
        j = e[22];
    }
    let F;
    let z;
    let L;
    if (e[23] === Symbol.for("react.memo_cache_sentinel")) {
        F = {
            className: "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-1o0liin sand-1wm8ruf"
        };
        z = <T_1 id="/K2CvV"/>;
        L = {
            className: "sand-h8yej3 sand-7v6ubd sand-288g5 sand-9f619 sand-1y1aw1k sand-2vl965 sand-wib8y2 sand-e2zdcy sand-1qmwy7c sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-tyxrsu sand-jb2p0i sand-11wthnw sand-37zpob sand-1k57tk5 sand-784prv sand-1t137rt sand-9v5kkp sand-4sht9k"
        };
        e[23] = F;
        e[24] = z;
        e[25] = L;
    } else {
        F = e[23];
        z = e[24];
        L = e[25];
    }
    let M;
    if (e[26] === Symbol.for("react.memo_cache_sentinel")) {
        M = (l)=>setB(l.currentTarget.value);
        e[26] = M;
    } else {
        M = e[26];
    }
    let x;
    if (e[27] !== b) {
        x = <label {...F}>{z}<textarea {...L} maxLength={b6} onChange={M} value={b}/></label>;
        e[27] = b;
        e[28] = x;
    } else {
        x = e[28];
    }
    let v;
    if (e[29] !== showFailure) {
        v = showFailure ? <span className="sand-6rl5ky sand-1wm8ruf" role="alert"><T_1 id="uSuoHw"/></span> : null;
        e[29] = showFailure;
        e[30] = v;
    } else {
        v = e[30];
    }
    let S;
    if (e[31] !== p || e[32] !== j || e[33] !== x || e[34] !== v) {
        S = <x_1.Body><div {...E}>{p}{j}{x}{v}</div></x_1.Body>;
        e[31] = p;
        e[32] = j;
        e[33] = x;
        e[34] = v;
        e[35] = S;
    } else {
        S = e[35];
    }
    let P;
    if (e[36] === Symbol.for("react.memo_cache_sentinel")) {
        P = <x_1.ActionSpacer/>;
        e[36] = P;
    } else {
        P = e[36];
    }
    const disabled = !V;
    let onClick;
    if (e[37] !== m || e[38] !== onSave) {
        onClick = ()=>onSave(m);
        e[37] = m;
        e[38] = onSave;
        e[39] = onClick;
    } else {
        onClick = e[39];
    }
    let g;
    if (e[40] !== isPending) {
        g = isPending ? <T_1 id="K/F6pa"/> : <T_1 id="tfDRzk"/>;
        e[40] = isPending;
        e[41] = g;
    } else {
        g = e[41];
    }
    let w;
    if (e[42] !== disabled || e[43] !== onClick || e[44] !== g) {
        w = <x_1.ActionBar>{P}<x_1.Action disabled={disabled} onClick={onClick} variant="primary">{g}</x_1.Action></x_1.ActionBar>;
        e[42] = disabled;
        e[43] = onClick;
        e[44] = g;
        e[45] = w;
    } else {
        w = e[45];
    }
    let H;
    if (e[46] !== S || e[47] !== onOpenChange || e[48] !== w) {
        H = <x_1.Root className="sand-bot-template-editor-dialog" onOpenChange={onOpenChange} open variant="rich" width={480}>{C}{N}{S}{w}</x_1.Root>;
        e[46] = S;
        e[47] = onOpenChange;
        e[48] = w;
        e[49] = H;
    } else {
        H = e[49];
    }
    return H;
}
export function BotTemplateDraftDialog(i) {
    BotTemplateDraftDialog.d = 276;
    const e = c.c(8);
    const { draft, isSubmitting, submitFailed, onClose, onSubmit } = i;
    let initial;
    if (e[0] !== draft) {
        initial = te(draft);
        e[0] = draft;
        e[1] = initial;
    } else {
        initial = e[1];
    }
    let h;
    if (e[2] !== isSubmitting || e[3] !== onClose || e[4] !== onSubmit || e[5] !== submitFailed || e[6] !== initial) {
        h = <XComponent initial={initial} isPending={isSubmitting} onClose={onClose} onSave={onSubmit} showFailure={submitFailed}/>;
        e[2] = isSubmitting;
        e[3] = onClose;
        e[4] = onSubmit;
        e[5] = submitFailed;
        e[6] = initial;
        e[7] = h;
    } else {
        h = e[7];
    }
    return h;
}
