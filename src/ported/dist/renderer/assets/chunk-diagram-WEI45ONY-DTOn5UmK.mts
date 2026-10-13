declare var global: any;
declare var self: any;
declare var structuredClone: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "1dc99cab-db62-42fc-8f9c-7530429b8ebc", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-1dc99cab-db62-42fc-8f9c-7530429b8ebc");
  } catch (e: any) {}
} as any)();
import { p as k } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _ as c, s as R, g as F, p as I, o as _, a as D, b as E, F as z, q as P, B as y, z as C, D as G, l as B, W, e as V } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as H } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var m: any = {
    showLegend: !0,
    ticks: 5,
    max: null,
    min: 0,
    graticule: "circle"
  },
  w: any = {
    axes: [],
    curves: [],
    options: m
  },
  x: any = (structuredClone as any)(w),
  j: any = (G as any).radar,
  q: any = (c as any)((): any => (y as any)({
    ...j,
    ...((C as any)() as any).radar
  }), "getConfig"),
  b: any = (c as any)((): any => (x as any).axes, "getAxes"),
  N: any = (c as any)((): any => (x as any).curves, "getCurves"),
  U: any = (c as any)((): any => (x as any).options, "getOptions"),
  X: any = (c as any)((a: any): any => {
    (x as any).axes = ((a as any).map as any)((t: any): any => ({
      name: (t as any).name,
      label: (t as any).label ?? (t as any).name
    }));
  }, "setAxes"),
  Y: any = (c as any)((a: any): any => {
    (x as any).curves = ((a as any).map as any)((t: any): any => ({
      name: (t as any).name,
      label: (t as any).label ?? (t as any).name,
      entries: (Z as any)((t as any).entries)
    }));
  }, "setCurves"),
  Z: any = (c as any)((a: any): any => {
    if ((((a as any)[0] as any).axis as any) == (null as any)) return ((a as any).map as any)((e: any): any => (e as any).value);
    const t: any = (b as any)();
    if (((t as any).length as any) === (0 as any)) throw new (Error as any)("Axes must be populated before curves for reference entries");
    return ((t as any).map as any)((e: any): any => {
      const r: any = ((a as any).find as any)((s: any): any => ((s as any).axis?.$refText as any) === ((e as any).name as any));
      if ((r as any) === (void 0 as any)) throw new (Error as any)(("Missing entry for axis " as any) + ((e as any).label as any));
      return (r as any).value;
    });
  }, "computeCurveEntries"),
  J: any = (c as any)((a: any): any => {
    const t: any = ((a as any).reduce as any)((e: any, r: any): any => ((e as any)[(r as any).name] = r, e), {});
    (x as any).options = {
      showLegend: (t as any).showLegend?.value ?? (m as any).showLegend,
      ticks: (t as any).ticks?.value ?? (m as any).ticks,
      max: (t as any).max?.value ?? (m as any).max,
      min: (t as any).min?.value ?? (m as any).min,
      graticule: (t as any).graticule?.value ?? (m as any).graticule
    };
  }, "setOptions"),
  K: any = (c as any)((): any => {
    (P as any)(), x = (structuredClone as any)(w);
  }, "clear"),
  $: any = {
    getAxes: b,
    getCurves: N,
    getOptions: U,
    setAxes: X,
    setCurves: Y,
    setOptions: J,
    getConfig: q,
    clear: K,
    setAccTitle: E,
    getAccTitle: D,
    setDiagramTitle: _,
    getDiagramTitle: I,
    getAccDescription: F,
    setAccDescription: R
  },
  Q: any = (c as any)((a: any): any => {
    (k as any)(a, $);
    const {
      axes: t,
      curves: e,
      options: r
    }: any = a;
    (($ as any).setAxes as any)(t), (($ as any).setCurves as any)(e), (($ as any).setOptions as any)(r);
  }, "populate"),
  tt: any = {
    parse: (c as any)(async (a: any): Promise<any> => {
      const t: any = await (H as any)("radar", a);
      ((B as any).debug as any)(t), (Q as any)(t);
    }, "parse")
  },
  et: any = (c as any)((a: any, t: any, e: any, r: any): any => {
    const s: any = (r as any).db,
      i: any = ((s as any).getAxes as any)(),
      l: any = ((s as any).getCurves as any)(),
      n: any = ((s as any).getOptions as any)(),
      o: any = ((s as any).getConfig as any)(),
      d: any = ((s as any).getDiagramTitle as any)(),
      p: any = (z as any)(t),
      u: any = (at as any)(p, o),
      g: any = (n as any).max ?? ((Math as any).max as any)(...((l as any).map as any)((f: any): any => ((Math as any).max as any)(...(f as any).entries))),
      h: any = (n as any).min,
      v: any = (((Math as any).min as any)((o as any).width, (o as any).height) as any) / (2 as any);
    (rt as any)(u, i, v, (n as any).ticks, (n as any).graticule), (st as any)(u, i, v, o), (A as any)(u, i, l, h, g, (n as any).graticule, o), (T as any)(u, l, (n as any).showLegend, o), ((((((((((u as any).append as any)("text") as any).attr as any)("class", "radarTitle") as any).text as any)(d) as any).attr as any)("x", 0) as any).attr as any)("y", ((-(o as any).height as any) / (2 as any) as any) - ((o as any).marginTop as any));
  }, "draw"),
  at: any = (c as any)((a: any, t: any): any => {
    const e: any = (((t as any).width as any) + ((t as any).marginLeft as any) as any) + ((t as any).marginRight as any),
      r: any = (((t as any).height as any) + ((t as any).marginTop as any) as any) + ((t as any).marginBottom as any),
      s: any = {
        x: ((t as any).marginLeft as any) + (((t as any).width as any) / (2 as any) as any),
        y: ((t as any).marginTop as any) + (((t as any).height as any) / (2 as any) as any)
      };
    return (V as any)(a, r, e, (t as any).useMaxWidth ?? !0), ((((a as any).attr as any)("viewBox", `0 0 ${e} ${r}`) as any).attr as any)("overflow", "visible"), ((((a as any).append as any)("g") as any).attr as any)("transform", `translate(${(s as any).x}, ${(s as any).y})`);
  }, "drawFrame"),
  rt: any = (c as any)((a: any, t: any, e: any, r: any, s: any): any => {
    if ((s as any) === ("circle" as any)) for (let i: any = 0; (i as any) < (r as any); i++) {
      const l: any = ((e as any) * ((i as any) + (1 as any) as any) as any) / (r as any);
      ((((((a as any).append as any)("circle") as any).attr as any)("r", l) as any).attr as any)("class", "radarGraticule");
    } else if ((s as any) === ("polygon" as any)) {
      const i: any = (t as any).length;
      for (let l: any = 0; (l as any) < (r as any); l++) {
        const n: any = ((e as any) * ((l as any) + (1 as any) as any) as any) / (r as any),
          o: any = ((((t as any).map as any)((d: any, p: any): any => {
            const u: any = ((((2 as any) * (p as any) as any) * ((Math as any).PI as any) as any) / (i as any) as any) - (((Math as any).PI as any) / (2 as any) as any),
              g: any = (n as any) * (((Math as any).cos as any)(u) as any),
              h: any = (n as any) * (((Math as any).sin as any)(u) as any);
            return `${g},${h}`;
          }) as any).join as any)(" ");
        ((((((a as any).append as any)("polygon") as any).attr as any)("points", o) as any).attr as any)("class", "radarGraticule");
      }
    }
  }, "drawGraticule"),
  st: any = (c as any)((a: any, t: any, e: any, r: any): any => {
    const s: any = (t as any).length;
    for (let i: any = 0; (i as any) < (s as any); i++) {
      const l: any = ((t as any)[i] as any).label,
        n: any = ((((2 as any) * (i as any) as any) * ((Math as any).PI as any) as any) / (s as any) as any) - (((Math as any).PI as any) / (2 as any) as any),
        o: any = ((Math as any).cos as any)(n),
        d: any = ((Math as any).sin as any)(n);
      ((((((((((((a as any).append as any)("line") as any).attr as any)("x1", 0) as any).attr as any)("y1", 0) as any).attr as any)("x2", ((e as any) * ((r as any).axisScaleFactor as any) as any) * (o as any)) as any).attr as any)("y2", ((e as any) * ((r as any).axisScaleFactor as any) as any) * (d as any)) as any).attr as any)("class", "radarAxisLine");
      const p: any = (o as any) > (.01 as any) ? "start" : (o as any) < (-.01 as any) ? "end" : "middle",
        u: any = (d as any) > (.01 as any) ? "hanging" : (d as any) < (-.01 as any) ? "auto" : "central",
        g: number = 4;
      ((((((((((((((a as any).append as any)("text") as any).text as any)(l) as any).attr as any)("x", (((e as any) * ((r as any).axisLabelFactor as any) as any) * (o as any) as any) + ((g as any) * (o as any) as any)) as any).attr as any)("y", (((e as any) * ((r as any).axisLabelFactor as any) as any) * (d as any) as any) + ((g as any) * (d as any) as any)) as any).attr as any)("text-anchor", p) as any).attr as any)("dominant-baseline", u) as any).attr as any)("class", "radarAxisLabel");
    }
  }, "drawAxes");
