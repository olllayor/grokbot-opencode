import { s as styles, a as parser, S } from "./chunk-chunk-EX3LRPZG-CXrsEYy0.js";
import { _, c as c_1, d as d_1, l as l_1, e as e_1, k as k_1, a7, a8, a3, y as y_1 } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { G as G_1 } from "./chunk-graph-BvS0Xx32.js";
import { l as l_2 } from "./chunk-layout-ChWKu-Sy.js";
import "./chunk-chunk-XXDRQBXY-DVdINg3t.js";
import "./chunk-chunk-VR4S4FIN-HF2Hbh9A.js";
import "./chunk-chunk-32BRIVSS-CL4hvhVG.js";
import "./index.eager-vendor-Qbf9YA6n.js";
import "./chunk-map-Bpb79OOT.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "15ae5f46-535f-444d-8e52-98a60c05c0f2";
            e._sentryDebugIdIdentifier = "sentry-dbid-15ae5f46-535f-444d-8e52-98a60c05c0f2";
        }
    } catch (e) {}
})();
const X = _((e)=>e.append("circle").attr("class", "start-state").attr("r", c_1().state.sizeUnit).attr("cx", c_1().state.padding + c_1().state.sizeUnit).attr("cy", c_1().state.padding + c_1().state.sizeUnit), "drawStartState");
const D = _((e)=>e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", c_1().state.textHeight).attr("class", "divider").attr("x2", c_1().state.textHeight * 2).attr("y1", 0).attr("y2", 0), "drawDivider");
const Y = _((e, i)=>{
    const d = e.append("text").attr("x", 2 * c_1().state.padding).attr("y", c_1().state.textHeight + 2 * c_1().state.padding).attr("font-size", c_1().state.fontSize).attr("class", "state-title").text(i.id);
    const c = d.node().getBBox();
    e.insert("rect", ":first-child").attr("x", c_1().state.padding).attr("y", c_1().state.padding).attr("width", c.width + 2 * c_1().state.padding).attr("height", c.height + 2 * c_1().state.padding).attr("rx", c_1().state.radius);
    return d;
}, "drawSimpleState");
const I = _((e, i)=>{
    const d = _((o, B, y)=>{
        const v = o.append("tspan").attr("x", 2 * c_1().state.padding).text(B);
        if (!y) {
            v.attr("dy", c_1().state.textHeight);
        }
    }, "addTspan");
    const n = e.append("text").attr("x", 2 * c_1().state.padding).attr("y", c_1().state.textHeight + 1.3 * c_1().state.padding).attr("font-size", c_1().state.fontSize).attr("class", "state-title").text(i.descriptions[0]).node().getBBox();
    const n_height = n.height;
    const p = e.append("text").attr("x", c_1().state.padding).attr("y", n_height + c_1().state.padding * 0.4 + c_1().state.dividerMargin + c_1().state.textHeight).attr("class", "state-description");
    let a = true;
    let s = true;
    i.descriptions.forEach((o)=>{
        if (!a) {
            d(p, o, s);
            s = false;
        }
        a = false;
    });
    const m = e.append("line").attr("x1", c_1().state.padding).attr("y1", c_1().state.padding + n_height + c_1().state.dividerMargin / 2).attr("y2", c_1().state.padding + n_height + c_1().state.dividerMargin / 2).attr("class", "descr-divider");
    const x = p.node().getBBox();
    const g = Math.max(x.width, n.width);
    m.attr("x2", g + 3 * c_1().state.padding);
    e.insert("rect", ":first-child").attr("x", c_1().state.padding).attr("y", c_1().state.padding).attr("width", g + 2 * c_1().state.padding).attr("height", x.height + n_height + 2 * c_1().state.padding).attr("rx", c_1().state.radius);
    return e;
}, "drawDescrState");
const $ = _((e, i, d)=>{
    const padding = c_1().state.padding;
    const n = 2 * c_1().state.padding;
    const l = e.node().getBBox();
    const { width, x: x_1 } = l;
    const s = e.append("text").attr("x", 0).attr("y", c_1().state.titleShift).attr("font-size", c_1().state.fontSize).attr("class", "state-title").text(i.id);
    const x = s.node().getBBox().width + n;
    let g = Math.max(x, width);
    if (g === width) {
        g = g + n;
    }
    let o;
    const B = e.node().getBBox();
    i.doc;
    o = x_1 - padding;
    if (x > width) {
        o = (width - g) / 2 + padding;
    }
    if (Math.abs(x_1 - B.x) < padding && x > width) {
        o = x_1 - (x - width) / 2;
    }
    const y = 1 - c_1().state.textHeight;
    e.insert("rect", ":first-child").attr("x", o).attr("y", y).attr("class", d ? "alt-composit" : "composit").attr("width", g).attr("height", B.height + c_1().state.textHeight + c_1().state.titleShift + 1).attr("rx", "0");
    s.attr("x", o + padding);
    if (x <= width) {
        s.attr("x", x_1 + (g - n) / 2 - x / 2 + padding);
    }
    e.insert("rect", ":first-child").attr("x", o).attr("y", c_1().state.titleShift - c_1().state.textHeight - c_1().state.padding).attr("width", g).attr("height", c_1().state.textHeight * 3).attr("rx", c_1().state.radius);
    e.insert("rect", ":first-child").attr("x", o).attr("y", c_1().state.titleShift - c_1().state.textHeight - c_1().state.padding).attr("width", g).attr("height", B.height + 3 + 2 * c_1().state.textHeight).attr("rx", c_1().state.radius);
    return e;
}, "addTitleAndBox");
const q = _((e)=>{
    e.append("circle").attr("class", "end-state-outer").attr("r", c_1().state.sizeUnit + c_1().state.miniPadding).attr("cx", c_1().state.padding + c_1().state.sizeUnit + c_1().state.miniPadding).attr("cy", c_1().state.padding + c_1().state.sizeUnit + c_1().state.miniPadding);
    return e.append("circle").attr("class", "end-state-inner").attr("r", c_1().state.sizeUnit).attr("cx", c_1().state.padding + c_1().state.sizeUnit + 2).attr("cy", c_1().state.padding + c_1().state.sizeUnit + 2);
}, "drawEndState");
const Z = _((e, i)=>{
    let forkWidth = c_1().state.forkWidth;
    let forkHeight = c_1().state.forkHeight;
    if (i.parentId) {
        let n = forkWidth;
        forkWidth = forkHeight;
        forkHeight = n;
    }
    return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", forkWidth).attr("height", forkHeight).attr("x", c_1().state.padding).attr("y", c_1().state.padding);
}, "drawForkJoinState");
const j = _((e, i, d, c)=>{
    let textHeight = 0;
    const l = c.append("text");
    l.style("text-anchor", "start");
    l.attr("class", "noteText");
    let p = e.replace(/\r\n/g, "<br/>");
    p = p.replace(/\n/g, "<br/>");
    const a = p.split(k_1.lineBreakRegex);
    let s = 1.25 * c_1().state.noteMargin;
    for (const m of a){
        const x = m.trim();
        if (x.length > 0) {
            const g = l.append("tspan");
            g.text(x);
            if (s === 0) {
                const o = g.node().getBBox();
                s += o.height;
            }
            textHeight += s;
            g.attr("x", i + c_1().state.noteMargin);
            g.attr("y", d + textHeight + 1.25 * c_1().state.noteMargin);
        }
    }
    return {
        textWidth: l.node().getBBox().width,
        textHeight
    };
}, "_drawLongText");
const K = _((e, i)=>{
    i.attr("class", "state-note");
    const d = i.append("rect").attr("x", 0).attr("y", c_1().state.padding);
    const c = i.append("g");
    const { textWidth, textHeight } = j(e, 0, 0, c);
    d.attr("height", textHeight + 2 * c_1().state.noteMargin);
    d.attr("width", textWidth + c_1().state.noteMargin * 2);
    return d;
}, "drawNote");
const L = _((e, i)=>{
    const id = i.id;
    const c = {
        id,
        label: i.id,
        width: 0,
        height: 0
    };
    const n = e.append("g").attr("id", id).attr("class", "stateGroup");
    if (i.type === "start") {
        X(n);
    }
    if (i.type === "end") {
        q(n);
    }
    if (i.type === "fork" || i.type === "join") {
        Z(n, i);
    }
    if (i.type === "note") {
        K(i.note.text, n);
    }
    if (i.type === "divider") {
        D(n);
    }
    if (i.type === "default" && i.descriptions.length === 0) {
        Y(n, i);
    }
    if (i.type === "default" && i.descriptions.length > 0) {
        I(n, i);
    }
    const l = n.node().getBBox();
    c.width = l.width + 2 * c_1().state.padding;
    c.height = l.height + 2 * c_1().state.padding;
    return c;
}, "drawState");
let G = 0;
const Q = _((e, i, d)=>{
    const c = _((s)=>{
        switch(s){
            case S.relationType.AGGREGATION:
                return "aggregation";
            case S.relationType.EXTENSION:
                return "extension";
            case S.relationType.COMPOSITION:
                return "composition";
            case S.relationType.DEPENDENCY:
                return "dependency";
        }
    }, "getRelationType");
    i.points = i.points.filter((s)=>!Number.isNaN(s.y));
    const i_points = i.points;
    const l = a7().x((s)=>s.x).y((s)=>s.y).curve(a8);
    const p = e.append("path").attr("d", l(i_points)).attr("id", `edge${G}`).attr("class", "transition");
    let a = "";
    if (c_1().state.arrowMarkerAbsolute) {
        a = a3(true);
    }
    p.attr("marker-end", `url(${a}#${c(S.relationType.DEPENDENCY)}End)`);
    if (d.title !== undefined) {
        const s = e.append("g").attr("class", "stateLabel");
        const { x: x_1, y: y_2 } = y_1.calcLabelPosition(i.points);
        const g = k_1.getRows(d.title);
        let o = 0;
        const B = [];
        let y = 0;
        let v = 0;
        for(let u = 0; u <= g.length; u++){
            const h = s.append("text").attr("text-anchor", "middle").text(g[u]).attr("x", x_1).attr("y", y_2 + o);
            const w = h.node().getBBox();
            y = Math.max(y, w.width);
            v = Math.min(v, w.x);
            l_1.info(w.x, x_1, y_2 + o);
            if (o === 0) {
                o = h.node().getBBox().height;
                l_1.info("Title height", o, y_2);
            }
            B.push(h);
        }
        let k = o * g.length;
        if (g.length > 1) {
            const u = (g.length - 1) * o * 0.5;
            B.forEach((h, w)=>h.attr("y", y_2 + w * o - u));
            k = o * g.length;
        }
        const r = s.node().getBBox();
        s.insert("rect", ":first-child").attr("class", "box").attr("x", x_1 - y / 2 - c_1().state.padding / 2).attr("y", y_2 - k / 2 - c_1().state.padding / 2 - 3.5).attr("width", y + c_1().state.padding).attr("height", k + c_1().state.padding);
        l_1.info(r);
    }
    G++;
}, "drawEdge");
let b;
const T = {};
const setConf = _(()=>{}, "setConf");
const tt = _((e)=>{
    e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "insertMarkers");
const draw = _((e, i, d, c)=>{
    b = c_1().state;
    const securityLevel = c_1().securityLevel;
    let l;
    if (securityLevel === "sandbox") {
        l = d_1(`#i${i}`);
    }
    const p = securityLevel === "sandbox" ? d_1(l.nodes()[0].contentDocument.body) : d_1("body");
    const a = securityLevel === "sandbox" ? l.nodes()[0].contentDocument : document;
    l_1.debug(`Rendering diagram ${e}`);
    const s = p.select(`[id='${i}']`);
    tt(s);
    const m = c.db.getRootDoc();
    const x = s.append("g").attr("id", `${i}-root`);
    A(m, x, undefined, false, p, a, c);
    const b_padding = b.padding;
    const o = s.node().getBBox();
    const B = o.width + b_padding * 2;
    const y = o.height + b_padding * 2;
    const v = B * 1.75;
    e_1(s, y, v, b.useMaxWidth);
    s.attr("viewBox", `${`${o.x - b.padding}  ${o.y - b.padding} ` + B} ${y}`);
}, "draw");
const at = _((e)=>{
    if (e) {
        return e.length * b.fontSizeFactor;
    }
    return 1;
}, "getLabelWidth");
var A = _((e, i, d, c, n, l, p)=>{
    const a = new G_1({
        compound: true,
        multigraph: true
    });
    let s;
    let m = true;
    for(s = 0; s < e.length; s++){
        if (e[s].stmt === "relation") {
            m = false;
            break;
        }
    }
    if (d) {
        a.setGraph({
            rankdir: "LR",
            multigraph: true,
            compound: true,
            ranker: "tight-tree",
            ranksep: m ? 1 : b.edgeLengthFactor,
            nodeSep: m ? 1 : 50,
            isMultiGraph: true
        });
    } else {
        a.setGraph({
            rankdir: "TB",
            multigraph: true,
            compound: true,
            ranksep: m ? 1 : b.edgeLengthFactor,
            nodeSep: m ? 1 : 50,
            ranker: "tight-tree",
            isMultiGraph: true
        });
    }
    a.setDefaultEdgeLabel(()=>({}));
    const x = p.db.getStates();
    const g = p.db.getRelations();
    const o = Object.keys(x);
    for (const r of o){
        const u = x[r];
        if (d) {
            u.parentId = d;
        }
        let h;
        if (u.doc) {
            let w = i.append("g").attr("id", u.id).attr("class", "stateGroup");
            h = A(u.doc, w, u.id, !c, n, l, p);
            {
                w = $(w, u, c);
                let E = w.node().getBBox();
                h.width = E.width;
                h.height = E.height + b.padding / 2;
                T[u.id] = {
                    y: b.compositTitleSize
                };
            }
        } else {
            h = L(i, u, a);
        }
        if (u.note) {
            const w = {
                descriptions: [],
                id: `${u.id}-note`,
                note: u.note,
                type: "note"
            };
            const E = L(i, w, a);
            if (u.note.position === "left of") {
                a.setNode(`${h.id}-note`, E);
                a.setNode(h.id, h);
            } else {
                a.setNode(h.id, h);
                a.setNode(`${h.id}-note`, E);
            }
            a.setParent(h.id, `${h.id}-group`);
            a.setParent(`${h.id}-note`, `${h.id}-group`);
        } else {
            a.setNode(h.id, h);
        }
    }
    l_1.debug("Count=", a.nodeCount(), a);
    let B = 0;
    g.forEach((relation)=>{
        B++;
        l_1.debug("Setting edge", relation);
        a.setEdge(relation.id1, relation.id2, {
            relation,
            width: at(relation.title),
            height: b.labelHeight * k_1.getRows(relation.title).length,
            labelpos: "c"
        }, `id${B}`);
    });
    l_2(a);
    l_1.debug("Graph after layout", a.nodes());
    const y = i.node();
    a.nodes().forEach((r)=>{
        if (r !== undefined && a.node(r) !== undefined) {
            l_1.warn(`Node ${r}: ${JSON.stringify(a.node(r))}`);
            n.select(`#${y.id} #${r}`).attr("transform", `translate(${a.node(r).x - a.node(r).width / 2},${a.node(r).y + (T[r] ? T[r].y : 0) - a.node(r).height / 2} )`);
            n.select(`#${y.id} #${r}`).attr("data-x-shift", a.node(r).x - a.node(r).width / 2);
            l.querySelectorAll(`#${y.id} #${r} .divider`).forEach((h)=>{
                const h_parentElement = h.parentElement;
                let E = 0;
                let M = 0;
                if (h_parentElement) {
                    if (h_parentElement.parentElement) {
                        E = h_parentElement.parentElement.getBBox().width;
                    }
                    M = parseInt(h_parentElement.getAttribute("data-x-shift"), 10);
                    if (Number.isNaN(M)) {
                        M = 0;
                    }
                }
                h.setAttribute("x1", 0 - M + 8);
                h.setAttribute("x2", E - M - 8);
            });
        } else {
            l_1.debug(`No Node ${r}: ${JSON.stringify(a.node(r))}`);
        }
    });
    let v = y.getBBox();
    a.edges().forEach((r)=>{
        if (r !== undefined && a.edge(r) !== undefined) {
            l_1.debug(`Edge ${r.v} -> ${r.w}: ${JSON.stringify(a.edge(r))}`);
            Q(i, a.edge(r), a.edge(r).relation);
        }
    });
    v = y.getBBox();
    const k = {
        id: d || "root",
        label: d || "root",
        width: 0,
        height: 0
    };
    k.width = v.width + 2 * b.padding;
    k.height = v.height + 2 * b.padding;
    l_1.debug("Doc rendered", k, a);
    return k;
}, "renderDoc");
const renderer = {
    setConf,
    draw
};
export const diagram = {
    parser,
    get db () {
        return new S(1);
    },
    renderer,
    styles,
    init: _((e)=>{
        if (!e.state) {
            e.state = {};
        }
        e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute;
    }, "init")
};
