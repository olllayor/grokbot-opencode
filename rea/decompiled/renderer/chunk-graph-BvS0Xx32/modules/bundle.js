!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "8651146e-a8c1-4b90-ae18-922ab9cc2b41";
            e._sentryDebugIdIdentifier = "sentry-dbid-8651146e-a8c1-4b90-ae18-922ab9cc2b41";
        }
    } catch (e) {}
})();
const Ze = typeof global === "object" && global && global.Object === Object && global;
const pt = typeof self === "object" && self && self.Object === Object && self;
export const r = Ze || pt || Function("return this")();
const r_Symbol = r.Symbol;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const toString = Object.prototype.toString;
const D = r_Symbol ? r_Symbol.toStringTag : undefined;
function yt(e) {
    const t = hasOwnProperty.call(e, D);
    const r = e[D];
    try {
        e[D] = undefined;
        var n = true;
    } catch  {}
    const i = toString.call(e);
    n && (t ? e[D] = r : delete e[D]);
    return i;
}
const toString_1 = Object.prototype.toString;
function mt(e) {
    return toString_1.call(e);
}
const wt = "[object Null]";
const Tt = "[object Undefined]";
const Oe = r_Symbol ? r_Symbol.toStringTag : undefined;
function M(e) {
    if (e == null) {
        if (e === undefined) {
            return Tt;
        }
        return wt;
    }
    if (Oe && Oe in Object(e)) {
        return yt(e);
    }
    return mt(e);
}
export function l(e) {
    return e != null && typeof e === "object";
}
const At = "[object Symbol]";
function he(e) {
    return typeof e === "symbol" || l(e) && M(e) == At;
}
function Je(e, t) {
    for(var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;){
        i[r] = t(e[r], r, e);
    }
    return i;
}
export const w = Array.isArray;
const me = r_Symbol ? r_Symbol.prototype : undefined;
const we = me ? me.toString : undefined;
function Qe(e) {
    if (typeof e === "string") {
        return e;
    }
    if (w(e)) {
        return `${Je(e, Qe)}`;
    }
    if (he(e)) {
        if (we) {
            return we.call(e);
        }
        return "";
    }
    const t = `${e}`;
    if (t == "0" && 1 / e == -Infinity) {
        return "-0";
    }
    return t;
}
function ce(e) {
    const t = typeof e;
    return e != null && (t == "object" || t == "function");
}
function J(e) {
    return e;
}
const Pt = "[object AsyncFunction]";
const Et = "[object Function]";
const $t = "[object GeneratorFunction]";
const St = "[object Proxy]";
function Z(e) {
    if (!ce(e)) {
        return false;
    }
    const t = M(e);
    return t == Et || t == $t || t == Pt || t == St;
}
const re = r["__core-js_shared__"];
const Te = (()=>{
    const e = /[^.]+$/.exec(re && re.keys && re.keys.IE_PROTO || "");
    if (e) {
        return `Symbol(src)_1.${e}`;
    }
    return "";
})();
function Ct(e) {
    return !!Te && Te in e;
}
const toString_2 = Function.prototype.toString;
function I(e) {
    if (e != null) {
        try {
            return toString_2.call(e);
        } catch  {}
        try {
            return `${e}`;
        } catch  {}
    }
    return "";
}
const It = /[\\^$.*+?()[\]{}|]/g;
const Lt = /^\[object .+?Constructor\]$/;
const toString_3 = Function.prototype.toString;
const hasOwnProperty_1 = Object.prototype.hasOwnProperty;
const Ft = RegExp(`^${toString_3.call(hasOwnProperty_1).replace(It, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?")}\$`);
function Gt(e) {
    if (!ce(e) || Ct(e)) {
        return false;
    }
    const t = Z(e) ? Ft : Lt;
    return t.test(I(e));
}
function Ut(e, t) {
    return e?.[t];
}
function L(e, t) {
    const r = Ut(e, t);
    if (Gt(r)) {
        return r;
    }
}
const oe = L(r, "WeakMap");
function zt(e, t, r) {
    switch(r.length){
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, r[0]);
        case 2:
            return e.call(t, r[0], r[1]);
        case 3:
            return e.call(t, r[0], r[1], r[2]);
    }
    return e.apply(t, r);
}
function Ht() {}
const Bt = 800;
const Kt = 16;
function Xt(e) {
    let t = 0;
    let r = 0;
    return function() {
        const n = Date.now();
        const i = Kt - (n - r);
        r = n;
        if (i > 0) {
            if (++t >= Bt) {
                return arguments[0];
            }
        } else {
            t = 0;
        }
        return e(...arguments);
    };
}
export function _(e) {
    return ()=>e;
}
const Ae = (()=>{
    try {
        const e = L(Object, "defineProperty");
        e({}, "", {});
        return e;
    } catch  {}
})();
const Yt = Ae ? (e, t)=>Ae(e, "toString", {
        configurable: true,
        enumerable: false,
        value: _(t),
        writable: true
    }) : J;
