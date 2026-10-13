import { p } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _, s as setAccDescription, g as getAccDescription, p as p_1, o as setDiagramTitle, a as getAccTitle, b as setAccTitle, F, q, B, z, D, l, W, e as e_1 } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as p_2 } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "1dc99cab-db62-42fc-8f9c-7530429b8ebc";
            e._sentryDebugIdIdentifier = "sentry-dbid-1dc99cab-db62-42fc-8f9c-7530429b8ebc";
        }
    } catch (e) {}
})();
const options = {
    showLegend: true,
    ticks: 5,
    max: null,
    min: 0,
    graticule: "circle"
};
const w = {
    axes: [],
    curves: [],
    options
};
let x = structuredClone(w);
const D_1_radar = D.radar;
const getConfig = _(()=>B({
        ...D_1_radar,
        ...z().radar
    }), "getConfig");
const getAxes = _(()=>x.axes, "getAxes");
const getCurves = _(()=>x.curves, "getCurves");
const getOptions = _(()=>x.options, "getOptions");
const setAxes = _((a)=>{
    x.axes = a.map((t)=>({
            name: t.name,
            label: t.label ?? t.name
        }));
}, "setAxes");
const setCurves = _((a)=>{
    x.curves = a.map((t)=>({
            name: t.name,
            label: t.label ?? t.name,
            entries: Z(t.entries)
        }));
}, "setCurves");
var Z = _((a)=>{
    if (a[0].axis == null) {
        return a.map((e)=>e.value);
    }
    const t = getAxes();
    if (t.length === 0) {
        throw new Error("Axes must be populated before curves for reference entries");
    }
    return t.map((e)=>{
        const r = a.find((s)=>s.axis?.$refText === e.name);
        if (r === undefined) {
            throw new Error(`Missing entry for axis ${e.label}`);
        }
        return r.value;
    });
}, "computeCurveEntries");
const setOptions = _((a)=>{
    const t = a.reduce((acc, item)=>{
        acc[item.name] = item;
        return acc;
    }, {});
    x.options = {
        showLegend: t.showLegend?.value ?? options.showLegend,
        ticks: t.ticks?.value ?? options.ticks,
        max: t.max?.value ?? options.max,
        min: t.min?.value ?? options.min,
        graticule: t.graticule?.value ?? options.graticule
    };
}, "setOptions");
const clear = _(()=>{
    q();
    x = structuredClone(w);
}, "clear");
const db = {
    getAxes,
    getCurves,
    getOptions,
    setAxes,
    setCurves,
    setOptions,
    getConfig,
    clear,
    setAccTitle,
    getAccTitle,
    setDiagramTitle,
    getDiagramTitle: p_1,
    getAccDescription,
    setAccDescription
};
const Q = _((a)=>{
    p(a, db);
    const { axes, curves, options } = a;
    db.setAxes(axes);
    db.setCurves(curves);
    db.setOptions(options);
}, "populate");
const parser = {
    parse: _(async (a)=>{
        const t = await p_2("radar", a);
        l.debug(t);
        Q(t);
    }, "parse")
};
const draw = _((a, t, e, r)=>{
    const s = r.db;
    const i = s.getAxes();
    const l = s.getCurves();
    const n = s.getOptions();
    const o = s.getConfig();
    const d = s.getDiagramTitle();
    const p = F(t);
    const u = at(p, o);
    const g = n.max ?? Math.max(...l.map((f)=>Math.max(...f.entries)));
    const n_min = n.min;
    const v = Math.min(o.width, o.height) / 2;
    rt(u, i, v, n.ticks, n.graticule);
    st(u, i, v, o);
    A(u, i, l, n_min, g, n.graticule, o);
    T(u, l, n.showLegend, o);
    u.append("text").attr("class", "radarTitle").text(d).attr("x", 0).attr("y", -o.height / 2 - o.marginTop);
}, "draw");
var at = _((a, t)=>{
    const e = t.width + t.marginLeft + t.marginRight;
    const r = t.height + t.marginTop + t.marginBottom;
    const s = {
        x: t.marginLeft + t.width / 2,
        y: t.marginTop + t.height / 2
    };
    e_1(a, r, e, t.useMaxWidth ?? true);
    a.attr("viewBox", `0 0 ${e} ${r}`).attr("overflow", "visible");
    return a.append("g").attr("transform", `translate(${s.x}, ${s.y})`);
}, "drawFrame");
var rt = _((a, t, e, r, s)=>{
    if (s === "circle") {
        for(let i = 0; i < r; i++){
            const l = e * (i + 1) / r;
            a.append("circle").attr("r", l).attr("class", "radarGraticule");
        }
    } else if (s === "polygon") {
        const i = t.length;
        for(let l = 0; l < r; l++){
            const n = e * (l + 1) / r;
            const o = t.map((d, p)=>{
                const u = 2 * p * Math.PI / i - Math.PI / 2;
                const g = n * Math.cos(u);
                const h = n * Math.sin(u);
                return `${g},${h}`;
            }).join(" ");
            a.append("polygon").attr("points", o).attr("class", "radarGraticule");
        }
    }
}, "drawGraticule");
var st = _((a, t, e, r)=>{
    const t_length = t.length;
    for(let i = 0; i < t_length; i++){
        const l = t[i].label;
        const n = 2 * i * Math.PI / t_length - Math.PI / 2;
        const o = Math.cos(n);
        const d = Math.sin(n);
        a.append("line").attr("x1", 0).attr("y1", 0).attr("x2", e * r.axisScaleFactor * o).attr("y2", e * r.axisScaleFactor * d).attr("class", "radarAxisLine");
        const p = o > 0.01 ? "start" : o < -0.01 ? "end" : "middle";
        const u = d > 0.01 ? "hanging" : d < -0.01 ? "auto" : "central";
        const g = 4;
        a.append("text").text(l).attr("x", e * r.axisLabelFactor * o + g * o).attr("y", e * r.axisLabelFactor * d + g * d).attr("text-anchor", p).attr("dominant-baseline", u).attr("class", "radarAxisLabel");
    }
}, "drawAxes");
function A(a, { length }, e, r, s, i, l) {
    const o = Math.min(l.width, l.height) / 2;
    e.forEach((d, p)=>{
        if (d.entries.length !== length) {
            return;
        }
        const u = d.entries.map((g, h)=>{
            const v = 2 * Math.PI * h / length - Math.PI / 2;
            const f = M(g, r, s, o);
            const x_1 = f * Math.cos(v);
            const y = f * Math.sin(v);
            return {
                x: x_1,
                y
            };
        });
        if (i === "circle") {
            a.append("path").attr("d", L(u, l.curveTension)).attr("class", `radarCurve-${p}`);
        } else if (i === "polygon") {
            a.append("polygon").attr("points", u.map((g)=>`${g.x},${g.y}`).join(" ")).attr("class", `radarCurve-${p}`);
        }
    });
}
_(A, "drawCurves");
function M(a, t, e, r) {
    const s = Math.min(Math.max(a, t), e);
    return r * (s - t) / (e - t);
}
_(M, "relativeRadius");
function L(a, t) {
    const a_length = a.length;
    let r = `M${a[0].x},${a[0].y}`;
    for(let s = 0; s < a_length; s++){
        const i = a[(s - 1 + a_length) % a_length];
        const l = a[s];
        const n = a[(s + 1) % a_length];
        const o = a[(s + 2) % a_length];
        const d = {
            x: l.x + (n.x - i.x) * t,
            y: l.y + (n.y - i.y) * t
        };
        const p = {
            x: n.x - (o.x - l.x) * t,
            y: n.y - (o.y - l.y) * t
        };
        r += ` C${d.x},${d.y} ${p.x},${p.y} ${n.x},${n.y}`;
    }
    return `${r} Z`;
}
_(L, "closedRoundCurve");
function T(a, t, e, r) {
    if (!e) {
        return;
    }
    const s = (r.width / 2 + r.marginRight) * 3 / 4;
    const i = -(r.height / 2 + r.marginTop) * 3 / 4;
    const l = 20;
    t.forEach((n, o)=>{
        const d = a.append("g").attr("transform", `translate(${s}, ${i + o * l})`);
        d.append("rect").attr("width", 12).attr("height", 12).attr("class", `radarLegendBox-${o}`);
        d.append("text").attr("x", 16).attr("y", 0).attr("class", "radarLegendText").text(n.label);
    });
}
_(T, "drawLegend");
const renderer = {
    draw
};
const ot = _((a, t)=>{
    let e = "";
    for(let r = 0; r < a.THEME_COLOR_LIMIT; r++){
        const s = a[`cScale${r}`];
        e += `
		.radarCurve-${r} {
			color: ${s};
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
		}
		`;
    }
    return e;
}, "genIndexStyles");
const it = _((a)=>{
    const t = W();
    const e = z();
    const themeVariables = B(t, e.themeVariables);
    const radarOptions = B(themeVariables.radar, a);
    return {
        themeVariables,
        radarOptions
    };
}, "buildRadarStyleOptions");
const styles = _(({ radar } = {})=>{
    const { themeVariables, radarOptions } = it(radar);
    return `
	.radarTitle {
		font-size: ${themeVariables.fontSize};
		color: ${themeVariables.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${radarOptions.axisColor};
		stroke-width: ${radarOptions.axisStrokeWidth};
	}
	.radarAxisLabel {
		font-size: ${radarOptions.axisLabelFontSize}px;
		color: ${radarOptions.axisColor};
	}
	.radarGraticule {
		fill: ${radarOptions.graticuleColor};
		fill-opacity: ${radarOptions.graticuleOpacity};
		stroke: ${radarOptions.graticuleColor};
		stroke-width: ${radarOptions.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${radarOptions.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${ot(themeVariables, radarOptions)}
	`;
}, "styles");
export const diagram = {
    parser,
    db,
    renderer,
    styles
};
