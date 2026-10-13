import { a$, b0 } from "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-vendor-Qbf9YA6n.js";
import { I as I_1, i, a as a_1, N, E, C, R, P, b, S, T, B, c as c_1 } from "./chunk-interaction-scope-C1E39pe7.js";
import { r as r_1, z as z_1 } from "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "3783ed02-3d76-4b00-aa99-b1e9aaf547b4";
            e._sentryDebugIdIdentifier = "sentry-dbid-3783ed02-3d76-4b00-aa99-b1e9aaf547b4";
        }
    } catch (e) {}
})();
const r = (t)=>typeof t === "string";
const d = (t)=>typeof t === "boolean";
const c = (t)=>typeof t === "number" && Number.isFinite(t);
const a = (t)=>typeof t === "number" && Number.isInteger(t) && t >= 0;
const component = (t)=>typeof t === "number" && i(t);
function s(t) {
    const o = new Set(t);
    return (n)=>typeof n === "string" && o.has(n);
}
function L(t) {
    return (o)=>o === null || t(o);
}
function I(t, o, n = {}) {
    if (!a$(t)) {
        return false;
    }
    for (const e of Object.keys(t)){
        if (!Object.hasOwn(o, e) && !Object.hasOwn(n, e)) {
            return false;
        }
    }
    for (const [e, i] of Object.entries(o)){
        if (!i(t[e])) {
            return false;
        }
    }
    for (const [e, i] of Object.entries(n)){
        if (t[e] !== undefined && !i(t[e])) {
            return false;
        }
    }
    return true;
}
function u(t, o = {}) {
    return (n)=>{
        if (!a$(n) || typeof n.kind !== "string") {
            return false;
        }
        const e = Object.hasOwn(t, n.kind) ? t[n.kind] : undefined;
        const i = Object.hasOwn(o, n.kind) ? o[n.kind] : undefined;
        return e != null && I(n, {
            kind: r,
            ...e
        }, i);
    };
}
const surface = s(Object.keys(b0));
const U = /^(view|overlay):[a-z0-9-]+(\/[a-z0-9-]+)*$/;
const route = (t)=>{
    if (!a$(t) || typeof t.entrypointId !== "string" || !I(t, {
        surface: s(c_1),
        entrypointId: r
    })) {
        return false;
    }
    if (t.surface === "shell") {
        return t.entrypointId === "";
    }
    return U.test(t.entrypointId);
};
u({
    navigation: {
        action: s(N),
        surface,
        entrypointId: r,
        startMs: c
    },
    selection: {
        startMs: c
    },
    interaction: {
        event: s(a_1),
        startMs: c
    }
}, {
    navigation: {
        absorbedInputs: a
    },
    interaction: {
        route,
        target: (t)=>I(t, {
                component
            }, {
                role: s(I_1)
            })
    }
});
u({
    render: {
        component,
        phase: s(R),
        compiled: d,
        baseMs: c
    },
    commit: {
        priority: s(C)
    },
    effects: {
        boundary: r,
        passiveMs: c
    },
    "component-effects": {
        component,
        phase: s(E)
    }
});
u({
    settle: {
        entrypointId: r,
        chunk: s(S),
        cached: d
    },
    presented: {
        ticket: a,
        entrypointId: r,
        surface,
        commitClass: s(b)
    },
    publish: {
        store: r,
        commit: s(P),
        version: a,
        listeners: a
    },
    rpc: {
        edge: r,
        method: r,
        ok: d,
        failureCode: L(r)
    },
    event: {
        event: r,
        interactionId: a,
        inputDelayMs: c,
        processingMs: c
    },
    "long-animation-frame": {
        blockingMs: c,
        renderMs: c,
        styleAndLayoutMs: c,
        scripts: a
    }
});
s(T);
s(B);
function D(boot) {
    return JSON.stringify({
        boot
    });
}
function H(t, o = {}) {
    const n = o.clock ?? r_1;
    const e = new TextEncoder;
    const i = {
        traces: 0,
        bytes: 0,
        sinkMs: 0
    };
    const y = (f)=>{
        const S = n.monotonicNow();
        const O = f();
        t.postMessage(O);
        i.traces += 1;
        i.bytes += e.encode(O).byteLength;
        i.sinkMs += z_1(S, n.monotonicNow());
    };
    return {
        sink: {
            accept (f) {
                y(()=>JSON.stringify(f));
            },
            acceptBoot (f) {
                y(()=>D(f));
            }
        },
        stats: ()=>({
                ...i
            })
    };
}
function z(t, o) {
    let currentAgentId = t.get().currentAgentId;
    return t.subscribe(()=>{
        const currentAgentId_1 = t.get().currentAgentId;
        if (currentAgentId_1 !== currentAgentId && currentAgentId_1 != null && currentAgentId != null) {
            o();
        }
        currentAgentId = currentAgentId_1;
    });
}
export function connectRenderTracePort(t, o, n) {
    const e = H(o);
    t.setSinks([
        e.sink
    ]);
    z(n, ()=>t.noteSelection());
    return ()=>e.stats();
}
