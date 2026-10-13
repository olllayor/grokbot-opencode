import { c as c_1, j, T as T_1, p as p_1, u as u_1, r } from "./index.eager-vendor-Qbf9YA6n.js";
import { I, bq as We1, x as x_1, p as Ee, z as Re, an, a5 as Fe, a6 as $e } from "./index-ZYxf-aBb.js";
import { i as i_1 } from "./index.eager-platform-Dcfeegfw.js";
import { r as r_2, v as v_1 } from "./index.eager-common-CdCvBQNJ.js";
import { bz, b0 as Ie, bt, n as Xe1, b7, eE, p as Ne, j as Je1, d0, aP as Oe, dd, eF } from "./index.eager-app-Cj5f8Gby.js";
import { C } from "./chunk-card-check-row-BW31sDfY.js";
import { a as Be, c as c_2, C as C_2 } from "./chunk-card-field-BW4hZ8b8.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "b6928154-5393-495f-8453-f656ac65a91e";
            e._sentryDebugIdIdentifier = "sentry-dbid-b6928154-5393-495f-8453-f656ac65a91e";
        }
    } catch (e) {}
})();
function Ge(form) {
    const e = form.liveHost ?? form.domain;
    if (e == null || e.length === 0 || !URL.canParse(`https://${e}/`)) {
        return;
    }
    const t = new URL(`https://${e}/`);
    if (t.host === e.toLowerCase()) {
        return `https://${t.host}/`;
    }
}
function Ve(siblings) {
    return siblings.some((e)=>e.type === "password" || e.type === "otp");
}
function Ke(field) {
    return /user|login|account/i.test(`${field.id} ${field.label}`);
}
const He = new Set([
    "password",
    "passwd",
    "pwd",
    "passcode"
]);
function Je(field) {
    return `${field.id} ${field.label}`.replace(/([a-z0-9])([A-Z])/g, "$1 $2").split(/[^a-zA-Z0-9]+/).some((e)=>He.has(e.toLowerCase()));
}
function Ye(field, siblings) {
    switch(field.type){
        case "email":
            {
                const t = Ve(siblings) ? "username" : "email";
                return {
                    type: "text",
                    name: t,
                    autoComplete: t,
                    inputMode: "email"
                };
            }
        case "tel":
            return {
                type: "tel",
                name: field.id,
                autoComplete: "tel",
                inputMode: "tel"
            };
        case "password":
            return {
                type: "password",
                name: "password",
                autoComplete: "current-password"
            };
        case "otp":
            return {
                type: "text",
                name: "one-time-code",
                autoComplete: "one-time-code",
                inputMode: "numeric"
            };
        case "number":
            return {
                type: "number",
                name: field.id,
                autoComplete: "off",
                inputMode: "numeric"
            };
        case "date":
            return {
                type: "date",
                name: field.id,
                autoComplete: "off"
            };
        default:
            if (field.secret === true) {
                if (Je(field)) {
                    return {
                        type: "password",
                        name: "password",
                        autoComplete: "current-password"
                    };
                }
                return {
                    type: "password",
                    name: field.id,
                    autoComplete: "off"
                };
            }
            if (Ke(field)) {
                return {
                    type: "text",
                    name: "username",
                    autoComplete: "username"
                };
            }
            return {
                type: "text",
                name: field.id,
                autoComplete: "on"
            };
    }
}
const site = {
    url: null,
    host: null,
    confirmedHost: null,
    faviconSrc: null
};
const he = 22;
const ne = {
    header: {
        kLKAdn: "sand-yamay9",
        kwRFfy: "sand-p3wktp",
        kGO01o: "sand-1l90r2v",
        $$css: true
    },
    body: {
        kLKAdn: "sand-yamay9",
        $$css: true
    },
    headerTitle: {
        kLWn49: "sand-1fc57z9",
        $$css: true
    },
    headerSubtitle: {
        kLWn49: "sand-1fc57z9",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    revealButton: {
        kSGwAc: "sand-amitd3",
        k71WvV: "sand-2fvf9",
        $$css: true
    },
    noteIcon: {
        keoZOQ: "sand-vijh9v",
        $$css: true
    }
};
function De1Component(s) {
    De1Component.d = 509;
    const e = c_1.c(12);
    const { site } = s;
    const n = bz().resolved === "dark";
    if (site.confirmedHost == null || site.faviconSrc == null) {
        let b;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-9f619 sand-b3r6kr sand-14qfxbe sand-c9qbxq sand-1q4ynmn sand-qjedn3 sand-1y0btm7 sand-q03nf1 sand-vvtkfd"
            };
            e[0] = b;
        } else {
            b = e[0];
        }
        let m;
        if (e[1] !== site.confirmedHost || e[2] !== site.url) {
            m = <span {...b}>{site.url == null || site.confirmedHost == null ? <I aria-hidden name="globe" size="lg"/> : <We1 size="md" url={site.url}/>}</span>;
            e[1] = site.confirmedHost;
            e[2] = site.url;
            e[3] = m;
        } else {
            m = e[3];
        }
        return m;
    }
    let i;
    if (e[4] !== n) {
        i = ({
            0: {
                className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-9f619 sand-b3r6kr sand-14qfxbe sand-c9qbxq sand-1q4ynmn sand-qjedn3 sand-1y0btm7 sand-q03nf1 sand-vvtkfd"
            },
            1: {
                className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-9f619 sand-b3r6kr sand-14qfxbe sand-c9qbxq sand-1q4ynmn sand-qjedn3 sand-1y0btm7 sand-q03nf1 sand-83z2og"
            }
        })[!!n << 0];
        e[4] = n;
        e[5] = i;
    } else {
        i = e[5];
    }
    const site_faviconSrc = site.faviconSrc;
    let o;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        o = {
            className: "sand-1lliihq sand-17z2i9w sand-17rw0jw sand-19kjcj4 sand-47corl sand-87ps6o"
        };
        e[6] = o;
    } else {
        o = e[6];
    }
    let d;
    if (e[7] !== site.faviconSrc) {
        d = <img alt="" aria-hidden draggable={false} height={he} src={site_faviconSrc} width={he} {...o}/>;
        e[7] = site.faviconSrc;
        e[8] = d;
    } else {
        d = e[8];
    }
    let a;
    if (e[9] !== i || e[10] !== d) {
        a = <span {...i}>{d}</span>;
        e[9] = i;
        e[10] = d;
        e[11] = a;
    } else {
        a = e[11];
    }
    return a;
}
function SeComponent(s) {
    SeComponent.d = 510;
    const e = c_1.c(24);
    const { field, siblings, value, disabled, setValue } = s;
    const { _ } = u_1();
    const [a, setA] = r.useState(false);
    let m;
    if (e[0] !== field || e[1] !== siblings) {
        m = Ye(field, siblings);
        e[0] = field;
        e[1] = siblings;
        e[2] = m;
    } else {
        m = e[2];
    }
    const c = m;
    const p = c.type === "password";
    const field_label = field.label;
    const f = field.required === true || undefined;
    const field_id = field.id;
    let j;
    if (e[3] !== setValue) {
        j = (F)=>setValue(F.currentTarget.value);
        e[3] = setValue;
        e[4] = j;
    } else {
        j = e[4];
    }
    const field_placeholder = field.placeholder;
    const R = p && a ? "text" : c.type;
    let g;
    if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
        g = p_1(c_2.control);
        e[5] = g;
    } else {
        g = e[5];
    }
    let x;
    if (e[6] !== c || e[7] !== disabled || e[8] !== field.id || e[9] !== field.placeholder || e[10] !== f || e[11] !== j || e[12] !== R || e[13] !== value) {
        x = <input aria-required={f} disabled={disabled} id={field_id} onChange={j} placeholder={field_placeholder} spellCheck={false} value={value} {...c} type={R} {...g}/>;
        e[6] = c;
        e[7] = disabled;
        e[8] = field.id;
        e[9] = field.placeholder;
        e[10] = f;
        e[11] = j;
        e[12] = R;
        e[13] = value;
        e[14] = x;
    } else {
        x = e[14];
    }
    let v;
    if (e[15] !== _ || e[16] !== disabled || e[17] !== p || e[18] !== a || e[19] !== field_label) {
        v = p ? <Ee aria-label={_(a ? {
            id: "FUGQxr",
            values: {
                label: field_label
            }
        } : {
            id: "yynT8E",
            values: {
                label: field_label
            }
        })} disabled={disabled} icon={a ? "eye-slash" : "eye"} onClick={()=>setA(Ze)} size="sm" style={ne.revealButton} type="button" variant="ghost"/> : null;
        e[15] = _;
        e[16] = disabled;
        e[17] = p;
        e[18] = a;
        e[19] = field_label;
        e[20] = v;
    } else {
        v = e[20];
    }
    let k;
    if (e[21] !== x || e[22] !== v) {
        k = <C_2>{x}{v}</C_2>;
        e[21] = x;
        e[22] = v;
        e[23] = k;
    } else {
        k = e[23];
    }
    return k;
}
function Ze(s) {
    return !s;
}
function Ge1Component(s) {
    Ge1Component.d = 507;
    const e = c_1.c(31);
    const { field, siblings, value, disabled, setValue } = s;
    if (field.type === "select") {
        const a = field.required === true || undefined;
        const { id, id: id_1 } = field;
        let c;
        if (e[0] !== setValue) {
            c = (E)=>setValue(E.currentTarget.value);
            e[0] = setValue;
            e[1] = c;
        } else {
            c = e[1];
        }
        let p;
        let u;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            p = p_1(c_2.control);
            u = <option disabled value=""/>;
            e[2] = p;
            e[3] = u;
        } else {
            p = e[2];
            u = e[3];
        }
        let f;
        if (e[4] !== field.options) {
            f = field.options ?? [];
            e[4] = field.options;
            e[5] = f;
        } else {
            f = e[5];
        }
        let y;
        if (e[6] !== f) {
            y = f.map(XeComponent);
            e[6] = f;
            e[7] = y;
        } else {
            y = e[7];
        }
        let j;
        if (e[8] !== disabled || e[9] !== field.id || e[10] !== a || e[11] !== c || e[12] !== y || e[13] !== value) {
            j = <C_2><select aria-required={a} disabled={disabled} id={id} name={id_1} onChange={c} value={value} {...p}>{u}{y}</select></C_2>;
            e[8] = disabled;
            e[9] = field.id;
            e[10] = a;
            e[11] = c;
            e[12] = y;
            e[13] = value;
            e[14] = j;
        } else {
            j = e[14];
        }
        return j;
    }
    if (field.type === "textarea") {
        const a = field.required === true || undefined;
        const { id, id: id_1 } = field;
        let c;
        if (e[15] !== setValue) {
            c = (y)=>setValue(y.currentTarget.value);
            e[15] = setValue;
            e[16] = c;
        } else {
            c = e[16];
        }
        const placeholder = field.placeholder;
        let u;
        if (e[17] === Symbol.for("react.memo_cache_sentinel")) {
            u = p_1(c_2.control);
            e[17] = u;
        } else {
            u = e[17];
        }
        let f;
        if (e[18] !== disabled || e[19] !== field.id || e[20] !== field.placeholder || e[21] !== a || e[22] !== c || e[23] !== value) {
            f = <C_2><textarea aria-required={a} disabled={disabled} id={id} name={id_1} onChange={c} placeholder={placeholder} rows={3} value={value} {...u}/></C_2>;
            e[18] = disabled;
            e[19] = field.id;
            e[20] = field.placeholder;
            e[21] = a;
            e[22] = c;
            e[23] = value;
            e[24] = f;
        } else {
            f = e[24];
        }
        return f;
    }
    let d;
    if (e[25] !== disabled || e[26] !== field || e[27] !== setValue || e[28] !== siblings || e[29] !== value) {
        d = <SeComponent disabled={disabled} field={field} setValue={setValue} siblings={siblings} value={value}/>;
        e[25] = disabled;
        e[26] = field;
        e[27] = setValue;
        e[28] = siblings;
        e[29] = value;
        e[30] = d;
    } else {
        d = e[30];
    }
    return d;
}
function XeComponent(s) {
    return <option key={s.value} value={s.value}>{s.label}</option>;
}
function Ve1Component(s) {
    Ve1Component.d = 508;
    const e = c_1.c(4);
    const { site } = s;
    const site_confirmedHost = site.confirmedHost;
    let i;
    let r;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        i = {
            className: "sand-78zum5 sand-1cy8zhl sand-17d4w8g sand-w7yly9 sand-169k319"
        };
        r = <I aria-hidden name="lock" size="xs" style={ne.noteIcon}/>;
        e[0] = i;
        e[1] = r;
    } else {
        i = e[0];
        r = e[1];
    }
    let o;
    if (e[2] !== site_confirmedHost) {
        o = <div {...i}>{r}<Ie level="label">{site_confirmedHost == null ? <T_1 id="JPJhlO"/> : <T_1 id="RoJiIB" values={{
            host: site_confirmedHost
        }}/>}</Ie></div>;
        e[2] = site_confirmedHost;
        e[3] = o;
    } else {
        o = e[3];
    }
    return o;
}
function EComponent(s) {
    EComponent.d = 506;
    const e = c_1.c(89);
    const { form: form_1, site, values, canAct, canSubmit, destinationAction, onValueChange, onSubmit, onClose } = s;
    let c;
    let p;
    let u;
    let f;
    let onOpenChange;
    let open;
    let variant;
    let width;
    let g;
    let x;
    let v;
    let k;
    let style;
    let action;
    let autoComplete;
    let method;
    let A;
    let ref;
    if (e[0] !== canAct || e[1] !== destinationAction || e[2] !== form_1.fields || e[3] !== form_1.title || e[4] !== onClose || e[5] !== onSubmit || e[6] !== onValueChange || e[7] !== site || e[8] !== values) {
        const ee = form_1.fields.filter(tt);
        const te = form_1.fields.filter(et);
        let O;
        if (e[27] !== onSubmit) {
            O = (V)=>{
                V.preventDefault();
                onSubmit();
            };
            e[27] = onSubmit;
            e[28] = O;
        } else {
            O = e[28];
        }
        const Y = O;
        let Q;
        if (e[29] !== onSubmit) {
            Q = (V)=>{
                if (V == null) {
                    return;
                }
                const fe = (me)=>{
                    me.preventDefault();
                    me.stopImmediatePropagation();
                    onSubmit();
                };
                V.addEventListener("submit", fe);
                return ()=>V.removeEventListener("submit", fe);
            };
            e[29] = onSubmit;
            e[30] = Q;
        } else {
            Q = e[30];
        }
        const se = Q;
        p = x_1.Root;
        if (e[31] !== onClose) {
            onOpenChange = (S)=>{
                if (!S) {
                    onClose();
                }
            };
            e[31] = onClose;
            e[32] = onOpenChange;
        } else {
            onOpenChange = e[32];
        }
        open = true;
        variant = "simple";
        width = 400;
        if (e[33] === Symbol.for("react.memo_cache_sentinel")) {
            g = <x_1.CloseButton/>;
            e[33] = g;
        } else {
            g = e[33];
        }
        let B;
        if (e[34] === Symbol.for("react.memo_cache_sentinel")) {
            B = {
                className: "sand-78zum5 sand-6s0dn4 sand-883omv sand-h8yej3 sand-euugli"
            };
            e[34] = B;
        } else {
            B = e[34];
        }
        let L;
        if (e[35] !== site) {
            L = <De1Component site={site}/>;
            e[35] = site;
            e[36] = L;
        } else {
            L = e[36];
        }
        let U;
        if (e[37] === Symbol.for("react.memo_cache_sentinel")) {
            U = {
                className: "sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-xhr3t sand-euugli"
            };
            e[37] = U;
        } else {
            U = e[37];
        }
        let M;
        if (e[38] !== form_1.title) {
            M = <x_1.Title style={ne.headerTitle} weight="medium">{form_1.title}</x_1.Title>;
            e[38] = form_1.title;
            e[39] = M;
        } else {
            M = e[39];
        }
        let G;
        if (e[40] === Symbol.for("react.memo_cache_sentinel")) {
            G = <x_1.Description style={ne.headerSubtitle}><T_1 id="q//tqW"/></x_1.Description>;
            e[40] = G;
        } else {
            G = e[40];
        }
        let h;
        if (e[41] !== M) {
            h = <div {...U}>{M}{G}</div>;
            e[41] = M;
            e[42] = h;
        } else {
            h = e[42];
        }
        if (e[43] !== L || e[44] !== h) {
            x = <x_1.Header style={ne.header}><div {...B}>{L}{h}</div></x_1.Header>;
            e[43] = L;
            e[44] = h;
            e[45] = x;
        } else {
            x = e[45];
        }
        action = destinationAction;
        autoComplete = "on";
        method = destinationAction == null ? undefined : "post";
        A = Y;
        ref = se;
        if (e[46] === Symbol.for("react.memo_cache_sentinel")) {
            f = {
                className: "sand-jp7ctv"
            };
            e[46] = f;
        } else {
            f = e[46];
        }
        c = x_1.Body;
        style = ne.body;
        if (e[47] === Symbol.for("react.memo_cache_sentinel")) {
            u = {
                className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
            };
            e[47] = u;
        } else {
            u = e[47];
        }
        let _;
        if (e[48] !== canAct || e[49] !== form_1.fields || e[50] !== onValueChange || e[51] !== values) {
            _ = (field)=><Be key={field.id} isRequired={field.required === true} label={field.label}><Ge1Component disabled={!canAct} field={field} setValue={(V)=>onValueChange(field.id, V)} siblings={form_1.fields} value={values[field.id] ?? ""}/></Be>;
            e[48] = canAct;
            e[49] = form_1.fields;
            e[50] = onValueChange;
            e[51] = values;
            e[52] = _;
        } else {
            _ = e[52];
        }
        v = ee.map(_);
        let q;
        if (e[53] !== canAct || e[54] !== onValueChange || e[55] !== values) {
            q = (S)=><C key={S.id} id={S.id} isChecked={values[S.id] === "true"} isDisabled={!canAct} isRequired={S.required === true} label={S.label} name={S.id} onChange={(V)=>onValueChange(S.id, V ? "true" : "false")}/>;
            e[53] = canAct;
            e[54] = onValueChange;
            e[55] = values;
            e[56] = q;
        } else {
            q = e[56];
        }
        k = te.map(q);
        e[0] = canAct;
        e[1] = destinationAction;
        e[2] = form_1.fields;
        e[3] = form_1.title;
        e[4] = onClose;
        e[5] = onSubmit;
        e[6] = onValueChange;
        e[7] = site;
        e[8] = values;
        e[9] = c;
        e[10] = p;
        e[11] = u;
        e[12] = f;
        e[13] = onOpenChange;
        e[14] = open;
        e[15] = variant;
        e[16] = width;
        e[17] = g;
        e[18] = x;
        e[19] = v;
        e[20] = k;
        e[21] = style;
        e[22] = action;
        e[23] = autoComplete;
        e[24] = method;
        e[25] = A;
        e[26] = ref;
    } else {
        c = e[9];
        p = e[10];
        u = e[11];
        f = e[12];
        onOpenChange = e[13];
        open = e[14];
        variant = e[15];
        width = e[16];
        g = e[17];
        x = e[18];
        v = e[19];
        k = e[20];
        style = e[21];
        action = e[22];
        autoComplete = e[23];
        method = e[24];
        A = e[25];
        ref = e[26];
    }
    let T;
    if (e[57] !== u || e[58] !== v || e[59] !== k) {
        T = <div {...u}>{v}{k}</div>;
        e[57] = u;
        e[58] = v;
        e[59] = k;
        e[60] = T;
    } else {
        T = e[60];
    }
    let H;
    if (e[61] !== site) {
        H = <Ve1Component site={site}/>;
        e[61] = site;
        e[62] = H;
    } else {
        H = e[62];
    }
    let D;
    if (e[63] !== c || e[64] !== T || e[65] !== H || e[66] !== style) {
        D = j.jsxs(c, {
            style,
            children: [
                T,
                H
            ]
        });
        e[63] = c;
        e[64] = T;
        e[65] = H;
        e[66] = style;
        e[67] = D;
    } else {
        D = e[67];
    }
    const X = !canSubmit;
    let P;
    if (e[68] === Symbol.for("react.memo_cache_sentinel")) {
        P = <T_1 id="xGVfLh"/>;
        e[68] = P;
    } else {
        P = e[68];
    }
    let J;
    if (e[69] !== X) {
        J = <x_1.ActionBar><x_1.Action disabled={X} type="submit" variant="primary">{P}</x_1.Action></x_1.ActionBar>;
        e[69] = X;
        e[70] = J;
    } else {
        J = e[70];
    }
    let z;
    if (e[71] !== f || e[72] !== D || e[73] !== J || e[74] !== action || e[75] !== autoComplete || e[76] !== method || e[77] !== A || e[78] !== ref) {
        z = <form action={action} autoComplete={autoComplete} method={method} onSubmit={A} ref={ref} {...f}>{D}{J}</form>;
        e[71] = f;
        e[72] = D;
        e[73] = J;
        e[74] = action;
        e[75] = autoComplete;
        e[76] = method;
        e[77] = A;
        e[78] = ref;
        e[79] = z;
    } else {
        z = e[79];
    }
    let N;
    if (e[80] !== p || e[81] !== onOpenChange || e[82] !== open || e[83] !== variant || e[84] !== width || e[85] !== g || e[86] !== x || e[87] !== z) {
        N = j.jsxs(p, {
            onOpenChange,
            open,
            variant,
            width,
            children: [
                g,
                x,
                z
            ]
        });
        e[80] = p;
        e[81] = onOpenChange;
        e[82] = open;
        e[83] = variant;
        e[84] = width;
        e[85] = g;
        e[86] = x;
        e[87] = z;
        e[88] = N;
    } else {
        N = e[88];
    }
    return N;
}
function et(s) {
    return s.type === "checkbox";
}
function tt(s) {
    return s.type !== "checkbox";
}
function st(s) {
    return s instanceof dd && s.failure.code === eF;
}
const nt = {
    pendingCard: {
        ks0D6T: "sand-1lr1uin",
        $$css: true
    }
};
const delayMs = 1000;
const initialDelayMs = 5000;
const maxDelayMs = 15000;
function RtComponent(status) {
    switch(status){
        case "sending":
            return <T_1 id="Sad2tK"/>;
        case "submitted":
            return <T_1 id="NofPgK"/>;
        case "fill_failed":
            return <T_1 id="9zgJYR"/>;
        case "escalated":
            return <T_1 id="+bKPpM"/>;
        default:
            return <T_1 id="+wVfkG"/>;
    }
}
function OtComponent(status) {
    switch(status){
        case "sending":
            return <T_1 id="9bG48P"/>;
        case "submitted":
            return <T_1 id="ZU3JQG"/>;
        case "fill_failed":
            return <T_1 id="z0Dv36"/>;
        case "escalated":
            return <T_1 id="dRUzl8"/>;
        default:
            return <T_1 id="J6hrEy"/>;
    }
}
function ct(status) {
    switch(status){
        case "submitted":
            return "success";
        case "fill_failed":
            return "danger";
        default:
            return "muted";
    }
}
function DtComponent(status, e) {
    if (e) {
        return <Oe borderWidth={1.5} inheritColor size={12}/>;
    }
    if (status === "submitted") {
        return <I aria-hidden name="check" size="sm"/>;
    }
    return null;
}
function Oe1Component(s) {
    Oe1Component.d = 572;
    const e = c_1.c(22);
    const { form, status, titleId, isBusy } = s;
    const d = status === "sending" || (isBusy === undefined ? false : isBusy);
    let a;
    if (e[0] !== status) {
        a = RtComponent(status);
        e[0] = status;
        e[1] = a;
    } else {
        a = e[1];
    }
    const form_title = form.title;
    let kind;
    if (e[2] !== status) {
        kind = ct(status);
        e[2] = status;
        e[3] = kind;
    } else {
        kind = e[3];
    }
    let leading;
    if (e[4] !== d || e[5] !== status) {
        leading = DtComponent(status, d);
        e[4] = d;
        e[5] = status;
        e[6] = leading;
    } else {
        leading = e[6];
    }
    let p;
    if (e[7] !== status) {
        p = OtComponent(status);
        e[7] = status;
        e[8] = p;
    } else {
        p = e[8];
    }
    let trailing;
    if (e[9] !== kind || e[10] !== leading || e[11] !== p) {
        trailing = <Ne kind={kind} leading={leading}>{p}</Ne>;
        e[9] = kind;
        e[10] = leading;
        e[11] = p;
        e[12] = trailing;
    } else {
        trailing = e[12];
    }
    let f;
    if (e[13] !== form.title || e[14] !== a || e[15] !== trailing || e[16] !== titleId) {
        f = <Xe1 subtitle={a} title={form_title} titleId={titleId} trailing={trailing}/>;
        e[13] = form.title;
        e[14] = a;
        e[15] = trailing;
        e[16] = titleId;
        e[17] = f;
    } else {
        f = e[17];
    }
    let y;
    if (e[18] !== d || e[19] !== f || e[20] !== titleId) {
        y = <Je1 aria-busy={d} aria-labelledby={titleId} role="region">{f}</Je1>;
        e[18] = d;
        e[19] = f;
        e[20] = titleId;
        e[21] = y;
    } else {
        y = e[21];
    }
    return y;
}
function Ke1Component(s) {
    Ke1Component.d = 573;
    const e = c_1.c(17);
    let t;
    let n;
    if (e[0] !== s) {
        ({ destination: t, ...n } = s);
        e[0] = s;
        e[1] = t;
        e[2] = n;
    } else {
        t = e[1];
        n = e[2];
    }
    const i = b7();
    let r;
    if (e[3] !== i.linkMetadata || e[4] !== t) {
        r = ()=>{
            i.linkMetadata.loadText(t);
            return ut;
        };
        e[3] = i.linkMetadata;
        e[4] = t;
        e[5] = r;
    } else {
        r = e[5];
    }
    i_1(r);
    const { data } = eE(t);
    let d;
    if (e[6] !== t) {
        d = new URL(t);
        e[6] = t;
        e[7] = d;
    } else {
        d = e[7];
    }
    const d_hostname = d.hostname;
    const confirmedHost = n.form.liveHost == null ? null : d_hostname;
    const faviconSrc = data?.faviconDataUrl ?? null;
    let c;
    if (e[8] !== t || e[9] !== d_hostname || e[10] !== confirmedHost || e[11] !== faviconSrc) {
        c = {
            url: t,
            host: d_hostname,
            confirmedHost,
            faviconSrc
        };
        e[8] = t;
        e[9] = d_hostname;
        e[10] = confirmedHost;
        e[11] = faviconSrc;
        e[12] = c;
    } else {
        c = e[12];
    }
    const site_1 = c;
    let u;
    if (e[13] !== t || e[14] !== n || e[15] !== site_1) {
        u = <Ue1Component {...n} destinationAction={t} site={site_1}/>;
        e[13] = t;
        e[14] = n;
        e[15] = site_1;
        e[16] = u;
    } else {
        u = e[16];
    }
    return u;
}
function ut() {}
function CeComponent(s) {
    CeComponent.d = 574;
    const e = c_1.c(5);
    let t;
    if (e[0] !== s.form) {
        t = Ge(s.form);
        e[0] = s.form;
        e[1] = t;
    } else {
        t = e[1];
    }
    const destination = t;
    let i;
    if (e[2] !== destination || e[3] !== s) {
        i = destination == null ? <Ue1Component {...s} destinationAction={undefined} site={site}/> : <Ke1Component {...s} destination={destination}/>;
        e[2] = destination;
        e[3] = s;
        e[4] = i;
    } else {
        i = e[4];
    }
    return i;
}
function Ue1Component(s) {
    Ue1Component.d = 575;
    const e = c_1.c(64);
    const { entryId, form, resolution, submissionEffect, agentId, clock, site, destinationAction } = s;
    const clock_1 = clock === undefined ? r_2 : clock;
    const { submitUserForm } = bt();
    const { _: __1 } = u_1();
    let u;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        u = {};
        e[0] = u;
    } else {
        u = e[0];
    }
    const [f, setF] = r.useState(u);
    const [j, setJ] = r.useState(null);
    const [R, setR] = r.useState(false);
    const titleId = r.useId();
    const v = resolution != null && submissionEffect?.kind === "settled" && submissionEffect.wakeDelivery === "pending" && agentId != null;
    let k;
    if (e[1] !== agentId || e[2] !== clock_1 || e[3] !== entryId || e[4] !== v || e[5] !== submitUserForm) {
        k = ()=>{
            if (!v || agentId == null) {
                return ft;
            }
            const h = new AbortController;
            const _ = v_1({
                name: "user-form-wake-reconciliation",
                mode: "until-signal",
                initialDelayMs,
                maxDelayMs,
                backoffFactor: 3,
                clock: clock_1
            });
            const q = _.schedule(1, h.signal, {
                kind: "replace",
                delayMs
            });
            q.elapsed.then(()=>_.runWithRetry(()=>submitUserForm({
                        entryId,
                        values: {},
                        agentId
                    }), h.signal)).catch((S)=>{
                if (!h.signal.aborted) {
                    d0(S, {
                        tags: {
                            sand_area: "user-form-wake-reconciliation"
                        }
                    });
                }
            });
            return ()=>{
                h.abort();
                q.dispose();
            };
        };
        e[1] = agentId;
        e[2] = clock_1;
        e[3] = entryId;
        e[4] = v;
        e[5] = submitUserForm;
        e[6] = k;
    } else {
        k = e[6];
    }
    i_1(k);
    let F;
    if (e[7] !== f) {
        F = (h)=>f[h.id] ?? "";
        e[7] = f;
        e[8] = F;
    } else {
        F = e[8];
    }
    const w = F;
    if (resolution != null) {
        let h;
        if (e[9] !== form || e[10] !== resolution || e[11] !== titleId) {
            h = <Oe1Component form={form} status={resolution} titleId={titleId}/>;
            e[9] = form;
            e[10] = resolution;
            e[11] = titleId;
            e[12] = h;
        } else {
            h = e[12];
        }
        return h;
    }
    if (j != null) {
        let h;
        if (e[13] !== form || e[14] !== j.inFlight || e[15] !== j.status || e[16] !== titleId) {
            h = <Oe1Component form={form} isBusy={j.inFlight} status={j.status} titleId={titleId}/>;
            e[13] = form;
            e[14] = j.inFlight;
            e[15] = j.status;
            e[16] = titleId;
            e[17] = h;
        } else {
            h = e[17];
        }
        return h;
    }
    let I;
    if (e[18] !== form.fields || e[19] !== w) {
        let h;
        if (e[21] !== w) {
            h = (_)=>_.required === true && w(_).trim().length === 0;
            e[21] = w;
            e[22] = h;
        } else {
            h = e[22];
        }
        I = form.fields.some(h);
        e[18] = form.fields;
        e[19] = w;
        e[20] = I;
    } else {
        I = e[20];
    }
    const K = I;
    const canAct = agentId != null;
    const canSubmit = canAct && !K;
    let T;
    if (e[23] === Symbol.for("react.memo_cache_sentinel")) {
        T = (status, q)=>{
            setR(false);
            setJ({
                status,
                inFlight: true
            });
            q().then(()=>{
                setF({});
                setJ({
                    status,
                    inFlight: false
                });
            }, (S)=>{
                if (!st(S)) {
                    d0(S, {
                        tags: {
                            sand_area: "user-form"
                        }
                    });
                }
                setJ(null);
                setR(true);
            });
        };
        e[23] = T;
    } else {
        T = e[23];
    }
    const H = T;
    let D;
    if (e[24] !== agentId || e[25] !== canSubmit || e[26] !== entryId || e[27] !== form.fields || e[28] !== submitUserForm || e[29] !== w) {
        D = ()=>{
            if (!canSubmit || agentId == null) {
                return;
            }
            const values = Object.fromEntries(form.fields.flatMap((q)=>{
                const S = w(q);
                if (S.length > 0) {
                    return [
                        [
                            q.id,
                            S
                        ]
                    ];
                }
                return [];
            }));
            H("sending", ()=>submitUserForm({
                    entryId,
                    values,
                    agentId
                }));
        };
        e[24] = agentId;
        e[25] = canSubmit;
        e[26] = entryId;
        e[27] = form.fields;
        e[28] = submitUserForm;
        e[29] = w;
        e[30] = D;
    } else {
        D = e[30];
    }
    const X = D;
    let P;
    if (e[31] === Symbol.for("react.memo_cache_sentinel")) {
        P = ()=>{
            setF({});
            setR(false);
        };
        e[31] = P;
    } else {
        P = e[31];
    }
    const onClose = P;
    let z;
    if (e[32] === Symbol.for("react.memo_cache_sentinel")) {
        z = {
            className: "sand-78zum5 sand-6s0dn4 sand-883omv sand-euugli"
        };
        e[32] = z;
    } else {
        z = e[32];
    }
    let N;
    if (e[33] !== site) {
        N = <De1Component site={site}/>;
        e[33] = site;
        e[34] = N;
    } else {
        N = e[34];
    }
    let ee;
    if (e[35] === Symbol.for("react.memo_cache_sentinel")) {
        ee = {
            className: "sand-1iyjqo2 sand-euugli"
        };
        e[35] = ee;
    } else {
        ee = e[35];
    }
    let te;
    if (e[36] === Symbol.for("react.memo_cache_sentinel")) {
        te = <T_1 id="q//tqW"/>;
        e[36] = te;
    } else {
        te = e[36];
    }
    let O;
    if (e[37] !== form.title || e[38] !== titleId) {
        O = <div {...ee}><Xe1 subtitle={te} title={form.title} titleId={titleId}/></div>;
        e[37] = form.title;
        e[38] = titleId;
        e[39] = O;
    } else {
        O = e[39];
    }
    let Y;
    if (e[40] !== __1) {
        Y = __1({
            id: "VQtizB"
        });
        e[40] = __1;
        e[41] = Y;
    } else {
        Y = e[41];
    }
    const Q = !canAct;
    let onClick;
    if (e[42] === Symbol.for("react.memo_cache_sentinel")) {
        onClick = ()=>setR(true);
        e[42] = onClick;
    } else {
        onClick = e[42];
    }
    let B;
    if (e[43] === Symbol.for("react.memo_cache_sentinel")) {
        B = <T_1 id="1TNIig"/>;
        e[43] = B;
    } else {
        B = e[43];
    }
    let L;
    if (e[44] !== Y || e[45] !== Q) {
        L = <Re aria-label={Y} disabled={Q} onClick={onClick} variant="primary">{B}</Re>;
        e[44] = Y;
        e[45] = Q;
        e[46] = L;
    } else {
        L = e[46];
    }
    let U;
    if (e[47] !== N || e[48] !== O || e[49] !== L) {
        U = <div {...z}>{N}{O}{L}</div>;
        e[47] = N;
        e[48] = O;
        e[49] = L;
        e[50] = U;
    } else {
        U = e[50];
    }
    let M;
    if (e[51] !== canAct || e[52] !== canSubmit || e[53] !== destinationAction || e[54] !== form || e[55] !== R || e[56] !== site || e[57] !== X || e[58] !== f) {
        M = R ? <EComponent canAct={canAct} canSubmit={canSubmit} destinationAction={destinationAction} form={form} onClose={onClose} onSubmit={X} onValueChange={(h, _)=>setF((q)=>({
                    ...q,
                    [h]: _
                }))} site={site} values={f}/> : null;
        e[51] = canAct;
        e[52] = canSubmit;
        e[53] = destinationAction;
        e[54] = form;
        e[55] = R;
        e[56] = site;
        e[57] = X;
        e[58] = f;
        e[59] = M;
    } else {
        M = e[59];
    }
    let G;
    if (e[60] !== U || e[61] !== M || e[62] !== titleId) {
        G = <Je1 aria-labelledby={titleId} role="region" style={nt.pendingCard}>{U}{M}</Je1>;
        e[60] = U;
        e[61] = M;
        e[62] = titleId;
        e[63] = G;
    } else {
        G = e[63];
    }
    return G;
}
function ft() {}
function MtComponent(s) {
    MtComponent.d = 358;
    const e = c_1.c(13);
    const { entry, adjacency } = s;
    const agentId = an() ?? undefined;
    let o;
    if (e[0] !== entry.formResolution || e[1] !== entry.formSubmissionEffect || e[2] !== entry.id || e[3] !== entry.message.formRequest || e[4] !== agentId) {
        o = <CeComponent agentId={agentId} entryId={entry.id} form={entry.message.formRequest} resolution={entry.formResolution} submissionEffect={entry.formSubmissionEffect}/>;
        e[0] = entry.formResolution;
        e[1] = entry.formSubmissionEffect;
        e[2] = entry.id;
        e[3] = entry.message.formRequest;
        e[4] = agentId;
        e[5] = o;
    } else {
        o = e[5];
    }
    let d;
    if (e[6] !== adjacency.isGroupStart || e[7] !== entry.timestampMs || e[8] !== o) {
        d = <Fe isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="question">{o}</Fe>;
        e[6] = adjacency.isGroupStart;
        e[7] = entry.timestampMs;
        e[8] = o;
        e[9] = d;
    } else {
        d = e[9];
    }
    let a;
    if (e[10] !== entry || e[11] !== d) {
        a = <$e entry={entry}>{d}</$e>;
        e[10] = entry;
        e[11] = d;
        e[12] = a;
    } else {
        a = e[12];
    }
    return a;
}
export { MtComponent as default };
