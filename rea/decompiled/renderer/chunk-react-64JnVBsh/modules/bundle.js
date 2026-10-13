import { dc, dd, de, df, dg, dh, di as di_1, dj, dk, dl, dm, dn, dp, dq, dr as dr_1, dt, du, dv, dB, dy, ds as ds_1, dw, dz, dC, dA, dx } from "./index-ZYxf-aBb.js";
import { aT, aU, aV, aW, aX, aY, aZ, a_, a$, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba as ba_1, bb, bc, bd, be, r, bf, bg, bh, bi, bj, bk, bl, bm, bn, bo, bu, bv, bw, bp, by, bq, bt, bx, br as br_1, bs as bs_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "e1556eec-9d84-48e0-8c09-30454a682cb3";
            e._sentryDebugIdIdentifier = "sentry-dbid-e1556eec-9d84-48e0-8c09-30454a682cb3";
        }
    } catch (e) {}
})();
export function addUniqueItem(e, t) {
    if (e.indexOf(t) === -1) {
        e.push(t);
    }
}
export function removeItem(e, t) {
    const s = e.indexOf(t);
    if (s > -1) {
        e.splice(s, 1);
    }
}
export let invariant = ()=>{};
export const MotionGlobalConfig = {};
export const isNumericalString = (e)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
export const isZeroValueString = (e)=>/^0[^.\s]+$/u.test(e);
export function memo(e) {
    let t;
    return ()=>{
        if (t === undefined) {
            t = e();
        }
        return t;
    };
}
export const noop = (e)=>e;
export const pipe = (...e)=>e.reduce((acc, item)=>(i)=>item(acc(i)));
export const progress = (e, t, s)=>{
    const i = t - e;
    if (i) {
        return (s - e) / i;
    }
    return 1;
};
export class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(t) {
        addUniqueItem(this.subscriptions, t);
        return ()=>removeItem(this.subscriptions, t);
    }
    notify(t, s, i) {
        const length = this.subscriptions.length;
        if (length) {
            if (length === 1) {
                this.subscriptions[0](t, s, i);
            } else {
                for(let r = 0; r < length; r++){
                    const o = this.subscriptions[r];
                    if (o) {
                        o(t, s, i);
                    }
                }
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
export const secondsToMilliseconds = (e)=>e * 1000;
export const millisecondsToSeconds = (e)=>e / 1000;
export const velocityPerSecond = (e, t)=>{
    if (t) {
        return e * (1000 / t);
    }
    return 0;
};
const Qs = (e, t, s)=>(((1 - 3 * s + 3 * t) * e + (3 * s - 6 * t)) * e + 3 * t) * e;
const En = 1e-7;
const Rn = 12;
function Ln(e, t, s, i, n) {
    let r;
    let o;
    let a = 0;
    do {
        o = t + (s - t) / 2;
        r = Qs(o, i, n) - e;
        if (r > 0) {
            s = o;
        } else {
            t = o;
        }
    }while (Math.abs(r) > En && ++a < Rn)
    return o;
}
export function cubicBezier(e, t, s, i) {
    if (e === t && s === i) {
        return noop;
    }
    const n = (r)=>Ln(r, 0, 1, e, s);
    return (r)=>{
        if (r === 0 || r === 1) {
            return r;
        }
        return Qs(n(r), t, i);
    };
}
export const mirrorEasing = (e)=>(t)=>{
        if (t <= 0.5) {
            return e(2 * t) / 2;
        }
        return (2 - e(2 * (1 - t))) / 2;
    };
export const reverseEasing = (e)=>(t)=>1 - e(1 - t);
export const backOut = cubicBezier(0.33, 1.53, 0.69, 0.99);
export const backIn = reverseEasing(backOut);
export const backInOut = mirrorEasing(backIn);
export const anticipate = (e)=>{
    if (e >= 1) {
        return 1;
    }
    if ((e *= 2) < 1) {
        return 0.5 * backIn(e);
    }
    return 0.5 * (2 - 2 ** (-10 * (e - 1)));
};
export const circIn = (e)=>1 - Math.sin(Math.acos(e));
export const circOut = reverseEasing(circIn);
export const circInOut = mirrorEasing(circIn);
export const easeIn = cubicBezier(0.42, 0, 1, 1);
export const easeOut = cubicBezier(0, 0, 0.58, 1);
export const easeInOut = cubicBezier(0.42, 0, 0.58, 1);
export const isEasingArray = (e)=>Array.isArray(e) && typeof e[0] !== "number";
export const isBezierDefinition = (e)=>Array.isArray(e) && typeof e[0] === "number";
const In = {
    linear: noop,
    easeIn,
    easeInOut,
    easeOut,
    circIn,
    circInOut,
    circOut,
    backIn,
    backInOut,
    backOut,
    anticipate
};
const jn = (e)=>typeof e === "string";
export const easingDefinitionToFunction = (e)=>{
    if (isBezierDefinition(e)) {
        invariant(e.length === 4);
        const [t, s, i, n] = e;
        return cubicBezier(t, s, i, n);
    } else if (jn(e)) {
        return In[e];
    }
    return e;
};
const Tt = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender"
];
function On(e, t) {
    let s = new Set;
    let i = new Set;
    let n = false;
    let r = false;
    const o = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: false
    };
    function l(u) {
        if (o.has(u)) {
            c.schedule(u);
            e();
        }
        u(a);
    }
    const c = {
        schedule: (u, h = false, f = false)=>{
            const m = f && n ? s : i;
            if (h) {
                o.add(u);
            }
            if (!m.has(u)) {
                m.add(u);
            }
            return u;
        },
        cancel: (u)=>{
            i.delete(u);
            o.delete(u);
        },
        process: (u)=>{
            a = u;
            if (n) {
                r = true;
                return;
            }
            n = true;
            [s, i] = [
                i,
                s
            ];
            s.forEach(l);
            s.clear();
            n = false;
            if (r) {
                r = false;
                c.process(u);
            }
        }
    };
    return c;
}
const Un = 40;
export function createRenderBatcher(e, t) {
    let s = false;
    let i = true;
    const state_1 = {
        delta: 0,
        timestamp: 0,
        isProcessing: false
    };
    const r = ()=>s = true;
    const steps_1 = Tt.reduce((acc, item)=>{
        acc[item] = On(r);
        return acc;
    }, {});
    const { setup, read, resolveKeyframes, preUpdate, update, preRender, render, postRender } = steps_1;
    const v = ()=>{
        const g = MotionGlobalConfig.useManualTiming ? state_1.timestamp : performance.now();
        s = false;
        if (!MotionGlobalConfig.useManualTiming) {
            state_1.delta = i ? 1000 / 60 : Math.max(Math.min(g - state_1.timestamp, Un), 1);
        }
        state_1.timestamp = g;
        state_1.isProcessing = true;
        setup.process(state_1);
        read.process(state_1);
        resolveKeyframes.process(state_1);
        preUpdate.process(state_1);
        update.process(state_1);
        preRender.process(state_1);
        render.process(state_1);
        postRender.process(state_1);
        state_1.isProcessing = false;
        if (s && t) {
            i = false;
            e(v);
        }
    };
    const y = ()=>{
        s = true;
        i = true;
        if (!state_1.isProcessing) {
            e(v);
        }
    };
    return {
        schedule: Tt.reduce((acc, item)=>{
            const T = steps_1[item];
            acc[item] = (V, w = false, P = false)=>{
                if (!s) {
                    y();
                }
                return T.schedule(V, w, P);
            };
            return acc;
        }, {}),
        cancel: (g)=>{
            for(let A = 0; A < Tt.length; A++){
                steps_1[Tt[A]].cancel(g);
            }
        },
        state: state_1,
        steps: steps_1
    };
}
const { schedule, cancel, state, steps } = createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);
let Pt;
function Nn() {
    Pt = undefined;
}
export const time = {
    now: ()=>{
        if (Pt === undefined) {
            time.set(state.isProcessing || MotionGlobalConfig.useManualTiming ? state.timestamp : performance.now());
        }
        return Pt;
    },
    set: (e)=>{
        Pt = e;
        queueMicrotask(Nn);
    }
};
function kt(e, t, s) {
    if (s < 0) {
        s += 1;
    }
    if (s > 1) {
        s -= 1;
    }
    if (s < 1 / 6) {
        return e + (t - e) * 6 * s;
    }
    if (s < 1 / 2) {
        return t;
    }
    if (s < 2 / 3) {
        return e + (t - e) * (2 / 3 - s) * 6;
    }
    return e;
}
export function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let n = 0;
    let r = 0;
    let o = 0;
    if (!saturation) {
        o = lightness;
        r = lightness;
        n = lightness;
    } else {
        const a = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
        const l = 2 * lightness - a;
        n = kt(l, a, hue + 1 / 3);
        r = kt(l, a, hue);
        o = kt(l, a, hue - 1 / 3);
    }
    return {
        red: Math.round(n * 255),
        green: Math.round(r * 255),
        blue: Math.round(o * 255),
        alpha
    };
}
export function mixImmediate(e, t) {
    return (s)=>{
        if (s > 0) {
            return t;
        }
        return e;
    };
}
export const mixLinearColor = (e, t, s)=>{
    const i = e * e;
    const n = s * (t * t - i) + i;
    if (n < 0) {
        return 0;
    }
    return Math.sqrt(n);
};
const Gn = [
    dd,
    dc,
    de
];
const Wn = (e)=>Gn.find((t)=>t.test(e));
function je(e) {
    const t = Wn(e);
    if (!t) {
        return false;
    }
    let s = t.parse(e);
    if (t === de) {
        s = hslaToRgba(s);
    }
    return s;
}
export const mixColor = (e, t)=>{
    const s = je(e);
    const i = je(t);
    if (!s || !i) {
        return mixImmediate(e, t);
    }
    const n = {
        ...s
    };
    return (r)=>{
        n.red = mixLinearColor(s.red, i.red, r);
        n.green = mixLinearColor(s.green, i.green, r);
        n.blue = mixLinearColor(s.blue, i.blue, r);
        n.alpha = aT(s.alpha, i.alpha, r);
        return dc.transform(n);
    };
};
export const invisibleValues = new Set([
    "none",
    "hidden"
]);
export function mixVisibility(e, t) {
    if (invisibleValues.has(e)) {
        return (s)=>{
            if (s <= 0) {
                return e;
            }
            return t;
        };
    }
    return (s)=>{
        if (s >= 1) {
            return t;
        }
        return e;
    };
}
function $n(e, t) {
    return (s)=>aT(e, t, s);
}
export function getMixer(e) {
    if (typeof e === "number") {
        return $n;
    }
    if (typeof e === "string") {
        if (aU(e)) {
            return mixImmediate;
        }
        if (df.test(e)) {
            return mixColor;
        }
        return mixComplex;
    }
    if (Array.isArray(e)) {
        return mixArray;
    }
    if (typeof e === "object") {
        if (df.test(e)) {
            return mixColor;
        }
        return mixObject;
    }
    return mixImmediate;
}
export function mixArray(e, t) {
    const s = [
        ...e
    ];
    const s_length = s.length;
    const n = e.map((r, o)=>getMixer(r)(r, t[o]));
    return (r)=>{
        for(let o = 0; o < s_length; o++){
            s[o] = n[o](r);
        }
        return s;
    };
}
export function mixObject(e, t) {
    const s = {
        ...e,
        ...t
    };
    const i = {};
    for(const n in s){
        if (e[n] !== undefined && t[n] !== undefined) {
            i[n] = getMixer(e[n])(e[n], t[n]);
        }
    }
    return (n)=>{
        for(const r in i){
            s[r] = i[r](n);
        }
        return s;
    };
}
function Hn(e, t) {
    const s = [];
    const i = {
        color: 0,
        var: 0,
        number: 0
    };
    for(let n = 0; n < t.values.length; n++){
        const r = t.types[n];
        const o = e.indexes[r][i[r]];
        const a = e.values[o] ?? 0;
        s[n] = a;
        i[r]++;
    }
    return s;
}
export const mixComplex = (e, t)=>{
    const s = dg.createTransformer(t);
    const i = dh(e);
    const n = dh(t);
    if (i.indexes.var.length === n.indexes.var.length && i.indexes.color.length === n.indexes.color.length && i.indexes.number.length >= n.indexes.number.length) {
        if (invisibleValues.has(e) && !n.values.length || invisibleValues.has(t) && !i.values.length) {
            return mixVisibility(e, t);
        }
        return pipe(mixArray(Hn(i, n), n.values), s);
    }
    return mixImmediate(e, t);
};
export function mix(e, t, s) {
    if (typeof e === "number" && typeof t === "number" && typeof s === "number") {
        return aT(e, t, s);
    }
    return getMixer(e)(e, t);
}
const Yn = (e)=>{
    const t = ({ timestamp })=>e(timestamp);
    return {
        start: (s = true)=>schedule.update(t, s),
        stop: ()=>cancel(t),
        now: ()=>{
            if (state.isProcessing) {
                return state.timestamp;
            }
            return time.now();
        }
    };
};
export const generateLinearEasing = (e, t, s = 10)=>{
    let i = "";
    const n = Math.max(Math.round(t / s), 2);
    for(let r = 0; r < n; r++){
        i += `${Math.round(e(r / (n - 1)) * 10000) / 10000}, `;
    }
    return `linear(${i.substring(0, i.length - 2)})`;
};
export const maxGeneratorDuration = 20000;
export function calcGeneratorDuration(e) {
    let t = 0;
    const s = 50;
    let i = e.next(t);
    while(!i.done && t < maxGeneratorDuration){
        t += s;
        i = e.next(t);
    }
    if (t >= maxGeneratorDuration) {
        return Infinity;
    }
    return t;
}
export function createGeneratorEasing(e, t = 100, s) {
    const i = s({
        ...e,
        keyframes: [
            0,
            t
        ]
    });
    const n = Math.min(calcGeneratorDuration(i), maxGeneratorDuration);
    return {
        type: "keyframes",
        ease: (r)=>i.next(n * r).value / t,
        duration: millisecondsToSeconds(n)
    };
}
const Zn = 5;
function di(e, t, s) {
    const i = Math.max(t - Zn, 0);
    return velocityPerSecond(s - e(i), t - i);
}
const b = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: {
        granular: 0.01,
        default: 2
    },
    restDelta: {
        granular: 0.005,
        default: 0.5
    },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1
};
const Bt = 0.001;
function Jn({ duration = b.duration, bounce = b.bounce, velocity = b.velocity, mass = b.mass }) {
    let n;
    let r;
    let o = 1 - bounce;
    o = aV(b.minDamping, b.maxDamping, o);
    duration = aV(b.minDuration, b.maxDuration, millisecondsToSeconds(duration));
    if (o < 1) {
        n = (c)=>{
            const u = c * o;
            const h = u * duration;
            const f = u - velocity;
            const d = Ht(c, o);
            const m = Math.exp(-h);
            return Bt - f / d * m;
        };
        r = (c)=>{
            const h = c * o * duration;
            const f = h * velocity + velocity;
            const d = o ** 2 * c ** 2 * duration;
            const m = Math.exp(-h);
            const v = Ht(c ** 2, o);
            return (-n(c) + Bt > 0 ? -1 : 1) * ((f - d) * m) / v;
        };
    } else {
        n = (c)=>{
            const u = Math.exp(-c * duration);
            const h = (c - velocity) * duration + 1;
            return -Bt + u * h;
        };
        r = (c)=>{
            const u = Math.exp(-c * duration);
            const h = (velocity - c) * (duration * duration);
            return u * h;
        };
    }
    const a = 5 / duration;
    const l = to(n, r, a);
    duration = secondsToMilliseconds(duration);
    if (isNaN(l)) {
        return {
            stiffness: b.stiffness,
            damping: b.damping,
            duration
        };
    }
    {
        const c = l ** 2 * mass;
        return {
            stiffness: c,
            damping: o * 2 * Math.sqrt(mass * c),
            duration
        };
    }
}
const Qn = 12;
function to(e, t, s) {
    let i = s;
    for(let n = 1; n < Qn; n++){
        i = i - e(i) / t(i);
    }
    return i;
}
function Ht(e, t) {
    return e * Math.sqrt(1 - t * t);
}
const eo = [
    "duration",
    "bounce"
];
const so = [
    "stiffness",
    "damping",
    "mass"
];
function Ue(e, t) {
    return t.some((s)=>e[s] !== undefined);
}
function io(e) {
    let t = {
        velocity: b.velocity,
        stiffness: b.stiffness,
        damping: b.damping,
        mass: b.mass,
        isResolvedFromDuration: false,
        ...e
    };
    if (!Ue(e, so) && Ue(e, eo)) {
        if (e.visualDuration) {
            const s = e.visualDuration;
            const i = 2 * Math.PI / (s * 1.2);
            const n = i * i;
            const damping = 2 * aV(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(n);
            t = {
                ...t,
                mass: b.mass,
                stiffness: n,
                damping
            };
        } else {
            const s = Jn(e);
            t = {
                ...t,
                ...s,
                mass: b.mass
            };
            t.isResolvedFromDuration = true;
        }
    }
    return t;
}
export function spring(visualDuration = b.visualDuration, bounce = b.bounce) {
    const s = typeof visualDuration !== "object" ? {
        visualDuration,
        keyframes: [
            0,
            1
        ],
        bounce
    } : visualDuration;
    let { restSpeed, restDelta } = s;
    const r = s.keyframes[0];
    const o = s.keyframes[s.keyframes.length - 1];
    const a = {
        done: false,
        value: r
    };
    const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = io({
        ...s,
        velocity: -millisecondsToSeconds(s.velocity || 0)
    });
    const m = velocity || 0;
    const v = damping / (2 * Math.sqrt(stiffness * mass));
    const y = o - r;
    const p = millisecondsToSeconds(Math.sqrt(stiffness / mass));
    const x = Math.abs(y) < 5;
    if (!restSpeed) {
        restSpeed = x ? b.restSpeed.granular : b.restSpeed.default;
    }
    if (!restDelta) {
        restDelta = x ? b.restDelta.granular : b.restDelta.default;
    }
    let g;
    if (v < 1) {
        const T = Ht(p, v);
        g = (V)=>{
            const w = Math.exp(-v * p * V);
            return o - w * ((m + v * p * y) / T * Math.sin(T * V) + y * Math.cos(T * V));
        };
    } else if (v === 1) {
        g = (T)=>o - Math.exp(-p * T) * (y + (m + p * y) * T);
    } else {
        const T = p * Math.sqrt(v * v - 1);
        g = (V)=>{
            const w = Math.exp(-v * p * V);
            const P = Math.min(T * V, 300);
            return o - w * ((m + v * p * y) * Math.sinh(P) + T * y * Math.cosh(P)) / T;
        };
    }
    const A = {
        calculatedDuration: isResolvedFromDuration && duration || null,
        next: (T)=>{
            const V = g(T);
            if (isResolvedFromDuration) {
                a.done = T >= duration;
            } else {
                let w = T === 0 ? m : 0;
                if (v < 1) {
                    w = T === 0 ? secondsToMilliseconds(m) : di(g, T, V);
                }
                const P = Math.abs(w) <= restSpeed;
                const L = Math.abs(o - V) <= restDelta;
                a.done = P && L;
            }
            a.value = a.done ? o : V;
            return a;
        },
        toString: ()=>{
            const T = Math.min(calcGeneratorDuration(A), maxGeneratorDuration);
            const V = generateLinearEasing((w)=>A.next(T * w).value, T, 30);
            return `${T}ms ${V}`;
        },
        toTransition: ()=>{}
    };
    return A;
}
spring.applyToOptions = (e)=>{
    const t = createGeneratorEasing(e, 100, spring);
    e.ease = t.ease;
    e.duration = secondsToMilliseconds(t.duration);
    e.type = "keyframes";
    return e;
};
export function inertia({ keyframes, velocity = 0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
    const h = keyframes[0];
    const f = {
        done: false,
        value: h
    };
    const d = (P)=>min !== undefined && P < min || max !== undefined && P > max;
    const m = (P)=>{
        if (min === undefined) {
            return max;
        }
        if (max === undefined || Math.abs(min - P) < Math.abs(max - P)) {
            return min;
        }
        return max;
    };
    let v = power * velocity;
    const y = h + v;
    const p = modifyTarget === undefined ? y : modifyTarget(y);
    if (p !== y) {
        v = p - h;
    }
    const x = (P)=>-v * Math.exp(-P / timeConstant);
    const g = (P)=>p + x(P);
    const A = (P)=>{
        const L = x(P);
        const B = g(P);
        f.done = Math.abs(L) <= restDelta;
        f.value = f.done ? p : B;
    };
    let T;
    let V;
    const w = (P)=>{
        if (d(f.value)) {
            T = P;
            V = spring({
                keyframes: [
                    f.value,
                    m(f.value)
                ],
                velocity: di(g, P, f.value),
                damping: bounceDamping,
                stiffness: bounceStiffness,
                restDelta,
                restSpeed
            });
        }
    };
    w(0);
    return {
        calculatedDuration: null,
        next: (P)=>{
            let L = false;
            if (!V && T === undefined) {
                L = true;
                A(P);
                w(P);
            }
            if (T !== undefined && P >= T) {
                return V.next(P - T);
            }
            if (!L) {
                A(P);
            }
            return f;
        }
    };
}
function no(e, ease, mixer) {
    const i = [];
    const n = mixer || MotionGlobalConfig.mix || mix;
    const r = e.length - 1;
    for(let o = 0; o < r; o++){
        let a = n(e[o], e[o + 1]);
        if (ease) {
            const l = Array.isArray(ease) ? ease[o] || noop : ease;
            a = pipe(l, a);
        }
        i.push(a);
    }
    return i;
}
export function interpolate(e, t, { clamp = true, ease, mixer } = {}) {
    const e_length = e.length;
    invariant(e_length === t.length);
    if (e_length === 1) {
        return ()=>t[0];
    }
    if (e_length === 2 && t[0] === t[1]) {
        return ()=>t[1];
    }
    const o = e[0] === e[1];
    if (e[0] > e[e_length - 1]) {
        e = [
            ...e
        ].reverse();
        t = [
            ...t
        ].reverse();
    }
    const a = no(t, ease, mixer);
    const a_length = a.length;
    const c = (u)=>{
        if (o && u < e[0]) {
            return t[0];
        }
        let h = 0;
        if (a_length > 1) {
            for(; h < e.length - 2 && !(u < e[h + 1]); h++);
        }
        const f = progress(e[h], e[h + 1], u);
        return a[h](f);
    };
    if (clamp) {
        return (u)=>c(aV(e[0], e[e_length - 1], u));
    }
    return c;
}
export function fillOffset(e, t) {
    const s = e[e.length - 1];
    for(let i = 1; i <= t; i++){
        const n = progress(0, t, i);
        e.push(aT(s, 1, n));
    }
}
export function defaultOffset(e) {
    const t = [
        0
    ];
    fillOffset(t, e.length - 1);
    return t;
}
export function convertOffsetToTimes(e, t) {
    return e.map((s)=>s * t);
}
export function defaultEasing(e, t) {
    return e.map(()=>t || easeInOut).splice(0, e.length - 1);
}
export function keyframes({ duration = 300, keyframes, times, ease = "easeInOut" }) {
    const n = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
    const r = {
        done: false,
        value: keyframes[0]
    };
    const o = convertOffsetToTimes(times && times.length === keyframes.length ? times : defaultOffset(keyframes), duration);
    const a = interpolate(o, keyframes, {
        ease: Array.isArray(n) ? n : defaultEasing(keyframes, n)
    });
    return {
        calculatedDuration: duration,
        next: (l)=>{
            r.value = a(l);
            r.done = l >= duration;
            return r;
        }
    };
}
const co = (e)=>e !== null;
function Ae(keyframes, { repeat, repeatType = "loop" }, finalKeyframe, n = 1) {
    const r = keyframes.filter(co);
    const a = n < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : r.length - 1;
    if (!a || finalKeyframe === undefined) {
        return r[a];
    }
    return finalKeyframe;
}
const ho = {
    decay: inertia,
    inertia,
    tween: keyframes,
    keyframes,
    spring
};
function pi(e) {
    if (typeof e.type === "string") {
        e.type = ho[e.type];
    }
}
class Ve {
    constructor(){
        this.updateFinished();
    }
    get finished() {
        return this._finished;
    }
    updateFinished() {
        this._finished = new Promise((resolve)=>{
            this.resolve = resolve;
        });
    }
    notifyFinished() {
        this.resolve();
    }
    then(t, s) {
        return this.finished.then(t, s);
    }
}
const fo = (e)=>e / 100;
export class JSAnimation extends Ve {
    constructor(t){
        super();
        this.state = "idle";
        this.startTime = null;
        this.isStopped = false;
        this.currentTime = 0;
        this.holdTime = null;
        this.playbackSpeed = 1;
        this.stop = ()=>{
            const { motionValue } = this.options;
            if (motionValue && motionValue.updatedAt !== time.now()) {
                this.tick(time.now());
            }
            this.isStopped = true;
            if (this.state !== "idle") {
                this.teardown();
                this.options.onStop?.();
            }
        };
        this.options = t;
        this.initAnimation();
        this.play();
        if (t.autoplay === false) {
            this.pause();
        }
    }
    initAnimation() {
        const { options } = this;
        pi(options);
        const { type = keyframes, repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options;
        let { keyframes: keyframes_1 } = options;
        const l = type || keyframes;
        if (l !== keyframes && typeof keyframes_1[0] !== "number") {
            this.mixKeyframes = pipe(fo, mix(keyframes_1[0], keyframes_1[1]));
            keyframes_1 = [
                0,
                100
            ];
        }
        const c = l({
            ...options,
            keyframes: keyframes_1
        });
        if (repeatType === "mirror") {
            this.mirroredGenerator = l({
                ...options,
                keyframes: [
                    ...keyframes_1
                ].reverse(),
                velocity: -velocity
            });
        }
        if (c.calculatedDuration === null) {
            c.calculatedDuration = calcGeneratorDuration(c);
        }
        const { calculatedDuration } = c;
        this.calculatedDuration = calculatedDuration;
        this.resolvedDuration = calculatedDuration + repeatDelay;
        this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
        this.generator = c;
    }
    updateTime(t) {
        const s = Math.round(t - this.startTime) * this.playbackSpeed;
        if (this.holdTime !== null) {
            this.currentTime = this.holdTime;
        } else {
            this.currentTime = s;
        }
    }
    tick(t, s = false) {
        const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration, calculatedDuration } = this;
        if (this.startTime === null) {
            return generator.next(0);
        }
        const { delay = 0, keyframes, repeat, repeatType, repeatDelay, type, onUpdate, finalKeyframe } = this.options;
        if (this.speed > 0) {
            this.startTime = Math.min(this.startTime, t);
        } else if (this.speed < 0) {
            this.startTime = Math.min(t - totalDuration / this.speed, this.startTime);
        }
        if (s) {
            this.currentTime = t;
        } else {
            this.updateTime(t);
        }
        const p = this.currentTime - delay * (this.playbackSpeed >= 0 ? 1 : -1);
        const x = this.playbackSpeed >= 0 ? p < 0 : p > totalDuration;
        this.currentTime = Math.max(p, 0);
        if (this.state === "finished" && this.holdTime === null) {
            this.currentTime = totalDuration;
        }
        let currentTime = this.currentTime;
        let A = generator;
        if (repeat) {
            const P = Math.min(this.currentTime, totalDuration) / resolvedDuration;
            let L = Math.floor(P);
            let B = P % 1;
            if (!B && P >= 1) {
                B = 1;
            }
            B === 1 && L--;
            L = Math.min(L, repeat + 1);
            L % 2 && (repeatType === "reverse" ? (B = 1 - B, repeatDelay && (B -= repeatDelay / resolvedDuration)) : repeatType === "mirror" && (A = mirroredGenerator));
            currentTime = aV(0, 1, B) * resolvedDuration;
        }
        const T = x ? {
            done: false,
            value: keyframes[0]
        } : A.next(currentTime);
        if (mixKeyframes) {
            T.value = mixKeyframes(T.value);
        }
        let { done } = T;
        if (!x && calculatedDuration !== null) {
            done = this.playbackSpeed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
        }
        const w = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
        if (w && type !== inertia) {
            T.value = Ae(keyframes, this.options, finalKeyframe, this.speed);
        }
        if (onUpdate) {
            onUpdate(T.value);
        }
        if (w) {
            this.finish();
        }
        return T;
    }
    then(t, s) {
        return this.finished.then(t, s);
    }
    get duration() {
        return millisecondsToSeconds(this.calculatedDuration);
    }
    get iterationDuration() {
        const { delay = 0 } = this.options || {};
        return this.duration + millisecondsToSeconds(delay);
    }
    get time() {
        return millisecondsToSeconds(this.currentTime);
    }
    set time(t) {
        t = secondsToMilliseconds(t);
        this.currentTime = t;
        if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) {
            this.holdTime = t;
        } else if (this.driver) {
            this.startTime = this.driver.now() - t / this.playbackSpeed;
        }
        this.driver?.start(false);
    }
    get speed() {
        return this.playbackSpeed;
    }
    set speed(t) {
        this.updateTime(time.now());
        const s = this.playbackSpeed !== t;
        this.playbackSpeed = t;
        if (s) {
            this.time = millisecondsToSeconds(this.currentTime);
        }
    }
    play() {
        if (this.isStopped) {
            return;
        }
        const { driver = Yn, startTime } = this.options;
        if (!this.driver) {
            this.driver = driver((n)=>this.tick(n));
        }
        this.options.onPlay?.();
        const i = this.driver.now();
        if (this.state === "finished") {
            this.updateFinished();
            this.startTime = i;
        } else if (this.holdTime !== null) {
            this.startTime = i - this.holdTime;
        } else if (!this.startTime) {
            this.startTime = startTime ?? i;
        }
        if (this.state === "finished" && this.speed < 0) {
            this.startTime += this.calculatedDuration;
        }
        this.holdTime = null;
        this.state = "running";
        this.driver.start();
    }
    pause() {
        this.state = "paused";
        this.updateTime(time.now());
        this.holdTime = this.currentTime;
    }
    complete() {
        if (this.state !== "running") {
            this.play();
        }
        this.state = "finished";
        this.holdTime = null;
    }
    finish() {
        this.notifyFinished();
        this.teardown();
        this.state = "finished";
        this.options.onComplete?.();
    }
    cancel() {
        this.holdTime = null;
        this.startTime = 0;
        this.tick(0);
        this.teardown();
        this.options.onCancel?.();
    }
    teardown() {
        this.state = "idle";
        this.stopDriver();
        this.startTime = this.holdTime = null;
    }
    stopDriver() {
        if (this.driver) {
            this.driver.stop();
            this.driver = undefined;
        }
    }
    sample(t) {
        this.startTime = 0;
        return this.tick(t, true);
    }
    attachTimeline(t) {
        if (this.options.allowFlatten) {
            this.options.type = "keyframes";
            this.options.ease = "linear";
            this.initAnimation();
        }
        this.driver?.stop();
        return t.observe(this);
    }
}
export function fillWildcards(e) {
    for(let t = 1; t < e.length; t++){
        e[t] ?? (e[t] = e[t - 1]);
    }
}
const q = (e)=>e * 180 / Math.PI;
const Yt = (e)=>{
    const t = q(Math.atan2(e[1], e[0]));
    return qt(t);
};
const mo = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e)=>(Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Yt,
    rotateZ: Yt,
    skewX: (e)=>q(Math.atan(e[1])),
    skewY: (e)=>q(Math.atan(e[2])),
    skew: (e)=>(Math.abs(e[1]) + Math.abs(e[2])) / 2
};
const qt = (e)=>{
    e = e % 360;
    if (e < 0) {
        e += 360;
    }
    return e;
};
const Ne = Yt;
const scaleX = (e)=>Math.sqrt(e[0] * e[0] + e[1] * e[1]);
const scaleY = (e)=>Math.sqrt(e[4] * e[4] + e[5] * e[5]);
const go = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX,
    scaleY,
    scale: (e)=>(scaleX(e) + scaleY(e)) / 2,
    rotateX: (e)=>qt(q(Math.atan2(e[6], e[5]))),
    rotateY: (e)=>qt(q(Math.atan2(-e[2], e[0]))),
    rotateZ: Ne,
    rotate: Ne,
    skewX: (e)=>q(Math.atan(e[4])),
    skewY: (e)=>q(Math.atan(e[1])),
    skew: (e)=>(Math.abs(e[1]) + Math.abs(e[4])) / 2
};
export function defaultTransformValue(e) {
    if (e.includes("scale")) {
        return 1;
    }
    return 0;
}
export function parseValueFromTransform(e, t) {
    if (!e || e === "none") {
        return defaultTransformValue(t);
    }
    const s = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let i;
    let n;
    if (s) {
        i = go;
        n = s;
    } else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        i = mo;
        n = a;
    }
    if (!n) {
        return defaultTransformValue(t);
    }
    const r = i[t];
    const o = n[1].split(",").map(vo);
    if (typeof r === "function") {
        return r(o);
    }
    return o[r];
}
export const readTransformValue = (e, t)=>{
    const { transform = "none" } = getComputedStyle(e);
    return parseValueFromTransform(transform, t);
};
function vo(e) {
    return parseFloat(e.trim());
}
const We = (e)=>e === di_1 || e === aW;
const To = new Set([
    "x",
    "y",
    "z"
]);
const xo = aX.filter((e)=>!To.has(e));
function Po(e) {
    const t = [];
    xo.forEach((s)=>{
        const i = e.getValue(s);
        if (i !== undefined) {
            t.push([
                s,
                i.get()
            ]);
            i.set(s.startsWith("scale") ? 1 : 0);
        }
    });
    return t;
}
const Z = {
    width: ({ x }, { paddingLeft = "0", paddingRight = "0" })=>x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
    height: ({ y }, { paddingTop = "0", paddingBottom = "0" })=>y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
    top: (e, { top })=>parseFloat(top),
    left: (e, { left })=>parseFloat(left),
    bottom: ({ y }, { top })=>parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left })=>parseFloat(left) + (x.max - x.min),
    x: (e, { transform })=>parseValueFromTransform(transform, "x"),
    y: (e, { transform })=>parseValueFromTransform(transform, "y")
};
Z.translateX = Z.x;
Z.translateY = Z.y;
const J = new Set;
let Qt = false;
let te = false;
let ee = false;
function mi() {
    if (te) {
        const e = Array.from(J).filter((i)=>i.needsMeasurement);
        const t = new Set(e.map((i)=>i.element));
        const s = new Map;
        t.forEach((i)=>{
            const n = Po(i);
            if (n.length) {
                s.set(i, n);
                i.render();
            }
        });
        e.forEach((i)=>i.measureInitialState());
        t.forEach((i)=>{
            i.render();
            const n = s.get(i);
            if (n) {
                n.forEach(([r, o])=>{
                    i.getValue(r)?.set(o);
                });
            }
        });
        e.forEach((i)=>i.measureEndState());
        e.forEach((i)=>{
            if (i.suspendedScrollY !== undefined) {
                window.scrollTo(0, i.suspendedScrollY);
            }
        });
    }
    te = false;
    Qt = false;
    J.forEach((e)=>e.complete(ee));
    J.clear();
}
function gi() {
    J.forEach((e)=>{
        e.readKeyframes();
        if (e.needsMeasurement) {
            te = true;
        }
    });
}
export function flushKeyframeResolvers() {
    ee = true;
    gi();
    mi();
    ee = false;
}
export class KeyframeResolver {
    constructor(t, s, i, n, r, o = false){
        this.state = "pending";
        this.isAsync = false;
        this.needsMeasurement = false;
        this.unresolvedKeyframes = [
            ...t
        ];
        this.onComplete = s;
        this.name = i;
        this.motionValue = n;
        this.element = r;
        this.isAsync = o;
    }
    scheduleResolve() {
        this.state = "scheduled";
        if (this.isAsync) {
            J.add(this);
            if (!Qt) {
                Qt = true;
                schedule.read(gi);
                schedule.resolveKeyframes(mi);
            }
        } else {
            this.readKeyframes();
            this.complete();
        }
    }
    readKeyframes() {
        const { unresolvedKeyframes, name, element, motionValue } = this;
        if (unresolvedKeyframes[0] === null) {
            const r = motionValue?.get();
            const o = unresolvedKeyframes[unresolvedKeyframes.length - 1];
            if (r !== undefined) {
                unresolvedKeyframes[0] = r;
            } else if (element && name) {
                const a = element.readValue(name, o);
                if (a != null) {
                    unresolvedKeyframes[0] = a;
                }
            }
            if (unresolvedKeyframes[0] === undefined) {
                unresolvedKeyframes[0] = o;
            }
            if (motionValue && r === undefined) {
                motionValue.set(unresolvedKeyframes[0]);
            }
        }
        fillWildcards(unresolvedKeyframes);
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t = false) {
        this.state = "complete";
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t);
        J.delete(this);
    }
    cancel() {
        if (this.state === "scheduled") {
            J.delete(this);
            this.state = "pending";
        }
    }
    resume() {
        if (this.state === "pending") {
            this.scheduleResolve();
        }
    }
}
const Vo = (e)=>e.startsWith("--");
export function setStyle(e, t, s) {
    if (Vo(t)) {
        e.style.setProperty(t, s);
    } else {
        e.style[t] = s;
    }
}
export const supportsScrollTimeline = memo(()=>window.ScrollTimeline !== undefined);
export const supportsFlags = {};
function wo(e, t) {
    const s = memo(e);
    return ()=>supportsFlags[t] ?? s();
}
export const supportsLinearEasing = wo(()=>{
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        });
    } catch  {
        return false;
    }
    return true;
}, "linearEasing");
export const cubicBezierAsString = ([e, t, s, i])=>`cubic-bezier(${e}, ${t}, ${s}, ${i})`;
export const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: cubicBezierAsString([
        0,
        0.65,
        0.55,
        1
    ]),
    circOut: cubicBezierAsString([
        0.55,
        0,
        1,
        0.45
    ]),
    backIn: cubicBezierAsString([
        0.31,
        0.01,
        0.66,
        -0.59
    ]),
    backOut: cubicBezierAsString([
        0.33,
        1.53,
        0.69,
        0.99
    ])
};
export function mapEasingToNativeEasing(e, t) {
    if (e) {
        if (typeof e === "function") {
            if (supportsLinearEasing()) {
                return generateLinearEasing(e, t);
            }
            return "ease-out";
        }
        if (isBezierDefinition(e)) {
            return cubicBezierAsString(e);
        }
        if (Array.isArray(e)) {
            return e.map((s)=>mapEasingToNativeEasing(s, t) || supportedWaapiEasing.easeOut);
        }
        return supportedWaapiEasing[e];
    }
}
export function startWaapiAnimation(e, t, s, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease = "easeOut", times } = {}, c = undefined) {
    const u = {
        [t]: s
    };
    if (times) {
        u.offset = times;
    }
    const h = mapEasingToNativeEasing(ease, duration);
    if (Array.isArray(h)) {
        u.easing = h;
    }
    const f = {
        delay,
        duration,
        easing: Array.isArray(h) ? "linear" : h,
        fill: "both",
        iterations: repeat + 1,
        direction: repeatType === "reverse" ? "alternate" : "normal"
    };
    if (c) {
        f.pseudoElement = c;
    }
    return e.animate(u, f);
}
export function isGenerator(e) {
    return typeof e === "function" && "applyToOptions" in e;
}
export function applyGeneratorOptions({ type, ...rest }) {
    if (isGenerator(type) && supportsLinearEasing()) {
        return type.applyToOptions(rest);
    }
    rest.duration ??= 300;
    rest.ease ??= "easeOut";
    return rest;
}
export class NativeAnimation extends Ve {
    constructor(t){
        super();
        this.finishedTime = null;
        this.isStopped = false;
        if (!t) {
            return;
        }
        const { element, name, keyframes, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = t;
        this.isPseudoElement = !!pseudoElement;
        this.allowFlatten = allowFlatten;
        this.options = t;
        invariant(typeof t.type !== "string");
        const c = applyGeneratorOptions(t);
        this.animation = startWaapiAnimation(element, name, keyframes, c, pseudoElement);
        if (c.autoplay === false) {
            this.animation.pause();
        }
        this.animation.onfinish = ()=>{
            this.finishedTime = this.time;
            if (!pseudoElement) {
                const u = Ae(keyframes, this.options, finalKeyframe, this.speed);
                if (this.updateMotionValue) {
                    this.updateMotionValue(u);
                } else {
                    setStyle(element, name, u);
                }
                this.animation.cancel();
            }
            onComplete?.();
            this.notifyFinished();
        };
    }
    play() {
        if (!this.isStopped) {
            this.animation.play();
            if (this.state === "finished") {
                this.updateFinished();
            }
        }
    }
    pause() {
        this.animation.pause();
    }
    complete() {
        this.animation.finish?.();
    }
    cancel() {
        try {
            this.animation.cancel();
        } catch  {}
    }
    stop() {
        if (this.isStopped) {
            return;
        }
        this.isStopped = true;
        const { state } = this;
        state === "idle" || state === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
    }
    commitStyles() {
        this.isPseudoElement || this.animation.commitStyles?.();
    }
    get duration() {
        const t = this.animation.effect?.getComputedTiming?.().duration || 0;
        return millisecondsToSeconds(Number(t));
    }
    get iterationDuration() {
        const { delay = 0 } = this.options || {};
        return this.duration + millisecondsToSeconds(delay);
    }
    get time() {
        return millisecondsToSeconds(Number(this.animation.currentTime) || 0);
    }
    set time(t) {
        this.finishedTime = null;
        this.animation.currentTime = secondsToMilliseconds(t);
    }
    get speed() {
        return this.animation.playbackRate;
    }
    set speed(t) {
        if (t < 0) {
            this.finishedTime = null;
        }
        this.animation.playbackRate = t;
    }
    get state() {
        if (this.finishedTime !== null) {
            return "finished";
        }
        return this.animation.playState;
    }
    get startTime() {
        return Number(this.animation.startTime);
    }
    set startTime(t) {
        this.animation.startTime = t;
    }
    attachTimeline({ timeline, observe }) {
        this.allowFlatten && this.animation.effect?.updateTiming({
            easing: "linear"
        });
        this.animation.onfinish = null;
        if (timeline && supportsScrollTimeline()) {
            this.animation.timeline = timeline;
            return noop;
        }
        return observe(this);
    }
}
const xi = {
    anticipate,
    backInOut,
    circInOut
};
function Ro(ease) {
    return ease in xi;
}
function Lo(e) {
    if (typeof e.ease === "string" && Ro(e.ease)) {
        e.ease = xi[e.ease];
    }
}
const $e = 10;
export class NativeAnimationExtended extends NativeAnimation {
    constructor(t){
        Lo(t);
        pi(t);
        super(t);
        if (t.startTime) {
            this.startTime = t.startTime;
        }
        this.options = t;
    }
    updateMotionValue(t) {
        const { motionValue, onUpdate, onComplete, element, ...rest } = this.options;
        if (!motionValue) {
            return;
        }
        if (t !== undefined) {
            motionValue.set(t);
            return;
        }
        const a = new JSAnimation({
            ...rest,
            autoplay: false
        });
        const l = secondsToMilliseconds(this.finishedTime ?? this.time);
        motionValue.setWithVelocity(a.sample(l - $e).value, a.sample(l).value, $e);
        a.stop();
    }
}
const ze = (e, name)=>{
    if (name === "zIndex") {
        return false;
    }
    return !!(typeof e === "number" || Array.isArray(e) || typeof e === "string" && (dg.test(e) || e === "0") && !e.startsWith("url("));
};
function Fo(keyframes) {
    const t = keyframes[0];
    if (keyframes.length === 1) {
        return true;
    }
    for(let s = 0; s < keyframes.length; s++){
        if (keyframes[s] !== t) {
            return true;
        }
    }
}
function Bo(keyframes, name, type, velocity) {
    const n = keyframes[0];
    if (n === null) {
        return false;
    }
    if (name === "display" || name === "visibility") {
        return true;
    }
    const r = keyframes[keyframes.length - 1];
    const o = ze(n, name);
    const a = ze(r, name);
    if (!o || !a) {
        return false;
    }
    return Fo(keyframes) || (type === "spring" || isGenerator(type)) && velocity;
}
export function makeAnimationInstant(e) {
    e.duration = 0;
    e.type = "keyframes";
}
const Io = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
]);
const jo = memo(()=>Object.hasOwnProperty.call(Element.prototype, "animate"));
export function supportsBrowserAnimation({ motionValue, name, repeatDelay, repeatType, damping, type }) {
    if (!(motionValue?.owner?.current instanceof HTMLElement)) {
        return false;
    }
    const { onUpdate, transformTemplate } = motionValue.owner.getProps();
    return jo() && name && Io.has(name) && (name !== "transform" || !transformTemplate) && !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
}
const Uo = 40;
export class AsyncMotionValueAnimation extends Ve {
    constructor({ autoplay = true, delay = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", keyframes, name, motionValue, element, ...rest }){
        super();
        this.stop = ()=>{
            if (this._animation) {
                this._animation.stop();
                this.stopTimeline?.();
            }
            this.keyframeResolver?.cancel();
        };
        this.createdAt = time.now();
        const f = {
            autoplay,
            delay,
            type,
            repeat,
            repeatDelay,
            repeatType,
            name,
            motionValue,
            element,
            ...rest
        };
        const d = element?.KeyframeResolver || KeyframeResolver;
        this.keyframeResolver = new d(keyframes, (m, v, y)=>this.onKeyframesResolved(m, v, f, !y), name, motionValue, element);
        this.keyframeResolver?.scheduleResolve();
    }
    onKeyframesResolved(keyframes_1, finalKeyframe, i, n) {
        this.keyframeResolver = undefined;
        const { name, type, velocity, delay, isHandoff, onUpdate } = i;
        this.resolvedAt = time.now();
        if (!Bo(keyframes_1, name, type, velocity)) {
            (MotionGlobalConfig.instantAnimations || !delay) && onUpdate?.(Ae(keyframes_1, i, finalKeyframe));
            keyframes_1[0] = keyframes_1[keyframes_1.length - 1];
            makeAnimationInstant(i);
            i.repeat = 0;
        }
        const f = {
            startTime: n ? this.resolvedAt ? this.resolvedAt - this.createdAt > Uo ? this.resolvedAt : this.createdAt : this.createdAt : undefined,
            finalKeyframe,
            ...i,
            keyframes: keyframes_1
        };
        const d = !isHandoff && supportsBrowserAnimation(f) ? new NativeAnimationExtended({
            ...f,
            element: f.motionValue.owner.current
        }) : new JSAnimation(f);
        d.finished.then(()=>this.notifyFinished()).catch(noop);
        if (this.pendingTimeline) {
            this.stopTimeline = d.attachTimeline(this.pendingTimeline);
            this.pendingTimeline = undefined;
        }
        this._animation = d;
    }
    get finished() {
        if (this._animation) {
            return this.animation.finished;
        }
        return this._finished;
    }
    then(t, s) {
        return this.finished.finally(t).then(()=>{});
    }
    get animation() {
        if (!this._animation) {
            this.keyframeResolver?.resume();
            flushKeyframeResolvers();
        }
        return this._animation;
    }
    get duration() {
        return this.animation.duration;
    }
    get iterationDuration() {
        return this.animation.iterationDuration;
    }
    get time() {
        return this.animation.time;
    }
    set time(t) {
        this.animation.time = t;
    }
    get speed() {
        return this.animation.speed;
    }
    get state() {
        return this.animation.state;
    }
    set speed(t) {
        this.animation.speed = t;
    }
    get startTime() {
        return this.animation.startTime;
    }
    attachTimeline(t) {
        if (this._animation) {
            this.stopTimeline = this.animation.attachTimeline(t);
        } else {
            this.pendingTimeline = t;
        }
        return ()=>this.stop();
    }
    play() {
        this.animation.play();
    }
    pause() {
        this.animation.pause();
    }
    complete() {
        this.animation.complete();
    }
    cancel() {
        if (this._animation) {
            this.animation.cancel();
        }
        this.keyframeResolver?.cancel();
    }
}
const Ko = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
export function parseCSSVariable(e) {
    const t = Ko.exec(e);
    if (!t) {
        return [
            , 
        ];
    }
    const [, s, i, n] = t;
    return [
        `--${s ?? i}`,
        n
    ];
}
export function getVariableValue(e, t, s = 1) {
    const [i, n] = parseCSSVariable(e);
    if (!i) {
        return;
    }
    const r = window.getComputedStyle(t).getPropertyValue(i);
    if (r) {
        const o = r.trim();
        if (isNumericalString(o)) {
            return parseFloat(o);
        }
        return o;
    }
    if (aU(n)) {
        return getVariableValue(n, t, s + 1);
    }
    return n;
}
export function getValueTransition(e, t) {
    return e?.[t] ?? e?.default ?? e;
}
export const positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...aX
]);
const Wo = {
    test: (e)=>e === "auto",
    parse: (e)=>e
};
export const testValueType = (e)=>(t)=>t.test(e);
export const dimensionValueTypes = [
    di_1,
    aW,
    aY,
    aZ,
    a_,
    a$,
    Wo
];
export const findDimensionValueType = (e)=>dimensionValueTypes.find(testValueType(e));
function _o(e) {
    if (typeof e === "number") {
        return e === 0;
    }
    if (e !== null) {
        return e === "none" || e === "0" || isZeroValueString(e);
    }
    return true;
}
const $o = new Set([
    "brightness",
    "contrast",
    "saturate",
    "opacity"
]);
function zo(e) {
    const [t, s] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") {
        return e;
    }
    const [i] = s.match(b0) || [];
    if (!i) {
        return e;
    }
    const n = s.replace(i, "");
    let r = $o.has(t) ? 1 : 0;
    if (i !== s) {
        r *= 100;
    }
    return `${t}(${r}${n})`;
}
const Ho = /\b([a-z-]*)\(.*?\)/gu;
const ie = {
    ...dg,
    getAnimatableNone: (e)=>{
        const t = e.match(Ho);
        if (t) {
            return t.map(zo).join(" ");
        }
        return e;
    }
};
export const defaultValueTypes = {
    ...dj,
    color: df,
    backgroundColor: df,
    outlineColor: df,
    fill: df,
    stroke: df,
    borderColor: df,
    borderTopColor: df,
    borderRightColor: df,
    borderBottomColor: df,
    borderLeftColor: df,
    filter: ie,
    WebkitFilter: ie
};
export const getDefaultValueType = (e)=>defaultValueTypes[e];
export function getAnimatableNone(e, t) {
    let s = getDefaultValueType(e);
    if (s !== ie) {
        s = dg;
    }
    if (s.getAnimatableNone) {
        return s.getAnimatableNone(t);
    }
}
const Yo = new Set([
    "auto",
    "none",
    "0"
]);
function qo(unresolvedKeyframes, t, name) {
    let i = 0;
    let n;
    while(i < unresolvedKeyframes.length && !n){
        const r = unresolvedKeyframes[i];
        if (typeof r === "string" && !Yo.has(r) && dh(r).values.length) {
            n = unresolvedKeyframes[i];
        }
        i++;
    }
    if (n && name) {
        for (const r of t){
            unresolvedKeyframes[r] = getAnimatableNone(name, n);
        }
    }
}
export class DOMKeyframesResolver extends KeyframeResolver {
    constructor(t, s, i, n, r){
        super(t, s, i, n, r, true);
    }
    readKeyframes() {
        const { unresolvedKeyframes, element, name } = this;
        if (!element || !element.current) {
            return;
        }
        super.readKeyframes();
        for(let l = 0; l < unresolvedKeyframes.length; l++){
            let c = unresolvedKeyframes[l];
            if (typeof c === "string" && (c = c.trim(), aU(c))) {
                const u = getVariableValue(c, element.current);
                if (u !== undefined) {
                    unresolvedKeyframes[l] = u;
                }
                if (l === unresolvedKeyframes.length - 1) {
                    this.finalKeyframe = c;
                }
            }
        }
        this.resolveNoneKeyframes();
        if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
            return;
        }
        const [n, r] = unresolvedKeyframes;
        const o = findDimensionValueType(n);
        const a = findDimensionValueType(r);
        if (o !== a) {
            if (We(o) && We(a)) {
                for(let l = 0; l < unresolvedKeyframes.length; l++){
                    const unresolvedKeyframe = unresolvedKeyframes[l];
                    if (typeof unresolvedKeyframe === "string") {
                        unresolvedKeyframes[l] = parseFloat(unresolvedKeyframe);
                    }
                }
            } else {
                if (Z[name]) {
                    this.needsMeasurement = true;
                }
            }
        }
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes, name } = this;
        const i = [];
        for(let n = 0; n < unresolvedKeyframes.length; n++){
            if (unresolvedKeyframes[n] === null || _o(unresolvedKeyframes[n])) {
                i.push(n);
            }
        }
        if (i.length) {
            qo(unresolvedKeyframes, i, name);
        }
    }
    measureInitialState() {
        const { element, unresolvedKeyframes, name } = this;
        if (!element || !element.current) {
            return;
        }
        if (name === "height") {
            this.suspendedScrollY = window.pageYOffset;
        }
        this.measuredOrigin = Z[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        unresolvedKeyframes[0] = this.measuredOrigin;
        const n = unresolvedKeyframes[unresolvedKeyframes.length - 1];
        if (n !== undefined) {
            element.getValue(name, n).jump(n, false);
        }
    }
    measureEndState() {
        const { element, name, unresolvedKeyframes } = this;
        if (!element || !element.current) {
            return;
        }
        const n = element.getValue(name);
        if (n) {
            n.jump(this.measuredOrigin, false);
        }
        const r = unresolvedKeyframes.length - 1;
        const o = unresolvedKeyframes[r];
        unresolvedKeyframes[r] = Z[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        if (o !== null && this.finalKeyframe === undefined) {
            this.finalKeyframe = o;
        }
        if (this.removedTransforms?.length) {
            this.removedTransforms.forEach(([a, l])=>{
                element.getValue(a).set(l);
            });
        }
        this.resolveNoneKeyframes();
    }
}
export function resolveElements(e, t, s) {
    if (e instanceof EventTarget) {
        return [
            e
        ];
    }
    if (typeof e === "string") {
        let i = document;
        const n = s?.[e] ?? i.querySelectorAll(e);
        if (n) {
            return Array.from(n);
        }
        return [];
    }
    return Array.from(e);
}
const Xe = 30;
const Qo = (e)=>!isNaN(parseFloat(e));
export class MotionValue {
    constructor(t, s = {}){
        this.canTrackVelocity = null;
        this.events = {};
        this.updateAndNotify = (i)=>{
            const n = time.now();
            if (this.updatedAt !== n) {
                this.setPrevFrameValue();
            }
            this.prev = this.current;
            this.setCurrent(i);
            if (this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) {
                for (const r of this.dependents){
                    r.dirty();
                }
            }
        };
        this.hasAnimated = false;
        this.setCurrent(t);
        this.owner = s.owner;
    }
    setCurrent(t) {
        this.current = t;
        this.updatedAt = time.now();
        if (this.canTrackVelocity === null && t !== undefined) {
            this.canTrackVelocity = Qo(this.current);
        }
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t;
        this.prevUpdatedAt = this.updatedAt;
    }
    onChange(t) {
        return this.on("change", t);
    }
    on(t, s) {
        if (!this.events[t]) {
            this.events[t] = new SubscriptionManager;
        }
        const i = this.events[t].add(s);
        if (t === "change") {
            return ()=>{
                i();
                schedule.read(()=>{
                    if (!this.events.change.getSize()) {
                        this.stop();
                    }
                });
            };
        }
        return i;
    }
    clearListeners() {
        for(const t in this.events){
            this.events[t].clear();
        }
    }
    attach(t, s) {
        this.passiveEffect = t;
        this.stopPassiveEffect = s;
    }
    set(t) {
        if (this.passiveEffect) {
            this.passiveEffect(t, this.updateAndNotify);
        } else {
            this.updateAndNotify(t);
        }
    }
    setWithVelocity(t, s, i) {
        this.set(s);
        this.prev = undefined;
        this.prevFrameValue = t;
        this.prevUpdatedAt = this.updatedAt - i;
    }
    jump(t, s = true) {
        this.updateAndNotify(t);
        this.prev = t;
        this.prevUpdatedAt = this.prevFrameValue = undefined;
        if (s) {
            this.stop();
        }
        if (this.stopPassiveEffect) {
            this.stopPassiveEffect();
        }
    }
    dirty() {
        this.events.change?.notify(this.current);
    }
    addDependent(t) {
        if (!this.dependents) {
            this.dependents = new Set;
        }
        this.dependents.add(t);
    }
    removeDependent(t) {
        if (this.dependents) {
            this.dependents.delete(t);
        }
    }
    get() {
        return this.current;
    }
    getPrevious() {
        return this.prev;
    }
    getVelocity() {
        const t = time.now();
        if (!this.canTrackVelocity || this.prevFrameValue === undefined || t - this.updatedAt > Xe) {
            return 0;
        }
        const s = Math.min(this.updatedAt - this.prevUpdatedAt, Xe);
        return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
    }
    start(t) {
        this.stop();
        return new Promise((resolve)=>{
            this.hasAnimated = true;
            this.animation = t(resolve);
            if (this.events.animationStart) {
                this.events.animationStart.notify();
            }
        }).then(()=>{
            if (this.events.animationComplete) {
                this.events.animationComplete.notify();
            }
            this.clearAnimation();
        });
    }
    stop() {
        if (this.animation) {
            this.animation.stop();
            if (this.events.animationCancel) {
                this.events.animationCancel.notify();
            }
        }
        this.clearAnimation();
    }
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    destroy() {
        this.dependents?.clear();
        this.events.destroy?.notify();
        this.clearListeners();
        this.stop();
        if (this.stopPassiveEffect) {
            this.stopPassiveEffect();
        }
    }
}
export function motionValue(e, t) {
    return new MotionValue(e, t);
}
const { schedule: schedule_1 } = createRenderBatcher(queueMicrotask, false);
export const isDragging = {
    x: false,
    y: false
};
export function isDragActive() {
    return isDragging.x || isDragging.y;
}
export function setDragLock(e) {
    if (e === "x" || e === "y") {
        if (isDragging[e]) {
            return null;
        }
        isDragging[e] = true;
        return ()=>{
            isDragging[e] = false;
        };
    }
    if (isDragging.x || isDragging.y) {
        return null;
    }
    isDragging.x = isDragging.y = true;
    return ()=>{
        isDragging.x = isDragging.y = false;
    };
}
function Ci(e, t) {
    const s = resolveElements(e);
    const i = new AbortController;
    const n = {
        passive: true,
        ...t,
        signal: i.signal
    };
    return [
        s,
        n,
        ()=>i.abort()
    ];
}
function Ye(e) {
    return !(e.pointerType === "touch" || isDragActive());
}
export function hover(e, t, s = {}) {
    const [i, n, r] = Ci(e, s);
    const o = (a)=>{
        if (!Ye(a)) {
            return;
        }
        const { target } = a;
        const c = t(target, a);
        if (typeof c !== "function" || !target) {
            return;
        }
        const u = (h)=>{
            if (Ye(h)) {
                c(h);
                target.removeEventListener("pointerleave", u);
            }
        };
        target.addEventListener("pointerleave", u, n);
    };
    i.forEach((a)=>{
        a.addEventListener("pointerenter", o, n);
    });
    return r;
}
export const isNodeOrChild = (e, t)=>{
    if (t) {
        if (e === t) {
            return true;
        }
        return isNodeOrChild(e, t.parentElement);
    }
    return false;
};
export const isPrimaryPointer = (e)=>{
    if (e.pointerType === "mouse") {
        return typeof e.button !== "number" || e.button <= 0;
    }
    return e.isPrimary !== false;
};
const ir = new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A"
]);
function nr(e) {
    return ir.has(e.tagName) || e.tabIndex !== -1;
}
const At = new WeakSet;
function qe(e) {
    return (t)=>{
        if (t.key === "Enter") {
            e(t);
        }
    };
}
function It(e, t) {
    e.dispatchEvent(new PointerEvent(`pointer${t}`, {
        isPrimary: true,
        bubbles: true
    }));
}
const or = (e, t)=>{
    const e_currentTarget = e.currentTarget;
    if (!e_currentTarget) {
        return;
    }
    const i = qe(()=>{
        if (At.has(e_currentTarget)) {
            return;
        }
        It(e_currentTarget, "down");
        const n = qe(()=>{
            It(e_currentTarget, "up");
        });
        const r = ()=>It(e_currentTarget, "cancel");
        e_currentTarget.addEventListener("keyup", n, t);
        e_currentTarget.addEventListener("blur", r, t);
    });
    e_currentTarget.addEventListener("keydown", i, t);
    e_currentTarget.addEventListener("blur", ()=>e_currentTarget.removeEventListener("keydown", i), t);
};
function Ze(e) {
    return isPrimaryPointer(e) && !isDragActive();
}
export function press(e, t, s = {}) {
    const [i, n, r] = Ci(e, s);
    const o = (a)=>{
        const a_currentTarget = a.currentTarget;
        if (!Ze(a)) {
            return;
        }
        At.add(a_currentTarget);
        const c = t(a_currentTarget, a);
        const u = (d, success)=>{
            window.removeEventListener("pointerup", h);
            window.removeEventListener("pointercancel", f);
            if (At.has(a_currentTarget)) {
                At.delete(a_currentTarget);
            }
            if (Ze(d) && typeof c === "function") {
                c(d, {
                    success
                });
            }
        };
        const h = (d)=>{
            u(d, a_currentTarget === window || a_currentTarget === document || s.useGlobalTarget || isNodeOrChild(a_currentTarget, d.target));
        };
        const f = (d)=>{
            u(d, false);
        };
        window.addEventListener("pointerup", h, n);
        window.addEventListener("pointercancel", f, n);
    };
    i.forEach((a)=>{
        (s.useGlobalTarget ? window : a).addEventListener("pointerdown", o, n);
        if (dk(a)) {
            a.addEventListener("focus", (c)=>or(c, n));
            if (!nr(a) && !a.hasAttribute("tabindex")) {
                a.tabIndex = 0;
            }
        }
    });
    return r;
}
export function isSVGElement(e) {
    return b1(e) && "ownerSVGElement" in e;
}
export function isSVGSVGElement(e) {
    return isSVGElement(e) && e.tagName === "svg";
}
const lr = [
    ...dimensionValueTypes,
    df,
    dg
];
export const findValueType = (e)=>lr.find(testValueType(e));
function Ri({ top, left, right, bottom }) {
    return {
        x: {
            min: left,
            max: right
        },
        y: {
            min: top,
            max: bottom
        }
    };
}
function cr({ x, y }) {
    return {
        top: y.min,
        right: x.max,
        bottom: y.max,
        left: x.min
    };
}
function hr(e, t) {
    if (!t) {
        return e;
    }
    const s = t({
        x: e.left,
        y: e.top
    });
    const i = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: s.y,
        left: s.x,
        bottom: i.y,
        right: i.x
    };
}
function jt(e) {
    return e === undefined || e === 1;
}
function ne({ scale, scaleX, scaleY }) {
    return !jt(scale) || !jt(scaleX) || !jt(scaleY);
}
function Y(latestValues) {
    return ne(latestValues) || Li(latestValues) || latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.skewX || latestValues.skewY;
}
function Li(latestValues) {
    return Je(latestValues.x) || Je(latestValues.y);
}
function Je(e) {
    return e && e !== "0%";
}
function Ct(e, t, s) {
    const i = e - s;
    const n = t * i;
    return s + n;
}
function Qe(e, t, s, i, n) {
    if (n !== undefined) {
        e = Ct(e, n, i);
    }
    return Ct(e, s, i) + t;
}
function oe(e, t = 0, s = 1, i, n) {
    e.min = Qe(e.min, t, s, i, n);
    e.max = Qe(e.max, t, s, i, n);
}
function ki(e, { x, y }) {
    oe(e.x, x.translate, x.scale, x.originPoint);
    oe(e.y, y.translate, y.scale, y.originPoint);
}
const ts = 0.999999999999;
const es = 1.0000000000001;
function fr(layoutCorrected, treeScale, path, i = false) {
    const s_length = path.length;
    if (!s_length) {
        return;
    }
    treeScale.x = treeScale.y = 1;
    let r;
    let o;
    for(let a = 0; a < s_length; a++){
        r = path[a];
        o = r.projectionDelta;
        const { visualElement } = r.options;
        visualElement && visualElement.props.style && visualElement.props.style.display === "contents" || (i && r.options.layoutScroll && r.scroll && r !== r.root && it(layoutCorrected, {
            x: -r.scroll.offset.x,
            y: -r.scroll.offset.y
        }), o && (treeScale.x *= o.x.scale, treeScale.y *= o.y.scale, ki(layoutCorrected, o)), i && Y(r.latestValues) && it(layoutCorrected, r.latestValues));
    }
    if (treeScale.x < es && treeScale.x > ts) {
        treeScale.x = 1;
    }
    if (treeScale.y < es && treeScale.y > ts) {
        treeScale.y = 1;
    }
}
function st(e, t) {
    e.min = e.min + t;
    e.max = e.max + t;
}
function ss(e, t, s, scale, n = 0.5) {
    const r = aT(e.min, e.max, n);
    oe(e, t, s, r, scale);
}
function it(e, t) {
    ss(e.x, t.x, t.scaleX, t.scale, t.originX);
    ss(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Fi(e, t) {
    return Ri(hr(e.getBoundingClientRect(), t));
}
function dr(dragConstraints_current, root, s) {
    const i = Fi(dragConstraints_current, s);
    const { scroll } = root;
    if (scroll) {
        st(i.x, scroll.offset.x);
        st(i.y, scroll.offset.y);
    }
    return i;
}
const is = ()=>({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    });
const nt = ()=>({
        x: is(),
        y: is()
    });
const ns = ()=>({
        min: 0,
        max: 0
    });
export const createBox = ()=>({
        x: ns(),
        y: ns()
    });
export const visualElementStore = new WeakMap;
function mr(owner, t, prevMotionValues) {
    for(const i in t){
        const n = t[i];
        const r = prevMotionValues[i];
        if (b2(n)) {
            owner.addValue(i, n);
        } else if (b2(r)) {
            owner.addValue(i, motionValue(n, {
                owner
            }));
        } else if (r !== n) {
            if (owner.hasValue(i)) {
                const o = owner.getValue(i);
                if (o.liveStyle === true) {
                    o.jump(n);
                } else if (!o.hasAnimated) {
                    o.set(n);
                }
            } else {
                const o = owner.getStaticValue(i);
                owner.addValue(i, motionValue(o !== undefined ? o : n, {
                    owner
                }));
            }
        }
    }
    for(const i in prevMotionValues){
        if (t[i] === undefined) {
            owner.removeValue(i);
        }
    }
    return t;
}
const os = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
];
export class VisualElement {
    scrapeMotionValuesFromProps(t, s, i) {
        return {};
    }
    constructor({ parent, props, presenceContext, reducedMotionConfig, blockInitialAnimation, visualState }, a = {}){
        this.current = null;
        this.children = new Set;
        this.isVariantNode = false;
        this.isControllingVariants = false;
        this.shouldReduceMotion = null;
        this.values = new Map;
        this.KeyframeResolver = KeyframeResolver;
        this.features = {};
        this.valueSubscriptions = new Map;
        this.prevMotionValues = {};
        this.events = {};
        this.propEventSubscriptions = {};
        this.notifyUpdate = ()=>this.notify("Update", this.latestValues);
        this.render = ()=>{
            if (this.current) {
                this.triggerBuild();
                this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
            }
        };
        this.renderScheduledAt = 0;
        this.scheduleRender = ()=>{
            const f = time.now();
            if (this.renderScheduledAt < f) {
                this.renderScheduledAt = f;
                schedule.render(this.render, false, true);
            }
        };
        const { latestValues, renderState } = visualState;
        this.latestValues = latestValues;
        this.baseTarget = {
            ...latestValues
        };
        this.initialValues = props.initial ? {
            ...latestValues
        } : {};
        this.renderState = renderState;
        this.parent = parent;
        this.props = props;
        this.presenceContext = presenceContext;
        this.depth = parent ? parent.depth + 1 : 0;
        this.reducedMotionConfig = reducedMotionConfig;
        this.options = a;
        this.blockInitialAnimation = !!blockInitialAnimation;
        this.isControllingVariants = b3(props);
        this.isVariantNode = b4(props);
        if (this.isVariantNode) {
            this.variantChildren = new Set;
        }
        this.manuallyAnimateOnMount = !!(parent && parent.current);
        const { willChange, ...rest } = this.scrapeMotionValuesFromProps(props, {}, this);
        for(const f in rest){
            const d = rest[f];
            if (latestValues[f] !== undefined && b2(d)) {
                d.set(latestValues[f]);
            }
        }
    }
    mount(t) {
        this.current = t;
        visualElementStore.set(t, this);
        if (this.projection && !this.projection.instance) {
            this.projection.mount(t);
        }
        if (this.parent && this.isVariantNode && !this.isControllingVariants) {
            this.removeFromVariantTree = this.parent.addVariantChild(this);
        }
        this.values.forEach((s, i)=>this.bindToMotionValue(i, s));
        if (!b5.current) {
            b6();
        }
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : b7.current;
        this.parent?.addChild(this);
        this.update(this.props, this.presenceContext);
    }
    unmount() {
        if (this.projection) {
            this.projection.unmount();
        }
        cancel(this.notifyUpdate);
        cancel(this.render);
        this.valueSubscriptions.forEach((t)=>t());
        this.valueSubscriptions.clear();
        if (this.removeFromVariantTree) {
            this.removeFromVariantTree();
        }
        this.parent?.removeChild(this);
        for(const t in this.events){
            this.events[t].clear();
        }
        for(const t in this.features){
            const s = this.features[t];
            if (s) {
                s.unmount();
                s.isMounted = false;
            }
        }
        this.current = null;
    }
    addChild(t) {
        this.children.add(t);
        this.enteringChildren ?? (this.enteringChildren = new Set);
        this.enteringChildren.add(t);
    }
    removeChild(t) {
        this.children.delete(t);
        if (this.enteringChildren) {
            this.enteringChildren.delete(t);
        }
    }
    bindToMotionValue(t, s) {
        if (this.valueSubscriptions.has(t)) {
            this.valueSubscriptions.get(t)();
        }
        const i = b8.has(t);
        if (i && this.onBindTransform) {
            this.onBindTransform();
        }
        const n = s.on("change", (o)=>{
            this.latestValues[t] = o;
            if (this.props.onUpdate) {
                schedule.preRender(this.notifyUpdate);
            }
            if (i && this.projection) {
                this.projection.isTransformDirty = true;
            }
            this.scheduleRender();
        });
        let r;
        if (window.MotionCheckAppearSync) {
            r = window.MotionCheckAppearSync(this, t, s);
        }
        this.valueSubscriptions.set(t, ()=>{
            n();
            if (r) {
                r();
            }
            if (s.owner) {
                s.stop();
            }
        });
    }
    sortNodePosition(t) {
        if (!this.current || !this.sortInstanceNodePosition || this.type !== t.type) {
            return 0;
        }
        return this.sortInstanceNodePosition(this.current, t.current);
    }
    updateFeatures() {
        let t = "animation";
        for(t in b9){
            const s = b9[t];
            if (!s) {
                continue;
            }
            const { isEnabled, Feature } = s;
            if (!this.features[t] && Feature && isEnabled(this.props)) {
                this.features[t] = new Feature(this);
            }
            if (this.features[t]) {
                const r = this.features[t];
                if (r.isMounted) {
                    r.update();
                } else {
                    r.mount();
                    r.isMounted = true;
                }
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
        if (this.current) {
            return this.measureInstanceViewportBox(this.current, this.props);
        }
        return createBox();
    }
    getStaticValue(t) {
        return this.latestValues[t];
    }
    setStaticValue(t, s) {
        this.latestValues[t] = s;
    }
    update(t, s) {
        if (t.transformTemplate || this.props.transformTemplate) {
            this.scheduleRender();
        }
        this.prevProps = this.props;
        this.props = t;
        this.prevPresenceContext = this.presenceContext;
        this.presenceContext = s;
        for (const n of os){
            if (this.propEventSubscriptions[n]) {
                this.propEventSubscriptions[n]();
                delete this.propEventSubscriptions[n];
            }
            const r = `on${n}`;
            const o = t[r];
            if (o) {
                this.propEventSubscriptions[n] = this.on(n, o);
            }
        }
        this.prevMotionValues = mr(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues);
        if (this.handleChildMotionValue) {
            this.handleChildMotionValue();
        }
    }
    getProps() {
        return this.props;
    }
    getVariant(t) {
        if (this.props.variants) {
            return this.props.variants[t];
        }
    }
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        if (this.isVariantNode) {
            return this;
        }
        if (this.parent) {
            return this.parent.getClosestVariantNode();
        }
    }
    addVariantChild(t) {
        const s = this.getClosestVariantNode();
        if (s) {
            if (s.variantChildren) {
                s.variantChildren.add(t);
            }
            return ()=>s.variantChildren.delete(t);
        }
    }
    addValue(t, s) {
        const i = this.values.get(t);
        if (s !== i) {
            if (i) {
                this.removeValue(t);
            }
            this.bindToMotionValue(t, s);
            this.values.set(t, s);
            this.latestValues[t] = s.get();
        }
    }
    removeValue(t) {
        this.values.delete(t);
        const s = this.valueSubscriptions.get(t);
        if (s) {
            s();
            this.valueSubscriptions.delete(t);
        }
        delete this.latestValues[t];
        this.removeValueFromRenderState(t, this.renderState);
    }
    hasValue(t) {
        return this.values.has(t);
    }
    getValue(t, s) {
        if (this.props.values && this.props.values[t]) {
            return this.props.values[t];
        }
        let i = this.values.get(t);
        if (i === undefined && s !== undefined) {
            i = motionValue(s === null ? undefined : s, {
                owner: this
            });
            this.addValue(t, i);
        }
        return i;
    }
    readValue(t, s) {
        let i = this.latestValues[t] !== undefined || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        if (i != null) {
            if (typeof i === "string" && (isNumericalString(i) || isZeroValueString(i))) {
                i = parseFloat(i);
            } else if (!findValueType(i) && dg.test(s)) {
                i = getAnimatableNone(t, s);
            }
            this.setBaseTarget(t, b2(i) ? i.get() : i);
        }
        if (b2(i)) {
            return i.get();
        }
        return i;
    }
    setBaseTarget(t, s) {
        this.baseTarget[t] = s;
    }
    getBaseTarget(t) {
        const { initial } = this.props;
        let i;
        if (typeof initial === "string" || typeof initial === "object") {
            const r = ba_1(this.props, initial, this.presenceContext?.custom);
            if (r) {
                i = r[t];
            }
        }
        if (initial && i !== undefined) {
            return i;
        }
        const n = this.getBaseTargetFromProps(this.props, t);
        if (n !== undefined && !b2(n)) {
            return n;
        }
        if (this.initialValues[t] !== undefined && i === undefined) {
            return undefined;
        }
        return this.baseTarget[t];
    }
    on(t, s) {
        if (!this.events[t]) {
            this.events[t] = new SubscriptionManager;
        }
        return this.events[t].add(s);
    }
    notify(t, ...s) {
        if (this.events[t]) {
            this.events[t].notify(...s);
        }
    }
    scheduleRenderMicrotask() {
        schedule_1.render(this.render);
    }
}
class Bi extends VisualElement {
    constructor(){
        super(...arguments);
        this.KeyframeResolver = DOMKeyframesResolver;
    }
    sortInstanceNodePosition(t, s) {
        if (t.compareDocumentPosition(s) & 2) {
            return 1;
        }
        return -1;
    }
    getBaseTargetFromProps(t, s) {
        if (t.style) {
            return t.style[s];
        }
    }
    removeValueFromRenderState(t, { vars, style }) {
        delete vars[t];
        delete style[t];
    }
    handleChildMotionValue() {
        if (this.childSubscription) {
            this.childSubscription();
            delete this.childSubscription;
        }
        const { children } = this.props;
        if (b2(children)) {
            this.childSubscription = children.on("change", (s)=>{
                if (this.current) {
                    this.current.textContent = `${s}`;
                }
            });
        }
    }
}
function Ii({ style }, { style: style_1, vars }, i, n) {
    let o;
    for(o in style_1){
        style[o] = style_1[o];
    }
    n?.applyProjectionStyles(style, i);
    for(o in vars){
        style.setProperty(o, vars[o]);
    }
}
function yr(e) {
    return window.getComputedStyle(e);
}
class vr extends Bi {
    constructor(){
        super(...arguments);
        this.type = "html";
        this.renderInstance = Ii;
    }
    readValueFromInstance(t, s) {
        if (b8.has(s)) {
            if (this.projection?.isProjecting) {
                return defaultTransformValue(s);
            }
            return readTransformValue(t, s);
        }
        {
            const i = yr(t);
            const n = (bb(s) ? i.getPropertyValue(s) : i[s]) || 0;
            if (typeof n === "string") {
                return n.trim();
            }
            return n;
        }
    }
    measureInstanceViewportBox(t, { transformPagePoint }) {
        return Fi(t, transformPagePoint);
    }
    build(t, s, i) {
        dl(t, s, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, s, i) {
        return dm(t, s, i);
    }
}
const ji = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
]);
function Tr(e, t, s, i) {
    Ii(e, t, undefined, i);
    for(const n in t.attrs){
        e.setAttribute(ji.has(n) ? n : bc(n), t.attrs[n]);
    }
}
class xr extends Bi {
    constructor(){
        super(...arguments);
        this.type = "svg";
        this.isSVGTag = false;
        this.measureInstanceViewportBox = createBox;
    }
    getBaseTargetFromProps(t, s) {
        return t[s];
    }
    readValueFromInstance(t, s) {
        if (b8.has(s)) {
            const i = getDefaultValueType(s);
            return i && i.default || 0;
        }
        s = ji.has(s) ? s : bc(s);
        return t.getAttribute(s);
    }
    scrapeMotionValuesFromProps(t, s, i) {
        return dn(t, s, i);
    }
    build(t, s, i) {
        dp(t, s, this.isSVGTag, i.transformTemplate, i.style);
    }
    renderInstance(t, s, i, n) {
        Tr(t, s, i, n);
    }
    mount(t) {
        this.isSVGTag = bd(t.tagName);
        super.mount(t);
    }
}
const renderer = (e, t)=>{
    if (t.isSVG ?? be(e)) {
        return new xr(t);
    }
    return new vr(t, {
        allowProjection: e !== r.Fragment
    });
};
function ot(e, t, s) {
    const i = e.getProps();
    return ba_1(i, t, s !== undefined ? s : i.custom, e);
}
const re = (e)=>Array.isArray(e);
function Ar(e, t, s) {
    if (e.hasValue(t)) {
        e.getValue(t).set(s);
    } else {
        e.addValue(t, motionValue(s));
    }
}
function Vr(e) {
    if (re(e)) {
        return e[e.length - 1] || 0;
    }
    return e;
}
function Sr(e, t) {
    const s = ot(e, t);
    let { transitionEnd = {}, transition = {}, ...rest } = s || {};
    rest = {
        ...rest,
        ...transitionEnd
    };
    for(const o in rest){
        const a = Vr(rest[o]);
        Ar(e, o, a);
    }
}
function br(e) {
    return !!(b2(e) && e.add);
}
function ae(e, t) {
    const s = e.getValue("willChange");
    if (br(s)) {
        return s.add(t);
    }
    if (!s && MotionGlobalConfig.WillChange) {
        const i = new MotionGlobalConfig.WillChange("auto");
        e.addValue("willChange", i);
        i.add(t);
    }
}
function Oi(e) {
    return e.props[bf];
}
const Dr = (e)=>e !== null;
function wr(keyframes, { repeat, repeatType = "loop" }, i) {
    const n = keyframes.filter(Dr);
    const r = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : n.length - 1;
    return n[r];
}
const Cr = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
};
const Mr = (e)=>({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    });
const Er = {
    type: "keyframes",
    duration: 0.8
};
const Rr = {
    type: "keyframes",
    ease: [
        0.25,
        0.1,
        0.35,
        1
    ],
    duration: 0.3
};
const Lr = (e, { keyframes })=>{
    if (keyframes.length > 2) {
        return Er;
    }
    if (b8.has(e)) {
        if (e.startsWith("scale")) {
            return Mr(keyframes[1]);
        }
        return Cr;
    }
    return Rr;
};
function kr({ when, delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...rest }) {
    return !!Object.keys(rest).length;
}
const Me = (e, motionValue_1, s, i = {}, n, r)=>(o)=>{
        const a = getValueTransition(i, e) || {};
        const l = a.delay || i.delay || 0;
        let { elapsed = 0 } = i;
        elapsed = elapsed - secondsToMilliseconds(l);
        const u = {
            keyframes: Array.isArray(s) ? s : [
                null,
                s
            ],
            ease: "easeOut",
            velocity: motionValue_1.getVelocity(),
            ...a,
            delay: -elapsed,
            onUpdate: (f)=>{
                motionValue_1.set(f);
                if (a.onUpdate) {
                    a.onUpdate(f);
                }
            },
            onComplete: ()=>{
                o();
                if (a.onComplete) {
                    a.onComplete();
                }
            },
            name: e,
            motionValue: motionValue_1,
            element: r ? undefined : n
        };
        if (!kr(a)) {
            Object.assign(u, Lr(e, u));
        }
        if (u.duration) {
            u.duration = secondsToMilliseconds(u.duration);
        }
        if (u.repeatDelay) {
            u.repeatDelay = secondsToMilliseconds(u.repeatDelay);
        }
        if (u.from !== undefined) {
            u.keyframes[0] = u.from;
        }
        let h = false;
        if (u.type === false || u.duration === 0 && !u.repeatDelay) {
            makeAnimationInstant(u);
            if (u.delay === 0) {
                h = true;
            }
        }
        if (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations) {
            h = true;
            makeAnimationInstant(u);
            u.delay = 0;
        }
        u.allowFlatten = !a.type && !a.ease;
        if (h && !r && motionValue_1.get() !== undefined) {
            const f = wr(u.keyframes, a);
            if (f !== undefined) {
                schedule.update(()=>{
                    u.onUpdate(f);
                    u.onComplete();
                });
                return;
            }
        }
        if (a.isSync) {
            return new JSAnimation(u);
        }
        return new AsyncMotionValueAnimation(u);
    };
