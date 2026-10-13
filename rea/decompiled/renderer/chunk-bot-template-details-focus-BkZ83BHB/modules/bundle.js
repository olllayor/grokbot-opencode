!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "3f153a89-e6d3-45bb-8ff0-56bc5e98ac2e";
            e._sentryDebugIdIdentifier = "sentry-dbid-3f153a89-e6d3-45bb-8ff0-56bc5e98ac2e";
        }
    } catch (e) {}
})();
function r(n, t) {
    if (n == null) {
        return null;
    }
    for (const e of n.querySelectorAll("[data-details-pane]")){
        if (e instanceof HTMLElement && e.getAttribute("data-details-pane") === t) {
            return e;
        }
    }
    return null;
}
function l(n, t) {
    if (n.kind === "row") {
        const e = r(t.incoming, n.paneKey);
        if (e != null) {
            return e;
        }
    }
    return t.back ?? t.title ?? t.fallback;
}
export { l as r };
