import { c as c_1, w, a, f, b as b_1, s as s_1 } from "./chunk-chunk-RYQCIY6F-Ds0VkJA9.js";
import { _, am, an, ao, ap, l, c as c_2, aq, ar, ag, as, ah, af, at, au, av } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { G } from "./chunk-graph-BvS0Xx32.js";
import { l as l_1 } from "./chunk-layout-ChWKu-Sy.js";
import "./chunk-map-Bpb79OOT.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "62b0d446-5175-4945-9e20-fd1be9dd5059";
            e._sentryDebugIdIdentifier = "sentry-dbid-62b0d446-5175-4945-9e20-fd1be9dd5059";
        }
    } catch (e) {}
})();
const C = _((s, t, g)=>Math.max(t, Math.min(g, s)), "clamp");
const B = _((s = "TB")=>{
    switch(s){
        case "BT":
            return "bottom";
        case "LR":
            return "right";
        case "RL":
            return "left";
        default:
            return "top";
    }
}, "getDefaultSelfLoopSide");
const V = _((s)=>s === "flowchart" || s === "flowchart-v2" || s === "stateDiagram", "shouldMergeSelfLoopSegments");
const Z = _((s, t, g, y, c)=>{
    const o = [];
    const r = new Set;
    g.forEach(({ start, end })=>{
        if (start !== y) {
            r.add(start);
        }
        if (end !== y) {
            r.add(end);
        }
    });
    r.forEach((i)=>{
        const n = s.node(i);
        if (typeof n?.x === "number" && typeof n?.y === "number") {
            o.push(n);
        }
    });
    if (o.length === 0) {
        g.forEach(({ edge })=>{
            (edge.points ?? []).forEach((n)=>{
                if (typeof n?.x === "number" && typeof n?.y === "number") {
                    o.push(n);
                }
            });
        });
    }
    if (o.length === 0) {
        return B(c);
    }
    const f = o.reduce((acc, item)=>({
            x: acc.x + item.x / o.length,
            y: acc.y + item.y / o.length
        }), {
        x: 0,
        y: 0
    });
    const h = f.x - t.x;
    const a = f.y - t.y;
    if (Math.abs(h) > Math.abs(a)) {
        if (h > 0) {
            return "right";
        }
        return "left";
    }
    if (Math.abs(a) > 0) {
        if (a > 0) {
            return "bottom";
        }
        return "top";
    }
    return B(c);
}, "getSelfLoopSide");
const ee = _((s, t = "top", g = 0, y = 0)=>{
    const c = s.x;
    const o = s.y - g;
    const r = s.width / 2;
    const f = s.height / 2;
    const h = Math.max(36, Math.min(100, s.width * 0.8));
    const a = C(Math.max(y, s.width * 0.35), 36, h);
    const i = C(Math.min(s.width, s.height) * 0.45, 24, 48);
    switch(t){
        case "bottom":
            {
                const n = o + f;
                return [
                    {
                        x: c - a / 2,
                        y: n
                    },
                    {
                        x: c - a / 2,
                        y: n + i
                    },
                    {
                        x: c + a / 2,
                        y: n + i
                    },
                    {
                        x: c + a / 2,
                        y: n
                    }
                ];
            }
        case "right":
            {
                const n = c + r;
                return [
                    {
                        x: n,
                        y: o - a / 2
                    },
                    {
                        x: n + i,
                        y: o - a / 2
                    },
                    {
                        x: n + i,
                        y: o + a / 2
                    },
                    {
                        x: n,
                        y: o + a / 2
                    }
                ];
            }
        case "left":
            {
                const n = c - r;
                return [
                    {
                        x: n,
                        y: o - a / 2
                    },
                    {
                        x: n - i,
                        y: o - a / 2
                    },
                    {
                        x: n - i,
                        y: o + a / 2
                    },
                    {
                        x: n,
                        y: o + a / 2
                    }
                ];
            }
        default:
            {
                const n = o - f;
                return [
                    {
                        x: c - a / 2,
                        y: n
                    },
                    {
                        x: c - a / 2,
                        y: n - i
                    },
                    {
                        x: c + a / 2,
                        y: n - i
                    },
                    {
                        x: c + a / 2,
                        y: n
                    }
                ];
            }
    }
}, "getSelfLoopPoints");
const te = _((s, t, g = "top", y = 0, c = {})=>{
    const x = s.x;
    const y_1 = s.y - y;
    const h = c.width ?? 0;
    const a = c.height ?? 0;
    switch(g){
        case "bottom":
            return {
                x,
                y: Math.max(...t.map((i)=>i.y)) + a / 2 + 4
            };
        case "right":
            return {
                x: Math.max(...t.map((i)=>i.x)) + h / 2 + 4,
                y: y_1
            };
        case "left":
            return {
                x: Math.min(...t.map((i)=>i.x)) - h / 2 - 4,
                y: y_1
            };
        default:
            return {
                x,
                y: Math.min(...t.map((i)=>i.y)) - a / 2 - 4
            };
    }
}, "getSelfLoopLabelPosition");
export const getEdgesToRender = _((s, t = 0, { mergeSelfLoops = true } = {})=>{
    const y = new Map;
    const c = [];
    const o = s.graph()?.rankdir;
    s.edges().forEach((r)=>{
        const f = s.edge(r);
        if (mergeSelfLoops && f.selfLoop) {
            const h = f.selfLoop.id;
            if (!y.has(h)) {
                y.set(h, []);
            }
            y.get(h).push({
                edge: f,
                start: r.v,
                end: r.w
            });
        } else {
            c.push({
                edge: f,
                start: r.v,
                end: r.w
            });
        }
    });
    y.forEach((r)=>{
        if (r.length !== 3) {
            r.forEach((L)=>c.push(L));
            return;
        }
        r.sort((L, d)=>L.edge.selfLoop.order - d.edge.selfLoop.order);
        const [f, h, a] = r;
        const i = f.edge.originalEdge ?? h.edge.originalEdge ?? a.edge.originalEdge ?? h.edge;
        const n = s.node(i.start);
        if (!n) {
            r.forEach((L)=>c.push(L));
            return;
        }
        const p = {
            width: h.edge.width,
            height: h.edge.height
        };
        const m = Z(s, n, r, i.start, o);
        const points = ee(n, m, t, p.width ?? 0);
        const S = te(n, points, m, t, p);
        const b = {
            ...h.edge,
            ...i,
            id: i.id,
            points,
            start: i.start,
            end: i.end,
            x: S.x,
            y: S.y,
            width: p.width,
            height: p.height,
            labelStyle: h.edge.labelStyle,
            fromCluster: f.edge.fromCluster ?? h.edge.fromCluster ?? a.edge.fromCluster,
            toCluster: f.edge.toCluster ?? h.edge.toCluster ?? a.edge.toCluster
        };
        delete b.selfLoop;
        delete b.originalEdge;
        c.push({
            edge: b,
            start: b.start,
            end: b.end
        });
    });
    return c;
}, "getEdgesToRender");
var T = _(async (s, t, g, y, c, config)=>{
    l.warn("Graph in recursive render:XAX", w(t), c);
    const rankdir = t.graph().rankdir;
    l.trace("Dir in recursive render - dir:", rankdir);
    const elem = s.insert("g").attr("class", "root");
    if (t.nodes()) {
        l.info("Recursive render XXX", t.nodes());
    } else {
        l.info("No nodes found for", t);
    }
    if (t.edges().length > 0) {
        l.info("Recursive edges", t.edge(t.edges()[0]));
    }
    const h = elem.insert("g").attr("class", "clusters");
    const a = elem.insert("g").attr("class", "edgePaths");
    const i = elem.insert("g").attr("class", "edgeLabels");
    const n = elem.insert("g").attr("class", "nodes");
    const mergeSelfLoops = V(g);
    await Promise.all(t.nodes().map(async (d)=>{
        const node = t.node(d);
        if (c !== undefined) {
            const u = JSON.parse(JSON.stringify(c.clusterData));
            l.trace(`Setting data for parent cluster XXX
 Node.id = `, d, `
 data=`, u.height, `
Parent cluster`, c.height);
            t.setNode(c.id, u);
            if (!t.parent(d)) {
                l.trace("Setting parent", d, c.id);
                t.setParent(d, c.id, u);
            }
        }
        l.info(`(Insert) Node XXX${d}: ${JSON.stringify(t.node(d))}`);
        if (node?.clusterNode) {
            l.info("Cluster identified XBX", d, node.width, t.node(d));
            const { ranksep, nodesep } = t.graph();
            node.graph.setGraph({
                ...node.graph.graph(),
                ranksep: ranksep + 25,
                nodesep
            });
            const N = await T(n, node.graph, g, y, t.node(d), config);
            const M = N.elem;
            aq(node, M);
            node.diff = N.diff || 0;
            l.info("New compound node after recursive render XAX", d, "width", node.width, "height", node.height);
            ar(M, node);
        } else {
            if (t.children(d).length > 0) {
                l.trace("Cluster - the non recursive path XBX", d, node.id, node, node.width, "Graph:", t);
                l.trace(f(node.id, t));
                b_1.set(node.id, {
                    id: f(node.id, t),
                    node
                });
            } else {
                l.trace("Node - the non recursive path XAX", d, n, t.node(d), rankdir);
                await ag(n, t.node(d), {
                    config,
                    dir: rankdir
                });
            }
        }
    }));
    await _(async ()=>{
        const d = t.edges().map(async (e)=>{
            const u = t.edge(e.v, e.w, e.name);
            l.info(`Edge ${e.v} -> ${e.w}: ${JSON.stringify(e)}`);
            l.info(`Edge ${e.v} -> ${e.w}: `, e, " ", JSON.stringify(t.edge(e)));
            l.info("Fix", b_1, "ids:", e.v, e.w, "Translating: ", b_1.get(e.v), b_1.get(e.w));
            if (mergeSelfLoops && u.selfLoop) {
                if (u.selfLoop.order !== 1) {
                    return;
                }
                const x = u.id;
                u.id = u.selfLoop.id;
                await av(i, u);
                u.id = x;
                return;
            }
            await av(i, u);
        });
        await Promise.all(d);
    }, "processEdges")();
    l.info("Graph before layout:", JSON.stringify(w(t)));
    l.info("############################################# XXX");
    l.info("###                Layout                 ### XXX");
    l.info("############################################# XXX");
    l_1(t);
    l.info("Graph after layout:", JSON.stringify(w(t)));
    let diff = 0;
    let { subGraphTitleTotalMargin } = as(config);
    await Promise.all(s_1(t).map(async (d)=>{
        const e = t.node(d);
        l.info(`Position XBX => ${d}: (${e.x}`, `,${e.y}`, ") width: ", e.width, " height: ", e.height);
        if (e?.clusterNode) {
            e.y += subGraphTitleTotalMargin;
            l.info("A tainted cluster node XBX1", d, e.id, e.width, e.height, e.x, e.y, t.parent(d));
            b_1.get(e.id).node = e;
            ah(e);
        } else if (t.children(d).length > 0) {
            l.info("A pure cluster node XBX1", d, e.id, e.x, e.y, e.width, e.height, t.parent(d));
            e.height += subGraphTitleTotalMargin;
            t.node(e.parentId);
            const u = e?.padding / 2 || 0;
            const x = e?.labelBBox?.height || 0;
            const N = x - u || 0;
            l.debug("OffsetY", N, "labelHeight", x, "halfPadding", u);
            await af(h, e);
            b_1.get(e.id).node = e;
        } else {
            const u = t.node(e.parentId);
            e.y += subGraphTitleTotalMargin / 2;
            l.info("A regular node XBX1 - using the padding", e.id, "parent", e.parentId, e.width, e.height, e.x, e.y, "offsetY", e.offsetY, "parent", u, u?.offsetY, e);
            ah(e);
        }
    }));
    const b = subGraphTitleTotalMargin / 2;
    getEdgesToRender(t, b, {
        mergeSelfLoops
    }).forEach(({ edge, start, end })=>{
        l.info(`Edge ${start} -> ${end}: ${JSON.stringify(edge)}`, edge);
        edge.points.forEach((k)=>k.y += b);
        const x = t.node(start);
        const N = t.node(end);
        const M = at(a, edge, b_1, g, x, N, y);
        au(edge, M);
    });
    t.nodes().forEach((d)=>{
        const e = t.node(d);
        l.info(d, e.type, e.diff);
        if (e.isGroup) {
            diff = e.diff;
        }
    });
    l.warn("Returning from recursive render XAX", elem, diff);
    return {
        elem,
        diff
    };
}, "recursiveRender");
export const render = _(async (s, t)=>{
    const g = new G({
        multigraph: true,
        compound: true
    }).setGraph({
        rankdir: s.direction,
        nodesep: s.config?.nodeSpacing || s.config?.flowchart?.nodeSpacing || s.nodeSpacing,
        ranksep: s.config?.rankSpacing || s.config?.flowchart?.rankSpacing || s.rankSpacing,
        marginx: 8,
        marginy: 8
    }).setDefaultEdgeLabel(()=>({}));
    const y = t.select("g");
    am(y, s.markers, s.type, s.diagramId);
    an();
    ao();
    ap();
    c_1();
    s.nodes.forEach((o)=>{
        g.setNode(o.id, {
            ...o
        });
        if (o.parentId) {
            g.setParent(o.id, o.parentId);
        }
    });
    l.debug("Edges:", s.edges);
    s.edges.forEach((o)=>{
        if (o.start === o.end) {
            const r = o.start;
            const f = `${r}---${r}---1`;
            const h = `${r}---${r}---2`;
            const a = g.node(r);
            g.setNode(f, {
                domId: f,
                id: f,
                parentId: a.parentId,
                labelStyle: "",
                label: "",
                padding: 0,
                shape: "labelRect",
                style: "",
                width: 10,
                height: 10
            });
            g.setParent(f, a.parentId);
            g.setNode(h, {
                domId: h,
                id: h,
                parentId: a.parentId,
                labelStyle: "",
                padding: 0,
                shape: "labelRect",
                label: "",
                style: "",
                width: 10,
                height: 10
            });
            g.setParent(h, a.parentId);
            const i = structuredClone(o);
            const n = structuredClone(o);
            const p = structuredClone(o);
            const m = structuredClone(o);
            n.originalEdge = i;
            n.selfLoop = {
                id: i.id,
                order: 0
            };
            p.originalEdge = i;
            p.selfLoop = {
                id: i.id,
                order: 1
            };
            m.originalEdge = i;
            m.selfLoop = {
                id: i.id,
                order: 2
            };
            n.label = "";
            n.arrowTypeEnd = "none";
            n.endLabelLeft = "";
            n.endLabelRight = "";
            n.startLabelLeft = "";
            n.id = `${r}-cyclic-special-1`;
            p.startLabelRight = "";
            p.startLabelLeft = "";
            p.endLabelLeft = "";
            p.endLabelRight = "";
            p.arrowTypeStart = "none";
            p.arrowTypeEnd = "none";
            p.id = `${r}-cyclic-special-mid`;
            m.label = "";
            m.startLabelRight = "";
            m.startLabelLeft = "";
            m.arrowTypeStart = "none";
            if (a.isGroup) {
                n.fromCluster = r;
                m.toCluster = r;
            }
            m.id = `${r}-cyclic-special-2`;
            m.arrowTypeStart = "none";
            g.setEdge(r, f, n, `${r}-cyclic-special-0`);
            g.setEdge(f, h, p, `${r}-cyclic-special-1`);
            g.setEdge(h, r, m, `${r}-cyclic-special-2`);
        } else {
            g.setEdge(o.start, o.end, {
                ...o
            }, o.id);
        }
    });
    l.warn("Graph at first:", JSON.stringify(w(g)));
    a(g);
    l.warn("Graph after XAX:", JSON.stringify(w(g)));
    const c = c_2();
    await T(y, g, s.type, s.diagramId, undefined, c);
}, "render");
