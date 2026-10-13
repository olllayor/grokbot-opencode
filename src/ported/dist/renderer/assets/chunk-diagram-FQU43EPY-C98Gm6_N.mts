declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "43d3f68a-ce52-4c0c-aa1c-cc02da8d7c9d", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-43d3f68a-ce52-4c0c-aa1c-cc02da8d7c9d");
  } catch (e: any) {}
} as any)();
import { p as re } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _ as o, p as oe, o as se, s as de, g as le, a as ce, b as me, l as g, c as D, d as ue, A as xe, q as fe, B as ge, z as M, D as he, i as y, w as P, ak as pe } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as be, i as ve } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var T: string = "position frame",
  $: string = "frame positioned",
  S: string = "position relation",
  N: string = "relation positioned",
  we: any = (o as any)(function (this: any, e: any): any {
    ((g as any).debug as any)("options str", e);
  }, "setOptions"),
  ye: any = (o as any)(function (this: any): any {
    return {};
  }, "getOptions"),
  Pe: any = (o as any)(function (this: any): any {
    (C as any)(), (fe as any)();
  }, "clear");
function C(this: any): any {
  B = {};
}
(o as any)(C, "reset");
var Se: any = (he as any).eventmodeling,
  ke: any = (o as any)((): any => (ge as any)({
    ...Se,
    ...((M as any)() as any).eventmodeling
  }), "getConfig"),
  B: any = {};
