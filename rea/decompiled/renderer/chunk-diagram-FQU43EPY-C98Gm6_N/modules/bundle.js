import { p } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _ as __1, p as p_1, o as setDiagramTitle, s as s_1, g as getAccDescription, a as getAccTitle, b as b_1, l as l_1, c as c_1, d, A as A_1, q as q_1, B as B_1, z as z_1, D, i as i_1, w, ak } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as p_2, i as i_2 } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "43d3f68a-ce52-4c0c-aa1c-cc02da8d7c9d";
            e._sentryDebugIdIdentifier = "sentry-dbid-43d3f68a-ce52-4c0c-aa1c-cc02da8d7c9d";
        }
    } catch (e) {}
})();
const T = "position frame";
const $ = "frame positioned";
const S = "position relation";
const N = "relation positioned";
const setOptions = __1((e)=>{
    l_1.debug("options str", e);
}, "setOptions");
const getOptions = __1(()=>({}), "getOptions");
const clear = __1(()=>{
    C();
    q_1();
}, "clear");
function C() {
    B = {};
}
__1(C, "reset");
const D_1_eventmodeling = D.eventmodeling;
const getConfig = __1(()=>B_1({
        ...D_1_eventmodeling,
        ...z_1().eventmodeling
    }), "getConfig");
