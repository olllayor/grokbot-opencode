declare var document: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "15ae5f46-535f-444d-8e52-98a60c05c0f2", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-15ae5f46-535f-444d-8e52-98a60c05c0f2");
  } catch (e: any) {}
} as any)();
import { s as R, a as W, S as N } from "./chunk-chunk-EX3LRPZG-CXrsEYy0.js";
import { _ as f, c as t, d as H, l as S, e as P, k as z, a7 as _, a8 as U, a3 as C, y as F } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { G as O } from "./chunk-graph-BvS0Xx32.js";
import { l as J } from "./chunk-layout-ChWKu-Sy.js";
import "./chunk-chunk-XXDRQBXY-DVdINg3t.js";
import "./chunk-chunk-VR4S4FIN-HF2Hbh9A.js";
import "./chunk-chunk-32BRIVSS-CL4hvhVG.js";
import "./index.eager-vendor-Qbf9YA6n.js";
import "./chunk-map-Bpb79OOT.js";
var X: any = (f as any)((e: any): any => ((((((((((e as any).append as any)("circle") as any).attr as any)("class", "start-state") as any).attr as any)("r", (((t as any)() as any).state as any).sizeUnit) as any).attr as any)("cx", ((((t as any)() as any).state as any).padding as any) + ((((t as any)() as any).state as any).sizeUnit as any)) as any).attr as any)("cy", ((((t as any)() as any).state as any).padding as any) + ((((t as any)() as any).state as any).sizeUnit as any)), "drawStartState"),
  D: any = (f as any)((e: any): any => ((((((((((((((((e as any).append as any)("line") as any).style as any)("stroke", "grey") as any).style as any)("stroke-dasharray", "3") as any).attr as any)("x1", (((t as any)() as any).state as any).textHeight) as any).attr as any)("class", "divider") as any).attr as any)("x2", ((((t as any)() as any).state as any).textHeight as any) * (2 as any)) as any).attr as any)("y1", 0) as any).attr as any)("y2", 0), "drawDivider"),
  Y: any = (f as any)((e: any, i: any): any => {
    const d: any = ((((((((((((e as any).append as any)("text") as any).attr as any)("x", (2 as any) * ((((t as any)() as any).state as any).padding as any)) as any).attr as any)("y", ((((t as any)() as any).state as any).textHeight as any) + ((2 as any) * ((((t as any)() as any).state as any).padding as any) as any)) as any).attr as any)("font-size", (((t as any)() as any).state as any).fontSize) as any).attr as any)("class", "state-title") as any).text as any)((i as any).id),
      c: any = ((((d as any).node as any)() as any).getBBox as any)();
    return ((((((((((((e as any).insert as any)("rect", ":first-child") as any).attr as any)("x", (((t as any)() as any).state as any).padding) as any).attr as any)("y", (((t as any)() as any).state as any).padding) as any).attr as any)("width", ((c as any).width as any) + ((2 as any) * ((((t as any)() as any).state as any).padding as any) as any)) as any).attr as any)("height", ((c as any).height as any) + ((2 as any) * ((((t as any)() as any).state as any).padding as any) as any)) as any).attr as any)("rx", (((t as any)() as any).state as any).radius), d;
  }, "drawSimpleState"),
  I: any = (f as any)((e: any, i: any): any => {
    const d: any = (f as any)(function (this: any, o: any, B: any, y: any): any {
        const v: any = ((((((o as any).append as any)("tspan") as any).attr as any)("x", (2 as any) * ((((t as any)() as any).state as any).padding as any)) as any).text as any)(B);
        y || ((v as any).attr as any)("dy", (((t as any)() as any).state as any).textHeight);
      }, "addTspan"),
      n: any = ((((((((((((((((e as any).append as any)("text") as any).attr as any)("x", (2 as any) * ((((t as any)() as any).state as any).padding as any)) as any).attr as any)("y", ((((t as any)() as any).state as any).textHeight as any) + ((1.3 as any) * ((((t as any)() as any).state as any).padding as any) as any)) as any).attr as any)("font-size", (((t as any)() as any).state as any).fontSize) as any).attr as any)("class", "state-title") as any).text as any)(((i as any).descriptions as any)[0]) as any).node as any)() as any).getBBox as any)(),
      l: any = (n as any).height,
      p: any = ((((((((e as any).append as any)("text") as any).attr as any)("x", (((t as any)() as any).state as any).padding) as any).attr as any)("y", (((l as any) + (((((t as any)() as any).state as any).padding as any) * (.4 as any) as any) as any) + ((((t as any)() as any).state as any).dividerMargin as any) as any) + ((((t as any)() as any).state as any).textHeight as any)) as any).attr as any)("class", "state-description");
    let a: any = !0,
      s: any = !0;
    (((i as any).descriptions as any).forEach as any)(function (this: any, o: any): any {
      a || ((d as any)(p, o, s), s = !1), a = !1;
    });
    const m: any = ((((((((((e as any).append as any)("line") as any).attr as any)("x1", (((t as any)() as any).state as any).padding) as any).attr as any)("y1", (((((t as any)() as any).state as any).padding as any) + (l as any) as any) + (((((t as any)() as any).state as any).dividerMargin as any) / (2 as any) as any)) as any).attr as any)("y2", (((((t as any)() as any).state as any).padding as any) + (l as any) as any) + (((((t as any)() as any).state as any).dividerMargin as any) / (2 as any) as any)) as any).attr as any)("class", "descr-divider"),
      x: any = ((((p as any).node as any)() as any).getBBox as any)(),
      g: any = ((Math as any).max as any)((x as any).width, (n as any).width);
    return ((m as any).attr as any)("x2", (g as any) + ((3 as any) * ((((t as any)() as any).state as any).padding as any) as any)), ((((((((((((e as any).insert as any)("rect", ":first-child") as any).attr as any)("x", (((t as any)() as any).state as any).padding) as any).attr as any)("y", (((t as any)() as any).state as any).padding) as any).attr as any)("width", (g as any) + ((2 as any) * ((((t as any)() as any).state as any).padding as any) as any)) as any).attr as any)("height", (((x as any).height as any) + (l as any) as any) + ((2 as any) * ((((t as any)() as any).state as any).padding as any) as any)) as any).attr as any)("rx", (((t as any)() as any).state as any).radius), e;
  }, "drawDescrState"),
  $: any = (f as any)((e: any, i: any, d: any): any => {
    const c: any = (((t as any)() as any).state as any).padding,
      n: any = (2 as any) * ((((t as any)() as any).state as any).padding as any),
      l: any = ((((e as any).node as any)() as any).getBBox as any)(),
      p: any = (l as any).width,
      a: any = (l as any).x,
      s: any = ((((((((((((e as any).append as any)("text") as any).attr as any)("x", 0) as any).attr as any)("y", (((t as any)() as any).state as any).titleShift) as any).attr as any)("font-size", (((t as any)() as any).state as any).fontSize) as any).attr as any)("class", "state-title") as any).text as any)((i as any).id),
      x: any = ((((((s as any).node as any)() as any).getBBox as any)() as any).width as any) + (n as any);
    let g: any = ((Math as any).max as any)(x, p);
    (g as any) === (p as any) && (g = (g as any) + (n as any));
    let o: any;
    const B: any = ((((e as any).node as any)() as any).getBBox as any)();
    (i as any).doc, o = (a as any) - (c as any), (x as any) > (p as any) && (o = (((p as any) - (g as any) as any) / (2 as any) as any) + (c as any)), (((Math as any).abs as any)((a as any) - ((B as any).x as any)) as any) < (c as any) && (x as any) > (p as any) && (o = (a as any) - (((x as any) - (p as any) as any) / (2 as any) as any));
    const y: any = (1 as any) - ((((t as any)() as any).state as any).textHeight as any);
    return ((((((((((((((e as any).insert as any)("rect", ":first-child") as any).attr as any)("x", o) as any).attr as any)("y", y) as any).attr as any)("class", d ? "alt-composit" : "composit") as any).attr as any)("width", g) as any).attr as any)("height", ((((B as any).height as any) + ((((t as any)() as any).state as any).textHeight as any) as any) + ((((t as any)() as any).state as any).titleShift as any) as any) + (1 as any)) as any).attr as any)("rx", "0"), ((s as any).attr as any)("x", (o as any) + (c as any)), (x as any) <= (p as any) && ((s as any).attr as any)("x", (((a as any) + (((g as any) - (n as any) as any) / (2 as any) as any) as any) - ((x as any) / (2 as any) as any) as any) + (c as any)), ((((((((((((e as any).insert as any)("rect", ":first-child") as any).attr as any)("x", o) as any).attr as any)("y", (((((t as any)() as any).state as any).titleShift as any) - ((((t as any)() as any).state as any).textHeight as any) as any) - ((((t as any)() as any).state as any).padding as any)) as any).attr as any)("width", g) as any).attr as any)("height", ((((t as any)() as any).state as any).textHeight as any) * (3 as any)) as any).attr as any)("rx", (((t as any)() as any).state as any).radius), ((((((((((((e as any).insert as any)("rect", ":first-child") as any).attr as any)("x", o) as any).attr as any)("y", (((((t as any)() as any).state as any).titleShift as any) - ((((t as any)() as any).state as any).textHeight as any) as any) - ((((t as any)() as any).state as any).padding as any)) as any).attr as any)("width", g) as any).attr as any)("height", (((B as any).height as any) + (3 as any) as any) + ((2 as any) * ((((t as any)() as any).state as any).textHeight as any) as any)) as any).attr as any)("rx", (((t as any)() as any).state as any).radius), e;
  }, "addTitleAndBox"),
  q: any = (f as any)((e: any): any => (((((((((((e as any).append as any)("circle") as any).attr as any)("class", "end-state-outer") as any).attr as any)("r", ((((t as any)() as any).state as any).sizeUnit as any) + ((((t as any)() as any).state as any).miniPadding as any)) as any).attr as any)("cx", (((((t as any)() as any).state as any).padding as any) + ((((t as any)() as any).state as any).sizeUnit as any) as any) + ((((t as any)() as any).state as any).miniPadding as any)) as any).attr as any)("cy", (((((t as any)() as any).state as any).padding as any) + ((((t as any)() as any).state as any).sizeUnit as any) as any) + ((((t as any)() as any).state as any).miniPadding as any)), ((((((((((e as any).append as any)("circle") as any).attr as any)("class", "end-state-inner") as any).attr as any)("r", (((t as any)() as any).state as any).sizeUnit) as any).attr as any)("cx", (((((t as any)() as any).state as any).padding as any) + ((((t as any)() as any).state as any).sizeUnit as any) as any) + (2 as any)) as any).attr as any)("cy", (((((t as any)() as any).state as any).padding as any) + ((((t as any)() as any).state as any).sizeUnit as any) as any) + (2 as any))), "drawEndState"),
  Z: any = (f as any)((e: any, i: any): any => {
    let d: any = (((t as any)() as any).state as any).forkWidth,
      c: any = (((t as any)() as any).state as any).forkHeight;
    if ((i as any).parentId) {
      let n: any = d;
      d = c, c = n;
    }
    return ((((((((((((((e as any).append as any)("rect") as any).style as any)("stroke", "black") as any).style as any)("fill", "black") as any).attr as any)("width", d) as any).attr as any)("height", c) as any).attr as any)("x", (((t as any)() as any).state as any).padding) as any).attr as any)("y", (((t as any)() as any).state as any).padding);
  }, "drawForkJoinState"),
  j: any = (f as any)((e: any, i: any, d: any, c: any): any => {
    let n: any = 0;
    const l: any = ((c as any).append as any)("text");
    ((l as any).style as any)("text-anchor", "start"), ((l as any).attr as any)("class", "noteText");
    let p: any = ((e as any).replace as any)(/\r\n/g, "<br/>");
    p = ((p as any).replace as any)(/\n/g, "<br/>");
    const a: any = ((p as any).split as any)((z as any).lineBreakRegex);
    let s: any = (1.25 as any) * ((((t as any)() as any).state as any).noteMargin as any);
    for (const m of a) {
      const x: any = ((m as any).trim as any)();
      if (((x as any).length as any) > (0 as any)) {
        const g: any = ((l as any).append as any)("tspan");
        if (((g as any).text as any)(x), (s as any) === (0 as any)) {
          const o: any = ((((g as any).node as any)() as any).getBBox as any)();
          s += (o as any).height;
        }
        n += s, ((g as any).attr as any)("x", (i as any) + ((((t as any)() as any).state as any).noteMargin as any)), ((g as any).attr as any)("y", ((d as any) + (n as any) as any) + ((1.25 as any) * ((((t as any)() as any).state as any).noteMargin as any) as any));
      }
    }
    return {
      textWidth: (((((l as any).node as any)() as any).getBBox as any)() as any).width,
      textHeight: n
    };
  }, "_drawLongText"),
  K: any = (f as any)((e: any, i: any): any => {
    ((i as any).attr as any)("class", "state-note");
    const d: any = ((((((i as any).append as any)("rect") as any).attr as any)("x", 0) as any).attr as any)("y", (((t as any)() as any).state as any).padding),
      c: any = ((i as any).append as any)("g"),
      {
        textWidth: n,
        textHeight: l
      }: any = (j as any)(e, 0, 0, c);
    return ((d as any).attr as any)("height", (l as any) + ((2 as any) * ((((t as any)() as any).state as any).noteMargin as any) as any)), ((d as any).attr as any)("width", (n as any) + (((((t as any)() as any).state as any).noteMargin as any) * (2 as any) as any)), d;
  }, "drawNote"),
  L: any = (f as any)(function (this: any, e: any, i: any): any {
    const d: any = (i as any).id,
      c: any = {
        id: d,
        label: (i as any).id,
        width: 0,
        height: 0
      },
      n: any = ((((((e as any).append as any)("g") as any).attr as any)("id", d) as any).attr as any)("class", "stateGroup");
    ((i as any).type as any) === ("start" as any) && (X as any)(n), ((i as any).type as any) === ("end" as any) && (q as any)(n), (((i as any).type as any) === ("fork" as any) || ((i as any).type as any) === ("join" as any)) && (Z as any)(n, i), ((i as any).type as any) === ("note" as any) && (K as any)(((i as any).note as any).text, n), ((i as any).type as any) === ("divider" as any) && (D as any)(n), ((i as any).type as any) === ("default" as any) && (((i as any).descriptions as any).length as any) === (0 as any) && (Y as any)(n, i), ((i as any).type as any) === ("default" as any) && (((i as any).descriptions as any).length as any) > (0 as any) && (I as any)(n, i);
    const l: any = ((((n as any).node as any)() as any).getBBox as any)();
    return (c as any).width = ((l as any).width as any) + ((2 as any) * ((((t as any)() as any).state as any).padding as any) as any), (c as any).height = ((l as any).height as any) + ((2 as any) * ((((t as any)() as any).state as any).padding as any) as any), c;
  }, "drawState"),
  G: any = 0,
  Q: any = (f as any)(function (this: any, e: any, i: any, d: any): any {
    const c: any = (f as any)(function (this: any, s: any): any {
      switch (s) {
        case ((N as any).relationType as any).AGGREGATION:
          return "aggregation";
        case ((N as any).relationType as any).EXTENSION:
          return "extension";
        case ((N as any).relationType as any).COMPOSITION:
          return "composition";
        case ((N as any).relationType as any).DEPENDENCY:
          return "dependency";
      }
    }, "getRelationType");
    (i as any).points = (((i as any).points as any).filter as any)((s: any): any => !((Number as any).isNaN as any)((s as any).y));
    const n: any = (i as any).points,
      l: any = (((((((_ as any)() as any).x as any)(function (this: any, s: any): any {
        return (s as any).x;
      }) as any).y as any)(function (this: any, s: any): any {
        return (s as any).y;
      }) as any).curve as any)(U),
      p: any = ((((((((e as any).append as any)("path") as any).attr as any)("d", (l as any)(n)) as any).attr as any)("id", ("edge" as any) + (G as any)) as any).attr as any)("class", "transition");
    let a: any = "";
    if ((((t as any)() as any).state as any).arrowMarkerAbsolute && (a = (C as any)(!0)), ((p as any).attr as any)("marker-end", (((("url(" as any) + (a as any) as any) + ("#" as any) as any) + ((c as any)(((N as any).relationType as any).DEPENDENCY) as any) as any) + ("End)" as any)), ((d as any).title as any) !== (void 0 as any)) {
      const s: any = ((((e as any).append as any)("g") as any).attr as any)("class", "stateLabel"),
        {
          x: m,
          y: x
        }: any = ((F as any).calcLabelPosition as any)((i as any).points),
        g: any = ((z as any).getRows as any)((d as any).title);
      let o: any = 0;
      const B: any = [];
      let y: any = 0,
        v: any = 0;
      for (let u: any = 0; (u as any) <= ((g as any).length as any); u++) {
        const h: any = ((((((((((s as any).append as any)("text") as any).attr as any)("text-anchor", "middle") as any).text as any)((g as any)[u]) as any).attr as any)("x", m) as any).attr as any)("y", (x as any) + (o as any)),
          w: any = ((((h as any).node as any)() as any).getBBox as any)();
        y = ((Math as any).max as any)(y, (w as any).width), v = ((Math as any).min as any)(v, (w as any).x), ((S as any).info as any)((w as any).x, m, (x as any) + (o as any)), (o as any) === (0 as any) && (o = (((((h as any).node as any)() as any).getBBox as any)() as any).height, ((S as any).info as any)("Title height", o, x)), ((B as any).push as any)(h);
      }
      let k: any = (o as any) * ((g as any).length as any);
      if (((g as any).length as any) > (1 as any)) {
        const u: any = ((((g as any).length as any) - (1 as any) as any) * (o as any) as any) * (.5 as any);
        ((B as any).forEach as any)((h: any, w: any): any => ((h as any).attr as any)("y", ((x as any) + ((w as any) * (o as any) as any) as any) - (u as any))), k = (o as any) * ((g as any).length as any);
      }
      const r: any = ((((s as any).node as any)() as any).getBBox as any)();
      ((((((((((((s as any).insert as any)("rect", ":first-child") as any).attr as any)("class", "box") as any).attr as any)("x", ((m as any) - ((y as any) / (2 as any) as any) as any) - (((((t as any)() as any).state as any).padding as any) / (2 as any) as any)) as any).attr as any)("y", (((x as any) - ((k as any) / (2 as any) as any) as any) - (((((t as any)() as any).state as any).padding as any) / (2 as any) as any) as any) - (3.5 as any)) as any).attr as any)("width", (y as any) + ((((t as any)() as any).state as any).padding as any)) as any).attr as any)("height", (k as any) + ((((t as any)() as any).state as any).padding as any)), ((S as any).info as any)(r);
    }
    G++;
  }, "drawEdge"),
  b: any,
  T: any = {},
  V: any = (f as any)(function (this: any): any {}, "setConf"),
  tt: any = (f as any)(function (this: any, e: any): any {
    ((((((((((((((((((((e as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", "dependencyEnd") as any).attr as any)("refX", 19) as any).attr as any)("refY", 7) as any).attr as any)("markerWidth", 20) as any).attr as any)("markerHeight", 28) as any).attr as any)("orient", "auto") as any).append as any)("path") as any).attr as any)("d", "M 19,7 L9,13 L14,7 L9,1 Z");
  }, "insertMarkers"),
  et: any = (f as any)(function (this: any, e: any, i: any, d: any, c: any): any {
    b = ((t as any)() as any).state;
    const n: any = ((t as any)() as any).securityLevel;
    let l: any;
    (n as any) === ("sandbox" as any) && (l = (H as any)(("#i" as any) + (i as any)));
    const p: any = (n as any) === ("sandbox" as any) ? (H as any)((((((l as any).nodes as any)() as any)[0] as any).contentDocument as any).body) : (H as any)("body"),
      a: any = (n as any) === ("sandbox" as any) ? ((((l as any).nodes as any)() as any)[0] as any).contentDocument : document;
    ((S as any).debug as any)(("Rendering diagram " as any) + (e as any));
    const s: any = ((p as any).select as any)(`[id='${i}']`);
    (tt as any)(s);
    const m: any = (((c as any).db as any).getRootDoc as any)(),
      x: any = ((((s as any).append as any)("g") as any).attr as any)("id", (i as any) + ("-root" as any));
    (A as any)(m, x, void 0, !1, p, a, c);
    const g: any = (b as any).padding,
      o: any = ((((s as any).node as any)() as any).getBBox as any)(),
      B: any = ((o as any).width as any) + ((g as any) * (2 as any) as any),
      y: any = ((o as any).height as any) + ((g as any) * (2 as any) as any),
      v: any = (B as any) * (1.75 as any);
    (P as any)(s, y, v, (b as any).useMaxWidth), ((s as any).attr as any)("viewBox", (((`${((o as any).x as any) - ((b as any).padding as any)}  ${((o as any).y as any) - ((b as any).padding as any)} ` as any) + (B as any) as any) + (" " as any) as any) + (y as any));
  }, "draw"),
  at: any = (f as any)((e: any): any => e ? ((e as any).length as any) * ((b as any).fontSizeFactor as any) : 1, "getLabelWidth"),
  A: any = (f as any)((e: any, i: any, d: any, c: any, n: any, l: any, p: any): any => {
    const a: any = new (O as any)({
      compound: !0,
      multigraph: !0
    });
    let s: any,
      m: any = !0;
    for (s = 0; (s as any) < ((e as any).length as any); s++) if ((((e as any)[s] as any).stmt as any) === ("relation" as any)) {
      m = !1;
      break;
    }
    d ? ((a as any).setGraph as any)({
      rankdir: "LR",
      multigraph: !0,
      compound: !0,
      ranker: "tight-tree",
      ranksep: m ? 1 : (b as any).edgeLengthFactor,
      nodeSep: m ? 1 : 50,
      isMultiGraph: !0
    }) : ((a as any).setGraph as any)({
      rankdir: "TB",
      multigraph: !0,
      compound: !0,
      ranksep: m ? 1 : (b as any).edgeLengthFactor,
      nodeSep: m ? 1 : 50,
      ranker: "tight-tree",
      isMultiGraph: !0
    }), ((a as any).setDefaultEdgeLabel as any)(function (this: any): any {
      return {};
    });
    const x: any = (((p as any).db as any).getStates as any)(),
      g: any = (((p as any).db as any).getRelations as any)(),
      o: any = ((Object as any).keys as any)(x);
    for (const r of o) {
      const u: any = (x as any)[r];
      d && ((u as any).parentId = d);
      let h: any;
      if ((u as any).doc) {
        let w: any = ((((((i as any).append as any)("g") as any).attr as any)("id", (u as any).id) as any).attr as any)("class", "stateGroup");
        h = (A as any)((u as any).doc, w, (u as any).id, !c, n, l, p);
        {
          w = ($ as any)(w, u, c);
          let E: any = ((((w as any).node as any)() as any).getBBox as any)();
          (h as any).width = (E as any).width, (h as any).height = ((E as any).height as any) + (((b as any).padding as any) / (2 as any) as any), (T as any)[(u as any).id] = {
            y: (b as any).compositTitleSize
          };
        }
      } else h = (L as any)(i, u, a);
      if ((u as any).note) {
        const w: any = {
            descriptions: [],
            id: ((u as any).id as any) + ("-note" as any),
            note: (u as any).note,
            type: "note"
          },
          E: any = (L as any)(i, w, a);
        (((u as any).note as any).position as any) === ("left of" as any) ? (((a as any).setNode as any)(((h as any).id as any) + ("-note" as any), E), ((a as any).setNode as any)((h as any).id, h)) : (((a as any).setNode as any)((h as any).id, h), ((a as any).setNode as any)(((h as any).id as any) + ("-note" as any), E)), ((a as any).setParent as any)((h as any).id, ((h as any).id as any) + ("-group" as any)), ((a as any).setParent as any)(((h as any).id as any) + ("-note" as any), ((h as any).id as any) + ("-group" as any));
      } else ((a as any).setNode as any)((h as any).id, h);
    }
    ((S as any).debug as any)("Count=", ((a as any).nodeCount as any)(), a);
    let B: any = 0;
    ((g as any).forEach as any)(function (this: any, r: any): any {
      B++, ((S as any).debug as any)("Setting edge", r), ((a as any).setEdge as any)((r as any).id1, (r as any).id2, {
        relation: r,
        width: (at as any)((r as any).title),
        height: ((b as any).labelHeight as any) * ((((z as any).getRows as any)((r as any).title) as any).length as any),
        labelpos: "c"
      }, ("id" as any) + (B as any));
    }), (J as any)(a), ((S as any).debug as any)("Graph after layout", ((a as any).nodes as any)());
    const y: any = ((i as any).node as any)();
    ((((a as any).nodes as any)() as any).forEach as any)(function (this: any, r: any): any {
      (r as any) !== (void 0 as any) && (((a as any).node as any)(r) as any) !== (void 0 as any) ? (((S as any).warn as any)(((("Node " as any) + (r as any) as any) + (": " as any) as any) + (((JSON as any).stringify as any)(((a as any).node as any)(r)) as any)), ((((n as any).select as any)(((("#" as any) + ((y as any).id as any) as any) + (" #" as any) as any) + (r as any)) as any).attr as any)("transform", (((("translate(" as any) + (((((a as any).node as any)(r) as any).x as any) - (((((a as any).node as any)(r) as any).width as any) / (2 as any) as any) as any) as any) + ("," as any) as any) + ((((((a as any).node as any)(r) as any).y as any) + (((T as any)[r] ? ((T as any)[r] as any).y : 0) as any) as any) - (((((a as any).node as any)(r) as any).height as any) / (2 as any) as any) as any) as any) + (" )" as any)), ((((n as any).select as any)(((("#" as any) + ((y as any).id as any) as any) + (" #" as any) as any) + (r as any)) as any).attr as any)("data-x-shift", ((((a as any).node as any)(r) as any).x as any) - (((((a as any).node as any)(r) as any).width as any) / (2 as any) as any)), ((((l as any).querySelectorAll as any)((((("#" as any) + ((y as any).id as any) as any) + (" #" as any) as any) + (r as any) as any) + (" .divider" as any)) as any).forEach as any)((h: any): any => {
        const w: any = (h as any).parentElement;
        let E: any = 0,
          M: any = 0;
        w && ((w as any).parentElement && (E = ((((w as any).parentElement as any).getBBox as any)() as any).width), M = (parseInt as any)(((w as any).getAttribute as any)("data-x-shift"), 10), ((Number as any).isNaN as any)(M) && (M = 0)), ((h as any).setAttribute as any)("x1", ((0 as any) - (M as any) as any) + (8 as any)), ((h as any).setAttribute as any)("x2", ((E as any) - (M as any) as any) - (8 as any));
      })) : ((S as any).debug as any)(((("No Node " as any) + (r as any) as any) + (": " as any) as any) + (((JSON as any).stringify as any)(((a as any).node as any)(r)) as any));
    });
    let v: any = ((y as any).getBBox as any)();
    ((((a as any).edges as any)() as any).forEach as any)(function (this: any, r: any): any {
      (r as any) !== (void 0 as any) && (((a as any).edge as any)(r) as any) !== (void 0 as any) && (((S as any).debug as any)(((((("Edge " as any) + ((r as any).v as any) as any) + (" -> " as any) as any) + ((r as any).w as any) as any) + (": " as any) as any) + (((JSON as any).stringify as any)(((a as any).edge as any)(r)) as any)), (Q as any)(i, ((a as any).edge as any)(r), (((a as any).edge as any)(r) as any).relation));
    }), v = ((y as any).getBBox as any)();
    const k: any = {
      id: d || "root",
      label: d || "root",
      width: 0,
      height: 0
    };
    return (k as any).width = ((v as any).width as any) + ((2 as any) * ((b as any).padding as any) as any), (k as any).height = ((v as any).height as any) + ((2 as any) * ((b as any).padding as any) as any), ((S as any).debug as any)("Doc rendered", k, a), k;
  }, "renderDoc"),
  it: any = {
    setConf: V,
    draw: et
  },
  pt: any = {
    parser: W,
    get db(): any {
      return new (N as any)(1);
    },
    renderer: it,
    styles: R,
    init: (f as any)((e: any): any => {
      (e as any).state || ((e as any).state = {}), ((e as any).state as any).arrowMarkerAbsolute = (e as any).arrowMarkerAbsolute;
    }, "init")
  };
export { pt as diagram };
//# debugId=15ae5f46-535f-444d-8e52-98a60c05c0f2