function O(this: any): any {
  let e: any = Fe;
  const {
      ast: n
    }: any = B,
    t: any = (E as any)();
  if (!n) throw new (Error as any)("No data for EventModel");
  return (((n as any).frames as any).forEach as any)((i: any, a: any): any => {
    const r: any = (G as any)(i, (n as any).dataEntities, t);
    e = (v as any)(e, {
      $kind: T,
      index: a,
      frame: i,
      textProps: r
    });
    let d: any;
    (K as any)(i) ? (((g as any).debug as any)("source frame", (i as any).sourceFrames), d = (((n as any).frames as any).filter as any)((l: any): any => (((i as any).sourceFrames as any).some as any)((c: any): any => ((c as any).$refText as any) === ((l as any).name as any))), ((d as any).forEach as any)((l: any): any => {
      e = (v as any)(e, {
        $kind: S,
        index: a,
        frame: i,
        sourceFrame: l
      });
    })) : e = (v as any)(e, {
      $kind: S,
      index: a,
      frame: i
    });
  }), e = {
    ...e,
    sortedSwimlanesArray: (A as any)((e as any).swimlanes)
  }, e;
}
(o as any)(O, "getState");
function I(this: any, e: any): any {
  (B as any).ast = e;
}
(o as any)(I, "setAst");
var s: any = {
  swimlaneMinHeight: 70,
  swimlanePadding: 15,
  swimlaneGap: 10,
  boxPadding: 10,
  boxOverlap: 90,
  boxDefaultY: 0,
  boxMinWidth: 80,
  boxMaxWidth: 450,
  boxMinHeight: 80,
  boxMaxHeight: 750,
  contentStartX: 250,
  textMaxWidth: 430,
  boxTextFontWeight: "bold",
  boxTextPadding: 10,
  swimlaneTextFontWeight: "bold",
  labelUiAutomation: "UI/Automation",
  labelUiAutomationPrefix: "UI/A: ",
  labelCommandReadModel: "Command/Read Model",
  labelCommandReadModelPrefix: "C/RM: ",
  labelEvents: "Events",
  labelEventsPrefix: "Stream: "
};
function E(this: any): any {
  return s;
}
(o as any)(E, "getDiagramProps");
var Fe: any = {
  boxes: [],
  swimlanes: {},
  relations: [],
  maxR: 0,
  sortedSwimlanesArray: []
};
function W(this: any, e: any): any {
  const n: any = ((e as any).split as any)(".");
  if (((n as any).length as any) === (2 as any)) return (n as any)[0];
}
(o as any)(W, "extractNamespace");
function H(this: any, e: any): any {
  const n: any = ((e as any).split as any)(".");
  return ((n as any).length as any) === (2 as any) ? (n as any)[1] : e;
}
(o as any)(H, "extractName");
function U(this: any, e: any, n: any): any {
  if (!(!n || ((n as any).length as any) === (0 as any))) return ((((Object as any).values as any)(e) as any).find as any)((t: any): any => ((t as any).namespace as any) === (n as any));
}
(o as any)(U, "findSwimlaneByNamespace");
function b(this: any, e: any, n: any, t: any): any {
  return (((Math as any).max as any)(n, ...((((((Object as any).keys as any)(e) as any).filter as any)((i: any): any => {
    const a: any = ((Number as any).parseInt as any)(i);
    return (a as any) > (n as any) && (a as any) < (t as any);
  }) as any).map as any)((i: any): any => ((Number as any).parseInt as any)(i))) as any) + (1 as any);
}
(o as any)(b, "findNextAvailableIndex");
function _(this: any, e: any, n: any): any {
  const t: any = (W as any)((e as any).entityIdentifier),
    i: any = (U as any)(n, t);
  switch ((e as any).modelEntityType) {
    case "ui":
    case "pcr":
    case "processor":
      return i ? {
        index: (i as any).index,
        label: (i as any).namespace || (s as any).labelUiAutomation
      } : t ? {
        index: (b as any)(n, 0, 100),
        label: ((s as any).labelUiAutomationPrefix as any) + (t as any)
      } : {
        index: 0,
        label: (s as any).labelUiAutomation
      };
    case "rmo":
    case "readmodel":
    case "cmd":
    case "command":
      return i ? {
        index: (i as any).index,
        label: (i as any).namespace || (s as any).labelCommandReadModel
      } : t ? {
        index: (b as any)(n, 100, 200),
        label: ((s as any).labelCommandReadModelPrefix as any) + (t as any)
      } : {
        index: 100,
        label: (s as any).labelCommandReadModel
      };
    default:
      return i ? {
        index: (i as any).index,
        label: (i as any).namespace || (s as any).labelEvents
      } : t ? {
        index: (b as any)(n, 200, 300),
        label: ((s as any).labelEventsPrefix as any) + (t as any)
      } : {
        index: 200,
        label: (s as any).labelEvents
      };
  }
}
(o as any)(_, "calculateSwimlaneProps");
function L(this: any, e: any): any {
  const {
    themeVariables: n
  }: any = (M as any)();
  switch ((e as any).modelEntityType) {
    case "ui":
      return {
        fill: (n as any).emUiFill ?? "white",
        stroke: (n as any).emUiStroke ?? "#dbdada"
      };
    case "pcr":
    case "processor":
      return {
        fill: (n as any).emProcessorFill ?? "#edb3f6",
        stroke: (n as any).emProcessorStroke ?? "#b88cbf"
      };
    case "rmo":
    case "readmodel":
      return {
        fill: (n as any).emReadModelFill ?? "#d3f1a2",
        stroke: (n as any).emReadModelStroke ?? "#a3b732"
      };
    case "cmd":
    case "command":
      return {
        fill: (n as any).emCommandFill ?? "#bcd6fe",
        stroke: (n as any).emCommandStroke ?? "#679ac3"
      };
    case "evt":
    case "event":
      return {
        fill: (n as any).emEventFill ?? "#ffb778",
        stroke: (n as any).emEventStroke ?? "#c19a0f"
      };
    default:
      return {
        fill: "red",
        stroke: "black"
      };
  }
}
(o as any)(L, "calculateEntityVisualProps");
function G(this: any, e: any, n: any, t: any): any {
  const i: any = (M as any)(),
    a: any = (y as any)((H as any)((e as any).entityIdentifier) ?? "", i);
  let r: any;
  const d: any = {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    joinWith: "<br/>"
  };
  let c: any = `<b>${(P as any)(a, (t as any).textMaxWidth, d)}</b>`;
  if ((e as any).dataInlineValue && (r = (e as any).dataInlineValue, r = ((r as any).substring as any)((((r as any).indexOf as any)("{") as any) + (1 as any)), r = ((r as any).substring as any)(0, (((r as any).lastIndexOf as any)("}") as any) - (1 as any)), r = (y as any)(r, i), r = (P as any)(r, (t as any).textMaxWidth, d), r = ((r as any).replaceAll as any)(" ", "&nbsp;")), (e as any).dataReference) {
    const p: any = ((n as any).find as any)((w: any): any => ((w as any).name as any) === ((e as any).dataReference?.$refText as any));
    p && (r = (p as any).dataBlockValue, r = ((r as any).substring as any)((((r as any).indexOf as any)(`{
`) as any) + (2 as any)), r = ((r as any).substring as any)(0, (((r as any).lastIndexOf as any)("}") as any) - (1 as any)), r = (y as any)(r, i), r = (P as any)(r, (t as any).textMaxWidth, d), r = ((r as any).replaceAll as any)(" ", "&nbsp;"), r += "<br/>");
  }
  const m: any = (r as any) !== (void 0 as any);
  m && (c += `<br/><br/><code style="text-align: left; display: block;max-width:${(t as any).textMaxWidth}px">${r}</code>`);
  const x: any = {
      fontSize: (d as any).fontSize,
      fontWeight: (d as any).fontWeight,
      fontFamily: (d as any).fontFamily
    },
    u: any = (pe as any)(c, x),
    h: any = m ? ((u as any).width as any) / (3 as any) : (u as any).width,
    f: any = {
      content: c,
      width: h,
      height: (u as any).height
    };
  return ((g as any).debug as any)(`[${(e as any).name}] ${(e as any).entityIdentifier} text`, f), f;
}
(o as any)(G, "calculateTextProps");
function V(this: any, e: any, n: any): any {
  const t: any = n,
    i: any = (L as any)((t as any).frame),
    a: any = {
      width: (((t as any).textProps as any).width as any) + ((2 as any) * ((s as any).boxTextPadding as any) as any),
      height: (((t as any).textProps as any).height as any) + ((2 as any) * ((s as any).boxTextPadding as any) as any)
    };
  return [{
    $kind: $,
    frame: (t as any).frame,
    index: (t as any).index,
    visual: i,
    dimension: a,
    textProps: (t as any).textProps
  }];
}
(o as any)(V, "decidePositionFrame");
function X(this: any, e: any, n: any, t: any): any {
  return (n as any) === (void 0 as any) ? (s as any).contentStartX : ((n as any).index as any) === ((e as any).index as any) && (e as any).r ? ((e as any).r as any) + ((s as any).boxPadding as any) : (t as any) === (void 0 as any) ? (s as any).contentStartX : (((t as any).r as any) - ((s as any).boxOverlap as any) as any) + ((s as any).boxPadding as any);
}
(o as any)(X, "calculateX");
function j(this: any, e: any, n: any): any {
  const t: any = [...((e as any).map as any)((i: any): any => (i as any).r), n];
  return ((Math as any).max as any)(...t);
}
(o as any)(j, "calculateMaxRight");
function A(this: any, e: any): any {
  return ((((Object as any).values as any)(e) as any).sort as any)((n: any, t: any): any => ((n as any).index as any) - ((t as any).index as any));
}
(o as any)(A, "sortedSwimlanesArray");
function Y(this: any, e: any, n: any): any {
  const t: any = n,
    i: any = (_ as any)((t as any).frame, (e as any).swimlanes);
  let a: any;
  (i as any).index in (e as any).swimlanes ? a = ((e as any).swimlanes as any)[(i as any).index] : a = {
    index: (i as any).index,
    label: (i as any).label,
    r: 0,
    y: (((i as any).index as any) * ((s as any).swimlaneMinHeight as any) as any) + ((s as any).swimlaneGap as any),
    height: (s as any).swimlaneMinHeight,
    maxHeight: (s as any).swimlaneMinHeight
  };
  const r: any = (((e as any).boxes as any).length as any) > (0 as any) ? ((e as any).boxes as any)[(((e as any).boxes as any).length as any) - (1 as any)] : void 0,
    d: any = ((e as any).previousSwimlaneNumber as any) !== (void 0 as any) ? ((e as any).swimlanes as any)[(e as any).previousSwimlaneNumber] : void 0,
    l: any = {
      width: (((Math as any).max as any)((s as any).boxMinWidth, ((Math as any).min as any)((s as any).boxMaxWidth, ((t as any).dimension as any).width)) as any) + ((2 as any) * ((s as any).boxPadding as any) as any),
      height: (((Math as any).max as any)((s as any).boxMinHeight, ((Math as any).min as any)((s as any).boxMaxHeight, ((t as any).dimension as any).height)) as any) + ((2 as any) * ((s as any).boxPadding as any) as any)
    },
    c: any = (X as any)(a, d, r),
    m: any = ((c as any) + ((l as any).width as any) as any) + ((s as any).boxPadding as any),
    x: any = (j as any)(((Object as any).values as any)((e as any).swimlanes), m);
  (a as any).r = (c as any) + ((l as any).width as any), (a as any).maxHeight = ((Math as any).max as any)((a as any).maxHeight, (l as any).height), (a as any).height = (((Math as any).max as any)((s as any).swimlaneMinHeight, (a as any).maxHeight) as any) + ((2 as any) * ((s as any).swimlanePadding as any) as any);
  const u: any = {
      x: c,
      y: ((s as any).swimlanePadding as any) + ((a as any).y as any),
      r: m,
      dimension: l,
      leftSibling: !1,
      swimlane: a,
      visual: (t as any).visual,
      text: ((t as any).textProps as any).content,
      frame: (t as any).frame,
      index: (t as any).index
    },
    h: any = {
      ...e,
      boxes: [...(e as any).boxes, u],
      swimlanes: {
        ...(e as any).swimlanes,
        [`${(a as any).index}`]: a
      },
      previousSwimlaneNumber: (i as any).index,
      previousFrame: (t as any).frame,
      maxR: x
    },
    f: any = (A as any)((h as any).swimlanes);
  ((f as any).length as any) > (0 as any) && (((f as any)[0] as any).y = 0);
  for (let p: any = 1; (p as any) < ((f as any).length as any); p++) {
    const w: any = (f as any)[p],
      R: any = (f as any)[(p as any) - (1 as any)];
    (w as any).y = (((R as any).y as any) + ((R as any).height as any) as any) + ((s as any).swimlaneGap as any);
  }
  return h;
}
(o as any)(Y, "evolveFramePositioned");
function z(this: any, e: any, n: any): any {
  return (e as any) === (0 as any) && (((n as any).sourceFrames as any).length as any) === (0 as any);
}
(o as any)(z, "isFirstFrame");
function K(this: any, e: any): any {
  return ((e as any).sourceFrames as any) !== (void 0 as any) && ((e as any).sourceFrames as any) !== (null as any) && (((e as any).sourceFrames as any).length as any) > (0 as any);
}
(o as any)(K, "hasSourceFrame");
function k(this: any, e: any, n: any): any {
  if ((n as any) != (null as any)) return ((e as any).find as any)((t: any): any => (((t as any).frame as any).name as any) === ((n as any).name as any));
}
(o as any)(k, "findBoxByFrame");
function q(this: any, e: any, n: any, t: any): any {
  if (!((t as any) < (0 as any))) for (let i: any = t; (i as any) >= (0 as any); i--) {
    const a: any = (e as any)[i];
    if ((((a as any).swimlane as any).index as any) !== (n as any)) return a;
  }
}
(o as any)(q, "findBoxByLineIndex");
function J(this: any, e: any, n: any): any {
  const t: any = n;
  if ((ve as any)((t as any).frame) || (z as any)((t as any).index, (t as any).frame)) return [];
  const i: any = (k as any)((e as any).boxes, (t as any).frame);
  if ((i as any) === (void 0 as any)) throw new (Error as any)(`Target box not found for frame ${((t as any).frame as any).name}`);
  let a: any;
  return (t as any).sourceFrame ? a = (k as any)((e as any).boxes, (t as any).sourceFrame) : a = (q as any)((e as any).boxes, ((i as any).swimlane as any).index, ((t as any).index as any) - (1 as any)), (a as any) === (void 0 as any) ? [] : [{
    $kind: N,
    frame: (t as any).frame,
    index: (t as any).index,
    sourceBox: a,
    targetBox: i
  }];
}
(o as any)(J, "decidePositionRelation");
function Q(this: any, e: any, n: any): any {
  const t: any = n,
    i: any = {
      visual: {
        fill: "none",
        stroke: "#000"
      },
      source: {
        x: ((t as any).sourceBox as any).x,
        y: ((t as any).sourceBox as any).y
      },
      target: {
        x: ((t as any).targetBox as any).x,
        y: ((t as any).targetBox as any).y
      },
      sourceBox: (t as any).sourceBox,
      targetBox: (t as any).targetBox
    };
  return {
    ...e,
    relations: [...(e as any).relations, i]
  };
}
(o as any)(Q, "evolveRelationPositioned");
var Me: any = {
    [T]: V,
    [S]: J
  },
  Be: any = {
    [$]: Y,
    [N]: Q
  };
