import { c as c_1, u as u_1, r as r_1, p as p_1, R, _, T as T_1, i as i_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { jd, je as je_1, aL, r as r_2, b0 as We, jf as Fs, eT, jg, bA, hv, t, d0, jh, ji, eY, q, a7, a6, jj, jk, gz, aT, cm, jl, a8, ae } from "./index.eager-app-Cj5f8Gby.js";
import { i as i_2, a_ as Ze1, c as c_2, aY as Nt, x } from "./index.eager-platform-Dcfeegfw.js";
import { cs, ct as ct_1, p as Lt1, cu, cv as U, g as Le, cw as Me, cx, W, cy as Lt, cz as Dn1, cA as Un1, cB } from "./index-ZYxf-aBb.js";
import { c as c_3, r as r_3, w } from "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "4366f201-86dd-4069-a882-0c46e38bf071";
            e._sentryDebugIdIdentifier = "sentry-dbid-4366f201-86dd-4069-a882-0c46e38bf071";
        }
    } catch (e) {}
})();
const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = [
    "./chunk-index-BmwT6aHM.js",
    "./index.eager-vendor-Qbf9YA6n.js",
    "./chunk-code-body-CpFpPIsl.js",
    "./index.eager-platform-Dcfeegfw.js",
    "./index.eager-common-CdCvBQNJ.js",
    "./chunk-DefaultCode-CGxOfvcH.js",
    "./chunk-shiki-token-cache-hLYN1QGX.js",
    "./chunk-index-C0dBjfzC.js",
    "./chunk-file-markdown-46Rn501q.js",
    "./index.eager-app-Cj5f8Gby.js",
    "./index-ZYxf-aBb.js",
    "./index-B9V4agTc.css",
    "./chunk-markdown-math-D9a2zKdp.js"
]))=>i.map((i)=>d[i]);
const xn = {
    status: "failed"
};
function _t(s) {
    const e = new WeakMap;
    return (t)=>{
        const n = e.get(t);
        if (n !== undefined) {
            return n;
        }
        const a = s(t);
        e.set(t, a);
        return a;
    };
}
function Re(source, e) {
    const t = jd(source);
    const n = cs(source, "bytes", e && t == null);
    if (t != null) {
        return t.bytes ?? null;
    }
    if (e) {
        if (n.status === "failed") {
            return xn;
        }
        return n.bytes;
    }
    return null;
}
const dt = {
    stage: {
        kVAEAm: "sand-ixxii4",
        kpwlN0: "sand-10a8y8t",
        kY2c9j: "sand-fo81ep",
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kjj79g: "sand-l56j7k",
        k8WAf4: "sand-1oh1f12",
        kg3NbH: "sand-1bzy8qs",
        kB7OPa: "sand-9f619",
        kWkggS: "sand-1846v19",
        $$css: true
    },
    title: {
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    subtitle: {
        kMwMTN: "sand-169k319",
        $$css: true
    }
};
function PeComponent(s) {
    PeComponent.d = 443;
    const e = c_1.c(5);
    let t;
    let n;
    if (e[0] !== s) {
        ({ isOpen: t, ...n } = s);
        e[0] = s;
        e[1] = t;
        e[2] = n;
    } else {
        t = e[1];
        n = e[2];
    }
    if (!t) {
        return null;
    }
    let a;
    if (e[3] !== n) {
        a = <YtComponent {...n}/>;
        e[3] = n;
        e[4] = a;
    } else {
        a = e[4];
    }
    return a;
}
function YtComponent(s) {
    YtComponent.d = 444;
    const e = c_1.c(73);
    const { title, subtitle, toolbar, actions, children, isWide, onClose } = s;
    const d = isWide === undefined ? false : isWide;
    const { _ } = u_1();
    let u;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        u = {
            modal: true
        };
        e[0] = u;
    } else {
        u = e[0];
    }
    const f = ct_1(u);
    const b = je_1(f.isTop);
    const id = r_1.useId();
    let k;
    if (e[1] !== onClose) {
        k = ()=>onClose;
        e[1] = onClose;
        e[2] = k;
    } else {
        k = e[2];
    }
    const [x] = r_1.useState(k);
    let p;
    if (e[3] !== x || e[4] !== f || e[5] !== b) {
        p = (he)=>{
            if (he == null) {
                return;
            }
            b.contain(he);
            const J = (ke)=>{
                if (!(ke.key !== "Escape" || !f.isTop())) {
                    ke.preventDefault();
                    ke.stopPropagation();
                    x();
                }
            };
            document.addEventListener("keydown", J, true);
            const overflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return ()=>{
                document.removeEventListener("keydown", J, true);
                document.body.style.overflow = overflow;
            };
        };
        e[3] = x;
        e[4] = f;
        e[5] = b;
        e[6] = p;
    } else {
        p = e[6];
    }
    const g = p;
    let h;
    if (e[7] !== x) {
        h = (J)=>{
            if (J.target === J.currentTarget) {
                x();
            }
        };
        e[7] = x;
        e[8] = h;
    } else {
        h = e[8];
    }
    const w = h;
    let P;
    if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
        P = (J)=>{
            J.stopPropagation();
        };
        e[9] = P;
    } else {
        P = e[9];
    }
    const E = P;
    let N;
    let C;
    let S;
    let onContextMenu;
    let v;
    let role;
    let M;
    let O;
    let W;
    let T;
    let D;
    if (e[10] !== g || e[11] !== f.ariaModal || e[12] !== w || e[13] !== d || e[14] !== id) {
        const he = p_1(dt.stage, aL.noDrag);
        N = ({
            0: {
                className: "sand-1n2onr6 sand-78zum5 sand-dt5ytf sand-h8yej3 sand-5yr21d sand-1wmrhtn sand-mz0i5r sand-2lwn1j sand-hojbe8 sand-b3r6kr sand-vvtkfd sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-anlk42"
            },
            1: {
                className: "sand-1n2onr6 sand-78zum5 sand-dt5ytf sand-h8yej3 sand-5yr21d sand-mz0i5r sand-2lwn1j sand-hojbe8 sand-b3r6kr sand-vvtkfd sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-anlk42 sand-186ixgm"
            }
        })[!!d << 0];
        O = R.createPortal;
        T = id;
        D = f.ariaModal;
        C = r_2("sand-file-viewer", he.className);
        S = w;
        onContextMenu = E;
        v = g;
        role = "dialog";
        M = he.style;
        W = r_2("sand-file-viewer__panel", N.className);
        e[10] = g;
        e[11] = f.ariaModal;
        e[12] = w;
        e[13] = d;
        e[14] = id;
        e[15] = N;
        e[16] = C;
        e[17] = S;
        e[18] = onContextMenu;
        e[19] = v;
        e[20] = role;
        e[21] = M;
        e[22] = O;
        e[23] = W;
        e[24] = T;
        e[25] = D;
    } else {
        N = e[15];
        C = e[16];
        S = e[17];
        onContextMenu = e[18];
        v = e[19];
        role = e[20];
        M = e[21];
        O = e[22];
        W = e[23];
        T = e[24];
        D = e[25];
    }
    const N_style = N.style;
    let F;
    let G;
    if (e[26] === Symbol.for("react.memo_cache_sentinel")) {
        F = r_2("sand-file-viewer__header", "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-2lah0s sand-9f619 sand-1y1aw1k sand-wib8y2 sand-f7dkkf sand-pdmqnj sand-1hkp6id sand-1q0q8m5 sand-1kp61ed sand-s6r99b");
        G = {
            className: "sand-78zum5 sand-dt5ytf sand-12mrbbr sand-euugli sand-1iyjqo2 sand-s83m0k"
        };
        e[26] = F;
        e[27] = G;
    } else {
        F = e[26];
        G = e[27];
    }
    let oe;
    if (e[28] !== title || e[29] !== id) {
        oe = <We id={id} level="body2" style={dt.title} weight="medium">{title}</We>;
        e[28] = title;
        e[29] = id;
        e[30] = oe;
    } else {
        oe = e[30];
    }
    let le;
    if (e[31] !== subtitle) {
        le = subtitle != null ? <We level="caption" style={dt.subtitle} weight="regular">{subtitle}</We> : null;
        e[31] = subtitle;
        e[32] = le;
    } else {
        le = e[32];
    }
    let fe;
    if (e[33] !== oe || e[34] !== le) {
        fe = <div className={G.className}>{oe}{le}</div>;
        e[33] = oe;
        e[34] = le;
        e[35] = fe;
    } else {
        fe = e[35];
    }
    let re;
    if (e[36] !== toolbar) {
        re = toolbar != null ? <div className={r_2("sand-file-viewer__toolbar", "sand-78zum5 sand-6s0dn4 sand-167g77z sand-vc5jky sand-2lah0s")}>{toolbar}</div> : null;
        e[36] = toolbar;
        e[37] = re;
    } else {
        re = e[37];
    }
    let xe;
    if (e[38] === Symbol.for("react.memo_cache_sentinel")) {
        xe = r_2("sand-file-viewer__actions", "sand-78zum5 sand-6s0dn4 sand-167g77z sand-2lah0s");
        e[38] = xe;
    } else {
        xe = e[38];
    }
    let ce;
    if (e[39] !== _) {
        ce = _({
            id: "fJGhA7"
        });
        e[39] = _;
        e[40] = ce;
    } else {
        ce = e[40];
    }
    let me;
    if (e[41] !== x || e[42] !== ce) {
        me = <Lt1 aria-label={ce} icon="close" onClick={x} shape="square" size="sm" variant="ghost"/>;
        e[41] = x;
        e[42] = ce;
        e[43] = me;
    } else {
        me = e[43];
    }
    let Z;
    if (e[44] !== actions || e[45] !== me) {
        Z = <div className={xe}>{actions}{me}</div>;
        e[44] = actions;
        e[45] = me;
        e[46] = Z;
    } else {
        Z = e[46];
    }
    let ee;
    if (e[47] !== fe || e[48] !== re || e[49] !== Z) {
        ee = <div className={F}>{fe}{re}{Z}</div>;
        e[47] = fe;
        e[48] = re;
        e[49] = Z;
        e[50] = ee;
    } else {
        ee = e[50];
    }
    let be;
    if (e[51] === Symbol.for("react.memo_cache_sentinel")) {
        be = r_2("sand-file-viewer__body", "sand-1n2onr6 sand-1iyjqo2 sand-2lwn1j sand-78zum5 sand-dt5ytf sand-vvtkfd");
        e[51] = be;
    } else {
        be = e[51];
    }
    let B;
    if (e[52] !== children) {
        B = <div className={be}>{children}</div>;
        e[52] = children;
        e[53] = B;
    } else {
        B = e[53];
    }
    let de;
    if (e[54] !== N.style || e[55] !== ee || e[56] !== B || e[57] !== W) {
        de = <div className={W} style={N_style}>{ee}{B}</div>;
        e[54] = N.style;
        e[55] = ee;
        e[56] = B;
        e[57] = W;
        e[58] = de;
    } else {
        de = e[58];
    }
    let K;
    if (e[59] === Symbol.for("react.memo_cache_sentinel")) {
        K = <Fs/>;
        e[59] = K;
    } else {
        K = e[59];
    }
    let $;
    if (e[60] !== C || e[61] !== S || e[62] !== onContextMenu || e[63] !== v || e[64] !== role || e[65] !== M || e[66] !== de || e[67] !== T || e[68] !== D) {
        $ = <div aria-labelledby={T} aria-modal={D} className={C} onClick={S} onContextMenu={onContextMenu} ref={v} role={role} style={M}>{de}{K}</div>;
        e[60] = C;
        e[61] = S;
        e[62] = onContextMenu;
        e[63] = v;
        e[64] = role;
        e[65] = M;
        e[66] = de;
        e[67] = T;
        e[68] = D;
        e[69] = $;
    } else {
        $ = e[69];
    }
    let ge;
    if (e[70] !== O || e[71] !== $) {
        ge = O($, document.body);
        e[70] = O;
        e[71] = $;
        e[72] = ge;
    } else {
        ge = e[72];
    }
    return ge;
}
const gn = {
    p: true,
    br: true,
    hr: true,
    h1: true,
    h2: true,
    h3: true,
    h4: true,
    h5: true,
    h6: true,
    ul: true,
    ol: true,
    li: true,
    strong: true,
    b: true,
    em: true,
    i: true,
    u: true,
    s: true,
    sub: true,
    sup: true,
    blockquote: true,
    code: true,
    pre: true,
    span: true,
    a: true,
    img: true,
    table: true,
    thead: true,
    tbody: true,
    tr: true,
    td: true,
    th: true
};
function Jt(s) {
    return eT(gn, s);
}
function es(s) {
    try {
        const e = new URL(s, "https://sand.invalid");
        return e.protocol === "https:" || e.protocol === "http:" || e.protocol === "mailto:";
    } catch  {
        return false;
    }
}
function ts(s) {
    return /^data:image\//i.test(s) || /^https:\/\//i.test(s);
}
function ss(s) {
    for (const e of Array.from(s.children)){
        ss(e);
        const t = e.tagName.toLowerCase();
        if (!Jt(t)) {
            e.replaceWith(...Array.from(e.childNodes));
            continue;
        }
        for (const n of Array.from(e.attributes)){
            const a = n.name.toLowerCase();
            if (!(t === "a" && a === "href" && es(n.value) || t === "img" && a === "src" && ts(n.value) || t === "img" && a === "alt" || (t === "td" || t === "th") && (a === "colspan" || a === "rowspan"))) {
                e.removeAttribute(n.name);
            }
        }
    }
}
function wn(s) {
    const e = new DOMParser().parseFromString(s, "text/html");
    e.querySelectorAll("script, style, link, meta, iframe, object, embed").forEach((t)=>t.remove());
    ss(e.body);
    return e.body.innerHTML;
}
async function yn(s) {
    const e = await _(()=>import("./chunk-index-BmwT6aHM.js").then((a)=>a.i), __vite__mapDeps([
        0,
        1
    ]), import.meta.url);
    const buffer = s.slice().buffer;
    const n = await e.convertToHtml({
        arrayBuffer: buffer
    });
    return wn(n.value);
}
function Ae1Component(s) {
    Ae1Component.d = 793;
    const e = c_1.c(9);
    const { href, downloadName } = s;
    const { _ } = u_1();
    const l = jg();
    let r;
    if (e[0] !== l || e[1] !== downloadName || e[2] !== href) {
        r = ()=>{
            l?.([
                {
                    path: href,
                    suggestedName: downloadName
                }
            ]).catch(bn);
        };
        e[0] = l;
        e[1] = downloadName;
        e[2] = href;
        e[3] = r;
    } else {
        r = e[3];
    }
    const i = r;
    let c;
    if (e[4] !== _) {
        c = _({
            id: "WcWS//"
        });
        e[4] = _;
        e[5] = c;
    } else {
        c = e[5];
    }
    let d;
    if (e[6] !== i || e[7] !== c) {
        d = <Lt1 aria-label={c} icon="desktop-download" onClick={i} shape="square" size="sm" variant="ghost"/>;
        e[6] = i;
        e[7] = c;
        e[8] = d;
    } else {
        d = e[8];
    }
    return d;
}
function bn() {}
const He = {
    leaf: {
        keoZOQ: "sand-dj266r",
        k1K539: "sand-at24cr",
        $$css: true
    },
    list: {
        kZCmMZ: "sand-92arao",
        kLWn49: "sand-1ja60sm",
        kpqbRz: "sand-43c9pm",
        $$css: true
    },
    nestedList: {
        keoZOQ: "sand-1om1abp",
        kZCmMZ: "sand-8fiw5y",
        $$css: true
    },
    unorderedListDisc: {
        kH6xsr: "sand-taz4m5",
        $$css: true
    },
    unorderedListCircle: {
        kH6xsr: "sand-rylv2j",
        $$css: true
    },
    unorderedListSquare: {
        kH6xsr: "sand-152237o",
        $$css: true
    }
};
const ns = {
    status: "loading"
};
const jn = "docx";
const kn = {
    arm: ()=>()=>{},
    subscribe: ()=>()=>{},
    getSnapshot: ()=>ns
};
function vn(s) {
    const e = c_2(ns);
    let t = false;
    return {
        getSnapshot: e.get,
        subscribe: e.subscribe,
        arm: ()=>{
            if (t) {
                return ()=>{};
            }
            t = true;
            yn(s).then((html)=>{
                e.set({
                    status: "ready",
                    html
                });
            }).catch((n)=>{
                d0(n, {
                    level: "warning",
                    tags: {
                        sand_area: "docx-viewer"
                    }
                });
                e.set({
                    status: "error"
                });
            });
            return ()=>{};
        }
    };
}
const Sn = _t(vn);
function Nn(s) {
    if (s == null) {
        return;
    }
    const e = Number(s);
    if (Number.isInteger(e) && e > 0) {
        return e;
    }
}
function _n(s) {
    if (s == null) {
        return;
    }
    const e = Number(s);
    if (Number.isInteger(e) && e >= 0) {
        return e;
    }
}
function Pn(s) {
    if (s.nodeType === Node.TEXT_NODE) {
        return [
            {
                kind: "text",
                value: s.textContent ?? ""
            }
        ];
    }
    if (!(s instanceof Element)) {
        return [];
    }
    const children = as(s);
    const tag = s.tagName.toLowerCase();
    if (!Jt(tag)) {
        return children;
    }
    switch(tag){
        case "a":
            {
                const n = s.getAttribute("href");
                return [
                    {
                        kind: "link",
                        tag,
                        href: n != null && es(n) ? n : null,
                        children
                    }
                ];
            }
        case "img":
            {
                const n = s.getAttribute("src");
                return [
                    {
                        kind: "image",
                        tag,
                        src: n != null && ts(n) ? n : null,
                        alt: s.getAttribute("alt")
                    }
                ];
            }
        case "td":
        case "th":
            return [
                {
                    kind: "table-cell",
                    tag,
                    colSpan: Nn(s.getAttribute("colspan")),
                    rowSpan: _n(s.getAttribute("rowspan")),
                    children
                }
            ];
        default:
            return [
                {
                    kind: "element",
                    tag,
                    children
                }
            ];
    }
}
function as(s) {
    const e = [];
    for (const t of s.childNodes){
        e.push(...Pn(t));
    }
    return e;
}
function Cn(html) {
    const e = new DOMParser().parseFromString(html, "text/html");
    return as(e.body);
}
function ut(s, e) {
    return {
        parentTag: s.tag,
        unorderedListDepth: e.unorderedListDepth + (s.tag === "ul" ? 1 : 0),
        isFinalTbodyRow: e.parentTag === "tbody" && s.tag === "tr" && e.elementSibling.isLast
    };
}
function nt(s, e, t) {
    let count = 0;
    for (const r of s){
        if (r.kind !== "text") {
            count += 1;
        }
    }
    let a = 0;
    const l = [];
    for (const [r, i] of s.entries()){
        if (i.kind === "text") {
            l.push(i.value);
            continue;
        }
        const index = a;
        a += 1;
        l.push(ZnComponent(i, {
            ...e,
            elementSibling: {
                index,
                count,
                isFirst: index === 0,
                isLast: index === count - 1
            }
        }, `${t}.${r}`));
    }
    return l;
}
function En(unorderedListDepth) {
    switch(unorderedListDepth){
        case 0:
            return He.unorderedListDisc;
        case 1:
            return He.unorderedListCircle;
        default:
            return He.unorderedListSquare;
    }
}
function ZnComponent(s, e, t) {
    switch(s.kind){
        case "element":
            {
                const n = nt(s.children, ut(s, e), t);
                return LnComponent(s, e, n, t);
            }
        case "link":
            return <Ls1Component key={t} href={s.href}>{nt(s.children, ut(s, e), t)}</Ls1Component>;
        case "image":
            return <img key={t} className="sand-dj266r sand-at24cr sand-193iq5w sand-t7dq6l sand-1e1y6u3" alt={s.alt ?? ""} src={s.src ?? undefined}/>;
        case "table-cell":
            {
                const n = nt(s.children, ut(s, e), t);
                if (s.tag === "td") {
                    return <td {...{
                        0: {
                            className: "sand-dj266r sand-at24cr sand-y3jwiz sand-13e3tqs sand-so031l sand-1q0q8m5 sand-17fyfba sand-1yc453h sand-16dsc37"
                        },
                        1: {
                            className: "sand-dj266r sand-at24cr sand-y3jwiz sand-13e3tqs sand-17fyfba sand-1yc453h sand-16dsc37 sand-1qhh985 sand-1sy0etr"
                        }
                    }[!!(e.parentTag === "tr" && e.isFinalTbodyRow) << 0]} colSpan={s.colSpan} key={t} rowSpan={s.rowSpan}>{n}</td>;
                }
                return <th key={t} className="sand-dj266r sand-at24cr sand-y3jwiz sand-13e3tqs sand-so031l sand-1q0q8m5 sand-17fyfba sand-1yc453h sand-16dsc37 sand-xzm5a7" colSpan={s.colSpan} rowSpan={s.rowSpan}>{n}</th>;
            }
        default:
            return s;
    }
}
function LnComponent(s, e, t, key) {
    switch(s.tag){
        case "p":
            return <p {...{
                0: {
                    className: "sand-dj266r sand-at24cr sand-126k92a"
                },
                1: {
                    className: "sand-dj266r sand-at24cr sand-eaf4i8"
                }
            }[(e.parentTag === "li") << 0]} key={key}>{t}</p>;
        case "br":
            return <br key={key} className="sand-dj266r sand-at24cr"/>;
        case "hr":
            return <hr key={key} className="sand-dj266r sand-at24cr sand-178xt8z sand-13fuv20 sand-1aeic0j sand-18oe1m7 sand-1sy0etr sand-stzfhl"/>;
        case "h1":
            return <h1 key={key} className="sand-dj266r sand-at24cr sand-1heor9g sand-xzm5a7 sand-1ja60sm sand-10siri3">{t}</h1>;
        case "h2":
            return <h2 key={key} className="sand-dj266r sand-at24cr sand-1heor9g sand-xzm5a7 sand-1ja60sm sand-1b5m78i">{t}</h2>;
        case "h3":
            return <h3 key={key} className="sand-dj266r sand-at24cr sand-1heor9g sand-xzm5a7 sand-1ja60sm sand-140imcn">{t}</h3>;
        case "h4":
            return <h4 key={key} className="sand-dj266r sand-at24cr sand-1heor9g sand-xzm5a7 sand-1ja60sm sand-rv4cvt">{t}</h4>;
        case "h5":
            return <h5 key={key} className="sand-dj266r sand-at24cr sand-1heor9g sand-xzm5a7 sand-1ja60sm sand-rv4cvt">{t}</h5>;
        case "h6":
            return <h6 key={key} className="sand-dj266r sand-at24cr sand-1heor9g sand-xzm5a7 sand-1ja60sm sand-rv4cvt">{t}</h6>;
        case "ul":
            return <ul {...p_1(He.leaf, He.list, En(e.unorderedListDepth), e.parentTag === "li" && He.nestedList)} key={key}>{t}</ul>;
        case "ol":
            return <ol {...{
                0: {
                    className: "sand-dj266r sand-at24cr sand-92arao sand-1ja60sm sand-43c9pm sand-3yw8vx"
                },
                1: {
                    className: "sand-at24cr sand-1ja60sm sand-43c9pm sand-3yw8vx sand-1om1abp sand-8fiw5y"
                }
            }[(e.parentTag === "li") << 0]} key={key}>{t}</ol>;
        case "li":
            return <li {...{
                0: {
                    className: "sand-dj266r sand-at24cr sand-eaf4i8 sand-kwbhjd"
                },
                1: {
                    className: "sand-at24cr sand-eaf4i8 sand-kwbhjd sand-1om1abp"
                }
            }[(!e.elementSibling.isFirst && (e.parentTag === "ul" || e.parentTag === "ol")) << 0]} key={key}>{t}</li>;
        case "strong":
            return <strong key={key} className="sand-dj266r sand-at24cr">{t}</strong>;
        case "b":
            return <b key={key} className="sand-dj266r sand-at24cr">{t}</b>;
        case "em":
            return <em key={key} className="sand-dj266r sand-at24cr">{t}</em>;
        case "i":
            return <i key={key} className="sand-dj266r sand-at24cr">{t}</i>;
        case "u":
            return <u key={key} className="sand-dj266r sand-at24cr">{t}</u>;
        case "s":
            return <s key={key} className="sand-dj266r sand-at24cr">{t}</s>;
        case "sub":
            return <sub key={key} className="sand-dj266r sand-at24cr">{t}</sub>;
        case "sup":
            return <sup key={key} className="sand-dj266r sand-at24cr">{t}</sup>;
        case "blockquote":
            return <blockquote key={key} className="sand-dj266r sand-at24cr sand-rxpjvj sand-8fiw5y sand-yumdvf sand-1t7ytsu sand-4n2izg sand-19aaqeu">{t}</blockquote>;
        case "code":
            return <code {...{
                0: {
                    className: "sand-dj266r sand-at24cr sand-t970qd sand-1bfovwe sand-1e1y6u3 sand-1hhjprl sand-67nlm8 sand-eb7xqv"
                },
                1: {
                    className: "sand-dj266r sand-at24cr sand-67nlm8 sand-t970qd sand-njsko4 sand-2u8bby sand-jbqb8w sand-1wm8ruf"
                }
            }[(e.parentTag === "pre") << 0]} key={key}>{t}</code>;
        case "pre":
            return <pre key={key} className="sand-dj266r sand-at24cr sand-12ffz05 sand-1m31zm8 sand-1043rbw sand-qcqck4 sand-w2csxc sand-spwq11">{t}</pre>;
        case "span":
            return <span key={key} className="sand-dj266r sand-at24cr">{t}</span>;
        case "table":
            return <table key={key} className="sand-dj266r sand-at24cr sand-1mwwwfo sand-1wm8ruf">{t}</table>;
        case "thead":
            return <thead key={key} className="sand-dj266r sand-at24cr">{t}</thead>;
        case "tbody":
            return <tbody key={key} className="sand-dj266r sand-at24cr">{t}</tbody>;
        case "tr":
            return <tr key={key} className="sand-dj266r sand-at24cr">{t}</tr>;
        default:
            return s.tag;
    }
}
function Ls1Component(s) {
    Ls1Component.d = 790;
    const e = c_1.c(11);
    const { href, children } = s;
    const a = bA();
    let l;
    if (e[0] !== href) {
        l = hv(href);
        e[0] = href;
        e[1] = l;
    } else {
        l = e[1];
    }
    const r = l;
    const i = cx(r);
    let c;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        c = {
            className: "sand-dj266r sand-at24cr sand-l1v4ol sand-krqix3 sand-1sur9pj"
        };
        e[2] = c;
    } else {
        c = e[2];
    }
    let d;
    if (e[3] !== a || e[4] !== r) {
        d = t(r, a);
        e[3] = a;
        e[4] = r;
        e[5] = d;
    } else {
        d = e[5];
    }
    const href_1 = href ?? undefined;
    let u;
    if (e[6] !== children || e[7] !== i || e[8] !== d || e[9] !== href_1) {
        u = <a {...c} {...i} {...d} href={href_1} rel="noopener noreferrer" target="_blank">{children}</a>;
        e[6] = children;
        e[7] = i;
        e[8] = d;
        e[9] = href_1;
        e[10] = u;
    } else {
        u = e[10];
    }
    return u;
}
function Rs1Component(s) {
    Rs1Component.d = 789;
    const e = c_1.c(12);
    const { html } = s;
    let n;
    let a;
    let l;
    let r;
    if (e[0] !== html) {
        const c = Cn(html);
        let d;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-euugli sand-apjn7j sand-dj266r sand-11t971q sand-at24cr sand-vc5jky sand-1avjwpx sand-7tr390 sand-1l37tef sand-zazumk sand-j0a0fe sand-ehausa sand-1heor9g sand-1qlqyl8 sand-1yxxptd"
            };
            n = r_2("sand-docx-content", d.className);
            e[5] = d;
            e[6] = n;
        } else {
            d = e[5];
            n = e[6];
        }
        a = true;
        l = d.style;
        r = nt(c, {
            parentTag: null,
            unorderedListDepth: 0,
            isFinalTbodyRow: false
        }, jn);
        e[0] = html;
        e[1] = n;
        e[2] = a;
        e[3] = l;
        e[4] = r;
    } else {
        n = e[1];
        a = e[2];
        l = e[3];
        r = e[4];
    }
    let i;
    if (e[7] !== n || e[8] !== a || e[9] !== l || e[10] !== r) {
        i = <div className={n} data-docx-content={a} style={l}>{r}</div>;
        e[7] = n;
        e[8] = a;
        e[9] = l;
        e[10] = r;
        e[11] = i;
    } else {
        i = e[11];
    }
    return i;
}
function Is1Component(s) {
    Is1Component.d = 791;
    const e = c_1.c(2);
    if (!s.isOpen) {
        return null;
    }
    let t;
    if (e[0] !== s) {
        t = <Os1Component {...s}/>;
        e[0] = s;
        e[1] = t;
    } else {
        t = e[1];
    }
    return t;
}
function Os1Component(s) {
    Os1Component.d = 792;
    const e = c_1.c(23);
    const { source, name, downloadName, isOpen, onClose } = s;
    const i = jg();
    const { _ } = u_1();
    const d = Re(source, isOpen);
    const m = cu(source);
    let u;
    if (e[0] !== d) {
        u = d?.status === "ready" ? Sn(d.bytes) : kn;
        e[0] = d;
        e[1] = u;
    } else {
        u = e[1];
    }
    const f = u;
    const docx = r_1.useSyncExternalStore(f.subscribe, f.getSnapshot, f.getSnapshot);
    i_2(f.arm);
    let j;
    if (e[2] !== downloadName || e[3] !== source) {
        j = <Ae1Component downloadName={downloadName} href={source}/>;
        e[2] = downloadName;
        e[3] = source;
        e[4] = j;
    } else {
        j = e[4];
    }
    let onDownload;
    if (e[5] !== i || e[6] !== downloadName || e[7] !== source) {
        onDownload = ()=>{
            i?.([
                {
                    path: source,
                    suggestedName: downloadName
                }
            ]).catch(Mn);
        };
        e[5] = i;
        e[6] = downloadName;
        e[7] = source;
        e[8] = onDownload;
    } else {
        onDownload = e[8];
    }
    let x;
    if (e[9] !== _ || e[10] !== d || e[11] !== docx || e[12] !== downloadName || e[13] !== m || e[14] !== source || e[15] !== onDownload) {
        x = TnComponent({
            translate: _,
            bytes: d,
            docx,
            source,
            downloadName,
            onDownload,
            onRetry: m
        });
        e[9] = _;
        e[10] = d;
        e[11] = docx;
        e[12] = downloadName;
        e[13] = m;
        e[14] = source;
        e[15] = onDownload;
        e[16] = x;
    } else {
        x = e[16];
    }
    let p;
    if (e[17] !== isOpen || e[18] !== name || e[19] !== onClose || e[20] !== j || e[21] !== x) {
        p = <PeComponent actions={j} isOpen={isOpen} onClose={onClose} title={name}>{x}</PeComponent>;
        e[17] = isOpen;
        e[18] = name;
        e[19] = onClose;
        e[20] = j;
        e[21] = x;
        e[22] = p;
    } else {
        p = e[22];
    }
    return p;
}
function Mn() {}
function TnComponent({ translate, bytes, docx, source, downloadName, onDownload, onRetry }) {
    if (bytes?.status === "too-large") {
        return <U action=<Ae1Component downloadName={downloadName} href={source}/> detail={translate({
            id: "4iMSkK"
        })} icon="file-text" title={translate({
            id: "h7dRpk"
        })}/>;
    }
    if (bytes?.status === "failed") {
        return <U action=<Le onClick={onRetry} size="sm" variant="secondary"><T_1 id="6gRgw8"/></Le> icon="file-text" title={translate({
            id: "OZ1zWg"
        })}/>;
    }
    if (bytes?.status === "missing") {
        return <U icon="file-text" title={translate({
            id: "bks/Jy"
        })}/>;
    }
    if (docx.status === "error") {
        return <U action=<Le onClick={onDownload} size="sm" variant="secondary"><T_1 id="mzI/c+"/></Le> detail={translate({
            id: "UCNgnS"
        })} icon="file-text" title={translate({
            id: "ciNBep"
        })}/>;
    }
    if (bytes == null || docx.status === "loading") {
        return <Me label={translate({
            id: "PZctm0"
        })}/>;
    }
    return <Ze1 className="sand-1iyjqo2 sand-2lwn1j" scrollbarVisibility="hover"><Rs1Component html={docx.html}/></Ze1>;
}
const Rn = "sand-html-preview";
const Dn = "attachment";
function On(source) {
    return `${Rn}://${Dn}/${encodeURIComponent(source)}`;
}
const rt = -1;
const An = {
    anchor: rt,
    focus: rt
};
function Mt(s, e) {
    if (s == null) {
        return rt;
    }
    let t = e;
    while(t != null && t.parentNode !== s){
        t = t.parentNode;
    }
    if (t == null) {
        return rt;
    }
    return Array.prototype.indexOf.call(s.childNodes, t);
}
function In(s) {
    let e = An;
    return {
        subscribe: (t)=>{
            document.addEventListener("selectionchange", t);
            return ()=>document.removeEventListener("selectionchange", t);
        },
        getSnapshot: ()=>{
            const t = document.getSelection();
            const anchor = Mt(s, t?.anchorNode ?? null);
            const a = Mt(s, t?.focusNode ?? null);
            if (anchor !== e.anchor || a !== e.focus) {
                e = {
                    anchor,
                    focus: a
                };
            }
            return e;
        }
    };
}
const qn = {
    kzqmXN: "sand-ezivpi",
    kCygrm: "sand-b5mbof",
    kM8eXF: "sand-12a1x4x",
    $$css: true
};
const $n = r_1.lazy(()=>_(()=>import("./chunk-code-body-CpFpPIsl.js"), __vite__mapDeps([
        2,
        1,
        3,
        4,
        5,
        6,
        7
    ]), import.meta.url).then((s)=>({
            default: s.CodeBody
        })));
