import { c } from "./index.eager-vendor-Qbf9YA6n.js";
import { bg, b7, bP, b8, cs, ct, cu, cv } from "./index.eager-app-Cj5f8Gby.js";
import { l } from "./index.eager-platform-Dcfeegfw.js";
import { u as u_1 } from "./chunk-provider-credentials-yP7QsOsy.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "96769695-59be-459e-9c85-f3dd98ee1555";
            e._sentryDebugIdIdentifier = "sentry-dbid-96769695-59be-459e-9c85-f3dd98ee1555";
        }
    } catch (e) {}
})();
export function a() {
    return bP(b7().grokBotEmailInbox.snapshots);
}
function x() {
    return bg(b7().grokBotEmailInbox.snapshots, C);
}
function C(e) {
    return (l(e) ?? []).length > 0;
}
export function b() {
    const e = c.c(3);
    const n = b8(b7().grokBotEmailInbox.create);
    let t;
    if (e[0] !== n.isPending || e[1] !== n.run) {
        t = {
            create: n.run,
            isPending: n.isPending
        };
        e[0] = n.isPending;
        e[1] = n.run;
        e[2] = t;
    } else {
        t = e[2];
    }
    return t;
}
function E(e, n) {
    switch(e){
        case "onepassword":
            return n.isCredentialsConnected;
        case "email":
            return n.hasEmailInbox;
    }
}
export function u() {
    const e = c.c(4);
    const isCredentialsConnected = u_1();
    const hasEmailInbox = x();
    const i = cs().state?.servers ?? [];
    let s;
    if (e[0] !== hasEmailInbox || e[1] !== isCredentialsConnected || e[2] !== i) {
        s = (r)=>{
            if (r.builtinServerIdentifier != null) {
                const u = ct(r, i);
                return u != null && cu(u);
            }
            const a = cv(r.native);
            if (a == null) {
                return null;
            }
            return E(a, {
                isCredentialsConnected,
                hasEmailInbox
            });
        };
        e[0] = hasEmailInbox;
        e[1] = isCredentialsConnected;
        e[2] = i;
        e[3] = s;
    } else {
        s = e[3];
    }
    return s;
}
