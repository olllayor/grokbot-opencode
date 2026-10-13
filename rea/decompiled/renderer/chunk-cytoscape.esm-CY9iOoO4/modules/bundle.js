!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "88810b98-5f72-4f9c-921a-8d80816b9684";
            e._sentryDebugIdIdentifier = "sentry-dbid-88810b98-5f72-4f9c-921a-8d80816b9684";
        }
    } catch (e) {}
})();
function ks(r, e) {
    if (e == null || e > r.length) {
        e = r.length;
    }
    for(var t = 0, a = Array(e); t < e; t++){
        a[t] = r[t];
    }
    return a;
}
function jf(r) {
    if (Array.isArray(r)) {
        return r;
    }
}
function Cr(r, e) {
    let t = typeof Symbol !== "undefined" && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
        if (Array.isArray(r) || (t = Us(r)) || e) {
            if (t) {
                r = t;
            }
            let a = 0;
            const n = ()=>{};
            return {
                s: n,
                n () {
                    if (a >= r.length) {
                        return {
                            done: true
                        };
                    }
                    return {
                        done: false,
                        value: r[a++]
                    };
                },
                e (u) {
                    throw u;
                },
                f: n
            };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    let i;
    let s = true;
    let o = false;
    return {
        s () {
            t = t.call(r);
        },
        n () {
            const u = t.next();
            s = u.done;
            return u;
        },
        e (u) {
            o = true;
            i = u;
        },
        f () {
            try {
                if (!(s || t.return == null)) {
                    t.return();
                }
            } finally{
                if (o) {
                    throw i;
                }
            }
        }
    };
}
function Zl(r, e, t) {
    if ((e = Ql(e)) in r) {
        Object.defineProperty(r, e, {
            value: t,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        r[e] = t;
    }
    return r;
}
function ac(r, e) {
    let t = r == null ? null : typeof Symbol !== "undefined" && r[Symbol.iterator] || r["@@iterator"];
    if (t != null) {
        let a;
        let n;
        let i;
        let s;
        const o = [];
        let u = true;
        let l = false;
        try {
            i = (t = t.call(r)).next;
            if (e === 0) {
                if (Object(t) !== t) {
                    return;
                }
                u = false;
            } else {
                for(; !(u = (a = i.call(t)).done) && (o.push(a.value), o.length !== e); u = true);
            }
        } catch (error) {
            l = true;
            n = error;
        } finally{
            try {
                if (!u && t.return != null && (s = t.return(), Object(s) !== s)) {
                    return;
                }
            } finally{
                if (l) {
                    throw n;
                }
            }
        }
        return o;
    }
}
function nc() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qe(r, e) {
    return jf(r) || ac(r, e) || Us(r, e) || nc();
}
function sc(r, e) {
    if (typeof r !== "object" || !r) {
        return r;
    }
    const t = r[Symbol.toPrimitive];
    if (t !== undefined) {
        const a = t.call(r, e);
        if (typeof a !== "object") {
            return a;
        }
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(r);
}
function Ql(r) {
    const e = sc(r, "string");
    if (typeof e === "symbol") {
        return e;
    }
    return `${e}`;
}
function Us(r, e) {
    if (r) {
        if (typeof r === "string") {
            return ks(r, e);
        }
        let t = ({}).toString.call(r).slice(8, -1);
        if (t === "Object" && r.constructor) {
            t = r.constructor.name;
        }
        if (t === "Map" || t === "Set") {
            return Array.from(r);
        }
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) {
            return ks(r, e);
        }
        return undefined;
    }
}
const je = typeof window === "undefined" ? null : window;
const Eo = je ? je.navigator : null;
je && je.document;
const oc = typeof "";
const Jl = typeof {};
const uc = typeof (()=>{});
const lc = typeof HTMLElement === "undefined" ? "undefined" : typeof HTMLElement;
const Ra = (e)=>{
    if (e && e.instanceString && $e(e.instanceString)) {
        return e.instanceString();
    }
    return null;
};
const he = (e)=>e != null && typeof e == oc;
var $e = (e)=>e != null && typeof e === uc;
const Ve = (e)=>!Tr(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
const Me = (e)=>e != null && typeof e === Jl && !Ve(e) && e.constructor === Object;
const vc = (e)=>e != null && typeof e === Jl;
const ae = (e)=>e != null && typeof e === typeof 1 && !isNaN(e);
const fc = (e)=>ae(e) && Math.floor(e) === e;
const yn = (e)=>{
    if (lc !== "undefined") {
        return e != null && e instanceof HTMLElement;
    }
};
var Tr = (e)=>Ma(e) || jl(e);
var Ma = (e)=>Ra(e) === "collection" && e._private.single;
var jl = (e)=>Ra(e) === "collection" && !e._private.single;
const Ks = (e)=>Ra(e) === "core";
const ev = (e)=>Ra(e) === "stylesheet";
const cc = (e)=>Ra(e) === "event";
const ot = (e)=>{
    if (e == null) {
        return true;
    }
    return !!(e === "" || e.match(/^\s+$/));
};
const dc = (e)=>{
    if (typeof HTMLElement === "undefined") {
        return false;
    }
    return e instanceof HTMLElement;
};
const hc = (e)=>Me(e) && ae(e.x1) && ae(e.x2) && ae(e.y1) && ae(e.y2);
const gc = (e)=>vc(e) && $e(e.then);
const pc = ()=>Eo && Eo.userAgent.match(/msie|trident|edge/i);
const Yt = (e, t)=>{
    if (!t) {
        t = (...args)=>{
            if (args.length === 1) {
                return args[0];
            }
            if (args.length === 0) {
                return "undefined";
            }
            const i = [];
            for(let s = 0; s < args.length; s++){
                i.push(args[s]);
            }
            return i.join("$");
        };
    }
    const a = function() {
        const i = this;
        const s = arguments;
        let o;
        const u = t.apply(i, s);
        const a_cache = a.cache;
        if (!(o = a_cache[u])) {
            o = a_cache[u] = e.apply(i, s);
        }
        return o;
    };
    a.cache = {};
    return a;
};
const Xs = Yt((r)=>r.replace(/([A-Z])/g, (e)=>`-${e.toLowerCase()}`));
const An = Yt((r)=>r.replace(/(-\w)/g, (e)=>e[1].toUpperCase()));
const rv = Yt((r, e)=>r + e[0].toUpperCase() + e.substring(1), (r, e)=>`${r}\$${e}`);
const Co = (e)=>{
    if (ot(e)) {
        return e;
    }
    return e.charAt(0).toUpperCase() + e.substring(1);
};
const tt = (e, t)=>e.slice(-1 * t.length) === t;
const number = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))";
const yc = `rgb[a]?\\((${number}[%]?)\\s*,\\s*(${number}[%]?)\\s*,\\s*(${number}[%]?)(?:\\s*,\\s*(${number}))?\\)`;
const mc = `rgb[a]?\\((?:${number}[%]?)\\s*,\\s*(?:${number}[%]?)\\s*,\\s*(?:${number}[%]?)(?:\\s*,\\s*(?:${number}))?\\)`;
const bc = `hsl[a]?\\((${number})\\s*,\\s*(${number}[%])\\s*,\\s*(${number}[%])(?:\\s*,\\s*(${number}))?\\)`;
const wc = `hsl[a]?\\((?:${number})\\s*,\\s*(?:${number}[%])\\s*,\\s*(?:${number}[%])(?:\\s*,\\s*(?:${number}))?\\)`;
const xc = "\\#[0-9a-fA-F]{3}";
const Ec = "\\#[0-9a-fA-F]{6}";
const tv = (e, t)=>{
    if (e < t) {
        return -1;
    }
    if (e > t) {
        return 1;
    }
    return 0;
};
const Cc = (selector, t)=>-1 * tv(selector, t);
const ye = Object.assign != null ? Object.assign.bind(Object) : function(r) {
    for(let e = arguments, t = 1; t < e.length; t++){
        const a = e[t];
        if (a != null) {
            for(let n = Object.keys(a), i = 0; i < n.length; i++){
                const s = n[i];
                r[s] = a[s];
            }
        }
    }
    return r;
};
const Tc = (e)=>{
    if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
        const t = e.length === 4;
        let a;
        let n;
        let i;
        const s = 16;
        if (t) {
            a = parseInt(e[1] + e[1], s);
            n = parseInt(e[2] + e[2], s);
            i = parseInt(e[3] + e[3], s);
        } else {
            a = parseInt(e[1] + e[2], s);
            n = parseInt(e[3] + e[4], s);
            i = parseInt(e[5] + e[6], s);
        }
        return [
            a,
            n,
            i
        ];
    }
};
const Sc = (e)=>{
    let t;
    let a;
    let n;
    let i;
    let s;
    let o;
    let u;
    let l;
    function v(d, y, g) {
        if (g < 0) {
            g += 1;
        }
        if (g > 1) {
            g -= 1;
        }
        if (g < 1 / 6) {
            return d + (y - d) * 6 * g;
        }
        if (g < 1 / 2) {
            return y;
        }
        if (g < 2 / 3) {
            return d + (y - d) * (2 / 3 - g) * 6;
        }
        return d;
    }
    const f = new RegExp(`^${bc}\$`).exec(e);
    if (f) {
        a = parseInt(f[1]);
        if (a < 0) {
            a = (360 - -1 * a % 360) % 360;
        } else if (a > 360) {
            a = a % 360;
        }
        a /= 360;
        n = parseFloat(f[2]);
        if (n < 0 || n > 100 || (n = n / 100, i = parseFloat(f[3]), i < 0 || i > 100) || (i = i / 100, s = f[4], s !== undefined && (s = parseFloat(s), s < 0 || s > 1))) {
            return;
        }
        if (n === 0) {
            o = u = l = Math.round(i * 255);
        } else {
            const c = i < 0.5 ? i * (1 + n) : i + n - i * n;
            const h = 2 * i - c;
            o = Math.round(255 * v(h, c, a + 1 / 3));
            u = Math.round(255 * v(h, c, a));
            l = Math.round(255 * v(h, c, a - 1 / 3));
        }
        t = [
            o,
            u,
            l,
            s
        ];
    }
    return t;
};
const kc = (e)=>{
    let t;
    const a = new RegExp(`^${yc}\$`).exec(e);
    if (a) {
        t = [];
        const n = [];
        for(let i = 1; i <= 3; i++){
            let s = a[i];
            if (s[s.length - 1] === "%") {
                n[i] = true;
            }
            s = parseFloat(s);
            if (n[i]) {
                s = s / 100 * 255;
            }
            if (s < 0 || s > 255) {
                return;
            }
            t.push(Math.floor(s));
        }
        const o = n[1] || n[2] || n[3];
        const u = n[1] && n[2] && n[3];
        if (o && !u) {
            return;
        }
        let l = a[4];
        if (l !== undefined) {
            l = parseFloat(l);
            if (l < 0 || l > 1) {
                return;
            }
            t.push(l);
        }
    }
    return t;
};
const Dc = (e)=>Bc[e.toLowerCase()];
const av = (e)=>(Ve(e) ? e : null) || Dc(e) || Tc(e) || kc(e) || Sc(e);
var Bc = {
    transparent: [
        0,
        0,
        0,
        0
    ],
    aliceblue: [
        240,
        248,
        255
    ],
    antiquewhite: [
        250,
        235,
        215
    ],
    aqua: [
        0,
        255,
        255
    ],
    aquamarine: [
        127,
        255,
        212
    ],
    azure: [
        240,
        255,
        255
    ],
    beige: [
        245,
        245,
        220
    ],
    bisque: [
        255,
        228,
        196
    ],
    black: [
        0,
        0,
        0
    ],
    blanchedalmond: [
        255,
        235,
        205
    ],
    blue: [
        0,
        0,
        255
    ],
    blueviolet: [
        138,
        43,
        226
    ],
    brown: [
        165,
        42,
        42
    ],
    burlywood: [
        222,
        184,
        135
    ],
    cadetblue: [
        95,
        158,
        160
    ],
    chartreuse: [
        127,
        255,
        0
    ],
    chocolate: [
        210,
        105,
        30
    ],
    coral: [
        255,
        127,
        80
    ],
    cornflowerblue: [
        100,
        149,
        237
    ],
    cornsilk: [
        255,
        248,
        220
    ],
    crimson: [
        220,
        20,
        60
    ],
    cyan: [
        0,
        255,
        255
    ],
    darkblue: [
        0,
        0,
        139
    ],
    darkcyan: [
        0,
        139,
        139
    ],
    darkgoldenrod: [
        184,
        134,
        11
    ],
    darkgray: [
        169,
        169,
        169
    ],
    darkgreen: [
        0,
        100,
        0
    ],
    darkgrey: [
        169,
        169,
        169
    ],
    darkkhaki: [
        189,
        183,
        107
    ],
    darkmagenta: [
        139,
        0,
        139
    ],
    darkolivegreen: [
        85,
        107,
        47
    ],
    darkorange: [
        255,
        140,
        0
    ],
    darkorchid: [
        153,
        50,
        204
    ],
    darkred: [
        139,
        0,
        0
    ],
    darksalmon: [
        233,
        150,
        122
    ],
    darkseagreen: [
        143,
        188,
        143
    ],
    darkslateblue: [
        72,
        61,
        139
    ],
    darkslategray: [
        47,
        79,
        79
    ],
    darkslategrey: [
        47,
        79,
        79
    ],
    darkturquoise: [
        0,
        206,
        209
    ],
    darkviolet: [
        148,
        0,
        211
    ],
    deeppink: [
        255,
        20,
        147
    ],
    deepskyblue: [
        0,
        191,
        255
    ],
    dimgray: [
        105,
        105,
        105
    ],
    dimgrey: [
        105,
        105,
        105
    ],
    dodgerblue: [
        30,
        144,
        255
    ],
    firebrick: [
        178,
        34,
        34
    ],
    floralwhite: [
        255,
        250,
        240
    ],
    forestgreen: [
        34,
        139,
        34
    ],
    fuchsia: [
        255,
        0,
        255
    ],
    gainsboro: [
        220,
        220,
        220
    ],
    ghostwhite: [
        248,
        248,
        255
    ],
    gold: [
        255,
        215,
        0
    ],
    goldenrod: [
        218,
        165,
        32
    ],
    gray: [
        128,
        128,
        128
    ],
    grey: [
        128,
        128,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    greenyellow: [
        173,
        255,
        47
    ],
    honeydew: [
        240,
        255,
        240
    ],
    hotpink: [
        255,
        105,
        180
    ],
    indianred: [
        205,
        92,
        92
    ],
    indigo: [
        75,
        0,
        130
    ],
    ivory: [
        255,
        255,
        240
    ],
    khaki: [
        240,
        230,
        140
    ],
    lavender: [
        230,
        230,
        250
    ],
    lavenderblush: [
        255,
        240,
        245
    ],
    lawngreen: [
        124,
        252,
        0
    ],
    lemonchiffon: [
        255,
        250,
        205
    ],
    lightblue: [
        173,
        216,
        230
    ],
    lightcoral: [
        240,
        128,
        128
    ],
    lightcyan: [
        224,
        255,
        255
    ],
    lightgoldenrodyellow: [
        250,
        250,
        210
    ],
    lightgray: [
        211,
        211,
        211
    ],
    lightgreen: [
        144,
        238,
        144
    ],
    lightgrey: [
        211,
        211,
        211
    ],
    lightpink: [
        255,
        182,
        193
    ],
    lightsalmon: [
        255,
        160,
        122
    ],
    lightseagreen: [
        32,
        178,
        170
    ],
    lightskyblue: [
        135,
        206,
        250
    ],
    lightslategray: [
        119,
        136,
        153
    ],
    lightslategrey: [
        119,
        136,
        153
    ],
    lightsteelblue: [
        176,
        196,
        222
    ],
    lightyellow: [
        255,
        255,
        224
    ],
    lime: [
        0,
        255,
        0
    ],
    limegreen: [
        50,
        205,
        50
    ],
    linen: [
        250,
        240,
        230
    ],
    magenta: [
        255,
        0,
        255
    ],
    maroon: [
        128,
        0,
        0
    ],
    mediumaquamarine: [
        102,
        205,
        170
    ],
    mediumblue: [
        0,
        0,
        205
    ],
    mediumorchid: [
        186,
        85,
        211
    ],
    mediumpurple: [
        147,
        112,
        219
    ],
    mediumseagreen: [
        60,
        179,
        113
    ],
    mediumslateblue: [
        123,
        104,
        238
    ],
    mediumspringgreen: [
        0,
        250,
        154
    ],
    mediumturquoise: [
        72,
        209,
        204
    ],
    mediumvioletred: [
        199,
        21,
        133
    ],
    midnightblue: [
        25,
        25,
        112
    ],
    mintcream: [
        245,
        255,
        250
    ],
    mistyrose: [
        255,
        228,
        225
    ],
    moccasin: [
        255,
        228,
        181
    ],
    navajowhite: [
        255,
        222,
        173
    ],
    navy: [
        0,
        0,
        128
    ],
    oldlace: [
        253,
        245,
        230
    ],
    olive: [
        128,
        128,
        0
    ],
    olivedrab: [
        107,
        142,
        35
    ],
    orange: [
        255,
        165,
        0
    ],
    orangered: [
        255,
        69,
        0
    ],
    orchid: [
        218,
        112,
        214
    ],
    palegoldenrod: [
        238,
        232,
        170
    ],
    palegreen: [
        152,
        251,
        152
    ],
    paleturquoise: [
        175,
        238,
        238
    ],
    palevioletred: [
        219,
        112,
        147
    ],
    papayawhip: [
        255,
        239,
        213
    ],
    peachpuff: [
        255,
        218,
        185
    ],
    peru: [
        205,
        133,
        63
    ],
    pink: [
        255,
        192,
        203
    ],
    plum: [
        221,
        160,
        221
    ],
    powderblue: [
        176,
        224,
        230
    ],
    purple: [
        128,
        0,
        128
    ],
    red: [
        255,
        0,
        0
    ],
    rosybrown: [
        188,
        143,
        143
    ],
    royalblue: [
        65,
        105,
        225
    ],
    saddlebrown: [
        139,
        69,
        19
    ],
    salmon: [
        250,
        128,
        114
    ],
    sandybrown: [
        244,
        164,
        96
    ],
    seagreen: [
        46,
        139,
        87
    ],
    seashell: [
        255,
        245,
        238
    ],
    sienna: [
        160,
        82,
        45
    ],
    silver: [
        192,
        192,
        192
    ],
    skyblue: [
        135,
        206,
        235
    ],
    slateblue: [
        106,
        90,
        205
    ],
    slategray: [
        112,
        128,
        144
    ],
    slategrey: [
        112,
        128,
        144
    ],
    snow: [
        255,
        250,
        250
    ],
    springgreen: [
        0,
        255,
        127
    ],
    steelblue: [
        70,
        130,
        180
    ],
    tan: [
        210,
        180,
        140
    ],
    teal: [
        0,
        128,
        128
    ],
    thistle: [
        216,
        191,
        216
    ],
    tomato: [
        255,
        99,
        71
    ],
    turquoise: [
        64,
        224,
        208
    ],
    violet: [
        238,
        130,
        238
    ],
    wheat: [
        245,
        222,
        179
    ],
    white: [
        255,
        255,
        255
    ],
    whitesmoke: [
        245,
        245,
        245
    ],
    yellow: [
        255,
        255,
        0
    ],
    yellowgreen: [
        154,
        205,
        50
    ]
};
const nv = (e)=>{
    let e_map = e.map;
    const e_keys = e.keys;
    for(let n = e_keys.length, i = 0; i < n; i++){
        const s = e_keys[i];
        if (Me(s)) {
            throw Error("Tried to set map with object key");
        }
        if (i < e_keys.length - 1) {
            if (e_map[s] == null) {
                e_map[s] = {};
            }
            e_map = e_map[s];
        } else {
            e_map[s] = e.value;
        }
    }
};
const iv = ({ map, keys })=>{
    for(let n = keys.length, i = 0; i < n; i++){
        const s = keys[i];
        if (Me(s)) {
            throw Error("Tried to get map with object key");
        }
        map = map[s];
        if (map == null) {
            return map;
        }
    }
    return map;
};
const $a = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function La(r) {
    if (r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")) {
        return r.default;
    }
    return r;
}
let Zn;
let To;
function Ia() {
    if (To) {
        return Zn;
    }
    To = 1;
    function r(e) {
        const t = typeof e;
        return e != null && (t == "object" || t == "function");
    }
    Zn = r;
    return Zn;
}
let Qn;
let So;
function Pc() {
    if (So) {
        return Qn;
    }
    So = 1;
    const r = typeof $a === "object" && $a && $a.Object === Object && $a;
    Qn = r;
    return Qn;
}
let Jn;
let ko;
function Rn() {
    if (ko) {
        return Jn;
    }
    ko = 1;
    const r = Pc();
    const e = typeof self === "object" && self && self.Object === Object && self;
    const t = r || e || Function("return this")();
    Jn = t;
    return Jn;
}
let jn;
let Do;
function Ac() {
    if (Do) {
        return jn;
    }
    Do = 1;
    const r = Rn();
    const e = ()=>r.Date.now();
    jn = e;
    return jn;
}
let ei;
let Bo;
function Rc() {
    if (Bo) {
        return ei;
    }
    Bo = 1;
    const r = /\s/;
    function e(t) {
        for(var a = t.length; a-- && r.test(t.charAt(a)););
        return a;
    }
    ei = e;
    return ei;
}
let ri;
let Po;
function Mc() {
    if (Po) {
        return ri;
    }
    Po = 1;
    const r = Rc();
    const e = /^\s+/;
    function t(a) {
        return a && a.slice(0, r(a) + 1).replace(e, "");
    }
    ri = t;
    return ri;
}
let ti;
let Ao;
function Ys() {
    if (Ao) {
        return ti;
    }
    Ao = 1;
    const r = Rn();
    const r_Symbol = r.Symbol;
    ti = r_Symbol;
    return ti;
}
let ai;
let Ro;
function Lc() {
    if (Ro) {
        return ai;
    }
    Ro = 1;
    const r = Ys();
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const toString = Object.prototype.toString;
    const n = r ? r.toStringTag : undefined;
    function i(s) {
        const o = hasOwnProperty.call(s, n);
        const u = s[n];
        try {
            s[n] = undefined;
            var l = true;
        } catch  {}
        const v = toString.call(s);
        l && (o ? s[n] = u : delete s[n]);
        return v;
    }
    ai = i;
    return ai;
}
let ni;
let Mo;
function Ic() {
    if (Mo) {
        return ni;
    }
    Mo = 1;
    const toString = Object.prototype.toString;
    function t(a) {
        return toString.call(a);
    }
    ni = t;
    return ni;
}
let ii;
let Lo;
function sv() {
    if (Lo) {
        return ii;
    }
    Lo = 1;
    const r = Ys();
    const e = Lc();
    const t = Ic();
    const a = "[object Null]";
    const n = "[object Undefined]";
    const i = r ? r.toStringTag : undefined;
    function s(o) {
        if (o == null) {
            if (o === undefined) {
                return n;
            }
            return a;
        }
        if (i && i in Object(o)) {
            return e(o);
        }
        return t(o);
    }
    ii = s;
    return ii;
}
let si;
let Io;
function Oc() {
    if (Io) {
        return si;
    }
    Io = 1;
    function r(e) {
        return e != null && typeof e === "object";
    }
    si = r;
    return si;
}
let oi;
let Oo;
function Oa() {
    if (Oo) {
        return oi;
    }
    Oo = 1;
    const r = sv();
    const e = Oc();
    const t = "[object Symbol]";
    function a(n) {
        return typeof n === "symbol" || e(n) && r(n) == t;
    }
    oi = a;
    return oi;
}
let ui;
let No;
function Nc() {
    if (No) {
        return ui;
    }
    No = 1;
    const r = Mc();
    const e = Ia();
    const t = Oa();
    const a = NaN;
    const n = /^[-+]0x[0-9a-f]+$/i;
    const i = /^0b[01]+$/i;
    const s = /^0o[0-7]+$/i;
    const o = parseInt;
    function u(l) {
        if (typeof l === "number") {
            return l;
        }
        if (t(l)) {
            return a;
        }
        if (e(l)) {
            const v = typeof l.valueOf === "function" ? l.valueOf() : l;
            l = e(v) ? `${v}` : v;
        }
        if (typeof l !== "string") {
            if (l === 0) {
                return l;
            }
            return +l;
        }
        l = r(l);
        const f = i.test(l);
        if (f || s.test(l)) {
            return o(l.slice(2), f ? 2 : 8);
        }
        if (n.test(l)) {
            return a;
        }
        return +l;
    }
    ui = u;
    return ui;
}
let li;
let zo;
function zc() {
    if (zo) {
        return li;
    }
    zo = 1;
    const r = Ia();
    const e = Ac();
    const t = Nc();
    const a = "Expected a function";
    function s(o, u, l) {
        let v;
        let f;
        let c;
        let h;
        let d;
        let y;
        let g = 0;
        let p = false;
        let m = false;
        let b = true;
        if (typeof o !== "function") {
            throw new TypeError(a);
        }
        u = t(u) || 0;
        if (r(l)) {
            p = !!l.leading;
            m = "maxWait" in l;
            c = m ? Math.max(t(l.maxWait) || 0, u) : c;
            b = "trailing" in l ? !!l.trailing : b;
        }
        function w(A) {
            const R = v;
            const L = f;
            f = undefined;
            v = undefined;
            g = A;
            h = o.apply(L, R);
            return h;
        }
        function E(A) {
            g = A;
            d = setTimeout(T, u);
            if (p) {
                return w(A);
            }
            return h;
        }
        function C(A) {
            const R = A - y;
            const L = A - g;
            const I = u - R;
            if (m) {
                return Math.min(I, c - L);
            }
            return I;
        }
        function x(A) {
            const R = A - y;
            const L = A - g;
            return y === undefined || R >= u || R < 0 || m && L >= c;
        }
        function T() {
            const A = e();
            if (x(A)) {
                return k(A);
            }
            d = setTimeout(T, C(A));
        }
        function k(A) {
            d = undefined;
            if (b && v) {
                return w(A);
            }
            f = undefined;
            v = undefined;
            return h;
        }
        function D() {
            if (d !== undefined) {
                clearTimeout(d);
            }
            g = 0;
            d = undefined;
            f = undefined;
            y = undefined;
            v = undefined;
        }
        function B() {
            if (d === undefined) {
                return h;
            }
            return k(e());
        }
        function P() {
            const A = e();
            const R = x(A);
            v = arguments;
            f = this;
            y = A;
            if (R) {
                if (d === undefined) {
                    return E(y);
                }
                if (m) {
                    clearTimeout(d);
                    d = setTimeout(T, u);
                    return w(y);
                }
            }
            if (d === undefined) {
                d = setTimeout(T, u);
            }
            return h;
        }
        P.cancel = D;
        P.flush = B;
        return P;
    }
    li = s;
    return li;
}
const Fc = zc();
const Na = La(Fc);
const vi = je ? je.performance : null;
const ov = vi && vi.now ? ()=>vi.now() : ()=>Date.now();
const Vc = (()=>{
    if (je) {
        if (je.requestAnimationFrame) {
            return (r)=>{
                je.requestAnimationFrame(r);
            };
        }
        if (je.mozRequestAnimationFrame) {
            return (r)=>{
                je.mozRequestAnimationFrame(r);
            };
        }
        if (je.webkitRequestAnimationFrame) {
            return (r)=>{
                je.webkitRequestAnimationFrame(r);
            };
        }
        if (je.msRequestAnimationFrame) {
            return (r)=>{
                je.msRequestAnimationFrame(r);
            };
        }
    }
    return (r)=>{
        if (r) {
            setTimeout(()=>{
                r(ov());
            }, 1000 / 60);
        }
    };
})();
const mn = (e)=>Vc(e);
const Xr = ov;
const Ct = 9261;
const uv = 65599;
const _t = 5381;
const lv = (e, t = Ct)=>{
    let a = t;
    for(let n; n = e.next(), !n.done;){
        a = a * uv + n.value | 0;
    }
    return a;
};
const xa = (e, t = Ct)=>t * uv + e | 0;
const Ea = (e, t = _t)=>(t << 5) + t + e | 0;
const qc = (e, t)=>e * 2097152 + t;
const jr = (e)=>e[0] * 2097152 + e[1];
const Ua = (e, t)=>[
        xa(e[0], t[0]),
        Ea(e[1], t[1])
    ];
const Fo = (e, t)=>{
    const a = {
        value: 0,
        done: false
    };
    let n = 0;
    const e_length = e.length;
    const s = {
        next () {
            if (n < e_length) {
                a.value = e[n++];
            } else {
                a.done = true;
            }
            return a;
        }
    };
    return lv(s, t);
};
const kt = (e, t)=>{
    const a = {
        value: 0,
        done: false
    };
    let n = 0;
    const e_length = e.length;
    const s = {
        next () {
            if (n < e_length) {
                a.value = e.charCodeAt(n++);
            } else {
                a.done = true;
            }
            return a;
        }
    };
    return lv(s, t);
};
const vv = function() {
    return _c(arguments);
};
var _c = (e)=>{
    let t;
    for(let a = 0; a < e.length; a++){
        const n = e[a];
        if (a === 0) {
            t = kt(n);
        } else {
            t = kt(n, t);
        }
    }
    return t;
};
function Gc(r, e, t, a, n) {
    const i = n * Math.PI / 180;
    const s = Math.cos(i) * (r - t) - Math.sin(i) * (e - a) + t;
    const o = Math.sin(i) * (r - t) + Math.cos(i) * (e - a) + a;
    return {
        x: s,
        y: o
    };
}
const Hc = (e, t, a, n, i, s)=>({
        x: (e - a) * i + a,
        y: (t - n) * s + n
    });
function Wc(r, e, t) {
    if (t === 0) {
        return r;
    }
    const a = (e.x1 + e.x2) / 2;
    const n = (e.y1 + e.y2) / 2;
    const i = e.w / e.h;
    const s = 1 / i;
    const o = Gc(r.x, r.y, a, n, t);
    const u = Hc(o.x, o.y, a, n, i, s);
    return {
        x: u.x,
        y: u.y
    };
}
let Vo = true;
const $c = console.warn != null;
const Uc = console.trace != null;
const Zs = Number.MAX_SAFE_INTEGER || 9007199254740991;
const fv = ()=>true;
const bn = ()=>false;
const qo = ()=>0;
const Qs = ()=>{};
const He = (e)=>{
    throw new Error(e);
};
const cv = (e)=>{
    if (e !== undefined) {
        Vo = !!e;
    } else {
        return Vo;
    }
};
const ze = (e)=>{
    cv() && ($c ? console.warn(e) : (console.log(e), Uc && console.trace()));
};
const Kc = (e)=>ye({}, e);
const qr = (e)=>{
    if (e == null) {
        return e;
    }
    if (Ve(e)) {
        return e.slice();
    }
    if (Me(e)) {
        return Kc(e);
    }
    return e;
};
const Xc = (listeners)=>listeners.slice();
const dv = (e, t)=>{
    for(t = e = ""; e++ < 36; t += e * 51 & 52 ? (e ^ 15 ? 8 ^ Math.random() * (e ^ 20 ? 16 : 4) : 4).toString(16) : "-");
    return t;
};
const Yc = {};
const vr = (e)=>{
    const t = Object.keys(e);
    return (a)=>{
        const n = {};
        for (const s of t){
            const o = a?.[s];
            n[s] = o === undefined ? e[s] : o;
        }
        return n;
    };
};
const ut = (e, t, a)=>{
    for(let n = e.length - 1; n >= 0; n--){
        if (e[n] === t) {
            e.splice(n, 1);
        }
    }
};
const Js = (e)=>{
    e.splice(0, e.length);
};
const Zc = (e, t)=>{
    for (const n of t){
        e.push(n);
    }
};
const xr = (e, t, a)=>{
    if (a) {
        t = rv(a, t);
    }
    return e[t];
};
const Ur = (e, t, a, n)=>{
    if (a) {
        t = rv(a, t);
    }
    e[t] = n;
};
class Qc {
    constructor(){
        this._obj = {};
    }
    set(t, a) {
        this._obj[t] = a;
        return this;
    }
    delete(t) {
        this._obj[t] = undefined;
        return this;
    }
    clear() {
        this._obj = {};
    }
    has(t) {
        return this._obj[t] !== undefined;
    }
    get(t) {
        return this._obj[t];
    }
}
const Kr = typeof Map !== "undefined" ? Map : Qc;
const Jc = "undefined";
class jc {
    constructor(e){
        this._obj = Object.create(null);
        this.size = 0;
        if (e != null) {
            var t;
            if (e.instanceString != null && e.instanceString() === this.instanceString()) {
                t = e.toArray();
            } else {
                t = e;
            }
            for(var a = 0; a < t.length; a++){
                this.add(t[a]);
            }
        }
    }
    instanceString() {
        return "set";
    }
    add(t) {
        const _obj = this._obj;
        if (_obj[t] !== 1) {
            _obj[t] = 1;
            this.size++;
        }
    }
    delete(t) {
        const _obj = this._obj;
        if (_obj[t] === 1) {
            _obj[t] = 0;
            this.size--;
        }
    }
    clear() {
        this._obj = Object.create(null);
    }
    has(t) {
        return this._obj[t] === 1;
    }
    toArray() {
        const t = this;
        return Object.keys(this._obj).filter((a)=>t.has(a));
    }
    forEach(t, a) {
        return this.toArray().forEach(t, a);
    }
}
const jt = (typeof Set === "undefined" ? "undefined" : typeof Set) !== Jc ? Set : jc;
const Mn = function(e, t, a = true) {
    if (e === undefined || t === undefined || !Ks(e)) {
        He("An element must have a core reference and parameters set");
        return;
    }
    let t_group = t.group;
    t_group == null && (t.data && t.data.source != null && t.data.target != null ? t_group = "edges" : t_group = "nodes");
    if (t_group !== "nodes" && t_group !== "edges") {
        He(`An element must be of type \`nodes\` or \`edges\`; you specified \`${t_group}\``);
        return;
    }
    this.length = 1;
    this[0] = this;
    const i = this._private = {
        cy: e,
        single: true,
        data: t.data || {},
        position: t.position || {
            x: 0,
            y: 0
        },
        autoWidth: undefined,
        autoHeight: undefined,
        autoPadding: undefined,
        compoundBoundsClean: false,
        listeners: [],
        group: t_group,
        style: {},
        rstyle: {},
        styleCxts: [],
        styleKeys: {},
        removed: true,
        selected: !!t.selected,
        selectable: t.selectable === undefined ? true : !!t.selectable,
        locked: !!t.locked,
        grabbed: false,
        grabbable: t.grabbable === undefined ? true : !!t.grabbable,
        pannable: t.pannable === undefined ? t_group === "edges" : !!t.pannable,
        active: false,
        classes: new jt,
        animation: {
            current: [],
            queue: []
        },
        rscratch: {},
        scratch: t.scratch || {},
        edges: [],
        children: [],
        parent: t.parent && t.parent.isNode() ? t.parent : null,
        traversalCache: {},
        backgrounding: false,
        bbCache: null,
        bbCacheShift: {
            x: 0,
            y: 0
        },
        bodyBounds: null,
        overlayBounds: null,
        labelBounds: {
            all: null,
            source: null,
            target: null,
            main: null
        },
        arrowBounds: {
            source: null,
            target: null,
            "mid-source": null,
            "mid-target": null
        }
    };
    if (i.position.x == null) {
        i.position.x = 0;
    }
    if (i.position.y == null) {
        i.position.y = 0;
    }
    if (t.renderedPosition) {
        const s = t.renderedPosition;
        const o = e.pan();
        const u = e.zoom();
        i.position = {
            x: (s.x - o.x) / u,
            y: (s.y - o.y) / u
        };
    }
    let l = [];
    if (Ve(t.classes)) {
        l = t.classes;
    } else if (he(t.classes)) {
        l = t.classes.split(/\s+/);
    }
    for(let v = 0, f = l.length; v < f; v++){
        const c = l[v];
        if (!(!c || c === "")) {
            i.classes.add(c);
        }
    }
    this.createEmitter();
    if (a === undefined || a) {
        this.restore();
    }
    const h = t.style || t.css;
    if (h) {
        ze("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead.");
        this.style(h);
    }
};
const _o = (e)=>{
    e = {
        bfs: e.bfs || !e.dfs,
        dfs: e.dfs || !e.bfs
    };
    return function(a, n, i) {
        let s;
        if (Me(a) && !Tr(a)) {
            s = a;
            a = s.roots || s.root;
            n = s.visit;
            i = s.directed;
        }
        i = arguments.length === 2 && !$e(n) ? n : i;
        n = $e(n) ? n : ()=>{};
        const o = this._private.cy;
        let y;
        for(var u = a = he(a) ? this.filter(a) : a, l = [], v = [], f = {}, c = {}, h = {}, d = 0, g = this.byGroup(), p = g.nodes, m = g.edges, b = 0; b < u.length; b++){
            const w = u[b];
            const E = w.id();
            if (w.isNode()) {
                l.unshift(w);
                if (e.bfs) {
                    h[E] = true;
                    v.push(w);
                }
                c[E] = 0;
            }
        }
        for(let C = ()=>{
            const A = e.bfs ? l.shift() : l.pop();
            const R = A.id();
            if (e.dfs) {
                if (h[R]) {
                    return 0;
                }
                h[R] = true;
                v.push(A);
            }
            const L = c[R];
            const I = f[R];
            const M = I != null ? I.source() : null;
            const O = I != null ? I.target() : null;
            const q = I == null ? undefined : A.same(M) ? O[0] : M[0];
            let _;
            _ = n(A, I, q, d++, L);
            if (_ === true) {
                y = A;
                return 1;
            }
            if (_ === false) {
                return 1;
            }
            for(let N = A.connectedEdges().filter((j)=>(!i || j.source().same(A)) && m.has(j)), F = 0; F < N.length; F++){
                const U = N[F];
                let J = U.connectedNodes().filter((j)=>!j.same(A) && p.has(j));
                const Z = J.id();
                if (J.length !== 0 && !h[Z]) {
                    J = J[0];
                    l.push(J);
                    if (e.bfs) {
                        h[Z] = true;
                        v.push(J);
                    }
                    f[Z] = U;
                    c[Z] = c[R] + 1;
                }
            }
        }, x; l.length !== 0 && (x = C(), !(x !== 0 && x === 1)););
        const T = o.collection();
        for (const D of v){
            const B = f[D.id()];
            if (B != null) {
                T.push(B);
            }
            T.push(D);
        }
        return {
            path: o.collection(T),
            found: o.collection(y)
        };
    };
};
const Ca = {
    breadthFirstSearch: _o({
        bfs: true
    }),
    depthFirstSearch: _o({
        dfs: true
    })
};
Ca.bfs = Ca.breadthFirstSearch;
Ca.dfs = Ca.depthFirstSearch;
const nn = {
    exports: {}
};
const nn_exports = nn.exports;
let Go;
function rd() {
    if (!Go) {
        Go = 1;
        ((r, e)=>{
            (function() {
                let t;
                let a;
                let n;
                let i;
                let s;
                let o;
                let u;
                let l;
                let v;
                let f;
                let c;
                let h;
                let d;
                let y;
                let g;
                n = Math.floor;
                f = Math.min;
                a = (p, m)=>{
                    if (p < m) {
                        return -1;
                    }
                    if (p > m) {
                        return 1;
                    }
                    return 0;
                };
                v = (p, m, b, w, E)=>{
                    let C;
                    if (b == null) {
                        b = 0;
                    }
                    if (E == null) {
                        E = a;
                    }
                    if (b < 0) {
                        throw new Error("lo must be non-negative");
                    }
                    for(w == null && (w = p.length); b < w;){
                        C = n((b + w) / 2);
                        if (E(m, p[C]) < 0) {
                            w = C;
                        } else {
                            b = C + 1;
                        }
                    }
                    [].splice.apply(p, [
                        b,
                        b - b
                    ].concat(m));
                    return m;
                };
                o = (p, m, b)=>{
                    if (b == null) {
                        b = a;
                    }
                    p.push(m);
                    return y(p, 0, p.length - 1, b);
                };
                s = (p, m)=>{
                    let b;
                    let w;
                    if (m == null) {
                        m = a;
                    }
                    b = p.pop();
                    if (p.length) {
                        w = p[0];
                        p[0] = b;
                        g(p, 0, m);
                    } else {
                        w = b;
                    }
                    return w;
                };
                l = (p, m, b)=>{
                    let w;
                    if (b == null) {
                        b = a;
                    }
                    w = p[0];
                    p[0] = m;
                    g(p, 0, b);
                    return w;
                };
                u = (p, m, b)=>{
                    let w;
                    if (b == null) {
                        b = a;
                    }
                    if (p.length && b(p[0], m) < 0) {
                        w = [
                            p[0],
                            m
                        ];
                        m = w[0];
                        p[0] = w[1];
                        g(p, 0, b);
                    }
                    return m;
                };
                i = function(p, m) {
                    let b;
                    let w;
                    let E;
                    let C;
                    let x;
                    let T;
                    if (m == null) {
                        m = a;
                    }
                    C = (()=>{
                        T = [];
                        for(let k = 0, D = n(p.length / 2); D >= 0 ? k < D : k > D; D >= 0 ? k++ : k--){
                            T.push(k);
                        }
                        return T;
                    }).apply(this).reverse();
                    x = [];
                    w = 0;
                    for(E = C.length; w < E; w++){
                        b = C[w];
                        x.push(g(p, b, m));
                    }
                    return x;
                };
                d = (p, m, b)=>{
                    let w;
                    if (b == null) {
                        b = a;
                    }
                    w = p.indexOf(m);
                    if (w !== -1) {
                        y(p, 0, w, b);
                        return g(p, w, b);
                    }
                };
                c = (p, m, b)=>{
                    let w;
                    let E;
                    let C;
                    let x;
                    let T;
                    if (b == null) {
                        b = a;
                    }
                    E = p.slice(0, m);
                    if (!E.length) {
                        return E;
                    }
                    i(E, b);
                    T = p.slice(m);
                    C = 0;
                    for(x = T.length; C < x; C++){
                        w = T[C];
                        u(E, w, b);
                    }
                    return E.sort(b).reverse();
                };
                h = (p, m, b)=>{
                    let w;
                    let E;
                    let C;
                    let x;
                    let T;
                    let k;
                    let D;
                    let B;
                    let P;
                    if (b == null) {
                        b = a;
                    }
                    if (m * 10 <= p.length) {
                        C = p.slice(0, m).sort(b);
                        if (!C.length) {
                            return C;
                        }
                        E = C[C.length - 1];
                        D = p.slice(m);
                        x = 0;
                        for(k = D.length; x < k; x++){
                            w = D[x];
                            if (b(w, E) < 0) {
                                v(C, w, 0, null, b);
                                C.pop();
                                E = C[C.length - 1];
                            }
                        }
                        return C;
                    }
                    i(p, b);
                    P = [];
                    T = 0;
                    for(B = f(m, p.length); B >= 0 ? T < B : T > B; B >= 0 ? ++T : --T){
                        P.push(s(p, b));
                    }
                    return P;
                };
                y = (p, m, b, w)=>{
                    let E;
                    let C;
                    let x;
                    if (w == null) {
                        w = a;
                    }
                    for(E = p[b]; b > m;){
                        x = b - 1 >> 1;
                        C = p[x];
                        if (w(E, C) < 0) {
                            p[b] = C;
                            b = x;
                            continue;
                        }
                        break;
                    }
                    return p[b] = E;
                };
                g = (p, m, b)=>{
                    let w;
                    let E;
                    let C;
                    let x;
                    let T;
                    if (b == null) {
                        b = a;
                    }
                    E = p.length;
                    T = m;
                    C = p[m];
                    for(w = 2 * m + 1; w < E;){
                        x = w + 1;
                        if (x < E && !(b(p[w], p[x]) < 0)) {
                            w = x;
                        }
                        p[m] = p[w];
                        m = w;
                        w = 2 * m + 1;
                    }
                    p[m] = C;
                    return y(p, T, m, b);
                };
                t = function() {
                    class p {
                        constructor(m){
                            this.cmp = m ?? a;
                            this.nodes = [];
                        }
                        push(m) {
                            return o(this.nodes, m, this.cmp);
                        }
                        pop() {
                            return s(this.nodes, this.cmp);
                        }
                        peek() {
                            return this.nodes[0];
                        }
                        contains(m) {
                            return this.nodes.indexOf(m) !== -1;
                        }
                        replace(m) {
                            return l(this.nodes, m, this.cmp);
                        }
                        pushpop(m) {
                            return u(this.nodes, m, this.cmp);
                        }
                        heapify() {
                            return i(this.nodes, this.cmp);
                        }
                        updateItem(m) {
                            return d(this.nodes, m, this.cmp);
                        }
                        clear() {
                            return this.nodes = [];
                        }
                        empty() {
                            return this.nodes.length === 0;
                        }
                        size() {
                            return this.nodes.length;
                        }
                        clone() {
                            let m;
                            m = new p;
                            m.nodes = this.nodes.slice(0);
                            return m;
                        }
                        toArray() {
                            return this.nodes.slice(0);
                        }
                    }
                    p.push = o;
                    p.pop = s;
                    p.replace = l;
                    p.pushpop = u;
                    p.heapify = i;
                    p.updateItem = d;
                    p.nlargest = c;
                    p.nsmallest = h;
                    p.prototype.insert = p.prototype.push;
                    p.prototype.top = p.prototype.peek;
                    p.prototype.front = p.prototype.peek;
                    p.prototype.has = p.prototype.contains;
                    p.prototype.copy = p.prototype.clone;
                    return p;
                }();
                ((p, m)=>r.exports = m())(this, ()=>t);
            }).call(nn_exports);
        })(nn);
    }
    return nn.exports;
}
let fi;
let Ho;
function td() {
    if (!Ho) {
        Ho = 1;
        fi = rd();
    }
    return fi;
}
const ad = td();
const za = La(ad);
const nd = vr({
    root: null,
    weight (e) {
        return 1;
    },
    directed: false
});
const id = {
    dijkstra (e) {
        if (!Me(e)) {
            const t = arguments;
            e = {
                root: t[0],
                weight: t[1],
                directed: t[2]
            };
        }
        const a = nd(e);
        const { root, weight, directed } = a;
        const o = this;
        const u = weight;
        const l = he(root) ? this.filter(root)[0] : root[0];
        const v = {};
        const f = {};
        const c = {};
        const h = this.byGroup();
        const { nodes, edges } = h;
        edges.unmergeBy((L)=>L.isLoop());
        const g = (I)=>v[I.id()];
        const p = (I, M)=>{
            v[I.id()] = M;
            m.updateItem(I);
        };
        var m = new za((L, I)=>g(L) - g(I));
        for (const w of nodes){
            v[w.id()] = w.same(l) ? 0 : Infinity;
            m.push(w);
        }
        const E = (I, M)=>{
            let _;
            for(var O = (directed ? I.edgesTo(M) : I.edgesWith(M)).intersect(edges), dist = Infinity, N = 0; N < O.length; N++){
                const F = O[N];
                const U = u(F);
                if (U < dist || !_) {
                    dist = U;
                    _ = F;
                }
            }
            return {
                edge: _,
                dist
            };
        };
        while(m.size() > 0){
            const C = m.pop();
            const x = g(C);
            const T = C.id();
            c[T] = x;
            if (x !== Infinity) {
                for(let k = C.neighborhood().intersect(nodes), D = 0; D < k.length; D++){
                    const B = k[D];
                    const P = B.id();
                    const A = E(C, B);
                    const R = x + A.dist;
                    if (R < g(B)) {
                        p(B, R);
                        f[P] = {
                            node: C,
                            edge: A.edge
                        };
                    }
                }
            }
        }
        return {
            distanceTo (I) {
                const M = he(I) ? nodes.filter(I)[0] : I[0];
                return c[M.id()];
            },
            pathTo (I) {
                const M = he(I) ? nodes.filter(I)[0] : I[0];
                const O = [];
                let q = M;
                let _ = q.id();
                if (M.length > 0) {
                    for(O.unshift(M); f[_];){
                        const N = f[_];
                        O.unshift(N.edge);
                        O.unshift(N.node);
                        q = N.node;
                        _ = q.id();
                    }
                }
                return o.spawn(O);
            }
        };
    }
};
const sd = {
    kruskal (e) {
        e = e || ((b)=>1);
        const t = this.byGroup();
        const { nodes, edges } = t;
        for(var i = nodes.length, s = new Array(i), o = nodes, u = (w)=>{
            for(let E = 0; E < s.length; E++){
                const C = s[E];
                if (C.has(w)) {
                    return E;
                }
            }
        }, l = 0; l < i; l++){
            s[l] = this.spawn(nodes[l]);
        }
        for(let v = edges.sort((b, w)=>e(b) - e(w)), f = 0; f < v.length; f++){
            const c = v[f];
            const h = c.source()[0];
            const d = c.target()[0];
            const y = u(h);
            const g = u(d);
            const p = s[y];
            const m = s[g];
            if (y !== g) {
                o.merge(c);
                p.merge(m);
                s.splice(g, 1);
            }
        }
        return o;
    }
};
const od = vr({
    root: null,
    goal: null,
    weight (e) {
        return 1;
    },
    heuristic (e) {
        return 0;
    },
    directed: false
});
const ud = {
    aStar (e) {
        const t = this.cy();
        const a = od(e);
        let a_root = a.root;
        let a_goal = a.goal;
        const { heuristic, directed, weight } = a;
        a_root = t.collection(a_root)[0];
        a_goal = t.collection(a_goal)[0];
        const l = a_root.id();
        const v = a_goal.id();
        const f = {};
        const c = {};
        const h = {};
        const d = new za((_, N)=>c[_.id()] - c[N.id()]);
        const y = new jt;
        const g = {};
        const p = {};
        const m = (N, F)=>{
            d.push(N);
            y.add(F);
        };
        let b;
        let w;
        const E = ()=>{
            b = d.pop();
            w = b.id();
            y.delete(w);
        };
        const C = (N)=>y.has(N);
        m(a_root, l);
        f[l] = 0;
        c[l] = heuristic(a_root);
        let steps = 0;
        while(d.size() > 0){
            E();
            steps++;
            if (w === v) {
                for(var T = [], k = a_goal, D = v, B = p[D]; T.unshift(k), B != null && T.unshift(B), k = g[D], k != null;){
                    D = k.id();
                    B = p[D];
                }
                return {
                    found: true,
                    distance: f[w],
                    path: this.spawn(T),
                    steps
                };
            }
            h[w] = true;
            for(let P = b._private.edges, A = 0; A < P.length; A++){
                const R = P[A];
                if (this.hasElementWithId(R.id()) && !(directed && R.data("source") !== w)) {
                    const L = R.source();
                    const I = R.target();
                    const M = L.id() !== w ? L : I;
                    const O = M.id();
                    if (this.hasElementWithId(O) && !h[O]) {
                        const q = f[w] + weight(R);
                        if (!C(O)) {
                            f[O] = q;
                            c[O] = q + heuristic(M);
                            m(M, O);
                            g[O] = b;
                            p[O] = R;
                            continue;
                        }
                        if (q < f[O]) {
                            f[O] = q;
                            c[O] = q + heuristic(M);
                            g[O] = b;
                            p[O] = R;
                        }
                    }
                }
            }
        }
        return {
            found: false,
            distance: undefined,
            path: undefined,
            steps
        };
    }
};
const ld = vr({
    weight (e) {
        return 1;
    },
    directed: false
});
const vd = {
    floydWarshall (e) {
        const t = this.cy();
        const a = ld(e);
        const { weight, directed } = a;
        const s = weight;
        const o = this.byGroup();
        const { nodes, edges } = o;
        const nodes_length = nodes.length;
        for(var f = nodes_length * nodes_length, c = (U)=>nodes.indexOf(U), h = (U)=>nodes[U], d = new Array(f), y = 0; y < f; y++){
            const g = y % nodes_length;
            const p = (y - g) / nodes_length;
            if (p === g) {
                d[y] = 0;
            } else {
                d[y] = Infinity;
            }
        }
        const m = new Array(f);
        const b = new Array(f);
        for (const E of edges){
            const C = E.source()[0];
            const x = E.target()[0];
            if (C !== x) {
                const T = c(C);
                const k = c(x);
                const D = T * nodes_length + k;
                const B = s(E);
                if (d[D] > B) {
                    d[D] = B;
                    m[D] = k;
                    b[D] = E;
                }
                if (!directed) {
                    const P = k * nodes_length + T;
                    if (!directed && d[P] > B) {
                        d[P] = B;
                        m[P] = T;
                        b[P] = E;
                    }
                }
            }
        }
        for(let A = 0; A < nodes_length; A++){
            for(let R = 0; R < nodes_length; R++){
                const L = R * nodes_length + A;
                for(let I = 0; I < nodes_length; I++){
                    const M = R * nodes_length + I;
                    const O = A * nodes_length + I;
                    if (d[L] + d[O] < d[M]) {
                        d[M] = d[L] + d[O];
                        m[M] = m[L];
                    }
                }
            }
        }
        const q = (U)=>(he(U) ? t.filter(U) : U)[0];
        const _ = (U)=>c(q(U));
        const N = {
            distance (U, J) {
                const Z = _(U);
                const j = _(J);
                return d[Z * nodes_length + j];
            },
            path (U, J) {
                let Z = _(U);
                const j = _(J);
                const re = h(Z);
                if (Z === j) {
                    return re.collection();
                }
                if (m[Z * nodes_length + j] == null) {
                    return t.collection();
                }
                const ne = t.collection();
                let Q = Z;
                let V;
                for(ne.merge(re); Z !== j;){
                    Q = Z;
                    Z = m[Z * nodes_length + j];
                    V = b[Q * nodes_length + Z];
                    ne.merge(V);
                    ne.merge(h(Z));
                }
                return ne;
            }
        };
        return N;
    }
};
const fd = vr({
    weight (e) {
        return 1;
    },
    directed: false,
    root: null
});
const cd = {
    bellmanFord (e) {
        const t = this;
        const a = fd(e);
        const { weight, directed } = a;
        let a_root = a.root;
        const o = weight;
        const u = this;
        const l = this.cy();
        const v = this.byGroup();
        const { edges, nodes } = v;
        const nodes_length = nodes.length;
        const d = new Kr;
        let hasNegativeWeightCycle = false;
        const negativeWeightCycles = [];
        a_root = l.collection(a_root)[0];
        edges.unmergeBy((we)=>we.isLoop());
        const edges_length = edges.length;
        const m = (me)=>{
            let ge = d.get(me.id());
            if (!ge) {
                ge = {};
                d.set(me.id(), ge);
            }
            return ge;
        };
        const b = (me)=>(he(me) ? l.$(me) : me)[0];
        const distanceTo = (me)=>m(b(me)).dist;
        const pathTo = (me, ge = a_root)=>{
            const se = b(me);
            const de = [];
            let fe = se;
            while(true){
                if (fe == null) {
                    return t.spawn();
                }
                const xe = m(fe);
                const { edge, pred } = xe;
                de.unshift(fe[0]);
                if (fe.same(ge) && de.length > 0) {
                    break;
                }
                if (edge != null) {
                    de.unshift(edge);
                }
                fe = pred;
            }
            return u.spawn(de);
        };
        for(let C = 0; C < nodes_length; C++){
            const x = nodes[C];
            const T = m(x);
            if (x.same(a_root)) {
                T.dist = 0;
            } else {
                T.dist = Infinity;
            }
            T.pred = null;
            T.edge = null;
        }
        let k = false;
        const D = (me, ge, se, de, fe, xe)=>{
            const be = de.dist + xe;
            if (be < fe.dist && !se.same(de.edge)) {
                fe.dist = be;
                fe.pred = me;
                fe.edge = se;
                k = true;
            }
        };
        for(let B = 1; B < nodes_length; B++){
            k = false;
            for(let P = 0; P < edges_length; P++){
                const A = edges[P];
                const R = A.source();
                const L = A.target();
                const I = o(A);
                const M = m(R);
                const O = m(L);
                D(R, L, A, M, O, I);
                if (!directed) {
                    D(L, R, A, O, M, I);
                }
            }
            if (!k) {
                break;
            }
        }
        if (k) {
            const q = [];
            for(let _ = 0; _ < edges_length; _++){
                const N = edges[_];
                const F = N.source();
                const U = N.target();
                const J = o(N);
                const Z = m(F).dist;
                const j = m(U).dist;
                if (Z + J < j || !directed && j + J < Z) {
                    if (!hasNegativeWeightCycle) {
                        ze("Graph contains a negative weight cycle for Bellman-Ford");
                        hasNegativeWeightCycle = true;
                    }
                    if (e.findNegativeWeightCycles !== false) {
                        const re = [];
                        if (Z + J < j) {
                            re.push(F);
                        }
                        if (!directed && j + J < Z) {
                            re.push(U);
                        }
                        for(let ne = re.length, Q = 0; Q < ne; Q++){
                            const V = re[Q];
                            let H = [
                                V
                            ];
                            H.push(m(V).edge);
                            for(var W = m(V).pred; H.indexOf(W) === -1;){
                                H.push(W);
                                H.push(m(W).edge);
                                W = m(W).pred;
                            }
                            H = H.slice(H.indexOf(W));
                            let Y = H[0].id();
                            let te = 0;
                            for(let ce = 2; ce < H.length; ce += 2){
                                if (H[ce].id() < Y) {
                                    Y = H[ce].id();
                                    te = ce;
                                }
                            }
                            H = H.slice(te).concat(H.slice(0, te));
                            H.push(H[0]);
                            const Be = H.map((we)=>we.id()).join(",");
                            if (q.indexOf(Be) === -1) {
                                negativeWeightCycles.push(u.spawn(H));
                                q.push(Be);
                            }
                        }
                    } else {
                        break;
                    }
                }
            }
        }
        return {
            distanceTo,
            pathTo,
            hasNegativeWeightCycle,
            negativeWeightCycles
        };
    }
};
const dd = Math.sqrt(2);
const hd = (e, t, a)=>{
    if (a.length === 0) {
        He("Karger-Stein must be run on a connected (sub)graph");
    }
    const n = a[e];
    const i = n[1];
    const s = n[2];
    const o = t[i];
    const u = t[s];
    const l = a;
    for(let v = l.length - 1; v >= 0; v--){
        const f = l[v];
        const c = f[1];
        const h = f[2];
        if (t[c] === o && t[h] === u || t[c] === u && t[h] === o) {
            l.splice(v, 1);
        }
    }
    for(let d = 0; d < l.length; d++){
        const y = l[d];
        if (y[1] === u) {
            l[d] = y.slice();
            l[d][1] = o;
        } else if (y[2] === u) {
            l[d] = y.slice();
            l[d][2] = o;
        }
    }
    for(let g = 0; g < t.length; g++){
        if (t[g] === u) {
            t[g] = o;
        }
    }
    return l;
};
const ci = (e, t, a, n)=>{
    while(a > n){
        const i = Math.floor(Math.random() * t.length);
        t = hd(i, e, t);
        a--;
    }
    return t;
};
const gd = {
    kargerStein () {
        const e = this;
        const t = this.byGroup();
        const { nodes, edges } = t;
        edges.unmergeBy((O)=>O.isLoop());
        const nodes_length = nodes.length;
        const edges_length = edges.length;
        const o = Math.ceil((Math.log(nodes_length) / Math.LN2) ** 2);
        const u = Math.floor(nodes_length / dd);
        if (nodes_length < 2) {
            He("At least 2 nodes are required for Karger-Stein algorithm");
            return;
        }
        const l = [];
        for(let v = 0; v < edges_length; v++){
            const f = edges[v];
            l.push([
                v,
                nodes.indexOf(f.source()),
                nodes.indexOf(f.target())
            ]);
        }
        let c = Infinity;
        let h = [];
        const d = new Array(nodes_length);
        const y = new Array(nodes_length);
        const g = new Array(nodes_length);
        const p = (q, _)=>{
            for(let N = 0; N < nodes_length; N++){
                _[N] = q[N];
            }
        };
        for(let m = 0; m <= o; m++){
            for(let b = 0; b < nodes_length; b++){
                y[b] = b;
            }
            const w = ci(y, l.slice(), nodes_length, u);
            const E = w.slice();
            p(y, g);
            const C = ci(y, w, u, 2);
            const x = ci(g, E, u, 2);
            if (C.length <= x.length && C.length < c) {
                c = C.length;
                h = C;
                p(y, d);
            } else if (x.length <= C.length && x.length < c) {
                c = x.length;
                h = x;
                p(g, d);
            }
        }
        const T = this.spawn(h.map((O)=>edges[O[0]]));
        const partition1 = this.spawn();
        const partition2 = this.spawn();
        const B = d[0];
        for(let P = 0; P < d.length; P++){
            const A = d[P];
            const R = nodes[P];
            if (A === B) {
                partition1.merge(R);
            } else {
                partition2.merge(R);
            }
        }
        const L = (q)=>{
            const _ = e.spawn();
            q.forEach((N)=>{
                _.merge(N);
                N.connectedEdges().forEach((F)=>{
                    if (e.contains(F) && !T.contains(F)) {
                        _.merge(F);
                    }
                });
            });
            return _;
        };
        const components = [
            L(partition1),
            L(partition2)
        ];
        const M = {
            cut: T,
            components,
            partition1,
            partition2
        };
        return M;
    }
};
const pd = (e)=>({
        x: e.x,
        y: e.y
    });
const Ln = (e, t, a)=>({
        x: e.x * t + a.x,
        y: e.y * t + a.y
    });
const gv = (e, t, a)=>({
        x: (e.x - a.x) / t,
        y: (e.y - a.y) / t
    });
const Gt = (e)=>({
        x: e[0],
        y: e[1]
    });
const yd = (e, t = 0, _param_2 = e.length)=>{
    for(var a = _param_2, n = Infinity, i = t; i < a; i++){
        const s = e[i];
        if (isFinite(s)) {
            n = Math.min(s, n);
        }
    }
    return n;
};
const md = (e, t = 0, _param_2 = e.length)=>{
    for(var a = _param_2, n = -Infinity, i = t; i < a; i++){
        const s = e[i];
        if (isFinite(s)) {
            n = Math.max(s, n);
        }
    }
    return n;
};
const bd = (e, t = 0, _param_2 = e.length)=>{
    for(var a = _param_2, n = 0, i = 0, s = t; s < a; s++){
        const o = e[s];
        if (isFinite(o)) {
            n += o;
            i++;
        }
    }
    return n / i;
};
const wd = (e, t = 0, a = e.length, n = true, i = true, s = true)=>{
    if (n) {
        e = e.slice(t, a);
    } else {
        if (a < e.length) {
            e.splice(a, e.length - a);
        }
        if (t > 0) {
            e.splice(0, t);
        }
    }
    let o = 0;
    for(let u = e.length - 1; u >= 0; u--){
        const l = e[u];
        if (s) {
            if (!isFinite(l)) {
                e[u] = -Infinity;
                o++;
            }
        } else {
            e.splice(u, 1);
        }
    }
    if (i) {
        e.sort((c, h)=>c - h);
    }
    const e_length = e.length;
    const f = Math.floor(e_length / 2);
    if (e_length % 2 !== 0) {
        return e[f + 1 + o];
    }
    return (e[f - 1 + o] + e[f + o]) / 2;
};
const xd = (e)=>Math.PI * e / 180;
const Ka = (e, t)=>Math.atan2(t, e) - Math.PI / 2;
const js = Math.log2 || ((r)=>Math.log(r) / Math.log(2));
const eo = (e)=>{
    if (e > 0) {
        return 1;
    }
    if (e < 0) {
        return -1;
    }
    return 0;
};
const Dt = (e, t)=>Math.sqrt(xt(e, t));
var xt = (e, t)=>{
    const a = t.x - e.x;
    const n = t.y - e.y;
    return a * a + n * n;
};
const Ed = (e)=>{
    for(var t = e.length, a = 0, n = 0; n < t; n++){
        a += e[n];
    }
    for(let i = 0; i < t; i++){
        e[i] = e[i] / a;
    }
    return e;
};
const nr = (e, t, a, n)=>(1 - n) * (1 - n) * e + 2 * (1 - n) * n * t + n * n * a;
const $t = (e, t, a, n)=>({
        x: nr(e.x, t.x, a.x, n),
        y: nr(e.y, t.y, a.y, n)
    });
const Cd = (e, t, a, n)=>{
    const i = {
        x: t.x - e.x,
        y: t.y - e.y
    };
    const s = Dt(e, t);
    const o = {
        x: i.x / s,
        y: i.y / s
    };
    a = a ?? 0;
    n = n ?? a * s;
    return {
        x: e.x + o.x * n,
        y: e.y + o.y * n
    };
};
const Ta = (e, t, a)=>Math.max(e, Math.min(a, t));
const yr = (e)=>{
    if (e == null) {
        return {
            x1: Infinity,
            y1: Infinity,
            x2: -Infinity,
            y2: -Infinity,
            w: 0,
            h: 0
        };
    }
    if (e.x1 != null && e.y1 != null) {
        if (e.x2 != null && e.y2 != null && e.x2 >= e.x1 && e.y2 >= e.y1) {
            return {
                x1: e.x1,
                y1: e.y1,
                x2: e.x2,
                y2: e.y2,
                w: e.x2 - e.x1,
                h: e.y2 - e.y1
            };
        }
        if (e.w != null && e.h != null && e.w >= 0 && e.h >= 0) {
            return {
                x1: e.x1,
                y1: e.y1,
                x2: e.x1 + e.w,
                y2: e.y1 + e.h,
                w: e.w,
                h: e.h
            };
        }
    }
};
const Td = (e)=>({
        x1: e.x1,
        x2: e.x2,
        w: e.w,
        y1: e.y1,
        y2: e.y2,
        h: e.h
    });
const Sd = (all)=>{
    all.x1 = Infinity;
    all.y1 = Infinity;
    all.x2 = -Infinity;
    all.y2 = -Infinity;
    all.w = 0;
    all.h = 0;
};
const kd = (e, t)=>{
    e.x1 = Math.min(e.x1, t.x1);
    e.x2 = Math.max(e.x2, t.x2);
    e.w = e.x2 - e.x1;
    e.y1 = Math.min(e.y1, t.y1);
    e.y2 = Math.max(e.y2, t.y2);
    e.h = e.y2 - e.y1;
};
const pv = (e, t, a)=>{
    e.x1 = Math.min(e.x1, t);
    e.x2 = Math.max(e.x2, t);
    e.w = e.x2 - e.x1;
    e.y1 = Math.min(e.y1, a);
    e.y2 = Math.max(e.y2, a);
    e.h = e.y2 - e.y1;
};
const sn = (e, t = 0)=>{
    e.x1 -= t;
    e.x2 += t;
    e.y1 -= t;
    e.y2 += t;
    e.w = e.x2 - e.x1;
    e.h = e.y2 - e.y1;
    return e;
};
const on = (e, t = [
    0
])=>{
    let a;
    let n;
    let i;
    let s;
    if (t.length === 1) {
        a = n = i = s = t[0];
    } else if (t.length === 2) {
        a = i = t[0];
        s = n = t[1];
    } else if (t.length === 4) {
        const o = Qe(t, 4);
        a = o[0];
        n = o[1];
        i = o[2];
        s = o[3];
    }
    e.x1 -= s;
    e.x2 += n;
    e.y1 -= a;
    e.y2 += i;
    e.w = e.x2 - e.x1;
    e.h = e.y2 - e.y1;
    return e;
};
const Wo = (e, t)=>{
    e.x1 = t.x1;
    e.y1 = t.y1;
    e.x2 = t.x2;
    e.y2 = t.y2;
    e.w = e.x2 - e.x1;
    e.h = e.y2 - e.y1;
};
const ro = (e, t)=>!(e.x1 > t.x2 || t.x1 > e.x2 || e.x2 < t.x1 || t.x2 < e.x1 || e.y2 < t.y1 || t.y2 < e.y1 || e.y1 > t.y2 || t.y1 > e.y2);
const at = (e, t, a)=>e.x1 <= t && t <= e.x2 && e.y1 <= a && a <= e.y2;
const $o = (e, t)=>at(e, t.x, t.y);
const yv = (e, t)=>at(e, t.x1, t.y1) && at(e, t.x2, t.y2);
const Dd = Math.hypot ?? ((r, e)=>Math.sqrt(r * r + e * e));
function Bd(r, e) {
    if (r.length < 3) {
        throw new Error("Need at least 3 vertices");
    }
    const t = (T, k)=>({
            x: T.x + k.x,
            y: T.y + k.y
        });
    const a = (T, k)=>({
            x: T.x - k.x,
            y: T.y - k.y
        });
    const n = (T, k)=>({
            x: T.x * k,
            y: T.y * k
        });
    const i = (T, k)=>T.x * k.y - T.y * k.x;
    const s = (T)=>{
        const k = Dd(T.x, T.y);
        if (k === 0) {
            return {
                x: 0,
                y: 0
            };
        }
        return {
            x: T.x / k,
            y: T.y / k
        };
    };
    const o = (T)=>{
        let k = 0;
        for(let D = 0; D < T.length; D++){
            const B = T[D];
            const P = T[(D + 1) % T.length];
            k += B.x * P.y - P.x * B.y;
        }
        return k / 2;
    };
    const u = (T, k, D, B)=>{
        const P = a(k, T);
        const A = a(B, D);
        const R = i(P, A);
        if (Math.abs(R) < 1e-9) {
            return t(T, n(P, 0.5));
        }
        const L = i(a(D, T), A) / R;
        return t(T, n(P, L));
    };
    const l = r.map((x)=>({
            x: x.x,
            y: x.y
        }));
    if (o(l) < 0) {
        l.reverse();
    }
    for(var v = l.length, f = [], c = 0; c < v; c++){
        const h = l[c];
        const d = l[(c + 1) % v];
        const y = a(d, h);
        const g = s({
            x: y.y,
            y: -y.x
        });
        f.push(g);
    }
    const p = f.map((x, T)=>{
        const k = t(l[T], n(x, e));
        const D = t(l[(T + 1) % v], n(x, e));
        return {
            p1: k,
            p2: D
        };
    });
    const m = [];
    for(let b = 0; b < v; b++){
        const w = p[(b - 1 + v) % v];
        const E = p[b];
        const C = u(w.p1, w.p2, E.p1, E.p2);
        m.push(C);
    }
    return m;
}
function Pd(points, e, t, a, n, i) {
    const s = Fd(points, e, t, a, n);
    const o = Bd(s, i);
    const u = yr();
    o.forEach((l)=>pv(u, l.x, l.y));
    return u;
}
const mv = (e, t, a, n, i, s, o, u = "auto")=>{
    let l = u === "auto" ? lt(i, s) : u;
    const v = i / 2;
    const f = s / 2;
    l = Math.min(l, v, f);
    const c = l !== v;
    const h = l !== f;
    let d;
    if (c) {
        const y = a - v + l - o;
        const g = n - f - o;
        const p = a + v - l + o;
        d = nt(e, t, a, n, y, g, p, g, false);
        if (d.length > 0) {
            return d;
        }
    }
    if (h) {
        const b = a + v + o;
        const w = n - f + l - o;
        const E = b;
        const C = n + f - l + o;
        d = nt(e, t, a, n, b, w, E, C, false);
        if (d.length > 0) {
            return d;
        }
    }
    if (c) {
        const x = a - v + l - o;
        const T = n + f + o;
        const k = a + v - l + o;
        d = nt(e, t, a, n, x, T, k, T, false);
        if (d.length > 0) {
            return d;
        }
    }
    if (h) {
        const B = a - v - o;
        const P = n - f + l - o;
        const A = B;
        const R = n + f - l + o;
        d = nt(e, t, a, n, B, P, A, R, false);
        if (d.length > 0) {
            return d;
        }
    }
    let L;
    {
        const I = a - v + l;
        const M = n - f + l;
        L = ga(e, t, a, n, I, M, l + o);
        if (L.length > 0 && L[0] <= I && L[1] <= M) {
            return [
                L[0],
                L[1]
            ];
        }
    }
    {
        const O = a + v - l;
        const q = n - f + l;
        L = ga(e, t, a, n, O, q, l + o);
        if (L.length > 0 && L[0] >= O && L[1] <= q) {
            return [
                L[0],
                L[1]
            ];
        }
    }
    {
        const _ = a + v - l;
        const N = n + f - l;
        L = ga(e, t, a, n, _, N, l + o);
        if (L.length > 0 && L[0] >= _ && L[1] >= N) {
            return [
                L[0],
                L[1]
            ];
        }
    }
    {
        const F = a - v + l;
        const U = n + f - l;
        L = ga(e, t, a, n, F, U, l + o);
        if (L.length > 0 && L[0] <= F && L[1] >= U) {
            return [
                L[0],
                L[1]
            ];
        }
    }
    return [];
};
const Ad = (e, t, a, n, i, s, o)=>{
    const u = o;
    const l = Math.min(a, i);
    const v = Math.max(a, i);
    const f = Math.min(n, s);
    const c = Math.max(n, s);
    return l - u <= e && e <= v + u && f - u <= t && t <= c + u;
};
const Rd = (e, t, a, n, i, s, o, u, l)=>{
    const v = {
        x1: Math.min(a, o, i) - l,
        x2: Math.max(a, o, i) + l,
        y1: Math.min(n, u, s) - l,
        y2: Math.max(n, u, s) + l
    };
    return !(e < v.x1 || e > v.x2 || t < v.y1 || t > v.y2);
};
const Md = (e, t, a, n)=>{
    a -= n;
    const i = t * t - 4 * e * a;
    if (i < 0) {
        return [];
    }
    const s = Math.sqrt(i);
    const o = 2 * e;
    const u = (-t + s) / o;
    const l = (-t - s) / o;
    return [
        u,
        l
    ];
};
const Ld = (e, t, a, n, i)=>{
    const s = 0.00001;
    if (e === 0) {
        e = s;
    }
    t /= e;
    a /= e;
    n /= e;
    let o;
    let u;
    let l;
    let v;
    let f;
    let c;
    let h;
    let d;
    u = (3 * a - t * t) / 9;
    l = -(27 * n) + t * (9 * a - 2 * (t * t));
    l /= 54;
    o = u * u * u + l * l;
    i[1] = 0;
    h = t / 3;
    if (o > 0) {
        f = l + Math.sqrt(o);
        f = f < 0 ? -((-f) ** (1 / 3)) : f ** (1 / 3);
        c = l - Math.sqrt(o);
        c = c < 0 ? -((-c) ** (1 / 3)) : c ** (1 / 3);
        i[0] = -h + f + c;
        h += (f + c) / 2;
        i[4] = i[2] = -h;
        h = Math.sqrt(3) * (-c + f) / 2;
        i[3] = h;
        i[5] = -h;
        return;
    }
    i[5] = i[3] = 0;
    if (o === 0) {
        d = l < 0 ? -((-l) ** (1 / 3)) : l ** (1 / 3);
        i[0] = -h + 2 * d;
        i[4] = i[2] = -(d + h);
        return;
    }
    u = -u;
    v = u * u * u;
    v = Math.acos(l / Math.sqrt(v));
    d = 2 * Math.sqrt(u);
    i[0] = -h + d * Math.cos(v / 3);
    i[2] = -h + d * Math.cos((v + 2 * Math.PI) / 3);
    i[4] = -h + d * Math.cos((v + 4 * Math.PI) / 3);
};
const Id = (e, t, a, n, i, s, o, u)=>{
    const l = 1 * a * a - 4 * a * i + 2 * a * o + 4 * i * i - 4 * i * o + o * o + n * n - 4 * n * s + 2 * n * u + 4 * s * s - 4 * s * u + u * u;
    const v = 9 * a * i - 3 * a * a - 3 * a * o - 6 * i * i + 3 * i * o + 9 * n * s - 3 * n * n - 3 * n * u - 6 * s * s + 3 * s * u;
    const f = 3 * a * a - 6 * a * i + a * o - a * e + 2 * i * i + 2 * i * e - o * e + 3 * n * n - 6 * n * s + n * u - n * t + 2 * s * s + 2 * s * t - u * t;
    const c = 1 * a * i - a * a + a * e - i * e + n * s - n * n + n * t - s * t;
    const h = [];
    Ld(l, v, f, c, h);
    const d = 1e-7;
    const y = [];
    for(let g = 0; g < 6; g += 2){
        if (Math.abs(h[g + 1]) < d && h[g] >= 0 && h[g] <= 1) {
            y.push(h[g]);
        }
    }
    y.push(1);
    y.push(0);
    let p = -1;
    let m;
    let b;
    let w;
    for(let E = 0; E < y.length; E++){
        m = (1 - y[E]) ** 2 * a + 2 * (1 - y[E]) * y[E] * i + y[E] * y[E] * o;
        b = (1 - y[E]) ** 2 * n + 2 * (1 - y[E]) * y[E] * s + y[E] * y[E] * u;
        w = (m - e) ** 2 + (b - t) ** 2;
        if (p >= 0) {
            if (w < p) {
                p = w;
            }
        } else {
            p = w;
        }
    }
    return p;
};
const Od = (e, t, a, n, i, s)=>{
    const o = [
        e - a,
        t - n
    ];
    const u = [
        i - a,
        s - n
    ];
    const l = u[0] * u[0] + u[1] * u[1];
    const v = o[0] * o[0] + o[1] * o[1];
    const f = o[0] * u[0] + o[1] * u[1];
    const c = f * f / l;
    if (f < 0) {
        return v;
    }
    if (c > l) {
        return (e - i) * (e - i) + (t - s) * (t - s);
    }
    return v - c;
};
const Er = (e, t, a)=>{
    let n;
    let i;
    let s;
    let o;
    let u;
    let l = 0;
    for(let v = 0; v < a.length / 2; v++){
        n = a[v * 2];
        i = a[v * 2 + 1];
        if (v + 1 < a.length / 2) {
            s = a[(v + 1) * 2];
            o = a[(v + 1) * 2 + 1];
        } else {
            s = a[(v + 1 - a.length / 2) * 2];
            o = a[(v + 1 - a.length / 2) * 2 + 1];
        }
        if (!(n == e && s == e)) {
            if (n >= e && e >= s || n <= e && e <= s) {
                u = (e - n) / (s - n) * (o - i) + i;
                u > t && l++;
            } else {
                continue;
            }
        }
    }
    return l % 2 !== 0;
};
const Yr = (e, t, points, n, i, s, o, u, l)=>{
    const v = new Array(points.length);
    let f;
    if (u[0] != null) {
        f = Math.atan(u[1] / u[0]);
        if (u[0] < 0) {
            f = f + Math.PI / 2;
        } else {
            f = -f - Math.PI / 2;
        }
    } else {
        f = u;
    }
    const c = Math.cos(-f);
    const h = Math.sin(-f);
    for(let d = 0; d < v.length / 2; d++){
        v[d * 2] = s / 2 * (points[d * 2] * c - points[d * 2 + 1] * h);
        v[d * 2 + 1] = o / 2 * (points[d * 2 + 1] * c + points[d * 2] * h);
        v[d * 2] += n;
        v[d * 2 + 1] += i;
    }
    let y;
    if (l > 0) {
        const g = xn(v, -l);
        y = wn(g);
    } else {
        y = v;
    }
    return Er(e, t, y);
};
const Nd = (e, t, points, n, i, s, o, u)=>{
    const l = new Array(points.length * 2);
    for(let v = 0; v < u.length; v++){
        const f = u[v];
        l[v * 4 + 0] = f.startX;
        l[v * 4 + 1] = f.startY;
        l[v * 4 + 2] = f.stopX;
        l[v * 4 + 3] = f.stopY;
        const c = (f.cx - e) ** 2 + (f.cy - t) ** 2;
        if (c <= f.radius ** 2) {
            return true;
        }
    }
    return Er(e, t, l);
};
var wn = (e)=>{
    const t = new Array(e.length / 2);
    let a;
    let n;
    let i;
    let s;
    let o;
    let u;
    let l;
    let v;
    for(let f = 0; f < e.length / 4; f++){
        a = e[f * 4];
        n = e[f * 4 + 1];
        i = e[f * 4 + 2];
        s = e[f * 4 + 3];
        if (f < e.length / 4 - 1) {
            o = e[(f + 1) * 4];
            u = e[(f + 1) * 4 + 1];
            l = e[(f + 1) * 4 + 2];
            v = e[(f + 1) * 4 + 3];
        } else {
            o = e[0];
            u = e[1];
            l = e[2];
            v = e[3];
        }
        const c = nt(a, n, i, s, o, u, l, v, true);
        t[f * 2] = c[0];
        t[f * 2 + 1] = c[1];
    }
    return t;
};
var xn = (e, t)=>{
    const a = new Array(e.length * 2);
    let n;
    let i;
    let s;
    let o;
    for(let u = 0; u < e.length / 2; u++){
        n = e[u * 2];
        i = e[u * 2 + 1];
        if (u < e.length / 2 - 1) {
            s = e[(u + 1) * 2];
            o = e[(u + 1) * 2 + 1];
        } else {
            s = e[0];
            o = e[1];
        }
        const l = o - i;
        const v = -(s - n);
        const f = Math.sqrt(l * l + v * v);
        const c = l / f;
        const h = v / f;
        a[u * 4] = n + c * t;
        a[u * 4 + 1] = i + h * t;
        a[u * 4 + 2] = s + c * t;
        a[u * 4 + 3] = o + h * t;
    }
    return a;
};
const zd = (e, t, a, n, i, s)=>{
    let o = a - e;
    let u = n - t;
    o /= i;
    u /= s;
    const l = Math.sqrt(o * o + u * u);
    const v = l - 1;
    if (v < 0) {
        return [];
    }
    const f = v / l;
    return [
        (a - e) * f + e,
        (n - t) * f + t
    ];
};
const St = (e, t, a, n, i, s, o)=>{
    e -= i;
    t -= s;
    e /= a / 2 + o;
    t /= n / 2 + o;
    return e * e + t * t <= 1;
};
var ga = (e, t, a, n, i, s, o)=>{
    const u = [
        a - e,
        n - t
    ];
    const l = [
        e - i,
        t - s
    ];
    const v = u[0] * u[0] + u[1] * u[1];
    const f = 2 * (l[0] * u[0] + l[1] * u[1]);
    const c = l[0] * l[0] + l[1] * l[1] - o * o;
    const h = f * f - 4 * v * c;
    if (h < 0) {
        return [];
    }
    const d = (-f + Math.sqrt(h)) / (2 * v);
    const y = (-f - Math.sqrt(h)) / (2 * v);
    const g = Math.min(d, y);
    const p = Math.max(d, y);
    const m = [];
    if (g >= 0 && g <= 1) {
        m.push(g);
    }
    if (p >= 0 && p <= 1) {
        m.push(p);
    }
    if (m.length === 0) {
        return [];
    }
    const b = m[0] * u[0] + e;
    const w = m[0] * u[1] + t;
    if (m.length > 1) {
        if (m[0] == m[1]) {
            return [
                b,
                w
            ];
        }
        const E = m[1] * u[0] + e;
        const C = m[1] * u[1] + t;
        return [
            b,
            w,
            E,
            C
        ];
    } else {
        return [
            b,
            w
        ];
    }
};
const hi = (e, t, a)=>{
    if (t <= e && e <= a || a <= e && e <= t) {
        return e;
    }
    if (e <= t && t <= a || a <= t && t <= e) {
        return t;
    }
    return a;
};
var nt = (e, t, a, n, i, s, o, u, l)=>{
    const v = e - i;
    const f = a - e;
    const c = o - i;
    const h = t - s;
    const d = n - t;
    const y = u - s;
    const g = c * h - y * v;
    const p = f * h - d * v;
    const m = y * f - c * d;
    if (m !== 0) {
        const b = g / m;
        const w = p / m;
        const E = 0.001;
        const C = 0 - E;
        const x = 1 + E;
        if (C <= b && b <= x && C <= w && w <= x) {
            return [
                e + b * f,
                t + b * d
            ];
        }
        if (l) {
            return [
                e + b * f,
                t + b * d
            ];
        }
        return [];
    } else {
        if (g === 0 || p === 0) {
            if (hi(e, a, o) === o) {
                return [
                    o,
                    u
                ];
            }
            if (hi(e, a, i) === i) {
                return [
                    i,
                    s
                ];
            }
            if (hi(i, o, a) === a) {
                return [
                    a,
                    n
                ];
            }
            return [];
        }
        return [];
    }
};
var Fd = (points, t, a, n, i)=>{
    const s = [];
    const o = n / 2;
    const u = i / 2;
    const l = t;
    const v = a;
    s.push({
        x: l + o * points[0],
        y: v + u * points[1]
    });
    for(let f = 1; f < points.length / 2; f++){
        s.push({
            x: l + o * points[f * 2],
            y: v + u * points[f * 2 + 1]
        });
    }
    return s;
};
const Sa = (e, t, a, n, i, s, o, u)=>{
    const l = [];
    let v;
    const f = new Array(a.length);
    let c = true;
    if (s == null) {
        c = false;
    }
    let h;
    if (c) {
        for(let d = 0; d < f.length / 2; d++){
            f[d * 2] = a[d * 2] * s + n;
            f[d * 2 + 1] = a[d * 2 + 1] * o + i;
        }
        if (u > 0) {
            const y = xn(f, -u);
            h = wn(y);
        } else {
            h = f;
        }
    } else {
        h = a;
    }
    let g;
    let p;
    let m;
    let b;
    for(let w = 0; w < h.length / 2; w++){
        g = h[w * 2];
        p = h[w * 2 + 1];
        if (w < h.length / 2 - 1) {
            m = h[(w + 1) * 2];
            b = h[(w + 1) * 2 + 1];
        } else {
            m = h[0];
            b = h[1];
        }
        v = nt(e, t, n, i, g, p, m, b);
        if (v.length !== 0) {
            l.push(v[0], v[1]);
        }
    }
    return l;
};
const Vd = (e, t, points, n, i, s, o, u, l)=>{
    const v = [];
    let f;
    const c = new Array(points.length * 2);
    l.forEach((m, b)=>{
        if (b === 0) {
            c[c.length - 2] = m.startX;
            c[c.length - 1] = m.startY;
        } else {
            c[b * 4 - 2] = m.startX;
            c[b * 4 - 1] = m.startY;
        }
        c[b * 4] = m.stopX;
        c[b * 4 + 1] = m.stopY;
        f = ga(e, t, n, i, m.cx, m.cy, m.radius);
        if (f.length !== 0) {
            v.push(f[0], f[1]);
        }
    });
    for(let h = 0; h < c.length / 4; h++){
        f = nt(e, t, n, i, c[h * 4], c[h * 4 + 1], c[h * 4 + 2], c[h * 4 + 3], false);
        if (f.length !== 0) {
            v.push(f[0], f[1]);
        }
    }
    if (v.length > 2) {
        const d = [
            v[0],
            v[1]
        ];
        let y = (d[0] - e) ** 2 + (d[1] - t) ** 2;
        for(let g = 1; g < v.length / 2; g++){
            const p = (v[g * 2] - e) ** 2 + (v[g * 2 + 1] - t) ** 2;
            if (p <= y) {
                d[0] = v[g * 2];
                d[1] = v[g * 2 + 1];
                y = p;
            }
        }
        return d;
    }
    return v;
};
const Xa = (e, t, a)=>{
    const n = [
        e[0] - t[0],
        e[1] - t[1]
    ];
    const i = Math.sqrt(n[0] * n[0] + n[1] * n[1]);
    let s = (i - a) / i;
    if (s < 0) {
        s = 0.00001;
    }
    return [
        t[0] + s * n[0],
        t[1] + s * n[1]
    ];
};
const pr = (e, t)=>{
    let a = Ds(e, t);
    a = bv(a);
    return a;
};
var bv = (e)=>{
    let t;
    let a;
    for(var n = e.length / 2, i = Infinity, s = Infinity, o = -Infinity, u = -Infinity, l = 0; l < n; l++){
        t = e[2 * l];
        a = e[2 * l + 1];
        i = Math.min(i, t);
        o = Math.max(o, t);
        s = Math.min(s, a);
        u = Math.max(u, a);
    }
    const v = 2 / (o - i);
    const f = 2 / (u - s);
    for(let c = 0; c < n; c++){
        t = e[2 * c] = e[2 * c] * v;
        a = e[2 * c + 1] = e[2 * c + 1] * f;
        i = Math.min(i, t);
        o = Math.max(o, t);
        s = Math.min(s, a);
        u = Math.max(u, a);
    }
    if (s < -1) {
        for(let h = 0; h < n; h++){
            a = e[2 * h + 1] = e[2 * h + 1] + (-1 - s);
        }
    }
    return e;
};
var Ds = (e, t)=>{
    const a = 1 / e * 2 * Math.PI;
    let n = e % 2 === 0 ? Math.PI / 2 + a / 2 : Math.PI / 2;
    n += t;
    const i = new Array(e * 2);
    let s;
    for(let o = 0; o < e; o++){
        s = o * a + n;
        i[2 * o] = Math.cos(s);
        i[2 * o + 1] = Math.sin(-s);
    }
    return i;
};
var lt = (e, t)=>Math.min(e / 4, t / 4, 8);
const wv = (e, t)=>Math.min(e / 10, t / 10, 8);
const to = ()=>8;
const qd = (e, t, a)=>[
        e - 2 * t + a,
        2 * (t - e),
        e
    ];
const Bs = (e, t)=>({
        heightOffset: Math.min(15, 0.05 * t),
        widthOffset: Math.min(100, 0.25 * e),
        ctrlPtOffsetPct: 0.05
    });
function gi(r, e) {
    function t(f) {
        const c = [];
        for(let h = 0; h < f.length; h++){
            const d = f[h];
            const y = f[(h + 1) % f.length];
            const g = {
                x: y.x - d.x,
                y: y.y - d.y
            };
            const p = {
                x: -g.y,
                y: g.x
            };
            const m = Math.sqrt(p.x * p.x + p.y * p.y);
            c.push({
                x: p.x / m,
                y: p.y / m
            });
        }
        return c;
    }
    function a(f, c) {
        let h = Infinity;
        let d = -Infinity;
        for (const p of f){
            const m = p.x * c.x + p.y * c.y;
            h = Math.min(h, m);
            d = Math.max(d, m);
        }
        return {
            min: h,
            max: d
        };
    }
    function n(f, c) {
        return !(f.max < c.min || c.max < f.min);
    }
    const i = [
        ...t(r),
        ...t(e)
    ];
    for (const u of i){
        const l = a(r, u);
        const v = a(e, u);
        if (!n(l, v)) {
            return false;
        }
    }
    return true;
}
const _d = vr({
    dampingFactor: 0.8,
    precision: 0.000001,
    iterations: 200,
    weight (e) {
        return 1;
    }
});
const Gd = {
    pageRank (e) {
        const t = _d(e);
        const { dampingFactor, precision, iterations, weight } = t;
        const o = this._private.cy;
        const u = this.byGroup();
        const { nodes, edges } = u;
        for(var f = nodes.length, c = f * f, h = edges.length, d = new Array(c), y = new Array(f), g = (1 - dampingFactor) / f, p = 0; p < f; p++){
            for(let m = 0; m < f; m++){
                const b = p * f + m;
                d[b] = 0;
            }
            y[p] = 0;
        }
        for(let w = 0; w < h; w++){
            const E = edges[w];
            const C = E.data("source");
            const x = E.data("target");
            if (C !== x) {
                const T = nodes.indexOfId(C);
                const k = nodes.indexOfId(x);
                const D = weight(E);
                const B = k * f + T;
                d[B] += D;
                y[T] += D;
            }
        }
        const P = 1 / f + g;
        for(let A = 0; A < f; A++){
            if (y[A] === 0) {
                for(let R = 0; R < f; R++){
                    const L = R * f + A;
                    d[L] = P;
                }
            } else {
                for(let I = 0; I < f; I++){
                    const M = I * f + A;
                    d[M] = d[M] / y[A] + g;
                }
            }
        }
        let O = new Array(f);
        let q = new Array(f);
        let _;
        for(let N = 0; N < f; N++){
            O[N] = 1;
        }
        for(let F = 0; F < iterations; F++){
            for(let U = 0; U < f; U++){
                q[U] = 0;
            }
            for(let J = 0; J < f; J++){
                for(let Z = 0; Z < f; Z++){
                    const j = J * f + Z;
                    q[J] += d[j] * O[Z];
                }
            }
            Ed(q);
            _ = O;
            O = q;
            q = _;
            let re = 0;
            for(let ne = 0; ne < f; ne++){
                const Q = _[ne] - O[ne];
                re += Q * Q;
            }
            if (re < precision) {
                break;
            }
        }
        const V = {
            rank (W) {
                W = o.collection(W)[0];
                return O[nodes.indexOf(W)];
            }
        };
        return V;
    }
};
const Uo = vr({
    root: null,
    weight (e) {
        return 1;
    },
    directed: false,
    alpha: 0
});
const Ut = {
    degreeCentralityNormalized (e) {
        e = Uo(e);
        const t = this.cy();
        const a = this.nodes();
        const a_length = a.length;
        if (e.directed) {
            const v = {};
            const f = {};
            let c = 0;
            let h = 0;
            for(let d = 0; d < a_length; d++){
                const y = a[d];
                const g = y.id();
                e.root = y;
                const p = this.degreeCentrality(e);
                if (c < p.indegree) {
                    c = p.indegree;
                }
                if (h < p.outdegree) {
                    h = p.outdegree;
                }
                v[g] = p.indegree;
                f[g] = p.outdegree;
            }
            return {
                indegree (b) {
                    if (c == 0) {
                        return 0;
                    }
                    if (he(b)) {
                        b = t.filter(b);
                    }
                    return v[b.id()] / c;
                },
                outdegree (b) {
                    if (h === 0) {
                        return 0;
                    }
                    if (he(b)) {
                        b = t.filter(b);
                    }
                    return f[b.id()] / h;
                }
            };
        } else {
            const i = {};
            let s = 0;
            for(let o = 0; o < a_length; o++){
                const u = a[o];
                e.root = u;
                const l = this.degreeCentrality(e);
                if (s < l.degree) {
                    s = l.degree;
                }
                i[u.id()] = l.degree;
            }
            return {
                degree (b) {
                    if (s === 0) {
                        return 0;
                    }
                    if (he(b)) {
                        b = t.filter(b);
                    }
                    return i[b.id()] / s;
                }
            };
        }
    },
    degreeCentrality (e) {
        e = Uo(e);
        const t = this.cy();
        const a = this;
        const n = e;
        let n_root = n.root;
        const { weight, directed, alpha } = n;
        n_root = t.collection(n_root)[0];
        if (directed) {
            const h = n_root.connectedEdges();
            for(var d = h.filter((C)=>C.target().same(n_root) && a.has(C)), y = h.filter((C)=>C.source().same(n_root) && a.has(C)), g = d.length, p = y.length, m = 0, b = 0, w = 0; w < d.length; w++){
                m += weight(d[w]);
            }
            for(let E = 0; E < y.length; E++){
                b += weight(y[E]);
            }
            return {
                indegree: g ** (1 - alpha) * m ** alpha,
                outdegree: p ** (1 - alpha) * b ** alpha
            };
        } else {
            for(var l = n_root.connectedEdges().intersection(a), v = l.length, f = 0, c = 0; c < l.length; c++){
                f += weight(l[c]);
            }
            return {
                degree: v ** (1 - alpha) * f ** alpha
            };
        }
    }
};
Ut.dc = Ut.degreeCentrality;
Ut.dcn = Ut.degreeCentralityNormalised = Ut.degreeCentralityNormalized;
const Ko = vr({
    harmonic: true,
    weight () {
        return 1;
    },
    directed: false,
    root: null
});
const Kt = {
    closenessCentralityNormalized (e) {
        const t = Ko(e);
        const { harmonic, weight, directed } = t;
        const s = this.cy();
        const o = {};
        let u = 0;
        for(let l = this.nodes(), v = this.floydWarshall({
            weight,
            directed
        }), f = 0; f < l.length; f++){
            let c = 0;
            const h = l[f];
            for(let d = 0; d < l.length; d++){
                if (f !== d) {
                    const y = v.distance(h, l[d]);
                    if (harmonic) {
                        c += 1 / y;
                    } else {
                        c += y;
                    }
                }
            }
            if (!harmonic) {
                c = 1 / c;
            }
            if (u < c) {
                u = c;
            }
            o[h.id()] = c;
        }
        return {
            closeness (p) {
                if (u == 0) {
                    return 0;
                }
                if (he(p)) {
                    p = s.filter(p)[0].id();
                } else {
                    p = p.id();
                }
                return o[p] / u;
            }
        };
    },
    closenessCentrality (e) {
        const t = Ko(e);
        let t_root = t.root;
        const { weight, directed, harmonic } = t;
        t_root = this.filter(t_root)[0];
        const o = this.dijkstra({
            root: t_root,
            weight,
            directed
        });
        let u = 0;
        for(let l = this.nodes(), v = 0; v < l.length; v++){
            const f = l[v];
            if (!f.same(t_root)) {
                const c = o.distanceTo(f);
                if (harmonic) {
                    u += 1 / c;
                } else {
                    u += c;
                }
            }
        }
        if (harmonic) {
            return u;
        }
        return 1 / u;
    }
};
Kt.cc = Kt.closenessCentrality;
Kt.ccn = Kt.closenessCentralityNormalised = Kt.closenessCentralityNormalized;
const Hd = vr({
    weight: null,
    directed: false
});
const Ps = {
    betweennessCentrality (e) {
        const t = Hd(e);
        const { directed, weight } = t;
        const i = weight != null;
        const s = this.cy();
        for(var o = this.nodes(), u = {}, l = {}, v = 0, f = {
            set (b, w) {
                l[b] = w;
                if (w > v) {
                    v = w;
                }
            },
            get (b) {
                return l[b];
            }
        }, c = 0; c < o.length; c++){
            const h = o[c];
            const d = h.id();
            if (directed) {
                u[d] = h.outgoers().nodes();
            } else {
                u[d] = h.openNeighborhood().nodes();
            }
            f.set(d, 0);
        }
        const y = ()=>{
            const b = o[g].id();
            const w = [];
            const E = {};
            const C = {};
            const x = {};
            const T = new za((J, Z)=>x[J] - x[Z]);
            for(let k = 0; k < o.length; k++){
                const D = o[k].id();
                E[D] = [];
                C[D] = 0;
                x[D] = Infinity;
            }
            C[b] = 1;
            x[b] = 0;
            T.push(b);
            while(!T.empty()){
                const B = T.pop();
                w.push(B);
                if (i) {
                    for(let P = 0; P < u[B].length; P++){
                        let A = u[B][P];
                        const R = s.getElementById(B);
                        let L;
                        if (R.edgesTo(A).length > 0) {
                            L = R.edgesTo(A)[0];
                        } else {
                            L = A.edgesTo(R)[0];
                        }
                        const I = weight(L);
                        A = A.id();
                        if (x[A] > x[B] + I) {
                            x[A] = x[B] + I;
                            if (T.nodes.indexOf(A) < 0) {
                                T.push(A);
                            } else {
                                T.updateItem(A);
                            }
                            C[A] = 0;
                            E[A] = [];
                        }
                        if (x[A] == x[B] + I) {
                            C[A] = C[A] + C[B];
                            E[A].push(B);
                        }
                    }
                } else {
                    for(let M = 0; M < u[B].length; M++){
                        const O = u[B][M].id();
                        if (x[O] == Infinity) {
                            T.push(O);
                            x[O] = x[B] + 1;
                        }
                        if (x[O] == x[B] + 1) {
                            C[O] = C[O] + C[B];
                            E[O].push(B);
                        }
                    }
                }
            }
            const q = {};
            for(let _ = 0; _ < o.length; _++){
                q[o[_].id()] = 0;
            }
            while(w.length > 0){
                for(var N = w.pop(), F = 0; F < E[N].length; F++){
                    const U = E[N][F];
                    q[U] = q[U] + C[U] / C[N] * (1 + q[N]);
                }
                if (N != o[g].id()) {
                    f.set(N, f.get(N) + q[N]);
                }
            }
        };
        for(var g = 0; g < o.length; g++){
            y();
        }
        const p = {
            betweenness (b) {
                const w = s.collection(b).id();
                return f.get(w);
            },
            betweennessNormalized (b) {
                if (v == 0) {
                    return 0;
                }
                const w = s.collection(b).id();
                return f.get(w) / v;
            }
        };
        p.betweennessNormalised = p.betweennessNormalized;
        return p;
    }
};
Ps.bc = Ps.betweennessCentrality;
const Wd = vr({
    expandFactor: 2,
    inflateFactor: 2,
    multFactor: 1,
    maxIterations: 20,
    attributes: [
        (r)=>1
    ]
});
const $d = (e)=>Wd(e);
const Ud = (e, attributes)=>{
    let a = 0;
    for(let n = 0; n < attributes.length; n++){
        a += attributes[n](e);
    }
    return a;
};
const Kd = (e, t, multFactor)=>{
    for(let n = 0; n < t; n++){
        e[n * t + n] = multFactor;
    }
};
const xv = (e, t)=>{
    let a;
    for(let n = 0; n < t; n++){
        a = 0;
        for(let i = 0; i < t; i++){
            a += e[i * t + n];
        }
        for(let s = 0; s < t; s++){
            e[s * t + n] = e[s * t + n] / a;
        }
    }
};
const Xd = (e, t, a)=>{
    const n = new Array(a * a);
    for(let i = 0; i < a; i++){
        for(let s = 0; s < a; s++){
            n[i * a + s] = 0;
        }
        for(let o = 0; o < a; o++){
            for(let u = 0; u < a; u++){
                n[i * a + u] += e[i * a + o] * t[o * a + u];
            }
        }
    }
    return n;
};
const Yd = (e, t, expandFactor)=>{
    const n = e.slice(0);
    for(let i = 1; i < expandFactor; i++){
        e = Xd(e, n, t);
    }
    return e;
};
const Zd = (e, t, inflateFactor)=>{
    const n = new Array(t * t);
    for(let i = 0; i < t * t; i++){
        n[i] = e[i] ** inflateFactor;
    }
    xv(n, t);
    return n;
};
const Qd = (e, t, a, n)=>{
    for(let i = 0; i < a; i++){
        const s = Math.round(e[i] * 10 ** n) / 10 ** n;
        const o = Math.round(t[i] * 10 ** n) / 10 ** n;
        if (s !== o) {
            return false;
        }
    }
    return true;
};
const Jd = (e, t, a, n)=>{
    const i = [];
    for(let s = 0; s < t; s++){
        const o = [];
        for(let u = 0; u < t; u++){
            if (Math.round(e[s * t + u] * 1000) / 1000 > 0) {
                o.push(a[u]);
            }
        }
        if (o.length !== 0) {
            i.push(n.collection(o));
        }
    }
    return i;
};
const jd = (e, t)=>{
    for(let a = 0; a < e.length; a++){
        if (!t[a] || e[a].id() !== t[a].id()) {
            return false;
        }
    }
    return true;
};
const eh = (e)=>{
    for(let t = 0; t < e.length; t++){
        for(let a = 0; a < e.length; a++){
            if (t != a && jd(e[t], e[a])) {
                e.splice(a, 1);
            }
        }
    }
    return e;
};
const Xo = function(e) {
    for(var t = this.nodes(), a = this.edges(), n = this.cy(), i = $d(e), s = {}, o = 0; o < t.length; o++){
        s[t[o].id()] = o;
    }
    const t_length = t.length;
    let f;
    for(var l = t_length * t_length, v = new Array(l), c = 0; c < l; c++){
        v[c] = 0;
    }
    for (const d of a){
        const y = s[d.source().id()];
        const g = s[d.target().id()];
        const p = Ud(d, i.attributes);
        v[y * t_length + g] += p;
        v[g * t_length + y] += p;
    }
    Kd(v, t_length, i.multFactor);
    xv(v, t_length);
    for(let m = true, b = 0; m && b < i.maxIterations;){
        m = false;
        f = Yd(v, t_length, i.expandFactor);
        v = Zd(f, t_length, i.inflateFactor);
        if (!Qd(v, f, l, 4)) {
            m = true;
        }
        b++;
    }
    let w = Jd(v, t_length, t, n);
    w = eh(w);
    return w;
};
const rh = {
    markovClustering: Xo,
    mcl: Xo
};
const th = (e)=>e;
const Ev = (e, t)=>Math.abs(t - e);
const Yo = (e, t, a)=>e + Ev(t, a);
const Zo = (e, t, a)=>e + (a - t) ** 2;
const ah = (e)=>Math.sqrt(e);
const nh = (e, t, a)=>Math.max(e, Ev(t, a));
const ua = (e, t, a, n, i, s = th)=>{
    let o = n;
    let u;
    let l;
    for(let v = 0; v < e; v++){
        u = t(v);
        l = a(v);
        o = i(o, u, l);
    }
    return s(o);
};
const Zt = {
    euclidean (e, t, a) {
        if (e >= 2) {
            return ua(e, t, a, 0, Zo, ah);
        }
        return ua(e, t, a, 0, Yo);
    },
    squaredEuclidean (e, t, a) {
        return ua(e, t, a, 0, Zo);
    },
    manhattan (e, t, a) {
        return ua(e, t, a, 0, Yo);
    },
    max (e, t, a) {
        return ua(e, t, a, -Infinity, nh);
    }
};
Zt["squared-euclidean"] = Zt.squaredEuclidean;
Zt.squaredeuclidean = Zt.squaredEuclidean;
function In(r, e, t, a, n, i) {
    let s;
    if ($e(r)) {
        s = r;
    } else {
        s = Zt[r] || Zt.euclidean;
    }
    if (e === 0 && $e(r)) {
        return s(n, i);
    }
    return s(e, t, a, n, i);
}
const ih = vr({
    k: 2,
    m: 2,
    sensitivityThreshold: 0.0001,
    distance: "euclidean",
    maxIterations: 10,
    attributes: [],
    testMode: false,
    testCentroids: null
});
const ao = (e)=>ih(e);
const En = (e, t, a, attributes, i)=>{
    const s = i !== "kMedoids";
    const o = s ? (f)=>a[f] : (f)=>attributes[f](a);
    const u = (c)=>attributes[c](t);
    const l = a;
    return In(e, attributes.length, o, u, l, t);
};
const pi = (e, t, attributes)=>{
    for(var n = attributes.length, i = new Array(n), s = new Array(n), o = new Array(t), u = null, l = 0; l < n; l++){
        i[l] = e.min(attributes[l]).value;
        s[l] = e.max(attributes[l]).value;
    }
    for(let v = 0; v < t; v++){
        u = [];
        for(let f = 0; f < n; f++){
            u[f] = Math.random() * (s[f] - i[f]) + i[f];
        }
        o[v] = u;
    }
    return o;
};
const Cv = (e, t, distance, attributes, i)=>{
    let s = Infinity;
    let o = 0;
    for(let u = 0; u < t.length; u++){
        const l = En(distance, e, t[u], attributes, i);
        if (l < s) {
            s = l;
            o = u;
        }
    }
    return o;
};
const Tv = (e, t, a)=>{
    const n = [];
    let i = null;
    for(let s = 0; s < t.length; s++){
        i = t[s];
        if (a[i.id()] === e) {
            n.push(i);
        }
    }
    return n;
};
const sh = (e, t, sensitivityThreshold)=>Math.abs(t - e) <= sensitivityThreshold;
const oh = (degreeOfMembership, t, sensitivityThreshold)=>{
    for(let n = 0; n < degreeOfMembership.length; n++){
        for(let i = 0; i < degreeOfMembership[n].length; i++){
            const s = Math.abs(degreeOfMembership[n][i] - t[n][i]);
            if (s > sensitivityThreshold) {
                return false;
            }
        }
    }
    return true;
};
const uh = (e, t, a)=>{
    for(let n = 0; n < a; n++){
        if (e === t[n]) {
            return true;
        }
    }
    return false;
};
const Qo = (e, t)=>{
    const a = new Array(t);
    if (e.length < 50) {
        for(let n = 0; n < t; n++){
            for(var i = e[Math.floor(Math.random() * e.length)]; uh(i, a, n);){
                i = e[Math.floor(Math.random() * e.length)];
            }
            a[n] = i;
        }
    } else {
        for(let s = 0; s < t; s++){
            a[s] = e[Math.floor(Math.random() * e.length)];
        }
    }
    return a;
};
const Jo = (e, t, attributes)=>{
    let n = 0;
    for(let i = 0; i < t.length; i++){
        n += En("manhattan", t[i], e, attributes, "kMedoids");
    }
    return n;
};
const kMeans = function(e) {
    const t = this.cy();
    const a = this.nodes();
    let n = null;
    const i = ao(e);
    const s = new Array(i.k);
    const o = {};
    let u;
    if (i.testMode) {
        if (typeof i.testCentroids === "number") {
            i.testCentroids;
            u = pi(a, i.k, i.attributes);
        } else if (typeof i.testCentroids === "object") {
            u = i.testCentroids;
        } else {
            u = pi(a, i.k, i.attributes);
        }
    } else {
        u = pi(a, i.k, i.attributes);
    }
    for(let l = true, v = 0; l && v < i.maxIterations;){
        for(let f = 0; f < a.length; f++){
            n = a[f];
            o[n.id()] = Cv(n, u, i.distance, i.attributes, "kMeans");
        }
        l = false;
        for(let c = 0; c < i.k; c++){
            const h = Tv(c, a, o);
            if (h.length !== 0) {
                for(var d = i.attributes.length, y = u[c], g = new Array(d), p = new Array(d), m = 0; m < d; m++){
                    p[m] = 0;
                    for(let b = 0; b < h.length; b++){
                        n = h[b];
                        p[m] += i.attributes[m](n);
                    }
                    g[m] = p[m] / h.length;
                    if (!sh(g[m], y[m], i.sensitivityThreshold)) {
                        l = true;
                    }
                }
                u[c] = g;
                s[c] = t.collection(h);
            }
        }
        v++;
    }
    return s;
};
const kMedoids = function(e) {
    const t = this.cy();
    const a = this.nodes();
    let n = null;
    const i = ao(e);
    const s = new Array(i.k);
    let o;
    const u = {};
    let l;
    const v = new Array(i.k);
    if (i.testMode) {
        typeof i.testCentroids === "number" || (typeof i.testCentroids === "object" ? o = i.testCentroids : o = Qo(a, i.k));
    } else {
        o = Qo(a, i.k);
    }
    for(let f = true, c = 0; f && c < i.maxIterations;){
        for(let h = 0; h < a.length; h++){
            n = a[h];
            u[n.id()] = Cv(n, o, i.distance, i.attributes, "kMedoids");
        }
        f = false;
        for(let d = 0; d < o.length; d++){
            const y = Tv(d, a, u);
            if (y.length !== 0) {
                v[d] = Jo(o[d], y, i.attributes);
                for(let g = 0; g < y.length; g++){
                    l = Jo(y[g], y, i.attributes);
                    if (l < v[d]) {
                        v[d] = l;
                        o[d] = y[g];
                        f = true;
                    }
                }
                s[d] = t.collection(y);
            }
        }
        c++;
    }
    return s;
};
const fh = (e, t, degreeOfMembership, n, i)=>{
    let s;
    let o;
    for(let u = 0; u < t.length; u++){
        for(let l = 0; l < e.length; l++){
            n[u][l] = degreeOfMembership[u][l] ** i.m;
        }
    }
    for(let v = 0; v < e.length; v++){
        for(let f = 0; f < i.attributes.length; f++){
            s = 0;
            o = 0;
            for(let c = 0; c < t.length; c++){
                s += n[c][v] * i.attributes[f](t[c]);
                o += n[c][v];
            }
            e[v][f] = s / o;
        }
    }
};
const ch = (degreeOfMembership, t, a, n, i)=>{
    for(let s = 0; s < degreeOfMembership.length; s++){
        t[s] = degreeOfMembership[s].slice();
    }
    let o;
    let u;
    let l;
    const v = 2 / (i.m - 1);
    for(let f = 0; f < a.length; f++){
        for(let c = 0; c < n.length; c++){
            o = 0;
            for(let h = 0; h < a.length; h++){
                u = En(i.distance, n[c], a[f], i.attributes, "cmeans");
                l = En(i.distance, n[c], a[h], i.attributes, "cmeans");
                o += (u / l) ** v;
            }
            degreeOfMembership[c][f] = 1 / o;
        }
    }
};
const dh = (e, degreeOfMembership, a, n)=>{
    for(var i = new Array(a.k), s = 0; s < i.length; s++){
        i[s] = [];
    }
    let o;
    let u;
    for(let l = 0; l < degreeOfMembership.length; l++){
        o = -Infinity;
        u = -1;
        for(let v = 0; v < degreeOfMembership[0].length; v++){
            if (degreeOfMembership[l][v] > o) {
                o = degreeOfMembership[l][v];
                u = v;
            }
        }
        i[u].push(e[l]);
    }
    for(let f = 0; f < i.length; f++){
        i[f] = n.collection(i[f]);
    }
    return i;
};
const jo = function(e) {
    const t = this.cy();
    const a = this.nodes();
    const n = ao(e);
    let clusters;
    let s;
    let degreeOfMembership;
    let u;
    let l;
    u = new Array(a.length);
    for(let v = 0; v < a.length; v++){
        u[v] = new Array(n.k);
    }
    degreeOfMembership = new Array(a.length);
    for(let f = 0; f < a.length; f++){
        degreeOfMembership[f] = new Array(n.k);
    }
    for(let c = 0; c < a.length; c++){
        let h = 0;
        for(let d = 0; d < n.k; d++){
            degreeOfMembership[c][d] = Math.random();
            h += degreeOfMembership[c][d];
        }
        for(let y = 0; y < n.k; y++){
            degreeOfMembership[c][y] = degreeOfMembership[c][y] / h;
        }
    }
    s = new Array(n.k);
    for(let g = 0; g < n.k; g++){
        s[g] = new Array(n.attributes.length);
    }
    l = new Array(a.length);
    for(let p = 0; p < a.length; p++){
        l[p] = new Array(n.k);
    }
    for(let m = true, b = 0; m && b < n.maxIterations;){
        m = false;
        fh(s, a, degreeOfMembership, l, n);
        ch(degreeOfMembership, u, s, a, n);
        if (!oh(degreeOfMembership, u, n.sensitivityThreshold)) {
            m = true;
        }
        b++;
    }
    clusters = dh(a, degreeOfMembership, n, t);
    return {
        clusters,
        degreeOfMembership
    };
};
const hh = {
    kMeans,
    kMedoids,
    fuzzyCMeans: jo,
    fcm: jo
};
const gh = vr({
    distance: "euclidean",
    linkage: "min",
    mode: "threshold",
    threshold: Infinity,
    addDendrogram: false,
    dendrogramDepth: 0,
    attributes: []
});
const ph = {
    single: "min",
    complete: "max"
};
const yh = (e)=>{
    const t = gh(e);
    const a = ph[t.linkage];
    if (a != null) {
        t.linkage = a;
    }
    return t;
};
const eu = (e, t, a, n, i)=>{
    let s = 0;
    let o = Infinity;
    let u;
    const i_attributes = i.attributes;
    const v = (k, D)=>In(i.distance, i_attributes.length, (B)=>i_attributes[B](k), (B)=>i_attributes[B](D), k, D);
    for(let f = 0; f < e.length; f++){
        const c = e[f].key;
        const h = a[c][n[c]];
        if (h < o) {
            s = c;
            o = h;
        }
    }
    if (i.mode === "threshold" && o >= i.threshold || i.mode === "dendrogram" && e.length === 1) {
        return false;
    }
    const d = t[s];
    const y = t[n[s]];
    let g;
    if (i.mode === "dendrogram") {
        g = {
            left: d,
            right: y,
            key: d.key
        };
    } else {
        g = {
            value: d.value.concat(y.value),
            key: d.key
        };
    }
    e[d.index] = g;
    e.splice(y.index, 1);
    t[d.key] = g;
    for (const m of e){
        if (d.key === m.key) {
            u = Infinity;
        } else if (i.linkage === "min") {
            u = a[d.key][m.key];
            if (a[d.key][m.key] > a[y.key][m.key]) {
                u = a[y.key][m.key];
            }
        } else if (i.linkage === "max") {
            u = a[d.key][m.key];
            if (a[d.key][m.key] < a[y.key][m.key]) {
                u = a[y.key][m.key];
            }
        } else if (i.linkage === "mean") {
            u = (a[d.key][m.key] * d.size + a[y.key][m.key] * y.size) / (d.size + y.size);
        } else if (i.mode === "dendrogram") {
            u = v(m.value, d.value);
        } else {
            u = v(m.value[0], d.value[0]);
        }
        a[d.key][m.key] = a[m.key][d.key] = u;
    }
    for(let b = 0; b < e.length; b++){
        const w = e[b].key;
        if (n[w] === d.key || n[w] === y.key) {
            let E = w;
            for(let C = 0; C < e.length; C++){
                const x = e[C].key;
                if (a[w][x] < a[w][E]) {
                    E = x;
                }
            }
            n[w] = E;
        }
        e[b].index = b;
    }
    d.key = y.key = d.index = y.index = null;
    return true;
};
const Ht = (e, t, a)=>{
    e && (e.value ? t.push(e.value) : (e.left && Ht(e.left, t), e.right && Ht(e.right, t)));
};
const As = (e, t)=>{
    if (!e) {
        return "";
    }
    if (e.left && e.right) {
        const a = As(e.left, t);
        const n = As(e.right, t);
        const i = t.add({
            group: "nodes",
            data: {
                id: `${a},${n}`
            }
        });
        t.add({
            group: "edges",
            data: {
                source: a,
                target: i.id()
            }
        });
        t.add({
            group: "edges",
            data: {
                source: n,
                target: i.id()
            }
        });
        return i.id();
    } else if (e.value) {
        return e.value.id();
    }
};
const Rs = (e, t, a)=>{
    if (!e) {
        return [];
    }
    let n = [];
    let i = [];
    let s = [];
    if (t === 0) {
        if (e.left) {
            Ht(e.left, n);
        }
        if (e.right) {
            Ht(e.right, i);
        }
        s = n.concat(i);
        return [
            a.collection(s)
        ];
    }
    if (t === 1) {
        if (e.value) {
            return [
                a.collection(e.value)
            ];
        }
        if (e.left) {
            Ht(e.left, n);
        }
        if (e.right) {
            Ht(e.right, i);
        }
        return [
            a.collection(n),
            a.collection(i)
        ];
    }
    if (e.value) {
        return [
            a.collection(e.value)
        ];
    }
    if (e.left) {
        n = Rs(e.left, t - 1, a);
    }
    if (e.right) {
        i = Rs(e.right, t - 1, a);
    }
    return n.concat(i);
};
const ru = function(e) {
    const t = this.cy();
    for(var a = this.nodes(), n = yh(e), i = n.attributes, s = (b, w)=>In(n.distance, i.length, (E)=>i[E](b), (E)=>i[E](w), b, w), o = [], u = [], l = [], v = [], f = 0; f < a.length; f++){
        const c = {
            value: n.mode === "dendrogram" ? a[f] : [
                a[f]
            ],
            key: f,
            index: f
        };
        o[f] = c;
        v[f] = c;
        u[f] = [];
        l[f] = 0;
    }
    for(let h = 0; h < o.length; h++){
        for(let d = 0; d <= h; d++){
            let y;
            if (n.mode === "dendrogram") {
                y = h === d ? Infinity : s(o[h].value, o[d].value);
            } else {
                y = h === d ? Infinity : s(o[h].value[0], o[d].value[0]);
            }
            u[h][d] = y;
            u[d][h] = y;
            if (y < u[h][l[h]]) {
                l[h] = d;
            }
        }
    }
    for(let g = eu(o, v, u, l, n); g;){
        g = eu(o, v, u, l, n);
    }
    let p;
    if (n.mode === "dendrogram") {
        p = Rs(o[0], n.dendrogramDepth, t);
        if (n.addDendrogram) {
            As(o[0], t);
        }
    } else {
        p = new Array(o.length);
        o.forEach((m, b)=>{
            m.key = m.index = null;
            p[b] = t.collection(m.value);
        });
    }
    return p;
};
const mh = {
    hierarchicalClustering: ru,
    hca: ru
};
const bh = vr({
    distance: "euclidean",
    preference: "median",
    damping: 0.8,
    maxIterations: 1000,
    minIterations: 100,
    attributes: []
});
const wh = (e)=>{
    const { damping, preference } = e;
    if (!(damping >= 0.5 && damping < 1)) {
        He(`Damping must range on [0.5, 1).  Got: ${damping}`);
    }
    const n = [
        "median",
        "mean",
        "min",
        "max"
    ];
    if (!(n.some((i)=>i === preference) || ae(preference))) {
        He(`Preference must be one of [${n.map((i)=>`'${i}'`).join(", ")}] or a number.  Got: ${preference}`);
    }
    return bh(e);
};
const xh = (distance, t, a, attributes)=>{
    const i = (o, u)=>attributes[u](o);
    return -In(distance, attributes.length, (s)=>i(t, s), (s)=>i(a, s), t, a);
};
const Eh = (e, preference)=>{
    let a = null;
    switch(preference){
        case "median":
            a = wd(e);
            break;
        case "mean":
            a = bd(e);
            break;
        case "min":
            a = yd(e);
            break;
        case "max":
            a = md(e);
            break;
        default:
            a = preference;
    }
    return a;
};
const Ch = (e, t, a)=>{
    const n = [];
    for(let i = 0; i < e; i++){
        if (t[i * e + i] + a[i * e + i] > 0) {
            n.push(i);
        }
    }
    return n;
};
const tu = (e, t, a)=>{
    const n = [];
    for(let i = 0; i < e; i++){
        let s = -1;
        let o = -Infinity;
        for (const l of a){
            if (t[i * e + l] > o) {
                s = l;
                o = t[i * e + l];
            }
        }
        if (s > 0) {
            n.push(s);
        }
    }
    for(let v = 0; v < a.length; v++){
        n[a[v]] = a[v];
    }
    return n;
};
const Th = (e, t, a)=>{
    let n = tu(e, t, a);
    for(let i = 0; i < a.length; i++){
        const s = [];
        for(let o = 0; o < n.length; o++){
            if (n[o] === a[i]) {
                s.push(o);
            }
        }
        let u = -1;
        let l = -Infinity;
        for(let v = 0; v < s.length; v++){
            let f = 0;
            for(let c = 0; c < s.length; c++){
                f += t[s[c] * e + s[v]];
            }
            if (f > l) {
                u = v;
                l = f;
            }
        }
        a[i] = s[u];
    }
    n = tu(e, t, a);
    return n;
};
const au = function(e) {
    const t = this.cy();
    for(var a = this.nodes(), n = wh(e), i = {}, s = 0; s < a.length; s++){
        i[a[s].id()] = s;
    }
    let o;
    let u;
    let l;
    let v;
    let f;
    let c;
    o = a.length;
    u = o * o;
    l = new Array(u);
    for(let h = 0; h < u; h++){
        l[h] = -Infinity;
    }
    for(let d = 0; d < o; d++){
        for(let y = 0; y < o; y++){
            if (d !== y) {
                l[d * o + y] = xh(n.distance, a[d], a[y], n.attributes);
            }
        }
    }
    v = Eh(l, n.preference);
    for(let g = 0; g < o; g++){
        l[g * o + g] = v;
    }
    f = new Array(u);
    for(let p = 0; p < u; p++){
        f[p] = 0;
    }
    c = new Array(u);
    for(let m = 0; m < u; m++){
        c[m] = 0;
    }
    const b = new Array(o);
    const w = new Array(o);
    const E = new Array(o);
    for(let C = 0; C < o; C++){
        b[C] = 0;
        w[C] = 0;
        E[C] = 0;
    }
    for(var x = new Array(o * n.minIterations), T = 0; T < x.length; T++){
        x[T] = 0;
    }
    let k;
    for(k = 0; k < n.maxIterations; k++){
        for(let D = 0; D < o; D++){
            let B = -Infinity;
            let P = -Infinity;
            let A = -1;
            let R = 0;
            for(let L = 0; L < o; L++){
                b[L] = f[D * o + L];
                R = c[D * o + L] + l[D * o + L];
                if (R >= B) {
                    P = B;
                    B = R;
                    A = L;
                } else if (R > P) {
                    P = R;
                }
            }
            for(let I = 0; I < o; I++){
                f[D * o + I] = (1 - n.damping) * (l[D * o + I] - B) + n.damping * b[I];
            }
            f[D * o + A] = (1 - n.damping) * (l[D * o + A] - P) + n.damping * b[A];
        }
        for(let M = 0; M < o; M++){
            let O = 0;
            for(let q = 0; q < o; q++){
                b[q] = c[q * o + M];
                w[q] = Math.max(0, f[q * o + M]);
                O += w[q];
            }
            O -= w[M];
            w[M] = f[M * o + M];
            O += w[M];
            for(let _ = 0; _ < o; _++){
                c[_ * o + M] = (1 - n.damping) * Math.min(0, O - w[_]) + n.damping * b[_];
            }
            c[M * o + M] = (1 - n.damping) * (O - w[M]) + n.damping * b[M];
        }
        let N = 0;
        for(let F = 0; F < o; F++){
            const U = c[F * o + F] + f[F * o + F] > 0 ? 1 : 0;
            x[k % n.minIterations * o + F] = U;
            N += U;
        }
        if (N > 0 && (k >= n.minIterations - 1 || k == n.maxIterations - 1)) {
            let J = 0;
            for(let Z = 0; Z < o; Z++){
                E[Z] = 0;
                for(let j = 0; j < n.minIterations; j++){
                    E[Z] += x[j * o + Z];
                }
                (E[Z] === 0 || E[Z] === n.minIterations) && J++;
            }
            if (J === o) {
                break;
            }
        }
    }
    for(var re = Ch(o, f, c), ne = Th(o, l, re), Q = {}, V = 0; V < re.length; V++){
        Q[re[V]] = [];
    }
    for(let H = 0; H < a.length; H++){
        const W = i[a[H].id()];
        const Y = ne[W];
        if (Y != null) {
            Q[Y].push(a[H]);
        }
    }
    const te = new Array(re.length);
    for(let ce = 0; ce < re.length; ce++){
        te[ce] = t.collection(Q[re[ce]]);
    }
    return te;
};
const Sh = {
    affinityPropagation: au,
    ap: au
};
const kh = vr({
    root: undefined,
    directed: false
});
const Dh = {
    hierholzer (e) {
        if (!Me(e)) {
            const t = arguments;
            e = {
                root: t[0],
                directed: t[1]
            };
        }
        const a = kh(e);
        const { root, directed } = a;
        const s = this;
        let o = false;
        let u;
        let l;
        let v;
        if (root) {
            v = he(root) ? this.filter(root)[0].id() : root[0].id();
        }
        const f = {};
        const c = {};
        if (directed) {
            s.forEach((m)=>{
                const b = m.id();
                if (m.isNode()) {
                    const w = m.indegree(true);
                    const E = m.outdegree(true);
                    const C = w - E;
                    const x = E - w;
                    C == 1 ? u ? o = true : u = b : x == 1 ? l ? o = true : l = b : (x > 1 || C > 1) && (o = true);
                    f[b] = [];
                    m.outgoers().forEach((T)=>{
                        if (T.isEdge()) {
                            f[b].push(T.id());
                        }
                    });
                } else {
                    c[b] = [
                        undefined,
                        m.target().id()
                    ];
                }
            });
        } else {
            s.forEach((m)=>{
                const b = m.id();
                if (m.isNode()) {
                    const w = m.degree(true);
                    w % 2 && (u ? l ? o = true : l = b : u = b);
                    f[b] = [];
                    m.connectedEdges().forEach((E)=>f[b].push(E.id()));
                } else {
                    c[b] = [
                        m.source().id(),
                        m.target().id()
                    ];
                }
            });
        }
        const h = {
            found: false,
            trail: undefined
        };
        if (o) {
            return h;
        }
        if (l && u) {
            if (directed) {
                if (v && l != v) {
                    return h;
                }
                v = l;
            } else {
                if (v && l != v && u != v) {
                    return h;
                }
                if (!v) {
                    v = l;
                }
            }
        } else {
            if (!v) {
                v = s[0].id();
            }
        }
        const d = (b)=>{
            let C;
            let x;
            let T;
            for(var w = b, E = [
                b
            ]; f[w].length;){
                C = f[w].shift();
                x = c[C][0];
                T = c[C][1];
                if (w != T) {
                    f[T] = f[T].filter((k)=>k != C);
                    w = T;
                } else if (!directed && w != x) {
                    f[x] = f[x].filter((k)=>k != C);
                    w = x;
                }
                E.unshift(C);
                E.unshift(w);
            }
            return E;
        };
        const y = [];
        let g = [];
        for(g = d(v); g.length != 1;){
            if (f[g[0]].length == 0) {
                y.unshift(s.getElementById(g.shift()));
                y.unshift(s.getElementById(g.shift()));
            } else {
                g = d(g.shift()).concat(g);
            }
        }
        y.unshift(s.getElementById(g.shift()));
        for(const p in f){
            if (f[p].length) {
                return h;
            }
        }
        h.found = true;
        h.trail = this.spawn(y, true);
        return h;
    }
};
const Ya = function() {
    const e = this;
    const t = {};
    let id_1 = 0;
    let n = 0;
    const i = [];
    const s = [];
    const o = {};
    const u = (c, h)=>{
        for(var d = s.length - 1, y = [], g = e.spawn(); s[d].x != c || s[d].y != h;){
            y.push(s.pop().edge);
            d--;
        }
        y.push(s.pop().edge);
        y.forEach((p)=>{
            const m = p.connectedNodes().intersection(e);
            g.merge(p);
            m.forEach((b)=>{
                const w = b.id();
                const E = b.connectedEdges().intersection(e);
                g.merge(b);
                if (t[w].cutVertex) {
                    g.merge(E.filter((C)=>C.isLoop()));
                } else {
                    g.merge(E);
                }
            });
        });
        i.push(g);
    };
    const l = (c, h, d)=>{
        if (c === d) {
            n += 1;
        }
        t[h] = {
            id: id_1,
            low: id_1++,
            cutVertex: false
        };
        const y = e.getElementById(h).connectedEdges().intersection(e);
        if (y.size() === 0) {
            i.push(e.spawn(e.getElementById(h)));
        } else {
            let g;
            let p;
            let m;
            let b;
            y.forEach((w)=>{
                g = w.source().id();
                p = w.target().id();
                m = g === h ? p : g;
                if (m !== d) {
                    b = w.id();
                    if (!o[b]) {
                        o[b] = true;
                        s.push({
                            x: h,
                            y: m,
                            edge: w
                        });
                    }
                    if (m in t) {
                        t[h].low = Math.min(t[h].low, t[m].id);
                    } else {
                        l(c, m, h);
                        t[h].low = Math.min(t[h].low, t[m].low);
                        if (t[h].id <= t[m].low) {
                            t[h].cutVertex = true;
                            u(h, m);
                        }
                    }
                }
            });
        }
    };
    e.forEach((f)=>{
        if (f.isNode()) {
            const c = f.id();
            if (!(c in t)) {
                n = 0;
                l(c, c);
                t[c].cutVertex = n > 1;
            }
        }
    });
    const v = Object.keys(t).filter((f)=>t[f].cutVertex).map((f)=>e.getElementById(f));
    return {
        cut: e.spawn(v),
        components: i
    };
};
const Bh = {
    hopcroftTarjanBiconnected: Ya,
    htbc: Ya,
    htb: Ya,
    hopcroftTarjanBiconnectedComponents: Ya
};
const Za = function() {
    const e = this;
    const t = {};
    let a = 0;
    const n = [];
    const i = [];
    let s = e.spawn(e);
    const o = (l)=>{
        i.push(l);
        t[l] = {
            index: a,
            low: a++,
            explored: false
        };
        const v = e.getElementById(l).connectedEdges().intersection(e);
        v.forEach((y)=>{
            const g = y.target().id();
            g !== l && (g in t || o(g), t[g].explored || (t[l].low = Math.min(t[l].low, t[g].low)));
        });
        if (t[l].index === t[l].low) {
            const f = e.spawn();
            while(true){
                const c = i.pop();
                f.merge(e.getElementById(c));
                t[c].low = t[l].index;
                t[c].explored = true;
                if (c === l) {
                    break;
                }
            }
            const h = f.edgesWith(f);
            const d = f.merge(h);
            n.push(d);
            s = s.difference(d);
        }
    };
    e.forEach((u)=>{
        if (u.isNode()) {
            const l = u.id();
            if (!(l in t)) {
                o(l);
            }
        }
    });
    return {
        cut: s,
        components: n
    };
};
const Ph = {
    tarjanStronglyConnected: Za,
    tsc: Za,
    tscc: Za,
    tarjanStronglyConnectedComponents: Za
};
const Sv = {};
[
    Ca,
    id,
    sd,
    ud,
    vd,
    cd,
    gd,
    Gd,
    Ut,
    Kt,
    Ps,
    rh,
    hh,
    mh,
    Sh,
    Dh,
    Bh,
    Ph
].forEach((r)=>{
    ye(Sv, r);
});
const kv = 0;
const Dv = 1;
const Bv = 2;
const Or = function(e) {
    if (!(this instanceof Or)) {
        return new Or(e);
    }
    this.id = "Thenable/1.0.7";
    this.state = kv;
    this.fulfillValue = undefined;
    this.rejectReason = undefined;
    this.onFulfilled = [];
    this.onRejected = [];
    this.proxy = {
        then: this.then.bind(this)
    };
    if (typeof e === "function") {
        e.call(this, this.fulfill.bind(this), this.reject.bind(this));
    }
};
Or.prototype = {
    fulfill (e) {
        return nu(this, Dv, "fulfillValue", e);
    },
    reject (e) {
        return nu(this, Bv, "rejectReason", e);
    },
    then (e, t) {
        const a = this;
        const n = new Or;
        a.onFulfilled.push(su(e, n, "fulfill"));
        a.onRejected.push(su(t, n, "reject"));
        Pv(a);
        return n.proxy;
    }
};
var nu = (e, t, a, n)=>{
    if (e.state === kv) {
        e.state = t;
        e[a] = n;
        Pv(e);
    }
    return e;
};
var Pv = (e)=>{
    if (e.state === Dv) {
        iu(e, "onFulfilled", e.fulfillValue);
    } else if (e.state === Bv) {
        iu(e, "onRejected", e.rejectReason);
    }
};
var iu = (e, t, a)=>{
    if (e[t].length !== 0) {
        const n = e[t];
        e[t] = [];
        const i = ()=>{
            for(let o = 0; o < n.length; o++){
                n[o](a);
            }
        };
        if (typeof setImmediate === "function") {
            setImmediate(i);
        } else {
            setTimeout(i, 0);
        }
    }
};
var su = (e, t, a)=>(n)=>{
        if (typeof e !== "function") {
            t[a].call(t, n);
        } else {
            let i;
            try {
                i = e(n);
            } catch (error) {
                t.reject(error);
                return;
            }
            Av(t, i);
        }
    };
var Av = (e, t)=>{
    if (e === t || e.proxy === t) {
        e.reject(new TypeError("cannot resolve promise with itself"));
        return;
    }
    let a;
    if (typeof t === "object" && t !== null || typeof t === "function") {
        try {
            a = t.then;
        } catch (error) {
            e.reject(error);
            return;
        }
    }
    if (typeof a === "function") {
        let n = false;
        try {
            a.call(t, (i)=>{
                if (!n) {
                    n = true;
                    if (i === t) {
                        e.reject(new TypeError("circular thenable chain"));
                    } else {
                        Av(e, i);
                    }
                }
            }, (i)=>{
                if (!n) {
                    n = true;
                    e.reject(i);
                }
            });
        } catch (error) {
            if (!n) {
                e.reject(error);
            }
        }
        return;
    }
    e.fulfill(t);
};
Or.all = (r)=>new Or((e, t)=>{
        const a = new Array(r.length);
        let n = 0;
        const i = (u, l)=>{
            a[u] = l;
            n++;
            if (n === r.length) {
                e(a);
            }
        };
        for(let s = 0; s < r.length; s++){
            ((o)=>{
                const u = r[o];
                const l = u != null && u.then != null;
                if (l) {
                    u.then((f)=>{
                        i(o, f);
                    }, (f)=>{
                        t(f);
                    });
                } else {
                    const v = u;
                    i(o, v);
                }
            })(s);
        }
    });
Or.resolve = (r)=>new Or((e, t)=>{
        e(r);
    });
Or.reject = (r)=>new Or((e, t)=>{
        t(r);
    });
const ea = typeof Promise !== "undefined" ? Promise : Or;
const Ms = function(e, t, a) {
    const n = Ks(e);
    const i = !n;
    const s = this._private = ye({
        duration: 1000
    }, t, a);
    s.target = e;
    s.style = s.style || s.css;
    s.started = false;
    s.playing = false;
    s.hooked = false;
    s.applying = false;
    s.progress = 0;
    s.completes = [];
    s.frames = [];
    if (s.complete && $e(s.complete)) {
        s.completes.push(s.complete);
    }
    if (i) {
        const o = e.position();
        s.startPosition = s.startPosition || {
            x: o.x,
            y: o.y
        };
        s.startStyle = s.startStyle || e.cy().style().getAnimationStartStyle(e, s.style);
    }
    if (n) {
        const u = e.pan();
        s.startPan = {
            x: u.x,
            y: u.y
        };
        s.startZoom = e.zoom();
    }
    this.length = 1;
    this[0] = this;
};
const Ms_prototype = Ms.prototype;
ye(Ms_prototype, {
    instanceString () {
        return "animation";
    },
    hook () {
        const _private = this._private;
        if (!_private.hooked) {
            let t;
            const a = _private.target._private.animation;
            if (_private.queue) {
                t = a.queue;
            } else {
                t = a.current;
            }
            t.push(this);
            if (Tr(_private.target)) {
                _private.target.cy().addToAnimationPool(_private.target);
            }
            _private.hooked = true;
        }
        return this;
    },
    play () {
        const _private = this._private;
        if (_private.progress === 1) {
            _private.progress = 0;
        }
        _private.playing = true;
        _private.started = false;
        _private.stopped = false;
        this.hook();
        return this;
    },
    playing () {
        return this._private.playing;
    },
    apply () {
        const _private = this._private;
        _private.applying = true;
        _private.started = false;
        _private.stopped = false;
        this.hook();
        return this;
    },
    applying () {
        return this._private.applying;
    },
    pause () {
        const _private = this._private;
        _private.playing = false;
        _private.started = false;
        return this;
    },
    stop () {
        const _private = this._private;
        _private.playing = false;
        _private.started = false;
        _private.stopped = true;
        return this;
    },
    rewind () {
        return this.progress(0);
    },
    fastforward () {
        return this.progress(1);
    },
    time (e) {
        const _private = this._private;
        if (e === undefined) {
            return _private.progress * _private.duration;
        }
        return this.progress(e / _private.duration);
    },
    progress (e) {
        const _private = this._private;
        const t_playing = _private.playing;
        if (e === undefined) {
            return _private.progress;
        }
        if (t_playing) {
            this.pause();
        }
        _private.progress = e;
        _private.started = false;
        if (t_playing) {
            this.play();
        }
        return this;
    },
    completed () {
        return this._private.progress === 1;
    },
    reverse () {
        const _private = this._private;
        const e_playing = _private.playing;
        if (e_playing) {
            this.pause();
        }
        _private.progress = 1 - _private.progress;
        _private.started = false;
        const a = (l, v)=>{
            const f = _private[l];
            if (f != null) {
                _private[l] = _private[v];
                _private[v] = f;
            }
        };
        a("zoom", "startZoom");
        a("pan", "startPan");
        a("position", "startPosition");
        if (_private.style) {
            for(let n = 0; n < _private.style.length; n++){
                const i = _private.style[n];
                const s = i.name;
                const o = _private.startStyle[s];
                _private.startStyle[s] = i;
                _private.style[n] = o;
            }
        }
        if (e_playing) {
            this.play();
        }
        return this;
    },
    promise (e) {
        const _private = this._private;
        let a;
        switch(e){
            case "frame":
                a = _private.frames;
                break;
            default:
            case "complete":
            case "completed":
                a = _private.completes;
        }
        return new ea((n, i)=>{
            a.push(()=>{
                n();
            });
        });
    }
});
Ms_prototype.complete = Ms_prototype.completed;
Ms_prototype.run = Ms_prototype.play;
Ms_prototype.running = Ms_prototype.playing;
const Ah = {
    animated () {
        return function() {
            const t = this;
            const a = t.length !== undefined;
            const n = a ? t : [
                t
            ];
            const i = this._private.cy || this;
            if (!i.styleEnabled()) {
                return false;
            }
            const s = n[0];
            if (s) {
                return s._private.animation.current.length > 0;
            }
        };
    },
    clearQueue () {
        return function() {
            const t = this;
            const a = t.length !== undefined;
            const n = a ? t : [
                t
            ];
            const i = this._private.cy || this;
            if (!i.styleEnabled()) {
                return this;
            }
            for (const o of n){
                o._private.animation.queue = [];
            }
            return this;
        };
    },
    delay () {
        return function(t, a) {
            const n = this._private.cy || this;
            if (n.styleEnabled()) {
                return this.animate({
                    delay: t,
                    duration: t,
                    complete: a
                });
            }
            return this;
        };
    },
    delayAnimation () {
        return function(t, a) {
            const n = this._private.cy || this;
            if (n.styleEnabled()) {
                return this.animation({
                    delay: t,
                    duration: t,
                    complete: a
                });
            }
            return this;
        };
    },
    animation () {
        return function(t, a) {
            const n = this;
            const i = n.length !== undefined;
            const s = i ? n : [
                n
            ];
            const o = this._private.cy || this;
            const u = !i;
            const l = !u;
            if (!o.styleEnabled()) {
                return this;
            }
            const v = o.style();
            t = ye({}, t, a);
            const f = Object.keys(t).length === 0;
            if (f) {
                return new Ms(s[0], t);
            }
            if (t.duration === undefined) {
                t.duration = 400;
            }
            switch(t.duration){
                case "slow":
                    t.duration = 600;
                    break;
                case "fast":
                    t.duration = 200;
                    break;
            }
            if (l) {
                t.style = v.getPropsList(t.style || t.css);
                t.css = undefined;
            }
            if (l && t.renderedPosition != null) {
                const c = t.renderedPosition;
                const h = o.pan();
                const d = o.zoom();
                t.position = gv(c, d, h);
            }
            if (u && t.panBy != null) {
                const y = t.panBy;
                const g = o.pan();
                t.pan = {
                    x: g.x + y.x,
                    y: g.y + y.y
                };
            }
            const p = t.center || t.centre;
            if (u && p != null) {
                const m = o.getCenterPan(p.eles, t.zoom);
                if (m != null) {
                    t.pan = m;
                }
            }
            if (u && t.fit != null) {
                const b = t.fit;
                const w = o.getFitViewport(b.eles || b.boundingBox, b.padding);
                if (w != null) {
                    t.pan = w.pan;
                    t.zoom = w.zoom;
                }
            }
            if (u && Me(t.zoom)) {
                const E = o.getZoomedViewport(t.zoom);
                if (E != null) {
                    if (E.zoomed) {
                        t.zoom = E.zoom;
                    }
                    if (E.panned) {
                        t.pan = E.pan;
                    }
                } else {
                    t.zoom = null;
                }
            }
            return new Ms(s[0], t);
        };
    },
    animate () {
        return function(t, a) {
            const n = this;
            const i = n.length !== undefined;
            const s = i ? n : [
                n
            ];
            const o = this._private.cy || this;
            if (!o.styleEnabled()) {
                return this;
            }
            if (a) {
                t = ye({}, t, a);
            }
            for (const l of s){
                const v = l.animated() && (t.queue === undefined || t.queue);
                const f = l.animation(t, v ? {
                    queue: true
                } : undefined);
                f.play();
            }
            return this;
        };
    },
    stop () {
        return function(t, a) {
            const n = this;
            const i = n.length !== undefined;
            const s = i ? n : [
                n
            ];
            const o = this._private.cy || this;
            if (!o.styleEnabled()) {
                return this;
            }
            for (const l of s){
                const v = l._private;
                for(let f = v.animation.current, c = 0; c < f.length; c++){
                    const h = f[c];
                    const d = h._private;
                    if (a) {
                        d.duration = 0;
                    }
                }
                if (t) {
                    v.animation.queue = [];
                }
                if (!a) {
                    v.animation.current = [];
                }
            }
            o.notify("draw");
            return this;
        };
    }
};
let yi;
let ou;
function On() {
    if (ou) {
        return yi;
    }
    ou = 1;
    yi = Array.isArray;
    return yi;
}
let mi;
let uu;
function Rh() {
    if (uu) {
        return mi;
    }
    uu = 1;
    const r = On();
    const e = Oa();
    const t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    const a = /^\w*$/;
    function n(i, s) {
        if (r(i)) {
            return false;
        }
        const o = typeof i;
        if (o == "number" || o == "symbol" || o == "boolean" || i == null || e(i)) {
            return true;
        }
        return a.test(i) || !t.test(i) || s != null && i in Object(s);
    }
    mi = n;
    return mi;
}
let bi;
let lu;
function Mh() {
    if (lu) {
        return bi;
    }
    lu = 1;
    const r = sv();
    const e = Ia();
    const t = "[object AsyncFunction]";
    const a = "[object Function]";
    const n = "[object GeneratorFunction]";
    const i = "[object Proxy]";
    function s(o) {
        if (!e(o)) {
            return false;
        }
        const u = r(o);
        return u == a || u == n || u == t || u == i;
    }
    bi = s;
    return bi;
}
let wi;
let vu;
function Lh() {
    if (vu) {
        return wi;
    }
    vu = 1;
    const r = Rn();
    const e = r["__core-js_shared__"];
    wi = e;
    return wi;
}
let xi;
let fu;
function Ih() {
    if (fu) {
        return xi;
    }
    fu = 1;
    const r = Lh();
    const e = (()=>{
        const a = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
        if (a) {
            return `Symbol(src)_1.${a}`;
        }
        return "";
    })();
    function t(a) {
        return !!e && e in a;
    }
    xi = t;
    return xi;
}
let Ei;
let cu;
function Oh() {
    if (cu) {
        return Ei;
    }
    cu = 1;
    const toString = Function.prototype.toString;
    function t(a) {
        if (a != null) {
            try {
                return toString.call(a);
            } catch  {}
            try {
                return `${a}`;
            } catch  {}
        }
        return "";
    }
    Ei = t;
    return Ei;
}
let Ci;
let du;
function Nh() {
    if (du) {
        return Ci;
    }
    du = 1;
    const r = Mh();
    const e = Ih();
    const t = Ia();
    const a = Oh();
    const n = /[\\^$.*+?()[\]{}|]/g;
    const i = /^\[object .+?Constructor\]$/;
    const toString = Function.prototype.toString;
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const v = RegExp(`^${toString.call(hasOwnProperty).replace(n, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?")}\$`);
    function f(c) {
        if (!t(c) || e(c)) {
            return false;
        }
        const h = r(c) ? v : i;
        return h.test(a(c));
    }
    Ci = f;
    return Ci;
}
let Ti;
let hu;
function zh() {
    if (hu) {
        return Ti;
    }
    hu = 1;
    function r(e, t) {
        return e?.[t];
    }
    Ti = r;
    return Ti;
}
let Si;
let gu;
function no() {
    if (gu) {
        return Si;
    }
    gu = 1;
    const r = Nh();
    const e = zh();
    function t(a, n) {
        const i = e(a, n);
        if (r(i)) {
            return i;
        }
    }
    Si = t;
    return Si;
}
let ki;
let pu;
function Nn() {
    if (pu) {
        return ki;
    }
    pu = 1;
    const r = no();
    const e = r(Object, "create");
    ki = e;
    return ki;
}
let Di;
let yu;
function Fh() {
    if (yu) {
        return Di;
    }
    yu = 1;
    const r = Nn();
    function e() {
        this.__data__ = r ? r(null) : {};
        this.size = 0;
    }
    Di = e;
    return Di;
}
let Bi;
let mu;
function Vh() {
    if (mu) {
        return Bi;
    }
    mu = 1;
    function r(e) {
        const t = this.has(e) && delete this.__data__[e];
        this.size -= t ? 1 : 0;
        return t;
    }
    Bi = r;
    return Bi;
}
let Pi;
let bu;
function qh() {
    if (bu) {
        return Pi;
    }
    bu = 1;
    const r = Nn();
    const e = "__lodash_hash_undefined__";
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    function n(i) {
        const __data__ = this.__data__;
        if (r) {
            const o = __data__[i];
            if (o === e) {
                return undefined;
            }
            return o;
        }
        if (hasOwnProperty.call(__data__, i)) {
            return __data__[i];
        }
    }
    Pi = n;
    return Pi;
}
let Ai;
let wu;
function _h() {
    if (wu) {
        return Ai;
    }
    wu = 1;
    const r = Nn();
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    function a(n) {
        const __data__ = this.__data__;
        if (r) {
            return __data__[n] !== undefined;
        }
        return hasOwnProperty.call(__data__, n);
    }
    Ai = a;
    return Ai;
}
let Ri;
let xu;
function Gh() {
    if (xu) {
        return Ri;
    }
    xu = 1;
    const r = Nn();
    const e = "__lodash_hash_undefined__";
    function t(a, n) {
        const __data__ = this.__data__;
        this.size += this.has(a) ? 0 : 1;
        __data__[a] = r && n === undefined ? e : n;
        return this;
    }
    Ri = t;
    return Ri;
}
let Mi;
let Eu;
function Hh() {
    if (Eu) {
        return Mi;
    }
    Eu = 1;
    const r = Fh();
    const e = Vh();
    const t = qh();
    const a = _h();
    const n = Gh();
    function i(s) {
        let o = -1;
        const u = s == null ? 0 : s.length;
        for(this.clear(); ++o < u;){
            const l = s[o];
            this.set(l[0], l[1]);
        }
    }
    i.prototype.clear = r;
    i.prototype.delete = e;
    i.prototype.get = t;
    i.prototype.has = a;
    i.prototype.set = n;
    Mi = i;
    return Mi;
}
let Li;
let Cu;
function Wh() {
    if (Cu) {
        return Li;
    }
    Cu = 1;
    function r() {
        this.__data__ = [];
        this.size = 0;
    }
    Li = r;
    return Li;
}
let Ii;
let Tu;
function Rv() {
    if (Tu) {
        return Ii;
    }
    Tu = 1;
    function r(e, t) {
        return e === t || e !== e && t !== t;
    }
    Ii = r;
    return Ii;
}
let Oi;
let Su;
function zn() {
    if (Su) {
        return Oi;
    }
    Su = 1;
    const r = Rv();
    function e(t, a) {
        for(let n = t.length; n--;){
            if (r(t[n][0], a)) {
                return n;
            }
        }
        return -1;
    }
    Oi = e;
    return Oi;
}
let Ni;
let ku;
function $h() {
    if (ku) {
        return Ni;
    }
    ku = 1;
    const r = zn();
    const splice = Array.prototype.splice;
    function a(n) {
        const __data__ = this.__data__;
        const s = r(__data__, n);
        if (s < 0) {
            return false;
        }
        const o = __data__.length - 1;
        if (s == o) {
            __data__.pop();
        } else {
            splice.call(__data__, s, 1);
        }
        --this.size;
        return true;
    }
    Ni = a;
    return Ni;
}
let zi;
let Du;
function Uh() {
    if (Du) {
        return zi;
    }
    Du = 1;
    const r = zn();
    function e(t) {
        const __data__ = this.__data__;
        const n = r(__data__, t);
        if (n < 0) {
            return undefined;
        }
        return __data__[n][1];
    }
    zi = e;
    return zi;
}
let Fi;
let Bu;
function Kh() {
    if (Bu) {
        return Fi;
    }
    Bu = 1;
    const r = zn();
    function e(t) {
        return r(this.__data__, t) > -1;
    }
    Fi = e;
    return Fi;
}
let Vi;
let Pu;
function Xh() {
    if (Pu) {
        return Vi;
    }
    Pu = 1;
    const r = zn();
    function e(t, a) {
        const __data__ = this.__data__;
        const i = r(__data__, t);
        if (i < 0) {
            ++this.size;
            __data__.push([
                t,
                a
            ]);
        } else {
            __data__[i][1] = a;
        }
        return this;
    }
    Vi = e;
    return Vi;
}
let qi;
let Au;
function Yh() {
    if (Au) {
        return qi;
    }
    Au = 1;
    const r = Wh();
    const e = $h();
    const t = Uh();
    const a = Kh();
    const n = Xh();
    function i(s) {
        let o = -1;
        const u = s == null ? 0 : s.length;
        for(this.clear(); ++o < u;){
            const l = s[o];
            this.set(l[0], l[1]);
        }
    }
    i.prototype.clear = r;
    i.prototype.delete = e;
    i.prototype.get = t;
    i.prototype.has = a;
    i.prototype.set = n;
    qi = i;
    return qi;
}
let _i;
let Ru;
function Zh() {
    if (Ru) {
        return _i;
    }
    Ru = 1;
    const r = no();
    const e = Rn();
    const t = r(e, "Map");
    _i = t;
    return _i;
}
let Gi;
let Mu;
function Qh() {
    if (Mu) {
        return Gi;
    }
    Mu = 1;
    const r = Hh();
    const e = Yh();
    const t = Zh();
    function a() {
        this.size = 0;
        this.__data__ = {
            hash: new r,
            map: new (t || e),
            string: new r
        };
    }
    Gi = a;
    return Gi;
}
let Hi;
let Lu;
function Jh() {
    if (Lu) {
        return Hi;
    }
    Lu = 1;
    function r(e) {
        const t = typeof e;
        if (t == "string" || t == "number" || t == "symbol" || t == "boolean") {
            return e !== "__proto__";
        }
        return e === null;
    }
    Hi = r;
    return Hi;
}
let Wi;
let Iu;
function Fn() {
    if (Iu) {
        return Wi;
    }
    Iu = 1;
    const r = Jh();
    function e({ __data__ }, a) {
        if (r(a)) {
            return __data__[typeof a === "string" ? "string" : "hash"];
        }
        return __data__.map;
    }
    Wi = e;
    return Wi;
}
let $i;
let Ou;
function jh() {
    if (Ou) {
        return $i;
    }
    Ou = 1;
    const r = Fn();
    function e(t) {
        const a = r(this, t).delete(t);
        this.size -= a ? 1 : 0;
        return a;
    }
    $i = e;
    return $i;
}
let Ui;
let Nu;
function eg() {
    if (Nu) {
        return Ui;
    }
    Nu = 1;
    const r = Fn();
    function e(t) {
        return r(this, t).get(t);
    }
    Ui = e;
    return Ui;
}
let Ki;
let zu;
function rg() {
    if (zu) {
        return Ki;
    }
    zu = 1;
    const r = Fn();
    function e(t) {
        return r(this, t).has(t);
    }
    Ki = e;
    return Ki;
}
let Xi;
let Fu;
function tg() {
    if (Fu) {
        return Xi;
    }
    Fu = 1;
    const r = Fn();
    function e(t, a) {
        const n = r(this, t);
        const n_size = n.size;
        n.set(t, a);
        this.size += n.size == n_size ? 0 : 1;
        return this;
    }
    Xi = e;
    return Xi;
}
let Yi;
let Vu;
function ag() {
    if (Vu) {
        return Yi;
    }
    Vu = 1;
    const r = Qh();
    const e = jh();
    const t = eg();
    const a = rg();
    const n = tg();
    function i(s) {
        let o = -1;
        const u = s == null ? 0 : s.length;
        for(this.clear(); ++o < u;){
            const l = s[o];
            this.set(l[0], l[1]);
        }
    }
    i.prototype.clear = r;
    i.prototype.delete = e;
    i.prototype.get = t;
    i.prototype.has = a;
    i.prototype.set = n;
    Yi = i;
    return Yi;
}
let Zi;
let qu;
function ng() {
    if (qu) {
        return Zi;
    }
    qu = 1;
    const r = ag();
    const e = "Expected a function";
    function t(a, n) {
        if (typeof a !== "function" || n != null && typeof n !== "function") {
            throw new TypeError(e);
        }
        const i = function() {
            const s = arguments;
            const o = n ? n.apply(this, s) : s[0];
            const i_cache = i.cache;
            if (i_cache.has(o)) {
                return i_cache.get(o);
            }
            const l = a.apply(this, s);
            i.cache = i_cache.set(o, l) || i_cache;
            return l;
        };
        i.cache = new (t.Cache || r);
        return i;
    }
    t.Cache = r;
    Zi = t;
    return Zi;
}
let Qi;
let _u;
function ig() {
    if (_u) {
        return Qi;
    }
    _u = 1;
    const r = ng();
    const e = 500;
    function t(a) {
        const n = r(a, (s)=>{
            if (n_cache.size === e) {
                n_cache.clear();
            }
            return s;
        });
        var n_cache = n.cache;
        return n;
    }
    Qi = t;
    return Qi;
}
let Ji;
let Gu;
function Mv() {
    if (Gu) {
        return Ji;
    }
    Gu = 1;
    const r = ig();
    const e = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    const t = /\\(\\)?/g;
    const a = r((n)=>{
        const i = [];
        if (n.charCodeAt(0) === 46) {
            i.push("");
        }
        n.replace(e, (s, o, u, l)=>{
            i.push(u ? l.replace(t, "$1") : o || s);
        });
        return i;
    });
    Ji = a;
    return Ji;
}
let ji;
let Hu;
function Lv() {
    if (Hu) {
        return ji;
    }
    Hu = 1;
    function r(e, t) {
        for(var a = -1, n = e == null ? 0 : e.length, i = Array(n); ++a < n;){
            i[a] = t(e[a], a, e);
        }
        return i;
    }
    ji = r;
    return ji;
}
let es;
let Wu;
function sg() {
    if (Wu) {
        return es;
    }
    Wu = 1;
    const r = Ys();
    const e = Lv();
    const t = On();
    const a = Oa();
    const n = r ? r.prototype : undefined;
    const i = n ? n.toString : undefined;
    function s(o) {
        if (typeof o === "string") {
            return o;
        }
        if (t(o)) {
            return `${e(o, s)}`;
        }
        if (a(o)) {
            if (i) {
                return i.call(o);
            }
            return "";
        }
        const u = `${o}`;
        if (u == "0" && 1 / o == -Infinity) {
            return "-0";
        }
        return u;
    }
    es = s;
    return es;
}
let rs;
let $u;
function Iv() {
    if ($u) {
        return rs;
    }
    $u = 1;
    const r = sg();
    function e(t) {
        if (t == null) {
            return "";
        }
        return r(t);
    }
    rs = e;
    return rs;
}
let ts;
let Uu;
function Ov() {
    if (Uu) {
        return ts;
    }
    Uu = 1;
    const r = On();
    const e = Rh();
    const t = Mv();
    const a = Iv();
    function n(i, s) {
        if (r(i)) {
            return i;
        }
        if (e(i, s)) {
            return [
                i
            ];
        }
        return t(a(i));
    }
    ts = n;
    return ts;
}
let as;
let Ku;
function io() {
    if (Ku) {
        return as;
    }
    Ku = 1;
    const r = Oa();
    function e(t) {
        if (typeof t === "string" || r(t)) {
            return t;
        }
        const a = `${t}`;
        if (a == "0" && 1 / t == -Infinity) {
            return "-0";
        }
        return a;
    }
    as = e;
    return as;
}
let ns;
let Xu;
function og() {
    if (Xu) {
        return ns;
    }
    Xu = 1;
    const r = Ov();
    const e = io();
    function t(a, n) {
        n = r(n, a);
        for(var i = 0, s = n.length; a != null && i < s;){
            a = a[e(n[i++])];
        }
        if (i && i == s) {
            return a;
        }
    }
    ns = t;
    return ns;
}
let is;
let Yu;
function ug() {
    if (Yu) {
        return is;
    }
    Yu = 1;
    const r = og();
    function e(t, a, n) {
        const i = t == null ? undefined : r(t, a);
        if (i === undefined) {
            return n;
        }
        return i;
    }
    is = e;
    return is;
}
const lg = ug();
const vg = La(lg);
let ss;
let Zu;
function fg() {
    if (Zu) {
        return ss;
    }
    Zu = 1;
    const r = no();
    const e = (()=>{
        try {
            const t = r(Object, "defineProperty");
            t({}, "", {});
            return t;
        } catch  {}
    })();
    ss = e;
    return ss;
}
let os;
let Qu;
function cg() {
    if (Qu) {
        return os;
    }
    Qu = 1;
    const r = fg();
    function e(t, a, n) {
        if (a == "__proto__" && r) {
            r(t, a, {
                configurable: true,
                enumerable: true,
                value: n,
                writable: true
            });
        } else {
            t[a] = n;
        }
    }
    os = e;
    return os;
}
let us;
let Ju;
function dg() {
    if (Ju) {
        return us;
    }
    Ju = 1;
    const r = cg();
    const e = Rv();
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    function n(i, s, o) {
        const u = i[s];
        if (!(hasOwnProperty.call(i, s) && e(u, o)) || o === undefined && !(s in i)) {
            r(i, s, o);
        }
    }
    us = n;
    return us;
}
let ls;
let ju;
function hg() {
    if (ju) {
        return ls;
    }
    ju = 1;
    const r = 9007199254740991;
    const e = /^(?:0|[1-9]\d*)$/;
    function t(a, n) {
        const i = typeof a;
        n = n ?? r;
        return !!n && (i == "number" || i != "symbol" && e.test(a)) && a > -1 && a % 1 == 0 && a < n;
    }
    ls = t;
    return ls;
}
let vs;
let el;
function gg() {
    if (el) {
        return vs;
    }
    el = 1;
    const r = dg();
    const e = Ov();
    const t = hg();
    const a = Ia();
    const n = io();
    function i(s, o, u, l) {
        if (!a(s)) {
            return s;
        }
        o = e(o, s);
        for(let v = -1, f = o.length, c = f - 1, h = s; h != null && ++v < f;){
            const d = n(o[v]);
            let y = u;
            if (d === "__proto__" || d === "constructor" || d === "prototype") {
                return s;
            }
            if (v != c) {
                const g = h[d];
                y = l ? l(g, d, h) : undefined;
                if (y === undefined) {
                    y = a(g) ? g : t(o[v + 1]) ? [] : {};
                }
            }
            r(h, d, y);
            h = h[d];
        }
        return s;
    }
    vs = i;
    return vs;
}
let fs;
let rl;
function pg() {
    if (rl) {
        return fs;
    }
    rl = 1;
    const r = gg();
    function e(t, a, n) {
        if (t == null) {
            return t;
        }
        return r(t, a, n);
    }
    fs = e;
    return fs;
}
const yg = pg();
const mg = La(yg);
let cs;
let tl;
function bg() {
    if (tl) {
        return cs;
    }
    tl = 1;
    function r(e, t) {
        let a = -1;
        const e_length = e.length;
        for(t || (t = Array(e_length)); ++a < e_length;){
            t[a] = e[a];
        }
        return t;
    }
    cs = r;
    return cs;
}
let ds;
let al;
function wg() {
    if (al) {
        return ds;
    }
    al = 1;
    const r = Lv();
    const e = bg();
    const t = On();
    const a = Oa();
    const n = Mv();
    const i = io();
    const s = Iv();
    function o(u) {
        if (t(u)) {
            return r(u, i);
        }
        if (a(u)) {
            return [
                u
            ];
        }
        return e(n(s(u)));
    }
    ds = o;
    return ds;
}
const xg = wg();
const Eg = La(xg);
const Cg = {
    data (e) {
        const t = {
            field: "data",
            bindingEvent: "data",
            allowBinding: false,
            allowSetting: false,
            allowGetting: false,
            settingEvent: "data",
            settingTriggersEvent: false,
            triggerFnName: "trigger",
            immutableKeys: {},
            updateStyle: false,
            beforeGet (n) {},
            beforeSet (n, i) {},
            onSet (n) {},
            canSet (n) {
                return true;
            }
        };
        e = ye({}, t, e);
        return function(n, i) {
            const s = e;
            const o = this;
            const u = o.length !== undefined;
            const l = u ? o : [
                o
            ];
            const v = u ? o[0] : o;
            if (he(n)) {
                const f = n.indexOf(".") !== -1;
                const c = f && Eg(n);
                if (s.allowGetting && i === undefined) {
                    let h;
                    if (v) {
                        s.beforeGet(v);
                        if (c && v._private[s.field][n] === undefined) {
                            h = vg(v._private[s.field], c);
                        } else {
                            h = v._private[s.field][n];
                        }
                    }
                    return h;
                } else if (s.allowSetting && i !== undefined) {
                    const d = !s.immutableKeys[n];
                    if (d) {
                        const y = {
                            [n]: i
                        };
                        s.beforeSet(o, y);
                        for(let g = 0, p = l.length; g < p; g++){
                            const m = l[g];
                            s.canSet(m) && (c && v._private[s.field][n] === undefined ? mg(m._private[s.field], c, i) : m._private[s.field][n] = i);
                        }
                        if (s.updateStyle) {
                            o.updateStyle();
                        }
                        s.onSet(o);
                        if (s.settingTriggersEvent) {
                            o[s.triggerFnName](s.settingEvent);
                        }
                    }
                }
            } else if (s.allowSetting && Me(n)) {
                const b = n;
                let w;
                let E;
                const C = Object.keys(b);
                s.beforeSet(o, b);
                for(let x = 0; x < C.length; x++){
                    w = C[x];
                    E = b[w];
                    const T = !s.immutableKeys[w];
                    if (T) {
                        for (const D of l){
                            if (s.canSet(D)) {
                                D._private[s.field][w] = E;
                            }
                        }
                    }
                }
                if (s.updateStyle) {
                    o.updateStyle();
                }
                s.onSet(o);
                if (s.settingTriggersEvent) {
                    o[s.triggerFnName](s.settingEvent);
                }
            } else if (s.allowBinding && $e(n)) {
                o.on(s.bindingEvent, n);
            } else if (s.allowGetting && n === undefined) {
                let P;
                if (v) {
                    s.beforeGet(v);
                    P = v._private[s.field];
                }
                return P;
            }
            return o;
        };
    },
    removeData (e) {
        const t = {
            field: "data",
            event: "data",
            triggerFnName: "trigger",
            triggerEvent: false,
            immutableKeys: {}
        };
        e = ye({}, t, e);
        return function(n) {
            const i = e;
            const s = this;
            const o = s.length !== undefined;
            const u = o ? s : [
                s
            ];
            if (he(n)) {
                const l = n.split(/\s+/);
                for(let v = l.length, f = 0; f < v; f++){
                    const c = l[f];
                    if (!ot(c)) {
                        const h = !i.immutableKeys[c];
                        if (h) {
                            for(let d = 0, y = u.length; d < y; d++){
                                u[d]._private[i.field][c] = undefined;
                            }
                        }
                    }
                }
                if (i.triggerEvent) {
                    s[i.triggerFnName](i.event);
                }
            } else if (n === undefined) {
                for(let g = 0, p = u.length; g < p; g++){
                    const m = u[g]._private[i.field];
                    for(let b = Object.keys(m), w = 0; w < b.length; w++){
                        const E = b[w];
                        const C = !i.immutableKeys[E];
                        if (C) {
                            m[E] = undefined;
                        }
                    }
                }
                if (i.triggerEvent) {
                    s[i.triggerFnName](i.event);
                }
            }
            return s;
        };
    }
};
const Tg = {
    eventAliasesOn (e) {
        const t = e;
        t.addListener = t.listen = t.bind = t.on;
        t.unlisten = t.unbind = t.off = t.removeListener;
        t.trigger = t.emit;
        t.pon = t.promiseOn = function(a, n) {
            const i = this;
            const s = Array.prototype.slice.call(arguments, 0);
            return new ea((o, u)=>{
                const l = (h)=>{
                    i.off(...f);
                    o(h);
                };
                const v = s.concat([
                    l
                ]);
                var f = v.concat([]);
                i.on(...v);
            });
        };
    }
};
const Ne = {};
[
    Ah,
    Cg,
    Tg
].forEach((r)=>{
    ye(Ne, r);
});
const Sg = {
    animate: Ne.animate(),
    animation: Ne.animation(),
    animated: Ne.animated(),
    clearQueue: Ne.clearQueue(),
    delay: Ne.delay(),
    delayAnimation: Ne.delayAnimation(),
    stop: Ne.stop()
};
const un = {
    classes (e) {
        const t = this;
        if (e === undefined) {
            const a = [];
            t[0]._private.classes.forEach((d)=>a.push(d));
            return a;
        } else {
            if (!Ve(e)) {
                e = (e || "").match(/\S+/g) || [];
            }
        }
        const n = [];
        const i = new jt(e);
        for (const o of t){
            const u = o._private;
            const l = u.classes;
            let v = false;
            for (const c of e){
                const h = l.has(c);
                if (!h) {
                    v = true;
                    break;
                }
            }
            if (!v) {
                v = l.size !== e.length;
            }
            if (v) {
                u.classes = i;
                n.push(o);
            }
        }
        if (n.length > 0) {
            this.spawn(n).updateStyle().emit("class");
        }
        return t;
    },
    addClass (e) {
        return this.toggleClass(e, true);
    },
    hasClass (e) {
        const t = this[0];
        return t != null && t._private.classes.has(e);
    },
    toggleClass (e, t) {
        if (!Ve(e)) {
            e = e.match(/\S+/g) || [];
        }
        const a = this;
        const n = t === undefined;
        const i = [];
        for(let s = 0, o = a.length; s < o; s++){
            const u = a[s];
            const l = u._private.classes;
            let v = false;
            for (const c of e){
                const h = l.has(c);
                let d = false;
                if (t || n && !h) {
                    l.add(c);
                    d = true;
                } else if (!t || n && h) {
                    l.delete(c);
                    d = true;
                }
                if (!v && d) {
                    i.push(u);
                    v = true;
                }
            }
        }
        if (i.length > 0) {
            this.spawn(i).updateStyle().emit("class");
        }
        return a;
    },
    removeClass (e) {
        return this.toggleClass(e, false);
    },
    flashClass (e, t) {
        const a = this;
        if (t == null) {
            t = 250;
        } else if (t === 0) {
            return a;
        }
        a.addClass(e);
        setTimeout(()=>{
            a.removeClass(e);
        }, t);
        return a;
    }
};
un.className = un.classNames = un.classes;
const Re = {
    metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
    comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
    boolOp: "\\?|\\!|\\^",
    string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
    number,
    meta: "degree|indegree|outdegree",
    separator: "\\s*,\\s*",
    descendant: "\\s+",
    child: "\\s+>\\s+",
    subject: "\\$",
    group: "node|edge|\\*",
    directedEdge: "\\s+->\\s+",
    undirectedEdge: "\\s+<->\\s+"
};
Re.variable = `(?:[\\w-.]|(?:\\\\${Re.metaChar}))+`;
Re.className = `(?:[\\w-]|(?:\\\\${Re.metaChar}))+`;
Re.value = `${Re.string}|${Re.number}`;
Re.id = Re.variable;
(()=>{
    let r;
    let e;
    let t;
    r = Re.comparatorOp.split("|");
    for(t = 0; t < r.length; t++){
        e = r[t];
        Re.comparatorOp += `|@${e}`;
    }
    r = Re.comparatorOp.split("|");
    for(t = 0; t < r.length; t++){
        e = r[t];
        if (!(e.indexOf("!") >= 0) && e !== "=") {
            Re.comparatorOp += `|\\!${e}`;
        }
    }
})();
const Fe = ()=>({
        checks: []
    });
const ue = {
    GROUP: 0,
    COLLECTION: 1,
    FILTER: 2,
    DATA_COMPARE: 3,
    DATA_EXIST: 4,
    DATA_BOOL: 5,
    META_COMPARE: 6,
    STATE: 7,
    ID: 8,
    CLASS: 9,
    UNDIRECTED_EDGE: 10,
    DIRECTED_EDGE: 11,
    NODE_SOURCE: 12,
    NODE_TARGET: 13,
    NODE_NEIGHBOR: 14,
    CHILD: 15,
    DESCENDANT: 16,
    PARENT: 17,
    ANCESTOR: 18,
    COMPOUND_SPLIT: 19,
    TRUE: 20
};
const Ls = [
    {
        selector: ":selected",
        matches (e) {
            return e.selected();
        }
    },
    {
        selector: ":unselected",
        matches (e) {
            return !e.selected();
        }
    },
    {
        selector: ":selectable",
        matches (e) {
            return e.selectable();
        }
    },
    {
        selector: ":unselectable",
        matches (e) {
            return !e.selectable();
        }
    },
    {
        selector: ":locked",
        matches (e) {
            return e.locked();
        }
    },
    {
        selector: ":unlocked",
        matches (e) {
            return !e.locked();
        }
    },
    {
        selector: ":visible",
        matches (e) {
            return e.visible();
        }
    },
    {
        selector: ":hidden",
        matches (e) {
            return !e.visible();
        }
    },
    {
        selector: ":transparent",
        matches (e) {
            return e.transparent();
        }
    },
    {
        selector: ":grabbed",
        matches (e) {
            return e.grabbed();
        }
    },
    {
        selector: ":free",
        matches (e) {
            return !e.grabbed();
        }
    },
    {
        selector: ":removed",
        matches (e) {
            return e.removed();
        }
    },
    {
        selector: ":inside",
        matches (e) {
            return !e.removed();
        }
    },
    {
        selector: ":grabbable",
        matches (e) {
            return e.grabbable();
        }
    },
    {
        selector: ":ungrabbable",
        matches (e) {
            return !e.grabbable();
        }
    },
    {
        selector: ":animated",
        matches (e) {
            return e.animated();
        }
    },
    {
        selector: ":unanimated",
        matches (e) {
            return !e.animated();
        }
    },
    {
        selector: ":parent",
        matches (e) {
            return e.isParent();
        }
    },
    {
        selector: ":childless",
        matches (e) {
            return e.isChildless();
        }
    },
    {
        selector: ":child",
        matches (e) {
            return e.isChild();
        }
    },
    {
        selector: ":orphan",
        matches (e) {
            return e.isOrphan();
        }
    },
    {
        selector: ":nonorphan",
        matches (e) {
            return e.isChild();
        }
    },
    {
        selector: ":compound",
        matches (e) {
            if (e.isNode()) {
                return e.isParent();
            }
            return e.source().isParent() || e.target().isParent();
        }
    },
    {
        selector: ":loop",
        matches (e) {
            return e.isLoop();
        }
    },
    {
        selector: ":simple",
        matches (e) {
            return e.isSimple();
        }
    },
    {
        selector: ":active",
        matches (e) {
            return e.active();
        }
    },
    {
        selector: ":inactive",
        matches (e) {
            return !e.active();
        }
    },
    {
        selector: ":backgrounding",
        matches (e) {
            return e.backgrounding();
        }
    },
    {
        selector: ":nonbackgrounding",
        matches (e) {
            return !e.backgrounding();
        }
    }
].sort((r, e)=>Cc(r.selector, e.selector));
const kg = (()=>{
    const r = {};
    let e;
    for(let t = 0; t < Ls.length; t++){
        e = Ls[t];
        r[e.selector] = e.matches;
    }
    return r;
})();
const Dg = (e, t)=>kg[e](t);
const regex = `(${Ls.map((r)=>r.selector).join("|")})`;
const Lt = (e)=>e.replace(new RegExp(`\\\\(${Re.metaChar})`, "g"), (t, a)=>a);
const et = (e, t, a)=>{
    e[e.length - 1] = a;
};
const Is = [
    {
        name: "group",
        query: true,
        regex: `(${Re.group})`,
        populate (e, t, [i]) {
            t.checks.push({
                type: ue.GROUP,
                value: i === "*" ? i : `${i}s`
            });
        }
    },
    {
        name: "state",
        query: true,
        regex,
        populate (e, t, [i]) {
            t.checks.push({
                type: ue.STATE,
                value: i
            });
        }
    },
    {
        name: "id",
        query: true,
        regex: `\\#(${Re.id})`,
        populate (e, t, [i]) {
            t.checks.push({
                type: ue.ID,
                value: Lt(i)
            });
        }
    },
    {
        name: "className",
        query: true,
        regex: `\\.(${Re.className})`,
        populate (e, t, [i]) {
            t.checks.push({
                type: ue.CLASS,
                value: Lt(i)
            });
        }
    },
    {
        name: "dataExists",
        query: true,
        regex: `\\[\\s*(${Re.variable})\\s*\\]`,
        populate (e, t, [i]) {
            t.checks.push({
                type: ue.DATA_EXIST,
                field: Lt(i)
            });
        }
    },
    {
        name: "dataCompare",
        query: true,
        regex: `\\[\\s*(${Re.variable})\\s*(${Re.comparatorOp})\\s*(${Re.value})\\s*\\]`,
        populate (e, t, [i, s, o]) {
            const u = new RegExp(`^${Re.string}\$`).exec(o) != null;
            if (u) {
                o = o.substring(1, o.length - 1);
            } else {
                o = parseFloat(o);
            }
            t.checks.push({
                type: ue.DATA_COMPARE,
                field: Lt(i),
                operator: s,
                value: o
            });
        }
    },
    {
        name: "dataBool",
        query: true,
        regex: `\\[\\s*(${Re.boolOp})\\s*(${Re.variable})\\s*\\]`,
        populate (e, t, [i, s]) {
            t.checks.push({
                type: ue.DATA_BOOL,
                field: Lt(s),
                operator: i
            });
        }
    },
    {
        name: "metaCompare",
        query: true,
        regex: `\\[\\[\\s*(${Re.meta})\\s*(${Re.comparatorOp})\\s*(${Re.number})\\s*\\]\\]`,
        populate (e, t, [i, s, o]) {
            t.checks.push({
                type: ue.META_COMPARE,
                field: Lt(i),
                operator: s,
                value: parseFloat(o)
            });
        }
    },
    {
        name: "nextQuery",
        separator: true,
        regex: Re.separator,
        populate (e, t) {
            const { currentSubject, edgeCount, compoundCount } = e;
            const s = e[e.length - 1];
            if (currentSubject != null) {
                s.subject = currentSubject;
                e.currentSubject = null;
            }
            s.edgeCount = edgeCount;
            s.compoundCount = compoundCount;
            e.edgeCount = 0;
            e.compoundCount = 0;
            const o = e[e.length++] = Fe();
            return o;
        }
    },
    {
        name: "directedEdge",
        separator: true,
        regex: Re.directedEdge,
        populate (e, t) {
            if (e.currentSubject == null) {
                const a = Fe();
                const n = t;
                const i = Fe();
                a.checks.push({
                    type: ue.DIRECTED_EDGE,
                    source: n,
                    target: i
                });
                et(e, t, a);
                e.edgeCount++;
                return i;
            } else {
                const s = Fe();
                const o = t;
                const u = Fe();
                s.checks.push({
                    type: ue.NODE_SOURCE,
                    source: o,
                    target: u
                });
                et(e, t, s);
                e.edgeCount++;
                return u;
            }
        }
    },
    {
        name: "undirectedEdge",
        separator: true,
        regex: Re.undirectedEdge,
        populate (e, t) {
            if (e.currentSubject == null) {
                const a = Fe();
                const n = t;
                const i = Fe();
                a.checks.push({
                    type: ue.UNDIRECTED_EDGE,
                    nodes: [
                        n,
                        i
                    ]
                });
                et(e, t, a);
                e.edgeCount++;
                return i;
            } else {
                const s = Fe();
                const node = t;
                const neighbor = Fe();
                s.checks.push({
                    type: ue.NODE_NEIGHBOR,
                    node,
                    neighbor
                });
                et(e, t, s);
                return neighbor;
            }
        }
    },
    {
        name: "child",
        separator: true,
        regex: Re.child,
        populate (e, t) {
            if (e.currentSubject == null) {
                const a = Fe();
                const n = Fe();
                const parent = e[e.length - 1];
                a.checks.push({
                    type: ue.CHILD,
                    parent,
                    child: n
                });
                et(e, t, a);
                e.compoundCount++;
                return n;
            } else if (e.currentSubject === t) {
                const s = Fe();
                const o = e[e.length - 1];
                const u = Fe();
                const l = Fe();
                const v = Fe();
                const f = Fe();
                s.checks.push({
                    type: ue.COMPOUND_SPLIT,
                    left: o,
                    right: u,
                    subject: l
                });
                l.checks = t.checks;
                t.checks = [
                    {
                        type: ue.TRUE
                    }
                ];
                f.checks.push({
                    type: ue.TRUE
                });
                u.checks.push({
                    type: ue.PARENT,
                    parent: f,
                    child: v
                });
                et(e, o, s);
                e.currentSubject = l;
                e.compoundCount++;
                return v;
            } else {
                const c = Fe();
                const h = Fe();
                const d = [
                    {
                        type: ue.PARENT,
                        parent: c,
                        child: h
                    }
                ];
                c.checks = t.checks;
                t.checks = d;
                e.compoundCount++;
                return h;
            }
        }
    },
    {
        name: "descendant",
        separator: true,
        regex: Re.descendant,
        populate (e, t) {
            if (e.currentSubject == null) {
                const a = Fe();
                const n = Fe();
                const ancestor = e[e.length - 1];
                a.checks.push({
                    type: ue.DESCENDANT,
                    ancestor,
                    descendant: n
                });
                et(e, t, a);
                e.compoundCount++;
                return n;
            } else if (e.currentSubject === t) {
                const s = Fe();
                const o = e[e.length - 1];
                const u = Fe();
                const l = Fe();
                const v = Fe();
                const f = Fe();
                s.checks.push({
                    type: ue.COMPOUND_SPLIT,
                    left: o,
                    right: u,
                    subject: l
                });
                l.checks = t.checks;
                t.checks = [
                    {
                        type: ue.TRUE
                    }
                ];
                f.checks.push({
                    type: ue.TRUE
                });
                u.checks.push({
                    type: ue.ANCESTOR,
                    ancestor: f,
                    descendant: v
                });
                et(e, o, s);
                e.currentSubject = l;
                e.compoundCount++;
                return v;
            } else {
                const c = Fe();
                const h = Fe();
                const d = [
                    {
                        type: ue.ANCESTOR,
                        ancestor: c,
                        descendant: h
                    }
                ];
                c.checks = t.checks;
                t.checks = d;
                e.compoundCount++;
                return h;
            }
        }
    },
    {
        name: "subject",
        modifier: true,
        regex: Re.subject,
        populate (e, t) {
            if (e.currentSubject != null && e.currentSubject !== t) {
                ze(`Redefinition of subject in selector \`${e.toString()}\``);
                return false;
            }
            e.currentSubject = t;
            const a = e[e.length - 1];
            const n = a.checks[0];
            const i = n == null ? null : n.type;
            if (i === ue.DIRECTED_EDGE) {
                n.type = ue.NODE_TARGET;
            } else if (i === ue.UNDIRECTED_EDGE) {
                n.type = ue.NODE_NEIGHBOR;
                n.node = n.nodes[1];
                n.neighbor = n.nodes[0];
                n.nodes = null;
            }
        }
    }
];
Is.forEach((r)=>r.regexObj = new RegExp(`^${r.regex}`));
const Pg = (remaining)=>{
    let expr;
    let match;
    let n;
    for (const s of Is){
        const o = s.name;
        const u = remaining.match(s.regexObj);
        if (u != null) {
            match = u;
            expr = s;
            n = o;
            const l = u[0];
            remaining = remaining.substring(l.length);
            break;
        }
    }
    return {
        expr,
        match,
        name: n,
        remaining
    };
};
const Ag = (e)=>{
    const t = e.match(/^\s+/);
    if (t) {
        const a = t[0];
        e = e.substring(a.length);
    }
    return e;
};
const parse = function(e) {
    const t = this;
    let a = t.inputText = e;
    let n = t[0] = Fe();
    t.length = 1;
    for(a = Ag(a);;){
        const i = Pg(a);
        if (i.expr == null) {
            ze(`The selector \`${e}\`is invalid`);
            return false;
        }
        const s = i.match.slice(1);
        const o = i.expr.populate(t, n, s);
        if (o === false) {
            return false;
        }
        if (o != null) {
            n = o;
        }
        a = i.remaining;
        if (a.match(/^\s*$/)) {
            break;
        }
    }
    const u = t[t.length - 1];
    if (t.currentSubject != null) {
        u.subject = t.currentSubject;
    }
    u.edgeCount = t.edgeCount;
    u.compoundCount = t.compoundCount;
    for (const v of t){
        if (v.compoundCount > 0 && v.edgeCount > 0) {
            ze(`The selector \`${e}\` is invalid because it uses both a compound selector and an edge selector`);
            return false;
        }
        if (v.edgeCount > 1) {
            ze(`The selector \`${e}\` is invalid because it uses multiple edge selectors`);
            return false;
        }
        if (v.edgeCount === 1) {
            ze(`The selector \`${e}\` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.`);
        }
    }
    return true;
};
const toString = function() {
    if (this.toStringCache != null) {
        return this.toStringCache;
    }
    const e = (v)=>v ?? "";
    const t = (v)=>{
        if (he(v)) {
            return `"${v}"`;
        }
        return e(v);
    };
    const a = (v)=>` ${v} `;
    const n = (check, f)=>{
        const { type, value } = check;
        switch(type){
            case ue.GROUP:
                {
                    const d = e(value);
                    return d.substring(0, d.length - 1);
                }
            case ue.DATA_COMPARE:
                {
                    const { field, operator } = check;
                    return `[${field}${a(e(operator))}${t(value)}]`;
                }
            case ue.DATA_BOOL:
                {
                    const { operator, field } = check;
                    return `[${e(operator)}${field}]`;
                }
            case ue.DATA_EXIST:
                {
                    const b = check.field;
                    return `[${b}]`;
                }
            case ue.META_COMPARE:
                {
                    const { operator, field } = check;
                    return `[[${field}${a(e(operator))}${t(value)}]]`;
                }
            case ue.STATE:
                return value;
            case ue.ID:
                return `#${value}`;
            case ue.CLASS:
                return `.${value}`;
            case ue.PARENT:
            case ue.CHILD:
                return i(check.parent, f) + a(">") + i(check.child, f);
            case ue.ANCESTOR:
            case ue.DESCENDANT:
                return `${i(check.ancestor, f)} ${i(check.descendant, f)}`;
            case ue.COMPOUND_SPLIT:
                {
                    const C = i(check.left, f);
                    const x = i(check.subject, f);
                    const T = i(check.right, f);
                    return C + (C.length > 0 ? " " : "") + x + T;
                }
            case ue.TRUE:
                return "";
        }
    };
    var i = (v, f)=>v.checks.reduce((acc, check, index)=>acc + (f === v && index === 0 ? "$" : "") + n(check, f), "");
    let s = "";
    for(let o = 0; o < this.length; o++){
        const u = this[o];
        s += i(u, u.subject);
        if (this.length > 1 && o < this.length - 1) {
            s += ", ";
        }
    }
    this.toStringCache = s;
    return s;
};
const Lg = {
    parse,
    toString
};
const Nv = (e, t, a)=>{
    let n;
    const i = he(e);
    const s = ae(e);
    const o = he(a);
    let u;
    let l;
    let v = false;
    let f = false;
    let c = false;
    if (t.indexOf("!") >= 0) {
        t = t.replace("!", "");
        f = true;
    }
    if (t.indexOf("@") >= 0) {
        t = t.replace("@", "");
        v = true;
    }
    if (i || o || v) {
        u = !i && !s ? "" : `${e}`;
        l = `${a}`;
    }
    if (v) {
        e = u = u.toLowerCase();
        a = l = l.toLowerCase();
    }
    switch(t){
        case "*=":
            n = u.indexOf(l) >= 0;
            break;
        case "$=":
            n = u.indexOf(l, u.length - l.length) >= 0;
            break;
        case "^=":
            n = u.indexOf(l) === 0;
            break;
        case "=":
            n = e === a;
            break;
        case ">":
            c = true;
            n = e > a;
            break;
        case ">=":
            c = true;
            n = e >= a;
            break;
        case "<":
            c = true;
            n = e < a;
            break;
        case "<=":
            c = true;
            n = e <= a;
            break;
        default:
            n = false;
            break;
    }
    if (f && (e != null || !c)) {
        n = !n;
    }
    return n;
};
const Ig = (e, operator)=>{
    switch(operator){
        case "?":
            return !!e;
        case "!":
            return !e;
        case "^":
            return e === undefined;
    }
};
const Og = (e)=>e !== undefined;
const so = (e, t)=>e.data(t);
const Ng = (e, field)=>e[field]();
const Xe = [];
const Ge = (e, t)=>e.checks.every((a)=>Xe[a.type](a, t));
Xe[ue.GROUP] = ({ value }, e)=>value === "*" || value === e.group();
Xe[ue.STATE] = ({ value }, e)=>Dg(value, e);
Xe[ue.ID] = ({ value }, e)=>e.id() === value;
Xe[ue.CLASS] = ({ value }, e)=>e.hasClass(value);
Xe[ue.META_COMPARE] = ({ field, operator, value }, e)=>Nv(Ng(e, field), operator, value);
Xe[ue.DATA_COMPARE] = ({ field, operator, value }, e)=>Nv(so(e, field), operator, value);
Xe[ue.DATA_BOOL] = ({ field, operator }, e)=>Ig(so(e, field), operator);
Xe[ue.DATA_EXIST] = (r, e)=>{
    const r_field = r.field;
    r.operator;
    return Og(so(e, r_field));
};
Xe[ue.UNDIRECTED_EDGE] = (r, e)=>{
    const t = r.nodes[0];
    const a = r.nodes[1];
    const n = e.source();
    const i = e.target();
    return Ge(t, n) && Ge(a, i) || Ge(a, n) && Ge(t, i);
};
Xe[ue.NODE_NEIGHBOR] = (r, e)=>Ge(r.node, e) && e.neighborhood().some((t)=>t.isNode() && Ge(r.neighbor, t));
Xe[ue.DIRECTED_EDGE] = (r, e)=>Ge(r.source, e.source()) && Ge(r.target, e.target());
Xe[ue.NODE_SOURCE] = (r, e)=>Ge(r.source, e) && e.outgoers().some((t)=>t.isNode() && Ge(r.target, t));
Xe[ue.NODE_TARGET] = (r, e)=>Ge(r.target, e) && e.incomers().some((t)=>t.isNode() && Ge(r.source, t));
Xe[ue.CHILD] = (r, e)=>Ge(r.child, e) && Ge(r.parent, e.parent());
Xe[ue.PARENT] = (r, e)=>Ge(r.parent, e) && e.children().some((t)=>Ge(r.child, t));
Xe[ue.DESCENDANT] = (r, e)=>Ge(r.descendant, e) && e.ancestors().some((t)=>Ge(r.ancestor, t));
Xe[ue.ANCESTOR] = (r, e)=>Ge(r.ancestor, e) && e.descendants().some((t)=>Ge(r.descendant, t));
Xe[ue.COMPOUND_SPLIT] = (r, e)=>Ge(r.subject, e) && Ge(r.left, e) && Ge(r.right, e);
Xe[ue.TRUE] = ()=>true;
Xe[ue.COLLECTION] = ({ value }, e)=>value.has(e);
Xe[ue.FILTER] = ({ value }, e)=>value(e);
const filter = function(e) {
    const t = this;
    if (t.length === 1 && t[0].checks.length === 1 && t[0].checks[0].type === ue.ID) {
        return e.getElementById(t[0].checks[0].value).collection();
    }
    let a = (i)=>{
        for (const o of t){
            if (Ge(o, i)) {
                return true;
            }
        }
        return false;
    };
    if (t.text() == null) {
        a = ()=>true;
    }
    return e.filter(a);
};
const matches = function(e) {
    for(let t = this, a = 0; a < t.length; a++){
        const n = t[a];
        if (Ge(n, e)) {
            return true;
        }
    }
    return false;
};
const Vg = {
    matches,
    filter
};
const vt = function(e) {
    this.inputText = e;
    this.currentSubject = null;
    this.compoundCount = 0;
    this.edgeCount = 0;
    this.length = 0;
    e == null || he(e) && e.match(/^\s*$/) || (Tr(e) ? this.addQuery({
        checks: [
            {
                type: ue.COLLECTION,
                value: e.collection()
            }
        ]
    }) : $e(e) ? this.addQuery({
        checks: [
            {
                type: ue.FILTER,
                value: e
            }
        ]
    }) : he(e) ? this.parse(e) || (this.invalid = true) : He("A selector must be created from a string; found "));
};
const vt_prototype = vt.prototype;
[
    Lg,
    Vg
].forEach((r)=>ye(vt_prototype, r));
vt_prototype.text = function() {
    return this.inputText;
};
vt_prototype.size = function() {
    return this.length;
};
vt_prototype.eq = function(r) {
    return this[r];
};
vt_prototype.sameText = function(r) {
    return !this.invalid && !r.invalid && this.text() === r.text();
};
vt_prototype.addQuery = function(r) {
    this[this.length++] = r;
};
vt_prototype.selector = vt_prototype.toString;
const it = {
    allAre (e) {
        const t = new vt(e);
        return this.every((a)=>t.matches(a));
    },
    is (e) {
        const t = new vt(e);
        return this.some((a)=>t.matches(a));
    },
    some (e, t) {
        for(let a = 0; a < this.length; a++){
            const n = t ? e.apply(t, [
                this[a],
                a,
                this
            ]) : e(this[a], a, this);
            if (n) {
                return true;
            }
        }
        return false;
    },
    every (e, t) {
        for(let a = 0; a < this.length; a++){
            const n = t ? e.apply(t, [
                this[a],
                a,
                this
            ]) : e(this[a], a, this);
            if (!n) {
                return false;
            }
        }
        return true;
    },
    same (e) {
        if (this === e) {
            return true;
        }
        e = this.cy().collection(e);
        const length = this.length;
        const e_length = e.length;
        if (length !== e_length) {
            return false;
        }
        if (length === 1) {
            return this[0] === e[0];
        }
        return this.every((n)=>e.hasElementWithId(n.id()));
    },
    anySame (e) {
        e = this.cy().collection(e);
        return this.some((t)=>e.hasElementWithId(t.id()));
    },
    allAreNeighbors (e) {
        e = this.cy().collection(e);
        const t = this.neighborhood();
        return e.every((a)=>t.hasElementWithId(a.id()));
    },
    contains (e) {
        e = this.cy().collection(e);
        const t = this;
        return e.every((a)=>t.hasElementWithId(a.id()));
    }
};
it.allAreNeighbours = it.allAreNeighbors;
it.has = it.contains;
it.equal = it.equals = it.same;
const Br = (e, t)=>function(n, i, s, o) {
        const u = n;
        const l = this;
        let v;
        if (u == null) {
            v = "";
        } else if (Tr(u) && u.length === 1) {
            v = u.id();
        }
        if (l.length === 1 && v) {
            const f = l[0]._private;
            const c = f.traversalCache = f.traversalCache || {};
            const h = c[t] = c[t] || [];
            const d = kt(v);
            const y = h[d];
            return y || (h[d] = e.call(l, n, i, s, o));
        } else {
            return e.call(l, n, i, s, o);
        }
    };
const Qt = {
    parent (e) {
        const t = [];
        if (this.length === 1) {
            const a = this[0]._private.parent;
            if (a) {
                return a;
            }
        }
        for(let n = 0; n < this.length; n++){
            const i = this[n];
            const s = i._private.parent;
            if (s) {
                t.push(s);
            }
        }
        return this.spawn(t, true).filter(e);
    },
    parents (e) {
        const t = [];
        for(let a = this.parent(); a.nonempty();){
            for (const i of a){
                t.push(i);
            }
            a = a.parent();
        }
        return this.spawn(t, true).filter(e);
    },
    commonAncestors (e) {
        let t;
        for(let a = 0; a < this.length; a++){
            const n = this[a];
            const i = n.parents();
            t = t || i;
            t = t.intersect(i);
        }
        return t.filter(e);
    },
    orphans (e) {
        return this.stdFilter((t)=>t.isOrphan()).filter(e);
    },
    nonorphans (e) {
        return this.stdFilter((t)=>t.isChild()).filter(e);
    },
    children: Br(function(r) {
        const e = [];
        for(let t = 0; t < this.length; t++){
            const a = this[t];
            for(let n = a._private.children, i = 0; i < n.length; i++){
                e.push(n[i]);
            }
        }
        return this.spawn(e, true).filter(r);
    }, "children"),
    siblings (e) {
        return this.parent().children().not(this).filter(e);
    },
    isParent () {
        const e = this[0];
        if (e) {
            return e.isNode() && e._private.children.length !== 0;
        }
    },
    isChildless () {
        const e = this[0];
        if (e) {
            return e.isNode() && e._private.children.length === 0;
        }
    },
    isChild () {
        const e = this[0];
        if (e) {
            return e.isNode() && e._private.parent != null;
        }
    },
    isOrphan () {
        const e = this[0];
        if (e) {
            return e.isNode() && e._private.parent == null;
        }
    },
    descendants (e) {
        const t = [];
        function a(n) {
            for (const s of n){
                t.push(s);
                if (s.children().nonempty()) {
                    a(s.children());
                }
            }
        }
        a(this.children());
        return this.spawn(t, true).filter(e);
    }
};
function oo(r, e, t, a) {
    const n = [];
    const i = new jt;
    const s = r.cy();
    const o = s.hasCompoundNodes();
    for (const l of r){
        if (t) {
            n.push(l);
        } else if (o) {
            a(n, i, l);
        }
    }
    while(n.length > 0){
        const v = n.shift();
        e(v);
        i.add(v.id());
        if (o) {
            a(n, i, v);
        }
    }
    return r;
}
function zv(r, e, t) {
    if (t.isParent()) {
        for(let a = t._private.children, n = 0; n < a.length; n++){
            const i = a[n];
            if (!e.has(i.id())) {
                r.push(i);
            }
        }
    }
}
Qt.forEachDown = function(r, e = true) {
    return oo(this, r, e, zv);
};
function Fv(r, e, t) {
    if (t.isChild()) {
        const a = t._private.parent;
        if (!e.has(a.id())) {
            r.push(a);
        }
    }
}
Qt.forEachUp = function(r, e = true) {
    return oo(this, r, e, Fv);
};
function qg(r, e, t) {
    Fv(r, e, t);
    zv(r, e, t);
}
Qt.forEachUpAndDown = function(r, e = true) {
    return oo(this, r, e, qg);
};
Qt.ancestors = Qt.parents;
let ka;
let Vv;
ka = Vv = {
    data: Ne.data({
        field: "data",
        bindingEvent: "data",
        allowBinding: true,
        allowSetting: true,
        settingEvent: "data",
        settingTriggersEvent: true,
        triggerFnName: "trigger",
        allowGetting: true,
        immutableKeys: {
            id: true,
            source: true,
            target: true,
            parent: true
        },
        updateStyle: true
    }),
    removeData: Ne.removeData({
        field: "data",
        event: "data",
        triggerFnName: "trigger",
        triggerEvent: true,
        immutableKeys: {
            id: true,
            source: true,
            target: true,
            parent: true
        },
        updateStyle: true
    }),
    scratch: Ne.data({
        field: "scratch",
        bindingEvent: "scratch",
        allowBinding: true,
        allowSetting: true,
        settingEvent: "scratch",
        settingTriggersEvent: true,
        triggerFnName: "trigger",
        allowGetting: true,
        updateStyle: true
    }),
    removeScratch: Ne.removeData({
        field: "scratch",
        event: "scratch",
        triggerFnName: "trigger",
        triggerEvent: true,
        updateStyle: true
    }),
    rscratch: Ne.data({
        field: "rscratch",
        allowBinding: false,
        allowSetting: true,
        settingTriggersEvent: false,
        allowGetting: true
    }),
    removeRscratch: Ne.removeData({
        field: "rscratch",
        triggerEvent: false
    }),
    id () {
        const e = this[0];
        if (e) {
            return e._private.data.id;
        }
    }
};
ka.attr = ka.data;
ka.removeAttr = ka.removeData;
const _g = Vv;
const Vn = {};
function hs(r) {
    return function(e = true) {
        const t = this;
        if (t.length !== 0) {
            if (t.isNode() && !t.removed()) {
                let a = 0;
                const n = t[0];
                for(let i = n._private.edges, s = 0; s < i.length; s++){
                    const o = i[s];
                    if (!(!e && o.isLoop())) {
                        a += r(n, o);
                    }
                }
                return a;
            } else {
                return;
            }
        }
    };
}
ye(Vn, {
    degree: hs((r, e)=>{
        if (e.source().same(e.target())) {
            return 2;
        }
        return 1;
    }),
    indegree: hs((r, e)=>{
        if (e.target().same(r)) {
            return 1;
        }
        return 0;
    }),
    outdegree: hs((r, e)=>{
        if (e.source().same(r)) {
            return 1;
        }
        return 0;
    })
});
function It(r, e) {
    return function(t) {
        let a;
        for(let n = this.nodes(), i = 0; i < n.length; i++){
            const s = n[i];
            const o = s[r](t);
            if (o !== undefined && (a === undefined || e(o, a))) {
                a = o;
            }
        }
        return a;
    };
}
ye(Vn, {
    minDegree: It("degree", (r, e)=>r < e),
    maxDegree: It("degree", (r, e)=>r > e),
    minIndegree: It("indegree", (r, e)=>r < e),
    maxIndegree: It("indegree", (r, e)=>r > e),
    minOutdegree: It("outdegree", (r, e)=>r < e),
    maxOutdegree: It("outdegree", (r, e)=>r > e)
});
ye(Vn, {
    totalDegree (e) {
        let t = 0;
        for(let a = this.nodes(), n = 0; n < a.length; n++){
            t += a[n].degree(e);
        }
        return t;
    }
});
let Ir;
let qv;
const _v = (e, t, a)=>{
    for (const i of e){
        if (!i.locked()) {
            const s = i._private.position;
            const o = {
                x: t.x != null ? t.x - s.x : 0,
                y: t.y != null ? t.y - s.y : 0
            };
            if (i.isParent() && !(o.x === 0 && o.y === 0)) {
                i.children().shift(o, a);
            }
            i.dirtyBoundingBoxCache();
        }
    }
};
const nl = {
    field: "position",
    bindingEvent: "position",
    allowBinding: true,
    allowSetting: true,
    settingEvent: "position",
    settingTriggersEvent: true,
    triggerFnName: "emitAndNotify",
    allowGetting: true,
    validKeys: [
        "x",
        "y"
    ],
    beforeGet (e) {
        e.updateCompoundBounds();
    },
    beforeSet (e, t) {
        _v(e, t, false);
    },
    onSet (e) {
        e.dirtyCompoundBoundsCache();
    },
    canSet (e) {
        return !e.locked();
    }
};
Ir = qv = {
    position: Ne.data(nl),
    silentPosition: Ne.data(ye({}, nl, {
        allowBinding: false,
        allowSetting: true,
        settingTriggersEvent: false,
        allowGetting: false,
        beforeSet (e, t) {
            _v(e, t, true);
        },
        onSet (e) {
            e.dirtyCompoundBoundsCache();
        }
    })),
    positions (e, t) {
        if (Me(e)) {
            if (t) {
                this.silentPosition(e);
            } else {
                this.position(e);
            }
        } else if ($e(e)) {
            const a = e;
            const n = this.cy();
            n.startBatch();
            for(let i = 0; i < this.length; i++){
                const s = this[i];
                let o;
                (o = a(s, i)) && (t ? s.silentPosition(o) : s.position(o));
            }
            n.endBatch();
        }
        return this;
    },
    silentPositions (e) {
        return this.positions(e, true);
    },
    shift (e, t, a) {
        let n;
        if (Me(e)) {
            n = {
                x: ae(e.x) ? e.x : 0,
                y: ae(e.y) ? e.y : 0
            };
            a = t;
        } else if (he(e) && ae(t)) {
            n = {
                x: 0,
                y: 0
            };
            n[e] = t;
        }
        if (n != null) {
            const i = this.cy();
            i.startBatch();
            for(let s = 0; s < this.length; s++){
                const o = this[s];
                if (!(i.hasCompoundNodes() && o.isChild() && o.ancestors().anySame(this))) {
                    const u = o.position();
                    const l = {
                        x: u.x + n.x,
                        y: u.y + n.y
                    };
                    if (a) {
                        o.silentPosition(l);
                    } else {
                        o.position(l);
                    }
                }
            }
            i.endBatch();
        }
        return this;
    },
    silentShift (e, t) {
        if (Me(e)) {
            this.shift(e, true);
        } else if (he(e) && ae(t)) {
            this.shift(e, t, true);
        }
        return this;
    },
    renderedPosition (e, t) {
        const a = this[0];
        const n = this.cy();
        const i = n.zoom();
        const s = n.pan();
        let o = Me(e) ? e : undefined;
        const u = o !== undefined || t !== undefined && he(e);
        if (a && a.isNode()) {
            if (u) {
                for(let l = 0; l < this.length; l++){
                    const v = this[l];
                    if (t !== undefined) {
                        v.position(e, (t - s[e]) / i);
                    } else if (o !== undefined) {
                        v.position(gv(o, i, s));
                    }
                }
            } else {
                const f = a.position();
                o = Ln(f, i, s);
                if (e === undefined) {
                    return o;
                }
                return o[e];
            }
        } else if (!u) {
            return;
        }
        return this;
    },
    relativePosition (e, t) {
        const a = this[0];
        const n = this.cy();
        let i = Me(e) ? e : undefined;
        const s = i !== undefined || t !== undefined && he(e);
        const o = n.hasCompoundNodes();
        if (a && a.isNode()) {
            if (s) {
                for(let u = 0; u < this.length; u++){
                    const l = this[u];
                    let v = o ? l.parent() : null;
                    const f = v && v.length > 0;
                    const c = f;
                    if (f) {
                        v = v[0];
                    }
                    const h = c ? v.position() : {
                        x: 0,
                        y: 0
                    };
                    if (t !== undefined) {
                        l.position(e, t + h[e]);
                    } else if (i !== undefined) {
                        l.position({
                            x: i.x + h.x,
                            y: i.y + h.y
                        });
                    }
                }
            } else {
                const d = a.position();
                let y = o ? a.parent() : null;
                const g = y && y.length > 0;
                const p = g;
                if (g) {
                    y = y[0];
                }
                const m = p ? y.position() : {
                    x: 0,
                    y: 0
                };
                i = {
                    x: d.x - m.x,
                    y: d.y - m.y
                };
                if (e === undefined) {
                    return i;
                }
                return i[e];
            }
        } else if (!s) {
            return;
        }
        return this;
    }
};
Ir.modelPosition = Ir.point = Ir.position;
Ir.modelPositions = Ir.points = Ir.positions;
Ir.renderedPoint = Ir.renderedPosition;
Ir.relativePoint = Ir.relativePosition;
const Gg = qv;
let Xt;
let gt;
Xt = gt = {};
gt.renderedBoundingBox = function(r) {
    const e = this.boundingBox(r);
    const t = this.cy();
    const a = t.zoom();
    const n = t.pan();
    const i = e.x1 * a + n.x;
    const s = e.x2 * a + n.x;
    const o = e.y1 * a + n.y;
    const u = e.y2 * a + n.y;
    return {
        x1: i,
        x2: s,
        y1: o,
        y2: u,
        w: s - i,
        h: u - o
    };
};
gt.dirtyCompoundBoundsCache = function(r = false) {
    const e = this.cy();
    if (!e.styleEnabled() || !e.hasCompoundNodes()) {
        return this;
    }
    this.forEachUp((t)=>{
        if (t.isParent()) {
            const a = t._private;
            a.compoundBoundsClean = false;
            a.bbCache = null;
            if (!r) {
                t.emitAndNotify("bounds");
            }
        }
    });
    return this;
};
gt.updateCompoundBounds = function(r = false) {
    const e = this.cy();
    if (!e.styleEnabled() || !e.hasCompoundNodes()) {
        return this;
    }
    if (!r && e.batching()) {
        return this;
    }
    function t(s) {
        if (!s.isParent()) {
            return;
        }
        const s__private = s._private;
        const u = s.children();
        const l = s.pstyle("compound-sizing-wrt-labels").value === "include";
        const v = {
            width: {
                val: s.pstyle("min-width").pfValue,
                left: s.pstyle("min-width-bias-left"),
                right: s.pstyle("min-width-bias-right")
            },
            height: {
                val: s.pstyle("min-height").pfValue,
                top: s.pstyle("min-height-bias-top"),
                bottom: s.pstyle("min-height-bias-bottom")
            }
        };
        let f = u.boundingBox({
            includeLabels: l,
            includeOverlays: false,
            useCache: false
        });
        const o_position = s__private.position;
        if (f.w === 0 || f.h === 0) {
            f = {
                w: s.pstyle("width").pfValue,
                h: s.pstyle("height").pfValue
            };
            f.x1 = o_position.x - f.w / 2;
            f.x2 = o_position.x + f.w / 2;
            f.y1 = o_position.y - f.h / 2;
            f.y2 = o_position.y + f.h / 2;
        }
        function h(k, D, B) {
            let biasDiff_2 = 0;
            let biasComplementDiff_2 = 0;
            const R = D + B;
            if (k > 0 && R > 0) {
                biasDiff_2 = D / R * k;
                biasComplementDiff_2 = B / R * k;
            }
            return {
                biasDiff: biasDiff_2,
                biasComplementDiff: biasComplementDiff_2
            };
        }
        function d(k, D, B, P) {
            if (B.units === "%") {
                switch(P){
                    case "width":
                        if (k > 0) {
                            return B.pfValue * k;
                        }
                        return 0;
                    case "height":
                        if (D > 0) {
                            return B.pfValue * D;
                        }
                        return 0;
                    case "average":
                        if (k > 0 && D > 0) {
                            return B.pfValue * (k + D) / 2;
                        }
                        return 0;
                    case "min":
                        if (k > 0 && D > 0) {
                            if (k > D) {
                                return B.pfValue * D;
                            }
                            return B.pfValue * k;
                        }
                        return 0;
                    case "max":
                        if (k > 0 && D > 0) {
                            if (k > D) {
                                return B.pfValue * k;
                            }
                            return B.pfValue * D;
                        }
                        return 0;
                    default:
                        return 0;
                }
            } else {
                if (B.units === "px") {
                    return B.pfValue;
                }
                return 0;
            }
        }
        let value = v.width.left.value;
        if (v.width.left.units === "px" && v.width.val > 0) {
            value = value * 100 / v.width.val;
        }
        let value_1 = v.width.right.value;
        if (v.width.right.units === "px" && v.width.val > 0) {
            value_1 = value_1 * 100 / v.width.val;
        }
        let value_2 = v.height.top.value;
        if (v.height.top.units === "px" && v.height.val > 0) {
            value_2 = value_2 * 100 / v.height.val;
        }
        let value_3 = v.height.bottom.value;
        if (v.height.bottom.units === "px" && v.height.val > 0) {
            value_3 = value_3 * 100 / v.height.val;
        }
        const b = h(v.width.val - f.w, value, value_1);
        const { biasDiff, biasComplementDiff } = b;
        const C = h(v.height.val - f.h, value_2, value_3);
        const { biasDiff: biasDiff_1, biasComplementDiff: biasComplementDiff_1 } = C;
        s__private.autoPadding = d(f.w, f.h, s.pstyle("padding"), s.pstyle("padding-relative-to").value);
        s__private.autoWidth = Math.max(f.w, v.width.val);
        o_position.x = (-biasDiff + f.x1 + f.x2 + biasComplementDiff) / 2;
        s__private.autoHeight = Math.max(f.h, v.height.val);
        o_position.y = (-biasDiff_1 + f.y1 + f.y2 + biasComplementDiff_1) / 2;
    }
    for(let a = 0; a < this.length; a++){
        const n = this[a];
        const i = n._private;
        if (!i.compoundBoundsClean || r) {
            t(n);
            if (!e.batching()) {
                i.compoundBoundsClean = true;
            }
        }
    }
    return this;
};
const Dr = (e)=>{
    if (e === Infinity || e === -Infinity) {
        return 0;
    }
    return e;
};
const Lr = (e, t, a, n, i)=>{
    if (!(n - t === 0 || i - a === 0 || t == null || a == null || n == null || i == null)) {
        e.x1 = t < e.x1 ? t : e.x1;
        e.x2 = n > e.x2 ? n : e.x2;
        e.y1 = a < e.y1 ? a : e.y1;
        e.y2 = i > e.y2 ? i : e.y2;
        e.w = e.x2 - e.x1;
        e.h = e.y2 - e.y1;
    }
};
const rt = (e, t)=>{
    if (t == null) {
        return e;
    }
    return Lr(e, t.x1, t.y1, t.x2, t.y2);
};
const la = (e, t, a)=>xr(e, t, a);
const Qa = (e, t, a)=>{
    if (!t.cy().headless()) {
        const n = t._private;
        const i = n.rstyle;
        const s = i.arrowWidth / 2;
        const o = t.pstyle(`${a}-arrow-shape`).value;
        let u;
        let l;
        if (o !== "none") {
            switch(a){
                case "source":
                    u = i.srcX;
                    l = i.srcY;
                    break;
                case "target":
                    u = i.tgtX;
                    l = i.tgtY;
                    break;
                default:
                    u = i.midX;
                    l = i.midY;
            }
            const v = n.arrowBounds = n.arrowBounds || {};
            const f = v[a] = v[a] || {};
            f.x1 = u - s;
            f.y1 = l - s;
            f.x2 = u + s;
            f.y2 = l + s;
            f.w = f.x2 - f.x1;
            f.h = f.y2 - f.y1;
            sn(f, 1);
            Lr(e, f.x1, f.y1, f.x2, f.y2);
        }
    }
};
const gs = (e, t, a)=>{
    if (!t.cy().headless()) {
        let n;
        if (a) {
            n = `${a}-`;
        } else {
            n = "";
        }
        const i = t._private;
        const s = i.rstyle;
        const o = t.pstyle(`${n}label`).strValue;
        if (o) {
            const u = t.pstyle("text-halign");
            const l = t.pstyle("text-valign");
            const v = la(s, "labelWidth", a);
            const f = la(s, "labelHeight", a);
            const c = la(s, "labelX", a);
            const h = la(s, "labelY", a);
            const d = t.pstyle(`${n}text-margin-x`).pfValue;
            const y = t.pstyle(`${n}text-margin-y`).pfValue;
            const g = t.isEdge();
            const p = t.pstyle(`${n}text-rotation`);
            const m = t.pstyle("text-outline-width").pfValue;
            const b = t.pstyle("text-border-width").pfValue;
            const w = b / 2;
            const E = t.pstyle("text-background-padding").pfValue;
            const C = 2;
            const x = f;
            const T = v;
            const k = T / 2;
            const D = x / 2;
            let B;
            let P;
            let A;
            let R;
            if (g) {
                B = c - k;
                P = c + k;
                A = h - D;
                R = h + D;
            } else {
                switch(u.value){
                    case "left":
                        B = c - T;
                        P = c;
                        break;
                    case "center":
                        B = c - k;
                        P = c + k;
                        break;
                    case "right":
                        B = c;
                        P = c + T;
                        break;
                }
                switch(l.value){
                    case "top":
                        A = h - x;
                        R = h;
                        break;
                    case "center":
                        A = h - D;
                        R = h + D;
                        break;
                    case "bottom":
                        A = h;
                        R = h + x;
                        break;
                }
            }
            const L = d - Math.max(m, w) - E - C;
            const I = d + Math.max(m, w) + E + C;
            const M = y - Math.max(m, w) - E - C;
            const O = y + Math.max(m, w) + E + C;
            B += L;
            P += I;
            A += M;
            R += O;
            const q = a || "main";
            const _ = i.labelBounds;
            const N = _[q] = _[q] || {};
            N.x1 = B;
            N.y1 = A;
            N.x2 = P;
            N.y2 = R;
            N.w = P - B;
            N.h = R - A;
            N.leftPad = L;
            N.rightPad = I;
            N.topPad = M;
            N.botPad = O;
            const F = g && p.strValue === "autorotate";
            const U = p.pfValue != null && p.pfValue !== 0;
            if (F || U) {
                const J = F ? la(i.rstyle, "labelAngle", a) : p.pfValue;
                const Z = Math.cos(J);
                const j = Math.sin(J);
                let re = (B + P) / 2;
                let ne = (A + R) / 2;
                if (!g) {
                    switch(u.value){
                        case "left":
                            re = P;
                            break;
                        case "right":
                            re = B;
                            break;
                    }
                    switch(l.value){
                        case "top":
                            ne = R;
                            break;
                        case "bottom":
                            ne = A;
                            break;
                    }
                }
                const Q = (we, me)=>{
                    we = we - re;
                    me = me - ne;
                    return {
                        x: we * Z - me * j + re,
                        y: we * j + me * Z + ne
                    };
                };
                const V = Q(B, A);
                const H = Q(B, R);
                const W = Q(P, A);
                const Y = Q(P, R);
                B = Math.min(V.x, H.x, W.x, Y.x);
                P = Math.max(V.x, H.x, W.x, Y.x);
                A = Math.min(V.y, H.y, W.y, Y.y);
                R = Math.max(V.y, H.y, W.y, Y.y);
            }
            const te = `${q}Rot`;
            const ce = _[te] = _[te] || {};
            ce.x1 = B;
            ce.y1 = A;
            ce.x2 = P;
            ce.y2 = R;
            ce.w = P - B;
            ce.h = R - A;
            Lr(e, B, A, P, R);
            Lr(i.labelBounds.all, B, A, P, R);
        }
        return e;
    }
};
const il = (e, t)=>{
    if (!t.cy().headless()) {
        const a = t.pstyle("outline-opacity").value;
        const n = t.pstyle("outline-width").value;
        const i = t.pstyle("outline-offset").value;
        const s = n + i;
        Gv(e, t, a, s, "outside", s / 2);
    }
};
var Gv = (e, t, a, n, i, s)=>{
    if (!(a === 0 || n <= 0 || i === "inside")) {
        const o = t.cy();
        const u = o.renderer();
        const l = u.nodeShapes[u.getNodeShape(t)];
        if (l) {
            const v = t.position();
            const { x, y: y_1 } = v;
            const h = t.width();
            const d = t.height();
            if (l.hasMiterBounds) {
                if (i === "center") {
                    n /= 2;
                }
                const y = l.miterBounds(x, y_1, h, d, n);
                rt(e, y);
            } else {
                if (s != null && s > 0) {
                    on(e, [
                        s,
                        s,
                        s,
                        s
                    ]);
                }
            }
        }
    }
};
const Hg = (e, t)=>{
    if (!t.cy().headless()) {
        const a = t.pstyle("border-opacity").value;
        const n = t.pstyle("border-width").pfValue;
        const i = t.pstyle("border-position").value;
        Gv(e, t, a, n, i);
    }
};
const Wg = (e, t)=>{
    const a = e._private.cy;
    const n = a.styleEnabled();
    const i = a.headless();
    const s = yr();
    const e__private = e._private;
    const u = e.isNode();
    const l = e.isEdge();
    let v;
    let f;
    let c;
    let h;
    let d;
    let y;
    const o_rstyle = e__private.rstyle;
    const p = u && n ? e.pstyle("bounds-expansion").pfValue : [
        0
    ];
    const m = (Be)=>Be.pstyle("display").value !== "none";
    const b = !n || m(e) && (!l || m(e.source()) && m(e.target()));
    if (b) {
        let w = 0;
        let E = 0;
        if (n && t.includeOverlays) {
            w = e.pstyle("overlay-opacity").value;
            if (w !== 0) {
                E = e.pstyle("overlay-padding").value;
            }
        }
        let C = 0;
        let x = 0;
        if (n && t.includeUnderlays) {
            C = e.pstyle("underlay-opacity").value;
            if (C !== 0) {
                x = e.pstyle("underlay-padding").value;
            }
        }
        const T = Math.max(E, x);
        let k = 0;
        let D = 0;
        if (n) {
            k = e.pstyle("width").pfValue;
            D = k / 2;
        }
        if (u && t.includeNodes) {
            const B = e.position();
            d = B.x;
            y = B.y;
            const P = e.outerWidth();
            const A = P / 2;
            const R = e.outerHeight();
            const L = R / 2;
            v = d - A;
            f = d + A;
            c = y - L;
            h = y + L;
            Lr(s, v, c, f, h);
            if (n) {
                il(s, e);
            }
            if (n && t.includeOutlines && !i) {
                il(s, e);
            }
            if (n) {
                Hg(s, e);
            }
        } else if (l && t.includeEdges) {
            if (n && !i) {
                const I = e.pstyle("curve-style").strValue;
                v = Math.min(o_rstyle.srcX, o_rstyle.midX, o_rstyle.tgtX);
                f = Math.max(o_rstyle.srcX, o_rstyle.midX, o_rstyle.tgtX);
                c = Math.min(o_rstyle.srcY, o_rstyle.midY, o_rstyle.tgtY);
                h = Math.max(o_rstyle.srcY, o_rstyle.midY, o_rstyle.tgtY);
                v -= D;
                f += D;
                c -= D;
                h += D;
                Lr(s, v, c, f, h);
                if (I === "haystack") {
                    const M = o_rstyle.haystackPts;
                    if (M && M.length === 2) {
                        v = M[0].x;
                        c = M[0].y;
                        f = M[1].x;
                        h = M[1].y;
                        if (v > f) {
                            const O = v;
                            v = f;
                            f = O;
                        }
                        if (c > h) {
                            const q = c;
                            c = h;
                            h = q;
                        }
                        Lr(s, v - D, c - D, f + D, h + D);
                    }
                } else if (I === "bezier" || I === "unbundled-bezier" || tt(I, "segments") || tt(I, "taxi")) {
                    let _;
                    switch(I){
                        case "bezier":
                        case "unbundled-bezier":
                            _ = o_rstyle.bezierPts;
                            break;
                        case "segments":
                        case "taxi":
                        case "round-segments":
                        case "round-taxi":
                            _ = o_rstyle.linePts;
                            break;
                    }
                    if (_ != null) {
                        for (const F of _){
                            v = F.x - D;
                            f = F.x + D;
                            c = F.y - D;
                            h = F.y + D;
                            Lr(s, v, c, f, h);
                        }
                    }
                }
            } else {
                const U = e.source();
                const J = U.position();
                const Z = e.target();
                const j = Z.position();
                v = J.x;
                f = j.x;
                c = J.y;
                h = j.y;
                if (v > f) {
                    const re = v;
                    v = f;
                    f = re;
                }
                if (c > h) {
                    const ne = c;
                    c = h;
                    h = ne;
                }
                v -= D;
                f += D;
                c -= D;
                h += D;
                Lr(s, v, c, f, h);
            }
        }
        if (n && t.includeEdges && l) {
            Qa(s, e, "mid-source");
            Qa(s, e, "mid-target");
            Qa(s, e, "source");
            Qa(s, e, "target");
        }
        if (n) {
            const Q = e.pstyle("ghost").value === "yes";
            if (Q) {
                const V = e.pstyle("ghost-offset-x").pfValue;
                const H = e.pstyle("ghost-offset-y").pfValue;
                Lr(s, s.x1 + V, s.y1 + H, s.x2 + V, s.y2 + H);
            }
        }
        const W = e__private.bodyBounds = e__private.bodyBounds || {};
        Wo(W, s);
        on(W, p);
        sn(W, 1);
        if (n) {
            v = s.x1;
            f = s.x2;
            c = s.y1;
            h = s.y2;
            Lr(s, v - T, c - T, f + T, h + T);
        }
        const Y = e__private.overlayBounds = e__private.overlayBounds || {};
        Wo(Y, s);
        on(Y, p);
        sn(Y, 1);
        const te = e__private.labelBounds = e__private.labelBounds || {};
        if (te.all != null) {
            Sd(te.all);
        } else {
            te.all = yr();
        }
        n && t.includeLabels && (t.includeMainLabels && gs(s, e, null), l && (t.includeSourceLabels && gs(s, e, "source"), t.includeTargetLabels && gs(s, e, "target")));
    }
    s.x1 = Dr(s.x1);
    s.y1 = Dr(s.y1);
    s.x2 = Dr(s.x2);
    s.y2 = Dr(s.y2);
    s.w = Dr(s.x2 - s.x1);
    s.h = Dr(s.y2 - s.y1);
    if (s.w > 0 && s.h > 0 && b) {
        on(s, p);
        sn(s, 1);
    }
    return s;
};
const Hv = (e)=>{
    let t = 0;
    const a = (s)=>(s ? 1 : 0) << t++;
    let n = 0;
    n += a(e.incudeNodes);
    n += a(e.includeEdges);
    n += a(e.includeLabels);
    n += a(e.includeMainLabels);
    n += a(e.includeSourceLabels);
    n += a(e.includeTargetLabels);
    n += a(e.includeOverlays);
    n += a(e.includeOutlines);
    return n;
};
const Wv = (e)=>{
    const t = (o)=>Math.round(o);
    if (e.isEdge()) {
        const a = e.source().position();
        const n = e.target().position();
        return Fo([
            t(a.x),
            t(a.y),
            t(n.x),
            t(n.y)
        ]);
    } else {
        const i = e.position();
        return Fo([
            t(i.x),
            t(i.y)
        ]);
    }
};
const sl = (e, t)=>{
    const e__private = e._private;
    let n;
    const i = e.isEdge();
    const s = t == null ? ol : Hv(t);
    const o = s === ol;
    if (e__private.bbCache == null) {
        n = Wg(e, Da);
        e__private.bbCache = n;
        e__private.bbCachePosKey = Wv(e);
    } else {
        n = e__private.bbCache;
    }
    if (!o) {
        const u = e.isNode();
        n = yr();
        (t.includeNodes && u || t.includeEdges && !u) && (t.includeOverlays ? rt(n, e__private.overlayBounds) : rt(n, e__private.bodyBounds));
        t.includeLabels && (t.includeMainLabels && (!i || t.includeSourceLabels && t.includeTargetLabels) ? rt(n, e__private.labelBounds.all) : (t.includeMainLabels && rt(n, e__private.labelBounds.mainRot), t.includeSourceLabels && rt(n, e__private.labelBounds.sourceRot), t.includeTargetLabels && rt(n, e__private.labelBounds.targetRot)));
        n.w = n.x2 - n.x1;
        n.h = n.y2 - n.y1;
    }
    return n;
};
var Da = {
    includeNodes: true,
    includeEdges: true,
    includeLabels: true,
    includeMainLabels: true,
    includeSourceLabels: true,
    includeTargetLabels: true,
    includeOverlays: true,
    includeUnderlays: true,
    includeOutlines: true,
    useCache: true
};
var ol = Hv(Da);
const ul = vr(Da);
gt.boundingBox = function(r) {
    let e;
    const t = r === undefined || r.useCache === undefined || r.useCache === true;
    const a = Yt((v)=>{
        const v__private = v._private;
        return v__private.bbCache == null || v__private.styleDirty || v__private.bbCachePosKey !== Wv(v);
    }, (v)=>v.id());
    if (t && this.length === 1 && !a(this[0])) {
        if (r === undefined) {
            r = Da;
        } else {
            r = ul(r);
        }
        e = sl(this[0], r);
    } else {
        e = yr();
        r = r || Da;
        const n = ul(r);
        const i = this;
        const s = i.cy();
        const o = s.styleEnabled();
        this.edges().forEach(a);
        this.nodes().forEach(a);
        if (o) {
            this.recalculateRenderedStyle(t);
        }
        this.updateCompoundBounds(!t);
        for (const l of i){
            if (a(l)) {
                l.dirtyBoundingBoxCache();
            }
            rt(e, sl(l, n));
        }
    }
    e.x1 = Dr(e.x1);
    e.y1 = Dr(e.y1);
    e.x2 = Dr(e.x2);
    e.y2 = Dr(e.y2);
    e.w = Dr(e.x2 - e.x1);
    e.h = Dr(e.y2 - e.y1);
    return e;
};
gt.dirtyBoundingBoxCache = function() {
    for(let r = 0; r < this.length; r++){
        const e = this[r]._private;
        e.bbCache = null;
        e.bbCachePosKey = null;
        e.bodyBounds = null;
        e.overlayBounds = null;
        e.labelBounds.all = null;
        e.labelBounds.source = null;
        e.labelBounds.target = null;
        e.labelBounds.main = null;
        e.labelBounds.sourceRot = null;
        e.labelBounds.targetRot = null;
        e.labelBounds.mainRot = null;
        e.arrowBounds.source = null;
        e.arrowBounds.target = null;
        e.arrowBounds["mid-source"] = null;
        e.arrowBounds["mid-target"] = null;
    }
    this.emitAndNotify("bounds");
    return this;
};
gt.boundingBoxAt = function(r) {
    let e = this.nodes();
    const t = this.cy();
    const a = t.hasCompoundNodes();
    let n = t.collection();
    if (a) {
        n = e.filter((l)=>l.isParent());
        e = e.not(n);
    }
    if (Me(r)) {
        const i = r;
        r = ()=>i;
    }
    const s = (v, f)=>v._private.bbAtOldPos = r(v, f);
    const o = (v)=>v._private.bbAtOldPos;
    t.startBatch();
    e.forEach(s).silentPositions(r);
    if (a) {
        n.dirtyCompoundBoundsCache();
        n.dirtyBoundingBoxCache();
        n.updateCompoundBounds(true);
    }
    const u = Td(this.boundingBox({
        useCache: false
    }));
    e.silentPositions(o);
    if (a) {
        n.dirtyCompoundBoundsCache();
        n.dirtyBoundingBoxCache();
        n.updateCompoundBounds(true);
    }
    t.endBatch();
    return u;
};
Xt.boundingbox = Xt.bb = Xt.boundingBox;
Xt.renderedBoundingbox = Xt.renderedBoundingBox;
const $g = gt;
let pa;
let Fa;
pa = Fa = {};
const $v = (e)=>{
    e.uppercaseName = Co(e.name);
    e.autoName = `auto${e.uppercaseName}`;
    e.labelName = `label${e.uppercaseName}`;
    e.outerName = `outer${e.uppercaseName}`;
    e.uppercaseOuterName = Co(e.outerName);
    pa[e.name] = function() {
        const a = this[0];
        const a__private = a._private;
        const a__private_cy = a__private.cy;
        const styleEnabled = a__private_cy._private.styleEnabled;
        if (a) {
            if (styleEnabled) {
                if (a.isParent()) {
                    a.updateCompoundBounds();
                    return a__private[e.autoName] || 0;
                }
                const o = a.pstyle(e.name);
                if (o.strValue === "label") {
                    a.recalculateRenderedStyle();
                    return a__private.rstyle[e.labelName] || 0;
                }
                return o.pfValue;
            } else {
                return 1;
            }
        }
    };
    pa[`outer${e.uppercaseName}`] = function() {
        const a = this[0];
        const a__private = a._private;
        const a__private_cy = a__private.cy;
        const styleEnabled = a__private_cy._private.styleEnabled;
        if (a) {
            if (styleEnabled) {
                const o = a[e.name]();
                const u = a.pstyle("border-position").value;
                let l;
                switch(u){
                    case "center":
                        l = a.pstyle("border-width").pfValue;
                        break;
                    case "outside":
                        l = 2 * a.pstyle("border-width").pfValue;
                        break;
                    default:
                        l = 0;
                }
                const v = 2 * a.padding();
                return o + l + v;
            } else {
                return 1;
            }
        }
    };
    pa[`rendered${e.uppercaseName}`] = function() {
        const a = this[0];
        if (a) {
            const n = a[e.name]();
            return n * this.cy().zoom();
        }
    };
    pa[`rendered${e.uppercaseOuterName}`] = function() {
        const a = this[0];
        if (a) {
            const n = a[e.outerName]();
            return n * this.cy().zoom();
        }
    };
};
$v({
    name: "width"
});
$v({
    name: "height"
});
Fa.padding = function() {
    const r = this[0];
    const r__private = r._private;
    if (r.isParent()) {
        r.updateCompoundBounds();
        if (r__private.autoPadding !== undefined) {
            return r__private.autoPadding;
        }
        return r.pstyle("padding").pfValue;
    }
    return r.pstyle("padding").pfValue;
};
Fa.paddedHeight = function() {
    const r = this[0];
    return r.height() + 2 * r.padding();
};
Fa.paddedWidth = function() {
    const r = this[0];
    return r.width() + 2 * r.padding();
};
const Ug = Fa;
const Kg = (e, get)=>{
    if (e.isEdge() && e.takesUpSpace()) {
        return get(e);
    }
};
const Xg = (e, get)=>{
    if (e.isEdge() && e.takesUpSpace()) {
        const a = e.cy();
        return Ln(get(e), a.zoom(), a.pan());
    }
};
const Yg = (e, get)=>{
    if (e.isEdge() && e.takesUpSpace()) {
        const a = e.cy();
        const n = a.pan();
        const i = a.zoom();
        return get(e).map((s)=>Ln(s, i, n));
    }
};
const Zg = (e)=>e.renderer().getControlPoints(e);
const Qg = (e)=>e.renderer().getSegmentPoints(e);
const Jg = (e)=>e.renderer().getSourceEndpoint(e);
const jg = (e)=>e.renderer().getTargetEndpoint(e);
const ep = (e)=>e.renderer().getEdgeMidpoint(e);
const ll = {
    controlPoints: {
        get: Zg,
        mult: true
    },
    segmentPoints: {
        get: Qg,
        mult: true
    },
    sourceEndpoint: {
        get: Jg
    },
    targetEndpoint: {
        get: jg
    },
    midpoint: {
        get: ep
    }
};
const rp = (key)=>`rendered${key[0].toUpperCase()}${key.substr(1)}`;
const tp = Object.keys(ll).reduce((acc, key)=>{
    const t = ll[key];
    const a = rp(key);
    acc[key] = function() {
        return Kg(this, t.get);
    };
    if (t.mult) {
        acc[a] = function() {
            return Yg(this, t.get);
        };
    } else {
        acc[a] = function() {
            return Xg(this, t.get);
        };
    }
    return acc;
}, {});
const ap = ye({}, Gg, $g, Ug, tp);
const Uv = function(e, t) {
    this.recycle(e, t);
};
function va() {
    return false;
}
function Ja() {
    return true;
}
Uv.prototype = {
    instanceString () {
        return "event";
    },
    recycle (e, t) {
        this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = va;
        if (e != null && e.preventDefault) {
            this.type = e.type;
            this.isDefaultPrevented = e.defaultPrevented ? Ja : va;
        } else if (e != null && e.type) {
            t = e;
        } else {
            this.type = e;
        }
        if (t != null) {
            this.originalEvent = t.originalEvent;
            this.type = t.type ?? this.type;
            this.cy = t.cy;
            this.target = t.target;
            this.position = t.position;
            this.renderedPosition = t.renderedPosition;
            this.namespace = t.namespace;
            this.layout = t.layout;
        }
        if (this.cy != null && this.position != null && this.renderedPosition == null) {
            const a = this.position;
            const n = this.cy.zoom();
            const i = this.cy.pan();
            this.renderedPosition = {
                x: a.x * n + i.x,
                y: a.y * n + i.y
            };
        }
        this.timeStamp = e && e.timeStamp || Date.now();
    },
    preventDefault () {
        this.isDefaultPrevented = Ja;
        const originalEvent = this.originalEvent;
        if (originalEvent && originalEvent.preventDefault) {
            originalEvent.preventDefault();
        }
    },
    stopPropagation () {
        this.isPropagationStopped = Ja;
        const originalEvent = this.originalEvent;
        if (originalEvent && originalEvent.stopPropagation) {
            originalEvent.stopPropagation();
        }
    },
    stopImmediatePropagation () {
        this.isImmediatePropagationStopped = Ja;
        this.stopPropagation();
    },
    isDefaultPrevented: va,
    isPropagationStopped: va,
    isImmediatePropagationStopped: va
};
const Kv = /^([^.]+)(\.(?:[^.]+))?$/;
const np = ".*";
const Xv = {
    qualifierCompare (e, t) {
        return e === t;
    },
    eventMatches () {
        return true;
    },
    addEventFields () {},
    callbackContext (e) {
        return e;
    },
    beforeEmit () {},
    afterEmit () {},
    bubble () {
        return false;
    },
    parent () {
        return null;
    },
    context: null
};
const vl = Object.keys(Xv);
const ip = {};
function qn(r = ip, e) {
    for (const a of vl){
        this[a] = r[a] || Xv[a];
    }
    this.context = e || this.context;
    this.listeners = [];
    this.emitting = 0;
}
const qn_prototype = qn.prototype;
const Yv = (e, t, a, n, i, s, o)=>{
    if ($e(n)) {
        i = n;
        n = null;
    }
    o && (s == null ? s = o : s = ye({}, s, o));
    for(let u = Ve(a) ? a : a.split(/\s+/), l = 0; l < u.length; l++){
        const v = u[l];
        if (!ot(v)) {
            const f = v.match(Kv);
            if (f) {
                const c = f[1];
                const h = f[2] ? f[2] : null;
                const d = t(e, v, c, h, n, i, s);
                if (d === false) {
                    break;
                }
            }
        }
    }
};
const fl = (e, t)=>{
    e.addEventFields(e.context, t);
    return new Uv(t.type, t);
};
const sp = (e, t, a)=>{
    if (cc(a)) {
        t(e, a);
        return;
    } else if (Me(a)) {
        t(e, fl(e, a));
        return;
    }
    for(let n = Ve(a) ? a : a.split(/\s+/), i = 0; i < n.length; i++){
        const s = n[i];
        if (!ot(s)) {
            const o = s.match(Kv);
            if (o) {
                const u = o[1];
                const l = o[2] ? o[2] : null;
                const v = fl(e, {
                    type: u,
                    namespace: l,
                    target: e.context
                });
                t(e, v);
            }
        }
    }
};
qn_prototype.on = qn_prototype.addListener = function(r, e, t, a, n) {
    Yv(this, (i, event, o, u, qualifier, v, conf)=>{
        if ($e(v)) {
            i.listeners.push({
                event,
                callback: v,
                type: o,
                namespace: u,
                qualifier,
                conf
            });
        }
    }, r, e, t, a, n);
    return this;
};
qn_prototype.one = function(r, e, t, a) {
    return this.on(r, e, t, a, {
        one: true
    });
};
qn_prototype.removeListener = qn_prototype.off = function(r, e, t, a) {
    const n = this;
    if (this.emitting !== 0) {
        this.listeners = Xc(this.listeners);
    }
    const listeners = this.listeners;
    const s = (l)=>{
        const v = listeners[l];
        Yv(n, (f, c, h, d, y, g)=>{
            if ((v.type === h || r === "*") && (!d && v.namespace !== ".*" || v.namespace === d) && (!y || f.qualifierCompare(v.qualifier, y)) && (!g || v.callback === g)) {
                listeners.splice(l, 1);
                return false;
            }
        }, r, e, t, a);
    };
    for(let o = listeners.length - 1; o >= 0; o--){
        s(o);
    }
    return this;
};
qn_prototype.removeAllListeners = function() {
    return this.removeListener("*");
};
qn_prototype.emit = qn_prototype.trigger = function(r, e, t) {
    let listeners = this.listeners;
    let a_length = listeners.length;
    this.emitting++;
    if (!Ve(e)) {
        e = [
            e
        ];
    }
    sp(this, (i, s)=>{
        if (t != null) {
            listeners = [
                {
                    event: s.event,
                    type: s.type,
                    namespace: s.namespace,
                    callback: t
                }
            ];
            a_length = listeners.length;
        }
        const o = ()=>{
            const v = listeners[u];
            if (v.type === s.type && (!v.namespace || v.namespace === s.namespace || v.namespace === np) && i.eventMatches(i.context, v, s)) {
                const f = [
                    s
                ];
                if (e != null) {
                    Zc(f, e);
                }
                i.beforeEmit(i.context, v, s);
                if (v.conf && v.conf.one) {
                    i.listeners = i.listeners.filter((d)=>d !== v);
                }
                const c = i.callbackContext(i.context, v, s);
                const h = v.callback.apply(c, f);
                i.afterEmit(i.context, v, s);
                if (h === false) {
                    s.stopPropagation();
                    s.preventDefault();
                }
            }
        };
        for(var u = 0; u < a_length; u++){
            o();
        }
        if (i.bubble(i.context) && !s.isPropagationStopped()) {
            i.parent(i.context).emit(s, e);
        }
    }, r);
    this.emitting--;
    return this;
};
const op = {
    qualifierCompare (e, t) {
        if (e == null || t == null) {
            return e == null && t == null;
        }
        return e.sameText(t);
    },
    eventMatches (e, { qualifier }, a) {
        if (qualifier != null) {
            return e !== a.target && Ma(a.target) && qualifier.matches(a.target);
        }
        return true;
    },
    addEventFields (e, t) {
        t.cy = e.cy();
        t.target = e;
    },
    callbackContext (e, t, a) {
        if (t.qualifier != null) {
            return a.target;
        }
        return e;
    },
    beforeEmit (e, t) {
        if (t.conf && t.conf.once) {
            t.conf.onceCollection.removeListener(t.event, t.qualifier, t.callback);
        }
    },
    bubble () {
        return true;
    },
    parent (e) {
        if (e.isChild()) {
            return e.parent();
        }
        return e.cy();
    }
};
const ja = (e)=>{
    if (he(e)) {
        return new vt(e);
    }
    return e;
};
const Zv = {
    createEmitter () {
        for(let e = 0; e < this.length; e++){
            const t = this[e];
            const a = t._private;
            if (!a.emitter) {
                a.emitter = new qn(op, t);
            }
        }
        return this;
    },
    emitter () {
        return this._private.emitter;
    },
    on (e, t, a) {
        const n = ja(t);
        for(let i = 0; i < this.length; i++){
            const s = this[i];
            s.emitter().on(e, n, a);
        }
        return this;
    },
    removeListener (e, t, a) {
        const n = ja(t);
        for(let i = 0; i < this.length; i++){
            const s = this[i];
            s.emitter().removeListener(e, n, a);
        }
        return this;
    },
    removeAllListeners () {
        for(let e = 0; e < this.length; e++){
            const t = this[e];
            t.emitter().removeAllListeners();
        }
        return this;
    },
    one (e, t, a) {
        const n = ja(t);
        for(let i = 0; i < this.length; i++){
            const s = this[i];
            s.emitter().one(e, n, a);
        }
        return this;
    },
    once (e, t, a) {
        const n = ja(t);
        for(let i = 0; i < this.length; i++){
            const s = this[i];
            s.emitter().on(e, n, a, {
                once: true,
                onceCollection: this
            });
        }
    },
    emit (e, t) {
        for(let a = 0; a < this.length; a++){
            const n = this[a];
            n.emitter().emit(e, t);
        }
        return this;
    },
    emitAndNotify (e, t) {
        if (this.length !== 0) {
            this.cy().notify(e, this);
            this.emit(e, t);
            return this;
        }
    }
};
Ne.eventAliasesOn(Zv);
const Qv = {
    nodes (e) {
        return this.filter((t)=>t.isNode()).filter(e);
    },
    edges (e) {
        return this.filter((t)=>t.isEdge()).filter(e);
    },
    byGroup () {
        const nodes = this.spawn();
        const edges = this.spawn();
        for(let a = 0; a < this.length; a++){
            const n = this[a];
            if (n.isNode()) {
                nodes.push(n);
            } else {
                edges.push(n);
            }
        }
        return {
            nodes,
            edges
        };
    },
    filter (e, t) {
        if (e === undefined) {
            return this;
        }
        if (he(e) || Tr(e)) {
            return new vt(e).filter(this);
        }
        if ($e(e)) {
            const a = this.spawn();
            for(let n = this, i = 0; i < n.length; i++){
                const s = n[i];
                const o = t ? e.apply(t, [
                    s,
                    i,
                    n
                ]) : e(s, i, n);
                if (o) {
                    a.push(s);
                }
            }
            return a;
        }
        return this.spawn();
    },
    not (e) {
        if (e) {
            if (he(e)) {
                e = this.filter(e);
            }
            const t = this.spawn();
            for(let a = 0; a < this.length; a++){
                const n = this[a];
                const i = e.has(n);
                if (!i) {
                    t.push(n);
                }
            }
            return t;
        } else {
            return this;
        }
    },
    absoluteComplement () {
        const e = this.cy();
        return e.mutableElements().not(this);
    },
    intersect (e) {
        if (he(e)) {
            return this.filter(e);
        }
        const a = this.spawn();
        const n = this;
        const i = e;
        const s = this.length < e.length;
        for(let o = s ? n : i, u = s ? i : n, l = 0; l < o.length; l++){
            const v = o[l];
            if (u.has(v)) {
                a.push(v);
            }
        }
        return a;
    },
    xor (e) {
        const t = this._private.cy;
        if (he(e)) {
            e = t.$(e);
        }
        const a = this.spawn();
        const n = this;
        const i = e;
        const s = (u, l)=>{
            for (const f of u){
                const c = f._private.data.id;
                const h = l.hasElementWithId(c);
                if (!h) {
                    a.push(f);
                }
            }
        };
        s(n, i);
        s(i, n);
        return a;
    },
    diff (e) {
        const t = this._private.cy;
        if (he(e)) {
            e = t.$(e);
        }
        const a = this.spawn();
        const n = this.spawn();
        const both = this.spawn();
        const s = this;
        const o = e;
        const u = (v, f, c)=>{
            for (const d of v){
                const y = d._private.data.id;
                const g = f.hasElementWithId(y);
                if (g) {
                    both.merge(d);
                } else {
                    c.push(d);
                }
            }
        };
        u(s, o, a);
        u(o, s, n);
        return {
            left: a,
            right: n,
            both
        };
    },
    add (e) {
        const t = this._private.cy;
        if (!e) {
            return this;
        }
        if (he(e)) {
            const a = e;
            e = t.mutableElements().filter(a);
        }
        const n = this.spawnSelf();
        for (const s of e){
            const o = !this.has(s);
            if (o) {
                n.push(s);
            }
        }
        return n;
    },
    merge (e) {
        const _private = this._private;
        const _private_cy = _private.cy;
        if (!e) {
            return this;
        }
        if (e && he(e)) {
            const n = e;
            e = _private_cy.mutableElements().filter(n);
        }
        const t_map = _private.map;
        for (const o of e){
            const u = o._private.data.id;
            const l = !t_map.has(u);
            if (l) {
                const v = this.length++;
                this[v] = o;
                t_map.set(u, {
                    ele: o,
                    index: v
                });
            }
        }
        return this;
    },
    unmergeAt (e) {
        const t = this[e];
        const a = t.id();
        const _private = this._private;
        const n_map = _private.map;
        this[e] = undefined;
        n_map.delete(a);
        const s = e === this.length - 1;
        if (this.length > 1 && !s) {
            const o = this.length - 1;
            const u = this[o];
            const l = u._private.data.id;
            this[o] = undefined;
            this[e] = u;
            n_map.set(l, {
                ele: u,
                index: e
            });
        }
        this.length--;
        return this;
    },
    unmergeOne (e) {
        e = e[0];
        const _private = this._private;
        const a = e._private.data.id;
        const t_map = _private.map;
        const i = t_map.get(a);
        if (!i) {
            return this;
        }
        const i_index = i.index;
        this.unmergeAt(i_index);
        return this;
    },
    unmerge (e) {
        const t = this._private.cy;
        if (!e) {
            return this;
        }
        if (e && he(e)) {
            const a = e;
            e = t.mutableElements().filter(a);
        }
        for(let n = 0; n < e.length; n++){
            this.unmergeOne(e[n]);
        }
        return this;
    },
    unmergeBy (e) {
        for(let t = this.length - 1; t >= 0; t--){
            const a = this[t];
            if (e(a)) {
                this.unmergeAt(t);
            }
        }
        return this;
    },
    map (e, t) {
        const a = [];
        for(let n = this, i = 0; i < n.length; i++){
            const s = n[i];
            const o = t ? e.apply(t, [
                s,
                i,
                n
            ]) : e(s, i, n);
            a.push(o);
        }
        return a;
    },
    reduce (e, t) {
        let a = t;
        for(let n = this, i = 0; i < n.length; i++){
            a = e(a, n[i], i, n);
        }
        return a;
    },
    max (e, t) {
        let a = -Infinity;
        let n;
        for(let i = this, s = 0; s < i.length; s++){
            const o = i[s];
            const u = t ? e.apply(t, [
                o,
                s,
                i
            ]) : e(o, s, i);
            if (u > a) {
                a = u;
                n = o;
            }
        }
        return {
            value: a,
            ele: n
        };
    },
    min (e, t) {
        let a = Infinity;
        let n;
        for(let i = this, s = 0; s < i.length; s++){
            const o = i[s];
            const u = t ? e.apply(t, [
                o,
                s,
                i
            ]) : e(o, s, i);
            if (u < a) {
                a = u;
                n = o;
            }
        }
        return {
            value: a,
            ele: n
        };
    }
};
const Ie = Qv;
Ie.u = Ie["|"] = Ie["+"] = Ie.union = Ie.or = Ie.add;
Ie["\\"] = Ie["!"] = Ie["-"] = Ie.difference = Ie.relativeComplement = Ie.subtract = Ie.not;
Ie.n = Ie["&"] = Ie["."] = Ie.and = Ie.intersection = Ie.intersect;
Ie["^"] = Ie["(+)"] = Ie["(-)"] = Ie.symmetricDifference = Ie.symdiff = Ie.xor;
Ie.fnFilter = Ie.filterFn = Ie.stdFilter = Ie.filter;
Ie.complement = Ie.abscomp = Ie.absoluteComplement;
const up = {
    isNode () {
        return this.group() === "nodes";
    },
    isEdge () {
        return this.group() === "edges";
    },
    isLoop () {
        return this.isEdge() && this.source()[0] === this.target()[0];
    },
    isSimple () {
        return this.isEdge() && this.source()[0] !== this.target()[0];
    },
    group () {
        const e = this[0];
        if (e) {
            return e._private.group;
        }
    }
};
const Jv = (e, t)=>{
    const a = e.cy();
    const n = a.hasCompoundNodes();
    function i(v) {
        const f = v.pstyle("z-compound-depth");
        if (f.value === "auto") {
            if (n) {
                return v.zDepth();
            }
            return 0;
        }
        if (f.value === "bottom") {
            return -1;
        }
        if (f.value === "top") {
            return Zs;
        }
        return 0;
    }
    const s = i(e) - i(t);
    if (s !== 0) {
        return s;
    }
    function o(v) {
        const f = v.pstyle("z-index-compare");
        if (f.value === "auto" && v.isNode()) {
            return 1;
        }
        return 0;
    }
    const u = o(e) - o(t);
    if (u !== 0) {
        return u;
    }
    const l = e.pstyle("z-index").value - t.pstyle("z-index").value;
    if (l !== 0) {
        return l;
    }
    return e.poolIndex() - t.poolIndex();
};
const Cn = {
    forEach (e, t) {
        if ($e(e)) {
            for(let a = this.length, n = 0; n < a; n++){
                const i = this[n];
                const s = t ? e.apply(t, [
                    i,
                    n,
                    this
                ]) : e(i, n, this);
                if (s === false) {
                    break;
                }
            }
        }
        return this;
    },
    toArray () {
        const e = [];
        for(let t = 0; t < this.length; t++){
            e.push(this[t]);
        }
        return e;
    },
    slice (e, t) {
        const a = [];
        const length = this.length;
        if (t == null) {
            t = length;
        }
        if (e == null) {
            e = 0;
        }
        if (e < 0) {
            e = length + e;
        }
        if (t < 0) {
            t = length + t;
        }
        for(let i = e; i >= 0 && i < t && i < length; i++){
            a.push(this[i]);
        }
        return this.spawn(a);
    },
    size () {
        return this.length;
    },
    eq (e) {
        return this[e] || this.spawn();
    },
    first () {
        return this[0] || this.spawn();
    },
    last () {
        return this[this.length - 1] || this.spawn();
    },
    empty () {
        return this.length === 0;
    },
    nonempty () {
        return !this.empty();
    },
    sort (e) {
        if (!$e(e)) {
            return this;
        }
        const t = this.toArray().sort(e);
        return this.spawn(t);
    },
    sortByZIndex () {
        return this.sort(Jv);
    },
    zDepth () {
        const e = this[0];
        if (e) {
            const t = e._private;
            const a = t.group;
            if (a === "nodes") {
                const n = t.data.parent ? e.parents().size() : 0;
                if (e.isParent()) {
                    return n;
                }
                return Zs - 1;
            } else {
                const { source, target } = t;
                const o = source.zDepth();
                const u = target.zDepth();
                return Math.max(o, u, 0);
            }
        }
    }
};
Cn.each = Cn.forEach;
const lp = ()=>{
    const e = "undefined";
    const t = (typeof Symbol === "undefined" ? "undefined" : typeof Symbol) != e && typeof Symbol.iterator != e;
    if (t) {
        Cn[Symbol.iterator] = function() {
            const a = this;
            const n = {
                value: undefined,
                done: false
            };
            let i = 0;
            const length = this.length;
            return Zl({
                next () {
                    if (i < length) {
                        n.value = a[i++];
                    } else {
                        n.value = undefined;
                        n.done = true;
                    }
                    return n;
                }
            }, Symbol.iterator, function() {
                return this;
            });
        };
    }
};
lp();
const vp = vr({
    nodeDimensionsIncludeLabels: false
});
const ln = {
    layoutDimensions (e) {
        e = vp(e);
        let t;
        if (!this.takesUpSpace()) {
            t = {
                w: 0,
                h: 0
            };
        } else if (e.nodeDimensionsIncludeLabels) {
            const a = this.boundingBox();
            t = {
                w: a.w,
                h: a.h
            };
        } else {
            t = {
                w: this.outerWidth(),
                h: this.outerHeight()
            };
        }
        if (t.w === 0 || t.h === 0) {
            t.w = t.h = 1;
        }
        return t;
    },
    layoutPositions (e, t, a) {
        const n = this.nodes().filter((E)=>!E.isParent());
        const i = this.cy();
        const t_eles = t.eles;
        const o = (C)=>C.id();
        const u = Yt(a, o);
        e.emit({
            type: "layoutstart",
            layout: e
        });
        e.animations = [];
        const l = (C, x, T)=>{
            const k = {
                x: x.x1 + x.w / 2,
                y: x.y1 + x.h / 2
            };
            const D = {
                x: (T.x - k.x) * C,
                y: (T.y - k.y) * C
            };
            return {
                x: k.x + D.x,
                y: k.y + D.y
            };
        };
        const v = t.spacingFactor && t.spacingFactor !== 1;
        const f = ()=>{
            if (!v) {
                return null;
            }
            const C = yr();
            for(let x = 0; x < n.length; x++){
                const T = n[x];
                const k = u(T, x);
                pv(C, k.x, k.y);
            }
            return C;
        };
        const c = f();
        const h = Yt((E, C)=>{
            let x = u(E, C);
            if (v) {
                const T = Math.abs(t.spacingFactor);
                x = l(T, c, x);
            }
            if (t.transform != null) {
                x = t.transform(E, x);
            }
            return x;
        }, o);
        if (t.animate) {
            for(let d = 0; d < n.length; d++){
                const y = n[d];
                const position = h(y, d);
                const p = t.animateFilter == null || t.animateFilter(y, d);
                if (p) {
                    const m = y.animation({
                        position,
                        duration: t.animationDuration,
                        easing: t.animationEasing
                    });
                    e.animations.push(m);
                } else {
                    y.position(position);
                }
            }
            if (t.fit) {
                const b = i.animation({
                    fit: {
                        boundingBox: t_eles.boundingBoxAt(h),
                        padding: t.padding
                    },
                    duration: t.animationDuration,
                    easing: t.animationEasing
                });
                e.animations.push(b);
            } else if (t.zoom !== undefined && t.pan !== undefined) {
                const w = i.animation({
                    zoom: t.zoom,
                    pan: t.pan,
                    duration: t.animationDuration,
                    easing: t.animationEasing
                });
                e.animations.push(w);
            }
            e.animations.forEach((E)=>E.play());
            e.one("layoutready", t.ready);
            e.emit({
                type: "layoutready",
                layout: e
            });
            ea.all(e.animations.map((E)=>E.promise())).then(()=>{
                e.one("layoutstop", t.stop);
                e.emit({
                    type: "layoutstop",
                    layout: e
                });
            });
        } else {
            n.positions(h);
            if (t.fit) {
                i.fit(t.eles, t.padding);
            }
            if (t.zoom != null) {
                i.zoom(t.zoom);
            }
            if (t.pan) {
                i.pan(t.pan);
            }
            e.one("layoutready", t.ready);
            e.emit({
                type: "layoutready",
                layout: e
            });
            e.one("layoutstop", t.stop);
            e.emit({
                type: "layoutstop",
                layout: e
            });
        }
        return this;
    },
    layout (e) {
        const t = this.cy();
        return t.makeLayout(ye({}, e, {
            eles: this
        }));
    }
};
ln.createLayout = ln.makeLayout = ln.layout;
function jv(r, e, t) {
    const t__private = t._private;
    const n = t__private.styleCache = t__private.styleCache || [];
    let i;
    if (!((i = n[r]) != null)) {
        i = n[r] = e(t);
    }
    return i;
}
function _n(r, e) {
    r = kt(r);
    return (a)=>jv(r, e, a);
}
function Gn(r, e) {
    r = kt(r);
    const t = (n)=>e.call(n);
    return function() {
        const n = this[0];
        if (n) {
            return jv(r, t, n);
        }
    };
}
const ur = {
    recalculateRenderedStyle (e) {
        const t = this.cy();
        const a = t.renderer();
        const n = t.styleEnabled();
        if (a && n) {
            a.recalculateRenderedStyle(this, e);
        }
        return this;
    },
    dirtyStyleCache () {
        const e = this.cy();
        const t = (i)=>i._private.styleCache = null;
        if (e.hasCompoundNodes()) {
            let a;
            a = this.spawnSelf().merge(this.descendants()).merge(this.parents());
            a.merge(a.connectedEdges());
            a.forEach(t);
        } else {
            this.forEach((n)=>{
                t(n);
                n.connectedEdges().forEach(t);
            });
        }
        return this;
    },
    updateStyle (e) {
        const t = this._private.cy;
        if (!t.styleEnabled()) {
            return this;
        }
        if (t.batching()) {
            const a = t._private.batchStyleEles;
            a.merge(this);
            return this;
        }
        const n = t.hasCompoundNodes();
        let i = this;
        e = !!(e || e === undefined);
        if (n) {
            i = this.spawnSelf().merge(this.descendants()).merge(this.parents());
        }
        const s = i;
        if (e) {
            s.emitAndNotify("style");
        } else {
            s.emit("style");
        }
        i.forEach((o)=>o._private.styleDirty = true);
        return this;
    },
    cleanStyle () {
        const e = this.cy();
        if (e.styleEnabled()) {
            for(let t = 0; t < this.length; t++){
                const a = this[t];
                if (a._private.styleDirty) {
                    a._private.styleDirty = false;
                    e.style().apply(a);
                }
            }
        }
    },
    parsedStyle (e, t = true) {
        const a = this[0];
        const n = a.cy();
        if (n.styleEnabled() && a) {
            if (a._private.styleDirty) {
                a._private.styleDirty = false;
                n.style().apply(a);
            }
            const i = a._private.style[e];
            return i ?? (t ? n.style().getDefaultProperty(e) : null);
        }
    },
    numericStyle (e) {
        const t = this[0];
        if (t.cy().styleEnabled() && t) {
            const a = t.pstyle(e);
            if (a.pfValue !== undefined) {
                return a.pfValue;
            }
            return a.value;
        }
    },
    numericStyleUnits (e) {
        const t = this[0];
        if (t.cy().styleEnabled() && t) {
            return t.pstyle(e).units;
        }
    },
    renderedStyle (e) {
        const t = this.cy();
        if (!t.styleEnabled()) {
            return this;
        }
        const a = this[0];
        if (a) {
            return t.style().getRenderedStyle(a, e);
        }
    },
    style (e, t) {
        const a = this.cy();
        if (!a.styleEnabled()) {
            return this;
        }
        const n = false;
        const i = a.style();
        if (Me(e)) {
            i.applyBypass(this, e, n);
            this.emitAndNotify("style");
        } else if (he(e)) {
            if (t === undefined) {
                const o = this[0];
                if (o) {
                    return i.getStylePropertyValue(o, e);
                }
                return undefined;
            } else {
                i.applyBypass(this, e, t, n);
                this.emitAndNotify("style");
            }
        } else if (e === undefined) {
            const u = this[0];
            if (u) {
                return i.getRawStyle(u);
            }
            return undefined;
        }
        return this;
    },
    removeStyle (e) {
        const t = this.cy();
        if (!t.styleEnabled()) {
            return this;
        }
        const a = false;
        const n = t.style();
        const i = this;
        if (e === undefined) {
            for (const o of i){
                n.removeAllBypasses(o, a);
            }
        } else {
            e = e.split(/\s+/);
            for (const l of i){
                n.removeBypasses(l, e, a);
            }
        }
        this.emitAndNotify("style");
        return this;
    },
    show () {
        this.css("display", "element");
        return this;
    },
    hide () {
        this.css("display", "none");
        return this;
    },
    effectiveOpacity () {
        const e = this.cy();
        if (!e.styleEnabled()) {
            return 1;
        }
        const t = e.hasCompoundNodes();
        const a = this[0];
        if (a) {
            const n = a._private;
            let i = a.pstyle("opacity").value;
            if (!t) {
                return i;
            }
            const s = n.data.parent ? a.parents() : null;
            if (s) {
                for (const u of s){
                    const l = u.pstyle("opacity").value;
                    i = l * i;
                }
            }
            return i;
        }
    },
    transparent () {
        const e = this.cy();
        if (!e.styleEnabled()) {
            return false;
        }
        const t = this[0];
        const a = t.cy().hasCompoundNodes();
        if (t) {
            if (a) {
                return t.effectiveOpacity() === 0;
            }
            return t.pstyle("opacity").value === 0;
        }
    },
    backgrounding () {
        const e = this.cy();
        if (!e.styleEnabled()) {
            return false;
        }
        const t = this[0];
        return !!t._private.backgrounding;
    }
};
function ps(r, e) {
    const r__private = r._private;
    const a = r__private.data.parent ? r.parents() : null;
    if (a) {
        for (const i of a){
            if (!e(i)) {
                return false;
            }
        }
    }
    return true;
}
function uo(r) {
    const e = r.ok;
    const t = r.edgeOkViaNode || r.ok;
    const a = r.parentOk || r.ok;
    return function() {
        const n = this.cy();
        if (!n.styleEnabled()) {
            return true;
        }
        const i = this[0];
        const s = n.hasCompoundNodes();
        if (i) {
            const o = i._private;
            if (!e(i)) {
                return false;
            }
            if (i.isNode()) {
                return !s || ps(i, a);
            }
            const { source, target } = o;
            return t(source) && (!s || ps(source, t)) && (source === target || t(target) && (!s || ps(target, t)));
        }
    };
}
const ra = _n("eleTakesUpSpace", (r)=>r.pstyle("display").value === "element" && r.width() !== 0 && (r.isNode() ? r.height() !== 0 : true));
ur.takesUpSpace = Gn("takesUpSpace", uo({
    ok: ra
}));
const fp = _n("eleInteractive", (r)=>r.pstyle("events").value === "yes" && r.pstyle("visibility").value === "visible" && ra(r));
const parentOk = _n("parentInteractive", (r)=>r.pstyle("visibility").value === "visible" && ra(r));
ur.interactive = Gn("interactive", uo({
    ok: fp,
    parentOk,
    edgeOkViaNode: ra
}));
ur.noninteractive = function() {
    const r = this[0];
    if (r) {
        return !r.interactive();
    }
};
const dp = _n("eleVisible", (r)=>r.pstyle("visibility").value === "visible" && r.pstyle("opacity").pfValue !== 0 && ra(r));
ur.visible = Gn("visible", uo({
    ok: dp,
    edgeOkViaNode: ra
}));
ur.hidden = function() {
    const r = this[0];
    if (r) {
        return !r.visible();
    }
};
ur.isBundledBezier = Gn("isBundledBezier", function() {
    if (this.cy().styleEnabled()) {
        return !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace();
    }
    return false;
});
ur.bypass = ur.css = ur.style;
ur.renderedCss = ur.renderedStyle;
ur.removeBypass = ur.removeCss = ur.removeStyle;
ur.pstyle = ur.parsedStyle;
const st = {};
function cl(r) {
    return function() {
        const e = arguments;
        const t = [];
        if (e.length === 2) {
            const a = e[0];
            const n = e[1];
            this.on(r.event, a, n);
        } else if (e.length === 1 && $e(e[0])) {
            const i = e[0];
            this.on(r.event, i);
        } else if (e.length === 0 || e.length === 1 && Ve(e[0])) {
            const s = e.length === 1 ? e[0] : null;
            for(let o = 0; o < this.length; o++){
                const u = this[o];
                let l = !r.ableField || u._private[r.ableField];
                const v = u._private[r.field] != r.value;
                if (r.overrideAble) {
                    const f = r.overrideAble(u);
                    if (f !== undefined && (l = f, !f)) {
                        return this;
                    }
                }
                if (l) {
                    u._private[r.field] = r.value;
                    if (v) {
                        t.push(u);
                    }
                }
            }
            const c = this.spawn(t);
            c.updateStyle();
            c.emit(r.event);
            if (s) {
                c.emit(s);
            }
        }
        return this;
    };
}
function ta(r) {
    st[r.field] = function() {
        const e = this[0];
        if (e) {
            if (r.overrideField) {
                const t = r.overrideField(e);
                if (t !== undefined) {
                    return t;
                }
            }
            return e._private[r.field];
        }
    };
    st[r.on] = cl({
        event: r.on,
        field: r.field,
        ableField: r.ableField,
        overrideAble: r.overrideAble,
        value: true
    });
    st[r.off] = cl({
        event: r.off,
        field: r.field,
        ableField: r.ableField,
        overrideAble: r.overrideAble,
        value: false
    });
}
ta({
    field: "locked",
    overrideField (e) {
        if (e.cy().autolock()) {
            return true;
        }
    },
    on: "lock",
    off: "unlock"
});
ta({
    field: "grabbable",
    overrideField (e) {
        if (e.cy().autoungrabify() || e.pannable()) {
            return false;
        }
    },
    on: "grabify",
    off: "ungrabify"
});
ta({
    field: "selected",
    ableField: "selectable",
    overrideAble (e) {
        if (e.cy().autounselectify()) {
            return false;
        }
    },
    on: "select",
    off: "unselect"
});
ta({
    field: "selectable",
    overrideField (e) {
        if (e.cy().autounselectify()) {
            return false;
        }
    },
    on: "selectify",
    off: "unselectify"
});
st.deselect = st.unselect;
st.grabbed = function() {
    const r = this[0];
    if (r) {
        return r._private.grabbed;
    }
};
ta({
    field: "active",
    on: "activate",
    off: "unactivate"
});
ta({
    field: "pannable",
    on: "panify",
    off: "unpanify"
});
st.inactive = function() {
    const r = this[0];
    if (r) {
        return !r._private.active;
    }
};
const dr = {};
const dl = (e)=>function(a) {
        for(var n = this, i = [], s = 0; s < n.length; s++){
            const o = n[s];
            if (o.isNode()) {
                let u = false;
                for(let l = o.connectedEdges(), v = 0; v < l.length; v++){
                    const f = l[v];
                    const c = f.source();
                    const h = f.target();
                    if (e.noIncomingEdges && h === o && c !== o || e.noOutgoingEdges && c === o && h !== o) {
                        u = true;
                        break;
                    }
                }
                if (!u) {
                    i.push(o);
                }
            }
        }
        return this.spawn(i, true).filter(a);
    };
const hl = (e)=>function(t) {
        for(var a = this, n = [], i = 0; i < a.length; i++){
            const s = a[i];
            if (s.isNode()) {
                for(let o = s.connectedEdges(), u = 0; u < o.length; u++){
                    const l = o[u];
                    const v = l.source();
                    const f = l.target();
                    if (e.outgoing && v === s) {
                        n.push(l);
                        n.push(f);
                    } else if (e.incoming && f === s) {
                        n.push(l);
                        n.push(v);
                    }
                }
            }
        }
        return this.spawn(n, true).filter(t);
    };
var gl = (e)=>function(t) {
        let a = this;
        const n = [];
        const i = {};
        while(true){
            const s = e.outgoing ? a.outgoers() : a.incomers();
            if (s.length === 0) {
                break;
            }
            let o = false;
            for (const l of s){
                const v = l.id();
                if (!i[v]) {
                    i[v] = true;
                    n.push(l);
                    o = true;
                }
            }
            if (!o) {
                break;
            }
            a = s;
        }
        return this.spawn(n, true).filter(t);
    };
dr.clearTraversalCache = function() {
    for(let r = 0; r < this.length; r++){
        this[r]._private.traversalCache = null;
    }
};
ye(dr, {
    roots: dl({
        noIncomingEdges: true
    }),
    leaves: dl({
        noOutgoingEdges: true
    }),
    outgoers: Br(hl({
        outgoing: true
    }), "outgoers"),
    successors: gl({
        outgoing: true
    }),
    incomers: Br(hl({
        incoming: true
    }), "incomers"),
    predecessors: gl({})
});
ye(dr, {
    neighborhood: Br(function(r) {
        const e = [];
        for(let t = this.nodes(), a = 0; a < t.length; a++){
            const n = t[a];
            for(let i = n.connectedEdges(), s = 0; s < i.length; s++){
                const o = i[s];
                const u = o.source();
                const l = o.target();
                const v = n === u ? l : u;
                if (v.length > 0) {
                    e.push(v[0]);
                }
                e.push(o[0]);
            }
        }
        return this.spawn(e, true).filter(r);
    }, "neighborhood"),
    closedNeighborhood (e) {
        return this.neighborhood().add(this).filter(e);
    },
    openNeighborhood (e) {
        return this.neighborhood(e);
    }
});
dr.neighbourhood = dr.neighborhood;
dr.closedNeighbourhood = dr.closedNeighborhood;
dr.openNeighbourhood = dr.openNeighborhood;
ye(dr, {
    source: Br(function(e) {
        const t = this[0];
        let a;
        if (t) {
            a = t._private.source || t.cy().collection();
        }
        if (a && e) {
            return a.filter(e);
        }
        return a;
    }, "source"),
    target: Br(function(e) {
        const t = this[0];
        let a;
        if (t) {
            a = t._private.target || t.cy().collection();
        }
        if (a && e) {
            return a.filter(e);
        }
        return a;
    }, "target"),
    sources: pl({
        attr: "source"
    }),
    targets: pl({
        attr: "target"
    })
});
function pl(r) {
    return function(t) {
        const a = [];
        for(let n = 0; n < this.length; n++){
            const i = this[n];
            const s = i._private[r.attr];
            if (s) {
                a.push(s);
            }
        }
        return this.spawn(a, true).filter(t);
    };
}
ye(dr, {
    edgesWith: Br(yl(), "edgesWith"),
    edgesTo: Br(yl({
        thisIsSrc: true
    }), "edgesTo")
});
function yl(r) {
    return function(t) {
        const a = [];
        const n = this._private.cy;
        const i = r || {};
        if (he(t)) {
            t = n.$(t);
        }
        for(let s = 0; s < t.length; s++){
            for(let o = t[s]._private.edges, u = 0; u < o.length; u++){
                const l = o[u];
                const v = l._private.data;
                const f = this.hasElementWithId(v.source) && t.hasElementWithId(v.target);
                const c = t.hasElementWithId(v.source) && this.hasElementWithId(v.target);
                const h = f || c;
                h && ((i.thisIsSrc || i.thisIsTgt) && (i.thisIsSrc && !f || i.thisIsTgt && !c) || a.push(l));
            }
        }
        return this.spawn(a, true);
    };
}
ye(dr, {
    connectedEdges: Br(function(r) {
        const e = [];
        for(let t = this, a = 0; a < t.length; a++){
            const n = t[a];
            if (n.isNode()) {
                for(let i = n._private.edges, s = 0; s < i.length; s++){
                    const o = i[s];
                    e.push(o);
                }
            }
        }
        return this.spawn(e, true).filter(r);
    }, "connectedEdges"),
    connectedNodes: Br(function(r) {
        const e = [];
        for(let t = this, a = 0; a < t.length; a++){
            const n = t[a];
            if (n.isEdge()) {
                e.push(n.source()[0]);
                e.push(n.target()[0]);
            }
        }
        return this.spawn(e, true).filter(r);
    }, "connectedNodes"),
    parallelEdges: Br(ml(), "parallelEdges"),
    codirectedEdges: Br(ml({
        codirected: true
    }), "codirectedEdges")
});
function ml(r) {
    const e = {
        codirected: false
    };
    r = ye({}, e, r);
    return function(a) {
        const n = [];
        for(let i = this.edges(), s = r, o = 0; o < i.length; o++){
            const u = i[o];
            const l = u._private;
            const v = l.source;
            const f = v._private.data.id;
            const c = l.data.target;
            for(let h = v._private.edges, d = 0; d < h.length; d++){
                const y = h[d];
                const g = y._private.data;
                const { target, source } = g;
                const b = target === c && source === f;
                const w = f === target && c === source;
                if (s.codirected && b || !s.codirected && (b || w)) {
                    n.push(y);
                }
            }
        }
        return this.spawn(n, true).filter(a);
    };
}
ye(dr, {
    components (e) {
        const t = this;
        const a = t.cy();
        const n = a.collection();
        let i = e == null ? t.nodes() : e.nodes();
        const s = [];
        if (e != null && i.empty()) {
            i = e.sources();
        }
        const o = (v, f)=>{
            n.merge(v);
            i.unmerge(v);
            f.merge(v);
        };
        if (i.empty()) {
            return t.spawn();
        }
        const u = ()=>{
            const v = a.collection();
            s.push(v);
            const f = i[0];
            o(f, v);
            t.bfs({
                directed: false,
                roots: f,
                visit (h) {
                    return o(h, v);
                }
            });
            v.forEach((c)=>{
                c.connectedEdges().forEach((h)=>{
                    if (t.has(h) && v.has(h.source()) && v.has(h.target())) {
                        v.merge(h);
                    }
                });
            });
        };
        do {
            u();
        }while (i.length > 0)
        return s;
    },
    component () {
        const e = this[0];
        return e.cy().mutableElements().components(e)[0];
    }
});
dr.componentsOf = dr.components;
const lr = function(e, t, a = false, n = false) {
    if (e === undefined) {
        He("A collection must have a reference to the core");
        return;
    }
    const i = new Kr;
    let s = false;
    if (!t) {
        t = [];
    } else if (t.length > 0 && Me(t[0]) && !Ma(t[0])) {
        s = true;
        const o = [];
        const u = new jt;
        for(let l = 0, v = t.length; l < v; l++){
            const f = t[l];
            if (f.data == null) {
                f.data = {};
            }
            const c = f.data;
            if (c.id == null) {
                c.id = dv();
            } else if (e.hasElementWithId(c.id) || u.has(c.id)) {
                continue;
            }
            const h = new Mn(e, f, false);
            o.push(h);
            u.add(c.id);
        }
        t = o;
    }
    this.length = 0;
    for(let d = 0, y = t.length; d < y; d++){
        const g = t[d][0];
        if (g != null) {
            const p = g._private.data.id;
            if (!a || !i.has(p)) {
                if (a) {
                    i.set(p, {
                        index: this.length,
                        ele: g
                    });
                }
                this[this.length] = g;
                this.length++;
            }
        }
    }
    this._private = {
        eles: this,
        cy: e,
        get map () {
            if (this.lazyMap == null) {
                this.rebuildMap();
            }
            return this.lazyMap;
        },
        set map (m){
            this.lazyMap = m;
        },
        rebuildMap () {
            const b = this.lazyMap = new Kr;
            for(let w = this.eles, E = 0; E < w.length; E++){
                const C = w[E];
                b.set(C.id(), {
                    index: E,
                    ele: C
                });
            }
        }
    };
    if (a) {
        this._private.map = i;
    }
    if (s && !n) {
        this.restore();
    }
};
const _e = Mn.prototype = lr.prototype = Object.create(Array.prototype);
_e.instanceString = ()=>"collection";
_e.spawn = function(r, e) {
    return new lr(this.cy(), r, e);
};
_e.spawnSelf = function() {
    return this.spawn(this);
};
_e.cy = function() {
    return this._private.cy;
};
_e.renderer = function() {
    return this._private.cy.renderer();
};
_e.element = function() {
    return this[0];
};
_e.collection = function() {
    if (jl(this)) {
        return this;
    }
    return new lr(this._private.cy, [
        this
    ]);
};
_e.unique = function() {
    return new lr(this._private.cy, this, true);
};
_e.hasElementWithId = function(r) {
    r = `${r}`;
    return this._private.map.has(r);
};
_e.getElementById = function(r) {
    r = `${r}`;
    const e = this._private.cy;
    const t = this._private.map.get(r);
    if (t) {
        return t.ele;
    }
    return new lr(e);
};
_e.$id = _e.getElementById;
_e.poolIndex = function() {
    const r = this._private.cy;
    const elements = r._private.elements;
    const t = this[0]._private.data.id;
    return elements._private.map.get(t).index;
};
_e.indexOf = function(r) {
    const e = r[0]._private.data.id;
    return this._private.map.get(e).index;
};
_e.indexOfId = function(r) {
    r = `${r}`;
    return this._private.map.get(r).index;
};
_e.json = function(r) {
    let e = this.element();
    const t = this.cy();
    if (e == null && r) {
        return this;
    }
    if (e != null) {
        const a = e._private;
        if (Me(r)) {
            t.startBatch();
            if (r.data) {
                e.data(r.data);
                const n = a.data;
                if (e.isEdge()) {
                    let i = false;
                    const s = {};
                    const o = r.data.source;
                    const u = r.data.target;
                    if (o != null && o != n.source) {
                        s.source = `${o}`;
                        i = true;
                    }
                    if (u != null && u != n.target) {
                        s.target = `${u}`;
                        i = true;
                    }
                    if (i) {
                        e = e.move(s);
                    }
                } else {
                    const l = "parent" in r.data;
                    let v = r.data.parent;
                    if (l && (v != null || n.parent != null) && v != n.parent) {
                        if (v === undefined) {
                            v = null;
                        }
                        if (v != null) {
                            v = `${v}`;
                        }
                        e = e.move({
                            parent: v
                        });
                    }
                }
            }
            if (r.position) {
                e.position(r.position);
            }
            const f = (y, g, p)=>{
                const m = r[y];
                m != null && m !== a[y] && (m ? e[g]() : e[p]());
            };
            f("removed", "remove", "restore");
            f("selected", "select", "unselect");
            f("selectable", "selectify", "unselectify");
            f("locked", "lock", "unlock");
            f("grabbable", "grabify", "ungrabify");
            f("pannable", "panify", "unpanify");
            if (r.classes != null) {
                e.classes(r.classes);
            }
            t.endBatch();
            return this;
        } else if (r === undefined) {
            const c = {
                data: qr(a.data),
                position: qr(a.position),
                group: a.group,
                removed: a.removed,
                selected: a.selected,
                selectable: a.selectable,
                locked: a.locked,
                grabbable: a.grabbable,
                pannable: a.pannable,
                classes: null
            };
            c.classes = "";
            let h = 0;
            a.classes.forEach((d)=>c.classes += h++ === 0 ? d : ` ${d}`);
            return c;
        }
    }
};
_e.jsons = function() {
    const r = [];
    for(let e = 0; e < this.length; e++){
        const t = this[e];
        const a = t.json();
        r.push(a);
    }
    return r;
};
_e.clone = function() {
    const r = this.cy();
    const e = [];
    for(let t = 0; t < this.length; t++){
        const a = this[t];
        const n = a.json();
        const i = new Mn(r, n, false);
        e.push(i);
    }
    return new lr(r, e);
};
_e.copy = _e.clone;
_e.restore = function(r = true, e = true) {
    const t = this;
    const a = t.cy();
    const a__private = a._private;
    const i = [];
    const s = [];
    let o;
    for(let u = 0, l = t.length; u < l; u++){
        const v = t[u];
        e && !v.removed() || (v.isNode() ? i.push(v) : s.push(v));
    }
    o = i.concat(s);
    let f;
    const c = ()=>{
        o.splice(f, 1);
        f--;
    };
    for(f = 0; f < o.length; f++){
        const h = o[f];
        const d = h._private;
        const y = d.data;
        h.clearTraversalCache();
        if (!(!e && !d.removed)) {
            if (y.id === undefined) {
                y.id = dv();
            } else if (ae(y.id)) {
                y.id = `${y.id}`;
            } else if (ot(y.id) || !he(y.id)) {
                He(`Can not create element with invalid string ID \`${y.id}\``);
                c();
                continue;
            } else if (a.hasElementWithId(y.id)) {
                He(`Can not create second element with ID \`${y.id}\``);
                c();
                continue;
            }
        }
        const g = y.id;
        if (h.isNode()) {
            const p = d.position;
            if (p.x == null) {
                p.x = 0;
            }
            if (p.y == null) {
                p.y = 0;
            }
        }
        if (h.isEdge()) {
            const m = h;
            const b = [
                "source",
                "target"
            ];
            for(var w = b.length, E = false, C = 0; C < w; C++){
                const x = b[C];
                let T = y[x];
                if (ae(T)) {
                    T = y[x] = `${y[x]}`;
                }
                if (T == null || T === "") {
                    He(`Can not create edge \`${g}\` with unspecified ${x}`);
                    E = true;
                } else if (!a.hasElementWithId(T)) {
                    He(`Can not create edge \`${g}\` with nonexistent ${x} \`${T}\``);
                    E = true;
                }
            }
            if (E) {
                c();
                continue;
            }
            const k = a.getElementById(y.source);
            const D = a.getElementById(y.target);
            if (k.same(D)) {
                k._private.edges.push(m);
            } else {
                k._private.edges.push(m);
                D._private.edges.push(m);
            }
            m._private.source = k;
            m._private.target = D;
        }
        d.map = new Kr;
        d.map.set(g, {
            ele: h,
            index: 0
        });
        d.removed = false;
        if (e) {
            a.addToPool(h);
        }
    }
    for (const P of i){
        const A = P._private.data;
        if (ae(A.parent)) {
            A.parent = `${A.parent}`;
        }
        const R = A.parent;
        const L = R != null;
        if (L || P._private.parent) {
            const I = P._private.parent ? a.collection().merge(P._private.parent) : a.getElementById(R);
            if (I.empty()) {
                A.parent = undefined;
            } else if (I[0].removed()) {
                ze("Node added with missing parent, reference to parent removed");
                A.parent = undefined;
                P._private.parent = null;
            } else {
                let M = false;
                for(let O = I; !O.empty();){
                    if (P.same(O)) {
                        M = true;
                        A.parent = undefined;
                        break;
                    }
                    O = O.parent();
                }
                if (!M) {
                    I[0]._private.children.push(P);
                    P._private.parent = I[0];
                    a__private.hasCompoundNodes = true;
                }
            }
        }
    }
    if (o.length > 0) {
        for(var q = o.length === t.length ? t : new lr(a, o), _ = 0; _ < q.length; _++){
            const N = q[_];
            if (!N.isNode()) {
                N.parallelEdges().clearTraversalCache();
                N.source().clearTraversalCache();
                N.target().clearTraversalCache();
            }
        }
        let F;
        if (a__private.hasCompoundNodes) {
            F = a.collection().merge(q).merge(q.connectedNodes()).merge(q.parent());
        } else {
            F = q;
        }
        F.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(r);
        if (r) {
            q.emitAndNotify("add");
        } else if (e) {
            q.emit("add");
        }
    }
    return t;
};
_e.removed = function() {
    const r = this[0];
    return r && r._private.removed;
};
_e.inside = function() {
    const r = this[0];
    return r && !r._private.removed;
};
_e.remove = function(r = true, e = true) {
    const t = this;
    const a = [];
    const n = {};
    const i = t._private.cy;
    function s(R) {
        for(let L = R._private.edges, I = 0; I < L.length; I++){
            u(L[I]);
        }
    }
    function o(R) {
        for(let L = R._private.children, I = 0; I < L.length; I++){
            u(L[I]);
        }
    }
    function u(R) {
        const L = n[R.id()];
        if (!(e && R.removed() || L)) {
            n[R.id()] = true;
            if (R.isNode()) {
                a.push(R);
                s(R);
                o(R);
            } else {
                a.unshift(R);
            }
        }
    }
    for(let l = 0, v = t.length; l < v; l++){
        const f = t[l];
        u(f);
    }
    function c(R, L) {
        const edges = R._private.edges;
        ut(edges, L);
        R.clearTraversalCache();
    }
    function h(R) {
        R.clearTraversalCache();
    }
    const d = [];
    d.ids = {};
    function y(R, L) {
        L = L[0];
        R = R[0];
        const children = R._private.children;
        const M = R.id();
        ut(children, L);
        L._private.parent = null;
        if (!d.ids[M]) {
            d.ids[M] = true;
            d.push(R);
        }
    }
    t.dirtyCompoundBoundsCache();
    if (e) {
        i.removeFromPool(a);
    }
    for (const p of a){
        if (p.isEdge()) {
            const m = p.source()[0];
            const b = p.target()[0];
            c(m, p);
            c(b, p);
            for(let w = p.parallelEdges(), E = 0; E < w.length; E++){
                const C = w[E];
                h(C);
                if (C.isBundledBezier()) {
                    C.dirtyBoundingBoxCache();
                }
            }
        } else {
            const x = p.parent();
            if (x.length !== 0) {
                y(x, p);
            }
        }
        if (e) {
            p._private.removed = true;
        }
    }
    const elements = i._private.elements;
    i._private.hasCompoundNodes = false;
    for (const D of elements){
        if (D.isParent()) {
            i._private.hasCompoundNodes = true;
            break;
        }
    }
    const B = new lr(this.cy(), a);
    B.size() > 0 && (r ? B.emitAndNotify("remove") : e && B.emit("remove"));
    for (const A of d){
        if (!e || !A.removed()) {
            A.updateStyle();
        }
    }
    return B;
};
_e.move = function(r) {
    const e = this._private.cy;
    const t = this;
    const a = false;
    const n = false;
    const i = (d)=>{
        if (d == null) {
            return d;
        }
        return `${d}`;
    };
    if (r.source !== undefined || r.target !== undefined) {
        const s = i(r.source);
        const o = i(r.target);
        const u = s != null && e.hasElementWithId(s);
        const l = o != null && e.hasElementWithId(o);
        if (u || l) {
            e.batch(()=>{
                t.remove(a, n);
                t.emitAndNotify("moveout");
                for (const d of t){
                    const y = d._private.data;
                    d.isEdge() && (u && (y.source = s), l && (y.target = o));
                }
                t.restore(a, n);
            });
            t.emitAndNotify("move");
        }
    } else if (r.parent !== undefined) {
        const v = i(r.parent);
        const f = v === null || e.hasElementWithId(v);
        if (f) {
            const c = v === null ? undefined : v;
            e.batch(()=>{
                const h = t.remove(a, n);
                h.emitAndNotify("moveout");
                for (const y of t){
                    const g = y._private.data;
                    if (y.isNode()) {
                        g.parent = c;
                    }
                }
                h.restore(a, n);
            });
            t.emitAndNotify("move");
        }
    }
    return this;
};
[
    Sv,
    Sg,
    un,
    it,
    Qt,
    _g,
    Vn,
    ap,
    Zv,
    Qv,
    up,
    Cn,
    ln,
    ur,
    st,
    dr
].forEach((r)=>{
    ye(_e, r);
});
const gp = {
    add (e) {
        let t;
        const a = this;
        if (Tr(e)) {
            const n = e;
            if (n._private.cy === a) {
                t = n.restore();
            } else {
                const i = [];
                for (const o of n){
                    i.push(o.json());
                }
                t = new lr(a, i);
            }
        } else if (Ve(e)) {
            t = new lr(a, e);
        } else if (Me(e) && (Ve(e.nodes) || Ve(e.edges))) {
            const l = e;
            const v = [];
            const f = [
                "nodes",
                "edges"
            ];
            for(let c = 0, h = f.length; c < h; c++){
                const group = f[c];
                const y = l[group];
                if (Ve(y)) {
                    for(let g = 0, p = y.length; g < p; g++){
                        const m = ye({
                            group
                        }, y[g]);
                        v.push(m);
                    }
                }
            }
            t = new lr(a, v);
        } else {
            t = new Mn(a, e).collection();
        }
        return t;
    },
    remove (e) {
        if (!Tr(e)) {
            if (he(e)) {
                const t = e;
                e = this.$(t);
            }
        }
        return e.remove();
    }
};
function pp(r, e, t, a) {
    const n = 4;
    const i = 0.001;
    const s = 1e-7;
    const o = 10;
    const u = 11;
    const l = 1 / (u - 1);
    const v = typeof Float32Array !== "undefined";
    if (arguments.length !== 4) {
        return false;
    }
    for(let f = 0; f < 4; ++f){
        if (typeof arguments[f] !== "number" || isNaN(arguments[f]) || !isFinite(arguments[f])) {
            return false;
        }
    }
    r = Math.min(r, 1);
    t = Math.min(t, 1);
    r = Math.max(r, 0);
    t = Math.max(t, 0);
    const c = v ? new Float32Array(u) : new Array(u);
    function h(D, B) {
        return 1 - 3 * B + 3 * D;
    }
    function d(D, B) {
        return 3 * B - 6 * D;
    }
    function y(D) {
        return 3 * D;
    }
    function g(D, B, P) {
        return ((h(B, P) * D + d(B, P)) * D + y(B)) * D;
    }
    function p(D, B, P) {
        return 3 * h(B, P) * D * D + 2 * d(B, P) * D + y(B);
    }
    function m(D, B) {
        for(let P = 0; P < n; ++P){
            const A = p(B, r, t);
            if (A === 0) {
                return B;
            }
            const R = g(B, r, t) - D;
            B -= R / A;
        }
        return B;
    }
    function b() {
        for(let D = 0; D < u; ++D){
            c[D] = g(D * l, r, t);
        }
    }
    function w(D, B, P) {
        let A;
        let R;
        let L = 0;
        do {
            R = B + (P - B) / 2;
            A = g(R, r, t) - D;
            if (A > 0) {
                P = R;
            } else {
                B = R;
            }
        }while (Math.abs(A) > s && ++L < o)
        return R;
    }
    function E(D) {
        let B = 0;
        for(var P = 1, A = u - 1; P !== A && c[P] <= D; ++P){
            B += l;
        }
        --P;
        const R = (D - c[P]) / (c[P + 1] - c[P]);
        const L = B + R * l;
        const I = p(L, r, t);
        if (I >= i) {
            return m(D, L);
        }
        if (I === 0) {
            return L;
        }
        return w(D, B, B + l);
    }
    let C = false;
    function x() {
        C = true;
        if (r !== e || t !== a) {
            b();
        }
    }
    const T = (B)=>{
        if (!C) {
            x();
        }
        if (r === e && t === a) {
            return B;
        }
        if (B === 0) {
            return 0;
        }
        if (B === 1) {
            return 1;
        }
        return g(E(B), e, a);
    };
    T.getControlPoints = ()=>[
            {
                x: r,
                y: e
            },
            {
                x: t,
                y: a
            }
        ];
    const k = `generateBezier(${[
        r,
        e,
        t,
        a
    ]})`;
    T.toString = ()=>k;
    return T;
}
const yp = (()=>{
    function r(a) {
        return -a.tension * a.x - a.friction * a.v;
    }
    function e(a, n, i) {
        const s = {
            x: a.x + i.dx * n,
            v: a.v + i.dv * n,
            tension: a.tension,
            friction: a.friction
        };
        return {
            dx: s.v,
            dv: r(s)
        };
    }
    function t(a, n) {
        const i = {
            dx: a.v,
            dv: r(a)
        };
        const s = e(a, n * 0.5, i);
        const o = e(a, n * 0.5, s);
        const u = e(a, n, o);
        const l = 1 / 6 * (i.dx + 2 * (s.dx + o.dx) + u.dx);
        const v = 1 / 6 * (i.dv + 2 * (s.dv + o.dv) + u.dv);
        a.x = a.x + l * n;
        a.v = a.v + v * n;
        return a;
    }
    return function a(n, i, s) {
        const o = {
            x: -1,
            v: 0,
            tension: null,
            friction: null
        };
        const u = [
            0
        ];
        let l = 0;
        const v = 1 / 10000;
        const f = 16 / 1000;
        let c;
        let h;
        let d;
        n = parseFloat(n) || 500;
        i = parseFloat(i) || 20;
        s = s || null;
        o.tension = n;
        o.friction = i;
        c = s !== null;
        if (c) {
            l = a(n, i);
            h = l / s * f;
        } else {
            h = f;
        }
        while(d = t(d || o, h), u.push(1 + d.x), l += 16, Math.abs(d.x) > v && Math.abs(d.v) > v);
        if (c) {
            return (y)=>u[y * (u.length - 1) | 0];
        }
        return l;
    };
})();
const qe = (e, t, a, n)=>{
    const i = pp(e, t, a, n);
    return (s, o, u)=>s + (o - s) * i(u);
};
var vn = {
    linear (e, t, a) {
        return e + (t - e) * a;
    },
    ease: qe(0.25, 0.1, 0.25, 1),
    "ease-in": qe(0.42, 0, 1, 1),
    "ease-out": qe(0, 0, 0.58, 1),
    "ease-in-out": qe(0.42, 0, 0.58, 1),
    "ease-in-sine": qe(0.47, 0, 0.745, 0.715),
    "ease-out-sine": qe(0.39, 0.575, 0.565, 1),
    "ease-in-out-sine": qe(0.445, 0.05, 0.55, 0.95),
    "ease-in-quad": qe(0.55, 0.085, 0.68, 0.53),
    "ease-out-quad": qe(0.25, 0.46, 0.45, 0.94),
    "ease-in-out-quad": qe(0.455, 0.03, 0.515, 0.955),
    "ease-in-cubic": qe(0.55, 0.055, 0.675, 0.19),
    "ease-out-cubic": qe(0.215, 0.61, 0.355, 1),
    "ease-in-out-cubic": qe(0.645, 0.045, 0.355, 1),
    "ease-in-quart": qe(0.895, 0.03, 0.685, 0.22),
    "ease-out-quart": qe(0.165, 0.84, 0.44, 1),
    "ease-in-out-quart": qe(0.77, 0, 0.175, 1),
    "ease-in-quint": qe(0.755, 0.05, 0.855, 0.06),
    "ease-out-quint": qe(0.23, 1, 0.32, 1),
    "ease-in-out-quint": qe(0.86, 0, 0.07, 1),
    "ease-in-expo": qe(0.95, 0.05, 0.795, 0.035),
    "ease-out-expo": qe(0.19, 1, 0.22, 1),
    "ease-in-out-expo": qe(1, 0, 0, 1),
    "ease-in-circ": qe(0.6, 0.04, 0.98, 0.335),
    "ease-out-circ": qe(0.075, 0.82, 0.165, 1),
    "ease-in-out-circ": qe(0.785, 0.135, 0.15, 0.86),
    spring (e, t, a) {
        if (a === 0) {
            return vn.linear;
        }
        const n = yp(e, t, a);
        return (i, s, o)=>i + (s - i) * n(o);
    },
    "cubic-bezier": qe
};
function bl(r, e, t, a, n) {
    if (a === 1 || e === t) {
        return t;
    }
    let i = n(e, t, a);
    r == null || ((r.roundValue || r.color) && (i = Math.round(i)), r.min !== undefined && (i = Math.max(i, r.min)), r.max !== undefined && (i = Math.min(i, r.max)));
    return i;
}
function wl(r, e) {
    if (r.pfValue != null || r.value != null) {
        if (r.pfValue != null && (e == null || e.type.units !== "%")) {
            return r.pfValue;
        }
        return r.value;
    }
    return r;
}
function Ot(r, e, t, a, n) {
    const i = n != null ? n.type : null;
    if (t < 0) {
        t = 0;
    } else if (t > 1) {
        t = 1;
    }
    const s = wl(r, n);
    const o = wl(e, n);
    if (ae(s) && ae(o)) {
        return bl(i, s, o, t, a);
    }
    if (Ve(s) && Ve(o)) {
        const u = [];
        for(let l = 0; l < o.length; l++){
            const v = s[l];
            const f = o[l];
            if (v != null && f != null) {
                const c = bl(i, v, f, t, a);
                u.push(c);
            } else {
                u.push(f);
            }
        }
        return u;
    }
}
function mp(r, e, t, a) {
    const n = !a;
    const r__private = r._private;
    const e__private = e._private;
    const { easing, startTime } = e__private;
    const l = a ? r : r.cy();
    const v = l.style();
    if (!e__private.easingImpl) {
        if (easing == null) {
            e__private.easingImpl = vn.linear;
        } else {
            let f;
            if (he(easing)) {
                const c = v.parse("transition-timing-function", easing);
                f = c.value;
            } else {
                f = easing;
            }
            let h;
            let d;
            if (he(f)) {
                h = f;
                d = [];
            } else {
                h = f[1];
                d = f.slice(2).map((q)=>+q);
            }
            if (d.length > 0) {
                if (h === "spring") {
                    d.push(e__private.duration);
                }
                e__private.easingImpl = vn[h].apply(null, d);
            } else {
                e__private.easingImpl = vn[h];
            }
        }
    }
    const s_easingImpl = e__private.easingImpl;
    let g;
    if (e__private.duration === 0) {
        g = 1;
    } else {
        g = (t - startTime) / e__private.duration;
    }
    if (e__private.applying) {
        g = e__private.progress;
    }
    if (g < 0) {
        g = 0;
    } else if (g > 1) {
        g = 1;
    }
    if (e__private.delay == null) {
        const { startPosition, position } = e__private;
        if (position && n && !r.locked()) {
            const b = {};
            if (fa(startPosition.x, position.x)) {
                b.x = Ot(startPosition.x, position.x, g, s_easingImpl);
            }
            if (fa(startPosition.y, position.y)) {
                b.y = Ot(startPosition.y, position.y, g, s_easingImpl);
            }
            r.position(b);
        }
        const { startPan, pan } = e__private;
        const C = r__private.pan;
        const x = pan != null && a;
        if (x) {
            if (fa(startPan.x, pan.x)) {
                C.x = Ot(startPan.x, pan.x, g, s_easingImpl);
            }
            if (fa(startPan.y, pan.y)) {
                C.y = Ot(startPan.y, pan.y, g, s_easingImpl);
            }
            r.emit("pan");
        }
        const { startZoom, zoom } = e__private;
        const D = zoom != null && a;
        if (D) {
            if (fa(startZoom, zoom)) {
                r__private.zoom = Ta(r__private.minZoom, Ot(startZoom, zoom, g, s_easingImpl), r__private.maxZoom);
            }
            r.emit("zoom");
        }
        if (x || D) {
            r.emit("viewport");
        }
        const B = e__private.style;
        if (B && B.length > 0 && n) {
            for (const A of B){
                const R = A.name;
                const L = A;
                const I = e__private.startStyle[R];
                const M = v.properties[I.name];
                const O = Ot(I, L, g, s_easingImpl, M);
                v.overrideBypass(r, R, O);
            }
            r.emit("style");
        }
    }
    e__private.progress = g;
    return g;
}
function fa(r, e) {
    if (r == null || e == null) {
        return false;
    }
    if (ae(r) && ae(e)) {
        return true;
    }
    return !!(r && e);
}
function bp(r, { _private }, t, a) {
    _private.started = true;
    _private.startTime = t - _private.progress * _private.duration;
}
function xl(r, e) {
    const aniEles = e._private.aniEles;
    const a = [];
    function n(v, f) {
        const v__private = v._private;
        const current = v__private.animation.current;
        const queue = v__private.animation.queue;
        let y = false;
        if (current.length === 0) {
            const g = queue.shift();
            if (g) {
                current.push(g);
            }
        }
        const p = (C)=>{
            for(let x = C.length - 1; x >= 0; x--){
                const T = C[x];
                T();
            }
            C.splice(0, C.length);
        };
        for(let m = current.length - 1; m >= 0; m--){
            const b = current[m];
            const w = b._private;
            if (w.stopped) {
                current.splice(m, 1);
                w.hooked = false;
                w.playing = false;
                w.started = false;
                p(w.frames);
                continue;
            }
            if (!(!w.playing && !w.applying)) {
                if (w.playing && w.applying) {
                    w.applying = false;
                }
                if (!w.started) {
                    bp(v, b, r);
                }
                mp(v, b, r, f);
                if (w.applying) {
                    w.applying = false;
                }
                p(w.frames);
                if (w.step != null) {
                    w.step(r);
                }
                if (b.completed()) {
                    current.splice(m, 1);
                    w.hooked = false;
                    w.playing = false;
                    w.started = false;
                    p(w.completes);
                }
                y = true;
            }
        }
        if (!f && current.length === 0 && queue.length === 0) {
            a.push(v);
        }
        return y;
    }
    let i = false;
    for (const o of aniEles){
        const u = n(o);
        i = i || u;
    }
    const l = n(e, true);
    (i || l) && (aniEles.length > 0 ? e.notify("draw", aniEles) : e.notify("draw"));
    aniEles.unmerge(a);
    e.emit("step");
}
const wp = {
    animate: Ne.animate(),
    animation: Ne.animation(),
    animated: Ne.animated(),
    clearQueue: Ne.clearQueue(),
    delay: Ne.delay(),
    delayAnimation: Ne.delayAnimation(),
    stop: Ne.stop(),
    addToAnimationPool (e) {
        const t = this;
        if (t.styleEnabled()) {
            t._private.aniEles.merge(e);
        }
    },
    stopAnimationLoop () {
        this._private.animationsRunning = false;
    },
    startAnimationLoop () {
        const e = this;
        e._private.animationsRunning = true;
        if (!e.styleEnabled()) {
            return;
        }
        function t() {
            if (e._private.animationsRunning) {
                mn((i)=>{
                    xl(i, e);
                    t();
                });
            }
        }
        const a = e.renderer();
        if (a && a.beforeRender) {
            a.beforeRender((i, s)=>{
                xl(s, e);
            }, a.beforeRenderPriorities.animations);
        } else {
            t();
        }
    }
};
const xp = {
    qualifierCompare (e, t) {
        if (e == null || t == null) {
            return e == null && t == null;
        }
        return e.sameText(t);
    },
    eventMatches (e, { qualifier }, a) {
        if (qualifier != null) {
            return e !== a.target && Ma(a.target) && qualifier.matches(a.target);
        }
        return true;
    },
    addEventFields (e, t) {
        t.cy = e;
        t.target = e;
    },
    callbackContext (e, t, a) {
        if (t.qualifier != null) {
            return a.target;
        }
        return e;
    }
};
const en = (e)=>{
    if (he(e)) {
        return new vt(e);
    }
    return e;
};
const ef = {
    createEmitter () {
        const _private = this._private;
        if (!_private.emitter) {
            _private.emitter = new qn(xp, this);
        }
        return this;
    },
    emitter () {
        return this._private.emitter;
    },
    on (e, t, a) {
        this.emitter().on(e, en(t), a);
        return this;
    },
    removeListener (e, t, a) {
        this.emitter().removeListener(e, en(t), a);
        return this;
    },
    removeAllListeners () {
        this.emitter().removeAllListeners();
        return this;
    },
    one (e, t, a) {
        this.emitter().one(e, en(t), a);
        return this;
    },
    once (e, t, a) {
        this.emitter().one(e, en(t), a);
        return this;
    },
    emit (e, t) {
        this.emitter().emit(e, t);
        return this;
    },
    emitAndNotify (e, t) {
        this.emit(e);
        this.notify(e, t);
        return this;
    }
};
Ne.eventAliasesOn(ef);
const Os = {
    png (e) {
        const renderer = this._private.renderer;
        e = e || {};
        return renderer.png(e);
    },
    jpg (e) {
        const renderer = this._private.renderer;
        e = e || {};
        e.bg = e.bg || "#fff";
        return renderer.jpg(e);
    }
};
Os.jpeg = Os.jpg;
const fn = {
    layout (e) {
        const t = this;
        if (e == null) {
            He("Layout options must be specified to make a layout");
            return;
        }
        if (e.name == null) {
            He("A `name` must be specified to make a layout");
            return;
        }
        const e_name = e.name;
        const n = t.extension("layout", e_name);
        if (n == null) {
            He(`No such layout \`${e_name}\` found.  Did you forget to import it and \`cytoscape.use()\` it?`);
            return;
        }
        let eles;
        if (he(e.eles)) {
            eles = t.$(e.eles);
        } else {
            eles = e.eles ?? t.$();
        }
        const s = new n(ye({}, e, {
            cy: t,
            eles
        }));
        return s;
    }
};
fn.createLayout = fn.makeLayout = fn.layout;
const Ep = {
    notify (e, t) {
        const _private = this._private;
        if (this.batching()) {
            _private.batchNotifications = _private.batchNotifications || {};
            const n = _private.batchNotifications[e] = _private.batchNotifications[e] || this.collection();
            if (t != null) {
                n.merge(t);
            }
            return;
        }
        if (_private.notificationsEnabled) {
            const i = this.renderer();
            if (!(this.destroyed() || !i)) {
                i.notify(e, t);
            }
        }
    },
    notifications (e) {
        const _private = this._private;
        if (e === undefined) {
            return _private.notificationsEnabled;
        }
        _private.notificationsEnabled = !!e;
        return this;
    },
    noNotifications (e) {
        this.notifications(false);
        e();
        this.notifications(true);
    },
    batching () {
        return this._private.batchCount > 0;
    },
    startBatch () {
        const _private = this._private;
        if (_private.batchCount == null) {
            _private.batchCount = 0;
        }
        if (_private.batchCount === 0) {
            _private.batchStyleEles = this.collection();
            _private.batchNotifications = {};
        }
        _private.batchCount++;
        return this;
    },
    endBatch () {
        const _private = this._private;
        if (_private.batchCount === 0) {
            return this;
        }
        _private.batchCount--;
        if (_private.batchCount === 0) {
            _private.batchStyleEles.updateStyle();
            const t = this.renderer();
            Object.keys(_private.batchNotifications).forEach((a)=>{
                const n = _private.batchNotifications[a];
                if (n.empty()) {
                    t.notify(a);
                } else {
                    t.notify(a, n);
                }
            });
        }
        return this;
    },
    batch (e) {
        this.startBatch();
        e();
        this.endBatch();
        return this;
    },
    batchData (e) {
        const t = this;
        return this.batch(()=>{
            for(let a = Object.keys(e), n = 0; n < a.length; n++){
                const i = a[n];
                const s = e[i];
                const o = t.getElementById(i);
                o.data(s);
            }
        });
    }
};
const Cp = vr({
    hideEdgesOnViewport: false,
    textureOnViewport: false,
    motionBlur: false,
    motionBlurOpacity: 0.05,
    pixelRatio: undefined,
    desktopTapThreshold: 4,
    touchTapThreshold: 8,
    wheelSensitivity: 1,
    debug: false,
    showFps: false,
    webgl: false,
    webglDebug: false,
    webglDebugShowAtlases: false,
    webglTexSize: 2048,
    webglTexRows: 36,
    webglTexRowsNodes: 18,
    webglBatchSize: 2048,
    webglTexPerBatch: 14,
    webglBgColor: [
        255,
        255,
        255
    ]
});
const Ns = {
    renderTo (e, t, a, n) {
        const renderer = this._private.renderer;
        renderer.renderTo(e, t, a, n);
        return this;
    },
    renderer () {
        return this._private.renderer;
    },
    forceRender () {
        this.notify("draw");
        return this;
    },
    resize () {
        this.invalidateSize();
        this.emitAndNotify("resize");
        return this;
    },
    initRenderer (e) {
        const t = this;
        const a = t.extension("renderer", e.name);
        if (a == null) {
            He(`Can not initialise: No such renderer \`${e.name}\` found. Did you forget to import it and \`cytoscape.use()\` it?`);
            return;
        }
        if (e.wheelSensitivity !== undefined) {
            ze("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
        }
        const n = Cp(e);
        n.cy = t;
        t._private.renderer = new a(n);
        this.notify("init");
    },
    destroyRenderer () {
        const e = this;
        e.notify("destroy");
        const t = e.container();
        if (t) {
            for(t._cyreg = null; t.childNodes.length > 0;){
                t.removeChild(t.childNodes[0]);
            }
        }
        e._private.renderer = null;
        e.mutableElements().forEach(({ _private })=>{
            _private.rscratch = {};
            _private.rstyle = {};
            _private.animation.current = [];
            _private.animation.queue = [];
        });
    },
    onRender (e) {
        return this.on("render", e);
    },
    offRender (e) {
        return this.off("render", e);
    }
};
Ns.invalidateDimensions = Ns.resize;
const cn = {
    collection (e, t) {
        if (he(e)) {
            return this.$(e);
        }
        if (Tr(e)) {
            return e.collection();
        }
        if (Ve(e)) {
            if (!t) {
                t = {};
            }
            return new lr(this, e, t.unique, t.removed);
        }
        return new lr(this);
    },
    nodes (e) {
        const t = this.$((a)=>a.isNode());
        if (e) {
            return t.filter(e);
        }
        return t;
    },
    edges (e) {
        const t = this.$((a)=>a.isEdge());
        if (e) {
            return t.filter(e);
        }
        return t;
    },
    $ (e) {
        const elements = this._private.elements;
        if (e) {
            return elements.filter(e);
        }
        return elements.spawnSelf();
    },
    mutableElements () {
        return this._private.elements;
    }
};
cn.elements = cn.filter = cn.$;
const sr = {};
const ma = "t";
const Tp = "f";
sr.apply = function(r) {
    const e = this;
    const e__private = e._private;
    const e__private_cy = e__private.cy;
    const n = e__private_cy.collection();
    for (const s of r){
        const o = e.getContextMeta(s);
        if (!o.empty) {
            const u = e.getContextStyle(o);
            const l = e.applyContextStyle(o, u, s);
            if (s._private.appliedInitStyle) {
                e.updateTransitions(s, l.diffProps);
            } else {
                s._private.appliedInitStyle = true;
            }
            const v = e.updateStyleHints(s);
            if (v) {
                n.push(s);
            }
        }
    }
    return n;
};
sr.getPropertiesDiff = function(r, e) {
    const t = this;
    const a = t._private.propDiffs = t._private.propDiffs || {};
    const n = `${r}-${e}`;
    const i = a[n];
    if (i) {
        return i;
    }
    const s = [];
    const o = {};
    for(let u = 0; u < t.length; u++){
        const l = t[u];
        const v = r[u] === ma;
        const f = e[u] === ma;
        const c = v !== f;
        const h = l.mappedProperties.length > 0;
        if (c || f && h) {
            let d;
            if (c && h || c) {
                d = l.properties;
            } else if (h) {
                d = l.mappedProperties;
            }
            for (const g of d){
                const p = g.name;
                let m = false;
                for(let b = u + 1; b < t.length; b++){
                    const w = t[b];
                    const E = e[b] === ma;
                    if (E && (m = w.properties[g.name] != null, m)) {
                        break;
                    }
                }
                if (!o[p] && !m) {
                    o[p] = true;
                    s.push(p);
                }
            }
        }
    }
    a[n] = s;
    return s;
};
sr.getContextMeta = function(r) {
    let diffPropNames;
    for(var e = this, t = "", n = r._private.styleCxtKey || "", i = 0; i < e.length; i++){
        const s = e[i];
        const o = s.selector && s.selector.matches(r);
        if (o) {
            t += ma;
        } else {
            t += Tp;
        }
    }
    diffPropNames = e.getPropertiesDiff(n, t);
    r._private.styleCxtKey = t;
    return {
        key: t,
        diffPropNames,
        empty: diffPropNames.length === 0
    };
};
sr.getContextStyle = function({ key }) {
    const t = this;
    const a = this._private.contextStyles = this._private.contextStyles || {};
    if (a[key]) {
        return a[key];
    }
    const n = {
        _private: {
            key
        }
    };
    for(let i = 0; i < t.length; i++){
        const s = t[i];
        const o = key[i] === ma;
        if (o) {
            for(let u = 0; u < s.properties.length; u++){
                const property = s.properties[u];
                n[property.name] = property;
            }
        }
    }
    a[key] = n;
    return n;
};
sr.applyContextStyle = function(r, e, t) {
    const a = this;
    for(var n = r.diffPropNames, diffProps = {}, s = a.types, o = 0; o < n.length; o++){
        const u = n[o];
        let l = e[u];
        const v = t.pstyle(u);
        if (!l) {
            if (v) {
                if (v.bypass) {
                    l = {
                        name: u,
                        deleteBypassed: true
                    };
                } else {
                    l = {
                        name: u,
                        delete: true
                    };
                }
            } else {
                continue;
            }
        }
        if (v !== l) {
            if (l.mapped === s.fn && v != null && v.mapping != null && v.mapping.value === l.value) {
                const f = v.mapping;
                const c = f.fnValue = l.value(t);
                if (c === f.prevFnValue) {
                    continue;
                }
            }
            const h = diffProps[u] = {
                prev: v
            };
            a.applyParsedProperty(t, l);
            h.next = t.pstyle(u);
            if (h.next && h.next.bypass) {
                h.next = h.next.bypassed;
            }
        }
    }
    return {
        diffProps
    };
};
sr.updateStyleHints = function(r) {
    const r__private = r._private;
    const t = this;
    let t_propertyGroupNames = t.propertyGroupNames;
    const t_propertyGroupKeys = t.propertyGroupKeys;
    const i = (W, Y, labelDimensions)=>t.getPropertiesHash(W, Y, labelDimensions);
    const e_styleKey = r__private.styleKey;
    if (r.removed()) {
        return false;
    }
    const o = r__private.group === "nodes";
    const style = r._private.style;
    t_propertyGroupNames = Object.keys(style);
    for (const v of t_propertyGroupKeys){
        r__private.styleKeys[v] = [
            Ct,
            _t
        ];
    }
    const f = (W, groupKey)=>r__private.styleKeys[groupKey][0] = xa(W, r__private.styleKeys[groupKey][0]);
    const c = (W, groupKey)=>r__private.styleKeys[groupKey][1] = Ea(W, r__private.styleKeys[groupKey][1]);
    const h = (W, groupKey)=>{
        f(W, groupKey);
        c(W, groupKey);
    };
    const d = (W, groupKey)=>{
        for(let te = 0; te < W.length; te++){
            const ce = W.charCodeAt(te);
            f(ce, groupKey);
            c(ce, groupKey);
        }
    };
    const y = 2000000000;
    const g = (W)=>{
        if (-128 < W && W < 128 && Math.floor(W) !== W) {
            return y - (W * 1024 | 0);
        }
        return W;
    };
    for (const m of t_propertyGroupNames){
        const b = style[m];
        if (b != null) {
            const w = this.properties[m];
            const { type, groupKey } = w;
            let x;
            if (w.hashOverride != null) {
                x = w.hashOverride(r, b);
            } else if (b.pfValue != null) {
                x = b.pfValue;
            }
            const T = w.enums == null ? b.value : null;
            const k = x != null;
            const D = T != null;
            const B = k || D;
            const P = b.units;
            if (type.number && B && !type.multiple) {
                const A = k ? x : T;
                h(g(A), groupKey);
                if (!k && P != null) {
                    d(P, groupKey);
                }
            } else {
                d(b.strValue, groupKey);
            }
        }
    }
    const R = [
        Ct,
        _t
    ];
    for (const I of t_propertyGroupKeys){
        const M = r__private.styleKeys[I];
        R[0] = xa(M[0], R[0]);
        R[1] = Ea(M[1], R[1]);
    }
    r__private.styleKey = qc(R[0], R[1]);
    const e_styleKeys = r__private.styleKeys;
    r__private.labelDimsKey = jr(e_styleKeys.labelDimensions);
    const q = i(r, [
        "label"
    ], e_styleKeys.labelDimensions);
    r__private.labelKey = jr(q);
    r__private.labelStyleKey = jr(Ua(e_styleKeys.commonLabel, q));
    if (!o) {
        const _ = i(r, [
            "source-label"
        ], e_styleKeys.labelDimensions);
        r__private.sourceLabelKey = jr(_);
        r__private.sourceLabelStyleKey = jr(Ua(e_styleKeys.commonLabel, _));
        const N = i(r, [
            "target-label"
        ], e_styleKeys.labelDimensions);
        r__private.targetLabelKey = jr(N);
        r__private.targetLabelStyleKey = jr(Ua(e_styleKeys.commonLabel, N));
    }
    if (o) {
        const F = r__private.styleKeys;
        const { nodeBody, nodeBorder, nodeOutline, backgroundImage, compound, pie, stripe } = F;
        const V = [
            nodeBody,
            nodeBorder,
            nodeOutline,
            backgroundImage,
            compound,
            pie,
            stripe
        ].filter((H)=>H != null).reduce(Ua, [
            Ct,
            _t
        ]);
        r__private.nodeKey = jr(V);
        r__private.hasPie = pie != null && pie[0] !== Ct && pie[1] !== _t;
        r__private.hasStripe = stripe != null && stripe[0] !== Ct && stripe[1] !== _t;
    }
    return e_styleKey !== r__private.styleKey;
};
sr.clearStyleHints = ({ _private })=>{
    _private.styleCxtKey = "";
    _private.styleKeys = {};
    _private.styleKey = null;
    _private.labelKey = null;
    _private.labelStyleKey = null;
    _private.sourceLabelKey = null;
    _private.sourceLabelStyleKey = null;
    _private.targetLabelKey = null;
    _private.targetLabelStyleKey = null;
    _private.nodeKey = null;
    _private.hasPie = null;
    _private.hasStripe = null;
};
sr.applyParsedProperty = function(r, e) {
    const t = this;
    let a = e;
    const style = r._private.style;
    let i;
    const t_types = t.types;
    const type = t.properties[a.name].type;
    const a_bypass = a.bypass;
    const l = style[a.name];
    const v = l && l.bypass;
    const r__private = r._private;
    const c = "mapping";
    const h = (U)=>{
        if (U == null) {
            return null;
        }
        return U.pfValue ?? U.value;
    };
    const d = ()=>{
        const U = h(l);
        const J = h(a);
        t.checkTriggers(r, a.name, U, J);
    };
    if (e.name === "curve-style" && r.isEdge() && (e.value !== "bezier" && r.isLoop() || e.value === "haystack" && (r.source().isParent() || r.target().isParent()))) {
        a = e = this.parse(e.name, "bezier", a_bypass);
    }
    if (a.delete) {
        style[a.name] = undefined;
        d();
        return true;
    }
    if (a.deleteBypassed) {
        if (l) {
            if (l.bypass) {
                l.bypassed = undefined;
                d();
                return true;
            }
            return false;
        }
        d();
        return true;
    }
    if (a.deleteBypass) {
        if (l) {
            if (l.bypass) {
                style[a.name] = l.bypassed;
                d();
                return true;
            }
            return false;
        }
        d();
        return true;
    }
    const y = ()=>{
        ze(`Do not assign mappings to elements without corresponding data (i.e. ele \`${r.id()}\` has no mapping for property \`${a.name}\` with data field \`${a.field}\`); try a \`[${a.field}]\` selector to limit scope to elements with \`${a.field}\` defined`);
    };
    switch(a.mapped){
        case t_types.mapData:
            {
                for(var g = a.field.split("."), p = r__private.data, m = 0; m < g.length && p; m++){
                    const b = g[m];
                    p = p[b];
                }
                if (p == null) {
                    y();
                    return false;
                }
                let w;
                if (ae(p)) {
                    const E = a.fieldMax - a.fieldMin;
                    if (E === 0) {
                        w = 0;
                    } else {
                        w = (p - a.fieldMin) / E;
                    }
                } else {
                    ze(`Do not use continuous mappers without specifying numeric data (i.e. \`${a.field}: ${p}\` for \`${r.id()}\` is non-numeric)`);
                    return false;
                }
                if (w < 0) {
                    w = 0;
                } else if (w > 1) {
                    w = 1;
                }
                if (type.color) {
                    const C = a.valueMin[0];
                    const x = a.valueMax[0];
                    const T = a.valueMin[1];
                    const k = a.valueMax[1];
                    const D = a.valueMin[2];
                    const B = a.valueMax[2];
                    const P = a.valueMin[3] ?? 1;
                    const A = a.valueMax[3] ?? 1;
                    const R = [
                        Math.round(C + (x - C) * w),
                        Math.round(T + (k - T) * w),
                        Math.round(D + (B - D) * w),
                        Math.round(P + (A - P) * w)
                    ];
                    i = {
                        bypass: a.bypass,
                        name: a.name,
                        value: R,
                        strValue: `rgb(${R[0]}, ${R[1]}, ${R[2]})`
                    };
                } else if (type.number) {
                    const L = a.valueMin + (a.valueMax - a.valueMin) * w;
                    i = this.parse(a.name, L, a.bypass, c);
                } else {
                    return false;
                }
                if (!i) {
                    y();
                    return false;
                }
                i.mapping = a;
                a = i;
                break;
            }
        case t_types.data:
            {
                for(var I = a.field.split("."), M = r__private.data, O = 0; O < I.length && M; O++){
                    const q = I[O];
                    M = M[q];
                }
                if (M != null) {
                    i = this.parse(a.name, M, a.bypass, c);
                }
                if (!i) {
                    y();
                    return false;
                }
                i.mapping = a;
                a = i;
                break;
            }
        case t_types.fn:
            {
                const _ = a.value;
                const N = a.fnValue ?? _(r);
                a.prevFnValue = N;
                if (N == null) {
                    ze(`Custom function mappers may not return null (i.e. \`${a.name}\` for ele \`${r.id()}\` is null)`);
                    return false;
                }
                i = this.parse(a.name, N, a.bypass, c);
                if (!i) {
                    ze(`Custom function mappers may not return invalid values for the property type (i.e. \`${a.name}\` for ele \`${r.id()}\` is invalid)`);
                    return false;
                }
                i.mapping = qr(a);
                a = i;
                break;
            }
        case undefined:
            break;
        default:
            return false;
    }
    if (a_bypass) {
        if (v) {
            a.bypassed = l.bypassed;
        } else {
            a.bypassed = l;
        }
        style[a.name] = a;
    } else if (v) {
        l.bypassed = a;
    } else {
        style[a.name] = a;
    }
    d();
    return true;
};
sr.cleanElements = function(r, e) {
    for (const a of r){
        this.clearStyleHints(a);
        a.dirtyCompoundBoundsCache();
        a.dirtyBoundingBoxCache();
        if (!e) {
            a._private.style = {};
        } else {
            const n = a._private.style;
            for(let i = Object.keys(n), s = 0; s < i.length; s++){
                const o = i[s];
                const u = n[o];
                u != null && (u.bypass ? u.bypassed = null : n[o] = null);
            }
        }
    }
};
sr.update = function() {
    const r = this._private.cy;
    const e = r.mutableElements();
    e.updateStyle();
};
sr.updateTransitions = function(r, e) {
    const t = this;
    const r__private = r._private;
    const value = r.pstyle("transition-property").value;
    const pfValue = r.pstyle("transition-duration").pfValue;
    const pfValue_1 = r.pstyle("transition-delay").pfValue;
    if (value.length > 0 && pfValue > 0) {
        const o = {};
        let u = false;
        for (const v of value){
            const f = r.pstyle(v);
            const c = e[v];
            if (c) {
                const h = c.prev;
                const d = h;
                const y = c.next ?? f;
                let g = false;
                let p;
                const m = 0.000001;
                d && (ae(d.pfValue) && ae(y.pfValue) ? (g = y.pfValue - d.pfValue, p = d.pfValue + m * g) : ae(d.value) && ae(y.value) ? (g = y.value - d.value, p = d.value + m * g) : Ve(d.value) && Ve(y.value) && (g = d.value[0] !== y.value[0] || d.value[1] !== y.value[1] || d.value[2] !== y.value[2], p = d.strValue), g && (o[v] = y.strValue, this.applyBypass(r, v, p), u = true));
            }
        }
        if (!u) {
            return;
        }
        r__private.transitioning = true;
        new ea((b)=>{
            if (pfValue_1 > 0) {
                r.delayAnimation(pfValue_1).play().promise().then(b);
            } else {
                b();
            }
        }).then(()=>r.animation({
                style: o,
                duration: pfValue,
                easing: r.pstyle("transition-timing-function").value,
                queue: false
            }).play().promise()).then(()=>{
            t.removeBypasses(r, value);
            r.emitAndNotify("style");
            r__private.transitioning = false;
        });
    } else {
        if (r__private.transitioning) {
            this.removeBypasses(r, value);
            r.emitAndNotify("style");
            r__private.transitioning = false;
        }
    }
};
sr.checkTrigger = function(r, e, t, a, n, i) {
    const s = this.properties[e];
    const o = n(s);
    r.removed() || o != null && o(t, a, r) && i(s);
};
sr.checkZOrderTrigger = function(r, e, t, a) {
    const n = this;
    this.checkTrigger(r, e, t, a, (i)=>i.triggersZOrder, ()=>{
        n._private.cy.notify("zorder", r);
    });
};
sr.checkBoundsTrigger = function(r, e, t, a) {
    this.checkTrigger(r, e, t, a, (n)=>n.triggersBounds, (n)=>{
        r.dirtyCompoundBoundsCache();
        r.dirtyBoundingBoxCache();
    });
};
sr.checkConnectedEdgesBoundsTrigger = function(r, e, t, a) {
    this.checkTrigger(r, e, t, a, (n)=>n.triggersBoundsOfConnectedEdges, (n)=>{
        r.connectedEdges().forEach((i)=>{
            i.dirtyBoundingBoxCache();
        });
    });
};
sr.checkParallelEdgesBoundsTrigger = function(r, e, t, a) {
    this.checkTrigger(r, e, t, a, (n)=>n.triggersBoundsOfParallelEdges, (n)=>{
        r.parallelEdges().forEach((i)=>{
            i.dirtyBoundingBoxCache();
        });
    });
};
sr.checkTriggers = function(r, e, t, a) {
    r.dirtyStyleCache();
    this.checkZOrderTrigger(r, e, t, a);
    this.checkBoundsTrigger(r, e, t, a);
    this.checkConnectedEdgesBoundsTrigger(r, e, t, a);
    this.checkParallelEdgesBoundsTrigger(r, e, t, a);
};
const Va = {};
Va.applyBypass = function(r, e, t, a) {
    const n = this;
    const i = [];
    const s = true;
    if (e === "*" || e === "**") {
        if (t !== undefined) {
            for(let o = 0; o < n.properties.length; o++){
                const property = n.properties[o];
                const l = property.name;
                const v = this.parse(l, t, true);
                if (v) {
                    i.push(v);
                }
            }
        }
    } else if (he(e)) {
        const f = this.parse(e, t, true);
        if (f) {
            i.push(f);
        }
    } else if (Me(e)) {
        const c = e;
        a = t;
        for(let h = Object.keys(c), d = 0; d < h.length; d++){
            const y = h[d];
            let g = c[y];
            if (g === undefined) {
                g = c[An(y)];
            }
            if (g !== undefined) {
                const p = this.parse(y, g, true);
                if (p) {
                    i.push(p);
                }
            }
        }
    } else {
        return false;
    }
    if (i.length === 0) {
        return false;
    }
    let m = false;
    for (const w of r){
        const E = {};
        let C;
        for (const T of i){
            if (a) {
                const prev = w.pstyle(T.name);
                C = E[T.name] = {
                    prev
                };
            }
            m = this.applyParsedProperty(w, qr(T)) || m;
            if (a) {
                C.next = w.pstyle(T.name);
            }
        }
        if (m) {
            this.updateStyleHints(w);
        }
        if (a) {
            this.updateTransitions(w, E, s);
        }
    }
    return m;
};
Va.overrideBypass = function(r, e, t) {
    e = Xs(e);
    for (const n of r){
        const i = n._private.style[e];
        const s = this.properties[e].type;
        const { color, mutiple } = s;
        const l = i ? i.pfValue ?? i.value : null;
        if (!i || !i.bypass) {
            this.applyBypass(n, e, t);
        } else {
            i.value = t;
            if (i.pfValue != null) {
                i.pfValue = t;
            }
            if (color) {
                i.strValue = `rgb(${t.join(",")})`;
            } else if (mutiple) {
                i.strValue = t.join(" ");
            } else {
                i.strValue = `${t}`;
            }
            this.updateStyleHints(n);
        }
        this.checkTriggers(n, e, l, t);
    }
};
Va.removeAllBypasses = function(r, e) {
    return this.removeBypasses(r, this.propertyNames, e);
};
Va.removeBypasses = function(r, e, t) {
    const a = true;
    for (const i of r){
        const s = {};
        for (const u of e){
            const l = this.properties[u];
            const v = i.pstyle(l.name);
            if (!(!v || !v.bypass)) {
                const f = "";
                const c = this.parse(u, f, true);
                const h = s[l.name] = {
                    prev: v
                };
                this.applyParsedProperty(i, c);
                h.next = i.pstyle(l.name);
            }
        }
        this.updateStyleHints(i);
        if (t) {
            this.updateTransitions(i, s, a);
        }
    }
};
const lo = {};
lo.getEmSizeInPixels = function() {
    const r = this.containerCss("font-size");
    if (r != null) {
        return parseFloat(r);
    }
    return 1;
};
lo.containerCss = function(r) {
    const e = this._private.cy;
    const t = e.container();
    const a = e.window();
    if (a && t && a.getComputedStyle) {
        return a.getComputedStyle(t).getPropertyValue(r);
    }
};
const _r = {};
_r.getRenderedStyle = function(r, e) {
    if (e) {
        return this.getStylePropertyValue(r, e, true);
    }
    return this.getRawStyle(r, true);
};
_r.getRawStyle = function(r, e) {
    const t = this;
    r = r[0];
    if (r) {
        const a = {};
        for(let n = 0; n < t.properties.length; n++){
            const property = t.properties[n];
            const s = t.getStylePropertyValue(r, property.name, e);
            if (s != null) {
                a[property.name] = s;
                a[An(property.name)] = s;
            }
        }
        return a;
    }
};
_r.getIndexedStyle = (r, e, t, a)=>{
    const n = r.pstyle(e)[t][a];
    return n ?? r.cy().style().getDefaultProperty(e)[t][0];
};
_r.getStylePropertyValue = function(r, e, t) {
    const a = this;
    r = r[0];
    if (r) {
        let n = a.properties[e];
        if (n.alias) {
            n = n.pointsTo;
        }
        const i = n.type;
        const s = r.pstyle(n.name);
        if (s) {
            const { value, units, strValue } = s;
            if (t && i.number && value != null && ae(value)) {
                const v = r.cy().zoom();
                const f = (g)=>g * v;
                const c = (g, p)=>f(g) + p;
                const h = Ve(value);
                const d = h ? units.every((y)=>y != null) : units != null;
                if (d) {
                    if (h) {
                        return value.map((y, g)=>c(y, units[g])).join(" ");
                    }
                    return c(value, units);
                }
                if (h) {
                    return value.map((y)=>{
                        if (he(y)) {
                            return y;
                        }
                        return `${f(y)}`;
                    }).join(" ");
                }
                return `${f(value)}`;
            } else if (strValue != null) {
                return strValue;
            }
        }
        return null;
    }
};
_r.getAnimationStartStyle = function(r, e) {
    const t = {};
    for (const n of e){
        const i = n.name;
        let s = r.pstyle(i);
        s !== undefined && (Me(s) ? s = this.parse(i, s.strValue) : s = this.parse(i, s));
        if (s) {
            t[i] = s;
        }
    }
    return t;
};
_r.getPropsList = function(r) {
    const e = this;
    const t = [];
    const a = r;
    const e_properties = e.properties;
    if (a) {
        for(let i = Object.keys(a), s = 0; s < i.length; s++){
            const o = i[s];
            const u = a[o];
            const l = e_properties[o] || e_properties[Xs(o)];
            const v = this.parse(l.name, u);
            if (v) {
                t.push(v);
            }
        }
    }
    return t;
};
_r.getNonDefaultPropertiesHash = (r, e, t)=>{
    const a = t.slice();
    let n;
    let i;
    let s;
    let o;
    let u;
    let l;
    for(u = 0; u < e.length; u++){
        n = e[u];
        i = r.pstyle(n, false);
        if (i != null) {
            if (i.pfValue != null) {
                a[0] = xa(o, a[0]);
                a[1] = Ea(o, a[1]);
            } else {
                s = i.strValue;
                for(l = 0; l < s.length; l++){
                    o = s.charCodeAt(l);
                    a[0] = xa(o, a[0]);
                    a[1] = Ea(o, a[1]);
                }
            }
        }
    }
    return a;
};
_r.getPropertiesHash = _r.getNonDefaultPropertiesHash;
const Hn = {};
Hn.appendFromJson = function(r) {
    const e = this;
    for (const a of r){
        const n = a.selector;
        const i = a.style || a.css;
        const s = Object.keys(i);
        e.selector(n);
        for (const u of s){
            const l = i[u];
            e.css(u, l);
        }
    }
    return e;
};
Hn.fromJson = function(r) {
    const e = this;
    e.resetToDefault();
    e.appendFromJson(r);
    return e;
};
Hn.json = function() {
    const r = [];
    for(let e = this.defaultLength; e < this.length; e++){
        const t = this[e];
        const a = t.selector;
        for(var n = t.properties, i = {}, s = 0; s < n.length; s++){
            const o = n[s];
            i[o.name] = o.strValue;
        }
        r.push({
            selector: a ? a.toString() : "core",
            style: i
        });
    }
    return r;
};
const vo = {};
vo.appendFromString = function(r) {
    const e = this;
    const t = this;
    let a = `${r}`;
    let n;
    let i;
    let s;
    a = a.replace(/[/][*](\s|.)+?[*][/]/g, "");
    function o() {
        if (a.length > n.length) {
            a = a.substr(n.length);
        } else {
            a = "";
        }
    }
    function u() {
        if (i.length > s.length) {
            i = i.substr(s.length);
        } else {
            i = "";
        }
    }
    while(true){
        const l = a.match(/^\s*$/);
        if (l) {
            break;
        }
        const v = a.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
        if (!v) {
            ze(`Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: ${a}`);
            break;
        }
        n = v[0];
        const f = v[1];
        if (f !== "core") {
            const c = new vt(f);
            if (c.invalid) {
                ze(`Skipping parsing of block: Invalid selector found in string stylesheet: ${f}`);
                o();
                continue;
            }
        }
        const h = v[2];
        let d = false;
        i = h;
        const y = [];
        while(true){
            const g = i.match(/^\s*$/);
            if (g) {
                break;
            }
            const p = i.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
            if (!p) {
                ze(`Skipping parsing of block: Invalid formatting of style property and value definitions found in:${h}`);
                d = true;
                break;
            }
            s = p[0];
            const m = p[1];
            const val = p[2];
            const w = e.properties[m];
            if (!w) {
                ze(`Skipping property: Invalid property name in: ${s}`);
                u();
                continue;
            }
            const E = t.parse(m, val);
            if (!E) {
                ze(`Skipping property: Invalid property definition in: ${s}`);
                u();
                continue;
            }
            y.push({
                name: m,
                val
            });
            u();
        }
        if (d) {
            o();
            break;
        }
        t.selector(f);
        for (const x of y){
            t.css(x.name, x.val);
        }
        o();
    }
    return t;
};
vo.fromString = function(r) {
    const e = this;
    e.resetToDefault();
    e.appendFromString(r);
    return e;
};
const Ze = {};
(()=>{
    const r = number;
    const e = mc;
    const t = wc;
    const a = xc;
    const n = Ec;
    const i = (H)=>`^${H}\\s*\\(\\s*([\\w\\.]+)\\s*\\)\$`;
    const s = (H)=>{
        const W = `${r}|\\w+|${e}|${t}|${a}|${n}`;
        return `^${H}\\s*\\(([\\w\\.]+)\\s*\\,\\s*(${r})\\s*\\,\\s*(${r})\\s*,\\s*(${W})\\s*\\,\\s*(${W})\\)\$`;
    };
    const regexes = [
        `^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`,
        "^(none)$",
        "^(.+)$"
    ];
    Ze.types = {
        time: {
            number: true,
            min: 0,
            units: "s|ms",
            implicitUnits: "ms"
        },
        percent: {
            number: true,
            min: 0,
            max: 100,
            units: "%",
            implicitUnits: "%"
        },
        percentages: {
            number: true,
            min: 0,
            max: 100,
            units: "%",
            implicitUnits: "%",
            multiple: true
        },
        zeroOneNumber: {
            number: true,
            min: 0,
            max: 1,
            unitless: true
        },
        zeroOneNumbers: {
            number: true,
            min: 0,
            max: 1,
            unitless: true,
            multiple: true
        },
        nOneOneNumber: {
            number: true,
            min: -1,
            max: 1,
            unitless: true
        },
        nonNegativeInt: {
            number: true,
            min: 0,
            integer: true,
            unitless: true
        },
        nonNegativeNumber: {
            number: true,
            min: 0,
            unitless: true
        },
        position: {
            enums: [
                "parent",
                "origin"
            ]
        },
        nodeSize: {
            number: true,
            min: 0,
            enums: [
                "label"
            ]
        },
        number: {
            number: true,
            unitless: true
        },
        numbers: {
            number: true,
            unitless: true,
            multiple: true
        },
        positiveNumber: {
            number: true,
            unitless: true,
            min: 0,
            strictMin: true
        },
        size: {
            number: true,
            min: 0
        },
        bidirectionalSize: {
            number: true
        },
        bidirectionalSizeMaybePercent: {
            number: true,
            allowPercent: true
        },
        bidirectionalSizes: {
            number: true,
            multiple: true
        },
        sizeMaybePercent: {
            number: true,
            min: 0,
            allowPercent: true
        },
        axisDirection: {
            enums: [
                "horizontal",
                "leftward",
                "rightward",
                "vertical",
                "upward",
                "downward",
                "auto"
            ]
        },
        axisDirectionExplicit: {
            enums: [
                "leftward",
                "rightward",
                "upward",
                "downward"
            ]
        },
        axisDirectionPrimary: {
            enums: [
                "horizontal",
                "vertical"
            ]
        },
        paddingRelativeTo: {
            enums: [
                "width",
                "height",
                "average",
                "min",
                "max"
            ]
        },
        bgWH: {
            number: true,
            min: 0,
            allowPercent: true,
            enums: [
                "auto"
            ],
            multiple: true
        },
        bgPos: {
            number: true,
            allowPercent: true,
            multiple: true
        },
        bgRelativeTo: {
            enums: [
                "inner",
                "include-padding"
            ],
            multiple: true
        },
        bgRepeat: {
            enums: [
                "repeat",
                "repeat-x",
                "repeat-y",
                "no-repeat"
            ],
            multiple: true
        },
        bgFit: {
            enums: [
                "none",
                "contain",
                "cover"
            ],
            multiple: true
        },
        bgCrossOrigin: {
            enums: [
                "anonymous",
                "use-credentials",
                "null"
            ],
            multiple: true
        },
        bgClip: {
            enums: [
                "none",
                "node"
            ],
            multiple: true
        },
        bgContainment: {
            enums: [
                "inside",
                "over"
            ],
            multiple: true
        },
        boxSelection: {
            enums: [
                "contain",
                "overlap",
                "none"
            ]
        },
        color: {
            color: true
        },
        colors: {
            color: true,
            multiple: true
        },
        fill: {
            enums: [
                "solid",
                "linear-gradient",
                "radial-gradient"
            ]
        },
        bool: {
            enums: [
                "yes",
                "no"
            ]
        },
        bools: {
            enums: [
                "yes",
                "no"
            ],
            multiple: true
        },
        lineStyle: {
            enums: [
                "solid",
                "dotted",
                "dashed"
            ]
        },
        lineCap: {
            enums: [
                "butt",
                "round",
                "square"
            ]
        },
        linePosition: {
            enums: [
                "center",
                "inside",
                "outside"
            ]
        },
        lineJoin: {
            enums: [
                "round",
                "bevel",
                "miter"
            ]
        },
        borderStyle: {
            enums: [
                "solid",
                "dotted",
                "dashed",
                "double"
            ]
        },
        curveStyle: {
            enums: [
                "bezier",
                "unbundled-bezier",
                "haystack",
                "segments",
                "straight",
                "straight-triangle",
                "taxi",
                "round-segments",
                "round-taxi"
            ]
        },
        radiusType: {
            enums: [
                "arc-radius",
                "influence-radius"
            ],
            multiple: true
        },
        fontFamily: {
            regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'
        },
        fontStyle: {
            enums: [
                "italic",
                "normal",
                "oblique"
            ]
        },
        fontWeight: {
            enums: [
                "normal",
                "bold",
                "bolder",
                "lighter",
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "800",
                "900",
                100,
                200,
                300,
                400,
                500,
                600,
                700,
                800,
                900
            ]
        },
        textDecoration: {
            enums: [
                "none",
                "underline",
                "overline",
                "line-through"
            ]
        },
        textTransform: {
            enums: [
                "none",
                "uppercase",
                "lowercase"
            ]
        },
        textWrap: {
            enums: [
                "none",
                "wrap",
                "ellipsis"
            ]
        },
        textOverflowWrap: {
            enums: [
                "whitespace",
                "anywhere"
            ]
        },
        textBackgroundShape: {
            enums: [
                "rectangle",
                "roundrectangle",
                "round-rectangle",
                "circle"
            ]
        },
        nodeShape: {
            enums: [
                "rectangle",
                "roundrectangle",
                "round-rectangle",
                "cutrectangle",
                "cut-rectangle",
                "bottomroundrectangle",
                "bottom-round-rectangle",
                "barrel",
                "ellipse",
                "triangle",
                "round-triangle",
                "square",
                "pentagon",
                "round-pentagon",
                "hexagon",
                "round-hexagon",
                "concavehexagon",
                "concave-hexagon",
                "heptagon",
                "round-heptagon",
                "octagon",
                "round-octagon",
                "tag",
                "round-tag",
                "star",
                "diamond",
                "round-diamond",
                "vee",
                "rhomboid",
                "right-rhomboid",
                "polygon"
            ]
        },
        overlayShape: {
            enums: [
                "roundrectangle",
                "round-rectangle",
                "ellipse"
            ]
        },
        cornerRadius: {
            number: true,
            min: 0,
            units: "px|em",
            implicitUnits: "px",
            enums: [
                "auto"
            ]
        },
        compoundIncludeLabels: {
            enums: [
                "include",
                "exclude"
            ]
        },
        arrowShape: {
            enums: [
                "tee",
                "triangle",
                "triangle-tee",
                "circle-triangle",
                "triangle-cross",
                "triangle-backcurve",
                "vee",
                "square",
                "circle",
                "diamond",
                "chevron",
                "none"
            ]
        },
        arrowFill: {
            enums: [
                "filled",
                "hollow"
            ]
        },
        arrowWidth: {
            number: true,
            units: "%|px|em",
            implicitUnits: "px",
            enums: [
                "match-line"
            ]
        },
        display: {
            enums: [
                "element",
                "none"
            ]
        },
        visibility: {
            enums: [
                "hidden",
                "visible"
            ]
        },
        zCompoundDepth: {
            enums: [
                "bottom",
                "orphan",
                "auto",
                "top"
            ]
        },
        zIndexCompare: {
            enums: [
                "auto",
                "manual"
            ]
        },
        valign: {
            enums: [
                "top",
                "center",
                "bottom"
            ]
        },
        halign: {
            enums: [
                "left",
                "center",
                "right"
            ]
        },
        justification: {
            enums: [
                "left",
                "center",
                "right",
                "auto"
            ]
        },
        text: {
            string: true
        },
        data: {
            mapping: true,
            regex: i("data")
        },
        layoutData: {
            mapping: true,
            regex: i("layoutData")
        },
        scratch: {
            mapping: true,
            regex: i("scratch")
        },
        mapData: {
            mapping: true,
            regex: s("mapData")
        },
        mapLayoutData: {
            mapping: true,
            regex: s("mapLayoutData")
        },
        mapScratch: {
            mapping: true,
            regex: s("mapScratch")
        },
        fn: {
            mapping: true,
            fn: true
        },
        url: {
            regexes,
            singleRegexMatchValue: true
        },
        urls: {
            regexes,
            singleRegexMatchValue: true,
            multiple: true
        },
        propList: {
            propList: true
        },
        angle: {
            number: true,
            units: "deg|rad",
            implicitUnits: "rad"
        },
        textRotation: {
            number: true,
            units: "deg|rad",
            implicitUnits: "rad",
            enums: [
                "none",
                "autorotate"
            ]
        },
        polygonPointList: {
            number: true,
            multiple: true,
            evenMultiple: true,
            min: -1,
            max: 1,
            unitless: true
        },
        edgeDistances: {
            enums: [
                "intersection",
                "node-position",
                "endpoints"
            ]
        },
        edgeEndpoint: {
            number: true,
            multiple: true,
            units: "%|px|em|deg|rad",
            implicitUnits: "px",
            enums: [
                "inside-to-node",
                "outside-to-node",
                "outside-to-node-or-label",
                "outside-to-line",
                "outside-to-line-or-label"
            ],
            singleEnum: true,
            validate (H, W) {
                switch(H.length){
                    case 2:
                        return W[0] !== "deg" && W[0] !== "rad" && W[1] !== "deg" && W[1] !== "rad";
                    case 1:
                        return he(H[0]) || W[0] === "deg" || W[0] === "rad";
                    default:
                        return false;
                }
            }
        },
        easing: {
            regexes: [
                `^(spring)\\s*\\(\\s*(${r})\\s*,\\s*(${r})\\s*\\)\$`,
                `^(cubic-bezier)\\s*\\(\\s*(${r})\\s*,\\s*(${r})\\s*,\\s*(${r})\\s*,\\s*(${r})\\s*\\)\$`
            ],
            enums: [
                "linear",
                "ease",
                "ease-in",
                "ease-out",
                "ease-in-out",
                "ease-in-sine",
                "ease-out-sine",
                "ease-in-out-sine",
                "ease-in-quad",
                "ease-out-quad",
                "ease-in-out-quad",
                "ease-in-cubic",
                "ease-out-cubic",
                "ease-in-out-cubic",
                "ease-in-quart",
                "ease-out-quart",
                "ease-in-out-quart",
                "ease-in-quint",
                "ease-out-quint",
                "ease-in-out-quint",
                "ease-in-expo",
                "ease-out-expo",
                "ease-in-out-expo",
                "ease-in-circ",
                "ease-out-circ",
                "ease-in-out-circ"
            ]
        },
        gradientDirection: {
            enums: [
                "to-bottom",
                "to-top",
                "to-left",
                "to-right",
                "to-bottom-right",
                "to-bottom-left",
                "to-top-right",
                "to-top-left",
                "to-right-bottom",
                "to-left-bottom",
                "to-right-top",
                "to-left-top"
            ]
        },
        boundsExpansion: {
            number: true,
            multiple: true,
            min: 0,
            validate ({ length }) {
                return length === 1 || length === 2 || length === 4;
            }
        }
    };
    const u = {
        zeroNonZero (H, W) {
            if ((H == null || W == null) && H !== W || H == 0 && W != 0) {
                return true;
            }
            return H != 0 && W == 0;
        },
        any (H, W) {
            return H != W;
        },
        emptyNonEmpty (H, W) {
            const Y = ot(H);
            const te = ot(W);
            return Y && !te || !Y && te;
        }
    };
    const Ze_types = Ze.types;
    const mainLabel = [
        {
            name: "label",
            type: Ze_types.text,
            triggersBounds: u.any,
            triggersZOrder: u.emptyNonEmpty
        },
        {
            name: "text-rotation",
            type: Ze_types.textRotation,
            triggersBounds: u.any
        },
        {
            name: "text-margin-x",
            type: Ze_types.bidirectionalSize,
            triggersBounds: u.any
        },
        {
            name: "text-margin-y",
            type: Ze_types.bidirectionalSize,
            triggersBounds: u.any
        }
    ];
    const sourceLabel = [
        {
            name: "source-label",
            type: Ze_types.text,
            triggersBounds: u.any
        },
        {
            name: "source-text-rotation",
            type: Ze_types.textRotation,
            triggersBounds: u.any
        },
        {
            name: "source-text-margin-x",
            type: Ze_types.bidirectionalSize,
            triggersBounds: u.any
        },
        {
            name: "source-text-margin-y",
            type: Ze_types.bidirectionalSize,
            triggersBounds: u.any
        },
        {
            name: "source-text-offset",
            type: Ze_types.size,
            triggersBounds: u.any
        }
    ];
    const targetLabel = [
        {
            name: "target-label",
            type: Ze_types.text,
            triggersBounds: u.any
        },
        {
            name: "target-text-rotation",
            type: Ze_types.textRotation,
            triggersBounds: u.any
        },
        {
            name: "target-text-margin-x",
            type: Ze_types.bidirectionalSize,
            triggersBounds: u.any
        },
        {
            name: "target-text-margin-y",
            type: Ze_types.bidirectionalSize,
            triggersBounds: u.any
        },
        {
            name: "target-text-offset",
            type: Ze_types.size,
            triggersBounds: u.any
        }
    ];
    const labelDimensions = [
        {
            name: "font-family",
            type: Ze_types.fontFamily,
            triggersBounds: u.any
        },
        {
            name: "font-style",
            type: Ze_types.fontStyle,
            triggersBounds: u.any
        },
        {
            name: "font-weight",
            type: Ze_types.fontWeight,
            triggersBounds: u.any
        },
        {
            name: "font-size",
            type: Ze_types.size,
            triggersBounds: u.any
        },
        {
            name: "text-transform",
            type: Ze_types.textTransform,
            triggersBounds: u.any
        },
        {
            name: "text-wrap",
            type: Ze_types.textWrap,
            triggersBounds: u.any
        },
        {
            name: "text-overflow-wrap",
            type: Ze_types.textOverflowWrap,
            triggersBounds: u.any
        },
        {
            name: "text-max-width",
            type: Ze_types.size,
            triggersBounds: u.any
        },
        {
            name: "text-outline-width",
            type: Ze_types.size,
            triggersBounds: u.any
        },
        {
            name: "line-height",
            type: Ze_types.positiveNumber,
            triggersBounds: u.any
        }
    ];
    const commonLabel = [
        {
            name: "text-valign",
            type: Ze_types.valign,
            triggersBounds: u.any
        },
        {
            name: "text-halign",
            type: Ze_types.halign,
            triggersBounds: u.any
        },
        {
            name: "color",
            type: Ze_types.color
        },
        {
            name: "text-outline-color",
            type: Ze_types.color
        },
        {
            name: "text-outline-opacity",
            type: Ze_types.zeroOneNumber
        },
        {
            name: "text-background-color",
            type: Ze_types.color
        },
        {
            name: "text-background-opacity",
            type: Ze_types.zeroOneNumber
        },
        {
            name: "text-background-padding",
            type: Ze_types.size,
            triggersBounds: u.any
        },
        {
            name: "text-border-opacity",
            type: Ze_types.zeroOneNumber
        },
        {
            name: "text-border-color",
            type: Ze_types.color
        },
        {
            name: "text-border-width",
            type: Ze_types.size,
            triggersBounds: u.any
        },
        {
            name: "text-border-style",
            type: Ze_types.borderStyle,
            triggersBounds: u.any
        },
        {
            name: "text-background-shape",
            type: Ze_types.textBackgroundShape,
            triggersBounds: u.any
        },
        {
            name: "text-justification",
            type: Ze_types.justification
        },
        {
            name: "box-select-labels",
            type: Ze_types.bool,
            triggersBounds: u.any
        }
    ];
    const behavior = [
        {
            name: "events",
            type: Ze_types.bool,
            triggersZOrder: u.any
        },
        {
            name: "text-events",
            type: Ze_types.bool,
            triggersZOrder: u.any
        },
        {
            name: "box-selection",
            type: Ze_types.boxSelection,
            triggersZOrder: u.any
        }
    ];
    const visibility = [
        {
            name: "display",
            type: Ze_types.display,
            triggersZOrder: u.any,
            triggersBounds: u.any,
            triggersBoundsOfConnectedEdges: u.any,
            triggersBoundsOfParallelEdges (H, W, Y) {
                if (H === W) {
                    return false;
                }
                return Y.pstyle("curve-style").value === "bezier";
            }
        },
        {
            name: "visibility",
            type: Ze_types.visibility,
            triggersZOrder: u.any
        },
        {
            name: "opacity",
            type: Ze_types.zeroOneNumber,
            triggersZOrder: u.zeroNonZero
        },
        {
            name: "text-opacity",
            type: Ze_types.zeroOneNumber
        },
        {
            name: "min-zoomed-font-size",
            type: Ze_types.size
        },
        {
            name: "z-compound-depth",
            type: Ze_types.zCompoundDepth,
            triggersZOrder: u.any
        },
        {
            name: "z-index-compare",
            type: Ze_types.zIndexCompare,
            triggersZOrder: u.any
        },
        {
            name: "z-index",
            type: Ze_types.number,
            triggersZOrder: u.any
        }
    ];
    const overlay = [
        {
            name: "overlay-padding",
            type: Ze_types.size,
            triggersBounds: u.any
        },
        {
            name: "overlay-color",
            type: Ze_types.color
        },
        {
            name: "overlay-opacity",
            type: Ze_types.zeroOneNumber,
            triggersBounds: u.zeroNonZero
        },
        {
            name: "overlay-shape",
            type: Ze_types.overlayShape,
            triggersBounds: u.any
        },
        {
            name: "overlay-corner-radius",
            type: Ze_types.cornerRadius
        }
    ];
    const underlay = [
        {
            name: "underlay-padding",
            type: Ze_types.size,
            triggersBounds: u.any
        },
        {
            name: "underlay-color",
            type: Ze_types.color
        },
        {
            name: "underlay-opacity",
            type: Ze_types.zeroOneNumber,
            triggersBounds: u.zeroNonZero
        },
        {
            name: "underlay-shape",
            type: Ze_types.overlayShape,
            triggersBounds: u.any
        },
        {
            name: "underlay-corner-radius",
            type: Ze_types.cornerRadius
        }
    ];
    const transition = [
        {
            name: "transition-property",
            type: Ze_types.propList
        },
        {
            name: "transition-duration",
            type: Ze_types.time
        },
        {
            name: "transition-delay",
            type: Ze_types.time
        },
        {
            name: "transition-timing-function",
            type: Ze_types.easing
        }
    ];
    const hashOverride = (H, W)=>{
        if (W.value === "label") {
            return -H.poolIndex();
        }
        return W.pfValue;
    };
    const nodeBody = [
        {
            name: "height",
            type: Ze_types.nodeSize,
            triggersBounds: u.any,
            hashOverride
        },
        {
            name: "width",
            type: Ze_types.nodeSize,
            triggersBounds: u.any,
            hashOverride
        },
        {
            name: "shape",
            type: Ze_types.nodeShape,
            triggersBounds: u.any
        },
        {
            name: "shape-polygon-points",
            type: Ze_types.polygonPointList,
            triggersBounds: u.any
        },
        {
            name: "corner-radius",
            type: Ze_types.cornerRadius
        },
        {
            name: "background-color",
            type: Ze_types.color
        },
        {
            name: "background-fill",
            type: Ze_types.fill
        },
        {
            name: "background-opacity",
            type: Ze_types.zeroOneNumber
        },
        {
            name: "background-blacken",
            type: Ze_types.nOneOneNumber
        },
        {
            name: "background-gradient-stop-colors",
            type: Ze_types.colors
        },
        {
            name: "background-gradient-stop-positions",
            type: Ze_types.percentages
        },
        {
            name: "background-gradient-direction",
            type: Ze_types.gradientDirection
        },
        {
            name: "padding",
            type: Ze_types.sizeMaybePercent,
            triggersBounds: u.any
        },
        {
            name: "padding-relative-to",
            type: Ze_types.paddingRelativeTo,
            triggersBounds: u.any
        },
        {
            name: "bounds-expansion",
            type: Ze_types.boundsExpansion,
            triggersBounds: u.any
        }
    ];
    const nodeBorder = [
        {
            name: "border-color",
            type: Ze_types.color
        },
        {
            name: "border-opacity",
            type: Ze_types.zeroOneNumber
        },
        {
            name: "border-width",
            type: Ze_types.size,
            triggersBounds: u.any
        },
        {
            name: "border-style",
            type: Ze_types.borderStyle
        },
        {
            name: "border-cap",
            type: Ze_types.lineCap
        },
        {
            name: "border-join",
            type: Ze_types.lineJoin
        },
        {
            name: "border-dash-pattern",
            type: Ze_types.numbers
        },
        {
            name: "border-dash-offset",
            type: Ze_types.number
        },
        {
            name: "border-position",
            type: Ze_types.linePosition
        }
    ];
    const nodeOutline = [
        {
            name: "outline-color",
            type: Ze_types.color
        },
        {
            name: "outline-opacity",
            type: Ze_types.zeroOneNumber
        },
        {
            name: "outline-width",
            type: Ze_types.size,
            triggersBounds: u.any
        },
        {
            name: "outline-style",
            type: Ze_types.borderStyle
        },
        {
            name: "outline-offset",
            type: Ze_types.size,
            triggersBounds: u.any
        }
    ];
    const backgroundImage = [
        {
            name: "background-image",
            type: Ze_types.urls
        },
        {
            name: "background-image-crossorigin",
            type: Ze_types.bgCrossOrigin
        },
        {
            name: "background-image-opacity",
            type: Ze_types.zeroOneNumbers
        },
        {
            name: "background-image-containment",
            type: Ze_types.bgContainment
        },
        {
            name: "background-image-smoothing",
            type: Ze_types.bools
        },
        {
            name: "background-position-x",
            type: Ze_types.bgPos
        },
        {
            name: "background-position-y",
            type: Ze_types.bgPos
        },
        {
            name: "background-width-relative-to",
            type: Ze_types.bgRelativeTo
        },
        {
            name: "background-height-relative-to",
            type: Ze_types.bgRelativeTo
        },
        {
            name: "background-repeat",
            type: Ze_types.bgRepeat
        },
        {
            name: "background-fit",
            type: Ze_types.bgFit
        },
        {
            name: "background-clip",
            type: Ze_types.bgClip
        },
        {
            name: "background-width",
            type: Ze_types.bgWH
        },
        {
            name: "background-height",
            type: Ze_types.bgWH
        },
        {
            name: "background-offset-x",
            type: Ze_types.bgPos
        },
        {
            name: "background-offset-y",
            type: Ze_types.bgPos
        }
    ];
    const compound = [
        {
            name: "position",
            type: Ze_types.position,
            triggersBounds: u.any
        },
        {
            name: "compound-sizing-wrt-labels",
            type: Ze_types.compoundIncludeLabels,
            triggersBounds: u.any
        },
        {
            name: "min-width",
            type: Ze_types.size,
            triggersBounds: u.any
        },
        {
            name: "min-width-bias-left",
            type: Ze_types.sizeMaybePercent,
            triggersBounds: u.any
        },
        {
            name: "min-width-bias-right",
            type: Ze_types.sizeMaybePercent,
            triggersBounds: u.any
        },
        {
            name: "min-height",
            type: Ze_types.size,
            triggersBounds: u.any
        },
        {
            name: "min-height-bias-top",
            type: Ze_types.sizeMaybePercent,
            triggersBounds: u.any
        },
        {
            name: "min-height-bias-bottom",
            type: Ze_types.sizeMaybePercent,
            triggersBounds: u.any
        }
    ];
    const edgeLine = [
        {
            name: "line-style",
            type: Ze_types.lineStyle
        },
        {
            name: "line-color",
            type: Ze_types.color
        },
        {
            name: "line-fill",
            type: Ze_types.fill
        },
        {
            name: "line-cap",
            type: Ze_types.lineCap
        },
        {
            name: "line-opacity",
            type: Ze_types.zeroOneNumber
        },
        {
            name: "line-dash-pattern",
            type: Ze_types.numbers
        },
        {
            name: "line-dash-offset",
            type: Ze_types.number
        },
        {
            name: "line-outline-width",
            type: Ze_types.size
        },
        {
            name: "line-outline-color",
            type: Ze_types.color
        },
        {
            name: "line-gradient-stop-colors",
            type: Ze_types.colors
        },
        {
            name: "line-gradient-stop-positions",
            type: Ze_types.percentages
        },
        {
            name: "curve-style",
            type: Ze_types.curveStyle,
            triggersBounds: u.any,
            triggersBoundsOfParallelEdges (H, W) {
                if (H === W) {
                    return false;
                }
                return H === "bezier" || W === "bezier";
            }
        },
        {
            name: "haystack-radius",
            type: Ze_types.zeroOneNumber,
            triggersBounds: u.any
        },
        {
            name: "source-endpoint",
            type: Ze_types.edgeEndpoint,
            triggersBounds: u.any
        },
        {
            name: "target-endpoint",
            type: Ze_types.edgeEndpoint,
            triggersBounds: u.any
        },
        {
            name: "control-point-step-size",
            type: Ze_types.size,
            triggersBounds: u.any
        },
        {
            name: "control-point-distances",
            type: Ze_types.bidirectionalSizes,
            triggersBounds: u.any
        },
        {
            name: "control-point-weights",
            type: Ze_types.numbers,
            triggersBounds: u.any
        },
        {
            name: "segment-distances",
            type: Ze_types.bidirectionalSizes,
            triggersBounds: u.any
        },
        {
            name: "segment-weights",
            type: Ze_types.numbers,
            triggersBounds: u.any
        },
        {
            name: "segment-radii",
            type: Ze_types.numbers,
            triggersBounds: u.any
        },
        {
            name: "radius-type",
            type: Ze_types.radiusType,
            triggersBounds: u.any
        },
        {
            name: "taxi-turn",
            type: Ze_types.bidirectionalSizeMaybePercent,
            triggersBounds: u.any
        },
        {
            name: "taxi-turn-min-distance",
            type: Ze_types.size,
            triggersBounds: u.any
        },
        {
            name: "taxi-direction",
            type: Ze_types.axisDirection,
            triggersBounds: u.any
        },
        {
            name: "taxi-radius",
            type: Ze_types.number,
            triggersBounds: u.any
        },
        {
            name: "edge-distances",
            type: Ze_types.edgeDistances,
            triggersBounds: u.any
        },
        {
            name: "arrow-scale",
            type: Ze_types.positiveNumber,
            triggersBounds: u.any
        },
        {
            name: "loop-direction",
            type: Ze_types.angle,
            triggersBounds: u.any
        },
        {
            name: "loop-sweep",
            type: Ze_types.angle,
            triggersBounds: u.any
        },
        {
            name: "source-distance-from-node",
            type: Ze_types.size,
            triggersBounds: u.any
        },
        {
            name: "target-distance-from-node",
            type: Ze_types.size,
            triggersBounds: u.any
        }
    ];
    const ghost = [
        {
            name: "ghost",
            type: Ze_types.bool,
            triggersBounds: u.any
        },
        {
            name: "ghost-offset-x",
            type: Ze_types.bidirectionalSize,
            triggersBounds: u.any
        },
        {
            name: "ghost-offset-y",
            type: Ze_types.bidirectionalSize,
            triggersBounds: u.any
        },
        {
            name: "ghost-opacity",
            type: Ze_types.zeroOneNumber
        }
    ];
    const core = [
        {
            name: "selection-box-color",
            type: Ze_types.color
        },
        {
            name: "selection-box-opacity",
            type: Ze_types.zeroOneNumber
        },
        {
            name: "selection-box-border-color",
            type: Ze_types.color
        },
        {
            name: "selection-box-border-width",
            type: Ze_types.size
        },
        {
            name: "active-bg-color",
            type: Ze_types.color
        },
        {
            name: "active-bg-opacity",
            type: Ze_types.zeroOneNumber
        },
        {
            name: "active-bg-size",
            type: Ze_types.size
        },
        {
            name: "outside-texture-bg-color",
            type: Ze_types.color
        },
        {
            name: "outside-texture-bg-opacity",
            type: Ze_types.zeroOneNumber
        }
    ];
    const pie = [];
    Ze.pieBackgroundN = 16;
    pie.push({
        name: "pie-size",
        type: Ze_types.sizeMaybePercent
    });
    pie.push({
        name: "pie-hole",
        type: Ze_types.sizeMaybePercent
    });
    pie.push({
        name: "pie-start-angle",
        type: Ze_types.angle
    });
    for(let R = 1; R <= Ze.pieBackgroundN; R++){
        pie.push({
            name: `pie-${R}-background-color`,
            type: Ze_types.color
        });
        pie.push({
            name: `pie-${R}-background-size`,
            type: Ze_types.percent
        });
        pie.push({
            name: `pie-${R}-background-opacity`,
            type: Ze_types.zeroOneNumber
        });
    }
    const stripe = [];
    Ze.stripeBackgroundN = 16;
    stripe.push({
        name: "stripe-size",
        type: Ze_types.sizeMaybePercent
    });
    stripe.push({
        name: "stripe-direction",
        type: Ze_types.axisDirectionPrimary
    });
    for(let I = 1; I <= Ze.stripeBackgroundN; I++){
        stripe.push({
            name: `stripe-${I}-background-color`,
            type: Ze_types.color
        });
        stripe.push({
            name: `stripe-${I}-background-size`,
            type: Ze_types.percent
        });
        stripe.push({
            name: `stripe-${I}-background-opacity`,
            type: Ze_types.zeroOneNumber
        });
    }
    const edgeArrow = [];
    const O = Ze.arrowPrefixes = [
        "source",
        "mid-source",
        "target",
        "mid-target"
    ];
    [
        {
            name: "arrow-shape",
            type: Ze_types.arrowShape,
            triggersBounds: u.any
        },
        {
            name: "arrow-color",
            type: Ze_types.color
        },
        {
            name: "arrow-fill",
            type: Ze_types.arrowFill
        },
        {
            name: "arrow-width",
            type: Ze_types.arrowWidth
        }
    ].forEach((V)=>{
        O.forEach((H)=>{
            const W = `${H}-${V.name}`;
            const { type, triggersBounds } = V;
            edgeArrow.push({
                name: W,
                type,
                triggersBounds
            });
        });
    }, {});
    const q = Ze.properties = [].concat(behavior, transition, visibility, overlay, underlay, ghost, commonLabel, labelDimensions, mainLabel, sourceLabel, targetLabel, nodeBody, nodeBorder, nodeOutline, backgroundImage, pie, stripe, compound, edgeLine, edgeArrow, core);
    const _ = Ze.propertyGroups = {
        behavior,
        transition,
        visibility,
        overlay,
        underlay,
        ghost,
        commonLabel,
        labelDimensions,
        mainLabel,
        sourceLabel,
        targetLabel,
        nodeBody,
        nodeBorder,
        nodeOutline,
        backgroundImage,
        pie,
        stripe,
        compound,
        edgeLine,
        edgeArrow,
        core
    };
    const N = Ze.propertyGroupNames = {};
    const F = Ze.propertyGroupKeys = Object.keys(_);
    F.forEach((V)=>{
        N[V] = _[V].map((H)=>H.name);
        _[V].forEach((H)=>H.groupKey = V);
    });
    const U = Ze.aliases = [
        {
            name: "content",
            pointsTo: "label"
        },
        {
            name: "control-point-distance",
            pointsTo: "control-point-distances"
        },
        {
            name: "control-point-weight",
            pointsTo: "control-point-weights"
        },
        {
            name: "segment-distance",
            pointsTo: "segment-distances"
        },
        {
            name: "segment-weight",
            pointsTo: "segment-weights"
        },
        {
            name: "segment-radius",
            pointsTo: "segment-radii"
        },
        {
            name: "edge-text-rotation",
            pointsTo: "text-rotation"
        },
        {
            name: "padding-left",
            pointsTo: "padding"
        },
        {
            name: "padding-right",
            pointsTo: "padding"
        },
        {
            name: "padding-top",
            pointsTo: "padding"
        },
        {
            name: "padding-bottom",
            pointsTo: "padding"
        }
    ];
    Ze.propertyNames = q.map((V)=>V.name);
    for (const Z of q){
        q[Z.name] = Z;
    }
    for (const re of U){
        const pointsTo = q[re.pointsTo];
        const Q = {
            name: re.name,
            alias: true,
            pointsTo
        };
        q.push(Q);
        q[re.name] = Q;
    }
})();
Ze.getDefaultProperty = function(r) {
    return this.getDefaultProperties()[r];
};
Ze.getDefaultProperties = function() {
    const _private = this._private;
    if (_private.defaultProperties != null) {
        return _private.defaultProperties;
    }
    const e = ye({
        "selection-box-color": "#ddd",
        "selection-box-opacity": 0.65,
        "selection-box-border-color": "#aaa",
        "selection-box-border-width": 1,
        "active-bg-color": "black",
        "active-bg-opacity": 0.15,
        "active-bg-size": 30,
        "outside-texture-bg-color": "#000",
        "outside-texture-bg-opacity": 0.125,
        events: "yes",
        "text-events": "no",
        "text-valign": "top",
        "text-halign": "center",
        "text-justification": "auto",
        "line-height": 1,
        color: "#000",
        "box-selection": "contain",
        "text-outline-color": "#000",
        "text-outline-width": 0,
        "text-outline-opacity": 1,
        "text-opacity": 1,
        "text-decoration": "none",
        "text-transform": "none",
        "text-wrap": "none",
        "text-overflow-wrap": "whitespace",
        "text-max-width": 9999,
        "text-background-color": "#000",
        "text-background-opacity": 0,
        "text-background-shape": "rectangle",
        "text-background-padding": 0,
        "text-border-opacity": 0,
        "text-border-width": 0,
        "text-border-style": "solid",
        "text-border-color": "#000",
        "font-family": "Helvetica Neue, Helvetica, sans-serif",
        "font-style": "normal",
        "font-weight": "normal",
        "font-size": 16,
        "min-zoomed-font-size": 0,
        "text-rotation": "none",
        "source-text-rotation": "none",
        "target-text-rotation": "none",
        visibility: "visible",
        display: "element",
        opacity: 1,
        "z-compound-depth": "auto",
        "z-index-compare": "auto",
        "z-index": 0,
        label: "",
        "text-margin-x": 0,
        "text-margin-y": 0,
        "source-label": "",
        "source-text-offset": 0,
        "source-text-margin-x": 0,
        "source-text-margin-y": 0,
        "target-label": "",
        "target-text-offset": 0,
        "target-text-margin-x": 0,
        "target-text-margin-y": 0,
        "overlay-opacity": 0,
        "overlay-color": "#000",
        "overlay-padding": 10,
        "overlay-shape": "round-rectangle",
        "overlay-corner-radius": "auto",
        "underlay-opacity": 0,
        "underlay-color": "#000",
        "underlay-padding": 10,
        "underlay-shape": "round-rectangle",
        "underlay-corner-radius": "auto",
        "transition-property": "none",
        "transition-duration": 0,
        "transition-delay": 0,
        "transition-timing-function": "linear",
        "box-select-labels": "no",
        "background-blacken": 0,
        "background-color": "#999",
        "background-fill": "solid",
        "background-opacity": 1,
        "background-image": "none",
        "background-image-crossorigin": "anonymous",
        "background-image-opacity": 1,
        "background-image-containment": "inside",
        "background-image-smoothing": "yes",
        "background-position-x": "50%",
        "background-position-y": "50%",
        "background-offset-x": 0,
        "background-offset-y": 0,
        "background-width-relative-to": "include-padding",
        "background-height-relative-to": "include-padding",
        "background-repeat": "no-repeat",
        "background-fit": "none",
        "background-clip": "node",
        "background-width": "auto",
        "background-height": "auto",
        "border-color": "#000",
        "border-opacity": 1,
        "border-width": 0,
        "border-style": "solid",
        "border-dash-pattern": [
            4,
            2
        ],
        "border-dash-offset": 0,
        "border-cap": "butt",
        "border-join": "miter",
        "border-position": "center",
        "outline-color": "#999",
        "outline-opacity": 1,
        "outline-width": 0,
        "outline-offset": 0,
        "outline-style": "solid",
        height: 30,
        width: 30,
        shape: "ellipse",
        "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
        "corner-radius": "auto",
        "bounds-expansion": 0,
        "background-gradient-direction": "to-bottom",
        "background-gradient-stop-colors": "#999",
        "background-gradient-stop-positions": "0%",
        ghost: "no",
        "ghost-offset-y": 0,
        "ghost-offset-x": 0,
        "ghost-opacity": 0,
        padding: 0,
        "padding-relative-to": "width",
        position: "origin",
        "compound-sizing-wrt-labels": "include",
        "min-width": 0,
        "min-width-bias-left": 0,
        "min-width-bias-right": 0,
        "min-height": 0,
        "min-height-bias-top": 0,
        "min-height-bias-bottom": 0
    }, {
        "pie-size": "100%",
        "pie-hole": 0,
        "pie-start-angle": "0deg"
    }, [
        {
            name: "pie-{{i}}-background-color",
            value: "black"
        },
        {
            name: "pie-{{i}}-background-size",
            value: "0%"
        },
        {
            name: "pie-{{i}}-background-opacity",
            value: 1
        }
    ].reduce((acc, item)=>{
        for(let v = 1; v <= Ze.pieBackgroundN; v++){
            const f = item.name.replace("{{i}}", v);
            const c = item.value;
            acc[f] = c;
        }
        return acc;
    }, {}), {
        "stripe-size": "100%",
        "stripe-direction": "horizontal"
    }, [
        {
            name: "stripe-{{i}}-background-color",
            value: "black"
        },
        {
            name: "stripe-{{i}}-background-size",
            value: "0%"
        },
        {
            name: "stripe-{{i}}-background-opacity",
            value: 1
        }
    ].reduce((acc, item)=>{
        for(let v = 1; v <= Ze.stripeBackgroundN; v++){
            const f = item.name.replace("{{i}}", v);
            const c = item.value;
            acc[f] = c;
        }
        return acc;
    }, {}), {
        "line-style": "solid",
        "line-color": "#999",
        "line-fill": "solid",
        "line-cap": "butt",
        "line-opacity": 1,
        "line-outline-width": 0,
        "line-outline-color": "#000",
        "line-gradient-stop-colors": "#999",
        "line-gradient-stop-positions": "0%",
        "control-point-step-size": 40,
        "control-point-weights": 0.5,
        "segment-weights": 0.5,
        "segment-distances": 20,
        "segment-radii": 15,
        "radius-type": "arc-radius",
        "taxi-turn": "50%",
        "taxi-radius": 15,
        "taxi-turn-min-distance": 10,
        "taxi-direction": "auto",
        "edge-distances": "intersection",
        "curve-style": "haystack",
        "haystack-radius": 0,
        "arrow-scale": 1,
        "loop-direction": "-45deg",
        "loop-sweep": "-90deg",
        "source-distance-from-node": 0,
        "target-distance-from-node": 0,
        "source-endpoint": "outside-to-node",
        "target-endpoint": "outside-to-node",
        "line-dash-pattern": [
            6,
            3
        ],
        "line-dash-offset": 0
    }, [
        {
            name: "arrow-shape",
            value: "none"
        },
        {
            name: "arrow-color",
            value: "#999"
        },
        {
            name: "arrow-fill",
            value: "filled"
        },
        {
            name: "arrow-width",
            value: 1
        }
    ].reduce((acc, item)=>{
        Ze.arrowPrefixes.forEach((v)=>{
            const f = `${v}-${item.name}`;
            const l_value = item.value;
            acc[f] = l_value;
        });
        return acc;
    }, {}));
    const t = {};
    for(let a = 0; a < this.properties.length; a++){
        const property = this.properties[a];
        if (!property.pointsTo) {
            const i = property.name;
            const s = e[i];
            const o = this.parse(i, s);
            t[i] = o;
        }
    }
    _private.defaultProperties = t;
    return _private.defaultProperties;
};
Ze.addDefaultStylesheet = function() {
    this.selector(":parent").css({
        shape: "rectangle",
        padding: 10,
        "background-color": "#eee",
        "border-color": "#ccc",
        "border-width": 1
    }).selector("edge").css({
        width: 3
    }).selector(":loop").css({
        "curve-style": "bezier"
    }).selector("edge:compound").css({
        "curve-style": "bezier",
        "source-endpoint": "outside-to-line",
        "target-endpoint": "outside-to-line"
    }).selector(":selected").css({
        "background-color": "#0169D9",
        "line-color": "#0169D9",
        "source-arrow-color": "#0169D9",
        "target-arrow-color": "#0169D9",
        "mid-source-arrow-color": "#0169D9",
        "mid-target-arrow-color": "#0169D9"
    }).selector(":parent:selected").css({
        "background-color": "#CCE1F9",
        "border-color": "#aec8e5"
    }).selector(":active").css({
        "overlay-color": "black",
        "overlay-padding": 10,
        "overlay-opacity": 0.25
    });
    this.defaultLength = this.length;
};
const Wn = {};
Wn.parse = function(r, e, t, a) {
    const n = this;
    if ($e(e)) {
        return n.parseImplWarn(r, e, t, a);
    }
    const i = a === "mapping" || a === true || a === false || a == null ? "dontcare" : a;
    const s = t ? "t" : "f";
    const o = `${e}`;
    const u = vv(r, o, s, i);
    const l = n.propCache = n.propCache || [];
    let v;
    if (!(v = l[u])) {
        v = l[u] = n.parseImplWarn(r, e, t, a);
    }
    if (t || a === "mapping") {
        v = qr(v);
        if (v) {
            v.value = qr(v.value);
        }
    }
    return v;
};
Wn.parseImplWarn = function(r, e, t, a) {
    const n = this.parseImpl(r, e, t, a);
    if (!n && e != null) {
        ze(`The style property \`${r}: ${e}\` is invalid`);
    }
    if (n && (n.name === "width" || n.name === "height") && e === "label") {
        ze(`The style value of \`label\` is deprecated for \`${n.name}\``);
    }
    return n;
};
Wn.parseImpl = function(r, e, bypass, a) {
    const n = this;
    r = Xs(r);
    let i = n.properties[r];
    const s = e;
    const n_types = n.types;
    if (!i || e === undefined) {
        return null;
    }
    if (i.alias) {
        i = i.pointsTo;
        r = i.name;
    }
    const u = he(e);
    if (u) {
        e = e.trim();
    }
    const i_type = i.type;
    if (!i_type) {
        return null;
    }
    if (bypass && (e === "" || e === null)) {
        return {
            name: r,
            value: e,
            bypass: true,
            deleteBypass: true
        };
    }
    if ($e(e)) {
        return {
            name: r,
            value: e,
            strValue: "fn",
            mapped: n_types.fn,
            bypass
        };
    }
    let v;
    let f;
    if (!(!u || a || e.length < 7 || e[1] !== "a")) {
        if (e.length >= 7 && e[0] === "d" && (v = new RegExp(n_types.data.regex).exec(e))) {
            if (bypass) {
                return false;
            }
            const c = n_types.data;
            return {
                name: r,
                value: v,
                strValue: `${e}`,
                mapped: c,
                field: v[1],
                bypass
            };
        } else if (e.length >= 10 && e[0] === "m" && (f = new RegExp(n_types.mapData.regex).exec(e))) {
            if (bypass || i_type.multiple) {
                return false;
            }
            const h = n_types.mapData;
            if (!(i_type.color || i_type.number)) {
                return false;
            }
            const d = this.parse(r, f[4]);
            if (!d || d.mapped) {
                return false;
            }
            const y = this.parse(r, f[5]);
            if (!y || y.mapped) {
                return false;
            }
            if (d.pfValue === y.pfValue || d.strValue === y.strValue) {
                ze(`\`${r}: ${e}\` is not a valid mapper because the output range is zero; converting to \`${r}: ${d.strValue}\``);
                return this.parse(r, d.strValue);
            }
            if (i_type.color) {
                const g = d.value;
                const p = y.value;
                const m = g[0] === p[0] && g[1] === p[1] && g[2] === p[2] && (g[3] === p[3] || (g[3] == null || g[3] === 1) && (p[3] == null || p[3] === 1));
                if (m) {
                    return false;
                }
            }
            return {
                name: r,
                value: f,
                strValue: `${e}`,
                mapped: h,
                field: f[1],
                fieldMin: parseFloat(f[2]),
                fieldMax: parseFloat(f[3]),
                valueMin: d.value,
                valueMax: y.value,
                bypass
            };
        }
    }
    if (i_type.multiple && a !== "multiple") {
        let b;
        if (u) {
            b = e.split(/\s+/);
        } else if (Ve(e)) {
            b = e;
        } else {
            b = [
                e
            ];
        }
        if (i_type.evenMultiple && b.length % 2 !== 0) {
            return null;
        }
        const w = [];
        const E = [];
        const pfValue = [];
        let strValue = "";
        let T = false;
        for(let k = 0; k < b.length; k++){
            const D = n.parse(r, b[k], bypass, "multiple");
            T = T || he(D.value);
            w.push(D.value);
            pfValue.push(D.pfValue ?? D.value);
            E.push(D.units);
            strValue += (k > 0 ? " " : "") + D.strValue;
        }
        if (i_type.validate && !i_type.validate(w, E)) {
            return null;
        }
        if (i_type.singleEnum && T) {
            if (w.length === 1 && he(w[0])) {
                return {
                    name: r,
                    value: w[0],
                    strValue: w[0],
                    bypass
                };
            }
            return null;
        }
        return {
            name: r,
            value: w,
            pfValue,
            strValue,
            bypass,
            units: E
        };
    }
    const B = ()=>{
        for(let Q = 0; Q < i_type.enums.length; Q++){
            const V = i_type.enums[Q];
            if (V === e) {
                return {
                    name: r,
                    value: e,
                    strValue: `${e}`,
                    bypass
                };
            }
        }
        return null;
    };
    if (i_type.number) {
        let P;
        let A = "px";
        if (i_type.units) {
            P = i_type.units;
        }
        if (i_type.implicitUnits) {
            A = i_type.implicitUnits;
        }
        if (!i_type.unitless) {
            if (u) {
                let R = `px|em${i_type.allowPercent ? "|\\%" : ""}`;
                if (P) {
                    R = P;
                }
                const L = e.match(`^(${number})(${R})?\$`);
                if (L) {
                    e = L[1];
                    P = L[2] || A;
                }
            } else {
                if (!P || i_type.implicitUnits) {
                    P = A;
                }
            }
        }
        e = parseFloat(e);
        if (isNaN(e) && i_type.enums === undefined) {
            return null;
        }
        if (isNaN(e) && i_type.enums !== undefined) {
            e = s;
            return B();
        }
        if (i_type.integer && !fc(e) || i_type.min !== undefined && (e < i_type.min || i_type.strictMin && e === i_type.min) || i_type.max !== undefined && (e > i_type.max || i_type.strictMax && e === i_type.max)) {
            return null;
        }
        const I = {
            name: r,
            value: e,
            strValue: `${e}${P || ""}`,
            units: P,
            bypass
        };
        if (i_type.unitless || P !== "px" && P !== "em") {
            I.pfValue = e;
        } else {
            I.pfValue = P === "px" || !P ? e : this.getEmSizeInPixels() * e;
        }
        if (P === "ms" || P === "s") {
            I.pfValue = P === "ms" ? e : 1000 * e;
        }
        if (P === "deg" || P === "rad") {
            I.pfValue = P === "rad" ? e : xd(e);
        }
        if (P === "%") {
            I.pfValue = e / 100;
        }
        return I;
    } else if (i_type.propList) {
        const M = [];
        const O = `${e}`;
        if (O !== "none") {
            for(let q = O.split(/\s*,\s*|\s+/), _ = 0; _ < q.length; _++){
                const N = q[_].trim();
                if (n.properties[N]) {
                    M.push(N);
                } else {
                    ze(`\`${N}\` is not a valid property name`);
                }
            }
            if (M.length === 0) {
                return null;
            }
        }
        return {
            name: r,
            value: M,
            strValue: M.length === 0 ? "none" : M.join(" "),
            bypass
        };
    } else if (i_type.color) {
        const F = av(e);
        if (F) {
            return {
                name: r,
                value: F,
                pfValue: F,
                strValue: `rgb(${F[0]},${F[1]},${F[2]})`,
                bypass
            };
        }
        return null;
    } else if (i_type.regex || i_type.regexes) {
        if (i_type.enums) {
            const U = B();
            if (U) {
                return U;
            }
        }
        for(let J = i_type.regexes ? i_type.regexes : [
            i_type.regex
        ], Z = 0; Z < J.length; Z++){
            const j = new RegExp(J[Z]);
            const re = j.exec(e);
            if (re) {
                return {
                    name: r,
                    value: i_type.singleRegexMatchValue ? re[1] : re,
                    strValue: `${e}`,
                    bypass
                };
            }
        }
        return null;
    } else {
        if (i_type.string) {
            return {
                name: r,
                value: `${e}`,
                strValue: `${e}`,
                bypass
            };
        }
        if (i_type.enums) {
            return B();
        }
        return null;
    }
};
const ir = function(e) {
    if (!(this instanceof ir)) {
        return new ir(e);
    }
    if (!Ks(e)) {
        He("A style must have a core reference");
        return;
    }
    this._private = {
        cy: e,
        coreStyle: {}
    };
    this.length = 0;
    this.resetToDefault();
};
const ir_prototype = ir.prototype;
ir_prototype.instanceString = ()=>"style";
ir_prototype.clear = function() {
    const _private = this._private;
    const _private_cy = _private.cy;
    const t = _private_cy.elements();
    for(let a = 0; a < this.length; a++){
        this[a] = undefined;
    }
    this.length = 0;
    _private.contextStyles = {};
    _private.propDiffs = {};
    this.cleanElements(t, true);
    t.forEach((n)=>{
        const _private = n[0]._private;
        _private.styleDirty = true;
        _private.appliedInitStyle = false;
    });
    return this;
};
ir_prototype.resetToDefault = function() {
    this.clear();
    this.addDefaultStylesheet();
    return this;
};
ir_prototype.core = function(r) {
    return this._private.coreStyle[r] || this.getDefaultProperty(r);
};
ir_prototype.selector = function(r) {
    const e = r === "core" ? null : new vt(r);
    const t = this.length++;
    this[t] = {
        selector: e,
        properties: [],
        mappedProperties: [],
        index: t
    };
    return this;
};
ir_prototype.css = function() {
    const r = this;
    const e = arguments;
    if (e.length === 1) {
        const t = e[0];
        for(let a = 0; a < r.properties.length; a++){
            const property = r.properties[a];
            let i = t[property.name];
            if (i === undefined) {
                i = t[An(property.name)];
            }
            if (i !== undefined) {
                this.cssRule(property.name, i);
            }
        }
    } else {
        if (e.length === 2) {
            this.cssRule(e[0], e[1]);
        }
    }
    return this;
};
ir_prototype.style = ir_prototype.css;
ir_prototype.cssRule = function(r, e) {
    const t = this.parse(r, e);
    if (t) {
        const a = this.length - 1;
        this[a].properties.push(t);
        this[a].properties[t.name] = t;
        if (t.name.match(/pie-(\d+)-background-size/) && t.value) {
            this._private.hasPie = true;
        }
        if (t.name.match(/stripe-(\d+)-background-size/) && t.value) {
            this._private.hasStripe = true;
        }
        if (t.mapped) {
            this[a].mappedProperties.push(t);
        }
        const n = !this[a].selector;
        if (n) {
            this._private.coreStyle[t.name] = t;
        }
    }
    return this;
};
ir_prototype.append = function(r) {
    if (ev(r)) {
        r.appendToStyle(this);
    } else if (Ve(r)) {
        this.appendFromJson(r);
    } else if (he(r)) {
        this.appendFromString(r);
    }
    return this;
};
ir.fromJson = (r, e)=>{
    const t = new ir(r);
    t.fromJson(e);
    return t;
};
ir.fromString = (r, e)=>new ir(r).fromString(e);
[
    sr,
    Va,
    lo,
    _r,
    Hn,
    vo,
    Ze,
    Wn
].forEach((r)=>{
    ye(ir_prototype, r);
});
ir.types = ir_prototype.types;
ir.properties = ir_prototype.properties;
ir.propertyGroups = ir_prototype.propertyGroups;
ir.propertyGroupNames = ir_prototype.propertyGroupNames;
ir.propertyGroupKeys = ir_prototype.propertyGroupKeys;
const Sp = {
    style (e) {
        if (e) {
            const t = this.setStyle(e);
            t.update();
        }
        return this._private.style;
    },
    setStyle (e) {
        const _private = this._private;
        if (ev(e)) {
            _private.style = e.generateStyle(this);
        } else if (Ve(e)) {
            _private.style = ir.fromJson(this, e);
        } else if (he(e)) {
            _private.style = ir.fromString(this, e);
        } else {
            _private.style = ir(this);
        }
        return _private.style;
    },
    updateStyle () {
        this.mutableElements().updateStyle();
    }
};
const kp = "single";
const Pt = {
    autolock (e) {
        if (e !== undefined) {
            this._private.autolock = !!e;
        } else {
            return this._private.autolock;
        }
        return this;
    },
    autoungrabify (e) {
        if (e !== undefined) {
            this._private.autoungrabify = !!e;
        } else {
            return this._private.autoungrabify;
        }
        return this;
    },
    autounselectify (e) {
        if (e !== undefined) {
            this._private.autounselectify = !!e;
        } else {
            return this._private.autounselectify;
        }
        return this;
    },
    selectionType (e) {
        const _private = this._private;
        if (_private.selectionType == null) {
            _private.selectionType = kp;
        }
        if (e !== undefined) {
            if (e === "additive" || e === "single") {
                _private.selectionType = e;
            }
        } else {
            return _private.selectionType;
        }
        return this;
    },
    panningEnabled (e) {
        if (e !== undefined) {
            this._private.panningEnabled = !!e;
        } else {
            return this._private.panningEnabled;
        }
        return this;
    },
    userPanningEnabled (e) {
        if (e !== undefined) {
            this._private.userPanningEnabled = !!e;
        } else {
            return this._private.userPanningEnabled;
        }
        return this;
    },
    zoomingEnabled (e) {
        if (e !== undefined) {
            this._private.zoomingEnabled = !!e;
        } else {
            return this._private.zoomingEnabled;
        }
        return this;
    },
    userZoomingEnabled (e) {
        if (e !== undefined) {
            this._private.userZoomingEnabled = !!e;
        } else {
            return this._private.userZoomingEnabled;
        }
        return this;
    },
    boxSelectionEnabled (e) {
        if (e !== undefined) {
            this._private.boxSelectionEnabled = !!e;
        } else {
            return this._private.boxSelectionEnabled;
        }
        return this;
    },
    pan () {
        const e = arguments;
        const pan = this._private.pan;
        let a;
        let n;
        let i;
        let s;
        let o;
        switch(e.length){
            case 0:
                return pan;
            case 1:
                if (he(e[0])) {
                    a = e[0];
                    return pan[a];
                }
                if (Me(e[0])) {
                    if (!this._private.panningEnabled) {
                        return this;
                    }
                    i = e[0];
                    s = i.x;
                    o = i.y;
                    if (ae(s)) {
                        pan.x = s;
                    }
                    if (ae(o)) {
                        pan.y = o;
                    }
                    this.emit("pan viewport");
                }
                break;
            case 2:
                if (!this._private.panningEnabled) {
                    return this;
                }
                a = e[0];
                n = e[1];
                if ((a === "x" || a === "y") && ae(n)) {
                    pan[a] = n;
                }
                this.emit("pan viewport");
                break;
        }
        this.notify("viewport");
        return this;
    },
    panBy (e, t) {
        const a = arguments;
        const pan = this._private.pan;
        let i;
        let s;
        let o;
        let u;
        let l;
        if (!this._private.panningEnabled) {
            return this;
        }
        switch(a.length){
            case 1:
                if (Me(e)) {
                    o = a[0];
                    u = o.x;
                    l = o.y;
                    if (ae(u)) {
                        pan.x += u;
                    }
                    if (ae(l)) {
                        pan.y += l;
                    }
                    this.emit("pan viewport");
                }
                break;
            case 2:
                i = e;
                s = t;
                if ((i === "x" || i === "y") && ae(s)) {
                    pan[i] += s;
                }
                this.emit("pan viewport");
                break;
        }
        this.notify("viewport");
        return this;
    },
    gc () {
        this.notify("gc");
    },
    fit (e, t) {
        const a = this.getFitViewport(e, t);
        if (a) {
            const n = this._private;
            n.zoom = a.zoom;
            n.pan = a.pan;
            this.emit("pan zoom viewport");
            this.notify("viewport");
        }
        return this;
    },
    getFitViewport (e, t) {
        if (ae(e) && t === undefined) {
            t = e;
            e = undefined;
        }
        if (!(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
            let a;
            if (he(e)) {
                const n = e;
                e = this.$(n);
            } else if (hc(e)) {
                const i = e;
                a = {
                    x1: i.x1,
                    y1: i.y1,
                    x2: i.x2,
                    y2: i.y2
                };
                a.w = a.x2 - a.x1;
                a.h = a.y2 - a.y1;
            } else {
                if (!Tr(e)) {
                    e = this.mutableElements();
                }
            }
            if (!(Tr(e) && e.empty())) {
                a = a || e.boundingBox();
                const s = this.width();
                const o = this.height();
                let u;
                t = ae(t) ? t : 0;
                if (!isNaN(s) && !isNaN(o) && s > 0 && o > 0 && !isNaN(a.w) && !isNaN(a.h) && a.w > 0 && a.h > 0) {
                    u = Math.min((s - 2 * t) / a.w, (o - 2 * t) / a.h);
                    u = u > this._private.maxZoom ? this._private.maxZoom : u;
                    u = u < this._private.minZoom ? this._private.minZoom : u;
                    const l = {
                        x: (s - u * (a.x1 + a.x2)) / 2,
                        y: (o - u * (a.y1 + a.y2)) / 2
                    };
                    return {
                        zoom: u,
                        pan: l
                    };
                }
            }
        }
    },
    zoomRange (e, t) {
        const _private = this._private;
        if (t == null) {
            const n = e;
            e = n.min;
            t = n.max;
        }
        if (ae(e) && ae(t) && e <= t) {
            _private.minZoom = e;
            _private.maxZoom = t;
        } else if (ae(e) && t === undefined && e <= _private.maxZoom) {
            _private.minZoom = e;
        } else if (ae(t) && e === undefined && t >= _private.minZoom) {
            _private.maxZoom = t;
        }
        return this;
    },
    minZoom (e) {
        if (e === undefined) {
            return this._private.minZoom;
        }
        return this.zoomRange({
            min: e
        });
    },
    maxZoom (e) {
        if (e === undefined) {
            return this._private.maxZoom;
        }
        return this.zoomRange({
            max: e
        });
    },
    getZoomedViewport (e) {
        const _private = this._private;
        const { pan, zoom } = _private;
        let i;
        let s;
        let o = false;
        if (!_private.zoomingEnabled) {
            o = true;
        }
        if (ae(e)) {
            s = e;
        } else if (Me(e)) {
            s = e.level;
            if (e.position != null) {
                i = Ln(e.position, zoom, pan);
            } else if (e.renderedPosition != null) {
                i = e.renderedPosition;
            }
            if (i != null && !_private.panningEnabled) {
                o = true;
            }
        }
        s = s > _private.maxZoom ? _private.maxZoom : s;
        s = s < _private.minZoom ? _private.minZoom : s;
        if (o || !ae(s) || s === zoom || i != null && (!ae(i.x) || !ae(i.y))) {
            return null;
        }
        if (i != null) {
            const u = pan;
            const l = zoom;
            const v = s;
            const f = {
                x: -v / l * (i.x - u.x) + i.x,
                y: -v / l * (i.y - u.y) + i.y
            };
            return {
                zoomed: true,
                panned: true,
                zoom: v,
                pan: f
            };
        } else {
            return {
                zoomed: true,
                panned: false,
                zoom: s,
                pan
            };
        }
    },
    zoom (e) {
        if (e === undefined) {
            return this._private.zoom;
        }
        const t = this.getZoomedViewport(e);
        const _private = this._private;
        if (t == null || !t.zoomed) {
            return this;
        }
        _private.zoom = t.zoom;
        if (t.panned) {
            _private.pan.x = t.pan.x;
            _private.pan.y = t.pan.y;
        }
        this.emit(`zoom${t.panned ? " pan" : ""} viewport`);
        this.notify("viewport");
        return this;
    },
    viewport (e) {
        const _private = this._private;
        let a = true;
        let n = true;
        const i = [];
        let s = false;
        let o = false;
        if (!e) {
            return this;
        }
        if (!ae(e.zoom)) {
            a = false;
        }
        if (!Me(e.pan)) {
            n = false;
        }
        if (!a && !n) {
            return this;
        }
        if (a) {
            const u = e.zoom;
            if (u < _private.minZoom || u > _private.maxZoom || !_private.zoomingEnabled) {
                s = true;
            } else {
                _private.zoom = u;
                i.push("zoom");
            }
        }
        if (n && (!s || !e.cancelOnFailedZoom) && _private.panningEnabled) {
            const l = e.pan;
            if (ae(l.x)) {
                _private.pan.x = l.x;
                o = false;
            }
            if (ae(l.y)) {
                _private.pan.y = l.y;
                o = false;
            }
            if (!o) {
                i.push("pan");
            }
        }
        if (i.length > 0) {
            i.push("viewport");
            this.emit(i.join(" "));
            this.notify("viewport");
        }
        return this;
    },
    center (e) {
        const t = this.getCenterPan(e);
        if (t) {
            this._private.pan = t;
            this.emit("pan viewport");
            this.notify("viewport");
        }
        return this;
    },
    getCenterPan (e, t) {
        if (this._private.panningEnabled) {
            if (he(e)) {
                const a = e;
                e = this.mutableElements().filter(a);
            } else {
                if (!Tr(e)) {
                    e = this.mutableElements();
                }
            }
            if (e.length !== 0) {
                const n = e.boundingBox();
                const i = this.width();
                const s = this.height();
                t = t === undefined ? this._private.zoom : t;
                const o = {
                    x: (i - t * (n.x1 + n.x2)) / 2,
                    y: (s - t * (n.y1 + n.y2)) / 2
                };
                return o;
            }
        }
    },
    reset () {
        if (!this._private.panningEnabled || !this._private.zoomingEnabled) {
            return this;
        }
        this.viewport({
            pan: {
                x: 0,
                y: 0
            },
            zoom: 1
        });
        return this;
    },
    invalidateSize () {
        this._private.sizeCache = null;
    },
    size () {
        const _private = this._private;
        const e_container = _private.container;
        const a = this;
        return _private.sizeCache = _private.sizeCache || (e_container ? (()=>{
            const n = a.window().getComputedStyle(e_container);
            const i = (o)=>parseFloat(n.getPropertyValue(o));
            return {
                width: e_container.clientWidth - i("padding-left") - i("padding-right"),
                height: e_container.clientHeight - i("padding-top") - i("padding-bottom")
            };
        })() : {
            width: 1,
            height: 1
        });
    },
    width () {
        return this.size().width;
    },
    height () {
        return this.size().height;
    },
    extent () {
        const pan = this._private.pan;
        const zoom = this._private.zoom;
        const a = this.renderedExtent();
        const n = {
            x1: (a.x1 - pan.x) / zoom,
            x2: (a.x2 - pan.x) / zoom,
            y1: (a.y1 - pan.y) / zoom,
            y2: (a.y2 - pan.y) / zoom
        };
        n.w = n.x2 - n.x1;
        n.h = n.y2 - n.y1;
        return n;
    },
    renderedExtent () {
        const e = this.width();
        const t = this.height();
        return {
            x1: 0,
            y1: 0,
            x2: e,
            y2: t,
            w: e,
            h: t
        };
    },
    multiClickDebounceTime (e) {
        if (e) {
            this._private.multiClickDebounceTime = e;
        } else {
            return this._private.multiClickDebounceTime;
        }
        return this;
    }
};
Pt.centre = Pt.center;
Pt.autolockNodes = Pt.autolock;
Pt.autoungrabifyNodes = Pt.autoungrabify;
const Ba = {
    data: Ne.data({
        field: "data",
        bindingEvent: "data",
        allowBinding: true,
        allowSetting: true,
        settingEvent: "data",
        settingTriggersEvent: true,
        triggerFnName: "trigger",
        allowGetting: true,
        updateStyle: true
    }),
    removeData: Ne.removeData({
        field: "data",
        event: "data",
        triggerFnName: "trigger",
        triggerEvent: true,
        updateStyle: true
    }),
    scratch: Ne.data({
        field: "scratch",
        bindingEvent: "scratch",
        allowBinding: true,
        allowSetting: true,
        settingEvent: "scratch",
        settingTriggersEvent: true,
        triggerFnName: "trigger",
        allowGetting: true,
        updateStyle: true
    }),
    removeScratch: Ne.removeData({
        field: "scratch",
        event: "scratch",
        triggerFnName: "trigger",
        triggerEvent: true,
        updateStyle: true
    })
};
Ba.attr = Ba.data;
Ba.removeAttr = Ba.removeData;
const Pa = function(e) {
    const t = this;
    e = ye({}, e);
    let e_container = e.container;
    if (e_container && !yn(e_container) && yn(e_container[0])) {
        e_container = e_container[0];
    }
    let n = e_container ? e_container._cyreg : null;
    n = n || {};
    if (n && n.cy) {
        n.cy.destroy();
        n = {};
    }
    const i = n.readies = n.readies || [];
    if (e_container) {
        e_container._cyreg = n;
    }
    n.cy = t;
    const s = je !== undefined && e_container !== undefined && !e.headless;
    const options = e;
    options.layout = ye({
        name: s ? "grid" : "null"
    }, options.layout);
    options.renderer = ye({
        name: s ? "canvas" : "null"
    }, options.renderer);
    const u = (d, y, g)=>{
        if (y !== undefined) {
            return y;
        }
        if (g !== undefined) {
            return g;
        }
        return d;
    };
    const l = this._private = {
        container: e_container,
        ready: false,
        options,
        elements: new lr(this),
        listeners: [],
        aniEles: new lr(this),
        data: options.data || {},
        scratch: {},
        layout: null,
        renderer: null,
        destroyed: false,
        notificationsEnabled: true,
        minZoom: 1e-50,
        maxZoom: 1e+50,
        zoomingEnabled: u(true, options.zoomingEnabled),
        userZoomingEnabled: u(true, options.userZoomingEnabled),
        panningEnabled: u(true, options.panningEnabled),
        userPanningEnabled: u(true, options.userPanningEnabled),
        boxSelectionEnabled: u(true, options.boxSelectionEnabled),
        autolock: u(false, options.autolock, options.autolockNodes),
        autoungrabify: u(false, options.autoungrabify, options.autoungrabifyNodes),
        autounselectify: u(false, options.autounselectify),
        styleEnabled: options.styleEnabled === undefined ? s : options.styleEnabled,
        zoom: ae(options.zoom) ? options.zoom : 1,
        pan: {
            x: Me(options.pan) && ae(options.pan.x) ? options.pan.x : 0,
            y: Me(options.pan) && ae(options.pan.y) ? options.pan.y : 0
        },
        animation: {
            current: [],
            queue: []
        },
        hasCompoundNodes: false,
        multiClickDebounceTime: u(250, options.multiClickDebounceTime)
    };
    this.createEmitter();
    this.selectionType(options.selectionType);
    this.zoomRange({
        min: options.minZoom,
        max: options.maxZoom
    });
    const v = (d, y)=>{
        const g = d.some(gc);
        if (g) {
            return ea.all(d).then(y);
        }
        y(d);
    };
    if (l.styleEnabled) {
        t.setStyle([]);
    }
    const f = ye({}, options, options.renderer);
    t.initRenderer(f);
    const c = (d, y, done)=>{
        t.notifications(false);
        const p = t.mutableElements();
        if (p.length > 0) {
            p.remove();
        }
        if (d != null && (Me(d) || Ve(d))) {
            t.add(d);
        }
        t.one("layoutready", (b)=>{
            t.notifications(true);
            t.emit(b);
            t.one("load", y);
            t.emitAndNotify("load");
        }).one("layoutstop", ()=>{
            t.one("done", done);
            t.emit("done");
        });
        const m = ye({}, t._private.options.layout);
        m.eles = t.elements();
        t.layout(m).run();
    };
    v([
        options.style,
        options.elements
    ], ([d, y])=>{
        if (l.styleEnabled) {
            t.style().append(d);
        }
        c(y, ()=>{
            t.startAnimationLoop();
            l.ready = true;
            if ($e(options.ready)) {
                t.on("ready", options.ready);
            }
            for (const p of i){
                t.on("ready", p);
            }
            if (n) {
                n.readies = [];
            }
            t.emit("ready");
        }, options.done);
    });
};
const Pa_prototype = Pa.prototype;
ye(Pa_prototype, {
    instanceString () {
        return "core";
    },
    isReady () {
        return this._private.ready;
    },
    destroyed () {
        return this._private.destroyed;
    },
    ready (e) {
        if (this.isReady()) {
            this.emitter().emit("ready", [], e);
        } else {
            this.on("ready", e);
        }
        return this;
    },
    destroy () {
        const e = this;
        if (!e.destroyed()) {
            e.stopAnimationLoop();
            e.destroyRenderer();
            this.emit("destroy");
            e._private.destroyed = true;
            return e;
        }
    },
    hasElementWithId (e) {
        return this._private.elements.hasElementWithId(e);
    },
    getElementById (e) {
        return this._private.elements.getElementById(e);
    },
    hasCompoundNodes () {
        return this._private.hasCompoundNodes;
    },
    headless () {
        return this._private.renderer.isHeadless();
    },
    styleEnabled () {
        return this._private.styleEnabled;
    },
    addToPool (e) {
        this._private.elements.merge(e);
        return this;
    },
    removeFromPool (e) {
        this._private.elements.unmerge(e);
        return this;
    },
    container () {
        return this._private.container || null;
    },
    window () {
        const container = this._private.container;
        if (container == null) {
            return je;
        }
        const ownerDocument = this._private.container.ownerDocument;
        if (ownerDocument === undefined || ownerDocument == null) {
            return je;
        }
        return ownerDocument.defaultView || je;
    },
    mount (e) {
        if (e != null) {
            const t = this;
            const a = t._private;
            const n = a.options;
            if (!yn(e) && yn(e[0])) {
                e = e[0];
            }
            t.stopAnimationLoop();
            t.destroyRenderer();
            a.container = e;
            a.styleEnabled = true;
            t.invalidateSize();
            t.initRenderer(ye({}, n, n.renderer, {
                name: n.renderer.name === "null" ? "canvas" : n.renderer.name
            }));
            t.startAnimationLoop();
            t.style(n.style);
            t.emit("mount");
            return t;
        }
    },
    unmount () {
        const e = this;
        e.stopAnimationLoop();
        e.destroyRenderer();
        e.initRenderer({
            name: "null"
        });
        e.emit("unmount");
        return e;
    },
    options () {
        return qr(this._private.options);
    },
    json (e) {
        const t = this;
        const t__private = t._private;
        const n = t.mutableElements();
        const i = (w)=>t.getElementById(w.id());
        if (Me(e)) {
            t.startBatch();
            if (e.elements) {
                const s = {};
                const o = (w, E)=>{
                    const C = [];
                    const x = [];
                    for (const json of w){
                        if (!json.data.id) {
                            ze("cy.json() cannot handle elements without an ID attribute");
                            continue;
                        }
                        const D = `${json.data.id}`;
                        const B = t.getElementById(D);
                        s[D] = true;
                        if (B.length !== 0) {
                            x.push({
                                ele: B,
                                json
                            });
                        } else {
                            if (E) {
                                json.group = E;
                            }
                            C.push(json);
                        }
                    }
                    t.add(C);
                    for (const A of x){
                        const { ele, json } = A;
                        ele.json(json);
                    }
                };
                if (Ve(e.elements)) {
                    o(e.elements);
                } else {
                    for(let u = [
                        "nodes",
                        "edges"
                    ], l = 0; l < u.length; l++){
                        const v = u[l];
                        const f = e.elements[v];
                        if (Ve(f)) {
                            o(f, v);
                        }
                    }
                }
                const c = t.collection();
                n.filter((b)=>!s[b.id()]).forEach((b)=>{
                    if (b.isParent()) {
                        c.merge(b);
                    } else {
                        b.remove();
                    }
                });
                c.forEach((b)=>b.children().move({
                        parent: null
                    }));
                c.forEach((b)=>i(b).remove());
            }
            if (e.style) {
                t.style(e.style);
            }
            if (e.zoom != null && e.zoom !== t__private.zoom) {
                t.zoom(e.zoom);
            }
            if (e.pan && (e.pan.x !== t__private.pan.x || e.pan.y !== t__private.pan.y)) {
                t.pan(e.pan);
            }
            if (e.data) {
                t.data(e.data);
            }
            for(let h = [
                "minZoom",
                "maxZoom",
                "zoomingEnabled",
                "userZoomingEnabled",
                "panningEnabled",
                "userPanningEnabled",
                "boxSelectionEnabled",
                "autolock",
                "autoungrabify",
                "autounselectify",
                "multiClickDebounceTime"
            ], d = 0; d < h.length; d++){
                const y = h[d];
                if (e[y] != null) {
                    t[y](e[y]);
                }
            }
            t.endBatch();
            return this;
        } else {
            const g = !!e;
            const p = {};
            if (g) {
                p.elements = this.elements().map((b)=>b.json());
            } else {
                p.elements = {};
                n.forEach((b)=>{
                    const w = b.group();
                    if (!p.elements[w]) {
                        p.elements[w] = [];
                    }
                    p.elements[w].push(b.json());
                });
            }
            if (this._private.styleEnabled) {
                p.style = t.style().json();
            }
            p.data = qr(t.data());
            const m = t__private.options;
            p.zoomingEnabled = t__private.zoomingEnabled;
            p.userZoomingEnabled = t__private.userZoomingEnabled;
            p.zoom = t__private.zoom;
            p.minZoom = t__private.minZoom;
            p.maxZoom = t__private.maxZoom;
            p.panningEnabled = t__private.panningEnabled;
            p.userPanningEnabled = t__private.userPanningEnabled;
            p.pan = qr(t__private.pan);
            p.boxSelectionEnabled = t__private.boxSelectionEnabled;
            p.renderer = qr(m.renderer);
            p.hideEdgesOnViewport = m.hideEdgesOnViewport;
            p.textureOnViewport = m.textureOnViewport;
            p.wheelSensitivity = m.wheelSensitivity;
            p.motionBlur = m.motionBlur;
            p.multiClickDebounceTime = m.multiClickDebounceTime;
            return p;
        }
    }
});
Pa_prototype.$id = Pa_prototype.getElementById;
[
    gp,
    wp,
    ef,
    Os,
    fn,
    Ep,
    Ns,
    cn,
    Sp,
    Pt,
    Ba
].forEach((r)=>{
    ye(Pa_prototype, r);
});
const Dp = {
    fit: true,
    directed: false,
    direction: "downward",
    padding: 30,
    circle: false,
    grid: false,
    spacingFactor: 1.75,
    boundingBox: undefined,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false,
    roots: undefined,
    depthSort: undefined,
    animate: false,
    animationDuration: 500,
    animationEasing: undefined,
    animateFilter (e, t) {
        return true;
    },
    ready: undefined,
    stop: undefined,
    transform (e, t) {
        return t;
    }
};
const Bp = {
    maximal: false,
    acyclic: false
};
const Nt = (e)=>e.scratch("breadthfirst");
const El = (e, t)=>e.scratch("breadthfirst", t);
class rf {
    constructor(r){
        this.options = ye({}, Dp, Bp, r);
    }
    run() {
        const options = this.options;
        const { cy, eles } = options;
        const a = eles.nodes().filter((ge)=>ge.isChildless());
        const n = eles;
        const r_directed = options.directed;
        const s = options.acyclic || options.maximal || options.maximalAdjustments > 0;
        const o = !!options.boundingBox;
        const u = yr(o ? options.boundingBox : structuredClone(cy.extent()));
        let l;
        if (Tr(options.roots)) {
            l = options.roots;
        } else if (Ve(options.roots)) {
            const v = [];
            for(let f = 0; f < options.roots.length; f++){
                const root = options.roots[f];
                const h = cy.getElementById(root);
                v.push(h);
            }
            l = cy.collection(v);
        } else if (he(options.roots)) {
            l = cy.$(options.roots);
        } else if (r_directed) {
            l = a.roots();
        } else {
            const d = eles.components();
            l = cy.collection();
            const y = ()=>{
                const se = d[g];
                const de = se.maxDegree(false);
                const fe = se.filter((xe)=>xe.degree(false) === de);
                l = l.add(fe);
            };
            for(var g = 0; g < d.length; g++){
                y();
            }
        }
        const p = [];
        const m = {};
        const b = (se, de)=>{
            if (p[de] == null) {
                p[de] = [];
            }
            const length = p[de].length;
            p[de].push(se);
            El(se, {
                index: length,
                depth: de
            });
        };
        const w = (se, de)=>{
            const fe = Nt(se);
            const { depth, index } = fe;
            p[depth][index] = null;
            if (se.isChildless()) {
                b(se, de);
            }
        };
        n.bfs({
            roots: l,
            directed: options.directed,
            visit ([Se], de, fe, xe, be) {
                const De = Se.id();
                if (Se.isChildless()) {
                    b(Se, be);
                }
                m[De] = true;
            }
        });
        const E = [];
        for (const x of a){
            if (!m[x.id()]) {
                E.push(x);
            }
        }
        const T = (se)=>{
            for(let de = p[se], fe = 0; fe < de.length; fe++){
                const xe = de[fe];
                if (xe == null) {
                    de.splice(fe, 1);
                    fe--;
                    continue;
                }
                El(xe, {
                    depth: se,
                    index: fe
                });
            }
        };
        const k = (se, de)=>{
            const fe = Nt(se);
            for(var xe = se.incomers().filter((X)=>X.isNode() && eles.has(X)), be = -1, Se = se.id(), De = 0; De < xe.length; De++){
                const Oe = xe[De];
                const Le = Nt(Oe);
                be = Math.max(be, Le.depth);
            }
            if (fe.depth <= be) {
                if (!options.acyclic && de[Se]) {
                    return null;
                }
                const Ae = be + 1;
                w(se, Ae);
                de[Se] = Ae;
                return true;
            }
            return false;
        };
        if (r_directed && s) {
            const D = [];
            const B = {};
            const P = (se)=>D.push(se);
            const A = ()=>D.shift();
            for(a.forEach((ge)=>D.push(ge)); D.length > 0;){
                const R = A();
                const L = k(R, B);
                if (L) {
                    R.outgoers().filter((ge)=>ge.isNode() && eles.has(ge)).forEach(P);
                } else if (L === null) {
                    ze(`Detected double maximal shift for node \`${R.id()}\`.  Bailing maximal adjustment due to cycle.  Use \`options.maximal: true\` only on DAGs.`);
                    break;
                }
            }
        }
        let I = 0;
        if (options.avoidOverlap) {
            for (const O of a){
                const q = O.layoutDimensions(options);
                const { w, h } = q;
                I = Math.max(I, w, h);
            }
        }
        const F = {};
        const U = (se)=>{
            if (F[se.id()]) {
                return F[se.id()];
            }
            const depth_1 = Nt(se).depth;
            for(var fe = se.neighborhood(), xe = 0, be = 0, Se = 0; Se < fe.length; Se++){
                const De = fe[Se];
                if (!(De.isEdge() || De.isParent() || !a.has(De))) {
                    const Oe = Nt(De);
                    if (Oe != null) {
                        const { index, depth } = Oe;
                        if (!(index == null || depth == null)) {
                            const X = p[depth].length;
                            if (depth < depth_1) {
                                xe += index / X;
                                be++;
                            }
                        }
                    }
                }
            }
            be = Math.max(1, be);
            xe = xe / be;
            if (be === 0) {
                xe = 0;
            }
            F[se.id()] = xe;
            return xe;
        };
        let J = (se, de)=>{
            const fe = U(se);
            const xe = U(de);
            const be = fe - xe;
            if (be === 0) {
                return tv(se.id(), de.id());
            }
            return be;
        };
        if (options.depthSort !== undefined) {
            J = options.depthSort;
        }
        for(var Z = p.length, j = 0; j < Z; j++){
            p[j].sort(J);
            T(j);
        }
        const re = [];
        for(let ne = 0; ne < E.length; ne++){
            re.push(E[ne]);
        }
        const Q = ()=>{
            for(let se = 0; se < Z; se++){
                T(se);
            }
        };
        if (re.length) {
            p.unshift(re);
            Z = p.length;
            Q();
        }
        let V = 0;
        for(let H = 0; H < Z; H++){
            V = Math.max(p[H].length, V);
        }
        const W = {
            x: u.x1 + u.w / 2,
            y: u.y1 + u.h / 2
        };
        const Y = a.reduce((acc, item)=>((de)=>({
                    w: acc.w === -1 ? de.w : (acc.w + de.w) / 2,
                    h: acc.h === -1 ? de.h : (acc.h + de.h) / 2
                }))(item.boundingBox({
                includeLabels: options.nodeDimensionsIncludeLabels
            })), {
            w: -1,
            h: -1
        });
        const te = Math.max(Z === 1 ? 0 : o ? (u.h - options.padding * 2 - Y.h) / (Z - 1) : (u.h - options.padding * 2 - Y.h) / (Z + 1), I);
        const ce = p.reduce((acc, item)=>Math.max(acc, item.length), 0);
        const Be = (se)=>{
            const de = Nt(se);
            const { depth, index } = de;
            if (options.circle) {
                let be = Math.min(u.w / 2 / Z, u.h / 2 / Z);
                be = Math.max(be, I);
                let Se = be * depth + be - (Z > 0 && p[0].length <= 3 ? be / 2 : 0);
                const De = 2 * Math.PI / p[depth].length * index;
                if (depth === 0 && p[0].length === 1) {
                    Se = 1;
                }
                return {
                    x: W.x + Se * Math.cos(De),
                    y: W.y + Se * Math.sin(De)
                };
            } else {
                const Oe = p[depth].length;
                const Le = Math.max(Oe === 1 ? 0 : o ? (u.w - options.padding * 2 - Y.w) / ((options.grid ? ce : Oe) - 1) : (u.w - options.padding * 2 - Y.w) / ((options.grid ? ce : Oe) + 1), I);
                const Ae = {
                    x: W.x + (index + 1 - (Oe + 1) / 2) * Le,
                    y: W.y + (depth + 1 - (Z + 1) / 2) * te
                };
                return Ae;
            }
        };
        const we = {
            downward: 0,
            leftward: 90,
            upward: 180,
            rightward: -90
        };
        if (Object.keys(we).indexOf(options.direction) === -1) {
            He(`Invalid direction '${options.direction}' specified for breadthfirst layout. Valid values are: ${Object.keys(we).join(", ")}`);
        }
        const me = (se)=>Wc(Be(se), u, we[options.direction]);
        eles.nodes().layoutPositions(this, options, me);
        return this;
    }
}
const Pp = {
    fit: true,
    padding: 30,
    boundingBox: undefined,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false,
    spacingFactor: undefined,
    radius: undefined,
    startAngle: 3 / 2 * Math.PI,
    sweep: undefined,
    clockwise: true,
    sort: undefined,
    animate: false,
    animationDuration: 500,
    animationEasing: undefined,
    animateFilter (e, t) {
        return true;
    },
    ready: undefined,
    stop: undefined,
    transform (e, t) {
        return t;
    }
};
class tf {
    constructor(r){
        this.options = ye({}, Pp, r);
    }
    run() {
        const options = this.options;
        const e = options;
        const options_cy = options.cy;
        const e_eles = e.eles;
        const n = e.counterclockwise !== undefined ? !e.counterclockwise : e.clockwise;
        let i = e_eles.nodes().not(":parent");
        if (e.sort) {
            i = i.sort(e.sort);
        }
        const s = yr(e.boundingBox ? e.boundingBox : {
            x1: 0,
            y1: 0,
            w: options_cy.width(),
            h: options_cy.height()
        });
        const o = {
            x: s.x1 + s.w / 2,
            y: s.y1 + s.h / 2
        };
        const u = e.sweep === undefined ? 2 * Math.PI - 2 * Math.PI / i.length : e.sweep;
        const l = u / Math.max(1, i.length - 1);
        let v;
        let f = 0;
        for (const h of i){
            const d = h.layoutDimensions(e);
            const { w, h: h_1 } = d;
            f = Math.max(f, w, h_1);
        }
        if (ae(e.radius)) {
            v = e.radius;
        } else if (i.length <= 1) {
            v = 0;
        } else {
            v = Math.min(s.h, s.w) / 2 - f;
        }
        if (i.length > 1 && e.avoidOverlap) {
            f *= 1.75;
            const p = Math.cos(l) - Math.cos(0);
            const m = Math.sin(l) - Math.sin(0);
            const b = Math.sqrt(f * f / (p * p + m * m));
            v = Math.max(b, v);
        }
        const w = (C, x)=>{
            const T = e.startAngle + x * l * (n ? 1 : -1);
            const k = v * Math.cos(T);
            const D = v * Math.sin(T);
            const B = {
                x: o.x + k,
                y: o.y + D
            };
            return B;
        };
        e_eles.nodes().layoutPositions(this, e, w);
        return this;
    }
}
const Ap = {
    fit: true,
    padding: 30,
    startAngle: 3 / 2 * Math.PI,
    sweep: undefined,
    clockwise: true,
    equidistant: false,
    minNodeSpacing: 10,
    boundingBox: undefined,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false,
    height: undefined,
    width: undefined,
    spacingFactor: undefined,
    concentric (e) {
        return e.degree();
    },
    levelWidth (e) {
        return e.maxDegree() / 4;
    },
    animate: false,
    animationDuration: 500,
    animationEasing: undefined,
    animateFilter (e, t) {
        return true;
    },
    ready: undefined,
    stop: undefined,
    transform (e, t) {
        return t;
    }
};
class af {
    constructor(r){
        this.options = ye({}, Ap, r);
    }
    run() {
        const options = this.options;
        const e = options;
        const t = e.counterclockwise !== undefined ? !e.counterclockwise : e.clockwise;
        const options_cy = options.cy;
        const e_eles = e.eles;
        for(var i = e_eles.nodes().not(":parent"), s = yr(e.boundingBox ? e.boundingBox : {
            x1: 0,
            y1: 0,
            w: options_cy.width(),
            h: options_cy.height()
        }), o = {
            x: s.x1 + s.w / 2,
            y: s.y1 + s.h / 2
        }, u = [], l = 0, v = 0; v < i.length; v++){
            const f = i[v];
            let c;
            c = e.concentric(f);
            u.push({
                value: c,
                node: f
            });
            f._private.scratch.concentric = c;
        }
        i.updateStyle();
        for (const d of i){
            const y = d.layoutDimensions(e);
            l = Math.max(l, y.w, y.h);
        }
        u.sort((te, ce)=>ce.value - te.value);
        const g = e.levelWidth(i);
        const p = [
            []
        ];
        let m = p[0];
        for (const w of u){
            if (m.length > 0) {
                const E = Math.abs(m[0].value - w.value);
                if (E >= g) {
                    m = [];
                    p.push(m);
                }
            }
            m.push(w);
        }
        let C = l + e.minNodeSpacing;
        if (!e.avoidOverlap) {
            const x = p.length > 0 && p[0].length > 1;
            const T = Math.min(s.w, s.h) / 2 - C;
            const k = T / (p.length + x ? 1 : 0);
            C = Math.min(C, k);
        }
        let D = 0;
        for (const P of p){
            const A = e.sweep === undefined ? 2 * Math.PI - 2 * Math.PI / P.length : e.sweep;
            const R = P.dTheta = A / Math.max(1, P.length - 1);
            if (P.length > 1 && e.avoidOverlap) {
                const L = Math.cos(R) - Math.cos(0);
                const I = Math.sin(R) - Math.sin(0);
                const M = Math.sqrt(C * C / (L * L + I * I));
                D = Math.max(M, D);
            }
            P.r = D;
            D += C;
        }
        if (e.equidistant) {
            let O = 0;
            let q = 0;
            for (const N of p){
                const F = N.r - q;
                O = Math.max(O, F);
            }
            q = 0;
            for(let U = 0; U < p.length; U++){
                const J = p[U];
                if (U === 0) {
                    q = J.r;
                }
                J.r = q;
                q += O;
            }
        }
        const Z = {};
        for(let j = 0; j < p.length; j++){
            for(let re = p[j], ne = re.dTheta, Q = re.r, V = 0; V < re.length; V++){
                const H = re[V];
                const W = e.startAngle + (t ? 1 : -1) * ne * V;
                const Y = {
                    x: o.x + Q * Math.cos(W),
                    y: o.y + Q * Math.sin(W)
                };
                Z[H.node.id()] = Y;
            }
        }
        e_eles.nodes().layoutPositions(this, e, (te)=>{
            const ce = te.id();
            return Z[ce];
        });
        return this;
    }
}
let ys;
const Rp = {
    ready () {},
    stop () {},
    animate: true,
    animationEasing: undefined,
    animationDuration: undefined,
    animateFilter (e, t) {
        return true;
    },
    animationThreshold: 250,
    refresh: 20,
    fit: true,
    padding: 30,
    boundingBox: undefined,
    nodeDimensionsIncludeLabels: false,
    randomize: false,
    componentSpacing: 40,
    nodeRepulsion (e) {
        return 2048;
    },
    nodeOverlap: 4,
    idealEdgeLength (e) {
        return 32;
    },
    edgeElasticity (e) {
        return 32;
    },
    nestingFactor: 1.2,
    gravity: 1,
    numIter: 1000,
    initialTemp: 1000,
    coolingFactor: 0.99,
    minTemp: 1
};
class $n {
    constructor(r){
        this.options = ye({}, Rp, r);
        this.options.layout = this;
        const e = this.options.eles.nodes();
        const t = this.options.eles.edges();
        const a = t.filter((n)=>{
            const i = n.source().data("id");
            const s = n.target().data("id");
            const o = e.some((l)=>l.data("id") === i);
            const u = e.some((l)=>l.data("id") === s);
            return !o || !u;
        });
        this.options.eles = this.options.eles.not(a);
    }
    run() {
        const options = this.options;
        const options_cy = options.cy;
        const t = this;
        t.stopped = false;
        if (options.animate === true || options.animate === false) {
            t.emit({
                type: "layoutstart",
                layout: t
            });
        }
        if (options.debug === true) {
            ys = true;
        } else {
            ys = false;
        }
        const a = Mp(options_cy, t, options);
        if (ys) {
            Ip(a);
        }
        if (options.randomize) {
            Op(a);
        }
        const n = Xr();
        const i = ()=>{
            Np(a, options_cy, options);
            if (options.fit === true) {
                options_cy.fit(options.padding);
            }
        };
        const s = (c)=>!(t.stopped || c >= options.numIter || (zp(a, options), a.temperature = a.temperature * options.coolingFactor, a.temperature < options.minTemp));
        const o = ()=>{
            if (options.animate === true || options.animate === false) {
                i();
                t.one("layoutstop", options.stop);
                t.emit({
                    type: "layoutstop",
                    layout: t
                });
            } else {
                const c = options.eles.nodes();
                const h = sf(a, options, c);
                c.layoutPositions(t, options, h);
            }
        };
        let u = 0;
        let l = true;
        if (options.animate === true) {
            const v = ()=>{
                for(let c = 0; l && c < options.refresh;){
                    l = s(u);
                    u++;
                    c++;
                }
                if (!l) {
                    Tl(a, options);
                    o();
                } else {
                    const h = Xr();
                    if (h - n >= options.animationThreshold) {
                        i();
                    }
                    mn(v);
                }
            };
            v();
        } else {
            while(l){
                l = s(u);
                u++;
            }
            Tl(a, options);
            o();
        }
        return this;
    }
    stop() {
        this.stopped = true;
        if (this.thread) {
            this.thread.stop();
        }
        this.emit("layoutstop");
        return this;
    }
    destroy() {
        if (this.thread) {
            this.thread.stop();
        }
        return this;
    }
}
var Mp = (options_cy, t, options)=>{
    const n = options.eles.edges();
    const i = options.eles.nodes();
    const boundingBox = yr(options.boundingBox ? options.boundingBox : {
        x1: 0,
        y1: 0,
        w: options_cy.width(),
        h: options_cy.height()
    });
    const o = {
        isCompound: options_cy.hasCompoundNodes(),
        layoutNodes: [],
        idToIndex: {},
        nodeSize: i.size(),
        graphSet: [],
        indexToGraph: [],
        layoutEdges: [],
        edgeSize: n.size(),
        temperature: options.initialTemp,
        clientWidth: boundingBox.w,
        clientHeight: boundingBox.h,
        boundingBox
    };
    for(var u = options.eles.components(), l = {}, v = 0; v < u.length; v++){
        for(var f = u[v], c = 0; c < f.length; c++){
            var h = f[c];
            l[h.id()] = v;
        }
    }
    for(var v = 0; v < o.nodeSize; v++){
        var d = i[v];
        const y = d.layoutDimensions(options);
        var g = {};
        g.isLocked = d.locked();
        g.id = d.data("id");
        g.parentId = d.data("parent");
        g.cmptId = l[d.id()];
        g.children = [];
        g.positionX = d.position("x");
        g.positionY = d.position("y");
        g.offsetX = 0;
        g.offsetY = 0;
        g.height = y.w;
        g.width = y.h;
        g.maxX = g.positionX + g.width / 2;
        g.minX = g.positionX - g.width / 2;
        g.maxY = g.positionY + g.height / 2;
        g.minY = g.positionY - g.height / 2;
        g.padLeft = parseFloat(d.style("padding"));
        g.padRight = parseFloat(d.style("padding"));
        g.padTop = parseFloat(d.style("padding"));
        g.padBottom = parseFloat(d.style("padding"));
        g.nodeRepulsion = $e(options.nodeRepulsion) ? options.nodeRepulsion(d) : options.nodeRepulsion;
        o.layoutNodes.push(g);
        o.idToIndex[g.id] = v;
    }
    const p = [];
    let m = 0;
    let b = -1;
    const w = [];
    for(var v = 0; v < o.nodeSize; v++){
        var d = o.layoutNodes[v];
        const E = d.parentId;
        if (E != null) {
            o.layoutNodes[o.idToIndex[E]].children.push(d.id);
        } else {
            p[++b] = d.id;
            w.push(d.id);
        }
    }
    for(o.graphSet.push(w); m <= b;){
        const C = p[m++];
        const x = o.idToIndex[C];
        var h = o.layoutNodes[x];
        const T = h.children;
        if (T.length > 0) {
            o.graphSet.push(T);
            for(var v = 0; v < T.length; v++){
                p[++b] = T[v];
            }
        }
    }
    for(var v = 0; v < o.graphSet.length; v++){
        for(var k = o.graphSet[v], c = 0; c < k.length; c++){
            const D = o.idToIndex[k[c]];
            o.indexToGraph[D] = v;
        }
    }
    for(var v = 0; v < o.edgeSize; v++){
        const B = n[v];
        const P = {};
        P.id = B.data("id");
        P.sourceId = B.data("source");
        P.targetId = B.data("target");
        let A = $e(options.idealEdgeLength) ? options.idealEdgeLength(B) : options.idealEdgeLength;
        const R = $e(options.edgeElasticity) ? options.edgeElasticity(B) : options.edgeElasticity;
        const L = o.idToIndex[P.sourceId];
        const I = o.idToIndex[P.targetId];
        const M = o.indexToGraph[L];
        const O = o.indexToGraph[I];
        if (M != O) {
            const q = Lp(P.sourceId, P.targetId, o);
            for(var _ = o.graphSet[q], N = 0, g = o.layoutNodes[L]; _.indexOf(g.id) === -1;){
                g = o.layoutNodes[o.idToIndex[g.parentId]];
                N++;
            }
            for(g = o.layoutNodes[I]; _.indexOf(g.id) === -1;){
                g = o.layoutNodes[o.idToIndex[g.parentId]];
                N++;
            }
            A *= N * options.nestingFactor;
        }
        P.idealLength = A;
        P.elasticity = R;
        o.layoutEdges.push(P);
    }
    return o;
};
var Lp = (sourceId, targetId, a)=>{
    const n = nf(sourceId, targetId, 0, a);
    if (n.count < 2) {
        return 0;
    }
    return n.graph;
};
var nf = (e, t, graph, n)=>{
    const i = n.graphSet[graph];
    if (-1 < i.indexOf(e) && -1 < i.indexOf(t)) {
        return {
            count: 2,
            graph
        };
    }
    let count = 0;
    for (const u of i){
        const l = n.idToIndex[u];
        const v = n.layoutNodes[l].children;
        if (v.length !== 0) {
            const f = n.indexToGraph[n.idToIndex[v[0]]];
            const c = nf(e, t, f, n);
            if (c.count !== 0) {
                if (c.count === 1) {
                    count++;
                    if (count === 2) {
                        break;
                    }
                } else {
                    return c;
                }
            }
        }
    }
    return {
        count,
        graph
    };
};
var Ip;
var Op = (e, t)=>{
    const { clientWidth, clientHeight } = e;
    for(let i = 0; i < e.nodeSize; i++){
        const s = e.layoutNodes[i];
        if (s.children.length === 0 && !s.isLocked) {
            s.positionX = Math.random() * clientWidth;
            s.positionY = Math.random() * clientHeight;
        }
    }
};
var sf = (e, options, a)=>{
    const e_boundingBox = e.boundingBox;
    const i = {
        x1: Infinity,
        x2: -Infinity,
        y1: Infinity,
        y2: -Infinity
    };
    if (options.boundingBox) {
        a.forEach((s)=>{
            const o = e.layoutNodes[e.idToIndex[s.data("id")]];
            i.x1 = Math.min(i.x1, o.positionX);
            i.x2 = Math.max(i.x2, o.positionX);
            i.y1 = Math.min(i.y1, o.positionY);
            i.y2 = Math.max(i.y2, o.positionY);
        });
        i.w = i.x2 - i.x1;
        i.h = i.y2 - i.y1;
    }
    return (s, o)=>{
        const u = e.layoutNodes[e.idToIndex[s.data("id")]];
        if (options.boundingBox) {
            const l = i.w === 0 ? 0.5 : (u.positionX - i.x1) / i.w;
            const v = i.h === 0 ? 0.5 : (u.positionY - i.y1) / i.h;
            return {
                x: e_boundingBox.x1 + l * e_boundingBox.w,
                y: e_boundingBox.y1 + v * e_boundingBox.h
            };
        } else {
            return {
                x: u.positionX,
                y: u.positionY
            };
        }
    };
};
var Np = function(e, t, options) {
    const a_layout = options.layout;
    const i = options.eles.nodes();
    const s = sf(e, options, i);
    i.positions(s);
    if (e.ready !== true) {
        e.ready = true;
        a_layout.one("layoutready", options.ready);
        a_layout.emit({
            type: "layoutready",
            layout: this
        });
    }
};
var zp = (e, options, a)=>{
    Fp(e, options);
    _p(e);
    Gp(e, options);
    Hp(e);
    Wp(e);
};
var Fp = (e, options)=>{
    for(let a = 0; a < e.graphSet.length; a++){
        const n = e.graphSet[a];
        for(let i = n.length, s = 0; s < i; s++){
            const o = e.layoutNodes[e.idToIndex[n[s]]];
            for(let u = s + 1; u < i; u++){
                const l = e.layoutNodes[e.idToIndex[n[u]]];
                Vp(o, l, e, options);
            }
        }
    }
};
const Cl = (e)=>-1 + 2 * e * Math.random();
var Vp = (e, t, a, n)=>{
    const e_cmptId = e.cmptId;
    const t_cmptId = t.cmptId;
    if (!(e_cmptId !== t_cmptId && !a.isCompound)) {
        let o = t.positionX - e.positionX;
        let u = t.positionY - e.positionY;
        const l = 1;
        if (o === 0 && u === 0) {
            o = Cl(l);
            u = Cl(l);
        }
        const v = qp(e, t, o, u);
        if (v > 0) {
            var f = n.nodeOverlap * v;
            var c = Math.sqrt(o * o + u * u);
            var h = f * o / c;
            var d = f * u / c;
        } else {
            const y = Sn(e, o, u);
            const g = Sn(t, -1 * o, -1 * u);
            const p = g.x - y.x;
            const m = g.y - y.y;
            const b = p * p + m * m;
            var c = Math.sqrt(b);
            var f = (e.nodeRepulsion + t.nodeRepulsion) / b;
            var h = f * p / c;
            var d = f * m / c;
        }
        if (!e.isLocked) {
            e.offsetX -= h;
            e.offsetY -= d;
        }
        if (!t.isLocked) {
            t.offsetX += h;
            t.offsetY += d;
        }
    }
};
var qp = (e, t, a, n)=>{
    if (a > 0) var i = e.maxX - t.minX;
    else {
        var i = t.maxX - e.minX;
    }
    if (n > 0) var s = e.maxY - t.minY;
    else {
        var s = t.maxY - e.minY;
    }
    if (i >= 0 && s >= 0) {
        return Math.sqrt(i * i + s * s);
    }
    return 0;
};
var Sn = (e, t, a)=>{
    const { positionX, positionY } = e;
    const s = e.height || 1;
    const o = e.width || 1;
    const u = a / t;
    const l = s / o;
    const v = {};
    if (t === 0 && a > 0 || t === 0 && a < 0) {
        v.x = positionX;
        v.y = positionY + s / 2;
        return v;
    }
    if (t > 0 && -1 * l <= u && u <= l) {
        v.x = positionX + o / 2;
        v.y = positionY + o * a / 2 / t;
        return v;
    }
    if (t < 0 && -1 * l <= u && u <= l) {
        v.x = positionX - o / 2;
        v.y = positionY - o * a / 2 / t;
        return v;
    }
    if (a > 0 && (u <= -1 * l || u >= l)) {
        v.x = positionX + s * t / 2 / a;
        v.y = positionY + s / 2;
        return v;
    }
    if (a < 0 && (u <= -1 * l || u >= l)) {
        v.x = positionX - s * t / 2 / a;
        v.y = positionY - s / 2;
    }
    return v;
};
var _p = (e, t)=>{
    for(let a = 0; a < e.edgeSize; a++){
        const n = e.layoutEdges[a];
        const i = e.idToIndex[n.sourceId];
        const s = e.layoutNodes[i];
        const o = e.idToIndex[n.targetId];
        const u = e.layoutNodes[o];
        const l = u.positionX - s.positionX;
        const v = u.positionY - s.positionY;
        if (!(l === 0 && v === 0)) {
            const f = Sn(s, l, v);
            const c = Sn(u, -1 * l, -1 * v);
            const h = c.x - f.x;
            const d = c.y - f.y;
            const y = Math.sqrt(h * h + d * d);
            const g = (n.idealLength - y) ** 2 / n.elasticity;
            if (y !== 0) {
                var p = g * h / y;
                var m = g * d / y;
            } else {
                var p = 0;
                var m = 0;
            }
            if (!s.isLocked) {
                s.offsetX += p;
                s.offsetY += m;
            }
            if (!u.isLocked) {
                u.offsetX -= p;
                u.offsetY -= m;
            }
        }
    }
};
var Gp = (e, options)=>{
    if (options.gravity !== 0) {
        const a = 1;
        for(let n = 0; n < e.graphSet.length; n++){
            const i = e.graphSet[n];
            const s = i.length;
            if (n === 0) {
                var o = e.clientHeight / 2;
                var u = e.clientWidth / 2;
            } else {
                const l = e.layoutNodes[e.idToIndex[i[0]]];
                const v = e.layoutNodes[e.idToIndex[l.parentId]];
                var o = v.positionX;
                var u = v.positionY;
            }
            for(let f = 0; f < s; f++){
                const c = e.layoutNodes[e.idToIndex[i[f]]];
                if (!c.isLocked) {
                    const h = o - c.positionX;
                    const d = u - c.positionY;
                    const y = Math.sqrt(h * h + d * d);
                    if (y > a) {
                        const g = options.gravity * h / y;
                        const p = options.gravity * d / y;
                        c.offsetX += g;
                        c.offsetY += p;
                    }
                }
            }
        }
    }
};
var Hp = (e, t)=>{
    const a = [];
    let n = 0;
    let i = -1;
    a.push(...e.graphSet[0]);
    for(i += e.graphSet[0].length; n <= i;){
        const s = a[n++];
        const o = e.idToIndex[s];
        const u = e.layoutNodes[o];
        const l = u.children;
        if (l.length > 0 && !u.isLocked) {
            const { offsetX, offsetY } = u;
            for(let c = 0; c < l.length; c++){
                const h = e.layoutNodes[e.idToIndex[l[c]]];
                h.offsetX += offsetX;
                h.offsetY += offsetY;
                a[++i] = l[c];
            }
            u.offsetX = 0;
            u.offsetY = 0;
        }
    }
};
var Wp = (e, t)=>{
    for(var a = 0; a < e.nodeSize; a++){
        var n = e.layoutNodes[a];
        if (n.children.length > 0) {
            n.maxX = undefined;
            n.minX = undefined;
            n.maxY = undefined;
            n.minY = undefined;
        }
    }
    for(var a = 0; a < e.nodeSize; a++){
        var n = e.layoutNodes[a];
        if (!(n.children.length > 0 || n.isLocked)) {
            const i = $p(n.offsetX, n.offsetY, e.temperature);
            n.positionX += i.x;
            n.positionY += i.y;
            n.offsetX = 0;
            n.offsetY = 0;
            n.minX = n.positionX - n.width;
            n.maxX = n.positionX + n.width;
            n.minY = n.positionY - n.height;
            n.maxY = n.positionY + n.height;
            of(n, e);
        }
    }
    for(var a = 0; a < e.nodeSize; a++){
        var n = e.layoutNodes[a];
        if (n.children.length > 0 && !n.isLocked) {
            n.positionX = (n.maxX + n.minX) / 2;
            n.positionY = (n.maxY + n.minY) / 2;
            n.width = n.maxX - n.minX;
            n.height = n.maxY - n.minY;
        }
    }
};
var $p = (offsetX, offsetY, temperature)=>{
    const n = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
    if (n > temperature) var i = {
        x: temperature * offsetX / n,
        y: temperature * offsetY / n
    };
    else {
        var i = {
            x: offsetX,
            y: offsetY
        };
    }
    return i;
};
var of = (e, t)=>{
    const e_parentId = e.parentId;
    if (e_parentId != null) {
        const n = t.layoutNodes[t.idToIndex[e_parentId]];
        let i = false;
        if (n.maxX == null || e.maxX + n.padRight > n.maxX) {
            n.maxX = e.maxX + n.padRight;
            i = true;
        }
        if (n.minX == null || e.minX - n.padLeft < n.minX) {
            n.minX = e.minX - n.padLeft;
            i = true;
        }
        if (n.maxY == null || e.maxY + n.padBottom > n.maxY) {
            n.maxY = e.maxY + n.padBottom;
            i = true;
        }
        if (n.minY == null || e.minY - n.padTop < n.minY) {
            n.minY = e.minY - n.padTop;
            i = true;
        }
        if (i) {
            return of(n, t);
        }
    }
};
var Tl = (e, options)=>{
    for(var a = e.layoutNodes, n = [], i = 0; i < a.length; i++){
        const s = a[i];
        const o = s.cmptId;
        const u = n[o] = n[o] || [];
        u.push(s);
    }
    let l = 0;
    for(var i = 0; i < n.length; i++){
        var v = n[i];
        if (v) {
            v.x1 = Infinity;
            v.x2 = -Infinity;
            v.y1 = Infinity;
            v.y2 = -Infinity;
            for(var f = 0; f < v.length; f++){
                var c = v[f];
                v.x1 = Math.min(v.x1, c.positionX - c.width / 2);
                v.x2 = Math.max(v.x2, c.positionX + c.width / 2);
                v.y1 = Math.min(v.y1, c.positionY - c.height / 2);
                v.y2 = Math.max(v.y2, c.positionY + c.height / 2);
            }
            v.w = v.x2 - v.x1;
            v.h = v.y2 - v.y1;
            l += v.w * v.h;
        }
    }
    n.sort((m, b)=>b.w * b.h - m.w * m.h);
    let h = 0;
    let d = 0;
    let y = 0;
    let g = 0;
    const p = Math.sqrt(l) * e.clientWidth / e.clientHeight;
    for(var i = 0; i < n.length; i++){
        var v = n[i];
        if (v) {
            for(var f = 0; f < v.length; f++){
                var c = v[f];
                if (!c.isLocked) {
                    c.positionX += h - v.x1;
                    c.positionY += d - v.y1;
                }
            }
            h += v.w + options.componentSpacing;
            y += v.w + options.componentSpacing;
            g = Math.max(g, v.h);
            if (y > p) {
                d += g + options.componentSpacing;
                h = 0;
                y = 0;
                g = 0;
            }
        }
    }
};
const Up = {
    fit: true,
    padding: 30,
    boundingBox: undefined,
    avoidOverlap: true,
    avoidOverlapPadding: 10,
    nodeDimensionsIncludeLabels: false,
    spacingFactor: undefined,
    condense: false,
    rows: undefined,
    cols: undefined,
    position (e) {},
    sort: undefined,
    animate: false,
    animationDuration: 500,
    animationEasing: undefined,
    animateFilter (e, t) {
        return true;
    },
    ready: undefined,
    stop: undefined,
    transform (e, t) {
        return t;
    }
};
class uf {
    constructor(r){
        this.options = ye({}, Up, r);
    }
    run() {
        const options = this.options;
        const e = options;
        const options_cy = options.cy;
        const e_eles = e.eles;
        let n = e_eles.nodes().not(":parent");
        if (e.sort) {
            n = n.sort(e.sort);
        }
        const i = yr(e.boundingBox ? e.boundingBox : {
            x1: 0,
            y1: 0,
            w: options_cy.width(),
            h: options_cy.height()
        });
        if (i.h === 0 || i.w === 0) {
            e_eles.nodes().layoutPositions(this, e, (U)=>({
                    x: i.x1,
                    y: i.y1
                }));
        } else {
            const s = n.size();
            const o = Math.sqrt(s * i.h / i.w);
            let u = Math.round(o);
            let l = Math.round(i.w / i.h * o);
            const v = (J)=>{
                if (J == null) {
                    return Math.min(u, l);
                }
                const Z = Math.min(u, l);
                if (Z == u) {
                    u = J;
                } else {
                    l = J;
                }
            };
            const f = (J)=>{
                if (J == null) {
                    return Math.max(u, l);
                }
                const Z = Math.max(u, l);
                if (Z == u) {
                    u = J;
                } else {
                    l = J;
                }
            };
            const c = e.rows;
            const h = e.cols ?? e.columns;
            if (c != null && h != null) {
                u = c;
                l = h;
            } else if (c != null && h == null) {
                u = c;
                l = Math.ceil(s / u);
            } else if (c == null && h != null) {
                l = h;
                u = Math.ceil(s / l);
            } else if (l * u > s) {
                const d = v();
                const y = f();
                if ((d - 1) * y >= s) {
                    v(d - 1);
                } else if ((y - 1) * d >= s) {
                    f(y - 1);
                }
            } else {
                while(l * u < s){
                    const g = v();
                    const p = f();
                    if ((p + 1) * g >= s) {
                        f(p + 1);
                    } else {
                        v(g + 1);
                    }
                }
            }
            let m = i.w / l;
            let b = i.h / u;
            if (e.condense) {
                m = 0;
                b = 0;
            }
            if (e.avoidOverlap) {
                for (const E of n){
                    const C = E._private.position;
                    if (C.x == null || C.y == null) {
                        C.x = 0;
                        C.y = 0;
                    }
                    const x = E.layoutDimensions(e);
                    const T = e.avoidOverlapPadding;
                    const k = x.w + T;
                    const D = x.h + T;
                    m = Math.max(m, k);
                    b = Math.max(b, D);
                }
            }
            const B = {};
            const P = (J, Z)=>!!B[`c-${J}-${Z}`];
            const A = (J, Z)=>{
                B[`c-${J}-${Z}`] = true;
            };
            let R = 0;
            let L = 0;
            const I = ()=>{
                L++;
                if (L >= l) {
                    L = 0;
                    R++;
                }
            };
            const M = {};
            for (const q of n){
                const _ = e.position(q);
                if (_ && (_.row !== undefined || _.col !== undefined)) {
                    const N = {
                        row: _.row,
                        col: _.col
                    };
                    if (N.col === undefined) {
                        for(N.col = 0; P(N.row, N.col);){
                            N.col++;
                        }
                    } else if (N.row === undefined) {
                        for(N.row = 0; P(N.row, N.col);){
                            N.row++;
                        }
                    }
                    M[q.id()] = N;
                    A(N.row, N.col);
                }
            }
            const F = (J, Z)=>{
                let j;
                let re;
                if (J.locked() || J.isParent()) {
                    return false;
                }
                const ne = M[J.id()];
                if (ne) {
                    j = ne.col * m + m / 2 + i.x1;
                    re = ne.row * b + b / 2 + i.y1;
                } else {
                    while(P(R, L)){
                        I();
                    }
                    j = L * m + m / 2 + i.x1;
                    re = R * b + b / 2 + i.y1;
                    A(R, L);
                    I();
                }
                return {
                    x: j,
                    y: re
                };
            };
            n.layoutPositions(this, e, F);
        }
        return this;
    }
}
const Kp = {
    ready () {},
    stop () {}
};
class fo {
    constructor(r){
        this.options = ye({}, Kp, r);
    }
    run() {
        const options = this.options;
        const r_eles = options.eles;
        const t = this;
        options.cy;
        t.emit("layoutstart");
        r_eles.nodes().positions(()=>({
                x: 0,
                y: 0
            }));
        t.one("layoutready", options.ready);
        t.emit("layoutready");
        t.one("layoutstop", options.stop);
        t.emit("layoutstop");
        return this;
    }
    stop() {
        return this;
    }
}
const Xp = {
    positions: undefined,
    zoom: undefined,
    pan: undefined,
    fit: true,
    padding: 30,
    spacingFactor: undefined,
    animate: false,
    animationDuration: 500,
    animationEasing: undefined,
    animateFilter (e, t) {
        return true;
    },
    ready: undefined,
    stop: undefined,
    transform (e, t) {
        return t;
    }
};
class lf {
    constructor(r){
        this.options = ye({}, Xp, r);
    }
    run() {
        const options = this.options;
        const r_eles = options.eles;
        const t = r_eles.nodes();
        const a = $e(options.positions);
        function n(i) {
            if (options.positions == null) {
                return pd(i.position());
            }
            if (a) {
                return options.positions(i);
            }
            const s = options.positions[i._private.data.id];
            return s ?? null;
        }
        t.layoutPositions(this, options, (i, s)=>{
            const o = n(i);
            if (i.locked() || o == null) {
                return false;
            }
            return o;
        });
        return this;
    }
}
const Yp = {
    fit: true,
    padding: 30,
    boundingBox: undefined,
    animate: false,
    animationDuration: 500,
    animationEasing: undefined,
    animateFilter (e, t) {
        return true;
    },
    ready: undefined,
    stop: undefined,
    transform (e, t) {
        return t;
    }
};
class vf {
    constructor(r){
        this.options = ye({}, Yp, r);
    }
    run() {
        const options = this.options;
        const { cy, eles } = options;
        const a = yr(options.boundingBox ? options.boundingBox : {
            x1: 0,
            y1: 0,
            w: cy.width(),
            h: cy.height()
        });
        const n = (s, o)=>({
                x: a.x1 + Math.round(Math.random() * a.w),
                y: a.y1 + Math.round(Math.random() * a.h)
            });
        eles.nodes().layoutPositions(this, options, n);
        return this;
    }
}
const Zp = [
    {
        name: "breadthfirst",
        impl: rf
    },
    {
        name: "circle",
        impl: tf
    },
    {
        name: "concentric",
        impl: af
    },
    {
        name: "cose",
        impl: $n
    },
    {
        name: "grid",
        impl: uf
    },
    {
        name: "null",
        impl: fo
    },
    {
        name: "preset",
        impl: lf
    },
    {
        name: "random",
        impl: vf
    }
];
function ff(r) {
    this.options = r;
    this.notifications = 0;
}
const Sl = ()=>{};
const kl = ()=>{
    throw new Error("A headless instance can not render images");
};
ff.prototype = {
    recalculateRenderedStyle: Sl,
    notify () {
        this.notifications++;
    },
    init: Sl,
    isHeadless () {
        return true;
    },
    png: kl,
    jpg: kl
};
const co = {};
co.arrowShapeWidth = 0.3;
co.registerArrowShapes = function() {
    const r = this.arrowShapes = {};
    const e = this;
    const roughCollide = (l, v, f, c, h, d, y)=>{
        const g = h.x - f / 2 - y;
        const p = h.x + f / 2 + y;
        const m = h.y - f / 2 - y;
        const b = h.y + f / 2 + y;
        const w = g <= l && l <= p && m <= v && v <= b;
        return w;
    };
    const a = (l, v, f, c, h)=>{
        const d = l * Math.cos(c) - v * Math.sin(c);
        const y = l * Math.sin(c) + v * Math.cos(c);
        const g = d * f;
        const p = y * f;
        const m = g + h.x;
        const b = p + h.y;
        return {
            x: m,
            y: b
        };
    };
    const n = (l, v, f, c)=>{
        const h = [];
        for(let d = 0; d < l.length; d += 2){
            const y = l[d];
            const g = l[d + 1];
            h.push(a(y, g, v, f, c));
        }
        return h;
    };
    const i = (l)=>{
        const v = [];
        for (const c of l){
            v.push(c.x, c.y);
        }
        return v;
    };
    const gap = (l)=>l.pstyle("width").pfValue * l.pstyle("arrow-scale").pfValue * 2;
    const o = (l, v)=>{
        if (he(v)) {
            v = r[v];
        }
        r[l] = ye({
            name: l,
            points: [
                -0.15,
                -0.3,
                0.15,
                -0.3,
                0.15,
                0.3,
                -0.15,
                0.3
            ],
            collide (c, h, d, y, g, p) {
                const m = i(n(this.points, d + 2 * p, y, g));
                const b = Er(c, h, m);
                return b;
            },
            roughCollide,
            draw (c, h, d, y) {
                const g = n(this.points, h, d, y);
                e.arrowShapeImpl("polygon")(c, g);
            },
            spacing (c) {
                return 0;
            },
            gap
        }, v);
    };
    o("none", {
        collide: bn,
        roughCollide: bn,
        draw: Qs,
        spacing: qo,
        gap: qo
    });
    o("triangle", {
        points: [
            -0.15,
            -0.3,
            0,
            0,
            0.15,
            -0.3
        ]
    });
    o("arrow", "triangle");
    o("triangle-backcurve", {
        points: r.triangle.points,
        controlPoint: [
            0,
            -0.15
        ],
        roughCollide,
        draw (l, v, f, c, h) {
            const d = n(this.points, v, f, c);
            const controlPoint = this.controlPoint;
            const g = a(controlPoint[0], controlPoint[1], v, f, c);
            e.arrowShapeImpl(this.name)(l, d, g);
        },
        gap (l) {
            return gap(l) * 0.8;
        }
    });
    o("triangle-tee", {
        points: [
            0,
            0,
            0.15,
            -0.3,
            -0.15,
            -0.3,
            0,
            0
        ],
        pointsTee: [
            -0.15,
            -0.4,
            -0.15,
            -0.5,
            0.15,
            -0.5,
            0.15,
            -0.4
        ],
        collide (l, v, f, c, h, d, y) {
            const g = i(n(this.points, f + 2 * y, c, h));
            const p = i(n(this.pointsTee, f + 2 * y, c, h));
            const m = Er(l, v, g) || Er(l, v, p);
            return m;
        },
        draw (l, v, f, c, h) {
            const d = n(this.points, v, f, c);
            const y = n(this.pointsTee, v, f, c);
            e.arrowShapeImpl(this.name)(l, d, y);
        }
    });
    o("circle-triangle", {
        radius: 0.15,
        pointsTr: [
            0,
            -0.15,
            0.15,
            -0.45,
            -0.15,
            -0.45,
            0,
            -0.15
        ],
        collide (l, v, f, c, h, d, y) {
            const g = h;
            const p = (g.x - l) ** 2 + (g.y - v) ** 2 <= ((f + 2 * y) * this.radius) ** 2;
            const m = i(n(this.points, f + 2 * y, c, h));
            return Er(l, v, m) || p;
        },
        draw (l, v, f, c, h) {
            const d = n(this.pointsTr, v, f, c);
            e.arrowShapeImpl(this.name)(l, d, c.x, c.y, this.radius * v);
        },
        spacing (l) {
            return e.getArrowWidth(l.pstyle("width").pfValue, l.pstyle("arrow-scale").value) * this.radius;
        }
    });
    o("triangle-cross", {
        points: [
            0,
            0,
            0.15,
            -0.3,
            -0.15,
            -0.3,
            0,
            0
        ],
        baseCrossLinePts: [
            -0.15,
            -0.4,
            -0.15,
            -0.4,
            0.15,
            -0.4,
            0.15,
            -0.4
        ],
        crossLinePts (l, v) {
            const f = this.baseCrossLinePts.slice();
            const c = v / l;
            const h = 3;
            const d = 5;
            f[h] = f[h] - c;
            f[d] = f[d] - c;
            return f;
        },
        collide (l, v, f, c, h, d, y) {
            const g = i(n(this.points, f + 2 * y, c, h));
            const p = i(n(this.crossLinePts(f, d), f + 2 * y, c, h));
            const m = Er(l, v, g) || Er(l, v, p);
            return m;
        },
        draw (l, v, f, c, h) {
            const d = n(this.points, v, f, c);
            const y = n(this.crossLinePts(v, h), v, f, c);
            e.arrowShapeImpl(this.name)(l, d, y);
        }
    });
    o("vee", {
        points: [
            -0.15,
            -0.3,
            0,
            0,
            0.15,
            -0.3,
            0,
            -0.15
        ],
        gap (l) {
            return gap(l) * 0.525;
        }
    });
    o("circle", {
        radius: 0.15,
        collide (l, v, f, c, h, d, y) {
            const g = h;
            const p = (g.x - l) ** 2 + (g.y - v) ** 2 <= ((f + 2 * y) * this.radius) ** 2;
            return p;
        },
        draw (l, v, f, c, h) {
            e.arrowShapeImpl(this.name)(l, c.x, c.y, this.radius * v);
        },
        spacing (l) {
            return e.getArrowWidth(l.pstyle("width").pfValue, l.pstyle("arrow-scale").value) * this.radius;
        }
    });
    o("tee", {
        points: [
            -0.15,
            0,
            -0.15,
            -0.1,
            0.15,
            -0.1,
            0.15,
            0
        ],
        spacing (l) {
            return 1;
        },
        gap (l) {
            return 1;
        }
    });
    o("square", {
        points: [
            -0.15,
            0,
            0.15,
            0,
            0.15,
            -0.3,
            -0.15,
            -0.3
        ]
    });
    o("diamond", {
        points: [
            -0.15,
            -0.15,
            0,
            -0.3,
            0.15,
            -0.15,
            0,
            0
        ],
        gap (l) {
            return l.pstyle("width").pfValue * l.pstyle("arrow-scale").value;
        }
    });
    o("chevron", {
        points: [
            0,
            0,
            -0.15,
            -0.15,
            -0.1,
            -0.2,
            0,
            -0.1,
            0.1,
            -0.2,
            0.15,
            -0.15
        ],
        gap (l) {
            return 0.95 * l.pstyle("width").pfValue * l.pstyle("arrow-scale").value;
        }
    });
};
const Rt = {};
Rt.projectIntoViewport = function(r, e) {
    const t = this.cy;
    const a = this.findContainerClientCoords();
    const n = a[0];
    const i = a[1];
    const s = a[4];
    const o = t.pan();
    const u = t.zoom();
    const l = ((r - n) / s - o.x) / u;
    const v = ((e - i) / s - o.y) / u;
    return [
        l,
        v
    ];
};
Rt.findContainerClientCoords = function() {
    if (this.containerBB) {
        return this.containerBB;
    }
    const container = this.container;
    const e = container.getBoundingClientRect();
    const t = this.cy.window().getComputedStyle(container);
    const a = (p)=>parseFloat(t.getPropertyValue(p));
    const n = {
        left: a("padding-left"),
        right: a("padding-right"),
        top: a("padding-top"),
        bottom: a("padding-bottom")
    };
    const i = {
        left: a("border-left-width"),
        right: a("border-right-width"),
        top: a("border-top-width"),
        bottom: a("border-bottom-width")
    };
    const { clientWidth, clientHeight } = container;
    const u = n.left + n.right;
    const l = n.top + n.bottom;
    const v = i.left + i.right;
    const f = e.width / (clientWidth + v);
    const c = clientWidth - u;
    const h = clientHeight - l;
    const d = e.left + n.left + i.left;
    const y = e.top + n.top + i.top;
    return this.containerBB = [
        d,
        y,
        c,
        h,
        f
    ];
};
Rt.invalidateContainerClientCoordsCache = function() {
    this.containerBB = null;
};
Rt.findNearestElement = function(r, e, t, a) {
    return this.findNearestElements(r, e, t, a)[0];
};
Rt.findNearestElements = function(r, e, t, a) {
    const n = this;
    const i = this;
    let s = i.getCachedZSortedEles();
    const o = [];
    const u = i.cy.zoom();
    const l = i.cy.hasCompoundNodes();
    const v = (a ? 24 : 8) / u;
    const f = (a ? 8 : 2) / u;
    const c = (a ? 8 : 2) / u;
    let h = Infinity;
    let d;
    let y;
    if (t) {
        s = s.interactive;
    }
    function g(x, T) {
        if (x.isNode()) {
            if (y) {
                return;
            }
            y = x;
            o.push(x);
        }
        if (x.isEdge() && (T == null || T < h)) {
            if (d) {
                if (d.pstyle("z-compound-depth").value === x.pstyle("z-compound-depth").value && d.pstyle("z-compound-depth").value === x.pstyle("z-compound-depth").value) {
                    for(let k = 0; k < o.length; k++){
                        if (o[k].isEdge()) {
                            o[k] = x;
                            d = x;
                            h = T ?? h;
                            break;
                        }
                    }
                }
            } else {
                o.push(x);
                d = x;
                h = T ?? h;
            }
        }
    }
    function p(x) {
        const T = x.outerWidth() + 2 * f;
        const k = x.outerHeight() + 2 * f;
        const D = T / 2;
        const B = k / 2;
        const P = x.position();
        const A = x.pstyle("corner-radius").value === "auto" ? "auto" : x.pstyle("corner-radius").pfValue;
        const rscratch = x._private.rscratch;
        if (P.x - D <= r && r <= P.x + D && P.y - B <= e && e <= P.y + B) {
            const L = i.nodeShapes[n.getNodeShape(x)];
            if (L.checkPoint(r, e, 0, T, k, P.x, P.y, A, rscratch)) {
                g(x, 0);
                return true;
            }
        }
    }
    function m(x) {
        const x__private = x._private;
        const T_rscratch = x__private.rscratch;
        const pfValue = x.pstyle("width").pfValue;
        const value = x.pstyle("arrow-scale").value;
        const P = pfValue / 2 + v;
        const A = P * P;
        const R = P * 2;
        var T_source = x__private.source;
        var T_target = x__private.target;
        let L;
        if (T_rscratch.edgeType === "segments" || T_rscratch.edgeType === "straight" || T_rscratch.edgeType === "haystack") {
            for(var I = T_rscratch.allpts, M = 0; M + 3 < I.length; M += 2){
                if (Ad(r, e, I[M], I[M + 1], I[M + 2], I[M + 3], R) && A > (L = Od(r, e, I[M], I[M + 1], I[M + 2], I[M + 3]))) {
                    g(x, L);
                    return true;
                }
            }
        } else if (T_rscratch.edgeType === "bezier" || T_rscratch.edgeType === "multibezier" || T_rscratch.edgeType === "self" || T_rscratch.edgeType === "compound") {
            var I = T_rscratch.allpts;
            for(var M = 0; M + 5 < T_rscratch.allpts.length; M += 4){
                if (Rd(r, e, I[M], I[M + 1], I[M + 2], I[M + 3], I[M + 4], I[M + 5], R) && A > (L = Id(r, e, I[M], I[M + 1], I[M + 2], I[M + 3], I[M + 4], I[M + 5]))) {
                    g(x, L);
                    return true;
                }
            }
        }
        var T_source = T_source || x__private.source;
        var T_target = T_target || x__private.target;
        const _ = n.getArrowWidth(pfValue, value);
        for(var N = [
            {
                name: "source",
                x: T_rscratch.arrowStartX,
                y: T_rscratch.arrowStartY,
                angle: T_rscratch.srcArrowAngle
            },
            {
                name: "target",
                x: T_rscratch.arrowEndX,
                y: T_rscratch.arrowEndY,
                angle: T_rscratch.tgtArrowAngle
            },
            {
                name: "mid-source",
                x: T_rscratch.midX,
                y: T_rscratch.midY,
                angle: T_rscratch.midsrcArrowAngle
            },
            {
                name: "mid-target",
                x: T_rscratch.midX,
                y: T_rscratch.midY,
                angle: T_rscratch.midtgtArrowAngle
            }
        ], M = 0; M < N.length; M++){
            const F = N[M];
            const U = i.arrowShapes[x.pstyle(`${F.name}-arrow-shape`).value];
            const J = x.pstyle("width").pfValue;
            if (U.roughCollide(r, e, _, F.angle, {
                x: F.x,
                y: F.y
            }, J, v) && U.collide(r, e, _, F.angle, {
                x: F.x,
                y: F.y
            }, J, v)) {
                g(x);
                return true;
            }
        }
        if (l && o.length > 0) {
            p(T_source);
            p(T_target);
        }
    }
    function b(rscratch, T, k) {
        return xr(rscratch, T, k);
    }
    function w(x, T) {
        const x__private = x._private;
        const D = c;
        let B;
        if (T) {
            B = `${T}-`;
        } else {
            B = "";
        }
        x.boundingBox();
        const P = x__private.labelBounds[T || "main"];
        const value = x.pstyle(`${B}label`).value;
        const R = x.pstyle("text-events").strValue === "yes";
        if (!(!R || !value)) {
            const L = b(x__private.rscratch, "labelX", T);
            const I = b(x__private.rscratch, "labelY", T);
            const M = b(x__private.rscratch, "labelAngle", T);
            const O = x.pstyle(`${B}text-margin-x`).pfValue;
            const q = x.pstyle(`${B}text-margin-y`).pfValue;
            const _ = P.x1 - D - O;
            const N = P.x2 + D - O;
            const F = P.y1 - D - q;
            const U = P.y2 + D - q;
            if (M) {
                const J = Math.cos(M);
                const Z = Math.sin(M);
                const j = (Y, te)=>{
                    Y = Y - L;
                    te = te - I;
                    return {
                        x: Y * J - te * Z + L,
                        y: Y * Z + te * J + I
                    };
                };
                const re = j(_, F);
                const ne = j(_, U);
                const Q = j(N, F);
                const V = j(N, U);
                const H = [
                    re.x + O,
                    re.y + q,
                    Q.x + O,
                    Q.y + q,
                    V.x + O,
                    V.y + q,
                    ne.x + O,
                    ne.y + q
                ];
                if (Er(r, e, H)) {
                    g(x);
                    return true;
                }
            } else if (at(P, r, e)) {
                g(x);
                return true;
            }
        }
    }
    for(let E = s.length - 1; E >= 0; E--){
        const C = s[E];
        C.isNode() ? p(C) || w(C) : m(C) || w(C) || w(C, "source") || w(C, "target");
    }
    return o;
};
Rt.getAllInBox = function(r, e, t, a) {
    const interactive = this.getCachedZSortedEles().interactive;
    const i = this.cy.zoom();
    const s = 2 / i;
    const o = [];
    const u = Math.min(r, t);
    const l = Math.max(r, t);
    const v = Math.min(e, a);
    const f = Math.max(e, a);
    r = u;
    t = l;
    e = v;
    a = f;
    const c = yr({
        x1: r,
        y1: e,
        x2: t,
        y2: a
    });
    const h = [
        {
            x: c.x1,
            y: c.y1
        },
        {
            x: c.x2,
            y: c.y1
        },
        {
            x: c.x2,
            y: c.y2
        },
        {
            x: c.x1,
            y: c.y2
        }
    ];
    const d = [
        [
            h[0],
            h[1]
        ],
        [
            h[1],
            h[2]
        ],
        [
            h[2],
            h[3]
        ],
        [
            h[3],
            h[0]
        ]
    ];
    function y(rscratch, te, ce) {
        return xr(rscratch, te, ce);
    }
    function g(Y, te) {
        const Y__private = Y._private;
        const Be = s;
        const we = "";
        Y.boundingBox();
        const main = Y__private.labelBounds.main;
        if (!main) {
            return null;
        }
        const ge = y(Y__private.rscratch, "labelX", te);
        const se = y(Y__private.rscratch, "labelY", te);
        const de = y(Y__private.rscratch, "labelAngle", te);
        const pfValue = Y.pstyle(`${we}text-margin-x`).pfValue;
        const pfValue_1 = Y.pstyle(`${we}text-margin-y`).pfValue;
        const be = main.x1 - Be - pfValue;
        const Se = main.x2 + Be - pfValue;
        const De = main.y1 - Be - pfValue_1;
        const Oe = main.y2 + Be - pfValue_1;
        if (de) {
            const Le = Math.cos(de);
            const Ae = Math.sin(de);
            const X = (z, G)=>{
                z = z - ge;
                G = G - se;
                return {
                    x: z * Le - G * Ae + ge,
                    y: z * Ae + G * Le + se
                };
            };
            return [
                X(be, De),
                X(Se, De),
                X(Se, Oe),
                X(be, Oe)
            ];
        } else {
            return [
                {
                    x: be,
                    y: De
                },
                {
                    x: Se,
                    y: De
                },
                {
                    x: Se,
                    y: Oe
                },
                {
                    x: be,
                    y: Oe
                }
            ];
        }
    }
    function p(Y, te, ce, Be) {
        function we(me, ge, se) {
            return (se.y - me.y) * (ge.x - me.x) > (ge.y - me.y) * (se.x - me.x);
        }
        return we(Y, ce, Be) !== we(te, ce, Be) && we(Y, te, ce) !== we(Y, te, Be);
    }
    for (const b of interactive){
        if (b.isNode()) {
            const w = b;
            const E = w.pstyle("text-events").strValue === "yes";
            const C = w.pstyle("box-selection").strValue;
            const x = w.pstyle("box-select-labels").strValue === "yes";
            if (C === "none") {
                continue;
            }
            const T = (C === "overlap" || x) && E;
            const k = w.boundingBox({
                includeNodes: true,
                includeEdges: false,
                includeLabels: T
            });
            if (C === "contain") {
                let D = false;
                if (x && E) {
                    const B = g(w);
                    if (B && gi(B, h)) {
                        o.push(w);
                        D = true;
                    }
                }
                if (!D && yv(c, k)) {
                    o.push(w);
                }
            } else if (C === "overlap" && ro(c, k)) {
                const P = w.boundingBox({
                    includeNodes: true,
                    includeEdges: true,
                    includeLabels: false,
                    includeMainLabels: false,
                    includeSourceLabels: false,
                    includeTargetLabels: false
                });
                const A = [
                    {
                        x: P.x1,
                        y: P.y1
                    },
                    {
                        x: P.x2,
                        y: P.y1
                    },
                    {
                        x: P.x2,
                        y: P.y2
                    },
                    {
                        x: P.x1,
                        y: P.y2
                    }
                ];
                if (gi(A, h)) {
                    o.push(w);
                } else {
                    const R = g(w);
                    if (R && gi(R, h)) {
                        o.push(w);
                    }
                }
            }
        } else {
            const L = b;
            const I = L._private;
            const M = I.rscratch;
            const O = L.pstyle("box-selection").strValue;
            if (O === "none") {
                continue;
            }
            if (O === "contain") {
                if (M.startX != null && M.startY != null && !at(c, M.startX, M.startY) || M.endX != null && M.endY != null && !at(c, M.endX, M.endY)) {
                    continue;
                }
                if (M.edgeType === "bezier" || M.edgeType === "multibezier" || M.edgeType === "self" || M.edgeType === "compound" || M.edgeType === "segments" || M.edgeType === "haystack") {
                    for(var q = I.rstyle.bezierPts || I.rstyle.linePts || I.rstyle.haystackPts, _ = true, N = 0; N < q.length; N++){
                        if (!$o(c, q[N])) {
                            _ = false;
                            break;
                        }
                    }
                    if (_) {
                        o.push(L);
                    }
                } else {
                    if (M.edgeType === "straight") {
                        o.push(L);
                    }
                }
            } else if (O === "overlap") {
                let F = false;
                if (M.startX != null && M.startY != null && M.endX != null && M.endY != null && (at(c, M.startX, M.startY) || at(c, M.endX, M.endY))) {
                    o.push(L);
                    F = true;
                } else if (!F && M.edgeType === "haystack") {
                    for(let U = I.rstyle.haystackPts, J = 0; J < U.length; J++){
                        if ($o(c, U[J])) {
                            o.push(L);
                            F = true;
                            break;
                        }
                    }
                }
                if (!F) {
                    let Z = I.rstyle.bezierPts || I.rstyle.linePts || I.rstyle.haystackPts;
                    if ((!Z || Z.length < 2) && M.edgeType === "straight" && M.startX != null && M.startY != null && M.endX != null && M.endY != null) {
                        Z = [
                            {
                                x: M.startX,
                                y: M.startY
                            },
                            {
                                x: M.endX,
                                y: M.endY
                            }
                        ];
                    }
                    if (!Z || Z.length < 2) {
                        continue;
                    }
                    for(let j = 0; j < Z.length - 1; j++){
                        const re = Z[j];
                        const ne = Z[j + 1];
                        for(let Q = 0; Q < d.length; Q++){
                            const [H, W] = d[Q];
                            if (p(re, ne, H, W)) {
                                o.push(L);
                                F = true;
                                break;
                            }
                        }
                        if (F) {
                            break;
                        }
                    }
                }
            }
        }
    }
    return o;
};
const kn = {};
kn.calculateArrowAngles = (r)=>{
    const rscratch = r._private.rscratch;
    const t = rscratch.edgeType === "haystack";
    const a = rscratch.edgeType === "bezier";
    const n = rscratch.edgeType === "multibezier";
    const i = rscratch.edgeType === "segments";
    const s = rscratch.edgeType === "compound";
    const o = rscratch.edgeType === "self";
    let u;
    let l;
    let v;
    let f;
    let c;
    let h;
    var e_midX;
    var e_midY;
    if (t) {
        v = rscratch.haystackPts[0];
        f = rscratch.haystackPts[1];
        c = rscratch.haystackPts[2];
        h = rscratch.haystackPts[3];
    } else {
        v = rscratch.arrowStartX;
        f = rscratch.arrowStartY;
        c = rscratch.arrowEndX;
        h = rscratch.arrowEndY;
    }
    e_midX = rscratch.midX;
    e_midY = rscratch.midY;
    if (i) {
        u = v - rscratch.segpts[0];
        l = f - rscratch.segpts[1];
    } else if (n || s || o || a) {
        var d = rscratch.allpts;
        var y = nr(d[0], d[2], d[4], 0.1);
        var g = nr(d[1], d[3], d[5], 0.1);
        u = v - y;
        l = f - g;
    } else {
        u = v - e_midX;
        l = f - e_midY;
    }
    rscratch.srcArrowAngle = Ka(u, l);
    var e_midX = rscratch.midX;
    var e_midY = rscratch.midY;
    if (t) {
        e_midX = (v + c) / 2;
        e_midY = (f + h) / 2;
    }
    u = c - v;
    l = h - f;
    if (i) {
        var d = rscratch.allpts;
        if (d.length / 2 % 2 === 0) {
            var b = d.length / 2;
            var w = b - 2;
            u = d[b] - d[w];
            l = d[b + 1] - d[w + 1];
        } else if (rscratch.isRound) {
            u = rscratch.midVector[1];
            l = -rscratch.midVector[0];
        } else {
            var b = d.length / 2 - 1;
            var w = b - 2;
            u = d[b] - d[w];
            l = d[b + 1] - d[w + 1];
        }
    } else if (n || s || o) {
        var d = rscratch.allpts;
        const E = rscratch.ctrlpts;
        let C;
        let x;
        let T;
        let k;
        if (E.length / 2 % 2 === 0) {
            var D = d.length / 2 - 1;
            var B = D + 2;
            var P = B + 2;
            C = nr(d[D], d[B], d[P], 0);
            x = nr(d[D + 1], d[B + 1], d[P + 1], 0);
            T = nr(d[D], d[B], d[P], 0.0001);
            k = nr(d[D + 1], d[B + 1], d[P + 1], 0.0001);
        } else {
            var B = d.length / 2 - 1;
            var D = B - 2;
            var P = B + 2;
            C = nr(d[D], d[B], d[P], 0.4999);
            x = nr(d[D + 1], d[B + 1], d[P + 1], 0.4999);
            T = nr(d[D], d[B], d[P], 0.5);
            k = nr(d[D + 1], d[B + 1], d[P + 1], 0.5);
        }
        u = T - C;
        l = k - x;
    }
    rscratch.midtgtArrowAngle = Ka(u, l);
    rscratch.midDispX = u;
    rscratch.midDispY = l;
    u *= -1;
    l *= -1;
    if (i) {
        var d = rscratch.allpts;
        if (d.length / 2 % 2 !== 0) {
            if (!rscratch.isRound) {
                var b = d.length / 2 - 1;
                const A = b + 2;
                u = -(d[A] - d[b]);
                l = -(d[A + 1] - d[b + 1]);
            }
        }
    }
    rscratch.midsrcArrowAngle = Ka(u, l);
    if (i) {
        u = c - rscratch.segpts[rscratch.segpts.length - 2];
        l = h - rscratch.segpts[rscratch.segpts.length - 1];
    } else if (n || s || o || a) {
        var d = rscratch.allpts;
        const R = d.length;
        var y = nr(d[R - 6], d[R - 4], d[R - 2], 0.9);
        var g = nr(d[R - 5], d[R - 3], d[R - 1], 0.9);
        u = c - y;
        l = h - g;
    } else {
        u = c - e_midX;
        l = h - e_midY;
    }
    rscratch.tgtArrowAngle = Ka(u, l);
};
kn.getArrowWidth = kn.getArrowHeight = function(r, e) {
    const t = this.arrowWidthCache = this.arrowWidthCache || {};
    let a = t[`${r}, ${e}`];
    return a || (a = Math.max((r * 13.37) ** 0.9, 29) * e, t[`${r}, ${e}`] = a, a);
};
let cx;
let Fs;
const Vr = {};
const kr = {};
let Dl;
let Bl;
let Tt;
let counterClockwise;
let $r;
let bt;
let Et;
let zr;
let zt;
let rn;
let startX;
let startY;
let stopX;
let stopY;
let Pl;
const Al = (e, t, a)=>{
    a.x = t.x - e.x;
    a.y = t.y - e.y;
    a.len = Math.sqrt(a.x * a.x + a.y * a.y);
    a.nx = a.x / a.len;
    a.ny = a.y / a.len;
    a.ang = Math.atan2(a.ny, a.nx);
};
const Qp = (e, t)=>{
    t.x = e.x * -1;
    t.y = e.y * -1;
    t.nx = e.nx * -1;
    t.ny = e.ny * -1;
    t.ang = e.ang > 0 ? -(Math.PI - e.ang) : Math.PI + e.ang;
};
const Jp = (e, t, a, n, i)=>{
    if (e !== Pl) {
        Al(t, e, Vr);
    } else {
        Qp(kr, Vr);
    }
    Al(t, a, kr);
    Dl = Vr.nx * kr.ny - Vr.ny * kr.nx;
    Bl = Vr.nx * kr.nx - Vr.ny * -kr.ny;
    $r = Math.asin(Math.max(-1, Math.min(1, Dl)));
    if (Math.abs($r) < 0.000001) {
        cx = t.x;
        Fs = t.y;
        zt = 0;
        Et = 0;
        return;
    }
    Tt = 1;
    counterClockwise = false;
    Bl < 0 ? $r < 0 ? $r = Math.PI + $r : ($r = Math.PI - $r, Tt = -1, counterClockwise = true) : $r > 0 && (Tt = -1, counterClockwise = true);
    if (t.radius !== undefined) {
        zt = t.radius;
    } else {
        zt = n;
    }
    bt = $r / 2;
    rn = Math.min(Vr.len / 2, kr.len / 2);
    if (i) {
        zr = Math.abs(Math.cos(bt) * zt / Math.sin(bt));
        if (zr > rn) {
            zr = rn;
            Et = Math.abs(zr * Math.sin(bt) / Math.cos(bt));
        } else {
            Et = zt;
        }
    } else {
        zr = Math.min(rn, zt);
        Et = Math.abs(zr * Math.sin(bt) / Math.cos(bt));
    }
    stopX = t.x + kr.nx * zr;
    stopY = t.y + kr.ny * zr;
    cx = stopX - kr.ny * Et * Tt;
    Fs = stopY + kr.nx * Et * Tt;
    startX = t.x + Vr.nx * zr;
    startY = t.y + Vr.ny * zr;
    Pl = t;
};
function hf(r, e) {
    if (e.radius === 0) {
        r.lineTo(e.cx, e.cy);
    } else {
        r.arc(e.cx, e.cy, e.radius, e.startAngle, e.endAngle, e.counterClockwise);
    }
}
function ho(r, e, t, a, n = true) {
    if (a === 0 || e.radius === 0) {
        return {
            cx: e.x,
            cy: e.y,
            radius: 0,
            startX: e.x,
            startY: e.y,
            stopX: e.x,
            stopY: e.y,
            startAngle: undefined,
            endAngle: undefined,
            counterClockwise: undefined
        };
    }
    Jp(r, e, t, a, n);
    return {
        cx,
        cy: Fs,
        radius: Et,
        startX,
        startY,
        stopX,
        stopY,
        startAngle: Vr.ang + Math.PI / 2 * Tt,
        endAngle: kr.ang - Math.PI / 2 * Tt,
        counterClockwise
    };
}
const Aa = 0.01;
const jp = Math.sqrt(2 * Aa);
const gr = {};
gr.findMidptPtsEtc = function(r, { posPts, intersectionPts, vectorNormInverse }) {
    let midptPts;
    const s = r.pstyle("source-endpoint");
    const o = r.pstyle("target-endpoint");
    const u = s.units != null && o.units != null;
    const l = (E, C, x, T)=>{
        const k = T - C;
        const D = x - E;
        const B = Math.sqrt(D * D + k * k);
        return {
            x: -k / B,
            y: D / B
        };
    };
    const value = r.pstyle("edge-distances").value;
    switch(value){
        case "node-position":
            midptPts = posPts;
            break;
        case "intersection":
            midptPts = intersectionPts;
            break;
        case "endpoints":
            {
                if (u) {
                    const f = this.manualEndptToPx(r.source()[0], s);
                    const [h, d] = f;
                    const y = this.manualEndptToPx(r.target()[0], o);
                    const [p, m] = y;
                    const b = {
                        x1: h,
                        y1: d,
                        x2: p,
                        y2: m
                    };
                    vectorNormInverse = l(h, d, p, m);
                    midptPts = b;
                } else {
                    ze(`Edge ${r.id()} has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).`);
                    midptPts = intersectionPts;
                }
                break;
            }
    }
    return {
        midptPts,
        vectorNormInverse
    };
};
gr.findHaystackPoints = function(r) {
    for (const t of r){
        const a = t._private;
        const n = a.rscratch;
        if (!n.haystack) {
            let i = Math.random() * 2 * Math.PI;
            n.source = {
                x: Math.cos(i),
                y: Math.sin(i)
            };
            i = Math.random() * 2 * Math.PI;
            n.target = {
                x: Math.cos(i),
                y: Math.sin(i)
            };
        }
        const { source, target } = a;
        const u = source.position();
        const l = target.position();
        const v = source.width();
        const f = target.width();
        const c = source.height();
        const h = target.height();
        const d = t.pstyle("haystack-radius").value;
        const y = d / 2;
        n.haystackPts = n.allpts = [
            n.source.x * v * y + u.x,
            n.source.y * c * y + u.y,
            n.target.x * f * y + l.x,
            n.target.y * h * y + l.y
        ];
        n.midX = (n.allpts[0] + n.allpts[2]) / 2;
        n.midY = (n.allpts[1] + n.allpts[3]) / 2;
        n.edgeType = "haystack";
        n.haystack = true;
        this.storeEdgeProjections(t);
        this.calculateArrowAngles(t);
        this.recalculateEdgeLabelProjections(t);
        this.calculateLabelAngles(t);
    }
};
gr.findSegmentsPoints = function(r, e) {
    const rscratch = r._private.rscratch;
    const a = r.pstyle("segment-weights");
    const n = r.pstyle("segment-distances");
    const i = r.pstyle("segment-radii");
    const s = r.pstyle("radius-type");
    const o = Math.min(a.pfValue.length, n.pfValue.length);
    const u = i.pfValue[i.pfValue.length - 1];
    const l = s.pfValue[s.pfValue.length - 1];
    rscratch.edgeType = "segments";
    rscratch.segpts = [];
    rscratch.radii = [];
    rscratch.isArcRadius = [];
    for(let v = 0; v < o; v++){
        const f = a.pfValue[v];
        const c = n.pfValue[v];
        const h = 1 - f;
        const d = f;
        const y = this.findMidptPtsEtc(r, e);
        const { midptPts, vectorNormInverse } = y;
        const m = {
            x: midptPts.x1 * h + midptPts.x2 * d,
            y: midptPts.y1 * h + midptPts.y2 * d
        };
        rscratch.segpts.push(m.x + vectorNormInverse.x * c, m.y + vectorNormInverse.y * c);
        rscratch.radii.push(i.pfValue[v] !== undefined ? i.pfValue[v] : u);
        rscratch.isArcRadius.push((s.pfValue[v] !== undefined ? s.pfValue[v] : l) === "arc-radius");
    }
};
gr.findLoopPoints = (r, e, t, a)=>{
    const rscratch = r._private.rscratch;
    const { dirCounts, srcPos } = e;
    const o = r.pstyle("control-point-distances");
    const u = o ? o.pfValue[0] : undefined;
    const pfValue = r.pstyle("loop-direction").pfValue;
    const pfValue_1 = r.pstyle("loop-sweep").pfValue;
    const pfValue_2 = r.pstyle("control-point-step-size").pfValue;
    rscratch.edgeType = "self";
    let c = t;
    let h = pfValue_2;
    if (a) {
        c = 0;
        h = u;
    }
    const d = pfValue - Math.PI / 2;
    const y = d - pfValue_1 / 2;
    const g = d + pfValue_1 / 2;
    const p = `${pfValue}_${pfValue_1}`;
    c = dirCounts[p] === undefined ? dirCounts[p] = 0 : ++dirCounts[p];
    rscratch.ctrlpts = [
        srcPos.x + Math.cos(y) * 1.4 * h * (c / 3 + 1),
        srcPos.y + Math.sin(y) * 1.4 * h * (c / 3 + 1),
        srcPos.x + Math.cos(g) * 1.4 * h * (c / 3 + 1),
        srcPos.y + Math.sin(g) * 1.4 * h * (c / 3 + 1)
    ];
};
gr.findCompoundLoopPoints = (r, e, t, a)=>{
    const rscratch = r._private.rscratch;
    rscratch.edgeType = "compound";
    const { srcPos, tgtPos, srcW, srcH, tgtW, tgtH } = e;
    const pfValue = r.pstyle("control-point-step-size").pfValue;
    const c = r.pstyle("control-point-distances");
    const h = c ? c.pfValue[0] : undefined;
    let d = t;
    let y = pfValue;
    if (a) {
        d = 0;
        y = h;
    }
    const g = 50;
    const p = {
        x: srcPos.x - srcW / 2,
        y: srcPos.y - srcH / 2
    };
    const m = {
        x: tgtPos.x - tgtW / 2,
        y: tgtPos.y - tgtH / 2
    };
    const b = {
        x: Math.min(p.x, m.x),
        y: Math.min(p.y, m.y)
    };
    const w = 0.5;
    const E = Math.max(w, Math.log(srcW * Aa));
    const C = Math.max(w, Math.log(tgtW * Aa));
    rscratch.ctrlpts = [
        b.x,
        b.y - (1 + g ** 1.12 / 100) * y * (d / 3 + 1) * E,
        b.x - (1 + g ** 1.12 / 100) * y * (d / 3 + 1) * C,
        b.y
    ];
};
gr.findStraightEdgePoints = (r)=>{
    r._private.rscratch.edgeType = "straight";
};
gr.findBezierPoints = function(r, e, t, a, n) {
    const rscratch = r._private.rscratch;
    const pfValue = r.pstyle("control-point-step-size").pfValue;
    const o = r.pstyle("control-point-distances");
    const u = r.pstyle("control-point-weights");
    const l = o && u ? Math.min(o.value.length, u.value.length) : 1;
    let v = o ? o.pfValue[0] : undefined;
    let f = u.value[0];
    const c = a;
    rscratch.edgeType = c ? "multibezier" : "bezier";
    rscratch.ctrlpts = [];
    for(let h = 0; h < l; h++){
        const d = (0.5 - e.eles.length / 2 + t) * pfValue * (n ? -1 : 1);
        let y;
        const g = eo(d);
        if (c) {
            v = o ? o.pfValue[h] : pfValue;
            f = u.value[h];
        }
        if (a) {
            y = v;
        } else {
            y = v !== undefined ? g * v : undefined;
        }
        const p = y !== undefined ? y : d;
        const m = 1 - f;
        const b = f;
        const w = this.findMidptPtsEtc(r, e);
        const { midptPts, vectorNormInverse } = w;
        const x = {
            x: midptPts.x1 * m + midptPts.x2 * b,
            y: midptPts.y1 * m + midptPts.y2 * b
        };
        rscratch.ctrlpts.push(x.x + vectorNormInverse.x * p, x.y + vectorNormInverse.y * p);
    }
};
gr.findTaxiPoints = (r, e)=>{
    const rscratch = r._private.rscratch;
    rscratch.edgeType = "segments";
    const a = "vertical";
    const n = "horizontal";
    const i = "leftward";
    const s = "rightward";
    const o = "downward";
    const u = "upward";
    const l = "auto";
    const { posPts, srcW, srcH, tgtW, tgtH } = e;
    const value = r.pstyle("edge-distances").value;
    const g = value !== "node-position";
    let value_1 = r.pstyle("taxi-direction").value;
    const m = value_1;
    const b = r.pstyle("taxi-turn");
    const w = b.units === "%";
    const b_pfValue = b.pfValue;
    const C = b_pfValue < 0;
    const pfValue = r.pstyle("taxi-turn-min-distance").pfValue;
    const T = g ? (srcW + tgtW) / 2 : 0;
    const k = g ? (srcH + tgtH) / 2 : 0;
    const D = posPts.x2 - posPts.x1;
    const B = posPts.y2 - posPts.y1;
    const P = (G, $)=>{
        if (G > 0) {
            return Math.max(G - $, 0);
        }
        return Math.min(G + $, 0);
    };
    const A = P(D, T);
    const R = P(B, k);
    let L = false;
    if (m === l) {
        value_1 = Math.abs(A) > Math.abs(R) ? n : a;
    } else if (m === u || m === o) {
        value_1 = a;
        L = true;
    } else if (m === i || m === s) {
        value_1 = n;
        L = true;
    }
    const I = value_1 === a;
    let M = I ? R : A;
    const O = I ? B : D;
    let q = eo(O);
    let _ = false;
    if (!(L && (w || C)) && (m === o && O < 0 || m === u && O > 0 || m === i && O > 0 || m === s && O < 0)) {
        q *= -1;
        M = q * Math.abs(M);
        _ = true;
    }
    let N;
    if (w) {
        const F = b_pfValue < 0 ? 1 + b_pfValue : b_pfValue;
        N = F * M;
    } else {
        const U = b_pfValue < 0 ? M : 0;
        N = U + b_pfValue * q;
    }
    const J = (G)=>Math.abs(G) < pfValue || Math.abs(G) >= Math.abs(M);
    const Z = J(N);
    const j = J(Math.abs(M) - Math.abs(N));
    const re = Z || j;
    if (re && !_) {
        if (I) {
            const ne = Math.abs(O) <= srcH / 2;
            const Q = Math.abs(D) <= tgtW / 2;
            if (ne) {
                const V = (posPts.x1 + posPts.x2) / 2;
                const { y1, y2 } = posPts;
                rscratch.segpts = [
                    V,
                    y1,
                    V,
                    y2
                ];
            } else if (Q) {
                const Y = (posPts.y1 + posPts.y2) / 2;
                const { x1, x2 } = posPts;
                rscratch.segpts = [
                    x1,
                    Y,
                    x2,
                    Y
                ];
            } else {
                rscratch.segpts = [
                    posPts.x1,
                    posPts.y2
                ];
            }
        } else {
            const Be = Math.abs(O) <= srcW / 2;
            const we = Math.abs(B) <= tgtH / 2;
            if (Be) {
                const me = (posPts.y1 + posPts.y2) / 2;
                const { x1, x2 } = posPts;
                rscratch.segpts = [
                    x1,
                    me,
                    x2,
                    me
                ];
            } else if (we) {
                const de = (posPts.x1 + posPts.x2) / 2;
                const { y1, y2 } = posPts;
                rscratch.segpts = [
                    de,
                    y1,
                    de,
                    y2
                ];
            } else {
                rscratch.segpts = [
                    posPts.x2,
                    posPts.y1
                ];
            }
        }
    } else if (I) {
        const be = posPts.y1 + N + (g ? srcH / 2 * q : 0);
        const { x1, x2 } = posPts;
        rscratch.segpts = [
            x1,
            be,
            x2,
            be
        ];
    } else {
        const Oe = posPts.x1 + N + (g ? srcW / 2 * q : 0);
        const { y1, y2 } = posPts;
        rscratch.segpts = [
            Oe,
            y1,
            Oe,
            y2
        ];
    }
    if (rscratch.isRound) {
        const X = r.pstyle("taxi-radius").value;
        const S = r.pstyle("radius-type").value[0] === "arc-radius";
        rscratch.radii = new Array(rscratch.segpts.length / 2).fill(X);
        rscratch.isArcRadius = new Array(rscratch.segpts.length / 2).fill(S);
    }
};
gr.tryToCorrectInvalidPoints = function(r, e) {
    const rscratch = r._private.rscratch;
    if (rscratch.edgeType === "bezier") {
        const { srcPos, tgtPos, srcW, srcH, tgtW, tgtH, srcShape, tgtShape, srcCornerRadius, tgtCornerRadius, srcRs, tgtRs } = e;
        const y = !ae(rscratch.startX) || !ae(rscratch.startY);
        const g = !ae(rscratch.arrowStartX) || !ae(rscratch.arrowStartY);
        const p = !ae(rscratch.endX) || !ae(rscratch.endY);
        const m = !ae(rscratch.arrowEndX) || !ae(rscratch.arrowEndY);
        const b = 3;
        const w = this.getArrowWidth(r.pstyle("width").pfValue, r.pstyle("arrow-scale").value) * this.arrowShapeWidth;
        const E = b * w;
        const C = Dt({
            x: rscratch.ctrlpts[0],
            y: rscratch.ctrlpts[1]
        }, {
            x: rscratch.startX,
            y: rscratch.startY
        });
        const x = C < E;
        const T = Dt({
            x: rscratch.ctrlpts[0],
            y: rscratch.ctrlpts[1]
        }, {
            x: rscratch.endX,
            y: rscratch.endY
        });
        const k = T < E;
        let D = false;
        if (y || g || x) {
            D = true;
            const B = {
                x: rscratch.ctrlpts[0] - srcPos.x,
                y: rscratch.ctrlpts[1] - srcPos.y
            };
            const P = Math.sqrt(B.x * B.x + B.y * B.y);
            const A = {
                x: B.x / P,
                y: B.y / P
            };
            const R = Math.max(srcW, srcH);
            const L = {
                x: rscratch.ctrlpts[0] + A.x * 2 * R,
                y: rscratch.ctrlpts[1] + A.y * 2 * R
            };
            const I = srcShape.intersectLine(srcPos.x, srcPos.y, srcW, srcH, L.x, L.y, 0, srcCornerRadius, srcRs);
            if (x) {
                rscratch.ctrlpts[0] = rscratch.ctrlpts[0] + A.x * (E - C);
                rscratch.ctrlpts[1] = rscratch.ctrlpts[1] + A.y * (E - C);
            } else {
                rscratch.ctrlpts[0] = I[0] + A.x * E;
                rscratch.ctrlpts[1] = I[1] + A.y * E;
            }
        }
        if (p || m || k) {
            D = true;
            const M = {
                x: rscratch.ctrlpts[0] - tgtPos.x,
                y: rscratch.ctrlpts[1] - tgtPos.y
            };
            const O = Math.sqrt(M.x * M.x + M.y * M.y);
            const q = {
                x: M.x / O,
                y: M.y / O
            };
            const _ = Math.max(srcW, srcH);
            const N = {
                x: rscratch.ctrlpts[0] + q.x * 2 * _,
                y: rscratch.ctrlpts[1] + q.y * 2 * _
            };
            const F = tgtShape.intersectLine(tgtPos.x, tgtPos.y, tgtW, tgtH, N.x, N.y, 0, tgtCornerRadius, tgtRs);
            if (k) {
                rscratch.ctrlpts[0] = rscratch.ctrlpts[0] + q.x * (E - T);
                rscratch.ctrlpts[1] = rscratch.ctrlpts[1] + q.y * (E - T);
            } else {
                rscratch.ctrlpts[0] = F[0] + q.x * E;
                rscratch.ctrlpts[1] = F[1] + q.y * E;
            }
        }
        if (D) {
            this.findEndpoints(r);
        }
    }
};
gr.storeAllpts = (r)=>{
    const rscratch = r._private.rscratch;
    if (rscratch.edgeType === "multibezier" || rscratch.edgeType === "bezier" || rscratch.edgeType === "self" || rscratch.edgeType === "compound") {
        rscratch.allpts = [];
        rscratch.allpts.push(rscratch.startX, rscratch.startY);
        for(let t = 0; t + 1 < rscratch.ctrlpts.length; t += 2){
            rscratch.allpts.push(rscratch.ctrlpts[t], rscratch.ctrlpts[t + 1]);
            if (t + 3 < rscratch.ctrlpts.length) {
                rscratch.allpts.push((rscratch.ctrlpts[t] + rscratch.ctrlpts[t + 2]) / 2, (rscratch.ctrlpts[t + 1] + rscratch.ctrlpts[t + 3]) / 2);
            }
        }
        rscratch.allpts.push(rscratch.endX, rscratch.endY);
        let a;
        let n;
        if (rscratch.ctrlpts.length / 2 % 2 === 0) {
            a = rscratch.allpts.length / 2 - 1;
            rscratch.midX = rscratch.allpts[a];
            rscratch.midY = rscratch.allpts[a + 1];
        } else {
            a = rscratch.allpts.length / 2 - 3;
            n = 0.5;
            rscratch.midX = nr(rscratch.allpts[a], rscratch.allpts[a + 2], rscratch.allpts[a + 4], n);
            rscratch.midY = nr(rscratch.allpts[a + 1], rscratch.allpts[a + 3], rscratch.allpts[a + 5], n);
        }
    } else if (rscratch.edgeType === "straight") {
        rscratch.allpts = [
            rscratch.startX,
            rscratch.startY,
            rscratch.endX,
            rscratch.endY
        ];
        rscratch.midX = (rscratch.startX + rscratch.endX + rscratch.arrowStartX + rscratch.arrowEndX) / 4;
        rscratch.midY = (rscratch.startY + rscratch.endY + rscratch.arrowStartY + rscratch.arrowEndY) / 4;
    } else if (rscratch.edgeType === "segments") {
        rscratch.allpts = [];
        rscratch.allpts.push(rscratch.startX, rscratch.startY);
        rscratch.allpts.push.apply(rscratch.allpts, rscratch.segpts);
        rscratch.allpts.push(rscratch.endX, rscratch.endY);
        if (rscratch.isRound) {
            rscratch.roundCorners = [];
            for(let i = 2; i + 3 < rscratch.allpts.length; i += 2){
                const s = rscratch.radii[i / 2 - 1];
                const o = rscratch.isArcRadius[i / 2 - 1];
                rscratch.roundCorners.push(ho({
                    x: rscratch.allpts[i - 2],
                    y: rscratch.allpts[i - 1]
                }, {
                    x: rscratch.allpts[i],
                    y: rscratch.allpts[i + 1],
                    radius: s
                }, {
                    x: rscratch.allpts[i + 2],
                    y: rscratch.allpts[i + 3]
                }, s, o));
            }
        }
        if (rscratch.segpts.length % 4 === 0) {
            const u = rscratch.segpts.length / 2;
            const l = u - 2;
            rscratch.midX = (rscratch.segpts[l] + rscratch.segpts[u]) / 2;
            rscratch.midY = (rscratch.segpts[l + 1] + rscratch.segpts[u + 1]) / 2;
        } else {
            const v = rscratch.segpts.length / 2 - 1;
            if (!rscratch.isRound) {
                rscratch.midX = rscratch.segpts[v];
                rscratch.midY = rscratch.segpts[v + 1];
            } else {
                const f = {
                    x: rscratch.segpts[v],
                    y: rscratch.segpts[v + 1]
                };
                const c = rscratch.roundCorners[v / 2];
                if (c.radius === 0) {
                    const h = {
                        x: rscratch.segpts[v + 2],
                        y: rscratch.segpts[v + 3]
                    };
                    rscratch.midX = f.x;
                    rscratch.midY = f.y;
                    rscratch.midVector = [
                        f.y - h.y,
                        h.x - f.x
                    ];
                } else {
                    let d = [
                        f.x - c.cx,
                        f.y - c.cy
                    ];
                    const y = c.radius / Math.sqrt(d[0] ** 2 + d[1] ** 2);
                    d = d.map((g)=>g * y);
                    rscratch.midX = c.cx + d[0];
                    rscratch.midY = c.cy + d[1];
                    rscratch.midVector = d;
                }
            }
        }
    }
};
gr.checkForInvalidEdgeWarning = (r)=>{
    const rscratch = r[0]._private.rscratch;
    if (rscratch.nodesOverlap || ae(rscratch.startX) && ae(rscratch.startY) && ae(rscratch.endX) && ae(rscratch.endY)) {
        rscratch.loggedErr = false;
    } else if (!rscratch.loggedErr) {
        rscratch.loggedErr = true;
        ze(`Edge \`${r.id()}\` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap.`);
    }
};
gr.findEdgeControlPoints = function(r) {
    const e = this;
    if (!(!r || r.length === 0)) {
        const t = this;
        const a = t.cy;
        const n = a.hasCompoundNodes();
        const i = new Kr;
        const s = (pairId, edgeIsUnbundled)=>[
                ...pairId,
                edgeIsUnbundled ? 1 : 0
            ].join("-");
        const o = [];
        const u = [];
        for (const v of r){
            const f = v._private;
            const c = v.pstyle("curve-style").value;
            if (!(v.removed() || !v.takesUpSpace())) {
                if (c === "haystack") {
                    u.push(v);
                    continue;
                }
                const edgeIsUnbundled = c === "unbundled-bezier" || tt(c, "segments") || c === "straight" || c === "straight-triangle" || tt(c, "taxi");
                const d = c === "unbundled-bezier" || c === "bezier";
                const { source, target } = f;
                const p = source.poolIndex();
                const m = target.poolIndex();
                const pairId = [
                    p,
                    m
                ].sort();
                const w = s(pairId, edgeIsUnbundled);
                let E = i.get(w);
                if (E == null) {
                    E = {
                        eles: []
                    };
                    o.push({
                        pairId,
                        edgeIsUnbundled
                    });
                    i.set(w, E);
                }
                E.eles.push(v);
                if (edgeIsUnbundled) {
                    E.hasUnbundled = true;
                }
                if (d) {
                    E.hasBezier = true;
                }
            }
        }
        const C = ()=>{
            const k = o[x];
            const { pairId, edgeIsUnbundled } = k;
            const P = s(pairId, edgeIsUnbundled);
            const A = i.get(P);
            let R;
            if (!A.hasUnbundled) {
                const L = A.eles[0].parallelEdges().filter((S)=>S.isBundledBezier());
                Js(A.eles);
                L.forEach((S)=>A.eles.push(S));
                A.eles.sort((S, z)=>S.poolIndex() - z.poolIndex());
            }
            const I = A.eles[0];
            let M = I.source();
            let O = I.target();
            if (M.poolIndex() > O.poolIndex()) {
                const q = M;
                M = O;
                O = q;
            }
            const tgtPos = A.srcPos = M.position();
            const srcPos = A.tgtPos = O.position();
            const tgtW = A.srcW = M.outerWidth();
            const tgtH = A.srcH = M.outerHeight();
            const srcW = A.tgtW = O.outerWidth();
            const srcH = A.tgtH = O.outerHeight();
            const tgtShape = A.srcShape = t.nodeShapes[e.getNodeShape(M)];
            const srcShape = A.tgtShape = t.nodeShapes[e.getNodeShape(O)];
            const ne = A.srcCornerRadius = M.pstyle("corner-radius").value === "auto" ? "auto" : M.pstyle("corner-radius").pfValue;
            const Q = A.tgtCornerRadius = O.pstyle("corner-radius").value === "auto" ? "auto" : O.pstyle("corner-radius").pfValue;
            const srcRs = A.tgtRs = O._private.rscratch;
            const tgtRs = A.srcRs = M._private.rscratch;
            A.dirCounts = {
                north: 0,
                west: 0,
                south: 0,
                east: 0,
                northwest: 0,
                southwest: 0,
                northeast: 0,
                southeast: 0
            };
            for(let W = 0; W < A.eles.length; W++){
                const ele = A.eles[W];
                const te = ele[0]._private.rscratch;
                const ce = ele.pstyle("curve-style").value;
                const Be = ce === "unbundled-bezier" || tt(ce, "segments") || tt(ce, "taxi");
                const we = !M.same(ele.source());
                if (!A.calculatedIntersection && M !== O && (A.hasBezier || A.hasUnbundled)) {
                    A.calculatedIntersection = true;
                    const me = tgtShape.intersectLine(tgtPos.x, tgtPos.y, tgtW, tgtH, srcPos.x, srcPos.y, 0, ne, tgtRs);
                    const tgtIntn = A.srcIntn = me;
                    const se = srcShape.intersectLine(srcPos.x, srcPos.y, srcW, srcH, tgtPos.x, tgtPos.y, 0, Q, srcRs);
                    const srcIntn = A.tgtIntn = se;
                    const fe = A.intersectionPts = {
                        x1: me[0],
                        x2: se[0],
                        y1: me[1],
                        y2: se[1]
                    };
                    const xe = A.posPts = {
                        x1: tgtPos.x,
                        x2: srcPos.x,
                        y1: tgtPos.y,
                        y2: srcPos.y
                    };
                    const be = se[1] - me[1];
                    const Se = se[0] - me[0];
                    let De = Math.sqrt(Se * Se + be * be);
                    if (!(ae(De) && De >= jp)) {
                        De = Math.sqrt(Math.max(Se * Se, Aa) + Math.max(be * be, Aa));
                    }
                    const Oe = A.vector = {
                        x: Se,
                        y: be
                    };
                    const Le = A.vectorNorm = {
                        x: Oe.x / De,
                        y: Oe.y / De
                    };
                    const Ae = {
                        x: -Le.y,
                        y: Le.x
                    };
                    A.nodesOverlap = !ae(De) || srcShape.checkPoint(me[0], me[1], 0, srcW, srcH, srcPos.x, srcPos.y, Q, srcRs) || tgtShape.checkPoint(se[0], se[1], 0, tgtW, tgtH, tgtPos.x, tgtPos.y, ne, tgtRs);
                    A.vectorNormInverse = Ae;
                    R = {
                        nodesOverlap: A.nodesOverlap,
                        dirCounts: A.dirCounts,
                        calculatedIntersection: true,
                        hasBezier: A.hasBezier,
                        hasUnbundled: A.hasUnbundled,
                        eles: A.eles,
                        srcPos,
                        srcRs,
                        tgtPos,
                        tgtRs,
                        srcW,
                        srcH,
                        tgtW,
                        tgtH,
                        srcIntn,
                        tgtIntn,
                        srcShape,
                        tgtShape,
                        posPts: {
                            x1: xe.x2,
                            y1: xe.y2,
                            x2: xe.x1,
                            y2: xe.y1
                        },
                        intersectionPts: {
                            x1: fe.x2,
                            y1: fe.y2,
                            x2: fe.x1,
                            y2: fe.y1
                        },
                        vector: {
                            x: -Oe.x,
                            y: -Oe.y
                        },
                        vectorNorm: {
                            x: -Le.x,
                            y: -Le.y
                        },
                        vectorNormInverse: {
                            x: -Ae.x,
                            y: -Ae.y
                        }
                    };
                }
                const X = we ? R : A;
                te.nodesOverlap = X.nodesOverlap;
                te.srcIntn = X.srcIntn;
                te.tgtIntn = X.tgtIntn;
                te.isRound = ce.startsWith("round");
                if (n && (M.isParent() || M.isChild() || O.isParent() || O.isChild()) && (M.parents().anySame(O) || O.parents().anySame(M) || M.same(O) && M.isParent())) {
                    e.findCompoundLoopPoints(ele, X, W, Be);
                } else if (M === O) {
                    e.findLoopPoints(ele, X, W, Be);
                } else if (ce.endsWith("segments")) {
                    e.findSegmentsPoints(ele, X);
                } else if (ce.endsWith("taxi")) {
                    e.findTaxiPoints(ele, X);
                } else if (ce === "straight" || !Be && A.eles.length % 2 === 1 && W === Math.floor(A.eles.length / 2)) {
                    e.findStraightEdgePoints(ele);
                } else {
                    e.findBezierPoints(ele, X, W, Be, we);
                }
                e.findEndpoints(ele);
                e.tryToCorrectInvalidPoints(ele, X);
                e.checkForInvalidEdgeWarning(ele);
                e.storeAllpts(ele);
                e.storeEdgeProjections(ele);
                e.calculateArrowAngles(ele);
                e.recalculateEdgeLabelProjections(ele);
                e.calculateLabelAngles(ele);
            }
        };
        for(var x = 0; x < o.length; x++){
            C();
        }
        this.findHaystackPoints(u);
    }
};
function gf(r) {
    const e = [];
    if (r != null) {
        for(let t = 0; t < r.length; t += 2){
            const a = r[t];
            const n = r[t + 1];
            e.push({
                x: a,
                y: n
            });
        }
        return e;
    }
}
gr.getSegmentPoints = function(r) {
    const rscratch = r[0]._private.rscratch;
    this.recalculateRenderedStyle(r);
    const e_edgeType = rscratch.edgeType;
    if (e_edgeType === "segments") {
        return gf(rscratch.segpts);
    }
};
gr.getControlPoints = function(r) {
    const rscratch = r[0]._private.rscratch;
    this.recalculateRenderedStyle(r);
    const e_edgeType = rscratch.edgeType;
    if (e_edgeType === "bezier" || e_edgeType === "multibezier" || e_edgeType === "self" || e_edgeType === "compound") {
        return gf(rscratch.ctrlpts);
    }
};
gr.getEdgeMidpoint = function(r) {
    const rscratch = r[0]._private.rscratch;
    this.recalculateRenderedStyle(r);
    return {
        x: rscratch.midX,
        y: rscratch.midY
    };
};
const qa = {};
qa.manualEndptToPx = function(r, e) {
    const t = this;
    const a = r.position();
    const n = r.outerWidth();
    const i = r.outerHeight();
    const rscratch = r._private.rscratch;
    if (e.value.length === 2) {
        const o = [
            e.pfValue[0],
            e.pfValue[1]
        ];
        if (e.units[0] === "%") {
            o[0] = o[0] * n;
        }
        if (e.units[1] === "%") {
            o[1] = o[1] * i;
        }
        o[0] += a.x;
        o[1] += a.y;
        return o;
    } else {
        let u = e.pfValue[0];
        u = -Math.PI / 2 + u;
        const l = 2 * Math.max(n, i);
        const v = [
            a.x + Math.cos(u) * l,
            a.y + Math.sin(u) * l
        ];
        return t.nodeShapes[this.getNodeShape(r)].intersectLine(a.x, a.y, n, i, v[0], v[1], 0, r.pstyle("corner-radius").value === "auto" ? "auto" : r.pstyle("corner-radius").pfValue, rscratch);
    }
};
qa.findEndpoints = function(r) {
    const i = this;
    let s;
    const o = r.source()[0];
    const u = r.target()[0];
    const l = o.position();
    const v = u.position();
    const value = r.pstyle("target-arrow-shape").value;
    const value_1 = r.pstyle("source-arrow-shape").value;
    const pfValue = r.pstyle("target-distance-from-node").pfValue;
    const pfValue_1 = r.pstyle("source-distance-from-node").pfValue;
    const rscratch = o._private.rscratch;
    const rscratch_1 = u._private.rscratch;
    const value_2 = r.pstyle("curve-style").value;
    const rscratch_2 = r._private.rscratch;
    const m_edgeType = rscratch_2.edgeType;
    const w = tt(value_2, "taxi");
    const E = m_edgeType === "self" || m_edgeType === "compound";
    const C = m_edgeType === "bezier" || m_edgeType === "multibezier" || E;
    const x = m_edgeType !== "bezier";
    const T = m_edgeType === "straight" || m_edgeType === "segments";
    const k = m_edgeType === "segments";
    const D = C || x || T;
    const B = E || w;
    const P = r.pstyle("source-endpoint");
    const A = B ? "outside-to-node" : P.value;
    const R = o.pstyle("corner-radius").value === "auto" ? "auto" : o.pstyle("corner-radius").pfValue;
    const L = r.pstyle("target-endpoint");
    const I = B ? "outside-to-node" : L.value;
    const M = u.pstyle("corner-radius").value === "auto" ? "auto" : u.pstyle("corner-radius").pfValue;
    rscratch_2.srcManEndpt = P;
    rscratch_2.tgtManEndpt = L;
    let O;
    let q;
    let _;
    let N;
    const F = (L?.pfValue?.length === 2 ? L.pfValue : null) ?? [
        0,
        0
    ];
    const U = (P?.pfValue?.length === 2 ? P.pfValue : null) ?? [
        0,
        0
    ];
    if (C) {
        const J = [
            rscratch_2.ctrlpts[0],
            rscratch_2.ctrlpts[1]
        ];
        const Z = x ? [
            rscratch_2.ctrlpts[rscratch_2.ctrlpts.length - 2],
            rscratch_2.ctrlpts[rscratch_2.ctrlpts.length - 1]
        ] : J;
        O = Z;
        q = J;
    } else if (T) {
        const j = k ? rscratch_2.segpts.slice(0, 2) : [
            v.x + F[0],
            v.y + F[1]
        ];
        const re = k ? rscratch_2.segpts.slice(rscratch_2.segpts.length - 2) : [
            l.x + U[0],
            l.y + U[1]
        ];
        O = re;
        q = j;
    }
    if (I === "inside-to-node") {
        s = [
            v.x,
            v.y
        ];
    } else if (L.units) {
        s = this.manualEndptToPx(u, L);
    } else if (I === "outside-to-line") {
        s = rscratch_2.tgtIntn;
    } else {
        if (I === "outside-to-node" || I === "outside-to-node-or-label") {
            _ = O;
        } else if (I === "outside-to-line" || I === "outside-to-line-or-label") {
            _ = [
                l.x,
                l.y
            ];
        }
        s = i.nodeShapes[this.getNodeShape(u)].intersectLine(v.x, v.y, u.outerWidth(), u.outerHeight(), _[0], _[1], 0, M, rscratch_1);
        if (I === "outside-to-node-or-label" || I === "outside-to-line-or-label") {
            const ne = u._private.rscratch;
            const { labelWidth, labelHeight } = ne;
            let H = ne.labelX;
            let W = ne.labelY;
            const Y = labelWidth / 2;
            const te = labelHeight / 2;
            const ce = u.pstyle("text-valign").value;
            if (ce === "top") {
                W -= te;
            } else if (ce === "bottom") {
                W += te;
            }
            const Be = u.pstyle("text-halign").value;
            if (Be === "left") {
                H -= Y;
            } else if (Be === "right") {
                H += Y;
            }
            const we = Sa(_[0], _[1], [
                H - Y,
                W - te,
                H + Y,
                W - te,
                H + Y,
                W + te,
                H - Y,
                W + te
            ], v.x, v.y);
            if (we.length > 0) {
                const me = l;
                const ge = xt(me, Gt(s));
                const se = xt(me, Gt(we));
                let de = ge;
                if (se < ge) {
                    s = we;
                    de = se;
                }
                if (we.length > 2) {
                    const fe = xt(me, {
                        x: we[2],
                        y: we[3]
                    });
                    if (fe < de) {
                        s = [
                            we[2],
                            we[3]
                        ];
                    }
                }
            }
        }
    }
    const xe = Xa(s, O, i.arrowShapes[value].spacing(r) + pfValue);
    const be = Xa(s, O, i.arrowShapes[value].gap(r) + pfValue);
    rscratch_2.endX = be[0];
    rscratch_2.endY = be[1];
    rscratch_2.arrowEndX = xe[0];
    rscratch_2.arrowEndY = xe[1];
    if (A === "inside-to-node") {
        s = [
            l.x,
            l.y
        ];
    } else if (P.units) {
        s = this.manualEndptToPx(o, P);
    } else if (A === "outside-to-line") {
        s = rscratch_2.srcIntn;
    } else {
        if (A === "outside-to-node" || A === "outside-to-node-or-label") {
            N = q;
        } else if (A === "outside-to-line" || A === "outside-to-line-or-label") {
            N = [
                v.x,
                v.y
            ];
        }
        s = i.nodeShapes[this.getNodeShape(o)].intersectLine(l.x, l.y, o.outerWidth(), o.outerHeight(), N[0], N[1], 0, R, rscratch);
        if (A === "outside-to-node-or-label" || A === "outside-to-line-or-label") {
            const Se = o._private.rscratch;
            const { labelWidth, labelHeight } = Se;
            let Le = Se.labelX;
            let Ae = Se.labelY;
            const X = labelWidth / 2;
            const S = labelHeight / 2;
            const z = o.pstyle("text-valign").value;
            if (z === "top") {
                Ae -= S;
            } else if (z === "bottom") {
                Ae += S;
            }
            const G = o.pstyle("text-halign").value;
            if (G === "left") {
                Le -= X;
            } else if (G === "right") {
                Le += X;
            }
            const $ = Sa(N[0], N[1], [
                Le - X,
                Ae - S,
                Le + X,
                Ae - S,
                Le + X,
                Ae + S,
                Le - X,
                Ae + S
            ], l.x, l.y);
            if ($.length > 0) {
                const K = v;
                const le = xt(K, Gt(s));
                const ee = xt(K, Gt($));
                let ie = le;
                if (ee < le) {
                    s = [
                        $[0],
                        $[1]
                    ];
                    ie = ee;
                }
                if ($.length > 2) {
                    const oe = xt(K, {
                        x: $[2],
                        y: $[3]
                    });
                    if (oe < ie) {
                        s = [
                            $[2],
                            $[3]
                        ];
                    }
                }
            }
        }
    }
    const pe = Xa(s, q, i.arrowShapes[value_1].spacing(r) + pfValue_1);
    const Ee = Xa(s, q, i.arrowShapes[value_1].gap(r) + pfValue_1);
    rscratch_2.startX = Ee[0];
    rscratch_2.startY = Ee[1];
    rscratch_2.arrowStartX = pe[0];
    rscratch_2.arrowStartY = pe[1];
    D && (!ae(rscratch_2.startX) || !ae(rscratch_2.startY) || !ae(rscratch_2.endX) || !ae(rscratch_2.endY) ? rscratch_2.badLine = true : rscratch_2.badLine = false);
};
qa.getSourceEndpoint = function(r) {
    const rscratch = r[0]._private.rscratch;
    this.recalculateRenderedStyle(r);
    if (rscratch.edgeType === "haystack") {
        return {
            x: rscratch.haystackPts[0],
            y: rscratch.haystackPts[1]
        };
    }
    return {
        x: rscratch.arrowStartX,
        y: rscratch.arrowStartY
    };
};
qa.getTargetEndpoint = function(r) {
    const rscratch = r[0]._private.rscratch;
    this.recalculateRenderedStyle(r);
    if (rscratch.edgeType === "haystack") {
        return {
            x: rscratch.haystackPts[2],
            y: rscratch.haystackPts[3]
        };
    }
    return {
        x: rscratch.arrowEndX,
        y: rscratch.arrowEndY
    };
};
const go = {};
function ey(r, e, t) {
    const a = (l, v, f, bezierProjPct)=>nr(l, v, f, bezierProjPct);
    const e__private = e._private;
    const bezierPts = e__private.rstyle.bezierPts;
    for(let s = 0; s < r.bezierProjPcts.length; s++){
        const bezierProjPct = r.bezierProjPcts[s];
        bezierPts.push({
            x: a(t[0], t[2], t[4], bezierProjPct),
            y: a(t[1], t[3], t[5], bezierProjPct)
        });
    }
}
go.storeEdgeProjections = function(r) {
    const r__private = r._private;
    const e_rscratch = r__private.rscratch;
    const t_edgeType = e_rscratch.edgeType;
    r__private.rstyle.bezierPts = null;
    r__private.rstyle.linePts = null;
    r__private.rstyle.haystackPts = null;
    if (t_edgeType === "multibezier" || t_edgeType === "bezier" || t_edgeType === "self" || t_edgeType === "compound") {
        r__private.rstyle.bezierPts = [];
        for(var n = 0; n + 5 < e_rscratch.allpts.length; n += 4){
            ey(this, r, e_rscratch.allpts.slice(n, n + 6));
        }
    } else if (t_edgeType === "segments") {
        const i = r__private.rstyle.linePts = [];
        for(var n = 0; n + 1 < e_rscratch.allpts.length; n += 2){
            i.push({
                x: e_rscratch.allpts[n],
                y: e_rscratch.allpts[n + 1]
            });
        }
    } else if (t_edgeType === "haystack") {
        const s = e_rscratch.haystackPts;
        r__private.rstyle.haystackPts = [
            {
                x: s[0],
                y: s[1]
            },
            {
                x: s[2],
                y: s[3]
            }
        ];
    }
    r__private.rstyle.arrowWidth = this.getArrowWidth(r.pstyle("width").pfValue, r.pstyle("arrow-scale").value) * this.arrowShapeWidth;
};
go.recalculateEdgeProjections = function(r) {
    this.findEdgeControlPoints(r);
};
const Gr = {};
Gr.recalculateNodeLabelProjection = function(r) {
    const strValue = r.pstyle("label").strValue;
    if (!ot(strValue)) {
        let t;
        let a;
        const n = r._private;
        const i = r.width();
        const s = r.height();
        const o = r.padding();
        const u = r.position();
        const l = r.pstyle("text-halign").strValue;
        const v = r.pstyle("text-valign").strValue;
        const { rscratch, rstyle } = n;
        switch(l){
            case "left":
                t = u.x - i / 2 - o;
                break;
            case "right":
                t = u.x + i / 2 + o;
                break;
            default:
                t = u.x;
        }
        switch(v){
            case "top":
                a = u.y - s / 2 - o;
                break;
            case "bottom":
                a = u.y + s / 2 + o;
                break;
            default:
                a = u.y;
        }
        rscratch.labelX = t;
        rscratch.labelY = a;
        rstyle.labelX = t;
        rstyle.labelY = a;
        this.calculateLabelAngles(r);
        this.applyLabelDimensions(r);
    }
};
const pf = (e, t)=>{
    let a = Math.atan(t / e);
    if (e === 0 && a < 0) {
        a = a * -1;
    }
    return a;
};
const yf = (e, t)=>{
    const a = t.x - e.x;
    const n = t.y - e.y;
    return pf(a, n);
};
const ry = (e, t, a, n)=>{
    const i = Ta(0, n - 0.001, 1);
    const s = Ta(0, n + 0.001, 1);
    const o = $t(e, t, a, i);
    const u = $t(e, t, a, s);
    return yf(o, u);
};
Gr.recalculateEdgeLabelProjections = function(r) {
    let e;
    const r__private = r._private;
    const t_rscratch = r__private.rscratch;
    const n = this;
    const i = {
        mid: r.pstyle("label").strValue,
        source: r.pstyle("source-label").strValue,
        target: r.pstyle("target-label").strValue
    };
    if (i.mid || i.source || i.target) {
        e = {
            x: t_rscratch.midX,
            y: t_rscratch.midY
        };
        const s = (f, c, h)=>{
            Ur(r__private.rscratch, f, c, h);
            Ur(r__private.rstyle, f, c, h);
        };
        s("labelX", null, e.x);
        s("labelY", null, e.y);
        const o = pf(t_rscratch.midDispX, t_rscratch.midDispY);
        s("labelAutoAngle", null, o);
        const u = ()=>{
            if (u.cache) {
                return u.cache;
            }
            const f = [];
            for(let c = 0; c + 5 < t_rscratch.allpts.length; c += 4){
                const p0 = {
                    x: t_rscratch.allpts[c],
                    y: t_rscratch.allpts[c + 1]
                };
                const d = {
                    x: t_rscratch.allpts[c + 2],
                    y: t_rscratch.allpts[c + 3]
                };
                const y = {
                    x: t_rscratch.allpts[c + 4],
                    y: t_rscratch.allpts[c + 5]
                };
                f.push({
                    p0,
                    p1: d,
                    p2: y,
                    startDist: 0,
                    length: 0,
                    segments: []
                });
            }
            const bezierPts = r__private.rstyle.bezierPts;
            const length = n.bezierProjPcts.length;
            function m(x, p0, k, t0, t1) {
                const length_1 = Dt(p0, k);
                const A = x.segments[x.segments.length - 1];
                const R = {
                    p0,
                    p1: k,
                    t0,
                    t1,
                    startDist: A ? A.startDist + A.length : 0,
                    length: length_1
                };
                x.segments.push(R);
                x.length += length_1;
            }
            for(let b = 0; b < f.length; b++){
                const w = f[b];
                const E = f[b - 1];
                if (E) {
                    w.startDist = E.startDist + E.length;
                }
                m(w, w.p0, bezierPts[b * length], 0, n.bezierProjPcts[0]);
                for(let C = 0; C < length - 1; C++){
                    m(w, bezierPts[b * length + C], bezierPts[b * length + C + 1], n.bezierProjPcts[C], n.bezierProjPcts[C + 1]);
                }
                m(w, bezierPts[b * length + length - 1], w.p2, n.bezierProjPcts[length - 1], 1);
            }
            return u.cache = f;
        };
        const l = (f)=>{
            let c;
            const h = f === "source";
            if (i[f]) {
                const d = r.pstyle(`${f}-text-offset`).pfValue;
                switch(t_rscratch.edgeType){
                    case "self":
                    case "compound":
                    case "bezier":
                    case "multibezier":
                        {
                            let g;
                            for(var y = u(), p = 0, m = 0, b = 0; b < y.length; b++){
                                for(let cp_1 = y[h ? b : y.length - 1 - b], E = 0; E < cp_1.segments.length; E++){
                                    const segment_1 = cp_1.segments[h ? E : cp_1.segments.length - 1 - E];
                                    const x = b === y.length - 1 && E === cp_1.segments.length - 1;
                                    p = m;
                                    m += segment_1.length;
                                    if (m >= d || x) {
                                        g = {
                                            cp: cp_1,
                                            segment: segment_1
                                        };
                                        break;
                                    }
                                }
                                if (g) {
                                    break;
                                }
                            }
                            const { cp, segment } = g;
                            const D = (d - p) / segment.length;
                            const B = segment.t1 - segment.t0;
                            let P = h ? segment.t0 + B * D : segment.t1 - B * D;
                            P = Ta(0, P, 1);
                            e = $t(cp.p0, cp.p1, cp.p2, P);
                            c = ry(cp.p0, cp.p1, cp.p2, P);
                            break;
                        }
                    case "straight":
                    case "segments":
                    case "haystack":
                        {
                            let L;
                            for(var A = 0, R, I, M, O = t_rscratch.allpts.length, q = 0; q + 3 < O && (h ? (I = {
                                x: t_rscratch.allpts[q],
                                y: t_rscratch.allpts[q + 1]
                            }, M = {
                                x: t_rscratch.allpts[q + 2],
                                y: t_rscratch.allpts[q + 3]
                            }) : (I = {
                                x: t_rscratch.allpts[O - 2 - q],
                                y: t_rscratch.allpts[O - 1 - q]
                            }, M = {
                                x: t_rscratch.allpts[O - 4 - q],
                                y: t_rscratch.allpts[O - 3 - q]
                            }), R = Dt(I, M), L = A, A += R, !(A >= d)); q += 2);
                            const _ = d - L;
                            let N = _ / R;
                            N = Ta(0, N, 1);
                            e = Cd(I, M, N);
                            c = yf(I, M);
                            break;
                        }
                }
                s("labelX", f, e.x);
                s("labelY", f, e.y);
                s("labelAutoAngle", f, c);
            }
        };
        l("source");
        l("target");
        this.applyLabelDimensions(r);
    }
};
Gr.applyLabelDimensions = function(r) {
    this.applyPrefixedLabelDimensions(r);
    if (r.isEdge()) {
        this.applyPrefixedLabelDimensions(r, "source");
        this.applyPrefixedLabelDimensions(r, "target");
    }
};
Gr.applyPrefixedLabelDimensions = function(r, e) {
    const r__private = r._private;
    const a = this.getLabelText(r, e);
    const n = kt(a, r._private.labelDimsKey);
    if (xr(r__private.rscratch, "prefixedLabelDimsKey", e) !== n) {
        Ur(r__private.rscratch, "prefixedLabelDimsKey", e, n);
        const i = this.calculateLabelDimensions(r, a);
        const s = r.pstyle("line-height").pfValue;
        const o = r.pstyle("text-wrap").strValue;
        const u = xr(r__private.rscratch, "labelWrapCachedLines", e) || [];
        const l = o !== "wrap" ? 1 : Math.max(u.length, 1);
        const v = i.height / l;
        const f = v * s;
        const c = i.width;
        const h = i.height + (l - 1) * (s - 1) * v;
        Ur(r__private.rstyle, "labelWidth", e, c);
        Ur(r__private.rscratch, "labelWidth", e, c);
        Ur(r__private.rstyle, "labelHeight", e, h);
        Ur(r__private.rscratch, "labelHeight", e, h);
        Ur(r__private.rscratch, "labelLineHeight", e, f);
    }
};
Gr.getLabelText = function(r, e) {
    const r__private = r._private;
    const a = e ? `${e}-` : "";
    let strValue = r.pstyle(`${a}label`).strValue;
    const value = r.pstyle("text-transform").value;
    const s = (U, J)=>{
        if (J) {
            Ur(r__private.rscratch, U, e, J);
            return J;
        }
        return xr(r__private.rscratch, U, e);
    };
    if (!strValue) {
        return "";
    }
    value == "none" || (value == "uppercase" ? strValue = strValue.toUpperCase() : value == "lowercase" && (strValue = strValue.toLowerCase()));
    const value_1 = r.pstyle("text-wrap").value;
    if (value_1 === "wrap") {
        const u = s("labelKey");
        if (u != null && s("labelWrapKey") === u) {
            return s("labelWrapCachedText");
        }
        const l = "\u200B";
        for(var v = strValue.split(`
`), f = r.pstyle("text-max-width").pfValue, c = r.pstyle("text-overflow-wrap").value, h = c === "anywhere", d = [], y = /[\s\u200b]+|$/g, g = 0; g < v.length; g++){
            let p = v[g];
            const m = this.calculateLabelDimensions(r, p);
            const b = m.width;
            if (h) {
                const w = p.split("").join(l);
                p = w;
            }
            if (b > f) {
                const E = p.matchAll(y);
                let C = "";
                let x = 0;
                const T = Cr(E);
                let k;
                try {
                    for(T.s(); !(k = T.n()).done;){
                        const D = k.value;
                        const B = D[0];
                        const P = p.substring(x, D.index);
                        x = D.index + B.length;
                        const A = C.length === 0 ? P : C + P + B;
                        const R = this.calculateLabelDimensions(r, A);
                        const L = R.width;
                        if (L <= f) {
                            C += P + B;
                        } else {
                            if (C) {
                                d.push(C);
                            }
                            C = P + B;
                        }
                    }
                } catch (error) {
                    T.e(error);
                } finally{
                    T.f();
                }
                if (!C.match(/^[\s\u200b]+$/)) {
                    d.push(C);
                }
            } else {
                d.push(p);
            }
        }
        s("labelWrapCachedLines", d);
        strValue = s("labelWrapCachedText", d.join(`
`));
        s("labelWrapKey", u);
    } else if (value_1 === "ellipsis") {
        const I = r.pstyle("text-max-width").pfValue;
        let M = "";
        const O = "…";
        let q = false;
        if (this.calculateLabelDimensions(r, strValue).width < I) {
            return strValue;
        }
        for(let _ = 0; _ < strValue.length; _++){
            const N = this.calculateLabelDimensions(r, M + strValue[_] + O).width;
            if (N > I) {
                break;
            }
            M += strValue[_];
            if (_ === strValue.length - 1) {
                q = true;
            }
        }
        if (!q) {
            M += O;
        }
        return M;
    }
    return strValue;
};
Gr.getLabelJustification = (r)=>{
    const strValue = r.pstyle("text-justification").strValue;
    const strValue_1 = r.pstyle("text-halign").strValue;
    if (strValue === "auto") {
        if (r.isNode()) {
            switch(strValue_1){
                case "left":
                    return "right";
                case "right":
                    return "left";
                default:
                    return "center";
            }
        } else {
            return "center";
        }
    } else {
        return strValue;
    }
};
Gr.calculateLabelDimensions = function(r, e) {
    const t = this;
    const a = t.cy.window();
    const a_document = a.document;
    const i = 0;
    const strValue = r.pstyle("font-style").strValue;
    const pfValue = r.pstyle("font-size").pfValue;
    const strValue_1 = r.pstyle("font-family").strValue;
    const strValue_2 = r.pstyle("font-weight").strValue;
    let labelCalcCanvas = this.labelCalcCanvas;
    let labelCalcCanvasContext = this.labelCalcCanvasContext;
    if (!labelCalcCanvas) {
        labelCalcCanvas = this.labelCalcCanvas = a_document.createElement("canvas");
        labelCalcCanvasContext = this.labelCalcCanvasContext = labelCalcCanvas.getContext("2d");
        const c = labelCalcCanvas.style;
        c.position = "absolute";
        c.left = "-9999px";
        c.top = "-9999px";
        c.zIndex = "-1";
        c.visibility = "hidden";
        c.pointerEvents = "none";
    }
    labelCalcCanvasContext.font = `${strValue} ${strValue_2} ${pfValue}px ${strValue_1}`;
    let h = 0;
    let d = 0;
    for(let y = e.split(`
`), g = 0; g < y.length; g++){
        const p = y[g];
        const m = labelCalcCanvasContext.measureText(p);
        const b = Math.ceil(m.width);
        const w = pfValue;
        h = Math.max(b, h);
        d += w;
    }
    h += i;
    d += i;
    return {
        width: h,
        height: d
    };
};
Gr.calculateLabelAngle = (r, e)=>{
    const r__private = r._private;
    const t_rscratch = r__private.rscratch;
    const n = r.isEdge();
    const i = e ? `${e}-` : "";
    const s = r.pstyle(`${i}text-rotation`);
    const s_strValue = s.strValue;
    if (s_strValue === "none") {
        return 0;
    }
    if (n && s_strValue === "autorotate") {
        return t_rscratch.labelAutoAngle;
    }
    if (s_strValue === "autorotate") {
        return 0;
    }
    return s.pfValue;
};
Gr.calculateLabelAngles = function(r) {
    const e = this;
    const t = r.isEdge();
    const r__private = r._private;
    const a_rscratch = r__private.rscratch;
    a_rscratch.labelAngle = e.calculateLabelAngle(r);
    if (t) {
        a_rscratch.sourceLabelAngle = e.calculateLabelAngle(r, "source");
        a_rscratch.targetLabelAngle = e.calculateLabelAngle(r, "target");
    }
};
const mf = {};
const Rl = 28;
let Ml = false;
mf.getNodeShape = function(r) {
    const e = this;
    const value = r.pstyle("shape").value;
    if (value === "cutrectangle" && (r.width() < Rl || r.height() < Rl)) {
        if (!Ml) {
            ze("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead");
            Ml = true;
        }
        return "rectangle";
    }
    if (r.isParent()) {
        if (value === "rectangle" || value === "roundrectangle" || value === "round-rectangle" || value === "cutrectangle" || value === "cut-rectangle" || value === "barrel") {
            return value;
        }
        return "rectangle";
    }
    if (value === "polygon") {
        const a = r.pstyle("shape-polygon-points").value;
        return e.nodeShapes.makePolygon(a).name;
    }
    return value;
};
const Un = {};
Un.registerCalculationListeners = function() {
    const r = this.cy;
    let e = r.collection();
    const t = this;
    const a = (s, o = true)=>{
        e.merge(s);
        if (o) {
            for (const l of s){
                const v = l._private;
                const f = v.rstyle;
                f.clean = false;
                f.cleanConnected = false;
            }
        }
    };
    t.binder(r).on("bounds.* dirty.*", ({ target })=>{
        a(target);
    }).on("style.* background.*", ({ target })=>{
        a(target, false);
    });
    const n = (s)=>{
        if (s) {
            const o = t.onUpdateEleCalcsFns;
            e.cleanStyle();
            for (const l of e){
                const v = l._private.rstyle;
                if (l.isNode() && !v.cleanConnected) {
                    a(l.connectedEdges());
                    v.cleanConnected = true;
                }
            }
            if (o) {
                for (const c of o){
                    c(s, e);
                }
            }
            t.recalculateRenderedStyle(e);
            e = r.collection();
        }
    };
    t.flushRenderedStyleQueue = ()=>{
        n(true);
    };
    t.beforeRender(n, t.beforeRenderPriorities.eleCalcs);
};
Un.onUpdateEleCalcs = function(r) {
    const e = this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || [];
    e.push(r);
};
Un.recalculateRenderedStyle = function(r, e) {
    const t = (w)=>w._private.rstyle.cleanConnected;
    if (r.length !== 0) {
        const a = [];
        const n = [];
        if (!this.destroyed) {
            if (e === undefined) {
                e = true;
            }
            for (const s of r){
                const o = s._private;
                const u = o.rstyle;
                if (s.isEdge() && (!t(s.source()) || !t(s.target()))) {
                    u.clean = false;
                }
                if (s.isEdge() && s.isBundledBezier() && s.parallelEdges().some((b)=>!b._private.rstyle.clean && b.isBundledBezier())) {
                    u.clean = false;
                }
                if (!(e && u.clean || s.removed()) && s.pstyle("display").value !== "none") {
                    if (o.group === "nodes") {
                        n.push(s);
                    } else {
                        a.push(s);
                    }
                    u.clean = true;
                }
            }
            for (const v of n){
                const f = v._private;
                const c = f.rstyle;
                const h = v.position();
                this.recalculateNodeLabelProjection(v);
                c.nodeX = h.x;
                c.nodeY = h.y;
                c.nodeW = v.pstyle("width").pfValue;
                c.nodeH = v.pstyle("height").pfValue;
            }
            this.recalculateEdgeProjections(a);
            for (const y of a){
                const g = y._private;
                const { rstyle, rscratch } = g;
                rstyle.srcX = rscratch.arrowStartX;
                rstyle.srcY = rscratch.arrowStartY;
                rstyle.tgtX = rscratch.arrowEndX;
                rstyle.tgtY = rscratch.arrowEndY;
                rstyle.midX = rscratch.midX;
                rstyle.midY = rscratch.midY;
                rstyle.labelAngle = rscratch.labelAngle;
                rstyle.sourceLabelAngle = rscratch.sourceLabelAngle;
                rstyle.targetLabelAngle = rscratch.targetLabelAngle;
            }
        }
    }
};
const Kn = {};
Kn.updateCachedGrabbedEles = function() {
    const cachedZSortedEles = this.cachedZSortedEles;
    if (cachedZSortedEles) {
        cachedZSortedEles.drag = [];
        cachedZSortedEles.nondrag = [];
        const e = [];
        for(var t = 0; t < cachedZSortedEles.length; t++){
            var a = cachedZSortedEles[t];
            const n = a._private.rscratch;
            if (a.grabbed() && !a.isParent()) {
                e.push(a);
            } else if (n.inDragLayer) {
                cachedZSortedEles.drag.push(a);
            } else {
                cachedZSortedEles.nondrag.push(a);
            }
        }
        for(var t = 0; t < e.length; t++){
            var a = e[t];
            cachedZSortedEles.drag.push(a);
        }
    }
};
Kn.invalidateCachedZSortedEles = function() {
    this.cachedZSortedEles = null;
};
Kn.getCachedZSortedEles = function(r) {
    if (r || !this.cachedZSortedEles) {
        var e = this.cy.mutableElements().toArray();
        e.sort(Jv);
        e.interactive = e.filter((t)=>t.interactive());
        this.cachedZSortedEles = e;
        this.updateCachedGrabbedEles();
    } else {
        e = this.cachedZSortedEles;
    }
    return e;
};
const bf = {};
[
    Rt,
    kn,
    gr,
    qa,
    go,
    Gr,
    mf,
    Un,
    Kn
].forEach((r)=>{
    ye(bf, r);
});
const wf = {};
wf.getCachedImage = function(r, e, t) {
    const a = this;
    const n = a.imageCache = a.imageCache || {};
    let i = n[r];
    if (i) {
        if (!i.image.complete) {
            i.image.addEventListener("load", t);
        }
        return i.image;
    }
    i = n[r] = n[r] || {};
    const s = i.image = new Image;
    s.addEventListener("load", t);
    s.addEventListener("error", ()=>{
        s.error = true;
    });
    const o = "data:";
    const u = r.substring(0, o.length).toLowerCase() === o;
    if (!u) {
        e = e === "null" ? null : e;
        s.crossOrigin = e;
    }
    s.src = r;
    return s;
};
const xf = (e, t)=>{
    const a = e[0];
    if (!(!a || a._private.grabbed === t)) {
        a._private.grabbed = t;
        e.updateStyle(false);
    }
};
const ty = (e)=>{
    xf(e, true);
};
const ay = (e)=>{
    xf(e, false);
};
const aa = {};
aa.registerBinding = function(r, e, t, a) {
    const n = Array.prototype.slice.apply(arguments, [
        1
    ]);
    if (Array.isArray(r)) {
        const i = [];
        for (const o of r){
            if (o !== undefined) {
                var u = this.binder(o);
                i.push(u.on(...n));
            }
        }
        return i;
    }
    var u = this.binder(r);
    return u.on(...n);
};
aa.binder = function(r) {
    const e = this;
    const t = e.cy.window();
    const a = r === t || r === t.document || r === t.document.body || dc(r);
    if (e.supportsPassiveEvents == null) {
        let n = false;
        try {
            const i = Object.defineProperty({}, "passive", {
                get () {
                    n = true;
                    return true;
                }
            });
            t.addEventListener("test", null, i);
        } catch  {}
        e.supportsPassiveEvents = n;
    }
    const s = function(u, l, v) {
        const args = Array.prototype.slice.call(arguments);
        if (a && e.supportsPassiveEvents) {
            args[2] = {
                capture: v ?? false,
                passive: false,
                once: false
            };
        }
        e.bindings.push({
            target: r,
            args
        });
        (r.addEventListener || r.on).apply(r, args);
        return this;
    };
    return {
        on: s,
        addEventListener: s,
        addListener: s,
        bind: s
    };
};
aa.nodeIsDraggable = (r)=>r && r.isNode() && !r.locked() && r.grabbable();
aa.nodeIsGrabbable = function(r) {
    return this.nodeIsDraggable(r) && r.interactive();
};
aa.load = function() {
    const r = this;
    const e = r.cy.window();
    const t = (S)=>S.selected();
    const a = (container)=>{
        const z = container.getRootNode();
        if (z && z.nodeType === 11 && z.host !== undefined) {
            return z;
        }
    };
    const n = (S, z, originalEvent, position)=>{
        if (S == null) {
            S = r.cy;
        }
        for (const le of z){
            S.emit({
                originalEvent,
                type: le,
                position
            });
        }
    };
    const i = (S)=>S.shiftKey || S.metaKey || S.ctrlKey;
    const s = (S, z)=>{
        let G = true;
        if (r.cy.hasCompoundNodes() && S && S.pannable()) {
            for(let $ = 0; z && $ < z.length; $++){
                var S = z[$];
                if (S.isNode() && S.isParent() && !S.pannable()) {
                    G = false;
                    break;
                }
            }
        } else {
            G = true;
        }
        return G;
    };
    const o = (S)=>{
        S[0]._private.rscratch.inDragLayer = true;
    };
    const u = (S)=>{
        S[0]._private.rscratch.inDragLayer = false;
    };
    const l = (S)=>{
        S[0]._private.rscratch.isGrabTarget = true;
    };
    const v = (S)=>{
        S[0]._private.rscratch.isGrabTarget = false;
    };
    const f = (S, { addToList })=>{
        const $ = addToList.has(S);
        if (!$ && S.grabbable() && !S.locked()) {
            addToList.merge(S);
            ty(S);
        }
    };
    const c = (S, z)=>{
        if (S.cy().hasCompoundNodes() && !(z.inDragLayer == null && z.addToList == null)) {
            const G = S.descendants();
            if (z.inDragLayer) {
                G.forEach(o);
                G.connectedEdges().forEach(o);
            }
            if (z.addToList) {
                f(G, z);
            }
        }
    };
    const h = (S, z)=>{
        z = z || {};
        const G = S.cy().hasCompoundNodes();
        if (z.inDragLayer) {
            S.forEach(o);
            S.neighborhood().stdFilter(($)=>!G || $.isEdge()).forEach(o);
        }
        if (z.addToList) {
            S.forEach(($)=>{
                f($, z);
            });
        }
        c(S, z);
        g(S, {
            inDragLayer: z.inDragLayer
        });
        r.updateCachedGrabbedEles();
    };
    const d = h;
    const y = (S)=>{
        if (S) {
            r.getCachedZSortedEles().forEach((z)=>{
                ay(z);
                u(z);
                v(z);
            });
            r.updateCachedGrabbedEles();
        }
    };
    var g = (S, z)=>{
        if (!(z.inDragLayer == null && z.addToList == null) && S.cy().hasCompoundNodes()) {
            const G = S.ancestors().orphans();
            if (!G.same(S)) {
                const $ = G.descendants().spawnSelf().merge(G).unmerge(S).unmerge(S.descendants());
                const K = $.connectedEdges();
                if (z.inDragLayer) {
                    K.forEach(o);
                    $.forEach(o);
                }
                if (z.addToList) {
                    $.forEach((le)=>{
                        f(le, z);
                    });
                }
            }
        }
    };
    const p = ()=>{
        if (document.activeElement != null && document.activeElement.blur != null) {
            document.activeElement.blur();
        }
    };
    const m = typeof MutationObserver !== "undefined";
    const b = typeof ResizeObserver !== "undefined";
    if (m) {
        r.removeObserver = new MutationObserver((X)=>{
            for (const z of X){
                const G = z.removedNodes;
                if (G) {
                    for (const K of G){
                        if (K === r.container) {
                            r.destroy();
                            break;
                        }
                    }
                }
            }
        });
        if (r.container.parentNode) {
            r.removeObserver.observe(r.container.parentNode, {
                childList: true
            });
        }
    } else {
        r.registerBinding(r.container, "DOMNodeRemoved", (X)=>{
            r.destroy();
        });
    }
    const w = Na(()=>{
        r.cy.resize();
    }, 100);
    if (m) {
        r.styleObserver = new MutationObserver(w);
        r.styleObserver.observe(r.container, {
            attributes: true
        });
    }
    r.registerBinding(e, "resize", w);
    if (b) {
        r.resizeObserver = new ResizeObserver(w);
        r.resizeObserver.observe(r.container);
    }
    const E = (S, z)=>{
        while(S != null){
            z(S);
            S = S.parentNode;
        }
    };
    const C = ()=>{
        r.invalidateContainerClientCoordsCache();
    };
    E(r.container, (X)=>{
        r.registerBinding(X, "transitionend", C);
        r.registerBinding(X, "animationend", C);
        r.registerBinding(X, "scroll", C);
    });
    r.registerBinding(r.container, "contextmenu", (X)=>{
        X.preventDefault();
    });
    const x = ()=>r.selection[4] !== 0;
    const T = (S)=>{
        const z = r.findContainerClientCoords();
        const G = z[0];
        const $ = z[1];
        const K = z[2];
        const le = z[3];
        for(var ee = S.touches ? S.touches : [
            S
        ], ie = false, oe = 0; oe < ee.length; oe++){
            const pe = ee[oe];
            if (G <= pe.clientX && pe.clientX <= G + K && $ <= pe.clientY && pe.clientY <= $ + le) {
                ie = true;
                break;
            }
        }
        if (!ie) {
            return false;
        }
        const r_container = r.container;
        const S_target = S.target;
        for(var ve = S_target.parentNode, ke = false; ve;){
            if (ve === r_container) {
                ke = true;
                break;
            }
            ve = ve.parentNode;
        }
        return !!ke;
    };
    r.registerBinding(r.container, "mousedown", (S)=>{
        if (T(S) && !(r.hoverData.which === 1 && S.which !== 1)) {
            S.preventDefault();
            p();
            r.hoverData.capture = true;
            r.hoverData.which = S.which;
            const z = r.cy;
            const G = [
                S.clientX,
                S.clientY
            ];
            const $ = r.projectIntoViewport(G[0], G[1]);
            const K = r.selection;
            const le = r.findNearestElements($[0], $[1], true, false);
            const ee = le[0];
            let addToList = r.dragData.possibleDragElements;
            r.hoverData.mdownPos = $;
            r.hoverData.mdownGPos = G;
            const oe = (Pe)=>({
                    originalEvent: S,
                    type: Pe,
                    position: {
                        x: $[0],
                        y: $[1]
                    }
                });
            const pe = ()=>{
                r.hoverData.tapholdCancelled = false;
                clearTimeout(r.hoverData.tapholdTimeout);
                r.hoverData.tapholdTimeout = setTimeout(()=>{
                    if (!r.hoverData.tapholdCancelled) {
                        const Pe = r.hoverData.down;
                        if (Pe) {
                            Pe.emit(oe("taphold"));
                        } else {
                            z.emit(oe("taphold"));
                        }
                    }
                }, r.tapholdDuration);
            };
            if (S.which == 3) {
                r.hoverData.cxtStarted = true;
                const Ee = {
                    originalEvent: S,
                    type: "cxttapstart",
                    position: {
                        x: $[0],
                        y: $[1]
                    }
                };
                if (ee) {
                    ee.activate();
                    ee.emit(Ee);
                    r.hoverData.down = ee;
                } else {
                    z.emit(Ee);
                }
                r.hoverData.downTime = new Date().getTime();
                r.hoverData.cxtDragged = false;
            } else if (S.which == 1) {
                if (ee) {
                    ee.activate();
                }
                {
                    if (ee != null && r.nodeIsGrabbable(ee)) {
                        const Ce = (Pe)=>{
                            Pe.emit(oe("grab"));
                        };
                        l(ee);
                        if (!ee.selected()) {
                            addToList = r.dragData.possibleDragElements = z.collection();
                            d(ee, {
                                addToList
                            });
                            ee.emit(oe("grabon")).emit(oe("grab"));
                        } else {
                            addToList = r.dragData.possibleDragElements = z.collection();
                            const ve = z.$((ke)=>ke.isNode() && ke.selected() && r.nodeIsGrabbable(ke));
                            h(ve, {
                                addToList
                            });
                            ee.emit(oe("grabon"));
                            ve.forEach(Ce);
                        }
                        r.redrawHint("eles", true);
                        r.redrawHint("drag", true);
                    }
                    r.hoverData.down = ee;
                    r.hoverData.downs = le;
                    r.hoverData.downTime = new Date().getTime();
                }
                n(ee, [
                    "mousedown",
                    "tapstart",
                    "vmousedown"
                ], S, {
                    x: $[0],
                    y: $[1]
                });
                if (ee == null) {
                    K[4] = 1;
                    r.data.bgActivePosistion = {
                        x: $[0],
                        y: $[1]
                    };
                    r.redrawHint("select", true);
                    r.redraw();
                } else if (ee.pannable()) {
                    K[4] = 1;
                }
                pe();
            }
            K[0] = K[2] = $[0];
            K[1] = K[3] = $[1];
        }
    }, false);
    const k = a(r.container);
    r.registerBinding([
        e,
        k
    ], "mousemove", (S)=>{
        const capture = r.hoverData.capture;
        if (!(!capture && !T(S))) {
            let G = false;
            const $ = r.cy;
            const K = $.zoom();
            const le = [
                S.clientX,
                S.clientY
            ];
            let ee = r.projectIntoViewport(le[0], le[1]);
            const ie = r.hoverData.mdownPos;
            const oe = r.hoverData.mdownGPos;
            const pe = r.selection;
            let Ee = null;
            if (!r.hoverData.draggingEles && !r.hoverData.dragging && !r.hoverData.selecting) {
                Ee = r.findNearestElement(ee[0], ee[1], true, false);
            }
            const Ce = r.hoverData.last;
            const ve = r.hoverData.down;
            const ke = [
                ee[0] - pe[2],
                ee[1] - pe[3]
            ];
            const Pe = r.dragData.possibleDragElements;
            let ar;
            if (oe) {
                const Ue = le[0] - oe[0];
                const Pr = Ue * Ue;
                const Ke = le[1] - oe[1];
                const Ye = Ke * Ke;
                const Je = Pr + Ye;
                r.hoverData.isOverThresholdDrag = ar = Je >= r.desktopTapThreshold2;
            }
            const or = i(S);
            if (ar) {
                r.hoverData.tapholdCancelled = true;
            }
            const Nr = ()=>{
                const Sr = r.hoverData.dragDelta = r.hoverData.dragDelta || [];
                if (Sr.length === 0) {
                    Sr.push(ke[0]);
                    Sr.push(ke[1]);
                } else {
                    Sr[0] += ke[0];
                    Sr[1] += ke[1];
                }
            };
            G = true;
            n(Ee, [
                "mousemove",
                "vmousemove",
                "tapdrag"
            ], S, {
                x: ee[0],
                y: ee[1]
            });
            const We = (Sr)=>({
                    originalEvent: S,
                    type: Sr,
                    position: {
                        x: ee[0],
                        y: ee[1]
                    }
                });
            const Wr = ()=>{
                r.data.bgActivePosistion = undefined;
                if (!r.hoverData.selecting) {
                    $.emit(We("boxstart"));
                }
                pe[4] = 1;
                r.hoverData.selecting = true;
                r.redrawHint("select", true);
                r.redraw();
            };
            if (r.hoverData.which === 3) {
                if (ar) {
                    const Ar = We("cxtdrag");
                    if (ve) {
                        ve.emit(Ar);
                    } else {
                        $.emit(Ar);
                    }
                    r.hoverData.cxtDragged = true;
                    if (!r.hoverData.cxtOver || Ee !== r.hoverData.cxtOver) {
                        if (r.hoverData.cxtOver) {
                            r.hoverData.cxtOver.emit(We("cxtdragout"));
                        }
                        r.hoverData.cxtOver = Ee;
                        if (Ee) {
                            Ee.emit(We("cxtdragover"));
                        }
                    }
                }
            } else if (r.hoverData.dragging) {
                G = true;
                if ($.panningEnabled() && $.userPanningEnabled()) {
                    let Jr;
                    if (r.hoverData.justStartedPan) {
                        const Ha = r.hoverData.mdownPos;
                        Jr = {
                            x: (ee[0] - Ha[0]) * K,
                            y: (ee[1] - Ha[1]) * K
                        };
                        r.hoverData.justStartedPan = false;
                    } else {
                        Jr = {
                            x: ke[0] * K,
                            y: ke[1] * K
                        };
                    }
                    $.panBy(Jr);
                    $.emit(We("dragpan"));
                    r.hoverData.dragged = true;
                }
                ee = r.projectIntoViewport(S.clientX, S.clientY);
            } else if (pe[4] == 1 && (ve == null || ve.pannable())) {
                if (ar) {
                    if (!r.hoverData.dragging && $.boxSelectionEnabled() && (or || !$.panningEnabled() || !$.userPanningEnabled())) {
                        Wr();
                    } else if (!r.hoverData.selecting && $.panningEnabled() && $.userPanningEnabled()) {
                        const mt = s(ve, r.hoverData.downs);
                        if (mt) {
                            r.hoverData.dragging = true;
                            r.hoverData.justStartedPan = true;
                            pe[4] = 0;
                            r.data.bgActivePosistion = Gt(ie);
                            r.redrawHint("select", true);
                            r.redraw();
                        }
                    }
                    if (ve && ve.pannable() && ve.active()) {
                        ve.unactivate();
                    }
                }
            } else {
                if (ve && ve.pannable() && ve.active()) {
                    ve.unactivate();
                }
                if ((!ve || !ve.grabbed()) && Ee != Ce) {
                    if (Ce) {
                        n(Ce, [
                            "mouseout",
                            "tapdragout"
                        ], S, {
                            x: ee[0],
                            y: ee[1]
                        });
                    }
                    if (Ee) {
                        n(Ee, [
                            "mouseover",
                            "tapdragover"
                        ], S, {
                            x: ee[0],
                            y: ee[1]
                        });
                    }
                    r.hoverData.last = Ee;
                }
                if (ve) {
                    if (ar) {
                        if ($.boxSelectionEnabled() && or) {
                            if (ve && ve.grabbed()) {
                                y(Pe);
                                ve.emit(We("freeon"));
                                Pe.emit(We("free"));
                                if (r.dragData.didDrag) {
                                    ve.emit(We("dragfreeon"));
                                    Pe.emit(We("dragfree"));
                                }
                            }
                            Wr();
                        } else if (ve && ve.grabbed() && r.nodeIsDraggable(ve)) {
                            const br = !r.dragData.didDrag;
                            if (br) {
                                r.redrawHint("eles", true);
                            }
                            r.dragData.didDrag = true;
                            if (!r.hoverData.draggingEles) {
                                h(Pe, {
                                    inDragLayer: true
                                });
                            }
                            const cr = {
                                x: 0,
                                y: 0
                            };
                            if (ae(ke[0]) && ae(ke[1]) && (cr.x += ke[0], cr.y += ke[1], br)) {
                                const wr = r.hoverData.dragDelta;
                                if (wr && ae(wr[0]) && ae(wr[1])) {
                                    cr.x += wr[0];
                                    cr.y += wr[1];
                                }
                            }
                            r.hoverData.draggingEles = true;
                            Pe.silentShift(cr).emit(We("position")).emit(We("drag"));
                            r.redrawHint("drag", true);
                            r.redraw();
                        }
                    } else {
                        Nr();
                    }
                }
                G = true;
            }
            pe[2] = ee[0];
            pe[3] = ee[1];
            if (G) {
                if (S.stopPropagation) {
                    S.stopPropagation();
                }
                if (S.preventDefault) {
                    S.preventDefault();
                }
                return false;
            }
        }
    }, false);
    let D;
    let B;
    let P;
    r.registerBinding(e, "mouseup", (S)=>{
        if (!(r.hoverData.which === 1 && S.which !== 1 && r.hoverData.capture)) {
            const z = r.hoverData.capture;
            if (z) {
                r.hoverData.capture = false;
                const G = r.cy;
                const $ = r.projectIntoViewport(S.clientX, S.clientY);
                const K = r.selection;
                const le = r.findNearestElement($[0], $[1], true, false);
                let ee = r.dragData.possibleDragElements;
                const ie = r.hoverData.down;
                const oe = i(S);
                if (r.data.bgActivePosistion) {
                    r.redrawHint("select", true);
                    r.redraw();
                }
                r.hoverData.tapholdCancelled = true;
                r.data.bgActivePosistion = undefined;
                if (ie) {
                    ie.unactivate();
                }
                const pe = (Ue)=>({
                        originalEvent: S,
                        type: Ue,
                        position: {
                            x: $[0],
                            y: $[1]
                        }
                    });
                if (r.hoverData.which === 3) {
                    const Ee = pe("cxttapend");
                    if (ie) {
                        ie.emit(Ee);
                    } else {
                        G.emit(Ee);
                    }
                    if (!r.hoverData.cxtDragged) {
                        const Ce = pe("cxttap");
                        if (ie) {
                            ie.emit(Ce);
                        } else {
                            G.emit(Ce);
                        }
                    }
                    r.hoverData.cxtDragged = false;
                    r.hoverData.which = null;
                } else if (r.hoverData.which === 1) {
                    n(le, [
                        "mouseup",
                        "tapend",
                        "vmouseup"
                    ], S, {
                        x: $[0],
                        y: $[1]
                    });
                    if (!r.dragData.didDrag && !r.hoverData.dragged && !r.hoverData.selecting && !r.hoverData.isOverThresholdDrag) {
                        n(ie, [
                            "click",
                            "tap",
                            "vclick"
                        ], S, {
                            x: $[0],
                            y: $[1]
                        });
                        B = false;
                        if (S.timeStamp - P <= G.multiClickDebounceTime()) {
                            if (D) {
                                clearTimeout(D);
                            }
                            B = true;
                            P = null;
                            n(ie, [
                                "dblclick",
                                "dbltap",
                                "vdblclick"
                            ], S, {
                                x: $[0],
                                y: $[1]
                            });
                        } else {
                            D = setTimeout(()=>{
                                if (!B) {
                                    n(ie, [
                                        "oneclick",
                                        "onetap",
                                        "voneclick"
                                    ], S, {
                                        x: $[0],
                                        y: $[1]
                                    });
                                }
                            }, G.multiClickDebounceTime());
                            P = S.timeStamp;
                        }
                    }
                    if (ie == null && !r.dragData.didDrag && !r.hoverData.selecting && !r.hoverData.dragged && !i(S)) {
                        G.$(t).unselect([
                            "tapunselect"
                        ]);
                        if (ee.length > 0) {
                            r.redrawHint("eles", true);
                        }
                        r.dragData.possibleDragElements = ee = G.collection();
                    }
                    if (le == ie && !r.dragData.didDrag && !r.hoverData.selecting && le != null && le._private.selectable) {
                        r.hoverData.dragging || (G.selectionType() === "additive" || oe ? le.selected() ? le.unselect([
                            "tapunselect"
                        ]) : le.select([
                            "tapselect"
                        ]) : oe || (G.$(t).unmerge(le).unselect([
                            "tapunselect"
                        ]), le.select([
                            "tapselect"
                        ])));
                        r.redrawHint("eles", true);
                    }
                    if (r.hoverData.selecting) {
                        const ve = G.collection(r.getAllInBox(K[0], K[1], K[2], K[3]));
                        r.redrawHint("select", true);
                        if (ve.length > 0) {
                            r.redrawHint("eles", true);
                        }
                        G.emit(pe("boxend"));
                        const ke = (Ue)=>Ue.selectable() && !Ue.selected();
                        if (!(G.selectionType() === "additive" || oe)) {
                            G.$(t).unmerge(ve).unselect();
                        }
                        ve.emit(pe("box")).stdFilter(ke).select().emit(pe("boxselect"));
                        r.redraw();
                    }
                    if (r.hoverData.dragging) {
                        r.hoverData.dragging = false;
                        r.redrawHint("select", true);
                        r.redrawHint("eles", true);
                        r.redraw();
                    }
                    if (!K[4]) {
                        r.redrawHint("drag", true);
                        r.redrawHint("eles", true);
                        const Pe = ie && ie.grabbed();
                        y(ee);
                        if (Pe) {
                            ie.emit(pe("freeon"));
                            ee.emit(pe("free"));
                            if (r.dragData.didDrag) {
                                ie.emit(pe("dragfreeon"));
                                ee.emit(pe("dragfree"));
                            }
                        }
                    }
                }
                K[4] = 0;
                r.hoverData.down = null;
                r.hoverData.cxtStarted = false;
                r.hoverData.draggingEles = false;
                r.hoverData.selecting = false;
                r.hoverData.isOverThresholdDrag = false;
                r.dragData.didDrag = false;
                r.hoverData.dragged = false;
                r.hoverData.dragDelta = [];
                r.hoverData.mdownPos = null;
                r.hoverData.mdownGPos = null;
                r.hoverData.which = null;
            }
        }
    }, false);
    const A = [];
    const R = 4;
    let L;
    let I = 100000;
    const M = (S, z)=>{
        for(let G = 0; G < S.length; G++){
            if (S[G] % z !== 0) {
                return false;
            }
        }
        return true;
    };
    const O = (S)=>{
        const z = Math.abs(S[0]);
        for(let G = 1; G < S.length; G++){
            if (Math.abs(S[G]) !== z) {
                return false;
            }
        }
        return true;
    };
    const q = (S)=>{
        let z = false;
        let S_deltaY = S.deltaY;
        S_deltaY == null && (S.wheelDeltaY != null ? S_deltaY = S.wheelDeltaY / 4 : S.wheelDelta != null && (S_deltaY = S.wheelDelta / 4));
        if (S_deltaY !== 0) {
            if (L == null) {
                if (A.length >= R) {
                    const $ = A;
                    L = M($, 5);
                    if (!L) {
                        const K = Math.abs($[0]);
                        L = O($) && K > 5;
                    }
                    if (L) {
                        for(let le = 0; le < $.length; le++){
                            I = Math.min(Math.abs($[le]), I);
                        }
                    }
                } else {
                    A.push(S_deltaY);
                    z = true;
                }
            } else {
                if (L) {
                    I = Math.min(Math.abs(S_deltaY), I);
                }
            }
            if (!r.scrollingPage) {
                const ee = r.cy;
                const ie = ee.zoom();
                const oe = ee.pan();
                const pe = r.projectIntoViewport(S.clientX, S.clientY);
                const Ee = [
                    pe[0] * ie + oe.x,
                    pe[1] * ie + oe.y
                ];
                if (r.hoverData.draggingEles || r.hoverData.dragging || r.hoverData.cxtStarted || x()) {
                    S.preventDefault();
                    return;
                }
                if (ee.panningEnabled() && ee.userPanningEnabled() && ee.zoomingEnabled() && ee.userZoomingEnabled()) {
                    S.preventDefault();
                    r.data.wheelZooming = true;
                    clearTimeout(r.data.wheelTimeout);
                    r.data.wheelTimeout = setTimeout(()=>{
                        r.data.wheelZooming = false;
                        r.redrawHint("eles", true);
                        r.redraw();
                    }, 150);
                    let Ce;
                    if (z && Math.abs(S_deltaY) > 5) {
                        S_deltaY = eo(S_deltaY) * 5;
                    }
                    Ce = S_deltaY / -250;
                    if (L) {
                        Ce /= I;
                        Ce *= 3;
                    }
                    Ce = Ce * r.wheelSensitivity;
                    const ve = S.deltaMode === 1;
                    if (ve) {
                        Ce *= 33;
                    }
                    let ke = ee.zoom() * 10 ** Ce;
                    if (S.type === "gesturechange") {
                        ke = r.gestureStartZoom * S.scale;
                    }
                    ee.zoom({
                        level: ke,
                        renderedPosition: {
                            x: Ee[0],
                            y: Ee[1]
                        }
                    });
                    ee.emit({
                        type: S.type === "gesturechange" ? "pinchzoom" : "scrollzoom",
                        originalEvent: S,
                        position: {
                            x: pe[0],
                            y: pe[1]
                        }
                    });
                }
            }
        }
    };
    r.registerBinding(r.container, "wheel", q, true);
    r.registerBinding(e, "scroll", (S)=>{
        r.scrollingPage = true;
        clearTimeout(r.scrollingPageTimeout);
        r.scrollingPageTimeout = setTimeout(()=>{
            r.scrollingPage = false;
        }, 250);
    }, true);
    r.registerBinding(r.container, "gesturestart", (S)=>{
        r.gestureStartZoom = r.cy.zoom();
        if (!r.hasTouchStarted) {
            S.preventDefault();
        }
    }, true);
    r.registerBinding(r.container, "gesturechange", (X)=>{
        if (!r.hasTouchStarted) {
            q(X);
        }
    }, true);
    r.registerBinding(r.container, "mouseout", (S)=>{
        const z = r.projectIntoViewport(S.clientX, S.clientY);
        r.cy.emit({
            originalEvent: S,
            type: "mouseout",
            position: {
                x: z[0],
                y: z[1]
            }
        });
    }, false);
    r.registerBinding(r.container, "mouseover", (S)=>{
        const z = r.projectIntoViewport(S.clientX, S.clientY);
        r.cy.emit({
            originalEvent: S,
            type: "mouseover",
            position: {
                x: z[0],
                y: z[1]
            }
        });
    }, false);
    let _;
    let N;
    let F;
    let U;
    let J;
    let Z;
    let j;
    let re;
    let ne;
    let Q;
    let V;
    let H;
    let W;
    const Y = (S, z, G, $)=>Math.sqrt((G - S) * (G - S) + ($ - z) * ($ - z));
    const te = (S, z, G, $)=>(G - S) * (G - S) + ($ - z) * ($ - z);
    let ce;
    r.registerBinding(r.container, "touchstart", ce = (S)=>{
        r.hasTouchStarted = true;
        if (T(S)) {
            p();
            r.touchData.capture = true;
            r.data.bgActivePosistion = undefined;
            const z = r.cy;
            const G = r.touchData.now;
            const $ = r.touchData.earlier;
            if (S.touches[0]) {
                var K = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
                G[0] = K[0];
                G[1] = K[1];
            }
            if (S.touches[1]) {
                var K = r.projectIntoViewport(S.touches[1].clientX, S.touches[1].clientY);
                G[2] = K[0];
                G[3] = K[1];
            }
            if (S.touches[2]) {
                var K = r.projectIntoViewport(S.touches[2].clientX, S.touches[2].clientY);
                G[4] = K[0];
                G[5] = K[1];
            }
            const le = (or)=>({
                    originalEvent: S,
                    type: or,
                    position: {
                        x: G[0],
                        y: G[1]
                    }
                });
            if (S.touches[1]) {
                r.touchData.singleTouchMoved = true;
                y(r.dragData.touchDragEles);
                const ee = r.findContainerClientCoords();
                ne = ee[0];
                Q = ee[1];
                V = ee[2];
                H = ee[3];
                _ = S.touches[0].clientX - ne;
                N = S.touches[0].clientY - Q;
                F = S.touches[1].clientX - ne;
                U = S.touches[1].clientY - Q;
                W = _ >= 0 && _ <= V && F >= 0 && F <= V && N >= 0 && N <= H && U >= 0 && U <= H;
                const ie = z.pan();
                const oe = z.zoom();
                J = Y(_, N, F, U);
                Z = te(_, N, F, U);
                j = [
                    (_ + F) / 2,
                    (N + U) / 2
                ];
                re = [
                    (j[0] - ie.x) / oe,
                    (j[1] - ie.y) / oe
                ];
                const pe = 200;
                const Ee = pe * pe;
                if (Z < Ee && !S.touches[2]) {
                    const Ce = r.findNearestElement(G[0], G[1], true, true);
                    const ve = r.findNearestElement(G[2], G[3], true, true);
                    if (Ce && Ce.isNode()) {
                        Ce.activate().emit(le("cxttapstart"));
                        r.touchData.start = Ce;
                    } else if (ve && ve.isNode()) {
                        ve.activate().emit(le("cxttapstart"));
                        r.touchData.start = ve;
                    } else {
                        z.emit(le("cxttapstart"));
                    }
                    if (r.touchData.start) {
                        r.touchData.start._private.grabbed = false;
                    }
                    r.touchData.cxt = true;
                    r.touchData.cxtDragged = false;
                    r.data.bgActivePosistion = undefined;
                    r.redraw();
                    return;
                }
            }
            if (S.touches[2]) {
                if (z.boxSelectionEnabled()) {
                    S.preventDefault();
                }
            } else if (!S.touches[1]) {
                if (S.touches[0]) {
                    const ke = r.findNearestElements(G[0], G[1], true, true);
                    const Pe = ke[0];
                    if (Pe != null && (Pe.activate(), r.touchData.start = Pe, r.touchData.starts = ke, r.nodeIsGrabbable(Pe))) {
                        const addToList = r.dragData.touchDragEles = z.collection();
                        let Ue = null;
                        r.redrawHint("eles", true);
                        r.redrawHint("drag", true);
                        if (Pe.selected()) {
                            Ue = z.$((Je)=>Je.selected() && r.nodeIsGrabbable(Je));
                            h(Ue, {
                                addToList
                            });
                        } else {
                            d(Pe, {
                                addToList
                            });
                        }
                        l(Pe);
                        Pe.emit(le("grabon"));
                        if (Ue) {
                            Ue.forEach((Je)=>{
                                Je.emit(le("grab"));
                            });
                        } else {
                            Pe.emit(le("grab"));
                        }
                    }
                    n(Pe, [
                        "touchstart",
                        "tapstart",
                        "vmousedown"
                    ], S, {
                        x: G[0],
                        y: G[1]
                    });
                    if (Pe == null) {
                        r.data.bgActivePosistion = {
                            x: K[0],
                            y: K[1]
                        };
                        r.redrawHint("select", true);
                        r.redraw();
                    }
                    r.touchData.singleTouchMoved = false;
                    r.touchData.singleTouchStartTime = +new Date;
                    clearTimeout(r.touchData.tapholdTimeout);
                    r.touchData.tapholdTimeout = setTimeout(()=>{
                        if (r.touchData.singleTouchMoved === false && !r.pinching && !r.touchData.selecting) {
                            n(r.touchData.start, [
                                "taphold"
                            ], S, {
                                x: G[0],
                                y: G[1]
                            });
                        }
                    }, r.tapholdDuration);
                }
            }
            if (S.touches.length >= 1) {
                const Pr = r.touchData.startPosition = [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ];
                for(let Ke = 0; Ke < G.length; Ke++){
                    Pr[Ke] = $[Ke] = G[Ke];
                }
                const Ye = S.touches[0];
                r.touchData.startGPosition = [
                    Ye.clientX,
                    Ye.clientY
                ];
            }
        }
    }, false);
    let Be;
    r.registerBinding(e, "touchmove", Be = function(S) {
        const capture = r.touchData.capture;
        if (!(!capture && !T(S))) {
            const { selection, cy } = r;
            const K = r.touchData.now;
            const le = r.touchData.earlier;
            const ee = cy.zoom();
            if (S.touches[0]) {
                var ie = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
                K[0] = ie[0];
                K[1] = ie[1];
            }
            if (S.touches[1]) {
                var ie = r.projectIntoViewport(S.touches[1].clientX, S.touches[1].clientY);
                K[2] = ie[0];
                K[3] = ie[1];
            }
            if (S.touches[2]) {
                var ie = r.projectIntoViewport(S.touches[2].clientX, S.touches[2].clientY);
                K[4] = ie[0];
                K[5] = ie[1];
            }
            const oe = (Jf)=>({
                    originalEvent: S,
                    type: Jf,
                    position: {
                        x: K[0],
                        y: K[1]
                    }
                });
            const pe = r.touchData.startGPosition;
            let Ee;
            if (capture && S.touches[0] && pe) {
                var Ce = [];
                for(var ve = 0; ve < K.length; ve++){
                    Ce[ve] = K[ve] - le[ve];
                }
                var ke = S.touches[0].clientX - pe[0];
                const Pe = ke * ke;
                var ar = S.touches[0].clientY - pe[1];
                const Ue = ar * ar;
                const Pr = Pe + Ue;
                Ee = Pr >= r.touchTapThreshold2;
            }
            if (capture && r.touchData.cxt) {
                S.preventDefault();
                var Ke = S.touches[0].clientX - ne;
                var Ye = S.touches[0].clientY - Q;
                var Je = S.touches[1].clientX - ne;
                var or = S.touches[1].clientY - Q;
                const Nr = te(Ke, Ye, Je, or);
                const We = Nr / Z;
                const Wr = 150;
                const Ar = Wr * Wr;
                const Jr = 1.5;
                const Ha = Jr * Jr;
                if (We >= Ha || Nr >= Ar) {
                    r.touchData.cxt = false;
                    r.data.bgActivePosistion = undefined;
                    r.redrawHint("select", true);
                    var mt = oe("cxttapend");
                    if (r.touchData.start) {
                        r.touchData.start.unactivate().emit(mt);
                        r.touchData.start = null;
                    } else {
                        cy.emit(mt);
                    }
                }
            }
            if (capture && r.touchData.cxt) {
                var mt = oe("cxtdrag");
                r.data.bgActivePosistion = undefined;
                r.redrawHint("select", true);
                if (r.touchData.start) {
                    r.touchData.start.emit(mt);
                } else {
                    cy.emit(mt);
                }
                if (r.touchData.start) {
                    r.touchData.start._private.grabbed = false;
                }
                r.touchData.cxtDragged = true;
                var br = r.findNearestElement(K[0], K[1], true, true);
                if (!r.touchData.cxtOver || br !== r.touchData.cxtOver) {
                    if (r.touchData.cxtOver) {
                        r.touchData.cxtOver.emit(oe("cxtdragout"));
                    }
                    r.touchData.cxtOver = br;
                    if (br) {
                        br.emit(oe("cxtdragover"));
                    }
                }
            } else if (capture && S.touches[2] && cy.boxSelectionEnabled()) {
                S.preventDefault();
                r.data.bgActivePosistion = undefined;
                this.lastThreeTouch = +new Date;
                if (!r.touchData.selecting) {
                    cy.emit(oe("boxstart"));
                }
                r.touchData.selecting = true;
                r.touchData.didSelect = true;
                selection[4] = 1;
                if (!selection || selection.length === 0 || selection[0] === undefined) {
                    selection[0] = (K[0] + K[2] + K[4]) / 3;
                    selection[1] = (K[1] + K[3] + K[5]) / 3;
                    selection[2] = (K[0] + K[2] + K[4]) / 3 + 1;
                    selection[3] = (K[1] + K[3] + K[5]) / 3 + 1;
                } else {
                    selection[2] = (K[0] + K[2] + K[4]) / 3;
                    selection[3] = (K[1] + K[3] + K[5]) / 3;
                }
                r.redrawHint("select", true);
                r.redraw();
            } else if (capture && S.touches[1] && !r.touchData.didSelect && cy.zoomingEnabled() && cy.panningEnabled() && cy.userZoomingEnabled() && cy.userPanningEnabled()) {
                S.preventDefault();
                r.data.bgActivePosistion = undefined;
                r.redrawHint("select", true);
                var cr = r.dragData.touchDragEles;
                if (cr) {
                    r.redrawHint("drag", true);
                    for(var wr = 0; wr < cr.length; wr++){
                        const ia = cr[wr]._private;
                        ia.grabbed = false;
                        ia.rscratch.inDragLayer = false;
                    }
                }
                const Sr = r.touchData.start;
                var Ke = S.touches[0].clientX - ne;
                var Ye = S.touches[0].clientY - Q;
                var Je = S.touches[1].clientX - ne;
                var or = S.touches[1].clientY - Q;
                const mo = Y(Ke, Ye, Je, or);
                const Hf = mo / J;
                if (W) {
                    const Wf = Ke - _;
                    const $f = Ye - N;
                    const Uf = Je - F;
                    const Kf = or - U;
                    const Xf = (Wf + Uf) / 2;
                    const Yf = ($f + Kf) / 2;
                    const sa = cy.zoom();
                    const Xn = sa * Hf;
                    const Wa = cy.pan();
                    const bo = re[0] * sa + Wa.x;
                    const wo = re[1] * sa + Wa.y;
                    const Zf = {
                        x: -Xn / sa * (bo - Wa.x - Xf) + bo,
                        y: -Xn / sa * (wo - Wa.y - Yf) + wo
                    };
                    if (Sr && Sr.active()) {
                        var cr = r.dragData.touchDragEles;
                        y(cr);
                        r.redrawHint("drag", true);
                        r.redrawHint("eles", true);
                        Sr.unactivate().emit(oe("freeon"));
                        cr.emit(oe("free"));
                        if (r.dragData.didDrag) {
                            Sr.emit(oe("dragfreeon"));
                            cr.emit(oe("dragfree"));
                        }
                    }
                    cy.viewport({
                        zoom: Xn,
                        pan: Zf,
                        cancelOnFailedZoom: true
                    });
                    cy.emit(oe("pinchzoom"));
                    J = mo;
                    _ = Ke;
                    N = Ye;
                    F = Je;
                    U = or;
                    r.pinching = true;
                }
                if (S.touches[0]) {
                    var ie = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
                    K[0] = ie[0];
                    K[1] = ie[1];
                }
                if (S.touches[1]) {
                    var ie = r.projectIntoViewport(S.touches[1].clientX, S.touches[1].clientY);
                    K[2] = ie[0];
                    K[3] = ie[1];
                }
                if (S.touches[2]) {
                    var ie = r.projectIntoViewport(S.touches[2].clientX, S.touches[2].clientY);
                    K[4] = ie[0];
                    K[5] = ie[1];
                }
            } else if (S.touches[0] && !r.touchData.didSelect) {
                const Rr = r.touchData.start;
                const Yn = r.touchData.last;
                var br;
                if (!r.hoverData.draggingEles && !r.swipePanning) {
                    br = r.findNearestElement(K[0], K[1], true, true);
                }
                if (capture && Rr != null) {
                    S.preventDefault();
                }
                if (capture && Rr != null && r.nodeIsDraggable(Rr)) {
                    if (Ee) {
                        var cr = r.dragData.touchDragEles;
                        const xo = !r.dragData.didDrag;
                        if (xo) {
                            h(cr, {
                                inDragLayer: true
                            });
                        }
                        r.dragData.didDrag = true;
                        const oa = {
                            x: 0,
                            y: 0
                        };
                        if (ae(Ce[0]) && ae(Ce[1]) && (oa.x += Ce[0], oa.y += Ce[1], xo)) {
                            r.redrawHint("eles", true);
                            var Mr = r.touchData.dragDelta;
                            if (Mr && ae(Mr[0]) && ae(Mr[1])) {
                                oa.x += Mr[0];
                                oa.y += Mr[1];
                            }
                        }
                        r.hoverData.draggingEles = true;
                        cr.silentShift(oa).emit(oe("position")).emit(oe("drag"));
                        r.redrawHint("drag", true);
                        if (r.touchData.startPosition[0] == le[0] && r.touchData.startPosition[1] == le[1]) {
                            r.redrawHint("eles", true);
                        }
                        r.redraw();
                    } else {
                        var Mr = r.touchData.dragDelta = r.touchData.dragDelta || [];
                        if (Mr.length === 0) {
                            Mr.push(Ce[0]);
                            Mr.push(Ce[1]);
                        } else {
                            Mr[0] += Ce[0];
                            Mr[1] += Ce[1];
                        }
                    }
                }
                n(Rr || br, [
                    "touchmove",
                    "tapdrag",
                    "vmousemove"
                ], S, {
                    x: K[0],
                    y: K[1]
                });
                (!Rr || !Rr.grabbed()) && br != Yn && (Yn && Yn.emit(oe("tapdragout")), br && br.emit(oe("tapdragover")));
                r.touchData.last = br;
                if (capture) {
                    for(var wr = 0; wr < K.length; wr++){
                        if (K[wr] && r.touchData.startPosition[wr] && Ee) {
                            r.touchData.singleTouchMoved = true;
                        }
                    }
                }
                if (capture && (Rr == null || Rr.pannable()) && cy.panningEnabled() && cy.userPanningEnabled()) {
                    const Qf = s(Rr, r.touchData.starts);
                    if (Qf) {
                        S.preventDefault();
                        if (!r.data.bgActivePosistion) {
                            r.data.bgActivePosistion = Gt(r.touchData.startPosition);
                        }
                        if (r.swipePanning) {
                            cy.panBy({
                                x: Ce[0] * ee,
                                y: Ce[1] * ee
                            });
                            cy.emit(oe("dragpan"));
                        } else if (Ee) {
                            r.swipePanning = true;
                            cy.panBy({
                                x: ke * ee,
                                y: ar * ee
                            });
                            cy.emit(oe("dragpan"));
                            if (Rr) {
                                Rr.unactivate();
                                r.redrawHint("select", true);
                                r.touchData.start = null;
                            }
                        }
                    }
                    var ie = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
                    K[0] = ie[0];
                    K[1] = ie[1];
                }
            }
            for(var ve = 0; ve < K.length; ve++){
                le[ve] = K[ve];
            }
            if (capture && S.touches.length > 0 && !r.hoverData.draggingEles && !r.swipePanning && r.data.bgActivePosistion != null) {
                r.data.bgActivePosistion = undefined;
                r.redrawHint("select", true);
                r.redraw();
            }
        }
    }, false);
    let we;
    r.registerBinding(e, "touchcancel", we = (S)=>{
        const start = r.touchData.start;
        r.touchData.capture = false;
        if (start) {
            start.unactivate();
        }
    });
    let me;
    let ge;
    let se;
    let de;
    r.registerBinding(e, "touchend", me = (S)=>{
        const start = r.touchData.start;
        const capture = r.touchData.capture;
        if (capture) {
            if (S.touches.length === 0) {
                r.touchData.capture = false;
            }
            S.preventDefault();
        } else {
            return;
        }
        const r_selection = r.selection;
        r.swipePanning = false;
        r.hoverData.draggingEles = false;
        const K = r.cy;
        const le = K.zoom();
        const now = r.touchData.now;
        const earlier = r.touchData.earlier;
        if (S.touches[0]) {
            var oe = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
            now[0] = oe[0];
            now[1] = oe[1];
        }
        if (S.touches[1]) {
            var oe = r.projectIntoViewport(S.touches[1].clientX, S.touches[1].clientY);
            now[2] = oe[0];
            now[3] = oe[1];
        }
        if (S.touches[2]) {
            var oe = r.projectIntoViewport(S.touches[2].clientX, S.touches[2].clientY);
            now[4] = oe[0];
            now[5] = oe[1];
        }
        const pe = (Ar)=>({
                originalEvent: S,
                type: Ar,
                position: {
                    x: now[0],
                    y: now[1]
                }
            });
        if (start) {
            start.unactivate();
        }
        let Ee;
        if (r.touchData.cxt) {
            Ee = pe("cxttapend");
            if (start) {
                start.emit(Ee);
            } else {
                K.emit(Ee);
            }
            if (!r.touchData.cxtDragged) {
                const Ce = pe("cxttap");
                if (start) {
                    start.emit(Ce);
                } else {
                    K.emit(Ce);
                }
            }
            if (r.touchData.start) {
                r.touchData.start._private.grabbed = false;
            }
            r.touchData.cxt = false;
            r.touchData.start = null;
            r.redraw();
            return;
        }
        if (!S.touches[2] && K.boxSelectionEnabled() && r.touchData.selecting) {
            r.touchData.selecting = false;
            const ve = K.collection(r.getAllInBox(r_selection[0], r_selection[1], r_selection[2], r_selection[3]));
            r_selection[0] = undefined;
            r_selection[1] = undefined;
            r_selection[2] = undefined;
            r_selection[3] = undefined;
            r_selection[4] = 0;
            r.redrawHint("select", true);
            K.emit(pe("boxend"));
            const ke = (Ar)=>Ar.selectable() && !Ar.selected();
            ve.emit(pe("box")).stdFilter(ke).select().emit(pe("boxselect"));
            if (ve.nonempty()) {
                r.redrawHint("eles", true);
            }
            r.redraw();
        }
        start?.unactivate();
        if (S.touches[2]) {
            r.data.bgActivePosistion = undefined;
            r.redrawHint("select", true);
        } else if (!S.touches[1]) {
            if (!S.touches[0]) {
                if (!S.touches[0]) {
                    r.data.bgActivePosistion = undefined;
                    r.redrawHint("select", true);
                    const Pe = r.dragData.touchDragEles;
                    if (start != null) {
                        const ar = start._private.grabbed;
                        y(Pe);
                        r.redrawHint("drag", true);
                        r.redrawHint("eles", true);
                        if (ar) {
                            start.emit(pe("freeon"));
                            Pe.emit(pe("free"));
                            if (r.dragData.didDrag) {
                                start.emit(pe("dragfreeon"));
                                Pe.emit(pe("dragfree"));
                            }
                        }
                        n(start, [
                            "touchend",
                            "tapend",
                            "vmouseup",
                            "tapdragout"
                        ], S, {
                            x: now[0],
                            y: now[1]
                        });
                        start.unactivate();
                        r.touchData.start = null;
                    } else {
                        const Ue = r.findNearestElement(now[0], now[1], true, true);
                        n(Ue, [
                            "touchend",
                            "tapend",
                            "vmouseup",
                            "tapdragout"
                        ], S, {
                            x: now[0],
                            y: now[1]
                        });
                    }
                    const Pr = r.touchData.startPosition[0] - now[0];
                    const Ke = Pr * Pr;
                    const Ye = r.touchData.startPosition[1] - now[1];
                    const Je = Ye * Ye;
                    const or = Ke + Je;
                    const Nr = or * le * le;
                    if (!r.touchData.singleTouchMoved) {
                        if (!start) {
                            K.$(":selected").unselect([
                                "tapunselect"
                            ]);
                        }
                        n(start, [
                            "tap",
                            "vclick"
                        ], S, {
                            x: now[0],
                            y: now[1]
                        });
                        ge = false;
                        if (S.timeStamp - de <= K.multiClickDebounceTime()) {
                            if (se) {
                                clearTimeout(se);
                            }
                            ge = true;
                            de = null;
                            n(start, [
                                "dbltap",
                                "vdblclick"
                            ], S, {
                                x: now[0],
                                y: now[1]
                            });
                        } else {
                            se = setTimeout(()=>{
                                if (!ge) {
                                    n(start, [
                                        "onetap",
                                        "voneclick"
                                    ], S, {
                                        x: now[0],
                                        y: now[1]
                                    });
                                }
                            }, K.multiClickDebounceTime());
                            de = S.timeStamp;
                        }
                    }
                    if (start != null && !r.dragData.didDrag && start._private.selectable && Nr < r.touchTapThreshold2 && !r.pinching) {
                        if (K.selectionType() === "single") {
                            K.$(t).unmerge(start).unselect([
                                "tapunselect"
                            ]);
                            start.select([
                                "tapselect"
                            ]);
                        } else if (start.selected()) {
                            start.unselect([
                                "tapunselect"
                            ]);
                        } else {
                            start.select([
                                "tapselect"
                            ]);
                        }
                        r.redrawHint("eles", true);
                    }
                    r.touchData.singleTouchMoved = true;
                }
            }
        }
        for(let We = 0; We < now.length; We++){
            earlier[We] = now[We];
        }
        r.dragData.didDrag = false;
        if (S.touches.length === 0) {
            r.touchData.dragDelta = [];
            r.touchData.startPosition = [
                null,
                null,
                null,
                null,
                null,
                null
            ];
            r.touchData.startGPosition = null;
            r.touchData.didSelect = false;
        }
        if (S.touches.length < 2) {
            if (S.touches.length === 1) {
                r.touchData.startGPosition = [
                    S.touches[0].clientX,
                    S.touches[0].clientY
                ];
            }
            r.pinching = false;
            r.redrawHint("eles", true);
            r.redraw();
        }
    }, false);
    if (typeof TouchEvent === "undefined") {
        const fe = [];
        const xe = (S)=>({
                clientX: S.clientX,
                clientY: S.clientY,
                force: 1,
                identifier: S.pointerId,
                pageX: S.pageX,
                pageY: S.pageY,
                radiusX: S.width / 2,
                radiusY: S.height / 2,
                screenX: S.screenX,
                screenY: S.screenY,
                target: S.target
            });
        const be = (event)=>({
                event,
                touch: xe(event)
            });
        const Se = (S)=>{
            fe.push(be(S));
        };
        const De = (S)=>{
            for(let z = 0; z < fe.length; z++){
                const G = fe[z];
                if (G.event.pointerId === S.pointerId) {
                    fe.splice(z, 1);
                    return;
                }
            }
        };
        const Oe = (S)=>{
            const z = fe.filter((G)=>G.event.pointerId === S.pointerId)[0];
            z.event = S;
            z.touch = xe(S);
        };
        const Le = (S)=>{
            S.touches = fe.map((z)=>z.touch);
        };
        const Ae = (S)=>S.pointerType === "mouse" || S.pointerType === 4;
        r.registerBinding(r.container, "pointerdown", (X)=>{
            if (!Ae(X)) {
                X.preventDefault();
                Se(X);
                Le(X);
                ce(X);
            }
        });
        r.registerBinding(r.container, "pointerup", (X)=>{
            if (!Ae(X)) {
                De(X);
                Le(X);
                me(X);
            }
        });
        r.registerBinding(r.container, "pointercancel", (X)=>{
            if (!Ae(X)) {
                De(X);
                Le(X);
                we(X);
            }
        });
        r.registerBinding(r.container, "pointermove", (X)=>{
            if (!Ae(X)) {
                X.preventDefault();
                Oe(X);
                Le(X);
                Be(X);
            }
        });
    }
};
const Zr = {};
Zr.generatePolygon = function(r, points) {
    return this.nodeShapes[r] = {
        renderer: this,
        name: r,
        points,
        draw (a, n, i, s, o, u) {
            this.renderer.nodeShapeImpl("polygon", a, n, i, s, o, this.points);
        },
        intersectLine (a, n, i, s, o, u, l, v) {
            return Sa(o, u, this.points, a, n, i / 2, s / 2, l);
        },
        checkPoint (a, n, i, s, o, u, l, v) {
            return Yr(a, n, this.points, u, l, s, o, [
                0,
                -1
            ], i);
        },
        hasMiterBounds: r !== "rectangle",
        miterBounds (a, n, i, s, o, u) {
            return Pd(this.points, a, n, i, s, o);
        }
    };
};
Zr.generateEllipse = function() {
    return this.nodeShapes.ellipse = {
        renderer: this,
        name: "ellipse",
        draw (e, t, a, n, i, s) {
            this.renderer.nodeShapeImpl(this.name, e, t, a, n, i);
        },
        intersectLine (e, t, a, n, i, s, o, u) {
            return zd(i, s, e, t, a / 2 + o, n / 2 + o);
        },
        checkPoint (e, t, a, n, i, s, o, u) {
            return St(e, t, n, i, s, o, a);
        }
    };
};
Zr.generateRoundPolygon = function(r, points) {
    return this.nodeShapes[r] = {
        renderer: this,
        name: r,
        points,
        getOrCreateCorners (a, n, i, s, o, u, l) {
            if (u[l] !== undefined && u[`${l}-cx`] === a && u[`${l}-cy`] === n) {
                return u[l];
            }
            u[l] = new Array(points.length / 2);
            u[`${l}-cx`] = a;
            u[`${l}-cy`] = n;
            const v = i / 2;
            const f = s / 2;
            o = o === "auto" ? wv(i, s) : o;
            const c = new Array(points.length / 2);
            for(let h = 0; h < points.length / 2; h++){
                c[h] = {
                    x: a + v * points[h * 2],
                    y: n + f * points[h * 2 + 1]
                };
            }
            let d;
            let y;
            let g;
            let p;
            const c_length = c.length;
            y = c[c_length - 1];
            for(d = 0; d < c_length; d++){
                g = c[d % c_length];
                p = c[(d + 1) % c_length];
                u[l][d] = ho(y, g, p, o);
                y = g;
                g = p;
            }
            return u[l];
        },
        draw (a, n, i, s, o, u, l) {
            this.renderer.nodeShapeImpl("round-polygon", a, n, i, s, o, this.points, this.getOrCreateCorners(n, i, s, o, u, l, "drawCorners"));
        },
        intersectLine (a, n, i, s, o, u, l, v, f) {
            return Vd(o, u, this.points, a, n, i, s, l, this.getOrCreateCorners(a, n, i, s, v, f, "corners"));
        },
        checkPoint (a, n, i, s, o, u, l, v, f) {
            return Nd(a, n, this.points, u, l, s, o, this.getOrCreateCorners(u, l, s, o, v, f, "corners"));
        }
    };
};
Zr.generateRoundRectangle = function() {
    return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
        renderer: this,
        name: "round-rectangle",
        points: pr(4, 0),
        draw (e, t, a, n, i, s) {
            this.renderer.nodeShapeImpl(this.name, e, t, a, n, i, this.points, s);
        },
        intersectLine (e, t, a, n, i, s, o, u) {
            return mv(i, s, e, t, a, n, o, u);
        },
        checkPoint (e, t, a, n, i, s, o, u) {
            const l = n / 2;
            const v = i / 2;
            u = u === "auto" ? lt(n, i) : u;
            u = Math.min(l, v, u);
            const f = u * 2;
            return !!(Yr(e, t, this.points, s, o, n, i - f, [
                0,
                -1
            ], a) || Yr(e, t, this.points, s, o, n - f, i, [
                0,
                -1
            ], a) || St(e, t, f, f, s - l + u, o - v + u, a) || St(e, t, f, f, s + l - u, o - v + u, a) || St(e, t, f, f, s + l - u, o + v - u, a) || St(e, t, f, f, s - l + u, o + v - u, a));
        }
    };
};
Zr.generateCutRectangle = function() {
    return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
        renderer: this,
        name: "cut-rectangle",
        cornerLength: to(),
        points: pr(4, 0),
        draw (e, t, a, n, i, s) {
            this.renderer.nodeShapeImpl(this.name, e, t, a, n, i, null, s);
        },
        generateCutTrianglePts (e, t, a, n, i) {
            const s = i === "auto" ? this.cornerLength : i;
            const o = t / 2;
            const u = e / 2;
            const l = a - u;
            const v = a + u;
            const f = n - o;
            const c = n + o;
            return {
                topLeft: [
                    l,
                    f + s,
                    l + s,
                    f,
                    l + s,
                    f + s
                ],
                topRight: [
                    v - s,
                    f,
                    v,
                    f + s,
                    v - s,
                    f + s
                ],
                bottomRight: [
                    v,
                    c - s,
                    v - s,
                    c,
                    v - s,
                    c - s
                ],
                bottomLeft: [
                    l + s,
                    c,
                    l,
                    c - s,
                    l + s,
                    c - s
                ]
            };
        },
        intersectLine (e, t, a, n, i, s, o, u) {
            const l = this.generateCutTrianglePts(a + 2 * o, n + 2 * o, e, t, u);
            const v = [].concat.apply([], [
                l.topLeft.splice(0, 4),
                l.topRight.splice(0, 4),
                l.bottomRight.splice(0, 4),
                l.bottomLeft.splice(0, 4)
            ]);
            return Sa(i, s, v, e, t);
        },
        checkPoint (e, t, a, n, i, s, o, u) {
            const l = u === "auto" ? this.cornerLength : u;
            if (Yr(e, t, this.points, s, o, n, i - 2 * l, [
                0,
                -1
            ], a) || Yr(e, t, this.points, s, o, n - 2 * l, i, [
                0,
                -1
            ], a)) {
                return true;
            }
            const v = this.generateCutTrianglePts(n, i, s, o);
            return Er(e, t, v.topLeft) || Er(e, t, v.topRight) || Er(e, t, v.bottomRight) || Er(e, t, v.bottomLeft);
        }
    };
};
Zr.generateBarrel = function() {
    return this.nodeShapes.barrel = {
        renderer: this,
        name: "barrel",
        points: pr(4, 0),
        draw (e, t, a, n, i, s) {
            this.renderer.nodeShapeImpl(this.name, e, t, a, n, i);
        },
        intersectLine (e, t, a, n, i, s, o, u) {
            const l = 0.15;
            const v = 0.5;
            const f = 0.85;
            const c = this.generateBarrelBezierPts(a + 2 * o, n + 2 * o, e, t);
            const h = (g)=>{
                const p = $t({
                    x: g[0],
                    y: g[1]
                }, {
                    x: g[2],
                    y: g[3]
                }, {
                    x: g[4],
                    y: g[5]
                }, l);
                const m = $t({
                    x: g[0],
                    y: g[1]
                }, {
                    x: g[2],
                    y: g[3]
                }, {
                    x: g[4],
                    y: g[5]
                }, v);
                const b = $t({
                    x: g[0],
                    y: g[1]
                }, {
                    x: g[2],
                    y: g[3]
                }, {
                    x: g[4],
                    y: g[5]
                }, f);
                return [
                    g[0],
                    g[1],
                    p.x,
                    p.y,
                    m.x,
                    m.y,
                    b.x,
                    b.y,
                    g[4],
                    g[5]
                ];
            };
            const d = [].concat(h(c.topLeft), h(c.topRight), h(c.bottomRight), h(c.bottomLeft));
            return Sa(i, s, d, e, t);
        },
        generateBarrelBezierPts (e, t, a, n) {
            const i = t / 2;
            const s = e / 2;
            const o = a - s;
            const u = a + s;
            const l = n - i;
            const v = n + i;
            const f = Bs(e, t);
            const { heightOffset, widthOffset } = f;
            const d = f.ctrlPtOffsetPct * e;
            const y = {
                topLeft: [
                    o,
                    l + heightOffset,
                    o + d,
                    l,
                    o + widthOffset,
                    l
                ],
                topRight: [
                    u - widthOffset,
                    l,
                    u - d,
                    l,
                    u,
                    l + heightOffset
                ],
                bottomRight: [
                    u,
                    v - heightOffset,
                    u - d,
                    v,
                    u - widthOffset,
                    v
                ],
                bottomLeft: [
                    o + widthOffset,
                    v,
                    o + d,
                    v,
                    o,
                    v - heightOffset
                ]
            };
            y.topLeft.isTop = true;
            y.topRight.isTop = true;
            y.bottomLeft.isBottom = true;
            y.bottomRight.isBottom = true;
            return y;
        },
        checkPoint (e, t, a, n, i, s, o, u) {
            const l = Bs(n, i);
            const { heightOffset, widthOffset } = l;
            if (Yr(e, t, this.points, s, o, n, i - 2 * heightOffset, [
                0,
                -1
            ], a) || Yr(e, t, this.points, s, o, n - 2 * widthOffset, i, [
                0,
                -1
            ], a)) {
                return true;
            }
            const c = this.generateBarrelBezierPts(n, i, s, o);
            const h = (T, k, [A, L, P, , B, R])=>{
                const I = Math.min(B, A);
                const M = Math.max(B, A);
                const O = Math.min(R, L);
                const q = Math.max(R, L);
                if (I <= T && T <= M && O <= k && k <= q) {
                    const _ = qd(B, P, A);
                    const N = Md(_[0], _[1], _[2], T);
                    const F = N.filter((U)=>U >= 0 && U <= 1);
                    if (F.length > 0) {
                        return F[0];
                    }
                }
                return null;
            };
            for(let d = Object.keys(c), y = 0; y < d.length; y++){
                const g = d[y];
                const p = c[g];
                const m = h(e, t, p);
                if (m != null) {
                    const b = p[5];
                    const w = p[3];
                    const E = p[1];
                    const C = nr(b, w, E, m);
                    if (p.isTop && C <= t || p.isBottom && t <= C) {
                        return true;
                    }
                }
            }
            return false;
        }
    };
};
Zr.generateBottomRoundrectangle = function() {
    return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
        renderer: this,
        name: "bottom-round-rectangle",
        points: pr(4, 0),
        draw (e, t, a, n, i, s) {
            this.renderer.nodeShapeImpl(this.name, e, t, a, n, i, this.points, s);
        },
        intersectLine (e, t, a, n, i, s, o, u) {
            const l = e - (a / 2 + o);
            const v = t - (n / 2 + o);
            const f = v;
            const c = e + (a / 2 + o);
            const h = nt(i, s, e, t, l, v, c, f, false);
            if (h.length > 0) {
                return h;
            }
            return mv(i, s, e, t, a, n, o, u);
        },
        checkPoint (e, t, a, n, i, s, o, u) {
            u = u === "auto" ? lt(n, i) : u;
            const l = 2 * u;
            if (Yr(e, t, this.points, s, o, n, i - l, [
                0,
                -1
            ], a) || Yr(e, t, this.points, s, o, n - l, i, [
                0,
                -1
            ], a)) {
                return true;
            }
            const v = n / 2 + 2 * a;
            const f = i / 2 + 2 * a;
            const c = [
                s - v,
                o - f,
                s - v,
                o,
                s + v,
                o,
                s + v,
                o - f
            ];
            return !!(Er(e, t, c) || St(e, t, l, l, s + n / 2 - u, o + i / 2 - u, a) || St(e, t, l, l, s - n / 2 + u, o + i / 2 - u, a));
        }
    };
};
Zr.registerNodeShapes = function() {
    const r = this.nodeShapes = {};
    const e = this;
    this.generateEllipse();
    this.generatePolygon("triangle", pr(3, 0));
    this.generateRoundPolygon("round-triangle", pr(3, 0));
    this.generatePolygon("rectangle", pr(4, 0));
    r.square = r.rectangle;
    this.generateRoundRectangle();
    this.generateCutRectangle();
    this.generateBarrel();
    this.generateBottomRoundrectangle();
    {
        const t = [
            0,
            1,
            1,
            0,
            0,
            -1,
            -1,
            0
        ];
        this.generatePolygon("diamond", t);
        this.generateRoundPolygon("round-diamond", t);
    }
    this.generatePolygon("pentagon", pr(5, 0));
    this.generateRoundPolygon("round-pentagon", pr(5, 0));
    this.generatePolygon("hexagon", pr(6, 0));
    this.generateRoundPolygon("round-hexagon", pr(6, 0));
    this.generatePolygon("heptagon", pr(7, 0));
    this.generateRoundPolygon("round-heptagon", pr(7, 0));
    this.generatePolygon("octagon", pr(8, 0));
    this.generateRoundPolygon("round-octagon", pr(8, 0));
    let a = new Array(20);
    {
        const n = Ds(5, 0);
        const i = Ds(5, Math.PI / 5);
        let s = 0.5 * (3 - Math.sqrt(5));
        s *= 1.57;
        for(var o = 0; o < i.length / 2; o++){
            i[o * 2] *= s;
            i[o * 2 + 1] *= s;
        }
        for(var o = 0; o < 20 / 4; o++){
            a[o * 4] = n[o * 2];
            a[o * 4 + 1] = n[o * 2 + 1];
            a[o * 4 + 2] = i[o * 2];
            a[o * 4 + 3] = i[o * 2 + 1];
        }
    }
    a = bv(a);
    this.generatePolygon("star", a);
    this.generatePolygon("vee", [
        -1,
        -1,
        0,
        -0.333,
        1,
        -1,
        0,
        1
    ]);
    this.generatePolygon("rhomboid", [
        -1,
        -1,
        0.333,
        -1,
        1,
        1,
        -0.333,
        1
    ]);
    this.generatePolygon("right-rhomboid", [
        -0.333,
        -1,
        1,
        -1,
        0.333,
        1,
        -1,
        1
    ]);
    this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [
        -1,
        -0.95,
        -0.75,
        0,
        -1,
        0.95,
        1,
        0.95,
        0.75,
        0,
        1,
        -0.95
    ]);
    {
        const u = [
            -1,
            -1,
            0.25,
            -1,
            1,
            0,
            0.25,
            1,
            -1,
            1
        ];
        this.generatePolygon("tag", u);
        this.generateRoundPolygon("round-tag", u);
    }
    r.makePolygon = function(l) {
        const v = l.join("$");
        const f = `polygon-${v}`;
        let c;
        if (c = this[f]) {
            return c;
        }
        return e.generatePolygon(f, l);
    };
};
const _a = {};
_a.timeToRender = function() {
    return this.redrawTotalTime / this.redrawCount;
};
_a.redraw = function(r) {
    r = r || Yc;
    const e = this;
    if (e.averageRedrawTime === undefined) {
        e.averageRedrawTime = 0;
    }
    if (e.lastRedrawTime === undefined) {
        e.lastRedrawTime = 0;
    }
    if (e.lastDrawTime === undefined) {
        e.lastDrawTime = 0;
    }
    e.requestedFrame = true;
    e.renderOptions = r;
};
_a.beforeRender = function(fn_1, priority) {
    if (!this.destroyed) {
        if (priority == null) {
            He("Priority is not optional for beforeRender");
        }
        const t = this.beforeRenderCallbacks;
        t.push({
            fn: fn_1,
            priority
        });
        t.sort((a, n)=>n.priority - a.priority);
    }
};
const Ll = (e, t, a)=>{
    for(let n = e.beforeRenderCallbacks, i = 0; i < n.length; i++){
        n[i].fn(t, a);
    }
};
_a.startRenderLoop = function() {
    const r = this;
    const e = r.cy;
    if (!r.renderLoopStarted) {
        r.renderLoopStarted = true;
        const t = (n)=>{
            if (!r.destroyed) {
                if (!e.batching()) {
                    if (r.requestedFrame && !r.skipFrame) {
                        Ll(r, true, n);
                        const i = Xr();
                        r.render(r.renderOptions);
                        const s = r.lastDrawTime = Xr();
                        if (r.averageRedrawTime === undefined) {
                            r.averageRedrawTime = s - i;
                        }
                        if (r.redrawCount === undefined) {
                            r.redrawCount = 0;
                        }
                        r.redrawCount++;
                        if (r.redrawTotalTime === undefined) {
                            r.redrawTotalTime = 0;
                        }
                        const o = s - i;
                        r.redrawTotalTime += o;
                        r.lastRedrawTime = o;
                        r.averageRedrawTime = r.averageRedrawTime / 2 + o / 2;
                        r.requestedFrame = false;
                    } else {
                        Ll(r, false, n);
                    }
                }
                r.skipFrame = false;
                mn(t);
            }
        };
        mn(t);
    }
};
const ny = function(e) {
    this.init(e);
};
const Ef = ny;
const Ef_prototype = Ef.prototype;
Ef_prototype.clientFunctions = [
    "redrawHint",
    "render",
    "renderTo",
    "matchCanvasSize",
    "nodeShapeImpl",
    "arrowShapeImpl"
];
Ef_prototype.init = function(r) {
    const e = this;
    e.options = r;
    e.cy = r.cy;
    const t = e.container = r.cy.container();
    const a = e.cy.window();
    if (a) {
        const n = a.document;
        const i = n.head;
        const s = "__________cytoscape_stylesheet";
        const o = "__________cytoscape_container";
        const u = n.getElementById(s) != null;
        if (t.className.indexOf(o) < 0) {
            t.className = `${t.className || ""} ${o}`;
        }
        if (!u) {
            const l = n.createElement("style");
            l.id = s;
            l.textContent = `.${o} { position: relative; }`;
            i.insertBefore(l, i.children[0]);
        }
        const v = a.getComputedStyle(t);
        const f = v.getPropertyValue("position");
        if (f === "static") {
            ze("A Cytoscape container has style position:static and so can not use UI extensions properly");
        }
    }
    e.selection = [
        undefined,
        undefined,
        undefined,
        undefined,
        0
    ];
    e.bezierProjPcts = [
        0.05,
        0.225,
        0.4,
        0.5,
        0.6,
        0.775,
        0.95
    ];
    e.hoverData = {
        down: null,
        last: null,
        downTime: null,
        triggerMode: null,
        dragging: false,
        initialPan: [
            null,
            null
        ],
        capture: false
    };
    e.dragData = {
        possibleDragElements: []
    };
    e.touchData = {
        start: null,
        capture: false,
        startPosition: [
            null,
            null,
            null,
            null,
            null,
            null
        ],
        singleTouchStartTime: null,
        singleTouchMoved: true,
        now: [
            null,
            null,
            null,
            null,
            null,
            null
        ],
        earlier: [
            null,
            null,
            null,
            null,
            null,
            null
        ]
    };
    e.redraws = 0;
    e.showFps = r.showFps;
    e.debug = r.debug;
    e.webgl = r.webgl;
    e.hideEdgesOnViewport = r.hideEdgesOnViewport;
    e.textureOnViewport = r.textureOnViewport;
    e.wheelSensitivity = r.wheelSensitivity;
    e.motionBlurEnabled = r.motionBlur;
    e.forcedPixelRatio = ae(r.pixelRatio) ? r.pixelRatio : null;
    e.motionBlur = r.motionBlur;
    e.motionBlurOpacity = r.motionBlurOpacity;
    e.motionBlurTransparency = 1 - e.motionBlurOpacity;
    e.motionBlurPxRatio = 1;
    e.mbPxRBlurry = 1;
    e.minMbLowQualFrames = 4;
    e.fullQualityMb = false;
    e.clearedForMotionBlur = [];
    e.desktopTapThreshold = r.desktopTapThreshold;
    e.desktopTapThreshold2 = r.desktopTapThreshold * r.desktopTapThreshold;
    e.touchTapThreshold = r.touchTapThreshold;
    e.touchTapThreshold2 = r.touchTapThreshold * r.touchTapThreshold;
    e.tapholdDuration = 500;
    e.bindings = [];
    e.beforeRenderCallbacks = [];
    e.beforeRenderPriorities = {
        animations: 400,
        eleCalcs: 300,
        eleTxrDeq: 200,
        lyrTxrDeq: 150,
        lyrTxrSkip: 100
    };
    e.registerNodeShapes();
    e.registerArrowShapes();
    e.registerCalculationListeners();
};
Ef_prototype.notify = function(r, e) {
    const t = this;
    const a = t.cy;
    if (!this.destroyed) {
        if (r === "init") {
            t.load();
            return;
        }
        if (r === "destroy") {
            t.destroy();
            return;
        }
        if (r === "add" || r === "remove" || r === "move" && a.hasCompoundNodes() || r === "load" || r === "zorder" || r === "mount") {
            t.invalidateCachedZSortedEles();
        }
        if (r === "viewport") {
            t.redrawHint("select", true);
        }
        if (r === "gc") {
            t.redrawHint("gc", true);
        }
        if (r === "load" || r === "resize" || r === "mount") {
            t.invalidateContainerClientCoordsCache();
            t.matchCanvasSize(t.container);
        }
        t.redrawHint("eles", true);
        t.redrawHint("drag", true);
        this.startRenderLoop();
        this.redraw();
    }
};
Ef_prototype.destroy = function() {
    const r = this;
    r.destroyed = true;
    r.cy.stopAnimationLoop();
    for(let e = 0; e < r.bindings.length; e++){
        const binding = r.bindings[e];
        const a = binding;
        const n = a.target;
        (n.off || n.removeEventListener).apply(n, a.args);
    }
    r.bindings = [];
    r.beforeRenderCallbacks = [];
    r.onUpdateEleCalcsFns = [];
    if (r.removeObserver) {
        r.removeObserver.disconnect();
    }
    if (r.styleObserver) {
        r.styleObserver.disconnect();
    }
    if (r.resizeObserver) {
        r.resizeObserver.disconnect();
    }
    if (r.labelCalcDiv) {
        try {
            document.body.removeChild(r.labelCalcDiv);
        } catch  {}
    }
};
Ef_prototype.isHeadless = ()=>false;
[
    co,
    bf,
    wf,
    aa,
    Zr,
    _a
].forEach((r)=>{
    ye(Ef_prototype, r);
});
const ms = 1000 / 60;
const Cf = {
    setupDequeueing (e) {
        return function() {
            const a = this;
            const renderer = this.renderer;
            if (!a.dequeueingSetup) {
                a.dequeueingSetup = true;
                const i = Na(()=>{
                    renderer.redrawHint("eles", true);
                    renderer.redrawHint("drag", true);
                    renderer.redraw();
                }, e.deqRedrawThreshold);
                const s = (l, v)=>{
                    const f = Xr();
                    const { averageRedrawTime, lastRedrawTime } = renderer;
                    const d = [];
                    const y = renderer.cy.extent();
                    const g = renderer.getPixelRatio();
                    for(l || renderer.flushRenderedStyleQueue();;){
                        const p = Xr();
                        const m = p - f;
                        const b = p - v;
                        if (lastRedrawTime < ms) {
                            const w = ms - (l ? averageRedrawTime : 0);
                            if (b >= e.deqFastCost * w) {
                                break;
                            }
                        } else if (l) {
                            if (m >= e.deqCost * lastRedrawTime || m >= e.deqAvgCost * averageRedrawTime) {
                                break;
                            }
                        } else if (b >= e.deqNoDrawCost * ms) {
                            break;
                        }
                        const E = e.deq(a, g, y);
                        if (E.length > 0) {
                            for(let C = 0; C < E.length; C++){
                                d.push(E[C]);
                            }
                        } else {
                            break;
                        }
                    }
                    if (d.length > 0) {
                        e.onDeqd(a, d);
                        if (!l && e.shouldRedraw(a, d, g, y)) {
                            i();
                        }
                    }
                };
                const o = e.priority || Qs;
                renderer.beforeRender(s, o(a));
            }
        };
    }
};
class iy {
    constructor(e, t = bn){
        this.idsByKey = new Kr;
        this.keyForId = new Kr;
        this.cachesByLvl = new Kr;
        this.lvls = [];
        this.getKey = e;
        this.doesEleInvalidateKey = t;
    }
    getIdsFor(t) {
        if (t == null) {
            He("Can not get id list for null key");
        }
        const idsByKey = this.idsByKey;
        let n = this.idsByKey.get(t);
        if (!n) {
            n = new jt;
            idsByKey.set(t, n);
        }
        return n;
    }
    addIdForKey(t, a) {
        if (t != null) {
            this.getIdsFor(t).add(a);
        }
    }
    deleteIdForKey(t, a) {
        if (t != null) {
            this.getIdsFor(t).delete(a);
        }
    }
    getNumberOfIdsForKey(t) {
        if (t == null) {
            return 0;
        }
        return this.getIdsFor(t).size;
    }
    updateKeyMappingFor(t) {
        const a = t.id();
        const n = this.keyForId.get(a);
        const i = this.getKey(t);
        this.deleteIdForKey(n, a);
        this.addIdForKey(i, a);
        this.keyForId.set(a, i);
    }
    deleteKeyMappingFor(t) {
        const a = t.id();
        const n = this.keyForId.get(a);
        this.deleteIdForKey(n, a);
        this.keyForId.delete(a);
    }
    keyHasChangedFor(t) {
        const a = t.id();
        const n = this.keyForId.get(a);
        const i = this.getKey(t);
        return n !== i;
    }
    isInvalid(t) {
        return this.keyHasChangedFor(t) || this.doesEleInvalidateKey(t);
    }
    getCachesAt(t) {
        const cachesByLvl = this.cachesByLvl;
        const lvls = this.lvls;
        let i = cachesByLvl.get(t);
        if (!i) {
            i = new Kr;
            cachesByLvl.set(t, i);
            lvls.push(t);
        }
        return i;
    }
    getCache(t, a) {
        return this.getCachesAt(a).get(t);
    }
    get(t, a) {
        const n = this.getKey(t);
        const i = this.getCache(n, a);
        if (i != null) {
            this.updateKeyMappingFor(t);
        }
        return i;
    }
    getForCachedKey(t, a) {
        const n = this.keyForId.get(t.id());
        const i = this.getCache(n, a);
        return i;
    }
    hasCache(t, a) {
        return this.getCachesAt(a).has(t);
    }
    has(t, a) {
        const n = this.getKey(t);
        return this.hasCache(n, a);
    }
    setCache(t, a, n) {
        n.key = t;
        this.getCachesAt(a).set(t, n);
    }
    set(t, a, n) {
        const i = this.getKey(t);
        this.setCache(i, a, n);
        this.updateKeyMappingFor(t);
    }
    deleteCache(t, a) {
        this.getCachesAt(a).delete(t);
    }
    delete(t, a) {
        const n = this.getKey(t);
        this.deleteCache(n, a);
    }
    invalidateKey(t) {
        const a = this;
        this.lvls.forEach((n)=>a.deleteCache(t, n));
    }
    invalidate(t) {
        const a = t.id();
        const n = this.keyForId.get(a);
        this.deleteKeyMappingFor(t);
        const i = this.doesEleInvalidateKey(t);
        if (i) {
            this.invalidateKey(n);
        }
        return i || this.getNumberOfIdsForKey(n) === 0;
    }
}
const Il = 25;
const tn = 50;
const hn = -4;
const _s = 3;
const Tf = 7.99;
const sy = 8;
const oy = 1024;
const uy = 1024;
const ly = 1024;
const vy = 0.2;
const fy = 0.8;
const cy = 10;
const dy = 0.15;
const hy = 0.1;
const gy = 0.9;
const py = 0.9;
const yy = 100;
const my = 1;
const Wt = {
    dequeue: "dequeue",
    downscale: "downscale",
    highQuality: "highQuality"
};
const by = vr({
    getKey: null,
    doesEleInvalidateKey: bn,
    drawElement: null,
    getBoundingBox: null,
    getRotationPoint: null,
    getRotationOffset: null,
    isVisible: fv,
    allowEdgeTxrCaching: true,
    allowParentTxrCaching: true
});
const ya = function(e, t) {
    const a = this;
    a.renderer = e;
    a.onDequeues = [];
    const n = by(t);
    ye(a, n);
    a.lookup = new iy(n.getKey, n.doesEleInvalidateKey);
    a.setupDequeueing();
};
const ya_prototype = ya.prototype;
ya_prototype.reasons = Wt;
ya_prototype.getTextureQueue = function(r) {
    const e = this;
    e.eleImgCaches = e.eleImgCaches || {};
    return e.eleImgCaches[r] = e.eleImgCaches[r] || [];
};
ya_prototype.getRetiredTextureQueue = function(r) {
    const e = this;
    const t = e.eleImgCaches.retired = e.eleImgCaches.retired || {};
    const a = t[r] = t[r] || [];
    return a;
};
ya_prototype.getElementQueue = function() {
    const r = this;
    const e = r.eleCacheQueue = r.eleCacheQueue || new za((t, a)=>a.reqs - t.reqs);
    return e;
};
ya_prototype.getElementKeyToQueue = function() {
    const r = this;
    const e = r.eleKeyToCacheQueue = r.eleKeyToCacheQueue || {};
    return e;
};
ya_prototype.getElement = function(r, e, t, a, n) {
    const i = this;
    const renderer = this.renderer;
    const o = renderer.cy.zoom();
    const lookup = this.lookup;
    if (!e || e.w === 0 || e.h === 0 || isNaN(e.w) || isNaN(e.h) || !r.visible() || r.removed() || !i.allowEdgeTxrCaching && r.isEdge() || !i.allowParentTxrCaching && r.isParent()) {
        return null;
    }
    if (a == null) {
        a = Math.ceil(js(o * t));
    }
    if (a < hn) {
        a = hn;
    } else if (o >= Tf || a > _s) {
        return null;
    }
    const l = 2 ** a;
    const v = e.h * l;
    const f = e.w * l;
    const scaledLabelShown = renderer.eleTextBiggerThanMin(r, l);
    if (!this.isVisible(r, scaledLabelShown)) {
        return null;
    }
    let h = lookup.get(r, a);
    if (h && h.invalidated) {
        h.invalidated = false;
        h.texture.invalidatedWidth -= h.width;
    }
    if (h) {
        return h;
    }
    let d;
    if (v <= Il) {
        d = Il;
    } else if (v <= tn) {
        d = tn;
    } else {
        d = Math.ceil(v / tn) * tn;
    }
    if (v > ly || f > uy) {
        return null;
    }
    const y = i.getTextureQueue(d);
    let texture = y[y.length - 2];
    const p = ()=>i.recycleTexture(d, f) || i.addTexture(d, f);
    if (!texture) {
        texture = y[y.length - 1];
    }
    if (!texture) {
        texture = p();
    }
    if (texture.width - texture.usedWidth < f) {
        texture = p();
    }
    const m = (I)=>I && I.scaledLabelShown === scaledLabelShown;
    const b = n && n === Wt.dequeue;
    const w = n && n === Wt.highQuality;
    const E = n && n === Wt.downscale;
    let C;
    for(let x = a + 1; x <= _s; x++){
        const T = lookup.get(r, x);
        if (T) {
            C = T;
            break;
        }
    }
    let k = C && C.level === a + 1 ? C : null;
    const D = ()=>{
        texture.context.drawImage(k.texture.canvas, k.x, 0, k.width, k.height, texture.usedWidth, 0, f, v);
    };
    texture.context.setTransform(1, 0, 0, 1, 0, 0);
    texture.context.clearRect(texture.usedWidth, 0, f, d);
    if (m(k)) {
        D();
    } else if (m(C)) {
        if (w) {
            for(let B = C.level; B > a; B--){
                k = i.getElement(r, e, t, B, Wt.downscale);
            }
            D();
        } else {
            i.queueElement(r, C.level - 1);
            return C;
        }
    } else {
        let P;
        if (!b && !w && !E) {
            for(let A = a - 1; A >= hn; A--){
                const R = lookup.get(r, A);
                if (R) {
                    P = R;
                    break;
                }
            }
        }
        if (m(P)) {
            i.queueElement(r, a);
            return P;
        }
        texture.context.translate(texture.usedWidth, 0);
        texture.context.scale(l, l);
        this.drawElement(texture.context, r, e, scaledLabelShown, false);
        texture.context.scale(1 / l, 1 / l);
        texture.context.translate(-texture.usedWidth, 0);
    }
    h = {
        x: texture.usedWidth,
        texture,
        level: a,
        scale: l,
        width: f,
        height: v,
        scaledLabelShown
    };
    texture.usedWidth += Math.ceil(f + sy);
    texture.eleCaches.push(h);
    lookup.set(r, a, h);
    i.checkTextureFullness(texture);
    return h;
};
ya_prototype.invalidateElements = function(r) {
    for(let e = 0; e < r.length; e++){
        this.invalidateElement(r[e]);
    }
};
ya_prototype.invalidateElement = function(r) {
    const e = this;
    const e_lookup = e.lookup;
    const a = [];
    const n = e_lookup.isInvalid(r);
    if (n) {
        for(let i = hn; i <= _s; i++){
            const s = e_lookup.getForCachedKey(r, i);
            if (s) {
                a.push(s);
            }
        }
        const o = e_lookup.invalidate(r);
        if (o) {
            for (const l of a){
                const v = l.texture;
                v.invalidatedWidth += l.width;
                l.invalidated = true;
                e.checkTextureUtility(v);
            }
        }
        e.removeFromQueue(r);
    }
};
ya_prototype.checkTextureUtility = function(r) {
    if (r.invalidatedWidth >= vy * r.width) {
        this.retireTexture(r);
    }
};
ya_prototype.checkTextureFullness = function(r) {
    const e = this;
    const t = e.getTextureQueue(r.height);
    if (r.usedWidth / r.width > fy && r.fullnessChecks >= cy) {
        ut(t, r);
    } else {
        r.fullnessChecks++;
    }
};
ya_prototype.retireTexture = function(r) {
    const e = this;
    const r_height = r.height;
    const a = e.getTextureQueue(r_height);
    const lookup = this.lookup;
    ut(a, r);
    r.retired = true;
    for(var i = r.eleCaches, s = 0; s < i.length; s++){
        const o = i[s];
        lookup.deleteCache(o.key, o.level);
    }
    Js(i);
    const u = e.getRetiredTextureQueue(r_height);
    u.push(r);
};
ya_prototype.addTexture = function(r, e) {
    const t = this;
    const a = t.getTextureQueue(r);
    const n = {};
    a.push(n);
    n.eleCaches = [];
    n.height = r;
    n.width = Math.max(oy, e);
    n.usedWidth = 0;
    n.invalidatedWidth = 0;
    n.fullnessChecks = 0;
    n.canvas = t.renderer.makeOffscreenCanvas(n.width, n.height);
    n.context = n.canvas.getContext("2d");
    return n;
};
ya_prototype.recycleTexture = function(r, e) {
    const t = this;
    const a = t.getTextureQueue(r);
    for(let n = t.getRetiredTextureQueue(r), i = 0; i < n.length; i++){
        const s = n[i];
        if (s.width >= e) {
            s.retired = false;
            s.usedWidth = 0;
            s.invalidatedWidth = 0;
            s.fullnessChecks = 0;
            Js(s.eleCaches);
            s.context.setTransform(1, 0, 0, 1, 0, 0);
            s.context.clearRect(0, 0, s.width, s.height);
            ut(n, s);
            a.push(s);
            return s;
        }
    }
};
ya_prototype.queueElement = function(r, e) {
    const t = this;
    const a = t.getElementQueue();
    const n = t.getElementKeyToQueue();
    const i = this.getKey(r);
    const s = n[i];
    if (s) {
        s.level = Math.max(s.level, e);
        s.eles.merge(r);
        s.reqs++;
        a.updateItem(s);
    } else {
        const o = {
            eles: r.spawn().merge(r),
            level: e,
            reqs: 1,
            key: i
        };
        a.push(o);
        n[i] = o;
    }
};
ya_prototype.dequeue = function(r) {
    const e = this;
    for(var t = e.getElementQueue(), a = e.getElementKeyToQueue(), n = [], i = e.lookup, s = 0; s < my && t.size() > 0; s++){
        const o = t.pop();
        const u = o.key;
        const l = o.eles[0];
        const v = i.hasCache(l, o.level);
        a[u] = null;
        if (v) {
            continue;
        }
        n.push(o);
        const f = e.getBoundingBox(l);
        e.getElement(l, f, r, o.level, Wt.dequeue);
    }
    return n;
};
ya_prototype.removeFromQueue = function(r) {
    const e = this;
    const t = e.getElementQueue();
    const a = e.getElementKeyToQueue();
    const n = this.getKey(r);
    const i = a[n];
    i != null && (i.eles.length === 1 ? (i.reqs = Zs, t.updateItem(i), t.pop(), a[n] = null) : i.eles.unmerge(r));
};
ya_prototype.onDequeue = function(r) {
    this.onDequeues.push(r);
};
ya_prototype.offDequeue = function(r) {
    ut(this.onDequeues, r);
};
ya_prototype.setupDequeueing = Cf.setupDequeueing({
    deqRedrawThreshold: yy,
    deqCost: dy,
    deqAvgCost: hy,
    deqNoDrawCost: gy,
    deqFastCost: py,
    deq (e, t, a) {
        return e.dequeue(t, a);
    },
    onDeqd (e, t) {
        for(let a = 0; a < e.onDequeues.length; a++){
            const onDequeue = e.onDequeues[a];
            onDequeue(t);
        }
    },
    shouldRedraw (e, t, a, n) {
        for(let i = 0; i < t.length; i++){
            for(let s = t[i].eles, o = 0; o < s.length; o++){
                const u = s[o].boundingBox();
                if (ro(u, n)) {
                    return true;
                }
            }
        }
        return false;
    },
    priority (e) {
        return e.renderer.beforeRenderPriorities.eleTxrDeq;
    }
});
const wy = 1;
const ba = -4;
const Dn = 2;
const xy = 3.99;
const Ey = 50;
const Cy = 50;
const Ty = 0.15;
const Sy = 0.1;
const ky = 0.9;
const Dy = 0.9;
const By = 1;
const Ol = 250;
const Py = 4000 * 4000;
const Nl = 32767;
const Ay = true;
const Sf = function(e) {
    const t = this;
    const a = t.renderer = e;
    const n = a.cy;
    t.layersByLevel = {};
    t.firstGet = true;
    t.lastInvalidationTime = Xr() - 2 * Ol;
    t.skipping = false;
    t.eleTxrDeqs = n.collection();
    t.scheduleElementRefinement = Na(()=>{
        t.refineElementTextures(t.eleTxrDeqs);
        t.eleTxrDeqs.unmerge(t.eleTxrDeqs);
    }, Cy);
    a.beforeRender((s, o)=>{
        if (o - t.lastInvalidationTime <= Ol) {
            t.skipping = true;
        } else {
            t.skipping = false;
        }
    }, a.beforeRenderPriorities.lyrTxrSkip);
    const i = (o, u)=>u.reqs - o.reqs;
    t.layersQueue = new za(i);
    t.setupDequeueing();
};
const Sf_prototype = Sf.prototype;
let zl = 0;
const Ry = 2 ** 53 - 1;
Sf_prototype.makeLayer = function(r, e) {
    const t = 2 ** e;
    const a = Math.ceil(r.w * t);
    const n = Math.ceil(r.h * t);
    const canvas = this.renderer.makeOffscreenCanvas(a, n);
    const s = {
        id: zl = ++zl % Ry,
        bb: r,
        level: e,
        width: a,
        height: n,
        canvas,
        context: canvas.getContext("2d"),
        eles: [],
        elesQueue: [],
        reqs: 0
    };
    const s_context = s.context;
    const u = -s.bb.x1;
    const l = -s.bb.y1;
    s_context.scale(t, t);
    s_context.translate(u, l);
    return s;
};
Sf_prototype.getLayers = function(r, e, t) {
    const a = this;
    const a_renderer = a.renderer;
    const a_renderer_cy = a_renderer.cy;
    const s = a_renderer_cy.zoom();
    const a_firstGet = a.firstGet;
    a.firstGet = false;
    if (t == null) {
        t = Math.ceil(js(s * e));
        if (t < ba) {
            t = ba;
        } else if (s >= xy || t > Dn) {
            return null;
        }
    }
    a.validateLayersElesOrdering(t, r);
    const a_layersByLevel = a.layersByLevel;
    const l = 2 ** t;
    const v = a_layersByLevel[t] = a_layersByLevel[t] || [];
    let f;
    const c = a.levelIsComplete(t, r);
    let h;
    const d = ()=>{
        const D = (L)=>{
            a.validateLayersElesOrdering(L, r);
            if (a.levelIsComplete(L, r)) {
                h = a_layersByLevel[L];
                return true;
            }
        };
        const B = (L)=>{
            if (!h) {
                for(let I = t + L; ba <= I && I <= Dn && !D(I); I += L);
            }
        };
        B(1);
        B(-1);
        for(let P = v.length - 1; P >= 0; P--){
            const A = v[P];
            if (A.invalid) {
                ut(v, A);
            }
        }
    };
    if (!c) {
        d();
    } else {
        return v;
    }
    const y = ()=>{
        if (!f) {
            f = yr();
            for(let D = 0; D < r.length; D++){
                kd(f, r[D].boundingBox());
            }
        }
        return f;
    };
    const g = (D)=>{
        D = D || {};
        const D_after = D.after;
        y();
        const P = Math.ceil(f.w * l);
        const A = Math.ceil(f.h * l);
        if (P > Nl || A > Nl) {
            return null;
        }
        const R = P * A;
        if (R > Py) {
            return null;
        }
        const L = a.makeLayer(f, t);
        if (D_after != null) {
            const I = v.indexOf(D_after) + 1;
            v.splice(I, 0, L);
        } else {
            if (D.insert === undefined || D.insert) {
                v.unshift(L);
            }
        }
        return L;
    };
    if (a.skipping && !a_firstGet) {
        return null;
    }
    let after = null;
    const m = r.length / wy;
    const b = !a_firstGet;
    for (const E of r){
        const C = E._private.rscratch;
        const x = C.imgLayerCaches = C.imgLayerCaches || {};
        const T = x[t];
        if (T) {
            after = T;
            continue;
        }
        if ((!after || after.eles.length >= m || !yv(after.bb, E.boundingBox())) && (after = g({
            insert: true,
            after
        }), !after)) {
            return null;
        }
        if (h || b) {
            a.queueLayer(after, E);
        } else {
            a.drawEleInLayer(after, E, t, e);
        }
        after.eles.push(E);
        x[t] = after;
    }
    return h || (b ? null : v);
};
Sf_prototype.getEleLevelForLayerLevel = (r, e)=>r;
Sf_prototype.drawEleInLayer = function(r, e, t, a) {
    const n = this;
    const renderer = this.renderer;
    const r_context = r.context;
    const o = e.boundingBox();
    if (!(o.w === 0 || o.h === 0 || !e.visible())) {
        t = n.getEleLevelForLayerLevel(t, a);
        renderer.setImgSmoothing(r_context, false);
        renderer.drawCachedElement(r_context, e, null, null, t, Ay);
        renderer.setImgSmoothing(r_context, true);
    }
};
Sf_prototype.levelIsComplete = function(r, e) {
    const t = this;
    const a = t.layersByLevel[r];
    if (!a || a.length === 0) {
        return false;
    }
    let n = 0;
    for (const s of a){
        if (s.reqs > 0 || s.invalid) {
            return false;
        }
        n += s.eles.length;
    }
    return n === e.length;
};
Sf_prototype.validateLayersElesOrdering = function(r, e) {
    const t = this.layersByLevel[r];
    if (t) {
        for (const n of t){
            let i = -1;
            for(var s = 0; s < e.length; s++){
                if (n.eles[0] === e[s]) {
                    i = s;
                    break;
                }
            }
            if (i < 0) {
                this.invalidateLayer(n);
                continue;
            }
            for(var s = 0; s < n.eles.length; s++){
                if (n.eles[s] !== e[i + s]) {
                    this.invalidateLayer(n);
                    break;
                }
            }
        }
    }
};
Sf_prototype.updateElementsInLayers = function(r, e) {
    const t = this;
    const a = Ma(r[0]);
    for(let n = 0; n < r.length; n++){
        const i = a ? null : r[n];
        const s = a ? r[n] : r[n].ele;
        const o = s._private.rscratch;
        const u = o.imgLayerCaches = o.imgLayerCaches || {};
        for(let l = ba; l <= Dn; l++){
            const v = u[l];
            v && (i && t.getEleLevelForLayerLevel(v.level) !== i.level || e(v, s, i));
        }
    }
};
Sf_prototype.haveLayers = function() {
    const r = this;
    let e = false;
    for(let t = ba; t <= Dn; t++){
        const a = r.layersByLevel[t];
        if (a && a.length > 0) {
            e = true;
            break;
        }
    }
    return e;
};
Sf_prototype.invalidateElements = function(r) {
    const e = this;
    if (r.length !== 0) {
        e.lastInvalidationTime = Xr();
        if (!(r.length === 0 || !e.haveLayers())) {
            e.updateElementsInLayers(r, (a, n, i)=>{
                e.invalidateLayer(a);
            });
        }
    }
};
Sf_prototype.invalidateLayer = function(r) {
    this.lastInvalidationTime = Xr();
    if (!r.invalid) {
        const { level, eles } = r;
        const a = this.layersByLevel[level];
        ut(a, r);
        r.elesQueue = [];
        r.invalid = true;
        if (r.replacement) {
            r.replacement.invalid = true;
        }
        for(let n = 0; n < eles.length; n++){
            const i = eles[n]._private.rscratch.imgLayerCaches;
            if (i) {
                i[level] = null;
            }
        }
    }
};
Sf_prototype.refineElementTextures = function(r) {
    const e = this;
    e.updateElementsInLayers(r, (a, n, i)=>{
        let a_replacement = a.replacement;
        if (!a_replacement) {
            a_replacement = a.replacement = e.makeLayer(a.bb, a.level);
            a_replacement.replaces = a;
            a_replacement.eles = a.eles;
        }
        if (!a_replacement.reqs) {
            for(let o = 0; o < a_replacement.eles.length; o++){
                e.queueLayer(a_replacement, a_replacement.eles[o]);
            }
        }
    });
};
Sf_prototype.enqueueElementRefinement = function(r) {
    this.eleTxrDeqs.merge(r);
    this.scheduleElementRefinement();
};
Sf_prototype.queueLayer = function(r, e) {
    const t = this;
    const t_layersQueue = t.layersQueue;
    const r_elesQueue = r.elesQueue;
    const i = r_elesQueue.hasId = r_elesQueue.hasId || {};
    if (!r.replacement) {
        if (e) {
            if (i[e.id()]) {
                return;
            }
            r_elesQueue.push(e);
            i[e.id()] = true;
        }
        if (r.reqs) {
            r.reqs++;
            t_layersQueue.updateItem(r);
        } else {
            r.reqs = 1;
            t_layersQueue.push(r);
        }
    }
};
Sf_prototype.dequeue = function(r) {
    const e = this;
    for(var t = e.layersQueue, a = [], n = 0; n < By && t.size() !== 0;){
        const i = t.peek();
        if (i.replacement) {
            t.pop();
            continue;
        }
        if (i.replaces && i !== i.replaces.replacement) {
            t.pop();
            continue;
        }
        if (i.invalid) {
            t.pop();
            continue;
        }
        const s = i.elesQueue.shift();
        if (s) {
            e.drawEleInLayer(i, s, i.level, r);
            n++;
        }
        if (a.length === 0) {
            a.push(true);
        }
        if (i.elesQueue.length === 0) {
            t.pop();
            i.reqs = 0;
            if (i.replaces) {
                e.applyLayerReplacement(i);
            }
            e.requestRedraw();
        }
    }
    return a;
};
Sf_prototype.applyLayerReplacement = function(r) {
    const e = this;
    const t = e.layersByLevel[r.level];
    const r_replaces = r.replaces;
    const n = t.indexOf(r_replaces);
    if (!(n < 0 || r_replaces.invalid)) {
        t[n] = r;
        for(let i = 0; i < r.eles.length; i++){
            const s = r.eles[i]._private;
            const o = s.imgLayerCaches = s.imgLayerCaches || {};
            if (o) {
                o[r.level] = r;
            }
        }
        e.requestRedraw();
    }
};
Sf_prototype.requestRedraw = Na(function() {
    const renderer = this.renderer;
    renderer.redrawHint("eles", true);
    renderer.redrawHint("drag", true);
    renderer.redraw();
}, 100);
Sf_prototype.setupDequeueing = Cf.setupDequeueing({
    deqRedrawThreshold: Ey,
    deqCost: Ty,
    deqAvgCost: Sy,
    deqNoDrawCost: ky,
    deqFastCost: Dy,
    deq (e, t) {
        return e.dequeue(t);
    },
    onDeqd: Qs,
    shouldRedraw: fv,
    priority (e) {
        return e.renderer.beforeRenderPriorities.lyrTxrDeq;
    }
});
const kf = {};
let Fl;
function polygon(r, e) {
    for (const a of e){
        r.lineTo(a.x, a.y);
    }
}
function Ly(r, e, t) {
    let a;
    for(let n = 0; n < e.length; n++){
        const i = e[n];
        if (n === 0) {
            a = i;
        }
        r.lineTo(i.x, i.y);
    }
    r.quadraticCurveTo(t.x, t.y, a.x, a.y);
}
function Vl(r, e, t) {
    if (r.beginPath) {
        r.beginPath();
    }
    for(var a = e, n = 0; n < a.length; n++){
        var i = a[n];
        r.lineTo(i.x, i.y);
    }
    const s = t;
    const o = t[0];
    r.moveTo(o.x, o.y);
    for(var n = 1; n < s.length; n++){
        var i = s[n];
        r.lineTo(i.x, i.y);
    }
    if (r.closePath) {
        r.closePath();
    }
}
function Iy(r, e, t, a, n) {
    if (r.beginPath) {
        r.beginPath();
    }
    r.arc(t, a, n, 0, Math.PI * 2, false);
    const i = e;
    const s = i[0];
    r.moveTo(s.x, s.y);
    for (const u of i){
        r.lineTo(u.x, u.y);
    }
    if (r.closePath) {
        r.closePath();
    }
}
function circle(r, e, t, a) {
    r.arc(e, t, a, 0, Math.PI * 2, false);
}
kf.arrowShapeImpl = (r)=>(Fl || (Fl = {
        polygon,
        "triangle-backcurve": Ly,
        "triangle-tee": Vl,
        "circle-triangle": Iy,
        "triangle-cross": Vl,
        circle
    }))[r];
const Hr = {};
Hr.drawElement = function(r, e, t, a, n, i) {
    const s = this;
    if (e.isNode()) {
        s.drawNode(r, e, t, a, n, i);
    } else {
        s.drawEdge(r, e, t, a, n, i);
    }
};
Hr.drawElementOverlay = function(r, e) {
    const t = this;
    if (e.isNode()) {
        t.drawNodeOverlay(r, e);
    } else {
        t.drawEdgeOverlay(r, e);
    }
};
Hr.drawElementUnderlay = function(r, e) {
    const t = this;
    if (e.isNode()) {
        t.drawNodeUnderlay(r, e);
    } else {
        t.drawEdgeUnderlay(r, e);
    }
};
Hr.drawCachedElementPortion = function(r, e, t, a, n, i, s, o) {
    const u = this;
    const l = t.getBoundingBox(e);
    if (!(l.w === 0 || l.h === 0)) {
        const v = t.getElement(e, l, a, n, i);
        if (v != null) {
            const f = o(u, e);
            if (f === 0) {
                return;
            }
            const c = s(u, e);
            const { x1, y1, w: w_1, h: h_1 } = l;
            let p;
            let m;
            let b;
            let w;
            let E;
            if (c !== 0) {
                const C = t.getRotationPoint(e);
                b = C.x;
                w = C.y;
                r.translate(b, w);
                r.rotate(c);
                E = u.getImgSmoothing(r);
                if (!E) {
                    u.setImgSmoothing(r, true);
                }
                const x = t.getRotationOffset(e);
                p = x.x;
                m = x.y;
            } else {
                p = x1;
                m = y1;
            }
            let T;
            if (f !== 1) {
                T = r.globalAlpha;
                r.globalAlpha = T * f;
            }
            r.drawImage(v.texture.canvas, v.x, 0, v.width, v.height, p, m, w_1, h_1);
            if (f !== 1) {
                r.globalAlpha = T;
            }
            if (c !== 0) {
                r.rotate(-c);
                r.translate(-b, -w);
                if (!E) {
                    u.setImgSmoothing(r, false);
                }
            }
        } else {
            t.drawElement(r, e);
        }
    }
};
const Ny = ()=>0;
const zy = (e, t)=>e.getTextAngle(t, null);
const Fy = (e, t)=>e.getTextAngle(t, "source");
const Vy = (e, t)=>e.getTextAngle(t, "target");
const qy = (e, t)=>t.effectiveOpacity();
const bs = (e, t)=>t.pstyle("text-opacity").pfValue * t.effectiveOpacity();
Hr.drawCachedElement = function(r, e, t, a, n, i) {
    const s = this;
    const s_data = s.data;
    const { eleTxrCache, lblTxrCache, slbTxrCache, tlbTxrCache } = s_data;
    const c = e.boundingBox();
    const h = i === true ? eleTxrCache.reasons.highQuality : null;
    if (!(c.w === 0 || c.h === 0 || !e.visible()) && (!a || ro(c, a))) {
        const d = e.isEdge();
        const y = e.element()._private.rscratch.badLine;
        s.drawElementUnderlay(r, e);
        s.drawCachedElementPortion(r, e, eleTxrCache, t, n, h, Ny, qy);
        if (!d || !y) {
            s.drawCachedElementPortion(r, e, lblTxrCache, t, n, h, zy, bs);
        }
        if (d && !y) {
            s.drawCachedElementPortion(r, e, slbTxrCache, t, n, h, Fy, bs);
            s.drawCachedElementPortion(r, e, tlbTxrCache, t, n, h, Vy, bs);
        }
        s.drawElementOverlay(r, e);
    }
};
Hr.drawElements = function(r, e) {
    const t = this;
    for (const n of e){
        t.drawElement(r, n);
    }
};
Hr.drawCachedElements = function(r, e, t, a) {
    const n = this;
    for (const s of e){
        n.drawCachedElement(r, s, t, a);
    }
};
Hr.drawCachedNodes = function(r, e, t, a) {
    const n = this;
    for (const s of e){
        if (s.isNode()) {
            n.drawCachedElement(r, s, t, a);
        }
    }
};
Hr.drawLayeredElements = function(r, e, t, a) {
    const n = this;
    const i = n.data.lyrTxrCache.getLayers(e, t);
    if (i) {
        for (const o of i){
            const u = o.bb;
            if (!(u.w === 0 || u.h === 0)) {
                r.drawImage(o.canvas, u.x1, u.y1, u.w, u.h);
            }
        }
    } else {
        n.drawCachedElements(r, e, t, a);
    }
};
const Qr = {};
Qr.drawEdge = function(r, e, t, a = true, n = true, i = true) {
    const s = this;
    const rscratch = e._private.rscratch;
    if (!(i && !e.visible()) && !(rscratch.badLine || rscratch.allpts == null || isNaN(rscratch.allpts[0]))) {
        let u;
        if (t) {
            u = t;
            r.translate(-u.x1, -u.y1);
        }
        const l = i ? e.pstyle("opacity").value : 1;
        const v = i ? e.pstyle("line-opacity").value : 1;
        const f = e.pstyle("curve-style").value;
        const c = e.pstyle("line-style").value;
        const h = e.pstyle("width").pfValue;
        const d = e.pstyle("line-cap").value;
        const y = e.pstyle("line-outline-width").value;
        const g = e.pstyle("line-outline-color").value;
        const p = l * v;
        const m = l * v;
        const b = (L = p)=>{
            if (f === "straight-triangle") {
                s.eleStrokeStyle(r, e, L);
                s.drawEdgeTrianglePath(e, r, rscratch.allpts);
            } else {
                r.lineWidth = h;
                r.lineCap = d;
                s.eleStrokeStyle(r, e, L);
                s.drawEdgePath(e, r, rscratch.allpts, c);
                r.lineCap = "butt";
            }
        };
        const w = (L = p)=>{
            r.lineWidth = h + y;
            r.lineCap = d;
            if (y > 0) {
                s.colorStrokeStyle(r, g[0], g[1], g[2], L);
            } else {
                r.lineCap = "butt";
                return;
            }
            if (f === "straight-triangle") {
                s.drawEdgeTrianglePath(e, r, rscratch.allpts);
            } else {
                s.drawEdgePath(e, r, rscratch.allpts, c);
                r.lineCap = "butt";
            }
        };
        const E = ()=>{
            if (n) {
                s.drawEdgeOverlay(r, e);
            }
        };
        const C = ()=>{
            if (n) {
                s.drawEdgeUnderlay(r, e);
            }
        };
        const x = (L = m)=>{
            s.drawArrowheads(r, e, L);
        };
        const T = ()=>{
            s.drawElementText(r, e, null, a);
        };
        r.lineJoin = "round";
        const k = e.pstyle("ghost").value === "yes";
        if (k) {
            const D = e.pstyle("ghost-offset-x").pfValue;
            const B = e.pstyle("ghost-offset-y").pfValue;
            const P = e.pstyle("ghost-opacity").value;
            const A = p * P;
            r.translate(D, B);
            b(A);
            x(A);
            r.translate(-D, -B);
        } else {
            w();
        }
        C();
        b();
        x();
        E();
        T();
        if (t) {
            r.translate(u.x1, u.y1);
        }
    }
};
const Df = (e)=>{
    if (![
        "overlay",
        "underlay"
    ].includes(e)) {
        throw new Error("Invalid state");
    }
    return function(t, a) {
        if (a.visible()) {
            const n = a.pstyle(`${e}-opacity`).value;
            if (n !== 0) {
                const i = this;
                const s = i.usePaths();
                const o = a._private.rscratch;
                const u = a.pstyle(`${e}-padding`).pfValue;
                const l = 2 * u;
                const v = a.pstyle(`${e}-color`).value;
                t.lineWidth = l;
                if (o.edgeType === "self" && !s) {
                    t.lineCap = "butt";
                } else {
                    t.lineCap = "round";
                }
                i.colorStrokeStyle(t, v[0], v[1], v[2], n);
                i.drawEdgePath(a, t, o.allpts, "solid");
            }
        }
    };
};
Qr.drawEdgeOverlay = Df("overlay");
Qr.drawEdgeUnderlay = Df("underlay");
Qr.drawEdgePath = function(r, e, t, a) {
    const rscratch = r._private.rscratch;
    const i = e;
    let s;
    let o = false;
    const u = this.usePaths();
    const pfValue = r.pstyle("line-dash-pattern").pfValue;
    const pfValue_1 = r.pstyle("line-dash-offset").pfValue;
    if (u) {
        const f = t.join("$");
        const c = rscratch.pathCacheKey && rscratch.pathCacheKey === f;
        if (c) {
            s = e = rscratch.pathCache;
            o = true;
        } else {
            s = e = new Path2D;
            rscratch.pathCacheKey = f;
            rscratch.pathCache = s;
        }
    }
    if (i.setLineDash) {
        switch(a){
            case "dotted":
                i.setLineDash([
                    1,
                    1
                ]);
                break;
            case "dashed":
                i.setLineDash(pfValue);
                i.lineDashOffset = pfValue_1;
                break;
            case "solid":
                i.setLineDash([]);
                break;
        }
    }
    if (!o && !rscratch.badLine) {
        if (e.beginPath) {
            e.beginPath();
        }
        e.moveTo(t[0], t[1]);
        switch(rscratch.edgeType){
            case "bezier":
            case "self":
            case "compound":
            case "multibezier":
                for(let h = 2; h + 3 < t.length; h += 4){
                    e.quadraticCurveTo(t[h], t[h + 1], t[h + 2], t[h + 3]);
                }
                break;
            case "straight":
            case "haystack":
                for(let d = 2; d + 1 < t.length; d += 2){
                    e.lineTo(t[d], t[d + 1]);
                }
                break;
            case "segments":
                if (rscratch.isRound) {
                    for (const p of rscratch.roundCorners){
                        hf(e, p);
                    }
                    e.lineTo(t[t.length - 2], t[t.length - 1]);
                } else {
                    for(let m = 2; m + 1 < t.length; m += 2){
                        e.lineTo(t[m], t[m + 1]);
                    }
                }
                break;
        }
    }
    e = i;
    if (u) {
        e.stroke(s);
    } else {
        e.stroke();
    }
    if (e.setLineDash) {
        e.setLineDash([]);
    }
};
Qr.drawEdgeTrianglePath = (r, e, t)=>{
    e.fillStyle = e.strokeStyle;
    const pfValue = r.pstyle("width").pfValue;
    for(let n = 0; n + 1 < t.length; n += 2){
        const i = [
            t[n + 2] - t[n],
            t[n + 3] - t[n + 1]
        ];
        const s = Math.sqrt(i[0] * i[0] + i[1] * i[1]);
        const o = [
            i[1] / s,
            -i[0] / s
        ];
        const u = [
            o[0] * pfValue / 2,
            o[1] * pfValue / 2
        ];
        e.beginPath();
        e.moveTo(t[n] - u[0], t[n + 1] - u[1]);
        e.lineTo(t[n] + u[0], t[n + 1] + u[1]);
        e.lineTo(t[n + 2], t[n + 3]);
        e.closePath();
        e.fill();
    }
};
Qr.drawArrowheads = function(r, e, t) {
    const rscratch = e._private.rscratch;
    const n = rscratch.edgeType === "haystack";
    if (!n) {
        this.drawArrowhead(r, e, "source", rscratch.arrowStartX, rscratch.arrowStartY, rscratch.srcArrowAngle, t);
    }
    this.drawArrowhead(r, e, "mid-target", rscratch.midX, rscratch.midY, rscratch.midtgtArrowAngle, t);
    this.drawArrowhead(r, e, "mid-source", rscratch.midX, rscratch.midY, rscratch.midsrcArrowAngle, t);
    if (!n) {
        this.drawArrowhead(r, e, "target", rscratch.arrowEndX, rscratch.arrowEndY, rscratch.tgtArrowAngle, t);
    }
};
Qr.drawArrowhead = function(r, e, t, a, n, i, s) {
    if (!(isNaN(a) || a == null || isNaN(n) || n == null || isNaN(i) || i == null)) {
        const o = this;
        const u = e.pstyle(`${t}-arrow-shape`).value;
        if (u !== "none") {
            const l = e.pstyle(`${t}-arrow-fill`).value === "hollow" ? "both" : "filled";
            const v = e.pstyle(`${t}-arrow-fill`).value;
            const f = e.pstyle("width").pfValue;
            const c = e.pstyle(`${t}-arrow-width`);
            let h = c.value === "match-line" ? f : c.pfValue;
            if (c.units === "%") {
                h *= f;
            }
            const d = e.pstyle("opacity").value;
            if (s === undefined) {
                s = d;
            }
            const y = r.globalCompositeOperation;
            if (s !== 1 || v === "hollow") {
                r.globalCompositeOperation = "destination-out";
                o.colorFillStyle(r, 255, 255, 255, 1);
                o.colorStrokeStyle(r, 255, 255, 255, 1);
                o.drawArrowShape(e, r, l, f, u, h, a, n, i);
                r.globalCompositeOperation = y;
            }
            const g = e.pstyle(`${t}-arrow-color`).value;
            o.colorFillStyle(r, g[0], g[1], g[2], s);
            o.colorStrokeStyle(r, g[0], g[1], g[2], s);
            o.drawArrowShape(e, r, v, f, u, h, a, n, i);
        }
    }
};
Qr.drawArrowShape = function(r, e, t, a, n, i, s, o, u) {
    const l = this;
    const v = this.usePaths() && n !== "triangle-cross";
    let f = false;
    let c;
    const h = e;
    const d = {
        x: s,
        y: o
    };
    const value = r.pstyle("arrow-scale").value;
    const g = this.getArrowWidth(a, value);
    const p = l.arrowShapes[n];
    if (v) {
        const m = l.arrowPathCache = l.arrowPathCache || [];
        const b = kt(n);
        const w = m[b];
        if (w != null) {
            e = w;
            c = w;
            f = true;
        } else {
            c = e = new Path2D;
            m[b] = c;
        }
    }
    f || (e.beginPath && e.beginPath(), v ? p.draw(e, 1, 0, {
        x: 0,
        y: 0
    }, 1) : p.draw(e, g, u, d, a), e.closePath && e.closePath());
    e = h;
    if (v) {
        e.translate(s, o);
        e.rotate(u);
        e.scale(g, g);
    }
    (t === "filled" || t === "both") && (v ? e.fill(c) : e.fill());
    if (t === "hollow" || t === "both") {
        e.lineWidth = i / (v ? g : 1);
        e.lineJoin = "miter";
        if (v) {
            e.stroke(c);
        } else {
            e.stroke();
        }
    }
    if (v) {
        e.scale(1 / g, 1 / g);
        e.rotate(-u);
        e.translate(-s, -o);
    }
};
const po = {};
po.safeDrawImage = (r, e, t, a, n, i, s, o, u, l)=>{
    if (!(n <= 0 || i <= 0 || u <= 0 || l <= 0)) {
        try {
            r.drawImage(e, t, a, n, i, s, o, u, l);
        } catch (error) {
            ze(error);
        }
    }
};
po.drawInscribedImage = function(r, e, t, a, n) {
    const i = this;
    const s = t.position();
    let o = s.x;
    let u = s.y;
    const l = t.cy().style();
    const v = l.getIndexedStyle.bind(l);
    const f = v(t, "background-fit", "value", a);
    const c = v(t, "background-repeat", "value", a);
    const h = t.width();
    const d = t.height();
    const y = t.padding() * 2;
    const g = h + (v(t, "background-width-relative-to", "value", a) === "inner" ? 0 : y);
    const p = d + (v(t, "background-height-relative-to", "value", a) === "inner" ? 0 : y);
    const rscratch = t._private.rscratch;
    const b = v(t, "background-clip", "value", a);
    const w = b === "node";
    const E = v(t, "background-image-opacity", "value", a) * n;
    const C = v(t, "background-image-smoothing", "value", a);
    let value = t.pstyle("corner-radius").value;
    if (value !== "auto") {
        value = t.pstyle("corner-radius").pfValue;
    }
    let T = e.width || e.cachedW;
    let k = e.height || e.cachedH;
    if (T == null || k == null) {
        document.body.appendChild(e);
        T = e.cachedW = e.width || e.offsetWidth;
        k = e.cachedH = e.height || e.offsetHeight;
        document.body.removeChild(e);
    }
    let D = T;
    let B = k;
    v(t, "background-width", "value", a) !== "auto" && (v(t, "background-width", "units", a) === "%" ? D = v(t, "background-width", "pfValue", a) * g : D = v(t, "background-width", "pfValue", a));
    v(t, "background-height", "value", a) !== "auto" && (v(t, "background-height", "units", a) === "%" ? B = v(t, "background-height", "pfValue", a) * p : B = v(t, "background-height", "pfValue", a));
    if (!(D === 0 || B === 0)) {
        if (f === "contain") {
            var P = Math.min(g / D, p / B);
            D *= P;
            B *= P;
        } else if (f === "cover") {
            var P = Math.max(g / D, p / B);
            D *= P;
            B *= P;
        }
        let A = o - g / 2;
        const R = v(t, "background-position-x", "units", a);
        const L = v(t, "background-position-x", "pfValue", a);
        if (R === "%") {
            A += (g - D) * L;
        } else {
            A += L;
        }
        const I = v(t, "background-offset-x", "units", a);
        const M = v(t, "background-offset-x", "pfValue", a);
        if (I === "%") {
            A += (g - D) * M;
        } else {
            A += M;
        }
        let O = u - p / 2;
        const q = v(t, "background-position-y", "units", a);
        const _ = v(t, "background-position-y", "pfValue", a);
        if (q === "%") {
            O += (p - B) * _;
        } else {
            O += _;
        }
        const N = v(t, "background-offset-y", "units", a);
        const F = v(t, "background-offset-y", "pfValue", a);
        if (N === "%") {
            O += (p - B) * F;
        } else {
            O += F;
        }
        if (rscratch.pathCache) {
            A -= o;
            O -= u;
            o = 0;
            u = 0;
        }
        const U = r.globalAlpha;
        r.globalAlpha = E;
        const J = i.getImgSmoothing(r);
        let Z = false;
        if (C === "no" && J) {
            i.setImgSmoothing(r, false);
            Z = true;
        } else if (C === "yes" && !J) {
            i.setImgSmoothing(r, true);
            Z = true;
        }
        if (c === "no-repeat") {
            if (w) {
                r.save();
                if (rscratch.pathCache) {
                    r.clip(rscratch.pathCache);
                } else {
                    i.nodeShapes[i.getNodeShape(t)].draw(r, o, u, g, p, value, rscratch);
                    r.clip();
                }
            }
            i.safeDrawImage(r, e, 0, 0, T, k, A, O, D, B);
            if (w) {
                r.restore();
            }
        } else {
            const j = r.createPattern(e, c);
            r.fillStyle = j;
            i.nodeShapes[i.getNodeShape(t)].draw(r, o, u, g, p, value, rscratch);
            r.translate(A, O);
            r.fill();
            r.translate(-A, -O);
        }
        r.globalAlpha = U;
        if (Z) {
            i.setImgSmoothing(r, J);
        }
    }
};
const Mt = {};
Mt.eleTextBiggerThanMin = function(r, e) {
    if (!e) {
        const t = r.cy().zoom();
        const a = this.getPixelRatio();
        const n = Math.ceil(js(t * a));
        e = 2 ** n;
    }
    const i = r.pstyle("font-size").pfValue * e;
    const pfValue = r.pstyle("min-zoomed-font-size").pfValue;
    return !(i < pfValue);
};
Mt.drawElementText = function(r, e, t, a, n, i = true) {
    const s = this;
    if (a == null) {
        if (i && !s.eleTextBiggerThanMin(e)) {
            return;
        }
    } else if (a === false) {
        return;
    }
    if (e.isNode()) {
        const o = e.pstyle("label");
        if (!o || !o.value) {
            return;
        }
        const u = s.getLabelJustification(e);
        r.textAlign = u;
        r.textBaseline = "bottom";
    } else {
        const l = e.element()._private.rscratch.badLine;
        const v = e.pstyle("label");
        const f = e.pstyle("source-label");
        const c = e.pstyle("target-label");
        if (l || (!v || !v.value) && (!f || !f.value) && (!c || !c.value)) {
            return;
        }
        r.textAlign = "center";
        r.textBaseline = "bottom";
    }
    const h = !t;
    let d;
    if (t) {
        d = t;
        r.translate(-d.x1, -d.y1);
    }
    if (n == null) {
        s.drawText(r, e, null, h, i);
        if (e.isEdge()) {
            s.drawText(r, e, "source", h, i);
            s.drawText(r, e, "target", h, i);
        }
    } else {
        s.drawText(r, e, n, h, i);
    }
    if (t) {
        r.translate(d.x1, d.y1);
    }
};
Mt.getFontCache = function(r) {
    let e;
    this.fontCaches = this.fontCaches || [];
    for(let t = 0; t < this.fontCaches.length; t++){
        e = this.fontCaches[t];
        if (e.context === r) {
            return e;
        }
    }
    e = {
        context: r
    };
    this.fontCaches.push(e);
    return e;
};
Mt.setupTextStyle = function(r, e, t = true) {
    const strValue = e.pstyle("font-style").strValue;
    const n = `${e.pstyle("font-size").pfValue}px`;
    const strValue_1 = e.pstyle("font-family").strValue;
    const strValue_2 = e.pstyle("font-weight").strValue;
    const o = t ? e.effectiveOpacity() * e.pstyle("text-opacity").value : 1;
    const u = e.pstyle("text-outline-opacity").value * o;
    const value = e.pstyle("color").value;
    const value_1 = e.pstyle("text-outline-color").value;
    r.font = `${strValue} ${strValue_2} ${n} ${strValue_1}`;
    r.lineJoin = "round";
    this.colorFillStyle(r, value[0], value[1], value[2], o);
    this.colorStrokeStyle(r, value_1[0], value_1[1], value_1[2], u);
};
function _y(r, e, t, a, n) {
    const i = Math.min(a, n);
    const s = i / 2;
    const o = e + a / 2;
    const u = t + n / 2;
    r.beginPath();
    r.arc(o, u, s, 0, Math.PI * 2);
    r.closePath();
}
function ql(r, e, t, a, n, i = 5) {
    const s = Math.min(i, a / 2, n / 2);
    r.beginPath();
    r.moveTo(e + s, t);
    r.lineTo(e + a - s, t);
    r.quadraticCurveTo(e + a, t, e + a, t + s);
    r.lineTo(e + a, t + n - s);
    r.quadraticCurveTo(e + a, t + n, e + a - s, t + n);
    r.lineTo(e + s, t + n);
    r.quadraticCurveTo(e, t + n, e, t + n - s);
    r.lineTo(e, t + s);
    r.quadraticCurveTo(e, t, e + s, t);
    r.closePath();
}
Mt.getTextAngle = (r, e)=>{
    let t;
    const r__private = r._private;
    const a_rscratch = r__private.rscratch;
    const i = e ? `${e}-` : "";
    const s = r.pstyle(`${i}text-rotation`);
    if (s.strValue === "autorotate") {
        const o = xr(a_rscratch, "labelAngle", e);
        t = r.isEdge() ? o : 0;
    } else {
        if (s.strValue === "none") {
            t = 0;
        } else {
            t = s.pfValue;
        }
    }
    return t;
};
Mt.drawText = function(r, e, t, a = true, n = true) {
    const e__private = e._private;
    const i_rscratch = e__private.rscratch;
    const o = n ? e.effectiveOpacity() : 1;
    if (!(n && (o === 0 || e.pstyle("text-opacity").value === 0))) {
        if (t === "main") {
            t = null;
        }
        let u = xr(i_rscratch, "labelX", t);
        let l = xr(i_rscratch, "labelY", t);
        let v;
        let f;
        const c = this.getLabelText(e, t);
        if (c != null && c !== "" && !isNaN(u) && !isNaN(l)) {
            this.setupTextStyle(r, e, n);
            const h = t ? `${t}-` : "";
            const d = xr(i_rscratch, "labelWidth", t);
            const y = xr(i_rscratch, "labelHeight", t);
            const g = e.pstyle(`${h}text-margin-x`).pfValue;
            const p = e.pstyle(`${h}text-margin-y`).pfValue;
            const m = e.isEdge();
            let b = e.pstyle("text-halign").value;
            let w = e.pstyle("text-valign").value;
            if (m) {
                b = "center";
                w = "center";
            }
            u += g;
            l += p;
            let E;
            if (a) {
                E = this.getTextAngle(e, t);
            } else {
                E = 0;
            }
            if (E !== 0) {
                v = u;
                f = l;
                r.translate(v, f);
                r.rotate(E);
                u = 0;
                l = 0;
            }
            switch(w){
                case "top":
                    break;
                case "center":
                    l += y / 2;
                    break;
                case "bottom":
                    l += y;
                    break;
            }
            const C = e.pstyle("text-background-opacity").value;
            const x = e.pstyle("text-border-opacity").value;
            const T = e.pstyle("text-border-width").pfValue;
            const k = e.pstyle("text-background-padding").pfValue;
            const D = e.pstyle("text-background-shape").strValue;
            const B = D === "round-rectangle" || D === "roundrectangle";
            const P = D === "circle";
            const A = 2;
            if (C > 0 || T > 0 && x > 0) {
                const { fillStyle, strokeStyle, lineWidth } = r;
                const M = e.pstyle("text-background-color").value;
                const O = e.pstyle("text-border-color").value;
                const q = e.pstyle("text-border-style").value;
                const _ = C > 0;
                const N = T > 0 && x > 0;
                let F = u - k;
                switch(b){
                    case "left":
                        F -= d;
                        break;
                    case "center":
                        F -= d / 2;
                        break;
                }
                const U = l - y - k;
                const J = d + 2 * k;
                const Z = y + 2 * k;
                if (_) {
                    r.fillStyle = `rgba(${M[0]},${M[1]},${M[2]},${C * o})`;
                }
                if (N && (r.strokeStyle = `rgba(${O[0]},${O[1]},${O[2]},${x * o})`, r.lineWidth = T, r.setLineDash)) {
                    switch(q){
                        case "dotted":
                            r.setLineDash([
                                1,
                                1
                            ]);
                            break;
                        case "dashed":
                            r.setLineDash([
                                4,
                                2
                            ]);
                            break;
                        case "double":
                            r.lineWidth = T / 4;
                            r.setLineDash([]);
                            break;
                        default:
                            r.setLineDash([]);
                            break;
                    }
                }
                if (B) {
                    r.beginPath();
                    ql(r, F, U, J, Z, A);
                } else if (P) {
                    r.beginPath();
                    _y(r, F, U, J, Z);
                } else {
                    r.beginPath();
                    r.rect(F, U, J, Z);
                }
                if (_) {
                    r.fill();
                }
                if (N) {
                    r.stroke();
                }
                if (N && q === "double") {
                    const j = T / 2;
                    r.beginPath();
                    if (B) {
                        ql(r, F + j, U + j, J - 2 * j, Z - 2 * j, A);
                    } else {
                        r.rect(F + j, U + j, J - 2 * j, Z - 2 * j);
                    }
                    r.stroke();
                }
                r.fillStyle = fillStyle;
                r.strokeStyle = strokeStyle;
                r.lineWidth = lineWidth;
                if (r.setLineDash) {
                    r.setLineDash([]);
                }
            }
            const re = 2 * e.pstyle("text-outline-width").pfValue;
            if (re > 0) {
                r.lineWidth = re;
            }
            if (e.pstyle("text-wrap").value === "wrap") {
                const ne = xr(i_rscratch, "labelWrapCachedLines", t);
                const Q = xr(i_rscratch, "labelLineHeight", t);
                const V = d / 2;
                const H = this.getLabelJustification(e);
                H === "auto" || (b === "left" ? H === "left" ? u += -d : H === "center" && (u += -V) : b === "center" ? H === "left" ? u += -V : H === "right" && (u += V) : b === "right" && (H === "center" ? u += V : H === "right" && (u += d)));
                switch(w){
                    case "top":
                        l -= (ne.length - 1) * Q;
                        break;
                    case "center":
                    case "bottom":
                        l -= (ne.length - 1) * Q;
                        break;
                }
                for(let W = 0; W < ne.length; W++){
                    if (re > 0) {
                        r.strokeText(ne[W], u, l);
                    }
                    r.fillText(ne[W], u, l);
                    l += Q;
                }
            } else {
                if (re > 0) {
                    r.strokeText(c, u, l);
                }
                r.fillText(c, u, l);
            }
            if (E !== 0) {
                r.rotate(-E);
                r.translate(-v, -f);
            }
        }
    }
};
const pt = {};
pt.drawNode = function(r, e, t, a = true, n = true, i = true) {
    const s = this;
    let o;
    let u;
    const e__private = e._private;
    const l_rscratch = e__private.rscratch;
    const f = e.position();
    if (!(!ae(f.x) || !ae(f.y)) && !(i && !e.visible())) {
        const c = i ? e.effectiveOpacity() : 1;
        const h = s.usePaths();
        let d;
        let y = false;
        const g = e.padding();
        o = e.width() + 2 * g;
        u = e.height() + 2 * g;
        let p;
        if (t) {
            p = t;
            r.translate(-p.x1, -p.y1);
        }
        const m = e.pstyle("background-image");
        for(var b = m.value, w = new Array(b.length), E = new Array(b.length), C = 0, x = 0; x < b.length; x++){
            const T = b[x];
            const k = w[x] = T != null && T !== "none";
            if (k) {
                const D = e.cy().style().getIndexedStyle(e, "background-image-crossorigin", "value", x);
                C++;
                E[x] = s.getCachedImage(T, D, ()=>{
                    e__private.backgroundTimestamp = Date.now();
                    e.emitAndNotify("background");
                });
            }
        }
        const B = e.pstyle("background-blacken").value;
        const P = e.pstyle("border-width").pfValue;
        const A = e.pstyle("background-opacity").value * c;
        const R = e.pstyle("border-color").value;
        const L = e.pstyle("border-style").value;
        const I = e.pstyle("border-join").value;
        const M = e.pstyle("border-cap").value;
        const O = e.pstyle("border-position").value;
        const q = e.pstyle("border-dash-pattern").pfValue;
        const _ = e.pstyle("border-dash-offset").pfValue;
        const N = e.pstyle("border-opacity").value * c;
        const F = e.pstyle("outline-width").pfValue;
        const U = e.pstyle("outline-color").value;
        const J = e.pstyle("outline-style").value;
        const Z = e.pstyle("outline-opacity").value * c;
        const j = e.pstyle("outline-offset").value;
        let re = e.pstyle("corner-radius").value;
        if (re !== "auto") {
            re = e.pstyle("corner-radius").pfValue;
        }
        const ne = (S = A)=>{
            s.eleFillStyle(r, e, S);
        };
        const Q = (S = N)=>{
            s.colorStrokeStyle(r, R[0], R[1], R[2], S);
        };
        const V = (S = Z)=>{
            s.colorStrokeStyle(r, U[0], U[1], U[2], S);
        };
        const H = (S, z, G, $)=>{
            const K = s.nodePathCache = s.nodePathCache || [];
            const le = vv(G === "polygon" ? `${G},${$.join(",")}` : G, `${z}`, `${S}`, `${re}`);
            const ee = K[le];
            let path;
            let cacheHit = false;
            if (ee != null) {
                path = ee;
                cacheHit = true;
                l_rscratch.pathCache = path;
            } else {
                path = new Path2D;
                K[le] = l_rscratch.pathCache = path;
            }
            return {
                path,
                cacheHit
            };
        };
        const W = e.pstyle("shape").strValue;
        const Y = e.pstyle("shape-polygon-points").pfValue;
        if (h) {
            r.translate(f.x, f.y);
            const te = H(o, u, W, Y);
            d = te.path;
            y = te.cacheHit;
        }
        const ce = ()=>{
            if (!y) {
                let S = f;
                if (h) {
                    S = {
                        x: 0,
                        y: 0
                    };
                }
                s.nodeShapes[s.getNodeShape(e)].draw(d || r, S.x, S.y, o, u, re, l_rscratch);
            }
            if (h) {
                r.fill(d);
            } else {
                r.fill();
            }
        };
        const Be = (S = c, z = true)=>{
            const e__private_backgrounding = e__private.backgrounding;
            let $ = 0;
            for(let K = 0; K < E.length; K++){
                const le = e.cy().style().getIndexedStyle(e, "background-image-containment", "value", K);
                if (z && le === "over" || !z && le === "inside") {
                    $++;
                    continue;
                }
                if (w[K] && E[K].complete && !E[K].error) {
                    $++;
                    s.drawInscribedImage(r, E[K], e, K, S);
                }
            }
            e__private.backgrounding = $ !== C;
            if (e__private_backgrounding !== e__private.backgrounding) {
                e.updateStyle(false);
            }
        };
        const we = (S = false, z = c)=>{
            if (s.hasPie(e)) {
                s.drawPie(r, e, z);
                S && (h || s.nodeShapes[s.getNodeShape(e)].draw(r, f.x, f.y, o, u, re, l_rscratch));
            }
        };
        const me = (S = false, z = c)=>{
            if (s.hasStripe(e)) {
                r.save();
                if (h) {
                    r.clip(l_rscratch.pathCache);
                } else {
                    s.nodeShapes[s.getNodeShape(e)].draw(r, f.x, f.y, o, u, re, l_rscratch);
                    r.clip();
                }
                s.drawStripe(r, e, z);
                r.restore();
                S && (h || s.nodeShapes[s.getNodeShape(e)].draw(r, f.x, f.y, o, u, re, l_rscratch));
            }
        };
        const ge = (S = c)=>{
            const z = (B > 0 ? B : -B) * S;
            const G = B > 0 ? 0 : 255;
            if (B !== 0) {
                s.colorFillStyle(r, G, G, G, z);
                if (h) {
                    r.fill(d);
                } else {
                    r.fill();
                }
            }
        };
        const se = ()=>{
            if (P > 0) {
                r.lineWidth = P;
                r.lineCap = M;
                r.lineJoin = I;
                if (r.setLineDash) {
                    switch(L){
                        case "dotted":
                            r.setLineDash([
                                1,
                                1
                            ]);
                            break;
                        case "dashed":
                            r.setLineDash(q);
                            r.lineDashOffset = _;
                            break;
                        case "solid":
                        case "double":
                            r.setLineDash([]);
                            break;
                    }
                }
                if (O !== "center") {
                    r.save();
                    r.lineWidth *= 2;
                    if (O === "inside") {
                        if (h) {
                            r.clip(d);
                        } else {
                            r.clip();
                        }
                    } else {
                        const S = new Path2D;
                        S.rect(-o / 2 - P, -u / 2 - P, o + 2 * P, u + 2 * P);
                        S.addPath(d);
                        r.clip(S, "evenodd");
                    }
                    if (h) {
                        r.stroke(d);
                    } else {
                        r.stroke();
                    }
                    r.restore();
                } else {
                    if (h) {
                        r.stroke(d);
                    } else {
                        r.stroke();
                    }
                }
                if (L === "double") {
                    r.lineWidth = P / 3;
                    const z = r.globalCompositeOperation;
                    r.globalCompositeOperation = "destination-out";
                    if (h) {
                        r.stroke(d);
                    } else {
                        r.stroke();
                    }
                    r.globalCompositeOperation = z;
                }
                if (r.setLineDash) {
                    r.setLineDash([]);
                }
            }
        };
        const de = ()=>{
            if (F > 0) {
                r.lineWidth = F;
                r.lineCap = "butt";
                if (r.setLineDash) {
                    switch(J){
                        case "dotted":
                            r.setLineDash([
                                1,
                                1
                            ]);
                            break;
                        case "dashed":
                            r.setLineDash([
                                4,
                                2
                            ]);
                            break;
                        case "solid":
                        case "double":
                            r.setLineDash([]);
                            break;
                    }
                }
                let S = f;
                if (h) {
                    S = {
                        x: 0,
                        y: 0
                    };
                }
                const z = s.getNodeShape(e);
                let G = P;
                if (O === "inside") {
                    G = 0;
                }
                if (O === "outside") {
                    G *= 2;
                }
                let $ = (o + G + (F + j)) / o;
                let K = (u + G + (F + j)) / u;
                let le = o * $;
                let ee = u * K;
                let ie = s.nodeShapes[z].points;
                let oe;
                if (h) {
                    const pe = H(le, ee, z, ie);
                    oe = pe.path;
                }
                if (z === "ellipse") {
                    s.drawEllipsePath(oe || r, S.x, S.y, le, ee);
                } else if ([
                    "round-diamond",
                    "round-heptagon",
                    "round-hexagon",
                    "round-octagon",
                    "round-pentagon",
                    "round-polygon",
                    "round-triangle",
                    "round-tag"
                ].includes(z)) {
                    let Ee = 0;
                    let Ce = 0;
                    let ve = 0;
                    switch(z){
                        case "round-diamond":
                            Ee = (G + j + F) * 1.4;
                            break;
                        case "round-heptagon":
                            Ee = (G + j + F) * 1.075;
                            ve = -(G / 2 + j + F) / 35;
                            break;
                        case "round-hexagon":
                            Ee = (G + j + F) * 1.12;
                            break;
                        case "round-pentagon":
                            Ee = (G + j + F) * 1.13;
                            ve = -(G / 2 + j + F) / 15;
                            break;
                        case "round-tag":
                            Ee = (G + j + F) * 1.12;
                            Ce = (G / 2 + F + j) * 0.07;
                            break;
                        default:
                            if (z === "round-triangle") {
                                Ee = (G + j + F) * (Math.PI / 2);
                                ve = -(G + j / 2 + F) / Math.PI;
                            }
                    }
                    if (Ee !== 0) {
                        $ = (o + Ee) / o;
                        le = o * $;
                        if (![
                            "round-hexagon",
                            "round-tag"
                        ].includes(z)) {
                            K = (u + Ee) / u;
                            ee = u * K;
                        }
                    }
                    re = re === "auto" ? wv(le, ee) : re;
                    const ke = le / 2;
                    const Pe = ee / 2;
                    const ar = re + (G + F + j) / 2;
                    const Ue = new Array(ie.length / 2);
                    const Pr = new Array(ie.length / 2);
                    for(let Ke = 0; Ke < ie.length / 2; Ke++){
                        Ue[Ke] = {
                            x: S.x + Ce + ke * ie[Ke * 2],
                            y: S.y + ve + Pe * ie[Ke * 2 + 1]
                        };
                    }
                    let Ye;
                    let Je;
                    let or;
                    let Nr;
                    const We = Ue.length;
                    Je = Ue[We - 1];
                    for(Ye = 0; Ye < We; Ye++){
                        or = Ue[Ye % We];
                        Nr = Ue[(Ye + 1) % We];
                        Pr[Ye] = ho(Je, or, Nr, ar);
                        Je = or;
                        or = Nr;
                    }
                    s.drawRoundPolygonPath(oe || r, S.x + Ce, S.y + ve, o * $, u * K, ie, Pr);
                } else if ([
                    "roundrectangle",
                    "round-rectangle"
                ].includes(z)) {
                    re = re === "auto" ? lt(le, ee) : re;
                    s.drawRoundRectanglePath(oe || r, S.x, S.y, le, ee, re + (G + F + j) / 2);
                } else if ([
                    "cutrectangle",
                    "cut-rectangle"
                ].includes(z)) {
                    re = re === "auto" ? to() : re;
                    s.drawCutRectanglePath(oe || r, S.x, S.y, le, ee, null, re + (G + F + j) / 4);
                } else if ([
                    "bottomroundrectangle",
                    "bottom-round-rectangle"
                ].includes(z)) {
                    re = re === "auto" ? lt(le, ee) : re;
                    s.drawBottomRoundRectanglePath(oe || r, S.x, S.y, le, ee, re + (G + F + j) / 2);
                } else if (z === "barrel") {
                    s.drawBarrelPath(oe || r, S.x, S.y, le, ee);
                } else if (z.startsWith("polygon") || [
                    "rhomboid",
                    "right-rhomboid",
                    "round-tag",
                    "tag",
                    "vee"
                ].includes(z)) {
                    const Wr = (G + F + j) / o;
                    ie = wn(xn(ie, Wr));
                    s.drawPolygonPath(oe || r, S.x, S.y, o, u, ie);
                } else {
                    const Ar = (G + F + j) / o;
                    ie = wn(xn(ie, -Ar));
                    s.drawPolygonPath(oe || r, S.x, S.y, o, u, ie);
                }
                if (h) {
                    r.stroke(oe);
                } else {
                    r.stroke();
                }
                if (J === "double") {
                    r.lineWidth = G / 3;
                    const Jr = r.globalCompositeOperation;
                    r.globalCompositeOperation = "destination-out";
                    if (h) {
                        r.stroke(oe);
                    } else {
                        r.stroke();
                    }
                    r.globalCompositeOperation = Jr;
                }
                if (r.setLineDash) {
                    r.setLineDash([]);
                }
            }
        };
        const fe = ()=>{
            if (n) {
                s.drawNodeOverlay(r, e, f, o, u);
            }
        };
        const xe = ()=>{
            if (n) {
                s.drawNodeUnderlay(r, e, f, o, u);
            }
        };
        const be = ()=>{
            s.drawElementText(r, e, null, a);
        };
        const Se = e.pstyle("ghost").value === "yes";
        if (Se) {
            const De = e.pstyle("ghost-offset-x").pfValue;
            const Oe = e.pstyle("ghost-offset-y").pfValue;
            const Le = e.pstyle("ghost-opacity").value;
            const Ae = Le * c;
            r.translate(De, Oe);
            V();
            de();
            ne(Le * A);
            ce();
            Be(Ae, true);
            Q(Le * N);
            se();
            we(B !== 0 || P !== 0);
            me(B !== 0 || P !== 0);
            Be(Ae, false);
            ge(Ae);
            r.translate(-De, -Oe);
        }
        if (h) {
            r.translate(-f.x, -f.y);
        }
        xe();
        if (h) {
            r.translate(f.x, f.y);
        }
        V();
        de();
        ne();
        ce();
        Be(c, true);
        Q();
        se();
        we(B !== 0 || P !== 0);
        me(B !== 0 || P !== 0);
        Be(c, false);
        ge();
        if (h) {
            r.translate(-f.x, -f.y);
        }
        be();
        fe();
        if (t) {
            r.translate(p.x1, p.y1);
        }
    }
};
const Bf = (e)=>{
    if (![
        "overlay",
        "underlay"
    ].includes(e)) {
        throw new Error("Invalid state");
    }
    return function(t, a, n, i, s) {
        const o = this;
        if (a.visible()) {
            const u = a.pstyle(`${e}-padding`).pfValue;
            const l = a.pstyle(`${e}-opacity`).value;
            const v = a.pstyle(`${e}-color`).value;
            const f = a.pstyle(`${e}-shape`).value;
            const c = a.pstyle(`${e}-corner-radius`).value;
            if (l > 0) {
                n = n || a.position();
                if (i == null || s == null) {
                    const h = a.padding();
                    i = a.width() + 2 * h;
                    s = a.height() + 2 * h;
                }
                o.colorFillStyle(t, v[0], v[1], v[2], l);
                o.nodeShapes[f].draw(t, n.x, n.y, i + u * 2, s + u * 2, c);
                t.fill();
            }
        }
    };
};
pt.drawNodeOverlay = Bf("overlay");
pt.drawNodeUnderlay = Bf("underlay");
pt.hasPie = (r)=>{
    r = r[0];
    return r._private.hasPie;
};
pt.hasStripe = (r)=>{
    r = r[0];
    return r._private.hasStripe;
};
pt.drawPie = function(r, e, t, a) {
    e = e[0];
    a = a || e.position();
    const n = e.cy().style();
    const i = e.pstyle("pie-size");
    const s = e.pstyle("pie-hole");
    const pfValue = e.pstyle("pie-start-angle").pfValue;
    let u = a.x;
    let l = a.y;
    const v = e.width();
    const f = e.height();
    let c = Math.min(v, f) / 2;
    let h;
    let d = 0;
    const y = this.usePaths();
    if (y) {
        u = 0;
        l = 0;
    }
    if (i.units === "%") {
        c = c * i.pfValue;
    } else if (i.pfValue !== undefined) {
        c = i.pfValue / 2;
    }
    if (s.units === "%") {
        h = c * s.pfValue;
    } else if (s.pfValue !== undefined) {
        h = s.pfValue / 2;
    }
    if (!(h >= c)) {
        for(let g = 1; g <= n.pieBackgroundN; g++){
            const p = e.pstyle(`pie-${g}-background-size`).value;
            const m = e.pstyle(`pie-${g}-background-color`).value;
            const b = e.pstyle(`pie-${g}-background-opacity`).value * t;
            let w = p / 100;
            if (w + d > 1) {
                w = 1 - d;
            }
            let E = 1.5 * Math.PI + 2 * Math.PI * d;
            E += pfValue;
            const C = 2 * Math.PI * w;
            const x = E + C;
            if (!(p === 0 || d >= 1 || d + w > 1)) {
                if (h === 0) {
                    r.beginPath();
                    r.moveTo(u, l);
                    r.arc(u, l, c, E, x);
                    r.closePath();
                } else {
                    r.beginPath();
                    r.arc(u, l, c, E, x);
                    r.arc(u, l, h, x, E, true);
                    r.closePath();
                }
                this.colorFillStyle(r, m[0], m[1], m[2], b);
                r.fill();
                d += w;
            }
        }
    }
};
pt.drawStripe = function(r, e, t, a) {
    e = e[0];
    a = a || e.position();
    const n = e.cy().style();
    let i = a.x;
    let s = a.y;
    const o = e.width();
    const u = e.height();
    let l = 0;
    const v = this.usePaths();
    r.save();
    const value = e.pstyle("stripe-direction").value;
    const c = e.pstyle("stripe-size");
    switch(value){
        case "vertical":
            break;
        case "righward":
            r.rotate(-Math.PI / 2);
            break;
    }
    let h = o;
    let d = u;
    if (c.units === "%") {
        h = h * c.pfValue;
        d = d * c.pfValue;
    } else if (c.pfValue !== undefined) {
        h = c.pfValue;
        d = c.pfValue;
    }
    if (v) {
        i = 0;
        s = 0;
    }
    s -= h / 2;
    i -= d / 2;
    for(let y = 1; y <= n.stripeBackgroundN; y++){
        const g = e.pstyle(`stripe-${y}-background-size`).value;
        const p = e.pstyle(`stripe-${y}-background-color`).value;
        const m = e.pstyle(`stripe-${y}-background-opacity`).value * t;
        let b = g / 100;
        if (b + l > 1) {
            b = 1 - l;
        }
        if (!(g === 0 || l >= 1 || l + b > 1)) {
            r.beginPath();
            r.rect(i, s + d * l, h, d * b);
            r.closePath();
            this.colorFillStyle(r, p[0], p[1], p[2], m);
            r.fill();
            l += b;
        }
    }
    r.restore();
};
const mr = {};
const Gy = 100;
mr.getPixelRatio = function() {
    const r = this.data.contexts[0];
    if (this.forcedPixelRatio != null) {
        return this.forcedPixelRatio;
    }
    const e = this.cy.window();
    const t = r.backingStorePixelRatio || r.webkitBackingStorePixelRatio || r.mozBackingStorePixelRatio || r.msBackingStorePixelRatio || r.oBackingStorePixelRatio || r.backingStorePixelRatio || 1;
    return (e.devicePixelRatio || 1) / t;
};
mr.paintCache = function(r) {
    let a;
    for(var e = this.paintCaches = this.paintCaches || [], t = true, n = 0; n < e.length; n++){
        a = e[n];
        if (a.context === r) {
            t = false;
            break;
        }
    }
    if (t) {
        a = {
            context: r
        };
        e.push(a);
    }
    return a;
};
mr.createGradientStyleFor = function(r, e, t, a, n) {
    let i;
    const s = this.usePaths();
    const value = t.pstyle(`${e}-gradient-stop-colors`).value;
    const pfValue = t.pstyle(`${e}-gradient-stop-positions`).pfValue;
    if (a === "radial-gradient") {
        if (t.isEdge()) {
            const l = t.sourceEndpoint();
            const v = t.targetEndpoint();
            const f = t.midpoint();
            const c = Dt(l, f);
            const h = Dt(v, f);
            i = r.createRadialGradient(f.x, f.y, 0, f.x, f.y, Math.max(c, h));
        } else {
            const d = s ? {
                x: 0,
                y: 0
            } : t.position();
            const y = t.paddedWidth();
            const g = t.paddedHeight();
            i = r.createRadialGradient(d.x, d.y, 0, d.x, d.y, Math.max(y, g));
        }
    } else if (t.isEdge()) {
        const p = t.sourceEndpoint();
        const m = t.targetEndpoint();
        i = r.createLinearGradient(p.x, p.y, m.x, m.y);
    } else {
        const b = s ? {
            x: 0,
            y: 0
        } : t.position();
        const w = t.paddedWidth();
        const E = t.paddedHeight();
        const C = w / 2;
        const x = E / 2;
        const T = t.pstyle("background-gradient-direction").value;
        switch(T){
            case "to-bottom":
                i = r.createLinearGradient(b.x, b.y - x, b.x, b.y + x);
                break;
            case "to-top":
                i = r.createLinearGradient(b.x, b.y + x, b.x, b.y - x);
                break;
            case "to-left":
                i = r.createLinearGradient(b.x + C, b.y, b.x - C, b.y);
                break;
            case "to-right":
                i = r.createLinearGradient(b.x - C, b.y, b.x + C, b.y);
                break;
            case "to-bottom-right":
            case "to-right-bottom":
                i = r.createLinearGradient(b.x - C, b.y - x, b.x + C, b.y + x);
                break;
            case "to-top-right":
            case "to-right-top":
                i = r.createLinearGradient(b.x - C, b.y + x, b.x + C, b.y - x);
                break;
            case "to-bottom-left":
            case "to-left-bottom":
                i = r.createLinearGradient(b.x + C, b.y - x, b.x - C, b.y + x);
                break;
            case "to-top-left":
            case "to-left-top":
                i = r.createLinearGradient(b.x + C, b.y + x, b.x - C, b.y - x);
                break;
        }
    }
    if (!i) {
        return null;
    }
    const k = pfValue.length === value.length;
    for(let D = value.length, B = 0; B < D; B++){
        i.addColorStop(k ? pfValue[B] : B / (D - 1), `rgba(${value[B][0]},${value[B][1]},${value[B][2]},${n})`);
    }
    return i;
};
mr.gradientFillStyle = function(r, e, t, a) {
    const n = this.createGradientStyleFor(r, "background", e, t, a);
    if (!n) {
        return null;
    }
    r.fillStyle = n;
};
mr.colorFillStyle = (r, e, t, a, n)=>{
    r.fillStyle = `rgba(${e},${t},${a},${n})`;
};
mr.eleFillStyle = function(r, e, t) {
    const value = e.pstyle("background-fill").value;
    if (value === "linear-gradient" || value === "radial-gradient") {
        this.gradientFillStyle(r, e, value, t);
    } else {
        const n = e.pstyle("background-color").value;
        this.colorFillStyle(r, n[0], n[1], n[2], t);
    }
};
mr.gradientStrokeStyle = function(r, e, t, a) {
    const n = this.createGradientStyleFor(r, "line", e, t, a);
    if (!n) {
        return null;
    }
    r.strokeStyle = n;
};
mr.colorStrokeStyle = (r, e, t, a, n)=>{
    r.strokeStyle = `rgba(${e},${t},${a},${n})`;
};
mr.eleStrokeStyle = function(r, e, t) {
    const value = e.pstyle("line-fill").value;
    if (value === "linear-gradient" || value === "radial-gradient") {
        this.gradientStrokeStyle(r, e, value, t);
    } else {
        const n = e.pstyle("line-color").value;
        this.colorStrokeStyle(r, n[0], n[1], n[2], t);
    }
};
mr.matchCanvasSize = function(r) {
    const e = this;
    const e_data = e.data;
    const a = e.findContainerClientCoords();
    const n = a[2];
    const i = a[3];
    let s = e.getPixelRatio();
    const e_motionBlurPxRatio = e.motionBlurPxRatio;
    if (r === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE] || r === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG]) {
        s = e_motionBlurPxRatio;
    }
    const u = n * s;
    const l = i * s;
    let v;
    if (!(u === e.canvasWidth && l === e.canvasHeight)) {
        e.fontCaches = null;
        const f = e_data.canvasContainer;
        f.style.width = `${n}px`;
        f.style.height = `${i}px`;
        for(var c = 0; c < e.CANVAS_LAYERS; c++){
            v = e_data.canvases[c];
            v.width = u;
            v.height = l;
            v.style.width = `${n}px`;
            v.style.height = `${i}px`;
        }
        for(var c = 0; c < e.BUFFER_COUNT; c++){
            v = e_data.bufferCanvases[c];
            v.width = u;
            v.height = l;
            v.style.width = `${n}px`;
            v.style.height = `${i}px`;
        }
        e.textureMult = 1;
        if (s <= 1) {
            v = e_data.bufferCanvases[e.TEXTURE_BUFFER];
            e.textureMult = 2;
            v.width = u * e.textureMult;
            v.height = l * e.textureMult;
        }
        e.canvasWidth = u;
        e.canvasHeight = l;
        e.pixelRatio = s;
    }
};
mr.renderTo = function(forcedContext, forcedZoom, forcedPan, forcedPxRatio) {
    this.render({
        forcedContext,
        forcedZoom,
        forcedPan,
        drawAllLayers: true,
        forcedPxRatio
    });
};
mr.clearCanvas = function() {
    const r = this;
    const r_data = r.data;
    function t(a) {
        a.clearRect(0, 0, r.canvasWidth, r.canvasHeight);
    }
    t(r_data.contexts[r.NODE]);
    t(r_data.contexts[r.DRAG]);
};
mr.render = function(r) {
    const e = this;
    r = r || Yc;
    const t = e.cy;
    const { forcedContext, drawAllLayers, drawOnlyNodeLayer, forcedZoom, forcedPan } = r;
    const u = r.forcedPxRatio === undefined ? this.getPixelRatio() : r.forcedPxRatio;
    const e_data = e.data;
    const l_canvasNeedsRedraw = e_data.canvasNeedsRedraw;
    const f = e.textureOnViewport && !forcedContext && (e.pinching || e.hoverData.dragging || e.swipePanning || e.data.wheelZooming);
    let c = r.motionBlur !== undefined ? r.motionBlur : e.motionBlur;
    const e_motionBlurPxRatio = e.motionBlurPxRatio;
    const d = t.hasCompoundNodes();
    const draggingEles = e.hoverData.draggingEles;
    const g = !!(e.hoverData.selecting || e.touchData.selecting);
    c = c && !forcedContext && e.motionBlurEnabled && !g;
    let p = c;
    if (!forcedContext) {
        if (e.prevPxRatio !== u) {
            e.invalidateContainerClientCoordsCache();
            e.matchCanvasSize(e.container);
            e.redrawHint("eles", true);
            e.redrawHint("drag", true);
        }
        e.prevPxRatio = u;
    }
    if (!forcedContext && e.motionBlurTimeout) {
        clearTimeout(e.motionBlurTimeout);
    }
    c && (e.mbFrames == null && (e.mbFrames = 0), e.mbFrames++, e.mbFrames < 3 && (p = false), e.mbFrames > e.minMbLowQualFrames && (e.motionBlurPxRatio = e.mbPxRBlurry));
    if (e.clearingMotionBlur) {
        e.motionBlurPxRatio = 1;
    }
    if (e.textureDrawLastFrame && !f) {
        l_canvasNeedsRedraw[e.NODE] = true;
        l_canvasNeedsRedraw[e.SELECT_BOX] = true;
    }
    const m = t.style();
    var b = t.zoom();
    let w = forcedZoom !== undefined ? forcedZoom : b;
    const E = t.pan();
    let C = {
        x: E.x,
        y: E.y
    };
    var x = {
        zoom: b,
        pan: {
            x: E.x,
            y: E.y
        }
    };
    const e_prevViewport = e.prevViewport;
    const k = e_prevViewport === undefined || x.zoom !== e_prevViewport.zoom || x.pan.x !== e_prevViewport.pan.x || x.pan.y !== e_prevViewport.pan.y;
    if (!k && !(draggingEles && !d)) {
        e.motionBlurPxRatio = 1;
    }
    if (forcedPan) {
        C = forcedPan;
    }
    w *= u;
    C.x *= u;
    C.y *= u;
    const D = e.getCachedZSortedEles();
    function B(Q, V, H, W, Y) {
        const Q_globalCompositeOperation = Q.globalCompositeOperation;
        Q.globalCompositeOperation = "destination-out";
        e.colorFillStyle(Q, 255, 255, 255, e.motionBlurTransparency);
        Q.fillRect(V, H, W, Y);
        Q.globalCompositeOperation = Q_globalCompositeOperation;
    }
    function P(Q, V) {
        let H;
        let W;
        let Y;
        let te;
        if (!e.clearingMotionBlur && (Q === e_data.bufferContexts[e.MOTIONBLUR_BUFFER_NODE] || Q === e_data.bufferContexts[e.MOTIONBLUR_BUFFER_DRAG])) {
            H = {
                x: E.x * e_motionBlurPxRatio,
                y: E.y * e_motionBlurPxRatio
            };
            W = b * e_motionBlurPxRatio;
            Y = e.canvasWidth * e_motionBlurPxRatio;
            te = e.canvasHeight * e_motionBlurPxRatio;
        } else {
            H = C;
            W = w;
            Y = e.canvasWidth;
            te = e.canvasHeight;
        }
        Q.setTransform(1, 0, 0, 1, 0, 0);
        if (V === "motionBlur") {
            B(Q, 0, 0, Y, te);
        } else if (!forcedContext && (V === undefined || V)) {
            Q.clearRect(0, 0, Y, te);
        }
        if (!drawAllLayers) {
            Q.translate(H.x, H.y);
            Q.scale(W, W);
        }
        if (forcedPan) {
            Q.translate(forcedPan.x, forcedPan.y);
        }
        if (forcedZoom) {
            Q.scale(forcedZoom, forcedZoom);
        }
    }
    if (!f) {
        e.textureDrawLastFrame = false;
    }
    if (f) {
        e.textureDrawLastFrame = true;
        if (!e.textureCache) {
            e.textureCache = {};
            e.textureCache.bb = t.mutableElements().boundingBox();
            e.textureCache.texture = e.data.bufferCanvases[e.TEXTURE_BUFFER];
            const forcedContext_1 = e.data.bufferContexts[e.TEXTURE_BUFFER];
            forcedContext_1.setTransform(1, 0, 0, 1, 0, 0);
            forcedContext_1.clearRect(0, 0, e.canvasWidth * e.textureMult, e.canvasHeight * e.textureMult);
            e.render({
                forcedContext: forcedContext_1,
                drawOnlyNodeLayer: true,
                forcedPxRatio: u * e.textureMult
            });
            var x = e.textureCache.viewport = {
                zoom: t.zoom(),
                pan: t.pan(),
                width: e.canvasWidth,
                height: e.canvasHeight
            };
            x.mpan = {
                x: (0 - x.pan.x) / x.zoom,
                y: (0 - x.pan.y) / x.zoom
            };
        }
        l_canvasNeedsRedraw[e.DRAG] = false;
        l_canvasNeedsRedraw[e.NODE] = false;
        var R = e_data.contexts[e.NODE];
        const L = e.textureCache.texture;
        var x = e.textureCache.viewport;
        R.setTransform(1, 0, 0, 1, 0, 0);
        if (c) {
            B(R, 0, 0, x.width, x.height);
        } else {
            R.clearRect(0, 0, x.width, x.height);
        }
        const I = m.core("outside-texture-bg-color").value;
        const M = m.core("outside-texture-bg-opacity").value;
        e.colorFillStyle(R, I[0], I[1], I[2], M);
        R.fillRect(0, 0, x.width, x.height);
        var b = t.zoom();
        P(R, false);
        R.clearRect(x.mpan.x, x.mpan.y, x.width / x.zoom / u, x.height / x.zoom / u);
        R.drawImage(L, x.mpan.x, x.mpan.y, x.width / x.zoom / u, x.height / x.zoom / u);
    } else {
        if (e.textureOnViewport && !forcedContext) {
            e.textureCache = null;
        }
    }
    const O = t.extent();
    const q = e.pinching || e.hoverData.dragging || e.swipePanning || e.data.wheelZooming || e.hoverData.draggingEles || e.cy.animated();
    const _ = e.hideEdgesOnViewport && q;
    const N = [];
    N[e.NODE] = !l_canvasNeedsRedraw[e.NODE] && c && !e.clearedForMotionBlur[e.NODE] || e.clearingMotionBlur;
    if (N[e.NODE]) {
        e.clearedForMotionBlur[e.NODE] = true;
    }
    N[e.DRAG] = !l_canvasNeedsRedraw[e.DRAG] && c && !e.clearedForMotionBlur[e.DRAG] || e.clearingMotionBlur;
    if (N[e.DRAG]) {
        e.clearedForMotionBlur[e.DRAG] = true;
    }
    if (l_canvasNeedsRedraw[e.NODE] || drawAllLayers || drawOnlyNodeLayer || N[e.NODE]) {
        var F = c && !N[e.NODE] && e_motionBlurPxRatio !== 1;
        var R = forcedContext || (F ? e.data.bufferContexts[e.MOTIONBLUR_BUFFER_NODE] : e_data.contexts[e.NODE]);
        const U = c && !F ? "motionBlur" : undefined;
        P(R, U);
        if (_) {
            e.drawCachedNodes(R, D.nondrag, u, O);
        } else {
            e.drawLayeredElements(R, D.nondrag, u, O);
        }
        if (e.debug) {
            e.drawDebugPoints(R, D.nondrag);
        }
        if (!drawAllLayers && !c) {
            l_canvasNeedsRedraw[e.NODE] = false;
        }
    }
    if (!drawOnlyNodeLayer && (l_canvasNeedsRedraw[e.DRAG] || drawAllLayers || N[e.DRAG])) {
        var F = c && !N[e.DRAG] && e_motionBlurPxRatio !== 1;
        var R = forcedContext || (F ? e.data.bufferContexts[e.MOTIONBLUR_BUFFER_DRAG] : e_data.contexts[e.DRAG]);
        P(R, c && !F ? "motionBlur" : undefined);
        if (_) {
            e.drawCachedNodes(R, D.drag, u, O);
        } else {
            e.drawCachedElements(R, D.drag, u, O);
        }
        if (e.debug) {
            e.drawDebugPoints(R, D.drag);
        }
        if (!drawAllLayers && !c) {
            l_canvasNeedsRedraw[e.DRAG] = false;
        }
    }
    this.drawSelectionRectangle(r, P);
    if (c && e_motionBlurPxRatio !== 1) {
        const J = e_data.contexts[e.NODE];
        const Z = e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE];
        const j = e_data.contexts[e.DRAG];
        const re = e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG];
        const ne = (V, H, W)=>{
            V.setTransform(1, 0, 0, 1, 0, 0);
            if (W || !p) {
                V.clearRect(0, 0, e.canvasWidth, e.canvasHeight);
            } else {
                B(V, 0, 0, e.canvasWidth, e.canvasHeight);
            }
            const Y = e_motionBlurPxRatio;
            V.drawImage(H, 0, 0, e.canvasWidth * Y, e.canvasHeight * Y, 0, 0, e.canvasWidth, e.canvasHeight);
        };
        if (l_canvasNeedsRedraw[e.NODE] || N[e.NODE]) {
            ne(J, Z, N[e.NODE]);
            l_canvasNeedsRedraw[e.NODE] = false;
        }
        if (l_canvasNeedsRedraw[e.DRAG] || N[e.DRAG]) {
            ne(j, re, N[e.DRAG]);
            l_canvasNeedsRedraw[e.DRAG] = false;
        }
    }
    e.prevViewport = x;
    if (e.clearingMotionBlur) {
        e.clearingMotionBlur = false;
        e.motionBlurCleared = true;
        e.motionBlur = true;
    }
    if (c) {
        e.motionBlurTimeout = setTimeout(()=>{
            e.motionBlurTimeout = null;
            e.clearedForMotionBlur[e.NODE] = false;
            e.clearedForMotionBlur[e.DRAG] = false;
            e.motionBlur = false;
            e.clearingMotionBlur = !f;
            e.mbFrames = 0;
            l_canvasNeedsRedraw[e.NODE] = true;
            l_canvasNeedsRedraw[e.DRAG] = true;
            e.redraw();
        }, Gy);
    }
    if (!forcedContext) {
        t.emit("render");
    }
};
let ca;
mr.drawSelectionRectangle = function(r, e) {
    const t = this;
    const { cy, data } = t;
    const i = cy.style();
    const { drawOnlyNodeLayer, drawAllLayers } = r;
    const data_canvasNeedsRedraw = data.canvasNeedsRedraw;
    const r_forcedContext = r.forcedContext;
    if (t.showFps || !drawOnlyNodeLayer && data_canvasNeedsRedraw[t.SELECT_BOX] && !drawAllLayers) {
        const v = r_forcedContext || data.contexts[t.SELECT_BOX];
        e(v);
        if (t.selection[4] == 1 && (t.hoverData.selecting || t.touchData.selecting)) {
            var f = t.cy.zoom();
            const c = i.core("selection-box-border-width").value / f;
            v.lineWidth = c;
            v.fillStyle = `rgba(${i.core("selection-box-color").value[0]},${i.core("selection-box-color").value[1]},${i.core("selection-box-color").value[2]},${i.core("selection-box-opacity").value})`;
            v.fillRect(t.selection[0], t.selection[1], t.selection[2] - t.selection[0], t.selection[3] - t.selection[1]);
            if (c > 0) {
                v.strokeStyle = `rgba(${i.core("selection-box-border-color").value[0]},${i.core("selection-box-border-color").value[1]},${i.core("selection-box-border-color").value[2]},${i.core("selection-box-opacity").value})`;
                v.strokeRect(t.selection[0], t.selection[1], t.selection[2] - t.selection[0], t.selection[3] - t.selection[1]);
            }
        }
        if (data.bgActivePosistion && !t.hoverData.selecting) {
            var f = t.cy.zoom();
            const h = data.bgActivePosistion;
            v.fillStyle = `rgba(${i.core("active-bg-color").value[0]},${i.core("active-bg-color").value[1]},${i.core("active-bg-color").value[2]},${i.core("active-bg-opacity").value})`;
            v.beginPath();
            v.arc(h.x, h.y, i.core("active-bg-size").pfValue / f, 0, 2 * Math.PI);
            v.fill();
        }
        let d = t.lastRedrawTime;
        if (t.showFps && d) {
            d = Math.round(d);
            const y = Math.round(1000 / d);
            const g = `1 frame = ${d} ms = ${y} fps`;
            v.setTransform(1, 0, 0, 1, 0, 0);
            v.fillStyle = "rgba(255, 0, 0, 0.75)";
            v.strokeStyle = "rgba(255, 0, 0, 0.75)";
            v.font = "30px Arial";
            if (!ca) {
                const p = v.measureText(g);
                ca = p.actualBoundingBoxAscent;
            }
            v.fillText(g, 0, ca);
            const m = 60;
            v.strokeRect(0, ca + 10, 250, 20);
            v.fillRect(0, ca + 10, 250 * Math.min(y / m, 1), 20);
        }
        if (!drawAllLayers) {
            data_canvasNeedsRedraw[t.SELECT_BOX] = false;
        }
    }
};
function _l(r, e, t) {
    const a = r.createShader(e);
    r.shaderSource(a, t);
    r.compileShader(a);
    if (!r.getShaderParameter(a, r.COMPILE_STATUS)) {
        throw new Error(r.getShaderInfoLog(a));
    }
    return a;
}
function Hy(r, e, t) {
    const a = _l(r, r.VERTEX_SHADER, e);
    const n = _l(r, r.FRAGMENT_SHADER, t);
    const i = r.createProgram();
    r.attachShader(i, a);
    r.attachShader(i, n);
    r.linkProgram(i);
    if (!r.getProgramParameter(i, r.LINK_STATUS)) {
        throw new Error("Could not initialize shaders");
    }
    return i;
}
function Wy(r, e, t = e) {
    const a = r.makeOffscreenCanvas(e, t);
    const n = a.context = a.getContext("2d");
    a.clear = ()=>n.clearRect(0, 0, a.width, a.height);
    a.clear();
    return a;
}
function yo(r) {
    const r_pixelRatio = r.pixelRatio;
    const t = r.cy.zoom();
    const a = r.cy.pan();
    return {
        zoom: t * r_pixelRatio,
        pan: {
            x: a.x * r_pixelRatio,
            y: a.y * r_pixelRatio
        }
    };
}
function $y(r) {
    const r_pixelRatio = r.pixelRatio;
    const t = r.cy.zoom();
    return t * r_pixelRatio;
}
function Uy(r, pan, zoom, a, n) {
    const i = a * zoom + pan.x;
    let s = n * zoom + pan.y;
    s = Math.round(r.canvasHeight - s);
    return [
        i,
        s
    ];
}
function isSimple(r, e) {
    if (e.picking) {
        return true;
    }
    if (r.pstyle("background-fill").value !== "solid" || r.pstyle("background-image").strValue !== "none") {
        return false;
    }
    if (r.pstyle("border-width").value === 0 || r.pstyle("border-opacity").value === 0) {
        return true;
    }
    return r.pstyle("border-style").value === "solid";
}
function Xy(r, e) {
    if (r.length !== e.length) {
        return false;
    }
    for(let t = 0; t < r.length; t++){
        if (r[t] !== e[t]) {
            return false;
        }
    }
    return true;
}
function wt(r, e, t) {
    const a = r[0] / 255;
    const n = r[1] / 255;
    const i = r[2] / 255;
    const s = e;
    const o = t || new Array(4);
    o[0] = a * s;
    o[1] = n * s;
    o[2] = i * s;
    o[3] = s;
    return o;
}
function Ft(r, e) {
    const t = e || new Array(4);
    t[0] = (r >> 0 & 255) / 255;
    t[1] = (r >> 8 & 255) / 255;
    t[2] = (r >> 16 & 255) / 255;
    t[3] = (r >> 24 & 255) / 255;
    return t;
}
function Yy(r) {
    return r[0] + (r[1] << 8) + (r[2] << 16) + (r[3] << 24);
}
function Zy(r, e) {
    const t = r.createTexture();
    t.buffer = (a)=>{
        r.bindTexture(r.TEXTURE_2D, t);
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE);
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE);
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR);
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_NEAREST);
        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, a);
        r.generateMipmap(r.TEXTURE_2D);
        r.bindTexture(r.TEXTURE_2D, null);
    };
    t.deleteTexture = ()=>{
        r.deleteTexture(t);
    };
    return t;
}
function Pf(r, e) {
    switch(e){
        case "float":
            return [
                1,
                r.FLOAT,
                4
            ];
        case "vec2":
            return [
                2,
                r.FLOAT,
                4
            ];
        case "vec3":
            return [
                3,
                r.FLOAT,
                4
            ];
        case "vec4":
            return [
                4,
                r.FLOAT,
                4
            ];
        case "int":
            return [
                1,
                r.INT,
                4
            ];
        case "ivec2":
            return [
                2,
                r.INT,
                4
            ];
    }
}
function Af(r, e, t) {
    switch(e){
        case r.FLOAT:
            return new Float32Array(t);
        case r.INT:
            return new Int32Array(t);
    }
}
function Qy(r, e, t, a, n, i) {
    switch(e){
        case r.FLOAT:
            return new Float32Array(t.buffer, i * a, n);
        case r.INT:
            return new Int32Array(t.buffer, i * a, n);
    }
}
function Jy(r, e, aPosition, a) {
    const n = Pf(r, e);
    const [s, o] = n;
    const u = Af(r, o, a);
    const l = r.createBuffer();
    r.bindBuffer(r.ARRAY_BUFFER, l);
    r.bufferData(r.ARRAY_BUFFER, u, r.STATIC_DRAW);
    if (o === r.FLOAT) {
        r.vertexAttribPointer(aPosition, s, o, false, 0, 0);
    } else if (o === r.INT) {
        r.vertexAttribIPointer(aPosition, s, o, 0, 0);
    }
    r.enableVertexAttribArray(aPosition);
    r.bindBuffer(r.ARRAY_BUFFER, null);
    return l;
}
function Fr(r, maxInstances, t, a) {
    const n = Pf(r, t);
    const [s, o, u] = n;
    const l = Af(r, o, maxInstances * s);
    const v = s * u;
    const f = r.createBuffer();
    r.bindBuffer(r.ARRAY_BUFFER, f);
    r.bufferData(r.ARRAY_BUFFER, maxInstances * v, r.DYNAMIC_DRAW);
    r.enableVertexAttribArray(a);
    if (o === r.FLOAT) {
        r.vertexAttribPointer(a, s, o, false, v, 0);
    } else if (o === r.INT) {
        r.vertexAttribIPointer(a, s, o, v, 0);
    }
    r.vertexAttribDivisor(a, 1);
    r.bindBuffer(r.ARRAY_BUFFER, null);
    const c = new Array(maxInstances);
    for(let h = 0; h < maxInstances; h++){
        c[h] = Qy(r, o, l, v, s, h);
    }
    f.dataArray = l;
    f.stride = v;
    f.size = s;
    f.getView = (d)=>c[d];
    f.setPoint = (d, y, g)=>{
        const p = c[d];
        p[0] = y;
        p[1] = g;
    };
    f.bufferSubData = (d)=>{
        r.bindBuffer(r.ARRAY_BUFFER, f);
        if (d) {
            r.bufferSubData(r.ARRAY_BUFFER, 0, l, 0, d * s);
        } else {
            r.bufferSubData(r.ARRAY_BUFFER, 0, l);
        }
    };
    return f;
}
function jy(r, maxInstances, aTransform) {
    const a = 9;
    const n = new Float32Array(maxInstances * a);
    const i = new Array(maxInstances);
    for(let s = 0; s < maxInstances; s++){
        const o = s * a * 4;
        i[s] = new Float32Array(n.buffer, o, a);
    }
    const u = r.createBuffer();
    r.bindBuffer(r.ARRAY_BUFFER, u);
    r.bufferData(r.ARRAY_BUFFER, n.byteLength, r.DYNAMIC_DRAW);
    for(let l = 0; l < 3; l++){
        const v = aTransform + l;
        r.enableVertexAttribArray(v);
        r.vertexAttribPointer(v, 3, r.FLOAT, false, 36, l * 12);
        r.vertexAttribDivisor(v, 1);
    }
    r.bindBuffer(r.ARRAY_BUFFER, null);
    u.getMatrixView = (f)=>i[f];
    u.setData = (f, c)=>{
        i[c].set(f, 0);
    };
    u.bufferSubData = ()=>{
        r.bindBuffer(r.ARRAY_BUFFER, u);
        r.bufferSubData(r.ARRAY_BUFFER, 0, n);
    };
    return u;
}
function em(r) {
    const e = r.createFramebuffer();
    r.bindFramebuffer(r.FRAMEBUFFER, e);
    const t = r.createTexture();
    r.bindTexture(r.TEXTURE_2D, t);
    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR);
    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE);
    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE);
    r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, t, 0);
    r.bindFramebuffer(r.FRAMEBUFFER, null);
    e.setFramebufferAttachmentSizes = (a, n)=>{
        r.bindTexture(r.TEXTURE_2D, t);
        r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, a, n, 0, r.RGBA, r.UNSIGNED_BYTE, null);
    };
    return e;
}
const Gl = typeof Float32Array !== "undefined" ? Float32Array : Array;
if (!Math.hypot) {
    Math.hypot = function() {
        let r = 0;
        for(let e = arguments.length; e--;){
            r += arguments[e] * arguments[e];
        }
        return Math.sqrt(r);
    };
}
function ws() {
    const r = new Gl(9);
    if (Gl != Float32Array) {
        r[1] = 0;
        r[2] = 0;
        r[3] = 0;
        r[5] = 0;
        r[6] = 0;
        r[7] = 0;
    }
    r[0] = 1;
    r[4] = 1;
    r[8] = 1;
    return r;
}
function Hl(r) {
    r[0] = 1;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 1;
    r[5] = 0;
    r[6] = 0;
    r[7] = 0;
    r[8] = 1;
    return r;
}
function rm(r, [a, n, i, s, o, u, l, v, f], t) {
    const c = t[0];
    const h = t[1];
    const d = t[2];
    const y = t[3];
    const g = t[4];
    const p = t[5];
    const m = t[6];
    const b = t[7];
    const w = t[8];
    r[0] = c * a + h * s + d * l;
    r[1] = c * n + h * o + d * v;
    r[2] = c * i + h * u + d * f;
    r[3] = y * a + g * s + p * l;
    r[4] = y * n + g * o + p * v;
    r[5] = y * i + g * u + p * f;
    r[6] = m * a + b * s + w * l;
    r[7] = m * n + b * o + w * v;
    r[8] = m * i + b * u + w * f;
    return r;
}
function gn(r, [a, n, i, s, o, u, l, v, f], t) {
    const c = t[0];
    const h = t[1];
    r[0] = a;
    r[1] = n;
    r[2] = i;
    r[3] = s;
    r[4] = o;
    r[5] = u;
    r[6] = c * a + h * s + l;
    r[7] = c * n + h * o + v;
    r[8] = c * i + h * u + f;
    return r;
}
function Wl(r, [a, n, i, s, o, u, l, v, f], t) {
    const c = Math.sin(t);
    const h = Math.cos(t);
    r[0] = h * a + c * s;
    r[1] = h * n + c * o;
    r[2] = h * i + c * u;
    r[3] = h * s - c * a;
    r[4] = h * o - c * n;
    r[5] = h * u - c * i;
    r[6] = l;
    r[7] = v;
    r[8] = f;
    return r;
}
function Gs(r, e, [a, n]) {
    r[0] = a * e[0];
    r[1] = a * e[1];
    r[2] = a * e[2];
    r[3] = n * e[3];
    r[4] = n * e[4];
    r[5] = n * e[5];
    r[6] = e[6];
    r[7] = e[7];
    r[8] = e[8];
    return r;
}
function tm(r, canvasWidth, canvasHeight) {
    r[0] = 2 / canvasWidth;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = -2 / canvasHeight;
    r[5] = 0;
    r[6] = -1;
    r[7] = 1;
    r[8] = 1;
    return r;
}
class am {
    constructor(e, t, a, n){
        this.debugID = Math.floor(Math.random() * 10000);
        this.r = e;
        this.texSize = t;
        this.texRows = a;
        this.texHeight = Math.floor(t / a);
        this.enableWrapping = true;
        this.locked = false;
        this.texture = null;
        this.needsBuffer = true;
        this.freePointer = {
            x: 0,
            row: 0
        };
        this.keyToLocation = new Map;
        this.canvas = n(e, t, t);
        this.scratch = n(e, t, this.texHeight, "scratch");
    }
    lock() {
        this.locked = true;
    }
    getKeys() {
        return new Set(this.keyToLocation.keys());
    }
    getScale({ w, h }) {
        const texHeight = this.texHeight;
        const texSize = this.texSize;
        let o = texHeight / h;
        let texW = w * o;
        let texH = h * o;
        if (texW > texSize) {
            o = texSize / w;
            texW = w * o;
            texH = h * o;
        }
        return {
            scale: o,
            texW,
            texH
        };
    }
    draw(t, a, n) {
        const i = this;
        if (this.locked) {
            throw new Error("can't draw, atlas is locked");
        }
        const texSize = this.texSize;
        const texRows = this.texRows;
        const texHeight = this.texHeight;
        const l = this.getScale(a);
        const { scale, texW, texH } = l;
        const h = (b, w)=>{
            if (n && w) {
                const E = w.context;
                const { x: x_1, row } = b;
                const T = x_1;
                const k = texHeight * row;
                E.save();
                E.translate(T, k);
                E.scale(scale, scale);
                n(E, a);
                E.restore();
            }
        };
        const d = [
            null,
            null
        ];
        const y = ()=>{
            h(i.freePointer, i.canvas);
            d[0] = {
                x: i.freePointer.x,
                y: i.freePointer.row * texHeight,
                w: texW,
                h: texH
            };
            d[1] = {
                x: i.freePointer.x + texW,
                y: i.freePointer.row * texHeight,
                w: 0,
                h: texH
            };
            i.freePointer.x += texW;
            if (i.freePointer.x == texSize) {
                i.freePointer.x = 0;
                i.freePointer.row++;
            }
        };
        const g = ()=>{
            const { scratch, canvas } = i;
            scratch.clear();
            h({
                x: 0,
                row: 0
            }, scratch);
            const E = texSize - i.freePointer.x;
            const C = texW - E;
            const x = texHeight;
            {
                const T = i.freePointer.x;
                const k = i.freePointer.row * texHeight;
                const D = E;
                canvas.context.drawImage(scratch, 0, 0, D, x, T, k, D, x);
                d[0] = {
                    x: T,
                    y: k,
                    w: D,
                    h: texH
                };
            }
            {
                const B = E;
                const P = (i.freePointer.row + 1) * texHeight;
                const A = C;
                if (canvas) {
                    canvas.context.drawImage(scratch, B, 0, A, x, 0, P, A, x);
                }
                d[1] = {
                    x: 0,
                    y: P,
                    w: A,
                    h: texH
                };
            }
            i.freePointer.x = C;
            i.freePointer.row++;
        };
        const p = ()=>{
            i.freePointer.x = 0;
            i.freePointer.row++;
        };
        if (this.freePointer.x + texW <= texSize) {
            y();
        } else {
            if (this.freePointer.row >= texRows - 1) {
                return false;
            }
            if (this.freePointer.x === texSize) {
                p();
                y();
            } else if (this.enableWrapping) {
                g();
            } else {
                p();
                y();
            }
        }
        this.keyToLocation.set(t, d);
        this.needsBuffer = true;
        return d;
    }
    getOffsets(t) {
        return this.keyToLocation.get(t);
    }
    isEmpty() {
        return this.freePointer.x === 0 && this.freePointer.row === 0;
    }
    canFit(t) {
        if (this.locked) {
            return false;
        }
        const texSize = this.texSize;
        const texRows = this.texRows;
        const i = this.getScale(t);
        const i_texW = i.texW;
        if (this.freePointer.x + i_texW > texSize) {
            return this.freePointer.row < texRows - 1;
        }
        return true;
    }
    bufferIfNeeded(t) {
        if (!this.texture) {
            this.texture = Zy(t, this.debugID);
        }
        if (this.needsBuffer) {
            this.texture.buffer(this.canvas);
            this.needsBuffer = false;
            if (this.locked) {
                this.canvas = null;
                this.scratch = null;
            }
        }
    }
    dispose() {
        if (this.texture) {
            this.texture.deleteTexture();
            this.texture = null;
        }
        this.canvas = null;
        this.scratch = null;
        this.locked = true;
    }
}
class nm {
    constructor(e, t, a, n){
        this.r = e;
        this.texSize = t;
        this.texRows = a;
        this.createTextureCanvas = n;
        this.atlases = [];
        this.styleKeyToAtlas = new Map;
        this.markedKeys = new Set;
    }
    getKeys() {
        return new Set(this.styleKeyToAtlas.keys());
    }
    _createAtlas() {
        const t = this.r;
        const texSize = this.texSize;
        const texRows = this.texRows;
        const createTextureCanvas = this.createTextureCanvas;
        return new am(t, texSize, texRows, createTextureCanvas);
    }
    _getScratchCanvas() {
        if (!this.scratch) {
            const t = this.r;
            const a = this.texSize;
            const n = this.texRows;
            const i = this.createTextureCanvas;
            const s = Math.floor(a / n);
            this.scratch = i(t, a, s, "scratch");
        }
        return this.scratch;
    }
    draw(t, a, n) {
        let i = this.styleKeyToAtlas.get(t);
        if (!i) {
            i = this.atlases[this.atlases.length - 1];
            if (!i || !i.canFit(a)) {
                if (i) {
                    i.lock();
                }
                i = this._createAtlas();
                this.atlases.push(i);
            }
            i.draw(t, a, n);
            this.styleKeyToAtlas.set(t, i);
        }
        return i;
    }
    getAtlas(t) {
        return this.styleKeyToAtlas.get(t);
    }
    hasAtlas(t) {
        return this.styleKeyToAtlas.has(t);
    }
    markKeyForGC(t) {
        this.markedKeys.add(t);
    }
    gc() {
        const t = this;
        const markedKeys = this.markedKeys;
        if (markedKeys.size === 0) {
            console.log("nothing to garbage collect");
            return;
        }
        const n = [];
        const i = new Map;
        let s = null;
        const o = Cr(this.atlases);
        let u;
        try {
            const l = ()=>{
                const u_value = u.value;
                const c = u_value.getKeys();
                const h = im(markedKeys, c);
                if (h.size === 0) {
                    n.push(u_value);
                    c.forEach((E)=>i.set(E, u_value));
                    return 1;
                }
                if (!s) {
                    s = t._createAtlas();
                    n.push(s);
                }
                for (const g of c){
                    if (!h.has(g)) {
                        const p = u_value.getOffsets(g);
                        const [b, w] = p;
                        if (!s.canFit({
                            w: b.w + w.w,
                            h: b.h
                        })) {
                            s.lock();
                            s = t._createAtlas();
                            n.push(s);
                        }
                        if (u_value.canvas) {
                            t._copyTextureToNewAtlas(g, u_value, s);
                            i.set(g, s);
                        }
                    }
                }
                u_value.dispose();
            };
            for(o.s(); !(u = o.n()).done;){
                l();
            }
        } catch (error) {
            o.e(error);
        } finally{
            o.f();
        }
        this.atlases = n;
        this.styleKeyToAtlas = i;
        this.markedKeys = new Set;
    }
    _copyTextureToNewAtlas(t, a, n) {
        const i = a.getOffsets(t);
        const [o, u] = i;
        if (u.w === 0) {
            n.draw(t, o, (c)=>{
                c.drawImage(a.canvas, o.x, o.y, o.w, o.h, 0, 0, o.w, o.h);
            });
        } else {
            const l = this._getScratchCanvas();
            l.clear();
            l.context.drawImage(a.canvas, o.x, o.y, o.w, o.h, 0, 0, o.w, o.h);
            l.context.drawImage(a.canvas, u.x, u.y, u.w, u.h, o.w, 0, u.w, u.h);
            const v = o.w + u.w;
            const f = o.h;
            n.draw(t, {
                w: v,
                h: f
            }, (c)=>{
                c.drawImage(l, 0, 0, v, f, 0, 0, v, f);
            });
        }
    }
    getCounts() {
        return {
            keyCount: this.styleKeyToAtlas.size,
            atlasCount: new Set(this.styleKeyToAtlas.values()).size
        };
    }
}
function im(markedKeys, e) {
    if (markedKeys.intersection) {
        return markedKeys.intersection(e);
    }
    return new Set([
        ...markedKeys
    ].filter((t)=>e.has(t)));
}
class sm {
    constructor(e, t){
        this.r = e;
        this.globalOptions = t;
        this.atlasSize = t.webglTexSize;
        this.maxAtlasesPerBatch = t.webglTexPerBatch;
        this.renderTypes = new Map;
        this.collections = new Map;
        this.typeAndIdToKey = new Map;
    }
    getAtlasSize() {
        return this.atlasSize;
    }
    addAtlasCollection(t, a) {
        const globalOptions = this.globalOptions;
        const { webglTexSize, createTextureCanvas } = globalOptions;
        const a_texRows = a.texRows;
        const u = this._cacheScratchCanvas(createTextureCanvas);
        const l = new nm(this.r, webglTexSize, a_texRows, u);
        this.collections.set(t, l);
    }
    addRenderType(t, a) {
        const a_collection = a.collection;
        if (!this.collections.has(a_collection)) {
            throw new Error(`invalid atlas collection name '${a_collection}'`);
        }
        const atlasCollection = this.collections.get(a_collection);
        const s = ye({
            type: t,
            atlasCollection
        }, a);
        this.renderTypes.set(t, s);
    }
    getRenderTypeOpts(t) {
        return this.renderTypes.get(t);
    }
    getAtlasCollection(t) {
        return this.collections.get(t);
    }
    _cacheScratchCanvas(t) {
        let a = -1;
        let n = -1;
        let i = null;
        return (s, o, u, l)=>{
            if (l) {
                if (!i || o != a || u != n) {
                    a = o;
                    n = u;
                    i = t(s, o, u);
                }
                return i;
            }
            return t(s, o, u);
        };
    }
    _key(t, a) {
        return `${t}-${a}`;
    }
    invalidate(t, n = {}) {
        const a = this;
        const n_forceRedraw = n.forceRedraw;
        const s = n_forceRedraw === undefined ? false : n_forceRedraw;
        const n_filterEle = n.filterEle;
        const u = n_filterEle === undefined ? ()=>true : n_filterEle;
        const n_filterType = n.filterType;
        const v = n_filterType === undefined ? ()=>true : n_filterType;
        let f = false;
        let c = false;
        for (var y of t){
            if (u(y)) {
                const g = Cr(this.renderTypes.values());
                var p;
                try {
                    const m = ()=>{
                        const p_value = p.value;
                        const w_type = p_value.type;
                        if (v(w_type)) {
                            const C = a.collections.get(p_value.collection);
                            const x = p_value.getKey(y);
                            const T = Array.isArray(x) ? x : [
                                x
                            ];
                            if (s) {
                                T.forEach((P)=>C.markKeyForGC(P));
                                c = true;
                            } else {
                                const k = p_value.getID ? p_value.getID(y) : y.id();
                                const D = a._key(w_type, k);
                                const B = a.typeAndIdToKey.get(D);
                                if (B !== undefined && !Xy(T, B)) {
                                    f = true;
                                    a.typeAndIdToKey.delete(D);
                                    B.forEach((P)=>C.markKeyForGC(P));
                                }
                            }
                        }
                    };
                    for(g.s(); !(p = g.n()).done;){
                        m();
                    }
                } catch (error) {
                    g.e(error);
                } finally{
                    g.f();
                }
            }
        }
        if (c) {
            this.gc();
            f = false;
        }
        return f;
    }
    gc() {
        for (const n of this.collections.values()){
            n.gc();
        }
    }
    getOrCreateAtlas(t, a, n, i) {
        const s = this.renderTypes.get(a);
        const o = this.collections.get(s.collection);
        let u = false;
        const l = o.draw(i, n, (c)=>{
            if (s.drawClipped) {
                c.save();
                c.beginPath();
                c.rect(0, 0, n.w, n.h);
                c.clip();
                s.drawElement(c, t, n, true, true);
                c.restore();
            } else {
                s.drawElement(c, t, n, true, true);
            }
            u = true;
        });
        if (u) {
            const v = s.getID ? s.getID(t) : t.id();
            const f = this._key(a, v);
            if (this.typeAndIdToKey.has(f)) {
                this.typeAndIdToKey.get(f).push(i);
            } else {
                this.typeAndIdToKey.set(f, [
                    i
                ]);
            }
        }
        return l;
    }
    getAtlasInfo(t, a) {
        const n = this;
        const i = this.renderTypes.get(a);
        const s = i.getKey(t);
        const o = Array.isArray(s) ? s : [
            s
        ];
        return o.map((u)=>{
            const l = i.getBoundingBox(t, u);
            const atlas = n.getOrCreateAtlas(t, a, l, u);
            const f = atlas.getOffsets(u);
            const [h, tex2] = f;
            return {
                atlas,
                tex: h,
                tex1: h,
                tex2,
                bb: l
            };
        });
    }
    getDebugInfo() {
        const t = [];
        for (const [s, o] of this.collections){
            const u = o.getCounts();
            const { keyCount, atlasCount } = u;
            t.push({
                type: s,
                keyCount,
                atlasCount
            });
        }
        return t;
    }
}
class om {
    constructor(e){
        this.globalOptions = e;
        this.atlasSize = e.webglTexSize;
        this.maxAtlasesPerBatch = e.webglTexPerBatch;
        this.batchAtlases = [];
    }
    getMaxAtlasesPerBatch() {
        return this.maxAtlasesPerBatch;
    }
    getAtlasSize() {
        return this.atlasSize;
    }
    getIndexArray() {
        return Array.from({
            length: this.maxAtlasesPerBatch
        }, (t, a)=>a);
    }
    startBatch() {
        this.batchAtlases = [];
    }
    getAtlasCount() {
        return this.batchAtlases.length;
    }
    getAtlases() {
        return this.batchAtlases;
    }
    canAddToCurrentBatch(t) {
        if (this.batchAtlases.length === this.maxAtlasesPerBatch) {
            return this.batchAtlases.includes(t);
        }
        return true;
    }
    getAtlasIndexForBatch(t) {
        let a = this.batchAtlases.indexOf(t);
        if (a < 0) {
            if (this.batchAtlases.length === this.maxAtlasesPerBatch) {
                throw new Error("cannot add more atlases to batch");
            }
            this.batchAtlases.push(t);
            a = this.batchAtlases.length - 1;
        }
        return a;
    }
}
const um = `
  float circleSD(vec2 p, float r) {
    return distance(vec2(0), p) - r; // signed distance
  }
`;
const lm = `
  float rectangleSD(vec2 p, vec2 b) {
    vec2 d = abs(p)-b;
    return distance(vec2(0),max(d,0.0)) + min(max(d.x,d.y),0.0);
  }
`;
const vm = `
  float roundRectangleSD(vec2 p, vec2 b, vec4 cr) {
    cr.xy = (p.x > 0.0) ? cr.xy : cr.zw;
    cr.x  = (p.y > 0.0) ? cr.x  : cr.y;
    vec2 q = abs(p) - b + cr.x;
    return min(max(q.x, q.y), 0.0) + distance(vec2(0), max(q, 0.0)) - cr.x;
  }
`;
const fm = `
  float ellipseSD(vec2 p, vec2 ab) {
    p = abs( p ); // symmetry

    // find root with Newton solver
    vec2 q = ab*(p-ab);
    float w = (q.x<q.y)? 1.570796327 : 0.0;
    for( int i=0; i<5; i++ ) {
      vec2 cs = vec2(cos(w),sin(w));
      vec2 u = ab*vec2( cs.x,cs.y);
      vec2 v = ab*vec2(-cs.y,cs.x);
      w = w + dot(p-u,v)/(dot(p-u,u)+dot(v,v));
    }
    
    // compute final point and distance
    float d = length(p-ab*vec2(cos(w),sin(w)));
    
    // return signed distance
    return (dot(p/ab,p/ab)>1.0) ? d : -d;
  }
`;
const wa = {
    SCREEN: {
        name: "screen",
        screen: true
    },
    PICKING: {
        name: "picking",
        picking: true
    }
};
const Bn = {
    IGNORE: 1,
    USE_BB: 2
};
const xs = 0;
const $l = 1;
const Ul = 2;
const Es = 3;
const Vt = 4;
const an = 5;
const da = 6;
const ha = 7;
class cm {
    constructor(e, t, a){
        this.r = e;
        this.gl = t;
        this.maxInstances = a.webglBatchSize;
        this.atlasSize = a.webglTexSize;
        this.bgColor = a.bgColor;
        this.debug = a.webglDebug;
        this.batchDebugInfo = [];
        a.enableWrapping = true;
        a.createTextureCanvas = Wy;
        this.atlasManager = new sm(e, a);
        this.batchManager = new om(a);
        this.simpleShapeOptions = new Map;
        this.program = this._createShaderProgram(wa.SCREEN);
        this.pickingProgram = this._createShaderProgram(wa.PICKING);
        this.vao = this._createVAO();
    }
    addAtlasCollection(t, a) {
        this.atlasManager.addAtlasCollection(t, a);
    }
    addTextureAtlasRenderType(t, a) {
        this.atlasManager.addRenderType(t, a);
    }
    addSimpleShapeRenderType(t, a) {
        this.simpleShapeOptions.set(t, a);
    }
    invalidate(t, { type } = {}) {
        const atlasManager = this.atlasManager;
        if (type) {
            return atlasManager.invalidate(t, {
                filterType (o) {
                    return o === type;
                },
                forceRedraw: true
            });
        }
        return atlasManager.invalidate(t);
    }
    gc() {
        this.atlasManager.gc();
    }
    _createShaderProgram(t) {
        const a = this.gl;
        const n = `#version 300 es
      precision highp float;

      uniform mat3 uPanZoomMatrix;
      uniform int  uAtlasSize;
      
      // instanced
      in vec2 aPosition; // a vertex from the unit square
      
      in mat3 aTransform; // used to transform verticies, eg into a bounding box
      in int aVertType; // the type of thing we are rendering

      // the z-index that is output when using picking mode
      in vec4 aIndex;
      
      // For textures
      in int aAtlasId; // which shader unit/atlas to use
      in vec4 aTex; // x/y/w/h of texture in atlas

      // for edges
      in vec4 aPointAPointB;
      in vec4 aPointCPointD;
      in vec2 aLineWidth; // also used for node border width

      // simple shapes
      in vec4 aCornerRadius; // for round-rectangle [top-right, bottom-right, top-left, bottom-left]
      in vec4 aColor; // also used for edges
      in vec4 aBorderColor; // aLineWidth is used for border width

      // output values passed to the fragment shader
      out vec2 vTexCoord;
      out vec4 vColor;
      out vec2 vPosition;
      // flat values are not interpolated
      flat out int vAtlasId; 
      flat out int vVertType;
      flat out vec2 vTopRight;
      flat out vec2 vBotLeft;
      flat out vec4 vCornerRadius;
      flat out vec4 vBorderColor;
      flat out vec2 vBorderWidth;
      flat out vec4 vIndex;
      
      void main(void) {
        int vid = gl_VertexID;
        vec2 position = aPosition; // TODO make this a vec3, simplifies some code below

        if(aVertType == `.concat(xs, `) {
          float texX = aTex.x; // texture coordinates
          float texY = aTex.y;
          float texW = aTex.z;
          float texH = aTex.w;

          if(vid == 1 || vid == 2 || vid == 4) {
            texX += texW;
          }
          if(vid == 2 || vid == 4 || vid == 5) {
            texY += texH;
          }

          float d = float(uAtlasSize);
          vTexCoord = vec2(texX / d, texY / d); // tex coords must be between 0 and 1

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == `).concat(Vt, " || aVertType == ").concat(ha, ` 
             || aVertType == `).concat(an, " || aVertType == ").concat(da, `) { // simple shapes

          // the bounding box is needed by the fragment shader
          vBotLeft  = (aTransform * vec3(0, 0, 1)).xy; // flat
          vTopRight = (aTransform * vec3(1, 1, 1)).xy; // flat
          vPosition = (aTransform * vec3(position, 1)).xy; // will be interpolated

          // calculations are done in the fragment shader, just pass these along
          vColor = aColor;
          vCornerRadius = aCornerRadius;
          vBorderColor = aBorderColor;
          vBorderWidth = aLineWidth;

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == `).concat($l, `) {
          vec2 source = aPointAPointB.xy;
          vec2 target = aPointAPointB.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          // stretch the unit square into a long skinny rectangle
          vec2 xBasis = target - source;
          vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
          vec2 point = source + xBasis * position.x + yBasis * aLineWidth[0] * position.y;

          gl_Position = vec4(uPanZoomMatrix * vec3(point, 1.0), 1.0);
          vColor = aColor;
        } 
        else if(aVertType == `).concat(Ul, `) {
          vec2 pointA = aPointAPointB.xy;
          vec2 pointB = aPointAPointB.zw;
          vec2 pointC = aPointCPointD.xy;
          vec2 pointD = aPointCPointD.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          vec2 p0, p1, p2, pos;
          if(position.x == 0.0) { // The left side of the unit square
            p0 = pointA;
            p1 = pointB;
            p2 = pointC;
            pos = position;
          } else { // The right side of the unit square, use same approach but flip the geometry upside down
            p0 = pointD;
            p1 = pointC;
            p2 = pointB;
            pos = vec2(0.0, -position.y);
          }

          vec2 p01 = p1 - p0;
          vec2 p12 = p2 - p1;
          vec2 p21 = p1 - p2;

          // Find the normal vector.
          vec2 tangent = normalize(normalize(p12) + normalize(p01));
          vec2 normal = vec2(-tangent.y, tangent.x);

          // Find the vector perpendicular to p0 -> p1.
          vec2 p01Norm = normalize(vec2(-p01.y, p01.x));

          // Determine the bend direction.
          float sigma = sign(dot(p01 + p21, normal));
          float width = aLineWidth[0];

          if(sign(pos.y) == -sigma) {
            // This is an intersecting vertex. Adjust the position so that there's no overlap.
            vec2 point = 0.5 * width * normal * -sigma / dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          } else {
            // This is a non-intersecting vertex. Treat it like a mitre join.
            vec2 point = 0.5 * width * normal * sigma * dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          }

          vColor = aColor;
        } 
        else if(aVertType == `).concat(Es, ` && vid < 3) {
          // massage the first triangle into an edge arrow
          if(vid == 0)
            position = vec2(-0.15, -0.3);
          if(vid == 1)
            position = vec2(  0.0,  0.0);
          if(vid == 2)
            position = vec2( 0.15, -0.3);

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
          vColor = aColor;
        }
        else {
          gl_Position = vec4(2.0, 0.0, 0.0, 1.0); // discard vertex by putting it outside webgl clip space
        }

        vAtlasId = aAtlasId;
        vVertType = aVertType;
        vIndex = aIndex;
      }
    `);
        const i = this.batchManager.getIndexArray();
        const s = `#version 300 es
      precision highp float;

      // declare texture unit for each texture atlas in the batch
      `.concat(i.map((l)=>`uniform sampler2D uTexture${l};`).join(`
	`), `

      uniform vec4 uBGColor;
      uniform float uZoom;

      in vec2 vTexCoord;
      in vec4 vColor;
      in vec2 vPosition; // model coordinates

      flat in int vAtlasId;
      flat in vec4 vIndex;
      flat in int vVertType;
      flat in vec2 vTopRight;
      flat in vec2 vBotLeft;
      flat in vec4 vCornerRadius;
      flat in vec4 vBorderColor;
      flat in vec2 vBorderWidth;

      out vec4 outColor;

      `).concat(um, `
      `).concat(lm, `
      `).concat(vm, `
      `).concat(fm, `

      vec4 blend(vec4 top, vec4 bot) { // blend colors with premultiplied alpha
        return vec4( 
          top.rgb + (bot.rgb * (1.0 - top.a)),
          top.a   + (bot.a   * (1.0 - top.a)) 
        );
      }

      vec4 distInterp(vec4 cA, vec4 cB, float d) { // interpolate color using Signed Distance
        // scale to the zoom level so that borders don't look blurry when zoomed in
        // note 1.5 is an aribitrary value chosen because it looks good
        return mix(cA, cB, 1.0 - smoothstep(0.0, 1.5 / uZoom, abs(d))); 
      }

      void main(void) {
        if(vVertType == `).concat(xs, `) {
          // look up the texel from the texture unit
          `).concat(i.map((l)=>`if(vAtlasId == ${l}) outColor = texture(uTexture${l}, vTexCoord);`).join(`
	else `), `
        } 
        else if(vVertType == `).concat(Es, `) {
          // mimics how canvas renderer uses context.globalCompositeOperation = 'destination-out';
          outColor = blend(vColor, uBGColor);
          outColor.a = 1.0; // make opaque, masks out line under arrow
        }
        else if(vVertType == `).concat(Vt, ` && vBorderWidth == vec2(0.0)) { // simple rectangle with no border
          outColor = vColor; // unit square is already transformed to the rectangle, nothing else needs to be done
        }
        else if(vVertType == `).concat(Vt, " || vVertType == ").concat(ha, ` 
          || vVertType == `).concat(an, " || vVertType == ").concat(da, `) { // use SDF

          float outerBorder = vBorderWidth[0];
          float innerBorder = vBorderWidth[1];
          float borderPadding = outerBorder * 2.0;
          float w = vTopRight.x - vBotLeft.x - borderPadding;
          float h = vTopRight.y - vBotLeft.y - borderPadding;
          vec2 b = vec2(w/2.0, h/2.0); // half width, half height
          vec2 p = vPosition - vec2(vTopRight.x - b[0] - outerBorder, vTopRight.y - b[1] - outerBorder); // translate to center

          float d; // signed distance
          if(vVertType == `).concat(Vt, `) {
            d = rectangleSD(p, b);
          } else if(vVertType == `).concat(ha, ` && w == h) {
            d = circleSD(p, b.x); // faster than ellipse
          } else if(vVertType == `).concat(ha, `) {
            d = ellipseSD(p, b);
          } else {
            d = roundRectangleSD(p, b, vCornerRadius.wzyx);
          }

          // use the distance to interpolate a color to smooth the edges of the shape, doesn't need multisampling
          // we must smooth colors inwards, because we can't change pixels outside the shape's bounding box
          if(d > 0.0) {
            if(d > outerBorder) {
              discard;
            } else {
              outColor = distInterp(vBorderColor, vec4(0), d - outerBorder);
            }
          } else {
            if(d > innerBorder) {
              vec4 outerColor = outerBorder == 0.0 ? vec4(0) : vBorderColor;
              vec4 innerBorderColor = blend(vBorderColor, vColor);
              outColor = distInterp(innerBorderColor, outerColor, d);
            } 
            else {
              vec4 outerColor;
              if(innerBorder == 0.0 && outerBorder == 0.0) {
                outerColor = vec4(0);
              } else if(innerBorder == 0.0) {
                outerColor = vBorderColor;
              } else {
                outerColor = blend(vBorderColor, vColor);
              }
              outColor = distInterp(vColor, outerColor, d - innerBorder);
            }
          }
        }
        else {
          outColor = vColor;
        }

        `).concat(t.picking ? `if(outColor.a == 0.0) discard;
             else outColor = vIndex;` : "", `
      }
    `);
        const o = Hy(a, n, s);
        o.aPosition = a.getAttribLocation(o, "aPosition");
        o.aIndex = a.getAttribLocation(o, "aIndex");
        o.aVertType = a.getAttribLocation(o, "aVertType");
        o.aTransform = a.getAttribLocation(o, "aTransform");
        o.aAtlasId = a.getAttribLocation(o, "aAtlasId");
        o.aTex = a.getAttribLocation(o, "aTex");
        o.aPointAPointB = a.getAttribLocation(o, "aPointAPointB");
        o.aPointCPointD = a.getAttribLocation(o, "aPointCPointD");
        o.aLineWidth = a.getAttribLocation(o, "aLineWidth");
        o.aColor = a.getAttribLocation(o, "aColor");
        o.aCornerRadius = a.getAttribLocation(o, "aCornerRadius");
        o.aBorderColor = a.getAttribLocation(o, "aBorderColor");
        o.uPanZoomMatrix = a.getUniformLocation(o, "uPanZoomMatrix");
        o.uAtlasSize = a.getUniformLocation(o, "uAtlasSize");
        o.uBGColor = a.getUniformLocation(o, "uBGColor");
        o.uZoom = a.getUniformLocation(o, "uZoom");
        o.uTextures = [];
        for(let u = 0; u < this.batchManager.getMaxAtlasesPerBatch(); u++){
            o.uTextures.push(a.getUniformLocation(o, `uTexture${u}`));
        }
        return o;
    }
    _createVAO() {
        const t = [
            0,
            0,
            1,
            0,
            1,
            1,
            0,
            0,
            1,
            1,
            0,
            1
        ];
        this.vertexCount = t.length / 2;
        const maxInstances = this.maxInstances;
        const n = this.gl;
        const program = this.program;
        const s = n.createVertexArray();
        n.bindVertexArray(s);
        Jy(n, "vec2", program.aPosition, t);
        this.transformBuffer = jy(n, maxInstances, program.aTransform);
        this.indexBuffer = Fr(n, maxInstances, "vec4", program.aIndex);
        this.vertTypeBuffer = Fr(n, maxInstances, "int", program.aVertType);
        this.atlasIdBuffer = Fr(n, maxInstances, "int", program.aAtlasId);
        this.texBuffer = Fr(n, maxInstances, "vec4", program.aTex);
        this.pointAPointBBuffer = Fr(n, maxInstances, "vec4", program.aPointAPointB);
        this.pointCPointDBuffer = Fr(n, maxInstances, "vec4", program.aPointCPointD);
        this.lineWidthBuffer = Fr(n, maxInstances, "vec2", program.aLineWidth);
        this.colorBuffer = Fr(n, maxInstances, "vec4", program.aColor);
        this.cornerRadiusBuffer = Fr(n, maxInstances, "vec4", program.aCornerRadius);
        this.borderColorBuffer = Fr(n, maxInstances, "vec4", program.aBorderColor);
        n.bindVertexArray(null);
        return s;
    }
    get buffers() {
        const t = this;
        if (!this._buffers) {
            this._buffers = Object.keys(this).filter((a)=>tt(a, "Buffer")).map((a)=>t[a]);
        }
        return this._buffers;
    }
    startFrame(t, a = wa.SCREEN) {
        this.panZoomMatrix = t;
        this.renderTarget = a;
        this.batchDebugInfo = [];
        this.wrappedCount = 0;
        this.simpleCount = 0;
        this.startBatch();
    }
    startBatch() {
        this.instanceCount = 0;
        this.batchManager.startBatch();
    }
    endFrame() {
        this.endBatch();
    }
    _isVisible(t, a) {
        if (t.visible()) {
            if (a && a.isVisible) {
                return a.isVisible(t);
            }
            return true;
        }
        return false;
    }
    drawTexture(t, a, n) {
        const atlasManager = this.atlasManager;
        const batchManager = this.batchManager;
        const o = atlasManager.getRenderTypeOpts(n);
        if (this._isVisible(t, o) && !(t.isEdge() && !this._isValidEdge(t))) {
            if (this.renderTarget.picking && o.getTexPickingMode) {
                const u = o.getTexPickingMode(t);
                if (u === Bn.IGNORE) {
                    return;
                }
                if (u == Bn.USE_BB) {
                    this.drawPickingRectangle(t, a, n);
                    return;
                }
            }
            const l = atlasManager.getAtlasInfo(t, n);
            for (const c of l){
                const { atlas, tex1, tex2 } = c;
                if (!batchManager.canAddToCurrentBatch(atlas)) {
                    this.endBatch();
                }
                const g = batchManager.getAtlasIndexForBatch(atlas);
                for(let p = 0, m = [
                    [
                        tex1,
                        true
                    ],
                    [
                        tex2,
                        false
                    ]
                ]; p < m.length; p++){
                    const [w, E] = m[p];
                    if (w.w != 0) {
                        const C = this.instanceCount;
                        this.vertTypeBuffer.getView(C)[0] = xs;
                        const x = this.indexBuffer.getView(C);
                        Ft(a, x);
                        const T = this.atlasIdBuffer.getView(C);
                        T[0] = g;
                        const k = this.texBuffer.getView(C);
                        k[0] = w.x;
                        k[1] = w.y;
                        k[2] = w.w;
                        k[3] = w.h;
                        const D = this.transformBuffer.getMatrixView(C);
                        this.setTransformMatrix(t, D, o, c, E);
                        this.instanceCount++;
                        E || this.wrappedCount++;
                        if (this.instanceCount >= this.maxInstances) {
                            this.endBatch();
                        }
                    }
                }
            }
        }
    }
    setTransformMatrix(t, a, n, i, s = true) {
        let o = 0;
        if (n.shapeProps && n.shapeProps.padding) {
            o = t.pstyle(n.shapeProps.padding).pfValue;
        }
        if (i) {
            const { bb, tex1, tex2 } = i;
            let f = tex1.w / (tex1.w + tex2.w);
            if (!s) {
                f = 1 - f;
            }
            const c = this._getAdjustedBB(bb, o, s, f);
            this._applyTransformMatrix(a, c, n, t);
        } else {
            const h = n.getBoundingBox(t);
            const d = this._getAdjustedBB(h, o, true, 1);
            this._applyTransformMatrix(a, d, n, t);
        }
    }
    _applyTransformMatrix(t, a, n, i) {
        let s;
        let o;
        Hl(t);
        const u = n.getRotation ? n.getRotation(i) : 0;
        if (u !== 0) {
            const l = n.getRotationPoint(i);
            const { x, y } = l;
            gn(t, t, [
                x,
                y
            ]);
            Wl(t, t, u);
            const c = n.getRotationOffset(i);
            s = c.x + (a.xOffset || 0);
            o = c.y + (a.yOffset || 0);
        } else {
            s = a.x1;
            o = a.y1;
        }
        gn(t, t, [
            s,
            o
        ]);
        Gs(t, t, [
            a.w,
            a.h
        ]);
    }
    _getAdjustedBB({ x1, y1, w, h, yOffset }, a, n, i) {
        if (a) {
            x1 -= a;
            y1 -= a;
            w += 2 * a;
            h += 2 * a;
        }
        let xOffset = 0;
        const c = w * i;
        if (n && i < 1) {
            w = c;
        } else if (!n && i < 1) {
            xOffset = w - c;
            x1 += xOffset;
            w = c;
        }
        return {
            x1,
            y1,
            w,
            h,
            xOffset,
            yOffset
        };
    }
    drawPickingRectangle(t, a, n) {
        const i = this.atlasManager.getRenderTypeOpts(n);
        const instanceCount = this.instanceCount;
        this.vertTypeBuffer.getView(instanceCount)[0] = Vt;
        const o = this.indexBuffer.getView(instanceCount);
        Ft(a, o);
        const u = this.colorBuffer.getView(instanceCount);
        wt([
            0,
            0,
            0
        ], 1, u);
        const l = this.transformBuffer.getMatrixView(instanceCount);
        this.setTransformMatrix(t, l, i);
        this.simpleCount++;
        this.instanceCount++;
        if (this.instanceCount >= this.maxInstances) {
            this.endBatch();
        }
    }
    drawNode(t, a, n) {
        const i = this.simpleShapeOptions.get(n);
        if (this._isVisible(t, i)) {
            const s = i.shapeProps;
            const o = this._getVertTypeForShape(t, s.shape);
            if (o === undefined || i.isSimple && !i.isSimple(t, this.renderTarget)) {
                this.drawTexture(t, a, n);
                return;
            }
            const u = this.instanceCount;
            this.vertTypeBuffer.getView(u)[0] = o;
            if (o === an || o === da) {
                const l = i.getBoundingBox(t);
                const v = this._getCornerRadius(t, s.radius, l);
                const f = this.cornerRadiusBuffer.getView(u);
                f[0] = v;
                f[1] = v;
                f[2] = v;
                f[3] = v;
                if (o === da) {
                    f[0] = 0;
                    f[2] = 0;
                }
            }
            const c = this.indexBuffer.getView(u);
            Ft(a, c);
            const h = this.renderTarget.picking ? 1 : n === "node-body" ? t.effectiveOpacity() : 1;
            const d = this.renderTarget.picking ? 1 : t.pstyle(s.opacity).value * h;
            const y = t.pstyle(s.color).value;
            const g = this.colorBuffer.getView(u);
            wt(y, d, g);
            const p = this.lineWidthBuffer.getView(u);
            p[0] = 0;
            p[1] = 0;
            if (s.border) {
                const m = t.pstyle("border-width").value;
                if (m > 0) {
                    const b = t.pstyle("border-color").value;
                    const w = h * t.pstyle("border-opacity").value;
                    const E = this.borderColorBuffer.getView(u);
                    wt(b, w, E);
                    const C = t.pstyle("border-position").value;
                    if (C === "inside") {
                        p[0] = 0;
                        p[1] = -m;
                    } else if (C === "outside") {
                        p[0] = m;
                        p[1] = 0;
                    } else {
                        const x = m / 2;
                        p[0] = x;
                        p[1] = -x;
                    }
                }
            }
            const T = this.transformBuffer.getMatrixView(u);
            this.setTransformMatrix(t, T, i);
            this.simpleCount++;
            this.instanceCount++;
            if (this.instanceCount >= this.maxInstances) {
                this.endBatch();
            }
        }
    }
    _getVertTypeForShape(t, a) {
        const value = t.pstyle(a).value;
        switch(value){
            case "rectangle":
                return Vt;
            case "ellipse":
                return ha;
            case "roundrectangle":
            case "round-rectangle":
                return an;
            case "bottom-round-rectangle":
                return da;
            default:
                return;
        }
    }
    _getCornerRadius(t, a, { w, h }) {
        if (t.pstyle(a).value === "auto") {
            return lt(w, h);
        }
        const pfValue = t.pstyle(a).pfValue;
        const u = w / 2;
        const l = h / 2;
        return Math.min(pfValue, l, u);
    }
    drawEdgeArrow(t, a, n) {
        if (t.visible()) {
            const i = t._private.rscratch;
            let s;
            let o;
            let u;
            if (n === "source") {
                s = i.arrowStartX;
                o = i.arrowStartY;
                u = i.srcArrowAngle;
            } else {
                s = i.arrowEndX;
                o = i.arrowEndY;
                u = i.tgtArrowAngle;
            }
            if (!(isNaN(s) || s == null || isNaN(o) || o == null || isNaN(u) || u == null)) {
                const l = t.pstyle(`${n}-arrow-shape`).value;
                if (l !== "none") {
                    const v = t.pstyle(`${n}-arrow-color`).value;
                    const f = t.pstyle("opacity").value;
                    const c = t.pstyle("line-opacity").value;
                    const h = f * c;
                    const d = t.pstyle("width").pfValue;
                    const y = t.pstyle("arrow-scale").value;
                    const g = this.r.getArrowWidth(d, y);
                    const p = this.instanceCount;
                    const m = this.transformBuffer.getMatrixView(p);
                    Hl(m);
                    gn(m, m, [
                        s,
                        o
                    ]);
                    Gs(m, m, [
                        g,
                        g
                    ]);
                    Wl(m, m, u);
                    this.vertTypeBuffer.getView(p)[0] = Es;
                    const b = this.indexBuffer.getView(p);
                    Ft(a, b);
                    const w = this.colorBuffer.getView(p);
                    wt(v, h, w);
                    this.instanceCount++;
                    if (this.instanceCount >= this.maxInstances) {
                        this.endBatch();
                    }
                }
            }
        }
    }
    drawEdgeLine(t, a) {
        if (t.visible()) {
            const n = this._getEdgePoints(t);
            if (n) {
                const i = t.pstyle("opacity").value;
                const s = t.pstyle("line-opacity").value;
                const o = t.pstyle("width").pfValue;
                const u = t.pstyle("line-color").value;
                const l = i * s;
                if (n.length / 2 + this.instanceCount > this.maxInstances) {
                    this.endBatch();
                }
                if (n.length == 4) {
                    const v = this.instanceCount;
                    this.vertTypeBuffer.getView(v)[0] = $l;
                    const f = this.indexBuffer.getView(v);
                    Ft(a, f);
                    const c = this.colorBuffer.getView(v);
                    wt(u, l, c);
                    const h = this.lineWidthBuffer.getView(v);
                    h[0] = o;
                    const d = this.pointAPointBBuffer.getView(v);
                    d[0] = n[0];
                    d[1] = n[1];
                    d[2] = n[2];
                    d[3] = n[3];
                    this.instanceCount++;
                    if (this.instanceCount >= this.maxInstances) {
                        this.endBatch();
                    }
                } else {
                    for(let y = 0; y < n.length - 2; y += 2){
                        const g = this.instanceCount;
                        this.vertTypeBuffer.getView(g)[0] = Ul;
                        const p = this.indexBuffer.getView(g);
                        Ft(a, p);
                        const m = this.colorBuffer.getView(g);
                        wt(u, l, m);
                        const b = this.lineWidthBuffer.getView(g);
                        b[0] = o;
                        let w = n[y - 2];
                        let E = n[y - 1];
                        const C = n[y];
                        const x = n[y + 1];
                        const T = n[y + 2];
                        const k = n[y + 3];
                        let D = n[y + 4];
                        let B = n[y + 5];
                        if (y == 0) {
                            w = 2 * C - T + 0.001;
                            E = 2 * x - k + 0.001;
                        }
                        if (y == n.length - 4) {
                            D = 2 * T - C + 0.001;
                            B = 2 * k - x + 0.001;
                        }
                        const P = this.pointAPointBBuffer.getView(g);
                        P[0] = w;
                        P[1] = E;
                        P[2] = C;
                        P[3] = x;
                        const A = this.pointCPointDBuffer.getView(g);
                        A[0] = T;
                        A[1] = k;
                        A[2] = D;
                        A[3] = B;
                        this.instanceCount++;
                        if (this.instanceCount >= this.maxInstances) {
                            this.endBatch();
                        }
                    }
                }
            }
        }
    }
    _isValidEdge(t) {
        const rscratch = t._private.rscratch;
        return !(rscratch.badLine || rscratch.allpts == null || isNaN(rscratch.allpts[0]));
    }
    _getEdgePoints(t) {
        const rscratch = t._private.rscratch;
        if (this._isValidEdge(t)) {
            const n = rscratch.allpts;
            if (n.length == 4) {
                return n;
            }
            const i = this._getNumSegments(t);
            return this._getCurveSegmentPoints(n, i);
        }
    }
    _getNumSegments(t) {
        const a = 15;
        return Math.min(Math.max(a, 5), this.maxInstances);
    }
    _getCurveSegmentPoints(t, a) {
        if (t.length == 4) {
            return t;
        }
        const n = Array((a + 1) * 2);
        for(let i = 0; i <= a; i++){
            if (i == 0) {
                n[0] = t[0];
                n[1] = t[1];
            } else if (i == a) {
                n[i * 2] = t[t.length - 2];
                n[i * 2 + 1] = t[t.length - 1];
            } else {
                const s = i / a;
                this._setCurvePoint(t, s, n, i * 2);
            }
        }
        return n;
    }
    _setCurvePoint(t, a, n, i) {
        if (t.length <= 2) {
            n[i] = t[0];
            n[i + 1] = t[1];
        } else {
            for(var s = Array(t.length - 2), o = 0; o < s.length; o += 2){
                const u = (1 - a) * t[o] + a * t[o + 2];
                const l = (1 - a) * t[o + 1] + a * t[o + 3];
                s[o] = u;
                s[o + 1] = l;
            }
            return this._setCurvePoint(s, a, n, i);
        }
    }
    endBatch() {
        const t = this.gl;
        const vao = this.vao;
        const vertexCount = this.vertexCount;
        const instanceCount = this.instanceCount;
        if (instanceCount !== 0) {
            const s = this.renderTarget.picking ? this.pickingProgram : this.program;
            t.useProgram(s);
            t.bindVertexArray(vao);
            for (const l of this.buffers){
                l.bufferSubData(instanceCount);
            }
            for(var v = this.batchManager.getAtlases(), f = 0; f < v.length; f++){
                v[f].bufferIfNeeded(t);
            }
            for(let c = 0; c < v.length; c++){
                t.activeTexture(t.TEXTURE0 + c);
                t.bindTexture(t.TEXTURE_2D, v[c].texture);
                t.uniform1i(s.uTextures[c], c);
            }
            t.uniform1f(s.uZoom, $y(this.r));
            t.uniformMatrix3fv(s.uPanZoomMatrix, false, this.panZoomMatrix);
            t.uniform1i(s.uAtlasSize, this.batchManager.getAtlasSize());
            const h = wt(this.bgColor, 1);
            t.uniform4fv(s.uBGColor, h);
            t.drawArraysInstanced(t.TRIANGLES, 0, vertexCount, instanceCount);
            t.bindVertexArray(null);
            t.bindTexture(t.TEXTURE_2D, null);
            if (this.debug) {
                this.batchDebugInfo.push({
                    count: instanceCount,
                    atlasCount: v.length
                });
            }
            this.startBatch();
        }
    }
    getDebugInfo() {
        const atlasInfo = this.atlasManager.getDebugInfo();
        const totalAtlases = atlasInfo.reduce((acc, item)=>acc + item.atlasCount, 0);
        const batchDebugInfo = this.batchDebugInfo;
        const totalInstances = batchDebugInfo.reduce((acc, item)=>acc + item.count, 0);
        return {
            atlasInfo,
            totalAtlases,
            wrappedCount: this.wrappedCount,
            simpleCount: this.simpleCount,
            batchCount: batchDebugInfo.length,
            batchInfo: batchDebugInfo,
            totalInstances
        };
    }
}
const Rf = {};
Rf.initWebgl = function(r, e) {
    const t = this;
    const a = t.data.contexts[t.WEBGL];
    r.bgColor = dm(t);
    r.webglTexSize = Math.min(r.webglTexSize, a.getParameter(a.MAX_TEXTURE_SIZE));
    r.webglTexRows = Math.min(r.webglTexRows, 54);
    r.webglTexRowsNodes = Math.min(r.webglTexRowsNodes, 54);
    r.webglBatchSize = Math.min(r.webglBatchSize, 16384);
    r.webglTexPerBatch = Math.min(r.webglTexPerBatch, a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS));
    t.webglDebug = r.webglDebug;
    t.webglDebugShowAtlases = r.webglDebugShowAtlases;
    t.pickingFrameBuffer = em(a);
    t.pickingFrameBuffer.needsDraw = true;
    t.drawing = new cm(t, a, r);
    const n = (f)=>(c)=>t.getTextAngle(c, f);
    const i = (f)=>(c)=>{
            const h = c.pstyle(f);
            return h && h.value;
        };
    const s = (f)=>(c)=>c.pstyle(`${f}-opacity`).value > 0;
    const getTexPickingMode = (f)=>{
        const c = f.pstyle("text-events").strValue === "yes";
        if (c) {
            return Bn.USE_BB;
        }
        return Bn.IGNORE;
    };
    const getBoundingBox = (f)=>{
        const c = f.position();
        const { x, y: y_1 } = c;
        const y = f.outerWidth();
        const g = f.outerHeight();
        return {
            w: y,
            h: g,
            x1: x - y / 2,
            y1: y_1 - g / 2
        };
    };
    t.drawing.addAtlasCollection("node", {
        texRows: r.webglTexRowsNodes
    });
    t.drawing.addAtlasCollection("label", {
        texRows: r.webglTexRows
    });
    t.drawing.addTextureAtlasRenderType("node-body", {
        collection: "node",
        getKey: e.getStyleKey,
        getBoundingBox: e.getElementBox,
        drawElement: e.drawElement
    });
    t.drawing.addSimpleShapeRenderType("node-body", {
        getBoundingBox,
        isSimple,
        shapeProps: {
            shape: "shape",
            color: "background-color",
            opacity: "background-opacity",
            radius: "corner-radius",
            border: true
        }
    });
    t.drawing.addSimpleShapeRenderType("node-overlay", {
        getBoundingBox,
        isVisible: s("overlay"),
        shapeProps: {
            shape: "overlay-shape",
            color: "overlay-color",
            opacity: "overlay-opacity",
            padding: "overlay-padding",
            radius: "overlay-corner-radius"
        }
    });
    t.drawing.addSimpleShapeRenderType("node-underlay", {
        getBoundingBox,
        isVisible: s("underlay"),
        shapeProps: {
            shape: "underlay-shape",
            color: "underlay-color",
            opacity: "underlay-opacity",
            padding: "underlay-padding",
            radius: "underlay-corner-radius"
        }
    });
    t.drawing.addTextureAtlasRenderType("label", {
        collection: "label",
        getTexPickingMode,
        getKey: Cs(e.getLabelKey, null),
        getBoundingBox: Ts(e.getLabelBox, null),
        drawClipped: true,
        drawElement: e.drawLabel,
        getRotation: n(null),
        getRotationPoint: e.getLabelRotationPoint,
        getRotationOffset: e.getLabelRotationOffset,
        isVisible: i("label")
    });
    t.drawing.addTextureAtlasRenderType("edge-source-label", {
        collection: "label",
        getTexPickingMode,
        getKey: Cs(e.getSourceLabelKey, "source"),
        getBoundingBox: Ts(e.getSourceLabelBox, "source"),
        drawClipped: true,
        drawElement: e.drawSourceLabel,
        getRotation: n("source"),
        getRotationPoint: e.getSourceLabelRotationPoint,
        getRotationOffset: e.getSourceLabelRotationOffset,
        isVisible: i("source-label")
    });
    t.drawing.addTextureAtlasRenderType("edge-target-label", {
        collection: "label",
        getTexPickingMode,
        getKey: Cs(e.getTargetLabelKey, "target"),
        getBoundingBox: Ts(e.getTargetLabelBox, "target"),
        drawClipped: true,
        drawElement: e.drawTargetLabel,
        getRotation: n("target"),
        getRotationPoint: e.getTargetLabelRotationPoint,
        getRotationOffset: e.getTargetLabelRotationOffset,
        isVisible: i("target-label")
    });
    const l = Na(()=>{
        console.log("garbage collect flag set");
        t.data.gc = true;
    }, 10000);
    t.onUpdateEleCalcs((v, f)=>{
        let c = false;
        if (f && f.length > 0) {
            c |= t.drawing.invalidate(f);
        }
        if (c) {
            l();
        }
    });
    hm(t);
};
function dm(r) {
    const e = r.cy.container();
    const t = e && e.style && e.style.backgroundColor || "white";
    return av(t);
}
function Mf(r, e) {
    const rscratch = r._private.rscratch;
    return xr(rscratch, "labelWrapCachedLines", e) || [];
}
var Cs = (e, t)=>(a)=>{
        const n = e(a);
        const i = Mf(a, t);
        if (i.length > 1) {
            return i.map((s, o)=>`${n}_${o}`);
        }
        return n;
    };
var Ts = (e, t)=>(a, n)=>{
        const i = e(a);
        if (typeof n === "string") {
            const s = n.indexOf("_");
            if (s > 0) {
                const o = Number(n.substring(s + 1));
                const u = Mf(a, t);
                const l = i.h / u.length;
                const yOffset = l * o;
                const y1 = i.y1 + yOffset;
                return {
                    x1: i.x1,
                    w: i.w,
                    y1,
                    h: l,
                    yOffset
                };
            }
        }
        return i;
    };
function hm(r) {
    {
        const e = r.render;
        r.render = (i)=>{
            i = i || {};
            const s = r.cy;
            r.webgl && (s.zoom() > Tf ? (gm(r), e.call(r, i)) : (pm(r), If(r, i, wa.SCREEN)));
        };
    }
    {
        const t = r.matchCanvasSize;
        r.matchCanvasSize = (i)=>{
            t.call(r, i);
            r.pickingFrameBuffer.setFramebufferAttachmentSizes(r.canvasWidth, r.canvasHeight);
            r.pickingFrameBuffer.needsDraw = true;
        };
    }
    r.findNearestElements = (i, s, o, u)=>Em(r, i, s);
    {
        const a = r.invalidateCachedZSortedEles;
        r.invalidateCachedZSortedEles = ()=>{
            a.call(r);
            r.pickingFrameBuffer.needsDraw = true;
        };
    }
    {
        const n = r.notify;
        r.notify = (i, s)=>{
            n.call(r, i, s);
            if (i === "viewport" || i === "bounds") {
                r.pickingFrameBuffer.needsDraw = true;
            } else if (i === "background") {
                r.drawing.invalidate(s, {
                    type: "node-body"
                });
            }
        };
    }
}
function gm(r) {
    const e = r.data.contexts[r.WEBGL];
    e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
}
function pm(r) {
    const e = (a)=>{
        a.save();
        a.setTransform(1, 0, 0, 1, 0, 0);
        a.clearRect(0, 0, r.canvasWidth, r.canvasHeight);
        a.restore();
    };
    e(r.data.contexts[r.NODE]);
    e(r.data.contexts[r.DRAG]);
}
function ym(r) {
    const { canvasWidth, canvasHeight } = r;
    const a = yo(r);
    const { pan, zoom } = a;
    const s = ws();
    gn(s, s, [
        pan.x,
        pan.y
    ]);
    Gs(s, s, [
        zoom,
        zoom
    ]);
    const o = ws();
    tm(o, canvasWidth, canvasHeight);
    const u = ws();
    rm(u, o, s);
    return u;
}
function Lf(r, e) {
    const { canvasWidth, canvasHeight } = r;
    const n = yo(r);
    const { pan, zoom } = n;
    e.setTransform(1, 0, 0, 1, 0, 0);
    e.clearRect(0, 0, canvasWidth, canvasHeight);
    e.translate(pan.x, pan.y);
    e.scale(zoom, zoom);
}
function mm(r, e) {
    r.drawSelectionRectangle(e, (t)=>Lf(r, t));
}
function bm(r) {
    const e = r.data.contexts[r.NODE];
    e.save();
    Lf(r, e);
    e.strokeStyle = "rgba(0, 0, 0, 0.3)";
    e.beginPath();
    e.moveTo(-1000, 0);
    e.lineTo(1000, 0);
    e.stroke();
    e.beginPath();
    e.moveTo(0, -1000);
    e.lineTo(0, 1000);
    e.stroke();
    e.restore();
}
function wm(r) {
    const e = (drawing, i, s)=>{
        const o = drawing.atlasManager.getAtlasCollection(i);
        const u = r.data.contexts[r.NODE];
        for(let l = o.atlases, v = 0; v < l.length; v++){
            const f = l[v];
            const c = f.canvas;
            if (c) {
                const { width, height } = c;
                const y = width * v;
                const g = c.height * s;
                const p = 0.4;
                u.save();
                u.scale(p, p);
                u.drawImage(c, y, g);
                u.strokeStyle = "black";
                u.rect(y, g, width, height);
                u.stroke();
                u.restore();
            }
        }
    };
    let t = 0;
    e(r.drawing, "node", t++);
    e(r.drawing, "label", t++);
}
function xm(r, e, t, a, n) {
    let i;
    let s;
    let o;
    let u;
    const l = yo(r);
    const { pan, zoom } = l;
    {
        const c = Uy(r, pan, zoom, e, t);
        const [d, y] = c;
        const g = 6;
        i = d - g / 2;
        s = y - g / 2;
        o = g;
        u = g;
    }
    if (o === 0 || u === 0) {
        return [];
    }
    const p = r.data.contexts[r.WEBGL];
    p.bindFramebuffer(p.FRAMEBUFFER, r.pickingFrameBuffer);
    if (r.pickingFrameBuffer.needsDraw) {
        p.viewport(0, 0, p.canvas.width, p.canvas.height);
        If(r, null, wa.PICKING);
        r.pickingFrameBuffer.needsDraw = false;
    }
    const m = o * u;
    const b = new Uint8Array(m * 4);
    p.readPixels(i, s, o, u, p.RGBA, p.UNSIGNED_BYTE, b);
    p.bindFramebuffer(p.FRAMEBUFFER, null);
    const w = new Set;
    for(let E = 0; E < m; E++){
        const C = b.slice(E * 4, E * 4 + 4);
        const x = Yy(C) - 1;
        if (x >= 0) {
            w.add(x);
        }
    }
    return w;
}
function Em(r, e, t) {
    const a = xm(r, e, t);
    const n = r.getCachedZSortedEles();
    let i;
    let s;
    for (const l of a){
        const v = n[l];
        if (!i && v.isNode()) {
            i = v;
        }
        if (!s && v.isEdge()) {
            s = v;
        }
        if (i && s) {
            break;
        }
    }
    return [
        i,
        s
    ].filter(Boolean);
}
function Ss({ drawing }, e, t) {
    e += 1;
    if (t.isNode()) {
        drawing.drawNode(t, e, "node-underlay");
        drawing.drawNode(t, e, "node-body");
        drawing.drawTexture(t, e, "label");
        drawing.drawNode(t, e, "node-overlay");
    } else {
        drawing.drawEdgeLine(t, e);
        drawing.drawEdgeArrow(t, e, "source");
        drawing.drawEdgeArrow(t, e, "target");
        drawing.drawTexture(t, e, "label");
        drawing.drawTexture(t, e, "edge-source-label");
        drawing.drawTexture(t, e, "edge-target-label");
    }
}
function If(r, e, t) {
    let a;
    if (r.webglDebug) {
        a = performance.now();
    }
    const r_drawing = r.drawing;
    let i = 0;
    if (t.screen && r.data.canvasNeedsRedraw[r.SELECT_BOX]) {
        mm(r, e);
    }
    if (r.data.canvasNeedsRedraw[r.NODE] || t.picking) {
        const s = r.data.contexts[r.WEBGL];
        if (t.screen) {
            s.clearColor(0, 0, 0, 0);
            s.enable(s.BLEND);
            s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA);
        } else {
            s.disable(s.BLEND);
        }
        s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT);
        s.viewport(0, 0, s.canvas.width, s.canvas.height);
        const o = ym(r);
        const u = r.getCachedZSortedEles();
        i = u.length;
        r_drawing.startFrame(o, t);
        if (t.screen) {
            for(let l = 0; l < u.nondrag.length; l++){
                Ss(r, l, u.nondrag[l]);
            }
            for(let v = 0; v < u.drag.length; v++){
                Ss(r, v, u.drag[v]);
            }
        } else if (t.picking) {
            for(let f = 0; f < u.length; f++){
                Ss(r, f, u[f]);
            }
        }
        r_drawing.endFrame();
        if (t.screen && r.webglDebugShowAtlases) {
            bm(r);
            wm(r);
        }
        r.data.canvasNeedsRedraw[r.NODE] = false;
        r.data.canvasNeedsRedraw[r.DRAG] = false;
    }
    if (r.webglDebug) {
        const c = performance.now();
        const h = false;
        const d = Math.ceil(c - a);
        const y = r_drawing.getDebugInfo();
        const g = [
            `${i} elements`,
            `${y.totalInstances} instances`,
            `${y.batchCount} batches`,
            `${y.totalAtlases} atlases`,
            `${y.wrappedCount} wrapped textures`,
            `${y.simpleCount} simple shapes`
        ].join(", ");
        if (h) {
            console.log(`WebGL (${t.name}) - time ${d}ms, ${g}`);
        } else {
            console.log(`WebGL (${t.name}) - frame time ${d}ms`);
            console.log("Totals:");
            console.log(`  ${g}`);
            console.log("Texture Atlases Used:");
            const p = y.atlasInfo;
            for (const w of p){
                console.log(`  ${w.type}: ${w.keyCount} keys, ${w.atlasCount} atlases`);
            }
            console.log("");
        }
    }
    if (r.data.gc) {
        console.log("Garbage Collect!");
        r.data.gc = false;
        r_drawing.gc();
    }
}
const yt = {};
yt.drawPolygonPath = (r, e, t, a, n, i)=>{
    const s = a / 2;
    const o = n / 2;
    if (r.beginPath) {
        r.beginPath();
    }
    r.moveTo(e + s * i[0], t + o * i[1]);
    for(let u = 1; u < i.length / 2; u++){
        r.lineTo(e + s * i[u * 2], t + o * i[u * 2 + 1]);
    }
    r.closePath();
};
yt.drawRoundPolygonPath = (r, e, t, a, n, i, s)=>{
    s.forEach((o)=>hf(r, o));
    r.closePath();
};
yt.drawRoundRectanglePath = (r, e, t, a, n, i)=>{
    const s = a / 2;
    const o = n / 2;
    const u = i === "auto" ? lt(a, n) : Math.min(i, o, s);
    if (r.beginPath) {
        r.beginPath();
    }
    r.moveTo(e, t - o);
    r.arcTo(e + s, t - o, e + s, t, u);
    r.arcTo(e + s, t + o, e, t + o, u);
    r.arcTo(e - s, t + o, e - s, t, u);
    r.arcTo(e - s, t - o, e, t - o, u);
    r.lineTo(e, t - o);
    r.closePath();
};
yt.drawBottomRoundRectanglePath = (r, e, t, a, n, i)=>{
    const s = a / 2;
    const o = n / 2;
    const u = i === "auto" ? lt(a, n) : i;
    if (r.beginPath) {
        r.beginPath();
    }
    r.moveTo(e, t - o);
    r.lineTo(e + s, t - o);
    r.lineTo(e + s, t);
    r.arcTo(e + s, t + o, e, t + o, u);
    r.arcTo(e - s, t + o, e - s, t, u);
    r.lineTo(e - s, t - o);
    r.lineTo(e, t - o);
    r.closePath();
};
yt.drawCutRectanglePath = (r, e, t, a, n, i, s)=>{
    const o = a / 2;
    const u = n / 2;
    const l = s === "auto" ? to() : s;
    if (r.beginPath) {
        r.beginPath();
    }
    r.moveTo(e - o + l, t - u);
    r.lineTo(e + o - l, t - u);
    r.lineTo(e + o, t - u + l);
    r.lineTo(e + o, t + u - l);
    r.lineTo(e + o - l, t + u);
    r.lineTo(e - o + l, t + u);
    r.lineTo(e - o, t + u - l);
    r.lineTo(e - o, t - u + l);
    r.closePath();
};
yt.drawBarrelPath = (r, e, t, a, n)=>{
    const i = a / 2;
    const s = n / 2;
    const o = e - i;
    const u = e + i;
    const l = t - s;
    const v = t + s;
    const f = Bs(a, n);
    const { widthOffset, heightOffset } = f;
    const d = f.ctrlPtOffsetPct * widthOffset;
    if (r.beginPath) {
        r.beginPath();
    }
    r.moveTo(o, l + heightOffset);
    r.lineTo(o, v - heightOffset);
    r.quadraticCurveTo(o + d, v, o + widthOffset, v);
    r.lineTo(u - widthOffset, v);
    r.quadraticCurveTo(u - d, v, u, v - heightOffset);
    r.lineTo(u, l + heightOffset);
    r.quadraticCurveTo(u - d, l, u - widthOffset, l);
    r.lineTo(o + widthOffset, l);
    r.quadraticCurveTo(o + d, l, o, l + heightOffset);
    r.closePath();
};
const Kl = Math.sin(0);
const Xl = Math.cos(0);
const Hs = {};
const Ws = {};
const Of = Math.PI / 40;
for(let qt = 0 * Math.PI; qt < 2 * Math.PI; qt += Of){
    Hs[qt] = Math.sin(qt);
    Ws[qt] = Math.cos(qt);
}
yt.drawEllipsePath = (r, e, t, a, n)=>{
    if (r.beginPath) {
        r.beginPath();
    }
    if (r.ellipse) {
        r.ellipse(e, t, a / 2, n / 2, 0, 0, 2 * Math.PI);
    } else {
        let i;
        let s;
        const o = a / 2;
        const u = n / 2;
        for(let l = 0 * Math.PI; l < 2 * Math.PI; l += Of){
            i = e - o * Hs[l] * Kl + o * Ws[l] * Xl;
            s = t + u * Ws[l] * Kl + u * Hs[l] * Xl;
            if (l === 0) {
                r.moveTo(i, s);
            } else {
                r.lineTo(i, s);
            }
        }
    }
    r.closePath();
};
const Ga = {};
Ga.createBuffer = (r, e)=>{
    const t = document.createElement("canvas");
    t.width = r;
    t.height = e;
    return [
        t,
        t.getContext("2d")
    ];
};
Ga.bufferCanvasImage = function(r) {
    const e = this.cy;
    const t = e.mutableElements();
    const a = t.boundingBox();
    const n = this.findContainerClientCoords();
    let i = r.full ? Math.ceil(a.w) : n[2];
    let s = r.full ? Math.ceil(a.h) : n[3];
    const o = ae(r.maxWidth) || ae(r.maxHeight);
    const u = this.getPixelRatio();
    let l = 1;
    if (r.scale !== undefined) {
        i *= r.scale;
        s *= r.scale;
        l = r.scale;
    } else if (o) {
        let v = Infinity;
        let f = Infinity;
        if (ae(r.maxWidth)) {
            v = l * r.maxWidth / i;
        }
        if (ae(r.maxHeight)) {
            f = l * r.maxHeight / s;
        }
        l = Math.min(v, f);
        i *= l;
        s *= l;
    }
    if (!o) {
        i *= u;
        s *= u;
        l *= u;
    }
    const c = document.createElement("canvas");
    c.width = i;
    c.height = s;
    c.style.width = `${i}px`;
    c.style.height = `${s}px`;
    const h = c.getContext("2d");
    if (i > 0 && s > 0) {
        h.clearRect(0, 0, i, s);
        h.globalCompositeOperation = "source-over";
        const d = this.getCachedZSortedEles();
        if (r.full) {
            h.translate(-a.x1 * l, -a.y1 * l);
            h.scale(l, l);
            this.drawElements(h, d);
            h.scale(1 / l, 1 / l);
            h.translate(a.x1 * l, a.y1 * l);
        } else {
            const y = e.pan();
            const g = {
                x: y.x * l,
                y: y.y * l
            };
            l *= e.zoom();
            h.translate(g.x, g.y);
            h.scale(l, l);
            this.drawElements(h, d);
            h.scale(1 / l, 1 / l);
            h.translate(-g.x, -g.y);
        }
        if (r.bg) {
            h.globalCompositeOperation = "destination-over";
            h.fillStyle = r.bg;
            h.rect(0, 0, i, s);
            h.fill();
        }
    }
    return c;
};
function Cm(r, e) {
    for(var t = atob(r), a = new ArrayBuffer(t.length), n = new Uint8Array(a), i = 0; i < t.length; i++){
        n[i] = t.charCodeAt(i);
    }
    return new Blob([
        a
    ], {
        type: e
    });
}
function Yl(r) {
    const e = r.indexOf(",");
    return r.substr(e + 1);
}
function Nf(r, e, t) {
    const a = ()=>e.toDataURL(t, r.quality);
    switch(r.output){
        case "blob-promise":
            return new ea((n, i)=>{
                try {
                    e.toBlob((s)=>{
                        if (s != null) {
                            n(s);
                        } else {
                            i(new Error("`canvas.toBlob()` sent a null value in its callback"));
                        }
                    }, t, r.quality);
                } catch (error) {
                    i(error);
                }
            });
        case "blob":
            return Cm(Yl(a()), t);
        case "base64":
            return Yl(a());
        default:
            return a();
    }
}
Ga.png = function(r) {
    return Nf(r, this.bufferCanvasImage(r), "image/png");
};
Ga.jpg = function(r) {
    return Nf(r, this.bufferCanvasImage(r), "image/jpeg");
};
const zf = {};
zf.nodeShapeImpl = function(r, e, t, a, n, i, s, o) {
    switch(r){
        case "ellipse":
            return this.drawEllipsePath(e, t, a, n, i);
        case "polygon":
            return this.drawPolygonPath(e, t, a, n, i, s);
        case "round-polygon":
            return this.drawRoundPolygonPath(e, t, a, n, i, s, o);
        case "roundrectangle":
        case "round-rectangle":
            return this.drawRoundRectanglePath(e, t, a, n, i, o);
        case "cutrectangle":
        case "cut-rectangle":
            return this.drawCutRectanglePath(e, t, a, n, i, s, o);
        case "bottomroundrectangle":
        case "bottom-round-rectangle":
            return this.drawBottomRoundRectanglePath(e, t, a, n, i, o);
        case "barrel":
            return this.drawBarrelPath(e, t, a, n, i);
    }
};
const Tm = Ff;
var Ff_prototype = Ff.prototype;
Ff_prototype.CANVAS_LAYERS = 3;
Ff_prototype.SELECT_BOX = 0;
Ff_prototype.DRAG = 1;
Ff_prototype.NODE = 2;
Ff_prototype.WEBGL = 3;
Ff_prototype.CANVAS_TYPES = [
    "2d",
    "2d",
    "2d",
    "webgl2"
];
Ff_prototype.BUFFER_COUNT = 3;
Ff_prototype.TEXTURE_BUFFER = 0;
Ff_prototype.MOTIONBLUR_BUFFER_NODE = 1;
Ff_prototype.MOTIONBLUR_BUFFER_DRAG = 2;
function Ff(r) {
    const e = this;
    const t = e.cy.window();
    const t_document = t.document;
    if (r.webgl) {
        Ff_prototype.CANVAS_LAYERS = e.CANVAS_LAYERS = 4;
        console.log("webgl rendering enabled");
    }
    e.data = {
        canvases: new Array(Ff_prototype.CANVAS_LAYERS),
        contexts: new Array(Ff_prototype.CANVAS_LAYERS),
        canvasNeedsRedraw: new Array(Ff_prototype.CANVAS_LAYERS),
        bufferCanvases: new Array(Ff_prototype.BUFFER_COUNT),
        bufferContexts: new Array(Ff_prototype.CANVAS_LAYERS)
    };
    const n = "-webkit-tap-highlight-color";
    const i = "rgba(0,0,0,0)";
    e.data.canvasContainer = t_document.createElement("div");
    const style = e.data.canvasContainer.style;
    e.data.canvasContainer.style[n] = i;
    style.position = "relative";
    style.zIndex = "0";
    style.overflow = "hidden";
    const o = r.cy.container();
    o.appendChild(e.data.canvasContainer);
    o.style[n] = i;
    const u = {
        "-webkit-user-select": "none",
        "-moz-user-select": "-moz-none",
        "user-select": "none",
        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
        "outline-style": "none"
    };
    if (pc()) {
        u["-ms-touch-action"] = "none";
        u["touch-action"] = "none";
    }
    for(var l = 0; l < Ff_prototype.CANVAS_LAYERS; l++){
        var v = e.data.canvases[l] = t_document.createElement("canvas");
        const f = Ff_prototype.CANVAS_TYPES[l];
        e.data.contexts[l] = v.getContext(f);
        if (!e.data.contexts[l]) {
            He(`Could not create canvas of type ${f}`);
        }
        Object.keys(u).forEach((Q)=>{
            v.style[Q] = u[Q];
        });
        v.style.position = "absolute";
        v.setAttribute("data-id", `layer${l}`);
        v.style.zIndex = String(Ff_prototype.CANVAS_LAYERS - l);
        e.data.canvasContainer.appendChild(v);
        e.data.canvasNeedsRedraw[l] = false;
    }
    e.data.topCanvas = e.data.canvases[0];
    e.data.canvases[Ff_prototype.NODE].setAttribute("data-id", `layer${Ff_prototype.NODE}-node`);
    e.data.canvases[Ff_prototype.SELECT_BOX].setAttribute("data-id", `layer${Ff_prototype.SELECT_BOX}-selectbox`);
    e.data.canvases[Ff_prototype.DRAG].setAttribute("data-id", `layer${Ff_prototype.DRAG}-drag`);
    if (e.data.canvases[Ff_prototype.WEBGL]) {
        e.data.canvases[Ff_prototype.WEBGL].setAttribute("data-id", `layer${Ff_prototype.WEBGL}-webgl`);
    }
    for(var l = 0; l < Ff_prototype.BUFFER_COUNT; l++){
        e.data.bufferCanvases[l] = t_document.createElement("canvas");
        e.data.bufferContexts[l] = e.data.bufferCanvases[l].getContext("2d");
        e.data.bufferCanvases[l].style.position = "absolute";
        e.data.bufferCanvases[l].setAttribute("data-id", `buffer${l}`);
        e.data.bufferCanvases[l].style.zIndex = String(-l - 1);
        e.data.bufferCanvases[l].style.visibility = "hidden";
    }
    e.pathsEnabled = true;
    const c = yr();
    const h = (V)=>({
            x: (V.x1 + V.x2) / 2,
            y: (V.y1 + V.y2) / 2
        });
    const d = (V)=>({
            x: -V.w / 2,
            y: -V.h / 2
        });
    const doesEleInvalidateKey = (V)=>{
        const _private = V[0]._private;
        const W = _private.oldBackgroundTimestamp === _private.backgroundTimestamp;
        return !W;
    };
    const g = (V)=>V[0]._private.nodeKey;
    const p = (V)=>V[0]._private.labelStyleKey;
    const m = (V)=>V[0]._private.sourceLabelStyleKey;
    const b = (V)=>V[0]._private.targetLabelStyleKey;
    const drawElement = (V, H, W, Y, te)=>e.drawElement(V, H, W, false, false, te);
    const E = (V, H, W, Y, te)=>e.drawElementText(V, H, W, Y, "main", te);
    const C = (V, H, W, Y, te)=>e.drawElementText(V, H, W, Y, "source", te);
    const x = (V, H, W, Y, te)=>e.drawElementText(V, H, W, Y, "target", te);
    const T = (V)=>{
        V.boundingBox();
        return V[0]._private.bodyBounds;
    };
    const k = (V)=>{
        V.boundingBox();
        return V[0]._private.labelBounds.main || c;
    };
    const D = (V)=>{
        V.boundingBox();
        return V[0]._private.labelBounds.source || c;
    };
    const B = (V)=>{
        V.boundingBox();
        return V[0]._private.labelBounds.target || c;
    };
    const isVisible = (V, H)=>H;
    const A = (V)=>h(T(V));
    const R = (V, H, W)=>{
        const Y = V ? `${V}-` : "";
        return {
            x: H.x + W.pstyle(`${Y}text-margin-x`).pfValue,
            y: H.y + W.pstyle(`${Y}text-margin-y`).pfValue
        };
    };
    const L = (V, H, W)=>{
        const rscratch = V[0]._private.rscratch;
        return {
            x: rscratch[H],
            y: rscratch[W]
        };
    };
    const I = (V)=>R("", L(V, "labelX", "labelY"), V);
    const M = (V)=>R("source", L(V, "sourceLabelX", "sourceLabelY"), V);
    const O = (V)=>R("target", L(V, "targetLabelX", "targetLabelY"), V);
    const q = (V)=>d(T(V));
    const _ = (V)=>d(D(V));
    const N = (V)=>d(B(V));
    const F = (V)=>{
        const H = k(V);
        const W = d(k(V));
        if (V.isNode()) {
            switch(V.pstyle("text-halign").value){
                case "left":
                    W.x = -H.w - (H.leftPad || 0);
                    break;
                case "right":
                    W.x = -(H.rightPad || 0);
                    break;
            }
            switch(V.pstyle("text-valign").value){
                case "top":
                    W.y = -H.h - (H.topPad || 0);
                    break;
                case "bottom":
                    W.y = -(H.botPad || 0);
                    break;
            }
        }
        return W;
    };
    const U = e.data.eleTxrCache = new ya(e, {
        getKey: g,
        doesEleInvalidateKey,
        drawElement,
        getBoundingBox: T,
        getRotationPoint: A,
        getRotationOffset: q,
        allowEdgeTxrCaching: false,
        allowParentTxrCaching: false
    });
    const J = e.data.lblTxrCache = new ya(e, {
        getKey: p,
        drawElement: E,
        getBoundingBox: k,
        getRotationPoint: I,
        getRotationOffset: F,
        isVisible
    });
    const Z = e.data.slbTxrCache = new ya(e, {
        getKey: m,
        drawElement: C,
        getBoundingBox: D,
        getRotationPoint: M,
        getRotationOffset: _,
        isVisible
    });
    const j = e.data.tlbTxrCache = new ya(e, {
        getKey: b,
        drawElement: x,
        getBoundingBox: B,
        getRotationPoint: O,
        getRotationOffset: N,
        isVisible
    });
    const re = e.data.lyrTxrCache = new Sf(e);
    e.onUpdateEleCalcs((V, H)=>{
        U.invalidateElements(H);
        J.invalidateElements(H);
        Z.invalidateElements(H);
        j.invalidateElements(H);
        re.invalidateElements(H);
        for(let W = 0; W < H.length; W++){
            const Y = H[W]._private;
            Y.oldBackgroundTimestamp = Y.backgroundTimestamp;
        }
    });
    const ne = (V)=>{
        for(let H = 0; H < V.length; H++){
            re.enqueueElementRefinement(V[H].ele);
        }
    };
    U.onDequeue(ne);
    J.onDequeue(ne);
    Z.onDequeue(ne);
    j.onDequeue(ne);
    if (r.webgl) {
        e.initWebgl(r, {
            getStyleKey: g,
            getLabelKey: p,
            getSourceLabelKey: m,
            getTargetLabelKey: b,
            drawElement,
            drawLabel: E,
            drawSourceLabel: C,
            drawTargetLabel: x,
            getElementBox: T,
            getLabelBox: k,
            getSourceLabelBox: D,
            getTargetLabelBox: B,
            getElementRotationPoint: A,
            getElementRotationOffset: q,
            getLabelRotationPoint: I,
            getSourceLabelRotationPoint: M,
            getTargetLabelRotationPoint: O,
            getLabelRotationOffset: F,
            getSourceLabelRotationOffset: _,
            getTargetLabelRotationOffset: N
        });
    }
}
Ff_prototype.redrawHint = function(r, e) {
    const t = this;
    switch(r){
        case "eles":
            t.data.canvasNeedsRedraw[Ff_prototype.NODE] = e;
            break;
        case "drag":
            t.data.canvasNeedsRedraw[Ff_prototype.DRAG] = e;
            break;
        case "select":
            t.data.canvasNeedsRedraw[Ff_prototype.SELECT_BOX] = e;
            break;
        case "gc":
            t.data.gc = true;
            break;
    }
};
const Sm = typeof Path2D !== "undefined";
Ff_prototype.path2dEnabled = function(r) {
    if (r === undefined) {
        return this.pathsEnabled;
    }
    this.pathsEnabled = !!r;
};
Ff_prototype.usePaths = function() {
    return Sm && this.pathsEnabled;
};
Ff_prototype.setImgSmoothing = (r, e)=>{
    if (r.imageSmoothingEnabled != null) {
        r.imageSmoothingEnabled = e;
    } else {
        r.webkitImageSmoothingEnabled = e;
        r.mozImageSmoothingEnabled = e;
        r.msImageSmoothingEnabled = e;
    }
};
Ff_prototype.getImgSmoothing = (r)=>r.imageSmoothingEnabled ?? (r.webkitImageSmoothingEnabled || r.mozImageSmoothingEnabled || r.msImageSmoothingEnabled);
Ff_prototype.makeOffscreenCanvas = function(r, e) {
    let t;
    if ((typeof OffscreenCanvas === "undefined" ? "undefined" : typeof OffscreenCanvas) !== "undefined") {
        t = new OffscreenCanvas(r, e);
    } else {
        const a = this.cy.window();
        const n = a.document;
        t = n.createElement("canvas");
        t.width = r;
        t.height = e;
    }
    return t;
};
[
    kf,
    Hr,
    Qr,
    po,
    Mt,
    pt,
    mr,
    Rf,
    yt,
    Ga,
    zf
].forEach((r)=>{
    ye(Ff_prototype, r);
});
const km = [
    {
        name: "null",
        impl: ff
    },
    {
        name: "base",
        impl: Ef
    },
    {
        name: "canvas",
        impl: Tm
    }
];
const Dm = [
    {
        type: "layout",
        extensions: Zp
    },
    {
        type: "renderer",
        extensions: km
    }
];
const Vf = {};
const qf = {};
function _f(r, e, t) {
    let a = t;
    const n = (T)=>{
        ze(`Can not register \`${e}\` for \`${r}\` since \`${T}\` already exists in the prototype and can not be overridden`);
    };
    if (r === "core") {
        if (Pa.prototype[e]) {
            return n(e);
        }
        Pa.prototype[e] = t;
    } else if (r === "collection") {
        if (lr.prototype[e]) {
            return n(e);
        }
        lr.prototype[e] = t;
    } else if (r === "layout") {
        const i = function(T) {
            this.options = T;
            t.call(this, T);
            if (!Me(this._private)) {
                this._private = {};
            }
            this._private.cy = T.cy;
            this._private.listeners = [];
            this.createEmitter();
        };
        const s = i.prototype = Object.create(t.prototype);
        for(let o = [], u = 0; u < o.length; u++){
            const l = o[u];
            s[l] = s[l] || function() {
                return this;
            };
        }
        if (s.start && !s.run) {
            s.run = function() {
                this.start();
                return this;
            };
        } else if (!s.start && s.run) {
            s.start = function() {
                this.run();
                return this;
            };
        }
        const v = t.prototype.stop;
        s.stop = function() {
            const options = this.options;
            if (options && options.animate) {
                const T = this.animations;
                if (T) {
                    for(let k = 0; k < T.length; k++){
                        T[k].stop();
                    }
                }
            }
            if (v) {
                v.call(this);
            } else {
                this.emit("layoutstop");
            }
            return this;
        };
        if (!s.destroy) {
            s.destroy = function() {
                return this;
            };
        }
        s.cy = function() {
            return this._private.cy;
        };
        const f = (T)=>T._private.cy;
        const c = {
            addEventFields (T, k) {
                k.layout = T;
                k.cy = f(T);
                k.target = T;
            },
            bubble () {
                return true;
            },
            parent (T) {
                return f(T);
            }
        };
        ye(s, {
            createEmitter () {
                this._private.emitter = new qn(c, this);
                return this;
            },
            emitter () {
                return this._private.emitter;
            },
            on (T, k) {
                this.emitter().on(T, k);
                return this;
            },
            one (T, k) {
                this.emitter().one(T, k);
                return this;
            },
            once (T, k) {
                this.emitter().one(T, k);
                return this;
            },
            removeListener (T, k) {
                this.emitter().removeListener(T, k);
                return this;
            },
            removeAllListeners () {
                this.emitter().removeAllListeners();
                return this;
            },
            emit (T, k) {
                this.emitter().emit(T, k);
                return this;
            }
        });
        Ne.eventAliasesOn(s);
        a = i;
    } else if (r === "renderer" && e !== "null" && e !== "base") {
        const h = Gf("renderer", "base");
        const d = h.prototype;
        const y = t;
        const g = t.prototype;
        const p = function() {
            h.apply(this, arguments);
            y.apply(this, arguments);
        };
        const m = p.prototype;
        for(const b in d){
            const w = d[b];
            const E = g[b] != null;
            if (E) {
                return n(b);
            }
            m[b] = w;
        }
        for(const C in g){
            m[C] = g[C];
        }
        d.clientFunctions.forEach((x)=>{
            m[x] = m[x] || (()=>{
                He(`Renderer does not implement \`renderer.${x}()\` on its prototype`);
            });
        });
        a = p;
    } else if (r === "__proto__" || r === "constructor" || r === "prototype") {
        return He(`${r} is an illegal type to be registered, possibly lead to prototype pollutions`);
    }
    return nv({
        map: Vf,
        keys: [
            r,
            e
        ],
        value: a
    });
}
function Gf(r, e) {
    return iv({
        map: Vf,
        keys: [
            r,
            e
        ]
    });
}
function Bm(r, e, t, a, n) {
    return nv({
        map: qf,
        keys: [
            r,
            e,
            t,
            a
        ],
        value: n
    });
}
function Pm(r, e, t, a) {
    return iv({
        map: qf,
        keys: [
            r,
            e,
            t,
            a
        ]
    });
}
const $s = function() {
    if (arguments.length === 2) {
        return Gf(...arguments);
    }
    if (arguments.length === 3) {
        return _f(...arguments);
    }
    if (arguments.length === 4) {
        return Pm(...arguments);
    }
    if (arguments.length === 5) {
        return Bm(...arguments);
    }
    He("Invalid extension access syntax");
};
Pa.prototype.extension = $s;
Dm.forEach((r)=>{
    r.extensions.forEach((e)=>{
        _f(r.type, e.name, e.impl);
    });
});
const Pn = function() {
    if (!(this instanceof Pn)) {
        return new Pn;
    }
    this.length = 0;
};
const Pn_prototype = Pn.prototype;
Pn_prototype.instanceString = ()=>"stylesheet";
Pn_prototype.selector = function(r) {
    const e = this.length++;
    this[e] = {
        selector: r,
        properties: []
    };
    return this;
};
Pn_prototype.css = function(r, e) {
    const t = this.length - 1;
    if (he(r)) {
        this[t].properties.push({
            name: r,
            value: e
        });
    } else if (Me(r)) {
        const a = r;
        for(let n = Object.keys(a), i = 0; i < n.length; i++){
            const s = n[i];
            const o = a[s];
            if (o != null) {
                const u = ir.properties[s] || ir.properties[An(s)];
                if (u != null) {
                    const l = u.name;
                    const v = o;
                    this[t].properties.push({
                        name: l,
                        value: v
                    });
                }
            }
        }
    }
    return this;
};
Pn_prototype.style = Pn_prototype.css;
Pn_prototype.generateStyle = function(r) {
    const e = new ir(r);
    return this.appendToStyle(e);
};
Pn_prototype.appendToStyle = function(r) {
    for(let e = 0; e < this.length; e++){
        const t = this[e];
        const { selector, properties } = t;
        r.selector(selector);
        for (const s of properties){
            r.css(s.name, s.value);
        }
    }
    return r;
};
const Am = "3.33.3";
const Jt = function(e) {
    if (e === undefined) {
        e = {};
    }
    if (Me(e)) {
        return new Pa(e);
    }
    if (he(e)) {
        return $s.apply($s, arguments);
    }
};
Jt.use = function(r) {
    const e = Array.prototype.slice.call(arguments, 1);
    e.unshift(Jt);
    r(...e);
    return this;
};
Jt.warnings = (r)=>cv(r);
Jt.version = Am;
Jt.stylesheet = Jt.Stylesheet = Pn;
export { Jt as c };
