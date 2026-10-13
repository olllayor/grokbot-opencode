import { c as c_1, u as u_1, r as r_1, p, T as T_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { aV, d2, d3, bc, bX, aK, Q as Q_1, af, X as X_1, b0 as Y, bY, d4, d5 } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { b2, Z as Z_1, b3, Y as Y_1, U, Q as Q_2, g as Le, an, b4 } from "./index-ZYxf-aBb.js";
import { b } from "./index.eager-common-CdCvBQNJ.js";
import { s } from "./chunk-bot-template-share-card-frame-gOKZUO-a.js";
import { u as u_2, T as T_2 } from "./chunk-team-setup-row-BCHimoZ0.js";
import { u as u_3 } from "./chunk-team-bot-details-pane-CISL5cWF.js";
import "./chunk-team-setup-pills-7uDu4vf1.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "4febf859-95ad-4912-bb04-2f2f86d3146c";
            e._sentryDebugIdIdentifier = "sentry-dbid-4febf859-95ad-4912-bb04-2f2f86d3146c";
        }
    } catch (e) {}
})();
const re = 160;
const Ie = b({
    name: "team-bot-publish-mark-reaction",
    ttlMs: 2200
});
const y = {
    card: {
        kanfag: "sand-oyr6j1",
        k9g6sI: "sand-12h1iku",
        kVAEAm: "sand-1n2onr6",
        kB7OPa: "sand-9f619",
        kzqmXN: "sand-zibbub",
        ks0D6T: "sand-193iq5w",
        k7Eaqz: "sand-euugli",
        kAzted: "sand-hvfr7q",
        kaIpWk: "sand-gqmno8",
        kVQacm: "sand-b3r6kr",
        k9WMMc: "sand-1yc453h",
        kHBbk8: "sand-c8icb0",
        $$css: true
    },
    title: {
        kzQI83: "sand-1iyjqo2",
        k7Eaqz: "sand-euugli",
        kqGvvJ: "sand-10im51j",
        kMwMTN: "sand-tyxrsu",
        k1xSpc: "sand-104kibb",
        kJFfOR: "sand-1h7i4cw",
        kgKLqz: "sand-1ua5tub",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        kTgw9: "sand-13faqbe",
        $$css: true
    },
    subtitle: {
        kqGvvJ: "sand-10im51j",
        k7Eaqz: "sand-euugli",
        kMwMTN: "sand-1o0liin",
        kVQacm: "sand-b3r6kr",
        k1xSpc: "sand-104kibb",
        kJFfOR: "sand-1gzmk7r",
        kgKLqz: "sand-1ua5tub",
        kTgw9: "sand-13faqbe",
        $$css: true
    },
    problem: {
        kqGvvJ: "sand-10im51j",
        k7Eaqz: "sand-euugli",
        kMwMTN: "sand-6rl5ky",
        kVQacm: "sand-b3r6kr",
        k1xSpc: "sand-104kibb",
        kJFfOR: "sand-1gzmk7r",
        kgKLqz: "sand-1ua5tub",
        kTgw9: "sand-13faqbe",
        $$css: true
    },
    action: {
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        kCS8Yb: "sand-1r8uery sand-1tgy5j5",
        k7Eaqz: "sand-euugli",
        $$css: true
    }
};
function Ce1Component(Z) {
    Ce1Component.d = 607;
    const e = c_1.c(89);
    const { agent, step } = Z;
    const u = step === undefined ? null : step;
    const { _: __1 } = u_1();
    const [m, f] = aV();
    const [v, setV] = r_1.useState("idle");
    const eeRef = r_1.useRef(null);
    let A;
    if (e[0] !== agent.id) {
        A = {
            onPublished: ()=>{
                if (!af()) {
                    setV("happy");
                    eeRef.current?.poke("spin", {
                        turns: 2
                    });
                    eeRef.current?.poke("bounce");
                    Ie.arm(agent.id, ()=>{
                        setV("idle");
                    });
                }
            }
        };
        e[0] = agent.id;
        e[1] = A;
    } else {
        A = e[1];
    }
    const { status, publish } = b2(agent.id, A);
    const I = Z_1()?.openPane;
    const O = r_1.useContext(b3)?.openBotDetails ?? null;
    const ie = u_3(agent);
    const r = u_2();
    const $ = agent.visibility === "team" && agent.viewerIsOwner !== false;
    let R;
    if (e[2] !== agent || e[3] !== $) {
        R = $ && !d2(agent);
        e[2] = agent;
        e[3] = $;
        e[4] = R;
    } else {
        R = e[4];
    }
    const ae = d3(agent, R);
    if (!$) {
        return null;
    }
    let onClick = null;
    if (ie != null) {
        onClick = ie;
    } else if (O != null) {
        let n;
        if (e[5] !== O) {
            n = ()=>O();
            e[5] = O;
            e[6] = n;
        } else {
            n = e[6];
        }
        onClick = n;
    } else if (I != null) {
        let n;
        if (e[7] !== agent.id || e[8] !== I) {
            n = ()=>I({
                    agentId: agent.id
                });
            e[7] = agent.id;
            e[8] = I;
            e[9] = n;
        } else {
            n = e[9];
        }
        onClick = n;
    }
    let k;
    let l;
    let disabled;
    let c;
    let dataUrl;
    let b;
    let z;
    if (e[10] !== __1 || e[11] !== agent || e[12] !== r || e[13] !== status) {
        c = bc(agent);
        let n;
        if (e[21] !== agent) {
            n = d2(agent);
            e[21] = agent;
            e[22] = n;
        } else {
            n = e[22];
        }
        l = n;
        disabled = status === "publishing";
        let U;
        if (e[23] !== agent.id) {
            U = bX(agent.id);
            e[23] = agent.id;
            e[24] = U;
        } else {
            U = e[24];
        }
        k = U;
        dataUrl = agent.avatarDataUrl;
        if (l) {
            let t;
            if (e[25] !== r) {
                t = [
                    r,
                    y.subtitle
                ];
                e[25] = r;
                e[26] = t;
            } else {
                t = e[26];
            }
            let i;
            if (e[27] === Symbol.for("react.memo_cache_sentinel")) {
                i = <T_1 id="e+CQMj"/>;
                e[27] = i;
            } else {
                i = e[27];
            }
            let d;
            if (e[28] !== t) {
                d = <Y as="p" dir="auto" level="body1" style={t}>{i}</Y>;
                e[28] = t;
                e[29] = d;
            } else {
                d = e[29];
            }
            b = d;
        } else if (status === "failed") {
            let t;
            if (e[30] !== r) {
                t = [
                    r,
                    y.problem
                ];
                e[30] = r;
                e[31] = t;
            } else {
                t = e[31];
            }
            let i;
            if (e[32] === Symbol.for("react.memo_cache_sentinel")) {
                i = <T_1 id="JWzXie"/>;
                e[32] = i;
            } else {
                i = e[32];
            }
            let d;
            if (e[33] !== t) {
                d = <Y as="p" dir="auto" level="body1" role="alert" style={t}>{i}</Y>;
                e[33] = t;
                e[34] = d;
            } else {
                d = e[34];
            }
            b = d;
        } else {
            let t;
            if (e[35] !== r) {
                t = [
                    r,
                    y.subtitle
                ];
                e[35] = r;
                e[36] = t;
            } else {
                t = e[36];
            }
            let i;
            if (e[37] === Symbol.for("react.memo_cache_sentinel")) {
                i = <T_1 id="PatjSf"/>;
                e[37] = i;
            } else {
                i = e[37];
            }
            let d;
            if (e[38] !== t) {
                d = <Y as="p" dir="auto" level="body1" style={t}>{i}</Y>;
                e[38] = t;
                e[39] = d;
            } else {
                d = e[39];
            }
            b = d;
        }
        z = __1(l ? {
            id: "hAa74A",
            values: {
                name: c
            }
        } : {
            id: "vI8feN",
            values: {
                name: c
            }
        });
        e[10] = __1;
        e[11] = agent;
        e[12] = r;
        e[13] = status;
        e[14] = k;
        e[15] = l;
        e[16] = disabled;
        e[17] = c;
        e[18] = dataUrl;
        e[19] = b;
        e[20] = z;
    } else {
        k = e[14];
        l = e[15];
        disabled = e[16];
        c = e[17];
        dataUrl = e[18];
        b = e[19];
        z = e[20];
    }
    let D;
    if (e[40] === Symbol.for("react.memo_cache_sentinel")) {
        D = p(y.card, aK.transcriptWidget);
        e[40] = D;
    } else {
        D = e[40];
    }
    let L;
    let Q;
    if (e[41] === Symbol.for("react.memo_cache_sentinel")) {
        L = {
            className: "sand-10l6tqk sand-10a8y8t sand-47corl sand-1rea2x4 sand-1ja2u2z"
        };
        Q = {
            className: "sand-10l6tqk sand-1kzkgjr sand-1pkjq1s sand-omnu4r sand-1nmzwpf"
        };
        e[41] = L;
        e[42] = Q;
    } else {
        L = e[41];
        Q = e[42];
    }
    let q;
    if (e[43] !== agent || e[44] !== v || e[45] !== dataUrl) {
        q = <div aria-hidden {...L}><div {...Q}>{dataUrl != null && dataUrl.length > 0 ? <Y_1 avatarKey={agent.id} dataUrl={dataUrl} fillPx={re}/> : <Q_1 ref={eeRef} color={Q_2(agent)} isFollowingPointer={false} isPaused={af()} shape={U(agent)} sizePx={re} state={v}/>}</div></div>;
        e[43] = agent;
        e[44] = v;
        e[45] = dataUrl;
        e[46] = q;
    } else {
        q = e[46];
    }
    let J;
    let F;
    let W;
    let G;
    let K;
    if (e[47] === Symbol.for("react.memo_cache_sentinel")) {
        K = {
            className: "sand-1n2onr6 sand-78zum5 sand-1qjc9v5 sand-h8yej3 sand-hvfr7q sand-1vjfegm"
        };
        J = <div className="sand-2lah0s sand-2pejg6 sand-fzkdsy sand-15l03u9 sand-1wg1ya"/>;
        F = {
            className: "sand-78zum5 sand-dt5ytf sand-1qughib sand-1v2ro7d sand-1iyjqo2 sand-euugli sand-yamay9 sand-v54qhq sand-1dzx5q7 sand-1l90r2v sand-1g0dm76"
        };
        W = {
            className: "sand-78zum5 sand-dt5ytf sand-1jnr06f sand-euugli"
        };
        G = {
            className: "sand-78zum5 sand-1cy8zhl sand-17d4w8g sand-euugli"
        };
        e[47] = J;
        e[48] = F;
        e[49] = W;
        e[50] = G;
        e[51] = K;
    } else {
        J = e[47];
        F = e[48];
        W = e[49];
        G = e[50];
        K = e[51];
    }
    let S;
    if (e[52] !== l || e[53] !== c) {
        S = <Y as="p" dir="auto" level="body1" style={y.title} weight="medium">{l ? <T_1 id="hAa74A" values={{
            name: c
        }}/> : <T_1 id="vI8feN" values={{
            name: c
        }}/>}</Y>;
        e[52] = l;
        e[53] = c;
        e[54] = S;
    } else {
        S = e[54];
    }
    let P;
    if (e[55] !== l || e[56] !== u) {
        P = u === null || l ? null : <T_2 step={u}/>;
        e[55] = l;
        e[56] = u;
        e[57] = P;
    } else {
        P = e[57];
    }
    let T;
    if (e[58] !== S || e[59] !== P) {
        T = <div {...G}>{S}{P}</div>;
        e[58] = S;
        e[59] = P;
        e[60] = T;
    } else {
        T = e[60];
    }
    let C;
    if (e[61] !== b || e[62] !== T) {
        C = <div {...W}>{T}{b}</div>;
        e[61] = b;
        e[62] = T;
        e[63] = C;
    } else {
        C = e[63];
    }
    let V;
    if (e[64] === Symbol.for("react.memo_cache_sentinel")) {
        V = {
            className: "sand-78zum5 sand-6s0dn4 sand-ozqiw3 sand-1295est sand-167g77z sand-h8yej3 sand-euugli"
        };
        e[64] = V;
    } else {
        V = e[64];
    }
    let B;
    if (e[65] !== __1 || e[66] !== f || e[67] !== k || e[68] !== m || e[69] !== l) {
        B = l ? <Le disabled={k == null} leadingIcon={m ? "check" : "link"} onClick={()=>{
            if (k != null) {
                f(k);
            }
        }} rootStyle={[
            aK.askCardButton,
            y.action
        ]} shape="pill" size="md" title={__1({
            id: "a83GDF"
        })} tone="monochrome" variant="primary"><X_1 isCopied={m}/></Le> : null;
        e[65] = __1;
        e[66] = f;
        e[67] = k;
        e[68] = m;
        e[69] = l;
        e[70] = B;
    } else {
        B = e[70];
    }
    let _;
    if (e[71] !== ae || e[72] !== l || e[73] !== disabled || e[74] !== publish) {
        _ = !l && ae === true ? <Le disabled={disabled} onClick={publish} rootStyle={[
            aK.askCardButton,
            y.action
        ]} shape="pill" size="md" tone="monochrome" variant="primary">{disabled ? <T_1 id="baaWCJ"/> : <T_1 id="pHhmq9"/>}</Le> : null;
        e[71] = ae;
        e[72] = l;
        e[73] = disabled;
        e[74] = publish;
        e[75] = _;
    } else {
        _ = e[75];
    }
    let w;
    if (e[76] !== onClick) {
        w = onClick == null ? null : <Le onClick={onClick} rootStyle={[
            aK.askCardButton,
            s.actionSecondary,
            y.action
        ]} shape="pill" size="md" variant="outline"><T_1 id="2Eoi/a"/></Le>;
        e[76] = onClick;
        e[77] = w;
    } else {
        w = e[77];
    }
    let M;
    if (e[78] !== B || e[79] !== _ || e[80] !== w) {
        M = <div {...V}>{B}{_}{w}</div>;
        e[78] = B;
        e[79] = _;
        e[80] = w;
        e[81] = M;
    } else {
        M = e[81];
    }
    let E;
    if (e[82] !== C || e[83] !== M) {
        E = <div {...K}>{J}<div {...F}>{C}{M}</div></div>;
        e[82] = C;
        e[83] = M;
        e[84] = E;
    } else {
        E = e[84];
    }
    let X;
    if (e[85] !== E || e[86] !== z || e[87] !== q) {
        X = <article aria-label={z} {...D}>{q}{E}</article>;
        e[85] = E;
        e[86] = z;
        e[87] = q;
        e[88] = X;
    } else {
        X = e[88];
    }
    return X;
}
function OeComponent(Z) {
    OeComponent.d = 298;
    const e = c_1.c(6);
    const { entry } = Z;
    const agent = bY(an());
    const u = b4();
    let o;
    if (e[0] !== entry || e[1] !== u) {
        const v = u == null ? undefined : d4(entry.id, u.resolveEntry);
        o = v === undefined ? null : d5(v);
        e[0] = entry;
        e[1] = u;
        e[2] = o;
    } else {
        o = e[2];
    }
    const m = o;
    let f;
    if (e[3] !== agent || e[4] !== m) {
        f = agent == null ? null : <Ce1Component agent={agent} step={m}/>;
        e[3] = agent;
        e[4] = m;
        e[5] = f;
    } else {
        f = e[5];
    }
    return f;
}
export { OeComponent as default };
