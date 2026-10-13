import { _ as __1, l as l_1, F as F_1, z, q, W, e as e_1, i, c } from "./chunk-mermaid.core-B9Iu5CoE.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "8b3a591b-7e3b-423d-a259-76b0f57d482c";
            e._sentryDebugIdIdentifier = "sentry-dbid-8b3a591b-7e3b-423d-a259-76b0f57d482c";
        }
    } catch (e) {}
})();
let A = "";
let M = "";
let O = "";
const D = [];
const b = new Map;
const v = __1((e)=>i(e, c()), "sanitizeText");
var y = __1((e)=>{
    switch(e.type){
        case "terminal":
            return {
                ...e,
                value: v(e.value)
            };
        case "nonterminal":
            return {
                ...e,
                name: v(e.name)
            };
        case "sequence":
            return {
                ...e,
                elements: e.elements.map(y)
            };
        case "choice":
            return {
                ...e,
                alternatives: e.alternatives.map(y)
            };
        case "optional":
            return {
                ...e,
                element: y(e.element)
            };
        case "repetition":
            return {
                ...e,
                element: y(e.element),
                separator: e.separator ? y(e.separator) : undefined
            };
        case "special":
            return {
                ...e,
                text: v(e.text)
            };
    }
}, "sanitizeAstNode");
const clear = __1(()=>{
    A = "";
    M = "";
    O = "";
    D.length = 0;
    b.clear();
    q();
    l_1.debug("[Railroad] Database cleared");
}, "clear");
const setTitle = __1((e)=>{
    A = v(e);
    l_1.debug("[Railroad] Title set:", e);
}, "setTitle");
const P = __1(()=>A, "getTitle");
const addRule = __1((e)=>{
    const i = {
        ...e,
        name: v(e.name),
        definition: y(e.definition),
        comment: e.comment ? v(e.comment) : undefined
    };
    l_1.debug("[Railroad] Adding rule:", i.name);
    if (b.has(i.name)) {
        l_1.warn(`[Railroad] Rule '${i.name}' is already defined. Overwriting.`);
    }
    D.push(i);
    b.set(i.name, i);
}, "addRule");
const getRules = __1(()=>D, "getRules");
const getRule = __1((e)=>b.get(e), "getRule");
const setAccTitle = __1((e)=>{
    M = v(e).replace(/^\s+/g, "");
    l_1.debug("[Railroad] Accessibility title set:", e);
}, "setAccTitle");
const getAccTitle = __1(()=>M, "getAccTitle");
const setAccDescription = __1((e)=>{
    O = v(e).replace(/\n\s+/g, `
`);
    l_1.debug("[Railroad] Accessibility description set:", e);
}, "setAccDescription");
const getAccDescription = __1(()=>O, "getAccDescription");
const setDiagramTitle = setTitle;
const oe = {
    clear,
    setTitle,
    getTitle: P,
    addRule,
    getRules,
    getRule,
    setAccTitle,
    getAccTitle,
    setAccDescription,
    getAccDescription,
    setDiagramTitle,
    getDiagramTitle: P
};
const f = {
    compactMode: false,
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
    showMarkers: true,
    markerRadius: 5
};
const le = /^#(?:[\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$|^(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch)\([\d\s%+,./-]+\)$|^[a-z]+$/i;
const se = /^[\w "',.-]+$/;
const de = new Set([
    "compactMode",
    "padding",
    "verticalSeparation",
    "horizontalSeparation",
    "arcRadius",
    "fontSize",
    "fontFamily",
    "terminalFill",
    "terminalStroke",
    "terminalTextColor",
    "nonTerminalFill",
    "nonTerminalStroke",
    "nonTerminalTextColor",
    "lineColor",
    "strokeWidth",
    "markerFill",
    "commentFill",
    "commentStroke",
    "commentTextColor",
    "specialFill",
    "specialStroke",
    "ruleNameColor",
    "showMarkers",
    "markerRadius"
]);
const L = __1((e)=>{
    if (e) {
        return Object.keys(e).every((i)=>i === "railroad" || de.has(i));
    }
    return false;
}, "isRailroadStyleOptions");
const ce = __1((e)=>{
    if (e) {
        if ("railroad" in e && e.railroad) {
            return e.railroad;
        }
        if (L(e)) {
            return e;
        }
        return {};
    }
    return {};
}, "extractRailroadOverrides");
const me = __1((e)=>{
    if (!e || L(e)) {
        return {};
    }
    const { railroad, svgId, theme, look, ...rest } = e;
    return rest;
}, "extractThemeOverrides");
const m = __1((e, i)=>{
    if (typeof e !== "string") {
        return i;
    }
    const a = e.trim();
    if (le.test(a)) {
        return a;
    }
    return i;
}, "sanitizeColorValue");
const I = __1((e, i)=>{
    if (typeof e !== "string") {
        return i;
    }
    const a = e.trim();
    if (se.test(a)) {
        return a;
    }
    return i;
}, "sanitizeFontFamilyValue");
const F = __1((e, i)=>{
    const a = typeof e === "number" ? e : typeof e === "string" ? Number.parseFloat(e) : Number.NaN;
    if (Number.isFinite(a) && a >= 0) {
        return a;
    }
    return i;
}, "sanitizeNumberValue");
const he = __1((e)=>{
    const i = typeof e === "number" ? e : typeof e === "string" ? Number.parseFloat(e) : Number.NaN;
    if (Number.isFinite(i) && i > 0) {
        return i;
    }
}, "parseThemeFontSize");
const pe = __1((e)=>{
    const fontFamily = I(e.fontFamily, f.fontFamily);
    const fontSize = he(e.fontSize) ?? f.fontSize;
    return {
        ...f,
        fontFamily,
        fontSize,
        terminalFill: m(e.secondBkg ?? e.secondaryColor, f.terminalFill),
        terminalStroke: m(e.secondaryBorderColor ?? e.lineColor, f.terminalStroke),
        terminalTextColor: m(e.secondaryTextColor ?? e.textColor, f.terminalTextColor),
        nonTerminalFill: m(e.mainBkg ?? e.background, f.nonTerminalFill),
        nonTerminalStroke: m(e.primaryBorderColor ?? e.lineColor, f.nonTerminalStroke),
        nonTerminalTextColor: m(e.primaryTextColor ?? e.textColor, f.nonTerminalTextColor),
        lineColor: m(e.lineColor, f.lineColor),
        markerFill: m(e.lineColor, f.markerFill),
        commentFill: m(e.labelBackground ?? e.tertiaryColor, f.commentFill),
        commentStroke: m(e.tertiaryBorderColor ?? e.lineColor, f.commentStroke),
        commentTextColor: m(e.tertiaryTextColor ?? e.textColor, f.commentTextColor),
        specialFill: m(e.tertiaryColor ?? e.secondaryColor, f.specialFill),
        specialStroke: m(e.tertiaryBorderColor ?? e.secondaryBorderColor, f.specialStroke),
        ruleNameColor: m(e.titleColor ?? e.textColor, f.ruleNameColor)
    };
}, "buildThemeDefaults");
const E = __1((e)=>{
    const i = z();
    const a = {
        ...W(),
        ...i.themeVariables ?? {},
        ...me(e)
    };
    const n = pe(a);
    const t = {
        ...i.railroad ?? {},
        ...ce(e)
    };
    return {
        compactMode: t.compactMode ?? n.compactMode,
        padding: F(t.padding, n.padding),
        verticalSeparation: F(t.verticalSeparation, n.verticalSeparation),
        horizontalSeparation: F(t.horizontalSeparation, n.horizontalSeparation),
        arcRadius: F(t.arcRadius, n.arcRadius),
        fontSize: F(t.fontSize, n.fontSize),
        fontFamily: I(t.fontFamily, n.fontFamily),
        terminalFill: m(t.terminalFill, n.terminalFill),
        terminalStroke: m(t.terminalStroke, n.terminalStroke),
        terminalTextColor: m(t.terminalTextColor, n.terminalTextColor),
        nonTerminalFill: m(t.nonTerminalFill, n.nonTerminalFill),
        nonTerminalStroke: m(t.nonTerminalStroke, n.nonTerminalStroke),
        nonTerminalTextColor: m(t.nonTerminalTextColor, n.nonTerminalTextColor),
        lineColor: m(t.lineColor, n.lineColor),
        strokeWidth: F(t.strokeWidth, n.strokeWidth),
        markerFill: m(t.markerFill, n.markerFill),
        commentFill: m(t.commentFill, n.commentFill),
        commentStroke: m(t.commentStroke, n.commentStroke),
        commentTextColor: m(t.commentTextColor, n.commentTextColor),
        specialFill: m(t.specialFill, n.specialFill),
        specialStroke: m(t.specialStroke, n.specialStroke),
        ruleNameColor: m(t.ruleNameColor, n.ruleNameColor),
        showMarkers: t.showMarkers ?? n.showMarkers,
        markerRadius: F(t.markerRadius, n.markerRadius)
    };
}, "buildRailroadStyleOptions");
const Te = __1((e)=>{
    const { fontFamily, fontSize, terminalFill, terminalStroke, terminalTextColor, nonTerminalFill, nonTerminalStroke, nonTerminalTextColor, lineColor, strokeWidth, markerFill, commentFill, commentStroke, commentTextColor, specialFill, specialStroke, ruleNameColor } = E(e);
    return `
  .railroad-diagram {
    font-family: ${fontFamily};
    font-size: ${fontSize}px;
  }

  .railroad-terminal rect {
    fill: ${terminalFill};
    stroke: ${terminalStroke};
    stroke-width: ${strokeWidth}px;
  }

  .railroad-terminal text {
    fill: ${terminalTextColor};
    font-family: ${fontFamily};
    font-size: ${fontSize}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-nonterminal rect {
    fill: ${nonTerminalFill};
    stroke: ${nonTerminalStroke};
    stroke-width: ${strokeWidth}px;
  }

  .railroad-nonterminal text {
    fill: ${nonTerminalTextColor};
    font-family: ${fontFamily};
    font-size: ${fontSize}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-line {
    stroke: ${lineColor};
    stroke-width: ${strokeWidth}px;
    fill: none;
  }

  .railroad-start circle,
  .railroad-end circle {
    fill: ${markerFill};
  }

  .railroad-comment ellipse {
    fill: ${commentFill};
    stroke: ${commentStroke};
    stroke-width: ${strokeWidth}px;
  }

  .railroad-comment text {
    fill: ${commentTextColor};
    font-style: italic;
    font-family: ${fontFamily};
    font-size: ${fontSize}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-special rect {
    fill: ${specialFill};
    stroke: ${specialStroke};
    stroke-width: ${strokeWidth}px;
    stroke-dasharray: 5,3;
  }

  .railroad-special text {
    fill: ${nonTerminalTextColor};
    font-family: ${fontFamily};
    font-size: ${fontSize}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-rule-name {
    font-weight: bold;
    fill: ${ruleNameColor};
    font-family: ${fontFamily};
    font-size: ${fontSize}px;
  }

  .railroad-group {
    /* Grouping container, no specific styles */
  }
`;
}, "getStyles");
const R = class {
    constructor(){
        this.d = "";
    }
    moveTo(i, a) {
        this.d += `M ${i} ${a} `;
        return this;
    }
    lineTo(i, a) {
        this.d += `L ${i} ${a} `;
        return this;
    }
    horizontalTo(i) {
        this.d += `H ${i} `;
        return this;
    }
    verticalTo(i) {
        this.d += `V ${i} `;
        return this;
    }
    arcTo(i, a, n, t, r, o, g) {
        this.d += `A ${i} ${a} ${n} ${t ? 1 : 0} ${r ? 1 : 0} ${o} ${g} `;
        return this;
    }
    build() {
        return this.d.trim();
    }
};
__1(R, "PathBuilder");
const x = R;
const $ = class {
    constructor(i, a = E()){
        this.textCache = new Map;
        this.svg = i;
        this.config = a;
    }
    measureText(i) {
        if (this.textCache.has(i)) {
            return this.textCache.get(i);
        }
        const a = this.svg.append("text").attr("font-family", this.config.fontFamily).attr("font-size", this.config.fontSize).text(i);
        const n = a.node().getBBox();
        const t = {
            width: n.width,
            height: n.height
        };
        a.remove();
        this.textCache.set(i, t);
        return t;
    }
    renderTerminal(i, a) {
        const n = this.measureText(a);
        const t = n.width + this.config.padding * 2;
        const r = n.height + this.config.padding * 2;
        const o = i.append("g").attr("class", "railroad-terminal");
        o.append("rect").attr("x", 0).attr("y", 0).attr("width", t).attr("height", r).attr("rx", 10).attr("ry", 10);
        o.append("text").attr("x", t / 2).attr("y", r / 2).text(a);
        return {
            element: o.node(),
            dimensions: {
                width: t,
                height: r,
                up: r / 2,
                down: r / 2
            }
        };
    }
    renderNonTerminal(i, a) {
        const n = this.measureText(a);
        const t = n.width + this.config.padding * 2;
        const r = n.height + this.config.padding * 2;
        const o = i.append("g").attr("class", "railroad-nonterminal");
        o.append("rect").attr("x", 0).attr("y", 0).attr("width", t).attr("height", r);
        o.append("text").attr("x", t / 2).attr("y", r / 2).text(a);
        return {
            element: o.node(),
            dimensions: {
                width: t,
                height: r,
                up: r / 2,
                down: r / 2
            }
        };
    }
    renderSequence(i, a) {
        const n = a.map((s)=>this.renderExpression(i, s));
        let t = 0;
        let r = 0;
        let down = 0;
        for (const s of n){
            t += s.dimensions.width;
            r = Math.max(r, s.dimensions.up);
            down = Math.max(down, s.dimensions.down);
        }
        t += (n.length - 1) * this.config.horizontalSeparation;
        const g = i.append("g").attr("class", "railroad-sequence");
        let l = 0;
        for(let s = 0; s < n.length; s++){
            const h = n[s];
            const u = r - h.dimensions.up;
            g.node().appendChild(h.element).setAttribute("transform", `translate(${l}, ${u})`);
            if (s < n.length - 1) {
                const w = l + h.dimensions.width;
                const d = w + this.config.horizontalSeparation;
                const T = r;
                g.append("path").attr("class", "railroad-line").attr("d", new x().moveTo(w, T).lineTo(d, T).build());
            }
            l += h.dimensions.width + this.config.horizontalSeparation;
        }
        return {
            element: g.node(),
            dimensions: {
                width: t,
                height: r + down,
                up: r,
                down
            }
        };
    }
    renderChoice(i, a) {
        const n = a.map((c)=>this.renderExpression(i, c));
        let t = 0;
        let r = 0;
        for (const c of n){
            t = Math.max(t, c.dimensions.width);
            r += c.dimensions.height;
        }
        r += (n.length - 1) * this.config.verticalSeparation;
        const arcRadius = this.config.arcRadius;
        const g = arcRadius * 4;
        const l = t + g;
        const s = i.append("g").attr("class", "railroad-choice");
        let h = 0;
        const u = r / 2;
        for (const c of n){
            const w = h;
            const d = w + c.dimensions.up;
            const T = arcRadius * 2 + (t - c.dimensions.width) / 2;
            s.node().appendChild(c.element).setAttribute("transform", `translate(${T}, ${w})`);
            const S = new x;
            const k = d > u;
            if (d === u) {
                S.moveTo(0, u).lineTo(T, d);
            } else {
                S.moveTo(0, u).arcTo(arcRadius, arcRadius, 0, false, k, arcRadius, u + (k ? arcRadius : -arcRadius)).lineTo(arcRadius, d - (k ? arcRadius : -arcRadius)).arcTo(arcRadius, arcRadius, 0, false, !k, arcRadius * 2, d).lineTo(T, d);
            }
            s.append("path").attr("class", "railroad-line").attr("d", S.build());
            const N = new x;
            const W = T + c.dimensions.width;
            const X = l - arcRadius * 2;
            if (d === u) {
                N.moveTo(W, d).lineTo(l, u);
            } else {
                N.moveTo(W, d).lineTo(X, d).arcTo(arcRadius, arcRadius, 0, false, !k, l - arcRadius, d + (k ? -arcRadius : arcRadius)).lineTo(l - arcRadius, u + (k ? arcRadius : -arcRadius)).arcTo(arcRadius, arcRadius, 0, false, k, l, u);
            }
            s.append("path").attr("class", "railroad-line").attr("d", N.build());
            h += c.dimensions.height + this.config.verticalSeparation;
        }
        return {
            element: s.node(),
            dimensions: {
                width: l,
                height: r,
                up: u,
                down: r - u
            }
        };
    }
    renderOptional(i, a) {
        const n = this.renderExpression(i, a);
        const arcRadius = this.config.arcRadius;
        const r = arcRadius * 2;
        const o = n.dimensions.width + arcRadius * 4;
        const g = n.dimensions.height + r;
        const l = i.append("g").attr("class", "railroad-optional");
        const s = arcRadius * 2;
        const h = r;
        l.node().appendChild(n.element).setAttribute("transform", `translate(${s}, ${h})`);
        const c = h + n.dimensions.up;
        const w = new x().moveTo(0, c).lineTo(arcRadius * 2, c);
        l.append("path").attr("class", "railroad-line").attr("d", w.build());
        const d = new x().moveTo(s + n.dimensions.width, c).lineTo(o, c);
        l.append("path").attr("class", "railroad-line").attr("d", d.build());
        const T = new x().moveTo(0, c).arcTo(arcRadius, arcRadius, 0, false, false, arcRadius, c - arcRadius).lineTo(arcRadius, arcRadius).arcTo(arcRadius, arcRadius, 0, false, true, arcRadius * 2, 0).lineTo(o - arcRadius * 2, 0).arcTo(arcRadius, arcRadius, 0, false, true, o - arcRadius, arcRadius).lineTo(o - arcRadius, c - arcRadius).arcTo(arcRadius, arcRadius, 0, false, false, o, c);
        l.append("path").attr("class", "railroad-line").attr("d", T.build());
        return {
            element: l.node(),
            dimensions: {
                width: o,
                height: g,
                up: c,
                down: g - c
            }
        };
    }
    renderRepetition(i, a, n) {
        const t = this.renderExpression(i, a);
        const arcRadius = this.config.arcRadius;
        const o = arcRadius * 2;
        const g = t.dimensions.width + arcRadius * 4;
        const l = n === 0;
        const s = t.dimensions.height + o + (l ? o : 0);
        const h = i.append("g").attr("class", "railroad-repetition");
        const u = arcRadius * 2;
        const c = l ? o : 0;
        h.node().appendChild(t.element).setAttribute("transform", `translate(${u}, ${c})`);
        const d = c + t.dimensions.up;
        h.append("path").attr("class", "railroad-line").attr("d", new x().moveTo(0, d).lineTo(arcRadius * 2, d).build());
        h.append("path").attr("class", "railroad-line").attr("d", new x().moveTo(u + t.dimensions.width, d).lineTo(g, d).build());
        const T = c + t.dimensions.height + arcRadius;
        const z = new x().moveTo(u + t.dimensions.width, d).arcTo(arcRadius, arcRadius, 0, false, true, u + t.dimensions.width + arcRadius, d + arcRadius).lineTo(u + t.dimensions.width + arcRadius, T).arcTo(arcRadius, arcRadius, 0, false, true, u + t.dimensions.width, T + arcRadius).lineTo(arcRadius * 2, T + arcRadius).arcTo(arcRadius, arcRadius, 0, false, true, arcRadius, T).lineTo(arcRadius, d + arcRadius).arcTo(arcRadius, arcRadius, 0, false, true, arcRadius * 2, d);
        h.append("path").attr("class", "railroad-line").attr("d", z.build());
        if (l) {
            const S = new x().moveTo(0, d).arcTo(arcRadius, arcRadius, 0, false, false, arcRadius, d - arcRadius).lineTo(arcRadius, arcRadius).arcTo(arcRadius, arcRadius, 0, false, true, arcRadius * 2, 0).lineTo(g - arcRadius * 2, 0).arcTo(arcRadius, arcRadius, 0, false, true, g - arcRadius, arcRadius).lineTo(g - arcRadius, d - arcRadius).arcTo(arcRadius, arcRadius, 0, false, false, g, d);
            h.append("path").attr("class", "railroad-line").attr("d", S.build());
        }
        return {
            element: h.node(),
            dimensions: {
                width: g,
                height: s,
                up: d,
                down: s - d
            }
        };
    }
    renderSpecial(i, a) {
        const n = this.measureText(`? ${a} ?`);
        const t = n.width + this.config.padding * 2;
        const r = n.height + this.config.padding * 2;
        const o = i.append("g").attr("class", "railroad-special");
        o.append("rect").attr("x", 0).attr("y", 0).attr("width", t).attr("height", r);
        o.append("text").attr("x", t / 2).attr("y", r / 2).text(`? ${a} ?`);
        return {
            element: o.node(),
            dimensions: {
                width: t,
                height: r,
                up: r / 2,
                down: r / 2
            }
        };
    }
    renderExpression(i, a) {
        switch(a.type){
            case "terminal":
                return this.renderTerminal(i, a.value);
            case "nonterminal":
                return this.renderNonTerminal(i, a.name);
            case "sequence":
                return this.renderSequence(i, a.elements);
            case "choice":
                return this.renderChoice(i, a.alternatives);
            case "optional":
                return this.renderOptional(i, a.element);
            case "repetition":
                return this.renderRepetition(i, a.element, a.min);
            case "special":
                return this.renderSpecial(i, a.text);
            default:
                throw new Error(`Unknown node type: ${a.type}`);
        }
    }
    renderRule(i, a) {
        const n = this.svg.append("g").attr("class", "railroad-rule").attr("transform", `translate(0, ${a})`);
        const t = `${i.name} =`;
        const r = this.measureText(t).width + 20;
        const o = r + 20;
        const g = n.append("g");
        const l = this.renderExpression(g, i.definition);
        const s = Math.max(20, l.dimensions.up);
        const h = s - l.dimensions.up;
        g.attr("transform", `translate(${o}, ${h})`);
        n.append("g").attr("class", "railroad-rule-name-group").append("text").attr("class", "railroad-rule-name").attr("x", 0).attr("y", s).text(t);
        n.append("g").attr("class", "railroad-start").append("circle").attr("cx", r).attr("cy", s).attr("r", this.config.markerRadius);
        n.append("g").attr("class", "railroad-end").append("circle").attr("cx", o + l.dimensions.width + 10).attr("cy", s).attr("r", this.config.markerRadius);
        n.append("path").attr("class", "railroad-line").attr("d", new x().moveTo(r + this.config.markerRadius, s).lineTo(o, s).build());
        n.append("path").attr("class", "railroad-line").attr("d", new x().moveTo(o + l.dimensions.width, s).lineTo(o + l.dimensions.width + 10 - this.config.markerRadius, s).build());
        return {
            height: Math.max(40, h + l.dimensions.height + this.config.padding * 2),
            width: o + l.dimensions.width + 10 + this.config.markerRadius
        };
    }
    renderDiagram(i) {
        let padding = this.config.padding;
        let n = 0;
        for (const t of i){
            const r = this.renderRule(t, padding);
            padding += r.height + this.config.verticalSeparation;
            n = Math.max(n, r.width);
        }
        return {
            width: n + this.config.padding * 2,
            height: padding + this.config.padding
        };
    }
};
__1($, "RailroadRenderer");
const ue = $;
const _ = __1((e, i, a)=>{
    e_1(e, i.height, i.width, a);
    e.attr("viewBox", `0 0 ${i.width} ${i.height}`);
}, "configureRailroadSvgSize");
const draw = __1((e, i, a)=>{
    l_1.debug(`[Railroad] Rendering diagram
` + e);
    try {
        const n = F_1(i);
        n.attr("class", "railroad-diagram");
        const r = z().railroad?.useMaxWidth ?? true;
        const o = oe.getRules();
        l_1.debug(`[Railroad] Rendering ${o.length} rules`);
        if (o.length === 0) {
            l_1.warn("[Railroad] No rules to render");
            _(n, {
                height: 100,
                width: 200
            }, r);
            return;
        }
        const l = new ue(n, E()).renderDiagram(o);
        _(n, l, r);
        l_1.debug("[Railroad] Render complete");
    } catch (error) {
        l_1.error("[Railroad] Render error:", error);
        throw error;
    }
}, "draw");
const xe = {
    draw
};
export { oe as d, Te as g, xe as r };
