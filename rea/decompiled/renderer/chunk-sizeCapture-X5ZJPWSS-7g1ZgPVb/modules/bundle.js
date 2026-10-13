import { _ } from "./chunk-mermaid.core-B9Iu5CoE.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "5ea3fae5-8080-4eb7-9b09-0df3ad1683ff";
            e._sentryDebugIdIdentifier = "sentry-dbid-5ea3fae5-8080-4eb7-9b09-0df3ad1683ff";
        }
    } catch (e) {}
})();
const captureVersion = 1;
function i() {
    if (!(typeof globalThis === "undefined")) {
        return globalThis;
    }
}
_(i, "getCaptureGlobal");
export function shouldCaptureSizes() {
    return !!i()?.mermaidCaptureSizes;
}
_(shouldCaptureSizes, "shouldCaptureSizes");
function u() {
    if (typeof location === "undefined") {
        return "browser-dev";
    }
    return `${location.pathname}${location.search}`;
}
_(u, "capturedFromLocation");
function d(sizes, r) {
    const t = i();
    if (!t) {
        return;
    }
    const e = r.node();
    const svgId = ((e && "ownerSVGElement" in e ? e.ownerSVGElement : null) ?? e)?.id ?? "(unknown)";
    t.mermaidCapturedSizes ??= [];
    const a = {
        svgId,
        sizes
    };
    t.mermaidCapturedSizes.push(a);
    t.mermaidLastCapturedSizes = a;
}
_(d, "emitCapturedSizes");
export function captureNodeSizes(n, r) {
    const nodes = [];
    for (const e of r.nodes){
        if (!e.isGroup) {
            nodes.push({
                id: e.id,
                width: e.width ?? 0,
                height: e.height ?? 0
            });
        }
    }
    if (nodes.length !== 0) {
        d({
            metadata: {
                captureVersion,
                capturedAt: new Date().toISOString(),
                capturedFrom: u()
            },
            nodes
        }, n);
    }
}
_(captureNodeSizes, "captureNodeSizes");
