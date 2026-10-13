import { _, e as e_1, l as l_1 } from "./chunk-mermaid.core-B9Iu5CoE.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "f9eb1b74-d104-479a-805b-0f5bfe6e637f";
            e._sentryDebugIdIdentifier = "sentry-dbid-f9eb1b74-d104-479a-805b-0f5bfe6e637f";
        }
    } catch (e) {}
})();
export const s = _((e, t, i, r)=>{
    e.attr("class", i);
    const { width, height, x, y } = u(e, t);
    e_1(e, height, width, r);
    const s = l(x, y, width, height, t);
    e.attr("viewBox", s);
    l_1.debug(`viewBox configured: ${s} with padding: ${t}`);
}, "setupViewPortForSVG");
var u = _((e, t)=>{
    const i = e.node()?.getBBox() || {
        width: 0,
        height: 0,
        x: 0,
        y: 0
    };
    return {
        width: i.width + t * 2,
        height: i.height + t * 2,
        x: i.x,
        y: i.y
    };
}, "calculateDimensionsWithPadding");
var l = _((e, t, i, r, o)=>`${e - o} ${t - o} ${i} ${r}`, "createViewBox");
