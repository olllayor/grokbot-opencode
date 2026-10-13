import { c as c_1, u as u_1, r as r_1, j, T as T_1, R, p as p_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { u as u_2, G as G_1, a as maxLength, v, b as b_1, c as c_2, d as GROK_BOT_SECRET_VALUE_MIN_LENGTH } from "./chunk-grok-bot-secret-problem-text-DKm2VrEb.js";
import { hH, h$, bh, d0, jh, ji, a_, b0 as En, ff, jm, aU, cm, eY, fB, aK } from "./index.eager-app-Cj5f8Gby.js";
import { aY as J } from "./index.eager-platform-Dcfeegfw.js";
import { g as Pe1, aX as Ne1, x as x_1, cC, cD, bN, W, bx as At1, cE, P, O, I, cF, cG, z as Dt1, cH, cI, t as Ee, aV } from "./index-ZYxf-aBb.js";
import { a as Fe, P as P_1 } from "./chunk-use-team-bot-access-BG6AYhPN.js";
import { A as A_1 } from "./chunk-plugins-rows-2d0UrD7L.js";
import { S as S_1 } from "./chunk-SegmentedControl-Bj94OhnT.js";
import { b as Xe, a as Es1 } from "./chunk-team-setup-pills-7uDu4vf1.js";
import { t, e as e_1, b as Gt1, a as Yt1 } from "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "1ce3c0f4-d582-436b-be45-82fcd3a749ca";
            e._sentryDebugIdIdentifier = "sentry-dbid-1ce3c0f4-d582-436b-be45-82fcd3a749ca";
        }
    } catch (e) {}
})();
const jt = {
    empty: {
        kogj98: "sand-1ghz6dp",
        k8WAf4: "sand-1vvogim",
        kMwMTN: "sand-169k319",
        $$css: true
    }
};
const vt = "new-secret";
function Ns1Component(s) {
    Ns1Component.d = 967;
    const e = c_1.c(25);
    const { secret, disabled, isPending, onReplace, onRemove } = s;
    let o;
    let d;
    let u;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        o = {
            className: "sand-rvj5dj sand-ju1xpo sand-6s0dn4 sand-1v2ro7d sand-1vvogim sand-aope02 sand-1hkp6id sand-1q0q8m5 sand-1kp61ed sand-14tvv71"
        };
        d = {
            className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-euugli"
        };
        u = {
            className: "sand-1ey7xld sand-1wm8ruf sand-tyxrsu sand-j0a0fe"
        };
        e[0] = o;
        e[1] = d;
        e[2] = u;
    } else {
        o = e[0];
        d = e[1];
        u = e[2];
    }
    let c;
    if (e[3] !== secret.name) {
        c = <code {...u}>{secret.name}</code>;
        e[3] = secret.name;
        e[4] = c;
    } else {
        c = e[4];
    }
    let m;
    if (e[5] !== secret.description) {
        m = secret.description.length > 0 ? <J as="span" color="secondary" size="xs">{secret.description}</J> : null;
        e[5] = secret.description;
        e[6] = m;
    } else {
        m = e[6];
    }
    let f;
    if (e[7] !== c || e[8] !== m) {
        f = <div {...d}>{c}{m}</div>;
        e[7] = c;
        e[8] = m;
        e[9] = f;
    } else {
        f = e[9];
    }
    let p;
    if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
        p = {
            className: "sand-78zum5 sand-17d4w8g"
        };
        e[10] = p;
    } else {
        p = e[10];
    }
    const g = disabled || isPending;
    let h;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        h = <T_1 id="fqSfXY"/>;
        e[11] = h;
    } else {
        h = e[11];
    }
    let y;
    if (e[12] !== onReplace || e[13] !== g) {
        y = <Pe1 disabled={g} onClick={onReplace} size="sm" type="button" variant="secondary">{h}</Pe1>;
        e[12] = onReplace;
        e[13] = g;
        e[14] = y;
    } else {
        y = e[14];
    }
    let b;
    if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
        b = <T_1 id="t/YqKh"/>;
        e[15] = b;
    } else {
        b = e[15];
    }
    let j;
    if (e[16] !== isPending || e[17] !== onRemove) {
        j = <Pe1 disabled={isPending} onClick={onRemove} size="sm" type="button" variant="secondary">{b}</Pe1>;
        e[16] = isPending;
        e[17] = onRemove;
        e[18] = j;
    } else {
        j = e[18];
    }
    let v;
    if (e[19] !== y || e[20] !== j) {
        v = <div {...p}>{y}{j}</div>;
        e[19] = y;
        e[20] = j;
        e[21] = v;
    } else {
        v = e[21];
    }
    let x;
    if (e[22] !== v || e[23] !== f) {
        x = <li {...o}>{f}{v}</li>;
        e[22] = v;
        e[23] = f;
        e[24] = x;
    } else {
        x = e[24];
    }
    return x;
}
function XtComponent(s) {
    XtComponent.d = 966;
    const e = c_1.c(46);
    const { serverId, agentName, disabled } = s;
    const r = disabled === undefined ? false : disabled;
    const { _: __1 } = u_1();
    const o = r_1.useId();
    const d = hH(serverId);
    const u = h$();
    const [c, setC] = r_1.useState(null);
    const [f, setF] = r_1.useState(null);
    const [g, setG] = r_1.useState(null);
    const y = u.saveFailure !== g ? u.saveFailure : null;
    const b = u_2();
    const jRef = r_1.useRef(null);
    const vRef = r_1.useRef(null);
    const xRef = r_1.useRef(null);
    const _ = bh(d) ?? [];
    let k;
    if (e[0] !== c?.replacing) {
        k = (z)=>z.name !== c?.replacing;
        e[0] = c?.replacing;
        e[1] = k;
    } else {
        k = e[1];
    }
    const S = _.filter(k);
    const T = d.status === "loading" && _.length === 0;
    const I = d.status === "failed" || d.status === "unavailable";
    const C = d.status === "ready" || d.status === "empty";
    let P;
    if (e[2] !== u.saveFailure) {
        P = (z)=>{
            setC(z);
            setF(null);
            setG(u.saveFailure);
        };
        e[2] = u.saveFailure;
        e[3] = P;
    } else {
        P = e[3];
    }
    const N = P;
    let E;
    if (e[4] !== N) {
        E = ()=>N(null);
        e[4] = N;
        e[5] = E;
    } else {
        E = e[5];
    }
    const D = E;
    const onSubmit = (z)=>{
        z.preventDefault();
        if (c === null || r || u.isPending || c.replacing === null && !C) {
            return;
        }
        const xRef_current = xRef.current;
        const K = c.replacing ?? jRef.current?.value.trim().toUpperCase() ?? "";
        const te = vRef.current?.value.trim() ?? "";
        const ee = (xRef_current?.value ?? "").trim();
        const re = v(K);
        if (re !== null) {
            setF(b.name(re));
            return;
        }
        if (c.replacing === null && _.some((ke)=>ke.name === K)) {
            setF(__1({
                id: "Zqkifc",
                values: {
                    name: K
                }
            }));
            return;
        }
        const he = b_1(ee);
        if (he !== null) {
            setF(b.value(he));
            return;
        }
        setF(null);
        setG(u.saveFailure);
        u.put(serverId, {
            name: K,
            description: te,
            value: ee
        }).then(()=>{
            if (xRef_current != null && xRef_current.isConnected) {
                xRef_current.value = "";
            }
            D();
        }, bt);
    };
    let U = null;
    if (f !== null) {
        U = f;
    } else if (y !== null) {
        let z;
        if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
            z = <T_1 id="JUpeyb"/>;
            e[6] = z;
        } else {
            z = e[6];
        }
        U = z;
    }
    let B = null;
    if (T) {
        let z;
        if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
            z = <J as="p" color="secondary" role="status" size="sm"><T_1 id="yQE2r9"/></J>;
            e[7] = z;
        } else {
            z = e[7];
        }
        B = z;
    } else if (_.length === 0 && !I) {
        let z;
        if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
            z = <J as="p" rootStyle={jt.empty} size="sm"><T_1 id="pA2odF"/></J>;
            e[8] = z;
        } else {
            z = e[8];
        }
        B = z;
    } else if (S.length > 0) {
        let z;
        if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
            z = {
                className: "sand-78zum5 sand-dt5ytf sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c"
            };
            e[9] = z;
        } else {
            z = e[9];
        }
        let R;
        if (e[10] !== u || e[11] !== r || e[12] !== N || e[13] !== serverId) {
            R = (K)=><Ns1Component key={K.name} disabled={r} isPending={u.isPending} onRemove={()=>u.remove({
                        serverId,
                        name: K.name
                    })} onReplace={()=>N({
                        replacing: K.name
                    })} secret={K}/>;
            e[10] = u;
            e[11] = r;
            e[12] = N;
            e[13] = serverId;
            e[14] = R;
        } else {
            R = e[14];
        }
        B = <ul {...z}>{S.map(R)}</ul>;
    }
    let q;
    let L;
    let V;
    if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
        q = {
            className: "sand-78zum5 sand-dt5ytf sand-883omv sand-euugli"
        };
        L = {
            className: "sand-78zum5 sand-6s0dn4 sand-1qughib sand-1v2ro7d"
        };
        V = {
            className: "sand-78zum5 sand-dt5ytf sand-1jnr06f sand-euugli"
        };
        e[15] = q;
        e[16] = L;
        e[17] = V;
    } else {
        q = e[15];
        L = e[16];
        V = e[17];
    }
    let $;
    if (e[18] === Symbol.for("react.memo_cache_sentinel")) {
        $ = <T_1 id="MAv87s"/>;
        e[18] = $;
    } else {
        $ = e[18];
    }
    let F;
    if (e[19] !== o) {
        F = <J as="h3" id={o} size="sm" weight="semibold">{$}</J>;
        e[19] = o;
        e[20] = F;
    } else {
        F = e[20];
    }
    let G;
    if (e[21] !== agentName) {
        G = <J as="span" color="secondary" size="sm"><T_1 id="6eckAH" values={{
            agentName
        }}/></J>;
        e[21] = agentName;
        e[22] = G;
    } else {
        G = e[22];
    }
    let H;
    if (e[23] !== G || e[24] !== F) {
        H = <div {...V}>{F}{G}</div>;
        e[23] = G;
        e[24] = F;
        e[25] = H;
    } else {
        H = e[25];
    }
    const se = r || !C || u.isPending || c !== null;
    let W;
    if (e[26] !== N) {
        W = ()=>N({
                replacing: null
            });
        e[26] = N;
        e[27] = W;
    } else {
        W = e[27];
    }
    let ae;
    if (e[28] === Symbol.for("react.memo_cache_sentinel")) {
        ae = <T_1 id="oBU93f"/>;
        e[28] = ae;
    } else {
        ae = e[28];
    }
    let ie;
    if (e[29] !== se || e[30] !== W) {
        ie = <Pe1 disabled={se} onClick={W} size="sm" type="button" variant="secondary">{ae}</Pe1>;
        e[29] = se;
        e[30] = W;
        e[31] = ie;
    } else {
        ie = e[31];
    }
    let X;
    if (e[32] !== H || e[33] !== ie) {
        X = <div {...L}>{H}{ie}</div>;
        e[32] = H;
        e[33] = ie;
        e[34] = X;
    } else {
        X = e[34];
    }
    const le = c !== null ? <form key={c.replacing ?? vt} onSubmit={onSubmit} className="sand-78zum5 sand-dt5ytf sand-167g77z sand-c7ga6q sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c"><label className="sand-78zum5 sand-dt5ytf sand-1jnr06f"><J as="span" color="secondary" size="xs"><T_1 id="ysrOqg"/></J><input autoCapitalize="characters" autoComplete="off" autoFocus={c.replacing === null} defaultValue={c.replacing ?? ""} maxLength={G_1} placeholder="CRM_API_TOKEN" readOnly={c.replacing !== null} ref={jRef} spellCheck={false} className="sand-1ghz6dp sand-knfcqp sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-jbqb8w sand-jb2p0i sand-11wthnw sand-tyxrsu sand-1h7ufjq"/></label><label className="sand-78zum5 sand-dt5ytf sand-1jnr06f"><J as="span" color="secondary" size="xs"><T_1 id="0tI9Xz"/></J><input autoComplete="off" defaultValue={c.replacing === null ? "" : _.find((z)=>z.name === c.replacing)?.description ?? ""} maxLength={maxLength} ref={vRef} className="sand-1ghz6dp sand-knfcqp sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-jbqb8w sand-jb2p0i sand-11wthnw sand-tyxrsu sand-1h7ufjq"/></label><label className="sand-78zum5 sand-dt5ytf sand-1jnr06f"><J as="span" color="secondary" size="xs"><T_1 id="wMHvYH"/></J><input autoComplete="off" autoFocus={c.replacing !== null} placeholder={__1({
        id: "qNV794"
    })} ref={xRef} spellCheck={false} type="password" className="sand-1ghz6dp sand-knfcqp sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-jbqb8w sand-jb2p0i sand-11wthnw sand-tyxrsu sand-1h7ufjq"/></label>{U !== null ? <J as="p" color="red" role="alert" size="xs">{U}</J> : null}<div className="sand-78zum5 sand-13a6bvl sand-17d4w8g"><Pe1 disabled={u.isPending} onClick={D} size="sm" type="button" variant="secondary"><T_1 id="dEgA5A"/></Pe1><Pe1 disabled={r || u.isPending || c.replacing === null && !C} size="sm" type="submit" variant="primary">{c.replacing === null ? <T_1 id="zNpxuN"/> : <T_1 id="VyryCM"/>}</Pe1></div></form> : null;
    let Q;
    if (e[35] !== u || e[36] !== I || e[37] !== serverId) {
        Q = u.removeFailure !== null || I ? <><J as="p" color="red" role="alert" size="sm"><T_1 id="D2AZQg"/></J>{I ? <Pe1 disabled={u.isPending} onClick={()=>u.refresh(serverId)} size="sm" type="button" variant="secondary"><T_1 id="qJb6G2"/></Pe1> : null}</> : null;
        e[35] = u;
        e[36] = I;
        e[37] = serverId;
        e[38] = Q;
    } else {
        Q = e[38];
    }
    let M;
    if (e[39] !== o || e[40] !== B || e[41] !== X || e[42] !== le || e[43] !== Q || e[44] !== q) {
        M = <section aria-labelledby={o} {...q}>{X}{le}{B}{Q}</section>;
        e[39] = o;
        e[40] = B;
        e[41] = X;
        e[42] = le;
        e[43] = Q;
        e[44] = q;
        e[45] = M;
    } else {
        M = e[45];
    }
    return M;
}
function bt(s) {
    d0(s, {
        tags: {
            sand_area: "grok-bot-team"
        }
    });
}
function Y(s, e, n) {
    function t(o, d) {
        let u;
        Object.defineProperty(o, "_zod", {
            value: o._zod ?? {},
            enumerable: false
        });
        (u = o._zod).traits ?? (u.traits = new Set);
        o._zod.traits.add(s);
        e(o, d);
        for(const c in a.prototype){
            if (!(c in o)) {
                Object.defineProperty(o, c, {
                    value: a.prototype[c].bind(o)
                });
            }
        }
        o._zod.constr = a;
        o._zod.def = d;
    }
    const i = n?.Parent ?? Object;
    class r extends i {
    }
    Object.defineProperty(r, "name", {
        value: s
    });
    function a(o) {
        let d;
        const u = n?.Parent ? new r : this;
        t(u, o);
        (d = u._zod).deferred ?? (d.deferred = []);
        for (const c of u._zod.deferred){
            c();
        }
        return u;
    }
    Object.defineProperty(a, "init", {
        value: t
    });
    Object.defineProperty(a, Symbol.hasInstance, {
        value: (o)=>{
            if (n?.Parent && o instanceof n.Parent) {
                return true;
            }
            return o?._zod?.traits?.has(s);
        }
    });
    Object.defineProperty(a, "name", {
        value: s
    });
    return a;
}
class We extends Error {
    constructor(){
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}
const ss = {};
function Re(s) {
    return ss;
}
function _t(entries) {
    const e = Object.values(entries).filter((t)=>typeof t === "number");
    return Object.entries(entries).filter(([t, i])=>e.indexOf(+t) === -1).map(([t, i])=>i);
}
function kt(s, e) {
    if (typeof e === "bigint") {
        return e.toString();
    }
    return e;
}
function ts(s) {
    return {
        get value () {
            {
                const e = s();
                Object.defineProperty(this, "value", {
                    value: e
                });
                return e;
            }
        }
    };
}
function ls(s) {
    return s == null;
}
function as(source) {
    const e = source.startsWith("^") ? 1 : 0;
    const n = source.endsWith("$") ? source.length - 1 : source.length;
    return source.slice(e, n);
}
function Se(s, e, n) {
    Object.defineProperty(s, e, {
        get () {
            {
                const t = n();
                s[e] = t;
                return t;
            }
        },
        set (t) {
            Object.defineProperty(s, e, {
                value: t
            });
        },
        configurable: true
    });
}
function is(s, e, n) {
    Object.defineProperty(s, e, {
        value: n,
        writable: true,
        enumerable: true,
        configurable: true
    });
}
function qe(s) {
    return JSON.stringify(s);
}
const rs = Error.captureStackTrace ? Error.captureStackTrace : (...s)=>{};
function dn(s) {
    return typeof s === "object" && s !== null && !Array.isArray(s);
}
const wt = ts(()=>{
    if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
        return false;
    }
    try {
        new Function("");
        return true;
    } catch  {
        return false;
    }
});
function St(s) {
    if (dn(s) === false) {
        return false;
    }
    const s_constructor = s.constructor;
    if (s_constructor === undefined) {
        return true;
    }
    const e_prototype = s_constructor.prototype;
    return !(dn(e_prototype) === false || Object.prototype.hasOwnProperty.call(e_prototype, "isPrototypeOf") === false);
}
const zt = new Set([
    "string",
    "number",
    "symbol"
]);
function os(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ct(s, e, n) {
    const t = new s._zod.constr(e ?? s._zod.def);
    if (!e || n?.parent) {
        t._zod.parent = s;
    }
    return t;
}
function ve(s) {
    return {};
}
function It(shape) {
    return Object.keys(shape).filter((e)=>shape[e]._zod.optin === "optional" && shape[e]._zod.optout === "optional");
}
function an(s, e = 0) {
    for(let n = e; n < s.issues.length; n++){
        if (s.issues[n]?.continue !== true) {
            return true;
        }
    }
    return false;
}
function ze(s, issues) {
    return issues.map((n)=>{
        var t;
        (t = n).path ?? (t.path = []);
        n.path.unshift(s);
        return n;
    });
}
function Ze(s) {
    if (typeof s === "string") {
        return s;
    }
    return s?.message;
}
function Ae(s, e, n) {
    const t = {
        ...s,
        path: s.path ?? []
    };
    if (!s.message) {
        const i = Ze(s.inst?._zod.def?.error?.(s)) ?? Ze(e?.error?.(s)) ?? Ze(n.customError?.(s)) ?? Ze(n.localeError?.(s)) ?? "Invalid input";
        t.message = i;
    }
    delete t.inst;
    delete t.continue;
    e?.reportInput || delete t.input;
    return t;
}
function cs(s) {
    if (Array.isArray(s)) {
        return "array";
    }
    if (typeof s === "string") {
        return "string";
    }
    return "unknown";
}
const ds = (s, e)=>{
    s.name = "$ZodError";
    Object.defineProperty(s, "_zod", {
        value: s._zod,
        enumerable: false
    });
    Object.defineProperty(s, "issues", {
        value: e,
        enumerable: false
    });
    Object.defineProperty(s, "message", {
        get () {
            return JSON.stringify(e, kt, 2);
        },
        enumerable: true
    });
    Object.defineProperty(s, "toString", {
        value: ()=>s.message,
        enumerable: false
    });
};
const Tt = Y("$ZodError", ds);
const Qe = Y("$ZodError", ds, {
    Parent: Error
});
const Nt = (s)=>(e, n, t, i)=>{
        const r = t ? Object.assign(t, {
            async: false
        }) : {
            async: false
        };
        const a = e._zod.run({
            value: n,
            issues: []
        }, r);
        if (a instanceof Promise) {
            throw new We;
        }
        if (a.issues.length) {
            const o = new (i?.Err ?? s)(a.issues.map((d)=>Ae(d, r, Re())));
            rs(o, i?.callee);
            throw o;
        }
        return a.value;
    };
const Pt = Nt(Qe);
const $t = (s)=>async (e, n, t, i)=>{
        const r = t ? Object.assign(t, {
            async: true
        }) : {
            async: true
        };
        let a = e._zod.run({
            value: n,
            issues: []
        }, r);
        if (a instanceof Promise) {
            a = await a;
        }
        if (a.issues.length) {
            const o = new (i?.Err ?? s)(a.issues.map((d)=>Ae(d, r, Re())));
            rs(o, i?.callee);
            throw o;
        }
        return a.value;
    };
const Et = $t(Qe);
const Ot = (s)=>(e, n, t)=>{
        const i = t ? {
            ...t,
            async: false
        } : {
            async: false
        };
        const r = e._zod.run({
            value: n,
            issues: []
        }, i);
        if (r instanceof Promise) {
            throw new We;
        }
        if (r.issues.length) {
            return {
                success: false,
                error: new (s ?? Tt)(r.issues.map((a)=>Ae(a, i, Re())))
            };
        }
        return {
            success: true,
            data: r.value
        };
    };
const us = Ot(Qe);
const Rt = (s)=>async (e, n, t)=>{
        const i = t ? Object.assign(t, {
            async: true
        }) : {
            async: true
        };
        let r = e._zod.run({
            value: n,
            issues: []
        }, i);
        if (r instanceof Promise) {
            r = await r;
        }
        if (r.issues.length) {
            return {
                success: false,
                error: new s(r.issues.map((a)=>Ae(a, i, Re())))
            };
        }
        return {
            success: true,
            data: r.value
        };
    };
const ms = Rt(Qe);
const At = (bag)=>{
    const e = bag ? `[\\s\\S]{${bag?.minimum ?? 0},${bag?.maximum ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${e}$`);
};
const xn = Y("$ZodCheck", (s, e)=>{
    var n;
    s._zod ??= {};
    s._zod.def = e;
    (n = s._zod).onattach ?? (n.onattach = []);
});
const qt = Y("$ZodCheckMaxLength", (s, e)=>{
    var n;
    xn.init(s, e);
    (n = s._zod.def).when ?? (n.when = (t)=>{
        const t_value = t.value;
        return !ls(t_value) && t_value.length !== undefined;
    });
    s._zod.onattach.push((t)=>{
        const i = t._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        if (e.maximum < i) {
            t._zod.bag.maximum = e.maximum;
        }
    });
    s._zod.check = (t)=>{
        const t_value = t.value;
        if (t_value.length <= e.maximum) {
            return;
        }
        const a = cs(t_value);
        t.issues.push({
            origin: a,
            code: "too_big",
            maximum: e.maximum,
            inclusive: true,
            input: t_value,
            inst: s,
            continue: !e.abort
        });
    };
});
const Bt = Y("$ZodCheckMinLength", (s, e)=>{
    var n;
    xn.init(s, e);
    (n = s._zod.def).when ?? (n.when = (t)=>{
        const t_value = t.value;
        return !ls(t_value) && t_value.length !== undefined;
    });
    s._zod.onattach.push((t)=>{
        const i = t._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        if (e.minimum > i) {
            t._zod.bag.minimum = e.minimum;
        }
    });
    s._zod.check = (t)=>{
        const t_value = t.value;
        if (t_value.length >= e.minimum) {
            return;
        }
        const a = cs(t_value);
        t.issues.push({
            origin: a,
            code: "too_small",
            minimum: e.minimum,
            inclusive: true,
            input: t_value,
            inst: s,
            continue: !e.abort
        });
    };
});
const Lt = Y("$ZodCheckOverwrite", (s, e)=>{
    xn.init(s, e);
    s._zod.check = (n)=>{
        n.value = e.tx(n.value);
    };
});
class Ft {
    constructor(e = []){
        this.content = [];
        this.indent = 0;
        if (this) {
            this.args = e;
        }
    }
    indented(e) {
        this.indent += 1;
        e(this);
        this.indent -= 1;
    }
    write(e) {
        if (typeof e === "function") {
            e(this, {
                execution: "sync"
            });
            e(this, {
                execution: "async"
            });
            return;
        }
        const t = e.split(`
`).filter((a)=>a);
        const i = Math.min(...t.map((a)=>a.length - a.trimStart().length));
        const r = t.map((a)=>a.slice(i)).map((a)=>" ".repeat(this.indent * 2) + a);
        for (const a of r){
            this.content.push(a);
        }
    }
    compile() {
        const n = this?.args;
        const i = [
            ...(this?.content ?? [
                ""
            ]).map((r)=>`  ${r}`)
        ];
        return new Function(...n, i.join(`
`));
    }
}
const Mt = {
    major: 4,
    minor: 0,
    patch: 0
};
const je = Y("$ZodType", (s, e)=>{
    var n;
    s ??= {};
    s._zod.def = e;
    s._zod.bag = s._zod.bag || {};
    s._zod.version = Mt;
    const t = [
        ...s._zod.def.checks ?? []
    ];
    if (s._zod.traits.has("$ZodCheck")) {
        t.unshift(s);
    }
    for (const i of t){
        for (const r of i._zod.onattach){
            r(s);
        }
    }
    if (t.length === 0) {
        (n = s._zod).deferred ?? (n.deferred = []);
        s._zod.deferred?.push(()=>{
            s._zod.run = s._zod.parse;
        });
    } else {
        const i = (r, a, o)=>{
            let d = an(r);
            let u;
            for (const c of a){
                if (c._zod.def.when) {
                    if (!c._zod.def.when(r)) {
                        continue;
                    }
                } else if (d) {
                    continue;
                }
                const m = r.issues.length;
                const f = c._zod.check(r);
                if (f instanceof Promise && o?.async === false) {
                    throw new We;
                }
                if (u || f instanceof Promise) {
                    u = (u ?? Promise.resolve()).then(async ()=>{
                        await f;
                        r.issues.length !== m && (d || (d = an(r, m)));
                    });
                } else {
                    if (r.issues.length === m) {
                        continue;
                    }
                    if (!d) {
                        d = an(r, m);
                    }
                }
            }
            if (u) {
                return u.then(()=>r);
            }
            return r;
        };
        s._zod.run = (r, a)=>{
            const o = s._zod.parse(r, a);
            if (o instanceof Promise) {
                if (a.async === false) {
                    throw new We;
                }
                return o.then((d)=>i(d, t, a));
            }
            return i(o, t, a);
        };
    }
    s["~standard"] = {
        validate: (i)=>{
            try {
                const r = us(s, i);
                if (r.success) {
                    return {
                        value: r.data
                    };
                }
                return {
                    issues: r.error?.issues
                };
            } catch  {
                return ms(s, i).then((a)=>{
                    if (a.success) {
                        return {
                            value: a.data
                        };
                    }
                    return {
                        issues: a.error?.issues
                    };
                });
            }
        },
        vendor: "zod",
        version: 1
    };
});
const Zt = Y("$ZodString", (s, e)=>{
    je.init(s, e);
    s._zod.pattern = [
        ...s?._zod.bag?.patterns ?? []
    ].pop() ?? At(s._zod.bag);
    s._zod.parse = (n, t)=>{
        if (e.coerce) {
            try {
                n.value = String(n.value);
            } catch  {}
        }
        if (!(typeof n.value === "string")) {
            n.issues.push({
                expected: "string",
                code: "invalid_type",
                input: n.value,
                inst: s
            });
        }
        return n;
    };
});
const Dt = Y("$ZodNever", (s, e)=>{
    je.init(s, e);
    s._zod.parse = (n, t)=>{
        n.issues.push({
            expected: "never",
            code: "invalid_type",
            input: n.value,
            inst: s
        });
        return n;
    };
});
function Rn(s, e, n) {
    if (s.issues.length) {
        e.issues.push(...ze(n, s.issues));
    }
    e.value[n] = s.value;
}
const Vt = Y("$ZodArray", (s, e)=>{
    je.init(s, e);
    s._zod.parse = (n, t)=>{
        const n_value = n.value;
        if (!Array.isArray(n_value)) {
            n.issues.push({
                expected: "array",
                code: "invalid_type",
                input: n_value,
                inst: s
            });
            return n;
        }
        n.value = Array(n_value.length);
        const r = [];
        for(let a = 0; a < n_value.length; a++){
            const o = n_value[a];
            const d = e.element._zod.run({
                value: o,
                issues: []
            }, t);
            if (d instanceof Promise) {
                r.push(d.then((u)=>Rn(u, n, a)));
            } else {
                Rn(d, n, a);
            }
        }
        if (r.length) {
            return Promise.all(r).then(()=>n);
        }
        return n;
    };
});
function De(s, e, n) {
    if (s.issues.length) {
        e.issues.push(...ze(n, s.issues));
    }
    e.value[n] = s.value;
}
function An(s, e, n, t) {
    s.issues.length ? t[n] === undefined ? n in t ? e.value[n] = undefined : e.value[n] = s.value : e.issues.push(...ze(n, s.issues)) : s.value === undefined ? n in t && (e.value[n] = undefined) : e.value[n] = s.value;
}
const Ht = Y("$ZodObject", (s, e)=>{
    je.init(s, e);
    const n = ts(()=>{
        const m = Object.keys(e.shape);
        for (const p of m){
            if (!(e.shape[p] instanceof je)) {
                throw new Error(`Invalid element at key "${p}": expected a Zod schema`);
            }
        }
        const f = It(e.shape);
        return {
            shape: e.shape,
            keys: m,
            keySet: new Set(m),
            numKeys: m.length,
            optionalKeys: new Set(f)
        };
    });
    Se(s._zod, "propValues", ()=>{
        const e_shape = e.shape;
        const f = {};
        for(const p in e_shape){
            const g = e_shape[p]._zod;
            if (g.values) {
                f[p] ?? (f[p] = new Set);
                for (const h of g.values){
                    f[p].add(h);
                }
            }
        }
        return f;
    });
    const t = (shape)=>{
        const f = new Ft([
            "shape",
            "payload",
            "ctx"
        ]);
        const n_value = n.value;
        const g = (j)=>{
            const v = qe(j);
            return `shape[${v}]._zod.run({ value: input[${v}], issues: [] }, ctx)`;
        };
        f.write("const input = payload.value;");
        const h = Object.create(null);
        let y = 0;
        for (const j of n_value.keys){
            h[j] = `key_${y++}`;
        }
        f.write("const newResult = {}");
        for (const j of n_value.keys){
            if (n_value.optionalKeys.has(j)) {
                const v = h[j];
                f.write(`const ${v} = ${g(j)};`);
                const x = qe(j);
                f.write(`
        if (${v}.issues.length) {
          if (input[${x}] === undefined) {
            if (${x} in input) {
              newResult[${x}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${v}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${x}, ...iss.path] : [${x}],
              }))
            );
          }
        } else if (${v}.value === undefined) {
          if (${x} in input) newResult[${x}] = undefined;
        } else {
          newResult[${x}] = ${v}.value;
        }
        `);
            } else {
                const v = h[j];
                f.write(`const ${v} = ${g(j)};`);
                f.write(`
          if (${v}.issues.length) payload.issues = payload.issues.concat(${v}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${qe(j)}, ...iss.path] : [${qe(j)}]
          })));`);
                f.write(`newResult[${qe(j)}] = ${v}.value`);
            }
        }
        f.write("payload.value = newResult;");
        f.write("return payload;");
        const b = f.compile();
        return (j, v)=>b(shape, j, v);
    };
    let i;
    const r = dn;
    const a = !ss.jitless;
    const d = a && wt.value;
    const e_catchall = e.catchall;
    let c;
    s._zod.parse = (m, f)=>{
        c ??= n.value;
        const m_value = m.value;
        if (!r(m_value)) {
            m.issues.push({
                expected: "object",
                code: "invalid_type",
                input: m_value,
                inst: s
            });
            return m;
        }
        const g = [];
        if (a && d && f?.async === false && f.jitless !== true) {
            if (!i) {
                i = t(e.shape);
            }
            m = i(m, f);
        } else {
            m.value = {};
            const v = c.shape;
            for (const x of c.keys){
                const _ = v[x];
                const k = _._zod.run({
                    value: m_value[x],
                    issues: []
                }, f);
                const S = _._zod.optin === "optional" && _._zod.optout === "optional";
                if (k instanceof Promise) {
                    g.push(k.then((T)=>{
                        if (S) {
                            return An(T, m, x, m_value);
                        }
                        return De(T, m, x);
                    }));
                } else if (S) {
                    An(k, m, x, m_value);
                } else {
                    De(k, m, x);
                }
            }
        }
        if (!e_catchall) {
            if (g.length) {
                return Promise.all(g).then(()=>m);
            }
            return m;
        }
        const h = [];
        const c_keySet = c.keySet;
        const e_catchall__zod = e_catchall._zod;
        const type = e_catchall__zod.def.type;
        for (const v of Object.keys(m_value)){
            if (c_keySet.has(v)) {
                continue;
            }
            if (type === "never") {
                h.push(v);
                continue;
            }
            const x = e_catchall__zod.run({
                value: m_value[v],
                issues: []
            }, f);
            if (x instanceof Promise) {
                g.push(x.then((_)=>De(_, m, v)));
            } else {
                De(x, m, v);
            }
        }
        if (h.length) {
            m.issues.push({
                code: "unrecognized_keys",
                keys: h,
                input: m_value,
                inst: s
            });
        }
        if (g.length) {
            return Promise.all(g).then(()=>m);
        }
        return m;
    };
});
function qn(s, e, inst, t) {
    for (const i of s){
        if (i.issues.length === 0) {
            e.value = i.value;
            return e;
        }
    }
    e.issues.push({
        code: "invalid_union",
        input: e.value,
        inst,
        errors: s.map((i)=>i.issues.map((r)=>Ae(r, t, Re())))
    });
    return e;
}
const Ut = Y("$ZodUnion", (s, e)=>{
    je.init(s, e);
    Se(s._zod, "optin", ()=>{
        if (e.options.some((n)=>n._zod.optin === "optional")) {
            return "optional";
        }
    });
    Se(s._zod, "optout", ()=>{
        if (e.options.some((n)=>n._zod.optout === "optional")) {
            return "optional";
        }
    });
    Se(s._zod, "values", ()=>{
        if (e.options.every((n)=>n._zod.values)) {
            return new Set(e.options.flatMap((n)=>Array.from(n._zod.values)));
        }
    });
    Se(s._zod, "pattern", ()=>{
        if (e.options.every((n)=>n._zod.pattern)) {
            const n = e.options.map((t)=>t._zod.pattern);
            return new RegExp(`^(${n.map((t)=>as(t.source)).join("|")})$`);
        }
    });
    s._zod.parse = (n, t)=>{
        let i = false;
        const r = [];
        for (const a of e.options){
            const o = a._zod.run({
                value: n.value,
                issues: []
            }, t);
            if (o instanceof Promise) {
                r.push(o);
                i = true;
            } else {
                if (o.issues.length === 0) {
                    return o;
                }
                r.push(o);
            }
        }
        if (i) {
            return Promise.all(r).then((a)=>qn(a, n, s, t));
        }
        return qn(r, n, s, t);
    };
});
const Gt = Y("$ZodRecord", (s, e)=>{
    je.init(s, e);
    s._zod.parse = (n, t)=>{
        const n_value = n.value;
        if (!St(n_value)) {
            n.issues.push({
                expected: "record",
                code: "invalid_type",
                input: n_value,
                inst: s
            });
            return n;
        }
        const r = [];
        if (e.keyType._zod.values) {
            const a = e.keyType._zod.values;
            n.value = {};
            for (const d of a){
                if (typeof d === "string" || typeof d === "number" || typeof d === "symbol") {
                    const u = e.valueType._zod.run({
                        value: n_value[d],
                        issues: []
                    }, t);
                    if (u instanceof Promise) {
                        r.push(u.then((c)=>{
                            if (c.issues.length) {
                                n.issues.push(...ze(d, c.issues));
                            }
                            n.value[d] = c.value;
                        }));
                    } else {
                        if (u.issues.length) {
                            n.issues.push(...ze(d, u.issues));
                        }
                        n.value[d] = u.value;
                    }
                }
            }
            let o;
            for(const d in n_value){
                if (!a.has(d)) {
                    o = o ?? [];
                    o.push(d);
                }
            }
            if (o && o.length > 0) {
                n.issues.push({
                    code: "unrecognized_keys",
                    input: n_value,
                    inst: s,
                    keys: o
                });
            }
        } else {
            n.value = {};
            for (const a of Reflect.ownKeys(n_value)){
                if (a === "__proto__") {
                    continue;
                }
                const o = e.keyType._zod.run({
                    value: a,
                    issues: []
                }, t);
                if (o instanceof Promise) {
                    throw new Error("Async schemas not supported in object keys currently");
                }
                if (o.issues.length) {
                    n.issues.push({
                        origin: "record",
                        code: "invalid_key",
                        issues: o.issues.map((u)=>Ae(u, t, Re())),
                        input: a,
                        path: [
                            a
                        ],
                        inst: s
                    });
                    n.value[o.value] = o.value;
                    continue;
                }
                const d = e.valueType._zod.run({
                    value: n_value[a],
                    issues: []
                }, t);
                if (d instanceof Promise) {
                    r.push(d.then((u)=>{
                        if (u.issues.length) {
                            n.issues.push(...ze(a, u.issues));
                        }
                        n.value[o.value] = u.value;
                    }));
                } else {
                    if (d.issues.length) {
                        n.issues.push(...ze(a, d.issues));
                    }
                    n.value[o.value] = d.value;
                }
            }
        }
        if (r.length) {
            return Promise.all(r).then(()=>n);
        }
        return n;
    };
});
const Kt = Y("$ZodEnum", (s, e)=>{
    je.init(s, e);
    const values = _t(e.entries);
    s._zod.values = new Set(values);
    s._zod.pattern = new RegExp(`^(${values.filter((t)=>zt.has(typeof t)).map((t)=>{
        if (typeof t === "string") {
            return os(t);
        }
        return t.toString();
    }).join("|")})$`);
    s._zod.parse = (t, i)=>{
        const t_value = t.value;
        if (!s._zod.values.has(t_value)) {
            t.issues.push({
                code: "invalid_value",
                values,
                input: t_value,
                inst: s
            });
        }
        return t;
    };
});
const Wt = Y("$ZodLiteral", (s, e)=>{
    je.init(s, e);
    s._zod.values = new Set(e.values);
    s._zod.pattern = new RegExp(`^(${e.values.map((n)=>{
        if (typeof n === "string") {
            return os(n);
        }
        if (n) {
            return n.toString();
        }
        return String(n);
    }).join("|")})$`);
    s._zod.parse = (n, t)=>{
        const n_value = n.value;
        if (!s._zod.values.has(n_value)) {
            n.issues.push({
                code: "invalid_value",
                values: e.values,
                input: n_value,
                inst: s
            });
        }
        return n;
    };
});
const Jt = Y("$ZodOptional", (s, e)=>{
    je.init(s, e);
    s._zod.optin = "optional";
    s._zod.optout = "optional";
    Se(s._zod, "values", ()=>{
        if (e.innerType._zod.values) {
            return new Set([
                ...e.innerType._zod.values,
                undefined
            ]);
        }
    });
    Se(s._zod, "pattern", ()=>{
        const pattern = e.innerType._zod.pattern;
        if (pattern) {
            return new RegExp(`^(${as(pattern.source)})?$`);
        }
    });
    s._zod.parse = (n, t)=>{
        if (e.innerType._zod.optin === "optional") {
            return e.innerType._zod.run(n, t);
        }
        if (n.value === undefined) {
            return n;
        }
        return e.innerType._zod.run(n, t);
    };
});
function Yt(s, e) {
    return new s({
        type: "string",
        ...ve()
    });
}
function Xt(s, e) {
    return new s({
        type: "never",
        ...ve()
    });
}
function Qt(maximum, e) {
    return new qt({
        check: "max_length",
        ...ve(),
        maximum
    });
}
function el(minimum, e) {
    return new Bt({
        check: "min_length",
        ...ve(),
        minimum
    });
}
function nl(tx) {
    return new Lt({
        check: "overwrite",
        tx
    });
}
function sl() {
    return nl((s)=>s.trim());
}
const _e = Y("ZodMiniType", (s, e)=>{
    if (!s._zod) {
        throw new Error("Uninitialized schema in ZodMiniType.");
    }
    je.init(s, e);
    s.def = e;
    s.parse = (n, t)=>Pt(s, n, t, {
            callee: s.parse
        });
    s.safeParse = (n, t)=>us(s, n, t);
    s.parseAsync = async (n, t)=>Et(s, n, t, {
            callee: s.parseAsync
        });
    s.safeParseAsync = async (n, t)=>ms(s, n, t);
    s.check = (...n)=>s.clone({
            ...e,
            checks: [
                ...e.checks ?? [],
                ...n.map((check)=>{
                    if (typeof check === "function") {
                        return {
                            _zod: {
                                check,
                                def: {
                                    check: "custom"
                                },
                                onattach: []
                            }
                        };
                    }
                    return check;
                })
            ]
        });
    s.clone = (n, t)=>Ct(s, n, t);
    s.brand = ()=>s;
    s.register = (n, t)=>{
        n.add(s, t);
        return s;
    };
});
const tl = Y("ZodMiniString", (s, e)=>{
    Zt.init(s, e);
    _e.init(s, e);
});
function oe(s) {
    return Yt(tl);
}
const ll = Y("ZodMiniNever", (s, e)=>{
    Dt.init(s, e);
    _e.init(s, e);
});
function al(s) {
    return Xt(ll);
}
const il = Y("ZodMiniArray", (s, e)=>{
    Vt.init(s, e);
    _e.init(s, e);
});
function Je(element, e) {
    return new il({
        type: "array",
        element,
        ...ve()
    });
}
const fs = Y("ZodMiniObject", (s, e)=>{
    Ht.init(s, e);
    _e.init(s, e);
    Se(s, "shape", ()=>e.shape);
});
function en(s, e) {
    const n = {
        type: "object",
        get shape () {
            is(this, "shape", {
                ...s
            });
            return this.shape;
        },
        ...ve()
    };
    return new fs(n);
}
function rl(s, e) {
    return new fs({
        type: "object",
        get shape () {
            is(this, "shape", {
                ...s
            });
            return this.shape;
        },
        catchall: al(),
        ...ve()
    });
}
const ol = Y("ZodMiniUnion", (s, e)=>{
    Ut.init(s, e);
    _e.init(s, e);
});
function cl(options, e) {
    return new ol({
        type: "union",
        options,
        ...ve()
    });
}
const dl = Y("ZodMiniRecord", (s, e)=>{
    Gt.init(s, e);
    _e.init(s, e);
});
function bn(keyType, valueType, n) {
    return new dl({
        type: "record",
        keyType,
        valueType,
        ...ve()
    });
}
const ul = Y("ZodMiniEnum", (s, e)=>{
    Kt.init(s, e);
    _e.init(s, e);
});
function Bn(s, e) {
    const entries = Array.isArray(s) ? Object.fromEntries(s.map((t)=>[
            t,
            t
        ])) : s;
    return new ul({
        type: "enum",
        entries,
        ...ve()
    });
}
const ml = Y("ZodMiniLiteral", (s, e)=>{
    Wt.init(s, e);
    _e.init(s, e);
});
function fl(s, e) {
    return new ml({
        type: "literal",
        values: Array.isArray(s) ? s : [
            s
        ],
        ...ve()
    });
}
const pl = Y("ZodMiniOptional", (s, e)=>{
    Jt.init(s, e);
    _e.init(s, e);
});
function fe(innerType) {
    return new pl({
        type: "optional",
        innerType
    });
}
const hl = 128 * 1024;
const gl = en({
    CLIENT_ID: oe(),
    CLIENT_SECRET: fe(oe()),
    scopes: fe(Je(oe()))
});
const yl = rl({
    caBundle: oe().check(sl(), el(1), Qt(hl))
});
const jl = en({
    type: fe(fl("stdio")),
    command: oe(),
    args: fe(Je(oe())),
    env: fe(bn(oe(), oe())),
    envFile: fe(oe()),
    cwd: fe(oe()),
    enabledTools: fe(Je(oe()))
});
const vl = en({
    type: fe(Bn([
        "http",
        "sse"
    ])),
    url: oe(),
    headers: fe(bn(oe(), oe())),
    auth: fe(gl),
    tls: fe(yl),
    placement: fe(Bn([
        "server",
        "client"
    ])),
    enabledTools: fe(Je(oe()))
});
const ps = cl([
    jl,
    vl
]);
en({
    mcpServers: bn(oe(), ps)
});
function xl(s) {
    const e = ps.safeParse(s);
    if (e.success) {
        return e.data;
    }
}
class ye extends Error {
    constructor(e, n){
        super(n);
        this.name = "McpConfigError";
        this.problem = e;
    }
}
const Ye = (s)=>typeof s === "object" && s !== null && !Array.isArray(s);
const bl = (s)=>{
    try {
        return JSON.parse(s);
    } catch  {
        throw new ye("invalid_json", "Config is not valid JSON.");
    }
};
const _l = (s, e)=>{
    const n = xl(e);
    if (n === undefined) {
        throw Ye(e) && e.command === undefined && e.url === undefined ? new ye("no_transport", `Server "${s}" must have either a command or url.`) : new ye("invalid_server", `Invalid configuration for server "${s}".`);
    }
    return n;
};
function kl(auth) {
    if (auth === undefined) {
        return;
    }
    const CLIENT_ID = auth.CLIENT_ID.trim();
    const CLIENT_SECRET = auth.CLIENT_SECRET?.trim() ?? "";
    if (CLIENT_ID === "" && CLIENT_SECRET === "") {
        return;
    }
    const t = {
        ...auth,
        CLIENT_ID,
        CLIENT_SECRET
    };
    CLIENT_SECRET === "" && delete t.CLIENT_SECRET;
    return t;
}
function wl(s) {
    return Object.fromEntries(Object.entries(s).map(([e, n])=>[
            e.trim(),
            n.trim()
        ]).filter(([e, n])=>e !== "" && n !== ""));
}
function Sl(tls) {
    const caBundle = tls?.caBundle.trim();
    if (caBundle) {
        return {
            caBundle
        };
    }
}
const zl = (s)=>Object.fromEntries(Object.entries(s).map(([e, n])=>[
            e.trim(),
            n
        ]).filter(([e])=>e !== ""));
