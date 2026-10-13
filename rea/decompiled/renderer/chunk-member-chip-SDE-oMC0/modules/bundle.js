import { c as c_1, p } from "./index.eager-vendor-Qbf9YA6n.js";
import { a$, a_, r as r_1 } from "./index.eager-app-Cj5f8Gby.js";
import { W } from "./index-ZYxf-aBb.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "a7fb79ba-8d9e-44e2-8fdc-89427de76769";
            e._sentryDebugIdIdentifier = "sentry-dbid-a7fb79ba-8d9e-44e2-8fdc-89427de76769";
        }
    } catch (e) {}
})();
const O = {
    "sand--default-marker": "sand--default-marker",
    $$css: true
};
const c = {
    root: {
        k1xSpc: "sand-3nfvp2",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-1jnr06f",
        ks0D6T: "sand-1ncir08",
        kmuXW: "sand-2lah0s",
        kaIpWk: "sand-149ho13",
        kWkggS: "sand-1tiofj7",
        $$css: true
    },
    rootSm: {
        kZKoxP: "sand-xk0z11",
        kZCmMZ: "sand-135b78x",
        kwRFfy: "sand-14vy60q",
        $$css: true
    },
    rootMd: {
        kmVPX3: "sand-1ruevkc",
        $$css: true
    },
    label: {
        k7Eaqz: "sand-euugli",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    rootRemoveOnHover: {
        kVAEAm: "sand-1n2onr6",
        $$css: true
    },
    labelRemoveOnHover: {
        kX1K2I: "sand-18gcsbh sand-4gar82",
        $$css: true
    }
};
function VComponent(w) {
    VComponent.d = 1403;
    const s = c_1.c(32);
    const { avatar, label, removeLabel, onRemove, size, removeReveal, className, style, labelStyle, ref } = w;
    const l = size === undefined ? "md" : size;
    const a = removeReveal === undefined ? "always" : removeReveal;
    let e;
    let n;
    let className_1;
    if (s[0] !== className || s[1] !== labelStyle || s[2] !== a || s[3] !== l || s[4] !== style) {
        n = p(O, c.root, l === "sm" ? c.rootSm : c.rootMd, a === "hover" && c.rootRemoveOnHover, style);
        let u;
        if (s[8] !== labelStyle || s[9] !== a || s[10] !== l) {
            u = p(c.label, a_.label, l === "md" && a$.medium, a === "hover" && c.labelRemoveOnHover, labelStyle);
            s[8] = labelStyle;
            s[9] = a;
            s[10] = l;
            s[11] = u;
        } else {
            u = s[11];
        }
        e = u;
        className_1 = r_1("sand-member-chip", n.className, className);
        s[0] = className;
        s[1] = labelStyle;
        s[2] = a;
        s[3] = l;
        s[4] = style;
        s[5] = e;
        s[6] = n;
        s[7] = className_1;
    } else {
        e = s[5];
        n = s[6];
        className_1 = s[7];
    }
    const n_style = n.style;
    let t;
    if (s[12] !== avatar) {
        t = avatar != null ? <span aria-hidden className="sand-3nfvp2 sand-2lah0s">{avatar}</span> : null;
        s[12] = avatar;
        s[13] = t;
    } else {
        t = s[13];
    }
    let o;
    if (s[14] !== label || s[15] !== e.className || s[16] !== e.style) {
        o = <span className={e.className} style={e.style}>{label}</span>;
        s[14] = label;
        s[15] = e.className;
        s[16] = e.style;
        s[17] = o;
    } else {
        o = s[17];
    }
    let r;
    if (s[18] !== a) {
        r = ({
            0: {
                className: "sand-jyslct sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-1kky2od sand-lup9mm sand-2lah0s sand-1ghz6dp sand-1717udv sand-ng3xce sand-149ho13 sand-jbqb8w sand-4hlgfw sand-1o0liin sand-1ypdohk"
            },
            1: {
                className: "sand-jyslct sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-1kky2od sand-lup9mm sand-2lah0s sand-1ghz6dp sand-1717udv sand-ng3xce sand-149ho13 sand-jbqb8w sand-4hlgfw sand-1o0liin sand-1ypdohk sand-10l6tqk sand-wa60dl sand-ceh6e4 sand-1cb1t30 sand-g01cxk sand-1t642l6 sand-25t5g8 sand-19991ni sand-1firant sand-9lcvmn"
            }
        })[(a === "hover") << 0];
        s[18] = a;
        s[19] = r;
    } else {
        r = s[19];
    }
    let v;
    if (s[20] === Symbol.for("react.memo_cache_sentinel")) {
        v = <W name="close" size="xs"/>;
        s[20] = v;
    } else {
        v = s[20];
    }
    let m;
    if (s[21] !== onRemove || s[22] !== removeLabel || s[23] !== r.className) {
        m = <button aria-label={removeLabel} className={r.className} onClick={onRemove} type="button">{v}</button>;
        s[21] = onRemove;
        s[22] = removeLabel;
        s[23] = r.className;
        s[24] = m;
    } else {
        m = s[24];
    }
    let h;
    if (s[25] !== ref || s[26] !== n.style || s[27] !== className_1 || s[28] !== t || s[29] !== o || s[30] !== m) {
        h = <span className={className_1} ref={ref} style={n_style}>{t}{o}{m}</span>;
        s[25] = ref;
        s[26] = n.style;
        s[27] = className_1;
        s[28] = t;
        s[29] = o;
        s[30] = m;
        s[31] = h;
    } else {
        h = s[31];
    }
    return h;
}
export { VComponent as M };
