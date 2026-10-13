import { c as c_1, u as u_1, r, p, T as T_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { r as r_2, bj } from "./index.eager-app-Cj5f8Gby.js";
import { W } from "./index-ZYxf-aBb.js";
import { aY as Y } from "./index.eager-platform-Dcfeegfw.js";
import { g, a as a_1 } from "./chunk-mcp-connector-status-DhhAF8A6.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "abd92b58-c725-4cc6-a630-d5e235764c9f";
            e._sentryDebugIdIdentifier = "sentry-dbid-abd92b58-c725-4cc6-a630-d5e235764c9f";
        }
    } catch (e) {}
})();
const A = {
    status: {
        kB7OPa: "sand-9f619",
        kGuDYH: "sand-11wthnw",
        kLWn49: "sand-d4r4e8",
        kb6lSQ: "sand-12oo3zp",
        kMwMTN: "sand-4b2ntj",
        khDVqt: "sand-uxw1ft",
        $$css: true
    },
    statusConnected: {
        kMwMTN: "sand-98zg7y",
        $$css: true
    },
    statusWarn: {
        kMwMTN: "sand-1izesbo",
        $$css: true
    },
    statusError: {
        kMwMTN: "sand-pmgbkh",
        $$css: true
    }
};
function JComponent(l) {
    JComponent.d = 1162;
    const s = c_1.c(13);
    const { title, titleId, action, children } = l;
    let c;
    let o;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        c = r_2("sand-plugins__group", "sand-9f619 sand-78zum5 sand-dt5ytf sand-xhr3t");
        o = r_2("sand-9f619 sand-78zum5 sand-1pha0wt sand-1qughib sand-167g77z");
        s[0] = c;
        s[1] = o;
    } else {
        c = s[0];
        o = s[1];
    }
    let r;
    if (s[2] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            className: "sand-9f619 sand-1y1aw1k sand-f159sx sand-10b6aqq sand-1g0dm76 sand-4b2ntj"
        };
        s[2] = r;
    } else {
        r = s[2];
    }
    let u;
    if (s[3] !== title || s[4] !== titleId) {
        u = <Y as="h3" className={r.className} id={titleId} size="sm">{title}</Y>;
        s[3] = title;
        s[4] = titleId;
        s[5] = u;
    } else {
        u = s[5];
    }
    const f = action ?? null;
    let m;
    if (s[6] !== u || s[7] !== f) {
        m = <div className={o}>{u}{f}</div>;
        s[6] = u;
        s[7] = f;
        s[8] = m;
    } else {
        m = s[8];
    }
    let b;
    if (s[9] !== children || s[10] !== m || s[11] !== titleId) {
        b = <section aria-labelledby={titleId} className={c}>{m}{children}</section>;
        s[9] = children;
        s[10] = m;
        s[11] = titleId;
        s[12] = b;
    } else {
        b = s[12];
    }
    return b;
}
function UComponent(l) {
    UComponent.d = 1159;
    const s = c_1.c(4);
    const { label, onAction } = l;
    let d;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        d = r_2("sand-plugins__group-action", "sand-jyslct sand-1lugfcp sand-9f619 sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-amitd3 sand-1453kmi sand-1nn3v0j sand-ftzfs8 sand-1120s5i sand-19tkhrw sand-c342km sand-ng3xce sand-149ho13 sand-jbqb8w sand-aalx5g sand-19aaqeu sand-7gh5u8 sand-jb2p0i sand-1wm8ruf sand-1d3mw78 sand-1ypdohk sand-1t137rt sand-9v5kkp sand-1k57tk5 sand-784prv sand-1uczgqu sand-1iolv91");
        s[0] = d;
    } else {
        d = s[0];
    }
    let n;
    if (s[1] !== label || s[2] !== onAction) {
        n = <button className={d} onClick={onAction} type="button">{label}</button>;
        s[1] = label;
        s[2] = onAction;
        s[3] = n;
    } else {
        n = s[3];
    }
    return n;
}
export function P(l) {
    P.d = 1161;
    const s = c_1.c(6);
    const { labelledBy, isFullWidth, children } = l;
    const n = isFullWidth === undefined ? false : isFullWidth;
    let c;
    if (s[0] !== n) {
        c = r_2("sand-plugins__grid", {
            0: {
                className: "sand-9f619 sand-rvj5dj sand-nby9oq sand-1ap1fj8 sand-1dbijih sand-3ct3a4 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl"
            },
            1: {
                className: "sand-9f619 sand-rvj5dj sand-1ap1fj8 sand-1dbijih sand-3ct3a4 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl sand-1mkdm3x"
            }
        }[!!n << 0].className);
        s[0] = n;
        s[1] = c;
    } else {
        c = s[1];
    }
    let o;
    if (s[2] !== children || s[3] !== labelledBy || s[4] !== c) {
        o = <ul aria-labelledby={labelledBy} className={c}>{children}</ul>;
        s[2] = children;
        s[3] = labelledBy;
        s[4] = c;
        s[5] = o;
    } else {
        o = s[5];
    }
    return o;
}
function ZComponent(l) {
    ZComponent.d = 1160;
    const s = c_1.c(42);
    const { icon, name, wrapsName, byline, badge, subtitle, trailing, trailingOpensRow, onOpen } = l;
    const m = wrapsName === undefined ? false : wrapsName;
    const b = trailingOpensRow === undefined ? false : trailingOpensRow;
    const { _: __1 } = u_1();
    const h = r.useId();
    const z = r.useId();
    const j = onOpen != null && b;
    const P = j ? z : undefined;
    let g;
    if (s[0] !== onOpen || s[1] !== b) {
        g = r_2("sand-plugins-row__trailing", {
            0: {
                className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1c4vz4f sand-2lah0s sand-dl72j9"
            },
            1: {
                className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-1n2onr6 sand-1vjfegm"
            }
        }[(onOpen != null && !b) << 0].className);
        s[0] = onOpen;
        s[1] = b;
        s[2] = g;
    } else {
        g = s[2];
    }
    let S;
    if (s[3] !== P || s[4] !== g || s[5] !== trailing) {
        S = <span id={P} className={g}>{trailing}</span>;
        s[3] = P;
        s[4] = g;
        s[5] = trailing;
        s[6] = S;
    } else {
        S = s[6];
    }
    const q = S;
    let $;
    let M;
    if (s[7] === Symbol.for("react.memo_cache_sentinel")) {
        $ = r_2("sand-plugins-row__main", "sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-dt5ytf sand-12mrbbr sand-euugli");
        M = r_2("sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli");
        s[7] = $;
        s[8] = M;
    } else {
        $ = s[7];
        M = s[8];
    }
    let N;
    if (s[9] !== m) {
        N = r_2("sand-plugins-row__name", {
            0: {
                className: "sand-9f619 sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-1rhlpx6 sand-1wd3ewq sand-lyipyv sand-uxw1ft"
            },
            1: {
                className: "sand-9f619 sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-1rhlpx6 sand-1wd3ewq sand-lyipyv sand-j0a0fe sand-eaf4i8"
            }
        }[!!m << 0].className);
        s[9] = m;
        s[10] = N;
    } else {
        N = s[10];
    }
    let w;
    if (s[11] !== name || s[12] !== N || s[13] !== h) {
        w = <span className={N} id={h}>{name}</span>;
        s[11] = name;
        s[12] = N;
        s[13] = h;
        s[14] = w;
    } else {
        w = s[14];
    }
    let y;
    if (s[15] !== byline) {
        y = byline != null && byline.length > 0 ? <span className={r_2("sand-plugins-row__byline", "sand-9f619 sand-b3r6kr sand-1c4vz4f sand-s83m0k sand-dl72j9 sand-1wm8ruf sand-d4r4e8 sand-12oo3zp sand-4b2ntj sand-lyipyv sand-uxw1ft")}>{byline}</span> : null;
        s[15] = byline;
        s[16] = y;
    } else {
        y = s[16];
    }
    const E = badge ?? null;
    let x;
    if (s[17] !== y || s[18] !== E || s[19] !== w) {
        x = <span className={M}>{w}{y}{E}</span>;
        s[17] = y;
        s[18] = E;
        s[19] = w;
        s[20] = x;
    } else {
        x = s[20];
    }
    let _;
    if (s[21] !== subtitle) {
        _ = subtitle != null && subtitle.length > 0 ? <span className={r_2("sand-plugins-row__subtitle", "sand-9f619 sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-19aaqeu sand-lyipyv sand-uxw1ft")}>{subtitle}</span> : null;
        s[21] = subtitle;
        s[22] = _;
    } else {
        _ = s[22];
    }
    let k;
    if (s[23] !== x || s[24] !== _) {
        k = <span className={$}>{x}{_}</span>;
        s[23] = x;
        s[24] = _;
        s[25] = k;
    } else {
        k = s[25];
    }
    let T;
    if (s[26] !== icon || s[27] !== k) {
        T = <>{icon}{k}</>;
        s[26] = icon;
        s[27] = k;
        s[28] = T;
    } else {
        T = s[28];
    }
    const D = T;
    let C;
    if (s[29] === Symbol.for("react.memo_cache_sentinel")) {
        C = r_2("sand-plugins-row", "sand-9f619 sand-1n2onr6 sand-c8icb0 sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-euugli sand-z9dl7a sand-j7smf7 sand-sag5q8 sand-s2i5tn sand-gqmno8 sand-jbqb8w sand-1q5pob1");
        s[29] = C;
    } else {
        C = s[29];
    }
    let v;
    if (s[30] !== __1 || s[31] !== D || s[32] !== name || s[33] !== onOpen || s[34] !== z || s[35] !== j || s[36] !== q) {
        v = onOpen != null ? <button aria-describedby={j ? z : undefined} aria-label={__1({
            id: "T9mwDN",
            values: {
                name
            }
        })} className={r_2("sand-plugins-row__open", "sand-9f619 sand-78zum5 sand-6s0dn4 sand-883omv sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-euugli sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl sand-c342km sand-ng3xce sand-jbqb8w sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk sand-1t137rt sand-1kogg8i sand-1s928wv sand-1j6awrg sand-arstr8 sand-1w00h3t sand-1t8vtw7")} onClick={onOpen} type="button">{D}{j ? q : null}</button> : D;
        s[30] = __1;
        s[31] = D;
        s[32] = name;
        s[33] = onOpen;
        s[34] = z;
        s[35] = j;
        s[36] = q;
        s[37] = v;
    } else {
        v = s[37];
    }
    const L = j ? null : q;
    let B;
    if (s[38] !== v || s[39] !== L || s[40] !== h) {
        B = <li aria-labelledby={h} className={C}>{v}{L}</li>;
        s[38] = v;
        s[39] = L;
        s[40] = h;
        s[41] = B;
    } else {
        B = s[41];
    }
    return B;
}
function SsComponent(l) {
    SsComponent.d = 1158;
    const s = c_1.c(16);
    const { server } = l;
    const { _ } = u_1();
    const { i18n } = u_1();
    let title;
    let c;
    if (s[0] !== i18n || s[1] !== server.status || s[2] !== server.statusDetail) {
        const f = {
            connected: A.statusConnected,
            warn: A.statusWarn,
            danger: A.statusError,
            neutral: null
        }[g(server.status)];
        let m;
        if (s[5] !== i18n || s[6] !== server.statusDetail) {
            m = bj(server.statusDetail, i18n);
            s[5] = i18n;
            s[6] = server.statusDetail;
            s[7] = m;
        } else {
            m = s[7];
        }
        title = m;
        c = r_2("sand-plugins__status", p(A.status, f).className);
        s[0] = i18n;
        s[1] = server.status;
        s[2] = server.statusDetail;
        s[3] = title;
        s[4] = c;
    } else {
        title = s[3];
        c = s[4];
    }
    const server_status = server.status;
    let r;
    if (s[8] !== _ || s[9] !== server.status) {
        r = a_1(_, server.status);
        s[8] = _;
        s[9] = server.status;
        s[10] = r;
    } else {
        r = s[10];
    }
    let u;
    if (s[11] !== server.status || s[12] !== title || s[13] !== c || s[14] !== r) {
        u = <span className={c} data-status={server_status} role="status" title={title}>{r}</span>;
        s[11] = server.status;
        s[12] = title;
        s[13] = c;
        s[14] = r;
        s[15] = u;
    } else {
        u = s[15];
    }
    return u;
}
function WComponent(l) {
    WComponent.d = 1156;
    const s = c_1.c(4);
    const { children } = l;
    let e;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        e = r_2("sand-plugins__added", "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-1nejdyq sand-1nn3v0j sand-f159sx sand-1120s5i sand-25sj25 sand-149ho13 sand-4b2ntj sand-1wm8ruf sand-1d3mw78 sand-uxw1ft");
        s[0] = e;
    } else {
        e = s[0];
    }
    let d;
    if (s[1] === Symbol.for("react.memo_cache_sentinel")) {
        d = <W className="sand-9f619 sand-98zg7y" name="check" size={12}/>;
        s[1] = d;
    } else {
        d = s[1];
    }
    let n;
    if (s[2] !== children) {
        n = <span className={e}>{d}{children}</span>;
        s[2] = children;
        s[3] = n;
    } else {
        n = s[3];
    }
    return n;
}
function AsComponent() {
    AsComponent.d = 1155;
    const l = c_1.c(1);
    let s;
    if (l[0] === Symbol.for("react.memo_cache_sentinel")) {
        s = <WComponent><T_1 id="hp8OtS"/></WComponent>;
        l[0] = s;
    } else {
        s = l[0];
    }
    return s;
}
function NsComponent() {
    NsComponent.d = 1157;
    const l = c_1.c(1);
    let s;
    if (l[0] === Symbol.for("react.memo_cache_sentinel")) {
        s = <WComponent><T_1 id="QHcLEN"/></WComponent>;
        l[0] = s;
    } else {
        s = l[0];
    }
    return s;
}
function EsComponent(l) {
    EsComponent.d = 1164;
    const s = c_1.c(5);
    const { title } = l;
    let e;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        e = r_2("sand-plugins__team-badge", "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-1jnr06f sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-4p5aij sand-1icxu4v sand-1j85h84 sand-aso8d8 sand-149ho13 sand-jdhboh sand-4b2ntj sand-y5h43f sand-1d3mw78 sand-uxw1ft");
        s[0] = e;
    } else {
        e = s[0];
    }
    let d;
    let n;
    if (s[1] === Symbol.for("react.memo_cache_sentinel")) {
        d = <W name="people" size={12}/>;
        n = <T_1 id="KM6m8p"/>;
        s[1] = d;
        s[2] = n;
    } else {
        d = s[1];
        n = s[2];
    }
    let c;
    if (s[3] !== title) {
        c = <span className={e} title={title}>{d}{n}</span>;
        s[3] = title;
        s[4] = c;
    } else {
        c = s[4];
    }
    return c;
}
function DsComponent(l) {
    DsComponent.d = 1154;
    const s = c_1.c(4);
    const { label } = l;
    let e;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        e = r_2("sand-plugins__add-pending", "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-d7y6wv sand-2vl965 sand-e2zdcy");
        s[0] = e;
    } else {
        e = s[0];
    }
    let d;
    if (s[1] === Symbol.for("react.memo_cache_sentinel")) {
        d = <span aria-hidden className={r_2("sand-9f619 sand-6jxa94 sand-1v9usgg sand-16rqkct sand-dh2fpr sand-1y0btm7 sand-zewv6b sand-4usyfx sand-r5sbw0 sand-1aquc0h sand-5orbwg sand-1esw782 sand-a4qsjk")}/>;
        s[1] = d;
    } else {
        d = s[1];
    }
    let n;
    if (s[2] !== label) {
        n = <span aria-label={label} className={e} role="status">{d}</span>;
        s[2] = label;
        s[3] = n;
    } else {
        n = s[3];
    }
    return n;
}
function TsComponent(l) {
    TsComponent.d = 1163;
    const s = c_1.c(4);
    const { hiddenLabel, onShowAll } = l;
    let d;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        d = r_2("sand-plugins__show-all", "sand-9f619 sand-qcrz7y sand-1iorvi4 sand-f159sx sand-jkvuk6 sand-1g0dm76 sand-c342km sand-ng3xce sand-jbqb8w sand-19aaqeu sand-7gh5u8 sand-jb2p0i sand-1wm8ruf sand-1ypdohk");
        s[0] = d;
    } else {
        d = s[0];
    }
    let n;
    if (s[1] !== hiddenLabel || s[2] !== onShowAll) {
        n = <button className={d} onClick={onShowAll} type="button">{hiddenLabel}</button>;
        s[1] = hiddenLabel;
        s[2] = onShowAll;
        s[3] = n;
    } else {
        n = s[3];
    }
    return n;
}
export { AsComponent as A, SsComponent as C, UComponent as G, TsComponent as S, EsComponent as T, ZComponent as a, DsComponent as b, NsComponent as c, JComponent as d };
