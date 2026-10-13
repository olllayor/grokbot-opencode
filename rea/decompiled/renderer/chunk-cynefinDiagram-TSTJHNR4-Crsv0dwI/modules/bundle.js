import { p } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _, s as setAccDescription, g as getAccDescription, p as p_1, o as setDiagramTitle, a as getAccTitle, b as setAccTitle, l as l_1, F, e as e_1, q as q_1, B, z, D, W } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as p_2 } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "7af3814a-a303-487c-b1ef-13ee765163fd";
            e._sentryDebugIdIdentifier = "sentry-dbid-7af3814a-a303-487c-b1ef-13ee765163fd";
        }
    } catch (e) {}
})();
const rt = _(()=>({
        domains: new Map,
        transitions: []
    }), "createDefaultData");
let H = rt();
const getDomains = _(()=>H.domains, "getDomains");
const getTransitions = _(()=>H.transitions, "getTransitions");
const setDomains = _((t)=>{
    if (t) {
        for (const e of t){
            const n = e.domain;
            const items = (e.items ?? []).map((c)=>({
                    label: c.label
                }));
            H.domains.set(n, {
                name: n,
                items
            });
        }
    }
}, "setDomains");
const setTransitions = _((t)=>{
    if (t) {
        H.transitions = t.filter((e)=>{
            if (e.from === e.to) {
                l_1.warn(`Cynefin: self-loop transition on domain "${e.from}" is not meaningful and will be skipped.`);
                return false;
            }
            return true;
        }).map((e)=>({
                from: e.from,
                to: e.to,
                label: e.label || undefined
            }));
    }
}, "setTransitions");
const getConfig = _(()=>B({
        ...D.cynefin,
        ...z().cynefin
    }), "getConfig");
