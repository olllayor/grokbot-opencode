!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "e319eecf-a005-49ca-a732-b35e444c4bdd";
            e._sentryDebugIdIdentifier = "sentry-dbid-e319eecf-a005-49ca-a732-b35e444c4bdd";
        }
    } catch (e) {}
})();
export function a(e, n) {
    switch(n){
        case "connected":
            return e({
                id: "QHcLEN"
            });
        case "disconnected":
            return e({
                id: "ZYnwzF"
            });
        case "error":
            return e({
                id: "SlfejT"
            });
        case "initializing":
            return e({
                id: "l6GfXr"
            });
        case "needsAuth":
            return e({
                id: "tHbuQ4"
            });
        case "needsGrant":
            return e({
                id: "f8c8eA"
            });
        case "disabledByTeamAdminPolicy":
            return e({
                id: "OYx6pi"
            });
        default:
            return n;
    }
}
function r(e) {
    switch(e){
        case "connected":
            return null;
        case "needsAuth":
        case "needsGrant":
            return "warn";
        case "error":
            return "danger";
        case "initializing":
        case "disconnected":
        case "disabledByTeamAdminPolicy":
            return "neutral";
        default:
            return e;
    }
}
export function g(e) {
    if (e === "connected") {
        return "connected";
    }
    switch(r(e)){
        case "warn":
            return "warn";
        case "danger":
            return "danger";
        default:
            return "neutral";
    }
}
