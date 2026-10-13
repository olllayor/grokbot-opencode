import { c as c_1, r as r_1, p as p_1, T as T_1, u as u_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { aY as K1, i } from "./index.eager-platform-Dcfeegfw.js";
import { bA, fV, t, b7, fh, b9, bT, fW, aP as Ss1, aU, fX, cc as anchorId, fY, a_, fZ, f_ } from "./index.eager-app-Cj5f8Gby.js";
import { z as Ne1, x as x_1, I as I_1, bU as Fs, aX as As1, bV, n as Bs } from "./index-ZYxf-aBb.js";
import { J as J_1 } from "./index.eager-common-CdCvBQNJ.js";
import { c as c_2, d as d_1, e as e_1, a as a_1, f as f_1 } from "./chunk-provider-credentials-yP7QsOsy.js";
import { G, a as Me } from "./chunk-settings-row-I8ggwIzt.js";
import { a as a_2, b as b_1, u as u_2 } from "./chunk-native-plugin-state-AwCLFZLB.js";
import { c as Zs } from "./chunk-plugins-rows-2d0UrD7L.js";
import { PluginDetailHeader, DetailsList, PluginDetailLayout } from "./chunk-plugin-detail-view-tZskkHRA.js";
import { r as r_2, p as p_2 } from "./chunk-marketplace-browse-model-DoOY91TS.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
import "./chunk-finance-CSw6gjXN.js";
import "./chunk-provider-listener-integrations-CR9f28xA.js";
import "./chunk-view-BudImuR0.js";
import "./chunk-use-active-option-scroll-B1hXdW5d.js";
import "./chunk-wipe-navigation-B3wgZxtA.js";
import "./chunk-pane-header-DzXd4Vgr.js";
import "./chunk-scroll-pane-CoxKzaOs.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "117985a3-4aff-4cd5-958b-a636edaacf9d";
            e._sentryDebugIdIdentifier = "sentry-dbid-117985a3-4aff-4cd5-958b-a636edaacf9d";
        }
    } catch (e) {}
})();
const fs = "https://developer.1password.com/docs/service-accounts/get-started/";
const Pe = {
    step: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-1cy8zhl",
        kOIVth: "sand-1v2ro7d",
        $$css: true
    },
    stepMarker: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kjj79g: "sand-l56j7k",
        kmuXW: "sand-2lah0s",
        kzqmXN: "sand-vy4d1p",
        kZKoxP: "sand-xk0z11",
        kaIpWk: "sand-1e6avla",
        kWkggS: "sand-i07v4r",
        kMwMTN: "sand-19aaqeu",
        $$css: true
    },
    stepCopy: {
        k7Eaqz: "sand-euugli",
        kLKAdn: "sand-1nn3v0j",
        $$css: true
    }
};
function Os1Component(y) {
    Os1Component.d = 1219;
    const e = c_1.c(65);
    const { intent, vaultName, error, isPending, onSubmit, onCancel } = y;
    const a = intent === undefined ? "connect" : intent;
    const x = vaultName === undefined ? fV : vaultName;
    const g = bA();
    const pRef = r_1.useRef(null);
    const [c, setC] = r_1.useState(false);
    let f;
    if (e[0] !== g) {
        f = t(fs, g);
        e[0] = g;
        e[1] = f;
    } else {
        f = e[1];
    }
    let S;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        S = {
            className: "sand-1heor9g sand-ujl8zx sand-1ypdohk"
        };
        e[2] = S;
    } else {
        S = e[2];
    }
    let _;
    if (e[3] !== f) {
        _ = {
            ...f,
            ...S,
            href: fs
        };
        e[3] = f;
        e[4] = _;
    } else {
        _ = e[4];
    }
    const z = _;
    let b;
    if (e[5] !== isPending || e[6] !== onSubmit) {
        b = (be)=>{
            be.preventDefault();
            const pRef_current = pRef.current;
            const ze = pRef_current?.value.trim() ?? "";
            if (!(ze.length === 0 || isPending)) {
                if (pRef_current != null) {
                    pRef_current.value = "";
                }
                setC(false);
                onSubmit(ze);
            }
        };
        e[5] = isPending;
        e[6] = onSubmit;
        e[7] = b;
    } else {
        b = e[7];
    }
    const N = b;
    let d;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        d = {
            className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d sand-11gisft"
        };
        e[8] = d;
    } else {
        d = e[8];
    }
    let r;
    if (e[9] !== a || e[10] !== x) {
        r = <K1 color="secondary" size="md">{a === "renew" ? <T_1 id="kJTcYz" values={{
            vaultName: x
        }}/> : <T_1 id="6FJfAU" values={{
            vaultName: x
        }}/>}</K1>;
        e[9] = a;
        e[10] = x;
        e[11] = r;
    } else {
        r = e[11];
    }
    let E;
    if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
        E = {
            className: "sand-78zum5 sand-dt5ytf sand-883omv sand-1ghz6dp sand-1717udv sand-3ct3a4"
        };
        e[12] = E;
    } else {
        E = e[12];
    }
    let A;
    if (e[13] !== a || e[14] !== x) {
        A = a === "renew" ? null : <li className="sand-78zum5 sand-1cy8zhl sand-1v2ro7d"><K1 as="span" size="sm" weight="medium" className="sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-vy4d1p sand-xk0z11 sand-1e6avla sand-i07v4r sand-19aaqeu">1</K1><K1 color="secondary" size="md" className="sand-euugli sand-1nn3v0j"><T_1 id="puHhN4" values={{
            vaultName: x
        }}/></K1></li>;
        e[13] = a;
        e[14] = x;
        e[15] = A;
    } else {
        A = e[15];
    }
    let q;
    if (e[16] === Symbol.for("react.memo_cache_sentinel")) {
        q = p_1(Pe.step);
        e[16] = q;
    } else {
        q = e[16];
    }
    let M;
    if (e[17] === Symbol.for("react.memo_cache_sentinel")) {
        M = p_1(Pe.stepMarker);
        e[17] = M;
    } else {
        M = e[17];
    }
    const F = a === "renew" ? 1 : 2;
    let O;
    if (e[18] !== F) {
        O = <K1 as="span" size="sm" weight="medium" {...M}>{F}</K1>;
        e[18] = F;
        e[19] = O;
    } else {
        O = e[19];
    }
    let v;
    if (e[20] === Symbol.for("react.memo_cache_sentinel")) {
        v = p_1(Pe.stepCopy);
        e[20] = v;
    } else {
        v = e[20];
    }
    let oe;
    if (e[21] !== z) {
        oe = <K1 color="secondary" size="md" {...v}><T_1 id="VJ6pK2" components={{
            0: <a {...z} rel="noopener noreferrer" target="_blank"/>
        }}/></K1>;
        e[21] = z;
        e[22] = oe;
    } else {
        oe = e[22];
    }
    let V;
    if (e[23] !== O || e[24] !== oe) {
        V = <li {...q}>{O}{oe}</li>;
        e[23] = O;
        e[24] = oe;
        e[25] = V;
    } else {
        V = e[25];
    }
    let ye;
    if (e[26] === Symbol.for("react.memo_cache_sentinel")) {
        ye = p_1(Pe.step);
        e[26] = ye;
    } else {
        ye = e[26];
    }
    let H;
    if (e[27] === Symbol.for("react.memo_cache_sentinel")) {
        H = p_1(Pe.stepMarker);
        e[27] = H;
    } else {
        H = e[27];
    }
    const le = a === "renew" ? 2 : 3;
    let P;
    if (e[28] !== le) {
        P = <K1 as="span" size="sm" weight="medium" {...H}>{le}</K1>;
        e[28] = le;
        e[29] = P;
    } else {
        P = e[29];
    }
    let pe;
    if (e[30] === Symbol.for("react.memo_cache_sentinel")) {
        pe = <K1 color="secondary" size="md" className="sand-euugli sand-1nn3v0j"><T_1 id="eZbAY8"/></K1>;
        e[30] = pe;
    } else {
        pe = e[30];
    }
    let me;
    if (e[31] !== P) {
        me = <li {...ye}>{P}{pe}</li>;
        e[31] = P;
        e[32] = me;
    } else {
        me = e[32];
    }
    let ue;
    if (e[33] !== A || e[34] !== V || e[35] !== me) {
        ue = <ol {...E}>{A}{V}{me}</ol>;
        e[33] = A;
        e[34] = V;
        e[35] = me;
        e[36] = ue;
    } else {
        ue = e[36];
    }
    let L;
    if (e[37] === Symbol.for("react.memo_cache_sentinel")) {
        L = {
            className: "sand-78zum5 sand-dt5ytf sand-1jnr06f"
        };
        e[37] = L;
    } else {
        L = e[37];
    }
    let ae;
    if (e[38] === Symbol.for("react.memo_cache_sentinel")) {
        ae = <K1 as="span" color="secondary" size="xs"><T_1 id="ZXpmme"/></K1>;
        e[38] = ae;
    } else {
        ae = e[38];
    }
    let ie;
    if (e[39] === Symbol.for("react.memo_cache_sentinel")) {
        ie = (be)=>setC(be.currentTarget.value.trim().length > 0);
        e[39] = ie;
    } else {
        ie = e[39];
    }
    let Y;
    if (e[40] === Symbol.for("react.memo_cache_sentinel")) {
        Y = {
            className: "sand-1ghz6dp sand-knfcqp sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-jbqb8w sand-jb2p0i sand-11wthnw sand-tyxrsu sand-1h7ufjq"
        };
        e[40] = Y;
    } else {
        Y = e[40];
    }
    let Z;
    if (e[41] !== isPending) {
        Z = <label {...L}>{ae}<input autoComplete="off" autoFocus disabled={isPending} name="sand-1password-service-account-token" onChange={ie} ref={pRef} spellCheck={false} type="password" {...Y}/></label>;
        e[41] = isPending;
        e[42] = Z;
    } else {
        Z = e[42];
    }
    let de;
    if (e[43] !== error) {
        de = error != null ? <K1 color="red" role="alert" size="md">{error}</K1> : null;
        e[43] = error;
        e[44] = de;
    } else {
        de = e[44];
    }
    let fe;
    if (e[45] === Symbol.for("react.memo_cache_sentinel")) {
        fe = {
            className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-1a02dak"
        };
        e[45] = fe;
    } else {
        fe = e[45];
    }
    const te = !c || isPending;
    let Q;
    if (e[46] !== a) {
        Q = a === "renew" ? <T_1 id="EkH9pt"/> : <T_1 id="Timamj"/>;
        e[46] = a;
        e[47] = Q;
    } else {
        Q = e[47];
    }
    let X;
    if (e[48] !== te || e[49] !== Q) {
        X = <Ne1 disabled={te} size="md" type="submit" variant="primary">{Q}</Ne1>;
        e[48] = te;
        e[49] = Q;
        e[50] = X;
    } else {
        X = e[50];
    }
    let J;
    if (e[51] === Symbol.for("react.memo_cache_sentinel")) {
        J = <T_1 id="dEgA5A"/>;
        e[51] = J;
    } else {
        J = e[51];
    }
    let ce;
    if (e[52] !== isPending || e[53] !== onCancel) {
        ce = <Ne1 disabled={isPending} onClick={onCancel} size="md" type="button" variant="secondary">{J}</Ne1>;
        e[52] = isPending;
        e[53] = onCancel;
        e[54] = ce;
    } else {
        ce = e[54];
    }
    let T;
    if (e[55] !== X || e[56] !== ce) {
        T = <span {...fe}>{X}{ce}</span>;
        e[55] = X;
        e[56] = ce;
        e[57] = T;
    } else {
        T = e[57];
    }
    let he;
    if (e[58] !== N || e[59] !== ue || e[60] !== Z || e[61] !== de || e[62] !== T || e[63] !== r) {
        he = <form data-testid="credential-token-form" onSubmit={N} {...d}>{r}{ue}{Z}{de}{T}</form>;
        e[58] = N;
        e[59] = ue;
        e[60] = Z;
        e[61] = de;
        e[62] = T;
        e[63] = r;
        e[64] = he;
    } else {
        he = e[64];
    }
    return he;
}
const hs = "https://1password.com/blog/service-accounts-sdks-agentic-ai";
const xs = "onepassword://settings/developers";
const nn = {
    intro: {
        ks0D6T: "sand-11gisft",
        $$css: true
    }
};
function Vs1Component(y) {
    Vs1Component.d = 1218;
    const e = c_1.c(208);
    const { onNotice, onSuccessHoldChange, connectedAccountUuids, initialView, onExit } = y;
    let j;
    if (e[0] !== connectedAccountUuids) {
        j = connectedAccountUuids === undefined ? [] : connectedAccountUuids;
        e[0] = connectedAccountUuids;
        e[1] = j;
    } else {
        j = e[1];
    }
    const a = j;
    const x = initialView === undefined ? "intro" : initialView;
    const g = b7();
    const p = bA();
    const c = fh().platform === "darwin";
    const u = b9("sand_1pass_manual_service_acct");
    const f = bT();
    const [S, setS] = r_1.useState(x);
    const z = S === "pick" && !c && u ? "token" : S;
    const [b, setB] = r_1.useState(null);
    let d;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        d = {};
        e[2] = d;
    } else {
        d = e[2];
    }
    const [r, setR] = r_1.useState(d);
    const [A, setA] = r_1.useState(null);
    let M;
    if (e[3] !== f) {
        M = ()=>{
            f("sand_1pass_manual_service_acct");
            return ln;
        };
        e[3] = f;
        e[4] = M;
    } else {
        M = e[4];
    }
    i(M);
    let F;
    if (e[5] !== g || e[6] !== z) {
        F = ()=>{
            if (z === "pick") {
                g.credentials.refreshReadiness();
            }
            return tn;
        };
        e[5] = g;
        e[6] = z;
        e[7] = F;
    } else {
        F = e[7];
    }
    i(F);
    let O;
    if (e[8] !== onExit || e[9] !== onSuccessHoldChange) {
        O = {
            onSuccessHoldChange,
            onSuccessComplete: onExit
        };
        e[8] = onExit;
        e[9] = onSuccessHoldChange;
        e[10] = O;
    } else {
        O = e[10];
    }
    const v = c_2(z === "pick", O);
    let oe;
    if (e[11] !== v.readiness) {
        oe = v.readiness?.state === "ready" ? v.readiness.accounts : [];
        e[11] = v.readiness;
        e[12] = oe;
    } else {
        oe = e[12];
    }
    const V = oe;
    let ye;
    if (e[13] !== a) {
        ye = new Set(a);
        e[13] = a;
        e[14] = ye;
    } else {
        ye = e[14];
    }
    const H = ye;
    let le;
    if (e[15] !== V || e[16] !== H || e[17] !== b) {
        le = V.find((h)=>h.accountUuid === b && !H.has(h.accountUuid)) ?? V.find((h)=>!H.has(h.accountUuid)) ?? null;
        e[15] = V;
        e[16] = H;
        e[17] = b;
        e[18] = le;
    } else {
        le = e[18];
    }
    const P = le;
    let pe;
    if (e[19] !== v || e[20] !== onNotice || e[21] !== P) {
        pe = ()=>{
            if (P != null) {
                onNotice(null);
                v.start({
                    accountUuid: P.accountUuid,
                    vaultName: fV,
                    accountUrl: P.url,
                    accountEmail: P.email
                }).then(()=>onNotice(null), (h)=>{
                    const text = J_1(h);
                    const w = d_1(h);
                    if (w === "cancelled" || w === "denied") {
                        onNotice(null);
                        return;
                    }
                    if (w === "permission") {
                        setR((R)=>({
                                ...R,
                                [P.accountUuid]: text
                            }));
                        return;
                    }
                    onNotice({
                        kind: "error",
                        text
                    });
                });
            }
        };
        e[19] = v;
        e[20] = onNotice;
        e[21] = P;
        e[22] = pe;
    } else {
        pe = e[22];
    }
    const me = pe;
    let ue;
    if (e[23] !== onExit || e[24] !== onNotice) {
        ue = ()=>{
            onNotice(null);
            setA(null);
            if (onExit != null) {
                onExit();
                return;
            }
            setS("intro");
        };
        e[23] = onExit;
        e[24] = onNotice;
        e[25] = ue;
    } else {
        ue = e[25];
    }
    const L = ue;
    let ae;
    if (e[26] === Symbol.for("react.memo_cache_sentinel")) {
        ae = <T_1 id="dEgA5A"/>;
        e[26] = ae;
    } else {
        ae = e[26];
    }
    let ie;
    if (e[27] !== L) {
        ie = <Ne1 onClick={L} size="md" type="button" variant="secondary">{ae}</Ne1>;
        e[27] = L;
        e[28] = ie;
    } else {
        ie = e[28];
    }
    const Y = ie;
    let Z;
    if (e[29] === Symbol.for("react.memo_cache_sentinel")) {
        Z = ()=>setS("token");
        e[29] = Z;
    } else {
        Z = e[29];
    }
    let de;
    if (e[30] === Symbol.for("react.memo_cache_sentinel")) {
        de = <K1 color="secondary" size="sm"><button onClick={Z} type="button" className="sand-jyslct sand-jbqb8w sand-c342km sand-1717udv sand-ln7xf2 sand-1heor9g sand-ujl8zx sand-1ypdohk"><T_1 id="JCtpCD"/></button></K1>;
        e[30] = de;
    } else {
        de = e[30];
    }
    const fe = de;
    if (v.isMinting) {
        const h = v.stage === "connected";
        const accountLabel = z === "token" ? fW : P?.email ?? fW;
        let w;
        if (h) {
            let W;
            if (e[31] === Symbol.for("react.memo_cache_sentinel")) {
                W = <T_1 id="xUx8ml"/>;
                e[31] = W;
            } else {
                W = e[31];
            }
            w = W;
        } else if (z === "token") {
            let W;
            if (e[32] === Symbol.for("react.memo_cache_sentinel")) {
                W = <T_1 id="2QKGtQ"/>;
                e[32] = W;
            } else {
                W = e[32];
            }
            w = W;
        } else {
            let W;
            if (e[33] === Symbol.for("react.memo_cache_sentinel")) {
                W = <T_1 id="VZZ5g2" values={{
                    vaultName: fV
                }}/>;
                e[33] = W;
            } else {
                W = e[33];
            }
            w = W;
        }
        const R = h ? "connected" : "connecting";
        let D;
        if (e[34] === Symbol.for("react.memo_cache_sentinel")) {
            D = {
                className: "sand-78zum5 sand-1cy8zhl sand-1v2ro7d sand-10dr8xq sand-qin4a2 sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-4pepcl"
            };
            e[34] = D;
        } else {
            D = e[34];
        }
        let $;
        if (e[35] !== h) {
            $ = ({
                0: {
                    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-gd8bvy sand-1fgtraw sand-ur7f20 sand-i07v4r sand-19aaqeu"
                },
                1: {
                    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-gd8bvy sand-1fgtraw sand-ur7f20 sand-1buh4up sand-1w5rjie"
                }
            })[!!h << 0];
            e[35] = h;
            e[36] = $;
        } else {
            $ = e[36];
        }
        let U;
        if (e[37] !== h) {
            U = h ? <I_1 name="check" size="md"/> : <Ss1 size={16} borderWidth={2}/>;
            e[37] = h;
            e[38] = U;
        } else {
            U = e[38];
        }
        let B;
        if (e[39] !== $ || e[40] !== U) {
            B = <span {...$}>{U}</span>;
            e[39] = $;
            e[40] = U;
            e[41] = B;
        } else {
            B = e[41];
        }
        let G;
        if (e[42] === Symbol.for("react.memo_cache_sentinel")) {
            G = {
                className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-euugli"
            };
            e[42] = G;
        } else {
            G = e[42];
        }
        let I;
        if (e[43] !== accountLabel || e[44] !== h) {
            I = <K1 size="md" weight="medium">{h ? <T_1 id="3khQqh" values={{
                accountLabel
            }}/> : <T_1 id="YfQhMM" values={{
                accountLabel
            }}/>}</K1>;
            e[43] = accountLabel;
            e[44] = h;
            e[45] = I;
        } else {
            I = e[45];
        }
        let ee;
        if (e[46] !== w) {
            ee = <K1 color="secondary" size="sm">{w}</K1>;
            e[46] = w;
            e[47] = ee;
        } else {
            ee = e[47];
        }
        let se;
        if (e[48] !== I || e[49] !== ee) {
            se = <span {...G}>{I}{ee}</span>;
            e[48] = I;
            e[49] = ee;
            e[50] = se;
        } else {
            se = e[50];
        }
        let re;
        if (e[51] !== R || e[52] !== B || e[53] !== se) {
            re = <div aria-live="polite" data-stage={R} data-testid="credential-mint-progress" role="status" {...D}>{B}{se}</div>;
            e[51] = R;
            e[52] = B;
            e[53] = se;
            e[54] = re;
        } else {
            re = e[54];
        }
        return re;
    }
    if (z === "intro") {
        let h;
        if (e[55] !== p) {
            h = t(hs, p);
            e[55] = p;
            e[56] = h;
        } else {
            h = e[56];
        }
        let C;
        if (e[57] === Symbol.for("react.memo_cache_sentinel")) {
            C = {
                className: "sand-1heor9g sand-ujl8zx sand-1ypdohk"
            };
            e[57] = C;
        } else {
            C = e[57];
        }
        let w;
        if (e[58] !== h) {
            w = {
                ...h,
                ...C,
                href: hs
            };
            e[58] = h;
            e[59] = w;
        } else {
            w = e[59];
        }
        const R = w;
        let D = null;
        if (c && !u) {
            let K;
            if (e[60] !== R) {
                K = <T_1 id="M+nO30" components={{
                    0: <a {...R} rel="noopener noreferrer" target="_blank"/>
                }}/>;
                e[60] = R;
                e[61] = K;
            } else {
                K = e[61];
            }
            D = K;
        } else if (!c && u) {
            let K;
            if (e[62] !== R) {
                K = <T_1 id="8n0E3W" components={{
                    0: <a {...R} rel="noopener noreferrer" target="_blank"/>
                }}/>;
                e[62] = R;
                e[63] = K;
            } else {
                K = e[63];
            }
            D = K;
        } else if (!c) {
            let K;
            if (e[64] !== R) {
                K = <T_1 id="gMoVaM" components={{
                    0: <a {...R} rel="noopener noreferrer" target="_blank"/>
                }}/>;
                e[64] = R;
                e[65] = K;
            } else {
                K = e[65];
            }
            D = K;
        }
        let $;
        if (e[66] === Symbol.for("react.memo_cache_sentinel")) {
            $ = {
                className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
            };
            e[66] = $;
        } else {
            $ = e[66];
        }
        let U;
        if (e[67] === Symbol.for("react.memo_cache_sentinel")) {
            U = p_1(nn.intro);
            e[67] = U;
        } else {
            U = e[67];
        }
        let B;
        if (e[68] === Symbol.for("react.memo_cache_sentinel")) {
            B = <K1 color="secondary" size="md" {...U}><T_1 id="yNDjKk" values={{
                vaultName: fV
            }}/></K1>;
            e[68] = B;
        } else {
            B = e[68];
        }
        let G;
        if (e[69] !== D) {
            G = D === null ? null : <K1 color="secondary" size="md" className="sand-11gisft">{D}</K1>;
            e[69] = D;
            e[70] = G;
        } else {
            G = e[70];
        }
        let I;
        if (e[71] === Symbol.for("react.memo_cache_sentinel")) {
            I = {
                className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-1a02dak"
            };
            e[71] = I;
        } else {
            I = e[71];
        }
        let ee;
        if (e[72] !== c) {
            ee = c ? <Ne1 onClick={()=>setS("pick")} size="md" type="button" variant="primary"><T_1 id="Timamj"/></Ne1> : null;
            e[72] = c;
            e[73] = ee;
        } else {
            ee = e[73];
        }
        let se;
        if (e[74] !== c || e[75] !== u) {
            se = u && !c ? <Ne1 onClick={()=>setS("token")} size="md" type="button" variant="primary"><T_1 id="3kACLg"/></Ne1> : null;
            e[74] = c;
            e[75] = u;
            e[76] = se;
        } else {
            se = e[76];
        }
        let re;
        if (e[77] !== ee || e[78] !== se) {
            re = <span {...I}>{ee}{se}</span>;
            e[77] = ee;
            e[78] = se;
            e[79] = re;
        } else {
            re = e[79];
        }
        const W = c && u ? fe : null;
        let ke;
        if (e[80] !== G || e[81] !== re || e[82] !== W) {
            ke = <div {...$}>{B}{G}{re}{W}</div>;
            e[80] = G;
            e[81] = re;
            e[82] = W;
            e[83] = ke;
        } else {
            ke = e[83];
        }
        return ke;
    }
    if (z === "token") {
        let h;
        if (e[84] !== v || e[85] !== onNotice) {
            h = (serviceAccountToken)=>{
                onNotice(null);
                setA(null);
                v.start({
                    serviceAccountToken
                }).catch((R)=>{
                    setA(J_1(R));
                });
            };
            e[84] = v;
            e[85] = onNotice;
            e[86] = h;
        } else {
            h = e[86];
        }
        let C;
        if (e[87] !== L || e[88] !== v.isMinting || e[89] !== h || e[90] !== A) {
            C = <Os1Component error={A} isPending={v.isMinting} onCancel={L} onSubmit={h}/>;
            e[87] = L;
            e[88] = v.isMinting;
            e[89] = h;
            e[90] = A;
            e[91] = C;
        } else {
            C = e[91];
        }
        return C;
    }
    if (v.readiness == null) {
        let h;
        let C;
        if (e[92] === Symbol.for("react.memo_cache_sentinel")) {
            h = {
                className: "sand-78zum5 sand-6s0dn4 sand-883omv sand-21xpn4"
            };
            C = <Ss1 size={18} borderWidth={2}/>;
            e[92] = h;
            e[93] = C;
        } else {
            h = e[92];
            C = e[93];
        }
        let w;
        if (e[94] === Symbol.for("react.memo_cache_sentinel")) {
            w = <div {...h}>{C}<K1 color="secondary" size="md"><T_1 id="Pwqkdw"/></K1></div>;
            e[94] = w;
        } else {
            w = e[94];
        }
        return w;
    }
    let te;
    if (e[95] !== p) {
        te = t(xs, p);
        e[95] = p;
        e[96] = te;
    } else {
        te = e[96];
    }
    let Q;
    if (e[97] === Symbol.for("react.memo_cache_sentinel")) {
        Q = {
            className: "sand-1heor9g sand-ujl8zx sand-1ypdohk"
        };
        e[97] = Q;
    } else {
        Q = e[97];
    }
    let X;
    if (e[98] !== te) {
        X = {
            ...te,
            ...Q,
            href: xs
        };
        e[98] = te;
        e[99] = X;
    } else {
        X = e[99];
    }
    const J = X;
    if (v.readiness.state === "integration-off") {
        let h;
        if (e[100] !== L) {
            h = (I)=>{
                if (!I) {
                    L();
                }
            };
            e[100] = L;
            e[101] = h;
        } else {
            h = e[101];
        }
        let C;
        if (e[102] === Symbol.for("react.memo_cache_sentinel")) {
            C = <x_1.Title><T_1 id="30iDDf"/></x_1.Title>;
            e[102] = C;
        } else {
            C = e[102];
        }
        let w;
        if (e[103] !== J) {
            w = <x_1.Header>{C}<x_1.Description><T_1 id="g+D903" components={{
                0: <a {...J} rel="noopener noreferrer" target="_blank"/>
            }}/></x_1.Description></x_1.Header>;
            e[103] = J;
            e[104] = w;
        } else {
            w = e[104];
        }
        let R;
        if (e[105] === Symbol.for("react.memo_cache_sentinel")) {
            R = <T_1 id="dEgA5A"/>;
            e[105] = R;
        } else {
            R = e[105];
        }
        let D;
        if (e[106] !== L) {
            D = <x_1.Action onClick={L}>{R}</x_1.Action>;
            e[106] = L;
            e[107] = D;
        } else {
            D = e[107];
        }
        let $;
        if (e[108] === Symbol.for("react.memo_cache_sentinel")) {
            $ = <T_1 id="6gRgw8"/>;
            e[108] = $;
        } else {
            $ = e[108];
        }
        let U;
        if (e[109] !== v.isCheckingReadiness || e[110] !== v.refreshReadiness) {
            U = <x_1.Action disabled={v.isCheckingReadiness} onClick={v.refreshReadiness} variant="primary">{$}</x_1.Action>;
            e[109] = v.isCheckingReadiness;
            e[110] = v.refreshReadiness;
            e[111] = U;
        } else {
            U = e[111];
        }
        let B;
        if (e[112] !== D || e[113] !== U) {
            B = <x_1.ActionBar>{D}{U}</x_1.ActionBar>;
            e[112] = D;
            e[113] = U;
            e[114] = B;
        } else {
            B = e[114];
        }
        let G;
        if (e[115] !== h || e[116] !== w || e[117] !== B) {
            G = <x_1.Root onOpenChange={h} open role="alertdialog" variant="rich" width={440}>{w}{B}</x_1.Root>;
            e[115] = h;
            e[116] = w;
            e[117] = B;
            e[118] = G;
        } else {
            G = e[118];
        }
        return G;
    }
    if (v.readiness.state === "app-unreachable") {
        let h;
        if (e[119] !== L) {
            h = (Us)=>{
                if (!Us) {
                    L();
                }
            };
            e[119] = L;
            e[120] = h;
        } else {
            h = e[120];
        }
        let C;
        if (e[121] === Symbol.for("react.memo_cache_sentinel")) {
            C = <x_1.Title><T_1 id="lMg8bZ"/></x_1.Title>;
            e[121] = C;
        } else {
            C = e[121];
        }
        let w;
        if (e[122] === Symbol.for("react.memo_cache_sentinel")) {
            w = <x_1.Header>{C}<x_1.Description><T_1 id="7hvNMc"/></x_1.Description></x_1.Header>;
            e[122] = w;
        } else {
            w = e[122];
        }
        let R;
        let D;
        let $;
        if (e[123] === Symbol.for("react.memo_cache_sentinel")) {
            R = {
                className: "sand-78zum5 sand-dt5ytf sand-ou54vl"
            };
            D = {
                className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d sand-1ghz6dp sand-1717udv sand-3ct3a4"
            };
            $ = {
                className: "sand-78zum5 sand-1cy8zhl sand-1v2ro7d"
            };
            e[123] = R;
            e[124] = D;
            e[125] = $;
        } else {
            R = e[123];
            D = e[124];
            $ = e[125];
        }
        let U;
        let B;
        if (e[126] === Symbol.for("react.memo_cache_sentinel")) {
            U = <K1 as="span" size="sm" weight="medium" className="sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-vy4d1p sand-xk0z11 sand-1e6avla sand-i07v4r sand-19aaqeu">1</K1>;
            B = {
                className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-euugli sand-1nn3v0j"
            };
            e[126] = U;
            e[127] = B;
        } else {
            U = e[126];
            B = e[127];
        }
        let G;
        if (e[128] === Symbol.for("react.memo_cache_sentinel")) {
            G = <K1 size="md" weight="medium"><T_1 id="g7GiX4"/></K1>;
            e[128] = G;
        } else {
            G = e[128];
        }
        let I;
        if (e[129] !== J) {
            I = <li {...$}>{U}<span {...B}>{G}<K1 color="secondary" size="sm"><T_1 id="l4L0r4" components={{
                0: <a {...J} rel="noopener noreferrer" target="_blank"/>
            }}/></K1></span></li>;
            e[129] = J;
            e[130] = I;
        } else {
            I = e[130];
        }
        let ee;
        if (e[131] === Symbol.for("react.memo_cache_sentinel")) {
            ee = {
                className: "sand-78zum5 sand-1cy8zhl sand-1v2ro7d"
            };
            e[131] = ee;
        } else {
            ee = e[131];
        }
        let se;
        let re;
        if (e[132] === Symbol.for("react.memo_cache_sentinel")) {
            se = <K1 as="span" size="sm" weight="medium" className="sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-vy4d1p sand-xk0z11 sand-1e6avla sand-i07v4r sand-19aaqeu">2</K1>;
            re = {
                className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-euugli sand-1nn3v0j"
            };
            e[132] = se;
            e[133] = re;
        } else {
            se = e[132];
            re = e[133];
        }
        let W;
        let ke;
        if (e[134] === Symbol.for("react.memo_cache_sentinel")) {
            W = <li {...ee}>{se}<span {...re}><K1 size="md" weight="medium"><T_1 id="gmBWuh"/></K1></span></li>;
            ke = {
                className: "sand-78zum5 sand-1cy8zhl sand-1v2ro7d"
            };
            e[134] = W;
            e[135] = ke;
        } else {
            W = e[134];
            ke = e[135];
        }
        let K;
        let $e;
        if (e[136] === Symbol.for("react.memo_cache_sentinel")) {
            K = <K1 as="span" size="sm" weight="medium" className="sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-vy4d1p sand-xk0z11 sand-1e6avla sand-i07v4r sand-19aaqeu">3</K1>;
            $e = {
                className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-euugli sand-1nn3v0j"
            };
            e[136] = K;
            e[137] = $e;
        } else {
            K = e[136];
            $e = e[137];
        }
        let Fe;
        if (e[138] === Symbol.for("react.memo_cache_sentinel")) {
            Fe = <K1 size="md" weight="medium"><T_1 id="KM+S+M"/></K1>;
            e[138] = Fe;
        } else {
            Fe = e[138];
        }
        let Be;
        let Ge;
        if (e[139] === Symbol.for("react.memo_cache_sentinel")) {
            Be = <li {...ke}>{K}<span {...$e}>{Fe}<K1 color="secondary" size="sm"><T_1 id="9vXkA2"/></K1></span></li>;
            Ge = {
                className: "sand-78zum5 sand-1cy8zhl sand-1v2ro7d"
            };
            e[139] = Be;
            e[140] = Ge;
        } else {
            Be = e[139];
            Ge = e[140];
        }
        let We;
        let Ve;
        if (e[141] === Symbol.for("react.memo_cache_sentinel")) {
            We = <K1 as="span" size="sm" weight="medium" className="sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-vy4d1p sand-xk0z11 sand-1e6avla sand-i07v4r sand-19aaqeu">4</K1>;
            Ve = {
                className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-euugli sand-1nn3v0j"
            };
            e[141] = We;
            e[142] = Ve;
        } else {
            We = e[141];
            Ve = e[142];
        }
        let He;
        if (e[143] === Symbol.for("react.memo_cache_sentinel")) {
            He = <K1 size="md" weight="medium"><T_1 id="dY0atl"/></K1>;
            e[143] = He;
        } else {
            He = e[143];
        }
        let Ke;
        if (e[144] === Symbol.for("react.memo_cache_sentinel")) {
            Ke = <li {...Ge}>{We}<span {...Ve}>{He}<K1 color="secondary" size="sm"><T_1 id="0JXV/h"/></K1></span></li>;
            e[144] = Ke;
        } else {
            Ke = e[144];
        }
        let we;
        if (e[145] !== I) {
            we = <ol {...D}>{I}{W}{Be}{Ke}</ol>;
            e[145] = I;
            e[146] = we;
        } else {
            we = e[146];
        }
        let Ye;
        if (e[147] === Symbol.for("react.memo_cache_sentinel")) {
            Ye = <K1 color="secondary" size="sm"><T_1 id="s1ydMg"/></K1>;
            e[147] = Ye;
        } else {
            Ye = e[147];
        }
        const ls = u ? fe : null;
        let Ae;
        if (e[148] !== we || e[149] !== ls) {
            Ae = <x_1.Body><div {...R}>{we}{Ye}{ls}</div></x_1.Body>;
            e[148] = we;
            e[149] = ls;
            e[150] = Ae;
        } else {
            Ae = e[150];
        }
        let Ze;
        if (e[151] === Symbol.for("react.memo_cache_sentinel")) {
            Ze = <T_1 id="dEgA5A"/>;
            e[151] = Ze;
        } else {
            Ze = e[151];
        }
        let Ee;
        if (e[152] !== L) {
            Ee = <x_1.Action onClick={L}>{Ze}</x_1.Action>;
            e[152] = L;
            e[153] = Ee;
        } else {
            Ee = e[153];
        }
        let Qe;
        if (e[154] === Symbol.for("react.memo_cache_sentinel")) {
            Qe = <T_1 id="6gRgw8"/>;
            e[154] = Qe;
        } else {
            Qe = e[154];
        }
        let Re;
        if (e[155] !== v.isCheckingReadiness || e[156] !== v.refreshReadiness) {
            Re = <x_1.Action disabled={v.isCheckingReadiness} onClick={v.refreshReadiness} variant="primary">{Qe}</x_1.Action>;
            e[155] = v.isCheckingReadiness;
            e[156] = v.refreshReadiness;
            e[157] = Re;
        } else {
            Re = e[157];
        }
        let Ie;
        if (e[158] !== Ee || e[159] !== Re) {
            Ie = <x_1.ActionBar>{Ee}{Re}</x_1.ActionBar>;
            e[158] = Ee;
            e[159] = Re;
            e[160] = Ie;
        } else {
            Ie = e[160];
        }
        let Xe;
        if (e[161] !== h || e[162] !== Ae || e[163] !== Ie) {
            Xe = <x_1.Root onOpenChange={h} open role="alertdialog" variant="rich" width={440}>{w}{Ae}{Ie}</x_1.Root>;
            e[161] = h;
            e[162] = Ae;
            e[163] = Ie;
            e[164] = Xe;
        } else {
            Xe = e[164];
        }
        return Xe;
    }
    if (v.readiness.state !== "ready") {
        let h = null;
        if (v.readiness.state === "error") {
            let I;
            if (e[165] !== v.readiness.detail) {
                I = <K1 color="red" size="md">{v.readiness.detail}</K1>;
                e[165] = v.readiness.detail;
                e[166] = I;
            } else {
                I = e[166];
            }
            h = I;
        } else if (v.readiness.state === "missing-cli" && u) {
            let I;
            if (e[167] === Symbol.for("react.memo_cache_sentinel")) {
                I = <K1 color="secondary" size="md" className="sand-11gisft"><T_1 id="SDUL4S"/></K1>;
                e[167] = I;
            } else {
                I = e[167];
            }
            h = I;
        } else if (v.readiness.state === "missing-cli" && !c) {
            let I;
            if (e[168] === Symbol.for("react.memo_cache_sentinel")) {
                I = <K1 color="secondary" size="md" className="sand-11gisft"><T_1 id="H7CDxN"/></K1>;
                e[168] = I;
            } else {
                I = e[168];
            }
            h = I;
        }
        let C;
        if (e[169] === Symbol.for("react.memo_cache_sentinel")) {
            C = {
                className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
            };
            e[169] = C;
        } else {
            C = e[169];
        }
        const w = h;
        let R;
        if (e[170] === Symbol.for("react.memo_cache_sentinel")) {
            R = {
                className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-1a02dak"
            };
            e[170] = R;
        } else {
            R = e[170];
        }
        let D;
        if (e[171] === Symbol.for("react.memo_cache_sentinel")) {
            D = <T_1 id="Timamj"/>;
            e[171] = D;
        } else {
            D = e[171];
        }
        let $;
        if (e[172] !== v.isCheckingReadiness || e[173] !== v.refreshReadiness) {
            $ = <Ne1 disabled={v.isCheckingReadiness} onClick={v.refreshReadiness} size="md" type="button" variant="primary">{D}</Ne1>;
            e[172] = v.isCheckingReadiness;
            e[173] = v.refreshReadiness;
            e[174] = $;
        } else {
            $ = e[174];
        }
        let U;
        if (e[175] !== Y || e[176] !== $) {
            U = <span {...R}>{$}{Y}</span>;
            e[175] = Y;
            e[176] = $;
            e[177] = U;
        } else {
            U = e[177];
        }
        const B = u ? fe : null;
        let G;
        if (e[178] !== h || e[179] !== U || e[180] !== B) {
            G = <div {...C}>{w}{U}{B}</div>;
            e[178] = h;
            e[179] = U;
            e[180] = B;
            e[181] = G;
        } else {
            G = e[181];
        }
        return G;
    }
    let ce;
    if (e[182] === Symbol.for("react.memo_cache_sentinel")) {
        ce = {
            className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
        };
        e[182] = ce;
    } else {
        ce = e[182];
    }
    let T;
    if (e[183] === Symbol.for("react.memo_cache_sentinel")) {
        T = {
            className: "sand-78zum5 sand-dt5ytf sand-167g77z"
        };
        e[183] = T;
    } else {
        T = e[183];
    }
    let he;
    if (e[184] !== V || e[185] !== H || e[186] !== P?.accountUuid) {
        let h;
        if (e[188] !== H || e[189] !== P?.accountUuid) {
            h = (C)=>{
                const w = H.has(C.accountUuid);
                const checked = P?.accountUuid === C.accountUuid;
                return <label key={C.accountUuid} {...{
                    0: {
                        className: "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-10dr8xq sand-qin4a2 sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-4pepcl sand-1ypdohk sand-jbqb8w sand-1iuyybk"
                    },
                    2: {
                        className: "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-10dr8xq sand-qin4a2 sand-mkeg23 sand-1y0btm7 sand-4pepcl sand-1ypdohk sand-1tjqsyf sand-f1vpex"
                    },
                    1: {
                        className: "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-10dr8xq sand-qin4a2 sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-4pepcl sand-jbqb8w sand-1iuyybk sand-t0e3qv sand-197sbye"
                    },
                    3: {
                        className: "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-10dr8xq sand-qin4a2 sand-mkeg23 sand-1y0btm7 sand-4pepcl sand-1tjqsyf sand-f1vpex sand-t0e3qv sand-197sbye"
                    }
                }[!!checked << 1 | !!w << 0]}><input checked={checked} disabled={w} name="sand-1password-account" onChange={()=>setB(C.accountUuid)} type="radio" value={C.accountUuid} className="sand-10l6tqk sand-1i1rx1s sand-jm9jq1 sand-1ghz6dp sand-g01cxk sand-47corl"/><Fs checked={checked} disabled={w}/><span className="sand-78zum5 sand-dt5ytf sand-euugli sand-1iyjqo2"><K1 size="lg" weight="medium" className="sand-euugli sand-j0a0fe">{C.email}</K1><K1 color="secondary" size="sm" className="sand-euugli sand-j0a0fe">{C.url}</K1></span></label>;
            };
            e[188] = H;
            e[189] = P?.accountUuid;
            e[190] = h;
        } else {
            h = e[190];
        }
        he = V.map(h);
        e[184] = V;
        e[185] = H;
        e[186] = P?.accountUuid;
        e[187] = he;
    } else {
        he = e[187];
    }
    let be;
    if (e[191] !== he) {
        be = <div aria-label={fW} role="radiogroup" {...T}>{he}</div>;
        e[191] = he;
        e[192] = be;
    } else {
        be = e[192];
    }
    let ge;
    if (e[193] !== r || e[194] !== P) {
        ge = P != null && r[P.accountUuid] != null ? <K1 color="red" size="md">{r[P.accountUuid]}</K1> : null;
        e[193] = r;
        e[194] = P;
        e[195] = ge;
    } else {
        ge = e[195];
    }
    let ze;
    if (e[196] === Symbol.for("react.memo_cache_sentinel")) {
        ze = {
            className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-1a02dak"
        };
        e[196] = ze;
    } else {
        ze = e[196];
    }
    const ts = P == null;
    let Oe;
    if (e[197] === Symbol.for("react.memo_cache_sentinel")) {
        Oe = <T_1 id="Timamj"/>;
        e[197] = Oe;
    } else {
        Oe = e[197];
    }
    let Ne;
    if (e[198] !== me || e[199] !== ts) {
        Ne = <Ne1 disabled={ts} onClick={me} size="md" type="button" variant="primary">{Oe}</Ne1>;
        e[198] = me;
        e[199] = ts;
        e[200] = Ne;
    } else {
        Ne = e[200];
    }
    let Ce;
    if (e[201] !== Y || e[202] !== Ne) {
        Ce = <span {...ze}>{Ne}{Y}</span>;
        e[201] = Y;
        e[202] = Ne;
        e[203] = Ce;
    } else {
        Ce = e[203];
    }
    let Le;
    if (e[204] !== be || e[205] !== ge || e[206] !== Ce) {
        Le = <div {...ce}>{be}{ge}{Ce}</div>;
        e[204] = be;
        e[205] = ge;
        e[206] = Ce;
        e[207] = Le;
    } else {
        Le = e[207];
    }
    return Le;
}
function tn() {}
function ln() {}
function an(y) {
    try {
        return new URL(y.includes("://") ? y : `https://${y}`).hostname;
    } catch  {
        return y;
    }
}
function Ks1Component(y) {
    Ks1Component.d = 1260;
    const e = c_1.c(18);
    const { account, items, failure, isSyncing } = y;
    const { _ } = u_1();
    let j;
    if (items == null && failure != null) {
        let c;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                className: "sand-78zum5 sand-6s0dn4 sand-ehausa sand-1lqmthn sand-13e3tqs"
            };
            e[0] = c;
        } else {
            c = e[0];
        }
        let u;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            u = <div {...c}><K1 color="secondary" size="sm"><T_1 id="UAMTPZ"/></K1></div>;
            e[1] = u;
        } else {
            u = e[1];
        }
        j = u;
    } else if (items == null) {
        let c;
        let u;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                className: "sand-78zum5 sand-6s0dn4 sand-ehausa sand-1lqmthn sand-13e3tqs"
            };
            u = <Ss1 size={14} borderWidth={2}/>;
            e[2] = c;
            e[3] = u;
        } else {
            c = e[2];
            u = e[3];
        }
        let f;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            f = <div {...c}>{u}<K1 color="secondary" size="sm"><T_1 id="CU9sRu"/></K1></div>;
            e[4] = f;
        } else {
            f = e[4];
        }
        j = f;
    } else if (items.length === 0) {
        const c = account.vaultName;
        let u;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            u = {
                className: "sand-78zum5 sand-6s0dn4 sand-ehausa sand-1lqmthn sand-13e3tqs"
            };
            e[5] = u;
        } else {
            u = e[5];
        }
        let f;
        if (e[6] !== c) {
            f = <div {...u}><K1 color="secondary" size="sm"><T_1 id="LhoDam" values={{
                vaultName: c
            }}/></K1></div>;
            e[6] = c;
            e[7] = f;
        } else {
            f = e[7];
        }
        j = f;
    } else {
        let c;
        if (e[8] !== items) {
            c = items.map(DnComponent);
            e[8] = items;
            e[9] = c;
        } else {
            c = e[9];
        }
        j = c;
    }
    const a = isSyncing || undefined;
    let x;
    if (e[10] !== _ || e[11] !== account.vaultName) {
        x = _({
            id: "0T1/FY",
            values: {
                0: account.vaultName
            }
        });
        e[10] = _;
        e[11] = account.vaultName;
        e[12] = x;
    } else {
        x = e[12];
    }
    let g;
    if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
        g = {
            className: "sand-78zum5 sand-dt5ytf sand-1xlntvz sand-2f45yy"
        };
        e[13] = g;
    } else {
        g = e[13];
    }
    let p;
    if (e[14] !== j || e[15] !== a || e[16] !== x) {
        p = <div aria-busy={a} aria-label={x} role="group" {...g}>{j}</div>;
        e[14] = j;
        e[15] = a;
        e[16] = x;
        e[17] = p;
    } else {
        p = e[17];
    }
    return p;
}
function DnComponent(y) {
    const e = y.sites[0];
    return <div key={y.credentialId} className="sand-78zum5 sand-6s0dn4 sand-1dbef6d sand-1lqmthn sand-13e3tqs sand-1q4ynmn sand-jbqb8w sand-urtx8w"><span className="sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-gd8bvy sand-1fgtraw sand-ur7f20 sand-1b8i4yy sand-1o0liin"><I_1 name="key" size="md"/></span><span className="sand-78zum5 sand-dt5ytf sand-euugli sand-1iyjqo2"><K1 size="md" weight="medium" className="sand-euugli sand-j0a0fe">{y.title}</K1><K1 color="secondary" size="sm" className="sand-euugli sand-j0a0fe">{e == null ? y.category : `${y.category} · ${an(e)}`}</K1></span></div>;
}
function SsComponent(y) {
    SsComponent.d = 1257;
    const e = c_1.c(81);
    const { account, items, itemsFailure, mutations, onNotice, renewWithTokenEnabled } = y;
    const { i18n, _: __1 } = u_1();
    const g = fh().platform === "darwin";
    const [p, setP] = r_1.useState(false);
    let u;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        u = {
            open: false,
            error: null
        };
        e[0] = u;
    } else {
        u = e[0];
    }
    const [f, setF] = r_1.useState(u);
    const _ = account.lifecycleState !== "active";
    const z = account.accountUuid === fX || renewWithTokenEnabled && !g;
    let b;
    if (e[1] !== onNotice) {
        b = (T)=>{
            T.then(()=>onNotice(null), (he)=>onNotice({
                    kind: "error",
                    text: J_1(he)
                }));
        };
        e[1] = onNotice;
        e[2] = b;
    } else {
        b = e[2];
    }
    const N = b;
    let d;
    if (e[3] !== account || e[4] !== mutations || e[5] !== onNotice) {
        d = (T)=>{
            onNotice(null);
            setF({
                open: true,
                error: null
            });
            mutations.renew(account, T).then(()=>setF({
                    open: false,
                    error: null
                }), (he)=>setF({
                    open: true,
                    error: J_1(he)
                }));
        };
        e[3] = account;
        e[4] = mutations;
        e[5] = onNotice;
        e[6] = d;
    } else {
        d = e[6];
    }
    const r = d;
    let E;
    if (e[7] !== mutations || e[8] !== onNotice) {
        E = ()=>{
            setP(true);
            mutations.sync().then(()=>onNotice(null), (T)=>onNotice({
                    kind: "error",
                    text: J_1(T)
                })).finally(()=>setP(false));
        };
        e[7] = mutations;
        e[8] = onNotice;
        e[9] = E;
    } else {
        E = e[9];
    }
    const A = E;
    const itemCount = items?.length ?? account.itemCount;
    const M = account.accountEmail == null ? null : account.vaultName;
    let F;
    if (e[10] !== __1 || e[11] !== itemCount) {
        F = __1({
            id: "55UuKo",
            values: {
                itemCount
            }
        });
        e[10] = __1;
        e[11] = itemCount;
        e[12] = F;
    } else {
        F = e[12];
    }
    let O;
    if (e[13] !== __1 || e[14] !== account.lastSuccessfulSyncAtMs || e[15] !== i18n) {
        O = account.lastSuccessfulSyncAtMs == null ? __1({
            id: "oL535e"
        }) : __1({
            id: "f9XSNs",
            values: {
                0: i18n.date(new Date(account.lastSuccessfulSyncAtMs), {
                    timeStyle: "short"
                })
            }
        });
        e[13] = __1;
        e[14] = account.lastSuccessfulSyncAtMs;
        e[15] = i18n;
        e[16] = O;
    } else {
        O = e[16];
    }
    let v;
    if (e[17] !== M || e[18] !== F || e[19] !== O) {
        v = [
            M,
            F,
            O
        ].filter(cn);
        e[17] = M;
        e[18] = F;
        e[19] = O;
        e[20] = v;
    } else {
        v = e[20];
    }
    const description = v.join(" · ");
    const V = account.accountEmail ?? account.vaultName;
    let ye;
    if (e[21] !== account.expiresAtMs || e[22] !== i18n) {
        ye = account.expiresAtMs == null ? null : i18n.date(new Date(account.expiresAtMs), {
            dateStyle: "medium"
        });
        e[21] = account.expiresAtMs;
        e[22] = i18n;
        e[23] = ye;
    } else {
        ye = e[23];
    }
    const expiresAt = ye;
    let le = null;
    e: switch(account.lifecycleState){
        case "active":
            break e;
        case "expiring":
        case "grace":
            {
                let T;
                if (e[24] !== expiresAt) {
                    T = <K1 color="yellow" size="sm">{expiresAt == null ? <T_1 id="FKdxEj"/> : <T_1 id="/BWOZr" values={{
                        expiresAt
                    }}/>}</K1>;
                    e[24] = expiresAt;
                    e[25] = T;
                } else {
                    T = e[25];
                }
                le = T;
                break e;
            }
        case "expired":
            {
                let T;
                if (e[26] === Symbol.for("react.memo_cache_sentinel")) {
                    T = <K1 color="red" size="sm"><T_1 id="T1HX80"/></K1>;
                    e[26] = T;
                } else {
                    T = e[26];
                }
                le = T;
                break e;
            }
        case "provider-rejected":
            {
                let T;
                if (e[27] === Symbol.for("react.memo_cache_sentinel")) {
                    T = <K1 color="red" size="sm"><T_1 id="fs0ZUQ"/></K1>;
                    e[27] = T;
                } else {
                    T = e[27];
                }
                le = T;
            }
    }
    let P;
    if (e[28] !== account.lastSyncErrorCode || e[29] !== account.lifecycleState) {
        P = account.lastSyncErrorCode == null || account.lifecycleState === "provider-rejected" ? null : <K1 color="red" size="sm"><T_1 id="vANlhH"/></K1>;
        e[28] = account.lastSyncErrorCode;
        e[29] = account.lifecycleState;
        e[30] = P;
    } else {
        P = e[30];
    }
    const pe = P;
    let me;
    if (e[31] !== le || e[32] !== pe) {
        me = le == null && pe == null ? undefined : <>{le}{pe}</>;
        e[31] = le;
        e[32] = pe;
        e[33] = me;
    } else {
        me = e[33];
    }
    const ue = me;
    let L;
    if (e[34] === Symbol.for("react.memo_cache_sentinel")) {
        L = {
            className: "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-13a6bvl sand-ehausa"
        };
        e[34] = L;
    } else {
        L = e[34];
    }
    let ae;
    if (e[35] !== account || e[36] !== mutations || e[37] !== _ || e[38] !== f.open || e[39] !== z || e[40] !== N) {
        ae = _ ? <Ne1 disabled={mutations.isPending || f.open} onClick={()=>{
            if (z) {
                return setF({
                    open: true,
                    error: null
                });
            }
            return N(mutations.renew(account));
        }} size="sm" type="button" variant="primary"><T_1 id="EkH9pt"/></Ne1> : null;
        e[35] = account;
        e[36] = mutations;
        e[37] = _;
        e[38] = f.open;
        e[39] = z;
        e[40] = N;
        e[41] = ae;
    } else {
        ae = e[41];
    }
    let ie;
    if (e[42] !== p) {
        ie = p ? <T_1 id="ZDY7Fy"/> : <T_1 id="VclML5"/>;
        e[42] = p;
        e[43] = ie;
    } else {
        ie = e[43];
    }
    let Y;
    if (e[44] !== mutations.isPending || e[45] !== A || e[46] !== ie) {
        Y = <Ne1 disabled={mutations.isPending} onClick={A} size="sm" type="button" variant="secondary">{ie}</Ne1>;
        e[44] = mutations.isPending;
        e[45] = A;
        e[46] = ie;
        e[47] = Y;
    } else {
        Y = e[47];
    }
    let Z;
    if (e[48] !== account.connectionId || e[49] !== mutations || e[50] !== N) {
        Z = ()=>N(mutations.disconnect(account.connectionId));
        e[48] = account.connectionId;
        e[49] = mutations;
        e[50] = N;
        e[51] = Z;
    } else {
        Z = e[51];
    }
    let de;
    if (e[52] === Symbol.for("react.memo_cache_sentinel")) {
        de = <T_1 id="t/YqKh"/>;
        e[52] = de;
    } else {
        de = e[52];
    }
    let fe;
    if (e[53] !== mutations.isPending || e[54] !== Z) {
        fe = <Ne1 disabled={mutations.isPending} onClick={Z} size="sm" type="button" variant="secondary">{de}</Ne1>;
        e[53] = mutations.isPending;
        e[54] = Z;
        e[55] = fe;
    } else {
        fe = e[55];
    }
    let te;
    if (e[56] !== ae || e[57] !== Y || e[58] !== fe) {
        te = <span {...L}>{ae}{Y}{fe}</span>;
        e[56] = ae;
        e[57] = Y;
        e[58] = fe;
        e[59] = te;
    } else {
        te = e[59];
    }
    let Q;
    if (e[60] !== ue || e[61] !== V || e[62] !== description || e[63] !== te) {
        Q = <Me anchorId={anchorId} description={description} extraCopy={ue} label={V} variant="card">{te}</Me>;
        e[60] = ue;
        e[61] = V;
        e[62] = description;
        e[63] = te;
        e[64] = Q;
    } else {
        Q = e[64];
    }
    let X;
    if (e[65] !== account.vaultName || e[66] !== mutations.isPending || e[67] !== r || e[68] !== f.error || e[69] !== f.open) {
        X = f.open ? <div className="sand-12ffz05 sand-2f45yy"><Os1Component error={f.error} intent="renew" isPending={mutations.isPending} onCancel={()=>setF({
                open: false,
                error: null
            })} onSubmit={r} vaultName={account.vaultName}/></div> : null;
        e[65] = account.vaultName;
        e[66] = mutations.isPending;
        e[67] = r;
        e[68] = f.error;
        e[69] = f.open;
        e[70] = X;
    } else {
        X = e[70];
    }
    let J;
    if (e[71] !== account || e[72] !== p || e[73] !== items || e[74] !== itemsFailure) {
        J = <Ks1Component account={account} failure={itemsFailure} isSyncing={p} items={items}/>;
        e[71] = account;
        e[72] = p;
        e[73] = items;
        e[74] = itemsFailure;
        e[75] = J;
    } else {
        J = e[75];
    }
    let ce;
    if (e[76] !== V || e[77] !== Q || e[78] !== X || e[79] !== J) {
        ce = <div aria-label={V} role="group">{Q}{X}{J}</div>;
        e[76] = V;
        e[77] = Q;
        e[78] = X;
        e[79] = J;
        e[80] = ce;
    } else {
        ce = e[80];
    }
    return ce;
}
function cn(y) {
    return y != null;
}
function Zs1Component(y) {
    Zs1Component.d = 1256;
    const e = c_1.c(33);
    const { account, mutations, onNotice } = y;
    const { _: __1 } = u_1();
    const l = account.brokerState ?? "connected";
    let j;
    if (e[0] !== __1) {
        j = __1({
            id: "rQ+n+C"
        });
        e[0] = __1;
        e[1] = j;
    } else {
        j = e[1];
    }
    let a = j;
    if (l === "connected") {
        let r;
        if (e[2] !== __1) {
            r = __1({
                id: "4PxcyL"
            });
            e[2] = __1;
            e[3] = r;
        } else {
            r = e[3];
        }
        a = r;
    } else if (l === "pairing") {
        let r;
        if (e[4] !== __1) {
            r = __1({
                id: "hcqAkx"
            });
            e[4] = __1;
            e[5] = r;
        } else {
            r = e[5];
        }
        a = r;
    }
    let x;
    if (e[6] !== account.connectionId || e[7] !== mutations || e[8] !== onNotice) {
        x = ()=>{
            onNotice(null);
            mutations.connectOAuth(account.connectionId).then((r)=>{
                if (!r.ok && r.code !== "cancelled") {
                    onNotice({
                        kind: "error",
                        text: r.message
                    });
                }
            }, (r)=>onNotice({
                    kind: "error",
                    text: J_1(r)
                }));
        };
        e[6] = account.connectionId;
        e[7] = mutations;
        e[8] = onNotice;
        e[9] = x;
    } else {
        x = e[9];
    }
    const g = x;
    let p;
    if (e[10] !== l) {
        p = l === "connected" ? undefined : <K1 color={l === "pairing" ? "yellow" : "red"} size="sm">{l === "pairing" ? <T_1 id="CraD1c"/> : <T_1 id="mHVPm5"/>}</K1>;
        e[10] = l;
        e[11] = p;
    } else {
        p = e[11];
    }
    const c = p;
    const description = a;
    let f;
    if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
        f = {
            className: "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-13a6bvl sand-ehausa"
        };
        e[12] = f;
    } else {
        f = e[12];
    }
    let S;
    if (e[13] !== mutations.isConnectingOAuth || e[14] !== mutations.isPending || e[15] !== g || e[16] !== l) {
        S = l === "connected" ? null : <Ne1 disabled={mutations.isPending} onClick={g} size="sm" type="button" variant="primary">{mutations.isConnectingOAuth ? <T_1 id="BtFje2"/> : <T_1 id="gcoiFh"/>}</Ne1>;
        e[13] = mutations.isConnectingOAuth;
        e[14] = mutations.isPending;
        e[15] = g;
        e[16] = l;
        e[17] = S;
    } else {
        S = e[17];
    }
    let _;
    if (e[18] !== account.connectionId || e[19] !== mutations || e[20] !== onNotice) {
        _ = ()=>{
            mutations.disconnect(account.connectionId).then(()=>onNotice(null), (r)=>onNotice({
                    kind: "error",
                    text: J_1(r)
                }));
        };
        e[18] = account.connectionId;
        e[19] = mutations;
        e[20] = onNotice;
        e[21] = _;
    } else {
        _ = e[21];
    }
    let z;
    if (e[22] === Symbol.for("react.memo_cache_sentinel")) {
        z = <T_1 id="+K0AvT"/>;
        e[22] = z;
    } else {
        z = e[22];
    }
    let b;
    if (e[23] !== mutations.isPending || e[24] !== _) {
        b = <Ne1 disabled={mutations.isPending} onClick={_} size="sm" type="button" variant="secondary">{z}</Ne1>;
        e[23] = mutations.isPending;
        e[24] = _;
        e[25] = b;
    } else {
        b = e[25];
    }
    let N;
    if (e[26] !== S || e[27] !== b) {
        N = <span {...f}>{S}{b}</span>;
        e[26] = S;
        e[27] = b;
        e[28] = N;
    } else {
        N = e[28];
    }
    let d;
    if (e[29] !== a || e[30] !== c || e[31] !== N) {
        d = <div aria-label={fW} role="group"><Me anchorId={anchorId} description={description} extraCopy={c} label={fW} variant="card">{N}</Me></div>;
        e[29] = a;
        e[30] = c;
        e[31] = N;
        e[32] = d;
    } else {
        d = e[32];
    }
    return d;
}
function NsComponent(y) {
    NsComponent.d = 1258;
    const e = c_1.c(21);
    const { mutations, onNotice } = y;
    const [o, setO] = r_1.useState(null);
    let l;
    if (e[0] !== mutations || e[1] !== onNotice) {
        l = ()=>{
            setO(null);
            onNotice(null);
            mutations.connectOAuth().then((_)=>{
                if (!_.ok && _.code !== "cancelled") {
                    setO(_.message);
                }
            }, (_)=>setO(J_1(_)));
        };
        e[0] = mutations;
        e[1] = onNotice;
        e[2] = l;
    } else {
        l = e[2];
    }
    const j = l;
    let a;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        a = <K1 color="secondary" size="md"><T_1 id="wF9KAc"/></K1>;
        e[3] = a;
    } else {
        a = e[3];
    }
    let x;
    if (e[4] !== o) {
        x = o == null ? null : <K1 color="red" size="sm">{o}</K1>;
        e[4] = o;
        e[5] = x;
    } else {
        x = e[5];
    }
    let g;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        g = {
            className: "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-13a6bvl sand-ehausa"
        };
        e[6] = g;
    } else {
        g = e[6];
    }
    let p;
    if (e[7] !== mutations) {
        p = mutations.isConnectingOAuth ? <Ne1 onClick={()=>{
            mutations.cancelOAuth();
        }} size="md" type="button" variant="secondary"><T_1 id="dEgA5A"/></Ne1> : null;
        e[7] = mutations;
        e[8] = p;
    } else {
        p = e[8];
    }
    let c;
    if (e[9] !== mutations.isConnectingOAuth) {
        c = mutations.isConnectingOAuth ? <T_1 id="BtFje2"/> : <T_1 id="Timamj"/>;
        e[9] = mutations.isConnectingOAuth;
        e[10] = c;
    } else {
        c = e[10];
    }
    let u;
    if (e[11] !== j || e[12] !== mutations.isPending || e[13] !== c) {
        u = <Ne1 disabled={mutations.isPending} onClick={j} size="md" type="button" variant="primary">{c}</Ne1>;
        e[11] = j;
        e[12] = mutations.isPending;
        e[13] = c;
        e[14] = u;
    } else {
        u = e[14];
    }
    let f;
    if (e[15] !== p || e[16] !== u) {
        f = <span {...g}>{p}{u}</span>;
        e[15] = p;
        e[16] = u;
        e[17] = f;
    } else {
        f = e[17];
    }
    let S;
    if (e[18] !== x || e[19] !== f) {
        S = <>{a}{x}{f}</>;
        e[18] = x;
        e[19] = f;
        e[20] = S;
    } else {
        S = e[20];
    }
    return S;
}
function CsComponent(y) {
    CsComponent.d = 1259;
    const e = c_1.c(35);
    const { onNotice, heading, startConnecting } = y;
    const title = heading === undefined ? fW : heading;
    const l = startConnecting === undefined ? false : startConnecting;
    const j = b7();
    const a = e_1();
    const x = a_1();
    const mutations = f_1();
    const renewWithTokenEnabled = b9("sand_1pass_manual_service_acct");
    const c = b9("sand_new_1pass");
    const u = bT();
    let f;
    if (e[0] !== u) {
        f = ()=>{
            u("sand_1pass_manual_service_acct");
            u("sand_new_1pass");
            return rn;
        };
        e[0] = u;
        e[1] = f;
    } else {
        f = e[1];
    }
    i(f);
    const [S, setS] = r_1.useState(false);
    aU(j.credentials.load);
    const a_data = a.data;
    if (a_data?.connected === true && !S) {
        const d = x.data;
        let r;
        if (e[2] !== d || e[3] !== x.error || e[4] !== mutations || e[5] !== onNotice || e[6] !== renewWithTokenEnabled || e[7] !== a_data.accounts) {
            let A;
            if (e[9] !== d || e[10] !== x.error || e[11] !== mutations || e[12] !== onNotice || e[13] !== renewWithTokenEnabled) {
                A = (account, M)=>{
                    if (account.connectionKind === "oauth-broker") {
                        return <Zs1Component key={account.connectionId} account={account} mutations={mutations} onNotice={onNotice}/>;
                    }
                    return <SsComponent key={account.connectionId} account={account} items={d === undefined ? null : d?.items.filter((F)=>F.connectionId === account.connectionId) ?? []} itemsFailure={x.error} mutations={mutations} onNotice={onNotice} renewWithTokenEnabled={renewWithTokenEnabled}/>;
                };
                e[9] = d;
                e[10] = x.error;
                e[11] = mutations;
                e[12] = onNotice;
                e[13] = renewWithTokenEnabled;
                e[14] = A;
            } else {
                A = e[14];
            }
            r = a_data.accounts.map(A);
            e[2] = d;
            e[3] = x.error;
            e[4] = mutations;
            e[5] = onNotice;
            e[6] = renewWithTokenEnabled;
            e[7] = a_data.accounts;
            e[8] = r;
        } else {
            r = e[8];
        }
        let E;
        if (e[15] !== title || e[16] !== r) {
            E = <G title={title}>{r}</G>;
            e[15] = title;
            e[16] = r;
            e[17] = E;
        } else {
            E = e[17];
        }
        return E;
    }
    let b;
    if (a.error != null) {
        let d;
        if (e[18] === Symbol.for("react.memo_cache_sentinel")) {
            d = <K1 color="secondary" size="md"><T_1 id="mmzR7e"/></K1>;
            e[18] = d;
        } else {
            d = e[18];
        }
        let r;
        if (e[19] === Symbol.for("react.memo_cache_sentinel")) {
            r = <T_1 id="6gRgw8"/>;
            e[19] = r;
        } else {
            r = e[19];
        }
        let E;
        if (e[20] !== a.isFetching || e[21] !== a.refresh) {
            E = <>{d}<span><Ne1 disabled={a.isFetching} onClick={a.refresh} size="md" type="button" variant="secondary">{r}</Ne1></span></>;
            e[20] = a.isFetching;
            e[21] = a.refresh;
            e[22] = E;
        } else {
            E = e[22];
        }
        b = E;
    } else if (a_data == null) {
        let d;
        if (e[23] === Symbol.for("react.memo_cache_sentinel")) {
            d = <div className="sand-78zum5 sand-6s0dn4 sand-21xpn4"><Ss1 size={18} borderWidth={2}/></div>;
            e[23] = d;
        } else {
            d = e[23];
        }
        b = d;
    } else if (c) {
        let d;
        if (e[24] !== mutations || e[25] !== onNotice) {
            d = <NsComponent mutations={mutations} onNotice={onNotice}/>;
            e[24] = mutations;
            e[25] = onNotice;
            e[26] = d;
        } else {
            d = e[26];
        }
        b = d;
    } else {
        let d;
        if (e[27] !== l) {
            d = l ? {
                initialView: "pick"
            } : {};
            e[27] = l;
            e[28] = d;
        } else {
            d = e[28];
        }
        let r;
        if (e[29] !== onNotice || e[30] !== d) {
            r = <Vs1Component onNotice={onNotice} onSuccessHoldChange={setS} {...d}/>;
            e[29] = onNotice;
            e[30] = d;
            e[31] = r;
        } else {
            r = e[31];
        }
        b = r;
    }
    let N;
    if (e[32] !== b || e[33] !== title) {
        N = <G surface="plain" title={title}>{b}</G>;
        e[32] = b;
        e[33] = title;
        e[34] = N;
    } else {
        N = e[34];
    }
    return N;
}
function rn() {}
const ws = {
    addressText: {
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        $$css: true
    },
    claimInputSurface: {
        kWkggS: "sand-13l7odt",
        $$css: true
    }
};
function on(y) {
    return y[0] ?? null;
}
function As(status) {
    switch(status){
        case "loading":
            return "loading";
        case "failed":
            return "failed";
        default:
            return "unavailable";
    }
}
function Es(y) {
    if (y.status === "failed") {
        return y.failure.grokBotEmailRefusal ?? null;
    }
    return null;
}
function Ms1Component(y) {
    Ms1Component.d = 1274;
    const e = c_1.c(27);
    const { domain, isPending, onClaim } = y;
    const { _: __1 } = u_1();
    const [l, setL] = r_1.useState("");
    let a;
    if (e[0] !== onClaim || e[1] !== l) {
        a = (r)=>{
            r.preventDefault();
            onClaim(l.trim().toLowerCase());
        };
        e[0] = onClaim;
        e[1] = l;
        e[2] = a;
    } else {
        a = e[2];
    }
    const x = a;
    let g;
    let p;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        g = {
            className: "sand-78zum5 sand-6s0dn4 sand-ehausa"
        };
        p = {
            className: "sand-dzyupr"
        };
        e[3] = g;
        e[4] = p;
    } else {
        g = e[3];
        p = e[4];
    }
    let c;
    if (e[5] !== __1) {
        c = __1({
            id: "grJGrm"
        });
        e[5] = __1;
        e[6] = c;
    } else {
        c = e[6];
    }
    let u;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        u = (r)=>setL(r.currentTarget.value);
        e[7] = u;
    } else {
        u = e[7];
    }
    let placeholder;
    if (e[8] !== __1) {
        placeholder = __1({
            id: "2j4Igv"
        });
        e[8] = __1;
        e[9] = placeholder;
    } else {
        placeholder = e[9];
    }
    let S;
    if (e[10] !== isPending || e[11] !== c || e[12] !== placeholder || e[13] !== l) {
        S = <As1.Input aria-label={c} autoCapitalize="off" autoCorrect="off" disabled={isPending} onChange={u} placeholder={placeholder} spellCheck={false} value={l}/>;
        e[10] = isPending;
        e[11] = c;
        e[12] = placeholder;
        e[13] = l;
        e[14] = S;
    } else {
        S = e[14];
    }
    let _;
    if (e[15] !== domain) {
        _ = <As1.Span>@{domain}</As1.Span>;
        e[15] = domain;
        e[16] = _;
    } else {
        _ = e[16];
    }
    let z;
    if (e[17] !== S || e[18] !== _) {
        z = <div {...p}><As1 rootStyle={ws.claimInputSurface} size="lg">{S}{_}</As1></div>;
        e[17] = S;
        e[18] = _;
        e[19] = z;
    } else {
        z = e[19];
    }
    let b;
    if (e[20] === Symbol.for("react.memo_cache_sentinel")) {
        b = <T_1 id="cyvZe6"/>;
        e[20] = b;
    } else {
        b = e[20];
    }
    let N;
    if (e[21] !== isPending) {
        N = <Ne1 disabled={isPending} pending={isPending} size="sm" type="submit" variant="secondary">{b}</Ne1>;
        e[21] = isPending;
        e[22] = N;
    } else {
        N = e[22];
    }
    let d;
    if (e[23] !== x || e[24] !== N || e[25] !== z) {
        d = <form onSubmit={x} {...g}>{z}{N}</form>;
        e[23] = x;
        e[24] = N;
        e[25] = z;
        e[26] = d;
    } else {
        d = e[26];
    }
    return d;
}
function Us1Component(y) {
    Us1Component.d = 1276;
    const e = c_1.c(9);
    const { status, refusal, onRetry } = y;
    if (status === "loading") {
        let l;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = <K1 as="span" color="tertiary" size="sm"><T_1 id="Pwqkdw"/></K1>;
            e[0] = l;
        } else {
            l = e[0];
        }
        return l;
    }
    if (refusal != null && refusal.length > 0) {
        let l;
        if (e[1] !== refusal) {
            l = <K1 as="span" color="tertiary" size="sm">{refusal}</K1>;
            e[1] = refusal;
            e[2] = l;
        } else {
            l = e[2];
        }
        return l;
    }
    if (status === "failed") {
        let l;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1oot3zn"
            };
            e[3] = l;
        } else {
            l = e[3];
        }
        let j;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            j = <K1 as="span" color="red" size="sm"><T_1 id="VHuQVL"/></K1>;
            e[4] = j;
        } else {
            j = e[4];
        }
        let a;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            a = <T_1 id="6gRgw8"/>;
            e[5] = a;
        } else {
            a = e[5];
        }
        let x;
        if (e[6] !== onRetry) {
            x = <span {...l}>{j}<Ne1 onClick={onRetry} size="sm" variant="secondary">{a}</Ne1></span>;
            e[6] = onRetry;
            e[7] = x;
        } else {
            x = e[7];
        }
        return x;
    }
    let t;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        t = <K1 as="span" color="tertiary" size="sm"><T_1 id="0BvlbM"/></K1>;
        e[8] = t;
    } else {
        t = e[8];
    }
    return t;
}
function RsComponent(y) {
    RsComponent.d = 1273;
    const e = c_1.c(11);
    const { inbox } = y;
    const { _ } = u_1();
    let o;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        o = {
            className: "sand-3nfvp2 sand-6s0dn4 sand-11twubx sand-euugli"
        };
        e[0] = o;
    } else {
        o = e[0];
    }
    let t;
    if (e[1] !== inbox.email) {
        t = <K1 as="span" color="primary" rootStyle={ws.addressText} size="md">{inbox.email}</K1>;
        e[1] = inbox.email;
        e[2] = t;
    } else {
        t = e[2];
    }
    let l;
    if (e[3] !== _) {
        l = _({
            id: "/lLfdi"
        });
        e[3] = _;
        e[4] = l;
    } else {
        l = e[4];
    }
    let j;
    if (e[5] !== inbox.email || e[6] !== l) {
        j = <Bs label={l} text={inbox.email}/>;
        e[5] = inbox.email;
        e[6] = l;
        e[7] = j;
    } else {
        j = e[7];
    }
    let a;
    if (e[8] !== t || e[9] !== j) {
        a = <span {...o}>{t}{j}</span>;
        e[8] = t;
        e[9] = j;
        e[10] = a;
    } else {
        a = e[10];
    }
    return a;
}
function IsComponent(y) {
    IsComponent.d = 1275;
    const e = c_1.c(28);
    const { domain } = y;
    const { _: __1 } = u_1();
    const o = b7();
    aU(o.grokBotEmailInbox.load);
    const t = a_2();
    const { create, isPending } = b_1();
    const [a, setA] = r_1.useState(null);
    let g = null;
    if (t.status === "ready") {
        g = t.value;
    } else if (t.status === "loading" || t.status === "failed") {
        g = t.previous ?? null;
    }
    let p;
    if (e[0] !== g) {
        p = g == null ? null : on(g);
        e[0] = g;
        e[1] = p;
    } else {
        p = e[1];
    }
    const inbox = p;
    let u;
    if (e[2] !== create) {
        u = (d)=>{
            setA(null);
            bV(async ()=>{
                await create({
                    username: d,
                    displayName: ""
                });
            }, setA);
        };
        e[2] = create;
        e[3] = u;
    } else {
        u = e[3];
    }
    const f = u;
    let S;
    if (inbox != null) {
        let d;
        if (e[4] !== inbox) {
            d = <RsComponent inbox={inbox}/>;
            e[4] = inbox;
            e[5] = d;
        } else {
            d = e[5];
        }
        S = d;
    } else if (g != null) {
        let d;
        if (e[6] !== f || e[7] !== domain || e[8] !== isPending) {
            d = <Ms1Component domain={domain} isPending={isPending} onClaim={f}/>;
            e[6] = f;
            e[7] = domain;
            e[8] = isPending;
            e[9] = d;
        } else {
            d = e[9];
        }
        S = d;
    } else {
        const d = o.grokBotEmailInbox.retry;
        let r;
        if (e[10] !== t) {
            r = Es(t);
            e[10] = t;
            e[11] = r;
        } else {
            r = e[11];
        }
        let E;
        if (e[12] !== t.status) {
            E = As(t.status);
            e[12] = t.status;
            e[13] = E;
        } else {
            E = e[13];
        }
        let A;
        if (e[14] !== o.grokBotEmailInbox.retry || e[15] !== r || e[16] !== E) {
            A = <Us1Component onRetry={d} refusal={r} status={E}/>;
            e[14] = o.grokBotEmailInbox.retry;
            e[15] = r;
            e[16] = E;
            e[17] = A;
        } else {
            A = e[17];
        }
        S = A;
    }
    let _;
    if (e[18] !== __1) {
        _ = __1({
            id: "ATGYL1"
        });
        e[18] = __1;
        e[19] = _;
    } else {
        _ = e[19];
    }
    let z;
    if (e[20] !== S || e[21] !== _) {
        z = <Me anchorId={anchorId} label={_} variant="card">{S}</Me>;
        e[20] = S;
        e[21] = _;
        e[22] = z;
    } else {
        z = e[22];
    }
    let b;
    if (e[23] !== a) {
        b = a == null ? null : <div className="sand-9f619 sand-exx8yu sand-1n9uuka sand-usxwy5 sand-cssynl" role="alert"><K1 as="span" color="red" size="sm">{a.text}</K1></div>;
        e[23] = a;
        e[24] = b;
    } else {
        b = e[24];
    }
    let N;
    if (e[25] !== z || e[26] !== b) {
        N = <>{z}{b}</>;
        e[25] = z;
        e[26] = b;
        e[27] = N;
    } else {
        N = e[27];
    }
    return N;
}
function Qs1Component(y) {
    Qs1Component.d = 1277;
    const e = c_1.c(7);
    const { inboxes } = y;
    const { _ } = u_1();
    let o;
    if (e[0] !== _ || e[1] !== inboxes) {
        let l;
        if (e[3] !== _) {
            l = (j, a)=><Me key={j.email} anchorId={anchorId} copyText={{
                    label: _({
                        id: "/lLfdi"
                    }),
                    value: j.email
                }} label={j.email} variant="card"/>;
            e[3] = _;
            e[4] = l;
        } else {
            l = e[4];
        }
        o = inboxes.map(l);
        e[0] = _;
        e[1] = inboxes;
        e[2] = o;
    } else {
        o = e[2];
    }
    let t;
    if (e[5] !== o) {
        t = <>{o}</>;
        e[5] = o;
        e[6] = t;
    } else {
        t = e[6];
    }
    return t;
}
function TsComponent(y) {
    TsComponent.d = 1278;
    const e = c_1.c(30);
    const { domain } = y;
    const { _: __1 } = u_1();
    const o = b7();
    aU(o.grokBotEmailInbox.load);
    const t = a_2();
    const { create, isPending } = b_1();
    const [a, setA] = r_1.useState(null);
    const [g, setG] = r_1.useState(false);
    let inboxes = null;
    if (t.status === "ready") {
        inboxes = t.value;
    } else if (t.status === "loading" || t.status === "failed") {
        inboxes = t.previous ?? null;
    }
    let u;
    if (e[0] !== create) {
        u = (r)=>{
            setA(null);
            bV(async ()=>{
                await create({
                    username: r,
                    displayName: ""
                });
                setG(false);
            }, setA);
        };
        e[0] = create;
        e[1] = u;
    } else {
        u = e[1];
    }
    const f = u;
    if (inboxes == null) {
        let r;
        if (e[2] !== __1) {
            r = __1({
                id: "ATGYL1"
            });
            e[2] = __1;
            e[3] = r;
        } else {
            r = e[3];
        }
        const E = o.grokBotEmailInbox.retry;
        let A;
        if (e[4] !== t) {
            A = Es(t);
            e[4] = t;
            e[5] = A;
        } else {
            A = e[5];
        }
        let q;
        if (e[6] !== t.status) {
            q = As(t.status);
            e[6] = t.status;
            e[7] = q;
        } else {
            q = e[7];
        }
        let M;
        if (e[8] !== o.grokBotEmailInbox.retry || e[9] !== A || e[10] !== q) {
            M = <Us1Component onRetry={E} refusal={A} status={q}/>;
            e[8] = o.grokBotEmailInbox.retry;
            e[9] = A;
            e[10] = q;
            e[11] = M;
        } else {
            M = e[11];
        }
        let F;
        if (e[12] !== r || e[13] !== M) {
            F = <G title={null}><Me anchorId={anchorId} label={r} variant="card">{M}</Me></G>;
            e[12] = r;
            e[13] = M;
            e[14] = F;
        } else {
            F = e[14];
        }
        return F;
    }
    const S = g || inboxes.length === 0;
    let _;
    if (e[15] !== inboxes.length) {
        _ = fY({
            claimed: inboxes.length
        });
        e[15] = inboxes.length;
        e[16] = _;
    } else {
        _ = e[16];
    }
    const z = _;
    let b;
    if (e[17] !== __1 || e[18] !== inboxes) {
        b = inboxes.length === 0 ? null : <G title={__1({
            id: "ATGYL1"
        })}><Qs1Component inboxes={inboxes}/></G>;
        e[17] = __1;
        e[18] = inboxes;
        e[19] = b;
    } else {
        b = e[19];
    }
    let N;
    if (e[20] !== z || e[21] !== f || e[22] !== domain || e[23] !== isPending || e[24] !== a || e[25] !== S) {
        N = z ? <div className="sand-9f619 sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-ehausa sand-1t8xvyj">{S ? <Ms1Component domain={domain} isPending={isPending} onClaim={f}/> : <Ne1 onClick={()=>setG(true)} size="md" style={a_.body2} type="button" variant="secondary"><T_1 id="zmsQYr"/></Ne1>}{a == null ? null : <span role="alert"><K1 as="span" color="red" size="sm">{a.text}</K1></span>}</div> : null;
        e[20] = z;
        e[21] = f;
        e[22] = domain;
        e[23] = isPending;
        e[24] = a;
        e[25] = S;
        e[26] = N;
    } else {
        N = e[26];
    }
    let d;
    if (e[27] !== b || e[28] !== N) {
        d = <>{b}{N}</>;
        e[27] = b;
        e[28] = N;
        e[29] = d;
    } else {
        d = e[29];
    }
    return d;
}
function PsComponent() {
    PsComponent.d = 1279;
    const y = c_1.c(4);
    const { usesProductionBackend } = fh();
    const n = usesProductionBackend === undefined ? true : usesProductionBackend;
    const i = b9("grok_bot_agent_mail_multiple_inboxes");
    const domain = n ? fZ : f_;
    if (i) {
        let l;
        if (y[0] !== domain) {
            l = <TsComponent domain={domain}/>;
            y[0] = domain;
            y[1] = l;
        } else {
            l = y[1];
        }
        return l;
    }
    let t;
    if (y[2] !== domain) {
        t = <G title={null}><IsComponent domain={domain}/></G>;
        y[2] = domain;
        y[3] = t;
    } else {
        t = y[3];
    }
    return t;
}
export function NativePluginDetail(y) {
    NativePluginDetail.d = 1211;
    const e = c_1.c(41);
    const { entry, nativeId, onNotice, startConnecting } = y;
    const startConnecting_1 = startConnecting === undefined ? false : startConnecting;
    const { _: __1 } = u_1();
    const { _: __2 } = u_1();
    const x = u_2();
    let g;
    if (e[0] !== entry || e[1] !== x) {
        g = x(entry);
        e[0] = entry;
        e[1] = x;
        e[2] = g;
    } else {
        g = e[2];
    }
    const p = g === true;
    const c = entry.publisher?.displayName ?? null;
    let u;
    if (e[3] !== entry.websiteUrl) {
        u = r_2(entry.websiteUrl);
        e[3] = entry.websiteUrl;
        e[4] = u;
    } else {
        u = e[4];
    }
    const f = u;
    let action;
    if (e[5] !== p) {
        action = p ? <Zs/> : null;
        e[5] = p;
        e[6] = action;
    } else {
        action = e[6];
    }
    let header;
    if (e[7] !== entry || e[8] !== action) {
        header = <PluginDetailHeader action={action} entry={entry}/>;
        e[7] = entry;
        e[8] = action;
        e[9] = header;
    } else {
        header = e[9];
    }
    let z;
    e: {
        switch(nativeId){
            case "onepassword":
                {
                    let O;
                    if (e[10] !== onNotice || e[11] !== startConnecting_1) {
                        O = <CsComponent heading={null} onNotice={onNotice} startConnecting={startConnecting_1}/>;
                        e[10] = onNotice;
                        e[11] = startConnecting_1;
                        e[12] = O;
                    } else {
                        O = e[12];
                    }
                    z = O;
                    break e;
                }
            case "email":
                {
                    let O;
                    if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
                        O = <PsComponent/>;
                        e[13] = O;
                    } else {
                        O = e[13];
                    }
                    z = O;
                    break e;
                }
        }
        z = undefined;
    }
    let b;
    if (e[14] !== __2) {
        b = __2({
            id: "nSkB8g"
        });
        e[14] = __2;
        e[15] = b;
    } else {
        b = e[15];
    }
    let N;
    if (e[16] !== __2 || e[17] !== c) {
        N = c == null ? [] : [
            {
                term: __2({
                    id: "7aDnUb"
                }),
                value: c
            }
        ];
        e[16] = __2;
        e[17] = c;
        e[18] = N;
    } else {
        N = e[18];
    }
    let term;
    if (e[19] !== __2) {
        term = __2({
            id: "K7tIrx"
        });
        e[19] = __2;
        e[20] = term;
    } else {
        term = e[20];
    }
    let r;
    if (e[21] !== __1 || e[22] !== entry) {
        r = p_2(__1, entry);
        e[21] = __1;
        e[22] = entry;
        e[23] = r;
    } else {
        r = e[23];
    }
    let E;
    if (e[24] !== term || e[25] !== r) {
        E = {
            term,
            value: r
        };
        e[24] = term;
        e[25] = r;
        e[26] = E;
    } else {
        E = e[26];
    }
    let A;
    if (e[27] !== __2 || e[28] !== f) {
        A = f == null ? [] : [
            {
                term: __2({
                    id: "On0aF2"
                }),
                value: f
            }
        ];
        e[27] = __2;
        e[28] = f;
        e[29] = A;
    } else {
        A = e[29];
    }
    let rows;
    if (e[30] !== E || e[31] !== A || e[32] !== N) {
        rows = [
            ...N,
            E,
            ...A
        ];
        e[30] = E;
        e[31] = A;
        e[32] = N;
        e[33] = rows;
    } else {
        rows = e[33];
    }
    let M;
    if (e[34] !== rows || e[35] !== b) {
        M = <DetailsList label={b} rows={rows}/>;
        e[34] = rows;
        e[35] = b;
        e[36] = M;
    } else {
        M = e[36];
    }
    let F;
    if (e[37] !== M || e[38] !== header || e[39] !== z) {
        F = <PluginDetailLayout header={header}>{z}{M}</PluginDetailLayout>;
        e[37] = M;
        e[38] = header;
        e[39] = z;
        e[40] = F;
    } else {
        F = e[40];
    }
    return F;
}
