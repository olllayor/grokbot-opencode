declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "15e9cd5f-702b-4908-8910-a66150ba6043", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-15e9cd5f-702b-4908-8910-a66150ba6043");
  } catch (e: any) {}
} as any)();
import { _ as i, d as l, n as d, j as o } from "./chunk-mermaid.core-B9Iu5CoE.js";
var x: any = (i as any)((r: any, t: any): any => {
    const e: any = ((r as any).append as any)("rect");
    if (((e as any).attr as any)("x", (t as any).x), ((e as any).attr as any)("y", (t as any).y), ((e as any).attr as any)("fill", (t as any).fill), ((e as any).attr as any)("stroke", (t as any).stroke), ((e as any).attr as any)("width", (t as any).width), ((e as any).attr as any)("height", (t as any).height), (t as any).name && ((e as any).attr as any)("name", (t as any).name), (t as any).rx && ((e as any).attr as any)("rx", (t as any).rx), (t as any).ry && ((e as any).attr as any)("ry", (t as any).ry), ((t as any).attrs as any) !== (void 0 as any)) for (const s in (t as any).attrs) ((e as any).attr as any)(s, ((t as any).attrs as any)[s]);
    return (t as any).class && ((e as any).attr as any)("class", (t as any).class), e;
  }, "drawRect"),
  p: any = (i as any)((r: any, t: any): any => {
    const e: any = {
      x: (t as any).startx,
      y: (t as any).starty,
      width: ((t as any).stopx as any) - ((t as any).startx as any),
      height: ((t as any).stopy as any) - ((t as any).starty as any),
      fill: (t as any).fill,
      stroke: (t as any).stroke,
      class: "rect"
    };
    (((x as any)(r, e) as any).lower as any)();
  }, "drawBackgroundRect"),
  y: any = (i as any)((r: any, t: any): any => {
    const e: any = (((t as any).text as any).replace as any)(d, " "),
      s: any = ((r as any).append as any)("text");
    ((s as any).attr as any)("x", (t as any).x), ((s as any).attr as any)("y", (t as any).y), ((s as any).attr as any)("class", "legend"), ((s as any).style as any)("text-anchor", (t as any).anchor), (t as any).class && ((s as any).attr as any)("class", (t as any).class);
    const a: any = ((s as any).append as any)("tspan");
    return ((a as any).attr as any)("x", ((t as any).x as any) + (((t as any).textMargin as any) * (2 as any) as any)), ((a as any).text as any)(e), s;
  }, "drawText"),
  m: any = (i as any)((r: any, t: any, e: any, s: any): any => {
    const a: any = ((r as any).append as any)("image");
    ((a as any).attr as any)("x", t), ((a as any).attr as any)("y", e);
    const n: any = ((o as any).sanitizeUrl as any)(s);
    ((a as any).attr as any)("xlink:href", n);
  }, "drawImage"),
  g: any = (i as any)((r: any, t: any, e: any, s: any): any => {
    const a: any = ((r as any).append as any)("use");
    ((a as any).attr as any)("x", t), ((a as any).attr as any)("y", e);
    const n: any = ((o as any).sanitizeUrl as any)(s);
    ((a as any).attr as any)("xlink:href", `#${n}`);
  }, "drawEmbeddedImage"),
  h: any = (i as any)((): any => ({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    fill: "#EDF2AE",
    stroke: "#666",
    anchor: "start",
    rx: 0,
    ry: 0
  }), "getNoteRect"),
  f: any = (i as any)((): any => ({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    "text-anchor": "start",
    style: "#666",
    textMargin: 0,
    rx: 0,
    ry: 0,
    tspan: !0
  }), "getTextObj"),
  w: any = (i as any)((): any => {
    let r: any = (l as any)(".mermaidTooltip");
    return ((r as any).empty as any)() && (r = (((((((((((((((((((((((((((l as any)("body") as any).append as any)("div") as any).attr as any)("class", "mermaidTooltip") as any).style as any)("opacity", 0) as any).style as any)("position", "absolute") as any).style as any)("text-align", "center") as any).style as any)("max-width", "200px") as any).style as any)("padding", "2px") as any).style as any)("font-size", "12px") as any).style as any)("background", "#ffffde") as any).style as any)("border", "1px solid #333") as any).style as any)("border-radius", "2px") as any).style as any)("pointer-events", "none") as any).style as any)("z-index", "100")), r;
  }, "createTooltip");
export { p as a, f as b, g as c, x as d, m as e, w as f, h as g, y as h };
//# debugId=15e9cd5f-702b-4908-8910-a66150ba6043