const Zt = Xt(Yt);
function Wt(e, t) {
    for(let r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== false;);
    return e;
}
function Jt(e, t, r, n) {
    for(let i = e.length, s = r + -1; ++s < i;){
        if (t(e[s], s, e)) {
            return s;
        }
    }
    return -1;
}
function Qt(e) {
    return e !== e;
}
function Vt(e, t, r) {
    for(let n = r - 1, i = e.length; ++n < i;){
        if (e[n] === t) {
            return n;
        }
    }
    return -1;
}
function kt(e, t, r) {
    if (t === t) {
        return Vt(e, t, r);
    }
    return Jt(e, Qt, r);
}
function er(e, t) {
    const r = e == null ? 0 : e.length;
    return !!r && kt(e, t, 0) > -1;
}
const tr = 9007199254740991;
const rr = /^(?:0|[1-9]\d*)$/;
function Ve(e, t) {
    const r = typeof e;
    t = t ?? tr;
    return !!t && (r == "number" || r != "symbol" && rr.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ke(e, t) {
    return e === t || e !== e && t !== t;
}
function nr(e, t, r) {
    t = Math.max(t === undefined ? e.length - 1 : t, 0);
    return function() {
        const n = arguments;
        for(var i = -1, s = Math.max(n.length - t, 0), a = Array(s); ++i < s;){
            a[i] = n[t + i];
        }
        i = -1;
        const o = Array(t + 1);
        while(++i < t){
            o[i] = n[i];
        }
        o[t] = r(a);
        return zt(e, this, o);
    };
}
function ir(e, t) {
    return Zt(nr(e, t, J), `${e}`);
}
const sr = 9007199254740991;
function le(e) {
    return typeof e === "number" && e > -1 && e % 1 == 0 && e <= sr;
}
export function f(e) {
    return e != null && le(e.length) && !Z(e);
}
function et(e) {
    const t = e && e.constructor;
    const r = typeof t === "function" && t.prototype || Object.prototype;
    return e === r;
}
function or(e, String) {
    for(var r = -1, n = Array(e); ++r < e;){
        n[r] = String(r);
    }
    return n;
}
const ur = "[object Arguments]";
function Ee(e) {
    return l(e) && M(e) == ur;
}
const hasOwnProperty_2 = Object.prototype.hasOwnProperty;
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
export const K = Ee(function() {
    return arguments;
}()) ? Ee : function(e) {
    return l(e) && hasOwnProperty_2.call(e, "callee") && !propertyIsEnumerable.call(e, "callee");
};
function cr() {
    return false;
}
const rt = typeof exports === "object" && exports && !exports.nodeType && exports;
const $e = rt && typeof module === "object" && module && !module.nodeType && module;
const lr = $e && $e.exports === rt;
const Se = lr ? r.Buffer : undefined;
const dr = Se ? Se.isBuffer : undefined;
export const q = dr || cr;
const gr = "[object Arguments]";
const pr = "[object Array]";
const _r = "[object Boolean]";
const br = "[object Date]";
const yr = "[object Error]";
const vr = "[object Function]";
const Or = "[object Map]";
const mr = "[object Number]";
const wr = "[object Object]";
const Tr = "[object RegExp]";
const Ar = "[object Set]";
const Pr = "[object String]";
const Er = "[object WeakMap]";
const $r = "[object ArrayBuffer]";
const Sr = "[object DataView]";
const Cr = "[object Float32Array]";
const jr = "[object Float64Array]";
const xr = "[object Int8Array]";
const Ir = "[object Int16Array]";
const Lr = "[object Int32Array]";
const Rr = "[object Uint8Array]";
const Nr = "[object Uint8ClampedArray]";
const Mr = "[object Uint16Array]";
const Dr = "[object Uint32Array]";
const h = {};
h[Cr] = h[jr] = h[xr] = h[Ir] = h[Lr] = h[Rr] = h[Nr] = h[Mr] = h[Dr] = true;
h[gr] = h[pr] = h[$r] = h[_r] = h[Sr] = h[br] = h[yr] = h[vr] = h[Or] = h[mr] = h[wr] = h[Tr] = h[Ar] = h[Pr] = h[Er] = false;
function Fr(e) {
    return l(e) && le(e.length) && !!h[M(e)];
}
function Gr(e) {
    return (t)=>e(t);
}
const nt = typeof exports === "object" && exports && !exports.nodeType && exports;
const U = nt && typeof module === "object" && module && !module.nodeType && module;
const Ur = U && U.exports === nt;
const ne = Ur && Ze.process;
const Ce = (()=>{
    try {
        const e = U && U.require && U.require("util").types;
        return e || ne && ne.binding && ne.binding("util");
    } catch  {}
})();
const je = Ce && Ce.isTypedArray;
const de = je ? Gr(je) : Fr;
const hasOwnProperty_3 = Object.prototype.hasOwnProperty;
function Br(e, t) {
    const r = w(e);
    const n = !r && K(e);
    const i = !r && !n && q(e);
    const s = !r && !n && !i && de(e);
    const a = r || n || i || s;
    const o = a ? or(e.length, String) : [];
    const o_length = o.length;
    for(const f in e){
        if ((t || hasOwnProperty_3.call(e, f)) && !(a && (f == "length" || i && (f == "offset" || f == "parent") || s && (f == "buffer" || f == "byteLength" || f == "byteOffset") || Ve(f, o_length)))) {
            o.push(f);
        }
    }
    return o;
}
function Kr(e, t) {
    return (r)=>e(t(r));
}
const qr = Kr(Object.keys, Object);
const hasOwnProperty_4 = Object.prototype.hasOwnProperty;
function it(e) {
    if (!et(e)) {
        return qr(e);
    }
    const t = [];
    for(const r in Object(e)){
        if (hasOwnProperty_4.call(e, r) && r != "constructor") {
            t.push(r);
        }
    }
    return t;
}
function b(e) {
    if (f(e)) {
        return Br(e);
    }
    return it(e);
}
const Zr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const Wr = /^\w*$/;
function ge(e, t) {
    if (w(e)) {
        return false;
    }
    const r = typeof e;
    if (r == "number" || r == "symbol" || r == "boolean" || e == null || he(e)) {
        return true;
    }
    return Wr.test(e) || !Zr.test(e) || t != null && e in Object(t);
}
const z = L(Object, "create");
function Jr() {
    this.__data__ = z ? z(null) : {};
    this.size = 0;
}
function Qr(e) {
    const t = this.has(e) && delete this.__data__[e];
    this.size -= t ? 1 : 0;
    return t;
}
const Vr = "__lodash_hash_undefined__";
const hasOwnProperty_5 = Object.prototype.hasOwnProperty;
function tn(e) {
    const __data__ = this.__data__;
    if (z) {
        const r = __data__[e];
        if (r === Vr) {
            return undefined;
        }
        return r;
    }
    if (hasOwnProperty_5.call(__data__, e)) {
        return __data__[e];
    }
}
const hasOwnProperty_6 = Object.prototype.hasOwnProperty;
function sn(e) {
    const __data__ = this.__data__;
    if (z) {
        return __data__[e] !== undefined;
    }
    return hasOwnProperty_6.call(__data__, e);
}
const an = "__lodash_hash_undefined__";
function on(e, t) {
    const __data__ = this.__data__;
    this.size += this.has(e) ? 0 : 1;
    __data__[e] = z && t === undefined ? an : t;
    return this;
}
function x(e) {
    let t = -1;
    const r = e == null ? 0 : e.length;
    for(this.clear(); ++t < r;){
        const n = e[t];
        this.set(n[0], n[1]);
    }
}
x.prototype.clear = Jr;
x.prototype.delete = Qr;
x.prototype.get = tn;
x.prototype.has = sn;
x.prototype.set = on;
function un() {
    this.__data__ = [];
    this.size = 0;
}
function k(e, t) {
    for(let r = e.length; r--;){
        if (ke(e[r][0], t)) {
            return r;
        }
    }
    return -1;
}
const splice = Array.prototype.splice;
function cn(e) {
    const __data__ = this.__data__;
    const r = k(__data__, e);
    if (r < 0) {
        return false;
    }
    const n = __data__.length - 1;
    if (r == n) {
        __data__.pop();
    } else {
        splice.call(__data__, r, 1);
    }
    --this.size;
    return true;
}
function ln(e) {
    const __data__ = this.__data__;
    const r = k(__data__, e);
    if (r < 0) {
        return undefined;
    }
    return __data__[r][1];
}
function dn(e) {
    return k(this.__data__, e) > -1;
}
function gn(e, t) {
    const __data__ = this.__data__;
    const n = k(__data__, e);
    if (n < 0) {
        ++this.size;
        __data__.push([
            e,
            t
        ]);
    } else {
        __data__[n][1] = t;
    }
    return this;
}
function T(e) {
    let t = -1;
    const r = e == null ? 0 : e.length;
    for(this.clear(); ++t < r;){
        const n = e[t];
        this.set(n[0], n[1]);
    }
}
T.prototype.clear = un;
T.prototype.delete = cn;
T.prototype.get = ln;
T.prototype.has = dn;
T.prototype.set = gn;
const H = L(r, "Map");
function pn() {
    this.size = 0;
    this.__data__ = {
        hash: new x,
        map: new (H || T),
        string: new x
    };
}
function _n(e) {
    const t = typeof e;
    if (t == "string" || t == "number" || t == "symbol" || t == "boolean") {
        return e !== "__proto__";
    }
    return e === null;
}
function ee({ __data__ }, t) {
    if (_n(t)) {
        return __data__[typeof t === "string" ? "string" : "hash"];
    }
    return __data__.map;
}
function bn(e) {
    const t = ee(this, e).delete(e);
    this.size -= t ? 1 : 0;
    return t;
}
function yn(e) {
    return ee(this, e).get(e);
}
function vn(e) {
    return ee(this, e).has(e);
}
function On(e, t) {
    const r = ee(this, e);
    const r_size = r.size;
    r.set(e, t);
    this.size += r.size == r_size ? 0 : 1;
    return this;
}
function A(e) {
    let t = -1;
    const r = e == null ? 0 : e.length;
    for(this.clear(); ++t < r;){
        const n = e[t];
        this.set(n[0], n[1]);
    }
}
A.prototype.clear = pn;
A.prototype.delete = bn;
A.prototype.get = yn;
A.prototype.has = vn;
A.prototype.set = On;
const mn = "Expected a function";
function pe(e, t) {
    if (typeof e !== "function" || t != null && typeof t !== "function") {
        throw new TypeError(mn);
    }
    const r = function() {
        const n = arguments;
        const i = t ? t.apply(this, n) : n[0];
        const r_cache = r.cache;
        if (r_cache.has(i)) {
            return r_cache.get(i);
        }
        const a = e.apply(this, n);
        r.cache = r_cache.set(i, a) || r_cache;
        return a;
    };
    r.cache = new (pe.Cache || A);
    return r;
}
pe.Cache = A;
const wn = 500;
function Tn(e) {
    const t = pe(e, (n)=>{
        if (t_cache.size === wn) {
            t_cache.clear();
        }
        return n;
    });
    var t_cache = t.cache;
    return t;
}
const An = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const Pn = /\\(\\)?/g;
const En = Tn((e)=>{
    const t = [];
    if (e.charCodeAt(0) === 46) {
        t.push("");
    }
    e.replace(An, (r, n, i, s)=>{
        t.push(i ? s.replace(Pn, "$1") : n || r);
    });
    return t;
});
function $n(e) {
    if (e == null) {
        return "";
    }
    return Qe(e);
}
function st(e, t) {
    if (w(e)) {
        return e;
    }
    if (ge(e, t)) {
        return [
            e
        ];
    }
    return En($n(e));
}
function te(e) {
    if (typeof e === "string" || he(e)) {
        return e;
    }
    const t = `${e}`;
    if (t == "0" && 1 / e == -Infinity) {
        return "-0";
    }
    return t;
}
function at(e, t) {
    t = st(t, e);
    for(var r = 0, n = t.length; e != null && r < n;){
        e = e[te(t[r++])];
    }
    if (r && r == n) {
        return e;
    }
}
function Sn(e, t, r) {
    const n = e == null ? undefined : at(e, t);
    if (n === undefined) {
        return r;
    }
    return n;
}
function ot(e, t) {
    for(let r = -1, n = t.length, i = e.length; ++r < n;){
        e[i + r] = t[r];
    }
    return e;
}
const xe = r_Symbol ? r_Symbol.isConcatSpreadable : undefined;
function Cn(e) {
    return w(e) || K(e) || !!(xe && e && e[xe]);
}
function jn(e, t, r, n, i) {
    let s = -1;
    const e_length = e.length;
    if (!r) {
        r = Cn;
    }
    if (!i) {
        i = [];
    }
    while(++s < e_length){
        const o = e[s];
        if (r(o)) {
            ot(i, o);
        } else if (!n) {
            i[i.length] = o;
        }
    }
    return i;
}
function xn(e, t, r, n) {
    let i = -1;
    const s = e == null ? 0 : e.length;
    for(n && s && (r = e[++i]); ++i < s;){
        r = t(r, e[i], i, e);
    }
    return r;
}
function In() {
    this.__data__ = new T;
    this.size = 0;
}
function Ln(e) {
    const __data__ = this.__data__;
    const r = __data__.delete(e);
    this.size = __data__.size;
    return r;
}
function Rn(e) {
    return this.__data__.get(e);
}
function Nn(e) {
    return this.__data__.has(e);
}
const Mn = 200;
function Dn(e, t) {
    let __data__ = this.__data__;
    if (__data__ instanceof T) {
        const n = __data__.__data__;
        if (!H || n.length < Mn - 1) {
            n.push([
                e,
                t
            ]);
            this.size = ++__data__.size;
            return this;
        }
        __data__ = this.__data__ = new A(n);
    }
    __data__.set(e, t);
    this.size = __data__.size;
    return this;
}
function m(e) {
    const t = this.__data__ = new T(e);
    this.size = t.size;
}
m.prototype.clear = In;
m.prototype.delete = Ln;
m.prototype.get = Rn;
m.prototype.has = Nn;
m.prototype.set = Dn;
function ut(e, t) {
    for(var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n;){
        const a = e[r];
        if (t(a, r, e)) {
            s[i++] = a;
        }
    }
    return s;
}
function Fn() {
    return [];
}
const propertyIsEnumerable_1 = Object.prototype.propertyIsEnumerable;
const zn = Object.getOwnPropertySymbols ? function(e) {
    if (e == null) {
        return [];
    }
    e = Object(e);
    return ut(Object.getOwnPropertySymbols(e), (t)=>propertyIsEnumerable_1.call(e, t));
} : Fn;
function Hn(e, t, r) {
    const n = t(e);
    if (w(e)) {
        return n;
    }
    return ot(n, r(e));
}
function Le(e) {
    return Hn(e, b, zn);
}
const ue = L(r, "DataView");
const fe = L(r, "Promise");
const N = L(r, "Set");
const Re = "[object Map]";
const Bn = "[object Object]";
const Ne = "[object Promise]";
const Me = "[object Set]";
const De = "[object WeakMap]";
const Fe = "[object DataView]";
const Kn = I(ue);
const qn = I(H);
const Xn = I(fe);
const Yn = I(N);
const Zn = I(oe);
let O = M;
if (ue && O(new ue(new ArrayBuffer(1))) != Fe || H && O(new H) != Re || fe && O(fe.resolve()) != Ne || N && O(new N) != Me || oe && O(new oe) != De) {
    O = function(e) {
        const t = M(e);
        const r = t == Bn ? e.constructor : undefined;
        const n = r ? I(r) : "";
        if (n) {
            switch(n){
                case Kn:
                    return Fe;
                case qn:
                    return Re;
                case Xn:
                    return Ne;
                case Yn:
                    return Me;
                case Zn:
                    return De;
            }
        }
        return t;
    };
}
const r_Uint8Array = r.Uint8Array;
const Wn = "__lodash_hash_undefined__";
function Jn(e) {
    this.__data__.set(e, Wn);
    return this;
}
function Qn(e) {
    return this.__data__.has(e);
}
function B(e) {
    let t = -1;
    const r = e == null ? 0 : e.length;
    for(this.__data__ = new A; ++t < r;){
        this.add(e[t]);
    }
}
B.prototype.add = B.prototype.push = Jn;
B.prototype.has = Qn;
function Vn(e, t) {
    for(let r = -1, n = e == null ? 0 : e.length; ++r < n;){
        if (t(e[r], r, e)) {
            return true;
        }
    }
    return false;
}
function ft(e, t) {
    return e.has(t);
}
const kn = 1;
const ei = 2;
function ht(e, t, r, n, i, s) {
    const a = r & kn;
    const e_length = e.length;
    const t_length = t.length;
    if (e_length != t_length && !(a && t_length > e_length)) {
        return false;
    }
    const f = s.get(e);
    const d = s.get(t);
    if (f && d) {
        return f == t && d == e;
    }
    let c = -1;
    let l = true;
    const v = r & ei ? new B : undefined;
    s.set(e, t);
    s.set(t, e);
    while(++c < e_length){
        var p = e[c];
        const _ = t[c];
        if (n) var P = a ? n(_, p, c, t, e, s) : n(p, _, c, e, t, s);
        if (P !== undefined) {
            if (P) {
                continue;
            }
            l = false;
            break;
        }
        if (v) {
            if (!Vn(t, (E, $)=>{
                if (!ft(v, $) && (p === E || i(p, E, r, n, s))) {
                    return v.push($);
                }
            })) {
                l = false;
                break;
            }
        } else if (!(p === _ || i(p, _, r, n, s))) {
            l = false;
            break;
        }
    }
    s.delete(e);
    s.delete(t);
    return l;
}
function ti(e) {
    let t = -1;
    const r = Array(e.size);
    e.forEach((n, i)=>{
        r[++t] = [
            i,
            n
        ];
    });
    return r;
}
function _e(e) {
    let t = -1;
    const r = Array(e.size);
    e.forEach((n)=>{
        r[++t] = n;
    });
    return r;
}
const ri = 1;
const ni = 2;
const ii = "[object Boolean]";
const si = "[object Date]";
const ai = "[object Error]";
const oi = "[object Map]";
const ui = "[object Number]";
const fi = "[object RegExp]";
const hi = "[object Set]";
const ci = "[object String]";
const li = "[object Symbol]";
const di = "[object ArrayBuffer]";
const gi = "[object DataView]";
const Ue = r_Symbol ? r_Symbol.prototype : undefined;
const ie = Ue ? Ue.valueOf : undefined;
function pi(e, t, r, n, i, s, a) {
    switch(r){
        case gi:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
                return false;
            }
            e = e.buffer;
            t = t.buffer;
        case di:
            return !(e.byteLength != t.byteLength || !s(new r_Uint8Array(e), new r_Uint8Array(t)));
        case ii:
        case si:
        case ui:
            return ke(+e, +t);
        case ai:
            return e.name == t.name && e.message == t.message;
        case fi:
        case ci:
            return e == `${t}`;
        case oi:
            var o = ti;
        case hi:
            const u = n & ri;
            if (!o) {
                o = _e;
            }
            if (e.size != t.size && !u) {
                return false;
            }
            const f = a.get(e);
            if (f) {
                return f == t;
            }
            n |= ni;
            a.set(e, t);
            const d = ht(o(e), o(t), n, i, s, a);
            a.delete(e);
            return d;
        case li:
            if (ie) {
                return ie.call(e) == ie.call(t);
            }
    }
    return false;
}
const _i = 1;
const hasOwnProperty_7 = Object.prototype.hasOwnProperty;
function vi(e, t, r, n, i, s) {
    const a = r & _i;
    const o = Le(e);
    const o_length = o.length;
    const f = Le(t);
    const f_length = f.length;
    if (o_length != f_length && !a) {
        return false;
    }
    for(var c = o_length; c--;){
        var l = o[c];
        if (!(a ? l in t : hasOwnProperty_7.call(t, l))) {
            return false;
        }
    }
    const v = s.get(e);
    const p = s.get(t);
    if (v && p) {
        return v == t && p == e;
    }
    let _ = true;
    s.set(e, t);
    s.set(t, e);
    let P = a;
    while(++c < o_length){
        l = o[c];
        const E = e[l];
        const $ = t[l];
        if (n) var ve = a ? n($, E, l, t, e, s) : n(E, $, l, e, t, s);
        if (!(ve === undefined ? E === $ || i(E, $, r, n, s) : ve)) {
            _ = false;
            break;
        }
        if (!P) {
            P = l == "constructor";
        }
    }
    if (_ && !P) {
        const K = e.constructor;
        const q = t.constructor;
        if (K != q && "constructor" in e && "constructor" in t && !(typeof K === "function" && K instanceof K && typeof q === "function" && q instanceof q)) {
            _ = false;
        }
    }
    s.delete(e);
    s.delete(t);
    return _;
}
const Oi = 1;
const ze = "[object Arguments]";
const He = "[object Array]";
const X = "[object Object]";
const hasOwnProperty_8 = Object.prototype.hasOwnProperty;
function wi(e, t, r, n, i, s) {
    let a = w(e);
    const o = w(t);
    let u = a ? He : O(e);
    let f = o ? He : O(t);
    u = u == ze ? X : u;
    f = f == ze ? X : f;
    let d = u == X;
    const c = f == X;
    const l = u == f;
    if (l && q(e)) {
        if (!q(t)) {
            return false;
        }
        a = true;
        d = false;
    }
    if (l && !d) {
        if (!s) {
            s = new m;
        }
        if (a || de(e)) {
            return ht(e, t, r, n, i, s);
        }
        return pi(e, t, u, r, n, i, s);
    }
    if (!(r & Oi)) {
        const v = d && hasOwnProperty_8.call(e, "__wrapped__");
        const p = c && hasOwnProperty_8.call(t, "__wrapped__");
        if (v || p) {
            const _ = v ? e.value() : e;
            const P = p ? t.value() : t;
            if (!s) {
                s = new m;
            }
            return i(_, P, r, n, s);
        }
    }
    if (l) {
        if (!s) {
            s = new m;
        }
        return vi(e, t, r, n, i, s);
    }
    return false;
}
function be(e, t, r, n, i) {
    if (e === t) {
        return true;
    }
    if (e == null || t == null || !l(e) && !l(t)) {
        return e !== e && t !== t;
    }
    return wi(e, t, r, n, be, i);
}
const Ti = 1;
const Ai = 2;
function Pi(e, t, r, n) {
    let r_length = r.length;
    const s = r_length;
    if (e == null) {
        return !s;
    }
    for(e = Object(e); r_length--;){
        var a = r[r_length];
        if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) {
            return false;
        }
    }
    while(++r_length < s){
        a = r[r_length];
        const o = a[0];
        const u = e[o];
        const f = a[1];
        if (a[2]) {
            if (u === undefined && !(o in e)) {
                return false;
            }
        } else {
            const d = new m;
            let c;
            if (!(c === undefined ? be(f, u, Ti | Ai, n, d) : c)) {
                return false;
            }
        }
    }
    return true;
}
function ct(e) {
    return e === e && !ce(e);
}
function Ei(e) {
    const t = b(e);
    for(let r = t.length; r--;){
        const n = t[r];
        const i = e[n];
        t[r] = [
            n,
            i,
            ct(i)
        ];
    }
    return t;
}
function lt(e, t) {
    return (r)=>{
        if (r == null) {
            return false;
        }
        return r[e] === t && (t !== undefined || e in Object(r));
    };
}
function $i(e) {
    const t = Ei(e);
    if (t.length == 1 && t[0][2]) {
        return lt(t[0][0], t[0][1]);
    }
    return (r)=>r === e || Pi(r, e, t);
}
function Si(e, t) {
    return e != null && t in Object(e);
}
function Ci(e, t, r) {
    t = st(t, e);
    for(var n = -1, i = t.length, s = false; ++n < i;){
        var a = te(t[n]);
        if (!(s = e != null && r(e, a))) {
            break;
        }
        e = e[a];
    }
    if (s || ++n != i) {
        return s;
    }
    i = e == null ? 0 : e.length;
    return !!i && le(i) && Ve(a, i) && (w(e) || K(e));
}
function ji(e, t) {
    return e != null && Ci(e, t, Si);
}
const xi = 1;
const Ii = 2;
function Li(e, t) {
    if (ge(e) && ct(t)) {
        return lt(te(e), t);
    }
    return (r)=>{
        const n = Sn(r, e);
        if (n === undefined && n === t) {
            return ji(r, e);
        }
        return be(t, n, xi | Ii);
    };
}
function Ri(e) {
    return (t)=>t?.[e];
}
function Ni(e) {
    return (t)=>at(t, e);
}
function Mi(e) {
    if (ge(e)) {
        return Ri(te(e));
    }
    return Ni(e);
}
function dt(e) {
    if (typeof e === "function") {
        return e;
    }
    if (e == null) {
        return J;
    }
    if (typeof e === "object") {
        if (w(e)) {
            return Li(e[0], e[1]);
        }
        return $i(e);
    }
    return Mi(e);
}
function Di(e) {
    return (t, r, n)=>{
        let i = -1;
        const s = Object(t);
        const a = n(t);
        for(let o = a.length; o--;){
            const u = a[++i];
            if (r(s[u], u, s) === false) {
                break;
            }
        }
        return t;
    };
}
const Fi = Di();
function Gi(e, t) {
    return e && Fi(e, t, b);
}
function Ui(e, t) {
    return (r, n)=>{
        if (r == null) {
            return r;
        }
        if (!f(r)) {
            return e(r, n);
        }
        for(let i = r.length, s = -1, a = Object(r); ++s < i && n(a[s], s, a) !== false;);
        return r;
    };
}
const ye = Ui(Gi);
function zi(e) {
    return l(e) && f(e);
}
function Hi(e) {
    if (typeof e === "function") {
        return e;
    }
    return J;
}
function S(e, t) {
    const r = w(e) ? Wt : ye;
    return r(e, Hi(t));
}
function Bi(e, t) {
    const r = [];
    ye(e, (n, i, s)=>{
        if (t(n, i, s)) {
            r.push(n);
        }
    });
    return r;
}
export function $(e, t) {
    const r = w(e) ? ut : Bi;
    return r(e, dt(t));
}
function Ki(e, t) {
    return Je(t, (r)=>e[r]);
}
export function a0(e) {
    if (e == null) {
        return [];
    }
    return Ki(e, b(e));
}
const qi = "[object Map]";
const Xi = "[object Set]";
const hasOwnProperty_9 = Object.prototype.hasOwnProperty;
function Ke(e) {
    if (e == null) {
        return true;
    }
    if (f(e) && (w(e) || typeof e === "string" || typeof e.splice === "function" || q(e) || de(e) || K(e))) {
        return !e.length;
    }
    const t = O(e);
    if (t == qi || t == Xi) {
        return !e.size;
    }
    if (et(e)) {
        return !it(e).length;
    }
    for(const r in e){
        if (hasOwnProperty_9.call(e, r)) {
            return false;
        }
    }
    return true;
}
function R(e) {
    return e === undefined;
}
function Wi(e, t, r, n, i) {
    i(e, (s, a, o)=>{
        r = n ? (n = false, s) : t(r, s, a, o);
    });
    return r;
}
export function a1(e, t, r) {
    const n = w(e) ? xn : Wi;
    const i = arguments.length < 3;
    return n(e, dt(t), r, i, ye);
}
const Qi = Infinity;
const Vi = N && 1 / _e(new N([
    ,
    -0
]))[1] == Qi ? (e)=>new N(e) : Ht;
const ki = 200;
function es(e, t, r) {
    let n = -1;
    let i = er;
    const e_length = e.length;
    let a = true;
    const o = [];
    let u = o;
    if (e_length >= ki) {
        const f = Vi(e);
        if (f) {
            return _e(f);
        }
        a = false;
        i = ft;
        u = new B;
    } else {
        u = o;
    }
    e: while(++n < e_length){
        let d = e[n];
        const c = d;
        d = d !== 0 ? d : 0;
        if (a && c === c) {
            for(let l = u.length; l--;){
                if (u[l] === c) {
                    continue e;
                }
            }
            o.push(d);
        } else {
            if (!i(u, c, r)) {
                if (u !== o) {
                    u.push(c);
                }
                o.push(d);
            }
        }
    }
    return o;
}
const ts = ir((e)=>es(jn(e, 1, zi, true)));
const rs = "\0";
const C = "\0";
const qe = "";
class gt {
    constructor(t = {}){
        this._isDirected = Object.prototype.hasOwnProperty.call(t, "directed") ? t.directed : true;
        this._isMultigraph = Object.prototype.hasOwnProperty.call(t, "multigraph") ? t.multigraph : false;
        this._isCompound = Object.prototype.hasOwnProperty.call(t, "compound") ? t.compound : false;
        this._label = undefined;
        this._defaultNodeLabelFn = _(undefined);
        this._defaultEdgeLabelFn = _(undefined);
        this._nodes = {};
        if (this._isCompound) {
            this._parent = {};
            this._children = {};
            this._children[C] = {};
        }
        this._in = {};
        this._preds = {};
        this._out = {};
        this._sucs = {};
        this._edgeObjs = {};
        this._edgeLabels = {};
    }
    isDirected() {
        return this._isDirected;
    }
    isMultigraph() {
        return this._isMultigraph;
    }
    isCompound() {
        return this._isCompound;
    }
    setGraph(t) {
        this._label = t;
        return this;
    }
    graph() {
        return this._label;
    }
    setDefaultNodeLabel(t) {
        if (!Z(t)) {
            t = _(t);
        }
        this._defaultNodeLabelFn = t;
        return this;
    }
    nodeCount() {
        return this._nodeCount;
    }
    nodes() {
        return b(this._nodes);
    }
    sources() {
        const t = this;
        return $(this.nodes(), (r)=>Ke(t._in[r]));
    }
    sinks() {
        const t = this;
        return $(this.nodes(), (r)=>Ke(t._out[r]));
    }
    setNodes(t, r) {
        const n = arguments;
        const i = this;
        S(t, (s)=>{
            if (n.length > 1) {
                i.setNode(s, r);
            } else {
                i.setNode(s);
            }
        });
        return this;
    }
    setNode(t, r) {
        if (Object.prototype.hasOwnProperty.call(this._nodes, t)) {
            if (arguments.length > 1) {
                this._nodes[t] = r;
            }
            return this;
        }
        this._nodes[t] = arguments.length > 1 ? r : this._defaultNodeLabelFn(t);
        if (this._isCompound) {
            this._parent[t] = C;
            this._children[t] = {};
            this._children[C][t] = true;
        }
        this._in[t] = {};
        this._preds[t] = {};
        this._out[t] = {};
        this._sucs[t] = {};
        ++this._nodeCount;
        return this;
    }
    node(t) {
        return this._nodes[t];
    }
    hasNode(t) {
        return Object.prototype.hasOwnProperty.call(this._nodes, t);
    }
    removeNode(t) {
        if (Object.prototype.hasOwnProperty.call(this._nodes, t)) {
            const r = (n)=>this.removeEdge(this._edgeObjs[n]);
            delete this._nodes[t];
            if (this._isCompound) {
                this._removeFromParentsChildList(t);
                delete this._parent[t];
                S(this.children(t), (n)=>{
                    this.setParent(n);
                });
                delete this._children[t];
            }
            S(b(this._in[t]), r);
            delete this._in[t];
            delete this._preds[t];
            S(b(this._out[t]), r);
            delete this._out[t];
            delete this._sucs[t];
            --this._nodeCount;
        }
        return this;
    }
    setParent(t, r) {
        if (!this._isCompound) {
            throw new Error("Cannot set parent in a non-compound graph");
        }
        if (R(r)) {
            r = C;
        } else {
            r += "";
            for(let n = r; !R(n); n = this.parent(n)){
                if (n === t) {
                    throw new Error(`Setting ${r} as parent of ${t} would create a cycle`);
                }
            }
            this.setNode(r);
        }
        this.setNode(t);
        this._removeFromParentsChildList(t);
        this._parent[t] = r;
        this._children[r][t] = true;
        return this;
    }
    _removeFromParentsChildList(t) {
        delete this._children[this._parent[t]][t];
    }
    parent(t) {
        if (this._isCompound) {
            const r = this._parent[t];
            if (r !== C) {
                return r;
            }
        }
    }
    children(t) {
        if (R(t)) {
            t = C;
        }
        if (this._isCompound) {
            const r = this._children[t];
            if (r) {
                return b(r);
            }
        } else {
            if (t === C) {
                return this.nodes();
            }
            if (this.hasNode(t)) {
                return [];
            }
        }
    }
    predecessors(t) {
        const r = this._preds[t];
        if (r) {
            return b(r);
        }
    }
    successors(t) {
        const r = this._sucs[t];
        if (r) {
            return b(r);
        }
    }
    neighbors(t) {
        const r = this.predecessors(t);
        if (r) {
            return ts(r, this.successors(t));
        }
    }
    isLeaf(t) {
        let r;
        if (this.isDirected()) {
            r = this.successors(t);
        } else {
            r = this.neighbors(t);
        }
        return r.length === 0;
    }
    filterNodes(t) {
        const r = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
        });
        r.setGraph(this.graph());
        const n = this;
        S(this._nodes, (a, o)=>{
            if (t(o)) {
                r.setNode(o, a);
            }
        });
        S(this._edgeObjs, (a)=>{
            if (r.hasNode(a.v) && r.hasNode(a.w)) {
                r.setEdge(a, n.edge(a));
            }
        });
        const i = {};
        function s(a) {
            const o = n.parent(a);
            if (o === undefined || r.hasNode(o)) {
                i[a] = o;
                return o;
            }
            if (o in i) {
                return i[o];
            }
            return s(o);
        }
        if (this._isCompound) {
            S(r.nodes(), (a)=>{
                r.setParent(a, s(a));
            });
        }
        return r;
    }
    setDefaultEdgeLabel(t) {
        if (!Z(t)) {
            t = _(t);
        }
        this._defaultEdgeLabelFn = t;
        return this;
    }
    edgeCount() {
        return this._edgeCount;
    }
    edges() {
        return a0(this._edgeObjs);
    }
    setPath(t, r) {
        const n = this;
        const i = arguments;
        a1(t, (s, a)=>{
            if (i.length > 1) {
                n.setEdge(s, a, r);
            } else {
                n.setEdge(s, a);
            }
            return a;
        });
        return this;
    }
    setEdge(a) {
        let t;
        let r;
        let n;
        let i;
        let s = false;
        if (typeof a === "object" && a !== null && "v" in a) {
            t = a.v;
            r = a.w;
            n = a.name;
            if (arguments.length === 2) {
                i = arguments[1];
                s = true;
            }
        } else {
            t = a;
            r = arguments[1];
            n = arguments[3];
            if (arguments.length > 2) {
                i = arguments[2];
                s = true;
            }
        }
        t = `${t}`;
        r = `${r}`;
        if (!R(n)) {
            n = `${n}`;
        }
        const o = G(this._isDirected, t, r, n);
        if (Object.prototype.hasOwnProperty.call(this._edgeLabels, o)) {
            if (s) {
                this._edgeLabels[o] = i;
            }
            return this;
        }
        if (!R(n) && !this._isMultigraph) {
            throw new Error("Cannot set a named edge when isMultigraph = false");
        }
        this.setNode(t);
        this.setNode(r);
        this._edgeLabels[o] = s ? i : this._defaultEdgeLabelFn(t, r, n);
        const u = ns(this._isDirected, t, r, n);
        t = u.v;
        r = u.w;
        Object.freeze(u);
        this._edgeObjs[o] = u;
        Xe(this._preds[r], t);
        Xe(this._sucs[t], r);
        this._in[r][o] = u;
        this._out[t][o] = u;
        this._edgeCount++;
        return this;
    }
    edge(t, r, n) {
        const i = arguments.length === 1 ? ae(this._isDirected, arguments[0]) : G(this._isDirected, t, r, n);
        return this._edgeLabels[i];
    }
    hasEdge(t, r, n) {
        const i = arguments.length === 1 ? ae(this._isDirected, arguments[0]) : G(this._isDirected, t, r, n);
        return Object.prototype.hasOwnProperty.call(this._edgeLabels, i);
    }
    removeEdge(t, r, n) {
        const i = arguments.length === 1 ? ae(this._isDirected, arguments[0]) : G(this._isDirected, t, r, n);
        const s = this._edgeObjs[i];
        if (s) {
            t = s.v;
            r = s.w;
            delete this._edgeLabels[i];
            delete this._edgeObjs[i];
            Ye(this._preds[r], t);
            Ye(this._sucs[t], r);
            delete this._in[r][i];
            delete this._out[t][i];
            this._edgeCount--;
        }
        return this;
    }
    inEdges(t, r) {
        const n = this._in[t];
        if (n) {
            const i = a0(n);
            if (r) {
                return $(i, (s)=>s.v === r);
            }
            return i;
        }
    }
    outEdges(t, r) {
        const n = this._out[t];
        if (n) {
            const i = a0(n);
            if (r) {
                return $(i, (s)=>s.w === r);
            }
            return i;
        }
    }
    nodeEdges(t, r) {
        const n = this.inEdges(t, r);
        if (n) {
            return n.concat(this.outEdges(t, r));
        }
    }
}
gt.prototype._nodeCount = 0;
gt.prototype._edgeCount = 0;
function Xe(e, t) {
    if (e[t]) {
        e[t]++;
    } else {
        e[t] = 1;
    }
}
function Ye(e, t) {
    --e[t] || delete e[t];
}
function G(e, t, r, n) {
    let i = `${t}`;
    let s = `${r}`;
    if (!e && i > s) {
        const a = i;
        i = s;
        s = a;
    }
    return i + qe + s + qe + (R(n) ? rs : n);
}
function ns(_isDirected, t, r, n) {
    let v = `${t}`;
    let w_1 = `${r}`;
    if (!_isDirected && v > w_1) {
        const a = v;
        v = w_1;
        w_1 = a;
    }
    const o = {
        v,
        w: w_1
    };
    if (n) {
        o.name = n;
    }
    return o;
}
function ae(_isDirected, t) {
    return G(_isDirected, t.v, t.w, t.name);
}
export { he as A, Ve as B, ir as C, jn as D, Zt as E, nr as F, gt as G, M as H, de as I, zi as J, Z as L, Fi as M, Jt as N, Hi as O, Gi as P, Ci as Q, J as R, r_Symbol as S, st as T, r_Uint8Array as U, te as V, at as W, ji as X, $n as Y, S as Z, ce as a, et as b, Br as c, Ae as d, ke as e, zn as g, ot as h, R as i, Hn as j, b as k, O as m, Gr as n, Kr as o, Ce as p, Fn as s, m as t, Le as u, Wt as v, ye as x, Je as y, dt as z };
