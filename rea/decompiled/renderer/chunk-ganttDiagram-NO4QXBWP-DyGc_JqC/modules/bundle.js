import { bg, bh, bi as bi_1, bj, bk, bl, bm, _ as __1, g as getAccDescription, s as setAccDescription, p as getDiagramTitle, o as setDiagramTitle, a as getAccTitle, b as setAccTitle, c as c_1, d, e as e_1, bn, l as l_1, k as k_1, j, q as q_1, y } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { a4 } from "./index.eager-vendor-Qbf9YA6n.js";
import { b as b_1, t as t_1, c as c_2, a as a_1, l as l_2 } from "./chunk-linear-CNfSrmBn.js";
import { i } from "./chunk-init-Gi6I4Gst.js";
import "./chunk-defaultLocale-pEppTWzK.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "7eef8e1e-261b-4ee6-ac5d-6e2dee1abd04";
            e._sentryDebugIdIdentifier = "sentry-dbid-7eef8e1e-261b-4ee6-ac5d-6e2dee1abd04";
        }
    } catch (e) {}
})();
function nr(t, e) {
    let n;
    if (e === undefined) {
        for (const r of t){
            if (r != null && (n < r || n === undefined && r >= r)) {
                n = r;
            }
        }
    } else {
        let r = -1;
        for (let i of t){
            if ((i = e(i, ++r, t)) != null && (n < i || n === undefined && i >= i)) {
                n = i;
            }
        }
    }
    return n;
}
function rr(t, e) {
    let n;
    if (e === undefined) {
        for (const r of t){
            if (r != null && (n > r || n === undefined && r >= r)) {
                n = r;
            }
        }
    } else {
        let r = -1;
        for (let i of t){
            if ((i = e(i, ++r, t)) != null && (n > i || n === undefined && i >= i)) {
                n = i;
            }
        }
    }
    return n;
}
function ir(t) {
    return t;
}
const Gt = 1;
const le = 2;
const xe = 3;
const Xt = 4;
const Pe = 0.000001;
function sr(t) {
    return `translate(${t},0)`;
}
function ar(t) {
    return `translate(0,${t})`;
}
function or(t) {
    return (e)=>+t(e);
}
function cr(t, e) {
    e = Math.max(0, t.bandwidth() - e * 2) / 2;
    if (t.round()) {
        e = Math.round(e);
    }
    return (n)=>+t(n) + e;
}
function ur() {
    return !this.__axis;
}
function fn(t, e) {
    let n = [];
    let r = null;
    let i = null;
    let s = 6;
    let a = 6;
    let y = 3;
    let Y = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5;
    const S = t === Gt || t === Xt ? -1 : 1;
    const w = t === Xt || t === le ? "x" : "y";
    const P = t === Gt || t === xe ? sr : ar;
    function _(F) {
        const X = r ?? (e.ticks ? e.ticks(...n) : e.domain());
        const Z = i ?? (e.tickFormat ? e.tickFormat(...n) : ir);
        const v = Math.max(s, 0) + y;
        const U = e.range();
        const R = +U[0] + Y;
        const E = +U[U.length - 1] + Y;
        const z = (e.bandwidth ? cr : or)(e.copy(), Y);
        const G = F.selection ? F.selection() : F;
        let T = G.selectAll(".domain").data([
            null
        ]);
        let k = G.selectAll(".tick").data(X, e).order();
        let p = k.exit();
        const L = k.enter().append("g").attr("class", "tick");
        let x = k.select("line");
        let C = k.select("text");
        T = T.merge(T.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
        k = k.merge(L);
        x = x.merge(L.append("line").attr("stroke", "currentColor").attr(`${w}2`, S * s));
        C = C.merge(L.append("text").attr("fill", "currentColor").attr(w, S * v).attr("dy", t === Gt ? "0em" : t === xe ? "0.71em" : "0.32em"));
        if (F !== G) {
            T = T.transition(F);
            k = k.transition(F);
            x = x.transition(F);
            C = C.transition(F);
            p = p.transition(F).attr("opacity", Pe).attr("transform", function(M) {
                if (isFinite(M = z(M))) {
                    return P(M + Y);
                }
                return this.getAttribute("transform");
            });
            L.attr("opacity", Pe).attr("transform", function(M) {
                let __axis = this.parentNode.__axis;
                return P((__axis && isFinite(__axis = __axis(M)) ? __axis : z(M)) + Y);
            });
        }
        p.remove();
        T.attr("d", t === Xt || t === le ? a ? `M${S * a},${R}H${Y}V${E}H${S * a}` : `M${Y},${R}V${E}` : a ? `M${R},${S * a}V${Y}H${E}V${S * a}` : `M${R},${Y}H${E}`);
        k.attr("opacity", 1).attr("transform", (M)=>P(z(M) + Y));
        x.attr(`${w}2`, S * s);
        C.attr(w, S * v).text(Z);
        G.filter(ur).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === le ? "start" : t === Xt ? "end" : "middle");
        G.each(function() {
            this.__axis = z;
        });
    }
    _.scale = function(F) {
        if (arguments.length) {
            e = F;
            return _;
        }
        return e;
    };
    _.ticks = function() {
        n = Array.from(arguments);
        return _;
    };
    _.tickArguments = function(F) {
        if (arguments.length) {
            n = F == null ? [] : Array.from(F);
            return _;
        }
        return n.slice();
    };
    _.tickValues = function(F) {
        if (arguments.length) {
            r = F == null ? null : Array.from(F);
            return _;
        }
        return r && r.slice();
    };
    _.tickFormat = function(F) {
        if (arguments.length) {
            i = F;
            return _;
        }
        return i;
    };
    _.tickSize = function(F) {
        if (arguments.length) {
            s = a = +F;
            return _;
        }
        return s;
    };
    _.tickSizeInner = function(F) {
        if (arguments.length) {
            s = +F;
            return _;
        }
        return s;
    };
    _.tickSizeOuter = function(F) {
        if (arguments.length) {
            a = +F;
            return _;
        }
        return a;
    };
    _.tickPadding = function(F) {
        if (arguments.length) {
            y = +F;
            return _;
        }
        return y;
    };
    _.offset = function(F) {
        if (arguments.length) {
            Y = +F;
            return _;
        }
        return Y;
    };
    return _;
}
function lr(t) {
    return fn(Gt, t);
}
function fr(t) {
    return fn(xe, t);
}
const dr = Math.PI / 180;
const hr = 180 / Math.PI;
const ne = 18;
const dn = 0.96422;
const hn = 1;
const mn = 0.82521;
const gn = 4 / 29;
const Yt = 6 / 29;
const yn = 3 * Yt * Yt;
const mr = Yt * Yt * Yt;
function kn(t) {
    if (t instanceof ft) {
        return new ft(t.l, t.a, t.b, t.opacity);
    }
    if (t instanceof ht) {
        return pn(t);
    }
    if (!(t instanceof bg)) {
        t = bh(t);
    }
    const e = me(t.r);
    const n = me(t.g);
    const r = me(t.b);
    const i = fe((0.2225045 * e + 0.7168786 * n + 0.0606169 * r) / hn);
    let s;
    let a;
    if (e === n && n === r) {
        a = i;
        s = i;
    } else {
        s = fe((0.4360747 * e + 0.3850649 * n + 0.1430804 * r) / dn);
        a = fe((0.0139322 * e + 0.0971045 * n + 0.7141733 * r) / mn);
    }
    return new ft(116 * i - 16, 500 * (s - i), 200 * (i - a), t.opacity);
}
function gr(t, e, n, r) {
    if (arguments.length === 1) {
        return kn(t);
    }
    return new ft(t, e, n, r ?? 1);
}
function ft(t, e, n, r) {
    this.l = +t;
    this.a = +e;
    this.b = +n;
    this.opacity = +r;
}
bi_1(ft, gr, bj(bk, {
    brighter (t) {
        return new ft(this.l + ne * (t ?? 1), this.a, this.b, this.opacity);
    },
    darker (t) {
        return new ft(this.l - ne * (t ?? 1), this.a, this.b, this.opacity);
    },
    rgb () {
        let t = (this.l + 16) / 116;
        let e = isNaN(this.a) ? t : t + this.a / 500;
        let n = isNaN(this.b) ? t : t - this.b / 200;
        e = dn * de(e);
        t = hn * de(t);
        n = mn * de(n);
        return new bg(he(3.1338561 * e - 1.6168667 * t - 0.4906146 * n), he(-0.9787684 * e + 1.9161415 * t + 0.033454 * n), he(0.0719453 * e - 0.2289914 * t + 1.4052427 * n), this.opacity);
    }
}));
function fe(t) {
    if (t > mr) {
        return t ** (1 / 3);
    }
    return t / yn + gn;
}
function de(t) {
    if (t > Yt) {
        return t * t * t;
    }
    return yn * (t - gn);
}
function he(t) {
    return 255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * t ** (1 / 2.4) - 0.055);
}
function me(t) {
    if ((t /= 255) <= 0.04045) {
        return t / 12.92;
    }
    return ((t + 0.055) / 1.055) ** 2.4;
}
function yr(t) {
    if (t instanceof ht) {
        return new ht(t.h, t.c, t.l, t.opacity);
    }
    if (!(t instanceof ft)) {
        t = kn(t);
    }
    if (t.a === 0 && t.b === 0) {
        return new ht(NaN, t.l > 0 && t.l < 100 ? 0 : NaN, t.l, t.opacity);
    }
    const e = Math.atan2(t.b, t.a) * hr;
    return new ht(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
}
function be(t, e, n, r) {
    if (arguments.length === 1) {
        return yr(t);
    }
    return new ht(t, e, n, r ?? 1);
}
function ht(t, e, n, r) {
    this.h = +t;
    this.c = +e;
    this.l = +n;
    this.opacity = +r;
}
function pn(t) {
    if (isNaN(t.h)) {
        return new ft(t.l, 0, 0, t.opacity);
    }
    const e = t.h * dr;
    return new ft(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
}
bi_1(ht, be, bj(bk, {
    brighter (t) {
        return new ht(this.h, this.c, this.l + ne * (t ?? 1), this.opacity);
    },
    darker (t) {
        return new ht(this.h, this.c, this.l - ne * (t ?? 1), this.opacity);
    },
    rgb () {
        return pn(this).rgb();
    }
}));
function kr(t) {
    return (e, n)=>{
        const r = t((e = be(e)).h, (n = be(n)).h);
        const i = bl(e.c, n.c);
        const s = bl(e.l, n.l);
        const a = bl(e.opacity, n.opacity);
        return (y)=>{
            e.h = r(y);
            e.c = i(y);
            e.l = s(y);
            e.opacity = a(y);
            return `${e}`;
        };
    };
}
const pr = kr(bm);
function vr(t, e) {
    t = t.slice();
    let n = 0;
    let r = t.length - 1;
    let i = t[n];
    let s = t[r];
    let a;
    if (s < i) {
        a = n;
        n = r;
        r = a;
        a = i;
        i = s;
        s = a;
    }
    t[n] = e.floor(i);
    t[r] = e.ceil(s);
    return t;
}
const ge = new Date;
const ye = new Date;
function nt(t, e, n, r) {
    function i(s) {
        t(s = arguments.length === 0 ? new Date : new Date(+s));
        return s;
    }
    i.floor = (s)=>{
        t(s = new Date(+s));
        return s;
    };
    i.ceil = (s)=>{
        t(s = new Date(s - 1));
        e(s, 1);
        t(s);
        return s;
    };
    i.round = (s)=>{
        const a = i(s);
        const y = i.ceil(s);
        if (s - a < y - s) {
            return a;
        }
        return y;
    };
    i.offset = (s, a)=>{
        e(s = new Date(+s), a == null ? 1 : Math.floor(a));
        return s;
    };
    i.range = (s, a, y)=>{
        const Y = [];
        s = i.ceil(s);
        y = y == null ? 1 : Math.floor(y);
        if (!(s < a) || !(y > 0)) {
            return Y;
        }
        let S;
        do {
            Y.push(S = new Date(+s));
            e(s, y);
            t(s);
        }while (S < s && s < a)
        return Y;
    };
    i.filter = (s)=>nt((a)=>{
            if (a >= a) {
                while(t(a), !s(a)){
                    a.setTime(a - 1);
                }
            }
        }, (a, y)=>{
            if (a >= a) {
                if (y < 0) {
                    while(++y <= 0){
                        while(e(a, -1), !s(a));
                    }
                } else {
                    while(--y >= 0){
                        while(e(a, 1), !s(a));
                    }
                }
            }
        });
    if (n) {
        i.count = (s, a)=>{
            ge.setTime(+s);
            ye.setTime(+a);
            t(ge);
            t(ye);
            return Math.floor(n(ge, ye));
        };
        i.every = (s)=>{
            s = Math.floor(s);
            if (!isFinite(s) || !(s > 0)) {
                return null;
            }
            if (s > 1) {
                return i.filter(r ? (a)=>r(a) % s === 0 : (a)=>i.count(0, a) % s === 0);
            }
            return i;
        };
    }
    return i;
}
const Et = nt(()=>{}, (t, e)=>{
    t.setTime(+t + e);
}, (t, e)=>e - t);
Et.every = (t)=>{
    t = Math.floor(t);
    if (!isFinite(t) || !(t > 0)) {
        return null;
    }
    if (t > 1) {
        return nt((e)=>{
            e.setTime(Math.floor(e / t) * t);
        }, (e, n)=>{
            e.setTime(+e + n * t);
        }, (e, n)=>(n - e) / t);
    }
    return Et;
};
Et.range;
const mt = 1000;
const ct = mt * 60;
const gt = ct * 60;
const yt = gt * 24;
const Se = yt * 7;
const Ve = yt * 30;
const ke = yt * 365;
const vt = nt((t)=>{
    t.setTime(t - t.getMilliseconds());
}, (t, e)=>{
    t.setTime(+t + e * mt);
}, (t, e)=>(e - t) / mt, (t)=>t.getUTCSeconds());
vt.range;
const Nt = nt((t)=>{
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * mt);
}, (t, e)=>{
    t.setTime(+t + e * ct);
}, (t, e)=>(e - t) / ct, (t)=>t.getMinutes());
Nt.range;
const Tr = nt((t)=>{
    t.setUTCSeconds(0, 0);
}, (t, e)=>{
    t.setTime(+t + e * ct);
}, (t, e)=>(e - t) / ct, (t)=>t.getUTCMinutes());
Tr.range;
const Pt = nt((t)=>{
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * mt - t.getMinutes() * ct);
}, (t, e)=>{
    t.setTime(+t + e * gt);
}, (t, e)=>(e - t) / gt, (t)=>t.getHours());
Pt.range;
const xr = nt((t)=>{
    t.setUTCMinutes(0, 0, 0);
}, (t, e)=>{
    t.setTime(+t + e * gt);
}, (t, e)=>(e - t) / gt, (t)=>t.getUTCHours());
xr.range;
const xt = nt((t)=>t.setHours(0, 0, 0, 0), (t, e)=>t.setDate(t.getDate() + e), (t, e)=>(e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * ct) / yt, (t)=>t.getDate() - 1);
xt.range;
const _e = nt((t)=>{
    t.setUTCHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setUTCDate(t.getUTCDate() + e);
}, (t, e)=>(e - t) / yt, (t)=>t.getUTCDate() - 1);
_e.range;
const br = nt((t)=>{
    t.setUTCHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setUTCDate(t.getUTCDate() + e);
}, (t, e)=>(e - t) / yt, (t)=>Math.floor(t / yt));
br.range;
function Dt(t) {
    return nt((e)=>{
        e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7);
        e.setHours(0, 0, 0, 0);
    }, (e, n)=>{
        e.setDate(e.getDate() + n * 7);
    }, (e, n)=>(n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * ct) / Se);
}
const sunday = Dt(0);
const monday = Dt(1);
const tuesday = Dt(2);
const wednesday = Dt(3);
const thursday = Dt(4);
const friday = Dt(5);
const saturday = Dt(6);
sunday.range;
monday.range;
tuesday.range;
wednesday.range;
thursday.range;
friday.range;
saturday.range;
function Mt(t) {
    return nt((e)=>{
        e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7);
        e.setUTCHours(0, 0, 0, 0);
    }, (e, n)=>{
        e.setUTCDate(e.getUTCDate() + n * 7);
    }, (e, n)=>(n - e) / Se);
}
const wn = Mt(0);
const re = Mt(1);
const wr = Mt(2);
const Dr = Mt(3);
const It = Mt(4);
const Mr = Mt(5);
const Cr = Mt(6);
wn.range;
re.range;
wr.range;
Dr.range;
It.range;
Mr.range;
Cr.range;
const Rt = nt((t)=>{
    t.setDate(1);
    t.setHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setMonth(t.getMonth() + e);
}, (t, e)=>e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t)=>t.getMonth());
Rt.range;
const Sr = nt((t)=>{
    t.setUTCDate(1);
    t.setUTCHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e)=>e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t)=>t.getUTCMonth());
