!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "1c67672f-3a54-49a7-8556-8c613cb6f369";
            e._sentryDebugIdIdentifier = "sentry-dbid-1c67672f-3a54-49a7-8556-8c613cb6f369";
        }
    } catch (e) {}
})();
function e() {
    e.d = 971;
    return null;
}
export { e as default };
