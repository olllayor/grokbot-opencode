!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "37b6b4c1-5c3e-4105-9ce0-009569e584a7";
            e._sentryDebugIdIdentifier = "sentry-dbid-37b6b4c1-5c3e-4105-9ce0-009569e584a7";
        }
    } catch (e) {}
})();
const t = "-xai";
const o = /^(?:dashboard-team-\d+-|dashboard-|user-|cursor-)/i;
function s(n) {
    let e = n.trim();
    const r = e.lastIndexOf("--");
    if (r !== -1) {
        e = e.slice(0, r);
    }
    const c = o.exec(e)?.[0];
    if (c != null) {
        e = e.slice(c.length);
    }
    if (e.length > t.length && e.toLowerCase().endsWith(t)) {
        e = e.slice(0, -t.length);
    }
    return e.replace(/[._]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase();
}
function i(n) {
    return n != null && n.length > 0 && s(n) === "finance";
}
function a(n) {
    return i(n.name) || i(n.rowServerIdentifier) || i(n.serverIdentifier);
}
export { i as a, a as i };
