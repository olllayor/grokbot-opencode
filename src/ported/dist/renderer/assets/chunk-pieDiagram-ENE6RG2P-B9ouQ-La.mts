declare var global: any;
declare var self: any;
declare var structuredClone: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "8643456b-9ffe-4e16-a1c5-0322b48e6fe1", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-8643456b-9ffe-4e16-a1c5-0322b48e6fe1");
  } catch (e: any) {}
} as any)();
import { p as at } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { K as T, N as B, b5 as rt, _ as g, g as nt, s as it, a as ot, b as st, p as lt, o as ct, l as G, c as ut, B as dt, F as gt, a1 as pt, e as ht, q as ft, D as mt } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as vt } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import { d as X } from "./chunk-arc-DIyNF4LI.js";
import { o as xt } from "./chunk-ordinal-BB0u7Tqq.js";
import "./index.eager-vendor-Qbf9YA6n.js";
import "./chunk-init-Gi6I4Gst.js";
function St(this: any, t: any, n: any): any {
  return (n as any) < (t as any) ? -1 : (n as any) > (t as any) ? 1 : (n as any) >= (t as any) ? 0 : NaN;
}
function yt(this: any, t: any): any {
  return t;
}
function wt(this: any): any {
  var t: any = yt,
    n: any = St,
    y: any = null,
    b: any = (T as any)(0),
    l: any = (T as any)(B),
    p: any = (T as any)(0);
  function i(this: any, e: any): any {
    var r: any,
      s: any = ((e = (rt as any)(e)) as any).length,
      h: any,
      w: any,
      $: any = 0,
      f: any = new (Array as any)(s),
      o: any = new (Array as any)(s),
      D: any = +((b as any).apply as any)(this, arguments),
      E: any = ((Math as any).min as any)(B, ((Math as any).max as any)(-B, (((l as any).apply as any)(this, arguments) as any) - (D as any))),
      k: any,
      F: any = ((Math as any).min as any)((((Math as any).abs as any)(E) as any) / (s as any), ((p as any).apply as any)(this, arguments)),
      u: any = (F as any) * (((E as any) < (0 as any) ? -1 : 1) as any),
      A: any;
    for (r = 0; (r as any) < (s as any); ++r) ((A = (o as any)[(f as any)[r] = r] = +(t as any)((e as any)[r], r, e)) as any) > (0 as any) && ($ += A);
    for ((n as any) != (null as any) ? ((f as any).sort as any)(function (this: any, M: any, m: any): any {
      return (n as any)((o as any)[M], (o as any)[m]);
    }) : (y as any) != (null as any) && ((f as any).sort as any)(function (this: any, M: any, m: any): any {
      return (y as any)((e as any)[M], (e as any)[m]);
    }), r = 0, w = $ ? ((E as any) - ((s as any) * (u as any) as any) as any) / ($ as any) : 0; (r as any) < (s as any); ++r, D = k) h = (f as any)[r], A = (o as any)[h], k = ((D as any) + (((A as any) > (0 as any) ? (A as any) * (w as any) : 0) as any) as any) + (u as any), (o as any)[h] = {
      data: (e as any)[h],
      index: r,
      value: A,
      startAngle: D,
      endAngle: k,
      padAngle: F
    };
    return o;
  }
  return (i as any).value = function (this: any, e: any): any {
    return (arguments as any).length ? (t = (typeof e as any) == ("function" as any) ? e : (T as any)(+e), i) : t;
  }, (i as any).sortValues = function (this: any, e: any): any {
    return (arguments as any).length ? (n = e, y = null, i) : n;
  }, (i as any).sort = function (this: any, e: any): any {
    return (arguments as any).length ? (y = e, n = null, i) : y;
  }, (i as any).startAngle = function (this: any, e: any): any {
    return (arguments as any).length ? (b = (typeof e as any) == ("function" as any) ? e : (T as any)(+e), i) : b;
  }, (i as any).endAngle = function (this: any, e: any): any {
    return (arguments as any).length ? (l = (typeof e as any) == ("function" as any) ? e : (T as any)(+e), i) : l;
  }, (i as any).padAngle = function (this: any, e: any): any {
    return (arguments as any).length ? (p = (typeof e as any) == ("function" as any) ? e : (T as any)(+e), i) : p;
  }, i;
}
var At: any = (mt as any).pie,
  I: any = {
    sections: new (Map as any)(),
    showData: !1
  },
  W: any = (I as any).sections,
  V: any = (I as any).showData,
  Ct: any = (structuredClone as any)(At),
  $t: any = (g as any)((): any => (structuredClone as any)(Ct), "getConfig"),
  Dt: any = (g as any)((): any => {
    W = new (Map as any)(), V = (I as any).showData, (ft as any)();
  }, "clear"),
  Tt: any = (g as any)(({
    label: t,
    value: n
  }: any): any => {
    if ((n as any) < (0 as any)) throw new (Error as any)(`"${t}" has invalid value: ${n}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
    ((W as any).has as any)(t) || (((W as any).set as any)(t, n), ((G as any).debug as any)(`added new section: ${t}, with value: ${n}`));
  }, "addSection"),
  bt: any = (g as any)((): any => W, "getSections"),
  kt: any = (g as any)((t: any): any => {
    V = t;
  }, "setShowData"),
  zt: any = (g as any)((): any => V, "getShowData"),
  Z: any = {
    getConfig: $t,
    clear: Dt,
    setDiagramTitle: ct,
    getDiagramTitle: lt,
    setAccTitle: st,
    getAccTitle: ot,
    setAccDescription: it,
    getAccDescription: nt,
    addSection: Tt,
    getSections: bt,
    setShowData: kt,
    getShowData: zt
  },
  Et: any = (g as any)((t: any, n: any): any => {
    (at as any)(t, n), ((n as any).setShowData as any)((t as any).showData), (((t as any).sections as any).map as any)((n as any).addSection);
  }, "populateDb"),
  Mt: any = {
    parse: (g as any)(async (t: any): Promise<any> => {
      const n: any = await (vt as any)("pie", t);
      ((G as any).debug as any)(n), (Et as any)(n, Z);
    }, "parse")
  },
  Rt: any = (g as any)((t: any): any => `
  .pieCircle{
    stroke: ${(t as any).pieStrokeColor};
    stroke-width : ${(t as any).pieStrokeWidth};
    opacity : ${(t as any).pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${(t as any).pieOuterStrokeColor};
    stroke-width: ${(t as any).pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${(t as any).pieTitleTextSize};
    fill: ${(t as any).pieTitleTextColor};
    font-family: ${(t as any).fontFamily};
  }
  .slice {
    font-family: ${(t as any).fontFamily};
    fill: ${(t as any).pieSectionTextColor};
    font-size:${(t as any).pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${(t as any).pieLegendTextColor};
    font-family: ${(t as any).fontFamily};
    font-size: ${(t as any).pieLegendTextSize};
  }
`, "getStyles"),
  Ft: any = Rt,
  Lt: any = (g as any)((t: any): any => {
    const n: any = (([...((t as any).values as any)()] as any).reduce as any)((l: any, p: any): any => (l as any) + (p as any), 0),
      y: any = (((([...((t as any).entries as any)()] as any).map as any)(([l, p]: any): any => ({
        label: l,
        value: p
      })) as any).filter as any)((l: any): any => ((((l as any).value as any) / (n as any) as any) * (100 as any) as any) >= (1 as any));
    return ((((((wt as any)() as any).value as any)((l: any): any => (l as any).value) as any).sort as any)(null) as any)(y);
  }, "createPieArcs"),
  Nt: any = (g as any)((t: any, n: any, y: any, b: any): any => {
    ((G as any).debug as any)((`rendering pie chart
` as any) + (t as any));
    const l: any = (b as any).db,
      p: any = (ut as any)(),
      i: any = (dt as any)(((l as any).getConfig as any)(), (p as any).pie),
      e: number = 40,
      r: number = 18,
      s: number = 4,
      h: number = 450,
      w: any = h,
      $: any = (gt as any)(n),
      f: any = (($ as any).append as any)("g");
    ((f as any).attr as any)("transform", (((("translate(" as any) + ((w as any) / (2 as any) as any) as any) + ("," as any) as any) + ((h as any) / (2 as any) as any) as any) + (")" as any));
    const {
      themeVariables: o
    }: any = p;
    let [D]: any = (pt as any)((o as any).pieOuterStrokeWidth);
    D ??= 2;
    const E: any = (i as any).legendPosition,
      k: any = (i as any).textPosition,
      F: any = ((i as any).donutHole as any) > (0 as any) && ((i as any).donutHole as any) <= (.9 as any) ? (i as any).donutHole : 0,
      u: any = ((((Math as any).min as any)(w, h) as any) / (2 as any) as any) - (e as any),
      A: any = (((((X as any)() as any).innerRadius as any)((F as any) * (u as any)) as any).outerRadius as any)(u),
      M: any = (((((X as any)() as any).innerRadius as any)((u as any) * (k as any)) as any).outerRadius as any)((u as any) * (k as any)),
      m: any = ((f as any).append as any)("g");
    ((((((((((m as any).append as any)("circle") as any).attr as any)("cx", 0) as any).attr as any)("cy", 0) as any).attr as any)("r", (u as any) + ((D as any) / (2 as any) as any)) as any).attr as any)("class", "pieOuterCircle");
    const L: any = ((l as any).getSections as any)(),
      J: any = (Lt as any)(L),
      Q: any = [(o as any).pie1, (o as any).pie2, (o as any).pie3, (o as any).pie4, (o as any).pie5, (o as any).pie6, (o as any).pie7, (o as any).pie8, (o as any).pie9, (o as any).pie10, (o as any).pie11, (o as any).pie12];
    let _: any = 0;
    ((L as any).forEach as any)((a: any): any => {
      _ += a;
    });
    const U: any = ((J as any).filter as any)((a: any): any => (((((((a as any).data as any).value as any) / (_ as any) as any) * (100 as any) as any).toFixed as any)(0) as any) !== ("0" as any)),
      H: any = (((xt as any)(Q) as any).domain as any)([...((L as any).keys as any)()]);
    ((((((((((((((m as any).selectAll as any)("mySlices") as any).data as any)(U) as any).enter as any)() as any).append as any)("path") as any).attr as any)("d", A) as any).attr as any)("fill", (a: any): any => (H as any)(((a as any).data as any).label)) as any).attr as any)("class", (a: any): any => {
      let c: any = "pieCircle";
      return ((i as any).highlightSlice as any) === ("hover" as any) ? c += " highlightedOnHover" : ((i as any).highlightSlice as any) === (((a as any).data as any).label as any) && (c += " highlighted"), c;
    }), ((((((((((((((((m as any).selectAll as any)("mySlices") as any).data as any)(U) as any).enter as any)() as any).append as any)("text") as any).text as any)((a: any): any => (((((((a as any).data as any).value as any) / (_ as any) as any) * (100 as any) as any).toFixed as any)(0) as any) + ("%" as any)) as any).attr as any)("transform", (a: any): any => (("translate(" as any) + (((M as any).centroid as any)(a) as any) as any) + (")" as any)) as any).style as any)("text-anchor", "middle") as any).attr as any)("class", "slice");
    const Y: any = ((((((((((f as any).append as any)("text") as any).text as any)(((l as any).getDiagramTitle as any)()) as any).attr as any)("x", 0) as any).attr as any)("y", (-400 as any) / (2 as any)) as any).attr as any)("class", "pieTitleText"),
      R: any = (([...((L as any).entries as any)()] as any).map as any)(([a, c]: any): any => ({
        label: a,
        value: c
      })),
      C: any = ((((((((((f as any).selectAll as any)(".legend") as any).data as any)(R) as any).enter as any)() as any).append as any)("g") as any).attr as any)("class", "legend");
    ((((((((((C as any).append as any)("rect") as any).attr as any)("width", r) as any).attr as any)("height", r) as any).style as any)("fill", (a: any): any => (H as any)((a as any).label)) as any).style as any)("stroke", (a: any): any => (H as any)((a as any).label)), ((((((((C as any).append as any)("text") as any).attr as any)("x", (r as any) + (s as any)) as any).attr as any)("y", (r as any) - (s as any)) as any).text as any)((a: any): any => ((l as any).getShowData as any)() ? `${(a as any).label} [${(a as any).value}]` : (a as any).label);
    const z: any = ((Math as any).max as any)(...((((((C as any).selectAll as any)("text") as any).nodes as any)() as any).map as any)((a: any): any => a?.getBoundingClientRect().width ?? 0));
    let N: any = h,
      O: any = (w as any) + (e as any);
    const d: any = (r as any) + (s as any),
      P: any = ((R as any).length as any) * (d as any);
    switch (E) {
      case "center":
        ((C as any).attr as any)("transform", (a: any, c: any): any => {
          const v: any = ((d as any) * ((R as any).length as any) as any) / (2 as any),
            x: any = ((-z as any) / (2 as any) as any) - ((r as any) + (s as any) as any),
            S: any = ((c as any) * (d as any) as any) - (v as any);
          return (((("translate(" as any) + (x as any) as any) + ("," as any) as any) + (S as any) as any) + (")" as any);
        });
        break;
      case "top":
        N += P, ((C as any).attr as any)("transform", (a: any, c: any): any => {
          const v: any = u,
            x: any = ((-z as any) / (2 as any) as any) - ((r as any) + (s as any) as any),
            S: any = ((c as any) * (d as any) as any) - (v as any);
          return `translate(${x}, ${S})`;
        }), ((m as any).attr as any)("transform", (): any => `translate(0, ${(P as any) + (d as any)})`);
        break;
      case "bottom":
        N += P, ((C as any).attr as any)("transform", (a: any, c: any): any => {
          const v: any = (-u as any) - (d as any),
            x: any = ((-z as any) / (2 as any) as any) - ((r as any) + (s as any) as any),
            S: any = ((c as any) * (d as any) as any) - (v as any);
          return (((("translate(" as any) + (x as any) as any) + ("," as any) as any) + (S as any) as any) + (")" as any);
        });
        break;
      case "left":
        O += ((r as any) + (s as any) as any) + (z as any), ((C as any).attr as any)("transform", (a: any, c: any): any => {
          const v: any = ((d as any) * ((R as any).length as any) as any) / (2 as any),
            x: any = (-u as any) - ((r as any) + (s as any) as any),
            S: any = ((c as any) * (d as any) as any) - (v as any);
          return (((("translate(" as any) + (x as any) as any) + ("," as any) as any) + (S as any) as any) + (")" as any);
        }), ((m as any).attr as any)("transform", (): any => `translate(${((z as any) + (r as any) as any) + (s as any)}, 0)`);
        break;
      default:
        O += ((r as any) + (s as any) as any) + (z as any), ((C as any).attr as any)("transform", (a: any, c: any): any => {
          const v: any = ((d as any) * ((R as any).length as any) as any) / (2 as any),
            x: any = (12 as any) * (r as any),
            S: any = ((c as any) * (d as any) as any) - (v as any);
          return (((("translate(" as any) + (x as any) as any) + ("," as any) as any) + (S as any) as any) + (")" as any);
        });
        break;
    }
    const j: any = ((Y as any).node as any)()?.getBoundingClientRect().width ?? 0,
      tt: any = ((w as any) / (2 as any) as any) - ((j as any) / (2 as any) as any),
      et: any = ((w as any) / (2 as any) as any) + ((j as any) / (2 as any) as any),
      q: any = ((Math as any).min as any)(0, tt),
      K: any = (((Math as any).max as any)(O, et) as any) - (q as any);
    (($ as any).attr as any)("viewBox", `${q} 0 ${K} ${N}`), (ht as any)($, N, K, (i as any).useMaxWidth);
  }, "draw"),
  Wt: any = {
    draw: Nt
  },
  Ut: any = {
    parser: Mt,
    db: Z,
    renderer: Wt,
    styles: Ft
  };
export { Ut as diagram };
//# debugId=8643456b-9ffe-4e16-a1c5-0322b48e6fe1
