import { p } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { K, N, b5, _, g as getAccDescription, s as setAccDescription, a as getAccTitle, b as setAccTitle, p as p_1, o as setDiagramTitle, l as l_1, c, B, F as F_1, a1, e as e_1, q, D } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as p_2 } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import { d as d_1 } from "./chunk-arc-DIyNF4LI.js";
import { o as o_1 } from "./chunk-ordinal-BB0u7Tqq.js";
import "./index.eager-vendor-Qbf9YA6n.js";
import "./chunk-init-Gi6I4Gst.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "8643456b-9ffe-4e16-a1c5-0322b48e6fe1";
            e._sentryDebugIdIdentifier = "sentry-dbid-8643456b-9ffe-4e16-a1c5-0322b48e6fe1";
        }
    } catch (e) {}
})();
function St(t, n) {
    if (n < t) {
        return -1;
    }
    if (n > t) {
        return 1;
    }
    if (n >= t) {
        return 0;
    }
    return NaN;
}
function yt(t) {
    return t;
}
function wt() {
    let t = yt;
    let n = St;
    let y = null;
    let b = K(0);
    let l = K(N);
    let p = K(0);
    function i(e) {
        let index;
        const length = (e = b5(e)).length;
        let h;
        let w;
        let $ = 0;
        const f = new Array(length);
        const o = new Array(length);
        let startAngle = +b.apply(this, arguments);
        const E = Math.min(N, Math.max(-N, l.apply(this, arguments) - startAngle));
        let endAngle;
        const padAngle = Math.min(Math.abs(E) / length, p.apply(this, arguments));
        const u = padAngle * (E < 0 ? -1 : 1);
        let A;
        for(index = 0; index < length; ++index){
            if ((A = o[f[index] = index] = +t(e[index], index, e)) > 0) {
                $ += A;
            }
        }
        if (n != null) {
            f.sort((M, m)=>n(o[M], o[m]));
        } else if (y != null) {
            f.sort((M, m)=>y(e[M], e[m]));
        }
        index = 0;
        for(w = $ ? (E - length * u) / $ : 0; index < length; ++index, startAngle = endAngle){
            h = f[index];
            A = o[h];
            endAngle = startAngle + (A > 0 ? A * w : 0) + u;
            o[h] = {
                data: e[h],
                index,
                value: A,
                startAngle,
                endAngle,
                padAngle
            };
        }
        return o;
    }
    i.value = function(e) {
        if (arguments.length) {
            t = typeof e === "function" ? e : K(+e);
            return i;
        }
        return t;
    };
    i.sortValues = function(e) {
        if (arguments.length) {
            n = e;
            y = null;
            return i;
        }
        return n;
    };
    i.sort = function(e) {
        if (arguments.length) {
            y = e;
            n = null;
            return i;
        }
        return y;
    };
    i.startAngle = function(e) {
        if (arguments.length) {
            b = typeof e === "function" ? e : K(+e);
            return i;
        }
        return b;
    };
    i.endAngle = function(e) {
        if (arguments.length) {
            l = typeof e === "function" ? e : K(+e);
            return i;
        }
        return l;
    };
    i.padAngle = function(e) {
        if (arguments.length) {
            p = typeof e === "function" ? e : K(+e);
            return i;
        }
        return p;
    };
    return i;
}
const D_pie = D.pie;
const I = {
    sections: new Map,
    showData: false
};
let I_sections = I.sections;
let I_showData = I.showData;
const Ct = structuredClone(D_pie);
const getConfig = _(()=>structuredClone(Ct), "getConfig");
const clear = _(()=>{
    I_sections = new Map;
    I_showData = I.showData;
    q();
}, "clear");
const addSection = _(({ label, value })=>{
    if (value < 0) {
        throw new Error(`"${label}" has invalid value: ${value}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
    }
    if (!I_sections.has(label)) {
        I_sections.set(label, value);
        l_1.debug(`added new section: ${label}, with value: ${value}`);
    }
}, "addSection");
const getSections = _(()=>I_sections, "getSections");
const setShowData = _((t)=>{
    I_showData = t;
}, "setShowData");
const getShowData = _(()=>I_showData, "getShowData");
const db = {
    getConfig,
    clear,
    setDiagramTitle,
    getDiagramTitle: p_1,
    setAccTitle,
    getAccTitle,
    setAccDescription,
    getAccDescription,
    addSection,
    getSections,
    setShowData,
    getShowData
};
const Et = _((t, n)=>{
    p(t, n);
    n.setShowData(t.showData);
    t.sections.map(n.addSection);
}, "populateDb");
const parser = {
    parse: _(async (t)=>{
        const n = await p_2("pie", t);
        l_1.debug(n);
        Et(n, db);
    }, "parse")
};
const Rt = _((t)=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`, "getStyles");
const styles = Rt;
const Lt = _((t)=>{
    const n = [
        ...t.values()
    ].reduce((acc, item)=>acc + item, 0);
    const y = [
        ...t.entries()
    ].map(([l, p])=>({
            label: l,
            value: p
        })).filter((l)=>l.value / n * 100 >= 1);
    return wt().value((l)=>l.value).sort(null)(y);
}, "createPieArcs");
const draw = _((t, n, y, b)=>{
    l_1.debug(`rendering pie chart
` + t);
    const l = b.db;
    const p = c();
    const i = B(l.getConfig(), p.pie);
    const e = 40;
    const r = 18;
    const s = 4;
    const h = 450;
    const w = h;
    const $ = F_1(n);
    const f = $.append("g");
    f.attr("transform", `translate(${w / 2},${h / 2})`);
    const { themeVariables } = p;
    let [D] = a1(themeVariables.pieOuterStrokeWidth);
    D ??= 2;
    const { legendPosition, textPosition } = i;
    const F = i.donutHole > 0 && i.donutHole <= 0.9 ? i.donutHole : 0;
    const u = Math.min(w, h) / 2 - e;
    const A = d_1().innerRadius(F * u).outerRadius(u);
    const M = d_1().innerRadius(u * textPosition).outerRadius(u * textPosition);
    const m = f.append("g");
    m.append("circle").attr("cx", 0).attr("cy", 0).attr("r", u + D / 2).attr("class", "pieOuterCircle");
    const L = l.getSections();
    const J = Lt(L);
    const Q = [
        themeVariables.pie1,
        themeVariables.pie2,
        themeVariables.pie3,
        themeVariables.pie4,
        themeVariables.pie5,
        themeVariables.pie6,
        themeVariables.pie7,
        themeVariables.pie8,
        themeVariables.pie9,
        themeVariables.pie10,
        themeVariables.pie11,
        themeVariables.pie12
    ];
    let _ = 0;
    L.forEach((a)=>{
        _ += a;
    });
    const U = J.filter((a)=>(a.data.value / _ * 100).toFixed(0) !== "0");
    const H = o_1(Q).domain([
        ...L.keys()
    ]);
    m.selectAll("mySlices").data(U).enter().append("path").attr("d", A).attr("fill", (a)=>H(a.data.label)).attr("class", (a)=>{
        let c = "pieCircle";
        if (i.highlightSlice === "hover") {
            c += " highlightedOnHover";
        } else if (i.highlightSlice === a.data.label) {
            c += " highlighted";
        }
        return c;
    });
    m.selectAll("mySlices").data(U).enter().append("text").text((a)=>`${(a.data.value / _ * 100).toFixed(0)}%`).attr("transform", (a)=>`translate(${M.centroid(a)})`).style("text-anchor", "middle").attr("class", "slice");
    const Y = f.append("text").text(l.getDiagramTitle()).attr("x", 0).attr("y", -400 / 2).attr("class", "pieTitleText");
    const R = [
        ...L.entries()
    ].map(([a, c])=>({
            label: a,
            value: c
        }));
    const C = f.selectAll(".legend").data(R).enter().append("g").attr("class", "legend");
    C.append("rect").attr("width", r).attr("height", r).style("fill", (a)=>H(a.label)).style("stroke", (a)=>H(a.label));
    C.append("text").attr("x", r + s).attr("y", r - s).text((a)=>{
        if (l.getShowData()) {
            return `${a.label} [${a.value}]`;
        }
        return a.label;
    });
    const z = Math.max(...C.selectAll("text").nodes().map((a)=>a?.getBoundingClientRect().width ?? 0));
    let N = h;
    let O = w + e;
    const d = r + s;
    const P = R.length * d;
    switch(legendPosition){
        case "center":
            C.attr("transform", (a, c)=>{
                const v = d * R.length / 2;
                const x = -z / 2 - (r + s);
                const S = c * d - v;
                return `translate(${x},${S})`;
            });
            break;
        case "top":
            N += P;
            C.attr("transform", (a, c)=>{
                const v = u;
                const x = -z / 2 - (r + s);
                const S = c * d - v;
                return `translate(${x}, ${S})`;
            });
            m.attr("transform", ()=>`translate(0, ${P + d})`);
            break;
        case "bottom":
            N += P;
            C.attr("transform", (a, c)=>{
                const v = -u - d;
                const x = -z / 2 - (r + s);
                const S = c * d - v;
                return `translate(${x},${S})`;
            });
            break;
        case "left":
            O += r + s + z;
            C.attr("transform", (a, c)=>{
                const v = d * R.length / 2;
                const x = -u - (r + s);
                const S = c * d - v;
                return `translate(${x},${S})`;
            });
            m.attr("transform", ()=>`translate(${z + r + s}, 0)`);
            break;
        default:
            O += r + s + z;
            C.attr("transform", (a, c)=>{
                const v = d * R.length / 2;
                const x = 12 * r;
                const S = c * d - v;
                return `translate(${x},${S})`;
            });
            break;
    }
    const j = Y.node()?.getBoundingClientRect().width ?? 0;
    const tt = w / 2 - j / 2;
    const et = w / 2 + j / 2;
    const q = Math.min(0, tt);
    const K = Math.max(O, et) - q;
    $.attr("viewBox", `${q} 0 ${K} ${N}`);
    e_1($, N, K, i.useMaxWidth);
}, "draw");
const renderer = {
    draw
};
export const diagram = {
    parser,
    db,
    renderer,
    styles
};
