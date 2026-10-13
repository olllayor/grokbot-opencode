!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "05be072b-8750-4489-81ff-6344a9333660";
            e._sentryDebugIdIdentifier = "sentry-dbid-05be072b-8750-4489-81ff-6344a9333660";
        }
    } catch (e) {}
})();
export function i(e, a) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            this.range(e);
            break;
        default:
            this.range(a).domain(e);
            break;
    }
    return this;
}
