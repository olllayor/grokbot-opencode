import { _ } from "./index.eager-vendor-Qbf9YA6n.js";
import { c } from "./chunk-chunk-RYQCIY6F-Ds0VkJA9.js";
import { am, an as an_1, ao as ao_1, ap, l as l_1, c as c_1, ag, af, ah, at, av, _ as __1, z, as as as_1, aw, y, ax, ay } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { G } from "./chunk-graph-BvS0Xx32.js";
import "./chunk-map-Bpb79OOT.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "9db616d7-69dd-408a-860e-d1211324acc9";
            e._sentryDebugIdIdentifier = "sentry-dbid-9db616d7-69dd-408a-860e-d1211324acc9";
        }
    } catch (e) {}
})();
const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = [
    "./chunk-sizeCapture-X5ZJPWSS-7g1ZgPVb.js",
    "./chunk-mermaid.core-B9Iu5CoE.js",
    "./index.eager-vendor-Qbf9YA6n.js"
]))=>i.map((i)=>d[i]);
async function _o(t, e) {
    const graph = new G({
        multigraph: true,
        compound: true
    });
    const o = [
        ...e.edges
    ];
    const config = c_1();
    const rootGroups = t.insert("g").attr("class", "root");
    const clusters = rootGroups.insert("g").attr("class", "clusters");
    const edgePaths = rootGroups.insert("g").attr("class", "edges edgePath");
    const edgeLabels = rootGroups.insert("g").attr("class", "edgeLabels");
    const nodes = rootGroups.insert("g").attr("class", "nodes");
    const nodeElements = new Map;
    const x = t.node() != null;
    await Promise.all(e.nodes.map(async (I)=>{
        if (I.isGroup) {
            graph.setNode(I.id, {
                ...I
            });
        } else {
            if (x) {
                const u = await ag(nodes, I, {
                    config,
                    dir: I.dir
                });
                const p = u.node()?.getBBox() ?? {
                    width: 0,
                    height: 0
                };
                nodeElements.set(I.id, u);
                I.width = p.width;
                I.height = p.height;
            }
            graph.setNode(I.id, {
                ...I
            });
        }
    }));
    for (const I of o){
        graph.setEdge(I.start, I.end, {
            ...I
        }, I.id);
        if (!e.edges.some((p)=>p.id === I.id)) {
            e.edges.push(I);
        }
    }
    if (globalThis.mermaidCaptureSizes) {
        const { captureNodeSizes } = await _(async ()=>{
            const { captureNodeSizes } = await import("./chunk-sizeCapture-X5ZJPWSS-7g1ZgPVb.js");
            return {
                captureNodeSizes
            };
        }, __vite__mapDeps([
            0,
            1,
            2
        ]), import.meta.url);
        captureNodeSizes(t, e);
    }
    return {
        graph,
        groups: {
            clusters,
            edgePaths,
            edgeLabels,
            nodes,
            rootGroups
        },
        nodeElements
    };
}
__1(_o, "createGraphWithElements");
const Ro = 5;
const Ge = 0.00001;
const $e = 0.000001;
function qe(t) {
    const e = [];
    for(let n = 0; n < t.length - 1; n++){
        e.push({
            a: t[n],
            b: t[n + 1]
        });
    }
    return e;
}
__1(qe, "buildSegmentList");
function Fo(t, e, n, o) {
    const s = e.x - t.x;
    const r = e.y - t.y;
    const i = o.x - n.x;
    const c = o.y - n.y;
    const a = s * c - r * i;
    if (a === 0) {
        return null;
    }
    const l = n.x - t.x;
    const g = n.y - t.y;
    const tA = (l * c - g * i) / a;
    const tB = (l * r - g * s) / a;
    if (tA <= $e || tA >= 1 - $e || tB <= $e || tB >= 1 - $e) {
        return null;
    }
    return {
        point: {
            x: t.x + tA * s,
            y: t.y + tA * r
        },
        tA,
        tB
    };
}
__1(Fo, "segmentIntersection");
function vn(t) {
    return Math.abs(t.b.x - t.a.x) >= Math.abs(t.b.y - t.a.y);
}
__1(vn, "isHorizontalSeg");
function Do(t) {
    const e = [];
    for(let n = 0; n < t.length; n++){
        const o = t[n];
        const s = qe(o.points);
        for(let r = n + 1; r < t.length; r++){
            const i = t[r];
            const c = qe(i.points);
            for (const [a, l] of s.entries()){
                for (const [g, x] of c.entries()){
                    const I = Fo(l.a, l.b, x.a, x.b);
                    if (!I) {
                        continue;
                    }
                    const u = vn(l);
                    const p = vn(x);
                    if (u !== p ? u : false) {
                        e.push({
                            jumpEdgeId: o.id,
                            otherEdgeId: i.id,
                            segIndex: a,
                            t: I.tA,
                            point: I.point
                        });
                    } else {
                        e.push({
                            jumpEdgeId: i.id,
                            otherEdgeId: o.id,
                            segIndex: g,
                            t: I.tB,
                            point: I.point
                        });
                    }
                }
            }
        }
    }
    return e;
}
__1(Do, "findEdgeIntersections");
function re(t) {
    const e = Math.round(t * 1000) / 1000;
    if (Number.isInteger(e)) {
        return `${e}`;
    }
    return `${e}`;
}
__1(re, "fmt");
function we(t) {
    return `${re(t.x)},${re(t.y)}`;
}
__1(we, "pointToString");
function Ho(t) {
    const e = t.b.x - t.a.x;
    const n = t.b.y - t.a.y;
    if (Math.abs(e) >= Math.abs(n)) {
        if (e >= 0) {
            return 1;
        }
        return 0;
    }
    if (n >= 0) {
        return 1;
    }
    return 0;
}
__1(Ho, "getArcSweepFlag");
const Gr = 0.001;
function Xo(t, e) {
    if (t.length < 2) {
        return t.map((r)=>({
                ...r
            }));
    }
    const n = t.map((r)=>({
            ...r
        }));
    const o = e.arrowTypeStart && ay[e.arrowTypeStart];
    if (o) {
        const r = t[0];
        const i = t[1];
        const c = Math.atan2(i.y - r.y, i.x - r.x);
        n[0].x = r.x + o * Math.cos(c);
        n[0].y = r.y + o * Math.sin(c);
    }
    const s = e.arrowTypeEnd && ay[e.arrowTypeEnd];
    if (s) {
        const r = t.length;
        const i = t[r - 2];
        const c = t[r - 1];
        const a = Math.atan2(c.y - i.y, c.x - i.x);
        n[r - 1].x = c.x - s * Math.cos(a);
        n[r - 1].y = c.y - s * Math.sin(a);
    }
    return n;
}
__1(Xo, "applyMarkerOffsets");
function Yo(t, e, n, o, s) {
    const r = t.point.x;
    const i = t.point.y;
    const c = {
        x: r - e * t.r,
        y: i - n * t.r
    };
    const a = {
        x: r + e * t.r,
        y: i + n * t.r
    };
    const l = [
        `L${we(c)}`
    ];
    if (s === "arc") {
        l.push(`A${re(t.r)},${re(t.r)} 0 0 ${o} ${we(a)}`);
    } else {
        l.push(`M${we(a)}`);
    }
    return l;
}
__1(Yo, "emitJump");
function Ln(t, e, n, o) {
    const s = e.x - t.x;
    const r = e.y - t.y;
    const i = n.x - e.x;
    const c = n.y - e.y;
    const a = Math.hypot(s, r);
    const l = Math.hypot(i, c);
    if (a < Ge || l < Ge) {
        return null;
    }
    const g = s / a;
    const x = r / a;
    const I = i / l;
    const u = c / l;
    const p = g * I + x * u;
    const f = Math.max(-1, Math.min(1, p));
    const y = Math.acos(f);
    if (y < Ge || Math.abs(Math.PI - y) < Ge) {
        return null;
    }
    const cutLen = Math.min(o / Math.sin(y / 2), a / 2, l / 2);
    return {
        startX: e.x - g * cutLen,
        startY: e.y - x * cutLen,
        endX: e.x + I * cutLen,
        endY: e.y + u * cutLen,
        ctrlX: e.x,
        ctrlY: e.y,
        cutLen
    };
}
__1(Ln, "computeRoundedCorner");
function Go(t, e, n) {
    const t_points = t.points;
    if (t_points.length < 2) {
        return "";
    }
    const s = Xo(t_points, t);
    const r = t.curve === "rounded";
    const i = qe(s);
    const c = new Map;
    for (const l of e){
        const g = i[l.segIndex];
        if (!g) {
            continue;
        }
        const x = Math.hypot(g.b.x - g.a.x, g.b.y - g.a.y);
        const I = c.get(l.segIndex) ?? [];
        I.push({
            t: l.t,
            point: l.point,
            d: l.t * x,
            r: n.jumpRadius
        });
        c.set(l.segIndex, I);
    }
    const a = [
        `M${we(s[0])}`
    ];
    for(let l = 0; l < i.length; l++){
        const g = i[l];
        const x = Math.hypot(g.b.x - g.a.x, g.b.y - g.a.y);
        const I = x === 0 ? 0 : (g.b.x - g.a.x) / x;
        const u = x === 0 ? 0 : (g.b.y - g.a.y) / x;
        const p = Ho(g);
        let f = 0;
        if (r && l > 0) {
            const E = Ln(s[l - 1], s[l], s[l + 1] ?? s[l], Ro);
            if (E) {
                f = E.cutLen;
            }
        }
        let y = x;
        let v = null;
        if (r && l < i.length - 1) {
            v = Ln(s[l], s[l + 1], s[l + 2] ?? s[l + 1], Ro);
            if (v) {
                y = x - v.cutLen;
            }
        }
        const M = [
            ...c.get(l) ?? []
        ].sort((E, T)=>E.t - T.t);
        for (const E of M){
            E.r = Math.min(E.r, E.d - f, y - E.d);
        }
        for(let E = 0; E < M.length - 1; E++){
            const T = M[E + 1].d - M[E].d;
            if (M[E].r + M[E + 1].r > T) {
                const m = T / 2;
                M[E].r = Math.min(M[E].r, m);
                M[E + 1].r = Math.min(M[E + 1].r, m);
            }
        }
        for (const E of M){
            if (!(E.r < Gr)) {
                a.push(...Yo(E, I, u, p, n.jumpStyle));
            }
        }
        if (r && v) {
            a.push(`L${re(v.startX)},${re(v.startY)}`);
            a.push(`Q${re(v.ctrlX)},${re(v.ctrlY)} ${re(v.endX)},${re(v.endY)}`);
        } else {
            a.push(`L${we(g.b)}`);
        }
    }
    return a.join(" ");
}
__1(Go, "rewriteEdgePath");
function $o(t) {
    return /^[\d\s+,.LMelm-]*$/.test(t);
}
__1($o, "isStraightPath");
function zo(t) {
    if (t) {
        return t === "linear" || t === "rounded" || t === "step" || t === "stepBefore" || t === "stepAfter";
    }
    return true;
}
__1(zo, "curveSupportsLineHops");
function Vo(t) {
    if (!t) {
        return null;
    }
    try {
        const e = typeof atob === "function" ? atob(t) : Buffer.from(t, "base64").toString();
        const n = JSON.parse(e);
        if (!Array.isArray(n)) {
            return null;
        }
        const o = [];
        for (const s of n){
            if (s && typeof s.x === "number" && typeof s.y === "number") {
                o.push({
                    x: s.x,
                    y: s.y
                });
            }
        }
        if (o.length >= 2) {
            return o;
        }
        return null;
    } catch  {
        return null;
    }
}
__1(Vo, "decodeDataPoints");
function jo(t, e, n) {
    if (!n.enabled) {
        return;
    }
    const o = t.node();
    if (!o) {
        return;
    }
    const s = new Map;
    for (const l of e){
        s.set(l.id, l);
    }
    const r = [];
    const i = new Map;
    for (const l of e){
        const g = typeof CSS !== "undefined" && CSS.escape ? CSS.escape(l.id) : l.id;
        const x = o.querySelector(`path[data-id="${g}"]`);
        if (!x) {
            continue;
        }
        i.set(l.id, x);
        const points = Vo(x.getAttribute("data-points")) ?? l.points;
        r.push({
            ...l,
            points
        });
    }
    const c = Do(r);
    if (c.length === 0) {
        return;
    }
    const a = new Map;
    for (const l of c){
        const g = a.get(l.jumpEdgeId) ?? [];
        g.push(l);
        a.set(l.jumpEdgeId, g);
    }
    for (const l of r){
        const g = a.get(l.id);
        if (!g || g.length === 0) {
            continue;
        }
        const I = s.get(l.id)?.curve;
        if (I !== undefined && !zo(I)) {
            continue;
        }
        const u = i.get(l.id);
        if (!u) {
            continue;
        }
        if (I === undefined) {
            const E = u.getAttribute("d") ?? "";
            if (!$o(E)) {
                continue;
            }
        }
        const p = u.getAttribute("style") ?? "";
        const f = /stroke-dasharray\s*:\s*0\s+([\d.]+)\s+[\d.]+\s+([\d.]+)/.exec(p);
        const y = f ? Number.parseFloat(f[1]) : null;
        const v = f ? Number.parseFloat(f[2]) : null;
        const M = Go(l, g, n);
        u.setAttribute("d", M);
        if (y !== null && v !== null && typeof u.getTotalLength === "function") {
            const E = u.getTotalLength();
            const T = Math.max(0, E - y - v);
            const m = `0 ${y} ${T} ${v}`;
            const S = p.replace(/stroke-dasharray\s*:[^;]*;?/g, `stroke-dasharray: ${m};`).replace(/;\s*;+/g, ";");
            u.setAttribute("style", S);
        }
    }
}
__1(jo, "applyLineJumpsToSvg");
async function Uo(t, e) {
    for (const s of t.nodes){
        if (s.isGroup) {
            await af(e.clusters, s);
        } else {
            ah(s);
        }
    }
    const n = new Map;
    for (const s of t.nodes){
        if (s?.id) {
            n.set(s.id, s);
        }
    }
    for (const s of t.edges){
        const r = s.start ? n.get(s.start) ?? {} : {};
        const i = s.end ? n.get(s.end) ?? {} : {};
        const c = at(e.edgePaths, {
            ...s
        }, {}, t.type, r, i, t.diagramId);
        if (s.label) {
            await av(e.rootGroups, s);
        }
        if (s.label) {
            Wo(s, c);
        }
    }
    const o = t.config?.swimlane?.lineHops;
    if (o !== false) {
        const jumpStyle = o === "gap" ? "gap" : "arc";
        const r = t.edges.filter((i)=>Array.isArray(i.points) && i.points.length >= 2).map((i)=>({
                id: i.id,
                points: i.points,
                curve: i.curve,
                arrowTypeStart: i.arrowTypeStart,
                arrowTypeEnd: i.arrowTypeEnd
            }));
        jo(e.edgePaths, r, {
            enabled: true,
            jumpRadius: 6,
            jumpStyle
        });
    }
}
__1(Uo, "adjustLayout");
function Wo(t, e) {
    const n = e?.updatedPath ?? e?.originalPath;
    const o = z();
    const { subGraphTitleTotalMargin } = as_1({
        flowchart: o.flowchart ?? {}
    });
    if (t.label) {
        const r = aw.get(t.id);
        let i = t.x;
        let c = t.y;
        if (n) {
            const a = y.calcLabelPosition(n);
            l_1.debug(`Moving label ${t.label} from (`, i, ",", c, ") to (", a.x, ",", a.y, ") abc88");
            if (e) {
                i = a.x;
                c = a.y;
            }
        }
        r.attr("transform", `translate(${i}, ${c + subGraphTitleTotalMargin / 2})`);
    }
    if (t?.startLabelLeft) {
        const r = ax.get(t.id).startLeft;
        let i = t?.x;
        let c = t?.y;
        if (n) {
            const a = y.calcTerminalLabelPosition(t.arrowTypeStart ? 10 : 0, "start_left", n);
            i = a.x;
            c = a.y;
        }
        r.attr("transform", `translate(${i}, ${c})`);
    }
    if (t.startLabelRight) {
        const r = ax.get(t.id).startRight;
        let i = t.x;
        let c = t.y;
        if (n) {
            const a = y.calcTerminalLabelPosition(t.arrowTypeStart ? 10 : 0, "start_right", n);
            i = a.x;
            c = a.y;
        }
        r.attr("transform", `translate(${i}, ${c})`);
    }
    if (t.endLabelLeft) {
        const r = ax.get(t.id).endLeft;
        let i = t.x;
        let c = t.y;
        if (n) {
            const a = y.calcTerminalLabelPosition(t.arrowTypeEnd ? 10 : 0, "end_left", n);
            i = a.x;
            c = a.y;
        }
        r.attr("transform", `translate(${i}, ${c})`);
    }
    if (t.endLabelRight) {
        const r = ax.get(t.id).endRight;
        let i = t.x;
        let c = t.y;
        if (n) {
            const a = y.calcTerminalLabelPosition(t.arrowTypeEnd ? 10 : 0, "end_right", n);
            i = a.x;
            c = a.y;
        }
        r.attr("transform", `translate(${i}, ${c})`);
    }
}
__1(Wo, "positionEdgeLabel");
const Mn = "__swimlane_default__";
const $r = 21;
const No = 20;
function En(t) {
    return Math.max(t.padding ?? No, No);
}
__1(En, "topLaneHorizontalPadding");
function Ko(t) {
    const { x, y, width, height } = t;
    const t_swimlaneContentTop = t.swimlaneContentTop;
    if (typeof x !== "number" || typeof y !== "number" || typeof width !== "number" || typeof height !== "number" || typeof t_swimlaneContentTop !== "number" || !Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(width) || !Number.isFinite(height) || !Number.isFinite(t_swimlaneContentTop) || width <= 0 || height <= 0) {
        delete t.groupTitleRect;
        return;
    }
    const i = y - height / 2;
    const c = Math.min(t_swimlaneContentTop, y + height / 2);
    const a = Math.min($r, Math.max(0, c - i));
    const l = i + a;
    if (l <= i) {
        delete t.groupTitleRect;
        return;
    }
    t.groupTitleRect = {
        left: x - width / 2,
        right: x + width / 2,
        top: i,
        bottom: l
    };
}
__1(Ko, "assignTopLaneTitleRect");
function qo(t) {
    const t_direction = t.direction;
    const n = t.nodes ??= [];
    for (const r of t.nodes ?? []){
        if (r.isGroup && !r.parentId) {
            r.shape = "swimlane";
            if (t_direction) {
                r.direction = t_direction;
            }
        }
    }
    const o = n.filter((r)=>!r.isGroup && !r.parentId);
    if (o.length === 0) {
        return;
    }
    let s = n.find((r)=>r.id === Mn);
    if (s) {
        if (s.isGroup) {
            s.shape = "swimlane";
            if (t_direction) {
                s.direction = t_direction;
            }
        }
    } else {
        s = {
            id: Mn,
            label: "",
            isGroup: true,
            shape: "swimlane",
            padding: 20,
            ...t_direction ? {
                direction: t_direction
            } : {}
        };
        n.push(s);
    }
    for (const r of o){
        r.parentId = Mn;
    }
}
__1(qo, "prepareLayoutForSwimlanes");
function Jo(layout) {
    const e = new Map;
    for (const a of layout.nodes ?? []){
        e.set(a.id, a);
    }
    const n = [];
    for (const ref of layout.edges ?? []){
        const l = typeof ref.start === "string" ? ref.start : undefined;
        const g = typeof ref.end === "string" ? ref.end : undefined;
        if (!(!l || !g || ref.labelNodeId)) {
            n.push({
                id: ref.id,
                src: l,
                dst: g,
                ref
            });
        }
    }
    const o = layout.nodes ?? [];
    const s = o.filter((a)=>a.isGroup);
    const r = o.filter((a)=>!a.isGroup);
    return {
        nodes: [
            ...[
                ...s
            ].reverse(),
            ...r
        ].map((a)=>a.id),
        edges: n,
        layout,
        nodeById: e
    };
}
__1(Jo, "toGraphView");
function Zo(t, e, n, o) {
    const { layout } = t;
    const t_nodeById = t.nodeById;
    const i = o?.layerGap ?? 100;
    const c = o?.nodeGap ?? 40;
    let a = 0;
    for (const I of e.layers){
        let u = 0;
        for (const p of I){
            const f = t_nodeById.get(p);
            if (!f) {
                u++;
                continue;
            }
            f.layer = a;
            f.order = u;
            const y = n.x[p] ?? u * c;
            const v = n.y[p] ?? a * i;
            f.x = y;
            f.y = v;
            u++;
        }
        a++;
    }
    const l = layout.nodes ?? [];
    const g = new Map;
    const x = [];
    for (const I of l){
        if (!I?.isGroup) {
            continue;
        }
        if (!I.parentId) {
            x.push(I);
        }
        const u = l.filter((M)=>M.parentId === I.id);
        let p = Infinity;
        let f = -Infinity;
        let y = Infinity;
        let v = -Infinity;
        for (const M of u){
            const E = M.x ?? n.x[M.id];
            const T = M.y ?? n.y[M.id];
            const m = M.width ?? 0;
            const S = M.height ?? 0;
            if (E != null && T != null) {
                p = Math.min(p, E - m / 2);
                f = Math.max(f, E + m / 2);
                y = Math.min(y, T - S / 2);
                v = Math.max(v, T + S / 2);
            }
        }
        if (p === Infinity || y === Infinity) {
            I.x = I.x ?? 0;
            I.y = I.y ?? 0;
            I.width = I.width ?? 0;
            I.height = I.height ?? 0;
        } else {
            const M = I.padding ?? 20;
            const E = I.parentId ? M : 2 * En(I);
            const T = M;
            const m = Math.max(0, f - p) + E;
            const S = Math.max(0, v - y) + T;
            const A = (p + f) / 2;
            const R = (y + v) / 2;
            I.x = A;
            I.y = R;
            I.width = m;
            I.height = S;
            g.set(I.id, {
                minX: p,
                maxX: f,
                minY: y,
                maxY: v
            });
        }
    }
    if (x.length > 0 && g.size > 0) {
        let I = Infinity;
        let u = -Infinity;
        let p = 0;
        for (const f of x){
            const y = f.padding ?? 20;
            if (y > p) {
                p = y;
            }
            const v = g.get(f.id);
            if (v) {
                I = Math.min(I, v.minY);
                u = Math.max(u, v.maxY);
            }
        }
        if (I !== Infinity && u !== -Infinity) {
            const f = Math.max(0, u - I);
            const v = Math.max(p, 36);
            const M = f + 2 * v;
            const E = (I + u) / 2;
            for (const k of x){
                k.y = E;
                k.height = M;
                k.swimlaneContentTop = I;
            }
            const T = [
                ...x
            ].sort((k, O)=>{
                const _ = k.x ?? 0;
                const H = O.x ?? 0;
                return _ - H;
            });
            const m = [];
            const S = [];
            const A = [];
            for (const k of T){
                const O = g.get(k.id);
                if (!O) {
                    continue;
                }
                const _ = Math.max(0, O.maxX - O.minX) + 2 * En(k);
                const H = (O.minX + O.maxX) / 2;
                m.push(k.id);
                S.push(H);
                A.push(_);
            }
            const R = m.length;
            if (R > 0) {
                const k = new Map;
                if (R === 1) {
                    k.set(m[0], A[0]);
                } else {
                    const O = [];
                    for(let j = 0; j < R - 1; j++){
                        O.push(S[j + 1] - S[j]);
                    }
                    const _ = new Array(R);
                    _[0] = 0;
                    for(let j = 0; j < R - 1; j++){
                        _[j + 1] = 2 * O[j] - _[j];
                    }
                    let H = 0;
                    let P = Number.POSITIVE_INFINITY;
                    for(let j = 0; j < R; j++){
                        const J = A[j];
                        if (j % 2 === 0) {
                            H = Math.max(H, J - _[j]);
                        } else {
                            P = Math.min(P, _[j] - J);
                        }
                    }
                    let G = H;
                    if (H <= P) {
                        G = (H + P) / 2;
                    } else {
                        G = H;
                    }
                    for(let j = 0; j < R; j++){
                        const J = _[j] + (j % 2 === 0 ? G : -G);
                        const dt = Math.max(A[j], J);
                        k.set(m[j], dt);
                    }
                }
                for (const O of x){
                    const _ = k.get(O.id);
                    if (_ != null) {
                        O.width = _;
                    }
                    Ko(O);
                }
            }
        }
    }
}
__1(Zo, "writeBackToLayoutData");
const zr = "[EdgeLabelNodes]";
function Qo(t) {
    const e = [];
    const n = [];
    const o = new Map;
    for (const i of t.nodes){
        o.set(i.id, i);
    }
    for (const i of t.edges){
        if (!i.label || i.label.length === 0 || i.isLayoutOnly || i.labelNodeId) {
            continue;
        }
        const c = i.start ? o.get(i.start) : undefined;
        const a = i.end ? o.get(i.end) : undefined;
        if (!c || !a) {
            l_1.warn(zr, `Edge ${i.id} has missing source or target node`);
            continue;
        }
        const l = `edge-label-${i.start}-${i.end}-${i.id}`;
        const parentId = c.parentId !== a.parentId ? a.parentId : c.parentId;
        const I = {
            id: l,
            label: i.label,
            edgeStart: i.start ?? "",
            edgeEnd: i.end ?? "",
            shape: "labelRect",
            width: 0,
            height: 0,
            isEdgeLabel: true,
            isDummy: true,
            parentId,
            isGroup: false,
            labelStyle: Array.isArray(i.labelStyle) ? i.labelStyle[0] : i.labelStyle ?? "",
            ...c.dir ? {
                dir: c.dir
            } : {}
        };
        e.push(I);
        i.labelNodeId = l;
        i.label = undefined;
        i.text = undefined;
        const u = {
            id: `${i.id}-to-label`,
            start: i.start,
            end: l,
            type: "normal",
            isLayoutOnly: true
        };
        const p = {
            id: `${i.id}-from-label`,
            start: l,
            end: i.end,
            type: "normal",
            isLayoutOnly: true
        };
        n.push(u, p);
    }
    const nodes = [
        ...t.nodes,
        ...e
    ];
    const r = [
        ...t.edges,
        ...n
    ];
    return {
        ...t,
        nodes,
        edges: r
    };
}
__1(Qo, "createEdgeLabelNodes");
const Ft = 0.001;
function oo(t) {
    const cx = t.x ?? 0;
    const cy = t.y ?? 0;
    const o = t.width ?? 0;
    const s = t.height ?? 0;
    if (o > 0 && s > 0) {
        return {
            cx,
            cy,
            rect: Ae(cx, cy, o, s)
        };
    }
}
__1(oo, "measuredNodeRect");
function so(t) {
    if (t.isGroup) {
        return;
    }
    const e = oo(t);
    if (e) {
        return {
            id: String(t.id ?? ""),
            cx: e.cx,
            cy: e.cy,
            rect: e.rect
        };
    }
}
__1(so, "nodeBoundsInfoFor");
function oe(t, e, n = Ft) {
    return Math.abs(t.x - e.x) < n && Math.abs(t.y - e.y) < n;
}
__1(oe, "samePoint");
function ft(t, e, n = Ft) {
    return Math.abs(t.x - e.x) < n;
}
__1(ft, "sameX");
function ht(t, e, n = Ft) {
    return Math.abs(t.y - e.y) < n;
}
__1(ht, "sameY");
function Tt(t, e, n = Ft) {
    return ht(t, e, n) && Math.abs(t.x - e.x) > n;
}
__1(Tt, "isHorizontalSegment");
function wt(t, e, n = Ft) {
    return ft(t, e, n) && Math.abs(t.y - e.y) > n;
}
__1(wt, "isVerticalSegment");
function zt(t, e, n, o) {
    return Math.max(0, Math.min(Math.max(t, e), Math.max(n, o)) - Math.max(Math.min(t, e), Math.min(n, o)));
}
__1(zt, "overlapLength");
function ce(t, e, n = Ft) {
    if (t.horizontal && e.horizontal && ht(t.a, e.a, n)) {
        return zt(t.a.x, t.b.x, e.a.x, e.b.x);
    }
    if (t.vertical && e.vertical && ft(t.a, e.a, n)) {
        return zt(t.a.y, t.b.y, e.a.y, e.b.y);
    }
    return 0;
}
__1(ce, "sameAxisSegmentOverlapLength");
function Re(t, e = Ft) {
    const n = [];
    for(let index = 0; index < t.length - 1; index++){
        const s = t[index];
        const r = t[index + 1];
        const horizontal = Tt(s, r, e);
        const vertical = wt(s, r, e);
        if (horizontal || vertical) {
            n.push({
                index,
                a: s,
                b: r,
                horizontal,
                vertical
            });
        }
    }
    return n;
}
__1(Re, "orthogonalSegmentsForPoints");
function Qt(t, e = Ft) {
    const n = Re(t, e);
    let o = 0;
    for(let s = 1; s < n.length; s++){
        n[s - 1].horizontal !== n[s].horizontal && o++;
    }
    return o;
}
__1(Qt, "countOrthogonalBends");
function pt(t, e = Ft) {
    const n = [];
    for (const o of t){
        const s = n.length > 0 ? n[n.length - 1] : undefined;
        if (!s || !oe(s, o, e)) {
            n.push({
                x: o.x,
                y: o.y
            });
        }
    }
    return n;
}
__1(pt, "dedupeConsecutivePoints");
function ro(t, e = Ft) {
    if (!t || t.length !== 4) {
        return;
    }
    const [n, o, s, r] = t;
    if (Tt(n, o, e) && wt(o, s, e) && Tt(s, r, e)) {
        return {
            kind: "HVH",
            p0: n,
            p1: o,
            p2: s,
            p3: r
        };
    }
    if (wt(n, o, e) && Tt(o, s, e) && wt(s, r, e)) {
        return {
            kind: "VHV",
            p0: n,
            p1: o,
            p2: s,
            p3: r
        };
    }
}
__1(ro, "classifyThreeSegmentRoute");
function cn(t, e, n, o = 0) {
    const s = Math.min(t.x, e.x);
    const r = Math.max(t.x, e.x);
    const i = Math.min(t.y, e.y);
    const c = Math.max(t.y, e.y);
    return r > n.left - o && s < n.right + o && c > n.top - o && i < n.bottom + o;
}
__1(cn, "segmentBoundsOverlapRect");
function io(t, e, n = 0) {
    return t.x > e.left + n && t.x < e.right - n && t.y > e.top + n && t.y < e.bottom - n;
}
__1(io, "pointInsideRect");
function ts(t, e) {
    return t.left <= e.left && t.right >= e.right && t.top <= e.top && t.bottom >= e.bottom;
}
__1(ts, "rectContainsRect");
function Je(t, e) {
    return t.left < e.right && t.right > e.left && t.top < e.bottom && t.bottom > e.top;
}
__1(Je, "rectsOverlap");
function Tn(t, e) {
    return {
        left: t.left - e,
        right: t.right + e,
        top: t.top - e,
        bottom: t.bottom + e
    };
}
__1(Tn, "inflateRect");
function Ae(t, e, n, o) {
    return {
        left: t - n / 2,
        right: t + n / 2,
        top: e - o / 2,
        bottom: e + o / 2
    };
}
__1(Ae, "rectFromCenterSize");
function qt(t) {
    return oo(t)?.rect;
}
__1(qt, "rectOfNodeBounds");
function Ie(t, e) {
    switch(e){
        case "top":
            return {
                x: t.cx,
                y: t.rect.top
            };
        case "bottom":
            return {
                x: t.cx,
                y: t.rect.bottom
            };
        case "left":
            return {
                x: t.rect.left,
                y: t.cy
            };
        case "right":
            return {
                x: t.rect.right,
                y: t.cy
            };
    }
}
__1(Ie, "portForRectSide");
function co(t, e, n, o, s, r = Ft) {
    const i = e === "left" || e === "right";
    const c = o === "left" || o === "right";
    if (i && c) {
        if (e === "right" && o === "left" && t.x < n.x || e === "left" && o === "right" && t.x > n.x) {
            if (ht(t, n, r)) {
                return [
                    t,
                    n
                ];
            }
            const x = (t.x + n.x) / 2;
            return [
                t,
                {
                    x,
                    y: t.y
                },
                {
                    x,
                    y: n.y
                },
                n
            ];
        }
        if (e === o) {
            if (ht(t, n, r)) {
                return;
            }
            const x = e === "left" ? Math.min(t.x, n.x) - s : Math.max(t.x, n.x) + s;
            return [
                t,
                {
                    x,
                    y: t.y
                },
                {
                    x,
                    y: n.y
                },
                n
            ];
        }
        return;
    }
    if (!i && !c) {
        if (e === o) {
            if (ft(t, n, r)) {
                return;
            }
            const I = e === "top" ? Math.min(t.y, n.y) - s : Math.max(t.y, n.y) + s;
            return [
                t,
                {
                    x: t.x,
                    y: I
                },
                {
                    x: n.x,
                    y: I
                },
                n
            ];
        }
        if (!(e === "bottom" && o === "top" && t.y < n.y || e === "top" && o === "bottom" && t.y > n.y)) {
            return;
        }
        if (ft(t, n, r)) {
            return [
                t,
                n
            ];
        }
        const x = (t.y + n.y) / 2;
        return [
            t,
            {
                x: t.x,
                y: x
            },
            {
                x: n.x,
                y: x
            },
            n
        ];
    }
    if (i && !c) {
        const g = e === "right" && n.x > t.x || e === "left" && n.x < t.x;
        const x = o === "top" && t.y < n.y || o === "bottom" && t.y > n.y;
        if (g && x) {
            return [
                t,
                {
                    x: n.x,
                    y: t.y
                },
                n
            ];
        }
        return undefined;
    }
    const a = e === "bottom" && n.y > t.y || e === "top" && n.y < t.y;
    const l = o === "left" && t.x < n.x || o === "right" && t.x > n.x;
    if (a && l) {
        return [
            t,
            {
                x: t.x,
                y: n.y
            },
            n
        ];
    }
}
__1(co, "buildOrthogonalPortPath");
function ao(t, e, n, o) {
    if (e === "left" || e === "right") {
        return [
            t,
            {
                x: o,
                y: t.y
            },
            {
                x: o,
                y: n.y
            },
            n
        ];
    }
    return [
        t,
        {
            x: t.x,
            y: o
        },
        {
            x: n.x,
            y: o
        },
        n
    ];
}
__1(ao, "buildSameSideTrackPath");
function an(t) {
    const nodeInfoById = new Map;
    const n = [];
    for (const o of t){
        if (o.isEdgeLabel) {
            continue;
        }
        const s = so(o);
        if (s) {
            nodeInfoById.set(s.id, s);
            n.push({
                id: s.id,
                rect: s.rect
            });
        }
    }
    return {
        nodeInfoById,
        realNodeRects: n
    };
}
__1(an, "collectRealNodeBounds");
function me(t) {
    const e = [];
    const labelNodeRects = [];
    for (const o of t){
        const s = so(o);
        if (!s) {
            continue;
        }
        const r = {
            id: s.id,
            rect: s.rect
        };
        if (o.isEdgeLabel) {
            labelNodeRects.push(r);
        } else {
            e.push(r);
        }
    }
    return {
        realNodeRects: e,
        labelNodeRects
    };
}
__1(me, "collectNodeRectEntries");
function es(t, { includeEdgeLabels = true } = {}) {
    const n = [];
    for (const o of t){
        if (o.isGroup || !includeEdgeLabels && o.isEdgeLabel) {
            continue;
        }
        const s = o.x ?? 0;
        const r = o.y ?? 0;
        const i = o.width ?? 0;
        const c = o.height ?? 0;
        n.push({
            nodeId: o.id,
            ...Ae(s, r, i, c)
        });
    }
    return n;
}
__1(es, "collectLayoutNodeRects");
function lo({ start, end }, e, n = Ft) {
    if (!start || !end) {
        return;
    }
    const srcInfo = e.get(start);
    const dstInfo = e.get(end);
    if (!(!srcInfo || !dstInfo)) {
        return {
            srcId: start,
            dstId: end,
            srcInfo,
            dstInfo,
            collinearX: Math.abs(srcInfo.cx - dstInfo.cx) < n,
            collinearY: Math.abs(srcInfo.cy - dstInfo.cy) < n
        };
    }
}
__1(lo, "getNodePairGeometry");
function At(t, e, n, o = [], s = 0) {
    for (const r of n){
        if (!o.includes(r.id) && cn(t, e, r.rect, -s)) {
            return true;
        }
    }
    return false;
}
__1(At, "segmentHitsAnyRect");
function fo(t, e, n, o, s = Ft, r = 0.000001) {
    const i = ht(t, e, s);
    const c = ft(t, e, s);
    const a = ht(n, o, s);
    const l = ft(n, o, s);
    if (i && a || c && l || !(i || c) || !(a || l)) {
        return false;
    }
    const g = i ? {
        a: t,
        b: e
    } : {
        a: n,
        b: o
    };
    const x = c ? {
        a: t,
        b: e
    } : {
        a: n,
        b: o
    };
    const I = g.a.y;
    const u = Math.min(g.a.x, g.b.x);
    const p = Math.max(g.a.x, g.b.x);
    const f = x.a.x;
    const y = Math.min(x.a.y, x.b.y);
    const v = Math.max(x.a.y, x.b.y);
    if (f < u || f > p || I < y || I > v) {
        return false;
    }
    const M = Math.abs(f - g.a.x) < r && Math.abs(I - g.a.y) < r || Math.abs(f - g.b.x) < r && Math.abs(I - g.b.y) < r;
    const E = Math.abs(f - x.a.x) < r && Math.abs(I - x.a.y) < r || Math.abs(f - x.b.x) < r && Math.abs(I - x.b.y) < r;
    return !(M && E);
}
__1(fo, "orthogonalSegmentsCross");
function ns(t, e, n, o, s = Ft) {
    const r = ht(t, e, s);
    const i = ft(t, e, s);
    const c = ht(n, o, s);
    const a = ft(n, o, s);
    if (i && a && ft(t, n, s)) {
        return zt(t.y, e.y, n.y, o.y) > s;
    }
    if (r && c && ht(t, n, s)) {
        return zt(t.x, e.x, n.x, o.x) > s;
    }
    return false;
}
__1(ns, "sameAxisSegmentsOverlap");
function Ze(t, e, n, o, { epsilon = Ft, skipDegenerateOther = false } = {}) {
    for (const i of n){
        if (i === o || i.isLayoutOnly) {
            continue;
        }
        const c = i.points;
        if (!(!c || c.length < 2)) {
            for(let a = 0; a < c.length - 1; a++){
                const l = c[a];
                const g = c[a + 1];
                if (!(skipDegenerateOther && oe(l, g, epsilon)) && (fo(t, e, l, g, epsilon) || ns(t, e, l, g, epsilon))) {
                    return true;
                }
            }
        }
    }
    return false;
}
__1(Ze, "segmentConflictsWithAnyEdge");
function le(t, e, n, o, s = Ft) {
    const r = ht(t, e, s);
    const i = ft(t, e, s);
    const c = ht(n, o, s);
    const a = ft(n, o, s);
    if (!(r && a || i && c)) {
        return false;
    }
    const l = r ? {
        a: t,
        b: e
    } : {
        a: n,
        b: o
    };
    const g = r ? {
        a: n,
        b: o
    } : {
        a: t,
        b: e
    };
    const x = l.a.y;
    const I = Math.min(l.a.x, l.b.x);
    const u = Math.max(l.a.x, l.b.x);
    const p = g.a.x;
    const f = Math.min(g.a.y, g.b.y);
    const y = Math.max(g.a.y, g.b.y);
    return p > I + s && p < u - s && x > f + s && x < y - s;
}
__1(le, "orthogonalSegmentsStrictlyCross");
function wn(t, e, n) {
    const o = Math.min(e, n);
    const s = Math.max(e, n);
    return t > o + Ft && t < s - Ft;
}
__1(wn, "strictlyBetween");
function os(t, e, n) {
    if (ft(t, e) && ft(e, n)) {
        return wn(e.y, t.y, n.y);
    }
    if (ht(t, e) && ht(e, n)) {
        return wn(e.x, t.x, n.x);
    }
    return false;
}
__1(os, "isCollinearIntermediate");
function ss(t) {
    let changed = false;
    const n = [];
    for(let o = 0; o < t.length; o++){
        const s = n[n.length - 1];
        const r = t[o];
        const i = o + 1 < t.length ? t[o + 1] : undefined;
        if (s && i) {
            if (oe(s, i)) {
                o++;
                changed = true;
                continue;
            }
            if (os(s, r, i)) {
                changed = true;
                continue;
            }
        }
        n.push(r);
    }
    return {
        points: n,
        changed
    };
}
__1(ss, "simplifyPolylineOnce");
function Qe(t) {
    const e = [
        t[0]
    ];
    for(let o = 1; o < t.length; o++){
        const s = e[e.length - 1];
        const r = t[o];
        if (!ft(s, r) && !ht(s, r)) {
            const i = e.length >= 2 ? e[e.length - 2] : undefined;
            const a = (i ? ft(i, s) : false) ? {
                x: s.x,
                y: r.y
            } : {
                x: r.x,
                y: s.y
            };
            e.push(a);
        }
        e.push(r);
    }
    const n = [];
    for (const o of e){
        const s = n[n.length - 1];
        if (!s || !oe(s, o)) {
            n.push(o);
        }
    }
    return n;
}
__1(Qe, "orthogonalizePolyline");
function ae(t) {
    if (t.length < 3) {
        return t;
    }
    let e = [
        ...t
    ];
    for(let n = 0; n < 32; n++){
        const o = ss(e);
        e = o.points;
        if (!o.changed) {
            break;
        }
    }
    return e;
}
__1(ae, "simplifyPolyline");
const nt = 0.001;
const Vr = 0.5;
const Oo = 4;
function uo(t, e, n) {
    const o = t;
    if (o.isLayoutOnly || !o.points || o.points.length < n) {
        return;
    }
    const s = o.start ? e.get(o.start) : undefined;
    const r = o.end ? e.get(o.end) : undefined;
    return {
        edge: o,
        points: o.points,
        srcRect: s ? qt(s) : undefined,
        dstRect: r ? qt(r) : undefined
    };
}
__1(uo, "endpointContextFor");
function rs(t, e, n) {
    if (ht(t, e, nt)) {
        return {
            x: t.x < n.left ? n.left : n.right,
            y: t.y
        };
    }
    if (ft(t, e, nt)) {
        const o = t.y < n.top ? n.top : n.bottom;
        return {
            x: t.x,
            y: o
        };
    }
    return {
        x: Math.min(n.right, Math.max(n.left, t.x)),
        y: Math.min(n.bottom, Math.max(n.top, t.y))
    };
}
__1(rs, "segmentEnterPoint");
function An(t, e, n) {
    const o = n ? 1 : -1;
    let s = n ? 0 : t.length - 1;
    while(s >= 0 && s < t.length && io(t[s], e, Vr)){
        s += o;
    }
    if (s < 0 || s >= t.length) {
        return t;
    }
    const r = s - o;
    if (r < 0 || r >= t.length) {
        return t;
    }
    const i = rs(t[s], t[r], e);
    if (n) {
        return [
            i,
            ...t.slice(s)
        ];
    }
    return [
        ...t.slice(0, s + 1),
        i
    ];
}
__1(An, "clipEndpoint");
function is(t, e) {
    for (const n of t){
        const o = uo(n, e, 2);
        if (!o) {
            continue;
        }
        let s = [
            ...o.points
        ];
        if (o.srcRect) {
            s = An(s, o.srcRect, true);
        }
        if (o.dstRect) {
            s = An(s, o.dstRect, false);
        }
        s = ae(Qe(s));
        s = ho(s, o.srcRect, o.dstRect);
        o.edge.points = ae(Qe(s));
    }
}
__1(is, "clipEdgeEndpointsToNodeBoundaries");
function Rn(t, e, n, o = false) {
    if (ht(t, e, nt)) {
        if (e.y < n.top - nt || e.y > n.bottom + nt) {
            return e;
        }
        if (o) {
            if (t.x < n.left - nt) {
                return {
                    x: n.left,
                    y: t.y
                };
            }
            if (t.x > n.right + nt) {
                return {
                    x: n.right,
                    y: t.y
                };
            }
        }
        return {
            x: Math.abs(e.x - n.left) <= Math.abs(e.x - n.right) ? n.left : n.right,
            y: t.y
        };
    }
    if (ft(t, e, nt)) {
        if (e.x < n.left - nt || e.x > n.right + nt) {
            return e;
        }
        if (o) {
            if (t.y < n.top - nt) {
                return {
                    x: t.x,
                    y: n.top
                };
            }
            if (t.y > n.bottom + nt) {
                return {
                    x: t.x,
                    y: n.bottom
                };
            }
        }
        const s = Math.abs(e.y - n.top) <= Math.abs(e.y - n.bottom);
        return {
            x: t.x,
            y: s ? n.top : n.bottom
        };
    }
    return e;
}
__1(Rn, "snapEndpointToBoundary");
function tn(t, e, n) {
    const o = t[e];
    for(let s = e + n; s >= 0 && s < t.length; s += n){
        const r = t[s];
        if (!oe(r, o, nt)) {
            return r;
        }
    }
    return t[e + n];
}
__1(tn, "firstDistinctAdjacent");
function en(t, e) {
    const n = t + Oo;
    const o = e - Oo;
    if (n <= o) {
        return {
            lo: n,
            hi: o
        };
    }
    return {
        lo: (t + e) / 2,
        hi: (t + e) / 2
    };
}
__1(en, "cornerClearanceRange");
function Nn(t, e, n) {
    const { lo, hi } = en(e, n);
    return Math.min(hi, Math.max(lo, t));
}
__1(Nn, "clampToCornerClearance");
function cs(t) {
    const e = Math.max(...t.map((o)=>o.lo));
    const n = Math.min(...t.map((o)=>o.hi));
    if (!(e > n)) {
        return {
            lo: e,
            hi: n
        };
    }
}
__1(cs, "intersectRanges");
function On(t, e) {
    if (e === "left" || e === "right") {
        return en(t.top, t.bottom);
    }
    return en(t.left, t.right);
}
__1(On, "clearanceRangeForSide");
function nn(t, e, n) {
    const o = t.y >= n.top - nt && t.y <= n.bottom + nt;
    const s = t.x >= n.left - nt && t.x <= n.right + nt;
    if (ht(t, e, nt) && o) {
        if (Math.abs(t.x - n.left) < nt) {
            return "left";
        }
        if (Math.abs(t.x - n.right) < nt) {
            return "right";
        }
    }
    if (ft(t, e, nt) && s) {
        if (Math.abs(t.y - n.top) < nt) {
            return "top";
        }
        if (Math.abs(t.y - n.bottom) < nt) {
            return "bottom";
        }
    }
}
__1(nn, "terminalSideForSegment");
function Pe(t) {
    return t === "left" || t === "right";
}
__1(Pe, "isHorizontalSide");
function as(t, e, n, o, s) {
    const r = [];
    const i = n ? nn(t, e, n) : undefined;
    const c = o ? nn(e, t, o) : undefined;
    if (n && i && Pe(i) === s) {
        r.push(On(n, i));
    }
    if (o && c && Pe(c) === s) {
        r.push(On(o, c));
    }
    if (r.length > 0) {
        return cs(r);
    }
}
__1(as, "straightClearanceRange");
function Pn(t, e, n, o, s) {
    const r = as(t, e, n, o, s);
    if (!r) {
        return;
    }
    const i = s ? t.y : t.x;
    const c = Math.min(r.hi, Math.max(r.lo, i));
    if (!(Math.abs(c - i) < nt)) {
        if (s) {
            return [
                {
                    x: t.x,
                    y: c
                },
                {
                    x: e.x,
                    y: c
                }
            ];
        }
        return [
            {
                x: c,
                y: t.y
            },
            {
                x: c,
                y: e.y
            }
        ];
    }
}
__1(Pn, "clearStraightEndpointCornerAxis");
function ho(t, e, n) {
    if (t.length !== 2) {
        return t;
    }
    const [o, s] = t;
    if (ht(o, s, nt)) {
        return Pn(o, s, e, n, true) ?? t;
    }
    if (ft(o, s, nt)) {
        return Pn(o, s, e, n, false) ?? t;
    }
    return t;
}
__1(ho, "clearStraightEndpointCornerConnections");
function ls(t, e, n) {
    if (Pe(n)) {
        return {
            x: t.x,
            y: Nn(t.y, e.top, e.bottom)
        };
    }
    return {
        x: Nn(t.x, e.left, e.right),
        y: t.y
    };
}
__1(ls, "cornerClearedEndpoint");
function fs(t, e, n, o, s, r) {
    const i = t.map((c)=>({
            ...c
        }));
    for(let c = e; c >= 0 && c < t.length; c += n){
        const a = t[c];
        if (r && !ht(a, o, nt) || !r && !ft(a, o, nt)) {
            break;
        }
        if (r) {
            i[c].y = s.y;
        } else {
            i[c].x = s.x;
        }
    }
    return i;
}
__1(fs, "moveCollinearEndpointRun");
function Bn(t, e, n) {
    if (t.length < 2) {
        return t;
    }
    const o = n ? 0 : t.length - 1;
    const s = n ? 1 : -1;
    const r = t[o];
    const i = tn(t, o, s);
    if (!i) {
        return t;
    }
    const c = nn(r, i, e);
    if (!c) {
        return t;
    }
    const a = Pe(c);
    const l = ls(r, e, c);
    if (oe(r, l, nt)) {
        return t;
    }
    return fs(t, o, s, r, l, a);
}
__1(Bn, "clearEndpointCornerConnection");
function kn(t, e, n) {
    const o = Math.min(t.x, e.x) >= n.left - nt && Math.max(t.x, e.x) <= n.right + nt;
    const s = Math.min(t.y, e.y) >= n.top - nt && Math.max(t.y, e.y) <= n.bottom + nt;
    if (Math.abs(t.y - n.top) < nt && Math.abs(e.y - n.top) < nt && o) {
        return "top";
    }
    if (Math.abs(t.y - n.bottom) < nt && Math.abs(e.y - n.bottom) < nt && o) {
        return "bottom";
    }
    if (Math.abs(t.x - n.left) < nt && Math.abs(e.x - n.left) < nt && s) {
        return "left";
    }
    if (Math.abs(t.x - n.right) < nt && Math.abs(e.x - n.right) < nt && s) {
        return "right";
    }
}
__1(kn, "borderSideForSegment");
function _n(t, e, n, o) {
    switch(t){
        case "top":
            return ft(e, n, nt) && n.y < o.top - nt;
        case "bottom":
            return ft(e, n, nt) && n.y > o.bottom + nt;
        case "left":
            return ht(e, n, nt) && n.x < o.left - nt;
        case "right":
            return ht(e, n, nt) && n.x > o.right + nt;
    }
}
__1(_n, "leavesOutward");
function Fn(t, e, n) {
    if (t.length < 3) {
        return t;
    }
    if (n) {
        const r = kn(t[0], t[1], e);
        if (r && _n(r, t[1], t[2], e)) {
            return t.slice(1);
        }
        return t;
    }
    const o = t.length - 1;
    const s = kn(t[o - 1], t[o], e);
    if (s && _n(s, t[o - 1], t[o - 2], e)) {
        return t.slice(0, o);
    }
    return t;
}
__1(Fn, "collapseOwnBorderStub");
function ds(t, e, n) {
    let o = t;
    if (e) {
        const r = tn(o, 0, 1);
        if (r) {
            const i = Rn(r, o[0], e);
            if (i !== o[0]) {
                o = [
                    i,
                    ...o.slice(1)
                ];
            }
        }
        o = Fn(o, e, true);
    }
    if (n) {
        const r = o.length - 1;
        const i = tn(o, r, -1);
        if (i) {
            const c = Rn(i, o[r], n, true);
            if (c !== o[r]) {
                o = [
                    ...o.slice(0, r),
                    c
                ];
            }
        }
        o = Fn(o, n, false);
    }
    const s = ho(o, e, n);
    if (s !== o || o.length === 2) {
        return s;
    }
    if (e) {
        o = Bn(o, e, true);
    }
    if (n) {
        o = Bn(o, n, false);
    }
    return o;
}
__1(ds, "snapAndCollapseEndpoints");
function Dn(t, e) {
    for (const n of t){
        const o = uo(n, e, 2);
        if (!o) {
            continue;
        }
        const s = pt(o.points, nt);
        const r = ds(s, o.srcRect, o.dstRect);
        if (r.length < 3) {
            o.edge.points = r;
            continue;
        }
        const i = [
            r[0],
            {
                ...r[0]
            },
            ...r.slice(1, -1),
            r[r.length - 1],
            {
                ...r[r.length - 1]
            }
        ];
        o.edge.points = i;
    }
}
__1(Dn, "prepareEdgeEndpointsForRenderer");
function go(t) {
    return new Map(t.map((e)=>[
            e.id,
            e
        ]));
}
__1(go, "buildNodeMap");
function us({ parentId }, e) {
    let o = null;
    while(parentId){
        const s = e.get(parentId);
        if (!s?.isGroup) {
            break;
        }
        o = s.id;
        parentId = s.parentId;
    }
    return o;
}
__1(us, "resolveTopLevelGroupId");
function Hn(t, e) {
    let n = 0;
    let t_parentId = t.parentId;
    while(t_parentId){
        const s = e.get(t_parentId);
        if (!s?.isGroup) {
            break;
        }
        n++;
        t_parentId = s.parentId;
    }
    return n;
}
__1(Hn, "groupDepth");
function po(t) {
    let e = Infinity;
    let n = -Infinity;
    let o = Infinity;
    let s = -Infinity;
    for (const r of t){
        const { x, y } = r;
        if (typeof x !== "number" || typeof y !== "number") {
            continue;
        }
        const a = r.width ?? 0;
        const l = r.height ?? 0;
        e = Math.min(e, x - a / 2);
        n = Math.max(n, x + a / 2);
        o = Math.min(o, y - l / 2);
        s = Math.max(s, y + l / 2);
    }
    if (e === Infinity || o === Infinity) {
        return null;
    }
    return {
        minX: e,
        maxX: n,
        minY: o,
        maxY: s
    };
}
__1(po, "boundsForChildren");
function hs(t, e) {
    const n = t.padding ?? 20;
    t.x = (e.minX + e.maxX) / 2;
    t.y = (e.minY + e.maxY) / 2;
    t.width = Math.max(0, e.maxX - e.minX) + n;
    t.height = Math.max(0, e.maxY - e.minY) + n;
}
__1(hs, "applyGroupBounds");
function gs(t) {
    const e = go(t);
    const n = t.filter((o)=>o.isGroup && o.parentId).sort((o, s)=>Hn(s, e) - Hn(o, e));
    for (const o of n){
        const s = t.filter((i)=>i.parentId === o.id);
        const r = po(s);
        if (r) {
            hs(o, r);
        }
    }
}
__1(gs, "recomputeNestedGroupBounds");
function on(t, e) {
    const n = t.nodes ?? [];
    const o = t.edges ?? [];
    const s = n.filter((a)=>!a.isGroup);
    let r = Infinity;
    let i = -Infinity;
    for (const a of s){
        const l = a[e];
        if (typeof l === "number") {
            r = Math.min(r, l);
            i = Math.max(i, l);
        }
    }
    if (!Number.isFinite(r) || !Number.isFinite(i)) {
        return false;
    }
    const c = __1((a)=>r + i - a, "mirror");
    for (const a of n){
        const l = a[e];
        if (typeof l === "number") {
            a[e] = c(l);
        }
        const g = a.groupTitleRect;
        if (g) {
            a.groupTitleRect = e === "x" ? {
                ...g,
                left: c(g.right),
                right: c(g.left)
            } : {
                ...g,
                top: c(g.bottom),
                bottom: c(g.top)
            };
        }
    }
    for (const a of o){
        for (const l of a.points ?? []){
            l[e] = c(l[e]);
        }
    }
    return true;
}
__1(on, "mirrorAxis");
function ps(t) {
    if ((t.nodes ?? []).some((n)=>!n.isGroup)) {
        return on(t, "y");
    }
    return true;
}
__1(ps, "applyBtDirectionTransform");
function ms(t, e = "LR") {
    const n = t.nodes ?? [];
    const o = t.edges ?? [];
    const s = n.filter((P)=>!P.isGroup);
    let r = Infinity;
    let i = Infinity;
    for (const P of s){
        const G = P.x ?? 0;
        const j = P.y ?? 0;
        if (G < r) {
            r = G;
        }
        if (j < i) {
            i = j;
        }
    }
    if (!Number.isFinite(r) || !Number.isFinite(i)) {
        return false;
    }
    const c = 36;
    let a = 0;
    let l = 0;
    for (const P of s){
        a += P.width ?? 0;
        l += P.height ?? 0;
    }
    const g = a / s.length;
    const x = l / s.length;
    const I = x > 0 ? Math.max(1, g / x) : 1;
    for (const P of s){
        const G = P.x ?? 0;
        const J = ((P.y ?? 0) - i) * I + c;
        const dt = G - r;
        P.x = J;
        P.y = dt;
    }
    for (const P of o){
        if (P.points) {
            for (const G of P.points){
                const j = G.x;
                const dt = (G.y - i) * I + c;
                const mt = j - r;
                G.x = dt;
                G.y = mt;
            }
        }
    }
    gs(n);
    const u = n.filter((P)=>P.isGroup && !P.parentId);
    if (u.length === 0) {
        if (e === "RL") {
            on(t, "x");
        }
        return true;
    }
    const p = go(n);
    const f = new Map;
    for (const P of n){
        if (P.isGroup) {
            continue;
        }
        const G = us(P, p);
        if (!G) {
            continue;
        }
        const j = f.get(G) ?? [];
        j.push(P);
        f.set(G, j);
    }
    let y = 0;
    for (const P of u){
        const G = P.padding ?? 0;
        if (G > y) {
            y = G;
        }
    }
    const v = [];
    let M = Infinity;
    let E = -Infinity;
    for (const lane of u){
        const G = f.get(lane.id) ?? [];
        const j = po(G);
        if (j) {
            M = Math.min(M, j.minX);
            E = Math.max(E, j.maxX);
            v.push({
                lane,
                contentTop: j.minY,
                contentBottom: j.maxY,
                centerY: (j.minY + j.maxY) / 2
            });
        }
    }
    if (M === Infinity || E === -Infinity) {
        return true;
    }
    const T = Math.max(0, E - M);
    const m = Math.max(y, 10);
    const S = T + 2 * m;
    const A = c + S;
    const left = (M + E) / 2 - S / 2 - c;
    const _ = left + A / 2;
    const H = Math.max(y, c);
    v.sort((P, G)=>P.centerY - G.centerY);
    for(let P = 0; P < v.length; P++){
        const G = v[P];
        let j;
        let J;
        if (P === 0) {
            j = G.contentTop - H;
        } else {
            j = (v[P - 1].contentBottom + G.contentTop) / 2;
        }
        if (P === v.length - 1) {
            J = G.contentBottom + H;
        } else {
            const kt = v[P + 1];
            J = (G.contentBottom + kt.contentTop) / 2;
        }
        const dt = Math.max(0, J - j);
        const mt = (j + J) / 2;
        G.lane.x = _;
        G.lane.y = mt;
        G.lane.width = A;
        G.lane.height = dt;
        G.lane.swimlaneContentTop = G.contentTop;
        G.lane.groupTitleRect = {
            left,
            right: left + c,
            top: j,
            bottom: J
        };
    }
    if (e === "RL") {
        on(t, "x");
    }
    return true;
}
__1(ms, "applyLrDirectionTransform");
const se = 0.000001;
const jr = 8;
const ze = jr;
const Ur = [
    0,
    ze,
    -ze,
    2 * ze,
    -2 * ze
];
function ys(t, e) {
    const { nodeInfoById, realNodeRects } = an(e);
    for (const s of t){
        if (s.isLayoutOnly) {
            continue;
        }
        const r = s.points;
        if (!r || r.length < 4) {
            continue;
        }
        const i = ro(pt(r, se), se);
        if (!i) {
            continue;
        }
        const { p3 } = i;
        const a = i.kind === "HVH";
        const l = lo(s, nodeInfoById, se);
        if (!l) {
            continue;
        }
        const { srcId, dstId, srcInfo, dstInfo, collinearX, collinearY } = l;
        if (collinearX || collinearY) {
            continue;
        }
        let y;
        const v = srcInfo.rect;
        for (const M of Ur){
            let E;
            let T;
            let m;
            if (a) {
                const _ = dstInfo.cy > srcInfo.cy ? v.bottom : v.top;
                const H = srcInfo.cx + M;
                if (H <= v.left + se || H >= v.right - se) {
                    continue;
                }
                E = {
                    x: H,
                    y: _
                };
                T = {
                    x: H,
                    y: p3.y
                };
                m = {
                    x: p3.x,
                    y: p3.y
                };
            } else {
                const _ = dstInfo.cx > srcInfo.cx ? v.right : v.left;
                const H = srcInfo.cy + M;
                if (H <= v.top + se || H >= v.bottom - se) {
                    continue;
                }
                E = {
                    x: _,
                    y: H
                };
                T = {
                    x: p3.x,
                    y: H
                };
                m = {
                    x: p3.x,
                    y: p3.y
                };
            }
            const S = oe(E, T, se);
            const A = oe(T, m, se);
            if (S && A || !S && At(E, T, realNodeRects, [
                srcId
            ], 1) || !A && At(T, m, realNodeRects, [
                dstId
            ], 1)) {
                continue;
            }
            const R = !S && Ze(E, T, t, s, {
                epsilon: se,
                skipDegenerateOther: true
            });
            const k = !A && Ze(T, m, t, s, {
                epsilon: se,
                skipDegenerateOther: true
            });
            if (!(R || k)) {
                if (S) {
                    y = [
                        T,
                        m
                    ];
                } else if (A) {
                    y = [
                        E,
                        T
                    ];
                } else {
                    y = [
                        E,
                        T,
                        m
                    ];
                }
                break;
            }
        }
        if (y) {
            s.points = y;
        }
    }
}
__1(ys, "portSwapToLShape");
function xs(t, e) {
    const { realNodeRects, labelNodeRects } = me(e.values());
    for (const c of t){
        if (c.isLayoutOnly) {
            continue;
        }
        const a = c.points;
        if (!a || a.length < 4) {
            continue;
        }
        const l = pt(a, 0.001);
        if (l.length < 4) {
            continue;
        }
        const g = l.length - 1;
        const x = l[g];
        const I = l[g - 1];
        const u = l[g - 2];
        const p = x.x - I.x;
        const f = x.y - I.y;
        const y = Math.hypot(p, f);
        if (y >= 10 || y < 0.001) {
            continue;
        }
        const v = I.x - u.x;
        const M = I.y - u.y;
        if (Math.hypot(v, M) < 0.001) {
            continue;
        }
        const T = Tt(I, x, 0.001);
        const m = wt(I, x, 0.001);
        const S = Tt(u, I, 0.001);
        const A = wt(u, I, 0.001);
        if (!(T && A || m && S)) {
            continue;
        }
        const { end, start } = c;
        const O = end ? e.get(end) : undefined;
        if (!O) {
            continue;
        }
        const _ = O.x ?? 0;
        const H = O.y ?? 0;
        const P = qt(O);
        if (!P) {
            continue;
        }
        let G;
        let j;
        if (A) {
            const W = M < 0;
            G = {
                x: _,
                y: u.y
            };
            j = {
                x: _,
                y: W ? P.bottom : P.top
            };
        } else {
            const W = v > 0;
            G = {
                x: u.x,
                y: H
            };
            j = {
                x: W ? P.right : P.left,
                y: H
            };
        }
        if (At(G, j, realNodeRects, end ? [
            end
        ] : [], -2) || At(G, j, labelNodeRects, [], -2)) {
            continue;
        }
        if (start) {
            const W = e.get(start);
            const et = W ? qt(W) : undefined;
            if (et && io(G, et, 2)) {
                continue;
            }
        }
        const J = __1((W, et)=>`${W.x.toFixed(3)},${W.y.toFixed(3)}|${et.x.toFixed(3)},${et.y.toFixed(3)}`, "ownSegmentKey");
        const dt = new Set;
        for(let W = 0; W < l.length - 1; W++){
            dt.add(J(l[W], l[W + 1]));
        }
        const mt = __1((W, et)=>{
            for (const at of t){
                if (at === c || at.isLayoutOnly) {
                    continue;
                }
                const gt = at.points;
                if (!(!gt || gt.length < 2)) {
                    for(let xt = 0; xt < gt.length - 1; xt++){
                        const vt = gt[xt];
                        const Vt = gt[xt + 1];
                        if (!dt.has(J(vt, Vt)) && le(W, et, vt, Vt, 0.001)) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }, "segmentCrossesOtherEdge");
        if (mt(G, j)) {
            continue;
        }
        if (g - 3 >= 0) {
            const W = l[g - 3];
            const et = [
                start,
                end
            ].filter((at)=>!!at);
            if (At(W, G, realNodeRects, et, -2) || mt(W, G)) {
                continue;
            }
        }
        const Pt = [
            ...l.slice(0, g - 2),
            G,
            j
        ];
        c.points = Pt;
        const Q = c.labelNodeId;
        if (Q) {
            const W = e.get(Q);
            if (W) {
                const et = W.width ?? 0;
                const at = W.height ?? 0;
                if (et > 0 && at > 0) {
                    let gt;
                    let xt;
                    let vt = -1;
                    for(let Vt = 0; Vt < Pt.length - 1; Vt++){
                        const jt = Pt[Vt];
                        const Ut = Pt[Vt + 1];
                        const te = Math.hypot(Ut.x - jt.x, Ut.y - jt.y);
                        const Se = ht(jt, Ut, 0.001);
                        const de = ft(jt, Ut, 0.001);
                        if ((Se && te >= et + 2 || de && te >= at + 2) && te > vt) {
                            vt = te;
                            gt = (jt.x + Ut.x) / 2;
                            xt = (jt.y + Ut.y) / 2;
                        }
                    }
                    if (gt !== undefined && xt !== undefined) {
                        W.x = gt;
                        W.y = xt;
                    }
                }
            }
        }
    }
}
__1(xs, "collapseShortTerminalStub");
const Z = 0.001;
const _t = 8;
const it = Re;
const In = __1((t, e)=>ft(t, e, Z) || ht(t, e, Z), "orthogonallyAligned");
function bs(t, e) {
    const s = __1((u, p)=>{
        const f = u.x ?? 0;
        const y = u.y ?? 0;
        const v = p.x - f;
        const M = p.y - y;
        let E = (u.width ?? 0) / 2;
        let T = (u.height ?? 0) / 2;
        if (Math.abs(M) * E > Math.abs(v) * T) {
            if (M < 0) {
                T = -T;
            }
            return {
                x: f + (M === 0 ? 0 : T * v / M),
                y: y + T
            };
        }
        if (v < 0) {
            E = -E;
        }
        return {
            x: f + E,
            y: y + (v === 0 ? 0 : E * M / v)
        };
    }, "rectIntersect");
    const r = __1((u, atStart)=>{
        const f = pt(u.points ?? []);
        if (f.length < 2) {
            return;
        }
        const nodeId = atStart ? u.start : u.end;
        const v = nodeId ? e.get(nodeId) : undefined;
        const M = v ? qt(v) : undefined;
        if (!v || !nodeId || !M) {
            return;
        }
        const E = atStart ? f[0] : f[f.length - 1];
        const T = atStart ? f[1] : f[f.length - 2];
        const boundary = s(v, E);
        let railEnd = E;
        if (In(T, boundary)) {
            railEnd = T;
        }
        if (ft(boundary, railEnd, Z)) {
            return {
                edge: u,
                edgeId: String(u.id ?? ""),
                nodeId,
                atStart,
                orientation: "V",
                coord: boundary.x,
                min: Math.min(boundary.y, railEnd.y),
                max: Math.max(boundary.y, railEnd.y),
                boundary,
                railEnd,
                rect: M
            };
        }
        if (ht(boundary, railEnd, Z)) {
            return {
                edge: u,
                edgeId: String(u.id ?? ""),
                nodeId,
                atStart,
                orientation: "H",
                coord: boundary.y,
                min: Math.min(boundary.x, railEnd.x),
                max: Math.max(boundary.x, railEnd.x),
                boundary,
                railEnd,
                rect: M
            };
        }
    }, "terminalLaneFor");
    const i = __1((u, p)=>Math.max(0, Math.min(u.max, p.max) - Math.max(u.min, p.min)), "projectedOverlapLength");
    const c = __1((u, p)=>{
        if (u.nodeId !== p.nodeId || u.orientation !== p.orientation) {
            return false;
        }
        if (u.orientation === "H") {
            return (Math.abs(u.boundary.x - u.rect.left) < 1 || Math.abs(u.boundary.x - u.rect.right) < 1) && ft(u.boundary, p.boundary, 1);
        }
        return (Math.abs(u.boundary.y - u.rect.top) < 1 || Math.abs(u.boundary.y - u.rect.bottom) < 1) && ht(u.boundary, p.boundary, 1);
    }, "sameTerminalFace");
    const a = __1((u, p)=>{
        if (u.nodeId !== p.nodeId || u.orientation !== p.orientation) {
            return false;
        }
        return i(u, p) >= _t && Math.abs(u.coord - p.coord) < 0.5;
    }, "exactTerminalLaneConflict");
    const l = __1((u, p)=>{
        if (u.nodeId !== p.nodeId || u.orientation !== p.orientation || u.orientation !== "H" || u.atStart === p.atStart) {
            return false;
        }
        const f = i(u, p);
        if (f < _t) {
            return false;
        }
        const y = u.rect.bottom - u.rect.top;
        if (f < y || f > 2 * y) {
            return false;
        }
        return c(u, p) && Math.abs(u.coord - p.coord) < 16;
    }, "nearTerminalLaneConflict");
    const g = __1((u, p)=>{
        const f = pt(u.edge.points ?? []);
        if (f.length < 2) {
            return;
        }
        const y = u.orientation === "V" ? {
            x: u.boundary.x + p,
            y: u.boundary.y
        } : {
            x: u.boundary.x,
            y: u.boundary.y + p
        };
        const v = u.orientation === "V" ? {
            x: u.railEnd.x + p,
            y: u.railEnd.y
        } : {
            x: u.railEnd.x,
            y: u.railEnd.y + p
        };
        if (!__1(()=>{
            if (Math.abs(u.boundary.y - u.rect.top) < 1 || Math.abs(u.boundary.y - u.rect.bottom) < 1) {
                return ht(y, u.boundary, Z) && y.x >= u.rect.left + 1 && y.x <= u.rect.right - 1;
            }
            if (Math.abs(u.boundary.x - u.rect.left) < 1 || Math.abs(u.boundary.x - u.rect.right) < 1) {
                return ft(y, u.boundary, Z) && y.y >= u.rect.top + 1 && y.y <= u.rect.bottom - 1;
            }
            return false;
        }, "boundaryStaysOnSameFace")()) {
            return;
        }
        if (u.atStart) {
            const S = f.length > 1 && oe(f[1], u.railEnd, Z);
            const A = f.slice(S ? 2 : 1);
            const R = A[0];
            if (R && !In(R, v)) {
                return undefined;
            }
            return [
                y,
                v,
                ...A
            ];
        }
        const E = f.length > 1 && oe(f[f.length - 2], u.railEnd, Z);
        const T = f.slice(0, E ? -2 : -1);
        const m = T[T.length - 1];
        if (!(m && !In(m, v))) {
            return [
                ...T,
                v,
                y
            ];
        }
    }, "shiftedCandidate");
    const x = __1((u)=>{
        const u_edge = u.edge;
        const f = pt(u_edge.points ?? []);
        if (f.length !== 2) {
            return false;
        }
        const { start, end } = u_edge;
        const M = start ? e.get(start) : undefined;
        const E = end ? e.get(end) : undefined;
        if (!M || !E) {
            return false;
        }
        const T = M.x ?? 0;
        const m = M.y ?? 0;
        const S = E.x ?? 0;
        const A = E.y ?? 0;
        const [R, k] = f;
        return ht(R, k, Z) && Math.abs(m - A) < 1 && Math.abs(T - S) > 1 || ft(R, k, Z) && Math.abs(T - S) < 1 && Math.abs(m - A) > 1;
    }, "laneIsStraightCollinearConnector");
    const I = [
        -7,
        7,
        -14,
        14,
        -21,
        21
    ];
    for(let u = 0; u < 8; u++){
        const p = t.filter((y)=>!y.isLayoutOnly).flatMap((y)=>[
                r(y, true),
                r(y, false)
            ]).filter((y)=>!!y);
        let f = false;
        for(let y = 0; y < p.length && !f; y++){
            for(let v = y + 1; v < p.length && !f; v++){
                const M = p[y];
                const E = p[v];
                if (M.edge === E.edge || !(a(M, E) || l(M, E))) {
                    continue;
                }
                const T = !a(M, E);
                const m = [
                    M,
                    E
                ].sort((S, A)=>{
                    const R = x(S);
                    const k = x(A);
                    if (R !== k) {
                        return Number(R) - Number(k);
                    }
                    return +!A.atStart - +!S.atStart;
                });
                for (const S of m){
                    for (const A of I){
                        const R = g(S, A);
                        if (!R) {
                            continue;
                        }
                        const k = r({
                            ...S.edge,
                            points: R
                        }, S.atStart);
                        if (!(!k || p.some((O)=>O.edge !== S.edge && (a(k, O) || T && l(k, O))))) {
                            S.edge.points = R;
                            f = true;
                            break;
                        }
                    }
                    if (f) {
                        break;
                    }
                }
            }
        }
        if (!f) {
            return;
        }
    }
}
__1(bs, "separateSharedRenderedTerminalLanes");
function Ms(t, e) {
    const { realNodeRects, labelNodeRects } = me(e.values());
    const r = __1((c, a)=>{
        const { start, end } = c;
        const x = it(a);
        if (x.length !== a.length - 1) {
            return false;
        }
        const I = [
            start,
            end
        ].filter((u)=>!!u);
        for (const u of x){
            if (At(u.a, u.b, realNodeRects, I, -2) || At(u.a, u.b, labelNodeRects, [], -2)) {
                return false;
            }
        }
        for (const u of t){
            if (u === c || u.isLayoutOnly) {
                continue;
            }
            const p = u.points;
            if (!(!p || p.length < 2)) {
                for (const f of x){
                    for (const y of it(pt(p))){
                        if (ce(f, y, 0.5) >= _t || le(f.a, f.b, y.a, y.b, Z)) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }, "candidateIsSafe");
    const i = __1((c, a)=>{
        if (a + 4 >= c.length) {
            return;
        }
        const l = c[a];
        const g = c[a + 1];
        const x = c[a + 2];
        const I = c[a + 3];
        const u = c[a + 4];
        const p = Tt(l, g) && wt(g, x) && Tt(x, I) && wt(I, u) && ft(l, I, Z) && ft(l, u, Z) && ft(g, x, Z) && (g.x - l.x) * (I.x - x.x) < 0;
        const f = wt(l, g) && Tt(g, x) && wt(x, I) && Tt(I, u) && ht(l, I, Z) && ht(l, u, Z) && ht(g, x, Z) && (g.y - l.y) * (I.y - x.y) < 0;
        if (p || f) {
            return pt([
                ...c.slice(0, a + 1),
                u,
                ...c.slice(a + 5)
            ]);
        }
        if (a + 5 >= c.length) {
            return;
        }
        const y = c[a + 5];
        const v = wt(l, g) && Tt(g, x) && wt(x, I) && Tt(I, u) && wt(u, y) && ft(l, u, Z) && ft(l, y, Z) && ft(x, I, Z) && (x.x - g.x) * (u.x - I.x) < 0;
        const M = Tt(l, g) && wt(g, x) && Tt(x, I) && wt(I, u) && Tt(u, y) && ht(l, u, Z) && ht(l, y, Z) && ht(x, I, Z) && (x.y - g.y) * (u.y - I.y) < 0;
        if (!(!v && !M)) {
            return pt([
                ...c.slice(0, a + 1),
                y,
                ...c.slice(a + 6)
            ]);
        }
    }, "withoutDogleg");
    for(let c = 0; c < 8; c++){
        let a = false;
        for (const l of t){
            if (l.isLayoutOnly) {
                continue;
            }
            const g = pt(l.points ?? []);
            for(let x = 0; x <= g.length - 5; x++){
                const I = i(g, x);
                if (!(!I || !r(l, I))) {
                    l.points = I;
                    a = true;
                    break;
                }
            }
            if (a) {
                break;
            }
        }
        if (!a) {
            return;
        }
    }
}
__1(Ms, "collapseRedundantRectangularDoglegs");
function Xn(t, e) {
    const { realNodeRects, labelNodeRects } = me(e.values());
    const c = t.filter((p)=>!p.isLayoutOnly);
    const a = __1((p, f, y)=>pt(p === f ? y ?? [] : p.points ?? []), "pointsFor");
    const l = __1((p, f)=>{
        let y = 0;
        for(let v = 0; v < c.length; v++){
            const M = it(a(c[v], p, f));
            for(let E = v + 1; E < c.length; E++){
                const T = it(a(c[E], p, f));
                for (const m of M){
                    for (const S of T){
                        le(m.a, m.b, S.a, S.b, Z) && y++;
                    }
                }
            }
        }
        return y;
    }, "strictCrossingCount");
    const g = __1((p)=>{
        const f = it(p);
        if (f.length !== 3) {
            return;
        }
        const segment = f[1];
        if (!(f[0].horizontal === segment.horizontal || f[2].horizontal === segment.horizontal)) {
            return {
                index: segment.index,
                horizontal: segment.horizontal,
                vertical: segment.vertical,
                segment
            };
        }
    }, "middleRail");
    const x = __1((p, f)=>{
        const y = [
            p.start,
            p.end
        ].filter((v)=>!!v);
        return realNodeRects.filter((v)=>{
            if (y.includes(v.id)) {
                return false;
            }
            const v_rect = v.rect;
            if (f.horizontal) {
                return zt(f.a.x, f.b.x, v_rect.left, v_rect.right) >= _t && f.a.y >= v_rect.top - 2 && f.a.y <= v_rect.bottom + 2;
            }
            return zt(f.a.y, f.b.y, v_rect.top, v_rect.bottom) >= _t && f.a.x >= v_rect.left - 2 && f.a.x <= v_rect.right + 2;
        });
    }, "blockingRectsFor");
    const I = __1((p, f, y)=>{
        const v = p.map((E)=>({
                ...E
            }));
        if (f.horizontal) {
            v[f.index].y = y;
            v[f.index + 1].y = y;
        } else if (f.vertical) {
            v[f.index].x = y;
            v[f.index + 1].x = y;
        } else {
            return;
        }
        const M = ae(pt(v));
        if (it(M).length === M.length - 1) {
            return M;
        }
    }, "candidateByMovingRail");
    const u = __1((p, f, y)=>{
        const v = [
            p.start,
            p.end
        ].filter((E)=>!!E);
        const M = it(f);
        if (M.length !== f.length - 1) {
            return false;
        }
        for (const E of M){
            if (At(E.a, E.b, realNodeRects, v, -2) || At(E.a, E.b, labelNodeRects, [], -2)) {
                return false;
            }
        }
        for (const E of c){
            if (E !== p) {
                for (const T of M){
                    for (const m of it(a(E))){
                        if (ce(T, m, 0.5) >= _t) {
                            return false;
                        }
                    }
                }
            }
        }
        return l(p, f) <= y;
    }, "candidateIsSafe");
    for(let p = 0; p < 8; p++){
        const f = l();
        let y = false;
        for (const v of c){
            const M = a(v);
            const E = g(M);
            if (!E) {
                continue;
            }
            const T = x(v, E.segment);
            if (T.length === 0) {
                continue;
            }
            const m = E.horizontal ? [
                Math.min(...T.map((S)=>S.rect.top)) - 20,
                Math.max(...T.map((S)=>S.rect.bottom)) + 20
            ] : [
                Math.min(...T.map((S)=>S.rect.left)) - 20,
                Math.max(...T.map((S)=>S.rect.right)) + 20
            ];
            for (const S of m){
                const A = I(M, E.segment, S);
                if (!(!A || !u(v, A, f))) {
                    v.points = A;
                    y = true;
                    break;
                }
            }
            if (y) {
                break;
            }
        }
        if (!y) {
            return;
        }
    }
}
__1(Xn, "liftObstacleHuggingSameSideRails");
function Yn(t, e) {
    const o = __1((a)=>{
        const a_groupTitleRect = a.groupTitleRect;
        if (!(!a_groupTitleRect || typeof a_groupTitleRect.left !== "number" || typeof a_groupTitleRect.right !== "number" || typeof a_groupTitleRect.top !== "number" || typeof a_groupTitleRect.bottom !== "number" || !Number.isFinite(a_groupTitleRect.left) || !Number.isFinite(a_groupTitleRect.right) || !Number.isFinite(a_groupTitleRect.top) || !Number.isFinite(a_groupTitleRect.bottom) || a_groupTitleRect.right <= a_groupTitleRect.left || a_groupTitleRect.bottom <= a_groupTitleRect.top)) {
            return {
                left: a_groupTitleRect.left,
                right: a_groupTitleRect.right,
                top: a_groupTitleRect.top,
                bottom: a_groupTitleRect.bottom
            };
        }
    }, "validTitleRect");
    const s = __1((a)=>{
        if (!a.isGroup || a.parentId) {
            return;
        }
        const a_direction = a.direction;
        const g = typeof a_direction === "string" ? a_direction.toUpperCase() : "";
        if (g === "LR" || g === "RL" || g === "BT") {
            return;
        }
        const x = o(a);
        const { y, height } = a;
        if (!x || typeof y !== "number" || typeof height !== "number" || !Number.isFinite(y) || !Number.isFinite(height) || height <= 0) {
            return;
        }
        const p = x.right - x.left;
        const f = x.bottom - x.top;
        if (!(f <= 0 || p < f)) {
            return {
                node: a,
                rect: x
            };
        }
    }, "topLaneTitleFor");
    const r = __1((a, l)=>{
        if (!a.horizontal) {
            return false;
        }
        const g = a.a.y;
        if (g <= l.top + Z || g >= l.bottom - Z) {
            return false;
        }
        return zt(a.a.x, a.b.x, l.left, l.right) >= _t;
    }, "horizontalSegmentIntersectsTitle");
    const i = [
        ...e.values()
    ].map(s).filter((a)=>!!a);
    if (i.length === 0) {
        return;
    }
    let c = 0;
    for (const a of t){
        if (a.isLayoutOnly) {
            continue;
        }
        const l = pt(a.points ?? []);
        for (const g of it(l)){
            for (const x of i){
                if (r(g, x.rect)) {
                    c = Math.max(c, x.rect.bottom - g.a.y + 4);
                }
            }
        }
    }
    if (!(c <= Z)) {
        for (const a of i){
            const l = a.node.y;
            const g = a.node.height;
            if (!(typeof l !== "number" || typeof g !== "number" || !Number.isFinite(l) || !Number.isFinite(g) || g <= 0)) {
                a.node.y = l - c / 2;
                a.node.height = g + c;
                a.node.groupTitleRect = {
                    ...a.rect,
                    top: a.rect.top - c,
                    bottom: a.rect.bottom - c
                };
            }
        }
    }
}
__1(Yn, "liftTopLaneTitleBandsAboveRails");
function Gn(t, e) {
    const o = __1((l)=>{
        const l_groupTitleRect = l.groupTitleRect;
        if (!(!l_groupTitleRect || typeof l_groupTitleRect.left !== "number" || typeof l_groupTitleRect.right !== "number" || typeof l_groupTitleRect.top !== "number" || typeof l_groupTitleRect.bottom !== "number" || !Number.isFinite(l_groupTitleRect.left) || !Number.isFinite(l_groupTitleRect.right) || !Number.isFinite(l_groupTitleRect.top) || !Number.isFinite(l_groupTitleRect.bottom) || l_groupTitleRect.right <= l_groupTitleRect.left || l_groupTitleRect.bottom <= l_groupTitleRect.top)) {
            return {
                left: l_groupTitleRect.left,
                right: l_groupTitleRect.right,
                top: l_groupTitleRect.top,
                bottom: l_groupTitleRect.bottom
            };
        }
    }, "validTitleRect");
    const s = __1((l)=>{
        if (!l.isGroup || l.parentId || l.direction !== "LR") {
            return;
        }
        const x = o(l);
        const { x: x_1, width } = l;
        if (!x || typeof x_1 !== "number" || typeof width !== "number" || !Number.isFinite(x_1) || !Number.isFinite(width) || width <= 0) {
            return;
        }
        const p = x.right - x.left;
        const f = x.bottom - x.top;
        if (!(p <= 0 || f < p)) {
            return {
                node: l,
                rect: x
            };
        }
    }, "leftLaneTitleFor");
    const r = __1((l, g)=>{
        if (!l.vertical) {
            return false;
        }
        const x = l.a.x;
        if (x <= g.left + Z || x >= g.right - Z) {
            return false;
        }
        return zt(l.a.y, l.b.y, g.top, g.bottom) >= _t;
    }, "verticalSegmentIntersectsTitle");
    const i = __1((l, g)=>{
        if (!l.horizontal) {
            return false;
        }
        const x = l.a.y;
        if (x <= g.top + Z || x >= g.bottom - Z) {
            return false;
        }
        return zt(l.a.x, l.b.x, g.left, g.right) >= _t;
    }, "horizontalSegmentIntersectsTitle");
    const c = [
        ...e.values()
    ].map(s).filter((l)=>!!l);
    if (c.length === 0) {
        return;
    }
    let a = 0;
    for (const l of t){
        if (l.isLayoutOnly) {
            continue;
        }
        const g = pt(l.points ?? []);
        for (const x of it(g)){
            for (const I of c){
                if (r(x, I.rect)) {
                    a = Math.max(a, I.rect.right - x.a.x + 4);
                } else if (i(x, I.rect)) {
                    const u = Math.min(x.a.x, x.b.x);
                    a = Math.max(a, I.rect.right - u + 4);
                }
            }
        }
    }
    if (!(a <= Z)) {
        for (const l of c){
            const g = l.node.x;
            const x = l.node.width;
            if (!(typeof g !== "number" || typeof x !== "number" || !Number.isFinite(g) || !Number.isFinite(x) || x <= 0)) {
                l.node.x = g - a / 2;
                l.node.width = x + a;
                l.node.groupTitleRect = {
                    ...l.rect,
                    left: l.rect.left - a,
                    right: l.rect.right - a
                };
            }
        }
    }
}
__1(Gn, "shiftLeftLaneTitleBandsLeftOfRails");
function Is(t, e) {
    const { realNodeRects } = me(e.values());
    const s = t.filter((p)=>!p.isLayoutOnly);
    const r = __1((p, f = new Map)=>pt(f.get(p) ?? p.points ?? []), "replacementPointsFor");
    const i = __1((p = new Map)=>{
        let f = 0;
        for(let y = 0; y < s.length; y++){
            const v = it(r(s[y], p));
            for(let M = y + 1; M < s.length; M++){
                const E = it(r(s[M], p));
                for (const T of v){
                    for (const m of E){
                        le(T.a, T.b, m.a, m.b, Z) && f++;
                    }
                }
            }
        }
        return f;
    }, "crossingCount");
    const c = __1((p = new Map)=>s.reduce((acc, item)=>acc + Qt(r(item, p)), 0), "totalBends");
    const a = __1((p)=>{
        const f = r(p);
        if (f.length < 4) {
            return;
        }
        const tailStart = f[f.length - 2];
        const terminal = f[f.length - 1];
        if (!(!Tt(tailStart, terminal, Z) && !wt(tailStart, terminal, Z))) {
            return {
                tailStart,
                terminal
            };
        }
    }, "terminalTailFor");
    const l = __1((p, f)=>{
        const y = r(p);
        if (y.length < 3) {
            return;
        }
        const v = y[0];
        const M = y[1];
        let E;
        if (Tt(v, M, Z)) {
            E = {
                x: M.x,
                y: f.tailStart.y
            };
        } else if (wt(v, M, Z)) {
            E = {
                x: f.tailStart.x,
                y: M.y
            };
        } else {
            return;
        }
        const T = ae(pt([
            v,
            M,
            E,
            f.tailStart,
            f.terminal
        ]));
        if (it(T).length === T.length - 1) {
            return T;
        }
    }, "candidateWithDestinationTail");
    const g = __1((p, f)=>{
        const y = [
            p.start,
            p.end
        ].filter((v)=>!!v);
        for (const v of it(f)){
            if (At(v.a, v.b, realNodeRects, y, -2)) {
                return true;
            }
        }
        return false;
    }, "pathHasNodeHit");
    const x = __1((p, f, y)=>{
        for (const v of s){
            if (v !== p) {
                for (const M of it(f)){
                    for (const E of it(r(v, y))){
                        if (ce(M, E, 0.5) >= _t) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }, "pathHasSharedTrack");
    const I = __1((p, f, y)=>!g(p, f) && !x(p, f, y), "candidateIsSafe");
    const u = __1(()=>{
        const p = new Map;
        for (const f of s){
            const y = f.end;
            if (!y || !e.has(y) || r(f).length < 4) {
                continue;
            }
            const M = p.get(y) ?? [];
            M.push(f);
            p.set(y, M);
        }
        return p;
    }, "edgesByDestination");
    for(let p = 0; p < 4; p++){
        const f = i();
        if (f === 0) {
            return;
        }
        const y = c();
        let v;
        let M = f;
        let E = y;
        for (const T of u().values()){
            for(let m = 0; m < T.length; m++){
                for(let S = m + 1; S < T.length; S++){
                    const A = T[m];
                    const R = T[S];
                    const k = a(A);
                    const O = a(R);
                    if (!k || !O) {
                        continue;
                    }
                    const _ = l(A, O);
                    const H = l(R, k);
                    if (!_ || !H) {
                        continue;
                    }
                    const P = new Map([
                        [
                            A,
                            _
                        ],
                        [
                            R,
                            H
                        ]
                    ]);
                    if (!I(A, _, P) || !I(R, H, P)) {
                        continue;
                    }
                    const G = i(P);
                    const j = c(P);
                    if (!(G >= f || G > M || G === M && j >= E)) {
                        v = P;
                        M = G;
                        E = j;
                    }
                }
            }
        }
        if (!v) {
            return;
        }
        for (const [T, m] of v){
            T.points = m;
        }
    }
}
__1(Is, "swapDestinationTerminalTailsToReduceCrossings");
function Ss(t, e) {
    const { realNodeRects, labelNodeRects } = me(e.values());
    const c = t.filter((T)=>!T.isLayoutOnly);
    const a = __1((T, m = new Map)=>pt(m.get(T) ?? T.points ?? []), "replacementPointsFor");
    const l = __1((T = new Map)=>{
        let m = 0;
        for(let S = 0; S < c.length; S++){
            const A = it(a(c[S], T));
            for(let R = S + 1; R < c.length; R++){
                const k = it(a(c[R], T));
                for (const O of A){
                    for (const _ of k){
                        le(O.a, O.b, _.a, _.b, Z) && m++;
                    }
                }
            }
        }
        return m;
    }, "strictCrossingCount");
    const g = __1((T = new Map)=>c.reduce((acc, item)=>acc + Qt(a(item, T)), 0), "totalBends");
    const x = __1(({ start, end })=>{
        const A = start ? e.get(start) : undefined;
        const R = end ? e.get(end) : undefined;
        const k = A ? qt(A) : undefined;
        const O = R ? qt(R) : undefined;
        if (k && O) {
            return {
                src: k,
                dst: O
            };
        }
    }, "endpointRectsFor");
    const I = __1((T, m, S)=>{
        if (S.index <= 0 || S.index + 1 >= m.length - 1) {
            return;
        }
        const A = x(T);
        if (A) {
            if (S.vertical) {
                const R = S.a.x;
                const k = Math.min(A.src.left, A.dst.left);
                const O = Math.max(A.src.right, A.dst.right);
                const _ = R < k - Z ? "left" : R > O + Z ? "right" : undefined;
                if (_) {
                    return {
                        edge: T,
                        points: m,
                        segmentIndex: S.index,
                        axis: "vertical",
                        side: _,
                        coord: R,
                        min: Math.min(S.a.y, S.b.y),
                        max: Math.max(S.a.y, S.b.y)
                    };
                }
                return undefined;
            }
            if (S.horizontal) {
                const R = S.a.y;
                const k = Math.min(A.src.top, A.dst.top);
                const O = Math.max(A.src.bottom, A.dst.bottom);
                const _ = R < k - Z ? "top" : R > O + Z ? "bottom" : undefined;
                if (_) {
                    return {
                        edge: T,
                        points: m,
                        segmentIndex: S.index,
                        axis: "horizontal",
                        side: _,
                        coord: R,
                        min: Math.min(S.a.x, S.b.x),
                        max: Math.max(S.a.x, S.b.x)
                    };
                }
                return undefined;
            }
        }
    }, "externalRailForSegment");
    const u = __1(()=>{
        const T = [];
        for (const m of c){
            const S = a(m);
            for (const A of it(S)){
                const R = I(m, S, A);
                if (R) {
                    T.push(R);
                }
            }
        }
        return T;
    }, "collectExternalRails");
    const p = __1((T, m)=>T.edge !== m.edge && T.axis === m.axis && T.side === m.side && zt(T.min, T.max, m.min, m.max) >= _t, "railsInteract");
    const f = __1((T)=>{
        const m = [];
        const S = new Set;
        for (const A of T){
            if (S.has(A)) {
                continue;
            }
            const R = [
                A
            ];
            const k = [];
            for(S.add(A); R.length > 0;){
                const O = R.pop();
                k.push(O);
                for (const _ of T){
                    if (!S.has(_) && p(O, _)) {
                        S.add(_);
                        R.push(_);
                    }
                }
            }
            if (k.length > 1) {
                m.push(k);
            }
        }
        return m;
    }, "connectedComponents");
    const y = __1((T)=>{
        const m = [];
        for (const S of T){
            if (!m.some((A)=>Math.abs(A - S.coord) < Z)) {
                m.push(S.coord);
            }
        }
        while(m.length < T.length){
            const S = Math.min(...m);
            const A = Math.max(...m);
            const R = T[0].side;
            m.push(R === "left" || R === "top" ? S - 12 * (T.length - m.length) : A + 12 * (T.length - m.length));
        }
        return m;
    }, "uniqueCoordsFor");
    const v = __1((T)=>{
        const m = T.map((R)=>R.coord);
        const S = y(T);
        const A = [];
        if (T.length <= 6) {
            const R = new Array(S.length).fill(false);
            const k = [];
            const O = __1(()=>{
                if (k.length === T.length) {
                    if (k.some((_, H)=>Math.abs(_ - m[H]) >= Z)) {
                        A.push([
                            ...k
                        ]);
                    }
                    return;
                }
                for (const [_, H] of S.entries()){
                    if (!R[_]) {
                        R[_] = true;
                        k.push(H);
                        O();
                        k.pop();
                        R[_] = false;
                    }
                }
            }, "visit");
            O();
            return A;
        }
        for(let R = 0; R < m.length; R++){
            for(let k = R + 1; k < m.length; k++){
                const O = [
                    ...m
                ];
                [O[R], O[k]] = [
                    O[k],
                    O[R]
                ];
                A.push(O);
            }
        }
        return A;
    }, "coordinateAssignmentsFor");
    const M = __1((T, m)=>{
        const S = new Map;
        for (const [R, k] of T.entries()){
            const O = m[R];
            const _ = S.get(k.edge) ?? k.points.map((H)=>({
                    x: H.x,
                    y: H.y
                }));
            if (k.axis === "vertical") {
                _[k.segmentIndex].x = O;
                _[k.segmentIndex + 1].x = O;
            } else {
                _[k.segmentIndex].y = O;
                _[k.segmentIndex + 1].y = O;
            }
            S.set(k.edge, _);
        }
        const A = new Map;
        for (const [R, k] of S){
            const O = ae(pt(k));
            if (it(O).length !== O.length - 1) {
                return;
            }
            A.set(R, O);
        }
        return A;
    }, "replacementsForAssignment");
    const E = __1((T)=>{
        for (const [m, S] of T){
            const A = [
                m.start,
                m.end
            ].filter((R)=>!!R);
            for (const R of it(S)){
                if (At(R.a, R.b, realNodeRects, A, -2) || At(R.a, R.b, labelNodeRects, [], -2)) {
                    return false;
                }
            }
        }
        for(let m = 0; m < c.length; m++){
            const S = c[m];
            const A = T.has(S);
            const R = it(a(S, T));
            for(let k = m + 1; k < c.length; k++){
                const O = c[k];
                if (!A && !T.has(O)) {
                    continue;
                }
                const _ = it(a(O, T));
                for (const H of R){
                    for (const P of _){
                        if (ce(H, P, 0.5) >= _t) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }, "candidateIsSafe");
    for(let T = 0; T < 4; T++){
        const m = l();
        if (m === 0) {
            return;
        }
        let S;
        let A = m;
        let R = g();
        let k = Number.POSITIVE_INFINITY;
        for (const O of f(u())){
            for (const _ of v(O)){
                const H = M(O, _);
                if (!H || !E(H)) {
                    continue;
                }
                const P = l(H);
                if (P >= m) {
                    continue;
                }
                const G = g(H);
                const j = O.reduce((acc, item, index)=>acc + Math.abs(_[index] - item.coord), 0);
                if (!(P > A || P === A && (G > R || G === R && j >= k))) {
                    S = H;
                    A = P;
                    R = G;
                    k = j;
                }
            }
        }
        if (!S) {
            return;
        }
        for (const [O, _] of S){
            O.points = _;
        }
    }
}
__1(Ss, "reassignCrossingExternalRailChannels");
function Cs(t, e) {
    const { realNodeRects, labelNodeRects } = me(e.values());
    const r = t.filter((u)=>!u.isLayoutOnly);
    const i = __1((u, p, f)=>pt(u === p ? f ?? [] : u.points ?? []), "pointsFor");
    const c = __1((u)=>it(u).reduce((acc, item)=>{
            const y = item.a.x - item.b.x;
            const v = item.a.y - item.b.y;
            return acc + Math.hypot(y, v);
        }, 0), "pathLength");
    const a = __1((u, p)=>{
        let f = 0;
        for(let y = 0; y < r.length; y++){
            const v = it(i(r[y], u, p));
            for(let M = y + 1; M < r.length; M++){
                const E = it(i(r[M], u, p));
                for (const T of v){
                    for (const m of E){
                        le(T.a, T.b, m.a, m.b, Z) && f++;
                    }
                }
            }
        }
        return f;
    }, "strictCrossingCount");
    const l = __1((u, p)=>{
        if (u.horizontal) {
            const f = u.a.y;
            return (Math.abs(f - p.top) < 1 || Math.abs(f - p.bottom) < 1) && zt(u.a.x, u.b.x, p.left, p.right) >= _t;
        }
        if (u.vertical) {
            const f = u.a.x;
            return (Math.abs(f - p.left) < 1 || Math.abs(f - p.right) < 1) && zt(u.a.y, u.b.y, p.top, p.bottom) >= _t;
        }
        return false;
    }, "segmentRunsAlongRectBorder");
    const g = __1((u)=>{
        const p = [
            u.start,
            u.end
        ].filter((y)=>!!y);
        const f = [];
        for (const y of p){
            const v = e.get(y);
            const M = v ? qt(v) : undefined;
            if (M) {
                f.push(M);
            }
        }
        return f;
    }, "endpointRectsFor");
    const x = __1((u, p)=>{
        if (p + 3 >= u.length) {
            return [];
        }
        const f = u[p];
        const y = u[p + 1];
        const v = u[p + 2];
        const M = u[p + 3];
        const E = Tt(f, y, Z) && wt(y, v, Z) && Tt(v, M, Z);
        const T = wt(f, y, Z) && Tt(y, v, Z) && wt(v, M, Z);
        if (!E && !T) {
            return [];
        }
        if (!(E ? Math.sign(y.x - f.x) !== Math.sign(M.x - v.x) : Math.sign(y.y - f.y) !== Math.sign(M.y - v.y))) {
            return [];
        }
        const S = ft(f, M, Z) || ht(f, M, Z) ? [] : [
            {
                x: f.x,
                y: M.y
            },
            {
                x: M.x,
                y: f.y
            }
        ];
        const A = S.length === 0 ? [
            [
                ...u.slice(0, p + 1),
                ...u.slice(p + 3)
            ]
        ] : S.map((k)=>[
                ...u.slice(0, p + 1),
                k,
                ...u.slice(p + 3)
            ]);
        const R = new Set;
        return A.map((k)=>ae(pt(k))).filter((k)=>{
            if (it(k).length !== k.length - 1 || !k.some((_)=>oe(_, M, Z))) {
                return false;
            }
            const O = k.map((_)=>`${_.x.toFixed(3)},${_.y.toFixed(3)}`).join("|");
            if (R.has(O)) {
                return false;
            }
            R.add(O);
            return true;
        });
    }, "shortcutCandidatesAt");
    const I = __1((u, p, f)=>{
        const y = [
            u.start,
            u.end
        ].filter((M)=>!!M);
        const v = g(u);
        for (const M of it(p)){
            if (At(M.a, M.b, realNodeRects, y, -2) || At(M.a, M.b, labelNodeRects, [], -2) || v.some((E)=>l(M, E))) {
                return false;
            }
        }
        for (const M of r){
            if (M !== u) {
                for (const E of it(p)){
                    for (const T of it(i(M))){
                        if (ce(E, T, 0.5) >= _t) {
                            return false;
                        }
                    }
                }
            }
        }
        return a(u, p) <= f;
    }, "candidateIsSafe");
    for(let u = 0; u < 8; u++){
        const p = a();
        let f;
        let y;
        let v = p;
        let M = Number.POSITIVE_INFINITY;
        let E = Number.POSITIVE_INFINITY;
        for (const T of r){
            const m = i(T);
            const S = Qt(m, Z);
            const A = c(m);
            for(let R = 0; R <= m.length - 4; R++){
                for (const k of x(m, R)){
                    const O = Qt(k, Z);
                    const _ = c(k);
                    if (!(O < S || O === S && _ < A - Z) || !I(T, k, p)) {
                        continue;
                    }
                    const P = a(T, k);
                    if (!(P > v || P === v && (O > M || O === M && _ >= E))) {
                        f = T;
                        y = k;
                        v = P;
                        M = O;
                        E = _;
                    }
                }
            }
        }
        if (!f || !y) {
            return;
        }
        f.points = y;
    }
}
__1(Cs, "shortcutRedundantOrthogonalJogs");
function vs(t, e) {
    const i = [];
    for (const N of e.values()){
        if (N.isGroup || N.isEdgeLabel) {
            continue;
        }
        const cx = N.x ?? 0;
        const cy = N.y ?? 0;
        const V = qt(N);
        if (V) {
            i.push({
                id: String(N.id ?? ""),
                cx,
                cy,
                rect: V
            });
        }
    }
    if (i.length === 0) {
        return;
    }
    const c = new Map(i.map((N)=>[
            N.id,
            N
        ]));
    const a = i.map((N)=>({
            id: N.id,
            rect: N.rect
        }));
    const l = [
        "top",
        "bottom",
        "left",
        "right"
    ];
    const g = {
        top: Math.min(...i.map((N)=>N.rect.top)) - 20,
        bottom: Math.max(...i.map((N)=>N.rect.bottom)) + 20,
        left: Math.min(...i.map((N)=>N.rect.left)) - 20,
        right: Math.max(...i.map((N)=>N.rect.right)) + 20
    };
    const x = t.filter((N)=>!N.isLayoutOnly);
    const I = new Map(x.map((N, F)=>[
            N,
            F
        ]));
    const u = __1((N)=>{
        const F = N === "left" || N === "top" ? -1 : 1;
        const D = [];
        for(let V = 0; V <= 2; V++){
            D.push(g[N] + F * 20 * V);
        }
        return D;
    }, "outwardTracksForSide");
    const p = __1((N, F = new Map)=>pt(F.get(N) ?? N.points ?? []), "replacementPointsFor");
    const f = __1((N, F)=>{
        let D = 0;
        for (const V of N){
            for (const h of F){
                le(V.a, V.b, h.a, h.b, Z) && D++;
            }
        }
        return D;
    }, "crossingCountBetweenSegments");
    const y = __1((N, F)=>f(it(N), it(F)), "crossingCountBetweenPaths");
    const v = __1((N = new Map)=>{
        let F = 0;
        const pairs = [];
        const edgeSet = new Set;
        const h = [];
        const b = __1((C)=>{
            if (!edgeSet.has(C)) {
                edgeSet.add(C);
                h.push(C);
            }
        }, "addEdge");
        for(let C = 0; C < x.length; C++){
            const first = x[C];
            const w = p(first, N);
            for(let B = C + 1; B < x.length; B++){
                const second = x[B];
                const q = y(w, p(second, N));
                if (q > 0) {
                    F += q;
                    pairs.push({
                        first,
                        second,
                        count: q
                    });
                    b(first);
                    b(second);
                }
            }
        }
        h.sort((C, L)=>(I.get(C) ?? 0) - (I.get(L) ?? 0));
        return {
            count: F,
            pairs,
            edgeSet,
            edges: h
        };
    }, "crossingSnapshot");
    const M = __1((N, F)=>{
        const D = new Set(F.keys());
        if (D.size === 0) {
            return N.count;
        }
        let V = 0;
        for (const b of N.pairs){
            if (D.has(b.first) || D.has(b.second)) {
                V += b.count;
            }
        }
        let h = 0;
        for(let b = 0; b < x.length; b++){
            const C = x[b];
            const L = D.has(C);
            const w = p(C, F);
            for(let B = b + 1; B < x.length; B++){
                const U = x[B];
                if (!(!L && !D.has(U))) {
                    h += y(w, p(U, F));
                }
            }
        }
        return N.count - V + h;
    }, "crossingCountWithReplacements");
    const E = __1((N)=>{
        const F = new Map;
        for (const h of N.pairs){
            const b = F.get(h.first) ?? new Set;
            b.add(h.second);
            F.set(h.first, b);
            const C = F.get(h.second) ?? new Set;
            C.add(h.first);
            F.set(h.second, C);
        }
        const D = [];
        const V = new Set;
        for (const h of N.edges){
            if (V.has(h)) {
                continue;
            }
            const b = [
                h
            ];
            const C = [];
            for(V.add(h); b.length > 0;){
                const L = b.pop();
                C.push(L);
                for (const w of F.get(L) ?? []){
                    if (!V.has(w)) {
                        V.add(w);
                        b.push(w);
                    }
                }
            }
            C.sort((L, w)=>(I.get(L) ?? 0) - (I.get(w) ?? 0));
            if (C.length > 1) {
                D.push(C);
            }
        }
        return D;
    }, "crossingComponents");
    const T = __1((N)=>[
            N.start,
            N.end
        ].filter((F)=>!!F), "endpointIdsFor");
    const m = __1((N)=>{
        const F = [];
        for (const D of E(N)){
            const V = new Set(D);
            const h = new Set(D.flatMap((C)=>T(C)));
            const b = [
                ...D
            ];
            for (const C of x){
                V.has(C) || T(C).some((L)=>h.has(L)) && b.push(C);
            }
            b.sort((C, L)=>(I.get(C) ?? 0) - (I.get(L) ?? 0));
            F.push(b);
        }
        return F;
    }, "pairSearchGroups");
    const S = __1((N, F, D)=>M(N, new Map([
            [
                F,
                D
            ]
        ])), "crossingCountWithSingleReplacement");
    const A = __1((N)=>{
        const F = new Map;
        for (const D of N.pairs){
            F.set(D.first, (F.get(D.first) ?? 0) + D.count);
            F.set(D.second, (F.get(D.second) ?? 0) + D.count);
        }
        return F;
    }, "currentCrossingsByEdge");
    const R = __1((N)=>N.slice(1).reduce((acc, item, index)=>{
            const h = N[index];
            return acc + Math.abs(item.x - h.x) + Math.abs(item.y - h.y);
        }, 0), "pathLength");
    const k = __1((N = new Map)=>x.reduce((acc, item)=>acc + Qt(p(item, N)), 0), "totalBends");
    const O = __1((N = new Map)=>x.reduce((acc, item)=>acc + R(p(item, N)), 0), "totalLength");
    const _ = __1((N, F, D = new Map)=>{
        const V = it(F);
        for (const h of x){
            if (h !== N) {
                for (const b of V){
                    for (const C of it(p(h, D))){
                        if (ce(b, C, 0.5) >= _t) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }, "pathHasSegmentConflict");
    const H = __1((N, F)=>{
        const D = [
            N.start,
            N.end
        ].filter((V)=>!!V);
        for (const V of it(F)){
            if (At(V.a, V.b, a, D, -2)) {
                return true;
            }
        }
        return false;
    }, "pathHitsNode");
    const P = __1((N, F)=>{
        const D = ae(pt(F));
        if (it(D).length === D.length - 1) {
            N.push(D);
        }
    }, "pushOrthogonalCandidate");
    const G = __1((N)=>N === "left" || N === "right", "sideIsHorizontal");
    const j = __1((N, F, D)=>{
        switch(F){
            case "left":
                return Math.min(N.x, D.x) - 20;
            case "right":
                return Math.max(N.x, D.x) + 20;
            case "top":
                return Math.min(N.y, D.y) - 20;
            case "bottom":
                return Math.max(N.y, D.y) + 20;
        }
    }, "localTrackForSameSide");
    const J = __1((N, F, D, V)=>{
        const h = D === "left" || D === "top" ? -1 : 1;
        const b = [
            j(F, D, V),
            g[D]
        ];
        for (const C of b){
            for(let L = 0; L <= 2; L++){
                P(N, ao(F, D, V, C + h * 20 * L));
            }
        }
    }, "addSameSideCandidates");
    const dt = __1((N, F, D, V, h)=>{
        for (const b of u(D)){
            for (const C of u(h)){
                P(N, [
                    F,
                    {
                        x: b,
                        y: F.y
                    },
                    {
                        x: b,
                        y: C
                    },
                    {
                        x: V.x,
                        y: C
                    },
                    V
                ]);
            }
        }
    }, "addHorizontalToVerticalCandidates");
    const mt = __1((N, F, D, V, h)=>{
        for (const b of u(D)){
            for (const C of u(h)){
                P(N, [
                    F,
                    {
                        x: F.x,
                        y: b
                    },
                    {
                        x: C,
                        y: b
                    },
                    {
                        x: C,
                        y: V.y
                    },
                    V
                ]);
            }
        }
    }, "addVerticalToHorizontalCandidates");
    const kt = __1((N, F, D, V, h)=>{
        const b = [
            ...u("top"),
            ...u("bottom")
        ];
        for (const C of u(D)){
            for (const L of u(h)){
                for (const w of b){
                    P(N, [
                        F,
                        {
                            x: C,
                            y: F.y
                        },
                        {
                            x: C,
                            y: w
                        },
                        {
                            x: L,
                            y: w
                        },
                        {
                            x: L,
                            y: V.y
                        },
                        V
                    ]);
                }
            }
        }
    }, "addHorizontalPairCandidates");
    const Pt = __1((N, F, D, V, h)=>{
        const b = [
            ...u("left"),
            ...u("right")
        ];
        for (const C of u(D)){
            for (const L of u(h)){
                for (const w of b){
                    P(N, [
                        F,
                        {
                            x: F.x,
                            y: C
                        },
                        {
                            x: w,
                            y: C
                        },
                        {
                            x: w,
                            y: L
                        },
                        {
                            x: V.x,
                            y: L
                        },
                        V
                    ]);
                }
            }
        }
    }, "addVerticalPairCandidates");
    const Q = __1((N)=>{
        const F = new Set;
        return N.map((D)=>pt(D)).filter((D)=>{
            const V = D.map((h)=>`${h.x.toFixed(3)},${h.y.toFixed(3)}`).join("|");
            if (F.has(V) || D.length < 2) {
                return false;
            }
            F.add(V);
            return true;
        });
    }, "dedupeCandidatePaths");
    const W = __1((N, F, D, V)=>{
        const h = [];
        const b = co(N, F, D, V, 20, Z);
        if (b) {
            P(h, b);
        }
        if (F === V) {
            J(h, N, F, D);
        }
        const C = G(F);
        const L = G(V);
        if (C && !L) {
            dt(h, N, F, D, V);
        } else if (!C && L) {
            mt(h, N, F, D, V);
        } else if (C) {
            kt(h, N, F, D, V);
        } else {
            Pt(h, N, F, D, V);
        }
        return Q(h);
    }, "buildCandidatesForSides");
    const et = __1((N, F, D, V)=>{
        const h = [
            ...u("left"),
            ...u("right")
        ];
        const b = [
            ...u("top"),
            ...u("bottom")
        ];
        for (const C of l){
            const L = Ie(V, C);
            const w = C === "top" || C === "bottom" ? u(C) : b;
            for (const B of h){
                P(N, [
                    F,
                    D,
                    {
                        x: B,
                        y: D.y
                    },
                    {
                        x: B,
                        y: L.y
                    },
                    L
                ]);
                for (const U of w){
                    P(N, [
                        F,
                        D,
                        {
                            x: B,
                            y: D.y
                        },
                        {
                            x: B,
                            y: U
                        },
                        {
                            x: L.x,
                            y: U
                        },
                        L
                    ]);
                }
            }
        }
    }, "addVerticalDepartureOuterTrackCandidates");
    const at = __1((N, F, D, V)=>{
        const h = [
            ...u("left"),
            ...u("right")
        ];
        const b = [
            ...u("top"),
            ...u("bottom")
        ];
        for (const C of l){
            const L = Ie(V, C);
            const w = C === "left" || C === "right" ? u(C) : h;
            for (const B of b){
                P(N, [
                    F,
                    D,
                    {
                        x: D.x,
                        y: B
                    },
                    {
                        x: L.x,
                        y: B
                    },
                    L
                ]);
                for (const U of w){
                    P(N, [
                        F,
                        D,
                        {
                            x: D.x,
                            y: B
                        },
                        {
                            x: U,
                            y: B
                        },
                        {
                            x: U,
                            y: L.y
                        },
                        L
                    ]);
                }
            }
        }
    }, "addHorizontalDepartureOuterTrackCandidates");
    const gt = __1((N)=>{
        const { start, end } = N;
        const V = end ? c.get(end) : undefined;
        if (!start || !V) {
            return [];
        }
        const h = pt(N.points ?? []);
        if (h.length < 4) {
            return [];
        }
        const b = h[0];
        const C = h[1];
        const L = [];
        if (wt(b, C, Z)) {
            et(L, b, C, V);
        } else if (Tt(b, C, Z)) {
            at(L, b, C, V);
        }
        return L;
    }, "terminalPreservingOuterTrackCandidates");
    const xt = __1((N)=>{
        const { start, end } = N;
        const V = start ? c.get(start) : undefined;
        const h = end ? c.get(end) : undefined;
        if (!V || !h) {
            return [];
        }
        const b = [];
        for (const C of l){
            const L = Ie(V, C);
            for (const w of l){
                b.push(...W(L, C, Ie(h, w), w));
            }
        }
        b.push(...gt(N));
        return b;
    }, "candidatePathsFor");
    const vt = __1(()=>new Map(x.map((N)=>[
                N,
                it(p(N))
            ])), "currentSegmentsByEdge");
    const Vt = __1((N, F, D)=>{
        const V = new Set;
        for (const h of x){
            if (h === N) {
                continue;
            }
            const b = D.get(h) ?? it(p(h));
            if (F.some((C)=>b.some((L)=>ce(C, L, 0.5) >= _t))) {
                V.add(h);
            }
        }
        return V;
    }, "sharedTrackConflictsFor");
    const jt = __1((N, F, D, V)=>{
        const h = new Set;
        return xt(N).map((C)=>ae(pt(C))).filter((C)=>{
            if (H(N, C)) {
                return false;
            }
            const L = C.map((w)=>`${w.x.toFixed(3)},${w.y.toFixed(3)}`).join("|");
            if (h.has(L) || C.length < 2) {
                return false;
            }
            h.add(L);
            return true;
        }).map((candidate)=>{
            const candidateSegments = it(candidate);
            let w = 0;
            for (const B of x){
                if (B !== N) {
                    w += f(candidateSegments, D.get(B) ?? it(p(B)));
                }
            }
            return {
                candidate,
                candidateSegments,
                crossings: F.count - (V.get(N) ?? 0) + w,
                bends: Qt(candidate, Z),
                totalBends: Qt(candidate),
                length: R(candidate)
            };
        }).filter(({ crossings })=>crossings <= F.count).sort((C, L)=>C.crossings - L.crossings || C.bends - L.bends || C.length - L.length).slice(0, 48).map((C)=>({
                path: C.candidate,
                segments: C.candidateSegments,
                sharedTrackConflicts: Vt(N, C.candidateSegments, D),
                totalBends: C.totalBends,
                length: C.length
            }));
    }, "pairCandidatesFor");
    const Ut = __1((N, F, D, V, h, b)=>{
        let C = 0;
        for (const w of N.pairs){
            if (w.first === F || w.second === F || w.first === V || w.second === V) {
                C += w.count;
            }
        }
        let L = f(D.segments, h.segments);
        for (const w of x){
            if (w === F || w === V) {
                continue;
            }
            const B = b.get(w) ?? it(p(w));
            L += f(D.segments, B) + f(h.segments, B);
        }
        return N.count - C + L;
    }, "pairCrossingCount");
    const te = __1((N, F)=>{
        for (const D of N.sharedTrackConflicts){
            if (D !== F) {
                return false;
            }
        }
        return true;
    }, "conflictsOnlyWith");
    const Se = __1((N, F)=>N.segments.some((D)=>F.segments.some((V)=>ce(D, V, 0.5) >= _t)), "candidatesShareTrack");
    const de = __1((N, F, D, V)=>te(F, D.edge) && te(V, N.edge) && !Se(F, V), "pairCandidatesAreCompatible");
    const Ce = __1((N, F, D, V, h)=>{
        const crossings = Ut(N.current, F.edge, D, V.edge, h, N.baseSegments);
        if (!(crossings >= N.current.count)) {
            return {
                replacements: new Map([
                    [
                        F.edge,
                        D.path
                    ],
                    [
                        V.edge,
                        h.path
                    ]
                ]),
                crossings,
                bends: N.currentBends - (N.baseBendsByEdge.get(F.edge) ?? 0) - (N.baseBendsByEdge.get(V.edge) ?? 0) + D.totalBends + h.totalBends,
                length: N.currentLength - (N.baseLengthByEdge.get(F.edge) ?? 0) - (N.baseLengthByEdge.get(V.edge) ?? 0) + D.length + h.length
            };
        }
    }, "scorePairReplacement");
    const dn = __1((N, F)=>N.crossings < F.crossings || N.crossings === F.crossings && (N.bends < F.bends || N.bends === F.bends && N.length < F.length), "pairScoreIsBetter");
    const un = __1((N, F, D, V)=>{
        let h = V;
        for (const b of F.candidates){
            for (const C of D.candidates){
                if (!de(F, b, D, C)) {
                    continue;
                }
                const L = Ce(N, F, b, D, C);
                if (L && dn(L, h)) {
                    h = L;
                }
            }
        }
        return h;
    }, "bestScoreForOptionPair");
    const hn = __1((current)=>{
        const F = k();
        const D = O();
        const baseSegments = vt();
        const h = A(current);
        const baseBendsByEdge = new Map(x.map((q)=>[
                q,
                Qt(p(q))
            ]));
        const baseLengthByEdge = new Map(x.map((q)=>[
                q,
                R(p(q))
            ]));
        const L = new Map;
        const w = m(current);
        for (const q of w){
            for (const z of q){
                if (L.has(z)) {
                    continue;
                }
                const candidates = jt(z, current, baseSegments, h);
                if (candidates.length > 0) {
                    L.set(z, {
                        edge: z,
                        candidates
                    });
                }
            }
        }
        let B = {
            replacements: new Map,
            crossings: current.count,
            bends: F,
            length: D
        };
        const U = {
            current,
            currentBends: F,
            currentLength: D,
            baseBendsByEdge,
            baseLengthByEdge,
            baseSegments
        };
        for (const q of w){
            const z = new Set(q.filter((ot)=>current.edgeSet.has(ot)));
            const Y = q.map((ot)=>L.get(ot)).filter((ot)=>!!ot);
            for(let ot = 0; ot < Y.length; ot++){
                const rt = Y[ot];
                for(let st = ot + 1; st < Y.length; st++){
                    const tt = Y[st];
                    if (!(!z.has(rt.edge) && !z.has(tt.edge))) {
                        B = un(U, rt, tt, B);
                    }
                }
            }
        }
        if (B.replacements.size > 0) {
            return B.replacements;
        }
    }, "bestPairedReplacement");
    for(let N = 0; N < 4; N++){
        const F = v();
        const D = F.count;
        if (D === 0) {
            return;
        }
        let V;
        let h;
        let b = D;
        let C = Number.POSITIVE_INFINITY;
        for (const w of F.edges){
            const B = Qt(p(w), Z);
            for (const U of xt(w)){
                const q = H(w, U);
                const z = !q && _(w, U);
                const Y = S(F, w, U);
                const ot = Qt(U, Z);
                if (!(q || z || !(Y < D || Y === D && ot < B) || Y > b || Y === b && ot >= C)) {
                    V = w;
                    h = U;
                    b = Y;
                    C = ot;
                }
            }
        }
        if (V && h) {
            V.points = h;
            continue;
        }
        const L = hn(F);
        if (!L) {
            return;
        }
        for (const [w, B] of L){
            w.points = B;
        }
    }
}
__1(vs, "resolveRenderedOrthogonalCrossings");
const pe = 0.001;
const Wr = 8;
function Ls(t, e) {
    const { nodeInfoById, realNodeRects } = an(e);
    const s = [
        "top",
        "bottom",
        "left",
        "right"
    ];
    const r = 20;
    const i = {
        top: Math.min(...realNodeRects.map((f)=>f.rect.top)) - r,
        bottom: Math.max(...realNodeRects.map((f)=>f.rect.bottom)) + r,
        left: Math.min(...realNodeRects.map((f)=>f.rect.left)) - r,
        right: Math.max(...realNodeRects.map((f)=>f.rect.right)) + r
    };
    const c = __1((f, y, v, M)=>{
        const E = [];
        const T = co(f, y, v, M, r, pe);
        if (T) {
            E.push(T);
        }
        if (y === M) {
            E.push(ao(f, y, v, i[y]));
        }
        return E;
    }, "buildOrthogonalPathCandidates");
    const a = __1((f, y)=>{
        for(let v = 0; v < f.length - 1; v++){
            const M = f[v];
            const E = f[v + 1];
            if (At(M, E, realNodeRects, y, 1)) {
                return true;
            }
        }
        return false;
    }, "pathHitsNode");
    const l = __1((f, y, v = false)=>{
        let M = 0;
        const E = Re(f, pe);
        const { start, end } = y;
        for (const S of t){
            if (S === y || S.isLayoutOnly) {
                continue;
            }
            const { start: start_1, end: end_1 } = S;
            if (!v && start && end && (start_1 === start || start_1 === end || end_1 === start || end_1 === end)) {
                continue;
            }
            const k = S.points;
            if (!(!k || k.length < 2)) {
                for (const O of E){
                    for (const _ of Re(k, pe)){
                        if (fo(O.a, O.b, _.a, _.b, pe, pe)) {
                            M++;
                            continue;
                        }
                        ce(O, _, pe) >= Wr && M++;
                    }
                }
            }
        }
        return M;
    }, "pathConflictCount");
    const g = 4;
    const x = __1((f, y)=>{
        const v = Math.abs(f.y - y.rect.top);
        const M = Math.abs(f.y - y.rect.bottom);
        const E = Math.abs(f.x - y.rect.left);
        const T = Math.abs(f.x - y.rect.right);
        let m = "top";
        let S = v;
        if (M < S) {
            m = "bottom";
            S = M;
        }
        if (E < S) {
            m = "left";
            S = E;
        }
        if (T < S) {
            m = "right";
            S = T;
        }
        return m;
    }, "nearestSideOfRect");
    const I = new Map;
    const u = __1((f, side, v)=>{
        const M = I.get(f) ?? [];
        M.push({
            side,
            edgeId: v
        });
        I.set(f, M);
    }, "addFaceClaim");
    for (const f of t){
        if (f.isLayoutOnly) {
            continue;
        }
        const y = f.points ?? [];
        if (y.length < 1) {
            continue;
        }
        const v = f.id ?? "";
        const { start, end } = f;
        if (start) {
            const T = nodeInfoById.get(start);
            if (T) {
                u(start, x(y[0], T), v);
            }
        }
        if (end) {
            const T = nodeInfoById.get(end);
            if (T) {
                u(end, x(y[y.length - 1], T), v);
            }
        }
    }
    const p = __1((f, y, v)=>I.get(f)?.some((M)=>M.edgeId !== v && M.side === y) ?? false, "faceIsClaimed");
    for (const f of t){
        if (f.isLayoutOnly) {
            continue;
        }
        const y = f.points;
        if (!y || y.length < 2) {
            continue;
        }
        const v = Qt(y, pe);
        if (v < g) {
            continue;
        }
        const { start, end } = f;
        if (!start || !end) {
            continue;
        }
        const T = nodeInfoById.get(start);
        const m = nodeInfoById.get(end);
        if (!T || !m) {
            continue;
        }
        const S = f.id ?? "";
        const A = l(y, f, true);
        const R = l(y, f);
        let k;
        let O = A;
        let _ = v;
        for (const H of s){
            if (p(start, H, S)) {
                continue;
            }
            const P = Ie(T, H);
            for (const G of s){
                if (p(end, G, S)) {
                    continue;
                }
                const j = Ie(m, G);
                for (const J of c(P, H, j, G)){
                    if (a(J, [
                        start,
                        end
                    ])) {
                        continue;
                    }
                    const dt = Qt(J, pe);
                    if (A > 0) {
                        const mt = l(J, f, true);
                        if (mt > O || mt === O && dt >= _) {
                            continue;
                        }
                        O = mt;
                        _ = dt;
                        k = J;
                        continue;
                    }
                    l(J, f) > R || dt < _ && (_ = dt, k = J);
                }
            }
        }
        if (k) {
            f.points = k;
            const H = I.get(start);
            if (H) {
                I.set(start, H.filter((G)=>G.edgeId !== S));
            }
            const P = I.get(end);
            if (P) {
                I.set(end, P.filter((G)=>G.edgeId !== S));
            }
            u(start, x(k[0], T), S);
            u(end, x(k[k.length - 1], m), S);
        }
    }
}
__1(Ls, "simplifyDetouredEdges");
const Kt = 0.001;
const Po = 10;
const Ve = 7;
function $n(t, e) {
    const n = e ? 0 : t.length - 1;
    const o = e ? 1 : -1;
    const s = t[n];
    const r = t[n + o];
    if (!s || !r) {
        return;
    }
    const i = r.x - s.x;
    const c = r.y - s.y;
    if (!(Math.abs(i) + Math.abs(c) < Kt)) {
        if (Math.abs(c) <= Kt) {
            const l = s.x + Math.sign(i) * Po;
            return {
                left: Math.min(s.x, l),
                right: Math.max(s.x, l),
                top: s.y - Ve,
                bottom: s.y + Ve
            };
        }
        if (Math.abs(i) <= Kt) {
            const l = s.y + Math.sign(c) * Po;
            return {
                left: s.x - Ve,
                right: s.x + Ve,
                top: Math.min(s.y, l),
                bottom: Math.max(s.y, l)
            };
        }
        return {
            left: Math.min(s.x, r.x),
            right: Math.max(s.x, r.x),
            top: Math.min(s.y, r.y),
            bottom: Math.max(s.y, r.y)
        };
    }
}
__1($n, "markerClearanceRectFor");
function Es(t) {
    return {
        left: Math.min(t.left, t.right),
        right: Math.max(t.left, t.right),
        top: Math.min(t.top, t.bottom),
        bottom: Math.max(t.top, t.bottom)
    };
}
__1(Es, "normalizeRect");
function zn(t, e) {
    const n = pt(e);
    const o = $n(n, true);
    const s = $n(n, false);
    return [
        o,
        s
    ].some((r)=>r && Je(t, Es(r)));
}
__1(zn, "labelOverlapsOwnMarker");
function Ue(t, e) {
    const n = [];
    for (const p of t){
        if (p.isLayoutOnly) {
            continue;
        }
        const f = p.points;
        if (!(!f || f.length < 2)) {
            for(let y = 0; y < f.length - 1; y++){
                n.push({
                    edgeId: p.id,
                    p1: f[y],
                    p2: f[y + 1]
                });
            }
        }
    }
    const o = [];
    const s = [];
    for (const p of e.values()){
        const { isGroup, parentId } = p;
        if (isGroup && !parentId) {
            const M = qt(p);
            if (M) {
                s.push({
                    id: p.id,
                    rect: M
                });
            }
            continue;
        }
        if (isGroup || p.isEdgeLabel) {
            continue;
        }
        const v = qt(p);
        if (v) {
            o.push({
                nodeId: p.id,
                rect: v
            });
        }
    }
    const r = 3;
    const i = 1;
    const c = 12;
    const a = __1((p, f)=>{
        const y = Tn(f, r);
        for (const { nodeId, rect } of o){
            if (nodeId !== p && Je(y, rect)) {
                return true;
            }
        }
        return false;
    }, "labelOverlapsForeignNode");
    const l = __1((p, f)=>{
        const y = Tn(f, r);
        for (const v of n){
            if (v.edgeId !== p && cn(v.p1, v.p2, y)) {
                return true;
            }
        }
        return false;
    }, "labelOverlapsForeignEdge");
    const g = __1((p, f, y)=>a(p, y) || l(f, y), "labelOverlapsAnything");
    const x = [];
    const I = __1((p)=>{
        for (const { id, rect } of s){
            if (ts(rect, p)) {
                return id;
            }
        }
    }, "findContainingLane");
    const u = __1((p, f)=>x.some((y)=>y.labelId !== p && Je(f, y.rect)), "overlapsPlacedLabel");
    for (const p of t){
        if (p.isLayoutOnly) {
            continue;
        }
        const labelId = p.labelNodeId;
        if (!labelId) {
            continue;
        }
        const y = e.get(labelId);
        if (!y) {
            continue;
        }
        const v = p.points;
        if (!v || v.length < 2) {
            continue;
        }
        const M = y.width ?? 0;
        const E = y.height ?? 0;
        if (M <= 0 || E <= 0) {
            continue;
        }
        const T = [];
        for(let idx = 0; idx < v.length - 1; idx++){
            const W = v[idx];
            const et = v[idx + 1];
            const at = Math.abs(W.x - et.x);
            const gt = Math.abs(W.y - et.y);
            if (!(at < Kt && gt < Kt || at >= Kt && gt >= Kt)) {
                T.push({
                    idx,
                    length: at + gt,
                    orientation: at >= Kt ? "horizontal" : "vertical",
                    midX: (W.x + et.x) / 2,
                    midY: (W.y + et.y) / 2
                });
            }
        }
        if (T.length === 0) {
            continue;
        }
        const m = T.length >= 3 ? T.filter((Q)=>Q.idx > 0 && Q.idx < T.length - 1) : T;
        const S = m.length > 0 ? m : T;
        const A = M >= E ? "horizontal" : "vertical";
        const R = __1((Q)=>[
                ...Q
            ].sort((W, et)=>{
                const at = W.orientation === A;
                const gt = et.orientation === A;
                if (at !== gt) {
                    if (at) {
                        return -1;
                    }
                    return 1;
                }
                const xt = W.length >= (W.orientation === "horizontal" ? M : E) + 2;
                const vt = et.length >= (et.orientation === "horizontal" ? M : E) + 2;
                if (xt !== vt) {
                    if (xt) {
                        return -1;
                    }
                    return 1;
                }
                return et.length - W.length;
            }), "rankSegments");
        const k = T[0];
        const O = T[T.length - 1];
        const _ = [
            0.5,
            0.25,
            0.75,
            0.05,
            0.95,
            0.15,
            0.85,
            0.1,
            0.9
        ];
        const H = __1((Q, W)=>{
            const et = v[Q.idx];
            const at = v[Q.idx + 1];
            return {
                midX: et.x + (at.x - et.x) * W,
                midY: et.y + (at.y - et.y) * W
            };
        }, "anchorAtT");
        const P = __1((Q, W, et)=>Math.min(et, Math.max(W, Q)), "clamp");
        const G = __1((Q, W)=>Q.midX >= W.left - Kt && Q.midX <= W.right + Kt && Q.midY >= W.top - Kt && Q.midY <= W.bottom + Kt, "pointInsideRectInclusive");
        const j = __1((Q)=>{
            const W = Ae(Q.midX, Q.midY, M, E);
            const laneId = I(W);
            if (laneId) {
                return {
                    laneId,
                    anchor: Q,
                    rect: W
                };
            }
            const at = s.find(({ rect })=>G(Q, rect));
            if (!at) {
                return;
            }
            const gt = at.rect.left + M / 2 + i;
            const xt = at.rect.right - M / 2 - i;
            const vt = at.rect.top + E / 2 + i;
            const Vt = at.rect.bottom - E / 2 - i;
            if (gt > xt || vt > Vt) {
                return;
            }
            const jt = {
                midX: P(Q.midX, gt, xt),
                midY: P(Q.midY, vt, Vt)
            };
            const Ut = Ae(jt.midX, jt.midY, M, E);
            if (G(Q, Ut)) {
                return {
                    laneId: at.id,
                    anchor: jt,
                    rect: Ut
                };
            }
        }, "placementForAnchor");
        const J = __1((Q, W, et)=>{
            if (Q.orientation === "horizontal") {
                return Math.abs(W.midX - et.x);
            }
            return Math.abs(W.midY - et.y);
        }, "distanceAlongSegment");
        const dt = __1((Q, W)=>{
            const at = (Q.orientation === "horizontal" ? M / 2 : E / 2) + c;
            if (Q === k) {
                const gt = v[Q.idx];
                if (J(Q, W, gt) + Kt < at) {
                    return false;
                }
            }
            if (Q === O) {
                const gt = v[Q.idx + 1];
                if (J(Q, W, gt) + Kt < at) {
                    return false;
                }
            }
            return true;
        }, "labelClearsTerminalEndpoints");
        const mt = __1((Q)=>{
            const W = R(Q);
            for (const et of W){
                for (const at of _){
                    const gt = H(et, at);
                    if (!dt(et, gt)) {
                        continue;
                    }
                    const xt = j(gt);
                    if (xt && !zn(xt.rect, v) && !u(labelId, xt.rect) && !g(labelId, p.id, xt.rect)) {
                        return {
                            laneId: xt.laneId,
                            anchor: xt.anchor
                        };
                    }
                }
            }
        }, "tryPool");
        const kt = __1((Q, W, et = false)=>{
            const at = R(Q);
            for (const gt of at){
                const xt = {
                    midX: gt.midX,
                    midY: gt.midY
                };
                if (W && !dt(gt, xt)) {
                    continue;
                }
                const vt = j(xt);
                if (vt && !zn(vt.rect, v) && !u(labelId, vt.rect) && !a(labelId, vt.rect) && (et || !l(p.id, vt.rect))) {
                    return {
                        laneId: vt.laneId,
                        anchor: vt.anchor
                    };
                }
            }
        }, "findLaneContainingFallback");
        const Pt = mt(S) ?? (S.length < T.length ? mt(T) : undefined) ?? kt(T, true) ?? kt(T, false) ?? kt(T, false, true);
        if (Pt) {
            y.x = Pt.anchor.midX;
            y.y = Pt.anchor.midY;
            y.parentId = Pt.laneId;
            const rect = Ae(Pt.anchor.midX, Pt.anchor.midY, M, E);
            const W = x.findIndex((et)=>et.labelId === labelId);
            if (W >= 0) {
                x[W] = {
                    labelId,
                    rect
                };
            } else {
                x.push({
                    labelId,
                    rect
                });
            }
        }
    }
}
__1(Ue, "anchorLabelsToPolyline");
const Sn = 0.000001;
const Kr = 8;
const Bo = Kr / 2;
const qr = 3;
function Vn(t, e) {
    if (t < e) {
        return `${t}::${e}`;
    }
    return `${e}::${t}`;
}
__1(Vn, "pairKey");
function Ts(t, e) {
    const { nodeInfoById, realNodeRects } = an(e);
    const s = new Map;
    for (const i of e){
        const c = i.id;
        if (!i.isGroup && i.isEdgeLabel) {
            s.set(c, {
                w: i.width ?? 0,
                h: i.height ?? 0
            });
            continue;
        }
    }
    const r = __1((i, c, a, l)=>{
        const g = Vn(c, a);
        let x = 0;
        const I = __1((u)=>{
            if (!u) {
                return;
            }
            const p = s.get(u);
            if (!p) {
                return;
            }
            const f = l === "x" ? p.w / 2 : p.h / 2;
            if (f > x) {
                x = f;
            }
        }, "consider");
        I(i.labelNodeId);
        for (const u of t){
            if (u === i || u.isLayoutOnly) {
                continue;
            }
            const { start, end } = u;
            !start || !end || Vn(start, end) === g && I(u.labelNodeId);
        }
        if (x > 0) {
            return x + qr;
        }
        return 0;
    }, "labelClearanceFor");
    for (const i of t){
        if (i.isLayoutOnly) {
            continue;
        }
        const c = i.points;
        if (!ro(c, Sn)) {
            continue;
        }
        const a = lo(i, nodeInfoById, Sn);
        if (!a) {
            continue;
        }
        const { srcId, dstId, srcInfo, dstInfo, collinearX, collinearY } = a;
        if (collinearX === collinearY) {
            continue;
        }
        let f;
        let y;
        if (collinearX) {
            const m = dstInfo.cy > srcInfo.cy;
            f = {
                x: srcInfo.cx,
                y: m ? srcInfo.rect.bottom : srcInfo.rect.top
            };
            y = {
                x: dstInfo.cx,
                y: m ? dstInfo.rect.top : dstInfo.rect.bottom
            };
        } else {
            const m = dstInfo.cx > srcInfo.cx;
            f = {
                x: m ? srcInfo.rect.right : srcInfo.rect.left,
                y: srcInfo.cy
            };
            y = {
                x: m ? dstInfo.rect.left : dstInfo.rect.right,
                y: dstInfo.cy
            };
        }
        if (At(f, y, realNodeRects, [
            srcId,
            dstId
        ], 1)) {
            continue;
        }
        const M = r(i, srcId, dstId, collinearX ? "x" : "y");
        const E = M > Bo ? M : Bo;
        const T = [
            0,
            E,
            -E
        ];
        for (const m of T){
            const S = {
                ...f
            };
            const A = {
                ...y
            };
            if (collinearX) {
                S.x += m;
                A.x += m;
                if (S.x <= srcInfo.rect.left || S.x >= srcInfo.rect.right || A.x <= dstInfo.rect.left || A.x >= dstInfo.rect.right) {
                    continue;
                }
            } else {
                S.y += m;
                A.y += m;
                if (S.y <= srcInfo.rect.top || S.y >= srcInfo.rect.bottom || A.y <= dstInfo.rect.top || A.y >= dstInfo.rect.bottom) {
                    continue;
                }
            }
            if (!At(S, A, realNodeRects, [
                srcId,
                dstId
            ], 1) && !Ze(S, A, t, i, {
                epsilon: Sn
            })) {
                i.points = [
                    S,
                    A
                ];
                break;
            }
        }
    }
}
__1(Ts, "straightenCollinearSiblingDetours");
function jn(t, e) {
    const { realNodeRects, labelNodeRects } = me(e.values());
    const g = __1((edge, S)=>Re(S, 0.001).map((A)=>({
                ...A,
                edge,
                interior: A.index >= 1 && A.index <= S.length - 3
            })), "segmentsFor");
    const x = __1(()=>{
        const m = [];
        for (const S of t){
            if (S.isLayoutOnly) {
                continue;
            }
            const A = S.points;
            if (!(!A || A.length < 2)) {
                m.push(...g(S, pt(A)));
            }
        }
        return m;
    }, "allSegments");
    const I = __1((m, S)=>{
        if (m.horizontal && S.horizontal) {
            return zt(m.a.x, m.b.x, S.a.x, S.b.x) >= 8 && Math.abs(m.a.y - S.a.y) < 7;
        }
        if (m.vertical && S.vertical) {
            return zt(m.a.y, m.b.y, S.a.y, S.b.y) >= 8 && Math.abs(m.a.x - S.a.x) < 7;
        }
        return false;
    }, "hasCrowdedParallelTrack");
    const u = __1((m, S)=>{
        const { start, end } = m;
        const k = g(m, S);
        if (k.length !== S.length - 1) {
            return false;
        }
        const O = [
            start,
            end
        ].filter((H)=>!!H);
        const _ = m.labelNodeId ? [
            m.labelNodeId
        ] : [];
        for (const H of k){
            if (At(H.a, H.b, realNodeRects, O, -2) || At(H.a, H.b, labelNodeRects, _, -2)) {
                return false;
            }
        }
        for (const H of t){
            if (H === m || H.isLayoutOnly) {
                continue;
            }
            const P = H.points;
            if (!(!P || P.length < 2)) {
                for (const G of k){
                    for (const j of g(H, pt(P))){
                        if (I(G, j) || le(G.a, G.b, j.a, j.b, 0.001)) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }, "candidateIsSafe");
    const p = __1((m, S)=>{
        const A = pt(m.edge.points ?? []);
        if (A.length < 4 || m.index >= A.length - 1) {
            return;
        }
        const R = A.map((k)=>({
                ...k
            }));
        if (m.horizontal) {
            R[m.index].y += S;
            R[m.index + 1].y += S;
        } else if (m.vertical) {
            R[m.index].x += S;
            R[m.index + 1].x += S;
        } else {
            return;
        }
        if (g(m.edge, R).length === R.length - 1) {
            return R;
        }
    }, "shiftedCandidate");
    const f = __1((m, S)=>({
            x: m.x ?? (S.left + S.right) / 2,
            y: m.y ?? (S.top + S.bottom) / 2
        }), "nodeCenter");
    const y = __1((m)=>{
        const m_edge = m.edge;
        const A = pt(m_edge.points ?? []);
        if (A.length !== 4 || m.index !== 1) {
            return;
        }
        const R = m_edge.start ? e.get(m_edge.start) : undefined;
        const k = m_edge.end ? e.get(m_edge.end) : undefined;
        const sourceRect = R ? qt(R) : undefined;
        const _ = k ? qt(k) : undefined;
        const tail = A.slice(m.index + 2);
        if (!(!R || !k || !sourceRect || !_ || tail.length === 0)) {
            return {
                sourceCenter: f(R, sourceRect),
                targetCenter: f(k, _),
                sourceRect,
                tail
            };
        }
    }, "sourceDetourContextFor");
    const v = __1((m, S, A, R, k, O)=>{
        const _ = R.y >= A.y;
        const H = _ ? k.bottom : k.top;
        const P = H + (_ ? 20 : -20);
        if (_ && m.b.y <= P + 0.001 || !_ && m.b.y >= P - 0.001) {
            return;
        }
        const G = m.a.x + S;
        return pt([
            {
                x: A.x,
                y: H
            },
            {
                x: A.x,
                y: P
            },
            {
                x: G,
                y: P
            },
            {
                x: G,
                y: m.b.y
            },
            ...O
        ], 0.001);
    }, "verticalSourceDetour");
    const M = __1((m, S, A, R, k, O)=>{
        const _ = R.x >= A.x;
        const H = _ ? k.right : k.left;
        const P = H + (_ ? 20 : -20);
        if (_ && m.b.x <= P + 0.001 || !_ && m.b.x >= P - 0.001) {
            return;
        }
        const G = m.a.y + S;
        return pt([
            {
                x: H,
                y: A.y
            },
            {
                x: P,
                y: A.y
            },
            {
                x: P,
                y: G
            },
            {
                x: m.b.x,
                y: G
            },
            ...O
        ], 0.001);
    }, "horizontalSourceDetour");
    const E = __1((m, S)=>{
        const A = y(m);
        if (A) {
            if (m.vertical) {
                return v(m, S, A.sourceCenter, A.targetCenter, A.sourceRect, A.tail);
            }
            if (m.horizontal) {
                return M(m, S, A.sourceCenter, A.targetCenter, A.sourceRect, A.tail);
            }
        }
    }, "sourceDetourCandidate");
    const T = [
        -7,
        7,
        -14,
        14,
        -21,
        21
    ];
    for(let m = 0; m < 12; m++){
        const S = x();
        let A = false;
        for(let R = 0; R < S.length && !A; R++){
            for(let k = R + 1; k < S.length && !A; k++){
                const O = S[R];
                const _ = S[k];
                if (O.edge === _.edge || !I(O, _)) {
                    continue;
                }
                const H = [
                    O,
                    _
                ].filter((P)=>P.interior);
                for (const P of H){
                    for (const G of T){
                        const j = p(P, G);
                        if (j && u(P.edge, j)) {
                            P.edge.points = j;
                            A = true;
                            break;
                        }
                        const J = E(P, G);
                        if (J && u(P.edge, J)) {
                            P.edge.points = J;
                            A = true;
                            break;
                        }
                    }
                    if (A) {
                        break;
                    }
                }
            }
        }
        if (!A) {
            return;
        }
    }
}
__1(jn, "nudgeSharedInteriorSubpaths");
function ws(t, e, n, o) {
    const s = e.x - t.x;
    const r = e.y - t.y;
    const i = o.x - n.x;
    const c = o.y - n.y;
    const a = s * c - r * i;
    if (Math.abs(a) < 1e-10) {
        return false;
    }
    const l = n.x - t.x;
    const g = n.y - t.y;
    const x = (l * c - g * i) / a;
    const I = (l * r - g * s) / a;
    const u = 0.01;
    return x > u && x < 1 - u && I > u && I < 1 - u;
}
__1(ws, "segmentsIntersect");
function As(t) {
    const e = t.nodes ?? [];
    const n = t.edges ?? [];
    const o = [];
    if (!n.length || !e.length) {
        return o;
    }
    const s = es(e);
    const r = [];
    for (const c of n){
        if (c.isLayoutOnly) {
            continue;
        }
        const a = c.points;
        if (!a || a.length < 2) {
            continue;
        }
        const { start, end, labelNodeId } = c;
        const I = c.id ?? `${start}->${end}`;
        for (const u of s){
            if (!(u.nodeId === start || u.nodeId === end) && !(labelNodeId && u.nodeId === labelNodeId)) {
                for(let p = 0; p < a.length - 1; p++){
                    if (cn(a[p], a[p + 1], u, -1)) {
                        o.push({
                            type: "edge-node-overlap",
                            edgeId: I,
                            targetId: u.nodeId,
                            detail: `segment ${p} passes through node "${u.nodeId}"`
                        });
                        break;
                    }
                }
            }
        }
        for(let u = 0; u < a.length - 1; u++){
            r.push({
                edgeId: I,
                start,
                end,
                p1: a[u],
                p2: a[u + 1]
            });
        }
    }
    const i = new Set;
    for(let c = 0; c < r.length; c++){
        for(let a = c + 1; a < r.length; a++){
            const l = r[c];
            const g = r[a];
            if (l.edgeId !== g.edgeId && !(l.start === g.start || l.start === g.end || l.end === g.start || l.end === g.end) && ws(l.p1, l.p2, g.p1, g.p2)) {
                const x = l.edgeId < g.edgeId ? `${l.edgeId}|${g.edgeId}` : `${g.edgeId}|${l.edgeId}`;
                if (!i.has(x)) {
                    i.add(x);
                    o.push({
                        type: "edge-edge-crossing",
                        edgeId: l.edgeId,
                        targetId: g.edgeId,
                        detail: `edges "${l.edgeId}" and "${g.edgeId}" cross`
                    });
                }
            }
        }
    }
    if (o.length > 0) {
        const c = o.filter((l)=>l.type === "edge-node-overlap").length;
        const a = o.filter((l)=>l.type === "edge-edge-crossing").length;
        l_1.warn(`[SWIMLANE_VALIDATE] ${o.length} issue(s) detected: ${c} edge-node overlap(s), ${a} edge crossing(s)`);
        for (const l of o){
            l_1.warn(`[SWIMLANE_VALIDATE]   ${l.type}: ${l.detail}`);
        }
    }
    return o;
}
__1(As, "validateSwimlanesLayout");
function Rs(t, e) {
    const n = t.nodes ?? [];
    const o = t.edges ?? [];
    const s = n.filter((c)=>!c.isGroup);
    if ((e === "LR" || e === "RL") && s.length > 0 && !ms(t, e) || e === "BT" && s.length > 0 && !ps(t)) {
        return;
    }
    for (const c of o){
        if (c.isLayoutOnly) {
            continue;
        }
        const a = c.points;
        if (!(!a || a.length < 2)) {
            c.points = ae(Qe(a));
        }
    }
    Ls(o, n);
    Ts(o, n);
    ys(o, n);
    const r = new Map;
    for (const c of n){
        r.set(String(c.id), c);
    }
    Ue(o, r);
    is(o, r);
    xs(o, r);
    jn(o, r);
    bs(o, r);
    Ms(o, r);
    Xn(o, r);
    Is(o, r);
    const i = __1(()=>{
        vs(o, r);
        Ss(o, r);
        Cs(o, r);
        Ue(o, r);
        Dn(o, r);
        Xn(o, r);
        Ue(o, r);
        Dn(o, r);
    }, "finalizeRenderedEdges");
    i();
    jn(o, r);
    i();
    Yn(o, r);
    Gn(o, r);
    Yn(o, r);
    Gn(o, r);
}
__1(Rs, "postProcessSwimlaneLayout");
function ye(t) {
    const e = new Map(t.nodeById);
    const n = new Set;
    const o = [];
    for (const r of t.edges){
        if (!e.has(r.src) || !e.has(r.dst)) {
            continue;
        }
        const i = `${r.id}:${r.src}->${r.dst}`;
        if (!n.has(i)) {
            n.add(i);
            o.push(r);
        }
    }
    return {
        nodes: [
            ...e.keys()
        ],
        edges: o,
        layout: t.layout,
        nodeById: e
    };
}
__1(ye, "normalizeGraph");
function mo(t, e) {
    return t.edges.filter((n)=>n.dst === e);
}
__1(mo, "incoming");
function Ns(t) {
    const e = new Map;
    for (const n of t.nodes){
        e.set(n, []);
    }
    for (const n of t.edges){
        e.get(n.src).push(n.dst);
    }
    return e;
}
__1(Ns, "buildSuccessorMap");
function yo(t) {
    const e = Ns(t);
    for (const n of e.values()){
        n.sort((o, s)=>o.localeCompare(s));
    }
    return e;
}
__1(yo, "buildSortedSuccessorMap");
function xo(t) {
    const e = new Map;
    for (const n of t.nodes){
        e.set(n, 0);
    }
    for (const n of t.edges){
        e.set(n.dst, (e.get(n.dst) ?? 0) + 1);
    }
    return e;
}
__1(xo, "buildInDegreeMap");
function bo(t) {
    return [
        ...t.entries()
    ].filter(([, e])=>e === 0).map(([e])=>e).sort((e, n)=>e.localeCompare(n));
}
__1(bo, "sortedZeroInDegreeNodes");
function ln(t, e = ()=>true) {
    const preds = new Map;
    const succs = new Map;
    for (const s of t.nodes){
        preds.set(s, []);
        succs.set(s, []);
    }
    for (const s of t.edges){
        if (e(s)) {
            succs.get(s.src).push(s.dst);
            preds.get(s.dst).push(s.src);
        }
    }
    return {
        preds,
        succs
    };
}
__1(ln, "buildPredecessorSuccessorMaps");
function Mo(t, e, n, o) {
    let s = 0;
    for (const i of t.nodes){
        if (!(o?.skipGroups && t.nodeById.get(i)?.isGroup)) {
            s = Math.max(s, n[i] ?? 0);
        }
    }
    const r = Array.from({
        length: s + 1
    }, ()=>[]);
    for (const i of e){
        if (!(o?.skipGroups && t.nodeById.get(i)?.isGroup)) {
            r[Math.max(0, n[i] ?? 0)].push(i);
        }
    }
    return r;
}
__1(Mo, "buildLayersFromRanks");
function Be(t) {
    const e = xo(t);
    const n = bo(e);
    const o = [];
    const s = yo(t);
    while(n.length){
        const r = n.shift();
        o.push(r);
        for (const i of s.get(r) ?? []){
            e.set(i, (e.get(i) ?? 0) - 1);
            if ((e.get(i) ?? 0) === 0) {
                let c = 0;
                while(c < n.length && n[c] < i){
                    c++;
                }
                n.splice(c, 0, i);
            }
        }
    }
    if (o.length === t.nodes.length) {
        return o;
    }
    return null;
}
__1(Be, "topoSortIfAcyclic");
function Ne(t) {
    const e = new Map;
    let n = 0;
    for (const o of t){
        e.set(o, n);
        n++;
    }
    return e;
}
__1(Ne, "buildLayerIndex");
function Io(t) {
    const e = new Array(t.length);
    const n = __1((o, s)=>{
        if (s - o <= 1) {
            return 0;
        }
        const r = o + s >> 1;
        let i = n(o, r) + n(r, s);
        let c = o;
        let a = r;
        let l = o;
        while(c < r || a < s){
            if (a >= s || c < r && t[c] <= t[a]) {
                e[l++] = t[c++];
            } else {
                e[l++] = t[a++];
                i += r - c;
            }
        }
        for(let g = o; g < s; g++){
            t[g] = e[g];
        }
        return i;
    }, "count");
    return n(0, t.length);
}
__1(Io, "countInversions");
function Os(t) {
    const e = ye(t);
    const n = new Map;
    for (const g of e.nodes){
        n.set(g, []);
    }
    for (const g of e.edges){
        n.get(g.src).push(g);
    }
    for (const g of n.values()){
        g.sort((x, I)=>{
            if (x.dst === I.dst) {
                return x.id.localeCompare(I.id);
            }
            return x.dst.localeCompare(I.dst);
        });
    }
    const o = Object.create(null);
    for (const g of e.nodes){
        o[g] = 0;
    }
    const reversed = [];
    const r = __1((g)=>{
        o[g] = 1;
        for (const x of n.get(g) ?? []){
            const I = x.dst;
            if (o[I] === 0) {
                r(I);
            } else if (o[I] === 1) {
                reversed.push(x);
            }
        }
        o[g] = 2;
    }, "dfs");
    const i = [
        ...e.nodes
    ].sort((g, x)=>g.localeCompare(x));
    for (const g of i){
        if (o[g] === 0) {
            r(g);
        }
    }
    const c = new Set(reversed.map((g)=>`${g.id}:${g.src}->${g.dst}`));
    const a = e.edges.map((g)=>{
        if (c.has(`${g.id}:${g.src}->${g.dst}`)) {
            return {
                id: g.id,
                src: g.dst,
                dst: g.src,
                weight: g.weight,
                ref: g.ref
            };
        }
        return g;
    });
    return {
        acyclic: {
            nodes: [
                ...e.nodes
            ],
            edges: a,
            layout: e.layout,
            nodeById: new Map(e.nodeById)
        },
        reversed
    };
}
__1(Os, "removeCycles_DFS");
function Ps(t) {
    const e = new Map;
    const n = __1((o)=>{
        if (e.has(o)) {
            return e.get(o);
        }
        const s = t.nodeById.get(o);
        if (!s) {
            e.set(o, null);
            return null;
        }
        const s_parentId = s.parentId;
        if (!s_parentId) {
            e.set(o, null);
            return null;
        }
        const c = n(s_parentId) ?? s_parentId;
        e.set(o, c);
        return c;
    }, "resolve");
    for (const o of t.nodes){
        n(o);
    }
    return e;
}
__1(Ps, "buildTopLaneMap");
function fe(t) {
    const e = Ps(t);
    return (n)=>e.get(n) ?? null;
}
__1(fe, "createTopLaneResolver");
function fn(t) {
    const e = [];
    for (const n of t.layout.nodes ?? []){
        if (n.isGroup && !n.parentId) {
            e.push(n.id);
        }
    }
    return [
        ...new Set(e)
    ].reverse();
}
__1(fn, "buildTopLaneOrder");
function So(t, e) {
    const n = fn(t);
    if (!e || e.length === 0) {
        return n;
    }
    const o = new Set(n);
    const s = new Set;
    const r = [];
    for (const i of e){
        if (!(!o.has(i) || s.has(i))) {
            s.add(i);
            r.push(i);
        }
    }
    for (const i of n){
        if (!s.has(i)) {
            r.push(i);
        }
    }
    return r;
}
__1(So, "resolveTopLaneOrder");
const Jr = {
    EPSILON: 0.000001
};
const sn = {
    GRAVITY_ITERATIONS: 8,
    MAX_CROSSING_OPTIMIZATION_PASSES: 4,
    DEFAULT_COMPACT_SINGLE_INPUT: true
};
const ko = {
    DEFAULT_LAYER_GAP: 100,
    DEFAULT_NODE_GAP: 40
};
function Bs(t, e) {
    const n = ye(t);
    const o = e?.laneOf ?? (()=>null);
    const rankHint = e?.rankHint;
    const { preds } = ln(n);
    for (const m of preds.values()){
        m.sort((S, A)=>S.localeCompare(A));
    }
    const topologicalOrder = Be(n) ?? [
        ...n.nodes
    ].sort((m, S)=>m.localeCompare(S));
    const topoIndex = new Map;
    for (const [m, S] of topologicalOrder.entries()){
        topoIndex.set(S, m);
    }
    const parent = new Map;
    const children = new Map;
    for (const m of n.nodes){
        children.set(m, []);
    }
    for (const m of topologicalOrder){
        const S = (preds.get(m) ?? []).filter((A)=>parent.has(A));
        if (S.length > 0) {
            const A = ks(m, S, {
                laneOf: o,
                rankHint,
                topoIndex
            });
            parent.set(m, A);
            children.get(A).push(m);
        } else {
            if (!parent.has(m)) {
                parent.set(m, null);
            }
        }
    }
    for (const m of n.nodes){
        if (!parent.has(m)) {
            parent.set(m, null);
        }
    }
    const g = new Set;
    for (const m of n.nodes){
        if ((parent.get(m) ?? null) === null) {
            g.add(m);
        }
    }
    const roots = [
        ...g
    ].sort((m, S)=>{
        const A = topoIndex.get(m) ?? 0;
        const R = topoIndex.get(S) ?? 0;
        if (A === R) {
            return m.localeCompare(S);
        }
        return A - R;
    });
    const I = _s(n);
    const adjacency = new Map;
    for (const [m, S] of I.entries()){
        adjacency.set(m, [
            ...S
        ].sort((A, R)=>A.localeCompare(R)));
    }
    const componentOf = Fs(adjacency);
    const blocks = Ds(adjacency);
    const nodeBlocks = new Map;
    for (const m of n.nodes){
        nodeBlocks.set(m, []);
    }
    for (const m of blocks){
        for (const S of m.nodes){
            const A = nodeBlocks.get(S);
            if (A) {
                A.push(m.id);
            } else {
                nodeBlocks.set(S, [
                    m.id
                ]);
            }
        }
    }
    const preorder = [];
    const postorder = [];
    const E = new Set;
    const T = __1((m)=>{
        if (!E.has(m)) {
            E.add(m);
            preorder.push(m);
            for (const S of children.get(m) ?? []){
                T(S);
            }
            postorder.push(m);
        }
    }, "walk");
    for (const m of roots){
        T(m);
    }
    for (const m of topologicalOrder){
        T(m);
    }
    return {
        parent,
        children,
        roots,
        componentOf,
        blocks,
        nodeBlocks,
        adjacency,
        preorder,
        postorder,
        topologicalOrder
    };
}
__1(Bs, "buildDrivingTree");
function ks(t, e, n) {
    const o = n.laneOf(t);
    return [
        ...e
    ].sort((r, i)=>{
        const c = n.laneOf(r);
        const a = n.laneOf(i);
        const l = c != null && c === o;
        const g = a != null && a === o;
        if (l !== g) {
            if (l) {
                return -1;
            }
            return 1;
        }
        const x = n.rankHint?.[r];
        const I = n.rankHint?.[i];
        if (x != null && I != null && x !== I) {
            return I - x;
        }
        const u = n.topoIndex.get(r) ?? 0;
        const p = n.topoIndex.get(i) ?? 0;
        if (u !== p) {
            return u - p;
        }
        return r.localeCompare(i);
    })[0];
}
__1(ks, "chooseParent");
function _s(t) {
    const e = new Map;
    for (const n of t.nodes){
        e.set(n, new Set);
    }
    for (const n of t.edges){
        e.get(n.src).add(n.dst);
        e.get(n.dst).add(n.src);
    }
    return e;
}
__1(_s, "buildAdjacency");
function Fs(t) {
    const e = new Map;
    let n = 0;
    for (const o of t.keys()){
        if (e.has(o)) {
            continue;
        }
        const s = [
            o
        ];
        while(s.length > 0){
            const r = s.pop();
            if (!e.has(r)) {
                e.set(r, n);
                for (const i of t.get(r) ?? []){
                    if (!e.has(i)) {
                        s.push(i);
                    }
                }
            }
        }
        n++;
    }
    return e;
}
__1(Fs, "assignComponents");
function Ds(t) {
    const e = new Map;
    const n = new Map;
    const o = [];
    const s = [];
    let r = 0;
    const i = __1((c, a)=>{
        e.set(c, ++r);
        n.set(c, r);
        for (const l of t.get(c) ?? []){
            l !== a && (e.has(l) ? (e.get(l) ?? 0) < (e.get(c) ?? 0) && (o.push([
                c,
                l
            ]), n.set(c, Math.min(n.get(c) ?? r, e.get(l) ?? r))) : (o.push([
                c,
                l
            ]), i(l, c), n.set(c, Math.min(n.get(c) ?? r, n.get(l) ?? r)), (n.get(l) ?? 0) >= (e.get(c) ?? 0) && s.push(Hs(c, l, o, s.length))));
        }
    }, "visit");
    for (const c of t.keys()){
        if (!e.has(c)) {
            i(c, null);
        }
    }
    return s;
}
__1(Ds, "computeBlocks");
function Hs(t, e, n, id) {
    const s = [];
    const r = new Set;
    while(n.length > 0){
        const i = n.pop();
        s.push(i);
        r.add(i[0]);
        r.add(i[1]);
        if (i[0] === t && i[1] === e || i[0] === e && i[1] === t) {
            break;
        }
    }
    return {
        id,
        edges: s,
        nodes: [
            ...r
        ]
    };
}
__1(Hs, "popBlock");
function Xs(t, e, n) {
    const o = [
        ...t.nodes
    ];
    const s = new Map;
    for (const [M, E] of o.entries()){
        s.set(E, M);
    }
    const o_length = o.length;
    const i = new Array(o_length).fill(-1);
    const c = new Array(o_length).fill(0);
    const a = [];
    const l = new Set;
    for (const M of o){
        const E = n.parent.get(M) ?? null;
        const T = s.get(M);
        if (T != null && E == null) {
            i[T] = -1;
            c[T] = 0;
            if (!l.has(M)) {
                l.add(M);
                a.push(M);
            }
        }
    }
    while(a.length > 0){
        const M = a.shift();
        const E = s.get(M);
        if (E == null) {
            continue;
        }
        const T = n.children.get(M) ?? [];
        for (const m of T){
            if (l.has(m)) {
                continue;
            }
            const S = s.get(m);
            if (S != null) {
                i[S] = E;
                c[S] = c[E] + 1;
                l.add(m);
                a.push(m);
            }
        }
    }
    for (const M of o){
        if (l.has(M)) {
            continue;
        }
        const E = s.get(M);
        if (E != null) {
            i[E] = -1;
            c[E] = 0;
            l.add(M);
        }
    }
    const length = Math.max(1, Math.ceil(Math.log2(Math.max(1, o_length))) + 1);
    const x = Array.from({
        length
    }, ()=>new Array(o_length).fill(-1));
    for(let M = 0; M < o_length; M++){
        x[0][M] = i[M];
    }
    for(let M = 1; M < length; M++){
        for(let E = 0; E < o_length; E++){
            const T = x[M - 1][E];
            x[M][E] = T === -1 ? -1 : x[M - 1][T];
        }
    }
    const I = __1((M, E)=>{
        if (M === -1 || E === -1) {
            return -1;
        }
        if (c[M] < c[E]) {
            [M, E] = [
                E,
                M
            ];
        }
        const T = c[M] - c[E];
        for(let m = 0; m < length; m++){
            if (T >> m & 1 && (M = x[m][M], M === -1)) {
                return -1;
            }
        }
        if (M === E) {
            return M;
        }
        for(let m = length - 1; m >= 0; m--){
            const S = x[m][M];
            const A = x[m][E];
            S === -1 || A === -1 || S !== A && (M = S, E = A);
        }
        return x[0][M];
    }, "lcaIndex");
    const u = Array.from({
        length: o_length
    }, ()=>new Map);
    for (const M of t.edges){
        let E = M.src;
        let T = M.dst;
        let m = e[E];
        let S = e[T];
        if (m == null || S == null || (m > S && ([E, T] = [
            T,
            E
        ], [m, S] = [
            S,
            m
        ]), m == null || S == null || m === S)) {
            continue;
        }
        const A = s.get(E);
        const R = s.get(T);
        if (A == null || R == null) {
            continue;
        }
        const k = I(A, R);
        if (k === -1) {
            continue;
        }
        const O = u[k];
        for(let _ = m; _ < S; _++){
            O.set(_, (O.get(_) ?? 0) + 1);
        }
    }
    const p = new Map;
    const f = __1((M, E)=>{
        if (E.size !== 0) {
            for (const [T, m] of E){
                M.set(T, (M.get(T) ?? 0) + m);
            }
        }
    }, "mergeInto");
    const y = new Set;
    const v = __1((M)=>{
        const E = s.get(M);
        y.add(M);
        const T = E == null ? undefined : u[E];
        const m = T ? new Map(T) : new Map;
        const S = n.children.get(M) ?? [];
        for (const A of S){
            const R = v(A);
            const k = e[M];
            if (k != null) {
                let O = p.get(M);
                if (!O) {
                    O = new Map;
                    p.set(M, O);
                }
                let _ = R.get(k) ?? 0;
                const H = e[A];
                if (H != null && H > k) {
                    _ += 1;
                }
                O.set(A, _);
            }
            f(m, R);
        }
        return m;
    }, "dfs");
    for (const M of n.roots){
        if (!y.has(M)) {
            v(M);
        }
    }
    for (const M of o){
        if (!y.has(M)) {
            v(M);
        }
    }
    return p;
}
__1(Xs, "computeSubtreeCrossCounts");
function Ys(t, e, n) {
    const o = new Map;
    const s = __1((r)=>{
        let i = n[r] ?? 0;
        const c = [
            ...e.get(r) ?? []
        ];
        c.sort(Co(n));
        for (const a of c){
            s(a);
            const l = o.get(a);
            if (l != null) {
                i = Math.min(i, l);
            }
        }
        o.set(r, i);
    }, "annotate");
    for (const r of t){
        s(r);
    }
    return o;
}
__1(Ys, "annotateMinimumLayers");
function Co(t) {
    return (e, n)=>{
        const o = t[e] ?? 0;
        const s = t[n] ?? 0;
        if (o === s) {
            return e.localeCompare(n);
        }
        return o - s;
    };
}
__1(Co, "compareByRankThenId");
function Gs(t, e, n, o) {
    let s = 0;
    for (const a of e){
        const l = n[a] ?? 0;
        if (l > s) {
            s = l;
        }
    }
    const r = Array.from({
        length: s + 1
    }, ()=>[]);
    const i = new Set;
    const c = __1((a)=>{
        if (i.has(a)) {
            return;
        }
        i.add(a);
        const l = n[a] ?? 0;
        if (!r[l]) {
            r[l] = [];
        }
        r[l].push(a);
        for (const g of o(a)){
            c(g);
        }
    }, "emit");
    for (const a of t){
        c(a);
    }
    for (const a of e){
        if (!i.has(a)) {
            const l = n[a] ?? 0;
            if (!r[l]) {
                r[l] = [];
            }
            r[l].push(a);
            i.add(a);
        }
    }
    return r;
}
__1(Gs, "emitNodesInTreeOrder");
function $s(t) {
    const e = [];
    for (const n of t){
        const o = new Set;
        const s = [];
        for (const r of n){
            if (!o.has(r)) {
                o.add(r);
                s.push(r);
            }
        }
        e.push(s);
    }
    return e;
}
__1($s, "deduplicateLayers");
function zs(t, e, n, o) {
    return (s)=>{
        const r = t.get(s) ?? [];
        if (r.length === 0) {
            return [];
        }
        const i = e[s] ?? 0;
        const c = [];
        const a = [];
        const l = n.get(s);
        for (const child of r){
            const min = o.get(child) ?? i;
            if (min > i) {
                c.push({
                    child,
                    min
                });
            } else {
                a.push(child);
            }
        }
        c.sort((g, x)=>{
            if (g.min === x.min) {
                return g.child.localeCompare(x.child);
            }
            return g.min - x.min;
        });
        a.sort((g, x)=>{
            const I = l?.get(g) ?? 0;
            const u = l?.get(x) ?? 0;
            if (I !== u) {
                return I - u;
            }
            const p = o.get(g) ?? i;
            const f = o.get(x) ?? i;
            if (p !== f) {
                return p - f;
            }
            return g.localeCompare(x);
        });
        return [
            ...c.map((g)=>g.child),
            ...a
        ];
    };
}
__1(zs, "createChildOrderer");
function rn(t, rankHint, n) {
    const o = Bs(t, {
        rankHint,
        laneOf: n
    });
    const { children, roots } = o;
    for (const x of t.nodes){
        if (!children.has(x)) {
            children.set(x, []);
        }
    }
    const i = Xs(t, rankHint, o);
    const c = [
        ...roots
    ].sort(Co(rankHint));
    const a = Ys(c, children, rankHint);
    const l = zs(children, rankHint, i, a);
    let g = Gs(c, t.nodes, rankHint, l);
    g = $s(g);
    return g;
}
__1(rn, "buildMultitreeLayerOrder");
function Vs(t, e, n) {
    const o = new Set(t);
    const s = new Set(e);
    const r = Ne(e);
    const i = [];
    for (const c of n){
        if (o.has(c.src) && s.has(c.dst)) {
            i.push(r.get(c.dst));
        }
    }
    return Io(i);
}
__1(Vs, "countCrossingsBetweenAdjacent");
function Un(t, e, n) {
    const o = [];
    for (const r of e){
        const i = n[r.src];
        const c = n[r.dst];
        if (i == null || c == null || i === c) {
            continue;
        }
        let a = r.src;
        let l = r.dst;
        let g = i;
        let x = c;
        if (i > c) {
            a = r.dst;
            l = r.src;
            g = c;
            x = i;
        }
        for(let I = g; I < x; I++){
            o.push({
                id: `${r.id}@${I}`,
                src: a,
                dst: l,
                ref: r.ref
            });
        }
    }
    let s = 0;
    for(let r = 0; r + 1 < t.length; r++){
        s += Vs(t[r], t[r + 1], o);
    }
    return s;
}
__1(Un, "totalCrossings");
function js(t, e) {
    const n = {
        ...e
    };
    const { preds } = ln(t);
    const s = fe(t);
    const r = rn(t, n, s);
    let i = Un(r, t.edges, n);
    const sn_MAX_CROSSING_OPTIMIZATION_PASSES = sn.MAX_CROSSING_OPTIMIZATION_PASSES;
    for(let a = 0; a < sn_MAX_CROSSING_OPTIMIZATION_PASSES; a++){
        let l = false;
        const g = [
            ...t.nodes
        ].sort((x, I)=>(n[I] ?? 0) - (n[x] ?? 0));
        for (const x of g){
            const I = n[x] ?? 0;
            if (I === 0) {
                continue;
            }
            let u = 0;
            for (const v of preds.get(x) ?? []){
                u = Math.max(u, (n[v] ?? 0) + 1);
            }
            if (u >= I) {
                continue;
            }
            const p = I;
            n[x] = u;
            const f = rn(t, n, s);
            const y = Un(f, t.edges, n);
            if (y < i) {
                i = y;
                l = true;
            } else {
                n[x] = p;
            }
        }
        if (!l) {
            break;
        }
    }
    return n;
}
__1(js, "optimizeRanksByCrossings");
function Us(t, e) {
    const n = fe(t);
    const o = [
        ...t.nodes
    ].sort((s, r)=>(e[s] ?? 0) - (e[r] ?? 0) || s.localeCompare(r));
    for (const s of o){
        const r = n(s);
        if (!r) {
            continue;
        }
        const i = t.edges.filter((f)=>f.src === s);
        if (i.length === 0) {
            continue;
        }
        let c = false;
        let a = 0;
        for (const f of i){
            const y = n(f.dst);
            if (y == null || y === r) {
                c = true;
            } else {
                a++;
            }
        }
        if (a === 0 || c) {
            continue;
        }
        let l = 0;
        let g = false;
        for (const f of t.edges){
            if (f.dst !== s) {
                continue;
            }
            const y = n(f.src);
            y && (y === r ? g = true : l++);
        }
        if (l > 0 || !g) {
            continue;
        }
        const x = e[s] ?? 0;
        const I = x + a;
        let u = 0;
        for (const f of t.edges){
            if (f.dst === s) {
                u = Math.max(u, (e[f.src] ?? 0) + 1);
            }
        }
        const p = Math.max(x, u, I);
        if (p !== x) {
            e[s] = p;
        }
    }
}
__1(Us, "adjustCrossLaneSources");
function Ws(t, e) {
    const n = ye(t);
    const o = Be(n) ?? [
        ...n.nodes
    ].sort();
    const s = e?.compactSingleInput ?? false;
    const r = fe(n);
    let i = Object.create(null);
    for (const a of o){
        const l = mo(n, a);
        const g = e?.ignoreCrossLaneEdges ? l.filter((x)=>{
            const I = r(x.src);
            const u = r(a);
            if (!I || !u) {
                return true;
            }
            return I === u;
        }) : l;
        if (g.length === 0) {
            i[a] = 0;
        } else if (s && g.length === 1) {
            const x = g[0].src;
            const I = r(x);
            const u = r(a);
            if (I !== u) {
                i[a] = i[x] ?? 0;
            } else {
                i[a] = (i[x] ?? 0) + 1;
            }
        } else {
            let x = -Infinity;
            for (const I of g){
                x = Math.max(x, (i[I.src] ?? 0) + 1);
            }
            i[a] = x === -Infinity ? 0 : x;
        }
    }
    if (e?.optimizeRanksByCrossings ?? false) {
        i = js(n, i);
    }
    if (e?.ignoreCrossLaneEdges) {
        Us(n, i);
    }
    return {
        layers: rn(n, i, r),
        rankOf: i,
        dummy: new Set
    };
}
__1(Ws, "assignLayers_LongestPath");
function Ks(t, e) {
    const n = ye(t);
    const s = {
        ...Ws(n, {
            compactSingleInput: e?.compactSingleInput,
            ignoreCrossLaneEdges: e?.ignoreCrossLaneEdges,
            optimizeRanksByCrossings: e?.optimizeRanksByCrossings
        }).rankOf
    };
    const r = fe(n);
    const { preds, succs } = ln(n, (p)=>{
        if (e?.ignoreCrossLaneEdges) {
            const f = r(p.src);
            const y = r(p.dst);
            if (f && y && f !== y) {
                return false;
            }
        }
        return true;
    });
    const a = Be(n) ?? [
        ...n.nodes
    ];
    const l = [
        ...a
    ].reverse();
    const g = __1((p, f)=>{
        let y = 0;
        for (const E of preds.get(p) ?? []){
            y = Math.max(y, (s[E] ?? 0) + 1);
        }
        let Number_POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
        const M = succs.get(p) ?? [];
        if (M.length > 0) {
            Number_POSITIVE_INFINITY = Math.min(...M.map((E)=>(s[E] ?? 0) - 1));
        }
        if (!Number.isFinite(Number_POSITIVE_INFINITY)) {
            Number_POSITIVE_INFINITY = Math.max(y, f);
        }
        return Math.min(Math.max(f, y), Number_POSITIVE_INFINITY);
    }, "clampFeasible");
    const sn_GRAVITY_ITERATIONS = sn.GRAVITY_ITERATIONS;
    const I = __1((p)=>{
        let f = false;
        for (const y of p){
            const v = preds.get(y) ?? [];
            const M = succs.get(y) ?? [];
            if (v.length === 0 && M.length === 0) {
                continue;
            }
            const E = v.length > 0 ? v.reduce((acc, item)=>acc + (s[item] ?? 0) + 1, 0) / v.length : s[y] ?? 0;
            const T = M.length > 0 ? M.reduce((acc, item)=>acc + (s[item] ?? 0) - 1, 0) / M.length : s[y] ?? 0;
            const m = Math.round((E + T) / 2);
            const S = g(y, m);
            if (S !== s[y]) {
                s[y] = S;
                f = true;
            }
        }
        return f;
    }, "relaxOrder");
    for(let p = 0; p < sn_GRAVITY_ITERATIONS; p++){
        const f = I(a);
        const y = I(l);
        if (!f && !y) {
            break;
        }
    }
    for (const p of a){
        let f = 0;
        for (const y of preds.get(p) ?? []){
            f = Math.max(f, (s[y] ?? 0) + 1);
        }
        if ((s[p] ?? 0) < f) {
            s[p] = f;
        }
    }
    for (const p of l){
        const f = succs.get(p) ?? [];
        if (f.length > 0) {
            const y = Math.min(...f.map((v)=>(s[v] ?? 0) - 1));
            if ((s[p] ?? 0) > y) {
                s[p] = y;
            }
        }
    }
    return {
        layers: Mo(n, a, s),
        rankOf: s,
        dummy: new Set
    };
}
__1(Ks, "assignLayers_Gravity");
function qs(t) {
    const e = xo(t);
    const n = yo(t);
    let o = bo(e);
    const s = [];
    while(o.length > 0){
        const r = [];
        for (const i of o){
            s.push(i);
            for (const c of n.get(i) ?? []){
                e.set(c, (e.get(c) ?? 0) - 1);
                if ((e.get(c) ?? 0) === 0) {
                    r.push(c);
                }
            }
        }
        o = r.sort((i, c)=>i.localeCompare(c));
    }
    if (s.length === t.nodes.length) {
        return s;
    }
    return null;
}
__1(qs, "topoSortByGenerationIfAcyclic");
function Js(t, e) {
    const n = ye(t);
    const o = e?.direction === "LR" ? qs(n) ?? [
        ...n.nodes
    ].sort() : Be(n) ?? [
        ...n.nodes
    ].sort();
    const s = fe(n);
    const r = __1((g)=>s(g) ?? g, "laneOf");
    const i = Object.create(null);
    const c = new Map;
    const a = __1((g, x)=>{
        if (e?.ignoreCrossLaneEdges ?? true) {
            if (r(g) === r(x)) {
                return 1;
            }
            return 0;
        }
        return 1;
    }, "edgeWeight");
    for (const g of o){
        if (n.nodeById.get(g)?.isGroup) {
            continue;
        }
        const I = mo(n, g);
        let u = 0;
        if (I.length > 0) {
            for (const v of I){
                const M = v.src;
                const E = i[M] ?? 0;
                u = Math.max(u, E + a(M, g));
            }
        }
        const p = r(g);
        const f = c.get(p) ?? 0;
        const y = Math.max(u, f);
        i[g] = y;
        c.set(p, y + 1);
    }
    return {
        layers: Mo(n, o, i, {
            skipGroups: true
        }),
        rankOf: i,
        dummy: new Set
    };
}
__1(Js, "assignLayers_LaneAwareCompact");
function Zs(t, e) {
    const n = ye(e);
    const { rankOf } = t;
    const s = t.layers.map((u)=>[
            ...u
        ]);
    const dummy = new Set(t.dummy ? [
        ...t.dummy
    ] : []);
    let i = 0;
    const c = new Map(n.nodeById);
    const a = __1((u)=>{
        const p = `placeholder-${i++}`;
        const f = {
            id: p,
            isGroup: false,
            isDummy: true,
            width: 0,
            height: 0
        };
        c.set(p, f);
        dummy.add(p);
        while(s.length <= u){
            s.push([]);
        }
        s[u].push(p);
        rankOf[p] = u;
        return p;
    }, "addDummyAt");
    const l = [
        ...n.edges
    ].sort((u, p)=>{
        if (u.id === p.id) {
            if (u.src === p.src) {
                return u.dst.localeCompare(p.dst);
            }
            return u.src.localeCompare(p.src);
        }
        return u.id.localeCompare(p.id);
    });
    const g = [];
    for (const u of l){
        const p = rankOf[u.src] ?? 0;
        const f = rankOf[u.dst] ?? 0;
        if (f - p <= 1) {
            g.push(u);
            continue;
        }
        let y = u.src;
        for(let M = p + 1, E = 0; M < f; M++, E++){
            const T = a(M);
            g.push({
                id: `${u.id}#${E}`,
                src: y,
                dst: T,
                weight: u.weight,
                ref: u.ref
            });
            y = T;
        }
        const v = f - p - 2;
        g.push({
            id: `${u.id}#${Math.max(v + 1, 0)}`,
            src: y,
            dst: u.dst,
            weight: u.weight,
            ref: u.ref
        });
    }
    const graphWithDummies = {
        nodes: [
            ...n.nodes,
            ...[
                ...dummy
            ].filter((u)=>!n.nodes.includes(u))
        ],
        edges: g,
        layout: n.layout,
        nodeById: c
    };
    return {
        layering: {
            layers: s,
            rankOf,
            dummy
        },
        graphWithDummies
    };
}
__1(Zs, "makeProperLayering");
function Wn(t) {
    const t_length = t.length;
    if (t_length === 0) {
        return Number.POSITIVE_INFINITY;
    }
    const n = [
        ...t
    ].sort((o, s)=>o - s);
    if (t_length % 2 === 1) {
        return n[(t_length - 1) / 2];
    }
    return 0.5 * (n[t_length / 2 - 1] + n[t_length / 2]);
}
__1(Wn, "median");
function Kn(t) {
    if (t.length === 0) {
        return Number.POSITIVE_INFINITY;
    }
    return t.reduce((acc, item)=>acc + item, 0) / t.length;
}
__1(Kn, "barycenter");
function Qs(t, e, n, o) {
    const s = new Map;
    for (const r of t){
        s.set(r, []);
    }
    for (const r of n){
        o === "down" ? e.has(r.src) && s.has(r.dst) && s.get(r.dst).push(e.get(r.src)) : e.has(r.dst) && s.has(r.src) && s.get(r.src).push(e.get(r.dst));
    }
    return s;
}
__1(Qs, "neighborPositionsFor");
function tr(t, e, n) {
    const o = n.get(t) ?? 0;
    const s = n.get(e) ?? 0;
    if (o !== s) {
        return o - s;
    }
    return t.localeCompare(e);
}
__1(tr, "currentOrderTieBreak");
function qn(t, e, n) {
    const o = new Set(t);
    const s = new Set(e);
    const r = Ne(t);
    const i = Ne(e);
    const c = [];
    for (const l of n){
        if (o.has(l.src) && s.has(l.dst)) {
            c.push({
                u: r.get(l.src),
                v: i.get(l.dst)
            });
        }
    }
    c.sort((l, g)=>{
        if (l.u === g.u) {
            return l.v - g.v;
        }
        return l.u - g.u;
    });
    const a = c.map((l)=>l.v);
    return Io(a);
}
__1(qn, "countCrossingsBetweenAdjacent");
function We(t, e, n) {
    return [
        ...t
    ].sort((o, s)=>{
        const r = Wn(e.get(o) ?? []);
        const i = Wn(e.get(s) ?? []);
        if (r === i) {
            return tr(o, s, n);
        }
        if (isFinite(r)) {
            if (isFinite(i)) {
                return r - i;
            }
            return -1;
        }
        return 1;
    });
}
__1(We, "sortByHeuristic");
function Jn(t, e, n, o, s, r) {
    const i = Ne(t);
    const c = Ne(e);
    const a = Qs(e, i, n, o);
    if (!s || !r || r.length === 0) {
        return We(e, a, c);
    }
    const l = new Map;
    for (const I of e){
        const u = s(I);
        const p = l.get(u) ?? [];
        p.push(I);
        l.set(u, p);
    }
    const g = [];
    for (const I of r){
        const u = l.get(I);
        if (!u || u.length === 0) {
            continue;
        }
        const p = We(u, a, c);
        g.push(...p);
    }
    const x = l.get(null);
    if (x && x.length > 0) {
        const I = We(x, a, c);
        for (const u of I){
            const p = Kn(a.get(u) ?? []);
            let f = g.length;
            if (isFinite(p)) {
                for (const [y, v] of g.entries()){
                    const M = Kn(a.get(v) ?? []);
                    if (p < M) {
                        f = y;
                        break;
                    }
                }
            }
            g.splice(f, 0, u);
        }
    }
    return g;
}
__1(Jn, "reorderLayer");
function Zn(t, e, n, o, s) {
    const r = [
        ...e
    ];
    const i = new Set(t);
    const c = new Set(e);
    const a = o ? new Set(o) : null;
    const l = n.filter((f)=>i.has(f.src) && c.has(f.dst));
    const g = a ? n.filter((f)=>c.has(f.src) && a.has(f.dst)) : undefined;
    const x = __1((f)=>{
        let y = qn(t, f, l);
        if (g && o) {
            y += qn(f, o, g);
        }
        return y;
    }, "crossingScore");
    const I = s ? new Map : null;
    if (s && I) {
        for (const f of e){
            I.set(f, s(f));
        }
    }
    let u = true;
    let p = x(r);
    while(u){
        u = false;
        for(let f = 0; f + 1 < r.length; f++){
            if (I) {
                const M = I.get(r[f]);
                const E = I.get(r[f + 1]);
                if (M !== E) {
                    continue;
                }
            }
            const y = p;
            [r[f], r[f + 1]] = [
                r[f + 1],
                r[f]
            ];
            const v = x(r);
            if (v < y) {
                p = v;
                u = true;
            } else {
                [r[f], r[f + 1]] = [
                    r[f + 1],
                    r[f]
                ];
            }
        }
    }
    return r;
}
__1(Zn, "transposeImprove");
function er(t, e, n) {
    const o = t.layers.map((c)=>[
            ...c
        ]);
    const e_edges = e.edges;
    const r = fe(e);
    const i = So(e, n?.laneOrder);
    for(let c = 0; c < 3; c++){
        for(let a = 1; a < o.length; a++){
            o[a] = Jn(o[a - 1], o[a], e_edges, "down", r, i);
            o[a] = Zn(o[a - 1], o[a], e_edges, o[a + 1], r);
        }
        for(let a = o.length - 2; a >= 0; a--){
            o[a] = Jn(o[a + 1], o[a], e_edges, "up", r, i);
            o[a] = Zn(o[a + 1], o[a], e_edges, o[a - 1], r);
        }
    }
    return {
        layers: o
    };
}
__1(er, "orderLayers");
function nr(t, e, n) {
    const o = n?.layerGap ?? ko.DEFAULT_LAYER_GAP;
    const s = n?.nodeGap ?? ko.DEFAULT_NODE_GAP;
    const r = n?.laneGap ?? s * 2;
    const i = n?.direction ?? "TB";
    const c = i === "LR" || i === "RL";
    const t_layers = t.layers;
    const l = Object.create(null);
    const g = Object.create(null);
    const x = __1((O)=>e.nodeById.get(O), "getNode");
    const I = __1((O)=>x(O)?.width ?? 0, "getWidth");
    const u = __1((O)=>x(O)?.height ?? 0, "getHeight");
    const p = fe(e);
    const f = So(e, n?.laneOrder);
    const y = t_layers.map((O)=>O.reduce((acc, item)=>Math.max(acc, u(item)), 0));
    const v = [];
    if (c) {
        for(let O = 0; O + 1 < t_layers.length; O++){
            const _ = t_layers[O].reduce((acc, item)=>Math.max(acc, I(item)), 0);
            const H = t_layers[O + 1].reduce((acc, item)=>Math.max(acc, I(item)), 0);
            const P = y[O];
            const G = y[O + 1];
            const j = P / 2 + G / 2;
            const J = (_ + H) / 2;
            const dt = Math.max(0, J - j - o);
            v.push(dt);
        }
    }
    const M = new Set;
    for (const O of t_layers){
        for (const _ of O){
            M.add(p(_));
        }
    }
    const E = M.has(null);
    const T = f.filter((O)=>M.has(O));
    const m = [
        ...E ? [
            null
        ] : [],
        ...T
    ];
    const S = Object.create(null);
    for (const O of T){
        S[O] = 0;
    }
    if (E) {
        S.null = 0;
    }
    for (const O of t_layers){
        const _ = Object.create(null);
        const H = [];
        for (const P of O){
            const G = p(P);
            if (G === null) {
                H.push(P);
            } else {
                (_[G] ||= []).push(P);
            }
        }
        for (const [P, G] of Object.entries(_)){
            const j = G.reduce((acc, item)=>acc + I(item), 0) + s * Math.max(0, G.length - 1);
            S[P] = Math.max(S[P] ?? 0, j);
        }
        if (E && H.length) {
            const P = H.reduce((acc, item)=>acc + I(item), 0) + s * Math.max(0, H.length - 1);
            S.null = Math.max(S.null ?? 0, P);
        }
    }
    const A = new Map;
    {
        const O = m.map((P)=>(P === null ? S.null : S[P]) ?? 0);
        let H = -(O.reduce((acc, item)=>acc + item, 0) + r * Math.max(0, m.length - 1)) / 2;
        for(let P = 0; P < m.length; P++){
            const G = m[P];
            const j = O[P] ?? 0;
            const J = H + j / 2;
            A.set(G, J);
            H += j;
            if (P < m.length - 1) {
                H += r;
            }
        }
    }
    let R = 0;
    for (const [O, _] of t_layers.entries()){
        const H = y[O] ?? 0;
        const P = new Map;
        for (const j of _){
            const J = p(j);
            const dt = P.get(J) ?? [];
            dt.push(j);
            P.set(J, dt);
        }
        for (const j of m){
            const J = P.get(j) ?? [];
            if (J.length === 0) {
                continue;
            }
            const dt = A.get(j);
            if (J.length === 1) {
                const mt = J[0];
                l[mt] = dt;
                g[mt] = R + H / 2;
            } else {
                const mt = J.map((Q)=>I(Q));
                const kt = mt.reduce((acc, item)=>acc + item, 0) + s * (J.length - 1);
                let Pt = dt - kt / 2;
                for (const [Q, W] of J.entries()){
                    const et = mt[Q];
                    l[W] = Pt + et / 2;
                    g[W] = R + H / 2;
                    Pt += et + s;
                }
            }
        }
        const G = v[O] ?? 0;
        R += H + o + G;
    }
    const k = new Map;
    for (const O of e.edges){
        const _ = O.ref.id;
        if (!k.has(_)) {
            k.set(_, []);
        }
        k.get(_).push(O);
    }
    for (const [, O] of k){
        if (O.length === 0) {
            continue;
        }
        const _ = O[0].ref;
        const { start, end } = _;
        if (start == null || end == null) {
            continue;
        }
        const G = Math.round(((l[start] ?? 0) + (l[end] ?? 0)) / 2);
        const j = new Set;
        for (const J of O){
            j.add(J.src);
            j.add(J.dst);
        }
        for (const J of j){
            if (J === start || J === end) {
                continue;
            }
            if (e.nodeById.get(J)?.isDummy) {
                l[J] = G;
            }
        }
    }
    return {
        x: l,
        y: g
    };
}
__1(nr, "assignCoordinates");
const restarts = 8;
function sr(t) {
    let e = 2166136261;
    for(let n = 0; n < t.length; n++){
        e ^= t.charCodeAt(n);
        e = Math.imul(e, 16777619);
    }
    return e >>> 0;
}
__1(sr, "hashString");
function rr(t) {
    let e = t >>> 0;
    return ()=>{
        e += 1831565813;
        let n = e;
        n = Math.imul(n ^ n >>> 15, n | 1);
        n ^= n + Math.imul(n ^ n >>> 7, n | 61);
        return ((n ^ n >>> 14) >>> 0) / 4294967296;
    };
}
__1(rr, "mulberry32");
function ir(t, e) {
    const n = [
        ...t
    ];
    const o = rr(e);
    for(let s = n.length - 1; s > 0; s--){
        const r = Math.floor(o() * (s + 1));
        [n[s], n[r]] = [
            n[r],
            n[s]
        ];
    }
    return n;
}
__1(ir, "deterministicShuffle");
function cr(t, e) {
    let n = 0;
    for (const [o, s] of t.entries()){
        n += Math.abs(o - (e.get(s) ?? o));
    }
    return n;
}
__1(cr, "sourceDistance");
function Qn(t, e) {
    const n = new Map;
    for (const [s, r] of t.entries()){
        n.set(r, s);
    }
    let o = 0;
    for (const { a: a_1, b, weight } of e){
        const c = n.get(a_1);
        const a = n.get(b);
        if (!(c == null || a == null)) {
            o += weight * Math.abs(c - a);
        }
    }
    return o;
}
__1(Qn, "laneArrangementCost");
function ar(t) {
    const e = fn(t);
    if (e.length < 2) {
        return [];
    }
    const n = new Map(e.map((r, i)=>[
            r,
            i
        ]));
    const o = fe(t);
    const s = new Map;
    for (const r of t.layout.edges ?? []){
        if (r.isLayoutOnly) {
            continue;
        }
        const i = typeof r.start === "string" ? r.start : undefined;
        const c = typeof r.end === "string" ? r.end : undefined;
        if (!i || !c || !t.nodeById.has(i) || !t.nodeById.has(c)) {
            continue;
        }
        const a = o(i);
        const l = o(c);
        if (!a || !l || a === l) {
            continue;
        }
        const g = n.get(a);
        const x = n.get(l);
        if (g == null || x == null) {
            continue;
        }
        const [I, u] = g <= x ? [
            a,
            l
        ] : [
            l,
            a
        ];
        const p = `${I}\0${u}`;
        const f = s.get(p);
        if (f) {
            f.weight++;
        } else {
            s.set(p, {
                a: I,
                b: u,
                weight: 1
            });
        }
    }
    return [
        ...s.values()
    ];
}
__1(ar, "buildWeightedLaneEdges");
function to(t, e, n) {
    const order = [
        ...t
    ];
    let cost = Qn(order, e);
    let r = true;
    let i = 0;
    const c = Math.max(1, order.length);
    while(r && i < c){
        r = false;
        i++;
        for(let a = 0; a + 1 < order.length; a++){
            [order[a], order[a + 1]] = [
                order[a + 1],
                order[a]
            ];
            const l = Qn(order, e);
            if (l < cost) {
                cost = l;
                r = true;
            } else {
                [order[a], order[a + 1]] = [
                    order[a + 1],
                    order[a]
                ];
            }
        }
    }
    return {
        order,
        cost,
        sourceDistance: cr(order, n)
    };
}
__1(to, "greedySwitch");
function lr(t, e) {
    if (t.cost !== e.cost) {
        return t.cost < e.cost;
    }
    return t.sourceDistance < e.sourceDistance;
}
__1(lr, "isBetterCandidate");
function fr(t, e, n) {
    const o = [
        ...e
    ].sort((s, r)=>{
        if (s.a === r.a) {
            return s.b.localeCompare(r.b);
        }
        return s.a.localeCompare(r.a);
    }).map(({ a, b, weight })=>`${a}:${b}:${weight}`).join("|");
    return sr(`${t.join("|")}#${o}#${n}`);
}
__1(fr, "seedForRestart");
function dr(t, e = {}) {
    const n = fn(t);
    if (n.length < 2) {
        return n;
    }
    const o = ar(t);
    if (o.length === 0) {
        return n;
    }
    const s = new Map(n.map((c, a)=>[
            c,
            a
        ]));
    let r = to(n, o, s);
    const i = Math.max(0, e.restarts ?? restarts);
    for(let c = 0; c < i; c++){
        const a = fr(n, o, c);
        const l = ir(n, a);
        const g = to(l, o, s);
        if (lr(g, r)) {
            r = g;
        }
    }
    return r.order;
}
__1(dr, "optimizeTopLaneOrder");
function ur(t, e) {
    const n = e?.ignoreCrossLaneEdges ?? true;
    const o = e?.optimizeRanksByCrossings ?? true;
    const s = ye(t);
    const laneOrder = e?.automaticLaneOrdering ? dr(s, {
        restarts
    }) : undefined;
    const i = Os(s);
    const i_acyclic = i.acyclic;
    const a = n ? Js(i_acyclic, {
        compactSingleInput: e?.compactSingleInput ?? sn.DEFAULT_COMPACT_SINGLE_INPUT,
        ignoreCrossLaneEdges: true,
        direction: e?.direction
    }) : Ks(i_acyclic, {
        compactSingleInput: e?.compactSingleInput ?? sn.DEFAULT_COMPACT_SINGLE_INPUT,
        ignoreCrossLaneEdges: false,
        optimizeRanksByCrossings: o
    });
    const { layering, graphWithDummies } = Zs(a, i_acyclic);
    const ordered = er(layering, graphWithDummies, {
        laneOrder
    });
    const coordinates = nr(ordered, graphWithDummies, {
        layerGap: e?.layerGap,
        nodeGap: e?.nodeGap,
        direction: e?.direction,
        laneOrder
    });
    return {
        acyclic: i_acyclic,
        reversed: i.reversed,
        layering,
        ordered,
        coordinates
    };
}
__1(ur, "sugiyamaLayout");
const Jr_EPSILON = Jr.EPSILON;
const Zr = 8;
const be = 15;
const Te = 15;
const je = 25;
const ne = 20;
const Cn = 10;
function eo(t, e, n) {
    const o = t.x ?? 0;
    const s = t.y ?? 0;
    const r = e.x - o;
    const i = e.y - s;
    const c = Math.abs(r);
    const a = Math.abs(i);
    if (c < Jr_EPSILON && a < Jr_EPSILON) {
        return n;
    }
    if (a > Jr_EPSILON && a * 3 >= c) {
        if (i > 0) {
            return "bottom";
        }
        return "top";
    }
    if (c > Jr_EPSILON) {
        if (r > 0) {
            return "right";
        }
        return "left";
    }
    return n;
}
__1(eo, "chooseOrthogonalSide");
function no(t, e) {
    if (Math.abs(t.to - e.from) < Jr_EPSILON || Math.abs(t.to - e.to) < Jr_EPSILON) {
        return t.to;
    }
    return t.from;
}
__1(no, "sharedLineEndpointCoord");
function Me(t, e) {
    if (t.orient === "vertical") {
        return {
            x: t.coord,
            y: e
        };
    }
    return {
        x: e,
        y: t.coord
    };
}
__1(Me, "pointOnLine");
function hr(t, e) {
    const n = t.nodes ?? [];
    const o = t.edges ?? [];
    const s = [];
    for (const __originalEdge of o){
        if (!__originalEdge.isLayoutOnly) {
            s.push({
                ...__originalEdge,
                __originalEdge
            });
        }
    }
    const r = new Map;
    const i = new Map;
    const c = [];
    const a = e === "LR";
    for (const h of n){
        r.set(h.id, h);
    }
    const l = n.filter((h)=>h.isGroup && !h.parentId);
    for (const h of l){
        const b = {
            id: h.id
        };
        const C = __1((L)=>{
            i.set(L.id, b);
            n.filter((w)=>w.parentId === L.id).forEach(C);
        }, "assignLane");
        C(h);
    }
    const g = n.filter((h)=>!h.isGroup && !h.isEdgeLabel).map((h)=>{
        const b = h.width ?? 10;
        const C = h.height ?? 10;
        const L = h.x ?? 0;
        const w = h.y ?? 0;
        const B = Zr;
        return {
            nodeId: h.id,
            minX: L - b / 2 - B,
            maxX: L + b / 2 + B,
            minY: w - C / 2 - B,
            maxY: w + C / 2 + B,
            visualXHalfExtent: a ? C / 2 + B : b / 2 + B
        };
    });
    const x = __1((h, b, spanMin, spanMax)=>{
        let w = c.find((B)=>B.orientation === h && Math.abs(B.coord - b) < 1);
        if (!w) {
            w = {
                id: `pipe-${h}-${b.toFixed(0)}`,
                orientation: h,
                coord: b,
                spanMin,
                spanMax,
                tracks: []
            };
            c.push(w);
        }
        w.spanMin = Math.min(w.spanMin, spanMin);
        w.spanMax = Math.max(w.spanMax, spanMax);
        return w;
    }, "getOrAddPipe");
    const I = __1((h, b)=>{
        const C = h.width ?? 10;
        const L = h.height ?? 10;
        const w = h.x ?? 0;
        const B = h.y ?? 0;
        switch(b){
            case "top":
                return {
                    x: w,
                    y: B - L / 2
                };
            case "bottom":
                return {
                    x: w,
                    y: B + L / 2
                };
            case "left":
                return {
                    x: w - C / 2,
                    y: B
                };
            case "right":
                return {
                    x: w + C / 2,
                    y: B
                };
        }
    }, "portForSide");
    const u = __1((h, b, C)=>I(h, eo(h, b, C ? "bottom" : "top")), "getOrthogonalPort");
    const p = [];
    const f = [];
    const y = new Set;
    const v = 1000;
    const M = __1((h, b, C)=>{
        if (p.length === 0) {
            return 0;
        }
        const L = Math.abs(b.y - C.y) < Jr_EPSILON;
        const w = Math.abs(b.x - C.x) < Jr_EPSILON;
        if (!L && !w) {
            return 0;
        }
        let B = 0;
        if (L) {
            const U = b.y;
            const q = Math.min(b.x, C.x) - Jr_EPSILON;
            const z = Math.max(b.x, C.x) + Jr_EPSILON;
            if (z <= q) {
                return 0;
            }
            for (const Y of p){
                Y.edgeIndex === h || Y.orientation !== "vertical" || Y.pipe.coord < q || Y.pipe.coord > z || Y.from - Jr_EPSILON <= U && Y.to + Jr_EPSILON >= U && (B += v);
            }
        } else if (w) {
            const U = b.x;
            const q = Math.min(b.y, C.y) - Jr_EPSILON;
            const z = Math.max(b.y, C.y) + Jr_EPSILON;
            if (z <= q) {
                return 0;
            }
            for (const Y of p){
                Y.edgeIndex === h || Y.orientation !== "horizontal" || Y.pipe.coord < q || Y.pipe.coord > z || Y.from - Jr_EPSILON <= U && Y.to + Jr_EPSILON >= U && (B += v);
            }
        }
        return B;
    }, "crossingPenalty");
    const E = s.map((h, idx)=>{
        if (!h.start || !h.end) {
            return {
                idx,
                crossLane: 0,
                dx: 0,
                dy: 0
            };
        }
        const C = r.get(h.start);
        const L = r.get(h.end);
        const w = i.get(h.start);
        const B = i.get(h.end);
        const crossLane = w && B && w.id !== B.id ? 1 : 0;
        const dx = C && L ? Math.abs((L.x ?? 0) - (C.x ?? 0)) : 0;
        const dy = C && L ? Math.abs((L.y ?? 0) - (C.y ?? 0)) : 0;
        return {
            idx,
            crossLane,
            dx,
            dy
        };
    }).sort((h, b)=>{
        if (h.crossLane !== b.crossLane) {
            return b.crossLane - h.crossLane;
        }
        const C = h.dx + h.dy;
        const L = b.dx + b.dy;
        if (Math.abs(C - L) > 1) {
            return C - L;
        }
        return h.idx - b.idx;
    }).map((h)=>h.idx);
    const T = __1((h, b, C, L)=>{
        const w = Math.min(h.x, b.x);
        const B = Math.max(h.x, b.x);
        const U = Math.min(h.y, b.y);
        const q = Math.max(h.y, b.y);
        return !!g.find((Y)=>{
            if (C && Y.nodeId === C || L && Y.nodeId === L) {
                return false;
            }
            if (Math.abs(h.x - b.x) > Jr_EPSILON) {
                return Y.minY < h.y && Y.maxY > h.y && Y.maxX > w && Y.minX < B;
            }
            return Y.minX < h.x && Y.maxX > h.x && Y.maxY > U && Y.minY < q;
        });
    }, "isSegmentBlocked");
    const m = new Map;
    const S = new Map;
    for (const h of s){
        if (!(!h.start || !h.end || h.start === h.end)) {
            S.set(h.start, (S.get(h.start) ?? 0) + 1);
            S.set(h.end, (S.get(h.end) ?? 0) + 1);
        }
    }
    const A = __1((h, b)=>eo(h, b, "bottom"), "determineSide");
    const R = new Map;
    for (const [h, b] of s.entries()){
        if (!b.start || !b.end || b.start === b.end || b.points && b.points.length > 0) {
            continue;
        }
        const C = r.get(b.start);
        const L = r.get(b.end);
        if (!C || !L) {
            continue;
        }
        const w = (L.x ?? 0) - (C.x ?? 0);
        const B = (L.y ?? 0) - (C.y ?? 0);
        R.set(h, {
            edgeIdx: h,
            srcId: b.start,
            dstId: b.end,
            srcSide: A(C, {
                x: L.x ?? 0,
                y: L.y ?? 0
            }),
            dstSide: A(L, {
                x: C.x ?? 0,
                y: C.y ?? 0
            }),
            absDx: Math.abs(w),
            absDy: Math.abs(B),
            dxSign: Math.sign(w),
            dySign: Math.sign(B)
        });
    }
    const k = __1((h)=>{
        if (h.srcSide === "top" || h.srcSide === "bottom") {
            if (h.absDx === 0) {
                return Infinity;
            }
            return h.absDy / h.absDx;
        }
        if (h.absDy === 0) {
            return Infinity;
        }
        return h.absDx / h.absDy;
    }, "preferenceStrength");
    const O = __1((h)=>{
        if (h.srcSide === "top" || h.srcSide === "bottom") {
            if (h.dxSign >= 0) {
                return "right";
            }
            return "left";
        }
        if (h.dySign >= 0) {
            return "bottom";
        }
        return "top";
    }, "secondarySide");
    const _ = new Map;
    for (const h of R.values()){
        const b = `${h.srcId}:${h.srcSide}`;
        if (!_.has(b)) {
            _.set(b, []);
        }
        _.get(b).push(h);
    }
    const H = new Map;
    const P = __1((h, b)=>`${h}:${b}`, "loadKey");
    for (const h of R.values()){
        H.set(P(h.srcId, h.srcSide), (H.get(P(h.srcId, h.srcSide)) ?? 0) + 1);
        H.set(P(h.dstId, h.dstSide), (H.get(P(h.dstId, h.dstSide)) ?? 0) + 1);
    }
    for (const h of _.values()){
        if (!(h.length < 2)) {
            h.sort((b, C)=>{
                const L = k(b);
                const w = k(C);
                if (Math.abs(L - w) > 1e-9) {
                    return w - L;
                }
                return b.edgeIdx - C.edgeIdx;
            });
            for(let b = 1; b < h.length; b++){
                const C = h[b];
                const L = O(C);
                const w = H.get(P(C.srcId, C.srcSide)) ?? 0;
                const B = H.get(P(C.srcId, L)) ?? 0;
                if (!(B >= w)) {
                    H.set(P(C.srcId, C.srcSide), w - 1);
                    H.set(P(C.srcId, L), B + 1);
                    C.srcSide = L;
                }
            }
        }
    }
    const G = __1((h)=>{
        const b = h?.shape;
        return b === "question" || b === "diamond";
    }, "isDiamondNode");
    const j = new Map;
    for (const h of R.values()){
        if (!j.has(h.dstId)) {
            j.set(h.dstId, new Set);
        }
        j.get(h.dstId).add(h.dstSide);
    }
    for (const h of R.values()){
        if (!G(r.get(h.srcId))) {
            continue;
        }
        const b = j.get(h.srcId);
        if (!b?.has(h.srcSide)) {
            continue;
        }
        const C = O(h);
        if (b.has(C) || (H.get(P(h.srcId, C)) ?? 0) > 0) {
            continue;
        }
        const L = H.get(P(h.srcId, h.srcSide)) ?? 0;
        H.set(P(h.srcId, h.srcSide), Math.max(0, L - 1));
        H.set(P(h.srcId, C), 1);
        h.srcSide = C;
    }
    for (const h of R.values()){
        const { edgeIdx, srcId, dstId, srcSide, dstSide } = h;
        const U = r.get(srcId);
        const q = r.get(dstId);
        const z = `${srcId}:${srcSide}:src`;
        const Y = srcSide === "top" || srcSide === "bottom" ? q.x ?? 0 : q.y ?? 0;
        if (!m.has(z)) {
            m.set(z, []);
        }
        m.get(z).push({
            edgeIdx,
            oppositeCoord: Y
        });
        const ot = `${dstId}:${dstSide}:dst`;
        const rt = dstSide === "top" || dstSide === "bottom" ? U.x ?? 0 : U.y ?? 0;
        if (!m.has(ot)) {
            m.set(ot, []);
        }
        m.get(ot).push({
            edgeIdx,
            oppositeCoord: rt
        });
    }
    const J = new Map;
    const dt = 8;
    for (const [h, b] of m){
        if (b.length < 2) {
            continue;
        }
        b.sort((Lt, Dt)=>Lt.oppositeCoord - Dt.oppositeCoord);
        const C = h.split(":");
        const L = C.slice(0, -2).join(":");
        const w = C[C.length - 2];
        const B = C[C.length - 1];
        const U = r.get(L);
        if (!U) {
            continue;
        }
        const z = w === "left" || w === "right" ? U.height ?? 10 : U.width ?? 10;
        const Y = U.shape;
        const rt = Y === "question" || Y === "diamond" ? z * 0.3 : z;
        const tt = Math.min(20, Math.max(dt, rt / (b.length + 1)));
        const Rt = -(tt * (b.length - 1)) / 2;
        for (const [Lt, Dt] of b.entries()){
            const Jt = Rt + Lt * tt;
            const gn = `${Dt.edgeIdx}:${B}`;
            J.set(gn, Jt);
        }
    }
    const mt = __1((h)=>!!s[h]?.labelNodeId, "edgeHasLabelNode");
    const kt = __1((h, b)=>{
        if (h) {
            return (m.get(`${h}:${b}:src`) ?? []).some(({ edgeIdx })=>mt(edgeIdx)) || (m.get(`${h}:${b}:dst`) ?? []).some(({ edgeIdx })=>mt(edgeIdx));
        }
        return false;
    }, "faceHasLabelNode");
    const Pt = __1((h, b, C)=>{
        if (b === "top" || b === "bottom") {
            return {
                x: h.x + C,
                y: h.y
            };
        }
        return {
            x: h.x,
            y: h.y + C
        };
    }, "applyPortOffset");
    const Q = __1((h, b, C)=>{
        const L = R.get(h);
        const w = {
            x: C.x ?? 0,
            y: C.y ?? 0
        };
        const B = {
            x: b.x ?? 0,
            y: b.y ?? 0
        };
        const srcSide = L?.srcSide ?? A(b, w);
        const dstSide = L?.dstSide ?? A(C, B);
        let pSrcPort = L ? I(b, L.srcSide) : u(b, w, true);
        let pDstPort = L ? I(C, L.dstSide) : u(C, B, false);
        const ot = J.get(`${h}:src`);
        const rt = J.get(`${h}:dst`);
        if (ot !== undefined) {
            pSrcPort = Pt(pSrcPort, srcSide, ot);
        }
        if (rt !== undefined) {
            pDstPort = Pt(pDstPort, dstSide, rt);
        }
        return {
            pSrcPort,
            pDstPort,
            srcSide,
            dstSide
        };
    }, "portsForEdge");
    for (const edgeIndex of E){
        const b = s[edgeIndex];
        f[edgeIndex] = [];
        if (!b.start || !b.end || b.points && b.points.length > 0 || b.start === b.end) {
            continue;
        }
        const C = r.get(b.start);
        const L = r.get(b.end);
        if (!C || !L) {
            continue;
        }
        const { pSrcPort, pDstPort, srcSide, dstSide } = Q(edgeIndex, C, L);
        const z = {
            ...pSrcPort
        };
        const Y = {
            ...pDstPort
        };
        const ot = srcSide === "top" || srcSide === "bottom";
        const rt = dstSide === "top" || dstSide === "bottom";
        if (ot) {
            const X = pSrcPort.y > (C.y ?? 0);
            z.y = X ? pSrcPort.y + ne : pSrcPort.y - ne;
        } else {
            const X = pSrcPort.x > (C.x ?? 0);
            z.x = X ? pSrcPort.x + ne : pSrcPort.x - ne;
        }
        if (rt) {
            const X = pDstPort.y > (L.y ?? 0);
            Y.y = X ? pDstPort.y + ne : pDstPort.y - ne;
        } else {
            const X = pDstPort.x > (L.x ?? 0);
            Y.x = X ? pDstPort.x + ne : pDstPort.x - ne;
        }
        const st = __1((X, $)=>{
            for (const obstacle of g){
                if (!$.includes(obstacle.nodeId) && X.x > obstacle.minX && X.x < obstacle.maxX && X.y > obstacle.minY && X.y < obstacle.maxY) {
                    return {
                        inside: true,
                        obstacle
                    };
                }
            }
            return {
                inside: false
            };
        }, "isPointInObstacle");
        const tt = __1((X, $, K, lt, Ct)=>{
            if (Ct) {
                const Nt = X.y > ($.y ?? 0);
                return {
                    x: (K.x ?? 0) >= X.x ? lt.maxX + be : lt.minX - be,
                    y: Nt ? lt.maxY + Te : lt.minY - Te,
                    leavesPositiveSide: Nt
                };
            }
            const bt = X.x > ($.x ?? 0);
            const Et = (K.y ?? 0) >= X.y;
            return {
                x: bt ? lt.maxX + be : lt.minX - be,
                y: Et ? lt.maxY + Te : lt.minY - Te,
                leavesPositiveSide: bt
            };
        }, "obstacleDetour");
        let yt = [];
        const Rt = [
            b.start,
            b.end
        ];
        const Lt = st(z, Rt);
        if (Lt.inside && Lt.obstacle) {
            const X = Lt.obstacle;
            if (ot) {
                const $ = tt(pSrcPort, C, L, X, true);
                z.x = $.x;
                z.y = $.y;
                const K = $.leavesPositiveSide ? Math.min(X.minY - 2, pSrcPort.y + ne) : Math.max(X.maxY + 2, pSrcPort.y - ne);
                yt = [
                    {
                        x: pSrcPort.x,
                        y: K
                    },
                    {
                        x: $.x,
                        y: K
                    },
                    {
                        x: $.x,
                        y: $.y
                    }
                ];
            } else {
                const $ = tt(pSrcPort, C, L, X, false);
                const K = $.leavesPositiveSide ? Math.min(X.minX - 2, pSrcPort.x + ne) : Math.max(X.maxX + 2, pSrcPort.x - ne);
                z.x = $.x;
                z.y = $.y;
                yt = [
                    {
                        x: K,
                        y: pSrcPort.y
                    },
                    {
                        x: K,
                        y: $.y
                    },
                    {
                        x: $.x,
                        y: $.y
                    }
                ];
            }
        }
        let Dt = [];
        const Jt = st(Y, Rt);
        if (Jt.inside && Jt.obstacle) {
            const X = Jt.obstacle;
            if (rt) {
                const $ = tt(pDstPort, L, C, X, true);
                Y.x = $.x;
                Y.y = $.y;
                Dt = [
                    {
                        x: $.x,
                        y: $.y
                    },
                    {
                        x: pDstPort.x,
                        y: $.y
                    }
                ];
            } else {
                const $ = tt(pDstPort, L, C, X, false);
                Y.x = $.x;
                Y.y = $.y;
                Dt = [
                    {
                        x: $.x,
                        y: $.y
                    },
                    {
                        x: $.x,
                        y: pDstPort.y
                    }
                ];
            }
        }
        if (yt.length === 0 && Dt.length === 0) {
            const X = be;
            const $ = Math.abs(z.x - Y.x) < X;
            const K = Math.abs(z.y - Y.y) < X;
            const lt = J.get(`${edgeIndex}:src`) !== undefined || J.get(`${edgeIndex}:dst`) !== undefined;
            const Ct = (m.get(`${b.start ?? ""}:${srcSide}:src`)?.length ?? 0) + (m.get(`${b.start ?? ""}:${srcSide}:dst`)?.length ?? 0);
            const bt = (m.get(`${b.end ?? ""}:${dstSide}:src`)?.length ?? 0) + (m.get(`${b.end ?? ""}:${dstSide}:dst`)?.length ?? 0);
            const Et = Ct > 1 || bt > 1;
            const Nt = S.get(b.start ?? "") ?? 0;
            const ut = S.get(b.end ?? "") ?? 0;
            const Yt = Ct > 1 && kt(b.start, srcSide) || bt > 1 && kt(b.end, dstSide);
            const ee = Ct <= 1 || Nt <= 2;
            const Bt = bt <= 1 || ut <= 2;
            if (($ || K) && !lt && (!Et || Et && !Yt && ee && Bt) && !T(pSrcPort, pDstPort, b.start, b.end)) {
                b.points = [
                    {
                        ...pSrcPort
                    },
                    {
                        ...z
                    },
                    {
                        ...Y
                    },
                    {
                        ...pDstPort
                    }
                ];
                y.add(edgeIndex);
                const Mt = K ? "horizontal" : "vertical";
                const $t = K ? pSrcPort.y : pSrcPort.x;
                const It = K ? Math.min(pSrcPort.x, pDstPort.x) : Math.min(pSrcPort.y, pDstPort.y);
                const St = K ? Math.max(pSrcPort.x, pDstPort.x) : Math.max(pSrcPort.y, pDstPort.y);
                const pipe = {
                    id: `fast-path-${Mt}-${$t.toFixed(0)}-${edgeIndex}`,
                    orientation: Mt,
                    coord: $t,
                    spanMin: It,
                    spanMax: St,
                    tracks: []
                };
                p.push({
                    edgeIndex,
                    segmentIndex: 0,
                    orientation: Mt,
                    pipe,
                    trackIndex: 0,
                    from: It,
                    to: St
                });
                continue;
            }
        }
        const gn = x("vertical", z.x, z.y, z.y);
        z.x = gn.coord;
        const mr = x("vertical", Y.x, Y.y, Y.y);
        Y.x = mr.coord;
        let ue = Math.min(z.x, Y.x) - 50;
        let he = Math.max(z.x, Y.x) + 50;
        let ve = Math.min(z.y, Y.y) - 50;
        let Le = Math.max(z.y, Y.y) + 50;
        for (const X of g){
            const $ = Math.min(z.x, Y.x);
            const K = Math.max(z.x, Y.x);
            const lt = Math.min(z.y, Y.y);
            const Ct = Math.max(z.y, Y.y);
            if (X.minX < K && X.maxX > $ && X.minY < Ct && X.maxY > lt) {
                ue = Math.min(ue, X.minX - je);
                he = Math.max(he, X.maxX + je);
                ve = Math.min(ve, X.minY - je);
                Le = Math.max(Le, X.maxY + je);
            }
        }
        for (const X of g){
            if (X.maxX < ue || X.minX > he || X.maxY < ve || X.minY > Le) {
                continue;
            }
            const $ = be;
            x("horizontal", X.minY - $, ue, he);
            x("horizontal", X.maxY + $, ue, he);
            const K = Te;
            x("vertical", X.minX - K, ve, Le);
            x("vertical", X.maxX + K, ve, Le);
        }
        x("horizontal", z.y, ue, he);
        x("horizontal", Y.y, ue, he);
        const yr = c.filter((X)=>X.orientation === "horizontal" && X.coord >= ve && X.coord <= Le);
        const xr = c.filter((X)=>X.orientation === "vertical" && X.coord >= ue && X.coord <= he);
        const ke = __1((X, $)=>`${X.toFixed(1)},${$.toFixed(1)}`, "getKey");
        const _e = ke(z.x, z.y);
        const vo = ke(Y.x, Y.y);
        const Fe = new Map;
        const pn = new Map;
        const mn = new Map;
        const De = new Set;
        const xe = [];
        Fe.set(_e, 0);
        mn.set(_e, "n");
        xe.push({
            key: _e,
            f: Math.hypot(Y.x - z.x, Y.y - z.y),
            pt: z
        });
        De.add(_e);
        let Ht = [];
        const ge = __1((X, $)=>T(X, $, b.start, b.end), "checkSegmentBlocked");
        const yn = {
            x: Y.x,
            y: z.y
        };
        const br = ge(z, yn);
        const Mr = ge(yn, Y);
        const Ir = br || Mr;
        const xn = {
            x: z.x,
            y: Y.y
        };
        const Sr = ge(z, xn);
        const Cr = ge(xn, Y);
        Ir ? Sr || Cr || (Math.abs(z.x - Y.x) < Jr_EPSILON ? Ht = [
            z,
            Y
        ] : Ht = [
            z,
            xn,
            Y
        ]) : Math.abs(z.y - Y.y) < Jr_EPSILON || Math.abs(z.x - Y.x) < Jr_EPSILON ? Ht = [
            z,
            Y
        ] : Ht = [
            z,
            yn,
            Y
        ];
        if (Ht.length === 0) {
            while(xe.length > 0){
                xe.sort((ut, Yt)=>ut.f - Yt.f);
                const X = xe.shift();
                De.delete(X.key);
                if (X.key === vo) {
                    let ut = vo;
                    let Yt = Y;
                    for(Ht = [
                        Yt
                    ]; pn.has(ut);){
                        const ee = pn.get(ut);
                        Ht.unshift(ee);
                        Yt = ee;
                        ut = ke(ee.x, ee.y);
                    }
                    break;
                }
                const $ = X.pt.x;
                const K = X.pt.y;
                const lt = xr.sort((ut, Yt)=>ut.coord - Yt.coord);
                const Ct = lt.findIndex((ut)=>Math.abs(ut.coord - $) < 1);
                const bt = yr.sort((ut, Yt)=>ut.coord - Yt.coord);
                const Et = bt.findIndex((ut)=>Math.abs(ut.coord - K) < 1);
                const Nt = [];
                if (Ct > 0) {
                    Nt.push({
                        x: lt[Ct - 1].coord,
                        y: K
                    });
                }
                if (Ct >= 0 && Ct < lt.length - 1) {
                    Nt.push({
                        x: lt[Ct + 1].coord,
                        y: K
                    });
                }
                if (Et > 0) {
                    Nt.push({
                        x: $,
                        y: bt[Et - 1].coord
                    });
                }
                if (Et >= 0 && Et < bt.length - 1) {
                    Nt.push({
                        x: $,
                        y: bt[Et + 1].coord
                    });
                }
                for (const ut of Nt){
                    const Yt = Math.min($, ut.x);
                    const ee = Math.max($, ut.x);
                    const Bt = Math.min(K, ut.y);
                    const Gt = Math.max(K, ut.y);
                    if (g.some((Zt)=>{
                        if (Zt.nodeId === b.start || Zt.nodeId === b.end) {
                            return false;
                        }
                        if (Yt !== ee) {
                            return Zt.minY < K && Zt.maxY > K && Zt.maxX > Yt && Zt.minX < ee;
                        }
                        return Zt.minX < $ && Zt.maxX > $ && Zt.maxY > Bt && Zt.minY < Gt;
                    })) {
                        continue;
                    }
                    const Mt = ke(ut.x, ut.y);
                    const $t = Math.abs(ut.x - $) + Math.abs(ut.y - K);
                    const It = M(edgeIndex, X.pt, ut);
                    let St = 0;
                    const Wt = Y.x - z.x;
                    const Ee = Y.y - z.y;
                    const He = ut.x - $;
                    const bn = ut.y - K;
                    if (Ee > 10 && bn < -5 || Ee < -10 && bn > 5) {
                        St = Math.abs(bn) * 100;
                    }
                    if (Wt > 10 && He < -5 || Wt < -10 && He > 5) {
                        St += Math.abs(He) * 50;
                    }
                    let Lo = 0;
                    const Eo = mn.get(X.key) ?? "n";
                    const To = Math.abs(He) > Jr_EPSILON ? "h" : "v";
                    if (Eo !== "n" && Eo !== To) {
                        Lo = 50;
                    }
                    const vr = $t + It + St + Lo;
                    const Xe = (Fe.get(X.key) ?? Infinity) + vr;
                    const wo = Math.abs(Y.x - ut.x) + Math.abs(Y.y - ut.y);
                    if (Xe < (Fe.get(Mt) ?? Infinity)) {
                        pn.set(Mt, X.pt);
                        Fe.set(Mt, Xe);
                        mn.set(Mt, To);
                        if (!De.has(Mt)) {
                            xe.push({
                                key: Mt,
                                f: Xe + wo,
                                pt: ut
                            });
                            De.add(Mt);
                        } else {
                            const Zt = xe.findIndex((Lr)=>Lr.key === Mt);
                            if (Zt !== -1) {
                                xe[Zt].f = Xe + wo;
                            }
                        }
                    }
                }
            }
        }
        if (Ht.length === 0) {
            Ht = [
                z,
                {
                    x: z.x,
                    y: Y.y
                },
                Y
            ];
        }
        if (Ht.length > 4) {
            const X = Ht[0];
            const $ = Ht[Ht.length - 1];
            let K = Math.min(X.x, $.x);
            let lt = Math.max(X.x, $.x);
            let Ct = Math.min(X.y, $.y);
            let bt = Math.max(X.y, $.y);
            for (const Bt of Ht){
                K = Math.min(K, Bt.x);
                lt = Math.max(lt, Bt.x);
                Ct = Math.min(Ct, Bt.y);
                bt = Math.max(bt, Bt.y);
            }
            const Et = lt > Math.max(X.x, $.x);
            const Nt = K < Math.min(X.x, $.x);
            if (a) {
                const Bt = Te;
                if (Et) {
                    const Gt = Math.max(X.x, $.x);
                    const Ot = Math.min(X.y, $.y);
                    const Mt = Math.max(X.y, $.y);
                    const $t = g.filter((It)=>It.minX < Gt && It.maxX > Gt && It.minY < Mt && It.maxY > Ot);
                    if ($t.length > 0) {
                        let It = Math.max(X.x, $.x);
                        for (const St of $t){
                            const Wt = (St.minX + St.maxX) / 2;
                            if (St.visualXHalfExtent === undefined || isNaN(St.visualXHalfExtent)) {
                                continue;
                            }
                            const Ee = Wt + St.visualXHalfExtent + Bt;
                            It = Math.max(It, Ee);
                        }
                        if (!isNaN(It)) {
                            lt = It;
                        }
                    }
                }
                if (Nt) {
                    const Gt = g.filter((Ot)=>Ot.minX < Math.min(X.x, $.x) + Bt && Ot.minY < Math.max(X.y, $.y) && Ot.maxY > Math.min(X.y, $.y));
                    if (Gt.length > 0) {
                        let Ot = Math.min(X.x, $.x);
                        for (const Mt of Gt){
                            const It = (Mt.minX + Mt.maxX) / 2 - Mt.visualXHalfExtent - Bt;
                            Ot = Math.min(Ot, It);
                        }
                        K = Ot;
                    }
                }
            }
            const ut = __1((Bt)=>{
                const Gt = $.y > X.y;
                const Ot = g.filter((It)=>{
                    const St = Math.min(X.x, $.x) < It.maxX && Math.max(X.x, $.x) > It.minX;
                    const Wt = Math.min(X.y, $.y) < It.maxY && Math.max(X.y, $.y) > It.minY;
                    return St && Wt;
                });
                let Mt = Ot;
                if (a && Ot.length > 0) {
                    const It = Ot.filter((St)=>St.minX < Bt && St.maxX > Bt);
                    if (It.length > 0) {
                        Mt = It;
                    }
                }
                if (Mt.length === 0) {
                    return $.y;
                }
                const $t = be;
                if (Gt) {
                    const St = Math.max(...Mt.map((Wt)=>Wt.maxY)) + $t;
                    if (St < $.y - Jr_EPSILON) {
                        return St;
                    }
                } else {
                    const St = Math.min(...Mt.map((Wt)=>Wt.minY)) - $t;
                    if (St > $.y + Jr_EPSILON) {
                        return St;
                    }
                }
                return $.y;
            }, "findBestReturnY");
            const Yt = __1((Bt)=>{
                const Gt = ut(Bt);
                const Ot = {
                    x: Bt,
                    y: X.y
                };
                const Mt = {
                    x: Bt,
                    y: Gt
                };
                const $t = {
                    x: $.x,
                    y: Gt
                };
                const It = ge(X, Ot);
                const St = ge(Ot, Mt);
                const Wt = ge(Mt, $t);
                const Ee = Gt !== $.y ? ge($t, $) : false;
                if (!It && !St && !Wt && !Ee) {
                    if (Math.abs(Gt - $.y) < Jr_EPSILON) {
                        return [
                            X,
                            Ot,
                            Mt,
                            $
                        ];
                    }
                    return [
                        X,
                        Ot,
                        Mt,
                        $t,
                        $
                    ];
                }
                return null;
            }, "trySimplifyWithDetourX");
            const ee = Et && !Nt ? Yt(lt) : Nt && !Et ? Yt(K) : null;
            if (ee) {
                Ht = ee;
            }
        }
        const Xt = [
            pSrcPort,
            ...yt,
            ...Ht,
            ...Dt.reverse(),
            pDstPort
        ];
        if (Xt.length >= 3) {
            const X = Xt[Xt.length - 1];
            const $ = Xt[Xt.length - 2];
            const K = Xt[Xt.length - 3];
            const lt = Math.abs(K.y - $.y) < Jr_EPSILON && Math.abs($.y - X.y) < Jr_EPSILON;
            const Ct = Math.abs(K.x - $.x) < Jr_EPSILON && Math.abs($.x - X.x) < Jr_EPSILON;
            if (lt) {
                const bt = Math.sign($.x - K.x);
                const Et = Math.sign(X.x - K.x);
                if (bt !== 0 && bt === Et && Math.abs($.x - K.x) > Math.abs(X.x - K.x)) {
                    Xt.splice(-2, 1);
                }
            } else if (Ct) {
                const bt = Math.sign($.y - K.y);
                const Et = Math.sign(X.y - K.y);
                if (bt !== 0 && bt === Et && Math.abs($.y - K.y) > Math.abs(X.y - K.y)) {
                    Xt.splice(-2, 1);
                }
            }
        }
        const ie = [
            Xt[0]
        ];
        for(let X = 1; X < Xt.length - 1; X++){
            if (X === 1) {
                ie.push(Xt[X]);
                continue;
            }
            const $ = ie[ie.length - 1];
            const K = Xt[X];
            const lt = Xt[X + 1];
            if (Math.abs($.y - K.y) < Jr_EPSILON && Math.abs(K.y - lt.y) < Jr_EPSILON) {
                const Ct = K.x > $.x;
                const bt = lt.x > K.x;
                if (Ct !== bt) {
                    ie.push(K);
                    continue;
                }
                continue;
            }
            if (Math.abs($.x - K.x) < Jr_EPSILON && Math.abs(K.x - lt.x) < Jr_EPSILON) {
                const Ct = K.y > $.y;
                const bt = lt.y > K.y;
                if (Ct !== bt) {
                    ie.push(K);
                    continue;
                }
                continue;
            }
            ie.push(K);
        }
        ie.push(Xt[Xt.length - 1]);
        for(let segmentIndex = 0; segmentIndex < ie.length - 1; segmentIndex++){
            const $ = ie[segmentIndex];
            const K = ie[segmentIndex + 1];
            const lt = Math.abs($.x - K.x) < Jr_EPSILON ? "vertical" : "horizontal";
            const Ct = lt === "vertical" ? $.x : $.y;
            const from = lt === "vertical" ? Math.min($.y, K.y) : Math.min($.x, K.x);
            const to_1 = lt === "vertical" ? Math.max($.y, K.y) : Math.max($.x, K.x);
            const pipe = x(lt, Ct, from, to_1);
            const ut = {
                edgeIndex,
                segmentIndex,
                orientation: lt,
                pipe,
                trackIndex: 0,
                from,
                to: to_1
            };
            p.push(ut);
            f[edgeIndex].push(p.length - 1);
            if (!pipe.tracks[0]) {
                pipe.tracks[0] = {
                    index: 0,
                    coord: pipe.coord,
                    segments: []
                };
            }
            pipe.tracks[0].segments.push({
                edgeIndex,
                segmentIndex,
                from,
                to: to_1
            });
        }
    }
    const W = __1((h, b)=>h.from < b.to && b.from < h.to, "segmentsOverlap");
    const et = __1((h, b, C, L)=>{
        const w = !L.segments.some((U)=>(U.edgeIndex !== b.edgeIndex || U.segmentIndex !== b.segmentIndex) && W(U, h));
        const B = !C.segments.some((U)=>(U.edgeIndex !== h.edgeIndex || U.segmentIndex !== h.segmentIndex) && W(U, b));
        if (w && B) {
            h.trackIndex = L.index;
            b.trackIndex = C.index;
            C.segments = [
                ...C.segments.filter((U)=>U.edgeIndex !== h.edgeIndex || U.segmentIndex !== h.segmentIndex),
                {
                    edgeIndex: b.edgeIndex,
                    segmentIndex: b.segmentIndex,
                    from: b.from,
                    to: b.to
                }
            ];
            L.segments = [
                ...L.segments.filter((U)=>U.edgeIndex !== b.edgeIndex || U.segmentIndex !== b.segmentIndex),
                {
                    edgeIndex: h.edgeIndex,
                    segmentIndex: h.segmentIndex,
                    from: h.from,
                    to: h.to
                }
            ];
            return true;
        }
        return false;
    }, "trySwapSegmentsAcrossTracks");
    const at = __1((h)=>{
        const length = h.tracks.length;
        h.tracks[length] = {
            index: length,
            coord: h.coord,
            segments: []
        };
        return length;
    }, "createNewTrack");
    const gt = __1((h, b)=>{
        const C = h.pipe.tracks[h.trackIndex];
        C.segments = C.segments.filter((w)=>w.edgeIndex !== h.edgeIndex || w.segmentIndex !== h.segmentIndex);
        h.trackIndex = b;
        h.pipe.tracks[b].segments.push({
            edgeIndex: h.edgeIndex,
            segmentIndex: h.segmentIndex,
            from: h.from,
            to: h.to
        });
    }, "moveSegmentToTrack");
    const xt = __1((h, b)=>{
        const C = f[h.edgeIndex];
        for (const L of C){
            const w = p[L];
            if (w.pipe === h.pipe) {
                gt(w, b);
            }
        }
    }, "moveSegmentChainToTrack");
    const vt = __1((h)=>{
        const b = f[h.edgeIndex];
        const C = b.indexOf(p.indexOf(h));
        const L = [];
        if (C > 0) {
            L.push(p[b[C - 1]]);
        }
        if (C < b.length - 1) {
            L.push(p[b[C + 1]]);
        }
        return L;
    }, "getAdjacentSegmentsAlongEdge");
    const Vt = __1((h, b)=>{
        if (h.orientation === b.orientation) {
            return false;
        }
        const C = h.orientation === "horizontal" ? h : b;
        const L = h.orientation === "horizontal" ? b : h;
        return L.pipe.coord > C.from && L.pipe.coord < C.to && C.pipe.coord > L.from && C.pipe.coord < L.to;
    }, "haveAnyCrossing");
    const jt = __1((h, b)=>{
        for (const C of h.tracks){
            if (!C.segments.some((w)=>(w.edgeIndex !== b.edgeIndex || w.segmentIndex !== b.segmentIndex) && W(w, b))) {
                return C.index;
            }
        }
        return -1;
    }, "findAvailableTrack");
    const Ut = __1((h, b)=>{
        if (h.trackIndex === b.trackIndex) {
            return W(h, b);
        }
        const C = vt(h);
        const L = vt(b);
        return C.some((w)=>L.some((B)=>Vt(w, B)));
    }, "segmentsConflict");
    const te = __1((h, b, C)=>{
        if (et(h, b, h.pipe.tracks[h.trackIndex], b.pipe.tracks[b.trackIndex])) {
            return;
        }
        const L = jt(h.pipe, b);
        C(b, L !== -1 ? L : at(h.pipe));
    }, "resolveTrackConflict");
    const Se = __1((h)=>{
        let b = 0;
        for(let C = 0; C < h.length; C++){
            for(let L = C + 1; L < h.length; L++){
                const w = h[C];
                const B = h[L];
                if (w.pipe === B.pipe && Ut(w, B)) {
                    b++;
                    te(w, B, xt);
                }
            }
        }
        return b;
    }, "resolveHandleConflicts");
    const de = new Map;
    const Ce = __1((h)=>{
        if (de.has(h)) {
            return de.get(h);
        }
        const b = f[h];
        if (b.length === 0) {
            const q = {
                dest: 0,
                deviation: 0,
                base: 0,
                delta: 0
            };
            de.set(h, q);
            return q;
        }
        const coord = p[b[0]].pipe.coord;
        let dest = coord;
        for(let q = 1; q < b.length; q++){
            const z = p[b[q]];
            if (z.orientation === "horizontal") {
                const { from, to } = z;
                dest = Math.abs(from - coord) > Math.abs(to - coord) ? from : to;
                break;
            }
        }
        const deviation = Math.abs(dest - coord);
        const U = {
            dest,
            deviation,
            base: coord,
            delta: dest - coord
        };
        de.set(h, U);
        return U;
    }, "getDestInfo");
    const dn = __1(()=>{
        let h = 0;
        const b = new Map;
        for (const [L, w] of s.entries()){
            if (f[L].length !== 0 && w.start) {
                if (!b.has(w.start)) {
                    b.set(w.start, []);
                }
                b.get(w.start).push(L);
            }
        }
        const C = __1((L)=>{
            const w = s[L];
            if (!w.start || !w.end) {
                return 0;
            }
            const B = r.get(w.start);
            const U = r.get(w.end);
            if (!B || !U) {
                return 0;
            }
            const q = (U.x ?? 0) - (B.x ?? 0);
            const z = (U.y ?? 0) - (B.y ?? 0);
            return Math.abs(q) + Math.abs(z);
        }, "getEdgeDistance");
        for (const L of b.values()){
            L.sort((B, U)=>{
                const q = Ce(B);
                const z = Ce(U);
                if (Math.abs(q.deviation - z.deviation) > 1) {
                    return q.deviation - z.deviation;
                }
                if (Math.abs(q.dest - z.dest) > 1) {
                    return q.dest - z.dest;
                }
                const Y = C(B);
                const ot = C(U);
                if (Math.abs(Y - ot) > 1) {
                    return ot - Y;
                }
                const length = f[B].length;
                const length_1 = f[U].length;
                if (length !== length_1) {
                    return length - length_1;
                }
                if (length === 1) {
                    const tt = f[B][0];
                    const yt = f[U][0];
                    if (p[tt] && p[yt]) {
                        const Rt = p[tt];
                        const Lt = p[yt];
                        const Dt = Math.abs(Rt.to - Rt.from);
                        const Jt = Math.abs(Lt.to - Lt.from);
                        if (Math.abs(Dt - Jt) > 1) {
                            return Dt - Jt;
                        }
                    }
                }
                return 0;
            });
            const w = L.map((B)=>p[f[B][0]]);
            h += Se(w);
        }
        return h;
    }, "fixSourceHandleCrossings");
    const un = __1(()=>{
        let h = 0;
        const b = new Map;
        for (const [C, L] of s.entries()){
            if (f[C].length !== 0 && L.end) {
                if (!b.has(L.end)) {
                    b.set(L.end, []);
                }
                b.get(L.end).push(C);
            }
        }
        for (const C of b.values()){
            C.sort((w, B)=>{
                const U = __1((Y)=>{
                    const ot = f[Y];
                    if (ot.length < 2) {
                        return 0;
                    }
                    const rt = p[ot[ot.length - 2]];
                    return Math.abs(rt.to - rt.from);
                }, "getDist");
                const q = U(w);
                const z = U(B);
                if (Math.abs(q - z) > 0.1) {
                    return q - z;
                }
                return w - B;
            });
            const L = C.map((w)=>p[f[w][f[w].length - 1]]);
            h += Se(L);
        }
        return h;
    }, "fixTargetHandleCrossings");
    const hn = __1(()=>{
        let h = 0;
        for (const b of c){
            const C = [];
            for (const L of b.tracks){
                for (const w of L.segments){
                    const B = f[w.edgeIndex].find((U)=>p[U].segmentIndex === w.segmentIndex);
                    if (B !== undefined) {
                        C.push(p[B]);
                    }
                }
            }
            C.sort((L, w)=>L.edgeIndex - w.edgeIndex || L.segmentIndex - w.segmentIndex);
            for(let L = 0; L < C.length; L++){
                for(let w = L + 1; w < C.length; w++){
                    const B = C[L];
                    const U = C[w];
                    if (Ut(B, U)) {
                        h++;
                        te(B, U, gt);
                    }
                }
            }
        }
        return h;
    }, "fixPipeCrossings");
    let N = 0;
    const F = 10;
    while(N < F){
        let h = 0;
        h += dn();
        h += un();
        h += hn();
        if (h === 0) {
            break;
        }
        N++;
    }
    const D = new Map;
    for (const h of c){
        const b = [];
        h.tracks.forEach((L)=>{
            L.segments.forEach((w)=>{
                b.push({
                    edgeIndex: w.edgeIndex,
                    segmentIndex: w.segmentIndex,
                    trackIndex: L.index,
                    from: w.from,
                    to: w.to
                });
            });
        });
        b.sort((L, w)=>L.from - w.from);
        const C = [];
        if (b.length > 0) {
            let L = [
                b[0]
            ];
            let w = b[0].to;
            for(let B = 1; B < b.length; B++){
                const U = b[B];
                if (U.from < w) {
                    L.push(U);
                    w = Math.max(w, U.to);
                } else {
                    C.push(L);
                    L = [
                        U
                    ];
                    w = U.to;
                }
            }
            C.push(L);
        }
        for (const L of C){
            const w = new Set;
            L.forEach((tt)=>w.add(tt.trackIndex));
            const B = new Map;
            L.forEach((tt)=>{
                const yt = Ce(tt.edgeIndex);
                B.set(tt.trackIndex, (B.get(tt.trackIndex) ?? 0) + yt.delta);
            });
            const U = [
                ...w
            ].filter((tt)=>(B.get(tt) ?? 0) < -1);
            const q = [
                ...w
            ].filter((tt)=>(B.get(tt) ?? 0) > 1);
            const z = [
                ...w
            ].filter((tt)=>Math.abs(B.get(tt) ?? 0) <= 1);
            U.sort((tt, yt)=>(B.get(yt) ?? 0) - (B.get(tt) ?? 0));
            q.sort((tt, yt)=>(B.get(tt) ?? 0) - (B.get(yt) ?? 0));
            const Y = __1((tt, yt)=>{
                L.filter((Rt)=>Rt.trackIndex === tt).forEach((Rt)=>{
                    const Lt = y.has(Rt.edgeIndex) ? h.coord : yt;
                    D.set(`${Rt.edgeIndex}-${Rt.segmentIndex}`, Lt);
                });
            }, "assignCoord");
            let ot = 0;
            for (const tt of U){
                ot++;
                Y(tt, h.coord - ot * Cn);
            }
            if (z.length === 0 && w.size > 0) {
                const tt = [
                    ...w
                ].sort((Lt, Dt)=>Math.abs(B.get(Lt) ?? 0) - Math.abs(B.get(Dt) ?? 0))[0];
                const yt = U.indexOf(tt);
                if (yt !== -1) {
                    U.splice(yt, 1);
                }
                const Rt = q.indexOf(tt);
                if (Rt !== -1) {
                    q.splice(Rt, 1);
                }
                z.push(tt);
            }
            let rt = 0;
            for (const tt of z){
                if (rt === 0) {
                    Y(tt, h.coord);
                } else {
                    const yt = rt % 2 === 1 ? 1 : -1;
                    const Rt = Math.ceil(rt / 2);
                    Y(tt, h.coord + yt * Rt * Cn * 0.5);
                }
                rt++;
            }
            let st = 0;
            for (const tt of q){
                st++;
                Y(tt, h.coord + st * Cn);
            }
        }
    }
    for (const [h, b] of s.entries()){
        const C = f[h] ?? [];
        if (C.length === 0) {
            continue;
        }
        const L = [];
        const w = r.get(b.start);
        const B = r.get(b.end);
        const { pSrcPort, pDstPort } = Q(h, w, B);
        const z = C.map((rt)=>{
            const st = p[rt];
            const coord = D.get(`${st.edgeIndex}-${st.segmentIndex}`) ?? st.pipe.coord;
            return {
                orient: st.orientation,
                coord,
                from: st.from,
                to: st.to
            };
        });
        L.push(pSrcPort);
        for(let rt = 0; rt < z.length; rt++){
            const st = z[rt];
            const tt = L[L.length - 1];
            const yt = st.orient === "vertical" ? tt.y : tt.x;
            const Rt = st.orient === "vertical" ? tt.x : tt.y;
            const Lt = z[rt + 1];
            const Dt = rt < z.length - 1;
            if (Math.abs(Rt - st.coord) > Jr_EPSILON) {
                L.push(Me(st, yt));
            }
            if (Dt && Lt.orient === st.orient) {
                if (Math.abs(st.coord - Lt.coord) > Jr_EPSILON) {
                    const Jt = st.orient === "vertical" ? (yt + Lt.from) / 2 : no(st, Lt);
                    L.push(Me(st, Jt), Me(Lt, Jt));
                } else {
                    if (rt === 0 || rt === z.length - 2) {
                        L.push(Me(st, no(st, Lt)));
                    }
                }
            } else if (Dt) {
                L.push(Me(st, Lt.coord));
            } else {
                const Jt = Math.abs(st.from - yt) < Math.abs(st.to - yt) ? st.to : st.from;
                L.push(Me(st, Jt));
            }
        }
        const Y = L[L.length - 1];
        if (Math.abs(Y.x - pDstPort.x) > Jr_EPSILON || Math.abs(Y.y - pDstPort.y) > Jr_EPSILON) {
            L.push(pDstPort);
        }
        const ot = [];
        if (L.length > 0) {
            ot.push(L[0]);
        }
        for(let rt = 1; rt < L.length; rt++){
            const st = L[rt];
            const tt = ot[ot.length - 1];
            if (Math.abs(st.x - tt.x) > Jr_EPSILON || Math.abs(st.y - tt.y) > Jr_EPSILON) {
                ot.push(st);
            }
        }
        b.points = ot;
    }
    for (const h of s){
        const b = h.__originalEdge;
        if (b && h.points) {
            b.points = h.points;
        }
    }
    t.edges = (t.edges ?? []).filter((h)=>!h.isLayoutOnly);
    const V = __1((h, b)=>{
        const C = b.x ?? 0;
        const L = b.y ?? 0;
        const w = b.width ?? 0;
        const B = b.height ?? 0;
        if (w <= 0 || B <= 0) {
            return h;
        }
        const U = C - w / 2;
        const q = C + w / 2;
        const z = L - B / 2;
        const Y = L + B / 2;
        if (h.x < U || h.x > q || h.y < z || h.y > Y) {
            return h;
        }
        const ot = h.x - U;
        const rt = q - h.x;
        const st = h.y - z;
        const tt = Y - h.y;
        const yt = Math.min(ot, rt, st, tt);
        if (yt === ot) {
            return {
                x: U,
                y: h.y
            };
        }
        if (yt === rt) {
            return {
                x: q,
                y: h.y
            };
        }
        if (yt === st) {
            return {
                x: h.x,
                y: z
            };
        }
        return {
            x: h.x,
            y: Y
        };
    }, "nodeBoundaryClamp");
    for (const h of t.edges){
        const b = h.points;
        if (!b || b.length < 2) {
            continue;
        }
        const { start, end } = h;
        const w = start ? r.get(start) : undefined;
        const B = end ? r.get(end) : undefined;
        if (w) {
            b[0] = V(b[0], w);
        }
        if (B) {
            b[b.length - 1] = V(b[b.length - 1], B);
        }
    }
    return t;
}
__1(hr, "routeEdgesOrthogonal");
function gr(t) {
    return t.direction ?? "TB";
}
__1(gr, "getSwimlaneDirection");
function pr(t) {
    const e = Jo(t);
    const nodeGap = t.config.flowchart?.nodeSpacing ?? 40;
    const layerGap = t.config.flowchart?.rankSpacing ?? 100;
    const ignoreCrossLaneEdges = t.config.swimlane?.ignoreCrossLaneEdges ?? true;
    const r = t.config.swimlane?.optimizeRanksByCrossings ?? true;
    const automaticLaneOrdering = t.config.swimlane?.automaticLaneOrdering ?? false;
    const direction = gr(t);
    const { ordered, coordinates } = ur(e, {
        nodeGap,
        layerGap,
        ignoreCrossLaneEdges,
        optimizeRanksByCrossings: r,
        automaticLaneOrdering,
        direction
    });
    Zo(e, ordered, coordinates, {
        nodeGap,
        layerGap
    });
    for (const g of t.edges ?? []){
        delete g.points;
    }
    hr(t, direction);
    for (const g of t.edges ?? []){
        if (!g.curve || g.curve === "basis") {
            g.curve = "rounded";
        }
    }
    Rs(t, direction);
    As(t);
    return direction;
}
__1(pr, "runSwimlaneLayoutCore");
export async function render(t, e) {
    const n = e.select("g");
    am(n, t.markers, t.type, t.diagramId);
    an_1();
    ao_1();
    ap();
    c();
    qo(t);
    const o = Qo(t);
    t.nodes = o.nodes;
    t.edges = o.edges;
    const { groups } = await _o(n, t);
    pr(t);
    await Uo(t, groups);
}
__1(render, "render");