const clear = _(()=>{
    q_1();
    H = rt();
}, "clear");
const db = {
    getDomains,
    getTransitions,
    setDomains,
    setTransitions,
    getConfig,
    clear,
    setAccTitle,
    getAccTitle,
    setDiagramTitle,
    getDiagramTitle: p_1,
    getAccDescription,
    setAccDescription
};
const Wt = _((t)=>{
    p(t, db);
    db.setDomains(t.domains);
    db.setTransitions(t.transitions);
}, "populate");
const parser = {
    parse: _(async (t)=>{
        const e = await p_2("cynefin", t);
        l_1.debug(e);
        Wt(e);
    }, "parse")
};
function E(t) {
    let e = t + 1831565813 | 0;
    e = Math.imul(e ^ e >>> 15, e | 1);
    e ^= e + Math.imul(e ^ e >>> 7, e | 61);
    return ((e ^ e >>> 14) >>> 0) / 4294967296;
}
_(E, "seededRandom");
function st(t) {
    let e = 0;
    for(let n = 0; n < t.length; n++){
        const a = t.charCodeAt(n);
        e = (e << 5) - e + a;
        e |= 0;
    }
    return e;
}
_(st, "hashString");
function it(t, e) {
    if (typeof t === "number" && Number.isFinite(t) && t !== 0) {
        return t;
    }
    return st(e);
}
_(it, "resolveSeed");
function ct(t, e, n, a) {
    const c = t / 2;
    const m = a ?? t * 0.015;
    const v = 7;
    const I = e / v;
    const d = [];
    for(let o = 0; o <= v; o++){
        const p = E(n + o * 17) * m * 2 - m;
        d.push({
            x: c + p,
            y: o * I
        });
    }
    let D = `M${d[0].x},${d[0].y}`;
    for(let o = 0; o < d.length - 1; o++){
        const p = d[o];
        const i = d[o + 1];
        const f = (p.y + i.y) / 2;
        const b = o % 2 === 0 ? 1 : -1;
        const h = m * 1.5 * b * E(n + o * 31 + 7);
        const F = p.x + h;
        const R = f;
        const _ = i.x - h;
        D += ` C${F},${R} ${_},${f} ${i.x},${i.y}`;
    }
    return D;
}
_(ct, "generateFoldPath");
function lt(t, e, n, a) {
    const c = e / 2;
    const m = a ?? e * 0.015;
    const v = 7;
    const I = t / v;
    const d = [];
    for(let o = 0; o <= v; o++){
        const p = E(n + o * 23) * m * 2 - m;
        d.push({
            x: o * I,
            y: c + p
        });
    }
    let D = `M${d[0].x},${d[0].y}`;
    for(let o = 0; o < d.length - 1; o++){
        const p = d[o];
        const i = d[o + 1];
        const f = (p.x + i.x) / 2;
        const b = o % 2 === 0 ? 1 : -1;
        const h = m * 1.5 * b * E(n + o * 37 + 11);
        const F = f;
        const R = p.y + h;
        const _ = f;
        const z = i.y - h;
        D += ` C${F},${R} ${_},${z} ${i.x},${i.y}`;
    }
    return D;
}
_(lt, "generateHorizontalBoundary");
function dt(t, e) {
    const n = t / 2;
    const a = e * 0.5;
    const c = e;
    const m = t * 0.03;
    return [
        `M${n},${a}`,
        `C${n + m},${a + (c - a) * 0.2}`,
        `${n - m * 1.5},${a + (c - a) * 0.55}`,
        `${n + m * 0.5},${a + (c - a) * 0.75}`,
        `C${n - m},${a + (c - a) * 0.85}`,
        `${n + m * 0.3},${a + (c - a) * 0.95}`,
        `${n},${c}`
    ].join(" ");
}
_(dt, "generateCliffPath");
function ft(t, e, n, a) {
    return [
        `M${t - n},${e}`,
        `A${n},${a} 0 1,1 ${t + n},${e}`,
        `A${n},${a} 0 1,1 ${t - n},${e}`,
        "Z"
    ].join(" ");
}
_(ft, "generateConfusionPath");
const at = {
    complex: {
        model: "Probe → Sense → Respond",
        practice: "Emergent Practices"
    },
    complicated: {
        model: "Sense → Analyse → Respond",
        practice: "Good Practices"
    },
    clear: {
        model: "Sense → Categorise → Respond",
        practice: "Best Practices"
    },
    chaotic: {
        model: "Act → Sense → Respond",
        practice: "Novel Practices"
    },
    confusion: {
        model: "",
        practice: "Disorder"
    }
};
const Ft = _((t, e)=>{
    const n = t / 2;
    const a = e / 2;
    return {
        complex: {
            cx: n / 2,
            cy: a / 2,
            x: 0,
            y: 0,
            w: n,
            h: a
        },
        complicated: {
            cx: n + n / 2,
            cy: a / 2,
            x: n,
            y: 0,
            w: n,
            h: a
        },
        chaotic: {
            cx: n / 2,
            cy: a + a / 2,
            x: 0,
            y: a,
            w: n,
            h: a
        },
        clear: {
            cx: n + n / 2,
            cy: a + a / 2,
            x: n,
            y: a,
            w: n,
            h: a
        },
        confusion: {
            cx: n,
            cy: a,
            x: n * 0.7,
            y: a * 0.7,
            w: n * 0.6,
            h: a * 0.6
        }
    };
}, "getDomainLayouts");
const Rt = _(()=>{
    const t = W();
    const e = z();
    return B(t, e.themeVariables).cynefin;
}, "getCynefinDomainColors");
const q = 3;
const draw = _((t, e, n, a)=>{
    const c = a.db;
    const m = c.getDomains();
    const v = c.getTransitions();
    const I = c.getDiagramTitle();
    const d = c.getAccTitle();
    const D = c.getAccDescription();
    const o = c.getConfig();
    const p = Rt();
    l_1.debug("Rendering Cynefin diagram");
    const { width, height, padding, showDomainDescriptions, boundaryAmplitude } = o;
    const R = width + padding * 2;
    const _ = height + padding * 2;
    const z = {
        complex: p.complexBg,
        complicated: p.complicatedBg,
        clear: p.clearBg,
        chaotic: p.chaoticBg,
        confusion: p.confusionBg
    };
    const k = F(e);
    e_1(k, _, R, o.useMaxWidth ?? true);
    k.attr("viewBox", `0 0 ${R} ${_}`);
    if (d) {
        k.append("title").text(d);
    }
    if (D) {
        k.append("desc").text(D);
    }
    const T = k.append("g").attr("transform", `translate(${padding}, ${padding})`);
    const V = Ft(width, height);
    const Z = it(o.seed, e);
    const mt = T.append("g").attr("class", "cynefin-backgrounds");
    const X = [
        "complex",
        "complicated",
        "chaotic",
        "clear"
    ];
    for (const l of X){
        const r = V[l];
        mt.append("rect").attr("class", "cynefinDomain").attr("x", r.x).attr("y", r.y).attr("width", r.w).attr("height", r.h).attr("fill", z[l]).attr("fill-opacity", 0.4).attr("stroke", "none");
    }
    const j = T.append("g").attr("class", "cynefin-boundaries");
    j.append("path").attr("class", "cynefinBoundary").attr("d", ct(width, height, Z, boundaryAmplitude)).attr("fill", "none");
    j.append("path").attr("class", "cynefinBoundary").attr("d", lt(width, height, Z + 100, boundaryAmplitude)).attr("fill", "none");
    j.append("path").attr("class", "cynefinCliff").attr("d", dt(width, height)).attr("fill", "none");
    const pt = width * 0.15;
    const yt = height * 0.15;
    T.append("path").attr("class", "cynefinConfusion").attr("d", ft(width / 2, height / 2, pt, yt)).attr("fill", z.confusion).attr("fill-opacity", 0.5);
    const J = T.append("g").attr("class", "cynefin-labels");
    for (const l of X){
        const r = V[l];
        J.append("text").attr("class", "cynefinDomainLabel").attr("x", r.cx).attr("y", showDomainDescriptions ? r.cy - 30 : r.cy).attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(l.charAt(0).toUpperCase() + l.slice(1));
    }
    J.append("text").attr("class", "cynefinDomainLabel").attr("x", width / 2).attr("y", showDomainDescriptions ? height / 2 - 10 : height / 2).attr("text-anchor", "middle").attr("dominant-baseline", "middle").text("Confusion");
    if (showDomainDescriptions) {
        const l = T.append("g").attr("class", "cynefin-subtitles");
        for (const r of X){
            const u = V[r];
            const y = at[r];
            l.append("text").attr("class", "cynefinSubtitle").attr("x", u.cx).attr("y", u.cy - 10).attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(y.model);
            l.append("text").attr("class", "cynefinSubtitle").attr("x", u.cx).attr("y", u.cy + 5).attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(y.practice);
        }
        l.append("text").attr("class", "cynefinSubtitle").attr("x", width / 2).attr("y", height / 2 + 8).attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(at.confusion.practice);
    }
    const K = T.append("g").attr("class", "cynefin-items");
    const A = 26;
    const tt = 10;
    const ut = [
        "complex",
        "complicated",
        "chaotic",
        "clear",
        "confusion"
    ];
    for (const l of ut){
        const r = m.get(l);
        if (!r || r.items.length === 0) {
            continue;
        }
        const u = V[l];
        const y = l === "confusion";
        let L = r.items;
        let N = 0;
        if (y && r.items.length > q) {
            N = r.items.length - q;
            L = r.items.slice(0, q);
        }
        let B;
        if (y) {
            const g = showDomainDescriptions ? 22 : 14;
            B = u.cy + g;
        } else {
            B = u.cy + (showDomainDescriptions ? 25 : 15);
        }
        [
            ...L
        ].forEach((g, S)=>{
            const w = B + S * (A + 4);
            const M = K.append("g");
            const P = M.append("text").attr("class", "cynefinItemText").attr("x", 0).attr("y", A / 2).attr("text-anchor", "middle").attr("dominant-baseline", "central").text(g.label);
            let $ = g.label.length * 7;
            const x = P.node();
            if (x && typeof x.getBBox === "function") {
                const G = x.getBBox();
                if (G.width > 0) {
                    $ = G.width;
                }
            }
            const C = $ + tt * 2;
            const W = u.cx - C / 2;
            M.attr("transform", `translate(${W}, ${w})`);
            M.insert("rect", "text").attr("class", "cynefinItem").attr("x", 0).attr("y", 0).attr("width", C).attr("height", A).attr("rx", 4).attr("ry", 4).attr("fill", z[l]).attr("fill-opacity", 0.95);
            P.attr("x", C / 2).attr("y", A / 2);
        });
        if (N > 0) {
            const g = B + L.length * (A + 4);
            const S = `+${N} more`;
            const w = K.append("g");
            const M = w.append("text").attr("class", "cynefinItemText").attr("x", 0).attr("y", A / 2).attr("text-anchor", "middle").attr("dominant-baseline", "central").text(S);
            let P = S.length * 7;
            const $ = M.node();
            if ($ && typeof $.getBBox === "function") {
                const W = $.getBBox();
                if (W.width > 0) {
                    P = W.width;
                }
            }
            const x = P + tt * 2;
            const C = u.cx - x / 2;
            w.attr("transform", `translate(${C}, ${g})`);
            w.insert("rect", "text").attr("class", "cynefinItemOverflow").attr("x", 0).attr("y", 0).attr("width", x).attr("height", A).attr("rx", 4).attr("ry", 4).attr("fill", z[l]).attr("fill-opacity", 0.6);
            M.attr("x", x / 2).attr("y", A / 2);
        }
    }
    if (v.length > 0) {
        const l = k.select("defs").empty() ? k.append("defs") : k.select("defs");
        const r = `cynefin-arrow-${e}`;
        l.append("marker").attr("id", r).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", "auto-start-reverse").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "cynefinArrowHead");
        const u = T.append("g").attr("class", "cynefin-arrows");
        v.forEach((y)=>{
            const L = V[y.from];
            const N = V[y.to];
            if (!L || !N) {
                return;
            }
            if (y.from === y.to) {
                l_1.warn(`Cynefin renderer: skipping self-loop on domain "${y.from}"`);
                return;
            }
            const { cx, cy } = L;
            const { cx: cx_1, cy: cy_1 } = N;
            const M = (cx + cx_1) / 2;
            const P = (cy + cy_1) / 2;
            const $ = cx_1 - cx;
            const x = cy_1 - cy;
            const C = Math.sqrt($ * $ + x * x);
            const W = C * 0.15;
            const G = -x / C;
            const ht = $ / C;
            const et = M + G * W;
            const nt = P + ht * W;
            u.append("path").attr("class", "cynefinArrowLine").attr("d", `M${cx},${cy} Q${et},${nt} ${cx_1},${cy_1}`).attr("fill", "none").attr("marker-end", `url(#${r})`);
            if (y.label) {
                u.append("text").attr("class", "cynefinArrowLabel").attr("x", et).attr("y", nt - 6).attr("text-anchor", "middle").attr("dominant-baseline", "auto").text(y.label);
            }
        });
    }
    if (I) {
        T.append("text").attr("class", "cynefinTitle").attr("x", width / 2).attr("y", -padding / 2).attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(I);
    }
}, "draw");
const renderer = {
    draw
};
const Et = _(()=>{
    const t = W();
    const e = z();
    return B(t, e.themeVariables).cynefin;
}, "getCynefinTheme");
const Ht = _(()=>{
    const t = Et();
    return `
	.cynefinDomain {
		stroke: none;
	}
	.cynefinDomainLabel {
		font-size: ${t.domainFontSize}px;
		font-weight: bold;
		fill: ${t.labelColor};
	}
	.cynefinSubtitle {
		font-size: ${t.itemFontSize - 1}px;
		fill: ${t.textColor};
		font-style: italic;
	}
	.cynefinItem {
		fill-opacity: 0.95;
		stroke: ${t.boundaryColor};
		stroke-width: 1;
	}
	.cynefinItemText {
		font-size: ${t.itemFontSize}px;
		fill: ${t.textColor};
	}
	.cynefinItemOverflow {
		fill-opacity: 0.6;
		stroke: ${t.boundaryColor};
		stroke-width: 1;
		stroke-dasharray: 3 2;
	}
	.cynefinBoundary {
		stroke: ${t.boundaryColor};
		stroke-width: ${t.boundaryWidth};
		stroke-dasharray: 6 3;
	}
	.cynefinCliff {
		stroke: ${t.cliffColor};
		stroke-width: ${t.cliffWidth};
	}
	.cynefinConfusion {
		stroke: ${t.boundaryColor};
		stroke-width: 1.5;
		stroke-dasharray: 4 2;
	}
	.cynefinArrowLine {
		stroke: ${t.arrowColor};
		stroke-width: ${t.arrowWidth};
		fill: none;
	}
	.cynefinArrowHead {
		fill: ${t.arrowColor};
		stroke: none;
	}
	.cynefinArrowLabel {
		font-size: ${t.itemFontSize - 1}px;
		fill: ${t.textColor};
	}
	.cynefinTitle {
		font-size: ${t.domainFontSize + 2}px;
		font-weight: bold;
		fill: ${t.labelColor};
	}
	`;
}, "styles");
const styles = Ht;
export const diagram = {
    parser,
    db,
    renderer,
    styles
};