function un(s) {
    if ("command" in s) {
        const args = (s.args ?? []).map((d)=>d.trim()).filter((d)=>d !== "");
        const env = zl(s.env ?? {});
        const o = {
            ...s,
            command: s.command.trim(),
            args,
            env
        };
        args.length === 0 && delete o.args;
        Object.keys(env).length === 0 && delete o.env;
        return o;
    }
    const headers = wl(s.headers ?? {});
    const auth = kl(s.auth);
    const tls = Sl(s.tls);
    const i = {
        ...s,
        url: s.url.trim(),
        headers,
        auth,
        tls
    };
    Object.keys(headers).length === 0 && delete i.headers;
    auth === undefined && delete i.auth;
    tls === undefined && delete i.tls;
    return i;
}
function hs(s, e) {
    if ("command" in e) {
        if (e.command.trim() === "") {
            return new ye("no_transport", "Command is required.");
        }
    } else {
        if (e.url.trim() === "") {
            return new ye("no_transport", "URL is required.");
        }
        if (e.auth !== undefined && e.auth.CLIENT_ID.trim() === "" && (e.auth.CLIENT_SECRET?.trim() ?? "") !== "") {
            return new ye("client_id_required", "Client ID is required when a client secret is set.");
        }
    }
    if (s.trim() === "") {
        return new ye("blank_name", "Server name is required and must be a non-empty string.");
    }
}
const Cl = (s)=>{
    if (!Ye(s) || typeof s.command !== "string" || s.command.trim() !== "" || typeof s.url !== "string" || s.url.trim() === "") {
        return s;
    }
    const e = {
        ...s
    };
    delete e.command;
    e.type === "stdio" && delete e.type;
    return e;
};
function Il(s) {
    const e = bl(s);
    if (!Ye(e)) {
        throw new ye("not_an_object", "Expected a JSON object.");
    }
    const n = Object.keys(e);
    const t = n.length === 1 && n[0] === "mcpServers" && Ye(e.mcpServers) ? e.mcpServers : e;
    const [i, ...r] = Object.entries(t);
    if (i === undefined) {
        throw new ye("no_server", "No server defined.");
    }
    if (r.length > 0) {
        throw new ye("many_servers", "Only one server can be defined.");
    }
    const [a, o] = i;
    return {
        name: a.trim(),
        config: un(_l(a, Cl(o)))
    };
}
const mn = {
    name: "",
    type: "HTTP",
    url: "",
    headers: [],
    clientId: "",
    clientSecret: "",
    command: "",
    args: []
};
const Tl = {
    key: "",
    value: ""
};
function Nl(rows) {
    const e = rows.at(-1);
    if (e != null && e.key === "" && e.value === "") {
        return rows;
    }
    return [
        ...rows,
        Tl
    ];
}
function Pl(values) {
    if (values.at(-1) === "") {
        return values;
    }
    return [
        ...values,
        ""
    ];
}
function $l({ loadedConfig }) {
    if (loadedConfig !== undefined && "url" in loadedConfig) {
        return loadedConfig;
    }
    return {
        url: ""
    };
}
function El({ loadedConfig }) {
    if (loadedConfig !== undefined && "command" in loadedConfig) {
        return loadedConfig;
    }
    return {
        command: ""
    };
}
function _n(s) {
    switch(s.type){
        case "STDIO":
            return un({
                ...El(s),
                command: s.command,
                args: [
                    ...s.args
                ]
            });
        case "HTTP":
            {
                const e = $l(s);
                return un({
                    ...e,
                    url: s.url,
                    headers: Object.fromEntries(s.headers.map((n)=>[
                            n.key,
                            n.value
                        ])),
                    auth: {
                        ...e.auth,
                        CLIENT_ID: s.clientId,
                        CLIENT_SECRET: s.clientSecret
                    }
                });
            }
    }
}
function gs(draft) {
    return hs(draft.name, _n(draft))?.problem;
}
function Ol(draft) {
    return gs(draft) === "client_id_required";
}
function Ln(s) {
    const e = s.name.trim();
    const config = _n(s);
    if (hs(e, config) === undefined) {
        return {
            name: e,
            config
        };
    }
    return null;
}
function ys({ name, config }) {
    if ("command" in config) {
        return {
            ...mn,
            name,
            type: "STDIO",
            command: config.command,
            args: config.args ?? [],
            loadedConfig: config
        };
    }
    return {
        ...mn,
        name,
        type: "HTTP",
        url: config.url,
        headers: Object.entries(config.headers ?? {}).map(([n, t])=>({
                key: n,
                value: t
            })),
        clientId: config.auth?.CLIENT_ID ?? "",
        clientSecret: config.auth?.CLIENT_SECRET ?? "",
        loadedConfig: config
    };
}
function fn({ name, config }) {
    return JSON.stringify({
        mcpServers: {
            [name]: config
        }
    });
}
function Fn(draft) {
    return JSON.stringify({
        [draft.name]: _n(draft)
    }, null, 2);
}
function js(s) {
    try {
        return {
            kind: "ok",
            server: Il(s)
        };
    } catch (error) {
        if (error instanceof ye) {
            return {
                kind: "invalid",
                problem: error.problem
            };
        }
        throw error;
    }
}
function Rl(mcpConfigJson) {
    const e = js(mcpConfigJson);
    if (e.kind === "ok") {
        return e.server;
    }
    return null;
}
function vs(name) {
    return name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function xs(name, plugins) {
    const n = vs(name);
    if (n === "") {
        return "empty_name";
    }
    if (plugins.some((t)=>t.name === n)) {
        return "duplicate_name";
    }
    return null;
}
function Al(s, plugins) {
    const n = xs(s.name, plugins);
    if (n != null) {
        return {
            kind: "invalid",
            problem: n
        };
    }
    return {
        kind: "ok",
        write: {
            kind: "inline",
            name: vs(s.name),
            displayName: s.name.trim(),
            description: "",
            mcpConfigJson: fn(s)
        }
    };
}
const ql = "https://example.com/mcp";
const Bl = "npx";
const Mn = {
    pairInput: {
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        kCS8Yb: "sand-1r8uery",
        k7Eaqz: "sand-euugli",
        $$css: true
    }
};
function Kn1Component(s) {
    Kn1Component.d = 944;
    const e = c_1.c(14);
    const { canSave, host, onCancel, onSave } = s;
    if (host == null) {
        return null;
    }
    let a;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        a = <T_1 id="dEgA5A"/>;
        e[0] = a;
    } else {
        a = e[0];
    }
    let o;
    if (e[1] !== onCancel) {
        o = <x_1.Action onClick={onCancel} variant="secondary">{a}</x_1.Action>;
        e[1] = onCancel;
        e[2] = o;
    } else {
        o = e[2];
    }
    let d;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        d = <x_1.ActionSpacer/>;
        e[3] = d;
    } else {
        d = e[3];
    }
    const u = !canSave;
    let c;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        c = <T_1 id="tfDRzk"/>;
        e[4] = c;
    } else {
        c = e[4];
    }
    let m;
    if (e[5] !== onSave || e[6] !== u) {
        m = <x_1.Action disabled={u} onClick={onSave} variant="primary">{c}</x_1.Action>;
        e[5] = onSave;
        e[6] = u;
        e[7] = m;
    } else {
        m = e[7];
    }
    let f;
    if (e[8] !== o || e[9] !== m) {
        f = <>{o}{d}{m}</>;
        e[8] = o;
        e[9] = m;
        e[10] = f;
    } else {
        f = e[10];
    }
    let p;
    if (e[11] !== host || e[12] !== f) {
        p = R.createPortal(f, host);
        e[11] = host;
        e[12] = f;
        e[13] = p;
    } else {
        p = e[13];
    }
    return p;
}
function Ll(s) {
    if (s.view === "fields") {
        return {
            kind: "draft",
            draft: s.draft
        };
    }
    const e = js(s.text);
    if (e.kind === "ok") {
        return {
            kind: "draft",
            draft: ys(e.server)
        };
    }
    return e;
}
function Fl(s) {
    if (s === "STDIO") {
        return "STDIO";
    }
    return "HTTP";
}
function Ge1Component(s) {
    Ge1Component.d = 943;
    const e = c_1.c(17);
    const { label: label_1, layout, target, children } = s;
    const a = layout === "row";
    let o;
    if (e[0] !== a) {
        o = ({
            0: {
                className: "sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-ygnafs sand-123j3cw sand-87ps6o"
            },
            1: {
                className: "sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-ygnafs sand-87ps6o sand-exx8yu"
            }
        })[!!a << 0];
        e[0] = a;
        e[1] = o;
    } else {
        o = e[1];
    }
    const d = o;
    let u;
    if (e[2] !== label_1) {
        u = <J as="span" color="secondary" size="md">{label_1}</J>;
        e[2] = label_1;
        e[3] = u;
    } else {
        u = e[3];
    }
    const c = u;
    let m;
    if (e[4] !== a) {
        m = ({
            0: {
                className: "sand-78zum5 sand-1cy8zhl sand-1v2ro7d sand-euugli"
            },
            1: {
                className: "sand-78zum5 sand-1v2ro7d sand-euugli sand-6s0dn4"
            }
        })[!!a << 0];
        e[4] = a;
        e[5] = m;
    } else {
        m = e[5];
    }
    let f;
    if (e[6] !== d || e[7] !== target || e[8] !== c) {
        f = "htmlFor" in target ? <label htmlFor={target.htmlFor} {...d}>{c}</label> : <span id={target.labelId} {...d}>{c}</span>;
        e[6] = d;
        e[7] = target;
        e[8] = c;
        e[9] = f;
    } else {
        f = e[9];
    }
    let p;
    if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
        p = {
            className: "sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-17d4w8g sand-euugli"
        };
        e[10] = p;
    } else {
        p = e[10];
    }
    let g;
    if (e[11] !== children) {
        g = <div {...p}>{children}</div>;
        e[11] = children;
        e[12] = g;
    } else {
        g = e[12];
    }
    let h;
    if (e[13] !== m || e[14] !== f || e[15] !== g) {
        h = <div {...m}>{f}{g}</div>;
        e[13] = m;
        e[14] = f;
        e[15] = g;
        e[16] = h;
    } else {
        h = e[16];
    }
    return h;
}
function Nn1Component(s) {
    Nn1Component.d = 950;
    const e = c_1.c(3);
    const { id, children } = s;
    let i;
    if (e[0] !== children || e[1] !== id) {
        i = <J as="p" color="red" id={id} size="sm">{children}</J>;
        e[0] = children;
        e[1] = id;
        e[2] = i;
    } else {
        i = e[2];
    }
    return i;
}
function Wn1Component(s) {
    Wn1Component.d = 949;
    const e = c_1.c(9);
    const { problem, name } = s;
    const { _ } = u_1();
    switch(problem){
        case "empty_name":
            {
                let r;
                if (e[0] !== _) {
                    r = _({
                        id: "AUlCmR"
                    });
                    e[0] = _;
                    e[1] = r;
                } else {
                    r = e[1];
                }
                let a;
                if (e[2] !== r) {
                    a = <>{r}</>;
                    e[2] = r;
                    e[3] = a;
                } else {
                    a = e[3];
                }
                return a;
            }
        case "duplicate_name":
            {
                let r;
                if (e[4] !== _ || e[5] !== name) {
                    r = _({
                        id: "BMJU7y",
                        values: {
                            name
                        }
                    });
                    e[4] = _;
                    e[5] = name;
                    e[6] = r;
                } else {
                    r = e[6];
                }
                let a;
                if (e[7] !== r) {
                    a = <>{r}</>;
                    e[7] = r;
                    e[8] = a;
                } else {
                    a = e[8];
                }
                return a;
            }
    }
}
function SnComponent() {
    SnComponent.d = 940;
    const s = c_1.c(6);
    const { _ } = u_1();
    let n;
    if (s[0] !== _) {
        n = _({
            id: "b9Y4up"
        });
        s[0] = _;
        s[1] = n;
    } else {
        n = s[1];
    }
    let t;
    if (s[2] !== n) {
        t = {
            label: n
        };
        s[2] = n;
        s[3] = t;
    } else {
        t = s[3];
    }
    const i = t;
    let r;
    if (s[4] !== i.label) {
        r = <T_1 id="MbjbEk" values={{
            0: i.label
        }}/>;
        s[4] = i.label;
        s[5] = r;
    } else {
        r = s[5];
    }
    return r;
}
function Pn1Component(s) {
    Pn1Component.d = 947;
    const e = c_1.c(7);
    const { problem } = s;
    switch(problem){
        case "invalid_json":
        case "invalid_server":
            {
                let t;
                if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
                    t = <T_1 id="NjG+x8"/>;
                    e[0] = t;
                } else {
                    t = e[0];
                }
                return t;
            }
        case "not_an_object":
            {
                let t;
                if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
                    t = <T_1 id="ARSuTm"/>;
                    e[1] = t;
                } else {
                    t = e[1];
                }
                return t;
            }
        case "no_server":
            {
                let t;
                if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
                    t = <T_1 id="kMkfSS"/>;
                    e[2] = t;
                } else {
                    t = e[2];
                }
                return t;
            }
        case "many_servers":
            {
                let t;
                if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
                    t = <T_1 id="Q6t+vO"/>;
                    e[3] = t;
                } else {
                    t = e[3];
                }
                return t;
            }
        case "blank_name":
            {
                let t;
                if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
                    t = <T_1 id="Ra3OR9"/>;
                    e[4] = t;
                } else {
                    t = e[4];
                }
                return t;
            }
        case "no_transport":
            {
                let t;
                if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
                    t = <T_1 id="YH8mbG"/>;
                    e[5] = t;
                } else {
                    t = e[5];
                }
                return t;
            }
        case "client_id_required":
            {
                let t;
                if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
                    t = <SnComponent/>;
                    e[6] = t;
                } else {
                    t = e[6];
                }
                return t;
            }
    }
}
function Bs1Component(s) {
    Bs1Component.d = 948;
    const e = c_1.c(14);
    const { rows, labelledBy, onChange } = s;
    const { _ } = u_1();
    let a;
    let o;
    let d;
    let u;
    if (e[0] !== _ || e[1] !== labelledBy || e[2] !== onChange || e[3] !== rows) {
        const m = Nl(rows);
        const f = (p, g)=>{
            onChange(m.map((h, y)=>{
                if (y === p) {
                    return {
                        ...h,
                        ...g
                    };
                }
                return h;
            }));
        };
        a = labelledBy;
        o = "group";
        if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                className: "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-euugli"
            };
            e[8] = d;
        } else {
            d = e[8];
        }
        u = m.map((p, g)=><div key={g} className="sand-78zum5 sand-1qjc9v5 sand-167g77z sand-euugli"><Ne1 rootStyle={Mn.pairInput} size="lg"><Ne1.Input autoComplete="off" onChange={(h)=>f(g, {
                    key: h.currentTarget.value
                })} placeholder={_({
                id: "7sMeHQ"
            })} spellCheck={false} value={p.key}/></Ne1><Ne1 rootStyle={Mn.pairInput} size="lg"><Ne1.Input autoComplete="off" onChange={(h)=>f(g, {
                    value: h.currentTarget.value
                })} placeholder={_({
                id: "wMHvYH"
            })} value={p.value}/></Ne1></div>);
        e[0] = _;
        e[1] = labelledBy;
        e[2] = onChange;
        e[3] = rows;
        e[4] = a;
        e[5] = o;
        e[6] = d;
        e[7] = u;
    } else {
        a = e[4];
        o = e[5];
        d = e[6];
        u = e[7];
    }
    let c;
    if (e[9] !== a || e[10] !== o || e[11] !== d || e[12] !== u) {
        c = <div aria-labelledby={a} role={o} {...d}>{u}</div>;
        e[9] = a;
        e[10] = o;
        e[11] = d;
        e[12] = u;
        e[13] = c;
    } else {
        c = e[13];
    }
    return c;
}
function SComponent(s) {
    SComponent.d = 951;
    const e = c_1.c(14);
    const { values, labelledBy, placeholder, onChange } = s;
    let a;
    let o;
    let d;
    let u;
    if (e[0] !== labelledBy || e[1] !== onChange || e[2] !== placeholder || e[3] !== values) {
        const m = Pl(values);
        const f = (p, g)=>{
            onChange(m.map((h, y)=>{
                if (y === p) {
                    return g;
                }
                return h;
            }));
        };
        a = labelledBy;
        o = "group";
        if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                className: "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-euugli"
            };
            e[8] = d;
        } else {
            d = e[8];
        }
        u = m.map((p, g)=><Ne1 key={g} size="lg"><Ne1.Input autoComplete="off" onChange={(h)=>f(g, h.currentTarget.value)} placeholder={placeholder} spellCheck={false} value={p}/></Ne1>);
        e[0] = labelledBy;
        e[1] = onChange;
        e[2] = placeholder;
        e[3] = values;
        e[4] = a;
        e[5] = o;
        e[6] = d;
        e[7] = u;
    } else {
        a = e[4];
        o = e[5];
        d = e[6];
        u = e[7];
    }
    let c;
    if (e[9] !== a || e[10] !== o || e[11] !== d || e[12] !== u) {
        c = <div aria-labelledby={a} role={o} {...d}>{u}</div>;
        e[9] = a;
        e[10] = o;
        e[11] = d;
        e[12] = u;
        e[13] = c;
    } else {
        c = e[13];
    }
    return c;
}
function Ks1Component(s) {
    Ks1Component.d = 952;
    const e = c_1.c(104);
    const { draft, onChange } = s;
    const { _: __1 } = u_1();
    const r = r_1.useId();
    const a = r_1.useId();
    const o = r_1.useId();
    const d = r_1.useId();
    const u = r_1.useId();
    const c = r_1.useId();
    const m = r_1.useId();
    let f;
    if (e[0] !== draft) {
        f = Ol(draft);
        e[0] = draft;
        e[1] = f;
    } else {
        f = e[1];
    }
    const p = f;
    switch(draft.type){
        case "HTTP":
            {
                let g;
                if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
                    g = <T_1 id="9rG25a"/>;
                    e[2] = g;
                } else {
                    g = e[2];
                }
                let h;
                if (e[3] !== r) {
                    h = {
                        htmlFor: r
                    };
                    e[3] = r;
                    e[4] = h;
                } else {
                    h = e[4];
                }
                let y;
                if (e[5] !== draft || e[6] !== onChange) {
                    y = (H)=>onChange({
                            ...draft,
                            url: H.currentTarget.value
                        });
                    e[5] = draft;
                    e[6] = onChange;
                    e[7] = y;
                } else {
                    y = e[7];
                }
                let b;
                if (e[8] !== draft.url || e[9] !== y || e[10] !== r) {
                    b = <Ne1 size="lg"><Ne1.Input autoComplete="off" id={r} onChange={y} placeholder={ql} spellCheck={false} type="url" value={draft.url}/></Ne1>;
                    e[8] = draft.url;
                    e[9] = y;
                    e[10] = r;
                    e[11] = b;
                } else {
                    b = e[11];
                }
                let j;
                if (e[12] !== h || e[13] !== b) {
                    j = <Ge1Component label={g} layout="row" target={h}>{b}</Ge1Component>;
                    e[12] = h;
                    e[13] = b;
                    e[14] = j;
                } else {
                    j = e[14];
                }
                let v;
                if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
                    v = <T_1 id="VPpyHp"/>;
                    e[15] = v;
                } else {
                    v = e[15];
                }
                let x;
                if (e[16] !== a) {
                    x = {
                        labelId: a
                    };
                    e[16] = a;
                    e[17] = x;
                } else {
                    x = e[17];
                }
                let _;
                if (e[18] !== draft || e[19] !== onChange) {
                    _ = (headers)=>onChange({
                            ...draft,
                            headers
                        });
                    e[18] = draft;
                    e[19] = onChange;
                    e[20] = _;
                } else {
                    _ = e[20];
                }
                let k;
                if (e[21] !== draft.headers || e[22] !== a || e[23] !== _) {
                    k = <Bs1Component labelledBy={a} onChange={_} rows={draft.headers}/>;
                    e[21] = draft.headers;
                    e[22] = a;
                    e[23] = _;
                    e[24] = k;
                } else {
                    k = e[24];
                }
                let S;
                if (e[25] !== k || e[26] !== x) {
                    S = <Ge1Component label={v} layout="stack" target={x}>{k}</Ge1Component>;
                    e[25] = k;
                    e[26] = x;
                    e[27] = S;
                } else {
                    S = e[27];
                }
                let T;
                if (e[28] === Symbol.for("react.memo_cache_sentinel")) {
                    T = <T_1 id="b9Y4up"/>;
                    e[28] = T;
                } else {
                    T = e[28];
                }
                let I;
                if (e[29] !== o) {
                    I = {
                        htmlFor: o
                    };
                    e[29] = o;
                    e[30] = I;
                } else {
                    I = e[30];
                }
                const C = p ? d : undefined;
                const P = p ? true : undefined;
                let N;
                if (e[31] !== draft || e[32] !== onChange) {
                    N = (H)=>onChange({
                            ...draft,
                            clientId: H.currentTarget.value
                        });
                    e[31] = draft;
                    e[32] = onChange;
                    e[33] = N;
                } else {
                    N = e[33];
                }
                let E;
                if (e[34] !== __1) {
                    E = __1({
                        id: "9IZdhX"
                    });
                    e[34] = __1;
                    e[35] = E;
                } else {
                    E = e[35];
                }
                let D;
                if (e[36] !== o || e[37] !== draft.clientId || e[38] !== C || e[39] !== P || e[40] !== N || e[41] !== E) {
                    D = <Ne1 size="lg"><Ne1.Input aria-describedby={C} aria-invalid={P} autoComplete="off" id={o} onChange={N} placeholder={E} value={draft.clientId}/></Ne1>;
                    e[36] = o;
                    e[37] = draft.clientId;
                    e[38] = C;
                    e[39] = P;
                    e[40] = N;
                    e[41] = E;
                    e[42] = D;
                } else {
                    D = e[42];
                }
                let A;
                if (e[43] !== p || e[44] !== d) {
                    A = p ? <Nn1Component id={d}><SnComponent/></Nn1Component> : null;
                    e[43] = p;
                    e[44] = d;
                    e[45] = A;
                } else {
                    A = e[45];
                }
                let U;
                if (e[46] !== I || e[47] !== D || e[48] !== A) {
                    U = <Ge1Component label={T} layout="row" target={I}>{D}{A}</Ge1Component>;
                    e[46] = I;
                    e[47] = D;
                    e[48] = A;
                    e[49] = U;
                } else {
                    U = e[49];
                }
                let B;
                if (e[50] === Symbol.for("react.memo_cache_sentinel")) {
                    B = <T_1 id="Bdj4LI"/>;
                    e[50] = B;
                } else {
                    B = e[50];
                }
                let q;
                if (e[51] !== u) {
                    q = {
                        htmlFor: u
                    };
                    e[51] = u;
                    e[52] = q;
                } else {
                    q = e[52];
                }
                let L;
                if (e[53] !== draft || e[54] !== onChange) {
                    L = (H)=>onChange({
                            ...draft,
                            clientSecret: H.currentTarget.value
                        });
                    e[53] = draft;
                    e[54] = onChange;
                    e[55] = L;
                } else {
                    L = e[55];
                }
                let V;
                if (e[56] !== __1) {
                    V = __1({
                        id: "roPPU9"
                    });
                    e[56] = __1;
                    e[57] = V;
                } else {
                    V = e[57];
                }
                let $;
                if (e[58] !== u || e[59] !== draft.clientSecret || e[60] !== L || e[61] !== V) {
                    $ = <Ne1 size="lg"><Ne1.Input autoComplete="off" id={u} onChange={L} placeholder={V} type="password" value={draft.clientSecret}/></Ne1>;
                    e[58] = u;
                    e[59] = draft.clientSecret;
                    e[60] = L;
                    e[61] = V;
                    e[62] = $;
                } else {
                    $ = e[62];
                }
                let F;
                if (e[63] !== q || e[64] !== $) {
                    F = <Ge1Component label={B} layout="row" target={q}>{$}</Ge1Component>;
                    e[63] = q;
                    e[64] = $;
                    e[65] = F;
                } else {
                    F = e[65];
                }
                let G;
                if (e[66] !== S || e[67] !== U || e[68] !== F || e[69] !== j) {
                    G = <>{j}{S}{U}{F}</>;
                    e[66] = S;
                    e[67] = U;
                    e[68] = F;
                    e[69] = j;
                    e[70] = G;
                } else {
                    G = e[70];
                }
                return G;
            }
        case "STDIO":
            {
                let g;
                if (e[71] === Symbol.for("react.memo_cache_sentinel")) {
                    g = <T_1 id="sjVfrA"/>;
                    e[71] = g;
                } else {
                    g = e[71];
                }
                let h;
                if (e[72] !== c) {
                    h = {
                        htmlFor: c
                    };
                    e[72] = c;
                    e[73] = h;
                } else {
                    h = e[73];
                }
                let y;
                if (e[74] !== draft || e[75] !== onChange) {
                    y = (P)=>onChange({
                            ...draft,
                            command: P.currentTarget.value
                        });
                    e[74] = draft;
                    e[75] = onChange;
                    e[76] = y;
                } else {
                    y = e[76];
                }
                let b;
                if (e[77] !== c || e[78] !== draft.command || e[79] !== y) {
                    b = <Ne1 size="lg"><Ne1.Input autoComplete="off" id={c} onChange={y} placeholder={Bl} spellCheck={false} value={draft.command}/></Ne1>;
                    e[77] = c;
                    e[78] = draft.command;
                    e[79] = y;
                    e[80] = b;
                } else {
                    b = e[80];
                }
                let j;
                if (e[81] !== h || e[82] !== b) {
                    j = <Ge1Component label={g} layout="row" target={h}>{b}</Ge1Component>;
                    e[81] = h;
                    e[82] = b;
                    e[83] = j;
                } else {
                    j = e[83];
                }
                let v;
                if (e[84] === Symbol.for("react.memo_cache_sentinel")) {
                    v = <T_1 id="OgB1k4"/>;
                    e[84] = v;
                } else {
                    v = e[84];
                }
                let x;
                if (e[85] !== m) {
                    x = {
                        labelId: m
                    };
                    e[85] = m;
                    e[86] = x;
                } else {
                    x = e[86];
                }
                let _;
                if (e[87] !== draft || e[88] !== onChange) {
                    _ = (args)=>onChange({
                            ...draft,
                            args
                        });
                    e[87] = draft;
                    e[88] = onChange;
                    e[89] = _;
                } else {
                    _ = e[89];
                }
                let k;
                if (e[90] !== __1) {
                    k = __1({
                        id: "tTh1LD"
                    });
                    e[90] = __1;
                    e[91] = k;
                } else {
                    k = e[91];
                }
                let S;
                if (e[92] !== m || e[93] !== draft.args || e[94] !== k || e[95] !== _) {
                    S = <SComponent labelledBy={m} onChange={_} placeholder={k} values={draft.args}/>;
                    e[92] = m;
                    e[93] = draft.args;
                    e[94] = k;
                    e[95] = _;
                    e[96] = S;
                } else {
                    S = e[96];
                }
                let T;
                if (e[97] !== S || e[98] !== x) {
                    T = <Ge1Component label={v} layout="stack" target={x}>{S}</Ge1Component>;
                    e[97] = S;
                    e[98] = x;
                    e[99] = T;
                } else {
                    T = e[99];
                }
                let I;
                if (e[100] === Symbol.for("react.memo_cache_sentinel")) {
                    I = <J as="p" color="secondary" size="sm"><T_1 id="S6uAcw"/></J>;
                    e[100] = I;
                } else {
                    I = e[100];
                }
                let C;
                if (e[101] !== T || e[102] !== j) {
                    C = <>{j}{T}{I}</>;
                    e[101] = T;
                    e[102] = j;
                    e[103] = C;
                } else {
                    C = e[103];
                }
                return C;
            }
    }
}
function Ws1Component(s) {
    Ws1Component.d = 941;
    const e = c_1.c(43);
    const { autoFocusName, draft, nameLocked, plugins, typeLocked, onChange } = s;
    const { _: __1 } = u_1();
    const u = r_1.useId();
    const c = r_1.useId();
    const m = r_1.useId();
    let f;
    if (e[0] !== draft.name || e[1] !== nameLocked || e[2] !== plugins) {
        f = nameLocked || draft.name.trim() === "" ? null : xs(draft.name, plugins);
        e[0] = draft.name;
        e[1] = nameLocked;
        e[2] = plugins;
        e[3] = f;
    } else {
        f = e[3];
    }
    const p = f;
    let g;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        g = <T_1 id="6YtxFj"/>;
        e[4] = g;
    } else {
        g = e[4];
    }
    let h;
    if (e[5] !== u) {
        h = {
            htmlFor: u
        };
        e[5] = u;
        e[6] = h;
    } else {
        h = e[6];
    }
    const y = p == null ? undefined : c;
    const b = p == null ? undefined : true;
    let j;
    if (e[7] !== draft || e[8] !== onChange) {
        j = (P)=>onChange({
                ...draft,
                name: P.currentTarget.value
            });
        e[7] = draft;
        e[8] = onChange;
        e[9] = j;
    } else {
        j = e[9];
    }
    let v;
    if (e[10] !== __1) {
        v = __1({
            id: "6YtxFj"
        });
        e[10] = __1;
        e[11] = v;
    } else {
        v = e[11];
    }
    let x;
    if (e[12] !== autoFocusName || e[13] !== draft.name || e[14] !== u || e[15] !== y || e[16] !== b || e[17] !== j || e[18] !== v) {
        x = <Ne1.Input aria-describedby={y} aria-invalid={b} autoComplete="off" autoFocus={autoFocusName} id={u} onChange={j} placeholder={v} spellCheck={false} value={draft.name}/>;
        e[12] = autoFocusName;
        e[13] = draft.name;
        e[14] = u;
        e[15] = y;
        e[16] = b;
        e[17] = j;
        e[18] = v;
        e[19] = x;
    } else {
        x = e[19];
    }
    let _;
    if (e[20] !== nameLocked || e[21] !== x) {
        _ = <Ne1 disabled={nameLocked} size="lg">{x}</Ne1>;
        e[20] = nameLocked;
        e[21] = x;
        e[22] = _;
    } else {
        _ = e[22];
    }
    let k;
    if (e[23] !== draft.name || e[24] !== p || e[25] !== c) {
        k = p == null ? null : <Nn1Component id={c}><Wn1Component name={draft.name.trim()} problem={p}/></Nn1Component>;
        e[23] = draft.name;
        e[24] = p;
        e[25] = c;
        e[26] = k;
    } else {
        k = e[26];
    }
    let S;
    if (e[27] !== k || e[28] !== h || e[29] !== _) {
        S = <Ge1Component label={g} layout="row" target={h}>{_}{k}</Ge1Component>;
        e[27] = k;
        e[28] = h;
        e[29] = _;
        e[30] = S;
    } else {
        S = e[30];
    }
    let T;
    if (e[31] !== draft || e[32] !== onChange || e[33] !== m || e[34] !== typeLocked) {
        T = typeLocked ? null : <Ge1Component label=<T_1 id="+zy2Nq"/> layout="row" target={{
            labelId: m
        }}><S_1 aria-labelledby={m} fullWidth onValueChange={(P)=>onChange({
                ...draft,
                type: Fl(P)
            })} size="lg" value={draft.type}><S_1.Item value="HTTP"><T_1 id="fy6XDM"/></S_1.Item><S_1.Item value="STDIO"><T_1 id="sjVfrA"/></S_1.Item></S_1></Ge1Component>;
        e[31] = draft;
        e[32] = onChange;
        e[33] = m;
        e[34] = typeLocked;
        e[35] = T;
    } else {
        T = e[35];
    }
    let I;
    if (e[36] !== draft || e[37] !== onChange) {
        I = <Ks1Component draft={draft} onChange={onChange}/>;
        e[36] = draft;
        e[37] = onChange;
        e[38] = I;
    } else {
        I = e[38];
    }
    let C;
    if (e[39] !== S || e[40] !== T || e[41] !== I) {
        C = <>{S}{T}{I}</>;
        e[39] = S;
        e[40] = T;
        e[41] = I;
        e[42] = C;
    } else {
        C = e[42];
    }
    return C;
}
function MlComponent(s, e) {
    if (s.kind === "invalid") {
        return <Pn1Component problem={s.problem}/>;
    }
    const n = gs(s.draft);
    if (n !== undefined) {
        return <Pn1Component problem={n}/>;
    }
    if (e?.kind === "invalid") {
        return <Wn1Component name={s.draft.name} problem={e.problem}/>;
    }
    return null;
}
function SsComponent(s) {
    SsComponent.d = 946;
    const e = c_1.c(18);
    const { text, problem, onChange } = s;
    const r = r_1.useId();
    const a = r_1.useId();
    let o;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        o = <T_1 id="pyrZbp"/>;
        e[0] = o;
    } else {
        o = e[0];
    }
    let d;
    if (e[1] !== r) {
        d = {
            htmlFor: r
        };
        e[1] = r;
        e[2] = d;
    } else {
        d = e[2];
    }
    const u = problem == null ? undefined : a;
    const c = problem == null ? undefined : true;
    let m;
    if (e[3] !== onChange) {
        m = (h)=>onChange(h.currentTarget.value);
        e[3] = onChange;
        e[4] = m;
    } else {
        m = e[4];
    }
    let f;
    if (e[5] !== u || e[6] !== c || e[7] !== m || e[8] !== text || e[9] !== r) {
        f = <Ne1 layout="textarea" mono size="lg"><Ne1.Textarea aria-describedby={u} aria-invalid={c} autoResize={false} id={r} onChange={m} rows={14} spellCheck={false} value={text}/></Ne1>;
        e[5] = u;
        e[6] = c;
        e[7] = m;
        e[8] = text;
        e[9] = r;
        e[10] = f;
    } else {
        f = e[10];
    }
    let p;
    if (e[11] !== problem || e[12] !== a) {
        p = problem == null ? null : <Nn1Component id={a}>{problem}</Nn1Component>;
        e[11] = problem;
        e[12] = a;
        e[13] = p;
    } else {
        p = e[13];
    }
    let g;
    if (e[14] !== d || e[15] !== f || e[16] !== p) {
        g = <Ge1Component label={o} layout="stack" target={d}>{f}{p}</Ge1Component>;
        e[14] = d;
        e[15] = f;
        e[16] = p;
        e[17] = g;
    } else {
        g = e[17];
    }
    return g;
}
function Zs1Component(s) {
    Zs1Component.d = 942;
    const e = c_1.c(14);
    const { view, onChange } = s;
    const i = r_1.useId();
    let r;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        r = <T_1 id="uBAxNB"/>;
        e[0] = r;
    } else {
        r = e[0];
    }
    let a;
    if (e[1] !== i) {
        a = {
            labelId: i
        };
        e[1] = i;
        e[2] = a;
    } else {
        a = e[2];
    }
    let o;
    if (e[3] !== onChange) {
        o = (f)=>onChange(f === "json" ? "json" : "fields");
        e[3] = onChange;
        e[4] = o;
    } else {
        o = e[4];
    }
    let d;
    if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
        d = <S_1.Item value="fields"><T_1 id="QRAWTO"/></S_1.Item>;
        e[5] = d;
    } else {
        d = e[5];
    }
    let u;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        u = <S_1.Item value="json"><T_1 id="B2Zb/F"/></S_1.Item>;
        e[6] = u;
    } else {
        u = e[6];
    }
    let c;
    if (e[7] !== i || e[8] !== o || e[9] !== view) {
        c = <S_1 aria-labelledby={i} fullWidth onValueChange={o} size="lg" value={view}>{d}{u}</S_1>;
        e[7] = i;
        e[8] = o;
        e[9] = view;
        e[10] = c;
    } else {
        c = e[10];
    }
    let m;
    if (e[11] !== a || e[12] !== c) {
        m = <Ge1Component label={r} layout="row" target={a}>{c}</Ge1Component>;
        e[11] = a;
        e[12] = c;
        e[13] = m;
    } else {
        m = e[13];
    }
    return m;
}
function Sn1Component(s) {
    Sn1Component.d = 945;
    const e = c_1.c(48);
    const { access, dialogActionsHost, onBack, plugin } = s;
    const a = dialogActionsHost === undefined ? null : dialogActionsHost;
    let o;
    if (e[0] !== plugin) {
        const E = plugin?.mcpConfigJson == null ? null : Rl(plugin.mcpConfigJson);
        o = E == null ? null : ys(E);
        e[0] = plugin;
        e[1] = o;
    } else {
        o = e[1];
    }
    const d = o;
    let u;
    if (e[2] !== d) {
        u = ()=>({
                view: "fields",
                draft: d ?? mn
            });
        e[2] = d;
        e[3] = u;
    } else {
        u = e[3];
    }
    const [c, setC] = r_1.useState(u);
    const [f, setF] = r_1.useState(false);
    const g = plugin != null;
    const plugins = access.listing.plugins;
    const y = access.isPending || access.load !== "ready";
    let canSave;
    let j;
    let v;
    let x;
    let _;
    let k;
    let S;
    if (e[4] !== access || e[5] !== c || e[6] !== f || e[7] !== d || e[8] !== g || e[9] !== onBack || e[10] !== plugin || e[11] !== plugins || e[12] !== y) {
        S = Symbol.for("react.early_return_sentinel");
        e: {
            const E = Ll(c);
            const D = E.kind === "draft" ? Ln(E.draft) : null;
            const A = !g && D != null ? Al(D, plugins) : null;
            const U = !y && A?.kind === "ok" ? A.write : null;
            let B;
            if (e[20] !== d) {
                const $ = d == null ? null : Ln(d);
                B = $ == null ? null : fn($);
                e[20] = d;
                e[21] = B;
            } else {
                B = e[21];
            }
            const q = B;
            const L = D == null ? null : fn(D);
            const V = g && !y && L != null && L !== q;
            v = ($)=>{
                if ($ !== c.view) {
                    setF(true);
                    switch(c.view){
                        case "fields":
                            {
                                setC({
                                    view: "json",
                                    draft: c.draft,
                                    text: Fn(c.draft)
                                });
                                return;
                            }
                        case "json":
                            {
                                if (c.text.trim() === "" || c.text === Fn(c.draft)) {
                                    setC({
                                        view: "fields",
                                        draft: c.draft
                                    });
                                } else if (E.kind === "draft") {
                                    setC({
                                        view: "fields",
                                        draft: E.draft
                                    });
                                }
                                return;
                            }
                    }
                }
            };
            j = async ()=>{
                if (plugin != null) {
                    if (L == null || !V) {
                        return;
                    }
                    await access.updateCustom(plugin.pluginId, L);
                    return;
                }
                if (U != null && await access.addCustom(U)) {
                    onBack();
                }
            };
            canSave = g ? V : U != null;
            if (g && d == null) {
                let $;
                if (e[22] === Symbol.for("react.memo_cache_sentinel")) {
                    $ = {
                        className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-h8yej3 sand-euugli sand-11lfxj5"
                    };
                    e[22] = $;
                } else {
                    $ = e[22];
                }
                let F;
                if (e[23] === Symbol.for("react.memo_cache_sentinel")) {
                    F = <div {...$}><J as="p" color="red" role="alert" size="sm"><T_1 id="D2AZQg"/></J></div>;
                    e[23] = F;
                } else {
                    F = e[23];
                }
                S = F;
                break e;
            }
            if (e[24] !== g) {
                k = ({
                    0: {
                        className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-h8yej3 sand-euugli"
                    },
                    1: {
                        className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-h8yej3 sand-euugli sand-11lfxj5"
                    }
                })[!!g << 0];
                e[24] = g;
                e[25] = k;
            } else {
                k = e[25];
            }
            if (e[26] === Symbol.for("react.memo_cache_sentinel")) {
                x = {
                    className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d sand-euugli"
                };
                e[26] = x;
            } else {
                x = e[26];
            }
            _ = c.view === "fields" ? <Ws1Component autoFocusName={!g && !f} draft={c.draft} nameLocked={g} onChange={(draft)=>setC({
                    view: "fields",
                    draft
                })} plugins={plugins} typeLocked={g}/> : <SsComponent onChange={(text)=>setC({
                    ...c,
                    text
                })} problem={MlComponent(E, A)} text={c.text}/>;
        }
        e[4] = access;
        e[5] = c;
        e[6] = f;
        e[7] = d;
        e[8] = g;
        e[9] = onBack;
        e[10] = plugin;
        e[11] = plugins;
        e[12] = y;
        e[13] = canSave;
        e[14] = j;
        e[15] = v;
        e[16] = x;
        e[17] = _;
        e[18] = k;
        e[19] = S;
    } else {
        canSave = e[13];
        j = e[14];
        v = e[15];
        x = e[16];
        _ = e[17];
        k = e[18];
        S = e[19];
    }
    if (S !== Symbol.for("react.early_return_sentinel")) {
        return S;
    }
    let T;
    if (e[27] !== c.view || e[28] !== g || e[29] !== v) {
        T = g ? null : <Zs1Component onChange={v} view={c.view}/>;
        e[27] = c.view;
        e[28] = g;
        e[29] = v;
        e[30] = T;
    } else {
        T = e[30];
    }
    let I;
    if (e[31] !== x || e[32] !== _ || e[33] !== T) {
        I = <div {...x}>{_}{T}</div>;
        e[31] = x;
        e[32] = _;
        e[33] = T;
        e[34] = I;
    } else {
        I = e[34];
    }
    let C;
    if (e[35] !== access) {
        C = <Fe access={access}/>;
        e[35] = access;
        e[36] = C;
    } else {
        C = e[36];
    }
    let P;
    if (e[37] !== canSave || e[38] !== a || e[39] !== g || e[40] !== onBack || e[41] !== j) {
        P = g ? <div className="sand-78zum5 sand-6s0dn4 sand-167g77z"><div className="sand-78zum5 sand-6s0dn4 sand-167g77z sand-vc5jky"><Pe1 onClick={onBack} size="sm" type="button" variant="secondary"><T_1 id="dEgA5A"/></Pe1><Pe1 disabled={!canSave} onClick={()=>{
            j();
        }} size="sm" type="button" variant="primary"><T_1 id="tfDRzk"/></Pe1></div></div> : <Kn1Component canSave={canSave} host={a} onCancel={onBack} onSave={()=>{
            j();
        }}/>;
        e[37] = canSave;
        e[38] = a;
        e[39] = g;
        e[40] = onBack;
        e[41] = j;
        e[42] = P;
    } else {
        P = e[42];
    }
    let N;
    if (e[43] !== C || e[44] !== P || e[45] !== k || e[46] !== I) {
        N = <div {...k}>{I}{C}{P}</div>;
        e[43] = C;
        e[44] = P;
        e[45] = k;
        e[46] = I;
        e[47] = N;
    } else {
        N = e[47];
    }
    return N;
}
const Be = "mcp-servers";
const rn = "secrets";
function CsComponent(s) {
    CsComponent.d = 953;
    const e = c_1.c(25);
    const { access, dialogActionsHost, secrets, onBack } = s;
    const a = dialogActionsHost === undefined ? null : dialogActionsHost;
    const { _: __1 } = u_1();
    const [d, setD] = r_1.useState(Be);
    const c = d === Be;
    let m;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        m = {
            className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-h8yej3 sand-euugli"
        };
        e[0] = m;
    } else {
        m = e[0];
    }
    let f;
    if (e[1] !== __1) {
        f = __1({
            id: "8Tg/JR"
        });
        e[1] = __1;
        e[2] = f;
    } else {
        f = e[2];
    }
    let p;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        p = (T)=>{
            setD(T === rn ? rn : Be);
        };
        e[3] = p;
    } else {
        p = e[3];
    }
    let g;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        g = <S_1.Item value={Be}><T_1 id="JgMRiA"/></S_1.Item>;
        e[4] = g;
    } else {
        g = e[4];
    }
    let h;
    if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
        h = <S_1.Item value={rn}><T_1 id="MAv87s"/></S_1.Item>;
        e[5] = h;
    } else {
        h = e[5];
    }
    let y;
    if (e[6] !== f || e[7] !== d) {
        y = <S_1 aria-label={f} fullWidth onValueChange={p} size="lg" value={d}>{g}{h}</S_1>;
        e[6] = f;
        e[7] = d;
        e[8] = y;
    } else {
        y = e[8];
    }
    const hidden = d !== Be;
    const j = c ? a : null;
    let v;
    if (e[9] !== access || e[10] !== onBack || e[11] !== j) {
        v = <Sn1Component access={access} onBack={onBack} dialogActionsHost={j}/>;
        e[9] = access;
        e[10] = onBack;
        e[11] = j;
        e[12] = v;
    } else {
        v = e[12];
    }
    let x;
    if (e[13] !== v || e[14] !== hidden) {
        x = <div hidden={hidden}>{v}</div>;
        e[13] = v;
        e[14] = hidden;
        e[15] = x;
    } else {
        x = e[15];
    }
    const _ = c ? null : secrets;
    let k;
    if (e[16] !== a || e[17] !== c || e[18] !== onBack) {
        k = c ? null : <Kn1Component canSave={false} host={a} onCancel={onBack} onSave={onSave}/>;
        e[16] = a;
        e[17] = c;
        e[18] = onBack;
        e[19] = k;
    } else {
        k = e[19];
    }
    let S;
    if (e[20] !== x || e[21] !== _ || e[22] !== k || e[23] !== y) {
        S = <div {...m}>{y}{x}{_}{k}</div>;
        e[20] = x;
        e[21] = _;
        e[22] = k;
        e[23] = y;
        e[24] = S;
    } else {
        S = e[24];
    }
    return S;
}
function onSave() {}
const Dl = new Set([
    "CREDENTIAL",
    "CREDENTIALS",
    "KEY",
    "PASSPHRASE",
    "PASSWORD",
    "SECRET",
    "TOKEN"
]);
function zn(s) {
    return s.replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/[^a-z\d]+/gi, "_").toUpperCase().split("_").filter((e)=>e.length > 0).some((e)=>Dl.has(e));
}
function Is(s) {
    return s.split("_").filter((e)=>e.length > 0).map((e)=>{
        if (e.length <= 3) {
            return e;
        }
        return `${e.charAt(0)}${e.slice(1).toLowerCase()}`;
    }).join(" ");
}
function Vl(required) {
    if (Array.isArray(required)) {
        return new Set(required.filter((e)=>typeof e === "string"));
    }
    return new Set;
}
function Hl(s) {
    if (!Array.isArray(s) || s.length === 0) {
        return;
    }
    const e = [];
    for (const n of s){
        if (typeof n === "string" || typeof n === "number" || typeof n === "boolean") {
            e.push({
                label: String(n),
                value: n
            });
        } else {
            return;
        }
    }
    return e;
}
function Ul(type) {
    if (type === "string" || type === "number" || type === "integer" || type === "boolean") {
        return type;
    }
}
function Gl(s, e, required) {
    if (!ji(e)) {
        return;
    }
    const t = Ul(e.type);
    if (t === undefined) {
        return;
    }
    const options = Hl(e.enum);
    if (e.enum !== undefined && options === undefined) {
        return;
    }
    const label = typeof e.title === "string" && e.title.length > 0 ? e.title : Is(s);
    return {
        name: s,
        label,
        required,
        secret: e.writeOnly === true || typeof e.format === "string" && e.format.toLowerCase() === "password" || zn(s),
        type: t,
        ...options !== undefined ? {
            options
        } : {}
    };
}
function Kl(variablesJson) {
    if (variablesJson == null || variablesJson.length === 0) {
        return null;
    }
    const e = jh(variablesJson);
    if (!ji(e) || !ji(e.properties)) {
        return null;
    }
    const n = Vl(e.required);
    const t = [];
    for (const [i, r] of Object.entries(e.properties)){
        const a = Gl(i, r, n.has(i));
        if (a !== undefined) {
            t.push(a);
        }
    }
    if (t.length > 0) {
        return t;
    }
    return null;
}
function Wl(rawValue) {
    const e = jh(rawValue);
    if (typeof e === "string" || typeof e === "number" || typeof e === "boolean") {
        return e;
    }
    return rawValue;
}
function Jl(s) {
    return s.map((e)=>({
            name: e.key,
            label: e.label,
            required: e.isRequired === true,
            secret: e.isSecret === true || zn(e.key),
            type: e.type,
            ...e.options != null ? {
                options: e.options.map((n)=>({
                        label: n.label,
                        value: Wl(n.rawValue)
                    }))
            } : {}
        }));
}
function Yl(variableNames) {
    return variableNames.map((e)=>({
            name: e,
            label: Is(e),
            required: false,
            secret: zn(e),
            type: "string"
        }));
}
function Xl(plugin, e) {
    return Kl(plugin.variablesJson) ?? (e != null && e.length > 0 ? Jl(e) : Yl(plugin.variableNames));
}
function on(fields) {
    const e = {};
    for (const n of fields){
        e[n.name] = n.type === "boolean" ? false : "";
    }
    return e;
}
function Ql(s) {
    if (typeof s === "string") {
        return s.trim().length === 0;
    }
    return s === undefined;
}
function ea(fields, e) {
    return fields.filter((n)=>n.required && n.type !== "boolean" && Ql(e[n.name]));
}
function na(fields, e) {
    const n = {};
    for (const t of fields){
        const i = e[t.name];
        if (t.type === "boolean") {
            if (typeof i === "boolean") {
                n[t.name] = i;
            }
            continue;
        }
        if (typeof i !== "string" || i.trim().length === 0) {
            continue;
        }
        if (t.options != null) {
            const a = t.options[Number(i)];
            if (a !== undefined) {
                n[t.name] = a.value;
            }
            continue;
        }
        if (t.type === "string") {
            n[t.name] = i;
            continue;
        }
        const r = Number(i);
        if (Number.isFinite(r)) {
            n[t.name] = r;
        }
    }
    return n;
}
const Zn = "••••••••";
async function sa(onSave, e) {
    try {
        return {
            saved: await onSave(e)
        };
    } catch (error) {
        d0(error, {
            tags: {
                sand_area: "grok-bot-team"
            }
        });
        return {
            saved: false,
            error
        };
    }
}
const ta = {
    clear: {
        k71WvV: "sand-11t971q",
        $$css: true
    }
};
const Dn = {
    number: "number",
    integer: "number",
    string: "text",
    secret: "password"
};
function TsComponent(s) {
    TsComponent.d = 956;
    const e = c_1.c(72);
    const { fields, hasConfiguredVariables, pluginDisplayName, disabled, onSave } = s;
    const { _: __1 } = u_1();
    const d = r_1.useId();
    let u;
    if (e[0] !== fields) {
        u = ()=>on(fields);
        e[0] = fields;
        e[1] = u;
    } else {
        u = e[1];
    }
    const [c, setC] = r_1.useState(u);
    const [f, setF] = r_1.useState(false);
    const [g, setG] = r_1.useState(false);
    const [y, setY] = r_1.useState(false);
    const j = disabled || f;
    const v = hasConfiguredVariables || y;
    let x;
    let _;
    if (e[2] !== fields || e[3] !== c) {
        x = ea(fields, c);
        _ = new Set(x.map(aa));
        e[2] = fields;
        e[3] = c;
        e[4] = x;
        e[5] = _;
    } else {
        x = e[4];
        _ = e[5];
    }
    const k = _;
    let S;
    if (e[6] !== fields || e[7] !== c) {
        let M;
        if (e[9] !== c) {
            M = (z)=>{
                const R = c[z.name];
                if (z.type === "boolean") {
                    return R !== true;
                }
                return typeof R !== "string" || R.length === 0;
            };
            e[9] = c;
            e[10] = M;
        } else {
            M = e[10];
        }
        S = fields.every(M);
        e[6] = fields;
        e[7] = c;
        e[8] = S;
    } else {
        S = e[8];
    }
    const T = S;
    let I;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        I = (M, z)=>{
            setC((R)=>({
                    ...R,
                    [M]: z
                }));
        };
        e[11] = I;
    } else {
        I = e[11];
    }
    const C = I;
    let P;
    if (e[12] !== fields || e[13] !== onSave) {
        P = (M)=>{
            setF(true);
            (async ()=>{
                if ((await sa(onSave, M)).saved) {
                    setY(Object.keys(M).length > 0);
                    setC(on(fields));
                }
                return setF(false);
            })();
        };
        e[12] = fields;
        e[13] = onSave;
        e[14] = P;
    } else {
        P = e[14];
    }
    const N = P;
    let E;
    if (e[15] !== fields || e[16] !== T || e[17] !== j || e[18] !== x || e[19] !== N || e[20] !== c) {
        E = (M)=>{
            M.preventDefault();
            if (!(j || T)) {
                if (x.length > 0) {
                    setG(true);
                    return;
                }
                setG(false);
                N(na(fields, c));
            }
        };
        e[15] = fields;
        e[16] = T;
        e[17] = j;
        e[18] = x;
        e[19] = N;
        e[20] = c;
        e[21] = E;
    } else {
        E = e[21];
    }
    const D = E;
    let A;
    if (e[22] !== fields || e[23] !== j || e[24] !== N || e[25] !== v) {
        A = ()=>{
            if (!j) {
                setC(on(fields));
                setG(false);
                if (v) {
                    N({});
                }
            }
        };
        e[22] = fields;
        e[23] = j;
        e[24] = N;
        e[25] = v;
        e[26] = A;
    } else {
        A = e[26];
    }
    const U = A;
    let B;
    let q;
    let onSubmit;
    if (e[27] !== __1 || e[28] !== D || e[29] !== pluginDisplayName || e[30] !== v) {
        const M = {
            displayName: pluginDisplayName
        };
        if (e[34] === Symbol.for("react.memo_cache_sentinel")) {
            q = {
                className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
            };
            e[34] = q;
        } else {
            q = e[34];
        }
        onSubmit = D;
        B = v ? <J as="p" color="secondary" size="sm">{__1({
            id: "BbG6WA",
            values: {
                0: M.displayName
            }
        })} <T_1 id="+CwemP"/></J> : null;
        e[27] = __1;
        e[28] = D;
        e[29] = pluginDisplayName;
        e[30] = v;
        e[31] = B;
        e[32] = q;
        e[33] = onSubmit;
    } else {
        B = e[31];
        q = e[32];
        onSubmit = e[33];
    }
    let V;
    if (e[35] === Symbol.for("react.memo_cache_sentinel")) {
        V = {
            className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
        };
        e[35] = V;
    } else {
        V = e[35];
    }
    let $;
    if (e[36] !== __1 || e[37] !== fields || e[38] !== d || e[39] !== j || e[40] !== k || e[41] !== g || e[42] !== v || e[43] !== c) {
        let M;
        if (e[45] !== __1 || e[46] !== d || e[47] !== j || e[48] !== k || e[49] !== g || e[50] !== v || e[51] !== c) {
            M = (z)=>{
                const R = `${d}-${z.name}`;
                const K = c[z.name];
                const te = g && k.has(z.name);
                let ee;
                if (z.type === "boolean") {
                    ee = <input checked={K === true} disabled={j} id={R} onChange={(re)=>C(z.name, re.currentTarget.checked)} type="checkbox" className="sand-qcrz7y sand-1kky2od sand-lup9mm"/>;
                } else if (z.options != null) {
                    ee = <select aria-invalid={te || undefined} disabled={j} id={R} onChange={(re)=>C(z.name, re.currentTarget.value)} value={typeof K === "string" ? K : ""} {...{
                        0: {
                            className: "sand-9f619 sand-10w6t97 sand-t970qd sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-1tiofj7 sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1h7ufjq"
                        },
                        1: {
                            className: "sand-9f619 sand-10w6t97 sand-t970qd sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-1qmwy7c sand-1a2a7pz sand-1tiofj7 sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1h7ufjq sand-14g0ujm"
                        }
                    }[!!te << 0]}><option value="">{v ? Zn : __1({
                        id: "02ePaq",
                        values: {
                            0: z.label
                        }
                    })}</option>{z.options.map(LaComponent)}</select>;
                } else {
                    let re = Dn[z.type];
                    if (z.type === "string" && z.secret) {
                        re = Dn.secret;
                    }
                    ee = <input aria-invalid={te || undefined} disabled={j} id={R} onChange={(he)=>C(z.name, he.currentTarget.value)} placeholder={v ? Zn : undefined} spellCheck={false} type={re} value={typeof K === "string" ? K : ""} {...{
                        0: {
                            className: "sand-9f619 sand-10w6t97 sand-t970qd sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-1tiofj7 sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1h7ufjq"
                        },
                        1: {
                            className: "sand-9f619 sand-10w6t97 sand-t970qd sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-1qmwy7c sand-1a2a7pz sand-1tiofj7 sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1h7ufjq sand-14g0ujm"
                        }
                    }[!!te << 0]}/>;
                }
                return <div key={z.name} className="sand-78zum5 sand-dt5ytf sand-17d4w8g"><label htmlFor={R} className="sand-78zum5 sand-6s0dn4 sand-1jnr06f sand-11wthnw sand-d4r4e8 sand-tyxrsu"><span>{z.label}</span>{z.required ? null : <span className="sand-169k319"><T_1 id="WyGyYp"/></span>}</label>{ee}{te ? <p className="sand-1ghz6dp sand-1wm8ruf sand-1d3mw78 sand-6rl5ky"><T_1 id="MbjbEk" values={{
                    0: z.label
                }}/></p> : null}</div>;
            };
            e[45] = __1;
            e[46] = d;
            e[47] = j;
            e[48] = k;
            e[49] = g;
            e[50] = v;
            e[51] = c;
            e[52] = M;
        } else {
            M = e[52];
        }
        $ = fields.map(M);
        e[36] = __1;
        e[37] = fields;
        e[38] = d;
        e[39] = j;
        e[40] = k;
        e[41] = g;
        e[42] = v;
        e[43] = c;
        e[44] = $;
    } else {
        $ = e[44];
    }
    let F;
    if (e[53] !== $) {
        F = <div {...V}>{$}</div>;
        e[53] = $;
        e[54] = F;
    } else {
        F = e[54];
    }
    let G;
    if (e[55] === Symbol.for("react.memo_cache_sentinel")) {
        G = {
            className: "sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-167g77z"
        };
        e[55] = G;
    } else {
        G = e[55];
    }
    const H = j || !v && T;
    let se;
    if (e[56] === Symbol.for("react.memo_cache_sentinel")) {
        se = <T_1 id="xCJdfg"/>;
        e[56] = se;
    } else {
        se = e[56];
    }
    let W;
    if (e[57] !== U || e[58] !== H) {
        W = <Pe1 disabled={H} onClick={U} rootStyle={ta.clear} size="sm" type="button" variant="text">{se}</Pe1>;
        e[57] = U;
        e[58] = H;
        e[59] = W;
    } else {
        W = e[59];
    }
    const ae = j || T;
    let ie;
    if (e[60] === Symbol.for("react.memo_cache_sentinel")) {
        ie = <T_1 id="tfDRzk"/>;
        e[60] = ie;
    } else {
        ie = e[60];
    }
    let X;
    if (e[61] !== ae) {
        X = <Pe1 disabled={ae} size="sm" type="submit" variant="primary">{ie}</Pe1>;
        e[61] = ae;
        e[62] = X;
    } else {
        X = e[62];
    }
    let le;
    if (e[63] !== W || e[64] !== X) {
        le = <div {...G}>{W}{X}</div>;
        e[63] = W;
        e[64] = X;
        e[65] = le;
    } else {
        le = e[65];
    }
    let Q;
    if (e[66] !== B || e[67] !== F || e[68] !== le || e[69] !== q || e[70] !== onSubmit) {
        Q = <form {...q} onSubmit={onSubmit}>{B}{F}{le}</form>;
        e[66] = B;
        e[67] = F;
        e[68] = le;
        e[69] = q;
        e[70] = onSubmit;
        e[71] = Q;
    } else {
        Q = e[71];
    }
    return Q;
}
function LaComponent(s, e) {
    return <option key={`${s.label}:${String(s.value)}`} value={String(e)}>{s.label}</option>;
}
function aa(s) {
    return s.name;
}
const Cn = {
    detailDescription: {
        ks0D6T: "sand-193iq5w",
        kHjlTd: "sand-j0a0fe",
        $$css: true
    }
};
function NsComponent(s) {
    NsComponent.d = 964;
    const e = c_1.c(4);
    const { name } = s;
    let t;
    let i;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        t = {
            className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-1useyqa sand-sdox4t sand-hojbe8 sand-1tiofj7 sand-1o0liin sand-b3r6kr"
        };
        i = <W name="key" size="base"/>;
        e[0] = t;
        e[1] = i;
    } else {
        t = e[0];
        i = e[1];
    }
    let r;
    if (e[2] !== name) {
        r = <span aria-label={name} role="img" {...t}>{i}</span>;
        e[2] = name;
        e[3] = r;
    } else {
        r = e[3];
    }
    return r;
}
function InComponent(s) {
    InComponent.d = 961;
    const e = c_1.c(6);
    const { name, iconUrl } = s;
    let i;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        i = {
            className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-1useyqa sand-sdox4t sand-hojbe8 sand-1tiofj7 sand-1o0liin sand-b3r6kr"
        };
        e[0] = i;
    } else {
        i = e[0];
    }
    let r;
    if (e[1] !== iconUrl) {
        r = iconUrl == null || iconUrl.length === 0 ? <W name="plug" size="base"/> : <img alt="" src={iconUrl} className="sand-h8yej3 sand-5yr21d sand-l1xv1r"/>;
        e[1] = iconUrl;
        e[2] = r;
    } else {
        r = e[2];
    }
    let a;
    if (e[3] !== name || e[4] !== r) {
        a = <span aria-label={name} role="img" {...i}>{r}</span>;
        e[3] = name;
        e[4] = r;
        e[5] = a;
    } else {
        a = e[5];
    }
    return a;
}
function Ps(plugin, e) {
    if (e?.skills != null && e.skills.length > 0) {
        return e.skills;
    }
    return plugin.skills.map((n)=>({
            name: n.name,
            description: n.description
        }));
}
function TnComponent(s) {
    TnComponent.d = 965;
    const e = c_1.c(13);
    const { skills, onOpen } = s;
    const { _ } = u_1();
    if (skills.length === 0) {
        return null;
    }
    let r;
    if (e[0] !== _ || e[1] !== skills.length) {
        r = _({
            id: "nXrLxC",
            values: {
                0: skills.length
            }
        });
        e[0] = _;
        e[1] = skills.length;
        e[2] = r;
    } else {
        r = e[2];
    }
    const a = r;
    let o;
    let d;
    let u;
    let c;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        o = {
            className: "sand-14vqqas"
        };
        d = <p className="sand-1ghz6dp sand-zueoph sand-169k319 sand-1wm8ruf sand-1d3mw78"><T_1 id="PCSkw2"/></p>;
        u = {
            className: "sand-hojbe8 sand-1tiofj7 sand-b3r6kr"
        };
        c = {
            className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-1qughib sand-1v2ro7d sand-h8yej3 sand-1xn8qrt sand-aope02 sand-ng3xce sand-jbqb8w sand-tyxrsu sand-jb2p0i sand-11wthnw sand-d4r4e8 sand-1yc453h sand-1ypdohk"
        };
        e[3] = o;
        e[4] = d;
        e[5] = u;
        e[6] = c;
    } else {
        o = e[3];
        d = e[4];
        u = e[5];
        c = e[6];
    }
    let m;
    if (e[7] !== a) {
        m = <span>{a}</span>;
        e[7] = a;
        e[8] = m;
    } else {
        m = e[8];
    }
    let f;
    if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
        f = <span aria-hidden className="sand-3nfvp2 sand-169k319"><W name="chevron-right" size="xs"/></span>;
        e[9] = f;
    } else {
        f = e[9];
    }
    let p;
    if (e[10] !== onOpen || e[11] !== m) {
        p = <div {...o}>{d}<div {...u}><button {...c} onClick={onOpen} type="button">{m}{f}</button></div></div>;
        e[10] = onOpen;
        e[11] = m;
        e[12] = p;
    } else {
        p = e[12];
    }
    return p;
}
function Hn1Component(s) {
    Hn1Component.d = 962;
    const e = c_1.c(6);
    const { skills } = s;
    let t;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        t = {
            className: "sand-78zum5 sand-dt5ytf sand-1c1vhfx sand-h8yej3 sand-euugli sand-11lfxj5"
        };
        e[0] = t;
    } else {
        t = e[0];
    }
    let i;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        i = <J as="h3" size="lg" weight="medium"><T_1 id="PCSkw2"/></J>;
        e[1] = i;
    } else {
        i = e[1];
    }
    let r;
    if (e[2] !== skills) {
        r = skills.length === 0 ? null : <ul className="sand-78zum5 sand-dt5ytf sand-1ghz6dp sand-1717udv sand-3ct3a4 sand-hojbe8 sand-1tiofj7 sand-b3r6kr">{skills.map(IaComponent)}</ul>;
        e[2] = skills;
        e[3] = r;
    } else {
        r = e[3];
    }
    let a;
    if (e[4] !== r) {
        a = <div {...t}>{i}{r}</div>;
        e[4] = r;
        e[5] = a;
    } else {
        a = e[5];
    }
    return a;
}
function IaComponent(s) {
    return <li key={s.name} className="sand-rvj5dj sand-jvrg09 sand-ou54vl sand-p59q4u sand-aope02"><span>{s.name}</span><span className="sand-169k319 sand-p4054r">{s.description}</span></li>;
}
function NnComponent(s) {
    NnComponent.d = 958;
    const e = c_1.c(9);
    const { connectorType } = s;
    const { _ } = u_1();
    let i;
    if (e[0] !== _ || e[1] !== connectorType) {
        i = _(connectorType === "team" ? {
            id: "auMtyx"
        } : {
            id: "Hj4RAZ"
        });
        e[0] = _;
        e[1] = connectorType;
        e[2] = i;
    } else {
        i = e[2];
    }
    const content = i;
    let a;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        a = {
            className: "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-splgde sand-1xijbu4 sand-149ho13 sand-1tiofj7 sand-169k319 sand-1wm8ruf sand-1d3mw78 sand-uxw1ft sand-t0e3qv"
        };
        e[3] = a;
    } else {
        a = e[3];
    }
    let o;
    if (e[4] !== connectorType) {
        o = <span {...a}>{connectorType === "team" ? <T_1 id="KM6m8p"/> : <T_1 id="7PzzBU"/>}</span>;
        e[4] = connectorType;
        e[5] = o;
    } else {
        o = e[5];
    }
    let d;
    if (e[6] !== content || e[7] !== o) {
        d = <At1 content={content} openDelay={0}>{o}</At1>;
        e[6] = content;
        e[7] = o;
        e[8] = d;
    } else {
        d = e[8];
    }
    return d;
}
function Gn1Component(s) {
    Gn1Component.d = 960;
    const e = c_1.c(49);
    const { plugin, access, onBack, onOpenSkills } = s;
    let fields;
    let iconUrl;
    let d;
    let u;
    let c;
    if (e[0] !== access.catalog || e[1] !== access.isPending || e[2] !== access.load || e[3] !== plugin) {
        let C;
        if (e[9] !== plugin) {
            C = (N)=>cE(plugin, N);
            e[9] = plugin;
            e[10] = C;
        } else {
            C = e[10];
        }
        const P = access.catalog.find(C);
        iconUrl = P?.iconUrl ?? plugin.logoUrl;
        u = bN(plugin, P);
        c = access.isPending || access.load !== "ready";
        fields = Xl(plugin, P?.fields);
        d = Ps(plugin, P);
        e[0] = access.catalog;
        e[1] = access.isPending;
        e[2] = access.load;
        e[3] = plugin;
        e[4] = fields;
        e[5] = iconUrl;
        e[6] = d;
        e[7] = u;
        e[8] = c;
    } else {
        fields = e[4];
        iconUrl = e[5];
        d = e[6];
        u = e[7];
        c = e[8];
    }
    const m = d;
    let f;
    let p;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        f = {
            className: "sand-78zum5 sand-dt5ytf sand-1c1vhfx sand-h8yej3 sand-euugli sand-11lfxj5"
        };
        p = {
            className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-euugli"
        };
        e[11] = f;
        e[12] = p;
    } else {
        f = e[11];
        p = e[12];
    }
    let g;
    if (e[13] !== iconUrl || e[14] !== u) {
        g = <InComponent iconUrl={iconUrl} name={u}/>;
        e[13] = iconUrl;
        e[14] = u;
        e[15] = g;
    } else {
        g = e[15];
    }
    let h;
    let y;
    if (e[16] === Symbol.for("react.memo_cache_sentinel")) {
        h = {
            className: "sand-78zum5 sand-dt5ytf sand-1ed6fcf sand-1iyjqo2 sand-euugli"
        };
        y = {
            className: "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-167g77z sand-euugli"
        };
        e[16] = h;
        e[17] = y;
    } else {
        h = e[16];
        y = e[17];
    }
    let b;
    if (e[18] !== u) {
        b = <J as="h3" size="lg" weight="medium">{u}</J>;
        e[18] = u;
        e[19] = b;
    } else {
        b = e[19];
    }
    let j;
    if (e[20] !== plugin.connectorType) {
        j = <NnComponent connectorType={plugin.connectorType}/>;
        e[20] = plugin.connectorType;
        e[21] = j;
    } else {
        j = e[21];
    }
    let v;
    if (e[22] !== b || e[23] !== j) {
        v = <div {...h}><div {...y}>{b}{j}</div></div>;
        e[22] = b;
        e[23] = j;
        e[24] = v;
    } else {
        v = e[24];
    }
    let x;
    if (e[25] === Symbol.for("react.memo_cache_sentinel")) {
        x = {
            className: "sand-78zum5 sand-6s0dn4 sand-2lah0s sand-1a02dak sand-13a6bvl sand-167g77z sand-vc5jky"
        };
        e[25] = x;
    } else {
        x = e[25];
    }
    let onRemove;
    if (e[26] !== access || e[27] !== plugin.pluginId) {
        onRemove = ()=>access.remove(plugin.pluginId);
        e[26] = access;
        e[27] = plugin.pluginId;
        e[28] = onRemove;
    } else {
        onRemove = e[28];
    }
    let k;
    if (e[29] !== onRemove || e[30] !== u || e[31] !== c) {
        k = <div {...x}><Xe disabled={c} name={u} onRemove={onRemove}/></div>;
        e[29] = onRemove;
        e[30] = u;
        e[31] = c;
        e[32] = k;
    } else {
        k = e[32];
    }
    let S;
    if (e[33] !== k || e[34] !== g || e[35] !== v) {
        S = <div {...p}>{g}{v}{k}</div>;
        e[33] = k;
        e[34] = g;
        e[35] = v;
        e[36] = S;
    } else {
        S = e[36];
    }
    let T;
    if (e[37] !== access || e[38] !== fields || e[39] !== onBack || e[40] !== onOpenSkills || e[41] !== plugin || e[42] !== m || e[43] !== u || e[44] !== c) {
        T = plugin.mcpConfigJson != null ? <Sn1Component access={access} onBack={onBack} plugin={plugin}/> : <>{plugin.description.length > 0 ? <J as="p" color="secondary" rootStyle={Cn.detailDescription} size="md">{plugin.description}</J> : null}{fields.length > 0 ? <div className="sand-78zum5 sand-dt5ytf sand-167g77z sand-10dr8xq sand-aope02 sand-hojbe8 sand-1tiofj7"><J as="span" size="sm" weight="semibold"><T_1 id="gpmbqk"/></J><TsComponent disabled={c} fields={fields} hasConfiguredVariables={plugin.hasConfiguredVariables === true} onSave={(C)=>access.configure(plugin.pluginId, C)} pluginDisplayName={u}/><Fe access={access}/></div> : <Fe access={access}/>}<TnComponent onOpen={onOpenSkills} skills={m}/></>;
        e[37] = access;
        e[38] = fields;
        e[39] = onBack;
        e[40] = onOpenSkills;
        e[41] = plugin;
        e[42] = m;
        e[43] = u;
        e[44] = c;
        e[45] = T;
    } else {
        T = e[45];
    }
    let I;
    if (e[46] !== S || e[47] !== T) {
        I = <div {...f}>{S}{T}</div>;
        e[46] = S;
        e[47] = T;
        e[48] = I;
    } else {
        I = e[48];
    }
    return I;
}
function $s(s) {
    $s.d = 957;
    const e = c_1.c(40);
    const { entry, access, isAdded, onOpenSkills } = s;
    const a = access.isPending || access.load !== "ready";
    let o;
    let d;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        o = {
            className: "sand-78zum5 sand-dt5ytf sand-1c1vhfx sand-h8yej3 sand-euugli sand-11lfxj5"
        };
        d = {
            className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-euugli"
        };
        e[0] = o;
        e[1] = d;
    } else {
        o = e[0];
        d = e[1];
    }
    let u;
    if (e[2] !== entry.displayName || e[3] !== entry.iconUrl) {
        u = <InComponent iconUrl={entry.iconUrl} name={entry.displayName}/>;
        e[2] = entry.displayName;
        e[3] = entry.iconUrl;
        e[4] = u;
    } else {
        u = e[4];
    }
    let c;
    let m;
    if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
        c = {
            className: "sand-78zum5 sand-dt5ytf sand-1ed6fcf sand-1iyjqo2 sand-euugli"
        };
        m = {
            className: "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-167g77z sand-euugli"
        };
        e[5] = c;
        e[6] = m;
    } else {
        c = e[5];
        m = e[6];
    }
    let f;
    if (e[7] !== entry.displayName) {
        f = <J as="h3" size="lg" weight="medium">{entry.displayName}</J>;
        e[7] = entry.displayName;
        e[8] = f;
    } else {
        f = e[8];
    }
    let connectorType;
    if (e[9] !== entry) {
        connectorType = cD(entry);
        e[9] = entry;
        e[10] = connectorType;
    } else {
        connectorType = e[10];
    }
    let g;
    if (e[11] !== connectorType) {
        g = <NnComponent connectorType={connectorType}/>;
        e[11] = connectorType;
        e[12] = g;
    } else {
        g = e[12];
    }
    let h;
    if (e[13] !== f || e[14] !== g) {
        h = <div {...c}><div {...m}>{f}{g}</div></div>;
        e[13] = f;
        e[14] = g;
        e[15] = h;
    } else {
        h = e[15];
    }
    let y;
    if (e[16] === Symbol.for("react.memo_cache_sentinel")) {
        y = {
            className: "sand-78zum5 sand-6s0dn4 sand-2lah0s sand-1a02dak sand-13a6bvl sand-167g77z sand-vc5jky"
        };
        e[16] = y;
    } else {
        y = e[16];
    }
    let b;
    if (e[17] !== access || e[18] !== entry || e[19] !== isAdded || e[20] !== a) {
        b = <div {...y}>{isAdded ? <Xe name={entry.displayName} readOnly/> : <Es1 disabled={a} name={entry.displayName} onAdd={()=>access.add(entry)}/>}</div>;
        e[17] = access;
        e[18] = entry;
        e[19] = isAdded;
        e[20] = a;
        e[21] = b;
    } else {
        b = e[21];
    }
    let j;
    if (e[22] !== b || e[23] !== u || e[24] !== h) {
        j = <div {...d}>{u}{h}{b}</div>;
        e[22] = b;
        e[23] = u;
        e[24] = h;
        e[25] = j;
    } else {
        j = e[25];
    }
    let v;
    if (e[26] !== entry.description) {
        v = entry.description.length > 0 ? <J as="p" color="secondary" rootStyle={Cn.detailDescription} size="md">{entry.description}</J> : null;
        e[26] = entry.description;
        e[27] = v;
    } else {
        v = e[27];
    }
    let x;
    if (e[28] !== entry.skills) {
        x = entry.skills ?? [];
        e[28] = entry.skills;
        e[29] = x;
    } else {
        x = e[29];
    }
    let _;
    if (e[30] !== onOpenSkills || e[31] !== x) {
        _ = <TnComponent onOpen={onOpenSkills} skills={x}/>;
        e[30] = onOpenSkills;
        e[31] = x;
        e[32] = _;
    } else {
        _ = e[32];
    }
    let k;
    if (e[33] !== access) {
        k = <Fe access={access}/>;
        e[33] = access;
        e[34] = k;
    } else {
        k = e[34];
    }
    let S;
    if (e[35] !== j || e[36] !== v || e[37] !== _ || e[38] !== k) {
        S = <div {...o}>{j}{v}{_}{k}</div>;
        e[35] = j;
        e[36] = v;
        e[37] = _;
        e[38] = k;
        e[39] = S;
    } else {
        S = e[39];
    }
    return S;
}
function EsComponent(s) {
    EsComponent.d = 963;
    const e = c_1.c(55);
    const { secret, installedSecrets } = s;
    const { _: __1 } = u_1();
    const [r, setR] = r_1.useState(false);
    const [o, setO] = r_1.useState(null);
    const uRef = r_1.useRef(null);
    const cRef = r_1.useRef(null);
    const installedSecrets_isPending = installedSecrets.isPending;
    let f;
    if (e[0] !== __1) {
        f = (G)=>{
            switch(G.kind){
                case "empty":
                    return __1({
                        id: "qNV794"
                    });
                case "short":
                    return __1({
                        id: "Cr5BJv",
                        values: {
                            GROK_BOT_SECRET_VALUE_MIN_LENGTH
                        }
                    });
                case "long":
                    return __1({
                        id: "jTBLMU",
                        values: {
                            GROK_BOT_SECRET_VALUE_MAX_KIB: c_2
                        }
                    });
            }
        };
        e[0] = __1;
        e[1] = f;
    } else {
        f = e[1];
    }
    const p = f;
    let g;
    if (e[2] !== __1 || e[3] !== p || e[4] !== installedSecrets || e[5] !== secret.name || e[6] !== installedSecrets_isPending) {
        g = async (G)=>{
            G.preventDefault();
            if (installedSecrets_isPending) {
                return;
            }
            const H = (cRef.current?.value ?? "").trim();
            const se = uRef.current?.value.trim() ?? "";
            const W = b_1(H);
            if (W !== null) {
                setO(p(W));
                return;
            }
            setO(null);
            if (!await installedSecrets.replace({
                name: secret.name,
                description: se,
                value: H
            })) {
                setO(__1({
                    id: "JUpeyb"
                }));
                return;
            }
            if (cRef.current != null && cRef.current.isConnected) {
                cRef.current.value = "";
            }
            setR(false);
        };
        e[2] = __1;
        e[3] = p;
        e[4] = installedSecrets;
        e[5] = secret.name;
        e[6] = installedSecrets_isPending;
        e[7] = g;
    } else {
        g = e[7];
    }
    const h = g;
    let y;
    let b;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        y = {
            className: "sand-78zum5 sand-dt5ytf sand-1c1vhfx sand-h8yej3 sand-euugli sand-11lfxj5"
        };
        b = {
            className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-euugli"
        };
        e[8] = y;
        e[9] = b;
    } else {
        y = e[8];
        b = e[9];
    }
    let j;
    if (e[10] !== secret.name) {
        j = <NsComponent name={secret.name}/>;
        e[10] = secret.name;
        e[11] = j;
    } else {
        j = e[11];
    }
    let v;
    let x;
    if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
        v = {
            className: "sand-78zum5 sand-dt5ytf sand-1ed6fcf sand-1iyjqo2 sand-euugli"
        };
        x = {
            className: "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-167g77z sand-euugli"
        };
        e[12] = v;
        e[13] = x;
    } else {
        v = e[12];
        x = e[13];
    }
    let _;
    if (e[14] !== secret.name) {
        _ = <J as="h3" size="lg" weight="medium">{secret.name}</J>;
        e[14] = secret.name;
        e[15] = _;
    } else {
        _ = e[15];
    }
    let k;
    if (e[16] === Symbol.for("react.memo_cache_sentinel")) {
        k = <J as="span" color="tertiary" size="sm"><T_1 id="8VEDbV"/></J>;
        e[16] = k;
    } else {
        k = e[16];
    }
    let S;
    if (e[17] !== _) {
        S = <div {...x}>{_}{k}</div>;
        e[17] = _;
        e[18] = S;
    } else {
        S = e[18];
    }
    let T;
    if (e[19] === Symbol.for("react.memo_cache_sentinel")) {
        T = <A_1/>;
        e[19] = T;
    } else {
        T = e[19];
    }
    let I;
    if (e[20] !== S) {
        I = <div {...v}>{S}{T}</div>;
        e[20] = S;
        e[21] = I;
    } else {
        I = e[21];
    }
    let C;
    if (e[22] === Symbol.for("react.memo_cache_sentinel")) {
        C = {
            className: "sand-78zum5 sand-6s0dn4 sand-2lah0s sand-1a02dak sand-13a6bvl sand-167g77z sand-vc5jky"
        };
        e[22] = C;
    } else {
        C = e[22];
    }
    const P = installedSecrets_isPending || r;
    let N;
    if (e[23] === Symbol.for("react.memo_cache_sentinel")) {
        N = ()=>{
            setR(true);
            setO(null);
        };
        e[23] = N;
    } else {
        N = e[23];
    }
    let E;
    if (e[24] === Symbol.for("react.memo_cache_sentinel")) {
        E = <T_1 id="fqSfXY"/>;
        e[24] = E;
    } else {
        E = e[24];
    }
    let D;
    if (e[25] !== P) {
        D = <Pe1 disabled={P} onClick={N} size="sm" type="button" variant="secondary">{E}</Pe1>;
        e[25] = P;
        e[26] = D;
    } else {
        D = e[26];
    }
    let A;
    if (e[27] !== installedSecrets || e[28] !== secret.name) {
        A = ()=>installedSecrets.remove(secret.name);
        e[27] = installedSecrets;
        e[28] = secret.name;
        e[29] = A;
    } else {
        A = e[29];
    }
    let U;
    if (e[30] === Symbol.for("react.memo_cache_sentinel")) {
        U = <T_1 id="t/YqKh"/>;
        e[30] = U;
    } else {
        U = e[30];
    }
    let B;
    if (e[31] !== A || e[32] !== installedSecrets_isPending) {
        B = <Pe1 disabled={installedSecrets_isPending} onClick={A} size="sm" tone="danger" type="button" variant="secondary">{U}</Pe1>;
        e[31] = A;
        e[32] = installedSecrets_isPending;
        e[33] = B;
    } else {
        B = e[33];
    }
    let q;
    if (e[34] !== D || e[35] !== B) {
        q = <div {...C}>{D}{B}</div>;
        e[34] = D;
        e[35] = B;
        e[36] = q;
    } else {
        q = e[36];
    }
    let L;
    if (e[37] !== I || e[38] !== q || e[39] !== j) {
        L = <div {...b}>{j}{I}{q}</div>;
        e[37] = I;
        e[38] = q;
        e[39] = j;
        e[40] = L;
    } else {
        L = e[40];
    }
    let V;
    if (e[41] !== secret.description) {
        V = secret.description.length > 0 ? <J as="p" color="secondary" rootStyle={Cn.detailDescription} size="md">{secret.description}</J> : null;
        e[41] = secret.description;
        e[42] = V;
    } else {
        V = e[42];
    }
    let $;
    if (e[43] !== __1 || e[44] !== o || e[45] !== installedSecrets.isPending || e[46] !== r || e[47] !== secret.description || e[48] !== h || e[49] !== installedSecrets_isPending) {
        $ = r ? <form onSubmit={(G)=>{
            h(G);
        }} className="sand-78zum5 sand-dt5ytf sand-167g77z sand-c7ga6q sand-hojbe8 sand-1tiofj7"><label className="sand-78zum5 sand-dt5ytf sand-1jnr06f"><J as="span" color="secondary" size="xs"><T_1 id="0tI9Xz"/></J><input autoComplete="off" defaultValue={secret.description} maxLength={maxLength} ref={uRef} className="sand-1ghz6dp sand-knfcqp sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-jbqb8w sand-jb2p0i sand-11wthnw sand-tyxrsu sand-1h7ufjq"/></label><label className="sand-78zum5 sand-dt5ytf sand-1jnr06f"><J as="span" color="secondary" size="xs"><T_1 id="wMHvYH"/></J><input autoComplete="off" autoFocus placeholder={__1({
            id: "qNV794"
        })} ref={cRef} spellCheck={false} type="password" className="sand-1ghz6dp sand-knfcqp sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-jbqb8w sand-jb2p0i sand-11wthnw sand-tyxrsu sand-1h7ufjq"/></label>{o !== null ? <J as="p" color="red" role="alert" size="xs">{o}</J> : null}<div className="sand-78zum5 sand-13a6bvl sand-17d4w8g"><Pe1 disabled={installedSecrets.isPending} onClick={()=>{
            setR(false);
            setO(null);
        }} size="sm" type="button" variant="secondary"><T_1 id="dEgA5A"/></Pe1><Pe1 disabled={installedSecrets_isPending} size="sm" type="submit" variant="primary"><T_1 id="VyryCM"/></Pe1></div></form> : null;
        e[43] = __1;
        e[44] = o;
        e[45] = installedSecrets.isPending;
        e[46] = r;
        e[47] = secret.description;
        e[48] = h;
        e[49] = installedSecrets_isPending;
        e[50] = $;
    } else {
        $ = e[50];
    }
    let F;
    if (e[51] !== L || e[52] !== V || e[53] !== $) {
        F = <div {...y}>{L}{V}{$}</div>;
        e[51] = L;
        e[52] = V;
        e[53] = $;
        e[54] = F;
    } else {
        F = e[54];
    }
    return F;
}
function Yn1Component(s) {
    Yn1Component.d = 959;
    const e = c_1.c(65);
    const { access, installedSecrets, customDialogActionsHost, secrets, view, onPaneChange } = s;
    const d = installedSecrets === undefined ? null : installedSecrets;
    const u = customDialogActionsHost === undefined ? null : customDialogActionsHost;
    const c = secrets === undefined ? null : secrets;
    let m;
    if (e[0] !== onPaneChange) {
        m = ()=>onPaneChange({
                kind: "list"
            });
        e[0] = onPaneChange;
        e[1] = m;
    } else {
        m = e[1];
    }
    const f = m;
    let p;
    if (e[2] !== onPaneChange) {
        p = (kind)=>onPaneChange({
                kind
            });
        e[2] = onPaneChange;
        e[3] = p;
    } else {
        p = e[3];
    }
    const g = p;
    switch(view.kind){
        case "plugin":
            {
                let h;
                if (e[4] !== g || e[5] !== view.from) {
                    h = ()=>g(view.from);
                    e[4] = g;
                    e[5] = view.from;
                    e[6] = h;
                } else {
                    h = e[6];
                }
                let y;
                if (e[7] !== onPaneChange || e[8] !== view.from || e[9] !== view.plugin.pluginId) {
                    y = ()=>onPaneChange({
                            kind: "plugin-skills",
                            pluginId: view.plugin.pluginId,
                            from: view.from
                        });
                    e[7] = onPaneChange;
                    e[8] = view.from;
                    e[9] = view.plugin.pluginId;
                    e[10] = y;
                } else {
                    y = e[10];
                }
                let b;
                if (e[11] !== access || e[12] !== h || e[13] !== y || e[14] !== view.plugin) {
                    b = <Gn1Component access={access} onBack={h} onOpenSkills={y} plugin={view.plugin}/>;
                    e[11] = access;
                    e[12] = h;
                    e[13] = y;
                    e[14] = view.plugin;
                    e[15] = b;
                } else {
                    b = e[15];
                }
                return b;
            }
        case "plugin-skills":
            {
                let h;
                let y;
                if (e[16] !== access.catalog || e[17] !== view.plugin) {
                    let j;
                    if (e[20] !== view.plugin) {
                        j = (x)=>cE(view.plugin, x);
                        e[20] = view.plugin;
                        e[21] = j;
                    } else {
                        j = e[21];
                    }
                    const v = access.catalog.find(j);
                    h = Hn1Component;
                    y = Ps(view.plugin, v);
                    e[16] = access.catalog;
                    e[17] = view.plugin;
                    e[18] = h;
                    e[19] = y;
                } else {
                    h = e[18];
                    y = e[19];
                }
                let b;
                if (e[22] !== h || e[23] !== y) {
                    b = j.jsx(h, {
                        skills: y
                    });
                    e[22] = h;
                    e[23] = y;
                    e[24] = b;
                } else {
                    b = e[24];
                }
                return b;
            }
        case "catalog":
            {
                let h;
                if (e[25] !== access || e[26] !== view.entry || e[27] !== view.isAdded) {
                    h = view.isAdded ? cC(access.listing.plugins, view.entry) : undefined;
                    e[25] = access;
                    e[26] = view.entry;
                    e[27] = view.isAdded;
                    e[28] = h;
                } else {
                    h = e[28];
                }
                const y = h;
                if (y != null) {
                    let v;
                    if (e[29] !== g || e[30] !== view.from) {
                        v = ()=>g(view.from);
                        e[29] = g;
                        e[30] = view.from;
                        e[31] = v;
                    } else {
                        v = e[31];
                    }
                    let x;
                    if (e[32] !== y.pluginId || e[33] !== onPaneChange || e[34] !== view.from) {
                        x = ()=>onPaneChange({
                                kind: "plugin-skills",
                                pluginId: y.pluginId,
                                from: view.from
                            });
                        e[32] = y.pluginId;
                        e[33] = onPaneChange;
                        e[34] = view.from;
                        e[35] = x;
                    } else {
                        x = e[35];
                    }
                    let _;
                    if (e[36] !== access || e[37] !== y || e[38] !== v || e[39] !== x) {
                        _ = <Gn1Component access={access} onBack={v} onOpenSkills={x} plugin={y}/>;
                        e[36] = access;
                        e[37] = y;
                        e[38] = v;
                        e[39] = x;
                        e[40] = _;
                    } else {
                        _ = e[40];
                    }
                    return _;
                }
                let b;
                if (e[41] !== onPaneChange || e[42] !== view.entry.id || e[43] !== view.from) {
                    b = ()=>onPaneChange({
                            kind: "catalog-skills",
                            entryId: view.entry.id,
                            from: view.from
                        });
                    e[41] = onPaneChange;
                    e[42] = view.entry.id;
                    e[43] = view.from;
                    e[44] = b;
                } else {
                    b = e[44];
                }
                let j;
                if (e[45] !== access || e[46] !== b || e[47] !== view.entry || e[48] !== view.isAdded) {
                    j = <$s access={access} entry={view.entry} isAdded={view.isAdded} onOpenSkills={b}/>;
                    e[45] = access;
                    e[46] = b;
                    e[47] = view.entry;
                    e[48] = view.isAdded;
                    e[49] = j;
                } else {
                    j = e[49];
                }
                return j;
            }
        case "catalog-skills":
            {
                let h;
                if (e[50] !== view.entry.skills) {
                    h = view.entry.skills ?? [];
                    e[50] = view.entry.skills;
                    e[51] = h;
                } else {
                    h = e[51];
                }
                let y;
                if (e[52] !== h) {
                    y = <Hn1Component skills={h}/>;
                    e[52] = h;
                    e[53] = y;
                } else {
                    y = e[53];
                }
                return y;
            }
        case "custom":
            {
                let h;
                if (e[54] !== access || e[55] !== u || e[56] !== c || e[57] !== f) {
                    h = c == null ? <Sn1Component access={access} dialogActionsHost={u} onBack={f}/> : <CsComponent access={access} dialogActionsHost={u} onBack={f} secrets={c}/>;
                    e[54] = access;
                    e[55] = u;
                    e[56] = c;
                    e[57] = f;
                    e[58] = h;
                } else {
                    h = e[58];
                }
                return h;
            }
        case "secret":
            {
                let h;
                if (e[59] !== d?.secrets || e[60] !== view.name) {
                    h = d?.secrets.find((j)=>j.name === view.name);
                    e[59] = d?.secrets;
                    e[60] = view.name;
                    e[61] = h;
                } else {
                    h = e[61];
                }
                const y = h;
                if (y == null || d == null) {
                    return null;
                }
                let b;
                if (e[62] !== d || e[63] !== y) {
                    b = <EsComponent installedSecrets={d} secret={y}/>;
                    e[62] = d;
                    e[63] = y;
                    e[64] = b;
                } else {
                    b = e[64];
                }
                return b;
            }
        case "list":
        case "connected":
            return null;
    }
}
const ra = {
    k1xSpc: "sand-78zum5",
    kmuXW: "sand-2lah0s",
    $$css: true
};
const oa = 32;
const rowPitchPx = 48;
const Vn = {
    inset: {
        kZCmMZ: "sand-mzvs34",
        kwRFfy: "sand-f159sx",
        $$css: true
    }
};
const Oe = {
    windowRow: (s)=>[
            ra,
            {
                kZKoxP: s != null ? "sand-16ye13r" : s,
                $$css: true
            },
            {
                "--x-height": ((e)=>{
                    if (typeof e === "number") {
                        return `${e}px`;
                    }
                    return e ?? undefined;
                })(s)
            }
        ],
    sectionTitle: {
        kVAEAm: "sand-7wzq59",
        k87sOh: "sand-13vifvy",
        kY2c9j: "sand-1vjfegm",
        kogj98: "sand-1ghz6dp",
        kLKAdn: "sand-1y1aw1k",
        kGO01o: "sand-10b6aqq",
        kZCmMZ: "sand-mzvs34",
        kwRFfy: "sand-f159sx",
        kWkggS: "sand-f1vpex",
        kMwMTN: "sand-169k319",
        $$css: true
    },
    row: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-167g77z",
        kB7OPa: "sand-9f619",
        kAzted: "sand-1wxaq2x",
        kLKAdn: "sand-1y1aw1k",
        kGO01o: "sand-wib8y2",
        kZCmMZ: "sand-mzvs34",
        kwRFfy: "sand-f159sx",
        kaIpWk: "sand-1qmwy7c",
        kWkggS: "sand-jbqb8w sand-aalx5g",
        $$css: true
    },
    rowTitle: {
        kmuXW: "sand-2lah0s",
        ks0D6T: "sand-h9uqaf",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        $$css: true
    },
    rowReason: {
        kzQI83: "sand-1iyjqo2",
        k7Eaqz: "sand-euugli",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        kMwMTN: "sand-169k319",
        $$css: true
    }
};
function OsComponent({ entry, title, name, logoUrl, sizePx = oa }) {
    return <P {...O(entry ?? {
        name: name ?? title,
        displayName: title,
        ...logoUrl != null && logoUrl.length > 0 ? {
            iconUrl: logoUrl
        } : {}
    })} name={title} size={sizePx}/>;
}
function ca(plugin, entry) {
    return entry?.iconUrl ?? plugin.logoUrl;
}
function Tn1Component(s) {
    Tn1Component.d = 1036;
    const e = c_1.c(27);
    const { name, description, icon, trailing, titleId, onOpen } = s;
    const { _ } = u_1();
    let u;
    if (e[0] !== _ || e[1] !== name) {
        u = _({
            id: "T9mwDN",
            values: {
                name
            }
        });
        e[0] = _;
        e[1] = name;
        e[2] = u;
    } else {
        u = e[2];
    }
    let c;
    let m;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        c = {
            className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-1iyjqo2 sand-euugli sand-1717udv sand-c342km sand-ng3xce sand-jbqb8w sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk"
        };
        m = {
            className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-1td3qas sand-10w6t97 sand-b3r6kr sand-1qmwy7c sand-1tiofj7"
        };
        e[3] = c;
        e[4] = m;
    } else {
        c = e[3];
        m = e[4];
    }
    let f;
    if (e[5] !== icon) {
        f = <span {...m}>{icon}</span>;
        e[5] = icon;
        e[6] = f;
    } else {
        f = e[6];
    }
    let p;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        p = {
            className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1iyjqo2 sand-euugli sand-uxw1ft"
        };
        e[7] = p;
    } else {
        p = e[7];
    }
    let g;
    if (e[8] !== name || e[9] !== titleId) {
        g = <En id={titleId} level="body2" style={Oe.rowTitle}>{name}</En>;
        e[8] = name;
        e[9] = titleId;
        e[10] = g;
    } else {
        g = e[10];
    }
    let h;
    if (e[11] !== description) {
        h = description == null || description.length === 0 ? null : <En level="body2" style={Oe.rowReason}>{description}</En>;
        e[11] = description;
        e[12] = h;
    } else {
        h = e[12];
    }
    let y;
    if (e[13] !== g || e[14] !== h) {
        y = <span {...p}>{g}{h}</span>;
        e[13] = g;
        e[14] = h;
        e[15] = y;
    } else {
        y = e[15];
    }
    let b;
    if (e[16] !== onOpen || e[17] !== u || e[18] !== f || e[19] !== y) {
        b = <button aria-label={u} onClick={onOpen} type="button" {...c}>{f}{y}</button>;
        e[16] = onOpen;
        e[17] = u;
        e[18] = f;
        e[19] = y;
        e[20] = b;
    } else {
        b = e[20];
    }
    let j;
    if (e[21] === Symbol.for("react.memo_cache_sentinel")) {
        j = {
            className: "sand-78zum5 sand-6s0dn4 sand-2lah0s sand-vc5jky sand-f7dkkf"
        };
        e[21] = j;
    } else {
        j = e[21];
    }
    let v;
    if (e[22] !== trailing) {
        v = <span {...j}>{trailing}</span>;
        e[22] = trailing;
        e[23] = v;
    } else {
        v = e[23];
    }
    let x;
    if (e[24] !== v || e[25] !== b) {
        x = <>{b}{v}</>;
        e[24] = v;
        e[25] = b;
        e[26] = x;
    } else {
        x = e[26];
    }
    return x;
}
function HnComponent(s, e, n) {
    if (e == null) {
        return <li key={s} aria-hidden="true" role="presentation" {...p_1(Oe.windowRow(rowPitchPx))}/>;
    }
    return <li key={s} aria-labelledby={e.titleId} aria-posinset={e.index + 1} aria-setsize={e.count} onBlur={e.onBlur} onFocus={e.onFocus} {...p_1(Oe.row, Oe.windowRow(rowPitchPx))}>{n}</li>;
}
function PnComponent(s) {
    PnComponent.d = 1035;
    const e = c_1.c(15);
    const { sectionTitle, listLabel, titleRef, children } = s;
    const a = r_1.useId();
    let o;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        o = p_1(a_.label, Oe.sectionTitle);
        e[0] = o;
    } else {
        o = e[0];
    }
    let d;
    if (e[1] !== sectionTitle || e[2] !== a || e[3] !== titleRef) {
        d = <div id={a} ref={titleRef} {...o}>{sectionTitle}</div>;
        e[1] = sectionTitle;
        e[2] = a;
        e[3] = titleRef;
        e[4] = d;
    } else {
        d = e[4];
    }
    let u;
    if (e[5] !== listLabel || e[6] !== a) {
        u = listLabel == null ? {
            "aria-labelledby": a
        } : {
            "aria-label": listLabel
        };
        e[5] = listLabel;
        e[6] = a;
        e[7] = u;
    } else {
        u = e[7];
    }
    let c;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        c = {
            className: "sand-78zum5 sand-dt5ytf sand-1ghz6dp sand-1717udv sand-e8uvvx"
        };
        e[8] = c;
    } else {
        c = e[8];
    }
    let m;
    if (e[9] !== children || e[10] !== u) {
        m = <ul {...u} {...c}>{children}</ul>;
        e[9] = children;
        e[10] = u;
        e[11] = m;
    } else {
        m = e[11];
    }
    let f;
    if (e[12] !== d || e[13] !== m) {
        f = <>{d}{m}</>;
        e[12] = d;
        e[13] = m;
        e[14] = f;
    } else {
        f = e[14];
    }
    return f;
}
function NComponent(s) {
    NComponent.d = 1034;
    const e = c_1.c(19);
    const { plugin, entry, disabled, titleId, autoFocusToggle, onOpen, onRemove } = s;
    const u = autoFocusToggle === undefined ? false : autoFocusToggle;
    let c;
    let m;
    let f;
    let p;
    if (e[0] !== entry || e[1] !== plugin) {
        p = bN(plugin, entry);
        c = Tn1Component;
        m = plugin.description || entry?.description || null;
        f = OsComponent({
            entry,
            title: p,
            name: plugin.name,
            logoUrl: plugin.logoUrl
        });
        e[0] = entry;
        e[1] = plugin;
        e[2] = c;
        e[3] = m;
        e[4] = f;
        e[5] = p;
    } else {
        c = e[2];
        m = e[3];
        f = e[4];
        p = e[5];
    }
    let g;
    if (e[6] !== u || e[7] !== disabled || e[8] !== onRemove || e[9] !== p) {
        g = <Xe autoFocus={u} disabled={disabled} name={p} onRemove={onRemove}/>;
        e[6] = u;
        e[7] = disabled;
        e[8] = onRemove;
        e[9] = p;
        e[10] = g;
    } else {
        g = e[10];
    }
    let h;
    if (e[11] !== c || e[12] !== onOpen || e[13] !== m || e[14] !== f || e[15] !== g || e[16] !== p || e[17] !== titleId) {
        h = j.jsx(c, {
            description: m,
            icon: f,
            name: p,
            onOpen,
            titleId,
            trailing: g
        });
        e[11] = c;
        e[12] = onOpen;
        e[13] = m;
        e[14] = f;
        e[15] = g;
        e[16] = p;
        e[17] = titleId;
        e[18] = h;
    } else {
        h = e[18];
    }
    return h;
}
function RsComponent(s) {
    RsComponent.d = 1033;
    const e = c_1.c(7);
    const n = r_1.useId();
    let t;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        t = {
            className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-9f619 sand-1wxaq2x sand-1y1aw1k sand-wib8y2 sand-mzvs34 sand-f159sx sand-1qmwy7c sand-jbqb8w sand-aalx5g"
        };
        e[0] = t;
    } else {
        t = e[0];
    }
    let i;
    if (e[1] !== s || e[2] !== n) {
        i = <NComponent {...s} titleId={n}/>;
        e[1] = s;
        e[2] = n;
        e[3] = i;
    } else {
        i = e[3];
    }
    let r;
    if (e[4] !== i || e[5] !== n) {
        r = <li aria-labelledby={n} {...t}>{i}</li>;
        e[4] = i;
        e[5] = n;
        e[6] = r;
    } else {
        r = e[6];
    }
    return r;
}
function AsComponent(s) {
    AsComponent.d = 1032;
    const e = c_1.c(15);
    const { entry, disabled, titleId, autoFocusToggle, onAdd, onOpen } = s;
    const d = autoFocusToggle === undefined ? false : autoFocusToggle;
    const u = entry.description || null;
    let c;
    if (e[0] !== entry) {
        c = OsComponent({
            entry,
            title: entry.displayName
        });
        e[0] = entry;
        e[1] = c;
    } else {
        c = e[1];
    }
    const m = d && !disabled;
    const f = d && disabled ? "locked" : "ready";
    let p;
    if (e[2] !== disabled || e[3] !== entry.displayName || e[4] !== onAdd || e[5] !== m || e[6] !== f) {
        p = <Es1 key={f} autoFocus={m} disabled={disabled} name={entry.displayName} onAdd={onAdd}/>;
        e[2] = disabled;
        e[3] = entry.displayName;
        e[4] = onAdd;
        e[5] = m;
        e[6] = f;
        e[7] = p;
    } else {
        p = e[7];
    }
    let g;
    if (e[8] !== entry.displayName || e[9] !== onOpen || e[10] !== u || e[11] !== c || e[12] !== p || e[13] !== titleId) {
        g = <Tn1Component description={u} icon={c} name={entry.displayName} onOpen={onOpen} titleId={titleId} trailing={p}/>;
        e[8] = entry.displayName;
        e[9] = onOpen;
        e[10] = u;
        e[11] = c;
        e[12] = p;
        e[13] = titleId;
        e[14] = g;
    } else {
        g = e[14];
    }
    return g;
}
function Qs1Component(s) {
    Qs1Component.d = 1037;
    const e = c_1.c(16);
    const { name, description, onOpen } = s;
    const r = r_1.useId();
    let a;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        a = {
            className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-9f619 sand-1wxaq2x sand-1y1aw1k sand-wib8y2 sand-mzvs34 sand-f159sx sand-1qmwy7c sand-jbqb8w sand-aalx5g"
        };
        e[0] = a;
    } else {
        a = e[0];
    }
    let o;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        o = <I name="key" size="sm"/>;
        e[1] = o;
    } else {
        o = e[1];
    }
    let d;
    if (e[2] !== name) {
        d = <span aria-label={name} role="img">{o}</span>;
        e[2] = name;
        e[3] = d;
    } else {
        d = e[3];
    }
    let u;
    if (e[4] !== name) {
        u = <Xe name={name} readOnly/>;
        e[4] = name;
        e[5] = u;
    } else {
        u = e[5];
    }
    let c;
    if (e[6] !== description || e[7] !== name || e[8] !== onOpen || e[9] !== d || e[10] !== u || e[11] !== r) {
        c = <Tn1Component description={description} icon={d} name={name} onOpen={onOpen} titleId={r} trailing={u}/>;
        e[6] = description;
        e[7] = name;
        e[8] = onOpen;
        e[9] = d;
        e[10] = u;
        e[11] = r;
        e[12] = c;
    } else {
        c = e[12];
    }
    let m;
    if (e[13] !== c || e[14] !== r) {
        m = <li aria-labelledby={r} {...a}>{c}</li>;
        e[13] = c;
        e[14] = r;
        e[15] = m;
    } else {
        m = e[15];
    }
    return m;
}
const de = t;
const He = {
    header: {
        kGO01o: "sand-wib8y2",
        $$css: true
    },
    body: {
        kOIVth: "sand-1665zp3",
        $$css: true
    },
    chrome: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kmuXW: "sand-2lah0s",
        kOIVth: "sand-ou54vl",
        $$css: true
    },
    sortTrigger: {
        k1xSpc: "sand-3nfvp2",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-195vfkc",
        kmVPX3: "sand-1717udv",
        ksu8eU: "sand-ng3xce",
        kaIpWk: "sand-12oqio5",
        kWkggS: "sand-jbqb8w",
        kMwMTN: "sand-1o0liin",
        kMv6JI: "sand-jb2p0i",
        kGuDYH: "sand-1wm8ruf",
        kLWn49: "sand-1d3mw78",
        kkrTdU: "sand-1ypdohk",
        $$css: true
    }
};
const Ue = p_1(a_.body2, de.empty);
function da(access) {
    const e = eY();
    return [
        ...aV(access.listing.plugins)
    ].sort((n, t)=>{
        const i = cI(n, access.catalog);
        const r = cI(t, access.catalog);
        const a = fB(bN(n, i), e);
        const o = fB(bN(t, r), e);
        return a.localeCompare(o, e);
    });
}
function BsComponent(s) {
    BsComponent.d = 1039;
    const e = c_1.c(36);
    const { sort, onChange } = s;
    const { _: __1 } = u_1();
    let r;
    if (e[0] !== __1 || e[1] !== sort) {
        r = __1(sort === "popular" ? {
            id: "gL/sdV"
        } : {
            id: "315BhT"
        });
        e[0] = __1;
        e[1] = sort;
        e[2] = r;
    } else {
        r = e[2];
    }
    const a = r;
    let o;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        o = p_1(aK.controlRing, He.sortTrigger);
        e[3] = o;
    } else {
        o = e[3];
    }
    let d;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        d = <I aria-hidden name="chevron-down" size="xs"/>;
        e[4] = d;
    } else {
        d = e[4];
    }
    let u;
    if (e[5] !== a) {
        u = <Ee.Trigger><button type="button" {...o}>{a}{d}</button></Ee.Trigger>;
        e[5] = a;
        e[6] = u;
    } else {
        u = e[6];
    }
    let c;
    if (e[7] !== __1) {
        c = __1({
            id: "6/kA7o"
        });
        e[7] = __1;
        e[8] = c;
    } else {
        c = e[8];
    }
    let m;
    if (e[9] !== onChange) {
        m = ()=>onChange("alphabetical");
        e[9] = onChange;
        e[10] = m;
    } else {
        m = e[10];
    }
    const f = sort === "alphabetical";
    let p;
    if (e[11] !== sort) {
        p = sort === "alphabetical" ? <I name="check" size="sm"/> : null;
        e[11] = sort;
        e[12] = p;
    } else {
        p = e[12];
    }
    let g;
    if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
        g = <T_1 id="315BhT"/>;
        e[13] = g;
    } else {
        g = e[13];
    }
    let h;
    if (e[14] !== m || e[15] !== f || e[16] !== p) {
        h = <Ee.Item onSelect={m} radioChecked={f} trailing={p}>{g}</Ee.Item>;
        e[14] = m;
        e[15] = f;
        e[16] = p;
        e[17] = h;
    } else {
        h = e[17];
    }
    let y;
    if (e[18] !== onChange) {
        y = ()=>onChange("popular");
        e[18] = onChange;
        e[19] = y;
    } else {
        y = e[19];
    }
    const b = sort === "popular";
    let j;
    if (e[20] !== sort) {
        j = sort === "popular" ? <I name="check" size="sm"/> : null;
        e[20] = sort;
        e[21] = j;
    } else {
        j = e[21];
    }
    let v;
    if (e[22] === Symbol.for("react.memo_cache_sentinel")) {
        v = <T_1 id="gL/sdV"/>;
        e[22] = v;
    } else {
        v = e[22];
    }
    let x;
    if (e[23] !== y || e[24] !== b || e[25] !== j) {
        x = <Ee.Item onSelect={y} radioChecked={b} trailing={j}>{v}</Ee.Item>;
        e[23] = y;
        e[24] = b;
        e[25] = j;
        e[26] = x;
    } else {
        x = e[26];
    }
    let _;
    if (e[27] !== h || e[28] !== x) {
        _ = <Ee.Section>{h}{x}</Ee.Section>;
        e[27] = h;
        e[28] = x;
        e[29] = _;
    } else {
        _ = e[29];
    }
    let k;
    if (e[30] !== _ || e[31] !== c) {
        k = <Ee.Content aria-label={c} minWidth={180} size="md">{_}</Ee.Content>;
        e[30] = _;
        e[31] = c;
        e[32] = k;
    } else {
        k = e[32];
    }
    let S;
    if (e[33] !== k || e[34] !== u) {
        S = <Ee>{u}{k}</Ee>;
        e[33] = k;
        e[34] = u;
        e[35] = S;
    } else {
        S = e[35];
    }
    return S;
}
function Un(s) {
    if (s.kind === "installed") {
        return `installed:${s.plugin.pluginId}`;
    }
    return `available:${s.entry.id}`;
}
function ua(s) {
    return s.flatMap((e)=>{
        const n = e.kind === "installed" ? ca(e.plugin, e.entry) : e.entry.iconUrl;
        if (n == null) {
            return [];
        }
        return [
            n
        ];
    });
}
function ma({ rowWindow, rowCount, focusedIndex, refocusIndex, heldRows }) {
    const r = new Set(heldRows);
    for(let o = rowWindow.start; o < rowWindow.end; o += 1){
        r.add(o);
    }
    const a = [
        0,
        rowCount - 1,
        focusedIndex - 1,
        focusedIndex,
        focusedIndex + 1,
        refocusIndex
    ];
    for (const o of a){
        if (o >= 0 && o < rowCount) {
            r.add(o);
        }
    }
    return r;
}
function LsComponent(s) {
    LsComponent.d = 1040;
    const e = c_1.c(20);
    const { access, query, sort, popularity, scrollEl, onOpenPlugin, onOpenCatalog, onSortChange } = s;
    const { _: __1 } = u_1();
    const m = r_1.useId();
    const [leadingEl, setLeadingEl] = r_1.useState(null);
    const [g, setG] = r_1.useState(null);
    const y = cH(access, "", sort, popularity);
    const b = query.trim().length === 0 ? y : cH(access, query, sort, popularity);
    const [j, setJ] = r_1.useState(null);
    const x = j?.query === query ? j.entryId : null;
    const _ = jm();
    const k = ua(y);
    aU(()=>_(k));
    const rowWindow = cm({
        scrollEl,
        leadingEl,
        rowCount: b.length,
        rowPitchPx,
        leadingOffsetPx: e_1
    });
    const T = b.map(Un);
    const listSignature = T.join(`
`);
    const windowRange = `${rowWindow.start}:${rowWindow.end}`;
    const windowKeys = T.slice(rowWindow.start, rowWindow.end);
    const [N, setN] = r_1.useState({
        listSignature,
        windowRange,
        windowKeys
    });
    let D;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        D = [];
        e[0] = D;
    } else {
        D = e[0];
    }
    const [A, setA] = r_1.useState(D);
    if (N.listSignature !== listSignature) {
        setA(N.windowKeys);
        setN({
            listSignature,
            windowRange,
            windowKeys
        });
    } else if (N.windowRange !== windowRange) {
        if (A.length > 0) {
            setA([]);
        }
        setN({
            listSignature,
            windowRange,
            windowKeys
        });
    }
    let B;
    if (e[1] !== A) {
        B = new Set(A);
        e[1] = A;
        e[2] = B;
    } else {
        B = e[2];
    }
    const q = B;
    let L;
    if (e[3] !== q) {
        L = (R, K)=>{
            if (q.has(R)) {
                return [
                    K
                ];
            }
            return [];
        };
        e[3] = q;
        e[4] = L;
    } else {
        L = e[4];
    }
    const V = ma({
        rowWindow,
        rowCount: b.length,
        focusedIndex: g == null ? -1 : T.indexOf(g),
        refocusIndex: x == null ? -1 : b.findIndex((R)=>R.entry?.id === x),
        heldRows: T.flatMap(L)
    });
    let $;
    if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
        $ = (R, K)=>{
            const K_relatedTarget = K.relatedTarget;
            if (!(!(K_relatedTarget instanceof Node) || K.currentTarget.contains(K_relatedTarget))) {
                setG((ee)=>{
                    if (ee === R) {
                        return null;
                    }
                    return ee;
                });
            }
        };
        e[5] = $;
    } else {
        $ = e[5];
    }
    const F = $;
    const G = access.isPending || access.load !== "ready";
    const H = access.load === "loading" && b.length === 0;
    let se;
    if (e[6] !== query) {
        se = query.trim();
        e[6] = query;
        e[7] = se;
    } else {
        se = e[7];
    }
    const trimmed = se;
    const ae = !H && b.length === 0 && trimmed === "";
    const ie = !H && b.length === 0 && trimmed.length > 0;
    let X;
    if (e[8] !== H) {
        X = H ? <p {...Ue} role="status"><T_1 id="yQE2r9"/></p> : null;
        e[8] = H;
        e[9] = X;
    } else {
        X = e[9];
    }
    const le = b.length === 0 ? null : <PnComponent listLabel={__1({
        id: "G+I1gE"
    })} sectionTitle=<BsComponent onChange={onSortChange} sort={sort}/> titleRef={setLeadingEl}>{b.map((R, index)=>{
        const te = T[index] ?? Un(R);
        if (!V.has(index)) {
            return HnComponent(te, null, null);
        }
        const ee = {
            index,
            count: b.length,
            titleId: `${m}${te}`,
            onFocus: ()=>setG(te),
            onBlur: (re)=>F(te, re)
        };
        return HnComponent(te, ee, R.kind === "installed" ? <NComponent autoFocusToggle={R.entry != null && R.entry.id === x} disabled={G} entry={R.entry} onOpen={()=>onOpenPlugin(R.plugin, "list")} onRemove={()=>{
            if (R.entry != null) {
                setJ({
                    entryId: R.entry.id,
                    query
                });
            }
            access.remove(R.plugin.pluginId);
        }} plugin={R.plugin} titleId={ee.titleId}/> : <AsComponent autoFocusToggle={R.entry.id === x} disabled={G} entry={R.entry} onAdd={()=>{
            setJ({
                entryId: R.entry.id,
                query
            });
            access.add(R.entry);
        }} onOpen={()=>onOpenCatalog(R.entry)} titleId={ee.titleId}/>);
    })}</PnComponent>;
    let Q;
    if (e[10] !== ae) {
        Q = ae ? <p {...Ue}><T_1 id="IxPgq3"/></p> : null;
        e[10] = ae;
        e[11] = Q;
    } else {
        Q = e[11];
    }
    let M;
    if (e[12] !== ie || e[13] !== trimmed) {
        M = ie ? <p {...Ue}><T_1 id="mLyVIn" values={{
            trimmed
        }}/></p> : null;
        e[12] = ie;
        e[13] = trimmed;
        e[14] = M;
    } else {
        M = e[14];
    }
    let z;
    if (e[15] !== X || e[16] !== le || e[17] !== Q || e[18] !== M) {
        z = <>{X}{le}{Q}{M}</>;
        e[15] = X;
        e[16] = le;
        e[17] = Q;
        e[18] = M;
        e[19] = z;
    } else {
        z = e[19];
    }
    return z;
}
function FsComponent(s) {
    FsComponent.d = 1038;
    const e = c_1.c(12);
    const { access, secrets, title, onOpenPlugin, onOpenSecret } = s;
    let o;
    let d;
    if (e[0] !== access || e[1] !== onOpenPlugin || e[2] !== onOpenSecret || e[3] !== secrets || e[4] !== title) {
        const c = eY();
        const m = da(access);
        const f = [
            ...secrets
        ].sort((y, b)=>fB(y.name, c).localeCompare(fB(b.name, c), c));
        const p = access.load === "loading" && m.length === 0 && secrets.length === 0;
        const g = m.length > 0 || secrets.length > 0;
        const h = access.isPending || access.load !== "ready";
        if (e[7] !== p) {
            o = p ? <p {...Ue} role="status"><T_1 id="yQE2r9"/></p> : null;
            e[7] = p;
            e[8] = o;
        } else {
            o = e[8];
        }
        d = g ? <PnComponent sectionTitle={title}>{m.map((y)=><RsComponent key={y.pluginId} disabled={h} entry={cI(y, access.catalog)} onOpen={()=>onOpenPlugin(y, "connected")} onRemove={()=>access.remove(y.pluginId)} plugin={y}/>)}{f.map((y)=><Qs1Component key={y.name} description={y.description || null} name={y.name} onOpen={()=>onOpenSecret(y)}/>)}</PnComponent> : null;
        e[0] = access;
        e[1] = onOpenPlugin;
        e[2] = onOpenSecret;
        e[3] = secrets;
        e[4] = title;
        e[5] = o;
        e[6] = d;
    } else {
        o = e[5];
        d = e[6];
    }
    let u;
    if (e[9] !== o || e[10] !== d) {
        u = <>{o}{d}</>;
        e[9] = o;
        e[10] = d;
        e[11] = u;
    } else {
        u = e[11];
    }
    return u;
}
function FaComponent(view, setF) {
    switch(view.kind){
        case "list":
            return null;
        case "connected":
            return {
                onBack: ()=>setF({
                        kind: "list"
                    }),
                label: <T_1 id="iH8pgl"/>
            };
        case "custom":
            return {
                onBack: ()=>setF({
                        kind: "list"
                    }),
                label: <T_1 id="G+I1gE"/>
            };
        case "plugin":
        case "catalog":
            return {
                onBack: ()=>setF({
                        kind: view.from
                    }),
                label: <T_1 id="iH8pgl"/>
            };
        case "plugin-skills":
            return {
                onBack: ()=>setF({
                        kind: "plugin",
                        pluginId: view.plugin.pluginId,
                        from: view.from
                    }),
                label: <T_1 id="iH8pgl"/>
            };
        case "catalog-skills":
            return {
                onBack: ()=>setF({
                        kind: "catalog",
                        entryId: view.entry.id,
                        from: view.from
                    }),
                label: <T_1 id="iH8pgl"/>
            };
        case "secret":
            return {
                onBack: ()=>setF({
                        kind: "connected"
                    }),
                label: <T_1 id="iH8pgl"/>
            };
    }
}
function MsComponent(s) {
    MsComponent.d = 1041;
    const e = c_1.c(3);
    const { write } = s;
    const { name } = write;
    let i;
    if (e[0] !== name || e[1] !== write.isRemoval) {
        i = write.isRemoval ? <T_1 id="SY7f0i" values={{
            name
        }}/> : <T_1 id="VmsMOp" values={{
            name
        }}/>;
        e[0] = name;
        e[1] = write.isRemoval;
        e[2] = i;
    } else {
        i = e[2];
    }
    return i;
}
function PaComponent(s) {
    PaComponent.d = 1042;
    const e = c_1.c(104);
    const { access, installedSecrets, secretsSection, initialPane, onClose } = s;
    const o = installedSecrets === undefined ? null : installedSecrets;
    const d = secretsSection === undefined ? null : secretsSection;
    const { _ } = u_1();
    const [c] = r_1.useState(initialPane);
    let m;
    if (e[0] !== c) {
        m = c ?? {
            kind: "list"
        };
        e[0] = c;
        e[1] = m;
    } else {
        m = e[1];
    }
    const [f, setF] = r_1.useState(m);
    const [g, setG] = r_1.useState("");
    const [y, setY] = r_1.useState("popular");
    const [j, setJ] = r_1.useState(null);
    const [x, setX] = r_1.useState(null);
    const [k, setK] = r_1.useState(null);
    const { counts } = ff();
    let title;
    let C;
    let P;
    let N;
    let E;
    let D;
    let view;
    if (e[2] !== _ || e[3] !== access.catalog || e[4] !== access.listing.plugins || e[5] !== o?.secrets || e[6] !== c || e[7] !== f) {
        const ce = (o?.secrets ?? []).map(ha);
        view = cF(f, access.listing.plugins, access.catalog, ce);
        const connectedCount = cG(access.listing.plugins, o?.secrets.length ?? 0);
        E = view.kind === "list";
        P = view.kind === "connected";
        N = view.kind === "custom";
        C = E || P || N;
        const ln = c != null && JSON.stringify(f) === JSON.stringify(c);
        title = _({
            id: "nA+FBJ",
            values: {
                connectedCount
            }
        });
        D = ln ? null : FaComponent(view, setF);
        e[2] = _;
        e[3] = access.catalog;
        e[4] = access.listing.plugins;
        e[5] = o?.secrets;
        e[6] = c;
        e[7] = f;
        e[8] = title;
        e[9] = C;
        e[10] = P;
        e[11] = N;
        e[12] = E;
        e[13] = D;
        e[14] = view;
    } else {
        title = e[8];
        C = e[9];
        P = e[10];
        N = e[11];
        E = e[12];
        D = e[13];
        view = e[14];
    }
    const U = D;
    const B = access.load !== "ready";
    let q;
    if (e[15] !== access || e[16] !== o) {
        q = o?.needsRetry === true ? {
            ...access,
            needsRetry: true,
            isPending: access.isPending || o.isPending,
            retry: ()=>{
                if (access.needsRetry) {
                    access.retry();
                }
                o.retry();
            }
        } : access;
        e[15] = access;
        e[16] = o;
        e[17] = q;
    } else {
        q = e[17];
    }
    const L = q;
    let add;
    let remove;
    if (e[18] !== access || e[19] !== f) {
        add = (ce)=>{
            setX({
                name: ce.displayName,
                isRemoval: false,
                onPane: f
            });
            access.add(ce);
        };
        remove = (ce)=>{
            const we = access.listing.plugins.find((Zs)=>Zs.pluginId === ce);
            const ln = we === undefined ? undefined : cI(we, access.catalog);
            setX(we === undefined || access.writeFailed ? null : {
                name: bN(we, ln),
                isRemoval: true,
                onPane: f
            });
            access.remove(ce);
        };
        e[18] = access;
        e[19] = f;
        e[20] = add;
        e[21] = remove;
    } else {
        add = e[20];
        remove = e[21];
    }
    let F;
    if (e[22] !== access || e[23] !== add || e[24] !== remove) {
        F = {
            ...access,
            add,
            remove
        };
        e[22] = access;
        e[23] = add;
        e[24] = remove;
        e[25] = F;
    } else {
        F = e[25];
    }
    const G = F;
    let writeFailure;
    if (e[26] !== x || e[27] !== f) {
        writeFailure = x?.onPane === f ? <MsComponent write={x}/> : null;
        e[26] = x;
        e[27] = f;
        e[28] = writeFailure;
    } else {
        writeFailure = e[28];
    }
    let se;
    if (e[29] !== L || e[30] !== writeFailure) {
        se = <Fe access={L} writeFailure={writeFailure}/>;
        e[29] = L;
        e[30] = writeFailure;
        e[31] = se;
    } else {
        se = e[31];
    }
    const W = se;
    let ae;
    if (e[32] === Symbol.for("react.memo_cache_sentinel")) {
        ae = (ce, from)=>{
            setF({
                kind: "plugin",
                pluginId: ce.pluginId,
                from
            });
        };
        e[32] = ae;
    } else {
        ae = e[32];
    }
    const onOpenPlugin = ae;
    let X;
    if (e[33] !== f || e[34] !== U) {
        X = U == null ? null : <P_1 key={JSON.stringify(f)} autoFocus icon="chevron-left" onBack={U.onBack}>{U.label}</P_1>;
        e[33] = f;
        e[34] = U;
        e[35] = X;
    } else {
        X = e[35];
    }
    const paneBackButton = X;
    let ariaLabel;
    if (e[36] !== _ || e[37] !== C) {
        ariaLabel = C ? undefined : _({
            id: "v6CcJp"
        });
        e[36] = _;
        e[37] = C;
        e[38] = ariaLabel;
    } else {
        ariaLabel = e[38];
    }
    let M;
    if (e[39] !== C) {
        M = C ? [
            de.header,
            He.header
        ] : de.headerCompact;
        e[39] = C;
        e[40] = M;
    } else {
        M = e[40];
    }
    let z;
    if (e[41] !== C || e[42] !== N || e[43] !== paneBackButton) {
        z = C ? <Gt1 description={N ? <T_1 id="WR80/F"/> : <T_1 id="+29mzl"/>} paneBackButton={paneBackButton} title={N ? <T_1 id="sNew++"/> : <T_1 id="v6CcJp"/>}/> : paneBackButton;
        e[41] = C;
        e[42] = N;
        e[43] = paneBackButton;
        e[44] = z;
    } else {
        z = e[44];
    }
    let R;
    if (e[45] === Symbol.for("react.memo_cache_sentinel")) {
        R = <x_1.CloseButton/>;
        e[45] = R;
    } else {
        R = e[45];
    }
    let K;
    if (e[46] !== M || e[47] !== z) {
        K = <x_1.Header style={M}>{z}{R}</x_1.Header>;
        e[46] = M;
        e[47] = z;
        e[48] = K;
    } else {
        K = e[48];
    }
    const te = C && !E && de.dialogBodySubpane;
    let ee;
    if (e[49] !== te) {
        ee = [
            de.dialogBody,
            te
        ];
        e[49] = te;
        e[50] = ee;
    } else {
        ee = e[50];
    }
    let re;
    if (e[51] !== E) {
        re = p_1(de.body, E && He.body);
        e[51] = E;
        e[52] = re;
    } else {
        re = e[52];
    }
    let he;
    if (e[53] !== _ || e[54] !== B || e[55] !== E || e[56] !== k || e[57] !== counts || e[58] !== W || e[59] !== g || e[60] !== G || e[61] !== y) {
        he = E ? <><div {...p_1(He.chrome, Vn.inset)}><div {...p_1(de.searchRow)}><div {...p_1(de.searchField)}><Ne1 rootStyle={de.searchRoot} shape="pill" size="lg"><Ne1.Icon name="search"/><Ne1.Input aria-label={_({
            id: "S4qZX0"
        })} onChange={(ce)=>setG(ce.currentTarget.value)} placeholder={_({
            id: "S4qZX0"
        })} value={g}/></Ne1></div><Dt1 disabled={B} leadingIcon="plus" onClick={()=>setF({
                kind: "custom"
            })} size="md" type="button" variant="secondary"><T_1 id="sNew++"/></Dt1></div>{W}</div><div ref={setK} {...p_1(de.scroller)}><LsComponent access={G} onOpenCatalog={(ce)=>setF({
                kind: "catalog",
                entryId: ce.id,
                from: "list"
            })} onOpenPlugin={onOpenPlugin} onSortChange={setY} popularity={counts} query={g} scrollEl={k} sort={y}/></div></> : null;
        e[53] = _;
        e[54] = B;
        e[55] = E;
        e[56] = k;
        e[57] = counts;
        e[58] = W;
        e[59] = g;
        e[60] = G;
        e[61] = y;
        e[62] = he;
    } else {
        he = e[62];
    }
    let ke;
    if (e[63] !== title || e[64] !== o?.secrets || e[65] !== P || e[66] !== W || e[67] !== G) {
        ke = P ? <div {...p_1(de.subpane)}>{W}<div {...p_1(de.scroller)}><FsComponent access={G} onOpenPlugin={onOpenPlugin} onOpenSecret={(ce)=>setF({
                kind: "secret",
                name: ce.name
            })} secrets={o?.secrets ?? []} title={title}/></div></div> : null;
        e[63] = title;
        e[64] = o?.secrets;
        e[65] = P;
        e[66] = W;
        e[67] = G;
        e[68] = ke;
    } else {
        ke = e[68];
    }
    let Ce;
    if (e[69] !== access || e[70] !== j || e[71] !== o || e[72] !== N || e[73] !== d || e[74] !== view) {
        Ce = N ? <div {...p_1(de.scroller, Vn.inset)}><Yn1Component access={access} installedSecrets={o} customDialogActionsHost={j} onPaneChange={setF} secrets={d} view={view}/></div> : null;
        e[69] = access;
        e[70] = j;
        e[71] = o;
        e[72] = N;
        e[73] = d;
        e[74] = view;
        e[75] = Ce;
    } else {
        Ce = e[75];
    }
    let Ie;
    if (e[76] !== access || e[77] !== o || e[78] !== C || e[79] !== d || e[80] !== view) {
        Ie = C ? null : <div {...p_1(de.scroller)}><Yn1Component access={access} installedSecrets={o} onPaneChange={setF} secrets={d} view={view}/></div>;
        e[76] = access;
        e[77] = o;
        e[78] = C;
        e[79] = d;
        e[80] = view;
        e[81] = Ie;
    } else {
        Ie = e[81];
    }
    let Te;
    if (e[82] !== re || e[83] !== he || e[84] !== ke || e[85] !== Ce || e[86] !== Ie) {
        Te = <div {...re}>{he}{ke}{Ce}{Ie}</div>;
        e[82] = re;
        e[83] = he;
        e[84] = ke;
        e[85] = Ce;
        e[86] = Ie;
        e[87] = Te;
    } else {
        Te = e[87];
    }
    let Ne;
    if (e[88] !== ee || e[89] !== Te) {
        Ne = <x_1.Body style={ee}>{Te}</x_1.Body>;
        e[88] = ee;
        e[89] = Te;
        e[90] = Ne;
    } else {
        Ne = e[90];
    }
    let Pe;
    if (e[91] !== P || e[92] !== E || e[93] !== onClose) {
        Pe = E || P ? <x_1.ActionBar><x_1.ActionSpacer/><x_1.Action onClick={onClose} variant="primary"><T_1 id="DPfwMq"/></x_1.Action></x_1.ActionBar> : null;
        e[91] = P;
        e[92] = E;
        e[93] = onClose;
        e[94] = Pe;
    } else {
        Pe = e[94];
    }
    let $e;
    if (e[95] !== N) {
        $e = N ? <x_1.ActionBar><div ref={setJ} {...p_1(de.actionsHost)}/></x_1.ActionBar> : null;
        e[95] = N;
        e[96] = $e;
    } else {
        $e = e[96];
    }
    let Me;
    if (e[97] !== onClose || e[98] !== ariaLabel || e[99] !== K || e[100] !== Ne || e[101] !== Pe || e[102] !== $e) {
        Me = <Yt1 ariaLabel={ariaLabel} onClose={onClose}>{K}{Ne}{Pe}{$e}</Yt1>;
        e[97] = onClose;
        e[98] = ariaLabel;
        e[99] = K;
        e[100] = Ne;
        e[101] = Pe;
        e[102] = $e;
        e[103] = Me;
    } else {
        Me = e[103];
    }
    return Me;
}
function ha(s) {
    return s.name;
}
export { XtComponent as G, PaComponent as T };
