!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "14f0879b-521a-4ae2-b85d-60f21724980c";
            e._sentryDebugIdIdentifier = "sentry-dbid-14f0879b-521a-4ae2-b85d-60f21724980c";
        }
    } catch (e) {}
})();
function u(e, t) {
    if (e.teamRank !== undefined && t.teamRank !== undefined && e.teamRank !== t.teamRank) {
        return e.teamRank - t.teamRank;
    }
    if (e.teamRank !== undefined && t.teamRank === undefined) {
        return -1;
    }
    if (e.teamRank === undefined && t.teamRank !== undefined) {
        return 1;
    }
    return t.createdAt - e.createdAt;
}
export function o(e) {
    return [
        ...e
    ].sort(u);
}
export function b(e) {
    if (e.viewerIsOwner === true) {
        return "you";
    }
    if (e.viewerIsOwner !== false) {
        return null;
    }
    const t = e.ownerDisplayName?.trim() ?? "";
    if (t.length === 0) {
        return null;
    }
    return t;
}
export function t(e) {
    const t = b(e);
    if (t === null || t === "you") {
        return t;
    }
    const [n = "", ...o] = t.normalize("NFC").split(/\s+/u);
    if (n.length === 0) {
        return null;
    }
    const r = o.reverse().find((i)=>new RegExp("^\\p{L}", "u").test(i)) ?? "";
    const [a] = Array.from(r);
    if (a === undefined) {
        return n;
    }
    return `${n} ${a}`;
}
export function a(e, t) {
    if (t) {
        return e.title?.trim() ?? "";
    }
    return "";
}
export function m(e, t, n, o) {
    const r = t.trim().toLowerCase();
    if (r.length === 0) {
        return true;
    }
    return [
        n(e),
        a(e, o),
        e.description ?? "",
        e.ownerDisplayName ?? ""
    ].some((a)=>a.toLowerCase().includes(r));
}
