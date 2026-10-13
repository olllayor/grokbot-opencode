import { u as u_1 } from "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "f0c7c999-093d-48b2-9f1d-10eebb8d9b58";
            e._sentryDebugIdIdentifier = "sentry-dbid-f0c7c999-093d-48b2-9f1d-10eebb8d9b58";
        }
    } catch (e) {}
})();
export const G = 128;
export const a = 500;
const GROK_BOT_SECRET_VALUE_MIN_LENGTH = 8;
export const c = 4;
const E = c * 1024;
const u = /^[A-Z][A-Z0-9_]*$/;
const d = new Set([
    "PATH",
    "HOME",
    "USER",
    "SHELL",
    "TERM",
    "PWD",
    "DISPLAY",
    "HTTP_PROXY",
    "HTTPS_PROXY",
    "ALL_PROXY",
    "NO_PROXY"
]);
const o = [
    "LD_",
    "CURSOR_",
    "CLOUD_AGENT_",
    "SAND_"
];
const R = /CURSOR_SANDBOX/i;
export function v(e) {
    if (e.length === 0) {
        return {
            kind: "empty"
        };
    }
    if (e.length > G) {
        return {
            kind: "long"
        };
    }
    if (!u.test(e)) {
        return {
            kind: "format"
        };
    }
    if (d.has(e)) {
        return {
            kind: "reserved-name",
            name: e
        };
    }
    const prefix = o.find((i)=>e.startsWith(i));
    if (prefix !== undefined) {
        return {
            kind: "reserved-prefix",
            prefix
        };
    }
    if (R.test(e)) {
        return {
            kind: "reserved-sandbox"
        };
    }
    return null;
}
export function b(e) {
    if (e.length === 0) {
        return {
            kind: "empty"
        };
    }
    if (e.length < GROK_BOT_SECRET_VALUE_MIN_LENGTH) {
        return {
            kind: "short"
        };
    }
    if (new TextEncoder().encode(e).byteLength > E) {
        return {
            kind: "long"
        };
    }
    return null;
}
function A() {
    const { _ } = u_1();
    return {
        name: (r)=>{
            switch(r.kind){
                case "empty":
                    return _({
                        id: "BRNg7+"
                    });
                case "long":
                    return _({
                        id: "uzgMt8",
                        values: {
                            GROK_BOT_SECRET_NAME_MAX_LENGTH: G
                        }
                    });
                case "format":
                    return _({
                        id: "T+UZQR"
                    });
                case "reserved-name":
                    return _({
                        id: "Owytij",
                        values: {
                            0: r.name
                        }
                    });
                case "reserved-prefix":
                    return _({
                        id: "m8zVtt",
                        values: {
                            0: r.prefix
                        }
                    });
                case "reserved-sandbox":
                    return _({
                        id: "kSvB29"
                    });
            }
        },
        value: (r)=>{
            switch(r.kind){
                case "empty":
                    return _({
                        id: "qNV794"
                    });
                case "short":
                    return _({
                        id: "Cr5BJv",
                        values: {
                            GROK_BOT_SECRET_VALUE_MIN_LENGTH
                        }
                    });
                case "long":
                    return _({
                        id: "jTBLMU",
                        values: {
                            GROK_BOT_SECRET_VALUE_MAX_KIB: c
                        }
                    });
            }
        }
    };
}
export { GROK_BOT_SECRET_VALUE_MIN_LENGTH as d, A as u };
