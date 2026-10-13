import { c as c_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { bP, b7, bh, bQ, b8 } from "./index.eager-app-Cj5f8Gby.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "52b5bf0e-9f3e-4a9b-8440-a347e786741a";
            e._sentryDebugIdIdentifier = "sentry-dbid-52b5bf0e-9f3e-4a9b-8440-a347e786741a";
        }
    } catch (e) {}
})();
export function u() {
    const t = c_1.c(5);
    const n = bP(b7().listenerIntegrations.snapshots);
    let view;
    if (t[0] !== n) {
        view = bh(n) ?? bQ;
        t[0] = n;
        t[1] = view;
    } else {
        view = t[1];
    }
    const i = n.status === "loading" && n.previous == null || n.status === "failed" && n.previous == null;
    let e;
    if (t[2] !== view || t[3] !== i) {
        e = {
            view,
            isLoading: i
        };
        t[2] = view;
        t[3] = i;
        t[4] = e;
    } else {
        e = t[4];
    }
    return e;
}
export function c() {
    const t = c_1.c(5);
    const n = bP(b7().listenerIntegrations.slackLink.snapshots);
    let s;
    if (t[0] !== n) {
        s = bh(n);
        t[0] = n;
        t[1] = s;
    } else {
        s = t[1];
    }
    const isLinked = s === true;
    const e = n.status === "loading" && n.previous == null;
    let o;
    if (t[2] !== isLinked || t[3] !== e) {
        o = {
            isLinked,
            isLoading: e
        };
        t[2] = isLinked;
        t[3] = e;
        t[4] = o;
    } else {
        o = t[4];
    }
    return o;
}
export function b(t) {
    const n = c_1.c(5);
    const s = b7();
    let i;
    if (n[0] !== s || n[1] !== t) {
        i = t == null || t.length === 0 ? p : s.listenerIntegrations.repoAccess(t).snapshots;
        n[0] = s;
        n[1] = t;
        n[2] = i;
    } else {
        i = n[2];
    }
    const e = bP(i);
    let o;
    if (n[3] !== e) {
        o = bh(e);
        n[3] = e;
        n[4] = o;
    } else {
        o = n[4];
    }
    return o;
}
const m = {
    status: "ready",
    value: false
};
const p = {
    get: ()=>m,
    subscribe: ()=>()=>{}
};
export function a() {
    const t = c_1.c(8);
    const { listenerIntegrations } = b7();
    const s = b8(listenerIntegrations.connectPlatform);
    const i = b8(listenerIntegrations.disconnectPlatform);
    let connect;
    let reconnect;
    if (t[0] !== s) {
        connect = (u)=>s.run(u);
        reconnect = (u)=>s.run(u, {
                forceOauth: true
            });
        t[0] = s;
        t[1] = connect;
        t[2] = reconnect;
    } else {
        connect = t[1];
        reconnect = t[2];
    }
    const isPending = s.isPending || i.isPending;
    let c;
    if (t[3] !== i.run || t[4] !== connect || t[5] !== reconnect || t[6] !== isPending) {
        c = {
            connect,
            reconnect,
            disconnect: i.run,
            isPending
        };
        t[3] = i.run;
        t[4] = connect;
        t[5] = reconnect;
        t[6] = isPending;
        t[7] = c;
    } else {
        c = t[7];
    }
    return c;
}
