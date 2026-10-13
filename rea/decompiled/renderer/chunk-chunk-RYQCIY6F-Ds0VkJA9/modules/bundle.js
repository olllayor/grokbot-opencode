import { _, l as l_1 } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { i, G } from "./chunk-graph-BvS0Xx32.js";
import { b as b_1, m } from "./chunk-map-Bpb79OOT.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "0c52adf5-2f32-441f-b28e-c0fc93ced563";
            e._sentryDebugIdIdentifier = "sentry-dbid-0c52adf5-2f32-441f-b28e-c0fc93ced563";
        }
    } catch (e) {}
})();
const j = 4;
function p(e) {
    return b_1(e, j);
}
function C(e) {
    const r = {
        options: {
            directed: e.isDirected(),
            multigraph: e.isMultigraph(),
            compound: e.isCompound()
        },
        nodes: F(e),
        edges: M(e)
    };
    if (!i(e.graph())) {
        r.value = p(e.graph());
    }
    return r;
}
function F(e) {
    return m(e.nodes(), (v_1)=>{
        const n = e.node(v_1);
        const s = e.parent(v_1);
        const t = {
            v: v_1
        };
        if (!i(n)) {
            t.value = n;
        }
        if (!i(s)) {
            t.parent = s;
        }
        return t;
    });
}
function M(e) {
    return m(e.edges(), (r)=>{
        const n = e.edge(r);
        const s = {
            v: r.v,
            w: r.w
        };
        if (!i(r.name)) {
            s.name = r.name;
        }
        if (!i(n)) {
            s.value = n;
        }
        return s;
    });
}
const c = new Map;
const w = new Map;
const A = new Map;
const J = _(()=>{
    w.clear();
    A.clear();
    c.clear();
}, "clear");
const v = _((e, r)=>{
    const n = w.get(r) || [];
    l_1.trace("In isDescendant", r, " ", e, " = ", n.includes(e));
    return n.includes(e);
}, "isDescendant");
const R = _((e, r)=>{
    const n = w.get(r) || [];
    l_1.info("Descendants of ", r, " is ", n);
    l_1.info("Edge is ", e);
    if (e.v === r || e.w === r) {
        return false;
    }
    if (n) {
        return n.includes(e.v) || v(e.v, r) || v(e.w, r) || n.includes(e.w);
    }
    l_1.debug("Tilt, ", r, ",not in descendants");
    return false;
}, "edgeInCluster");
var b = _((e, r, n, s)=>{
    l_1.warn("Copying children of ", e, "root", s, "data", r.node(e), s);
    const t = r.children(e) || [];
    if (e !== s) {
        t.push(e);
    }
    l_1.warn("Copying (nodes) clusterId", e, "nodes", t);
    t.forEach((o)=>{
        if (r.children(o).length > 0) {
            b(o, r, n, s);
        } else {
            const l = r.node(o);
            l_1.info("cp ", o, " to ", s, " with parent ", e);
            n.setNode(o, l);
            if (s !== r.parent(o)) {
                l_1.warn("Setting parent", o, r.parent(o));
                n.setParent(o, r.parent(o));
            }
            if (e !== s && o !== e) {
                l_1.debug("Setting parent", o, e);
                n.setParent(o, e);
            } else {
                l_1.info("In copy ", e, "root", s, "data", r.node(e), s);
                l_1.debug("Not Setting parent for node=", o, "cluster!==rootId", e !== s, "node!==clusterId", o !== e);
            }
            const f = r.edges(o);
            l_1.debug("Copying Edges", f);
            f.forEach((a)=>{
                l_1.info("Edge", a);
                const d = r.edge(a.v, a.w, a.name);
                l_1.info("Edge data", d, s);
                try {
                    if (R(a, s)) {
                        const g = w.get(s) || [];
                        const E = g.includes(a.v) || v(a.v, s) || a.v === s;
                        const x = g.includes(a.w) || v(a.w, s) || a.w === s;
                        if (E && x) {
                            l_1.info("Copying as ", a.v, a.w, d, a.name);
                            n.setEdge(a.v, a.w, d, a.name);
                            l_1.info("newGraph edges ", n.edges(), n.edge(n.edges()[0]));
                        } else {
                            const N = E ? s : a.v;
                            const h = x ? s : a.w;
                            l_1.info("Rebinding cross-boundary edge as ", N, h, d, a.name);
                            r.setEdge(N, h, d, a.name);
                        }
                    } else {
                        l_1.info("Skipping copy of edge ", a.v, "-->", a.w, " rootId: ", s, " clusterId:", e);
                    }
                } catch (error) {
                    l_1.error(error);
                }
            });
        }
        l_1.debug("Removing node", o);
        r.removeNode(o);
    });
}, "copy");
var O = _((e, r)=>{
    const n = r.children(e);
    let s = [
        ...n
    ];
    for (const t of n){
        A.set(t, e);
        s = [
            ...s,
            ...O(t, r)
        ];
    }
    return s;
}, "extractDescendants");
const P = _((e, r, n)=>{
    const s = e.edges().filter((a)=>a.v === r || a.w === r);
    const t = e.edges().filter((a)=>a.v === n || a.w === n);
    const o = s.map((a)=>({
            v: a.v === r ? n : a.v,
            w: a.w === r ? r : a.w
        }));
    const l = t.map((a)=>({
            v: a.v,
            w: a.w
        }));
    return o.filter((a)=>l.some((d)=>a.v === d.v && a.w === d.w));
}, "findCommonEdges");
var D = _((e, r, n)=>{
    const s = r.children(e);
    l_1.trace("Searching children of id ", e, s);
    if (s.length < 1) {
        return e;
    }
    let t;
    for (const o of s){
        const l = D(o, r, n);
        const f = P(r, n, l);
        if (l) {
            if (f.length > 0) {
                t = l;
            } else {
                return l;
            }
        }
    }
    return t;
}, "findNonClusterChild");
const S = _((e)=>{
    if (!c.has(e) || !c.get(e).externalConnections) {
        return e;
    }
    if (c.has(e)) {
        return c.get(e).id;
    }
    return e;
}, "getAnchorId");
export const a = _((e, r)=>{
    if (!e || r > 10) {
        l_1.debug("Opting out, no graph ");
        return;
    } else {
        l_1.debug("Opting in, graph ");
    }
    e.nodes().forEach((n)=>{
        if (e.children(n).length > 0) {
            l_1.warn("Cluster identified", n, " Replacement id in edges: ", D(n, e, n));
            w.set(n, O(n, e));
            c.set(n, {
                id: D(n, e, n),
                clusterData: e.node(n)
            });
        }
    });
    e.nodes().forEach((n)=>{
        const s = e.children(n);
        const t = e.edges();
        if (s.length > 0) {
            l_1.debug("Cluster identified", n, w);
            t.forEach((o)=>{
                const l = v(o.v, n);
                const f = v(o.w, n);
                if (l ^ f) {
                    l_1.warn("Edge: ", o, " leaves cluster ", n);
                    l_1.warn("Descendants of XXX ", n, ": ", w.get(n));
                    c.get(n).externalConnections = true;
                }
            });
        } else {
            l_1.debug("Not a cluster ", n, w);
        }
    });
    for (let n of c.keys()){
        const s = c.get(n).id;
        const t = e.parent(s);
        if (t !== n && c.has(t) && !c.get(t).externalConnections) {
            c.get(n).id = t;
        }
        const o = e.edges().some((l)=>l.v === n);
        if (s && c.get(n)?.externalConnections && o && L(e, s, n)) {
            const l = T(e, n, e.parent(s));
            if (l) {
                c.get(n).id = l;
            }
        }
    }
    e.edges().forEach((n)=>{
        const s = e.edge(n);
        l_1.warn(`Edge ${n.v} -> ${n.w}: ${JSON.stringify(n)}`);
        l_1.warn(`Edge ${n.v} -> ${n.w}: ${JSON.stringify(e.edge(n))}`);
        let t = n.v;
        let o = n.w;
        l_1.warn("Fix XXX", c, "ids:", n.v, n.w, "Translating: ", c.get(n.v), " --- ", c.get(n.w));
        if (c.get(n.v) || c.get(n.w)) {
            l_1.warn("Fixing and trying - removing XXX", n.v, n.w, n.name);
            t = S(n.v);
            o = S(n.w);
            e.removeEdge(n.v, n.w, n.name);
            if (t !== n.v) {
                const l = e.parent(t);
                c.get(l).externalConnections = true;
                s.fromCluster = n.v;
            }
            if (o !== n.w) {
                const l = e.parent(o);
                c.get(l).externalConnections = true;
                s.toCluster = n.w;
            }
            l_1.warn("Fix Replacing with XXX", t, o, n.name);
            e.setEdge(t, o, s, n.name);
        }
    });
    l_1.warn("Adjusted Graph", C(e));
    k(e, 0);
    l_1.trace(c);
}, "adjustClustersAndEdges");
var k = _((e, r)=>{
    l_1.warn("extractor - ", r, C(e), e.children("D"));
    if (r > 10) {
        l_1.error("Bailing out");
        return;
    }
    let n = e.nodes();
    let s = false;
    for (const t of n){
        const o = e.children(t);
        s = s || o.length > 0;
    }
    if (!s) {
        l_1.debug("Done, no node has children", e.nodes());
        return;
    }
    l_1.debug("Nodes = ", n, r);
    for (const id of n){
        l_1.debug("Extracting node", id, c, c.has(id) && !c.get(id).externalConnections, !e.parent(id), e.node(id), e.children("D"), " Depth ", r);
        if (!c.has(id)) {
            l_1.debug("Not a cluster", id, r);
        } else if (c.get(id)?.clusterData?.explicitDir && e.children(id) && e.children(id).length > 0) {
            l_1.warn("Cluster with explicit dir, creating subgraph for children", id, r);
            const rankdir = c.get(id).clusterData.dir;
            const l = new G({
                multigraph: true,
                compound: true
            }).setGraph({
                rankdir,
                nodesep: 50,
                ranksep: 50,
                marginx: 8,
                marginy: 8
            }).setDefaultEdgeLabel(()=>({}));
            b(id, e, l, id);
            const f = e.node(id) || {};
            e.setNode(id, {
                ...f,
                clusterNode: true,
                id,
                clusterData: c.get(id).clusterData,
                label: c.get(id).label,
                graph: l
            });
            l_1.warn("Subgraph for cluster with explicit dir created:", id, C(l));
        } else if (!c.get(id).externalConnections && e.children(id) && e.children(id).length > 0) {
            l_1.warn("Cluster without external connections, without a parent and with children", id, r);
            let rankdir = e.graph().rankdir === "TB" ? "LR" : "TB";
            if (c.get(id)?.clusterData?.dir) {
                rankdir = c.get(id).clusterData.dir;
                l_1.warn("Fixing dir", c.get(id).clusterData.dir, rankdir);
            }
            const f = new G({
                multigraph: true,
                compound: true
            }).setGraph({
                rankdir,
                nodesep: 50,
                ranksep: 50,
                marginx: 8,
                marginy: 8
            }).setDefaultEdgeLabel(()=>({}));
            b(id, e, f, id);
            const a = e.node(id) || {};
            e.setNode(id, {
                ...a,
                clusterNode: true,
                id,
                clusterData: c.get(id).clusterData,
                label: c.get(id).label,
                graph: f
            });
            l_1.debug("Old graph after copy", C(e));
        } else {
            l_1.warn("Cluster ** ", id, " **not meeting the criteria !externalConnections:", !c.get(id).externalConnections, " no parent: ", !e.parent(id), " children ", e.children(id) && e.children(id).length > 0, e.children("D"), r);
            l_1.debug(c);
        }
    }
    n = e.nodes();
    l_1.warn("New list of nodes", n);
    for (const t of n){
        const o = e.node(t);
        l_1.warn(" Now next level", t, o);
        if (o?.clusterNode) {
            k(o.graph, r + 1);
        }
    }
}, "extractor");
var B = _((e, r)=>{
    if (r.length === 0) {
        return [];
    }
    let n = Object.assign([], r);
    r.forEach((s)=>{
        const t = e.children(s);
        const o = B(e, t);
        n = [
            ...n,
            ...o
        ];
    });
    return n;
}, "sorter");
export const s = _((e)=>B(e, e.children()), "sortNodesByHierarchy");
var L = _((e, r, n)=>{
    let s = e.parent(r);
    while(s && s !== n){
        const t = c.get(s);
        if (t && !t.externalConnections) {
            return true;
        }
        s = e.parent(s);
    }
    return false;
}, "isNodeInExtractableCluster");
var T = _((e, r, n)=>{
    const s = e.children(r) ?? [];
    for (const t of s){
        if (t === n || v(t, n)) {
            continue;
        }
        const o = D(t, e, r);
        if (o && !L(e, o, r)) {
            return o;
        }
    }
    return null;
}, "findSafeAnchorNode");
export { c as b, J as c, D as f, C as w };
