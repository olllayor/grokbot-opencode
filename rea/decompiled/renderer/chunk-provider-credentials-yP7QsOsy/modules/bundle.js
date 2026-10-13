import { c as c_1, r as r_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { bg, b7, bh, b8, bi } from "./index.eager-app-Cj5f8Gby.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "cee7ef77-5090-4076-a027-2c99d2e759a9";
            e._sentryDebugIdIdentifier = "sentry-dbid-cee7ef77-5090-4076-a027-2c99d2e759a9";
        }
    } catch (e) {}
})();
function useO(e) {
    return r_1.useSyncExternalStore(e.subscribe, e.get, e.get);
}
export function u() {
    return bg(b7().credentials.statusSnapshots, x);
}
function x(e) {
    return bh(e)?.connected === true;
}
export function e() {
    const e = c_1.c(9);
    const credentials = b7().credentials;
    const t = useO(credentials.statusSnapshots);
    let i;
    if (e[0] !== t) {
        i = bh(t);
        e[0] = t;
        e[1] = i;
    } else {
        i = e[1];
    }
    const r = t.status === "failed" ? t.failure : null;
    const c = t.status === "loading";
    let s;
    if (e[2] !== credentials) {
        s = ()=>{
            credentials.refresh();
        };
        e[2] = credentials;
        e[3] = s;
    } else {
        s = e[3];
    }
    let a;
    if (e[4] !== i || e[5] !== r || e[6] !== c || e[7] !== s) {
        a = {
            data: i,
            error: r,
            isFetching: c,
            refresh: s
        };
        e[4] = i;
        e[5] = r;
        e[6] = c;
        e[7] = s;
        e[8] = a;
    } else {
        a = e[8];
    }
    return a;
}
export function a() {
    const e = c_1.c(9);
    const credentials = b7().credentials;
    const t = useO(credentials.directorySnapshots);
    let i;
    if (e[0] !== t) {
        i = t.status === "empty" ? null : bh(t);
        e[0] = t;
        e[1] = i;
    } else {
        i = e[1];
    }
    const r = t.status === "failed" ? t.failure : null;
    const c = t.status === "loading";
    let s;
    if (e[2] !== credentials) {
        s = ()=>{
            credentials.refresh();
        };
        e[2] = credentials;
        e[3] = s;
    } else {
        s = e[3];
    }
    let a;
    if (e[4] !== i || e[5] !== r || e[6] !== c || e[7] !== s) {
        a = {
            data: i,
            error: r,
            isFetching: c,
            refresh: s
        };
        e[4] = i;
        e[5] = r;
        e[6] = c;
        e[7] = s;
        e[8] = a;
    } else {
        a = e[8];
    }
    return a;
}
export function b() {
    const e = c_1.c(3);
    const credentials = b7().credentials;
    let t;
    if (e[0] !== credentials.approve || e[1] !== credentials.deny) {
        t = {
            approve: credentials.approve,
            deny: credentials.deny
        };
        e[0] = credentials.approve;
        e[1] = credentials.deny;
        e[2] = t;
    } else {
        t = e[2];
    }
    return t;
}
export function d(e) {
    if (typeof e !== "object" || e == null || !("code" in e)) {
        return null;
    }
    if (e.code === "permission" || e.code === "cancelled" || e.code === "denied") {
        return e.code;
    }
    return null;
}
function R(e) {
    if (!e.ok) {
        throw Object.assign(new Error(e.message), {
            code: e.code
        });
    }
    return e.result;
}
export function c(e, n) {
    const t = c_1.c(16);
    const { onSuccessHoldChange, onSuccessComplete } = n;
    const { credentials } = b7();
    const [s] = r_1.useState(bi);
    const [a, setA] = r_1.useState(false);
    const f = useO(credentials.readinessSnapshots);
    const stage = r_1.useSyncExternalStore(s.subscribe, s.read, s.read);
    let l;
    if (t[0] !== credentials || t[1] !== onSuccessComplete || t[2] !== onSuccessHoldChange || t[3] !== s) {
        l = async (A)=>{
            setA(true);
            s.set("checking");
            return await credentials.startMint(A).then((w)=>{
                const I = R(w);
                onSuccessHoldChange?.(true);
                s.holdConnected(()=>{
                    credentials.refresh().finally(()=>{
                        onSuccessComplete?.();
                        onSuccessHoldChange?.(false);
                        s.set(null);
                    });
                });
                return I;
            }, (w)=>{
                s.set(null);
                onSuccessHoldChange?.(false);
                credentials.refresh();
                throw w;
            }).finally(()=>setA(false));
        };
        t[0] = credentials;
        t[1] = onSuccessComplete;
        t[2] = onSuccessHoldChange;
        t[3] = s;
        t[4] = l;
    } else {
        l = t[4];
    }
    const start = l;
    let readiness;
    if (t[5] !== f) {
        readiness = bh(f);
        t[5] = f;
        t[6] = readiness;
    } else {
        readiness = t[6];
    }
    const isCheckingReadiness = f.status === "loading";
    let refreshReadiness;
    if (t[7] !== credentials) {
        refreshReadiness = ()=>{
            credentials.refreshReadiness();
        };
        t[7] = credentials;
        t[8] = refreshReadiness;
    } else {
        refreshReadiness = t[8];
    }
    const isMinting = a || stage === "connected";
    let C;
    if (t[9] !== stage || t[10] !== start || t[11] !== readiness || t[12] !== isCheckingReadiness || t[13] !== refreshReadiness || t[14] !== isMinting) {
        C = {
            readiness,
            isCheckingReadiness,
            refreshReadiness,
            start,
            stage,
            isMinting
        };
        t[9] = stage;
        t[10] = start;
        t[11] = readiness;
        t[12] = isCheckingReadiness;
        t[13] = refreshReadiness;
        t[14] = isMinting;
        t[15] = C;
    } else {
        C = t[15];
    }
    return C;
}
export function f() {
    const e = c_1.c(10);
    const { credentials } = b7();
    const t = b8(credentials.sync);
    const i = b8(credentials.disconnect);
    const [r, setR] = r_1.useState(false);
    let s;
    if (e[0] !== credentials) {
        s = async (l, serviceAccountToken)=>{
            setR(true);
            let u;
            if (serviceAccountToken == null) {
                u = {
                    accountUuid: l.accountUuid,
                    vaultName: l.vaultName,
                    connectionId: l.connectionId,
                    ...l.accountEmail == null ? {} : {
                        accountEmail: l.accountEmail
                    },
                    ...l.accountUrl == null ? {} : {
                        accountUrl: l.accountUrl
                    }
                };
            } else {
                u = {
                    serviceAccountToken,
                    connectionId: l.connectionId
                };
            }
            return await credentials.startMint(u).then((g)=>{
                const h = R(g);
                credentials.refresh();
                return h;
            }, (g)=>{
                credentials.refresh();
                throw g;
            }).finally(()=>setR(false));
        };
        e[0] = credentials;
        e[1] = s;
    } else {
        s = e[1];
    }
    const renew = s;
    const o = b8(credentials.connectOAuth);
    const isPending = t.isPending || i.isPending || r || o.isPending;
    let d;
    if (e[2] !== o.isPending || e[3] !== o.run || e[4] !== credentials.cancelOAuth || e[5] !== i.run || e[6] !== renew || e[7] !== t.run || e[8] !== isPending) {
        d = {
            sync: t.run,
            disconnect: i.run,
            renew,
            connectOAuth: o.run,
            cancelOAuth: credentials.cancelOAuth,
            isConnectingOAuth: o.isPending,
            isPending
        };
        e[2] = o.isPending;
        e[3] = o.run;
        e[4] = credentials.cancelOAuth;
        e[5] = i.run;
        e[6] = renew;
        e[7] = t.run;
        e[8] = isPending;
        e[9] = d;
    } else {
        d = e[9];
    }
    return d;
}
