import { c as c_1, j, u, r, T as T_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { i } from "./index.eager-platform-Dcfeegfw.js";
import { b7, bA, bY, aU, b0 as X, j as De1, n as Ue1, p as p_1, aP as Ae, k as Ye, b9, bT } from "./index.eager-app-Cj5f8Gby.js";
import { I as I_1, z as He1, an, a5 as $e, a6 as Ne } from "./index-ZYxf-aBb.js";
import { b, e as e_1, J as J_1 } from "./index.eager-common-CdCvBQNJ.js";
import { a as a_1, b as b_1 } from "./chunk-provider-credentials-yP7QsOsy.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "92092553-12ad-403b-981f-a4a3d387709e";
            e._sentryDebugIdIdentifier = "sentry-dbid-92092553-12ad-403b-981f-a4a3d387709e";
        }
    } catch (e) {}
})();
const ttlMs = 120 * 1000;
const M = {
    paragraph: {
        kqGvvJ: "sand-10im51j",
        k7Eaqz: "sand-euugli",
        $$css: true
    },
    secondary: {
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    danger: {
        kMwMTN: "sand-6rl5ky",
        $$css: true
    }
};
function Be(n) {
    if (n.harness === "temporal") {
        return "temporal";
    }
    return "box";
}
function Se(resolution, label) {
    switch(resolution){
        case "approved":
            return {
                label,
                kind: "success"
            };
        case "denied":
            return {
                label: {
                    id: "JsY1p5"
                },
                kind: "muted"
            };
        case "failed":
            return {
                label: {
                    id: "7Bj3x9"
                },
                kind: "danger"
            };
    }
}
function ve(website) {
    if (URL.canParse(website)) {
        return new URL(website).host;
    }
    return website;
}
function Ie(resolution) {
    return resolution === "approved" || resolution === "denied" || resolution === "failed";
}
function ReComponent(n) {
    ReComponent.d = 481;
    const e = c_1.c(2);
    let l;
    if (e[0] !== n) {
        l = n.request.kind === "brokered-login" ? <KeComponent {...n} request={n.request}/> : <EComponent {...n} request={n.request}/>;
        e[0] = n;
        e[1] = l;
    } else {
        l = e[1];
    }
    return l;
}
function KeComponent(n) {
    KeComponent.d = 479;
    const e = c_1.c(73);
    const { request, resolution } = n;
    const { i18n } = u();
    const h = b7();
    const f = r.useId();
    const D = bA();
    const [a, setA] = r.useState(null);
    const [m, setM] = r.useState(false);
    const pRef = r.useRef(0);
    let C;
    if (e[0] !== h.clock) {
        C = ()=>b({
                name: "onepassword-approval-wait",
                ttlMs,
                clock: h.clock
            });
        e[0] = h.clock;
        e[1] = C;
    } else {
        C = e[1];
    }
    const [J] = r.useState(C);
    const T = request.appLink.startsWith("onepassword://") ? request.appLink : null;
    let W;
    if (e[2] !== i18n || e[3] !== request.goal) {
        W = request.goal.length > 0 ? request.goal : i18n._({
            id: "e3sv1H"
        });
        e[2] = i18n;
        e[3] = request.goal;
        e[4] = W;
    } else {
        W = e[4];
    }
    const E = W;
    let H;
    if (e[5] !== request.entries) {
        H = request.entries.map(He).join(" · ");
        e[5] = request.entries;
        e[6] = H;
    } else {
        H = e[6];
    }
    const c = H;
    let U;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        U = <I_1 aria-hidden name="key" size="lg"/>;
        e[7] = U;
    } else {
        U = e[7];
    }
    const ce = U;
    if (Ie(resolution)) {
        let b;
        let A;
        let R;
        let O;
        let k;
        let B;
        let _;
        let z;
        let q;
        let w;
        let G;
        let i;
        if (e[8] !== i18n || e[9] !== resolution || e[10] !== c || e[11] !== E || e[12] !== f) {
            const u = Se(resolution, {
                id: "E0rSFg"
            });
            R = De1;
            B = f;
            _ = "region";
            A = Ue1;
            G = ce;
            i = c;
            O = E;
            k = f;
            b = p_1;
            z = u.kind;
            q = u.kind === "success" ? <I_1 aria-hidden name="check" size="sm"/> : null;
            w = i18n._(u.label);
            e[8] = i18n;
            e[9] = resolution;
            e[10] = c;
            e[11] = E;
            e[12] = f;
            e[13] = b;
            e[14] = A;
            e[15] = R;
            e[16] = O;
            e[17] = k;
            e[18] = B;
            e[19] = _;
            e[20] = z;
            e[21] = q;
            e[22] = w;
            e[23] = G;
            e[24] = i;
        } else {
            b = e[13];
            A = e[14];
            R = e[15];
            O = e[16];
            k = e[17];
            B = e[18];
            _ = e[19];
            z = e[20];
            q = e[21];
            w = e[22];
            G = e[23];
            i = e[24];
        }
        let o;
        if (e[25] !== b || e[26] !== z || e[27] !== q || e[28] !== w) {
            o = j.jsx(b, {
                kind: z,
                leading: q,
                children: w
            });
            e[25] = b;
            e[26] = z;
            e[27] = q;
            e[28] = w;
            e[29] = o;
        } else {
            o = e[29];
        }
        let r;
        if (e[30] !== A || e[31] !== O || e[32] !== k || e[33] !== o || e[34] !== G || e[35] !== i) {
            r = <A leading={G} subtitle={i} title={O} titleId={k} trailing={o}/>;
            e[30] = A;
            e[31] = O;
            e[32] = k;
            e[33] = o;
            e[34] = G;
            e[35] = i;
            e[36] = r;
        } else {
            r = e[36];
        }
        let d;
        if (e[37] !== R || e[38] !== B || e[39] !== _ || e[40] !== r) {
            d = <R aria-labelledby={B} role={_}>{r}</R>;
            e[37] = R;
            e[38] = B;
            e[39] = _;
            e[40] = r;
            e[41] = d;
        } else {
            d = e[41];
        }
        return d;
    }
    let S;
    if (e[42] !== c || e[43] !== E || e[44] !== f) {
        S = <Ue1 leading={ce} subtitle={c} title={E} titleId={f}/>;
        e[42] = c;
        e[43] = E;
        e[44] = f;
        e[45] = S;
    } else {
        S = e[45];
    }
    let L;
    if (e[46] !== request.entries) {
        L = request.entries.map(WeComponent);
        e[46] = request.entries;
        e[47] = L;
    } else {
        L = e[47];
    }
    let $;
    if (e[48] === Symbol.for("react.memo_cache_sentinel")) {
        $ = <X as="p" level="body2" style={[
            M.paragraph,
            M.secondary
        ]}><T_1 id="eV6SNM"/></X>;
        e[48] = $;
    } else {
        $ = e[48];
    }
    let g;
    if (e[49] !== T || e[50] !== a) {
        g = a != null || T === null ? <X as="p" level="body2" style={[
            M.paragraph,
            M.danger
        ]}><T_1 id="5SRweo"/></X> : null;
        e[49] = T;
        e[50] = a;
        e[51] = g;
    } else {
        g = e[51];
    }
    const v = T === null;
    let N;
    if (e[52] !== T || e[53] !== J || e[54] !== D || e[55] !== request.accessRequestId) {
        N = ()=>{
            if (T === null) {
                return;
            }
            pRef.current = pRef.current + 1;
            const pRef_current = pRef.current;
            setA(null);
            setM(true);
            J.arm(request.accessRequestId, ()=>setM(false));
            D(T).catch((A)=>{
                if (pRef_current === pRef.current) {
                    setA(e_1(A));
                    setM(false);
                }
            });
        };
        e[52] = T;
        e[53] = J;
        e[54] = D;
        e[55] = request.accessRequestId;
        e[56] = N;
    } else {
        N = e[56];
    }
    const variant = m ? "secondary" : "primary";
    let V;
    if (e[57] === Symbol.for("react.memo_cache_sentinel")) {
        V = <T_1 id="6jwlR6"/>;
        e[57] = V;
    } else {
        V = e[57];
    }
    let Y;
    if (e[58] !== N || e[59] !== variant || e[60] !== v) {
        Y = <He1 disabled={v} onClick={N} variant={variant}>{V}</He1>;
        e[58] = N;
        e[59] = variant;
        e[60] = v;
        e[61] = Y;
    } else {
        Y = e[61];
    }
    let I;
    if (e[62] !== m) {
        I = m ? <span role="status" className="sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-euugli sand-1o0liin"><Ae borderWidth={2} inheritColor size={14}/><X level="body2"><T_1 id="BtFje2"/></X></span> : null;
        e[62] = m;
        e[63] = I;
    } else {
        I = e[63];
    }
    let F;
    if (e[64] !== Y || e[65] !== I) {
        F = <Ye>{Y}{I}</Ye>;
        e[64] = Y;
        e[65] = I;
        e[66] = F;
    } else {
        F = e[66];
    }
    let P;
    if (e[67] !== F || e[68] !== S || e[69] !== L || e[70] !== g || e[71] !== f) {
        P = <De1 aria-labelledby={f} role="region">{S}{L}{$}{g}{F}</De1>;
        e[67] = F;
        e[68] = S;
        e[69] = L;
        e[70] = g;
        e[71] = f;
        e[72] = P;
    } else {
        P = e[72];
    }
    return P;
}
function WeComponent(n) {
    return <X key={n.entryId} as="p" style={[
        M.paragraph,
        M.secondary
    ]}>{ve(n.website)}{n.reason.length > 0 ? ` \u2014 ${n.reason}` : ""}</X>;
}
function He(n) {
    return ve(n.website);
}
function EComponent(n) {
    EComponent.d = 480;
    const e = c_1.c(101);
    const { entryId, request, resolution, agentId } = n;
    const { i18n } = u();
    const D = b7();
    const a = r.useId();
    const y = a_1();
    const m = b_1();
    const x = bY(agentId ?? null);
    const [p, setP] = r.useState(false);
    const [J, setJ] = r.useState();
    aU(D.credentials.loadDirectory);
    let W;
    if (e[0] !== x) {
        W = x === null ? undefined : Be(x);
        e[0] = x;
        e[1] = W;
    } else {
        W = e[1];
    }
    const harness = W;
    let H;
    if (e[2] !== y.data?.items || e[3] !== request.catalogRevision || e[4] !== request.connectionId || e[5] !== request.credentialId) {
        H = y.data?.items.find((i)=>i.credentialId === request.credentialId && i.connectionId === request.connectionId && i.catalogRevision === request.catalogRevision);
        e[2] = y.data?.items;
        e[3] = request.catalogRevision;
        e[4] = request.connectionId;
        e[5] = request.credentialId;
        e[6] = H;
    } else {
        H = e[6];
    }
    const c = H;
    let U;
    if (e[7] !== request.targetSite) {
        U = URL.canParse(request.targetSite) ? new URL(request.targetSite) : null;
        e[7] = request.targetSite;
        e[8] = U;
    } else {
        U = e[8];
    }
    const ce = U;
    const S = ce?.protocol === "https:" ? ce.host : null;
    let L;
    if (e[9] !== agentId || e[10] !== m || e[11] !== entryId || e[12] !== harness || e[13] !== p || e[14] !== request.catalogRevision || e[15] !== request.connectionId || e[16] !== request.credentialId || e[17] !== request.targetSite) {
        L = (o)=>{
            if (agentId == null || p) {
                return;
            }
            setP(true);
            setJ(undefined);
            const r = ()=>setP(false);
            const d = {
                entryId,
                agentId,
                ...harness === undefined ? {} : {
                    harness
                }
            };
            if (!o) {
                m.deny(d).then(r, r);
                return;
            }
            m.approve({
                ...d,
                credentialId: request.credentialId,
                connectionId: request.connectionId,
                catalogRevision: request.catalogRevision,
                targetSite: request.targetSite
            }).then((u)=>{
                if (!u.ok && u.detail != null) {
                    setJ(u.detail);
                }
                r();
            }, (u)=>{
                setJ(J_1(u));
                r();
            });
        };
        e[9] = agentId;
        e[10] = m;
        e[11] = entryId;
        e[12] = harness;
        e[13] = p;
        e[14] = request.catalogRevision;
        e[15] = request.connectionId;
        e[16] = request.credentialId;
        e[17] = request.targetSite;
        e[18] = L;
    } else {
        L = e[18];
    }
    const $ = L;
    let request_purpose = request.purpose;
    if (c != null) {
        let i;
        if (e[19] !== S || e[20] !== c.category || e[21] !== c.sites || e[22] !== c.vaultName) {
            i = [
                c.category
            ];
            if (S != null) {
                i.push(S);
            } else if (c.sites.length > 0) {
                i.push(c.sites[0]);
            }
            if (c.vaultName != null) {
                i.push(c.vaultName);
            }
            e[19] = S;
            e[20] = c.category;
            e[21] = c.sites;
            e[22] = c.vaultName;
            e[23] = i;
        } else {
            i = e[23];
        }
        request_purpose = i.join(" · ");
    }
    const v = c?.title ?? S ?? request.targetSite;
    let N;
    if (e[24] === Symbol.for("react.memo_cache_sentinel")) {
        N = <I_1 aria-hidden name="key" size="lg"/>;
        e[24] = N;
    } else {
        N = e[24];
    }
    const Z = N;
    const V = request.autoFill === true;
    if (Ie(resolution)) {
        let i;
        let o;
        let r;
        let d;
        let u;
        let ee;
        let te;
        let se;
        let le;
        let ne;
        let ie;
        let ae;
        if (e[25] !== V || e[26] !== i18n || e[27] !== request_purpose || e[28] !== resolution || e[29] !== v || e[30] !== a) {
            const me = Se(resolution, V ? {
                id: "zZmf1N"
            } : {
                id: "gk2v4K"
            });
            r = De1;
            te = a;
            se = "region";
            o = Ue1;
            ae = Z;
            d = request_purpose;
            u = v;
            ee = a;
            i = p_1;
            le = me.kind;
            ne = me.kind === "success" ? <I_1 aria-hidden name="check" size="sm"/> : null;
            ie = i18n._(me.label);
            e[25] = V;
            e[26] = i18n;
            e[27] = request_purpose;
            e[28] = resolution;
            e[29] = v;
            e[30] = a;
            e[31] = i;
            e[32] = o;
            e[33] = r;
            e[34] = d;
            e[35] = u;
            e[36] = ee;
            e[37] = te;
            e[38] = se;
            e[39] = le;
            e[40] = ne;
            e[41] = ie;
            e[42] = ae;
        } else {
            i = e[31];
            o = e[32];
            r = e[33];
            d = e[34];
            u = e[35];
            ee = e[36];
            te = e[37];
            se = e[38];
            le = e[39];
            ne = e[40];
            ie = e[41];
            ae = e[42];
        }
        let re;
        if (e[43] !== i || e[44] !== le || e[45] !== ne || e[46] !== ie) {
            re = j.jsx(i, {
                kind: le,
                leading: ne,
                children: ie
            });
            e[43] = i;
            e[44] = le;
            e[45] = ne;
            e[46] = ie;
            e[47] = re;
        } else {
            re = e[47];
        }
        let oe;
        if (e[48] !== o || e[49] !== d || e[50] !== u || e[51] !== ee || e[52] !== re || e[53] !== ae) {
            oe = j.jsx(o, {
                leading: ae,
                subtitle: d,
                title: u,
                titleId: ee,
                trailing: re
            });
            e[48] = o;
            e[49] = d;
            e[50] = u;
            e[51] = ee;
            e[52] = re;
            e[53] = ae;
            e[54] = oe;
        } else {
            oe = e[54];
        }
        let fe;
        if (e[55] !== r || e[56] !== te || e[57] !== se || e[58] !== oe) {
            fe = j.jsx(r, {
                "aria-labelledby": te,
                role: se,
                children: oe
            });
            e[55] = r;
            e[56] = te;
            e[57] = se;
            e[58] = oe;
            e[59] = fe;
        } else {
            fe = e[59];
        }
        return fe;
    }
    if (resolution === "filling" || V) {
        const site = S ?? request.targetSite;
        let o;
        if (e[60] !== request_purpose || e[61] !== v || e[62] !== a) {
            o = <Ue1 leading={Z} subtitle={request_purpose} title={v} titleId={a}/>;
            e[60] = request_purpose;
            e[61] = v;
            e[62] = a;
            e[63] = o;
        } else {
            o = e[63];
        }
        let r;
        if (e[64] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                M.paragraph,
                M.secondary
            ];
            e[64] = r;
        } else {
            r = e[64];
        }
        let d;
        if (e[65] !== site) {
            d = <X as="p" style={r}><T_1 id="yc/lvg" values={{
                site
            }}/></X>;
            e[65] = site;
            e[66] = d;
        } else {
            d = e[66];
        }
        let u;
        if (e[67] !== o || e[68] !== d || e[69] !== a) {
            u = <De1 aria-labelledby={a} role="region">{o}{d}</De1>;
            e[67] = o;
            e[68] = d;
            e[69] = a;
            e[70] = u;
        } else {
            u = e[70];
        }
        return u;
    }
    const Y = agentId != null && c != null && !p;
    let I;
    if (e[71] !== request_purpose || e[72] !== v || e[73] !== a) {
        I = <Ue1 leading={Z} subtitle={request_purpose} title={v} titleId={a}/>;
        e[71] = request_purpose;
        e[72] = v;
        e[73] = a;
        e[74] = I;
    } else {
        I = e[74];
    }
    let F;
    if (e[75] === Symbol.for("react.memo_cache_sentinel")) {
        F = [
            M.paragraph,
            M.secondary
        ];
        e[75] = F;
    } else {
        F = e[75];
    }
    let P;
    if (e[76] !== request.purpose) {
        P = <X as="p" style={F}>{request.purpose}</X>;
        e[76] = request.purpose;
        e[77] = P;
    } else {
        P = e[77];
    }
    let b;
    if (e[78] !== J) {
        b = J != null ? <X as="p" level="body2" style={[
            M.paragraph,
            M.danger
        ]}>{J}</X> : null;
        e[78] = J;
        e[79] = b;
    } else {
        b = e[79];
    }
    const A = !Y;
    let R;
    if (e[80] !== $) {
        R = ()=>$(true);
        e[80] = $;
        e[81] = R;
    } else {
        R = e[81];
    }
    let O;
    if (e[82] === Symbol.for("react.memo_cache_sentinel")) {
        O = <T_1 id="TsmNPS"/>;
        e[82] = O;
    } else {
        O = e[82];
    }
    let k;
    if (e[83] !== A || e[84] !== R) {
        k = <He1 disabled={A} onClick={R} variant="primary">{O}</He1>;
        e[83] = A;
        e[84] = R;
        e[85] = k;
    } else {
        k = e[85];
    }
    const B = agentId == null || p;
    let _;
    if (e[86] !== $) {
        _ = ()=>$(false);
        e[86] = $;
        e[87] = _;
    } else {
        _ = e[87];
    }
    let z;
    if (e[88] === Symbol.for("react.memo_cache_sentinel")) {
        z = <T_1 id="cFCKYZ"/>;
        e[88] = z;
    } else {
        z = e[88];
    }
    let q;
    if (e[89] !== B || e[90] !== _) {
        q = <He1 disabled={B} onClick={_} variant="secondary">{z}</He1>;
        e[89] = B;
        e[90] = _;
        e[91] = q;
    } else {
        q = e[91];
    }
    let w;
    if (e[92] !== k || e[93] !== q) {
        w = <Ye>{k}{q}</Ye>;
        e[92] = k;
        e[93] = q;
        e[94] = w;
    } else {
        w = e[94];
    }
    let G;
    if (e[95] !== w || e[96] !== I || e[97] !== P || e[98] !== b || e[99] !== a) {
        G = <De1 aria-labelledby={a} role="region">{I}{P}{b}{w}</De1>;
        e[95] = w;
        e[96] = I;
        e[97] = P;
        e[98] = b;
        e[99] = a;
        e[100] = G;
    } else {
        G = e[100];
    }
    return G;
}
function UeComponent(n) {
    UeComponent.d = 316;
    const e = c_1.c(18);
    const { entry, adjacency } = n;
    const j = b9("sand_1pass_integration");
    const h = bT();
    let f;
    if (e[0] !== h) {
        f = ()=>{
            h("sand_1pass_integration");
            return Ve;
        };
        e[0] = h;
        e[1] = f;
    } else {
        f = e[1];
    }
    i(f);
    const agentId = an();
    if (!j) {
        return null;
    }
    const resolution = entry.credentialResolution === "retryable" ? undefined : entry.credentialResolution;
    let y;
    if (e[2] !== agentId) {
        y = agentId == null ? {} : {
            agentId
        };
        e[2] = agentId;
        e[3] = y;
    } else {
        y = e[3];
    }
    let m;
    if (e[4] !== resolution) {
        m = resolution == null ? {} : {
            resolution
        };
        e[4] = resolution;
        e[5] = m;
    } else {
        m = e[5];
    }
    let x;
    if (e[6] !== entry.id || e[7] !== entry.message.credentialRequest || e[8] !== y || e[9] !== m) {
        x = <ReComponent entryId={entry.id} request={entry.message.credentialRequest} {...y} {...m}/>;
        e[6] = entry.id;
        e[7] = entry.message.credentialRequest;
        e[8] = y;
        e[9] = m;
        e[10] = x;
    } else {
        x = e[10];
    }
    let p;
    if (e[11] !== adjacency.isGroupStart || e[12] !== entry.timestampMs || e[13] !== x) {
        p = <$e isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="question">{x}</$e>;
        e[11] = adjacency.isGroupStart;
        e[12] = entry.timestampMs;
        e[13] = x;
        e[14] = p;
    } else {
        p = e[14];
    }
    let C;
    if (e[15] !== entry || e[16] !== p) {
        C = <Ne entry={entry}>{p}</Ne>;
        e[15] = entry;
        e[16] = p;
        e[17] = C;
    } else {
        C = e[17];
    }
    return C;
}
function Ve() {}
export { UeComponent as default };
