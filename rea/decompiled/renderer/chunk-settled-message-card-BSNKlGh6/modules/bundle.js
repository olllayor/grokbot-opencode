import { c as c_1, r as r_1, p as p_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import "./index-ZYxf-aBb.js";
import { aY as G } from "./index.eager-platform-Dcfeegfw.js";
import { u as u_1, aK } from "./index.eager-app-Cj5f8Gby.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "be32f866-4675-406c-b091-05ddb457780a";
            e._sentryDebugIdIdentifier = "sentry-dbid-be32f866-4675-406c-b091-05ddb457780a";
        }
    } catch (e) {}
})();
const $ = {
    card: {
        kzqmXN: "sand-h8yej3",
        k7Eaqz: "sand-euugli",
        kaIpWk: "sand-gqmno8",
        kVQacm: "sand-b3r6kr",
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kOIVth: "sand-883omv",
        kmVPX3: "sand-c7ga6q",
        $$css: true
    },
    title: {
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        k7Eaqz: "sand-euugli",
        kHjlTd: "sand-j0a0fe",
        $$css: true
    },
    summary: {
        k7Eaqz: "sand-euugli",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        $$css: true
    }
};
export function b(x) {
    const s = x.split(`
`, 1)[0] ?? "";
    if (s.length > 80) {
        return `${s.slice(0, 79)}\u2026`;
    }
    return s;
}
function XComponent(x) {
    XComponent.d = 515;
    const s = c_1.c(34);
    const { leading, title, status, summary, note, tone, showStatusDot } = x;
    const S = showStatusDot === undefined ? false : showStatusDot;
    const id = r_1.useId();
    const ref = u_1(id);
    const n = tone === "success";
    let h;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        h = p_1(aK.transcriptWidget, $.card);
        s[0] = h;
    } else {
        h = s[0];
    }
    let k;
    let j;
    if (s[1] === Symbol.for("react.memo_cache_sentinel")) {
        k = {
            className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli"
        };
        j = {
            className: "sand-78zum5 sand-6s0dn4 sand-1jnr06f sand-1iyjqo2 sand-s83m0k sand-euugli"
        };
        s[1] = k;
        s[2] = j;
    } else {
        k = s[1];
        j = s[2];
    }
    let t;
    if (s[3] !== ref || s[4] !== title || s[5] !== id) {
        t = <G id={id} ref={ref} rootStyle={$.title} size="lg" weight="medium">{title}</G>;
        s[3] = ref;
        s[4] = title;
        s[5] = id;
        s[6] = t;
    } else {
        t = s[6];
    }
    let d;
    if (s[7] !== leading || s[8] !== t) {
        d = <span {...j}>{leading}{t}</span>;
        s[7] = leading;
        s[8] = t;
        s[9] = d;
    } else {
        d = s[9];
    }
    let l;
    if (s[10] !== n) {
        l = ({
            0: {
                className: "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-1nn3v0j sand-1bjonze sand-1120s5i sand-1pixwil sand-149ho13 sand-1ciwos8 sand-4b2ntj"
            },
            1: {
                className: "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-1nn3v0j sand-1bjonze sand-1120s5i sand-1pixwil sand-149ho13 sand-1buh4up sand-1w5rjie"
            }
        })[!!n << 0];
        s[10] = n;
        s[11] = l;
    } else {
        l = s[11];
    }
    let i;
    if (s[12] !== n || s[13] !== S) {
        i = S ? <span aria-hidden {...{
            0: {
                className: "sand-1v4s8kt sand-ols6we sand-149ho13 sand-2lah0s sand-xa9ouo"
            },
            1: {
                className: "sand-1v4s8kt sand-ols6we sand-149ho13 sand-2lah0s sand-1my5qk1"
            }
        }[!!n << 0]}/> : null;
        s[12] = n;
        s[13] = S;
        s[14] = i;
    } else {
        i = s[14];
    }
    const color = n ? "green" : "secondary";
    let r;
    if (s[15] !== status || s[16] !== color) {
        r = <G color={color} size="sm" weight="medium">{status}</G>;
        s[15] = status;
        s[16] = color;
        s[17] = r;
    } else {
        r = s[17];
    }
    let o;
    if (s[18] !== r || s[19] !== l || s[20] !== i) {
        o = <span {...l}>{i}{r}</span>;
        s[18] = r;
        s[19] = l;
        s[20] = i;
        s[21] = o;
    } else {
        o = s[21];
    }
    let c;
    if (s[22] !== o || s[23] !== d) {
        c = <div {...k}>{d}{o}</div>;
        s[22] = o;
        s[23] = d;
        s[24] = c;
    } else {
        c = s[24];
    }
    let m;
    if (s[25] !== summary) {
        m = <G rootStyle={$.summary} color="secondary" size="lg">{summary}</G>;
        s[25] = summary;
        s[26] = m;
    } else {
        m = s[26];
    }
    let u;
    if (s[27] !== note) {
        u = note == null ? null : <G color="secondary" size="md">{note}</G>;
        s[27] = note;
        s[28] = u;
    } else {
        u = s[28];
    }
    let p;
    if (s[29] !== c || s[30] !== m || s[31] !== u || s[32] !== id) {
        p = <section {...h} aria-labelledby={id} role="region">{c}{m}{u}</section>;
        s[29] = c;
        s[30] = m;
        s[31] = u;
        s[32] = id;
        s[33] = p;
    } else {
        p = s[33];
    }
    return p;
}
export { XComponent as S };
