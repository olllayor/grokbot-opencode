import { I } from "./chunk-chunk-2Q5K7J3B-BdCp588o.js";
import { p } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _ as __1, o as setDiagramTitle, b as setAccTitle, s as setAccDescription, p as p_1, g as getAccDescription, a as getAccTitle, B as B_1, l as l_1, F, e as e_1, z as z_1, q, i as i_1, ai, D, aj } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as p_2 } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "ec3dabe1-60e0-42df-a233-effc7d1f69c7";
            e._sentryDebugIdIdentifier = "sentry-dbid-ec3dabe1-60e0-42df-a233-effc7d1f69c7";
        }
    } catch (e) {}
})();
const E = /[\u2500\u2501\u2502\u2503\u2514\u2517\u251C\u2523]/;
const S = /[\u2514\u2517\u251C\u2523]/;
const re = /[\u2500\u2501]/;
const V = /^[\s\u2502\u2503]+$/;
const $ = /^\s*(title[\t ]|accTitle[\t ]*:|accDescr[\t ]*[:{])/;
const k = /^\s*%%/;
const ie = "    ";
function L(n) {
    return n.some((e)=>E.test(e));
}
__1(L, "isBoxDrawingFormat");
function _(n) {
    for (const e of n){
        const t = S.exec(e);
        if (t?.index && t.index > 0) {
            return t.index;
        }
    }
    return 4;
}
__1(_, "inferSegmentWidth");
function M(n, e) {
    return n.replace(/\bline\s+(\d+)\b/gi, (t, r)=>{
        const i = parseInt(r, 10);
        const a = e.get(i);
        if (a) {
            return `line ${a}`;
        }
        return t;
    });
}
__1(M, "remapErrorLines");
function R(text) {
    const e = text.split(`
`);
    const lineMap = new Map;
    let r = -1;
    for (const [s, o] of e.entries()){
        if (o.trim() === "treeView-beta") {
            r = s;
            break;
        }
    }
    if (r === -1) {
        return {
            text,
            lineMap
        };
    }
    const i = [];
    for(let s = r + 1; s < e.length; s++){
        const o = e[s];
        if (!(o.trim() === "" || k.test(o) || $.test(o) || V.test(o))) {
            i.push(o.replace(/\t/g, "    "));
        }
    }
    if (!L(i)) {
        return {
            text,
            lineMap
        };
    }
    const a = _(i);
    const c = [];
    let l = 0;
    for(let s = 0; s <= r; s++){
        c.push(e[s]);
        l++;
        lineMap.set(l, s + 1);
    }
    for(let s = r + 1; s < e.length; s++){
        const o = e[s];
        const h = o.trim();
        const p = s + 1;
        if (h === "") {
            c.push(o);
            l++;
            lineMap.set(l, p);
            continue;
        }
        if (k.test(o)) {
            c.push(o);
            l++;
            lineMap.set(l, p);
            continue;
        }
        if ($.test(o)) {
            c.push(o);
            l++;
            lineMap.set(l, p);
            continue;
        }
        if (V.test(o)) {
            continue;
        }
        const d = o.replace(/\t/g, "    ");
        const w = S.exec(d);
        if (w?.index !== undefined) {
            const g = w.index;
            const m = Math.round(g / a) + 1;
            let u = g + 1;
            while(u < d.length && re.test(d[u])){
                u++;
            }
            while(u < d.length && d[u] === " "){
                u++;
            }
            const v = d.slice(u).trimEnd();
            if (!v) {
                throw new Error(`Line ${p}: Empty node \u2014 expected a filename or directory name after the box-drawing prefix`);
            }
            const W = ie.repeat(m);
            c.push(W + v);
            l++;
            lineMap.set(l, p);
        } else {
            if (/^[\s\u2500\u2501\u2502\u2503\u2514\u2517\u251C\u2523]+$/.test(d)) {
                continue;
            }
            if (E.test(d)) {
                c.push(o);
                l++;
                lineMap.set(l, p);
            } else {
                if (/^\s+/.test(d)) {
                    throw new Error(`Line ${p}: Unexpected indentation without box-drawing characters. In box-drawing format, use \u251C\u2500\u2500 or \u2514\u2500\u2500 prefixes for indented nodes.`);
                }
                c.push(o);
                l++;
                lineMap.set(l, p);
            }
        }
    }
    return {
        text: c.join(`
`),
        lineMap
    };
}
__1(R, "preprocessBoxDrawing");
const x = new I(()=>({
        cnt: 1,
        stack: [
            {
                id: 0,
                level: -1,
                name: "/",
                nodeType: "directory",
                children: []
            }
        ]
    }));
const clear = __1(()=>{
    x.reset();
    q();
}, "clear");
const getRoot = __1(()=>x.records.stack[0], "getRoot");
const getCount = __1(()=>x.records.cnt, "getCount");
const D_1_treeView = D.treeView;
const getConfig = __1(()=>B_1(D_1_treeView, z_1().treeView), "getConfig");
const addNode = __1((level, name, nodeType, cssClass, icon, description)=>{
    while(level <= x.records.stack[x.records.stack.length - 1].level){
        x.records.stack.pop();
    }
    const c = {
        id: x.records.cnt++,
        level,
        name,
        nodeType,
        icon,
        cssClass,
        description,
        children: []
    };
    x.records.stack[x.records.stack.length - 1].children.push(c);
    x.records.stack.push(c);
}, "addNode");
const he = {
    clear,
    addNode,
    getRoot,
    getCount,
    getConfig,
    getAccTitle,
    getAccDescription,
    getDiagramTitle: p_1,
    setAccDescription,
    setAccTitle,
    setDiagramTitle
};
const db = he;
const pe = __1((n)=>{
    p(n, db);
    for (const e of n.nodes){
        const t = typeof e.indent === "number" ? e.indent : 0;
        let r = e.name;
        const i = r.endsWith("/");
        if (i) {
            r = r.slice(0, -1);
        }
        const a = i ? "directory" : "file";
        const c = e.classAnnotation || undefined;
        const l = e.iconAnnotation;
        const s = l !== undefined ? l || "none" : undefined;
        const o = e.descAnnotation || undefined;
        const h = o ? i_1(o, z_1()) : undefined;
        db.addNode(t, r, a, c, s, h);
    }
}, "populate");
const parser = {
    parse: __1(async (n)=>{
        const { text, lineMap } = R(n);
        try {
            const r = await p_2("treeView", text);
            l_1.debug(r);
            pe(r);
        } catch (error) {
            if (lineMap.size > 0 && error instanceof Error) {
                error.message = M(error.message, lineMap);
            }
            throw error;
        }
    }, "parse")
};
const icons = {
    prefix: "mermaid-treeview",
    height: 24,
    width: 24,
    icons: {
        folder: {
            body: '<path fill="currentColor" d="M10.59 4.59A2 2 0 0 0 9.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.17z"/>'
        },
        file: {
            body: '<path fill="currentColor" fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.83a2 2 0 0 0-.59-1.42l-4.82-4.82A2 2 0 0 0 13.17 2H6Zm7.5 1.9l4.6 4.6h-3.6a1 1 0 0 1-1-1V3.9Z" clip-rule="evenodd"/>'
        }
    }
};
function z(n, e) {
    const t = e?.filenameIcons?.[n];
    if (t) {
        return t;
    }
    const r = n.lastIndexOf(".");
    if (r > 0) {
        const i = n.substring(r).toLowerCase();
        const a = e?.extensionIcons;
        return a?.[i] ?? a?.[i.slice(1)];
    }
}
__1(z, "detectIcon");
function C(n, e) {
    if (n.includes(":")) {
        return n;
    }
    if (n in icons.icons || !e) {
        return `${icons.prefix}:${n}`;
    }
    return `${e}:${n}`;
}
__1(C, "qualifyIcon");
function B(n, e) {
    if (n.icon !== "none") {
        if (n.icon) {
            return C(n.icon, e.defaultIconPack);
        }
        if (e.showIcons) {
            if (n.nodeType === "file") {
                const t = z(n.name, e);
                if (t === "none") {
                    return;
                }
                if (t) {
                    return C(t, e.defaultIconPack);
                }
            }
            return `${icons.prefix}:${n.nodeType === "directory" ? "folder" : "file"}`;
        }
    }
}
__1(B, "getNodeIcon");
aj([
    {
        name: icons.prefix,
        icons
    }
]);
const y = 14;
const ge = 4;
const ue = 16;
const H = __1((n, e)=>`tv-icon-${n}-${e.replace(/[^\w-]/g, "-")}`, "iconSymbolId");
const we = __1(async (n, e, t, r)=>{
    const i = new Set;
    const a = __1((s)=>{
        const o = B(s, t);
        if (o) {
            i.add(o);
        }
        s.children.forEach(a);
    }, "collect");
    a(e);
    if (i.size === 0) {
        return;
    }
    const c = await Promise.all([
        ...i
    ].map(async (icon_1)=>({
            icon: icon_1,
            svg: await ai(icon_1, {
                height: y,
                width: y
            })
        })));
    const l = n.append("defs");
    for (const { icon, svg } of c){
        l.append("g").attr("id", H(r, icon)).html(svg);
    }
}, "injectIconDefs");
const me = __1((x_1, y_1, node, r, i, a)=>{
    const nodeGroup = r.append("g");
    let l = "treeView-node-label";
    if (node.nodeType === "directory") {
        l += " treeView-node-dir";
    }
    if (node.cssClass) {
        l += ` ${node.cssClass}`;
    }
    const s = y + ge;
    const o = B(node, i);
    const h = o !== undefined;
    if (o) {
        nodeGroup.append("use").attr("xlink:href", `#${H(a, o)}`).attr("x", x_1 + i.paddingX).attr("y", y_1 + i.paddingY).attr("class", "treeView-node-icon");
    }
    const p = nodeGroup.append("text").text(node.name).attr("dominant-baseline", "middle").attr("class", l);
    const { height, width } = p.node().getBBox();
    const height_1 = height + i.paddingY * 2;
    const m = x_1 + i.paddingX + (h ? s : 0);
    p.attr("x", m);
    p.attr("y", y_1 + height_1 / 2);
    const labelRightEdge = m + width;
    const width_1 = width + i.paddingX * 2 + (h ? s : 0);
    node.BBox = {
        x: x_1,
        y: y_1,
        width: width_1,
        height: height_1
    };
    if (node.cssClass?.split(/\s+/).includes("highlight")) {
        nodeGroup.insert("rect", ":first-child").attr("x", x_1).attr("y", y_1 + 1).attr("width", 0).attr("height", height_1 - 2).attr("rx", 3).attr("class", "treeView-highlight-bg");
    }
    return {
        node,
        nodeGroup,
        labelRightEdge,
        centerY: y_1 + height_1 / 2
    };
}, "positionLabel");
const T = __1((n, e, t, r, i, a)=>n.append("line").attr("x1", e).attr("y1", t).attr("x2", r).attr("y2", i).attr("stroke-width", a).attr("class", "treeView-node-line"), "positionLine");
const xe = __1((n, e, t, r)=>{
    let totalHeight = 0;
    let totalWidth = 0;
    const c = [];
    const l = __1((h, p, d, w)=>{
        const g = w * (d.rowIndent + d.paddingX);
        const m = me(g, totalHeight, p, h, d, r);
        c.push(m);
        const { height, width } = p.BBox;
        T(h, g - d.rowIndent, totalHeight + height / 2, g, totalHeight + height / 2, d.lineThickness);
        totalWidth = Math.max(totalWidth, g + width);
        totalHeight += height;
    }, "drawNode");
    const s = __1((h, p = 0)=>{
        l(n, h, t, p);
        h.children.forEach((m)=>{
            s(m, p + 1);
        });
        const { x, y, height } = h.BBox;
        if (h.children.length) {
            const { y: y_1, height: height_1 } = h.children[h.children.length - 1].BBox;
            T(n, x + t.paddingX, y + height, x + t.paddingX, y_1 + height_1 / 2 + t.lineThickness / 2, t.lineThickness);
        }
    }, "processNode");
    s(e);
    const o = c.filter((h)=>h.node.description);
    if (o.length > 0) {
        const p = Math.max(...c.map((d)=>d.labelRightEdge)) + ue;
        for (const d of o){
            const g = d.nodeGroup.append("text").text(d.node.description).attr("dominant-baseline", "middle").attr("class", "treeView-node-description").attr("x", p).attr("y", d.centerY).node().getBBox();
            totalWidth = Math.max(totalWidth, p + g.width + t.paddingX);
        }
    }
    for (const h of c){
        if (h.node.cssClass?.split(/\s+/).includes("highlight")) {
            const p = h.nodeGroup.select(".treeView-highlight-bg");
            if (!p.empty()) {
                const d = totalWidth - h.node.BBox.x + 8;
                p.attr("width", d);
                totalWidth = Math.max(totalWidth, h.node.BBox.x + d + 2);
            }
        }
    }
    return {
        totalHeight,
        totalWidth
    };
}, "drawTree");
const draw = __1(async (n, e, t, r)=>{
    l_1.debug(`Rendering treeView diagram
` + n);
    const i = r.db;
    const a = i.getRoot();
    const c = i.getConfig();
    const l = F(e);
    await we(l, a, c, e);
    const s = l.append("g");
    s.attr("class", "tree-view");
    const { totalHeight, totalWidth } = xe(s, a, c, e);
    l.attr("viewBox", `-${c.lineThickness / 2} 0 ${totalWidth} ${totalHeight}`);
    e_1(l, totalHeight, totalWidth, c.useMaxWidth);
}, "draw");
const be = {
    draw
};
const renderer = be;
const Ce = {
    labelFontSize: "16px",
    labelColor: "black",
    lineColor: "black",
    iconColor: "#546e7a",
    descriptionColor: "#6a9955",
    highlightBg: "rgba(255, 193, 7, 0.15)",
    highlightStroke: "#ffc107"
};
const ye = __1(({ treeView })=>{
    const { labelFontSize, labelColor, lineColor, iconColor, descriptionColor, highlightBg, highlightStroke } = B_1(Ce, treeView);
    return `
    .treeView-node-label {
        font-size: ${labelFontSize};
        fill: ${labelColor};
        white-space: pre;
    }
    .treeView-node-dir {
        font-weight: bold;
    }
    .treeView-node-line {
        stroke: ${lineColor};
    }
    .treeView-node-icon {
        color: ${iconColor};
    }
    .treeView-node-description {
        font-size: ${labelFontSize};
        fill: ${descriptionColor};
        font-style: italic;
        white-space: pre;
    }
    .treeView-highlight-bg {
        fill: ${highlightBg};
        stroke: ${highlightStroke};
        stroke-width: 1;
    }
    `;
}, "styles");
const styles = ye;
export const diagram = {
    db,
    renderer,
    parser,
    styles
};
