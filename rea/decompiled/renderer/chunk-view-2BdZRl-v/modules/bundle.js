import { c, u, r, p, T as T_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { I, z as Be, an, a5 as He, a6 as Ve } from "./index-ZYxf-aBb.js";
import { bt, b$, n as Te, b0 as M, j as Ae, d0, p as Ge, m as Ke, dd, de } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { c as c_1, C as C_1 } from "./chunk-card-field-BW4hZ8b8.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "5ed02168-3ab4-4a59-bb8d-f2beb8111a98";
            e._sentryDebugIdIdentifier = "sentry-dbid-5ed02168-3ab4-4a59-bb8d-f2beb8111a98";
        }
    } catch (e) {}
})();
const ne = {
    field: {
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        kCS8Yb: "sand-1r8uery",
        $$css: true
    },
    saveError: {
        kqGvvJ: "sand-10im51j",
        k7Eaqz: "sand-euugli",
        kMwMTN: "sand-6rl5ky",
        $$css: true
    }
};
function qe(n, label) {
    if (/^(?:a|an|the|your|my)\s/i.test(label)) {
        return n({
            id: "6MC4Rb",
            values: {
                label
            }
        });
    }
    return n({
        id: "rJyxlD",
        values: {
            label
        }
    });
}
function ie(n) {
    return n instanceof dd && n.failure.code === de;
}
function $e(n, e) {
    if (ie(e) && e.message.length > 0) {
        return e.message;
    }
    return n({
        id: "BJM4fh"
    });
}
function Re(target) {
    switch(target.kind){
        case "box-env":
        case "channel-credential":
            return {
                kind: "personal"
            };
        case "bot-secret":
            return {
                kind: "bot-secret",
                varName: target.name
            };
        case "bot-plugin-variable":
            return {
                kind: "bot-plugin-variable",
                pluginId: target.pluginId,
                key: target.key
            };
        default:
            return {
                kind: "unsupported"
            };
    }
}
function Re1Component(n) {
    Re1Component.d = 501;
    const e = c.c(8);
    const { presentation, copyId } = n;
    let i;
    if (e[0] !== presentation.key || e[1] !== presentation.kind || e[2] !== presentation.pluginId || e[3] !== presentation.varName) {
        i = presentation.kind === "bot-secret" ? <DeComponent varName={presentation.varName}/> : <Ce1Component varKey={presentation.key} pluginId={presentation.pluginId}/>;
        e[0] = presentation.key;
        e[1] = presentation.kind;
        e[2] = presentation.pluginId;
        e[3] = presentation.varName;
        e[4] = i;
    } else {
        i = e[4];
    }
    let a;
    if (e[5] !== copyId || e[6] !== i) {
        a = <M as="div" id={copyId}>{i}</M>;
        e[5] = copyId;
        e[6] = i;
        e[7] = a;
    } else {
        a = e[7];
    }
    return a;
}
function DeComponent(n) {
    DeComponent.d = 502;
    const e = c.c(2);
    const { varName } = n;
    let t;
    if (e[0] !== varName) {
        t = <T_1 id="bUk2ML" values={{
            varName
        }}/>;
        e[0] = varName;
        e[1] = t;
    } else {
        t = e[1];
    }
    return t;
}
function Ce1Component(n) {
    Ce1Component.d = 500;
    const e = c.c(3);
    const { varKey, pluginId } = n;
    let i;
    if (e[0] !== pluginId || e[1] !== varKey) {
        i = <T_1 id="0EEvan" values={{
            varKey,
            pluginId
        }}/>;
        e[0] = pluginId;
        e[1] = varKey;
        e[2] = i;
    } else {
        i = e[2];
    }
    return i;
}
function OeComponent(n) {
    OeComponent.d = 505;
    const e = c.c(7);
    const { label, titleId } = n;
    let i;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        i = <T_1 id="FZjSI/"/>;
        e[0] = i;
    } else {
        i = e[0];
    }
    let a;
    if (e[1] !== label || e[2] !== titleId) {
        a = <Te subtitle={i} title={label} titleId={titleId}/>;
        e[1] = label;
        e[2] = titleId;
        e[3] = a;
    } else {
        a = e[3];
    }
    let r;
    if (e[4] !== a || e[5] !== titleId) {
        r = <Ae aria-labelledby={titleId} role="region">{a}</Ae>;
        e[4] = a;
        e[5] = titleId;
        e[6] = r;
    } else {
        r = e[6];
    }
    return r;
}
function UeComponent(n) {
    UeComponent.d = 504;
    const e = c.c(3);
    const { presentation } = n;
    switch(presentation.kind){
        case "bot-plugin-variable":
            {
                let t;
                if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
                    t = <T_1 id="3dOgRM"/>;
                    e[0] = t;
                } else {
                    t = e[0];
                }
                return t;
            }
        case "bot-secret":
            {
                let t;
                if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
                    t = <T_1 id="lpgQZD"/>;
                    e[1] = t;
                } else {
                    t = e[1];
                }
                return t;
            }
        case "personal":
            {
                let t;
                if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
                    t = <T_1 id="o9/1q2"/>;
                    e[2] = t;
                } else {
                    t = e[2];
                }
                return t;
            }
    }
}
function Me1Component(n) {
    Me1Component.d = 503;
    const e = c.c(73);
    const { entryId, request, isProvided, agentId } = n;
    const { _: __1 } = u();
    const { submitSecret } = bt();
    const sessionId = b$(agentId);
    const [d, setD] = r.useState("");
    const [W, setW] = r.useState(false);
    const [S, setS] = r.useState(null);
    const titleId = r.useId();
    const copyId = r.useId();
    const id = r.useId();
    let T;
    if (e[0] !== agentId || e[1] !== isProvided || e[2] !== W || e[3] !== d) {
        T = d.trim().length > 0 && !W && !isProvided && agentId != null;
        e[0] = agentId;
        e[1] = isProvided;
        e[2] = W;
        e[3] = d;
        e[4] = T;
    } else {
        T = e[4];
    }
    const B = T;
    let F;
    if (e[5] !== __1 || e[6] !== agentId || e[7] !== B || e[8] !== entryId || e[9] !== sessionId || e[10] !== submitSecret || e[11] !== d) {
        F = (h)=>{
            h.preventDefault();
            if (!B || agentId == null) {
                return;
            }
            setW(true);
            setS(null);
            const j = d;
            setD("");
            submitSecret({
                entryId,
                value: j,
                agentId,
                ...sessionId.length > 0 ? {
                    sessionId
                } : {}
            }).then(()=>setW(false), (f)=>{
                if (!ie(f)) {
                    d0(f, {
                        tags: {
                            sand_area: "secret-request"
                        }
                    });
                }
                setD(j);
                setS($e(__1, f));
                setW(false);
            });
        };
        e[5] = __1;
        e[6] = agentId;
        e[7] = B;
        e[8] = entryId;
        e[9] = sessionId;
        e[10] = submitSecret;
        e[11] = d;
        e[12] = F;
    } else {
        F = e[12];
    }
    const onSubmit = F;
    let D;
    if (e[13] !== request.target) {
        D = Re(request.target);
        e[13] = request.target;
        e[14] = D;
    } else {
        D = e[14];
    }
    const presentation = D;
    if (presentation.kind === "unsupported") {
        let c;
        if (e[15] !== request.label || e[16] !== titleId) {
            c = <OeComponent label={request.label} titleId={titleId}/>;
            e[15] = request.label;
            e[16] = titleId;
            e[17] = c;
        } else {
            c = e[17];
        }
        return c;
    }
    const w = presentation.kind !== "personal";
    const x = w ? `${titleId} ${copyId}` : titleId;
    let G;
    if (e[18] !== copyId || e[19] !== presentation) {
        G = presentation.kind === "personal" ? null : <Re1Component copyId={copyId} presentation={presentation}/>;
        e[18] = copyId;
        e[19] = presentation;
        e[20] = G;
    } else {
        G = e[20];
    }
    const v = G;
    if (isProvided) {
        let c;
        if (e[21] !== presentation) {
            c = <M as="div"><UeComponent presentation={presentation}/></M>;
            e[21] = presentation;
            e[22] = c;
        } else {
            c = e[22];
        }
        let h;
        if (e[23] !== v || e[24] !== c) {
            h = <>{v}{c}</>;
            e[23] = v;
            e[24] = c;
            e[25] = h;
        } else {
            h = e[25];
        }
        let trailing;
        if (e[26] === Symbol.for("react.memo_cache_sentinel")) {
            trailing = <Ge kind="success" leading=<I aria-hidden name="check" size="sm"/>><T_1 id="idD8Ev"/></Ge>;
            e[26] = trailing;
        } else {
            trailing = e[26];
        }
        let f;
        if (e[27] !== request.label || e[28] !== h || e[29] !== titleId) {
            f = <Te subtitle={h} title={request.label} titleId={titleId} trailing={trailing}/>;
            e[27] = request.label;
            e[28] = h;
            e[29] = titleId;
            e[30] = f;
        } else {
            f = e[30];
        }
        let L;
        if (e[31] !== x || e[32] !== f) {
            L = <Ae aria-labelledby={x} role="region">{f}</Ae>;
            e[31] = x;
            e[32] = f;
            e[33] = L;
        } else {
            L = e[33];
        }
        return L;
    }
    let g;
    if (e[34] !== v || e[35] !== request.description) {
        g = v == null && request.description == null ? undefined : <>{v}{request.description == null ? null : <M as="div">{request.description}</M>}</>;
        e[34] = v;
        e[35] = request.description;
        e[36] = g;
    } else {
        g = e[36];
    }
    let k;
    if (e[37] !== request.label || e[38] !== g || e[39] !== titleId) {
        k = <Te subtitle={g} title={request.label} titleId={titleId}/>;
        e[37] = request.label;
        e[38] = g;
        e[39] = titleId;
        e[40] = k;
    } else {
        k = e[40];
    }
    let P;
    if (e[41] === Symbol.for("react.memo_cache_sentinel")) {
        P = {
            className: "sand-78zum5 sand-1cy8zhl sand-167g77z sand-h8yej3 sand-euugli"
        };
        e[41] = P;
    } else {
        P = e[41];
    }
    const X = S != null ? id : undefined;
    const Y = S != null ? true : undefined;
    let onChange;
    if (e[42] === Symbol.for("react.memo_cache_sentinel")) {
        onChange = (c)=>setD(c.currentTarget.value);
        e[42] = onChange;
    } else {
        onChange = e[42];
    }
    let placeholder;
    if (e[43] !== __1 || e[44] !== request.label) {
        placeholder = qe(__1, request.label);
        e[43] = __1;
        e[44] = request.label;
        e[45] = placeholder;
    } else {
        placeholder = e[45];
    }
    let A;
    if (e[46] === Symbol.for("react.memo_cache_sentinel")) {
        A = p(c_1.control);
        e[46] = A;
    } else {
        A = e[46];
    }
    let E;
    if (e[47] !== x || e[48] !== placeholder || e[49] !== X || e[50] !== Y || e[51] !== d) {
        E = <C_1 style={ne.field}><input aria-describedby={X} aria-invalid={Y} aria-labelledby={x} autoComplete="off" onChange={onChange} placeholder={placeholder} spellCheck={false} type="password" value={d} {...A}/></C_1>;
        e[47] = x;
        e[48] = placeholder;
        e[49] = X;
        e[50] = Y;
        e[51] = d;
        e[52] = E;
    } else {
        E = e[52];
    }
    const disabled = !B;
    let J;
    if (e[53] === Symbol.for("react.memo_cache_sentinel")) {
        J = <T_1 id="fMfdG0"/>;
        e[53] = J;
    } else {
        J = e[53];
    }
    let _;
    if (e[54] !== disabled) {
        _ = <Be disabled={disabled} type="submit" variant="primary">{J}</Be>;
        e[54] = disabled;
        e[55] = _;
    } else {
        _ = e[55];
    }
    let C;
    if (e[56] !== E || e[57] !== _) {
        C = <div {...P}>{E}{_}</div>;
        e[56] = E;
        e[57] = _;
        e[58] = C;
    } else {
        C = e[58];
    }
    let q;
    if (e[59] !== S || e[60] !== id) {
        q = S != null ? <M as="p" id={id} level="body2" role="alert" style={ne.saveError}>{S}</M> : null;
        e[59] = S;
        e[60] = id;
        e[61] = q;
    } else {
        q = e[61];
    }
    let O;
    let U;
    if (e[62] === Symbol.for("react.memo_cache_sentinel")) {
        O = {
            className: "sand-78zum5 sand-1cy8zhl sand-1jnr06f sand-euugli sand-169k319"
        };
        U = <span className="sand-78zum5 sand-2lah0s sand-vijh9v"><I aria-hidden name="shield-check" size="sm"/></span>;
        e[62] = O;
        e[63] = U;
    } else {
        O = e[62];
        U = e[63];
    }
    let $;
    if (e[64] !== w) {
        $ = <div {...O}>{U}<M level="body2">{w ? <T_1 id="BicSEp"/> : <T_1 id="tCkO9y"/>}</M></div>;
        e[64] = w;
        e[65] = $;
    } else {
        $ = e[65];
    }
    let K;
    if (e[66] !== onSubmit || e[67] !== x || e[68] !== C || e[69] !== q || e[70] !== $ || e[71] !== k) {
        K = <Ke aria-labelledby={x} onSubmit={onSubmit}>{k}{C}{q}{$}</Ke>;
        e[66] = onSubmit;
        e[67] = x;
        e[68] = C;
        e[69] = q;
        e[70] = $;
        e[71] = k;
        e[72] = K;
    } else {
        K = e[72];
    }
    return K;
}
function MeComponent(n) {
    MeComponent.d = 324;
    const e = c.c(12);
    const { entry, adjacency } = n;
    const agentId = an() ?? undefined;
    const isProvided = entry.secretProvided === true;
    let m;
    if (e[0] !== entry.id || e[1] !== entry.message.secretRequest || e[2] !== agentId || e[3] !== isProvided) {
        m = <Me1Component agentId={agentId} entryId={entry.id} isProvided={isProvided} request={entry.message.secretRequest}/>;
        e[0] = entry.id;
        e[1] = entry.message.secretRequest;
        e[2] = agentId;
        e[3] = isProvided;
        e[4] = m;
    } else {
        m = e[4];
    }
    let o;
    if (e[5] !== adjacency.isGroupStart || e[6] !== entry.timestampMs || e[7] !== m) {
        o = <He className="sand-secret-request-wrap" isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="question">{m}</He>;
        e[5] = adjacency.isGroupStart;
        e[6] = entry.timestampMs;
        e[7] = m;
        e[8] = o;
    } else {
        o = e[8];
    }
    let d;
    if (e[9] !== entry || e[10] !== o) {
        d = <Ve entry={entry}>{o}</Ve>;
        e[9] = entry;
        e[10] = o;
        e[11] = d;
    } else {
        d = e[11];
    }
    return d;
}
export { MeComponent as default };
