import { b9, ba, bb, bc, bd } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { i } from "./chunk-init-Gi6I4Gst.js";
import { e, f as f_1, a as a_1, b as b_1 } from "./chunk-defaultLocale-pEppTWzK.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "b4ef3c5d-828f-4b50-baa4-6bd9dda449e8";
            e._sentryDebugIdIdentifier = "sentry-dbid-b4ef3c5d-828f-4b50-baa4-6bd9dda449e8";
        }
    } catch (e) {}
})();
function M(n, r) {
    if (n == null || r == null) {
        return NaN;
    }
    if (n < r) {
        return -1;
    }
    if (n > r) {
        return 1;
    }
    if (n >= r) {
        return 0;
    }
    return NaN;
}
function I(n, r) {
    if (n == null || r == null) {
        return NaN;
    }
    if (r < n) {
        return -1;
    }
    if (r > n) {
        return 1;
    }
    if (r >= n) {
        return 0;
    }
    return NaN;
}
function R(n) {
    let r;
    let t;
    let e;
    if (n.length !== 2) {
        r = M;
        t = (o, c)=>M(n(o), c);
        e = (o, c)=>n(o) - c;
    } else {
        r = n === M || n === I ? n : P;
        t = n;
        e = n;
    }
    function left(o, c, i = 0, h = o.length) {
        if (i < h) {
            if (r(c, c) !== 0) {
                return h;
            }
            do {
                const l = i + h >>> 1;
                if (t(o[l], c) < 0) {
                    i = l + 1;
                } else {
                    h = l;
                }
            }while (i < h)
        }
        return i;
    }
    function right(o, c, i = 0, h = o.length) {
        if (i < h) {
            if (r(c, c) !== 0) {
                return h;
            }
            do {
                const l = i + h >>> 1;
                if (t(o[l], c) <= 0) {
                    i = l + 1;
                } else {
                    h = l;
                }
            }while (i < h)
        }
        return i;
    }
    function center(o, c, i = 0, h = o.length) {
        const l = left(o, c, i, h - 1);
        if (l > i && e(o[l - 1], c) > -e(o[l], c)) {
            return l - 1;
        }
        return l;
    }
    return {
        left,
        center,
        right
    };
}
function P() {
    return 0;
}
function V(n) {
    if (n === null) {
        return NaN;
    }
    return +n;
}
const $ = R(M);
const $_right = $.right;
R(V).center;
const O = Math.sqrt(50);
const T = Math.sqrt(10);
const C = Math.sqrt(2);
function v(n, r, t) {
    const e = (r - n) / Math.max(0, t);
    const u = Math.floor(Math.log10(e));
    const f = e / 10 ** u;
    const a = f >= O ? 10 : f >= T ? 5 : f >= C ? 2 : 1;
    let o;
    let c;
    let i;
    if (u < 0) {
        i = 10 ** -u / a;
        o = Math.round(n * i);
        c = Math.round(r * i);
        o / i < n && ++o;
        c / i > r && --c;
        i = -i;
    } else {
        i = 10 ** u * a;
        o = Math.round(n / i);
        c = Math.round(r / i);
        o * i < n && ++o;
        c * i > r && --c;
    }
    if (c < o && t >= 0.5 && t < 2) {
        return v(n, r, t * 2);
    }
    return [
        o,
        c,
        i
    ];
}
function E(n, r, t) {
    r = +r;
    n = +n;
    t = +t;
    if (!(t > 0)) {
        return [];
    }
    if (n === r) {
        return [
            n
        ];
    }
    const e = r < n;
    const [u, f, a] = e ? v(r, n, t) : v(n, r, t);
    if (!(f >= u)) {
        return [];
    }
    const o = f - u + 1;
    const c = new Array(o);
    if (e) {
        if (a < 0) {
            for(let i = 0; i < o; ++i){
                c[i] = (f - i) / -a;
            }
        } else {
            for(let i = 0; i < o; ++i){
                c[i] = (f - i) * a;
            }
        }
    } else if (a < 0) {
        for(let i = 0; i < o; ++i){
            c[i] = (u + i) / -a;
        }
    } else {
        for(let i = 0; i < o; ++i){
            c[i] = (u + i) * a;
        }
    }
    return c;
}
function y(n, r, t) {
    r = +r;
    n = +n;
    t = +t;
    return v(n, r, t)[2];
}
function G(n, r, t) {
    r = +r;
    n = +n;
    t = +t;
    const e = r < n;
    const u = e ? y(r, n, t) : y(n, r, t);
    return (e ? -1 : 1) * (u < 0 ? 1 / -u : u);
}
function H(n, r) {
    if (!r) {
        r = [];
    }
    const t = n ? Math.min(r.length, n.length) : 0;
    const e = r.slice();
    let u;
    return (f)=>{
        for(u = 0; u < t; ++u){
            e[u] = n[u] * (1 - f) + r[u] * f;
        }
        return e;
    };
}
function J(n) {
    return ArrayBuffer.isView(n) && !(n instanceof DataView);
}
function K(n, r) {
    const t = r ? r.length : 0;
    const e = n ? Math.min(t, n.length) : 0;
    const u = new Array(e);
    const f = new Array(t);
    let a;
    for(a = 0; a < e; ++a){
        u[a] = N(n[a], r[a]);
    }
    for(; a < t; ++a){
        f[a] = r[a];
    }
    return (o)=>{
        for(a = 0; a < e; ++a){
            f[a] = u[a](o);
        }
        return f;
    };
}
function L(n, r) {
    const t = new Date;
    n = +n;
    r = +r;
    return (e)=>{
        t.setTime(n * (1 - e) + r * e);
        return t;
    };
}
function Q(n, r) {
    const t = {};
    const e = {};
    let u;
    if (n === null || typeof n !== "object") {
        n = {};
    }
    if (r === null || typeof r !== "object") {
        r = {};
    }
    for(u in r){
        if (u in n) {
            t[u] = N(n[u], r[u]);
        } else {
            e[u] = r[u];
        }
    }
    return (f)=>{
        for(u in t){
            e[u] = t[u](f);
        }
        return e;
    };
}
function N(n, r) {
    const t = typeof r;
    let e;
    if (r == null || t === "boolean") {
        return b9(r);
    }
    return (t === "number" ? ba : t === "string" ? (e = bd(r)) ? (r = e, bb) : bc : r instanceof bd ? bb : r instanceof Date ? L : J(r) ? H : Array.isArray(r) ? K : typeof r.valueOf !== "function" && typeof r.toString !== "function" || isNaN(r) ? Q : ba)(n, r);
}
function U(n, r) {
    n = +n;
    r = +r;
    return (t)=>Math.round(n * (1 - t) + r * t);
}
function W(n) {
    return Math.max(0, -e(Math.abs(n)));
}
function X(n, r) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(e(r) / 3))) * 3 - e(Math.abs(n)));
}
function Y(n, r) {
    n = Math.abs(n);
    r = Math.abs(r) - n;
    return Math.max(0, e(r) - e(n)) + 1;
}
function Z(n) {
    return ()=>n;
}
function _(n) {
    return +n;
}
const A = [
    0,
    1
];
function m(n) {
    return n;
}
function d(n, r) {
    if (r -= n = +n) {
        return (t)=>(t - n) / r;
    }
    return Z(isNaN(r) ? NaN : 0.5);
}
function b(n, r) {
    let t;
    if (n > r) {
        t = n;
        n = r;
        r = t;
    }
    return (e)=>Math.max(n, Math.min(r, e));
}
function nn([e, u], r, t) {
    let f = r[0];
    const a = r[1];
    if (u < e) {
        e = d(u, e);
        f = t(a, f);
    } else {
        e = d(e, u);
        f = t(f, a);
    }
    return (o)=>f(e(o));
}
function rn(n, r, t) {
    const e = Math.min(n.length, r.length) - 1;
    const u = new Array(e);
    const f = new Array(e);
    let a = -1;
    for(n[e] < n[0] && (n = n.slice().reverse(), r = r.slice().reverse()); ++a < e;){
        u[a] = d(n[a], n[a + 1]);
        f[a] = t(r[a], r[a + 1]);
    }
    return (o)=>{
        const c = $_right(n, o, 1, e) - 1;
        return f[c](u[c](o));
    };
}
function en(n, r) {
    return r.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown());
}
function tn() {
    let n = A;
    let r = A;
    let t = N;
    let e;
    let u;
    let f;
    let a = m;
    let o;
    let c;
    let i;
    function h() {
        const s = Math.min(n.length, r.length);
        if (a !== m) {
            a = b(n[0], n[s - 1]);
        }
        o = s > 2 ? rn : nn;
        i = null;
        c = null;
        return l;
    }
    function l(s) {
        if (s == null || isNaN(s = +s)) {
            return f;
        }
        return (c || (c = o(n.map(e), r, t)))(e(a(s)));
    }
    l.invert = (s)=>a(u((i || (i = o(r, n.map(e), ba)))(s)));
    l.domain = function(s) {
        if (arguments.length) {
            n = Array.from(s, _);
            return h();
        }
        return n.slice();
    };
    l.range = function(s) {
        if (arguments.length) {
            r = Array.from(s);
            return h();
        }
        return r.slice();
    };
    l.rangeRound = (s)=>{
        r = Array.from(s);
        t = U;
        return h();
    };
    l.clamp = function(s) {
        if (arguments.length) {
            a = s ? true : m;
            return h();
        }
        return a !== m;
    };
    l.interpolate = function(s) {
        if (arguments.length) {
            t = s;
            return h();
        }
        return t;
    };
    l.unknown = function(s) {
        if (arguments.length) {
            f = s;
            return l;
        }
        return f;
    };
    return (s, S)=>{
        e = s;
        u = S;
        return h();
    };
}
function un() {
    return tn()(m, m);
}
function an(n, r, t, e) {
    const u = G(n, r, t);
    let f;
    e = f_1(e ?? ",f");
    switch(e.type){
        case "s":
            {
                const a = Math.max(Math.abs(n), Math.abs(r));
                if (e.precision == null && !isNaN(f = X(u, a))) {
                    e.precision = f;
                }
                return a_1(e, a);
            }
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            {
                if (e.precision == null && !isNaN(f = Y(u, Math.max(Math.abs(n), Math.abs(r))))) {
                    e.precision = f - (e.type === "e");
                }
                break;
            }
        case "f":
        case "%":
            {
                if (e.precision == null && !isNaN(f = W(u))) {
                    e.precision = f - (e.type === "%") * 2;
                }
                break;
            }
    }
    return b_1(e);
}
function on(n) {
    const n_domain = n.domain;
    n.ticks = (t)=>{
        const e = n_domain();
        return E(e[0], e[e.length - 1], t ?? 10);
    };
    n.tickFormat = (t, e)=>{
        const u = n_domain();
        return an(u[0], u[u.length - 1], t ?? 10, e);
    };
    n.nice = (t)=>{
        if (t == null) {
            t = 10;
        }
        const e = n_domain();
        let u = 0;
        let f = e.length - 1;
        let a = e[u];
        let o = e[f];
        let c;
        let i;
        let h = 10;
        for(o < a && (i = a, a = o, o = i, i = u, u = f, f = i); h-- > 0;){
            i = y(a, o, t);
            if (i === c) {
                e[u] = a;
                e[f] = o;
                return n_domain(e);
            }
            if (i > 0) {
                a = Math.floor(a / i) * i;
                o = Math.ceil(o / i) * i;
            } else if (i < 0) {
                a = Math.ceil(a * i) / i;
                o = Math.floor(o * i) / i;
            } else {
                break;
            }
            c = i;
        }
        return n;
    };
    return n;
}
function fn() {
    const n = un();
    n.copy = ()=>en(n, fn());
    i.apply(n, arguments);
    return on(n);
}
export { en as a, R as b, un as c, fn as l, G as t };
