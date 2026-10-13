declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "ec3dabe1-60e0-42df-a233-effc7d1f69c7", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-ec3dabe1-60e0-42df-a233-effc7d1f69c7");
  } catch (e: any) {}
} as any)();
import { I as X } from "./chunk-chunk-2Q5K7J3B-BdCp588o.js";
import { p as O } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _ as f, o as G, b as Y, s as F, p as P, g as j, a as q, B as A, l as D, F as Z, e as U, z as N, q as J, i as K, ai as Q, D as ee, aj as te } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as ne } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var E: any = /[\u2500\u2501\u2502\u2503\u2514\u2517\u251C\u2523]/,
  S: any = /[\u2514\u2517\u251C\u2523]/,
  re: any = /[\u2500\u2501]/,
  V: any = /^[\s\u2502\u2503]+$/,
  $: any = /^\s*(title[\t ]|accTitle[\t ]*:|accDescr[\t ]*[:{])/,
  k: any = /^\s*%%/,
  ie: string = "    ";
function L(this: any, n: any): any {
  return ((n as any).some as any)((e: any): any => ((E as any).test as any)(e));
}
(f as any)(L, "isBoxDrawingFormat");
function _(this: any, n: any): any {
  for (const e of n) {
    const t: any = ((S as any).exec as any)(e);
    if (t?.index && ((t as any).index as any) > (0 as any)) return (t as any).index;
  }
  return 4;
}
(f as any)(_, "inferSegmentWidth");
function M(this: any, n: any, e: any): any {
  return ((n as any).replace as any)(/\bline\s+(\d+)\b/gi, (t: any, r: any): any => {
    const i: any = (parseInt as any)(r, 10),
      a: any = ((e as any).get as any)(i);
    return a ? `line ${a}` : t;
  });
}
(f as any)(M, "remapErrorLines");
function R(this: any, n: any): any {
  const e: any = ((n as any).split as any)(`
`),
    t: any = new (Map as any)();
  let r: any = -1;
  for (const [s, o] of ((e as any).entries as any)()) if ((((o as any).trim as any)() as any) === ("treeView-beta" as any)) {
    r = s;
    break;
  }
  if ((r as any) === (-1 as any)) return {
    text: n,
    lineMap: t
  };
  const i: any = [];
  for (let s: any = (r as any) + (1 as any); (s as any) < ((e as any).length as any); s++) {
    const o: any = (e as any)[s];
    (((o as any).trim as any)() as any) === ("" as any) || ((k as any).test as any)(o) || (($ as any).test as any)(o) || ((V as any).test as any)(o) || ((i as any).push as any)(((o as any).replace as any)(/\t/g, "    "));
  }
  if (!(L as any)(i)) return {
    text: n,
    lineMap: t
  };
  const a: any = (_ as any)(i),
    c: any = [];
  let l: any = 0;
  for (let s: any = 0; (s as any) <= (r as any); s++) ((c as any).push as any)((e as any)[s]), l++, ((t as any).set as any)(l, (s as any) + (1 as any));
  for (let s: any = (r as any) + (1 as any); (s as any) < ((e as any).length as any); s++) {
    const o: any = (e as any)[s],
      h: any = ((o as any).trim as any)(),
      p: any = (s as any) + (1 as any);
    if ((h as any) === ("" as any)) {
      ((c as any).push as any)(o), l++, ((t as any).set as any)(l, p);
      continue;
    }
    if (((k as any).test as any)(o)) {
      ((c as any).push as any)(o), l++, ((t as any).set as any)(l, p);
      continue;
    }
    if ((($ as any).test as any)(o)) {
      ((c as any).push as any)(o), l++, ((t as any).set as any)(l, p);
      continue;
    }
    if (((V as any).test as any)(o)) continue;
    const d: any = ((o as any).replace as any)(/\t/g, "    "),
      w: any = ((S as any).exec as any)(d);
    if ((w?.index as any) !== (void 0 as any)) {
      const g: any = (w as any).index,
        m: any = (((Math as any).round as any)((g as any) / (a as any)) as any) + (1 as any);
      let u: any = (g as any) + (1 as any);
      for (; (u as any) < ((d as any).length as any) && ((re as any).test as any)((d as any)[u]);) u++;
      for (; (u as any) < ((d as any).length as any) && ((d as any)[u] as any) === (" " as any);) u++;
      const v: any = ((((d as any).slice as any)(u) as any).trimEnd as any)();
      if (!v) throw new (Error as any)(`Line ${p}: Empty node \u2014 expected a filename or directory name after the box-drawing prefix`);
      const W: any = ((ie as any).repeat as any)(m);
      ((c as any).push as any)((W as any) + (v as any)), l++, ((t as any).set as any)(l, p);
    } else {
      if (((/^[\s\u2500\u2501\u2502\u2503\u2514\u2517\u251C\u2523]+$/ as any).test as any)(d)) continue;
      if (((E as any).test as any)(d)) ((c as any).push as any)(o), l++, ((t as any).set as any)(l, p);else {
        if (((/^\s+/ as any).test as any)(d)) throw new (Error as any)(`Line ${p}: Unexpected indentation without box-drawing characters. In box-drawing format, use \u251C\u2500\u2500 or \u2514\u2500\u2500 prefixes for indented nodes.`);
        ((c as any).push as any)(o), l++, ((t as any).set as any)(l, p);
      }
    }
  }
  return {
    text: ((c as any).join as any)(`
`),
    lineMap: t
  };
}
(f as any)(R, "preprocessBoxDrawing");
var x: any = new (X as any)((): any => ({
    cnt: 1,
    stack: [{
      id: 0,
      level: -1,
      name: "/",
      nodeType: "directory",
      children: []
    }]
  })),
  oe: any = (f as any)((): any => {
    ((x as any).reset as any)(), (J as any)();
  }, "clear"),
  se: any = (f as any)((): any => (((x as any).records as any).stack as any)[0], "getRoot"),
  ae: any = (f as any)((): any => ((x as any).records as any).cnt, "getCount"),
  ce: any = (ee as any).treeView,
  le: any = (f as any)((): any => (A as any)(ce, ((N as any)() as any).treeView), "getConfig"),
  de: any = (f as any)((n: any, e: any, t: any, r: any, i: any, a: any): any => {
    for (; (n as any) <= (((((x as any).records as any).stack as any)[((((x as any).records as any).stack as any).length as any) - (1 as any)] as any).level as any);) ((((x as any).records as any).stack as any).pop as any)();
    const c: any = {
      id: ((x as any).records as any).cnt++,
      level: n,
      name: e,
      nodeType: t,
      icon: i,
      cssClass: r,
      description: a,
      children: []
    };
    ((((((x as any).records as any).stack as any)[((((x as any).records as any).stack as any).length as any) - (1 as any)] as any).children as any).push as any)(c), ((((x as any).records as any).stack as any).push as any)(c);
  }, "addNode"),
  he: any = {
    clear: oe,
    addNode: de,
    getRoot: se,
    getCount: ae,
    getConfig: le,
    getAccTitle: q,
    getAccDescription: j,
    getDiagramTitle: P,
    setAccDescription: F,
    setAccTitle: Y,
    setDiagramTitle: G
  },
  I: any = he,
  pe: any = (f as any)((n: any): any => {
    (O as any)(n, I);
    for (const e of (n as any).nodes) {
      const t: any = (typeof (e as any).indent as any) == ("number" as any) ? (e as any).indent : 0;
      let r: any = (e as any).name;
      const i: any = ((r as any).endsWith as any)("/");
      i && (r = ((r as any).slice as any)(0, -1));
      const a: any = i ? "directory" : "file",
        c: any = (e as any).classAnnotation || void 0,
        l: any = (e as any).iconAnnotation,
        s: any = (l as any) !== (void 0 as any) ? l || "none" : void 0,
        o: any = (e as any).descAnnotation || void 0,
        h: any = o ? (K as any)(o, (N as any)()) : void 0;
      ((I as any).addNode as any)(t, r, a, c, s, h);
    }
  }, "populate"),
  fe: any = {
    parse: (f as any)(async (n: any): Promise<any> => {
      const {
        text: e,
        lineMap: t
      }: any = (R as any)(n);
      try {
        const r: any = await (ne as any)("treeView", e);
        ((D as any).debug as any)(r), (pe as any)(r);
      } catch (r: any) {
        throw ((t as any).size as any) > (0 as any) && r instanceof Error && ((r as any).message = (M as any)((r as any).message, t)), r;
      }
    }, "parse")
  },
  b: any = {
    prefix: "mermaid-treeview",
    height: 24,
    width: 24,
    icons: {
      folder: {
        body: '<path fill="currentColor" d="M10.59 4.59A2 2 0 0 0 9.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.17z"/>'
      },
      file: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.83a2 2 0 0 0-.59-1.42l-4.82-4.82A2 2 0 0 0 13.17 2H6Zm7.5 1.9l4.6 4.6h-3.6a1 1 0 0 1-1-1V3.9Z" clip-rule="evenodd"/>'
      }
    }
  };
