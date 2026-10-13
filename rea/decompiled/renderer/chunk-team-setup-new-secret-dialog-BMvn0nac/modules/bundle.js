import { c as c_1, u, r, T as T_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { u as u_2, G as G_1, a as maxLength, v, b } from "./chunk-grok-bot-secret-problem-text-DKm2VrEb.js";
import { x as x_1 } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-app-Cj5f8Gby.js";
import { T as T_2, a as Ye } from "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "9ff9de8e-b8d8-4dab-8a49-8bf4bc38e0f7";
            e._sentryDebugIdIdentifier = "sentry-dbid-9ff9de8e-b8d8-4dab-8a49-8bf4bc38e0f7";
        }
    } catch (e) {}
})();
const Ze = {
    body: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kOIVth: "sand-1v2ro7d",
        kLKAdn: "sand-1y1aw1k",
        kGO01o: "sand-1l90r2v",
        $$css: true
    }
};
const Ve = {
    className: "sand-1ghz6dp sand-1wm8ruf sand-1d3mw78 sand-6rl5ky"
};
function Oe(n) {
    return n.relatedTarget?.closest("button") != null;
}
function Qe(n, takenNames, o, d) {
    if (n.length === 0) {
        return null;
    }
    if (takenNames.has(n)) {
        return d;
    }
    const r = v(n);
    if (r === null) {
        return null;
    }
    return o.name(r);
}
function et(n, e) {
    if (n.length === 0) {
        return null;
    }
    const o = b(n.trim());
    if (o === null) {
        return null;
    }
    return e.value(o);
}
function DeComponent(n) {
    DeComponent.d = 1057;
    const e = c_1.c(3);
    const { id, problem } = n;
    if (problem === null) {
        return null;
    }
    let r;
    if (e[0] !== id || e[1] !== problem) {
        r = <p id={id} role="alert" {...Ve}>{problem}</p>;
        e[0] = id;
        e[1] = problem;
        e[2] = r;
    } else {
        r = e[2];
    }
    return r;
}
function TtComponent(n) {
    TtComponent.d = 1058;
    const e = c_1.c(122);
    const { open, onOpenChange, takenNames, isDisabled, onAdd } = n;
    const { _: __1 } = u();
    const y = u_2();
    const J = r.useId();
    const $ = r.useId();
    const [j, setJ] = r.useState("");
    const [x, setX] = r.useState("");
    const [i, setI] = r.useState("");
    const [Fe, setFe] = r.useState(false);
    const [Ke, setKe] = r.useState(false);
    const [Ne, setNe] = r.useState(false);
    const [H, setH] = r.useState(false);
    let M;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        M = ()=>{
            setJ("");
            setX("");
            setI("");
            setFe(false);
            setKe(false);
            setNe(false);
        };
        e[0] = M;
    } else {
        M = e[0];
    }
    const Le = M;
    let W;
    if (e[1] !== onOpenChange) {
        W = (s)=>{
            if (!s) {
                Le();
            }
            onOpenChange(s);
        };
        e[1] = onOpenChange;
        e[2] = W;
    } else {
        W = e[2];
    }
    const c = W;
    let b;
    let m;
    let X;
    let h;
    if (e[3] !== __1 || e[4] !== isDisabled || e[5] !== H || e[6] !== j || e[7] !== y || e[8] !== takenNames || e[9] !== i) {
        m = j.trim().toUpperCase();
        let s;
        if (e[14] !== i) {
            s = i.trim();
            e[14] = i;
            e[15] = s;
        } else {
            s = e[15];
        }
        h = s;
        b = !isDisabled && !H && m.length > 0 && h.length > 0;
        X = Qe(m, takenNames, y, __1({
            id: "YNjRIY",
            values: {
                name: m
            }
        }));
        e[3] = __1;
        e[4] = isDisabled;
        e[5] = H;
        e[6] = j;
        e[7] = y;
        e[8] = takenNames;
        e[9] = i;
        e[10] = b;
        e[11] = m;
        e[12] = X;
        e[13] = h;
    } else {
        b = e[10];
        m = e[11];
        X = e[12];
        h = e[13];
    }
    const Y = X;
    let Z;
    if (e[16] !== y || e[17] !== i) {
        Z = et(i, y);
        e[16] = y;
        e[17] = i;
        e[18] = Z;
    } else {
        Z = e[18];
    }
    const Q = Z;
    const K = Fe && !H ? Y : null;
    const L = Ke || i.length > 0 && h.length === 0 ? Q : null;
    let ee;
    if (e[19] !== b || e[20] !== x || e[21] !== c || e[22] !== m || e[23] !== Y || e[24] !== onAdd || e[25] !== h || e[26] !== Q) {
        ee = async ()=>{
            if (!b || (setNe(false), setFe(true), setKe(true), Y !== null || Q !== null)) {
                return;
            }
            const s = onAdd({
                name: m,
                description: x.trim(),
                value: h
            });
            let ze = s;
            if (typeof s !== "boolean") {
                setH(true);
                ze = await s;
                setH(false);
            }
            if (!ze) {
                setNe(true);
                return;
            }
            c(false);
        };
        e[19] = b;
        e[20] = x;
        e[21] = c;
        e[22] = m;
        e[23] = Y;
        e[24] = onAdd;
        e[25] = h;
        e[26] = Q;
        e[27] = ee;
    } else {
        ee = e[27];
    }
    const S = ee;
    let te;
    if (e[28] !== S) {
        te = (s)=>{
            if (s.key === "Enter") {
                s.preventDefault();
                S();
            }
        };
        e[28] = S;
        e[29] = te;
    } else {
        te = e[29];
    }
    const onKeyDown = te;
    let onClose;
    if (e[30] !== c) {
        onClose = ()=>c(false);
        e[30] = c;
        e[31] = onClose;
    } else {
        onClose = e[31];
    }
    let se;
    if (e[32] === Symbol.for("react.memo_cache_sentinel")) {
        se = <T_2 description=<T_1 id="F/3xsR"/> title=<T_1 id="E0czcG"/>/>;
        e[32] = se;
    } else {
        se = e[32];
    }
    let le;
    let ae;
    let ne;
    if (e[33] === Symbol.for("react.memo_cache_sentinel")) {
        ne = {
            className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
        };
        le = {
            className: "sand-78zum5 sand-dt5ytf sand-17d4w8g"
        };
        ae = <span className="sand-11wthnw sand-d4r4e8 sand-tyxrsu"><T_1 id="vPWtZ+"/></span>;
        e[33] = le;
        e[34] = ae;
        e[35] = ne;
    } else {
        le = e[33];
        ae = e[34];
        ne = e[35];
    }
    const Ce = K === null ? undefined : J;
    const ke = K !== null;
    let w;
    if (e[36] !== __1) {
        w = __1({
            id: "ysrOqg"
        });
        e[36] = __1;
        e[37] = w;
    } else {
        w = e[37];
    }
    let oe;
    let ie;
    if (e[38] === Symbol.for("react.memo_cache_sentinel")) {
        oe = (s)=>{
            if (!Oe(s)) {
                setFe(true);
            }
        };
        ie = (s)=>setJ(s.currentTarget.value);
        e[38] = oe;
        e[39] = ie;
    } else {
        oe = e[38];
        ie = e[39];
    }
    let v;
    if (e[40] !== __1) {
        v = __1({
            id: "i0OHcl"
        });
        e[40] = __1;
        e[41] = v;
    } else {
        v = e[41];
    }
    let re;
    if (e[42] === Symbol.for("react.memo_cache_sentinel")) {
        re = {
            className: "sand-9f619 sand-h8yej3 sand-10w6t97 sand-t970qd sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-1tiofj7 sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1h7ufjq"
        };
        e[42] = re;
    } else {
        re = e[42];
    }
    let g;
    if (e[43] !== isDisabled || e[44] !== j || e[45] !== onKeyDown || e[46] !== Ce || e[47] !== ke || e[48] !== w || e[49] !== v) {
        g = <input aria-describedby={Ce} aria-invalid={ke} aria-label={w} autoCapitalize="characters" autoComplete="off" autoFocus disabled={isDisabled} maxLength={G_1} onBlur={oe} onChange={ie} onKeyDown={onKeyDown} placeholder={v} spellCheck={false} value={j} {...re}/>;
        e[43] = isDisabled;
        e[44] = j;
        e[45] = onKeyDown;
        e[46] = Ce;
        e[47] = ke;
        e[48] = w;
        e[49] = v;
        e[50] = g;
    } else {
        g = e[50];
    }
    let N;
    if (e[51] !== J || e[52] !== K) {
        N = <DeComponent id={J} problem={K}/>;
        e[51] = J;
        e[52] = K;
        e[53] = N;
    } else {
        N = e[53];
    }
    let T;
    if (e[54] !== g || e[55] !== N) {
        T = <label {...le}>{ae}{g}{N}</label>;
        e[54] = g;
        e[55] = N;
        e[56] = T;
    } else {
        T = e[56];
    }
    let de;
    let ce;
    if (e[57] === Symbol.for("react.memo_cache_sentinel")) {
        de = {
            className: "sand-78zum5 sand-dt5ytf sand-17d4w8g"
        };
        ce = <span className="sand-11wthnw sand-d4r4e8 sand-tyxrsu"><T_1 id="JGRUw+"/></span>;
        e[57] = de;
        e[58] = ce;
    } else {
        de = e[57];
        ce = e[58];
    }
    let C;
    if (e[59] !== __1) {
        C = __1({
            id: "JGRUw+"
        });
        e[59] = __1;
        e[60] = C;
    } else {
        C = e[60];
    }
    let me;
    if (e[61] === Symbol.for("react.memo_cache_sentinel")) {
        me = (s)=>setX(s.currentTarget.value);
        e[61] = me;
    } else {
        me = e[61];
    }
    let k;
    if (e[62] !== __1) {
        k = __1({
            id: "JGRUw+"
        });
        e[62] = __1;
        e[63] = k;
    } else {
        k = e[63];
    }
    let ue;
    if (e[64] === Symbol.for("react.memo_cache_sentinel")) {
        ue = {
            className: "sand-9f619 sand-h8yej3 sand-10w6t97 sand-t970qd sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-1tiofj7 sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1h7ufjq"
        };
        e[64] = ue;
    } else {
        ue = e[64];
    }
    let q;
    if (e[65] !== x || e[66] !== isDisabled || e[67] !== onKeyDown || e[68] !== C || e[69] !== k) {
        q = <label {...de}>{ce}<input aria-label={C} autoComplete="off" disabled={isDisabled} maxLength={maxLength} onChange={me} onKeyDown={onKeyDown} placeholder={k} value={x} {...ue}/></label>;
        e[65] = x;
        e[66] = isDisabled;
        e[67] = onKeyDown;
        e[68] = C;
        e[69] = k;
        e[70] = q;
    } else {
        q = e[70];
    }
    let fe;
    let he;
    if (e[71] === Symbol.for("react.memo_cache_sentinel")) {
        fe = {
            className: "sand-78zum5 sand-dt5ytf sand-17d4w8g"
        };
        he = <span className="sand-11wthnw sand-d4r4e8 sand-tyxrsu"><T_1 id="dDvWpB"/></span>;
        e[71] = fe;
        e[72] = he;
    } else {
        fe = e[71];
        he = e[72];
    }
    const qe = L === null ? undefined : $;
    const Ee = L !== null;
    let E;
    if (e[73] !== __1) {
        E = __1({
            id: "dDvWpB"
        });
        e[73] = __1;
        e[74] = E;
    } else {
        E = e[74];
    }
    let pe;
    let be;
    if (e[75] === Symbol.for("react.memo_cache_sentinel")) {
        pe = (s)=>{
            if (!Oe(s)) {
                setKe(true);
            }
        };
        be = (s)=>setI(s.currentTarget.value);
        e[75] = pe;
        e[76] = be;
    } else {
        pe = e[75];
        be = e[76];
    }
    let B;
    if (e[77] !== __1) {
        B = __1({
            id: "3r2aS+"
        });
        e[77] = __1;
        e[78] = B;
    } else {
        B = e[78];
    }
    let ye;
    if (e[79] === Symbol.for("react.memo_cache_sentinel")) {
        ye = {
            className: "sand-9f619 sand-h8yej3 sand-10w6t97 sand-t970qd sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-1tiofj7 sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1h7ufjq"
        };
        e[79] = ye;
    } else {
        ye = e[79];
    }
    let D;
    if (e[80] !== isDisabled || e[81] !== onKeyDown || e[82] !== qe || e[83] !== Ee || e[84] !== E || e[85] !== B || e[86] !== i) {
        D = <input aria-describedby={qe} aria-invalid={Ee} aria-label={E} autoComplete="off" disabled={isDisabled} onBlur={pe} onChange={be} onKeyDown={onKeyDown} placeholder={B} spellCheck={false} type="password" value={i} {...ye}/>;
        e[80] = isDisabled;
        e[81] = onKeyDown;
        e[82] = qe;
        e[83] = Ee;
        e[84] = E;
        e[85] = B;
        e[86] = i;
        e[87] = D;
    } else {
        D = e[87];
    }
    let P;
    if (e[88] !== L || e[89] !== $) {
        P = <DeComponent id={$} problem={L}/>;
        e[88] = L;
        e[89] = $;
        e[90] = P;
    } else {
        P = e[90];
    }
    let G;
    if (e[91] !== D || e[92] !== P) {
        G = <label {...fe}>{he}{D}{P}</label>;
        e[91] = D;
        e[92] = P;
        e[93] = G;
    } else {
        G = e[93];
    }
    let I;
    if (e[94] !== Ne) {
        I = Ne ? <p role="alert" {...Ve}><T_1 id="JUpeyb"/></p> : null;
        e[94] = Ne;
        e[95] = I;
    } else {
        I = e[95];
    }
    let R;
    if (e[96] !== T || e[97] !== q || e[98] !== G || e[99] !== I) {
        R = <x_1.Body style={Ze.body}><div {...ne}>{T}{q}{G}{I}</div></x_1.Body>;
        e[96] = T;
        e[97] = q;
        e[98] = G;
        e[99] = I;
        e[100] = R;
    } else {
        R = e[100];
    }
    let z;
    if (e[101] !== c) {
        z = ()=>c(false);
        e[101] = c;
        e[102] = z;
    } else {
        z = e[102];
    }
    let je;
    if (e[103] === Symbol.for("react.memo_cache_sentinel")) {
        je = <T_1 id="dEgA5A"/>;
        e[103] = je;
    } else {
        je = e[103];
    }
    let O;
    if (e[104] !== isDisabled || e[105] !== z) {
        O = <x_1.Action disabled={isDisabled} onClick={z} variant="secondary">{je}</x_1.Action>;
        e[104] = isDisabled;
        e[105] = z;
        e[106] = O;
    } else {
        O = e[106];
    }
    let xe;
    if (e[107] === Symbol.for("react.memo_cache_sentinel")) {
        xe = <x_1.ActionSpacer/>;
        e[107] = xe;
    } else {
        xe = e[107];
    }
    const disabled = !b;
    let A;
    if (e[108] !== S) {
        A = ()=>{
            S();
        };
        e[108] = S;
        e[109] = A;
    } else {
        A = e[109];
    }
    let Se;
    if (e[110] === Symbol.for("react.memo_cache_sentinel")) {
        Se = <T_1 id="zNpxuN"/>;
        e[110] = Se;
    } else {
        Se = e[110];
    }
    let V;
    if (e[111] !== disabled || e[112] !== A) {
        V = <x_1.Action disabled={disabled} onClick={A} variant="primary">{Se}</x_1.Action>;
        e[111] = disabled;
        e[112] = A;
        e[113] = V;
    } else {
        V = e[113];
    }
    let F;
    if (e[114] !== O || e[115] !== V) {
        F = <x_1.ActionBar>{O}{xe}{V}</x_1.ActionBar>;
        e[114] = O;
        e[115] = V;
        e[116] = F;
    } else {
        F = e[116];
    }
    let _e;
    if (e[117] !== open || e[118] !== R || e[119] !== F || e[120] !== onClose) {
        _e = <Ye height="hug" onClose={onClose} open={open}>{se}{R}{F}</Ye>;
        e[117] = open;
        e[118] = R;
        e[119] = F;
        e[120] = onClose;
        e[121] = _e;
    } else {
        _e = e[121];
    }
    return _e;
}
export { TtComponent as T };
