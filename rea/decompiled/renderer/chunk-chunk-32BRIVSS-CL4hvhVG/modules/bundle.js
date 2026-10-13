import { _, d as d_1, n, j } from "./chunk-mermaid.core-B9Iu5CoE.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "15e9cd5f-702b-4908-8910-a66150ba6043";
            e._sentryDebugIdIdentifier = "sentry-dbid-15e9cd5f-702b-4908-8910-a66150ba6043";
        }
    } catch (e) {}
})();
export const d = _((r, t)=>{
    const e = r.append("rect");
    e.attr("x", t.x);
    e.attr("y", t.y);
    e.attr("fill", t.fill);
    e.attr("stroke", t.stroke);
    e.attr("width", t.width);
    e.attr("height", t.height);
    if (t.name) {
        e.attr("name", t.name);
    }
    if (t.rx) {
        e.attr("rx", t.rx);
    }
    if (t.ry) {
        e.attr("ry", t.ry);
    }
    if (t.attrs !== undefined) {
        for(const s in t.attrs){
            e.attr(s, t.attrs[s]);
        }
    }
    if (t.class) {
        e.attr("class", t.class);
    }
    return e;
}, "drawRect");
export const a = _((r, t)=>{
    const e = {
        x: t.startx,
        y: t.starty,
        width: t.stopx - t.startx,
        height: t.stopy - t.starty,
        fill: t.fill,
        stroke: t.stroke,
        class: "rect"
    };
    d(r, e).lower();
}, "drawBackgroundRect");
export const h = _((r, t)=>{
    const e = t.text.replace(n, " ");
    const s = r.append("text");
    s.attr("x", t.x);
    s.attr("y", t.y);
    s.attr("class", "legend");
    s.style("text-anchor", t.anchor);
    if (t.class) {
        s.attr("class", t.class);
    }
    const a = s.append("tspan");
    a.attr("x", t.x + t.textMargin * 2);
    a.text(e);
    return s;
}, "drawText");
export const e = _((r, t, e, s)=>{
    const a = r.append("image");
    a.attr("x", t);
    a.attr("y", e);
    const n = j.sanitizeUrl(s);
    a.attr("xlink:href", n);
}, "drawImage");
export const c = _((r, t, e, s)=>{
    const a = r.append("use");
    a.attr("x", t);
    a.attr("y", e);
    const n = j.sanitizeUrl(s);
    a.attr("xlink:href", `#${n}`);
}, "drawEmbeddedImage");
export const g = _(()=>({
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        fill: "#EDF2AE",
        stroke: "#666",
        anchor: "start",
        rx: 0,
        ry: 0
    }), "getNoteRect");
export const b = _(()=>({
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        "text-anchor": "start",
        style: "#666",
        textMargin: 0,
        rx: 0,
        ry: 0,
        tspan: true
    }), "getTextObj");
export const f = _(()=>{
    let r = d_1(".mermaidTooltip");
    if (r.empty()) {
        r = d_1("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0).style("position", "absolute").style("text-align", "center").style("max-width", "200px").style("padding", "2px").style("font-size", "12px").style("background", "#ffffde").style("border", "1px solid #333").style("border-radius", "2px").style("pointer-events", "none").style("z-index", "100");
    }
    return r;
}, "createTooltip");
