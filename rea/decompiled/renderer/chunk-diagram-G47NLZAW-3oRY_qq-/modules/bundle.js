import { p } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _, W as W_1, z, B, F, e, l as l_1, be, d as d_1, b, a, o, p as p_1, g, s, D, bf, q as q_1 } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { s as s_1 } from "./chunk-chunk-VR4S4FIN-HF2Hbh9A.js";
import { p as p_2 } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import { b as b_1 } from "./chunk-defaultLocale-pEppTWzK.js";
import { o as o_1 } from "./chunk-ordinal-BB0u7Tqq.js";
import "./index.eager-vendor-Qbf9YA6n.js";
import "./chunk-init-Gi6I4Gst.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "91adeb5c-8771-472d-a546-dcfee1fe3ee0";
            e._sentryDebugIdIdentifier = "sentry-dbid-91adeb5c-8771-472d-a546-dcfee1fe3ee0";
        }
    } catch (e) {}
})();
function _e(t) {
    let a = 0;
    const t_children = t.children;
    let n = t_children && t_children.length;
    if (!n) {
        a = 1;
    } else {
        while(--n >= 0){
            a += t_children[n].value;
        }
    }
    t.value = a;
}
function count() {
    return this.eachAfter(_e);
}
function each(t, a) {
    let l = -1;
    for (const n of this){
        t.call(a, n, ++l, this);
    }
    return this;
}
function eachBefore(t, a) {
    let l = this;
    let r;
    let i;
    for(let n = [
        l
    ], h = -1; l = n.pop();){
        t.call(a, l, ++h, this);
        if (r = l.children) {
            for(i = r.length - 1; i >= 0; --i){
                n.push(r[i]);
            }
        }
    }
    return this;
}
function eachAfter(t, a) {
    let l = this;
    let i;
    let h;
    let d;
    for(var n = [
        l
    ], r = [], g = -1; l = n.pop();){
        r.push(l);
        if (i = l.children) {
            h = 0;
            for(d = i.length; h < d; ++h){
                n.push(i[h]);
            }
        }
    }
    while(l = r.pop()){
        t.call(a, l, ++g, this);
    }
    return this;
}
function find(t, a) {
    let l = -1;
    for (const n of this){
        if (t.call(a, n, ++l, this)) {
            return n;
        }
    }
}
function sum(t) {
    return this.eachAfter((a)=>{
        let l = +t(a.data) || 0;
        const a_children = a.children;
        for(let r = a_children && a_children.length; --r >= 0;){
            l += a_children[r].value;
        }
        a.value = l;
    });
}
function sort(t) {
    return this.eachBefore((a)=>{
        if (a.children) {
            a.children.sort(t);
        }
    });
}
function path(t) {
    for(var a = this, l = Re(a, t), n = [
        a
    ]; a !== l;){
        a = a.parent;
        n.push(a);
    }
    const n_length = n.length;
    while(t !== l){
        n.splice(n_length, 0, t);
        t = t.parent;
    }
    return n;
}
function Re(t, a) {
    if (t === a) {
        return t;
    }
    const l = t.ancestors();
    const n = a.ancestors();
    let r = null;
    t = l.pop();
    for(a = n.pop(); t === a;){
        r = t;
        t = l.pop();
        a = n.pop();
    }
    return r;
}
function ancestors() {
    for(var t = this, a = [
        t
    ]; t = t.parent;){
        a.push(t);
    }
    return a;
}
function descendants() {
    return Array.from(this);
}
function leaves() {
    const t = [];
    this.eachBefore((a)=>{
        if (!a.children) {
            t.push(a);
        }
    });
    return t;
}
function links() {
    const t = this;
    const a = [];
    t.each((target)=>{
        if (target !== t) {
            a.push({
                source: target.parent,
                target
            });
        }
    });
    return a;
}
function* Ge() {
    let t = this;
    let a;
    let l = [
        t
    ];
    let n;
    let r;
    let i;
    do {
        a = l.reverse();
        for(l = []; t = a.pop();){
            yield t;
            if (n = t.children) {
                r = 0;
                for(i = n.length; r < i; ++r){
                    l.push(n[r]);
                }
            }
        }
    }while (l.length)
}
function ne(t, a) {
    if (t instanceof Map) {
        t = [
            undefined,
            t
        ];
        if (a === undefined) {
            a = je;
        }
    } else if (a === undefined) {
        a = Ye;
    }
    const l = new constructor(t);
    let n;
    let i;
    let h;
    let d;
    let g;
    for(const r = [
        l
    ]; n = r.pop();){
        if ((h = a(n.data)) && (g = (h = Array.from(h)).length)) {
            n.children = h;
            for(d = g - 1; d >= 0; --d){
                r.push(i = h[d] = new constructor(h[d]));
                i.parent = n;
                i.depth = n.depth + 1;
            }
        }
    }
    return l.eachBefore(Ze);
}
function copy() {
    return ne(this).eachBefore(Ue);
}
function Ye(t) {
    return t.children;
}
function je(t) {
    if (Array.isArray(t)) {
        return t[1];
    }
    return null;
}
function Ue(t) {
    if (t.data.value !== undefined) {
        t.value = t.data.value;
    }
    t.data = t.data.data;
}
function Ze(t) {
    let a = 0;
    do {
        t.height = a;
    }while ((t = t.parent) && t.height < ++a)
}
function constructor(t) {
    this.data = t;
    this.depth = this.height = 0;
    this.parent = null;
}
constructor.prototype = ne.prototype = {
    constructor,
    count,
    each,
    eachAfter,
    eachBefore,
    find,
    sum,
    sort,
    path,
    ancestors,
    descendants,
    leaves,
    links,
    copy,
    [Symbol.iterator]: Ge
};
function Je(t) {
    if (typeof t !== "function") {
        throw new Error;
    }
    return t;
}
function q() {
    return 0;
}
function G(t) {
    return ()=>t;
}
function Ke(t) {
    t.x0 = Math.round(t.x0);
    t.y0 = Math.round(t.y0);
    t.x1 = Math.round(t.x1);
    t.y1 = Math.round(t.y1);
}
function Qe(t, a, l, n, r) {
    const t_children = t.children;
    let h;
    for(let d = -1, g = t_children.length, c = t.value && (n - a) / t.value; ++d < g;){
        h = t_children[d];
        h.y0 = l;
        h.y1 = r;
        h.x0 = a;
        h.x1 = a += h.value * c;
    }
}
function et(t, a, l, n, r) {
    const t_children = t.children;
    let h;
    for(let d = -1, g = t_children.length, c = t.value && (r - l) / t.value; ++d < g;){
        h = t_children[d];
        h.x0 = a;
        h.x1 = n;
        h.y0 = l;
        h.y1 = l += h.value * c;
    }
}
const tt = (1 + Math.sqrt(5)) / 2;
function at(t, a, l, n, r, i) {
    const h = [];
    const a_children = a.children;
    let g;
    let c;
    let x;
    let S;
    let u;
    let y;
    let N;
    let $;
    let V;
    let R;
    let M;
    for(let p = 0, b = 0, s = a_children.length, v = a.value; p < s;){
        x = r - l;
        S = i - n;
        do {
            u = a_children[b++].value;
        }while (!u && b < s)
        N = u;
        y = u;
        R = Math.max(S / x, x / S) / (v * t);
        M = u * u * R;
        for(V = Math.max(N / M, M / y); b < s; ++b){
            u += c = a_children[b].value;
            if (c < y) {
                y = c;
            }
            if (c > N) {
                N = c;
            }
            M = u * u * R;
            $ = Math.max(N / M, M / y);
            if ($ > V) {
                u -= c;
                break;
            }
            V = $;
        }
        h.push(g = {
            value: u,
            dice: x < S,
            children: a_children.slice(p, b)
        });
        if (g.dice) {
            Qe(g, l, n, r, v ? n += S * u / v : i);
        } else {
            et(g, l, n, v ? l += x * u / v : r, i);
        }
        v -= u;
        p = b;
    }
    return h;
}
const nt = function t(a) {
    function l(n, r, i, h, d) {
        at(a, n, r, i, h, d);
    }
    l.ratio = (n)=>t((n = +n) > 1 ? n : 1);
    return l;
}(tt);
function lt() {
    let t = nt;
    let a = false;
    let l = 1;
    let n = 1;
    let r = [
        0
    ];
    let i = q;
    let h = q;
    let d = q;
    let g = q;
    let c = q;
    function p(s) {
        s.x0 = s.y0 = 0;
        s.x1 = l;
        s.y1 = n;
        s.eachBefore(b);
        r = [
            0
        ];
        if (a) {
            s.eachBefore(Ke);
        }
        return s;
    }
    function b(s) {
        let x = r[s.depth];
        let S = s.x0 + x;
        let v = s.y0 + x;
        let u = s.x1 - x;
        let y = s.y1 - x;
        if (u < S) {
            S = u = (S + u) / 2;
        }
        if (y < v) {
            v = y = (v + y) / 2;
        }
        s.x0 = S;
        s.y0 = v;
        s.x1 = u;
        s.y1 = y;
        if (s.children) {
            x = r[s.depth + 1] = i(s) / 2;
            S += c(s) - x;
            v += h(s) - x;
            u -= d(s) - x;
            y -= g(s) - x;
            if (u < S) {
                S = u = (S + u) / 2;
            }
            if (y < v) {
                v = y = (v + y) / 2;
            }
            t(s, S, v, u, y);
        }
    }
    p.round = function(s) {
        if (arguments.length) {
            a = !!s;
            return p;
        }
        return a;
    };
    p.size = function(s) {
        if (arguments.length) {
            l = +s[0];
            n = +s[1];
            return p;
        }
        return [
            l,
            n
        ];
    };
    p.tile = function(s) {
        if (arguments.length) {
            t = Je(s);
            return p;
        }
        return t;
    };
    p.padding = function(s) {
        if (arguments.length) {
            return p.paddingInner(s).paddingOuter(s);
        }
        return p.paddingInner();
    };
    p.paddingInner = function(s) {
        if (arguments.length) {
            i = typeof s === "function" ? s : G(+s);
            return p;
        }
        return i;
    };
    p.paddingOuter = function(s) {
        if (arguments.length) {
            return p.paddingTop(s).paddingRight(s).paddingBottom(s).paddingLeft(s);
        }
        return p.paddingTop();
    };
    p.paddingTop = function(s) {
        if (arguments.length) {
            h = typeof s === "function" ? s : G(+s);
            return p;
        }
        return h;
    };
    p.paddingRight = function(s) {
        if (arguments.length) {
            d = typeof s === "function" ? s : G(+s);
            return p;
        }
        return d;
    };
    p.paddingBottom = function(s) {
        if (arguments.length) {
            g = typeof s === "function" ? s : G(+s);
            return p;
        }
        return g;
    };
    p.paddingLeft = function(s) {
        if (arguments.length) {
            c = typeof s === "function" ? s : G(+s);
            return p;
        }
        return c;
    };
    return p;
}
const E = class {
    constructor(){
        this.nodes = [];
        this.levels = new Map;
        this.outerNodes = [];
        this.classes = new Map;
        this.setAccTitle = b;
        this.getAccTitle = a;
        this.setDiagramTitle = o;
        this.getDiagramTitle = p_1;
        this.getAccDescription = g;
        this.setAccDescription = s;
    }
    getNodes() {
        return this.nodes;
    }
    getConfig() {
        const a = D;
        const l = z();
        return B({
            ...a.treemap,
            ...l.treemap ?? {}
        });
    }
    addNode(a, l) {
        this.nodes.push(a);
        this.levels.set(a, l);
        if (l === 0) {
            this.outerNodes.push(a);
            this.root ??= a;
        }
    }
    getRoot() {
        return {
            name: "",
            children: this.outerNodes
        };
    }
    addClass(id, l) {
        const n = this.classes.get(id) ?? {
            id,
            styles: [],
            textStyles: []
        };
        const r = l.replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
        if (r) {
            r.forEach((i)=>{
                bf(i) && (n?.textStyles ? n.textStyles.push(i) : n.textStyles = [
                    i
                ]);
                if (n?.styles) {
                    n.styles.push(i);
                } else {
                    n.styles = [
                        i
                    ];
                }
            });
        }
        this.classes.set(id, n);
    }
    getClasses() {
        return this.classes;
    }
    getStylesForClass(a) {
        return this.classes.get(a)?.styles ?? [];
    }
    clear() {
        q_1();
        this.nodes = [];
        this.levels = new Map;
        this.outerNodes = [];
        this.classes = new Map;
        this.root = undefined;
    }
};
_(E, "TreeMapDB");
const oe = E;
function ce(t) {
    if (!t.length) {
        return [];
    }
    const a = [];
    const l = [];
    t.forEach((n)=>{
        const node = {
            name: n.name,
            children: n.type === "Leaf" ? undefined : []
        };
        node.classSelector = n?.classSelector;
        if (n?.cssCompiledStyles) {
            node.cssCompiledStyles = n.cssCompiledStyles;
        }
        if (n.type === "Leaf" && n.value !== undefined) {
            node.value = n.value;
        }
        while(l.length > 0 && l[l.length - 1].level >= n.level){
            l.pop();
        }
        if (l.length === 0) {
            a.push(node);
        } else {
            const i = l[l.length - 1].node;
            if (i.children) {
                i.children.push(node);
            } else {
                i.children = [
                    node
                ];
            }
        }
        if (n.type !== "Leaf") {
            l.push({
                node,
                level: n.level
            });
        }
    });
    return a;
}
_(ce, "buildHierarchy");
const rt = _((t, a)=>{
    p(t, a);
    const l = [];
    for (const i of t.TreemapRows ?? []){
        if (i.$type === "ClassDefStatement") {
            a.addClass(i.className ?? "", i.styleText ?? "");
        }
    }
    for (const i of t.TreemapRows ?? []){
        const h = i.item;
        if (!h) {
            continue;
        }
        const level = i.indent ? parseInt(i.indent) : 0;
        const name = st(h);
        const c = h.classSelector ? a.getStylesForClass(h.classSelector) : [];
        const cssCompiledStyles = c.length > 0 ? c : undefined;
        const b = {
            level,
            name,
            type: h.$type,
            value: h.value,
            classSelector: h.classSelector,
            cssCompiledStyles
        };
        l.push(b);
    }
    const n = ce(l);
    const r = _((i, h)=>{
        for (const d of i){
            a.addNode(d, h);
            if (d.children && d.children.length > 0) {
                r(d.children, h + 1);
            }
        }
    }, "addNodesRecursively");
    r(n, 0);
}, "populate");
var st = _((t)=>{
    if (t.name) {
        return String(t.name);
    }
    return "";
}, "getItemName");
var parser = {
    parser: {
        yy: undefined
    },
    parse: _(async (t)=>{
        try {
            const l = await p_2("treemap", t);
            l_1.debug("Treemap AST:", l);
            const n = parser.parser?.yy;
            if (!(n instanceof oe)) {
                throw new Error("parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
            }
            rt(l, n);
        } catch (error) {
            l_1.error("Error parsing treemap:", error);
            throw error;
        }
    }, "parse")
};
const it = 10;
const W = 10;
const X = 25;
const draw = _((t, a, l, n)=>{
    const r = n.db;
    const i = r.getConfig();
    const h = i.padding ?? it;
    const d = r.getDiagramTitle();
    const g = r.getRoot();
    const { themeVariables } = z();
    if (!g) {
        return;
    }
    const p = d ? 30 : 0;
    const b = F(a);
    const s = i.nodeWidth ? i.nodeWidth * W : 960;
    const x = i.nodeHeight ? i.nodeHeight * W : 500;
    const S = s;
    const v = x + p;
    b.attr("viewBox", `0 0 ${S} ${v}`);
    e(b, v, S, i.useMaxWidth);
    let u;
    try {
        const e = i.valueFormat || ",";
        if (e === "$0,0") {
            u = _((o)=>`\$${b_1(",")(o)}`, "valueFormat");
        } else if (e.startsWith("$") && e.includes(",")) {
            const o = /\.\d+/.exec(e);
            const f = o ? o[0] : "";
            u = _((C)=>`\$${b_1(`,${f}`)(C)}`, "valueFormat");
        } else if (e.startsWith("$")) {
            const o = e.substring(1);
            u = _((f)=>`\$${b_1(o || "")(f)}`, "valueFormat");
        } else {
            u = b_1(e);
        }
    } catch (error) {
        l_1.error("Error creating format function:", error);
        u = b_1(",");
    }
    const y = o_1().range([
        "transparent",
        themeVariables.cScale0,
        themeVariables.cScale1,
        themeVariables.cScale2,
        themeVariables.cScale3,
        themeVariables.cScale4,
        themeVariables.cScale5,
        themeVariables.cScale6,
        themeVariables.cScale7,
        themeVariables.cScale8,
        themeVariables.cScale9,
        themeVariables.cScale10,
        themeVariables.cScale11
    ]);
    const N = o_1().range([
        "transparent",
        themeVariables.cScalePeer0,
        themeVariables.cScalePeer1,
        themeVariables.cScalePeer2,
        themeVariables.cScalePeer3,
        themeVariables.cScalePeer4,
        themeVariables.cScalePeer5,
        themeVariables.cScalePeer6,
        themeVariables.cScalePeer7,
        themeVariables.cScalePeer8,
        themeVariables.cScalePeer9,
        themeVariables.cScalePeer10,
        themeVariables.cScalePeer11
    ]);
    const $ = o_1().range([
        themeVariables.cScaleLabel0,
        themeVariables.cScaleLabel1,
        themeVariables.cScaleLabel2,
        themeVariables.cScaleLabel3,
        themeVariables.cScaleLabel4,
        themeVariables.cScaleLabel5,
        themeVariables.cScaleLabel6,
        themeVariables.cScaleLabel7,
        themeVariables.cScaleLabel8,
        themeVariables.cScaleLabel9,
        themeVariables.cScaleLabel10,
        themeVariables.cScaleLabel11
    ]);
    if (d) {
        b.append("text").attr("x", S / 2).attr("y", p / 2).attr("class", "treemapTitle").attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(d);
    }
    const V = b.append("g").attr("transform", `translate(0, ${p})`).attr("class", "treemapContainer");
    const R = ne(g).sum((e)=>e.value ?? 0).sort((e, o)=>(o.value ?? 0) - (e.value ?? 0));
    const le = lt().size([
        s,
        x
    ]).paddingTop((e)=>{
        if (e.children && e.children.length > 0) {
            return X + W;
        }
        return 0;
    }).paddingInner(h).paddingLeft((e)=>{
        if (e.children && e.children.length > 0) {
            return W;
        }
        return 0;
    }).paddingRight((e)=>{
        if (e.children && e.children.length > 0) {
            return W;
        }
        return 0;
    }).paddingBottom((e)=>{
        if (e.children && e.children.length > 0) {
            return W;
        }
        return 0;
    }).round(true)(R);
    const de = le.descendants().filter((e)=>e.children && e.children.length > 0);
    const H = V.selectAll(".treemapSection").data(de).enter().append("g").attr("class", "treemapSection").attr("transform", (e)=>`translate(${e.x0},${e.y0})`);
    H.append("rect").attr("width", (e)=>e.x1 - e.x0).attr("height", X).attr("class", "treemapSectionHeader").attr("fill", "none").attr("fill-opacity", 0.6).attr("stroke-width", 0.6).attr("style", (e)=>{
        if (e.depth === 0) {
            return "display: none;";
        }
        return "";
    });
    H.append("clipPath").attr("id", (e, o)=>`clip-section-${a}-${o}`).append("rect").attr("width", (e)=>Math.max(0, e.x1 - e.x0 - 12)).attr("height", X);
    H.append("rect").attr("width", (e)=>e.x1 - e.x0).attr("height", (e)=>e.y1 - e.y0).attr("class", (e, o)=>`treemapSection section${o}`).attr("fill", (e)=>y(e.data.name)).attr("fill-opacity", 0.6).attr("stroke", (e)=>N(e.data.name)).attr("stroke-width", 2).attr("stroke-opacity", 0.4).attr("style", (e)=>{
        if (e.depth === 0) {
            return "display: none;";
        }
        const o = be({
            cssCompiledStyles: e.data.cssCompiledStyles
        });
        return `${o.nodeStyles};${o.borderStyles.join(";")}`;
    });
    H.append("text").attr("class", "treemapSectionLabel").attr("x", 6).attr("y", X / 2).attr("dominant-baseline", "middle").text((e)=>{
        if (e.depth === 0) {
            return "";
        }
        return e.data.name;
    }).attr("font-weight", "bold").attr("clip-path", (e, o)=>`url(#clip-section-${a}-${o})`).attr("style", (e)=>{
        if (e.depth === 0) {
            return "display: none;";
        }
        const o = `dominant-baseline: middle; font-size: 12px; fill:${$(e.data.name)}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`;
        const f = be({
            cssCompiledStyles: e.data.cssCompiledStyles
        });
        return o + f.labelStyles.replace("color:", "fill:");
    }).each(function(e) {
        if (e.depth === 0) {
            return;
        }
        const o = d_1(this);
        const name = e.data.name;
        o.text(name);
        const C = e.x1 - e.x0;
        const L = 6;
        let T;
        if (i.showValues !== false && e.value) {
            T = C - 10 - 30 - 10 - L;
        } else {
            T = C - L - 6;
        }
        const m = Math.max(15, T);
        const _ = o.node();
        if (_.getComputedTextLength() > m) {
            let z = name;
            while(z.length > 0){
                z = name.substring(0, z.length - 1);
                if (z.length === 0) {
                    o.text("...");
                    if (_.getComputedTextLength() > m) {
                        o.text("");
                    }
                    break;
                }
                o.text(`${z}...`);
                if (_.getComputedTextLength() <= m) {
                    break;
                }
            }
        }
    });
    if (i.showValues !== false) {
        H.append("text").attr("class", "treemapSectionValue").attr("x", (e)=>e.x1 - e.x0 - 10).attr("y", X / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").text((e)=>{
            if (e.value) {
                return u(e.value);
            }
            return "";
        }).attr("font-style", "italic").attr("style", (e)=>{
            if (e.depth === 0) {
                return "display: none;";
            }
            const o = `text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:${$(e.data.name)}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`;
            const f = be({
                cssCompiledStyles: e.data.cssCompiledStyles
            });
            return o + f.labelStyles.replace("color:", "fill:");
        });
    }
    const re = le.leaves();
    const A = re.length > 20;
    const pe = A ? 16 : 38;
    const Y = A ? 14 : 28;
    const D = A ? 4 : 8;
    const I = A ? 4 : 6;
    const J = A ? 2 : 4;
    const se = A ? 8 : 10;
    const K = A ? 1 : 2;
    const j = V.selectAll(".treemapLeafGroup").data(re).enter().append("g").attr("class", (e, o)=>`treemapNode treemapLeafGroup leaf${o}${e.data.classSelector ? ` ${e.data.classSelector}` : ""}x`).attr("transform", (e)=>`translate(${e.x0},${e.y0})`);
    j.append("rect").attr("width", (e)=>e.x1 - e.x0).attr("height", (e)=>e.y1 - e.y0).attr("class", "treemapLeaf").attr("fill", (e)=>{
        if (e.parent) {
            return y(e.parent.data.name);
        }
        return y(e.data.name);
    }).attr("style", (e)=>be({
            cssCompiledStyles: e.data.cssCompiledStyles
        }).nodeStyles).attr("fill-opacity", 0.3).attr("stroke", (e)=>{
        if (e.parent) {
            return y(e.parent.data.name);
        }
        return y(e.data.name);
    }).attr("stroke-width", 3);
    j.append("clipPath").attr("id", (e, o)=>`clip-${a}-${o}`).append("rect").attr("width", (e)=>Math.max(0, e.x1 - e.x0 - 4)).attr("height", (e)=>Math.max(0, e.y1 - e.y0 - 4));
    j.append("text").attr("class", "treemapLabel").attr("x", (e)=>(e.x1 - e.x0) / 2).attr("y", (e)=>(e.y1 - e.y0) / 2).attr("style", (e)=>{
        const o = `${`text-anchor: middle; dominant-baseline: middle; font-size: ${pe}px;fill:` + $(e.data.name)};`;
        const f = be({
            cssCompiledStyles: e.data.cssCompiledStyles
        });
        return o + f.labelStyles.replace("color:", "fill:");
    }).attr("clip-path", (e, o)=>`url(#clip-${a}-${o})`).text((e)=>e.data.name).each(function(e) {
        const o = d_1(this);
        const f = e.x1 - e.x0;
        const C = e.y1 - e.y0;
        const L = o.node();
        const T = f - 2 * J;
        const P = C - 2 * J;
        if (T < se || P < se) {
            o.style("display", "none");
            return;
        }
        let m = parseInt(o.style("font-size"), 10);
        const _ = 0.6;
        while(L.getComputedTextLength() > T && m > D){
            m--;
            o.style("font-size", `${m}px`);
        }
        let F = Math.max(I, Math.min(Y, Math.round(m * _)));
        let k = m + K + F;
        while(k > P && m > D && (m--, F = Math.max(I, Math.min(Y, Math.round(m * _))), !(F < I && m === D))){
            o.style("font-size", `${m}px`);
            k = m + K + F;
        }
        o.style("font-size", `${m}px`);
        A ? (m < D || P < D) && o.style("display", "none") : (L.getComputedTextLength() > T || m < D || P < m) && o.style("display", "none");
    });
    if (i.showValues !== false) {
        j.append("text").attr("class", "treemapValue").attr("x", (o)=>(o.x1 - o.x0) / 2).attr("y", (o)=>(o.y1 - o.y0) / 2).attr("style", (o)=>{
            const f = `${`text-anchor: middle; dominant-baseline: hanging; font-size: ${Y}px;fill:` + $(o.data.name)};`;
            const C = be({
                cssCompiledStyles: o.data.cssCompiledStyles
            });
            return f + C.labelStyles.replace("color:", "fill:");
        }).attr("clip-path", (o, f)=>`url(#clip-${a}-${f})`).text((o)=>{
            if (o.value) {
                return u(o.value);
            }
            return "";
        }).each(function(o) {
            const f = d_1(this);
            const parentNode = this.parentNode;
            if (!parentNode) {
                f.style("display", "none");
                return;
            }
            const L = d_1(parentNode).select(".treemapLabel");
            if (L.empty() || L.style("display") === "none") {
                f.style("display", "none");
                return;
            }
            const T = parseFloat(L.style("font-size"));
            const m = Math.max(I, Math.min(Y, Math.round(T * 0.6)));
            f.style("font-size", `${m}px`);
            const F = (o.y1 - o.y0) / 2 + T / 2 + K;
            f.attr("y", F);
            const k = o.x1 - o.x0;
            const ie = o.y1 - o.y0 - 4;
            const me = k - 2 * J;
            if (f.node().getComputedTextLength() > me || F + m > ie || m < I) {
                f.style("display", "none");
            } else {
                f.style("display", null);
            }
        });
    }
    const ue = i.diagramPadding ?? 8;
    s_1(b, ue, "flowchart", i?.useMaxWidth || false);
}, "draw");
const getClasses = _((t, a)=>a.db.getClasses(), "getClasses");
const renderer = {
    draw,
    getClasses
};
const dt = {
    sectionStrokeColor: "black",
    sectionStrokeWidth: "1",
    sectionFillColor: "#efefef",
    leafStrokeColor: "black",
    leafStrokeWidth: "1",
    leafFillColor: "#efefef",
    labelFontSize: "12px",
    valueFontSize: "10px",
    titleFontSize: "14px"
};
const pt = _(({ treemap } = {})=>{
    const a = W_1();
    const l = z();
    const n = B(a, l.themeVariables);
    const r = B(dt, treemap);
    const i = r.titleColor ?? n.titleColor;
    const h = r.labelColor ?? n.textColor;
    const d = r.valueColor ?? n.textColor;
    return `
  .treemapNode.section {
    stroke: ${r.sectionStrokeColor};
    stroke-width: ${r.sectionStrokeWidth};
    fill: ${r.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${r.leafStrokeColor};
    stroke-width: ${r.leafStrokeWidth};
    fill: ${r.leafFillColor};
  }
  .treemapLabel {
    fill: ${h};
    font-size: ${r.labelFontSize};
  }
  .treemapValue {
    fill: ${d};
    font-size: ${r.valueFontSize};
  }
  .treemapTitle {
    fill: ${i};
    font-size: ${r.titleFontSize};
  }
  `;
}, "getStyles");
const styles = pt;
export const diagram = {
    parser,
    get db () {
        return new oe;
    },
    renderer,
    styles
};
