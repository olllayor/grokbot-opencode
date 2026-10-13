import { b6 } from "./index.eager-platform-Dcfeegfw.js";
import { t as t_1, r, b as b_1, L } from "./index.eager-common-CdCvBQNJ.js";
import { E, a, d as version, p as p_1, e as e_1, f, s, g, w as w_1 } from "./chunk-interaction-scope-C1E39pe7.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "97f62647-7caf-4e74-aa04-5adb48c2af17";
            e._sentryDebugIdIdentifier = "sentry-dbid-97f62647-7caf-4e74-aa04-5adb48c2af17";
        }
    } catch (e) {}
})();
const SYMBOL_DUNE_RENDER_TRACE_SESSION = Symbol.for("dune.render-trace.session");
const SYMBOL_DUNE_RENDER_TRACE_HOOK_STUB = Symbol.for("dune.render-trace.hook-stub");
const D = "onDuneComponentEffect";
const se = 50;
function re(sampleRate) {
    return typeof sampleRate === "number" && sampleRate > 0 && sampleRate <= 1;
}
function ie(t = globalThis) {
    const o = SYMBOL_DUNE_RENDER_TRACE_SESSION in t ? t[SYMBOL_DUNE_RENDER_TRACE_SESSION] : undefined;
    if (typeof o === "object" && o !== null && "sampleRate" in o && re(o.sampleRate)) {
        return {
            sampleRate: o.sampleRate
        };
    }
    return null;
}
const rt = "__REACT_DEVTOOLS_GLOBAL_HOOK__";
function ot(t) {
    return t === undefined || typeof t === "function";
}
function ae(t) {
    if (typeof t !== "object" || t === null || "onCommitFiberRoot" in t && !ot(t.onCommitFiberRoot) || "onPostCommitFiberRoot" in t && !ot(t.onPostCommitFiberRoot)) {
        return false;
    }
    return !(D in t && !ot(t[D]));
}
function ce(t) {
    if (!(rt in t)) {
        return null;
    }
    const o = t[rt];
    if (ae(o)) {
        return o;
    }
    return null;
}
function vt(t) {
    return typeof t === "object" && t !== null && "current" in t;
}
function le(fiber) {
    return typeof fiber === "object" && fiber !== null && "tag" in fiber && "return" in fiber;
}
function st(t) {
    return typeof t === "number" && Number.isFinite(t);
}
function ue(phase) {
    return E.some((o)=>o === phase);
}
function de() {
    const renderers = new Map;
    let o = 0;
    return {
        renderers,
        supportsFiber: true,
        inject: (a)=>{
            o += 1;
            renderers.set(o, a);
            return o;
        },
        onScheduleFiberRoot: ()=>{},
        onCommitFiberRoot: ()=>{},
        onCommitFiberUnmount: ()=>{},
        onPostCommitFiberRoot: ()=>{}
    };
}
function fe(t, o, a = globalThis) {
    const l = ce(a);
    const u = l ?? de();
    const mode = l == null || SYMBOL_DUNE_RENDER_TRACE_HOOK_STUB in l ? "installed" : "augmented";
    if (l == null) {
        Object.defineProperty(a, rt, {
            value: u,
            configurable: true,
            enumerable: true,
            writable: true
        });
    }
    const { onCommitFiberRoot, onPostCommitFiberRoot } = u;
    const F = u[D];
    const S = (b, M)=>{
        if (b != null) {
            try {
                b.apply(u, M);
            } catch (error) {
                o.previousHookFailures += 1;
                o.lastError = error;
            }
        }
    };
    const T = (b)=>{
        try {
            b();
        } catch (error) {
            o.collectorFailures += 1;
            o.lastError = error;
        }
    };
    let s = true;
    const B = (...b)=>{
        S(onCommitFiberRoot, b);
        const [, M, y] = b;
        if (s && vt(M)) {
            T(()=>t.onCommit(M, y));
        }
    };
    const H = (...b)=>{
        S(onPostCommitFiberRoot, b);
        const [, M] = b;
        if (s && vt(M)) {
            T(()=>t.onPostCommit(M));
        }
    };
    const P = (phase, fiber, startMs, endMs, selfMs)=>{
        S(F, [
            phase,
            fiber,
            startMs,
            endMs,
            selfMs
        ]);
        if (s && ue(phase) && le(fiber) && st(startMs) && st(endMs) && st(selfMs)) {
            T(()=>t.onComponentEffect({
                    phase,
                    fiber,
                    startMs,
                    endMs,
                    selfMs
                }));
        }
    };
    u.onCommitFiberRoot = B;
    u.onPostCommitFiberRoot = H;
    u[D] = P;
    return {
        mode,
        dispose () {
            s = false;
            if (u.onCommitFiberRoot === B) {
                u.onCommitFiberRoot = onCommitFiberRoot;
            }
            if (u.onPostCommitFiberRoot === H) {
                u.onPostCommitFiberRoot = onPostCommitFiberRoot;
            }
            if (u[D] === P) {
                u[D] = F;
            }
        }
    };
}
const _ = Object.freeze({
    floorMs: 0.1,
    quietMs: 200,
    capMs: 5000,
    refineMs: 50,
    queueLength: 8,
    fiberCap: 2000
});
const St = {
    interaction: 0,
    selection: 1,
    navigation: 2
};
const me = Object.freeze({
    kick () {},
    dispose () {}
});
const At = [
    "workspace",
    "overlay"
];
const wt = new Set([
    "input",
    "wheel"
]);
const pe = new Set([
    "click",
    "pointerdown"
]);
function It(root) {
    return root.kind !== "interaction" || !wt.has(root.event);
}
function Nt(t, o) {
    if (St[o.kind] < St[t.kind]) {
        return false;
    }
    return !(t.kind === "interaction" && o.kind === "interaction" && pe.has(t.event) && wt.has(o.event));
}
function Me(root, o) {
    return root.kind === "navigation" && o.kind === "navigation" && root.action === "close" && o.action === "close" && root.entrypointId === o.entrypointId;
}
const xt = 10;
function v(t) {
    return Math.round(t * xt);
}
function h(t) {
    return t / xt;
}
function C(t) {
    return h(v(t));
}
function Y(t) {
    const start = v(t.startMs);
    return {
        start,
        end: Math.max(start, v(t.startMs + t.durationMs))
    };
}
function be(span, interval) {
    const detail = span.detail.kind === "render" ? {
        ...span.detail,
        baseMs: C(span.detail.baseMs)
    } : span.detail;
    return {
        ...span,
        startMs: h(interval.start),
        durationMs: h(interval.end - interval.start),
        selfMs: h(Math.min(v(span.selfMs), interval.end - interval.start)),
        detail
    };
}
function Ot(startMs, spans) {
    const a = v(startMs);
    let l = a;
    let commitCount = 0;
    let E = 0;
    for (const p of spans){
        if (p.detail.kind === "commit") {
            commitCount += 1;
            l = Math.max(l, v(p.startMs + p.durationMs));
        } else if (p.detail.kind === "render") {
            E += v(p.selfMs);
        }
    }
    return {
        lastCommitMs: h(l - a),
        commitCount,
        renderSelfMs: h(E)
    };
}
const qt = [
    "event",
    "long-animation-frame"
];
const durationThreshold = 16;
function he(t) {
    if (!("processingStart" in t && "processingEnd" in t && "interactionId" in t)) {
        return null;
    }
    const { processingStart, processingEnd, interactionId } = t;
    if (typeof processingStart !== "number" || typeof processingEnd !== "number" || typeof interactionId !== "number") {
        return null;
    }
    return {
        kind: "event",
        event: t.name,
        interactionId,
        inputDelayMs: C(processingStart - t.startTime),
        processingMs: C(processingEnd - processingStart)
    };
}
function Ee(t) {
    if (!("blockingDuration" in t && "renderStart" in t && "styleAndLayoutStart" in t && "scripts" in t)) {
        return null;
    }
    const { blockingDuration, renderStart, styleAndLayoutStart, scripts } = t;
    if (typeof blockingDuration !== "number" || typeof renderStart !== "number" || typeof styleAndLayoutStart !== "number" || !Array.isArray(scripts)) {
        return null;
    }
    const E = t.startTime + t.duration;
    return {
        kind: "long-animation-frame",
        blockingMs: C(blockingDuration),
        renderMs: renderStart === 0 ? 0 : C(E - renderStart),
        styleAndLayoutMs: styleAndLayoutStart === 0 ? 0 : C(E - styleAndLayoutStart),
        scripts: scripts.length
    };
}
const Ce = {
    event: he,
    "long-animation-frame": Ee
};
const ge = new Set([
    "pointerover",
    "pointerout",
    "pointerenter",
    "pointerleave",
    "mouseover",
    "mouseout",
    "mouseenter",
    "mouseleave"
]);
function Te(detail) {
    return detail.kind === "event" && ge.has(detail.event);
}
function Re(entryType) {
    return qt.some((o)=>o === entryType);
}
function ye(t) {
    if (t === "event") {
        return {
            type: t,
            buffered: true,
            durationThreshold
        };
    }
    return {
        type: t,
        buffered: true
    };
}
function ve() {
    return typeof self !== "undefined" && typeof self.requestAnimationFrame === "function";
}
function Se(t) {
    switch(t){
        case 1:
            return "immediate";
        case 2:
            return "user-blocking";
        case 5:
            return "idle";
        default:
            return "normal";
    }
}
function Ie(root, o) {
    return root.kind === "navigation" && o.kind === "navigation" && root.action === o.action && root.surface === o.surface && root.entrypointId === o.entrypointId;
}
function _t(root, o) {
    if (o == null || root.kind !== "navigation" || root.action !== "open") {
        return false;
    }
    return At.some((a)=>{
        const l = o.surfaces[a];
        return a === root.surface && l.pending?.link.entrypointId === root.entrypointId;
    });
}
function Ft(surface, entrypointId, startMs, l) {
    return {
        root: {
            kind: "navigation",
            action: "open",
            surface,
            entrypointId,
            startMs
        },
        ticket: l
    };
}
function Ne(t) {
    const roots = [];
    const presents = [];
    const { startMs } = t;
    for (const surface of At){
        const E = t.previous.surfaces[surface];
        const p = t.next.surfaces[surface];
        if (p.pending != null && p.pending !== E.pending) {
            roots.push(Ft(surface, p.pending.link.entrypointId, startMs, p.pending.ticket));
        } else if (p.committed !== E.committed) {
            if (p.committed != null) {
                const g = E.pending != null && b6(E.pending.link, p.committed) ? E.pending : null;
                roots.push(Ft(surface, p.committed.entrypointId, startMs, g?.ticket ?? null));
                if (g != null) {
                    presents.push({
                        ticket: g.ticket,
                        entrypointId: p.committed.entrypointId,
                        surface,
                        commitClass: t.commitClass,
                        startMs
                    });
                }
            } else {
                if (E.committed != null) {
                    roots.push({
                        root: {
                            kind: "navigation",
                            action: "close",
                            surface,
                            entrypointId: E.committed.entrypointId,
                            startMs
                        },
                        ticket: null
                    });
                }
            }
        }
    }
    return {
        roots,
        presents
    };
}
function Oe(root, measures) {
    if (root.kind !== "navigation" || root.action !== "open") {
        return null;
    }
    const a = measures.find((l)=>l.detail.kind === "presented" && l.detail.entrypointId === root.entrypointId);
    if (a == null) {
        return null;
    }
    return h(v(a.startMs + a.durationMs) - v(root.startMs));
}
function _e(t) {
    if (t.kind === "transition") {
        return "transition";
    }
    return "restore";
}
function Fe(t) {
    const clock = t.clock ?? r;
    const floorMs = t.floorMs ?? _.floorMs;
    const l = t_1({
        name: "tracing.quiet",
        idleMs: t.quietMs ?? _.quietMs,
        clock
    });
    const u = b_1({
        name: "tracing.cap",
        ttlMs: t.capMs ?? _.capMs,
        clock
    });
    const E = L({
        name: "tracing.presented",
        clock,
        park: "hidden"
    });
    const p = Math.random().toString(36).slice(2, 10) || "trace";
    let { sampling } = t;
    let t_sinks = t.sinks;
    let S = false;
    let detached = false;
    let trace = null;
    let B = 0;
    let H = 0;
    let dropped = 0;
    let b = null;
    let M = null;
    let y = "none";
    let N = null;
    let boot = null;
    const w = [];
    const K = [];
    const V = [];
    const j = new Map;
    let O = null;
    let X = false;
    const x = new Map;
    const q = new Map;
    const it = [];
    const $ = {
        previousHookFailures: 0,
        collectorFailures: 0,
        lastError: null
    };
    const m = {
        tracesClosed: 0,
        tracesExported: 0,
        tracesUnexported: 0,
        tracesWithoutCommits: 0,
        commits: 0,
        spans: 0,
        folded: 0,
        dropped: 0,
        absorbedCommits: 0,
        droppedTraces: 0,
        cappedCommits: 0,
        maxCommitFibers: 0,
        fibersVisited: 0,
        handlerMs: 0,
        droppedMeasures: 0,
        sinkFailures: 0
    };
    const at = {
        navigation: 0,
        selection: 0,
        interaction: 0
    };
    const nextId = ()=>{
        H += 1;
        return s(H);
    };
    const ct = ()=>{
        B += 1;
        return p_1(`${p}-${B}`);
    };
    const lt = (e, n)=>{
        for (const r of t_sinks){
            try {
                n(r, e);
            } catch (error) {
                m.sinkFailures += 1;
                $.lastError = error;
            }
        }
    };
    const ut = ()=>{
        if (t_sinks.length !== 0) {
            if (N != null) {
                const e = N;
                N = null;
                lt(e, (n, r)=>n.acceptBoot?.(r));
            }
            for (const e of w.splice(0)){
                lt(e, (n, r)=>n.accept(r));
            }
        }
    };
    const dt = (e)=>{
        m.tracesClosed += 1;
        m.spans += e.spans.length;
        m.folded += e.folded;
    };
    const ft = ()=>{
        m.tracesExported += 1;
        ut();
        if (sampling != null && m.tracesExported >= sampling.maxTraces) {
            Tt();
        }
    };
    const Lt = (e)=>{
        if (detached) {
            if (It(e.root)) {
                at[e.root.kind] += 1;
            }
            return;
        }
        const n = {
            version,
            ...e,
            ...Ot(e.root.startMs, e.spans),
            sampleRate: sampling?.sampleRate ?? 1
        };
        dt(n);
        if (sampling != null && !It(n.root)) {
            m.tracesUnexported += 1;
            return;
        }
        if (sampling != null && n.commitCount === 0) {
            m.tracesWithoutCommits += 1;
            return;
        }
        K.push(n);
        if (K.length > _.queueLength) {
            K.shift();
        }
        w.push(n);
        if (w.length > _.queueLength) {
            w.shift();
            m.droppedTraces += 1;
        }
        ft();
    };
    const Q = (e)=>{
        if (detached) {
            return;
        }
        const n = {
            version,
            ...e,
            ...Ot(e.startMs, e.spans),
            sampleRate: sampling?.sampleRate ?? 1
        };
        dt(n);
        boot = n;
        N = n;
        ft();
    };
    const mt = (trace, n, phase, parent)=>{
        for (const c of n.values()){
            const d = Y({
                startMs: c.startMs,
                durationMs: c.endMs - c.startMs
            });
            if (c.selfMs < floorMs) {
                trace.folded += 1;
                continue;
            }
            trace.spans.push({
                id: nextId(),
                parent,
                startMs: h(d.start),
                durationMs: h(d.end - d.start),
                selfMs: h(Math.min(v(c.selfMs), d.end - d.start)),
                detail: {
                    kind: "component-effects",
                    component: c.component,
                    phase
                }
            });
        }
        n.clear();
    };
    const J = ()=>{
        const e = O;
        if (e != null) {
            O = null;
            mt(e.trace, e.drafts, "passive", e.commit);
            e.publish?.();
        }
    };
    const onComponentEffect = (e)=>{
        const n = e.phase === "layout" ? trace : O?.trace;
        if (n == null) {
            return;
        }
        const r = clock.monotonicNow();
        const i = e.phase === "layout" ? j : O?.drafts;
        const c = g(e.fiber);
        if (i != null && c != null) {
            const d = i.get(c.fiber);
            if (d != null) {
                d.startMs = Math.min(d.startMs, e.startMs);
                d.endMs = Math.max(d.endMs, e.endMs);
                d.selfMs += e.selfMs;
            } else if (i.size < _.fiberCap) {
                i.set(c.fiber, {
                    component: c.id,
                    startMs: e.startMs,
                    endMs: e.endMs,
                    selfMs: e.selfMs
                });
            } else {
                n.folded += 1;
            }
        }
        m.handlerMs += clock.monotonicNow() - r;
    };
    const pt = (e = false)=>{
        if (!e || O?.trace !== trace) {
            J();
        }
        if (trace == null) {
            return null;
        }
        for (const [r, i] of q){
            r.dispose();
            et(i);
        }
        q.clear();
        m.droppedMeasures += x.size;
        x.clear();
        const n = trace;
        trace = null;
        n.quiet.dispose();
        n.cap.dispose();
        return n;
    };
    const Mt = (e, root, closedBy)=>({
            id: e.id,
            startMs: root.startMs,
            endMs: C(clock.monotonicNow()),
            closedBy,
            spans: e.spans,
            measures: e.measures,
            folded: e.folded,
            dropped: e.dropped
        });
    const Z = (closedBy)=>{
        const n = pt(closedBy === "superseded");
        if (n == null) {
            return;
        }
        const { id, root, ticket, spans, measures, dropped } = n;
        if (root.kind === "boot") {
            Q(Mt(n, root, closedBy));
            return;
        }
        const R = C(clock.monotonicNow());
        const presentedMs = Oe(root, measures);
        const { dismissedMs } = n;
        const f = (endMs)=>{
            const { folded } = n;
            const Ut = {
                id,
                root: root.kind === "navigation" ? {
                    ...root,
                    absorbedInputs: n.absorbedInputs
                } : root,
                endMs,
                closedBy,
                spans,
                folded,
                dropped,
                measures,
                ...ticket == null ? {} : {
                    ticket
                },
                ...presentedMs == null ? {} : {
                    presentedMs
                },
                ...dismissedMs == null ? {} : {
                    dismissedMs
                }
            };
            Lt(Ut);
        };
        if (O?.trace === n) {
            O.publish = ()=>f(spans.reduce((acc, span)=>Math.max(acc, C(span.startMs + span.durationMs)), R));
        } else {
            f(R);
        }
    };
    const Bt = ()=>{
        if (trace != null && _t(trace.root, M)) {
            trace.quiet.kick();
        } else {
            Z("quiet");
        }
    };
    const Ht = ()=>{
        if (trace?.root.kind !== "boot") {
            return;
        }
        const e = pt();
        if (e?.root.kind === "boot") {
            Q(Mt(e, e.root, "presented"));
        }
    };
    const bt = (root, n)=>{
        trace = {
            id: ct(),
            root,
            ticket: n,
            spans: [],
            measures: [],
            folded: 0,
            dropped,
            effectsByBoundary: new Map,
            quiet: root.kind === "boot" ? me : l.arm(Bt),
            cap: u.arm("trace", ()=>Z("cap")),
            presentedAtCommit: false,
            absorbed: false,
            absorbedInputs: 0,
            absorbedInput: null,
            dismissing: false,
            dismissedMs: null
        };
        dropped = 0;
    };
    const record = (e)=>{
        if (trace == null) {
            m.droppedMeasures += 1;
            return;
        }
        trace.measures.push({
            startMs: C(e.startMs),
            durationMs: C(e.durationMs),
            detail: e.detail
        });
        if (!trace.absorbed && !Te(e.detail)) {
            trace.quiet.kick();
        }
    };
    const Vt = (e)=>{
        if (!Re(e.entryType)) {
            return;
        }
        const detail = Ce[e.entryType](e);
        if (detail != null) {
            if (trace == null || C(e.startTime + e.duration) < trace.root.startMs) {
                m.droppedMeasures += 1;
                return;
            }
            record({
                startMs: e.startTime,
                durationMs: e.duration,
                detail
            });
        }
    };
    const et = ({ startMs, ...rest })=>{
        record({
            startMs,
            durationMs: clock.monotonicNow() - startMs,
            detail: {
                kind: "presented",
                ...rest
            }
        });
    };
    const jt = (e)=>{
        if (!ve()) {
            et(e);
            return;
        }
        const n = E.arm(()=>{
            q.delete(n);
            et(e);
            return "done";
        });
        q.set(n, e);
    };
    const nt = (e)=>{
        if (S) {
            return;
        }
        const n = {
            ...e.root,
            startMs: C(e.root.startMs)
        };
        const r = trace;
        if (r != null) {
            const { root } = r;
            if (root.kind === "boot") {
                return;
            }
            const c = Ie(root, n);
            if (c || n.startMs - root.startMs <= _.refineMs) {
                if (Nt(root, n)) {
                    if (!Me(root, n)) {
                        r.dismissing = false;
                        r.dismissedMs = null;
                    }
                    r.root = {
                        ...n,
                        startMs: Math.min(root.startMs, n.startMs)
                    };
                    r.ticket = e.ticket ?? r.ticket;
                }
                if (c) {
                    r.absorbed = false;
                }
                r.quiet.kick();
                return;
            }
            if (root.kind === "navigation" && n.kind === "interaction") {
                r.absorbed = true;
                const d = r.absorbedInput;
                if (d != null && n.startMs - d.startMs <= _.refineMs) {
                    if (Nt(d, n)) {
                        r.absorbedInput = {
                            ...n,
                            startMs: Math.min(d.startMs, n.startMs)
                        };
                    }
                } else {
                    r.absorbedInput = n;
                    r.absorbedInputs += 1;
                }
                return;
            }
            Z("superseded");
            if (S) {
                return;
            }
        }
        bt(n, e.ticket);
    };
    const kt = fe({
        onCommit: (e, n)=>{
            const r = clock.monotonicNow();
            m.commits += 1;
            J();
            if (trace == null || trace.absorbed && !_t(trace.root, M)) {
                if (trace == null) {
                    m.dropped += 1;
                    dropped += 1;
                } else {
                    m.absorbedCommits += 1;
                }
                X = trace != null;
                V.length = 0;
                j.clear();
                return;
            }
            X = false;
            const i = nextId();
            const c = w_1(e, {
                floorMs,
                fiberCap: _.fiberCap,
                parent: i,
                nextId
            });
            m.fibersVisited += c.fibersVisited;
            m.maxCommitFibers = Math.max(m.maxCommitFibers, c.fibersVisited);
            if (c.capped) {
                m.cappedCommits += 1;
            }
            const d = v(clock.monotonicNow());
            const U = c.spans.map((span_1)=>({
                    span: span_1,
                    interval: Y(span_1)
                }));
            const z = V.map((effect_1)=>({
                    effect: effect_1,
                    interval: Y({
                        startMs: effect_1.commitMs,
                        durationMs: effect_1.effectMs
                    })
                }));
            V.length = 0;
            let R = d;
            let I = d;
            let L = 0;
            for (const { span, interval } of U){
                R = Math.min(R, interval.start);
                I = Math.max(I, interval.end);
                if (span.parent === i) {
                    L += interval.end - interval.start;
                }
            }
            for (const { interval } of z){
                R = Math.min(R, interval.start);
                I = Math.max(I, interval.end);
                L += interval.end - interval.start;
            }
            for (const f of j.values()){
                const k = Y({
                    startMs: f.startMs,
                    durationMs: f.endMs - f.startMs
                });
                R = Math.min(R, k.start);
                I = Math.max(I, k.end);
            }
            if (R < v(trace.root.startMs)) {
                trace.root = {
                    ...trace.root,
                    startMs: h(R)
                };
            }
            if (trace.dismissing) {
                trace.dismissing = false;
                trace.dismissedMs = h(I - v(trace.root.startMs));
            }
            trace.spans.push({
                id: i,
                parent: null,
                startMs: h(R),
                durationMs: h(I - R),
                selfMs: h(Math.max(0, I - R - L)),
                detail: {
                    kind: "commit",
                    priority: Se(n)
                }
            });
            for (const { span, interval } of U){
                trace.spans.push(be(span, interval));
            }
            trace.folded += c.folded;
            trace.effectsByBoundary.clear();
            for (const { effect, interval } of z){
                trace.effectsByBoundary.set(effect.boundary, trace.spans.length);
                trace.spans.push({
                    id: nextId(),
                    parent: i,
                    startMs: h(interval.start),
                    durationMs: h(interval.end - interval.start),
                    selfMs: h(interval.end - interval.start),
                    detail: {
                        kind: "effects",
                        boundary: effect.boundary,
                        passiveMs: 0
                    }
                });
            }
            mt(trace, j, "layout", i);
            O = {
                trace,
                commit: i,
                drafts: new Map,
                publish: null
            };
            m.handlerMs += clock.monotonicNow() - r;
            if (trace.presentedAtCommit) {
                Ht();
            } else {
                trace.quiet.kick();
            }
        },
        onPostCommit: ()=>{
            J();
            if (trace?.absorbed === false) {
                trace.quiet.kick();
            }
        },
        onComponentEffect
    }, $);
    const ht = a.map((e)=>({
            event: e,
            listener: (r)=>{
                const target = e_1(r.target);
                nt({
                    root: {
                        kind: "interaction",
                        event: e,
                        startMs: r.timeStamp,
                        ...M == null ? {} : {
                            route: f(M)
                        },
                        ...target == null ? {} : {
                            target
                        }
                    },
                    ticket: null
                });
            }
        }));
    if (typeof document !== "undefined") {
        for (const { event, listener } of ht){
            document.addEventListener(event, listener, {
                capture: true,
                passive: true
            });
        }
    }
    const Et = [];
    if (typeof PerformanceObserver !== "undefined") {
        const e = PerformanceObserver.supportedEntryTypes;
        for (const n of qt){
            if (!e.includes(n)) {
                continue;
            }
            const r = new PerformanceObserver((i)=>{
                for (const c of i.getEntries()){
                    Vt(c);
                }
            });
            r.observe(ye(n));
            Et.push(r);
        }
    }
    const recorder = {
        now: ()=>clock.monotonicNow(),
        record
    };
    const attachMeasures = (e)=>{
        if (!(S || detached)) {
            it.push(e.attach(recorder));
        }
    };
    if (t.measures != null) {
        attachMeasures(t.measures);
    }
    const Tt = ()=>{
        if (!detached) {
            detached = true;
            kt.dispose();
            for (const e of it.splice(0)){
                e();
            }
            for (const e of Et){
                e.disconnect();
            }
            for (const e of q.keys()){
                e.dispose();
            }
            q.clear();
            V.length = 0;
            j.clear();
            O = null;
            x.clear();
        }
    };
    return {
        recorder,
        attachMeasures,
        disableSampling () {
            sampling = undefined;
        },
        setSinks (e) {
            if (!S) {
                t_sinks = e;
                ut();
            }
        },
        noteSelection () {
            nt({
                root: {
                    kind: "selection",
                    startMs: clock.monotonicNow()
                },
                ticket: null
            });
        },
        noteBoot (e) {
            if (S || detached || y === "recorded") {
                return;
            }
            const startMs = C(e.startMs);
            if (e.presentedMs == null) {
                if (y === "none" && trace == null) {
                    bt({
                        kind: "boot",
                        startMs
                    }, null);
                    y = "open";
                }
                return;
            }
            if (y === "none") {
                Q({
                    id: ct(),
                    startMs,
                    endMs: C(e.presentedMs),
                    closedBy: "presented",
                    spans: [],
                    measures: [],
                    folded: 0,
                    dropped: 0
                });
            } else if (trace?.root.kind === "boot") {
                trace.presentedAtCommit = true;
            }
            y = "recorded";
        },
        attachNavigation (e) {
            if (S || detached) {
                return;
            }
            b?.();
            let previous = e.getCanonicalSnapshot();
            M = previous;
            b = e.subscribe((r)=>{
                const next = e.getCanonicalSnapshot();
                M = next;
                const c = Ne({
                    previous,
                    next,
                    commitClass: _e(r),
                    startMs: clock.monotonicNow()
                });
                for (const d of c.roots){
                    nt(d);
                }
                if (!detached) {
                    for (const d of c.presents){
                        x.set(d.surface, d);
                    }
                }
                previous = next;
            });
        },
        noteBoundaryCommit (boundary, n) {
            if (!(S || detached)) {
                V.push({
                    boundary,
                    ...n
                });
                for (const [r, i] of x){
                    if (i.entrypointId === boundary) {
                        x.delete(r);
                        jt(i);
                    }
                }
            }
        },
        noteBoundaryPostCommit (e, n) {
            const r = O?.trace ?? (X ? null : trace);
            if (r == null) {
                return;
            }
            const i = r.effectsByBoundary.get(e);
            if (i == null) {
                return;
            }
            const c = r.spans[i];
            if (!(c == null || c.detail.kind !== "effects")) {
                r.spans[i] = {
                    ...c,
                    detail: {
                        ...c.detail,
                        passiveMs: C(n)
                    }
                };
                r.quiet.kick();
            }
        },
        noteBoundaryDismiss (e) {
            if (trace == null || trace.dismissedMs != null) {
                return;
            }
            const { root } = trace;
            root.kind !== "navigation" || root.action !== "close" || root.entrypointId === e && (trace.dismissing = true);
        },
        stats () {
            return {
                hookMode: kt.mode,
                detached,
                traces: [
                    ...K
                ],
                boot,
                queued: w.length + (N == null ? 0 : 1),
                rootsAfterCap: {
                    ...at
                },
                ...m,
                ...$
            };
        },
        dispose () {
            S = true;
            Tt();
            if (trace != null) {
                trace.quiet.dispose();
                trace.cap.dispose();
                trace = null;
            }
            b?.();
            b = null;
            if (typeof document !== "undefined") {
                for (const { event, listener } of ht){
                    document.removeEventListener(event, listener, {
                        capture: true
                    });
                }
            }
            t_sinks = [];
            w.length = 0;
            N = null;
        }
    };
}
const Pt = {
    maxTracesPerSession: 50
};
export function composeSessionRenderTracing({ host = globalThis, clock } = {}) {
    const a = ie(host);
    if (a === null) {
        return null;
    }
    return Fe({
        sinks: [],
        ...clock === undefined ? {} : {
            clock
        },
        sampling: {
            sampleRate: a.sampleRate,
            maxTraces: typeof Pt === "object" ? Pt.maxTracesPerSession : se
        }
    });
}
