declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "bd7bd607-aabd-4ea3-b80b-b8a4748469f3", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-bd7bd607-aabd-4ea3-b80b-b8a4748469f3");
  } catch (e: any) {}
} as any)();
import { p as Mt } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _ as u, s as Nt, g as zt, p as Lt, o as Tt, a as At, b as Xt, W as Et, z as Yt, B as J, l as Q, F as It, e as Bt, q as Ft, c as V } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as Rt } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var G: any = (u as any)((o: any, r: any): any => {
    const e: any = (o as any) <= (1 as any) ? (o as any) * (100 as any) : o;
    if ((e as any) < (0 as any) || (e as any) > (100 as any)) throw new (Error as any)(`${r} must be between 0-1 (decimal) or 0-100 (percentage). Received: ${o}`);
    return e;
  }, "toPercent"),
  A: any = (u as any)((o: any, r: any, e: any): any => ({
    x: (G as any)(r, `${e} evolution`),
    y: (G as any)(o, `${e} visibility`)
  }), "toCoordinates"),
  K: any = (u as any)((o: any): any => {
    if (o) {
      if ((o as any) === ("+<>" as any)) return "bidirectional";
      if ((o as any) === ("+<" as any)) return "backward";
      if ((o as any) === ("+>" as any)) return "forward";
    }
  }, "getFlowFromPort"),
  Ot: any = (u as any)((o: any): any => {
    if (!o?.startsWith("+")) return {};
    const e: any = ((/^\+'([^']*)'/ as any).exec as any)(o)?.[1];
    return ((o as any).includes as any)("<>") ? {
      flow: "bidirectional",
      label: e
    } : ((o as any).includes as any)("<") ? {
      flow: "backward",
      label: e
    } : ((o as any).includes as any)(">") ? {
      flow: "forward",
      label: e
    } : {
      label: e
    };
  }, "extractFlowFromArrow"),
  Wt: any = (u as any)((o: any, r: any): any => {
    if ((Mt as any)(o, r), (o as any).size && ((r as any).setSize as any)(((o as any).size as any).width, ((o as any).size as any).height), (o as any).evolution) {
      const e: any = ((((o as any).evolution as any).stages as any).map as any)((a: any): any => (a as any).secondName ? `${(((a as any).name as any).trim as any)()} / ${(((a as any).secondName as any).trim as any)()}` : (((a as any).name as any).trim as any)()),
        h: any = ((((((o as any).evolution as any).stages as any).filter as any)((a: any): any => ((a as any).boundary as any) !== (void 0 as any)) as any).map as any)((a: any): any => (a as any).boundary);
      ((r as any).updateAxes as any)({
        stages: e,
        stageBoundaries: h
      });
    }
    if ((((o as any).anchors as any).forEach as any)((e: any): any => {
      const h: any = (A as any)((e as any).visibility, (e as any).evolution, `Anchor "${(e as any).name}"`);
      ((r as any).addNode as any)((e as any).name, (e as any).name, (h as any).x, (h as any).y, "anchor");
    }), (((o as any).components as any).forEach as any)((e: any): any => {
      const h: any = (A as any)((e as any).visibility, (e as any).evolution, `Component "${(e as any).name}"`),
        a: any = (e as any).label ? ((((e as any).label as any).negX ? -1 : 1) as any) * (((e as any).label as any).offsetX as any) : void 0,
        d: any = (e as any).label ? ((((e as any).label as any).negY ? -1 : 1) as any) * (((e as any).label as any).offsetY as any) : void 0,
        w: any = (e as any).decorator?.strategy;
      ((r as any).addNode as any)((e as any).name, (e as any).name, (h as any).x, (h as any).y, "component", a, d, (e as any).inertia, w);
    }), (((o as any).notes as any).forEach as any)((e: any): any => {
      const h: any = (A as any)((e as any).visibility, (e as any).evolution, `Note "${(e as any).text}"`);
      ((r as any).addNote as any)((e as any).text, (h as any).x, (h as any).y);
    }), (((o as any).pipelines as any).forEach as any)((e: any): any => {
      const h: any = ((r as any).getNode as any)((e as any).parent);
      if (!h || (typeof (h as any).y as any) != ("number" as any)) throw new (Error as any)(`Pipeline "${(e as any).parent}" must reference an existing component with coordinates.`);
      const a: any = (h as any).y;
      ((r as any).startPipeline as any)((e as any).parent), (((e as any).components as any).forEach as any)((d: any): any => {
        const w: any = `${(e as any).parent}_${(d as any).name}`,
          C: any = (d as any).label ? ((((d as any).label as any).negX ? -1 : 1) as any) * (((d as any).label as any).offsetX as any) : void 0,
          g: any = (d as any).label ? ((((d as any).label as any).negY ? -1 : 1) as any) * (((d as any).label as any).offsetY as any) : void 0,
          R: any = (G as any)((d as any).evolution, `Pipeline component "${(d as any).name}" evolution`);
        ((r as any).addNode as any)(w, (d as any).name, R, a, "pipeline-component", C, g), ((r as any).addPipelineComponent as any)((e as any).parent, w);
      });
    }), (((o as any).links as any).forEach as any)((e: any): any => {
      const h: any = !!(e as any).arrow && ((((e as any).arrow as any).includes as any)("-.->") || (((e as any).arrow as any).includes as any)(".-."));
      let a: any = (K as any)((e as any).fromPort) ?? (K as any)((e as any).toPort);
      const {
        flow: d,
        label: w
      }: any = (Ot as any)((e as any).arrow);
      !a && d && (a = d);
      const C: any = (e as any).linkLabel,
        g: any = w ?? C;
      ((r as any).addLink as any)(((r as any).resolveNodeId as any)((e as any).from), ((r as any).resolveNodeId as any)((e as any).to), h, g, a);
    }), (((o as any).evolves as any).forEach as any)((e: any): any => {
      const h: any = ((r as any).getNode as any)((e as any).component);
      if ((h?.y as any) !== (void 0 as any)) {
        const a: any = (G as any)((e as any).target, `Evolve target for "${(e as any).component}"`);
        ((r as any).addTrend as any)((e as any).component, a, (h as any).y);
      }
    }), (((o as any).annotations as any).length as any) > (0 as any)) {
      const e: any = ((o as any).annotations as any)[0],
        h: any = (A as any)((e as any).x, (e as any).y, "Annotations box");
      ((r as any).setAnnotationsBox as any)((h as any).x, (h as any).y);
    }
    (((o as any).annotation as any).forEach as any)((e: any): any => {
      const h: any = (A as any)((e as any).x, (e as any).y, `Annotation ${(e as any).number}`);
      ((r as any).addAnnotation as any)((e as any).number, [{
        x: (h as any).x,
        y: (h as any).y
      }], (e as any).text);
    }), (((o as any).accelerators as any).forEach as any)((e: any): any => {
      const h: any = (A as any)((e as any).x, (e as any).y, `Accelerator "${(e as any).name}"`);
      ((r as any).addAccelerator as any)((e as any).name, (h as any).x, (h as any).y);
    }), (((o as any).deaccelerators as any).forEach as any)((e: any): any => {
      const h: any = (A as any)((e as any).x, (e as any).y, `Deaccelerator "${(e as any).name}"`);
      ((r as any).addDeaccelerator as any)((e as any).name, (h as any).x, (h as any).y);
    });
  }, "populateDb"),
  tt: any = {
    parser: {
      yy: void 0
    },
    parse: (u as any)(async (o: any): Promise<any> => {
      const r: any = await (Rt as any)("wardley", o);
      ((Q as any).debug as any)(r);
      const e: any = (tt as any).parser?.yy;
      if (!e || (typeof (e as any).addNode as any) != ("function" as any)) throw new (Error as any)("parser.parser?.yy was not a WardleyDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
      (Wt as any)(r, e);
    }, "parse")
  },
  E: any,
  Dt: any = (E = class {
    declare size: any;
    declare annotationsBox: any;
    declare axes: any;
    declare deaccelerators: any;
    declare accelerators: any;
    declare notes: any;
    declare annotations: any;
    declare pipelines: any;
    declare trends: any;
    declare links: any;
    declare nodes: any;
    [key: string]: any;
    constructor() {
      (this as any).nodes = new (Map as any)(), (this as any).links = [], (this as any).trends = new (Map as any)(), (this as any).pipelines = new (Map as any)(), (this as any).annotations = [], (this as any).notes = [], (this as any).accelerators = [], (this as any).deaccelerators = [], (this as any).axes = {};
    }
    addNode(r: any): any {
      const e: any = (((this as any).nodes as any).get as any)((r as any).id) ?? {
          id: (r as any).id,
          label: (r as any).label
        },
        h: any = {
          ...e,
          ...r,
          className: (r as any).className ?? (e as any).className,
          labelOffsetX: (r as any).labelOffsetX ?? (e as any).labelOffsetX,
          labelOffsetY: (r as any).labelOffsetY ?? (e as any).labelOffsetY
        };
      (((this as any).nodes as any).set as any)((r as any).id, h);
    }
    addLink(r: any): any {
      (((this as any).links as any).push as any)(r);
    }
    addTrend(r: any): any {
      (((this as any).trends as any).set as any)((r as any).nodeId, r);
    }
    startPipeline(r: any): any {
      (((this as any).pipelines as any).set as any)(r, {
        nodeId: r,
        componentIds: []
      });
      const e: any = (((this as any).nodes as any).get as any)(r);
      e && ((e as any).isPipelineParent = !0);
    }
    addPipelineComponent(r: any, e: any): any {
      const h: any = (((this as any).pipelines as any).get as any)(r);
      h && (((h as any).componentIds as any).push as any)(e);
      const a: any = (((this as any).nodes as any).get as any)(e);
      a && ((a as any).inPipeline = !0);
    }
    addAnnotation(r: any): any {
      (((this as any).annotations as any).push as any)(r);
    }
    addNote(r: any): any {
      (((this as any).notes as any).push as any)(r);
    }
    addAccelerator(r: any): any {
      (((this as any).accelerators as any).push as any)(r);
    }
    addDeaccelerator(r: any): any {
      (((this as any).deaccelerators as any).push as any)(r);
    }
    setAnnotationsBox(r: any, e: any): any {
      (this as any).annotationsBox = {
        x: r,
        y: e
      };
    }
    setAxes(r: any): any {
      (this as any).axes = {
        ...(this as any).axes,
        ...r
      };
    }
    setSize(r: any, e: any): any {
      (this as any).size = {
        width: r,
        height: e
      };
    }
    getNode(r: any): any {
      return (((this as any).nodes as any).get as any)(r);
    }
    resolveNodeId(r: any): any {
      if ((((this as any).nodes as any).has as any)(r)) return r;
      for (const [e, h] of (this as any).nodes) if (((h as any).label as any) === (r as any)) return e;
      return r;
    }
    build(): any {
      const r: any = [];
      for (const e of (((this as any).nodes as any).values as any)()) {
        if ((typeof (e as any).x as any) != ("number" as any) || (typeof (e as any).y as any) != ("number" as any)) throw new (Error as any)(`Node "${(e as any).label}" is missing coordinates`);
        ((r as any).push as any)(e);
      }
      return {
        nodes: r,
        links: [...(this as any).links],
        trends: [...(((this as any).trends as any).values as any)()],
        pipelines: [...(((this as any).pipelines as any).values as any)()],
        annotations: [...(this as any).annotations],
        notes: [...(this as any).notes],
        accelerators: [...(this as any).accelerators],
        deaccelerators: [...(this as any).deaccelerators],
        annotationsBox: (this as any).annotationsBox,
        axes: {
          ...(this as any).axes
        },
        size: (this as any).size
      };
    }
    clear(): any {
      (((this as any).nodes as any).clear as any)(), (this as any).links = [], (((this as any).trends as any).clear as any)(), (((this as any).pipelines as any).clear as any)(), (this as any).annotations = [], (this as any).notes = [], (this as any).accelerators = [], (this as any).deaccelerators = [], (this as any).annotationsBox = void 0, (this as any).axes = {}, (this as any).size = void 0;
    }
  }, (u as any)(E, "WardleyBuilder"), E),
  k: any = new (Dt as any)();
function et(this: any): any {
  return ((V as any)() as any)["wardley-beta"];
}
(u as any)(et, "getConfig");
function at(this: any, o: any, r: any, e: any, h: any, a: any, d: any, w: any, C: any, g: any): any {
  ((k as any).addNode as any)({
    id: o,
    label: r,
    x: e,
    y: h,
    className: a,
    labelOffsetX: d,
    labelOffsetY: w,
    inertia: C,
    sourceStrategy: g
  });
}
(u as any)(at, "addNode");
function rt(this: any, o: any, r: any, e: any = !1, h: any, a: any): any {
  ((k as any).addLink as any)({
    source: o,
    target: r,
    dashed: e,
    label: h,
    flow: a
  });
}
(u as any)(rt, "addLink");
function ot(this: any, o: any, r: any, e: any): any {
  ((k as any).addTrend as any)({
    nodeId: o,
    targetX: r,
    targetY: e
  });
}
(u as any)(ot, "addTrend");
function nt(this: any, o: any, r: any, e: any): any {
  ((k as any).addAnnotation as any)({
    number: o,
    coordinates: r,
    text: e
  });
}
(u as any)(nt, "addAnnotation");
function st(this: any, o: any, r: any, e: any): any {
  ((k as any).addNote as any)({
    text: o,
    x: r,
    y: e
  });
}
(u as any)(st, "addNote");
function it(this: any, o: any, r: any, e: any): any {
  ((k as any).addAccelerator as any)({
    name: o,
    x: r,
    y: e
  });
}
(u as any)(it, "addAccelerator");
function dt(this: any, o: any, r: any, e: any): any {
  ((k as any).addDeaccelerator as any)({
    name: o,
    x: r,
    y: e
  });
}
(u as any)(dt, "addDeaccelerator");
function lt(this: any, o: any, r: any): any {
  ((k as any).setAnnotationsBox as any)(o, r);
}
(u as any)(lt, "setAnnotationsBox");
function ct(this: any, o: any, r: any): any {
  ((k as any).setSize as any)(o, r);
}
(u as any)(ct, "setSize");
function pt(this: any, o: any): any {
  ((k as any).startPipeline as any)(o);
}
(u as any)(pt, "startPipeline");
function ft(this: any, o: any, r: any): any {
  ((k as any).addPipelineComponent as any)(o, r);
}
(u as any)(ft, "addPipelineComponent");
function ht(this: any, o: any): any {
  ((k as any).setAxes as any)(o);
}
(u as any)(ht, "updateAxes");
function xt(this: any, o: any): any {
  return ((k as any).getNode as any)(o);
}
(u as any)(xt, "getNode");
function gt(this: any, o: any): any {
  return ((k as any).resolveNodeId as any)(o);
}
(u as any)(gt, "resolveNodeId");
function yt(this: any): any {
  return ((k as any).build as any)();
}
(u as any)(yt, "getWardleyData");
function ut(this: any): any {
  ((k as any).clear as any)(), (Ft as any)();
}
(u as any)(ut, "clear");
var Gt: any = {
    getConfig: et,
    addNode: at,
    addLink: rt,
    addTrend: ot,
    addAnnotation: nt,
    addNote: st,
    addAccelerator: it,
    addDeaccelerator: dt,
    setAnnotationsBox: lt,
    setSize: ct,
    startPipeline: pt,
    addPipelineComponent: ft,
    updateAxes: ht,
    getNode: xt,
    resolveNodeId: gt,
    getWardleyData: yt,
    clear: ut,
    setAccTitle: Xt,
    getAccTitle: At,
    setDiagramTitle: Tt,
    getDiagramTitle: Lt,
    getAccDescription: zt,
    setAccDescription: Nt
  },
  qt: any = ["Genesis", "Custom Built", "Product", "Commodity"],
  Ht: any = (u as any)((): any => {
    const {
      themeVariables: o
    }: any = (V as any)();
    return {
      backgroundColor: (o as any).wardley?.backgroundColor ?? (o as any).background ?? "#fff",
      axisColor: (o as any).wardley?.axisColor ?? "#000",
      axisTextColor: (o as any).wardley?.axisTextColor ?? (o as any).primaryTextColor ?? "#222",
      gridColor: (o as any).wardley?.gridColor ?? "rgba(100, 100, 100, 0.2)",
      componentFill: (o as any).wardley?.componentFill ?? "#fff",
      componentStroke: (o as any).wardley?.componentStroke ?? "#000",
      componentLabelColor: (o as any).wardley?.componentLabelColor ?? (o as any).primaryTextColor ?? "#222",
      linkStroke: (o as any).wardley?.linkStroke ?? "#000",
      evolutionStroke: (o as any).wardley?.evolutionStroke ?? "#dc3545",
      annotationStroke: (o as any).wardley?.annotationStroke ?? "#000",
      annotationTextColor: (o as any).wardley?.annotationTextColor ?? (o as any).primaryTextColor ?? "#222",
      annotationFill: (o as any).wardley?.annotationFill ?? (o as any).background ?? "#fff"
    };
  }, "getTheme"),
  jt: any = (u as any)((): any => {
    const o: any = ((V as any)() as any)["wardley-beta"];
    return {
      width: o?.width ?? 900,
      height: o?.height ?? 600,
      padding: o?.padding ?? 48,
      nodeRadius: o?.nodeRadius ?? 6,
      nodeLabelOffset: o?.nodeLabelOffset ?? 8,
      axisFontSize: o?.axisFontSize ?? 12,
      labelFontSize: o?.labelFontSize ?? 10,
      showGrid: o?.showGrid ?? !1,
      useMaxWidth: o?.useMaxWidth ?? !0
    };
  }, "getConfigValues"),
  Vt: any = (u as any)((o: any, r: any, e: any, h: any): any => {
    ((Q as any).debug as any)((`Rendering Wardley map
` as any) + (o as any));
    const a: any = (jt as any)(),
      d: any = (Ht as any)(),
      w: any = ((a as any).nodeRadius as any) * (1.6 as any),
      C: any = (h as any).db,
      g: any = ((C as any).getWardleyData as any)(),
      R: any = ((C as any).getDiagramTitle as any)(),
      S: any = (g as any).size?.width ?? (a as any).width,
      b: any = (g as any).size?.height ?? (a as any).height,
      Y: any = (It as any)(r);
    ((((Y as any).selectAll as any)("*") as any).remove as any)(), (Bt as any)(Y, b, S, (a as any).useMaxWidth), ((Y as any).attr as any)("viewBox", `0 0 ${S} ${b}`);
    const v: any = ((((Y as any).append as any)("g") as any).attr as any)("class", "wardley-map"),
      q: any = ((Y as any).append as any)("defs");
    ((((((((((((((((((((((((q as any).append as any)("marker") as any).attr as any)("id", `arrow-${r}`) as any).attr as any)("viewBox", "0 0 10 10") as any).attr as any)("refX", 9) as any).attr as any)("refY", 5) as any).attr as any)("markerWidth", 6) as any).attr as any)("markerHeight", 6) as any).attr as any)("orient", "auto-start-reverse") as any).append as any)("path") as any).attr as any)("d", "M 0 0 L 10 5 L 0 10 z") as any).attr as any)("fill", (d as any).evolutionStroke) as any).attr as any)("stroke", "none"), ((((((((((((((((((((((((q as any).append as any)("marker") as any).attr as any)("id", `link-arrow-end-${r}`) as any).attr as any)("viewBox", "0 0 10 10") as any).attr as any)("refX", 9) as any).attr as any)("refY", 5) as any).attr as any)("markerWidth", 5) as any).attr as any)("markerHeight", 5) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 0 0 L 10 5 L 0 10 z") as any).attr as any)("fill", (d as any).linkStroke) as any).attr as any)("stroke", "none"), ((((((((((((((((((((((((q as any).append as any)("marker") as any).attr as any)("id", `link-arrow-start-${r}`) as any).attr as any)("viewBox", "0 0 10 10") as any).attr as any)("refX", 1) as any).attr as any)("refY", 5) as any).attr as any)("markerWidth", 5) as any).attr as any)("markerHeight", 5) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 10 0 L 0 5 L 10 10 z") as any).attr as any)("fill", (d as any).linkStroke) as any).attr as any)("stroke", "none"), ((((((((((v as any).append as any)("rect") as any).attr as any)("class", "wardley-background") as any).attr as any)("width", S) as any).attr as any)("height", b) as any).attr as any)("fill", (d as any).backgroundColor);
    const I: any = (S as any) - (((a as any).padding as any) * (2 as any) as any),
      B: any = (b as any) - (((a as any).padding as any) * (2 as any) as any);
    R && ((((((((((((((((((((v as any).append as any)("text") as any).attr as any)("class", "wardley-title") as any).attr as any)("x", (S as any) / (2 as any)) as any).attr as any)("y", ((a as any).padding as any) / (2 as any)) as any).attr as any)("fill", (d as any).axisTextColor) as any).attr as any)("font-size", ((a as any).axisFontSize as any) * (1.05 as any)) as any).attr as any)("font-weight", "bold") as any).attr as any)("text-anchor", "middle") as any).attr as any)("dominant-baseline", "middle") as any).text as any)(R);
    const z: any = (u as any)((t: any): any => ((a as any).padding as any) + (((t as any) / (100 as any) as any) * (I as any) as any), "projectX"),
      L: any = (u as any)((t: any): any => ((b as any) - ((a as any).padding as any) as any) - (((t as any) / (100 as any) as any) * (B as any) as any), "projectY"),
      O: any = ((((v as any).append as any)("g") as any).attr as any)("class", "wardley-axes");
    ((((((((((((((O as any).append as any)("line") as any).attr as any)("x1", (a as any).padding) as any).attr as any)("x2", (S as any) - ((a as any).padding as any)) as any).attr as any)("y1", (b as any) - ((a as any).padding as any)) as any).attr as any)("y2", (b as any) - ((a as any).padding as any)) as any).attr as any)("stroke", (d as any).axisColor) as any).attr as any)("stroke-width", 1), ((((((((((((((O as any).append as any)("line") as any).attr as any)("x1", (a as any).padding) as any).attr as any)("x2", (a as any).padding) as any).attr as any)("y1", (a as any).padding) as any).attr as any)("y2", (b as any) - ((a as any).padding as any)) as any).attr as any)("stroke", (d as any).axisColor) as any).attr as any)("stroke-width", 1);
    const wt: any = ((g as any).axes as any).xLabel ?? "Evolution",
      mt: any = ((g as any).axes as any).yLabel ?? "Visibility";
    ((((((((((((((((((O as any).append as any)("text") as any).attr as any)("class", "wardley-axis-label wardley-axis-label-x") as any).attr as any)("x", ((a as any).padding as any) + ((I as any) / (2 as any) as any)) as any).attr as any)("y", (b as any) - (((a as any).padding as any) / (4 as any) as any)) as any).attr as any)("fill", (d as any).axisTextColor) as any).attr as any)("font-size", (a as any).axisFontSize) as any).attr as any)("font-weight", "bold") as any).attr as any)("text-anchor", "middle") as any).text as any)(wt), ((((((((((((((((((((O as any).append as any)("text") as any).attr as any)("class", "wardley-axis-label wardley-axis-label-y") as any).attr as any)("x", ((a as any).padding as any) / (3 as any)) as any).attr as any)("y", ((a as any).padding as any) + ((B as any) / (2 as any) as any)) as any).attr as any)("fill", (d as any).axisTextColor) as any).attr as any)("font-size", (a as any).axisFontSize) as any).attr as any)("font-weight", "bold") as any).attr as any)("text-anchor", "middle") as any).attr as any)("transform", `rotate(-90 ${((a as any).padding as any) / (3 as any)} ${((a as any).padding as any) + ((B as any) / (2 as any) as any)})`) as any).text as any)(mt);
    const F: any = ((g as any).axes as any).stages && ((((g as any).axes as any).stages as any).length as any) > (0 as any) ? ((g as any).axes as any).stages : qt;
    if (((F as any).length as any) > (0 as any)) {
      const t: any = ((((v as any).append as any)("g") as any).attr as any)("class", "wardley-stages"),
        s: any = ((g as any).axes as any).stageBoundaries,
        n: any = [];
      if (s && ((s as any).length as any) === ((F as any).length as any)) {
        let i: any = 0;
        ((s as any).forEach as any)((p: any): any => {
          ((n as any).push as any)({
            start: i,
            end: p
          }), i = p;
        });
      } else {
        const i: any = (1 as any) / ((F as any).length as any);
        ((F as any).forEach as any)((p: any, l: any): any => {
          ((n as any).push as any)({
            start: (l as any) * (i as any),
            end: ((l as any) + (1 as any) as any) * (i as any)
          });
        });
      }
      ((F as any).forEach as any)((i: any, p: any): any => {
        const l: any = (n as any)[p],
          f: any = ((a as any).padding as any) + (((l as any).start as any) * (I as any) as any),
          x: any = ((a as any).padding as any) + (((l as any).end as any) * (I as any) as any),
          y: any = ((f as any) + (x as any) as any) / (2 as any);
        (p as any) > (0 as any) && ((((((((((((((((((t as any).append as any)("line") as any).attr as any)("x1", f) as any).attr as any)("x2", f) as any).attr as any)("y1", (a as any).padding) as any).attr as any)("y2", (b as any) - ((a as any).padding as any)) as any).attr as any)("stroke", "#000") as any).attr as any)("stroke-width", 1) as any).attr as any)("stroke-dasharray", "5 5") as any).attr as any)("opacity", .8), ((((((((((((((((t as any).append as any)("text") as any).attr as any)("class", "wardley-stage-label") as any).attr as any)("x", y) as any).attr as any)("y", (b as any) - (((a as any).padding as any) / (1.5 as any) as any)) as any).attr as any)("fill", (d as any).axisTextColor) as any).attr as any)("font-size", ((a as any).axisFontSize as any) - (2 as any)) as any).attr as any)("text-anchor", "middle") as any).text as any)(i);
      });
    }
    if ((a as any).showGrid) {
      const t: any = ((((v as any).append as any)("g") as any).attr as any)("class", "wardley-grid");
      for (let s: any = 1; (s as any) < (4 as any); s++) {
        const n: any = (s as any) / (4 as any),
          i: any = ((a as any).padding as any) + ((I as any) * (n as any) as any);
        ((((((((((((((t as any).append as any)("line") as any).attr as any)("x1", i) as any).attr as any)("x2", i) as any).attr as any)("y1", (a as any).padding) as any).attr as any)("y2", (b as any) - ((a as any).padding as any)) as any).attr as any)("stroke", (d as any).gridColor) as any).attr as any)("stroke-dasharray", "2 6"), ((((((((((((((t as any).append as any)("line") as any).attr as any)("x1", (a as any).padding) as any).attr as any)("x2", (S as any) - ((a as any).padding as any)) as any).attr as any)("y1", ((b as any) - ((a as any).padding as any) as any) - ((B as any) * (n as any) as any)) as any).attr as any)("y2", ((b as any) - ((a as any).padding as any) as any) - ((B as any) * (n as any) as any)) as any).attr as any)("stroke", (d as any).gridColor) as any).attr as any)("stroke-dasharray", "2 6");
      }
    }
    const c: any = new (Map as any)();
    if ((((g as any).nodes as any).forEach as any)((t: any): any => {
      ((c as any).set as any)((t as any).id, {
        x: (z as any)((t as any).x),
        y: (L as any)((t as any).y),
        node: t
      });
    }), (((g as any).pipelines as any).length as any) > (0 as any)) {
      const t: any = ((((v as any).append as any)("g") as any).attr as any)("class", "wardley-pipelines"),
        s: any = ((((v as any).append as any)("g") as any).attr as any)("class", "wardley-pipeline-links");
      (((g as any).pipelines as any).forEach as any)((n: any): any => {
        if ((((n as any).componentIds as any).length as any) === (0 as any)) return;
        const i: any = (((((((n as any).componentIds as any).map as any)((x: any): any => ({
          id: x,
          pos: ((c as any).get as any)(x),
          node: (((g as any).nodes as any).find as any)((y: any): any => ((y as any).id as any) === (x as any))
        })) as any).filter as any)((x: any): any => (x as any).pos && (x as any).node) as any).sort as any)((x: any, y: any): any => (((x as any).node as any).x as any) - (((y as any).node as any).x as any));
        for (let x: any = 0; (x as any) < (((i as any).length as any) - (1 as any) as any); x++) {
          const y: any = (i as any)[x],
            m: any = (i as any)[(x as any) + (1 as any)];
          ((((((((((((((((((s as any).append as any)("line") as any).attr as any)("class", "wardley-pipeline-evolution-link") as any).attr as any)("x1", ((y as any).pos as any).x) as any).attr as any)("y1", ((y as any).pos as any).y) as any).attr as any)("x2", ((m as any).pos as any).x) as any).attr as any)("y2", ((m as any).pos as any).y) as any).attr as any)("stroke", (d as any).linkStroke) as any).attr as any)("stroke-width", 1) as any).attr as any)("stroke-dasharray", "4 4");
        }
        let p: any = (1 as any) / (0 as any),
          l: any = (-1 as any) / (0 as any),
          f: any = 0;
        if ((((n as any).componentIds as any).forEach as any)((x: any): any => {
          const y: any = ((c as any).get as any)(x);
          y && (p = ((Math as any).min as any)(p, (y as any).x), l = ((Math as any).max as any)(l, (y as any).x), f = (y as any).y);
        }), (p as any) !== ((1 as any) / (0 as any) as any) && (l as any) !== ((-1 as any) / (0 as any) as any)) {
          const y: any = ((a as any).nodeRadius as any) * (4 as any),
            m: any = (f as any) - ((y as any) / (2 as any) as any),
            P: any = ((c as any).get as any)((n as any).nodeId);
          if (P) {
            const N: any = ((p as any) + (l as any) as any) / (2 as any);
            (P as any).x = N, (P as any).y = (m as any) - ((w as any) / (6 as any) as any);
          }
          ((((((((((((((((((((((t as any).append as any)("rect") as any).attr as any)("class", "wardley-pipeline-box") as any).attr as any)("x", (p as any) - (15 as any)) as any).attr as any)("y", m) as any).attr as any)("width", ((l as any) - (p as any) as any) + (30 as any)) as any).attr as any)("height", y) as any).attr as any)("fill", "none") as any).attr as any)("stroke", (d as any).axisColor) as any).attr as any)("stroke-width", 1.5) as any).attr as any)("rx", 4) as any).attr as any)("ry", 4);
        }
      });
    }
    const _: any = ((((v as any).append as any)("g") as any).attr as any)("class", "wardley-links"),
      Z: any = new (Map as any)();
    (((g as any).pipelines as any).forEach as any)((t: any): any => {
      ((Z as any).set as any)((t as any).nodeId, new (Set as any)((t as any).componentIds));
    });
    const U: any = (((g as any).links as any).filter as any)((t: any): any => !(!((c as any).has as any)((t as any).source) || !((c as any).has as any)((t as any).target) || ((Z as any).get as any)((t as any).target)?.has((t as any).source)));
    ((((((((((((((((((((((((((((_ as any).selectAll as any)("line") as any).data as any)(U) as any).enter as any)() as any).append as any)("line") as any).attr as any)("class", (t: any): any => `wardley-link${(t as any).dashed ? " wardley-link--dashed" : ""}`) as any).attr as any)("x1", (t: any): any => {
      const s: any = ((c as any).get as any)((t as any).source),
        n: any = ((c as any).get as any)((t as any).target),
        p: any = ((((g as any).nodes as any).find as any)((y: any): any => ((y as any).id as any) === ((t as any).source as any)) as any).isPipelineParent ? (w as any) / (((Math as any).sqrt as any)(2) as any) : (a as any).nodeRadius,
        l: any = ((n as any).x as any) - ((s as any).x as any),
        f: any = ((n as any).y as any) - ((s as any).y as any),
        x: any = ((Math as any).sqrt as any)(((l as any) * (l as any) as any) + ((f as any) * (f as any) as any));
      return ((s as any).x as any) + (((l as any) / (x as any) as any) * (p as any) as any);
    }) as any).attr as any)("y1", (t: any): any => {
      const s: any = ((c as any).get as any)((t as any).source),
        n: any = ((c as any).get as any)((t as any).target),
        p: any = ((((g as any).nodes as any).find as any)((y: any): any => ((y as any).id as any) === ((t as any).source as any)) as any).isPipelineParent ? (w as any) / (((Math as any).sqrt as any)(2) as any) : (a as any).nodeRadius,
        l: any = ((n as any).x as any) - ((s as any).x as any),
        f: any = ((n as any).y as any) - ((s as any).y as any),
        x: any = ((Math as any).sqrt as any)(((l as any) * (l as any) as any) + ((f as any) * (f as any) as any));
      return ((s as any).y as any) + (((f as any) / (x as any) as any) * (p as any) as any);
    }) as any).attr as any)("x2", (t: any): any => {
      const s: any = ((c as any).get as any)((t as any).source),
        n: any = ((c as any).get as any)((t as any).target),
        p: any = ((((g as any).nodes as any).find as any)((y: any): any => ((y as any).id as any) === ((t as any).target as any)) as any).isPipelineParent ? (w as any) / (((Math as any).sqrt as any)(2) as any) : (a as any).nodeRadius,
        l: any = ((s as any).x as any) - ((n as any).x as any),
        f: any = ((s as any).y as any) - ((n as any).y as any),
        x: any = ((Math as any).sqrt as any)(((l as any) * (l as any) as any) + ((f as any) * (f as any) as any));
      return ((n as any).x as any) + (((l as any) / (x as any) as any) * (p as any) as any);
    }) as any).attr as any)("y2", (t: any): any => {
      const s: any = ((c as any).get as any)((t as any).source),
        n: any = ((c as any).get as any)((t as any).target),
        p: any = ((((g as any).nodes as any).find as any)((y: any): any => ((y as any).id as any) === ((t as any).target as any)) as any).isPipelineParent ? (w as any) / (((Math as any).sqrt as any)(2) as any) : (a as any).nodeRadius,
        l: any = ((s as any).x as any) - ((n as any).x as any),
        f: any = ((s as any).y as any) - ((n as any).y as any),
        x: any = ((Math as any).sqrt as any)(((l as any) * (l as any) as any) + ((f as any) * (f as any) as any));
      return ((n as any).y as any) + (((f as any) / (x as any) as any) * (p as any) as any);
    }) as any).attr as any)("stroke", (d as any).linkStroke) as any).attr as any)("stroke-width", 1) as any).attr as any)("stroke-dasharray", (t: any): any => (t as any).dashed ? "6 6" : null) as any).attr as any)("marker-end", (t: any): any => ((t as any).flow as any) === ("forward" as any) || ((t as any).flow as any) === ("bidirectional" as any) ? `url(#link-arrow-end-${r})` : null) as any).attr as any)("marker-start", (t: any): any => ((t as any).flow as any) === ("backward" as any) || ((t as any).flow as any) === ("bidirectional" as any) ? `url(#link-arrow-start-${r})` : null), ((((((((((((((((((((((((((_ as any).selectAll as any)("text") as any).data as any)(((U as any).filter as any)((t: any): any => (t as any).label)) as any).enter as any)() as any).append as any)("text") as any).attr as any)("class", "wardley-link-label") as any).attr as any)("x", (t: any): any => {
      const s: any = ((c as any).get as any)((t as any).source),
        n: any = ((c as any).get as any)((t as any).target),
        i: any = (((s as any).x as any) + ((n as any).x as any) as any) / (2 as any),
        p: any = ((n as any).y as any) - ((s as any).y as any),
        l: any = ((n as any).x as any) - ((s as any).x as any),
        f: any = ((Math as any).sqrt as any)(((l as any) * (l as any) as any) + ((p as any) * (p as any) as any)),
        x: number = 8,
        y: any = (p as any) / (f as any);
      return (i as any) + ((y as any) * (x as any) as any);
    }) as any).attr as any)("y", (t: any): any => {
      const s: any = ((c as any).get as any)((t as any).source),
        n: any = ((c as any).get as any)((t as any).target),
        i: any = (((s as any).y as any) + ((n as any).y as any) as any) / (2 as any),
        p: any = ((n as any).x as any) - ((s as any).x as any),
        l: any = ((n as any).y as any) - ((s as any).y as any),
        f: any = ((Math as any).sqrt as any)(((p as any) * (p as any) as any) + ((l as any) * (l as any) as any)),
        x: number = 8,
        y: any = (-p as any) / (f as any);
      return (i as any) + ((y as any) * (x as any) as any);
    }) as any).attr as any)("fill", (d as any).axisTextColor) as any).attr as any)("font-size", (a as any).labelFontSize) as any).attr as any)("text-anchor", "middle") as any).attr as any)("dominant-baseline", "middle") as any).attr as any)("transform", (t: any): any => {
      const s: any = ((c as any).get as any)((t as any).source),
        n: any = ((c as any).get as any)((t as any).target),
        i: any = (((s as any).x as any) + ((n as any).x as any) as any) / (2 as any),
        p: any = (((s as any).y as any) + ((n as any).y as any) as any) / (2 as any),
        l: any = ((n as any).x as any) - ((s as any).x as any),
        f: any = ((n as any).y as any) - ((s as any).y as any),
        x: any = ((Math as any).sqrt as any)(((l as any) * (l as any) as any) + ((f as any) * (f as any) as any)),
        y: number = 8,
        m: any = (f as any) / (x as any),
        P: any = (-l as any) / (x as any),
        N: any = (i as any) + ((m as any) * (y as any) as any),
        W: any = (p as any) + ((P as any) * (y as any) as any);
      let X: any = ((((Math as any).atan2 as any)(f, l) as any) * (180 as any) as any) / ((Math as any).PI as any);
      return ((X as any) > (90 as any) || (X as any) < (-90 as any)) && (X += 180), `rotate(${X} ${N} ${W})`;
    }) as any).text as any)((t: any): any => (t as any).label);
    const kt: any = ((((v as any).append as any)("g") as any).attr as any)("class", "wardley-trends"),
      bt: any = (((((g as any).trends as any).map as any)((t: any): any => {
        const s: any = ((c as any).get as any)((t as any).nodeId);
        if (!s) return null;
        const n: any = (z as any)((t as any).targetX),
          i: any = (L as any)((t as any).targetY),
          p: any = (n as any) - ((s as any).x as any),
          l: any = (i as any) - ((s as any).y as any),
          f: any = ((Math as any).sqrt as any)(((p as any) * (p as any) as any) + ((l as any) * (l as any) as any)),
          x: any = ((a as any).nodeRadius as any) + (2 as any),
          y: any = (f as any) > (x as any) ? (n as any) - (((p as any) / (f as any) as any) * (x as any) as any) : n,
          m: any = (f as any) > (x as any) ? (i as any) - (((l as any) / (f as any) as any) * (x as any) as any) : i;
        return {
          origin: s,
          targetX: n,
          targetY: i,
          adjustedX2: y,
          adjustedY2: m
        };
      }) as any).filter as any)((t: any): any => (t as any) !== (null as any));
    ((((((((((((((((((((((((((kt as any).selectAll as any)("line") as any).data as any)(bt) as any).enter as any)() as any).append as any)("line") as any).attr as any)("class", "wardley-trend") as any).attr as any)("x1", (t: any): any => ((t as any).origin as any).x) as any).attr as any)("y1", (t: any): any => ((t as any).origin as any).y) as any).attr as any)("x2", (t: any): any => (t as any).adjustedX2) as any).attr as any)("y2", (t: any): any => (t as any).adjustedY2) as any).attr as any)("stroke", (d as any).evolutionStroke) as any).attr as any)("stroke-width", 1) as any).attr as any)("stroke-dasharray", "4 4") as any).attr as any)("marker-end", `url(#arrow-${r})`);
    const M: any = ((((((((((((((v as any).append as any)("g") as any).attr as any)("class", "wardley-nodes") as any).selectAll as any)("g") as any).data as any)((g as any).nodes) as any).enter as any)() as any).append as any)("g") as any).attr as any)("class", (t: any): any => ((((["wardley-node", (t as any).className ? `wardley-node--${(t as any).className}` : ""] as any).filter as any)(Boolean) as any).join as any)(" "));
    ((((((((((((((((((M as any).filter as any)((t: any): any => ((t as any).sourceStrategy as any) === ("outsource" as any)) as any).append as any)("circle") as any).attr as any)("class", "wardley-outsource-overlay") as any).attr as any)("cx", (t: any): any => (((c as any).get as any)((t as any).id) as any).x) as any).attr as any)("cy", (t: any): any => (((c as any).get as any)((t as any).id) as any).y) as any).attr as any)("r", ((a as any).nodeRadius as any) * (2 as any)) as any).attr as any)("fill", "#666") as any).attr as any)("stroke", (d as any).componentStroke) as any).attr as any)("stroke-width", 1), ((((((((((((((((((M as any).filter as any)((t: any): any => ((t as any).sourceStrategy as any) === ("buy" as any)) as any).append as any)("circle") as any).attr as any)("class", "wardley-buy-overlay") as any).attr as any)("cx", (t: any): any => (((c as any).get as any)((t as any).id) as any).x) as any).attr as any)("cy", (t: any): any => (((c as any).get as any)((t as any).id) as any).y) as any).attr as any)("r", ((a as any).nodeRadius as any) * (2 as any)) as any).attr as any)("fill", "#ccc") as any).attr as any)("stroke", (d as any).componentStroke) as any).attr as any)("stroke-width", 1), ((((((((((((((((((M as any).filter as any)((t: any): any => ((t as any).sourceStrategy as any) === ("build" as any)) as any).append as any)("circle") as any).attr as any)("class", "wardley-build-overlay") as any).attr as any)("cx", (t: any): any => (((c as any).get as any)((t as any).id) as any).x) as any).attr as any)("cy", (t: any): any => (((c as any).get as any)((t as any).id) as any).y) as any).attr as any)("r", ((a as any).nodeRadius as any) * (2 as any)) as any).attr as any)("fill", "#eee") as any).attr as any)("stroke", "#000") as any).attr as any)("stroke-width", 1);
    const T: any = ((M as any).filter as any)((t: any): any => ((t as any).sourceStrategy as any) === ("market" as any));
    ((((((((((((((((T as any).append as any)("circle") as any).attr as any)("class", "wardley-market-overlay") as any).attr as any)("cx", (t: any): any => (((c as any).get as any)((t as any).id) as any).x) as any).attr as any)("cy", (t: any): any => (((c as any).get as any)((t as any).id) as any).y) as any).attr as any)("r", ((a as any).nodeRadius as any) * (2 as any)) as any).attr as any)("fill", "white") as any).attr as any)("stroke", (d as any).componentStroke) as any).attr as any)("stroke-width", 1), ((((((((((((((((M as any).filter as any)((t: any): any => !(t as any).isPipelineParent && ((t as any).sourceStrategy as any) !== ("market" as any) && ((t as any).className as any) !== ("anchor" as any)) as any).append as any)("circle") as any).attr as any)("cx", (t: any): any => (((c as any).get as any)((t as any).id) as any).x) as any).attr as any)("cy", (t: any): any => (((c as any).get as any)((t as any).id) as any).y) as any).attr as any)("r", (a as any).nodeRadius) as any).attr as any)("fill", (d as any).componentFill) as any).attr as any)("stroke", (d as any).componentStroke) as any).attr as any)("stroke-width", 1);
    const H: any = ((a as any).nodeRadius as any) * (.7 as any),
      $: any = ((a as any).nodeRadius as any) * (1.2 as any);
    if (((((((((((((((((T as any).append as any)("line") as any).attr as any)("class", "wardley-market-line") as any).attr as any)("x1", (t: any): any => (((c as any).get as any)((t as any).id) as any).x) as any).attr as any)("y1", (t: any): any => ((((c as any).get as any)((t as any).id) as any).y as any) - ($ as any)) as any).attr as any)("x2", (t: any): any => ((((c as any).get as any)((t as any).id) as any).x as any) - (($ as any) * (((Math as any).cos as any)(((Math as any).PI as any) / (6 as any)) as any) as any)) as any).attr as any)("y2", (t: any): any => ((((c as any).get as any)((t as any).id) as any).y as any) + (($ as any) * (((Math as any).sin as any)(((Math as any).PI as any) / (6 as any)) as any) as any)) as any).attr as any)("stroke", (d as any).componentStroke) as any).attr as any)("stroke-width", 1), ((((((((((((((((T as any).append as any)("line") as any).attr as any)("class", "wardley-market-line") as any).attr as any)("x1", (t: any): any => ((((c as any).get as any)((t as any).id) as any).x as any) - (($ as any) * (((Math as any).cos as any)(((Math as any).PI as any) / (6 as any)) as any) as any)) as any).attr as any)("y1", (t: any): any => ((((c as any).get as any)((t as any).id) as any).y as any) + (($ as any) * (((Math as any).sin as any)(((Math as any).PI as any) / (6 as any)) as any) as any)) as any).attr as any)("x2", (t: any): any => ((((c as any).get as any)((t as any).id) as any).x as any) + (($ as any) * (((Math as any).cos as any)(((Math as any).PI as any) / (6 as any)) as any) as any)) as any).attr as any)("y2", (t: any): any => ((((c as any).get as any)((t as any).id) as any).y as any) + (($ as any) * (((Math as any).sin as any)(((Math as any).PI as any) / (6 as any)) as any) as any)) as any).attr as any)("stroke", (d as any).componentStroke) as any).attr as any)("stroke-width", 1), ((((((((((((((((T as any).append as any)("line") as any).attr as any)("class", "wardley-market-line") as any).attr as any)("x1", (t: any): any => ((((c as any).get as any)((t as any).id) as any).x as any) + (($ as any) * (((Math as any).cos as any)(((Math as any).PI as any) / (6 as any)) as any) as any)) as any).attr as any)("y1", (t: any): any => ((((c as any).get as any)((t as any).id) as any).y as any) + (($ as any) * (((Math as any).sin as any)(((Math as any).PI as any) / (6 as any)) as any) as any)) as any).attr as any)("x2", (t: any): any => (((c as any).get as any)((t as any).id) as any).x) as any).attr as any)("y2", (t: any): any => ((((c as any).get as any)((t as any).id) as any).y as any) - ($ as any)) as any).attr as any)("stroke", (d as any).componentStroke) as any).attr as any)("stroke-width", 1), ((((((((((((((((T as any).append as any)("circle") as any).attr as any)("class", "wardley-market-dot") as any).attr as any)("cx", (t: any): any => (((c as any).get as any)((t as any).id) as any).x) as any).attr as any)("cy", (t: any): any => ((((c as any).get as any)((t as any).id) as any).y as any) - ($ as any)) as any).attr as any)("r", H) as any).attr as any)("fill", "white") as any).attr as any)("stroke", (d as any).componentStroke) as any).attr as any)("stroke-width", 2), ((((((((((((((((T as any).append as any)("circle") as any).attr as any)("class", "wardley-market-dot") as any).attr as any)("cx", (t: any): any => ((((c as any).get as any)((t as any).id) as any).x as any) - (($ as any) * (((Math as any).cos as any)(((Math as any).PI as any) / (6 as any)) as any) as any)) as any).attr as any)("cy", (t: any): any => ((((c as any).get as any)((t as any).id) as any).y as any) + (($ as any) * (((Math as any).sin as any)(((Math as any).PI as any) / (6 as any)) as any) as any)) as any).attr as any)("r", H) as any).attr as any)("fill", "white") as any).attr as any)("stroke", (d as any).componentStroke) as any).attr as any)("stroke-width", 2), ((((((((((((((((T as any).append as any)("circle") as any).attr as any)("class", "wardley-market-dot") as any).attr as any)("cx", (t: any): any => ((((c as any).get as any)((t as any).id) as any).x as any) + (($ as any) * (((Math as any).cos as any)(((Math as any).PI as any) / (6 as any)) as any) as any)) as any).attr as any)("cy", (t: any): any => ((((c as any).get as any)((t as any).id) as any).y as any) + (($ as any) * (((Math as any).sin as any)(((Math as any).PI as any) / (6 as any)) as any) as any)) as any).attr as any)("r", H) as any).attr as any)("fill", "white") as any).attr as any)("stroke", (d as any).componentStroke) as any).attr as any)("stroke-width", 2), ((((((((((((((((((M as any).filter as any)((t: any): any => ((t as any).isPipelineParent as any) === (!0 as any)) as any).append as any)("rect") as any).attr as any)("x", (t: any): any => ((((c as any).get as any)((t as any).id) as any).x as any) - ((w as any) / (2 as any) as any)) as any).attr as any)("y", (t: any): any => ((((c as any).get as any)((t as any).id) as any).y as any) - ((w as any) / (2 as any) as any)) as any).attr as any)("width", w) as any).attr as any)("height", w) as any).attr as any)("fill", (d as any).componentFill) as any).attr as any)("stroke", (d as any).componentStroke) as any).attr as any)("stroke-width", 1), ((((((((((((((((((M as any).filter as any)((t: any): any => ((t as any).inertia as any) === (!0 as any)) as any).append as any)("line") as any).attr as any)("class", "wardley-inertia") as any).attr as any)("x1", (t: any): any => {
      const s: any = ((c as any).get as any)((t as any).id);
      let n: any = (t as any).isPipelineParent ? ((w as any) / (2 as any) as any) + (15 as any) : ((a as any).nodeRadius as any) + (15 as any);
      return (t as any).sourceStrategy && (n += ((a as any).nodeRadius as any) + (10 as any)), ((s as any).x as any) + (n as any);
    }) as any).attr as any)("y1", (t: any): any => {
      const s: any = ((c as any).get as any)((t as any).id),
        n: any = (t as any).isPipelineParent ? w : ((a as any).nodeRadius as any) * (2 as any);
      return ((s as any).y as any) - ((n as any) / (2 as any) as any);
    }) as any).attr as any)("x2", (t: any): any => {
      const s: any = ((c as any).get as any)((t as any).id);
      let n: any = (t as any).isPipelineParent ? ((w as any) / (2 as any) as any) + (15 as any) : ((a as any).nodeRadius as any) + (15 as any);
      return (t as any).sourceStrategy && (n += ((a as any).nodeRadius as any) + (10 as any)), ((s as any).x as any) + (n as any);
    }) as any).attr as any)("y2", (t: any): any => {
      const s: any = ((c as any).get as any)((t as any).id),
        n: any = (t as any).isPipelineParent ? w : ((a as any).nodeRadius as any) * (2 as any);
      return ((s as any).y as any) + ((n as any) / (2 as any) as any);
    }) as any).attr as any)("stroke", (d as any).componentStroke) as any).attr as any)("stroke-width", 6), ((((((((((((((((((((M as any).append as any)("text") as any).attr as any)("x", (t: any): any => {
      const s: any = ((c as any).get as any)((t as any).id);
      if (((t as any).className as any) === ("anchor" as any)) return ((t as any).labelOffsetX as any) !== (void 0 as any) ? ((s as any).x as any) + ((t as any).labelOffsetX as any) : (s as any).x;
      let n: any = (a as any).nodeLabelOffset;
      (t as any).sourceStrategy && ((t as any).labelOffsetX as any) === (void 0 as any) && (n += 10);
      const i: any = (t as any).labelOffsetX ?? n;
      return ((s as any).x as any) + (i as any);
    }) as any).attr as any)("y", (t: any): any => {
      const s: any = ((c as any).get as any)((t as any).id);
      if (((t as any).className as any) === ("anchor" as any)) return ((t as any).labelOffsetY as any) !== (void 0 as any) ? ((s as any).y as any) + ((t as any).labelOffsetY as any) : ((s as any).y as any) - (3 as any);
      let n: any = -(a as any).nodeLabelOffset;
      (t as any).sourceStrategy && ((t as any).labelOffsetY as any) === (void 0 as any) && (n -= 10);
      const i: any = (t as any).labelOffsetY ?? n;
      return ((s as any).y as any) + (i as any);
    }) as any).attr as any)("class", "wardley-node-label") as any).attr as any)("fill", (t: any): any => ((t as any).className as any) === ("evolved" as any) ? (d as any).evolutionStroke : ((t as any).className as any) === ("anchor" as any) ? "#000" : (d as any).componentLabelColor) as any).attr as any)("font-size", (a as any).labelFontSize) as any).attr as any)("font-weight", (t: any): any => ((t as any).className as any) === ("anchor" as any) ? "bold" : "normal") as any).attr as any)("text-anchor", (t: any): any => ((t as any).className as any) === ("anchor" as any) ? "middle" : "start") as any).attr as any)("dominant-baseline", (t: any): any => ((t as any).className as any) === ("anchor" as any) ? "middle" : "auto") as any).text as any)((t: any): any => (t as any).label), (((g as any).annotations as any).length as any) > (0 as any)) {
      const t: any = ((((v as any).append as any)("g") as any).attr as any)("class", "wardley-annotations");
      if ((((g as any).annotations as any).forEach as any)((s: any): any => {
        const n: any = (((s as any).coordinates as any).map as any)((i: any): any => ({
          x: (z as any)((i as any).x),
          y: (L as any)((i as any).y)
        }));
        if (((n as any).length as any) > (1 as any)) for (let i: any = 0; (i as any) < (((n as any).length as any) - (1 as any) as any); i++) ((((((((((((((((((t as any).append as any)("line") as any).attr as any)("class", "wardley-annotation-line") as any).attr as any)("x1", ((n as any)[i] as any).x) as any).attr as any)("y1", ((n as any)[i] as any).y) as any).attr as any)("x2", ((n as any)[(i as any) + (1 as any)] as any).x) as any).attr as any)("y2", ((n as any)[(i as any) + (1 as any)] as any).y) as any).attr as any)("stroke", (d as any).axisColor) as any).attr as any)("stroke-width", 1.5) as any).attr as any)("stroke-dasharray", "4 4");
        ((n as any).forEach as any)((i: any): any => {
          const p: any = ((((t as any).append as any)("g") as any).attr as any)("class", "wardley-annotation");
          ((((((((((((((p as any).append as any)("circle") as any).attr as any)("cx", (i as any).x) as any).attr as any)("cy", (i as any).y) as any).attr as any)("r", 10) as any).attr as any)("fill", "white") as any).attr as any)("stroke", (d as any).axisColor) as any).attr as any)("stroke-width", 1.5), ((((((((((((((((((p as any).append as any)("text") as any).attr as any)("x", (i as any).x) as any).attr as any)("y", (i as any).y) as any).attr as any)("text-anchor", "middle") as any).attr as any)("dominant-baseline", "central") as any).attr as any)("font-size", 10) as any).attr as any)("fill", (d as any).axisTextColor) as any).attr as any)("font-weight", "bold") as any).text as any)((s as any).number);
        });
      }), (g as any).annotationsBox) {
        let s: any = (z as any)(((g as any).annotationsBox as any).x),
          n: any = (L as any)(((g as any).annotationsBox as any).y);
        const i: number = 10,
          p: number = 16,
          l: number = 11,
          f: any = ((((t as any).append as any)("g") as any).attr as any)("class", "wardley-annotations-box"),
          x: any = (((([...(g as any).annotations] as any).filter as any)((m: any): any => (m as any).text) as any).sort as any)((m: any, P: any): any => ((m as any).number as any) - ((P as any).number as any)),
          y: any = [];
        if (((x as any).forEach as any)((m: any, P: any): any => {
          const N: any = ((((((((((((((((f as any).append as any)("text") as any).attr as any)("x", (s as any) + (i as any)) as any).attr as any)("y", ((n as any) + (i as any) as any) + (((P as any) + (1 as any) as any) * (p as any) as any)) as any).attr as any)("font-size", l) as any).attr as any)("fill", (d as any).axisTextColor) as any).attr as any)("text-anchor", "start") as any).attr as any)("dominant-baseline", "middle") as any).text as any)(`${(m as any).number}. ${(m as any).text}`);
          ((y as any).push as any)(N);
        }), ((y as any).length as any) > (0 as any)) {
          let m: any = 0,
            P: any = 0;
          ((y as any).forEach as any)((j: any): any => {
            const D: any = ((j as any).node as any)(),
              Ct: any = ((D as any).getComputedTextLength as any)();
            m = ((Math as any).max as any)(m, Ct);
            const St: any = ((D as any).getBBox as any)();
            P = ((Math as any).max as any)(P, (St as any).height);
          });
          const N: any = ((m as any) + ((i as any) * (2 as any) as any) as any) + (105 as any),
            W: any = ((((x as any).length as any) * (p as any) as any) + ((i as any) * (2 as any) as any) as any) + ((P as any) / (2 as any) as any),
            X: any = (a as any).padding,
            $t: any = ((S as any) - ((a as any).padding as any) as any) - (N as any),
            vt: any = (a as any).padding,
            Pt: any = ((b as any) - ((a as any).padding as any) as any) - (W as any);
          s = ((Math as any).max as any)(X, ((Math as any).min as any)(s, $t)), n = ((Math as any).max as any)(vt, ((Math as any).min as any)(n, Pt)), ((y as any).forEach as any)((j: any, D: any): any => {
            ((((j as any).attr as any)("x", (s as any) + (i as any)) as any).attr as any)("y", ((n as any) + (i as any) as any) + (((D as any) + (1 as any) as any) * (p as any) as any));
          }), ((((((((((((((((((((f as any).insert as any)("rect", "text") as any).attr as any)("x", s) as any).attr as any)("y", n) as any).attr as any)("width", N) as any).attr as any)("height", W) as any).attr as any)("fill", "white") as any).attr as any)("stroke", (d as any).axisColor) as any).attr as any)("stroke-width", 1.5) as any).attr as any)("rx", 4) as any).attr as any)("ry", 4);
        }
      }
    }
    if ((((g as any).notes as any).length as any) > (0 as any)) {
      const t: any = ((((v as any).append as any)("g") as any).attr as any)("class", "wardley-notes");
      (((g as any).notes as any).forEach as any)((s: any): any => {
        const n: any = (z as any)((s as any).x),
          i: any = (L as any)((s as any).y);
        ((((((((((((((((t as any).append as any)("text") as any).attr as any)("x", n) as any).attr as any)("y", i) as any).attr as any)("text-anchor", "start") as any).attr as any)("font-size", 11) as any).attr as any)("fill", (d as any).axisTextColor) as any).attr as any)("font-weight", "bold") as any).text as any)((s as any).text);
      });
    }
    if ((((g as any).accelerators as any).length as any) > (0 as any)) {
      const t: any = ((((v as any).append as any)("g") as any).attr as any)("class", "wardley-accelerators");
      (((g as any).accelerators as any).forEach as any)((s: any): any => {
        const n: any = (z as any)((s as any).x),
          i: any = (L as any)((s as any).y),
          p: number = 60,
          l: number = 30,
          f: number = 20,
          x: any = `
        M ${n} ${(i as any) - ((l as any) / (2 as any) as any)}
        L ${((n as any) + (p as any) as any) - (f as any)} ${(i as any) - ((l as any) / (2 as any) as any)}
        L ${((n as any) + (p as any) as any) - (f as any)} ${((i as any) - ((l as any) / (2 as any) as any) as any) - (8 as any)}
        L ${(n as any) + (p as any)} ${i}
        L ${((n as any) + (p as any) as any) - (f as any)} ${((i as any) + ((l as any) / (2 as any) as any) as any) + (8 as any)}
        L ${((n as any) + (p as any) as any) - (f as any)} ${(i as any) + ((l as any) / (2 as any) as any)}
        L ${n} ${(i as any) + ((l as any) / (2 as any) as any)}
        Z
      `;
        ((((((((((t as any).append as any)("path") as any).attr as any)("d", x) as any).attr as any)("fill", "white") as any).attr as any)("stroke", (d as any).componentStroke) as any).attr as any)("stroke-width", 1), ((((((((((((((((t as any).append as any)("text") as any).attr as any)("x", (n as any) + ((p as any) / (2 as any) as any)) as any).attr as any)("y", ((i as any) + ((l as any) / (2 as any) as any) as any) + (15 as any)) as any).attr as any)("text-anchor", "middle") as any).attr as any)("font-size", 10) as any).attr as any)("fill", (d as any).axisTextColor) as any).attr as any)("font-weight", "bold") as any).text as any)((s as any).name);
      });
    }
    if ((((g as any).deaccelerators as any).length as any) > (0 as any)) {
      const t: any = ((((v as any).append as any)("g") as any).attr as any)("class", "wardley-deaccelerators");
      (((g as any).deaccelerators as any).forEach as any)((s: any): any => {
        const n: any = (z as any)((s as any).x),
          i: any = (L as any)((s as any).y),
          p: number = 60,
          l: number = 30,
          f: number = 20,
          x: any = `
        M ${(n as any) + (p as any)} ${(i as any) - ((l as any) / (2 as any) as any)}
        L ${(n as any) + (f as any)} ${(i as any) - ((l as any) / (2 as any) as any)}
        L ${(n as any) + (f as any)} ${((i as any) - ((l as any) / (2 as any) as any) as any) - (8 as any)}
        L ${n} ${i}
        L ${(n as any) + (f as any)} ${((i as any) + ((l as any) / (2 as any) as any) as any) + (8 as any)}
        L ${(n as any) + (f as any)} ${(i as any) + ((l as any) / (2 as any) as any)}
        L ${(n as any) + (p as any)} ${(i as any) + ((l as any) / (2 as any) as any)}
        Z
      `;
        ((((((((((t as any).append as any)("path") as any).attr as any)("d", x) as any).attr as any)("fill", "white") as any).attr as any)("stroke", (d as any).componentStroke) as any).attr as any)("stroke-width", 1), ((((((((((((((((t as any).append as any)("text") as any).attr as any)("x", (n as any) + ((p as any) / (2 as any) as any)) as any).attr as any)("y", ((i as any) + ((l as any) / (2 as any) as any) as any) + (15 as any)) as any).attr as any)("text-anchor", "middle") as any).attr as any)("font-size", 10) as any).attr as any)("fill", (d as any).axisTextColor) as any).attr as any)("font-weight", "bold") as any).text as any)((s as any).name);
      });
    }
  }, "draw"),
  _t: any = {
    draw: Vt
  },
  Zt: any = (u as any)(({
    wardley: o
  }: any = {}): any => {
    const r: any = (Et as any)(),
      e: any = (Yt as any)(),
      h: any = (J as any)(r, (e as any).themeVariables),
      a: any = (J as any)((h as any).wardley, o);
    return `
  .wardley-background {
    fill: ${(a as any).backgroundColor};
  }
  .wardley-axes line, .wardley-axes path {
    stroke: ${(a as any).axisColor};
  }
  .wardley-axis-label {
    fill: ${(a as any).axisTextColor};
  }
  .wardley-stage-label {
    fill: ${(a as any).axisTextColor};
  }
  .wardley-grid line {
    stroke: ${(a as any).gridColor};
  }
  .wardley-node circle {
    fill: ${(a as any).componentFill};
    stroke: ${(a as any).componentStroke};
  }
  .wardley-node-label {
    fill: ${(a as any).componentLabelColor};
  }
  .wardley-link {
    stroke: ${(a as any).linkStroke};
  }
  .wardley-link--dashed {
    stroke-dasharray: 4 4;
  }
  .wardley-link-label {
    fill: ${(a as any).axisTextColor};
  }
  .wardley-trend line {
    stroke: ${(a as any).evolutionStroke};
  }
  .wardley-annotation-line {
    stroke: ${(a as any).annotationStroke};
  }
  .wardley-annotation circle {
    fill: ${(a as any).annotationFill};
    stroke: ${(a as any).annotationStroke};
  }
  .wardley-annotation text {
    fill: ${(a as any).annotationTextColor};
  }
  .wardley-annotations-box rect {
    fill: ${(a as any).annotationFill};
    stroke: ${(a as any).annotationStroke};
  }
  .wardley-annotations-box text {
    fill: ${(a as any).annotationTextColor};
  }
  .wardley-pipeline-box {
    stroke: ${(a as any).componentStroke};
  }
  .wardley-notes text {
    fill: ${(a as any).axisTextColor};
  }
  `;
  }, "styles"),
  ee: any = {
    parser: tt,
    db: Gt,
    renderer: _t,
    styles: Zt
  };
export { ee as diagram };
//# debugId=bd7bd607-aabd-4ea3-b80b-b8a4748469f3