function z(this: any, n: any, e: any): any {
  const t: any = e?.filenameIcons?.[n];
  if (t) return t;
  const r: any = ((n as any).lastIndexOf as any)(".");
  if ((r as any) > (0 as any)) {
    const i: any = ((((n as any).substring as any)(r) as any).toLowerCase as any)(),
      a: any = e?.extensionIcons;
    return a?.[i] ?? a?.[((i as any).slice as any)(1)];
  }
}
(f as any)(z, "detectIcon");
function C(this: any, n: any, e: any): any {
  return ((n as any).includes as any)(":") ? n : n in (b as any).icons || !e ? `${(b as any).prefix}:${n}` : `${e}:${n}`;
}
(f as any)(C, "qualifyIcon");
function B(this: any, n: any, e: any): any {
  if (((n as any).icon as any) !== ("none" as any)) {
    if ((n as any).icon) return (C as any)((n as any).icon, (e as any).defaultIconPack);
    if ((e as any).showIcons) {
      if (((n as any).nodeType as any) === ("file" as any)) {
        const t: any = (z as any)((n as any).name, e);
        if ((t as any) === ("none" as any)) return;
        if (t) return (C as any)(t, (e as any).defaultIconPack);
      }
      return `${(b as any).prefix}:${((n as any).nodeType as any) === ("directory" as any) ? "folder" : "file"}`;
    }
  }
}
(f as any)(B, "getNodeIcon");
(te as any)([{
  name: (b as any).prefix,
  icons: b
}]);
var y: number = 14,
  ge: number = 4,
  ue: number = 16,
  H: any = (f as any)((n: any, e: any): any => `tv-icon-${n}-${((e as any).replace as any)(/[^\w-]/g, "-")}`, "iconSymbolId"),
  we: any = (f as any)(async (n: any, e: any, t: any, r: any): Promise<any> => {
    const i: any = new (Set as any)(),
      a: any = (f as any)((s: any): any => {
        const o: any = (B as any)(s, t);
        o && ((i as any).add as any)(o), (((s as any).children as any).forEach as any)(a);
      }, "collect");
    if ((a as any)(e), ((i as any).size as any) === (0 as any)) return;
    const c: any = await ((Promise as any).all as any)((([...i] as any).map as any)(async (s: any): Promise<any> => ({
        icon: s,
        svg: await (Q as any)(s, {
          height: y,
          width: y
        })
      }))),
      l: any = ((n as any).append as any)("defs");
    for (const {
      icon: s,
      svg: o
    } of c) ((((((l as any).append as any)("g") as any).attr as any)("id", (H as any)(r, s)) as any).html as any)(o);
  }, "injectIconDefs"),
  me: any = (f as any)((n: any, e: any, t: any, r: any, i: any, a: any): any => {
    const c: any = ((r as any).append as any)("g");
    let l: any = "treeView-node-label";
    ((t as any).nodeType as any) === ("directory" as any) && (l += " treeView-node-dir"), (t as any).cssClass && (l += ` ${(t as any).cssClass}`);
    const s: any = (y as any) + (ge as any),
      o: any = (B as any)(t, i),
      h: any = (o as any) !== (void 0 as any);
    o && ((((((((((c as any).append as any)("use") as any).attr as any)("xlink:href", `#${(H as any)(a, o)}`) as any).attr as any)("x", (n as any) + ((i as any).paddingX as any)) as any).attr as any)("y", (e as any) + ((i as any).paddingY as any)) as any).attr as any)("class", "treeView-node-icon");
    const p: any = ((((((((c as any).append as any)("text") as any).text as any)((t as any).name) as any).attr as any)("dominant-baseline", "middle") as any).attr as any)("class", l),
      {
        height: d,
        width: w
      }: any = ((((p as any).node as any)() as any).getBBox as any)(),
      g: any = (d as any) + (((i as any).paddingY as any) * (2 as any) as any),
      m: any = ((n as any) + ((i as any).paddingX as any) as any) + ((h ? s : 0) as any);
    ((p as any).attr as any)("x", m), ((p as any).attr as any)("y", (e as any) + ((g as any) / (2 as any) as any));
    const u: any = (m as any) + (w as any),
      v: any = ((w as any) + (((i as any).paddingX as any) * (2 as any) as any) as any) + ((h ? s : 0) as any);
    return (t as any).BBox = {
      x: n,
      y: e,
      width: v,
      height: g
    }, (t as any).cssClass?.split(/\s+/).includes("highlight") && ((((((((((((((c as any).insert as any)("rect", ":first-child") as any).attr as any)("x", n) as any).attr as any)("y", (e as any) + (1 as any)) as any).attr as any)("width", 0) as any).attr as any)("height", (g as any) - (2 as any)) as any).attr as any)("rx", 3) as any).attr as any)("class", "treeView-highlight-bg"), {
      node: t,
      nodeGroup: c,
      labelRightEdge: u,
      centerY: (e as any) + ((g as any) / (2 as any) as any)
    };
  }, "positionLabel"),
  T: any = (f as any)((n: any, e: any, t: any, r: any, i: any, a: any): any => ((((((((((((((n as any).append as any)("line") as any).attr as any)("x1", e) as any).attr as any)("y1", t) as any).attr as any)("x2", r) as any).attr as any)("y2", i) as any).attr as any)("stroke-width", a) as any).attr as any)("class", "treeView-node-line"), "positionLine"),
  xe: any = (f as any)((n: any, e: any, t: any, r: any): any => {
    let i: any = 0,
      a: any = 0;
    const c: any = [],
      l: any = (f as any)((h: any, p: any, d: any, w: any): any => {
        const g: any = (w as any) * (((d as any).rowIndent as any) + ((d as any).paddingX as any) as any),
          m: any = (me as any)(g, i, p, h, d, r);
        ((c as any).push as any)(m);
        const {
          height: u,
          width: v
        }: any = (p as any).BBox;
        (T as any)(h, (g as any) - ((d as any).rowIndent as any), (i as any) + ((u as any) / (2 as any) as any), g, (i as any) + ((u as any) / (2 as any) as any), (d as any).lineThickness), a = ((Math as any).max as any)(a, (g as any) + (v as any)), i += u;
      }, "drawNode"),
      s: any = (f as any)((h: any, p: any = 0): any => {
        (l as any)(n, h, t, p), (((h as any).children as any).forEach as any)((m: any): any => {
          (s as any)(m, (p as any) + (1 as any));
        });
        const {
          x: d,
          y: w,
          height: g
        }: any = (h as any).BBox;
        if (((h as any).children as any).length) {
          const {
            y: m,
            height: u
          }: any = (((h as any).children as any)[(((h as any).children as any).length as any) - (1 as any)] as any).BBox;
          (T as any)(n, (d as any) + ((t as any).paddingX as any), (w as any) + (g as any), (d as any) + ((t as any).paddingX as any), ((m as any) + ((u as any) / (2 as any) as any) as any) + (((t as any).lineThickness as any) / (2 as any) as any), (t as any).lineThickness);
        }
      }, "processNode");
    (s as any)(e);
    const o: any = ((c as any).filter as any)((h: any): any => ((h as any).node as any).description);
    if (((o as any).length as any) > (0 as any)) {
      const p: any = (((Math as any).max as any)(...((c as any).map as any)((d: any): any => (d as any).labelRightEdge)) as any) + (ue as any);
      for (const d of o) {
        const g: any = (((((((((((((((((d as any).nodeGroup as any).append as any)("text") as any).text as any)(((d as any).node as any).description) as any).attr as any)("dominant-baseline", "middle") as any).attr as any)("class", "treeView-node-description") as any).attr as any)("x", p) as any).attr as any)("y", (d as any).centerY) as any).node as any)() as any).getBBox as any)();
        a = ((Math as any).max as any)(a, ((p as any) + ((g as any).width as any) as any) + ((t as any).paddingX as any));
      }
    }
    for (const h of c) if (((h as any).node as any).cssClass?.split(/\s+/).includes("highlight")) {
      const p: any = (((h as any).nodeGroup as any).select as any)(".treeView-highlight-bg");
      if (!((p as any).empty as any)()) {
        const d: any = ((a as any) - ((((h as any).node as any).BBox as any).x as any) as any) + (8 as any);
        ((p as any).attr as any)("width", d), a = ((Math as any).max as any)(a, (((((h as any).node as any).BBox as any).x as any) + (d as any) as any) + (2 as any));
      }
    }
    return {
      totalHeight: i,
      totalWidth: a
    };
  }, "drawTree"),
  ve: any = (f as any)(async (n: any, e: any, t: any, r: any): Promise<any> => {
    ((D as any).debug as any)((`Rendering treeView diagram
` as any) + (n as any));
    const i: any = (r as any).db,
      a: any = ((i as any).getRoot as any)(),
      c: any = ((i as any).getConfig as any)(),
      l: any = (Z as any)(e);
    await (we as any)(l, a, c, e);
    const s: any = ((l as any).append as any)("g");
    ((s as any).attr as any)("class", "tree-view");
    const {
      totalHeight: o,
      totalWidth: h
    }: any = (xe as any)(s, a, c, e);
    ((l as any).attr as any)("viewBox", `-${((c as any).lineThickness as any) / (2 as any)} 0 ${h} ${o}`), (U as any)(l, o, h, (c as any).useMaxWidth);
  }, "draw"),
  be: any = {
    draw: ve
  },
  Ie: any = be,
  Ce: any = {
    labelFontSize: "16px",
    labelColor: "black",
    lineColor: "black",
    iconColor: "#546e7a",
    descriptionColor: "#6a9955",
    highlightBg: "rgba(255, 193, 7, 0.15)",
    highlightStroke: "#ffc107"
  },
  ye: any = (f as any)(({
    treeView: n
  }: any): any => {
    const {
      labelFontSize: e,
      labelColor: t,
      lineColor: r,
      iconColor: i,
      descriptionColor: a,
      highlightBg: c,
      highlightStroke: l
    }: any = (A as any)(Ce, n);
    return `
    .treeView-node-label {
        font-size: ${e};
        fill: ${t};
        white-space: pre;
    }
    .treeView-node-dir {
        font-weight: bold;
    }
    .treeView-node-line {
        stroke: ${r};
    }
    .treeView-node-icon {
        color: ${i};
    }
    .treeView-node-description {
        font-size: ${e};
        fill: ${a};
        font-style: italic;
        white-space: pre;
    }
    .treeView-highlight-bg {
        fill: ${c};
        stroke: ${l};
        stroke-width: 1;
    }
    `;
  }, "styles"),
  Be: any = ye,
  De: any = {
    db: I,
    renderer: Ie,
    parser: fe,
    styles: Be
  };
export { De as diagram };
//# debugId=ec3dabe1-60e0-42df-a233-effc7d1f69c7
