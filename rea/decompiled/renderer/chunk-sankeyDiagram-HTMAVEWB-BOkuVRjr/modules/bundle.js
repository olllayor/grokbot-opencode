import { _ as __1, o as setDiagramTitle, p as getDiagramTitle, s as setAccDescription, g as getAccDescription, b as setAccTitle, a as getAccTitle, c as c_1, b8, d as d_1, ad, q, k } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { o as o_1 } from "./chunk-ordinal-BB0u7Tqq.js";
import "./index.eager-vendor-Qbf9YA6n.js";
import "./chunk-init-Gi6I4Gst.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "a64a69e7-dd02-43dd-95a8-96a9c833f6b7";
            e._sentryDebugIdIdentifier = "sentry-dbid-a64a69e7-dd02-43dd-95a8-96a9c833f6b7";
        }
    } catch (e) {}
})();
function Nt(t) {
    for(var n = t.length / 6 | 0, s = new Array(n), a = 0; a < n;){
        s[a] = `#${t.slice(a * 6, ++a * 6)}`;
    }
    return s;
}
const Ct = Nt("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function ct(t, n) {
    let s;
    if (n === undefined) {
        for (const a of t){
            if (a != null && (s < a || s === undefined && a >= a)) {
                s = a;
            }
        }
    } else {
        let a = -1;
        for (let u of t){
            if ((u = n(u, ++a, t)) != null && (s < u || s === undefined && u >= u)) {
                s = u;
            }
        }
    }
    return s;
}
function pt(t, n) {
    let s;
    if (n === undefined) {
        for (const a of t){
            if (a != null && (s > a || s === undefined && a >= a)) {
                s = a;
            }
        }
    } else {
        let a = -1;
        for (let u of t){
            if ((u = n(u, ++a, t)) != null && (s > u || s === undefined && u >= u)) {
                s = u;
            }
        }
    }
    return s;
}
function nt(t, n) {
    let s = 0;
    if (n === undefined) {
        for (let a of t){
            if (a = +a) {
                s += a;
            }
        }
    } else {
        let a = -1;
        for (let u of t){
            if (u = +n(u, ++a, t)) {
                s += u;
            }
        }
    }
    return s;
}
function Pt(t) {
    return t.target.depth;
}
function left(t) {
    return t.depth;
}
function right(t, n) {
    return n - 1 - t.height;
}
function justify(t, n) {
    if (t.sourceLinks.length) {
        return t.depth;
    }
    return n - 1;
}
function center(t) {
    if (t.targetLinks.length) {
        return t.depth;
    }
    if (t.sourceLinks.length) {
        return pt(t.sourceLinks, Pt) - 1;
    }
    return 0;
}
function X(t) {
    return ()=>t;
}
function ut(t, n) {
    return Q(t.source, n.source) || t.index - n.index;
}
function ht(t, n) {
    return Q(t.target, n.target) || t.index - n.index;
}
function Q(t, n) {
    return t.y0 - n.y0;
}
function it(t) {
    return t.value;
}
function Dt(t) {
    return t.index;
}
function jt(t) {
    return t.nodes;
}
function zt(t) {
    return t.links;
}
function ft(t, n) {
    const s = t.get(n);
    if (!s) {
        throw new Error(`missing: ${n}`);
    }
    return s;
}
function yt({ nodes }) {
    for (const n of nodes){
        let s = n.y0;
        let a = s;
        for (const u of n.sourceLinks){
            u.y0 = s + u.width / 2;
            s += u.width;
        }
        for (const u of n.targetLinks){
            u.y1 = a + u.width / 2;
            a += u.width;
        }
    }
}
function Bt() {
    let t = 0;
    let n = 0;
    let s = 1;
    let a = 1;
    let u = 24;
    let x = 8;
    let g;
    let k = Dt;
    let o = justify;
    let l;
    let h;
    let m = jt;
    let _ = zt;
    let d = 6;
    function v() {
        const i = {
            nodes: m(...arguments),
            links: _(...arguments)
        };
        T(i);
        A(i);
        M(i);
        I(i);
        S(i);
        yt(i);
        return i;
    }
    v.update = (i)=>{
        yt(i);
        return i;
    };
    v.nodeId = function(i) {
        if (arguments.length) {
            k = typeof i === "function" ? i : X(i);
            return v;
        }
        return k;
    };
    v.nodeAlign = function(i) {
        if (arguments.length) {
            o = typeof i === "function" ? i : X(i);
            return v;
        }
        return o;
    };
    v.nodeSort = function(i) {
        if (arguments.length) {
            l = i;
            return v;
        }
        return l;
    };
    v.nodeWidth = function(i) {
        if (arguments.length) {
            u = +i;
            return v;
        }
        return u;
    };
    v.nodePadding = function(i) {
        if (arguments.length) {
            x = g = +i;
            return v;
        }
        return x;
    };
    v.nodes = function(i) {
        if (arguments.length) {
            m = typeof i === "function" ? i : X(i);
            return v;
        }
        return m;
    };
    v.links = function(i) {
        if (arguments.length) {
            _ = typeof i === "function" ? i : X(i);
            return v;
        }
        return _;
    };
    v.linkSort = function(i) {
        if (arguments.length) {
            h = i;
            return v;
        }
        return h;
    };
    v.size = function(i) {
        if (arguments.length) {
            n = 0;
            t = 0;
            s = +i[0];
            a = +i[1];
            return v;
        }
        return [
            s - t,
            a - n
        ];
    };
    v.extent = function(i) {
        if (arguments.length) {
            t = +i[0][0];
            s = +i[1][0];
            n = +i[0][1];
            a = +i[1][1];
            return v;
        }
        return [
            [
                t,
                n
            ],
            [
                s,
                a
            ]
        ];
    };
    v.iterations = function(i) {
        if (arguments.length) {
            d = +i;
            return v;
        }
        return d;
    };
    function T({ nodes, links }) {
        for (const [e, r] of nodes.entries()){
            r.index = e;
            r.sourceLinks = [];
            r.targetLinks = [];
        }
        const c = new Map(nodes.map((e, r)=>[
                k(e, r, nodes),
                e
            ]));
        for (const [e, r] of links.entries()){
            r.index = e;
            let { source, target } = r;
            if (typeof source !== "object") {
                source = r.source = ft(c, source);
            }
            if (typeof target !== "object") {
                target = r.target = ft(c, target);
            }
            source.sourceLinks.push(r);
            target.targetLinks.push(r);
        }
        if (h != null) {
            for (const { sourceLinks, targetLinks } of nodes){
                sourceLinks.sort(h);
                targetLinks.sort(h);
            }
        }
    }
    function A({ nodes }) {
        for (const f of nodes){
            f.value = f.fixedValue === undefined ? Math.max(nt(f.sourceLinks, it), nt(f.targetLinks, it)) : f.fixedValue;
        }
    }
    function M({ nodes }) {
        const nodes_length = nodes.length;
        let c = new Set(nodes);
        let e = new Set;
        let r = 0;
        while(c.size){
            for (const p of c){
                p.depth = r;
                for (const { target } of p.sourceLinks){
                    e.add(target);
                }
            }
            if (++r > nodes_length) {
                throw new Error("circular link");
            }
            c = e;
            e = new Set;
        }
    }
    function I({ nodes }) {
        const nodes_length = nodes.length;
        let c = new Set(nodes);
        let e = new Set;
        let r = 0;
        while(c.size){
            for (const p of c){
                p.height = r;
                for (const { source } of p.targetLinks){
                    e.add(source);
                }
            }
            if (++r > nodes_length) {
                throw new Error("circular link");
            }
            c = e;
            e = new Set;
        }
    }
    function N({ nodes }) {
        const f = ct(nodes, (r)=>r.depth) + 1;
        const c = (s - t - u) / (f - 1);
        const e = new Array(f);
        for (const r of nodes){
            const p = Math.max(0, Math.min(f - 1, Math.floor(o.call(null, r, f))));
            r.layer = p;
            r.x0 = t + p * c;
            r.x1 = r.x0 + u;
            if (e[p]) {
                e[p].push(r);
            } else {
                e[p] = [
                    r
                ];
            }
        }
        if (l) {
            for (const r of e){
                r.sort(l);
            }
        }
        return e;
    }
    function D(i) {
        const f = pt(i, (c)=>(a - n - (c.length - 1) * g) / nt(c, it));
        for (const c of i){
            let e = n;
            for (const r of c){
                r.y0 = e;
                r.y1 = e + r.value * f;
                e = r.y1 + g;
                for (const p of r.sourceLinks){
                    p.width = p.value * f;
                }
            }
            e = (a - e + g) / (c.length + 1);
            for(let r = 0; r < c.length; ++r){
                const p = c[r];
                p.y0 += e * (r + 1);
                p.y1 += e * (r + 1);
            }
            w(c);
        }
    }
    function S(i) {
        const f = N(i);
        g = Math.min(x, (a - n) / (ct(f, (c)=>c.length) - 1));
        D(f);
        for(let c = 0; c < d; ++c){
            const e = 0.99 ** c;
            const r = Math.max(1 - e, (c + 1) / d);
            R(f, e, r);
            C(f, e, r);
        }
    }
    function C(i, f, c) {
        for(let e = 1, r = i.length; e < r; ++e){
            const p = i[e];
            for (const b of p){
                let L = 0;
                let B = 0;
                for (const { source, value } of b.targetLinks){
                    let q = value * (b.layer - source.layer);
                    L += P(source, b) * q;
                    B += q;
                }
                if (!(B > 0)) {
                    continue;
                }
                let U = (L / B - b.y0) * f;
                b.y0 += U;
                b.y1 += U;
                z(b);
            }
            if (l === undefined) {
                p.sort(Q);
            }
            j(p, c);
        }
    }
    function R(i, f, c) {
        for(let e = i.length, r = e - 2; r >= 0; --r){
            const p = i[r];
            for (const b of p){
                let L = 0;
                let B = 0;
                for (const { target, value } of b.sourceLinks){
                    let q = value * (target.layer - b.layer);
                    L += E(b, target) * q;
                    B += q;
                }
                if (!(B > 0)) {
                    continue;
                }
                let U = (L / B - b.y0) * f;
                b.y0 += U;
                b.y1 += U;
                z(b);
            }
            if (l === undefined) {
                p.sort(Q);
            }
            j(p, c);
        }
    }
    function j(i, f) {
        const c = i.length >> 1;
        const e = i[c];
        O(i, e.y0 - g, c - 1, f);
        V(i, e.y1 + g, c + 1, f);
        O(i, a, i.length - 1, f);
        V(i, n, 0, f);
    }
    function V(i, f, c, e) {
        for(; c < i.length; ++c){
            const r = i[c];
            const p = (f - r.y0) * e;
            if (p > 0.000001) {
                r.y0 += p;
                r.y1 += p;
            }
            f = r.y1 + g;
        }
    }
    function O(i, f, c, e) {
        for(; c >= 0; --c){
            const r = i[c];
            const p = (r.y1 - f) * e;
            if (p > 0.000001) {
                r.y0 -= p;
                r.y1 -= p;
            }
            f = r.y0 - g;
        }
    }
    function z({ sourceLinks, targetLinks }) {
        if (h === undefined) {
            for (const { source: { sourceLinks: sourceLinks_1 } } of targetLinks){
                sourceLinks_1.sort(ht);
            }
            for (const { target: { targetLinks: targetLinks_1 } } of sourceLinks){
                targetLinks_1.sort(ut);
            }
        }
    }
    function w(i) {
        if (h === undefined) {
            for (const { sourceLinks, targetLinks } of i){
                sourceLinks.sort(ht);
                targetLinks.sort(ut);
            }
        }
    }
    function P(i, f) {
        let c = i.y0 - (i.sourceLinks.length - 1) * g / 2;
        for (const { target, width } of i.sourceLinks){
            if (target === f) {
                break;
            }
            c += width + g;
        }
        for (const { source, width } of f.targetLinks){
            if (source === i) {
                break;
            }
            c -= width;
        }
        return c;
    }
    function E(i, f) {
        let c = f.y0 - (f.targetLinks.length - 1) * g / 2;
        for (const { source, width } of f.targetLinks){
            if (source === i) {
                break;
            }
            c += width + g;
        }
        for (const { target, width } of i.sourceLinks){
            if (target === f) {
                break;
            }
            c -= width;
        }
        return c;
    }
    return v;
}
const st = 2 * Math.PI;
const F = 0.000001;
const Ft = st - F;
function constructor() {
    this._x0 = this._y0 = this._x1 = this._y1 = null;
    this._ = "";
}
function mt() {
    return new constructor;
}
constructor.prototype = mt.prototype = {
    constructor,
    moveTo (t, n) {
        this._ += `M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
    },
    closePath () {
        if (this._x1 !== null) {
            this._x1 = this._x0;
            this._y1 = this._y0;
            this._ += "Z";
        }
    },
    lineTo (t, n) {
        this._ += `L${this._x1 = +t},${this._y1 = +n}`;
    },
    quadraticCurveTo (t, n, s, a) {
        this._ += `Q${+t},${+n},${this._x1 = +s},${this._y1 = +a}`;
    },
    bezierCurveTo (t, n, s, a, u, x) {
        this._ += `C${+t},${+n},${+s},${+a},${this._x1 = +u},${this._y1 = +x}`;
    },
    arcTo (t, n, s, a, u) {
        t = +t;
        n = +n;
        s = +s;
        a = +a;
        u = +u;
        const _x1 = this._x1;
        const _y1 = this._y1;
        const k = s - t;
        const o = a - n;
        const l = _x1 - t;
        const h = _y1 - n;
        const m = l * l + h * h;
        if (u < 0) {
            throw new Error(`negative radius: ${u}`);
        }
        if (this._x1 === null) {
            this._ += `M${this._x1 = t},${this._y1 = n}`;
        } else if (m > F) {
            if (!(Math.abs(h * k - o * l) > F) || !u) {
                this._ += `L${this._x1 = t},${this._y1 = n}`;
            } else {
                const _ = s - _x1;
                const d = a - _y1;
                const v = k * k + o * o;
                const T = _ * _ + d * d;
                const A = Math.sqrt(v);
                const M = Math.sqrt(m);
                const I = u * Math.tan((Math.PI - Math.acos((v + m - T) / (2 * A * M))) / 2);
                const N = I / M;
                const D = I / A;
                if (Math.abs(N - 1) > F) {
                    this._ += `L${t + N * l},${n + N * h}`;
                }
                this._ += `A${u},${u},0,0,${+(h * _ > l * d)},${this._x1 = t + D * k},${this._y1 = n + D * o}`;
            }
        }
    },
    arc (t, n, s, a, u, x) {
        t = +t;
        n = +n;
        s = +s;
        x = !!x;
        const g = s * Math.cos(a);
        const k = s * Math.sin(a);
        const o = t + g;
        const l = n + k;
        const h = 1 ^ x;
        let m = x ? a - u : u - a;
        if (s < 0) {
            throw new Error(`negative radius: ${s}`);
        }
        if (this._x1 === null) {
            this._ += `M${o},${l}`;
        } else if (Math.abs(this._x1 - o) > F || Math.abs(this._y1 - l) > F) {
            this._ += `L${o},${l}`;
        }
        s && (m < 0 && (m = m % st + st), m > Ft ? this._ += `A${s},${s},0,1,${h},${t - g},${n - k}A${s},${s},0,1,${h},${this._x1 = o},${this._y1 = l}` : m > F && (this._ += `A${s},${s},0,${+(m >= Math.PI)},${h},${this._x1 = t + s * Math.cos(u)},${this._y1 = n + s * Math.sin(u)}`));
    },
    rect (t, n, s, a) {
        this._ += `M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${+s}v${+a}h${-s}Z`;
    },
    toString () {
        return this._;
    }
};
function dt(t) {
    return ()=>t;
}
function Rt(t) {
    return t[0];
}
function Vt(t) {
    return t[1];
}
const slice = Array.prototype.slice;
function Gt(t) {
    return t.source;
}
function Ut(t) {
    return t.target;
}
function Yt(t) {
    let n = Gt;
    let s = Ut;
    let a = Rt;
    let u = Vt;
    let x = null;
    function g() {
        let k;
        const o = slice.call(arguments);
        const l = n.apply(this, o);
        const h = s.apply(this, o);
        if (!x) {
            x = k = mt();
        }
        t(x, +a.apply(this, (o[0] = l, o)), +u.apply(this, o), +a.apply(this, (o[0] = h, o)), +u.apply(this, o));
        if (k) {
            x = null;
            return `${k}` || null;
        }
    }
    g.source = function(k) {
        if (arguments.length) {
            n = k;
            return g;
        }
        return n;
    };
    g.target = function(k) {
        if (arguments.length) {
            s = k;
            return g;
        }
        return s;
    };
    g.x = function(k) {
        if (arguments.length) {
            a = typeof k === "function" ? k : dt(+k);
            return g;
        }
        return a;
    };
    g.y = function(k) {
        if (arguments.length) {
            u = typeof k === "function" ? k : dt(+k);
            return g;
        }
        return u;
    };
    g.context = function(k) {
        if (arguments.length) {
            x = k ?? null;
            return g;
        }
        return x;
    };
    return g;
}
function qt(t, n, s, a, u) {
    t.moveTo(n, s);
    t.bezierCurveTo(n = (n + a) / 2, s, n, u, a, u);
}
function Ht() {
    return Yt(qt);
}
function Xt(t) {
    return [
        t.source.x1,
        t.y0
    ];
}
function Qt(t) {
    return [
        t.target.x0,
        t.y1
    ];
}
function Kt() {
    return Ht().source(Xt).target(Qt);
}
const at = (()=>{
    const t = __1((k, o, l, h)=>{
        l = l || {};
        for(h = k.length; h--; l[k[h]] = o);
        return l;
    }, "o");
    const n = [
        1,
        9
    ];
    const s = [
        1,
        10
    ];
    const a = [
        1,
        5,
        10,
        12
    ];
    const u = {
        trace: __1(()=>{}, "trace"),
        yy: {},
        symbols_: {
            error: 2,
            start: 3,
            SANKEY: 4,
            NEWLINE: 5,
            csv: 6,
            opt_eof: 7,
            record: 8,
            csv_tail: 9,
            EOF: 10,
            "field[source]": 11,
            COMMA: 12,
            "field[target]": 13,
            "field[value]": 14,
            field: 15,
            escaped: 16,
            non_escaped: 17,
            DQUOTE: 18,
            ESCAPED_TEXT: 19,
            NON_ESCAPED_TEXT: 20,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            4: "SANKEY",
            5: "NEWLINE",
            10: "EOF",
            11: "field[source]",
            12: "COMMA",
            13: "field[target]",
            14: "field[value]",
            18: "DQUOTE",
            19: "ESCAPED_TEXT",
            20: "NON_ESCAPED_TEXT"
        },
        productions_: [
            0,
            [
                3,
                4
            ],
            [
                6,
                2
            ],
            [
                9,
                2
            ],
            [
                9,
                0
            ],
            [
                7,
                1
            ],
            [
                7,
                0
            ],
            [
                8,
                5
            ],
            [
                15,
                1
            ],
            [
                15,
                1
            ],
            [
                16,
                3
            ],
            [
                17,
                1
            ]
        ],
        performAction: __1(function(o, l, h, m, _, d, v) {
            const T = d.length - 1;
            switch(_){
                case 7:
                    const A = m.findOrCreateNode(d[T - 4].trim().replaceAll('""', '"'));
                    const M = m.findOrCreateNode(d[T - 2].trim().replaceAll('""', '"'));
                    const I = parseFloat(d[T].trim());
                    m.addLink(A, M, I);
                    break;
                case 8:
                case 9:
                case 11:
                    this.$ = d[T];
                    break;
                case 10:
                    this.$ = d[T - 1];
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
            {
                5: [
                    1,
                    3
                ]
            },
            {
                6: 4,
                8: 5,
                15: 6,
                16: 7,
                17: 8,
                18: n,
                20: s
            },
            {
                1: [
                    2,
                    6
                ],
                7: 11,
                10: [
                    1,
                    12
                ]
            },
            t(s, [
                2,
                4
            ], {
                9: 13,
                5: [
                    1,
                    14
                ]
            }),
            {
                12: [
                    1,
                    15
                ]
            },
            t(a, [
                2,
                8
            ]),
            t(a, [
                2,
                9
            ]),
            {
                19: [
                    1,
                    16
                ]
            },
            t(a, [
                2,
                11
            ]),
            {
                1: [
                    2,
                    1
                ]
            },
            {
                1: [
                    2,
                    5
                ]
            },
            t(s, [
                2,
                2
            ]),
            {
                6: 17,
                8: 5,
                15: 6,
                16: 7,
                17: 8,
                18: n,
                20: s
            },
            {
                15: 18,
                16: 7,
                17: 8,
                18: n,
                20: s
            },
            {
                18: [
                    1,
                    19
                ]
            },
            t(s, [
                2,
                3
            ]),
            {
                12: [
                    1,
                    20
                ]
            },
            t(a, [
                2,
                10
            ]),
            {
                15: 21,
                16: 7,
                17: 8,
                18: n,
                20: s
            },
            t([
                1,
                5,
                10
            ], [
                2,
                7
            ])
        ],
        defaultActions: {
            11: [
                2,
                1
            ],
            12: [
                2,
                5
            ]
        },
        parseError: __1(function(o, l) {
            if (l.recoverable) {
                this.trace(o);
            } else {
                const h = new Error(o);
                h.hash = l;
                throw h;
            }
        }, "parseError"),
        parse: __1(function(o) {
            const l = this;
            let h = [
                0
            ];
            let m = [];
            let _ = [
                null
            ];
            let d = [];
            const table = this.table;
            let T = "";
            let A = 0;
            let M = 0;
            const I = 2;
            const N = 1;
            const D = d.slice.call(arguments, 1);
            const S = Object.create(this.lexer);
            const C = {
                yy: {}
            };
            for(const R in this.yy){
                if (Object.prototype.hasOwnProperty.call(this.yy, R)) {
                    C.yy[R] = this.yy[R];
                }
            }
            S.setInput(o, C.yy);
            C.yy.lexer = S;
            C.yy.parser = this;
            if (typeof S.yylloc === "undefined") {
                S.yylloc = {};
            }
            let S_yylloc = S.yylloc;
            d.push(S_yylloc);
            const V = S.options && S.options.ranges;
            if (typeof C.yy.parseError === "function") {
                this.parseError = C.yy.parseError;
            } else {
                this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function O(L) {
                h.length = h.length - 2 * L;
                _.length = _.length - L;
                d.length = d.length - L;
            }
            __1(O, "popStack");
            function z() {
                let L;
                L = m.pop() || S.lex() || N;
                if (typeof L !== "number") {
                    if (L instanceof Array) {
                        m = L;
                        L = m.pop();
                    }
                    L = l.symbols_[L] || L;
                }
                return L;
            }
            __1(z, "lex");
            let w;
            let P;
            let E;
            let i;
            const f = {};
            let c;
            let e;
            let r;
            let expected;
            while(true){
                P = h[h.length - 1];
                if (this.defaultActions[P]) {
                    E = this.defaultActions[P];
                } else {
                    if (w === null || typeof w === "undefined") {
                        w = z();
                    }
                    E = table[P] && table[P][w];
                }
                if (typeof E === "undefined" || !E.length || !E[0]) {
                    let b = "";
                    expected = [];
                    for(c in table[P]){
                        if (this.terminals_[c] && c > I) {
                            expected.push(`'${this.terminals_[c]}'`);
                        }
                    }
                    if (S.showPosition) {
                        b = `Parse error on line ${A + 1}${`:
`}${S.showPosition()}${`
Expecting `}${expected.join(", ")}, got '${this.terminals_[w] || w}'`;
                    } else {
                        b = `Parse error on line ${A + 1}: Unexpected ${w == N ? "end of input" : `'${this.terminals_[w] || w}'`}`;
                    }
                    this.parseError(b, {
                        text: S.match,
                        token: this.terminals_[w] || w,
                        line: S.yylineno,
                        loc: S_yylloc,
                        expected
                    });
                }
                if (E[0] instanceof Array && E.length > 1) {
                    throw new Error(`Parse Error: multiple actions possible at state: ${P}, token: ${w}`);
                }
                switch(E[0]){
                    case 1:
                        h.push(w);
                        _.push(S.yytext);
                        d.push(S.yylloc);
                        h.push(E[1]);
                        w = null;
                        M = S.yyleng;
                        T = S.yytext;
                        A = S.yylineno;
                        S_yylloc = S.yylloc;
                        break;
                    case 2:
                        e = this.productions_[E[1]][1];
                        f.$ = _[_.length - e];
                        f._$ = {
                            first_line: d[d.length - (e || 1)].first_line,
                            last_line: d[d.length - 1].last_line,
                            first_column: d[d.length - (e || 1)].first_column,
                            last_column: d[d.length - 1].last_column
                        };
                        if (V) {
                            f._$.range = [
                                d[d.length - (e || 1)].range[0],
                                d[d.length - 1].range[1]
                            ];
                        }
                        i = this.performAction.apply(f, [
                            T,
                            M,
                            A,
                            C.yy,
                            E[1],
                            _,
                            d
                        ].concat(D));
                        if (typeof i !== "undefined") {
                            return i;
                        }
                        if (e) {
                            h = h.slice(0, -1 * e * 2);
                            _ = _.slice(0, -1 * e);
                            d = d.slice(0, -1 * e);
                        }
                        h.push(this.productions_[E[1]][0]);
                        _.push(f.$);
                        d.push(f._$);
                        r = table[h[h.length - 2]][h[h.length - 1]];
                        h.push(r);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }, "parse")
    };
    const x = (()=>{
        const k = {
            EOF: 1,
            parseError: __1(function(l, h) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(l, h);
                } else {
                    throw new Error(l);
                }
            }, "parseError"),
            setInput: __1(function(o, l) {
                this.yy = l || this.yy || {};
                this._input = o;
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
                const o = this._input[0];
                this.yytext += o;
                this.yyleng++;
                this.offset++;
                this.match += o;
                this.matched += o;
                const l = o.match(/(?:\r\n?|\n).*/g);
                l ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++;
                this.options.ranges && this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return o;
            }, "input"),
            unput: __1(function(o) {
                const o_length = o.length;
                const h = o.split(/(?:\r\n?|\n)/g);
                this._input = o + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - o_length);
                this.offset -= o_length;
                const m = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (h.length - 1) {
                    this.yylineno -= h.length - 1;
                }
                const range = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: h ? (h.length === m.length ? this.yylloc.first_column : 0) + m[m.length - h.length].length - h[0].length : this.yylloc.first_column - o_length
                };
                if (this.options.ranges) {
                    this.yylloc.range = [
                        range[0],
                        range[0] + this.yyleng - o_length
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
            less: __1(function(o) {
                this.unput(this.match.slice(o));
            }, "less"),
            pastInput: __1(function() {
                const o = this.matched.substr(0, this.matched.length - this.match.length);
                return (o.length > 20 ? "..." : "") + o.substr(-20).replace(/\n/g, "");
            }, "pastInput"),
            upcomingInput: __1(function() {
                let match = this.match;
                if (match.length < 20) {
                    match += this._input.substr(0, 20 - match.length);
                }
                return (match.substr(0, 20) + (match.length > 20 ? "..." : "")).replace(/\n/g, "");
            }, "upcomingInput"),
            showPosition: __1(function() {
                const o = this.pastInput();
                const l = new Array(o.length + 1).join("-");
                return `${o + this.upcomingInput() + `
` + l}^`;
            }, "showPosition"),
            test_match: __1(function(o, l) {
                let h;
                let m;
                let _;
                if (this.options.backtrack_lexer) {
                    _ = {
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
                        _.yylloc.range = this.yylloc.range.slice(0);
                    }
                }
                m = o[0].match(/(?:\r\n?|\n).*/g);
                if (m) {
                    this.yylineno += m.length;
                }
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: m ? m[m.length - 1].length - m[m.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + o[0].length
                };
                this.yytext += o[0];
                this.match += o[0];
                this.matches = o;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) {
                    this.yylloc.range = [
                        this.offset,
                        this.offset += this.yyleng
                    ];
                }
                this._more = false;
                this._backtrack = false;
                this._input = this._input.slice(o[0].length);
                this.matched += o[0];
                h = this.performAction.call(this, this.yy, this, l, this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) {
                    this.done = false;
                }
                if (h) {
                    return h;
                }
                if (this._backtrack) {
                    for(const d in _){
                        this[d] = _[d];
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
                let o;
                let l;
                let h;
                let m;
                if (!this._more) {
                    this.yytext = "";
                    this.match = "";
                }
                for(var _ = this._currentRules(), d = 0; d < _.length; d++){
                    h = this._input.match(this.rules[_[d]]);
                    if (h && (!l || h[0].length > l[0].length)) {
                        l = h;
                        m = d;
                        if (this.options.backtrack_lexer) {
                            o = this.test_match(h, _[d]);
                            if (o !== false) {
                                return o;
                            }
                            if (this._backtrack) {
                                l = false;
                                continue;
                            } else {
                                return false;
                            }
                        } else if (!this.options.flex) {
                            break;
                        }
                    }
                }
                if (l) {
                    o = this.test_match(l, _[m]);
                    if (o !== false) {
                        return o;
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
                const l = this.next();
                return l || this.lex();
            }, "lex"),
            begin: __1(function(l) {
                this.conditionStack.push(l);
            }, "begin"),
            popState: __1(function() {
                const l = this.conditionStack.length - 1;
                if (l > 0) {
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
            topState: __1(function(l) {
                l = this.conditionStack.length - 1 - Math.abs(l || 0);
                if (l >= 0) {
                    return this.conditionStack[l];
                }
                return "INITIAL";
            }, "topState"),
            pushState: __1(function(l) {
                this.begin(l);
            }, "pushState"),
            stateStackSize: __1(function() {
                return this.conditionStack.length;
            }, "stateStackSize"),
            options: {
                "case-insensitive": true
            },
            performAction: __1(function(l, h, m, _) {
                switch(m){
                    case 0:
                        this.pushState("csv");
                        return 4;
                    case 1:
                        this.pushState("csv");
                        return 4;
                    case 2:
                        return 10;
                    case 3:
                        return 5;
                    case 4:
                        return 12;
                    case 5:
                        this.pushState("escaped_text");
                        return 18;
                    case 6:
                        return 20;
                    case 7:
                        this.popState("escaped_text");
                        return 18;
                    case 8:
                        return 19;
                }
            }, "anonymous"),
            rules: [
                /^(?:sankey-beta\b)/i,
                /^(?:sankey\b)/i,
                /^(?:$)/i,
                /^(?:((\u000D\u000A)|(\u000A)))/i,
                /^(?:(\u002C))/i,
                /^(?:(\u0022))/i,
                /^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,
                /^(?:(\u0022)(?!(\u0022)))/i,
                /^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i
            ],
            conditions: {
                csv: {
                    rules: [
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8
                    ],
                    inclusive: false
                },
                escaped_text: {
                    rules: [
                        7,
                        8
                    ],
                    inclusive: false
                },
                INITIAL: {
                    rules: [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8
                    ],
                    inclusive: true
                }
            }
        };
        return k;
    })();
    u.lexer = x;
    function g() {
        this.yy = {};
    }
    __1(g, "Parser");
    g.prototype = u;
    u.Parser = g;
    return new g;
})();
at.parser = at;
const parser = at;
let J = [];
let tt = [];
let nodesMap = new Map;
const clear = __1(()=>{
    J = [];
    tt = [];
    nodesMap = new Map;
    q();
}, "clear");
const W = class {
    constructor(n, s, a = 0){
        this.source = n;
        this.target = s;
        this.value = a;
    }
};
__1(W, "SankeyLink");
const Jt = W;
const addLink = __1((t, n, s)=>{
    J.push(new Jt(t, n, s));
}, "addLink");
const G = class {
    constructor(n){
        this.ID = n;
    }
};
__1(G, "SankeyNode");
const ee = G;
const findOrCreateNode = __1((t)=>{
    t = k.sanitizeText(t, c_1());
    let n = nodesMap.get(t);
    if (n === undefined) {
        n = new ee(t);
        nodesMap.set(t, n);
        tt.push(n);
    }
    return n;
}, "findOrCreateNode");
const getNodes = __1(()=>tt, "getNodes");
const getLinks = __1(()=>J, "getLinks");
const getGraph = __1(()=>({
        nodes: tt.map((t)=>({
                id: t.ID
            })),
        links: J.map((t)=>({
                source: t.source.ID,
                target: t.target.ID,
                value: t.value
            }))
    }), "getGraph");
const db = {
    nodesMap,
    getConfig: __1(()=>c_1().sankey, "getConfig"),
    getNodes,
    getLinks,
    getGraph,
    addLink,
    findOrCreateNode,
    getAccTitle,
    setAccTitle,
    getAccDescription,
    setAccDescription,
    getDiagramTitle,
    setDiagramTitle,
    clear
};
let $;
$ = class {
    static next(n) {
        return new $(n + ++$.count);
    }
    constructor(n){
        this.id = n;
        this.href = `#${n}`;
    }
    toString() {
        return `url(${this.href})`;
    }
};
__1($, "Uid");
$.count = 0;
const gt = $;
const ae = {
    left,
    right,
    center,
    justify
};
const le = __1((t)=>{
    let n = 0;
    let s = 0;
    for (const a of t){
        const u = a.value ?? 0;
        if (u > n) {
            n = u;
            s = a.layer ?? 0;
        }
    }
    return s;
}, "findCentralNodeLayer");
const draw = __1((t, n, s, a)=>{
    const { securityLevel, sankey } = c_1();
    const b8_sankey = b8.sankey;
    let k;
    if (securityLevel === "sandbox") {
        k = d_1(`#i${n}`);
    }
    const o = securityLevel === "sandbox" ? d_1(k.nodes()[0].contentDocument.body) : d_1("body");
    const l = securityLevel === "sandbox" ? o.select(`[id="${n}"]`) : d_1(`[id="${n}"]`);
    const h = sankey?.width ?? b8_sankey.width;
    const m = sankey?.height ?? b8_sankey.width;
    const _ = sankey?.useMaxWidth ?? b8_sankey.useMaxWidth;
    const d = sankey?.nodeAlignment ?? b8_sankey.nodeAlignment;
    const v = sankey?.prefix ?? b8_sankey.prefix;
    const T = sankey?.suffix ?? b8_sankey.suffix;
    const A = sankey?.showValues ?? b8_sankey.showValues;
    const M = sankey?.nodeWidth ?? b8_sankey.nodeWidth ?? 10;
    const I = sankey?.nodePadding ?? b8_sankey.nodePadding ?? 12;
    const N = sankey?.labelStyle ?? b8_sankey.labelStyle ?? "legacy";
    const D = sankey?.nodeColors ?? {};
    const S = a.db.getGraph();
    const C = ae[d];
    Bt().nodeId((e)=>e.id).nodeWidth(M).nodePadding(I + (A ? 15 : 0)).nodeAlign(C).extent([
        [
            0,
            0
        ],
        [
            h,
            m
        ]
    ])(S);
    const j = le(S.nodes);
    const V = o_1(Ct);
    const O = __1((e)=>D[e] ?? V(e), "getNodeColor");
    l.append("g").attr("class", "nodes").selectAll(".node").data(S.nodes).join("g").attr("class", "node").attr("id", (e)=>(e.uid = gt.next("node-")).id).attr("transform", (e)=>`translate(${e.x0},${e.y0})`).attr("x", (e)=>e.x0).attr("y", (e)=>e.y0).append("rect").attr("height", (e)=>e.y1 - e.y0).attr("width", (e)=>e.x1 - e.x0).attr("fill", (e)=>O(e.id));
    const z = __1(({ id, value })=>{
        if (A) {
            return `${id}
${v}${Math.round(value * 100) / 100}${T}`;
        }
        return id;
    }, "getText");
    const w = __1((e)=>{
        if (N === "outlined") {
            if ((e.layer ?? 0) < j) {
                return {
                    x: e.x0 - 6,
                    anchor: "end"
                };
            }
            return {
                x: e.x1 + 6,
                anchor: "start"
            };
        }
        if (e.x0 < h / 2) {
            return {
                x: e.x1 + 6,
                anchor: "start"
            };
        }
        return {
            x: e.x0 - 6,
            anchor: "end"
        };
    }, "getLabelPosition");
    const P = l.append("g").attr("class", "node-labels").attr("font-size", 14);
    const E = __1((e)=>P.selectAll(e ? `.${e}` : "text").data(S.nodes).join("text").attr("class", e ?? null).attr("x", (r)=>w(r).x).attr("y", (r)=>(r.y1 + r.y0) / 2).attr("dy", `${A ? "0" : "0.35"}em`).attr("text-anchor", (r)=>w(r).anchor).text(z), "appendLabel");
    if (N === "outlined") {
        E("sankey-label-bg");
        E("sankey-label-fg");
    } else {
        E();
    }
    const i = l.append("g").attr("class", "links").attr("fill", "none").attr("stroke-opacity", 0.5).selectAll(".link").data(S.links).join("g").attr("class", "link").style("mix-blend-mode", "multiply");
    const f = sankey?.linkColor ?? "gradient";
    if (f === "gradient") {
        const e = i.append("linearGradient").attr("id", (r)=>(r.uid = gt.next("linearGradient-")).id).attr("gradientUnits", "userSpaceOnUse").attr("x1", (r)=>r.source.x1).attr("x2", (r)=>r.target.x0);
        e.append("stop").attr("offset", "0%").attr("stop-color", (r)=>O(r.source.id));
        e.append("stop").attr("offset", "100%").attr("stop-color", (r)=>O(r.target.id));
    }
    let c;
    switch(f){
        case "gradient":
            c = __1((e)=>e.uid, "coloring");
            break;
        case "source":
            c = __1((e)=>O(e.source.id), "coloring");
            break;
        case "target":
            c = __1((e)=>O(e.target.id), "coloring");
            break;
        default:
            c = f;
    }
    i.append("path").attr("d", Kt()).attr("stroke", c).attr("stroke-width", (e)=>Math.max(1, e.width));
    ad(undefined, l, 0, _);
}, "draw");
const renderer = {
    draw
};
const he = __1((t)=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "").replaceAll(/([\n\r])+/g, `
`).trim(), "prepareTextForParsing");
const fe = __1((t)=>`.label {
    font-family: ${t.fontFamily};
  }

  .node-labels {
    font-family: ${t.fontFamily};
  }

  /* Outlined label style - background stroke for better readability */
  .sankey-label-bg {
    stroke: ${t.mainBkg || t.background || "#fff"};
    stroke-width: 4px;
    stroke-linejoin: round;
    paint-order: stroke;
  }

  /* Foreground label text */
  .sankey-label-fg {
    fill: ${t.textColor};
  }

  /* Node styling */
  .node rect {
    shape-rendering: crispEdges;
  }

  /* Link styling */
  .link {
    fill: none;
    stroke-opacity: 0.5;
    mix-blend-mode: multiply;
  }
`, "getStyles");
const styles = fe;
const de = parser.parse.bind(parser);
parser.parse = (t)=>de(he(t));
export const diagram = {
    styles,
    parser,
    db,
    renderer
};
