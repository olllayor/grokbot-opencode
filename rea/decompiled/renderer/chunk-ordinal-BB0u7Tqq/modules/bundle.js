import { i } from "./chunk-init-Gi6I4Gst.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "72be5991-2fd8-4d7b-b833-344599335df4";
            e._sentryDebugIdIdentifier = "sentry-dbid-72be5991-2fd8-4d7b-b833-344599335df4";
        }
    } catch (e) {}
})();
class o extends Map {
    constructor(n, value = h){
        super();
        Object.defineProperties(this, {
            _intern: {
                value: new Map
            },
            _key: {
                value
            }
        });
        if (n != null) {
            for (const [r, s] of n){
                this.set(r, s);
            }
        }
    }
    get(n) {
        return super.get(c(this, n));
    }
    has(n) {
        return super.has(c(this, n));
    }
    set(n, t) {
        return super.set(p(this, n), t);
    }
    delete(n) {
        return super.delete(g(this, n));
    }
}
function c({ _intern, _key }, t) {
    const r = _key(t);
    if (_intern.has(r)) {
        return _intern.get(r);
    }
    return t;
}
function p({ _intern, _key }, t) {
    const r = _key(t);
    if (_intern.has(r)) {
        return _intern.get(r);
    }
    _intern.set(r, t);
    return t;
}
function g({ _intern, _key }, t) {
    const r = _key(t);
    if (_intern.has(r)) {
        t = _intern.get(t);
        _intern.delete(r);
    }
    return t;
}
function h(e) {
    if (e !== null && typeof e === "object") {
        return e.valueOf();
    }
    return e;
}
const f = Symbol("implicit");
function l() {
    let e = new o;
    let n = [];
    let t = [];
    let r = f;
    function s(i) {
        let u = e.get(i);
        if (u === undefined) {
            if (r !== f) {
                return r;
            }
            e.set(i, u = n.push(i) - 1);
        }
        return t[u % t.length];
    }
    s.domain = function(i) {
        if (!arguments.length) {
            return n.slice();
        }
        n = [];
        e = new o;
        for (const u of i){
            if (!e.has(u)) {
                e.set(u, n.push(u) - 1);
            }
        }
        return s;
    };
    s.range = function(i) {
        if (arguments.length) {
            t = Array.from(i);
            return s;
        }
        return t.slice();
    };
    s.unknown = function(i) {
        if (arguments.length) {
            r = i;
            return s;
        }
        return r;
    };
    s.copy = ()=>l(n, t).unknown(r);
    i.apply(s, arguments);
    return s;
}
export { l as o };