const Wn = r_1.lazy(()=>_(()=>import("./chunk-file-markdown-46Rn501q.js"), __vite__mapDeps([
        8,
        1,
        9,
        3,
        4,
        10,
        11,
        12,
        7
    ]), import.meta.url).then((s)=>({
            default: s.FileMarkdown
        })));
const Ve = 1500000;
const Hn = 20;
const Vn = {
    lineBlock: (s)=>[
            qn,
            {
                "--x-containIntrinsicHeight": ((e)=>{
                    if (typeof e === "number") {
                        return `${e}px`;
                    }
                    return e ?? undefined;
                })(`auto ${s}px`)
            }
        ]
};
const Fn = 200000;
const Bn = 5000;
const xt = 1000;
const Xn = 9;
const Tt = 8;
const Gn = 1;
const Un = 2;
const Kn = /[\t\u1100-\uffff]/;
const ft = {
    lineIndex: -1,
    start: 0,
    end: 0,
    columns: 0
};
function Zn(s) {
    return s >= 4352 && s <= 4447 || s >= 11904 && s <= 42191 || s >= 44032 && s <= 55203 || s >= 55296 && s <= 56319 || s >= 63744 && s <= 64255 || s >= 65072 && s <= 65103 || s >= 65280 && s <= 65376 || s >= 65504 && s <= 65510;
}
function Rt(s, e, t) {
    if (e === Xn) {
        return (Math.floor(s / Tt) + 1) * Tt;
    }
    if (e >= 56320 && e <= 57343) {
        return s;
    }
    return s + (Zn(e) ? t : 1);
}
function Qn(text) {
    const e = Kn.test(text);
    const groupStarts = [];
    let n = ft;
    let a = ft;
    let l = 0;
    for(let i = 0; i < text.length; l += 1){
        if (l % xt === 0) {
            groupStarts.push(i);
        }
        const c = text.indexOf(`
`, i);
        const d = c === -1 ? text.length : c;
        let m = d - i;
        let u = m;
        if (e) {
            m = 0;
            u = 0;
            for(let b = i; b < d; b += 1){
                const j = text.charCodeAt(b);
                m = Rt(m, j, Gn);
                u = Rt(u, j, Un);
            }
        }
        const end = c === -1 ? text.length : c + 1;
        if (m > n.columns) {
            n = {
                lineIndex: l,
                start: i,
                end,
                columns: m
            };
        }
        if (u > a.columns) {
            a = {
                lineIndex: l,
                start: i,
                end,
                columns: u
            };
        }
        i = end;
    }
    const r = n.lineIndex === a.lineIndex ? [
        n
    ] : [
        n,
        a
    ];
    return {
        lineTotal: l,
        groupStarts,
        widestLines: r.filter((i)=>i !== ft).sort((i, c)=>i.start - c.start)
    };
}
function Yn(text) {
    const { lineTotal, groupStarts, widestLines } = Qn(text);
    const a = [];
    const l = (r, i, lineCount, isWidestLine)=>{
        if (lineCount > 0) {
            a.push({
                text: text.slice(r, i),
                lineCount,
                isWidestLine
            });
        }
    };
    groupStarts.forEach((r, i)=>{
        const c = groupStarts[i + 1] ?? text.length;
        const d = Math.min((i + 1) * xt, lineTotal);
        let m = r;
        let u = i * xt;
        for (const f of widestLines){
            if (!(f.start < r || f.start >= c)) {
                l(m, f.start, f.lineIndex - u, false);
                l(f.start, f.end, 1, true);
                m = f.end;
                u = f.lineIndex + 1;
            }
        }
        l(m, c, d - u, false);
    });
    return a;
}
function Jn(text, e) {
    let t = 0;
    let n = 0;
    while(n < text.length){
        t += 1;
        if (t > e) {
            return true;
        }
        const a = text.indexOf(`
`, n);
        if (a === -1) {
            return false;
        }
        n = a + 1;
    }
    return false;
}
function Cs1Component(s) {
    Cs1Component.d = 815;
    const e = c_1.c(2);
    if (!s.isOpen) {
        return null;
    }
    let t;
    if (e[0] !== s) {
        t = <Ds1Component {...s}/>;
        e[0] = s;
        e[1] = t;
    } else {
        t = e[1];
    }
    return t;
}
function Ds1Component(s) {
    Ds1Component.d = 812;
    const e = c_1.c(51);
    const { source, name, downloadName, isMarkdown, isOpen, onClose } = s;
    const { _ } = u_1();
    const d = Re(source, isOpen);
    const m = cu(source);
    let u;
    e: {
        if (d?.status !== "ready") {
            u = null;
            break e;
        }
        let g;
        let h;
        if (e[0] !== d.bytes) {
            const P = new TextDecoder("utf-8", {
                fatal: false
            }).decode(d.bytes);
            g = P.length > Ve;
            h = g ? P.slice(0, Ve) : P;
            e[0] = d.bytes;
            e[1] = g;
            e[2] = h;
        } else {
            g = e[1];
            h = e[2];
        }
        let w;
        if (e[3] !== g || e[4] !== h) {
            w = {
                text: h,
                isTruncated: g
            };
            e[3] = g;
            e[4] = h;
            e[5] = w;
        } else {
            w = e[5];
        }
        u = w;
    }
    const f = u;
    let b;
    e: {
        if (d?.status === "too-large") {
            let h;
            if (e[6] !== downloadName || e[7] !== source) {
                h = <Ae1Component downloadName={downloadName} href={source}/>;
                e[6] = downloadName;
                e[7] = source;
                e[8] = h;
            } else {
                h = e[8];
            }
            let w;
            if (e[9] !== _) {
                w = _({
                    id: "X0/8Ci"
                });
                e[9] = _;
                e[10] = w;
            } else {
                w = e[10];
            }
            let P;
            if (e[11] !== _) {
                P = _({
                    id: "QxMRBI"
                });
                e[11] = _;
                e[12] = P;
            } else {
                P = e[12];
            }
            let E;
            if (e[13] !== h || e[14] !== w || e[15] !== P) {
                E = <U action={h} detail={w} icon="file-text" title={P}/>;
                e[13] = h;
                e[14] = w;
                e[15] = P;
                e[16] = E;
            } else {
                E = e[16];
            }
            b = E;
            break e;
        }
        if (d?.status === "failed") {
            let h;
            if (e[17] === Symbol.for("react.memo_cache_sentinel")) {
                h = <T_1 id="6gRgw8"/>;
                e[17] = h;
            } else {
                h = e[17];
            }
            let w;
            if (e[18] !== m) {
                w = <Le onClick={m} size="sm" variant="secondary">{h}</Le>;
                e[18] = m;
                e[19] = w;
            } else {
                w = e[19];
            }
            let P;
            if (e[20] !== _) {
                P = _({
                    id: "OZ1zWg"
                });
                e[20] = _;
                e[21] = P;
            } else {
                P = e[21];
            }
            let E;
            if (e[22] !== w || e[23] !== P) {
                E = <U action={w} icon="file-text" title={P}/>;
                e[22] = w;
                e[23] = P;
                e[24] = E;
            } else {
                E = e[24];
            }
            b = E;
            break e;
        }
        if (d?.status === "missing") {
            let h;
            if (e[25] !== _) {
                h = _({
                    id: "bks/Jy"
                });
                e[25] = _;
                e[26] = h;
            } else {
                h = e[26];
            }
            let w;
            if (e[27] !== h) {
                w = <U icon="file-text" title={h}/>;
                e[27] = h;
                e[28] = w;
            } else {
                w = e[28];
            }
            b = w;
            break e;
        }
        if (f == null) {
            let h;
            if (e[29] !== _) {
                h = _({
                    id: "zSf+pB"
                });
                e[29] = _;
                e[30] = h;
            } else {
                h = e[30];
            }
            let w;
            if (e[31] !== h) {
                w = <Me label={h}/>;
                e[31] = h;
                e[32] = w;
            } else {
                w = e[32];
            }
            b = w;
            break e;
        }
        if (isMarkdown) {
            let h;
            if (e[33] !== f.text) {
                h = <Us1Component text={f.text}/>;
                e[33] = f.text;
                e[34] = h;
            } else {
                h = e[34];
            }
            b = h;
            break e;
        }
        let g;
        if (e[35] !== f.text || e[36] !== source) {
            g = <Ot1Component name={source} text={f.text}/>;
            e[35] = f.text;
            e[36] = source;
            e[37] = g;
        } else {
            g = e[37];
        }
        b = g;
    }
    const j = b;
    let k;
    if (e[38] !== downloadName || e[39] !== source) {
        k = <Ae1Component downloadName={downloadName} href={source}/>;
        e[38] = downloadName;
        e[39] = source;
        e[40] = k;
    } else {
        k = e[40];
    }
    let x;
    if (e[41] !== _ || e[42] !== f?.isTruncated) {
        x = f?.isTruncated === true ? _({
            id: "FuZTcE"
        }) : undefined;
        e[41] = _;
        e[42] = f?.isTruncated;
        e[43] = x;
    } else {
        x = e[43];
    }
    let p;
    if (e[44] !== j || e[45] !== isOpen || e[46] !== name || e[47] !== onClose || e[48] !== k || e[49] !== x) {
        p = <PeComponent actions={k} isOpen={isOpen} onClose={onClose} subtitle={x} title={name}>{j}</PeComponent>;
        e[44] = j;
        e[45] = isOpen;
        e[46] = name;
        e[47] = onClose;
        e[48] = k;
        e[49] = x;
        e[50] = p;
    } else {
        p = e[50];
    }
    return p;
}
function Us1Component(s) {
    Us1Component.d = 811;
    const e = c_1.c(11);
    const { text } = s;
    const { _ } = u_1();
    let a;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        a = {
            className: "sand-1iyjqo2 sand-2lwn1j"
        };
        e[0] = a;
    } else {
        a = e[0];
    }
    const a_className = a.className;
    let r;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        r = r_2("sand-file-markdown-page", "sand-9f619 sand-c5f494 sand-vc5jky sand-11t971q sand-13zrc24 sand-161sli9 sand-1mfogq2 sand-sfy40s sand-1hx0egp");
        e[1] = r;
    } else {
        r = e[1];
    }
    let i;
    if (e[2] !== _) {
        i = _({
            id: "zSf+pB"
        });
        e[2] = _;
        e[3] = i;
    } else {
        i = e[3];
    }
    let c;
    if (e[4] !== i) {
        c = <Me label={i}/>;
        e[4] = i;
        e[5] = c;
    } else {
        c = e[5];
    }
    let d;
    if (e[6] !== text) {
        d = <Wn text={text}/>;
        e[6] = text;
        e[7] = d;
    } else {
        d = e[7];
    }
    let m;
    if (e[8] !== c || e[9] !== d) {
        m = <Ze1 className={a_className} scrollbarVisibility="hover"><div className={r}><r_1.Suspense fallback={c}>{d}</r_1.Suspense></div></Ze1>;
        e[8] = c;
        e[9] = d;
        e[10] = m;
    } else {
        m = e[10];
    }
    return m;
}
function Ot1Component(s) {
    Ot1Component.d = 810;
    const e = c_1.c(11);
    const { _ } = u_1();
    if (s.text.length > Fn || Jn(s.text, Bn)) {
        let i;
        if (e[0] !== s.text) {
            i = <Fs1Component text={s.text}/>;
            e[0] = s.text;
            e[1] = i;
        } else {
            i = e[1];
        }
        return i;
    }
    let n;
    if (e[2] !== _) {
        n = _({
            id: "zSf+pB"
        });
        e[2] = _;
        e[3] = n;
    } else {
        n = e[3];
    }
    let a;
    if (e[4] !== n) {
        a = <Me label={n}/>;
        e[4] = n;
        e[5] = a;
    } else {
        a = e[5];
    }
    let l;
    if (e[6] !== s) {
        l = <$n {...s}/>;
        e[6] = s;
        e[7] = l;
    } else {
        l = e[7];
    }
    let r;
    if (e[8] !== a || e[9] !== l) {
        r = <r_1.Suspense fallback={a}>{l}</r_1.Suspense>;
        e[8] = a;
        e[9] = l;
        e[10] = r;
    } else {
        r = e[10];
    }
    return r;
}
function Fs1Component(s) {
    Fs1Component.d = 814;
    const e = c_1.c(4);
    const { text } = s;
    let blocks;
    if (e[0] !== text) {
        blocks = Yn(text);
        e[0] = text;
        e[1] = blocks;
    } else {
        blocks = e[1];
    }
    let a;
    if (e[2] !== blocks) {
        a = <Ms1Component blocks={blocks}/>;
        e[2] = blocks;
        e[3] = a;
    } else {
        a = e[3];
    }
    return a;
}
function Ms1Component(s) {
    Ms1Component.d = 813;
    const e = c_1.c(13);
    const { blocks } = s;
    const [n, setN] = r_1.useState(null);
    let l;
    if (e[0] !== n) {
        l = In(n);
        e[0] = n;
        e[1] = l;
    } else {
        l = e[1];
    }
    const r = l;
    const { anchor, focus } = r_1.useSyncExternalStore(r.subscribe, r.getSnapshot, r.getSnapshot);
    let d;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        d = {
            className: "sand-1iyjqo2 sand-2lwn1j"
        };
        e[2] = d;
    } else {
        d = e[2];
    }
    const d_className = d.className;
    let u;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        u = {
            className: "sand-1ghz6dp sand-1us19tq sand-yamay9 sand-wxc41k sand-f7dkkf sand-v54qhq sand-1ua6jya sand-1wd3ewq sand-xwulf8 sand-1ct8sxb sand-1fc57z9 sand-1sdyfia sand-1hx0egp"
        };
        e[3] = u;
    } else {
        u = e[3];
    }
    const u_className = u.className;
    let b;
    if (e[4] !== anchor || e[5] !== blocks || e[6] !== focus) {
        let k;
        if (e[8] !== anchor || e[9] !== focus) {
            k = (x, p)=>{
                const g = !x.isWidestLine && p !== anchor && p !== focus;
                return <div {...p_1(g && Vn.lineBlock(x.lineCount * Hn))} key={p}>{x.text}</div>;
            };
            e[8] = anchor;
            e[9] = focus;
            e[10] = k;
        } else {
            k = e[10];
        }
        b = blocks.map(k);
        e[4] = anchor;
        e[5] = blocks;
        e[6] = focus;
        e[7] = b;
    } else {
        b = e[7];
    }
    let j;
    if (e[11] !== b) {
        j = <Ze1 className={d_className} direction="both" scrollbarVisibility="hover"><pre className={u_className} dir="ltr" ref={setN}>{b}</pre></Ze1>;
        e[11] = b;
        e[12] = j;
    } else {
        j = e[12];
    }
    return j;
}
const sandbox = "allow-scripts";
function Hs1Component(s) {
    Hs1Component.d = 794;
    const e = c_1.c(72);
    const { source, name, downloadName, isOpen, onClose } = s;
    const { _ } = u_1();
    const c = Re(source, isOpen);
    const d = cu(source);
    const [m, setM] = r_1.useState(false);
    let f;
    e: {
        if (c?.status !== "ready") {
            f = null;
            break e;
        }
        let M;
        let O;
        if (e[0] !== c.bytes) {
            const T = new TextDecoder("utf-8", {
                fatal: false
            }).decode(c.bytes);
            M = T.length > Ve;
            O = M ? T.slice(0, Ve) : T;
            e[0] = c.bytes;
            e[1] = M;
            e[2] = O;
        } else {
            M = e[1];
            O = e[2];
        }
        let W;
        if (e[3] !== M || e[4] !== O) {
            W = {
                text: O,
                isTruncated: M
            };
            e[3] = M;
            e[4] = O;
            e[5] = W;
        } else {
            W = e[5];
        }
        f = W;
    }
    const b = f;
    let j;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        j = {
            className: "sand-78zum5 sand-6s0dn4 sand-1jnr06f"
        };
        e[6] = j;
    } else {
        j = e[6];
    }
    const isActive = !m;
    let x;
    if (e[7] !== _) {
        x = _({
            id: "rdUucN"
        });
        e[7] = _;
        e[8] = x;
    } else {
        x = e[8];
    }
    let p;
    if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
        p = ()=>setM(false);
        e[9] = p;
    } else {
        p = e[9];
    }
    let g;
    if (e[10] !== isActive || e[11] !== x) {
        g = <Gt1Component isActive={isActive} label={x} onSelect={p}/>;
        e[10] = isActive;
        e[11] = x;
        e[12] = g;
    } else {
        g = e[12];
    }
    let h;
    if (e[13] !== _) {
        h = _({
            id: "wdxz7K"
        });
        e[13] = _;
        e[14] = h;
    } else {
        h = e[14];
    }
    let w;
    if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
        w = ()=>setM(true);
        e[15] = w;
    } else {
        w = e[15];
    }
    let P;
    if (e[16] !== m || e[17] !== h) {
        P = <Gt1Component isActive={m} label={h} onSelect={w}/>;
        e[16] = m;
        e[17] = h;
        e[18] = P;
    } else {
        P = e[18];
    }
    let E;
    if (e[19] !== g || e[20] !== P) {
        E = <div {...j}>{g}{P}</div>;
        e[19] = g;
        e[20] = P;
        e[21] = E;
    } else {
        E = e[21];
    }
    const N = E;
    let C;
    e: {
        if (c?.status === "too-large") {
            let T;
            if (e[22] !== downloadName || e[23] !== source) {
                T = <Ae1Component downloadName={downloadName} href={source}/>;
                e[22] = downloadName;
                e[23] = source;
                e[24] = T;
            } else {
                T = e[24];
            }
            let D;
            if (e[25] !== _) {
                D = _({
                    id: "X0/8Ci"
                });
                e[25] = _;
                e[26] = D;
            } else {
                D = e[26];
            }
            let V;
            if (e[27] !== _) {
                V = _({
                    id: "QxMRBI"
                });
                e[27] = _;
                e[28] = V;
            } else {
                V = e[28];
            }
            let F;
            if (e[29] !== T || e[30] !== D || e[31] !== V) {
                F = <U action={T} detail={D} icon="file-text" title={V}/>;
                e[29] = T;
                e[30] = D;
                e[31] = V;
                e[32] = F;
            } else {
                F = e[32];
            }
            C = F;
            break e;
        }
        if (c?.status === "failed") {
            let T;
            if (e[33] === Symbol.for("react.memo_cache_sentinel")) {
                T = <T_1 id="6gRgw8"/>;
                e[33] = T;
            } else {
                T = e[33];
            }
            let D;
            if (e[34] !== d) {
                D = <Le onClick={d} size="sm" variant="secondary">{T}</Le>;
                e[34] = d;
                e[35] = D;
            } else {
                D = e[35];
            }
            let V;
            if (e[36] !== _) {
                V = _({
                    id: "OZ1zWg"
                });
                e[36] = _;
                e[37] = V;
            } else {
                V = e[37];
            }
            let F;
            if (e[38] !== D || e[39] !== V) {
                F = <U action={D} icon="file-text" title={V}/>;
                e[38] = D;
                e[39] = V;
                e[40] = F;
            } else {
                F = e[40];
            }
            C = F;
            break e;
        }
        if (c?.status === "missing") {
            let T;
            if (e[41] !== _) {
                T = _({
                    id: "bks/Jy"
                });
                e[41] = _;
                e[42] = T;
            } else {
                T = e[42];
            }
            let D;
            if (e[43] !== T) {
                D = <U icon="file-text" title={T}/>;
                e[43] = T;
                e[44] = D;
            } else {
                D = e[44];
            }
            C = D;
            break e;
        }
        if (b == null) {
            let T;
            if (e[45] !== _) {
                T = _({
                    id: "zSf+pB"
                });
                e[45] = _;
                e[46] = T;
            } else {
                T = e[46];
            }
            let D;
            if (e[47] !== T) {
                D = <Me label={T}/>;
                e[47] = T;
                e[48] = D;
            } else {
                D = e[48];
            }
            C = D;
            break e;
        }
        if (m) {
            let T;
            if (e[49] !== b.text || e[50] !== source) {
                T = <Ot1Component name={source} text={b.text}/>;
                e[49] = b.text;
                e[50] = source;
                e[51] = T;
            } else {
                T = e[51];
            }
            C = T;
            break e;
        }
        let M;
        if (e[52] === Symbol.for("react.memo_cache_sentinel")) {
            M = {
                className: "sand-1iyjqo2 sand-2lwn1j sand-h8yej3 sand-ng3xce sand-83z2og sand-19aimcq sand-4sht9k sand-2ssjo2 sand-1t137rt sand-54jfk2 sand-1k57tk5 sand-yqzfj1"
            };
            e[52] = M;
        } else {
            M = e[52];
        }
        let src;
        if (e[53] !== source) {
            src = On(source);
            e[53] = source;
            e[54] = src;
        } else {
            src = e[54];
        }
        let W;
        if (e[55] !== name || e[56] !== src) {
            W = <iframe {...M} referrerPolicy="no-referrer" sandbox={sandbox} src={src} title={name}/>;
            e[55] = name;
            e[56] = src;
            e[57] = W;
        } else {
            W = e[57];
        }
        C = W;
    }
    const S = C;
    let y;
    if (e[58] !== downloadName || e[59] !== source) {
        y = <Ae1Component downloadName={downloadName} href={source}/>;
        e[58] = downloadName;
        e[59] = source;
        e[60] = y;
    } else {
        y = e[60];
    }
    let v;
    if (e[61] !== _ || e[62] !== b?.isTruncated) {
        v = b?.isTruncated === true ? _({
            id: "FuZTcE"
        }) : undefined;
        e[61] = _;
        e[62] = b?.isTruncated;
        e[63] = v;
    } else {
        v = e[63];
    }
    let z;
    if (e[64] !== S || e[65] !== isOpen || e[66] !== name || e[67] !== onClose || e[68] !== y || e[69] !== v || e[70] !== N) {
        z = <PeComponent actions={y} isOpen={isOpen} onClose={onClose} subtitle={v} title={name} toolbar={N}>{S}</PeComponent>;
        e[64] = S;
        e[65] = isOpen;
        e[66] = name;
        e[67] = onClose;
        e[68] = y;
        e[69] = v;
        e[70] = N;
        e[71] = z;
    } else {
        z = e[71];
    }
    return z;
}
function Gt1Component(s) {
    Gt1Component.d = 795;
    const e = c_1.c(9);
    const { isActive, label, onSelect } = s;
    let l;
    if (e[0] !== isActive) {
        l = ({
            0: {
                className: "sand-2lah0s sand-jyslct sand-ng3xce sand-u4hgxq sand-yqdw3p sand-g8j3zb sand-e2zdcy sand-2vl965 sand-1ypdohk sand-jbqb8w sand-p09uzz sand-4b2ntj"
            },
            1: {
                className: "sand-2lah0s sand-jyslct sand-ng3xce sand-u4hgxq sand-yqdw3p sand-g8j3zb sand-e2zdcy sand-2vl965 sand-1ypdohk sand-10sxruw sand-1wd3ewq"
            }
        })[!!isActive << 0];
        e[0] = isActive;
        e[1] = l;
    } else {
        l = e[1];
    }
    let r;
    if (e[2] !== label) {
        r = <Nt size="xs" weight="regular">{label}</Nt>;
        e[2] = label;
        e[3] = r;
    } else {
        r = e[3];
    }
    let i;
    if (e[4] !== isActive || e[5] !== onSelect || e[6] !== l || e[7] !== r) {
        i = <button {...l} aria-pressed={isActive} onClick={onSelect} type="button">{r}</button>;
        e[4] = isActive;
        e[5] = onSelect;
        e[6] = l;
        e[7] = r;
        e[8] = i;
    } else {
        i = e[8];
    }
    return i;
}
function ta(s) {
    const e = [
        s
    ];
    while(e.length > 0){
        const t = e.pop();
        if (t === null) {
            continue;
        }
        const n = typeof t;
        if (!(n === "boolean" || n === "number" || n === "string")) {
            if (Array.isArray(t)) {
                for (const a of t){
                    e.push(a);
                }
                continue;
            }
            if (!ji(t)) {
                return false;
            }
            for(const a in t){
                if (Object.prototype.hasOwnProperty.call(t, a)) {
                    e.push(t[a]);
                }
            }
        }
    }
    return true;
}
function sa(s) {
    const e = jh(s);
    if (e === undefined || !ta(e)) {
        return {
            status: "error"
        };
    }
    return {
        status: "ok",
        value: e
    };
}
function Pt(s) {
    return typeof s === "object" && s !== null;
}
function Ct(s) {
    return Array.isArray(s);
}
function ps(s) {
    let e = 0;
    for(const t in s){
        if (Object.prototype.hasOwnProperty.call(s, t)) {
            e += 1;
        }
    }
    return e;
}
function na(s) {
    if (Pt(s)) {
        if (Ct(s)) {
            return s.length;
        }
        return ps(s);
    }
    return 0;
}
function aa(s, e) {
    if (!Pt(s)) {
        return [];
    }
    if (Ct(s)) {
        const a = Math.min(e, s.length);
        const l = [];
        for(let r = 0; r < a; r++){
            const i = s[r];
            if (i !== undefined) {
                l.push([
                    String(r),
                    i
                ]);
            }
        }
        return l;
    }
    const t = [];
    for(const a in s){
        if (!Object.prototype.hasOwnProperty.call(s, a)) {
            continue;
        }
        if (t.length >= e) {
            break;
        }
        const l = s[a];
        if (l !== undefined) {
            t.push([
                a,
                l
            ]);
        }
    }
    return t;
}
function la(s) {
    if (Ct(s)) {
        return `[${i_1._({
            id: "6ki7F2",
            values: {
                0: s.length
            }
        })}]`;
    }
    const keys = ps(s);
    return `{${i_1._({
        id: "bdXW8L",
        values: {
            keys
        }
    })}}`;
}
function ra(s) {
    if (typeof s === "string") {
        return "string";
    }
    if (typeof s === "number") {
        return "number";
    }
    return "keyword";
}
const ia = 200;
const mt = {
    valueString: {
        kMwMTN: "sand-1w5rjie",
        $$css: true
    },
    valueNumber: {
        kMwMTN: "sand-11pqmr",
        $$css: true
    },
    valueKeyword: {
        kMwMTN: "sand-169g1at",
        $$css: true
    }
};
const oa = {
    string: mt.valueString,
    number: mt.valueNumber,
    keyword: mt.valueKeyword
};
function Xs1Component(s) {
    Xs1Component.d = 796;
    const e = c_1.c(4);
    const { value, defaultExpandedDepth } = s;
    let a;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        a = r_2("sand-json-tree", "sand-xwulf8 sand-1wm8ruf sand-a7kkou sand-19aaqeu sand-1hx0egp");
        e[0] = a;
    } else {
        a = e[0];
    }
    let l;
    if (e[1] !== defaultExpandedDepth || e[2] !== value) {
        l = <div className={a}><Yt1Component defaultExpandedDepth={defaultExpandedDepth} depth={0} name={null} value={value}/></div>;
        e[1] = defaultExpandedDepth;
        e[2] = value;
        e[3] = l;
    } else {
        l = e[3];
    }
    return l;
}
function Wt1Component(s) {
    Wt1Component.d = 798;
    const e = c_1.c(6);
    const { name } = s;
    if (name == null) {
        return null;
    }
    let n;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        n = {
            className: "sand-1izesbo"
        };
        e[0] = n;
    } else {
        n = e[0];
    }
    let a;
    if (e[1] !== name) {
        a = <span className={n.className}>{name}</span>;
        e[1] = name;
        e[2] = a;
    } else {
        a = e[2];
    }
    let l;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        l = <span className="sand-1e4uaio">: </span>;
        e[3] = l;
    } else {
        l = e[3];
    }
    let r;
    if (e[4] !== a) {
        r = <>{a}{l}</>;
        e[4] = a;
        e[5] = r;
    } else {
        r = e[5];
    }
    return r;
}
function Yt1Component(s) {
    Yt1Component.d = 797;
    const e = c_1.c(51);
    const { name, value, depth, defaultExpandedDepth } = s;
    const { _ } = u_1();
    const [i, setI] = r_1.useState(depth < defaultExpandedDepth);
    if (!Pt(value)) {
        let j;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            j = {
                className: "sand-78zum5 sand-1cy8zhl sand-euugli"
            };
            e[0] = j;
        } else {
            j = e[0];
        }
        const k = j.className;
        let x;
        let p;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            x = <span aria-hidden className="sand-2lah0s sand-1kky2od"/>;
            p = {
                className: "sand-126k92a sand-j0a0fe sand-euugli"
            };
            e[1] = x;
            e[2] = p;
        } else {
            x = e[1];
            p = e[2];
        }
        const g = p.className;
        let h;
        if (e[3] !== name) {
            h = <Wt1Component name={name}/>;
            e[3] = name;
            e[4] = h;
        } else {
            h = e[4];
        }
        let w;
        if (e[5] !== value) {
            w = p_1(oa[ra(value)]);
            e[5] = value;
            e[6] = w;
        } else {
            w = e[6];
        }
        const P = w.className;
        let E;
        if (e[7] !== value) {
            E = JSON.stringify(value);
            e[7] = value;
            e[8] = E;
        } else {
            E = e[8];
        }
        let N;
        if (e[9] !== w.className || e[10] !== E) {
            N = <span className={P}>{E}</span>;
            e[9] = w.className;
            e[10] = E;
            e[11] = N;
        } else {
            N = e[11];
        }
        let C;
        if (e[12] !== N || e[13] !== h) {
            C = <div className={k}>{x}<span className={g}>{h}{N}</span></div>;
            e[12] = N;
            e[13] = h;
            e[14] = C;
        } else {
            C = e[14];
        }
        return C;
    }
    const d = na(value);
    let m;
    if (e[15] !== value) {
        m = la(value);
        e[15] = value;
        e[16] = m;
    } else {
        m = e[16];
    }
    const u = m;
    const f = d > 0;
    let b;
    if (e[17] !== _ || e[18] !== d || e[19] !== defaultExpandedDepth || e[20] !== depth || e[21] !== f || e[22] !== i || e[23] !== name || e[24] !== u || e[25] !== value) {
        const j = aa(value, ia);
        const k = d - j.length;
        let x;
        if (e[27] !== _ || e[28] !== name) {
            x = name == null ? _({
                id: "hmkddV"
            }) : _({
                id: "7O3wht",
                values: {
                    nodeName: name
                }
            });
            e[27] = _;
            e[28] = name;
            e[29] = x;
        } else {
            x = e[29];
        }
        const p = x;
        let g;
        if (e[30] !== _ || e[31] !== name) {
            g = name == null ? _({
                id: "Cdwdg/"
            }) : _({
                id: "69sY7m",
                values: {
                    nodeName: name
                }
            });
            e[30] = _;
            e[31] = name;
            e[32] = g;
        } else {
            g = e[32];
        }
        const h = g;
        let w;
        if (e[33] === Symbol.for("react.memo_cache_sentinel")) {
            w = {
                className: "sand-78zum5 sand-1cy8zhl sand-euugli"
            };
            e[33] = w;
        } else {
            w = e[33];
        }
        const P = w.className;
        let E;
        if (e[34] !== p || e[35] !== h || e[36] !== f || e[37] !== i) {
            E = f ? <button aria-expanded={i} aria-label={i ? p : h} className={r_2("sand-json-tree__caret", "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-1kky2od sand-1qx5ct2 sand-1ghz6dp sand-1717udv sand-jyslct sand-ng3xce sand-jbqb8w sand-1ypdohk sand-1e4uaio sand-7gh5u8 sand-1t137rt sand-zur7ow sand-12oqio5")} onClick={()=>setI(ca)} type="button"><W aria-hidden name={i ? "chevron-down-small" : "chevron-right-small"} size={10}/></button> : <span aria-hidden className="sand-2lah0s sand-1kky2od"/>;
            e[34] = p;
            e[35] = h;
            e[36] = f;
            e[37] = i;
            e[38] = E;
        } else {
            E = e[38];
        }
        let N;
        if (e[39] === Symbol.for("react.memo_cache_sentinel")) {
            N = {
                className: "sand-126k92a sand-j0a0fe sand-euugli"
            };
            e[39] = N;
        } else {
            N = e[39];
        }
        const C = N.className;
        let S;
        if (e[40] !== name) {
            S = <Wt1Component name={name}/>;
            e[40] = name;
            e[41] = S;
        } else {
            S = e[41];
        }
        let y;
        if (e[42] === Symbol.for("react.memo_cache_sentinel")) {
            y = {
                className: "sand-4b2ntj"
            };
            e[42] = y;
        } else {
            y = e[42];
        }
        let v;
        if (e[43] !== u) {
            v = <span className={y.className}>{u}</span>;
            e[43] = u;
            e[44] = v;
        } else {
            v = e[44];
        }
        let z;
        if (e[45] !== S || e[46] !== v) {
            z = <span className={C}>{S}{v}</span>;
            e[45] = S;
            e[46] = v;
            e[47] = z;
        } else {
            z = e[47];
        }
        let M;
        if (e[48] !== z || e[49] !== E) {
            M = <div className={P}>{E}{z}</div>;
            e[48] = z;
            e[49] = E;
            e[50] = M;
        } else {
            M = e[50];
        }
        b = <div>{M}{i && f ? <div className={r_2("sand-json-tree__children", "sand-13k8ehh sand-7coems sand-pilrb4 sand-1t7ytsu sand-gvg6ma")}>{j.map(([W, value_1])=><Yt1Component key={W} defaultExpandedDepth={defaultExpandedDepth} depth={depth + 1} name={W} value={value_1}/>)}{k > 0 ? <div className="sand-78zum5 sand-1cy8zhl sand-euugli sand-f7dkkf sand-1e4uaio">{_({
            id: "P1w8a0",
            values: {
                0: k.toLocaleString(eY())
            }
        })}</div> : null}</div> : null}</div>;
        e[17] = _;
        e[18] = d;
        e[19] = defaultExpandedDepth;
        e[20] = depth;
        e[21] = f;
        e[22] = i;
        e[23] = name;
        e[24] = u;
        e[25] = value;
        e[26] = b;
    } else {
        b = e[26];
    }
    return b;
}
function ca(s) {
    return !s;
}
function da(s) {
    if (s.length <= Ve) {
        return s;
    }
    const e = s.slice(0, Ve);
    return new TextDecoder("utf-8", {
        ignoreBOM: true
    }).decode(new TextEncoder().encode(e));
}
const ua = _t((s)=>{
    const e = new TextDecoder("utf-8", {
        fatal: false
    }).decode(s);
    const t = sa(e);
    if (t.status === "ok") {
        return {
            status: "tree",
            value: t.value
        };
    }
    return {
        status: "source",
        text: da(e)
    };
});
function Gs1Component(s) {
    Gs1Component.d = 799;
    const e = c_1.c(2);
    if (!s.isOpen) {
        return null;
    }
    let t;
    if (e[0] !== s) {
        t = <Ws1Component {...s}/>;
        e[0] = s;
        e[1] = t;
    } else {
        t = e[1];
    }
    return t;
}
function Ws1Component(s) {
    Ws1Component.d = 800;
    const e = c_1.c(45);
    const { source, name, downloadName, isOpen, onClose } = s;
    const { _ } = u_1();
    const c = Re(source, isOpen);
    const d = cu(source);
    let m;
    if (e[0] !== c) {
        m = c?.status === "ready" ? ua(c.bytes) : null;
        e[0] = c;
        e[1] = m;
    } else {
        m = e[1];
    }
    const u = m;
    let f;
    e: {
        if (c?.status === "too-large") {
            let p;
            if (e[2] !== downloadName || e[3] !== source) {
                p = <Ae1Component downloadName={downloadName} href={source}/>;
                e[2] = downloadName;
                e[3] = source;
                e[4] = p;
            } else {
                p = e[4];
            }
            let g;
            if (e[5] !== _) {
                g = _({
                    id: "X0/8Ci"
                });
                e[5] = _;
                e[6] = g;
            } else {
                g = e[6];
            }
            let h;
            if (e[7] !== _) {
                h = _({
                    id: "QxMRBI"
                });
                e[7] = _;
                e[8] = h;
            } else {
                h = e[8];
            }
            let w;
            if (e[9] !== p || e[10] !== g || e[11] !== h) {
                w = <U action={p} detail={g} icon="brackets-curly" title={h}/>;
                e[9] = p;
                e[10] = g;
                e[11] = h;
                e[12] = w;
            } else {
                w = e[12];
            }
            f = w;
            break e;
        }
        if (c?.status === "failed") {
            let p;
            if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
                p = <T_1 id="6gRgw8"/>;
                e[13] = p;
            } else {
                p = e[13];
            }
            let g;
            if (e[14] !== d) {
                g = <Le onClick={d} size="sm" variant="secondary">{p}</Le>;
                e[14] = d;
                e[15] = g;
            } else {
                g = e[15];
            }
            let h;
            if (e[16] !== _) {
                h = _({
                    id: "OZ1zWg"
                });
                e[16] = _;
                e[17] = h;
            } else {
                h = e[17];
            }
            let w;
            if (e[18] !== g || e[19] !== h) {
                w = <U action={g} icon="brackets-curly" title={h}/>;
                e[18] = g;
                e[19] = h;
                e[20] = w;
            } else {
                w = e[20];
            }
            f = w;
            break e;
        }
        if (c?.status === "missing") {
            let p;
            if (e[21] !== _) {
                p = _({
                    id: "bks/Jy"
                });
                e[21] = _;
                e[22] = p;
            } else {
                p = e[22];
            }
            let g;
            if (e[23] !== p) {
                g = <U icon="brackets-curly" title={p}/>;
                e[23] = p;
                e[24] = g;
            } else {
                g = e[24];
            }
            f = g;
            break e;
        }
        if (u == null) {
            let p;
            if (e[25] !== _) {
                p = _({
                    id: "zSf+pB"
                });
                e[25] = _;
                e[26] = p;
            } else {
                p = e[26];
            }
            let g;
            if (e[27] !== p) {
                g = <Me label={p}/>;
                e[27] = p;
                e[28] = g;
            } else {
                g = e[28];
            }
            f = g;
            break e;
        }
        if (u.status === "tree") {
            let p;
            if (e[29] === Symbol.for("react.memo_cache_sentinel")) {
                p = {
                    className: "sand-1iyjqo2 sand-2lwn1j"
                };
                e[29] = p;
            } else {
                p = e[29];
            }
            const g = p.className;
            let h;
            if (e[30] === Symbol.for("react.memo_cache_sentinel")) {
                h = {
                    className: "sand-9f619 sand-1xr5p7o sand-yamay9 sand-64bnmy sand-84yb8i sand-13jy36j"
                };
                e[30] = h;
            } else {
                h = e[30];
            }
            let w;
            if (e[31] !== u.value) {
                w = <Ze1 className={g} scrollbarVisibility="hover"><div className={h.className}><Xs1Component defaultExpandedDepth={2} value={u.value}/></div></Ze1>;
                e[31] = u.value;
                e[32] = w;
            } else {
                w = e[32];
            }
            f = w;
            break e;
        }
        let x;
        if (e[33] !== u.text || e[34] !== source) {
            x = <Ot1Component name={source} text={u.text}/>;
            e[33] = u.text;
            e[34] = source;
            e[35] = x;
        } else {
            x = e[35];
        }
        f = x;
    }
    const b = f;
    let j;
    if (e[36] !== downloadName || e[37] !== source) {
        j = <Ae1Component downloadName={downloadName} href={source}/>;
        e[36] = downloadName;
        e[37] = source;
        e[38] = j;
    } else {
        j = e[38];
    }
    let k;
    if (e[39] !== b || e[40] !== isOpen || e[41] !== name || e[42] !== onClose || e[43] !== j) {
        k = <PeComponent actions={j} isOpen={isOpen} onClose={onClose} title={name}>{b}</PeComponent>;
        e[39] = b;
        e[40] = isOpen;
        e[41] = name;
        e[42] = onClose;
        e[43] = j;
        e[44] = k;
    } else {
        k = e[44];
    }
    return k;
}
let Dt = false;
async function ys() {
    const s = await _(()=>import("./chunk-pdf-CyhaVadp.js"), [], import.meta.url);
    if (!Dt && s.GlobalWorkerOptions.workerSrc === "") {
        s.GlobalWorkerOptions.workerSrc = new URL(`${new URL("pdf.worker.min-qwK7q_zL.mjs", import.meta.url).href}`, import.meta.url).href;
        Dt = true;
    }
    return s;
}
async function bs(s) {
    const e = await ys();
    const data = new Uint8Array(s);
    return await e.getDocument({
        data,
        isEvalSupported: false,
        disableAutoFetch: true
    }).promise;
}
const fa = {
    scale: 1,
    viewportWidth: 0,
    viewportHeight: 0,
    devicePixelRatio: 1
};
function ma(s, e) {
    return s.scale === e.scale && s.viewportWidth === e.viewportWidth && s.viewportHeight === e.viewportHeight && s.devicePixelRatio === e.devicePixelRatio;
}
function ha({ live, deferred }) {
    if (deferred.viewportWidth > 0 && deferred.viewportHeight > 0) {
        return deferred;
    }
    return live;
}
function Ot(target, e) {
    return target.displayScale === e.displayScale && target.devicePixelRatio === e.devicePixelRatio && target.viewportWidth === e.viewportWidth && target.viewportHeight === e.viewportHeight;
}
const pa = 8;
const At = 1 << 24;
const It = 32767;
function qt(s) {
    return s > 0;
}
function xa(pageSize, target) {
    const t = pageSize.width * pageSize.height;
    const n = target.displayScale * target.devicePixelRatio;
    const a = qt(n) ? n : 1;
    if (!qt(t)) {
        return a;
    }
    const l = target.viewportWidth * target.viewportHeight * target.devicePixelRatio ** 2;
    const r = l > 0 ? Math.min(At, l * pa) : At;
    return Math.min(a, Math.sqrt(r / t), It / pageSize.width, It / pageSize.height);
}
function ga(s, target) {
    const t = s.getViewport({
        scale: 1
    });
    const pageSize = {
        width: t.width,
        height: t.height
    };
    const viewport = s.getViewport({
        scale: xa(pageSize, target)
    });
    return {
        pageSize,
        viewport,
        canvasWidth: Math.max(1, Math.floor(viewport.width)),
        canvasHeight: Math.max(1, Math.floor(viewport.height))
    };
}
async function wa({ page, container, viewport }) {
    const n = await ys();
    container.replaceChildren();
    const a = new n.TextLayer({
        textContentSource: page.streamTextContent(),
        container,
        viewport
    });
    return {
        rendered: a.render(),
        cancel () {
            a.cancel();
        }
    };
}
const ya = c_3({
    name: "pdf-viewer-scroll-page",
    delayMs: 0
});
const js = 0.25;
const ba = 4;
const tt = 0.25;
const ja = 0.5;
const ka = 4;
const rootMargin = "400px 0px";
function Sa(scale) {
    return Math.round(scale * 4) / 4 || js;
}
function ks() {
    const window_devicePixelRatio = window.devicePixelRatio;
    if (Number.isFinite(window_devicePixelRatio) && window_devicePixelRatio > 0) {
        return window_devicePixelRatio;
    }
    return 1;
}
function Na(s, e, t) {
    const n = e.width - 32;
    const a = {
        scale: n > 0 ? q(n / t.width, js, ba) : s.scale,
        viewportWidth: e.width,
        viewportHeight: e.height,
        devicePixelRatio: ks()
    };
    if (ma(s, a)) {
        return s;
    }
    return a;
}
const at = {
    status: "loading"
};
const _a = ()=>()=>{};
const Pa = ()=>()=>{};
const $t = ()=>at;
const it = new WeakMap;
const Ca = 2;
const Ea = 200;
const _e = new Map;
function vs(s) {
    const e = _e.get(s);
    if (e == null) {
        return null;
    }
    _e.delete(s);
    e.reparse.dispose();
    return e.ready;
}
function bt(s) {
    vs(s)?.doc.destroy();
}
function za(s, e) {
    bs(s).then((doc)=>{
        if (_e.get(s) !== e) {
            doc.destroy();
            return;
        }
        const n = it.get(e.ready.doc);
        if (n != null) {
            it.set(doc, n);
        }
        _e.set(s, {
            ready: {
                ...e.ready,
                doc
            },
            reparse: e.reparse
        });
        e.ready.doc.destroy();
    }, (t)=>{
        d0(t, {
            level: "warning",
            tags: {
                sand_area: "pdf-viewer"
            }
        });
        if (_e.get(s) === e) {
            bt(s);
        }
    });
}
function La(bytes, ready) {
    bt(bytes);
    const t = {
        ready,
        reparse: r_3.schedule(Ea, ()=>{
            za(bytes, t);
        })
    };
    _e.set(bytes, t);
    for (const n of _e.keys()){
        if (_e.size <= Ca) {
            break;
        }
        bt(n);
    }
}
function Ma(bytes) {
    const e = c_2(_e.get(bytes)?.ready ?? at);
    let t = 0;
    let n = 0;
    const a = async (l)=>{
        let r = null;
        try {
            r = await bs(bytes);
            if (t !== l || n === 0) {
                r.destroy();
                return;
            }
            const c = (await r.getPage(1)).getViewport({
                scale: 1
            });
            if (t !== l || n === 0) {
                r.destroy();
                return;
            }
            const doc = r;
            r = null;
            e.set({
                status: "ready",
                doc,
                baseSize: {
                    width: c.width,
                    height: c.height
                }
            });
        } catch  {
            r?.destroy();
            if (t !== l || n === 0) {
                return;
            }
            e.set({
                status: "error"
            });
        }
    };
    return {
        getSnapshot: e.get,
        subscribe: e.subscribe,
        arm: ()=>{
            const l = n === 0;
            n += 1;
            if (l) {
                const i = vs(bytes);
                e.set(i ?? at);
                t += 1;
                if (i == null) {
                    a(t);
                }
            }
            let r = true;
            return ()=>{
                if (!r || (r = false, n -= 1, n !== 0)) {
                    return;
                }
                t += 1;
                const i = e.get();
                e.set(at);
                if (i.status === "ready") {
                    La(bytes, i);
                }
            };
        }
    };
}
function SsComponent(s) {
    SsComponent.d = 806;
    const e = c_1.c(5);
    const { source, name, downloadName, isOpen, onClose } = s;
    if (!isOpen) {
        return null;
    }
    let i;
    if (e[0] !== downloadName || e[1] !== name || e[2] !== onClose || e[3] !== source) {
        i = <NsComponent key={source} downloadName={downloadName} name={name} onClose={onClose} source={source}/>;
        e[0] = downloadName;
        e[1] = name;
        e[2] = onClose;
        e[3] = source;
        e[4] = i;
    } else {
        i = e[4];
    }
    return i;
}
function NsComponent(s) {
    NsComponent.d = 801;
    const e = c_1.c(48);
    const { source, name, downloadName, onClose } = s;
    const { _ } = u_1();
    const { _: __1 } = u_1();
    const c = Re(source, true);
    const d = cu(source);
    let m;
    if (e[0] !== c) {
        m = c?.status === "ready" ? Ma(c.bytes) : null;
        e[0] = c;
        e[1] = m;
    } else {
        m = e[1];
    }
    const u = m;
    const documentState = r_1.useSyncExternalStore(u?.subscribe ?? _a, u?.getSnapshot ?? $t, u?.getSnapshot ?? $t);
    i_2(u?.arm ?? Pa);
    const b = documentState.status === "ready" ? documentState.doc : null;
    const j = documentState.status === "ready" ? documentState.baseSize : null;
    const [k, setK] = r_1.useState(fa);
    const deferred = r_1.useDeferredValue(k);
    const [g, setG] = r_1.useState(1);
    const [w, setW] = r_1.useState(1);
    const [E, setE] = r_1.useState(null);
    const CRef = r_1.useRef(null);
    let S;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        S = [];
        e[2] = S;
    } else {
        S = e[2];
    }
    const yRef = r_1.useRef(S);
    const vRef = r_1.useRef(null);
    const numPages = b?.numPages ?? 0;
    let M;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        M = (K)=>{
            setG(($)=>q($ + K, ja, ka));
        };
        e[3] = M;
    } else {
        M = e[3];
    }
    const O = M;
    let W;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        W = (K)=>{
            if (K == null) {
                return;
            }
            const $ = new ResizeObserver(()=>{
                vRef.current = {
                    width: K.clientWidth,
                    height: K.clientHeight
                };
            });
            $.observe(K);
            return ()=>$.disconnect();
        };
        e[4] = W;
    } else {
        W = e[4];
    }
    const attachViewportSlot = W;
    let D;
    if (e[5] !== j || e[6] !== numPages) {
        D = (K)=>{
            CRef.current = K;
            const $ = K?.viewportElement ?? null;
            if ($ == null || j == null) {
                return;
            }
            const ge = (H)=>{
                vRef.current = H;
                setK((Q)=>Na(Q, H, j));
            };
            setE($);
            ge(vRef.current ?? {
                width: $.clientWidth,
                height: $.clientHeight
            });
            const he = new ResizeObserver(()=>{
                ge({
                    width: $.clientWidth,
                    height: $.clientHeight
                });
            });
            he.observe($);
            const J = new AbortController;
            window.addEventListener("resize", ()=>ge({
                    width: $.clientWidth,
                    height: $.clientHeight
                }), {
                signal: J.signal
            });
            let we = null;
            const ke = ()=>{
                we?.removeEventListener("change", Ce);
                we = window.matchMedia(`(resolution: ${ks()}dppx)`);
                we.addEventListener("change", Ce);
            };
            function Ce() {
                if (vRef.current != null) {
                    ge(vRef.current);
                }
                ke();
            }
            ke();
            const De = (H)=>{
                let Q = 1;
                for(let Y = 0; Y < yRef.current.length; Y = Y + 1, Y){
                    const pe = yRef.current[Y];
                    if (pe != null && pe.offsetTop <= H) {
                        Q = Y + 1;
                    }
                }
                setW(Q);
            };
            const Te = ya.wrap(De);
            $.addEventListener("scroll", ()=>{
                Te($.scrollTop + 80);
            }, {
                passive: true,
                signal: J.signal
            });
            const Oe = (H)=>{
                const Q = yRef.current[H - 1];
                if (Q != null) {
                    $.scrollTo({
                        top: Math.max(0, Q.offsetTop - 16)
                    });
                }
            };
            const Ae = (H)=>{
                const Q = a7(H.key, a6());
                if (H.key === "+" || H.key === "=") {
                    H.preventDefault();
                    O(tt);
                } else if (H.key === "-") {
                    H.preventDefault();
                    O(-tt);
                } else if (H.key === "PageDown" || Q === 1) {
                    H.preventDefault();
                    setW((Y)=>{
                        const pe = Math.min(numPages, Y + 1);
                        Oe(pe);
                        return pe;
                    });
                } else if (H.key === "PageUp" || Q === -1) {
                    H.preventDefault();
                    setW((Y)=>{
                        const pe = Math.max(1, Y - 1);
                        Oe(pe);
                        return pe;
                    });
                }
            };
            document.addEventListener("keydown", Ae);
            return ()=>{
                he.disconnect();
                J.abort();
                we?.removeEventListener("change", Ce);
                document.removeEventListener("keydown", Ae);
                Te.dispose();
                if (CRef.current === K) {
                    CRef.current = null;
                }
            };
        };
        e[5] = j;
        e[6] = numPages;
        e[7] = D;
    } else {
        D = e[7];
    }
    const attachScrollArea = D;
    const F = k.scale * g;
    let G;
    let oe;
    if (e[8] !== deferred || e[9] !== k) {
        G = ha({
            live: k,
            deferred
        });
        oe = Sa(G.scale);
        e[8] = deferred;
        e[9] = k;
        e[10] = G;
        e[11] = oe;
    } else {
        G = e[10];
        oe = e[11];
    }
    const textLayerScale = oe;
    const fe = G.scale * g;
    let re;
    if (e[12] !== G.devicePixelRatio || e[13] !== G.viewportHeight || e[14] !== G.viewportWidth || e[15] !== fe) {
        re = {
            displayScale: fe,
            devicePixelRatio: G.devicePixelRatio,
            viewportWidth: G.viewportWidth,
            viewportHeight: G.viewportHeight
        };
        e[12] = G.devicePixelRatio;
        e[13] = G.viewportHeight;
        e[14] = G.viewportWidth;
        e[15] = fe;
        e[16] = re;
    } else {
        re = e[16];
    }
    const rasterTarget = re;
    let ce;
    if (e[17] !== _ || e[18] !== w || e[19] !== b || e[20] !== numPages) {
        ce = b != null ? <><Lt aria-label={_({
            id: "FjkaiT"
        })} icon="magnifying-glass-minus" onClick={()=>O(-tt)} size="sm"/><Nt className="sand-gtd3b9 sand-2b8uid sand-ss6m8b" color="secondary" size="xs">{_({
            id: "zvGLsM",
            values: {
                currentPage: w,
                numPages
            }
        })}</Nt><Lt aria-label={_({
            id: "AWOSPo"
        })} icon="magnifying-glass-plus" onClick={()=>O(tt)} size="sm"/></> : undefined;
        e[17] = _;
        e[18] = w;
        e[19] = b;
        e[20] = numPages;
        e[21] = ce;
    } else {
        ce = e[21];
    }
    const me = ce;
    let Z;
    if (e[22] !== downloadName || e[23] !== source) {
        Z = <Ae1Component downloadName={downloadName} href={source}/>;
        e[22] = downloadName;
        e[23] = source;
        e[24] = Z;
    } else {
        Z = e[24];
    }
    let ee;
    if (e[25] !== _ || e[26] !== numPages) {
        ee = numPages > 0 ? _({
            id: "mrNxhr",
            values: {
                numPages
            }
        }) : undefined;
        e[25] = _;
        e[26] = numPages;
        e[27] = ee;
    } else {
        ee = e[27];
    }
    const isMeasured = k.viewportWidth > 0;
    let B;
    if (e[28] !== __1 || e[29] !== attachScrollArea || e[30] !== c || e[31] !== F || e[32] !== documentState || e[33] !== downloadName || e[34] !== rasterTarget || e[35] !== d || e[36] !== source || e[37] !== isMeasured || e[38] !== textLayerScale || e[39] !== E) {
        B = <SComponent attachScrollArea={attachScrollArea} attachViewportSlot={attachViewportSlot} bytes={c} displayScale={F} documentState={documentState} downloadName={downloadName} href={source} isMeasured={isMeasured} onRetry={d} pageRefs={yRef} rasterTarget={rasterTarget} textLayerScale={textLayerScale} translate={__1} viewportEl={E}/>;
        e[28] = __1;
        e[29] = attachScrollArea;
        e[30] = c;
        e[31] = F;
        e[32] = documentState;
        e[33] = downloadName;
        e[34] = rasterTarget;
        e[35] = d;
        e[36] = source;
        e[37] = isMeasured;
        e[38] = textLayerScale;
        e[39] = E;
        e[40] = B;
    } else {
        B = e[40];
    }
    let de;
    if (e[41] !== name || e[42] !== onClose || e[43] !== Z || e[44] !== ee || e[45] !== B || e[46] !== me) {
        de = <PeComponent actions={Z} isOpen onClose={onClose} subtitle={ee} title={name} toolbar={me}>{B}</PeComponent>;
        e[41] = name;
        e[42] = onClose;
        e[43] = Z;
        e[44] = ee;
        e[45] = B;
        e[46] = me;
        e[47] = de;
    } else {
        de = e[47];
    }
    return de;
}
function SComponent(s) {
    SComponent.d = 802;
    const e = c_1.c(54);
    const { translate, bytes, documentState, displayScale, textLayerScale, rasterTarget, isMeasured, attachViewportSlot, attachScrollArea, viewportEl, pageRefs, href, downloadName, onRetry } = s;
    if (bytes?.status === "too-large") {
        let N;
        if (e[0] !== downloadName || e[1] !== href) {
            N = <Ae1Component downloadName={downloadName} href={href}/>;
            e[0] = downloadName;
            e[1] = href;
            e[2] = N;
        } else {
            N = e[2];
        }
        let C;
        if (e[3] !== translate) {
            C = translate({
                id: "Ot2xhW"
            });
            e[3] = translate;
            e[4] = C;
        } else {
            C = e[4];
        }
        let S;
        if (e[5] !== translate) {
            S = translate({
                id: "CxqhaM"
            });
            e[5] = translate;
            e[6] = S;
        } else {
            S = e[6];
        }
        let y;
        if (e[7] !== N || e[8] !== C || e[9] !== S) {
            y = <U action={N} detail={C} icon="file-pdf" title={S}/>;
            e[7] = N;
            e[8] = C;
            e[9] = S;
            e[10] = y;
        } else {
            y = e[10];
        }
        return y;
    }
    if (bytes?.status === "failed") {
        let N;
        if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
            N = <T_1 id="6gRgw8"/>;
            e[11] = N;
        } else {
            N = e[11];
        }
        let C;
        if (e[12] !== onRetry) {
            C = <Le onClick={onRetry} size="sm" variant="secondary">{N}</Le>;
            e[12] = onRetry;
            e[13] = C;
        } else {
            C = e[13];
        }
        let S;
        if (e[14] !== translate) {
            S = translate({
                id: "OZ1zWg"
            });
            e[14] = translate;
            e[15] = S;
        } else {
            S = e[15];
        }
        let y;
        if (e[16] !== C || e[17] !== S) {
            y = <U action={C} icon="file-pdf" title={S}/>;
            e[16] = C;
            e[17] = S;
            e[18] = y;
        } else {
            y = e[18];
        }
        return y;
    }
    if (bytes?.status === "missing" || documentState.status === "error") {
        let N;
        if (e[19] !== documentState.status || e[20] !== translate) {
            N = documentState.status === "error" ? translate({
                id: "YA05MO"
            }) : translate({
                id: "bks/Jy"
            });
            e[19] = documentState.status;
            e[20] = translate;
            e[21] = N;
        } else {
            N = e[21];
        }
        let C;
        if (e[22] !== N) {
            C = <U icon="file-pdf" title={N}/>;
            e[22] = N;
            e[23] = C;
        } else {
            C = e[23];
        }
        return C;
    }
    if (documentState.status !== "ready") {
        let N;
        if (e[24] === Symbol.for("react.memo_cache_sentinel")) {
            N = {
                className: "sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-2lwn1j"
            };
            e[24] = N;
        } else {
            N = e[24];
        }
        let C;
        if (e[25] !== translate) {
            C = translate({
                id: "IGQBHQ"
            });
            e[25] = translate;
            e[26] = C;
        } else {
            C = e[26];
        }
        let S;
        if (e[27] !== C) {
            S = <Me label={C}/>;
            e[27] = C;
            e[28] = S;
        } else {
            S = e[28];
        }
        let y;
        if (e[29] !== attachViewportSlot || e[30] !== S) {
            y = <div {...N} ref={attachViewportSlot}>{S}</div>;
            e[29] = attachViewportSlot;
            e[30] = S;
            e[31] = y;
        } else {
            y = e[31];
        }
        return y;
    }
    const { doc, baseSize } = documentState;
    let g;
    if (e[32] === Symbol.for("react.memo_cache_sentinel")) {
        g = {
            className: "sand-1iyjqo2 sand-2lwn1j sand-1ua6jya"
        };
        e[32] = g;
    } else {
        g = e[32];
    }
    const g_className = g.className;
    let w;
    if (e[33] === Symbol.for("react.memo_cache_sentinel")) {
        w = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-ou54vl sand-1cnzs8 sand-84yb8i sand-f7dkkf sand-v54qhq"
        };
        e[33] = w;
    } else {
        w = e[33];
    }
    let P;
    if (e[34] !== baseSize || e[35] !== displayScale || e[36] !== doc || e[37] !== isMeasured || e[38] !== pageRefs || e[39] !== rasterTarget || e[40] !== textLayerScale || e[41] !== viewportEl) {
        let N;
        if (e[43] !== baseSize || e[44] !== displayScale || e[45] !== doc || e[46] !== pageRefs || e[47] !== rasterTarget || e[48] !== textLayerScale || e[49] !== viewportEl) {
            N = (C, S)=><PsComponent key={S} baseSize={baseSize} doc={doc} displayScale={displayScale} pageRefs={pageRefs} pageNumber={S + 1} rasterTarget={rasterTarget} textLayerScale={textLayerScale} viewport={viewportEl}/>;
            e[43] = baseSize;
            e[44] = displayScale;
            e[45] = doc;
            e[46] = pageRefs;
            e[47] = rasterTarget;
            e[48] = textLayerScale;
            e[49] = viewportEl;
            e[50] = N;
        } else {
            N = e[50];
        }
        P = <div className={w.className}>{Array.from({
            length: isMeasured ? doc.numPages : 0
        }, N)}</div>;
        e[34] = baseSize;
        e[35] = displayScale;
        e[36] = doc;
        e[37] = isMeasured;
        e[38] = pageRefs;
        e[39] = rasterTarget;
        e[40] = textLayerScale;
        e[41] = viewportEl;
        e[42] = P;
    } else {
        P = e[42];
    }
    let E;
    if (e[51] !== attachScrollArea || e[52] !== P) {
        E = <Ze1 className={g_className} direction="both" ref={attachScrollArea} scrollbarVisibility="hover">{P}</Ze1>;
        e[51] = attachScrollArea;
        e[52] = P;
        e[53] = E;
    } else {
        E = e[53];
    }
    return E;
}
function Wt(pageRefs, e, t) {
    pageRefs.current[e] = t;
}
function Ta(pageRefs, e) {
    return pageRefs.current[e] ?? null;
}
function PsComponent(s) {
    PsComponent.d = 805;
    const e = c_1.c(31);
    const { doc, pageNumber, displayScale, textLayerScale, rasterTarget, baseSize, viewport, pageRefs } = s;
    const [m, setM] = r_1.useState(false);
    const [f, setF] = r_1.useState(null);
    const j = f ?? baseSize;
    let k;
    if (e[0] !== pageNumber || e[1] !== pageRefs || e[2] !== viewport) {
        k = (v)=>{
            Wt(pageRefs, pageNumber - 1, v);
            if (v == null || viewport == null) {
                return;
            }
            const z = new IntersectionObserver((M)=>{
                const O = M[0];
                if (O != null) {
                    setM(O.isIntersecting);
                }
            }, {
                root: viewport,
                rootMargin
            });
            z.observe(v);
            return ()=>{
                z.disconnect();
                if (Ta(pageRefs, pageNumber - 1) === v) {
                    Wt(pageRefs, pageNumber - 1, null);
                }
            };
        };
        e[0] = pageNumber;
        e[1] = pageRefs;
        e[2] = viewport;
        e[3] = k;
    } else {
        k = e[3];
    }
    const x = k;
    let p;
    if (e[4] !== baseSize) {
        p = (v)=>{
            setF((z)=>{
                const M = z ?? baseSize;
                if (M.width === v.width && M.height === v.height) {
                    return z;
                }
                return v;
            });
        };
        e[4] = baseSize;
        e[5] = p;
    } else {
        p = e[5];
    }
    const onPageSize = p;
    let h;
    let w;
    let P;
    let E;
    if (e[6] !== displayScale || e[7] !== j.height || e[8] !== j.width) {
        const v = {
            className: "sand-1n2onr6 sand-83z2og sand-a7y4k sand-1cum3z5 sand-b3r6kr sand-2lah0s"
        };
        w = j.width * displayScale;
        h = j.height * displayScale;
        P = {
            ...v.style,
            width: w,
            height: h,
            "--total-scale-factor": String(displayScale),
            "--scale-round-x": "1px",
            "--scale-round-y": "1px"
        };
        E = r_2("sand-pdf-page", v.className);
        e[6] = displayScale;
        e[7] = j.height;
        e[8] = j.width;
        e[9] = h;
        e[10] = w;
        e[11] = P;
        e[12] = E;
    } else {
        h = e[9];
        w = e[10];
        P = e[11];
        E = e[12];
    }
    let N;
    if (e[13] !== h || e[14] !== w || e[15] !== doc || e[16] !== m || e[17] !== pageNumber || e[18] !== rasterTarget || e[19] !== onPageSize || e[20] !== textLayerScale) {
        N = m ? <><CsComponent displayHeight={h} displayWidth={w} doc={doc} onPageSize={onPageSize} pageNumber={pageNumber} target={rasterTarget}/><EsComponent key={textLayerScale} doc={doc} pageNumber={pageNumber} scale={textLayerScale}/></> : null;
        e[13] = h;
        e[14] = w;
        e[15] = doc;
        e[16] = m;
        e[17] = pageNumber;
        e[18] = rasterTarget;
        e[19] = onPageSize;
        e[20] = textLayerScale;
        e[21] = N;
    } else {
        N = e[21];
    }
    let C;
    if (e[22] === Symbol.for("react.memo_cache_sentinel")) {
        C = r_2("sand-pdf-page__badge", "sand-10l6tqk sand-1nrll8i sand-qo3gd sand-uuh30 sand-1nn3v0j sand-1120s5i sand-mzvs34 sand-f159sx sand-149ho13 sand-8qq8ib sand-60d0xz sand-47corl sand-htitgo");
        e[22] = C;
    } else {
        C = e[22];
    }
    let S;
    if (e[23] !== pageNumber) {
        S = <span className={C}><Nt size="xs" weight="regular">{pageNumber}</Nt></span>;
        e[23] = pageNumber;
        e[24] = S;
    } else {
        S = e[24];
    }
    let y;
    if (e[25] !== x || e[26] !== P || e[27] !== E || e[28] !== N || e[29] !== S) {
        y = <div className={E} ref={x} style={P}>{N}{S}</div>;
        e[25] = x;
        e[26] = P;
        e[27] = E;
        e[28] = N;
        e[29] = S;
        e[30] = y;
    } else {
        y = e[30];
    }
    return y;
}
function Ra({ doc, pageNumber, target, onPageSize, setImage }) {
    const canvas = document.createElement("canvas");
    let r = null;
    let i = false;
    let c = false;
    (async ()=>{
        try {
            const d = await doc.getPage(pageNumber);
            if (i) {
                return;
            }
            const m = ga(d, target);
            onPageSize(m.pageSize);
            const canvasContext = canvas.getContext("2d");
            if (canvasContext == null || (canvas.width = m.canvasWidth, canvas.height = m.canvasHeight, r = d.render({
                canvas,
                canvasContext,
                viewport: m.viewport
            }), await r.promise, c = true, i)) {
                return;
            }
            const url = canvas.toDataURL("image/png");
            canvas.width = 0;
            canvas.height = 0;
            setImage({
                target,
                url
            });
        } catch  {}
    })();
    return ()=>{
        i = true;
        c || r?.cancel();
    };
}
function CsComponent(s) {
    CsComponent.d = 803;
    const e = c_1.c(18);
    const { doc, pageNumber, target, displayWidth, displayHeight, onPageSize } = s;
    let c;
    if (e[0] !== doc || e[1] !== pageNumber || e[2] !== target) {
        c = ()=>{
            const p = pageNumber === 1 ? it.get(doc) : undefined;
            if (p != null && Ot(p.target, target)) {
                return p;
            }
            return null;
        };
        e[0] = doc;
        e[1] = pageNumber;
        e[2] = target;
        e[3] = c;
    } else {
        c = e[3];
    }
    const [d, setD] = r_1.useState(c);
    let u;
    if (e[4] !== doc || e[5] !== d || e[6] !== onPageSize || e[7] !== pageNumber || e[8] !== target) {
        u = (p)=>{
            if (p == null || d != null && Ot(d.target, target)) {
                return;
            }
            const g = pageNumber === 1 && d == null;
            return Ra({
                doc,
                pageNumber,
                target,
                onPageSize,
                setImage: (h)=>{
                    if (g) {
                        it.set(doc, h);
                    }
                    setD(h);
                }
            });
        };
        e[4] = doc;
        e[5] = d;
        e[6] = onPageSize;
        e[7] = pageNumber;
        e[8] = target;
        e[9] = u;
    } else {
        u = e[9];
    }
    const f = u;
    let b;
    if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
        b = {
            className: "sand-10l6tqk sand-10a8y8t"
        };
        e[10] = b;
    } else {
        b = e[10];
    }
    const j = b;
    let k;
    if (e[11] !== displayHeight || e[12] !== displayWidth || e[13] !== d) {
        k = d != null ? <img alt="" aria-hidden className="sand-1lliihq" src={d.url} style={{
            width: displayWidth,
            height: displayHeight
        }}/> : null;
        e[11] = displayHeight;
        e[12] = displayWidth;
        e[13] = d;
        e[14] = k;
    } else {
        k = e[14];
    }
    let x;
    if (e[15] !== f || e[16] !== k) {
        x = <div className={j.className} ref={f} style={j.style}>{k}</div>;
        e[15] = f;
        e[16] = k;
        e[17] = x;
    } else {
        x = e[17];
    }
    return x;
}
function Da({ doc, pageNumber, scale, container }) {
    let a = null;
    let l = false;
    (async ()=>{
        try {
            const page = await doc.getPage(pageNumber);
            if (l) {
                return;
            }
            a = await wa({
                page,
                container,
                viewport: page.getViewport({
                    scale
                })
            });
            if (l) {
                a.cancel();
            }
            await a.rendered;
        } catch  {}
    })();
    return ()=>{
        l = true;
        a?.cancel();
    };
}
function EsComponent(s) {
    EsComponent.d = 804;
    const e = c_1.c(4);
    const { doc, pageNumber, scale } = s;
    let l;
    if (e[0] !== doc || e[1] !== pageNumber || e[2] !== scale) {
        const r = (container)=>{
            if (container != null) {
                return Da({
                    doc,
                    pageNumber,
                    scale,
                    container
                });
            }
        };
        l = <div className="sand-pdf-page__text" ref={r}/>;
        e[0] = doc;
        e[1] = pageNumber;
        e[2] = scale;
        e[3] = l;
    } else {
        l = e[3];
    }
    return l;
}
const Se = -1;
function zs({ anchor, focus }) {
    return {
        top: Math.min(anchor.row, focus.row),
        bottom: Math.max(anchor.row, focus.row),
        left: Math.min(anchor.col, focus.col),
        right: Math.max(anchor.col, focus.col)
    };
}
function Oa(s, e, t) {
    return e >= s.top && e <= s.bottom && t >= s.left && t <= s.right;
}
function Et(s) {
    return (s.bottom - s.top + 1) * (s.right - s.left + 1);
}
const Ht = 26;
function Aa(col) {
    let e = "";
    let t = col;
    do {
        e = String.fromCharCode(65 + t % Ht) + e;
        t = Math.floor(t / Ht) - 1;
    }while (t >= 0)
    return e;
}
function Vt({ row, col }) {
    return `${Aa(col)}${row + 2}`;
}
function Ia(s) {
    const e = Vt({
        row: s.top,
        col: s.left
    });
    if (Et(s) === 1) {
        return e;
    }
    return `${e}:${Vt({
        row: s.bottom,
        col: s.right
    })}`;
}
function je({ row, col }, bounds) {
    return {
        row: Math.min(Math.max(row, Se), bounds.rowCount - 1),
        col: Math.min(Math.max(col, 0), bounds.columnCount - 1)
    };
}
function qa(s, e, bounds, n, a) {
    const l = s.ctrlKey || s.metaKey;
    const r = bounds.rowCount - 1;
    const i = bounds.columnCount - 1;
    const c = a7(s.key, n);
    if (c != null) {
        return je(l ? {
            row: e.row,
            col: c > 0 ? i : 0
        } : {
            row: e.row,
            col: e.col + c
        }, bounds);
    }
    switch(s.key){
        case "ArrowUp":
            return je({
                row: l ? Se : e.row - 1,
                col: e.col
            }, bounds);
        case "ArrowDown":
            return je({
                row: l ? r : e.row + 1,
                col: e.col
            }, bounds);
        case "PageUp":
            return je({
                row: e.row - a,
                col: e.col
            }, bounds);
        case "PageDown":
            return je({
                row: e.row + a,
                col: e.col
            }, bounds);
        case "Home":
            return je({
                row: l ? Se : e.row,
                col: 0
            }, bounds);
        case "End":
            return je({
                row: l ? r : e.row,
                col: i
            }, bounds);
        default:
            return null;
    }
}
function $a(s) {
    if (/[\t\n\r"]/.test(s)) {
        return `"${s.replaceAll('"', '""')}"`;
    }
    return s;
}
function Wa(s, e) {
    const t = zs(s);
    if (Et(t) === 1) {
        return e(t.top, t.left);
    }
    const n = [];
    for(let a = t.top; a <= t.bottom; a += 1){
        const l = [];
        for(let r = t.left; r <= t.right; r += 1){
            l.push($a(e(a, r)));
        }
        n.push(l.join("	"));
    }
    return n.join(`
`);
}
const Ha = 7;
const Va = 16;
const Fa = 56;
const Ba = 360;
const Xa = /^[-+]?[$\u20AC£¥]?\d[\d,]*(\.\d+)?%?$/;
function Ga(s, e, length) {
    const n = Array.from({
        length
    }, (r, i)=>(s[i] ?? "").length);
    const a = Array.from({
        length
    }, ()=>0);
    const l = Array.from({
        length
    }, ()=>0);
    for (const r of e){
        const i = Math.min(r.length, length);
        for(let c = 0; c < i; c += 1){
            const d = r[c] ?? "";
            if (d.length !== 0) {
                l[c] = (l[c] ?? 0) + 1;
                if (Xa.test(d)) {
                    a[c] = (a[c] ?? 0) + 1;
                }
                if (d.length > (n[c] ?? 0)) {
                    n[c] = d.length;
                }
            }
        }
    }
    return n.map((r, i)=>({
            widthPx: Math.min(Math.max(r * Ha + Va, Fa), Ba),
            isNumeric: (l[i] ?? 0) > 0 && a[i] === l[i]
        }));
}
function Ua(s, e) {
    const t = Math.floor((e.block - s.paddingPx) / s.rowHeightPx) - 1;
    const n = e.inline - s.paddingPx - s.indexWidthPx;
    let a = 0;
    for(let l = 1; l < s.columnStartsPx.length && !((s.columnStartsPx[l] ?? 0) > n); l += 1){
        a = l;
    }
    return je({
        row: t,
        col: a
    }, s.bounds);
}
const Ft = 4;
const Bt = 48;
function Xt({ offset, bandStart, bandEnd }) {
    if (offset < bandStart) {
        return -Math.min(Bt, Ft + (bandStart - offset) / 2);
    }
    if (offset > bandEnd) {
        return Math.min(Bt, Ft + (offset - bandEnd) / 2);
    }
    return 0;
}
function Gt(s, e) {
    if (s.start < e.start + e.leadingInset) {
        return Math.max(0, s.start - e.leadingInset);
    }
    if (s.end > e.start + e.size) {
        return s.end - e.size;
    }
    return null;
}
function Ka(s, e = {}) {
    const t = e.delimiter ?? ",";
    const n = e.maxRows ?? Number.POSITIVE_INFINITY;
    const a = [];
    let l = "";
    let r = [];
    let i = false;
    let c = false;
    const d = ()=>{
        r.push(l);
        l = "";
    };
    const m = ()=>{
        d();
        a.push(r);
        r = [];
        c = false;
    };
    for(let u = 0; u < s.length && !(a.length >= n); u += 1){
        const f = s[u];
        if (i) {
            if (f === '"') {
                if (s[u + 1] === '"') {
                    l += '"';
                    u += 1;
                } else {
                    i = false;
                }
            } else {
                l += f;
            }
            continue;
        }
        if (f === '"') {
            i = true;
            c = true;
            continue;
        }
        if (f === t) {
            c = true;
            d();
            continue;
        }
        if (f === `
`) {
            m();
            continue;
        }
        if (f === "\r") {
            if (s[u + 1] === `
`) {
                u += 1;
            }
            m();
            continue;
        }
        l += f;
        c = true;
    }
    if (a.length < n && (c || l.length > 0 || r.length > 0)) {
        m();
    }
    return a;
}
function Za(s) {
    let e = 0;
    let t = false;
    let n = false;
    for(let a = 0; a < s.length; a += 1){
        const l = s[a];
        if (l === '"') {
            if (t && s[a + 1] === '"') {
                a += 1;
                continue;
            }
            t = !t;
            n = true;
            continue;
        }
        if (!t && (l === `
` || l === "\r")) {
            if (l === "\r" && s[a + 1] === `
`) {
                a += 1;
            }
            e += 1;
            n = false;
            continue;
        }
        n = true;
    }
    if (n) {
        return e + 1;
    }
    return e;
}
function Qa(s, e = ",") {
    const t = s.split(/\r?\n/).find((r)=>r.length > 0) ?? "";
    const n = [
        e,
        ",",
        "	",
        ";",
        "|"
    ];
    let a = e;
    let l = -1;
    for (const r of n){
        const i = Ya(t, r);
        if (i > l) {
            a = r;
            l = i;
        }
    }
    if (l > 0) {
        return a;
    }
    return e;
}
function Ya(s, e) {
    let t = 0;
    let n = false;
    for(let a = 0; a < s.length; a += 1){
        const l = s[a];
        if (l === '"') {
            if (n && s[a + 1] === '"') {
                a += 1;
                continue;
            }
            n = !n;
            continue;
        }
        if (!n && l === e) {
            t += 1;
        }
    }
    return t;
}
async function Ja(s, e, maxRows) {
    if (jj(e)) {
        const l = new TextDecoder("utf-8", {
            fatal: false
        }).decode(s);
        const delimiter = Qa(l, jk(e));
        const i = Ka(l, {
            delimiter,
            maxRows
        });
        const totalRows = i.length < maxRows ? i.length : Za(l);
        return [
            {
                name: i_1._({
                    id: "0LfCxn"
                }),
                rows: i,
                totalRows
            }
        ];
    }
    const n = await _(()=>import("./chunk-xlsx-UGAa5ljQ.js"), [], import.meta.url);
    const a = n.read(s, {
        type: "array"
    });
    return a.SheetNames.map((l)=>{
        const r = a.Sheets[l];
        if (r == null) {
            return {
                name: l,
                rows: [],
                totalRows: 0
            };
        }
        const i = n.utils.sheet_to_json(r, {
            header: 1,
            blankrows: false,
            defval: "",
            raw: false
        });
        const rows = i.slice(0, maxRows).map((d)=>d.map((m)=>{
                if (m == null) {
                    return "";
                }
                return String(m);
            }));
        return {
            name: l,
            rows,
            totalRows: i.length
        };
    });
}
const Ls = {
    status: "loading"
};
const el = {
    arm: ()=>()=>{},
    subscribe: ()=>()=>{},
    getSnapshot: ()=>Ls
};
function tl(s, e, t) {
    const n = c_2(Ls);
    let a = false;
    return {
        getSnapshot: n.get,
        subscribe: n.subscribe,
        arm: ()=>{
            if (a) {
                return ()=>{};
            }
            a = true;
            Ja(s, e, t).then((sheets)=>{
                n.set({
                    status: "ready",
                    sheets
                });
            }).catch((l)=>{
                d0(l, {
                    level: "warning",
                    tags: {
                        sand_area: "table-viewer"
                    }
                });
                n.set({
                    status: "error"
                });
            });
            return ()=>{};
        }
    };
}
const sl = _t(()=>new Map);
function nl(s, source, t) {
    const n = sl(s);
    const a = `${t}:${source}`;
    const l = n.get(a);
    if (l != null) {
        return l;
    }
    const r = tl(s, source, t);
    n.set(a, r);
    return r;
}
function useAl(s, source, t) {
    const n = c_1.c(4);
    let a;
    if (n[0] !== s || n[1] !== source || n[2] !== t) {
        a = s == null ? el : nl(s, source, t);
        n[0] = s;
        n[1] = source;
        n[2] = t;
        n[3] = a;
    } else {
        a = n[3];
    }
    const l = a;
    const r = r_1.useSyncExternalStore(l.subscribe, l.getSnapshot, l.getSnapshot);
    i_2(l.arm);
    return r;
}
const ll = {
    k1xSpc: "sand-rvj5dj",
    $$css: true
};
const rl = {
    kmuXW: "sand-2lah0s",
    $$css: true
};
const il = 10000;
const ol = 200;
const ye = 28;
const paddingPx = 12;
const cl = 8;
const dl = 40;
const COPY_SHORTCUT_LABEL = ae ? "⌘C" : "Ctrl+C";
const fl = gz((s)=>new Intl.NumberFormat(s, {
        maximumFractionDigits: 0
    }));
const ml = w({
    name: "sheet-drag-edge-scroll"
});
const se = {
    address: {
        kmuXW: "sand-2lah0s",
        k7Eaqz: "sand-1nb6za0",
        kB7OPa: "sand-9f619",
        kLKAdn: "sand-1nn3v0j",
        kGO01o: "sand-1120s5i",
        kZCmMZ: "sand-25sj25",
        kwRFfy: "sand-1icxu4v",
        kaIpWk: "sand-1i6gnc1",
        kWkggS: "sand-1tiofj7",
        kMwMTN: "sand-1o0liin",
        k9WMMc: "sand-2b8uid",
        kcqcaj: "sand-ss6m8b",
        $$css: true
    },
    value: {
        kzQI83: "sand-1iyjqo2",
        k7Eaqz: "sand-euugli",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        kcqcaj: "sand-ss6m8b",
        kMwMTN: "sand-tyxrsu",
        kfSwDN: "sand-1hx0egp",
        $$css: true
    },
    valueQuiet: {
        kMwMTN: "sand-169k319",
        $$css: true
    },
    valueExpandedText: {
        kogj98: "sand-1ghz6dp",
        kLKAdn: "sand-1y1aw1k",
        kGO01o: "sand-1a8lsjc",
        kZCmMZ: "sand-1g0dm76",
        kwRFfy: "sand-pdmqnj",
        khDVqt: "sand-126k92a",
        kHjlTd: "sand-j0a0fe",
        kcqcaj: "sand-ss6m8b",
        kMwMTN: "sand-tyxrsu",
        kfSwDN: "sand-1hx0egp",
        $$css: true
    },
    row: (s)=>[
            ll,
            {
                kumcoG: s != null ? "sand-qketvx" : s,
                $$css: true
            },
            {
                "--x-gridTemplateColumns": s ?? undefined
            }
        ],
    headerRow: {
        kVAEAm: "sand-7wzq59",
        k87sOh: "sand-13vifvy",
        kY2c9j: "sand-htitgo",
        $$css: true
    },
    spacer: (s)=>[
            rl,
            {
                kZKoxP: s != null ? "sand-16ye13r" : s,
                $$css: true
            },
            {
                "--x-height": ((e)=>{
                    if (typeof e === "number") {
                        return `${e}px`;
                    }
                    return e ?? undefined;
                })(s)
            }
        ],
    cell: {
        kB7OPa: "sand-9f619",
        kZKoxP: "sand-1fgtraw",
        kLKAdn: "sand-1yrsyyn",
        kGO01o: "sand-10b6aqq",
        kZCmMZ: "sand-mzvs34",
        kwRFfy: "sand-f159sx",
        kt9PQ7: "sand-1hkp6id",
        kfdmCh: "sand-1q0q8m5",
        kL6WhQ: "sand-19145p9",
        ke9TFa: "sand-qm0940",
        k8ry5P: "sand-18b5jzi",
        kBCPoo: "sand-3dt9c2",
        khDVqt: "sand-1sdyfia",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        k9WMMc: "sand-1yc453h",
        $$css: true
    },
    cellNumeric: {
        k9WMMc: "sand-p4054r",
        $$css: true
    },
    headerCell: {
        kWkggS: "sand-s6r99b",
        kL6WhQ: "sand-1kp61ed",
        kMwMTN: "sand-tyxrsu",
        k63SB2: "sand-1rhlpx6",
        $$css: true
    },
    stickyCellActive: {
        kWkggS: "sand-1jgat75",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    cellInRange: {
        kWkggS: "sand-ctg3rd",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    cellFocus: {
        kGVxlE: "sand-1ivh6bt",
        $$css: true
    }
};
function MsComponent(s) {
    MsComponent.d = 809;
    const e = c_1.c(8);
    const { source } = s;
    let n;
    if (e[0] !== source) {
        n = {
            source,
            index: 0
        };
        e[0] = source;
        e[1] = n;
    } else {
        n = e[1];
    }
    const [a, setA] = r_1.useState(n);
    if (!s.isOpen) {
        return null;
    }
    const chosenIndex = a.source === source ? a.index : 0;
    let onChooseSheet;
    if (e[2] !== source) {
        onChooseSheet = (index)=>setA({
                source,
                index
            });
        e[2] = source;
        e[3] = onChooseSheet;
    } else {
        onChooseSheet = e[3];
    }
    let c;
    if (e[4] !== s || e[5] !== chosenIndex || e[6] !== onChooseSheet) {
        c = <TsComponent {...s} chosenIndex={chosenIndex} onChooseSheet={onChooseSheet}/>;
        e[4] = s;
        e[5] = chosenIndex;
        e[6] = onChooseSheet;
        e[7] = c;
    } else {
        c = e[7];
    }
    return c;
}
function TsComponent(s) {
    TsComponent.d = 807;
    const e = c_1.c(57);
    const { source, name, downloadName, isOpen, onClose, chosenIndex, onChooseSheet } = s;
    const { _ } = u_1();
    const m = Re(source, isOpen);
    const u = cu(source);
    const f = useAl(m?.status === "ready" ? m.bytes : null, source, il + 1);
    const b = f.status === "ready" ? f.sheets : null;
    const j = f.status === "error";
    const k = b != null && chosenIndex < b.length ? chosenIndex : 0;
    const sheet = b?.[k] ?? null;
    let p;
    e: {
        if (sheet == null) {
            p = undefined;
            break e;
        }
        const S = Math.max(0, sheet.totalRows - 1);
        const y = Math.max(0, sheet.rows.length - 1);
        if (y < S) {
            let z;
            if (e[0] !== _ || e[1] !== S || e[2] !== y) {
                const shown = fl().format(y);
                z = _({
                    id: "UU5RmR",
                    values: {
                        rows: S,
                        shown
                    }
                });
                e[0] = _;
                e[1] = S;
                e[2] = y;
                e[3] = z;
            } else {
                z = e[3];
            }
            p = z;
            break e;
        }
        let v;
        if (e[4] !== _ || e[5] !== S) {
            v = _({
                id: "tiruMz",
                values: {
                    rows: S
                }
            });
            e[4] = _;
            e[5] = S;
            e[6] = v;
        } else {
            v = e[6];
        }
        p = v;
    }
    const g = p;
    let h;
    if (e[7] !== k || e[8] !== onChooseSheet || e[9] !== b) {
        h = b != null && b.length > 1 ? <Ze1 className="sand-1pfbilc" direction="horizontal" mapVerticalWheelToHorizontal scrollbarVisibility="hover"><div className="sand-78zum5 sand-6s0dn4 sand-1jnr06f">{b.map((S, y)=><button key={`${S.name}-${y}`} className={r_2({
                0: {
                    className: "sand-2lah0s sand-jyslct sand-ng3xce sand-t9pb60 sand-yqdw3p sand-g8j3zb sand-e2zdcy sand-2vl965 sand-1ypdohk sand-jbqb8w sand-aalx5g sand-169k319"
                },
                1: {
                    className: "sand-2lah0s sand-jyslct sand-ng3xce sand-t9pb60 sand-yqdw3p sand-g8j3zb sand-e2zdcy sand-2vl965 sand-1ypdohk sand-luhinc sand-tyxrsu"
                }
            }[(y === k) << 0].className)} onClick={()=>onChooseSheet(y)} type="button"><We level="caption" weight="regular">{S.name}</We></button>)}</div></Ze1> : undefined;
        e[7] = k;
        e[8] = onChooseSheet;
        e[9] = b;
        e[10] = h;
    } else {
        h = e[10];
    }
    const w = h;
    let P;
    e: {
        if (m?.status === "too-large") {
            let y;
            if (e[11] !== downloadName || e[12] !== source) {
                y = <Ae1Component downloadName={downloadName} href={source}/>;
                e[11] = downloadName;
                e[12] = source;
                e[13] = y;
            } else {
                y = e[13];
            }
            let v;
            if (e[14] !== _) {
                v = _({
                    id: "wvkV+z"
                });
                e[14] = _;
                e[15] = v;
            } else {
                v = e[15];
            }
            let z;
            if (e[16] !== _) {
                z = _({
                    id: "lUvavw"
                });
                e[16] = _;
                e[17] = z;
            } else {
                z = e[17];
            }
            let M;
            if (e[18] !== y || e[19] !== v || e[20] !== z) {
                M = <U action={y} detail={v} icon="table" title={z}/>;
                e[18] = y;
                e[19] = v;
                e[20] = z;
                e[21] = M;
            } else {
                M = e[21];
            }
            P = M;
            break e;
        }
        if (m?.status === "failed") {
            let y;
            if (e[22] === Symbol.for("react.memo_cache_sentinel")) {
                y = <T_1 id="6gRgw8"/>;
                e[22] = y;
            } else {
                y = e[22];
            }
            let v;
            if (e[23] !== u) {
                v = <Le onClick={u} size="sm" variant="secondary">{y}</Le>;
                e[23] = u;
                e[24] = v;
            } else {
                v = e[24];
            }
            let z;
            if (e[25] !== _) {
                z = _({
                    id: "OZ1zWg"
                });
                e[25] = _;
                e[26] = z;
            } else {
                z = e[26];
            }
            let M;
            if (e[27] !== v || e[28] !== z) {
                M = <U action={v} icon="table" title={z}/>;
                e[27] = v;
                e[28] = z;
                e[29] = M;
            } else {
                M = e[29];
            }
            P = M;
            break e;
        }
        if (m?.status === "missing" || j) {
            let y;
            if (e[30] !== _ || e[31] !== j) {
                y = _(j ? {
                    id: "1MuOLy"
                } : {
                    id: "bks/Jy"
                });
                e[30] = _;
                e[31] = j;
                e[32] = y;
            } else {
                y = e[32];
            }
            let v;
            if (e[33] !== y) {
                v = <U icon="table" title={y}/>;
                e[33] = y;
                e[34] = v;
            } else {
                v = e[34];
            }
            P = v;
            break e;
        }
        if (sheet == null) {
            let y;
            if (e[35] !== _) {
                y = _({
                    id: "tUtFbf"
                });
                e[35] = _;
                e[36] = y;
            } else {
                y = e[36];
            }
            let v;
            if (e[37] !== y) {
                v = <Me label={y}/>;
                e[37] = y;
                e[38] = v;
            } else {
                v = e[38];
            }
            P = v;
            break e;
        }
        if (sheet.rows.length === 0) {
            let y;
            if (e[39] !== _) {
                y = _({
                    id: "DXzGZn"
                });
                e[39] = _;
                e[40] = y;
            } else {
                y = e[40];
            }
            let v;
            if (e[41] !== y) {
                v = <U icon="table" title={y}/>;
                e[41] = y;
                e[42] = v;
            } else {
                v = e[42];
            }
            P = v;
            break e;
        }
        let S;
        if (e[43] !== k || e[44] !== sheet) {
            S = <RsComponent key={k} sheet={sheet}/>;
            e[43] = k;
            e[44] = sheet;
            e[45] = S;
        } else {
            S = e[45];
        }
        P = S;
    }
    const E = P;
    let N;
    if (e[46] !== downloadName || e[47] !== source) {
        N = <Ae1Component downloadName={downloadName} href={source}/>;
        e[46] = downloadName;
        e[47] = source;
        e[48] = N;
    } else {
        N = e[48];
    }
    let C;
    if (e[49] !== E || e[50] !== isOpen || e[51] !== name || e[52] !== onClose || e[53] !== g || e[54] !== N || e[55] !== w) {
        C = <PeComponent actions={N} isOpen={isOpen} onClose={onClose} subtitle={g} title={name} toolbar={w}>{E}</PeComponent>;
        e[49] = E;
        e[50] = isOpen;
        e[51] = name;
        e[52] = onClose;
        e[53] = g;
        e[54] = N;
        e[55] = w;
        e[56] = C;
    } else {
        C = e[56];
    }
    return C;
}
function hl(s, e) {
    let s_length = s.length;
    for (const d of e){
        s_length = Math.max(s_length, d.length);
    }
    const columnCount = Math.min(s_length, ol);
    const a = Ga(s, e, columnCount);
    const columnStartsPx = [];
    let r = 0;
    for (const d of a){
        columnStartsPx.push(r);
        r += d.widthPx;
    }
    const indexWidthPx = Math.max(dl, String(e.length + 1).length * cl + 16);
    const template = [
        indexWidthPx,
        ...a.map((d)=>d.widthPx)
    ].map((d)=>`${d}px`).join(" ");
    return {
        columnCount,
        columns: a,
        columnStartsPx,
        indexWidthPx,
        template
    };
}
function pl(target) {
    if (!(target instanceof Element)) {
        return null;
    }
    const e = target.closest("[data-cell]");
    if (e == null) {
        return null;
    }
    const t = Number(e.dataset.row);
    if (!Number.isInteger(t)) {
        return null;
    }
    const col = e.dataset.col;
    if (col == null) {
        return {
            row: t,
            col: null
        };
    }
    const a = Number(col);
    if (Number.isInteger(a)) {
        return {
            row: t,
            col: a
        };
    }
    return null;
}
function ht(s, e) {
    return s.row === e.row && s.col === e.col;
}
function xl(s) {
    return (s.metaKey || s.ctrlKey) && !s.altKey && !s.shiftKey && s.key.toLowerCase() === "c";
}
function gl() {
    const s = window.getSelection();
    return s != null && !s.isCollapsed && s.toString().length > 0;
}
function Ut(pointer, e) {
    const t = e.getBoundingClientRect();
    const n = pointer.clientX - t.left;
    return {
        inline: a6() === "rtl" ? t.width - n : n,
        block: pointer.clientY - t.top
    };
}
function RsComponent(s) {
    RsComponent.d = 808;
    const e = c_1.c(51);
    const { sheet } = s;
    const { _: __1 } = u_1();
    const a = sheet.rows[0] ?? [];
    const l = sheet.rows.slice(1);
    const r = hl(a, l);
    const bounds = {
        rowCount: l.length,
        columnCount: r.columnCount
    };
    const c = Array.from({
        length: r.columnCount
    }, yl);
    const d = {
        paddingPx,
        rowHeightPx: ye,
        indexWidthPx: r.indexWidthPx,
        columnStartsPx: r.columnStartsPx,
        bounds
    };
    const [m, setM] = r_1.useState(null);
    const [f, setF] = r_1.useState(false);
    const [scrollEl, setScrollEl] = r_1.useState(null);
    const xRef = r_1.useRef(null);
    const pRef = r_1.useRef(null);
    const gRef = r_1.useRef(null);
    const { status, copy } = aT();
    const P = cm({
        scrollEl,
        rowCount: l.length,
        rowPitchPx: ye,
        leadingOffsetPx: paddingPx + ye
    });
    const E = m == null ? null : zs(m);
    const N = (_, L)=>(_ === Se ? a : l[_])?.[L] ?? "";
    const C = (_, row)=>({
            anchor: {
                row: _,
                col: r.columnCount - 1
            },
            focus: {
                row,
                col: 0
            }
        });
    const S = ()=>{
        if (m != null) {
            copy(Wa(m, N));
        }
    };
    const y = (_)=>{
        const xRef_current = xRef.current;
        if (xRef_current == null) {
            return;
        }
        const A = paddingPx + ye * (_.row + 1);
        const X = _.row === Se ? null : Gt({
            start: A,
            end: A + ye
        }, {
            start: xRef_current.scrollTop,
            size: xRef_current.clientHeight,
            leadingInset: ye
        });
        const te = paddingPx + r.indexWidthPx + (r.columnStartsPx[_.col] ?? 0);
        const ue = Gt({
            start: te,
            end: te + (r.columns[_.col]?.widthPx ?? 0)
        }, {
            start: Math.abs(xRef_current.scrollLeft),
            size: xRef_current.clientWidth,
            leadingInset: r.indexWidthPx
        });
        if (!(X == null && ue == null)) {
            xRef_current.scrollTo({
                top: X ?? xRef_current.scrollTop,
                left: ue == null ? xRef_current.scrollLeft : a8(ue, a6())
            });
        }
    };
    let v;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        v = ()=>{
            gRef.current?.edgeScroll?.dispose();
            gRef.current = null;
        };
        e[0] = v;
    } else {
        v = e[0];
    }
    const z = v;
    const isOpen = m != null;
    let O;
    if (e[1] !== isOpen) {
        O = {
            isOpen
        };
        e[1] = isOpen;
        e[2] = O;
    } else {
        O = e[2];
    }
    const W = ct_1(O);
    let T;
    if (e[3] !== z || e[4] !== m) {
        T = ()=>{
            if (m == null) {
                return false;
            }
            z();
            setM(null);
            return true;
        };
        e[3] = z;
        e[4] = m;
        e[5] = T;
    } else {
        T = e[5];
    }
    const D = jl(T, W);
    const V = x((q)=>{
        if (!(!xl(q) || m == null || gl())) {
            q.preventDefault();
            S();
        }
    });
    let F;
    if (e[6] !== D || e[7] !== V) {
        F = (q)=>{
            if (q == null) {
                return;
            }
            const _ = D(q);
            document.addEventListener("keydown", V);
            return ()=>{
                if (typeof _ === "function") {
                    _();
                }
                document.removeEventListener("keydown", V);
            };
        };
        e[6] = D;
        e[7] = V;
        e[8] = F;
    } else {
        F = e[8];
    }
    const G = F;
    const oe = (q)=>{
        const _ = q?.viewportElement ?? null;
        xRef.current = _;
        setScrollEl(_);
    };
    const le = (_)=>{
        pRef.current = _.focus;
        setM(_);
    };
    const fe = (gRef_current, xRef_current)=>{
        const A = Ut(gRef_current.pointer, xRef_current);
        const X = Ua(d, {
            inline: A.inline + Math.abs(xRef_current.scrollLeft),
            block: A.block + xRef_current.scrollTop
        });
        if (gRef_current.isRowDrag) {
            return {
                row: X.row,
                col: 0
            };
        }
        return X;
    };
    const re = (gRef_current, xRef_current)=>{
        const A = fe(gRef_current, xRef_current);
        pRef.current = A;
        setM((X)=>{
            if (X != null && ht(X.focus, A) && ht(X.anchor, gRef_current.anchor)) {
                return X;
            }
            return {
                anchor: gRef_current.anchor,
                focus: A
            };
        });
    };
    const xe = (gRef_current, xRef_current)=>{
        const A = Ut(gRef_current.pointer, xRef_current);
        return {
            inline: Xt({
                offset: A.inline,
                bandStart: r.indexWidthPx,
                bandEnd: xRef_current.clientWidth
            }),
            block: Xt({
                offset: A.block,
                bandStart: ye,
                bandEnd: xRef_current.clientHeight
            })
        };
    };
    const onPointerDown = (_)=>{
        if (_.button !== 0) {
            return;
        }
        const L = pl(_.target);
        if (L == null) {
            setM(null);
            return;
        }
        const A = {
            row: L.row,
            col: L.col ?? 0
        };
        const X = _.shiftKey && m != null;
        let te;
        if (L.col == null) {
            te = C(X ? m.anchor.row : L.row, L.row);
        } else {
            te = X ? {
                anchor: m.anchor,
                focus: A
            } : {
                anchor: A,
                focus: A
            };
        }
        _.currentTarget.setPointerCapture(_.pointerId);
        gRef.current = {
            anchor: te.anchor,
            isRowDrag: L.col == null,
            pointer: {
                clientX: _.clientX,
                clientY: _.clientY
            },
            edgeScroll: null
        };
        le(te);
    };
    const onPointerMove = (_)=>{
        const gRef_current = gRef.current;
        const xRef_current = xRef.current;
        if (gRef_current == null || xRef_current == null) {
            return;
        }
        if ((_.buttons & 1) === 0) {
            z();
            return;
        }
        gRef_current.pointer = {
            clientX: _.clientX,
            clientY: _.clientY
        };
        re(gRef_current, xRef_current);
        const X = xe(gRef_current, xRef_current);
        const te = X.inline !== 0 || X.block !== 0;
        if (te && gRef_current.edgeScroll == null) {
            gRef_current.edgeScroll = ml.arm(()=>{
                if (gRef.current !== gRef_current || !xRef_current.isConnected) {
                    return "done";
                }
                const ue = xe(gRef_current, xRef_current);
                if (ue.inline === 0 && ue.block === 0) {
                    gRef_current.edgeScroll = null;
                    return "done";
                }
                xRef_current.scrollBy({
                    top: ue.block,
                    left: a8(ue.inline, a6())
                });
                re(gRef_current, xRef_current);
                return "continue";
            });
        } else if (!te && gRef_current.edgeScroll != null) {
            gRef_current.edgeScroll.dispose();
            gRef_current.edgeScroll = null;
        }
    };
    let Z;
    if (e[9] !== m) {
        Z = ()=>{
            if (m != null) {
                setF(true);
            }
        };
        e[9] = m;
        e[10] = Z;
    } else {
        Z = e[10];
    }
    const onDoubleClick = Z;
    const onKeyDown = (_)=>{
        if (_.defaultPrevented || _.nativeEvent.isComposing) {
            return;
        }
        if ((_.metaKey || _.ctrlKey) && !_.altKey && _.key.toLowerCase() === "a") {
            _.preventDefault();
            le({
                anchor: {
                    row: bounds.rowCount - 1,
                    col: r.columnCount - 1
                },
                focus: {
                    row: Se,
                    col: 0
                }
            });
            return;
        }
        const L = xRef.current?.clientHeight ?? 0;
        const A = Math.max(1, Math.floor((L - ye) / ye) - 1);
        const X = m?.focus ?? pRef.current;
        const te = X ?? je({
            row: 0,
            col: 0
        }, bounds);
        const ue = qa(_, te, bounds, a6(), A);
        if (ue == null) {
            return;
        }
        _.preventDefault();
        const ve = X == null ? te : ue;
        le(_.shiftKey && m != null ? {
            anchor: m.anchor,
            focus: ve
        } : {
            anchor: ve,
            focus: ve
        });
        y(ve);
    };
    const B = m == null ? "" : N(m.focus.row, m.focus.col);
    const de = m == null || B.length === 0;
    let K;
    e: {
        if (m == null) {
            let _;
            if (e[11] !== __1) {
                _ = __1({
                    id: "tbPNQB",
                    values: {
                        COPY_SHORTCUT_LABEL
                    }
                });
                e[11] = __1;
                e[12] = _;
            } else {
                _ = e[12];
            }
            K = _;
            break e;
        }
        let q;
        if (e[13] !== __1 || e[14] !== B) {
            q = B.length === 0 ? __1({
                id: "bLoMy2"
            }) : B;
            e[13] = __1;
            e[14] = B;
            e[15] = q;
        } else {
            q = e[15];
        }
        K = q;
    }
    const $ = K;
    const cellCount = E == null ? 1 : Et(E);
    const he = __1({
        id: "9WMwCC",
        values: {
            cellCount
        }
    });
    const J = P.start * ye;
    const we = Math.max(0, l.length - P.end) * ye;
    const KeComponent = (_, L, A)=>{
        const X = E != null && Oa(E, _, L);
        const te = E != null && L >= E.left && L <= E.right;
        const ue = m != null && ht(m.focus, {
            row: _,
            col: L
        });
        const ve = _ === Se;
        return <div {...p_1(se.cell, ve && se.headerCell, !ve && r.columns[L]?.isNumeric === true && se.cellNumeric, ve ? te && se.stickyCellActive : X && se.cellInRange, ue && se.cellFocus)} aria-colindex={L + 2} aria-selected={X ? true : undefined} data-cell="" data-col={L} data-row={_} key={L} role={ve ? "columnheader" : "gridcell"} title={A.length > 0 ? A : undefined}>{A}</div>;
    };
    const CeComponent = (_)=>{
        const L = E != null && _ >= E.top && _ <= E.bottom;
        return <div {...{
            0: {
                className: "sand-9f619 sand-1fgtraw sand-1yrsyyn sand-10b6aqq sand-mzvs34 sand-f159sx sand-1hkp6id sand-1q0q8m5 sand-19145p9 sand-qm0940 sand-18b5jzi sand-3dt9c2 sand-1sdyfia sand-b3r6kr sand-lyipyv sand-7wzq59 sand-1o0tod sand-1vjfegm sand-s6r99b sand-169k319 sand-p4054r"
            },
            1: {
                className: "sand-9f619 sand-1fgtraw sand-1yrsyyn sand-10b6aqq sand-mzvs34 sand-f159sx sand-1hkp6id sand-1q0q8m5 sand-19145p9 sand-qm0940 sand-18b5jzi sand-3dt9c2 sand-1sdyfia sand-b3r6kr sand-lyipyv sand-7wzq59 sand-1o0tod sand-1vjfegm sand-p4054r sand-1jgat75 sand-tyxrsu"
            }
        }[!!L << 0]} aria-colindex={1} data-cell="" data-row={_} role="rowheader">{_ + 2}</div>;
    };
    let De;
    let Te;
    if (e[16] === Symbol.for("react.memo_cache_sentinel")) {
        De = r_2("sand-sheet-value-bar", "sand-78zum5 sand-dt5ytf sand-2lah0s sand-1hkp6id sand-1q0q8m5 sand-1kp61ed sand-s6r99b");
        Te = {
            className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-c9qbxq sand-9f619 sand-1g0dm76 sand-f159sx"
        };
        e[16] = De;
        e[17] = Te;
    } else {
        De = e[16];
        Te = e[17];
    }
    const Oe = E != null ? <We level="caption" style={se.address} weight="medium">{Ia(E)}</We> : null;
    const Ae = de && se.valueQuiet;
    let H;
    if (e[18] !== Ae) {
        H = [
            se.value,
            Ae
        ];
        e[18] = Ae;
        e[19] = H;
    } else {
        H = e[19];
    }
    let Q;
    if (e[20] !== H || e[21] !== $) {
        Q = <We level="label" style={H}>{$}</We>;
        e[20] = H;
        e[21] = $;
        e[22] = Q;
    } else {
        Q = e[22];
    }
    let Y;
    if (e[23] !== __1 || e[24] !== f) {
        Y = __1(f ? {
            id: "MweuVR"
        } : {
            id: "ZnXY/c"
        });
        e[23] = __1;
        e[24] = f;
        e[25] = Y;
    } else {
        Y = e[25];
    }
    const icon = f ? "chevron-up" : "chevron-down";
    let Ge;
    if (e[26] === Symbol.for("react.memo_cache_sentinel")) {
        Ge = ()=>setF(wl);
        e[26] = Ge;
    } else {
        Ge = e[26];
    }
    let Ie;
    if (e[27] !== Y || e[28] !== icon) {
        Ie = <Lt1 aria-label={Y} icon={icon} onClick={Ge} shape="square" size="sm" variant="ghost"/>;
        e[27] = Y;
        e[28] = icon;
        e[29] = Ie;
    } else {
        Ie = e[29];
    }
    const ct = m != null ? <Lt1 aria-label={status === "copied" ? __1({
        id: "6V3Ea3"
    }) : he} icon={status === "copied" ? "check" : "copy"} onClick={S} shape="square" size="sm" variant="ghost"/> : null;
    let qe;
    if (e[30] !== Oe || e[31] !== Q || e[32] !== Ie || e[33] !== ct) {
        qe = <div {...Te}>{Oe}{Q}{Ie}{ct}</div>;
        e[30] = Oe;
        e[31] = Q;
        e[32] = Ie;
        e[33] = ct;
        e[34] = qe;
    } else {
        qe = e[34];
    }
    let $e;
    if (e[35] !== B || e[36] !== f) {
        $e = f ? <Ze1 className="sand-19swzb4 sand-2lah0s sand-1hc762m sand-13fuv20 sand-t8lcch" scrollbarVisibility="hover"><We as="p" level="label" style={se.valueExpandedText}>{B}</We></Ze1> : null;
        e[35] = B;
        e[36] = f;
        e[37] = $e;
    } else {
        $e = e[37];
    }
    let Ue;
    if (e[38] !== qe || e[39] !== $e) {
        Ue = <div className={De}>{qe}{$e}</div>;
        e[38] = qe;
        e[39] = $e;
        e[40] = Ue;
    } else {
        Ue = e[40];
    }
    let Ke;
    if (e[41] === Symbol.for("react.memo_cache_sentinel")) {
        Ke = {
            className: "sand-1iyjqo2 sand-2lwn1j"
        };
        e[41] = Ke;
    } else {
        Ke = e[41];
    }
    const Ke_className = Ke.className;
    let Ze;
    if (e[42] === Symbol.for("react.memo_cache_sentinel")) {
        Ze = {
            className: "sand-1iyjqo2 sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-9f619 sand-c7ga6q"
        };
        e[42] = Ze;
    } else {
        Ze = e[42];
    }
    let Qe;
    if (e[43] !== m) {
        Qe = ({
            0: {
                className: "sand-78zum5 sand-dt5ytf sand-ezivpi sand-1ct8sxb sand-1d3mw78 sand-ss6m8b sand-1o0liin sand-87ps6o sand-t0e3qv sand-1hc762m sand-13fuv20 sand-t8lcch sand-1sd92yl sand-1t7ytsu sand-14mixaj sand-1de99jn sand-1t137rt sand-9v5kkp sand-4sht9k sand-2ssjo2"
            },
            1: {
                className: "sand-78zum5 sand-dt5ytf sand-ezivpi sand-1ct8sxb sand-1d3mw78 sand-ss6m8b sand-1o0liin sand-87ps6o sand-t0e3qv sand-1hc762m sand-13fuv20 sand-t8lcch sand-1sd92yl sand-1t7ytsu sand-14mixaj sand-1de99jn sand-4sht9k sand-2ssjo2 sand-1t137rt"
            }
        })[(m != null) << 0];
        e[43] = m;
        e[44] = Qe;
    } else {
        Qe = e[44];
    }
    const sheet_name = sheet.name;
    const qs = p_1(se.row(r.template), se.headerRow);
    let Ye;
    if (e[45] !== CeComponent) {
        Ye = CeComponent(Se);
        e[45] = CeComponent;
        e[46] = Ye;
    } else {
        Ye = e[46];
    }
    let Je;
    if (e[47] !== J) {
        Je = J > 0 ? <div {...p_1(se.spacer(J))} aria-hidden/> : null;
        e[47] = J;
        e[48] = Je;
    } else {
        Je = e[48];
    }
    let et;
    if (e[49] !== we) {
        et = we > 0 ? <div {...p_1(se.spacer(we))} aria-hidden/> : null;
        e[49] = we;
        e[50] = et;
    } else {
        et = e[50];
    }
    return <>{Ue}<Ze1 className={Ke_className} direction="both" ref={oe} scrollbarVisibility="hover"><div {...Ze} onDoubleClick={onDoubleClick} onLostPointerCapture={z} onPointerCancel={z} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={z}><div {...Qe} aria-colcount={r.columnCount + 1} aria-label={sheet_name} aria-multiselectable aria-rowcount={l.length + 1} onKeyDown={onKeyDown} ref={G} role="grid" tabIndex={0}><div {...qs} aria-rowindex={1} role="row">{Ye}{c.map((q)=>KeComponent(Se, q, a[q] ?? ""))}</div>{Je}{l.slice(P.start, P.end).map((q, _)=>{
        const L = P.start + _;
        return <div {...p_1(se.row(r.template))} aria-rowindex={L + 2} key={L} role="row">{CeComponent(L)}{c.map((A)=>KeComponent(L, A, q[A] ?? ""))}</div>;
    })}{et}</div></div></Ze1></>;
}
function wl(s) {
    return !s;
}
function yl(s, e) {
    return e;
}
function bl(kind, e) {
    if (kind === "audio") {
        return "loaded";
    }
    if (kind === "unknown" || e == null) {
        return "pending";
    }
    if (e.status === "failed") {
        return "retryable";
    }
    if (e.status === "ready") {
        return "loaded";
    }
    return "failed";
}
function Ds(s) {
    Ds.d = 438;
    const e = c_1.c(3);
    const { source, kind } = s;
    const l = Re(source, kind !== "audio" && kind !== "unknown");
    let r;
    if (e[0] !== l || e[1] !== kind) {
        r = bl(kind, l);
        e[0] = l;
        e[1] = kind;
        e[2] = r;
    } else {
        r = e[2];
    }
    cB(source, r);
    return null;
}
export function FullscreenFileViewerBody(s) {
    FullscreenFileViewerBody.d = 437;
    const e = c_1.c(9);
    const { source, kind, isOpen } = s;
    let l;
    if (e[0] !== isOpen || e[1] !== kind || e[2] !== source) {
        l = isOpen && kind !== "image" && kind !== "video" ? <Ds kind={kind} source={source}/> : null;
        e[0] = isOpen;
        e[1] = kind;
        e[2] = source;
        e[3] = l;
    } else {
        l = e[3];
    }
    let r;
    if (e[4] !== s) {
        r = <OsComponent {...s}/>;
        e[4] = s;
        e[5] = r;
    } else {
        r = e[5];
    }
    let i;
    if (e[6] !== l || e[7] !== r) {
        i = <>{l}{r}</>;
        e[6] = l;
        e[7] = r;
        e[8] = i;
    } else {
        i = e[8];
    }
    return i;
}
function OsComponent(s) {
    OsComponent.d = 436;
    const e = c_1.c(80);
    const { source, kind, name, downloadName, isOpen, onClose, audioSession } = s;
    const { _ } = u_1();
    const m = jg();
    switch(kind){
        case "image":
        case "video":
            {
                let sources;
                if (e[0] !== source) {
                    sources = [
                        source
                    ];
                    e[0] = source;
                    e[1] = sources;
                } else {
                    sources = e[1];
                }
                let f;
                if (e[2] !== isOpen || e[3] !== onClose || e[4] !== sources) {
                    f = <Un1 isOpen={isOpen} onClose={onClose} sources={sources} startIndex={0}/>;
                    e[2] = isOpen;
                    e[3] = onClose;
                    e[4] = sources;
                    e[5] = f;
                } else {
                    f = e[5];
                }
                return f;
            }
        case "pdf":
            {
                let u;
                if (e[6] !== downloadName || e[7] !== isOpen || e[8] !== name || e[9] !== onClose || e[10] !== source) {
                    u = <SsComponent downloadName={downloadName} isOpen={isOpen} name={name} onClose={onClose} source={source}/>;
                    e[6] = downloadName;
                    e[7] = isOpen;
                    e[8] = name;
                    e[9] = onClose;
                    e[10] = source;
                    e[11] = u;
                } else {
                    u = e[11];
                }
                return u;
            }
        case "markdown":
        case "text":
            {
                const isMarkdown = kind === "markdown";
                let f;
                if (e[12] !== downloadName || e[13] !== isOpen || e[14] !== name || e[15] !== onClose || e[16] !== source || e[17] !== isMarkdown) {
                    f = <Cs1Component downloadName={downloadName} isMarkdown={isMarkdown} isOpen={isOpen} name={name} onClose={onClose} source={source}/>;
                    e[12] = downloadName;
                    e[13] = isOpen;
                    e[14] = name;
                    e[15] = onClose;
                    e[16] = source;
                    e[17] = isMarkdown;
                    e[18] = f;
                } else {
                    f = e[18];
                }
                return f;
            }
        case "html":
            {
                let u;
                if (e[19] !== downloadName || e[20] !== isOpen || e[21] !== name || e[22] !== onClose || e[23] !== source) {
                    u = <Hs1Component downloadName={downloadName} isOpen={isOpen} name={name} onClose={onClose} source={source}/>;
                    e[19] = downloadName;
                    e[20] = isOpen;
                    e[21] = name;
                    e[22] = onClose;
                    e[23] = source;
                    e[24] = u;
                } else {
                    u = e[24];
                }
                return u;
            }
        case "json":
            {
                let u;
                if (e[25] !== downloadName || e[26] !== isOpen || e[27] !== name || e[28] !== onClose || e[29] !== source) {
                    u = <Gs1Component downloadName={downloadName} isOpen={isOpen} name={name} onClose={onClose} source={source}/>;
                    e[25] = downloadName;
                    e[26] = isOpen;
                    e[27] = name;
                    e[28] = onClose;
                    e[29] = source;
                    e[30] = u;
                } else {
                    u = e[30];
                }
                return u;
            }
        case "table":
            {
                let u;
                if (e[31] !== downloadName || e[32] !== isOpen || e[33] !== name || e[34] !== onClose || e[35] !== source) {
                    u = <MsComponent downloadName={downloadName} isOpen={isOpen} name={name} onClose={onClose} source={source}/>;
                    e[31] = downloadName;
                    e[32] = isOpen;
                    e[33] = name;
                    e[34] = onClose;
                    e[35] = source;
                    e[36] = u;
                } else {
                    u = e[36];
                }
                return u;
            }
        case "audio":
            {
                let u;
                if (e[37] !== downloadName || e[38] !== source) {
                    u = <Ae1Component downloadName={downloadName} href={source}/>;
                    e[37] = downloadName;
                    e[38] = source;
                    e[39] = u;
                } else {
                    u = e[39];
                }
                let f;
                if (e[40] !== audioSession || e[41] !== name || e[42] !== source) {
                    f = <Dn1 href={source} name={name} session={audioSession}/>;
                    e[40] = audioSession;
                    e[41] = name;
                    e[42] = source;
                    e[43] = f;
                } else {
                    f = e[43];
                }
                let b;
                if (e[44] !== isOpen || e[45] !== name || e[46] !== onClose || e[47] !== u || e[48] !== f) {
                    b = <PeComponent actions={u} isOpen={isOpen} onClose={onClose} title={name}>{f}</PeComponent>;
                    e[44] = isOpen;
                    e[45] = name;
                    e[46] = onClose;
                    e[47] = u;
                    e[48] = f;
                    e[49] = b;
                } else {
                    b = e[49];
                }
                return b;
            }
        case "docx":
            {
                let u;
                if (e[50] !== downloadName || e[51] !== isOpen || e[52] !== name || e[53] !== onClose || e[54] !== source) {
                    u = <Is1Component downloadName={downloadName} isOpen={isOpen} name={name} onClose={onClose} source={source}/>;
                    e[50] = downloadName;
                    e[51] = isOpen;
                    e[52] = name;
                    e[53] = onClose;
                    e[54] = source;
                    e[55] = u;
                } else {
                    u = e[55];
                }
                return u;
            }
        case "unknown":
            {
                let u;
                if (e[56] !== downloadName || e[57] !== source) {
                    u = <Ae1Component downloadName={downloadName} href={source}/>;
                    e[56] = downloadName;
                    e[57] = source;
                    e[58] = u;
                } else {
                    u = e[58];
                }
                let f;
                if (e[59] !== m || e[60] !== downloadName || e[61] !== source) {
                    f = ()=>{
                        m?.([
                            {
                                path: source,
                                suggestedName: downloadName
                            }
                        ]).catch(kl);
                    };
                    e[59] = m;
                    e[60] = downloadName;
                    e[61] = source;
                    e[62] = f;
                } else {
                    f = e[62];
                }
                let b;
                if (e[63] === Symbol.for("react.memo_cache_sentinel")) {
                    b = <T_1 id="mzI/c+"/>;
                    e[63] = b;
                } else {
                    b = e[63];
                }
                let j;
                if (e[64] !== f) {
                    j = <Le onClick={f} size="sm" variant="secondary">{b}</Le>;
                    e[64] = f;
                    e[65] = j;
                } else {
                    j = e[65];
                }
                let k;
                if (e[66] !== _) {
                    k = _({
                        id: "c0a6YO"
                    });
                    e[66] = _;
                    e[67] = k;
                } else {
                    k = e[67];
                }
                let x;
                if (e[68] !== _) {
                    x = _({
                        id: "ciNBep"
                    });
                    e[68] = _;
                    e[69] = x;
                } else {
                    x = e[69];
                }
                let p;
                if (e[70] !== j || e[71] !== k || e[72] !== x) {
                    p = <U action={j} detail={k} icon="file" title={x}/>;
                    e[70] = j;
                    e[71] = k;
                    e[72] = x;
                    e[73] = p;
                } else {
                    p = e[73];
                }
                let g;
                if (e[74] !== isOpen || e[75] !== name || e[76] !== onClose || e[77] !== u || e[78] !== p) {
                    g = <PeComponent actions={u} isOpen={isOpen} onClose={onClose} title={name}>{p}</PeComponent>;
                    e[74] = isOpen;
                    e[75] = name;
                    e[76] = onClose;
                    e[77] = u;
                    e[78] = p;
                    e[79] = g;
                } else {
                    g = e[79];
                }
                return g;
            }
    }
}
function kl() {}