function Fr({ protectedKeys, needsAnimating }, s) {
    const i = protectedKeys.hasOwnProperty(s) && needsAnimating[s] !== true;
    needsAnimating[s] = false;
    return i;
}
function Ui(e, { transition = e.getDefaultTransition(), transitionEnd, ...rest }, { delay = 0, transitionOverride, type } = {}) {
    if (transitionOverride) {
        transition = transitionOverride;
    }
    const l = [];
    const c = type && e.animationState && e.animationState.getState()[type];
    for(const u in rest){
        const h = e.getValue(u, e.latestValues[u] ?? null);
        const f = rest[u];
        if (f === undefined || c && Fr(c, u)) {
            continue;
        }
        const d = {
            delay,
            ...getValueTransition(transition || {}, u)
        };
        const m = h.get();
        if (m !== undefined && !h.isAnimating && !Array.isArray(f) && f === m && !d.velocity) {
            continue;
        }
        let v = false;
        if (window.MotionHandoffAnimation) {
            const p = Oi(e);
            if (p) {
                const x = window.MotionHandoffAnimation(p, u, schedule);
                if (x !== null) {
                    d.startTime = x;
                    v = true;
                }
            }
        }
        ae(e, u);
        h.start(Me(u, h, f, e.shouldReduceMotion && positionalKeys.has(u) ? {
            type: false
        } : d, e, v));
        const y = h.animation;
        if (y) {
            l.push(y);
        }
    }
    if (transitionEnd) {
        Promise.all(l).then(()=>{
            schedule.update(()=>{
                if (transitionEnd) {
                    Sr(e, transitionEnd);
                }
            });
        });
    }
    return l;
}
function Ni(e, t, s, i = 0, n = 1) {
    const r = Array.from(e).sort((c, u)=>c.sortNodePosition(u)).indexOf(t);
    const e_size = e.size;
    const a = (e_size - 1) * i;
    if (typeof s === "function") {
        return s(r, e_size);
    }
    if (n === 1) {
        return r * i;
    }
    return a - r * i;
}
function le(e, t, s = {}) {
    const i = ot(e, t, s.type === "exit" ? e.presenceContext?.custom : undefined);
    let { transition = e.getDefaultTransition() || {} } = i || {};
    if (s.transitionOverride) {
        transition = s.transitionOverride;
    }
    const r = i ? ()=>Promise.all(Ui(e, i, s)) : ()=>Promise.resolve();
    const o = e.variantChildren && e.variantChildren.size ? (l = 0)=>{
        const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
        return Br(e, t, l, delayChildren, staggerChildren, staggerDirection, s);
    } : ()=>Promise.resolve();
    const { when } = transition;
    if (when) {
        const [l, c] = when === "beforeChildren" ? [
            r,
            o
        ] : [
            o,
            r
        ];
        return l().then(()=>c());
    } else {
        return Promise.all([
            r(),
            o(s.delay)
        ]);
    }
}
function Br(e, t, s = 0, i = 0, n = 0, r = 1, o) {
    const a = [];
    for (const l of e.variantChildren){
        l.notify("AnimationStart", t);
        a.push(le(l, t, {
            ...o,
            delay: s + (typeof i === "function" ? 0 : i) + Ni(e.variantChildren, l, i, n, r)
        }).then(()=>l.notify("AnimationComplete", t)));
    }
    return Promise.all(a);
}
export function animateVisualElement(e, t, s = {}) {
    e.notify("AnimationStart", t);
    let i;
    if (Array.isArray(t)) {
        const n = t.map((r)=>le(e, r, s));
        i = Promise.all(n);
    } else if (typeof t === "string") {
        i = le(e, t, s);
    } else {
        const n = typeof t === "function" ? ot(e, t, s.custom) : t;
        i = Promise.all(Ui(e, n, s));
    }
    return i.then(()=>{
        e.notify("AnimationComplete", t);
    });
}
function Ki(e, t) {
    if (!Array.isArray(t)) {
        return false;
    }
    const t_length = t.length;
    if (t_length !== e.length) {
        return false;
    }
    for(let i = 0; i < t_length; i++){
        if (t[i] !== e[i]) {
            return false;
        }
    }
    return true;
}
const bh_length = bh.length;
function Gi(parent) {
    if (!parent) {
        return;
    }
    if (!parent.isControllingVariants) {
        const s = parent.parent ? Gi(parent.parent) || {} : {};
        if (parent.props.initial !== undefined) {
            s.initial = parent.props.initial;
        }
        return s;
    }
    const t = {};
    for(let s = 0; s < bh_length; s++){
        const i = bh[s];
        const n = parent.props[i];
        if (bg(n) || n === false) {
            t[i] = n;
        }
    }
    return t;
}
const Or = [
    ...bj
].reverse();
const bj_length = bj.length;
function Nr(e) {
    return (t)=>Promise.all(t.map(({ animation, options })=>animateVisualElement(e, animation, options)));
}
function Kr(e) {
    let t = Nr(e);
    let s = rs();
    let i = true;
    const n = (l)=>(c, u)=>{
            const h = ot(e, u, l === "exit" ? e.presenceContext?.custom : undefined);
            if (h) {
                const { transition, transitionEnd, ...rest } = h;
                c = {
                    ...c,
                    ...rest,
                    ...transitionEnd
                };
            }
            return c;
        };
    function setAnimateFunction(l) {
        t = l(e);
    }
    function animateChanges(l) {
        const { props } = e;
        const u = Gi(e.parent) || {};
        const h = [];
        const f = new Set;
        let d = {};
        let m = Infinity;
        for(let y = 0; y < bj_length; y++){
            const p = Or[y];
            const x = s[p];
            const g = props[p] !== undefined ? props[p] : u[p];
            const A = bg(g);
            const T = p === l ? x.isActive : null;
            if (T === false) {
                m = y;
            }
            let V = g === u[p] && g !== props[p] && A;
            if (V && i && e.manuallyAnimateOnMount) {
                V = false;
            }
            x.protectedKeys = {
                ...d
            };
            if (!x.isActive && T === null || !g && !x.prevProp || bi(g) || typeof g === "boolean") {
                continue;
            }
            const w = Gr(x.prevProp, g);
            let P = w || p === l && x.isActive && !V && A || y > m && A;
            let L = false;
            const B = Array.isArray(g) ? g : [
                g
            ];
            let tt = B.reduce(n(p), {});
            if (T === false) {
                tt = {};
            }
            const { prevResolvedValues = {} } = x;
            const sn = {
                ...prevResolvedValues,
                ...tt
            };
            const Le = (M)=>{
                P = true;
                if (f.has(M)) {
                    L = true;
                    f.delete(M);
                }
                x.needsAnimating[M] = true;
                const I = e.getValue(M);
                if (I) {
                    I.liveStyle = false;
                }
            };
            for(const M in sn){
                const I = tt[M];
                const H = prevResolvedValues[M];
                if (d.hasOwnProperty(M)) {
                    continue;
                }
                let et = false;
                if (re(I) && re(H)) {
                    et = !Ki(I, H);
                } else {
                    et = I !== H;
                }
                et ? I != null ? Le(M) : f.add(M) : I !== undefined && f.has(M) ? Le(M) : x.protectedKeys[M] = true;
            }
            x.prevProp = g;
            x.prevResolvedValues = tt;
            if (x.isActive) {
                d = {
                    ...d,
                    ...tt
                };
            }
            if (i && e.blockInitialAnimation) {
                P = false;
            }
            const ke = V && w;
            if (P && (!ke || L)) {
                h.push(...B.map((M)=>{
                    const options = {
                        type: p
                    };
                    if (typeof M === "string" && i && !ke && e.manuallyAnimateOnMount && e.parent) {
                        const { parent } = e;
                        const et = ot(parent, M);
                        if (parent.enteringChildren && et) {
                            const { delayChildren } = et.transition || {};
                            options.delay = Ni(parent.enteringChildren, e, delayChildren);
                        }
                    }
                    return {
                        animation: M,
                        options
                    };
                }));
            }
        }
        if (f.size) {
            const y = {};
            if (typeof props.initial !== "boolean") {
                const p = ot(e, Array.isArray(props.initial) ? props.initial[0] : props.initial);
                if (p && p.transition) {
                    y.transition = p.transition;
                }
            }
            f.forEach((p)=>{
                const x = e.getBaseTarget(p);
                const g = e.getValue(p);
                if (g) {
                    g.liveStyle = true;
                }
                y[p] = x ?? null;
            });
            h.push({
                animation: y
            });
        }
        let v = !!h.length;
        if (i && (props.initial === false || props.initial === props.animate) && !e.manuallyAnimateOnMount) {
            v = false;
        }
        i = false;
        if (v) {
            return t(h);
        }
        return Promise.resolve();
    }
    function setActive(l, c) {
        if (s[l].isActive === c) {
            return Promise.resolve();
        }
        e.variantChildren?.forEach((h)=>h.animationState?.setActive(l, c));
        s[l].isActive = c;
        const u = animateChanges(l);
        for(const h in s){
            s[h].protectedKeys = {};
        }
        return u;
    }
    return {
        animateChanges,
        setActive,
        setAnimateFunction,
        getState: ()=>s,
        reset: ()=>{
            s = rs();
        }
    };
}
function Gr(prevProp, t) {
    if (typeof t === "string") {
        return t !== prevProp;
    }
    if (Array.isArray(t)) {
        return !Ki(t, prevProp);
    }
    return false;
}
function X(isActive = false) {
    return {
        isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    };
}
function rs() {
    return {
        animate: X(true),
        whileInView: X(),
        whileHover: X(),
        whileTap: X(),
        whileDrag: X(),
        whileFocus: X(),
        exit: X()
    };
}
class z {
    constructor(t){
        this.isMounted = false;
        this.node = t;
    }
    update() {}
}
class Wr extends z {
    constructor(t){
        super(t);
        if (!t.animationState) {
            t.animationState = Kr(t);
        }
    }
    updateAnimationControlsSubscription() {
        const { animate } = this.node.getProps();
        if (bi(animate)) {
            this.unmountControls = animate.subscribe(this.node);
        }
    }
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate } = this.node.getProps();
        const { animate: animate_1 } = this.node.prevProps || {};
        if (animate !== animate_1) {
            this.updateAnimationControlsSubscription();
        }
    }
    unmount() {
        this.node.animationState.reset();
        this.unmountControls?.();
    }
}
let _r = 0;
class $r extends z {
    constructor(){
        super(...arguments);
        this.id = _r++;
    }
    update() {
        if (!this.node.presenceContext) {
            return;
        }
        const { isPresent, onExitComplete } = this.node.presenceContext;
        const { isPresent: isPresent_1 } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || isPresent === isPresent_1) {
            return;
        }
        const n = this.node.animationState.setActive("exit", !isPresent);
        if (onExitComplete && !isPresent) {
            n.then(()=>{
                onExitComplete(this.id);
            });
        }
    }
    mount() {
        const { register, onExitComplete } = this.node.presenceContext || {};
        if (onExitComplete) {
            onExitComplete(this.id);
        }
        if (register) {
            this.unmount = register(this.id);
        }
    }
    unmount() {}
}
export const animations = {
    animation: {
        Feature: Wr
    },
    exit: {
        Feature: $r
    }
};
function pt(e, t, s, i = {
    passive: true
}) {
    e.addEventListener(t, s, i);
    return ()=>e.removeEventListener(t, s);
}
function yt(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    };
}
export const addPointerInfo = (e)=>(t)=>isPrimaryPointer(t) && e(t, yt(t));
export function addPointerEvent(e, t, s, i) {
    return pt(e, t, addPointerInfo(s), i);
}
const Wi = 0.0001;
const Xr = 1 - Wi;
const Yr = 1 + Wi;
const _i = 0.01;
const qr = 0 - _i;
const Zr = 0 + _i;
export function calcLength(e) {
    return e.max - e.min;
}
function Jr(e, t, s) {
    return Math.abs(e - t) <= s;
}
function as(e, t, s, i = 0.5) {
    e.origin = i;
    e.originPoint = aT(t.min, t.max, e.origin);
    e.scale = calcLength(s) / calcLength(t);
    e.translate = aT(s.min, s.max, e.origin) - e.originPoint;
    if (e.scale >= Xr && e.scale <= Yr || isNaN(e.scale)) {
        e.scale = 1;
    }
    if (e.translate >= qr && e.translate <= Zr || isNaN(e.translate)) {
        e.translate = 0;
    }
}
function ht(e, t, s, i) {
    as(e.x, t.x, s.x, i ? i.originX : undefined);
    as(e.y, t.y, s.y, i ? i.originY : undefined);
}
function ls(e, t, s) {
    e.min = s.min + t.min;
    e.max = e.min + calcLength(t);
}
function Qr(target, relativeTarget, s) {
    ls(target.x, relativeTarget.x, s.x);
    ls(target.y, relativeTarget.y, s.y);
}
function us(e, t, s) {
    e.min = t.min - s.min;
    e.max = e.min + calcLength(t);
}
function Mt(e, t, s) {
    us(e.x, t.x, s.x);
    us(e.y, t.y, s.y);
}
function j(e) {
    return [
        e("x"),
        e("y")
    ];
}
const $i = ({ current })=>{
    if (current) {
        return current.ownerDocument.defaultView;
    }
    return null;
};
export const distance = (e, t)=>Math.abs(e - t);
export function distance2D(e, t) {
    const s = distance(e.x, t.x);
    const i = distance(e.y, t.y);
    return Math.sqrt(s ** 2 + i ** 2);
}
class zi {
    constructor(t, s, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3 } = {}){
        this.startEvent = null;
        this.lastMoveEvent = null;
        this.lastMoveEventInfo = null;
        this.handlers = {};
        this.contextWindow = window;
        this.updatePoint = ()=>{
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) {
                return;
            }
            const f = Ut(this.lastMoveEventInfo, this.history);
            const d = this.startEvent !== null;
            const m = distance2D(f.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!d && !m) {
                return;
            }
            const { point } = f;
            const { timestamp } = state;
            this.history.push({
                ...point,
                timestamp
            });
            const { onStart, onMove } = this.handlers;
            if (!d) {
                if (onStart) {
                    onStart(this.lastMoveEvent, f);
                }
                this.startEvent = this.lastMoveEvent;
            }
            if (onMove) {
                onMove(this.lastMoveEvent, f);
            }
        };
        this.handlePointerMove = (f, d)=>{
            this.lastMoveEvent = f;
            this.lastMoveEventInfo = Ot(d, this.transformPagePoint);
            schedule.update(this.updatePoint, true);
        };
        this.handlePointerUp = (f, d)=>{
            this.end();
            const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
            if (this.dragSnapToOrigin && resumeAnimation) {
                resumeAnimation();
            }
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) {
                return;
            }
            const p = Ut(f.type === "pointercancel" ? this.lastMoveEventInfo : Ot(d, this.transformPagePoint), this.history);
            if (this.startEvent && onEnd) {
                onEnd(f, p);
            }
            if (onSessionEnd) {
                onSessionEnd(f, p);
            }
        };
        if (!isPrimaryPointer(t)) {
            return;
        }
        this.dragSnapToOrigin = dragSnapToOrigin;
        this.handlers = s;
        this.transformPagePoint = transformPagePoint;
        this.distanceThreshold = distanceThreshold;
        this.contextWindow = contextWindow || window;
        const a = yt(t);
        const l = Ot(a, this.transformPagePoint);
        const { point } = l;
        const { timestamp } = state;
        this.history = [
            {
                ...point,
                timestamp
            }
        ];
        const { onSessionStart } = s;
        if (onSessionStart) {
            onSessionStart(t, Ut(l, this.history));
        }
        this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(t) {
        this.handlers = t;
    }
    end() {
        if (this.removeListeners) {
            this.removeListeners();
        }
        cancel(this.updatePoint);
    }
}
function Ot(e, transformPagePoint) {
    if (transformPagePoint) {
        return {
            point: transformPagePoint(e.point)
        };
    }
    return e;
}
function hs(point, t) {
    return {
        x: point.x - t.x,
        y: point.y - t.y
    };
}
function Ut({ point }, history) {
    return {
        point,
        delta: hs(point, Hi(history)),
        offset: hs(point, ea(history)),
        velocity: sa(history, 0.1)
    };
}
function ea(history) {
    return history[0];
}
function Hi(e) {
    return e[e.length - 1];
}
function sa(history, t) {
    if (history.length < 2) {
        return {
            x: 0,
            y: 0
        };
    }
    let s = history.length - 1;
    let i = null;
    const n = Hi(history);
    while(s >= 0 && (i = history[s], !(n.timestamp - i.timestamp > secondsToMilliseconds(t)))){
        s--;
    }
    if (!i) {
        return {
            x: 0,
            y: 0
        };
    }
    const r = millisecondsToSeconds(n.timestamp - i.timestamp);
    if (r === 0) {
        return {
            x: 0,
            y: 0
        };
    }
    const o = {
        x: (n.x - i.x) / r,
        y: (n.y - i.y) / r
    };
    if (o.x === Infinity) {
        o.x = 0;
    }
    if (o.y === Infinity) {
        o.y = 0;
    }
    return o;
}
function ia(e, { min, max }, i) {
    if (min !== undefined && e < min) {
        e = i ? aT(min, e, i.min) : Math.max(e, min);
    } else if (max !== undefined && e > max) {
        e = i ? aT(max, e, i.max) : Math.min(e, max);
    }
    return e;
}
function fs(e, t, s) {
    return {
        min: t !== undefined ? e.min + t : undefined,
        max: s !== undefined ? e.max + s - (e.max - e.min) : undefined
    };
}
function na(layoutBox, { top, left, bottom, right }) {
    return {
        x: fs(layoutBox.x, left, right),
        y: fs(layoutBox.y, top, bottom)
    };
}
function ds(e, t) {
    let min = t.min - e.min;
    let max = t.max - e.max;
    if (t.max - t.min < e.max - e.min) {
        [min, max] = [
            max,
            min
        ];
    }
    return {
        min,
        max
    };
}
function oa(layoutBox, t) {
    return {
        x: ds(layoutBox.x, t.x),
        y: ds(layoutBox.y, t.y)
    };
}
function ra(e, t) {
    let s = 0.5;
    const i = calcLength(e);
    const n = calcLength(t);
    if (n > i) {
        s = progress(t.min, t.max - i, e.min);
    } else if (i > n) {
        s = progress(e.min, e.max - n, t.min);
    }
    return aV(0, 1, s);
}
function aa(e, t) {
    const s = {};
    if (t.min !== undefined) {
        s.min = t.min - e.min;
    }
    if (t.max !== undefined) {
        s.max = t.max - e.min;
    }
    return s;
}
const ue = 0.35;
function la(e = ue) {
    if (e === false) {
        e = 0;
    } else if (e === true) {
        e = ue;
    }
    return {
        x: ps(e, "left", "right"),
        y: ps(e, "top", "bottom")
    };
}
function ps(e, t, s) {
    return {
        min: ms(e, t),
        max: ms(e, s)
    };
}
function ms(e, t) {
    if (typeof e === "number") {
        return e;
    }
    return e[t] || 0;
}
const ua = new WeakMap;
class ca {
    constructor(t){
        this.openDragLock = null;
        this.isDragging = false;
        this.currentDirection = null;
        this.originPoint = {
            x: 0,
            y: 0
        };
        this.constraints = false;
        this.hasMutatedConstraints = false;
        this.elastic = createBox();
        this.latestPointerEvent = null;
        this.latestPanInfo = null;
        this.visualElement = t;
    }
    start(t, { snapToCursor = false, distanceThreshold } = {}) {
        const { presenceContext } = this.visualElement;
        if (presenceContext && presenceContext.isPresent === false) {
            return;
        }
        const onSessionStart = (h)=>{
            const { dragSnapToOrigin } = this.getProps();
            if (dragSnapToOrigin) {
                this.pauseAnimation();
            } else {
                this.stopAnimation();
            }
            if (snapToCursor) {
                this.snapToCursor(yt(h).point);
            }
        };
        const onStart = (h, f)=>{
            const { drag, dragPropagation, onDragStart } = this.getProps();
            if (drag && !dragPropagation && (this.openDragLock && this.openDragLock(), this.openDragLock = setDragLock(drag), !this.openDragLock)) {
                return;
            }
            this.latestPointerEvent = h;
            this.latestPanInfo = f;
            this.isDragging = true;
            this.currentDirection = null;
            this.resolveConstraints();
            if (this.visualElement.projection) {
                this.visualElement.projection.isAnimationBlocked = true;
                this.visualElement.projection.target = undefined;
            }
            j((p)=>{
                let x = this.getAxisMotionValue(p).get() || 0;
                if (aY.test(x)) {
                    const { projection } = this.visualElement;
                    if (projection && projection.layout) {
                        const A = projection.layout.layoutBox[p];
                        if (A) {
                            x = calcLength(A) * (parseFloat(x) / 100);
                        }
                    }
                }
                this.originPoint[p] = x;
            });
            if (onDragStart) {
                schedule.postRender(()=>onDragStart(h, f));
            }
            ae(this.visualElement, "transform");
            const { animationState } = this.visualElement;
            if (animationState) {
                animationState.setActive("whileDrag", true);
            }
        };
        const onMove = (h, f)=>{
            this.latestPointerEvent = h;
            this.latestPanInfo = f;
            const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
            if (!dragPropagation && !this.openDragLock) {
                return;
            }
            const { offset } = f;
            if (dragDirectionLock && this.currentDirection === null) {
                this.currentDirection = ha(offset);
                if (this.currentDirection !== null && onDirectionLock) {
                    onDirectionLock(this.currentDirection);
                }
                return;
            }
            this.updateAxis("x", f.point, offset);
            this.updateAxis("y", f.point, offset);
            this.visualElement.render();
            if (onDrag) {
                onDrag(h, f);
            }
        };
        const onSessionEnd = (h, f)=>{
            this.latestPointerEvent = h;
            this.latestPanInfo = f;
            this.stop(h, f);
            this.latestPointerEvent = null;
            this.latestPanInfo = null;
        };
        const resumeAnimation = ()=>j((h)=>this.getAnimationState(h) === "paused" && this.getAxisMotionValue(h).animation?.play());
        const { dragSnapToOrigin } = this.getProps();
        this.panSession = new zi(t, {
            onSessionStart,
            onStart,
            onMove,
            onSessionEnd,
            resumeAnimation
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin,
            distanceThreshold,
            contextWindow: $i(this.visualElement)
        });
    }
    stop(t, s) {
        const i = t || this.latestPointerEvent;
        const n = s || this.latestPanInfo;
        const isDragging = this.isDragging;
        this.cancel();
        if (!isDragging || !n || !i) {
            return;
        }
        const { velocity } = n;
        this.startAnimation(velocity);
        const { onDragEnd } = this.getProps();
        if (onDragEnd) {
            schedule.postRender(()=>onDragEnd(i, n));
        }
    }
    cancel() {
        this.isDragging = false;
        const { projection, animationState } = this.visualElement;
        if (projection) {
            projection.isAnimationBlocked = false;
        }
        if (this.panSession) {
            this.panSession.end();
        }
        this.panSession = undefined;
        const { dragPropagation } = this.getProps();
        if (!dragPropagation && this.openDragLock) {
            this.openDragLock();
            this.openDragLock = null;
        }
        if (animationState) {
            animationState.setActive("whileDrag", false);
        }
    }
    updateAxis(t, s, i) {
        const { drag } = this.getProps();
        if (!i || !xt(t, drag, this.currentDirection)) {
            return;
        }
        const r = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + i[t];
        if (this.constraints && this.constraints[t]) {
            o = ia(o, this.constraints[t], this.elastic[t]);
        }
        r.set(o);
    }
    resolveConstraints() {
        const { dragConstraints, dragElastic } = this.getProps();
        const i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout;
        const constraints = this.constraints;
        dragConstraints && bk(dragConstraints) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : dragConstraints && i ? this.constraints = na(i.layoutBox, dragConstraints) : this.constraints = false;
        this.elastic = la(dragElastic);
        if (constraints !== this.constraints && i && this.constraints && !this.hasMutatedConstraints) {
            j((r)=>{
                if (this.constraints !== false && this.getAxisMotionValue(r)) {
                    this.constraints[r] = aa(i.layoutBox[r], this.constraints[r]);
                }
            });
        }
    }
    resolveRefConstraints() {
        const { dragConstraints, onMeasureDragConstraints } = this.getProps();
        if (!dragConstraints || !bk(dragConstraints)) {
            return false;
        }
        const dragConstraints_current = dragConstraints.current;
        const { projection } = this.visualElement;
        if (!projection || !projection.layout) {
            return false;
        }
        const r = dr(dragConstraints_current, projection.root, this.visualElement.getTransformPagePoint());
        let o = oa(projection.layout.layoutBox, r);
        if (onMeasureDragConstraints) {
            const a = onMeasureDragConstraints(cr(o));
            this.hasMutatedConstraints = !!a;
            if (a) {
                o = Ri(a);
            }
        }
        return o;
    }
    startAnimation(t) {
        const { drag, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
        const l = this.constraints || {};
        const c = j((u)=>{
            if (!xt(u, drag, this.currentDirection)) {
                return;
            }
            let h = l && l[u] || {};
            if (dragSnapToOrigin) {
                h = {
                    min: 0,
                    max: 0
                };
            }
            const bounceStiffness = dragElastic ? 200 : 1000000;
            const bounceDamping = dragElastic ? 40 : 10000000;
            const m = {
                type: "inertia",
                velocity: dragMomentum ? t[u] : 0,
                bounceStiffness,
                bounceDamping,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...dragTransition,
                ...h
            };
            return this.startAxisValueAnimation(u, m);
        });
        return Promise.all(c).then(onDragTransitionEnd);
    }
    startAxisValueAnimation(t, s) {
        const i = this.getAxisMotionValue(t);
        ae(this.visualElement, t);
        return i.start(Me(t, i, 0, s, this.visualElement, false));
    }
    stopAnimation() {
        j((t)=>this.getAxisMotionValue(t).stop());
    }
    pauseAnimation() {
        j((t)=>this.getAxisMotionValue(t).animation?.pause());
    }
    getAnimationState(t) {
        return this.getAxisMotionValue(t).animation?.state;
    }
    getAxisMotionValue(t) {
        const s = `_drag${t.toUpperCase()}`;
        const i = this.visualElement.getProps();
        const n = i[s];
        return n || this.visualElement.getValue(t, (i.initial ? i.initial[t] : undefined) || 0);
    }
    snapToCursor(t) {
        j((s)=>{
            const { drag } = this.getProps();
            if (!xt(s, drag, this.currentDirection)) {
                return;
            }
            const { projection } = this.visualElement;
            const r = this.getAxisMotionValue(s);
            if (projection && projection.layout) {
                const { min, max } = projection.layout.layoutBox[s];
                r.set(t[s] - aT(min, max, 0.5));
            }
        });
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) {
            return;
        }
        const { drag, dragConstraints } = this.getProps();
        const { projection } = this.visualElement;
        if (!bk(dragConstraints) || !projection || !this.constraints) {
            return;
        }
        this.stopAnimation();
        const n = {
            x: 0,
            y: 0
        };
        j((o)=>{
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== false) {
                const l = a.get();
                n[o] = ra({
                    min: l,
                    max: l
                }, this.constraints[o]);
            }
        });
        const { transformTemplate } = this.visualElement.getProps();
        this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
        if (projection.root) {
            projection.root.updateScroll();
        }
        projection.updateLayout();
        this.resolveConstraints();
        j((o)=>{
            if (!xt(o, drag, null)) {
                return;
            }
            const a = this.getAxisMotionValue(o);
            const { min, max } = this.constraints[o];
            a.set(aT(min, max, n[o]));
        });
    }
    addListeners() {
        if (!this.visualElement.current) {
            return;
        }
        ua.set(this.visualElement, this);
        const current = this.visualElement.current;
        const s = addPointerEvent(current, "pointerdown", (l)=>{
            const { drag, dragListener = true } = this.getProps();
            if (drag && dragListener) {
                this.start(l);
            }
        });
        const i = ()=>{
            const { dragConstraints } = this.getProps();
            if (bk(dragConstraints) && dragConstraints.current) {
                this.constraints = this.resolveRefConstraints();
            }
        };
        const { projection } = this.visualElement;
        const r = projection.addEventListener("measure", i);
        if (projection && !projection.layout) {
            if (projection.root) {
                projection.root.updateScroll();
            }
            projection.updateLayout();
        }
        schedule.read(i);
        const o = pt(window, "resize", ()=>this.scalePositionWithinConstraints());
        const a = projection.addEventListener("didUpdate", ({ delta, hasLayoutChanged })=>{
            if (this.isDragging && hasLayoutChanged) {
                j((u)=>{
                    const h = this.getAxisMotionValue(u);
                    if (h) {
                        this.originPoint[u] += delta[u].translate;
                        h.set(h.get() + delta[u].translate);
                    }
                });
                this.visualElement.render();
            }
        });
        return ()=>{
            o();
            s();
            r();
            if (a) {
                a();
            }
        };
    }
    getProps() {
        const t = this.visualElement.getProps();
        const { drag = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = ue, dragMomentum = true } = t;
        return {
            ...t,
            drag,
            dragDirectionLock,
            dragPropagation,
            dragConstraints,
            dragElastic,
            dragMomentum
        };
    }
}
function xt(e, drag, s) {
    return (drag === true || drag === e) && (s === null || s === e);
}
function ha(offset, t = 10) {
    let s = null;
    if (Math.abs(offset.y) > t) {
        s = "y";
    } else if (Math.abs(offset.x) > t) {
        s = "x";
    }
    return s;
}
class fa extends z {
    constructor(t){
        super(t);
        this.removeGroupControls = noop;
        this.removeListeners = noop;
        this.controls = new ca(t);
    }
    mount() {
        const { dragControls } = this.node.getProps();
        if (dragControls) {
            this.removeGroupControls = dragControls.subscribe(this.controls);
        }
        this.removeListeners = this.controls.addListeners() || noop;
    }
    update() {
        const { dragControls } = this.node.getProps();
        const { dragControls: dragControls_1 } = this.node.prevProps || {};
        if (dragControls !== dragControls_1) {
            this.removeGroupControls();
            if (dragControls) {
                this.removeGroupControls = dragControls.subscribe(this.controls);
            }
        }
    }
    unmount() {
        this.removeGroupControls();
        this.removeListeners();
    }
}
const gs = (e)=>(t, s)=>{
        if (e) {
            schedule.postRender(()=>e(t, s));
        }
    };