function A(this: any, a: any, t: any, e: any, r: any, s: any, i: any, l: any): any {
  const n: any = (t as any).length,
    o: any = (((Math as any).min as any)((l as any).width, (l as any).height) as any) / (2 as any);
  ((e as any).forEach as any)((d: any, p: any): any => {
    if ((((d as any).entries as any).length as any) !== (n as any)) return;
    const u: any = (((d as any).entries as any).map as any)((g: any, h: any): any => {
      const v: any = ((((2 as any) * ((Math as any).PI as any) as any) * (h as any) as any) / (n as any) as any) - (((Math as any).PI as any) / (2 as any) as any),
        f: any = (M as any)(g, r, s, o),
        S: any = (f as any) * (((Math as any).cos as any)(v) as any),
        O: any = (f as any) * (((Math as any).sin as any)(v) as any);
      return {
        x: S,
        y: O
      };
    });
    (i as any) === ("circle" as any) ? ((((((a as any).append as any)("path") as any).attr as any)("d", (L as any)(u, (l as any).curveTension)) as any).attr as any)("class", `radarCurve-${p}`) : (i as any) === ("polygon" as any) && ((((((a as any).append as any)("polygon") as any).attr as any)("points", ((((u as any).map as any)((g: any): any => `${(g as any).x},${(g as any).y}`) as any).join as any)(" ")) as any).attr as any)("class", `radarCurve-${p}`);
  });
}
(c as any)(A, "drawCurves");
function M(this: any, a: any, t: any, e: any, r: any): any {
  const s: any = ((Math as any).min as any)(((Math as any).max as any)(a, t), e);
  return ((r as any) * ((s as any) - (t as any) as any) as any) / ((e as any) - (t as any) as any);
}
(c as any)(M, "relativeRadius");
function L(this: any, a: any, t: any): any {
  const e: any = (a as any).length;
  let r: any = `M${((a as any)[0] as any).x},${((a as any)[0] as any).y}`;
  for (let s: any = 0; (s as any) < (e as any); s++) {
    const i: any = (a as any)[(((s as any) - (1 as any) as any) + (e as any) as any) % (e as any)],
      l: any = (a as any)[s],
      n: any = (a as any)[((s as any) + (1 as any) as any) % (e as any)],
      o: any = (a as any)[((s as any) + (2 as any) as any) % (e as any)],
      d: any = {
        x: ((l as any).x as any) + ((((n as any).x as any) - ((i as any).x as any) as any) * (t as any) as any),
        y: ((l as any).y as any) + ((((n as any).y as any) - ((i as any).y as any) as any) * (t as any) as any)
      },
      p: any = {
        x: ((n as any).x as any) - ((((o as any).x as any) - ((l as any).x as any) as any) * (t as any) as any),
        y: ((n as any).y as any) - ((((o as any).y as any) - ((l as any).y as any) as any) * (t as any) as any)
      };
    r += ` C${(d as any).x},${(d as any).y} ${(p as any).x},${(p as any).y} ${(n as any).x},${(n as any).y}`;
  }
  return `${r} Z`;
}
(c as any)(L, "closedRoundCurve");
function T(this: any, a: any, t: any, e: any, r: any): any {
  if (!e) return;
  const s: any = (((((r as any).width as any) / (2 as any) as any) + ((r as any).marginRight as any) as any) * (3 as any) as any) / (4 as any),
    i: any = ((-((((r as any).height as any) / (2 as any) as any) + ((r as any).marginTop as any)) as any) * (3 as any) as any) / (4 as any),
    l: number = 20;
  ((t as any).forEach as any)((n: any, o: any): any => {
    const d: any = ((((a as any).append as any)("g") as any).attr as any)("transform", `translate(${s}, ${(i as any) + ((o as any) * (l as any) as any)})`);
    ((((((((d as any).append as any)("rect") as any).attr as any)("width", 12) as any).attr as any)("height", 12) as any).attr as any)("class", `radarLegendBox-${o}`), ((((((((((d as any).append as any)("text") as any).attr as any)("x", 16) as any).attr as any)("y", 0) as any).attr as any)("class", "radarLegendText") as any).text as any)((n as any).label);
  });
}
(c as any)(T, "drawLegend");
var nt: any = {
    draw: et
  },
  ot: any = (c as any)((a: any, t: any): any => {
    let e: any = "";
    for (let r: any = 0; (r as any) < ((a as any).THEME_COLOR_LIMIT as any); r++) {
      const s: any = (a as any)[`cScale${r}`];
      e += `
		.radarCurve-${r} {
			color: ${s};
			fill: ${s};
			fill-opacity: ${(t as any).curveOpacity};
			stroke: ${s};
			stroke-width: ${(t as any).curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${s};
			fill-opacity: ${(t as any).curveOpacity};
			stroke: ${s};
		}
		`;
    }
    return e;
  }, "genIndexStyles"),
  it: any = (c as any)((a: any): any => {
    const t: any = (W as any)(),
      e: any = (C as any)(),
      r: any = (y as any)(t, (e as any).themeVariables),
      s: any = (y as any)((r as any).radar, a);
    return {
      themeVariables: r,
      radarOptions: s
    };
  }, "buildRadarStyleOptions"),
  lt: any = (c as any)(({
    radar: a
  }: any = {}): any => {
    const {
      themeVariables: t,
      radarOptions: e
    }: any = (it as any)(a);
    return `
	.radarTitle {
		font-size: ${(t as any).fontSize};
		color: ${(t as any).titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${(e as any).axisColor};
		stroke-width: ${(e as any).axisStrokeWidth};
	}
	.radarAxisLabel {
		font-size: ${(e as any).axisLabelFontSize}px;
		color: ${(e as any).axisColor};
	}
	.radarGraticule {
		fill: ${(e as any).graticuleColor};
		fill-opacity: ${(e as any).graticuleOpacity};
		stroke: ${(e as any).graticuleColor};
		stroke-width: ${(e as any).graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${(e as any).legendFontSize}px;
		dominant-baseline: hanging;
	}
	${(ot as any)(t, e)}
	`;
  }, "styles"),
  gt: any = {
    parser: tt,
    db: $,
    renderer: nt,
    styles: lt
  };
export { gt as diagram };
//# debugId=1dc99cab-db62-42fc-8f9c-7530429b8ebc
