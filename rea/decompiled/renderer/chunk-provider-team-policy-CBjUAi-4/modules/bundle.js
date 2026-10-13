import { c as c_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { bP, b7, bR } from "./index.eager-app-Cj5f8Gby.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "9dac7a24-6cc1-4e1f-b89d-2fbe58d5a9fa";
            e._sentryDebugIdIdentifier = "sentry-dbid-9dac7a24-6cc1-4e1f-b89d-2fbe58d5a9fa";
        }
    } catch (e) {}
})();
function l() {
    return bP(b7().teamPolicy.snapshots);
}
function r(e) {
    switch(e.status){
        case "ready":
            return e.value;
        case "loading":
        case "failed":
            return e.previous;
        default:
            return;
    }
}
function f(e) {
    return r(e) !== undefined || e.status === "empty" || e.status === "unavailable";
}
export function u() {
    return r(l())?.localToolPermissionCeiling;
}
export function a() {
    const e = c_1.c(2);
    const o = l();
    let t;
    if (e[0] !== o) {
        t = f(o);
        e[0] = o;
        e[1] = t;
    } else {
        t = e[1];
    }
    return t;
}
export function b() {
    const e = l();
    const o = r(e);
    if (o === undefined) {
        if (f(e)) {
            return "free";
        }
        return "unknown";
    }
    if (o.localEgressAllowed) {
        return "free";
    }
    return "held";
}
export function c() {
    const e = c_1.c(7);
    const o = l();
    let t;
    if (e[0] !== o) {
        t = r(o);
        e[0] = o;
        e[1] = t;
    } else {
        t = e[1];
    }
    const s = t;
    if (s === undefined) {
        const a = f(o) ? "free" : "unknown";
        let i;
        if (e[2] !== a) {
            i = {
                lock: a,
                rules: bR
            };
            e[2] = a;
            e[3] = i;
        } else {
            i = e[3];
        }
        return i;
    }
    const u = s.autoReviewTeamEnforced ? "held" : "free";
    const c = s.autoReviewTeamEnforced ? s.autoReviewTeamRules : bR;
    let n;
    if (e[4] !== u || e[5] !== c) {
        n = {
            lock: u,
            rules: c
        };
        e[4] = u;
        e[5] = c;
        e[6] = n;
    } else {
        n = e[6];
    }
    return n;
}
