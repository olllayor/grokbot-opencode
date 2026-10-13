import { c as c_1, p as p_1, u, T } from "./index.eager-vendor-Qbf9YA6n.js";
import { a$, a_ } from "./index.eager-app-Cj5f8Gby.js";
import { I } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "78b83172-996c-41c4-8e45-9f48abff67f1";
            e._sentryDebugIdIdentifier = "sentry-dbid-78b83172-996c-41c4-8e45-9f48abff67f1";
        }
    } catch (e) {}
})();
export const c = [
    "integrations",
    "secrets",
    "skills",
    "files"
];
export const O = {
    integrations: "plug",
    secrets: "key",
    skills: "cube",
    files: "file"
};
const S = {
    title: {
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    subtitle: {
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        kMwMTN: "sand-169k319",
        $$css: true
    }
};
function NComponent(d) {
    NComponent.d = 1048;
    const s = c_1.c(6);
    const { labelledBy, children } = d;
    let e;
    if (s[0] !== labelledBy) {
        e = labelledBy == null ? {} : {
            "aria-labelledby": labelledBy
        };
        s[0] = labelledBy;
        s[1] = e;
    } else {
        e = s[1];
    }
    let n;
    if (s[2] === Symbol.for("react.memo_cache_sentinel")) {
        n = {
            className: "sand-rvj5dj sand-nby9oq sand-167g77z sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl sand-e8uvvx"
        };
        s[2] = n;
    } else {
        n = s[2];
    }
    let i;
    if (s[3] !== children || s[4] !== e) {
        i = <ul {...e} {...n}>{children}</ul>;
        s[3] = children;
        s[4] = e;
        s[5] = i;
    } else {
        i = s[5];
    }
    return i;
}
function EComponent(d) {
    EComponent.d = 1046;
    const s = c_1.c(20);
    const { icon, title, subtitle, paneKey, onOpen } = d;
    let u;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        u = {
            className: "sand-78zum5 sand-euugli"
        };
        s[0] = u;
    } else {
        u = s[0];
    }
    let f;
    if (s[1] === Symbol.for("react.memo_cache_sentinel")) {
        f = {
            className: "sand-jyslct sand-1lugfcp sand-9f619 sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-883omv sand-h8yej3 sand-euugli sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-z9dl7a sand-pdmqnj sand-sag5q8 sand-1g0dm76 sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-hojbe8 sand-10e981r sand-kxk3po sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk sand-1k57tk5 sand-784prv sand-1t137rt sand-9v5kkp sand-4sht9k sand-2ssjo2"
        };
        s[1] = f;
    } else {
        f = s[1];
    }
    let y;
    if (s[2] === Symbol.for("react.memo_cache_sentinel")) {
        y = {
            className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-gd8bvy sand-1fgtraw sand-149ho13 sand-1b8i4yy sand-1o0liin"
        };
        s[2] = y;
    } else {
        y = s[2];
    }
    let r;
    if (s[3] !== icon) {
        r = <span aria-hidden {...y}><I name={icon} size="sm"/></span>;
        s[3] = icon;
        s[4] = r;
    } else {
        r = s[4];
    }
    let h;
    let b;
    if (s[5] === Symbol.for("react.memo_cache_sentinel")) {
        h = {
            className: "sand-78zum5 sand-dt5ytf sand-h8yej3 sand-euugli"
        };
        b = p_1(a_.body2, a$.regular, S.title);
        s[5] = h;
        s[6] = b;
    } else {
        h = s[5];
        b = s[6];
    }
    let c;
    if (s[7] !== title) {
        c = <span {...b}><bdi>{title}</bdi></span>;
        s[7] = title;
        s[8] = c;
    } else {
        c = s[8];
    }
    let p;
    if (s[9] === Symbol.for("react.memo_cache_sentinel")) {
        p = p_1(a_.label, a$.regular, S.subtitle);
        s[9] = p;
    } else {
        p = s[9];
    }
    let o;
    if (s[10] !== subtitle) {
        o = <span {...p}><bdi>{subtitle}</bdi></span>;
        s[10] = subtitle;
        s[11] = o;
    } else {
        o = s[11];
    }
    let m;
    if (s[12] !== c || s[13] !== o) {
        m = <span {...h}>{c}{o}</span>;
        s[12] = c;
        s[13] = o;
        s[14] = m;
    } else {
        m = s[14];
    }
    let k;
    if (s[15] !== onOpen || s[16] !== paneKey || s[17] !== m || s[18] !== r) {
        k = <li {...u}><button data-details-pane={paneKey} data-setup-card onClick={onOpen} type="button" {...f}>{r}{m}</button></li>;
        s[15] = onOpen;
        s[16] = paneKey;
        s[17] = m;
        s[18] = r;
        s[19] = k;
    } else {
        k = s[19];
    }
    return k;
}
export function b(d) {
    b.d = 1047;
    const s = c_1.c(4);
    const { _ } = u();
    const t = d.count === 1 ? d.names[0] : undefined;
    if (d.count === 0) {
        let n;
        if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = <T id="EdQY6l"/>;
            s[0] = n;
        } else {
            n = s[0];
        }
        return n;
    }
    if (t != null && t.trim().length > 0) {
        return t;
    }
    let e;
    if (s[1] !== _ || s[2] !== d.count) {
        e = _({
            id: "kRr3s3",
            values: {
                0: d.count
            }
        });
        s[1] = _;
        s[2] = d.count;
        s[3] = e;
    } else {
        e = s[3];
    }
    return e;
}
export { EComponent as T, NComponent as a };