Sr.range;
const kt = nt((t)=>{
    t.setMonth(0, 1);
    t.setHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setFullYear(t.getFullYear() + e);
}, (t, e)=>e.getFullYear() - t.getFullYear(), (t)=>t.getFullYear());
kt.every = (t)=>{
    if (!isFinite(t = Math.floor(t)) || !(t > 0)) {
        return null;
    }
    return nt((e)=>{
        e.setFullYear(Math.floor(e.getFullYear() / t) * t);
        e.setMonth(0, 1);
        e.setHours(0, 0, 0, 0);
    }, (e, n)=>{
        e.setFullYear(e.getFullYear() + n * t);
    });
};
kt.range;
const wt = nt((t)=>{
    t.setUTCMonth(0, 1);
    t.setUTCHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setUTCFullYear(t.getUTCFullYear() + e);
}, (t, e)=>e.getUTCFullYear() - t.getUTCFullYear(), (t)=>t.getUTCFullYear());
wt.every = (t)=>{
    if (!isFinite(t = Math.floor(t)) || !(t > 0)) {
        return null;
    }
    return nt((e)=>{
        e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t);
        e.setUTCMonth(0, 1);
        e.setUTCHours(0, 0, 0, 0);
    }, (e, n)=>{
        e.setUTCFullYear(e.getUTCFullYear() + n * t);
    });
};
wt.range;
function _r(t, e, sunday, r, i, s) {
    const a = [
        [
            vt,
            1,
            mt
        ],
        [
            vt,
            5,
            5 * mt
        ],
        [
            vt,
            15,
            15 * mt
        ],
        [
            vt,
            30,
            30 * mt
        ],
        [
            s,
            1,
            ct
        ],
        [
            s,
            5,
            5 * ct
        ],
        [
            s,
            15,
            15 * ct
        ],
        [
            s,
            30,
            30 * ct
        ],
        [
            i,
            1,
            gt
        ],
        [
            i,
            3,
            3 * gt
        ],
        [
            i,
            6,
            6 * gt
        ],
        [
            i,
            12,
            12 * gt
        ],
        [
            r,
            1,
            yt
        ],
        [
            r,
            2,
            2 * yt
        ],
        [
            sunday,
            1,
            Se
        ],
        [
            e,
            1,
            Ve
        ],
        [
            e,
            3,
            3 * Ve
        ],
        [
            t,
            1,
            ke
        ]
    ];
    function y(S, w, P) {
        const _ = w < S;
        if (_) {
            [S, w] = [
                w,
                S
            ];
        }
        const F = P && typeof P.range === "function" ? P : Y(S, w, P);
        const X = F ? F.range(S, +w + 1) : [];
        if (_) {
            return X.reverse();
        }
        return X;
    }
    function Y(S, w, P) {
        const _ = Math.abs(w - S) / P;
        const F = b_1(([, , v])=>v).right(a, _);
        if (F === a.length) {
            return t.every(t_1(S / ke, w / ke, P));
        }
        if (F === 0) {
            return Et.every(Math.max(t_1(S, w, P), 1));
        }
        const [X, Z] = a[_ / a[F - 1][2] < a[F][2] / _ ? F - 1 : F];
        return X.every(Z);
    }
    return [
        y,
        Y
    ];
}
const [Fr, Yr] = _r(kt, Rt, sunday, xt, Pt, Nt);
function pe(t) {
    if (t.y >= 0 && t.y < 100) {
        const e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        e.setFullYear(t.y);
        return e;
    }
    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function ve(t) {
    if (t.y >= 0 && t.y < 100) {
        const e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        e.setUTCFullYear(t.y);
        return e;
    }
    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function $t(t, e, d) {
    return {
        y: t,
        m: e,
        d,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    };
}
function Ur({ dateTime, date, time, periods, days, shortDays, months, shortMonths }) {
    const S = Ot(periods);
    const w = Ht(periods);
    const P = Ot(days);
    const _ = Ht(days);
    const F = Ot(shortDays);
    const X = Ht(shortDays);
    const Z = Ot(months);
    const v = Ht(months);
    const U = Ot(shortMonths);
    const R = Ht(shortMonths);
    const E = {
        a: m,
        A: I,
        b: o,
        B: W,
        c: null,
        d: Xe,
        e: Xe,
        f: ti,
        g: li,
        G: di,
        H: Qr,
        I: Jr,
        j: Kr,
        L: Dn,
        m: ei,
        M: ni,
        p: u,
        q: K,
        Q: Qe,
        s: Je,
        S: ri,
        u: ii,
        U: si,
        V: ai,
        w: oi,
        W: ci,
        x: null,
        X: null,
        y: ui,
        Y: fi,
        Z: hi,
        "%": je
    };
    const z = {
        a: l,
        A: $,
        b: O,
        B: j,
        c: null,
        d: Ge,
        e: Ge,
        f: ki,
        g: Si,
        G: Fi,
        H: mi,
        I: gi,
        j: yi,
        L: Cn,
        m: pi,
        M: vi,
        p: H,
        q: J,
        Q: Qe,
        s: Je,
        S: Ti,
        u: xi,
        U: bi,
        V: wi,
        w: Di,
        W: Mi,
        x: null,
        X: null,
        y: Ci,
        Y: _i,
        Z: Yi,
        "%": je
    };
    var G = {
        a: x,
        A: C,
        b: M,
        B: D,
        c,
        d: Ze,
        e: Ze,
        f: Br,
        g: qe,
        G: ze,
        H: Be,
        I: Be,
        j: Rr,
        L: L_1,
        m: Vr,
        M: zr,
        p: L,
        q: Pr,
        Q: Gr,
        s: jr,
        S: qr,
        u: Wr,
        U: $r,
        V: Or,
        w: Ar,
        W: Hr,
        x: x_1,
        X: X_1,
        y: qe,
        Y: ze,
        Z: Nr,
        "%": Xr
    };
    E.x = T(date, E);
    E.X = T(time, E);
    E.c = T(dateTime, E);
    z.x = T(date, z);
    z.X = T(time, z);
    z.c = T(dateTime, z);
    function T(h, N) {
        return (V)=>{
            const f = [];
            let tt = -1;
            let A = 0;
            const h_length = h.length;
            let B;
            let st;
            let at;
            for(V instanceof Date || (V = new Date(+V)); ++tt < h_length;){
                if (h.charCodeAt(tt) === 37) {
                    f.push(h.slice(A, tt));
                    if ((st = Re[B = h.charAt(++tt)]) != null) {
                        B = h.charAt(++tt);
                    } else {
                        st = B === "e" ? " " : "0";
                    }
                    if (at = N[B]) {
                        B = at(V, st);
                    }
                    f.push(B);
                    A = tt + 1;
                }
            }
            f.push(h.slice(A, tt));
            return f.join("");
        };
    }
    function k(h, N) {
        return (V)=>{
            const f = $t(1900, undefined, 1);
            const tt = p(f, h, V += "", 0);
            let A;
            let Q;
            if (tt != V.length) {
                return null;
            }
            if ("Q" in f) {
                return new Date(f.Q);
            }
            if ("s" in f) {
                return new Date(f.s * 1000 + ("L" in f ? f.L : 0));
            }
            if (N && !("Z" in f)) {
                f.Z = 0;
            }
            if ("p" in f) {
                f.H = f.H % 12 + f.p * 12;
            }
            if (f.m === undefined) {
                f.m = "q" in f ? f.q : 0;
            }
            if ("V" in f) {
                if (f.V < 1 || f.V > 53) {
                    return null;
                }
                if (!("w" in f)) {
                    f.w = 1;
                }
                if ("Z" in f) {
                    A = ve($t(f.y, 0, 1));
                    Q = A.getUTCDay();
                    A = Q > 4 || Q === 0 ? re.ceil(A) : re(A);
                    A = _e.offset(A, (f.V - 1) * 7);
                    f.y = A.getUTCFullYear();
                    f.m = A.getUTCMonth();
                    f.d = A.getUTCDate() + (f.w + 6) % 7;
                } else {
                    A = pe($t(f.y, 0, 1));
                    Q = A.getDay();
                    A = Q > 4 || Q === 0 ? monday.ceil(A) : monday(A);
                    A = xt.offset(A, (f.V - 1) * 7);
                    f.y = A.getFullYear();
                    f.m = A.getMonth();
                    f.d = A.getDate() + (f.w + 6) % 7;
                }
            } else {
                if ("W" in f || "U" in f) {
                    if (!("w" in f)) {
                        f.w = "u" in f ? f.u % 7 : "W" in f ? 1 : 0;
                    }
                    Q = "Z" in f ? ve($t(f.y, 0, 1)).getUTCDay() : pe($t(f.y, 0, 1)).getDay();
                    f.m = 0;
                    f.d = "W" in f ? (f.w + 6) % 7 + f.W * 7 - (Q + 5) % 7 : f.w + f.U * 7 - (Q + 6) % 7;
                }
            }
            if ("Z" in f) {
                f.H += f.Z / 100 | 0;
                f.M += f.Z % 100;
                return ve(f);
            }
            return pe(f);
        };
    }
    function p(h, N, V, f) {
        let B;
        let st;
        for(let tt = 0, A = N.length, Q = V.length; tt < A;){
            if (f >= Q) {
                return -1;
            }
            B = N.charCodeAt(tt++);
            if (B === 37) {
                B = N.charAt(tt++);
                st = G[B in Re ? N.charAt(tt++) : B];
                if (!st || (f = st(h, V, f)) < 0) {
                    return -1;
                }
            } else if (B != V.charCodeAt(f++)) {
                return -1;
            }
        }
        return f;
    }
    function L(h, N, V) {
        const f = S.exec(N.slice(V));
        if (f) {
            h.p = w.get(f[0].toLowerCase());
            return V + f[0].length;
        }
        return -1;
    }
    function x(h, N, V) {
        const f = F.exec(N.slice(V));
        if (f) {
            h.w = X.get(f[0].toLowerCase());
            return V + f[0].length;
        }
        return -1;
    }
    function C(h, N, V) {
        const f = P.exec(N.slice(V));
        if (f) {
            h.w = _.get(f[0].toLowerCase());
            return V + f[0].length;
        }
        return -1;
    }
    function M(h, N, V) {
        const f = U.exec(N.slice(V));
        if (f) {
            h.m = R.get(f[0].toLowerCase());
            return V + f[0].length;
        }
        return -1;
    }
    function D(h, N, V) {
        const f = Z.exec(N.slice(V));
        if (f) {
            h.m = v.get(f[0].toLowerCase());
            return V + f[0].length;
        }
        return -1;
    }
    function c(h, N, V) {
        return p(h, dateTime, N, V);
    }
    function x_1(h, N, V) {
        return p(h, date, N, V);
    }
    function X_1(h, N, V) {
        return p(h, time, N, V);
    }
    function m(h) {
        return shortDays[h.getDay()];
    }
    function I(h) {
        return days[h.getDay()];
    }
    function o(h) {
        return shortMonths[h.getMonth()];
    }
    function W(h) {
        return months[h.getMonth()];
    }
    function u(h) {
        return periods[+(h.getHours() >= 12)];
    }
    function K(h) {
        return 1 + ~~(h.getMonth() / 3);
    }
    function l(h) {
        return shortDays[h.getUTCDay()];
    }
    function $(h) {
        return days[h.getUTCDay()];
    }
    function O(h) {
        return shortMonths[h.getUTCMonth()];
    }
    function j(h) {
        return months[h.getUTCMonth()];
    }
    function H(h) {
        return periods[+(h.getUTCHours() >= 12)];
    }
    function J(h) {
        return 1 + ~~(h.getUTCMonth() / 3);
    }
    return {
        format (h) {
            const N = T(h += "", E);
            N.toString = ()=>h;
            return N;
        },
        parse (h) {
            const N = k(h += "", false);
            N.toString = ()=>h;
            return N;
        },
        utcFormat (h) {
            const N = T(h += "", z);
            N.toString = ()=>h;
            return N;
        },
        utcParse (h) {
            const N = k(h += "", true);
            N.toString = ()=>h;
            return N;
        }
    };
}
var Re = {
    "-": "",
    _: " ",
    0: "0"
};
const rt = /^\s*\d+/;
const Er = /^%/;
const Ir = /[\\^$*+?|[\]().{}]/g;
function q(t, e, n) {
    const r = t < 0 ? "-" : "";
    const i = `${r ? -t : t}`;
    const i_length = i.length;
    return r + (i_length < n ? new Array(n - i_length + 1).join(e) + i : i);
}
function Lr(t) {
    return t.replace(Ir, "\\$&");
}
function Ot(t) {
    return new RegExp(`^(?:${t.map(Lr).join("|")})`, "i");
}
function Ht(t) {
    return new Map(t.map((e, n)=>[
            e.toLowerCase(),
            n
        ]));
}
function Ar(t, e, n) {
    const r = rt.exec(e.slice(n, n + 1));
    if (r) {
        t.w = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function Wr(t, e, n) {
    const r = rt.exec(e.slice(n, n + 1));
    if (r) {
        t.u = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function $r(t, e, n) {
    const r = rt.exec(e.slice(n, n + 2));
    if (r) {
        t.U = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function Or(t, e, n) {
    const r = rt.exec(e.slice(n, n + 2));
    if (r) {
        t.V = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function Hr(t, e, n) {
    const r = rt.exec(e.slice(n, n + 2));
    if (r) {
        t.W = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function ze(t, e, n) {
    const r = rt.exec(e.slice(n, n + 4));
    if (r) {
        t.y = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function qe(t, e, n) {
    const r = rt.exec(e.slice(n, n + 2));
    if (r) {
        t.y = +r[0] + (+r[0] > 68 ? 1900 : 2000);
        return n + r[0].length;
    }
    return -1;
}
function Nr(t, e, n) {
    const r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
    if (r) {
        t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"));
        return n + r[0].length;
    }
    return -1;
}
function Pr(t, e, n) {
    const r = rt.exec(e.slice(n, n + 1));
    if (r) {
        t.q = r[0] * 3 - 3;
        return n + r[0].length;
    }
    return -1;
}
function Vr(t, e, n) {
    const r = rt.exec(e.slice(n, n + 2));
    if (r) {
        t.m = r[0] - 1;
        return n + r[0].length;
    }
    return -1;
}
function Ze(t, e, n) {
    const r = rt.exec(e.slice(n, n + 2));
    if (r) {
        t.d = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function Rr(t, e, n) {
    const r = rt.exec(e.slice(n, n + 3));
    if (r) {
        t.m = 0;
        t.d = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function Be(t, e, n) {
    const r = rt.exec(e.slice(n, n + 2));
    if (r) {
        t.H = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function zr(t, e, n) {
    const r = rt.exec(e.slice(n, n + 2));
    if (r) {
        t.M = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function qr(t, e, n) {
    const r = rt.exec(e.slice(n, n + 2));
    if (r) {
        t.S = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function L_1(t, e, n) {
    const r = rt.exec(e.slice(n, n + 3));
    if (r) {
        t.L = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function Br(t, e, n) {
    const r = rt.exec(e.slice(n, n + 6));
    if (r) {
        t.L = Math.floor(r[0] / 1000);
        return n + r[0].length;
    }
    return -1;
}
function Xr(t, e, n) {
    const r = Er.exec(e.slice(n, n + 1));
    if (r) {
        return n + r[0].length;
    }
    return -1;
}
function Gr(t, e, n) {
    const r = rt.exec(e.slice(n));
    if (r) {
        t.Q = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function jr(t, e, n) {
    const r = rt.exec(e.slice(n));
    if (r) {
        t.s = +r[0];
        return n + r[0].length;
    }
    return -1;
}
function Xe(t, e) {
    return q(t.getDate(), e, 2);
}
function Qr(t, e) {
    return q(t.getHours(), e, 2);
}
function Jr(t, e) {
    return q(t.getHours() % 12 || 12, e, 2);
}
function Kr(t, e) {
    return q(1 + xt.count(kt(t), t), e, 3);
}
function Dn(t, e) {
    return q(t.getMilliseconds(), e, 3);
}
function ti(t, e) {
    return `${Dn(t, e)}000`;
}
function ei(t, e) {
    return q(t.getMonth() + 1, e, 2);
}
function ni(t, e) {
    return q(t.getMinutes(), e, 2);
}
function ri(t, e) {
    return q(t.getSeconds(), e, 2);
}
function ii(t) {
    const e = t.getDay();
    if (e === 0) {
        return 7;
    }
    return e;
}
function si(t, e) {
    return q(sunday.count(kt(t) - 1, t), e, 2);
}
function Mn(t) {
    const e = t.getDay();
    if (e >= 4 || e === 0) {
        return thursday(t);
    }
    return thursday.ceil(t);
}
function ai(t, e) {
    t = Mn(t);
    return q(thursday.count(kt(t), t) + (kt(t).getDay() === 4), e, 2);
}
function oi(t) {
    return t.getDay();
}
function ci(t, e) {
    return q(monday.count(kt(t) - 1, t), e, 2);
}
function ui(t, e) {
    return q(t.getFullYear() % 100, e, 2);
}
function li(t, e) {
    t = Mn(t);
    return q(t.getFullYear() % 100, e, 2);
}
function fi(t, e) {
    return q(t.getFullYear() % 10000, e, 4);
}
function di(t, e) {
    const n = t.getDay();
    t = n >= 4 || n === 0 ? thursday(t) : thursday.ceil(t);
    return q(t.getFullYear() % 10000, e, 4);
}
function hi(t) {
    let e = t.getTimezoneOffset();
    return (e > 0 ? "-" : (e *= -1, "+")) + q(e / 60 | 0, "0", 2) + q(e % 60, "0", 2);
}
function Ge(t, e) {
    return q(t.getUTCDate(), e, 2);
}
function mi(t, e) {
    return q(t.getUTCHours(), e, 2);
}
function gi(t, e) {
    return q(t.getUTCHours() % 12 || 12, e, 2);
}
function yi(t, e) {
    return q(1 + _e.count(wt(t), t), e, 3);
}
function Cn(t, e) {
    return q(t.getUTCMilliseconds(), e, 3);
}
function ki(t, e) {
    return `${Cn(t, e)}000`;
}
function pi(t, e) {
    return q(t.getUTCMonth() + 1, e, 2);
}
function vi(t, e) {
    return q(t.getUTCMinutes(), e, 2);
}
function Ti(t, e) {
    return q(t.getUTCSeconds(), e, 2);
}
function xi(t) {
    const e = t.getUTCDay();
    if (e === 0) {
        return 7;
    }
    return e;
}
function bi(t, e) {
    return q(wn.count(wt(t) - 1, t), e, 2);
}
function Sn(t) {
    const e = t.getUTCDay();
    if (e >= 4 || e === 0) {
        return It(t);
    }
    return It.ceil(t);
}
function wi(t, e) {
    t = Sn(t);
    return q(It.count(wt(t), t) + (wt(t).getUTCDay() === 4), e, 2);
}
function Di(t) {
    return t.getUTCDay();
}
function Mi(t, e) {
    return q(re.count(wt(t) - 1, t), e, 2);
}
function Ci(t, e) {
    return q(t.getUTCFullYear() % 100, e, 2);
}
function Si(t, e) {
    t = Sn(t);
    return q(t.getUTCFullYear() % 100, e, 2);
}
function _i(t, e) {
    return q(t.getUTCFullYear() % 10000, e, 4);
}
function Fi(t, e) {
    const n = t.getUTCDay();
    t = n >= 4 || n === 0 ? It(t) : It.ceil(t);
    return q(t.getUTCFullYear() % 10000, e, 4);
}
function Yi() {
    return "+0000";
}
function je() {
    return "%";
}
function Qe(t) {
    return +t;
}
function Je(t) {
    return Math.floor(+t / 1000);
}
let St;
let ie;
Ui({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: [
        "AM",
        "PM"
    ],
    days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    shortDays: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
});
function Ui(t) {
    St = Ur(t);
    ie = St.format;
    St.parse;
    St.utcFormat;
    St.utcParse;
    return St;
}
function Ei(t) {
    return new Date(t);
}
function Ii(t) {
    if (t instanceof Date) {
        return +t;
    }
    return +new Date(+t);
}
function _n(t, e, n, r, i, s, a, y, Y, S) {
    const w = c_2();
    const { invert, domain } = w;
    const F = S(".%L");
    const X = S(":%S");
    const Z = S("%I:%M");
    const v = S("%I %p");
    const U = S("%a %d");
    const R = S("%b %d");
    const E = S("%B");
    const z = S("%Y");
    function G(T) {
        return (Y(T) < T ? F : y(T) < T ? X : a(T) < T ? Z : s(T) < T ? v : r(T) < T ? i(T) < T ? U : R : n(T) < T ? E : z)(T);
    }
    w.invert = (T)=>new Date(invert(T));
    w.domain = function(T) {
        if (arguments.length) {
            return domain(Array.from(T, Ii));
        }
        return domain().map(Ei);
    };
    w.ticks = (T)=>{
        const k = domain();
        return t(k[0], k[k.length - 1], T ?? 10);
    };
    w.tickFormat = (T, k)=>{
        if (k == null) {
            return G;
        }
        return S(k);
    };
    w.nice = (T)=>{
        const k = domain();
        if (!T || typeof T.range !== "function") {
            T = e(k[0], k[k.length - 1], T ?? 10);
        }
        if (T) {
            return domain(vr(k, T));
        }
        return w;
    };
    w.copy = ()=>a_1(w, _n(t, e, n, r, i, s, a, y, Y, S));
    return w;
}
function Li() {
    return i.apply(_n(Fr, Yr, kt, Rt, sunday, xt, Pt, Nt, vt, ie).domain([
        new Date(2000, 0, 1),
        new Date(2000, 0, 2)
    ]), arguments);
}
const jt = {
    exports: {}
};
const jt_exports = jt.exports;
let Ke;
function Wi() {
    if (!Ke) {
        Ke = 1;
        ((t, e)=>{
            ((jt_exports_1, r)=>{
                t.exports = r();
            })(jt_exports, ()=>{
                const n = "day";
                return (r, i, s)=>{
                    const a = (S)=>S.add(4 - S.isoWeekday(), n);
                    const i_prototype = i.prototype;
                    i_prototype.isoWeekYear = function() {
                        return a(this).year();
                    };
                    i_prototype.isoWeek = function(S) {
                        if (!this.$utils().u(S)) {
                            return this.add(7 * (S - this.isoWeek()), n);
                        }
                        let w;
                        let P;
                        let _;
                        let F;
                        const X = a(this);
                        w = this.isoWeekYear();
                        P = this.$u;
                        _ = (P ? s.utc : s)().year(w).startOf("year");
                        F = 4 - _.isoWeekday();
                        if (_.isoWeekday() > 4) {
                            F += 7;
                        }
                        const Z = _.add(F, n);
                        return X.diff(Z, "week") + 1;
                    };
                    i_prototype.isoWeekday = function(S) {
                        if (this.$utils().u(S)) {
                            return this.day() || 7;
                        }
                        return this.day(this.day() % 7 ? S : S - 7);
                    };
                    const y_startOf = i_prototype.startOf;
                    i_prototype.startOf = function(S, w) {
                        const P = this.$utils();
                        const _ = !!P.u(w) || w;
                        if (P.p(S) === "isoweek") {
                            if (_) {
                                return this.date(this.date() - (this.isoWeekday() - 1)).startOf("day");
                            }
                            return this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day");
                        }
                        return y_startOf.bind(this)(S, w);
                    };
                };
            });
        })(jt);
    }
    return jt.exports;
}
const $i = Wi();
const Oi = a4($i);
const Qt = {
    exports: {}
};
const Qt_exports = Qt.exports;
let tn;
function Ni() {
    if (!tn) {
        tn = 1;
        ((t, e)=>{
            ((Qt_exports_1, r)=>{
                t.exports = r();
            })(Qt_exports, ()=>{
                const n = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                };
                const r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g;
                const i = /\d/;
                const s = /\d\d/;
                const a = /\d\d?/;
                const y = /\d*[^-_:/,()\s\d]+/;
                let Y = {};
                let S = (v)=>(v = +v) + (v > 68 ? 1900 : 2000);
                const w = (v)=>function(U) {
                        this[v] = +U;
                    };
                const P = [
                    /[+-]\d\d:?(\d\d)?|Z/,
                    function(v) {
                        (this.zone || (this.zone = {})).offset = ((U)=>{
                            if (!U || U === "Z") {
                                return 0;
                            }
                            const R = U.match(/([+-]|\d\d)/g);
                            const E = 60 * R[1] + (+R[2] || 0);
                            if (E === 0) {
                                return 0;
                            }
                            if (R[0] === "+") {
                                return -E;
                            }
                            return E;
                        })(v);
                    }
                ];
                const _ = (v)=>{
                    const U = Y[v];
                    return U && (U.indexOf ? U : U.s.concat(U.f));
                };
                const F = (v, U)=>{
                    let R;
                    const Y_meridiem = Y.meridiem;
                    if (Y_meridiem) {
                        for(let z = 1; z <= 24; z += 1){
                            if (v.indexOf(Y_meridiem(z, 0, U)) > -1) {
                                R = z > 12;
                                break;
                            }
                        }
                    } else {
                        R = v === (U ? "pm" : "PM");
                    }
                    return R;
                };
                const X = {
                    A: [
                        y,
                        function(v) {
                            this.afternoon = F(v, false);
                        }
                    ],
                    a: [
                        y,
                        function(v) {
                            this.afternoon = F(v, true);
                        }
                    ],
                    Q: [
                        i,
                        function(v) {
                            this.month = 3 * (v - 1) + 1;
                        }
                    ],
                    S: [
                        i,
                        function(v) {
                            this.milliseconds = 100 * +v;
                        }
                    ],
                    SS: [
                        s,
                        function(v) {
                            this.milliseconds = 10 * +v;
                        }
                    ],
                    SSS: [
                        /\d{3}/,
                        function(v) {
                            this.milliseconds = +v;
                        }
                    ],
                    s: [
                        a,
                        w("seconds")
                    ],
                    ss: [
                        a,
                        w("seconds")
                    ],
                    m: [
                        a,
                        w("minutes")
                    ],
                    mm: [
                        a,
                        w("minutes")
                    ],
                    H: [
                        a,
                        w("hours")
                    ],
                    h: [
                        a,
                        w("hours")
                    ],
                    HH: [
                        a,
                        w("hours")
                    ],
                    hh: [
                        a,
                        w("hours")
                    ],
                    D: [
                        a,
                        w("day")
                    ],
                    DD: [
                        s,
                        w("day")
                    ],
                    Do: [
                        y,
                        function(v) {
                            const Y_ordinal = Y.ordinal;
                            const R = v.match(/\d+/);
                            this.day = R[0];
                            if (Y_ordinal) {
                                for(let E = 1; E <= 31; E += 1){
                                    if (Y_ordinal(E).replace(/\[|\]/g, "") === v) {
                                        this.day = E;
                                    }
                                }
                            }
                        }
                    ],
                    w: [
                        a,
                        w("week")
                    ],
                    ww: [
                        s,
                        w("week")
                    ],
                    M: [
                        a,
                        w("month")
                    ],
                    MM: [
                        s,
                        w("month")
                    ],
                    MMM: [
                        y,
                        function(v) {
                            const U = _("months");
                            const R = (_("monthsShort") || U.map((E)=>E.slice(0, 3))).indexOf(v) + 1;
                            if (R < 1) {
                                throw new Error;
                            }
                            this.month = R % 12 || R;
                        }
                    ],
                    MMMM: [
                        y,
                        function(v) {
                            const U = _("months").indexOf(v) + 1;
                            if (U < 1) {
                                throw new Error;
                            }
                            this.month = U % 12 || U;
                        }
                    ],
                    Y: [
                        /[+-]?\d+/,
                        w("year")
                    ],
                    YY: [
                        s,
                        function(v) {
                            this.year = S(v);
                        }
                    ],
                    YYYY: [
                        /\d{4}/,
                        w("year")
                    ],
                    Z: P,
                    ZZ: P
                };
                function Z(v) {
                    let U;
                    let R;
                    U = v;
                    R = Y && Y.formats;
                    const E = (v = U.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (x, C, M)=>{
                        const D = M && M.toUpperCase();
                        return C || R[M] || n[M] || R[D].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (c, g, b)=>g || b.slice(1));
                    })).match(r);
                    for(var z = E.length, G = 0; G < z; G += 1){
                        const T = E[G];
                        const k = X[T];
                        const regex = k && k[0];
                        const parser_1 = k && k[1];
                        E[G] = parser_1 ? {
                            regex,
                            parser: parser_1
                        } : T.replace(/^\[|\]$/g, "");
                    }
                    return (x)=>{
                        const C = {};
                        for(let M = 0, D = 0; M < z; M += 1){
                            const c = E[M];
                            if (typeof c === "string") {
                                D += c.length;
                            } else {
                                const { regex, parser } = c;
                                const m = x.slice(D);
                                const I = regex.exec(m)[0];
                                parser.call(C, I);
                                x = x.replace(I, "");
                            }
                        }
                        ((o)=>{
                            const o_afternoon = o.afternoon;
                            if (o_afternoon !== undefined) {
                                const u = o.hours;
                                o_afternoon ? u < 12 && (o.hours += 12) : u === 12 && (o.hours = 0);
                                delete o.afternoon;
                            }
                        })(C);
                        return C;
                    };
                }
                return (v, U, R)=>{
                    R.p.customParseFormat = true;
                    if (v && v.parseTwoDigitYear) {
                        S = v.parseTwoDigitYear;
                    }
                    const U_prototype = U.prototype;
                    const E_parse = U_prototype.parse;
                    U_prototype.parse = function(G) {
                        const { date, utc, args } = G;
                        this.$u = utc;
                        const L = args[1];
                        if (typeof L === "string") {
                            const x = args[2] === true;
                            const C = args[3] === true;
                            const M = x || C;
                            let D = args[2];
                            if (C) {
                                D = args[2];
                            }
                            Y = this.$locale();
                            if (!x && D) {
                                Y = R.Ls[D];
                            }
                            this.$d = ((date_1, I, utc_1, W)=>{
                                try {
                                    if ([
                                        "x",
                                        "X"
                                    ].indexOf(I) > -1) {
                                        return new Date((I === "X" ? 1000 : 1) * date_1);
                                    }
                                    const u = Z(I)(date_1);
                                    const { year, month, day, hours, minutes, seconds, milliseconds, zone, week } = u;
                                    const V = new Date;
                                    const f = day || (year || month ? 1 : V.getDate());
                                    const tt = year || V.getFullYear();
                                    let A = 0;
                                    if (!(year && !month)) {
                                        A = month > 0 ? month - 1 : V.getMonth();
                                    }
                                    let Q;
                                    const B = hours || 0;
                                    const st = minutes || 0;
                                    const at = seconds || 0;
                                    const pt = milliseconds || 0;
                                    if (zone) {
                                        return new Date(Date.UTC(tt, A, f, B, st, at, pt + 60 * zone.offset * 1000));
                                    }
                                    if (utc_1) {
                                        return new Date(Date.UTC(tt, A, f, B, st, at, pt));
                                    }
                                    Q = new Date(tt, A, f, B, st, at, pt);
                                    if (week) {
                                        Q = W(Q).week(week).toDate();
                                    }
                                    return Q;
                                } catch  {
                                    return new Date("");
                                }
                            })(date, L, utc, R);
                            this.init();
                            if (D && D !== true) {
                                this.$L = this.locale(D).$L;
                            }
                            if (M && date != this.format(L)) {
                                this.$d = new Date("");
                            }
                            Y = {};
                        } else if (L instanceof Array) {
                            for(let c = L.length, g = 1; g <= c; g += 1){
                                args[1] = L[g - 1];
                                const b = R.apply(this, args);
                                if (b.isValid()) {
                                    this.$d = b.$d;
                                    this.$L = b.$L;
                                    this.init();
                                    break;
                                }
                                if (g === c) {
                                    this.$d = new Date("");
                                }
                            }
                        } else {
                            E_parse.call(this, G);
                        }
                    };
                };
            });
        })(Qt);
    }
    return Qt.exports;
}
const Pi = Ni();
const Vi = a4(Pi);
const Jt = {
    exports: {}
};
const Jt_exports = Jt.exports;
let en;
function zi() {
    if (!en) {
        en = 1;
        ((t, e)=>{
            ((Jt_exports_1, r)=>{
                t.exports = r();
            })(Jt_exports, ()=>(n, { prototype })=>{
                    const prototype_format = prototype.format;
                    prototype.format = function(a) {
                        const y = this;
                        const Y = this.$locale();
                        if (!this.isValid()) {
                            return prototype_format.bind(this)(a);
                        }
                        const S = this.$utils();
                        const w = (a || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (P)=>{
                            switch(P){
                                case "Q":
                                    return Math.ceil((y.$M + 1) / 3);
                                case "Do":
                                    return Y.ordinal(y.$D);
                                case "gggg":
                                    return y.weekYear();
                                case "GGGG":
                                    return y.isoWeekYear();
                                case "wo":
                                    return Y.ordinal(y.week(), "W");
                                case "w":
                                case "ww":
                                    return S.s(y.week(), P === "w" ? 1 : 2, "0");
                                case "W":
                                case "WW":
                                    return S.s(y.isoWeek(), P === "W" ? 1 : 2, "0");
                                case "k":
                                case "kk":
                                    return S.s(String(y.$H === 0 ? 24 : y.$H), P === "k" ? 1 : 2, "0");
                                case "X":
                                    return Math.floor(y.$d.getTime() / 1000);
                                case "x":
                                    return y.$d.getTime();
                                case "z":
                                    return `[${y.offsetName()}]`;
                                case "zzz":
                                    return `[${y.offsetName("long")}]`;
                                default:
                                    return P;
                            }
                        });
                        return prototype_format.bind(this)(w);
                    };
                });
        })(Jt);
    }
    return Jt.exports;
}
const qi = zi();
const Zi = a4(qi);
const Kt = {
    exports: {}
};
const Kt_exports = Kt.exports;
let nn;
function Xi() {
    if (!nn) {
        nn = 1;
        ((t, e)=>{
            ((Kt_exports_1, r)=>{
                t.exports = r();
            })(Kt_exports, function() {
                let n;
                let r;
                const seconds = 1000;
                const minutes = 60000;
                const hours = 3600000;
                const days = 86400000;
                const Y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
                const years = 31536000000;
                const months = 2628000000;
                const P = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
                const _ = {
                    years,
                    months,
                    days,
                    hours,
                    minutes,
                    seconds,
                    milliseconds: 1,
                    weeks: 604800000
                };
                const F = (T)=>T instanceof z;
                const X = (T, k, p)=>new z(T, p, k.$l);
                const Z = (T)=>`${r.p(T)}s`;
                const v = (T)=>T < 0;
                const U = (T)=>{
                    if (v(T)) {
                        return Math.ceil(T);
                    }
                    return Math.floor(T);
                };
                const R = (T)=>Math.abs(T);
                const E = (T, k)=>{
                    if (T) {
                        if (v(T)) {
                            return {
                                negative: true,
                                format: `${R(T)}${k}`
                            };
                        }
                        return {
                            negative: false,
                            format: `${T}${k}`
                        };
                    }
                    return {
                        negative: false,
                        format: ""
                    };
                };
                class z {
                    constructor(p, L, x){
                        var C = this;
                        this.$d = {};
                        this.$l = x;
                        if (p === undefined) {
                            this.$ms = 0;
                            this.parseFromMilliseconds();
                        }
                        if (L) {
                            return X(p * _[Z(L)], this);
                        }
                        if (typeof p === "number") {
                            this.$ms = p;
                            this.parseFromMilliseconds();
                            return this;
                        }
                        if (typeof p === "object") {
                            Object.keys(p).forEach((c)=>{
                                C.$d[Z(c)] = p[c];
                            });
                            this.calMilliseconds();
                            return this;
                        }
                        if (typeof p === "string") {
                            var M = p.match(P);
                            if (M) {
                                var D = M.slice(2).map((c)=>{
                                    if (c != null) {
                                        return Number(c);
                                    }
                                    return 0;
                                });
                                this.$d.years = D[0];
                                this.$d.months = D[1];
                                this.$d.weeks = D[2];
                                this.$d.days = D[3];
                                this.$d.hours = D[4];
                                this.$d.minutes = D[5];
                                this.$d.seconds = D[6];
                                this.calMilliseconds();
                                return this;
                            }
                        }
                        return this;
                    }
                    calMilliseconds() {
                        const p = this;
                        this.$ms = Object.keys(this.$d).reduce((acc, key)=>acc + (p.$d[key] || 0) * _[key], 0);
                    }
                    parseFromMilliseconds() {
                        let $ms = this.$ms;
                        this.$d.years = U($ms / years);
                        $ms %= years;
                        this.$d.months = U($ms / months);
                        $ms %= months;
                        this.$d.days = U($ms / days);
                        $ms %= days;
                        this.$d.hours = U($ms / hours);
                        $ms %= hours;
                        this.$d.minutes = U($ms / minutes);
                        $ms %= minutes;
                        this.$d.seconds = U($ms / seconds);
                        $ms %= seconds;
                        this.$d.milliseconds = $ms;
                    }
                    toISOString() {
                        const p = E(this.$d.years, "Y");
                        const L = E(this.$d.months, "M");
                        let x = +this.$d.days || 0;
                        if (this.$d.weeks) {
                            x += 7 * this.$d.weeks;
                        }
                        const C = E(x, "D");
                        const M = E(this.$d.hours, "H");
                        const D = E(this.$d.minutes, "M");
                        let c = this.$d.seconds || 0;
                        if (this.$d.milliseconds) {
                            c += this.$d.milliseconds / 1000;
                            c = Math.round(1000 * c) / 1000;
                        }
                        const g = E(c, "S");
                        const b = p.negative || L.negative || C.negative || M.negative || D.negative || g.negative;
                        const m = M.format || D.format || g.format ? "T" : "";
                        const I = `${b ? "-" : ""}P${p.format}${L.format}${C.format}${m}${M.format}${D.format}${g.format}`;
                        if (I === "P" || I === "-P") {
                            return "P0D";
                        }
                        return I;
                    }
                    toJSON() {
                        return this.toISOString();
                    }
                    format(p) {
                        const L = p || "YYYY-MM-DDTHH:mm:ss";
                        const x = {
                            Y: this.$d.years,
                            YY: r.s(this.$d.years, 2, "0"),
                            YYYY: r.s(this.$d.years, 4, "0"),
                            M: this.$d.months,
                            MM: r.s(this.$d.months, 2, "0"),
                            D: this.$d.days,
                            DD: r.s(this.$d.days, 2, "0"),
                            H: this.$d.hours,
                            HH: r.s(this.$d.hours, 2, "0"),
                            m: this.$d.minutes,
                            mm: r.s(this.$d.minutes, 2, "0"),
                            s: this.$d.seconds,
                            ss: r.s(this.$d.seconds, 2, "0"),
                            SSS: r.s(this.$d.milliseconds, 3, "0")
                        };
                        return L.replace(Y, (C, M)=>M || String(x[C]));
                    }
                    as(p) {
                        return this.$ms / _[Z(p)];
                    }
                    get(p) {
                        let $ms = this.$ms;
                        const x = Z(p);
                        if (x === "milliseconds") {
                            $ms %= 1000;
                        } else {
                            $ms = x === "weeks" ? U($ms / _[x]) : this.$d[x];
                        }
                        return $ms || 0;
                    }
                    add(p, L, x) {
                        let C;
                        C = L ? p * _[Z(L)] : F(p) ? p.$ms : X(p, this).$ms;
                        return X(this.$ms + C * (x ? -1 : 1), this);
                    }
                    subtract(p, L) {
                        return this.add(p, L, true);
                    }
                    locale(p) {
                        const L = this.clone();
                        L.$l = p;
                        return L;
                    }
                    clone() {
                        return X(this.$ms, this);
                    }
                    humanize(p) {
                        return n().add(this.$ms, "ms").locale(this.$l).fromNow(!p);
                    }
                    valueOf() {
                        return this.asMilliseconds();
                    }
                    milliseconds() {
                        return this.get("milliseconds");
                    }
                    asMilliseconds() {
                        return this.as("milliseconds");
                    }
                    seconds() {
                        return this.get("seconds");
                    }
                    asSeconds() {
                        return this.as("seconds");
                    }
                    minutes() {
                        return this.get("minutes");
                    }
                    asMinutes() {
                        return this.as("minutes");
                    }
                    hours() {
                        return this.get("hours");
                    }
                    asHours() {
                        return this.as("hours");
                    }
                    days() {
                        return this.get("days");
                    }
                    asDays() {
                        return this.as("days");
                    }
                    weeks() {
                        return this.get("weeks");
                    }
                    asWeeks() {
                        return this.as("weeks");
                    }
                    months() {
                        return this.get("months");
                    }
                    asMonths() {
                        return this.as("months");
                    }
                    years() {
                        return this.get("years");
                    }
                    asYears() {
                        return this.as("years");
                    }
                }
                const G = (T, k, p)=>T.add(k.years() * p, "y").add(k.months() * p, "M").add(k.days() * p, "d").add(k.hours() * p, "h").add(k.minutes() * p, "m").add(k.seconds() * p, "s").add(k.milliseconds() * p, "ms");
                return (T, k, p)=>{
                    n = p;
                    r = p().$utils();
                    p.duration = (C, M)=>{
                        const $l = p.locale();
                        return X(C, {
                            $l
                        }, M);
                    };
                    p.isDuration = F;
                    const add = k.prototype.add;
                    const subtract = k.prototype.subtract;
                    k.prototype.add = function(C, M) {
                        if (F(C)) {
                            return G(this, C, 1);
                        }
                        return add.bind(this)(C, M);
                    };
                    k.prototype.subtract = function(C, M) {
                        if (F(C)) {
                            return G(this, C, -1);
                        }
                        return subtract.bind(this)(C, M);
                    };
                };
            });
        })(Kt);
    }
    return Kt.exports;
}
const Gi = Xi();
const ji = a4(Gi);
const we = (()=>{
    const t = __1((D, c, g, b)=>{
        g = g || {};
        for(b = D.length; b--; g[D[b]] = c);
        return g;
    }, "o");
    const e = [
        6,
        8,
        10,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        33,
        35,
        36,
        38,
        40
    ];
    const n = [
        1,
        26
    ];
    const r = [
        1,
        27
    ];
    const i = [
        1,
        28
    ];
    const s = [
        1,
        29
    ];
    const a = [
        1,
        30
    ];
    const y = [
        1,
        31
    ];
    const Y = [
        1,
        32
    ];
    const S = [
        1,
        33
    ];
    const w = [
        1,
        34
    ];
    const P = [
        1,
        9
    ];
    const _ = [
        1,
        10
    ];
    const F = [
        1,
        11
    ];
    const X = [
        1,
        12
    ];
    const Z = [
        1,
        13
    ];
    const v = [
        1,
        14
    ];
    const U = [
        1,
        15
    ];
    const R = [
        1,
        16
    ];
    const E = [
        1,
        19
    ];
    const z = [
        1,
        20
    ];
    const G = [
        1,
        21
    ];
    const T = [
        1,
        22
    ];
    const k = [
        1,
        23
    ];
    const p = [
        1,
        25
    ];
    const L = [
        1,
        35
    ];
    const x = {
        trace: __1(()=>{}, "trace"),
        yy: {},
        symbols_: {
            error: 2,
            start: 3,
            gantt: 4,
            document: 5,
            EOF: 6,
            line: 7,
            SPACE: 8,
            statement: 9,
            NL: 10,
            weekday: 11,
            weekday_monday: 12,
            weekday_tuesday: 13,
            weekday_wednesday: 14,
            weekday_thursday: 15,
            weekday_friday: 16,
            weekday_saturday: 17,
            weekday_sunday: 18,
            weekend: 19,
            weekend_friday: 20,
            weekend_saturday: 21,
            dateFormat: 22,
            inclusiveEndDates: 23,
            topAxis: 24,
            axisFormat: 25,
            tickInterval: 26,
            excludes: 27,
            includes: 28,
            todayMarker: 29,
            title: 30,
            acc_title: 31,
            acc_title_value: 32,
            acc_descr: 33,
            acc_descr_value: 34,
            acc_descr_multiline_value: 35,
            section: 36,
            clickStatement: 37,
            taskTxt: 38,
            taskData: 39,
            click: 40,
            callbackname: 41,
            callbackargs: 42,
            href: 43,
            clickStatementDebug: 44,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            4: "gantt",
            6: "EOF",
            8: "SPACE",
            10: "NL",
            12: "weekday_monday",
            13: "weekday_tuesday",
            14: "weekday_wednesday",
            15: "weekday_thursday",
            16: "weekday_friday",
            17: "weekday_saturday",
            18: "weekday_sunday",
            20: "weekend_friday",
            21: "weekend_saturday",
            22: "dateFormat",
            23: "inclusiveEndDates",
            24: "topAxis",
            25: "axisFormat",
            26: "tickInterval",
            27: "excludes",
            28: "includes",
            29: "todayMarker",
            30: "title",
            31: "acc_title",
            32: "acc_title_value",
            33: "acc_descr",
            34: "acc_descr_value",
            35: "acc_descr_multiline_value",
            36: "section",
            38: "taskTxt",
            39: "taskData",
            40: "click",
            41: "callbackname",
            42: "callbackargs",
            43: "href"
        },
        productions_: [
            0,
            [
                3,
                3
            ],
            [
                5,
                0
            ],
            [
                5,
                2
            ],
            [
                7,
                2
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                11,
                1
            ],
            [
                11,
                1
            ],
            [
                11,
                1
            ],
            [
                11,
                1
            ],
            [
                11,
                1
            ],
            [
                11,
                1
            ],
            [
                11,
                1
            ],
            [
                19,
                1
            ],
            [
                19,
                1
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
                9,
                1
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
                9,
                1
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
                9,
                1
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
                9,
                2
            ],
            [
                9,
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
                9,
                1
            ],
            [
                9,
                2
            ],
            [
                37,
                2
            ],
            [
                37,
                3
            ],
            [
                37,
                3
            ],
            [
                37,
                4
            ],
            [
                37,
                3
            ],
            [
                37,
                4
            ],
            [
                37,
                2
            ],
            [
                44,
                2
            ],
            [
                44,
                3
            ],
            [
                44,
                3
            ],
            [
                44,
                4
            ],
            [
                44,
                3
            ],
            [
                44,
                4
            ],
            [
                44,
                2
            ]
        ],
        performAction: __1(function(c, g, b, m, I, o, W) {
            const u = o.length - 1;
            switch(I){
                case 1:
                    return o[u - 1];
                case 2:
                    this.$ = [];
                    break;
                case 3:
                    o[u - 1].push(o[u]);
                    this.$ = o[u - 1];
                    break;
                case 4:
                case 5:
                    this.$ = o[u];
                    break;
                case 6:
                case 7:
                    this.$ = [];
                    break;
                case 8:
                    m.setWeekday("monday");
                    break;
                case 9:
                    m.setWeekday("tuesday");
                    break;
                case 10:
                    m.setWeekday("wednesday");
                    break;
                case 11:
                    m.setWeekday("thursday");
                    break;
                case 12:
                    m.setWeekday("friday");
                    break;
                case 13:
                    m.setWeekday("saturday");
                    break;
                case 14:
                    m.setWeekday("sunday");
                    break;
                case 15:
                    m.setWeekend("friday");
                    break;
                case 16:
                    m.setWeekend("saturday");
                    break;
                case 17:
                    m.setDateFormat(o[u].substr(11));
                    this.$ = o[u].substr(11);
                    break;
                case 18:
                    m.enableInclusiveEndDates();
                    this.$ = o[u].substr(18);
                    break;
                case 19:
                    m.TopAxis();
                    this.$ = o[u].substr(8);
                    break;
                case 20:
                    m.setAxisFormat(o[u].substr(11));
                    this.$ = o[u].substr(11);
                    break;
                case 21:
                    m.setTickInterval(o[u].substr(13));
                    this.$ = o[u].substr(13);
                    break;
                case 22:
                    m.setExcludes(o[u].substr(9));
                    this.$ = o[u].substr(9);
                    break;
                case 23:
                    m.setIncludes(o[u].substr(9));
                    this.$ = o[u].substr(9);
                    break;
                case 24:
                    m.setTodayMarker(o[u].substr(12));
                    this.$ = o[u].substr(12);
                    break;
                case 27:
                    m.setDiagramTitle(o[u].substr(6));
                    this.$ = o[u].substr(6);
                    break;
                case 28:
                    this.$ = o[u].trim();
                    m.setAccTitle(this.$);
                    break;
                case 29:
                case 30:
                    this.$ = o[u].trim();
                    m.setAccDescription(this.$);
                    break;
                case 31:
                    m.addSection(o[u].substr(8));
                    this.$ = o[u].substr(8);
                    break;
                case 33:
                    m.addTask(o[u - 1], o[u]);
                    this.$ = "task";
                    break;
                case 34:
                    this.$ = o[u - 1];
                    m.setClickEvent(o[u - 1], o[u], null);
                    break;
                case 35:
                    this.$ = o[u - 2];
                    m.setClickEvent(o[u - 2], o[u - 1], o[u]);
                    break;
                case 36:
                    this.$ = o[u - 2];
                    m.setClickEvent(o[u - 2], o[u - 1], null);
                    m.setLink(o[u - 2], o[u]);
                    break;
                case 37:
                    this.$ = o[u - 3];
                    m.setClickEvent(o[u - 3], o[u - 2], o[u - 1]);
                    m.setLink(o[u - 3], o[u]);
                    break;
                case 38:
                    this.$ = o[u - 2];
                    m.setClickEvent(o[u - 2], o[u], null);
                    m.setLink(o[u - 2], o[u - 1]);
                    break;
                case 39:
                    this.$ = o[u - 3];
                    m.setClickEvent(o[u - 3], o[u - 1], o[u]);
                    m.setLink(o[u - 3], o[u - 2]);
                    break;
                case 40:
                    this.$ = o[u - 1];
                    m.setLink(o[u - 1], o[u]);
                    break;
                case 41:
                case 47:
                    this.$ = `${o[u - 1]} ${o[u]}`;
                    break;
                case 42:
                case 43:
                case 45:
                    this.$ = `${o[u - 2]} ${o[u - 1]} ${o[u]}`;
                    break;
                case 44:
                case 46:
                    this.$ = `${o[u - 3]} ${o[u - 2]} ${o[u - 1]} ${o[u]}`;
                    break;
            }
        }, "anonymous"),
        table: [
            {
                3: 1,
                4: [
                    1,
                    2
                ]
            },
            {
                1: [
                    3
                ]
            },
            t(e, [
                2,
                2
            ], {
                5: 3
            }),
            {
                6: [
                    1,
                    4
                ],
                7: 5,
                8: [
                    1,
                    6
                ],
                9: 7,
                10: [
                    1,
                    8
                ],
                11: 17,
                12: n,
                13: r,
                14: i,
                15: s,
                16: a,
                17: y,
                18: Y,
                19: 18,
                20: S,
                21: w,
                22: P,
                23: _,
                24: F,
                25: X,
                26: Z,
                27: v,
                28: U,
                29: R,
                30: E,
                31: z,
                33: G,
                35: T,
                36: k,
                37: 24,
                38: p,
                40: L
            },
            t(e, [
                2,
                7
            ], {
                1: [
                    2,
                    1
                ]
            }),
            t(e, [
                2,
                3
            ]),
            {
                9: 36,
                11: 17,
                12: n,
                13: r,
                14: i,
                15: s,
                16: a,
                17: y,
                18: Y,
                19: 18,
                20: S,
                21: w,
                22: P,
                23: _,
                24: F,
                25: X,
                26: Z,
                27: v,
                28: U,
                29: R,
                30: E,
                31: z,
                33: G,
                35: T,
                36: k,
                37: 24,
                38: p,
                40: L
            },
            t(e, [
                2,
                5
            ]),
            t(e, [
                2,
                6
            ]),
            t(e, [
                2,
                17
            ]),
            t(e, [
                2,
                18
            ]),
            t(e, [
                2,
                19
            ]),
            t(e, [
                2,
                20
            ]),
            t(e, [
                2,
                21
            ]),
            t(e, [
                2,
                22
            ]),
            t(e, [
                2,
                23
            ]),
            t(e, [
                2,
                24
            ]),
            t(e, [
                2,
                25
            ]),
            t(e, [
                2,
                26
            ]),
            t(e, [
                2,
                27
            ]),
            {
                32: [
                    1,
                    37
                ]
            },
            {
                34: [
                    1,
                    38
                ]
            },
            t(e, [
                2,
                30
            ]),
            t(e, [
                2,
                31
            ]),
            t(e, [
                2,
                32
            ]),
            {
                39: [
                    1,
                    39
                ]
            },
            t(e, [
                2,
                8
            ]),
            t(e, [
                2,
                9
            ]),
            t(e, [
                2,
                10
            ]),
            t(e, [
                2,
                11
            ]),
            t(e, [
                2,
                12
            ]),
            t(e, [
                2,
                13
            ]),
            t(e, [
                2,
                14
            ]),
            t(e, [
                2,
                15
            ]),
            t(e, [
                2,
                16
            ]),
            {
                41: [
                    1,
                    40
                ],
                43: [
                    1,
                    41
                ]
            },
            t(e, [
                2,
                4
            ]),
            t(e, [
                2,
                28
            ]),
            t(e, [
                2,
                29
            ]),
            t(e, [
                2,
                33
            ]),
            t(e, [
                2,
                34
            ], {
                42: [
                    1,
                    42
                ],
                43: [
                    1,
                    43
                ]
            }),
            t(e, [
                2,
                40
            ], {
                41: [
                    1,
                    44
                ]
            }),
            t(e, [
                2,
                35
            ], {
                43: [
                    1,
                    45
                ]
            }),
            t(e, [
                2,
                36
            ]),
            t(e, [
                2,
                38
            ], {
                42: [
                    1,
                    46
                ]
            }),
            t(e, [
                2,
                37
            ]),
            t(e, [
                2,
                39
            ])
        ],
        defaultActions: {},
        parseError: __1(function(c, g) {
            if (g.recoverable) {
                this.trace(c);
            } else {
                const b = new Error(c);
                b.hash = g;
                throw b;
            }
        }, "parseError"),
        parse: __1(function(c) {
            const g = this;
            let b = [
                0
            ];
            let m = [];
            let I = [
                null
            ];
            let o = [];
            const table = this.table;
            let u = "";
            let K = 0;
            let l = 0;
            const $ = 2;
            const O = 1;
            const j = o.slice.call(arguments, 1);
            const H = Object.create(this.lexer);
            const J = {
                yy: {}
            };
            for(const h in this.yy){
                if (Object.prototype.hasOwnProperty.call(this.yy, h)) {
                    J.yy[h] = this.yy[h];
                }
            }
            H.setInput(c, J.yy);
            J.yy.lexer = H;
            J.yy.parser = this;
            if (typeof H.yylloc === "undefined") {
                H.yylloc = {};
            }
            let H_yylloc = H.yylloc;
            o.push(H_yylloc);
            const V = H.options && H.options.ranges;
            if (typeof J.yy.parseError === "function") {
                this.parseError = J.yy.parseError;
            } else {
                this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function f(ot) {
                b.length = b.length - 2 * ot;
                I.length = I.length - ot;
                o.length = o.length - ot;
            }
            __1(f, "popStack");
            function tt() {
                let ot;
                ot = m.pop() || H.lex() || O;
                if (typeof ot !== "number") {
                    if (ot instanceof Array) {
                        m = ot;
                        ot = m.pop();
                    }
                    ot = g.symbols_[ot] || ot;
                }
                return ot;
            }
            __1(tt, "lex");
            let A;
            let Q;
            let B;
            let st;
            const at = {};
            let pt;
            let ut;
            let He;
            let expected;
            while(true){
                Q = b[b.length - 1];
                if (this.defaultActions[Q]) {
                    B = this.defaultActions[Q];
                } else {
                    if (A === null || typeof A === "undefined") {
                        A = tt();
                    }
                    B = table[Q] && table[Q][A];
                }
                if (typeof B === "undefined" || !B.length || !B[0]) {
                    let ce = "";
                    expected = [];
                    for(pt in table[Q]){
                        if (this.terminals_[pt] && pt > $) {
                            expected.push(`'${this.terminals_[pt]}'`);
                        }
                    }
                    if (H.showPosition) {
                        ce = `Parse error on line ${K + 1}${`:
`}${H.showPosition()}${`
Expecting `}${expected.join(", ")}, got '${this.terminals_[A] || A}'`;
                    } else {
                        ce = `Parse error on line ${K + 1}: Unexpected ${A == O ? "end of input" : `'${this.terminals_[A] || A}'`}`;
                    }
                    this.parseError(ce, {
                        text: H.match,
                        token: this.terminals_[A] || A,
                        line: H.yylineno,
                        loc: H_yylloc,
                        expected
                    });
                }
                if (B[0] instanceof Array && B.length > 1) {
                    throw new Error(`Parse Error: multiple actions possible at state: ${Q}, token: ${A}`);
                }
                switch(B[0]){
                    case 1:
                        b.push(A);
                        I.push(H.yytext);
                        o.push(H.yylloc);
                        b.push(B[1]);
                        A = null;
                        l = H.yyleng;
                        u = H.yytext;
                        K = H.yylineno;
                        H_yylloc = H.yylloc;
                        break;
                    case 2:
                        ut = this.productions_[B[1]][1];
                        at.$ = I[I.length - ut];
                        at._$ = {
                            first_line: o[o.length - (ut || 1)].first_line,
                            last_line: o[o.length - 1].last_line,
                            first_column: o[o.length - (ut || 1)].first_column,
                            last_column: o[o.length - 1].last_column
                        };
                        if (V) {
                            at._$.range = [
                                o[o.length - (ut || 1)].range[0],
                                o[o.length - 1].range[1]
                            ];
                        }
                        st = this.performAction.apply(at, [
                            u,
                            l,
                            K,
                            J.yy,
                            B[1],
                            I,
                            o
                        ].concat(j));
                        if (typeof st !== "undefined") {
                            return st;
                        }
                        if (ut) {
                            b = b.slice(0, -1 * ut * 2);
                            I = I.slice(0, -1 * ut);
                            o = o.slice(0, -1 * ut);
                        }
                        b.push(this.productions_[B[1]][0]);
                        I.push(at.$);
                        o.push(at._$);
                        He = table[b[b.length - 2]][b[b.length - 1]];
                        b.push(He);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }, "parse")
    };
    const C = (()=>{
        const D = {
            EOF: 1,
            parseError: __1(function(g, b) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(g, b);
                } else {
                    throw new Error(g);
                }
            }, "parseError"),
            setInput: __1(function(c, g) {
                this.yy = g || this.yy || {};
                this._input = c;
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
                const c = this._input[0];
                this.yytext += c;
                this.yyleng++;
                this.offset++;
                this.match += c;
                this.matched += c;
                const g = c.match(/(?:\r\n?|\n).*/g);
                g ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++;
                this.options.ranges && this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return c;
            }, "input"),
            unput: __1(function(c) {
                const c_length = c.length;
                const b = c.split(/(?:\r\n?|\n)/g);
                this._input = c + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - c_length);
                this.offset -= c_length;
                const m = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (b.length - 1) {
                    this.yylineno -= b.length - 1;
                }
                const range = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: b ? (b.length === m.length ? this.yylloc.first_column : 0) + m[m.length - b.length].length - b[0].length : this.yylloc.first_column - c_length
                };
                if (this.options.ranges) {
                    this.yylloc.range = [
                        range[0],
                        range[0] + this.yyleng - c_length
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
            less: __1(function(c) {
                this.unput(this.match.slice(c));
            }, "less"),
            pastInput: __1(function() {
                const c = this.matched.substr(0, this.matched.length - this.match.length);
                return (c.length > 20 ? "..." : "") + c.substr(-20).replace(/\n/g, "");
            }, "pastInput"),
            upcomingInput: __1(function() {
                let match = this.match;
                if (match.length < 20) {
                    match += this._input.substr(0, 20 - match.length);
                }
                return (match.substr(0, 20) + (match.length > 20 ? "..." : "")).replace(/\n/g, "");
            }, "upcomingInput"),
            showPosition: __1(function() {
                const c = this.pastInput();
                const g = new Array(c.length + 1).join("-");
                return `${c + this.upcomingInput() + `
` + g}^`;
            }, "showPosition"),
            test_match: __1(function(c, g) {
                let b;
                let m;
                let I;
                if (this.options.backtrack_lexer) {
                    I = {
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
                        I.yylloc.range = this.yylloc.range.slice(0);
                    }
                }
                m = c[0].match(/(?:\r\n?|\n).*/g);
                if (m) {
                    this.yylineno += m.length;
                }
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: m ? m[m.length - 1].length - m[m.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + c[0].length
                };
                this.yytext += c[0];
                this.match += c[0];
                this.matches = c;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) {
                    this.yylloc.range = [
                        this.offset,
                        this.offset += this.yyleng
                    ];
                }
                this._more = false;
                this._backtrack = false;
                this._input = this._input.slice(c[0].length);
                this.matched += c[0];
                b = this.performAction.call(this, this.yy, this, g, this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) {
                    this.done = false;
                }
                if (b) {
                    return b;
                }
                if (this._backtrack) {
                    for(const o in I){
                        this[o] = I[o];
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
                let c;
                let g;
                let b;
                let m;
                if (!this._more) {
                    this.yytext = "";
                    this.match = "";
                }
                for(var I = this._currentRules(), o = 0; o < I.length; o++){
                    b = this._input.match(this.rules[I[o]]);
                    if (b && (!g || b[0].length > g[0].length)) {
                        g = b;
                        m = o;
                        if (this.options.backtrack_lexer) {
                            c = this.test_match(b, I[o]);
                            if (c !== false) {
                                return c;
                            }
                            if (this._backtrack) {
                                g = false;
                                continue;
                            } else {
                                return false;
                            }
                        } else if (!this.options.flex) {
                            break;
                        }
                    }
                }
                if (g) {
                    c = this.test_match(g, I[m]);
                    if (c !== false) {
                        return c;
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
                const g = this.next();
                return g || this.lex();
            }, "lex"),
            begin: __1(function(g) {
                this.conditionStack.push(g);
            }, "begin"),
            popState: __1(function() {
                const g = this.conditionStack.length - 1;
                if (g > 0) {
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
            topState: __1(function(g) {
                g = this.conditionStack.length - 1 - Math.abs(g || 0);
                if (g >= 0) {
                    return this.conditionStack[g];
                }
                return "INITIAL";
            }, "topState"),
            pushState: __1(function(g) {
                this.begin(g);
            }, "pushState"),
            stateStackSize: __1(function() {
                return this.conditionStack.length;
            }, "stateStackSize"),
            options: {
                "case-insensitive": true
            },
            performAction: __1(function(g, b, m, I) {
                switch(m){
                    case 0:
                        this.begin("open_directive");
                        return "open_directive";
                    case 1:
                        this.begin("acc_title");
                        return 31;
                    case 2:
                        this.popState();
                        return "acc_title_value";
                    case 3:
                        this.begin("acc_descr");
                        return 33;
                    case 4:
                        this.popState();
                        return "acc_descr_value";
                    case 5:
                        this.begin("acc_descr_multiline");
                        break;
                    case 6:
                        this.popState();
                        break;
                    case 7:
                        return "acc_descr_multiline_value";
                    case 8:
                        break;
                    case 9:
                        break;
                    case 10:
                        break;
                    case 11:
                        return 10;
                    case 12:
                        break;
                    case 13:
                        break;
                    case 14:
                        this.begin("href");
                        break;
                    case 15:
                        this.popState();
                        break;
                    case 16:
                        return 43;
                    case 17:
                        this.begin("callbackname");
                        break;
                    case 18:
                        this.popState();
                        break;
                    case 19:
                        this.popState();
                        this.begin("callbackargs");
                        break;
                    case 20:
                        return 41;
                    case 21:
                        this.popState();
                        break;
                    case 22:
                        return 42;
                    case 23:
                        this.begin("click");
                        break;
                    case 24:
                        this.popState();
                        break;
                    case 25:
                        return 40;
                    case 26:
                        return 4;
                    case 27:
                        return 22;
                    case 28:
                        return 23;
                    case 29:
                        return 24;
                    case 30:
                        return 25;
                    case 31:
                        return 26;
                    case 32:
                        return 28;
                    case 33:
                        return 27;
                    case 34:
                        return 29;
                    case 35:
                        return 12;
                    case 36:
                        return 13;
                    case 37:
                        return 14;
                    case 38:
                        return 15;
                    case 39:
                        return 16;
                    case 40:
                        return 17;
                    case 41:
                        return 18;
                    case 42:
                        return 20;
                    case 43:
                        return 21;
                    case 44:
                        return "date";
                    case 45:
                        return 30;
                    case 46:
                        return "accDescription";
                    case 47:
                        return 36;
                    case 48:
                        return 38;
                    case 49:
                        return 39;
                    case 50:
                        return ":";
                    case 51:
                        return 6;
                    case 52:
                        return "INVALID";
                }
            }, "anonymous"),
            rules: [
                /^(?:%%\{)/i,
                /^(?:accTitle\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*\{\s*)/i,
                /^(?:[\}])/i,
                /^(?:[^\}]*)/i,
                /^(?:%%(?!\{)*[^\n]*)/i,
                /^(?:[^\}]%%*[^\n]*)/i,
                /^(?:%%*[^\n]*[\n]*)/i,
                /^(?:[\n]+)/i,
                /^(?:\s+)/i,
                /^(?:%[^\n]*)/i,
                /^(?:href[\s]+["])/i,
                /^(?:["])/i,
                /^(?:[^"]*)/i,
                /^(?:call[\s]+)/i,
                /^(?:\([\s]*\))/i,
                /^(?:\()/i,
                /^(?:[^(]*)/i,
                /^(?:\))/i,
                /^(?:[^)]*)/i,
                /^(?:click[\s]+)/i,
                /^(?:[\s\n])/i,
                /^(?:[^\s\n]*)/i,
                /^(?:gantt\b)/i,
                /^(?:dateFormat\s[^#\n;]+)/i,
                /^(?:inclusiveEndDates\b)/i,
                /^(?:topAxis\b)/i,
                /^(?:axisFormat\s[^#\n;]+)/i,
                /^(?:tickInterval\s[^#\n;]+)/i,
                /^(?:includes\s[^#\n;]+)/i,
                /^(?:excludes\s[^#\n;]+)/i,
                /^(?:todayMarker\s[^\n;]+)/i,
                /^(?:weekday\s+monday\b)/i,
                /^(?:weekday\s+tuesday\b)/i,
                /^(?:weekday\s+wednesday\b)/i,
                /^(?:weekday\s+thursday\b)/i,
                /^(?:weekday\s+friday\b)/i,
                /^(?:weekday\s+saturday\b)/i,
                /^(?:weekday\s+sunday\b)/i,
                /^(?:weekend\s+friday\b)/i,
                /^(?:weekend\s+saturday\b)/i,
                /^(?:\d\d\d\d-\d\d-\d\d\b)/i,
                /^(?:title\s[^\n]+)/i,
                /^(?:accDescription\s[^#\n;]+)/i,
                /^(?:section\s[^\n]+)/i,
                /^(?:[^:\n]+)/i,
                /^(?::[^#\n;]+)/i,
                /^(?::)/i,
                /^(?:$)/i,
                /^(?:.)/i
            ],
            conditions: {
                acc_descr_multiline: {
                    rules: [
                        6,
                        7
                    ],
                    inclusive: false
                },
                acc_descr: {
                    rules: [
                        4
                    ],
                    inclusive: false
                },
                acc_title: {
                    rules: [
                        2
                    ],
                    inclusive: false
                },
                callbackargs: {
                    rules: [
                        21,
                        22
                    ],
                    inclusive: false
                },
                callbackname: {
                    rules: [
                        18,
                        19,
                        20
                    ],
                    inclusive: false
                },
                href: {
                    rules: [
                        15,
                        16
                    ],
                    inclusive: false
                },
                click: {
                    rules: [
                        24,
                        25
                    ],
                    inclusive: false
                },
                INITIAL: {
                    rules: [
                        0,
                        1,
                        3,
                        5,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        17,
                        23,
                        26,
                        27,
                        28,
                        29,
                        30,
                        31,
                        32,
                        33,
                        34,
                        35,
                        36,
                        37,
                        38,
                        39,
                        40,
                        41,
                        42,
                        43,
                        44,
                        45,
                        46,
                        47,
                        48,
                        49,
                        50,
                        51,
                        52
                    ],
                    inclusive: true
                }
            }
        };
        return D;
    })();
    x.lexer = C;
    function M() {
        this.yy = {};
    }
    __1(M, "Parser");
    M.prototype = x;
    x.Parser = M;
    return new M;
})();
we.parser = we;
const parser = we;
bn.extend(Oi);
bn.extend(Vi);
bn.extend(Zi);
const rn = {
    friday: 5,
    saturday: 6
};
let lt = "";
let Fe = "";
let Ye;
let Ue = "";
let Lt = [];
let At = [];
let Ee = new Map;
let Ie = [];
let se = [];
let Wt = "";
let Le = "";
const Fn = [
    "active",
    "done",
    "crit",
    "milestone",
    "vert"
];
let Ae = [];
let _t = "";
let qt = false;
let We = false;
let $e = "sunday";
let ae = "saturday";
let De = 0;
const clear = __1(()=>{
    Ie = [];
    se = [];
    Wt = "";
    Ae = [];
    te = 0;
    Ce = undefined;
    ee = undefined;
    et = [];
    lt = "";
    Fe = "";
    Le = "";
    Ye = undefined;
    Ue = "";
    Lt = [];
    At = [];
    qt = false;
    We = false;
    De = 0;
    Ee = new Map;
    _t = "";
    q_1();
    $e = "sunday";
    ae = "saturday";
}, "clear");
const setDiagramId = __1((t)=>{
    _t = t;
}, "setDiagramId");
const setAxisFormat = __1((t)=>{
    Fe = t;
}, "setAxisFormat");
const getAxisFormat = __1(()=>Fe, "getAxisFormat");
const setTickInterval = __1((t)=>{
    Ye = t;
}, "setTickInterval");
const getTickInterval = __1(()=>Ye, "getTickInterval");
const setTodayMarker = __1((t)=>{
    Ue = t;
}, "setTodayMarker");
const getTodayMarker = __1(()=>Ue, "getTodayMarker");
const setDateFormat = __1((t)=>{
    lt = t;
}, "setDateFormat");
const enableInclusiveEndDates = __1(()=>{
    qt = true;
}, "enableInclusiveEndDates");
const endDatesAreInclusive = __1(()=>qt, "endDatesAreInclusive");
const enableTopAxis = __1(()=>{
    We = true;
}, "enableTopAxis");
const topAxisEnabled = __1(()=>We, "topAxisEnabled");
const setDisplayMode = __1((t)=>{
    Le = t;
}, "setDisplayMode");
const getDisplayMode = __1(()=>Le, "getDisplayMode");
const getDateFormat = __1(()=>lt, "getDateFormat");
const Yn = __1((t, e)=>{
    const n = e.toLowerCase().split(/[\s,]+/).filter((r)=>r !== "");
    return [
        ...new Set([
            ...t,
            ...n
        ])
    ];
}, "mergeTokens");
const setIncludes = __1((t)=>{
    Lt = Yn(Lt, t);
}, "setIncludes");
const getIncludes = __1(()=>Lt, "getIncludes");
const setExcludes = __1((t)=>{
    At = Yn(At, t);
}, "setExcludes");
const getExcludes = __1(()=>At, "getExcludes");
const getLinks = __1(()=>Ee, "getLinks");
const addSection = __1((t)=>{
    Wt = t;
    Ie.push(t);
}, "addSection");
const getSections = __1(()=>Ie, "getSections");
const getTasks = __1(()=>{
    let t = sn();
    const e = 10;
    let n = 0;
    while(!t && n < e){
        t = sn();
        n++;
    }
    se = et;
    return se;
}, "getTasks");
const isInvalidDate = __1((t, e, n, r)=>{
    const i = t.format(e.trim());
    const s = t.format("YYYY-MM-DD");
    if (r.includes(i) || r.includes(s)) {
        return false;
    }
    if (n.includes("weekends") && (t.isoWeekday() === rn[ae] || t.isoWeekday() === rn[ae] + 1) || n.includes(t.format("dddd").toLowerCase())) {
        return true;
    }
    return n.includes(i) || n.includes(s);
}, "isInvalidDate");
const setWeekday = __1((t)=>{
    $e = t;
}, "setWeekday");
const getWeekday = __1(()=>$e, "getWeekday");
const setWeekend = __1((t)=>{
    ae = t;
}, "setWeekend");
const En = __1((t, e, n, r)=>{
    if (!n.length || t.manualEndTime) {
        return;
    }
    let i;
    if (t.startTime instanceof Date) {
        i = bn(t.startTime);
    } else {
        i = bn(t.startTime, e, true);
    }
    i = i.add(1, "d");
    let s;
    if (t.endTime instanceof Date) {
        s = bn(t.endTime);
    } else {
        s = bn(t.endTime, e, true);
    }
    const [a, y] = Ms(i, s, e, n, r);
    t.endTime = a.toDate();
    t.renderEndTime = y;
}, "checkTaskDates");
var Ms = __1((t, e, n, r, i)=>{
    let s = false;
    let a = null;
    const y = e.add(10000, "d");
    while(t <= e){
        if (!s) {
            a = e.toDate();
        }
        s = isInvalidDate(t, n, r, i);
        if (s && (e = e.add(1, "d"), e > y)) {
            throw new Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");
        }
        t = t.add(1, "d");
    }
    return [
        e,
        a
    ];
}, "fixTaskDates");
const Me = __1((t, e, n)=>{
    n = n.trim();
    if (__1((y)=>{
        const Y = y.trim();
        return Y === "x" || Y === "X";
    }, "isTimestampFormat")(e) && /^\d+$/.test(n)) {
        return new Date(Number(n));
    }
    const s = /^after\s+(?<ids>[\d\w- ]+)/.exec(n);
    if (s !== null) {
        let y = null;
        for (const S of s.groups.ids.split(" ")){
            let w = findTaskById(S);
            if (w !== undefined && (!y || w.endTime > y.endTime)) {
                y = w;
            }
        }
        if (y) {
            return y.endTime;
        }
        const Y = new Date;
        Y.setHours(0, 0, 0, 0);
        return Y;
    }
    let a = bn(n, e.trim(), true);
    if (a.isValid()) {
        return a.toDate();
    }
    {
        l_1.debug(`Invalid date:${n}`);
        l_1.debug(`With date format:${e.trim()}`);
        const y = new Date(n);
        if (y === undefined || isNaN(y.getTime()) || y.getFullYear() < -10000 || y.getFullYear() > 10000) {
            throw new Error(`Invalid date:${n}`);
        }
        return y;
    }
}, "getStartDate");
const parseDuration = __1((t)=>{
    const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());
    if (e !== null) {
        return [
            Number.parseFloat(e[1]),
            e[2]
        ];
    }
    return [
        NaN,
        "ms"
    ];
}, "parseDuration");
const Ln = __1((t, e, n, r = false)=>{
    n = n.trim();
    const s = /^until\s+(?<ids>[\d\w- ]+)/.exec(n);
    if (s !== null) {
        let w = null;
        for (const _ of s.groups.ids.split(" ")){
            let F = findTaskById(_);
            if (F !== undefined && (!w || F.startTime < w.startTime)) {
                w = F;
            }
        }
        if (w) {
            return w.startTime;
        }
        const P = new Date;
        P.setHours(0, 0, 0, 0);
        return P;
    }
    let a = bn(n, e.trim(), true);
    if (a.isValid()) {
        if (r) {
            a = a.add(1, "d");
        }
        return a.toDate();
    }
    let y = bn(t);
    const [Y, S] = parseDuration(n);
    if (!Number.isNaN(Y)) {
        const w = y.add(Y, S);
        if (w.isValid()) {
            y = w;
        }
    }
    return y.toDate();
}, "getEndDate");
var te = 0;
const Ut = __1((t)=>{
    if (t === undefined) {
        te = te + 1;
        return `task${te}`;
    }
    return t;
}, "parseId");
const Cs = __1((t, e)=>{
    let n;
    if (e.substr(0, 1) === ":") {
        n = e.substr(1, e.length);
    } else {
        n = e;
    }
    const r = n.split(",");
    const i = {};
    Oe(r, i, Fn);
    for(let a = 0; a < r.length; a++){
        r[a] = r[a].trim();
    }
    let s = "";
    switch(r.length){
        case 1:
            i.id = Ut();
            i.startTime = t.endTime;
            s = r[0];
            break;
        case 2:
            i.id = Ut();
            i.startTime = Me(undefined, lt, r[0]);
            s = r[1];
            break;
        case 3:
            i.id = Ut(r[0]);
            i.startTime = Me(undefined, lt, r[1]);
            s = r[2];
            break;
    }
    if (s) {
        i.endTime = Ln(i.startTime, lt, s, qt);
        i.manualEndTime = bn(s, "YYYY-MM-DD", true).isValid();
        En(i, lt, At, Lt);
    }
    return i;
}, "compileData");
const Ss = __1((id, e)=>{
    let n;
    if (e.substr(0, 1) === ":") {
        n = e.substr(1, e.length);
    } else {
        n = e;
    }
    const r = n.split(",");
    const i = {};
    Oe(r, i, Fn);
    for(let s = 0; s < r.length; s++){
        r[s] = r[s].trim();
    }
    switch(r.length){
        case 1:
            i.id = Ut();
            i.startTime = {
                type: "prevTaskEnd",
                id
            };
            i.endTime = {
                data: r[0]
            };
            break;
        case 2:
            i.id = Ut();
            i.startTime = {
                type: "getStartDate",
                startData: r[0]
            };
            i.endTime = {
                data: r[1]
            };
            break;
        case 3:
            i.id = Ut(r[0]);
            i.startTime = {
                type: "getStartDate",
                startData: r[1]
            };
            i.endTime = {
                data: r[2]
            };
            break;
    }
    return i;
}, "parseData");
var Ce;
var ee;
var et = [];
const An = {};
const addTask = __1((task, e)=>{
    const n = {
        section: Wt,
        type: Wt,
        processed: false,
        manualEndTime: false,
        renderEndTime: null,
        raw: {
            data: e
        },
        task,
        classes: []
    };
    const r = Ss(ee, e);
    n.raw.startTime = r.startTime;
    n.raw.endTime = r.endTime;
    n.id = r.id;
    n.prevTaskId = ee;
    n.active = r.active;
    n.done = r.done;
    n.crit = r.crit;
    n.milestone = r.milestone;
    n.vert = r.vert;
    if (n.vert) {
        n.order = -1;
    } else {
        n.order = De;
        De++;
    }
    const i = et.push(n);
    ee = n.id;
    An[n.id] = i - 1;
}, "addTask");
var findTaskById = __1((t)=>{
    const e = An[t];
    return et[e];
}, "findTaskById");
const addTaskOrg = __1((t, e)=>{
    const n = {
        section: Wt,
        type: Wt,
        description: t,
        task: t,
        classes: []
    };
    const r = Cs(Ce, e);
    n.startTime = r.startTime;
    n.endTime = r.endTime;
    n.id = r.id;
    n.active = r.active;
    n.done = r.done;
    n.crit = r.crit;
    n.milestone = r.milestone;
    n.vert = r.vert;
    Ce = n;
    se.push(n);
}, "addTaskOrg");
var sn = __1(()=>{
    const t = __1((n)=>{
        const r = et[n];
        let i = "";
        switch(et[n].raw.startTime.type){
            case "prevTaskEnd":
                {
                    const s = findTaskById(r.prevTaskId);
                    r.startTime = s.endTime;
                    break;
                }
            case "getStartDate":
                i = Me(undefined, lt, et[n].raw.startTime.startData);
                if (i) {
                    et[n].startTime = i;
                }
                break;
        }
        if (et[n].startTime) {
            et[n].endTime = Ln(et[n].startTime, lt, et[n].raw.endTime.data, qt);
            if (et[n].endTime) {
                et[n].processed = true;
                et[n].manualEndTime = bn(et[n].raw.endTime.data, "YYYY-MM-DD", true).isValid();
                En(et[n], lt, At, Lt);
            }
        }
        return et[n].processed;
    }, "compileTask");
    let e = true;
    for (const [n, r] of et.entries()){
        t(n);
        e = e && r.processed;
    }
    return e;
}, "compileTasks");
const setLink = __1((t, e)=>{
    let n = e;
    if (c_1().securityLevel !== "loose") {
        n = j.sanitizeUrl(e);
    }
    t.split(",").forEach((r)=>{
        if (findTaskById(r) !== undefined) {
            $n(r, ()=>{
                window.open(n, "_self");
            });
            Ee.set(r, n);
        }
    });
    Wn(t, "clickable");
}, "setLink");
var Wn = __1((t, e)=>{
    t.split(",").forEach((n)=>{
        let r = findTaskById(n);
        if (r !== undefined) {
            r.classes.push(e);
        }
    });
}, "setClass");
const Us = __1((t, e, n)=>{
    if (c_1().securityLevel !== "loose" || e === undefined) {
        return;
    }
    let r = [];
    if (typeof n === "string") {
        r = n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        for(let s = 0; s < r.length; s++){
            let a = r[s].trim();
            if (a.startsWith('"') && a.endsWith('"')) {
                a = a.substr(1, a.length - 2);
            }
            r[s] = a;
        }
    }
    if (r.length === 0) {
        r.push(t);
    }
    if (findTaskById(t) !== undefined) {
        $n(t, ()=>{
            y.runFunc(e, ...r);
        });
    }
}, "setClickFun");
var $n = __1((t, e)=>{
    Ae.push(()=>{
        const n = _t ? `${_t}-${t}` : t;
        const r = document.querySelector(`[id="${n}"]`);
        if (r !== null) {
            r.addEventListener("click", ()=>{
                e();
            });
        }
    }, ()=>{
        const n = _t ? `${_t}-${t}` : t;
        const r = document.querySelector(`[id="${n}-text"]`);
        if (r !== null) {
            r.addEventListener("click", ()=>{
                e();
            });
        }
    });
}, "pushFun");
const setClickEvent = __1((t, e, n)=>{
    t.split(",").forEach((r)=>{
        Us(r, e, n);
    });
    Wn(t, "clickable");
}, "setClickEvent");
const bindFunctions = __1((t)=>{
    Ae.forEach((e)=>{
        e(t);
    });
}, "bindFunctions");
const db = {
    getConfig: __1(()=>c_1().gantt, "getConfig"),
    clear,
    setDateFormat,
    getDateFormat,
    enableInclusiveEndDates,
    endDatesAreInclusive,
    enableTopAxis,
    topAxisEnabled,
    setAxisFormat,
    getAxisFormat,
    setTickInterval,
    getTickInterval,
    setTodayMarker,
    getTodayMarker,
    setAccTitle,
    getAccTitle,
    setDiagramTitle,
    getDiagramTitle,
    setDiagramId,
    setDisplayMode,
    getDisplayMode,
    setAccDescription,
    getAccDescription,
    addSection,
    getSections,
    getTasks,
    addTask,
    findTaskById,
    addTaskOrg,
    setIncludes,
    getIncludes,
    setExcludes,
    getExcludes,
    setClickEvent,
    setLink,
    getLinks,
    bindFunctions,
    parseDuration,
    isInvalidDate,
    setWeekday,
    getWeekday,
    setWeekend
};
function Oe(t, e, n) {
    let r = true;
    while(r){
        r = false;
        n.forEach((i)=>{
            const s = `^\\s*${i}\\s*\$`;
            const a = new RegExp(s);
            if (t[0].match(a)) {
                e[i] = true;
                t.shift(1);
                r = true;
            }
        });
    }
}
__1(Oe, "getTaskTags");
bn.extend(ji);
const setConf = __1(()=>{
    l_1.debug("Something is calling, setConf, remove the call");
}, "setConf");
const an = {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
};
const Ws = __1((t, e)=>{
    let n = [
        ...t
    ].map(()=>-Infinity);
    let r = [
        ...t
    ].sort((s, a)=>s.startTime - a.startTime || s.order - a.order);
    let i = 0;
    for (const s of r){
        for(let a = 0; a < n.length; a++){
            if (s.startTime >= n[a]) {
                n[a] = s.endTime;
                s.order = a + e;
                if (a > i) {
                    i = a;
                }
                break;
            }
        }
    }
    return i;
}, "getMaxIntersections");
let dt;
const Te = 10000;
const draw = __1((t, e, n, r)=>{
    const gantt = c_1().gantt;
    r.db.setDiagramId(e);
    const securityLevel = c_1().securityLevel;
    let a;
    if (securityLevel === "sandbox") {
        a = d(`#i${e}`);
    }
    const y = securityLevel === "sandbox" ? d(a.nodes()[0].contentDocument.body) : d("body");
    const Y = securityLevel === "sandbox" ? a.nodes()[0].contentDocument : document;
    const S = Y.getElementById(e);
    dt = S.parentElement.offsetWidth;
    if (dt === undefined) {
        dt = 1200;
    }
    if (gantt.useWidth !== undefined) {
        dt = gantt.useWidth;
    }
    const w = r.db.getTasks();
    const P = w.filter((x)=>!x.vert);
    let _ = [];
    for (const x of P){
        _.push(x.type);
    }
    _ = L(_);
    const F = {};
    let X = 2 * gantt.topPadding;
    if (r.db.getDisplayMode() === "compact" || gantt.displayMode === "compact") {
        const x = {};
        for (const M of P){
            if (x[M.section] === undefined) {
                x[M.section] = [
                    M
                ];
            } else {
                x[M.section].push(M);
            }
        }
        let C = 0;
        for (const M of Object.keys(x)){
            const D = Ws(x[M], C) + 1;
            C += D;
            X += D * (gantt.barHeight + gantt.barGap);
            F[M] = D;
        }
    } else {
        X += P.length * (gantt.barHeight + gantt.barGap);
        for (const x of _){
            F[x] = P.filter((C)=>C.type === x).length;
        }
    }
    S.setAttribute("viewBox", `0 0 ${dt} ${X}`);
    const Z = y.select(`[id="${e}"]`);
    const v = Li().domain([
        rr(w, (x)=>x.startTime),
        nr(w, (x)=>x.endTime)
    ]).rangeRound([
        0,
        dt - gantt.leftPadding - gantt.rightPadding
    ]);
    function U({ startTime }, C) {
        const C_startTime = C.startTime;
        let c = 0;
        if (startTime > C_startTime) {
            c = 1;
        } else if (startTime < C_startTime) {
            c = -1;
        }
        return c;
    }
    __1(U, "taskCompare");
    w.sort(U);
    R(w, dt, X);
    e_1(Z, X, dt, gantt.useMaxWidth);
    Z.append("text").text(r.db.getDiagramTitle()).attr("x", dt / 2).attr("y", gantt.titleTopMargin).attr("class", "titleText");
    function R(x, C, M) {
        const gantt_barHeight = gantt.barHeight;
        const c = gantt_barHeight + gantt.barGap;
        const { topPadding, leftPadding } = gantt;
        const m = l_2().domain([
            0,
            _.length
        ]).range([
            "#00B9FA",
            "#F95002"
        ]).interpolate(pr);
        z(c, topPadding, leftPadding, C, M, x, r.db.getExcludes(), r.db.getIncludes());
        T(leftPadding, topPadding, C, M);
        E(x, c, topPadding, leftPadding, gantt_barHeight, m, C);
        k(c, topPadding);
        p(leftPadding, topPadding, C, M);
    }
    __1(R, "makeGantt");
    function E(x, C, M, D, c, g, b) {
        x.sort((l, $)=>{
            if (l.vert === $.vert) {
                return 0;
            }
            if (l.vert) {
                return 1;
            }
            return -1;
        });
        const m = x.filter((l)=>!l.vert);
        const o = [
            ...new Set(m.map((l)=>l.order))
        ].map((l)=>m.find(($)=>$.order === l));
        Z.append("g").selectAll("rect").data(o).enter().append("rect").attr("x", 0).attr("y", (l, $)=>{
            $ = l.order;
            return $ * C + M - 2;
        }).attr("width", ()=>b - gantt.rightPadding / 2).attr("height", C).attr("class", (l)=>{
            for (const [$, O] of _.entries()){
                if (l.type === O) {
                    return `section section${$ % gantt.numberSectionStyles}`;
                }
            }
            return "section section0";
        }).enter();
        const W = Z.append("g").selectAll("rect").data(x).enter();
        const u = r.db.getLinks();
        W.append("rect").attr("id", (l)=>`${e}-${l.id}`).attr("rx", 3).attr("ry", 3).attr("x", (l)=>{
            if (l.milestone) {
                return v(l.startTime) + D + 0.5 * (v(l.endTime) - v(l.startTime)) - 0.5 * c;
            }
            return v(l.startTime) + D;
        }).attr("y", (l, $)=>{
            $ = l.order;
            if (l.vert) {
                return gantt.gridLineStartPadding;
            }
            return $ * C + M;
        }).attr("width", (l)=>{
            if (l.milestone) {
                return c;
            }
            if (l.vert) {
                return 0.08 * c;
            }
            return v(l.renderEndTime || l.endTime) - v(l.startTime);
        }).attr("height", (l)=>{
            if (l.vert) {
                return m.length * (gantt.barHeight + gantt.barGap) + gantt.barHeight * 2;
            }
            return c;
        }).attr("transform-origin", (l, $)=>{
            $ = l.order;
            return `${(v(l.startTime) + D + 0.5 * (v(l.endTime) - v(l.startTime))).toString()}px ${($ * C + M + 0.5 * c).toString()}px`;
        }).attr("class", (l)=>{
            const $ = "task";
            let O = "";
            if (l.classes.length > 0) {
                O = l.classes.join(" ");
            }
            let j = 0;
            for (const [J, h] of _.entries()){
                if (l.type === h) {
                    j = J % gantt.numberSectionStyles;
                }
            }
            let H = "";
            l.active ? l.crit ? H += " activeCrit" : H = " active" : l.done ? l.crit ? H = " doneCrit" : H = " done" : l.crit && (H += " crit");
            if (H.length === 0) {
                H = " task";
            }
            if (l.milestone) {
                H = ` milestone ${H}`;
            }
            if (l.vert) {
                H = ` vert ${H}`;
            }
            H += j;
            H += ` ${O}`;
            return $ + H;
        });
        W.append("text").attr("id", (l)=>`${e}-${l.id}-text`).text((l)=>l.task).attr("font-size", gantt.fontSize).attr("x", function(l) {
            let $ = v(l.startTime);
            let O = v(l.renderEndTime || l.endTime);
            if (l.milestone) {
                $ += 0.5 * (v(l.endTime) - v(l.startTime)) - 0.5 * c;
                O = $ + c;
            }
            if (l.vert) {
                return v(l.startTime) + D;
            }
            const width = this.getBBox().width;
            if (width > O - $) {
                if (O + width + 1.5 * gantt.leftPadding > b) {
                    return $ + D - 5;
                }
                return O + D + 5;
            }
            return (O - $) / 2 + $ + D;
        }).attr("y", (l, $)=>{
            if (l.vert) {
                return gantt.gridLineStartPadding + m.length * (gantt.barHeight + gantt.barGap) + 60;
            }
            $ = l.order;
            return $ * C + gantt.barHeight / 2 + (gantt.fontSize / 2 - 2) + M;
        }).attr("text-height", c).attr("class", function(l) {
            const $ = v(l.startTime);
            let O = v(l.endTime);
            if (l.milestone) {
                O = $ + c;
            }
            const width = this.getBBox().width;
            let H = "";
            if (l.classes.length > 0) {
                H = l.classes.join(" ");
            }
            let J = 0;
            for (const [N, V] of _.entries()){
                if (l.type === V) {
                    J = N % gantt.numberSectionStyles;
                }
            }
            let h = "";
            l.active && (l.crit ? h = `activeCritText${J}` : h = `activeText${J}`);
            l.done ? l.crit ? h = `${h} doneCritText${J}` : h = `${h} doneText${J}` : l.crit && (h = `${h} critText${J}`);
            if (l.milestone) {
                h += " milestoneText";
            }
            if (l.vert) {
                h += " vertText";
            }
            if (width > O - $) {
                if (O + width + 1.5 * gantt.leftPadding > b) {
                    return `${H} taskTextOutsideLeft taskTextOutside${J} ${h}`;
                }
                return `${H} taskTextOutsideRight taskTextOutside${J} ${h} width-${width}`;
            }
            return `${H} taskText taskText${J} ${h} width-${width}`;
        });
        if (c_1().securityLevel === "sandbox") {
            let l;
            l = d(`#i${e}`);
            const $ = l.nodes()[0].contentDocument;
            W.filter((O)=>u.has(O.id)).each((O)=>{
                const j = $.querySelector(`#${CSS.escape(`${e}-${O.id}`)}`);
                const H = $.querySelector(`#${CSS.escape(`${e}-${O.id}-text`)}`);
                const j_parentNode = j.parentNode;
                const h = $.createElement("a");
                h.setAttribute("xlink:href", u.get(O.id));
                h.setAttribute("target", "_top");
                j_parentNode.appendChild(h);
                h.appendChild(j);
                h.appendChild(H);
            });
        }
    }
    __1(E, "drawRects");
    function z(x, C, M, D, c, g, b, m) {
        if (b.length === 0 && m.length === 0) {
            return;
        }
        let I;
        let o;
        for (const { startTime, endTime } of g){
            if (I === undefined || startTime < I) {
                I = startTime;
            }
            if (o === undefined || endTime > o) {
                o = endTime;
            }
        }
        if (!I || !o) {
            return;
        }
        if (bn(o).diff(bn(I), "year") > 5) {
            l_1.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");
            return;
        }
        const W = r.db.getDateFormat();
        const u = [];
        let K = null;
        let l = bn(I);
        while(l.valueOf() <= o){
            r.db.isInvalidDate(l, W, b, m) ? K ? K.end = l : K = {
                start: l,
                end: l
            } : K && (u.push(K), K = null);
            l = l.add(1, "d");
        }
        Z.append("g").selectAll("rect").data(u).enter().append("rect").attr("id", (O)=>`${e}-exclude-${O.start.format("YYYY-MM-DD")}`).attr("x", (O)=>v(O.start.startOf("day")) + M).attr("y", gantt.gridLineStartPadding).attr("width", (O)=>v(O.end.endOf("day")) - v(O.start.startOf("day"))).attr("height", c - C - gantt.gridLineStartPadding).attr("transform-origin", (O, j)=>`${(v(O.start) + M + 0.5 * (v(O.end) - v(O.start))).toString()}px ${(j * x + 0.5 * c).toString()}px`).attr("class", "exclude-range");
    }
    __1(z, "drawExcludeDays");
    function G(x, C, M, D) {
        if (M <= 0 || x > C) {
            return Infinity;
        }
        const c = C - x;
        const g = bn.duration({
            [D ?? "day"]: M
        }).asMilliseconds();
        if (g <= 0) {
            return Infinity;
        }
        return Math.ceil(c / g);
    }
    __1(G, "getEstimatedTickCount");
    function T(x, C, M, D) {
        const c = r.db.getDateFormat();
        const g = r.db.getAxisFormat();
        let b;
        if (g) {
            b = g;
        } else if (c === "D") {
            b = "%d";
        } else {
            b = gantt.axisFormat ?? "%Y-%m-%d";
        }
        let m = fr(v).tickSize(-D + C + gantt.gridLineStartPadding).tickFormat(ie(b));
        const o = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(r.db.getTickInterval() || gantt.tickInterval);
        if (o !== null) {
            const W = parseInt(o[1], 10);
            if (isNaN(W) || W <= 0) {
                l_1.warn(`Invalid tick interval value: "${o[1]}". Skipping custom tick interval.`);
            } else {
                const u = o[2];
                const K = r.db.getWeekday() || gantt.weekday;
                const l = v.domain();
                const $ = l[0];
                const O = l[1];
                const j = G($, O, W, u);
                if (j > Te) {
                    l_1.warn(`The tick interval "${W}${u}" would generate ${j} ticks, which exceeds the maximum allowed (${Te}). This may indicate an invalid date or time range. Skipping custom tick interval.`);
                } else {
                    switch(u){
                        case "millisecond":
                            m.ticks(Et.every(W));
                            break;
                        case "second":
                            m.ticks(vt.every(W));
                            break;
                        case "minute":
                            m.ticks(Nt.every(W));
                            break;
                        case "hour":
                            m.ticks(Pt.every(W));
                            break;
                        case "day":
                            m.ticks(xt.every(W));
                            break;
                        case "week":
                            m.ticks(an[K].every(W));
                            break;
                        case "month":
                            m.ticks(Rt.every(W));
                            break;
                    }
                }
            }
        }
        Z.append("g").attr("class", "grid").attr("transform", `translate(${x}, ${D - 50})`).call(m).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em");
        if (r.db.topAxisEnabled() || gantt.topAxis) {
            let W = lr(v).tickSize(-D + C + gantt.gridLineStartPadding).tickFormat(ie(b));
            if (o !== null) {
                const u = parseInt(o[1], 10);
                if (isNaN(u) || u <= 0) {
                    l_1.warn(`Invalid tick interval value: "${o[1]}". Skipping custom tick interval.`);
                } else {
                    const K = o[2];
                    const l = r.db.getWeekday() || gantt.weekday;
                    const $ = v.domain();
                    const O = $[0];
                    const j = $[1];
                    if (G(O, j, u, K) <= Te) {
                        switch(K){
                            case "millisecond":
                                W.ticks(Et.every(u));
                                break;
                            case "second":
                                W.ticks(vt.every(u));
                                break;
                            case "minute":
                                W.ticks(Nt.every(u));
                                break;
                            case "hour":
                                W.ticks(Pt.every(u));
                                break;
                            case "day":
                                W.ticks(xt.every(u));
                                break;
                            case "week":
                                W.ticks(an[l].every(u));
                                break;
                            case "month":
                                W.ticks(Rt.every(u));
                                break;
                        }
                    }
                }
            }
            Z.append("g").attr("class", "grid").attr("transform", `translate(${x}, ${C})`).call(W).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
        }
    }
    __1(T, "makeGrid");
    function k(x, C) {
        let M = 0;
        const D = Object.keys(F).map((c)=>[
                c,
                F[c]
            ]);
        Z.append("g").selectAll("text").data(D).enter().append((c)=>{
            const g = c[0].split(k_1.lineBreakRegex);
            const b = -(g.length - 1) / 2;
            const m = Y.createElementNS("http://www.w3.org/2000/svg", "text");
            m.setAttribute("dy", `${b}em`);
            for (const [I, o] of g.entries()){
                const W = Y.createElementNS("http://www.w3.org/2000/svg", "tspan");
                W.setAttribute("alignment-baseline", "central");
                W.setAttribute("x", "10");
                if (I > 0) {
                    W.setAttribute("dy", "1em");
                }
                W.textContent = o;
                m.appendChild(W);
            }
            return m;
        }).attr("x", 10).attr("y", (c, g)=>{
            if (g > 0) {
                for(let b = 0; b < g; b++){
                    M += D[g - 1][1];
                    return c[1] * x / 2 + M * x + C;
                }
            } else {
                return c[1] * x / 2 + C;
            }
        }).attr("font-size", gantt.sectionFontSize).attr("class", (c)=>{
            for (const [g, b] of _.entries()){
                if (c[0] === b) {
                    return `sectionTitle sectionTitle${g % gantt.numberSectionStyles}`;
                }
            }
            return "sectionTitle";
        });
    }
    __1(k, "vertLabels");
    function p(x, C, M, D) {
        const c = r.db.getTodayMarker();
        if (c === "off") {
            return;
        }
        const g = Z.append("g").attr("class", "today");
        const b = new Date;
        const m = g.append("line");
        m.attr("x1", v(b) + x).attr("x2", v(b) + x).attr("y1", gantt.titleTopMargin).attr("y2", D - gantt.titleTopMargin).attr("class", "today");
        if (c !== "") {
            m.attr("style", c.replace(/,/g, ";"));
        }
    }
    __1(p, "drawToday");
    function L(x) {
        const C = {};
        const M = [];
        for(let D = 0, c = x.length; D < c; ++D){
            if (!Object.prototype.hasOwnProperty.call(C, x[D])) {
                C[x[D]] = true;
                M.push(x[D]);
            }
        }
        return M;
    }
    __1(L, "checkUnique");
}, "draw");
const renderer = {
    setConf,
    draw
};
const Hs = __1((t)=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar \u2014 same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor || t.textColor};
    font-family: ${t.fontFamily};
  }
`, "getStyles");
const styles = Hs;
export const diagram = {
    parser,
    db,
    renderer,
    styles
};
