!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "475e40e4-e834-4f62-887f-be1e49683f37";
            e._sentryDebugIdIdentifier = "sentry-dbid-475e40e4-e834-4f62-887f-be1e49683f37";
        }
    } catch (e) {}
})();
function e() {
    e.d = 851;
    return null;
}
export { e as default };
