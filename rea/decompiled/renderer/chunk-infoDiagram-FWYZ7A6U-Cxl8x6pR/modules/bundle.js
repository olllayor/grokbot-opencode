import { _, l, F, e as e_1 } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "08284fa5-b2f7-4a23-a5a3-1c2cb1163e1f";
            e._sentryDebugIdIdentifier = "sentry-dbid-08284fa5-b2f7-4a23-a5a3-1c2cb1163e1f";
        }
    } catch (e) {}
})();
const parser = {
    parse: _(async (r)=>{
        const e = await p("info", r);
        l.debug(e);
    }, "parse")
};
const v = {
    version: "11.16.0"
};
const getVersion = _(()=>v.version, "getVersion");
const db = {
    getVersion
};
const draw = _((r, e, n)=>{
    l.debug(`rendering info diagram
` + r);
    const t = F(e);
    e_1(t, 100, 400, true);
    t.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${n}`);
}, "draw");
const renderer = {
    draw
};
export const diagram = {
    parser,
    db,
    renderer
};
