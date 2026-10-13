import { a as a_1, d, e as e_1, b as b_1, c as c_1, f as f_1, o, k as k_1, r, g as g_1, s, h as h_1, j, U as U_1, S, l, m as m_1, n as n_1, p, q as q_1, t as t_1, u, v as v_1, w, x, y, z as z_1 } from "./chunk-graph-BvS0Xx32.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "068739f2-5cf0-4835-afc4-89b7a68a57f2";
            e._sentryDebugIdIdentifier = "sentry-dbid-068739f2-5cf0-4835-afc4-89b7a68a57f2";
        }
    } catch (e) {}
})();
const br = (()=>{
    function r() {}
    return (e)=>{
        if (!a_1(e)) {
            return {};
        }
        if (Object.create) {
            return Object.create(e);
        }
        r.prototype = e;
        const t = new r;
        r.prototype = undefined;
        return t;
    };
})();
function lr(r, e) {
    let t = -1;
    const r_length = r.length;
    for(e || (e = Array(r_length)); ++t < r_length;){
        e[t] = r[t];
    }
    return e;
}
function R(r, e, t) {
    if (e == "__proto__" && d) {
        d(r, e, {
            configurable: true,
            enumerable: true,
            value: t,
            writable: true
        });
    } else {
        r[e] = t;
    }
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function q(r, e, t) {
    const a = r[e];
    if (!(hasOwnProperty.call(r, e) && e_1(a, t)) || t === undefined && !(e in r)) {
        R(r, e, t);
    }
}
export function c(r, e, t, a) {
    const g = !t;
    if (!t) {
        t = {};
    }
    for(let s = -1, o = e.length; ++s < o;){
        const c = e[s];
        let i;
        if (i === undefined) {
            i = r[c];
        }
        if (g) {
            R(t, c, i);
        } else {
            q(t, c, i);
        }
    }
    return t;
}
function Tr(r) {
    const e = [];
    if (r != null) {
        for(const t in Object(r)){
            e.push(t);
        }
    }
    return e;
}
const hasOwnProperty_1 = Object.prototype.hasOwnProperty;
function Ar(r) {
    if (!a_1(r)) {
        return Tr(r);
    }
    const e = b_1(r);
    const t = [];
    for(const a in r){
        if (!(a == "constructor" && (e || !hasOwnProperty_1.call(r, a)))) {
            t.push(a);
        }
    }
    return t;
}
export function k(r) {
    if (f_1(r)) {
        return c_1(r, true);
    }
    return Ar(r);
}
export const g = o(Object.getPrototypeOf, Object);
function hr(r, e) {
    return r && c(e, k_1(e), r);
}
function mr(r, e) {
    return r && c(e, k(e), r);
}
const Y = typeof exports === "object" && exports && !exports.nodeType && exports;
const I = Y && typeof module === "object" && module && !module.nodeType && module;
const vr = I && I.exports === Y;
const P = vr ? r.Buffer : undefined;
const E = P ? P.allocUnsafe : undefined;
function Or(r, e) {
    if (e) {
        return r.slice();
    }
    const r_length = r.length;
    const a = E ? E(r_length) : new r.constructor(r_length);
    r.copy(a);
    return a;
}
function wr(r, e) {
    return c(r, g_1(r), e);
}
const z = Object.getOwnPropertySymbols ? (r)=>{
    const e = [];
    while(r){
        h_1(e, g_1(r));
        r = g(r);
    }
    return e;
} : s;
function Sr(r, e) {
    return c(r, z(r), e);
}
function xr(r) {
    return j(r, k, z);
}
const hasOwnProperty_2 = Object.prototype.hasOwnProperty;
function Er(r) {
    const r_length = r.length;
    const t = new r.constructor(r_length);
    if (r_length && typeof r[0] === "string" && hasOwnProperty_2.call(r, "index")) {
        t.index = r.index;
        t.input = r.input;
    }
    return t;
}
function A(r) {
    const e = new r.constructor(r.byteLength);
    new U_1(e).set(new U_1(r));
    return e;
}
function Cr(r, e) {
    const t = e ? A(r.buffer) : r.buffer;
    return new r.constructor(t, r.byteOffset, r.byteLength);
}
const Ur = /\w*$/;
function Fr(r) {
    const e = new r.constructor(r.source, Ur.exec(r));
    e.lastIndex = r.lastIndex;
    return e;
}
const C = S ? S.prototype : undefined;
const U = C ? C.valueOf : undefined;
function Lr(r) {
    if (U) {
        return Object(U.call(r));
    }
    return {};
}
function Mr(r, e) {
    const t = e ? A(r.buffer) : r.buffer;
    return new r.constructor(t, r.byteOffset, r.length);
}
const Br = "[object Boolean]";
const _r = "[object Date]";
const Dr = "[object Map]";
const Gr = "[object Number]";
const Kr = "[object RegExp]";
const Nr = "[object Set]";
const Rr = "[object String]";
const qr = "[object Symbol]";
const Wr = "[object ArrayBuffer]";
const Yr = "[object DataView]";
const zr = "[object Float32Array]";
const Hr = "[object Float64Array]";
const Jr = "[object Int8Array]";
const Qr = "[object Int16Array]";
const Xr = "[object Int32Array]";
const Zr = "[object Uint8Array]";
const Vr = "[object Uint8ClampedArray]";
const kr = "[object Uint16Array]";
const re = "[object Uint32Array]";
function ee(r, e, t) {
    const r_constructor = r.constructor;
    switch(e){
        case Wr:
            return A(r);
        case Br:
        case _r:
            return new r_constructor(+r);
        case Yr:
            return Cr(r, t);
        case zr:
        case Hr:
        case Jr:
        case Qr:
        case Xr:
        case Zr:
        case Vr:
        case kr:
        case re:
            return Mr(r, t);
        case Dr:
            return new r_constructor;
        case Gr:
        case Rr:
            return new r_constructor(r);
        case Kr:
            return Fr(r);
        case Nr:
            return new r_constructor;
        case qr:
            return Lr(r);
    }
}
function te(r) {
    if (typeof r.constructor === "function" && !b_1(r)) {
        return br(g(r));
    }
    return {};
}
const ne = "[object Map]";
function ae(r) {
    return l(r) && m_1(r) == ne;
}
const F = p && p.isMap;
const oe = F ? n_1(F) : ae;
const se = "[object Set]";
function ie(r) {
    return l(r) && m_1(r) == se;
}
const L = p && p.isSet;
const ce = L ? n_1(L) : ie;
const ue = 1;
const fe = 2;
const ge = 4;
const H = "[object Arguments]";
const be = "[object Array]";
const le = "[object Boolean]";
const ye = "[object Date]";
const pe = "[object Error]";
const J = "[object Function]";
const Te = "[object GeneratorFunction]";
const de = "[object Map]";
const je = "[object Number]";
const Q = "[object Object]";
const Ae = "[object RegExp]";
const he = "[object Set]";
const me = "[object String]";
const ve = "[object Symbol]";
const Oe = "[object WeakMap]";
const we = "[object ArrayBuffer]";
const $e = "[object DataView]";
const Se = "[object Float32Array]";
const xe = "[object Float64Array]";
const Ie = "[object Int8Array]";
const Pe = "[object Int16Array]";
const Ee = "[object Int32Array]";
const Ce = "[object Uint8Array]";
const Ue = "[object Uint8ClampedArray]";
const Fe = "[object Uint16Array]";
const Le = "[object Uint32Array]";
const n = {};
n[H] = n[be] = n[we] = n[$e] = n[le] = n[ye] = n[Se] = n[xe] = n[Ie] = n[Pe] = n[Ee] = n[de] = n[je] = n[Q] = n[Ae] = n[he] = n[me] = n[ve] = n[Ce] = n[Ue] = n[Fe] = n[Le] = true;
n[pe] = n[J] = n[Oe] = false;
export function b(r, e, t, a, g, s) {
    let o;
    const c = e & ue;
    const i = e & fe;
    const X = e & ge;
    if (o !== undefined) {
        return o;
    }
    if (!a_1(r)) {
        return r;
    }
    const h = w(r);
    if (h) {
        o = Er(r);
        if (!c) {
            return lr(r, o);
        }
    } else {
        const b = m_1(r);
        const m = b == J || b == Te;
        if (q_1(r)) {
            return Or(r, c);
        }
        if (b == Q || b == H || m && !g) {
            o = i || m ? {} : te(r);
            if (!c) {
                if (i) {
                    return Sr(r, mr(o, r));
                }
                return wr(r, hr(o, r));
            }
        } else {
            if (!n[b]) {
                if (g) {
                    return r;
                }
                return {};
            }
            o = ee(r, b, c);
        }
    }
    if (!s) {
        s = new t_1;
    }
    const v = s.get(r);
    if (v) {
        return v;
    }
    s.set(r, o);
    if (ce(r)) {
        r.forEach((u)=>{
            o.add(b(u, e, t, u, r, s));
        });
    } else if (oe(r)) {
        r.forEach((u, f)=>{
            o.set(f, b(u, e, t, f, r, s));
        });
    }
    const Z = X ? i ? xr : u : i ? k : k_1;
    const O = h ? undefined : Z(r);
    v_1(O || r, (u, f)=>{
        if (O) {
            f = u;
            u = r[f];
        }
        q(o, f, b(u, e, t, f, r, s));
    });
    return o;
}
function Me(r, e) {
    let t = -1;
    const a = f_1(r) ? Array(r.length) : [];
    x(r, (g, s, o)=>{
        a[++t] = e(g, s, o);
    });
    return a;
}
function _e(r, e) {
    const t = w(r) ? y : Me;
    return t(r, z_1(e));
}
export { R as a, lr as d, Or as e, Mr as f, q as h, te as i, Me as j, _e as m };
