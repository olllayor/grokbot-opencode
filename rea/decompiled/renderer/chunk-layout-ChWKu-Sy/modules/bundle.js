import { A, a as a_1, f, B as B_1, e as e_1, C as C_1, D, E as E_1, F, l as l_1, H as H_1, q as q_1, I as I_1, w, J as J_1, K as K_1, L, M as M_1, t as t_1, z as z_1, k as k_1, N as N_1, O, P as P_1, Q, R, T, V, W as W_1, y, n as n_1, X as X_1, Y as Y_1, G, Z as Z_1, _ as __1, i as i_1, $ as $_1, a0, a1 } from "./chunk-graph-BvS0Xx32.js";
import { g, b, k as k_2, a as a_2, c, d as d_1, e as e_2, f as f_1, i as i_2, h, j as j_1, m } from "./chunk-map-Bpb79OOT.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "b4326a13-f054-4466-8a69-bff6ff6301bb";
            e._sentryDebugIdIdentifier = "sentry-dbid-b4326a13-f054-4466-8a69-bff6ff6301bb";
        }
    } catch (e) {}
})();
const ke = /\s/;
function Pe(n) {
    for(var e = n.length; e-- && ke.test(n.charAt(e)););
    return e;
}
const Ne = /^\s+/;
function Le(n) {
    return n && n.slice(0, Pe(n) + 1).replace(Ne, "");
}
const ln = NaN;
const _e = /^[-+]0x[0-9a-f]+$/i;
const Ce = /^0b[01]+$/i;
const Ie = /^0o[0-7]+$/i;
const Re = parseInt;
function Te(n) {
    if (typeof n === "number") {
        return n;
    }
    if (A(n)) {
        return ln;
    }
    if (a_1(n)) {
        const e = typeof n.valueOf === "function" ? n.valueOf() : n;
        n = a_1(e) ? `${e}` : e;
    }
    if (typeof n !== "string") {
        if (n === 0) {
            return n;
        }
        return +n;
    }
    n = Le(n);
    const r = Ce.test(n);
    if (r || Ie.test(n)) {
        return Re(n.slice(2), r ? 2 : 8);
    }
    if (_e.test(n)) {
        return ln;
    }
    return +n;
}
const hn = Infinity;
const Me = 1.7976931348623157e+308;
function S(n) {
    if (!n) {
        if (n === 0) {
            return n;
        }
        return 0;
    }
    n = Te(n);
    if (n === hn || n === -hn) {
        const e = n < 0 ? -1 : 1;
        return e * Me;
    }
    if (n === n) {
        return n;
    }
    return 0;
}
function Se(n) {
    const e = S(n);
    const r = e % 1;
    if (e === e) {
        if (r) {
            return e - r;
        }
        return e;
    }
    return 0;
}
function _(n, e, r) {
    if (!a_1(r)) {
        return false;
    }
    const t = typeof e;
    if (t == "number" ? f(r) && B_1(e, r.length) : t == "string" && e in r) {
        return e_1(r[e], n);
    }
    return false;
}
function Fe(n) {
    return C_1((e, r)=>{
        let t = -1;
        let r_length = r.length;
        let o = r_length > 1 ? r[r_length - 1] : undefined;
        const a = r_length > 2 ? r[2] : undefined;
        o = n.length > 3 && typeof o === "function" ? (r_length--, o) : undefined;
        if (a && _(r[0], r[1], a)) {
            o = r_length < 3 ? undefined : o;
            r_length = 1;
        }
        for(e = Object(e); ++t < r_length;){
            const u = r[t];
            if (u) {
                n(e, u, t, o);
            }
        }
        return e;
    });
}
function P(n) {
    const e = n == null ? 0 : n.length;
    if (e) {
        return D(n);
    }
    return [];
}
function Ae(n) {
    return E_1(F(n, undefined, P), `${n}`);
}
const Be = "[object Object]";
const toString = Function.prototype.toString;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const Ye = toString.call(Object);
function $e(n) {
    if (!l_1(n) || H_1(n) != Be) {
        return false;
    }
    const e = g(n);
    if (e === null) {
        return true;
    }
    const r = hasOwnProperty.call(e, "constructor") && e.constructor;
    return typeof r === "function" && r instanceof r && toString.call(r) == Ye;
}
const De = 1;
const qe = 4;
function We(n) {
    return b(n, De | qe);
}
const hasOwnProperty_1 = Object.prototype.hasOwnProperty;
const He = C_1((n, e)=>{
    n = Object(n);
    let r = -1;
    let e_length = e.length;
    const i = e_length > 2 ? e[2] : undefined;
    for(i && _(e[0], e[1], i) && (e_length = 1); ++r < e_length;){
        const o = e[r];
        const a = k_2(o);
        for(let u = -1, d = a.length; ++u < d;){
            const f = a[u];
            const s = n[f];
            if (s === undefined || e_1(s, Object.prototype[f]) && !hasOwnProperty_1.call(n, f)) {
                n[f] = o[f];
            }
        }
    }
    return n;
});
function U(n, e, r) {
    if (r !== undefined && !e_1(n[e], r) || r === undefined && !(e in n)) {
        a_2(n, e, r);
    }
}
function J(n, e) {
    if (!(e === "constructor" && typeof n[e] === "function") && e != "__proto__") {
        return n[e];
    }
}
function ze(n) {
    return c(n, k_2(n));
}
function Ue(n, e, r, t, i, o, a) {
    const u = J(n, r);
    const d = J(e, r);
    const f = a.get(d);
    if (f) {
        U(n, r, f);
        return;
    }
    let s = o ? o(u, d, `${r}`, n, e, a) : undefined;
    let l = s === undefined;
    if (l) {
        const h = w(d);
        const v = !h && q_1(d);
        const p = !h && !v && I_1(d);
        s = d;
        h || v || p ? w(u) ? s = u : J_1(u) ? s = d_1(u) : v ? (l = false, s = e_2(d, true)) : p ? (l = false, s = f_1(d, true)) : s = [] : $e(d) || K_1(d) ? (s = u, K_1(u) ? s = ze(u) : (!a_1(u) || L(u)) && (s = i_2(d))) : l = false;
    }
    if (l) {
        a.set(d, s);
        i(s, d, t, o, a);
        a.delete(d);
    }
    U(n, r, s);
}
function An(n, e, r, t, i) {
    if (n !== e) {
        M_1(e, (o, a)=>{
            if (!i) {
                i = new t_1;
            }
            if (a_1(o)) {
                Ue(n, e, a, r, An, t, i);
            } else {
                let u = t ? t(J(n, a), o, `${a}`, n, e, i) : undefined;
                if (u === undefined) {
                    u = o;
                }
                U(n, a, u);
            }
        }, k_2);
    }
}
function B(n) {
    const e = n == null ? 0 : n.length;
    if (e) {
        return n[e - 1];
    }
}
function Je(n) {
    return (e, r, t)=>{
        const i = Object(e);
        if (!f(e)) {
            var o = z_1(r);
            e = k_1(e);
            r = (u)=>o(i[u], u, i);
        }
        const a = n(e, r, t);
        if (a > -1) {
            return i[o ? e[a] : a];
        }
    };
}
function Ze(n, e, r) {
    const t = n == null ? 0 : n.length;
    if (!t) {
        return -1;
    }
    let i = r == null ? 0 : Se(r);
    if (i < 0) {
        i = Math.max(t + i, 0);
    }
    return N_1(n, z_1(e), i);
}
const rn = Je(Ze);
function Qe(n, e) {
    if (n == null) {
        return n;
    }
    return M_1(n, O(e), k_2);
}
function nr(n, e) {
    return n && P_1(n, O(e));
}
function er(n, e) {
    return n > e;
}
const hasOwnProperty_2 = Object.prototype.hasOwnProperty;
function ir(n, e) {
    return n != null && hasOwnProperty_2.call(n, e);
}
function Bn(n, e) {
    return n != null && Q(n, e, ir);
}
function jn(n, e) {
    return n < e;
}
function Y(n, e) {
    const r = {};
    e = z_1(e);
    P_1(n, (t, i, o)=>{
        a_2(r, i, e(t, i, o));
    });
    return r;
}
function tn(n, e, r) {
    for(let t = -1, i = n.length; ++t < i;){
        const o = n[t];
        const a = e(o);
        if (a != null && (u === undefined ? a === a && !A(a) : r(a, u))) {
            var u = a;
            var d = o;
        }
    }
    return d;
}
function x(n) {
    if (n && n.length) {
        return tn(n, R, er);
    }
}
const K = Fe((n, e, r)=>{
    An(n, e, r);
});
function C(n) {
    if (n && n.length) {
        return tn(n, R, jn);
    }
}
function an(n, e) {
    if (n && n.length) {
        return tn(n, z_1(e), jn);
    }
}
function ar(n, e, r, t) {
    if (!a_1(n)) {
        return n;
    }
    e = T(e, n);
    for(let i = -1, o = e.length, a = o - 1, u = n; u != null && ++i < o;){
        const d = V(e[i]);
        let f = r;
        if (d === "__proto__" || d === "constructor" || d === "prototype") {
            return n;
        }
        if (i != a) {
            const s = u[d];
            f = undefined;
            if (f === undefined) {
                f = a_1(s) ? s : B_1(e[i + 1]) ? [] : {};
            }
        }
        h(u, d, f);
        u = u[d];
    }
    return n;
}
function or(n, e, r) {
    for(var t = -1, i = e.length, o = {}; ++t < i;){
        const a = e[t];
        const u = W_1(n, a);
        if (r(u, a)) {
            ar(o, T(a, n), u);
        }
    }
    return o;
}
function ur(n, e) {
    let n_length = n.length;
    for(n.sort(e); n_length--;){
        n[n_length] = n[n_length].value;
    }
    return n;
}
function dr(n, e) {
    if (n !== e) {
        const r = n !== undefined;
        const t = n === null;
        const i = n === n;
        const o = A(n);
        const a = e !== undefined;
        const u = e === null;
        const d = e === e;
        const f = A(e);
        if (!u && !f && !o && n > e || o && a && d && !u && !f || t && a && d || !r && d || !i) {
            return 1;
        }
        if (!t && !o && !f && n < e || f && r && i && !t && !o || u && r && i || !a && i || !d) {
            return -1;
        }
    }
    return 0;
}
function fr(n, e, r) {
    for(let t = -1, i = n.criteria, o = e.criteria, a = i.length, u = r.length; ++t < a;){
        const d = dr(i[t], o[t]);
        if (d) {
            if (t >= u) {
                return d;
            }
            const f = r[t];
            return d * (f == "desc" ? -1 : 1);
        }
    }
    return n.index - e.index;
}
function sr(n, e, r) {
    if (e.length) {
        e = y(e, (o)=>{
            if (w(o)) {
                return (a)=>W_1(a, o.length === 1 ? o[0] : o);
            }
            return o;
        });
    } else {
        e = [
            R
        ];
    }
    let t = -1;
    e = y(e, n_1(z_1));
    const i = j_1(n, (o, a, u)=>{
        const criteria = y(e, (f)=>f(o));
        return {
            criteria,
            index: ++t,
            value: o
        };
    });
    return ur(i, (o, a)=>fr(o, a, r));
}
function cr(n, e) {
    return or(n, e, (r, t)=>X_1(n, t));
}
const j = Ae((n, e)=>{
    if (n == null) {
        return {};
    }
    return cr(n, e);
});
function vr(n, e, r, t) {
    let i = -1;
    for(var o = Math.max(Math.ceil((e - n) / (r || 1)), 0), a = Array(o); o--;){
        a[++i] = n;
        n += r;
    }
    return a;
}
function pr(n) {
    return (e, r, t)=>{
        if (t && typeof t !== "number" && _(e, r, t)) {
            t = undefined;
            r = undefined;
        }
        e = S(e);
        if (r === undefined) {
            r = e;
            e = 0;
        } else {
            r = S(r);
        }
        t = t === undefined ? e < r ? 1 : -1 : S(t);
        return vr(e, r, t);
    };
}
const k = pr();
const M = C_1((n, e)=>{
    if (n == null) {
        return [];
    }
    const e_length = e.length;
    if (e_length > 1 && _(n, e[0], e[1])) {
        e = [];
    } else if (e_length > 2 && _(e[0], e[1], e[2])) {
        e = [
            e[0]
        ];
    }
    return sr(n, D(e), []);
});
let wr = 0;
function on(n) {
    const e = ++wr;
    return Y_1(n) + e;
}
function br(n, e, r) {
    for(var t = -1, i = n.length, o = e.length, a = {}; ++t < i;){
        const u = t < o ? e[t] : undefined;
        r(a, n[t], u);
    }
    return a;
}
function mr(n, e) {
    return br(n || [], e || [], h);
}
class gr {
    constructor(){
        var e = {};
        e._next = e._prev = e;
        this._sentinel = e;
    }
    dequeue() {
        const _sentinel = this._sentinel;
        const e__prev = _sentinel._prev;
        if (e__prev !== _sentinel) {
            vn(e__prev);
            return e__prev;
        }
    }
    enqueue(e) {
        const _sentinel = this._sentinel;
        if (e._prev && e._next) {
            vn(e);
        }
        e._next = _sentinel._next;
        _sentinel._next._prev = e;
        _sentinel._next = e;
        e._prev = _sentinel;
    }
    toString() {
        const e = [];
        for(let r = this._sentinel, t = r._prev; t !== r;){
            e.push(JSON.stringify(t, yr));
            t = t._prev;
        }
        return `[${e.join(", ")}]`;
    }
}
function vn(n) {
    n._prev._next = n._next;
    n._next._prev = n._prev;
    delete n._next;
    delete n._prev;
}
function yr(n, e) {
    if (n !== "_next" && n !== "_prev") {
        return e;
    }
}
const xr = __1(1);
function Er(n, e) {
    if (n.nodeCount() <= 1) {
        return [];
    }
    const r = kr(n, e || xr);
    const t = Or(r.graph, r.buckets, r.zeroIdx);
    return P(m(t, (i)=>n.outEdges(i.v, i.w)));
}
function Or(graph, buckets, zeroIdx) {
    let t = [];
    const i = buckets[buckets.length - 1];
    const o = buckets[0];
    let a;
    while(graph.nodeCount()){
        while(a = o.dequeue()){
            q(graph, buckets, zeroIdx, a);
        }
        while(a = i.dequeue()){
            q(graph, buckets, zeroIdx, a);
        }
        if (graph.nodeCount()) {
            for(let u = buckets.length - 2; u > 0; --u){
                a = buckets[u].dequeue();
                if (a) {
                    t = t.concat(q(graph, buckets, zeroIdx, a, true));
                    break;
                }
            }
        }
    }
    return t;
}
function q(graph, buckets, zeroIdx, t, i) {
    const o = i ? [] : undefined;
    Z_1(graph.inEdges(t.v), (a)=>{
        const u = graph.edge(a);
        const d = graph.node(a.v);
        if (i) {
            o.push({
                v: a.v,
                w: a.w
            });
        }
        d.out -= u;
        Z(buckets, zeroIdx, d);
    });
    Z_1(graph.outEdges(t.v), (a)=>{
        const u = graph.edge(a);
        const d = a.w;
        const f = graph.node(d);
        f.in -= u;
        Z(buckets, zeroIdx, f);
    });
    graph.removeNode(t.v);
    return o;
}
function kr(n, e) {
    const graph = new G;
    let t = 0;
    let i = 0;
    Z_1(n.nodes(), (u)=>{
        graph.setNode(u, {
            v: u,
            in: 0,
            out: 0
        });
    });
    Z_1(n.edges(), (u)=>{
        const d = graph.edge(u.v, u.w) || 0;
        const f = e(u);
        const s = d + f;
        graph.setEdge(u.v, u.w, s);
        i = Math.max(i, graph.node(u.v).out += f);
        t = Math.max(t, graph.node(u.w).in += f);
    });
    const buckets = k(i + t + 3).map(()=>new gr);
    const zeroIdx = t + 1;
    Z_1(graph.nodes(), (u)=>{
        Z(buckets, zeroIdx, graph.node(u));
    });
    return {
        graph,
        buckets,
        zeroIdx
    };
}
function Z(n, e, r) {
    if (r.out) {
        if (r.in) {
            n[r.out - r.in + e].enqueue(r);
        } else {
            n[n.length - 1].enqueue(r);
        }
    } else {
        n[0].enqueue(r);
    }
}
function Pr(n) {
    const e = n.graph().acyclicer === "greedy" ? Er(n, r(n)) : Nr(n);
    Z_1(e, (t)=>{
        const i = n.edge(t);
        n.removeEdge(t);
        i.forwardName = t.name;
        i.reversed = true;
        n.setEdge(t.w, t.v, i, on("rev"));
    });
    function r(t) {
        return (i)=>t.edge(i).weight;
    }
}
function Nr(n) {
    const e = [];
    const r = {};
    const t = {};
    function i(o) {
        if (!Object.prototype.hasOwnProperty.call(t, o)) {
            t[o] = true;
            r[o] = true;
            Z_1(n.outEdges(o), (a)=>{
                if (Object.prototype.hasOwnProperty.call(r, a.w)) {
                    e.push(a);
                } else {
                    i(a.w);
                }
            });
            delete r[o];
        }
    }
    Z_1(n.nodes(), i);
    return e;
}
function Lr(n) {
    Z_1(n.edges(), (e)=>{
        const r = n.edge(e);
        if (r.reversed) {
            n.removeEdge(e);
            const t = r.forwardName;
            delete r.reversed;
            delete r.forwardName;
            n.setEdge(e.w, e.v, r, t);
        }
    });
}
function N(n, e, r, t) {
    let i;
    do {
        i = on(t);
    }while (n.hasNode(i))
    r.dummy = e;
    n.setNode(i, r);
    return i;
}
function _r(n) {
    const e = new G().setGraph(n.graph());
    Z_1(n.nodes(), (r)=>{
        e.setNode(r, n.node(r));
    });
    Z_1(n.edges(), (r)=>{
        const t = e.edge(r.v, r.w) || {
            weight: 0,
            minlen: 1
        };
        const i = n.edge(r);
        e.setEdge(r.v, r.w, {
            weight: t.weight + i.weight,
            minlen: Math.max(t.minlen, i.minlen)
        });
    });
    return e;
}
function Gn(n) {
    const e = new G({
        multigraph: n.isMultigraph()
    }).setGraph(n.graph());
    Z_1(n.nodes(), (r)=>{
        if (!n.children(r).length) {
            e.setNode(r, n.node(r));
        }
    });
    Z_1(n.edges(), (r)=>{
        e.setEdge(r, n.edge(r));
    });
    return e;
}
function pn(n, e) {
    const { x, y } = n;
    const i = e.x - x;
    const o = e.y - y;
    let a = n.width / 2;
    let u = n.height / 2;
    if (!i && !o) {
        throw new Error("Not possible to find intersection inside of the rectangle");
    }
    let d;
    let f;
    if (Math.abs(o) * a > Math.abs(i) * u) {
        if (o < 0) {
            u = -u;
        }
        d = u * i / o;
        f = u;
    } else {
        if (i < 0) {
            a = -a;
        }
        d = a;
        f = a * o / i;
    }
    return {
        x: x + d,
        y: y + f
    };
}
function $(n) {
    const e = m(k(Vn(n) + 1), ()=>[]);
    Z_1(n.nodes(), (r)=>{
        const t = n.node(r);
        const t_rank = t.rank;
        if (!i_1(t_rank)) {
            e[t_rank][t.order] = r;
        }
    });
    return e;
}
function Cr(n) {
    const e = C(m(n.nodes(), (r)=>n.node(r).rank));
    Z_1(n.nodes(), (r)=>{
        const t = n.node(r);
        if (Bn(t, "rank")) {
            t.rank -= e;
        }
    });
}
function Ir(n) {
    const e = C(m(n.nodes(), (o)=>n.node(o).rank));
    const r = [];
    Z_1(n.nodes(), (o)=>{
        const a = n.node(o).rank - e;
        if (!r[a]) {
            r[a] = [];
        }
        r[a].push(o);
    });
    let t = 0;
    const nodeRankFactor = n.graph().nodeRankFactor;
    Z_1(r, (o, a)=>{
        i_1(o) && a % nodeRankFactor !== 0 ? --t : t && Z_1(o, (u)=>{
            n.node(u).rank += t;
        });
    });
}
function wn(n, e, r, t) {
    const i = {
        width: 0,
        height: 0
    };
    if (arguments.length >= 4) {
        i.rank = r;
        i.order = t;
    }
    return N(n, "border", i, e);
}
function Vn(n) {
    return x(m(n.nodes(), (e)=>{
        const rank = n.node(e).rank;
        if (!i_1(rank)) {
            return rank;
        }
    }));
}
function Rr(n, e) {
    const r = {
        lhs: [],
        rhs: []
    };
    Z_1(n, (t)=>{
        if (e(t)) {
            r.lhs.push(t);
        } else {
            r.rhs.push(t);
        }
    });
    return r;
}
function Tr(n, e) {
    return e();
}
function Mr(n) {
    function e(r) {
        const t = n.children(r);
        const i = n.node(r);
        if (t.length) {
            Z_1(t, e);
        }
        if (Object.prototype.hasOwnProperty.call(i, "minRank")) {
            i.borderLeft = [];
            i.borderRight = [];
            for(let o = i.minRank, a = i.maxRank + 1; o < a; ++o){
                bn(n, "borderLeft", "_bl", r, i, o);
                bn(n, "borderRight", "_br", r, i, o);
            }
        }
    }
    Z_1(n.children(), e);
}
function bn(n, borderType, r, t, i, rank) {
    const a = {
        width: 0,
        height: 0,
        rank,
        borderType
    };
    const u = i[borderType][rank - 1];
    const d = N(n, "border", a, r);
    i[borderType][rank] = d;
    n.setParent(d, t);
    if (u) {
        n.setEdge(u, d, {
            weight: 1
        });
    }
}
function Sr(n) {
    const e = n.graph().rankdir.toLowerCase();
    if (e === "lr" || e === "rl") {
        Yn(n);
    }
}
function Fr(n) {
    const e = n.graph().rankdir.toLowerCase();
    if (e === "bt" || e === "rl") {
        Ar(n);
    }
    if (e === "lr" || e === "rl") {
        Br(n);
        Yn(n);
    }
}
function Yn(n) {
    Z_1(n.nodes(), (e)=>{
        mn(n.node(e));
    });
    Z_1(n.edges(), (e)=>{
        mn(n.edge(e));
    });
}
function mn(n) {
    const n_width = n.width;
    n.width = n.height;
    n.height = n_width;
}
function Ar(n) {
    Z_1(n.nodes(), (e)=>{
        W(n.node(e));
    });
    Z_1(n.edges(), (e)=>{
        const r = n.edge(e);
        Z_1(r.points, W);
        if (Object.prototype.hasOwnProperty.call(r, "y")) {
            W(r);
        }
    });
}
function W(n) {
    n.y = -n.y;
}
function Br(n) {
    Z_1(n.nodes(), (e)=>{
        X(n.node(e));
    });
    Z_1(n.edges(), (e)=>{
        const r = n.edge(e);
        Z_1(r.points, X);
        if (Object.prototype.hasOwnProperty.call(r, "x")) {
            X(r);
        }
    });
}
function X(n) {
    const e = n.x;
    n.x = n.y;
    n.y = e;
}
function jr(n) {
    n.graph().dummyChains = [];
    Z_1(n.edges(), (e)=>{
        Gr(n, e);
    });
}
function Gr(n, edgeObj) {
    let edgeObj_v = edgeObj.v;
    let rank = n.node(edgeObj_v).rank;
    const edgeObj_w = edgeObj.w;
    const rank_1 = n.node(edgeObj_w).rank;
    const e_name = edgeObj.name;
    const edgeLabel = n.edge(edgeObj);
    const u_labelRank = edgeLabel.labelRank;
    if (rank_1 !== rank + 1) {
        n.removeEdge(edgeObj);
        let f;
        let s;
        let l = 0;
        ++rank;
        for(; rank < rank_1; ++l, ++rank){
            edgeLabel.points = [];
            f = {
                width: 0,
                height: 0,
                edgeLabel,
                edgeObj,
                rank
            };
            s = N(n, "edge", f, "_d");
            if (rank === u_labelRank) {
                f.width = edgeLabel.width;
                f.height = edgeLabel.height;
                f.dummy = "edge-label";
                f.labelpos = edgeLabel.labelpos;
            }
            n.setEdge(edgeObj_v, s, {
                weight: edgeLabel.weight
            }, e_name);
            if (l === 0) {
                n.graph().dummyChains.push(s);
            }
            edgeObj_v = s;
        }
        n.setEdge(edgeObj_v, edgeObj_w, {
            weight: edgeLabel.weight
        }, e_name);
    }
}
function Vr(n) {
    Z_1(n.graph().dummyChains, (e)=>{
        let r = n.node(e);
        const r_edgeLabel = r.edgeLabel;
        let i;
        for(n.setEdge(r.edgeObj, r_edgeLabel); r.dummy;){
            i = n.successors(e)[0];
            n.removeNode(e);
            r_edgeLabel.points.push({
                x: r.x,
                y: r.y
            });
            if (r.dummy === "edge-label") {
                r_edgeLabel.x = r.x;
                r_edgeLabel.y = r.y;
                r_edgeLabel.width = r.width;
                r_edgeLabel.height = r.height;
            }
            e = i;
            r = n.node(e);
        }
    });
}
function un(n) {
    const e = {};
    function r(t) {
        const i = n.node(t);
        if (Object.prototype.hasOwnProperty.call(e, t)) {
            return i.rank;
        }
        e[t] = true;
        let o = C(m(n.outEdges(t), (a)=>r(a.w) - n.edge(a).minlen));
        if (o === Number.POSITIVE_INFINITY || o === undefined || o === null) {
            o = 0;
        }
        return i.rank = o;
    }
    Z_1(n.sources(), r);
}
function I(n, e) {
    return n.node(e.w).rank - n.node(e.v).rank - n.edge(e).minlen;
}
function $n(n) {
    const e = new G({
        directed: false
    });
    const r = n.nodes()[0];
    const t = n.nodeCount();
    e.setNode(r, {});
    let i;
    let o;
    while(Yr(e, n) < t){
        i = $r(e, n);
        o = e.hasNode(i.v) ? I(n, i) : -I(n, i);
        Dr(e, n, o);
    }
    return e;
}
function Yr(n, e) {
    function r(t) {
        Z_1(e.nodeEdges(t), (i)=>{
            const o = i.v;
            const a = t === o ? i.w : o;
            if (!n.hasNode(a) && !I(e, i)) {
                n.setNode(a, {});
                n.setEdge(t, a, {});
                r(a);
            }
        });
    }
    Z_1(n.nodes(), r);
    return n.nodeCount();
}
function $r(n, e) {
    return an(e.edges(), (r)=>{
        if (n.hasNode(r.v) !== n.hasNode(r.w)) {
            return I(e, r);
        }
    });
}
function Dr(n, e, r) {
    Z_1(n.nodes(), (t)=>{
        e.node(t).rank += r;
    });
}
function qr() {}
qr.prototype = new Error;
function Dn(n, e, r) {
    if (!w(e)) {
        e = [
            e
        ];
    }
    const t = (n.isDirected() ? n.successors : n.neighbors).bind(n);
    const i = [];
    const o = {};
    Z_1(e, (a)=>{
        if (!n.hasNode(a)) {
            throw new Error(`Graph does not have node: ${a}`);
        }
        qn(n, a, r === "post", o, t, i);
    });
    return i;
}
function qn(n, e, r, t, i, o) {
    if (!Object.prototype.hasOwnProperty.call(t, e)) {
        t[e] = true;
        if (!r) {
            o.push(e);
        }
        Z_1(i(e), (a)=>{
            qn(n, a, r, t, i, o);
        });
        if (r) {
            o.push(e);
        }
    }
}
function Wr(n, e) {
    return Dn(n, e, "post");
}
function Xr(n, e) {
    return Dn(n, e, "pre");
}
E.initLowLimValues = fn;
E.initCutValues = dn;
E.calcCutValue = Wn;
E.leaveEdge = Hn;
E.enterEdge = zn;
E.exchangeEdges = Un;
function E(n) {
    n = _r(n);
    un(n);
    const e = $n(n);
    fn(e);
    dn(e, n);
    let r;
    let t;
    while(r = Hn(e)){
        t = zn(e, n, r);
        Un(e, n, r, t);
    }
}
function dn(n, e) {
    let r = Wr(n, n.nodes());
    r = r.slice(0, r.length - 1);
    Z_1(r, (t)=>{
        Hr(n, e, t);
    });
}
function Hr(n, e, r) {
    const t = n.node(r);
    const t_parent = t.parent;
    n.edge(r, t_parent).cutvalue = Wn(n, e, r);
}
function Wn(n, e, r) {
    const t = n.node(r);
    const t_parent = t.parent;
    let o = true;
    let a = e.edge(r, t_parent);
    let u = 0;
    if (!a) {
        o = false;
        a = e.edge(t_parent, r);
    }
    u = a.weight;
    Z_1(e.nodeEdges(r), (d)=>{
        const f = d.v === r;
        const s = f ? d.w : d.v;
        if (s !== t_parent) {
            const l = f === o;
            const h = e.edge(d).weight;
            u += l ? h : -h;
            if (Ur(n, r, s)) {
                const v = n.edge(r, s).cutvalue;
                u += l ? -v : v;
            }
        }
    });
    return u;
}
function fn(n, e) {
    if (arguments.length < 2) {
        e = n.nodes()[0];
    }
    Xn(n, {}, 1, e);
}
function Xn(n, e, r, t, i) {
    const o = r;
    const a = n.node(t);
    e[t] = true;
    Z_1(n.neighbors(t), (u)=>{
        if (!Object.prototype.hasOwnProperty.call(e, u)) {
            r = Xn(n, e, r, u, t);
        }
    });
    a.low = o;
    a.lim = r++;
    if (i) {
        a.parent = i;
    } else {
        delete a.parent;
    }
    return r;
}
function Hn(n) {
    return rn(n.edges(), (e)=>n.edge(e).cutvalue < 0);
}
function zn(n, e, r) {
    let t = r.v;
    let i = r.w;
    if (!e.hasEdge(t, i)) {
        t = r.w;
        i = r.v;
    }
    const o = n.node(t);
    const a = n.node(i);
    let u = o;
    let d = false;
    if (o.lim > a.lim) {
        u = a;
        d = true;
    }
    const f = $_1(e.edges(), (s)=>d === gn(n, n.node(s.v), u) && d !== gn(n, n.node(s.w), u));
    return an(f, (s)=>I(e, s));
}
function Un(n, e, { v, w }, t) {
    n.removeEdge(v, w);
    n.setEdge(t.v, t.w, {});
    fn(n);
    dn(n, e);
    zr(n, e);
}
function zr(n, e) {
    const r = rn(n.nodes(), (i)=>!e.node(i).parent);
    let t = Xr(n, r);
    t = t.slice(1);
    Z_1(t, (i)=>{
        const parent = n.node(i).parent;
        let a = e.edge(i, parent);
        let u = false;
        if (!a) {
            a = e.edge(parent, i);
            u = true;
        }
        e.node(i).rank = e.node(parent).rank + (u ? a.minlen : -a.minlen);
    });
}
function Ur(n, e, r) {
    return n.hasEdge(e, r);
}
function gn(n, e, r) {
    return r.low <= e.lim && e.lim <= r.lim;
}
function Jr(n) {
    switch(n.graph().ranker){
        case "network-simplex":
            yn(n);
            break;
        case "tight-tree":
            Zr(n);
            break;
        case "longest-path":
            Kr(n);
            break;
        default:
            yn(n);
    }
}
var Kr = un;
function Zr(n) {
    un(n);
    $n(n);
}
function yn(n) {
    E(n);
}
function Qr(n) {
    const e = N(n, "root", {}, "_root");
    const r = nt(n);
    const t = x(a0(r)) - 1;
    const i = 2 * t + 1;
    n.graph().nestingRoot = e;
    Z_1(n.edges(), (a)=>{
        n.edge(a).minlen *= i;
    });
    const o = et(n) + 1;
    Z_1(n.children(), (a)=>{
        Jn(n, e, i, o, t, r, a);
    });
    n.graph().nodeRankFactor = i;
}
function Jn(n, e, minlen_1, t, i, o, a) {
    const u = n.children(a);
    if (!u.length) {
        if (a !== e) {
            n.setEdge(e, a, {
                weight: 0,
                minlen: minlen_1
            });
        }
        return;
    }
    const d = wn(n, "_bt");
    const f = wn(n, "_bb");
    const s = n.node(a);
    n.setParent(d, a);
    s.borderTop = d;
    n.setParent(f, a);
    s.borderBottom = f;
    Z_1(u, (l)=>{
        Jn(n, e, minlen_1, t, i, o, l);
        const h = n.node(l);
        const v = h.borderTop ? h.borderTop : l;
        const p = h.borderBottom ? h.borderBottom : l;
        const weight = h.borderTop ? t : 2 * t;
        const minlen = v !== p ? 1 : i - o[a] + 1;
        n.setEdge(d, v, {
            weight,
            minlen,
            nestingEdge: true
        });
        n.setEdge(p, f, {
            weight,
            minlen,
            nestingEdge: true
        });
    });
    if (!n.parent(a)) {
        n.setEdge(e, d, {
            weight: 0,
            minlen: i + o[a]
        });
    }
}
function nt(n) {
    const e = {};
    function r(t, i) {
        const o = n.children(t);
        if (o && o.length) {
            Z_1(o, (a)=>{
                r(a, i + 1);
            });
        }
        e[t] = i;
    }
    Z_1(n.children(), (t)=>{
        r(t, 1);
    });
    return e;
}
function et(n) {
    return a1(n.edges(), (e, r)=>e + n.edge(r).weight, 0);
}
function rt(n) {
    const e = n.graph();
    n.removeNode(e.nestingRoot);
    delete e.nestingRoot;
    Z_1(n.edges(), (r)=>{
        const t = n.edge(r);
        if (t.nestingEdge) {
            n.removeEdge(r);
        }
    });
}
function tt(n, e, r) {
    const t = {};
    let i;
    Z_1(r, (o)=>{
        let u;
        let d;
        for(let a = n.parent(o); a;){
            u = n.parent(a);
            if (u) {
                d = t[u];
                t[u] = a;
            } else {
                d = i;
                i = a;
            }
            if (d && d !== a) {
                e.setEdge(d, a);
                return;
            }
            a = u;
        }
    });
}
function it(n, e, r) {
    const t = at(n);
    const i = new G({
        compound: true
    }).setGraph({
        root: t
    }).setDefaultNodeLabel((o)=>n.node(o));
    Z_1(n.nodes(), (o)=>{
        const a = n.node(o);
        const u = n.parent(o);
        if (a.rank === e || a.minRank <= e && e <= a.maxRank) {
            i.setNode(o);
            i.setParent(o, u || t);
            Z_1(n[r](o), (d)=>{
                const f = d.v === o ? d.w : d.v;
                const s = i.edge(f, o);
                const l = i_1(s) ? 0 : s.weight;
                i.setEdge(f, o, {
                    weight: n.edge(d).weight + l
                });
            });
            if (Object.prototype.hasOwnProperty.call(a, "minRank")) {
                i.setNode(o, {
                    borderLeft: a.borderLeft[e],
                    borderRight: a.borderRight[e]
                });
            }
        }
    });
    return i;
}
function at(n) {
    let e;
    while(n.hasNode(e = on("_root")));
    return e;
}
function ot(n, e) {
    let r = 0;
    for(let t = 1; t < e.length; ++t){
        r += ut(n, e[t - 1], e[t]);
    }
    return r;
}
function ut(n, e, r) {
    const t = mr(r, m(r, (f, s)=>s));
    const i = P(m(e, (f)=>M(m(n.outEdges(f), (s)=>({
                pos: t[s.w],
                weight: n.edge(s).weight
            })), "pos")));
    for(var o = 1; o < r.length;){
        o <<= 1;
    }
    const a = 2 * o - 1;
    o -= 1;
    const u = m(new Array(a), ()=>0);
    let d = 0;
    Z_1(i.forEach((f)=>{
        let s = f.pos + o;
        u[s] += f.weight;
        let l = 0;
        while(s > 0){
            if (s % 2) {
                l += u[s + 1];
            }
            s = s - 1 >> 1;
            u[s] += f.weight;
        }
        d += f.weight * l;
    }));
    return d;
}
function dt(n) {
    const e = {};
    const r = $_1(n.nodes(), (u)=>!n.children(u).length);
    const t = x(m(r, (u)=>n.node(u).rank));
    const i = m(k(t + 1), ()=>[]);
    function o(u) {
        if (!Bn(e, u)) {
            e[u] = true;
            const d = n.node(u);
            i[d.rank].push(u);
            Z_1(n.successors(u), o);
        }
    }
    const a = M(r, (u)=>n.node(u).rank);
    Z_1(a, o);
    return i;
}
function ft(n, e) {
    return m(e, (r)=>{
        const t = n.inEdges(r);
        if (t.length) {
            const i = a1(t, (o, a)=>{
                const u = n.edge(a);
                const d = n.node(a.v);
                return {
                    sum: o.sum + u.weight * d.order,
                    weight: o.weight + u.weight
                };
            }, {
                sum: 0,
                weight: 0
            });
            return {
                v: r,
                barycenter: i.sum / i.weight,
                weight: i.weight
            };
        } else {
            return {
                v: r
            };
        }
    });
}
function st(n, e) {
    const r = {};
    Z_1(n, (i, i_3)=>{
        const a = r[i.v] = {
            indegree: 0,
            in: [],
            out: [],
            vs: [
                i.v
            ],
            i: i_3
        };
        if (!i_1(i.barycenter)) {
            a.barycenter = i.barycenter;
            a.weight = i.weight;
        }
    });
    Z_1(e.edges(), (i)=>{
        const o = r[i.v];
        const a = r[i.w];
        if (!i_1(o) && !i_1(a)) {
            a.indegree++;
            o.out.push(r[i.w]);
        }
    });
    const t = $_1(r, (i)=>!i.indegree);
    return ct(t);
}
function ct(n) {
    const e = [];
    function r(o) {
        return (a)=>{
            a.merged || (i_1(a.barycenter) || i_1(o.barycenter) || a.barycenter >= o.barycenter) && lt(o, a);
        };
    }
    function t(o) {
        return (a)=>{
            a.in.push(o);
            if (--a.indegree === 0) {
                n.push(a);
            }
        };
    }
    while(n.length){
        const i = n.pop();
        e.push(i);
        Z_1(i.in.reverse(), r(i));
        Z_1(i.out, t(i));
    }
    return m($_1(e, (o)=>!o.merged), (o)=>j(o, [
            "vs",
            "i",
            "barycenter",
            "weight"
        ]));
}
function lt(n, e) {
    let r = 0;
    let t = 0;
    if (n.weight) {
        r += n.barycenter * n.weight;
        t += n.weight;
    }
    if (e.weight) {
        r += e.barycenter * e.weight;
        t += e.weight;
    }
    n.vs = e.vs.concat(n.vs);
    n.barycenter = r / t;
    n.weight = t;
    n.i = Math.min(e.i, n.i);
    e.merged = true;
}
function ht(n, e) {
    const r = Rr(n, (s)=>Object.prototype.hasOwnProperty.call(s, "barycenter"));
    const r_lhs = r.lhs;
    const i = M(r.rhs, (s)=>-s.i);
    const o = [];
    let a = 0;
    let u = 0;
    let d = 0;
    r_lhs.sort(vt(!!e));
    d = xn(o, i, d);
    Z_1(r_lhs, (s)=>{
        d += s.vs.length;
        o.push(s.vs);
        a += s.barycenter * s.weight;
        u += s.weight;
        d = xn(o, i, d);
    });
    const f = {
        vs: P(o)
    };
    if (u) {
        f.barycenter = a / u;
        f.weight = u;
    }
    return f;
}
function xn(n, e, r) {
    let t;
    while(e.length && (t = B(e)).i <= r){
        e.pop();
        n.push(t.vs);
        r++;
    }
    return r;
}
function vt(n) {
    return (e, r)=>{
        if (e.barycenter < r.barycenter) {
            return -1;
        }
        if (e.barycenter > r.barycenter) {
            return 1;
        }
        if (n) {
            return r.i - e.i;
        }
        return e.i - r.i;
    };
}
function Kn(n, e, r, t) {
    let i = n.children(e);
    const o = n.node(e);
    const a = o ? o.borderLeft : undefined;
    const u = o ? o.borderRight : undefined;
    const d = {};
    if (a) {
        i = $_1(i, (p)=>p !== a && p !== u);
    }
    const f = ft(n, i);
    Z_1(f, (p)=>{
        if (n.children(p.v).length) {
            const b = Kn(n, p.v, r, t);
            d[p.v] = b;
            if (Object.prototype.hasOwnProperty.call(b, "barycenter")) {
                wt(p, b);
            }
        }
    });
    const s = st(f, r);
    pt(s, d);
    const l = ht(s, t);
    if (a && (l.vs = P([
        a,
        l.vs,
        u
    ]), n.predecessors(a).length)) {
        const h = n.node(n.predecessors(a)[0]);
        const v = n.node(n.predecessors(u)[0]);
        if (!Object.prototype.hasOwnProperty.call(l, "barycenter")) {
            l.barycenter = 0;
            l.weight = 0;
        }
        l.barycenter = (l.barycenter * l.weight + h.order + v.order) / (l.weight + 2);
        l.weight += 2;
    }
    return l;
}
function pt(n, e) {
    Z_1(n, (r)=>{
        r.vs = P(r.vs.map((t)=>{
            if (e[t]) {
                return e[t].vs;
            }
            return t;
        }));
    });
}
function wt(n, e) {
    if (i_1(n.barycenter)) {
        n.barycenter = e.barycenter;
        n.weight = e.weight;
    } else {
        n.barycenter = (n.barycenter * n.weight + e.barycenter * e.weight) / (n.weight + e.weight);
        n.weight += e.weight;
    }
}
function bt(n) {
    const e = Vn(n);
    const r = En(n, k(1, e + 1), "inEdges");
    const t = En(n, k(e - 1, -1, -1), "outEdges");
    let i = dt(n);
    On(n, i);
    let Number_POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    let a;
    for(let u = 0, d = 0; d < 4; ++u, ++d){
        mt(u % 2 ? r : t, u % 4 >= 2);
        i = $(n);
        const f = ot(n, i);
        if (f < Number_POSITIVE_INFINITY) {
            d = 0;
            a = We(i);
            Number_POSITIVE_INFINITY = f;
        }
    }
    On(n, a);
}
function En(n, e, r) {
    return m(e, (t)=>it(n, t, r));
}
function mt(n, e) {
    const r = new G;
    Z_1(n, (t)=>{
        const root = t.graph().root;
        const o = Kn(t, root, r, e);
        Z_1(o.vs, (a, u)=>{
            t.node(a).order = u;
        });
        tt(t, r, o.vs);
    });
}
function On(n, e) {
    Z_1(e, (r)=>{
        Z_1(r, (t, i)=>{
            n.node(t).order = i;
        });
    });
}
function gt(n) {
    const e = xt(n);
    Z_1(n.graph().dummyChains, (r)=>{
        let t = n.node(r);
        for(let i = t.edgeObj, o = yt(n, e, i.v, i.w), a = o.path, u = o.lca, d = 0, f = a[d], s = true; r !== i.w;){
            t = n.node(r);
            if (s) {
                while((f = a[d]) !== u && n.node(f).maxRank < t.rank){
                    d++;
                }
                if (f === u) {
                    s = false;
                }
            }
            if (!s) {
                while(d < a.length - 1 && n.node(f = a[d + 1]).minRank <= t.rank){
                    d++;
                }
                f = a[d];
            }
            n.setParent(r, f);
            r = n.successors(r)[0];
        }
    });
}
function yt(n, e, r, t) {
    const i = [];
    const o = [];
    const a = Math.min(e[r].low, e[t].low);
    const u = Math.max(e[r].lim, e[t].lim);
    let d;
    let lca;
    d = r;
    do {
        d = n.parent(d);
        i.push(d);
    }while (d && (e[d].low > a || u > e[d].lim))
    lca = d;
    for(d = t; (d = n.parent(d)) !== lca;){
        o.push(d);
    }
    return {
        path: i.concat(o.reverse()),
        lca
    };
}
function xt(n) {
    const e = {};
    let r = 0;
    function t(i) {
        const low = r;
        Z_1(n.children(i), t);
        e[i] = {
            low,
            lim: r++
        };
    }
    Z_1(n.children(), t);
    return e;
}
function Et(n, e) {
    const r = {};
    function t(i, o) {
        let a = 0;
        let u = 0;
        const i_length = i.length;
        const f = B(o);
        Z_1(o, (s, l)=>{
            const h = kt(n, s);
            const v = h ? n.node(h).order : i_length;
            if (h || s === f) {
                Z_1(o.slice(u, l + 1), (p)=>{
                    Z_1(n.predecessors(p), (b)=>{
                        const L = n.node(b);
                        const L_order = L.order;
                        if ((L_order < a || v < L_order) && !(L.dummy && n.node(p).dummy)) {
                            Zn(r, b, p);
                        }
                    });
                });
                u = l + 1;
                a = v;
            }
        });
        return o;
    }
    a1(e, t);
    return r;
}
function Ot(n, e) {
    const r = {};
    function t(o, a, u, d, f) {
        let s;
        Z_1(k(a, u), (l)=>{
            s = o[l];
            if (n.node(s).dummy) {
                Z_1(n.predecessors(s), (h)=>{
                    const v = n.node(h);
                    if (v.dummy && (v.order < d || v.order > f)) {
                        Zn(r, h, s);
                    }
                });
            }
        });
    }
    function i(o, a) {
        let u = -1;
        let d;
        let f = 0;
        Z_1(a, (s, l)=>{
            if (n.node(s).dummy === "border") {
                const h = n.predecessors(s);
                if (h.length) {
                    d = n.node(h[0]).order;
                    t(a, f, l, u, d);
                    f = l;
                    u = d;
                }
            }
            t(a, f, a.length, d, o.length);
        });
        return a;
    }
    a1(e, i);
    return r;
}
function kt(n, e) {
    if (n.node(e).dummy) {
        return rn(n.predecessors(e), (r)=>n.node(r).dummy);
    }
}
function Zn(n, e, r) {
    if (e > r) {
        const t = e;
        e = r;
        r = t;
    }
    if (!Object.prototype.hasOwnProperty.call(n, e)) {
        Object.defineProperty(n, e, {
            enumerable: true,
            configurable: true,
            value: {},
            writable: true
        });
    }
    const i = n[e];
    Object.defineProperty(i, r, {
        enumerable: true,
        configurable: true,
        value: true,
        writable: true
    });
}
function Pt(n, e, r) {
    if (e > r) {
        const t = e;
        e = r;
        r = t;
    }
    return !!n[e] && Object.prototype.hasOwnProperty.call(n[e], r);
}
function Nt(n, e, r, t) {
    const i = {};
    const align = {};
    const a = {};
    Z_1(e, (u)=>{
        Z_1(u, (d, f)=>{
            i[d] = d;
            align[d] = d;
            a[d] = f;
        });
    });
    Z_1(e, (u)=>{
        let d = -1;
        Z_1(u, (f)=>{
            let s = t(f);
            if (s.length) {
                s = M(s, (b)=>a[b]);
                const l = (s.length - 1) / 2;
                for(let h = Math.floor(l), v = Math.ceil(l); h <= v; ++h){
                    const p = s[h];
                    if (align[f] === f && d < a[p] && !Pt(r, f, p)) {
                        align[p] = f;
                        align[f] = i[f] = i[p];
                        d = a[p];
                    }
                }
            }
        });
    });
    return {
        root: i,
        align
    };
}
function Lt(n, e, root, align, i) {
    const o = {};
    const a = _t(n, e, root, i);
    const u = i ? "borderLeft" : "borderRight";
    function d(l, h) {
        let v = a.nodes();
        for(let p = v.pop(), b = {}; p;){
            if (b[p]) {
                l(p);
            } else {
                b[p] = true;
                v.push(p);
                v = v.concat(h(p));
            }
            p = v.pop();
        }
    }
    function f(l) {
        o[l] = a.inEdges(l).reduce((acc, item)=>Math.max(acc, o[item.v] + a.edge(item)), 0);
    }
    function s(l) {
        const h = a.outEdges(l).reduce((acc, item)=>Math.min(acc, o[item.w] - a.edge(item)), Number.POSITIVE_INFINITY);
        const v = n.node(l);
        if (h !== Number.POSITIVE_INFINITY && v.borderType !== u) {
            o[l] = Math.max(o[l], h);
        }
    }
    d(f, a.predecessors.bind(a));
    d(s, a.successors.bind(a));
    Z_1(align, (l)=>{
        o[l] = o[root[l]];
    });
    return o;
}
function _t(n, e, root, t) {
    const i = new G;
    const o = n.graph();
    const a = Mt(o.nodesep, o.edgesep, t);
    Z_1(e, (u)=>{
        let d;
        Z_1(u, (f)=>{
            const s = root[f];
            i.setNode(s);
            if (d) {
                const l = root[d];
                const h = i.edge(l, s);
                i.setEdge(l, s, Math.max(a(n, f, d), h || 0));
            }
            d = f;
        });
    });
    return i;
}
function Ct(n, e) {
    return an(a0(e), (r)=>{
        let Number_NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
        let Number_POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
        Qe(r, (o, a)=>{
            const u = St(n, a) / 2;
            Number_NEGATIVE_INFINITY = Math.max(o + u, Number_NEGATIVE_INFINITY);
            Number_POSITIVE_INFINITY = Math.min(o - u, Number_POSITIVE_INFINITY);
        });
        return Number_NEGATIVE_INFINITY - Number_POSITIVE_INFINITY;
    });
}
function It(n, e) {
    const r = a0(e);
    const t = C(r);
    const i = x(r);
    Z_1([
        "u",
        "d"
    ], (o)=>{
        Z_1([
            "l",
            "r"
        ], (a)=>{
            const u = o + a;
            const d = n[u];
            let f;
            if (d !== e) {
                const s = a0(d);
                f = a === "l" ? t - C(s) : i - x(s);
                if (f) {
                    n[u] = Y(d, (l)=>l + f);
                }
            }
        });
    });
}
function Rt(n, align) {
    return Y(n.ul, (r, t)=>{
        if (align) {
            return n[align.toLowerCase()][t];
        }
        const i = M(m(n, t));
        return (i[1] + i[2]) / 2;
    });
}
function Tt(n) {
    const e = $(n);
    const r = K(Et(n, e), Ot(n, e));
    const t = {};
    let i;
    Z_1([
        "u",
        "d"
    ], (a)=>{
        i = a === "u" ? e : a0(e).reverse();
        Z_1([
            "l",
            "r"
        ], (u)=>{
            if (u === "r") {
                i = m(i, (l)=>a0(l).reverse());
            }
            const d = (a === "u" ? n.predecessors : n.successors).bind(n);
            const f = Nt(n, i, r, d);
            let s = Lt(n, i, f.root, f.align, u === "r");
            if (u === "r") {
                s = Y(s, (l)=>-l);
            }
            t[a + u] = s;
        });
    });
    const o = Ct(n, t);
    It(t, o);
    return Rt(t, n.graph().align);
}
function Mt(nodesep, edgesep, r) {
    return (t, i, o)=>{
        const a = t.node(i);
        const u = t.node(o);
        let d = 0;
        let f;
        d += a.width / 2;
        if (Object.prototype.hasOwnProperty.call(a, "labelpos")) {
            switch(a.labelpos.toLowerCase()){
                case "l":
                    f = -a.width / 2;
                    break;
                case "r":
                    f = a.width / 2;
                    break;
            }
        }
        if (f) {
            d += r ? f : -f;
        }
        f = 0;
        d += (a.dummy ? edgesep : nodesep) / 2;
        d += (u.dummy ? edgesep : nodesep) / 2;
        d += u.width / 2;
        if (Object.prototype.hasOwnProperty.call(u, "labelpos")) {
            switch(u.labelpos.toLowerCase()){
                case "l":
                    f = u.width / 2;
                    break;
                case "r":
                    f = -u.width / 2;
                    break;
            }
        }
        if (f) {
            d += r ? f : -f;
        }
        f = 0;
        return d;
    };
}
function St(n, e) {
    return n.node(e).width;
}
function Ft(n) {
    n = Gn(n);
    At(n);
    nr(Tt(n), (e, r)=>{
        n.node(r).x = e;
    });
}
function At(n) {
    const e = $(n);
    const ranksep = n.graph().ranksep;
    let t = 0;
    Z_1(e, (i)=>{
        const o = x(m(i, (a)=>n.node(a).height));
        Z_1(i, (a)=>{
            n.node(a).y = t + o / 2;
        });
        t += o + ranksep;
    });
}
function di(n, e) {
    const r = Tr;
    r("layout", ()=>{
        var t = r("  buildLayoutGraph", ()=>Ht(n));
        r("  runLayout", ()=>Bt(t, r));
        r("  updateInputGraph", ()=>jt(n, t));
    });
}
function Bt(n, e) {
    e("    makeSpaceForEdgeLabels", ()=>zt(n));
    e("    removeSelfEdges", ()=>ti(n));
    e("    acyclic", ()=>Pr(n));
    e("    nestingGraph.run", ()=>Qr(n));
    e("    rank", ()=>Jr(Gn(n)));
    e("    injectEdgeLabelProxies", ()=>Ut(n));
    e("    removeEmptyRanks", ()=>Ir(n));
    e("    nestingGraph.cleanup", ()=>rt(n));
    e("    normalizeRanks", ()=>Cr(n));
    e("    assignRankMinMax", ()=>Jt(n));
    e("    removeEdgeLabelProxies", ()=>Kt(n));
    e("    normalize.run", ()=>jr(n));
    e("    parentDummyChains", ()=>gt(n));
    e("    addBorderSegments", ()=>Mr(n));
    e("    order", ()=>bt(n));
    e("    insertSelfEdges", ()=>ii(n));
    e("    adjustCoordinateSystem", ()=>Sr(n));
    e("    position", ()=>Ft(n));
    e("    positionSelfEdges", ()=>ai(n));
    e("    removeBorderNodes", ()=>ri(n));
    e("    normalize.undo", ()=>Vr(n));
    e("    fixupEdgeLabelCoords", ()=>ni(n));
    e("    undoCoordinateSystem", ()=>Fr(n));
    e("    translateGraph", ()=>Zt(n));
    e("    assignNodeIntersects", ()=>Qt(n));
    e("    reversePoints", ()=>ei(n));
    e("    acyclic.undo", ()=>Lr(n));
}
function jt(n, e) {
    Z_1(n.nodes(), (r)=>{
        const t = n.node(r);
        const i = e.node(r);
        if (t) {
            t.x = i.x;
            t.y = i.y;
            if (e.children(r).length) {
                t.width = i.width;
                t.height = i.height;
            }
        }
    });
    Z_1(n.edges(), (r)=>{
        const t = n.edge(r);
        const i = e.edge(r);
        t.points = i.points;
        if (Object.prototype.hasOwnProperty.call(i, "x")) {
            t.x = i.x;
            t.y = i.y;
        }
    });
    n.graph().width = e.graph().width;
    n.graph().height = e.graph().height;
}
const Gt = [
    "nodesep",
    "edgesep",
    "ranksep",
    "marginx",
    "marginy"
];
const Vt = {
    ranksep: 50,
    edgesep: 20,
    nodesep: 50,
    rankdir: "tb"
};
const Yt = [
    "acyclicer",
    "ranker",
    "rankdir",
    "align"
];
const $t = [
    "width",
    "height"
];
const Dt = {
    width: 0,
    height: 0
};
const qt = [
    "minlen",
    "weight",
    "width",
    "height",
    "labeloffset"
];
const Wt = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r"
};
const Xt = [
    "labelpos"
];
function Ht(n) {
    const e = new G({
        multigraph: true,
        compound: true
    });
    const r = z(n.graph());
    e.setGraph(K({}, Vt, H(r, Gt), j(r, Yt)));
    Z_1(n.nodes(), (t)=>{
        const i = z(n.node(t));
        e.setNode(t, He(H(i, $t), Dt));
        e.setParent(t, n.parent(t));
    });
    Z_1(n.edges(), (t)=>{
        const i = z(n.edge(t));
        e.setEdge(t, K({}, Wt, H(i, qt), j(i, Xt)));
    });
    return e;
}
function zt(n) {
    const e = n.graph();
    e.ranksep /= 2;
    Z_1(n.edges(), (r)=>{
        const t = n.edge(r);
        t.minlen *= 2;
        t.labelpos.toLowerCase() !== "c" && (e.rankdir === "TB" || e.rankdir === "BT" ? t.width += t.labeloffset : t.height += t.labeloffset);
    });
}
function Ut(n) {
    Z_1(n.edges(), (e)=>{
        const r = n.edge(e);
        if (r.width && r.height) {
            const t = n.node(e.v);
            const i = n.node(e.w);
            const o = {
                rank: (i.rank - t.rank) / 2 + t.rank,
                e
            };
            N(n, "edge-proxy", o, "_ep");
        }
    });
}
function Jt(n) {
    let e = 0;
    Z_1(n.nodes(), (r)=>{
        const t = n.node(r);
        if (t.borderTop) {
            t.minRank = n.node(t.borderTop).rank;
            t.maxRank = n.node(t.borderBottom).rank;
            e = x(e, t.maxRank);
        }
    });
    n.graph().maxRank = e;
}
function Kt(n) {
    Z_1(n.nodes(), (e)=>{
        const r = n.node(e);
        if (r.dummy === "edge-proxy") {
            n.edge(r.e).labelRank = r.rank;
            n.removeNode(e);
        }
    });
}
function Zt(n) {
    let Number_POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    let r = 0;
    let Number_POSITIVE_INFINITY_1 = Number.POSITIVE_INFINITY;
    let i = 0;
    const o = n.graph();
    const a = o.marginx || 0;
    const u = o.marginy || 0;
    function d({ x, y, width, height }) {
        Number_POSITIVE_INFINITY = Math.min(Number_POSITIVE_INFINITY, x - width / 2);
        r = Math.max(r, x + width / 2);
        Number_POSITIVE_INFINITY_1 = Math.min(Number_POSITIVE_INFINITY_1, y - height / 2);
        i = Math.max(i, y + height / 2);
    }
    Z_1(n.nodes(), (f)=>{
        d(n.node(f));
    });
    Z_1(n.edges(), (f)=>{
        const s = n.edge(f);
        if (Object.prototype.hasOwnProperty.call(s, "x")) {
            d(s);
        }
    });
    Number_POSITIVE_INFINITY -= a;
    Number_POSITIVE_INFINITY_1 -= u;
    Z_1(n.nodes(), (f)=>{
        const s = n.node(f);
        s.x -= Number_POSITIVE_INFINITY;
        s.y -= Number_POSITIVE_INFINITY_1;
    });
    Z_1(n.edges(), (f)=>{
        const s = n.edge(f);
        Z_1(s.points, (l)=>{
            l.x -= Number_POSITIVE_INFINITY;
            l.y -= Number_POSITIVE_INFINITY_1;
        });
        if (Object.prototype.hasOwnProperty.call(s, "x")) {
            s.x -= Number_POSITIVE_INFINITY;
        }
        if (Object.prototype.hasOwnProperty.call(s, "y")) {
            s.y -= Number_POSITIVE_INFINITY_1;
        }
    });
    o.width = r - Number_POSITIVE_INFINITY + a;
    o.height = i - Number_POSITIVE_INFINITY_1 + u;
}
function Qt(n) {
    Z_1(n.edges(), (e)=>{
        const r = n.edge(e);
        const t = n.node(e.v);
        const i = n.node(e.w);
        let o;
        let a;
        if (r.points) {
            o = r.points[0];
            a = r.points[r.points.length - 1];
        } else {
            r.points = [];
            o = i;
            a = t;
        }
        r.points.unshift(pn(t, o));
        r.points.push(pn(i, a));
    });
}
function ni(n) {
    Z_1(n.edges(), (e)=>{
        const r = n.edge(e);
        if (Object.prototype.hasOwnProperty.call(r, "x")) {
            if (r.labelpos === "l" || r.labelpos === "r") {
                r.width -= r.labeloffset;
            }
            switch(r.labelpos){
                case "l":
                    r.x -= r.width / 2 + r.labeloffset;
                    break;
                case "r":
                    r.x += r.width / 2 + r.labeloffset;
                    break;
            }
        }
    });
}
function ei(n) {
    Z_1(n.edges(), (e)=>{
        const r = n.edge(e);
        if (r.reversed) {
            r.points.reverse();
        }
    });
}
function ri(n) {
    Z_1(n.nodes(), (e)=>{
        if (n.children(e).length) {
            const r = n.node(e);
            const t = n.node(r.borderTop);
            const i = n.node(r.borderBottom);
            const o = n.node(B(r.borderLeft));
            const a = n.node(B(r.borderRight));
            r.width = Math.abs(a.x - o.x);
            r.height = Math.abs(i.y - t.y);
            r.x = o.x + r.width / 2;
            r.y = t.y + r.height / 2;
        }
    });
    Z_1(n.nodes(), (e)=>{
        if (n.node(e).dummy === "border") {
            n.removeNode(e);
        }
    });
}
function ti(n) {
    Z_1(n.edges(), (e)=>{
        if (e.v === e.w) {
            const r = n.node(e.v);
            if (!r.selfEdges) {
                r.selfEdges = [];
            }
            r.selfEdges.push({
                e,
                label: n.edge(e)
            });
            n.removeEdge(e);
        }
    });
}
function ii(n) {
    const e = $(n);
    Z_1(e, (r)=>{
        let t = 0;
        Z_1(r, (i, o)=>{
            const a = n.node(i);
            a.order = o + t;
            Z_1(a.selfEdges, (u)=>{
                N(n, "selfedge", {
                    width: u.label.width,
                    height: u.label.height,
                    rank: a.rank,
                    order: o + ++t,
                    e: u.e,
                    label: u.label
                }, "_se");
            });
            delete a.selfEdges;
        });
    });
}
function ai(n) {
    Z_1(n.nodes(), (e)=>{
        const r = n.node(e);
        if (r.dummy === "selfedge") {
            const t = n.node(r.e.v);
            const i = t.x + t.width / 2;
            const y = t.y;
            const a = r.x - i;
            const u = t.height / 2;
            n.setEdge(r.e, r.label);
            n.removeNode(e);
            r.label.points = [
                {
                    x: i + 2 * a / 3,
                    y: y - u
                },
                {
                    x: i + 5 * a / 6,
                    y: y - u
                },
                {
                    x: i + a,
                    y
                },
                {
                    x: i + 5 * a / 6,
                    y: y + u
                },
                {
                    x: i + 2 * a / 3,
                    y: y + u
                }
            ];
            r.label.x = r.x;
            r.label.y = r.y;
        }
    });
}
function H(n, e) {
    return Y(j(n, e), Number);
}
function z(n) {
    const e = {};
    Z_1(n, (r, t)=>{
        e[t.toLowerCase()] = r;
    });
    return e;
}
export { di as l };
