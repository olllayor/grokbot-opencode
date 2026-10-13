declare var global: any;
declare var self: any;
declare var structuredClone: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "62b0d446-5175-4945-9e20-fd1be9dd5059", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-62b0d446-5175-4945-9e20-fd1be9dd5059");
  } catch (e: any) {}
} as any)();
import { c as O, w as I, a as J, f as P, b as E, s as A } from "./chunk-chunk-RYQCIY6F-Ds0VkJA9.js";
import { _ as w, am as v, an as D, ao as H, ap as Y, l, c as _, aq as W, ar as $, ag as j, as as q, ah as R, af as F, at as z, au as K, av as G } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { G as Q } from "./chunk-graph-BvS0Xx32.js";
import { l as U } from "./chunk-layout-ChWKu-Sy.js";
import "./chunk-map-Bpb79OOT.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var C: any = (w as any)((s: any, t: any, g: any): any => ((Math as any).max as any)(t, ((Math as any).min as any)(g, s)), "clamp"),
  B: any = (w as any)((s: any = "TB"): any => {
    switch (s) {
      case "BT":
        return "bottom";
      case "LR":
        return "right";
      case "RL":
        return "left";
      default:
        return "top";
    }
  }, "getDefaultSelfLoopSide"),
  V: any = (w as any)((s: any): any => (s as any) === ("flowchart" as any) || (s as any) === ("flowchart-v2" as any) || (s as any) === ("stateDiagram" as any), "shouldMergeSelfLoopSegments"),
  Z: any = (w as any)((s: any, t: any, g: any, y: any, c: any): any => {
    const o: any = [],
      r: any = new (Set as any)();
    if (((g as any).forEach as any)(({
      start: i,
      end: n
    }: any): any => {
      (i as any) !== (y as any) && ((r as any).add as any)(i), (n as any) !== (y as any) && ((r as any).add as any)(n);
    }), ((r as any).forEach as any)((i: any): any => {
      const n: any = ((s as any).node as any)(i);
      (typeof n?.x as any) == ("number" as any) && (typeof n?.y as any) == ("number" as any) && ((o as any).push as any)(n);
    }), ((o as any).length as any) === (0 as any) && ((g as any).forEach as any)(({
      edge: i
    }: any): any => {
      ((((i as any).points ?? []) as any).forEach as any)((n: any): any => {
        (typeof n?.x as any) == ("number" as any) && (typeof n?.y as any) == ("number" as any) && ((o as any).push as any)(n);
      });
    }), ((o as any).length as any) === (0 as any)) return (B as any)(c);
    const f: any = ((o as any).reduce as any)((i: any, n: any): any => ({
        x: ((i as any).x as any) + (((n as any).x as any) / ((o as any).length as any) as any),
        y: ((i as any).y as any) + (((n as any).y as any) / ((o as any).length as any) as any)
      }), {
        x: 0,
        y: 0
      }),
      h: any = ((f as any).x as any) - ((t as any).x as any),
      a: any = ((f as any).y as any) - ((t as any).y as any);
    return (((Math as any).abs as any)(h) as any) > (((Math as any).abs as any)(a) as any) ? (h as any) > (0 as any) ? "right" : "left" : (((Math as any).abs as any)(a) as any) > (0 as any) ? (a as any) > (0 as any) ? "bottom" : "top" : (B as any)(c);
  }, "getSelfLoopSide"),
  ee: any = (w as any)((s: any, t: any = "top", g: any = 0, y: any = 0): any => {
    const c: any = (s as any).x,
      o: any = ((s as any).y as any) - (g as any),
      r: any = ((s as any).width as any) / (2 as any),
      f: any = ((s as any).height as any) / (2 as any),
      h: any = ((Math as any).max as any)(36, ((Math as any).min as any)(100, ((s as any).width as any) * (.8 as any))),
      a: any = (C as any)(((Math as any).max as any)(y, ((s as any).width as any) * (.35 as any)), 36, h),
      i: any = (C as any)((((Math as any).min as any)((s as any).width, (s as any).height) as any) * (.45 as any), 24, 48);
    switch (t) {
      case "bottom":
        {
          const n: any = (o as any) + (f as any);
          return [{
            x: (c as any) - ((a as any) / (2 as any) as any),
            y: n
          }, {
            x: (c as any) - ((a as any) / (2 as any) as any),
            y: (n as any) + (i as any)
          }, {
            x: (c as any) + ((a as any) / (2 as any) as any),
            y: (n as any) + (i as any)
          }, {
            x: (c as any) + ((a as any) / (2 as any) as any),
            y: n
          }];
        }
      case "right":
        {
          const n: any = (c as any) + (r as any);
          return [{
            x: n,
            y: (o as any) - ((a as any) / (2 as any) as any)
          }, {
            x: (n as any) + (i as any),
            y: (o as any) - ((a as any) / (2 as any) as any)
          }, {
            x: (n as any) + (i as any),
            y: (o as any) + ((a as any) / (2 as any) as any)
          }, {
            x: n,
            y: (o as any) + ((a as any) / (2 as any) as any)
          }];
        }
      case "left":
        {
          const n: any = (c as any) - (r as any);
          return [{
            x: n,
            y: (o as any) - ((a as any) / (2 as any) as any)
          }, {
            x: (n as any) - (i as any),
            y: (o as any) - ((a as any) / (2 as any) as any)
          }, {
            x: (n as any) - (i as any),
            y: (o as any) + ((a as any) / (2 as any) as any)
          }, {
            x: n,
            y: (o as any) + ((a as any) / (2 as any) as any)
          }];
        }
      default:
        {
          const n: any = (o as any) - (f as any);
          return [{
            x: (c as any) - ((a as any) / (2 as any) as any),
            y: n
          }, {
            x: (c as any) - ((a as any) / (2 as any) as any),
            y: (n as any) - (i as any)
          }, {
            x: (c as any) + ((a as any) / (2 as any) as any),
            y: (n as any) - (i as any)
          }, {
            x: (c as any) + ((a as any) / (2 as any) as any),
            y: n
          }];
        }
    }
  }, "getSelfLoopPoints"),
  te: any = (w as any)((s: any, t: any, g: any = "top", y: any = 0, c: any = {}): any => {
    const r: any = (s as any).x,
      f: any = ((s as any).y as any) - (y as any),
      h: any = (c as any).width ?? 0,
      a: any = (c as any).height ?? 0;
    switch (g) {
      case "bottom":
        return {
          x: r,
          y: ((((Math as any).max as any)(...((t as any).map as any)((i: any): any => (i as any).y)) as any) + ((a as any) / (2 as any) as any) as any) + (4 as any)
        };
      case "right":
        return {
          x: ((((Math as any).max as any)(...((t as any).map as any)((i: any): any => (i as any).x)) as any) + ((h as any) / (2 as any) as any) as any) + (4 as any),
          y: f
        };
      case "left":
        return {
          x: ((((Math as any).min as any)(...((t as any).map as any)((i: any): any => (i as any).x)) as any) - ((h as any) / (2 as any) as any) as any) - (4 as any),
          y: f
        };
      default:
        return {
          x: r,
          y: ((((Math as any).min as any)(...((t as any).map as any)((i: any): any => (i as any).y)) as any) - ((a as any) / (2 as any) as any) as any) - (4 as any)
        };
    }
  }, "getSelfLoopLabelPosition"),
  ne: any = (w as any)((s: any, t: any = 0, {
    mergeSelfLoops: g = !0
  }: any = {}): any => {
    const y: any = new (Map as any)(),
      c: any = [],
      o: any = ((s as any).graph as any)()?.rankdir;
    return ((((s as any).edges as any)() as any).forEach as any)((r: any): any => {
      const f: any = ((s as any).edge as any)(r);
      if (g && (f as any).selfLoop) {
        const h: any = ((f as any).selfLoop as any).id;
        ((y as any).has as any)(h) || ((y as any).set as any)(h, []), ((((y as any).get as any)(h) as any).push as any)({
          edge: f,
          start: (r as any).v,
          end: (r as any).w
        });
      } else ((c as any).push as any)({
        edge: f,
        start: (r as any).v,
        end: (r as any).w
      });
    }), ((y as any).forEach as any)((r: any): any => {
      if (((r as any).length as any) !== (3 as any)) {
        ((r as any).forEach as any)((L: any): any => ((c as any).push as any)(L));
        return;
      }
      ((r as any).sort as any)((L: any, d: any): any => ((((L as any).edge as any).selfLoop as any).order as any) - ((((d as any).edge as any).selfLoop as any).order as any));
      const [f, h, a]: any = r,
        i: any = ((f as any).edge as any).originalEdge ?? ((h as any).edge as any).originalEdge ?? ((a as any).edge as any).originalEdge ?? (h as any).edge,
        n: any = ((s as any).node as any)((i as any).start);
      if (!n) {
        ((r as any).forEach as any)((L: any): any => ((c as any).push as any)(L));
        return;
      }
      const p: any = {
          width: ((h as any).edge as any).width,
          height: ((h as any).edge as any).height
        },
        m: any = (Z as any)(s, n, r, (i as any).start, o),
        X: any = (ee as any)(n, m, t, (p as any).width ?? 0),
        S: any = (te as any)(n, X, m, t, p),
        b: any = {
          ...(h as any).edge,
          ...i,
          id: (i as any).id,
          points: X,
          start: (i as any).start,
          end: (i as any).end,
          x: (S as any).x,
          y: (S as any).y,
          width: (p as any).width,
          height: (p as any).height,
          labelStyle: ((h as any).edge as any).labelStyle,
          fromCluster: ((f as any).edge as any).fromCluster ?? ((h as any).edge as any).fromCluster ?? ((a as any).edge as any).fromCluster,
          toCluster: ((f as any).edge as any).toCluster ?? ((h as any).edge as any).toCluster ?? ((a as any).edge as any).toCluster
        };
      delete (b as any).selfLoop, delete (b as any).originalEdge, ((c as any).push as any)({
        edge: b,
        start: (b as any).start,
        end: (b as any).end
      });
    }), c;
  }, "getEdgesToRender"),
  T: any = (w as any)(async (s: any, t: any, g: any, y: any, c: any, o: any): Promise<any> => {
    ((l as any).warn as any)("Graph in recursive render:XAX", (I as any)(t), c);
    const r: any = (((t as any).graph as any)() as any).rankdir;
    ((l as any).trace as any)("Dir in recursive render - dir:", r);
    const f: any = ((((s as any).insert as any)("g") as any).attr as any)("class", "root");
    ((t as any).nodes as any)() ? ((l as any).info as any)("Recursive render XXX", ((t as any).nodes as any)()) : ((l as any).info as any)("No nodes found for", t), ((((t as any).edges as any)() as any).length as any) > (0 as any) && ((l as any).info as any)("Recursive edges", ((t as any).edge as any)((((t as any).edges as any)() as any)[0]));
    const h: any = ((((f as any).insert as any)("g") as any).attr as any)("class", "clusters"),
      a: any = ((((f as any).insert as any)("g") as any).attr as any)("class", "edgePaths"),
      i: any = ((((f as any).insert as any)("g") as any).attr as any)("class", "edgeLabels"),
      n: any = ((((f as any).insert as any)("g") as any).attr as any)("class", "nodes"),
      p: any = (V as any)(g);
    await ((Promise as any).all as any)(((((t as any).nodes as any)() as any).map as any)(async function (this: any, d: any): Promise<any> {
      const e: any = ((t as any).node as any)(d);
      if ((c as any) !== (void 0 as any)) {
        const u: any = ((JSON as any).parse as any)(((JSON as any).stringify as any)((c as any).clusterData));
        ((l as any).trace as any)(`Setting data for parent cluster XXX
 Node.id = `, d, `
 data=`, (u as any).height, `
Parent cluster`, (c as any).height), ((t as any).setNode as any)((c as any).id, u), ((t as any).parent as any)(d) || (((l as any).trace as any)("Setting parent", d, (c as any).id), ((t as any).setParent as any)(d, (c as any).id, u));
      }
      if (((l as any).info as any)(((("(Insert) Node XXX" as any) + (d as any) as any) + (": " as any) as any) + (((JSON as any).stringify as any)(((t as any).node as any)(d)) as any)), e?.clusterNode) {
        ((l as any).info as any)("Cluster identified XBX", d, (e as any).width, ((t as any).node as any)(d));
        const {
          ranksep: u,
          nodesep: x
        }: any = ((t as any).graph as any)();
        (((e as any).graph as any).setGraph as any)({
          ...(((e as any).graph as any).graph as any)(),
          ranksep: (u as any) + (25 as any),
          nodesep: x
        });
        const N: any = await (T as any)(n, (e as any).graph, g, y, ((t as any).node as any)(d), o),
          M: any = (N as any).elem;
        (W as any)(e, M), (e as any).diff = (N as any).diff || 0, ((l as any).info as any)("New compound node after recursive render XAX", d, "width", (e as any).width, "height", (e as any).height), ($ as any)(M, e);
      } else ((((t as any).children as any)(d) as any).length as any) > (0 as any) ? (((l as any).trace as any)("Cluster - the non recursive path XBX", d, (e as any).id, e, (e as any).width, "Graph:", t), ((l as any).trace as any)((P as any)((e as any).id, t)), ((E as any).set as any)((e as any).id, {
        id: (P as any)((e as any).id, t),
        node: e
      })) : (((l as any).trace as any)("Node - the non recursive path XAX", d, n, ((t as any).node as any)(d), r), await (j as any)(n, ((t as any).node as any)(d), {
        config: o,
        dir: r
      }));
    })), await ((w as any)(async (): Promise<any> => {
      const d: any = ((((t as any).edges as any)() as any).map as any)(async function (this: any, e: any): Promise<any> {
        const u: any = ((t as any).edge as any)((e as any).v, (e as any).w, (e as any).name);
        if (((l as any).info as any)(((((("Edge " as any) + ((e as any).v as any) as any) + (" -> " as any) as any) + ((e as any).w as any) as any) + (": " as any) as any) + (((JSON as any).stringify as any)(e) as any)), ((l as any).info as any)((((("Edge " as any) + ((e as any).v as any) as any) + (" -> " as any) as any) + ((e as any).w as any) as any) + (": " as any), e, " ", ((JSON as any).stringify as any)(((t as any).edge as any)(e))), ((l as any).info as any)("Fix", E, "ids:", (e as any).v, (e as any).w, "Translating: ", ((E as any).get as any)((e as any).v), ((E as any).get as any)((e as any).w)), p && (u as any).selfLoop) {
          if ((((u as any).selfLoop as any).order as any) !== (1 as any)) return;
          const x: any = (u as any).id;
          (u as any).id = ((u as any).selfLoop as any).id, await (G as any)(i, u), (u as any).id = x;
          return;
        }
        await (G as any)(i, u);
      });
      await ((Promise as any).all as any)(d);
    }, "processEdges") as any)(), ((l as any).info as any)("Graph before layout:", ((JSON as any).stringify as any)((I as any)(t))), ((l as any).info as any)("############################################# XXX"), ((l as any).info as any)("###                Layout                 ### XXX"), ((l as any).info as any)("############################################# XXX"), (U as any)(t), ((l as any).info as any)("Graph after layout:", ((JSON as any).stringify as any)((I as any)(t)));
    let X: any = 0,
      {
        subGraphTitleTotalMargin: S
      }: any = (q as any)(o);
    await ((Promise as any).all as any)((((A as any)(t) as any).map as any)(async function (this: any, d: any): Promise<any> {
      const e: any = ((t as any).node as any)(d);
      if (((l as any).info as any)(((("Position XBX => " as any) + (d as any) as any) + (": (" as any) as any) + ((e as any).x as any), ("," as any) + ((e as any).y as any), ") width: ", (e as any).width, " height: ", (e as any).height), e?.clusterNode) (e as any).y += S, ((l as any).info as any)("A tainted cluster node XBX1", d, (e as any).id, (e as any).width, (e as any).height, (e as any).x, (e as any).y, ((t as any).parent as any)(d)), (((E as any).get as any)((e as any).id) as any).node = e, (R as any)(e);else if (((((t as any).children as any)(d) as any).length as any) > (0 as any)) {
        ((l as any).info as any)("A pure cluster node XBX1", d, (e as any).id, (e as any).x, (e as any).y, (e as any).width, (e as any).height, ((t as any).parent as any)(d)), (e as any).height += S, ((t as any).node as any)((e as any).parentId);
        const u: any = (e?.padding as any) / (2 as any) || 0,
          x: any = e?.labelBBox?.height || 0,
          N: any = (x as any) - (u as any) || 0;
        ((l as any).debug as any)("OffsetY", N, "labelHeight", x, "halfPadding", u), await (F as any)(h, e), (((E as any).get as any)((e as any).id) as any).node = e;
      } else {
        const u: any = ((t as any).node as any)((e as any).parentId);
        (e as any).y += (S as any) / (2 as any), ((l as any).info as any)("A regular node XBX1 - using the padding", (e as any).id, "parent", (e as any).parentId, (e as any).width, (e as any).height, (e as any).x, (e as any).y, "offsetY", (e as any).offsetY, "parent", u, u?.offsetY, e), (R as any)(e);
      }
    }));
    const b: any = (S as any) / (2 as any);
    return (((ne as any)(t, b, {
      mergeSelfLoops: p
    }) as any).forEach as any)(function (this: any, {
      edge: d,
      start: e,
      end: u
    }: any): any {
      ((l as any).info as any)(((((("Edge " as any) + (e as any) as any) + (" -> " as any) as any) + (u as any) as any) + (": " as any) as any) + (((JSON as any).stringify as any)(d) as any), d), (((d as any).points as any).forEach as any)((k: any): any => (k as any).y += b);
      const x: any = ((t as any).node as any)(e),
        N: any = ((t as any).node as any)(u),
        M: any = (z as any)(a, d, E, g, x, N, y);
      (K as any)(d, M);
    }), ((((t as any).nodes as any)() as any).forEach as any)(function (this: any, d: any): any {
      const e: any = ((t as any).node as any)(d);
      ((l as any).info as any)(d, (e as any).type, (e as any).diff), (e as any).isGroup && (X = (e as any).diff);
    }), ((l as any).warn as any)("Returning from recursive render XAX", f, X), {
      elem: f,
      diff: X
    };
  }, "recursiveRender"),
  ce: any = (w as any)(async (s: any, t: any): Promise<any> => {
    const g: any = ((((new (Q as any)({
        multigraph: !0,
        compound: !0
      }) as any).setGraph as any)({
        rankdir: (s as any).direction,
        nodesep: (s as any).config?.nodeSpacing || (s as any).config?.flowchart?.nodeSpacing || (s as any).nodeSpacing,
        ranksep: (s as any).config?.rankSpacing || (s as any).config?.flowchart?.rankSpacing || (s as any).rankSpacing,
        marginx: 8,
        marginy: 8
      }) as any).setDefaultEdgeLabel as any)(function (this: any): any {
        return {};
      }),
      y: any = ((t as any).select as any)("g");
    (v as any)(y, (s as any).markers, (s as any).type, (s as any).diagramId), (D as any)(), (H as any)(), (Y as any)(), (O as any)(), (((s as any).nodes as any).forEach as any)((o: any): any => {
      ((g as any).setNode as any)((o as any).id, {
        ...o
      }), (o as any).parentId && ((g as any).setParent as any)((o as any).id, (o as any).parentId);
    }), ((l as any).debug as any)("Edges:", (s as any).edges), (((s as any).edges as any).forEach as any)((o: any): any => {
      if (((o as any).start as any) === ((o as any).end as any)) {
        const r: any = (o as any).start,
          f: any = (((r as any) + ("---" as any) as any) + (r as any) as any) + ("---1" as any),
          h: any = (((r as any) + ("---" as any) as any) + (r as any) as any) + ("---2" as any),
          a: any = ((g as any).node as any)(r);
        ((g as any).setNode as any)(f, {
          domId: f,
          id: f,
          parentId: (a as any).parentId,
          labelStyle: "",
          label: "",
          padding: 0,
          shape: "labelRect",
          style: "",
          width: 10,
          height: 10
        }), ((g as any).setParent as any)(f, (a as any).parentId), ((g as any).setNode as any)(h, {
          domId: h,
          id: h,
          parentId: (a as any).parentId,
          labelStyle: "",
          padding: 0,
          shape: "labelRect",
          label: "",
          style: "",
          width: 10,
          height: 10
        }), ((g as any).setParent as any)(h, (a as any).parentId);
        const i: any = (structuredClone as any)(o),
          n: any = (structuredClone as any)(o),
          p: any = (structuredClone as any)(o),
          m: any = (structuredClone as any)(o);
        (n as any).originalEdge = i, (n as any).selfLoop = {
          id: (i as any).id,
          order: 0
        }, (p as any).originalEdge = i, (p as any).selfLoop = {
          id: (i as any).id,
          order: 1
        }, (m as any).originalEdge = i, (m as any).selfLoop = {
          id: (i as any).id,
          order: 2
        }, (n as any).label = "", (n as any).arrowTypeEnd = "none", (n as any).endLabelLeft = "", (n as any).endLabelRight = "", (n as any).startLabelLeft = "", (n as any).id = (r as any) + ("-cyclic-special-1" as any), (p as any).startLabelRight = "", (p as any).startLabelLeft = "", (p as any).endLabelLeft = "", (p as any).endLabelRight = "", (p as any).arrowTypeStart = "none", (p as any).arrowTypeEnd = "none", (p as any).id = (r as any) + ("-cyclic-special-mid" as any), (m as any).label = "", (m as any).startLabelRight = "", (m as any).startLabelLeft = "", (m as any).arrowTypeStart = "none", (a as any).isGroup && ((n as any).fromCluster = r, (m as any).toCluster = r), (m as any).id = (r as any) + ("-cyclic-special-2" as any), (m as any).arrowTypeStart = "none", ((g as any).setEdge as any)(r, f, n, (r as any) + ("-cyclic-special-0" as any)), ((g as any).setEdge as any)(f, h, p, (r as any) + ("-cyclic-special-1" as any)), ((g as any).setEdge as any)(h, r, m, (r as any) + ("-cyclic-special-2" as any));
      } else ((g as any).setEdge as any)((o as any).start, (o as any).end, {
        ...o
      }, (o as any).id);
    }), ((l as any).warn as any)("Graph at first:", ((JSON as any).stringify as any)((I as any)(g))), (J as any)(g), ((l as any).warn as any)("Graph after XAX:", ((JSON as any).stringify as any)((I as any)(g)));
    const c: any = (_ as any)();
    await (T as any)(y, g, (s as any).type, (s as any).diagramId, void 0, c);
  }, "render");
export { ne as getEdgesToRender, ce as render };
//# debugId=62b0d446-5175-4945-9e20-fd1be9dd5059