class da extends z {
    constructor(){
        super(...arguments);
        this.removePointerDownListener = noop;
    }
    onPointerDown(t) {
        this.session = new zi(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: $i(this.node)
        });
    }
    createPanHandlers() {
        const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
        return {
            onSessionStart: gs(onPanSessionStart),
            onStart: gs(onPanStart),
            onMove: onPan,
            onEnd: (r, o)=>{
                delete this.session;
                if (onPanEnd) {
                    schedule.postRender(()=>onPanEnd(r, o));
                }
            }
        };
    }
    mount() {
        this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (t)=>this.onPointerDown(t));
    }
    update() {
        if (this.session) {
            this.session.updateHandlers(this.createPanHandlers());
        }
    }
    unmount() {
        this.removePointerDownListener();
        if (this.session) {
            this.session.end();
        }
    }
}
const Vt = {
    hasAnimatedSinceResize: true,
    hasEverUpdated: false
};
let Nt = false;
class Pa1 extends r.Component {
    static d = 2231271043;
    componentDidMount() {
        const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
        const { projection } = visualElement;
        if (projection) {
            if (layoutGroup.group) {
                layoutGroup.group.add(projection);
            }
            if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
                switchLayoutGroup.register(projection);
            }
            if (Nt) {
                projection.root.didUpdate();
            }
            projection.addEventListener("animationComplete", ()=>{
                this.safeToRemove();
            });
            projection.setOptions({
                ...projection.options,
                onExitComplete: ()=>this.safeToRemove()
            });
        }
        Vt.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(t) {
        const { layoutDependency, visualElement, drag, isPresent } = this.props;
        const { projection } = visualElement;
        if (projection) {
            projection.isPresent = isPresent;
            Nt = true;
            if (drag || t.layoutDependency !== layoutDependency || layoutDependency === undefined || t.isPresent !== isPresent) {
                projection.willUpdate();
            } else {
                this.safeToRemove();
            }
            t.isPresent !== isPresent && (isPresent ? projection.promote() : projection.relegate() || schedule.postRender(()=>{
                const a = projection.getStack();
                if (!a || !a.members.length) {
                    this.safeToRemove();
                }
            }));
        }
        return null;
    }
    componentDidUpdate() {
        const { projection } = this.props.visualElement;
        if (projection) {
            projection.root.didUpdate();
            schedule_1.postRender(()=>{
                if (!projection.currentAnimation && projection.isLead()) {
                    this.safeToRemove();
                }
            });
        }
    }
    componentWillUnmount() {
        const { visualElement, layoutGroup, switchLayoutGroup } = this.props;
        const { projection } = visualElement;
        Nt = true;
        if (projection) {
            projection.scheduleCheckAfterUnmount();
            if (layoutGroup && layoutGroup.group) {
                layoutGroup.group.remove(projection);
            }
            if (switchLayoutGroup && switchLayoutGroup.deregister) {
                switchLayoutGroup.deregister(projection);
            }
        }
    }
    safeToRemove() {
        const { safeToRemove } = this.props;
        if (safeToRemove) {
            safeToRemove();
        }
    }
    render() {
        return null;
    }
}
function EeComponent(e) {
    Reflect.set(EeComponent, "d", 4040145168);
    const [isPresent, safeToRemove] = bl();
    const layoutGroup = r.useContext(bm);
    return <Pa1 {...e} layoutGroup={layoutGroup} switchLayoutGroup={r.useContext(bn)} isPresent={isPresent} safeToRemove={safeToRemove}/>;
}
function ma(e, t, s) {
    const i = b2(e) ? e : motionValue(e);
    i.start(Me("", i, t, s));
    return i.animation;
}
const ga = (e, t)=>e.depth - t.depth;
class ya {
    constructor(){
        this.children = [];
        this.isDirty = false;
    }
    add(t) {
        addUniqueItem(this.children, t);
        this.isDirty = true;
    }
    remove(t) {
        removeItem(this.children, t);
        this.isDirty = true;
    }
    forEach(t) {
        if (this.isDirty) {
            this.children.sort(ga);
        }
        this.isDirty = false;
        this.children.forEach(t);
    }
}
export function delay(e, t) {
    const s = time.now();
    const i = ({ timestamp })=>{
        const r = timestamp - s;
        if (r >= t) {
            cancel(i);
            e(r - t);
        }
    };
    schedule.setup(i, true);
    return ()=>cancel(i);
}
const Xi = [
    "TopLeft",
    "TopRight",
    "BottomLeft",
    "BottomRight"
];
const Xi_length = Xi.length;
const ys = (e)=>{
    if (typeof e === "string") {
        return parseFloat(e);
    }
    return e;
};
const vs = (e)=>typeof e === "number" || aW.test(e);
function xa(e, t, latestValues, i, n, r) {
    if (n) {
        e.opacity = aT(0, latestValues.opacity ?? 1, Pa(i));
        e.opacityExit = aT(t.opacity ?? 1, 0, Aa(i));
    } else if (r) {
        e.opacity = aT(t.opacity ?? 1, latestValues.opacity ?? 1, i);
    }
    for(let o = 0; o < Xi_length; o++){
        const a = `border${Xi[o]}Radius`;
        let l = Ts(t, a);
        let c = Ts(latestValues, a);
        if (l === undefined && c === undefined) {
            continue;
        }
        if (!l) {
            l = 0;
        }
        if (!c) {
            c = 0;
        }
        if (l === 0 || c === 0 || vs(l) === vs(c)) {
            e[a] = Math.max(aT(ys(l), ys(c), i), 0);
            if (aY.test(c) || aY.test(l)) {
                e[a] += "%";
            }
        } else {
            e[a] = c;
        }
    }
    if (t.rotate || latestValues.rotate) {
        e.rotate = aT(t.rotate || 0, latestValues.rotate || 0, i);
    }
}
function Ts(e, t) {
    if (e[t] !== undefined) {
        return e[t];
    }
    return e.borderRadius;
}
const Pa = Yi(0, 0.5, circOut);
const Aa = Yi(0.5, 0.95, noop);
function Yi(e, t, s) {
    return (i)=>{
        if (i < e) {
            return 0;
        }
        if (i > t) {
            return 1;
        }
        return s(progress(e, t, i));
    };
}
function xs(e, t) {
    e.min = t.min;
    e.max = t.max;
}
function N(e, t) {
    xs(e.x, t.x);
    xs(e.y, t.y);
}
function Ps(e, t) {
    e.translate = t.translate;
    e.scale = t.scale;
    e.originPoint = t.originPoint;
    e.origin = t.origin;
}
function As(e, t, s, i, scale) {
    e -= t;
    e = Ct(e, 1 / s, i);
    if (scale !== undefined) {
        e = Ct(e, 1 / scale, i);
    }
    return e;
}
function Va(e, t = 0, s = 1, i = 0.5, scale, r = e, o = e) {
    if (aY.test(t)) {
        t = parseFloat(t);
        t = aT(o.min, o.max, t / 100) - o.min;
    }
    if (typeof t !== "number") {
        return;
    }
    let a = aT(r.min, r.max, i);
    if (e === r) {
        a -= t;
    }
    e.min = As(e.min, t, s, a, scale);
    e.max = As(e.max, t, s, a, scale);
}
function Vs(e, latestValues, [s, i, n], r, o) {
    Va(e, latestValues[s], latestValues[i], latestValues[n], latestValues.scale, r, o);
}
const Sa = [
    "x",
    "scaleX",
    "originX"
];
const ba = [
    "y",
    "scaleY",
    "originY"
];
function Ss(e, latestValues, s, i) {
    Vs(e.x, latestValues, Sa, s ? s.x : undefined, i ? i.x : undefined);
    Vs(e.y, latestValues, ba, s ? s.y : undefined, i ? i.y : undefined);
}
function bs(e) {
    return e.translate === 0 && e.scale === 1;
}
function qi(e) {
    return bs(e.x) && bs(e.y);
}
function Ds(e, t) {
    return e.min === t.min && e.max === t.max;
}
function Da(relativeTarget, t) {
    return Ds(relativeTarget.x, t.x) && Ds(relativeTarget.y, t.y);
}
function ws(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Zi(e, t) {
    return ws(e.x, t.x) && ws(e.y, t.y);
}
function Cs(e) {
    return calcLength(e.x) / calcLength(e.y);
}
function Ms(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class wa {
    constructor(){
        this.members = [];
    }
    add(t) {
        addUniqueItem(this.members, t);
        t.scheduleRender();
    }
    remove(t) {
        removeItem(this.members, t);
        if (t === this.prevLead) {
            this.prevLead = undefined;
        }
        if (t === this.lead) {
            const s = this.members[this.members.length - 1];
            if (s) {
                this.promote(s);
            }
        }
    }
    relegate(t) {
        const s = this.members.findIndex((n)=>t === n);
        if (s === 0) {
            return false;
        }
        let i;
        for(let n = s; n >= 0; n--){
            const r = this.members[n];
            if (r.isPresent !== false) {
                i = r;
                break;
            }
        }
        if (i) {
            this.promote(i);
            return true;
        }
        return false;
    }
    promote(t, s) {
        const lead = this.lead;
        if (t !== lead && (this.prevLead = lead, this.lead = t, t.show(), lead)) {
            if (lead.instance) {
                lead.scheduleRender();
            }
            t.scheduleRender();
            t.resumeFrom = lead;
            if (s) {
                t.resumeFrom.preserveOpacity = true;
            }
            if (lead.snapshot) {
                t.snapshot = lead.snapshot;
                t.snapshot.latestValues = lead.animationValues || lead.latestValues;
            }
            if (t.root && t.root.isUpdating) {
                t.isLayoutDirty = true;
            }
            const { crossfade } = t.options;
            if (crossfade === false) {
                lead.hide();
            }
        }
    }
    exitAnimationComplete() {
        this.members.forEach(({ options, resumingFrom })=>{
            if (options.onExitComplete) {
                options.onExitComplete();
            }
            if (resumingFrom && resumingFrom.options.onExitComplete) {
                resumingFrom.options.onExitComplete();
            }
        });
    }
    scheduleRender() {
        this.members.forEach((t)=>{
            if (t.instance) {
                t.scheduleRender(false);
            }
        });
    }
    removeLeadSnapshot() {
        if (this.lead && this.lead.snapshot) {
            this.lead.snapshot = undefined;
        }
    }
}
function Ca(projectionDeltaWithTransform, treeScale, s) {
    let i = "";
    const n = projectionDeltaWithTransform.x.translate / treeScale.x;
    const r = projectionDeltaWithTransform.y.translate / treeScale.y;
    const o = s?.z || 0;
    if (n || r || o) {
        i = `translate3d(${n}px, ${r}px, ${o}px) `;
    }
    if (treeScale.x !== 1 || treeScale.y !== 1) {
        i += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    }
    if (s) {
        const { transformPerspective, rotate, rotateX, rotateY, skewX, skewY } = s;
        if (transformPerspective) {
            i = `perspective(${transformPerspective}px) ${i}`;
        }
        if (rotate) {
            i += `rotate(${rotate}deg) `;
        }
        if (rotateX) {
            i += `rotateX(${rotateX}deg) `;
        }
        if (rotateY) {
            i += `rotateY(${rotateY}deg) `;
        }
        if (skewX) {
            i += `skewX(${skewX}deg) `;
        }
        if (skewY) {
            i += `skewY(${skewY}deg) `;
        }
    }
    const a = projectionDeltaWithTransform.x.scale * treeScale.x;
    const l = projectionDeltaWithTransform.y.scale * treeScale.y;
    if (a !== 1 || l !== 1) {
        i += `scale(${a}, ${l})`;
    }
    return i || "none";
}
const Kt = [
    "",
    "X",
    "Y",
    "Z"
];
const Ma = 1000;
let Ea = 0;
function Gt(e, visualElement, s, animationValues) {
    const { latestValues } = visualElement;
    if (latestValues[e]) {
        s[e] = latestValues[e];
        visualElement.setStaticValue(e, 0);
        if (animationValues) {
            animationValues[e] = 0;
        }
    }
}
function Ji(e) {
    e.hasCheckedOptimisedAppear = true;
    if (e.root === e) {
        return;
    }
    const { visualElement } = e.options;
    if (!visualElement) {
        return;
    }
    const s = Oi(visualElement);
    if (window.MotionHasOptimisedAnimation(s, "transform")) {
        const { layout, layoutId } = e.options;
        window.MotionCancelOptimisedAnimation(s, "transform", schedule, !(layout || layoutId));
    }
    const { parent } = e;
    if (parent && !parent.hasCheckedOptimisedAppear) {
        Ji(parent);
    }
}
function Qi({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
    return class {
        constructor(o = {}, a = defaultParent?.()){
            this.id = Ea++;
            this.animationId = 0;
            this.animationCommitId = 0;
            this.children = new Set;
            this.options = {};
            this.isTreeAnimating = false;
            this.isAnimationBlocked = false;
            this.isLayoutDirty = false;
            this.isProjectionDirty = false;
            this.isSharedProjectionDirty = false;
            this.isTransformDirty = false;
            this.updateManuallyBlocked = false;
            this.updateBlockedByResize = false;
            this.isUpdating = false;
            this.isSVG = false;
            this.needsReset = false;
            this.shouldResetTransform = false;
            this.hasCheckedOptimisedAppear = false;
            this.treeScale = {
                x: 1,
                y: 1
            };
            this.eventHandlers = new Map;
            this.hasTreeAnimated = false;
            this.layoutVersion = 0;
            this.updateScheduled = false;
            this.scheduleUpdate = ()=>this.update();
            this.projectionUpdateScheduled = false;
            this.checkUpdateFailed = ()=>{
                if (this.isUpdating) {
                    this.isUpdating = false;
                    this.clearAllSnapshots();
                }
            };
            this.updateProjection = ()=>{
                this.projectionUpdateScheduled = false;
                this.nodes.forEach(ka);
                this.nodes.forEach(ja);
                this.nodes.forEach(Oa);
                this.nodes.forEach(Fa);
            };
            this.resolvedRelativeTargetAt = 0;
            this.linkedParentVersion = 0;
            this.hasProjected = false;
            this.isVisible = true;
            this.animationProgress = 0;
            this.sharedNodes = new Map;
            this.latestValues = o;
            this.root = a ? a.root || a : this;
            this.path = a ? [
                ...a.path,
                a
            ] : [];
            this.parent = a;
            this.depth = a ? a.depth + 1 : 0;
            for(let l = 0; l < this.path.length; l++){
                this.path[l].shouldResetTransform = true;
            }
            if (this.root === this) {
                this.nodes = new ya;
            }
        }
        addEventListener(o, a) {
            if (!this.eventHandlers.has(o)) {
                this.eventHandlers.set(o, new SubscriptionManager);
            }
            return this.eventHandlers.get(o).add(a);
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            if (l) {
                l.notify(...a);
            }
        }
        hasListeners(o) {
            return this.eventHandlers.has(o);
        }
        mount(o) {
            if (this.instance) {
                return;
            }
            this.isSVG = isSVGElement(o) && !isSVGSVGElement(o);
            this.instance = o;
            const { layoutId, layout, visualElement } = this.options;
            if (visualElement && !visualElement.current) {
                visualElement.mount(o);
            }
            this.root.nodes.add(this);
            if (this.parent) {
                this.parent.children.add(this);
            }
            if (this.root.hasTreeAnimated && (layout || layoutId)) {
                this.isLayoutDirty = true;
            }
            if (attachResizeListener) {
                let u;
                let h = 0;
                const f = ()=>this.root.updateBlockedByResize = false;
                schedule.read(()=>{
                    h = window.innerWidth;
                });
                attachResizeListener(o, ()=>{
                    const window_innerWidth = window.innerWidth;
                    if (window_innerWidth !== h) {
                        h = window_innerWidth;
                        this.root.updateBlockedByResize = true;
                        if (u) {
                            u();
                        }
                        u = delay(f, 250);
                        if (Vt.hasAnimatedSinceResize) {
                            Vt.hasAnimatedSinceResize = false;
                            this.nodes.forEach(Ls);
                        }
                    }
                });
            }
            if (layoutId) {
                this.root.registerSharedNode(layoutId, this);
            }
            if (this.options.animate !== false && visualElement && (layoutId || layout)) {
                this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout })=>{
                    if (this.isTreeAnimationBlocked()) {
                        this.target = undefined;
                        this.relativeTarget = undefined;
                        return;
                    }
                    const m = this.options.transition || visualElement.getDefaultTransition() || Wa;
                    const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
                    const p = !this.targetLayout || !Zi(this.targetLayout, layout);
                    const x = !hasLayoutChanged && hasRelativeLayoutChanged;
                    if (this.options.layoutRoot || this.resumeFrom || x || hasLayoutChanged && (p || !this.currentAnimation)) {
                        if (this.resumeFrom) {
                            this.resumingFrom = this.resumeFrom;
                            this.resumingFrom.resumingFrom = undefined;
                        }
                        const g = {
                            ...getValueTransition(m, "layout"),
                            onPlay: onLayoutAnimationStart,
                            onComplete: onLayoutAnimationComplete
                        };
                        if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
                            g.delay = 0;
                            g.type = false;
                        }
                        this.startAnimation(g);
                        this.setAnimationOrigin(delta, x);
                    } else {
                        if (!hasLayoutChanged) {
                            Ls(this);
                        }
                        if (this.isLead() && this.options.onExitComplete) {
                            this.options.onExitComplete();
                        }
                    }
                    this.targetLayout = layout;
                });
            }
        }
        unmount() {
            if (this.options.layoutId) {
                this.willUpdate();
            }
            this.root.nodes.remove(this);
            const o = this.getStack();
            if (o) {
                o.remove(this);
            }
            if (this.parent) {
                this.parent.children.delete(this);
            }
            this.instance = undefined;
            this.eventHandlers.clear();
            cancel(this.updateProjection);
        }
        blockUpdate() {
            this.updateManuallyBlocked = true;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = false;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
        }
        startUpdate() {
            if (!this.isUpdateBlocked()) {
                this.isUpdating = true;
                if (this.nodes) {
                    this.nodes.forEach(Ua);
                }
                this.animationId++;
            }
        }
        getTransformTemplate() {
            const { visualElement } = this.options;
            return visualElement && visualElement.getProps().transformTemplate;
        }
        willUpdate(o = true) {
            this.root.hasTreeAnimated = true;
            if (this.root.isUpdateBlocked()) {
                if (this.options.onExitComplete) {
                    this.options.onExitComplete();
                }
                return;
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
                Ji(this);
            }
            if (!this.root.isUpdating) {
                this.root.startUpdate();
            }
            if (this.isLayoutDirty) {
                return;
            }
            this.isLayoutDirty = true;
            for(let u = 0; u < this.path.length; u++){
                const h = this.path[u];
                h.shouldResetTransform = true;
                h.updateScroll("snapshot");
                if (h.options.layoutRoot) {
                    h.willUpdate(false);
                }
            }
            const { layoutId, layout } = this.options;
            if (layoutId === undefined && !layout) {
                return;
            }
            const c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : undefined;
            this.updateSnapshot();
            if (o) {
                this.notifyListeners("willUpdate");
            }
        }
        update() {
            this.updateScheduled = false;
            if (this.isUpdateBlocked()) {
                this.unblockUpdate();
                this.clearAllSnapshots();
                this.nodes.forEach(Es);
                return;
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Rs);
                return;
            }
            this.animationCommitId = this.animationId;
            if (this.isUpdating) {
                this.isUpdating = false;
                this.nodes.forEach(Ia);
                this.nodes.forEach(Ra);
                this.nodes.forEach(La);
            } else {
                this.nodes.forEach(Rs);
            }
            this.clearAllSnapshots();
            const a = time.now();
            state.delta = aV(0, 1000 / 60, a - state.timestamp);
            state.timestamp = a;
            state.isProcessing = true;
            steps.update.process(state);
            steps.preRender.process(state);
            steps.render.process(state);
            state.isProcessing = false;
        }
        didUpdate() {
            if (!this.updateScheduled) {
                this.updateScheduled = true;
                schedule_1.read(this.scheduleUpdate);
            }
        }
        clearAllSnapshots() {
            this.nodes.forEach(Ba);
            this.sharedNodes.forEach(Na);
        }
        scheduleUpdateProjection() {
            if (!this.projectionUpdateScheduled) {
                this.projectionUpdateScheduled = true;
                schedule.preRender(this.updateProjection, false, true);
            }
        }
        scheduleCheckAfterUnmount() {
            schedule.postRender(()=>{
                if (this.isLayoutDirty) {
                    this.root.didUpdate();
                } else {
                    this.root.checkUpdateFailed();
                }
            });
        }
        updateSnapshot() {
            if (!(this.snapshot || !this.instance)) {
                this.snapshot = this.measure();
                if (this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y)) {
                    this.snapshot = undefined;
                }
            }
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) {
                return;
            }
            if (this.resumeFrom && !this.resumeFrom.instance) {
                for(let l = 0; l < this.path.length; l++){
                    this.path[l].updateScroll();
                }
            }
            const layout = this.layout;
            this.layout = this.measure(false);
            this.layoutVersion++;
            this.layoutCorrected = createBox();
            this.isLayoutDirty = false;
            this.projectionDelta = undefined;
            this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement } = this.options;
            if (visualElement) {
                visualElement.notify("LayoutMeasure", this.layout.layoutBox, layout ? layout.layoutBox : undefined);
            }
        }
        updateScroll(phase = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
                a = false;
            }
            if (a && this.instance) {
                const isRoot = checkIsScrollRoot(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase,
                    isRoot,
                    offset: measureScroll(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : isRoot
                };
            }
        }
        resetTransform() {
            if (!resetTransform) {
                return;
            }
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
            const a = this.projectionDelta && !qi(this.projectionDelta);
            const l = this.getTransformTemplate();
            const c = l ? l(this.latestValues, "") : undefined;
            const u = c !== this.prevTransformTemplateValue;
            if (o && this.instance && (a || Y(this.latestValues) || u)) {
                resetTransform(this.instance, c);
                this.shouldResetTransform = false;
                this.scheduleRender();
            }
        }
        measure(o = true) {
            const measuredBox = this.measurePageBox();
            let layoutBox = this.removeElementScroll(measuredBox);
            if (o) {
                layoutBox = this.removeTransform(layoutBox);
            }
            _a(layoutBox);
            return {
                animationId: this.root.animationId,
                measuredBox,
                layoutBox,
                latestValues: {},
                source: this.id
            };
        }
        measurePageBox() {
            const { visualElement } = this.options;
            if (!visualElement) {
                return createBox();
            }
            const a = visualElement.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some($a))) {
                const { scroll } = this.root;
                if (scroll) {
                    st(a.x, scroll.offset.x);
                    st(a.y, scroll.offset.y);
                }
            }
            return a;
        }
        removeElementScroll(o) {
            const a = createBox();
            N(a, o);
            if (this.scroll?.wasRoot) {
                return a;
            }
            for(let l = 0; l < this.path.length; l++){
                const c = this.path[l];
                const { scroll, options } = c;
                if (c !== this.root && scroll && options.layoutScroll) {
                    if (scroll.wasRoot) {
                        N(a, o);
                    }
                    st(a.x, scroll.offset.x);
                    st(a.y, scroll.offset.y);
                }
            }
            return a;
        }
        applyTransform(o, a = false) {
            const l = createBox();
            N(l, o);
            for(let c = 0; c < this.path.length; c++){
                const u = this.path[c];
                if (!a && u.options.layoutScroll && u.scroll && u !== u.root) {
                    it(l, {
                        x: -u.scroll.offset.x,
                        y: -u.scroll.offset.y
                    });
                }
                if (Y(u.latestValues)) {
                    it(l, u.latestValues);
                }
            }
            if (Y(this.latestValues)) {
                it(l, this.latestValues);
            }
            return l;
        }
        removeTransform(o) {
            const a = createBox();
            N(a, o);
            for(let l = 0; l < this.path.length; l++){
                const c = this.path[l];
                if (!c.instance || !Y(c.latestValues)) {
                    continue;
                }
                if (ne(c.latestValues)) {
                    c.updateSnapshot();
                }
                const u = createBox();
                const h = c.measurePageBox();
                N(u, h);
                Ss(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : undefined, u);
            }
            if (Y(this.latestValues)) {
                Ss(a, this.latestValues);
            }
            return a;
        }
        setTargetDelta(o) {
            this.targetDelta = o;
            this.root.scheduleUpdateProjection();
            this.isProjectionDirty = true;
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== undefined ? o.crossfade : true
            };
        }
        clearMeasurements() {
            this.scroll = undefined;
            this.layout = undefined;
            this.snapshot = undefined;
            this.prevTransformTemplateValue = undefined;
            this.targetDelta = undefined;
            this.target = undefined;
            this.isLayoutDirty = false;
        }
        forceRelativeParentToResolveTarget() {
            if (this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== state.timestamp) {
                this.relativeParent.resolveTargetDelta(true);
            }
        }
        resolveTargetDelta(o = false) {
            const a = this.getLead();
            if (!this.isProjectionDirty) {
                this.isProjectionDirty = a.isProjectionDirty;
            }
            if (!this.isTransformDirty) {
                this.isTransformDirty = a.isTransformDirty;
            }
            if (!this.isSharedProjectionDirty) {
                this.isSharedProjectionDirty = a.isSharedProjectionDirty;
            }
            const l = !!this.resumingFrom || this !== a;
            if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) {
                return;
            }
            const { layout, layoutId } = this.options;
            if (!this.layout || !(layout || layoutId)) {
                return;
            }
            this.resolvedRelativeTargetAt = state.timestamp;
            const f = this.getClosestProjectingParent();
            if (f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot) {
                this.removeRelativeTarget();
            }
            !this.targetDelta && !this.relativeTarget && (f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget());
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = createBox(), this.targetWithTransforms = createBox()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Qr(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : N(this.target, this.layout.layoutBox), ki(this.target, this.targetDelta)) : N(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = false, f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = undefined));
        }
        getClosestProjectingParent() {
            if (!(!this.parent || ne(this.parent.latestValues) || Li(this.parent.latestValues))) {
                if (this.parent.isProjecting()) {
                    return this.parent;
                }
                return this.parent.getClosestProjectingParent();
            }
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
        }
        createRelativeTarget(o, a, l) {
            this.relativeParent = o;
            this.linkedParentVersion = o.layoutVersion;
            this.forceRelativeParentToResolveTarget();
            this.relativeTarget = createBox();
            this.relativeTargetOrigin = createBox();
            Mt(this.relativeTargetOrigin, a, l);
            N(this.relativeTarget, this.relativeTargetOrigin);
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = undefined;
        }
        calcProjection() {
            const o = this.getLead();
            const a = !!this.resumingFrom || this !== o;
            let l = true;
            if (this.isProjectionDirty || this.parent?.isProjectionDirty) {
                l = false;
            }
            if (a && (this.isSharedProjectionDirty || this.isTransformDirty)) {
                l = false;
            }
            if (this.resolvedRelativeTargetAt === state.timestamp) {
                l = false;
            }
            if (l) {
                return;
            }
            const { layout, layoutId } = this.options;
            this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
            if (!this.isTreeAnimating) {
                this.targetDelta = this.relativeTarget = undefined;
            }
            if (!this.layout || !(layout || layoutId)) {
                return;
            }
            N(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x;
            const f = this.treeScale.y;
            fr(this.layoutCorrected, this.treeScale, this.path, a);
            if (o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
                o.target = o.layout.layoutBox;
                o.targetWithTransforms = createBox();
            }
            const { target } = o;
            if (!target) {
                if (this.prevProjectionDelta) {
                    this.createProjectionDeltas();
                    this.scheduleRender();
                }
                return;
            }
            if (!this.projectionDelta || !this.prevProjectionDelta) {
                this.createProjectionDeltas();
            } else {
                Ps(this.prevProjectionDelta.x, this.projectionDelta.x);
                Ps(this.prevProjectionDelta.y, this.projectionDelta.y);
            }
            ht(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
            if (this.treeScale.x !== h || this.treeScale.y !== f || !Ms(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ms(this.projectionDelta.y, this.prevProjectionDelta.y)) {
                this.hasProjected = true;
                this.scheduleRender();
                this.notifyListeners("projectionUpdate", target);
            }
        }
        hide() {
            this.isVisible = false;
        }
        show() {
            this.isVisible = true;
        }
        scheduleRender(o = true) {
            this.options.visualElement?.scheduleRender();
            if (o) {
                const a = this.getStack();
                if (a) {
                    a.scheduleRender();
                }
            }
            if (this.resumingFrom && !this.resumingFrom.instance) {
                this.resumingFrom = undefined;
            }
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = nt();
            this.projectionDelta = nt();
            this.projectionDeltaWithTransform = nt();
        }
        setAnimationOrigin(o, a = false) {
            const snapshot = this.snapshot;
            const c = snapshot ? snapshot.latestValues : {};
            const u = {
                ...this.latestValues
            };
            const h = nt();
            if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
                this.relativeTarget = this.relativeTargetOrigin = undefined;
            }
            this.attemptToResolveRelativeTarget = !a;
            const f = createBox();
            const d = snapshot ? snapshot.source : undefined;
            const m = this.layout ? this.layout.source : undefined;
            const v = d !== m;
            const y = this.getStack();
            const p = !y || y.members.length <= 1;
            const x = !!(v && !p && this.options.crossfade === true && !this.path.some(Ga));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = (A)=>{
                const T = A / 1000;
                ks(h.x, o.x, T);
                ks(h.y, o.y, T);
                this.setTargetDelta(h);
                if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                    Mt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
                    Ka(this.relativeTarget, this.relativeTargetOrigin, f, T);
                    if (g && Da(this.relativeTarget, g)) {
                        this.isProjectionDirty = false;
                    }
                    if (!g) {
                        g = createBox();
                    }
                    N(g, this.relativeTarget);
                }
                if (v) {
                    this.animationValues = u;
                    xa(u, c, this.latestValues, T, x, p);
                }
                this.root.scheduleUpdateProjection();
                this.scheduleRender();
                this.animationProgress = T;
            };
            this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
        }
        startAnimation(o) {
            this.notifyListeners("animationStart");
            this.currentAnimation?.stop();
            this.resumingFrom?.currentAnimation?.stop();
            if (this.pendingAnimation) {
                cancel(this.pendingAnimation);
                this.pendingAnimation = undefined;
            }
            this.pendingAnimation = schedule.update(()=>{
                Vt.hasAnimatedSinceResize = true;
                if (!this.motionValue) {
                    this.motionValue = motionValue(0);
                }
                this.currentAnimation = ma(this.motionValue, [
                    0,
                    1000
                ], {
                    ...o,
                    velocity: 0,
                    isSync: true,
                    onUpdate: (a)=>{
                        this.mixTargetDelta(a);
                        if (o.onUpdate) {
                            o.onUpdate(a);
                        }
                    },
                    onStop: ()=>{},
                    onComplete: ()=>{
                        if (o.onComplete) {
                            o.onComplete();
                        }
                        this.completeAnimation();
                    }
                });
                if (this.resumingFrom) {
                    this.resumingFrom.currentAnimation = this.currentAnimation;
                }
                this.pendingAnimation = undefined;
            });
        }
        completeAnimation() {
            if (this.resumingFrom) {
                this.resumingFrom.currentAnimation = undefined;
                this.resumingFrom.preserveOpacity = undefined;
            }
            const o = this.getStack();
            if (o) {
                o.exitAnimationComplete();
            }
            this.resumingFrom = this.currentAnimation = this.animationValues = undefined;
            this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            if (this.currentAnimation) {
                if (this.mixTargetDelta) {
                    this.mixTargetDelta(Ma);
                }
                this.currentAnimation.stop();
            }
            this.completeAnimation();
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let { targetWithTransforms, target, layout, latestValues } = o;
            if (!(!targetWithTransforms || !target || !layout)) {
                if (this !== o && this.layout && layout && tn(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
                    target = this.target || createBox();
                    const h = calcLength(this.layout.layoutBox.x);
                    target.x.min = o.target.x.min;
                    target.x.max = target.x.min + h;
                    const f = calcLength(this.layout.layoutBox.y);
                    target.y.min = o.target.y.min;
                    target.y.max = target.y.min + f;
                }
                N(targetWithTransforms, target);
                it(targetWithTransforms, latestValues);
                ht(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
            }
        }
        registerSharedNode(o, a) {
            if (!this.sharedNodes.has(o)) {
                this.sharedNodes.set(o, new wa);
            }
            this.sharedNodes.get(o).add(a);
            const initialPromotionConfig = a.options.initialPromotionConfig;
            a.promote({
                transition: initialPromotionConfig ? initialPromotionConfig.transition : undefined,
                preserveFollowOpacity: initialPromotionConfig && initialPromotionConfig.shouldPreserveFollowOpacity ? initialPromotionConfig.shouldPreserveFollowOpacity(a) : undefined
            });
        }
        isLead() {
            const o = this.getStack();
            if (o) {
                return o.lead === this;
            }
            return true;
        }
        getLead() {
            const { layoutId } = this.options;
            if (layoutId) {
                return this.getStack()?.lead || this;
            }
            return this;
        }
        getPrevLead() {
            const { layoutId } = this.options;
            if (layoutId) {
                return this.getStack()?.prevLead;
            }
        }
        getStack() {
            const { layoutId } = this.options;
            if (layoutId) {
                return this.root.sharedNodes.get(layoutId);
            }
        }
        promote({ needsReset, transition, preserveFollowOpacity } = {}) {
            const c = this.getStack();
            if (c) {
                c.promote(this, preserveFollowOpacity);
            }
            if (needsReset) {
                this.projectionDelta = undefined;
                this.needsReset = true;
            }
            if (transition) {
                this.setOptions({
                    transition
                });
            }
        }
        relegate() {
            const o = this.getStack();
            if (o) {
                return o.relegate(this);
            }
            return false;
        }
        resetSkewAndRotation() {
            const { visualElement } = this.options;
            if (!visualElement) {
                return;
            }
            let a = false;
            const { latestValues } = visualElement;
            if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) {
                a = true;
            }
            if (!a) {
                return;
            }
            const c = {};
            if (latestValues.z) {
                Gt("z", visualElement, c, this.animationValues);
            }
            for(let u = 0; u < Kt.length; u++){
                Gt(`rotate${Kt[u]}`, visualElement, c, this.animationValues);
                Gt(`skew${Kt[u]}`, visualElement, c, this.animationValues);
            }
            visualElement.render();
            for(const u in c){
                visualElement.setStaticValue(u, c[u]);
                if (this.animationValues) {
                    this.animationValues[u] = c[u];
                }
            }
            visualElement.scheduleRender();
        }
        applyProjectionStyles(o, a) {
            if (!this.instance || this.isSVG) {
                return;
            }
            if (!this.isVisible) {
                o.visibility = "hidden";
                return;
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = false;
                o.visibility = "";
                o.opacity = "";
                o.pointerEvents = dq(a?.pointerEvents) || "";
                o.transform = l ? l(this.latestValues, "") : "none";
                return;
            }
            const c = this.getLead();
            if (!this.projectionDelta || !this.layout || !c.target) {
                if (this.options.layoutId) {
                    o.opacity = this.latestValues.opacity !== undefined ? this.latestValues.opacity : 1;
                    o.pointerEvents = dq(a?.pointerEvents) || "";
                }
                if (this.hasProjected && !Y(this.latestValues)) {
                    o.transform = l ? l({}, "") : "none";
                    this.hasProjected = false;
                }
                return;
            }
            o.visibility = "";
            const u = c.animationValues || c.latestValues;
            this.applyTransformsToTarget();
            let h = Ca(this.projectionDeltaWithTransform, this.treeScale, u);
            if (l) {
                h = l(u, h);
            }
            o.transform = h;
            const { x: x_1, y: y_1 } = this.projectionDelta;
            o.transformOrigin = `${x_1.origin * 100}% ${y_1.origin * 100}% 0`;
            if (c.animationValues) {
                o.opacity = c === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit;
            } else {
                o.opacity = c === this ? u.opacity !== undefined ? u.opacity : "" : u.opacityExit !== undefined ? u.opacityExit : 0;
            }
            for(const m in dr_1){
                if (u[m] === undefined) {
                    continue;
                }
                const { correct, applyTo, isCSSVariable } = dr_1[m];
                const x = h === "none" ? u[m] : correct(u[m], c);
                if (applyTo) {
                    const g = applyTo.length;
                    for(let A = 0; A < g; A++){
                        o[applyTo[A]] = x;
                    }
                } else {
                    if (isCSSVariable) {
                        this.options.visualElement.renderState.vars[m] = x;
                    } else {
                        o[m] = x;
                    }
                }
            }
            if (this.options.layoutId) {
                o.pointerEvents = c === this ? dq(a?.pointerEvents) || "" : "none";
            }
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = undefined;
        }
        resetTree() {
            this.root.nodes.forEach((o)=>o.currentAnimation?.stop());
            this.root.nodes.forEach(Es);
            this.root.sharedNodes.clear();
        }
    };
}
function Ra(e) {
    e.updateLayout();
}
function La(e) {
    const snapshot_1 = e.resumeFrom?.snapshot || e.snapshot;
    if (e.isLead() && e.layout && snapshot_1 && e.hasListeners("didUpdate")) {
        const { layoutBox, measuredBox } = e.layout;
        const { animationType } = e.options;
        const r = snapshot_1.source !== e.layout.source;
        if (animationType === "size") {
            j((u)=>{
                const h = r ? snapshot_1.measuredBox[u] : snapshot_1.layoutBox[u];
                const f = calcLength(h);
                h.min = layoutBox[u].min;
                h.max = h.min + f;
            });
        } else if (tn(animationType, snapshot_1.layoutBox, layoutBox)) {
            j((u)=>{
                const h = r ? snapshot_1.measuredBox[u] : snapshot_1.layoutBox[u];
                const f = calcLength(layoutBox[u]);
                h.max = h.min + f;
                if (e.relativeTarget && !e.currentAnimation) {
                    e.isProjectionDirty = true;
                    e.relativeTarget[u].max = e.relativeTarget[u].min + f;
                }
            });
        }
        const layoutDelta = nt();
        ht(layoutDelta, layoutBox, snapshot_1.layoutBox);
        const delta = nt();
        if (r) {
            ht(delta, e.applyTransform(measuredBox, true), snapshot_1.measuredBox);
        } else {
            ht(delta, layoutBox, snapshot_1.layoutBox);
        }
        const hasLayoutChanged = !qi(layoutDelta);
        let hasRelativeLayoutChanged = false;
        if (!e.resumeFrom) {
            const u = e.getClosestProjectingParent();
            if (u && !u.resumeFrom) {
                const { snapshot, layout } = u;
                if (snapshot && layout) {
                    const d = createBox();
                    Mt(d, snapshot_1.layoutBox, snapshot.layoutBox);
                    const m = createBox();
                    Mt(m, layoutBox, layout.layoutBox);
                    if (!Zi(d, m)) {
                        hasRelativeLayoutChanged = true;
                    }
                    if (u.options.layoutRoot) {
                        e.relativeTarget = m;
                        e.relativeTargetOrigin = d;
                        e.relativeParent = u;
                    }
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: layoutBox,
            snapshot: snapshot_1,
            delta,
            layoutDelta,
            hasLayoutChanged,
            hasRelativeLayoutChanged
        });
    } else if (e.isLead()) {
        const { onExitComplete } = e.options;
        if (onExitComplete) {
            onExitComplete();
        }
    }
    e.options.transition = undefined;
}
function ka(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Fa(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = false;
}
function Ba(e) {
    e.clearSnapshot();
}
function Es(e) {
    e.clearMeasurements();
}
function Rs(e) {
    e.isLayoutDirty = false;
}
function Ia(e) {
    const { visualElement } = e.options;
    if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
        visualElement.notify("BeforeLayoutMeasure");
    }
    e.resetTransform();
}
function Ls(e) {
    e.finishAnimation();
    e.targetDelta = e.relativeTarget = e.target = undefined;
    e.isProjectionDirty = true;
}
function ja(e) {
    e.resolveTargetDelta();
}
function Oa(e) {
    e.calcProjection();
}
function Ua(e) {
    e.resetSkewAndRotation();
}
function Na(e) {
    e.removeLeadSnapshot();
}
function ks(e, t, s) {
    e.translate = aT(t.translate, 0, s);
    e.scale = aT(t.scale, 1, s);
    e.origin = t.origin;
    e.originPoint = t.originPoint;
}
function Fs(e, t, s, i) {
    e.min = aT(t.min, s.min, i);
    e.max = aT(t.max, s.max, i);
}
function Ka(relativeTarget, relativeTargetOrigin, s, i) {
    Fs(relativeTarget.x, relativeTargetOrigin.x, s.x, i);
    Fs(relativeTarget.y, relativeTargetOrigin.y, s.y, i);
}
function Ga(e) {
    return e.animationValues && e.animationValues.opacityExit !== undefined;
}
const Wa = {
    duration: 0.45,
    ease: [
        0.4,
        0,
        0.1,
        1
    ]
};
const Bs = (e)=>typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e);
const Is = Bs("applewebkit/") && !Bs("chrome/") ? Math.round : noop;
function js(e) {
    e.min = Is(e.min);
    e.max = Is(e.max);
}
function _a(layoutBox) {
    js(layoutBox.x);
    js(layoutBox.y);
}
function tn(animationType, layoutBox, s) {
    return animationType === "position" || animationType === "preserve-aspect" && !Jr(Cs(layoutBox), Cs(s), 0.2);
}
function $a(e) {
    return e !== e.root && e.scroll?.wasRoot;
}
const za = Qi({
    attachResizeListener: (e, t)=>pt(e, "resize", t),
    measureScroll: ()=>({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
    checkIsScrollRoot: ()=>true
});
const Wt = {
    current: undefined
};
const ProjectionNode = Qi({
    measureScroll: (e)=>({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
    defaultParent: ()=>{
        if (!Wt.current) {
            const e = new za({});
            e.mount(window);
            e.setOptions({
                layoutScroll: true
            });
            Wt.current = e;
        }
        return Wt.current;
    },
    resetTransform: (e, t)=>{
        e.style.transform = t !== undefined ? t : "none";
    },
    checkIsScrollRoot: (e)=>window.getComputedStyle(e).position === "fixed"
});
const Ha = {
    pan: {
        Feature: da
    },
    drag: {
        Feature: fa,
        ProjectionNode,
        MeasureLayout: EeComponent
    }
};
function Os(node, t, s) {
    const { props } = node;
    if (node.animationState && props.whileHover) {
        node.animationState.setActive("whileHover", s === "Start");
    }
    const n = `onHover${s}`;
    const r = props[n];
    if (r) {
        schedule.postRender(()=>r(t, yt(t)));
    }
}
class Xa extends z {
    mount() {
        const { current } = this.node;
        if (current) {
            this.unmount = hover(current, (s, i)=>{
                Os(this.node, i, "Start");
                return (n)=>Os(this.node, n, "End");
            });
        }
    }
    unmount() {}
}
class Ya extends z {
    constructor(){
        super(...arguments);
        this.isActive = false;
    }
    onFocus() {
        let t = false;
        try {
            t = this.node.current.matches(":focus-visible");
        } catch  {
            t = true;
        }
        if (!(!t || !this.node.animationState)) {
            this.node.animationState.setActive("whileFocus", true);
            this.isActive = true;
        }
    }
    onBlur() {
        if (!(!this.isActive || !this.node.animationState)) {
            this.node.animationState.setActive("whileFocus", false);
            this.isActive = false;
        }
    }
    mount() {
        this.unmount = pipe(pt(this.node.current, "focus", ()=>this.onFocus()), pt(this.node.current, "blur", ()=>this.onBlur()));
    }
    unmount() {}
}
function Us(node, t, s) {
    const { props } = node;
    if (node.current instanceof HTMLButtonElement && node.current.disabled) {
        return;
    }
    if (node.animationState && props.whileTap) {
        node.animationState.setActive("whileTap", s === "Start");
    }
    const n = `onTap${s === "End" ? "" : s}`;
    const r = props[n];
    if (r) {
        schedule.postRender(()=>r(t, yt(t)));
    }
}
class qa extends z {
    mount() {
        const { current } = this.node;
        if (current) {
            this.unmount = press(current, (s, i)=>{
                Us(this.node, i, "Start");
                return (n, { success })=>Us(this.node, n, success ? "End" : "Cancel");
            }, {
                useGlobalTarget: this.node.props.globalTapTarget
            });
        }
    }
    unmount() {}
}
const ce = new WeakMap;
const _t = new WeakMap;
const Za = (e)=>{
    const t = ce.get(e.target);
    if (t) {
        t(e);
    }
};
const Ja = (e)=>{
    e.forEach(Za);
};
function Qa({ root, ...rest }) {
    const s = root || document;
    if (!_t.has(s)) {
        _t.set(s, {});
    }
    const i = _t.get(s);
    const n = JSON.stringify(rest);
    if (!i[n]) {
        i[n] = new IntersectionObserver(Ja, {
            root,
            ...rest
        });
    }
    return i[n];
}
function tl(e, t, s) {
    const i = Qa(t);
    ce.set(e, s);
    i.observe(e);
    return ()=>{
        ce.delete(e);
        i.unobserve(e);
    };
}
const el = {
    some: 0,
    all: 1
};
class sl extends z {
    constructor(){
        super(...arguments);
        this.hasEnteredView = false;
        this.isInView = false;
    }
    startObserver() {
        this.unmount();
        const { viewport = {} } = this.node.getProps();
        const { root, margin, amount = "some", once } = viewport;
        const o = {
            root: root ? root.current : undefined,
            rootMargin: margin,
            threshold: typeof amount === "number" ? amount : el[amount]
        };
        const a = (l)=>{
            const { isIntersecting } = l;
            if (this.isInView === isIntersecting || (this.isInView = isIntersecting, once && !isIntersecting && this.hasEnteredView)) {
                return;
            }
            if (isIntersecting) {
                this.hasEnteredView = true;
            }
            if (this.node.animationState) {
                this.node.animationState.setActive("whileInView", isIntersecting);
            }
            const { onViewportEnter, onViewportLeave } = this.node.getProps();
            const f = isIntersecting ? onViewportEnter : onViewportLeave;
            if (f) {
                f(l);
            }
        };
        return tl(this.node.current, o, a);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver === "undefined") {
            return;
        }
        const { props, prevProps } = this.node;
        if ([
            "amount",
            "margin",
            "root"
        ].some(il(props, prevProps))) {
            this.startObserver();
        }
    }
    unmount() {}
}
function il({ viewport = {} }, { viewport: viewport_1 = {} } = {}) {
    return (s)=>viewport[s] !== viewport_1[s];
}
const nl = {
    inView: {
        Feature: sl
    },
    tap: {
        Feature: qa
    },
    focus: {
        Feature: Ya
    },
    hover: {
        Feature: Xa
    }
};
const ol = {
    layout: {
        ProjectionNode,
        MeasureLayout: EeComponent
    }
};
export const domAnimation = {
    renderer,
    ...animations,
    ...nl
};
export const domMax = {
    ...domAnimation,
    ...Ha,
    ...ol
};
export { dt as AnimatePresence, bm as LayoutGroupContext, bo as LazyMotion, bu as MotionConfigContext, bv as MotionContext, du as PopChild, dv as PresenceChild, bw as PresenceContext, bn as SwitchLayoutGroupContext, dB as alpha, dh as analyseComplexValue, dy as buildTransform, cancel as cancelFrame, aV as clamp, df as color, dg as complex, aZ as degrees, bp as filterProps, schedule as frame, state as frameData, steps as frameSteps, by as getValueAsType, dd as hex, de as hsla, bq as isBrowser, bb as isCSSVariableName, aU as isCSSVariableToken, dk as isHTMLElement, b2 as isMotionValue, b1 as isObject, bt as isValidMotionProp, ds_1 as m, dw as makeUseVisualState, schedule_1 as microtask, aT as mixNumber, di_1 as number, dj as numberValueTypes, bf as optimizedAppearDataAttribute, aY as percent, bx as progressPercentage, aW as px, dq as resolveMotionValue, dz as rgbUnit, dc as rgba, dC as scale, aX as transformPropOrder, b8 as transformProps, dA as transformValueTypes, br_1 as useComposedRefs, bs_1 as useIsomorphicLayoutEffect, bl as usePresence, dx as useReducedMotion, a$ as vh, a_ as vw };
