import { i, c as c_1, u as u_1, r as r_1, p as p_1, T } from "./index.eager-vendor-Qbf9YA6n.js";
import { be as Ts1, aY as Ke, i as i_1, a_ as As1, c as c_2 } from "./index.eager-platform-Dcfeegfw.js";
import { f as Le, fL, aV, a_, fM, fN, fO, cq, b8, b$, fP, fQ, fR, fS, ak, r as r_2, fT, d0, dd, fU } from "./index.eager-app-Cj5f8Gby.js";
import { w } from "./index.eager-common-CdCvBQNJ.js";
import { I, bS, bx as Ws, bT, z as Me, p as As } from "./index-ZYxf-aBb.js";
import { u as u_2 } from "./chunk-load-failure-copy-g-dfAdrV.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "ab8b8de6-bc92-4cdd-a06b-2b342437f7e7";
            e._sentryDebugIdIdentifier = "sentry-dbid-ab8b8de6-bc92-4cdd-a06b-2b342437f7e7";
        }
    } catch (e) {}
})();
function DeComponent({ size = 24, title = "Microsoft Teams", variant = "monochrome", ...rest }) {
    DeComponent.d = 2858161715;
    const o = variant === "brand";
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={o ? undefined : "currentColor"} role="img" aria-label={title} {...rest}><path fillRule="evenodd" clipRule="evenodd" d="M15.5 5A3 3 0 0 1 14 7.599V7.5a2 2 0 0 0-2-2H9.541A3 3 0 1 1 15.5 5Zm6.25 1a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-3.294 11.732A3.25 3.25 0 0 0 23 14.75v-4.361a.889.889 0 0 0-.889-.889h-3.879c.17.294.268.636.268 1V17c0 .248-.015.492-.044.732ZM8.169 19.5A5 5 0 0 0 17.5 17v-6.5a1 1 0 0 0-1-1H14v8a2 2 0 0 1-2 2H8.169Z" fill={o ? "#5059C9" : undefined}/><path fillRule="evenodd" clipRule="evenodd" d="M1 17.5v-10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Zm6.75-6.75H9.5v-1.5h-5v1.5h1.75v4.75h1.5v-4.75Z" fill={o ? "#7B83EB" : undefined}/></svg>;
}
function UeComponent({ size = 24, title = "PagerDuty", variant = "monochrome", ...rest }) {
    UeComponent.d = 2022216294;
    const o = variant === "brand";
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={o ? undefined : "currentColor"} role="img" aria-label={title} {...rest}><g transform="translate(-2.23 0)"><path d="M15.59 0H5.65v16.08h3.56V3.39h6.12c2.37 0 4.23 1.28 4.23 3.86 0 2.47-1.67 3.97-4.23 3.97H12.1v3.21h3.56c4.49 0 7.15-2.93 7.15-7.1C22.81 2.97 20.28 0 15.59 0zM5.65 20.4h3.56V24H5.65z" fill={o ? "#06AC38" : undefined}/></g></svg>;
}
function WeComponent({ size = 24, title = "Sentry", variant = "monochrome", ...rest }) {
    WeComponent.d = 956094295;
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} role="img" aria-label={title} {...rest}><path fill={variant === "brand" ? "#6E47AE" : "currentColor"} d="m23.663 19.246-9.72-16.71C13.497 1.798 12.749 1.5 12 1.5s-1.495.444-1.943 1.036l-3.14 5.471.748.444a14.735 14.735 0 0 1 5.682 5.619c1.197 2.071 1.944 4.288 2.094 6.656h-2.243a13.066 13.066 0 0 0-1.794-5.621c-1.047-2.07-2.692-3.697-4.785-4.88l-.749-.443-2.99 5.028.747.444c1.944 1.182 3.29 3.104 3.589 5.323H2.281c-.149 0-.3-.148-.3-.148s-.148-.148 0-.296l1.348-2.367c-.449-.442-1.048-.74-1.646-.886L.337 19.247c-.449.74-.449 1.479 0 2.219.448.738 1.046 1.034 1.943 1.034h6.879v-.886c0-1.627-.449-3.106-1.196-4.586-.599-1.182-1.496-2.07-2.542-2.808l1.047-1.924c1.347 1.034 2.543 2.218 3.439 3.698 1.047 1.773 1.496 3.697 1.496 5.619v.886h5.831v-.886c0-2.957-.747-5.916-2.392-8.577-1.197-2.368-3.141-4.289-5.385-5.768L11.7 3.424c.152-.149.3-.149.3-.149.15 0 .15 0 .299.148l9.721 16.709c.148.146 0 .296 0 .296s-.15.148-.3.148h-2.243v1.775h2.243c.896.147 1.495-.148 1.943-.886.449-.739.449-1.479 0-2.219z"/></svg>;
}
function Rs({ name, remove, onFailure }) {
    return {
        title: i._({
            id: "TNRo9Q",
            values: {
                name
            }
        }),
        description: i._({
            id: "VAgxC4"
        }),
        confirmLabel: i._({
            id: "cnGeoo"
        }),
        pendingLabel: i._({
            id: "EF2EU9"
        }),
        cancelLabel: i._({
            id: "dEgA5A"
        }),
        destructive: true,
        perform: async ()=>{
            try {
                await remove();
                return null;
            } catch (error) {
                onFailure(error);
                return i._({
                    id: "GX6bhk"
                });
            }
        }
    };
}
const ee = 16;
const Pe = {
    glyph: {
        kzqmXN: "sand-1kky2od",
        kZKoxP: "sand-lup9mm",
        $$css: true
    }
};
function XeComponent(l) {
    XeComponent.d = 57;
    const e = c_1.c(9);
    const { type } = l;
    switch(type){
        case "cron":
            {
                let s;
                if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <I name="clock" size="md" style={Pe.glyph}/>;
                    e[0] = s;
                } else {
                    s = e[0];
                }
                return s;
            }
        case "slack":
            {
                let s;
                if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <Le name="slack" sizePx={ee}/>;
                    e[1] = s;
                } else {
                    s = e[1];
                }
                return s;
            }
        case "github":
            {
                let s;
                if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <Le name="github" sizePx={ee}/>;
                    e[2] = s;
                } else {
                    s = e[2];
                }
                return s;
            }
        case "microsoftTeams":
            {
                let s;
                if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <DeComponent size={ee} variant="brand"/>;
                    e[3] = s;
                } else {
                    s = e[3];
                }
                return s;
            }
        case "linear":
            {
                let s;
                if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <Ts1 size={ee} variant="brand"/>;
                    e[4] = s;
                } else {
                    s = e[4];
                }
                return s;
            }
        case "sentry":
            {
                let s;
                if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <WeComponent size={ee} variant="brand"/>;
                    e[5] = s;
                } else {
                    s = e[5];
                }
                return s;
            }
        case "pagerduty":
            {
                let s;
                if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <UeComponent size={ee} variant="brand"/>;
                    e[6] = s;
                } else {
                    s = e[6];
                }
                return s;
            }
        case "email":
            {
                let s;
                if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <I name="mail" size="md" style={Pe.glyph}/>;
                    e[7] = s;
                } else {
                    s = e[7];
                }
                return s;
            }
        case "origin":
        case "webhook":
            {
                let s;
                if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <I name="globe" size="md" style={Pe.glyph}/>;
                    e[8] = s;
                } else {
                    s = e[8];
                }
                return s;
            }
    }
}
const Oe = {
    field: {
        kB7OPa: "sand-9f619",
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        k7Eaqz: "sand-187xtus",
        kZKoxP: "sand-d7y6wv",
        kLKAdn: "sand-yqdw3p",
        kwRFfy: "sand-1icxu4v",
        kGO01o: "sand-g8j3zb",
        kZCmMZ: "sand-25sj25",
        kMzoRj: "sand-4hv7ue",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-qz0629",
        kaIpWk: "sand-1kogg8i",
        kWkggS: "sand-1tiofj7",
        kMwMTN: "sand-tyxrsu",
        kMv6JI: "sand-jb2p0i",
        k3XXqK: "sand-1t137rt",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        k8Qsv1: "sand-1h7ufjq",
        $$css: true
    },
    fieldCopyable: {
        kkrTdU: "sand-8zifdi",
        $$css: true
    }
};
function Ve(text) {
    return {
        url: {
            kind: "placeholder",
            text
        },
        key: {
            kind: "placeholder",
            text
        }
    };
}
function QeComponent(l) {
    QeComponent.d = 59;
    const e = c_1.c(27);
    const { "aria-label": aria_label, content, tooltip } = l;
    const [i, d] = aV();
    const cRef = r_1.useRef(false);
    let a;
    if (e[0] !== content.kind || e[1] !== content.value || e[2] !== d) {
        a = (w)=>{
            if (content.kind === "value") {
                w.select();
                d(content.value);
            }
        };
        e[0] = content.kind;
        e[1] = content.value;
        e[2] = d;
        e[3] = a;
    } else {
        a = e[3];
    }
    const k = a;
    let onBlur;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        onBlur = ()=>{
            cRef.current = false;
        };
        e[4] = onBlur;
    } else {
        onBlur = e[4];
    }
    let h;
    let onFocus;
    if (e[5] !== k) {
        h = (w)=>{
            cRef.current = false;
            k(w.currentTarget);
        };
        onFocus = (w)=>{
            if (!cRef.current) {
                k(w.currentTarget);
            }
        };
        e[5] = k;
        e[6] = h;
        e[7] = onFocus;
    } else {
        h = e[6];
        onFocus = e[7];
    }
    let onPointerCancel;
    let onPointerDown;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        onPointerCancel = ()=>{
            cRef.current = false;
        };
        onPointerDown = ()=>{
            cRef.current = true;
        };
        e[8] = onPointerCancel;
        e[9] = onPointerDown;
    } else {
        onPointerCancel = e[8];
        onPointerDown = e[9];
    }
    const placeholder = content.kind === "placeholder" ? content.text : "";
    const x = content.kind === "value" ? content.value : "";
    let b;
    if (e[10] !== content.kind) {
        b = p_1(a_.body2, Oe.field, content.kind === "value" && Oe.fieldCopyable);
        e[10] = content.kind;
        e[11] = b;
    } else {
        b = e[11];
    }
    let r;
    if (e[12] !== aria_label || e[13] !== h || e[14] !== onFocus || e[15] !== placeholder || e[16] !== x || e[17] !== b) {
        r = <input aria-label={aria_label} onBlur={onBlur} onClick={h} onFocus={onFocus} onPointerCancel={onPointerCancel} onPointerDown={onPointerDown} placeholder={placeholder} readOnly type="text" value={x} {...b}/>;
        e[12] = aria_label;
        e[13] = h;
        e[14] = onFocus;
        e[15] = placeholder;
        e[16] = x;
        e[17] = b;
        e[18] = r;
    } else {
        r = e[18];
    }
    const u = r;
    let m;
    if (e[19] !== u || e[20] !== tooltip) {
        m = tooltip == null ? u : <Ws content={tooltip}>{u}</Ws>;
        e[19] = u;
        e[20] = tooltip;
        e[21] = m;
    } else {
        m = e[21];
    }
    let p;
    if (e[22] !== i) {
        p = i ? <Ke as="span" color="secondary" size="sm"><T id="6V3Ea3"/></Ke> : null;
        e[22] = i;
        e[23] = p;
    } else {
        p = e[23];
    }
    let S;
    if (e[24] !== m || e[25] !== p) {
        S = <>{m}{p}</>;
        e[24] = m;
        e[25] = p;
        e[26] = S;
    } else {
        S = e[26];
    }
    return S;
}
function EComponent(l) {
    EComponent.d = 60;
    const e = c_1.c(15);
    const { target, connector, content, tooltip } = l;
    bS.useRowFocus(target);
    const d = fL(target);
    let id;
    if (e[0] !== target) {
        id = fM(target);
        e[0] = target;
        e[1] = id;
    } else {
        id = e[1];
    }
    let a;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        a = {
            className: "sand-78zum5 sand-1a02dak sand-6s0dn4 sand-17d4w8g"
        };
        e[2] = a;
    } else {
        a = e[2];
    }
    let k;
    if (e[3] !== connector) {
        k = <Ke as="span" color="secondary" size="md">{connector}</Ke>;
        e[3] = connector;
        e[4] = k;
    } else {
        k = e[4];
    }
    let f;
    if (e[5] !== tooltip) {
        f = tooltip == null ? {} : {
            tooltip
        };
        e[5] = tooltip;
        e[6] = f;
    } else {
        f = e[6];
    }
    let h;
    if (e[7] !== content || e[8] !== d || e[9] !== f) {
        h = <QeComponent aria-label={d} content={content} {...f}/>;
        e[7] = content;
        e[8] = d;
        e[9] = f;
        e[10] = h;
    } else {
        h = e[10];
    }
    let y;
    if (e[11] !== id || e[12] !== k || e[13] !== h) {
        y = <div id={id} {...a}>{k}{h}</div>;
        e[11] = id;
        e[12] = k;
        e[13] = h;
        e[14] = y;
    } else {
        y = e[14];
    }
    return y;
}
function YeComponent(l) {
    YeComponent.d = 58;
    const e = c_1.c(39);
    const { credential } = l;
    const { _: __1 } = u_1();
    const o = u_2();
    let i;
    e: switch(credential.kind){
        case "unsaved":
        case "loading":
            {
                let r;
                if (e[0] !== __1) {
                    r = Ve(__1({
                        id: "Pwqkdw"
                    }));
                    e[0] = __1;
                    e[1] = r;
                } else {
                    r = e[1];
                }
                i = r;
                break e;
            }
        case "failed":
            {
                let r;
                if (e[2] !== o) {
                    r = Ve(o);
                    e[2] = o;
                    e[3] = r;
                } else {
                    r = e[3];
                }
                i = r;
                break e;
            }
        case "minting":
            {
                let r;
                if (e[4] !== credential.url) {
                    r = {
                        kind: "value",
                        value: credential.url
                    };
                    e[4] = credential.url;
                    e[5] = r;
                } else {
                    r = e[5];
                }
                let text;
                if (e[6] !== __1) {
                    text = __1({
                        id: "B1MVWs"
                    });
                    e[6] = __1;
                    e[7] = text;
                } else {
                    text = e[7];
                }
                let m;
                if (e[8] !== text) {
                    m = {
                        kind: "placeholder",
                        text
                    };
                    e[8] = text;
                    e[9] = m;
                } else {
                    m = e[9];
                }
                let p;
                if (e[10] !== r || e[11] !== m) {
                    p = {
                        url: r,
                        key: m
                    };
                    e[10] = r;
                    e[11] = m;
                    e[12] = p;
                } else {
                    p = e[12];
                }
                i = p;
                break e;
            }
        case "ready":
            {
                let r;
                if (e[13] !== credential.url) {
                    r = {
                        kind: "value",
                        value: credential.url
                    };
                    e[13] = credential.url;
                    e[14] = r;
                } else {
                    r = e[14];
                }
                let u;
                if (e[15] !== credential.key) {
                    u = {
                        kind: "value",
                        value: credential.key
                    };
                    e[15] = credential.key;
                    e[16] = u;
                } else {
                    u = e[16];
                }
                let m;
                if (e[17] !== r || e[18] !== u) {
                    m = {
                        url: r,
                        key: u
                    };
                    e[17] = r;
                    e[18] = u;
                    e[19] = m;
                } else {
                    m = e[19];
                }
                i = m;
            }
    }
    let d;
    if (e[20] !== i.key) {
        d = i.key.kind === "value" ? {
            kind: "value",
            value: `Authorization: Bearer ${i.key.value}`
        } : i.key;
        e[20] = i.key;
        e[21] = d;
    } else {
        d = e[21];
    }
    const content = d;
    let a;
    if (e[22] === Symbol.for("react.memo_cache_sentinel")) {
        a = {
            className: "sand-78zum5 sand-dt5ytf sand-167g77z sand-f159sx sand-mzvs34"
        };
        e[22] = a;
    } else {
        a = e[22];
    }
    let k;
    if (e[23] === Symbol.for("react.memo_cache_sentinel")) {
        k = <T id="aGIdSd"/>;
        e[23] = k;
    } else {
        k = e[23];
    }
    let f;
    if (e[24] !== i.url) {
        f = <EComponent connector={k} content={i.url} target="webhook-url"/>;
        e[24] = i.url;
        e[25] = f;
    } else {
        f = e[25];
    }
    let h;
    if (e[26] === Symbol.for("react.memo_cache_sentinel")) {
        h = <T id="4NH4hr"/>;
        e[26] = h;
    } else {
        h = e[26];
    }
    const i_key = i.key;
    let tooltip;
    if (e[27] !== __1) {
        tooltip = __1({
            id: "/ZL2S7"
        });
        e[27] = __1;
        e[28] = tooltip;
    } else {
        tooltip = e[28];
    }
    let g;
    if (e[29] !== i.key || e[30] !== tooltip) {
        g = <EComponent connector={h} content={i_key} target="webhook-key" tooltip={tooltip}/>;
        e[29] = i.key;
        e[30] = tooltip;
        e[31] = g;
    } else {
        g = e[31];
    }
    let _;
    if (e[32] === Symbol.for("react.memo_cache_sentinel")) {
        _ = <T id="pZ7BTT"/>;
        e[32] = _;
    } else {
        _ = e[32];
    }
    let x;
    if (e[33] !== content) {
        x = <EComponent connector={_} content={content} target="webhook-header"/>;
        e[33] = content;
        e[34] = x;
    } else {
        x = e[34];
    }
    let b;
    if (e[35] !== x || e[36] !== f || e[37] !== g) {
        b = <div {...a}>{f}{g}{x}</div>;
        e[35] = x;
        e[36] = f;
        e[37] = g;
        e[38] = b;
    } else {
        b = e[38];
    }
    return b;
}
const A = {
    sectionHeader: {
        kB7OPa: "sand-9f619",
        kZKoxP: "sand-1gnnpzl",
        kLKAdn: "sand-1y1aw1k",
        kwRFfy: "sand-f159sx",
        kGO01o: "sand-10b6aqq",
        kZCmMZ: "sand-mzvs34",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    instruction: {
        kwRFfy: "sand-f159sx",
        kZCmMZ: "sand-mzvs34",
        $$css: true
    },
    trigger: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-1jnr06f",
        kB7OPa: "sand-9f619",
        kAzted: "sand-1rz828m",
        kLKAdn: "sand-1yrsyyn",
        kwRFfy: "sand-1icxu4v",
        kGO01o: "sand-10b6aqq",
        kZCmMZ: "sand-mzvs34",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    failure: {
        kwRFfy: "sand-f159sx",
        kZCmMZ: "sand-mzvs34",
        kMwMTN: "sand-6rl5ky",
        $$css: true
    },
    action: {
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        kCS8Yb: "sand-1r8uery",
        k7Eaqz: "sand-euugli",
        kMzoRj: "sand-qjedn3",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-q03nf1",
        $$css: true
    },
    deleteAction: {
        kzqmXN: "sand-14atkfc",
        kZKoxP: "sand-t7dq6l",
        kOBAk4: "sand-1plog1",
        kMzoRj: "sand-qjedn3",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-q03nf1",
        $$css: true
    }
};
function SeComponent(l) {
    SeComponent.d = 55;
    const e = c_1.c(7);
    const { title, children } = l;
    let o;
    let i;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        o = {
            className: "sand-78zum5 sand-dt5ytf"
        };
        i = p_1(a_.label, A.sectionHeader);
        e[0] = o;
        e[1] = i;
    } else {
        o = e[0];
        i = e[1];
    }
    let d;
    if (e[2] !== title) {
        d = <div {...i}>{title}</div>;
        e[2] = title;
        e[3] = d;
    } else {
        d = e[3];
    }
    let c;
    if (e[4] !== children || e[5] !== d) {
        c = <div {...o}>{d}{children}</div>;
        e[4] = children;
        e[5] = d;
        e[6] = c;
    } else {
        c = e[6];
    }
    return c;
}
function Ns(l) {
    if (l instanceof dd && l.failure.code === fU) {
        return l.message;
    }
    return null;
}
function onFailure(l) {
    d0(l, {
        tags: {
            sand_area: "automations"
        }
    });
}
const Cs = w({
    name: "automation-failure-seen",
    park: "hidden"
});
function qs(l) {
    const e = c_2(null);
    return {
        watch (n) {
            const s = l.arm((o)=>{
                if (o.frame === 0) {
                    return "continue";
                }
                e.set(n);
                return "done";
            });
            return ()=>s.cancel();
        },
        subscribe: e.subscribe,
        read: e.get
    };
}
export function AutomationDetailPanel(l) {
    AutomationDetailPanel.d = 54;
    const e = c_1.c(110);
    const { agentId, automation, isServerOwned, isPaneHidden, onSeedPrompt } = l;
    const c = isPaneHidden === undefined ? false : isPaneHidden;
    const { _: __1 } = u_1();
    const { _: __2 } = u_1();
    const { renderMarkdown } = fN();
    const h = bT();
    const y = fO();
    const v = cq();
    const g = b8(y.setEnabled);
    const _ = b8(y.runNow);
    const sessionId = b$(agentId);
    let b;
    if (e[0] !== agentId || e[1] !== automation.id) {
        b = {
            agentId,
            automationId: automation.id
        };
        e[0] = agentId;
        e[1] = automation.id;
        e[2] = b;
    } else {
        b = e[2];
    }
    const r = fP(b);
    let u;
    if (e[3] !== automation.trigger) {
        u = fQ(automation.trigger, fR);
        e[3] = automation.trigger;
        e[4] = u;
    } else {
        u = e[4];
    }
    const m = u;
    const automationId = m ? automation.id : null;
    let S;
    if (e[5] !== agentId || e[6] !== automationId) {
        S = {
            agentId,
            automationId
        };
        e[5] = agentId;
        e[6] = automationId;
        e[7] = S;
    } else {
        S = e[7];
    }
    const credential = fS(S);
    const [j, setJ] = r_1.useState(null);
    const ae = ak("info-pane") || c;
    const [R] = r_1.useState($s);
    const le = r_1.useSyncExternalStore(R.subscribe, R.read, R.read);
    let ie;
    if (e[8] !== j || e[9] !== R || e[10] !== ae || e[11] !== le) {
        ie = ()=>{
            if (j == null || ae || le === j) {
                return Fs;
            }
            return R.watch(j);
        };
        e[8] = j;
        e[9] = R;
        e[10] = ae;
        e[11] = le;
        e[12] = ie;
    } else {
        ie = e[12];
    }
    i_1(ie);
    const [$e, set$e] = r_1.useState(null);
    if (j != null && le === j && ae && $e !== j) {
        set$e(j);
    }
    const oe = $e !== j;
    const [ze, setZe] = r_1.useState(null);
    const [Ae, setAe] = r_1.useState(null);
    const ZeRef = r_1.useRef(0);
    if (Ae != null && Ae.isEnabled === automation.isEnabled) {
        setAe(null);
    }
    const N = Ae?.isEnabled ?? automation.isEnabled;
    const pending = _.isPending || r || automation.runs[0]?.status === "running";
    let de;
    if (e[13] !== agentId || e[14] !== automation.id || e[15] !== N || e[16] !== g) {
        de = ()=>{
            const Y = {
                seq: ZeRef.current = ZeRef.current + 1,
                isEnabled: !N
            };
            setJ(null);
            setAe(Y);
            g.run(agentId, automation.id, Y.isEnabled).then(Ps, (ss)=>{
                onFailure(ss);
                setAe((Be)=>{
                    if (Be?.seq === Y.seq) {
                        return null;
                    }
                    return Be;
                });
                setJ({
                    kind: Y.isEnabled ? "resume" : "pause"
                });
            });
        };
        e[13] = agentId;
        e[14] = automation.id;
        e[15] = N;
        e[16] = g;
        e[17] = de;
    } else {
        de = e[17];
    }
    const Re = de;
    let ce;
    if (e[18] !== sessionId || e[19] !== agentId || e[20] !== automation.id || e[21] !== _) {
        ce = ()=>{
            setJ(null);
            setZe(null);
            _.run(agentId, automation.id, {
                sessionId
            }).catch((Y)=>{
                setZe(Ns(Y));
                setJ({
                    kind: "test-run"
                });
            });
        };
        e[18] = sessionId;
        e[19] = agentId;
        e[20] = automation.id;
        e[21] = _;
        e[22] = ce;
    } else {
        ce = e[22];
    }
    const Ne = ce;
    let ue;
    if (e[23] !== agentId || e[24] !== automation.id || e[25] !== automation.name || e[26] !== y || e[27] !== v) {
        ue = ()=>{
            setJ(null);
            v(Rs({
                name: automation.name,
                remove: ()=>y.remove(agentId, automation.id),
                onFailure
            }));
        };
        e[23] = agentId;
        e[24] = automation.id;
        e[25] = automation.name;
        e[26] = y;
        e[27] = v;
        e[28] = ue;
    } else {
        ue = e[28];
    }
    const Ce = ue;
    let pause;
    let resume;
    if (e[29] === Symbol.for("react.memo_cache_sentinel")) {
        pause = <T id="JKdhhI"/>;
        resume = <T id="v+fmj9"/>;
        e[29] = pause;
        e[30] = resume;
    } else {
        pause = e[29];
        resume = e[30];
    }
    let C;
    if (e[31] !== ze) {
        C = ze ?? <T id="EuB6Ib"/>;
        e[31] = ze;
        e[32] = C;
    } else {
        C = e[32];
    }
    let he;
    if (e[33] !== C) {
        he = {
            pause,
            resume,
            "test-run": C
        };
        e[33] = C;
        e[34] = he;
    } else {
        he = e[34];
    }
    const qe = he;
    let className;
    if (e[35] === Symbol.for("react.memo_cache_sentinel")) {
        className = r_2("sand-automation-detail", "sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-2lwn1j sand-5yr21d");
        e[35] = className;
    } else {
        className = e[35];
    }
    let ye;
    if (e[36] === Symbol.for("react.memo_cache_sentinel")) {
        ye = {
            className: "sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-2lwn1j"
        };
        e[36] = ye;
    } else {
        ye = e[36];
    }
    const ye_className = ye.className;
    let ge;
    if (e[37] === Symbol.for("react.memo_cache_sentinel")) {
        ge = {
            className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d sand-9f619 sand-pdmqnj sand-wxc41k sand-1g0dm76"
        };
        e[37] = ge;
    } else {
        ge = e[37];
    }
    let q;
    if (e[38] !== __1) {
        q = __1({
            id: "p7xApR"
        });
        e[38] = __1;
        e[39] = q;
    } else {
        q = e[39];
    }
    let E;
    if (e[40] !== automation.prompt || e[41] !== renderMarkdown) {
        E = renderMarkdown(automation.prompt, [
            a_.body2,
            A.instruction
        ]);
        e[40] = automation.prompt;
        e[41] = renderMarkdown;
        e[42] = E;
    } else {
        E = e[42];
    }
    let M;
    if (e[43] !== q || e[44] !== E) {
        M = <SeComponent title={q}>{E}</SeComponent>;
        e[43] = q;
        e[44] = E;
        e[45] = M;
    } else {
        M = e[45];
    }
    let P;
    if (e[46] !== __1) {
        P = __1({
            id: "1bU8gN"
        });
        e[46] = __1;
        e[47] = P;
    } else {
        P = e[47];
    }
    let F;
    if (e[48] !== __1) {
        F = __1({
            id: "1bU8gN"
        });
        e[48] = __1;
        e[49] = F;
    } else {
        F = e[49];
    }
    let be;
    if (e[50] === Symbol.for("react.memo_cache_sentinel")) {
        be = {
            className: "sand-e8uvvx sand-78zum5 sand-dt5ytf sand-195vfkc sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-1717udv"
        };
        e[50] = be;
    } else {
        be = e[50];
    }
    let $;
    if (e[51] !== __2 || e[52] !== automation || e[53] !== h) {
        $ = fT(__2, automation, h).map(MsComponent);
        e[51] = __2;
        e[52] = automation;
        e[53] = h;
        e[54] = $;
    } else {
        $ = e[54];
    }
    let I;
    if (e[55] !== F || e[56] !== $) {
        I = <ul aria-label={F} {...be}>{$}</ul>;
        e[55] = F;
        e[56] = $;
        e[57] = I;
    } else {
        I = e[57];
    }
    let Z;
    if (e[58] !== P || e[59] !== I) {
        Z = <SeComponent title={P}>{I}</SeComponent>;
        e[58] = P;
        e[59] = I;
        e[60] = Z;
    } else {
        Z = e[60];
    }
    let B;
    if (e[61] !== __1 || e[62] !== m || e[63] !== credential) {
        B = m ? <SeComponent title={__1({
            id: "TRDppN"
        })}><YeComponent credential={credential}/></SeComponent> : null;
        e[61] = __1;
        e[62] = m;
        e[63] = credential;
        e[64] = B;
    } else {
        B = e[64];
    }
    let L;
    if (e[65] !== M || e[66] !== Z || e[67] !== B) {
        L = <As1 className={ye_className}><div {...ge}>{M}{Z}{B}</div></As1>;
        e[65] = M;
        e[66] = Z;
        e[67] = B;
        e[68] = L;
    } else {
        L = e[68];
    }
    let ve;
    if (e[69] === Symbol.for("react.memo_cache_sentinel")) {
        ve = {
            className: "sand-78zum5 sand-dt5ytf sand-167g77z sand-2lah0s sand-pdmqnj sand-sag5q8 sand-1g0dm76"
        };
        e[69] = ve;
    } else {
        ve = e[69];
    }
    let H;
    if (e[70] !== j || e[71] !== qe || e[72] !== oe) {
        H = j == null ? null : <div {...p_1(a_.body2, A.failure)} aria-live={oe ? "assertive" : undefined} role={oe ? "alert" : undefined}>{qe[j.kind]}</div>;
        e[70] = j;
        e[71] = qe;
        e[72] = oe;
        e[73] = H;
    } else {
        H = e[73];
    }
    let pe;
    if (e[74] === Symbol.for("react.memo_cache_sentinel")) {
        pe = {
            className: "sand-78zum5 sand-1qjc9v5 sand-167g77z"
        };
        e[74] = pe;
    } else {
        pe = e[74];
    }
    let O;
    if (e[75] !== __1 || e[76] !== N) {
        O = __1(N ? {
            id: "IgrLD/"
        } : {
            id: "v39wLo"
        });
        e[75] = __1;
        e[76] = N;
        e[77] = O;
    } else {
        O = e[77];
    }
    let V;
    if (e[78] !== Re || e[79] !== O || e[80] !== g.isPending) {
        V = <Me onClick={Re} pending={g.isPending} style={A.action} variant="secondary">{O}</Me>;
        e[78] = Re;
        e[79] = O;
        e[80] = g.isPending;
        e[81] = V;
    } else {
        V = e[81];
    }
    let G;
    if (e[82] !== __1 || e[83] !== Ne || e[84] !== pending || e[85] !== isServerOwned) {
        G = isServerOwned ? null : <Me onClick={Ne} pending={pending} style={A.action} variant="secondary">{__1(pending ? {
            id: "lziBgy"
        } : {
            id: "NnH3pK"
        })}</Me>;
        e[82] = __1;
        e[83] = Ne;
        e[84] = pending;
        e[85] = isServerOwned;
        e[86] = G;
    } else {
        G = e[86];
    }
    let K;
    if (e[87] !== __1 || e[88] !== automation.name || e[89] !== onSeedPrompt) {
        K = ()=>onSeedPrompt(__1({
                id: "hsz5he",
                values: {
                    0: automation.name
                }
            }));
        e[87] = __1;
        e[88] = automation.name;
        e[89] = onSeedPrompt;
        e[90] = K;
    } else {
        K = e[90];
    }
    let xe;
    if (e[91] === Symbol.for("react.memo_cache_sentinel")) {
        xe = <T id="ePK91l"/>;
        e[91] = xe;
    } else {
        xe = e[91];
    }
    let D;
    if (e[92] !== K) {
        D = <Me onClick={K} style={A.action} variant="secondary">{xe}</Me>;
        e[92] = K;
        e[93] = D;
    } else {
        D = e[93];
    }
    let U;
    if (e[94] !== __1) {
        U = __1({
            id: "VSXqhr"
        });
        e[94] = __1;
        e[95] = U;
    } else {
        U = e[95];
    }
    let W;
    if (e[96] !== Ce || e[97] !== U) {
        W = <As aria-label={U} icon="trash" onClick={Ce} shape="circle" style={A.deleteAction} variant="secondary"/>;
        e[96] = Ce;
        e[97] = U;
        e[98] = W;
    } else {
        W = e[98];
    }
    let X;
    if (e[99] !== V || e[100] !== G || e[101] !== D || e[102] !== W) {
        X = <div {...pe}>{V}{G}{D}{W}</div>;
        e[99] = V;
        e[100] = G;
        e[101] = D;
        e[102] = W;
        e[103] = X;
    } else {
        X = e[103];
    }
    let Q;
    if (e[104] !== H || e[105] !== X) {
        Q = <div {...ve}>{H}{X}</div>;
        e[104] = H;
        e[105] = X;
        e[106] = Q;
    } else {
        Q = e[106];
    }
    let je;
    if (e[107] !== L || e[108] !== Q) {
        je = <div className={className}>{L}{Q}</div>;
        e[107] = L;
        e[108] = Q;
        e[109] = je;
    } else {
        je = e[109];
    }
    return je;
}
function MsComponent(l, key) {
    return <li key={key} {...p_1(a_.body2, A.trigger)}><span aria-hidden className="sand-3nfvp2 sand-2lah0s"><XeComponent type={l.type}/></span>{l.text}</li>;
}
function Ps() {}
function Fs() {}
function $s() {
    return qs(Cs);
}