function Z(this: any, e: any, n: any): any {
  const t: any = (Me as any)[(n as any).$kind];
  if ((t as any) == (null as any)) return [];
  const i: any = (t as any)(e, n);
  return ((g as any).debug as any)("decided events", i), i;
}
(o as any)(Z, "decide");
function ee(this: any, e: any, n: any): any {
  const t: any = ((n as any).reduce as any)((i: any, a: any): any => {
    const r: any = (Be as any)[(a as any).$kind];
    return (r as any) == (null as any) ? i : (r as any)(i, a);
  }, e);
  return ((g as any).debug as any)("evolve events", {
    state: e,
    newState: t,
    events: n
  }), t;
}
(o as any)(ee, "evolve");
function v(this: any, e: any, n: any): any {
  const t: any = (Z as any)(e, n);
  return (ee as any)(e, t);
}
(o as any)(v, "dispatch");
var F: any = {
    getConfig: ke,
    setOptions: we,
    getOptions: ye,
    clear: Pe,
    setAccTitle: me,
    getAccTitle: ce,
    getAccDescription: le,
    setAccDescription: de,
    setDiagramTitle: se,
    getDiagramTitle: oe,
    setAst: I,
    getDiagramProps: E,
    getState: O
  },
  Ee: any = {
    parse: (o as any)(async (e: any): Promise<any> => {
      const n: any = await (be as any)("eventmodeling", e);
      ((g as any).debug as any)(n), ((F as any).setAst as any)(n), (re as any)(n, F);
    }, "parse")
  },
  Ae: any = (D as any)(),
  Re: any = Ae?.eventmodeling;
