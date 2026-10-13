import { b4, _ as __1, s as setAccDescription, g as getAccDescription, p as getDiagramTitle, o as setDiagramTitle, a as getAccTitle, b as setAccTitle, z, F, d as d_1, al, aa, ab, ac, e as e_1, q as q_1, B, D } from "./chunk-mermaid.core-B9Iu5CoE.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "a5a2340d-76de-4389-b09e-c564c7875f2d";
            e._sentryDebugIdIdentifier = "sentry-dbid-a5a2340d-76de-4389-b09e-c564c7875f2d";
        }
    } catch (e) {}
})();
const kt = (t, n)=>b4(t, "a", -n);
const _t = 1e-10;
function st(t, n) {
    const s = le(t);
    const e = s.filter((l)=>ae(l, t));
    let i = 0;
    let o = 0;
    const r = [];
    if (e.length > 1) {
        const l = Et(e);
        for (const a of e){
            a.angle = Math.atan2(a.x - l.x, a.y - l.y);
        }
        e.sort((u, a)=>a.angle - u.angle);
        let p2 = e[e.length - 1];
        for (const p1 of e){
            o += (p2.x + p1.x) * (p1.y - p2.y);
            const y = {
                x: (p1.x + p2.x) / 2,
                y: (p1.y + p2.y) / 2
            };
            let h = null;
            for(let b = 0; b < p1.parentIndex.length; ++b){
                if (p2.parentIndex.includes(p1.parentIndex[b])) {
                    const p = t[p1.parentIndex[b]];
                    const M = Math.atan2(p1.x - p.x, p1.y - p.y);
                    const E = Math.atan2(p2.x - p.x, p2.y - p.y);
                    let _ = E - M;
                    if (_ < 0) {
                        _ += 2 * Math.PI;
                    }
                    const S = E - _ / 2;
                    let g = q(y, {
                        x: p.x + p.radius * Math.sin(S),
                        y: p.y + p.radius * Math.cos(S)
                    });
                    if (g > p.radius * 2) {
                        g = p.radius * 2;
                    }
                    if (h == null || h.width > g) {
                        h = {
                            circle: p,
                            width: g,
                            p1,
                            p2,
                            large: g > p.radius,
                            sweep: true
                        };
                    }
                }
            }
            if (h != null) {
                r.push(h);
                i += lt(h.circle.radius, h.width);
                p2 = p1;
            }
        }
    } else {
        let l = t[0];
        for(let u = 1; u < t.length; ++u){
            if (t[u].radius < l.radius) {
                l = t[u];
            }
        }
        let f = false;
        for(let u = 0; u < t.length; ++u){
            if (q(t[u], l) > Math.abs(l.radius - t[u].radius)) {
                f = true;
                break;
            }
        }
        if (f) {
            o = 0;
            i = 0;
        } else {
            i = l.radius * l.radius * Math.PI;
            r.push({
                circle: l,
                p1: {
                    x: l.x,
                    y: l.y + l.radius
                },
                p2: {
                    x: l.x - _t,
                    y: l.y + l.radius
                },
                width: l.radius * 2,
                large: true,
                sweep: true
            });
        }
    }
    o /= 2;
    if (n) {
        n.area = i + o;
        n.arcArea = i;
        n.polygonArea = o;
        n.arcs = r;
        n.innerPoints = e;
        n.intersectionPoints = s;
    }
    return i + o;
}
function ae(t, n) {
    return n.every((s)=>q(t, s) < s.radius + _t);
}
function le(t) {
    const n = [];
    for(let s = 0; s < t.length; ++s){
        for(let e = s + 1; e < t.length; ++e){
            const i = Tt(t[s], t[e]);
            for (const o of i){
                o.parentIndex = [
                    s,
                    e
                ];
                n.push(o);
            }
        }
    }
    return n;
}
function lt(t, n) {
    return t * t * Math.acos(1 - n / t) - (t - n) * Math.sqrt(n * (2 * t - n));
}
function q(t, n) {
    return Math.sqrt((t.x - n.x) * (t.x - n.x) + (t.y - n.y) * (t.y - n.y));
}
function xt(t, n, s) {
    if (s >= t + n) {
        return 0;
    }
    if (s <= Math.abs(t - n)) {
        return Math.PI * Math.min(t, n) * Math.min(t, n);
    }
    const e = t - (s * s - n * n + t * t) / (2 * s);
    const i = n - (s * s - t * t + n * n) / (2 * s);
    return lt(t, e) + lt(n, i);
}
function Tt(t, n) {
    const s = q(t, n);
    const t_radius = t.radius;
    const n_radius = n.radius;
    if (s >= t_radius + n_radius || s <= Math.abs(t_radius - n_radius)) {
        return [];
    }
    const o = (t_radius * t_radius - n_radius * n_radius + s * s) / (2 * s);
    const r = Math.sqrt(t_radius * t_radius - o * o);
    const l = t.x + o * (n.x - t.x) / s;
    const f = t.y + o * (n.y - t.y) / s;
    const u = -(n.y - t.y) * (r / s);
    const a = -(n.x - t.x) * (r / s);
    return [
        {
            x: l + u,
            y: f - a
        },
        {
            x: l - u,
            y: f + a
        }
    ];
}
function Et(t) {
    const n = {
        x: 0,
        y: 0
    };
    for (const s of t){
        n.x += s.x;
        n.y += s.y;
    }
    n.x /= t.length;
    n.y /= t.length;
    return n;
}
function ce(t, n, s, e) {
    e = e || {};
    const i = e.maxIterations || 100;
    const o = e.tolerance || 1e-10;
    const r = t(n);
    const l = t(s);
    let f = s - n;
    if (r * l > 0) {
        throw "Initial bisect points must have opposite signs";
    }
    if (r === 0) {
        return n;
    }
    if (l === 0) {
        return s;
    }
    for(let u = 0; u < i; ++u){
        f /= 2;
        const a = n + f;
        const y = t(a);
        if (y * r >= 0) {
            n = a;
        }
        if (Math.abs(f) < o || y === 0) {
            return a;
        }
    }
    return n + f;
}
function ct(t) {
    const n = new Array(t);
    for(let s = 0; s < t; ++s){
        n[s] = 0;
    }
    return n;
}
function Mt(t, n) {
    return ct(t).map(()=>ct(n));
}
function $(t, n) {
    let s = 0;
    for(let e = 0; e < t.length; ++e){
        s += t[e] * n[e];
    }
    return s;
}
function ut(t) {
    return Math.sqrt($(t, t));
}
function ft(t, n, s) {
    for(let e = 0; e < n.length; ++e){
        t[e] = n[e] * s;
    }
}
function J(t, n, s, e, i) {
    for(let o = 0; o < t.length; ++o){
        t[o] = n * s[o] + e * i[o];
    }
}
function zt(t, n, s) {
    s = s || {};
    const e = s.maxIterations || n.length * 200;
    const i = s.nonZeroDelta || 1.05;
    const o = s.zeroDelta || 0.001;
    const r = s.minErrorDelta || 0.000001;
    const l = s.minErrorDelta || 0.00001;
    const f = s.rho !== undefined ? s.rho : 1;
    const u = s.chi !== undefined ? s.chi : 2;
    const a = s.psi !== undefined ? s.psi : -0.5;
    const y = s.sigma !== undefined ? s.sigma : 0.5;
    let h;
    const n_length = n.length;
    const p = new Array(n_length + 1);
    p[0] = n;
    p[0].fx = t(n);
    p[0].id = 0;
    for(let v = 0; v < n_length; ++v){
        const c = n.slice();
        c[v] = c[v] ? c[v] * i : o;
        p[v + 1] = c;
        p[v + 1].fx = t(c);
        p[v + 1].id = v + 1;
    }
    function M(v) {
        for(let c = 0; c < v.length; c++){
            p[n_length][c] = v[c];
        }
        p[n_length].fx = v.fx;
    }
    const E = (v, c)=>v.fx - c.fx;
    const _ = n.slice();
    const S = n.slice();
    const g = n.slice();
    const m = n.slice();
    for(let v = 0; v < e; ++v){
        p.sort(E);
        if (s.history) {
            const simplex = p.map((d)=>{
                const D = d.slice();
                D.fx = d.fx;
                D.id = d.id;
                return D;
            });
            simplex.sort((d, D)=>d.id - D.id);
            s.history.push({
                x: p[0].slice(),
                fx: p[0].fx,
                simplex
            });
        }
        h = 0;
        for(let x = 0; x < n_length; ++x){
            h = Math.max(h, Math.abs(p[0][x] - p[1][x]));
        }
        if (Math.abs(p[0].fx - p[n_length].fx) < r && h < l) {
            break;
        }
        for(let x = 0; x < n_length; ++x){
            _[x] = 0;
            for(let d = 0; d < n_length; ++d){
                _[x] += p[d][x];
            }
            _[x] /= n_length;
        }
        const c = p[n_length];
        J(S, 1 + f, _, -f, c);
        S.fx = t(S);
        if (S.fx < p[0].fx) {
            J(m, 1 + u, _, -u, c);
            m.fx = t(m);
            if (m.fx < S.fx) {
                M(m);
            } else {
                M(S);
            }
        } else if (S.fx >= p[n_length - 1].fx) {
            let x = false;
            if (S.fx > c.fx) {
                J(g, 1 + a, _, -a, c);
                g.fx = t(g);
                if (g.fx < c.fx) {
                    M(g);
                } else {
                    x = true;
                }
            } else {
                J(g, 1 - a * f, _, a * f, c);
                g.fx = t(g);
                if (g.fx < S.fx) {
                    M(g);
                } else {
                    x = true;
                }
            }
            if (x) {
                if (y >= 1) {
                    break;
                }
                for(let d = 1; d < p.length; ++d){
                    J(p[d], 1 - y, p[0], y, p[d]);
                    p[d].fx = t(p[d]);
                }
            }
        } else {
            M(S);
        }
    }
    p.sort(E);
    return {
        fx: p[0].fx,
        x: p[0]
    };
}
function ue(t, n, s, e, i, o, r) {
    const l = s.fx;
    const f = $(s.fxprime, n);
    let u = l;
    let a = l;
    let y = f;
    let h = 0;
    i = i || 1;
    o = o || 0.000001;
    r = r || 0.1;
    function b(p, M, E) {
        for(let _ = 0; _ < 16; ++_){
            i = (p + M) / 2;
            J(e.x, 1, s.x, i, n);
            u = e.fx = t(e.x, e.fxprime);
            y = $(e.fxprime, n);
            if (u > l + o * i * f || u >= E) {
                M = i;
            } else {
                if (Math.abs(y) <= -r * f) {
                    return i;
                }
                if (y * (M - p) >= 0) {
                    M = p;
                }
                p = i;
                E = u;
            }
        }
        return 0;
    }
    for(let p = 0; p < 10; ++p){
        J(e.x, 1, s.x, i, n);
        u = e.fx = t(e.x, e.fxprime);
        y = $(e.fxprime, n);
        if (u > l + o * i * f || p && u >= a) {
            return b(h, i, a);
        }
        if (Math.abs(y) <= -r * f) {
            return i;
        }
        if (y >= 0) {
            return b(i, h, u);
        }
        a = u;
        h = i;
        i *= 2;
    }
    return i;
}
function fe(t, n, s) {
    let e = {
        x: n.slice(),
        fx: 0,
        fxprime: n.slice()
    };
    let i = {
        x: n.slice(),
        fx: 0,
        fxprime: n.slice()
    };
    const o = n.slice();
    let r;
    let l;
    let alpha = 1;
    let u;
    s = s || {};
    u = s.maxIterations || n.length * 20;
    e.fx = t(e.x, e.fxprime);
    r = e.fxprime.slice();
    ft(r, e.fxprime, -1);
    for(let a = 0; a < u; ++a){
        alpha = ue(t, r, e, i, alpha);
        if (s.history) {
            s.history.push({
                x: e.x.slice(),
                fx: e.fx,
                fxprime: e.fxprime.slice(),
                alpha
            });
        }
        if (!alpha) {
            ft(r, e.fxprime, -1);
        } else {
            J(o, 1, i.fxprime, -1, e.fxprime);
            const y = $(e.fxprime, e.fxprime);
            const h = Math.max(0, $(o, i.fxprime) / y);
            J(r, h, r, -1, i.fxprime);
            l = e;
            e = i;
            i = l;
        }
        if (ut(e.fxprime) <= 0.00001) {
            break;
        }
    }
    if (s.history) {
        s.history.push({
            x: e.x.slice(),
            fx: e.fx,
            fxprime: e.fxprime.slice(),
            alpha
        });
    }
    return e;
}
function At(t, n = {}) {
    n.maxIterations = n.maxIterations || 500;
    const s = n.initialLayout || xe;
    const e = n.lossFunction || tt;
    const i = he(t, n);
    const o = s(i, n);
    const r = Object.keys(o);
    const l = [];
    for (const a of r){
        l.push(o[a].x);
        l.push(o[a].y);
    }
    const u = zt((a)=>{
        const y = {};
        for(let h = 0; h < r.length; ++h){
            const b = r[h];
            y[b] = {
                x: a[2 * h],
                y: a[2 * h + 1],
                radius: o[b].radius
            };
        }
        return e(y, i);
    }, l, n).x;
    for(let a = 0; a < r.length; ++a){
        const y = r[a];
        o[y].x = u[2 * a];
        o[y].y = u[2 * a + 1];
    }
    return o;
}
const Rt = 1e-10;
function ht(t, n, size) {
    if (Math.min(t, n) * Math.min(t, n) * Math.PI <= size + Rt) {
        return Math.abs(t - n);
    }
    return ce((e)=>xt(t, n, e) - size, 0, t + n);
}
function he(t, { distinct } = {}) {
    const e = t.map((l)=>({
            ...l
        }));
    function i(l) {
        return l.join(";");
    }
    if (distinct) {
        const l = new Map;
        for (const f of e){
            for(let u = 0; u < f.sets.length; u++){
                const a = String(f.sets[u]);
                l.set(a, f.size + (l.get(a) || 0));
                for(let y = u + 1; y < f.sets.length; y++){
                    const h = String(f.sets[y]);
                    const b = `${a};${h}`;
                    const p = `${h};${a}`;
                    l.set(b, f.size + (l.get(b) || 0));
                    l.set(p, f.size + (l.get(p) || 0));
                }
            }
        }
        for (const f of e){
            if (f.sets.length < 3) {
                f.size = l.get(i(f.sets));
            }
        }
    }
    const o = [];
    const r = new Set;
    for (const l of e){
        if (l.sets.length === 1) {
            o.push(l.sets[0]);
        } else if (l.sets.length === 2) {
            const f = l.sets[0];
            const u = l.sets[1];
            r.add(i(l.sets));
            r.add(i([
                u,
                f
            ]));
        }
    }
    o.sort((l, f)=>{
        if (l === f) {
            return 0;
        }
        if (l < f) {
            return -1;
        }
        return 1;
    });
    for(let l = 0; l < o.length; ++l){
        const f = o[l];
        for(let u = l + 1; u < o.length; ++u){
            const a = o[u];
            if (!r.has(i([
                f,
                a
            ]))) {
                e.push({
                    sets: [
                        f,
                        a
                    ],
                    size: 0
                });
            }
        }
    }
    return e;
}
function de(t, n, s) {
    const distances = Mt(n.length, n.length);
    const constraints = Mt(n.length, n.length);
    t.filter((o)=>o.sets.length === 2).forEach((o)=>{
        const r = s[o.sets[0]];
        const l = s[o.sets[1]];
        const f = Math.sqrt(n[r].size / Math.PI);
        const u = Math.sqrt(n[l].size / Math.PI);
        const a = ht(f, u, o.size);
        distances[r][l] = distances[l][r] = a;
        let y = 0;
        if (o.size + 1e-10 >= Math.min(n[r].size, n[l].size)) {
            y = 1;
        } else if (o.size <= 1e-10) {
            y = -1;
        }
        constraints[r][l] = constraints[l][r] = y;
    });
    return {
        distances,
        constraints
    };
}
function ge(t, n, distances, constraints) {
    for(let o = 0; o < n.length; ++o){
        n[o] = 0;
    }
    let i = 0;
    for(let o = 0; o < distances.length; ++o){
        const r = t[2 * o];
        const l = t[2 * o + 1];
        for(let f = o + 1; f < distances.length; ++f){
            const u = t[2 * f];
            const a = t[2 * f + 1];
            const y = distances[o][f];
            const h = constraints[o][f];
            const b = (u - r) * (u - r) + (a - l) * (a - l);
            const p = Math.sqrt(b);
            const M = b - y * y;
            if (!(h > 0 && p <= y || h < 0 && p >= y)) {
                i += 2 * M * M;
                n[2 * o] += 4 * M * (r - u);
                n[2 * o + 1] += 4 * M * (l - a);
                n[2 * f] += 4 * M * (u - r);
                n[2 * f + 1] += 4 * M * (a - l);
            }
        }
    }
    return i;
}
function xe(t, n = {}) {
    let s = pe(t, n);
    const e = n.lossFunction || tt;
    if (t.length >= 8) {
        const i = ye(t, n);
        const o = e(i, t);
        const r = e(s, t);
        if (o + 1e-8 < r) {
            s = i;
        }
    }
    return s;
}
function ye(t, n = {}) {
    const s = n.restarts || 10;
    const e = [];
    const i = {};
    for (const h of t){
        if (h.sets.length === 1) {
            i[h.sets[0]] = e.length;
            e.push(h);
        }
    }
    let { distances, constraints } = de(t, e, i);
    const l = ut(distances.map(ut)) / distances.length;
    distances = distances.map((h)=>h.map((b)=>b / l));
    const f = (h, b)=>ge(h, b, distances, constraints);
    let u = null;
    for(let h = 0; h < s; ++h){
        const b = ct(distances.length * 2).map(Math.random);
        const p = fe(f, b, n);
        if (!u || p.fx < u.fx) {
            u = p;
        }
    }
    const a = u.x;
    const y = {};
    for(let h = 0; h < e.length; ++h){
        const b = e[h];
        y[b.sets[0]] = {
            x: a[2 * h] * l,
            y: a[2 * h + 1] * l,
            radius: Math.sqrt(b.size / Math.PI)
        };
    }
    if (n.history) {
        for (const h of n.history){
            ft(h.x, l);
        }
    }
    return y;
}
function pe(t, n) {
    const s = n && n.lossFunction ? n.lossFunction : tt;
    const e = {};
    const i = {};
    for (const y of t){
        if (y.sets.length === 1) {
            const h = y.sets[0];
            e[h] = {
                x: 10000000000,
                y: 10000000000,
                rowid: e.length,
                size: y.size,
                radius: Math.sqrt(y.size / Math.PI)
            };
            i[h] = [];
        }
    }
    t = t.filter((y)=>y.sets.length === 2);
    for (const y of t){
        let weight = y.weight ?? 1;
        const b = y.sets[0];
        const p = y.sets[1];
        if (y.size + Rt >= Math.min(e[b].size, e[p].size)) {
            weight = 0;
        }
        i[b].push({
            set: p,
            size: y.size,
            weight
        });
        i[p].push({
            set: b,
            size: y.size,
            weight
        });
    }
    const o = [];
    Object.keys(i).forEach((y)=>{
        let h = 0;
        for(let b = 0; b < i[y].length; ++b){
            h += i[y][b].size * i[y][b].weight;
        }
        o.push({
            set: y,
            size: h
        });
    });
    function r(y, h) {
        return h.size - y.size;
    }
    o.sort(r);
    const l = {};
    function f(y) {
        return y.set in l;
    }
    function u(y, h) {
        e[h].x = y.x;
        e[h].y = y.y;
        l[h] = true;
    }
    u({
        x: 0,
        y: 0
    }, o[0].set);
    for(let y = 1; y < o.length; ++y){
        const h = o[y].set;
        const b = i[h].filter(f);
        const p = e[h];
        b.sort(r);
        if (b.length === 0) {
            throw "ERROR: missing pairwise overlap information";
        }
        const M = [];
        for(let a = 0; a < b.length; ++a){
            const S = e[b[a].set];
            const radius_1 = ht(p.radius, S.radius, b[a].size);
            M.push({
                x: S.x + radius_1,
                y: S.y
            });
            M.push({
                x: S.x - radius_1,
                y: S.y
            });
            M.push({
                y: S.y + radius_1,
                x: S.x
            });
            M.push({
                y: S.y - radius_1,
                x: S.x
            });
            for(let m = a + 1; m < b.length; ++m){
                const v = e[b[m].set];
                const radius = ht(p.radius, v.radius, b[m].size);
                const x = Tt({
                    x: S.x,
                    y: S.y,
                    radius: radius_1
                }, {
                    x: v.x,
                    y: v.y,
                    radius
                });
                M.push(...x);
            }
        }
        let E = 1e+50;
        let _ = M[0];
        for (const S of M){
            e[h].x = S.x;
            e[h].y = S.y;
            const g = s(e, t);
            if (g < E) {
                E = g;
                _ = S;
            }
        }
        u(_, h);
    }
    return e;
}
function tt(t, n) {
    let s = 0;
    for (const e of n){
        if (e.sets.length === 1) {
            continue;
        }
        let i;
        if (e.sets.length === 2) {
            const r = t[e.sets[0]];
            const l = t[e.sets[1]];
            i = xt(r.radius, l.radius, q(r, l));
        } else {
            i = st(e.sets.map((r)=>t[r]));
        }
        const o = e.weight ?? 1;
        s += o * (i - e.size) * (i - e.size);
    }
    return s;
}
function Dt(t, n) {
    let s = 0;
    for (const e of n){
        if (e.sets.length === 1) {
            continue;
        }
        let i;
        if (e.sets.length === 2) {
            const l = t[e.sets[0]];
            const f = t[e.sets[1]];
            i = xt(l.radius, f.radius, q(l, f));
        } else {
            i = st(e.sets.map((l)=>t[l]));
        }
        const o = e.weight ?? 1;
        const r = Math.log((i + 1) / (e.size + 1));
        s += o * r * r;
    }
    return s;
}
function me(t, n, s) {
    if (s == null) {
        t.sort((i, o)=>o.radius - i.radius);
    } else {
        t.sort(s);
    }
    if (t.length > 0) {
        const i = t[0].x;
        const o = t[0].y;
        for (const r of t){
            r.x -= i;
            r.y -= o;
        }
    }
    if (t.length === 2 && q(t[0], t[1]) < Math.abs(t[1].radius - t[0].radius)) {
        t[1].x = t[0].x + t[0].radius - t[1].radius - 1e-10;
        t[1].y = t[0].y;
    }
    if (t.length > 1) {
        const i = Math.atan2(t[1].x, t[1].y) - n;
        const o = Math.cos(i);
        const r = Math.sin(i);
        for (const l of t){
            const { x, y } = l;
            l.x = o * x - r * y;
            l.y = r * x + o * y;
        }
    }
    if (t.length > 2) {
        let i = Math.atan2(t[2].x, t[2].y) - n;
        while(i < 0){
            i += 2 * Math.PI;
        }
        while(i > 2 * Math.PI){
            i -= 2 * Math.PI;
        }
        if (i > Math.PI) {
            const o = t[1].y / (1e-10 + t[1].x);
            for (const r of t){
                const e = (r.x + o * r.y) / (1 + o * o);
                r.x = 2 * e - r.x;
                r.y = 2 * e * o - r.y;
            }
        }
    }
}
function be(t) {
    t.forEach((i)=>{
        i.parent = i;
    });
    function n(i) {
        if (i.parent !== i) {
            i.parent = n(i.parent);
        }
        return i.parent;
    }
    function s(i, o) {
        const r = n(i);
        const l = n(o);
        r.parent = l;
    }
    for(let i = 0; i < t.length; ++i){
        for(let o = i + 1; o < t.length; ++o){
            const r = t[i].radius + t[o].radius;
            if (q(t[i], t[o]) + 1e-10 < r) {
                s(t[o], t[i]);
            }
        }
    }
    const e = new Map;
    for(let i = 0; i < t.length; ++i){
        const o = n(t[i]).parent.setid;
        if (!e.has(o)) {
            e.set(o, []);
        }
        e.get(o).push(t[i]);
    }
    t.forEach((i)=>{
        delete i.parent;
    });
    return Array.from(e.values());
}
function dt(t) {
    const n = (s)=>{
        const max = t.reduce((acc, item)=>Math.max(acc, item[s] + item.radius), Number.NEGATIVE_INFINITY);
        const min = t.reduce((acc, item)=>Math.min(acc, item[s] - item.radius), Number.POSITIVE_INFINITY);
        return {
            max,
            min
        };
    };
    return {
        xRange: n("x"),
        yRange: n("y")
    };
}
function Ct(t, n, s) {
    if (n == null) {
        n = Math.PI / 2;
    }
    let e = Ft(t).map((u)=>({
            ...u
        }));
    const i = be(e);
    for (const u of i){
        me(u, n, s);
        const a = dt(u);
        u.size = (a.xRange.max - a.xRange.min) * (a.yRange.max - a.yRange.min);
        u.bounds = a;
    }
    i.sort((u, a)=>a.size - u.size);
    e = i[0];
    let e_bounds = e.bounds;
    const r = (e_bounds.xRange.max - e_bounds.xRange.min) / 50;
    function l(u, a, y) {
        if (!u) {
            return;
        }
        const u_bounds = u.bounds;
        let b;
        let p;
        if (a) {
            b = e_bounds.xRange.max - u_bounds.xRange.min + r;
        } else {
            b = e_bounds.xRange.max - u_bounds.xRange.max;
            const M = (u_bounds.xRange.max - u_bounds.xRange.min) / 2 - (e_bounds.xRange.max - e_bounds.xRange.min) / 2;
            if (M < 0) {
                b += M;
            }
        }
        if (y) {
            p = e_bounds.yRange.max - u_bounds.yRange.min + r;
        } else {
            p = e_bounds.yRange.max - u_bounds.yRange.max;
            const M = (u_bounds.yRange.max - u_bounds.yRange.min) / 2 - (e_bounds.yRange.max - e_bounds.yRange.min) / 2;
            if (M < 0) {
                p += M;
            }
        }
        for (const M of u){
            M.x += b;
            M.y += p;
            e.push(M);
        }
    }
    let f = 1;
    while(f < i.length){
        l(i[f], true, false);
        l(i[f + 1], false, true);
        l(i[f + 2], true, true);
        f += 3;
        e_bounds = dt(e);
    }
    return Ot(e);
}
function Nt(t, n, s, e, i) {
    const o = Ft(t);
    n -= 2 * e;
    s -= 2 * e;
    const { xRange, yRange } = dt(o);
    if (xRange.max === xRange.min || yRange.max === yRange.min) {
        console.log("not scaling solution: zero size detected");
        return t;
    }
    let f;
    let u;
    if (i) {
        const b = Math.sqrt(i / Math.PI) * 2;
        f = n / b;
        u = s / b;
    } else {
        f = n / (xRange.max - xRange.min);
        u = s / (yRange.max - yRange.min);
    }
    const a = Math.min(u, f);
    const y = (n - (xRange.max - xRange.min) * a) / 2;
    const h = (s - (yRange.max - yRange.min) * a) / 2;
    return Ot(o.map((b)=>({
            radius: a * b.radius,
            x: e + y + (b.x - xRange.min) * a,
            y: e + h + (b.y - yRange.min) * a,
            setid: b.setid
        })));
}
function Ot(t) {
    const n = {};
    for (const s of t){
        n[s.setid] = s;
    }
    return n;
}
function Ft(t) {
    return Object.keys(t).map((setid)=>Object.assign(t[setid], {
            setid
        }));
}
function ve(t = {}) {
    let n = false;
    let s = 600;
    let e = 350;
    let i = 15;
    let o = 1000;
    let r = Math.PI / 2;
    let l = true;
    let f = null;
    let u = true;
    let a = true;
    let y = null;
    let h = null;
    let distinct = false;
    let p = null;
    let M = t && t.symmetricalTextCentre ? t.symmetricalTextCentre : false;
    let E = {};
    let _ = t && t.colourScheme ? t.colourScheme : t && t.colorScheme ? t.colorScheme : [
        "#1f77b4",
        "#ff7f0e",
        "#2ca02c",
        "#d62728",
        "#9467bd",
        "#8c564b",
        "#e377c2",
        "#7f7f7f",
        "#bcbd22",
        "#17becf"
    ];
    let S = 0;
    let g = (x)=>{
        if (x in E) {
            return E[x];
        }
        const d = E[x] = _[S];
        S += 1;
        if (S >= _.length) {
            S = 0;
        }
        return d;
    };
    let m = At;
    let lossFunction = tt;
    function c(x) {
        let d = x.datum();
        const D = new Set;
        d.forEach((k)=>{
            if (k.size == 0 && k.sets.length == 1) {
                D.add(k.sets[0]);
            }
        });
        d = d.filter((k)=>!k.sets.some((F)=>D.has(F)));
        let I = {};
        let textCentres = {};
        if (d.length > 0) {
            let k = m(d, {
                lossFunction,
                distinct
            });
            if (l) {
                k = Ct(k, r, h);
            }
            I = Nt(k, s, e, i, f);
            textCentres = Lt(I, d, M);
        }
        const U = {};
        d.forEach((k)=>{
            if (k.label) {
                U[k.sets] = k.label;
            }
        });
        function V(k) {
            if (k.sets in U) {
                return U[k.sets];
            }
            if (k.sets.length == 1) {
                return `${k.sets[0]}`;
            }
        }
        x.selectAll("svg").data([
            I
        ]).enter().append("svg");
        const O = x.select("svg");
        if (n) {
            O.attr("viewBox", `0 0 ${s} ${e}`);
        } else {
            O.attr("width", s).attr("height", e);
        }
        const R = {};
        let T = false;
        O.selectAll(".venn-area path").each(function(k) {
            const F = this.getAttribute("d");
            if (k.sets.length == 1 && F && !distinct) {
                T = true;
                R[k.sets[0]] = Me(F);
            }
        });
        function A(k) {
            return (F)=>{
                const H = k.sets.map((et)=>{
                    let Y = R[et];
                    let Z = I[et];
                    if (!Y) {
                        Y = {
                            x: s / 2,
                            y: e / 2,
                            radius: 1
                        };
                    }
                    if (!Z) {
                        Z = {
                            x: s / 2,
                            y: e / 2,
                            radius: 1
                        };
                    }
                    return {
                        x: Y.x * (1 - F) + Z.x * F,
                        y: Y.y * (1 - F) + Z.y * F,
                        radius: Y.radius * (1 - F) + Z.radius * F
                    };
                });
                return St(H, p);
            };
        }
        const nodes = O.selectAll(".venn-area").data(d, (k)=>k.sets);
        const enter = nodes.enter().append("g").attr("class", (k)=>`venn-area venn-${k.sets.length == 1 ? "circle" : "intersection"}${k.colour || k.color ? " venn-coloured" : ""}`).attr("data-venn-sets", (k)=>k.sets.join("_"));
        const B = enter.append("path");
        const L = enter.append("text").attr("class", "label").text((k)=>V(k)).attr("text-anchor", "middle").attr("dy", ".35em").attr("x", s / 2).attr("y", e / 2);
        if (a) {
            B.style("fill-opacity", "0").filter((k)=>k.sets.length == 1).style("fill", (k)=>{
                if (k.colour) {
                    return k.colour;
                }
                if (k.color) {
                    return k.color;
                }
                return g(k.sets);
            }).style("fill-opacity", ".25");
            L.style("fill", (k)=>{
                if (k.colour || k.color) {
                    return "#FFF";
                }
                if (t.textFill) {
                    return t.textFill;
                }
                if (k.sets.length == 1) {
                    return g(k.sets);
                }
                return "#444";
            });
        }
        function K(k) {
            if (typeof k.transition === "function") {
                return k.transition("venn").duration(o);
            }
            return k;
        }
        let update = x;
        if (T && typeof update.transition === "function") {
            update = K(x);
            update.selectAll("path").attrTween("d", A);
        } else {
            update.selectAll("path").attr("d", (k)=>St(k.sets.map((F)=>I[F])), p);
        }
        const N = update.selectAll("text").filter((k)=>k.sets in textCentres).text((k)=>V(k)).attr("x", (k)=>Math.floor(textCentres[k.sets].x)).attr("y", (k)=>Math.floor(textCentres[k.sets].y));
        u && (T ? "on" in N ? N.on("end", rt(I, V)) : N.each("end", rt(I, V)) : N.each(rt(I, V)));
        const exit = K(nodes.exit()).remove();
        if (typeof nodes.transition === "function") {
            exit.selectAll("path").attrTween("d", A);
        }
        const X = exit.selectAll("text").attr("x", s / 2).attr("y", e / 2);
        if (y !== null) {
            L.style("font-size", "0px");
            N.style("font-size", y);
            X.style("font-size", "0px");
        }
        return {
            circles: I,
            textCentres,
            nodes,
            enter,
            update,
            exit
        };
    }
    c.wrap = function(x) {
        if (arguments.length) {
            u = x;
            return c;
        }
        return u;
    };
    c.useViewBox = ()=>{
        n = true;
        return c;
    };
    c.width = function(x) {
        if (arguments.length) {
            s = x;
            return c;
        }
        return s;
    };
    c.height = function(x) {
        if (arguments.length) {
            e = x;
            return c;
        }
        return e;
    };
    c.padding = function(x) {
        if (arguments.length) {
            i = x;
            return c;
        }
        return i;
    };
    c.distinct = function(x) {
        if (arguments.length) {
            distinct = x;
            return c;
        }
        return distinct;
    };
    c.colours = function(x) {
        if (arguments.length) {
            g = x;
            return c;
        }
        return g;
    };
    c.colors = function(x) {
        if (arguments.length) {
            g = x;
            return c;
        }
        return g;
    };
    c.fontSize = function(x) {
        if (arguments.length) {
            y = x;
            return c;
        }
        return y;
    };
    c.round = function(x) {
        if (arguments.length) {
            p = x;
            return c;
        }
        return p;
    };
    c.duration = function(x) {
        if (arguments.length) {
            o = x;
            return c;
        }
        return o;
    };
    c.layoutFunction = function(x) {
        if (arguments.length) {
            m = x;
            return c;
        }
        return m;
    };
    c.normalize = function(x) {
        if (arguments.length) {
            l = x;
            return c;
        }
        return l;
    };
    c.scaleToFit = function(x) {
        if (arguments.length) {
            f = x;
            return c;
        }
        return f;
    };
    c.styled = function(x) {
        if (arguments.length) {
            a = x;
            return c;
        }
        return a;
    };
    c.orientation = function(x) {
        if (arguments.length) {
            r = x;
            return c;
        }
        return r;
    };
    c.orientationOrder = function(x) {
        if (arguments.length) {
            h = x;
            return c;
        }
        return h;
    };
    c.lossFunction = function(x) {
        if (arguments.length) {
            lossFunction = x === "default" ? tt : x === "logRatio" ? Dt : x;
            return c;
        }
        return lossFunction;
    };
    return c;
}
function rt(t, n) {
    return function(s) {
        const e = this;
        const i = t[s.sets[0]].radius || 50;
        const o = n(s) || "";
        const r = o.split(/\s+/).reverse();
        const f = (o.length + r.length) / 3;
        let u = r.pop();
        let a = [
            u
        ];
        let y = 0;
        const h = 1.1;
        e.textContent = null;
        const b = [];
        function p(g) {
            const m = e.ownerDocument.createElementNS(e.namespaceURI, "tspan");
            m.textContent = g;
            b.push(m);
            e.append(m);
            return m;
        }
        let M = p(u);
        while(u = r.pop(), !!u){
            a.push(u);
            const g = a.join(" ");
            M.textContent = g;
            if (g.length > f && M.getComputedTextLength() > i) {
                a.pop();
                M.textContent = a.join(" ");
                a = [
                    u
                ];
                M = p(u);
                y++;
            }
        }
        const E = 0.35 - y * h / 2;
        const _ = e.getAttribute("x");
        const S = e.getAttribute("y");
        b.forEach((g, m)=>{
            g.setAttribute("x", _);
            g.setAttribute("y", S);
            g.setAttribute("dy", `${E + m * h}em`);
        });
    };
}
function at(t, n, s) {
    let e = n[0].radius - q(n[0], t);
    for(let i = 1; i < n.length; ++i){
        const o = n[i].radius - q(n[i], t);
        if (o <= e) {
            e = o;
        }
    }
    for(let i = 0; i < s.length; ++i){
        const o = q(s[i], t) - s[i].radius;
        if (o <= e) {
            e = o;
        }
    }
    return e;
}
function jt(t, n, s) {
    const e = [];
    for (const a of t){
        e.push({
            x: a.x,
            y: a.y
        });
        e.push({
            x: a.x + a.radius / 2,
            y: a.y
        });
        e.push({
            x: a.x - a.radius / 2,
            y: a.y
        });
        e.push({
            x: a.x,
            y: a.y + a.radius / 2
        });
        e.push({
            x: a.x,
            y: a.y - a.radius / 2
        });
    }
    let i = e[0];
    let o = at(e[0], t, n);
    for(let a = 1; a < e.length; ++a){
        const y = at(e[a], t, n);
        if (y >= o) {
            i = e[a];
            o = y;
        }
    }
    const r = zt((a)=>-1 * at({
            x: a[0],
            y: a[1]
        }, t, n), [
        i.x,
        i.y
    ], {
        maxIterations: 500,
        minErrorDelta: 1e-10
    }).x;
    const l = {
        x: s ? 0 : r[0],
        y: r[1]
    };
    let f = true;
    for (const a of t){
        if (q(l, a) > a.radius) {
            f = false;
            break;
        }
    }
    for (const a of n){
        if (q(l, a) < a.radius) {
            f = false;
            break;
        }
    }
    if (f) {
        return l;
    }
    if (t.length == 1) {
        return {
            x: t[0].x,
            y: t[0].y
        };
    }
    const u = {};
    st(t, u);
    if (u.arcs.length === 0) {
        return {
            x: 0,
            y: -1000,
            disjoint: true
        };
    }
    if (u.arcs.length == 1) {
        return {
            x: u.arcs[0].circle.x,
            y: u.arcs[0].circle.y
        };
    }
    if (n.length) {
        return jt(t, []);
    }
    return Et(u.arcs.map((a)=>a.p1));
}
function Ie(t) {
    const n = {};
    const s = Object.keys(t);
    for (const e of s){
        n[e] = [];
    }
    for(let e = 0; e < s.length; e++){
        const i = s[e];
        const o = t[i];
        for(let r = e + 1; r < s.length; ++r){
            const l = s[r];
            const f = t[l];
            const u = q(o, f);
            if (u + f.radius <= o.radius + 1e-10) {
                n[l].push(i);
            } else if (u + o.radius <= f.radius + 1e-10) {
                n[i].push(l);
            }
        }
    }
    return n;
}
function Lt(t, n, s) {
    const e = {};
    const i = Ie(t);
    for(let o = 0; o < n.length; ++o){
        const r = n[o].sets;
        const l = {};
        const f = {};
        for(let h = 0; h < r.length; ++h){
            l[r[h]] = true;
            const b = i[r[h]];
            for(let p = 0; p < b.length; ++p){
                f[b[p]] = true;
            }
        }
        const u = [];
        const a = [];
        for(let h in t){
            if (h in l) {
                u.push(t[h]);
            } else if (!(h in f)) {
                a.push(t[h]);
            }
        }
        const y = jt(u, a, s);
        e[r] = y;
        if (y.disjoint && n[o].size > 0) {
            console.log(`WARNING: area ${r} not represented on screen`);
        }
    }
    return e;
}
function ke(t, n, s) {
    const e = [];
    e.push(`
M`, t, n);
    e.push(`
m`, -s, 0);
    e.push(`
a`, s, s, 0, 1, 0, s * 2, 0);
    e.push(`
a`, s, s, 0, 1, 0, -s * 2, 0);
    return e.join(" ");
}
function Me(t) {
    const n = t.split(" ");
    return {
        x: Number.parseFloat(n[1]),
        y: Number.parseFloat(n[2]),
        radius: -Number.parseFloat(n[4])
    };
}
function Pt(t) {
    if (t.length === 0) {
        return [];
    }
    const n = {};
    st(t, n);
    return n.arcs;
}
function Bt(t, n) {
    if (t.length === 0) {
        return "M 0 0";
    }
    const s = 10 ** (n || 0);
    const e = n != null ? (o)=>Math.round(o * s) / s : (o)=>o;
    if (t.length == 1) {
        const o = t[0].circle;
        return ke(e(o.x), e(o.y), e(o.radius));
    }
    const i = [
        `
M`,
        e(t[0].p2.x),
        e(t[0].p2.y)
    ];
    for (const o of t){
        const r = e(o.circle.radius);
        i.push(`
A`, r, r, 0, o.large ? 1 : 0, o.sweep ? 1 : 0, e(o.p1.x), e(o.p1.y));
    }
    return i.join(" ");
}
function St(t, n) {
    return Bt(Pt(t), n);
}
function Se(t, { lossFunction, layoutFunction = At, normalize = true, orientation = Math.PI / 2, orientationOrder, width = 600, height = 350, padding = 15, scaleToFit = false, symmetricalTextCentre = false, distinct, round = 2 } = {}) {
    let p = layoutFunction(t, {
        lossFunction: lossFunction === "default" || !lossFunction ? tt : lossFunction === "logRatio" ? Dt : lossFunction,
        distinct
    });
    if (normalize) {
        p = Ct(p, orientation, orientationOrder);
    }
    const M = Nt(p, width, height, padding, scaleToFit);
    const E = Lt(M, t, symmetricalTextCentre);
    const _ = new Map(Object.keys(M).map((m)=>[
            m,
            {
                set: m,
                x: M[m].x,
                y: M[m].y,
                radius: M[m].radius
            }
        ]));
    const S = t.map((area)=>{
        const v = area.sets.map((d)=>_.get(d));
        const arcs = Pt(v);
        const path = Bt(arcs, round);
        return {
            circles: v,
            arcs,
            path,
            area,
            has: new Set(area.sets)
        };
    });
    function g(sets) {
        let v = "";
        for (const c of S){
            if (c.has.size > sets.length && sets.every((x)=>c.has.has(x))) {
                v += ` ${c.path}`;
            }
        }
        return v;
    }
    return S.map(({ circles, arcs, path, area })=>({
            data: area,
            text: E[area.sets],
            circles,
            arcs,
            path,
            distinctPath: path + g(area.sets)
        }));
}
const gt = (()=>{
    const t = __1((S, g, m, v)=>{
        m = m || {};
        for(v = S.length; v--; m[S[v]] = g);
        return m;
    }, "o");
    const n = [
        5,
        8
    ];
    const s = [
        7,
        8,
        11,
        12,
        17,
        19,
        22,
        24
    ];
    const e = [
        1,
        17
    ];
    const i = [
        1,
        18
    ];
    const o = [
        7,
        8,
        11,
        12,
        14,
        15,
        16,
        17,
        19,
        20,
        21,
        22,
        24,
        27
    ];
    const r = [
        1,
        31
    ];
    const l = [
        1,
        39
    ];
    const f = [
        7,
        8,
        11,
        12,
        17,
        19,
        22,
        24,
        27
    ];
    const u = [
        1,
        57
    ];
    const a = [
        1,
        56
    ];
    const y = [
        1,
        58
    ];
    const h = [
        1,
        59
    ];
    const b = [
        1,
        60
    ];
    const p = [
        7,
        8,
        11,
        12,
        16,
        17,
        19,
        20,
        22,
        24,
        27,
        31,
        32,
        33
    ];
    const M = {
        trace: __1(()=>{}, "trace"),
        yy: {},
        symbols_: {
            error: 2,
            start: 3,
            optNewlines: 4,
            VENN: 5,
            document: 6,
            EOF: 7,
            NEWLINE: 8,
            line: 9,
            statement: 10,
            TITLE: 11,
            SET: 12,
            identifier: 13,
            BRACKET_LABEL: 14,
            COLON: 15,
            NUMERIC: 16,
            UNION: 17,
            identifierList: 18,
            TEXT: 19,
            IDENTIFIER: 20,
            STRING: 21,
            INDENT_TEXT: 22,
            indentedTextTail: 23,
            STYLE: 24,
            stylesOpt: 25,
            styleField: 26,
            COMMA: 27,
            styleValue: 28,
            valueTokens: 29,
            valueToken: 30,
            HEXCOLOR: 31,
            RGBCOLOR: 32,
            RGBACOLOR: 33,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            5: "VENN",
            7: "EOF",
            8: "NEWLINE",
            11: "TITLE",
            12: "SET",
            14: "BRACKET_LABEL",
            15: "COLON",
            16: "NUMERIC",
            17: "UNION",
            19: "TEXT",
            20: "IDENTIFIER",
            21: "STRING",
            22: "INDENT_TEXT",
            24: "STYLE",
            27: "COMMA",
            31: "HEXCOLOR",
            32: "RGBCOLOR",
            33: "RGBACOLOR"
        },
        productions_: [
            0,
            [
                3,
                4
            ],
            [
                4,
                0
            ],
            [
                4,
                2
            ],
            [
                6,
                0
            ],
            [
                6,
                2
            ],
            [
                9,
                1
            ],
            [
                9,
                1
            ],
            [
                10,
                1
            ],
            [
                10,
                2
            ],
            [
                10,
                3
            ],
            [
                10,
                4
            ],
            [
                10,
                5
            ],
            [
                10,
                2
            ],
            [
                10,
                3
            ],
            [
                10,
                4
            ],
            [
                10,
                5
            ],
            [
                10,
                3
            ],
            [
                10,
                3
            ],
            [
                10,
                3
            ],
            [
                10,
                4
            ],
            [
                10,
                4
            ],
            [
                10,
                2
            ],
            [
                10,
                3
            ],
            [
                23,
                1
            ],
            [
                23,
                1
            ],
            [
                23,
                1
            ],
            [
                23,
                2
            ],
            [
                23,
                2
            ],
            [
                25,
                1
            ],
            [
                25,
                3
            ],
            [
                26,
                3
            ],
            [
                28,
                1
            ],
            [
                28,
                1
            ],
            [
                29,
                1
            ],
            [
                29,
                2
            ],
            [
                30,
                1
            ],
            [
                30,
                1
            ],
            [
                30,
                1
            ],
            [
                30,
                1
            ],
            [
                30,
                1
            ],
            [
                18,
                1
            ],
            [
                18,
                3
            ],
            [
                13,
                1
            ],
            [
                13,
                1
            ]
        ],
        performAction: __1(function(g, m, v, c, x, d, D) {
            const I = d.length - 1;
            switch(x){
                case 1:
                    return d[I - 1];
                case 2:
                case 3:
                case 4:
                    this.$ = [];
                    break;
                case 5:
                    d[I - 1].push(d[I]);
                    this.$ = d[I - 1];
                    break;
                case 6:
                    this.$ = [];
                    break;
                case 7:
                case 22:
                case 32:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                    this.$ = d[I];
                    break;
                case 8:
                    c.setDiagramTitle(d[I].substr(6));
                    this.$ = d[I].substr(6);
                    break;
                case 9:
                    c.addSubsetData([
                        d[I]
                    ], undefined, undefined);
                    if (c.setIndentMode) {
                        c.setIndentMode(true);
                    }
                    break;
                case 10:
                    c.addSubsetData([
                        d[I - 1]
                    ], d[I], undefined);
                    if (c.setIndentMode) {
                        c.setIndentMode(true);
                    }
                    break;
                case 11:
                    c.addSubsetData([
                        d[I - 2]
                    ], undefined, parseFloat(d[I]));
                    if (c.setIndentMode) {
                        c.setIndentMode(true);
                    }
                    break;
                case 12:
                    c.addSubsetData([
                        d[I - 3]
                    ], d[I - 2], parseFloat(d[I]));
                    if (c.setIndentMode) {
                        c.setIndentMode(true);
                    }
                    break;
                case 13:
                    if (d[I].length < 2) {
                        throw new Error("union requires multiple identifiers");
                    }
                    if (c.validateUnionIdentifiers) {
                        c.validateUnionIdentifiers(d[I]);
                    }
                    c.addSubsetData(d[I], undefined, undefined);
                    if (c.setIndentMode) {
                        c.setIndentMode(true);
                    }
                    break;
                case 14:
                    if (d[I - 1].length < 2) {
                        throw new Error("union requires multiple identifiers");
                    }
                    if (c.validateUnionIdentifiers) {
                        c.validateUnionIdentifiers(d[I - 1]);
                    }
                    c.addSubsetData(d[I - 1], d[I], undefined);
                    if (c.setIndentMode) {
                        c.setIndentMode(true);
                    }
                    break;
                case 15:
                    if (d[I - 2].length < 2) {
                        throw new Error("union requires multiple identifiers");
                    }
                    if (c.validateUnionIdentifiers) {
                        c.validateUnionIdentifiers(d[I - 2]);
                    }
                    c.addSubsetData(d[I - 2], undefined, parseFloat(d[I]));
                    if (c.setIndentMode) {
                        c.setIndentMode(true);
                    }
                    break;
                case 16:
                    if (d[I - 3].length < 2) {
                        throw new Error("union requires multiple identifiers");
                    }
                    if (c.validateUnionIdentifiers) {
                        c.validateUnionIdentifiers(d[I - 3]);
                    }
                    c.addSubsetData(d[I - 3], d[I - 2], parseFloat(d[I]));
                    if (c.setIndentMode) {
                        c.setIndentMode(true);
                    }
                    break;
                case 17:
                case 18:
                case 19:
                    c.addTextData(d[I - 1], d[I], undefined);
                    break;
                case 20:
                case 21:
                    c.addTextData(d[I - 2], d[I - 1], d[I]);
                    break;
                case 23:
                    c.addStyleData(d[I - 1], d[I]);
                    break;
                case 24:
                case 25:
                case 26:
                    var C = c.getCurrentSets();
                    if (!C) {
                        throw new Error("text requires set");
                    }
                    c.addTextData(C, d[I], undefined);
                    break;
                case 27:
                case 28:
                    var C = c.getCurrentSets();
                    if (!C) {
                        throw new Error("text requires set");
                    }
                    c.addTextData(C, d[I - 1], d[I]);
                    break;
                case 29:
                case 41:
                    this.$ = [
                        d[I]
                    ];
                    break;
                case 30:
                case 42:
                    this.$ = [
                        ...d[I - 2],
                        d[I]
                    ];
                    break;
                case 31:
                    this.$ = [
                        d[I - 2],
                        d[I]
                    ];
                    break;
                case 33:
                    this.$ = d[I].join(" ");
                    break;
                case 34:
                    this.$ = [
                        d[I]
                    ];
                    break;
                case 35:
                    d[I - 1].push(d[I]);
                    this.$ = d[I - 1];
                    break;
                case 43:
                case 44:
                    this.$ = d[I];
                    break;
            }
        }, "anonymous"),
        table: [
            t(n, [
                2,
                2
            ], {
                3: 1,
                4: 2
            }),
            {
                1: [
                    3
                ]
            },
            {
                5: [
                    1,
                    3
                ],
                8: [
                    1,
                    4
                ]
            },
            t(s, [
                2,
                4
            ], {
                6: 5
            }),
            t(n, [
                2,
                3
            ]),
            {
                7: [
                    1,
                    6
                ],
                8: [
                    1,
                    8
                ],
                9: 7,
                10: 9,
                11: [
                    1,
                    10
                ],
                12: [
                    1,
                    11
                ],
                17: [
                    1,
                    12
                ],
                19: [
                    1,
                    13
                ],
                22: [
                    1,
                    14
                ],
                24: [
                    1,
                    15
                ]
            },
            {
                1: [
                    2,
                    1
                ]
            },
            t(s, [
                2,
                5
            ]),
            t(s, [
                2,
                6
            ]),
            t(s, [
                2,
                7
            ]),
            t(s, [
                2,
                8
            ]),
            {
                13: 16,
                20: e,
                21: i
            },
            {
                13: 20,
                18: 19,
                20: e,
                21: i
            },
            {
                13: 20,
                18: 21,
                20: e,
                21: i
            },
            {
                16: [
                    1,
                    25
                ],
                20: [
                    1,
                    23
                ],
                21: [
                    1,
                    24
                ],
                23: 22
            },
            {
                13: 20,
                18: 26,
                20: e,
                21: i
            },
            t(s, [
                2,
                9
            ], {
                14: [
                    1,
                    27
                ],
                15: [
                    1,
                    28
                ]
            }),
            t(o, [
                2,
                43
            ]),
            t(o, [
                2,
                44
            ]),
            t(s, [
                2,
                13
            ], {
                14: [
                    1,
                    29
                ],
                15: [
                    1,
                    30
                ],
                27: r
            }),
            t(o, [
                2,
                41
            ]),
            {
                16: [
                    1,
                    34
                ],
                20: [
                    1,
                    32
                ],
                21: [
                    1,
                    33
                ],
                27: r
            },
            t(s, [
                2,
                22
            ]),
            t(s, [
                2,
                24
            ], {
                14: [
                    1,
                    35
                ]
            }),
            t(s, [
                2,
                25
            ], {
                14: [
                    1,
                    36
                ]
            }),
            t(s, [
                2,
                26
            ]),
            {
                20: l,
                25: 37,
                26: 38,
                27: r
            },
            t(s, [
                2,
                10
            ], {
                15: [
                    1,
                    40
                ]
            }),
            {
                16: [
                    1,
                    41
                ]
            },
            t(s, [
                2,
                14
            ], {
                15: [
                    1,
                    42
                ]
            }),
            {
                16: [
                    1,
                    43
                ]
            },
            {
                13: 44,
                20: e,
                21: i
            },
            t(s, [
                2,
                17
            ], {
                14: [
                    1,
                    45
                ]
            }),
            t(s, [
                2,
                18
            ], {
                14: [
                    1,
                    46
                ]
            }),
            t(s, [
                2,
                19
            ]),
            t(s, [
                2,
                27
            ]),
            t(s, [
                2,
                28
            ]),
            t(s, [
                2,
                23
            ], {
                27: [
                    1,
                    47
                ]
            }),
            t(f, [
                2,
                29
            ]),
            {
                15: [
                    1,
                    48
                ]
            },
            {
                16: [
                    1,
                    49
                ]
            },
            t(s, [
                2,
                11
            ]),
            {
                16: [
                    1,
                    50
                ]
            },
            t(s, [
                2,
                15
            ]),
            t(o, [
                2,
                42
            ]),
            t(s, [
                2,
                20
            ]),
            t(s, [
                2,
                21
            ]),
            {
                20: l,
                26: 51
            },
            {
                16: u,
                20: a,
                21: [
                    1,
                    53
                ],
                28: 52,
                29: 54,
                30: 55,
                31: y,
                32: h,
                33: b
            },
            t(s, [
                2,
                12
            ]),
            t(s, [
                2,
                16
            ]),
            t(f, [
                2,
                30
            ]),
            t(f, [
                2,
                31
            ]),
            t(f, [
                2,
                32
            ]),
            t(f, [
                2,
                33
            ], {
                30: 61,
                16: u,
                20: a,
                31: y,
                32: h,
                33: b
            }),
            t(p, [
                2,
                34
            ]),
            t(p, [
                2,
                36
            ]),
            t(p, [
                2,
                37
            ]),
            t(p, [
                2,
                38
            ]),
            t(p, [
                2,
                39
            ]),
            t(p, [
                2,
                40
            ]),
            t(p, [
                2,
                35
            ])
        ],
        defaultActions: {
            6: [
                2,
                1
            ]
        },
        parseError: __1(function(g, m) {
            if (m.recoverable) {
                this.trace(g);
            } else {
                const v = new Error(g);
                v.hash = m;
                throw v;
            }
        }, "parseError"),
        parse: __1(function(g) {
            const m = this;
            let v = [
                0
            ];
            let c = [];
            let x = [
                null
            ];
            let d = [];
            const table = this.table;
            let I = "";
            let C = 0;
            let U = 0;
            const V = 2;
            const O = 1;
            const R = d.slice.call(arguments, 1);
            const T = Object.create(this.lexer);
            const A = {
                yy: {}
            };
            for(const G in this.yy){
                if (Object.prototype.hasOwnProperty.call(this.yy, G)) {
                    A.yy[G] = this.yy[G];
                }
            }
            T.setInput(g, A.yy);
            A.yy.lexer = T;
            A.yy.parser = this;
            if (typeof T.yylloc === "undefined") {
                T.yylloc = {};
            }
            let T_yylloc = T.yylloc;
            d.push(T_yylloc);
            const B = T.options && T.options.ranges;
            if (typeof A.yy.parseError === "function") {
                this.parseError = A.yy.parseError;
            } else {
                this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function L(W) {
                v.length = v.length - 2 * W;
                x.length = x.length - W;
                d.length = d.length - W;
            }
            __1(L, "popStack");
            function K() {
                let W;
                W = c.pop() || T.lex() || O;
                if (typeof W !== "number") {
                    if (W instanceof Array) {
                        c = W;
                        W = c.pop();
                    }
                    W = m.symbols_[W] || W;
                }
                return W;
            }
            __1(K, "lex");
            let z;
            let N;
            let j;
            let X;
            const k = {};
            let F;
            let H;
            let et;
            let expected;
            while(true){
                N = v[v.length - 1];
                if (this.defaultActions[N]) {
                    j = this.defaultActions[N];
                } else {
                    if (z === null || typeof z === "undefined") {
                        z = K();
                    }
                    j = table[N] && table[N][z];
                }
                if (typeof j === "undefined" || !j.length || !j[0]) {
                    let Z = "";
                    expected = [];
                    for(F in table[N]){
                        if (this.terminals_[F] && F > V) {
                            expected.push(`'${this.terminals_[F]}'`);
                        }
                    }
                    if (T.showPosition) {
                        Z = `Parse error on line ${C + 1}${`:
`}${T.showPosition()}${`
Expecting `}${expected.join(", ")}, got '${this.terminals_[z] || z}'`;
                    } else {
                        Z = `Parse error on line ${C + 1}: Unexpected ${z == O ? "end of input" : `'${this.terminals_[z] || z}'`}`;
                    }
                    this.parseError(Z, {
                        text: T.match,
                        token: this.terminals_[z] || z,
                        line: T.yylineno,
                        loc: T_yylloc,
                        expected
                    });
                }
                if (j[0] instanceof Array && j.length > 1) {
                    throw new Error(`Parse Error: multiple actions possible at state: ${N}, token: ${z}`);
                }
                switch(j[0]){
                    case 1:
                        v.push(z);
                        x.push(T.yytext);
                        d.push(T.yylloc);
                        v.push(j[1]);
                        z = null;
                        U = T.yyleng;
                        I = T.yytext;
                        C = T.yylineno;
                        T_yylloc = T.yylloc;
                        break;
                    case 2:
                        H = this.productions_[j[1]][1];
                        k.$ = x[x.length - H];
                        k._$ = {
                            first_line: d[d.length - (H || 1)].first_line,
                            last_line: d[d.length - 1].last_line,
                            first_column: d[d.length - (H || 1)].first_column,
                            last_column: d[d.length - 1].last_column
                        };
                        if (B) {
                            k._$.range = [
                                d[d.length - (H || 1)].range[0],
                                d[d.length - 1].range[1]
                            ];
                        }
                        X = this.performAction.apply(k, [
                            I,
                            U,
                            C,
                            A.yy,
                            j[1],
                            x,
                            d
                        ].concat(R));
                        if (typeof X !== "undefined") {
                            return X;
                        }
                        if (H) {
                            v = v.slice(0, -1 * H * 2);
                            x = x.slice(0, -1 * H);
                            d = d.slice(0, -1 * H);
                        }
                        v.push(this.productions_[j[1]][0]);
                        x.push(k.$);
                        d.push(k._$);
                        et = table[v[v.length - 2]][v[v.length - 1]];
                        v.push(et);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }, "parse")
    };
    const E = (()=>{
        const S = {
            EOF: 1,
            parseError: __1(function(m, v) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(m, v);
                } else {
                    throw new Error(m);
                }
            }, "parseError"),
            setInput: __1(function(g, m) {
                this.yy = m || this.yy || {};
                this._input = g;
                this._more = this._backtrack = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = "";
                this.conditionStack = [
                    "INITIAL"
                ];
                this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                };
                if (this.options.ranges) {
                    this.yylloc.range = [
                        0,
                        0
                    ];
                }
                this.offset = 0;
                return this;
            }, "setInput"),
            input: __1(function() {
                const g = this._input[0];
                this.yytext += g;
                this.yyleng++;
                this.offset++;
                this.match += g;
                this.matched += g;
                const m = g.match(/(?:\r\n?|\n).*/g);
                m ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++;
                this.options.ranges && this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return g;
            }, "input"),
            unput: __1(function(g) {
                const g_length = g.length;
                const v = g.split(/(?:\r\n?|\n)/g);
                this._input = g + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - g_length);
                this.offset -= g_length;
                const c = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (v.length - 1) {
                    this.yylineno -= v.length - 1;
                }
                const range = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: v ? (v.length === c.length ? this.yylloc.first_column : 0) + c[c.length - v.length].length - v[0].length : this.yylloc.first_column - g_length
                };
                if (this.options.ranges) {
                    this.yylloc.range = [
                        range[0],
                        range[0] + this.yyleng - g_length
                    ];
                }
                this.yyleng = this.yytext.length;
                return this;
            }, "unput"),
            more: __1(function() {
                this._more = true;
                return this;
            }, "more"),
            reject: __1(function() {
                if (this.options.backtrack_lexer) {
                    this._backtrack = true;
                } else {
                    return this.parseError(`Lexical error on line ${this.yylineno + 1}${`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`}${this.showPosition()}`, {
                        text: "",
                        token: null,
                        line: this.yylineno
                    });
                }
                return this;
            }, "reject"),
            less: __1(function(g) {
                this.unput(this.match.slice(g));
            }, "less"),
            pastInput: __1(function() {
                const g = this.matched.substr(0, this.matched.length - this.match.length);
                return (g.length > 20 ? "..." : "") + g.substr(-20).replace(/\n/g, "");
            }, "pastInput"),
            upcomingInput: __1(function() {
                let match = this.match;
                if (match.length < 20) {
                    match += this._input.substr(0, 20 - match.length);
                }
                return (match.substr(0, 20) + (match.length > 20 ? "..." : "")).replace(/\n/g, "");
            }, "upcomingInput"),
            showPosition: __1(function() {
                const g = this.pastInput();
                const m = new Array(g.length + 1).join("-");
                return `${g + this.upcomingInput() + `
` + m}^`;
            }, "showPosition"),
            test_match: __1(function(g, m) {
                let v;
                let c;
                let x;
                if (this.options.backtrack_lexer) {
                    x = {
                        yylineno: this.yylineno,
                        yylloc: {
                            first_line: this.yylloc.first_line,
                            last_line: this.last_line,
                            first_column: this.yylloc.first_column,
                            last_column: this.yylloc.last_column
                        },
                        yytext: this.yytext,
                        match: this.match,
                        matches: this.matches,
                        matched: this.matched,
                        yyleng: this.yyleng,
                        offset: this.offset,
                        _more: this._more,
                        _input: this._input,
                        yy: this.yy,
                        conditionStack: this.conditionStack.slice(0),
                        done: this.done
                    };
                    if (this.options.ranges) {
                        x.yylloc.range = this.yylloc.range.slice(0);
                    }
                }
                c = g[0].match(/(?:\r\n?|\n).*/g);
                if (c) {
                    this.yylineno += c.length;
                }
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: c ? c[c.length - 1].length - c[c.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + g[0].length
                };
                this.yytext += g[0];
                this.match += g[0];
                this.matches = g;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) {
                    this.yylloc.range = [
                        this.offset,
                        this.offset += this.yyleng
                    ];
                }
                this._more = false;
                this._backtrack = false;
                this._input = this._input.slice(g[0].length);
                this.matched += g[0];
                v = this.performAction.call(this, this.yy, this, m, this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) {
                    this.done = false;
                }
                if (v) {
                    return v;
                }
                if (this._backtrack) {
                    for(const d in x){
                        this[d] = x[d];
                    }
                    return false;
                }
                return false;
            }, "test_match"),
            next: __1(function() {
                if (this.done) {
                    return this.EOF;
                }
                if (!this._input) {
                    this.done = true;
                }
                let g;
                let m;
                let v;
                let c;
                if (!this._more) {
                    this.yytext = "";
                    this.match = "";
                }
                for(var x = this._currentRules(), d = 0; d < x.length; d++){
                    v = this._input.match(this.rules[x[d]]);
                    if (v && (!m || v[0].length > m[0].length)) {
                        m = v;
                        c = d;
                        if (this.options.backtrack_lexer) {
                            g = this.test_match(v, x[d]);
                            if (g !== false) {
                                return g;
                            }
                            if (this._backtrack) {
                                m = false;
                                continue;
                            } else {
                                return false;
                            }
                        } else if (!this.options.flex) {
                            break;
                        }
                    }
                }
                if (m) {
                    g = this.test_match(m, x[c]);
                    if (g !== false) {
                        return g;
                    }
                    return false;
                }
                if (this._input === "") {
                    return this.EOF;
                }
                return this.parseError(`Lexical error on line ${this.yylineno + 1}${`. Unrecognized text.
`}${this.showPosition()}`, {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
            }, "next"),
            lex: __1(function() {
                const m = this.next();
                return m || this.lex();
            }, "lex"),
            begin: __1(function(m) {
                this.conditionStack.push(m);
            }, "begin"),
            popState: __1(function() {
                const m = this.conditionStack.length - 1;
                if (m > 0) {
                    return this.conditionStack.pop();
                }
                return this.conditionStack[0];
            }, "popState"),
            _currentRules: __1(function() {
                if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                }
                return this.conditions.INITIAL.rules;
            }, "_currentRules"),
            topState: __1(function(m) {
                m = this.conditionStack.length - 1 - Math.abs(m || 0);
                if (m >= 0) {
                    return this.conditionStack[m];
                }
                return "INITIAL";
            }, "topState"),
            pushState: __1(function(m) {
                this.begin(m);
            }, "pushState"),
            stateStackSize: __1(function() {
                return this.conditionStack.length;
            }, "stateStackSize"),
            options: {
                "case-insensitive": true
            },
            performAction: __1(function(m, v, c, x) {
                switch(c){
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        if (m.getIndentMode && m.getIndentMode()) {
                            m.consumeIndentText = true;
                            this.begin("INITIAL");
                            return 22;
                        }
                        break;
                    case 4:
                        break;
                    case 5:
                        if (m.setIndentMode) {
                            m.setIndentMode(false);
                        }
                        this.begin("INITIAL");
                        this.unput(v.yytext);
                        break;
                    case 6:
                        this.begin("bol");
                        return 8;
                    case 7:
                        break;
                    case 8:
                        break;
                    case 9:
                        return 7;
                    case 10:
                        return 11;
                    case 11:
                        return 5;
                    case 12:
                        return 12;
                    case 13:
                        return 17;
                    case 14:
                        if (m.consumeIndentText) {
                            m.consumeIndentText = false;
                        } else {
                            return 19;
                        }
                        break;
                    case 15:
                        return 24;
                    case 16:
                        v.yytext = v.yytext.slice(2, -2);
                        return 14;
                    case 17:
                        v.yytext = v.yytext.slice(1, -1).trim();
                        return 14;
                    case 18:
                        return 16;
                    case 19:
                        return 31;
                    case 20:
                        return 33;
                    case 21:
                        return 32;
                    case 22:
                        return 20;
                    case 23:
                        return 21;
                    case 24:
                        return 27;
                    case 25:
                        return 15;
                }
            }, "anonymous"),
            rules: [
                /^(?:%%(?!\{)[^\n]*)/i,
                /^(?:[^\}]%%[^\n]*)/i,
                /^(?:[ \t]+(?=[\n\r]))/i,
                /^(?:[ \t]+(?=text\b))/i,
                /^(?:[ \t]+)/i,
                /^(?:[^ \t\n\r])/i,
                /^(?:[\n\r]+)/i,
                /^(?:%%[^\n]*)/i,
                /^(?:[ \t]+)/i,
                /^(?:$)/i,
                /^(?:title\s[^#\n;]+)/i,
                /^(?:venn-beta\b)/i,
                /^(?:set\b)/i,
                /^(?:union\b)/i,
                /^(?:text\b)/i,
                /^(?:style\b)/i,
                /^(?:\["[^\"]*"\])/i,
                /^(?:\[[^\]\"]+\])/i,
                /^(?:[+-]?(\d+(\.\d+)?|\.\d+))/i,
                /^(?:#[0-9a-fA-F]{3,8})/i,
                /^(?:rgba\(\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*\))/i,
                /^(?:rgb\(\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*\))/i,
                /^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,
                /^(?:"[^\"]*")/i,
                /^(?:,)/i,
                /^(?::)/i
            ],
            conditions: {
                bol: {
                    rules: [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25
                    ],
                    inclusive: true
                },
                INITIAL: {
                    rules: [
                        0,
                        1,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25
                    ],
                    inclusive: true
                }
            }
        };
        return S;
    })();
    M.lexer = E;
    function _() {
        this.yy = {};
    }
    __1(_, "Parser");
    _.prototype = M;
    M.Parser = _;
    return new _;
})();
gt.parser = gt;
const parser = gt;
const yt = [];
const pt = [];
const mt = [];
const bt = new Set;
let vt;
let It = false;
const addSubsetData = __1((t, n, s)=>{
    const e = it(t).sort();
    const i = s ?? 10 / t.length ** 2;
    vt = e;
    if (e.length === 1) {
        bt.add(e[0]);
    }
    yt.push({
        sets: e,
        size: i,
        label: n ? nt(n) : undefined
    });
}, "addSubsetData");
const getSubsetData = __1(()=>yt, "getSubsetData");
var nt = __1((t)=>{
    const n = t.trim();
    if (n.length >= 2 && n.startsWith('"') && n.endsWith('"')) {
        return n.slice(1, -1);
    }
    return n;
}, "normalizeText");
const Ee = __1((t)=>t && nt(t), "normalizeStyleValue");
const addTextData = __1((t, n, s)=>{
    const id = nt(n);
    pt.push({
        sets: it(t).sort(),
        id,
        label: s ? nt(s) : undefined
    });
}, "addTextData");
const addStyleData = __1((t, n)=>{
    const targets = it(t).sort();
    const styles_1 = {};
    for (const [i, o] of n){
        styles_1[i] = Ee(o) ?? o;
    }
    mt.push({
        targets,
        styles: styles_1
    });
}, "addStyleData");
const getStyleData = __1(()=>mt, "getStyleData");
var it = __1((t)=>t.map((n)=>nt(n)), "normalizeIdentifierList");
const validateUnionIdentifiers = __1((t)=>{
    const s = it(t).filter((e)=>!bt.has(e));
    if (s.length > 0) {
        throw new Error(`unknown set identifier: ${s.join(", ")}`);
    }
}, "validateUnionIdentifiers");
const getTextData = __1(()=>pt, "getTextData");
const getCurrentSets = __1(()=>vt, "getCurrentSets");
const getIndentMode = __1(()=>It, "getIndentMode");
const setIndentMode = __1((t)=>{
    It = t;
}, "setIndentMode");
const D_venn = D.venn;
function getConfig() {
    return B(D_venn, z().venn);
}
__1(getConfig, "getConfig");
const clear = __1(()=>{
    q_1();
    yt.length = 0;
    pt.length = 0;
    mt.length = 0;
    bt.clear();
    vt = undefined;
    It = false;
}, "customClear");
const db = {
    getConfig,
    clear,
    setAccTitle,
    getAccTitle,
    setDiagramTitle,
    getDiagramTitle,
    getAccDescription,
    setAccDescription,
    addSubsetData,
    getSubsetData,
    addTextData,
    addStyleData,
    validateUnionIdentifiers,
    getTextData,
    getStyleData,
    getCurrentSets,
    getIndentMode,
    setIndentMode
};
const Be = __1((t)=>`
  .venn-title {
    font-size: 32px;
    fill: ${t.vennTitleTextColor};
    font-family: ${t.fontFamily};
  }

  .venn-circle text {
    font-size: 48px;
    font-family: ${t.fontFamily};
  }

  .venn-intersection text {
    font-size: 48px;
    fill: ${t.vennSetTextColor};
    font-family: ${t.fontFamily};
  }

  .venn-text-node {
    font-family: ${t.fontFamily};
    color: ${t.vennSetTextColor};
  }
`, "getStyles");
const styles = Be;
function qt(t) {
    const n = new Map;
    for (const s of t){
        const e = s.targets.join("|");
        const i = n.get(e);
        if (i) {
            Object.assign(i, s.styles);
        } else {
            n.set(e, {
                ...s.styles
            });
        }
    }
    return n;
}
__1(qt, "buildStyleByKey");
const draw = __1((t, n, s, e)=>{
    const i = e.db;
    const o = i.getConfig?.();
    const { themeVariables, look, handDrawnSeed } = z();
    const u = look === "handDrawn";
    const a = [
        themeVariables.venn1,
        themeVariables.venn2,
        themeVariables.venn3,
        themeVariables.venn4,
        themeVariables.venn5,
        themeVariables.venn6,
        themeVariables.venn7,
        themeVariables.venn8
    ].filter(Boolean);
    const y = i.getDiagramTitle?.();
    const h = i.getSubsetData();
    const b = i.getTextData();
    const p = qt(i.getStyleData());
    const M = Gt(h);
    const E = o?.width ?? 800;
    const _ = o?.height ?? 450;
    const g = E / 1600;
    const m = y ? 48 * g : 0;
    const v = themeVariables.primaryTextColor ?? themeVariables.textColor;
    const c = F(n);
    c.attr("viewBox", `0 0 ${E} ${_}`);
    if (y) {
        c.append("text").text(y).attr("class", "venn-title").attr("font-size", `${32 * g}px`).attr("text-anchor", "middle").attr("dominant-baseline", "middle").attr("x", "50%").attr("y", 32 * g).style("fill", themeVariables.vennTitleTextColor || themeVariables.titleColor);
    }
    const x = d_1(document.createElement("div"));
    const d = ve().width(E).height(_ - m);
    x.datum(M).call(d);
    const D = u ? al.svg(x.select("svg").node()) : undefined;
    const I = Se(M, {
        width: E,
        height: _ - m,
        padding: o?.padding ?? 15
    });
    const C = new Map;
    for (const R of I){
        const T = Q([
            ...R.data.sets
        ].sort());
        C.set(T, R);
    }
    if (b.length > 0) {
        Ut(o, C, x, b, g, p);
    }
    const U = aa(themeVariables.background || "#f4f4f4");
    x.selectAll(".venn-circle").each(function(R, T) {
        const A = d_1(this);
        const P = Q([
            ...R.sets
        ].sort());
        const B = p.get(P);
        const L = B?.fill || a[T % a.length] || themeVariables.primaryColor;
        A.classed(`venn-set-${T % 8}`, true);
        const K = B?.["fill-opacity"] ?? 0.1;
        const stroke = B?.stroke || L;
        const N = B?.["stroke-width"] || `${5 * g}`;
        if (u && D) {
            const X = C.get(P);
            if (X && X.circles.length > 0) {
                const k = X.circles[0];
                const F = D.circle(k.x, k.y, k.radius * 2, {
                    roughness: 0.7,
                    seed: handDrawnSeed,
                    fill: kt(L, 0.7),
                    fillStyle: "hachure",
                    fillWeight: 2,
                    hachureGap: 8,
                    hachureAngle: -41 + T * 60,
                    stroke,
                    strokeWidth: parseFloat(String(N))
                });
                A.select("path").remove();
                A.node()?.insertBefore(F, A.select("text").node());
            }
        } else {
            A.select("path").style("fill", L).style("fill-opacity", K).style("stroke", stroke).style("stroke-width", N).style("stroke-opacity", 0.95);
        }
        const j = B?.color || (U ? ab(L, 30) : ac(L, 30));
        A.select("text").style("font-size", `${48 * g}px`).style("fill", j);
    });
    if (u && D) {
        x.selectAll(".venn-intersection").each(function(R) {
            const T = d_1(this);
            const G = Q([
                ...R.sets
            ].sort());
            const P = p.get(G);
            const B = P?.fill;
            if (B) {
                const L = T.select("path");
                const K = L.attr("d");
                if (K) {
                    const z = D.path(K, {
                        roughness: 0.7,
                        seed: handDrawnSeed,
                        fill: kt(B, 0.3),
                        fillStyle: "cross-hatch",
                        fillWeight: 2,
                        hachureGap: 6,
                        hachureAngle: 60,
                        stroke: "none"
                    });
                    const N = L.node();
                    N?.parentNode?.insertBefore(z, N);
                    L.remove();
                }
            } else {
                T.select("path").style("fill-opacity", 0);
            }
            T.select("text").style("font-size", `${48 * g}px`).style("fill", P?.color ?? themeVariables.vennSetTextColor ?? v);
        });
    } else {
        x.selectAll(".venn-intersection text").style("font-size", `${48 * g}px`).style("fill", (R)=>{
            const A = Q([
                ...R.sets
            ].sort());
            return p.get(A)?.color ?? themeVariables.vennSetTextColor ?? v;
        });
        x.selectAll(".venn-intersection path").style("fill-opacity", (R)=>{
            const A = Q([
                ...R.sets
            ].sort());
            if (p.get(A)?.fill) {
                return 1;
            }
            return 0;
        }).style("fill", (R)=>{
            const A = Q([
                ...R.sets
            ].sort());
            return p.get(A)?.fill ?? "transparent";
        });
    }
    const V = c.append("g").attr("transform", `translate(0, ${m})`);
    const O = x.select("svg").node();
    if (O && "childNodes" in O) {
        for (const R of [
            ...O.childNodes
        ]){
            V.node()?.appendChild(R);
        }
    }
    e_1(c, _, E, o?.useMaxWidth ?? true);
}, "draw");
function Q(t) {
    return t.join("|");
}
__1(Q, "stableSetsKey");
function Ut(t, n, s, e, i, o) {
    const r = t?.useDebugLayout ?? false;
    const f = s.select("svg").append("g").attr("class", "venn-text-nodes");
    const u = new Map;
    for (const a of e){
        const y = Q(a.sets);
        const h = u.get(y);
        if (h) {
            h.push(a);
        } else {
            u.set(y, [
                a
            ]);
        }
    }
    for (const [a, y] of u.entries()){
        const h = n.get(a);
        if (!h?.text) {
            continue;
        }
        const b = h.text.x;
        const p = h.text.y;
        const M = Math.min(...h.circles.map((O)=>O.radius));
        const E = Math.min(...h.circles.map((O)=>O.radius - Math.hypot(b - O.x, p - O.y)));
        let _ = Number.isFinite(E) ? Math.max(0, E) : 0;
        if (_ === 0 && Number.isFinite(M)) {
            _ = M * 0.6;
        }
        const S = f.append("g").attr("class", "venn-text-area").attr("font-size", `${40 * i}px`);
        if (r) {
            S.append("circle").attr("class", "venn-text-debug-circle").attr("cx", b).attr("cy", p).attr("r", _).attr("fill", "none").attr("stroke", "purple").attr("stroke-width", 1.5 * i).attr("stroke-dasharray", `${6 * i} ${4 * i}`);
        }
        const g = Math.max(80 * i, _ * 2 * 0.95);
        const m = Math.max(60 * i, _ * 2 * 0.95);
        const x = (h.data.label && h.data.label.length > 0 ? Math.min(32 * i, _ * 0.25) : 0) + (y.length <= 2 ? 30 * i : 0);
        const d = b - g / 2;
        const D = p - m / 2 + x;
        const I = Math.max(1, Math.ceil(Math.sqrt(y.length)));
        const C = Math.max(1, Math.ceil(y.length / I));
        const U = g / I;
        const V = m / C;
        for (const [O, R] of y.entries()){
            const T = O % I;
            const A = Math.floor(O / I);
            const G = d + U * (T + 0.5);
            const P = D + V * (A + 0.5);
            if (r) {
                S.append("rect").attr("class", "venn-text-debug-cell").attr("x", d + U * T).attr("y", D + V * A).attr("width", U).attr("height", V).attr("fill", "none").attr("stroke", "teal").attr("stroke-width", 1 * i).attr("stroke-dasharray", `${4 * i} ${3 * i}`);
            }
            const B = U * 0.9;
            const L = V * 0.9;
            const K = S.append("foreignObject").attr("class", "venn-text-node-fo").attr("width", B).attr("height", L).attr("x", G - B / 2).attr("y", P - L / 2).attr("overflow", "visible");
            const z = o.get(R.id)?.color;
            const N = K.append("xhtml:span").attr("class", "venn-text-node").style("display", "flex").style("width", "100%").style("height", "100%").style("white-space", "normal").style("align-items", "center").style("justify-content", "center").style("text-align", "center").style("overflow-wrap", "normal").style("word-break", "normal").text(R.label ?? R.id);
            if (z) {
                N.style("color", z);
            }
        }
    }
}
__1(Ut, "renderTextNodes");
function Gt(t) {
    const n = new Set(t.map((i)=>[
            ...i.sets
        ].sort().join("|")));
    const s = new Map(t.filter((i)=>i.sets.length === 1 && i.size !== undefined).map((i)=>[
            i.sets[0],
            i.size
        ]));
    const e = [];
    for (const i of t){
        if (i.sets.length < 3) {
            continue;
        }
        const o = [
            ...i.sets
        ].sort();
        for(let r = 0; r < o.length - 1; r++){
            for(let l = r + 1; l < o.length; l++){
                const f = [
                    o[r],
                    o[l]
                ];
                const u = f.join("|");
                if (!n.has(u)) {
                    n.add(u);
                    const a = s.get(f[0]);
                    const y = s.get(f[1]);
                    const h = a !== undefined && y !== undefined ? Math.min(a, y) / 4 : 2.5;
                    e.push({
                        sets: f,
                        size: h,
                        label: ""
                    });
                }
            }
        }
    }
    if (e.length > 0) {
        return [
            ...t,
            ...e
        ];
    }
    return t;
}
__1(Gt, "ensurePairwiseSubsets");
const renderer = {
    draw
};
export const diagram = {
    parser,
    db,
    renderer,
    styles
};
