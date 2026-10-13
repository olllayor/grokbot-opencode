declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "0c52adf5-2f32-441f-b28e-c0fc93ced563", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-0c52adf5-2f32-441f-b28e-c0fc93ced563");
  } catch (e: any) {}
} as any)();
import { _ as u, l as i } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { i as m, G as y } from "./chunk-graph-BvS0Xx32.js";
import { b as _, m as X } from "./chunk-map-Bpb79OOT.js";
var j: number = 4;
function p(this: any, e: any): any {
  return (_ as any)(e, j);
}
function C(this: any, e: any): any {
  var r: any = {
    options: {
      directed: ((e as any).isDirected as any)(),
      multigraph: ((e as any).isMultigraph as any)(),
      compound: ((e as any).isCompound as any)()
    },
    nodes: (F as any)(e),
    edges: (M as any)(e)
  };
  return (m as any)(((e as any).graph as any)()) || ((r as any).value = (p as any)(((e as any).graph as any)())), r;
}
function F(this: any, e: any): any {
  return (X as any)(((e as any).nodes as any)(), function (this: any, r: any): any {
    var n: any = ((e as any).node as any)(r),
      s: any = ((e as any).parent as any)(r),
      t: any = {
        v: r
      };
    return (m as any)(n) || ((t as any).value = n), (m as any)(s) || ((t as any).parent = s), t;
  });
}
function M(this: any, e: any): any {
  return (X as any)(((e as any).edges as any)(), function (this: any, r: any): any {
    var n: any = ((e as any).edge as any)(r),
      s: any = {
        v: (r as any).v,
        w: (r as any).w
      };
    return (m as any)((r as any).name) || ((s as any).name = (r as any).name), (m as any)(n) || ((s as any).value = n), s;
  });
}
var c: any = new (Map as any)(),
  w: any = new (Map as any)(),
  A: any = new (Map as any)(),
  J: any = (u as any)((): any => {
    ((w as any).clear as any)(), ((A as any).clear as any)(), ((c as any).clear as any)();
  }, "clear"),
  v: any = (u as any)((e: any, r: any): any => {
    const n: any = ((w as any).get as any)(r) || [];
    return ((i as any).trace as any)("In isDescendant", r, " ", e, " = ", ((n as any).includes as any)(e)), ((n as any).includes as any)(e);
  }, "isDescendant"),
  R: any = (u as any)((e: any, r: any): any => {
    const n: any = ((w as any).get as any)(r) || [];
    return ((i as any).info as any)("Descendants of ", r, " is ", n), ((i as any).info as any)("Edge is ", e), ((e as any).v as any) === (r as any) || ((e as any).w as any) === (r as any) ? !1 : n ? ((n as any).includes as any)((e as any).v) || (v as any)((e as any).v, r) || (v as any)((e as any).w, r) || ((n as any).includes as any)((e as any).w) : (((i as any).debug as any)("Tilt, ", r, ",not in descendants"), !1);
  }, "edgeInCluster"),
  b: any = (u as any)((e: any, r: any, n: any, s: any): any => {
    ((i as any).warn as any)("Copying children of ", e, "root", s, "data", ((r as any).node as any)(e), s);
    const t: any = ((r as any).children as any)(e) || [];
    (e as any) !== (s as any) && ((t as any).push as any)(e), ((i as any).warn as any)("Copying (nodes) clusterId", e, "nodes", t), ((t as any).forEach as any)((o: any): any => {
      if (((((r as any).children as any)(o) as any).length as any) > (0 as any)) (b as any)(o, r, n, s);else {
        const l: any = ((r as any).node as any)(o);
        ((i as any).info as any)("cp ", o, " to ", s, " with parent ", e), ((n as any).setNode as any)(o, l), (s as any) !== (((r as any).parent as any)(o) as any) && (((i as any).warn as any)("Setting parent", o, ((r as any).parent as any)(o)), ((n as any).setParent as any)(o, ((r as any).parent as any)(o))), (e as any) !== (s as any) && (o as any) !== (e as any) ? (((i as any).debug as any)("Setting parent", o, e), ((n as any).setParent as any)(o, e)) : (((i as any).info as any)("In copy ", e, "root", s, "data", ((r as any).node as any)(e), s), ((i as any).debug as any)("Not Setting parent for node=", o, "cluster!==rootId", (e as any) !== (s as any), "node!==clusterId", (o as any) !== (e as any)));
        const f: any = ((r as any).edges as any)(o);
        ((i as any).debug as any)("Copying Edges", f), ((f as any).forEach as any)((a: any): any => {
          ((i as any).info as any)("Edge", a);
          const d: any = ((r as any).edge as any)((a as any).v, (a as any).w, (a as any).name);
          ((i as any).info as any)("Edge data", d, s);
          try {
            if ((R as any)(a, s)) {
              const g: any = ((w as any).get as any)(s) || [],
                E: any = ((g as any).includes as any)((a as any).v) || (v as any)((a as any).v, s) || ((a as any).v as any) === (s as any),
                x: any = ((g as any).includes as any)((a as any).w) || (v as any)((a as any).w, s) || ((a as any).w as any) === (s as any);
              if (E && x) ((i as any).info as any)("Copying as ", (a as any).v, (a as any).w, d, (a as any).name), ((n as any).setEdge as any)((a as any).v, (a as any).w, d, (a as any).name), ((i as any).info as any)("newGraph edges ", ((n as any).edges as any)(), ((n as any).edge as any)((((n as any).edges as any)() as any)[0]));else {
                const N: any = E ? s : (a as any).v,
                  h: any = x ? s : (a as any).w;
                ((i as any).info as any)("Rebinding cross-boundary edge as ", N, h, d, (a as any).name), ((r as any).setEdge as any)(N, h, d, (a as any).name);
              }
            } else ((i as any).info as any)("Skipping copy of edge ", (a as any).v, "-->", (a as any).w, " rootId: ", s, " clusterId:", e);
          } catch (g: any) {
            ((i as any).error as any)(g);
          }
        });
      }
      ((i as any).debug as any)("Removing node", o), ((r as any).removeNode as any)(o);
    });
  }, "copy"),
  O: any = (u as any)((e: any, r: any): any => {
    const n: any = ((r as any).children as any)(e);
    let s: any = [...n];
    for (const t of n) ((A as any).set as any)(t, e), s = [...s, ...(O as any)(t, r)];
    return s;
  }, "extractDescendants"),
  P: any = (u as any)((e: any, r: any, n: any): any => {
    const s: any = ((((e as any).edges as any)() as any).filter as any)((a: any): any => ((a as any).v as any) === (r as any) || ((a as any).w as any) === (r as any)),
      t: any = ((((e as any).edges as any)() as any).filter as any)((a: any): any => ((a as any).v as any) === (n as any) || ((a as any).w as any) === (n as any)),
      o: any = ((s as any).map as any)((a: any): any => ({
        v: ((a as any).v as any) === (r as any) ? n : (a as any).v,
        w: ((a as any).w as any) === (r as any) ? r : (a as any).w
      })),
      l: any = ((t as any).map as any)((a: any): any => ({
        v: (a as any).v,
        w: (a as any).w
      }));
    return ((o as any).filter as any)((a: any): any => ((l as any).some as any)((d: any): any => ((a as any).v as any) === ((d as any).v as any) && ((a as any).w as any) === ((d as any).w as any)));
  }, "findCommonEdges"),
  D: any = (u as any)((e: any, r: any, n: any): any => {
    const s: any = ((r as any).children as any)(e);
    if (((i as any).trace as any)("Searching children of id ", e, s), ((s as any).length as any) < (1 as any)) return e;
    let t: any;
    for (const o of s) {
      const l: any = (D as any)(o, r, n),
        f: any = (P as any)(r, n, l);
      if (l) if (((f as any).length as any) > (0 as any)) t = l;else return l;
    }
    return t;
  }, "findNonClusterChild"),
  S: any = (u as any)((e: any): any => !((c as any).has as any)(e) || !(((c as any).get as any)(e) as any).externalConnections ? e : ((c as any).has as any)(e) ? (((c as any).get as any)(e) as any).id : e, "getAnchorId"),
  U: any = (u as any)((e: any, r: any): any => {
    if (!e || (r as any) > (10 as any)) {
      ((i as any).debug as any)("Opting out, no graph ");
      return;
    } else ((i as any).debug as any)("Opting in, graph ");
    ((((e as any).nodes as any)() as any).forEach as any)(function (this: any, n: any): any {
      ((((e as any).children as any)(n) as any).length as any) > (0 as any) && (((i as any).warn as any)("Cluster identified", n, " Replacement id in edges: ", (D as any)(n, e, n)), ((w as any).set as any)(n, (O as any)(n, e)), ((c as any).set as any)(n, {
        id: (D as any)(n, e, n),
        clusterData: ((e as any).node as any)(n)
      }));
    }), ((((e as any).nodes as any)() as any).forEach as any)(function (this: any, n: any): any {
      const s: any = ((e as any).children as any)(n),
        t: any = ((e as any).edges as any)();
      ((s as any).length as any) > (0 as any) ? (((i as any).debug as any)("Cluster identified", n, w), ((t as any).forEach as any)((o: any): any => {
        const l: any = (v as any)((o as any).v, n),
          f: any = (v as any)((o as any).w, n);
        (l as any) ^ (f as any) && (((i as any).warn as any)("Edge: ", o, " leaves cluster ", n), ((i as any).warn as any)("Descendants of XXX ", n, ": ", ((w as any).get as any)(n)), (((c as any).get as any)(n) as any).externalConnections = !0);
      })) : ((i as any).debug as any)("Not a cluster ", n, w);
    });
    for (let n of ((c as any).keys as any)()) {
      const s: any = (((c as any).get as any)(n) as any).id,
        t: any = ((e as any).parent as any)(s);
      (t as any) !== (n as any) && ((c as any).has as any)(t) && !(((c as any).get as any)(t) as any).externalConnections && ((((c as any).get as any)(n) as any).id = t);
      const o: any = ((((e as any).edges as any)() as any).some as any)((l: any): any => ((l as any).v as any) === (n as any));
      if (s && ((c as any).get as any)(n)?.externalConnections && o && (L as any)(e, s, n)) {
        const l: any = (T as any)(e, n, ((e as any).parent as any)(s));
        l && ((((c as any).get as any)(n) as any).id = l);
      }
    }
    ((((e as any).edges as any)() as any).forEach as any)(function (this: any, n: any): any {
      const s: any = ((e as any).edge as any)(n);
      ((i as any).warn as any)(((((("Edge " as any) + ((n as any).v as any) as any) + (" -> " as any) as any) + ((n as any).w as any) as any) + (": " as any) as any) + (((JSON as any).stringify as any)(n) as any)), ((i as any).warn as any)(((((("Edge " as any) + ((n as any).v as any) as any) + (" -> " as any) as any) + ((n as any).w as any) as any) + (": " as any) as any) + (((JSON as any).stringify as any)(((e as any).edge as any)(n)) as any));
      let t: any = (n as any).v,
        o: any = (n as any).w;
      if (((i as any).warn as any)("Fix XXX", c, "ids:", (n as any).v, (n as any).w, "Translating: ", ((c as any).get as any)((n as any).v), " --- ", ((c as any).get as any)((n as any).w)), ((c as any).get as any)((n as any).v) || ((c as any).get as any)((n as any).w)) {
        if (((i as any).warn as any)("Fixing and trying - removing XXX", (n as any).v, (n as any).w, (n as any).name), t = (S as any)((n as any).v), o = (S as any)((n as any).w), ((e as any).removeEdge as any)((n as any).v, (n as any).w, (n as any).name), (t as any) !== ((n as any).v as any)) {
          const l: any = ((e as any).parent as any)(t);
          (((c as any).get as any)(l) as any).externalConnections = !0, (s as any).fromCluster = (n as any).v;
        }
        if ((o as any) !== ((n as any).w as any)) {
          const l: any = ((e as any).parent as any)(o);
          (((c as any).get as any)(l) as any).externalConnections = !0, (s as any).toCluster = (n as any).w;
        }
        ((i as any).warn as any)("Fix Replacing with XXX", t, o, (n as any).name), ((e as any).setEdge as any)(t, o, s, (n as any).name);
      }
    }), ((i as any).warn as any)("Adjusted Graph", (C as any)(e)), (k as any)(e, 0), ((i as any).trace as any)(c);
  }, "adjustClustersAndEdges"),
  k: any = (u as any)((e: any, r: any): any => {
    if (((i as any).warn as any)("extractor - ", r, (C as any)(e), ((e as any).children as any)("D")), (r as any) > (10 as any)) {
      ((i as any).error as any)("Bailing out");
      return;
    }
    let n: any = ((e as any).nodes as any)(),
      s: any = !1;
    for (const t of n) {
      const o: any = ((e as any).children as any)(t);
      s = s || ((o as any).length as any) > (0 as any);
    }
    if (!s) {
      ((i as any).debug as any)("Done, no node has children", ((e as any).nodes as any)());
      return;
    }
    ((i as any).debug as any)("Nodes = ", n, r);
    for (const t of n) if (((i as any).debug as any)("Extracting node", t, c, ((c as any).has as any)(t) && !(((c as any).get as any)(t) as any).externalConnections, !((e as any).parent as any)(t), ((e as any).node as any)(t), ((e as any).children as any)("D"), " Depth ", r), !((c as any).has as any)(t)) ((i as any).debug as any)("Not a cluster", t, r);else if (((c as any).get as any)(t)?.clusterData?.explicitDir && ((e as any).children as any)(t) && ((((e as any).children as any)(t) as any).length as any) > (0 as any)) {
      ((i as any).warn as any)("Cluster with explicit dir, creating subgraph for children", t, r);
      const o: any = ((((c as any).get as any)(t) as any).clusterData as any).dir,
        l: any = ((((new (y as any)({
          multigraph: !0,
          compound: !0
        }) as any).setGraph as any)({
          rankdir: o,
          nodesep: 50,
          ranksep: 50,
          marginx: 8,
          marginy: 8
        }) as any).setDefaultEdgeLabel as any)(function (this: any): any {
          return {};
        });
      (b as any)(t, e, l, t);
      const f: any = ((e as any).node as any)(t) || {};
      ((e as any).setNode as any)(t, {
        ...f,
        clusterNode: !0,
        id: t,
        clusterData: (((c as any).get as any)(t) as any).clusterData,
        label: (((c as any).get as any)(t) as any).label,
        graph: l
      }), ((i as any).warn as any)("Subgraph for cluster with explicit dir created:", t, (C as any)(l));
    } else if (!(((c as any).get as any)(t) as any).externalConnections && ((e as any).children as any)(t) && ((((e as any).children as any)(t) as any).length as any) > (0 as any)) {
      ((i as any).warn as any)("Cluster without external connections, without a parent and with children", t, r);
      let l: any = ((((e as any).graph as any)() as any).rankdir as any) === ("TB" as any) ? "LR" : "TB";
      ((c as any).get as any)(t)?.clusterData?.dir && (l = ((((c as any).get as any)(t) as any).clusterData as any).dir, ((i as any).warn as any)("Fixing dir", ((((c as any).get as any)(t) as any).clusterData as any).dir, l));
      const f: any = ((((new (y as any)({
        multigraph: !0,
        compound: !0
      }) as any).setGraph as any)({
        rankdir: l,
        nodesep: 50,
        ranksep: 50,
        marginx: 8,
        marginy: 8
      }) as any).setDefaultEdgeLabel as any)(function (this: any): any {
        return {};
      });
      (b as any)(t, e, f, t);
      const a: any = ((e as any).node as any)(t) || {};
      ((e as any).setNode as any)(t, {
        ...a,
        clusterNode: !0,
        id: t,
        clusterData: (((c as any).get as any)(t) as any).clusterData,
        label: (((c as any).get as any)(t) as any).label,
        graph: f
      }), ((i as any).debug as any)("Old graph after copy", (C as any)(e));
    } else ((i as any).warn as any)("Cluster ** ", t, " **not meeting the criteria !externalConnections:", !(((c as any).get as any)(t) as any).externalConnections, " no parent: ", !((e as any).parent as any)(t), " children ", ((e as any).children as any)(t) && ((((e as any).children as any)(t) as any).length as any) > (0 as any), ((e as any).children as any)("D"), r), ((i as any).debug as any)(c);
    n = ((e as any).nodes as any)(), ((i as any).warn as any)("New list of nodes", n);
    for (const t of n) {
      const o: any = ((e as any).node as any)(t);
      ((i as any).warn as any)(" Now next level", t, o), o?.clusterNode && (k as any)((o as any).graph, (r as any) + (1 as any));
    }
  }, "extractor"),
  B: any = (u as any)((e: any, r: any): any => {
    if (((r as any).length as any) === (0 as any)) return [];
    let n: any = ((Object as any).assign as any)([], r);
    return ((r as any).forEach as any)((s: any): any => {
      const t: any = ((e as any).children as any)(s),
        o: any = (B as any)(e, t);
      n = [...n, ...o];
    }), n;
  }, "sorter"),
  W: any = (u as any)((e: any): any => (B as any)(e, ((e as any).children as any)()), "sortNodesByHierarchy"),
  L: any = (u as any)((e: any, r: any, n: any): any => {
    let s: any = ((e as any).parent as any)(r);
    for (; s && (s as any) !== (n as any);) {
      const t: any = ((c as any).get as any)(s);
      if (t && !(t as any).externalConnections) return !0;
      s = ((e as any).parent as any)(s);
    }
    return !1;
  }, "isNodeInExtractableCluster"),
  T: any = (u as any)((e: any, r: any, n: any): any => {
    const s: any = ((e as any).children as any)(r) ?? [];
    for (const t of s) {
      if ((t as any) === (n as any) || (v as any)(t, n)) continue;
      const o: any = (D as any)(t, e, r);
      if (o && !(L as any)(e, o, r)) return o;
    }
    return null;
  }, "findSafeAnchorNode");
export { U as a, c as b, J as c, D as f, W as s, C as w };
//# debugId=0c52adf5-2f32-441f-b28e-c0fc93ced563
