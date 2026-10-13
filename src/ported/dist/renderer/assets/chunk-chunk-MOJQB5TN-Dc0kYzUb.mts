declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "8b3a591b-7e3b-423d-a259-76b0f57d482c", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-8b3a591b-7e3b-423d-a259-76b0f57d482c");
  } catch (e: any) {}
} as any)();
import { _ as p, l as C, F as q, z as B, q as H, W as G, e as U, i as j, c as K } from "./chunk-mermaid.core-B9Iu5CoE.js";
var A: any = "",
  M: any = "",
  O: any = "",
  D: any = [],
  b: any = new (Map as any)(),
  v: any = (p as any)((e: any): any => (j as any)(e, (K as any)()), "sanitizeText"),
  y: any = (p as any)((e: any): any => {
    switch ((e as any).type) {
      case "terminal":
        return {
          ...e,
          value: (v as any)((e as any).value)
        };
      case "nonterminal":
        return {
          ...e,
          name: (v as any)((e as any).name)
        };
      case "sequence":
        return {
          ...e,
          elements: (((e as any).elements as any).map as any)(y)
        };
      case "choice":
        return {
          ...e,
          alternatives: (((e as any).alternatives as any).map as any)(y)
        };
      case "optional":
        return {
          ...e,
          element: (y as any)((e as any).element)
        };
      case "repetition":
        return {
          ...e,
          element: (y as any)((e as any).element),
          separator: (e as any).separator ? (y as any)((e as any).separator) : void 0
        };
      case "special":
        return {
          ...e,
          text: (v as any)((e as any).text)
        };
    }
  }, "sanitizeAstNode"),
  J: any = (p as any)((): any => {
    A = "", M = "", O = "", (D as any).length = 0, ((b as any).clear as any)(), (H as any)(), ((C as any).debug as any)("[Railroad] Database cleared");
  }, "clear"),
  Y: any = (p as any)((e: any): any => {
    A = (v as any)(e), ((C as any).debug as any)("[Railroad] Title set:", e);
  }, "setTitle"),
  P: any = (p as any)((): any => A, "getTitle"),
  Q: any = (p as any)((e: any): any => {
    const i: any = {
      ...e,
      name: (v as any)((e as any).name),
      definition: (y as any)((e as any).definition),
      comment: (e as any).comment ? (v as any)((e as any).comment) : void 0
    };
    ((C as any).debug as any)("[Railroad] Adding rule:", (i as any).name), ((b as any).has as any)((i as any).name) && ((C as any).warn as any)(`[Railroad] Rule '${(i as any).name}' is already defined. Overwriting.`), ((D as any).push as any)(i), ((b as any).set as any)((i as any).name, i);
  }, "addRule"),
  Z: any = (p as any)((): any => D, "getRules"),
  V: any = (p as any)((e: any): any => ((b as any).get as any)(e), "getRule"),
  ee: any = (p as any)((e: any): any => {
    M = (((v as any)(e) as any).replace as any)(/^\s+/g, ""), ((C as any).debug as any)("[Railroad] Accessibility title set:", e);
  }, "setAccTitle"),
  te: any = (p as any)((): any => M, "getAccTitle"),
  re: any = (p as any)((e: any): any => {
    O = (((v as any)(e) as any).replace as any)(/\n\s+/g, `
`), ((C as any).debug as any)("[Railroad] Accessibility description set:", e);
  }, "setAccDescription"),
  ie: any = (p as any)((): any => O, "getAccDescription"),
  ne: any = Y,
  ae: any = P,
  oe: any = {
    clear: J,
    setTitle: Y,
    getTitle: P,
    addRule: Q,
    getRules: Z,
    getRule: V,
    setAccTitle: ee,
    getAccTitle: te,
    setAccDescription: re,
    getAccDescription: ie,
    setDiagramTitle: ne,
    getDiagramTitle: ae
  },
  f: any = {
    compactMode: !1,
    padding: 10,
    verticalSeparation: 8,
    horizontalSeparation: 10,
    arcRadius: 10,
    fontSize: 14,
    fontFamily: "monospace",
    terminalFill: "#FFFFC0",
    terminalStroke: "#000000",
    terminalTextColor: "#000000",
    nonTerminalFill: "#FFFFFF",
    nonTerminalStroke: "#000000",
    nonTerminalTextColor: "#000000",
    lineColor: "#000000",
    strokeWidth: 2,
    markerFill: "#000000",
    commentFill: "#E8E8E8",
    commentStroke: "#888888",
    commentTextColor: "#666666",
    specialFill: "#F0E0FF",
    specialStroke: "#8800CC",
    ruleNameColor: "#000066",
    showMarkers: !0,
    markerRadius: 5
  },
  le: any = /^#(?:[\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$|^(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch)\([\d\s%+,./-]+\)$|^[a-z]+$/i,
  se: any = /^[\w "',.-]+$/,
  de: any = new (Set as any)(["compactMode", "padding", "verticalSeparation", "horizontalSeparation", "arcRadius", "fontSize", "fontFamily", "terminalFill", "terminalStroke", "terminalTextColor", "nonTerminalFill", "nonTerminalStroke", "nonTerminalTextColor", "lineColor", "strokeWidth", "markerFill", "commentFill", "commentStroke", "commentTextColor", "specialFill", "specialStroke", "ruleNameColor", "showMarkers", "markerRadius"]),
  L: any = (p as any)((e: any): any => e ? ((((Object as any).keys as any)(e) as any).every as any)((i: any): any => (i as any) === ("railroad" as any) || ((de as any).has as any)(i)) : !1, "isRailroadStyleOptions"),
  ce: any = (p as any)((e: any): any => e ? "railroad" in e && (e as any).railroad ? (e as any).railroad : (L as any)(e) ? e : {} : {}, "extractRailroadOverrides"),
  me: any = (p as any)((e: any): any => {
    if (!e || (L as any)(e)) return {};
    const {
      railroad: i,
      svgId: a,
      theme: n,
      look: t,
      ...r
    }: any = e;
    return r;
  }, "extractThemeOverrides"),
  m: any = (p as any)((e: any, i: any): any => {
    if ((typeof e as any) != ("string" as any)) return i;
    const a: any = ((e as any).trim as any)();
    return ((le as any).test as any)(a) ? a : i;
  }, "sanitizeColorValue"),
  I: any = (p as any)((e: any, i: any): any => {
    if ((typeof e as any) != ("string" as any)) return i;
    const a: any = ((e as any).trim as any)();
    return ((se as any).test as any)(a) ? a : i;
  }, "sanitizeFontFamilyValue"),
  F: any = (p as any)((e: any, i: any): any => {
    const a: any = (typeof e as any) == ("number" as any) ? e : (typeof e as any) == ("string" as any) ? ((Number as any).parseFloat as any)(e) : (Number as any).NaN;
    return ((Number as any).isFinite as any)(a) && (a as any) >= (0 as any) ? a : i;
  }, "sanitizeNumberValue"),
  he: any = (p as any)((e: any): any => {
    const i: any = (typeof e as any) == ("number" as any) ? e : (typeof e as any) == ("string" as any) ? ((Number as any).parseFloat as any)(e) : (Number as any).NaN;
    return ((Number as any).isFinite as any)(i) && (i as any) > (0 as any) ? i : void 0;
  }, "parseThemeFontSize"),
  pe: any = (p as any)((e: any): any => {
    const i: any = (I as any)((e as any).fontFamily, (f as any).fontFamily),
      a: any = (he as any)((e as any).fontSize) ?? (f as any).fontSize;
    return {
      ...f,
      fontFamily: i,
      fontSize: a,
      terminalFill: (m as any)((e as any).secondBkg ?? (e as any).secondaryColor, (f as any).terminalFill),
      terminalStroke: (m as any)((e as any).secondaryBorderColor ?? (e as any).lineColor, (f as any).terminalStroke),
      terminalTextColor: (m as any)((e as any).secondaryTextColor ?? (e as any).textColor, (f as any).terminalTextColor),
      nonTerminalFill: (m as any)((e as any).mainBkg ?? (e as any).background, (f as any).nonTerminalFill),
      nonTerminalStroke: (m as any)((e as any).primaryBorderColor ?? (e as any).lineColor, (f as any).nonTerminalStroke),
      nonTerminalTextColor: (m as any)((e as any).primaryTextColor ?? (e as any).textColor, (f as any).nonTerminalTextColor),
      lineColor: (m as any)((e as any).lineColor, (f as any).lineColor),
      markerFill: (m as any)((e as any).lineColor, (f as any).markerFill),
      commentFill: (m as any)((e as any).labelBackground ?? (e as any).tertiaryColor, (f as any).commentFill),
      commentStroke: (m as any)((e as any).tertiaryBorderColor ?? (e as any).lineColor, (f as any).commentStroke),
      commentTextColor: (m as any)((e as any).tertiaryTextColor ?? (e as any).textColor, (f as any).commentTextColor),
      specialFill: (m as any)((e as any).tertiaryColor ?? (e as any).secondaryColor, (f as any).specialFill),
      specialStroke: (m as any)((e as any).tertiaryBorderColor ?? (e as any).secondaryBorderColor, (f as any).specialStroke),
      ruleNameColor: (m as any)((e as any).titleColor ?? (e as any).textColor, (f as any).ruleNameColor)
    };
  }, "buildThemeDefaults"),
  E: any = (p as any)((e: any): any => {
    const i: any = (B as any)(),
      a: any = {
        ...(G as any)(),
        ...((i as any).themeVariables ?? {}),
        ...(me as any)(e)
      },
      n: any = (pe as any)(a),
      t: any = {
        ...((i as any).railroad ?? {}),
        ...(ce as any)(e)
      };
    return {
      compactMode: (t as any).compactMode ?? (n as any).compactMode,
      padding: (F as any)((t as any).padding, (n as any).padding),
      verticalSeparation: (F as any)((t as any).verticalSeparation, (n as any).verticalSeparation),
      horizontalSeparation: (F as any)((t as any).horizontalSeparation, (n as any).horizontalSeparation),
      arcRadius: (F as any)((t as any).arcRadius, (n as any).arcRadius),
      fontSize: (F as any)((t as any).fontSize, (n as any).fontSize),
      fontFamily: (I as any)((t as any).fontFamily, (n as any).fontFamily),
      terminalFill: (m as any)((t as any).terminalFill, (n as any).terminalFill),
      terminalStroke: (m as any)((t as any).terminalStroke, (n as any).terminalStroke),
      terminalTextColor: (m as any)((t as any).terminalTextColor, (n as any).terminalTextColor),
      nonTerminalFill: (m as any)((t as any).nonTerminalFill, (n as any).nonTerminalFill),
      nonTerminalStroke: (m as any)((t as any).nonTerminalStroke, (n as any).nonTerminalStroke),
      nonTerminalTextColor: (m as any)((t as any).nonTerminalTextColor, (n as any).nonTerminalTextColor),
      lineColor: (m as any)((t as any).lineColor, (n as any).lineColor),
      strokeWidth: (F as any)((t as any).strokeWidth, (n as any).strokeWidth),
      markerFill: (m as any)((t as any).markerFill, (n as any).markerFill),
      commentFill: (m as any)((t as any).commentFill, (n as any).commentFill),
      commentStroke: (m as any)((t as any).commentStroke, (n as any).commentStroke),
      commentTextColor: (m as any)((t as any).commentTextColor, (n as any).commentTextColor),
      specialFill: (m as any)((t as any).specialFill, (n as any).specialFill),
      specialStroke: (m as any)((t as any).specialStroke, (n as any).specialStroke),
      ruleNameColor: (m as any)((t as any).ruleNameColor, (n as any).ruleNameColor),
      showMarkers: (t as any).showMarkers ?? (n as any).showMarkers,
      markerRadius: (F as any)((t as any).markerRadius, (n as any).markerRadius)
    };
  }, "buildRailroadStyleOptions"),
  Te: any = (p as any)((e: any): any => {
    const {
      fontFamily: i,
      fontSize: a,
      terminalFill: n,
      terminalStroke: t,
      terminalTextColor: r,
      nonTerminalFill: o,
      nonTerminalStroke: g,
      nonTerminalTextColor: l,
      lineColor: s,
      strokeWidth: h,
      markerFill: u,
      commentFill: c,
      commentStroke: w,
      commentTextColor: d,
      specialFill: T,
      specialStroke: z,
      ruleNameColor: S
    }: any = (E as any)(e);
    return `
  .railroad-diagram {
    font-family: ${i};
    font-size: ${a}px;
  }

  .railroad-terminal rect {
    fill: ${n};
    stroke: ${t};
    stroke-width: ${h}px;
  }

  .railroad-terminal text {
    fill: ${r};
    font-family: ${i};
    font-size: ${a}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-nonterminal rect {
    fill: ${o};
    stroke: ${g};
    stroke-width: ${h}px;
  }

  .railroad-nonterminal text {
    fill: ${l};
    font-family: ${i};
    font-size: ${a}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-line {
    stroke: ${s};
    stroke-width: ${h}px;
    fill: none;
  }

  .railroad-start circle,
  .railroad-end circle {
    fill: ${u};
  }

  .railroad-comment ellipse {
    fill: ${c};
    stroke: ${w};
    stroke-width: ${h}px;
  }

  .railroad-comment text {
    fill: ${d};
    font-style: italic;
    font-family: ${i};
    font-size: ${a}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-special rect {
    fill: ${T};
    stroke: ${z};
    stroke-width: ${h}px;
    stroke-dasharray: 5,3;
  }

  .railroad-special text {
    fill: ${l};
    font-family: ${i};
    font-size: ${a}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-rule-name {
    font-weight: bold;
    fill: ${S};
    font-family: ${i};
    font-size: ${a}px;
  }

  .railroad-group {
    /* Grouping container, no specific styles */
  }
`;
  }, "getStyles"),
  R: any,
  x: any = (R = class {
    declare d: any;
    [key: string]: any;
    constructor() {
      (this as any).d = "";
    }
    moveTo(i: any, a: any): any {
      return (this as any).d += `M ${i} ${a} `, this;
    }
    lineTo(i: any, a: any): any {
      return (this as any).d += `L ${i} ${a} `, this;
    }
    horizontalTo(i: any): any {
      return (this as any).d += `H ${i} `, this;
    }
    verticalTo(i: any): any {
      return (this as any).d += `V ${i} `, this;
    }
    arcTo(i: any, a: any, n: any, t: any, r: any, o: any, g: any): any {
      return (this as any).d += `A ${i} ${a} ${n} ${t ? 1 : 0} ${r ? 1 : 0} ${o} ${g} `, this;
    }
    build(): any {
      return (((this as any).d as any).trim as any)();
    }
  }, (p as any)(R, "PathBuilder"), R),
  $: any,
  ue: any = ($ = class {
    declare config: any;
    declare svg: any;
    declare textCache: any;
    [key: string]: any;
    constructor(i: any, a: any = (E as any)()) {
      (this as any).textCache = new (Map as any)(), (this as any).svg = i, (this as any).config = a;
    }
    measureText(i: any): any {
      if ((((this as any).textCache as any).has as any)(i)) return (((this as any).textCache as any).get as any)(i);
      const a: any = (((((((((this as any).svg as any).append as any)("text") as any).attr as any)("font-family", ((this as any).config as any).fontFamily) as any).attr as any)("font-size", ((this as any).config as any).fontSize) as any).text as any)(i),
        n: any = ((((a as any).node as any)() as any).getBBox as any)(),
        t: any = {
          width: (n as any).width,
          height: (n as any).height
        };
      return ((a as any).remove as any)(), (((this as any).textCache as any).set as any)(i, t), t;
    }
    renderTerminal(i: any, a: any): any {
      const n: any = ((this as any).measureText as any)(a),
        t: any = ((n as any).width as any) + ((((this as any).config as any).padding as any) * (2 as any) as any),
        r: any = ((n as any).height as any) + ((((this as any).config as any).padding as any) * (2 as any) as any),
        o: any = ((((i as any).append as any)("g") as any).attr as any)("class", "railroad-terminal");
      return ((((((((((((((o as any).append as any)("rect") as any).attr as any)("x", 0) as any).attr as any)("y", 0) as any).attr as any)("width", t) as any).attr as any)("height", r) as any).attr as any)("rx", 10) as any).attr as any)("ry", 10), ((((((((o as any).append as any)("text") as any).attr as any)("x", (t as any) / (2 as any)) as any).attr as any)("y", (r as any) / (2 as any)) as any).text as any)(a), {
        element: ((o as any).node as any)(),
        dimensions: {
          width: t,
          height: r,
          up: (r as any) / (2 as any),
          down: (r as any) / (2 as any)
        }
      };
    }
    renderNonTerminal(i: any, a: any): any {
      const n: any = ((this as any).measureText as any)(a),
        t: any = ((n as any).width as any) + ((((this as any).config as any).padding as any) * (2 as any) as any),
        r: any = ((n as any).height as any) + ((((this as any).config as any).padding as any) * (2 as any) as any),
        o: any = ((((i as any).append as any)("g") as any).attr as any)("class", "railroad-nonterminal");
      return ((((((((((o as any).append as any)("rect") as any).attr as any)("x", 0) as any).attr as any)("y", 0) as any).attr as any)("width", t) as any).attr as any)("height", r), ((((((((o as any).append as any)("text") as any).attr as any)("x", (t as any) / (2 as any)) as any).attr as any)("y", (r as any) / (2 as any)) as any).text as any)(a), {
        element: ((o as any).node as any)(),
        dimensions: {
          width: t,
          height: r,
          up: (r as any) / (2 as any),
          down: (r as any) / (2 as any)
        }
      };
    }
    renderSequence(i: any, a: any): any {
      const n: any = ((a as any).map as any)((s: any): any => ((this as any).renderExpression as any)(i, s));
      let t: any = 0,
        r: any = 0,
        o: any = 0;
      for (const s of n) t += ((s as any).dimensions as any).width, r = ((Math as any).max as any)(r, ((s as any).dimensions as any).up), o = ((Math as any).max as any)(o, ((s as any).dimensions as any).down);
      t += (((n as any).length as any) - (1 as any) as any) * (((this as any).config as any).horizontalSeparation as any);
      const g: any = ((((i as any).append as any)("g") as any).attr as any)("class", "railroad-sequence");
      let l: any = 0;
      for (let s: any = 0; (s as any) < ((n as any).length as any); s++) {
        const h: any = (n as any)[s],
          u: any = (r as any) - (((h as any).dimensions as any).up as any);
        if (((((((g as any).node as any)() as any).appendChild as any)((h as any).element) as any).setAttribute as any)("transform", `translate(${l}, ${u})`), (s as any) < (((n as any).length as any) - (1 as any) as any)) {
          const w: any = (l as any) + (((h as any).dimensions as any).width as any),
            d: any = (w as any) + (((this as any).config as any).horizontalSeparation as any),
            T: any = r;
          ((((((g as any).append as any)("path") as any).attr as any)("class", "railroad-line") as any).attr as any)("d", ((((((new (x as any)() as any).moveTo as any)(w, T) as any).lineTo as any)(d, T) as any).build as any)());
        }
        l += (((h as any).dimensions as any).width as any) + (((this as any).config as any).horizontalSeparation as any);
      }
      return {
        element: ((g as any).node as any)(),
        dimensions: {
          width: t,
          height: (r as any) + (o as any),
          up: r,
          down: o
        }
      };
    }
    renderChoice(i: any, a: any): any {
      const n: any = ((a as any).map as any)((c: any): any => ((this as any).renderExpression as any)(i, c));
      let t: any = 0,
        r: any = 0;
      for (const c of n) t = ((Math as any).max as any)(t, ((c as any).dimensions as any).width), r += ((c as any).dimensions as any).height;
      r += (((n as any).length as any) - (1 as any) as any) * (((this as any).config as any).verticalSeparation as any);
      const o: any = ((this as any).config as any).arcRadius,
        g: any = (o as any) * (4 as any),
        l: any = (t as any) + (g as any),
        s: any = ((((i as any).append as any)("g") as any).attr as any)("class", "railroad-choice");
      let h: any = 0;
      const u: any = (r as any) / (2 as any);
      for (const c of n) {
        const w: any = h,
          d: any = (w as any) + (((c as any).dimensions as any).up as any),
          T: any = ((o as any) * (2 as any) as any) + (((t as any) - (((c as any).dimensions as any).width as any) as any) / (2 as any) as any);
        ((((((s as any).node as any)() as any).appendChild as any)((c as any).element) as any).setAttribute as any)("transform", `translate(${T}, ${w})`);
        const S: any = new (x as any)(),
          k: any = (d as any) > (u as any);
        (d as any) === (u as any) ? ((((S as any).moveTo as any)(0, u) as any).lineTo as any)(T, d) : ((((((((((S as any).moveTo as any)(0, u) as any).arcTo as any)(o, o, 0, !1, k, o, (u as any) + ((k ? o : -o) as any)) as any).lineTo as any)(o, (d as any) - ((k ? o : -o) as any)) as any).arcTo as any)(o, o, 0, !1, !k, (o as any) * (2 as any), d) as any).lineTo as any)(T, d), ((((((s as any).append as any)("path") as any).attr as any)("class", "railroad-line") as any).attr as any)("d", ((S as any).build as any)());
        const N: any = new (x as any)(),
          W: any = (T as any) + (((c as any).dimensions as any).width as any),
          X: any = (l as any) - ((o as any) * (2 as any) as any);
        (d as any) === (u as any) ? ((((N as any).moveTo as any)(W, d) as any).lineTo as any)(l, u) : ((((((((((N as any).moveTo as any)(W, d) as any).lineTo as any)(X, d) as any).arcTo as any)(o, o, 0, !1, !k, (l as any) - (o as any), (d as any) + ((k ? -o : o) as any)) as any).lineTo as any)((l as any) - (o as any), (u as any) + ((k ? o : -o) as any)) as any).arcTo as any)(o, o, 0, !1, k, l, u), ((((((s as any).append as any)("path") as any).attr as any)("class", "railroad-line") as any).attr as any)("d", ((N as any).build as any)()), h += (((c as any).dimensions as any).height as any) + (((this as any).config as any).verticalSeparation as any);
      }
      return {
        element: ((s as any).node as any)(),
        dimensions: {
          width: l,
          height: r,
          up: u,
          down: (r as any) - (u as any)
        }
      };
    }
    renderOptional(i: any, a: any): any {
      const n: any = ((this as any).renderExpression as any)(i, a),
        t: any = ((this as any).config as any).arcRadius,
        r: any = (t as any) * (2 as any),
        o: any = (((n as any).dimensions as any).width as any) + ((t as any) * (4 as any) as any),
        g: any = (((n as any).dimensions as any).height as any) + (r as any),
        l: any = ((((i as any).append as any)("g") as any).attr as any)("class", "railroad-optional"),
        s: any = (t as any) * (2 as any),
        h: any = r;
      ((((((l as any).node as any)() as any).appendChild as any)((n as any).element) as any).setAttribute as any)("transform", `translate(${s}, ${h})`);
      const c: any = (h as any) + (((n as any).dimensions as any).up as any),
        w: any = ((((new (x as any)() as any).moveTo as any)(0, c) as any).lineTo as any)((t as any) * (2 as any), c);
      ((((((l as any).append as any)("path") as any).attr as any)("class", "railroad-line") as any).attr as any)("d", ((w as any).build as any)());
      const d: any = ((((new (x as any)() as any).moveTo as any)((s as any) + (((n as any).dimensions as any).width as any), c) as any).lineTo as any)(o, c);
      ((((((l as any).append as any)("path") as any).attr as any)("class", "railroad-line") as any).attr as any)("d", ((d as any).build as any)());
      const T: any = ((((((((((((((((new (x as any)() as any).moveTo as any)(0, c) as any).arcTo as any)(t, t, 0, !1, !1, t, (c as any) - (t as any)) as any).lineTo as any)(t, t) as any).arcTo as any)(t, t, 0, !1, !0, (t as any) * (2 as any), 0) as any).lineTo as any)((o as any) - ((t as any) * (2 as any) as any), 0) as any).arcTo as any)(t, t, 0, !1, !0, (o as any) - (t as any), t) as any).lineTo as any)((o as any) - (t as any), (c as any) - (t as any)) as any).arcTo as any)(t, t, 0, !1, !1, o, c);
      return ((((((l as any).append as any)("path") as any).attr as any)("class", "railroad-line") as any).attr as any)("d", ((T as any).build as any)()), {
        element: ((l as any).node as any)(),
        dimensions: {
          width: o,
          height: g,
          up: c,
          down: (g as any) - (c as any)
        }
      };
    }
    renderRepetition(i: any, a: any, n: any): any {
      const t: any = ((this as any).renderExpression as any)(i, a),
        r: any = ((this as any).config as any).arcRadius,
        o: any = (r as any) * (2 as any),
        g: any = (((t as any).dimensions as any).width as any) + ((r as any) * (4 as any) as any),
        l: any = (n as any) === (0 as any),
        s: any = ((((t as any).dimensions as any).height as any) + (o as any) as any) + ((l ? o : 0) as any),
        h: any = ((((i as any).append as any)("g") as any).attr as any)("class", "railroad-repetition"),
        u: any = (r as any) * (2 as any),
        c: any = l ? o : 0;
      ((((((h as any).node as any)() as any).appendChild as any)((t as any).element) as any).setAttribute as any)("transform", `translate(${u}, ${c})`);
      const d: any = (c as any) + (((t as any).dimensions as any).up as any);
      ((((((h as any).append as any)("path") as any).attr as any)("class", "railroad-line") as any).attr as any)("d", ((((((new (x as any)() as any).moveTo as any)(0, d) as any).lineTo as any)((r as any) * (2 as any), d) as any).build as any)()), ((((((h as any).append as any)("path") as any).attr as any)("class", "railroad-line") as any).attr as any)("d", ((((((new (x as any)() as any).moveTo as any)((u as any) + (((t as any).dimensions as any).width as any), d) as any).lineTo as any)(g, d) as any).build as any)());
      const T: any = ((c as any) + (((t as any).dimensions as any).height as any) as any) + (r as any),
        z: any = ((((((((((((((((new (x as any)() as any).moveTo as any)((u as any) + (((t as any).dimensions as any).width as any), d) as any).arcTo as any)(r, r, 0, !1, !0, ((u as any) + (((t as any).dimensions as any).width as any) as any) + (r as any), (d as any) + (r as any)) as any).lineTo as any)(((u as any) + (((t as any).dimensions as any).width as any) as any) + (r as any), T) as any).arcTo as any)(r, r, 0, !1, !0, (u as any) + (((t as any).dimensions as any).width as any), (T as any) + (r as any)) as any).lineTo as any)((r as any) * (2 as any), (T as any) + (r as any)) as any).arcTo as any)(r, r, 0, !1, !0, r, T) as any).lineTo as any)(r, (d as any) + (r as any)) as any).arcTo as any)(r, r, 0, !1, !0, (r as any) * (2 as any), d);
      if (((((((h as any).append as any)("path") as any).attr as any)("class", "railroad-line") as any).attr as any)("d", ((z as any).build as any)()), l) {
        const S: any = ((((((((((((((((new (x as any)() as any).moveTo as any)(0, d) as any).arcTo as any)(r, r, 0, !1, !1, r, (d as any) - (r as any)) as any).lineTo as any)(r, r) as any).arcTo as any)(r, r, 0, !1, !0, (r as any) * (2 as any), 0) as any).lineTo as any)((g as any) - ((r as any) * (2 as any) as any), 0) as any).arcTo as any)(r, r, 0, !1, !0, (g as any) - (r as any), r) as any).lineTo as any)((g as any) - (r as any), (d as any) - (r as any)) as any).arcTo as any)(r, r, 0, !1, !1, g, d);
        ((((((h as any).append as any)("path") as any).attr as any)("class", "railroad-line") as any).attr as any)("d", ((S as any).build as any)());
      }
      return {
        element: ((h as any).node as any)(),
        dimensions: {
          width: g,
          height: s,
          up: d,
          down: (s as any) - (d as any)
        }
      };
    }
    renderSpecial(i: any, a: any): any {
      const n: any = ((this as any).measureText as any)((("? " as any) + (a as any) as any) + (" ?" as any)),
        t: any = ((n as any).width as any) + ((((this as any).config as any).padding as any) * (2 as any) as any),
        r: any = ((n as any).height as any) + ((((this as any).config as any).padding as any) * (2 as any) as any),
        o: any = ((((i as any).append as any)("g") as any).attr as any)("class", "railroad-special");
      return ((((((((((o as any).append as any)("rect") as any).attr as any)("x", 0) as any).attr as any)("y", 0) as any).attr as any)("width", t) as any).attr as any)("height", r), ((((((((o as any).append as any)("text") as any).attr as any)("x", (t as any) / (2 as any)) as any).attr as any)("y", (r as any) / (2 as any)) as any).text as any)((("? " as any) + (a as any) as any) + (" ?" as any)), {
        element: ((o as any).node as any)(),
        dimensions: {
          width: t,
          height: r,
          up: (r as any) / (2 as any),
          down: (r as any) / (2 as any)
        }
      };
    }
    renderExpression(i: any, a: any): any {
      switch ((a as any).type) {
        case "terminal":
          return ((this as any).renderTerminal as any)(i, (a as any).value);
        case "nonterminal":
          return ((this as any).renderNonTerminal as any)(i, (a as any).name);
        case "sequence":
          return ((this as any).renderSequence as any)(i, (a as any).elements);
        case "choice":
          return ((this as any).renderChoice as any)(i, (a as any).alternatives);
        case "optional":
          return ((this as any).renderOptional as any)(i, (a as any).element);
        case "repetition":
          return ((this as any).renderRepetition as any)(i, (a as any).element, (a as any).min);
        case "special":
          return ((this as any).renderSpecial as any)(i, (a as any).text);
        default:
          throw new (Error as any)(`Unknown node type: ${(a as any).type}`);
      }
    }
    renderRule(i: any, a: any): any {
      const n: any = (((((((this as any).svg as any).append as any)("g") as any).attr as any)("class", "railroad-rule") as any).attr as any)("transform", `translate(0, ${a})`),
        t: any = ((i as any).name as any) + (" =" as any),
        r: any = ((((this as any).measureText as any)(t) as any).width as any) + (20 as any),
        o: any = (r as any) + (20 as any),
        g: any = ((n as any).append as any)("g"),
        l: any = ((this as any).renderExpression as any)(g, (i as any).definition),
        s: any = ((Math as any).max as any)(20, ((l as any).dimensions as any).up),
        h: any = (s as any) - (((l as any).dimensions as any).up as any);
      return ((g as any).attr as any)("transform", `translate(${o}, ${h})`), ((((((((((((((n as any).append as any)("g") as any).attr as any)("class", "railroad-rule-name-group") as any).append as any)("text") as any).attr as any)("class", "railroad-rule-name") as any).attr as any)("x", 0) as any).attr as any)("y", s) as any).text as any)(t), ((((((((((((n as any).append as any)("g") as any).attr as any)("class", "railroad-start") as any).append as any)("circle") as any).attr as any)("cx", r) as any).attr as any)("cy", s) as any).attr as any)("r", ((this as any).config as any).markerRadius), ((((((((((((n as any).append as any)("g") as any).attr as any)("class", "railroad-end") as any).append as any)("circle") as any).attr as any)("cx", ((o as any) + (((l as any).dimensions as any).width as any) as any) + (10 as any)) as any).attr as any)("cy", s) as any).attr as any)("r", ((this as any).config as any).markerRadius), ((((((n as any).append as any)("path") as any).attr as any)("class", "railroad-line") as any).attr as any)("d", ((((((new (x as any)() as any).moveTo as any)((r as any) + (((this as any).config as any).markerRadius as any), s) as any).lineTo as any)(o, s) as any).build as any)()), ((((((n as any).append as any)("path") as any).attr as any)("class", "railroad-line") as any).attr as any)("d", ((((((new (x as any)() as any).moveTo as any)((o as any) + (((l as any).dimensions as any).width as any), s) as any).lineTo as any)((((o as any) + (((l as any).dimensions as any).width as any) as any) + (10 as any) as any) - (((this as any).config as any).markerRadius as any), s) as any).build as any)()), {
        height: ((Math as any).max as any)(40, ((h as any) + (((l as any).dimensions as any).height as any) as any) + ((((this as any).config as any).padding as any) * (2 as any) as any)),
        width: (((o as any) + (((l as any).dimensions as any).width as any) as any) + (10 as any) as any) + (((this as any).config as any).markerRadius as any)
      };
    }
    renderDiagram(i: any): any {
      let a: any = ((this as any).config as any).padding,
        n: any = 0;
      for (const t of i) {
        const r: any = ((this as any).renderRule as any)(t, a);
        a += ((r as any).height as any) + (((this as any).config as any).verticalSeparation as any), n = ((Math as any).max as any)(n, (r as any).width);
      }
      return {
        width: (n as any) + ((((this as any).config as any).padding as any) * (2 as any) as any),
        height: (a as any) + (((this as any).config as any).padding as any)
      };
    }
  }, (p as any)($, "RailroadRenderer"), $),
  _: any = (p as any)((e: any, i: any, a: any): any => {
    (U as any)(e, (i as any).height, (i as any).width, a), ((e as any).attr as any)("viewBox", `0 0 ${(i as any).width} ${(i as any).height}`);
  }, "configureRailroadSvgSize"),
  ge: any = (p as any)((e: any, i: any, a: any): any => {
    ((C as any).debug as any)((`[Railroad] Rendering diagram
` as any) + (e as any));
    try {
      const n: any = (q as any)(i);
      ((n as any).attr as any)("class", "railroad-diagram");
      const r: any = ((B as any)() as any).railroad?.useMaxWidth ?? !0,
        o: any = ((oe as any).getRules as any)();
      if (((C as any).debug as any)(`[Railroad] Rendering ${(o as any).length} rules`), ((o as any).length as any) === (0 as any)) {
        ((C as any).warn as any)("[Railroad] No rules to render"), (_ as any)(n, {
          height: 100,
          width: 200
        }, r);
        return;
      }
      const l: any = ((new (ue as any)(n, (E as any)()) as any).renderDiagram as any)(o);
      (_ as any)(n, l, r), ((C as any).debug as any)("[Railroad] Render complete");
    } catch (n: any) {
      throw ((C as any).error as any)("[Railroad] Render error:", n), n;
    }
  }, "draw"),
  xe: any = {
    draw: ge
  };
export { oe as d, Te as g, xe as r };
//# debugId=8b3a591b-7e3b-423d-a259-76b0f57d482c