var B = {};
function getState() {
    let e = Fe;
    const { ast } = B;
    const t = getDiagramProps();
    if (!ast) {
        throw new Error("No data for EventModel");
    }
    ast.frames.forEach((frame, index)=>{
        const textProps = G(frame, ast.dataEntities, t);
        e = v(e, {
            $kind: T,
            index,
            frame,
            textProps
        });
        let d;
        if (K(frame)) {
            l_1.debug("source frame", frame.sourceFrames);
            d = ast.frames.filter((l)=>frame.sourceFrames.some((c)=>c.$refText === l.name));
            d.forEach((sourceFrame)=>{
                e = v(e, {
                    $kind: S,
                    index,
                    frame,
                    sourceFrame
                });
            });
        } else {
            e = v(e, {
                $kind: S,
                index,
                frame
            });
        }
    });
    e = {
        ...e,
        sortedSwimlanesArray: A(e.swimlanes)
    };
    return e;
}
__1(getState, "getState");
function setAst(e) {
    B.ast = e;
}
__1(setAst, "setAst");
var s = {
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
function getDiagramProps() {
    return s;
}
__1(getDiagramProps, "getDiagramProps");
var Fe = {
    boxes: [],
    swimlanes: {},
    relations: [],
    maxR: 0,
    sortedSwimlanesArray: []
};
function W(e) {
    const n = e.split(".");
    if (n.length === 2) {
        return n[0];
    }
}
__1(W, "extractNamespace");
function H(e) {
    const n = e.split(".");
    if (n.length === 2) {
        return n[1];
    }
    return e;
}
__1(H, "extractName");
function U(e, n) {
    if (!(!n || n.length === 0)) {
        return Object.values(e).find((t)=>t.namespace === n);
    }
}
__1(U, "findSwimlaneByNamespace");
function b(e, n, t) {
    return Math.max(n, ...Object.keys(e).filter((i)=>{
        const a = Number.parseInt(i);
        return a > n && a < t;
    }).map((i)=>Number.parseInt(i))) + 1;
}
__1(b, "findNextAvailableIndex");
function _(e, n) {
    const t = W(e.entityIdentifier);
    const i = U(n, t);
    switch(e.modelEntityType){
        case "ui":
        case "pcr":
        case "processor":
            if (i) {
                return {
                    index: i.index,
                    label: i.namespace || s.labelUiAutomation
                };
            }
            if (t) {
                return {
                    index: b(n, 0, 100),
                    label: s.labelUiAutomationPrefix + t
                };
            }
            return {
                index: 0,
                label: s.labelUiAutomation
            };
        case "rmo":
        case "readmodel":
        case "cmd":
        case "command":
            if (i) {
                return {
                    index: i.index,
                    label: i.namespace || s.labelCommandReadModel
                };
            }
            if (t) {
                return {
                    index: b(n, 100, 200),
                    label: s.labelCommandReadModelPrefix + t
                };
            }
            return {
                index: 100,
                label: s.labelCommandReadModel
            };
        default:
            if (i) {
                return {
                    index: i.index,
                    label: i.namespace || s.labelEvents
                };
            }
            if (t) {
                return {
                    index: b(n, 200, 300),
                    label: s.labelEventsPrefix + t
                };
            }
            return {
                index: 200,
                label: s.labelEvents
            };
    }
}
__1(_, "calculateSwimlaneProps");
function L(e) {
    const { themeVariables } = z_1();
    switch(e.modelEntityType){
        case "ui":
            return {
                fill: themeVariables.emUiFill ?? "white",
                stroke: themeVariables.emUiStroke ?? "#dbdada"
            };
        case "pcr":
        case "processor":
            return {
                fill: themeVariables.emProcessorFill ?? "#edb3f6",
                stroke: themeVariables.emProcessorStroke ?? "#b88cbf"
            };
        case "rmo":
        case "readmodel":
            return {
                fill: themeVariables.emReadModelFill ?? "#d3f1a2",
                stroke: themeVariables.emReadModelStroke ?? "#a3b732"
            };
        case "cmd":
        case "command":
            return {
                fill: themeVariables.emCommandFill ?? "#bcd6fe",
                stroke: themeVariables.emCommandStroke ?? "#679ac3"
            };
        case "evt":
        case "event":
            return {
                fill: themeVariables.emEventFill ?? "#ffb778",
                stroke: themeVariables.emEventStroke ?? "#c19a0f"
            };
        default:
            return {
                fill: "red",
                stroke: "black"
            };
    }
}
__1(L, "calculateEntityVisualProps");
function G(e, n, t) {
    const i = z_1();
    const a = i_1(H(e.entityIdentifier) ?? "", i);
    let r;
    const d = {
        fontSize: 16,
        fontWeight: 700,
        fontFamily: '"trebuchet ms", verdana, arial, sans-serif',
        joinWith: "<br/>"
    };
    let content = `<b>${w(a, t.textMaxWidth, d)}</b>`;
    if (e.dataInlineValue) {
        r = e.dataInlineValue;
        r = r.substring(r.indexOf("{") + 1);
        r = r.substring(0, r.lastIndexOf("}") - 1);
        r = i_1(r, i);
        r = w(r, t.textMaxWidth, d);
        r = r.replaceAll(" ", "&nbsp;");
    }
    if (e.dataReference) {
        const p = n.find((w)=>w.name === e.dataReference?.$refText);
        if (p) {
            r = p.dataBlockValue;
            r = r.substring(r.indexOf(`{
`) + 2);
            r = r.substring(0, r.lastIndexOf("}") - 1);
            r = i_1(r, i);
            r = w(r, t.textMaxWidth, d);
            r = r.replaceAll(" ", "&nbsp;");
            r += "<br/>";
        }
    }
    const m = r !== undefined;
    if (m) {
        content += `<br/><br/><code style="text-align: left; display: block;max-width:${t.textMaxWidth}px">${r}</code>`;
    }
    const x = {
        fontSize: d.fontSize,
        fontWeight: d.fontWeight,
        fontFamily: d.fontFamily
    };
    const u = ak(content, x);
    const width = m ? u.width / 3 : u.width;
    const f = {
        content,
        width,
        height: u.height
    };
    l_1.debug(`[${e.name}] ${e.entityIdentifier} text`, f);
    return f;
}
__1(G, "calculateTextProps");
function V(e, n) {
    const t = n;
    const visual = L(t.frame);
    const dimension = {
        width: t.textProps.width + 2 * s.boxTextPadding,
        height: t.textProps.height + 2 * s.boxTextPadding
    };
    return [
        {
            $kind: $,
            frame: t.frame,
            index: t.index,
            visual,
            dimension,
            textProps: t.textProps
        }
    ];
}
__1(V, "decidePositionFrame");
function X(e, n, t) {
    if (n === undefined) {
        return s.contentStartX;
    }
    if (n.index === e.index && e.r) {
        return e.r + s.boxPadding;
    }
    if (t === undefined) {
        return s.contentStartX;
    }
    return t.r - s.boxOverlap + s.boxPadding;
}
__1(X, "calculateX");
function j(e, n) {
    const t = [
        ...e.map((i)=>i.r),
        n
    ];
    return Math.max(...t);
}
__1(j, "calculateMaxRight");
function A(e) {
    return Object.values(e).sort((n, t)=>n.index - t.index);
}
__1(A, "sortedSwimlanesArray");
function Y(e, n) {
    const t = n;
    const i = _(t.frame, e.swimlanes);
    let swimlane;
    if (i.index in e.swimlanes) {
        swimlane = e.swimlanes[i.index];
    } else {
        swimlane = {
            index: i.index,
            label: i.label,
            r: 0,
            y: i.index * s.swimlaneMinHeight + s.swimlaneGap,
            height: s.swimlaneMinHeight,
            maxHeight: s.swimlaneMinHeight
        };
    }
    const r = e.boxes.length > 0 ? e.boxes[e.boxes.length - 1] : undefined;
    const d = e.previousSwimlaneNumber !== undefined ? e.swimlanes[e.previousSwimlaneNumber] : undefined;
    const dimension = {
        width: Math.max(s.boxMinWidth, Math.min(s.boxMaxWidth, t.dimension.width)) + 2 * s.boxPadding,
        height: Math.max(s.boxMinHeight, Math.min(s.boxMaxHeight, t.dimension.height)) + 2 * s.boxPadding
    };
    const x_1 = X(swimlane, d, r);
    const r_1 = x_1 + dimension.width + s.boxPadding;
    const maxR = j(Object.values(e.swimlanes), r_1);
    swimlane.r = x_1 + dimension.width;
    swimlane.maxHeight = Math.max(swimlane.maxHeight, dimension.height);
    swimlane.height = Math.max(s.swimlaneMinHeight, swimlane.maxHeight) + 2 * s.swimlanePadding;
    const u = {
        x: x_1,
        y: s.swimlanePadding + swimlane.y,
        r: r_1,
        dimension,
        leftSibling: false,
        swimlane,
        visual: t.visual,
        text: t.textProps.content,
        frame: t.frame,
        index: t.index
    };
    const h = {
        ...e,
        boxes: [
            ...e.boxes,
            u
        ],
        swimlanes: {
            ...e.swimlanes,
            [`${swimlane.index}`]: swimlane
        },
        previousSwimlaneNumber: i.index,
        previousFrame: t.frame,
        maxR
    };
    const f = A(h.swimlanes);
    if (f.length > 0) {
        f[0].y = 0;
    }
    for(let p = 1; p < f.length; p++){
        const w = f[p];
        const R = f[p - 1];
        w.y = R.y + R.height + s.swimlaneGap;
    }
    return h;
}
__1(Y, "evolveFramePositioned");
function z(e, n) {
    return e === 0 && n.sourceFrames.length === 0;
}
__1(z, "isFirstFrame");
function K(e) {
    return e.sourceFrames !== undefined && e.sourceFrames !== null && e.sourceFrames.length > 0;
}
__1(K, "hasSourceFrame");
function k(e, n) {
    if (n != null) {
        return e.find((t)=>t.frame.name === n.name);
    }
}
__1(k, "findBoxByFrame");
function q(e, n, t) {
    if (!(t < 0)) {
        for(let i = t; i >= 0; i--){
            const a = e[i];
            if (a.swimlane.index !== n) {
                return a;
            }
        }
    }
}
__1(q, "findBoxByLineIndex");
function J(e, n) {
    const t = n;
    if (i_2(t.frame) || z(t.index, t.frame)) {
        return [];
    }
    const targetBox = k(e.boxes, t.frame);
    if (targetBox === undefined) {
        throw new Error(`Target box not found for frame ${t.frame.name}`);
    }
    let sourceBox;
    if (t.sourceFrame) {
        sourceBox = k(e.boxes, t.sourceFrame);
    } else {
        sourceBox = q(e.boxes, targetBox.swimlane.index, t.index - 1);
    }
    if (sourceBox === undefined) {
        return [];
    }
    return [
        {
            $kind: N,
            frame: t.frame,
            index: t.index,
            sourceBox,
            targetBox
        }
    ];
}
__1(J, "decidePositionRelation");
function Q(e, n) {
    const t = n;
    const i = {
        visual: {
            fill: "none",
            stroke: "#000"
        },
        source: {
            x: t.sourceBox.x,
            y: t.sourceBox.y
        },
        target: {
            x: t.targetBox.x,
            y: t.targetBox.y
        },
        sourceBox: t.sourceBox,
        targetBox: t.targetBox
    };
    return {
        ...e,
        relations: [
            ...e.relations,
            i
        ]
    };
}
__1(Q, "evolveRelationPositioned");
var Me = {
    [T]: V,
    [S]: J
};
var Be = {
    [$]: Y,
    [N]: Q
};
function Z(e, n) {
    const t = Me[n.$kind];
    if (t == null) {
        return [];
    }
    const i = t(e, n);
    l_1.debug("decided events", i);
    return i;
}
__1(Z, "decide");
function ee(state, events) {
    const newState = events.reduce((acc, event)=>{
        const r = Be[event.$kind];
        if (r == null) {
            return acc;
        }
        return r(acc, event);
    }, state);
    l_1.debug("evolve events", {
        state,
        newState,
        events
    });
    return newState;
}
__1(ee, "evolve");
function v(e, n) {
    const t = Z(e, n);
    return ee(e, t);
}
__1(v, "dispatch");
const db = {
    getConfig,
    setOptions,
    getOptions,
    clear,
    setAccTitle: b_1,
    getAccTitle,
    getAccDescription,
    setAccDescription: s_1,
    setDiagramTitle,
    getDiagramTitle: p_1,
    setAst,
    getDiagramProps,
    getState
};
const parser = {
    parse: __1(async (e)=>{
        const n = await p_2("eventmodeling", e);
        l_1.debug(n);
        db.setAst(n);
        p(n, db);
    }, "parse")
};
const Ae = c_1();
const Re = Ae?.eventmodeling;
function te(e, n) {
    return (t)=>{
        const i = t.swimlane.y + n.swimlanePadding;
        const a = e.append("g").attr("class", "em-box");
        a.append("rect").attr("x", t.x).attr("y", i).attr("rx", "3").attr("width", t.dimension.width).attr("height", t.dimension.height).attr("stroke", t.visual.stroke).attr("fill", t.visual.fill);
        a.append("foreignObject").attr("x", t.x + n.boxPadding).attr("y", i + 10).attr("width", t.dimension.width - 2 * n.boxPadding).attr("height", t.dimension.height - 2 * n.boxPadding).append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%").append("span").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").html(t.text);
    };
}
__1(te, "renderD3Box");
function ne(e, n) {
    return e > n;
}
__1(ne, "dirUpwards");
function ie(e, n, t, i) {
    return (a)=>{
        const r = a.sourceBox.swimlane.y + n.swimlanePadding;
        const d = a.targetBox.swimlane.y + n.swimlanePadding;
        const l = ne(r, d);
        const c = a.sourceBox.x + a.sourceBox.dimension.width * 2 / 3;
        const m = a.targetBox.x + a.targetBox.dimension.width / 3;
        let x;
        let u;
        l_1.debug(`rendering relation up=${l} for `, {
            sourceBox: a.sourceBox,
            targetBox: a.targetBox
        });
        if (l) {
            x = r;
            u = d + a.targetBox.dimension.height;
        } else {
            x = r + a.sourceBox.dimension.height;
            u = d;
        }
        const h = i.emRelationStroke ?? a.visual.stroke;
        e.append("path").attr("class", "em-relation").attr("fill", a.visual.fill).attr("stroke", h).attr("stroke-width", "1").attr("marker-end", `url(#${t})`).attr("d", `M${c} ${x} L${m} ${u}`);
    };
}
__1(ie, "renderD3Relation");
function ae(e, n, t, i) {
    return (a)=>{
        const r = e.append("g").attr("class", "em-swimlane");
        const d = i.emSwimlaneBackgroundOdd ?? "rgb(250,250,250)";
        const l = i.emSwimlaneBackgroundStroke ?? "rgb(240,240,240)";
        r.append("rect").attr("x", 0).attr("y", a.y).attr("rx", "3").attr("width", n + t.swimlanePadding).attr("height", a.height).attr("fill", d).attr("stroke", l);
        r.append("text").attr("font-weight", t.swimlaneTextFontWeight).attr("x", 30).attr("y", a.y + 30).text(a.label);
    };
}
__1(ae, "renderD3Swimlane");
const draw = __1((e, n, t, i)=>{
    l_1.debug("in eventmodeling renderer", e + `
`, "id:", n, t);
    if (!Re) {
        throw new Error("EventModeling config not found");
    }
    const a = i.db;
    const { themeVariables, eventmodeling } = c_1();
    const l = d(`[id="${n}"]`);
    const c = a.getDiagramProps();
    const m = a.getState();
    const x = `em-arrowhead-${n}`;
    const u = themeVariables.emArrowhead ?? "#000000";
    m.sortedSwimlanesArray.forEach(ae(l, m.maxR, c, themeVariables));
    m.boxes.forEach(te(l, c));
    m.relations.forEach(ie(l, c, x, themeVariables));
    l.append("defs").append("marker").attr("id", x).attr("markerWidth", "10").attr("markerHeight", "7").attr("refX", "10").attr("refY", "3.5").attr("orient", "auto").append("polygon").attr("points", "0 0, 10 3.5, 0 7").attr("fill", u);
    A_1(undefined, l, eventmodeling?.padding ?? 30, eventmodeling?.useMaxWidth);
}, "draw");
const renderer = {
    draw
};
const $e = __1((e)=>"", "getStyles");
const styles = $e;
export const diagram = {
    parser,
    db,
    renderer,
    styles
};