function te(this: any, e: any, n: any): any {
  return (t: any): any => {
    const i: any = (((t as any).swimlane as any).y as any) + ((n as any).swimlanePadding as any),
      a: any = ((((e as any).append as any)("g") as any).attr as any)("class", "em-box");
    ((((((((((((((((a as any).append as any)("rect") as any).attr as any)("x", (t as any).x) as any).attr as any)("y", i) as any).attr as any)("rx", "3") as any).attr as any)("width", ((t as any).dimension as any).width) as any).attr as any)("height", ((t as any).dimension as any).height) as any).attr as any)("stroke", ((t as any).visual as any).stroke) as any).attr as any)("fill", ((t as any).visual as any).fill), ((((((((((((((((((((((((((((a as any).append as any)("foreignObject") as any).attr as any)("x", ((t as any).x as any) + ((n as any).boxPadding as any)) as any).attr as any)("y", (i as any) + (10 as any)) as any).attr as any)("width", (((t as any).dimension as any).width as any) - ((2 as any) * ((n as any).boxPadding as any) as any)) as any).attr as any)("height", (((t as any).dimension as any).height as any) - ((2 as any) * ((n as any).boxPadding as any) as any)) as any).append as any)("xhtml:div") as any).style as any)("display", "table") as any).style as any)("height", "100%") as any).style as any)("width", "100%") as any).append as any)("span") as any).style as any)("display", "table-cell") as any).style as any)("text-align", "center") as any).style as any)("vertical-align", "middle") as any).html as any)((t as any).text);
  };
}
(o as any)(te, "renderD3Box");
function ne(this: any, e: any, n: any): any {
  return (e as any) > (n as any);
}
(o as any)(ne, "dirUpwards");
function ie(this: any, e: any, n: any, t: any, i: any): any {
  return (a: any): any => {
    const r: any = ((((a as any).sourceBox as any).swimlane as any).y as any) + ((n as any).swimlanePadding as any),
      d: any = ((((a as any).targetBox as any).swimlane as any).y as any) + ((n as any).swimlanePadding as any),
      l: any = (ne as any)(r, d),
      c: any = (((a as any).sourceBox as any).x as any) + ((((((a as any).sourceBox as any).dimension as any).width as any) * (2 as any) as any) / (3 as any) as any),
      m: any = (((a as any).targetBox as any).x as any) + (((((a as any).targetBox as any).dimension as any).width as any) / (3 as any) as any);
    let x: any, u: any;
    ((g as any).debug as any)(`rendering relation up=${l} for `, {
      sourceBox: (a as any).sourceBox,
      targetBox: (a as any).targetBox
    }), l ? (x = r, u = (d as any) + ((((a as any).targetBox as any).dimension as any).height as any)) : (x = (r as any) + ((((a as any).sourceBox as any).dimension as any).height as any), u = d);
    const h: any = (i as any).emRelationStroke ?? ((a as any).visual as any).stroke;
    ((((((((((((((e as any).append as any)("path") as any).attr as any)("class", "em-relation") as any).attr as any)("fill", ((a as any).visual as any).fill) as any).attr as any)("stroke", h) as any).attr as any)("stroke-width", "1") as any).attr as any)("marker-end", `url(#${t})`) as any).attr as any)("d", `M${c} ${x} L${m} ${u}`);
  };
}
(o as any)(ie, "renderD3Relation");
function ae(this: any, e: any, n: any, t: any, i: any): any {
  return (a: any): any => {
    const r: any = ((((e as any).append as any)("g") as any).attr as any)("class", "em-swimlane"),
      d: any = (i as any).emSwimlaneBackgroundOdd ?? "rgb(250,250,250)",
      l: any = (i as any).emSwimlaneBackgroundStroke ?? "rgb(240,240,240)";
    ((((((((((((((((r as any).append as any)("rect") as any).attr as any)("x", 0) as any).attr as any)("y", (a as any).y) as any).attr as any)("rx", "3") as any).attr as any)("width", (n as any) + ((t as any).swimlanePadding as any)) as any).attr as any)("height", (a as any).height) as any).attr as any)("fill", d) as any).attr as any)("stroke", l), ((((((((((r as any).append as any)("text") as any).attr as any)("font-weight", (t as any).swimlaneTextFontWeight) as any).attr as any)("x", 30) as any).attr as any)("y", ((a as any).y as any) + (30 as any)) as any).text as any)((a as any).label);
  };
}
(o as any)(ae, "renderD3Swimlane");
var De: any = (o as any)(function (this: any, e: any, n: any, t: any, i: any): any {
    if (((g as any).debug as any)("in eventmodeling renderer", (e as any) + (`
` as any), "id:", n, t), !Re) throw new (Error as any)("EventModeling config not found");
    const a: any = (i as any).db,
      {
        themeVariables: r,
        eventmodeling: d
      }: any = (D as any)(),
      l: any = (ue as any)(`[id="${n}"]`),
      c: any = ((a as any).getDiagramProps as any)(),
      m: any = ((a as any).getState as any)(),
      x: any = `em-arrowhead-${n}`,
      u: any = (r as any).emArrowhead ?? "#000000";
    (((m as any).sortedSwimlanesArray as any).forEach as any)((ae as any)(l, (m as any).maxR, c, r)), (((m as any).boxes as any).forEach as any)((te as any)(l, c)), (((m as any).relations as any).forEach as any)((ie as any)(l, c, x, r)), ((((((((((((((((((((((l as any).append as any)("defs") as any).append as any)("marker") as any).attr as any)("id", x) as any).attr as any)("markerWidth", "10") as any).attr as any)("markerHeight", "7") as any).attr as any)("refX", "10") as any).attr as any)("refY", "3.5") as any).attr as any)("orient", "auto") as any).append as any)("polygon") as any).attr as any)("points", "0 0, 10 3.5, 0 7") as any).attr as any)("fill", u), (xe as any)(void 0, l, d?.padding ?? 30, d?.useMaxWidth);
  }, "draw"),
  Te: any = {
    draw: De
  },
  $e: any = (o as any)((e: any): any => "", "getStyles"),
  Ne: any = $e,
  He: any = {
    parser: Ee,
    db: F,
    renderer: Te,
    styles: Ne
  };
export { He as diagram };
//# debugId=43d3f68a-ce52-4c0c-aa1c-cc02da8d7c9d
