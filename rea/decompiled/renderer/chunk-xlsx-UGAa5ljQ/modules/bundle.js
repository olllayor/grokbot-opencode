!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "79982560-3aea-44ef-90ba-2979f4c17938";
            e._sentryDebugIdIdentifier = "sentry-dbid-79982560-3aea-44ef-90ba-2979f4c17938";
        }
    } catch (e) {}
})();
const Ia = {};
Ia.version = "0.18.5";
let Nr = 1200;
let Bt = 1252;
const Vc = [
    874,
    932,
    936,
    949,
    950,
    1250,
    1251,
    1252,
    1253,
    1254,
    1255,
    1256,
    1257,
    1258,
    10000
];
const un = {
    0: 1252,
    1: 65001,
    2: 65001,
    77: 10000,
    128: 932,
    129: 949,
    130: 1361,
    134: 936,
    136: 950,
    161: 1253,
    162: 1254,
    163: 1258,
    177: 1255,
    178: 1256,
    186: 1257,
    204: 1251,
    222: 874,
    238: 1250,
    255: 1252,
    69: 6969
};
const S0 = (e)=>{
    if (Vc.indexOf(e) != -1) {
        Bt = un[0] = e;
    }
};
function Xc() {
    S0(1252);
}
let Gr = (e)=>{
    Nr = e;
    S0(e);
};
function F0() {
    Gr(1200);
    Xc();
}
function u0(e) {
    const t = [];
    for(let r = 0, a = e.length; r < a; ++r){
        t[r] = e.charCodeAt(r);
    }
    return t;
}
function Gc(e) {
    const t = [];
    for(let r = 0; r < e.length >> 1; ++r){
        t[r] = String.fromCharCode(e.charCodeAt(2 * r) + (e.charCodeAt(2 * r + 1) << 8));
    }
    return t.join("");
}
function xs(e) {
    const t = [];
    for(let r = 0; r < e.length >> 1; ++r){
        t[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8));
    }
    return t.join("");
}
let ra = (e)=>{
    const t = e.charCodeAt(0);
    const r = e.charCodeAt(1);
    if (t == 255 && r == 254) {
        return Gc(e.slice(2));
    }
    if (t == 254 && r == 255) {
        return xs(e.slice(2));
    }
    if (t == 65279) {
        return e.slice(1);
    }
    return e;
};
let wa = (t)=>String.fromCharCode(t);
let Z0 = (t)=>String.fromCharCode(t);
let De;
export function set_cptable(e) {
    De = e;
    Gr = (t)=>{
        Nr = t;
        S0(t);
    };
    ra = (t)=>{
        if (t.charCodeAt(0) === 255 && t.charCodeAt(1) === 254) {
            return De.utils.decode(1200, u0(t.slice(2)));
        }
        return t;
    };
    wa = (r)=>{
        if (Nr === 1200) {
            return String.fromCharCode(r);
        }
        return De.utils.decode(Nr, [
            r & 255,
            r >> 8
        ])[0];
    };
    Z0 = (r)=>De.utils.decode(Bt, [
            r
        ])[0];
    Hs();
}
const _t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function Ra(e) {
    let t = "";
    let r = 0;
    let a = 0;
    let n = 0;
    let i = 0;
    let s = 0;
    let f = 0;
    let c = 0;
    for(let o = 0; o < e.length;){
        r = e.charCodeAt(o++);
        i = r >> 2;
        a = e.charCodeAt(o++);
        s = (r & 3) << 4 | a >> 4;
        n = e.charCodeAt(o++);
        f = (a & 15) << 2 | n >> 6;
        c = n & 63;
        if (isNaN(a)) {
            c = 64;
            f = 64;
        } else if (isNaN(n)) {
            c = 64;
        }
        t += _t.charAt(i) + _t.charAt(s) + _t.charAt(f) + _t.charAt(c);
    }
    return t;
}
function br(e) {
    let t = "";
    let r = 0;
    let a = 0;
    let n = 0;
    let i = 0;
    let s = 0;
    let f = 0;
    let c = 0;
    e = e.replace(/[^\w\+\/\=]/g, "");
    for(let o = 0; o < e.length;){
        i = _t.indexOf(e.charAt(o++));
        s = _t.indexOf(e.charAt(o++));
        r = i << 2 | s >> 4;
        t += String.fromCharCode(r);
        f = _t.indexOf(e.charAt(o++));
        a = (s & 15) << 4 | f >> 2;
        if (f !== 64) {
            t += String.fromCharCode(a);
        }
        c = _t.indexOf(e.charAt(o++));
        n = (f & 3) << 6 | c;
        if (c !== 64) {
            t += String.fromCharCode(n);
        }
    }
    return t;
}
const Te = typeof Buffer !== "undefined" && typeof process !== "undefined" && typeof process.versions !== "undefined" && !!process.versions.node;
const xt = (()=>{
    if (typeof Buffer !== "undefined") {
        let e = !Buffer.from;
        if (!e) {
            try {
                Buffer.from("foo", "utf8");
            } catch  {
                e = true;
            }
        }
        if (e) {
            return (t, r)=>{
                if (r) {
                    return new Buffer(t, r);
                }
                return new Buffer(t);
            };
        }
        return Buffer.from.bind(Buffer);
    }
    return ()=>{};
})();
function Tt(e) {
    if (Te) {
        if (Buffer.alloc) {
            return Buffer.alloc(e);
        }
        return new Buffer(e);
    }
    if (typeof Uint8Array !== "undefined") {
        return new Uint8Array(e);
    }
    return new Array(e);
}
function si(e) {
    if (Te) {
        if (Buffer.allocUnsafe) {
            return Buffer.allocUnsafe(e);
        }
        return new Buffer(e);
    }
    if (typeof Uint8Array !== "undefined") {
        return new Uint8Array(e);
    }
    return new Array(e);
}
const Ir = (t)=>{
    if (Te) {
        return xt(t, "binary");
    }
    return t.split("").map((r)=>r.charCodeAt(0) & 255);
};
function za(e) {
    if (typeof ArrayBuffer === "undefined") {
        return Ir(e);
    }
    const t = new ArrayBuffer(e.length);
    const r = new Uint8Array(t);
    for(let a = 0; a != e.length; ++a){
        r[a] = e.charCodeAt(a) & 255;
    }
    return t;
}
function At(e) {
    if (Array.isArray(e)) {
        return e.map((a)=>String.fromCharCode(a)).join("");
    }
    const t = [];
    for(let r = 0; r < e.length; ++r){
        t[r] = String.fromCharCode(e[r]);
    }
    return t.join("");
}
function zc(e) {
    if (typeof Uint8Array === "undefined") {
        throw new Error("Unsupported");
    }
    return new Uint8Array(e);
}
function hn(e) {
    if (typeof ArrayBuffer === "undefined") {
        throw new Error("Unsupported");
    }
    if (e instanceof ArrayBuffer) {
        return hn(new Uint8Array(e));
    }
    const t = new Array(e.length);
    for(let r = 0; r < e.length; ++r){
        t[r] = e[r];
    }
    return t;
}
const bconcat = Te ? (e)=>Buffer.concat(e.map((t)=>{
        if (Buffer.isBuffer(t)) {
            return t;
        }
        return xt(t);
    })) : (e)=>{
    if (typeof Uint8Array !== "undefined") {
        let t = 0;
        let r = 0;
        for(t = 0; t < e.length; ++t){
            r += e[t].length;
        }
        const a = new Uint8Array(r);
        let n = 0;
        t = 0;
        for(r = 0; t < e.length; r += n, ++t){
            n = e[t].length;
            if (e[t] instanceof Uint8Array) {
                a.set(e[t], r);
            } else {
                if (typeof e[t] === "string") {
                    throw "wtf";
                }
                a.set(new Uint8Array(e[t]), r);
            }
        }
        return a;
    }
    return [].concat.apply([], e.map((i)=>{
        if (Array.isArray(i)) {
            return i;
        }
        return [].slice.call(i);
    }));
};
function $c(e) {
    const t = [];
    let r = 0;
    let a = e.length + 250;
    let n = Tt(e.length + 255);
    for(let i = 0; i < e.length; ++i){
        let s = e.charCodeAt(i);
        if (s < 128) {
            n[r++] = s;
        } else if (s < 2048) {
            n[r++] = 192 | s >> 6 & 31;
            n[r++] = 128 | s & 63;
        } else if (s >= 55296 && s < 57344) {
            s = (s & 1023) + 64;
            const f = e.charCodeAt(++i) & 1023;
            n[r++] = 240 | s >> 8 & 7;
            n[r++] = 128 | s >> 2 & 63;
            n[r++] = 128 | f >> 6 & 15 | (s & 3) << 4;
            n[r++] = 128 | f & 63;
        } else {
            n[r++] = 224 | s >> 12 & 15;
            n[r++] = 128 | s >> 6 & 63;
            n[r++] = 128 | s & 63;
        }
        if (r > a) {
            t.push(n.slice(0, r));
            r = 0;
            n = Tt(65535);
            a = 65530;
        }
    }
    t.push(n.slice(0, r));
    return bconcat(t);
}
const _r = /\u0000/g;
const ka = /[\u0001-\u0006]/g;
function aa(e) {
    let t = "";
    for(let r = e.length - 1; r >= 0;){
        t += e.charAt(r--);
    }
    return t;
}
function Yr(e, t) {
    const r = `${e}`;
    if (r.length >= t) {
        return r;
    }
    return $e("0", t - r.length) + r;
}
function xn(e, t) {
    const r = `${e}`;
    if (r.length >= t) {
        return r;
    }
    return $e(" ", t - r.length) + r;
}
function h0(e, t) {
    const r = `${e}`;
    if (r.length >= t) {
        return r;
    }
    return r + $e(" ", t - r.length);
}
function Kc(e, t) {
    const r = `${Math.round(e)}`;
    if (r.length >= t) {
        return r;
    }
    return $e("0", t - r.length) + r;
}
function Yc(e, t) {
    const r = `${e}`;
    if (r.length >= t) {
        return r;
    }
    return $e("0", t - r.length) + r;
}
const fi = 2 ** 32;
function Zt(e, t) {
    if (e > fi || e < -fi) {
        return Kc(e, t);
    }
    const r = Math.round(e);
    return Yc(r, t);
}
function x0(e, t) {
    t = t || 0;
    return e.length >= 7 + t && (e.charCodeAt(t) | 32) === 103 && (e.charCodeAt(t + 1) | 32) === 101 && (e.charCodeAt(t + 2) | 32) === 110 && (e.charCodeAt(t + 3) | 32) === 101 && (e.charCodeAt(t + 4) | 32) === 114 && (e.charCodeAt(t + 5) | 32) === 97 && (e.charCodeAt(t + 6) | 32) === 108;
}
const ci = [
    [
        "Sun",
        "Sunday"
    ],
    [
        "Mon",
        "Monday"
    ],
    [
        "Tue",
        "Tuesday"
    ],
    [
        "Wed",
        "Wednesday"
    ],
    [
        "Thu",
        "Thursday"
    ],
    [
        "Fri",
        "Friday"
    ],
    [
        "Sat",
        "Saturday"
    ]
];
const B0 = [
    [
        "J",
        "Jan",
        "January"
    ],
    [
        "F",
        "Feb",
        "February"
    ],
    [
        "M",
        "Mar",
        "March"
    ],
    [
        "A",
        "Apr",
        "April"
    ],
    [
        "M",
        "May",
        "May"
    ],
    [
        "J",
        "Jun",
        "June"
    ],
    [
        "J",
        "Jul",
        "July"
    ],
    [
        "A",
        "Aug",
        "August"
    ],
    [
        "S",
        "Sep",
        "September"
    ],
    [
        "O",
        "Oct",
        "October"
    ],
    [
        "N",
        "Nov",
        "November"
    ],
    [
        "D",
        "Dec",
        "December"
    ]
];
function jc(e) {
    if (!e) {
        e = {};
    }
    e[0] = "General";
    e[1] = "0";
    e[2] = "0.00";
    e[3] = "#,##0";
    e[4] = "#,##0.00";
    e[9] = "0%";
    e[10] = "0.00%";
    e[11] = "0.00E+00";
    e[12] = "# ?/?";
    e[13] = "# ??/??";
    e[14] = "m/d/yy";
    e[15] = "d-mmm-yy";
    e[16] = "d-mmm";
    e[17] = "mmm-yy";
    e[18] = "h:mm AM/PM";
    e[19] = "h:mm:ss AM/PM";
    e[20] = "h:mm";
    e[21] = "h:mm:ss";
    e[22] = "m/d/yy h:mm";
    e[37] = "#,##0 ;(#,##0)";
    e[38] = "#,##0 ;[Red](#,##0)";
    e[39] = "#,##0.00;(#,##0.00)";
    e[40] = "#,##0.00;[Red](#,##0.00)";
    e[45] = "mm:ss";
    e[46] = "[h]:mm:ss";
    e[47] = "mmss.0";
    e[48] = "##0.0E+0";
    e[49] = "@";
    e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "';
    return e;
}
let _table = {
    0: "General",
    1: "0",
    2: "0.00",
    3: "#,##0",
    4: "#,##0.00",
    9: "0%",
    10: "0.00%",
    11: "0.00E+00",
    12: "# ?/?",
    13: "# ??/??",
    14: "m/d/yy",
    15: "d-mmm-yy",
    16: "d-mmm",
    17: "mmm-yy",
    18: "h:mm AM/PM",
    19: "h:mm:ss AM/PM",
    20: "h:mm",
    21: "h:mm:ss",
    22: "m/d/yy h:mm",
    37: "#,##0 ;(#,##0)",
    38: "#,##0 ;[Red](#,##0)",
    39: "#,##0.00;(#,##0.00)",
    40: "#,##0.00;[Red](#,##0.00)",
    45: "mm:ss",
    46: "[h]:mm:ss",
    47: "mmss.0",
    48: "##0.0E+0",
    49: "@",
    56: '"上午/下午 "hh"時"mm"分"ss"秒 "'
};
const oi = {
    5: 37,
    6: 38,
    7: 39,
    8: 40,
    23: 0,
    24: 0,
    25: 0,
    26: 0,
    27: 14,
    28: 14,
    29: 14,
    30: 14,
    31: 14,
    50: 14,
    51: 14,
    52: 14,
    53: 14,
    54: 14,
    55: 14,
    56: 14,
    57: 14,
    58: 14,
    59: 1,
    60: 2,
    61: 3,
    62: 4,
    67: 9,
    68: 10,
    69: 12,
    70: 13,
    71: 14,
    72: 14,
    73: 15,
    74: 16,
    75: 17,
    76: 20,
    77: 21,
    78: 22,
    79: 45,
    80: 46,
    81: 47,
    82: 0
};
const Jc = {
    5: '"$"#,##0_);\\("$"#,##0\\)',
    63: '"$"#,##0_);\\("$"#,##0\\)',
    6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
    42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
    43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
    44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
};
function d0(e, t, r) {
    const a = e < 0 ? -1 : 1;
    for(var n = e * a, i = 0, s = 1, f = 0, c = 1, o = 0, l = 0, u = Math.floor(n); o < t && (u = Math.floor(n), f = u * s + i, l = u * o + c, !(n - u < 5e-8));){
        n = 1 / (n - u);
        i = s;
        s = f;
        c = o;
        o = l;
    }
    l > t && (o > t ? (l = c, f = i) : (l = o, f = s));
    if (!r) {
        return [
            0,
            a * f,
            l
        ];
    }
    const x = Math.floor(a * f / l);
    return [
        x,
        a * f - x * l,
        l
    ];
}
function parse_date_code(e, t, r) {
    if (e > 2958465 || e < 0) {
        return null;
    }
    let D = e | 0;
    let n = Math.floor(86400 * (e - D));
    let i = 0;
    let s = [];
    const f = {
        D,
        T: n,
        u: 86400 * (e - D) - n,
        y: 0,
        m: 0,
        d: 0,
        H: 0,
        M: 0,
        S: 0,
        q: 0
    };
    if (Math.abs(f.u) < 0.000001) {
        f.u = 0;
    }
    if (t && t.date1904) {
        D += 1462;
    }
    if (f.u > 0.9999) {
        f.u = 0;
        if (++n == 86400) {
            f.T = n = 0;
            ++D;
            ++f.D;
        }
    }
    if (D === 60) {
        s = r ? [
            1317,
            10,
            29
        ] : [
            1900,
            2,
            29
        ];
        i = 3;
    } else if (D === 0) {
        s = r ? [
            1317,
            8,
            29
        ] : [
            1900,
            1,
            0
        ];
        i = 6;
    } else {
        D > 60 && --D;
        const c = new Date(1900, 0, 1);
        c.setDate(c.getDate() + D - 1);
        s = [
            c.getFullYear(),
            c.getMonth() + 1,
            c.getDate()
        ];
        i = c.getDay();
        if (D < 60) {
            i = (i + 6) % 7;
        }
        if (r) {
            i = to(c, s);
        }
    }
    f.y = s[0];
    f.m = s[1];
    f.d = s[2];
    f.S = n % 60;
    n = Math.floor(n / 60);
    f.M = n % 60;
    n = Math.floor(n / 60);
    f.H = n;
    f.q = i;
    return f;
}
const ds = new Date(1899, 11, 31, 0, 0, 0);
const Zc = ds.getTime();
const qc = new Date(1900, 2, 1, 0, 0, 0);
function vs(e, t) {
    let r = e.getTime();
    if (t) {
        r -= 1461 * 24 * 60 * 60 * 1000;
    } else if (e >= qc) {
        r += 1440 * 60 * 1000;
    }
    return (r - (Zc + (e.getTimezoneOffset() - ds.getTimezoneOffset()) * 60000)) / (1440 * 60 * 1000);
}
function dn(e) {
    if (e.indexOf(".") == -1) {
        return e;
    }
    return e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function Qc(e) {
    if (e.indexOf("E") == -1) {
        return e;
    }
    return e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function eo(e) {
    const t = e < 0 ? 12 : 11;
    let r = dn(e.toFixed(12));
    if (r.length <= t || (r = e.toPrecision(10), r.length <= t)) {
        return r;
    }
    return e.toExponential(5);
}
function ro(e) {
    const t = dn(e.toFixed(11));
    if (t.length > (e < 0 ? 12 : 11) || t === "0" || t === "-0") {
        return e.toPrecision(6);
    }
    return t;
}
function Na(e) {
    const t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E);
    let r;
    if (t >= -4 && t <= -1) {
        r = e.toPrecision(10 + t);
    } else if (Math.abs(t) <= 9) {
        r = eo(e);
    } else if (t === 10) {
        r = e.toFixed(10).substr(0, 12);
    } else {
        r = ro(e);
    }
    return dn(Qc(r.toUpperCase()));
}
function Mt(e, t) {
    switch(typeof e){
        case "string":
            return e;
        case "boolean":
            if (e) {
                return "TRUE";
            }
            return "FALSE";
        case "number":
            if ((e | 0) === e) {
                return e.toString(10);
            }
            return Na(e);
        case "undefined":
            return "";
        case "object":
            if (e == null) {
                return "";
            }
            if (e instanceof Date) {
                return format(14, vs(e, t && t.date1904), t);
            }
    }
    throw new Error(`unsupported value in General format: ${e}`);
}
function to(e, t) {
    t[0] -= 581;
    let r = e.getDay();
    if (e < 60) {
        r = (r + 6) % 7;
    }
    return r;
}
function ao(e, t, r, a) {
    let n = "";
    let i = 0;
    let s = 0;
    let f = r.y;
    let c;
    let o = 0;
    switch(e){
        case 98:
            f = r.y + 543;
        case 121:
            switch(t.length){
                case 1:
                case 2:
                    c = f % 100;
                    o = 2;
                    break;
                default:
                    c = f % 10000;
                    o = 4;
                    break;
            }
            break;
        case 109:
            switch(t.length){
                case 1:
                case 2:
                    c = r.m;
                    o = t.length;
                    break;
                case 3:
                    return B0[r.m - 1][1];
                case 5:
                    return B0[r.m - 1][0];
                default:
                    return B0[r.m - 1][2];
            }
            break;
        case 100:
            switch(t.length){
                case 1:
                case 2:
                    c = r.d;
                    o = t.length;
                    break;
                case 3:
                    return ci[r.q][0];
                default:
                    return ci[r.q][1];
            }
            break;
        case 104:
            switch(t.length){
                case 1:
                case 2:
                    c = 1 + (r.H + 11) % 12;
                    o = t.length;
                    break;
                default:
                    throw `bad hour format: ${t}`;
            }
            break;
        case 72:
            switch(t.length){
                case 1:
                case 2:
                    c = r.H;
                    o = t.length;
                    break;
                default:
                    throw `bad hour format: ${t}`;
            }
            break;
        case 77:
            switch(t.length){
                case 1:
                case 2:
                    c = r.M;
                    o = t.length;
                    break;
                default:
                    throw `bad minute format: ${t}`;
            }
            break;
        case 115:
            if (t != "s" && t != "ss" && t != ".0" && t != ".00" && t != ".000") {
                throw `bad second format: ${t}`;
            }
            if (r.u === 0 && (t == "s" || t == "ss")) {
                return Yr(r.S, t.length);
            }
            if (a >= 2) {
                s = a === 3 ? 1000 : 100;
            } else {
                s = a === 1 ? 10 : 1;
            }
            i = Math.round(s * (r.S + r.u));
            if (i >= 60 * s) {
                i = 0;
            }
            if (t === "s") {
                if (i === 0) {
                    return "0";
                }
                return `${i / s}`;
            }
            return n = Yr(i, 2 + a), t === "ss" ? n.substr(0, 2) : `.${n.substr(2, t.length - 1)}`;
        case 90:
            switch(t){
                case "[h]":
                case "[hh]":
                    c = r.D * 24 + r.H;
                    break;
                case "[m]":
                case "[mm]":
                    c = (r.D * 24 + r.H) * 60 + r.M;
                    break;
                case "[s]":
                case "[ss]":
                    c = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u);
                    break;
                default:
                    throw `bad abstime format: ${t}`;
            }
            o = t.length === 3 ? 1 : 2;
            break;
        case 101:
            c = f;
            o = 1;
            break;
    }
    const l = o > 0 ? Yr(c, o) : "";
    return l;
}
function kt(e) {
    const t = 3;
    if (e.length <= t) {
        return e;
    }
    for(var r = e.length % t, a = e.substr(0, r); r != e.length; r += t){
        a += (a.length > 0 ? "," : "") + e.substr(r, t);
    }
    return a;
}
const ps = /%/g;
function no(e, t, r) {
    const a = t.replace(ps, "");
    const n = t.length - a.length;
    return ut(e, a, r * 10 ** (2 * n)) + $e("%", n);
}
function io(e, t, r) {
    for(var a = t.length - 1; t.charCodeAt(a - 1) === 44;){
        --a;
    }
    return ut(e, t.substr(0, a), r / 10 ** (3 * (t.length - a)));
}
function ms(e, t) {
    let r;
    const a = e.indexOf("E") - e.indexOf(".") - 1;
    if (e.match(/^#+0.0E\+0$/)) {
        if (t == 0) {
            return "0.0E+0";
        }
        if (t < 0) {
            return `-${ms(e, -t)}`;
        }
        let n = e.indexOf(".");
        if (n === -1) {
            n = e.indexOf("E");
        }
        let i = Math.floor(Math.log(t) * Math.LOG10E) % n;
        if (i < 0) {
            i += n;
        }
        r = (t / 10 ** i).toPrecision(a + 1 + (n + i) % n);
        if (r.indexOf("e") === -1) {
            const s = Math.floor(Math.log(t) * Math.LOG10E);
            for(r.indexOf(".") === -1 ? r = `${r.charAt(0)}.${r.substr(1)}E+${s - r.length + i}` : r += `E+${s - i}`; r.substr(0, 2) === "0.";){
                r = `${r.charAt(0) + r.substr(2, n)}.${r.substr(2 + n)}`;
                r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
            }
            r = r.replace(/\+-/, "-");
        }
        r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, (f, c, o, l)=>`${c + o + l.substr(0, (n + i) % n)}.${l.substr(i)}E`);
    } else {
        r = t.toExponential(a);
    }
    if (e.match(/E\+00$/) && r.match(/e[+-]\d$/)) {
        r = `${r.substr(0, r.length - 1)}0${r.charAt(r.length - 1)}`;
    }
    if (e.match(/E\-/) && r.match(/e\+/)) {
        r = r.replace(/e\+/, "e");
    }
    return r.replace("e", "E");
}
const gs = /# (\?+)( ?)\/( ?)(\d+)/;
function so(e, t, r) {
    const a = parseInt(e[4], 10);
    const n = Math.round(t * a);
    const i = Math.floor(n / a);
    const s = n - i * a;
    return `${r + (i === 0 ? "" : `${i}`)} ${s === 0 ? $e(" ", e[1].length + 1 + e[4].length) : `${xn(s, e[1].length) + e[2]}/${e[3]}${Yr(a, e[4].length)}`}`;
}
function fo(e, t, r) {
    return r + (t === 0 ? "" : `${t}`) + $e(" ", e[1].length + 2 + e[4].length);
}
const _s = /^#*0*\.([0#]+)/;
const ws = /\).*[0#]/;
const ks = /\(###\) ###\\?-####/;
function Sr(e) {
    let t = "";
    let r;
    for(let a = 0; a != e.length; ++a){
        switch(r = e.charCodeAt(a)){
            case 35:
                break;
            case 63:
                t += " ";
                break;
            case 48:
                t += "0";
                break;
            default:
                t += String.fromCharCode(r);
        }
    }
    return t;
}
function li(e, t) {
    const r = 10 ** t;
    return `${Math.round(e * r) / r}`;
}
function ui(e, t) {
    const r = e - Math.floor(e);
    const a = 10 ** t;
    if (t < `${Math.round(r * a)}`.length) {
        return 0;
    }
    return Math.round(r * a);
}
function co(e, t) {
    if (t < `${Math.round((e - Math.floor(e)) * 10 ** t)}`.length) {
        return 1;
    }
    return 0;
}
function oo(e) {
    if (e < 2147483647 && e > -2147483648) {
        return `${e >= 0 ? e | 0 : e - 1 | 0}`;
    }
    return `${Math.floor(e)}`;
}
function Ur(e, t, r) {
    if (e.charCodeAt(0) === 40 && !t.match(ws)) {
        const a = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
        if (r >= 0) {
            return Ur("n", a, r);
        }
        return `(${Ur("n", a, -r)})`;
    }
    if (t.charCodeAt(t.length - 1) === 44) {
        return io(e, t, r);
    }
    if (t.indexOf("%") !== -1) {
        return no(e, t, r);
    }
    if (t.indexOf("E") !== -1) {
        return ms(t, r);
    }
    if (t.charCodeAt(0) === 36) {
        return `\$${Ur(e, t.substr(t.charAt(1) == " " ? 2 : 1), r)}`;
    }
    let n;
    let i;
    let s;
    let f;
    const c = Math.abs(r);
    const o = r < 0 ? "-" : "";
    if (t.match(/^00+$/)) {
        return o + Zt(c, t.length);
    }
    if (t.match(/^[#?]+$/)) {
        n = Zt(r, 0);
        if (n === "0") {
            n = "";
        }
        if (n.length > t.length) {
            return n;
        }
        return Sr(t.substr(0, t.length - n.length)) + n;
    }
    if (i = t.match(gs)) {
        return so(i, c, o);
    }
    if (t.match(/^#+0+$/)) {
        return o + Zt(c, t.length - t.indexOf("0"));
    }
    if (i = t.match(_s)) {
        n = li(r, i[1].length).replace(/^([^\.]+)$/, `\$1.${Sr(i[1])}`).replace(/\.$/, `.${Sr(i[1])}`).replace(/\.(\d*)$/, (v, h)=>`.${h}${$e("0", Sr(i[1]).length - h.length)}`);
        if (t.indexOf("0.") !== -1) {
            return n;
        }
        return n.replace(/^0\./, ".");
    }
    t = t.replace(/^#+([0.])/, "$1");
    if (i = t.match(/^(0*)\.(#*)$/)) {
        return o + li(c, i[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
    }
    if (i = t.match(/^#{1,3},##0(\.?)$/)) {
        return o + kt(Zt(c, 0));
    }
    if (i = t.match(/^#,##0\.([#0]*0)$/)) {
        if (r < 0) {
            return `-${Ur(e, t, -r)}`;
        }
        return `${kt(`${Math.floor(r) + co(r, i[1].length)}`)}.${Yr(ui(r, i[1].length), i[1].length)}`;
    }
    if (i = t.match(/^#,#*,#0/)) {
        return Ur(e, t.replace(/^#,#*,/, ""), r);
    }
    if (i = t.match(/^([0#]+)(\\?-([0#]+))+$/)) {
        n = aa(Ur(e, t.replace(/[\\-]/g, ""), r));
        s = 0;
        return aa(aa(t.replace(/\\/g, "")).replace(/[0#]/g, (v)=>{
            if (s < n.length) {
                return n.charAt(s++);
            }
            if (v === "0") {
                return "0";
            }
            return "";
        }));
    }
    if (t.match(ks)) {
        n = Ur(e, "##########", r);
        return `(${n.substr(0, 3)}) ${n.substr(3, 3)}-${n.substr(6)}`;
    }
    let l = "";
    if (i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
        s = Math.min(i[4].length, 7);
        f = d0(c, 10 ** s - 1, false);
        n = `${o}`;
        l = ut("n", i[1], f[1]);
        if (l.charAt(l.length - 1) == " ") {
            l = `${l.substr(0, l.length - 1)}0`;
        }
        n += `${l + i[2]}/${i[3]}`;
        l = h0(f[2], s);
        if (l.length < i[4].length) {
            l = Sr(i[4].substr(i[4].length - l.length)) + l;
        }
        n += l;
        return n;
    }
    if (i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
        s = Math.min(Math.max(i[1].length, i[4].length), 7);
        f = d0(c, 10 ** s - 1, true);
        return `${o + (f[0] || (f[1] ? "" : "0"))} ${f[1] ? `${xn(f[1], s) + i[2]}/${i[3]}${h0(f[2], s)}` : $e(" ", 2 * s + 1 + i[2].length + i[3].length)}`;
    }
    if (i = t.match(/^[#0?]+$/)) {
        n = Zt(r, 0);
        if (t.length <= n.length) {
            return n;
        }
        return Sr(t.substr(0, t.length - n.length)) + n;
    }
    if (i = t.match(/^([#0?]+)\.([#0]+)$/)) {
        n = `${r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1")}`;
        s = n.indexOf(".");
        const u = t.indexOf(".") - s;
        const x = t.length - n.length - u;
        return Sr(t.substr(0, u) + n + t.substr(t.length - x));
    }
    if (i = t.match(/^00,000\.([#0]*0)$/)) {
        s = ui(r, i[1].length);
        if (r < 0) {
            return `-${Ur(e, t, -r)}`;
        }
        return `${kt(oo(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, (v)=>`00,${v.length < 3 ? Yr(0, 3 - v.length) : ""}${v}`)}.${Yr(s, i[1].length)}`;
    }
    switch(t){
        case "###,##0.00":
            return Ur(e, "#,##0.00", r);
        case "###,###":
        case "##,###":
        case "#,###":
            const d = kt(Zt(c, 0));
            if (d !== "0") {
                return o + d;
            }
            return "";
        case "###,###.00":
            return Ur(e, "###,##0.00", r).replace(/^0\./, ".");
        case "#,###.00":
            return Ur(e, "#,##0.00", r).replace(/^0\./, ".");
    }
    throw new Error(`unsupported format |${t}|`);
}
function lo(e, t, r) {
    for(var a = t.length - 1; t.charCodeAt(a - 1) === 44;){
        --a;
    }
    return ut(e, t.substr(0, a), r / 10 ** (3 * (t.length - a)));
}
function uo(e, t, r) {
    const a = t.replace(ps, "");
    const n = t.length - a.length;
    return ut(e, a, r * 10 ** (2 * n)) + $e("%", n);
}
function Es(e, t) {
    let r;
    const a = e.indexOf("E") - e.indexOf(".") - 1;
    if (e.match(/^#+0.0E\+0$/)) {
        if (t == 0) {
            return "0.0E+0";
        }
        if (t < 0) {
            return `-${Es(e, -t)}`;
        }
        let n = e.indexOf(".");
        if (n === -1) {
            n = e.indexOf("E");
        }
        let i = Math.floor(Math.log(t) * Math.LOG10E) % n;
        if (i < 0) {
            i += n;
        }
        r = (t / 10 ** i).toPrecision(a + 1 + (n + i) % n);
        if (!r.match(/[Ee]/)) {
            const s = Math.floor(Math.log(t) * Math.LOG10E);
            if (r.indexOf(".") === -1) {
                r = `${r.charAt(0)}.${r.substr(1)}E+${s - r.length + i}`;
            } else {
                r += `E+${s - i}`;
            }
            r = r.replace(/\+-/, "-");
        }
        r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, (f, c, o, l)=>`${c + o + l.substr(0, (n + i) % n)}.${l.substr(i)}E`);
    } else {
        r = t.toExponential(a);
    }
    if (e.match(/E\+00$/) && r.match(/e[+-]\d$/)) {
        r = `${r.substr(0, r.length - 1)}0${r.charAt(r.length - 1)}`;
    }
    if (e.match(/E\-/) && r.match(/e\+/)) {
        r = r.replace(/e\+/, "e");
    }
    return r.replace("e", "E");
}
function et(e, t, r) {
    if (e.charCodeAt(0) === 40 && !t.match(ws)) {
        const a = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
        if (r >= 0) {
            return et("n", a, r);
        }
        return `(${et("n", a, -r)})`;
    }
    if (t.charCodeAt(t.length - 1) === 44) {
        return lo(e, t, r);
    }
    if (t.indexOf("%") !== -1) {
        return uo(e, t, r);
    }
    if (t.indexOf("E") !== -1) {
        return Es(t, r);
    }
    if (t.charCodeAt(0) === 36) {
        return `\$${et(e, t.substr(t.charAt(1) == " " ? 2 : 1), r)}`;
    }
    let n;
    let i;
    let s;
    let f;
    const c = Math.abs(r);
    const o = r < 0 ? "-" : "";
    if (t.match(/^00+$/)) {
        return o + Yr(c, t.length);
    }
    if (t.match(/^[#?]+$/)) {
        n = `${r}`;
        if (r === 0) {
            n = "";
        }
        if (n.length > t.length) {
            return n;
        }
        return Sr(t.substr(0, t.length - n.length)) + n;
    }
    if (i = t.match(gs)) {
        return fo(i, c, o);
    }
    if (t.match(/^#+0+$/)) {
        return o + Yr(c, t.length - t.indexOf("0"));
    }
    if (i = t.match(_s)) {
        n = `${r}`.replace(/^([^\.]+)$/, `\$1.${Sr(i[1])}`).replace(/\.$/, `.${Sr(i[1])}`);
        n = n.replace(/\.(\d*)$/, (v, h)=>`.${h}${$e("0", Sr(i[1]).length - h.length)}`);
        if (t.indexOf("0.") !== -1) {
            return n;
        }
        return n.replace(/^0\./, ".");
    }
    t = t.replace(/^#+([0.])/, "$1");
    if (i = t.match(/^(0*)\.(#*)$/)) {
        return o + `${c}`.replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
    }
    if (i = t.match(/^#{1,3},##0(\.?)$/)) {
        return o + kt(`${c}`);
    }
    if (i = t.match(/^#,##0\.([#0]*0)$/)) {
        if (r < 0) {
            return `-${et(e, t, -r)}`;
        }
        return `${kt(`${r}`)}.${$e("0", i[1].length)}`;
    }
    if (i = t.match(/^#,#*,#0/)) {
        return et(e, t.replace(/^#,#*,/, ""), r);
    }
    if (i = t.match(/^([0#]+)(\\?-([0#]+))+$/)) {
        n = aa(et(e, t.replace(/[\\-]/g, ""), r));
        s = 0;
        return aa(aa(t.replace(/\\/g, "")).replace(/[0#]/g, (v)=>{
            if (s < n.length) {
                return n.charAt(s++);
            }
            if (v === "0") {
                return "0";
            }
            return "";
        }));
    }
    if (t.match(ks)) {
        n = et(e, "##########", r);
        return `(${n.substr(0, 3)}) ${n.substr(3, 3)}-${n.substr(6)}`;
    }
    let l = "";
    if (i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
        s = Math.min(i[4].length, 7);
        f = d0(c, 10 ** s - 1, false);
        n = `${o}`;
        l = ut("n", i[1], f[1]);
        if (l.charAt(l.length - 1) == " ") {
            l = `${l.substr(0, l.length - 1)}0`;
        }
        n += `${l + i[2]}/${i[3]}`;
        l = h0(f[2], s);
        if (l.length < i[4].length) {
            l = Sr(i[4].substr(i[4].length - l.length)) + l;
        }
        n += l;
        return n;
    }
    if (i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
        s = Math.min(Math.max(i[1].length, i[4].length), 7);
        f = d0(c, 10 ** s - 1, true);
        return `${o + (f[0] || (f[1] ? "" : "0"))} ${f[1] ? `${xn(f[1], s) + i[2]}/${i[3]}${h0(f[2], s)}` : $e(" ", 2 * s + 1 + i[2].length + i[3].length)}`;
    }
    if (i = t.match(/^[#0?]+$/)) {
        n = `${r}`;
        if (t.length <= n.length) {
            return n;
        }
        return Sr(t.substr(0, t.length - n.length)) + n;
    }
    if (i = t.match(/^([#0]+)\.([#0]+)$/)) {
        n = `${r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1")}`;
        s = n.indexOf(".");
        const u = t.indexOf(".") - s;
        const x = t.length - n.length - u;
        return Sr(t.substr(0, u) + n + t.substr(t.length - x));
    }
    if (i = t.match(/^00,000\.([#0]*0)$/)) {
        if (r < 0) {
            return `-${et(e, t, -r)}`;
        }
        return `${kt(`${r}`).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, (v)=>`00,${v.length < 3 ? Yr(0, 3 - v.length) : ""}${v}`)}.${Yr(0, i[1].length)}`;
    }
    switch(t){
        case "###,###":
        case "##,###":
        case "#,###":
            const d = kt(`${c}`);
            if (d !== "0") {
                return o + d;
            }
            return "";
        default:
            if (t.match(/\.[0#?]*$/)) {
                return et(e, t.slice(0, t.lastIndexOf(".")), r) + Sr(t.slice(t.lastIndexOf(".")));
            }
    }
    throw new Error(`unsupported format |${t}|`);
}
function ut(e, t, r) {
    if ((r | 0) === r) {
        return et(e, t, r);
    }
    return Ur(e, t, r);
}
function ho(e) {
    const t = [];
    let r = false;
    for(var a = 0, n = 0; a < e.length; ++a){
        switch(e.charCodeAt(a)){
            case 34:
                r = !r;
                break;
            case 95:
            case 42:
            case 92:
                ++a;
                break;
            case 59:
                t[t.length] = e.substr(n, a - n);
                n = a + 1;
        }
    }
    t[t.length] = e.substr(n);
    if (r === true) {
        throw new Error(`Format |${e}| unterminated string `);
    }
    return t;
}
const Ts = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function is_date(e) {
    for(let t = 0, r = "", a = ""; t < e.length;){
        switch(r = e.charAt(t)){
            case "G":
                if (x0(e, t)) {
                    t += 6;
                }
                t++;
                break;
            case '"':
                while(e.charCodeAt(++t) !== 34 && t < e.length);
                ++t;
                break;
            case "\\":
                t += 2;
                break;
            case "_":
                t += 2;
                break;
            case "@":
                ++t;
                break;
            case "B":
            case "b":
                if (e.charAt(t + 1) === "1" || e.charAt(t + 1) === "2") {
                    return true;
                }
            case "M":
            case "D":
            case "Y":
            case "H":
            case "S":
            case "E":
            case "m":
            case "d":
            case "y":
            case "h":
            case "s":
            case "e":
            case "g":
                return true;
            case "A":
            case "a":
            case "上":
                if (e.substr(t, 3).toUpperCase() === "A/P" || e.substr(t, 5).toUpperCase() === "AM/PM" || e.substr(t, 5).toUpperCase() === "上午/下午") {
                    return true;
                }
                ++t;
                break;
            case "[":
                for(a = r; e.charAt(t++) !== "]" && t < e.length;){
                    a += e.charAt(t);
                }
                if (a.match(Ts)) {
                    return true;
                }
                break;
            case ".":
            case "0":
            case "#":
                while(t < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++t)) > -1 || r == "\\" && e.charAt(t + 1) == "-" && "0#".indexOf(e.charAt(t + 2)) > -1));
                break;
            case "?":
                while(e.charAt(++t) === r);
                break;
            case "*":
                ++t;
                (e.charAt(t) == " " || e.charAt(t) == "*") && ++t;
                break;
            case "(":
            case ")":
                ++t;
                break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                while(t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1);
                break;
            case " ":
                ++t;
                break;
            default:
                ++t;
                break;
        }
    }
    return false;
}
function xo(e, t, r, a) {
    const n = [];
    let i = "";
    let o;
    let l;
    let u;
    for(var s = 0, f = "", c = "t", x = "H"; s < e.length;){
        switch(f = e.charAt(s)){
            case "G":
                if (!x0(e, s)) {
                    throw new Error(`unrecognized character ${f} in ${e}`);
                }
                n[n.length] = {
                    t: "G",
                    v: "General"
                };
                s += 7;
                break;
            case '"':
                for(i = ""; (u = e.charCodeAt(++s)) !== 34 && s < e.length;){
                    i += String.fromCharCode(u);
                }
                n[n.length] = {
                    t: "t",
                    v: i
                };
                ++s;
                break;
            case "\\":
                const d = e.charAt(++s);
                const v = d === "(" || d === ")" ? d : "t";
                n[n.length] = {
                    t: v,
                    v: d
                };
                ++s;
                break;
            case "_":
                n[n.length] = {
                    t: "t",
                    v: " "
                };
                s += 2;
                break;
            case "@":
                n[n.length] = {
                    t: "T",
                    v: t
                };
                ++s;
                break;
            case "B":
            case "b":
                if (e.charAt(s + 1) === "1" || e.charAt(s + 1) === "2") {
                    if (o == null && (o = parse_date_code(t, r, e.charAt(s + 1) === "2"), o == null)) {
                        return "";
                    }
                    n[n.length] = {
                        t: "X",
                        v: e.substr(s, 2)
                    };
                    c = f;
                    s += 2;
                    break;
                }
            case "M":
            case "D":
            case "Y":
            case "H":
            case "S":
            case "E":
                f = f.toLowerCase();
            case "m":
            case "d":
            case "y":
            case "h":
            case "s":
            case "e":
            case "g":
                if (t < 0 || o == null && (o = parse_date_code(t, r), o == null)) {
                    return "";
                }
                for(i = f; ++s < e.length && e.charAt(s).toLowerCase() === f;){
                    i += f;
                }
                if (f === "m" && c.toLowerCase() === "h") {
                    f = "M";
                }
                if (f === "h") {
                    f = x;
                }
                n[n.length] = {
                    t: f,
                    v: i
                };
                c = f;
                break;
            case "A":
            case "a":
            case "上":
                const h = {
                    t: f,
                    v: f
                };
                if (o == null) {
                    o = parse_date_code(t, r);
                }
                if (e.substr(s, 3).toUpperCase() === "A/P") {
                    if (o != null) {
                        h.v = o.H >= 12 ? "P" : "A";
                    }
                    h.t = "T";
                    x = "h";
                    s += 3;
                } else if (e.substr(s, 5).toUpperCase() === "AM/PM") {
                    if (o != null) {
                        h.v = o.H >= 12 ? "PM" : "AM";
                    }
                    h.t = "T";
                    s += 5;
                    x = "h";
                } else if (e.substr(s, 5).toUpperCase() === "上午/下午") {
                    if (o != null) {
                        h.v = o.H >= 12 ? "下午" : "上午";
                    }
                    h.t = "T";
                    s += 5;
                    x = "h";
                } else {
                    h.t = "t";
                    ++s;
                }
                if (o == null && h.t === "T") {
                    return "";
                }
                n[n.length] = h;
                c = f;
                break;
            case "[":
                for(i = f; e.charAt(s++) !== "]" && s < e.length;){
                    i += e.charAt(s);
                }
                if (i.slice(-1) !== "]") {
                    throw `unterminated "[" block: |${i}|`;
                }
                if (i.match(Ts)) {
                    if (o == null && (o = parse_date_code(t, r), o == null)) {
                        return "";
                    }
                    n[n.length] = {
                        t: "Z",
                        v: i.toLowerCase()
                    };
                    c = i.charAt(1);
                } else {
                    if (i.indexOf("$") > -1) {
                        i = (i.match(/\$([^-\[\]]*)/) || [])[1] || "$";
                        if (!is_date(e)) {
                            n[n.length] = {
                                t: "t",
                                v: i
                            };
                        }
                    }
                }
                break;
            case ".":
                if (o != null) {
                    for(i = f; ++s < e.length && (f = e.charAt(s)) === "0";){
                        i += f;
                    }
                    n[n.length] = {
                        t: "s",
                        v: i
                    };
                    break;
                }
            case "0":
            case "#":
                for(i = f; ++s < e.length && "0#?.,E+-%".indexOf(f = e.charAt(s)) > -1;){
                    i += f;
                }
                n[n.length] = {
                    t: "n",
                    v: i
                };
                break;
            case "?":
                for(i = f; e.charAt(++s) === f;){
                    i += f;
                }
                n[n.length] = {
                    t: f,
                    v: i
                };
                c = f;
                break;
            case "*":
                ++s;
                (e.charAt(s) == " " || e.charAt(s) == "*") && ++s;
                break;
            case "(":
            case ")":
                n[n.length] = {
                    t: a === 1 ? "t" : f,
                    v: f
                };
                ++s;
                break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                for(i = f; s < e.length && "0123456789".indexOf(e.charAt(++s)) > -1;){
                    i += e.charAt(s);
                }
                n[n.length] = {
                    t: "D",
                    v: i
                };
                break;
            case " ":
                n[n.length] = {
                    t: f,
                    v: f
                };
                ++s;
                break;
            case "$":
                n[n.length] = {
                    t: "t",
                    v: "$"
                };
                ++s;
                break;
            default:
                if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(f) === -1) {
                    throw new Error(`unrecognized character ${f} in ${e}`);
                }
                n[n.length] = {
                    t: "t",
                    v: f
                };
                ++s;
                break;
        }
    }
    let p = 0;
    let w = 0;
    let y;
    s = n.length - 1;
    for(c = "t"; s >= 0; --s){
        switch(n[s].t){
            case "h":
            case "H":
                n[s].t = x;
                c = "h";
                if (p < 1) {
                    p = 1;
                }
                break;
            case "s":
                if (y = n[s].v.match(/\.0+$/)) {
                    w = Math.max(w, y[0].length - 1);
                }
                if (p < 3) {
                    p = 3;
                }
            case "d":
            case "y":
            case "M":
            case "e":
                c = n[s].t;
                break;
            case "m":
                if (c === "s") {
                    n[s].t = "M";
                    if (p < 2) {
                        p = 2;
                    }
                }
                break;
            case "X":
                break;
            case "Z":
                if (p < 1 && n[s].v.match(/[Hh]/)) {
                    p = 1;
                }
                if (p < 2 && n[s].v.match(/[Mm]/)) {
                    p = 2;
                }
                if (p < 3 && n[s].v.match(/[Ss]/)) {
                    p = 3;
                }
        }
    }
    switch(p){
        case 0:
            break;
        case 1:
            if (o.u >= 0.5) {
                o.u = 0;
                ++o.S;
            }
            if (o.S >= 60) {
                o.S = 0;
                ++o.M;
            }
            if (o.M >= 60) {
                o.M = 0;
                ++o.H;
            }
            break;
        case 2:
            if (o.u >= 0.5) {
                o.u = 0;
                ++o.S;
            }
            if (o.S >= 60) {
                o.S = 0;
                ++o.M;
            }
            break;
    }
    let g = "";
    let D;
    for(s = 0; s < n.length; ++s){
        switch(n[s].t){
            case "t":
            case "T":
            case " ":
            case "D":
                break;
            case "X":
                n[s].v = "";
                n[s].t = ";";
                break;
            case "d":
            case "m":
            case "y":
            case "h":
            case "H":
            case "M":
            case "s":
            case "e":
            case "b":
            case "Z":
                n[s].v = ao(n[s].t.charCodeAt(0), n[s].v, o, w);
                n[s].t = "t";
                break;
            case "n":
            case "?":
                for(D = s + 1; n[D] != null && ((f = n[D].t) === "?" || f === "D" || (f === " " || f === "t") && n[D + 1] != null && (n[D + 1].t === "?" || n[D + 1].t === "t" && n[D + 1].v === "/") || n[s].t === "(" && (f === " " || f === "n" || f === ")") || f === "t" && (n[D].v === "/" || n[D].v === " " && n[D + 1] != null && n[D + 1].t == "?"));){
                    n[s].v += n[D].v;
                    n[D] = {
                        v: "",
                        t: ";"
                    };
                    ++D;
                }
                g += n[s].v;
                s = D - 1;
                break;
            case "G":
                n[s].t = "t";
                n[s].v = Mt(t, r);
                break;
        }
    }
    let b = "";
    let N;
    let F;
    if (g.length > 0) {
        if (g.charCodeAt(0) == 40) {
            N = t < 0 && g.charCodeAt(0) === 45 ? -t : t;
            F = ut("n", g, N);
        } else {
            N = t < 0 && a > 1 ? -t : t;
            F = ut("n", g, N);
            if (N < 0 && n[0] && n[0].t == "t") {
                F = F.substr(1);
                n[0].v = `-${n[0].v}`;
            }
        }
        D = F.length - 1;
        let B = n.length;
        for(s = 0; s < n.length; ++s){
            if (n[s] != null && n[s].t != "t" && n[s].v.indexOf(".") > -1) {
                B = s;
                break;
            }
        }
        let I = n.length;
        if (B === n.length && F.indexOf("E") === -1) {
            for(s = n.length - 1; s >= 0; --s){
                if (!(n[s] == null || "n?".indexOf(n[s].t) === -1)) {
                    if (D >= n[s].v.length - 1) {
                        D -= n[s].v.length;
                        n[s].v = F.substr(D + 1, n[s].v.length);
                    } else if (D < 0) {
                        n[s].v = "";
                    } else {
                        n[s].v = F.substr(0, D + 1);
                        D = -1;
                    }
                    n[s].t = "t";
                    I = s;
                }
            }
            if (D >= 0 && I < n.length) {
                n[I].v = F.substr(0, D + 1) + n[I].v;
            }
        } else if (B !== n.length && F.indexOf("E") === -1) {
            D = F.indexOf(".") - 1;
            for(s = B; s >= 0; --s){
                if (!(n[s] == null || "n?".indexOf(n[s].t) === -1)) {
                    l = n[s].v.indexOf(".") > -1 && s === B ? n[s].v.indexOf(".") - 1 : n[s].v.length - 1;
                    for(b = n[s].v.substr(l + 1); l >= 0; --l){
                        if (D >= 0 && (n[s].v.charAt(l) === "0" || n[s].v.charAt(l) === "#")) {
                            b = F.charAt(D--) + b;
                        }
                    }
                    n[s].v = b;
                    n[s].t = "t";
                    I = s;
                }
            }
            if (D >= 0 && I < n.length) {
                n[I].v = F.substr(0, D + 1) + n[I].v;
            }
            D = F.indexOf(".") + 1;
            for(s = B; s < n.length; ++s){
                if (!(n[s] == null || "n?(".indexOf(n[s].t) === -1 && s !== B)) {
                    l = n[s].v.indexOf(".") > -1 && s === B ? n[s].v.indexOf(".") + 1 : 0;
                    for(b = n[s].v.substr(0, l); l < n[s].v.length; ++l){
                        if (D < F.length) {
                            b += F.charAt(D++);
                        }
                    }
                    n[s].v = b;
                    n[s].t = "t";
                    I = s;
                }
            }
        }
    }
    for(s = 0; s < n.length; ++s){
        if (n[s] != null && "n?".indexOf(n[s].t) > -1) {
            N = a > 1 && t < 0 && s > 0 && n[s - 1].v === "-" ? -t : t;
            n[s].v = ut(n[s].t, n[s].v, N);
            n[s].t = "t";
        }
    }
    let z = "";
    for(s = 0; s !== n.length; ++s){
        if (n[s] != null) {
            z += n[s].v;
        }
    }
    return z;
}
const hi = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function xi(e, t) {
    if (t == null) {
        return false;
    }
    const r = parseFloat(t[2]);
    switch(t[1]){
        case "=":
            if (e == r) {
                return true;
            }
            break;
        case ">":
            if (e > r) {
                return true;
            }
            break;
        case "<":
            if (e < r) {
                return true;
            }
            break;
        case "<>":
            if (e != r) {
                return true;
            }
            break;
        case ">=":
            if (e >= r) {
                return true;
            }
            break;
        case "<=":
            if (e <= r) {
                return true;
            }
            break;
    }
    return false;
}
function vo(e, t) {
    let r = ho(e);
    let r_length = r.length;
    const n = r[r_length - 1].indexOf("@");
    r_length < 4 && n > -1 && --r_length;
    if (r.length > 4) {
        throw new Error(`cannot find right format for |${r.join("|")}|`);
    }
    if (typeof t !== "number") {
        return [
            4,
            r.length === 4 || n > -1 ? r[r.length - 1] : "@"
        ];
    }
    switch(r.length){
        case 1:
            r = n > -1 ? [
                "General",
                "General",
                "General",
                r[0]
            ] : [
                r[0],
                r[0],
                r[0],
                "@"
            ];
            break;
        case 2:
            r = n > -1 ? [
                r[0],
                r[0],
                r[0],
                r[1]
            ] : [
                r[0],
                r[1],
                r[0],
                "@"
            ];
            break;
        case 3:
            r = n > -1 ? [
                r[0],
                r[1],
                r[0],
                r[2]
            ] : [
                r[0],
                r[1],
                r[2],
                "@"
            ];
            break;
    }
    const i = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
    if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1) {
        return [
            r_length,
            i
        ];
    }
    if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
        const s = r[0].match(hi);
        const f = r[1].match(hi);
        if (xi(t, s)) {
            return [
                r_length,
                r[0]
            ];
        }
        if (xi(t, f)) {
            return [
                r_length,
                r[1]
            ];
        }
        return [
            r_length,
            r[s != null && f != null ? 2 : 1]
        ];
    }
    return [
        r_length,
        i
    ];
}
function format(e, t, r) {
    if (r == null) {
        r = {};
    }
    let a = "";
    switch(typeof e){
        case "string":
            if (e == "m/d/yy" && r.dateNF) {
                a = r.dateNF;
            } else {
                a = e;
            }
            break;
        case "number":
            if (e == 14 && r.dateNF) {
                a = r.dateNF;
            } else {
                a = (r.table ?? _table)[e];
            }
            if (a == null) {
                a = r.table && r.table[oi[e]] || _table[oi[e]];
            }
            if (a == null) {
                a = Jc[e] || "General";
            }
            break;
    }
    if (x0(a, 0)) {
        return Mt(t, r);
    }
    if (t instanceof Date) {
        t = vs(t, r.date1904);
    }
    const n = vo(a, t);
    if (x0(n[1])) {
        return Mt(t, r);
    }
    if (t === true) {
        t = "TRUE";
    } else if (t === false) {
        t = "FALSE";
    } else if (t === "" || t == null) {
        return "";
    }
    return xo(n[1], t, r, n[0]);
}
function load(e, t) {
    if (typeof t !== "number") {
        t = +t || -1;
        for(let r = 0; r < 392; ++r){
            if (_table[r] == null) {
                if (t < 0) {
                    t = r;
                }
                continue;
            }
            if (_table[r] == e) {
                t = r;
                break;
            }
        }
        if (t < 0) {
            t = 391;
        }
    }
    _table[t] = e;
    return t;
}
function load_table(e) {
    for(let t = 0; t != 392; ++t){
        if (e[t] !== undefined) {
            load(e[t], t);
        }
    }
}
function la() {
    _table = jc();
}
export var SSF = {
    format,
    load,
    _table,
    load_table,
    parse_date_code,
    is_date,
    get_table () {
        return SSF._table = _table;
    }
};
const mo = {
    5: '"$"#,##0_);\\("$"#,##0\\)',
    6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    23: "General",
    24: "General",
    25: "General",
    26: "General",
    27: "m/d/yy",
    28: "m/d/yy",
    29: "m/d/yy",
    30: "m/d/yy",
    31: "m/d/yy",
    32: "h:mm:ss",
    33: "h:mm:ss",
    34: "h:mm:ss",
    35: "h:mm:ss",
    36: "m/d/yy",
    41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
    42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
    43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
    44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
    50: "m/d/yy",
    51: "m/d/yy",
    52: "m/d/yy",
    53: "m/d/yy",
    54: "m/d/yy",
    55: "m/d/yy",
    56: "m/d/yy",
    57: "m/d/yy",
    58: "m/d/yy",
    59: "0",
    60: "0.00",
    61: "#,##0",
    62: "#,##0.00",
    63: '"$"#,##0_);\\("$"#,##0\\)',
    64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    67: "0%",
    68: "0.00%",
    69: "# ?/?",
    70: "# ??/??",
    71: "m/d/yy",
    72: "m/d/yy",
    73: "d-mmm-yy",
    74: "d-mmm",
    75: "mmm-yy",
    76: "h:mm",
    77: "h:mm:ss",
    78: "m/d/yy h:mm",
    79: "mm:ss",
    80: "[h]:mm:ss",
    81: "mmss.0"
};
const Ss = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function go(dateNF) {
    let t = typeof dateNF === "number" ? _table[dateNF] : dateNF;
    t = t.replace(Ss, "(\\d+)");
    return new RegExp(`^${t}\$`);
}
function _o(e, dateNF, r) {
    let a = -1;
    let n = -1;
    let i = -1;
    let s = -1;
    let f = -1;
    let c = -1;
    (dateNF.match(Ss) || []).forEach((u, x)=>{
        const d = parseInt(r[x + 1], 10);
        switch(u.toLowerCase().charAt(0)){
            case "y":
                a = d;
                break;
            case "d":
                i = d;
                break;
            case "h":
                s = d;
                break;
            case "s":
                c = d;
                break;
            case "m":
                if (s >= 0) {
                    f = d;
                } else {
                    n = d;
                }
                break;
        }
    });
    if (c >= 0 && f == -1 && n >= 0) {
        f = n;
        n = -1;
    }
    let o = `${`${a >= 0 ? a : new Date().getFullYear()}`.slice(-4)}-${`00${n >= 1 ? n : 1}`.slice(-2)}-${`00${i >= 1 ? i : 1}`.slice(-2)}`;
    if (o.length == 7) {
        o = `0${o}`;
    }
    if (o.length == 8) {
        o = `20${o}`;
    }
    const l = `${`00${s >= 0 ? s : 0}`.slice(-2)}:${`00${f >= 0 ? f : 0}`.slice(-2)}:${`00${c >= 0 ? c : 0}`.slice(-2)}`;
    if (s == -1 && f == -1 && c == -1) {
        return o;
    }
    if (a == -1 && n == -1 && i == -1) {
        return l;
    }
    return `${o}T${l}`;
}
const wo = (()=>{
    const e = {};
    e.version = "1.2.0";
    function t() {
        let F = 0;
        const B = new Array(256);
        for(let I = 0; I != 256; ++I){
            F = I;
            F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1;
            F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1;
            F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1;
            F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1;
            F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1;
            F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1;
            F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1;
            F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1;
            B[I] = F;
        }
        if (typeof Int32Array !== "undefined") {
            return new Int32Array(B);
        }
        return B;
    }
    const r = t();
    function a(F) {
        let B = 0;
        let I = 0;
        let z = 0;
        const X = typeof Int32Array !== "undefined" ? new Int32Array(4096) : new Array(4096);
        for(z = 0; z != 256; ++z){
            X[z] = F[z];
        }
        for(z = 0; z != 256; ++z){
            I = F[z];
            for(B = 256 + z; B < 4096; B += 256){
                I = X[B] = I >>> 8 ^ F[I & 255];
            }
        }
        const L = [];
        for(z = 1; z != 16; ++z){
            L[z - 1] = typeof Int32Array !== "undefined" ? X.subarray(z * 256, z * 256 + 256) : X.slice(z * 256, z * 256 + 256);
        }
        return L;
    }
    const n = a(r);
    const i = n[0];
    const s = n[1];
    const f = n[2];
    const c = n[3];
    const o = n[4];
    const l = n[5];
    const u = n[6];
    const x = n[7];
    const d = n[8];
    const v = n[9];
    const h = n[10];
    const p = n[11];
    const w = n[12];
    const y = n[13];
    const g = n[14];
    function D(F, B) {
        let I = B ^ -1;
        for(let z = 0, X = F.length; z < X;){
            I = I >>> 8 ^ r[(I ^ F.charCodeAt(z++)) & 255];
        }
        return ~I;
    }
    function b(F, B) {
        let I = B ^ -1;
        for(var z = F.length - 15, X = 0; X < z;){
            I = g[F[X++] ^ I & 255] ^ y[F[X++] ^ I >> 8 & 255] ^ w[F[X++] ^ I >> 16 & 255] ^ p[F[X++] ^ I >>> 24] ^ h[F[X++]] ^ v[F[X++]] ^ d[F[X++]] ^ x[F[X++]] ^ u[F[X++]] ^ l[F[X++]] ^ o[F[X++]] ^ c[F[X++]] ^ f[F[X++]] ^ s[F[X++]] ^ i[F[X++]] ^ r[F[X++]];
        }
        for(z += 15; X < z;){
            I = I >>> 8 ^ r[(I ^ F[X++]) & 255];
        }
        return ~I;
    }
    function N(F, B) {
        let I = B ^ -1;
        for(let z = 0, X = F.length, L = 0, J = 0; z < X;){
            L = F.charCodeAt(z++);
            if (L < 128) {
                I = I >>> 8 ^ r[(I ^ L) & 255];
            } else if (L < 2048) {
                I = I >>> 8 ^ r[(I ^ (192 | L >> 6 & 31)) & 255];
                I = I >>> 8 ^ r[(I ^ (128 | L & 63)) & 255];
            } else if (L >= 55296 && L < 57344) {
                L = (L & 1023) + 64;
                J = F.charCodeAt(z++) & 1023;
                I = I >>> 8 ^ r[(I ^ (240 | L >> 8 & 7)) & 255];
                I = I >>> 8 ^ r[(I ^ (128 | L >> 2 & 63)) & 255];
                I = I >>> 8 ^ r[(I ^ (128 | J >> 6 & 15 | (L & 3) << 4)) & 255];
                I = I >>> 8 ^ r[(I ^ (128 | J & 63)) & 255];
            } else {
                I = I >>> 8 ^ r[(I ^ (224 | L >> 12 & 15)) & 255];
                I = I >>> 8 ^ r[(I ^ (128 | L >> 6 & 63)) & 255];
                I = I >>> 8 ^ r[(I ^ (128 | L & 63)) & 255];
            }
        }
        return ~I;
    }
    e.table = r;
    e.bstr = D;
    e.buf = b;
    e.str = N;
    return e;
})();
export var CFB = (()=>{
    const t = {};
    t.version = "1.2.1";
    function r(m, E) {
        const _ = m.split("/");
        const k = E.split("/");
        for(let T = 0, S = 0, U = Math.min(_.length, k.length); T < U; ++T){
            if (S = _[T].length - k[T].length) {
                return S;
            }
            if (_[T] != k[T]) {
                if (_[T] < k[T]) {
                    return -1;
                }
                return 1;
            }
        }
        return _.length - k.length;
    }
    function a(m) {
        if (m.charAt(m.length - 1) == "/") {
            if (m.slice(0, -1).indexOf("/") === -1) {
                return m;
            }
            return a(m.slice(0, -1));
        }
        const E = m.lastIndexOf("/");
        if (E === -1) {
            return m;
        }
        return m.slice(0, E + 1);
    }
    function n(m) {
        if (m.charAt(m.length - 1) == "/") {
            return n(m.slice(0, -1));
        }
        const E = m.lastIndexOf("/");
        if (E === -1) {
            return m;
        }
        return m.slice(E + 1);
    }
    function i(m, E) {
        if (typeof E === "string") {
            E = new Date(E);
        }
        let _ = E.getHours();
        _ = _ << 6 | E.getMinutes();
        _ = _ << 5 | E.getSeconds() >>> 1;
        m.write_shift(2, _);
        let k = E.getFullYear() - 1980;
        k = k << 4 | E.getMonth() + 1;
        k = k << 5 | E.getDate();
        m.write_shift(2, k);
    }
    function s(m) {
        let E = m.read_shift(2) & 65535;
        let _ = m.read_shift(2) & 65535;
        const k = new Date;
        const T = _ & 31;
        _ >>>= 5;
        const S = _ & 15;
        _ >>>= 4;
        k.setMilliseconds(0);
        k.setFullYear(_ + 1980);
        k.setMonth(S - 1);
        k.setDate(T);
        const U = E & 31;
        E >>>= 5;
        const K = E & 63;
        E >>>= 6;
        k.setHours(E);
        k.setMinutes(K);
        k.setSeconds(U << 1);
        return k;
    }
    function f(m) {
        prep_blob(m, 0);
        const E = {};
        let _ = 0;
        while(m.l <= m.length - 4){
            const k = m.read_shift(2);
            const T = m.read_shift(2);
            const S = m.l + T;
            const U = {};
            if (k === 21589) {
                _ = m.read_shift(1);
                if (_ & 1) {
                    U.mtime = m.read_shift(4);
                }
                T > 5 && (_ & 2 && (U.atime = m.read_shift(4)), _ & 4 && (U.ctime = m.read_shift(4)));
                if (U.mtime) {
                    U.mt = new Date(U.mtime * 1000);
                }
            }
            m.l = S;
            E[k] = U;
        }
        return E;
    }
    let c;
    function o() {
        return c || (c = {});
    }
    function l(m, E) {
        if (m[0] == 80 && m[1] == 75) {
            return ii(m, E);
        }
        if ((m[0] | 32) == 109 && (m[1] | 32) == 105) {
            return Lc(m, E);
        }
        if (m.length < 512) {
            throw new Error(`CFB file size ${m.length} < 512`);
        }
        let _ = 3;
        let k = 512;
        let T = 0;
        let S = 0;
        let U = 0;
        let K = 0;
        let M = 0;
        const W = [];
        let H = m.slice(0, 512);
        prep_blob(H, 0);
        const q = u(H);
        _ = q[0];
        switch(_){
            case 3:
                k = 512;
                break;
            case 4:
                k = 4096;
                break;
            case 0:
                if (q[1] == 0) {
                    return ii(m, E);
                }
            default:
                throw new Error(`Major Version: Expected 3 or 4 saw ${_}`);
        }
        if (k !== 512) {
            H = m.slice(0, k);
            prep_blob(H, 28);
        }
        const header = m.slice(0, k);
        x(H, _);
        const ue = H.read_shift(4, "i");
        if (_ === 3 && ue !== 0) {
            throw new Error(`# Directory Sectors: Expected 0 saw ${ue}`);
        }
        H.l += 4;
        U = H.read_shift(4, "i");
        H.l += 4;
        H.chk("00100000", "Mini Stream Cutoff Size: ");
        K = H.read_shift(4, "i");
        T = H.read_shift(4, "i");
        M = H.read_shift(4, "i");
        S = H.read_shift(4, "i");
        for(let ee = -1, oe = 0; oe < 109 && (ee = H.read_shift(4, "i"), !(ee < 0)); ++oe){
            W[oe] = ee;
        }
        const sectors = d(m, k);
        p(M, S, sectors, k, W);
        const Xe = y(sectors, U, W, k);
        Xe[U].name = "!Directory";
        if (T > 0 && K !== ENDOFCHAIN) {
            Xe[K].name = "!MiniFAT";
        }
        Xe[W[0]].name = "!FAT";
        Xe.fat_addrs = W;
        Xe.ssz = k;
        const Ge = {};
        const xr = [];
        const pa = [];
        const ma = [];
        g(U, Xe, sectors, xr, T, Ge, pa, K);
        v(pa, ma, xr);
        xr.shift();
        const ga = {
            FileIndex: pa,
            FullPaths: ma
        };
        if (E && E.raw) {
            ga.raw = {
                header,
                sectors
            };
        }
        return ga;
    }
    function u(m) {
        if (m[m.l] == 80 && m[m.l + 1] == 75) {
            return [
                0,
                0
            ];
        }
        m.chk(HEADER_SIGNATURE, "Header Signature: ");
        m.l += 16;
        const E = m.read_shift(2, "u");
        return [
            m.read_shift(2, "u"),
            E
        ];
    }
    function x(m, E) {
        let _ = 9;
        m.l += 2;
        switch(_ = m.read_shift(2)){
            case 9:
                if (E != 3) {
                    throw new Error(`Sector Shift: Expected 9 saw ${_}`);
                }
                break;
            case 12:
                if (E != 4) {
                    throw new Error(`Sector Shift: Expected 12 saw ${_}`);
                }
                break;
            default:
                throw new Error(`Sector Shift: Expected 9 or 12 saw ${_}`);
        }
        m.chk("0600", "Mini Sector Shift: ");
        m.chk("000000000000", "Reserved: ");
    }
    function d(m, E) {
        for(var _ = Math.ceil(m.length / E) - 1, k = [], T = 1; T < _; ++T){
            k[T - 1] = m.slice(T * E, (T + 1) * E);
        }
        k[_ - 1] = m.slice(_ * E);
        return k;
    }
    function v(m, E, _) {
        for(var k = 0, T = 0, S = 0, U = 0, K = 0, M = _.length, W = [], H = []; k < M; ++k){
            W[k] = H[k] = k;
            E[k] = _[k];
        }
        for(; K < H.length; ++K){
            k = H[K];
            T = m[k].L;
            S = m[k].R;
            U = m[k].C;
            W[k] === k && (T !== -1 && W[T] !== T && (W[k] = W[T]), S !== -1 && W[S] !== S && (W[k] = W[S]));
            if (U !== -1) {
                W[U] = k;
            }
            if (T !== -1 && k != W[k]) {
                W[T] = W[k];
                if (H.lastIndexOf(T) < K) {
                    H.push(T);
                }
            }
            if (S !== -1 && k != W[k]) {
                W[S] = W[k];
                if (H.lastIndexOf(S) < K) {
                    H.push(S);
                }
            }
        }
        for(k = 1; k < M; ++k){
            W[k] === k && (S !== -1 && W[S] !== S ? W[k] = W[S] : T !== -1 && W[T] !== T && (W[k] = W[T]));
        }
        for(k = 1; k < M; ++k){
            if (m[k].type !== 0) {
                K = k;
                if (K != W[K]) {
                    do {
                        K = W[K];
                        E[k] = `${E[K]}/${E[k]}`;
                    }while (K !== 0 && W[K] !== -1 && K != W[K])
                }
                W[k] = -1;
            }
        }
        E[0] += "/";
        for(k = 1; k < M; ++k){
            if (m[k].type !== 2) {
                E[k] += "/";
            }
        }
    }
    function h(m, data, _) {
        const m_start = m.start;
        for(var T = m.size, S = [], U = m_start; _ && T > 0 && U >= 0;){
            S.push(data.slice(U * L, U * L + L));
            T -= L;
            U = Rt(_, U * 4);
        }
        if (S.length === 0) {
            return G(0);
        }
        return bconcat(S).slice(0, m.size);
    }
    function p(m, E, _, k, T) {
        let S = ENDOFCHAIN;
        if (m === ENDOFCHAIN) {
            if (E !== 0) {
                throw new Error("DIFAT chain shorter than expected");
            }
        } else if (m !== -1) {
            const U = _[m];
            const K = (k >>> 2) - 1;
            if (!U) {
                return;
            }
            for(let M = 0; M < K && (S = Rt(U, M * 4)) !== ENDOFCHAIN; ++M){
                T.push(S);
            }
            p(Rt(U, k - 4), E - 1, _, k, T);
        }
    }
    function w(sectors, start, fat_addrs, ssz, T) {
        const S = [];
        const U = [];
        if (!T) {
            T = [];
        }
        const K = ssz - 1;
        let M = 0;
        let W = 0;
        for(M = start; M >= 0;){
            T[M] = true;
            S[S.length] = M;
            U.push(sectors[M]);
            const H = fat_addrs[Math.floor(M * 4 / ssz)];
            W = M * 4 & K;
            if (ssz < 4 + W) {
                throw new Error(`FAT boundary crossed: ${M} 4 ${ssz}`);
            }
            if (!sectors[H]) {
                break;
            }
            M = Rt(sectors[H], W);
        }
        return {
            nodes: S,
            data: Fi([
                U
            ])
        };
    }
    function y(sectors, E, _, k) {
        const m_length = sectors.length;
        const S = [];
        const U = [];
        let K = [];
        let M = [];
        const W = k - 1;
        let H = 0;
        let q = 0;
        let se = 0;
        let ue = 0;
        for(H = 0; H < m_length; ++H){
            K = [];
            se = H + E;
            if (se >= m_length) {
                se -= m_length;
            }
            if (!U[se]) {
                M = [];
                const ee = [];
                for(q = se; q >= 0;){
                    ee[q] = true;
                    U[q] = true;
                    K[K.length] = q;
                    M.push(sectors[q]);
                    const oe = _[Math.floor(q * 4 / k)];
                    ue = q * 4 & W;
                    if (k < 4 + ue) {
                        throw new Error(`FAT boundary crossed: ${q} 4 ${k}`);
                    }
                    if (!sectors[oe] || (q = Rt(sectors[oe], ue), ee[q])) {
                        break;
                    }
                }
                S[se] = {
                    nodes: K,
                    data: Fi([
                        M
                    ])
                };
            }
        }
        return S;
    }
    function g(m, E, sectors, k, T, S, U, K) {
        let M = 0;
        const W = k.length ? 2 : 0;
        let ue;
        for(let H = E[m].data, q = 0, se = 0; q < H.length; q += 128){
            const ee = H.slice(q, q + 128);
            prep_blob(ee, 64);
            se = ee.read_shift(2);
            ue = D0(ee, 0, se - W);
            k.push(ue);
            const oe = {
                name: ue,
                type: ee.read_shift(1),
                color: ee.read_shift(1),
                L: ee.read_shift(4, "i"),
                R: ee.read_shift(4, "i"),
                C: ee.read_shift(4, "i"),
                clsid: ee.read_shift(16),
                state: ee.read_shift(4, "i"),
                start: 0,
                size: 0
            };
            const _e = ee.read_shift(2) + ee.read_shift(2) + ee.read_shift(2) + ee.read_shift(2);
            if (_e !== 0) {
                oe.ct = D(ee, ee.l - 8);
            }
            const Xe = ee.read_shift(2) + ee.read_shift(2) + ee.read_shift(2) + ee.read_shift(2);
            if (Xe !== 0) {
                oe.mt = D(ee, ee.l - 8);
            }
            oe.start = ee.read_shift(4, "i");
            oe.size = ee.read_shift(4, "i");
            if (oe.size < 0 && oe.start < 0) {
                oe.size = oe.type = 0;
                oe.start = ENDOFCHAIN;
                oe.name = "";
            }
            if (oe.type === 5) {
                M = oe.start;
                if (T > 0 && M !== ENDOFCHAIN) {
                    E[M].name = "!StreamData";
                }
            } else if (oe.size >= 4096) {
                oe.storage = "fat";
                if (E[oe.start] === undefined) {
                    E[oe.start] = w(sectors, oe.start, E.fat_addrs, E.ssz);
                }
                E[oe.start].name = oe.name;
                oe.content = E[oe.start].data.slice(0, oe.size);
            } else {
                oe.storage = "minifat";
                if (oe.size < 0) {
                    oe.size = 0;
                } else if (M !== ENDOFCHAIN && oe.start !== ENDOFCHAIN && E[M]) {
                    oe.content = h(oe, E[M].data, (E[K] || {}).data);
                }
            }
            if (oe.content) {
                prep_blob(oe.content, 0);
            }
            S[ue] = oe;
            U.push(oe);
        }
    }
    function D(m, E) {
        return new Date((fr(m, E + 4) / 10000000 * 2 ** 32 + fr(m, E) / 10000000 - 11644473600) * 1000);
    }
    function b(m, E) {
        o();
        return l(c.readFileSync(m), E);
    }
    function N(m, E) {
        let _ = E && E.type;
        _ || Te && Buffer.isBuffer(m) && (_ = "buffer");
        switch(_ || "base64"){
            case "file":
                return b(m, E);
            case "base64":
                return l(Ir(br(m)), E);
            case "binary":
                return l(Ir(m), E);
        }
        return l(m, E);
    }
    function F(m, E) {
        const _ = E || {};
        const k = _.root || "Root Entry";
        if (!m.FullPaths) {
            m.FullPaths = [];
        }
        if (!m.FileIndex) {
            m.FileIndex = [];
        }
        if (m.FullPaths.length !== m.FileIndex.length) {
            throw new Error("inconsistent CFB structure");
        }
        if (m.FullPaths.length === 0) {
            m.FullPaths[0] = `${k}/`;
            m.FileIndex[0] = {
                name: k,
                type: 5
            };
        }
        if (_.CLSID) {
            m.FileIndex[0].clsid = _.CLSID;
        }
        B(m);
    }
    function B(m) {
        const E = "Sh33tJ5";
        if (!CFB.find(m, `/${E}`)) {
            const _ = G(4);
            _[0] = 55;
            _[1] = _[3] = 50;
            _[2] = 54;
            m.FileIndex.push({
                name: E,
                type: 2,
                content: _,
                size: 4,
                L: 69,
                R: 69,
                C: 69
            });
            m.FullPaths.push(m.FullPaths[0] + E);
            I(m);
        }
    }
    function I(m, E) {
        F(m);
        let _ = false;
        let k = false;
        for(var T = m.FullPaths.length - 1; T >= 0; --T){
            const S = m.FileIndex[T];
            switch(S.type){
                case 0:
                    if (k) {
                        _ = true;
                    } else {
                        m.FileIndex.pop();
                        m.FullPaths.pop();
                    }
                    break;
                case 1:
                case 2:
                case 5:
                    k = true;
                    if (isNaN(S.R * S.L * S.C)) {
                        _ = true;
                    }
                    if (S.R > -1 && S.L > -1 && S.R == S.L) {
                        _ = true;
                    }
                    break;
                default:
                    _ = true;
                    break;
            }
        }
        if (!(!_ && !E)) {
            const U = new Date(1987, 1, 19);
            let K = 0;
            const M = Object.create ? Object.create(null) : {};
            const W = [];
            for(T = 0; T < m.FullPaths.length; ++T){
                M[m.FullPaths[T]] = true;
                if (m.FileIndex[T].type !== 0) {
                    W.push([
                        m.FullPaths[T],
                        m.FileIndex[T]
                    ]);
                }
            }
            for(T = 0; T < W.length; ++T){
                const H = a(W[T][0]);
                k = M[H];
                if (!k) {
                    W.push([
                        H,
                        {
                            name: n(H).replace("/", ""),
                            type: 1,
                            clsid: he,
                            ct: U,
                            mt: U,
                            content: null
                        }
                    ]);
                    M[H] = true;
                }
            }
            W.sort((ue, ee)=>r(ue[0], ee[0]));
            m.FullPaths = [];
            m.FileIndex = [];
            for(T = 0; T < W.length; ++T){
                m.FullPaths[T] = W[T][0];
                m.FileIndex[T] = W[T][1];
            }
            for(T = 0; T < W.length; ++T){
                const q = m.FileIndex[T];
                const se = m.FullPaths[T];
                q.name = n(se).replace("/", "");
                q.L = q.R = q.C = -(q.color = 1);
                q.size = q.content ? q.content.length : 0;
                q.start = 0;
                q.clsid = q.clsid || he;
                if (T === 0) {
                    q.C = W.length > 1 ? 1 : -1;
                    q.size = 0;
                    q.type = 5;
                } else if (se.slice(-1) == "/") {
                    for(K = T + 1; K < W.length && a(m.FullPaths[K]) != se; ++K);
                    q.C = K >= W.length ? -1 : K;
                    for(K = T + 1; K < W.length && a(m.FullPaths[K]) != a(se); ++K);
                    q.R = K >= W.length ? -1 : K;
                    q.type = 1;
                } else {
                    if (a(m.FullPaths[T + 1] || "") == a(se)) {
                        q.R = T + 1;
                    }
                    q.type = 2;
                }
            }
        }
    }
    function z(m, E) {
        const _ = E || {};
        if (_.fileType == "mad") {
            return Bc(m, _);
        }
        I(m);
        if (_.fileType === "zip") {
            return Oc(m, _);
        }
        const k = ((ue)=>{
            let ee = 0;
            let oe = 0;
            for(let _e = 0; _e < ue.FileIndex.length; ++_e){
                const Xe = ue.FileIndex[_e];
                if (Xe.content) {
                    const Ge = Xe.content.length;
                    Ge > 0 && (Ge < 4096 ? ee += Ge + 63 >> 6 : oe += Ge + 511 >> 9);
                }
            }
            const xr = ue.FullPaths.length + 3 >> 2;
            const pa = ee + 7 >> 3;
            const ma = ee + 127 >> 7;
            for(var ga = pa + oe + xr + ma, It = ga + 127 >> 7, L0 = It <= 109 ? 0 : Math.ceil((It - 109) / 127); ga + It + L0 + 127 >> 7 > It;){
                L0 = ++It <= 109 ? 0 : Math.ceil((It - 109) / 127);
            }
            const ot = [
                1,
                L0,
                It,
                ma,
                xr,
                oe,
                ee,
                0
            ];
            ue.FileIndex[0].size = ee << 6;
            ot[7] = (ue.FileIndex[0].start = ot[0] + ot[1] + ot[2] + ot[3] + ot[4] + ot[5]) + (ot[6] + 7 >> 3);
            return ot;
        })(m);
        const T = G(k[7] << 9);
        let S = 0;
        let U = 0;
        {
            for(S = 0; S < 8; ++S){
                T.write_shift(1, ie[S]);
            }
            for(S = 0; S < 8; ++S){
                T.write_shift(2, 0);
            }
            T.write_shift(2, 62);
            T.write_shift(2, 3);
            T.write_shift(2, 65534);
            T.write_shift(2, 9);
            T.write_shift(2, 6);
            for(S = 0; S < 3; ++S){
                T.write_shift(2, 0);
            }
            T.write_shift(4, 0);
            T.write_shift(4, k[2]);
            T.write_shift(4, k[0] + k[1] + k[2] + k[3] - 1);
            T.write_shift(4, 0);
            T.write_shift(4, 4096);
            T.write_shift(4, k[3] ? k[0] + k[1] + k[2] - 1 : ENDOFCHAIN);
            T.write_shift(4, k[3]);
            T.write_shift(-4, k[1] ? k[0] - 1 : ENDOFCHAIN);
            T.write_shift(4, k[1]);
            for(S = 0; S < 109; ++S){
                T.write_shift(-4, S < k[2] ? k[1] + S : -1);
            }
        }
        if (k[1]) {
            for(U = 0; U < k[1]; ++U){
                for(; S < 236 + U * 127; ++S){
                    T.write_shift(-4, S < k[2] ? k[1] + S : -1);
                }
                T.write_shift(-4, U === k[1] - 1 ? ENDOFCHAIN : U + 1);
            }
        }
        const K = (ue)=>{
            for(U += ue; S < U - 1; ++S){
                T.write_shift(-4, S + 1);
            }
            if (ue) {
                ++S;
                T.write_shift(-4, ENDOFCHAIN);
            }
        };
        S = 0;
        U = 0;
        for(U += k[1]; S < U; ++S){
            T.write_shift(-4, consts.DIFSECT);
        }
        for(U += k[2]; S < U; ++S){
            T.write_shift(-4, consts.FATSECT);
        }
        K(k[3]);
        K(k[4]);
        for(var M = 0, W = 0, H = m.FileIndex[0]; M < m.FileIndex.length; ++M){
            H = m.FileIndex[M];
            if (H.content) {
                W = H.content.length;
                if (!(W < 4096)) {
                    H.start = U;
                    K(W + 511 >> 9);
                }
            }
        }
        K(k[6] + 7 >> 3);
        while(T.l & 511){
            T.write_shift(-4, consts.ENDOFCHAIN);
        }
        S = 0;
        U = 0;
        for(M = 0; M < m.FileIndex.length; ++M){
            H = m.FileIndex[M];
            if (H.content) {
                W = H.content.length;
                if (!(!W || W >= 4096)) {
                    H.start = U;
                    K(W + 63 >> 6);
                }
            }
        }
        while(T.l & 511){
            T.write_shift(-4, consts.ENDOFCHAIN);
        }
        for(S = 0; S < k[4] << 2; ++S){
            const q = m.FullPaths[S];
            if (!q || q.length === 0) {
                for(M = 0; M < 17; ++M){
                    T.write_shift(4, 0);
                }
                for(M = 0; M < 3; ++M){
                    T.write_shift(4, -1);
                }
                for(M = 0; M < 12; ++M){
                    T.write_shift(4, 0);
                }
                continue;
            }
            H = m.FileIndex[S];
            if (S === 0) {
                H.start = H.size ? H.start - 1 : ENDOFCHAIN;
            }
            const se = S === 0 && _.root || H.name;
            W = 2 * (se.length + 1);
            T.write_shift(64, se, "utf16le");
            T.write_shift(2, W);
            T.write_shift(1, H.type);
            T.write_shift(1, H.color);
            T.write_shift(-4, H.L);
            T.write_shift(-4, H.R);
            T.write_shift(-4, H.C);
            if (H.clsid) {
                T.write_shift(16, H.clsid, "hex");
            } else {
                for(M = 0; M < 4; ++M){
                    T.write_shift(4, 0);
                }
            }
            T.write_shift(4, H.state || 0);
            T.write_shift(4, 0);
            T.write_shift(4, 0);
            T.write_shift(4, 0);
            T.write_shift(4, 0);
            T.write_shift(4, H.start);
            T.write_shift(4, H.size);
            T.write_shift(4, 0);
        }
        for(S = 1; S < m.FileIndex.length; ++S){
            H = m.FileIndex[S];
            if (H.size >= 4096) {
                T.l = H.start + 1 << 9;
                if (Te && Buffer.isBuffer(H.content)) {
                    H.content.copy(T, T.l, 0, H.size);
                    T.l += H.size + 511 & -512;
                } else {
                    for(M = 0; M < H.size; ++M){
                        T.write_shift(1, H.content[M]);
                    }
                    for(; M & 511; ++M){
                        T.write_shift(1, 0);
                    }
                }
            }
        }
        for(S = 1; S < m.FileIndex.length; ++S){
            H = m.FileIndex[S];
            if (H.size > 0 && H.size < 4096) {
                if (Te && Buffer.isBuffer(H.content)) {
                    H.content.copy(T, T.l, 0, H.size);
                    T.l += H.size + 63 & -64;
                } else {
                    for(M = 0; M < H.size; ++M){
                        T.write_shift(1, H.content[M]);
                    }
                    for(; M & 63; ++M){
                        T.write_shift(1, 0);
                    }
                }
            }
        }
        if (Te) {
            T.l = T.length;
        } else {
            while(T.l < T.length){
                T.write_shift(1, 0);
            }
        }
        return T;
    }
    function X(m, E) {
        const _ = m.FullPaths.map((M)=>M.toUpperCase());
        const k = _.map((M)=>{
            const W = M.split("/");
            return W[W.length - (M.slice(-1) == "/" ? 2 : 1)];
        });
        let T = false;
        if (E.charCodeAt(0) === 47) {
            T = true;
            E = _[0].slice(0, -1) + E;
        } else {
            T = E.indexOf("/") !== -1;
        }
        let S = E.toUpperCase();
        let U = T === true ? _.indexOf(S) : k.indexOf(S);
        if (U !== -1) {
            return m.FileIndex[U];
        }
        const K = !S.match(ka);
        S = S.replace(_r, "");
        if (K) {
            S = S.replace(ka, "!");
        }
        for(U = 0; U < _.length; ++U){
            if ((K ? _[U].replace(ka, "!") : _[U]).replace(_r, "") == S || (K ? k[U].replace(ka, "!") : k[U]).replace(_r, "") == S) {
                return m.FileIndex[U];
            }
        }
        return null;
    }
    var L = 64;
    var ENDOFCHAIN = -2;
    var HEADER_SIGNATURE = "d0cf11e0a1b11ae1";
    var ie = [
        208,
        207,
        17,
        224,
        161,
        177,
        26,
        225
    ];
    var he = "00000000000000000000000000000000";
    var consts = {
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN,
        FREESECT: -1,
        HEADER_SIGNATURE,
        HEADER_MINOR_VERSION: "3e00",
        MAXREGSID: -6,
        NOSTREAM: -1,
        HEADER_CLSID: he,
        EntryTypes: [
            "unknown",
            "storage",
            "stream",
            "lockbytes",
            "property",
            "root"
        ]
    };
    function Pe(m, E, _) {
        o();
        const k = z(m, _);
        c.writeFileSync(E, k);
    }
    function V(m) {
        const E = new Array(m.length);
        for(let _ = 0; _ < m.length; ++_){
            E[_] = String.fromCharCode(m[_]);
        }
        return E.join("");
    }
    function ve(m, E) {
        const _ = z(m, E);
        switch(E && E.type || "buffer"){
            case "file":
                o();
                c.writeFileSync(E.filename, _);
                return _;
            case "binary":
                if (typeof _ === "string") {
                    return _;
                }
                return V(_);
            case "base64":
                return Ra(typeof _ === "string" ? _ : V(_));
            case "buffer":
                if (Te) {
                    if (Buffer.isBuffer(_)) {
                        return _;
                    }
                    return xt(_);
                }
            case "array":
                if (typeof _ === "string") {
                    return Ir(_);
                }
                return _;
        }
        return _;
    }
    let ge;
    function use_zlib(m) {
        try {
            const E = m.InflateRaw;
            const _ = new E;
            _._processChunk(new Uint8Array([
                3,
                0
            ]), _._finishFlushFlag);
            if (_.bytesRead) {
                ge = m;
            } else {
                throw new Error("zlib does not expose bytesRead");
            }
        } catch (error) {
            console.error(`cannot use native zlib: ${error.message || error}`);
        }
    }
    function P(m, E) {
        if (!ge) {
            return _inflateRaw(m, E);
        }
        const ge_InflateRaw = ge.InflateRaw;
        const k = new ge_InflateRaw;
        const T = k._processChunk(m.slice(m.l), k._finishFlushFlag);
        m.l += k.bytesRead;
        return T;
    }
    function O(m) {
        if (ge) {
            return ge.deflateRawSync(m);
        }
        return _deflateRaw(m);
    }
    const R = [
        16,
        17,
        18,
        0,
        8,
        7,
        9,
        6,
        10,
        5,
        11,
        4,
        12,
        3,
        13,
        2,
        14,
        1,
        15
    ];
    const Y = [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        13,
        15,
        17,
        19,
        23,
        27,
        31,
        35,
        43,
        51,
        59,
        67,
        83,
        99,
        115,
        131,
        163,
        195,
        227,
        258
    ];
    const re = [
        1,
        2,
        3,
        4,
        5,
        7,
        9,
        13,
        17,
        25,
        33,
        49,
        65,
        97,
        129,
        193,
        257,
        385,
        513,
        769,
        1025,
        1537,
        2049,
        3073,
        4097,
        6145,
        8193,
        12289,
        16385,
        24577
    ];
    function te(m) {
        const E = (m << 1 | m << 11) & 139536 | (m << 5 | m << 15) & 558144;
        return (E >> 16 | E >> 8 | E) & 255;
    }
    const Q = typeof Uint8Array !== "undefined";
    const Z = Q ? new Uint8Array(256) : [];
    for(let Ee = 0; Ee < 256; ++Ee){
        Z[Ee] = te(Ee);
    }
    function A(m, E) {
        let _ = Z[m & 255];
        if (E <= 8) {
            return _ >>> 8 - E;
        }
        _ = _ << 8 | Z[m >> 8 & 255];
        if (E <= 16) {
            return _ >>> 16 - E;
        }
        return _ = _ << 8 | Z[m >> 16 & 255], _ >>> 24 - E;
    }
    function Ue(m, E) {
        const _ = E & 7;
        const k = E >>> 3;
        return (m[k] | (_ <= 6 ? 0 : m[k + 1] << 8)) >>> _ & 3;
    }
    function Ce(m, E) {
        const _ = E & 7;
        const k = E >>> 3;
        return (m[k] | (_ <= 5 ? 0 : m[k + 1] << 8)) >>> _ & 7;
    }
    function Be(m, E) {
        const _ = E & 7;
        const k = E >>> 3;
        return (m[k] | (_ <= 4 ? 0 : m[k + 1] << 8)) >>> _ & 15;
    }
    function ye(m, E) {
        const _ = E & 7;
        const k = E >>> 3;
        return (m[k] | (_ <= 3 ? 0 : m[k + 1] << 8)) >>> _ & 31;
    }
    function fe(m, E) {
        const _ = E & 7;
        const k = E >>> 3;
        return (m[k] | (_ <= 1 ? 0 : m[k + 1] << 8)) >>> _ & 127;
    }
    function Je(m, E, _) {
        const k = E & 7;
        const T = E >>> 3;
        const S = (1 << _) - 1;
        let U = m[T] >>> k;
        if (!(_ < 8 - k || (U |= m[T + 1] << 8 - k, _ < 16 - k) || (U |= m[T + 2] << 16 - k, _ < 24 - k))) {
            U |= m[T + 3] << 24 - k;
        }
        return U & S;
    }
    function Lr(m, E, _) {
        const k = E & 7;
        const T = E >>> 3;
        if (k <= 5) {
            m[T] |= (_ & 7) << k;
        } else {
            m[T] |= _ << k & 255;
            m[T + 1] = (_ & 7) >> 8 - k;
        }
        return E + 3;
    }
    function Zr(m, E, _) {
        const k = E & 7;
        const T = E >>> 3;
        _ = (_ & 1) << k;
        m[T] |= _;
        return E + 1;
    }
    function ft(m, E, _) {
        const k = E & 7;
        const T = E >>> 3;
        _ <<= k;
        m[T] |= _ & 255;
        _ >>>= 8;
        m[T + 1] = _;
        return E + 8;
    }
    function da(m, E, _) {
        const k = E & 7;
        const T = E >>> 3;
        _ <<= k;
        m[T] |= _ & 255;
        _ >>>= 8;
        m[T + 1] = _ & 255;
        m[T + 2] = _ >>> 8;
        return E + 16;
    }
    function pt(m, E) {
        const m_length = m.length;
        const k = 2 * m_length > E ? 2 * m_length : E + 5;
        let T = 0;
        if (m_length >= E) {
            return m;
        }
        if (Te) {
            const S = si(k);
            if (m.copy) {
                m.copy(S);
            } else {
                for(; T < m.length; ++T){
                    S[T] = m[T];
                }
            }
            return S;
        } else if (Q) {
            const U = new Uint8Array(k);
            if (U.set) {
                U.set(m);
            } else {
                for(; T < m_length; ++T){
                    U[T] = m[T];
                }
            }
            return U;
        }
        m.length = k;
        return m;
    }
    function Dr(m) {
        const E = new Array(m);
        for(let _ = 0; _ < m; ++_){
            E[_] = 0;
        }
        return E;
    }
    function ct(m, E, _) {
        let k = 1;
        let T = 0;
        let S = 0;
        let U = 0;
        let K = 0;
        let m_length = m.length;
        const W = Q ? new Uint16Array(32) : Dr(32);
        for(S = 0; S < 32; ++S){
            W[S] = 0;
        }
        for(S = m_length; S < _; ++S){
            m[S] = 0;
        }
        m_length = m.length;
        const H = Q ? new Uint16Array(m_length) : Dr(m_length);
        for(S = 0; S < m_length; ++S){
            W[T = m[S]]++;
            if (k < T) {
                k = T;
            }
            H[S] = 0;
        }
        W[0] = 0;
        for(S = 1; S <= k; ++S){
            W[S + 16] = K = K + W[S - 1] << 1;
        }
        for(S = 0; S < m_length; ++S){
            K = m[S];
            if (K != 0) {
                H[S] = W[K + 16]++;
            }
        }
        let q = 0;
        for(S = 0; S < m_length; ++S){
            q = m[S];
            if (q != 0) {
                K = A(H[S], k) >> k - q;
                for(U = (1 << k + 4 - q) - 1; U >= 0; --U){
                    E[K | U << q] = q & 15 | S << 4;
                }
            }
        }
        return k;
    }
    const mt = Q ? new Uint16Array(512) : Dr(512);
    const va = Q ? new Uint16Array(32) : Dr(32);
    if (!Q) {
        for(var Tr = 0; Tr < 512; ++Tr){
            mt[Tr] = 0;
        }
        for(Tr = 0; Tr < 32; ++Tr){
            va[Tr] = 0;
        }
    }
    (()=>{
        const m = [];
        for(var E = 0; E < 32; E++){
            m.push(5);
        }
        ct(m, va, 32);
        const _ = [];
        for(E = 0; E <= 143; E++){
            _.push(8);
        }
        for(; E <= 255; E++){
            _.push(9);
        }
        for(; E <= 279; E++){
            _.push(7);
        }
        for(; E <= 287; E++){
            _.push(8);
        }
        ct(_, mt, 288);
    })();
    const qr = (()=>{
        const E = Q ? new Uint8Array(32768) : [];
        for(var _ = 0, k = 0; _ < re.length - 1; ++_){
            for(; k < re[_ + 1]; ++k){
                E[k] = _;
            }
        }
        for(; k < 32768; ++k){
            E[k] = 29;
        }
        const T = Q ? new Uint8Array(259) : [];
        _ = 0;
        for(k = 0; _ < Y.length - 1; ++_){
            for(; k < Y[_ + 1]; ++k){
                T[k] = _;
            }
        }
        function S(K, M) {
            for(let W = 0; W < K.length;){
                let H = Math.min(65535, K.length - W);
                const q = W + H == K.length;
                M.write_shift(1, +q);
                M.write_shift(2, H);
                M.write_shift(2, ~H & 65535);
                while(H-- > 0){
                    M[M.l++] = K[W++];
                }
            }
            return M.l;
        }
        function U(K, M) {
            let W = 0;
            for(let H = 0, q = Q ? new Uint16Array(32768) : []; H < K.length;){
                let se = Math.min(65535, K.length - H);
                if (se < 10) {
                    W = Lr(M, W, +(H + se == K.length));
                    if (W & 7) {
                        W += 8 - (W & 7);
                    }
                    M.l = W / 8 | 0;
                    M.write_shift(2, se);
                    M.write_shift(2, ~se & 65535);
                    while(se-- > 0){
                        M[M.l++] = K[H++];
                    }
                    W = M.l * 8;
                    continue;
                }
                W = Lr(M, W, +(H + se == K.length) + 2);
                let ue = 0;
                while(se-- > 0){
                    let ee = K[H];
                    ue = (ue << 5 ^ ee) & 32767;
                    let oe = -1;
                    let _e = 0;
                    if ((oe = q[ue]) && (oe |= H & -32768, oe > H && (oe -= 32768), oe < H)) {
                        while(K[oe + _e] == K[H + _e] && _e < 250){
                            ++_e;
                        }
                    }
                    if (_e > 2) {
                        ee = T[_e];
                        if (ee <= 22) {
                            W = ft(M, W, Z[ee + 1] >> 1) - 1;
                        } else {
                            ft(M, W, 3);
                            W += 5;
                            ft(M, W, Z[ee - 23] >> 5);
                            W += 3;
                        }
                        const Xe = ee < 8 ? 0 : ee - 4 >> 2;
                        if (Xe > 0) {
                            da(M, W, _e - Y[ee]);
                            W += Xe;
                        }
                        ee = E[H - oe];
                        W = ft(M, W, Z[ee] >> 3);
                        W -= 3;
                        const Ge = ee < 4 ? 0 : ee - 2 >> 1;
                        if (Ge > 0) {
                            da(M, W, H - oe - re[ee]);
                            W += Ge;
                        }
                        for(let xr = 0; xr < _e; ++xr){
                            q[ue] = H & 32767;
                            ue = (ue << 5 ^ K[H]) & 32767;
                            ++H;
                        }
                        se -= _e - 1;
                    } else {
                        if (ee <= 143) {
                            ee = ee + 48;
                        } else {
                            W = Zr(M, W, 1);
                        }
                        W = ft(M, W, Z[ee]);
                        q[ue] = H & 32767;
                        ++H;
                    }
                }
                W = ft(M, W, 0) - 1;
            }
            M.l = (W + 7) / 8 | 0;
            return M.l;
        }
        return (M, W)=>{
            if (M.length < 8) {
                return S(M, W);
            }
            return U(M, W);
        };
    })();
    function _deflateRaw(m) {
        const E = G(50 + Math.floor(m.length * 1.1));
        const _ = qr(m, E);
        return E.slice(0, _);
    }
    const Ze = Q ? new Uint16Array(32768) : Dr(32768);
    const Br = Q ? new Uint16Array(32768) : Dr(32768);
    const ar = Q ? new Uint16Array(128) : Dr(128);
    let Ot = 1;
    let ti = 1;
    function Ac(m, E) {
        const _ = ye(m, E) + 257;
        E += 5;
        const k = ye(m, E) + 1;
        E += 5;
        const T = Be(m, E) + 4;
        E += 4;
        let S = 0;
        const U = Q ? new Uint8Array(19) : Dr(19);
        const K = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        let M = 1;
        const W = Q ? new Uint8Array(8) : Dr(8);
        const H = Q ? new Uint8Array(8) : Dr(8);
        const U_length = U.length;
        for(var se = 0; se < T; ++se){
            U[R[se]] = S = Ce(m, E);
            if (M < S) {
                M = S;
            }
            W[S]++;
            E += 3;
        }
        let ue = 0;
        W[0] = 0;
        for(se = 1; se <= M; ++se){
            H[se] = ue = ue + W[se - 1] << 1;
        }
        for(se = 0; se < U_length; ++se){
            if ((ue = U[se]) != 0) {
                K[se] = H[ue]++;
            }
        }
        let ee = 0;
        for(se = 0; se < U_length; ++se){
            ee = U[se];
            if (ee != 0) {
                ue = Z[K[se]] >> 8 - ee;
                for(let oe = (1 << 7 - ee) - 1; oe >= 0; --oe){
                    ar[ue | oe << ee] = ee & 7 | se << 3;
                }
            }
        }
        const _e = [];
        for(M = 1; _e.length < _ + k;){
            ue = ar[fe(m, E)];
            E += ue & 7;
            switch(ue >>>= 3){
                case 16:
                    S = 3 + Ue(m, E);
                    E += 2;
                    for(ue = _e[_e.length - 1]; S-- > 0;){
                        _e.push(ue);
                    }
                    break;
                case 17:
                    S = 3 + Ce(m, E);
                    for(E += 3; S-- > 0;){
                        _e.push(0);
                    }
                    break;
                case 18:
                    S = 11 + fe(m, E);
                    for(E += 7; S-- > 0;){
                        _e.push(0);
                    }
                    break;
                default:
                    _e.push(ue);
                    if (M < ue) {
                        M = ue;
                    }
                    break;
            }
        }
        const Xe = _e.slice(0, _);
        const Ge = _e.slice(_);
        for(se = _; se < 286; ++se){
            Xe[se] = 0;
        }
        for(se = k; se < 30; ++se){
            Ge[se] = 0;
        }
        Ot = ct(Xe, Ze, 286);
        ti = ct(Ge, Br, 30);
        return E;
    }
    function Cc(m, E) {
        if (m[0] == 3 && !(m[1] & 3)) {
            return [
                Tt(E),
                2
            ];
        }
        let _ = 0;
        for(var k = 0, T = si(E || 1 << 18), S = 0, U = T.length >>> 0, K = 0, M = 0; (k & 1) == 0;){
            k = Ce(m, _);
            _ += 3;
            if (k >>> 1) {
                if (k >> 1 == 1) {
                    K = 9;
                    M = 5;
                } else {
                    _ = Ac(m, _);
                    K = Ot;
                    M = ti;
                }
            } else {
                if (_ & 7) {
                    _ += 8 - (_ & 7);
                }
                let W = m[_ >>> 3] | m[(_ >>> 3) + 1] << 8;
                _ += 32;
                if (W > 0) {
                    for(!E && U < S + W && (T = pt(T, S + W), U = T.length); W-- > 0;){
                        T[S++] = m[_ >>> 3];
                        _ += 8;
                    }
                }
                continue;
            }
            while(true){
                if (!E && U < S + 32767) {
                    T = pt(T, S + 32767);
                    U = T.length;
                }
                let H = Je(m, _, K);
                let q = k >>> 1 == 1 ? mt[H] : Ze[H];
                _ += q & 15;
                q >>>= 4;
                if ((q >>> 8 & 255) === 0) {
                    T[S++] = q;
                } else {
                    if (q == 256) {
                        break;
                    }
                    q -= 257;
                    let se = q < 8 ? 0 : q - 4 >> 2;
                    if (se > 5) {
                        se = 0;
                    }
                    let ue = S + Y[q];
                    if (se > 0) {
                        ue += Je(m, _, se);
                        _ += se;
                    }
                    H = Je(m, _, M);
                    q = k >>> 1 == 1 ? va[H] : Br[H];
                    _ += q & 15;
                    q >>>= 4;
                    const ee = q < 4 ? 0 : q - 2 >> 1;
                    let oe = re[q];
                    if (ee > 0) {
                        oe += Je(m, _, ee);
                        _ += ee;
                    }
                    if (!E && U < ue) {
                        T = pt(T, ue + 100);
                        U = T.length;
                    }
                    while(S < ue){
                        T[S] = T[S - oe];
                        ++S;
                    }
                }
            }
        }
        if (E) {
            return [
                T,
                _ + 7 >>> 3
            ];
        }
        return [
            T.slice(0, S),
            _ + 7 >>> 3
        ];
    }
    function _inflateRaw(m, E) {
        const _ = m.slice(m.l || 0);
        const k = Cc(_, E);
        m.l += k[1];
        return k[0];
    }
    function ni(m, E) {
        if (m) {
            if (typeof console !== "undefined") {
                console.error(E);
            }
        } else {
            throw new Error(E);
        }
    }
    function ii(m, E) {
        const _ = m;
        prep_blob(_, 0);
        const k = [];
        const T = [];
        const S = {
            FileIndex: k,
            FullPaths: T
        };
        F(S, {
            root: E.root
        });
        for(var U = _.length - 4; (_[U] != 80 || _[U + 1] != 75 || _[U + 2] != 5 || _[U + 3] != 6) && U >= 0;){
            --U;
        }
        _.l = U + 4;
        _.l += 4;
        const K = _.read_shift(2);
        _.l += 6;
        const M = _.read_shift(4);
        _.l = M;
        for(U = 0; U < K; ++U){
            _.l += 20;
            const W = _.read_shift(4);
            const H = _.read_shift(4);
            const q = _.read_shift(2);
            const se = _.read_shift(2);
            const ue = _.read_shift(2);
            _.l += 8;
            const ee = _.read_shift(4);
            const oe = f(_.slice(_.l + q, _.l + q + se));
            _.l += q + se + ue;
            const _e = _.l;
            _.l = ee + 4;
            Dc(_, W, H, S, oe);
            _.l = _e;
        }
        return S;
    }
    function Dc(m, E, _, k, T) {
        m.l += 2;
        const S = m.read_shift(2);
        const U = m.read_shift(2);
        let mt_1 = s(m);
        if (S & 8257) {
            throw new Error("Unsupported ZIP encryption");
        }
        let M = m.read_shift(4);
        let W = m.read_shift(4);
        let H = m.read_shift(4);
        for(var q = m.read_shift(2), se = m.read_shift(2), ue = "", ee = 0; ee < q; ++ee){
            ue += String.fromCharCode(m[m.l++]);
        }
        if (se) {
            const oe = f(m.slice(m.l, m.l + se));
            if ((oe[21589] || {}).mt) {
                mt_1 = oe[21589].mt;
            }
            if (((T || {})[21589] || {}).mt) {
                mt_1 = T[21589].mt;
            }
        }
        m.l += se;
        let _e = m.slice(m.l, m.l + W);
        switch(U){
            case 8:
                _e = P(m, H);
                break;
            case 0:
                break;
            default:
                throw new Error(`Unsupported ZIP Compression method ${U}`);
        }
        let Xe = false;
        if (S & 8) {
            M = m.read_shift(4);
            if (M == 134695760) {
                M = m.read_shift(4);
                Xe = true;
            }
            W = m.read_shift(4);
            H = m.read_shift(4);
        }
        if (W != E) {
            ni(Xe, `Bad compressed size: ${E} != ${W}`);
        }
        if (H != _) {
            ni(Xe, `Bad uncompressed size: ${_} != ${H}`);
        }
        cfb_add(k, ue, _e, {
            unsafe: true,
            mt: mt_1
        });
    }
    function Oc(m, E) {
        const _ = E || {};
        const k = [];
        const T = [];
        let S = G(1);
        const U = _.compression ? 8 : 0;
        const K = 0;
        let M = 0;
        let W = 0;
        let H = 0;
        let q = 0;
        const se = m.FullPaths[0];
        let ue = se;
        let ee = m.FileIndex[0];
        const oe = [];
        let _e = 0;
        for(M = 1; M < m.FullPaths.length; ++M){
            ue = m.FullPaths[M].slice(se.length);
            ee = m.FileIndex[M];
            if (!(!ee.size || !ee.content || ue == "Sh33tJ5")) {
                const Xe = H;
                let Ge = G(ue.length);
                for(W = 0; W < ue.length; ++W){
                    Ge.write_shift(1, ue.charCodeAt(W) & 127);
                }
                Ge = Ge.slice(0, Ge.l);
                oe[q] = wo.buf(ee.content, 0);
                let xr = ee.content;
                if (U == 8) {
                    xr = O(xr);
                }
                S = G(30);
                S.write_shift(4, 67324752);
                S.write_shift(2, 20);
                S.write_shift(2, K);
                S.write_shift(2, U);
                if (ee.mt) {
                    i(S, ee.mt);
                } else {
                    S.write_shift(4, 0);
                }
                S.write_shift(-4, oe[q]);
                S.write_shift(4, xr.length);
                S.write_shift(4, ee.content.length);
                S.write_shift(2, Ge.length);
                S.write_shift(2, 0);
                H += S.length;
                k.push(S);
                H += Ge.length;
                k.push(Ge);
                H += xr.length;
                k.push(xr);
                S = G(46);
                S.write_shift(4, 33639248);
                S.write_shift(2, 0);
                S.write_shift(2, 20);
                S.write_shift(2, K);
                S.write_shift(2, U);
                S.write_shift(4, 0);
                S.write_shift(-4, oe[q]);
                S.write_shift(4, xr.length);
                S.write_shift(4, ee.content.length);
                S.write_shift(2, Ge.length);
                S.write_shift(2, 0);
                S.write_shift(2, 0);
                S.write_shift(2, 0);
                S.write_shift(2, 0);
                S.write_shift(4, 0);
                S.write_shift(4, Xe);
                _e += S.l;
                T.push(S);
                _e += Ge.length;
                T.push(Ge);
                ++q;
            }
        }
        S = G(22);
        S.write_shift(4, 101010256);
        S.write_shift(2, 0);
        S.write_shift(2, 0);
        S.write_shift(2, q);
        S.write_shift(2, q);
        S.write_shift(4, _e);
        S.write_shift(4, H);
        S.write_shift(2, 0);
        return bconcat([
            bconcat(k),
            bconcat(T),
            S
        ]);
    }
    const e0 = {
        htm: "text/html",
        xml: "text/xml",
        gif: "image/gif",
        jpg: "image/jpeg",
        png: "image/png",
        mso: "application/x-mso",
        thmx: "application/vnd.ms-officetheme",
        sh33tj5: "application/octet-stream"
    };
    function Ic(m, E) {
        if (m.ctype) {
            return m.ctype;
        }
        let _ = m.name || "";
        let k = _.match(/\.([^\.]+)$/);
        if (k && e0[k[1]] || E && (k = (_ = E).match(/[\.\\]([^\.\\])+$/), k && e0[k[1]])) {
            return e0[k[1]];
        }
        return "application/octet-stream";
    }
    function Rc(m) {
        for(var E = Ra(m), _ = [], k = 0; k < E.length; k += 76){
            _.push(E.slice(k, k + 76));
        }
        return _.join(`\r
`) + `\r
`;
    }
    function Nc(m) {
        let E = m.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, (W)=>{
            const H = W.charCodeAt(0).toString(16).toUpperCase();
            return `=${H.length == 1 ? `0${H}` : H}`;
        });
        E = E.replace(/ $/mg, "=20").replace(/\t$/mg, "=09");
        if (E.charAt(0) == `
`) {
            E = `=0D${E.slice(1)}`;
        }
        E = E.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
        const _ = [];
        for(let k = E.split(`\r
`), T = 0; T < k.length; ++T){
            const S = k[T];
            if (S.length == 0) {
                _.push("");
                continue;
            }
            for(let U = 0; U < S.length;){
                let K = 76;
                let M = S.slice(U, U + K);
                M.charAt(K - 1) == "=" ? K-- : M.charAt(K - 2) == "=" ? K -= 2 : M.charAt(K - 3) == "=" && (K -= 3);
                M = S.slice(U, U + K);
                U += K;
                if (U < S.length) {
                    M += "=";
                }
                _.push(M);
            }
        }
        return _.join(`\r
`);
    }
    function bc(m) {
        const E = [];
        for(let _ = 0; _ < m.length; ++_){
            for(var k = m[_]; _ <= m.length && k.charAt(k.length - 1) == "=";){
                k = k.slice(0, k.length - 1) + m[++_];
            }
            E.push(k);
        }
        for(let T = 0; T < E.length; ++T){
            E[T] = E[T].replace(/[=][0-9A-Fa-f]{2}/g, (S)=>String.fromCharCode(parseInt(S.slice(1), 16)));
        }
        return Ir(E.join(`\r
`));
    }
    function Pc(m, E, _) {
        let k = "";
        let T = "";
        let S = "";
        let U;
        for(var K = 0; K < 10; ++K){
            const M = E[K];
            if (!M || M.match(/^\s*$/)) {
                break;
            }
            const W = M.match(/^(.*?):\s*([^\s].*)$/);
            if (W) {
                switch(W[1].toLowerCase()){
                    case "content-location":
                        k = W[2].trim();
                        break;
                    case "content-type":
                        S = W[2].trim();
                        break;
                    case "content-transfer-encoding":
                        T = W[2].trim();
                        break;
                }
            }
        }
        ++K;
        switch(T.toLowerCase()){
            case "base64":
                U = Ir(br(E.slice(K).join("")));
                break;
            case "quoted-printable":
                U = bc(E.slice(K));
                break;
            default:
                throw new Error(`Unsupported Content-Transfer-Encoding ${T}`);
        }
        const H = cfb_add(m, k.slice(_.length), U, {
            unsafe: true
        });
        if (S) {
            H.ctype = S;
        }
    }
    function Lc(m, E) {
        if (V(m.slice(0, 13)).toLowerCase() != "mime-version:") {
            throw new Error("Unsupported MAD header");
        }
        let _ = E && E.root || "";
        const k = (Te && Buffer.isBuffer(m) ? m.toString("binary") : V(m)).split(`\r
`);
        let T = 0;
        let S = "";
        for(T = 0; T < k.length; ++T){
            S = k[T];
            if (!!/^Content-Location:/i.test(S) && (S = S.slice(S.indexOf("file")), _ || (_ = S.slice(0, S.lastIndexOf("/") + 1)), S.slice(0, _.length) != _)) {
                while(_.length > 0 && (_ = _.slice(0, _.length - 1), _ = _.slice(0, _.lastIndexOf("/") + 1), S.slice(0, _.length) != _));
            }
        }
        const U = (k[1] || "").match(/boundary="(.*?)"/);
        if (!U) {
            throw new Error("MAD cannot find boundary");
        }
        const K = `--${U[1] || ""}`;
        const M = [];
        const W = [];
        const H = {
            FileIndex: M,
            FullPaths: W
        };
        F(H);
        let q;
        let se = 0;
        for(T = 0; T < k.length; ++T){
            const ue = k[T];
            if (!(ue !== K && ue !== `${K}--`)) {
                if (se++) {
                    Pc(H, k.slice(q, T), _);
                }
                q = T;
            }
        }
        return H;
    }
    function Bc(m, E) {
        const _ = E || {};
        let k = _.boundary || "SheetJS";
        k = `------=${k}`;
        const T = [
            "MIME-Version: 1.0",
            `Content-Type: multipart/related; boundary="${k.slice(2)}"`,
            "",
            "",
            ""
        ];
        const S = m.FullPaths[0];
        let U = S;
        let K = m.FileIndex[0];
        for(let M = 1; M < m.FullPaths.length; ++M){
            U = m.FullPaths[M].slice(S.length);
            K = m.FileIndex[M];
            if (!(!K.size || !K.content || U == "Sh33tJ5")) {
                U = U.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, (_e)=>`_x${_e.charCodeAt(0).toString(16)}_`).replace(/[\u0080-\uFFFF]/g, (_e)=>`_u${_e.charCodeAt(0).toString(16)}_`);
                const W = K.content;
                const H = Te && Buffer.isBuffer(W) ? W.toString("binary") : V(W);
                let q = 0;
                for(var se = Math.min(1024, H.length), ue = 0, ee = 0; ee <= se; ++ee){
                    (ue = H.charCodeAt(ee)) >= 32 && ue < 128 && ++q;
                }
                const oe = q >= se * 4 / 5;
                T.push(k);
                T.push(`Content-Location: ${_.root || "file:///C:/SheetJS/"}${U}`);
                T.push(`Content-Transfer-Encoding: ${oe ? "quoted-printable" : "base64"}`);
                T.push(`Content-Type: ${Ic(K, U)}`);
                T.push("");
                T.push(oe ? Nc(H) : Rc(H));
            }
        }
        T.push(k + `--\r
`);
        return T.join(`\r
`);
    }
    function cfb_new(m) {
        const E = {};
        F(E, m);
        return E;
    }
    function cfb_add(m, E, _, k) {
        const T = k && k.unsafe;
        if (!T) {
            F(m);
        }
        let S = !T && CFB.find(m, E);
        if (!S) {
            let U = m.FullPaths[0];
            if (E.slice(0, U.length) == U) {
                U = E;
            } else {
                if (U.slice(-1) != "/") {
                    U += "/";
                }
                U = (U + E).replace("//", "/");
            }
            S = {
                name: n(E),
                type: 2
            };
            m.FileIndex.push(S);
            m.FullPaths.push(U);
            if (!T) {
                CFB.utils.cfb_gc(m);
            }
        }
        S.content = _;
        S.size = _ ? _.length : 0;
        k && (k.CLSID && (S.clsid = k.CLSID), k.mt && (S.mt = k.mt), k.ct && (S.ct = k.ct));
        return S;
    }
    function cfb_del(m, E) {
        F(m);
        const _ = CFB.find(m, E);
        if (_) {
            for(let k = 0; k < m.FileIndex.length; ++k){
                if (m.FileIndex[k] == _) {
                    m.FileIndex.splice(k, 1);
                    m.FullPaths.splice(k, 1);
                    return true;
                }
            }
        }
        return false;
    }
    function cfb_mov(m, E, _) {
        F(m);
        const k = CFB.find(m, E);
        if (k) {
            for(let T = 0; T < m.FileIndex.length; ++T){
                if (m.FileIndex[T] == k) {
                    m.FileIndex[T].name = n(_);
                    m.FullPaths[T] = _;
                    return true;
                }
            }
        }
        return false;
    }
    function cfb_gc(m) {
        I(m, true);
    }
    t.find = X;
    t.read = N;
    t.parse = l;
    t.write = ve;
    t.writeFile = Pe;
    t.utils = {
        cfb_new,
        cfb_add,
        cfb_del,
        cfb_mov,
        cfb_gc,
        ReadShift,
        CheckField,
        prep_blob,
        bconcat,
        use_zlib,
        _deflateRaw,
        _inflateRaw,
        consts
    };
    return t;
})();
let Et;
export function set_fs(e) {
    Et = e;
}
function ko(e) {
    if (typeof e === "string") {
        return za(e);
    }
    if (Array.isArray(e)) {
        return zc(e);
    }
    return e;
}
function Ka(filename, t, r) {
    if (typeof Et !== "undefined" && Et.writeFileSync) {
        if (r) {
            return Et.writeFileSync(filename, t, r);
        }
        return Et.writeFileSync(filename, t);
    }
    if (typeof Deno !== "undefined") {
        if (r && typeof t === "string") {
            switch(r){
                case "utf8":
                    t = new TextEncoder(r).encode(t);
                    break;
                case "binary":
                    t = za(t);
                    break;
                default:
                    throw new Error(`Unsupported encoding ${r}`);
            }
        }
        return Deno.writeFileSync(filename, t);
    }
    const a = r == "utf8" ? tt(t) : t;
    if (typeof IE_SaveFile !== "undefined") {
        return IE_SaveFile(a, filename);
    }
    if (typeof Blob !== "undefined") {
        const n = new Blob([
            ko(a)
        ], {
            type: "application/octet-stream"
        });
        if (typeof navigator !== "undefined" && navigator.msSaveBlob) {
            return navigator.msSaveBlob(n, filename);
        }
        if (typeof saveAs !== "undefined") {
            return saveAs(n, filename);
        }
        if (typeof URL !== "undefined" && typeof document !== "undefined" && document.createElement && URL.createObjectURL) {
            const url = URL.createObjectURL(n);
            if (typeof chrome === "object" && typeof (chrome.downloads || {}).download === "function") {
                if (URL.revokeObjectURL && typeof setTimeout !== "undefined") {
                    setTimeout(()=>{
                        URL.revokeObjectURL(url);
                    }, 60000);
                }
                return chrome.downloads.download({
                    url,
                    filename,
                    saveAs: true
                });
            }
            const s = document.createElement("a");
            if (s.download != null) {
                s.download = filename;
                s.href = url;
                document.body.appendChild(s);
                s.click();
                document.body.removeChild(s);
                if (URL.revokeObjectURL && typeof setTimeout !== "undefined") {
                    setTimeout(()=>{
                        URL.revokeObjectURL(url);
                    }, 60000);
                }
                return url;
            }
        }
    }
    if (typeof $ !== "undefined" && typeof File !== "undefined" && typeof Folder !== "undefined") {
        try {
            const f = File(filename);
            f.open("w");
            f.encoding = "binary";
            if (Array.isArray(t)) {
                t = At(t);
            }
            f.write(t);
            f.close();
            return t;
        } catch (error) {
            if (!error.message || !error.message.match(/onstruct/)) {
                throw error;
            }
        }
    }
    throw new Error(`cannot save file ${filename}`);
}
function Eo(e) {
    if (typeof Et !== "undefined") {
        return Et.readFileSync(e);
    }
    if (typeof Deno !== "undefined") {
        return Deno.readFileSync(e);
    }
    if (typeof $ !== "undefined" && typeof File !== "undefined" && typeof Folder !== "undefined") {
        try {
            const t = File(e);
            t.open("r");
            t.encoding = "binary";
            const r = t.read();
            t.close();
            return r;
        } catch (error) {
            if (!error.message || !error.message.match(/onstruct/)) {
                throw error;
            }
        }
    }
    throw new Error(`Cannot access file ${e}`);
}
function je(e) {
    for(var t = Object.keys(e), r = [], a = 0; a < t.length; ++a){
        if (Object.prototype.hasOwnProperty.call(e, t[a])) {
            r.push(t[a]);
        }
    }
    return r;
}
function di(e, t) {
    const r = [];
    for(let a = je(e), n = 0; n !== a.length; ++n){
        if (r[e[a[n]][t]] == null) {
            r[e[a[n]][t]] = a[n];
        }
    }
    return r;
}
function y0(e) {
    const t = [];
    for(let r = je(e), a = 0; a !== r.length; ++a){
        t[e[r[a]]] = r[a];
    }
    return t;
}
function A0(e) {
    const t = [];
    for(let r = je(e), a = 0; a !== r.length; ++a){
        t[e[r[a]]] = parseInt(r[a], 10);
    }
    return t;
}
function To(e) {
    const t = [];
    for(let r = je(e), a = 0; a !== r.length; ++a){
        if (t[e[r[a]]] == null) {
            t[e[r[a]]] = [];
        }
        t[e[r[a]]].push(r[a]);
    }
    return t;
}
const v0 = new Date(1899, 11, 30, 0, 0, 0);
function ir(e, t) {
    const r = e.getTime();
    const a = v0.getTime() + (e.getTimezoneOffset() - v0.getTimezoneOffset()) * 60000;
    return (r - a) / (1440 * 60 * 1000);
}
const Fs = new Date;
const So = v0.getTime() + (Fs.getTimezoneOffset() - v0.getTimezoneOffset()) * 60000;
const vi = Fs.getTimezoneOffset();
function C0(e) {
    const t = new Date;
    t.setTime(e * 24 * 60 * 60 * 1000 + So);
    if (t.getTimezoneOffset() !== vi) {
        t.setTime(t.getTime() + (t.getTimezoneOffset() - vi) * 60000);
    }
    return t;
}
function Fo(e) {
    let t = 0;
    let r = 0;
    let a = false;
    const n = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
    if (!n) {
        throw new Error(`|${e}| is not an ISO8601 Duration`);
    }
    for(let i = 1; i != n.length; ++i){
        if (n[i]) {
            r = 1;
            if (i > 3) {
                a = true;
            }
            switch(n[i].slice(n[i].length - 1)){
                case "Y":
                    throw new Error(`Unsupported ISO Duration Field: ${n[i].slice(n[i].length - 1)}`);
                case "D":
                    r *= 24;
                case "H":
                    r *= 60;
                case "M":
                    if (a) {
                        r *= 60;
                    } else {
                        throw new Error("Unsupported ISO Duration Field: M");
                    }
            }
            t += r * parseInt(n[i], 10);
        }
    }
    return t;
}
const pi = new Date("2017-02-19T19:06:09.000Z");
const ys = isNaN(pi.getFullYear()) ? new Date("2/19/17") : pi;
const yo = ys.getFullYear() == 2017;
function Ve(e, t) {
    const r = new Date(e);
    if (yo) {
        if (t > 0) {
            r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1000);
        } else if (t < 0) {
            r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1000);
        }
        return r;
    }
    if (e instanceof Date) {
        return e;
    }
    if (ys.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
        const a = r.getFullYear();
        if (!(e.indexOf(`${a}`) > -1)) {
            r.setFullYear(r.getFullYear() + 100);
        }
        return r;
    }
    const n = e.match(/\d+/g) || [
        "2017",
        "2",
        "19",
        "0",
        "0",
        "0"
    ];
    let i = new Date(+n[0], +n[1] - 1, +n[2], +n[3] || 0, +n[4] || 0, +n[5] || 0);
    if (e.indexOf("Z") > -1) {
        i = new Date(i.getTime() - i.getTimezoneOffset() * 60 * 1000);
    }
    return i;
}
function Ut(e, t) {
    if (Te && Buffer.isBuffer(e)) {
        if (t) {
            if (e[0] == 255 && e[1] == 254) {
                return tt(e.slice(2).toString("utf16le"));
            }
            if (e[1] == 254 && e[2] == 255) {
                return tt(xs(e.slice(2).toString("binary")));
            }
        }
        return e.toString("binary");
    }
    if (typeof TextDecoder !== "undefined") {
        try {
            if (t) {
                if (e[0] == 255 && e[1] == 254) {
                    return tt(new TextDecoder("utf-16le").decode(e.slice(2)));
                }
                if (e[0] == 254 && e[1] == 255) {
                    return tt(new TextDecoder("utf-16be").decode(e.slice(2)));
                }
            }
            const r = {
                "€": "",
                "‚": "",
                ƒ: "",
                "„": "",
                "…": "",
                "†": "",
                "‡": "",
                ˆ: "",
                "‰": "",
                Š: "",
                "‹": "",
                Œ: "",
                Ž: "",
                "‘": "",
                "’": "",
                "“": "",
                "”": "",
                "•": "",
                "–": "",
                "—": "",
                "˜": "",
                "™": "",
                š: "",
                "›": "",
                œ: "",
                ž: "",
                Ÿ: ""
            };
            if (Array.isArray(e)) {
                e = new Uint8Array(e);
            }
            return new TextDecoder("latin1").decode(e).replace(/[\u20AC\u201A\u0192\u201E\u2026\u2020\u2021\u02C6\u2030\u0160\u2039\u0152\u017D\u2018\u2019\u201C\u201D\u2022\u2013\u2014\u02DC\u2122\u0161\u203A\u0153\u017E\u0178]/g, (i)=>r[i] || i);
        } catch  {}
    }
    const a = [];
    for(let n = 0; n != e.length; ++n){
        a.push(String.fromCharCode(e[n]));
    }
    return a.join("");
}
function Me(e) {
    if (typeof JSON !== "undefined" && !Array.isArray(e)) {
        return JSON.parse(JSON.stringify(e));
    }
    if (typeof e !== "object" || e == null) {
        return e;
    }
    if (e instanceof Date) {
        return new Date(e.getTime());
    }
    const t = {};
    for(const r in e){
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            t[r] = Me(e[r]);
        }
    }
    return t;
}
function $e(e, t) {
    for(var r = ""; r.length < t;){
        r += e;
    }
    return r;
}
function jr(e) {
    let t = Number(e);
    if (!isNaN(t)) {
        if (isFinite(t)) {
            return t;
        }
        return NaN;
    }
    if (!/\d/.test(e)) {
        return t;
    }
    let r = 1;
    let a = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, ()=>{
        r *= 100;
        return "";
    });
    if (!isNaN(t = Number(a)) || (a = a.replace(/[(](.*)[)]/, (n, i)=>{
        r = -r;
        return i;
    }), !isNaN(t = Number(a)))) {
        return t / r;
    }
    return t;
}
const Ao = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
];
function fa(e) {
    const t = new Date(e);
    const r = new Date(NaN);
    const a = t.getYear();
    const n = t.getMonth();
    const i = t.getDate();
    if (isNaN(i)) {
        return r;
    }
    let s = e.toLowerCase();
    if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
        s = s.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "");
        if (s.length > 3 && Ao.indexOf(s) == -1) {
            return r;
        }
    } else if (s.match(/[a-z]/)) {
        return r;
    }
    if (a < 0 || a > 8099) {
        return r;
    }
    if ((n > 0 || i > 1) && a != 101) {
        return t;
    }
    if (e.match(/[^-0-9:,\/\\]/)) {
        return r;
    }
    return t;
}
const Co = (()=>{
    const e = "abacaba".split(/(:?b)/i).length == 5;
    return (r, a, n)=>{
        if (e || typeof a === "string") {
            return r.split(a);
        }
        for(var i = r.split(a), s = [
            i[0]
        ], f = 1; f < i.length; ++f){
            s.push(n);
            s.push(i[f]);
        }
        return s;
    };
})();
function As(e) {
    if (e) {
        if (e.content && e.type) {
            return Ut(e.content, true);
        }
        if (e.data) {
            return ra(e.data);
        }
        if (e.asNodeBuffer && Te) {
            return ra(e.asNodeBuffer().toString("binary"));
        }
        if (e.asBinary) {
            return ra(e.asBinary());
        }
        if (e._data && e._data.getContent) {
            return ra(Ut(Array.prototype.slice.call(e._data.getContent(), 0)));
        }
        return null;
    }
    return null;
}
function Cs(e) {
    if (!e) {
        return null;
    }
    if (e.data) {
        return u0(e.data);
    }
    if (e.asNodeBuffer && Te) {
        return e.asNodeBuffer();
    }
    if (e._data && e._data.getContent) {
        const t = e._data.getContent();
        if (typeof t === "string") {
            return u0(t);
        }
        return Array.prototype.slice.call(t);
    }
    if (e.content && e.type) {
        return e.content;
    }
    return null;
}
function Do(e) {
    if (e && e.name.slice(-4) === ".bin") {
        return Cs(e);
    }
    return As(e);
}
function Vr(e, t) {
    for(let r = e.FullPaths || je(e.files), a = t.toLowerCase().replace(/[\/]/g, "\\"), n = a.replace(/\\/g, "/"), i = 0; i < r.length; ++i){
        const s = r[i].replace(/^Root Entry[\/]/, "").toLowerCase();
        if (a == s || n == s) {
            if (e.files) {
                return e.files[r[i]];
            }
            return e.FileIndex[i];
        }
    }
    return null;
}
function vn(e, t) {
    const r = Vr(e, t);
    if (r == null) {
        throw new Error(`Cannot find file ${t} in zip`);
    }
    return r;
}
function rr(e, t, r) {
    if (!r) {
        return Do(vn(e, t));
    }
    if (!t) {
        return null;
    }
    try {
        return rr(e, t);
    } catch  {
        return null;
    }
}
function Rr(e, t, r) {
    if (!r) {
        return As(vn(e, t));
    }
    if (!t) {
        return null;
    }
    try {
        return Rr(e, t);
    } catch  {
        return null;
    }
}
function Oo(e, t, r) {
    return Cs(vn(e, t));
}
function mi(e) {
    for(var t = e.FullPaths || je(e.files), r = [], a = 0; a < t.length; ++a){
        if (t[a].slice(-1) != "/") {
            r.push(t[a].replace(/^Root Entry[\/]/, ""));
        }
    }
    return r.sort();
}
function ke(e, t, r) {
    if (e.FullPaths) {
        if (typeof r === "string") {
            let a;
            if (Te) {
                a = xt(r);
            } else {
                a = $c(r);
            }
            return CFB.utils.cfb_add(e, t, a);
        }
        CFB.utils.cfb_add(e, t, r);
    } else {
        e.file(t, r);
    }
}
function pn() {
    return CFB.utils.cfb_new();
}
function Ds(e, t) {
    switch(t.type){
        case "base64":
            return CFB.read(e, {
                type: "base64"
            });
        case "binary":
            return CFB.read(e, {
                type: "binary"
            });
        case "buffer":
        case "array":
            return CFB.read(e, {
                type: "buffer"
            });
    }
    throw new Error(`Unrecognized type ${t.type}`);
}
function Ea(e, t) {
    if (e.charAt(0) == "/") {
        return e.slice(1);
    }
    const r = t.split("/");
    if (t.slice(-1) != "/") {
        r.pop();
    }
    for(const a = e.split("/"); a.length !== 0;){
        const n = a.shift();
        if (n === "..") {
            r.pop();
        } else if (n !== ".") {
            r.push(n);
        }
    }
    return r.join("/");
}
const Qe = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`;
const Io = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g;
const gi = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/mg;
const Ro = /<[^>]*>/g;
const Er = Qe.match(gi) ? gi : Ro;
const No = /<\w*:/;
const bo = /<(\/?)\w+:/;
function me(e, t, r) {
    const a = {};
    for(var n = 0, i = 0; n !== e.length && !((i = e.charCodeAt(n)) === 32 || i === 10 || i === 13); ++n);
    if (!t) {
        a[0] = e.slice(0, n);
    }
    if (n === e.length) {
        return a;
    }
    const s = e.match(Io);
    let f = 0;
    let c = "";
    let o = 0;
    let l = "";
    let u = "";
    let x = 1;
    if (s) {
        for(o = 0; o != s.length; ++o){
            u = s[o];
            for(i = 0; i != u.length && u.charCodeAt(i) !== 61; ++i);
            for(l = u.slice(0, i).trim(); u.charCodeAt(i + 1) == 32;){
                ++i;
            }
            x = (n = u.charCodeAt(i + 1)) == 34 || n == 39 ? 1 : 0;
            c = u.slice(i + 1 + x, u.length - x);
            for(f = 0; f != l.length && l.charCodeAt(f) !== 58; ++f);
            if (f === l.length) {
                if (l.indexOf("_") > 0) {
                    l = l.slice(0, l.indexOf("_"));
                }
                a[l] = c;
                a[l.toLowerCase()] = c;
            } else {
                const d = (f === 5 && l.slice(0, 5) === "xmlns" ? "xmlns" : "") + l.slice(f + 1);
                if (a[d] && l.slice(f - 3, f) == "ext") {
                    continue;
                }
                a[d] = c;
                a[d.toLowerCase()] = c;
            }
        }
    }
    return a;
}
function it(e) {
    return e.replace(bo, "<$1");
}
const Os = {
    "&quot;": '"',
    "&apos;": "'",
    "&gt;": ">",
    "&lt;": "<",
    "&amp;": "&"
};
const mn = y0(Os);
const Oe = (()=>{
    const e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig;
    const t = /_x([\da-fA-F]{4})_/ig;
    return function r(a) {
        const n = `${a}`;
        const i = n.indexOf("<![CDATA[");
        if (i == -1) {
            return n.replace(e, (f, c)=>Os[f] || String.fromCharCode(parseInt(c, f.indexOf("x") > -1 ? 16 : 10)) || f).replace(t, (f, c)=>String.fromCharCode(parseInt(c, 16)));
        }
        const s = n.indexOf("]]>");
        return r(n.slice(0, i)) + n.slice(i + 9, s) + r(n.slice(s + 3));
    };
})();
const gn = /[&<>'"]/g;
const Po = /[\u0000-\u0008\u000b-\u001f]/g;
function be(e) {
    const t = `${e}`;
    return t.replace(gn, (r)=>mn[r]).replace(Po, (r)=>`_x${`000${r.charCodeAt(0).toString(16)}`.slice(-4)}_`);
}
function _i(e) {
    return be(e).replace(/ /g, "_x0020_");
}
const Is = /[\u0000-\u001f]/g;
function _n(e) {
    const t = `${e}`;
    return t.replace(gn, (r)=>mn[r]).replace(/\n/g, "<br/>").replace(Is, (r)=>`&#x${`000${r.charCodeAt(0).toString(16)}`.slice(-4)};`);
}
function Lo(e) {
    const t = `${e}`;
    return t.replace(gn, (r)=>mn[r]).replace(Is, (r)=>`&#x${r.charCodeAt(0).toString(16).toUpperCase()};`);
}
const wi = (()=>{
    const e = /&#(\d+);/g;
    function t(r, a) {
        return String.fromCharCode(parseInt(a, 10));
    }
    return (a)=>a.replace(e, t);
})();
function Bo(e) {
    return e.replace(/(\r\n|[\r\n])/g, "&#10;");
}
function We(e) {
    switch(e){
        case 1:
        case true:
        case "1":
        case "true":
        case "TRUE":
            return true;
        default:
            return false;
    }
}
function M0(e) {
    let t = "";
    for(let r = 0, a = 0, n = 0, i = 0, s = 0, f = 0; r < e.length;){
        a = e.charCodeAt(r++);
        if (a < 128) {
            t += String.fromCharCode(a);
            continue;
        }
        n = e.charCodeAt(r++);
        if (a > 191 && a < 224) {
            s = (a & 31) << 6;
            s |= n & 63;
            t += String.fromCharCode(s);
            continue;
        }
        i = e.charCodeAt(r++);
        if (a < 240) {
            t += String.fromCharCode((a & 15) << 12 | (n & 63) << 6 | i & 63);
            continue;
        }
        s = e.charCodeAt(r++);
        f = ((a & 7) << 18 | (n & 63) << 12 | (i & 63) << 6 | s & 63) - 65536;
        t += String.fromCharCode(55296 + (f >>> 10 & 1023));
        t += String.fromCharCode(56320 + (f & 1023));
    }
    return t;
}
function ki(e) {
    const t = Tt(2 * e.length);
    let r;
    let a;
    let n = 1;
    let i = 0;
    let s = 0;
    let f;
    for(a = 0; a < e.length; a += n){
        n = 1;
        if ((f = e.charCodeAt(a)) < 128) {
            r = f;
        } else if (f < 224) {
            r = (f & 31) * 64 + (e.charCodeAt(a + 1) & 63);
            n = 2;
        } else if (f < 240) {
            r = (f & 15) * 4096 + (e.charCodeAt(a + 1) & 63) * 64 + (e.charCodeAt(a + 2) & 63);
            n = 3;
        } else {
            n = 4;
            r = (f & 7) * 262144 + (e.charCodeAt(a + 1) & 63) * 4096 + (e.charCodeAt(a + 2) & 63) * 64 + (e.charCodeAt(a + 3) & 63);
            r -= 65536;
            s = 55296 + (r >>> 10 & 1023);
            r = 56320 + (r & 1023);
        }
        if (s !== 0) {
            t[i++] = s & 255;
            t[i++] = s >>> 8;
            s = 0;
        }
        t[i++] = r % 256;
        t[i++] = r >>> 8;
    }
    return t.slice(0, i).toString("ucs2");
}
function Ei(e) {
    return xt(e, "binary").toString("utf8");
}
const r0 = "foo bar bazâð£";
const Le = Te && (Ei(r0) == M0(r0) && Ei || ki(r0) == M0(r0) && ki) || M0;
var tt = Te ? (e)=>xt(e, "utf8").toString("binary") : (e)=>{
    const t = [];
    for(let r = 0, a = 0, n = 0; r < e.length;){
        a = e.charCodeAt(r++);
        switch(true){
            case a < 128:
                t.push(String.fromCharCode(a));
                break;
            case a < 2048:
                t.push(String.fromCharCode(192 + (a >> 6)));
                t.push(String.fromCharCode(128 + (a & 63)));
                break;
            case a >= 55296 && a < 57344:
                a -= 55296;
                n = e.charCodeAt(r++) - 56320 + (a << 10);
                t.push(String.fromCharCode(240 + (n >> 18 & 7)));
                t.push(String.fromCharCode(144 + (n >> 12 & 63)));
                t.push(String.fromCharCode(128 + (n >> 6 & 63)));
                t.push(String.fromCharCode(128 + (n & 63)));
                break;
            default:
                t.push(String.fromCharCode(224 + (a >> 12)));
                t.push(String.fromCharCode(128 + (a >> 6 & 63)));
                t.push(String.fromCharCode(128 + (a & 63)));
        }
    }
    return t.join("");
};
const ba = (()=>{
    const e = {};
    return (r, a)=>{
        const n = `${r}|${a || ""}`;
        if (e[n]) {
            return e[n];
        }
        return e[n] = new RegExp(`<(?:\\w+:)?${r}(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?${r}>`, a || "");
    };
})();
const Rs = (()=>{
    const e = [
        [
            "nbsp",
            " "
        ],
        [
            "middot",
            "·"
        ],
        [
            "quot",
            '"'
        ],
        [
            "apos",
            "'"
        ],
        [
            "gt",
            ">"
        ],
        [
            "lt",
            "<"
        ],
        [
            "amp",
            "&"
        ]
    ].map((t)=>[
            new RegExp(`&${t[0]};`, "ig"),
            t[1]
        ]);
    return (r)=>{
        let a = r.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^>]*>/g, "");
        for(let n = 0; n < e.length; ++n){
            a = a.replace(e[n][0], e[n][1]);
        }
        return a;
    };
})();
const Mo = (()=>{
    const e = {};
    return (r)=>{
        if (e[r] !== undefined) {
            return e[r];
        }
        return e[r] = new RegExp(`<(?:vt:)?${r}>([\\s\\S]*?)</(?:vt:)?${r}>`, "g");
    };
})();
const Uo = /<\/?(?:vt:)?variant>/g;
const Wo = /<(?:vt:)([^>]*)>([\s\S]*)</;
function Ti(e, t) {
    const r = me(e);
    const a = e.match(Mo(r.baseType)) || [];
    const n = [];
    if (a.length != r.size) {
        if (t.WTF) {
            throw new Error(`unexpected vector length ${a.length} != ${r.size}`);
        }
        return n;
    }
    a.forEach((i)=>{
        const s = i.replace(Uo, "").match(Wo);
        if (s) {
            n.push({
                v: Le(s[2]),
                t: s[1]
            });
        }
    });
    return n;
}
const Ns = /(^\s|\s$|\n)/;
function hr(e, t) {
    return `<${e}${t.match(Ns) ? ' xml:space="preserve"' : ""}>${t}</${e}>`;
}
function Pa(e) {
    return je(e).map((t)=>` ${t}="${e[t]}"`).join("");
}
function ae(e, t, r) {
    return `<${e}${r != null ? Pa(r) : ""}${t != null ? `${t.match(Ns) ? ' xml:space="preserve"' : ""}>${t}</${e}` : "/"}>`;
}
function q0(e, t) {
    try {
        return e.toISOString().replace(/\.\d*/, "");
    } catch (error) {
        if (t) {
            throw error;
        }
    }
    return "";
}
function Ho(e, t) {
    switch(typeof e){
        case "string":
            let r = ae("vt:lpwstr", be(e));
            r = r.replace(/&quot;/g, "_x0022_");
            return r;
        case "number":
            return ae((e | 0) == e ? "vt:i4" : "vt:r8", be(String(e)));
        case "boolean":
            return ae("vt:bool", e ? "true" : "false");
    }
    if (e instanceof Date) {
        return ae("vt:filetime", q0(e));
    }
    throw new Error(`Unable to serialize ${e}`);
}
function wn(e) {
    if (Te && Buffer.isBuffer(e)) {
        return e.toString("utf8");
    }
    if (typeof e === "string") {
        return e;
    }
    if (typeof Uint8Array !== "undefined" && e instanceof Uint8Array) {
        return Le(At(hn(e)));
    }
    throw new Error("Bad input format: expected Buffer or string");
}
const La = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/mg;
const nr = {
    CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
    CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
    EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
    CT: "http://schemas.openxmlformats.org/package/2006/content-types",
    RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
    TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
    dc: "http://purl.org/dc/elements/1.1/",
    dcterms: "http://purl.org/dc/terms/",
    dcmitype: "http://purl.org/dc/dcmitype/",
    r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
    xsi: "http://www.w3.org/2001/XMLSchema-instance",
    xsd: "http://www.w3.org/2001/XMLSchema"
};
const zt = [
    "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "http://purl.oclc.org/ooxml/spreadsheetml/main",
    "http://schemas.microsoft.com/office/excel/2006/main",
    "http://schemas.microsoft.com/office/excel/2006/2"
];
const Or = {
    o: "urn:schemas-microsoft-com:office:office",
    x: "urn:schemas-microsoft-com:office:excel",
    ss: "urn:schemas-microsoft-com:office:spreadsheet",
    dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
    mv: "http://macVmlSchemaUri",
    v: "urn:schemas-microsoft-com:vml",
    html: "http://www.w3.org/TR/REC-html40"
};
function Vo(e, t) {
    const r = 1 - 2 * (e[t + 7] >>> 7);
    let a = ((e[t + 7] & 127) << 4) + (e[t + 6] >>> 4 & 15);
    let n = e[t + 6] & 15;
    for(let i = 5; i >= 0; --i){
        n = n * 256 + e[t + i];
    }
    if (a == 2047) {
        if (n == 0) {
            return r * Infinity;
        }
        return NaN;
    }
    if (a == 0) {
        a = -1022;
    } else {
        a -= 1023;
        n += 2 ** 52;
    }
    return r * 2 ** (a - 52) * n;
}
function Xo(e, t, r) {
    const a = (t < 0 || 1 / t == -Infinity ? 1 : 0) << 7;
    let n = 0;
    let i = 0;
    const s = a ? -t : t;
    if (isFinite(s)) {
        if (s == 0) {
            i = 0;
            n = 0;
        } else {
            n = Math.floor(Math.log(s) / Math.LN2);
            i = s * 2 ** (52 - n);
            if (n <= -1023 && (!isFinite(i) || i < 2 ** 52)) {
                n = -1022;
            } else {
                i -= 2 ** 52;
                n += 1023;
            }
        }
    } else {
        n = 2047;
        i = isNaN(t) ? 26985 : 0;
    }
    for(let f = 0; f <= 5; ++f, i /= 256){
        e[r + f] = i & 255;
    }
    e[r + 6] = (n & 15) << 4 | i & 15;
    e[r + 7] = n >> 4 | a;
}
const Si = (e)=>{
    const t = [];
    const r = 10240;
    for(let a = 0; a < e[0].length; ++a){
        if (e[0][a]) {
            for(let n = 0, i = e[0][a].length; n < i; n += r){
                t.push(...e[0][a].slice(n, n + r));
            }
        }
    }
    return t;
};
var Fi = Te ? (e)=>{
    if (e[0].length > 0 && Buffer.isBuffer(e[0][0])) {
        return Buffer.concat(e[0].map((t)=>{
            if (Buffer.isBuffer(t)) {
                return t;
            }
            return xt(t);
        }));
    }
    return Si(e);
} : Si;
const yi = (e, t, r)=>{
    const a = [];
    for(let n = t; n < r; n += 2){
        a.push(String.fromCharCode(lt(e, n)));
    }
    return a.join("").replace(_r, "");
};
var D0 = Te ? (e, t, r)=>{
    if (Buffer.isBuffer(e)) {
        return e.toString("utf16le", t, r).replace(_r, "");
    }
    return yi(e, t, r);
} : yi;
const Ai = (e, t, r)=>{
    const a = [];
    for(let n = t; n < t + r; ++n){
        a.push(`0${e[n].toString(16)}`.slice(-2));
    }
    return a.join("");
};
var bs = Te ? (e, t, r)=>{
    if (Buffer.isBuffer(e)) {
        return e.toString("hex", t, t + r);
    }
    return Ai(e, t, r);
} : Ai;
const Ci = (e, t, r)=>{
    const a = [];
    for(let n = t; n < r; n++){
        a.push(String.fromCharCode(ea(e, n)));
    }
    return a.join("");
};
var ua = Te ? (t, r, a)=>{
    if (Buffer.isBuffer(t)) {
        return t.toString("utf8", r, a);
    }
    return Ci(t, r, a);
} : Ci;
const Ps = (e, t)=>{
    const r = fr(e, t);
    if (r > 0) {
        return ua(e, t + 4, t + 4 + r - 1);
    }
    return "";
};
var kn = Ps;
const Ls = (e, t)=>{
    const r = fr(e, t);
    if (r > 0) {
        return ua(e, t + 4, t + 4 + r - 1);
    }
    return "";
};
var En = Ls;
const Bs = (e, t)=>{
    const r = 2 * fr(e, t);
    if (r > 0) {
        return ua(e, t + 4, t + 4 + r - 1);
    }
    return "";
};
var Tn = Bs;
const Ms = (t, r)=>{
    const a = fr(t, r);
    if (a > 0) {
        return D0(t, r + 4, r + 4 + a);
    }
    return "";
};
var Sn = Ms;
const Us = (e, t)=>{
    const r = fr(e, t);
    if (r > 0) {
        return ua(e, t + 4, t + 4 + r);
    }
    return "";
};
var Fn = Us;
const Ws = (e, t)=>Vo(e, t);
var p0 = Ws;
let yn = (t)=>Array.isArray(t) || typeof Uint8Array !== "undefined" && t instanceof Uint8Array;
if (Te) {
    kn = (t, r)=>{
        if (!Buffer.isBuffer(t)) {
            return Ps(t, r);
        }
        const a = t.readUInt32LE(r);
        if (a > 0) {
            return t.toString("utf8", r + 4, r + 4 + a - 1);
        }
        return "";
    };
    En = (t, r)=>{
        if (!Buffer.isBuffer(t)) {
            return Ls(t, r);
        }
        const a = t.readUInt32LE(r);
        if (a > 0) {
            return t.toString("utf8", r + 4, r + 4 + a - 1);
        }
        return "";
    };
    Tn = (t, r)=>{
        if (!Buffer.isBuffer(t)) {
            return Bs(t, r);
        }
        const a = 2 * t.readUInt32LE(r);
        return t.toString("utf16le", r + 4, r + 4 + a - 1);
    };
    Sn = (t, r)=>{
        if (!Buffer.isBuffer(t)) {
            return Ms(t, r);
        }
        const a = t.readUInt32LE(r);
        return t.toString("utf16le", r + 4, r + 4 + a);
    };
    Fn = (t, r)=>{
        if (!Buffer.isBuffer(t)) {
            return Us(t, r);
        }
        const a = t.readUInt32LE(r);
        return t.toString("utf8", r + 4, r + 4 + a);
    };
    p0 = (t, r)=>{
        if (Buffer.isBuffer(t)) {
            return t.readDoubleLE(r);
        }
        return Ws(t, r);
    };
    yn = (t)=>Buffer.isBuffer(t) || Array.isArray(t) || typeof Uint8Array !== "undefined" && t instanceof Uint8Array;
}
function Hs() {
    D0 = (e, t, r)=>De.utils.decode(1200, e.slice(t, r)).replace(_r, "");
    ua = (e, t, r)=>De.utils.decode(65001, e.slice(t, r));
    kn = (e, t)=>{
        const r = fr(e, t);
        if (r > 0) {
            return De.utils.decode(Bt, e.slice(t + 4, t + 4 + r - 1));
        }
        return "";
    };
    En = (e, t)=>{
        const r = fr(e, t);
        if (r > 0) {
            return De.utils.decode(Nr, e.slice(t + 4, t + 4 + r - 1));
        }
        return "";
    };
    Tn = (e, t)=>{
        const r = 2 * fr(e, t);
        if (r > 0) {
            return De.utils.decode(1200, e.slice(t + 4, t + 4 + r - 1));
        }
        return "";
    };
    Sn = (e, t)=>{
        const r = fr(e, t);
        if (r > 0) {
            return De.utils.decode(1200, e.slice(t + 4, t + 4 + r));
        }
        return "";
    };
    Fn = (e, t)=>{
        const r = fr(e, t);
        if (r > 0) {
            return De.utils.decode(65001, e.slice(t + 4, t + 4 + r));
        }
        return "";
    };
}
if (typeof De !== "undefined") {
    Hs();
}
var ea = (e, t)=>e[t];
var lt = (e, t)=>e[t + 1] * 256 + e[t];
var Go = (e, t)=>{
    const r = e[t + 1] * 256 + e[t];
    if (r < 32768) {
        return r;
    }
    return (65535 - r + 1) * -1;
};
var fr = (e, t)=>e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t];
var Rt = (e, t)=>e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
var zo = (e, t)=>e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
function ReadShift(e, t) {
    let r = "";
    let a;
    let n;
    const i = [];
    let s;
    let f;
    let c;
    let o;
    switch(t){
        case "dbcs":
            o = this.l;
            if (Te && Buffer.isBuffer(this)) {
                r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
            } else {
                for(c = 0; c < e; ++c){
                    r += String.fromCharCode(lt(this, o));
                    o += 2;
                }
            }
            e *= 2;
            break;
        case "utf8":
            r = ua(this, this.l, this.l + e);
            break;
        case "utf16le":
            e *= 2;
            r = D0(this, this.l, this.l + e);
            break;
        case "wstr":
            if (typeof De !== "undefined") {
                r = De.utils.decode(Nr, this.slice(this.l, this.l + 2 * e));
            } else {
                return ReadShift.call(this, e, "dbcs");
            }
            e = 2 * e;
            break;
        case "lpstr-ansi":
            r = kn(this, this.l);
            e = 4 + fr(this, this.l);
            break;
        case "lpstr-cp":
            r = En(this, this.l);
            e = 4 + fr(this, this.l);
            break;
        case "lpwstr":
            r = Tn(this, this.l);
            e = 4 + 2 * fr(this, this.l);
            break;
        case "lpp4":
            e = 4 + fr(this, this.l);
            r = Sn(this, this.l);
            if (e & 2) {
                e += 2;
            }
            break;
        case "8lpp4":
            e = 4 + fr(this, this.l);
            r = Fn(this, this.l);
            if (e & 3) {
                e += 4 - (e & 3);
            }
            break;
        case "cstr":
            e = 0;
            for(r = ""; (s = ea(this, this.l + e++)) !== 0;){
                i.push(wa(s));
            }
            r = i.join("");
            break;
        case "_wstr":
            e = 0;
            for(r = ""; (s = lt(this, this.l + e)) !== 0;){
                i.push(wa(s));
                e += 2;
            }
            e += 2;
            r = i.join("");
            break;
        case "dbcs-cont":
            r = "";
            o = this.l;
            for(c = 0; c < e; ++c){
                if (this.lens && this.lens.indexOf(o) !== -1) {
                    s = ea(this, o);
                    this.l = o + 1;
                    f = ReadShift.call(this, e - c, s ? "dbcs-cont" : "sbcs-cont");
                    return i.join("") + f;
                }
                i.push(wa(lt(this, o)));
                o += 2;
            }
            r = i.join("");
            e *= 2;
            break;
        case "cpstr":
            if (typeof De !== "undefined") {
                r = De.utils.decode(Nr, this.slice(this.l, this.l + e));
                break;
            }
        case "sbcs-cont":
            r = "";
            o = this.l;
            for(c = 0; c != e; ++c){
                if (this.lens && this.lens.indexOf(o) !== -1) {
                    s = ea(this, o);
                    this.l = o + 1;
                    f = ReadShift.call(this, e - c, s ? "dbcs-cont" : "sbcs-cont");
                    return i.join("") + f;
                }
                i.push(wa(ea(this, o)));
                o += 1;
            }
            r = i.join("");
            break;
        default:
            switch(e){
                case 1:
                    a = ea(this, this.l);
                    this.l++;
                    return a;
                case 2:
                    a = (t === "i" ? Go : lt)(this, this.l);
                    this.l += 2;
                    return a;
                case 4:
                case -4:
                    if (t === "i" || (this[this.l + 3] & 128) === 0) {
                        a = (e > 0 ? Rt : zo)(this, this.l);
                        this.l += 4;
                        return a;
                    }
                    n = fr(this, this.l);
                    this.l += 4;
                    return n;
                case 8:
                case -8:
                    if (t === "f") {
                        if (e == 8) {
                            n = p0(this, this.l);
                        } else {
                            n = p0([
                                this[this.l + 7],
                                this[this.l + 6],
                                this[this.l + 5],
                                this[this.l + 4],
                                this[this.l + 3],
                                this[this.l + 2],
                                this[this.l + 1],
                                this[this.l + 0]
                            ], 0);
                        }
                        this.l += 8;
                        return n;
                    }
                    e = 8;
                case 16:
                    r = bs(this, this.l, e);
                    break;
            }
    }
    this.l += e;
    return r;
}
var $o = (e, t, r)=>{
    e[r] = t & 255;
    e[r + 1] = t >>> 8 & 255;
    e[r + 2] = t >>> 16 & 255;
    e[r + 3] = t >>> 24 & 255;
};
var Ko = (e, t, r)=>{
    e[r] = t & 255;
    e[r + 1] = t >> 8 & 255;
    e[r + 2] = t >> 16 & 255;
    e[r + 3] = t >> 24 & 255;
};
var Yo = (e, t, r)=>{
    e[r] = t & 255;
    e[r + 1] = t >>> 8 & 255;
};
function jo(e, t, r) {
    let a = 0;
    let n = 0;
    if (r === "dbcs") {
        for(n = 0; n != t.length; ++n){
            Yo(this, t.charCodeAt(n), this.l + 2 * n);
        }
        a = 2 * t.length;
    } else if (r === "sbcs") {
        if (typeof De !== "undefined" && Bt == 874) {
            for(n = 0; n != t.length; ++n){
                const i = De.utils.encode(Bt, t.charAt(n));
                this[this.l + n] = i[0];
            }
        } else {
            t = t.replace(/[^\x00-\x7F]/g, "_");
            for(n = 0; n != t.length; ++n){
                this[this.l + n] = t.charCodeAt(n) & 255;
            }
        }
        a = t.length;
    } else if (r === "hex") {
        for(; n < e; ++n){
            this[this.l++] = parseInt(t.slice(2 * n, 2 * n + 2), 16) || 0;
        }
        return this;
    } else if (r === "utf16le") {
        const s = Math.min(this.l + e, this.length);
        for(n = 0; n < Math.min(t.length, e); ++n){
            const f = t.charCodeAt(n);
            this[this.l++] = f & 255;
            this[this.l++] = f >> 8;
        }
        while(this.l < s){
            this[this.l++] = 0;
        }
        return this;
    } else {
        switch(e){
            case 1:
                a = 1;
                this[this.l] = t & 255;
                break;
            case 2:
                a = 2;
                this[this.l] = t & 255;
                t >>>= 8;
                this[this.l + 1] = t & 255;
                break;
            case 3:
                a = 3;
                this[this.l] = t & 255;
                t >>>= 8;
                this[this.l + 1] = t & 255;
                t >>>= 8;
                this[this.l + 2] = t & 255;
                break;
            case 4:
                a = 4;
                $o(this, t, this.l);
                break;
            case 8:
                a = 8;
                if (r === "f") {
                    Xo(this, t, this.l);
                    break;
                }
            case 16:
                break;
            case -4:
                a = 4;
                Ko(this, t, this.l);
                break;
        }
    }
    this.l += a;
    return this;
}
function CheckField(e, t) {
    const r = bs(this, this.l, e.length >> 1);
    if (r !== e) {
        throw new Error(`${t}Expected ${e} saw ${r}`);
    }
    this.l += e.length >> 1;
}
function prep_blob(e, t) {
    e.l = t;
    e.read_shift = ReadShift;
    e.chk = CheckField;
    e.write_shift = jo;
}
function kr(e, t) {
    e.l += t;
}
function G(e) {
    const t = Tt(e);
    prep_blob(t, 0);
    return t;
}
function dt(e, t, r) {
    if (e) {
        let a;
        let n;
        let i;
        prep_blob(e, e.l || 0);
        for(let s = e.length, f = 0, c = 0; e.l < s;){
            f = e.read_shift(1);
            if (f & 128) {
                f = (f & 127) + ((e.read_shift(1) & 127) << 7);
            }
            const o = Va[f] || Va[65535];
            a = e.read_shift(1);
            i = a & 127;
            for(n = 1; n < 4 && a & 128; ++n){
                i += ((a = e.read_shift(1)) & 127) << 7 * n;
            }
            c = e.l + i;
            const l = o.f && o.f(e, i, r);
            e.l = c;
            if (t(l, o, f)) {
                return;
            }
        }
    }
}
function Cr() {
    const _bufs = [];
    const t = Te ? 256 : 2048;
    const r = (o)=>{
        const l = G(o);
        prep_blob(l, 0);
        return l;
    };
    let a = r(t);
    const n = ()=>{
        if (a) {
            if (a.length > a.l) {
                a = a.slice(0, a.l);
                a.l = a.length;
            }
            if (a.length > 0) {
                _bufs.push(a);
            }
            a = null;
        }
    };
    const next = (o)=>{
        if (a && o < a.length - a.l) {
            return a;
        }
        n();
        return a = r(Math.max(o + 1, t));
    };
    const end = ()=>{
        n();
        return bconcat(_bufs);
    };
    const push = (o)=>{
        n();
        a = o;
        if (a.l == null) {
            a.l = a.length;
        }
        next(t);
    };
    return {
        next,
        push,
        end,
        _bufs
    };
}
function j(e, t, r, a) {
    const n = +t;
    let i;
    if (!isNaN(n)) {
        if (!a) {
            a = Va[n].p || (r || []).length || 0;
        }
        i = 1 + (n >= 128 ? 1 : 0) + 1;
        a >= 128 && ++i;
        a >= 16384 && ++i;
        a >= 2097152 && ++i;
        const s = e.next(i);
        if (n <= 127) {
            s.write_shift(1, n);
        } else {
            s.write_shift(1, (n & 127) + 128);
            s.write_shift(1, n >> 7);
        }
        for(let f = 0; f != 4; ++f){
            if (a >= 128) {
                s.write_shift(1, (a & 127) + 128);
                a >>= 7;
            } else {
                s.write_shift(1, a);
                break;
            }
        }
        if (a > 0 && yn(r)) {
            e.push(r);
        }
    }
}
function Sa(e, t, r) {
    const a = Me(e);
    t.s ? (a.cRel && (a.c += t.s.c), a.rRel && (a.r += t.s.r)) : (a.cRel && (a.c += t.c), a.rRel && (a.r += t.r));
    if (!r || r.biff < 12) {
        while(a.c >= 256){
            a.c -= 256;
        }
        while(a.r >= 65536){
            a.r -= 65536;
        }
    }
    return a;
}
function Di(e, t, r) {
    const a = Me(e);
    a.s = Sa(a.s, t.s, r);
    a.e = Sa(a.e, t.s, r);
    return a;
}
function Fa(e, t) {
    if (e.cRel && e.c < 0) {
        for(e = Me(e); e.c < 0;){
            e.c += t > 8 ? 16384 : 256;
        }
    }
    if (e.rRel && e.r < 0) {
        for(e = Me(e); e.r < 0;){
            e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
        }
    }
    let r = encode_cell(e);
    if (!e.cRel && e.cRel != null) {
        r = qo(r);
    }
    if (!e.rRel && e.rRel != null) {
        r = Jo(r);
    }
    return r;
}
function U0(e, t) {
    if (e.s.r == 0 && !e.s.rRel && e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) && !e.e.rRel) {
        return `${(e.s.cRel ? "" : "$") + encode_col(e.s.c)}:${e.e.cRel ? "" : "$"}${encode_col(e.e.c)}`;
    }
    if (e.s.c == 0 && !e.s.cRel && e.e.c == (t.biff >= 12 ? 16383 : 255) && !e.e.cRel) {
        return `${(e.s.rRel ? "" : "$") + encode_row(e.s.r)}:${e.e.rRel ? "" : "$"}${encode_row(e.e.r)}`;
    }
    return `${Fa(e.s, t.biff)}:${Fa(e.e, t.biff)}`;
}
function decode_row(e) {
    return parseInt(Zo(e), 10) - 1;
}
function encode_row(e) {
    return `${e + 1}`;
}
function Jo(e) {
    return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function Zo(e) {
    return e.replace(/\$(\d+)$/, "$1");
}
function decode_col(e) {
    for(var t = Qo(e), r = 0, a = 0; a !== t.length; ++a){
        r = 26 * r + t.charCodeAt(a) - 64;
    }
    return r - 1;
}
function encode_col(e) {
    if (e < 0) {
        throw new Error(`invalid column ${e}`);
    }
    let t = "";
    for(++e; e; e = Math.floor((e - 1) / 26)){
        t = String.fromCharCode((e - 1) % 26 + 65) + t;
    }
    return t;
}
function qo(e) {
    return e.replace(/^([A-Z])/, "$$$1");
}
function Qo(e) {
    return e.replace(/^\$([A-Z])/, "$1");
}
function split_cell(e) {
    return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function decode_cell(e) {
    let t = 0;
    let r = 0;
    for(let a = 0; a < e.length; ++a){
        const n = e.charCodeAt(a);
        if (n >= 48 && n <= 57) {
            t = 10 * t + (n - 48);
        } else if (n >= 65 && n <= 90) {
            r = 26 * r + (n - 64);
        }
    }
    return {
        c: r - 1,
        r: t - 1
    };
}
function encode_cell(e) {
    for(var t = e.c + 1, r = ""; t; t = (t - 1) / 26 | 0){
        r = String.fromCharCode((t - 1) % 26 + 65) + r;
    }
    return r + (e.r + 1);
}
function decode_range(e) {
    const t = e.indexOf(":");
    if (t == -1) {
        return {
            s: decode_cell(e),
            e: decode_cell(e)
        };
    }
    return {
        s: decode_cell(e.slice(0, t)),
        e: decode_cell(e.slice(t + 1))
    };
}
function encode_range(e, t) {
    if (typeof t === "undefined" || typeof t === "number") {
        return encode_range(e.s, e.e);
    }
    if (typeof e !== "string") {
        e = encode_cell(e);
    }
    if (typeof t !== "string") {
        t = encode_cell(t);
    }
    if (e == t) {
        return e;
    }
    return `${e}:${t}`;
}
function Ae(e) {
    const t = {
        s: {
            c: 0,
            r: 0
        },
        e: {
            c: 0,
            r: 0
        }
    };
    let r = 0;
    let a = 0;
    let n = 0;
    const e_length = e.length;
    for(r = 0; a < e_length && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a){
        r = 26 * r + n;
    }
    t.s.c = --r;
    for(r = 0; a < e_length && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a){
        r = 10 * r + n;
    }
    t.s.r = --r;
    if (a === e_length || n != 10) {
        t.e.c = t.s.c;
        t.e.r = t.s.r;
        return t;
    }
    ++a;
    for(r = 0; a != e_length && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a){
        r = 26 * r + n;
    }
    t.e.c = --r;
    for(r = 0; a != e_length && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a){
        r = 10 * r + n;
    }
    t.e.r = --r;
    return t;
}
function Oi(e, t) {
    const r = e.t == "d" && t instanceof Date;
    if (e.z != null) {
        try {
            return e.w = format(e.z, r ? ir(t) : t);
        } catch  {}
    }
    try {
        return e.w = format((e.XF || {}).numFmtId || (r ? 14 : 0), r ? ir(t) : t);
    } catch  {
        return `${t}`;
    }
}
function format_cell(e, t, r) {
    if (e == null || e.t == null || e.t == "z") {
        return "";
    }
    if (e.w !== undefined) {
        return e.w;
    }
    if (e.t == "d" && !e.z && r && r.dateNF) {
        e.z = r.dateNF;
    }
    if (e.t == "e") {
        return vt[e.v] || e.v;
    }
    if (t == null) {
        return Oi(e, e.v);
    }
    return Oi(e, t);
}
function Ct(e, t) {
    const r = t && t.sheet ? t.sheet : "Sheet1";
    const a = {};
    a[r] = e;
    return {
        SheetNames: [
            r
        ],
        Sheets: a
    };
}
function sheet_add_aoa(e, t, r) {
    const a = r || {};
    const n = e ? Array.isArray(e) : a.dense;
    const i = e || (n ? [] : {});
    let s = 0;
    let f = 0;
    if (i && a.origin != null) {
        if (typeof a.origin === "number") {
            s = a.origin;
        } else {
            const c = typeof a.origin === "string" ? decode_cell(a.origin) : a.origin;
            s = c.r;
            f = c.c;
        }
        if (!i["!ref"]) {
            i["!ref"] = "A1:A1";
        }
    }
    const o = {
        s: {
            c: 10000000,
            r: 10000000
        },
        e: {
            c: 0,
            r: 0
        }
    };
    if (i["!ref"]) {
        const l = Ae(i["!ref"]);
        o.s.c = l.s.c;
        o.s.r = l.s.r;
        o.e.c = Math.max(o.e.c, l.e.c);
        o.e.r = Math.max(o.e.r, l.e.r);
        if (s == -1) {
            o.e.r = s = l.e.r + 1;
        }
    }
    for(let u = 0; u != t.length; ++u){
        if (t[u]) {
            if (!Array.isArray(t[u])) {
                throw new Error("aoa_to_sheet expects an array of arrays");
            }
            for(let x = 0; x != t[u].length; ++x){
                if (!(typeof t[u][x] === "undefined")) {
                    let d = {
                        v: t[u][x]
                    };
                    const v = s + u;
                    const h = f + x;
                    if (o.s.r > v) {
                        o.s.r = v;
                    }
                    if (o.s.c > h) {
                        o.s.c = h;
                    }
                    if (o.e.r < v) {
                        o.e.r = v;
                    }
                    if (o.e.c < h) {
                        o.e.c = h;
                    }
                    if (t[u][x] && typeof t[u][x] === "object" && !Array.isArray(t[u][x]) && !(t[u][x] instanceof Date)) {
                        d = t[u][x];
                    } else {
                        if (Array.isArray(d.v)) {
                            d.f = t[u][x][1];
                            d.v = d.v[0];
                        }
                        if (d.v === null) {
                            if (d.f) {
                                d.t = "n";
                            } else if (a.nullError) {
                                d.t = "e";
                                d.v = 0;
                            } else if (a.sheetStubs) {
                                d.t = "z";
                            } else {
                                continue;
                            }
                        } else {
                            if (typeof d.v === "number") {
                                d.t = "n";
                            } else if (typeof d.v === "boolean") {
                                d.t = "b";
                            } else if (d.v instanceof Date) {
                                d.z = a.dateNF || _table[14];
                                if (a.cellDates) {
                                    d.t = "d";
                                    d.w = format(d.z, ir(d.v));
                                } else {
                                    d.t = "n";
                                    d.v = ir(d.v);
                                    d.w = format(d.z, d.v);
                                }
                            } else {
                                d.t = "s";
                            }
                        }
                    }
                    if (n) {
                        if (!i[v]) {
                            i[v] = [];
                        }
                        if (i[v][h] && i[v][h].z) {
                            d.z = i[v][h].z;
                        }
                        i[v][h] = d;
                    } else {
                        const p = encode_cell({
                            c: h,
                            r: v
                        });
                        if (i[p] && i[p].z) {
                            d.z = i[p].z;
                        }
                        i[p] = d;
                    }
                }
            }
        }
    }
    if (o.s.c < 10000000) {
        i["!ref"] = encode_range(o);
    }
    return i;
}
function aoa_to_sheet(e, t) {
    return sheet_add_aoa(null, e, t);
}
function rl(e) {
    return e.read_shift(4, "i");
}
function Jr(e, t) {
    if (!t) {
        t = G(4);
    }
    t.write_shift(4, e);
    return t;
}
function wr(e) {
    const t = e.read_shift(4);
    if (t === 0) {
        return "";
    }
    return e.read_shift(t, "dbcs");
}
function or(e, t) {
    let r = false;
    if (t == null) {
        r = true;
        t = G(4 + 2 * e.length);
    }
    t.write_shift(4, e.length);
    if (e.length > 0) {
        t.write_shift(0, e, "dbcs");
    }
    if (r) {
        return t.slice(0, t.l);
    }
    return t;
}
function tl(e) {
    return {
        ich: e.read_shift(2),
        ifnt: e.read_shift(2)
    };
}
function al(e, t) {
    if (!t) {
        t = G(4);
    }
    t.write_shift(2, 0);
    t.write_shift(2, 0);
    return t;
}
function Dn(e, t) {
    const r = e.l;
    const a = e.read_shift(1);
    const n = wr(e);
    const i = [];
    const s = {
        t: n,
        h: n
    };
    if ((a & 1) !== 0) {
        for(let f = e.read_shift(4), c = 0; c != f; ++c){
            i.push(tl(e));
        }
        s.r = i;
    } else {
        s.r = [
            {
                ich: 0,
                ifnt: 0
            }
        ];
    }
    e.l = r + t;
    return s;
}
function nl(e, t) {
    let r = false;
    if (t == null) {
        r = true;
        t = G(15 + 4 * e.t.length);
    }
    t.write_shift(1, 0);
    or(e.t, t);
    if (r) {
        return t.slice(0, t.l);
    }
    return t;
}
const il = Dn;
function sl(e, t) {
    let r = false;
    if (t == null) {
        r = true;
        t = G(23 + 4 * e.t.length);
    }
    t.write_shift(1, 1);
    or(e.t, t);
    t.write_shift(4, 1);
    al({}, t);
    if (r) {
        return t.slice(0, t.l);
    }
    return t;
}
function $r(e) {
    const t = e.read_shift(4);
    let r = e.read_shift(2);
    r += e.read_shift(1) << 16;
    e.l++;
    return {
        c: t,
        iStyleRef: r
    };
}
function $t(e, t) {
    if (t == null) {
        t = G(8);
    }
    t.write_shift(-4, e.c);
    t.write_shift(3, e.iStyleRef || e.s);
    t.write_shift(1, 0);
    return t;
}
function Kt(e) {
    let t = e.read_shift(2);
    t += e.read_shift(1) << 16;
    e.l++;
    return {
        c: -1,
        iStyleRef: t
    };
}
function Yt(e, t) {
    if (t == null) {
        t = G(4);
    }
    t.write_shift(3, e.iStyleRef || e.s);
    t.write_shift(1, 0);
    return t;
}
const fl = wr;
const Gs = or;
function On(e) {
    const t = e.read_shift(4);
    if (t === 0 || t === 4294967295) {
        return "";
    }
    return e.read_shift(t, "dbcs");
}
function m0(e, t) {
    let r = false;
    if (t == null) {
        r = true;
        t = G(127);
    }
    t.write_shift(4, e.length > 0 ? e.length : 4294967295);
    if (e.length > 0) {
        t.write_shift(0, e, "dbcs");
    }
    if (r) {
        return t.slice(0, t.l);
    }
    return t;
}
const cl = wr;
const Q0 = On;
const In = m0;
function Rn(e) {
    const t = e.slice(e.l, e.l + 4);
    const r = t[0] & 1;
    const a = t[0] & 2;
    e.l += 4;
    const n = a === 0 ? p0([
        0,
        0,
        0,
        0,
        t[0] & 252,
        t[1],
        t[2],
        t[3]
    ], 0) : Rt(t, 0) >> 2;
    if (r) {
        return n / 100;
    }
    return n;
}
function zs(e, t) {
    if (t == null) {
        t = G(4);
    }
    let r = 0;
    let a = 0;
    const n = e * 100;
    if (e == (e | 0) && e >= -536870912 && e < 1 << 29) {
        a = 1;
    } else if (n == (n | 0) && n >= -536870912 && n < 1 << 29) {
        a = 1;
        r = 1;
    }
    if (a) {
        t.write_shift(-4, ((r ? n : e) << 2) + (r + 2));
    } else {
        throw new Error(`unsupported RkNumber ${e}`);
    }
}
function $s(e) {
    const t = {
        s: {},
        e: {}
    };
    t.s.r = e.read_shift(4);
    t.e.r = e.read_shift(4);
    t.s.c = e.read_shift(4);
    t.e.c = e.read_shift(4);
    return t;
}
function ol(e, t) {
    if (!t) {
        t = G(16);
    }
    t.write_shift(4, e.s.r);
    t.write_shift(4, e.e.r);
    t.write_shift(4, e.s.c);
    t.write_shift(4, e.e.c);
    return t;
}
const jt = $s;
const xa = ol;
function gr(e) {
    if (e.length - e.l < 8) {
        throw "XLS Xnum Buffer underflow";
    }
    return e.read_shift(8, "f");
}
function Wt(e, t) {
    return (t || G(8)).write_shift(8, e, "f");
}
function ll(e) {
    const t = {};
    const r = e.read_shift(1);
    const a = r >>> 1;
    const n = e.read_shift(1);
    const i = e.read_shift(2, "i");
    const s = e.read_shift(1);
    const f = e.read_shift(1);
    const c = e.read_shift(1);
    e.l++;
    switch(a){
        case 0:
            t.auto = 1;
            break;
        case 1:
            t.index = n;
            const o = Nt[n];
            if (o) {
                t.rgb = Ma(o);
            }
            break;
        case 2:
            t.rgb = Ma([
                s,
                f,
                c
            ]);
            break;
        case 3:
            t.theme = n;
            break;
    }
    if (i != 0) {
        t.tint = i > 0 ? i / 32767 : i / 32768;
    }
    return t;
}
function g0(e, t) {
    if (!t) {
        t = G(8);
    }
    if (!e || e.auto) {
        t.write_shift(4, 0);
        t.write_shift(4, 0);
        return t;
    }
    if (e.index != null) {
        t.write_shift(1, 2);
        t.write_shift(1, e.index);
    } else if (e.theme != null) {
        t.write_shift(1, 6);
        t.write_shift(1, e.theme);
    } else {
        t.write_shift(1, 5);
        t.write_shift(1, 0);
    }
    let r = e.tint || 0;
    if (r > 0) {
        r *= 32767;
    } else if (r < 0) {
        r *= 32768;
    }
    t.write_shift(2, r);
    if (!e.rgb || e.theme != null) {
        t.write_shift(2, 0);
        t.write_shift(1, 0);
        t.write_shift(1, 0);
    } else {
        let a = e.rgb || "FFFFFF";
        if (typeof a === "number") {
            a = `000000${a.toString(16)}`.slice(-6);
        }
        t.write_shift(1, parseInt(a.slice(0, 2), 16));
        t.write_shift(1, parseInt(a.slice(2, 4), 16));
        t.write_shift(1, parseInt(a.slice(4, 6), 16));
        t.write_shift(1, 255);
    }
    return t;
}
function ul(e) {
    const t = e.read_shift(1);
    e.l++;
    const r = {
        fBold: t & 1,
        fItalic: t & 2,
        fUnderline: t & 4,
        fStrikeout: t & 8,
        fOutline: t & 16,
        fShadow: t & 32,
        fCondense: t & 64,
        fExtend: t & 128
    };
    return r;
}
function hl(e, t) {
    if (!t) {
        t = G(2);
    }
    const r = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
    t.write_shift(1, r);
    t.write_shift(1, 0);
    return t;
}
function Ks(e, t) {
    const r = {
        2: "BITMAP",
        3: "METAFILEPICT",
        8: "DIB",
        14: "ENHMETAFILE"
    };
    const a = e.read_shift(4);
    switch(a){
        case 0:
            return "";
        case 4294967295:
        case 4294967294:
            return r[e.read_shift(4)] || "";
    }
    if (a > 400) {
        throw new Error(`Unsupported Clipboard: ${a.toString(16)}`);
    }
    e.l -= 4;
    return e.read_shift(0, t == 1 ? "lpstr" : "lpwstr");
}
function xl(e) {
    return Ks(e, 1);
}
function dl(e) {
    return Ks(e, 2);
}
const Nn = 2;
const Ar = 3;
const t0 = 11;
const Ii = 12;
const _0 = 19;
const a0 = 64;
const vl = 65;
const pl = 71;
const ml = 4108;
const gl = 4126;
const sr = 80;
const Ys = 81;
const _l = [
    sr,
    Ys
];
const en = {
    1: {
        n: "CodePage",
        t: Nn
    },
    2: {
        n: "Category",
        t: sr
    },
    3: {
        n: "PresentationFormat",
        t: sr
    },
    4: {
        n: "ByteCount",
        t: Ar
    },
    5: {
        n: "LineCount",
        t: Ar
    },
    6: {
        n: "ParagraphCount",
        t: Ar
    },
    7: {
        n: "SlideCount",
        t: Ar
    },
    8: {
        n: "NoteCount",
        t: Ar
    },
    9: {
        n: "HiddenCount",
        t: Ar
    },
    10: {
        n: "MultimediaClipCount",
        t: Ar
    },
    11: {
        n: "ScaleCrop",
        t: t0
    },
    12: {
        n: "HeadingPairs",
        t: ml
    },
    13: {
        n: "TitlesOfParts",
        t: gl
    },
    14: {
        n: "Manager",
        t: sr
    },
    15: {
        n: "Company",
        t: sr
    },
    16: {
        n: "LinksUpToDate",
        t: t0
    },
    17: {
        n: "CharacterCount",
        t: Ar
    },
    19: {
        n: "SharedDoc",
        t: t0
    },
    22: {
        n: "HyperlinksChanged",
        t: t0
    },
    23: {
        n: "AppVersion",
        t: Ar,
        p: "version"
    },
    24: {
        n: "DigSig",
        t: vl
    },
    26: {
        n: "ContentType",
        t: sr
    },
    27: {
        n: "ContentStatus",
        t: sr
    },
    28: {
        n: "Language",
        t: sr
    },
    29: {
        n: "Version",
        t: sr
    },
    255: {},
    2147483648: {
        n: "Locale",
        t: _0
    },
    2147483651: {
        n: "Behavior",
        t: _0
    },
    1919054434: {}
};
const rn = {
    1: {
        n: "CodePage",
        t: Nn
    },
    2: {
        n: "Title",
        t: sr
    },
    3: {
        n: "Subject",
        t: sr
    },
    4: {
        n: "Author",
        t: sr
    },
    5: {
        n: "Keywords",
        t: sr
    },
    6: {
        n: "Comments",
        t: sr
    },
    7: {
        n: "Template",
        t: sr
    },
    8: {
        n: "LastAuthor",
        t: sr
    },
    9: {
        n: "RevNumber",
        t: sr
    },
    10: {
        n: "EditTime",
        t: a0
    },
    11: {
        n: "LastPrinted",
        t: a0
    },
    12: {
        n: "CreatedDate",
        t: a0
    },
    13: {
        n: "ModifiedDate",
        t: a0
    },
    14: {
        n: "PageCount",
        t: Ar
    },
    15: {
        n: "WordCount",
        t: Ar
    },
    16: {
        n: "CharCount",
        t: Ar
    },
    17: {
        n: "Thumbnail",
        t: pl
    },
    18: {
        n: "Application",
        t: sr
    },
    19: {
        n: "DocSecurity",
        t: Ar
    },
    255: {},
    2147483648: {
        n: "Locale",
        t: _0
    },
    2147483651: {
        n: "Behavior",
        t: _0
    },
    1919054434: {}
};
const Ri = {
    1: "US",
    2: "CA",
    3: "",
    7: "RU",
    20: "EG",
    30: "GR",
    31: "NL",
    32: "BE",
    33: "FR",
    34: "ES",
    36: "HU",
    39: "IT",
    41: "CH",
    43: "AT",
    44: "GB",
    45: "DK",
    46: "SE",
    47: "NO",
    48: "PL",
    49: "DE",
    52: "MX",
    55: "BR",
    61: "AU",
    64: "NZ",
    66: "TH",
    81: "JP",
    82: "KR",
    84: "VN",
    86: "CN",
    90: "TR",
    105: "JS",
    213: "DZ",
    216: "MA",
    218: "LY",
    351: "PT",
    354: "IS",
    358: "FI",
    420: "CZ",
    886: "TW",
    961: "LB",
    962: "JO",
    963: "SY",
    964: "IQ",
    965: "KW",
    966: "SA",
    971: "AE",
    972: "IL",
    974: "QA",
    981: "IR",
    65535: "US"
};
const wl = [
    null,
    "solid",
    "mediumGray",
    "darkGray",
    "lightGray",
    "darkHorizontal",
    "darkVertical",
    "darkDown",
    "darkUp",
    "darkGrid",
    "darkTrellis",
    "lightHorizontal",
    "lightVertical",
    "lightDown",
    "lightUp",
    "lightGrid",
    "lightTrellis",
    "gray125",
    "gray0625"
];
function kl(e) {
    return e.map((t)=>[
            t >> 16 & 255,
            t >> 8 & 255,
            t & 255
        ]);
}
const El = kl([
    0,
    16777215,
    16711680,
    65280,
    255,
    16776960,
    16711935,
    65535,
    0,
    16777215,
    16711680,
    65280,
    255,
    16776960,
    16711935,
    65535,
    8388608,
    32768,
    128,
    8421376,
    8388736,
    32896,
    12632256,
    8421504,
    10066431,
    10040166,
    16777164,
    13434879,
    6684774,
    16744576,
    26316,
    13421823,
    128,
    16711935,
    16776960,
    65535,
    8388736,
    8388608,
    32896,
    255,
    52479,
    13434879,
    13434828,
    16777113,
    10079487,
    16751052,
    13408767,
    16764057,
    3368703,
    3394764,
    10079232,
    16763904,
    16750848,
    16737792,
    6710937,
    9868950,
    13158,
    3381606,
    13056,
    3355392,
    10040064,
    10040166,
    3355545,
    3355443,
    16777215,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
var Nt = Me(El);
var vt = {
    0: "#NULL!",
    7: "#DIV/0!",
    15: "#VALUE!",
    23: "#REF!",
    29: "#NAME?",
    36: "#NUM!",
    42: "#N/A",
    43: "#GETTING_DATA",
    255: "#WTF?"
};
const js = {
    "#NULL!": 0,
    "#DIV/0!": 7,
    "#VALUE!": 15,
    "#REF!": 23,
    "#NAME?": 29,
    "#NUM!": 36,
    "#N/A": 42,
    "#GETTING_DATA": 43,
    "#WTF?": 255
};
const tn = {
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
    "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
    "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
    "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
    "application/vnd.ms-excel.worksheet": "sheets",
    "application/vnd.ms-excel.binIndexWs": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
    "application/vnd.ms-excel.chartsheet": "charts",
    "application/vnd.ms-excel.macrosheet+xml": "macros",
    "application/vnd.ms-excel.macrosheet": "macros",
    "application/vnd.ms-excel.intlmacrosheet": "TODO",
    "application/vnd.ms-excel.binIndexMs": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
    "application/vnd.ms-excel.dialogsheet": "dialogs",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
    "application/vnd.ms-excel.sharedStrings": "strs",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
    "application/vnd.ms-excel.styles": "styles",
    "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
    "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
    "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
    "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
    "application/vnd.ms-excel.comments": "comments",
    "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
    "application/vnd.ms-excel.person+xml": "people",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
    "application/vnd.ms-excel.sheetMetadata": "metadata",
    "application/vnd.ms-excel.pivotTable": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
    "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
    "application/vnd.ms-office.chartstyle+xml": "TODO",
    "application/vnd.ms-office.chartex+xml": "TODO",
    "application/vnd.ms-excel.calcChain": "calcchains",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
    "application/vnd.ms-office.activeX": "TODO",
    "application/vnd.ms-office.activeX+xml": "TODO",
    "application/vnd.ms-excel.attachedToolbars": "TODO",
    "application/vnd.ms-excel.connections": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
    "application/vnd.ms-excel.externalLink": "links",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
    "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
    "application/vnd.ms-excel.pivotCacheRecords": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
    "application/vnd.ms-excel.queryTable": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
    "application/vnd.ms-excel.userNames": "TODO",
    "application/vnd.ms-excel.revisionHeaders": "TODO",
    "application/vnd.ms-excel.revisionLog": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
    "application/vnd.ms-excel.tableSingleCells": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
    "application/vnd.ms-excel.slicer": "TODO",
    "application/vnd.ms-excel.slicerCache": "TODO",
    "application/vnd.ms-excel.slicer+xml": "TODO",
    "application/vnd.ms-excel.slicerCache+xml": "TODO",
    "application/vnd.ms-excel.wsSortMap": "TODO",
    "application/vnd.ms-excel.table": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
    "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
    "application/vnd.ms-excel.Timeline+xml": "TODO",
    "application/vnd.ms-excel.TimelineCache+xml": "TODO",
    "application/vnd.ms-office.vbaProject": "vba",
    "application/vnd.ms-office.vbaProjectSignature": "TODO",
    "application/vnd.ms-office.volatileDependencies": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
    "application/vnd.ms-excel.controlproperties+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.model+data": "TODO",
    "application/vnd.ms-excel.Survey+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
    "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
    "application/vnd.openxmlformats-package.relationships+xml": "rels",
    "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
    "image/png": "TODO",
    sheet: "js"
};
const n0 = {
    workbooks: {
        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
        xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
        xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
        xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
        xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
    },
    strs: {
        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
        xlsb: "application/vnd.ms-excel.sharedStrings"
    },
    comments: {
        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
        xlsb: "application/vnd.ms-excel.comments"
    },
    sheets: {
        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
        xlsb: "application/vnd.ms-excel.worksheet"
    },
    charts: {
        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
        xlsb: "application/vnd.ms-excel.chartsheet"
    },
    dialogs: {
        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
        xlsb: "application/vnd.ms-excel.dialogsheet"
    },
    macros: {
        xlsx: "application/vnd.ms-excel.macrosheet+xml",
        xlsb: "application/vnd.ms-excel.macrosheet"
    },
    metadata: {
        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
        xlsb: "application/vnd.ms-excel.sheetMetadata"
    },
    styles: {
        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
        xlsb: "application/vnd.ms-excel.styles"
    }
};
function bn() {
    return {
        workbooks: [],
        sheets: [],
        charts: [],
        dialogs: [],
        macros: [],
        rels: [],
        strs: [],
        comments: [],
        threadedcomments: [],
        links: [],
        coreprops: [],
        extprops: [],
        custprops: [],
        themes: [],
        styles: [],
        calcchains: [],
        vba: [],
        drawings: [],
        metadata: [],
        people: [],
        TODO: [],
        xmlns: ""
    };
}
function Tl(e) {
    const t = bn();
    if (!e || !e.match) {
        return t;
    }
    const r = {};
    (e.match(Er) || []).forEach((a)=>{
        const n = me(a);
        switch(n[0].replace(No, "<")){
            case "<?xml":
                break;
            case "<Types":
                t.xmlns = n[`xmlns${(n[0].match(/<(\w+):/) || [
                    "",
                    ""
                ])[1]}`];
                break;
            case "<Default":
                r[n.Extension] = n.ContentType;
                break;
            case "<Override":
                if (t[tn[n.ContentType]] !== undefined) {
                    t[tn[n.ContentType]].push(n.PartName);
                }
                break;
        }
    });
    if (t.xmlns !== nr.CT) {
        throw new Error(`Unknown Namespace: ${t.xmlns}`);
    }
    t.calcchain = t.calcchains.length > 0 ? t.calcchains[0] : "";
    t.sst = t.strs.length > 0 ? t.strs[0] : "";
    t.style = t.styles.length > 0 ? t.styles[0] : "";
    t.defaults = r;
    delete t.calcchains;
    return t;
}
function Js(e, t) {
    const r = To(tn);
    let a = [];
    let n;
    a[a.length] = Qe;
    a[a.length] = ae("Types", null, {
        xmlns: nr.CT,
        "xmlns:xsd": nr.xsd,
        "xmlns:xsi": nr.xsi
    });
    a = a.concat([
        [
            "xml",
            "application/xml"
        ],
        [
            "bin",
            "application/vnd.ms-excel.sheet.binary.macroEnabled.main"
        ],
        [
            "vml",
            "application/vnd.openxmlformats-officedocument.vmlDrawing"
        ],
        [
            "data",
            "application/vnd.openxmlformats-officedocument.model+data"
        ],
        [
            "bmp",
            "image/bmp"
        ],
        [
            "png",
            "image/png"
        ],
        [
            "gif",
            "image/gif"
        ],
        [
            "emf",
            "image/x-emf"
        ],
        [
            "wmf",
            "image/x-wmf"
        ],
        [
            "jpg",
            "image/jpeg"
        ],
        [
            "jpeg",
            "image/jpeg"
        ],
        [
            "tif",
            "image/tiff"
        ],
        [
            "tiff",
            "image/tiff"
        ],
        [
            "pdf",
            "application/pdf"
        ],
        [
            "rels",
            "application/vnd.openxmlformats-package.relationships+xml"
        ]
    ].map((c)=>ae("Default", null, {
            Extension: c[0],
            ContentType: c[1]
        })));
    const i = (c)=>{
        if (e[c] && e[c].length > 0) {
            n = e[c][0];
            a[a.length] = ae("Override", null, {
                PartName: (n[0] == "/" ? "" : "/") + n,
                ContentType: n0[c][t.bookType] || n0[c].xlsx
            });
        }
    };
    const s = (c)=>{
        (e[c] || []).forEach((o)=>{
            a[a.length] = ae("Override", null, {
                PartName: (o[0] == "/" ? "" : "/") + o,
                ContentType: n0[c][t.bookType] || n0[c].xlsx
            });
        });
    };
    const f = (c)=>{
        (e[c] || []).forEach((o)=>{
            a[a.length] = ae("Override", null, {
                PartName: (o[0] == "/" ? "" : "/") + o,
                ContentType: r[c][0]
            });
        });
    };
    i("workbooks");
    s("sheets");
    s("charts");
    f("themes");
    [
        "strs",
        "styles"
    ].forEach(i);
    [
        "coreprops",
        "extprops",
        "custprops"
    ].forEach(f);
    f("vba");
    f("comments");
    f("threadedcomments");
    f("drawings");
    s("metadata");
    f("people");
    if (a.length > 2) {
        a[a.length] = "</Types>";
        a[1] = a[1].replace("/>", ">");
    }
    return a.join("");
}
const Fe = {
    WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
    SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
    HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
    VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
    XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
    XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
    XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
    CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
    CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
    CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
    CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
    EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
    CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
    SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
    STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
    THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
    CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
    CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
    CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
    WS: [
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
        "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"
    ],
    DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
    MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
    IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
    DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
    XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
    TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
    PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
    VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function Ba(e) {
    const t = e.lastIndexOf("/");
    return `${e.slice(0, t + 1)}_rels/${e.slice(t + 1)}.rels`;
}
function ya(e, t) {
    const r = {
        "!id": {}
    };
    if (!e) {
        return r;
    }
    if (t.charAt(0) !== "/") {
        t = `/${t}`;
    }
    const a = {};
    (e.match(Er) || []).forEach((n)=>{
        const i = me(n);
        if (i[0] === "<Relationship") {
            const s = {};
            s.Type = i.Type;
            s.Target = i.Target;
            s.Id = i.Id;
            if (i.TargetMode) {
                s.TargetMode = i.TargetMode;
            }
            const f = i.TargetMode === "External" ? i.Target : Ea(i.Target, t);
            r[f] = s;
            a[i.Id] = s;
        }
    });
    r["!id"] = a;
    return r;
}
function na(e) {
    const t = [
        Qe,
        ae("Relationships", null, {
            xmlns: nr.RELS
        })
    ];
    je(e["!id"]).forEach((r)=>{
        t[t.length] = ae("Relationship", null, e["!id"][r]);
    });
    if (t.length > 2) {
        t[t.length] = "</Relationships>";
        t[1] = t[1].replace("/>", ">");
    }
    return t.join("");
}
function Ne(e, t, r, a, n, i) {
    if (!n) {
        n = {};
    }
    if (!e["!id"]) {
        e["!id"] = {};
    }
    if (!e["!idx"]) {
        e["!idx"] = 1;
    }
    if (t < 0) {
        for(t = e["!idx"]; e["!id"][`rId${t}`]; ++t);
    }
    e["!idx"] = t + 1;
    n.Id = `rId${t}`;
    n.Type = a;
    n.Target = r;
    if ([
        Fe.HLINK,
        Fe.XPATH,
        Fe.XMISS
    ].indexOf(n.Type) > -1) {
        n.TargetMode = "External";
    }
    if (e["!id"][n.Id]) {
        throw new Error(`Cannot rewrite rId ${t}`);
    }
    e["!id"][n.Id] = n;
    e[`/${n.Target}`.replace("//", "/")] = n;
    return t;
}
const Sl = "application/vnd.oasis.opendocument.spreadsheet";
function Fl(e, t) {
    let a;
    let n;
    for(const r = wn(e); a = La.exec(r);){
        switch(a[3]){
            case "manifest":
                break;
            case "file-entry":
                n = me(a[0], false);
                if (n.path == "/" && n.type !== Sl) {
                    throw new Error("This OpenDocument is not a spreadsheet");
                }
                break;
            case "encryption-data":
            case "algorithm":
            case "start-key-generation":
            case "key-derivation":
                throw new Error("Unsupported ODS Encryption");
            default:
                if (t && t.WTF) {
                    throw a;
                }
        }
    }
}
function yl(e) {
    const t = [
        Qe
    ];
    t.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`);
    t.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
    for(let r = 0; r < e.length; ++r){
        t.push(`  <manifest:file-entry manifest:full-path="${e[r][0]}" manifest:media-type="${e[r][1]}${`"/>
`}`);
    }
    t.push("</manifest:manifest>");
    return t.join("");
}
function Ni(e, t, r) {
    return [
        `  <rdf:Description rdf:about="${e}${`">
`}`,
        `    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/${r || "odf"}#${t}${`"/>
`}`,
        `  </rdf:Description>
`
    ].join("");
}
function Al(e, t) {
    return [
        `  <rdf:Description rdf:about="${e}${`">
`}`,
        `    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="${t}${`"/>
`}`,
        `  </rdf:Description>
`
    ].join("");
}
function Cl(e) {
    const t = [
        Qe
    ];
    t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
    for(let r = 0; r != e.length; ++r){
        t.push(Ni(e[r][0], e[r][1]));
        t.push(Al("", e[r][0]));
    }
    t.push(Ni("", "Document", "pkg"));
    t.push("</rdf:RDF>");
    return t.join("");
}
function Zs() {
    return `<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ${Ia.version}</meta:generator></office:meta></office:document-meta>`;
}
const zr = [
    [
        "cp:category",
        "Category"
    ],
    [
        "cp:contentStatus",
        "ContentStatus"
    ],
    [
        "cp:keywords",
        "Keywords"
    ],
    [
        "cp:lastModifiedBy",
        "LastAuthor"
    ],
    [
        "cp:lastPrinted",
        "LastPrinted"
    ],
    [
        "cp:revision",
        "RevNumber"
    ],
    [
        "cp:version",
        "Version"
    ],
    [
        "dc:creator",
        "Author"
    ],
    [
        "dc:description",
        "Comments"
    ],
    [
        "dc:identifier",
        "Identifier"
    ],
    [
        "dc:language",
        "Language"
    ],
    [
        "dc:subject",
        "Subject"
    ],
    [
        "dc:title",
        "Title"
    ],
    [
        "dcterms:created",
        "CreatedDate",
        "date"
    ],
    [
        "dcterms:modified",
        "ModifiedDate",
        "date"
    ]
];
const Dl = (()=>{
    const e = new Array(zr.length);
    for(let t = 0; t < zr.length; ++t){
        const r = zr[t];
        const a = `(?:${r[0].slice(0, r[0].indexOf(":"))}:)${r[0].slice(r[0].indexOf(":") + 1)}`;
        e[t] = new RegExp(`<${a}[^>]*>([\\s\\S]*?)</${a}>`);
    }
    return e;
})();
function qs(e) {
    const t = {};
    e = Le(e);
    for(let r = 0; r < zr.length; ++r){
        const a = zr[r];
        const n = e.match(Dl[r]);
        if (n != null && n.length > 0) {
            t[a[1]] = Oe(n[1]);
        }
        if (a[2] === "date" && t[a[1]]) {
            t[a[1]] = Ve(t[a[1]]);
        }
    }
    return t;
}
function W0(e, t, r, a, n) {
    if (!(n[e] != null || t == null || t === "")) {
        n[e] = t;
        t = be(t);
        a[a.length] = r ? ae(e, t, r) : hr(e, t);
    }
}
function Qs(Props, t) {
    const r = t || {};
    const a = [
        Qe,
        ae("cp:coreProperties", null, {
            "xmlns:cp": nr.CORE_PROPS,
            "xmlns:dc": nr.dc,
            "xmlns:dcterms": nr.dcterms,
            "xmlns:dcmitype": nr.dcmitype,
            "xmlns:xsi": nr.xsi
        })
    ];
    const n = {};
    if (!Props && !r.Props) {
        return a.join("");
    }
    Props && (Props.CreatedDate != null && W0("dcterms:created", typeof Props.CreatedDate === "string" ? Props.CreatedDate : q0(Props.CreatedDate, r.WTF), {
        "xsi:type": "dcterms:W3CDTF"
    }, a, n), Props.ModifiedDate != null && W0("dcterms:modified", typeof Props.ModifiedDate === "string" ? Props.ModifiedDate : q0(Props.ModifiedDate, r.WTF), {
        "xsi:type": "dcterms:W3CDTF"
    }, a, n));
    for(let i = 0; i != zr.length; ++i){
        const s = zr[i];
        let f = r.Props && r.Props[s[1]] != null ? r.Props[s[1]] : Props ? Props[s[1]] : null;
        switch(f){
            case true:
                f = "1";
                break;
            case false:
                f = "0";
                break;
            default:
                if (typeof f === "number") {
                    f = String(f);
                }
        }
        if (f != null) {
            W0(s[0], f, null, a, n);
        }
    }
    if (a.length > 2) {
        a[a.length] = "</cp:coreProperties>";
        a[1] = a[1].replace("/>", ">");
    }
    return a.join("");
}
const bt = [
    [
        "Application",
        "Application",
        "string"
    ],
    [
        "AppVersion",
        "AppVersion",
        "string"
    ],
    [
        "Company",
        "Company",
        "string"
    ],
    [
        "DocSecurity",
        "DocSecurity",
        "string"
    ],
    [
        "Manager",
        "Manager",
        "string"
    ],
    [
        "HyperlinksChanged",
        "HyperlinksChanged",
        "bool"
    ],
    [
        "SharedDoc",
        "SharedDoc",
        "bool"
    ],
    [
        "LinksUpToDate",
        "LinksUpToDate",
        "bool"
    ],
    [
        "ScaleCrop",
        "ScaleCrop",
        "bool"
    ],
    [
        "HeadingPairs",
        "HeadingPairs",
        "raw"
    ],
    [
        "TitlesOfParts",
        "TitlesOfParts",
        "raw"
    ]
];
const ef = [
    "Worksheets",
    "SheetNames",
    "NamedRanges",
    "DefinedNames",
    "Chartsheets",
    "ChartNames"
];
function rf(HeadingPairs, TitlesOfParts, r, a) {
    let n = [];
    if (typeof HeadingPairs === "string") {
        n = Ti(HeadingPairs, a);
    } else {
        for(let i = 0; i < HeadingPairs.length; ++i){
            n = n.concat(HeadingPairs[i].map((l)=>({
                    v: l
                })));
        }
    }
    const s = typeof TitlesOfParts === "string" ? Ti(TitlesOfParts, a).map((l)=>l.v) : TitlesOfParts;
    let f = 0;
    let c = 0;
    if (s.length > 0) {
        for(let o = 0; o !== n.length; o += 2){
            c = +n[o + 1].v;
            switch(n[o].v){
                case "Worksheets":
                case "工作表":
                case "Листы":
                case "أوراق العمل":
                case "ワークシート":
                case "גליונות עבודה":
                case "Arbeitsblätter":
                case "Çalışma Sayfaları":
                case "Feuilles de calcul":
                case "Fogli di lavoro":
                case "Folhas de cálculo":
                case "Planilhas":
                case "Regneark":
                case "Hojas de cálculo":
                case "Werkbladen":
                    r.Worksheets = c;
                    r.SheetNames = s.slice(f, f + c);
                    break;
                case "Named Ranges":
                case "Rangos con nombre":
                case "名前付き一覧":
                case "Benannte Bereiche":
                case "Navngivne områder":
                    r.NamedRanges = c;
                    r.DefinedNames = s.slice(f, f + c);
                    break;
                case "Charts":
                case "Diagramme":
                    r.Chartsheets = c;
                    r.ChartNames = s.slice(f, f + c);
                    break;
            }
            f += c;
        }
    }
}
function Ol(e, t, r) {
    const a = {};
    if (!t) {
        t = {};
    }
    e = Le(e);
    bt.forEach((n)=>{
        const i = (e.match(ba(n[0])) || [])[1];
        switch(n[2]){
            case "string":
                if (i) {
                    t[n[1]] = Oe(i);
                }
                break;
            case "bool":
                t[n[1]] = i === "true";
                break;
            case "raw":
                const s = e.match(new RegExp(`<${n[0]}[^>]*>([\\s\\S]*?)</${n[0]}>`));
                if (s && s.length > 0) {
                    a[n[1]] = s[1];
                }
                break;
        }
    });
    if (a.HeadingPairs && a.TitlesOfParts) {
        rf(a.HeadingPairs, a.TitlesOfParts, t, r);
    }
    return t;
}
function tf(e) {
    const t = [];
    const r = ae;
    if (!e) {
        e = {};
    }
    e.Application = "SheetJS";
    t[t.length] = Qe;
    t[t.length] = ae("Properties", null, {
        xmlns: nr.EXT_PROPS,
        "xmlns:vt": nr.vt
    });
    bt.forEach((a)=>{
        if (e[a[1]] !== undefined) {
            let n;
            switch(a[2]){
                case "string":
                    n = be(String(e[a[1]]));
                    break;
                case "bool":
                    n = e[a[1]] ? "true" : "false";
                    break;
            }
            if (n !== undefined) {
                t[t.length] = r(a[0], n);
            }
        }
    });
    t[t.length] = r("HeadingPairs", r("vt:vector", r("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + r("vt:variant", r("vt:i4", String(e.Worksheets))), {
        size: 2,
        baseType: "variant"
    }));
    t[t.length] = r("TitlesOfParts", r("vt:vector", e.SheetNames.map((a)=>`<vt:lpstr>${be(a)}</vt:lpstr>`).join(""), {
        size: e.Worksheets,
        baseType: "lpstr"
    }));
    if (t.length > 2) {
        t[t.length] = "</Properties>";
        t[1] = t[1].replace("/>", ">");
    }
    return t.join("");
}
const Il = /<[^>]+>[^<]*/g;
function Rl(e, t) {
    const r = {};
    let a = "";
    const n = e.match(Il);
    if (n) {
        for(let i = 0; i != n.length; ++i){
            const s = n[i];
            const f = me(s);
            switch(f[0]){
                case "<?xml":
                    break;
                case "<Properties":
                    break;
                case "<property":
                    a = Oe(f.name);
                    break;
                case "</property>":
                    a = null;
                    break;
                default:
                    if (s.indexOf("<vt:") === 0) {
                        const c = s.split(">");
                        const o = c[0].slice(4);
                        const l = c[1];
                        switch(o){
                            case "lpstr":
                            case "bstr":
                            case "lpwstr":
                                r[a] = Oe(l);
                                break;
                            case "bool":
                                r[a] = We(l);
                                break;
                            case "i1":
                            case "i2":
                            case "i4":
                            case "i8":
                            case "int":
                            case "uint":
                                r[a] = parseInt(l, 10);
                                break;
                            case "r4":
                            case "r8":
                            case "decimal":
                                r[a] = parseFloat(l);
                                break;
                            case "filetime":
                            case "date":
                                r[a] = Ve(l);
                                break;
                            case "cy":
                            case "error":
                                r[a] = Oe(l);
                                break;
                            default:
                                if (o.slice(-1) == "/") {
                                    break;
                                }
                                if (t.WTF && typeof console !== "undefined") {
                                    console.warn("Unexpected", s, o, c);
                                }
                        }
                    } else if (s.slice(0, 2) !== "</") {
                        if (t.WTF) {
                            throw new Error(s);
                        }
                    }
            }
        }
    }
    return r;
}
function af(Custprops) {
    const t = [
        Qe,
        ae("Properties", null, {
            xmlns: nr.CUST_PROPS,
            "xmlns:vt": nr.vt
        })
    ];
    if (!Custprops) {
        return t.join("");
    }
    let pid = 1;
    je(Custprops).forEach((n)=>{
        ++pid;
        t[t.length] = ae("property", Ho(Custprops[n]), {
            fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
            pid,
            name: be(n)
        });
    });
    if (t.length > 2) {
        t[t.length] = "</Properties>";
        t[1] = t[1].replace("/>", ">");
    }
    return t.join("");
}
const an = {
    Title: "Title",
    Subject: "Subject",
    Author: "Author",
    Keywords: "Keywords",
    Comments: "Description",
    LastAuthor: "LastAuthor",
    RevNumber: "Revision",
    Application: "AppName",
    LastPrinted: "LastPrinted",
    CreatedDate: "Created",
    ModifiedDate: "LastSaved",
    Category: "Category",
    Manager: "Manager",
    Company: "Company",
    AppVersion: "Version",
    ContentStatus: "ContentStatus",
    Identifier: "Identifier",
    Language: "Language"
};
let H0;
function Nl(e, t, r) {
    if (!H0) {
        H0 = y0(an);
    }
    t = H0[t] || t;
    e[t] = r;
}
function bl(Props, t) {
    const r = [];
    je(an).map((a)=>{
        for(var n = 0; n < zr.length; ++n){
            if (zr[n][1] == a) {
                return zr[n];
            }
        }
        for(n = 0; n < bt.length; ++n){
            if (bt[n][1] == a) {
                return bt[n];
            }
        }
        throw a;
    }).forEach((a)=>{
        if (Props[a[1]] != null) {
            let n = t && t.Props && t.Props[a[1]] != null ? t.Props[a[1]] : Props[a[1]];
            if (a[2] === "date") {
                n = new Date(n).toISOString().replace(/\.\d*Z/, "Z");
            }
            if (typeof n === "number") {
                n = String(n);
            } else if (n === true || n === false) {
                n = n ? "1" : "0";
            } else if (n instanceof Date) {
                n = new Date(n).toISOString().replace(/\.\d*Z/, "");
            }
            r.push(hr(an[a[1]] || a[1], n));
        }
    });
    return ae("DocumentProperties", r.join(""), {
        xmlns: Or.o
    });
}
function Pl(Props, Custprops) {
    const r = [
        "Worksheets",
        "SheetNames"
    ];
    const a = "CustomDocumentProperties";
    const n = [];
    if (Props) {
        je(Props).forEach((i)=>{
            if (Object.prototype.hasOwnProperty.call(Props, i)) {
                for(var s = 0; s < zr.length; ++s){
                    if (i == zr[s][1]) {
                        return;
                    }
                }
                for(s = 0; s < bt.length; ++s){
                    if (i == bt[s][1]) {
                        return;
                    }
                }
                for(s = 0; s < r.length; ++s){
                    if (i == r[s]) {
                        return;
                    }
                }
                let f = Props[i];
                let c = "string";
                if (typeof f === "number") {
                    c = "float";
                    f = String(f);
                } else if (f === true || f === false) {
                    c = "boolean";
                    f = f ? "1" : "0";
                } else {
                    f = String(f);
                }
                n.push(ae(_i(i), f, {
                    "dt:dt": c
                }));
            }
        });
    }
    if (Custprops) {
        je(Custprops).forEach((i)=>{
            if (Object.prototype.hasOwnProperty.call(Custprops, i) && !(Props && Object.prototype.hasOwnProperty.call(Props, i))) {
                let s = Custprops[i];
                let f = "string";
                if (typeof s === "number") {
                    f = "float";
                    s = String(s);
                } else if (s === true || s === false) {
                    f = "boolean";
                    s = s ? "1" : "0";
                } else if (s instanceof Date) {
                    f = "dateTime.tz";
                    s = s.toISOString();
                } else {
                    s = String(s);
                }
                n.push(ae(_i(i), s, {
                    "dt:dt": f
                }));
            }
        });
    }
    return `<${a} xmlns="${Or.o}">${n.join("")}</${a}>`;
}
function Pn(e) {
    const t = e.read_shift(4);
    const r = e.read_shift(4);
    return new Date((r / 10000000 * 2 ** 32 + t / 10000000 - 11644473600) * 1000).toISOString().replace(/\.000/, "");
}
function Ll(e) {
    const t = typeof e === "string" ? new Date(Date.parse(e)) : e;
    const r = t.getTime() / 1000 + 11644473600;
    let a = r % 2 ** 32;
    let n = (r - a) / 2 ** 32;
    a *= 10000000;
    n *= 10000000;
    const i = a / 2 ** 32 | 0;
    if (i > 0) {
        a = a % 2 ** 32;
        n += i;
    }
    const s = G(8);
    s.write_shift(4, a);
    s.write_shift(4, n);
    return s;
}
function nf(e, t, r) {
    const a = e.l;
    const n = e.read_shift(0, "lpstr-cp");
    if (r) {
        while(e.l - a & 3){
            ++e.l;
        }
    }
    return n;
}
function sf(e, t, r) {
    const a = e.read_shift(0, "lpwstr");
    return a;
}
function ff(e, t, r) {
    if (t === 31) {
        return sf(e);
    }
    return nf(e, t, r);
}
function nn(e, t, r) {
    return ff(e, t, r === false ? 0 : 4);
}
function Bl(e, t) {
    if (!t) {
        throw new Error("VtUnalignedString must have positive length");
    }
    return ff(e, t, 0);
}
function Ml(e) {
    for(var t = e.read_shift(4), r = [], a = 0; a != t; ++a){
        const n = e.l;
        r[a] = e.read_shift(0, "lpwstr").replace(_r, "");
        if (e.l - n & 2) {
            e.l += 2;
        }
    }
    return r;
}
function Ul(e) {
    for(var t = e.read_shift(4), r = [], a = 0; a != t; ++a){
        r[a] = e.read_shift(0, "lpstr-cp").replace(_r, "");
    }
    return r;
}
function Wl(e) {
    const t = e.l;
    const r = w0(e, Ys);
    if (e[e.l] == 0 && e[e.l + 1] == 0 && e.l - t & 2) {
        e.l += 2;
    }
    const a = w0(e, Ar);
    return [
        r,
        a
    ];
}
function Hl(e) {
    for(var t = e.read_shift(4), r = [], a = 0; a < t / 2; ++a){
        r.push(Wl(e));
    }
    return r;
}
function bi(content, t) {
    for(var r = content.read_shift(4), a = {}, n = 0; n != r; ++n){
        const i = content.read_shift(4);
        const s = content.read_shift(4);
        a[i] = content.read_shift(s, t === 1200 ? "utf16le" : "utf8").replace(_r, "").replace(ka, "!");
        if (t === 1200 && s % 2) {
            content.l += 2;
        }
    }
    if (content.l & 3) {
        content.l = content.l >> 3 << 2;
    }
    return a;
}
function cf(e) {
    const t = e.read_shift(4);
    const r = e.slice(e.l, e.l + t);
    e.l += t;
    if ((t & 3) > 0) {
        e.l += 4 - (t & 3) & 3;
    }
    return r;
}
function Vl(e) {
    const t = {};
    t.Size = e.read_shift(4);
    e.l += t.Size + 3 - (t.Size - 1) % 4;
    return t;
}
function w0(e, t, r) {
    const a = e.read_shift(2);
    let n;
    const i = r || {};
    e.l += 2;
    if (t !== Ii && a !== t && _l.indexOf(t) === -1 && !((t & 65534) == 4126 && (a & 65534) == 4126)) {
        throw new Error(`Expected type ${t} saw ${a}`);
    }
    switch(t === Ii ? a : t){
        case 2:
            n = e.read_shift(2, "i");
            if (!i.raw) {
                e.l += 2;
            }
            return n;
        case 3:
            n = e.read_shift(4, "i");
            return n;
        case 11:
            return e.read_shift(4) !== 0;
        case 19:
            n = e.read_shift(4);
            return n;
        case 30:
            return nf(e, a, 4).replace(_r, "");
        case 31:
            return sf(e);
        case 64:
            return Pn(e);
        case 65:
            return cf(e);
        case 71:
            return Vl(e);
        case 80:
            return nn(e, a, !i.raw).replace(_r, "");
        case 81:
            return Bl(e, a).replace(_r, "");
        case 4108:
            return Hl(e);
        case 4126:
        case 4127:
            if (a == 4127) {
                return Ml(e);
            }
            return Ul(e);
        default:
            throw new Error(`TypedPropertyValue unrecognized type ${t} ${a}`);
    }
}
function Pi(e, t) {
    const r = G(4);
    let a = G(4);
    r.write_shift(4, e == 80 ? 31 : e);
    switch(e){
        case 3:
            a.write_shift(-4, t);
            break;
        case 5:
            a = G(8);
            a.write_shift(8, t, "f");
            break;
        case 11:
            a.write_shift(4, t ? 1 : 0);
            break;
        case 64:
            a = Ll(t);
            break;
        case 31:
        case 80:
            a = G(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2));
            a.write_shift(4, t.length + 1);
            a.write_shift(0, t, "dbcs");
            while(a.l != a.length){
                a.write_shift(1, 0);
            }
            break;
        default:
            throw new Error(`TypedPropertyValue unrecognized type ${e} ${t}`);
    }
    return bconcat([
        r,
        a
    ]);
}
function Li(content, t) {
    const content_l = content.l;
    const a = content.read_shift(4);
    const n = content.read_shift(4);
    const i = [];
    let s = 0;
    let f = 0;
    let c = -1;
    let o = {};
    for(s = 0; s != n; ++s){
        const l = content.read_shift(4);
        const u = content.read_shift(4);
        i[s] = [
            l,
            u + content_l
        ];
    }
    i.sort((y, g)=>y[1] - g[1]);
    const x = {};
    for(s = 0; s != n; ++s){
        if (content.l !== i[s][1]) {
            let d = true;
            if (s > 0 && t) {
                switch(t[i[s - 1][0]].t){
                    case 2:
                        if (content.l + 2 === i[s][1]) {
                            content.l += 2;
                            d = false;
                        }
                        break;
                    case 80:
                        if (content.l <= i[s][1]) {
                            content.l = i[s][1];
                            d = false;
                        }
                        break;
                    case 4108:
                        if (content.l <= i[s][1]) {
                            content.l = i[s][1];
                            d = false;
                        }
                        break;
                }
            }
            if ((!t || s == 0) && content.l <= i[s][1]) {
                d = false;
                content.l = i[s][1];
            }
            if (d) {
                throw new Error(`Read Error: Expected address ${i[s][1]} at ${content.l} :${s}`);
            }
        }
        if (t) {
            const v = t[i[s][0]];
            x[v.n] = w0(content, v.t, {
                raw: true
            });
            if (v.p === "version") {
                x[v.n] = `${String(x[v.n] >> 16)}.${`0000${String(x[v.n] & 65535)}`.slice(-4)}`;
            }
            if (v.n == "CodePage") {
                switch(x[v.n]){
                    case 0:
                        x[v.n] = 1252;
                    case 874:
                    case 932:
                    case 936:
                    case 949:
                    case 950:
                    case 1250:
                    case 1251:
                    case 1253:
                    case 1254:
                    case 1255:
                    case 1256:
                    case 1257:
                    case 1258:
                    case 10000:
                    case 1200:
                    case 1201:
                    case 1252:
                    case 65000:
                    case -536:
                    case 65001:
                    case -535:
                        Gr(f = x[v.n] >>> 0 & 65535);
                        break;
                    default:
                        throw new Error(`Unsupported CodePage: ${x[v.n]}`);
                }
            }
        } else if (i[s][0] === 1) {
            f = x.CodePage = w0(content, Nn);
            Gr(f);
            if (c !== -1) {
                const h = content.l;
                content.l = i[c][1];
                o = bi(content, f);
                content.l = h;
            }
        } else if (i[s][0] === 0) {
            if (f === 0) {
                c = s;
                content.l = i[s + 1][1];
                continue;
            }
            o = bi(content, f);
        } else {
            const p = o[i[s][0]];
            let w;
            switch(content[content.l]){
                case 65:
                    content.l += 4;
                    w = cf(content);
                    break;
                case 30:
                    content.l += 4;
                    w = nn(content, content[content.l - 4]).replace(/\u0000+$/, "");
                    break;
                case 31:
                    content.l += 4;
                    w = nn(content, content[content.l - 4]).replace(/\u0000+$/, "");
                    break;
                case 3:
                    content.l += 4;
                    w = content.read_shift(4, "i");
                    break;
                case 19:
                    content.l += 4;
                    w = content.read_shift(4);
                    break;
                case 5:
                    content.l += 4;
                    w = content.read_shift(8, "f");
                    break;
                case 11:
                    content.l += 4;
                    w = qe(content, 4);
                    break;
                case 64:
                    content.l += 4;
                    w = Ve(Pn(content));
                    break;
                default:
                    throw new Error(`unparsed value: ${content[content.l]}`);
            }
            x[p] = w;
        }
    }
    content.l = content_l + a;
    return x;
}
const of = [
    "CodePage",
    "Thumbnail",
    "_PID_LINKBASE",
    "_PID_HLINKS",
    "SystemIdentifier",
    "FMTID"
];
function Xl(e) {
    switch(typeof e){
        case "boolean":
            return 11;
        case "number":
            if ((e | 0) == e) {
                return 3;
            }
            return 5;
        case "string":
            return 31;
        case "object":
            if (e instanceof Date) {
                return 64;
            }
            break;
    }
    return -1;
}
function Bi(e, t, r) {
    const a = G(8);
    const n = [];
    const i = [];
    let s = 8;
    let f = 0;
    let c = G(8);
    let o = G(8);
    c.write_shift(4, 2);
    c.write_shift(4, 1200);
    o.write_shift(4, 1);
    i.push(c);
    n.push(o);
    s += 8 + c.length;
    if (!t) {
        o = G(8);
        o.write_shift(4, 0);
        n.unshift(o);
        const l = [
            G(4)
        ];
        l[0].write_shift(4, e.length);
        for(f = 0; f < e.length; ++f){
            const u = e[f][0];
            c = G(8 + 2 * (u.length + 1) + (u.length % 2 ? 0 : 2));
            c.write_shift(4, f + 2);
            c.write_shift(4, u.length + 1);
            c.write_shift(0, u, "dbcs");
            while(c.l != c.length){
                c.write_shift(1, 0);
            }
            l.push(c);
        }
        c = bconcat(l);
        i.unshift(c);
        s += 8 + c.length;
    }
    for(f = 0; f < e.length; ++f){
        if (!(t && !t[e[f][0]]) && !(of.indexOf(e[f][0]) > -1 || ef.indexOf(e[f][0]) > -1) && e[f][1] != null) {
            let x = e[f][1];
            let d = 0;
            if (t) {
                d = +t[e[f][0]];
                const v = r[d];
                if (v.p == "version" && typeof x === "string") {
                    const h = x.split(".");
                    x = (+h[0] << 16) + (+h[1] || 0);
                }
                c = Pi(v.t, x);
            } else {
                let p = Xl(x);
                if (p == -1) {
                    p = 31;
                    x = String(x);
                }
                c = Pi(p, x);
            }
            i.push(c);
            o = G(8);
            o.write_shift(4, t ? d : 2 + f);
            n.push(o);
            s += 8 + c.length;
        }
    }
    let w = 8 * (i.length + 1);
    for(f = 0; f < i.length; ++f){
        n[f].write_shift(4, w);
        w += i[f].length;
    }
    a.write_shift(4, s);
    a.write_shift(4, i.length);
    return bconcat([
        a
    ].concat(n).concat(i));
}
function Mi({ content }, t, r) {
    if (!content) {
        return {};
    }
    prep_blob(content, 0);
    let n;
    let i;
    let s;
    let f;
    let c = 0;
    content.chk("feff", "Byte Order: ");
    content.read_shift(2);
    const SystemIdentifier = content.read_shift(4);
    const l = content.read_shift(16);
    if (l !== CFB.utils.consts.HEADER_CLSID && l !== r) {
        throw new Error(`Bad PropertySet CLSID ${l}`);
    }
    n = content.read_shift(4);
    if (n !== 1 && n !== 2) {
        throw new Error(`Unrecognized #Sets: ${n}`);
    }
    i = content.read_shift(16);
    f = content.read_shift(4);
    if (n === 1 && f !== content.l) {
        throw new Error(`Length mismatch: ${f} !== ${content.l}`);
    }
    if (n === 2) {
        s = content.read_shift(16);
        c = content.read_shift(4);
    }
    const u = Li(content, t);
    const x = {
        SystemIdentifier
    };
    for(var d in u){
        x[d] = u[d];
    }
    x.FMTID = i;
    if (n === 1) {
        return x;
    }
    if (c - content.l == 2) {
        content.l += 2;
    }
    if (content.l !== c) {
        throw new Error(`Length mismatch 2: ${content.l} !== ${c}`);
    }
    let v;
    try {
        v = Li(content, null);
    } catch  {}
    for(d in v){
        x[d] = v[d];
    }
    x.FMTID = [
        i,
        s
    ];
    return x;
}
function Ui(e, t, r, a, n, i) {
    const s = G(n ? 68 : 48);
    const f = [
        s
    ];
    s.write_shift(2, 65534);
    s.write_shift(2, 0);
    s.write_shift(4, 842412599);
    s.write_shift(16, CFB.utils.consts.HEADER_CLSID, "hex");
    s.write_shift(4, n ? 2 : 1);
    s.write_shift(16, t, "hex");
    s.write_shift(4, n ? 68 : 48);
    const c = Bi(e, r, a);
    f.push(c);
    if (n) {
        const o = Bi(n, null, null);
        s.write_shift(16, i, "hex");
        s.write_shift(4, 68 + c.length);
        f.push(o);
    }
    return bconcat(f);
}
function gt(e, t) {
    e.read_shift(t);
    return null;
}
function Gl(e, t) {
    if (!t) {
        t = G(e);
    }
    for(let r = 0; r < e; ++r){
        t.write_shift(1, 0);
    }
    return t;
}
function zl(e, t, r) {
    const a = [];
    for(var n = e.l + t; e.l < n;){
        a.push(r(e, n - e.l));
    }
    if (n !== e.l) {
        throw new Error("Slurp error");
    }
    return a;
}
function qe(e, t) {
    return e.read_shift(t) === 1;
}
function Fr(e, t) {
    if (!t) {
        t = G(2);
    }
    t.write_shift(2, +!!e);
    return t;
}
function tr(e) {
    return e.read_shift(2, "u");
}
function Xr(e, t) {
    if (!t) {
        t = G(2);
    }
    t.write_shift(2, e);
    return t;
}
function lf(e, t) {
    return zl(e, t, tr);
}
function $l(e) {
    const t = e.read_shift(1);
    const r = e.read_shift(1);
    if (r === 1) {
        return t;
    }
    return t === 1;
}
function uf(e, t, r) {
    if (!r) {
        r = G(2);
    }
    r.write_shift(1, t == "e" ? +e : +!!e);
    r.write_shift(1, t == "e" ? 1 : 0);
    return r;
}
function Ya(e, t, r) {
    const a = e.read_shift(r && r.biff >= 12 ? 2 : 1);
    let n = "sbcs-cont";
    const i = Nr;
    if (r && r.biff >= 8) {
        Nr = 1200;
    }
    if (!r || r.biff == 8) {
        const s = e.read_shift(1);
        if (s) {
            n = "dbcs-cont";
        }
    } else {
        if (r.biff == 12) {
            n = "wstr";
        }
    }
    if (r.biff >= 2 && r.biff <= 5) {
        n = "cpstr";
    }
    const f = a ? e.read_shift(a, n) : "";
    Nr = i;
    return f;
}
function Kl(e) {
    const t = Nr;
    Nr = 1200;
    const r = e.read_shift(2);
    const a = e.read_shift(1);
    const n = a & 4;
    const i = a & 8;
    const s = 1 + (a & 1);
    let f = 0;
    let c;
    const o = {};
    if (i) {
        f = e.read_shift(2);
    }
    if (n) {
        c = e.read_shift(4);
    }
    const l = s == 2 ? "dbcs-cont" : "sbcs-cont";
    const u = r === 0 ? "" : e.read_shift(r, l);
    if (i) {
        e.l += 4 * f;
    }
    if (n) {
        e.l += c;
    }
    o.t = u;
    if (!i) {
        o.raw = `<t>${o.t}</t>`;
        o.r = o.t;
    }
    Nr = t;
    return o;
}
function Yl(e) {
    const t = e.t || "";
    const r = G(3);
    r.write_shift(2, t.length);
    r.write_shift(1, 1);
    const a = G(2 * t.length);
    a.write_shift(2 * t.length, t, "utf16le");
    const n = [
        r,
        a
    ];
    return bconcat(n);
}
function Ht(e, t, r) {
    let a;
    if (r) {
        if (r.biff >= 2 && r.biff <= 5) {
            return e.read_shift(t, "cpstr");
        }
        if (r.biff >= 12) {
            return e.read_shift(t, "dbcs-cont");
        }
    }
    const n = e.read_shift(1);
    if (n === 0) {
        a = e.read_shift(t, "sbcs-cont");
    } else {
        a = e.read_shift(t, "dbcs-cont");
    }
    return a;
}
function ja(e, t, r) {
    const a = e.read_shift(r && r.biff == 2 ? 1 : 2);
    if (a === 0) {
        e.l++;
        return "";
    }
    return Ht(e, a, r);
}
function Jt(e, t, r) {
    if (r.biff > 5) {
        return ja(e, t, r);
    }
    const a = e.read_shift(1);
    if (a === 0) {
        e.l++;
        return "";
    }
    return e.read_shift(a, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function hf(e, t, r) {
    if (!r) {
        r = G(3 + 2 * e.length);
    }
    r.write_shift(2, e.length);
    r.write_shift(1, 1);
    r.write_shift(31, e, "utf16le");
    return r;
}
function jl(e) {
    const t = e.read_shift(1);
    e.l++;
    const r = e.read_shift(2);
    e.l += 2;
    return [
        t,
        r
    ];
}
function Jl(e) {
    const t = e.read_shift(4);
    const r = e.l;
    let a = false;
    if (t > 24) {
        e.l += t - 24;
        if (e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763") {
            a = true;
        }
        e.l = r;
    }
    const n = e.read_shift((a ? t - 24 : t) >> 1, "utf16le").replace(_r, "");
    if (a) {
        e.l += 24;
    }
    return n;
}
function Zl(e) {
    for(var t = e.read_shift(2), r = ""; t-- > 0;){
        r += "../";
    }
    const a = e.read_shift(0, "lpstr-ansi");
    e.l += 2;
    if (e.read_shift(2) != 57005) {
        throw new Error("Bad FileMoniker");
    }
    const n = e.read_shift(4);
    if (n === 0) {
        return r + a.replace(/\\/g, "/");
    }
    const i = e.read_shift(4);
    if (e.read_shift(2) != 3) {
        throw new Error("Bad FileMoniker");
    }
    const s = e.read_shift(i >> 1, "utf16le").replace(_r, "");
    return r + s;
}
function ql(e, t) {
    const r = e.read_shift(16);
    switch(r){
        case "e0c9ea79f9bace118c8200aa004ba90b":
            return Jl(e);
        case "0303000000000000c000000000000046":
            return Zl(e);
        default:
            throw new Error(`Unsupported Moniker ${r}`);
    }
}
function i0(e) {
    const t = e.read_shift(4);
    const r = t > 0 ? e.read_shift(t, "utf16le").replace(_r, "") : "";
    return r;
}
function Wi(e, t) {
    if (!t) {
        t = G(6 + e.length * 2);
    }
    t.write_shift(4, 1 + e.length);
    for(let r = 0; r < e.length; ++r){
        t.write_shift(2, e.charCodeAt(r));
    }
    t.write_shift(2, 0);
    return t;
}
function Ql(e, t) {
    const r = e.l + t;
    const a = e.read_shift(4);
    if (a !== 2) {
        throw new Error(`Unrecognized streamVersion: ${a}`);
    }
    const n = e.read_shift(2);
    e.l += 2;
    let i;
    let s;
    let f;
    let c;
    let o = "";
    let l;
    let u;
    if (n & 16) {
        i = i0(e, r - e.l);
    }
    if (n & 128) {
        s = i0(e, r - e.l);
    }
    if ((n & 257) === 257) {
        f = i0(e, r - e.l);
    }
    if ((n & 257) === 1) {
        c = ql(e, r - e.l);
    }
    if (n & 8) {
        o = i0(e, r - e.l);
    }
    if (n & 32) {
        l = e.read_shift(16);
    }
    if (n & 64) {
        u = Pn(e);
    }
    e.l = r;
    let x = s || f || c || "";
    if (x && o) {
        x += `#${o}`;
    }
    if (!x) {
        x = `#${o}`;
    }
    if (n & 2 && x.charAt(0) == "/" && x.charAt(1) != "/") {
        x = `file://${x}`;
    }
    const d = {
        Target: x
    };
    if (l) {
        d.guid = l;
    }
    if (u) {
        d.time = u;
    }
    if (i) {
        d.Tooltip = i;
    }
    return d;
}
function eu(e) {
    const t = G(512);
    let r = 0;
    let e_Target = e.Target;
    if (e_Target.slice(0, 7) == "file://") {
        e_Target = e_Target.slice(7);
    }
    const n = e_Target.indexOf("#");
    let i = n > -1 ? 31 : 23;
    switch(e_Target.charAt(0)){
        case "#":
            i = 28;
            break;
        case ".":
            i &= -3;
            break;
    }
    t.write_shift(4, 2);
    t.write_shift(4, i);
    let s = [
        8,
        6815827,
        6619237,
        4849780,
        83
    ];
    for(r = 0; r < s.length; ++r){
        t.write_shift(4, s[r]);
    }
    if (i == 28) {
        e_Target = e_Target.slice(1);
        Wi(e_Target, t);
    } else if (i & 2) {
        s = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" ");
        for(r = 0; r < s.length; ++r){
            t.write_shift(1, parseInt(s[r], 16));
        }
        const f = n > -1 ? e_Target.slice(0, n) : e_Target;
        t.write_shift(4, 2 * (f.length + 1));
        for(r = 0; r < f.length; ++r){
            t.write_shift(2, f.charCodeAt(r));
        }
        t.write_shift(2, 0);
        if (i & 8) {
            Wi(n > -1 ? e_Target.slice(n + 1) : "", t);
        }
    } else {
        s = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" ");
        for(r = 0; r < s.length; ++r){
            t.write_shift(1, parseInt(s[r], 16));
        }
        for(var c = 0; e_Target.slice(c * 3, c * 3 + 3) == "../" || e_Target.slice(c * 3, c * 3 + 3) == "..\\";){
            ++c;
        }
        t.write_shift(2, c);
        t.write_shift(4, e_Target.length - 3 * c + 1);
        for(r = 0; r < e_Target.length - 3 * c; ++r){
            t.write_shift(1, e_Target.charCodeAt(r + 3 * c) & 255);
        }
        t.write_shift(1, 0);
        t.write_shift(2, 65535);
        t.write_shift(2, 57005);
        for(r = 0; r < 6; ++r){
            t.write_shift(4, 0);
        }
    }
    return t.slice(0, t.l);
}
function xf(e) {
    const t = e.read_shift(1);
    const r = e.read_shift(1);
    const a = e.read_shift(1);
    const n = e.read_shift(1);
    return [
        t,
        r,
        a,
        n
    ];
}
function df(e, t) {
    const r = xf(e);
    r[3] = 0;
    return r;
}
function st(e) {
    const t = e.read_shift(2);
    const r = e.read_shift(2);
    const a = e.read_shift(2);
    return {
        r: t,
        c: r,
        ixfe: a
    };
}
function Vt(e, t, r, a) {
    if (!a) {
        a = G(6);
    }
    a.write_shift(2, e);
    a.write_shift(2, t);
    a.write_shift(2, r || 0);
    return a;
}
function ru(e) {
    const type = e.read_shift(2);
    const flags = e.read_shift(2);
    e.l += 8;
    return {
        type,
        flags
    };
}
function tu(e, t, r) {
    if (t === 0) {
        return "";
    }
    return Jt(e, t, r);
}
function au(e, t, r) {
    const a = r.biff > 8 ? 4 : 2;
    const n = e.read_shift(a);
    const i = e.read_shift(a, "i");
    const s = e.read_shift(a, "i");
    return [
        n,
        i,
        s
    ];
}
function vf(e) {
    const t = e.read_shift(2);
    const r = Rn(e);
    return [
        t,
        r
    ];
}
function nu(e, t, r) {
    e.l += 4;
    t -= 4;
    let a = e.l + t;
    const n = Ya(e, t, r);
    const i = e.read_shift(2);
    a -= e.l;
    if (i !== a) {
        throw new Error(`Malformed AddinUdf: padding = ${a} != ${i}`);
    }
    e.l += i;
    return n;
}
function O0(e) {
    const t = e.read_shift(2);
    const r = e.read_shift(2);
    const a = e.read_shift(2);
    const n = e.read_shift(2);
    return {
        s: {
            c: a,
            r: t
        },
        e: {
            c: n,
            r
        }
    };
}
function pf(e, t) {
    if (!t) {
        t = G(8);
    }
    t.write_shift(2, e.s.r);
    t.write_shift(2, e.e.r);
    t.write_shift(2, e.s.c);
    t.write_shift(2, e.e.c);
    return t;
}
function mf(e) {
    const t = e.read_shift(2);
    const r = e.read_shift(2);
    const a = e.read_shift(1);
    const n = e.read_shift(1);
    return {
        s: {
            c: a,
            r: t
        },
        e: {
            c: n,
            r
        }
    };
}
const iu = mf;
function gf(e) {
    e.l += 4;
    const t = e.read_shift(2);
    const r = e.read_shift(2);
    const a = e.read_shift(2);
    e.l += 12;
    return [
        r,
        t,
        a
    ];
}
function su(e) {
    const t = {};
    e.l += 4;
    e.l += 16;
    t.fSharedNote = e.read_shift(2);
    e.l += 4;
    return t;
}
function fu(e) {
    const t = {};
    e.l += 4;
    e.cf = e.read_shift(2);
    return t;
}
function dr(e) {
    e.l += 2;
    e.l += e.read_shift(2);
}
const cu = {
    0: dr,
    4: dr,
    5: dr,
    6: dr,
    7: fu,
    8: dr,
    9: dr,
    10: dr,
    11: dr,
    12: dr,
    13: su,
    14: dr,
    15: dr,
    16: dr,
    17: dr,
    18: dr,
    19: dr,
    20: dr,
    21: gf
};
function ou(e, t) {
    for(var r = e.l + t, a = []; e.l < r;){
        const n = e.read_shift(2);
        e.l -= 2;
        try {
            a.push(cu[n](e, r - e.l));
        } catch  {
            e.l = r;
            return a;
        }
    }
    if (e.l != r) {
        e.l = r;
    }
    return a;
}
function s0(e, t) {
    const r = {
        BIFFVer: 0,
        dt: 0
    };
    r.BIFFVer = e.read_shift(2);
    t -= 2;
    if (t >= 2) {
        r.dt = e.read_shift(2);
        e.l -= 2;
    }
    switch(r.BIFFVer){
        case 1536:
        case 1280:
        case 1024:
        case 768:
        case 512:
        case 2:
        case 7:
            break;
        default:
            if (t > 6) {
                throw new Error(`Unexpected BIFF Ver ${r.BIFFVer}`);
            }
    }
    e.read_shift(t);
    return r;
}
function Ln(e, t, r) {
    let a = 1536;
    let n = 16;
    switch(r.bookType){
        case "biff8":
            break;
        case "biff5":
            a = 1280;
            n = 8;
            break;
        case "biff4":
            a = 4;
            n = 6;
            break;
        case "biff3":
            a = 3;
            n = 6;
            break;
        case "biff2":
            a = 2;
            n = 4;
            break;
        case "xla":
            break;
        default:
            throw new Error("unsupported BIFF version");
    }
    const i = G(n);
    i.write_shift(2, a);
    i.write_shift(2, t);
    if (n > 4) {
        i.write_shift(2, 29282);
    }
    if (n > 6) {
        i.write_shift(2, 1997);
    }
    if (n > 8) {
        i.write_shift(2, 49161);
        i.write_shift(2, 1);
        i.write_shift(2, 1798);
        i.write_shift(2, 0);
    }
    return i;
}
function lu(e, t) {
    if (!(t === 0)) {
        e.read_shift(2);
    }
    return 1200;
}
function uu(e, t, r) {
    if (r.enc) {
        e.l += t;
        return "";
    }
    const a = e.l;
    const n = Jt(e, 0, r);
    e.read_shift(t + a - e.l);
    return n;
}
function hu(e, t) {
    const r = !t || t.biff == 8;
    const a = G(r ? 112 : 54);
    a.write_shift(t.biff == 8 ? 2 : 1, 7);
    if (r) {
        a.write_shift(1, 0);
    }
    a.write_shift(4, 859007059);
    a.write_shift(4, 5458548 | (r ? 0 : 536870912));
    while(a.l < a.length){
        a.write_shift(1, r ? 0 : 32);
    }
    return a;
}
function xu(e, t, r) {
    const a = r && r.biff == 8 || t == 2 ? e.read_shift(2) : (e.l += t, 0);
    return {
        fDialog: a & 16,
        fBelow: a & 64,
        fRight: a & 128
    };
}
function du(e, t, r) {
    const pos = e.read_shift(4);
    const hs_1 = e.read_shift(1) & 3;
    let dt_1 = e.read_shift(1);
    switch(dt_1){
        case 0:
            dt_1 = "Worksheet";
            break;
        case 1:
            dt_1 = "Macrosheet";
            break;
        case 2:
            dt_1 = "Chartsheet";
            break;
        case 6:
            dt_1 = "VBAModule";
            break;
    }
    let s = Ya(e, 0, r);
    if (s.length === 0) {
        s = "Sheet1";
    }
    return {
        pos,
        hs: hs_1,
        dt: dt_1,
        name: s
    };
}
function vu(e, t) {
    const r = !t || t.biff >= 8 ? 2 : 1;
    const a = G(8 + r * e.name.length);
    a.write_shift(4, e.pos);
    a.write_shift(1, e.hs || 0);
    a.write_shift(1, e.dt);
    a.write_shift(1, e.name.length);
    if (t.biff >= 8) {
        a.write_shift(1, 1);
    }
    a.write_shift(r * e.name.length, e.name, t.biff < 8 ? "sbcs" : "utf16le");
    const n = a.slice(0, a.l);
    n.l = a.l;
    return n;
}
function pu(e, t) {
    for(var r = e.l + t, a = e.read_shift(4), n = e.read_shift(4), i = [], s = 0; s != n && e.l < r; ++s){
        i.push(Kl(e));
    }
    i.Count = a;
    i.Unique = n;
    return i;
}
function mu(Strings, t) {
    const r = G(8);
    r.write_shift(4, Strings.Count);
    r.write_shift(4, Strings.Unique);
    const a = [];
    for(let n = 0; n < Strings.length; ++n){
        a[n] = Yl(Strings[n]);
    }
    const i = bconcat([
        r
    ].concat(a));
    i.parts = [
        r.length
    ].concat(a.map((s)=>s.length));
    return i;
}
function gu(e, t) {
    const r = {};
    r.dsst = e.read_shift(2);
    e.l += t - 2;
    return r;
}
function _u(e) {
    const t = {};
    t.r = e.read_shift(2);
    t.c = e.read_shift(2);
    t.cnt = e.read_shift(2) - t.c;
    const r = e.read_shift(2);
    e.l += 4;
    const a = e.read_shift(1);
    e.l += 3;
    if (a & 7) {
        t.level = a & 7;
    }
    if (a & 32) {
        t.hidden = true;
    }
    if (a & 64) {
        t.hpt = r / 20;
    }
    return t;
}
function wu(e) {
    const t = ru(e);
    if (t.type != 2211) {
        throw new Error(`Invalid Future Record ${t.type}`);
    }
    const r = e.read_shift(4);
    return r !== 0;
}
function ku(e) {
    e.read_shift(2);
    return e.read_shift(4);
}
function Hi(e, t, r) {
    let a = 0;
    if (!(r && r.biff == 2)) {
        a = e.read_shift(2);
    }
    let n = e.read_shift(2);
    if (r && r.biff == 2) {
        a = 1 - (n >> 15);
        n &= 32767;
    }
    const i = {
        Unsynced: a & 1,
        DyZero: (a & 2) >> 1,
        ExAsc: (a & 4) >> 2,
        ExDsc: (a & 8) >> 3
    };
    return [
        i,
        n
    ];
}
function Eu(e) {
    const t = e.read_shift(2);
    const r = e.read_shift(2);
    const a = e.read_shift(2);
    const n = e.read_shift(2);
    const Flags = e.read_shift(2);
    const CurTab = e.read_shift(2);
    const FirstTab = e.read_shift(2);
    const Selected = e.read_shift(2);
    const TabRatio = e.read_shift(2);
    return {
        Pos: [
            t,
            r
        ],
        Dim: [
            a,
            n
        ],
        Flags,
        CurTab,
        FirstTab,
        Selected,
        TabRatio
    };
}
function Tu() {
    const e = G(18);
    e.write_shift(2, 0);
    e.write_shift(2, 0);
    e.write_shift(2, 29280);
    e.write_shift(2, 17600);
    e.write_shift(2, 56);
    e.write_shift(2, 0);
    e.write_shift(2, 0);
    e.write_shift(2, 1);
    e.write_shift(2, 500);
    return e;
}
function Su(e, t, r) {
    if (r && r.biff >= 2 && r.biff < 5) {
        return {};
    }
    const a = e.read_shift(2);
    return {
        RTL: a & 64
    };
}
function Fu(e) {
    const t = G(18);
    let r = 1718;
    if (e && e.RTL) {
        r |= 64;
    }
    t.write_shift(2, r);
    t.write_shift(4, 0);
    t.write_shift(4, 64);
    t.write_shift(4, 0);
    t.write_shift(4, 0);
    return t;
}
function yu() {}
function Au(e, t, r) {
    const a = {
        dyHeight: e.read_shift(2),
        fl: e.read_shift(2)
    };
    switch(r && r.biff || 8){
        case 2:
            break;
        case 3:
        case 4:
            e.l += 2;
            break;
        default:
            e.l += 10;
            break;
    }
    a.name = Ya(e, 0, r);
    return a;
}
function Cu(e, t) {
    const r = e.name || "Arial";
    const a = t && t.biff == 5;
    const n = a ? 15 + r.length : 16 + 2 * r.length;
    const i = G(n);
    i.write_shift(2, e.sz * 20);
    i.write_shift(4, 0);
    i.write_shift(2, 400);
    i.write_shift(4, 0);
    i.write_shift(2, 0);
    i.write_shift(1, r.length);
    if (!a) {
        i.write_shift(1, 1);
    }
    i.write_shift((a ? 1 : 2) * r.length, r, a ? "sbcs" : "utf16le");
    return i;
}
function Du(e) {
    const t = st(e);
    t.isst = e.read_shift(4);
    return t;
}
function Ou(e, t, r, a) {
    const n = G(10);
    Vt(e, t, a, n);
    n.write_shift(4, r);
    return n;
}
function Iu(e, t, r) {
    if (r.biffguess && r.biff == 2) {
        r.biff = 5;
    }
    const a = e.l + t;
    const n = st(e);
    r.biff == 2 && e.l++;
    const i = ja(e, a - e.l, r);
    n.val = i;
    return n;
}
function Ru(e, t, r, a, n) {
    const i = !n || n.biff == 8;
    const s = G(8 + +i + (1 + i) * r.length);
    Vt(e, t, a, s);
    s.write_shift(2, r.length);
    if (i) {
        s.write_shift(1, 1);
    }
    s.write_shift((1 + i) * r.length, r, i ? "utf16le" : "sbcs");
    return s;
}
function Nu(e, t, r) {
    const a = e.read_shift(2);
    const n = Jt(e, 0, r);
    return [
        a,
        n
    ];
}
function bu(e, t, r, a) {
    const n = r && r.biff == 5;
    if (!a) {
        a = G(n ? 3 + t.length : 5 + 2 * t.length);
    }
    a.write_shift(2, e);
    a.write_shift(n ? 1 : 2, t.length);
    if (!n) {
        a.write_shift(1, 1);
    }
    a.write_shift((n ? 1 : 2) * t.length, t, n ? "sbcs" : "utf16le");
    const i = a.length > a.l ? a.slice(0, a.l) : a;
    if (i.l == null) {
        i.l = i.length;
    }
    return i;
}
const Pu = Jt;
function Vi(e, t, r) {
    const a = e.l + t;
    const n = r.biff == 8 || !r.biff ? 4 : 2;
    const i = e.read_shift(n);
    const s = e.read_shift(n);
    const f = e.read_shift(2);
    const c = e.read_shift(2);
    e.l = a;
    return {
        s: {
            r: i,
            c: f
        },
        e: {
            r: s,
            c
        }
    };
}
function Lu(e, t) {
    const r = t.biff == 8 || !t.biff ? 4 : 2;
    const a = G(2 * r + 6);
    a.write_shift(r, e.s.r);
    a.write_shift(r, e.e.r + 1);
    a.write_shift(2, e.s.c);
    a.write_shift(2, e.e.c + 1);
    a.write_shift(2, 0);
    return a;
}
function Bu(e) {
    const t = e.read_shift(2);
    const r = e.read_shift(2);
    const a = vf(e);
    return {
        r: t,
        c: r,
        ixfe: a[0],
        rknum: a[1]
    };
}
function Mu(e, t) {
    for(var r = e.l + t - 2, a = e.read_shift(2), n = e.read_shift(2), rkrec = []; e.l < r;){
        rkrec.push(vf(e));
    }
    if (e.l !== r) {
        throw new Error("MulRK read error");
    }
    const s = e.read_shift(2);
    if (rkrec.length != s - n + 1) {
        throw new Error("MulRK length mismatch");
    }
    return {
        r: a,
        c: n,
        C: s,
        rkrec
    };
}
function Uu(e, t) {
    for(var r = e.l + t - 2, a = e.read_shift(2), n = e.read_shift(2), i = []; e.l < r;){
        i.push(e.read_shift(2));
    }
    if (e.l !== r) {
        throw new Error("MulBlank read error");
    }
    const s = e.read_shift(2);
    if (i.length != s - n + 1) {
        throw new Error("MulBlank length mismatch");
    }
    return {
        r: a,
        c: n,
        C: s,
        ixfe: i
    };
}
function Wu(e, t, r, a) {
    const n = {};
    const i = e.read_shift(4);
    const s = e.read_shift(4);
    const f = e.read_shift(4);
    const c = e.read_shift(2);
    n.patternType = wl[f >> 26];
    if (a.cellStyles) {
        n.alc = i & 7;
        n.fWrap = i >> 3 & 1;
        n.alcV = i >> 4 & 7;
        n.fJustLast = i >> 7 & 1;
        n.trot = i >> 8 & 255;
        n.cIndent = i >> 16 & 15;
        n.fShrinkToFit = i >> 20 & 1;
        n.iReadOrder = i >> 22 & 2;
        n.fAtrNum = i >> 26 & 1;
        n.fAtrFnt = i >> 27 & 1;
        n.fAtrAlc = i >> 28 & 1;
        n.fAtrBdr = i >> 29 & 1;
        n.fAtrPat = i >> 30 & 1;
        n.fAtrProt = i >> 31 & 1;
        n.dgLeft = s & 15;
        n.dgRight = s >> 4 & 15;
        n.dgTop = s >> 8 & 15;
        n.dgBottom = s >> 12 & 15;
        n.icvLeft = s >> 16 & 127;
        n.icvRight = s >> 23 & 127;
        n.grbitDiag = s >> 30 & 3;
        n.icvTop = f & 127;
        n.icvBottom = f >> 7 & 127;
        n.icvDiag = f >> 14 & 127;
        n.dgDiag = f >> 21 & 15;
        n.icvFore = c & 127;
        n.icvBack = c >> 7 & 127;
        n.fsxButton = c >> 14 & 1;
    }
    return n;
}
function Hu(e, t, r) {
    const a = {};
    a.ifnt = e.read_shift(2);
    a.numFmtId = e.read_shift(2);
    a.flags = e.read_shift(2);
    a.fStyle = a.flags >> 2 & 1;
    t -= 6;
    a.data = Wu(e, t, a.fStyle, r);
    return a;
}
function Xi(e, t, r, a) {
    const n = r && r.biff == 5;
    if (!a) {
        a = G(n ? 16 : 20);
    }
    a.write_shift(2, 0);
    if (e.style) {
        a.write_shift(2, e.numFmtId || 0);
        a.write_shift(2, 65524);
    } else {
        a.write_shift(2, e.numFmtId || 0);
        a.write_shift(2, t << 4);
    }
    let i = 0;
    if (e.numFmtId > 0 && n) {
        i |= 1024;
    }
    a.write_shift(4, i);
    a.write_shift(4, 0);
    if (!n) {
        a.write_shift(4, 0);
    }
    a.write_shift(2, 0);
    return a;
}
function Vu(e) {
    e.l += 4;
    const t = [
        e.read_shift(2),
        e.read_shift(2)
    ];
    t[0] !== 0 && t[0]--;
    t[1] !== 0 && t[1]--;
    if (t[0] > 7 || t[1] > 7) {
        throw new Error(`Bad Gutters: ${t.join("|")}`);
    }
    return t;
}
function Xu(e) {
    const t = G(8);
    t.write_shift(4, 0);
    t.write_shift(2, 0);
    t.write_shift(2, 0);
    return t;
}
function Gi(e, t, r) {
    const a = st(e);
    (r.biff == 2 || t == 9) && ++e.l;
    const n = $l(e);
    a.val = n;
    a.t = n === true || n === false ? "b" : "e";
    return a;
}
function Gu(e, t, r, a, n, i) {
    const s = G(8);
    Vt(e, t, a, s);
    uf(r, i, s);
    return s;
}
function zu(e, t, r) {
    if (r.biffguess && r.biff == 2) {
        r.biff = 5;
    }
    const a = st(e);
    const n = gr(e);
    a.val = n;
    return a;
}
function $u(e, t, r, a) {
    const n = G(14);
    Vt(e, t, a, n);
    Wt(r, n);
    return n;
}
const zi = tu;
function Ku(e, t, r) {
    const a = e.l + t;
    const n = e.read_shift(2);
    const i = e.read_shift(2);
    r.sbcch = i;
    if (i == 1025 || i == 14849) {
        return [
            i,
            n
        ];
    }
    if (i < 1 || i > 255) {
        throw new Error(`Unexpected SupBook type: ${i}`);
    }
    const s = Ht(e, i);
    const f = [];
    while(a > e.l){
        f.push(ja(e));
    }
    return [
        i,
        n,
        s,
        f
    ];
}
function $i(e, t, r) {
    const a = e.read_shift(2);
    let n;
    const i = {
        fBuiltIn: a & 1,
        fWantAdvise: a >>> 1 & 1,
        fWantPict: a >>> 2 & 1,
        fOle: a >>> 3 & 1,
        fOleLink: a >>> 4 & 1,
        cf: a >>> 5 & 1023,
        fIcon: a >>> 15 & 1
    };
    if (r.sbcch === 14849) {
        n = nu(e, t - 2, r);
    }
    i.body = n || e.read_shift(t - 2);
    if (typeof n === "string") {
        i.Name = n;
    }
    return i;
}
const Yu = [
    "_xlnm.Consolidate_Area",
    "_xlnm.Auto_Open",
    "_xlnm.Auto_Close",
    "_xlnm.Extract",
    "_xlnm.Database",
    "_xlnm.Criteria",
    "_xlnm.Print_Area",
    "_xlnm.Print_Titles",
    "_xlnm.Recorder",
    "_xlnm.Data_Form",
    "_xlnm.Auto_Activate",
    "_xlnm.Auto_Deactivate",
    "_xlnm.Sheet_Title",
    "_xlnm._FilterDatabase"
];
function Ki(e, t, r) {
    const a = e.l + t;
    const n = e.read_shift(2);
    const chKey = e.read_shift(1);
    const s = e.read_shift(1);
    const f = e.read_shift(r && r.biff == 2 ? 1 : 2);
    let itab = 0;
    if (!r || r.biff >= 5) {
        if (r.biff != 5) {
            e.l += 2;
        }
        itab = e.read_shift(2);
        if (r.biff == 5) {
            e.l += 2;
        }
        e.l += 4;
    }
    let Name = Ht(e, s, r);
    if (n & 32) {
        Name = Yu[Name.charCodeAt(0)];
    }
    let l = a - e.l;
    r && r.biff == 2 && --l;
    const rgce = a == e.l || f === 0 || !(l > 0) ? [] : ov(e, l, r, f);
    return {
        chKey,
        Name,
        itab,
        rgce
    };
}
function _f(e, t, r) {
    if (r.biff < 8) {
        return ju(e, t, r);
    }
    const a = [];
    const n = e.l + t;
    for(let i = e.read_shift(r.biff > 8 ? 4 : 2); i-- !== 0;){
        a.push(au(e, r.biff > 8 ? 12 : 6, r));
    }
    if (e.l != n) {
        throw new Error(`Bad ExternSheet: ${e.l} != ${n}`);
    }
    return a;
}
function ju(e, t, r) {
    e[e.l + 1] == 3 && e[e.l]++;
    const a = Ya(e, t, r);
    if (a.charCodeAt(0) == 3) {
        return a.slice(1);
    }
    return a;
}
function Ju(e, t, r) {
    if (r.biff < 8) {
        e.l += t;
        return;
    }
    const a = e.read_shift(2);
    const n = e.read_shift(2);
    const i = Ht(e, a, r);
    const s = Ht(e, n, r);
    return [
        i,
        s
    ];
}
function Zu(e, t, r) {
    const a = mf(e);
    e.l++;
    const n = e.read_shift(1);
    t -= 8;
    return [
        lv(e, t, r),
        n,
        a
    ];
}
function Yi(e, t, r) {
    const a = iu(e);
    switch(r.biff){
        case 2:
            e.l++;
            t -= 7;
            break;
        case 3:
        case 4:
            e.l += 2;
            t -= 8;
            break;
        default:
            e.l += 6;
            t -= 12;
    }
    return [
        a,
        fv(e, t, r)
    ];
}
function qu(e) {
    const t = e.read_shift(4) !== 0;
    const r = e.read_shift(4) !== 0;
    const a = e.read_shift(4);
    return [
        t,
        r,
        a
    ];
}
function Qu(e, t, r) {
    if (!(r.biff < 8)) {
        const a = e.read_shift(2);
        const n = e.read_shift(2);
        const i = e.read_shift(2);
        const s = e.read_shift(2);
        const f = Jt(e, 0, r);
        if (r.biff < 8) {
            e.read_shift(1);
        }
        return [
            {
                r: a,
                c: n
            },
            f,
            s,
            i
        ];
    }
}
function eh(e, t, r) {
    return Qu(e, t, r);
}
function rh(e, t) {
    const r = [];
    for(let a = e.read_shift(2); a--;){
        r.push(O0(e));
    }
    return r;
}
function th(e) {
    const t = G(2 + e.length * 8);
    t.write_shift(2, e.length);
    for(let r = 0; r < e.length; ++r){
        pf(e[r], t);
    }
    return t;
}
function ah(e, t, r) {
    if (r && r.biff < 8) {
        return ih(e, t, r);
    }
    const cmo = gf(e);
    const ft = ou(e, t - 22, cmo[1]);
    return {
        cmo,
        ft
    };
}
const nh = {
    8: function(e, t) {
        const r = e.l + t;
        e.l += 10;
        const a = e.read_shift(2);
        e.l += 4;
        e.l += 2;
        e.l += 2;
        e.l += 2;
        e.l += 4;
        const n = e.read_shift(1);
        e.l += n;
        e.l = r;
        return {
            fmt: a
        };
    }
};
function ih(e, t, r) {
    e.l += 4;
    const a = e.read_shift(2);
    const n = e.read_shift(2);
    const i = e.read_shift(2);
    e.l += 2;
    e.l += 2;
    e.l += 2;
    e.l += 2;
    e.l += 2;
    e.l += 2;
    e.l += 2;
    e.l += 2;
    e.l += 2;
    e.l += 6;
    t -= 36;
    const ft = [];
    ft.push((nh[a] || kr)(e, t, r));
    return {
        cmo: [
            n,
            a,
            i
        ],
        ft
    };
}
function sh(e, t, r) {
    const a = e.l;
    let n = "";
    try {
        e.l += 4;
        const i = (r.lastobj || {
            cmo: [
                0,
                0
            ]
        }).cmo[1];
        let s;
        if ([
            0,
            5,
            7,
            11,
            12,
            14
        ].indexOf(i) == -1) {
            e.l += 6;
        } else {
            s = jl(e, 6, r);
        }
        const f = e.read_shift(2);
        e.read_shift(2);
        tr(e, 2);
        const c = e.read_shift(2);
        e.l += c;
        for(let o = 1; o < e.lens.length - 1; ++o){
            if (e.l - a != e.lens[o]) {
                throw new Error("TxO: bad continue record");
            }
            const l = e[e.l];
            const u = Ht(e, e.lens[o + 1] - e.lens[o] - 1);
            n += u;
            if (n.length >= (l ? f : 2 * f)) {
                break;
            }
        }
        if (n.length !== f && n.length !== f * 2) {
            throw new Error(`cchText: ${f} != ${n.length}`);
        }
        e.l = a + t;
        return {
            t: n
        };
    } catch  {
        e.l = a + t;
        return {
            t: n
        };
    }
}
function fh(e, t) {
    const r = O0(e);
    e.l += 16;
    const a = Ql(e, t - 24);
    return [
        r,
        a
    ];
}
function ch(e) {
    const t = G(24);
    const r = decode_cell(e[0]);
    t.write_shift(2, r.r);
    t.write_shift(2, r.r);
    t.write_shift(2, r.c);
    t.write_shift(2, r.c);
    const a = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" ");
    for(let n = 0; n < 16; ++n){
        t.write_shift(1, parseInt(a[n], 16));
    }
    return bconcat([
        t,
        eu(e[1])
    ]);
}
function oh(e, t) {
    e.read_shift(2);
    const r = O0(e);
    let a = e.read_shift((t - 10) / 2, "dbcs-cont");
    a = a.replace(_r, "");
    return [
        r,
        a
    ];
}
function lh(e) {
    const Tooltip = e[1].Tooltip;
    const r = G(10 + 2 * (Tooltip.length + 1));
    r.write_shift(2, 2048);
    const a = decode_cell(e[0]);
    r.write_shift(2, a.r);
    r.write_shift(2, a.r);
    r.write_shift(2, a.c);
    r.write_shift(2, a.c);
    for(let n = 0; n < Tooltip.length; ++n){
        r.write_shift(2, Tooltip.charCodeAt(n));
    }
    r.write_shift(2, 0);
    return r;
}
function uh(e) {
    const t = [
        0,
        0
    ];
    let r;
    r = e.read_shift(2);
    t[0] = Ri[r] || r;
    r = e.read_shift(2);
    t[1] = Ri[r] || r;
    return t;
}
function hh(e) {
    if (!e) {
        e = G(4);
    }
    e.write_shift(2, 1);
    e.write_shift(2, 1);
    return e;
}
function xh(e) {
    for(var t = e.read_shift(2), r = []; t-- > 0;){
        r.push(df(e));
    }
    return r;
}
function dh(e) {
    for(var t = e.read_shift(2), r = []; t-- > 0;){
        r.push(df(e));
    }
    return r;
}
function vh(e) {
    e.l += 2;
    const t = {
        cxfs: 0,
        crc: 0
    };
    t.cxfs = e.read_shift(2);
    t.crc = e.read_shift(4);
    return t;
}
function wf(e, t, r) {
    if (!r.cellStyles) {
        return kr(e, t);
    }
    const a = r && r.biff >= 12 ? 4 : 2;
    const s_1 = e.read_shift(a);
    const e_1 = e.read_shift(a);
    const w = e.read_shift(a);
    const f = e.read_shift(a);
    const flags = e.read_shift(2);
    if (a == 2) {
        e.l += 2;
    }
    const o = {
        s: s_1,
        e: e_1,
        w,
        ixfe: f,
        flags
    };
    if (r.biff >= 5 || !r.biff) {
        o.level = flags >> 8 & 7;
    }
    return o;
}
function ph(e, t) {
    const r = G(12);
    r.write_shift(2, t);
    r.write_shift(2, t);
    r.write_shift(2, e.width * 256);
    r.write_shift(2, 0);
    let a = 0;
    if (e.hidden) {
        a |= 1;
    }
    r.write_shift(1, a);
    a = e.level || 0;
    r.write_shift(1, a);
    r.write_shift(2, 0);
    return r;
}
function mh(e, t) {
    const r = {};
    if (!(t < 32)) {
        e.l += 16;
        r.header = gr(e);
        r.footer = gr(e);
        e.l += 2;
    }
    return r;
}
function gh(e, t, r) {
    const a = {
        area: false
    };
    if (r.biff != 5) {
        e.l += t;
        return a;
    }
    const n = e.read_shift(1);
    e.l += 3;
    if (n & 16) {
        a.area = true;
    }
    return a;
}
function _h(e) {
    const t = G(2 * e);
    for(let r = 0; r < e; ++r){
        t.write_shift(2, r + 1);
    }
    return t;
}
const wh = st;
const kh = lf;
const Eh = ja;
function Th(e) {
    const t = e.read_shift(2);
    const env = e.read_shift(2);
    const len = e.read_shift(4);
    const n = {
        fmt: t,
        env,
        len,
        data: e.slice(e.l, e.l + len)
    };
    e.l += len;
    return n;
}
function Sh(e, t, r) {
    if (r.biffguess && r.biff == 5) {
        r.biff = 2;
    }
    const a = st(e);
    ++e.l;
    const n = Jt(e, t - 7, r);
    a.t = "str";
    a.val = n;
    return a;
}
function Fh(e) {
    const t = st(e);
    ++e.l;
    const r = gr(e);
    t.t = "n";
    t.val = r;
    return t;
}
function yh(e, t, r) {
    const a = G(15);
    Qa(a, e, t);
    a.write_shift(8, r, "f");
    return a;
}
function Ah(e) {
    const t = st(e);
    ++e.l;
    const r = e.read_shift(2);
    t.t = "n";
    t.val = r;
    return t;
}
function Ch(e, t, r) {
    const a = G(9);
    Qa(a, e, t);
    a.write_shift(2, r);
    return a;
}
function Dh(e) {
    const t = e.read_shift(1);
    if (t === 0) {
        e.l++;
        return "";
    }
    return e.read_shift(t, "sbcs-cont");
}
function Oh(e, t) {
    e.l += 6;
    e.l += 2;
    e.l += 1;
    e.l += 3;
    e.l += 1;
    e.l += t - 13;
}
function Ih(e, t, r) {
    const a = e.l + t;
    const n = st(e);
    const i = e.read_shift(2);
    const s = Ht(e, i, r);
    e.l = a;
    n.t = "str";
    n.val = s;
    return n;
}
const Rh = [
    2,
    3,
    48,
    49,
    131,
    139,
    140,
    245
];
const sn = (()=>{
    const e = {
        1: 437,
        2: 850,
        3: 1252,
        4: 10000,
        100: 852,
        101: 866,
        102: 865,
        103: 861,
        104: 895,
        105: 620,
        106: 737,
        107: 857,
        120: 950,
        121: 949,
        122: 936,
        123: 932,
        124: 874,
        125: 1255,
        126: 1256,
        150: 10007,
        151: 10029,
        152: 10006,
        200: 1250,
        201: 1251,
        202: 1254,
        203: 1253,
        0: 20127,
        8: 865,
        9: 437,
        10: 850,
        11: 437,
        13: 437,
        14: 850,
        15: 437,
        16: 850,
        17: 437,
        18: 850,
        19: 932,
        20: 850,
        21: 437,
        22: 850,
        23: 865,
        24: 437,
        25: 437,
        26: 850,
        27: 437,
        28: 863,
        29: 850,
        31: 852,
        34: 852,
        35: 852,
        36: 860,
        37: 850,
        38: 866,
        55: 850,
        64: 852,
        77: 936,
        78: 949,
        79: 950,
        80: 874,
        87: 1252,
        88: 1252,
        89: 1252,
        108: 863,
        134: 737,
        135: 852,
        136: 857,
        204: 1257,
        255: 16969
    };
    const t = y0({
        1: 437,
        2: 850,
        3: 1252,
        4: 10000,
        100: 852,
        101: 866,
        102: 865,
        103: 861,
        104: 895,
        105: 620,
        106: 737,
        107: 857,
        120: 950,
        121: 949,
        122: 936,
        123: 932,
        124: 874,
        125: 1255,
        126: 1256,
        150: 10007,
        151: 10029,
        152: 10006,
        200: 1250,
        201: 1251,
        202: 1254,
        203: 1253,
        0: 20127
    });
    function r(f, c) {
        let o = [];
        let l = Tt(1);
        switch(c.type){
            case "base64":
                l = Ir(br(f));
                break;
            case "binary":
                l = Ir(f);
                break;
            case "buffer":
            case "array":
                l = f;
                break;
        }
        prep_blob(l, 0);
        const u = l.read_shift(1);
        let x = !!(u & 136);
        let d = false;
        let v = false;
        switch(u){
            case 2:
                break;
            case 3:
                break;
            case 48:
                d = true;
                x = true;
                break;
            case 49:
                d = true;
                x = true;
                break;
            case 131:
                break;
            case 139:
                break;
            case 140:
                v = true;
                break;
            case 245:
                break;
            default:
                throw new Error(`DBF Unsupported Version: ${u.toString(16)}`);
        }
        let h = 0;
        let p = 521;
        if (u == 2) {
            h = l.read_shift(2);
        }
        l.l += 3;
        if (u != 2) {
            h = l.read_shift(4);
        }
        if (h > 1048576) {
            h = 1000000;
        }
        if (u != 2) {
            p = l.read_shift(2);
        }
        const w = l.read_shift(2);
        let y = c.codepage || 1252;
        if (u != 2) {
            l.l += 16;
            l.read_shift(1);
            if (l[l.l] !== 0) {
                y = e[l[l.l]];
            }
            l.l += 1;
            l.l += 2;
        }
        if (v) {
            l.l += 36;
        }
        const g = [];
        let D = {};
        for(const b = Math.min(l.length, u == 2 ? 521 : p - 10 - (d ? 264 : 0)), N = v ? 32 : 11; l.l < b && l[l.l] != 13;){
            D = {};
            D.name = De.utils.decode(y, l.slice(l.l, l.l + N)).replace(/[\u0000\r\n].*$/g, "");
            l.l += N;
            D.type = String.fromCharCode(l.read_shift(1));
            if (u != 2 && !v) {
                D.offset = l.read_shift(4);
            }
            D.len = l.read_shift(1);
            if (u == 2) {
                D.offset = l.read_shift(2);
            }
            D.dec = l.read_shift(1);
            if (D.name.length) {
                g.push(D);
            }
            if (u != 2) {
                l.l += v ? 13 : 14;
            }
            switch(D.type){
                case "B":
                    if ((!d || D.len != 8) && c.WTF) {
                        console.log(`Skipping ${D.name}:${D.type}`);
                    }
                    break;
                case "G":
                case "P":
                    if (c.WTF) {
                        console.log(`Skipping ${D.name}:${D.type}`);
                    }
                    break;
                case "+":
                case "0":
                case "@":
                case "C":
                case "D":
                case "F":
                case "I":
                case "L":
                case "M":
                case "N":
                case "O":
                case "T":
                case "Y":
                    break;
                default:
                    throw new Error(`Unknown Field Type: ${D.type}`);
            }
        }
        if (l[l.l] !== 13) {
            l.l = p - 1;
        }
        if (l.read_shift(1) !== 13) {
            throw new Error(`DBF Terminator not found ${l.l} ${l[l.l]}`);
        }
        l.l = p;
        let F = 0;
        let B = 0;
        o[0] = [];
        for(B = 0; B != g.length; ++B){
            o[0][B] = g[B].name;
        }
        while(h-- > 0){
            if (l[l.l] === 42) {
                l.l += w;
                continue;
            }
            ++l.l;
            o[++F] = [];
            B = 0;
            for(B = 0; B != g.length; ++B){
                const I = l.slice(l.l, l.l + g[B].len);
                l.l += g[B].len;
                prep_blob(I, 0);
                let z = De.utils.decode(y, I);
                switch(g[B].type){
                    case "C":
                        if (z.trim().length) {
                            o[F][B] = z.replace(/\s+$/, "");
                        }
                        break;
                    case "D":
                        if (z.length === 8) {
                            o[F][B] = new Date(+z.slice(0, 4), +z.slice(4, 6) - 1, +z.slice(6, 8));
                        } else {
                            o[F][B] = z;
                        }
                        break;
                    case "F":
                        o[F][B] = parseFloat(z.trim());
                        break;
                    case "+":
                    case "I":
                        o[F][B] = v ? I.read_shift(-4, "i") ^ 2147483648 : I.read_shift(4, "i");
                        break;
                    case "L":
                        switch(z.trim().toUpperCase()){
                            case "Y":
                            case "T":
                                o[F][B] = true;
                                break;
                            case "N":
                            case "F":
                                o[F][B] = false;
                                break;
                            case "":
                            case "?":
                                break;
                            default:
                                throw new Error(`DBF Unrecognized L:|${z}|`);
                        }
                        break;
                    case "M":
                        if (!x) {
                            throw new Error(`DBF Unexpected MEMO for type ${u.toString(16)}`);
                        }
                        o[F][B] = `##MEMO##${v ? parseInt(z.trim(), 10) : I.read_shift(4)}`;
                        break;
                    case "N":
                        z = z.replace(/\u0000/g, "").trim();
                        if (z && z != ".") {
                            o[F][B] = +z || 0;
                        }
                        break;
                    case "@":
                        o[F][B] = new Date(I.read_shift(-8, "f") - 62135683200000);
                        break;
                    case "T":
                        o[F][B] = new Date((I.read_shift(4) - 2440588) * 86400000 + I.read_shift(4));
                        break;
                    case "Y":
                        o[F][B] = I.read_shift(4, "i") / 10000 + I.read_shift(4, "i") / 10000 * 2 ** 32;
                        break;
                    case "O":
                        o[F][B] = -I.read_shift(-8, "f");
                        break;
                    case "B":
                        if (d && g[B].len == 8) {
                            o[F][B] = I.read_shift(8, "f");
                            break;
                        }
                    case "G":
                    case "P":
                        I.l += g[B].len;
                        break;
                    case "0":
                        if (g[B].name === "_NullFlags") {
                            break;
                        }
                    default:
                        throw new Error(`DBF Unsupported data type ${g[B].type}`);
                }
            }
        }
        if (u != 2 && l.l < l.length && l[l.l++] != 26) {
            throw new Error(`DBF EOF Marker missing ${l.l - 1} of ${l.length} ${l[l.l - 1].toString(16)}`);
        }
        if (c && c.sheetRows) {
            o = o.slice(0, c.sheetRows);
        }
        c.DBF = g;
        return o;
    }
    function a(f, c) {
        const o = c || {};
        if (!o.dateNF) {
            o.dateNF = "yyyymmdd";
        }
        const l = aoa_to_sheet(r(f, o), o);
        l["!cols"] = o.DBF.map((DBF)=>({
                wch: DBF.len,
                DBF
            }));
        delete o.DBF;
        return l;
    }
    function n(f, c) {
        try {
            return Ct(a(f, c), c);
        } catch (error) {
            if (c && c.WTF) {
                throw error;
            }
        }
        return {
            SheetNames: [],
            Sheets: {}
        };
    }
    const i = {
        B: 8,
        C: 250,
        L: 1,
        D: 8,
        "?": 0,
        "": 0
    };
    function s(f, c) {
        const o = c || {};
        if (+o.codepage >= 0) {
            Gr(+o.codepage);
        }
        if (o.type == "string") {
            throw new Error("Cannot write DBF to JS string");
        }
        const l = Cr();
        const [x, ...d] = T0(f, {
            header: 1,
            raw: true,
            cellDates: true
        });
        const v = f["!cols"] || [];
        let h = 0;
        let p = 0;
        let w = 0;
        let y = 1;
        for(h = 0; h < x.length; ++h){
            if (((v[h] || {}).DBF || {}).name) {
                x[h] = v[h].DBF.name;
                ++w;
                continue;
            }
            if (x[h] != null) {
                ++w;
                if (typeof x[h] === "number") {
                    x[h] = x[h].toString(10);
                }
                if (typeof x[h] !== "string") {
                    throw new Error(`DBF Invalid column name ${x[h]} |${typeof x[h]}|`);
                }
                if (x.indexOf(x[h]) !== h) {
                    for(p = 0; p < 1024; ++p){
                        if (x.indexOf(`${x[h]}_${p}`) == -1) {
                            x[h] += `_${p}`;
                            break;
                        }
                    }
                }
            }
        }
        const g = Ae(f["!ref"]);
        const D = [];
        const b = [];
        const N = [];
        for(h = 0; h <= g.e.c - g.s.c; ++h){
            let F = "";
            let B = "";
            let I = 0;
            const z = [];
            for(p = 0; p < d.length; ++p){
                if (d[p][h] != null) {
                    z.push(d[p][h]);
                }
            }
            if (z.length == 0 || x[h] == null) {
                D[h] = "?";
                continue;
            }
            for(p = 0; p < z.length; ++p){
                switch(typeof z[p]){
                    case "number":
                        B = "B";
                        break;
                    case "string":
                        B = "C";
                        break;
                    case "boolean":
                        B = "L";
                        break;
                    case "object":
                        B = z[p] instanceof Date ? "D" : "C";
                        break;
                    default:
                        B = "C";
                }
                I = Math.max(I, String(z[p]).length);
                F = F && F != B ? "C" : B;
            }
            if (I > 250) {
                I = 250;
            }
            B = ((v[h] || {}).DBF || {}).type;
            if (B == "C" && v[h].DBF.len > I) {
                I = v[h].DBF.len;
            }
            if (F == "B" && B == "N") {
                F = "N";
                N[h] = v[h].DBF.dec;
                I = v[h].DBF.len;
            }
            b[h] = F == "C" || B == "N" ? I : i[F] || 0;
            y += b[h];
            D[h] = F;
        }
        const X = l.next(32);
        X.write_shift(4, 318902576);
        X.write_shift(4, d.length);
        X.write_shift(2, 296 + 32 * w);
        X.write_shift(2, y);
        for(h = 0; h < 4; ++h){
            X.write_shift(4, 0);
        }
        X.write_shift(4, 0 | (+t[Bt] || 3) << 8);
        h = 0;
        for(p = 0; h < x.length; ++h){
            if (x[h] != null) {
                const L = l.next(32);
                const J = `${x[h].slice(-10)}           `.slice(0, 11);
                L.write_shift(1, J, "sbcs");
                L.write_shift(1, D[h] == "?" ? "C" : D[h], "sbcs");
                L.write_shift(4, p);
                L.write_shift(1, b[h] || i[D[h]] || 0);
                L.write_shift(1, N[h] || 0);
                L.write_shift(1, 2);
                L.write_shift(4, 0);
                L.write_shift(1, 0);
                L.write_shift(4, 0);
                L.write_shift(4, 0);
                p += b[h] || i[D[h]] || 0;
            }
        }
        const le = l.next(264);
        le.write_shift(4, 13);
        for(h = 0; h < 65; ++h){
            le.write_shift(4, 0);
        }
        for(h = 0; h < d.length; ++h){
            const ie = l.next(y);
            ie.write_shift(1, 0);
            for(p = 0; p < x.length; ++p){
                if (x[p] != null) {
                    switch(D[p]){
                        case "L":
                            ie.write_shift(1, d[h][p] == null ? 63 : d[h][p] ? 84 : 70);
                            break;
                        case "B":
                            ie.write_shift(8, d[h][p] || 0, "f");
                            break;
                        case "N":
                            let he = "0";
                            if (typeof d[h][p] === "number") {
                                he = d[h][p].toFixed(N[p] || 0);
                            }
                            for(w = 0; w < b[p] - he.length; ++w){
                                ie.write_shift(1, 32);
                            }
                            ie.write_shift(1, he, "sbcs");
                            break;
                        case "D":
                            if (d[h][p]) {
                                ie.write_shift(4, `0000${d[h][p].getFullYear()}`.slice(-4), "sbcs");
                                ie.write_shift(2, `00${d[h][p].getMonth() + 1}`.slice(-2), "sbcs");
                                ie.write_shift(2, `00${d[h][p].getDate()}`.slice(-2), "sbcs");
                            } else {
                                ie.write_shift(8, "00000000", "sbcs");
                            }
                            break;
                        case "C":
                            const ce = String(d[h][p] ?? "").slice(0, b[p]);
                            ie.write_shift(1, ce, "sbcs");
                            for(w = 0; w < b[p] - ce.length; ++w){
                                ie.write_shift(1, 32);
                            }
                            break;
                    }
                }
            }
        }
        l.next(1).write_shift(1, 26);
        return l.end();
    }
    return {
        to_workbook: n,
        to_sheet: a,
        from_sheet: s
    };
})();
const kf = (()=>{
    const e = {
        AA: "À",
        BA: "Á",
        CA: "Â",
        DA: 195,
        HA: "Ä",
        JA: 197,
        AE: "È",
        BE: "É",
        CE: "Ê",
        HE: "Ë",
        AI: "Ì",
        BI: "Í",
        CI: "Î",
        HI: "Ï",
        AO: "Ò",
        BO: "Ó",
        CO: "Ô",
        DO: 213,
        HO: "Ö",
        AU: "Ù",
        BU: "Ú",
        CU: "Û",
        HU: "Ü",
        Aa: "à",
        Ba: "á",
        Ca: "â",
        Da: 227,
        Ha: "ä",
        Ja: 229,
        Ae: "è",
        Be: "é",
        Ce: "ê",
        He: "ë",
        Ai: "ì",
        Bi: "í",
        Ci: "î",
        Hi: "ï",
        Ao: "ò",
        Bo: "ó",
        Co: "ô",
        Do: 245,
        Ho: "ö",
        Au: "ù",
        Bu: "ú",
        Cu: "û",
        Hu: "ü",
        KC: "Ç",
        Kc: "ç",
        q: "æ",
        z: "œ",
        a: "Æ",
        j: "Œ",
        DN: 209,
        Dn: 241,
        Hy: 255,
        S: 169,
        c: 170,
        R: 174,
        "B ": 180,
        0: 176,
        1: 177,
        2: 178,
        3: 179,
        5: 181,
        6: 182,
        7: 183,
        Q: 185,
        k: 186,
        b: 208,
        i: 216,
        l: 222,
        s: 240,
        y: 248,
        "!": 161,
        '"': 162,
        "#": 163,
        "(": 164,
        "%": 165,
        "'": 167,
        "H ": 168,
        "+": 171,
        ";": 187,
        "<": 188,
        "=": 189,
        ">": 190,
        "?": 191,
        "{": 223
    };
    const t = new RegExp(`N(${je(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1")}|\\|)`, "gm");
    const r = (x, d)=>{
        const v = e[d];
        if (typeof v === "number") {
            return Z0(v);
        }
        return v;
    };
    const a = (x, d, v)=>{
        const h = d.charCodeAt(0) - 32 << 4 | v.charCodeAt(0) - 48;
        if (h == 59) {
            return x;
        }
        return Z0(h);
    };
    e["|"] = 254;
    function n(x, d) {
        switch(d.type){
            case "base64":
                return i(br(x), d);
            case "binary":
                return i(x, d);
            case "buffer":
                return i(Te && Buffer.isBuffer(x) ? x.toString("binary") : At(x), d);
            case "array":
                return i(Ut(x), d);
        }
        throw new Error(`Unrecognized type ${d.type}`);
    }
    function i(x, d) {
        const v = x.split(/[\n\r]+/);
        let h = -1;
        let p = -1;
        let w = 0;
        let y = 0;
        let g = [];
        const D = [];
        let b = null;
        const N = {};
        const F = [];
        const B = [];
        let I = [];
        let wch = 0;
        let X;
        for(+d.codepage >= 0 && Gr(+d.codepage); w !== v.length; ++w){
            wch = 0;
            const L = v[w].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, a).replace(t, r);
            const J = L.replace(/;;/g, "\0").split(";").map((R)=>R.replace(/\u0000/g, ";"));
            const le = J[0];
            let ie;
            if (L.length > 0) {
                switch(le){
                    case "ID":
                        break;
                    case "E":
                        break;
                    case "B":
                        break;
                    case "O":
                        break;
                    case "W":
                        break;
                    case "P":
                        if (J[1].charAt(0) == "P") {
                            D.push(L.slice(3).replace(/;;/g, ";"));
                        }
                        break;
                    case "C":
                        let he = false;
                        let ce = false;
                        let Pe = false;
                        let V = false;
                        let ve = -1;
                        let ge = -1;
                        for(y = 1; y < J.length; ++y){
                            switch(J[y].charAt(0)){
                                case "A":
                                    break;
                                case "X":
                                    p = parseInt(J[y].slice(1)) - 1;
                                    ce = true;
                                    break;
                                case "Y":
                                    h = parseInt(J[y].slice(1)) - 1;
                                    if (!ce) {
                                        p = 0;
                                    }
                                    for(X = g.length; X <= h; ++X){
                                        g[X] = [];
                                    }
                                    break;
                                case "K":
                                    ie = J[y].slice(1);
                                    if (ie.charAt(0) === '"') {
                                        ie = ie.slice(1, ie.length - 1);
                                    } else if (ie === "TRUE") {
                                        ie = true;
                                    } else if (ie === "FALSE") {
                                        ie = false;
                                    } else if (isNaN(jr(ie))) {
                                        if (!isNaN(fa(ie).getDate())) {
                                            ie = Ve(ie);
                                        }
                                    } else {
                                        ie = jr(ie);
                                        if (b !== null && is_date(b)) {
                                            ie = C0(ie);
                                        }
                                    }
                                    if (typeof De !== "undefined" && typeof ie === "string" && (d || {}).type != "string" && (d || {}).codepage) {
                                        ie = De.utils.decode(d.codepage, ie);
                                    }
                                    he = true;
                                    break;
                                case "E":
                                    V = true;
                                    const C = ia(J[y].slice(1), {
                                        r: h,
                                        c: p
                                    });
                                    g[h][p] = [
                                        g[h][p],
                                        C
                                    ];
                                    break;
                                case "S":
                                    Pe = true;
                                    g[h][p] = [
                                        g[h][p],
                                        "S5S"
                                    ];
                                    break;
                                case "G":
                                    break;
                                case "R":
                                    ve = parseInt(J[y].slice(1)) - 1;
                                    break;
                                case "C":
                                    ge = parseInt(J[y].slice(1)) - 1;
                                    break;
                                default:
                                    if (d && d.WTF) {
                                        throw new Error(`SYLK bad record ${L}`);
                                    }
                            }
                        }
                        if (he) {
                            if (g[h][p] && g[h][p].length == 2) {
                                g[h][p][0] = ie;
                            } else {
                                g[h][p] = ie;
                            }
                            b = null;
                        }
                        if (Pe) {
                            if (V) {
                                throw new Error("SYLK shared formula cannot have own formula");
                            }
                            const P = ve > -1 && g[ve][ge];
                            if (!P || !P[1]) {
                                throw new Error("SYLK shared formula cannot find base");
                            }
                            g[h][p][1] = Uf(P[1], {
                                r: h - ve,
                                c: p - ge
                            });
                        }
                        break;
                    case "F":
                        let O = 0;
                        for(y = 1; y < J.length; ++y){
                            switch(J[y].charAt(0)){
                                case "X":
                                    p = parseInt(J[y].slice(1)) - 1;
                                    ++O;
                                    break;
                                case "Y":
                                    h = parseInt(J[y].slice(1)) - 1;
                                    for(X = g.length; X <= h; ++X){
                                        g[X] = [];
                                    }
                                    break;
                                case "M":
                                    wch = parseInt(J[y].slice(1)) / 20;
                                    break;
                                case "F":
                                    break;
                                case "G":
                                    break;
                                case "P":
                                    b = D[parseInt(J[y].slice(1))];
                                    break;
                                case "S":
                                    break;
                                case "D":
                                    break;
                                case "N":
                                    break;
                                case "W":
                                    I = J[y].slice(1).split(" ");
                                    for(X = parseInt(I[0], 10); X <= parseInt(I[1], 10); ++X){
                                        wch = parseInt(I[2], 10);
                                        B[X - 1] = wch === 0 ? {
                                            hidden: true
                                        } : {
                                            wch
                                        };
                                        St(B[X - 1]);
                                    }
                                    break;
                                case "C":
                                    p = parseInt(J[y].slice(1)) - 1;
                                    if (!B[p]) {
                                        B[p] = {};
                                    }
                                    break;
                                case "R":
                                    h = parseInt(J[y].slice(1)) - 1;
                                    if (!F[h]) {
                                        F[h] = {};
                                    }
                                    if (wch > 0) {
                                        F[h].hpt = wch;
                                        F[h].hpx = oa(wch);
                                    } else if (wch === 0) {
                                        F[h].hidden = true;
                                    }
                                    break;
                                default:
                                    if (d && d.WTF) {
                                        throw new Error(`SYLK bad record ${L}`);
                                    }
                            }
                        }
                        if (O < 1) {
                            b = null;
                        }
                        break;
                    default:
                        if (d && d.WTF) {
                            throw new Error(`SYLK bad record ${L}`);
                        }
                }
            }
        }
        if (F.length > 0) {
            N["!rows"] = F;
        }
        if (B.length > 0) {
            N["!cols"] = B;
        }
        if (d && d.sheetRows) {
            g = g.slice(0, d.sheetRows);
        }
        return [
            g,
            N
        ];
    }
    function s(x, d) {
        const v = n(x, d);
        const h = v[0];
        const p = v[1];
        const w = aoa_to_sheet(h, d);
        je(p).forEach((y)=>{
            w[y] = p[y];
        });
        return w;
    }
    function f(x, d) {
        return Ct(s(x, d), d);
    }
    function c(x, d, v, h) {
        let p = `C;Y${v + 1};X${h + 1};K`;
        switch(x.t){
            case "n":
                p += x.v || 0;
                if (x.f && !x.F) {
                    p += `;E${Vn(x.f, {
                        r: v,
                        c: h
                    })}`;
                }
                break;
            case "b":
                p += x.v ? "TRUE" : "FALSE";
                break;
            case "e":
                p += x.w || x.v;
                break;
            case "d":
                p += `"${x.w || x.v}"`;
                break;
            case "s":
                p += `"${x.v.replace(/"/g, "").replace(/;/g, ";;")}"`;
                break;
        }
        return p;
    }
    function o(x, d) {
        d.forEach((v, h)=>{
            let p = `F;W${h + 1} ${h + 1} `;
            if (v.hidden) {
                p += "0";
            } else {
                if (typeof v.width === "number" && !v.wpx) {
                    v.wpx = Ua(v.width);
                }
                if (typeof v.wpx === "number" && !v.wch) {
                    v.wch = Wa(v.wpx);
                }
                if (typeof v.wch === "number") {
                    p += Math.round(v.wch);
                }
            }
            if (p.charAt(p.length - 1) != " ") {
                x.push(p);
            }
        });
    }
    function l(x, d) {
        d.forEach((v, h)=>{
            let p = "F;";
            if (v.hidden) {
                p += "M0;";
            } else if (v.hpt) {
                p += `M${20 * v.hpt};`;
            } else if (v.hpx) {
                p += `M${20 * Ha(v.hpx)};`;
            }
            if (p.length > 2) {
                x.push(`${p}R${h + 1}`);
            }
        });
    }
    function u(x, d) {
        const v = [
            "ID;PWXL;N;E"
        ];
        const h = [];
        const p = Ae(x["!ref"]);
        let w;
        const y = Array.isArray(x);
        const g = `\r
`;
        v.push("P;PGeneral");
        v.push("F;P0;DG0G8;M255");
        if (x["!cols"]) {
            o(v, x["!cols"]);
        }
        if (x["!rows"]) {
            l(v, x["!rows"]);
        }
        v.push(`B;Y${p.e.r - p.s.r + 1};X${p.e.c - p.s.c + 1};D${[
            p.s.c,
            p.s.r,
            p.e.c,
            p.e.r
        ].join(" ")}`);
        for(let D = p.s.r; D <= p.e.r; ++D){
            for(let b = p.s.c; b <= p.e.c; ++b){
                const N = encode_cell({
                    r: D,
                    c: b
                });
                w = y ? (x[D] || [])[b] : x[N];
                if (!(!w || w.v == null && (!w.f || w.F))) {
                    h.push(c(w, x, D, b));
                }
            }
        }
        return `${v.join(g) + g + h.join(g) + g}E${g}`;
    }
    return {
        to_workbook: f,
        to_sheet: s,
        from_sheet: u
    };
})();
const Ef = (()=>{
    function e(i, s) {
        switch(s.type){
            case "base64":
                return t(br(i), s);
            case "binary":
                return t(i, s);
            case "buffer":
                return t(Te && Buffer.isBuffer(i) ? i.toString("binary") : At(i), s);
            case "array":
                return t(Ut(i), s);
        }
        throw new Error(`Unrecognized type ${s.type}`);
    }
    function t(i, s) {
        for(var f = i.split(`
`), c = -1, o = -1, l = 0, u = []; l !== f.length; ++l){
            if (f[l].trim() === "BOT") {
                u[++c] = [];
                o = 0;
                continue;
            }
            if (!(c < 0)) {
                const x = f[l].trim().split(",");
                const d = x[0];
                const v = x[1];
                ++l;
                for(var h = f[l] || ""; (h.match(/["]/g) || []).length & 1 && l < f.length - 1;){
                    h += `
` + f[++l];
                }
                h = h.trim();
                switch(+d){
                    case -1:
                        if (h === "BOT") {
                            u[++c] = [];
                            o = 0;
                            continue;
                        } else if (h !== "EOD") {
                            throw new Error(`Unrecognized DIF special command ${h}`);
                        }
                        break;
                    case 0:
                        if (h === "TRUE") {
                            u[c][o] = true;
                        } else if (h === "FALSE") {
                            u[c][o] = false;
                        } else if (isNaN(jr(v))) {
                            if (isNaN(fa(v).getDate())) {
                                u[c][o] = v;
                            } else {
                                u[c][o] = Ve(v);
                            }
                        } else {
                            u[c][o] = jr(v);
                        }
                        ++o;
                        break;
                    case 1:
                        h = h.slice(1, h.length - 1);
                        h = h.replace(/""/g, '"');
                        if (h && h.match(/^=".*"$/)) {
                            h = h.slice(2, -1);
                        }
                        u[c][o++] = h !== "" ? h : null;
                        break;
                }
                if (h === "EOD") {
                    break;
                }
            }
        }
        if (s && s.sheetRows) {
            u = u.slice(0, s.sheetRows);
        }
        return u;
    }
    function r(i, s) {
        return aoa_to_sheet(e(i, s), s);
    }
    function a(i, s) {
        return Ct(r(i, s), s);
    }
    const n = (()=>{
        const i = (c, o, l, u, x)=>{
            c.push(o);
            c.push(`${l},${u}`);
            c.push(`"${x.replace(/"/g, '""')}"`);
        };
        const s = (c, o, l, u)=>{
            c.push(`${o},${l}`);
            c.push(o == 1 ? `"${u.replace(/"/g, '""')}"` : u);
        };
        return (c)=>{
            const o = [];
            const l = Ae(c["!ref"]);
            let u;
            const x = Array.isArray(c);
            i(o, "TABLE", 0, 1, "sheetjs");
            i(o, "VECTORS", 0, l.e.r - l.s.r + 1, "");
            i(o, "TUPLES", 0, l.e.c - l.s.c + 1, "");
            i(o, "DATA", 0, 0, "");
            for(let d = l.s.r; d <= l.e.r; ++d){
                s(o, -1, 0, "BOT");
                for(let v = l.s.c; v <= l.e.c; ++v){
                    const h = encode_cell({
                        r: d,
                        c: v
                    });
                    u = x ? (c[d] || [])[v] : c[h];
                    if (!u) {
                        s(o, 1, 0, "");
                        continue;
                    }
                    switch(u.t){
                        case "n":
                            let p = u.w;
                            if (!p && u.v != null) {
                                p = u.v;
                            }
                            if (p == null) {
                                if (u.f && !u.F) {
                                    s(o, 1, 0, `=${u.f}`);
                                } else {
                                    s(o, 1, 0, "");
                                }
                            } else {
                                s(o, 0, p, "V");
                            }
                            break;
                        case "b":
                            s(o, 0, u.v ? 1 : 0, u.v ? "TRUE" : "FALSE");
                            break;
                        case "s":
                            s(o, 1, 0, isNaN(u.v) ? u.v : `="${u.v}"`);
                            break;
                        case "d":
                            if (!u.w) {
                                u.w = format(u.z || _table[14], ir(Ve(u.v)));
                            }
                            s(o, 0, u.w, "V");
                            break;
                        default:
                            s(o, 1, 0, "");
                    }
                }
            }
            s(o, -1, 0, "EOD");
            const w = `\r
`;
            const y = o.join(w);
            return y;
        };
    })();
    return {
        to_workbook: a,
        to_sheet: r,
        from_sheet: n
    };
})();
const Tf = (()=>{
    function e(u) {
        return u.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
    }
    function t(u) {
        return u.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
    }
    function r(u, x) {
        for(var d = u.split(`
`), v = -1, h = -1, p = 0, w = []; p !== d.length; ++p){
            const y = d[p].trim().split(":");
            if (y[0] === "cell") {
                const g = decode_cell(y[1]);
                if (w.length <= g.r) {
                    for(v = w.length; v <= g.r; ++v){
                        if (!w[v]) {
                            w[v] = [];
                        }
                    }
                }
                v = g.r;
                h = g.c;
                switch(y[2]){
                    case "t":
                        w[v][h] = e(y[3]);
                        break;
                    case "v":
                        w[v][h] = +y[3];
                        break;
                    case "vtf":
                        var D = y[y.length - 1];
                    case "vtc":
                        if (y[3] === "nl") {
                            w[v][h] = !!+y[4];
                        } else {
                            w[v][h] = +y[4];
                        }
                        if (y[2] == "vtf") {
                            w[v][h] = [
                                w[v][h],
                                D
                            ];
                        }
                }
            }
        }
        if (x && x.sheetRows) {
            w = w.slice(0, x.sheetRows);
        }
        return w;
    }
    function a(u, x) {
        return aoa_to_sheet(r(u, x), x);
    }
    function n(u, x) {
        return Ct(a(u, x), x);
    }
    const i = [
        "socialcalc:version:1.5",
        "MIME-Version: 1.0",
        "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"
    ].join(`
`);
    const s = [
        "--SocialCalcSpreadsheetControlSave",
        "Content-type: text/plain; charset=UTF-8"
    ].join(`
`) + `
`;
    const f = [
        "# SocialCalc Spreadsheet Control Save",
        "part:sheet"
    ].join(`
`);
    const c = "--SocialCalcSpreadsheetControlSave--";
    function o(u) {
        if (!u || !u["!ref"]) {
            return "";
        }
        const x = [];
        let d = [];
        let v;
        let h = "";
        for(var p = decode_range(u["!ref"]), w = Array.isArray(u), y = p.s.r; y <= p.e.r; ++y){
            for(let g = p.s.c; g <= p.e.c; ++g){
                h = encode_cell({
                    r: y,
                    c: g
                });
                v = w ? (u[y] || [])[g] : u[h];
                if (!(!v || v.v == null || v.t === "z")) {
                    d = [
                        "cell",
                        h,
                        "t"
                    ];
                    switch(v.t){
                        case "s":
                        case "str":
                            d.push(t(v.v));
                            break;
                        case "n":
                            if (v.f) {
                                d[2] = "vtf";
                                d[3] = "n";
                                d[4] = v.v;
                                d[5] = t(v.f);
                            } else {
                                d[2] = "v";
                                d[3] = v.v;
                            }
                            break;
                        case "b":
                            d[2] = `vt${v.f ? "f" : "c"}`;
                            d[3] = "nl";
                            d[4] = v.v ? "1" : "0";
                            d[5] = t(v.f || (v.v ? "TRUE" : "FALSE"));
                            break;
                        case "d":
                            const D = ir(Ve(v.v));
                            d[2] = "vtc";
                            d[3] = "nd";
                            d[4] = `${D}`;
                            d[5] = v.w || format(v.z || _table[14], D);
                            break;
                        case "e":
                            continue;
                    }
                    x.push(d.join(":"));
                }
            }
        }
        x.push(`sheet:c:${p.e.c - p.s.c + 1}:r:${p.e.r - p.s.r + 1}:tvf:1`);
        x.push("valueformat:1:text-wiki");
        return x.join(`
`);
    }
    function l(u) {
        return [
            i,
            s,
            f,
            s,
            o(u),
            c
        ].join(`
`);
    }
    return {
        to_workbook: n,
        to_sheet: a,
        from_sheet: l
    };
})();
const ca = (()=>{
    function e(l, u, x, d, v) {
        if (v.raw) {
            u[x][d] = l;
        } else {
            l === "" || (l === "TRUE" ? u[x][d] = true : l === "FALSE" ? u[x][d] = false : isNaN(jr(l)) ? isNaN(fa(l).getDate()) ? u[x][d] = l : u[x][d] = Ve(l) : u[x][d] = jr(l));
        }
    }
    function t(l, u) {
        const x = u || {};
        let d = [];
        if (!l || l.length === 0) {
            return d;
        }
        for(var v = l.split(/[\r\n]/), h = v.length - 1; h >= 0 && v[h].length === 0;){
            --h;
        }
        let p = 10;
        let w = 0;
        for(var y = 0; y <= h; ++y){
            w = v[y].indexOf(" ");
            if (w == -1) {
                w = v[y].length;
            } else {
                w++;
            }
            p = Math.max(p, w);
        }
        for(y = 0; y <= h; ++y){
            d[y] = [];
            let g = 0;
            e(v[y].slice(0, p).trim(), d, y, g, x);
            for(g = 1; g <= (v[y].length - p) / 10 + 1; ++g){
                e(v[y].slice(p + (g - 1) * 10, p + g * 10).trim(), d, y, g, x);
            }
        }
        if (x.sheetRows) {
            d = d.slice(0, x.sheetRows);
        }
        return d;
    }
    const r = {
        44: ",",
        9: "	",
        59: ";",
        124: "|"
    };
    const a = {
        44: 3,
        9: 2,
        59: 1,
        124: 0
    };
    function n(l) {
        let u = {};
        let x = false;
        for(var d = 0, v = 0; d < l.length; ++d){
            if ((v = l.charCodeAt(d)) == 34) {
                x = !x;
            } else if (!x && v in r) {
                u[v] = (u[v] || 0) + 1;
            }
        }
        v = [];
        for(d in u){
            if (Object.prototype.hasOwnProperty.call(u, d)) {
                v.push([
                    u[d],
                    d
                ]);
            }
        }
        if (!v.length) {
            u = a;
            for(d in u){
                if (Object.prototype.hasOwnProperty.call(u, d)) {
                    v.push([
                        u[d],
                        d
                    ]);
                }
            }
        }
        v.sort((h, p)=>h[0] - p[0] || a[h[1]] - a[p[1]]);
        return r[v.pop()[1]] || 44;
    }
    function i(l, u) {
        const x = u || {};
        let d = "";
        const v = x.dense ? [] : {};
        const h = {
            s: {
                c: 0,
                r: 0
            },
            e: {
                c: 0,
                r: 0
            }
        };
        l.slice(0, 4) == "sep=" ? l.charCodeAt(5) == 13 && l.charCodeAt(6) == 10 ? (d = l.charAt(4), l = l.slice(7)) : l.charCodeAt(5) == 13 || l.charCodeAt(5) == 10 ? (d = l.charAt(4), l = l.slice(6)) : d = n(l.slice(0, 1024)) : x && x.FS ? d = x.FS : d = n(l.slice(0, 1024));
        let p = 0;
        let w = 0;
        let y = 0;
        let g = 0;
        let D = 0;
        const b = d.charCodeAt(0);
        let N = false;
        let F = 0;
        let B = l.charCodeAt(0);
        l = l.replace(/\r\n/mg, `
`);
        const I = x.dateNF != null ? go(x.dateNF) : null;
        function z() {
            let X = l.slice(g, D);
            const L = {};
            if (X.charAt(0) == '"' && X.charAt(X.length - 1) == '"') {
                X = X.slice(1, -1).replace(/""/g, '"');
            }
            if (X.length === 0) {
                L.t = "z";
            } else if (x.raw) {
                L.t = "s";
                L.v = X;
            } else if (X.trim().length === 0) {
                L.t = "s";
                L.v = X;
            } else if (X.charCodeAt(0) == 61) {
                if (X.charCodeAt(1) == 34 && X.charCodeAt(X.length - 1) == 34) {
                    L.t = "s";
                    L.v = X.slice(2, -1).replace(/""/g, '"');
                } else if (Kx(X)) {
                    L.t = "n";
                    L.f = X.slice(1);
                } else {
                    L.t = "s";
                    L.v = X;
                }
            } else if (X == "TRUE") {
                L.t = "b";
                L.v = true;
            } else if (X == "FALSE") {
                L.t = "b";
                L.v = false;
            } else if (!isNaN(y = jr(X))) {
                L.t = "n";
                if (x.cellText !== false) {
                    L.w = X;
                }
                L.v = y;
            } else if (!isNaN(fa(X).getDate()) || I && X.match(I)) {
                L.z = x.dateNF || _table[14];
                let J = 0;
                if (I && X.match(I)) {
                    X = _o(X, x.dateNF, X.match(I) || []);
                    J = 1;
                }
                if (x.cellDates) {
                    L.t = "d";
                    L.v = Ve(X, J);
                } else {
                    L.t = "n";
                    L.v = ir(Ve(X, J));
                }
                if (x.cellText !== false) {
                    L.w = format(L.z, L.v instanceof Date ? ir(L.v) : L.v);
                }
                x.cellNF || delete L.z;
            } else {
                L.t = "s";
                L.v = X;
            }
            L.t == "z" || (x.dense ? (v[p] || (v[p] = []), v[p][w] = L) : v[encode_cell({
                c: w,
                r: p
            })] = L);
            g = D + 1;
            B = l.charCodeAt(g);
            if (h.e.c < w) {
                h.e.c = w;
            }
            if (h.e.r < p) {
                h.e.r = p;
            }
            if (F == b) {
                ++w;
            } else {
                w = 0;
                ++p;
                if (x.sheetRows && x.sheetRows <= p) {
                    return true;
                }
            }
        }
        e: for(; D < l.length; ++D){
            switch(F = l.charCodeAt(D)){
                case 34:
                    if (B === 34) {
                        N = !N;
                    }
                    break;
                case b:
                case 10:
                case 13:
                    if (!N && z()) {
                        break e;
                    }
                    break;
            }
        }
        if (D - g > 0) {
            z();
        }
        v["!ref"] = encode_range(h);
        return v;
    }
    function s(l, u) {
        if (!(u && u.PRN) || u.FS || l.slice(0, 4) == "sep=" || l.indexOf("	") >= 0 || l.indexOf(",") >= 0 || l.indexOf(";") >= 0) {
            return i(l, u);
        }
        return aoa_to_sheet(t(l, u), u);
    }
    function f(l, u) {
        let x = "";
        const d = u.type == "string" ? [
            0,
            0,
            0,
            0
        ] : Jn(l, u);
        switch(u.type){
            case "base64":
                x = br(l);
                break;
            case "binary":
                x = l;
                break;
            case "buffer":
                if (u.codepage == 65001) {
                    x = l.toString("utf8");
                } else if (u.codepage && typeof De !== "undefined") {
                    x = De.utils.decode(u.codepage, l);
                } else {
                    x = Te && Buffer.isBuffer(l) ? l.toString("binary") : At(l);
                }
                break;
            case "array":
                x = Ut(l);
                break;
            case "string":
                x = l;
                break;
            default:
                throw new Error(`Unrecognized type ${u.type}`);
        }
        if (d[0] == 239 && d[1] == 187 && d[2] == 191) {
            x = Le(x.slice(3));
        } else if (u.type != "string" && u.type != "buffer" && u.codepage == 65001) {
            x = Le(x);
        } else if (u.type == "binary" && typeof De !== "undefined" && u.codepage) {
            x = De.utils.decode(u.codepage, De.utils.encode(28591, x));
        }
        if (x.slice(0, 19) == "socialcalc:version:") {
            return Tf.to_sheet(u.type == "string" ? x : Le(x), u);
        }
        return s(x, u);
    }
    function c(l, u) {
        return Ct(f(l, u), u);
    }
    function o(l) {
        const u = [];
        let d;
        for(let x = Ae(l["!ref"]), v = Array.isArray(l), h = x.s.r; h <= x.e.r; ++h){
            const p = [];
            for(let w = x.s.c; w <= x.e.c; ++w){
                const y = encode_cell({
                    r: h,
                    c: w
                });
                d = v ? (l[h] || [])[w] : l[y];
                if (!d || d.v == null) {
                    p.push("          ");
                    continue;
                }
                for(var g = (d.w || (format_cell(d), d.w) || "").slice(0, 10); g.length < 10;){
                    g += " ";
                }
                p.push(g + (w === 0 ? " " : ""));
            }
            u.push(p.join(""));
        }
        return u.join(`
`);
    }
    return {
        to_workbook: c,
        to_sheet: f,
        from_sheet: o
    };
})();
function Nh(e, t) {
    const r = t || {};
    const a = !!r.WTF;
    r.WTF = true;
    try {
        const n = kf.to_workbook(e, r);
        r.WTF = a;
        return n;
    } catch (error) {
        r.WTF = a;
        if (!error.message.match(/SYLK bad record ID/) && a) {
            throw error;
        }
        return ca.to_workbook(e, t);
    }
}
const Pt = (()=>{
    function e(C, P, O) {
        if (C) {
            prep_blob(C, C.l || 0);
            const R = O.Enum || ve;
            while(C.l < C.length){
                const Y = C.read_shift(2);
                const re = R[Y] || R[65535];
                const te = C.read_shift(2);
                const Q = C.l + te;
                const Z = re.f && re.f(C, te, O);
                C.l = Q;
                if (P(Z, re, Y)) {
                    return;
                }
            }
        }
    }
    function t(C, P) {
        switch(P.type){
            case "base64":
                return r(Ir(br(C)), P);
            case "binary":
                return r(Ir(C), P);
            case "buffer":
            case "array":
                return r(C, P);
        }
        throw `Unsupported type ${P.type}`;
    }
    function r(C, P) {
        if (!C) {
            return C;
        }
        const O = P || {};
        let R = O.dense ? [] : {};
        let Y = "Sheet1";
        let re = "";
        let te = 0;
        const Q = {};
        const Z = [];
        const Ee = [];
        let A = {
            s: {
                r: 0,
                c: 0
            },
            e: {
                r: 0,
                c: 0
            }
        };
        const Ue = O.sheetRows || 0;
        if (C[2] == 0 && (C[3] == 8 || C[3] == 9) && C.length >= 16 && C[14] == 5 && C[15] === 108) {
            throw new Error("Unsupported Works 3 for Mac file");
        }
        if (C[2] == 2) {
            O.Enum = ve;
            e(C, (fe, Je, Lr)=>{
                switch(Lr){
                    case 0:
                        O.vers = fe;
                        if (fe >= 4096) {
                            O.qpro = true;
                        }
                        break;
                    case 6:
                        A = fe;
                        break;
                    case 204:
                        if (fe) {
                            re = fe;
                        }
                        break;
                    case 222:
                        re = fe;
                        break;
                    case 15:
                    case 51:
                        if (!O.qpro) {
                            fe[1].v = fe[1].v.slice(1);
                        }
                    case 13:
                    case 14:
                    case 16:
                        if (Lr == 14 && (fe[2] & 112) == 112 && (fe[2] & 15) > 1 && (fe[2] & 15) < 15) {
                            fe[1].z = O.dateNF || _table[14];
                            if (O.cellDates) {
                                fe[1].t = "d";
                                fe[1].v = C0(fe[1].v);
                            }
                        }
                        if (O.qpro && fe[3] > te) {
                            R["!ref"] = encode_range(A);
                            Q[Y] = R;
                            Z.push(Y);
                            R = O.dense ? [] : {};
                            A = {
                                s: {
                                    r: 0,
                                    c: 0
                                },
                                e: {
                                    r: 0,
                                    c: 0
                                }
                            };
                            te = fe[3];
                            Y = re || `Sheet${te + 1}`;
                            re = "";
                        }
                        const Zr = O.dense ? (R[fe[0].r] || [])[fe[0].c] : R[encode_cell(fe[0])];
                        if (Zr) {
                            Zr.t = fe[1].t;
                            Zr.v = fe[1].v;
                            if (fe[1].z != null) {
                                Zr.z = fe[1].z;
                            }
                            if (fe[1].f != null) {
                                Zr.f = fe[1].f;
                            }
                            break;
                        }
                        if (O.dense) {
                            if (!R[fe[0].r]) {
                                R[fe[0].r] = [];
                            }
                            R[fe[0].r][fe[0].c] = fe[1];
                        } else {
                            R[encode_cell(fe[0])] = fe[1];
                        }
                        break;
                }
            }, O);
        } else if (C[2] == 26 || C[2] == 14) {
            O.Enum = ge;
            if (C[2] == 14) {
                O.qpro = true;
                C.l = 0;
            }
            e(C, (fe, Je, Lr)=>{
                switch(Lr){
                    case 204:
                        Y = fe;
                        break;
                    case 22:
                        fe[1].v = fe[1].v.slice(1);
                    case 23:
                    case 24:
                    case 25:
                    case 37:
                    case 39:
                    case 40:
                        if (fe[3] > te) {
                            R["!ref"] = encode_range(A);
                            Q[Y] = R;
                            Z.push(Y);
                            R = O.dense ? [] : {};
                            A = {
                                s: {
                                    r: 0,
                                    c: 0
                                },
                                e: {
                                    r: 0,
                                    c: 0
                                }
                            };
                            te = fe[3];
                            Y = `Sheet${te + 1}`;
                        }
                        if (Ue > 0 && fe[0].r >= Ue) {
                            break;
                        }
                        if (O.dense) {
                            if (!R[fe[0].r]) {
                                R[fe[0].r] = [];
                            }
                            R[fe[0].r][fe[0].c] = fe[1];
                        } else {
                            R[encode_cell(fe[0])] = fe[1];
                        }
                        if (A.e.c < fe[0].c) {
                            A.e.c = fe[0].c;
                        }
                        if (A.e.r < fe[0].r) {
                            A.e.r = fe[0].r;
                        }
                        break;
                    case 27:
                        if (fe[14000]) {
                            Ee[fe[14000][0]] = fe[14000][1];
                        }
                        break;
                    case 1537:
                        Ee[fe[0]] = fe[1];
                        if (fe[0] == te) {
                            Y = fe[1];
                        }
                        break;
                }
            }, O);
        } else {
            throw new Error(`Unrecognized LOTUS BOF ${C[2]}`);
        }
        R["!ref"] = encode_range(A);
        Q[re || Y] = R;
        Z.push(re || Y);
        if (!Ee.length) {
            return {
                SheetNames: Z,
                Sheets: Q
            };
        }
        const Ce = {};
        const Be = [];
        for(let ye = 0; ye < Ee.length; ++ye){
            if (Q[Z[ye]]) {
                Be.push(Ee[ye] || Z[ye]);
                Ce[Ee[ye]] = Q[Ee[ye]] || Q[Z[ye]];
            } else {
                Be.push(Ee[ye]);
                Ce[Ee[ye]] = {
                    "!ref": "A1"
                };
            }
        }
        return {
            SheetNames: Be,
            Sheets: Ce
        };
    }
    function sheet_to_wk1(C, P) {
        const O = P || {};
        if (+O.codepage >= 0) {
            Gr(+O.codepage);
        }
        if (O.type == "string") {
            throw new Error("Cannot write WK1 to JS string");
        }
        const R = Cr();
        const Y = Ae(C["!ref"]);
        const re = Array.isArray(C);
        const te = [];
        ne(R, 0, i(1030));
        ne(R, 6, c(Y));
        for(let Q = Math.min(Y.e.r, 8191), Z = Y.s.r; Z <= Q; ++Z){
            const Ee = encode_row(Z);
            for(let A = Y.s.c; A <= Y.e.c; ++A){
                if (Z === Y.s.r) {
                    te[A] = encode_col(A);
                }
                const Ue = te[A] + Ee;
                const Ce = re ? (C[Z] || [])[A] : C[Ue];
                if (!(!Ce || Ce.t == "z")) {
                    if (Ce.t == "n") {
                        if ((Ce.v | 0) == Ce.v && Ce.v >= -32768 && Ce.v <= 32767) {
                            ne(R, 13, d(Z, A, Ce.v));
                        } else {
                            ne(R, 14, h(Z, A, Ce.v));
                        }
                    } else {
                        const Be = format_cell(Ce);
                        ne(R, 15, u(Z, A, Be.slice(0, 239)));
                    }
                }
            }
        }
        ne(R, 1);
        return R.end();
    }
    function book_to_wk3(C, P) {
        const O = P || {};
        if (+O.codepage >= 0) {
            Gr(+O.codepage);
        }
        if (O.type == "string") {
            throw new Error("Cannot write WK3 to JS string");
        }
        const R = Cr();
        ne(R, 0, s(C));
        for(var Y = 0, re = 0; Y < C.SheetNames.length; ++Y){
            if ((C.Sheets[C.SheetNames[Y]] || {})["!ref"]) {
                ne(R, 27, V(C.SheetNames[Y], re++));
            }
        }
        let te = 0;
        for(Y = 0; Y < C.SheetNames.length; ++Y){
            const Q = C.Sheets[C.SheetNames[Y]];
            if (!(!Q || !Q["!ref"])) {
                const Z = Ae(Q["!ref"]);
                const Ee = Array.isArray(Q);
                const A = [];
                for(let Ue = Math.min(Z.e.r, 8191), Ce = Z.s.r; Ce <= Ue; ++Ce){
                    const Be = encode_row(Ce);
                    for(let ye = Z.s.c; ye <= Z.e.c; ++ye){
                        if (Ce === Z.s.r) {
                            A[ye] = encode_col(ye);
                        }
                        const fe = A[ye] + Be;
                        const Je = Ee ? (Q[Ce] || [])[ye] : Q[fe];
                        if (!(!Je || Je.t == "z")) {
                            if (Je.t == "n") {
                                ne(R, 23, z(Ce, ye, te, Je.v));
                            } else {
                                const Lr = format_cell(Je);
                                ne(R, 22, F(Ce, ye, te, Lr.slice(0, 239)));
                            }
                        }
                    }
                }
                ++te;
            }
        }
        ne(R, 1);
        return R.end();
    }
    function i(C) {
        const P = G(2);
        P.write_shift(2, C);
        return P;
    }
    function s(C) {
        const P = G(26);
        P.write_shift(2, 4096);
        P.write_shift(2, 4);
        P.write_shift(4, 0);
        let O = 0;
        let R = 0;
        let Y = 0;
        for(let re = 0; re < C.SheetNames.length; ++re){
            const SheetName = C.SheetNames[re];
            const Q = C.Sheets[SheetName];
            if (!(!Q || !Q["!ref"])) {
                ++Y;
                const Z = decode_range(Q["!ref"]);
                if (O < Z.e.r) {
                    O = Z.e.r;
                }
                if (R < Z.e.c) {
                    R = Z.e.c;
                }
            }
        }
        if (O > 8191) {
            O = 8191;
        }
        P.write_shift(2, O);
        P.write_shift(1, Y);
        P.write_shift(1, R);
        P.write_shift(2, 0);
        P.write_shift(2, 0);
        P.write_shift(1, 1);
        P.write_shift(1, 2);
        P.write_shift(4, 0);
        P.write_shift(4, 0);
        return P;
    }
    function f(C, P, O) {
        const R = {
            s: {
                c: 0,
                r: 0
            },
            e: {
                c: 0,
                r: 0
            }
        };
        if (P == 8 && O.qpro) {
            R.s.c = C.read_shift(1);
            C.l++;
            R.s.r = C.read_shift(2);
            R.e.c = C.read_shift(1);
            C.l++;
            R.e.r = C.read_shift(2);
            return R;
        }
        R.s.c = C.read_shift(2);
        R.s.r = C.read_shift(2);
        if (P == 12 && O.qpro) {
            C.l += 2;
        }
        R.e.c = C.read_shift(2);
        R.e.r = C.read_shift(2);
        if (P == 12 && O.qpro) {
            C.l += 2;
        }
        if (R.s.c == 65535) {
            R.s.c = R.e.c = R.s.r = R.e.r = 0;
        }
        return R;
    }
    function c(C) {
        const P = G(8);
        P.write_shift(2, C.s.c);
        P.write_shift(2, C.s.r);
        P.write_shift(2, C.e.c);
        P.write_shift(2, C.e.r);
        return P;
    }
    function o(C, P, O) {
        const R = [
            {
                c: 0,
                r: 0
            },
            {
                t: "n",
                v: 0
            },
            0,
            0
        ];
        if (O.qpro && O.vers != 20768) {
            R[0].c = C.read_shift(1);
            R[3] = C.read_shift(1);
            R[0].r = C.read_shift(2);
            C.l += 2;
        } else {
            R[2] = C.read_shift(1);
            R[0].c = C.read_shift(2);
            R[0].r = C.read_shift(2);
        }
        return R;
    }
    function l(C, P, O) {
        const R = C.l + P;
        const Y = o(C, P, O);
        Y[1].t = "s";
        if (O.vers == 20768) {
            C.l++;
            const re = C.read_shift(1);
            Y[1].v = C.read_shift(re, "utf8");
            return Y;
        }
        O.qpro && C.l++;
        Y[1].v = C.read_shift(R - C.l, "cstr");
        return Y;
    }
    function u(C, P, O) {
        const R = G(7 + O.length);
        R.write_shift(1, 255);
        R.write_shift(2, P);
        R.write_shift(2, C);
        R.write_shift(1, 39);
        for(let Y = 0; Y < R.length; ++Y){
            const re = O.charCodeAt(Y);
            R.write_shift(1, re >= 128 ? 95 : re);
        }
        R.write_shift(1, 0);
        return R;
    }
    function x(C, P, O) {
        const R = o(C, P, O);
        R[1].v = C.read_shift(2, "i");
        return R;
    }
    function d(C, P, O) {
        const R = G(7);
        R.write_shift(1, 255);
        R.write_shift(2, P);
        R.write_shift(2, C);
        R.write_shift(2, O, "i");
        return R;
    }
    function v(C, P, O) {
        const R = o(C, P, O);
        R[1].v = C.read_shift(8, "f");
        return R;
    }
    function h(C, P, O) {
        const R = G(13);
        R.write_shift(1, 255);
        R.write_shift(2, P);
        R.write_shift(2, C);
        R.write_shift(8, O, "f");
        return R;
    }
    function p(C, P, O) {
        const R = C.l + P;
        const Y = o(C, P, O);
        Y[1].v = C.read_shift(8, "f");
        if (O.qpro) {
            C.l = R;
        } else {
            const re = C.read_shift(2);
            D(C.slice(C.l, C.l + re), Y);
            C.l += re;
        }
        return Y;
    }
    function w(C, P, O) {
        const R = P & 32768;
        P &= -32769;
        P = (R ? C : 0) + (P >= 8192 ? P - 16384 : P);
        return (R ? "" : "$") + (O ? encode_col(P) : encode_row(P));
    }
    const y = {
        51: [
            "FALSE",
            0
        ],
        52: [
            "TRUE",
            0
        ],
        70: [
            "LEN",
            1
        ],
        80: [
            "SUM",
            69
        ],
        81: [
            "AVERAGEA",
            69
        ],
        82: [
            "COUNTA",
            69
        ],
        83: [
            "MINA",
            69
        ],
        84: [
            "MAXA",
            69
        ],
        111: [
            "T",
            1
        ]
    };
    const g = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "+",
        "-",
        "*",
        "/",
        "^",
        "=",
        "<>",
        "<=",
        ">=",
        "<",
        ">",
        "",
        "",
        "",
        "",
        "&",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ];
    function D(C, P) {
        prep_blob(C, 0);
        const O = [];
        let R = 0;
        let Y = "";
        let re = "";
        let te = "";
        let Q = "";
        while(C.l < C.length){
            let Z = C[C.l++];
            switch(Z){
                case 0:
                    O.push(C.read_shift(8, "f"));
                    break;
                case 1:
                    re = w(P[0].c, C.read_shift(2), true);
                    Y = w(P[0].r, C.read_shift(2), false);
                    O.push(re + Y);
                    break;
                case 2:
                    {
                        const Ee = w(P[0].c, C.read_shift(2), true);
                        const A = w(P[0].r, C.read_shift(2), false);
                        re = w(P[0].c, C.read_shift(2), true);
                        Y = w(P[0].r, C.read_shift(2), false);
                        O.push(`${Ee + A}:${re}${Y}`);
                    }
                    break;
                case 3:
                    if (C.l < C.length) {
                        console.error("WK1 premature formula end");
                        return;
                    }
                    break;
                case 4:
                    O.push(`(${O.pop()})`);
                    break;
                case 5:
                    O.push(C.read_shift(2));
                    break;
                case 6:
                    {
                        let Ue = "";
                        while(Z = C[C.l++]){
                            Ue += String.fromCharCode(Z);
                        }
                        O.push(`"${Ue.replace(/"/g, '""')}"`);
                    }
                    break;
                case 8:
                    O.push(`-${O.pop()}`);
                    break;
                case 23:
                    O.push(`+${O.pop()}`);
                    break;
                case 22:
                    O.push(`NOT(${O.pop()})`);
                    break;
                case 20:
                case 21:
                    Q = O.pop();
                    te = O.pop();
                    O.push(`${[
                        "AND",
                        "OR"
                    ][Z - 20]}(${te},${Q})`);
                    break;
                default:
                    if (Z < 32 && g[Z]) {
                        Q = O.pop();
                        te = O.pop();
                        O.push(te + g[Z] + Q);
                    } else if (y[Z]) {
                        R = y[Z][1];
                        if (R == 69) {
                            R = C[C.l++];
                        }
                        if (R > O.length) {
                            console.error(`WK1 bad formula parse 0x${Z.toString(16)}:|${O.join("|")}|`);
                            return;
                        }
                        const Ce = O.slice(-R);
                        O.length -= R;
                        O.push(`${y[Z][0]}(${Ce.join(",")})`);
                    } else {
                        if (Z <= 7) {
                            return console.error(`WK1 invalid opcode ${Z.toString(16)}`);
                        }
                        if (Z <= 24) {
                            return console.error(`WK1 unsupported op ${Z.toString(16)}`);
                        }
                        if (Z <= 30) {
                            return console.error(`WK1 invalid opcode ${Z.toString(16)}`);
                        }
                        if (Z <= 115) {
                            return console.error(`WK1 unsupported function opcode ${Z.toString(16)}`);
                        }
                        return console.error(`WK1 unrecognized opcode ${Z.toString(16)}`);
                    }
            }
        }
        if (O.length == 1) {
            P[1].f = `${O[0]}`;
        } else {
            console.error(`WK1 bad formula parse |${O.join("|")}|`);
        }
    }
    function b(C) {
        const P = [
            {
                c: 0,
                r: 0
            },
            {
                t: "n",
                v: 0
            },
            0
        ];
        P[0].r = C.read_shift(2);
        P[3] = C[C.l++];
        P[0].c = C[C.l++];
        return P;
    }
    function N(C, P) {
        const O = b(C);
        O[1].t = "s";
        O[1].v = C.read_shift(P - 4, "cstr");
        return O;
    }
    function F(C, P, O, R) {
        const Y = G(6 + R.length);
        Y.write_shift(2, C);
        Y.write_shift(1, O);
        Y.write_shift(1, P);
        Y.write_shift(1, 39);
        for(let re = 0; re < R.length; ++re){
            const te = R.charCodeAt(re);
            Y.write_shift(1, te >= 128 ? 95 : te);
        }
        Y.write_shift(1, 0);
        return Y;
    }
    function B(C, P) {
        const O = b(C);
        O[1].v = C.read_shift(2);
        let R = O[1].v >> 1;
        if (O[1].v & 1) {
            switch(R & 7){
                case 0:
                    R = (R >> 3) * 5000;
                    break;
                case 1:
                    R = (R >> 3) * 500;
                    break;
                case 2:
                    R = (R >> 3) / 20;
                    break;
                case 3:
                    R = (R >> 3) / 200;
                    break;
                case 4:
                    R = (R >> 3) / 2000;
                    break;
                case 5:
                    R = (R >> 3) / 20000;
                    break;
                case 6:
                    R = (R >> 3) / 16;
                    break;
                case 7:
                    R = (R >> 3) / 64;
                    break;
            }
        }
        O[1].v = R;
        return O;
    }
    function I(C, P) {
        const O = b(C);
        const R = C.read_shift(4);
        const Y = C.read_shift(4);
        let re = C.read_shift(2);
        if (re == 65535) {
            if (R === 0 && Y === 3221225472) {
                O[1].t = "e";
                O[1].v = 15;
            } else if (R === 0 && Y === 3489660928) {
                O[1].t = "e";
                O[1].v = 42;
            } else {
                O[1].v = 0;
            }
            return O;
        }
        const te = re & 32768;
        re = (re & 32767) - 16446;
        O[1].v = (1 - te * 2) * (Y * 2 ** (re + 32) + R * 2 ** re);
        return O;
    }
    function z(C, P, O, R) {
        const Y = G(14);
        Y.write_shift(2, C);
        Y.write_shift(1, O);
        Y.write_shift(1, P);
        if (R == 0) {
            Y.write_shift(4, 0);
            Y.write_shift(4, 0);
            Y.write_shift(2, 65535);
            return Y;
        }
        let re = 0;
        let te = 0;
        let Q = 0;
        let Z = 0;
        if (R < 0) {
            re = 1;
            R = -R;
        }
        te = Math.log2(R) | 0;
        R /= 2 ** (te - 31);
        Z = R >>> 0;
        if ((Z & 2147483648) == 0) {
            R /= 2;
            ++te;
            Z = R >>> 0;
        }
        R -= Z;
        Z |= 2147483648;
        Z >>>= 0;
        R *= 2 ** 32;
        Q = R >>> 0;
        Y.write_shift(4, Q);
        Y.write_shift(4, Z);
        te += 16383 + (re ? 32768 : 0);
        Y.write_shift(2, te);
        return Y;
    }
    function X(C, P) {
        const O = I(C);
        C.l += P - 14;
        return O;
    }
    function L(C, P) {
        const O = b(C);
        const R = C.read_shift(4);
        O[1].v = R >> 6;
        return O;
    }
    function J(C, P) {
        const O = b(C);
        const R = C.read_shift(8, "f");
        O[1].v = R;
        return O;
    }
    function le(C, P) {
        const O = J(C);
        C.l += P - 10;
        return O;
    }
    function ie(C, P) {
        if (C[C.l + P - 1] == 0) {
            return C.read_shift(P, "cstr");
        }
        return "";
    }
    function he(C, P) {
        let O = C[C.l++];
        if (O > P - 1) {
            O = P - 1;
        }
        for(var R = ""; R.length < O;){
            R += String.fromCharCode(C[C.l++]);
        }
        return R;
    }
    function ce(C, P, O) {
        if (!(!O.qpro || P < 21)) {
            const R = C.read_shift(1);
            C.l += 17;
            C.l += 1;
            C.l += 2;
            const Y = C.read_shift(P - 21, "cstr");
            return [
                R,
                Y
            ];
        }
    }
    function Pe(C, P) {
        const O = {};
        for(const R = C.l + P; C.l < R;){
            const Y = C.read_shift(2);
            if (Y == 14000) {
                O[Y] = [
                    0,
                    ""
                ];
                for(O[Y][0] = C.read_shift(2); C[C.l];){
                    O[Y][1] += String.fromCharCode(C[C.l]);
                    C.l++;
                }
                C.l++;
            }
        }
        return O;
    }
    function V(C, P) {
        const O = G(5 + C.length);
        O.write_shift(2, 14000);
        O.write_shift(2, P);
        for(let R = 0; R < C.length; ++R){
            const Y = C.charCodeAt(R);
            O[O.l++] = Y > 127 ? 95 : Y;
        }
        O[O.l++] = 0;
        return O;
    }
    var ve = {
        0: {
            n: "BOF",
            f: tr
        },
        1: {
            n: "EOF"
        },
        2: {
            n: "CALCMODE"
        },
        3: {
            n: "CALCORDER"
        },
        4: {
            n: "SPLIT"
        },
        5: {
            n: "SYNC"
        },
        6: {
            n: "RANGE",
            f
        },
        7: {
            n: "WINDOW1"
        },
        8: {
            n: "COLW1"
        },
        9: {
            n: "WINTWO"
        },
        10: {
            n: "COLW2"
        },
        11: {
            n: "NAME"
        },
        12: {
            n: "BLANK"
        },
        13: {
            n: "INTEGER",
            f: x
        },
        14: {
            n: "NUMBER",
            f: v
        },
        15: {
            n: "LABEL",
            f: l
        },
        16: {
            n: "FORMULA",
            f: p
        },
        24: {
            n: "TABLE"
        },
        25: {
            n: "ORANGE"
        },
        26: {
            n: "PRANGE"
        },
        27: {
            n: "SRANGE"
        },
        28: {
            n: "FRANGE"
        },
        29: {
            n: "KRANGE1"
        },
        32: {
            n: "HRANGE"
        },
        35: {
            n: "KRANGE2"
        },
        36: {
            n: "PROTEC"
        },
        37: {
            n: "FOOTER"
        },
        38: {
            n: "HEADER"
        },
        39: {
            n: "SETUP"
        },
        40: {
            n: "MARGINS"
        },
        41: {
            n: "LABELFMT"
        },
        42: {
            n: "TITLES"
        },
        43: {
            n: "SHEETJS"
        },
        45: {
            n: "GRAPH"
        },
        46: {
            n: "NGRAPH"
        },
        47: {
            n: "CALCCOUNT"
        },
        48: {
            n: "UNFORMATTED"
        },
        49: {
            n: "CURSORW12"
        },
        50: {
            n: "WINDOW"
        },
        51: {
            n: "STRING",
            f: l
        },
        55: {
            n: "PASSWORD"
        },
        56: {
            n: "LOCKED"
        },
        60: {
            n: "QUERY"
        },
        61: {
            n: "QUERYNAME"
        },
        62: {
            n: "PRINT"
        },
        63: {
            n: "PRINTNAME"
        },
        64: {
            n: "GRAPH2"
        },
        65: {
            n: "GRAPHNAME"
        },
        66: {
            n: "ZOOM"
        },
        67: {
            n: "SYMSPLIT"
        },
        68: {
            n: "NSROWS"
        },
        69: {
            n: "NSCOLS"
        },
        70: {
            n: "RULER"
        },
        71: {
            n: "NNAME"
        },
        72: {
            n: "ACOMM"
        },
        73: {
            n: "AMACRO"
        },
        74: {
            n: "PARSE"
        },
        102: {
            n: "PRANGES??"
        },
        103: {
            n: "RRANGES??"
        },
        104: {
            n: "FNAME??"
        },
        105: {
            n: "MRANGES??"
        },
        204: {
            n: "SHEETNAMECS",
            f: ie
        },
        222: {
            n: "SHEETNAMELP",
            f: he
        },
        65535: {
            n: ""
        }
    };
    var ge = {
        0: {
            n: "BOF"
        },
        1: {
            n: "EOF"
        },
        2: {
            n: "PASSWORD"
        },
        3: {
            n: "CALCSET"
        },
        4: {
            n: "WINDOWSET"
        },
        5: {
            n: "SHEETCELLPTR"
        },
        6: {
            n: "SHEETLAYOUT"
        },
        7: {
            n: "COLUMNWIDTH"
        },
        8: {
            n: "HIDDENCOLUMN"
        },
        9: {
            n: "USERRANGE"
        },
        10: {
            n: "SYSTEMRANGE"
        },
        11: {
            n: "ZEROFORCE"
        },
        12: {
            n: "SORTKEYDIR"
        },
        13: {
            n: "FILESEAL"
        },
        14: {
            n: "DATAFILLNUMS"
        },
        15: {
            n: "PRINTMAIN"
        },
        16: {
            n: "PRINTSTRING"
        },
        17: {
            n: "GRAPHMAIN"
        },
        18: {
            n: "GRAPHSTRING"
        },
        19: {
            n: "??"
        },
        20: {
            n: "ERRCELL"
        },
        21: {
            n: "NACELL"
        },
        22: {
            n: "LABEL16",
            f: N
        },
        23: {
            n: "NUMBER17",
            f: I
        },
        24: {
            n: "NUMBER18",
            f: B
        },
        25: {
            n: "FORMULA19",
            f: X
        },
        26: {
            n: "FORMULA1A"
        },
        27: {
            n: "XFORMAT",
            f: Pe
        },
        28: {
            n: "DTLABELMISC"
        },
        29: {
            n: "DTLABELCELL"
        },
        30: {
            n: "GRAPHWINDOW"
        },
        31: {
            n: "CPA"
        },
        32: {
            n: "LPLAUTO"
        },
        33: {
            n: "QUERY"
        },
        34: {
            n: "HIDDENSHEET"
        },
        35: {
            n: "??"
        },
        37: {
            n: "NUMBER25",
            f: L
        },
        38: {
            n: "??"
        },
        39: {
            n: "NUMBER27",
            f: J
        },
        40: {
            n: "FORMULA28",
            f: le
        },
        142: {
            n: "??"
        },
        147: {
            n: "??"
        },
        150: {
            n: "??"
        },
        151: {
            n: "??"
        },
        152: {
            n: "??"
        },
        153: {
            n: "??"
        },
        154: {
            n: "??"
        },
        155: {
            n: "??"
        },
        156: {
            n: "??"
        },
        163: {
            n: "??"
        },
        174: {
            n: "??"
        },
        175: {
            n: "??"
        },
        176: {
            n: "??"
        },
        177: {
            n: "??"
        },
        184: {
            n: "??"
        },
        185: {
            n: "??"
        },
        186: {
            n: "??"
        },
        187: {
            n: "??"
        },
        188: {
            n: "??"
        },
        195: {
            n: "??"
        },
        201: {
            n: "??"
        },
        204: {
            n: "SHEETNAMECS",
            f: ie
        },
        205: {
            n: "??"
        },
        206: {
            n: "??"
        },
        207: {
            n: "??"
        },
        208: {
            n: "??"
        },
        256: {
            n: "??"
        },
        259: {
            n: "??"
        },
        260: {
            n: "??"
        },
        261: {
            n: "??"
        },
        262: {
            n: "??"
        },
        263: {
            n: "??"
        },
        265: {
            n: "??"
        },
        266: {
            n: "??"
        },
        267: {
            n: "??"
        },
        268: {
            n: "??"
        },
        270: {
            n: "??"
        },
        271: {
            n: "??"
        },
        384: {
            n: "??"
        },
        389: {
            n: "??"
        },
        390: {
            n: "??"
        },
        393: {
            n: "??"
        },
        396: {
            n: "??"
        },
        512: {
            n: "??"
        },
        514: {
            n: "??"
        },
        513: {
            n: "??"
        },
        516: {
            n: "??"
        },
        517: {
            n: "??"
        },
        640: {
            n: "??"
        },
        641: {
            n: "??"
        },
        642: {
            n: "??"
        },
        643: {
            n: "??"
        },
        644: {
            n: "??"
        },
        645: {
            n: "??"
        },
        646: {
            n: "??"
        },
        647: {
            n: "??"
        },
        648: {
            n: "??"
        },
        658: {
            n: "??"
        },
        659: {
            n: "??"
        },
        660: {
            n: "??"
        },
        661: {
            n: "??"
        },
        662: {
            n: "??"
        },
        665: {
            n: "??"
        },
        666: {
            n: "??"
        },
        768: {
            n: "??"
        },
        772: {
            n: "??"
        },
        1537: {
            n: "SHEETINFOQP",
            f: ce
        },
        1600: {
            n: "??"
        },
        1602: {
            n: "??"
        },
        1793: {
            n: "??"
        },
        1794: {
            n: "??"
        },
        1795: {
            n: "??"
        },
        1796: {
            n: "??"
        },
        1920: {
            n: "??"
        },
        2048: {
            n: "??"
        },
        2049: {
            n: "??"
        },
        2052: {
            n: "??"
        },
        2688: {
            n: "??"
        },
        10998: {
            n: "??"
        },
        12849: {
            n: "??"
        },
        28233: {
            n: "??"
        },
        28484: {
            n: "??"
        },
        65535: {
            n: ""
        }
    };
    return {
        sheet_to_wk1,
        book_to_wk3,
        to_workbook: t
    };
})();
function bh(e) {
    const t = {};
    const r = e.match(Er);
    let a = 0;
    let n = false;
    if (r) {
        for(; a != r.length; ++a){
            const i = me(r[a]);
            switch(i[0].replace(/\w*:/g, "")){
                case "<condense":
                    break;
                case "<extend":
                    break;
                case "<shadow":
                    if (!i.val) {
                        break;
                    }
                case "<shadow>":
                case "<shadow/>":
                    t.shadow = 1;
                    break;
                case "</shadow>":
                    break;
                case "<charset":
                    if (i.val == "1") {
                        break;
                    }
                    t.cp = un[parseInt(i.val, 10)];
                    break;
                case "<outline":
                    if (!i.val) {
                        break;
                    }
                case "<outline>":
                case "<outline/>":
                    t.outline = 1;
                    break;
                case "</outline>":
                    break;
                case "<rFont":
                    t.name = i.val;
                    break;
                case "<sz":
                    t.sz = i.val;
                    break;
                case "<strike":
                    if (!i.val) {
                        break;
                    }
                case "<strike>":
                case "<strike/>":
                    t.strike = 1;
                    break;
                case "</strike>":
                    break;
                case "<u":
                    if (!i.val) {
                        break;
                    }
                    switch(i.val){
                        case "double":
                            t.uval = "double";
                            break;
                        case "singleAccounting":
                            t.uval = "single-accounting";
                            break;
                        case "doubleAccounting":
                            t.uval = "double-accounting";
                            break;
                    }
                case "<u>":
                case "<u/>":
                    t.u = 1;
                    break;
                case "</u>":
                    break;
                case "<b":
                    if (i.val == "0") {
                        break;
                    }
                case "<b>":
                case "<b/>":
                    t.b = 1;
                    break;
                case "</b>":
                    break;
                case "<i":
                    if (i.val == "0") {
                        break;
                    }
                case "<i>":
                case "<i/>":
                    t.i = 1;
                    break;
                case "</i>":
                    break;
                case "<color":
                    if (i.rgb) {
                        t.color = i.rgb.slice(2, 8);
                    }
                    break;
                case "<color>":
                case "<color/>":
                case "</color>":
                    break;
                case "<family":
                    t.family = i.val;
                    break;
                case "<family>":
                case "<family/>":
                case "</family>":
                    break;
                case "<vertAlign":
                    t.valign = i.val;
                    break;
                case "<vertAlign>":
                case "<vertAlign/>":
                case "</vertAlign>":
                    break;
                case "<scheme":
                    break;
                case "<scheme>":
                case "<scheme/>":
                case "</scheme>":
                    break;
                case "<extLst":
                case "<extLst>":
                case "</extLst>":
                    break;
                case "<ext":
                    n = true;
                    break;
                case "</ext>":
                    n = false;
                    break;
                default:
                    if (i[0].charCodeAt(1) !== 47 && !n) {
                        throw new Error(`Unrecognized rich format ${i[0]}`);
                    }
            }
        }
    }
    return t;
}
const Ph = (()=>{
    const e = ba("t");
    const t = ba("rPr");
    function r(i) {
        const s = i.match(e);
        if (!s) {
            return {
                t: "s",
                v: ""
            };
        }
        const f = {
            t: "s",
            v: Oe(s[1])
        };
        const c = i.match(t);
        if (c) {
            f.s = bh(c[1]);
        }
        return f;
    }
    const a = /<(?:\w+:)?r>/g;
    const n = /<\/(?:\w+:)?r>/;
    return (s)=>s.replace(a, "").split(n).map(r).filter((f)=>f.v);
})();
const Lh = (()=>{
    const t = /(\r\n|\n)/g;
    function r(n, i, s) {
        const f = [];
        if (n.u) {
            f.push("text-decoration: underline;");
        }
        if (n.uval) {
            f.push(`text-underline-style:${n.uval};`);
        }
        if (n.sz) {
            f.push(`font-size:${n.sz}pt;`);
        }
        if (n.outline) {
            f.push("text-effect: outline;");
        }
        if (n.shadow) {
            f.push("text-shadow: auto;");
        }
        i.push(`<span style="${f.join("")}">`);
        if (n.b) {
            i.push("<b>");
            s.push("</b>");
        }
        if (n.i) {
            i.push("<i>");
            s.push("</i>");
        }
        if (n.strike) {
            i.push("<s>");
            s.push("</s>");
        }
        let c = n.valign || "";
        if (c == "superscript" || c == "super") {
            c = "sup";
        } else if (c == "subscript") {
            c = "sub";
        }
        if (c != "") {
            i.push(`<${c}>`);
            s.push(`</${c}>`);
        }
        s.push("</span>");
        return n;
    }
    function a(n) {
        const i = [
            [],
            n.v,
            []
        ];
        if (n.v) {
            if (n.s) {
                r(n.s, i[0], i[2]);
            }
            return i[0].join("") + i[1].replace(t, "<br/>") + i[2].join("");
        }
        return "";
    }
    return (i)=>i.map(a).join("");
})();
const Bh = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g;
const Mh = /<(?:\w+:)?r>/;
const Uh = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
function Bn(e, t) {
    const r = t ? t.cellHTML : true;
    const a = {};
    if (e) {
        if (e.match(/^\s*<(?:\w+:)?t[^>]*>/)) {
            a.t = Oe(Le(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || ""));
            a.r = Le(e);
            if (r) {
                a.h = _n(a.t);
            }
        } else if (e.match(Mh)) {
            a.r = Le(e);
            a.t = Oe(Le((e.replace(Uh, "").match(Bh) || []).join("").replace(Er, "")));
            if (r) {
                a.h = Lh(Ph(a.r));
            }
        }
        return a;
    }
    return {
        t: ""
    };
}
const Wh = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/;
const Hh = /<(?:\w+:)?(?:si|sstItem)>/g;
const Vh = /<\/(?:\w+:)?(?:si|sstItem)>/;
function Xh(e, t) {
    const r = [];
    let a = "";
    if (!e) {
        return r;
    }
    let n = e.match(Wh);
    if (n) {
        a = n[2].replace(Hh, "").split(Vh);
        for(let i = 0; i != a.length; ++i){
            const s = Bn(a[i].trim(), t);
            if (s != null) {
                r[r.length] = s;
            }
        }
        n = me(n[1]);
        r.Count = n.count;
        r.Unique = n.uniqueCount;
    }
    return r;
}
const Gh = /^\s|\s$|[\t\n\r]/;
function Sf(e, t) {
    if (!t.bookSST) {
        return "";
    }
    const r = [
        Qe
    ];
    r[r.length] = ae("sst", null, {
        xmlns: zt[0],
        count: e.Count,
        uniqueCount: e.Unique
    });
    for(let a = 0; a != e.length; ++a){
        if (e[a] != null) {
            const n = e[a];
            let i = "<si>";
            if (n.r) {
                i += n.r;
            } else {
                i += "<t";
                if (!n.t) {
                    n.t = "";
                }
                if (n.t.match(Gh)) {
                    i += ' xml:space="preserve"';
                }
                i += `>${be(n.t)}</t>`;
            }
            i += "</si>";
            r[r.length] = i;
        }
    }
    if (r.length > 2) {
        r[r.length] = "</sst>";
        r[1] = r[1].replace("/>", ">");
    }
    return r.join("");
}
function zh(e) {
    return [
        e.read_shift(4),
        e.read_shift(4)
    ];
}
function $h(e, t) {
    const r = [];
    let a = false;
    dt(e, (i, s, f)=>{
        switch(f){
            case 159:
                r.Count = i[0];
                r.Unique = i[1];
                break;
            case 19:
                r.push(i);
                break;
            case 160:
                return true;
            case 35:
                a = true;
                break;
            case 36:
                a = false;
                break;
            default:
                s.T;
                if (!a || t.WTF) {
                    throw new Error(`Unexpected record 0x${f.toString(16)}`);
                }
        }
    });
    return r;
}
function Kh(e, t) {
    if (!t) {
        t = G(8);
    }
    t.write_shift(4, e.Count);
    t.write_shift(4, e.Unique);
    return t;
}
const Yh = nl;
function jh(e) {
    const t = Cr();
    j(t, 159, Kh(e));
    for(let r = 0; r < e.length; ++r){
        j(t, 19, Yh(e[r]));
    }
    j(t, 160);
    return t.end();
}
function Ff(e) {
    if (typeof De !== "undefined") {
        return De.utils.encode(Bt, e);
    }
    const t = [];
    for(let r = e.split(""), a = 0; a < r.length; ++a){
        t[a] = r[a].charCodeAt(0);
    }
    return t;
}
function ht(e, t) {
    const r = {};
    r.Major = e.read_shift(2);
    r.Minor = e.read_shift(2);
    if (t >= 4) {
        e.l += t - 4;
    }
    return r;
}
function Jh(content) {
    const t = {};
    t.id = content.read_shift(0, "lpp4");
    t.R = ht(content, 4);
    t.U = ht(content, 4);
    t.W = ht(content, 4);
    return t;
}
function Zh(content) {
    const t = content.read_shift(4);
    const r = content.l + t - 4;
    const a = {};
    for(var n = content.read_shift(4), i = []; n-- > 0;){
        i.push({
            t: content.read_shift(4),
            v: content.read_shift(0, "lpp4")
        });
    }
    a.name = content.read_shift(0, "lpp4");
    a.comps = i;
    if (content.l != r) {
        throw new Error(`Bad DataSpaceMapEntry: ${content.l} != ${r}`);
    }
    return a;
}
function qh(content) {
    const t = [];
    content.l += 4;
    for(let r = content.read_shift(4); r-- > 0;){
        t.push(Zh(content));
    }
    return t;
}
function Qh(content) {
    const t = [];
    content.l += 4;
    for(let r = content.read_shift(4); r-- > 0;){
        t.push(content.read_shift(0, "lpp4"));
    }
    return t;
}
function e1(content) {
    const t = {};
    content.read_shift(4);
    content.l += 4;
    t.id = content.read_shift(0, "lpp4");
    t.name = content.read_shift(0, "lpp4");
    t.R = ht(content, 4);
    t.U = ht(content, 4);
    t.W = ht(content, 4);
    return t;
}
function r1(content) {
    const t = e1(content);
    t.ename = content.read_shift(0, "8lpp4");
    t.blksz = content.read_shift(4);
    t.cmode = content.read_shift(4);
    if (content.read_shift(4) != 4) {
        throw new Error("Bad !Primary record");
    }
    return t;
}
function yf(e, t) {
    const r = e.l + t;
    const a = {};
    a.Flags = e.read_shift(4) & 63;
    e.l += 4;
    a.AlgID = e.read_shift(4);
    let n = false;
    switch(a.AlgID){
        case 26126:
        case 26127:
        case 26128:
            n = a.Flags == 36;
            break;
        case 26625:
            n = a.Flags == 4;
            break;
        case 0:
            n = a.Flags == 16 || a.Flags == 4 || a.Flags == 36;
            break;
        default:
            throw `Unrecognized encryption algorithm: ${a.AlgID}`;
    }
    if (!n) {
        throw new Error("Encryption Flags/AlgID mismatch");
    }
    a.AlgIDHash = e.read_shift(4);
    a.KeySize = e.read_shift(4);
    a.ProviderType = e.read_shift(4);
    e.l += 8;
    a.CSPName = e.read_shift(r - e.l >> 1, "utf16le");
    e.l = r;
    return a;
}
function Af(e, t) {
    const r = {};
    const a = e.l + t;
    e.l += 4;
    r.Salt = e.slice(e.l, e.l + 16);
    e.l += 16;
    r.Verifier = e.slice(e.l, e.l + 16);
    e.l += 16;
    e.read_shift(4);
    r.VerifierHash = e.slice(e.l, a);
    e.l = a;
    return r;
}
function t1(content) {
    const t = ht(content);
    switch(t.Minor){
        case 2:
            return [
                t.Minor,
                a1(content)
            ];
        case 3:
            return [
                t.Minor,
                n1()
            ];
        case 4:
            return [
                t.Minor,
                i1(content)
            ];
    }
    throw new Error(`ECMA-376 Encrypted file unrecognized Version: ${t.Minor}`);
}
function a1(content) {
    const t = content.read_shift(4);
    if ((t & 63) != 36) {
        throw new Error("EncryptionInfo mismatch");
    }
    const r = content.read_shift(4);
    const h = yf(content, r);
    const n = Af(content, content.length - content.l);
    return {
        t: "Std",
        h,
        v: n
    };
}
function n1() {
    throw new Error("File is password-protected: ECMA-376 Extensible");
}
function i1(content) {
    const t = [
        "saltSize",
        "blockSize",
        "keyBits",
        "hashSize",
        "cipherAlgorithm",
        "cipherChaining",
        "hashAlgorithm",
        "saltValue"
    ];
    content.l += 4;
    const r = content.read_shift(content.length - content.l, "utf8");
    const a = {};
    r.replace(Er, (i)=>{
        const s = me(i);
        switch(it(s[0])){
            case "<?xml":
                break;
            case "<encryption":
            case "</encryption>":
                break;
            case "<keyData":
                t.forEach((f)=>{
                    a[f] = s[f];
                });
                break;
            case "<dataIntegrity":
                a.encryptedHmacKey = s.encryptedHmacKey;
                a.encryptedHmacValue = s.encryptedHmacValue;
                break;
            case "<keyEncryptors>":
            case "<keyEncryptors":
                a.encs = [];
                break;
            case "</keyEncryptors>":
                break;
            case "<keyEncryptor":
                a.uri = s.uri;
                break;
            case "</keyEncryptor>":
                break;
            case "<encryptedKey":
                a.encs.push(s);
                break;
            default:
                throw s[0];
        }
    });
    return a;
}
function s1(e, t) {
    const r = {};
    const a = r.EncryptionVersionInfo = ht(e, 4);
    t -= 4;
    if (a.Minor != 2) {
        throw new Error(`unrecognized minor version code: ${a.Minor}`);
    }
    if (a.Major > 4 || a.Major < 2) {
        throw new Error(`unrecognized major version code: ${a.Major}`);
    }
    r.Flags = e.read_shift(4);
    t -= 4;
    const n = e.read_shift(4);
    t -= 4;
    r.EncryptionHeader = yf(e, n);
    t -= n;
    r.EncryptionVerifier = Af(e, t);
    return r;
}
function f1(e) {
    const t = {};
    const r = t.EncryptionVersionInfo = ht(e, 4);
    if (r.Major != 1 || r.Minor != 1) {
        throw `unrecognized version code ${r.Major} : ${r.Minor}`;
    }
    t.Salt = e.read_shift(16);
    t.EncryptedVerifier = e.read_shift(16);
    t.EncryptedVerifierHash = e.read_shift(16);
    return t;
}
function Mn(password) {
    let t = 0;
    let r;
    const a = Ff(password);
    const n = a.length + 1;
    let i;
    let s;
    let f;
    let c;
    let o;
    r = Tt(n);
    r[0] = a.length;
    for(i = 1; i != n; ++i){
        r[i] = a[i - 1];
    }
    for(i = n - 1; i >= 0; --i){
        s = r[i];
        f = (t & 16384) === 0 ? 0 : 1;
        c = t << 1 & 32767;
        o = f | c;
        t = o ^ s;
    }
    return t ^ 52811;
}
const Cf = (()=>{
    const e = [
        187,
        255,
        255,
        186,
        255,
        255,
        185,
        128,
        0,
        190,
        15,
        0,
        191,
        15,
        0
    ];
    const t = [
        57840,
        7439,
        52380,
        33984,
        4364,
        3600,
        61902,
        12606,
        6258,
        57657,
        54287,
        34041,
        10252,
        43370,
        20163
    ];
    const r = [
        44796,
        19929,
        39858,
        10053,
        20106,
        40212,
        10761,
        31585,
        63170,
        64933,
        60267,
        50935,
        40399,
        11199,
        17763,
        35526,
        1453,
        2906,
        5812,
        11624,
        23248,
        885,
        1770,
        3540,
        7080,
        14160,
        28320,
        56640,
        55369,
        41139,
        20807,
        41614,
        21821,
        43642,
        17621,
        28485,
        56970,
        44341,
        19019,
        38038,
        14605,
        29210,
        60195,
        50791,
        40175,
        10751,
        21502,
        43004,
        24537,
        18387,
        36774,
        3949,
        7898,
        15796,
        31592,
        63184,
        47201,
        24803,
        49606,
        37805,
        14203,
        28406,
        56812,
        17824,
        35648,
        1697,
        3394,
        6788,
        13576,
        27152,
        43601,
        17539,
        35078,
        557,
        1114,
        2228,
        4456,
        30388,
        60776,
        51953,
        34243,
        7079,
        14158,
        28316,
        14128,
        28256,
        56512,
        43425,
        17251,
        34502,
        7597,
        13105,
        26210,
        52420,
        35241,
        883,
        1766,
        3532,
        4129,
        8258,
        16516,
        33032,
        4657,
        9314,
        18628
    ];
    const a = (s)=>(s / 2 | s * 128) & 255;
    const n = (s, f)=>a(s ^ f);
    const i = (s)=>{
        let f = t[s.length - 1];
        let c = 104;
        for(let o = s.length - 1; o >= 0; --o){
            let l = s[o];
            for(let u = 0; u != 7; ++u){
                if (l & 64) {
                    f ^= r[c];
                }
                l *= 2;
                --c;
            }
        }
        return f;
    };
    return (s)=>{
        const f = Ff(s);
        const c = i(f);
        let f_length = f.length;
        const l = Tt(16);
        for(let u = 0; u != 16; ++u){
            l[u] = 0;
        }
        let x;
        let d;
        let v;
        for((f_length & 1) === 1 && (x = c >> 8, l[f_length] = n(e[0], x), --f_length, x = c & 255, d = f[f.length - 1], l[f_length] = n(d, x)); f_length > 0;){
            --f_length;
            x = c >> 8;
            l[f_length] = n(f[f_length], x);
            --f_length;
            x = c & 255;
            l[f_length] = n(f[f_length], x);
        }
        f_length = 15;
        for(v = 15 - f.length; v > 0;){
            x = c >> 8;
            l[f_length] = n(e[v], x);
            --f_length;
            --v;
            x = c & 255;
            l[f_length] = n(f[f_length], x);
            --f_length;
            --v;
        }
        return l;
    };
})();
const c1 = (e, t, r, a, n)=>{
    if (!n) {
        n = t;
    }
    if (!a) {
        a = Cf(e);
    }
    let i;
    let s;
    for(i = 0; i != t.length; ++i){
        s = t[i];
        s ^= a[r];
        s = (s >> 5 | s << 3) & 255;
        n[i] = s;
        ++r;
    }
    return [
        n,
        r,
        a
    ];
};
const o1 = (password)=>{
    let t = 0;
    const r = Cf(password);
    return (a)=>{
        const n = c1("", a, t, r);
        t = n[1];
        return n[0];
    };
};
function l1(e, t, r, a) {
    const n = {
        key: tr(e),
        verificationBytes: tr(e)
    };
    if (r.password) {
        n.verifier = Mn(r.password);
    }
    a.valid = n.verificationBytes === n.verifier;
    if (a.valid) {
        a.insitu = o1(r.password);
    }
    return n;
}
function u1(e, t, r) {
    const a = r || {};
    a.Info = e.read_shift(2);
    e.l -= 2;
    if (a.Info === 1) {
        a.Data = f1(e);
    } else {
        a.Data = s1(e, t);
    }
    return a;
}
function h1(e, t, r) {
    const a = {
        Type: r.biff >= 8 ? e.read_shift(2) : 0
    };
    if (a.Type) {
        u1(e, t - 2, a);
    } else {
        l1(e, r.biff >= 8 ? t : t - 2, r, a);
    }
    return a;
}
const Df = (()=>{
    function e(n, i) {
        switch(i.type){
            case "base64":
                return t(br(n), i);
            case "binary":
                return t(n, i);
            case "buffer":
                return t(Te && Buffer.isBuffer(n) ? n.toString("binary") : At(n), i);
            case "array":
                return t(Ut(n), i);
        }
        throw new Error(`Unrecognized type ${i.type}`);
    }
    function t(n, i) {
        const s = i || {};
        const f = s.dense ? [] : {};
        const c = n.match(/\\trowd.*?\\row\b/g);
        if (!c.length) {
            throw new Error("RTF missing table");
        }
        const o = {
            s: {
                c: 0,
                r: 0
            },
            e: {
                c: 0,
                r: c.length - 1
            }
        };
        c.forEach((l, u)=>{
            if (Array.isArray(f)) {
                f[u] = [];
            }
            let v;
            for(var x = /\\\w+\b/g, d = 0, h = -1; v = x.exec(l);){
                switch(v[0]){
                    case "\\cell":
                        let p = l.slice(d, x.lastIndex - v[0].length);
                        if (p[0] == " ") {
                            p = p.slice(1);
                        }
                        ++h;
                        if (p.length) {
                            const w = {
                                v: p,
                                t: "s"
                            };
                            if (Array.isArray(f)) {
                                f[u][h] = w;
                            } else {
                                f[encode_cell({
                                    r: u,
                                    c: h
                                })] = w;
                            }
                        }
                        break;
                }
                d = x.lastIndex;
            }
            if (h > o.e.c) {
                o.e.c = h;
            }
        });
        f["!ref"] = encode_range(o);
        return f;
    }
    function r(n, i) {
        return Ct(e(n, i), i);
    }
    function a(n) {
        const i = [
            "{\\rtf1\\ansi"
        ];
        let f;
        for(let s = Ae(n["!ref"]), c = Array.isArray(n), o = s.s.r; o <= s.e.r; ++o){
            i.push("\\trowd\\trautofit1");
            for(var l = s.s.c; l <= s.e.c; ++l){
                i.push(`\\cellx${l + 1}`);
            }
            i.push("\\pard\\intbl");
            for(l = s.s.c; l <= s.e.c; ++l){
                const u = encode_cell({
                    r: o,
                    c: l
                });
                f = c ? (n[o] || [])[l] : n[u];
                if (!(!f || f.v == null && (!f.f || f.F))) {
                    i.push(` ${f.w || (format_cell(f), f.w)}`);
                    i.push("\\cell");
                }
            }
            i.push("\\pard\\intbl\\row");
        }
        return `${i.join("")}}`;
    }
    return {
        to_workbook: r,
        to_sheet: e,
        from_sheet: a
    };
})();
function x1(rgb) {
    const t = rgb.slice(rgb[0] === "#" ? 1 : 0).slice(0, 6);
    return [
        parseInt(t.slice(0, 2), 16),
        parseInt(t.slice(2, 4), 16),
        parseInt(t.slice(4, 6), 16)
    ];
}
function Ma(e) {
    for(var t = 0, r = 1; t != 3; ++t){
        r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
    }
    return r.toString(16).toUpperCase().slice(1);
}
function d1(e) {
    const t = e[0] / 255;
    const r = e[1] / 255;
    const a = e[2] / 255;
    const n = Math.max(t, r, a);
    const i = Math.min(t, r, a);
    const s = n - i;
    if (s === 0) {
        return [
            0,
            0,
            t
        ];
    }
    let f = 0;
    let c = 0;
    const o = n + i;
    c = s / (o > 1 ? 2 - o : o);
    switch(n){
        case t:
            f = ((r - a) / s + 6) % 6;
            break;
        case r:
            f = (a - t) / s + 2;
            break;
        case a:
            f = (t - r) / s + 4;
            break;
    }
    return [
        f / 6,
        c,
        o / 2
    ];
}
function v1([t, r, a]) {
    const n = r * 2 * (a < 0.5 ? a : 1 - a);
    const i = a - n / 2;
    const s = [
        i,
        i,
        i
    ];
    const f = 6 * t;
    let c;
    if (r !== 0) {
        switch(f | 0){
            case 0:
            case 6:
                c = n * f;
                s[0] += n;
                s[1] += c;
                break;
            case 1:
                c = n * (2 - f);
                s[0] += c;
                s[1] += n;
                break;
            case 2:
                c = n * (f - 2);
                s[1] += n;
                s[2] += c;
                break;
            case 3:
                c = n * (4 - f);
                s[1] += c;
                s[2] += n;
                break;
            case 4:
                c = n * (f - 4);
                s[2] += n;
                s[0] += c;
                break;
            case 5:
                c = n * (6 - f);
                s[2] += c;
                s[0] += n;
                break;
        }
    }
    for(let o = 0; o != 3; ++o){
        s[o] = Math.round(s[o] * 255);
    }
    return s;
}
function k0(rgb, t) {
    if (t === 0) {
        return rgb;
    }
    const r = d1(x1(rgb));
    if (t < 0) {
        r[2] = r[2] * (1 + t);
    } else {
        r[2] = 1 - (1 - r[2]) * (1 - t);
    }
    return Ma(v1(r));
}
const Of = 6;
const p1 = 15;
const m1 = 1;
var mr = Of;
function Ua(e) {
    return Math.floor((e + Math.round(128 / mr) / 256) * mr);
}
function Wa(e) {
    return Math.floor((e - 5) / mr * 100 + 0.5) / 100;
}
function E0(e) {
    return Math.round((e * mr + 5) / mr * 256) / 256;
}
function V0(e) {
    return E0(Wa(Ua(e)));
}
function Un(e) {
    let t = Math.abs(e - V0(e));
    let r = mr;
    if (t > 0.005) {
        for(mr = m1; mr < p1; ++mr){
            if (Math.abs(e - V0(e)) <= t) {
                t = Math.abs(e - V0(e));
                r = mr;
            }
        }
    }
    mr = r;
}
function St(e) {
    if (e.width) {
        e.wpx = Ua(e.width);
        e.wch = Wa(e.wpx);
        e.MDW = mr;
    } else if (e.wpx) {
        e.wch = Wa(e.wpx);
        e.width = E0(e.wch);
        e.MDW = mr;
    } else if (typeof e.wch === "number") {
        e.width = E0(e.wch);
        e.wpx = Ua(e.width);
        e.MDW = mr;
    }
    e.customWidth && delete e.customWidth;
}
const g1 = 96;
var If = g1;
function Ha(hpx) {
    return hpx * 96 / If;
}
function oa(e) {
    return e * If / 96;
}
const _1 = {
    None: "none",
    Solid: "solid",
    Gray50: "mediumGray",
    Gray75: "darkGray",
    Gray25: "lightGray",
    HorzStripe: "darkHorizontal",
    VertStripe: "darkVertical",
    ReverseDiagStripe: "darkDown",
    DiagStripe: "darkUp",
    DiagCross: "darkGrid",
    ThickDiagCross: "darkTrellis",
    ThinHorzStripe: "lightHorizontal",
    ThinVertStripe: "lightVertical",
    ThinReverseDiagStripe: "lightDown",
    ThinHorzCross: "lightGrid"
};
function w1(e, t, r, a) {
    t.Borders = [];
    let n = {};
    let i = false;
    (e[0].match(Er) || []).forEach((s)=>{
        const f = me(s);
        switch(it(f[0])){
            case "<borders":
            case "<borders>":
            case "</borders>":
                break;
            case "<border":
            case "<border>":
            case "<border/>":
                n = {};
                if (f.diagonalUp) {
                    n.diagonalUp = We(f.diagonalUp);
                }
                if (f.diagonalDown) {
                    n.diagonalDown = We(f.diagonalDown);
                }
                t.Borders.push(n);
                break;
            case "</border>":
                break;
            case "<left/>":
                break;
            case "<left":
            case "<left>":
                break;
            case "</left>":
                break;
            case "<right/>":
                break;
            case "<right":
            case "<right>":
                break;
            case "</right>":
                break;
            case "<top/>":
                break;
            case "<top":
            case "<top>":
                break;
            case "</top>":
                break;
            case "<bottom/>":
                break;
            case "<bottom":
            case "<bottom>":
                break;
            case "</bottom>":
                break;
            case "<diagonal":
            case "<diagonal>":
            case "<diagonal/>":
                break;
            case "</diagonal>":
                break;
            case "<horizontal":
            case "<horizontal>":
            case "<horizontal/>":
                break;
            case "</horizontal>":
                break;
            case "<vertical":
            case "<vertical>":
            case "<vertical/>":
                break;
            case "</vertical>":
                break;
            case "<start":
            case "<start>":
            case "<start/>":
                break;
            case "</start>":
                break;
            case "<end":
            case "<end>":
            case "<end/>":
                break;
            case "</end>":
                break;
            case "<color":
            case "<color>":
                break;
            case "<color/>":
            case "</color>":
                break;
            case "<extLst":
            case "<extLst>":
            case "</extLst>":
                break;
            case "<ext":
                i = true;
                break;
            case "</ext>":
                i = false;
                break;
            default:
                if (a && a.WTF && !i) {
                    throw new Error(`unrecognized ${f[0]} in borders`);
                }
        }
    });
}
function k1(e, t, r, a) {
    t.Fills = [];
    let n = {};
    let i = false;
    (e[0].match(Er) || []).forEach((s)=>{
        const f = me(s);
        switch(it(f[0])){
            case "<fills":
            case "<fills>":
            case "</fills>":
                break;
            case "<fill>":
            case "<fill":
            case "<fill/>":
                n = {};
                t.Fills.push(n);
                break;
            case "</fill>":
                break;
            case "<gradientFill>":
                break;
            case "<gradientFill":
            case "</gradientFill>":
                t.Fills.push(n);
                n = {};
                break;
            case "<patternFill":
            case "<patternFill>":
                if (f.patternType) {
                    n.patternType = f.patternType;
                }
                break;
            case "<patternFill/>":
            case "</patternFill>":
                break;
            case "<bgColor":
                if (!n.bgColor) {
                    n.bgColor = {};
                }
                if (f.indexed) {
                    n.bgColor.indexed = parseInt(f.indexed, 10);
                }
                if (f.theme) {
                    n.bgColor.theme = parseInt(f.theme, 10);
                }
                if (f.tint) {
                    n.bgColor.tint = parseFloat(f.tint);
                }
                if (f.rgb) {
                    n.bgColor.rgb = f.rgb.slice(-6);
                }
                break;
            case "<bgColor/>":
            case "</bgColor>":
                break;
            case "<fgColor":
                if (!n.fgColor) {
                    n.fgColor = {};
                }
                if (f.theme) {
                    n.fgColor.theme = parseInt(f.theme, 10);
                }
                if (f.tint) {
                    n.fgColor.tint = parseFloat(f.tint);
                }
                if (f.rgb != null) {
                    n.fgColor.rgb = f.rgb.slice(-6);
                }
                break;
            case "<fgColor/>":
            case "</fgColor>":
                break;
            case "<stop":
            case "<stop/>":
                break;
            case "</stop>":
                break;
            case "<color":
            case "<color/>":
                break;
            case "</color>":
                break;
            case "<extLst":
            case "<extLst>":
            case "</extLst>":
                break;
            case "<ext":
                i = true;
                break;
            case "</ext>":
                i = false;
                break;
            default:
                if (a && a.WTF && !i) {
                    throw new Error(`unrecognized ${f[0]} in fills`);
                }
        }
    });
}
function E1(e, t, r, a) {
    t.Fonts = [];
    let n = {};
    let i = false;
    (e[0].match(Er) || []).forEach((s)=>{
        const f = me(s);
        switch(it(f[0])){
            case "<fonts":
            case "<fonts>":
            case "</fonts>":
                break;
            case "<font":
            case "<font>":
                break;
            case "</font>":
            case "<font/>":
                t.Fonts.push(n);
                n = {};
                break;
            case "<name":
                if (f.val) {
                    n.name = Le(f.val);
                }
                break;
            case "<name/>":
            case "</name>":
                break;
            case "<b":
                n.bold = f.val ? We(f.val) : 1;
                break;
            case "<b/>":
                n.bold = 1;
                break;
            case "<i":
                n.italic = f.val ? We(f.val) : 1;
                break;
            case "<i/>":
                n.italic = 1;
                break;
            case "<u":
                switch(f.val){
                    case "none":
                        n.underline = 0;
                        break;
                    case "single":
                        n.underline = 1;
                        break;
                    case "double":
                        n.underline = 2;
                        break;
                    case "singleAccounting":
                        n.underline = 33;
                        break;
                    case "doubleAccounting":
                        n.underline = 34;
                        break;
                }
                break;
            case "<u/>":
                n.underline = 1;
                break;
            case "<strike":
                n.strike = f.val ? We(f.val) : 1;
                break;
            case "<strike/>":
                n.strike = 1;
                break;
            case "<outline":
                n.outline = f.val ? We(f.val) : 1;
                break;
            case "<outline/>":
                n.outline = 1;
                break;
            case "<shadow":
                n.shadow = f.val ? We(f.val) : 1;
                break;
            case "<shadow/>":
                n.shadow = 1;
                break;
            case "<condense":
                n.condense = f.val ? We(f.val) : 1;
                break;
            case "<condense/>":
                n.condense = 1;
                break;
            case "<extend":
                n.extend = f.val ? We(f.val) : 1;
                break;
            case "<extend/>":
                n.extend = 1;
                break;
            case "<sz":
                if (f.val) {
                    n.sz = +f.val;
                }
                break;
            case "<sz/>":
            case "</sz>":
                break;
            case "<vertAlign":
                if (f.val) {
                    n.vertAlign = f.val;
                }
                break;
            case "<vertAlign/>":
            case "</vertAlign>":
                break;
            case "<family":
                if (f.val) {
                    n.family = parseInt(f.val, 10);
                }
                break;
            case "<family/>":
            case "</family>":
                break;
            case "<scheme":
                if (f.val) {
                    n.scheme = f.val;
                }
                break;
            case "<scheme/>":
            case "</scheme>":
                break;
            case "<charset":
                if (f.val == "1") {
                    break;
                }
                f.codepage = un[parseInt(f.val, 10)];
                break;
            case "<color":
                if (!n.color) {
                    n.color = {};
                }
                if (f.auto) {
                    n.color.auto = We(f.auto);
                }
                if (f.rgb) {
                    n.color.rgb = f.rgb.slice(-6);
                } else if (f.indexed) {
                    n.color.index = parseInt(f.indexed, 10);
                    let c = Nt[n.color.index];
                    if (n.color.index == 81) {
                        c = Nt[1];
                    }
                    if (!c) {
                        c = Nt[1];
                    }
                    n.color.rgb = c[0].toString(16) + c[1].toString(16) + c[2].toString(16);
                } else {
                    if (f.theme) {
                        n.color.theme = parseInt(f.theme, 10);
                        if (f.tint) {
                            n.color.tint = parseFloat(f.tint);
                        }
                        if (f.theme && r.themeElements && r.themeElements.clrScheme) {
                            n.color.rgb = k0(r.themeElements.clrScheme[n.color.theme].rgb, n.color.tint || 0);
                        }
                    }
                }
                break;
            case "<color/>":
            case "</color>":
                break;
            case "<AlternateContent":
                i = true;
                break;
            case "</AlternateContent>":
                i = false;
                break;
            case "<extLst":
            case "<extLst>":
            case "</extLst>":
                break;
            case "<ext":
                i = true;
                break;
            case "</ext>":
                i = false;
                break;
            default:
                if (a && a.WTF && !i) {
                    throw new Error(`unrecognized ${f[0]} in fonts`);
                }
        }
    });
}
function T1(e, t, r) {
    t.NumberFmt = [];
    for(var a = je(_table), n = 0; n < a.length; ++n){
        t.NumberFmt[a[n]] = _table[a[n]];
    }
    const i = e[0].match(Er);
    if (i) {
        for(n = 0; n < i.length; ++n){
            const s = me(i[n]);
            switch(it(s[0])){
                case "<numFmts":
                case "</numFmts>":
                case "<numFmts/>":
                case "<numFmts>":
                    break;
                case "<numFmt":
                    {
                        const f = Oe(Le(s.formatCode));
                        let c = parseInt(s.numFmtId, 10);
                        t.NumberFmt[c] = f;
                        if (c > 0) {
                            if (c > 392) {
                                for(c = 392; c > 60 && t.NumberFmt[c] != null; --c);
                                t.NumberFmt[c] = f;
                            }
                            load(f, c);
                        }
                    }
                    break;
                case "</numFmt>":
                    break;
                default:
                    if (r.WTF) {
                        throw new Error(`unrecognized ${s[0]} in numFmts`);
                    }
            }
        }
    }
}
function S1(e) {
    const t = [
        "<numFmts>"
    ];
    [
        [
            5,
            8
        ],
        [
            23,
            26
        ],
        [
            41,
            44
        ],
        [
            50,
            392
        ]
    ].forEach((r)=>{
        for(let a = r[0]; a <= r[1]; ++a){
            if (e[a] != null) {
                t[t.length] = ae("numFmt", null, {
                    numFmtId: a,
                    formatCode: be(e[a])
                });
            }
        }
    });
    if (t.length === 1) {
        return "";
    }
    t[t.length] = "</numFmts>";
    t[0] = ae("numFmts", null, {
        count: t.length - 2
    }).replace("/>", ">");
    return t.join("");
}
const f0 = [
    "numFmtId",
    "fillId",
    "fontId",
    "borderId",
    "xfId"
];
const c0 = [
    "applyAlignment",
    "applyBorder",
    "applyFill",
    "applyFont",
    "applyNumberFormat",
    "applyProtection",
    "pivotButton",
    "quotePrefix"
];
function F1(e, t, r) {
    t.CellXf = [];
    let a;
    let n = false;
    (e[0].match(Er) || []).forEach((i)=>{
        const s = me(i);
        let f = 0;
        switch(it(s[0])){
            case "<cellXfs":
            case "<cellXfs>":
            case "<cellXfs/>":
            case "</cellXfs>":
                break;
            case "<xf":
            case "<xf/>":
                a = s;
                delete a[0];
                for(f = 0; f < f0.length; ++f){
                    if (a[f0[f]]) {
                        a[f0[f]] = parseInt(a[f0[f]], 10);
                    }
                }
                for(f = 0; f < c0.length; ++f){
                    if (a[c0[f]]) {
                        a[c0[f]] = We(a[c0[f]]);
                    }
                }
                if (t.NumberFmt && a.numFmtId > 392) {
                    for(f = 392; f > 60; --f){
                        if (t.NumberFmt[a.numFmtId] == t.NumberFmt[f]) {
                            a.numFmtId = f;
                            break;
                        }
                    }
                }
                t.CellXf.push(a);
                break;
            case "</xf>":
                break;
            case "<alignment":
            case "<alignment/>":
                const c = {};
                if (s.vertical) {
                    c.vertical = s.vertical;
                }
                if (s.horizontal) {
                    c.horizontal = s.horizontal;
                }
                if (s.textRotation != null) {
                    c.textRotation = s.textRotation;
                }
                if (s.indent) {
                    c.indent = s.indent;
                }
                if (s.wrapText) {
                    c.wrapText = We(s.wrapText);
                }
                a.alignment = c;
                break;
            case "</alignment>":
                break;
            case "<protection":
                break;
            case "</protection>":
            case "<protection/>":
                break;
            case "<AlternateContent":
                n = true;
                break;
            case "</AlternateContent>":
                n = false;
                break;
            case "<extLst":
            case "<extLst>":
            case "</extLst>":
                break;
            case "<ext":
                n = true;
                break;
            case "</ext>":
                n = false;
                break;
            default:
                if (r && r.WTF && !n) {
                    throw new Error(`unrecognized ${s[0]} in cellXfs`);
                }
        }
    });
}
function y1(cellXfs) {
    const t = [];
    t[t.length] = ae("cellXfs", null);
    cellXfs.forEach((r)=>{
        t[t.length] = ae("xf", null, r);
    });
    t[t.length] = "</cellXfs>";
    if (t.length === 2) {
        return "";
    }
    t[0] = ae("cellXfs", null, {
        count: t.length - 2
    }).replace("/>", ">");
    return t.join("");
}
const A1 = (()=>{
    const t = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/;
    const r = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/;
    const a = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/;
    const n = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/;
    const i = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
    return (f, c, o)=>{
        const l = {};
        if (!f) {
            return l;
        }
        f = f.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
        let u;
        if (u = f.match(t)) {
            T1(u, l, o);
        }
        if (u = f.match(n)) {
            E1(u, l, c, o);
        }
        if (u = f.match(a)) {
            k1(u, l, c, o);
        }
        if (u = f.match(i)) {
            w1(u, l, c, o);
        }
        if (u = f.match(r)) {
            F1(u, l, o);
        }
        return l;
    };
})();
function Rf(e, t) {
    const r = [
        Qe,
        ae("styleSheet", null, {
            xmlns: zt[0],
            "xmlns:vt": nr.vt
        })
    ];
    let a;
    if (e.SSF && (a = S1(e.SSF)) != null) {
        r[r.length] = a;
    }
    r[r.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>';
    r[r.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>';
    r[r.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>';
    r[r.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>';
    if (a = y1(t.cellXfs)) {
        r[r.length] = a;
    }
    r[r.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>';
    r[r.length] = '<dxfs count="0"/>';
    r[r.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>';
    if (r.length > 2) {
        r[r.length] = "</styleSheet>";
        r[1] = r[1].replace("/>", ">");
    }
    return r.join("");
}
function C1(e, t) {
    const r = e.read_shift(2);
    const a = wr(e);
    return [
        r,
        a
    ];
}
function D1(e, t, r) {
    if (!r) {
        r = G(6 + 4 * t.length);
    }
    r.write_shift(2, e);
    or(t, r);
    const a = r.length > r.l ? r.slice(0, r.l) : r;
    if (r.l == null) {
        r.l = r.length;
    }
    return a;
}
function O1(e, t, r) {
    const a = {};
    a.sz = e.read_shift(2) / 20;
    const n = ul(e);
    if (n.fItalic) {
        a.italic = 1;
    }
    if (n.fCondense) {
        a.condense = 1;
    }
    if (n.fExtend) {
        a.extend = 1;
    }
    if (n.fShadow) {
        a.shadow = 1;
    }
    if (n.fOutline) {
        a.outline = 1;
    }
    if (n.fStrikeout) {
        a.strike = 1;
    }
    const i = e.read_shift(2);
    if (i === 700) {
        a.bold = 1;
    }
    switch(e.read_shift(2)){
        case 1:
            a.vertAlign = "superscript";
            break;
        case 2:
            a.vertAlign = "subscript";
            break;
    }
    const s = e.read_shift(1);
    if (s != 0) {
        a.underline = s;
    }
    const f = e.read_shift(1);
    if (f > 0) {
        a.family = f;
    }
    const c = e.read_shift(1);
    if (c > 0) {
        a.charset = c;
    }
    e.l++;
    a.color = ll(e);
    switch(e.read_shift(1)){
        case 1:
            a.scheme = "major";
            break;
        case 2:
            a.scheme = "minor";
            break;
    }
    a.name = wr(e);
    return a;
}
function I1(e, t) {
    if (!t) {
        t = G(153);
    }
    t.write_shift(2, e.sz * 20);
    hl(e, t);
    t.write_shift(2, e.bold ? 700 : 400);
    let r = 0;
    if (e.vertAlign == "superscript") {
        r = 1;
    } else if (e.vertAlign == "subscript") {
        r = 2;
    }
    t.write_shift(2, r);
    t.write_shift(1, e.underline || 0);
    t.write_shift(1, e.family || 0);
    t.write_shift(1, e.charset || 0);
    t.write_shift(1, 0);
    g0(e.color, t);
    let a = 0;
    a = 2;
    t.write_shift(1, a);
    or(e.name, t);
    if (t.length > t.l) {
        return t.slice(0, t.l);
    }
    return t;
}
const R1 = [
    "none",
    "solid",
    "mediumGray",
    "darkGray",
    "lightGray",
    "darkHorizontal",
    "darkVertical",
    "darkDown",
    "darkUp",
    "darkGrid",
    "darkTrellis",
    "lightHorizontal",
    "lightVertical",
    "lightDown",
    "lightUp",
    "lightGrid",
    "lightTrellis",
    "gray125",
    "gray0625"
];
let X0;
const N1 = kr;
function ji(e, t) {
    if (!t) {
        t = G(84);
    }
    if (!X0) {
        X0 = y0(R1);
    }
    let r = X0[e.patternType];
    if (r == null) {
        r = 40;
    }
    t.write_shift(4, r);
    let a = 0;
    if (r != 40) {
        g0({
            auto: 1
        }, t);
        g0({
            auto: 1
        }, t);
        for(; a < 12; ++a){
            t.write_shift(4, 0);
        }
    } else {
        for(; a < 4; ++a){
            t.write_shift(4, 0);
        }
        for(; a < 12; ++a){
            t.write_shift(4, 0);
        }
    }
    if (t.length > t.l) {
        return t.slice(0, t.l);
    }
    return t;
}
function b1(e, t) {
    const r = e.l + t;
    const a = e.read_shift(2);
    const numFmtId = e.read_shift(2);
    e.l = r;
    return {
        ixfe: a,
        numFmtId
    };
}
function Nf(e, t, r) {
    if (!r) {
        r = G(16);
    }
    r.write_shift(2, t || 0);
    r.write_shift(2, e.numFmtId || 0);
    r.write_shift(2, 0);
    r.write_shift(2, 0);
    r.write_shift(2, 0);
    r.write_shift(1, 0);
    r.write_shift(1, 0);
    const a = 0;
    r.write_shift(1, a);
    r.write_shift(1, 0);
    r.write_shift(1, 0);
    r.write_shift(1, 0);
    return r;
}
function _a(e, t) {
    if (!t) {
        t = G(10);
    }
    t.write_shift(1, 0);
    t.write_shift(1, 0);
    t.write_shift(4, 0);
    t.write_shift(4, 0);
    return t;
}
const P1 = kr;
function L1(e, t) {
    if (!t) {
        t = G(51);
    }
    t.write_shift(1, 0);
    _a(null, t);
    _a(null, t);
    _a(null, t);
    _a(null, t);
    _a(null, t);
    if (t.length > t.l) {
        return t.slice(0, t.l);
    }
    return t;
}
function B1(e, t) {
    if (!t) {
        t = G(52);
    }
    t.write_shift(4, e.xfId);
    t.write_shift(2, 1);
    t.write_shift(1, 0);
    t.write_shift(1, 0);
    m0(e.name || "", t);
    if (t.length > t.l) {
        return t.slice(0, t.l);
    }
    return t;
}
function M1(e, t, r) {
    const a = G(2052);
    a.write_shift(4, e);
    m0(t, a);
    m0(r, a);
    if (a.length > a.l) {
        return a.slice(0, a.l);
    }
    return a;
}
function U1(e, Themes, r) {
    const a = {};
    a.NumberFmt = [];
    for(const n in _table){
        a.NumberFmt[n] = _table[n];
    }
    a.CellXf = [];
    a.Fonts = [];
    const i = [];
    let s = false;
    dt(e, (c, o, l)=>{
        switch(l){
            case 44:
                a.NumberFmt[c[0]] = c[1];
                load(c[1], c[0]);
                break;
            case 43:
                a.Fonts.push(c);
                if (c.color.theme != null && Themes && Themes.themeElements && Themes.themeElements.clrScheme) {
                    c.color.rgb = k0(Themes.themeElements.clrScheme[c.color.theme].rgb, c.color.tint || 0);
                }
                break;
            case 1025:
                break;
            case 45:
                break;
            case 46:
                break;
            case 47:
                if (i[i.length - 1] == 617) {
                    a.CellXf.push(c);
                }
                break;
            case 48:
            case 507:
            case 572:
            case 475:
                break;
            case 1171:
            case 2102:
            case 1130:
            case 512:
            case 2095:
            case 3072:
                break;
            case 35:
                s = true;
                break;
            case 36:
                s = false;
                break;
            case 37:
                i.push(l);
                s = true;
                break;
            case 38:
                i.pop();
                s = false;
                break;
            default:
                if (o.T > 0) {
                    i.push(l);
                } else if (o.T < 0) {
                    i.pop();
                } else if (!s || r.WTF && i[i.length - 1] != 37) {
                    throw new Error(`Unexpected record 0x${l.toString(16)}`);
                }
        }
    });
    return a;
}
function W1(e, t) {
    if (t) {
        let r = 0;
        [
            [
                5,
                8
            ],
            [
                23,
                26
            ],
            [
                41,
                44
            ],
            [
                50,
                392
            ]
        ].forEach((a)=>{
            for(let n = a[0]; n <= a[1]; ++n){
                t[n] != null && ++r;
            }
        });
        if (r != 0) {
            j(e, 615, Jr(r));
            [
                [
                    5,
                    8
                ],
                [
                    23,
                    26
                ],
                [
                    41,
                    44
                ],
                [
                    50,
                    392
                ]
            ].forEach((a)=>{
                for(let n = a[0]; n <= a[1]; ++n){
                    if (t[n] != null) {
                        j(e, 44, D1(n, t[n]));
                    }
                }
            });
            j(e, 616);
        }
    }
}
function H1(e) {
    const t = 1;
    j(e, 611, Jr(t));
    j(e, 43, I1({
        sz: 12,
        color: {
            theme: 1
        },
        name: "Calibri",
        family: 2
    }));
    j(e, 612);
}
function V1(e) {
    const t = 2;
    j(e, 603, Jr(t));
    j(e, 45, ji({
        patternType: "none"
    }));
    j(e, 45, ji({
        patternType: "gray125"
    }));
    j(e, 604);
}
function X1(e) {
    const t = 1;
    j(e, 613, Jr(t));
    j(e, 46, L1());
    j(e, 614);
}
function G1(e) {
    const t = 1;
    j(e, 626, Jr(t));
    j(e, 47, Nf({
        numFmtId: 0
    }, 65535));
    j(e, 627);
}
function z1(e, cellXfs) {
    j(e, 617, Jr(cellXfs.length));
    cellXfs.forEach((r)=>{
        j(e, 47, Nf(r, 0));
    });
    j(e, 618);
}
function $1(e) {
    const t = 1;
    j(e, 619, Jr(t));
    j(e, 48, B1({
        xfId: 0,
        name: "Normal"
    }));
    j(e, 620);
}
function K1(e) {
    const t = 0;
    j(e, 505, Jr(t));
    j(e, 506);
}
function Y1(e) {
    const t = 0;
    j(e, 508, M1(t, "TableStyleMedium9", "PivotStyleMedium4"));
    j(e, 509);
}
function j1(e, t) {
    const r = Cr();
    j(r, 278);
    W1(r, e.SSF);
    H1(r);
    V1(r);
    X1(r);
    G1(r);
    z1(r, t.cellXfs);
    $1(r);
    K1(r);
    Y1(r);
    j(r, 279);
    return r.end();
}
const J1 = [
    "</a:lt1>",
    "</a:dk1>",
    "</a:lt2>",
    "</a:dk2>",
    "</a:accent1>",
    "</a:accent2>",
    "</a:accent3>",
    "</a:accent4>",
    "</a:accent5>",
    "</a:accent6>",
    "</a:hlink>",
    "</a:folHlink>"
];
function Z1(e, t, r) {
    t.themeElements.clrScheme = [];
    let a = {};
    (e[0].match(Er) || []).forEach((n)=>{
        const i = me(n);
        switch(i[0]){
            case "<a:clrScheme":
            case "</a:clrScheme>":
                break;
            case "<a:srgbClr":
                a.rgb = i.val;
                break;
            case "<a:sysClr":
                a.rgb = i.lastClr;
                break;
            case "<a:dk1>":
            case "</a:dk1>":
            case "<a:lt1>":
            case "</a:lt1>":
            case "<a:dk2>":
            case "</a:dk2>":
            case "<a:lt2>":
            case "</a:lt2>":
            case "<a:accent1>":
            case "</a:accent1>":
            case "<a:accent2>":
            case "</a:accent2>":
            case "<a:accent3>":
            case "</a:accent3>":
            case "<a:accent4>":
            case "</a:accent4>":
            case "<a:accent5>":
            case "</a:accent5>":
            case "<a:accent6>":
            case "</a:accent6>":
            case "<a:hlink>":
            case "</a:hlink>":
            case "<a:folHlink>":
            case "</a:folHlink>":
                if (i[0].charAt(1) === "/") {
                    t.themeElements.clrScheme[J1.indexOf(i[0])] = a;
                    a = {};
                } else {
                    a.name = i[0].slice(3, i[0].length - 1);
                }
                break;
            default:
                if (r && r.WTF) {
                    throw new Error(`Unrecognized ${i[0]} in clrScheme`);
                }
        }
    });
}
function q1() {}
function Q1() {}
const ex = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/;
const rx = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/;
const tx = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
function ax(e, t, r) {
    t.themeElements = {};
    let a;
    [
        [
            "clrScheme",
            ex,
            Z1
        ],
        [
            "fontScheme",
            rx,
            q1
        ],
        [
            "fmtScheme",
            tx,
            Q1
        ]
    ].forEach((n)=>{
        if (!(a = e.match(n[1]))) {
            throw new Error(`${n[0]} not found in themeElements`);
        }
        n[2](a, t, r);
    });
}
const nx = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
function bf(e, t) {
    if (!e || e.length === 0) {
        e = Wn();
    }
    let r;
    const a = {};
    if (!(r = e.match(nx))) {
        throw new Error("themeElements not found in theme");
    }
    ax(r[0], a, t);
    a.raw = e;
    return a;
}
function Wn(e, t) {
    if (t && t.themeXLSX) {
        return t.themeXLSX;
    }
    if (e && typeof e.raw === "string") {
        return e.raw;
    }
    const r = [
        Qe
    ];
    r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">';
    r[r.length] = "<a:themeElements>";
    r[r.length] = '<a:clrScheme name="Office">';
    r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>';
    r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>';
    r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>';
    r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>';
    r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>';
    r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>';
    r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>';
    r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>';
    r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>';
    r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>';
    r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>';
    r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>';
    r[r.length] = "</a:clrScheme>";
    r[r.length] = '<a:fontScheme name="Office">';
    r[r.length] = "<a:majorFont>";
    r[r.length] = '<a:latin typeface="Cambria"/>';
    r[r.length] = '<a:ea typeface=""/>';
    r[r.length] = '<a:cs typeface=""/>';
    r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>';
    r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>';
    r[r.length] = '<a:font script="Hans" typeface="宋体"/>';
    r[r.length] = '<a:font script="Hant" typeface="新細明體"/>';
    r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>';
    r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>';
    r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>';
    r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>';
    r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>';
    r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>';
    r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>';
    r[r.length] = '<a:font script="Knda" typeface="Tunga"/>';
    r[r.length] = '<a:font script="Guru" typeface="Raavi"/>';
    r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>';
    r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
    r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
    r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
    r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>';
    r[r.length] = '<a:font script="Deva" typeface="Mangal"/>';
    r[r.length] = '<a:font script="Telu" typeface="Gautami"/>';
    r[r.length] = '<a:font script="Taml" typeface="Latha"/>';
    r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
    r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>';
    r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>';
    r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>';
    r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>';
    r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>';
    r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>';
    r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
    r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>';
    r[r.length] = "</a:majorFont>";
    r[r.length] = "<a:minorFont>";
    r[r.length] = '<a:latin typeface="Calibri"/>';
    r[r.length] = '<a:ea typeface=""/>';
    r[r.length] = '<a:cs typeface=""/>';
    r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>';
    r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>';
    r[r.length] = '<a:font script="Hans" typeface="宋体"/>';
    r[r.length] = '<a:font script="Hant" typeface="新細明體"/>';
    r[r.length] = '<a:font script="Arab" typeface="Arial"/>';
    r[r.length] = '<a:font script="Hebr" typeface="Arial"/>';
    r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>';
    r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>';
    r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>';
    r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>';
    r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>';
    r[r.length] = '<a:font script="Knda" typeface="Tunga"/>';
    r[r.length] = '<a:font script="Guru" typeface="Raavi"/>';
    r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>';
    r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
    r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
    r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
    r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>';
    r[r.length] = '<a:font script="Deva" typeface="Mangal"/>';
    r[r.length] = '<a:font script="Telu" typeface="Gautami"/>';
    r[r.length] = '<a:font script="Taml" typeface="Latha"/>';
    r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
    r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>';
    r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>';
    r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>';
    r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>';
    r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>';
    r[r.length] = '<a:font script="Viet" typeface="Arial"/>';
    r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
    r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>';
    r[r.length] = "</a:minorFont>";
    r[r.length] = "</a:fontScheme>";
    r[r.length] = '<a:fmtScheme name="Office">';
    r[r.length] = "<a:fillStyleLst>";
    r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
    r[r.length] = '<a:gradFill rotWithShape="1">';
    r[r.length] = "<a:gsLst>";
    r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
    r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
    r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
    r[r.length] = "</a:gsLst>";
    r[r.length] = '<a:lin ang="16200000" scaled="1"/>';
    r[r.length] = "</a:gradFill>";
    r[r.length] = '<a:gradFill rotWithShape="1">';
    r[r.length] = "<a:gsLst>";
    r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>';
    r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
    r[r.length] = "</a:gsLst>";
    r[r.length] = '<a:lin ang="16200000" scaled="0"/>';
    r[r.length] = "</a:gradFill>";
    r[r.length] = "</a:fillStyleLst>";
    r[r.length] = "<a:lnStyleLst>";
    r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>';
    r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
    r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
    r[r.length] = "</a:lnStyleLst>";
    r[r.length] = "<a:effectStyleLst>";
    r[r.length] = "<a:effectStyle>";
    r[r.length] = "<a:effectLst>";
    r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>';
    r[r.length] = "</a:effectLst>";
    r[r.length] = "</a:effectStyle>";
    r[r.length] = "<a:effectStyle>";
    r[r.length] = "<a:effectLst>";
    r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
    r[r.length] = "</a:effectLst>";
    r[r.length] = "</a:effectStyle>";
    r[r.length] = "<a:effectStyle>";
    r[r.length] = "<a:effectLst>";
    r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
    r[r.length] = "</a:effectLst>";
    r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>';
    r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>';
    r[r.length] = "</a:effectStyle>";
    r[r.length] = "</a:effectStyleLst>";
    r[r.length] = "<a:bgFillStyleLst>";
    r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
    r[r.length] = '<a:gradFill rotWithShape="1">';
    r[r.length] = "<a:gsLst>";
    r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
    r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
    r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>';
    r[r.length] = "</a:gsLst>";
    r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>';
    r[r.length] = "</a:gradFill>";
    r[r.length] = '<a:gradFill rotWithShape="1">';
    r[r.length] = "<a:gsLst>";
    r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
    r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>';
    r[r.length] = "</a:gsLst>";
    r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>';
    r[r.length] = "</a:gradFill>";
    r[r.length] = "</a:bgFillStyleLst>";
    r[r.length] = "</a:fmtScheme>";
    r[r.length] = "</a:themeElements>";
    r[r.length] = "<a:objectDefaults>";
    r[r.length] = "<a:spDef>";
    r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>';
    r[r.length] = "</a:spDef>";
    r[r.length] = "<a:lnDef>";
    r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>';
    r[r.length] = "</a:lnDef>";
    r[r.length] = "</a:objectDefaults>";
    r[r.length] = "<a:extraClrSchemeLst/>";
    r[r.length] = "</a:theme>";
    return r.join("");
}
function ix(e, t, r) {
    const a = e.l + t;
    const n = e.read_shift(4);
    if (n !== 124226) {
        if (!r.cellStyles) {
            e.l = a;
            return;
        }
        const i = e.slice(e.l);
        e.l = a;
        let s;
        try {
            s = Ds(i, {
                type: "array"
            });
        } catch  {
            return;
        }
        const f = Rr(s, "theme/theme/theme1.xml", true);
        if (f) {
            return bf(f, r);
        }
    }
}
function sx(e) {
    return e.read_shift(4);
}
function fx(e) {
    const t = {};
    t.xclrType = e.read_shift(2);
    t.nTintShade = e.read_shift(2);
    switch(t.xclrType){
        case 0:
            e.l += 4;
            break;
        case 1:
            t.xclrValue = cx(e, 4);
            break;
        case 2:
            t.xclrValue = xf(e);
            break;
        case 3:
            t.xclrValue = sx(e);
            break;
        case 4:
            e.l += 4;
            break;
    }
    e.l += 8;
    return t;
}
function cx(e, t) {
    return kr(e, t);
}
function ox(e, t) {
    return kr(e, t);
}
function lx(e) {
    const t = e.read_shift(2);
    const r = e.read_shift(2) - 4;
    const a = [
        t
    ];
    switch(t){
        case 4:
        case 5:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 13:
            a[1] = fx(e);
            break;
        case 6:
            a[1] = ox(e, r);
            break;
        case 14:
        case 15:
            a[1] = e.read_shift(r === 1 ? 1 : 2);
            break;
        default:
            throw new Error(`Unrecognized ExtProp type: ${t} ${r}`);
    }
    return a;
}
function ux(e, t) {
    const r = e.l + t;
    e.l += 2;
    const a = e.read_shift(2);
    e.l += 2;
    for(var n = e.read_shift(2), ext = []; n-- > 0;){
        ext.push(lx(e, r - e.l));
    }
    return {
        ixfe: a,
        ext
    };
}
function hx(e, ext) {
    ext.forEach((r)=>{
        r[0];
    });
}
function xx(e, t) {
    return {
        flags: e.read_shift(4),
        version: e.read_shift(4),
        name: wr(e)
    };
}
function dx(e) {
    const t = G(12 + 2 * e.name.length);
    t.write_shift(4, e.flags);
    t.write_shift(4, e.version);
    or(e.name, t);
    return t.slice(0, t.l);
}
function vx(e) {
    const t = [];
    for(let r = e.read_shift(4); r-- > 0;){
        t.push([
            e.read_shift(4),
            e.read_shift(4)
        ]);
    }
    return t;
}
function px(e) {
    const t = G(4 + 8 * e.length);
    t.write_shift(4, e.length);
    for(let r = 0; r < e.length; ++r){
        t.write_shift(4, e[r][0]);
        t.write_shift(4, e[r][1]);
    }
    return t;
}
function mx(e, t) {
    const r = G(8 + 2 * t.length);
    r.write_shift(4, e);
    or(t, r);
    return r.slice(0, r.l);
}
function gx(e) {
    e.l += 4;
    return e.read_shift(4) != 0;
}
function _x(e, t) {
    const r = G(8);
    r.write_shift(4, e);
    r.write_shift(4, 1);
    return r;
}
function wx(e, t, r) {
    const a = {
        Types: [],
        Cell: [],
        Value: []
    };
    const n = r || {};
    const i = [];
    let s = false;
    let f = 2;
    dt(e, (c, o, l)=>{
        switch(l){
            case 335:
                a.Types.push({
                    name: c.name
                });
                break;
            case 51:
                c.forEach((u)=>{
                    if (f == 1) {
                        a.Cell.push({
                            type: a.Types[u[0] - 1].name,
                            index: u[1]
                        });
                    } else if (f == 0) {
                        a.Value.push({
                            type: a.Types[u[0] - 1].name,
                            index: u[1]
                        });
                    }
                });
                break;
            case 337:
                f = c ? 1 : 0;
                break;
            case 338:
                f = 2;
                break;
            case 35:
                i.push(l);
                s = true;
                break;
            case 36:
                i.pop();
                s = false;
                break;
            default:
                if (!o.T) {
                    if (!s || n.WTF && i[i.length - 1] != 35) {
                        throw new Error(`Unexpected record 0x${l.toString(16)}`);
                    }
                }
        }
    });
    return a;
}
function kx() {
    const e = Cr();
    j(e, 332);
    j(e, 334, Jr(1));
    j(e, 335, dx({
        name: "XLDAPR",
        version: 120000,
        flags: 3496657072
    }));
    j(e, 336);
    j(e, 339, mx(1, "XLDAPR"));
    j(e, 52);
    j(e, 35, Jr(514));
    j(e, 4096, Jr(0));
    j(e, 4097, Xr(1));
    j(e, 36);
    j(e, 53);
    j(e, 340);
    j(e, 337, _x(1));
    j(e, 51, px([
        [
            1,
            0
        ]
    ]));
    j(e, 338);
    j(e, 333);
    return e.end();
}
function Ex(e, t, r) {
    const a = {
        Types: [],
        Cell: [],
        Value: []
    };
    if (!e) {
        return a;
    }
    let n = false;
    let i = 2;
    let s;
    e.replace(Er, (f)=>{
        const c = me(f);
        switch(it(c[0])){
            case "<?xml":
                break;
            case "<metadata":
            case "</metadata>":
                break;
            case "<metadataTypes":
            case "</metadataTypes>":
                break;
            case "<metadataType":
                a.Types.push({
                    name: c.name
                });
                break;
            case "</metadataType>":
                break;
            case "<futureMetadata":
                for(let o = 0; o < a.Types.length; ++o){
                    if (a.Types[o].name == c.name) {
                        s = a.Types[o];
                    }
                }
                break;
            case "</futureMetadata>":
                break;
            case "<bk>":
                break;
            case "</bk>":
                break;
            case "<rc":
                if (i == 1) {
                    a.Cell.push({
                        type: a.Types[c.t - 1].name,
                        index: +c.v
                    });
                } else if (i == 0) {
                    a.Value.push({
                        type: a.Types[c.t - 1].name,
                        index: +c.v
                    });
                }
                break;
            case "</rc>":
                break;
            case "<cellMetadata":
                i = 1;
                break;
            case "</cellMetadata>":
                i = 2;
                break;
            case "<valueMetadata":
                i = 0;
                break;
            case "</valueMetadata>":
                i = 2;
                break;
            case "<extLst":
            case "<extLst>":
            case "</extLst>":
            case "<extLst/>":
                break;
            case "<ext":
                n = true;
                break;
            case "</ext>":
                n = false;
                break;
            case "<rvb":
                if (!s) {
                    break;
                }
                if (!s.offsets) {
                    s.offsets = [];
                }
                s.offsets.push(+c.i);
                break;
            default:
                if (!n && r.WTF) {
                    throw new Error(`unrecognized ${c[0]} in metadata`);
                }
        }
        return f;
    });
    return a;
}
function Pf() {
    const e = [
        Qe
    ];
    e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`);
    return e.join("");
}
function Tx(e) {
    const t = [];
    if (!e) {
        return t;
    }
    let r = 1;
    (e.match(Er) || []).forEach((a)=>{
        const n = me(a);
        switch(n[0]){
            case "<?xml":
                break;
            case "<calcChain":
            case "<calcChain>":
            case "</calcChain>":
                break;
            case "<c":
                delete n[0];
                if (n.i) {
                    r = n.i;
                } else {
                    n.i = r;
                }
                t.push(n);
                break;
        }
    });
    return t;
}
function Sx(e) {
    const t = {};
    t.i = e.read_shift(4);
    const r = {};
    r.r = e.read_shift(4);
    r.c = e.read_shift(4);
    t.r = encode_cell(r);
    const a = e.read_shift(1);
    if (a & 2) {
        t.l = "1";
    }
    if (a & 8) {
        t.a = "1";
    }
    return t;
}
function Fx(e, t, r) {
    const a = [];
    dt(e, (i, s, f)=>{
        switch(f){
            case 63:
                a.push(i);
                break;
            default:
                if (!s.T) {
                    throw new Error(`Unexpected record 0x${f.toString(16)}`);
                }
        }
    });
    return a;
}
function yx(e, t, r, a) {
    if (!e) {
        return e;
    }
    const n = a || {};
    let i = false;
    dt(e, (f, c, o)=>{
        switch(o){
            case 359:
            case 363:
            case 364:
            case 366:
            case 367:
            case 368:
            case 369:
            case 370:
            case 371:
            case 472:
            case 577:
            case 578:
            case 579:
            case 580:
            case 581:
            case 582:
            case 583:
            case 584:
            case 585:
            case 586:
            case 587:
                break;
            case 35:
                i = true;
                break;
            case 36:
                i = false;
                break;
            default:
                if (!c.T) {
                    if (!i || n.WTF) {
                        throw new Error(`Unexpected record 0x${o.toString(16)}`);
                    }
                }
        }
    }, n);
}
function Ax(e, t) {
    if (!e) {
        return "??";
    }
    const r = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || [
        "",
        ""
    ])[1];
    return t["!id"][r].Target;
}
let ta = 1024;
function Lf(e, t) {
    const r = [
        21600,
        21600
    ];
    const path = [
        "m0,0l0",
        r[1],
        r[0],
        r[1],
        r[0],
        "0xe"
    ].join(",");
    let n = [
        ae("xml", null, {
            "xmlns:v": Or.v,
            "xmlns:o": Or.o,
            "xmlns:x": Or.x,
            "xmlns:mv": Or.mv
        }).replace(/\/>/, ">"),
        ae("o:shapelayout", ae("o:idmap", null, {
            "v:ext": "edit",
            data: e
        }), {
            "v:ext": "edit"
        }),
        ae("v:shapetype", [
            ae("v:stroke", null, {
                joinstyle: "miter"
            }),
            ae("v:path", null, {
                gradientshapeok: "t",
                "o:connecttype": "rect"
            })
        ].join(""), {
            id: "_x0000_t202",
            "o:spt": 202,
            coordsize: r.join(","),
            path
        })
    ];
    while(ta < e * 1000){
        ta += 1000;
    }
    t.forEach((i)=>{
        const s = decode_cell(i[0]);
        const f = {
            color2: "#BEFF82",
            type: "gradient"
        };
        if (f.type == "gradient") {
            f.angle = "-180";
        }
        const c = f.type == "gradient" ? ae("o:fill", null, {
            type: "gradientUnscaled",
            "v:ext": "view"
        }) : null;
        const o = ae("v:fill", c, f);
        const l = {
            on: "t",
            obscured: "t"
        };
        ++ta;
        n = n.concat([
            `<v:shape${Pa({
                id: `_x0000_s${ta}`,
                type: "#_x0000_t202",
                style: `position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10${i[1].hidden ? ";visibility:hidden" : ""}`,
                fillcolor: "#ECFAD4",
                strokecolor: "#edeaa1"
            })}>`,
            o,
            ae("v:shadow", null, l),
            ae("v:path", null, {
                "o:connecttype": "none"
            }),
            '<v:textbox><div style="text-align:left"></div></v:textbox>',
            '<x:ClientData ObjectType="Note">',
            "<x:MoveWithCells/>",
            "<x:SizeWithCells/>",
            hr("x:Anchor", [
                s.c + 1,
                0,
                s.r + 1,
                0,
                s.c + 3,
                20,
                s.r + 5,
                20
            ].join(",")),
            hr("x:AutoFill", "False"),
            hr("x:Row", String(s.r)),
            hr("x:Column", String(s.c)),
            i[1].hidden ? "" : "<x:Visible/>",
            "</x:ClientData>",
            "</v:shape>"
        ]);
    });
    n.push("</xml>");
    return n.join("");
}
function Ji(e, t, r, a) {
    const n = Array.isArray(e);
    let i;
    t.forEach((s)=>{
        const f = decode_cell(s.ref);
        if (n) {
            if (!e[f.r]) {
                e[f.r] = [];
            }
            i = e[f.r][f.c];
        } else {
            i = e[s.ref];
        }
        if (!i) {
            i = {
                t: "z"
            };
            if (n) {
                e[f.r][f.c] = i;
            } else {
                e[s.ref] = i;
            }
            const c = Ae(e["!ref"] || "BDWGO1000001:A1");
            if (c.s.r > f.r) {
                c.s.r = f.r;
            }
            if (c.e.r < f.r) {
                c.e.r = f.r;
            }
            if (c.s.c > f.c) {
                c.s.c = f.c;
            }
            if (c.e.c < f.c) {
                c.e.c = f.c;
            }
            const o = encode_range(c);
            if (o !== e["!ref"]) {
                e["!ref"] = o;
            }
        }
        if (!i.c) {
            i.c = [];
        }
        const l = {
            a: s.author,
            t: s.t,
            r: s.r,
            T: r
        };
        if (s.h) {
            l.h = s.h;
        }
        for(var u = i.c.length - 1; u >= 0; --u){
            if (!r && i.c[u].T) {
                return;
            }
            if (r && !i.c[u].T) {
                i.c.splice(u, 1);
            }
        }
        if (r && a) {
            for(u = 0; u < a.length; ++u){
                if (l.a == a[u].id) {
                    l.a = a[u].name || l.a;
                    break;
                }
            }
        }
        i.c.push(l);
    });
}
function Cx(e, t) {
    if (e.match(/<(?:\w+:)?comments *\/>/)) {
        return [];
    }
    const r = [];
    const a = [];
    const n = e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
    if (n && n[1]) {
        n[1].split(/<\/\w*:?author>/).forEach((s)=>{
            if (!(s === "" || s.trim() === "")) {
                const f = s.match(/<(?:\w+:)?author[^>]*>(.*)/);
                if (f) {
                    r.push(f[1]);
                }
            }
        });
    }
    const i = e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
    if (i && i[1]) {
        i[1].split(/<\/\w*:?comment>/).forEach((s)=>{
            if (!(s === "" || s.trim() === "")) {
                const f = s.match(/<(?:\w+:)?comment[^>]*>/);
                if (f) {
                    const c = me(f[0]);
                    const o = {
                        author: c.authorId && r[c.authorId] || "sheetjsghost",
                        ref: c.ref,
                        guid: c.guid
                    };
                    const l = decode_cell(c.ref);
                    if (!(t.sheetRows && t.sheetRows <= l.r)) {
                        const u = s.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/);
                        const x = !!u && !!u[1] && Bn(u[1]) || {
                            r: "",
                            t: "",
                            h: ""
                        };
                        o.r = x.r;
                        if (x.r == "<t></t>") {
                            x.t = x.h = "";
                        }
                        o.t = (x.t || "").replace(/\r\n/g, `
`).replace(/\r/g, `
`);
                        if (t.cellHTML) {
                            o.h = x.h;
                        }
                        a.push(o);
                    }
                }
            }
        });
    }
    return a;
}
function Bf(e) {
    const t = [
        Qe,
        ae("comments", null, {
            xmlns: zt[0]
        })
    ];
    const r = [];
    t.push("<authors>");
    e.forEach((a)=>{
        a[1].forEach((n)=>{
            const i = be(n.a);
            if (r.indexOf(i) == -1) {
                r.push(i);
                t.push(`<author>${i}</author>`);
            }
            if (n.T && n.ID && r.indexOf(`tc=${n.ID}`) == -1) {
                r.push(`tc=${n.ID}`);
                t.push(`<author>tc=${n.ID}</author>`);
            }
        });
    });
    if (r.length == 0) {
        r.push("SheetJ5");
        t.push("<author>SheetJ5</author>");
    }
    t.push("</authors>");
    t.push("<commentList>");
    e.forEach((a)=>{
        let n = 0;
        const i = [];
        if (a[1][0] && a[1][0].T && a[1][0].ID) {
            n = r.indexOf(`tc=${a[1][0].ID}`);
        } else {
            a[1].forEach((c)=>{
                if (c.a) {
                    n = r.indexOf(be(c.a));
                }
                i.push(c.t || "");
            });
        }
        t.push(`<comment ref="${a[0]}" authorId="${n}"><text>`);
        if (i.length <= 1) {
            t.push(hr("t", be(i[0] || "")));
        } else {
            let s = `Comment:
    ` + i[0] + `
`;
            for(let f = 1; f < i.length; ++f){
                s += `Reply:
    ` + i[f] + `
`;
            }
            t.push(hr("t", be(s)));
        }
        t.push("</text></comment>");
    });
    t.push("</commentList>");
    if (t.length > 2) {
        t[t.length] = "</comments>";
        t[1] = t[1].replace("/>", ">");
    }
    return t.join("");
}
function Dx(e, t) {
    const r = [];
    let a = false;
    let n = {};
    let i = 0;
    e.replace(Er, (f, c)=>{
        const o = me(f);
        switch(it(o[0])){
            case "<?xml":
                break;
            case "<ThreadedComments":
                break;
            case "</ThreadedComments>":
                break;
            case "<threadedComment":
                n = {
                    author: o.personId,
                    guid: o.id,
                    ref: o.ref,
                    T: 1
                };
                break;
            case "</threadedComment>":
                if (n.t != null) {
                    r.push(n);
                }
                break;
            case "<text>":
            case "<text":
                i = c + f.length;
                break;
            case "</text>":
                n.t = e.slice(i, c).replace(/\r\n/g, `
`).replace(/\r/g, `
`);
                break;
            case "<mentions":
            case "<mentions>":
                a = true;
                break;
            case "</mentions>":
                a = false;
                break;
            case "<extLst":
            case "<extLst>":
            case "</extLst>":
            case "<extLst/>":
                break;
            case "<ext":
                a = true;
                break;
            case "</ext>":
                a = false;
                break;
            default:
                if (!a && t.WTF) {
                    throw new Error(`unrecognized ${o[0]} in threaded comments`);
                }
        }
        return f;
    });
    return r;
}
function Ox(e, t, r) {
    const a = [
        Qe,
        ae("ThreadedComments", null, {
            xmlns: nr.TCMNT
        }).replace(/[\/]>/, ">")
    ];
    e.forEach((n)=>{
        let i = "";
        (n[1] || []).forEach((s, f)=>{
            if (!s.T) {
                delete s.ID;
                return;
            }
            if (s.a && t.indexOf(s.a) == -1) {
                t.push(s.a);
            }
            const c = {
                ref: n[0],
                id: `{54EE7951-7262-4200-6969-${`000000000000${r.tcid++}`.slice(-12)}}`
            };
            if (f == 0) {
                i = c.id;
            } else {
                c.parentId = i;
            }
            s.ID = c.id;
            if (s.a) {
                c.personId = `{54EE7950-7262-4200-6969-${`000000000000${t.indexOf(s.a)}`.slice(-12)}}`;
            }
            a.push(ae("threadedComment", hr("text", s.t || ""), c));
        });
    });
    a.push("</ThreadedComments>");
    return a.join("");
}
function Ix(e, t) {
    const r = [];
    let a = false;
    e.replace(Er, (i)=>{
        const s = me(i);
        switch(it(s[0])){
            case "<?xml":
                break;
            case "<personList":
                break;
            case "</personList>":
                break;
            case "<person":
                r.push({
                    name: s.displayname,
                    id: s.id
                });
                break;
            case "</person>":
                break;
            case "<extLst":
            case "<extLst>":
            case "</extLst>":
            case "<extLst/>":
                break;
            case "<ext":
                a = true;
                break;
            case "</ext>":
                a = false;
                break;
            default:
                if (!a && t.WTF) {
                    throw new Error(`unrecognized ${s[0]} in threaded comments`);
                }
        }
        return i;
    });
    return r;
}
function Rx(e) {
    const t = [
        Qe,
        ae("personList", null, {
            xmlns: nr.TCMNT,
            "xmlns:x": zt[0]
        }).replace(/[\/]>/, ">")
    ];
    e.forEach((r, a)=>{
        t.push(ae("person", null, {
            displayName: r,
            id: `{54EE7950-7262-4200-6969-${`000000000000${a}`.slice(-12)}}`,
            userId: r,
            providerId: "None"
        }));
    });
    t.push("</personList>");
    return t.join("");
}
function Nx(e) {
    const t = {};
    t.iauthor = e.read_shift(4);
    const r = jt(e);
    t.rfx = r.s;
    t.ref = encode_cell(r.s);
    e.l += 16;
    return t;
}
function bx(e, t) {
    if (t == null) {
        t = G(36);
    }
    t.write_shift(4, e[1].iauthor);
    xa(e[0], t);
    t.write_shift(4, 0);
    t.write_shift(4, 0);
    t.write_shift(4, 0);
    t.write_shift(4, 0);
    return t;
}
const Px = wr;
function Lx(e) {
    return or(e.slice(0, 54));
}
function Bx(e, t) {
    const r = [];
    const a = [];
    let n = {};
    let i = false;
    dt(e, (f, c, o)=>{
        switch(o){
            case 632:
                a.push(f);
                break;
            case 635:
                n = f;
                break;
            case 637:
                n.t = f.t;
                n.h = f.h;
                n.r = f.r;
                break;
            case 636:
                n.author = a[n.iauthor];
                delete n.iauthor;
                if (t.sheetRows && n.rfx && t.sheetRows <= n.rfx.r) {
                    break;
                }
                if (!n.t) {
                    n.t = "";
                }
                delete n.rfx;
                r.push(n);
                break;
            case 3072:
                break;
            case 35:
                i = true;
                break;
            case 36:
                i = false;
                break;
            case 37:
                break;
            case 38:
                break;
            default:
                if (!c.T) {
                    if (!i || t.WTF) {
                        throw new Error(`Unexpected record 0x${o.toString(16)}`);
                    }
                }
        }
    });
    return r;
}
function Mx(e) {
    const t = Cr();
    const r = [];
    j(t, 628);
    j(t, 630);
    e.forEach((a)=>{
        a[1].forEach((n)=>{
            if (!(r.indexOf(n.a) > -1)) {
                r.push(n.a.slice(0, 54));
                j(t, 632, Lx(n.a));
            }
        });
    });
    j(t, 631);
    j(t, 633);
    e.forEach((a)=>{
        a[1].forEach((n)=>{
            n.iauthor = r.indexOf(n.a);
            const i = {
                s: decode_cell(a[0]),
                e: decode_cell(a[0])
            };
            j(t, 635, bx([
                i,
                n
            ]));
            if (n.t && n.t.length > 0) {
                j(t, 637, sl(n));
            }
            j(t, 636);
            delete n.iauthor;
        });
    });
    j(t, 634);
    j(t, 629);
    return t.end();
}
const Ux = "application/vnd.ms-office.vbaProject";
function Wx(e) {
    const t = CFB.utils.cfb_new({
        root: "R"
    });
    e.FullPaths.forEach((r, a)=>{
        if (!(r.slice(-1) === "/" || !r.match(/_VBA_PROJECT_CUR/))) {
            const n = r.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
            CFB.utils.cfb_add(t, n, e.FileIndex[a].content);
        }
    });
    return CFB.write(t);
}
function Hx(e, t) {
    t.FullPaths.forEach((r, a)=>{
        if (a != 0) {
            const n = r.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
            if (n.slice(-1) !== "/") {
                CFB.utils.cfb_add(e, n, t.FileIndex[a].content);
            }
        }
    });
}
const Mf = [
    "xlsb",
    "xlsm",
    "xlam",
    "biff8",
    "xla"
];
function Vx() {
    return {
        "!type": "dialog"
    };
}
function Xx() {
    return {
        "!type": "dialog"
    };
}
function Gx() {
    return {
        "!type": "macro"
    };
}
function zx() {
    return {
        "!type": "macro"
    };
}
var ia = (()=>{
    const e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g;
    let t = {
        r: 0,
        c: 0
    };
    function r(a, n, i, s) {
        let f = false;
        let c = false;
        if (i.length == 0) {
            c = true;
        } else if (i.charAt(0) == "[") {
            c = true;
            i = i.slice(1, -1);
        }
        if (s.length == 0) {
            f = true;
        } else if (s.charAt(0) == "[") {
            f = true;
            s = s.slice(1, -1);
        }
        let o = i.length > 0 ? parseInt(i, 10) | 0 : 0;
        let l = s.length > 0 ? parseInt(s, 10) | 0 : 0;
        if (f) {
            l += t.c;
        } else {
            --l;
        }
        if (c) {
            o += t.r;
        } else {
            --o;
        }
        return n + (f ? "" : "$") + encode_col(l) + (c ? "" : "$") + encode_row(o);
    }
    return (n, i)=>{
        t = i;
        return n.replace(e, r);
    };
})();
var Hn = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g;
var Vn = (t, r)=>t.replace(Hn, (a, n, i, s, f, c)=>{
        const o = decode_col(s) - (i ? 0 : r.c);
        const l = decode_row(c) - (f ? 0 : r.r);
        const u = l == 0 ? "" : f ? l + 1 : `[${l}]`;
        const x = o == 0 ? "" : i ? o + 1 : `[${o}]`;
        return `${n}R${u}C${x}`;
    });
function Uf(e, t) {
    return e.replace(Hn, (r, a, n, i, s, f)=>a + (n == "$" ? n + i : encode_col(decode_col(i) + t.c)) + (s == "$" ? s + f : encode_row(decode_row(f) + t.r)));
}
function $x(e, t, r) {
    const a = decode_range(t);
    const n = a.s;
    const i = decode_cell(r);
    const s = {
        r: i.r - n.r,
        c: i.c - n.c
    };
    return Uf(e, s);
}
function Kx(e) {
    return e.length != 1;
}
function Zi(e) {
    return e.replace(/_xlfn\./g, "");
}
function er(e) {
    e.l += 1;
}
function Ft(e, t) {
    const r = e.read_shift(2);
    return [
        r & 16383,
        r >> 14 & 1,
        r >> 15 & 1
    ];
}
function Wf(e, t, r) {
    let a = 2;
    if (r) {
        if (r.biff >= 2 && r.biff <= 5) {
            return Hf(e);
        }
        if (r.biff == 12) {
            a = 4;
        }
    }
    const n = e.read_shift(a);
    const i = e.read_shift(a);
    const s = Ft(e);
    const f = Ft(e);
    return {
        s: {
            r: n,
            c: s[0],
            cRel: s[1],
            rRel: s[2]
        },
        e: {
            r: i,
            c: f[0],
            cRel: f[1],
            rRel: f[2]
        }
    };
}
function Hf(e) {
    const t = Ft(e);
    const r = Ft(e);
    const a = e.read_shift(1);
    const n = e.read_shift(1);
    return {
        s: {
            r: t[0],
            c: a,
            cRel: t[1],
            rRel: t[2]
        },
        e: {
            r: r[0],
            c: n,
            cRel: r[1],
            rRel: r[2]
        }
    };
}
function Yx(e, t, r) {
    if (r.biff < 8) {
        return Hf(e);
    }
    const a = e.read_shift(r.biff == 12 ? 4 : 2);
    const n = e.read_shift(r.biff == 12 ? 4 : 2);
    const i = Ft(e);
    const s = Ft(e);
    return {
        s: {
            r: a,
            c: i[0],
            cRel: i[1],
            rRel: i[2]
        },
        e: {
            r: n,
            c: s[0],
            cRel: s[1],
            rRel: s[2]
        }
    };
}
function Vf(e, t, r) {
    if (r && r.biff >= 2 && r.biff <= 5) {
        return jx(e);
    }
    const a = e.read_shift(r && r.biff == 12 ? 4 : 2);
    const n = Ft(e);
    return {
        r: a,
        c: n[0],
        cRel: n[1],
        rRel: n[2]
    };
}
function jx(e) {
    const t = Ft(e);
    const r = e.read_shift(1);
    return {
        r: t[0],
        c: r,
        cRel: t[1],
        rRel: t[2]
    };
}
function Jx(e) {
    const t = e.read_shift(2);
    const r = e.read_shift(2);
    return {
        r: t,
        c: r & 255,
        fQuoted: !!(r & 16384),
        cRel: r >> 15,
        rRel: r >> 15
    };
}
function Zx(e, t, r) {
    const a = r && r.biff ? r.biff : 8;
    if (a >= 2 && a <= 5) {
        return qx(e);
    }
    let n = e.read_shift(a >= 12 ? 4 : 2);
    let i = e.read_shift(2);
    const s = (i & 16384) >> 14;
    const f = (i & 32768) >> 15;
    i &= 16383;
    if (f == 1) {
        while(n > 524287){
            n -= 1048576;
        }
    }
    if (s == 1) {
        while(i > 8191){
            i = i - 16384;
        }
    }
    return {
        r: n,
        c: i,
        cRel: s,
        rRel: f
    };
}
function qx(e) {
    let t = e.read_shift(2);
    let r = e.read_shift(1);
    const a = (t & 32768) >> 15;
    const n = (t & 16384) >> 14;
    t &= 16383;
    if (a == 1 && t >= 8192) {
        t = t - 16384;
    }
    if (n == 1 && r >= 128) {
        r = r - 256;
    }
    return {
        r: t,
        c: r,
        cRel: n,
        rRel: a
    };
}
function Qx(e, t, r) {
    const a = (e[e.l++] & 96) >> 5;
    const n = Wf(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
    return [
        a,
        n
    ];
}
function ed(e, t, r) {
    const a = (e[e.l++] & 96) >> 5;
    const n = e.read_shift(2, "i");
    let i = 8;
    if (r) {
        switch(r.biff){
            case 5:
                e.l += 12;
                i = 6;
                break;
            case 12:
                i = 12;
                break;
        }
    }
    const s = Wf(e, i, r);
    return [
        a,
        n,
        s
    ];
}
function rd(e, t, r) {
    const a = (e[e.l++] & 96) >> 5;
    e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8;
    return [
        a
    ];
}
function td(e, t, r) {
    const a = (e[e.l++] & 96) >> 5;
    const n = e.read_shift(2);
    let i = 8;
    if (r) {
        switch(r.biff){
            case 5:
                e.l += 12;
                i = 6;
                break;
            case 12:
                i = 12;
                break;
        }
    }
    e.l += i;
    return [
        a,
        n
    ];
}
function ad(e, t, r) {
    const a = (e[e.l++] & 96) >> 5;
    const n = Yx(e, t - 1, r);
    return [
        a,
        n
    ];
}
function nd(e, t, r) {
    const a = (e[e.l++] & 96) >> 5;
    e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7;
    return [
        a
    ];
}
function qi(e) {
    const t = e[e.l + 1] & 1;
    const r = 1;
    e.l += 4;
    return [
        t,
        r
    ];
}
function id(e, t, r) {
    e.l += 2;
    for(var a = e.read_shift(r && r.biff == 2 ? 1 : 2), n = [], i = 0; i <= a; ++i){
        n.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
    }
    return n;
}
function sd(e, t, r) {
    const a = e[e.l + 1] & 255 ? 1 : 0;
    e.l += 2;
    return [
        a,
        e.read_shift(r && r.biff == 2 ? 1 : 2)
    ];
}
function fd(e, t, r) {
    const a = e[e.l + 1] & 255 ? 1 : 0;
    e.l += 2;
    return [
        a,
        e.read_shift(r && r.biff == 2 ? 1 : 2)
    ];
}
function cd(e) {
    const t = e[e.l + 1] & 255 ? 1 : 0;
    e.l += 2;
    return [
        t,
        e.read_shift(2)
    ];
}
function od(e, t, r) {
    const a = e[e.l + 1] & 255 ? 1 : 0;
    e.l += r && r.biff == 2 ? 3 : 4;
    return [
        a
    ];
}
function Xf(e) {
    const t = e.read_shift(1);
    const r = e.read_shift(1);
    return [
        t,
        r
    ];
}
function ld(e) {
    e.read_shift(2);
    return Xf(e);
}
function ud(e) {
    e.read_shift(2);
    return Xf(e);
}
function hd(e, t, r) {
    const a = (e[e.l] & 96) >> 5;
    e.l += 1;
    const n = Vf(e, 0, r);
    return [
        a,
        n
    ];
}
function xd(e, t, r) {
    const a = (e[e.l] & 96) >> 5;
    e.l += 1;
    const n = Zx(e, 0, r);
    return [
        a,
        n
    ];
}
function dd(e, t, r) {
    const a = (e[e.l] & 96) >> 5;
    e.l += 1;
    const n = e.read_shift(2);
    if (r && r.biff == 5) {
        e.l += 12;
    }
    const i = Vf(e, 0, r);
    return [
        a,
        n,
        i
    ];
}
function vd(e, t, r) {
    const a = (e[e.l] & 96) >> 5;
    e.l += 1;
    const n = e.read_shift(r && r.biff <= 3 ? 1 : 2);
    return [
        gv[n],
        $f[n],
        a
    ];
}
function pd(e, t, r) {
    const a = e[e.l++];
    const n = e.read_shift(1);
    const i = r && r.biff <= 3 ? [
        a == 88 ? -1 : 0,
        e.read_shift(1)
    ] : md(e);
    return [
        n,
        (i[0] === 0 ? $f : mv)[i[1]]
    ];
}
function md(e) {
    return [
        e[e.l + 1] >> 7,
        e.read_shift(2) & 32767
    ];
}
function gd(e, t, r) {
    e.l += r && r.biff == 2 ? 3 : 4;
}
function _d(e, t, r) {
    e.l++;
    if (r && r.biff == 12) {
        return [
            e.read_shift(4, "i"),
            0
        ];
    }
    const a = e.read_shift(2);
    const n = e.read_shift(r && r.biff == 2 ? 1 : 2);
    return [
        a,
        n
    ];
}
function wd(e) {
    e.l++;
    return vt[e.read_shift(1)];
}
function kd(e) {
    e.l++;
    return e.read_shift(2);
}
function Ed(e) {
    e.l++;
    return e.read_shift(1) !== 0;
}
function Td(e) {
    e.l++;
    return gr(e);
}
function Sd(e, t, r) {
    e.l++;
    return Ya(e, t - 1, r);
}
function Fd(e, biff) {
    const r = [
        e.read_shift(1)
    ];
    if (biff == 12) {
        switch(r[0]){
            case 2:
                r[0] = 4;
                break;
            case 4:
                r[0] = 16;
                break;
            case 0:
                r[0] = 1;
                break;
            case 1:
                r[0] = 2;
                break;
        }
    }
    switch(r[0]){
        case 4:
            r[1] = qe(e, 1) ? "TRUE" : "FALSE";
            if (biff != 12) {
                e.l += 7;
            }
            break;
        case 37:
        case 16:
            r[1] = vt[e[e.l]];
            e.l += biff == 12 ? 4 : 8;
            break;
        case 0:
            e.l += 8;
            break;
        case 1:
            r[1] = gr(e);
            break;
        case 2:
            r[1] = Jt(e, 0, {
                biff: biff > 0 && biff < 8 ? 2 : biff
            });
            break;
        default:
            throw new Error(`Bad SerAr: ${r[0]}`);
    }
    return r;
}
function yd(e, t, r) {
    for(var a = e.read_shift(r.biff == 12 ? 4 : 2), n = [], i = 0; i != a; ++i){
        n.push((r.biff == 12 ? jt : O0)(e));
    }
    return n;
}
function Ad(e, t, r) {
    let a = 0;
    let n = 0;
    if (r.biff == 12) {
        a = e.read_shift(4);
        n = e.read_shift(4);
    } else {
        n = 1 + e.read_shift(1);
        a = 1 + e.read_shift(2);
    }
    r.biff >= 2 && r.biff < 8 && (--a, --n == 0 && (n = 256));
    for(var i = 0, s = []; i != a && (s[i] = []); ++i){
        for(let f = 0; f != n; ++f){
            s[i][f] = Fd(e, r.biff);
        }
    }
    return s;
}
function Cd(e, t, r) {
    const a = e.read_shift(1) >>> 5 & 3;
    const n = !r || r.biff >= 8 ? 4 : 2;
    const i = e.read_shift(n);
    switch(r.biff){
        case 2:
            e.l += 5;
            break;
        case 3:
        case 4:
            e.l += 8;
            break;
        case 5:
            e.l += 12;
            break;
    }
    return [
        a,
        0,
        i
    ];
}
function Dd(e, t, r) {
    if (r.biff == 5) {
        return Od(e);
    }
    const a = e.read_shift(1) >>> 5 & 3;
    const n = e.read_shift(2);
    const i = e.read_shift(4);
    return [
        a,
        n,
        i
    ];
}
function Od(e) {
    const t = e.read_shift(1) >>> 5 & 3;
    const r = e.read_shift(2, "i");
    e.l += 8;
    const a = e.read_shift(2);
    e.l += 12;
    return [
        t,
        r,
        a
    ];
}
function Id(e, t, r) {
    const a = e.read_shift(1) >>> 5 & 3;
    e.l += r && r.biff == 2 ? 3 : 4;
    const n = e.read_shift(r && r.biff == 2 ? 1 : 2);
    return [
        a,
        n
    ];
}
function Rd(e, t, r) {
    const a = e.read_shift(1) >>> 5 & 3;
    const n = e.read_shift(r && r.biff == 2 ? 1 : 2);
    return [
        a,
        n
    ];
}
function Nd(e, t, r) {
    const a = e.read_shift(1) >>> 5 & 3;
    e.l += 4;
    r.biff < 8 && e.l--;
    if (r.biff == 12) {
        e.l += 2;
    }
    return [
        a
    ];
}
function bd(e, t, r) {
    const a = (e[e.l++] & 96) >> 5;
    const n = e.read_shift(2);
    let i = 4;
    if (r) {
        switch(r.biff){
            case 5:
                i = 15;
                break;
            case 12:
                i = 6;
                break;
        }
    }
    e.l += i;
    return [
        a,
        n
    ];
}
const Pd = kr;
const Ld = kr;
const Bd = kr;
function Ja(e, t, r) {
    e.l += 2;
    return [
        Jx(e)
    ];
}
function Xn(e) {
    e.l += 6;
    return [];
}
const Md = Ja;
const Ud = Xn;
const Wd = Xn;
const Hd = Ja;
function Gf(e) {
    e.l += 2;
    return [
        tr(e),
        e.read_shift(2) & 1
    ];
}
const Vd = Ja;
const Xd = Gf;
const Gd = Xn;
const zd = Ja;
const $d = Ja;
const Kd = [
    "Data",
    "All",
    "Headers",
    "??",
    "?Data2",
    "??",
    "?DataHeaders",
    "??",
    "Totals",
    "??",
    "??",
    "??",
    "?DataTotals",
    "??",
    "??",
    "??",
    "?Current"
];
function Yd(e) {
    e.l += 2;
    const ixti = e.read_shift(2);
    const r = e.read_shift(2);
    const idx = e.read_shift(4);
    const n = e.read_shift(2);
    const C = e.read_shift(2);
    const rt_1 = Kd[r >> 2 & 31];
    return {
        ixti,
        coltype: r & 3,
        rt: rt_1,
        idx,
        c: n,
        C
    };
}
function jd(e) {
    e.l += 2;
    return [
        e.read_shift(4)
    ];
}
function Jd(e, t, r) {
    e.l += 5;
    e.l += 2;
    e.l += r.biff == 2 ? 1 : 4;
    return [
        "PTGSHEET"
    ];
}
function Zd(e, t, r) {
    e.l += r.biff == 2 ? 4 : 5;
    return [
        "PTGENDSHEET"
    ];
}
function qd(e) {
    const t = e.read_shift(1) >>> 5 & 3;
    const r = e.read_shift(2);
    return [
        t,
        r
    ];
}
function Qd(e) {
    const t = e.read_shift(1) >>> 5 & 3;
    const r = e.read_shift(2);
    return [
        t,
        r
    ];
}
function ev(e) {
    e.l += 4;
    return [
        0,
        0
    ];
}
const Qi = {
    1: {
        n: "PtgExp",
        f: _d
    },
    2: {
        n: "PtgTbl",
        f: Bd
    },
    3: {
        n: "PtgAdd",
        f: er
    },
    4: {
        n: "PtgSub",
        f: er
    },
    5: {
        n: "PtgMul",
        f: er
    },
    6: {
        n: "PtgDiv",
        f: er
    },
    7: {
        n: "PtgPower",
        f: er
    },
    8: {
        n: "PtgConcat",
        f: er
    },
    9: {
        n: "PtgLt",
        f: er
    },
    10: {
        n: "PtgLe",
        f: er
    },
    11: {
        n: "PtgEq",
        f: er
    },
    12: {
        n: "PtgGe",
        f: er
    },
    13: {
        n: "PtgGt",
        f: er
    },
    14: {
        n: "PtgNe",
        f: er
    },
    15: {
        n: "PtgIsect",
        f: er
    },
    16: {
        n: "PtgUnion",
        f: er
    },
    17: {
        n: "PtgRange",
        f: er
    },
    18: {
        n: "PtgUplus",
        f: er
    },
    19: {
        n: "PtgUminus",
        f: er
    },
    20: {
        n: "PtgPercent",
        f: er
    },
    21: {
        n: "PtgParen",
        f: er
    },
    22: {
        n: "PtgMissArg",
        f: er
    },
    23: {
        n: "PtgStr",
        f: Sd
    },
    26: {
        n: "PtgSheet",
        f: Jd
    },
    27: {
        n: "PtgEndSheet",
        f: Zd
    },
    28: {
        n: "PtgErr",
        f: wd
    },
    29: {
        n: "PtgBool",
        f: Ed
    },
    30: {
        n: "PtgInt",
        f: kd
    },
    31: {
        n: "PtgNum",
        f: Td
    },
    32: {
        n: "PtgArray",
        f: nd
    },
    33: {
        n: "PtgFunc",
        f: vd
    },
    34: {
        n: "PtgFuncVar",
        f: pd
    },
    35: {
        n: "PtgName",
        f: Cd
    },
    36: {
        n: "PtgRef",
        f: hd
    },
    37: {
        n: "PtgArea",
        f: Qx
    },
    38: {
        n: "PtgMemArea",
        f: Id
    },
    39: {
        n: "PtgMemErr",
        f: Pd
    },
    40: {
        n: "PtgMemNoMem",
        f: Ld
    },
    41: {
        n: "PtgMemFunc",
        f: Rd
    },
    42: {
        n: "PtgRefErr",
        f: Nd
    },
    43: {
        n: "PtgAreaErr",
        f: rd
    },
    44: {
        n: "PtgRefN",
        f: xd
    },
    45: {
        n: "PtgAreaN",
        f: ad
    },
    46: {
        n: "PtgMemAreaN",
        f: qd
    },
    47: {
        n: "PtgMemNoMemN",
        f: Qd
    },
    57: {
        n: "PtgNameX",
        f: Dd
    },
    58: {
        n: "PtgRef3d",
        f: dd
    },
    59: {
        n: "PtgArea3d",
        f: ed
    },
    60: {
        n: "PtgRefErr3d",
        f: bd
    },
    61: {
        n: "PtgAreaErr3d",
        f: td
    },
    255: {}
};
const rv = {
    64: 32,
    96: 32,
    65: 33,
    97: 33,
    66: 34,
    98: 34,
    67: 35,
    99: 35,
    68: 36,
    100: 36,
    69: 37,
    101: 37,
    70: 38,
    102: 38,
    71: 39,
    103: 39,
    72: 40,
    104: 40,
    73: 41,
    105: 41,
    74: 42,
    106: 42,
    75: 43,
    107: 43,
    76: 44,
    108: 44,
    77: 45,
    109: 45,
    78: 46,
    110: 46,
    79: 47,
    111: 47,
    88: 34,
    120: 34,
    89: 57,
    121: 57,
    90: 58,
    122: 58,
    91: 59,
    123: 59,
    92: 60,
    124: 60,
    93: 61,
    125: 61
};
const tv = {
    1: {
        n: "PtgElfLel",
        f: Gf
    },
    2: {
        n: "PtgElfRw",
        f: zd
    },
    3: {
        n: "PtgElfCol",
        f: Md
    },
    6: {
        n: "PtgElfRwV",
        f: $d
    },
    7: {
        n: "PtgElfColV",
        f: Hd
    },
    10: {
        n: "PtgElfRadical",
        f: Vd
    },
    11: {
        n: "PtgElfRadicalS",
        f: Gd
    },
    13: {
        n: "PtgElfColS",
        f: Ud
    },
    15: {
        n: "PtgElfColSV",
        f: Wd
    },
    16: {
        n: "PtgElfRadicalLel",
        f: Xd
    },
    25: {
        n: "PtgList",
        f: Yd
    },
    29: {
        n: "PtgSxName",
        f: jd
    },
    255: {}
};
const av = {
    0: {
        n: "PtgAttrNoop",
        f: ev
    },
    1: {
        n: "PtgAttrSemi",
        f: od
    },
    2: {
        n: "PtgAttrIf",
        f: fd
    },
    4: {
        n: "PtgAttrChoose",
        f: id
    },
    8: {
        n: "PtgAttrGoto",
        f: sd
    },
    16: {
        n: "PtgAttrSum",
        f: gd
    },
    32: {
        n: "PtgAttrBaxcel",
        f: qi
    },
    33: {
        n: "PtgAttrBaxcel",
        f: qi
    },
    64: {
        n: "PtgAttrSpace",
        f: ld
    },
    65: {
        n: "PtgAttrSpaceSemi",
        f: ud
    },
    128: {
        n: "PtgAttrIfError",
        f: cd
    },
    255: {}
};
function Za(e, t, r, a) {
    if (a.biff < 8) {
        return kr(e, t);
    }
    const n = e.l + t;
    const i = [];
    for(let s = 0; s !== r.length; ++s){
        switch(r[s][0]){
            case "PtgArray":
                r[s][1] = Ad(e, 0, a);
                i.push(r[s][1]);
                break;
            case "PtgMemArea":
                r[s][2] = yd(e, r[s][1], a);
                i.push(r[s][2]);
                break;
            case "PtgExp":
                if (a && a.biff == 12) {
                    r[s][1][1] = e.read_shift(4);
                    i.push(r[s][1]);
                }
                break;
            case "PtgList":
            case "PtgElfRadicalS":
            case "PtgElfColS":
            case "PtgElfColSV":
                throw `Unsupported ${r[s][0]}`;
        }
    }
    t = n - e.l;
    if (t !== 0) {
        i.push(kr(e, t));
    }
    return i;
}
function qa(e, t, r) {
    let n;
    let i;
    for(var a = e.l + t, s = []; a != e.l;){
        t = a - e.l;
        i = e[e.l];
        n = Qi[i] || Qi[rv[i]];
        if (i === 24 || i === 25) {
            n = (i === 24 ? tv : av)[e[e.l + 1]];
        }
        if (!n || !n.f) {
            kr(e, t);
        } else {
            s.push([
                n.n,
                n.f(e, t, r)
            ]);
        }
    }
    return s;
}
function nv(e) {
    const t = [];
    for(let r = 0; r < e.length; ++r){
        for(var a = e[r], n = [], i = 0; i < a.length; ++i){
            const s = a[i];
            if (s) {
                if (s[0] === 2) {
                    n.push(`"${s[1].replace(/"/g, '""')}"`);
                } else {
                    n.push(s[1]);
                }
            } else {
                n.push("");
            }
        }
        t.push(n.join(","));
    }
    return t.join(";");
}
const iv = {
    PtgAdd: "+",
    PtgConcat: "&",
    PtgDiv: "/",
    PtgEq: "=",
    PtgGe: ">=",
    PtgGt: ">",
    PtgLe: "<=",
    PtgLt: "<",
    PtgMul: "*",
    PtgNe: "<>",
    PtgPower: "^",
    PtgSub: "-"
};
function sv(e, t) {
    if (!e && !(t && t.biff <= 5 && t.biff >= 2)) {
        throw new Error("empty sheet name");
    }
    if (/[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e)) {
        return `'${e}'`;
    }
    return e;
}
function zf(e, t, r) {
    if (!e) {
        return "SH33TJSERR0";
    }
    if (r.biff > 8 && (!e.XTI || !e.XTI[t])) {
        return e.SheetNames[t];
    }
    if (!e.XTI) {
        return "SH33TJSERR6";
    }
    const a = e.XTI[t];
    if (r.biff < 8) {
        if (t > 10000) {
            t -= 65536;
        }
        if (t < 0) {
            t = -t;
        }
        if (t == 0) {
            return "";
        }
        return e.XTI[t - 1];
    }
    if (!a) {
        return "SH33TJSERR1";
    }
    let n = "";
    if (r.biff > 8) {
        switch(e[a[0]][0]){
            case 357:
                n = a[1] == -1 ? "#REF" : e.SheetNames[a[1]];
                if (a[1] == a[2]) {
                    return n;
                }
                return `${n}:${e.SheetNames[a[2]]}`;
            case 358:
                if (r.SID != null) {
                    return e.SheetNames[r.SID];
                }
                return `SH33TJSSAME${e[a[0]][0]}`;
            default:
                return `SH33TJSSRC${e[a[0]][0]}`;
        }
    }
    switch(e[a[0]][0][0]){
        case 1025:
            n = a[1] == -1 ? "#REF" : e.SheetNames[a[1]] || "SH33TJSERR3";
            if (a[1] == a[2]) {
                return n;
            }
            return `${n}:${e.SheetNames[a[2]]}`;
        case 14849:
            return e[a[0]].slice(1).map((i)=>i.Name).join(";;");
        default:
            if (e[a[0]][0][3]) {
                n = a[1] == -1 ? "#REF" : e[a[0]][0][3][a[1]] || "SH33TJSERR4";
                if (a[1] == a[2]) {
                    return n;
                }
                return `${n}:${e[a[0]][0][3][a[2]]}`;
            }
            return "SH33TJSERR2";
    }
}
function es(e, t, r) {
    const a = zf(e, t, r);
    if (a == "#REF") {
        return a;
    }
    return sv(a, r);
}
function pr(e, t, s_1, a, n) {
    const i = n && n.biff || 8;
    const s = {
        s: {
            c: 0,
            r: 0
        }
    };
    const f = [];
    let c;
    let o;
    let l;
    let u = 0;
    let x = 0;
    let d;
    let v = "";
    if (!e[0] || !e[0][0]) {
        return "";
    }
    let h = -1;
    let p = "";
    for(let w = 0, y = e[0].length; w < y; ++w){
        let g = e[0][w];
        switch(g[0]){
            case "PtgUminus":
                f.push(`-${f.pop()}`);
                break;
            case "PtgUplus":
                f.push(`+${f.pop()}`);
                break;
            case "PtgPercent":
                f.push(`${f.pop()}%`);
                break;
            case "PtgAdd":
            case "PtgConcat":
            case "PtgDiv":
            case "PtgEq":
            case "PtgGe":
            case "PtgGt":
            case "PtgLe":
            case "PtgLt":
            case "PtgMul":
            case "PtgNe":
            case "PtgPower":
            case "PtgSub":
                c = f.pop();
                o = f.pop();
                if (h >= 0) {
                    switch(e[0][h][1][0]){
                        case 0:
                            p = $e(" ", e[0][h][1][1]);
                            break;
                        case 1:
                            p = $e("\r", e[0][h][1][1]);
                            break;
                        default:
                            p = "";
                            if (n.WTF) {
                                throw new Error(`Unexpected PtgAttrSpaceType ${e[0][h][1][0]}`);
                            }
                    }
                    o = o + p;
                    h = -1;
                }
                f.push(o + iv[g[0]] + c);
                break;
            case "PtgIsect":
                c = f.pop();
                o = f.pop();
                f.push(`${o} ${c}`);
                break;
            case "PtgUnion":
                c = f.pop();
                o = f.pop();
                f.push(`${o},${c}`);
                break;
            case "PtgRange":
                c = f.pop();
                o = f.pop();
                f.push(`${o}:${c}`);
                break;
            case "PtgAttrChoose":
                break;
            case "PtgAttrGoto":
                break;
            case "PtgAttrIf":
                break;
            case "PtgAttrIfError":
                break;
            case "PtgRef":
                l = Sa(g[1][1], s, n);
                f.push(Fa(l, i));
                break;
            case "PtgRefN":
                l = s_1 ? Sa(g[1][1], s_1, n) : g[1][1];
                f.push(Fa(l, i));
                break;
            case "PtgRef3d":
                u = g[1][1];
                l = Sa(g[1][2], s, n);
                v = es(a, u, n);
                f.push(`${v}!${Fa(l, i)}`);
                break;
            case "PtgFunc":
            case "PtgFuncVar":
                let D = g[1][0];
                let b = g[1][1];
                if (!D) {
                    D = 0;
                }
                D &= 127;
                const N = D == 0 ? [] : f.slice(-D);
                f.length -= D;
                if (b === "User") {
                    b = N.shift();
                }
                f.push(`${b}(${N.join(",")})`);
                break;
            case "PtgBool":
                f.push(g[1] ? "TRUE" : "FALSE");
                break;
            case "PtgInt":
                f.push(g[1]);
                break;
            case "PtgNum":
                f.push(String(g[1]));
                break;
            case "PtgStr":
                f.push(`"${g[1].replace(/"/g, '""')}"`);
                break;
            case "PtgErr":
                f.push(g[1]);
                break;
            case "PtgAreaN":
                d = Di(g[1][1], s_1 ? {
                    s: s_1
                } : s, n);
                f.push(U0(d, n));
                break;
            case "PtgArea":
                d = Di(g[1][1], s, n);
                f.push(U0(d, n));
                break;
            case "PtgArea3d":
                u = g[1][1];
                d = g[1][2];
                v = es(a, u, n);
                f.push(`${v}!${U0(d, n)}`);
                break;
            case "PtgAttrSum":
                f.push(`SUM(${f.pop()})`);
                break;
            case "PtgAttrBaxcel":
            case "PtgAttrSemi":
                break;
            case "PtgName":
                x = g[1][2];
                const F = (a.names || [])[x - 1] || (a[0] || [])[x];
                let B = F ? F.Name : `SH33TJSNAME${String(x)}`;
                if (B && B.slice(0, 6) == "_xlfn." && !n.xlfn) {
                    B = B.slice(6);
                }
                f.push(B);
                break;
            case "PtgNameX":
                let I = g[1][1];
                x = g[1][2];
                let z;
                if (n.biff <= 5) {
                    if (I < 0) {
                        I = -I;
                    }
                    if (a[I]) {
                        z = a[I][x];
                    }
                } else {
                    let X = "";
                    ((a[I] || [])[0] || [])[0] == 14849 || (((a[I] || [])[0] || [])[0] == 1025 ? a[I][x] && a[I][x].itab > 0 && (X = `${a.SheetNames[a[I][x].itab - 1]}!`) : X = `${a.SheetNames[x - 1]}!`);
                    if (a[I] && a[I][x]) {
                        X += a[I][x].Name;
                    } else if (a[0] && a[0][x]) {
                        X += a[0][x].Name;
                    } else {
                        const L = (zf(a, I, n) || "").split(";;");
                        if (L[x - 1]) {
                            X = L[x - 1];
                        } else {
                            X += "SH33TJSERRX";
                        }
                    }
                    f.push(X);
                    break;
                }
                if (!z) {
                    z = {
                        Name: "SH33TJSERRY"
                    };
                }
                f.push(z.Name);
                break;
            case "PtgParen":
                let J = "(";
                let le = ")";
                if (h >= 0) {
                    p = "";
                    switch(e[0][h][1][0]){
                        case 2:
                            J = $e(" ", e[0][h][1][1]) + J;
                            break;
                        case 3:
                            J = $e("\r", e[0][h][1][1]) + J;
                            break;
                        case 4:
                            le = $e(" ", e[0][h][1][1]) + le;
                            break;
                        case 5:
                            le = $e("\r", e[0][h][1][1]) + le;
                            break;
                        default:
                            if (n.WTF) {
                                throw new Error(`Unexpected PtgAttrSpaceType ${e[0][h][1][0]}`);
                            }
                    }
                    h = -1;
                }
                f.push(J + f.pop() + le);
                break;
            case "PtgRefErr":
                f.push("#REF!");
                break;
            case "PtgRefErr3d":
                f.push("#REF!");
                break;
            case "PtgExp":
                l = {
                    c: g[1][1],
                    r: g[1][0]
                };
                const ie = {
                    c: s_1.c,
                    r: s_1.r
                };
                if (a.sharedf[encode_cell(l)]) {
                    const he = a.sharedf[encode_cell(l)];
                    f.push(pr(he, s, ie, a, n));
                } else {
                    let ce = false;
                    for(c = 0; c != a.arrayf.length; ++c){
                        o = a.arrayf[c];
                        if (!(l.c < o[0].s.c || l.c > o[0].e.c) && !(l.r < o[0].s.r || l.r > o[0].e.r)) {
                            f.push(pr(o[1], s, ie, a, n));
                            ce = true;
                            break;
                        }
                    }
                    if (!ce) {
                        f.push(g[1]);
                    }
                }
                break;
            case "PtgArray":
                f.push(`{${nv(g[1])}}`);
                break;
            case "PtgMemArea":
                break;
            case "PtgAttrSpace":
            case "PtgAttrSpaceSemi":
                h = w;
                break;
            case "PtgTbl":
                break;
            case "PtgMemErr":
                break;
            case "PtgMissArg":
                f.push("");
                break;
            case "PtgAreaErr":
                f.push("#REF!");
                break;
            case "PtgAreaErr3d":
                f.push("#REF!");
                break;
            case "PtgList":
                f.push(`Table${g[1].idx}[#${g[1].rt}]`);
                break;
            case "PtgMemAreaN":
            case "PtgMemNoMemN":
            case "PtgAttrNoop":
            case "PtgSheet":
            case "PtgEndSheet":
                break;
            case "PtgMemFunc":
                break;
            case "PtgMemNoMem":
                break;
            case "PtgElfCol":
            case "PtgElfColS":
            case "PtgElfColSV":
            case "PtgElfColV":
            case "PtgElfLel":
            case "PtgElfRadical":
            case "PtgElfRadicalLel":
            case "PtgElfRadicalS":
            case "PtgElfRw":
            case "PtgElfRwV":
                throw new Error("Unsupported ELFs");
            case "PtgSxName":
                throw new Error(`Unrecognized Formula Token: ${String(g)}`);
            default:
                throw new Error(`Unrecognized Formula Token: ${String(g)}`);
        }
        const Pe = [
            "PtgAttrSpace",
            "PtgAttrSpaceSemi",
            "PtgAttrGoto"
        ];
        if (n.biff != 3 && h >= 0 && Pe.indexOf(e[0][w][0]) == -1) {
            g = e[0][h];
            let V = true;
            switch(g[1][0]){
                case 4:
                    V = false;
                case 0:
                    p = $e(" ", g[1][1]);
                    break;
                case 5:
                    V = false;
                case 1:
                    p = $e("\r", g[1][1]);
                    break;
                default:
                    p = "";
                    if (n.WTF) {
                        throw new Error(`Unexpected PtgAttrSpaceType ${g[1][0]}`);
                    }
            }
            f.push((V ? p : "") + f.pop() + (V ? "" : p));
            h = -1;
        }
    }
    if (f.length > 1 && n.WTF) {
        throw new Error("bad formula stack");
    }
    return f[0];
}
function fv(e, t, r) {
    const a = e.l + t;
    const n = r.biff == 2 ? 1 : 2;
    let i;
    const s = e.read_shift(n);
    if (s == 65535) {
        return [
            [],
            kr(e, t - 2)
        ];
    }
    const f = qa(e, s, r);
    if (t !== s + n) {
        i = Za(e, t - s - n, f, r);
    }
    e.l = a;
    return [
        f,
        i
    ];
}
function cv(e, t, r) {
    const a = e.l + t;
    const n = r.biff == 2 ? 1 : 2;
    let i;
    const s = e.read_shift(n);
    if (s == 65535) {
        return [
            [],
            kr(e, t - 2)
        ];
    }
    const f = qa(e, s, r);
    if (t !== s + n) {
        i = Za(e, t - s - n, f, r);
    }
    e.l = a;
    return [
        f,
        i
    ];
}
function ov(e, t, r, a) {
    const n = e.l + t;
    const i = qa(e, a, r);
    let s;
    if (n !== e.l) {
        s = Za(e, n - e.l, i, r);
    }
    return [
        i,
        s
    ];
}
function lv(e, t, r) {
    const a = e.l + t;
    let n;
    const i = e.read_shift(2);
    const s = qa(e, i, r);
    if (i == 65535) {
        return [
            [],
            kr(e, t - 2)
        ];
    }
    if (t !== i + 2) {
        n = Za(e, a - i - 2, s, r);
    }
    return [
        s,
        n
    ];
}
function uv(e) {
    let t;
    if (lt(e, e.l + 6) !== 65535) {
        return [
            gr(e),
            "n"
        ];
    }
    switch(e[e.l]){
        case 0:
            e.l += 8;
            return [
                "String",
                "s"
            ];
        case 1:
            t = e[e.l + 2] === 1;
            e.l += 8;
            return [
                t,
                "b"
            ];
        case 2:
            t = e[e.l + 2];
            e.l += 8;
            return [
                t,
                "e"
            ];
        case 3:
            e.l += 8;
            return [
                "",
                "s"
            ];
    }
    return [];
}
function hv(e) {
    if (e == null) {
        const t = G(8);
        t.write_shift(1, 3);
        t.write_shift(1, 0);
        t.write_shift(2, 0);
        t.write_shift(2, 0);
        t.write_shift(2, 65535);
        return t;
    } else if (typeof e === "number") {
        return Wt(e);
    }
    return Wt(0);
}
function G0(e, t, r) {
    const a = e.l + t;
    const cell = st(e);
    r.biff == 2 && ++e.l;
    const i = uv(e);
    const s = e.read_shift(1);
    if (r.biff != 2) {
        e.read_shift(1);
        if (r.biff >= 5) {
            e.read_shift(4);
        }
    }
    const formula = cv(e, a - e.l, r);
    return {
        cell,
        val: i[0],
        formula,
        shared: s >> 3 & 1,
        tt: i[1]
    };
}
function xv(e, t, r, a, n) {
    const i = Vt(t, r, n);
    const s = hv(e.v);
    const f = G(6);
    const c = 33;
    f.write_shift(2, c);
    f.write_shift(4, 0);
    const o = G(e.bf.length);
    for(let l = 0; l < e.bf.length; ++l){
        o[l] = e.bf[l];
    }
    const u = bconcat([
        i,
        s,
        f,
        o
    ]);
    return u;
}
function I0(e, t, r) {
    const a = e.read_shift(4);
    const n = qa(e, a, r);
    const i = e.read_shift(4);
    const s = i > 0 ? Za(e, i, n, r) : null;
    return [
        n,
        s
    ];
}
const dv = I0;
const R0 = I0;
const vv = I0;
const pv = I0;
var mv = {
    0: "BEEP",
    1: "OPEN",
    2: "OPEN.LINKS",
    3: "CLOSE.ALL",
    4: "SAVE",
    5: "SAVE.AS",
    6: "FILE.DELETE",
    7: "PAGE.SETUP",
    8: "PRINT",
    9: "PRINTER.SETUP",
    10: "QUIT",
    11: "NEW.WINDOW",
    12: "ARRANGE.ALL",
    13: "WINDOW.SIZE",
    14: "WINDOW.MOVE",
    15: "FULL",
    16: "CLOSE",
    17: "RUN",
    22: "SET.PRINT.AREA",
    23: "SET.PRINT.TITLES",
    24: "SET.PAGE.BREAK",
    25: "REMOVE.PAGE.BREAK",
    26: "FONT",
    27: "DISPLAY",
    28: "PROTECT.DOCUMENT",
    29: "PRECISION",
    30: "A1.R1C1",
    31: "CALCULATE.NOW",
    32: "CALCULATION",
    34: "DATA.FIND",
    35: "EXTRACT",
    36: "DATA.DELETE",
    37: "SET.DATABASE",
    38: "SET.CRITERIA",
    39: "SORT",
    40: "DATA.SERIES",
    41: "TABLE",
    42: "FORMAT.NUMBER",
    43: "ALIGNMENT",
    44: "STYLE",
    45: "BORDER",
    46: "CELL.PROTECTION",
    47: "COLUMN.WIDTH",
    48: "UNDO",
    49: "CUT",
    50: "COPY",
    51: "PASTE",
    52: "CLEAR",
    53: "PASTE.SPECIAL",
    54: "EDIT.DELETE",
    55: "INSERT",
    56: "FILL.RIGHT",
    57: "FILL.DOWN",
    61: "DEFINE.NAME",
    62: "CREATE.NAMES",
    63: "FORMULA.GOTO",
    64: "FORMULA.FIND",
    65: "SELECT.LAST.CELL",
    66: "SHOW.ACTIVE.CELL",
    67: "GALLERY.AREA",
    68: "GALLERY.BAR",
    69: "GALLERY.COLUMN",
    70: "GALLERY.LINE",
    71: "GALLERY.PIE",
    72: "GALLERY.SCATTER",
    73: "COMBINATION",
    74: "PREFERRED",
    75: "ADD.OVERLAY",
    76: "GRIDLINES",
    77: "SET.PREFERRED",
    78: "AXES",
    79: "LEGEND",
    80: "ATTACH.TEXT",
    81: "ADD.ARROW",
    82: "SELECT.CHART",
    83: "SELECT.PLOT.AREA",
    84: "PATTERNS",
    85: "MAIN.CHART",
    86: "OVERLAY",
    87: "SCALE",
    88: "FORMAT.LEGEND",
    89: "FORMAT.TEXT",
    90: "EDIT.REPEAT",
    91: "PARSE",
    92: "JUSTIFY",
    93: "HIDE",
    94: "UNHIDE",
    95: "WORKSPACE",
    96: "FORMULA",
    97: "FORMULA.FILL",
    98: "FORMULA.ARRAY",
    99: "DATA.FIND.NEXT",
    100: "DATA.FIND.PREV",
    101: "FORMULA.FIND.NEXT",
    102: "FORMULA.FIND.PREV",
    103: "ACTIVATE",
    104: "ACTIVATE.NEXT",
    105: "ACTIVATE.PREV",
    106: "UNLOCKED.NEXT",
    107: "UNLOCKED.PREV",
    108: "COPY.PICTURE",
    109: "SELECT",
    110: "DELETE.NAME",
    111: "DELETE.FORMAT",
    112: "VLINE",
    113: "HLINE",
    114: "VPAGE",
    115: "HPAGE",
    116: "VSCROLL",
    117: "HSCROLL",
    118: "ALERT",
    119: "NEW",
    120: "CANCEL.COPY",
    121: "SHOW.CLIPBOARD",
    122: "MESSAGE",
    124: "PASTE.LINK",
    125: "APP.ACTIVATE",
    126: "DELETE.ARROW",
    127: "ROW.HEIGHT",
    128: "FORMAT.MOVE",
    129: "FORMAT.SIZE",
    130: "FORMULA.REPLACE",
    131: "SEND.KEYS",
    132: "SELECT.SPECIAL",
    133: "APPLY.NAMES",
    134: "REPLACE.FONT",
    135: "FREEZE.PANES",
    136: "SHOW.INFO",
    137: "SPLIT",
    138: "ON.WINDOW",
    139: "ON.DATA",
    140: "DISABLE.INPUT",
    142: "OUTLINE",
    143: "LIST.NAMES",
    144: "FILE.CLOSE",
    145: "SAVE.WORKBOOK",
    146: "DATA.FORM",
    147: "COPY.CHART",
    148: "ON.TIME",
    149: "WAIT",
    150: "FORMAT.FONT",
    151: "FILL.UP",
    152: "FILL.LEFT",
    153: "DELETE.OVERLAY",
    155: "SHORT.MENUS",
    159: "SET.UPDATE.STATUS",
    161: "COLOR.PALETTE",
    162: "DELETE.STYLE",
    163: "WINDOW.RESTORE",
    164: "WINDOW.MAXIMIZE",
    166: "CHANGE.LINK",
    167: "CALCULATE.DOCUMENT",
    168: "ON.KEY",
    169: "APP.RESTORE",
    170: "APP.MOVE",
    171: "APP.SIZE",
    172: "APP.MINIMIZE",
    173: "APP.MAXIMIZE",
    174: "BRING.TO.FRONT",
    175: "SEND.TO.BACK",
    185: "MAIN.CHART.TYPE",
    186: "OVERLAY.CHART.TYPE",
    187: "SELECT.END",
    188: "OPEN.MAIL",
    189: "SEND.MAIL",
    190: "STANDARD.FONT",
    191: "CONSOLIDATE",
    192: "SORT.SPECIAL",
    193: "GALLERY.3D.AREA",
    194: "GALLERY.3D.COLUMN",
    195: "GALLERY.3D.LINE",
    196: "GALLERY.3D.PIE",
    197: "VIEW.3D",
    198: "GOAL.SEEK",
    199: "WORKGROUP",
    200: "FILL.GROUP",
    201: "UPDATE.LINK",
    202: "PROMOTE",
    203: "DEMOTE",
    204: "SHOW.DETAIL",
    206: "UNGROUP",
    207: "OBJECT.PROPERTIES",
    208: "SAVE.NEW.OBJECT",
    209: "SHARE",
    210: "SHARE.NAME",
    211: "DUPLICATE",
    212: "APPLY.STYLE",
    213: "ASSIGN.TO.OBJECT",
    214: "OBJECT.PROTECTION",
    215: "HIDE.OBJECT",
    216: "SET.EXTRACT",
    217: "CREATE.PUBLISHER",
    218: "SUBSCRIBE.TO",
    219: "ATTRIBUTES",
    220: "SHOW.TOOLBAR",
    222: "PRINT.PREVIEW",
    223: "EDIT.COLOR",
    224: "SHOW.LEVELS",
    225: "FORMAT.MAIN",
    226: "FORMAT.OVERLAY",
    227: "ON.RECALC",
    228: "EDIT.SERIES",
    229: "DEFINE.STYLE",
    240: "LINE.PRINT",
    243: "ENTER.DATA",
    249: "GALLERY.RADAR",
    250: "MERGE.STYLES",
    251: "EDITION.OPTIONS",
    252: "PASTE.PICTURE",
    253: "PASTE.PICTURE.LINK",
    254: "SPELLING",
    256: "ZOOM",
    259: "INSERT.OBJECT",
    260: "WINDOW.MINIMIZE",
    265: "SOUND.NOTE",
    266: "SOUND.PLAY",
    267: "FORMAT.SHAPE",
    268: "EXTEND.POLYGON",
    269: "FORMAT.AUTO",
    272: "GALLERY.3D.BAR",
    273: "GALLERY.3D.SURFACE",
    274: "FILL.AUTO",
    276: "CUSTOMIZE.TOOLBAR",
    277: "ADD.TOOL",
    278: "EDIT.OBJECT",
    279: "ON.DOUBLECLICK",
    280: "ON.ENTRY",
    281: "WORKBOOK.ADD",
    282: "WORKBOOK.MOVE",
    283: "WORKBOOK.COPY",
    284: "WORKBOOK.OPTIONS",
    285: "SAVE.WORKSPACE",
    288: "CHART.WIZARD",
    289: "DELETE.TOOL",
    290: "MOVE.TOOL",
    291: "WORKBOOK.SELECT",
    292: "WORKBOOK.ACTIVATE",
    293: "ASSIGN.TO.TOOL",
    295: "COPY.TOOL",
    296: "RESET.TOOL",
    297: "CONSTRAIN.NUMERIC",
    298: "PASTE.TOOL",
    302: "WORKBOOK.NEW",
    305: "SCENARIO.CELLS",
    306: "SCENARIO.DELETE",
    307: "SCENARIO.ADD",
    308: "SCENARIO.EDIT",
    309: "SCENARIO.SHOW",
    310: "SCENARIO.SHOW.NEXT",
    311: "SCENARIO.SUMMARY",
    312: "PIVOT.TABLE.WIZARD",
    313: "PIVOT.FIELD.PROPERTIES",
    314: "PIVOT.FIELD",
    315: "PIVOT.ITEM",
    316: "PIVOT.ADD.FIELDS",
    318: "OPTIONS.CALCULATION",
    319: "OPTIONS.EDIT",
    320: "OPTIONS.VIEW",
    321: "ADDIN.MANAGER",
    322: "MENU.EDITOR",
    323: "ATTACH.TOOLBARS",
    324: "VBAActivate",
    325: "OPTIONS.CHART",
    328: "VBA.INSERT.FILE",
    330: "VBA.PROCEDURE.DEFINITION",
    336: "ROUTING.SLIP",
    338: "ROUTE.DOCUMENT",
    339: "MAIL.LOGON",
    342: "INSERT.PICTURE",
    343: "EDIT.TOOL",
    344: "GALLERY.DOUGHNUT",
    350: "CHART.TREND",
    352: "PIVOT.ITEM.PROPERTIES",
    354: "WORKBOOK.INSERT",
    355: "OPTIONS.TRANSITION",
    356: "OPTIONS.GENERAL",
    370: "FILTER.ADVANCED",
    373: "MAIL.ADD.MAILER",
    374: "MAIL.DELETE.MAILER",
    375: "MAIL.REPLY",
    376: "MAIL.REPLY.ALL",
    377: "MAIL.FORWARD",
    378: "MAIL.NEXT.LETTER",
    379: "DATA.LABEL",
    380: "INSERT.TITLE",
    381: "FONT.PROPERTIES",
    382: "MACRO.OPTIONS",
    383: "WORKBOOK.HIDE",
    384: "WORKBOOK.UNHIDE",
    385: "WORKBOOK.DELETE",
    386: "WORKBOOK.NAME",
    388: "GALLERY.CUSTOM",
    390: "ADD.CHART.AUTOFORMAT",
    391: "DELETE.CHART.AUTOFORMAT",
    392: "CHART.ADD.DATA",
    393: "AUTO.OUTLINE",
    394: "TAB.ORDER",
    395: "SHOW.DIALOG",
    396: "SELECT.ALL",
    397: "UNGROUP.SHEETS",
    398: "SUBTOTAL.CREATE",
    399: "SUBTOTAL.REMOVE",
    400: "RENAME.OBJECT",
    412: "WORKBOOK.SCROLL",
    413: "WORKBOOK.NEXT",
    414: "WORKBOOK.PREV",
    415: "WORKBOOK.TAB.SPLIT",
    416: "FULL.SCREEN",
    417: "WORKBOOK.PROTECT",
    420: "SCROLLBAR.PROPERTIES",
    421: "PIVOT.SHOW.PAGES",
    422: "TEXT.TO.COLUMNS",
    423: "FORMAT.CHARTTYPE",
    424: "LINK.FORMAT",
    425: "TRACER.DISPLAY",
    430: "TRACER.NAVIGATE",
    431: "TRACER.CLEAR",
    432: "TRACER.ERROR",
    433: "PIVOT.FIELD.GROUP",
    434: "PIVOT.FIELD.UNGROUP",
    435: "CHECKBOX.PROPERTIES",
    436: "LABEL.PROPERTIES",
    437: "LISTBOX.PROPERTIES",
    438: "EDITBOX.PROPERTIES",
    439: "PIVOT.REFRESH",
    440: "LINK.COMBO",
    441: "OPEN.TEXT",
    442: "HIDE.DIALOG",
    443: "SET.DIALOG.FOCUS",
    444: "ENABLE.OBJECT",
    445: "PUSHBUTTON.PROPERTIES",
    446: "SET.DIALOG.DEFAULT",
    447: "FILTER",
    448: "FILTER.SHOW.ALL",
    449: "CLEAR.OUTLINE",
    450: "FUNCTION.WIZARD",
    451: "ADD.LIST.ITEM",
    452: "SET.LIST.ITEM",
    453: "REMOVE.LIST.ITEM",
    454: "SELECT.LIST.ITEM",
    455: "SET.CONTROL.VALUE",
    456: "SAVE.COPY.AS",
    458: "OPTIONS.LISTS.ADD",
    459: "OPTIONS.LISTS.DELETE",
    460: "SERIES.AXES",
    461: "SERIES.X",
    462: "SERIES.Y",
    463: "ERRORBAR.X",
    464: "ERRORBAR.Y",
    465: "FORMAT.CHART",
    466: "SERIES.ORDER",
    467: "MAIL.LOGOFF",
    468: "CLEAR.ROUTING.SLIP",
    469: "APP.ACTIVATE.MICROSOFT",
    470: "MAIL.EDIT.MAILER",
    471: "ON.SHEET",
    472: "STANDARD.WIDTH",
    473: "SCENARIO.MERGE",
    474: "SUMMARY.INFO",
    475: "FIND.FILE",
    476: "ACTIVE.CELL.FONT",
    477: "ENABLE.TIPWIZARD",
    478: "VBA.MAKE.ADDIN",
    480: "INSERTDATATABLE",
    481: "WORKGROUP.OPTIONS",
    482: "MAIL.SEND.MAILER",
    485: "AUTOCORRECT",
    489: "POST.DOCUMENT",
    491: "PICKLIST",
    493: "VIEW.SHOW",
    494: "VIEW.DEFINE",
    495: "VIEW.DELETE",
    509: "SHEET.BACKGROUND",
    510: "INSERT.MAP.OBJECT",
    511: "OPTIONS.MENONO",
    517: "MSOCHECKS",
    518: "NORMAL",
    519: "LAYOUT",
    520: "RM.PRINT.AREA",
    521: "CLEAR.PRINT.AREA",
    522: "ADD.PRINT.AREA",
    523: "MOVE.BRK",
    545: "HIDECURR.NOTE",
    546: "HIDEALL.NOTES",
    547: "DELETE.NOTE",
    548: "TRAVERSE.NOTES",
    549: "ACTIVATE.NOTES",
    620: "PROTECT.REVISIONS",
    621: "UNPROTECT.REVISIONS",
    647: "OPTIONS.ME",
    653: "WEB.PUBLISH",
    667: "NEWWEBQUERY",
    673: "PIVOT.TABLE.CHART",
    753: "OPTIONS.SAVE",
    755: "OPTIONS.SPELL",
    808: "HIDEALL.INKANNOTS"
};
var $f = {
    0: "COUNT",
    1: "IF",
    2: "ISNA",
    3: "ISERROR",
    4: "SUM",
    5: "AVERAGE",
    6: "MIN",
    7: "MAX",
    8: "ROW",
    9: "COLUMN",
    10: "NA",
    11: "NPV",
    12: "STDEV",
    13: "DOLLAR",
    14: "FIXED",
    15: "SIN",
    16: "COS",
    17: "TAN",
    18: "ATAN",
    19: "PI",
    20: "SQRT",
    21: "EXP",
    22: "LN",
    23: "LOG10",
    24: "ABS",
    25: "INT",
    26: "SIGN",
    27: "ROUND",
    28: "LOOKUP",
    29: "INDEX",
    30: "REPT",
    31: "MID",
    32: "LEN",
    33: "VALUE",
    34: "TRUE",
    35: "FALSE",
    36: "AND",
    37: "OR",
    38: "NOT",
    39: "MOD",
    40: "DCOUNT",
    41: "DSUM",
    42: "DAVERAGE",
    43: "DMIN",
    44: "DMAX",
    45: "DSTDEV",
    46: "VAR",
    47: "DVAR",
    48: "TEXT",
    49: "LINEST",
    50: "TREND",
    51: "LOGEST",
    52: "GROWTH",
    53: "GOTO",
    54: "HALT",
    55: "RETURN",
    56: "PV",
    57: "FV",
    58: "NPER",
    59: "PMT",
    60: "RATE",
    61: "MIRR",
    62: "IRR",
    63: "RAND",
    64: "MATCH",
    65: "DATE",
    66: "TIME",
    67: "DAY",
    68: "MONTH",
    69: "YEAR",
    70: "WEEKDAY",
    71: "HOUR",
    72: "MINUTE",
    73: "SECOND",
    74: "NOW",
    75: "AREAS",
    76: "ROWS",
    77: "COLUMNS",
    78: "OFFSET",
    79: "ABSREF",
    80: "RELREF",
    81: "ARGUMENT",
    82: "SEARCH",
    83: "TRANSPOSE",
    84: "ERROR",
    85: "STEP",
    86: "TYPE",
    87: "ECHO",
    88: "SET.NAME",
    89: "CALLER",
    90: "DEREF",
    91: "WINDOWS",
    92: "SERIES",
    93: "DOCUMENTS",
    94: "ACTIVE.CELL",
    95: "SELECTION",
    96: "RESULT",
    97: "ATAN2",
    98: "ASIN",
    99: "ACOS",
    100: "CHOOSE",
    101: "HLOOKUP",
    102: "VLOOKUP",
    103: "LINKS",
    104: "INPUT",
    105: "ISREF",
    106: "GET.FORMULA",
    107: "GET.NAME",
    108: "SET.VALUE",
    109: "LOG",
    110: "EXEC",
    111: "CHAR",
    112: "LOWER",
    113: "UPPER",
    114: "PROPER",
    115: "LEFT",
    116: "RIGHT",
    117: "EXACT",
    118: "TRIM",
    119: "REPLACE",
    120: "SUBSTITUTE",
    121: "CODE",
    122: "NAMES",
    123: "DIRECTORY",
    124: "FIND",
    125: "CELL",
    126: "ISERR",
    127: "ISTEXT",
    128: "ISNUMBER",
    129: "ISBLANK",
    130: "T",
    131: "N",
    132: "FOPEN",
    133: "FCLOSE",
    134: "FSIZE",
    135: "FREADLN",
    136: "FREAD",
    137: "FWRITELN",
    138: "FWRITE",
    139: "FPOS",
    140: "DATEVALUE",
    141: "TIMEVALUE",
    142: "SLN",
    143: "SYD",
    144: "DDB",
    145: "GET.DEF",
    146: "REFTEXT",
    147: "TEXTREF",
    148: "INDIRECT",
    149: "REGISTER",
    150: "CALL",
    151: "ADD.BAR",
    152: "ADD.MENU",
    153: "ADD.COMMAND",
    154: "ENABLE.COMMAND",
    155: "CHECK.COMMAND",
    156: "RENAME.COMMAND",
    157: "SHOW.BAR",
    158: "DELETE.MENU",
    159: "DELETE.COMMAND",
    160: "GET.CHART.ITEM",
    161: "DIALOG.BOX",
    162: "CLEAN",
    163: "MDETERM",
    164: "MINVERSE",
    165: "MMULT",
    166: "FILES",
    167: "IPMT",
    168: "PPMT",
    169: "COUNTA",
    170: "CANCEL.KEY",
    171: "FOR",
    172: "WHILE",
    173: "BREAK",
    174: "NEXT",
    175: "INITIATE",
    176: "REQUEST",
    177: "POKE",
    178: "EXECUTE",
    179: "TERMINATE",
    180: "RESTART",
    181: "HELP",
    182: "GET.BAR",
    183: "PRODUCT",
    184: "FACT",
    185: "GET.CELL",
    186: "GET.WORKSPACE",
    187: "GET.WINDOW",
    188: "GET.DOCUMENT",
    189: "DPRODUCT",
    190: "ISNONTEXT",
    191: "GET.NOTE",
    192: "NOTE",
    193: "STDEVP",
    194: "VARP",
    195: "DSTDEVP",
    196: "DVARP",
    197: "TRUNC",
    198: "ISLOGICAL",
    199: "DCOUNTA",
    200: "DELETE.BAR",
    201: "UNREGISTER",
    204: "USDOLLAR",
    205: "FINDB",
    206: "SEARCHB",
    207: "REPLACEB",
    208: "LEFTB",
    209: "RIGHTB",
    210: "MIDB",
    211: "LENB",
    212: "ROUNDUP",
    213: "ROUNDDOWN",
    214: "ASC",
    215: "DBCS",
    216: "RANK",
    219: "ADDRESS",
    220: "DAYS360",
    221: "TODAY",
    222: "VDB",
    223: "ELSE",
    224: "ELSE.IF",
    225: "END.IF",
    226: "FOR.CELL",
    227: "MEDIAN",
    228: "SUMPRODUCT",
    229: "SINH",
    230: "COSH",
    231: "TANH",
    232: "ASINH",
    233: "ACOSH",
    234: "ATANH",
    235: "DGET",
    236: "CREATE.OBJECT",
    237: "VOLATILE",
    238: "LAST.ERROR",
    239: "CUSTOM.UNDO",
    240: "CUSTOM.REPEAT",
    241: "FORMULA.CONVERT",
    242: "GET.LINK.INFO",
    243: "TEXT.BOX",
    244: "INFO",
    245: "GROUP",
    246: "GET.OBJECT",
    247: "DB",
    248: "PAUSE",
    251: "RESUME",
    252: "FREQUENCY",
    253: "ADD.TOOLBAR",
    254: "DELETE.TOOLBAR",
    255: "User",
    256: "RESET.TOOLBAR",
    257: "EVALUATE",
    258: "GET.TOOLBAR",
    259: "GET.TOOL",
    260: "SPELLING.CHECK",
    261: "ERROR.TYPE",
    262: "APP.TITLE",
    263: "WINDOW.TITLE",
    264: "SAVE.TOOLBAR",
    265: "ENABLE.TOOL",
    266: "PRESS.TOOL",
    267: "REGISTER.ID",
    268: "GET.WORKBOOK",
    269: "AVEDEV",
    270: "BETADIST",
    271: "GAMMALN",
    272: "BETAINV",
    273: "BINOMDIST",
    274: "CHIDIST",
    275: "CHIINV",
    276: "COMBIN",
    277: "CONFIDENCE",
    278: "CRITBINOM",
    279: "EVEN",
    280: "EXPONDIST",
    281: "FDIST",
    282: "FINV",
    283: "FISHER",
    284: "FISHERINV",
    285: "FLOOR",
    286: "GAMMADIST",
    287: "GAMMAINV",
    288: "CEILING",
    289: "HYPGEOMDIST",
    290: "LOGNORMDIST",
    291: "LOGINV",
    292: "NEGBINOMDIST",
    293: "NORMDIST",
    294: "NORMSDIST",
    295: "NORMINV",
    296: "NORMSINV",
    297: "STANDARDIZE",
    298: "ODD",
    299: "PERMUT",
    300: "POISSON",
    301: "TDIST",
    302: "WEIBULL",
    303: "SUMXMY2",
    304: "SUMX2MY2",
    305: "SUMX2PY2",
    306: "CHITEST",
    307: "CORREL",
    308: "COVAR",
    309: "FORECAST",
    310: "FTEST",
    311: "INTERCEPT",
    312: "PEARSON",
    313: "RSQ",
    314: "STEYX",
    315: "SLOPE",
    316: "TTEST",
    317: "PROB",
    318: "DEVSQ",
    319: "GEOMEAN",
    320: "HARMEAN",
    321: "SUMSQ",
    322: "KURT",
    323: "SKEW",
    324: "ZTEST",
    325: "LARGE",
    326: "SMALL",
    327: "QUARTILE",
    328: "PERCENTILE",
    329: "PERCENTRANK",
    330: "MODE",
    331: "TRIMMEAN",
    332: "TINV",
    334: "MOVIE.COMMAND",
    335: "GET.MOVIE",
    336: "CONCATENATE",
    337: "POWER",
    338: "PIVOT.ADD.DATA",
    339: "GET.PIVOT.TABLE",
    340: "GET.PIVOT.FIELD",
    341: "GET.PIVOT.ITEM",
    342: "RADIANS",
    343: "DEGREES",
    344: "SUBTOTAL",
    345: "SUMIF",
    346: "COUNTIF",
    347: "COUNTBLANK",
    348: "SCENARIO.GET",
    349: "OPTIONS.LISTS.GET",
    350: "ISPMT",
    351: "DATEDIF",
    352: "DATESTRING",
    353: "NUMBERSTRING",
    354: "ROMAN",
    355: "OPEN.DIALOG",
    356: "SAVE.DIALOG",
    357: "VIEW.GET",
    358: "GETPIVOTDATA",
    359: "HYPERLINK",
    360: "PHONETIC",
    361: "AVERAGEA",
    362: "MAXA",
    363: "MINA",
    364: "STDEVPA",
    365: "VARPA",
    366: "STDEVA",
    367: "VARA",
    368: "BAHTTEXT",
    369: "THAIDAYOFWEEK",
    370: "THAIDIGIT",
    371: "THAIMONTHOFYEAR",
    372: "THAINUMSOUND",
    373: "THAINUMSTRING",
    374: "THAISTRINGLENGTH",
    375: "ISTHAIDIGIT",
    376: "ROUNDBAHTDOWN",
    377: "ROUNDBAHTUP",
    378: "THAIYEAR",
    379: "RTD",
    380: "CUBEVALUE",
    381: "CUBEMEMBER",
    382: "CUBEMEMBERPROPERTY",
    383: "CUBERANKEDMEMBER",
    384: "HEX2BIN",
    385: "HEX2DEC",
    386: "HEX2OCT",
    387: "DEC2BIN",
    388: "DEC2HEX",
    389: "DEC2OCT",
    390: "OCT2BIN",
    391: "OCT2HEX",
    392: "OCT2DEC",
    393: "BIN2DEC",
    394: "BIN2OCT",
    395: "BIN2HEX",
    396: "IMSUB",
    397: "IMDIV",
    398: "IMPOWER",
    399: "IMABS",
    400: "IMSQRT",
    401: "IMLN",
    402: "IMLOG2",
    403: "IMLOG10",
    404: "IMSIN",
    405: "IMCOS",
    406: "IMEXP",
    407: "IMARGUMENT",
    408: "IMCONJUGATE",
    409: "IMAGINARY",
    410: "IMREAL",
    411: "COMPLEX",
    412: "IMSUM",
    413: "IMPRODUCT",
    414: "SERIESSUM",
    415: "FACTDOUBLE",
    416: "SQRTPI",
    417: "QUOTIENT",
    418: "DELTA",
    419: "GESTEP",
    420: "ISEVEN",
    421: "ISODD",
    422: "MROUND",
    423: "ERF",
    424: "ERFC",
    425: "BESSELJ",
    426: "BESSELK",
    427: "BESSELY",
    428: "BESSELI",
    429: "XIRR",
    430: "XNPV",
    431: "PRICEMAT",
    432: "YIELDMAT",
    433: "INTRATE",
    434: "RECEIVED",
    435: "DISC",
    436: "PRICEDISC",
    437: "YIELDDISC",
    438: "TBILLEQ",
    439: "TBILLPRICE",
    440: "TBILLYIELD",
    441: "PRICE",
    442: "YIELD",
    443: "DOLLARDE",
    444: "DOLLARFR",
    445: "NOMINAL",
    446: "EFFECT",
    447: "CUMPRINC",
    448: "CUMIPMT",
    449: "EDATE",
    450: "EOMONTH",
    451: "YEARFRAC",
    452: "COUPDAYBS",
    453: "COUPDAYS",
    454: "COUPDAYSNC",
    455: "COUPNCD",
    456: "COUPNUM",
    457: "COUPPCD",
    458: "DURATION",
    459: "MDURATION",
    460: "ODDLPRICE",
    461: "ODDLYIELD",
    462: "ODDFPRICE",
    463: "ODDFYIELD",
    464: "RANDBETWEEN",
    465: "WEEKNUM",
    466: "AMORDEGRC",
    467: "AMORLINC",
    468: "CONVERT",
    724: "SHEETJS",
    469: "ACCRINT",
    470: "ACCRINTM",
    471: "WORKDAY",
    472: "NETWORKDAYS",
    473: "GCD",
    474: "MULTINOMIAL",
    475: "LCM",
    476: "FVSCHEDULE",
    477: "CUBEKPIMEMBER",
    478: "CUBESET",
    479: "CUBESETCOUNT",
    480: "IFERROR",
    481: "COUNTIFS",
    482: "SUMIFS",
    483: "AVERAGEIF",
    484: "AVERAGEIFS"
};
var gv = {
    2: 1,
    3: 1,
    10: 0,
    15: 1,
    16: 1,
    17: 1,
    18: 1,
    19: 0,
    20: 1,
    21: 1,
    22: 1,
    23: 1,
    24: 1,
    25: 1,
    26: 1,
    27: 2,
    30: 2,
    31: 3,
    32: 1,
    33: 1,
    34: 0,
    35: 0,
    38: 1,
    39: 2,
    40: 3,
    41: 3,
    42: 3,
    43: 3,
    44: 3,
    45: 3,
    47: 3,
    48: 2,
    53: 1,
    61: 3,
    63: 0,
    65: 3,
    66: 3,
    67: 1,
    68: 1,
    69: 1,
    70: 1,
    71: 1,
    72: 1,
    73: 1,
    74: 0,
    75: 1,
    76: 1,
    77: 1,
    79: 2,
    80: 2,
    83: 1,
    85: 0,
    86: 1,
    89: 0,
    90: 1,
    94: 0,
    95: 0,
    97: 2,
    98: 1,
    99: 1,
    101: 3,
    102: 3,
    105: 1,
    106: 1,
    108: 2,
    111: 1,
    112: 1,
    113: 1,
    114: 1,
    117: 2,
    118: 1,
    119: 4,
    121: 1,
    126: 1,
    127: 1,
    128: 1,
    129: 1,
    130: 1,
    131: 1,
    133: 1,
    134: 1,
    135: 1,
    136: 2,
    137: 2,
    138: 2,
    140: 1,
    141: 1,
    142: 3,
    143: 4,
    144: 4,
    161: 1,
    162: 1,
    163: 1,
    164: 1,
    165: 2,
    172: 1,
    175: 2,
    176: 2,
    177: 3,
    178: 2,
    179: 1,
    184: 1,
    186: 1,
    189: 3,
    190: 1,
    195: 3,
    196: 3,
    197: 1,
    198: 1,
    199: 3,
    201: 1,
    207: 4,
    210: 3,
    211: 1,
    212: 2,
    213: 2,
    214: 1,
    215: 1,
    225: 0,
    229: 1,
    230: 1,
    231: 1,
    232: 1,
    233: 1,
    234: 1,
    235: 3,
    244: 1,
    247: 4,
    252: 2,
    257: 1,
    261: 1,
    271: 1,
    273: 4,
    274: 2,
    275: 2,
    276: 2,
    277: 3,
    278: 3,
    279: 1,
    280: 3,
    281: 3,
    282: 3,
    283: 1,
    284: 1,
    285: 2,
    286: 4,
    287: 3,
    288: 2,
    289: 4,
    290: 3,
    291: 3,
    292: 3,
    293: 4,
    294: 1,
    295: 3,
    296: 1,
    297: 3,
    298: 1,
    299: 2,
    300: 3,
    301: 3,
    302: 4,
    303: 2,
    304: 2,
    305: 2,
    306: 2,
    307: 2,
    308: 2,
    309: 3,
    310: 2,
    311: 2,
    312: 2,
    313: 2,
    314: 2,
    315: 2,
    316: 4,
    325: 2,
    326: 2,
    327: 2,
    328: 2,
    331: 2,
    332: 2,
    337: 2,
    342: 1,
    343: 1,
    346: 2,
    347: 1,
    350: 4,
    351: 3,
    352: 1,
    353: 2,
    360: 1,
    368: 1,
    369: 1,
    370: 1,
    371: 1,
    372: 1,
    373: 1,
    374: 1,
    375: 1,
    376: 1,
    377: 1,
    378: 1,
    382: 3,
    385: 1,
    392: 1,
    393: 1,
    396: 2,
    397: 2,
    398: 2,
    399: 1,
    400: 1,
    401: 1,
    402: 1,
    403: 1,
    404: 1,
    405: 1,
    406: 1,
    407: 1,
    408: 1,
    409: 1,
    410: 1,
    414: 4,
    415: 1,
    416: 1,
    417: 2,
    420: 1,
    421: 1,
    422: 2,
    424: 1,
    425: 2,
    426: 2,
    427: 2,
    428: 2,
    430: 3,
    438: 3,
    439: 3,
    440: 3,
    443: 2,
    444: 2,
    445: 2,
    446: 2,
    447: 6,
    448: 6,
    449: 2,
    450: 2,
    464: 2,
    468: 3,
    476: 2,
    479: 1,
    480: 2,
    65535: 0
};
function rs(e) {
    if (e.slice(0, 3) == "of:") {
        e = e.slice(3);
    }
    if (e.charCodeAt(0) == 61) {
        e = e.slice(1);
        if (e.charCodeAt(0) == 61) {
            e = e.slice(1);
        }
    }
    e = e.replace(/COM\.MICROSOFT\./g, "");
    e = e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, (t, r)=>r.replace(/\./g, ""));
    e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1");
    return e.replace(/[;~]/g, ",").replace(/\|/g, ";");
}
function _v(e) {
    const t = `of:=${e.replace(Hn, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":")}`;
    return t.replace(/;/g, "|").replace(/,/g, ";");
}
function z0(e) {
    const t = e.split(":");
    const r = t[0].split(".")[0];
    return [
        r,
        t[0].split(".")[1] + (t.length > 1 ? `:${t[1].split(".")[1] || t[1].split(".")[0]}` : "")
    ];
}
function wv(e) {
    return e.replace(/\./, "!");
}
let Strings = {};
let sa = {};
const Ca = typeof Map !== "undefined";
function Gn(Strings, t, revStrings) {
    let a = 0;
    const e_length = Strings.length;
    if (revStrings) {
        if (Ca ? revStrings.has(t) : Object.prototype.hasOwnProperty.call(revStrings, t)) {
            for(const i = Ca ? revStrings.get(t) : revStrings[t]; a < i.length; ++a){
                if (Strings[i[a]].t === t) {
                    Strings.Count++;
                    return i[a];
                }
            }
        }
    } else {
        for(; a < e_length; ++a){
            if (Strings[a].t === t) {
                Strings.Count++;
                return a;
            }
        }
    }
    Strings[e_length] = {
        t
    };
    Strings.Count++;
    Strings.Unique++;
    revStrings && (Ca ? (revStrings.has(t) || revStrings.set(t, []), revStrings.get(t).push(e_length)) : (Object.prototype.hasOwnProperty.call(revStrings, t) || (revStrings[t] = []), revStrings[t].push(e_length)));
    return e_length;
}
function N0(e, t) {
    const r = {
        min: e + 1,
        max: e + 1
    };
    let a = -1;
    if (t.MDW) {
        mr = t.MDW;
    }
    if (t.width != null) {
        r.customWidth = 1;
    } else if (t.wpx != null) {
        a = Wa(t.wpx);
    } else if (t.wch != null) {
        a = t.wch;
    }
    if (a > -1) {
        r.width = E0(a);
        r.customWidth = 1;
    } else if (t.width != null) {
        r.width = t.width;
    }
    if (t.hidden) {
        r.hidden = true;
    }
    if (t.level != null) {
        r.outlineLevel = r.level = t.level;
    }
    return r;
}
function Lt(e, t) {
    if (e) {
        let r = [
            0.7,
            0.7,
            0.75,
            0.75,
            0.3,
            0.3
        ];
        if (t == "xlml") {
            r = [
                1,
                1,
                1,
                1,
                0.5,
                0.5
            ];
        }
        if (e.left == null) {
            e.left = r[0];
        }
        if (e.right == null) {
            e.right = r[1];
        }
        if (e.top == null) {
            e.top = r[2];
        }
        if (e.bottom == null) {
            e.bottom = r[3];
        }
        if (e.header == null) {
            e.header = r[4];
        }
        if (e.footer == null) {
            e.footer = r[5];
        }
    }
}
function Dt(cellXfs, t, r) {
    let a = r.revssf[t.z ?? "General"];
    let n = 60;
    const e_length = cellXfs.length;
    if (a == null && r.ssf) {
        for(; n < 392; ++n){
            if (r.ssf[n] == null) {
                load(t.z, n);
                r.ssf[n] = t.z;
                r.revssf[t.z] = a = n;
                break;
            }
        }
    }
    for(n = 0; n != e_length; ++n){
        if (cellXfs[n].numFmtId === a) {
            return n;
        }
    }
    cellXfs[e_length] = {
        numFmtId: a,
        fontId: 0,
        fillId: 0,
        borderId: 0,
        xfId: 0,
        applyNumberFormat: 1
    };
    return e_length;
}
function Kf(e, t, r, a, n, i) {
    try {
        if (a.cellNF) {
            e.z = _table[t];
        }
    } catch (error) {
        if (a.WTF) {
            throw error;
        }
    }
    if (!(e.t === "z" && !a.cellStyles)) {
        if (e.t === "d" && typeof e.v === "string") {
            e.v = Ve(e.v);
        }
        if ((!a || a.cellText !== false) && e.t !== "z") {
            try {
                if (_table[t] == null) {
                    load(mo[t] || "General", t);
                }
                if (e.t === "e") {
                    e.w = e.w || vt[e.v];
                } else if (t === 0) {
                    if (e.t === "n") {
                        if ((e.v | 0) === e.v) {
                            e.w = e.v.toString(10);
                        } else {
                            e.w = Na(e.v);
                        }
                    } else if (e.t === "d") {
                        const s = ir(e.v);
                        if ((s | 0) === s) {
                            e.w = s.toString(10);
                        } else {
                            e.w = Na(s);
                        }
                    } else {
                        if (e.v === undefined) {
                            return "";
                        }
                        e.w = Mt(e.v, sa);
                    }
                } else {
                    if (e.t === "d") {
                        e.w = format(t, ir(e.v), sa);
                    } else {
                        e.w = format(t, e.v, sa);
                    }
                }
            } catch (error) {
                if (a.WTF) {
                    throw error;
                }
            }
        }
        if (a.cellStyles && r != null) {
            try {
                e.s = i.Fills[r];
                if (e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb) {
                    e.s.fgColor.rgb = k0(n.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0);
                    if (a.WTF) {
                        e.s.fgColor.raw_rgb = n.themeElements.clrScheme[e.s.fgColor.theme].rgb;
                    }
                }
                if (e.s.bgColor && e.s.bgColor.theme) {
                    e.s.bgColor.rgb = k0(n.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0);
                    if (a.WTF) {
                        e.s.bgColor.raw_rgb = n.themeElements.clrScheme[e.s.bgColor.theme].rgb;
                    }
                }
            } catch (error) {
                if (a.WTF && i.Fills) {
                    throw error;
                }
            }
        }
    }
}
function kv(e, t, r) {
    if (e && e["!ref"]) {
        const a = Ae(e["!ref"]);
        if (a.e.c < a.s.c || a.e.r < a.s.r) {
            throw new Error(`Bad range (${r}): ${e["!ref"]}`);
        }
    }
}
function Ev(e, t) {
    const r = Ae(t);
    if (r.s.r <= r.e.r && r.s.c <= r.e.c && r.s.r >= 0 && r.s.c >= 0) {
        e["!ref"] = encode_range(r);
    }
}
const Tv = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g;
const Sv = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/;
const Fv = /<(?:\w:)?hyperlink [^>]*>/mg;
const yv = /"(\w*:\w*)"/;
const Av = /<(?:\w:)?col\b[^>]*[\/]?>/g;
const Cv = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g;
const Dv = /<(?:\w:)?pageMargins[^>]*\/>/g;
const Yf = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/;
const Ov = /<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/;
const Iv = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
function Rv(e, t, r, a, n, i, s) {
    if (!e) {
        return e;
    }
    if (!a) {
        a = {
            "!id": {}
        };
    }
    const f = t.dense ? [] : {};
    const c = {
        s: {
            r: 2000000,
            c: 2000000
        },
        e: {
            r: 0,
            c: 0
        }
    };
    let o = "";
    let l = "";
    const u = e.match(Sv);
    if (u) {
        o = e.slice(0, u.index);
        l = e.slice(u.index + u[0].length);
    } else {
        l = e;
        o = e;
    }
    let x = o.match(Yf);
    if (x) {
        zn(x[0], f, n, r);
    } else if (x = o.match(Ov)) {
        bv(x[0], x[1] || "", f, n, r);
    }
    let index = (o.match(/<(?:\w*:)?dimension/) || {
        index: -1
    }).index;
    if (index > 0) {
        const v = o.slice(index, index + 50).match(yv);
        if (v) {
            Ev(f, v[1]);
        }
    }
    const h = o.match(Iv);
    if (h && h[1]) {
        Kv(h[1], n);
    }
    const p = [];
    if (t.cellStyles) {
        const w = o.match(Av);
        if (w) {
            Vv(p, w);
        }
    }
    if (u) {
        Jv(u[1], f, t, c, i, s);
    }
    const y = l.match(Cv);
    if (y) {
        f["!autofilter"] = Gv(y[0]);
    }
    const g = [];
    const D = l.match(Tv);
    if (D) {
        for(index = 0; index != D.length; ++index){
            g[index] = Ae(D[index].slice(D[index].indexOf('"') + 1));
        }
    }
    const b = l.match(Fv);
    if (b) {
        Uv(f, b, a);
    }
    const N = l.match(Dv);
    if (N) {
        f["!margins"] = Wv(me(N[0]));
    }
    if (!f["!ref"] && c.e.c >= c.s.c && c.e.r >= c.s.r) {
        f["!ref"] = encode_range(c);
    }
    if (t.sheetRows > 0 && f["!ref"]) {
        const F = Ae(f["!ref"]);
        if (t.sheetRows <= +F.e.r) {
            F.e.r = t.sheetRows - 1;
            if (F.e.r > c.e.r) {
                F.e.r = c.e.r;
            }
            if (F.e.r < F.s.r) {
                F.s.r = F.e.r;
            }
            if (F.e.c > c.e.c) {
                F.e.c = c.e.c;
            }
            if (F.e.c < F.s.c) {
                F.s.c = F.e.c;
            }
            f["!fullref"] = f["!ref"];
            f["!ref"] = encode_range(F);
        }
    }
    if (p.length > 0) {
        f["!cols"] = p;
    }
    if (g.length > 0) {
        f["!merges"] = g;
    }
    return f;
}
function Nv(e) {
    if (e.length === 0) {
        return "";
    }
    let t = `<mergeCells count="${e.length}">`;
    for(let r = 0; r != e.length; ++r){
        t += `<mergeCell ref="${encode_range(e[r])}"/>`;
    }
    return `${t}</mergeCells>`;
}
function zn(e, t, r, a) {
    const n = me(e);
    if (!r.Sheets[a]) {
        r.Sheets[a] = {};
    }
    if (n.codeName) {
        r.Sheets[a].CodeName = Oe(Le(n.codeName));
    }
}
function bv(e, t, r, a, n) {
    zn(e.slice(0, e.indexOf(">")), r, a, n);
}
function Pv(e, t, r, a, n) {
    let i = false;
    const s = {};
    let f = null;
    if (a.bookType !== "xlsx" && t.vbaraw) {
        let c = t.SheetNames[r];
        try {
            if (t.Workbook) {
                c = t.Workbook.Sheets[r].CodeName || c;
            }
        } catch  {}
        i = true;
        s.codeName = tt(be(c));
    }
    if (e && e["!outline"]) {
        const o = {
            summaryBelow: 1,
            summaryRight: 1
        };
        if (e["!outline"].above) {
            o.summaryBelow = 0;
        }
        if (e["!outline"].left) {
            o.summaryRight = 0;
        }
        f = (f || "") + ae("outlinePr", null, o);
    }
    if (!(!i && !f)) {
        n[n.length] = ae("sheetPr", f, s);
    }
}
const Lv = [
    "objects",
    "scenarios",
    "selectLockedCells",
    "selectUnlockedCells"
];
const Bv = [
    "formatColumns",
    "formatRows",
    "formatCells",
    "insertColumns",
    "insertRows",
    "insertHyperlinks",
    "deleteColumns",
    "deleteRows",
    "sort",
    "autoFilter",
    "pivotTables"
];
function Mv(e) {
    const t = {
        sheet: 1
    };
    Lv.forEach((r)=>{
        if (e[r] != null && e[r]) {
            t[r] = "1";
        }
    });
    Bv.forEach((r)=>{
        if (e[r] != null && !e[r]) {
            t[r] = "0";
        }
    });
    if (e.password) {
        t.password = Mn(e.password).toString(16).toUpperCase();
    }
    return ae("sheetProtection", null, t);
}
function Uv(e, t, r) {
    const a = Array.isArray(e);
    for(let n = 0; n != t.length; ++n){
        const i = me(Le(t[n]), true);
        if (!i.ref) {
            return;
        }
        let s = ((r || {})["!id"] || [])[i.id];
        if (s) {
            i.Target = s.Target;
            if (i.location) {
                i.Target += `#${Oe(i.location)}`;
            }
        } else {
            i.Target = `#${Oe(i.location)}`;
            s = {
                Target: i.Target,
                TargetMode: "Internal"
            };
        }
        i.Rel = s;
        if (i.tooltip) {
            i.Tooltip = i.tooltip;
            delete i.tooltip;
        }
        for(let f = Ae(i.ref), c = f.s.r; c <= f.e.r; ++c){
            for(let o = f.s.c; o <= f.e.c; ++o){
                const l = encode_cell({
                    c: o,
                    r: c
                });
                if (a) {
                    if (!e[c]) {
                        e[c] = [];
                    }
                    if (!e[c][o]) {
                        e[c][o] = {
                            t: "z",
                            v: undefined
                        };
                    }
                    e[c][o].l = i;
                } else {
                    if (!e[l]) {
                        e[l] = {
                            t: "z",
                            v: undefined
                        };
                    }
                    e[l].l = i;
                }
            }
        }
    }
}
function Wv(e) {
    const t = {};
    [
        "left",
        "right",
        "top",
        "bottom",
        "header",
        "footer"
    ].forEach((r)=>{
        if (e[r]) {
            t[r] = parseFloat(e[r]);
        }
    });
    return t;
}
function Hv(e) {
    Lt(e);
    return ae("pageMargins", null, e);
}
function Vv(e, t) {
    let r = false;
    for(let a = 0; a != t.length; ++a){
        const n = me(t[a], true);
        if (n.hidden) {
            n.hidden = We(n.hidden);
        }
        let i = parseInt(n.min, 10) - 1;
        const s = parseInt(n.max, 10) - 1;
        if (n.outlineLevel) {
            n.level = +n.outlineLevel || 0;
        }
        delete n.min;
        delete n.max;
        n.width = +n.width;
        if (!r && n.width) {
            r = true;
            Un(n.width);
        }
        St(n);
        while(i <= s){
            e[i++] = Me(n);
        }
    }
}
function Xv(e, t) {
    const r = [
        "<cols>"
    ];
    let a;
    for(let n = 0; n != t.length; ++n){
        if (a = t[n]) {
            r[r.length] = ae("col", null, N0(n, a));
        }
    }
    r[r.length] = "</cols>";
    return r.join("");
}
function Gv(e) {
    const t = {
        ref: (e.match(/ref="([^"]*)"/) || [])[1]
    };
    return t;
}
function zv(e, t, r, a) {
    let ref = typeof e.ref === "string" ? e.ref : encode_range(e.ref);
    if (!r.Workbook) {
        r.Workbook = {
            Sheets: []
        };
    }
    if (!r.Workbook.Names) {
        r.Workbook.Names = [];
    }
    const Names = r.Workbook.Names;
    const s = decode_range(ref);
    if (s.s.r == s.e.r) {
        s.e.r = decode_range(t["!ref"]).e.r;
        ref = encode_range(s);
    }
    for(var f = 0; f < Names.length; ++f){
        const Name = Names[f];
        if (Name.Name == "_xlnm._FilterDatabase" && Name.Sheet == a) {
            Name.Ref = `'${r.SheetNames[a]}'!${ref}`;
            break;
        }
    }
    if (f == Names.length) {
        Names.push({
            Name: "_xlnm._FilterDatabase",
            Sheet: a,
            Ref: `'${r.SheetNames[a]}'!${ref}`
        });
    }
    return ae("autoFilter", null, {
        ref
    });
}
const $v = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;
function Kv(e, t) {
    if (!t.Views) {
        t.Views = [
            {}
        ];
    }
    (e.match($v) || []).forEach((r, a)=>{
        const n = me(r);
        if (!t.Views[a]) {
            t.Views[a] = {};
        }
        if (+n.zoomScale) {
            t.Views[a].zoom = +n.zoomScale;
        }
        if (We(n.rightToLeft)) {
            t.Views[a].RTL = true;
        }
    });
}
function Yv(e, t, r, a) {
    const n = {
        workbookViewId: "0"
    };
    if ((((a || {}).Workbook || {}).Views || [])[0]) {
        n.rightToLeft = a.Workbook.Views[0].RTL ? "1" : "0";
    }
    return ae("sheetViews", ae("sheetView", null, n), {});
}
function jv(e, t, r, a) {
    if (e.c) {
        r["!comments"].push([
            t,
            e.c
        ]);
    }
    if (e.v === undefined && typeof e.f !== "string" || e.t === "z" && !e.f) {
        return "";
    }
    let n = "";
    const { t: t_1, v } = e;
    if (e.t !== "z") {
        switch(e.t){
            case "b":
                n = e.v ? "1" : "0";
                break;
            case "n":
                n = `${e.v}`;
                break;
            case "e":
                n = vt[e.v];
                break;
            case "d":
                if (a && a.cellDates) {
                    n = Ve(e.v, -1).toISOString();
                } else {
                    e = Me(e);
                    e.t = "n";
                    n = `${e.v = ir(Ve(e.v))}`;
                }
                if (typeof e.z === "undefined") {
                    e.z = _table[14];
                }
                break;
            default:
                n = e.v;
                break;
        }
    }
    let f = hr("v", be(n));
    const c = {
        r: t
    };
    const o = Dt(a.cellXfs, e, a);
    if (o !== 0) {
        c.s = o;
    }
    switch(e.t){
        case "n":
            break;
        case "d":
            c.t = "d";
            break;
        case "b":
            c.t = "b";
            break;
        case "e":
            c.t = "e";
            break;
        case "z":
            break;
        default:
            if (e.v == null) {
                delete e.t;
                break;
            }
            if (e.v.length > 32767) {
                throw new Error("Text length must not exceed 32767 characters");
            }
            if (a && a.bookSST) {
                f = hr("v", `${Gn(a.Strings, e.v, a.revStrings)}`);
                c.t = "s";
                break;
            }
            c.t = "str";
            break;
    }
    if (e.t != t_1) {
        e.t = t_1;
        e.v = v;
    }
    if (typeof e.f === "string" && e.f) {
        const l = e.F && e.F.slice(0, t.length) == t ? {
            t: "array",
            ref: e.F
        } : null;
        f = ae("f", be(e.f), l) + (e.v != null ? f : "");
    }
    if (e.l) {
        r["!links"].push([
            t,
            e.l
        ]);
    }
    if (e.D) {
        c.cm = 1;
    }
    return ae("c", f, c);
}
var Jv = (()=>{
    const e = /<(?:\w+:)?c[ \/>]/;
    const t = /<\/(?:\w+:)?row>/;
    const r = /r=["']([^"']*)["']/;
    const a = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/;
    const n = /ref=["']([^"']*)["']/;
    const i = ba("v");
    const s = ba("f");
    return (c, o, l, u, x, d)=>{
        let v = 0;
        let h = "";
        let p = [];
        let w = [];
        let y = 0;
        let g = 0;
        let D = 0;
        let b = "";
        let N;
        let F;
        let B = 0;
        let I = 0;
        let z;
        let X;
        let L = 0;
        let J = 0;
        const le = Array.isArray(d.CellXf);
        let ie;
        const he = [];
        const ce = [];
        const Pe = Array.isArray(o);
        const V = [];
        let ve = {};
        let ge = false;
        const C = !!l.sheetStubs;
        const P = c.split(t);
        for(let O = 0, R = P.length; O != R; ++O){
            h = P[O].trim();
            const Y = h.length;
            if (Y !== 0) {
                let re = 0;
                e: for(v = 0; v < Y; ++v){
                    switch(h[v]){
                        case ">":
                            if (h[v - 1] != "/") {
                                ++v;
                                break e;
                            }
                            if (l && l.cellStyles) {
                                F = me(h.slice(re, v), true);
                                B = F.r != null ? parseInt(F.r, 10) : B + 1;
                                I = -1;
                                if (l.sheetRows && l.sheetRows < B) {
                                    continue;
                                }
                                ve = {};
                                ge = false;
                                if (F.ht) {
                                    ge = true;
                                    ve.hpt = parseFloat(F.ht);
                                    ve.hpx = oa(ve.hpt);
                                }
                                if (F.hidden == "1") {
                                    ge = true;
                                    ve.hidden = true;
                                }
                                if (F.outlineLevel != null) {
                                    ge = true;
                                    ve.level = +F.outlineLevel;
                                }
                                if (ge) {
                                    V[B - 1] = ve;
                                }
                            }
                            break;
                        case "<":
                            re = v;
                            break;
                    }
                }
                if (re >= v) {
                    break;
                }
                F = me(h.slice(re, v), true);
                B = F.r != null ? parseInt(F.r, 10) : B + 1;
                I = -1;
                if (!(l.sheetRows && l.sheetRows < B)) {
                    if (u.s.r > B - 1) {
                        u.s.r = B - 1;
                    }
                    if (u.e.r < B - 1) {
                        u.e.r = B - 1;
                    }
                    if (l && l.cellStyles) {
                        ve = {};
                        ge = false;
                        if (F.ht) {
                            ge = true;
                            ve.hpt = parseFloat(F.ht);
                            ve.hpx = oa(ve.hpt);
                        }
                        if (F.hidden == "1") {
                            ge = true;
                            ve.hidden = true;
                        }
                        if (F.outlineLevel != null) {
                            ge = true;
                            ve.level = +F.outlineLevel;
                        }
                        if (ge) {
                            V[B - 1] = ve;
                        }
                    }
                    p = h.slice(v).split(e);
                    for(var te = 0; te != p.length && p[te].trim().charAt(0) == "<"; ++te);
                    p = p.slice(te);
                    for(v = 0; v != p.length; ++v){
                        h = p[v].trim();
                        if (h.length !== 0) {
                            w = h.match(r);
                            y = v;
                            g = 0;
                            D = 0;
                            h = `<c ${h.slice(0, 1) == "<" ? ">" : ""}${h}`;
                            if (w != null && w.length === 2) {
                                y = 0;
                                b = w[1];
                                for(g = 0; g != b.length && !((D = b.charCodeAt(g) - 64) < 1 || D > 26); ++g){
                                    y = 26 * y + D;
                                }
                                --y;
                                I = y;
                            } else {
                                ++I;
                            }
                            for(g = 0; g != h.length && h.charCodeAt(g) !== 62; ++g);
                            ++g;
                            F = me(h.slice(0, g), true);
                            if (!F.r) {
                                F.r = encode_cell({
                                    r: B - 1,
                                    c: I
                                });
                            }
                            b = h.slice(g);
                            N = {
                                t: ""
                            };
                            if ((w = b.match(i)) != null && w[1] !== "") {
                                N.v = Oe(w[1]);
                            }
                            if (l.cellFormula) {
                                if ((w = b.match(s)) != null && w[1] !== "") {
                                    N.f = Oe(Le(w[1])).replace(/\r\n/g, `
`);
                                    if (!l.xlfn) {
                                        N.f = Zi(N.f);
                                    }
                                    if (w[0].indexOf('t="array"') > -1) {
                                        N.F = (b.match(n) || [])[1];
                                        if (N.F.indexOf(":") > -1) {
                                            he.push([
                                                Ae(N.F),
                                                N.F
                                            ]);
                                        }
                                    } else if (w[0].indexOf('t="shared"') > -1) {
                                        X = me(w[0]);
                                        let Q = Oe(Le(w[1]));
                                        if (!l.xlfn) {
                                            Q = Zi(Q);
                                        }
                                        ce[parseInt(X.si, 10)] = [
                                            X,
                                            Q,
                                            F.r
                                        ];
                                    }
                                } else {
                                    if (w = b.match(/<f[^>]*\/>/)) {
                                        X = me(w[0]);
                                        if (ce[X.si]) {
                                            N.f = $x(ce[X.si][1], ce[X.si][2], F.r);
                                        }
                                    }
                                }
                                const Z = decode_cell(F.r);
                                for(g = 0; g < he.length; ++g){
                                    if (Z.r >= he[g][0].s.r && Z.r <= he[g][0].e.r && Z.c >= he[g][0].s.c && Z.c <= he[g][0].e.c) {
                                        N.F = he[g][1];
                                    }
                                }
                            }
                            if (F.t == null && N.v === undefined) {
                                if (N.f || N.F) {
                                    N.v = 0;
                                    N.t = "n";
                                } else if (C) {
                                    N.t = "z";
                                } else {
                                    continue;
                                }
                            } else {
                                N.t = F.t || "n";
                            }
                            if (u.s.c > I) {
                                u.s.c = I;
                            }
                            if (u.e.c < I) {
                                u.e.c = I;
                            }
                            switch(N.t){
                                case "n":
                                    if (N.v == "" || N.v == null) {
                                        if (!C) {
                                            continue;
                                        }
                                        N.t = "z";
                                    } else {
                                        N.v = parseFloat(N.v);
                                    }
                                    break;
                                case "s":
                                    if (typeof N.v === "undefined") {
                                        if (!C) {
                                            continue;
                                        }
                                        N.t = "z";
                                    } else {
                                        z = Strings[parseInt(N.v, 10)];
                                        N.v = z.t;
                                        N.r = z.r;
                                        if (l.cellHTML) {
                                            N.h = z.h;
                                        }
                                    }
                                    break;
                                case "str":
                                    N.t = "s";
                                    N.v = N.v != null ? Le(N.v) : "";
                                    if (l.cellHTML) {
                                        N.h = _n(N.v);
                                    }
                                    break;
                                case "inlineStr":
                                    w = b.match(a);
                                    N.t = "s";
                                    if (w != null && (z = Bn(w[1]))) {
                                        N.v = z.t;
                                        if (l.cellHTML) {
                                            N.h = z.h;
                                        }
                                    } else {
                                        N.v = "";
                                    }
                                    break;
                                case "b":
                                    N.v = We(N.v);
                                    break;
                                case "d":
                                    if (l.cellDates) {
                                        N.v = Ve(N.v, 1);
                                    } else {
                                        N.v = ir(Ve(N.v, 1));
                                        N.t = "n";
                                    }
                                    break;
                                case "e":
                                    if (!l || l.cellText !== false) {
                                        N.w = N.v;
                                    }
                                    N.v = js[N.v];
                                    break;
                            }
                            J = 0;
                            L = 0;
                            ie = null;
                            if (le && F.s !== undefined) {
                                ie = d.CellXf[F.s];
                                ie != null && (ie.numFmtId != null && (L = ie.numFmtId), l.cellStyles && ie.fillId != null && (J = ie.fillId));
                            }
                            Kf(N, L, J, l, x, d);
                            if (l.cellDates && le && N.t == "n" && is_date(_table[L])) {
                                N.t = "d";
                                N.v = C0(N.v);
                            }
                            if (F.cm && l.xlmeta) {
                                const Ee = (l.xlmeta.Cell || [])[+F.cm - 1];
                                if (Ee && Ee.type == "XLDAPR") {
                                    N.D = true;
                                }
                            }
                            if (Pe) {
                                const A = decode_cell(F.r);
                                if (!o[A.r]) {
                                    o[A.r] = [];
                                }
                                o[A.r][A.c] = N;
                            } else {
                                o[F.r] = N;
                            }
                        }
                    }
                }
            }
        }
        if (V.length > 0) {
            o["!rows"] = V;
        }
    };
})();
function Zv(e, t, r, a) {
    const n = [];
    let i = [];
    const s = Ae(e["!ref"]);
    let f = "";
    let c;
    let o = "";
    const l = [];
    let u = 0;
    let x = 0;
    const d = e["!rows"];
    const v = Array.isArray(e);
    let h = {
        r: o
    };
    let p;
    let w = -1;
    for(x = s.s.c; x <= s.e.c; ++x){
        l[x] = encode_col(x);
    }
    for(u = s.s.r; u <= s.e.r; ++u){
        i = [];
        o = encode_row(u);
        for(x = s.s.c; x <= s.e.c; ++x){
            c = l[x] + o;
            const y = v ? (e[u] || [])[x] : e[c];
            if (y !== undefined && (f = jv(y, c, e, t)) != null) {
                i.push(f);
            }
        }
        if (i.length > 0 || d && d[u]) {
            h = {
                r: o
            };
            if (d && d[u]) {
                p = d[u];
                if (p.hidden) {
                    h.hidden = 1;
                }
                w = -1;
                if (p.hpx) {
                    w = Ha(p.hpx);
                } else if (p.hpt) {
                    w = p.hpt;
                }
                if (w > -1) {
                    h.ht = w;
                    h.customHeight = 1;
                }
                if (p.level) {
                    h.outlineLevel = p.level;
                }
            }
            n[n.length] = ae("row", i.join(""), h);
        }
    }
    if (d) {
        for(; u < d.length; ++u){
            if (d && d[u]) {
                h = {
                    r: u + 1
                };
                p = d[u];
                if (p.hidden) {
                    h.hidden = 1;
                }
                w = -1;
                if (p.hpx) {
                    w = Ha(p.hpx);
                } else if (p.hpt) {
                    w = p.hpt;
                }
                if (w > -1) {
                    h.ht = w;
                    h.customHeight = 1;
                }
                if (p.level) {
                    h.outlineLevel = p.level;
                }
                n[n.length] = ae("row", "", h);
            }
        }
    }
    return n.join("");
}
function jf(e, t, r, a) {
    const n = [
        Qe,
        ae("worksheet", null, {
            xmlns: zt[0],
            "xmlns:r": nr.r
        })
    ];
    const i = r.SheetNames[e];
    let s = 0;
    let f = "";
    let c = r.Sheets[i];
    if (c == null) {
        c = {};
    }
    let o = c["!ref"] || "A1";
    const l = Ae(o);
    if (l.e.c > 16383 || l.e.r > 1048575) {
        if (t.WTF) {
            throw new Error(`Range ${o} exceeds format limit A1:XFD1048576`);
        }
        l.e.c = Math.min(l.e.c, 16383);
        l.e.r = Math.min(l.e.c, 1048575);
        o = encode_range(l);
    }
    if (!a) {
        a = {};
    }
    c["!comments"] = [];
    const u = [];
    Pv(c, r, e, t, n);
    n[n.length] = ae("dimension", null, {
        ref: o
    });
    n[n.length] = Yv(c, t, e, r);
    if (t.sheetFormat) {
        n[n.length] = ae("sheetFormatPr", null, {
            defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
            baseColWidth: t.sheetFormat.baseColWidth || "10",
            outlineLevelRow: t.sheetFormat.outlineLevelRow || "7"
        });
    }
    if (c["!cols"] != null && c["!cols"].length > 0) {
        n[n.length] = Xv(c, c["!cols"]);
    }
    n[s = n.length] = "<sheetData/>";
    c["!links"] = [];
    if (c["!ref"] != null) {
        f = Zv(c, t);
        if (f.length > 0) {
            n[n.length] = f;
        }
    }
    if (n.length > s + 1) {
        n[n.length] = "</sheetData>";
        n[s] = n[s].replace("/>", ">");
    }
    if (c["!protect"]) {
        n[n.length] = Mv(c["!protect"]);
    }
    if (c["!autofilter"] != null) {
        n[n.length] = zv(c["!autofilter"], c, r, e);
    }
    if (c["!merges"] != null && c["!merges"].length > 0) {
        n[n.length] = Nv(c["!merges"]);
    }
    let x = -1;
    let d;
    let v = -1;
    if (c["!links"].length > 0) {
        n[n.length] = "<hyperlinks>";
        c["!links"].forEach((h)=>{
            if (h[1].Target) {
                d = {
                    ref: h[0]
                };
                if (h[1].Target.charAt(0) != "#") {
                    v = Ne(a, -1, be(h[1].Target).replace(/#.*$/, ""), Fe.HLINK);
                    d["r:id"] = `rId${v}`;
                }
                if ((x = h[1].Target.indexOf("#")) > -1) {
                    d.location = be(h[1].Target.slice(x + 1));
                }
                if (h[1].Tooltip) {
                    d.tooltip = be(h[1].Tooltip);
                }
                n[n.length] = ae("hyperlink", null, d);
            }
        });
        n[n.length] = "</hyperlinks>";
    }
    delete c["!links"];
    if (c["!margins"] != null) {
        n[n.length] = Hv(c["!margins"]);
    }
    if (!t || t.ignoreEC || t.ignoreEC == null) {
        n[n.length] = hr("ignoredErrors", ae("ignoredError", null, {
            numberStoredAsText: 1,
            sqref: o
        }));
    }
    if (u.length > 0) {
        v = Ne(a, -1, `../drawings/drawing${e + 1}.xml`, Fe.DRAW);
        n[n.length] = ae("drawing", null, {
            "r:id": `rId${v}`
        });
        c["!drawing"] = u;
    }
    if (c["!comments"].length > 0) {
        v = Ne(a, -1, `../drawings/vmlDrawing${e + 1}.vml`, Fe.VML);
        n[n.length] = ae("legacyDrawing", null, {
            "r:id": `rId${v}`
        });
        c["!legacy"] = v;
    }
    if (n.length > 1) {
        n[n.length] = "</worksheet>";
        n[1] = n[1].replace("/>", ">");
    }
    return n.join("");
}
function qv(e, t) {
    const r = {};
    const a = e.l + t;
    r.r = e.read_shift(4);
    e.l += 4;
    const n = e.read_shift(2);
    e.l += 1;
    const i = e.read_shift(1);
    e.l = a;
    if (i & 7) {
        r.level = i & 7;
    }
    if (i & 16) {
        r.hidden = true;
    }
    if (i & 32) {
        r.hpt = n / 20;
    }
    return r;
}
function Qv(e, t, r) {
    const a = G(145);
    const n = (r["!rows"] || [])[e] || {};
    a.write_shift(4, e);
    a.write_shift(4, 0);
    let i = 320;
    if (n.hpx) {
        i = Ha(n.hpx) * 20;
    } else if (n.hpt) {
        i = n.hpt * 20;
    }
    a.write_shift(2, i);
    a.write_shift(1, 0);
    let s = 0;
    if (n.level) {
        s |= n.level;
    }
    if (n.hidden) {
        s |= 16;
    }
    if (n.hpx || n.hpt) {
        s |= 32;
    }
    a.write_shift(1, s);
    a.write_shift(1, 0);
    let f = 0;
    const c = a.l;
    a.l += 4;
    const o = {
        r: e,
        c: 0
    };
    for(let l = 0; l < 16; ++l){
        if (!(t.s.c > l + 1 << 10 || t.e.c < l << 10)) {
            let u = -1;
            let x = -1;
            for(let d = l << 10; d < l + 1 << 10; ++d){
                o.c = d;
                const v = Array.isArray(r) ? (r[o.r] || [])[o.c] : r[encode_cell(o)];
                if (v) {
                    if (u < 0) {
                        u = d;
                    }
                    x = d;
                }
            }
            if (!(u < 0)) {
                ++f;
                a.write_shift(4, u);
                a.write_shift(4, x);
            }
        }
    }
    const h = a.l;
    a.l = c;
    a.write_shift(4, f);
    a.l = h;
    if (a.length > a.l) {
        return a.slice(0, a.l);
    }
    return a;
}
function e2(e, t, r, a) {
    const n = Qv(a, r, t);
    if (n.length > 17 || (t["!rows"] || [])[a]) {
        j(e, 0, n);
    }
}
const r2 = jt;
const t2 = xa;
function a2() {}
function n2(e, t) {
    const r = {};
    const a = e[e.l];
    ++e.l;
    r.above = !(a & 64);
    r.left = !(a & 128);
    e.l += 18;
    r.name = fl(e);
    return r;
}
function i2(e, t, r) {
    if (r == null) {
        r = G(84 + 4 * e.length);
    }
    let a = 192;
    t && (t.above && (a &= -65), t.left && (a &= -129));
    r.write_shift(1, a);
    for(let n = 1; n < 3; ++n){
        r.write_shift(1, 0);
    }
    g0({
        auto: 1
    }, r);
    r.write_shift(-4, -1);
    r.write_shift(-4, -1);
    Gs(e, r);
    return r.slice(0, r.l);
}
function s2(e) {
    const t = $r(e);
    return [
        t
    ];
}
function f2(e, t, r) {
    if (r == null) {
        r = G(8);
    }
    return $t(t, r);
}
function c2(e) {
    const t = Kt(e);
    return [
        t
    ];
}
function o2(e, t, r) {
    if (r == null) {
        r = G(4);
    }
    return Yt(t, r);
}
function l2(e) {
    const t = $r(e);
    const r = e.read_shift(1);
    return [
        t,
        r,
        "b"
    ];
}
function u2(e, t, r) {
    if (r == null) {
        r = G(9);
    }
    $t(t, r);
    r.write_shift(1, e.v ? 1 : 0);
    return r;
}
function h2(e) {
    const t = Kt(e);
    const r = e.read_shift(1);
    return [
        t,
        r,
        "b"
    ];
}
function x2(e, t, r) {
    if (r == null) {
        r = G(5);
    }
    Yt(t, r);
    r.write_shift(1, e.v ? 1 : 0);
    return r;
}
function d2(e) {
    const t = $r(e);
    const r = e.read_shift(1);
    return [
        t,
        r,
        "e"
    ];
}
function v2(e, t, r) {
    if (r == null) {
        r = G(9);
    }
    $t(t, r);
    r.write_shift(1, e.v);
    return r;
}
function p2(e) {
    const t = Kt(e);
    const r = e.read_shift(1);
    return [
        t,
        r,
        "e"
    ];
}
function m2(e, t, r) {
    if (r == null) {
        r = G(8);
    }
    Yt(t, r);
    r.write_shift(1, e.v);
    r.write_shift(2, 0);
    r.write_shift(1, 0);
    return r;
}
function g2(e) {
    const t = $r(e);
    const r = e.read_shift(4);
    return [
        t,
        r,
        "s"
    ];
}
function _2(e, t, r) {
    if (r == null) {
        r = G(12);
    }
    $t(t, r);
    r.write_shift(4, t.v);
    return r;
}
function w2(e) {
    const t = Kt(e);
    const r = e.read_shift(4);
    return [
        t,
        r,
        "s"
    ];
}
function k2(e, t, r) {
    if (r == null) {
        r = G(8);
    }
    Yt(t, r);
    r.write_shift(4, t.v);
    return r;
}
function E2(e) {
    const t = $r(e);
    const r = gr(e);
    return [
        t,
        r,
        "n"
    ];
}
function T2(e, t, r) {
    if (r == null) {
        r = G(16);
    }
    $t(t, r);
    Wt(e.v, r);
    return r;
}
function Jf(e) {
    const t = Kt(e);
    const r = gr(e);
    return [
        t,
        r,
        "n"
    ];
}
function S2(e, t, r) {
    if (r == null) {
        r = G(12);
    }
    Yt(t, r);
    Wt(e.v, r);
    return r;
}
function F2(e) {
    const t = $r(e);
    const r = Rn(e);
    return [
        t,
        r,
        "n"
    ];
}
function y2(e, t, r) {
    if (r == null) {
        r = G(12);
    }
    $t(t, r);
    zs(e.v, r);
    return r;
}
function A2(e) {
    const t = Kt(e);
    const r = Rn(e);
    return [
        t,
        r,
        "n"
    ];
}
function C2(e, t, r) {
    if (r == null) {
        r = G(8);
    }
    Yt(t, r);
    zs(e.v, r);
    return r;
}
function D2(e) {
    const t = $r(e);
    const r = Dn(e);
    return [
        t,
        r,
        "is"
    ];
}
function O2(e) {
    const t = $r(e);
    const r = wr(e);
    return [
        t,
        r,
        "str"
    ];
}
function I2(e, t, r) {
    if (r == null) {
        r = G(12 + 4 * e.v.length);
    }
    $t(t, r);
    or(e.v, r);
    if (r.length > r.l) {
        return r.slice(0, r.l);
    }
    return r;
}
function R2(e) {
    const t = Kt(e);
    const r = wr(e);
    return [
        t,
        r,
        "str"
    ];
}
function N2(e, t, r) {
    if (r == null) {
        r = G(8 + 4 * e.v.length);
    }
    Yt(t, r);
    or(e.v, r);
    if (r.length > r.l) {
        return r.slice(0, r.l);
    }
    return r;
}
function b2(e, t, r) {
    const a = e.l + t;
    const n = $r(e);
    n.r = r["!row"];
    const i = e.read_shift(1);
    const s = [
        n,
        i,
        "b"
    ];
    if (r.cellFormula) {
        e.l += 2;
        const f = R0(e, a - e.l, r);
        s[3] = pr(f, null, n, r.supbooks, r);
    } else {
        e.l = a;
    }
    return s;
}
function P2(e, t, r) {
    const a = e.l + t;
    const n = $r(e);
    n.r = r["!row"];
    const i = e.read_shift(1);
    const s = [
        n,
        i,
        "e"
    ];
    if (r.cellFormula) {
        e.l += 2;
        const f = R0(e, a - e.l, r);
        s[3] = pr(f, null, n, r.supbooks, r);
    } else {
        e.l = a;
    }
    return s;
}
function L2(e, t, r) {
    const a = e.l + t;
    const n = $r(e);
    n.r = r["!row"];
    const i = gr(e);
    const s = [
        n,
        i,
        "n"
    ];
    if (r.cellFormula) {
        e.l += 2;
        const f = R0(e, a - e.l, r);
        s[3] = pr(f, null, n, r.supbooks, r);
    } else {
        e.l = a;
    }
    return s;
}
function B2(e, t, r) {
    const a = e.l + t;
    const n = $r(e);
    n.r = r["!row"];
    const i = wr(e);
    const s = [
        n,
        i,
        "str"
    ];
    if (r.cellFormula) {
        e.l += 2;
        const f = R0(e, a - e.l, r);
        s[3] = pr(f, null, n, r.supbooks, r);
    } else {
        e.l = a;
    }
    return s;
}
const M2 = jt;
const U2 = xa;
function W2(e, t) {
    if (t == null) {
        t = G(4);
    }
    t.write_shift(4, e);
    return t;
}
function H2(e, t) {
    const r = e.l + t;
    const rfx = jt(e);
    const relId = On(e);
    const loc = wr(e);
    const s = wr(e);
    const display = wr(e);
    e.l = r;
    const c = {
        rfx,
        relId,
        loc,
        display
    };
    if (s) {
        c.Tooltip = s;
    }
    return c;
}
function V2(e, t) {
    const r = G(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
    xa({
        s: decode_cell(e[0]),
        e: decode_cell(e[0])
    }, r);
    In(`rId${t}`, r);
    const a = e[1].Target.indexOf("#");
    const n = a == -1 ? "" : e[1].Target.slice(a + 1);
    or(n || "", r);
    or(e[1].Tooltip || "", r);
    or("", r);
    return r.slice(0, r.l);
}
function X2() {}
function G2(e, t, r) {
    const a = e.l + t;
    const n = $s(e);
    const i = e.read_shift(1);
    const s = [
        n
    ];
    s[2] = i;
    if (r.cellFormula) {
        const f = dv(e, a - e.l, r);
        s[1] = f;
    } else {
        e.l = a;
    }
    return s;
}
function z2(e, t, r) {
    const a = e.l + t;
    const n = jt(e);
    const i = [
        n
    ];
    if (r.cellFormula) {
        const s = pv(e, a - e.l, r);
        i[1] = s;
        e.l = a;
    } else {
        e.l = a;
    }
    return i;
}
function $2(e, t, r) {
    if (r == null) {
        r = G(18);
    }
    const a = N0(e, t);
    r.write_shift(-4, e);
    r.write_shift(-4, e);
    r.write_shift(4, (a.width || 10) * 256);
    r.write_shift(4, 0);
    let n = 0;
    if (t.hidden) {
        n |= 1;
    }
    if (typeof a.width === "number") {
        n |= 2;
    }
    if (t.level) {
        n |= t.level << 8;
    }
    r.write_shift(2, n);
    return r;
}
const Zf = [
    "left",
    "right",
    "top",
    "bottom",
    "header",
    "footer"
];
function K2(e) {
    const t = {};
    Zf.forEach((r)=>{
        t[r] = gr(e);
    });
    return t;
}
function Y2(e, t) {
    if (t == null) {
        t = G(48);
    }
    Lt(e);
    Zf.forEach((r)=>{
        Wt(e[r], t);
    });
    return t;
}
function j2(e) {
    const t = e.read_shift(2);
    e.l += 28;
    return {
        RTL: t & 32
    };
}
function J2(e, Workbook, r) {
    if (r == null) {
        r = G(30);
    }
    let a = 924;
    if ((((Workbook || {}).Views || [])[0] || {}).RTL) {
        a |= 32;
    }
    r.write_shift(2, a);
    r.write_shift(4, 0);
    r.write_shift(4, 0);
    r.write_shift(4, 0);
    r.write_shift(1, 0);
    r.write_shift(1, 0);
    r.write_shift(2, 0);
    r.write_shift(2, 100);
    r.write_shift(2, 0);
    r.write_shift(2, 0);
    r.write_shift(2, 0);
    r.write_shift(4, 0);
    return r;
}
function Z2(e) {
    const t = G(24);
    t.write_shift(4, 4);
    t.write_shift(4, 1);
    xa(e, t);
    return t;
}
function q2(e, t) {
    if (t == null) {
        t = G(66);
    }
    t.write_shift(2, e.password ? Mn(e.password) : 0);
    t.write_shift(4, 1);
    [
        [
            "objects",
            false
        ],
        [
            "scenarios",
            false
        ],
        [
            "formatCells",
            true
        ],
        [
            "formatColumns",
            true
        ],
        [
            "formatRows",
            true
        ],
        [
            "insertColumns",
            true
        ],
        [
            "insertRows",
            true
        ],
        [
            "insertHyperlinks",
            true
        ],
        [
            "deleteColumns",
            true
        ],
        [
            "deleteRows",
            true
        ],
        [
            "selectLockedCells",
            false
        ],
        [
            "sort",
            true
        ],
        [
            "autoFilter",
            true
        ],
        [
            "pivotTables",
            true
        ],
        [
            "selectUnlockedCells",
            false
        ]
    ].forEach((r)=>{
        if (r[1]) {
            t.write_shift(4, e[r[0]] != null && !e[r[0]] ? 1 : 0);
        } else {
            t.write_shift(4, e[r[0]] != null && e[r[0]] ? 0 : 1);
        }
    });
    return t;
}
function Q2() {}
function ep() {}
function rp(e, t, r, a, n, i, s) {
    if (!e) {
        return e;
    }
    const f = t || {};
    if (!a) {
        a = {
            "!id": {}
        };
    }
    const c = f.dense ? [] : {};
    let o;
    const l = {
        s: {
            r: 2000000,
            c: 2000000
        },
        e: {
            r: 0,
            c: 0
        }
    };
    let u = false;
    let x = false;
    let d;
    let v;
    let h;
    let p;
    let w;
    let y;
    let g;
    let D;
    let b;
    const N = [];
    f.biff = 12;
    f["!row"] = 0;
    let F = 0;
    let B = false;
    const I = [];
    const z = {};
    const X = f.supbooks || n.supbooks || [
        []
    ];
    X.sharedf = z;
    X.arrayf = I;
    X.SheetNames = n.SheetNames || n.Sheets.map((Pe)=>Pe.name);
    if (!f.supbooks && (f.supbooks = X, n.Names)) {
        for(let L = 0; L < n.Names.length; ++L){
            X[0][L + 1] = n.Names[L];
        }
    }
    const J = [];
    const le = [];
    let ie = false;
    Va[16] = {
        n: "BrtShortReal",
        f: Jf
    };
    let he;
    dt(e, (V, ve, ge)=>{
        if (!x) {
            switch(ge){
                case 148:
                    o = V;
                    break;
                case 0:
                    d = V;
                    if (f.sheetRows && f.sheetRows <= d.r) {
                        x = true;
                    }
                    D = encode_row(p = d.r);
                    f["!row"] = d.r;
                    if (V.hidden || V.hpt || V.level != null) {
                        if (V.hpt) {
                            V.hpx = oa(V.hpt);
                        }
                        le[V.r] = V;
                    }
                    break;
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 62:
                    v = {
                        t: V[2]
                    };
                    switch(V[2]){
                        case "n":
                            v.v = V[1];
                            break;
                        case "s":
                            g = Strings[V[1]];
                            v.v = g.t;
                            v.r = g.r;
                            break;
                        case "b":
                            v.v = !!V[1];
                            break;
                        case "e":
                            v.v = V[1];
                            if (f.cellText !== false) {
                                v.w = vt[v.v];
                            }
                            break;
                        case "str":
                            v.t = "s";
                            v.v = V[1];
                            break;
                        case "is":
                            v.t = "s";
                            v.v = V[1].t;
                            break;
                    }
                    if (h = s.CellXf[V[0].iStyleRef]) {
                        Kf(v, h.numFmtId, null, f, i, s);
                    }
                    w = V[0].c == -1 ? w + 1 : V[0].c;
                    if (f.dense) {
                        if (!c[p]) {
                            c[p] = [];
                        }
                        c[p][w] = v;
                    } else {
                        c[encode_col(w) + D] = v;
                    }
                    if (f.cellFormula) {
                        B = false;
                        for(F = 0; F < I.length; ++F){
                            const C = I[F];
                            if (d.r >= C[0].s.r && d.r <= C[0].e.r && w >= C[0].s.c && w <= C[0].e.c) {
                                v.F = encode_range(C[0]);
                                B = true;
                            }
                        }
                        if (!B && V.length > 3) {
                            v.f = V[3];
                        }
                    }
                    if (l.s.r > d.r) {
                        l.s.r = d.r;
                    }
                    if (l.s.c > w) {
                        l.s.c = w;
                    }
                    if (l.e.r < d.r) {
                        l.e.r = d.r;
                    }
                    if (l.e.c < w) {
                        l.e.c = w;
                    }
                    if (f.cellDates && h && v.t == "n" && is_date(_table[h.numFmtId])) {
                        const P = parse_date_code(v.v);
                        if (P) {
                            v.t = "d";
                            v.v = new Date(P.y, P.m - 1, P.d, P.H, P.M, P.S, P.u);
                        }
                    }
                    if (he) {
                        if (he.type == "XLDAPR") {
                            v.D = true;
                        }
                        he = undefined;
                    }
                    break;
                case 1:
                case 12:
                    if (!f.sheetStubs || u) {
                        break;
                    }
                    v = {
                        t: "z",
                        v: undefined
                    };
                    w = V[0].c == -1 ? w + 1 : V[0].c;
                    if (f.dense) {
                        if (!c[p]) {
                            c[p] = [];
                        }
                        c[p][w] = v;
                    } else {
                        c[encode_col(w) + D] = v;
                    }
                    if (l.s.r > d.r) {
                        l.s.r = d.r;
                    }
                    if (l.s.c > w) {
                        l.s.c = w;
                    }
                    if (l.e.r < d.r) {
                        l.e.r = d.r;
                    }
                    if (l.e.c < w) {
                        l.e.c = w;
                    }
                    if (he) {
                        if (he.type == "XLDAPR") {
                            v.D = true;
                        }
                        he = undefined;
                    }
                    break;
                case 176:
                    N.push(V);
                    break;
                case 49:
                    he = ((f.xlmeta || {}).Cell || [])[V - 1];
                    break;
                case 494:
                    const O = a["!id"][V.relId];
                    if (O) {
                        V.Target = O.Target;
                        if (V.loc) {
                            V.Target += `#${V.loc}`;
                        }
                        V.Rel = O;
                    } else if (V.relId == "") {
                        V.Target = `#${V.loc}`;
                    }
                    for(p = V.rfx.s.r; p <= V.rfx.e.r; ++p){
                        for(w = V.rfx.s.c; w <= V.rfx.e.c; ++w){
                            if (f.dense) {
                                if (!c[p]) {
                                    c[p] = [];
                                }
                                if (!c[p][w]) {
                                    c[p][w] = {
                                        t: "z",
                                        v: undefined
                                    };
                                }
                                c[p][w].l = V;
                            } else {
                                y = encode_cell({
                                    c: w,
                                    r: p
                                });
                                if (!c[y]) {
                                    c[y] = {
                                        t: "z",
                                        v: undefined
                                    };
                                }
                                c[y].l = V;
                            }
                        }
                    }
                    break;
                case 426:
                    if (!f.cellFormula) {
                        break;
                    }
                    I.push(V);
                    b = f.dense ? c[p][w] : c[encode_col(w) + D];
                    b.f = pr(V[1], l, {
                        r: d.r,
                        c: w
                    }, X, f);
                    b.F = encode_range(V[0]);
                    break;
                case 427:
                    if (!f.cellFormula) {
                        break;
                    }
                    z[encode_cell(V[0].s)] = V[1];
                    b = f.dense ? c[p][w] : c[encode_col(w) + D];
                    b.f = pr(V[1], l, {
                        r: d.r,
                        c: w
                    }, X, f);
                    break;
                case 60:
                    if (!f.cellStyles) {
                        break;
                    }
                    while(V.e >= V.s){
                        J[V.e--] = {
                            width: V.w / 256,
                            hidden: !!(V.flags & 1),
                            level: V.level
                        };
                        if (!ie) {
                            ie = true;
                            Un(V.w / 256);
                        }
                        St(J[V.e + 1]);
                    }
                    break;
                case 161:
                    c["!autofilter"] = {
                        ref: encode_range(V)
                    };
                    break;
                case 476:
                    c["!margins"] = V;
                    break;
                case 147:
                    if (!n.Sheets[r]) {
                        n.Sheets[r] = {};
                    }
                    if (V.name) {
                        n.Sheets[r].CodeName = V.name;
                    }
                    if (V.above || V.left) {
                        c["!outline"] = {
                            above: V.above,
                            left: V.left
                        };
                    }
                    break;
                case 137:
                    if (!n.Views) {
                        n.Views = [
                            {}
                        ];
                    }
                    if (!n.Views[0]) {
                        n.Views[0] = {};
                    }
                    if (V.RTL) {
                        n.Views[0].RTL = true;
                    }
                    break;
                case 485:
                    break;
                case 64:
                case 1053:
                    break;
                case 151:
                    break;
                case 152:
                case 175:
                case 644:
                case 625:
                case 562:
                case 396:
                case 1112:
                case 1146:
                case 471:
                case 1050:
                case 649:
                case 1105:
                case 589:
                case 607:
                case 564:
                case 1055:
                case 168:
                case 174:
                case 1180:
                case 499:
                case 507:
                case 550:
                case 171:
                case 167:
                case 1177:
                case 169:
                case 1181:
                case 551:
                case 552:
                case 661:
                case 639:
                case 478:
                case 537:
                case 477:
                case 536:
                case 1103:
                case 680:
                case 1104:
                case 1024:
                case 663:
                case 535:
                case 678:
                case 504:
                case 1043:
                case 428:
                case 170:
                case 3072:
                case 50:
                case 2070:
                case 1045:
                    break;
                case 35:
                    u = true;
                    break;
                case 36:
                    u = false;
                    break;
                case 37:
                    u = true;
                    break;
                case 38:
                    u = false;
                    break;
                default:
                    if (!ve.T) {
                        if (!u || f.WTF) {
                            throw new Error(`Unexpected record 0x${ge.toString(16)}`);
                        }
                    }
            }
        }
    }, f);
    delete f.supbooks;
    delete f["!row"];
    if (!c["!ref"] && (l.s.r < 2000000 || o && (o.e.r > 0 || o.e.c > 0 || o.s.r > 0 || o.s.c > 0))) {
        c["!ref"] = encode_range(o || l);
    }
    if (f.sheetRows && c["!ref"]) {
        const ce = Ae(c["!ref"]);
        if (f.sheetRows <= +ce.e.r) {
            ce.e.r = f.sheetRows - 1;
            if (ce.e.r > l.e.r) {
                ce.e.r = l.e.r;
            }
            if (ce.e.r < ce.s.r) {
                ce.s.r = ce.e.r;
            }
            if (ce.e.c > l.e.c) {
                ce.e.c = l.e.c;
            }
            if (ce.e.c < ce.s.c) {
                ce.s.c = ce.e.c;
            }
            c["!fullref"] = c["!ref"];
            c["!ref"] = encode_range(ce);
        }
    }
    if (N.length > 0) {
        c["!merges"] = N;
    }
    if (J.length > 0) {
        c["!cols"] = J;
    }
    if (le.length > 0) {
        c["!rows"] = le;
    }
    return c;
}
function tp(e, t, r, a, n, i, s) {
    if (t.v === undefined) {
        return false;
    }
    let f = "";
    switch(t.t){
        case "b":
            f = t.v ? "1" : "0";
            break;
        case "d":
            t = Me(t);
            t.z = t.z || _table[14];
            t.v = ir(Ve(t.v));
            t.t = "n";
            break;
        case "n":
        case "e":
            f = `${t.v}`;
            break;
        default:
            f = t.v;
            break;
    }
    const c = {
        r,
        c: a
    };
    c.s = Dt(n.cellXfs, t, n);
    if (t.l) {
        i["!links"].push([
            encode_cell(c),
            t.l
        ]);
    }
    if (t.c) {
        i["!comments"].push([
            encode_cell(c),
            t.c
        ]);
    }
    switch(t.t){
        case "s":
        case "str":
            if (n.bookSST) {
                f = Gn(n.Strings, t.v, n.revStrings);
                c.t = "s";
                c.v = f;
                if (s) {
                    j(e, 18, k2(t, c));
                } else {
                    j(e, 7, _2(t, c));
                }
            } else {
                c.t = "str";
                if (s) {
                    j(e, 17, N2(t, c));
                } else {
                    j(e, 6, I2(t, c));
                }
            }
            return true;
        case "n":
            t.v == (t.v | 0) && t.v > -1000 && t.v < 1000 ? s ? j(e, 13, C2(t, c)) : j(e, 2, y2(t, c)) : s ? j(e, 16, S2(t, c)) : j(e, 5, T2(t, c));
            return true;
        case "b":
            c.t = "b";
            if (s) {
                j(e, 15, x2(t, c));
            } else {
                j(e, 4, u2(t, c));
            }
            return true;
        case "e":
            c.t = "e";
            if (s) {
                j(e, 14, m2(t, c));
            } else {
                j(e, 3, v2(t, c));
            }
            return true;
    }
    if (s) {
        j(e, 12, o2(t, c));
    } else {
        j(e, 1, f2(t, c));
    }
    return true;
}
function ap(e, t, r, a) {
    const n = Ae(t["!ref"] || "A1");
    let i;
    let s = "";
    const f = [];
    j(e, 145);
    const c = Array.isArray(t);
    let o = n.e.r;
    if (t["!rows"]) {
        o = Math.max(n.e.r, t["!rows"].length - 1);
    }
    for(let l = n.s.r; l <= o; ++l){
        s = encode_row(l);
        e2(e, t, n, l);
        let u = false;
        if (l <= n.e.r) {
            for(let x = n.s.c; x <= n.e.c; ++x){
                if (l === n.s.r) {
                    f[x] = encode_col(x);
                }
                i = f[x] + s;
                const d = c ? (t[l] || [])[x] : t[i];
                if (!d) {
                    u = false;
                    continue;
                }
                u = tp(e, d, l, x, a, t, u);
            }
        }
    }
    j(e, 146);
}
function np(e, t) {
    if (!(!t || !t["!merges"])) {
        j(e, 177, W2(t["!merges"].length));
        t["!merges"].forEach((r)=>{
            j(e, 176, U2(r));
        });
        j(e, 178);
    }
}
function ip(e, t) {
    if (!(!t || !t["!cols"])) {
        j(e, 390);
        t["!cols"].forEach((r, a)=>{
            if (r) {
                j(e, 60, $2(a, r));
            }
        });
        j(e, 391);
    }
}
function sp(e, t) {
    if (!(!t || !t["!ref"])) {
        j(e, 648);
        j(e, 649, Z2(Ae(t["!ref"])));
        j(e, 650);
    }
}
function fp(e, t, r) {
    t["!links"].forEach((a)=>{
        if (a[1].Target) {
            const n = Ne(r, -1, a[1].Target.replace(/#.*$/, ""), Fe.HLINK);
            j(e, 494, V2(a, n));
        }
    });
    delete t["!links"];
}
function cp(e, t, r, a) {
    if (t["!comments"].length > 0) {
        const n = Ne(a, -1, `../drawings/vmlDrawing${r + 1}.vml`, Fe.VML);
        j(e, 551, In(`rId${n}`));
        t["!legacy"] = n;
    }
}
function op(e, t, r, a) {
    if (t["!autofilter"]) {
        const n = t["!autofilter"];
        let i = typeof n.ref === "string" ? n.ref : encode_range(n.ref);
        if (!r.Workbook) {
            r.Workbook = {
                Sheets: []
            };
        }
        if (!r.Workbook.Names) {
            r.Workbook.Names = [];
        }
        const s = r.Workbook.Names;
        const f = decode_range(i);
        if (f.s.r == f.e.r) {
            f.e.r = decode_range(t["!ref"]).e.r;
            i = encode_range(f);
        }
        for(var c = 0; c < s.length; ++c){
            const o = s[c];
            if (o.Name == "_xlnm._FilterDatabase" && o.Sheet == a) {
                o.Ref = `'${r.SheetNames[a]}'!${i}`;
                break;
            }
        }
        if (c == s.length) {
            s.push({
                Name: "_xlnm._FilterDatabase",
                Sheet: a,
                Ref: `'${r.SheetNames[a]}'!${i}`
            });
        }
        j(e, 161, xa(Ae(i)));
        j(e, 162);
    }
}
function lp(e, t, Workbook) {
    j(e, 133);
    j(e, 137, J2(t, Workbook));
    j(e, 138);
    j(e, 134);
}
function up(e, t) {
    if (t["!protect"]) {
        j(e, 535, q2(t["!protect"]));
    }
}
function hp(e, t, r, a) {
    const n = Cr();
    const i = r.SheetNames[e];
    const s = r.Sheets[i] || {};
    let f = i;
    try {
        if (r && r.Workbook) {
            f = r.Workbook.Sheets[e].CodeName || f;
        }
    } catch  {}
    const c = Ae(s["!ref"] || "A1");
    if (c.e.c > 16383 || c.e.r > 1048575) {
        if (t.WTF) {
            throw new Error(`Range ${s["!ref"] || "A1"} exceeds format limit A1:XFD1048576`);
        }
        c.e.c = Math.min(c.e.c, 16383);
        c.e.r = Math.min(c.e.c, 1048575);
    }
    s["!links"] = [];
    s["!comments"] = [];
    j(n, 129);
    if (r.vbaraw || s["!outline"]) {
        j(n, 147, i2(f, s["!outline"]));
    }
    j(n, 148, t2(c));
    lp(n, s, r.Workbook);
    ip(n, s);
    ap(n, s, e, t);
    up(n, s);
    op(n, s, r, e);
    np(n, s);
    fp(n, s, a);
    if (s["!margins"]) {
        j(n, 476, Y2(s["!margins"]));
    }
    if (!t || t.ignoreEC || t.ignoreEC == null) {
        sp(n, s);
    }
    cp(n, s, e, a);
    j(n, 130);
    return n.end();
}
function xp(e) {
    const t = [];
    const r = e.match(/^<c:numCache>/);
    let a;
    (e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/mg) || []).forEach((i)=>{
        const s = i.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
        if (s) {
            t[+s[1]] = r ? +s[2] : s[2];
        }
    });
    const n = Oe((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || [
        "",
        "General"
    ])[1]);
    (e.match(/<c:f>(.*?)<\/c:f>/mg) || []).forEach((i)=>{
        a = i.replace(/<.*?>/g, "");
    });
    return [
        t,
        n,
        a
    ];
}
function dp(e, t, r, a, n, i) {
    const s = i || {
        "!type": "chart"
    };
    if (!e) {
        return i;
    }
    let f = 0;
    let c = 0;
    let o = "A";
    const l = {
        s: {
            r: 2000000,
            c: 2000000
        },
        e: {
            r: 0,
            c: 0
        }
    };
    (e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach((u)=>{
        const x = xp(u);
        l.s.r = l.s.c = 0;
        l.e.c = f;
        o = encode_col(f);
        x[0].forEach((d, v)=>{
            s[o + encode_row(v)] = {
                t: "n",
                v: d,
                z: x[1]
            };
            c = v;
        });
        if (l.e.r < c) {
            l.e.r = c;
        }
        ++f;
    });
    if (f > 0) {
        s["!ref"] = encode_range(l);
    }
    return s;
}
function vp(e, t, r, a, n) {
    if (!e) {
        return e;
    }
    if (!a) {
        a = {
            "!id": {}
        };
    }
    const i = {
        "!type": "chart",
        "!drawel": null,
        "!rel": ""
    };
    let s;
    const f = e.match(Yf);
    if (f) {
        zn(f[0], i, n, r);
    }
    if (s = e.match(/drawing r:id="(.*?)"/)) {
        i["!rel"] = s[1];
    }
    if (a["!id"][i["!rel"]]) {
        i["!drawel"] = a["!id"][i["!rel"]];
    }
    return i;
}
function pp(e, t) {
    e.l += 10;
    const name = wr(e);
    return {
        name
    };
}
function mp(e, t, r, a, n) {
    if (!e) {
        return e;
    }
    if (!a) {
        a = {
            "!id": {}
        };
    }
    const i = {
        "!type": "chart",
        "!drawel": null,
        "!rel": ""
    };
    let s = false;
    dt(e, (c, o, l)=>{
        switch(l){
            case 550:
                i["!rel"] = c;
                break;
            case 651:
                if (!n.Sheets[r]) {
                    n.Sheets[r] = {};
                }
                if (c.name) {
                    n.Sheets[r].CodeName = c.name;
                }
                break;
            case 562:
            case 652:
            case 669:
            case 679:
            case 551:
            case 552:
            case 476:
            case 3072:
                break;
            case 35:
                s = true;
                break;
            case 36:
                s = false;
                break;
            case 37:
                break;
            case 38:
                break;
            default:
                if (!(o.T > 0)) {
                    if (!(o.T < 0)) {
                        if (!s || t.WTF) {
                            throw new Error(`Unexpected record 0x${l.toString(16)}`);
                        }
                    }
                }
        }
    }, t);
    if (a["!id"][i["!rel"]]) {
        i["!drawel"] = a["!id"][i["!rel"]];
    }
    return i;
}
const $n = [
    [
        "allowRefreshQuery",
        false,
        "bool"
    ],
    [
        "autoCompressPictures",
        true,
        "bool"
    ],
    [
        "backupFile",
        false,
        "bool"
    ],
    [
        "checkCompatibility",
        false,
        "bool"
    ],
    [
        "CodeName",
        ""
    ],
    [
        "date1904",
        false,
        "bool"
    ],
    [
        "defaultThemeVersion",
        0,
        "int"
    ],
    [
        "filterPrivacy",
        false,
        "bool"
    ],
    [
        "hidePivotFieldList",
        false,
        "bool"
    ],
    [
        "promptedSolutions",
        false,
        "bool"
    ],
    [
        "publishItems",
        false,
        "bool"
    ],
    [
        "refreshAllConnections",
        false,
        "bool"
    ],
    [
        "saveExternalLinkValues",
        true,
        "bool"
    ],
    [
        "showBorderUnselectedTables",
        true,
        "bool"
    ],
    [
        "showInkAnnotation",
        true,
        "bool"
    ],
    [
        "showObjects",
        "all"
    ],
    [
        "showPivotChartFilter",
        false,
        "bool"
    ],
    [
        "updateLinks",
        "userSet"
    ]
];
const gp = [
    [
        "activeTab",
        0,
        "int"
    ],
    [
        "autoFilterDateGrouping",
        true,
        "bool"
    ],
    [
        "firstSheet",
        0,
        "int"
    ],
    [
        "minimized",
        false,
        "bool"
    ],
    [
        "showHorizontalScroll",
        true,
        "bool"
    ],
    [
        "showSheetTabs",
        true,
        "bool"
    ],
    [
        "showVerticalScroll",
        true,
        "bool"
    ],
    [
        "tabRatio",
        600,
        "int"
    ],
    [
        "visibility",
        "visible"
    ]
];
const _p = [];
const wp = [
    [
        "calcCompleted",
        "true"
    ],
    [
        "calcMode",
        "auto"
    ],
    [
        "calcOnSave",
        "true"
    ],
    [
        "concurrentCalc",
        "true"
    ],
    [
        "fullCalcOnLoad",
        "false"
    ],
    [
        "fullPrecision",
        "true"
    ],
    [
        "iterate",
        "false"
    ],
    [
        "iterateCount",
        "100"
    ],
    [
        "iterateDelta",
        "0.001"
    ],
    [
        "refMode",
        "A1"
    ]
];
function ts(e, t) {
    for(let r = 0; r != e.length; ++r){
        const a = e[r];
        for(let n = 0; n != t.length; ++n){
            const i = t[n];
            if (a[i[0]] == null) {
                a[i[0]] = i[1];
            } else {
                switch(i[2]){
                    case "bool":
                        if (typeof a[i[0]] === "string") {
                            a[i[0]] = We(a[i[0]]);
                        }
                        break;
                    case "int":
                        if (typeof a[i[0]] === "string") {
                            a[i[0]] = parseInt(a[i[0]], 10);
                        }
                        break;
                }
            }
        }
    }
}
function as(e, t) {
    for(let r = 0; r != t.length; ++r){
        const a = t[r];
        if (e[a[0]] == null) {
            e[a[0]] = a[1];
        } else {
            switch(a[2]){
                case "bool":
                    if (typeof e[a[0]] === "string") {
                        e[a[0]] = We(e[a[0]]);
                    }
                    break;
                case "int":
                    if (typeof e[a[0]] === "string") {
                        e[a[0]] = parseInt(e[a[0]], 10);
                    }
                    break;
            }
        }
    }
}
function qf(e) {
    as(e.WBProps, $n);
    as(e.CalcPr, wp);
    ts(e.WBView, gp);
    ts(e.Sheets, _p);
    sa.date1904 = We(e.WBProps.date1904);
}
function kp(e) {
    if (!e.Workbook || !e.Workbook.WBProps) {
        return "false";
    }
    if (We(e.Workbook.WBProps.date1904)) {
        return "true";
    }
    return "false";
}
const Ep = "][*?/\\".split("");
function Qf(e, t) {
    if (e.length > 31) {
        throw new Error("Sheet names cannot exceed 31 chars");
    }
    const r = true;
    Ep.forEach((a)=>{
        if (e.indexOf(a) != -1) {
            throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
        }
    });
    return r;
}
function Tp(SheetNames, t, r) {
    SheetNames.forEach((a, n)=>{
        Qf(a);
        for(let i = 0; i < n; ++i){
            if (a == SheetNames[i]) {
                throw new Error(`Duplicate Sheet Name: ${a}`);
            }
        }
        if (r) {
            const s = t && t[n] && t[n].CodeName || a;
            if (s.charCodeAt(0) == 95 && s.length > 22) {
                throw new Error(`Bad Code Name: Worksheet${s}`);
            }
        }
    });
}
function ec(e) {
    if (!e || !e.SheetNames || !e.Sheets) {
        throw new Error("Invalid Workbook");
    }
    if (!e.SheetNames.length) {
        throw new Error("Workbook is empty");
    }
    const t = e.Workbook && e.Workbook.Sheets || [];
    Tp(e.SheetNames, t, !!e.vbaraw);
    for(let r = 0; r < e.SheetNames.length; ++r){
        kv(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r);
    }
}
const Sp = /<\w+:workbook/;
function Fp(e, t) {
    if (!e) {
        throw new Error("Could not find file");
    }
    const r = {
        AppVersion: {},
        WBProps: {},
        WBView: [],
        Sheets: [],
        CalcPr: {},
        Names: [],
        xmlns: ""
    };
    let a = false;
    let n = "xmlns";
    let i = {};
    let s = 0;
    e.replace(Er, (c, o)=>{
        const l = me(c);
        switch(it(l[0])){
            case "<?xml":
                break;
            case "<workbook":
                if (c.match(Sp)) {
                    n = `xmlns${c.match(/<(\w+):/)[1]}`;
                }
                r.xmlns = l[n];
                break;
            case "</workbook>":
                break;
            case "<fileVersion":
                delete l[0];
                r.AppVersion = l;
                break;
            case "<fileVersion/>":
            case "</fileVersion>":
                break;
            case "<fileSharing":
                break;
            case "<fileSharing/>":
                break;
            case "<workbookPr":
            case "<workbookPr/>":
                $n.forEach((u)=>{
                    if (l[u[0]] != null) {
                        switch(u[2]){
                            case "bool":
                                r.WBProps[u[0]] = We(l[u[0]]);
                                break;
                            case "int":
                                r.WBProps[u[0]] = parseInt(l[u[0]], 10);
                                break;
                            default:
                                r.WBProps[u[0]] = l[u[0]];
                        }
                    }
                });
                if (l.codeName) {
                    r.WBProps.CodeName = Le(l.codeName);
                }
                break;
            case "</workbookPr>":
                break;
            case "<workbookProtection":
                break;
            case "<workbookProtection/>":
                break;
            case "<bookViews":
            case "<bookViews>":
            case "</bookViews>":
                break;
            case "<workbookView":
            case "<workbookView/>":
                delete l[0];
                r.WBView.push(l);
                break;
            case "</workbookView>":
                break;
            case "<sheets":
            case "<sheets>":
            case "</sheets>":
                break;
            case "<sheet":
                switch(l.state){
                    case "hidden":
                        l.Hidden = 1;
                        break;
                    case "veryHidden":
                        l.Hidden = 2;
                        break;
                    default:
                        l.Hidden = 0;
                }
                delete l.state;
                l.name = Oe(Le(l.name));
                delete l[0];
                r.Sheets.push(l);
                break;
            case "</sheet>":
                break;
            case "<functionGroups":
            case "<functionGroups/>":
                break;
            case "<functionGroup":
                break;
            case "<externalReferences":
            case "</externalReferences>":
            case "<externalReferences>":
                break;
            case "<externalReference":
                break;
            case "<definedNames/>":
                break;
            case "<definedNames>":
            case "<definedNames":
                a = true;
                break;
            case "</definedNames>":
                a = false;
                break;
            case "<definedName":
                i = {};
                i.Name = Le(l.name);
                if (l.comment) {
                    i.Comment = l.comment;
                }
                if (l.localSheetId) {
                    i.Sheet = +l.localSheetId;
                }
                if (We(l.hidden || "0")) {
                    i.Hidden = true;
                }
                s = o + c.length;
                break;
            case "</definedName>":
                i.Ref = Oe(Le(e.slice(s, o)));
                r.Names.push(i);
                break;
            case "<definedName/>":
                break;
            case "<calcPr":
                delete l[0];
                r.CalcPr = l;
                break;
            case "<calcPr/>":
                delete l[0];
                r.CalcPr = l;
                break;
            case "</calcPr>":
                break;
            case "<oleSize":
                break;
            case "<customWorkbookViews>":
            case "</customWorkbookViews>":
            case "<customWorkbookViews":
                break;
            case "<customWorkbookView":
            case "</customWorkbookView>":
                break;
            case "<pivotCaches>":
            case "</pivotCaches>":
            case "<pivotCaches":
                break;
            case "<pivotCache":
                break;
            case "<smartTagPr":
            case "<smartTagPr/>":
                break;
            case "<smartTagTypes":
            case "<smartTagTypes>":
            case "</smartTagTypes>":
                break;
            case "<smartTagType":
                break;
            case "<webPublishing":
            case "<webPublishing/>":
                break;
            case "<fileRecoveryPr":
            case "<fileRecoveryPr/>":
                break;
            case "<webPublishObjects>":
            case "<webPublishObjects":
            case "</webPublishObjects>":
                break;
            case "<webPublishObject":
                break;
            case "<extLst":
            case "<extLst>":
            case "</extLst>":
            case "<extLst/>":
                break;
            case "<ext":
                a = true;
                break;
            case "</ext>":
                a = false;
                break;
            case "<ArchID":
                break;
            case "<AlternateContent":
            case "<AlternateContent>":
                a = true;
                break;
            case "</AlternateContent>":
                a = false;
                break;
            case "<revisionPtr":
                break;
            default:
                if (!a && t.WTF) {
                    throw new Error(`unrecognized ${l[0]} in workbook`);
                }
        }
        return c;
    });
    if (zt.indexOf(r.xmlns) === -1) {
        throw new Error(`Unknown Namespace: ${r.xmlns}`);
    }
    qf(r);
    return r;
}
function rc(e) {
    const t = [
        Qe
    ];
    t[t.length] = ae("workbook", null, {
        xmlns: zt[0],
        "xmlns:r": nr.r
    });
    const r = e.Workbook && (e.Workbook.Names || []).length > 0;
    const a = {
        codeName: "ThisWorkbook"
    };
    if (e.Workbook && e.Workbook.WBProps) {
        $n.forEach((f)=>{
            if (e.Workbook.WBProps[f[0]] != null && e.Workbook.WBProps[f[0]] != f[1]) {
                a[f[0]] = e.Workbook.WBProps[f[0]];
            }
        });
        if (e.Workbook.WBProps.CodeName) {
            a.codeName = e.Workbook.WBProps.CodeName;
            delete a.CodeName;
        }
    }
    t[t.length] = ae("workbookPr", null, a);
    const n = e.Workbook && e.Workbook.Sheets || [];
    let i = 0;
    if (n && n[0] && n[0].Hidden) {
        t[t.length] = "<bookViews>";
        for(i = 0; i != e.SheetNames.length && !(!n[i] || !n[i].Hidden); ++i);
        if (i == e.SheetNames.length) {
            i = 0;
        }
        t[t.length] = `<workbookView firstSheet="${i}" activeTab="${i}"/>`;
        t[t.length] = "</bookViews>";
    }
    t[t.length] = "<sheets>";
    for(i = 0; i != e.SheetNames.length; ++i){
        const s = {
            name: be(e.SheetNames[i].slice(0, 31))
        };
        s.sheetId = `${i + 1}`;
        s["r:id"] = `rId${i + 1}`;
        if (n[i]) {
            switch(n[i].Hidden){
                case 1:
                    s.state = "hidden";
                    break;
                case 2:
                    s.state = "veryHidden";
                    break;
            }
        }
        t[t.length] = ae("sheet", null, s);
    }
    t[t.length] = "</sheets>";
    if (r) {
        t[t.length] = "<definedNames>";
        if (e.Workbook && e.Workbook.Names) {
            e.Workbook.Names.forEach((f)=>{
                const c = {
                    name: f.Name
                };
                if (f.Comment) {
                    c.comment = f.Comment;
                }
                if (f.Sheet != null) {
                    c.localSheetId = `${f.Sheet}`;
                }
                if (f.Hidden) {
                    c.hidden = "1";
                }
                if (f.Ref) {
                    t[t.length] = ae("definedName", be(f.Ref), c);
                }
            });
        }
        t[t.length] = "</definedNames>";
    }
    if (t.length > 2) {
        t[t.length] = "</workbook>";
        t[1] = t[1].replace("/>", ">");
    }
    return t.join("");
}
function yp(e, t) {
    const r = {};
    r.Hidden = e.read_shift(4);
    r.iTabID = e.read_shift(4);
    r.strRelID = Q0(e);
    r.name = wr(e);
    return r;
}
function Ap(e, t) {
    if (!t) {
        t = G(127);
    }
    t.write_shift(4, e.Hidden);
    t.write_shift(4, e.iTabID);
    In(e.strRelID, t);
    or(e.name.slice(0, 31), t);
    if (t.length > t.l) {
        return t.slice(0, t.l);
    }
    return t;
}
function Cp(e, t) {
    const r = {};
    const a = e.read_shift(4);
    r.defaultThemeVersion = e.read_shift(4);
    const n = t > 8 ? wr(e) : "";
    if (n.length > 0) {
        r.CodeName = n;
    }
    r.autoCompressPictures = !!(a & 65536);
    r.backupFile = !!(a & 64);
    r.checkCompatibility = !!(a & 4096);
    r.date1904 = !!(a & 1);
    r.filterPrivacy = !!(a & 8);
    r.hidePivotFieldList = !!(a & 1024);
    r.promptedSolutions = !!(a & 16);
    r.publishItems = !!(a & 2048);
    r.refreshAllConnections = !!(a & 262144);
    r.saveExternalLinkValues = !!(a & 128);
    r.showBorderUnselectedTables = !!(a & 4);
    r.showInkAnnotation = !!(a & 32);
    r.showObjects = [
        "all",
        "placeholders",
        "none"
    ][a >> 13 & 3];
    r.showPivotChartFilter = !!(a & 32768);
    r.updateLinks = [
        "userSet",
        "never",
        "always"
    ][a >> 8 & 3];
    return r;
}
function Dp(e, t) {
    if (!t) {
        t = G(72);
    }
    let r = 0;
    if (e && e.filterPrivacy) {
        r |= 8;
    }
    t.write_shift(4, r);
    t.write_shift(4, 0);
    Gs(e && e.CodeName || "ThisWorkbook", t);
    return t.slice(0, t.l);
}
function Op(e, t) {
    const r = {};
    e.read_shift(4);
    r.ArchID = e.read_shift(4);
    e.l += t - 8;
    return r;
}
function Ip(e, t, r) {
    const a = e.l + t;
    e.l += 4;
    e.l += 1;
    const n = e.read_shift(4);
    const Name = cl(e);
    const Ptg = vv(e, 0, r);
    const f = On(e);
    e.l = a;
    const c = {
        Name,
        Ptg
    };
    if (n < 268435455) {
        c.Sheet = n;
    }
    if (f) {
        c.Comment = f;
    }
    return c;
}
function Rp(e, t) {
    const r = {
        AppVersion: {},
        WBProps: {},
        WBView: [],
        Sheets: [],
        CalcPr: {},
        xmlns: ""
    };
    const a = [];
    let n = false;
    if (!t) {
        t = {};
    }
    t.biff = 12;
    const i = [];
    const s = [
        []
    ];
    s.SheetNames = [];
    s.XTI = [];
    Va[16] = {
        n: "BrtFRTArchID$",
        f: Op
    };
    dt(e, (c, o, l)=>{
        switch(l){
            case 156:
                s.SheetNames.push(c.name);
                r.Sheets.push(c);
                break;
            case 153:
                r.WBProps = c;
                break;
            case 39:
                if (c.Sheet != null) {
                    t.SID = c.Sheet;
                }
                c.Ref = pr(c.Ptg, null, null, s, t);
                delete t.SID;
                delete c.Ptg;
                i.push(c);
                break;
            case 1036:
                break;
            case 357:
            case 358:
            case 355:
            case 667:
                if (s[0].length) {
                    s.push([
                        l,
                        c
                    ]);
                } else {
                    s[0] = [
                        l,
                        c
                    ];
                }
                s[s.length - 1].XTI = [];
                break;
            case 362:
                if (s.length === 0) {
                    s[0] = [];
                    s[0].XTI = [];
                }
                s[s.length - 1].XTI = s[s.length - 1].XTI.concat(c);
                s.XTI = s.XTI.concat(c);
                break;
            case 361:
                break;
            case 2071:
            case 158:
            case 143:
            case 664:
            case 353:
                break;
            case 3072:
            case 3073:
            case 534:
            case 677:
            case 157:
            case 610:
            case 2050:
            case 155:
            case 548:
            case 676:
            case 128:
            case 665:
            case 2128:
            case 2125:
            case 549:
            case 2053:
            case 596:
            case 2076:
            case 2075:
            case 2082:
            case 397:
            case 154:
            case 1117:
            case 553:
            case 2091:
                break;
            case 35:
                a.push(l);
                n = true;
                break;
            case 36:
                a.pop();
                n = false;
                break;
            case 37:
                a.push(l);
                n = true;
                break;
            case 38:
                a.pop();
                n = false;
                break;
            case 16:
                break;
            default:
                if (!o.T) {
                    if (!n || t.WTF && a[a.length - 1] != 37 && a[a.length - 1] != 35) {
                        throw new Error(`Unexpected record 0x${l.toString(16)}`);
                    }
                }
        }
    }, t);
    qf(r);
    r.Names = i;
    r.supbooks = s;
    return r;
}
function Np(e, t) {
    j(e, 143);
    for(let r = 0; r != t.SheetNames.length; ++r){
        const Hidden = t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[r] && t.Workbook.Sheets[r].Hidden || 0;
        const n = {
            Hidden,
            iTabID: r + 1,
            strRelID: `rId${r + 1}`,
            name: t.SheetNames[r]
        };
        j(e, 156, Ap(n));
    }
    j(e, 144);
}
function bp(e, t) {
    if (!t) {
        t = G(127);
    }
    for(let r = 0; r != 4; ++r){
        t.write_shift(4, 0);
    }
    or("SheetJS", t);
    or(Ia.version, t);
    or(Ia.version, t);
    or("7262", t);
    if (t.length > t.l) {
        return t.slice(0, t.l);
    }
    return t;
}
function Pp(e, t) {
    if (!t) {
        t = G(29);
    }
    t.write_shift(-4, 0);
    t.write_shift(-4, 460);
    t.write_shift(4, 28800);
    t.write_shift(4, 17600);
    t.write_shift(4, 500);
    t.write_shift(4, e);
    t.write_shift(4, e);
    const r = 120;
    t.write_shift(1, r);
    if (t.length > t.l) {
        return t.slice(0, t.l);
    }
    return t;
}
function Lp(e, t) {
    if (!(!t.Workbook || !t.Workbook.Sheets)) {
        for(var r = t.Workbook.Sheets, a = 0, n = -1, i = -1; a < r.length; ++a){
            if (!r[a] || !r[a].Hidden && n == -1) {
                n = a;
            } else if (r[a].Hidden == 1 && i == -1) {
                i = a;
            }
        }
        if (!(i > n)) {
            j(e, 135);
            j(e, 158, Pp(n));
            j(e, 136);
        }
    }
}
function Bp(e, t) {
    const r = Cr();
    j(r, 131);
    j(r, 128, bp());
    j(r, 153, Dp(e.Workbook && e.Workbook.WBProps || null));
    Lp(r, e);
    Np(r, e);
    j(r, 132);
    return r.end();
}
function Mp(e, t, r) {
    if (t.slice(-4) === ".bin") {
        return Rp(e, r);
    }
    return Fp(e, r);
}
function Up(e, t, r, a, n, i, Themes, Styles) {
    if (t.slice(-4) === ".bin") {
        return rp(e, a, r, n, i, Themes, Styles);
    }
    return Rv(e, a, r, n, i, Themes, Styles);
}
function Wp(e, t, r, a, n, i, s, f) {
    if (t.slice(-4) === ".bin") {
        return mp(e, a, r, n, i);
    }
    return vp(e, a, r, n, i);
}
function Hp(e, t, r, a, n, i, s, f) {
    if (t.slice(-4) === ".bin") {
        return Gx();
    }
    return zx();
}
function Vp(e, t, r, a, n, i, s, f) {
    if (t.slice(-4) === ".bin") {
        return Vx();
    }
    return Xx();
}
function Xp(e, style, Themes, a) {
    if (style.slice(-4) === ".bin") {
        return U1(e, Themes, a);
    }
    return A1(e, Themes, a);
}
function Gp(e, t, r) {
    return bf(e, r);
}
function zp(e, sst, r) {
    if (sst.slice(-4) === ".bin") {
        return $h(e, r);
    }
    return Xh(e, r);
}
function $p(e, t, r) {
    if (t.slice(-4) === ".bin") {
        return Bx(e, r);
    }
    return Cx(e, r);
}
function Kp(e, calcchain, r) {
    if (calcchain.slice(-4) === ".bin") {
        return Fx(e);
    }
    return Tx(e);
}
function Yp(e, t, r, a) {
    if (r.slice(-4) === ".bin") {
        return yx(e, t, r, a);
    }
}
function jp(e, t, r) {
    if (t.slice(-4) === ".bin") {
        return wx(e, t, r);
    }
    return Ex(e, t, r);
}
function Jp(e, t, r) {
    return (t.slice(-4) === ".bin" ? Bp : rc)(e);
}
function Zp(e, t, r, a, n) {
    return (t.slice(-4) === ".bin" ? hp : jf)(e, r, a, n);
}
function qp(e, t, r) {
    return (t.slice(-4) === ".bin" ? j1 : Rf)(e, r);
}
function Qp(Strings, t, r) {
    return (t.slice(-4) === ".bin" ? jh : Sf)(Strings, r);
}
function em(e, t, r) {
    return (t.slice(-4) === ".bin" ? Mx : Bf)(e);
}
function rm(e) {
    return (e.slice(-4) === ".bin" ? kx : Pf)();
}
const tc = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g;
const ac = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function Kr(e, t) {
    const r = e.split(/\s+/);
    const a = [];
    a[0] = r[0];
    if (r.length === 1) {
        return a;
    }
    const n = e.match(tc);
    let i;
    let s;
    let f;
    let c;
    if (n) {
        for(c = 0; c != n.length; ++c){
            i = n[c].match(ac);
            if ((s = i[1].indexOf(":")) === -1) {
                a[i[1]] = i[2].slice(1, i[2].length - 1);
            } else {
                if (i[1].slice(0, 6) === "xmlns:") {
                    f = `xmlns${i[1].slice(6)}`;
                } else {
                    f = i[1].slice(s + 1);
                }
                a[f] = i[2].slice(1, i[2].length - 1);
            }
        }
    }
    return a;
}
function tm(e) {
    const t = e.split(/\s+/);
    const r = {};
    if (t.length === 1) {
        return r;
    }
    const a = e.match(tc);
    let n;
    let i;
    let s;
    let f;
    if (a) {
        for(f = 0; f != a.length; ++f){
            n = a[f].match(ac);
            if ((i = n[1].indexOf(":")) === -1) {
                r[n[1]] = n[2].slice(1, n[2].length - 1);
            } else {
                if (n[1].slice(0, 6) === "xmlns:") {
                    s = `xmlns${n[1].slice(6)}`;
                } else {
                    s = n[1].slice(i + 1);
                }
                r[s] = n[2].slice(1, n[2].length - 1);
            }
        }
    }
    return r;
}
let Da;
function am(e, t) {
    const r = Da[e] || Oe(e);
    if (r === "General") {
        return Mt(t);
    }
    return format(r, t);
}
function nm(e, t, r, a) {
    let n = a;
    switch((r[0].match(/dt:dt="([\w.]+)"/) || [
        "",
        ""
    ])[1]){
        case "boolean":
            n = We(a);
            break;
        case "i2":
        case "int":
            n = parseInt(a, 10);
            break;
        case "r4":
        case "float":
            n = parseFloat(a);
            break;
        case "date":
        case "dateTime.tz":
            n = Ve(a);
            break;
        case "i8":
        case "string":
        case "fixed":
        case "uuid":
        case "bin.base64":
            break;
        default:
            throw new Error(`bad custprop:${r[0]}`);
    }
    e[Oe(t)] = n;
}
function im(e, t, r) {
    if (e.t !== "z") {
        if (!r || r.cellText !== false) {
            try {
                if (e.t === "e") {
                    e.w = e.w || vt[e.v];
                } else if (t === "General") {
                    if (e.t === "n") {
                        if ((e.v | 0) === e.v) {
                            e.w = e.v.toString(10);
                        } else {
                            e.w = Na(e.v);
                        }
                    } else {
                        e.w = Mt(e.v);
                    }
                } else {
                    e.w = am(t || "General", e.v);
                }
            } catch (error) {
                if (r.WTF) {
                    throw error;
                }
            }
        }
        try {
            const a = Da[t] || t || "General";
            if (r.cellNF) {
                e.z = a;
            }
            if (r.cellDates && e.t == "n" && is_date(a)) {
                const n = parse_date_code(e.v);
                if (n) {
                    e.t = "d";
                    e.v = new Date(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u);
                }
            }
        } catch (error) {
            if (r.WTF) {
                throw error;
            }
        }
    }
}
function sm(e, t, r) {
    if (r.cellStyles && t.Interior) {
        const a = t.Interior;
        if (a.Pattern) {
            a.patternType = _1[a.Pattern] || a.Pattern;
        }
    }
    e[t.ID] = t;
}
function fm(e, t, r, a, n, i, s, f, c, o) {
    let l = "General";
    let a_StyleID = a.StyleID;
    const x = {};
    o = o || {};
    const d = [];
    let v = 0;
    if (a_StyleID === undefined && f) {
        a_StyleID = f.StyleID;
    }
    if (a_StyleID === undefined && s) {
        a_StyleID = s.StyleID;
    }
    while(i[a_StyleID] !== undefined && (i[a_StyleID].nf && (l = i[a_StyleID].nf), i[a_StyleID].Interior && d.push(i[a_StyleID].Interior), !!i[a_StyleID].Parent)){
        a_StyleID = i[a_StyleID].Parent;
    }
    switch(r.Type){
        case "Boolean":
            a.t = "b";
            a.v = We(e);
            break;
        case "String":
            a.t = "s";
            a.r = wi(Oe(e));
            a.v = e.indexOf("<") > -1 ? Oe(t || e).replace(/<.*?>/g, "") : a.r;
            break;
        case "DateTime":
            if (e.slice(-1) != "Z") {
                e += "Z";
            }
            a.v = (Ve(e) - new Date(Date.UTC(1899, 11, 30))) / (1440 * 60 * 1000);
            if (a.v !== a.v) {
                a.v = Oe(e);
            } else if (a.v < 60) {
                a.v = a.v - 1;
            }
            if (!l || l == "General") {
                l = "yyyy-mm-dd";
            }
        case "Number":
            if (a.v === undefined) {
                a.v = +e;
            }
            if (!a.t) {
                a.t = "n";
            }
            break;
        case "Error":
            a.t = "e";
            a.v = js[e];
            if (o.cellText !== false) {
                a.w = e;
            }
            break;
        default:
            if (e == "" && t == "") {
                a.t = "z";
            } else {
                a.t = "s";
                a.v = wi(t || e);
            }
            break;
    }
    im(a, l, o);
    if (o.cellFormula !== false) {
        if (a.Formula) {
            let h = Oe(a.Formula);
            if (h.charCodeAt(0) == 61) {
                h = h.slice(1);
            }
            a.f = ia(h, n);
            delete a.Formula;
            if (a.ArrayRange == "RC") {
                a.F = ia("RC:RC", n);
            } else if (a.ArrayRange) {
                a.F = ia(a.ArrayRange, n);
                c.push([
                    Ae(a.F),
                    a.F
                ]);
            }
        } else {
            for(v = 0; v < c.length; ++v){
                if (n.r >= c[v][0].s.r && n.r <= c[v][0].e.r && n.c >= c[v][0].s.c && n.c <= c[v][0].e.c) {
                    a.F = c[v][1];
                }
            }
        }
    }
    if (o.cellStyles) {
        d.forEach((p)=>{
            if (!x.patternType && p.patternType) {
                x.patternType = p.patternType;
            }
        });
        a.s = x;
    }
    if (a.StyleID !== undefined) {
        a.ixfe = a.StyleID;
    }
}
function cm(e) {
    e.t = e.v || "";
    e.t = e.t.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
    e.v = e.w = e.ixfe = undefined;
}
function $0(e, t) {
    const r = t || {};
    la();
    let a = ra(wn(e));
    (r.type == "binary" || r.type == "array" || r.type == "base64") && (typeof De !== "undefined" ? a = De.utils.decode(65001, u0(a)) : a = Le(a));
    let n = a.slice(0, 1024).toLowerCase();
    let i = false;
    n = n.replace(/".*?"/g, "");
    if ((n.indexOf(">") & 1023) > Math.min(n.indexOf(",") & 1023, n.indexOf(";") & 1023)) {
        const s = Me(r);
        s.type = "string";
        return ca.to_workbook(a, s);
    }
    if (n.indexOf("<?xml") == -1) {
        [
            "html",
            "table",
            "head",
            "meta",
            "script",
            "style",
            "div"
        ].forEach((Je)=>{
            if (n.indexOf(`<${Je}`) >= 0) {
                i = true;
            }
        });
    }
    if (i) {
        return Gm(a, r);
    }
    Da = {
        "General Number": "General",
        "General Date": _table[22],
        "Long Date": "dddd, mmmm dd, yyyy",
        "Medium Date": _table[15],
        "Short Date": _table[14],
        "Long Time": _table[19],
        "Medium Time": _table[18],
        "Short Time": _table[20],
        Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
        Fixed: _table[2],
        Standard: _table[4],
        Percent: _table[10],
        Scientific: _table[11],
        "Yes/No": '"Yes";"Yes";"No";@',
        "True/False": '"True";"True";"False";@',
        "On/Off": '"Yes";"Yes";"No";@'
    };
    let f;
    const c = [];
    let o;
    const l = {};
    const u = [];
    let x = r.dense ? [] : {};
    let d = "";
    let v = {};
    let h = {};
    let p = Kr('<Data ss:Type="String">');
    let w = 0;
    let y = 0;
    let g = 0;
    let D = {
        s: {
            r: 2000000,
            c: 2000000
        },
        e: {
            r: 0,
            c: 0
        }
    };
    const b = {};
    let N = {};
    let F = "";
    let B = 0;
    let I = [];
    const z = {};
    const X = {};
    let L = 0;
    let J = [];
    let le = [];
    let ie = {};
    let he = [];
    let ce;
    let Pe = false;
    let V = [];
    let ve = [];
    let ge = {};
    let C = 0;
    let P = 0;
    const O = {
        Sheets: [],
        WBProps: {
            date1904: false
        }
    };
    let R = {};
    La.lastIndex = 0;
    a = a.replace(/<!--([\s\S]*?)-->/mg, "");
    let Y = "";
    while(f = La.exec(a)){
        switch(f[3] = (Y = f[3]).toLowerCase()){
            case "data":
                if (Y == "data") {
                    if (f[1] === "/") {
                        if ((o = c.pop())[0] !== f[3]) {
                            throw new Error(`Bad state: ${o.join("|")}`);
                        }
                    } else {
                        if (f[0].charAt(f[0].length - 2) !== "/") {
                            c.push([
                                f[3],
                                true
                            ]);
                        }
                    }
                    break;
                }
                if (c[c.length - 1][1]) {
                    break;
                }
                if (f[1] === "/") {
                    fm(a.slice(w, f.index), F, p, c[c.length - 1][0] == "comment" ? ie : v, {
                        c: y,
                        r: g
                    }, b, he[y], h, V, r);
                } else {
                    F = "";
                    p = Kr(f[0]);
                    w = f.index + f[0].length;
                }
                break;
            case "cell":
                if (f[1] === "/") {
                    if (le.length > 0) {
                        v.c = le;
                    }
                    (!r.sheetRows || r.sheetRows > g) && v.v !== undefined && (r.dense ? (x[g] || (x[g] = []), x[g][y] = v) : x[encode_col(y) + encode_row(g)] = v);
                    if (v.HRef) {
                        v.l = {
                            Target: Oe(v.HRef)
                        };
                        if (v.HRefScreenTip) {
                            v.l.Tooltip = v.HRefScreenTip;
                        }
                        delete v.HRef;
                        delete v.HRefScreenTip;
                    }
                    if (v.MergeAcross || v.MergeDown) {
                        C = y + (parseInt(v.MergeAcross, 10) | 0);
                        P = g + (parseInt(v.MergeDown, 10) | 0);
                        I.push({
                            s: {
                                c: y,
                                r: g
                            },
                            e: {
                                c: C,
                                r: P
                            }
                        });
                    }
                    if (!r.sheetStubs) {
                        if (v.MergeAcross) {
                            y = C + 1;
                        } else {
                            ++y;
                        }
                    } else if (v.MergeAcross || v.MergeDown) {
                        for(let re = y; re <= C; ++re){
                            for(let te = g; te <= P; ++te){
                                (re > y || te > g) && (r.dense ? (x[te] || (x[te] = []), x[te][re] = {
                                    t: "z"
                                }) : x[encode_col(re) + encode_row(te)] = {
                                    t: "z"
                                });
                            }
                        }
                        y = C + 1;
                    } else {
                        ++y;
                    }
                } else {
                    v = tm(f[0]);
                    if (v.Index) {
                        y = +v.Index - 1;
                    }
                    if (y < D.s.c) {
                        D.s.c = y;
                    }
                    if (y > D.e.c) {
                        D.e.c = y;
                    }
                    f[0].slice(-2) === "/>" && ++y;
                    le = [];
                }
                break;
            case "row":
                if (f[1] === "/" || f[0].slice(-2) === "/>") {
                    if (g < D.s.r) {
                        D.s.r = g;
                    }
                    if (g > D.e.r) {
                        D.e.r = g;
                    }
                    if (f[0].slice(-2) === "/>") {
                        h = Kr(f[0]);
                        if (h.Index) {
                            g = +h.Index - 1;
                        }
                    }
                    y = 0;
                    ++g;
                } else {
                    h = Kr(f[0]);
                    if (h.Index) {
                        g = +h.Index - 1;
                    }
                    ge = {};
                    if (h.AutoFitHeight == "0" || h.Height) {
                        ge.hpx = parseInt(h.Height, 10);
                        ge.hpt = Ha(ge.hpx);
                        ve[g] = ge;
                    }
                    if (h.Hidden == "1") {
                        ge.hidden = true;
                        ve[g] = ge;
                    }
                }
                break;
            case "worksheet":
                if (f[1] === "/") {
                    if ((o = c.pop())[0] !== f[3]) {
                        throw new Error(`Bad state: ${o.join("|")}`);
                    }
                    u.push(d);
                    if (D.s.r <= D.e.r && D.s.c <= D.e.c) {
                        x["!ref"] = encode_range(D);
                        if (r.sheetRows && r.sheetRows <= D.e.r) {
                            x["!fullref"] = x["!ref"];
                            D.e.r = r.sheetRows - 1;
                            x["!ref"] = encode_range(D);
                        }
                    }
                    if (I.length) {
                        x["!merges"] = I;
                    }
                    if (he.length > 0) {
                        x["!cols"] = he;
                    }
                    if (ve.length > 0) {
                        x["!rows"] = ve;
                    }
                    l[d] = x;
                } else {
                    D = {
                        s: {
                            r: 2000000,
                            c: 2000000
                        },
                        e: {
                            r: 0,
                            c: 0
                        }
                    };
                    y = 0;
                    g = 0;
                    c.push([
                        f[3],
                        false
                    ]);
                    o = Kr(f[0]);
                    d = Oe(o.Name);
                    x = r.dense ? [] : {};
                    I = [];
                    V = [];
                    ve = [];
                    R = {
                        name: d,
                        Hidden: 0
                    };
                    O.Sheets.push(R);
                }
                break;
            case "table":
                if (f[1] === "/") {
                    if ((o = c.pop())[0] !== f[3]) {
                        throw new Error(`Bad state: ${o.join("|")}`);
                    }
                } else {
                    if (f[0].slice(-2) == "/>") {
                        break;
                    }
                    c.push([
                        f[3],
                        false
                    ]);
                    he = [];
                    Pe = false;
                }
                break;
            case "style":
                if (f[1] === "/") {
                    sm(b, N, r);
                } else {
                    N = Kr(f[0]);
                }
                break;
            case "numberformat":
                N.nf = Oe(Kr(f[0]).Format || "General");
                if (Da[N.nf]) {
                    N.nf = Da[N.nf];
                }
                for(var Q = 0; Q != 392 && _table[Q] != N.nf; ++Q);
                if (Q == 392) {
                    for(Q = 57; Q != 392; ++Q){
                        if (_table[Q] == null) {
                            load(N.nf, Q);
                            break;
                        }
                    }
                }
                break;
            case "column":
                if (c[c.length - 1][0] !== "table") {
                    break;
                }
                ce = Kr(f[0]);
                if (ce.Hidden) {
                    ce.hidden = true;
                    delete ce.Hidden;
                }
                if (ce.Width) {
                    ce.wpx = parseInt(ce.Width, 10);
                }
                if (!Pe && ce.wpx > 10) {
                    Pe = true;
                    mr = Of;
                    for(let Z = 0; Z < he.length; ++Z){
                        if (he[Z]) {
                            St(he[Z]);
                        }
                    }
                }
                if (Pe) {
                    St(ce);
                }
                he[ce.Index - 1 || he.length] = ce;
                for(let Ee = 0; Ee < +ce.Span; ++Ee){
                    he[he.length] = Me(ce);
                }
                break;
            case "namedrange":
                if (f[1] === "/") {
                    break;
                }
                if (!O.Names) {
                    O.Names = [];
                }
                const A = me(f[0]);
                const Ue = {
                    Name: A.Name,
                    Ref: ia(A.RefersTo.slice(1), {
                        r: 0,
                        c: 0
                    })
                };
                if (O.Sheets.length > 0) {
                    Ue.Sheet = O.Sheets.length - 1;
                }
                O.Names.push(Ue);
                break;
            case "namedcell":
                break;
            case "b":
                break;
            case "i":
                break;
            case "u":
                break;
            case "s":
                break;
            case "em":
                break;
            case "h2":
                break;
            case "h3":
                break;
            case "sub":
                break;
            case "sup":
                break;
            case "span":
                break;
            case "alignment":
                break;
            case "borders":
                break;
            case "border":
                break;
            case "font":
                if (f[0].slice(-2) === "/>") {
                    break;
                }
                if (f[1] === "/") {
                    F += a.slice(B, f.index);
                } else {
                    B = f.index + f[0].length;
                }
                break;
            case "interior":
                if (!r.cellStyles) {
                    break;
                }
                N.Interior = Kr(f[0]);
                break;
            case "protection":
                break;
            case "author":
            case "title":
            case "description":
            case "created":
            case "keywords":
            case "subject":
            case "category":
            case "company":
            case "lastauthor":
            case "lastsaved":
            case "lastprinted":
            case "version":
            case "revision":
            case "totaltime":
            case "hyperlinkbase":
            case "manager":
            case "contentstatus":
            case "identifier":
            case "language":
            case "appname":
                if (f[0].slice(-2) === "/>") {
                    break;
                }
                if (f[1] === "/") {
                    Nl(z, Y, a.slice(L, f.index));
                } else {
                    L = f.index + f[0].length;
                }
                break;
            case "paragraphs":
                break;
            case "styles":
            case "workbook":
                if (f[1] === "/") {
                    if ((o = c.pop())[0] !== f[3]) {
                        throw new Error(`Bad state: ${o.join("|")}`);
                    }
                } else {
                    c.push([
                        f[3],
                        false
                    ]);
                }
                break;
            case "comment":
                if (f[1] === "/") {
                    if ((o = c.pop())[0] !== f[3]) {
                        throw new Error(`Bad state: ${o.join("|")}`);
                    }
                    cm(ie);
                    le.push(ie);
                } else {
                    c.push([
                        f[3],
                        false
                    ]);
                    o = Kr(f[0]);
                    ie = {
                        a: o.Author
                    };
                }
                break;
            case "autofilter":
                if (f[1] === "/") {
                    if ((o = c.pop())[0] !== f[3]) {
                        throw new Error(`Bad state: ${o.join("|")}`);
                    }
                } else if (f[0].charAt(f[0].length - 2) !== "/") {
                    const Ce = Kr(f[0]);
                    x["!autofilter"] = {
                        ref: ia(Ce.Range).replace(/\$/g, "")
                    };
                    c.push([
                        f[3],
                        true
                    ]);
                }
                break;
            case "name":
                break;
            case "datavalidation":
                if (f[1] === "/") {
                    if ((o = c.pop())[0] !== f[3]) {
                        throw new Error(`Bad state: ${o.join("|")}`);
                    }
                } else {
                    if (f[0].charAt(f[0].length - 2) !== "/") {
                        c.push([
                            f[3],
                            true
                        ]);
                    }
                }
                break;
            case "pixelsperinch":
                break;
            case "componentoptions":
            case "documentproperties":
            case "customdocumentproperties":
            case "officedocumentsettings":
            case "pivottable":
            case "pivotcache":
            case "names":
            case "mapinfo":
            case "pagebreaks":
            case "querytable":
            case "sorting":
            case "schema":
            case "conditionalformatting":
            case "smarttagtype":
            case "smarttags":
            case "excelworkbook":
            case "workbookoptions":
            case "worksheetoptions":
                if (f[1] === "/") {
                    if ((o = c.pop())[0] !== f[3]) {
                        throw new Error(`Bad state: ${o.join("|")}`);
                    }
                } else {
                    if (f[0].charAt(f[0].length - 2) !== "/") {
                        c.push([
                            f[3],
                            true
                        ]);
                    }
                }
                break;
            case "null":
                break;
            default:
                if (c.length == 0 && f[3] == "document" || c.length == 0 && f[3] == "uof") {
                    return cs(a, r);
                }
                let Be = true;
                switch(c[c.length - 1][0]){
                    case "officedocumentsettings":
                        switch(f[3]){
                            case "allowpng":
                                break;
                            case "removepersonalinformation":
                                break;
                            case "downloadcomponents":
                                break;
                            case "locationofcomponents":
                                break;
                            case "colors":
                                break;
                            case "color":
                                break;
                            case "index":
                                break;
                            case "rgb":
                                break;
                            case "targetscreensize":
                                break;
                            case "readonlyrecommended":
                                break;
                            default:
                                Be = false;
                        }
                        break;
                    case "componentoptions":
                        switch(f[3]){
                            case "toolbar":
                                break;
                            case "hideofficelogo":
                                break;
                            case "spreadsheetautofit":
                                break;
                            case "label":
                                break;
                            case "caption":
                                break;
                            case "maxheight":
                                break;
                            case "maxwidth":
                                break;
                            case "nextsheetnumber":
                                break;
                            default:
                                Be = false;
                        }
                        break;
                    case "excelworkbook":
                        switch(f[3]){
                            case "date1904":
                                O.WBProps.date1904 = true;
                                break;
                            case "windowheight":
                                break;
                            case "windowwidth":
                                break;
                            case "windowtopx":
                                break;
                            case "windowtopy":
                                break;
                            case "tabratio":
                                break;
                            case "protectstructure":
                                break;
                            case "protectwindow":
                                break;
                            case "protectwindows":
                                break;
                            case "activesheet":
                                break;
                            case "displayinknotes":
                                break;
                            case "firstvisiblesheet":
                                break;
                            case "supbook":
                                break;
                            case "sheetname":
                                break;
                            case "sheetindex":
                                break;
                            case "sheetindexfirst":
                                break;
                            case "sheetindexlast":
                                break;
                            case "dll":
                                break;
                            case "acceptlabelsinformulas":
                                break;
                            case "donotsavelinkvalues":
                                break;
                            case "iteration":
                                break;
                            case "maxiterations":
                                break;
                            case "maxchange":
                                break;
                            case "path":
                                break;
                            case "xct":
                                break;
                            case "count":
                                break;
                            case "selectedsheets":
                                break;
                            case "calculation":
                                break;
                            case "uncalced":
                                break;
                            case "startupprompt":
                                break;
                            case "crn":
                                break;
                            case "externname":
                                break;
                            case "formula":
                                break;
                            case "colfirst":
                                break;
                            case "collast":
                                break;
                            case "wantadvise":
                                break;
                            case "boolean":
                                break;
                            case "error":
                                break;
                            case "text":
                                break;
                            case "ole":
                                break;
                            case "noautorecover":
                                break;
                            case "publishobjects":
                                break;
                            case "donotcalculatebeforesave":
                                break;
                            case "number":
                                break;
                            case "refmoder1c1":
                                break;
                            case "embedsavesmarttags":
                                break;
                            default:
                                Be = false;
                        }
                        break;
                    case "workbookoptions":
                        switch(f[3]){
                            case "owcversion":
                                break;
                            case "height":
                                break;
                            case "width":
                                break;
                            default:
                                Be = false;
                        }
                        break;
                    case "worksheetoptions":
                        switch(f[3]){
                            case "visible":
                                if (f[0].slice(-2) !== "/>") {
                                    if (f[1] === "/") {
                                        switch(a.slice(L, f.index)){
                                            case "SheetHidden":
                                                R.Hidden = 1;
                                                break;
                                            case "SheetVeryHidden":
                                                R.Hidden = 2;
                                                break;
                                        }
                                    } else {
                                        L = f.index + f[0].length;
                                    }
                                }
                                break;
                            case "header":
                                if (!x["!margins"]) {
                                    Lt(x["!margins"] = {}, "xlml");
                                }
                                if (!isNaN(+me(f[0]).Margin)) {
                                    x["!margins"].header = +me(f[0]).Margin;
                                }
                                break;
                            case "footer":
                                if (!x["!margins"]) {
                                    Lt(x["!margins"] = {}, "xlml");
                                }
                                if (!isNaN(+me(f[0]).Margin)) {
                                    x["!margins"].footer = +me(f[0]).Margin;
                                }
                                break;
                            case "pagemargins":
                                const ye = me(f[0]);
                                if (!x["!margins"]) {
                                    Lt(x["!margins"] = {}, "xlml");
                                }
                                if (!isNaN(+ye.Top)) {
                                    x["!margins"].top = +ye.Top;
                                }
                                if (!isNaN(+ye.Left)) {
                                    x["!margins"].left = +ye.Left;
                                }
                                if (!isNaN(+ye.Right)) {
                                    x["!margins"].right = +ye.Right;
                                }
                                if (!isNaN(+ye.Bottom)) {
                                    x["!margins"].bottom = +ye.Bottom;
                                }
                                break;
                            case "displayrighttoleft":
                                if (!O.Views) {
                                    O.Views = [];
                                }
                                if (!O.Views[0]) {
                                    O.Views[0] = {};
                                }
                                O.Views[0].RTL = true;
                                break;
                            case "freezepanes":
                                break;
                            case "frozennosplit":
                                break;
                            case "splithorizontal":
                            case "splitvertical":
                                break;
                            case "donotdisplaygridlines":
                                break;
                            case "activerow":
                                break;
                            case "activecol":
                                break;
                            case "toprowbottompane":
                                break;
                            case "leftcolumnrightpane":
                                break;
                            case "unsynced":
                                break;
                            case "print":
                                break;
                            case "printerrors":
                                break;
                            case "panes":
                                break;
                            case "scale":
                                break;
                            case "pane":
                                break;
                            case "number":
                                break;
                            case "layout":
                                break;
                            case "pagesetup":
                                break;
                            case "selected":
                                break;
                            case "protectobjects":
                                break;
                            case "enableselection":
                                break;
                            case "protectscenarios":
                                break;
                            case "validprinterinfo":
                                break;
                            case "horizontalresolution":
                                break;
                            case "verticalresolution":
                                break;
                            case "numberofcopies":
                                break;
                            case "activepane":
                                break;
                            case "toprowvisible":
                                break;
                            case "leftcolumnvisible":
                                break;
                            case "fittopage":
                                break;
                            case "rangeselection":
                                break;
                            case "papersizeindex":
                                break;
                            case "pagelayoutzoom":
                                break;
                            case "pagebreakzoom":
                                break;
                            case "filteron":
                                break;
                            case "fitwidth":
                                break;
                            case "fitheight":
                                break;
                            case "commentslayout":
                                break;
                            case "zoom":
                                break;
                            case "lefttoright":
                                break;
                            case "gridlines":
                                break;
                            case "allowsort":
                                break;
                            case "allowfilter":
                                break;
                            case "allowinsertrows":
                                break;
                            case "allowdeleterows":
                                break;
                            case "allowinsertcols":
                                break;
                            case "allowdeletecols":
                                break;
                            case "allowinserthyperlinks":
                                break;
                            case "allowformatcells":
                                break;
                            case "allowsizecols":
                                break;
                            case "allowsizerows":
                                break;
                            case "nosummaryrowsbelowdetail":
                                if (!x["!outline"]) {
                                    x["!outline"] = {};
                                }
                                x["!outline"].above = true;
                                break;
                            case "tabcolorindex":
                                break;
                            case "donotdisplayheadings":
                                break;
                            case "showpagelayoutzoom":
                                break;
                            case "nosummarycolumnsrightdetail":
                                if (!x["!outline"]) {
                                    x["!outline"] = {};
                                }
                                x["!outline"].left = true;
                                break;
                            case "blackandwhite":
                                break;
                            case "donotdisplayzeros":
                                break;
                            case "displaypagebreak":
                                break;
                            case "rowcolheadings":
                                break;
                            case "donotdisplayoutline":
                                break;
                            case "noorientation":
                                break;
                            case "allowusepivottables":
                                break;
                            case "zeroheight":
                                break;
                            case "viewablerange":
                                break;
                            case "selection":
                                break;
                            case "protectcontents":
                                break;
                            default:
                                Be = false;
                        }
                        break;
                    case "pivottable":
                    case "pivotcache":
                        switch(f[3]){
                            case "immediateitemsondrop":
                                break;
                            case "showpagemultipleitemlabel":
                                break;
                            case "compactrowindent":
                                break;
                            case "location":
                                break;
                            case "pivotfield":
                                break;
                            case "orientation":
                                break;
                            case "layoutform":
                                break;
                            case "layoutsubtotallocation":
                                break;
                            case "layoutcompactrow":
                                break;
                            case "position":
                                break;
                            case "pivotitem":
                                break;
                            case "datatype":
                                break;
                            case "datafield":
                                break;
                            case "sourcename":
                                break;
                            case "parentfield":
                                break;
                            case "ptlineitems":
                                break;
                            case "ptlineitem":
                                break;
                            case "countofsameitems":
                                break;
                            case "item":
                                break;
                            case "itemtype":
                                break;
                            case "ptsource":
                                break;
                            case "cacheindex":
                                break;
                            case "consolidationreference":
                                break;
                            case "filename":
                                break;
                            case "reference":
                                break;
                            case "nocolumngrand":
                                break;
                            case "norowgrand":
                                break;
                            case "blanklineafteritems":
                                break;
                            case "hidden":
                                break;
                            case "subtotal":
                                break;
                            case "basefield":
                                break;
                            case "mapchilditems":
                                break;
                            case "function":
                                break;
                            case "refreshonfileopen":
                                break;
                            case "printsettitles":
                                break;
                            case "mergelabels":
                                break;
                            case "defaultversion":
                                break;
                            case "refreshname":
                                break;
                            case "refreshdate":
                                break;
                            case "refreshdatecopy":
                                break;
                            case "versionlastrefresh":
                                break;
                            case "versionlastupdate":
                                break;
                            case "versionupdateablemin":
                                break;
                            case "versionrefreshablemin":
                                break;
                            case "calculation":
                                break;
                            default:
                                Be = false;
                        }
                        break;
                    case "pagebreaks":
                        switch(f[3]){
                            case "colbreaks":
                                break;
                            case "colbreak":
                                break;
                            case "rowbreaks":
                                break;
                            case "rowbreak":
                                break;
                            case "colstart":
                                break;
                            case "colend":
                                break;
                            case "rowend":
                                break;
                            default:
                                Be = false;
                        }
                        break;
                    case "autofilter":
                        switch(f[3]){
                            case "autofiltercolumn":
                                break;
                            case "autofiltercondition":
                                break;
                            case "autofilterand":
                                break;
                            case "autofilteror":
                                break;
                            default:
                                Be = false;
                        }
                        break;
                    case "querytable":
                        switch(f[3]){
                            case "id":
                                break;
                            case "autoformatfont":
                                break;
                            case "autoformatpattern":
                                break;
                            case "querysource":
                                break;
                            case "querytype":
                                break;
                            case "enableredirections":
                                break;
                            case "refreshedinxl9":
                                break;
                            case "urlstring":
                                break;
                            case "htmltables":
                                break;
                            case "connection":
                                break;
                            case "commandtext":
                                break;
                            case "refreshinfo":
                                break;
                            case "notitles":
                                break;
                            case "nextid":
                                break;
                            case "columninfo":
                                break;
                            case "overwritecells":
                                break;
                            case "donotpromptforfile":
                                break;
                            case "textwizardsettings":
                                break;
                            case "source":
                                break;
                            case "number":
                                break;
                            case "decimal":
                                break;
                            case "thousandseparator":
                                break;
                            case "trailingminusnumbers":
                                break;
                            case "formatsettings":
                                break;
                            case "fieldtype":
                                break;
                            case "delimiters":
                                break;
                            case "tab":
                                break;
                            case "comma":
                                break;
                            case "autoformatname":
                                break;
                            case "versionlastedit":
                                break;
                            case "versionlastrefresh":
                                break;
                            default:
                                Be = false;
                        }
                        break;
                    case "datavalidation":
                        switch(f[3]){
                            case "range":
                                break;
                            case "type":
                                break;
                            case "min":
                                break;
                            case "max":
                                break;
                            case "sort":
                                break;
                            case "descending":
                                break;
                            case "order":
                                break;
                            case "casesensitive":
                                break;
                            case "value":
                                break;
                            case "errorstyle":
                                break;
                            case "errormessage":
                                break;
                            case "errortitle":
                                break;
                            case "inputmessage":
                                break;
                            case "inputtitle":
                                break;
                            case "combohide":
                                break;
                            case "inputhide":
                                break;
                            case "condition":
                                break;
                            case "qualifier":
                                break;
                            case "useblank":
                                break;
                            case "value1":
                                break;
                            case "value2":
                                break;
                            case "format":
                                break;
                            case "cellrangelist":
                                break;
                            default:
                                Be = false;
                        }
                        break;
                    case "sorting":
                    case "conditionalformatting":
                        switch(f[3]){
                            case "range":
                                break;
                            case "type":
                                break;
                            case "min":
                                break;
                            case "max":
                                break;
                            case "sort":
                                break;
                            case "descending":
                                break;
                            case "order":
                                break;
                            case "casesensitive":
                                break;
                            case "value":
                                break;
                            case "errorstyle":
                                break;
                            case "errormessage":
                                break;
                            case "errortitle":
                                break;
                            case "cellrangelist":
                                break;
                            case "inputmessage":
                                break;
                            case "inputtitle":
                                break;
                            case "combohide":
                                break;
                            case "inputhide":
                                break;
                            case "condition":
                                break;
                            case "qualifier":
                                break;
                            case "useblank":
                                break;
                            case "value1":
                                break;
                            case "value2":
                                break;
                            case "format":
                                break;
                            default:
                                Be = false;
                        }
                        break;
                    case "mapinfo":
                    case "schema":
                    case "data":
                        switch(f[3]){
                            case "map":
                                break;
                            case "entry":
                                break;
                            case "range":
                                break;
                            case "xpath":
                                break;
                            case "field":
                                break;
                            case "xsdtype":
                                break;
                            case "filteron":
                                break;
                            case "aggregate":
                                break;
                            case "elementtype":
                                break;
                            case "attributetype":
                                break;
                            case "schema":
                            case "element":
                            case "complextype":
                            case "datatype":
                            case "all":
                            case "attribute":
                            case "extends":
                                break;
                            case "row":
                                break;
                            default:
                                Be = false;
                        }
                        break;
                    case "smarttags":
                        break;
                    default:
                        Be = false;
                        break;
                }
                if (Be || f[3].match(/!\[CDATA/)) {
                    break;
                }
                if (!c[c.length - 1][1]) {
                    throw `Unrecognized tag: ${f[3]}|${c.join("|")}`;
                }
                if (c[c.length - 1][0] === "customdocumentproperties") {
                    if (f[0].slice(-2) === "/>") {
                        break;
                    }
                    if (f[1] === "/") {
                        nm(X, Y, J, a.slice(L, f.index));
                    } else {
                        J = f;
                        L = f.index + f[0].length;
                    }
                    break;
                }
                if (r.WTF) {
                    throw `Unrecognized tag: ${f[3]}|${c.join("|")}`;
                }
        }
    }
    const fe = {};
    if (!r.bookSheets && !r.bookProps) {
        fe.Sheets = l;
    }
    fe.SheetNames = u;
    fe.Workbook = O;
    fe.SSF = Me(_table);
    fe.Props = z;
    fe.Custprops = X;
    return fe;
}
function fn(e, t) {
    Yn(t = t || {});
    switch(t.type || "base64"){
        case "base64":
            return $0(br(e), t);
        case "binary":
        case "buffer":
        case "file":
            return $0(e, t);
        case "array":
            return $0(At(e), t);
    }
}
function om(e, t) {
    const r = [];
    if (e.Props) {
        r.push(bl(e.Props, t));
    }
    if (e.Custprops) {
        r.push(Pl(e.Props, e.Custprops));
    }
    return r.join("");
}
function lm() {
    return "";
}
function um(e, t) {
    const r = [
        '<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'
    ];
    t.cellXfs.forEach((a, n)=>{
        const i = [];
        i.push(ae("NumberFormat", null, {
            "ss:Format": be(_table[a.numFmtId])
        }));
        const s = {
            "ss:ID": `s${21 + n}`
        };
        r.push(ae("Style", i.join(""), s));
    });
    return ae("Styles", r.join(""));
}
function nc(e) {
    return ae("NamedRange", null, {
        "ss:Name": e.Name,
        "ss:RefersTo": `=${Vn(e.Ref, {
            r: 0,
            c: 0
        })}`
    });
}
function hm(e) {
    if (!((e || {}).Workbook || {}).Names) {
        return "";
    }
    for(var t = e.Workbook.Names, r = [], a = 0; a < t.length; ++a){
        const n = t[a];
        n.Sheet == null && (n.Name.match(/^_xlfn\./) || r.push(nc(n)));
    }
    return ae("Names", r.join(""));
}
function xm(e, t, r, a) {
    if (!e || !((a || {}).Workbook || {}).Names) {
        return "";
    }
    for(var n = a.Workbook.Names, i = [], s = 0; s < n.length; ++s){
        const f = n[s];
        f.Sheet == r && (f.Name.match(/^_xlfn\./) || i.push(nc(f)));
    }
    return i.join("");
}
function dm(e, t, r, a) {
    if (!e) {
        return "";
    }
    const n = [];
    if (e["!margins"]) {
        n.push("<PageSetup>");
        if (e["!margins"].header) {
            n.push(ae("Header", null, {
                "x:Margin": e["!margins"].header
            }));
        }
        if (e["!margins"].footer) {
            n.push(ae("Footer", null, {
                "x:Margin": e["!margins"].footer
            }));
        }
        n.push(ae("PageMargins", null, {
            "x:Bottom": e["!margins"].bottom || "0.75",
            "x:Left": e["!margins"].left || "0.7",
            "x:Right": e["!margins"].right || "0.7",
            "x:Top": e["!margins"].top || "0.75"
        }));
        n.push("</PageSetup>");
    }
    if (a && a.Workbook && a.Workbook.Sheets && a.Workbook.Sheets[r]) {
        if (a.Workbook.Sheets[r].Hidden) {
            n.push(ae("Visible", a.Workbook.Sheets[r].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
        } else {
            for(var i = 0; i < r && !(a.Workbook.Sheets[i] && !a.Workbook.Sheets[i].Hidden); ++i);
            if (i == r) {
                n.push("<Selected/>");
            }
        }
    }
    if (((((a || {}).Workbook || {}).Views || [])[0] || {}).RTL) {
        n.push("<DisplayRightToLeft/>");
    }
    if (e["!protect"]) {
        n.push(hr("ProtectContents", "True"));
        if (e["!protect"].objects) {
            n.push(hr("ProtectObjects", "True"));
        }
        if (e["!protect"].scenarios) {
            n.push(hr("ProtectScenarios", "True"));
        }
        if (e["!protect"].selectLockedCells != null && !e["!protect"].selectLockedCells) {
            n.push(hr("EnableSelection", "NoSelection"));
        } else if (e["!protect"].selectUnlockedCells != null && !e["!protect"].selectUnlockedCells) {
            n.push(hr("EnableSelection", "UnlockedCells"));
        }
        [
            [
                "formatCells",
                "AllowFormatCells"
            ],
            [
                "formatColumns",
                "AllowSizeCols"
            ],
            [
                "formatRows",
                "AllowSizeRows"
            ],
            [
                "insertColumns",
                "AllowInsertCols"
            ],
            [
                "insertRows",
                "AllowInsertRows"
            ],
            [
                "insertHyperlinks",
                "AllowInsertHyperlinks"
            ],
            [
                "deleteColumns",
                "AllowDeleteCols"
            ],
            [
                "deleteRows",
                "AllowDeleteRows"
            ],
            [
                "sort",
                "AllowSort"
            ],
            [
                "autoFilter",
                "AllowFilter"
            ],
            [
                "pivotTables",
                "AllowUsePivotTables"
            ]
        ].forEach((s)=>{
            if (e["!protect"][s[0]]) {
                n.push(`<${s[1]}/>`);
            }
        });
    }
    if (n.length == 0) {
        return "";
    }
    return ae("WorksheetOptions", n.join(""), {
        xmlns: Or.x
    });
}
function vm(e) {
    return e.map((t)=>{
        const r = Bo(t.t || "");
        const a = ae("ss:Data", r, {
            xmlns: "http://www.w3.org/TR/REC-html40"
        });
        return ae("Comment", a, {
            "ss:Author": t.a
        });
    }).join("");
}
function pm(e, t, r, a, n, i, s) {
    if (!e || e.v == null && e.f == null) {
        return "";
    }
    const f = {};
    if (e.f) {
        f["ss:Formula"] = `=${be(Vn(e.f, s))}`;
    }
    if (e.F && e.F.slice(0, t.length) == t) {
        const c = decode_cell(e.F.slice(t.length + 1));
        f["ss:ArrayRange"] = `RC:R${c.r == s.r ? "" : `[${c.r - s.r}]`}C${c.c == s.c ? "" : `[${c.c - s.c}]`}`;
    }
    if (e.l && e.l.Target) {
        f["ss:HRef"] = be(e.l.Target);
        if (e.l.Tooltip) {
            f["x:HRefScreenTip"] = be(e.l.Tooltip);
        }
    }
    if (r["!merges"]) {
        for(let o = r["!merges"], l = 0; l != o.length; ++l){
            o[l].s.c != s.c || o[l].s.r != s.r || (o[l].e.c > o[l].s.c && (f["ss:MergeAcross"] = o[l].e.c - o[l].s.c), o[l].e.r > o[l].s.r && (f["ss:MergeDown"] = o[l].e.r - o[l].s.r));
        }
    }
    let u = "";
    let x = "";
    switch(e.t){
        case "z":
            if (!a.sheetStubs) {
                return "";
            }
            break;
        case "n":
            u = "Number";
            x = String(e.v);
            break;
        case "b":
            u = "Boolean";
            x = e.v ? "1" : "0";
            break;
        case "e":
            u = "Error";
            x = vt[e.v];
            break;
        case "d":
            u = "DateTime";
            x = new Date(e.v).toISOString();
            if (e.z == null) {
                e.z = e.z || _table[14];
            }
            break;
        case "s":
            u = "String";
            x = Lo(e.v || "");
            break;
    }
    const d = Dt(a.cellXfs, e, a);
    f["ss:StyleID"] = `s${21 + d}`;
    f["ss:Index"] = s.c + 1;
    const v = e.v != null ? x : "";
    let h = e.t == "z" ? "" : `<Data ss:Type="${u}">${v}</Data>`;
    if ((e.c || []).length > 0) {
        h += vm(e.c);
    }
    return ae("Cell", h, f);
}
function mm(e, t) {
    let r = `<Row ss:Index="${e + 1}"`;
    t && (t.hpt && !t.hpx && (t.hpx = oa(t.hpt)), t.hpx && (r += ` ss:AutoFitHeight="0" ss:Height="${t.hpx}"`), t.hidden && (r += ' ss:Hidden="1"'));
    return `${r}>`;
}
function gm(e, t, r, a) {
    if (!e["!ref"]) {
        return "";
    }
    const n = Ae(e["!ref"]);
    const i = e["!merges"] || [];
    let s = 0;
    const f = [];
    if (e["!cols"]) {
        e["!cols"].forEach((p, w)=>{
            St(p);
            const y = !!p.width;
            const g = N0(w, p);
            const D = {
                "ss:Index": w + 1
            };
            if (y) {
                D["ss:Width"] = Ua(g.width);
            }
            if (p.hidden) {
                D["ss:Hidden"] = "1";
            }
            f.push(ae("Column", null, D));
        });
    }
    const c = Array.isArray(e);
    for(let o = n.s.r; o <= n.e.r; ++o){
        const l = [
            mm(o, (e["!rows"] || [])[o])
        ];
        for(let u = n.s.c; u <= n.e.c; ++u){
            let x = false;
            for(s = 0; s != i.length; ++s){
                if (!(i[s].s.c > u) && !(i[s].s.r > o) && !(i[s].e.c < u) && !(i[s].e.r < o)) {
                    if (i[s].s.c != u || i[s].s.r != o) {
                        x = true;
                    }
                    break;
                }
            }
            if (!x) {
                const d = {
                    r: o,
                    c: u
                };
                const v = encode_cell(d);
                const h = c ? (e[o] || [])[u] : e[v];
                l.push(pm(h, v, e, t, r, a, d));
            }
        }
        l.push("</Row>");
        if (l.length > 2) {
            f.push(l.join(""));
        }
    }
    return f.join("");
}
function _m(e, t, r) {
    const a = [];
    const n = r.SheetNames[e];
    const i = r.Sheets[n];
    let s = i ? xm(i, t, e, r) : "";
    if (s.length > 0) {
        a.push(`<Names>${s}</Names>`);
    }
    s = i ? gm(i, t, e, r) : "";
    if (s.length > 0) {
        a.push(`<Table>${s}</Table>`);
    }
    a.push(dm(i, t, e, r));
    return a.join("");
}
function wm(e, t) {
    if (!t) {
        t = {};
    }
    if (!e.SSF) {
        e.SSF = Me(_table);
    }
    if (e.SSF) {
        la();
        load_table(e.SSF);
        t.revssf = A0(e.SSF);
        t.revssf[e.SSF[65535]] = 0;
        t.ssf = e.SSF;
        t.cellXfs = [];
        Dt(t.cellXfs, {}, {
            revssf: {
                General: 0
            }
        });
    }
    const r = [];
    r.push(om(e, t));
    r.push(lm());
    r.push("");
    r.push("");
    for(let a = 0; a < e.SheetNames.length; ++a){
        r.push(ae("Worksheet", _m(a, t, e), {
            "ss:Name": be(e.SheetNames[a])
        }));
    }
    r[2] = um(e, t);
    r[3] = hm(e);
    return Qe + ae("Workbook", r.join(""), {
        xmlns: Or.ss,
        "xmlns:o": Or.o,
        "xmlns:x": Or.x,
        "xmlns:ss": Or.ss,
        "xmlns:dt": Or.dt,
        "xmlns:html": Or.html
    });
}
function km(e) {
    const t = {};
    const e_content = e.content;
    e_content.l = 28;
    t.AnsiUserType = e_content.read_shift(0, "lpstr-ansi");
    t.AnsiClipboardFormat = xl(e_content);
    if (e_content.length - e_content.l <= 4) {
        return t;
    }
    let a = e_content.read_shift(4);
    if (a == 0 || a > 40 || (e_content.l -= 4, t.Reserved1 = e_content.read_shift(0, "lpstr-ansi"), e_content.length - e_content.l <= 4) || (a = e_content.read_shift(4), a !== 1907505652) || (t.UnicodeClipboardFormat = dl(e_content), a = e_content.read_shift(4), a == 0 || a > 40)) {
        return t;
    }
    e_content.l -= 4;
    t.Reserved2 = e_content.read_shift(0, "lpwstr");
}
const Em = [
    60,
    1084,
    2066,
    2165,
    2175
];
function Tm(e, t, content, a, n) {
    let i = a;
    const s = [];
    let f = content.slice(content.l, content.l + i);
    if (n && n.enc && n.enc.insitu && f.length > 0) {
        switch(e){
            case 9:
            case 521:
            case 1033:
            case 2057:
            case 47:
            case 405:
            case 225:
            case 406:
            case 312:
            case 404:
            case 10:
                break;
            case 133:
                break;
            default:
                n.enc.insitu(f);
        }
    }
    s.push(f);
    content.l += i;
    for(let c = lt(content, content.l), o = cn[c], l = 0; o != null && Em.indexOf(c) > -1;){
        i = lt(content, content.l + 2);
        l = content.l + 4;
        if (c == 2066) {
            l += 4;
        } else if (c == 2165 || c == 2175) {
            l += 12;
        }
        f = content.slice(l, content.l + 4 + i);
        s.push(f);
        content.l += 4 + i;
        o = cn[c = lt(content, content.l)];
    }
    const u = bconcat(s);
    prep_blob(u, 0);
    let x = 0;
    u.lens = [];
    for(let d = 0; d < s.length; ++d){
        u.lens.push(x);
        x += s[d].length;
    }
    if (u.length < a) {
        throw `XLS Record 0x${e.toString(16)} Truncated: ${u.length} < ${a}`;
    }
    return t.f(u, u.length, n);
}
function Qr(e, t, Date1904) {
    if (e.t !== "z" && e.XF) {
        let a = 0;
        try {
            a = e.z || e.XF.numFmtId || 0;
            if (t.cellNF) {
                e.z = _table[a];
            }
        } catch (error) {
            if (t.WTF) {
                throw error;
            }
        }
        if (!t || t.cellText !== false) {
            try {
                if (e.t === "e") {
                    e.w = e.w || vt[e.v];
                } else if (a === 0 || a == "General") {
                    if (e.t === "n") {
                        if ((e.v | 0) === e.v) {
                            e.w = e.v.toString(10);
                        } else {
                            e.w = Na(e.v);
                        }
                    } else {
                        e.w = Mt(e.v);
                    }
                } else {
                    e.w = format(a, e.v, {
                        date1904: !!Date1904,
                        dateNF: t && t.dateNF
                    });
                }
            } catch (error) {
                if (t.WTF) {
                    throw error;
                }
            }
        }
        if (t.cellDates && a && e.t == "n" && is_date(_table[a] || String(a))) {
            const n = parse_date_code(e.v);
            if (n) {
                e.t = "d";
                e.v = new Date(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u);
            }
        }
    }
}
function o0(e, ixfe, r) {
    return {
        v: e,
        ixfe,
        t: r
    };
}
function Sm(content, t) {
    const r = {
        opts: {}
    };
    const a = {};
    let n = t.dense ? [] : {};
    const i = {};
    let s = {};
    let f = null;
    let c = [];
    let o = "";
    let l = {};
    let u;
    let x = "";
    let d;
    let v;
    let h;
    let p;
    const sharedf = {};
    let arrayf = [];
    let g;
    let D;
    const b = [];
    let N = [];
    const F = {
        Sheets: [],
        WBProps: {
            date1904: false
        },
        Views: [
            {}
        ]
    };
    let B = {};
    const I = (Se)=>{
        if (Se < 8) {
            return Nt[Se];
        }
        return Se < 64 && N[Se - 8] || Nt[Se];
    };
    const z = (Se, Ze, Br)=>{
        const data = Ze.XF.data;
        if (!(!data || !data.patternType || !Br || !Br.cellStyles)) {
            Ze.s = {};
            Ze.s.patternType = data.patternType;
            let rgb;
            if (rgb = Ma(I(data.icvFore))) {
                Ze.s.fgColor = {
                    rgb
                };
            }
            if (rgb = Ma(I(data.icvBack))) {
                Ze.s.bgColor = {
                    rgb
                };
            }
        }
    };
    const X = (Se, Ze, Br)=>{
        if (!(ge > 1) && !(Br.sheetRows && Se.r >= Br.sheetRows)) {
            if (Br.cellStyles && Ze.XF && Ze.XF.data) {
                z(Se, Ze, Br);
            }
            delete Ze.ixfe;
            delete Ze.XF;
            u = Se;
            x = encode_cell(Se);
            if (!s || !s.s || !s.e) {
                s = {
                    s: {
                        r: 0,
                        c: 0
                    },
                    e: {
                        r: 0,
                        c: 0
                    }
                };
            }
            if (Se.r < s.s.r) {
                s.s.r = Se.r;
            }
            if (Se.c < s.s.c) {
                s.s.c = Se.c;
            }
            if (Se.r + 1 > s.e.r) {
                s.e.r = Se.r + 1;
            }
            if (Se.c + 1 > s.e.c) {
                s.e.c = Se.c + 1;
            }
            if (Br.cellFormula && Ze.f) {
                for(let ar = 0; ar < arrayf.length; ++ar){
                    if (!(arrayf[ar][0].s.c > Se.c || arrayf[ar][0].s.r > Se.r) && !(arrayf[ar][0].e.c < Se.c || arrayf[ar][0].e.r < Se.r)) {
                        Ze.F = encode_range(arrayf[ar][0]);
                        (arrayf[ar][0].s.c != Se.c || arrayf[ar][0].s.r != Se.r) && delete Ze.f;
                        if (Ze.f) {
                            Ze.f = `${pr(arrayf[ar][1], s, Se, V, L)}`;
                        }
                        break;
                    }
                }
            }
            if (Br.dense) {
                if (!n[Se.r]) {
                    n[Se.r] = [];
                }
                n[Se.r][Se.c] = Ze;
            } else {
                n[x] = Ze;
            }
        }
    };
    var L = {
        enc: false,
        sbcch: 0,
        snames: [],
        sharedf,
        arrayf,
        rrtabid: [],
        lastuser: "",
        biff: 8,
        codepage: 0,
        winlocked: 0,
        cellStyles: !!t && !!t.cellStyles,
        WTF: !!t && !!t.wtf
    };
    if (t.password) {
        L.password = t.password;
    }
    let J;
    let le = [];
    let ie = [];
    let he = [];
    let ce = [];
    let Pe = false;
    var V = [];
    V.SheetNames = L.snames;
    V.sharedf = L.sharedf;
    V.arrayf = L.arrayf;
    V.names = [];
    V.XTI = [];
    let ve = 0;
    var ge = 0;
    let C = 0;
    const P = [];
    const O = [];
    let R;
    L.codepage = 1200;
    Gr(1200);
    let Y = false;
    while(content.l < content.length - 1){
        const re = content.l;
        const te = content.read_shift(2);
        if (te === 0 && ve === 10) {
            break;
        }
        let Q = content.l === content.length ? 0 : content.read_shift(2);
        const Z = cn[te];
        if (Z && Z.f) {
            if (t.bookSheets && ve === 133 && te !== 133) {
                break;
            }
            ve = te;
            if (Z.r === 2 || Z.r == 12) {
                const Ee = content.read_shift(2);
                Q -= 2;
                if (!L.enc && Ee !== te && ((Ee & 255) << 8 | Ee >> 8) !== te) {
                    throw new Error(`rt mismatch: ${Ee}!=${te}`);
                }
                if (Z.r == 12) {
                    content.l += 10;
                    Q -= 10;
                }
            }
            let A = {};
            if (te === 10) {
                A = Z.f(content, Q, L);
            } else {
                A = Tm(te, Z, content, Q, L);
            }
            if (ge == 0 && [
                9,
                521,
                1033,
                2057
            ].indexOf(ve) === -1) {
                continue;
            }
            switch(te){
                case 34:
                    r.opts.Date1904 = F.WBProps.date1904 = A;
                    break;
                case 134:
                    r.opts.WriteProtect = true;
                    break;
                case 47:
                    if (!L.enc) {
                        content.l = 0;
                    }
                    L.enc = A;
                    if (!t.password) {
                        throw new Error("File is password-protected");
                    }
                    if (A.valid == null) {
                        throw new Error("Encryption scheme unsupported");
                    }
                    if (!A.valid) {
                        throw new Error("Password is incorrect");
                    }
                    break;
                case 92:
                    L.lastuser = A;
                    break;
                case 66:
                    let Ue = Number(A);
                    switch(Ue){
                        case 21010:
                            Ue = 1200;
                            break;
                        case 32768:
                            Ue = 10000;
                            break;
                        case 32769:
                            Ue = 1252;
                            break;
                    }
                    Gr(L.codepage = Ue);
                    Y = true;
                    break;
                case 317:
                    L.rrtabid = A;
                    break;
                case 25:
                    L.winlocked = A;
                    break;
                case 439:
                    r.opts.RefreshAll = A;
                    break;
                case 12:
                    r.opts.CalcCount = A;
                    break;
                case 16:
                    r.opts.CalcDelta = A;
                    break;
                case 17:
                    r.opts.CalcIter = A;
                    break;
                case 13:
                    r.opts.CalcMode = A;
                    break;
                case 14:
                    r.opts.CalcPrecision = A;
                    break;
                case 95:
                    r.opts.CalcSaveRecalc = A;
                    break;
                case 15:
                    L.CalcRefMode = A;
                    break;
                case 2211:
                    r.opts.FullCalc = A;
                    break;
                case 129:
                    if (A.fDialog) {
                        n["!type"] = "dialog";
                    }
                    if (!A.fBelow) {
                        (n["!outline"] || (n["!outline"] = {})).above = true;
                    }
                    if (!A.fRight) {
                        (n["!outline"] || (n["!outline"] = {})).left = true;
                    }
                    break;
                case 224:
                    b.push(A);
                    break;
                case 430:
                    V.push([
                        A
                    ]);
                    V[V.length - 1].XTI = [];
                    break;
                case 35:
                case 547:
                    V[V.length - 1].push(A);
                    break;
                case 24:
                case 536:
                    R = {
                        Name: A.Name,
                        Ref: pr(A.rgce, s, null, V, L)
                    };
                    if (A.itab > 0) {
                        R.Sheet = A.itab - 1;
                    }
                    V.names.push(R);
                    if (!V[0]) {
                        V[0] = [];
                        V[0].XTI = [];
                    }
                    V[V.length - 1].push(A);
                    if (A.Name == "_xlnm._FilterDatabase" && A.itab > 0 && A.rgce && A.rgce[0] && A.rgce[0][0] && A.rgce[0][0][0] == "PtgArea3d") {
                        O[A.itab - 1] = {
                            ref: encode_range(A.rgce[0][0][1][2])
                        };
                    }
                    break;
                case 22:
                    L.ExternCount = A;
                    break;
                case 23:
                    if (V.length == 0) {
                        V[0] = [];
                        V[0].XTI = [];
                    }
                    V[V.length - 1].XTI = V[V.length - 1].XTI.concat(A);
                    V.XTI = V.XTI.concat(A);
                    break;
                case 2196:
                    if (L.biff < 8) {
                        break;
                    }
                    if (R != null) {
                        R.Comment = A[1];
                    }
                    break;
                case 18:
                    n["!protect"] = A;
                    break;
                case 19:
                    if (A !== 0 && L.WTF) {
                        console.error(`Password verifier: ${A}`);
                    }
                    break;
                case 133:
                    i[A.pos] = A;
                    L.snames.push(A.name);
                    break;
                case 10:
                    {
                        if (--ge) {
                            break;
                        }
                        if (s.e) {
                            if (s.e.r > 0 && s.e.c > 0) {
                                s.e.r--;
                                s.e.c--;
                                n["!ref"] = encode_range(s);
                                if (t.sheetRows && t.sheetRows <= s.e.r) {
                                    const Ce = s.e.r;
                                    s.e.r = t.sheetRows - 1;
                                    n["!fullref"] = n["!ref"];
                                    n["!ref"] = encode_range(s);
                                    s.e.r = Ce;
                                }
                                s.e.r++;
                                s.e.c++;
                            }
                            if (le.length > 0) {
                                n["!merges"] = le;
                            }
                            if (ie.length > 0) {
                                n["!objects"] = ie;
                            }
                            if (he.length > 0) {
                                n["!cols"] = he;
                            }
                            if (ce.length > 0) {
                                n["!rows"] = ce;
                            }
                            F.Sheets.push(B);
                        }
                        if (o === "") {
                            l = n;
                        } else {
                            a[o] = n;
                        }
                        n = t.dense ? [] : {};
                    }
                    break;
                case 9:
                case 521:
                case 1033:
                case 2057:
                    {
                        if (L.biff === 8) {
                            L.biff = ({
                                9: 2,
                                521: 3,
                                1033: 4
                            })[te] || ({
                                512: 2,
                                768: 3,
                                1024: 4,
                                1280: 5,
                                1536: 8,
                                2: 2,
                                7: 2
                            })[A.BIFFVer] || 8;
                        }
                        L.biffguess = A.BIFFVer == 0;
                        if (A.BIFFVer == 0 && A.dt == 4096) {
                            L.biff = 5;
                            Y = true;
                            Gr(L.codepage = 28591);
                        }
                        if (L.biff == 8 && A.BIFFVer == 0 && A.dt == 16) {
                            L.biff = 2;
                        }
                        if (ge++) {
                            break;
                        }
                        n = t.dense ? [] : {};
                        if (L.biff < 8 && !Y) {
                            Y = true;
                            Gr(L.codepage = t.codepage || 1252);
                        }
                        if (L.biff < 5 || A.BIFFVer == 0 && A.dt == 4096) {
                            if (o === "") {
                                o = "Sheet1";
                            }
                            s = {
                                s: {
                                    r: 0,
                                    c: 0
                                },
                                e: {
                                    r: 0,
                                    c: 0
                                }
                            };
                            const Be = {
                                pos: content.l - Q,
                                name: o
                            };
                            i[Be.pos] = Be;
                            L.snames.push(o);
                        } else {
                            o = (i[re] || {
                                name: ""
                            }).name;
                        }
                        if (A.dt == 32) {
                            n["!type"] = "chart";
                        }
                        if (A.dt == 64) {
                            n["!type"] = "macro";
                        }
                        le = [];
                        ie = [];
                        L.arrayf = arrayf = [];
                        he = [];
                        ce = [];
                        Pe = false;
                        B = {
                            Hidden: (i[re] || {
                                hs: 0
                            }).hs,
                            name: o
                        };
                    }
                    break;
                case 515:
                case 3:
                case 2:
                    n["!type"] == "chart" && (t.dense ? (n[A.r] || [])[A.c] : n[encode_cell({
                        c: A.c,
                        r: A.r
                    })]) && ++A.c;
                    g = {
                        ixfe: A.ixfe,
                        XF: b[A.ixfe] || {},
                        v: A.val,
                        t: "n"
                    };
                    if (C > 0) {
                        g.z = P[g.ixfe >> 8 & 63];
                    }
                    Qr(g, t, r.opts.Date1904);
                    X({
                        c: A.c,
                        r: A.r
                    }, g, t);
                    break;
                case 5:
                case 517:
                    g = {
                        ixfe: A.ixfe,
                        XF: b[A.ixfe],
                        v: A.val,
                        t: A.t
                    };
                    if (C > 0) {
                        g.z = P[g.ixfe >> 8 & 63];
                    }
                    Qr(g, t, r.opts.Date1904);
                    X({
                        c: A.c,
                        r: A.r
                    }, g, t);
                    break;
                case 638:
                    g = {
                        ixfe: A.ixfe,
                        XF: b[A.ixfe],
                        v: A.rknum,
                        t: "n"
                    };
                    if (C > 0) {
                        g.z = P[g.ixfe >> 8 & 63];
                    }
                    Qr(g, t, r.opts.Date1904);
                    X({
                        c: A.c,
                        r: A.r
                    }, g, t);
                    break;
                case 189:
                    for(let ye = A.c; ye <= A.C; ++ye){
                        const fe = A.rkrec[ye - A.c][0];
                        g = {
                            ixfe: fe,
                            XF: b[fe],
                            v: A.rkrec[ye - A.c][1],
                            t: "n"
                        };
                        if (C > 0) {
                            g.z = P[g.ixfe >> 8 & 63];
                        }
                        Qr(g, t, r.opts.Date1904);
                        X({
                            c: ye,
                            r: A.r
                        }, g, t);
                    }
                    break;
                case 6:
                case 518:
                case 1030:
                    {
                        if (A.val == "String") {
                            f = A;
                            break;
                        }
                        g = o0(A.val, A.cell.ixfe, A.tt);
                        g.XF = b[g.ixfe];
                        if (t.cellFormula) {
                            const Je = A.formula;
                            if (Je && Je[0] && Je[0][0] && Je[0][0][0] == "PtgExp") {
                                const Lr = Je[0][0][1][0];
                                const Zr = Je[0][0][1][1];
                                const ft = encode_cell({
                                    r: Lr,
                                    c: Zr
                                });
                                if (sharedf[ft]) {
                                    g.f = `${pr(A.formula, s, A.cell, V, L)}`;
                                } else {
                                    g.F = ((t.dense ? (n[Lr] || [])[Zr] : n[ft]) || {}).F;
                                }
                            } else {
                                g.f = `${pr(A.formula, s, A.cell, V, L)}`;
                            }
                        }
                        if (C > 0) {
                            g.z = P[g.ixfe >> 8 & 63];
                        }
                        Qr(g, t, r.opts.Date1904);
                        X(A.cell, g, t);
                        f = A;
                    }
                    break;
                case 7:
                case 519:
                    if (f) {
                        f.val = A;
                        g = o0(A, f.cell.ixfe, "s");
                        g.XF = b[g.ixfe];
                        if (t.cellFormula) {
                            g.f = `${pr(f.formula, s, f.cell, V, L)}`;
                        }
                        if (C > 0) {
                            g.z = P[g.ixfe >> 8 & 63];
                        }
                        Qr(g, t, r.opts.Date1904);
                        X(f.cell, g, t);
                        f = null;
                    } else {
                        throw new Error("String record expects Formula");
                    }
                    break;
                case 33:
                case 545:
                    {
                        arrayf.push(A);
                        const da = encode_cell(A[0].s);
                        d = t.dense ? (n[A[0].s.r] || [])[A[0].s.c] : n[da];
                        if (t.cellFormula && d) {
                            if (!f || !da || !d) {
                                break;
                            }
                            d.f = `${pr(A[1], s, A[0], V, L)}`;
                            d.F = encode_range(A[0]);
                        }
                    }
                    break;
                case 1212:
                    {
                        if (!t.cellFormula) {
                            break;
                        }
                        if (x) {
                            if (!f) {
                                break;
                            }
                            sharedf[encode_cell(f.cell)] = A[0];
                            d = t.dense ? (n[f.cell.r] || [])[f.cell.c] : n[encode_cell(f.cell)];
                            (d || {}).f = `${pr(A[0], s, u, V, L)}`;
                        }
                    }
                    break;
                case 253:
                    g = o0(c[A.isst].t, A.ixfe, "s");
                    if (c[A.isst].h) {
                        g.h = c[A.isst].h;
                    }
                    g.XF = b[g.ixfe];
                    if (C > 0) {
                        g.z = P[g.ixfe >> 8 & 63];
                    }
                    Qr(g, t, r.opts.Date1904);
                    X({
                        c: A.c,
                        r: A.r
                    }, g, t);
                    break;
                case 513:
                    if (t.sheetStubs) {
                        g = {
                            ixfe: A.ixfe,
                            XF: b[A.ixfe],
                            t: "z"
                        };
                        if (C > 0) {
                            g.z = P[g.ixfe >> 8 & 63];
                        }
                        Qr(g, t, r.opts.Date1904);
                        X({
                            c: A.c,
                            r: A.r
                        }, g, t);
                    }
                    break;
                case 190:
                    if (t.sheetStubs) {
                        for(let pt = A.c; pt <= A.C; ++pt){
                            const Dr = A.ixfe[pt - A.c];
                            g = {
                                ixfe: Dr,
                                XF: b[Dr],
                                t: "z"
                            };
                            if (C > 0) {
                                g.z = P[g.ixfe >> 8 & 63];
                            }
                            Qr(g, t, r.opts.Date1904);
                            X({
                                c: pt,
                                r: A.r
                            }, g, t);
                        }
                    }
                    break;
                case 214:
                case 516:
                case 4:
                    g = o0(A.val, A.ixfe, "s");
                    g.XF = b[g.ixfe];
                    if (C > 0) {
                        g.z = P[g.ixfe >> 8 & 63];
                    }
                    Qr(g, t, r.opts.Date1904);
                    X({
                        c: A.c,
                        r: A.r
                    }, g, t);
                    break;
                case 0:
                case 512:
                    if (ge === 1) {
                        s = A;
                    }
                    break;
                case 252:
                    c = A;
                    break;
                case 1054:
                    if (L.biff == 4) {
                        P[C++] = A[1];
                        for(var ct = 0; ct < C + 163 && _table[ct] != A[1]; ++ct);
                        if (ct >= 163) {
                            load(A[1], C + 163);
                        }
                    } else {
                        load(A[1], A[0]);
                    }
                    break;
                case 30:
                    {
                        P[C++] = A;
                        for(var mt = 0; mt < C + 163 && _table[mt] != A; ++mt);
                        if (mt >= 163) {
                            load(A, C + 163);
                        }
                    }
                    break;
                case 229:
                    le = le.concat(A);
                    break;
                case 93:
                    ie[A.cmo[0]] = L.lastobj = A;
                    break;
                case 438:
                    L.lastobj.TxO = A;
                    break;
                case 127:
                    L.lastobj.ImData = A;
                    break;
                case 440:
                    for(p = A[0].s.r; p <= A[0].e.r; ++p){
                        for(h = A[0].s.c; h <= A[0].e.c; ++h){
                            d = t.dense ? (n[p] || [])[h] : n[encode_cell({
                                c: h,
                                r: p
                            })];
                            if (d) {
                                d.l = A[1];
                            }
                        }
                    }
                    break;
                case 2048:
                    for(p = A[0].s.r; p <= A[0].e.r; ++p){
                        for(h = A[0].s.c; h <= A[0].e.c; ++h){
                            d = t.dense ? (n[p] || [])[h] : n[encode_cell({
                                c: h,
                                r: p
                            })];
                            if (d && d.l) {
                                d.l.Tooltip = A[1];
                            }
                        }
                    }
                    break;
                case 28:
                    {
                        if (L.biff <= 5 && L.biff >= 2) {
                            break;
                        }
                        d = t.dense ? (n[A[0].r] || [])[A[0].c] : n[encode_cell(A[0])];
                        const va = ie[A[2]];
                        if (!d) {
                            if (t.dense) {
                                if (!n[A[0].r]) {
                                    n[A[0].r] = [];
                                }
                                d = n[A[0].r][A[0].c] = {
                                    t: "z"
                                };
                            } else {
                                d = n[encode_cell(A[0])] = {
                                    t: "z"
                                };
                            }
                            s.e.r = Math.max(s.e.r, A[0].r);
                            s.s.r = Math.min(s.s.r, A[0].r);
                            s.e.c = Math.max(s.e.c, A[0].c);
                            s.s.c = Math.min(s.s.c, A[0].c);
                        }
                        if (!d.c) {
                            d.c = [];
                        }
                        v = {
                            a: A[1],
                            t: va.TxO.t
                        };
                        d.c.push(v);
                    }
                    break;
                case 2173:
                    hx(b[A.ixfe], A.ext);
                    break;
                case 125:
                    {
                        if (!L.cellStyles) {
                            break;
                        }
                        while(A.e >= A.s){
                            he[A.e--] = {
                                width: A.w / 256,
                                level: A.level || 0,
                                hidden: !!(A.flags & 1)
                            };
                            if (!Pe) {
                                Pe = true;
                                Un(A.w / 256);
                            }
                            St(he[A.e + 1]);
                        }
                    }
                    break;
                case 520:
                    {
                        const Tr = {};
                        if (A.level != null) {
                            ce[A.r] = Tr;
                            Tr.level = A.level;
                        }
                        if (A.hidden) {
                            ce[A.r] = Tr;
                            Tr.hidden = true;
                        }
                        if (A.hpt) {
                            ce[A.r] = Tr;
                            Tr.hpt = A.hpt;
                            Tr.hpx = oa(A.hpt);
                        }
                    }
                    break;
                case 38:
                case 39:
                case 40:
                case 41:
                    if (!n["!margins"]) {
                        Lt(n["!margins"] = {});
                    }
                    n["!margins"][({
                        38: "left",
                        39: "right",
                        40: "top",
                        41: "bottom"
                    })[te]] = A;
                    break;
                case 161:
                    if (!n["!margins"]) {
                        Lt(n["!margins"] = {});
                    }
                    n["!margins"].header = A.header;
                    n["!margins"].footer = A.footer;
                    break;
                case 574:
                    if (A.RTL) {
                        F.Views[0].RTL = true;
                    }
                    break;
                case 146:
                    N = A;
                    break;
                case 2198:
                    J = A;
                    break;
                case 140:
                    D = A;
                    break;
                case 442:
                    if (o) {
                        B.CodeName = A || B.name;
                    } else {
                        F.WBProps.CodeName = A || "ThisWorkbook";
                    }
                    break;
            }
        } else {
            if (!Z) {
                console.error(`Missing Info for XLS Record 0x${te.toString(16)}`);
            }
            content.l += Q;
        }
    }
    r.SheetNames = je(i).sort((qr, Se)=>Number(qr) - Number(Se)).map((qr)=>i[qr].name);
    if (!t.bookSheets) {
        r.Sheets = a;
    }
    if (!r.SheetNames.length && l["!ref"]) {
        r.SheetNames.push("Sheet1");
        if (r.Sheets) {
            r.Sheets.Sheet1 = l;
        }
    } else {
        r.Preamble = l;
    }
    if (r.Sheets) {
        O.forEach((qr, Se)=>{
            r.Sheets[r.SheetNames[Se]]["!autofilter"] = qr;
        });
    }
    r.Strings = c;
    r.SSF = Me(_table);
    if (L.enc) {
        r.Encryption = L.enc;
    }
    if (J) {
        r.Themes = J;
    }
    r.Metadata = {};
    if (D !== undefined) {
        r.Metadata.Country = D;
    }
    if (V.names.length > 0) {
        F.Names = V.names;
    }
    r.Workbook = F;
    return r;
}
const Oa = {
    SI: "e0859ff2f94f6810ab9108002b27b3d9",
    DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
    UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
};
function Fm(e, t, r) {
    const a = CFB.find(e, "/!DocumentSummaryInformation");
    if (a && a.size > 0) {
        try {
            const n = Mi(a, en, Oa.DSI);
            for(const i in n){
                t[i] = n[i];
            }
        } catch (error) {
            if (r.WTF) {
                throw error;
            }
        }
    }
    const s = CFB.find(e, "/!SummaryInformation");
    if (s && s.size > 0) {
        try {
            const f = Mi(s, rn, Oa.SI);
            for(const c in f){
                if (t[c] == null) {
                    t[c] = f[c];
                }
            }
        } catch (error) {
            if (r.WTF) {
                throw error;
            }
        }
    }
    if (t.HeadingPairs && t.TitlesOfParts) {
        rf(t.HeadingPairs, t.TitlesOfParts, t, r);
        delete t.HeadingPairs;
        delete t.TitlesOfParts;
    }
}
function ym(e, t) {
    const r = [];
    const a = [];
    const n = [];
    let i = 0;
    let s;
    const f = di(en, "n");
    const c = di(rn, "n");
    if (e.Props) {
        s = je(e.Props);
        for(i = 0; i < s.length; ++i){
            (Object.prototype.hasOwnProperty.call(f, s[i]) ? r : Object.prototype.hasOwnProperty.call(c, s[i]) ? a : n).push([
                s[i],
                e.Props[s[i]]
            ]);
        }
    }
    if (e.Custprops) {
        s = je(e.Custprops);
        for(i = 0; i < s.length; ++i){
            if (!Object.prototype.hasOwnProperty.call(e.Props || {}, s[i])) {
                (Object.prototype.hasOwnProperty.call(f, s[i]) ? r : Object.prototype.hasOwnProperty.call(c, s[i]) ? a : n).push([
                    s[i],
                    e.Custprops[s[i]]
                ]);
            }
        }
    }
    const o = [];
    for(i = 0; i < n.length; ++i){
        of.indexOf(n[i][0]) > -1 || ef.indexOf(n[i][0]) > -1 || n[i][1] != null && o.push(n[i]);
    }
    if (a.length) {
        CFB.utils.cfb_add(t, "/SummaryInformation", Ui(a, Oa.SI, c, rn));
    }
    if (r.length || o.length) {
        CFB.utils.cfb_add(t, "/DocumentSummaryInformation", Ui(r, Oa.DSI, f, en, o.length ? o : null, Oa.UDI));
    }
}
export function parse_xlscfb(e, t) {
    if (!t) {
        t = {};
    }
    Yn(t);
    F0();
    if (t.codepage) {
        S0(t.codepage);
    }
    let r;
    let a;
    if (e.FullPaths) {
        if (CFB.find(e, "/encryption")) {
            throw new Error("File is password-protected");
        }
        r = CFB.find(e, "!CompObj");
        a = CFB.find(e, "/Workbook") || CFB.find(e, "/Book");
    } else {
        switch(t.type){
            case "base64":
                e = Ir(br(e));
                break;
            case "binary":
                e = Ir(e);
                break;
            case "buffer":
                break;
            case "array":
                if (!Array.isArray(e)) {
                    e = Array.prototype.slice.call(e);
                }
                break;
        }
        prep_blob(e, 0);
        a = {
            content: e
        };
    }
    let n;
    let i;
    if (r) {
        km(r);
    }
    if (t.bookProps && !t.bookSheets) {
        n = {};
    } else {
        const s = Te ? "buffer" : "array";
        if (a && a.content) {
            n = Sm(a.content, t);
        } else if ((i = CFB.find(e, "PerfectOffice_MAIN")) && i.content) {
            n = Pt.to_workbook(i.content, (t.type = s, t));
        } else if ((i = CFB.find(e, "NativeContent_MAIN")) && i.content) {
            n = Pt.to_workbook(i.content, (t.type = s, t));
        } else {
            throw (i = CFB.find(e, "MN0")) && i.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
        }
        if (t.bookVBA && e.FullPaths && CFB.find(e, "/_VBA_PROJECT_CUR/VBA/dir")) {
            n.vbaraw = Wx(e);
        }
    }
    const f = {};
    if (e.FullPaths) {
        Fm(e, f, t);
    }
    n.Props = n.Custprops = f;
    if (t.bookFiles) {
        n.cfb = e;
    }
    return n;
}
function Am(e, t) {
    const r = t || {};
    const a = CFB.utils.cfb_new({
        root: "R"
    });
    let n = "/Workbook";
    switch(r.bookType || "xls"){
        case "xls":
            r.bookType = "biff8";
        case "xla":
            if (!r.bookType) {
                r.bookType = "xla";
            }
        case "biff8":
            n = "/Workbook";
            r.biff = 8;
            break;
        case "biff5":
            n = "/Book";
            r.biff = 5;
            break;
        default:
            throw new Error(`invalid type ${r.bookType} for XLS CFB`);
    }
    CFB.utils.cfb_add(a, n, sc(e, r));
    if (r.biff == 8 && (e.Props || e.Custprops)) {
        ym(e, a);
    }
    if (r.biff == 8 && e.vbaraw) {
        Hx(a, CFB.read(e.vbaraw, {
            type: typeof e.vbaraw === "string" ? "binary" : "buffer"
        }));
    }
    return a;
}
var Va = {
    0: {
        f: qv
    },
    1: {
        f: s2
    },
    2: {
        f: F2
    },
    3: {
        f: d2
    },
    4: {
        f: l2
    },
    5: {
        f: E2
    },
    6: {
        f: O2
    },
    7: {
        f: g2
    },
    8: {
        f: B2
    },
    9: {
        f: L2
    },
    10: {
        f: b2
    },
    11: {
        f: P2
    },
    12: {
        f: c2
    },
    13: {
        f: A2
    },
    14: {
        f: p2
    },
    15: {
        f: h2
    },
    16: {
        f: Jf
    },
    17: {
        f: R2
    },
    18: {
        f: w2
    },
    19: {
        f: Dn
    },
    20: {},
    21: {},
    22: {},
    23: {},
    24: {},
    25: {},
    26: {},
    27: {},
    28: {},
    29: {},
    30: {},
    31: {},
    32: {},
    33: {},
    34: {},
    35: {
        T: 1
    },
    36: {
        T: -1
    },
    37: {
        T: 1
    },
    38: {
        T: -1
    },
    39: {
        f: Ip
    },
    40: {},
    42: {},
    43: {
        f: O1
    },
    44: {
        f: C1
    },
    45: {
        f: N1
    },
    46: {
        f: P1
    },
    47: {
        f: b1
    },
    48: {},
    49: {
        f: rl
    },
    50: {},
    51: {
        f: vx
    },
    52: {
        T: 1
    },
    53: {
        T: -1
    },
    54: {
        T: 1
    },
    55: {
        T: -1
    },
    56: {
        T: 1
    },
    57: {
        T: -1
    },
    58: {},
    59: {},
    60: {
        f: wf
    },
    62: {
        f: D2
    },
    63: {
        f: Sx
    },
    64: {
        f: Q2
    },
    65: {},
    66: {},
    67: {},
    68: {},
    69: {},
    70: {},
    128: {},
    129: {
        T: 1
    },
    130: {
        T: -1
    },
    131: {
        T: 1,
        f: kr,
        p: 0
    },
    132: {
        T: -1
    },
    133: {
        T: 1
    },
    134: {
        T: -1
    },
    135: {
        T: 1
    },
    136: {
        T: -1
    },
    137: {
        T: 1,
        f: j2
    },
    138: {
        T: -1
    },
    139: {
        T: 1
    },
    140: {
        T: -1
    },
    141: {
        T: 1
    },
    142: {
        T: -1
    },
    143: {
        T: 1
    },
    144: {
        T: -1
    },
    145: {
        T: 1
    },
    146: {
        T: -1
    },
    147: {
        f: n2
    },
    148: {
        f: r2,
        p: 16
    },
    151: {
        f: X2
    },
    152: {},
    153: {
        f: Cp
    },
    154: {},
    155: {},
    156: {
        f: yp
    },
    157: {},
    158: {},
    159: {
        T: 1,
        f: zh
    },
    160: {
        T: -1
    },
    161: {
        T: 1,
        f: jt
    },
    162: {
        T: -1
    },
    163: {
        T: 1
    },
    164: {
        T: -1
    },
    165: {
        T: 1
    },
    166: {
        T: -1
    },
    167: {},
    168: {},
    169: {},
    170: {},
    171: {},
    172: {
        T: 1
    },
    173: {
        T: -1
    },
    174: {},
    175: {},
    176: {
        f: M2
    },
    177: {
        T: 1
    },
    178: {
        T: -1
    },
    179: {
        T: 1
    },
    180: {
        T: -1
    },
    181: {
        T: 1
    },
    182: {
        T: -1
    },
    183: {
        T: 1
    },
    184: {
        T: -1
    },
    185: {
        T: 1
    },
    186: {
        T: -1
    },
    187: {
        T: 1
    },
    188: {
        T: -1
    },
    189: {
        T: 1
    },
    190: {
        T: -1
    },
    191: {
        T: 1
    },
    192: {
        T: -1
    },
    193: {
        T: 1
    },
    194: {
        T: -1
    },
    195: {
        T: 1
    },
    196: {
        T: -1
    },
    197: {
        T: 1
    },
    198: {
        T: -1
    },
    199: {
        T: 1
    },
    200: {
        T: -1
    },
    201: {
        T: 1
    },
    202: {
        T: -1
    },
    203: {
        T: 1
    },
    204: {
        T: -1
    },
    205: {
        T: 1
    },
    206: {
        T: -1
    },
    207: {
        T: 1
    },
    208: {
        T: -1
    },
    209: {
        T: 1
    },
    210: {
        T: -1
    },
    211: {
        T: 1
    },
    212: {
        T: -1
    },
    213: {
        T: 1
    },
    214: {
        T: -1
    },
    215: {
        T: 1
    },
    216: {
        T: -1
    },
    217: {
        T: 1
    },
    218: {
        T: -1
    },
    219: {
        T: 1
    },
    220: {
        T: -1
    },
    221: {
        T: 1
    },
    222: {
        T: -1
    },
    223: {
        T: 1
    },
    224: {
        T: -1
    },
    225: {
        T: 1
    },
    226: {
        T: -1
    },
    227: {
        T: 1
    },
    228: {
        T: -1
    },
    229: {
        T: 1
    },
    230: {
        T: -1
    },
    231: {
        T: 1
    },
    232: {
        T: -1
    },
    233: {
        T: 1
    },
    234: {
        T: -1
    },
    235: {
        T: 1
    },
    236: {
        T: -1
    },
    237: {
        T: 1
    },
    238: {
        T: -1
    },
    239: {
        T: 1
    },
    240: {
        T: -1
    },
    241: {
        T: 1
    },
    242: {
        T: -1
    },
    243: {
        T: 1
    },
    244: {
        T: -1
    },
    245: {
        T: 1
    },
    246: {
        T: -1
    },
    247: {
        T: 1
    },
    248: {
        T: -1
    },
    249: {
        T: 1
    },
    250: {
        T: -1
    },
    251: {
        T: 1
    },
    252: {
        T: -1
    },
    253: {
        T: 1
    },
    254: {
        T: -1
    },
    255: {
        T: 1
    },
    256: {
        T: -1
    },
    257: {
        T: 1
    },
    258: {
        T: -1
    },
    259: {
        T: 1
    },
    260: {
        T: -1
    },
    261: {
        T: 1
    },
    262: {
        T: -1
    },
    263: {
        T: 1
    },
    264: {
        T: -1
    },
    265: {
        T: 1
    },
    266: {
        T: -1
    },
    267: {
        T: 1
    },
    268: {
        T: -1
    },
    269: {
        T: 1
    },
    270: {
        T: -1
    },
    271: {
        T: 1
    },
    272: {
        T: -1
    },
    273: {
        T: 1
    },
    274: {
        T: -1
    },
    275: {
        T: 1
    },
    276: {
        T: -1
    },
    277: {},
    278: {
        T: 1
    },
    279: {
        T: -1
    },
    280: {
        T: 1
    },
    281: {
        T: -1
    },
    282: {
        T: 1
    },
    283: {
        T: 1
    },
    284: {
        T: -1
    },
    285: {
        T: 1
    },
    286: {
        T: -1
    },
    287: {
        T: 1
    },
    288: {
        T: -1
    },
    289: {
        T: 1
    },
    290: {
        T: -1
    },
    291: {
        T: 1
    },
    292: {
        T: -1
    },
    293: {
        T: 1
    },
    294: {
        T: -1
    },
    295: {
        T: 1
    },
    296: {
        T: -1
    },
    297: {
        T: 1
    },
    298: {
        T: -1
    },
    299: {
        T: 1
    },
    300: {
        T: -1
    },
    301: {
        T: 1
    },
    302: {
        T: -1
    },
    303: {
        T: 1
    },
    304: {
        T: -1
    },
    305: {
        T: 1
    },
    306: {
        T: -1
    },
    307: {
        T: 1
    },
    308: {
        T: -1
    },
    309: {
        T: 1
    },
    310: {
        T: -1
    },
    311: {
        T: 1
    },
    312: {
        T: -1
    },
    313: {
        T: -1
    },
    314: {
        T: 1
    },
    315: {
        T: -1
    },
    316: {
        T: 1
    },
    317: {
        T: -1
    },
    318: {
        T: 1
    },
    319: {
        T: -1
    },
    320: {
        T: 1
    },
    321: {
        T: -1
    },
    322: {
        T: 1
    },
    323: {
        T: -1
    },
    324: {
        T: 1
    },
    325: {
        T: -1
    },
    326: {
        T: 1
    },
    327: {
        T: -1
    },
    328: {
        T: 1
    },
    329: {
        T: -1
    },
    330: {
        T: 1
    },
    331: {
        T: -1
    },
    332: {
        T: 1
    },
    333: {
        T: -1
    },
    334: {
        T: 1
    },
    335: {
        f: xx
    },
    336: {
        T: -1
    },
    337: {
        f: gx,
        T: 1
    },
    338: {
        T: -1
    },
    339: {
        T: 1
    },
    340: {
        T: -1
    },
    341: {
        T: 1
    },
    342: {
        T: -1
    },
    343: {
        T: 1
    },
    344: {
        T: -1
    },
    345: {
        T: 1
    },
    346: {
        T: -1
    },
    347: {
        T: 1
    },
    348: {
        T: -1
    },
    349: {
        T: 1
    },
    350: {
        T: -1
    },
    351: {},
    352: {},
    353: {
        T: 1
    },
    354: {
        T: -1
    },
    355: {
        f: Q0
    },
    357: {},
    358: {},
    359: {},
    360: {
        T: 1
    },
    361: {},
    362: {
        f: _f
    },
    363: {},
    364: {},
    366: {},
    367: {},
    368: {},
    369: {},
    370: {},
    371: {},
    372: {
        T: 1
    },
    373: {
        T: -1
    },
    374: {
        T: 1
    },
    375: {
        T: -1
    },
    376: {
        T: 1
    },
    377: {
        T: -1
    },
    378: {
        T: 1
    },
    379: {
        T: -1
    },
    380: {
        T: 1
    },
    381: {
        T: -1
    },
    382: {
        T: 1
    },
    383: {
        T: -1
    },
    384: {
        T: 1
    },
    385: {
        T: -1
    },
    386: {
        T: 1
    },
    387: {
        T: -1
    },
    388: {
        T: 1
    },
    389: {
        T: -1
    },
    390: {
        T: 1
    },
    391: {
        T: -1
    },
    392: {
        T: 1
    },
    393: {
        T: -1
    },
    394: {
        T: 1
    },
    395: {
        T: -1
    },
    396: {},
    397: {},
    398: {},
    399: {},
    400: {},
    401: {
        T: 1
    },
    403: {},
    404: {},
    405: {},
    406: {},
    407: {},
    408: {},
    409: {},
    410: {},
    411: {},
    412: {},
    413: {},
    414: {},
    415: {},
    416: {},
    417: {},
    418: {},
    419: {},
    420: {},
    421: {},
    422: {
        T: 1
    },
    423: {
        T: 1
    },
    424: {
        T: -1
    },
    425: {
        T: -1
    },
    426: {
        f: G2
    },
    427: {
        f: z2
    },
    428: {},
    429: {
        T: 1
    },
    430: {
        T: -1
    },
    431: {
        T: 1
    },
    432: {
        T: -1
    },
    433: {
        T: 1
    },
    434: {
        T: -1
    },
    435: {
        T: 1
    },
    436: {
        T: -1
    },
    437: {
        T: 1
    },
    438: {
        T: -1
    },
    439: {
        T: 1
    },
    440: {
        T: -1
    },
    441: {
        T: 1
    },
    442: {
        T: -1
    },
    443: {
        T: 1
    },
    444: {
        T: -1
    },
    445: {
        T: 1
    },
    446: {
        T: -1
    },
    447: {
        T: 1
    },
    448: {
        T: -1
    },
    449: {
        T: 1
    },
    450: {
        T: -1
    },
    451: {
        T: 1
    },
    452: {
        T: -1
    },
    453: {
        T: 1
    },
    454: {
        T: -1
    },
    455: {
        T: 1
    },
    456: {
        T: -1
    },
    457: {
        T: 1
    },
    458: {
        T: -1
    },
    459: {
        T: 1
    },
    460: {
        T: -1
    },
    461: {
        T: 1
    },
    462: {
        T: -1
    },
    463: {
        T: 1
    },
    464: {
        T: -1
    },
    465: {
        T: 1
    },
    466: {
        T: -1
    },
    467: {
        T: 1
    },
    468: {
        T: -1
    },
    469: {
        T: 1
    },
    470: {
        T: -1
    },
    471: {},
    472: {},
    473: {
        T: 1
    },
    474: {
        T: -1
    },
    475: {},
    476: {
        f: K2
    },
    477: {},
    478: {},
    479: {
        T: 1
    },
    480: {
        T: -1
    },
    481: {
        T: 1
    },
    482: {
        T: -1
    },
    483: {
        T: 1
    },
    484: {
        T: -1
    },
    485: {
        f: a2
    },
    486: {
        T: 1
    },
    487: {
        T: -1
    },
    488: {
        T: 1
    },
    489: {
        T: -1
    },
    490: {
        T: 1
    },
    491: {
        T: -1
    },
    492: {
        T: 1
    },
    493: {
        T: -1
    },
    494: {
        f: H2
    },
    495: {
        T: 1
    },
    496: {
        T: -1
    },
    497: {
        T: 1
    },
    498: {
        T: -1
    },
    499: {},
    500: {
        T: 1
    },
    501: {
        T: -1
    },
    502: {
        T: 1
    },
    503: {
        T: -1
    },
    504: {},
    505: {
        T: 1
    },
    506: {
        T: -1
    },
    507: {},
    508: {
        T: 1
    },
    509: {
        T: -1
    },
    510: {
        T: 1
    },
    511: {
        T: -1
    },
    512: {},
    513: {},
    514: {
        T: 1
    },
    515: {
        T: -1
    },
    516: {
        T: 1
    },
    517: {
        T: -1
    },
    518: {
        T: 1
    },
    519: {
        T: -1
    },
    520: {
        T: 1
    },
    521: {
        T: -1
    },
    522: {},
    523: {},
    524: {},
    525: {},
    526: {},
    527: {},
    528: {
        T: 1
    },
    529: {
        T: -1
    },
    530: {
        T: 1
    },
    531: {
        T: -1
    },
    532: {
        T: 1
    },
    533: {
        T: -1
    },
    534: {},
    535: {},
    536: {},
    537: {},
    538: {
        T: 1
    },
    539: {
        T: -1
    },
    540: {
        T: 1
    },
    541: {
        T: -1
    },
    542: {
        T: 1
    },
    548: {},
    549: {},
    550: {
        f: Q0
    },
    551: {},
    552: {},
    553: {},
    554: {
        T: 1
    },
    555: {
        T: -1
    },
    556: {
        T: 1
    },
    557: {
        T: -1
    },
    558: {
        T: 1
    },
    559: {
        T: -1
    },
    560: {
        T: 1
    },
    561: {
        T: -1
    },
    562: {},
    564: {},
    565: {
        T: 1
    },
    566: {
        T: -1
    },
    569: {
        T: 1
    },
    570: {
        T: -1
    },
    572: {},
    573: {
        T: 1
    },
    574: {
        T: -1
    },
    577: {},
    578: {},
    579: {},
    580: {},
    581: {},
    582: {},
    583: {},
    584: {},
    585: {},
    586: {},
    587: {},
    588: {
        T: -1
    },
    589: {},
    590: {
        T: 1
    },
    591: {
        T: -1
    },
    592: {
        T: 1
    },
    593: {
        T: -1
    },
    594: {
        T: 1
    },
    595: {
        T: -1
    },
    596: {},
    597: {
        T: 1
    },
    598: {
        T: -1
    },
    599: {
        T: 1
    },
    600: {
        T: -1
    },
    601: {
        T: 1
    },
    602: {
        T: -1
    },
    603: {
        T: 1
    },
    604: {
        T: -1
    },
    605: {
        T: 1
    },
    606: {
        T: -1
    },
    607: {},
    608: {
        T: 1
    },
    609: {
        T: -1
    },
    610: {},
    611: {
        T: 1
    },
    612: {
        T: -1
    },
    613: {
        T: 1
    },
    614: {
        T: -1
    },
    615: {
        T: 1
    },
    616: {
        T: -1
    },
    617: {
        T: 1
    },
    618: {
        T: -1
    },
    619: {
        T: 1
    },
    620: {
        T: -1
    },
    625: {},
    626: {
        T: 1
    },
    627: {
        T: -1
    },
    628: {
        T: 1
    },
    629: {
        T: -1
    },
    630: {
        T: 1
    },
    631: {
        T: -1
    },
    632: {
        f: Px
    },
    633: {
        T: 1
    },
    634: {
        T: -1
    },
    635: {
        T: 1,
        f: Nx
    },
    636: {
        T: -1
    },
    637: {
        f: il
    },
    638: {
        T: 1
    },
    639: {},
    640: {
        T: -1
    },
    641: {
        T: 1
    },
    642: {
        T: -1
    },
    643: {
        T: 1
    },
    644: {},
    645: {
        T: -1
    },
    646: {
        T: 1
    },
    648: {
        T: 1
    },
    649: {},
    650: {
        T: -1
    },
    651: {
        f: pp
    },
    652: {},
    653: {
        T: 1
    },
    654: {
        T: -1
    },
    655: {
        T: 1
    },
    656: {
        T: -1
    },
    657: {
        T: 1
    },
    658: {
        T: -1
    },
    659: {},
    660: {
        T: 1
    },
    661: {},
    662: {
        T: -1
    },
    663: {},
    664: {
        T: 1
    },
    665: {},
    666: {
        T: -1
    },
    667: {},
    668: {},
    669: {},
    671: {
        T: 1
    },
    672: {
        T: -1
    },
    673: {
        T: 1
    },
    674: {
        T: -1
    },
    675: {},
    676: {},
    677: {},
    678: {},
    679: {},
    680: {},
    681: {},
    1024: {},
    1025: {},
    1026: {
        T: 1
    },
    1027: {
        T: -1
    },
    1028: {
        T: 1
    },
    1029: {
        T: -1
    },
    1030: {},
    1031: {
        T: 1
    },
    1032: {
        T: -1
    },
    1033: {
        T: 1
    },
    1034: {
        T: -1
    },
    1035: {},
    1036: {},
    1037: {},
    1038: {
        T: 1
    },
    1039: {
        T: -1
    },
    1040: {},
    1041: {
        T: 1
    },
    1042: {
        T: -1
    },
    1043: {},
    1044: {},
    1045: {},
    1046: {
        T: 1
    },
    1047: {
        T: -1
    },
    1048: {
        T: 1
    },
    1049: {
        T: -1
    },
    1050: {},
    1051: {
        T: 1
    },
    1052: {
        T: 1
    },
    1053: {
        f: ep
    },
    1054: {
        T: 1
    },
    1055: {},
    1056: {
        T: 1
    },
    1057: {
        T: -1
    },
    1058: {
        T: 1
    },
    1059: {
        T: -1
    },
    1061: {},
    1062: {
        T: 1
    },
    1063: {
        T: -1
    },
    1064: {
        T: 1
    },
    1065: {
        T: -1
    },
    1066: {
        T: 1
    },
    1067: {
        T: -1
    },
    1068: {
        T: 1
    },
    1069: {
        T: -1
    },
    1070: {
        T: 1
    },
    1071: {
        T: -1
    },
    1072: {
        T: 1
    },
    1073: {
        T: -1
    },
    1075: {
        T: 1
    },
    1076: {
        T: -1
    },
    1077: {
        T: 1
    },
    1078: {
        T: -1
    },
    1079: {
        T: 1
    },
    1080: {
        T: -1
    },
    1081: {
        T: 1
    },
    1082: {
        T: -1
    },
    1083: {
        T: 1
    },
    1084: {
        T: -1
    },
    1085: {},
    1086: {
        T: 1
    },
    1087: {
        T: -1
    },
    1088: {
        T: 1
    },
    1089: {
        T: -1
    },
    1090: {
        T: 1
    },
    1091: {
        T: -1
    },
    1092: {
        T: 1
    },
    1093: {
        T: -1
    },
    1094: {
        T: 1
    },
    1095: {
        T: -1
    },
    1096: {},
    1097: {
        T: 1
    },
    1098: {},
    1099: {
        T: -1
    },
    1100: {
        T: 1
    },
    1101: {
        T: -1
    },
    1102: {},
    1103: {},
    1104: {},
    1105: {},
    1111: {},
    1112: {},
    1113: {
        T: 1
    },
    1114: {
        T: -1
    },
    1115: {
        T: 1
    },
    1116: {
        T: -1
    },
    1117: {},
    1118: {
        T: 1
    },
    1119: {
        T: -1
    },
    1120: {
        T: 1
    },
    1121: {
        T: -1
    },
    1122: {
        T: 1
    },
    1123: {
        T: -1
    },
    1124: {
        T: 1
    },
    1125: {
        T: -1
    },
    1126: {},
    1128: {
        T: 1
    },
    1129: {
        T: -1
    },
    1130: {},
    1131: {
        T: 1
    },
    1132: {
        T: -1
    },
    1133: {
        T: 1
    },
    1134: {
        T: -1
    },
    1135: {
        T: 1
    },
    1136: {
        T: -1
    },
    1137: {
        T: 1
    },
    1138: {
        T: -1
    },
    1139: {
        T: 1
    },
    1140: {
        T: -1
    },
    1141: {},
    1142: {
        T: 1
    },
    1143: {
        T: -1
    },
    1144: {
        T: 1
    },
    1145: {
        T: -1
    },
    1146: {},
    1147: {
        T: 1
    },
    1148: {
        T: -1
    },
    1149: {
        T: 1
    },
    1150: {
        T: -1
    },
    1152: {
        T: 1
    },
    1153: {
        T: -1
    },
    1154: {
        T: -1
    },
    1155: {
        T: -1
    },
    1156: {
        T: -1
    },
    1157: {
        T: 1
    },
    1158: {
        T: -1
    },
    1159: {
        T: 1
    },
    1160: {
        T: -1
    },
    1161: {
        T: 1
    },
    1162: {
        T: -1
    },
    1163: {
        T: 1
    },
    1164: {
        T: -1
    },
    1165: {
        T: 1
    },
    1166: {
        T: -1
    },
    1167: {
        T: 1
    },
    1168: {
        T: -1
    },
    1169: {
        T: 1
    },
    1170: {
        T: -1
    },
    1171: {},
    1172: {
        T: 1
    },
    1173: {
        T: -1
    },
    1177: {},
    1178: {
        T: 1
    },
    1180: {},
    1181: {},
    1182: {},
    2048: {
        T: 1
    },
    2049: {
        T: -1
    },
    2050: {},
    2051: {
        T: 1
    },
    2052: {
        T: -1
    },
    2053: {},
    2054: {},
    2055: {
        T: 1
    },
    2056: {
        T: -1
    },
    2057: {
        T: 1
    },
    2058: {
        T: -1
    },
    2060: {},
    2067: {},
    2068: {
        T: 1
    },
    2069: {
        T: -1
    },
    2070: {},
    2071: {},
    2072: {
        T: 1
    },
    2073: {
        T: -1
    },
    2075: {},
    2076: {},
    2077: {
        T: 1
    },
    2078: {
        T: -1
    },
    2079: {},
    2080: {
        T: 1
    },
    2081: {
        T: -1
    },
    2082: {},
    2083: {
        T: 1
    },
    2084: {
        T: -1
    },
    2085: {
        T: 1
    },
    2086: {
        T: -1
    },
    2087: {
        T: 1
    },
    2088: {
        T: -1
    },
    2089: {
        T: 1
    },
    2090: {
        T: -1
    },
    2091: {},
    2092: {},
    2093: {
        T: 1
    },
    2094: {
        T: -1
    },
    2095: {},
    2096: {
        T: 1
    },
    2097: {
        T: -1
    },
    2098: {
        T: 1
    },
    2099: {
        T: -1
    },
    2100: {
        T: 1
    },
    2101: {
        T: -1
    },
    2102: {},
    2103: {
        T: 1
    },
    2104: {
        T: -1
    },
    2105: {},
    2106: {
        T: 1
    },
    2107: {
        T: -1
    },
    2108: {},
    2109: {
        T: 1
    },
    2110: {
        T: -1
    },
    2111: {
        T: 1
    },
    2112: {
        T: -1
    },
    2113: {
        T: 1
    },
    2114: {
        T: -1
    },
    2115: {},
    2116: {},
    2117: {},
    2118: {
        T: 1
    },
    2119: {
        T: -1
    },
    2120: {},
    2121: {
        T: 1
    },
    2122: {
        T: -1
    },
    2123: {
        T: 1
    },
    2124: {
        T: -1
    },
    2125: {},
    2126: {
        T: 1
    },
    2127: {
        T: -1
    },
    2128: {},
    2129: {
        T: 1
    },
    2130: {
        T: -1
    },
    2131: {
        T: 1
    },
    2132: {
        T: -1
    },
    2133: {
        T: 1
    },
    2134: {},
    2135: {},
    2136: {},
    2137: {
        T: 1
    },
    2138: {
        T: -1
    },
    2139: {
        T: 1
    },
    2140: {
        T: -1
    },
    2141: {},
    3072: {},
    3073: {},
    4096: {
        T: 1
    },
    4097: {
        T: -1
    },
    5002: {
        T: 1
    },
    5003: {
        T: -1
    },
    5081: {
        T: 1
    },
    5082: {
        T: -1
    },
    5083: {},
    5084: {
        T: 1
    },
    5085: {
        T: -1
    },
    5086: {
        T: 1
    },
    5087: {
        T: -1
    },
    5088: {},
    5089: {},
    5090: {},
    5092: {
        T: 1
    },
    5093: {
        T: -1
    },
    5094: {},
    5095: {
        T: 1
    },
    5096: {
        T: -1
    },
    5097: {},
    5099: {},
    65535: {
        n: ""
    }
};
var cn = {
    6: {
        f: G0
    },
    10: {
        f: gt
    },
    12: {
        f: tr
    },
    13: {
        f: tr
    },
    14: {
        f: qe
    },
    15: {
        f: qe
    },
    16: {
        f: gr
    },
    17: {
        f: qe
    },
    18: {
        f: qe
    },
    19: {
        f: tr
    },
    20: {
        f: zi
    },
    21: {
        f: zi
    },
    23: {
        f: _f
    },
    24: {
        f: Ki
    },
    25: {
        f: qe
    },
    26: {},
    27: {},
    28: {
        f: eh
    },
    29: {},
    34: {
        f: qe
    },
    35: {
        f: $i
    },
    38: {
        f: gr
    },
    39: {
        f: gr
    },
    40: {
        f: gr
    },
    41: {
        f: gr
    },
    42: {
        f: qe
    },
    43: {
        f: qe
    },
    47: {
        f: h1
    },
    49: {
        f: Au
    },
    51: {
        f: tr
    },
    60: {},
    61: {
        f: Eu
    },
    64: {
        f: qe
    },
    65: {
        f: yu
    },
    66: {
        f: tr
    },
    77: {},
    80: {},
    81: {},
    82: {},
    85: {
        f: tr
    },
    89: {},
    90: {},
    91: {},
    92: {
        f: uu
    },
    93: {
        f: ah
    },
    94: {},
    95: {
        f: qe
    },
    96: {},
    97: {},
    99: {
        f: qe
    },
    125: {
        f: wf
    },
    128: {
        f: Vu
    },
    129: {
        f: xu
    },
    130: {
        f: tr
    },
    131: {
        f: qe
    },
    132: {
        f: qe
    },
    133: {
        f: du
    },
    134: {},
    140: {
        f: uh
    },
    141: {
        f: tr
    },
    144: {},
    146: {
        f: dh
    },
    151: {},
    152: {},
    153: {},
    154: {},
    155: {},
    156: {
        f: tr
    },
    157: {},
    158: {},
    160: {
        f: kh
    },
    161: {
        f: mh
    },
    174: {},
    175: {},
    176: {},
    177: {},
    178: {},
    180: {},
    181: {},
    182: {},
    184: {},
    185: {},
    189: {
        f: Mu
    },
    190: {
        f: Uu
    },
    193: {
        f: gt
    },
    197: {},
    198: {},
    199: {},
    200: {},
    201: {},
    202: {
        f: qe
    },
    203: {},
    204: {},
    205: {},
    206: {},
    207: {},
    208: {},
    209: {},
    210: {},
    211: {},
    213: {},
    215: {},
    216: {},
    217: {},
    218: {
        f: tr
    },
    220: {},
    221: {
        f: qe
    },
    222: {},
    224: {
        f: Hu
    },
    225: {
        f: lu
    },
    226: {
        f: gt
    },
    227: {},
    229: {
        f: rh
    },
    233: {},
    235: {},
    236: {},
    237: {},
    239: {},
    240: {},
    241: {},
    242: {},
    244: {},
    245: {},
    246: {},
    247: {},
    248: {},
    249: {},
    251: {},
    252: {
        f: pu
    },
    253: {
        f: Du
    },
    255: {
        f: gu
    },
    256: {},
    259: {},
    290: {},
    311: {},
    312: {},
    315: {},
    317: {
        f: lf
    },
    318: {},
    319: {},
    320: {},
    330: {},
    331: {},
    333: {},
    334: {},
    335: {},
    336: {},
    337: {},
    338: {},
    339: {},
    340: {},
    351: {},
    352: {
        f: qe
    },
    353: {
        f: gt
    },
    401: {},
    402: {},
    403: {},
    404: {},
    405: {},
    406: {},
    407: {},
    408: {},
    425: {},
    426: {},
    427: {},
    428: {},
    429: {},
    430: {
        f: Ku
    },
    431: {
        f: qe
    },
    432: {},
    433: {},
    434: {},
    437: {},
    438: {
        f: sh
    },
    439: {
        f: qe
    },
    440: {
        f: fh
    },
    441: {},
    442: {
        f: ja
    },
    443: {},
    444: {
        f: tr
    },
    445: {},
    446: {},
    448: {
        f: gt
    },
    449: {
        f: ku,
        r: 2
    },
    450: {
        f: gt
    },
    512: {
        f: Vi
    },
    513: {
        f: wh
    },
    515: {
        f: zu
    },
    516: {
        f: Iu
    },
    517: {
        f: Gi
    },
    519: {
        f: Eh
    },
    520: {
        f: _u
    },
    523: {},
    545: {
        f: Yi
    },
    549: {
        f: Hi
    },
    566: {},
    574: {
        f: Su
    },
    638: {
        f: Bu
    },
    659: {},
    1048: {},
    1054: {
        f: Nu
    },
    1084: {},
    1212: {
        f: Zu
    },
    2048: {
        f: oh
    },
    2049: {},
    2050: {},
    2051: {},
    2052: {},
    2053: {},
    2054: {},
    2055: {},
    2056: {},
    2057: {
        f: s0
    },
    2058: {},
    2059: {},
    2060: {},
    2061: {},
    2062: {},
    2063: {},
    2064: {},
    2066: {},
    2067: {},
    2128: {},
    2129: {},
    2130: {},
    2131: {},
    2132: {},
    2133: {},
    2134: {},
    2135: {},
    2136: {},
    2137: {},
    2138: {},
    2146: {},
    2147: {
        r: 12
    },
    2148: {},
    2149: {},
    2150: {},
    2151: {
        f: gt
    },
    2152: {},
    2154: {},
    2155: {},
    2156: {},
    2161: {},
    2162: {},
    2164: {},
    2165: {},
    2166: {},
    2167: {},
    2168: {},
    2169: {},
    2170: {},
    2171: {},
    2172: {
        f: vh,
        r: 12
    },
    2173: {
        f: ux,
        r: 12
    },
    2174: {},
    2175: {},
    2180: {},
    2181: {},
    2182: {},
    2183: {},
    2184: {},
    2185: {},
    2186: {},
    2187: {},
    2188: {
        f: qe,
        r: 12
    },
    2189: {},
    2190: {
        r: 12
    },
    2191: {},
    2192: {},
    2194: {},
    2195: {},
    2196: {
        f: Ju,
        r: 12
    },
    2197: {},
    2198: {
        f: ix,
        r: 12
    },
    2199: {},
    2200: {},
    2201: {},
    2202: {
        f: qu,
        r: 12
    },
    2203: {
        f: gt
    },
    2204: {},
    2205: {},
    2206: {},
    2207: {},
    2211: {
        f: wu
    },
    2212: {},
    2213: {},
    2214: {},
    2215: {},
    4097: {},
    4098: {},
    4099: {},
    4102: {},
    4103: {},
    4105: {},
    4106: {},
    4107: {},
    4108: {},
    4109: {},
    4116: {},
    4117: {},
    4118: {},
    4119: {},
    4120: {},
    4121: {},
    4122: {},
    4123: {},
    4124: {},
    4125: {},
    4126: {},
    4127: {},
    4128: {},
    4129: {},
    4130: {},
    4132: {},
    4133: {},
    4134: {
        f: tr
    },
    4135: {},
    4146: {},
    4147: {},
    4148: {},
    4149: {},
    4154: {},
    4156: {},
    4157: {},
    4158: {},
    4159: {},
    4160: {},
    4161: {},
    4163: {},
    4164: {
        f: gh
    },
    4165: {},
    4166: {},
    4168: {},
    4170: {},
    4171: {},
    4174: {},
    4175: {},
    4176: {},
    4177: {},
    4187: {},
    4188: {
        f: xh
    },
    4189: {},
    4191: {},
    4192: {},
    4193: {},
    4194: {},
    4195: {},
    4196: {},
    4197: {},
    4198: {},
    4199: {},
    4200: {},
    0: {
        f: Vi
    },
    1: {},
    2: {
        f: Ah
    },
    3: {
        f: Fh
    },
    4: {
        f: Sh
    },
    5: {
        f: Gi
    },
    7: {
        f: Dh
    },
    8: {},
    9: {
        f: s0
    },
    11: {},
    22: {
        f: tr
    },
    30: {
        f: Pu
    },
    31: {},
    32: {},
    33: {
        f: Yi
    },
    36: {},
    37: {
        f: Hi
    },
    50: {
        f: Oh
    },
    62: {},
    52: {},
    67: {},
    68: {
        f: tr
    },
    69: {},
    86: {},
    126: {},
    127: {
        f: Th
    },
    135: {},
    136: {},
    137: {},
    145: {},
    148: {},
    149: {},
    150: {},
    169: {},
    171: {},
    188: {},
    191: {},
    192: {},
    194: {},
    195: {},
    214: {
        f: Ih
    },
    223: {},
    234: {},
    354: {},
    421: {},
    518: {
        f: G0
    },
    521: {
        f: s0
    },
    536: {
        f: Ki
    },
    547: {
        f: $i
    },
    561: {},
    579: {},
    1030: {
        f: G0
    },
    1033: {
        f: s0
    },
    1091: {},
    2157: {},
    2163: {},
    2177: {},
    2240: {},
    2241: {},
    2242: {},
    2243: {},
    2244: {},
    2245: {},
    2246: {},
    2247: {},
    2248: {},
    2249: {},
    2250: {},
    2251: {},
    2262: {
        r: 12
    },
    29282: {}
};
function ne(e, t, r, a) {
    const n = t;
    if (!isNaN(n)) {
        const i = a || (r || []).length || 0;
        const s = e.next(4);
        s.write_shift(2, n);
        s.write_shift(2, i);
        if (i > 0 && yn(r)) {
            e.push(r);
        }
    }
}
function Cm(e, t, r, a) {
    const n = (r || []).length || 0;
    if (n <= 8224) {
        return ne(e, t, r, n);
    }
    const i = t;
    if (!isNaN(i)) {
        for(var s = r.parts || [], f = 0, c = 0, o = 0; o + (s[f] || 8224) <= 8224;){
            o += s[f] || 8224;
            f++;
        }
        let l = e.next(4);
        l.write_shift(2, i);
        l.write_shift(2, o);
        e.push(r.slice(c, c + o));
        for(c += o; c < n;){
            l = e.next(4);
            l.write_shift(2, 60);
            for(o = 0; o + (s[f] || 8224) <= 8224;){
                o += s[f] || 8224;
                f++;
            }
            l.write_shift(2, o);
            e.push(r.slice(c, c + o));
            c += o;
        }
    }
}
function Qa(e, t, r) {
    if (!e) {
        e = G(7);
    }
    e.write_shift(2, t);
    e.write_shift(2, r);
    e.write_shift(2, 0);
    e.write_shift(1, 0);
    return e;
}
function Dm(e, t, r, a) {
    const n = G(9);
    Qa(n, e, t);
    uf(r, a || "b", n);
    return n;
}
function Om(e, t, r) {
    const a = G(8 + 2 * r.length);
    Qa(a, e, t);
    a.write_shift(1, r.length);
    a.write_shift(r.length, r, "sbcs");
    if (a.l < a.length) {
        return a.slice(0, a.l);
    }
    return a;
}
function Im(e, t, r, a) {
    if (t.v != null) {
        switch(t.t){
            case "d":
            case "n":
                const n = t.t == "d" ? ir(Ve(t.v)) : t.v;
                if (n == (n | 0) && n >= 0 && n < 65536) {
                    ne(e, 2, Ch(r, a, n));
                } else {
                    ne(e, 3, yh(r, a, n));
                }
                return;
            case "b":
            case "e":
                ne(e, 5, Dm(r, a, t.v, t.t));
                return;
            case "s":
            case "str":
                ne(e, 4, Om(r, a, (t.v || "").slice(0, 255)));
                return;
        }
    }
    ne(e, 1, Qa(null, r, a));
}
function Rm(e, t, r, a) {
    const n = Array.isArray(t);
    const i = Ae(t["!ref"] || "A1");
    let s;
    let f = "";
    const c = [];
    if (i.e.c > 255 || i.e.r > 16383) {
        if (a.WTF) {
            throw new Error(`Range ${t["!ref"] || "A1"} exceeds format limit A1:IV16384`);
        }
        i.e.c = Math.min(i.e.c, 255);
        i.e.r = Math.min(i.e.c, 16383);
        s = encode_range(i);
    }
    for(let o = i.s.r; o <= i.e.r; ++o){
        f = encode_row(o);
        for(let l = i.s.c; l <= i.e.c; ++l){
            if (o === i.s.r) {
                c[l] = encode_col(l);
            }
            s = c[l] + f;
            const u = n ? (t[o] || [])[l] : t[s];
            if (u) {
                Im(e, u, o, l);
            }
        }
    }
}
function Nm(e, t) {
    const r = t || {};
    const a = Cr();
    let n = 0;
    for(let i = 0; i < e.SheetNames.length; ++i){
        if (e.SheetNames[i] == r.sheet) {
            n = i;
        }
    }
    if (n == 0 && r.sheet && e.SheetNames[0] != r.sheet) {
        throw new Error(`Sheet not found: ${r.sheet}`);
    }
    ne(a, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, Ln(e, 16, r));
    Rm(a, e.Sheets[e.SheetNames[n]], n, r);
    ne(a, 10);
    return a.end();
}
function bm(e, t, r) {
    ne(e, 49, Cu({
        sz: 12,
        name: "Arial"
    }, r));
}
function Pm(e, t, r) {
    if (t) {
        [
            [
                5,
                8
            ],
            [
                23,
                26
            ],
            [
                41,
                44
            ],
            [
                50,
                392
            ]
        ].forEach((a)=>{
            for(let n = a[0]; n <= a[1]; ++n){
                if (t[n] != null) {
                    ne(e, 1054, bu(n, t[n], r));
                }
            }
        });
    }
}
function Lm(e, t) {
    let r = G(19);
    r.write_shift(4, 2151);
    r.write_shift(4, 0);
    r.write_shift(4, 0);
    r.write_shift(2, 3);
    r.write_shift(1, 1);
    r.write_shift(4, 0);
    ne(e, 2151, r);
    r = G(39);
    r.write_shift(4, 2152);
    r.write_shift(4, 0);
    r.write_shift(4, 0);
    r.write_shift(2, 3);
    r.write_shift(1, 0);
    r.write_shift(4, 0);
    r.write_shift(2, 1);
    r.write_shift(4, 4);
    r.write_shift(2, 0);
    pf(Ae(t["!ref"] || "A1"), r);
    r.write_shift(4, 4);
    ne(e, 2152, r);
}
function Bm(e, t) {
    for(let r = 0; r < 16; ++r){
        ne(e, 224, Xi({
            numFmtId: 0,
            style: true
        }, 0, t));
    }
    t.cellXfs.forEach((a)=>{
        ne(e, 224, Xi(a, 0, t));
    });
}
function Mm(e, t) {
    for(let r = 0; r < t["!links"].length; ++r){
        const a = t["!links"][r];
        ne(e, 440, ch(a));
        if (a[1].Tooltip) {
            ne(e, 2048, lh(a));
        }
    }
    delete t["!links"];
}
function Um(e, t) {
    if (t) {
        let r = 0;
        t.forEach((a, n)=>{
            if (++r <= 256 && a) {
                ne(e, 125, ph(N0(n, a), n));
            }
        });
    }
}
function Wm(e, t, r, a, n) {
    const i = 16 + Dt(n.cellXfs, t, n);
    if (t.v == null && !t.bf) {
        ne(e, 513, Vt(r, a, i));
        return;
    }
    if (t.bf) {
        ne(e, 6, xv(t, r, a, n, i));
    } else {
        switch(t.t){
            case "d":
            case "n":
                const s = t.t == "d" ? ir(Ve(t.v)) : t.v;
                ne(e, 515, $u(r, a, s, i));
                break;
            case "b":
            case "e":
                ne(e, 517, Gu(r, a, t.v, i, n, t.t));
                break;
            case "s":
            case "str":
                if (n.bookSST) {
                    const f = Gn(n.Strings, t.v, n.revStrings);
                    ne(e, 253, Ou(r, a, f, i));
                } else {
                    ne(e, 516, Ru(r, a, (t.v || "").slice(0, 255), i, n));
                }
                break;
            default:
                ne(e, 513, Vt(r, a, i));
        }
    }
}
function Hm(e, t, r) {
    const a = Cr();
    const n = r.SheetNames[e];
    const i = r.Sheets[n] || {};
    const s = (r || {}).Workbook || {};
    const f = (s.Sheets || [])[e] || {};
    const c = Array.isArray(i);
    const o = t.biff == 8;
    let l;
    let u = "";
    const x = [];
    const d = Ae(i["!ref"] || "A1");
    const v = o ? 65536 : 16384;
    if (d.e.c > 255 || d.e.r >= v) {
        if (t.WTF) {
            throw new Error(`Range ${i["!ref"] || "A1"} exceeds format limit A1:IV16384`);
        }
        d.e.c = Math.min(d.e.c, 255);
        d.e.r = Math.min(d.e.c, v - 1);
    }
    ne(a, 2057, Ln(r, 16, t));
    ne(a, 13, Xr(1));
    ne(a, 12, Xr(100));
    ne(a, 15, Fr(true));
    ne(a, 17, Fr(false));
    ne(a, 16, Wt(0.001));
    ne(a, 95, Fr(true));
    ne(a, 42, Fr(false));
    ne(a, 43, Fr(false));
    ne(a, 130, Xr(1));
    ne(a, 128, Xu());
    ne(a, 131, Fr(false));
    ne(a, 132, Fr(false));
    if (o) {
        Um(a, i["!cols"]);
    }
    ne(a, 512, Lu(d, t));
    if (o) {
        i["!links"] = [];
    }
    for(let h = d.s.r; h <= d.e.r; ++h){
        u = encode_row(h);
        for(let p = d.s.c; p <= d.e.c; ++p){
            if (h === d.s.r) {
                x[p] = encode_col(p);
            }
            l = x[p] + u;
            const w = c ? (i[h] || [])[p] : i[l];
            if (w) {
                Wm(a, w, h, p, t);
                if (o && w.l) {
                    i["!links"].push([
                        l,
                        w.l
                    ]);
                }
            }
        }
    }
    const y = f.CodeName || f.name || n;
    if (o) {
        ne(a, 574, Fu((s.Views || [])[0]));
    }
    if (o && (i["!merges"] || []).length) {
        ne(a, 229, th(i["!merges"]));
    }
    if (o) {
        Mm(a, i);
    }
    ne(a, 442, hf(y));
    if (o) {
        Lm(a, i);
    }
    ne(a, 10);
    return a.end();
}
function Vm(e, t, r) {
    const a = Cr();
    const n = (e || {}).Workbook || {};
    const i = n.Sheets || [];
    const s = n.WBProps || {};
    const f = r.biff == 8;
    const c = r.biff == 5;
    ne(a, 2057, Ln(e, 5, r));
    if (r.bookType == "xla") {
        ne(a, 135);
    }
    ne(a, 225, f ? Xr(1200) : null);
    ne(a, 193, Gl(2));
    if (c) {
        ne(a, 191);
    }
    if (c) {
        ne(a, 192);
    }
    ne(a, 226);
    ne(a, 92, hu("SheetJS", r));
    ne(a, 66, Xr(f ? 1200 : 1252));
    if (f) {
        ne(a, 353, Xr(0));
    }
    if (f) {
        ne(a, 448);
    }
    ne(a, 317, _h(e.SheetNames.length));
    if (f && e.vbaraw) {
        ne(a, 211);
    }
    if (f && e.vbaraw) {
        const o = s.CodeName || "ThisWorkbook";
        ne(a, 442, hf(o));
    }
    ne(a, 156, Xr(17));
    ne(a, 25, Fr(false));
    ne(a, 18, Fr(false));
    ne(a, 19, Xr(0));
    if (f) {
        ne(a, 431, Fr(false));
    }
    if (f) {
        ne(a, 444, Xr(0));
    }
    ne(a, 61, Tu());
    ne(a, 64, Fr(false));
    ne(a, 141, Xr(0));
    ne(a, 34, Fr(kp(e) == "true"));
    ne(a, 14, Fr(true));
    if (f) {
        ne(a, 439, Fr(false));
    }
    ne(a, 218, Xr(0));
    bm(a, e, r);
    Pm(a, e.SSF, r);
    Bm(a, r);
    if (f) {
        ne(a, 352, Fr(false));
    }
    const l = a.end();
    const u = Cr();
    if (f) {
        ne(u, 140, hh());
    }
    if (f && r.Strings) {
        Cm(u, 252, mu(r.Strings));
    }
    ne(u, 10);
    const x = u.end();
    const d = Cr();
    let v = 0;
    let h = 0;
    for(h = 0; h < e.SheetNames.length; ++h){
        v += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[h].length;
    }
    let pos = l.length + v + x.length;
    for(h = 0; h < e.SheetNames.length; ++h){
        const w = i[h] || {};
        ne(d, 133, vu({
            pos,
            hs: w.Hidden || 0,
            dt: 0,
            name: e.SheetNames[h]
        }, r));
        pos += t[h].length;
    }
    const y = d.end();
    if (v != y.length) {
        throw new Error(`BS8 ${v} != ${y.length}`);
    }
    const g = [];
    if (l.length) {
        g.push(l);
    }
    if (y.length) {
        g.push(y);
    }
    if (x.length) {
        g.push(x);
    }
    return bconcat(g);
}
function Xm(e, t) {
    const r = t || {};
    const a = [];
    if (e && !e.SSF) {
        e.SSF = Me(_table);
    }
    if (e && e.SSF) {
        la();
        load_table(e.SSF);
        r.revssf = A0(e.SSF);
        r.revssf[e.SSF[65535]] = 0;
        r.ssf = e.SSF;
    }
    r.Strings = [];
    r.Strings.Count = 0;
    r.Strings.Unique = 0;
    jn(r);
    r.cellXfs = [];
    Dt(r.cellXfs, {}, {
        revssf: {
            General: 0
        }
    });
    if (!e.Props) {
        e.Props = {};
    }
    for(let n = 0; n < e.SheetNames.length; ++n){
        a[a.length] = Hm(n, r, e);
    }
    a.unshift(Vm(e, a, r));
    return bconcat(a);
}
function sc(e, t) {
    for(let r = 0; r <= e.SheetNames.length; ++r){
        const a = e.Sheets[e.SheetNames[r]];
        if (!(!a || !a["!ref"])) {
            const n = decode_range(a["!ref"]);
            if (n.e.c > 255 && typeof console !== "undefined" && console.error) {
                console.error(`Worksheet '${e.SheetNames[r]}' extends beyond column IV (255).  Data may be lost.`);
            }
        }
    }
    const i = t || {};
    switch(i.biff || 2){
        case 8:
        case 5:
            return Xm(e, t);
        case 4:
        case 3:
        case 2:
            return Nm(e, t);
    }
    throw new Error(`invalid type ${i.bookType} for BIFF`);
}
function ns(e, t) {
    const r = t || {};
    const a = r.dense ? [] : {};
    e = e.replace(/<!--.*?-->/g, "");
    const n = e.match(/<table/i);
    if (!n) {
        throw new Error("Invalid HTML: could not find <table>");
    }
    const i = e.match(/<\/table/i);
    let n_index = n.index;
    let f = i && i.index || e.length;
    const c = Co(e.slice(n_index, f), /(:?<tr[^>]*>)/i, "<tr>");
    let o = -1;
    let l = 0;
    let u = 0;
    let x = 0;
    const d = {
        s: {
            r: 10000000,
            c: 10000000
        },
        e: {
            r: 0,
            c: 0
        }
    };
    const v = [];
    for(n_index = 0; n_index < c.length; ++n_index){
        const h = c[n_index].trim();
        const p = h.slice(0, 3).toLowerCase();
        if (p == "<tr") {
            ++o;
            if (r.sheetRows && r.sheetRows <= o) {
                --o;
                break;
            }
            l = 0;
            continue;
        }
        if (!(p != "<td" && p != "<th")) {
            const w = h.split(/<\/t[dh]>/i);
            for(f = 0; f < w.length; ++f){
                const y = w[f].trim();
                if (y.match(/<t[dh]/i)) {
                    for(var g = y, D = 0; g.charAt(0) == "<" && (D = g.indexOf(">")) > -1;){
                        g = g.slice(D + 1);
                    }
                    for(let b = 0; b < v.length; ++b){
                        const N = v[b];
                        if (N.s.c == l && N.s.r < o && o <= N.e.r) {
                            l = N.e.c + 1;
                            b = -1;
                        }
                    }
                    const F = me(y.slice(0, y.indexOf(">")));
                    x = F.colspan ? +F.colspan : 1;
                    if ((u = +F.rowspan) > 1 || x > 1) {
                        v.push({
                            s: {
                                r: o,
                                c: l
                            },
                            e: {
                                r: o + (u || 1) - 1,
                                c: l + x - 1
                            }
                        });
                    }
                    const B = F.t || F["data-t"] || "";
                    if (!g.length) {
                        l += x;
                        continue;
                    }
                    g = Rs(g);
                    if (d.s.r > o) {
                        d.s.r = o;
                    }
                    if (d.e.r < o) {
                        d.e.r = o;
                    }
                    if (d.s.c > l) {
                        d.s.c = l;
                    }
                    if (d.e.c < l) {
                        d.e.c = l;
                    }
                    if (!g.length) {
                        l += x;
                        continue;
                    }
                    let I = {
                        t: "s",
                        v: g
                    };
                    r.raw || !g.trim().length || B == "s" || (g === "TRUE" ? I = {
                        t: "b",
                        v: true
                    } : g === "FALSE" ? I = {
                        t: "b",
                        v: false
                    } : isNaN(jr(g)) ? isNaN(fa(g).getDate()) || (I = {
                        t: "d",
                        v: Ve(g)
                    }, r.cellDates || (I = {
                        t: "n",
                        v: ir(I.v)
                    }), I.z = r.dateNF || _table[14]) : I = {
                        t: "n",
                        v: jr(g)
                    });
                    if (r.dense) {
                        if (!a[o]) {
                            a[o] = [];
                        }
                        a[o][l] = I;
                    } else {
                        a[encode_cell({
                            r: o,
                            c: l
                        })] = I;
                    }
                    l += x;
                }
            }
        }
    }
    a["!ref"] = encode_range(d);
    if (v.length) {
        a["!merges"] = v;
    }
    return a;
}
function fc(e, t, r, a) {
    const n = e["!merges"] || [];
    const i = [];
    for(let s = t.s.c; s <= t.e.c; ++s){
        let f = 0;
        let c = 0;
        for(let o = 0; o < n.length; ++o){
            if (!(n[o].s.r > r || n[o].s.c > s) && !(n[o].e.r < r || n[o].e.c < s)) {
                if (n[o].s.r < r || n[o].s.c < s) {
                    f = -1;
                    break;
                }
                f = n[o].e.r - n[o].s.r + 1;
                c = n[o].e.c - n[o].s.c + 1;
                break;
            }
        }
        if (!(f < 0)) {
            const l = encode_cell({
                r,
                c: s
            });
            const u = a.dense ? (e[r] || [])[s] : e[l];
            let x = u && u.v != null && (u.h || _n(u.w || (format_cell(u), u.w) || "")) || "";
            const d = {};
            if (f > 1) {
                d.rowspan = f;
            }
            if (c > 1) {
                d.colspan = c;
            }
            if (a.editable) {
                x = `<span contenteditable="true">${x}</span>`;
            } else if (u) {
                d["data-t"] = u && u.t || "z";
                if (u.v != null) {
                    d["data-v"] = u.v;
                }
                if (u.z != null) {
                    d["data-z"] = u.z;
                }
                if (u.l && (u.l.Target || "#").charAt(0) != "#") {
                    x = `<a href="${u.l.Target}">${x}</a>`;
                }
            }
            d.id = `${a.id || "sjs"}-${l}`;
            i.push(ae("td", x, d));
        }
    }
    const v = "<tr>";
    return `${v + i.join("")}</tr>`;
}
const cc = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>';
const oc = "</body></html>";
function Gm(e, t) {
    const r = e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);
    if (!r || r.length == 0) {
        throw new Error("Invalid HTML: could not find <table>");
    }
    if (r.length == 1) {
        return Ct(ns(r[0], t), t);
    }
    const a = book_new();
    r.forEach((n, i)=>{
        book_append_sheet(a, ns(n, t), `Sheet${i + 1}`);
    });
    return a;
}
function lc(e, t, r) {
    const a = [];
    return `${a.join("")}<table${r && r.id ? ` id="${r.id}"` : ""}>`;
}
function sheet_to_html(e, t) {
    const r = t || {};
    const a = r.header ?? cc;
    const n = r.footer ?? oc;
    const i = [
        a
    ];
    const s = decode_range(e["!ref"]);
    r.dense = Array.isArray(e);
    i.push(lc(e, s, r));
    for(let f = s.s.r; f <= s.e.r; ++f){
        i.push(fc(e, s, f, r));
    }
    i.push(`</table>${n}`);
    return i.join("");
}
function sheet_add_dom(e, t, r) {
    const a = r || {};
    let n = 0;
    let i = 0;
    if (a.origin != null) {
        if (typeof a.origin === "number") {
            n = a.origin;
        } else {
            const s = typeof a.origin === "string" ? decode_cell(a.origin) : a.origin;
            n = s.r;
            i = s.c;
        }
    }
    const f = t.getElementsByTagName("tr");
    const c = Math.min(a.sheetRows || 10000000, f.length);
    const o = {
        s: {
            r: 0,
            c: 0
        },
        e: {
            r: n,
            c: i
        }
    };
    if (e["!ref"]) {
        const l = decode_range(e["!ref"]);
        o.s.r = Math.min(o.s.r, l.s.r);
        o.s.c = Math.min(o.s.c, l.s.c);
        o.e.r = Math.max(o.e.r, l.e.r);
        o.e.c = Math.max(o.e.c, l.e.c);
        if (n == -1) {
            o.e.r = n = l.e.r + 1;
        }
    }
    const u = [];
    let x = 0;
    const d = e["!rows"] || (e["!rows"] = []);
    let v = 0;
    let h = 0;
    let p = 0;
    let w = 0;
    let y = 0;
    let g = 0;
    for(e["!cols"] || (e["!cols"] = []); v < f.length && h < c; ++v){
        const D = f[v];
        if (is(D)) {
            if (a.display) {
                continue;
            }
            d[h] = {
                hidden: true
            };
        }
        const b = D.children;
        for(p = w = 0; p < b.length; ++p){
            const N = b[p];
            if (!(a.display && is(N))) {
                const F = N.hasAttribute("data-v") ? N.getAttribute("data-v") : N.hasAttribute("v") ? N.getAttribute("v") : Rs(N.innerHTML);
                const B = N.getAttribute("data-z") || N.getAttribute("z");
                for(x = 0; x < u.length; ++x){
                    const I = u[x];
                    if (I.s.c == w + i && I.s.r < h + n && h + n <= I.e.r) {
                        w = I.e.c + 1 - i;
                        x = -1;
                    }
                }
                g = +N.getAttribute("colspan") || 1;
                if ((y = +N.getAttribute("rowspan") || 1) > 1 || g > 1) {
                    u.push({
                        s: {
                            r: h + n,
                            c: w + i
                        },
                        e: {
                            r: h + n + (y || 1) - 1,
                            c: w + i + (g || 1) - 1
                        }
                    });
                }
                let z = {
                    t: "s",
                    v: F
                };
                const X = N.getAttribute("data-t") || N.getAttribute("t") || "";
                F != null && (F.length == 0 ? z.t = X || "z" : a.raw || F.trim().length == 0 || X == "s" || (F === "TRUE" ? z = {
                    t: "b",
                    v: true
                } : F === "FALSE" ? z = {
                    t: "b",
                    v: false
                } : isNaN(jr(F)) ? isNaN(fa(F).getDate()) || (z = {
                    t: "d",
                    v: Ve(F)
                }, a.cellDates || (z = {
                    t: "n",
                    v: ir(z.v)
                }), z.z = a.dateNF || _table[14]) : z = {
                    t: "n",
                    v: jr(F)
                }));
                if (z.z === undefined && B != null) {
                    z.z = B;
                }
                let L = "";
                const J = N.getElementsByTagName("A");
                if (J && J.length) {
                    for(let le = 0; le < J.length && !(J[le].hasAttribute("href") && (L = J[le].getAttribute("href"), L.charAt(0) != "#")); ++le);
                }
                if (L && L.charAt(0) != "#") {
                    z.l = {
                        Target: L
                    };
                }
                if (a.dense) {
                    if (!e[h + n]) {
                        e[h + n] = [];
                    }
                    e[h + n][w + i] = z;
                } else {
                    e[encode_cell({
                        c: w + i,
                        r: h + n
                    })] = z;
                }
                if (o.e.c < w + i) {
                    o.e.c = w + i;
                }
                w += g;
            }
        }
        ++h;
    }
    if (u.length) {
        e["!merges"] = (e["!merges"] || []).concat(u);
    }
    o.e.r = Math.max(o.e.r, h - 1 + n);
    e["!ref"] = encode_range(o);
    if (h >= c) {
        e["!fullref"] = encode_range((o.e.r = f.length - v + h - 1 + n, o));
    }
    return e;
}
function table_to_sheet(e, t) {
    const r = t || {};
    const a = r.dense ? [] : {};
    return sheet_add_dom(a, e, t);
}
function table_to_book(e, t) {
    return Ct(table_to_sheet(e, t), t);
}
function is(e) {
    let t = "";
    const r = $m(e);
    if (r) {
        t = r(e).getPropertyValue("display");
    }
    if (!t) {
        t = e.style && e.style.display;
    }
    return t === "none";
}
function $m(e) {
    if (e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle === "function") {
        return e.ownerDocument.defaultView.getComputedStyle;
    }
    if (typeof getComputedStyle === "function") {
        return getComputedStyle;
    }
    return null;
}
function Km(e) {
    const t = e.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, (a, n)=>Array(parseInt(n, 10) + 1).join(" ")).replace(/<text:tab[^>]*\/>/g, "	").replace(/<text:line-break\/>/g, `
`);
    const r = Oe(t.replace(/<[^>]*>/g, ""));
    return [
        r
    ];
}
const ss = {
    day: [
        "d",
        "dd"
    ],
    month: [
        "m",
        "mm"
    ],
    year: [
        "y",
        "yy"
    ],
    hours: [
        "h",
        "hh"
    ],
    minutes: [
        "m",
        "mm"
    ],
    seconds: [
        "s",
        "ss"
    ],
    "am-pm": [
        "A/P",
        "AM/PM"
    ],
    "day-of-week": [
        "ddd",
        "dddd"
    ],
    era: [
        "e",
        "ee"
    ],
    quarter: [
        "\\Qm",
        'm\\"th quarter"'
    ]
};
function dc(e, t) {
    const r = t || {};
    let a = wn(e);
    const n = [];
    let i;
    let s;
    let f = {
        name: ""
    };
    let c = "";
    let o = 0;
    let l;
    let u;
    const x = {};
    const d = [];
    let v = r.dense ? [] : {};
    let h;
    let p;
    let w = {
        value: ""
    };
    let y = "";
    let g = 0;
    let D = [];
    let b = -1;
    let N = -1;
    const F = {
        s: {
            r: 1000000,
            c: 10000000
        },
        e: {
            r: 0,
            c: 0
        }
    };
    let level = 0;
    const I = {};
    let z = [];
    let X = {};
    let L = 0;
    let J = 0;
    let le = [];
    let ie = 1;
    let he = 1;
    const ce = [];
    const Pe = {
        Names: []
    };
    let V = {};
    let ve = [
        "",
        ""
    ];
    let ge = [];
    let C = {};
    let P = "";
    let O = 0;
    let R = false;
    let Y = false;
    let re = 0;
    La.lastIndex = 0;
    for(a = a.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, ""); h = La.exec(a);){
        switch(h[3] = h[3].replace(/_.*$/, "")){
            case "table":
            case "工作表":
                if (h[1] === "/") {
                    if (F.e.c >= F.s.c && F.e.r >= F.s.r) {
                        v["!ref"] = encode_range(F);
                    } else {
                        v["!ref"] = "A1:A1";
                    }
                    if (r.sheetRows > 0 && r.sheetRows <= F.e.r) {
                        v["!fullref"] = v["!ref"];
                        F.e.r = r.sheetRows - 1;
                        v["!ref"] = encode_range(F);
                    }
                    if (z.length) {
                        v["!merges"] = z;
                    }
                    if (le.length) {
                        v["!rows"] = le;
                    }
                    l.name = l.名称 || l.name;
                    if (typeof JSON !== "undefined") {
                        JSON.stringify(l);
                    }
                    d.push(l.name);
                    x[l.name] = v;
                    Y = false;
                } else if (h[0].charAt(h[0].length - 2) !== "/") {
                    l = me(h[0], false);
                    b = N = -1;
                    F.s.r = F.s.c = 10000000;
                    F.e.r = F.e.c = 0;
                    v = r.dense ? [] : {};
                    z = [];
                    le = [];
                    Y = true;
                }
                break;
            case "table-row-group":
                h[1] === "/" ? --level : ++level;
                break;
            case "table-row":
            case "行":
                if (h[1] === "/") {
                    b += ie;
                    ie = 1;
                    break;
                }
                u = me(h[0], false);
                if (u.行号) {
                    b = u.行号 - 1;
                } else if (b == -1) {
                    b = 0;
                }
                ie = +u["number-rows-repeated"] || 1;
                if (ie < 10) {
                    for(re = 0; re < ie; ++re){
                        if (level > 0) {
                            le[b + re] = {
                                level
                            };
                        }
                    }
                }
                N = -1;
                break;
            case "covered-table-cell":
                h[1] !== "/" && ++N;
                r.sheetStubs && (r.dense ? (v[b] || (v[b] = []), v[b][N] = {
                    t: "z"
                }) : v[encode_cell({
                    r: b,
                    c: N
                })] = {
                    t: "z"
                });
                y = "";
                D = [];
                break;
            case "table-cell":
            case "数据":
                if (h[0].charAt(h[0].length - 2) === "/") {
                    ++N;
                    w = me(h[0], false);
                    he = parseInt(w["number-columns-repeated"] || "1", 10);
                    p = {
                        t: "z",
                        v: null
                    };
                    if (w.formula && r.cellFormula != false) {
                        p.f = rs(Oe(w.formula));
                    }
                    if ((w.数据类型 || w["value-type"]) == "string") {
                        p.t = "s";
                        p.v = Oe(w["string-value"] || "");
                        if (r.dense) {
                            if (!v[b]) {
                                v[b] = [];
                            }
                            v[b][N] = p;
                        } else {
                            v[encode_cell({
                                r: b,
                                c: N
                            })] = p;
                        }
                    }
                    N += he - 1;
                } else if (h[1] !== "/") {
                    ++N;
                    y = "";
                    g = 0;
                    D = [];
                    he = 1;
                    const te = ie ? b + ie - 1 : b;
                    if (N > F.e.c) {
                        F.e.c = N;
                    }
                    if (N < F.s.c) {
                        F.s.c = N;
                    }
                    if (b < F.s.r) {
                        F.s.r = b;
                    }
                    if (te > F.e.r) {
                        F.e.r = te;
                    }
                    w = me(h[0], false);
                    ge = [];
                    C = {};
                    p = {
                        t: w.数据类型 || w["value-type"],
                        v: null
                    };
                    if (r.cellFormula) {
                        if (w.formula) {
                            w.formula = Oe(w.formula);
                        }
                        if (w["number-matrix-columns-spanned"] && w["number-matrix-rows-spanned"]) {
                            L = parseInt(w["number-matrix-rows-spanned"], 10) || 0;
                            J = parseInt(w["number-matrix-columns-spanned"], 10) || 0;
                            X = {
                                s: {
                                    r: b,
                                    c: N
                                },
                                e: {
                                    r: b + L - 1,
                                    c: N + J - 1
                                }
                            };
                            p.F = encode_range(X);
                            ce.push([
                                X,
                                p.F
                            ]);
                        }
                        if (w.formula) {
                            p.f = rs(w.formula);
                        } else {
                            for(re = 0; re < ce.length; ++re){
                                if (b >= ce[re][0].s.r && b <= ce[re][0].e.r && N >= ce[re][0].s.c && N <= ce[re][0].e.c) {
                                    p.F = ce[re][1];
                                }
                            }
                        }
                    }
                    if (w["number-columns-spanned"] || w["number-rows-spanned"]) {
                        L = parseInt(w["number-rows-spanned"], 10) || 0;
                        J = parseInt(w["number-columns-spanned"], 10) || 0;
                        X = {
                            s: {
                                r: b,
                                c: N
                            },
                            e: {
                                r: b + L - 1,
                                c: N + J - 1
                            }
                        };
                        z.push(X);
                    }
                    if (w["number-columns-repeated"]) {
                        he = parseInt(w["number-columns-repeated"], 10);
                    }
                    switch(p.t){
                        case "boolean":
                            p.t = "b";
                            p.v = We(w["boolean-value"]);
                            break;
                        case "float":
                            p.t = "n";
                            p.v = parseFloat(w.value);
                            break;
                        case "percentage":
                            p.t = "n";
                            p.v = parseFloat(w.value);
                            break;
                        case "currency":
                            p.t = "n";
                            p.v = parseFloat(w.value);
                            break;
                        case "date":
                            p.t = "d";
                            p.v = Ve(w["date-value"]);
                            if (!r.cellDates) {
                                p.t = "n";
                                p.v = ir(p.v);
                            }
                            p.z = "m/d/yy";
                            break;
                        case "time":
                            p.t = "n";
                            p.v = Fo(w["time-value"]) / 86400;
                            if (r.cellDates) {
                                p.t = "d";
                                p.v = C0(p.v);
                            }
                            p.z = "HH:MM:SS";
                            break;
                        case "number":
                            p.t = "n";
                            p.v = parseFloat(w.数据数值);
                            break;
                        default:
                            if (p.t === "string" || p.t === "text" || !p.t) {
                                p.t = "s";
                                if (w["string-value"] != null) {
                                    y = Oe(w["string-value"]);
                                    D = [];
                                }
                            } else {
                                throw new Error(`Unsupported value type ${p.t}`);
                            }
                    }
                } else {
                    R = false;
                    if (p.t === "s") {
                        p.v = y || "";
                        if (D.length) {
                            p.R = D;
                        }
                        R = g == 0;
                    }
                    if (V.Target) {
                        p.l = V;
                    }
                    if (ge.length > 0) {
                        p.c = ge;
                        ge = [];
                    }
                    if (y && r.cellText !== false) {
                        p.w = y;
                    }
                    if (R) {
                        p.t = "z";
                        delete p.v;
                    }
                    if ((!R || r.sheetStubs) && !(r.sheetRows && r.sheetRows <= b)) {
                        for(let Q = 0; Q < ie; ++Q){
                            he = parseInt(w["number-columns-repeated"] || "1", 10);
                            if (r.dense) {
                                if (!v[b + Q]) {
                                    v[b + Q] = [];
                                }
                                for(v[b + Q][N] = Q == 0 ? p : Me(p); --he > 0;){
                                    v[b + Q][N + he] = Me(p);
                                }
                            } else {
                                for(v[encode_cell({
                                    r: b + Q,
                                    c: N
                                })] = p; --he > 0;){
                                    v[encode_cell({
                                        r: b + Q,
                                        c: N + he
                                    })] = Me(p);
                                }
                            }
                            if (F.e.c <= N) {
                                F.e.c = N;
                            }
                        }
                    }
                    he = parseInt(w["number-columns-repeated"] || "1", 10);
                    N += he - 1;
                    he = 0;
                    p = {};
                    y = "";
                    D = [];
                }
                V = {};
                break;
            case "document":
            case "document-content":
            case "电子表格文档":
            case "spreadsheet":
            case "主体":
            case "scripts":
            case "styles":
            case "font-face-decls":
            case "master-styles":
                if (h[1] === "/") {
                    if ((i = n.pop())[0] !== h[3]) {
                        throw `Bad state: ${i}`;
                    }
                } else {
                    if (h[0].charAt(h[0].length - 2) !== "/") {
                        n.push([
                            h[3],
                            true
                        ]);
                    }
                }
                break;
            case "annotation":
                if (h[1] === "/") {
                    if ((i = n.pop())[0] !== h[3]) {
                        throw `Bad state: ${i}`;
                    }
                    C.t = y;
                    if (D.length) {
                        C.R = D;
                    }
                    C.a = P;
                    ge.push(C);
                } else {
                    if (h[0].charAt(h[0].length - 2) !== "/") {
                        n.push([
                            h[3],
                            false
                        ]);
                    }
                }
                P = "";
                O = 0;
                y = "";
                g = 0;
                D = [];
                break;
            case "creator":
                if (h[1] === "/") {
                    P = a.slice(O, h.index);
                } else {
                    O = h.index + h[0].length;
                }
                break;
            case "meta":
            case "元数据":
            case "settings":
            case "config-item-set":
            case "config-item-map-indexed":
            case "config-item-map-entry":
            case "config-item-map-named":
            case "shapes":
            case "frame":
            case "text-box":
            case "image":
            case "data-pilot-tables":
            case "list-style":
            case "form":
            case "dde-links":
            case "event-listeners":
            case "chart":
                if (h[1] === "/") {
                    if ((i = n.pop())[0] !== h[3]) {
                        throw `Bad state: ${i}`;
                    }
                } else {
                    if (h[0].charAt(h[0].length - 2) !== "/") {
                        n.push([
                            h[3],
                            false
                        ]);
                    }
                }
                y = "";
                g = 0;
                D = [];
                break;
            case "scientific-number":
                break;
            case "currency-symbol":
                break;
            case "currency-style":
                break;
            case "number-style":
            case "percentage-style":
            case "date-style":
            case "time-style":
                if (h[1] === "/") {
                    I[f.name] = c;
                    if ((i = n.pop())[0] !== h[3]) {
                        throw `Bad state: ${i}`;
                    }
                } else {
                    if (h[0].charAt(h[0].length - 2) !== "/") {
                        c = "";
                        f = me(h[0], false);
                        n.push([
                            h[3],
                            true
                        ]);
                    }
                }
                break;
            case "script":
                break;
            case "libraries":
                break;
            case "automatic-styles":
                break;
            case "default-style":
            case "page-layout":
                break;
            case "style":
                break;
            case "map":
                break;
            case "font-face":
                break;
            case "paragraph-properties":
                break;
            case "table-properties":
                break;
            case "table-column-properties":
                break;
            case "table-row-properties":
                break;
            case "table-cell-properties":
                break;
            case "number":
                switch(n[n.length - 1][0]){
                    case "time-style":
                    case "date-style":
                        s = me(h[0], false);
                        c += ss[h[3]][s.style === "long" ? 1 : 0];
                        break;
                }
                break;
            case "fraction":
                break;
            case "day":
            case "month":
            case "year":
            case "era":
            case "day-of-week":
            case "week-of-year":
            case "quarter":
            case "hours":
            case "minutes":
            case "seconds":
            case "am-pm":
                switch(n[n.length - 1][0]){
                    case "time-style":
                    case "date-style":
                        s = me(h[0], false);
                        c += ss[h[3]][s.style === "long" ? 1 : 0];
                        break;
                }
                break;
            case "boolean-style":
                break;
            case "boolean":
                break;
            case "text-style":
                break;
            case "text":
                if (h[0].slice(-2) === "/>") {
                    break;
                }
                if (h[1] === "/") {
                    switch(n[n.length - 1][0]){
                        case "number-style":
                        case "date-style":
                        case "time-style":
                            c += a.slice(o, h.index);
                            break;
                    }
                } else {
                    o = h.index + h[0].length;
                }
                break;
            case "named-range":
                s = me(h[0], false);
                ve = z0(s["cell-range-address"]);
                const Z = {
                    Name: s.name,
                    Ref: `${ve[0]}!${ve[1]}`
                };
                if (Y) {
                    Z.Sheet = d.length;
                }
                Pe.Names.push(Z);
                break;
            case "text-content":
                break;
            case "text-properties":
                break;
            case "embedded-text":
                break;
            case "body":
            case "电子表格":
                break;
            case "forms":
                break;
            case "table-column":
                break;
            case "table-header-rows":
                break;
            case "table-rows":
                break;
            case "table-column-group":
                break;
            case "table-header-columns":
                break;
            case "table-columns":
                break;
            case "null-date":
                break;
            case "graphic-properties":
                break;
            case "calculation-settings":
                break;
            case "named-expressions":
                break;
            case "label-range":
                break;
            case "label-ranges":
                break;
            case "named-expression":
                break;
            case "sort":
                break;
            case "sort-by":
                break;
            case "sort-groups":
                break;
            case "tab":
                break;
            case "line-break":
                break;
            case "span":
                break;
            case "p":
            case "文本串":
                if ([
                    "master-styles"
                ].indexOf(n[n.length - 1][0]) > -1) {
                    break;
                }
                if (h[1] === "/" && (!w || !w["string-value"])) {
                    const Ee = Km(a.slice(g, h.index));
                    y = (y.length > 0 ? y + `
` : "") + Ee[0];
                } else {
                    me(h[0], false);
                    g = h.index + h[0].length;
                }
                break;
            case "s":
                break;
            case "database-range":
                if (h[1] === "/") {
                    break;
                }
                try {
                    ve = z0(me(h[0])["target-range-address"]);
                    x[ve[0]]["!autofilter"] = {
                        ref: ve[1]
                    };
                } catch  {}
                break;
            case "date":
                break;
            case "object":
                break;
            case "title":
            case "标题":
                break;
            case "desc":
                break;
            case "binary-data":
                break;
            case "table-source":
                break;
            case "scenario":
                break;
            case "iteration":
                break;
            case "content-validations":
                break;
            case "content-validation":
                break;
            case "help-message":
                break;
            case "error-message":
                break;
            case "database-ranges":
                break;
            case "filter":
                break;
            case "filter-and":
                break;
            case "filter-or":
                break;
            case "filter-condition":
                break;
            case "list-level-style-bullet":
                break;
            case "list-level-style-number":
                break;
            case "list-level-properties":
                break;
            case "sender-firstname":
            case "sender-lastname":
            case "sender-initials":
            case "sender-title":
            case "sender-position":
            case "sender-email":
            case "sender-phone-private":
            case "sender-fax":
            case "sender-company":
            case "sender-phone-work":
            case "sender-street":
            case "sender-city":
            case "sender-postal-code":
            case "sender-country":
            case "sender-state-or-province":
            case "author-name":
            case "author-initials":
            case "chapter":
            case "file-name":
            case "template-name":
            case "sheet-name":
                break;
            case "event-listener":
                break;
            case "initial-creator":
            case "creation-date":
            case "print-date":
            case "generator":
            case "document-statistic":
            case "user-defined":
            case "editing-duration":
            case "editing-cycles":
                break;
            case "config-item":
                break;
            case "page-number":
                break;
            case "page-count":
                break;
            case "time":
                break;
            case "cell-range-source":
                break;
            case "detective":
                break;
            case "operation":
                break;
            case "highlighted-range":
                break;
            case "data-pilot-table":
            case "source-cell-range":
            case "source-service":
            case "data-pilot-field":
            case "data-pilot-level":
            case "data-pilot-subtotals":
            case "data-pilot-subtotal":
            case "data-pilot-members":
            case "data-pilot-member":
            case "data-pilot-display-info":
            case "data-pilot-sort-info":
            case "data-pilot-layout-info":
            case "data-pilot-field-reference":
            case "data-pilot-groups":
            case "data-pilot-group":
            case "data-pilot-group-member":
                break;
            case "rect":
                break;
            case "dde-connection-decls":
            case "dde-connection-decl":
            case "dde-link":
            case "dde-source":
                break;
            case "properties":
                break;
            case "property":
                break;
            case "a":
                if (h[1] !== "/") {
                    V = me(h[0], false);
                    if (!V.href) {
                        break;
                    }
                    V.Target = Oe(V.href);
                    delete V.href;
                    if (V.Target.charAt(0) == "#" && V.Target.indexOf(".") > -1) {
                        ve = z0(V.Target.slice(1));
                        V.Target = `#${ve[0]}!${ve[1]}`;
                    } else if (V.Target.match(/^\.\.[\\\/]/)) {
                        V.Target = V.Target.slice(3);
                    }
                }
                break;
            case "table-protection":
                break;
            case "data-pilot-grand-total":
                break;
            case "office-document-common-attrs":
                break;
            default:
                switch(h[2]){
                    case "dc:":
                    case "calcext:":
                    case "loext:":
                    case "ooo:":
                    case "chartooo:":
                    case "draw:":
                    case "style:":
                    case "chart:":
                    case "form:":
                    case "uof:":
                    case "表:":
                    case "字:":
                        break;
                    default:
                        if (r.WTF) {
                            throw new Error(h);
                        }
                }
        }
    }
    const A = {
        Sheets: x,
        SheetNames: d,
        Workbook: Pe
    };
    r.bookSheets && delete A.Sheets;
    return A;
}
function fs(e, t) {
    t = t || {};
    if (Vr(e, "META-INF/manifest.xml")) {
        Fl(rr(e, "META-INF/manifest.xml"), t);
    }
    const r = Rr(e, "content.xml");
    if (!r) {
        throw new Error("Missing content.xml in ODS / UOF file");
    }
    const a = dc(Le(r), t);
    if (Vr(e, "meta.xml")) {
        a.Props = qs(rr(e, "meta.xml"));
    }
    return a;
}
function cs(e, t) {
    return dc(e, t);
}
const Ym = (()=>{
    const e = [
        "<office:master-styles>",
        '<style:master-page style:name="mp1" style:page-layout-name="mp1">',
        "<style:header/>",
        '<style:header-left style:display="false"/>',
        "<style:footer/>",
        '<style:footer-left style:display="false"/>',
        "</style:master-page>",
        "</office:master-styles>"
    ].join("");
    const t = `<office:document-styles ${Pa({
        "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
        "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
        "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
        "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
        "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
        "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "xmlns:dc": "http://purl.org/dc/elements/1.1/",
        "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
        "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
        "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
        "office:version": "1.2"
    })}>${e}</office:document-styles>`;
    return ()=>Qe + t;
})();
const os = (()=>{
    const e = (i)=>be(i).replace(/  +/g, (s)=>`<text:s text:c="${s.length}"/>`).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
    const t = `          <table:table-cell />
`;
    const r = `          <table:covered-table-cell/>
`;
    const a = (i, s, f)=>{
        const c = [];
        c.push(`      <table:table table:name="${be(s.SheetNames[f])}${`" table:style-name="ta1">
`}`);
        let o = 0;
        let l = 0;
        const u = decode_range(i["!ref"] || "A1");
        const x = i["!merges"] || [];
        let d = 0;
        const v = Array.isArray(i);
        if (i["!cols"]) {
            for(l = 0; l <= u.e.c; ++l){
                c.push(`        <table:table-column${i["!cols"][l] ? ` table:style-name="co${i["!cols"][l].ods}"` : ""}${`></table:table-column>
`}`);
            }
        }
        let h = "";
        const p = i["!rows"] || [];
        for(o = 0; o < u.s.r; ++o){
            h = p[o] ? ` table:style-name="ro${p[o].ods}"` : "";
            c.push(`        <table:table-row${h}${`></table:table-row>
`}`);
        }
        for(; o <= u.e.r; ++o){
            h = p[o] ? ` table:style-name="ro${p[o].ods}"` : "";
            c.push(`        <table:table-row${h}${`>
`}`);
            for(l = 0; l < u.s.c; ++l){
                c.push(t);
            }
            for(; l <= u.e.c; ++l){
                let w = false;
                const y = {};
                let g = "";
                for(d = 0; d != x.length; ++d){
                    if (!(x[d].s.c > l) && !(x[d].s.r > o) && !(x[d].e.c < l) && !(x[d].e.r < o)) {
                        if (x[d].s.c != l || x[d].s.r != o) {
                            w = true;
                        }
                        y["table:number-columns-spanned"] = x[d].e.c - x[d].s.c + 1;
                        y["table:number-rows-spanned"] = x[d].e.r - x[d].s.r + 1;
                        break;
                    }
                }
                if (w) {
                    c.push(r);
                    continue;
                }
                const D = encode_cell({
                    r: o,
                    c: l
                });
                const b = v ? (i[o] || [])[l] : i[D];
                if (b && b.f && (y["table:formula"] = be(_v(b.f)), b.F && b.F.slice(0, D.length) == D)) {
                    const N = decode_range(b.F);
                    y["table:number-matrix-columns-spanned"] = N.e.c - N.s.c + 1;
                    y["table:number-matrix-rows-spanned"] = N.e.r - N.s.r + 1;
                }
                if (!b) {
                    c.push(t);
                    continue;
                }
                switch(b.t){
                    case "b":
                        g = b.v ? "TRUE" : "FALSE";
                        y["office:value-type"] = "boolean";
                        y["office:boolean-value"] = b.v ? "true" : "false";
                        break;
                    case "n":
                        g = b.w || String(b.v || 0);
                        y["office:value-type"] = "float";
                        y["office:value"] = b.v || 0;
                        break;
                    case "s":
                    case "str":
                        g = b.v ?? "";
                        y["office:value-type"] = "string";
                        break;
                    case "d":
                        g = b.w || Ve(b.v).toISOString();
                        y["office:value-type"] = "date";
                        y["office:date-value"] = Ve(b.v).toISOString();
                        y["table:style-name"] = "ce1";
                        break;
                    default:
                        c.push(t);
                        continue;
                }
                let F = e(g);
                if (b.l && b.l.Target) {
                    let B = b.l.Target;
                    B = B.charAt(0) == "#" ? `#${wv(B.slice(1))}` : B;
                    if (B.charAt(0) != "#" && !B.match(/^\w+:/)) {
                        B = `../${B}`;
                    }
                    F = ae("text:a", F, {
                        "xlink:href": B.replace(/&/g, "&amp;")
                    });
                }
                c.push(`          ${ae("table:table-cell", ae("text:p", F, {}), y)}${`
`}`);
            }
            c.push(`        </table:table-row>
`);
        }
        c.push(`      </table:table>
`);
        return c.join("");
    };
    const n = (i, s)=>{
        i.push(` <office:automatic-styles>
`);
        i.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`);
        i.push(`   <number:month number:style="long"/>
`);
        i.push(`   <number:text>/</number:text>
`);
        i.push(`   <number:day number:style="long"/>
`);
        i.push(`   <number:text>/</number:text>
`);
        i.push(`   <number:year/>
`);
        i.push(`  </number:date-style>
`);
        let f = 0;
        s.SheetNames.map((o)=>s.Sheets[o]).forEach((o)=>{
            if (o && o["!cols"]) {
                for(let l = 0; l < o["!cols"].length; ++l){
                    if (o["!cols"][l]) {
                        const u = o["!cols"][l];
                        if (u.width == null && u.wpx == null && u.wch == null) {
                            continue;
                        }
                        St(u);
                        u.ods = f;
                        const x = `${o["!cols"][l].wpx}px`;
                        i.push(`  <style:style style:name="co${f}${`" style:family="table-column">
`}`);
                        i.push(`   <style:table-column-properties fo:break-before="auto" style:column-width="${x}${`"/>
`}`);
                        i.push(`  </style:style>
`);
                        ++f;
                    }
                }
            }
        });
        let c = 0;
        s.SheetNames.map((o)=>s.Sheets[o]).forEach((o)=>{
            if (o && o["!rows"]) {
                for(let l = 0; l < o["!rows"].length; ++l){
                    if (o["!rows"][l]) {
                        o["!rows"][l].ods = c;
                        const u = `${o["!rows"][l].hpx}px`;
                        i.push(`  <style:style style:name="ro${c}${`" style:family="table-row">
`}`);
                        i.push(`   <style:table-row-properties fo:break-before="auto" style:row-height="${u}${`"/>
`}`);
                        i.push(`  </style:style>
`);
                        ++c;
                    }
                }
            }
        });
        i.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`);
        i.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`);
        i.push(`  </style:style>
`);
        i.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`);
        i.push(` </office:automatic-styles>
`);
    };
    return (s, f)=>{
        const c = [
            Qe
        ];
        const o = Pa({
            "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
            "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
            "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
            "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
            "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
            "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            "xmlns:dc": "http://purl.org/dc/elements/1.1/",
            "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
            "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
            "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
            "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
            "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
            "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
            "xmlns:math": "http://www.w3.org/1998/Math/MathML",
            "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
            "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
            "xmlns:ooo": "http://openoffice.org/2004/office",
            "xmlns:ooow": "http://openoffice.org/2004/writer",
            "xmlns:oooc": "http://openoffice.org/2004/calc",
            "xmlns:dom": "http://www.w3.org/2001/xml-events",
            "xmlns:xforms": "http://www.w3.org/2002/xforms",
            "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
            "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
            "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
            "xmlns:rpt": "http://openoffice.org/2005/report",
            "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
            "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
            "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
            "xmlns:tableooo": "http://openoffice.org/2009/table",
            "xmlns:drawooo": "http://openoffice.org/2010/draw",
            "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
            "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
            "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
            "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
            "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
            "office:version": "1.2"
        });
        const l = Pa({
            "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
            "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
        });
        if (f.bookType == "fods") {
            c.push(`<office:document${o}${l}${`>
`}`);
            c.push(Zs().replace(/office:document-meta/g, "office:meta"));
        } else {
            c.push(`<office:document-content${o}${`>
`}`);
        }
        n(c, s);
        c.push(`  <office:body>
`);
        c.push(`    <office:spreadsheet>
`);
        for(let u = 0; u != s.SheetNames.length; ++u){
            c.push(a(s.Sheets[s.SheetNames[u]], s, u));
        }
        c.push(`    </office:spreadsheet>
`);
        c.push(`  </office:body>
`);
        if (f.bookType == "fods") {
            c.push("</office:document>");
        } else {
            c.push("</office:document-content>");
        }
        return c.join("");
    };
})();
function vc(e, t) {
    if (t.bookType == "fods") {
        return os(e, t);
    }
    const r = pn();
    let a = "";
    const n = [];
    const i = [];
    a = "mimetype";
    ke(r, a, "application/vnd.oasis.opendocument.spreadsheet");
    a = "content.xml";
    ke(r, a, os(e, t));
    n.push([
        a,
        "text/xml"
    ]);
    i.push([
        a,
        "ContentFile"
    ]);
    a = "styles.xml";
    ke(r, a, Ym(e, t));
    n.push([
        a,
        "text/xml"
    ]);
    i.push([
        a,
        "StylesFile"
    ]);
    a = "meta.xml";
    ke(r, a, Qe + Zs());
    n.push([
        a,
        "text/xml"
    ]);
    i.push([
        a,
        "MetadataFile"
    ]);
    a = "manifest.rdf";
    ke(r, a, Cl(i));
    n.push([
        a,
        "application/rdf+xml"
    ]);
    a = "META-INF/manifest.xml";
    ke(r, a, yl(n));
    return r;
}
function Xt(e) {
    return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function on(data) {
    if (typeof TextDecoder !== "undefined") {
        return new TextDecoder().decode(data);
    }
    return Le(At(data));
}
function jm(e) {
    if (typeof TextEncoder !== "undefined") {
        return new TextEncoder().encode(e);
    }
    return Ir(tt(e));
}
function Jm(data, t) {
    e: for(let r = 0; r <= data.length - t.length; ++r){
        for(let a = 0; a < t.length; ++a){
            if (data[r + a] != t[a]) {
                continue e;
            }
        }
        return true;
    }
    return false;
}
function yt(e) {
    const t = e.reduce((acc, item)=>acc + item.length, 0);
    const r = new Uint8Array(t);
    let a = 0;
    e.forEach((n)=>{
        r.set(n, a);
        a += n.length;
    });
    return r;
}
function ls(e) {
    e -= e >> 1 & 1431655765;
    e = (e & 858993459) + (e >> 2 & 858993459);
    return (e + (e >> 4) & 252645135) * 16843009 >>> 24;
}
function Zm(e, t) {
    const r = (e[t + 15] & 127) << 7 | e[t + 14] >> 1;
    let a = e[t + 14] & 1;
    for(let n = t + 13; n >= t; --n){
        a = a * 256 + e[n];
    }
    return (e[t + 15] & 128 ? -a : a) * 10 ** (r - 6176);
}
function qm(e, t, r) {
    const a = Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 20;
    let n = r / 10 ** (a - 6176);
    e[t + 15] |= a >> 7;
    e[t + 14] |= (a & 127) << 1;
    for(let i = 0; n >= 1; ++i, n /= 256){
        e[t + i] = n & 255;
    }
    e[t + 15] |= r >= 0 ? 0 : 128;
}
function Xa(e, t) {
    let r = t ? t[0] : 0;
    let a = e[r] & 127;
    e: if (e[r++] >= 128 && (a |= (e[r] & 127) << 7, e[r++] < 128 || (a |= (e[r] & 127) << 14, e[r++] < 128) || (a |= (e[r] & 127) << 21, e[r++] < 128) || (a += (e[r] & 127) * 2 ** 28, ++r, e[r++] < 128) || (a += (e[r] & 127) * 2 ** 35, ++r, e[r++] < 128) || (a += (e[r] & 127) * 2 ** 42, ++r, e[r++] < 128))) {
        break e;
    }
    if (t) {
        t[0] = r;
    }
    return a;
}
function Re(e) {
    const t = new Uint8Array(7);
    t[0] = e & 127;
    let r = 1;
    e: if (e > 127) {
        t[r - 1] |= 128;
        t[r] = e >> 7 & 127;
        ++r;
        if (e <= 16383 || (t[r - 1] |= 128, t[r] = e >> 14 & 127, ++r, e <= 2097151) || (t[r - 1] |= 128, t[r] = e >> 21 & 127, ++r, e <= 268435455) || (t[r - 1] |= 128, t[r] = e / 256 >>> 21 & 127, ++r, e <= 34359738367) || (t[r - 1] |= 128, t[r] = e / 65536 >>> 21 & 127, ++r, e <= 4398046511103)) {
            break e;
        }
        t[r - 1] |= 128;
        t[r] = e / 16777216 >>> 21 & 127;
        ++r;
    }
    return t.slice(0, r);
}
function Ye(data) {
    let t = 0;
    let r = data[t] & 127;
    e: if (data[t++] >= 128) {
        r |= (data[t] & 127) << 7;
        if (data[t++] < 128 || (r |= (data[t] & 127) << 14, data[t++] < 128) || (r |= (data[t] & 127) << 21, data[t++] < 128)) {
            break e;
        }
        r |= (data[t] & 127) << 28;
    }
    return r;
}
function Ie(e) {
    const t = [];
    for(const r = [
        0
    ]; r[0] < e.length;){
        const a = r[0];
        let n = Xa(e, r);
        const i = n & 7;
        n = Math.floor(n / 8);
        let s = 0;
        let f;
        if (n == 0) {
            break;
        }
        switch(i){
            case 0:
                {
                    const c = r[0];
                    while(e[r[0]++] >= 128);
                    f = e.slice(c, r[0]);
                }
                break;
            case 5:
                s = 4;
                f = e.slice(r[0], r[0] + s);
                r[0] += s;
                break;
            case 1:
                s = 8;
                f = e.slice(r[0], r[0] + s);
                r[0] += s;
                break;
            case 2:
                s = Xa(e, r);
                f = e.slice(r[0], r[0] + s);
                r[0] += s;
                break;
            default:
                throw new Error(`PB Type ${i} for Field ${n} at offset ${a}`);
        }
        const o = {
            data: f,
            type: i
        };
        if (t[n] == null) {
            t[n] = [
                o
            ];
        } else {
            t[n].push(o);
        }
    }
    return t;
}
function lr(e) {
    const t = [];
    e.forEach((r, a)=>{
        r.forEach((n)=>{
            if (n.data) {
                t.push(Re(a * 8 + n.type));
                if (n.type == 2) {
                    t.push(Re(n.data.length));
                }
                t.push(n.data);
            }
        });
    });
    return yt(t);
}
function Kn(e, t) {
    return e?.map((r)=>t(r.data)) || [];
}
function Wr(e) {
    let t;
    const r = [];
    for(var a = [
        0
    ]; a[0] < e.length;){
        const n = Xa(e, a);
        const i = Ie(e.slice(a[0], a[0] + n));
        a[0] += n;
        var s = {
            id: Ye(i[1][0].data),
            messages: []
        };
        i[2].forEach((f)=>{
            const meta = Ie(f.data);
            const o = Ye(meta[3][0].data);
            s.messages.push({
                meta,
                data: e.slice(a[0], a[0] + o)
            });
            a[0] += o;
        });
        if ((t = i[3]) != null && t[0]) {
            s.merge = Ye(i[3][0].data) >>> 0 > 0;
        }
        r.push(s);
    }
    return r;
}
function qt(e) {
    const t = [];
    e.forEach((r)=>{
        const a = [];
        a[1] = [
            {
                data: Re(r.id),
                type: 0
            }
        ];
        a[2] = [];
        if (r.merge != null) {
            a[3] = [
                {
                    data: Re(+!!r.merge),
                    type: 0
                }
            ];
        }
        const n = [];
        r.messages.forEach((s)=>{
            n.push(s.data);
            s.meta[3] = [
                {
                    type: 0,
                    data: Re(s.data.length)
                }
            ];
            a[2].push({
                data: lr(s.meta),
                type: 2
            });
        });
        const i = lr(a);
        t.push(Re(i.length));
        t.push(i);
        n.forEach((s)=>t.push(s));
    });
    return yt(t);
}
function Qm(e, t) {
    if (e != 0) {
        throw new Error(`Unexpected Snappy chunk type ${e}`);
    }
    for(var r = [
        0
    ], a = Xa(t, r), n = []; r[0] < t.length;){
        const i = t[r[0]] & 3;
        if (i == 0) {
            let s = t[r[0]++] >> 2;
            if (s < 60) {
                ++s;
            } else {
                const f = s - 59;
                s = t[r[0]];
                if (f > 1) {
                    s |= t[r[0] + 1] << 8;
                }
                if (f > 2) {
                    s |= t[r[0] + 2] << 16;
                }
                if (f > 3) {
                    s |= t[r[0] + 3] << 24;
                }
                s >>>= 0;
                s++;
                r[0] += f;
            }
            n.push(t.slice(r[0], r[0] + s));
            r[0] += s;
            continue;
        } else {
            let c = 0;
            let o = 0;
            if (i == 1) {
                o = (t[r[0]] >> 2 & 7) + 4;
                c = (t[r[0]++] & 224) << 3;
                c |= t[r[0]++];
            } else {
                o = (t[r[0]++] >> 2) + 1;
                if (i == 2) {
                    c = t[r[0]] | t[r[0] + 1] << 8;
                    r[0] += 2;
                } else {
                    c = (t[r[0]] | t[r[0] + 1] << 8 | t[r[0] + 2] << 16 | t[r[0] + 3] << 24) >>> 0;
                    r[0] += 4;
                }
            }
            n = [
                yt(n)
            ];
            if (c == 0) {
                throw new Error("Invalid offset 0");
            }
            if (c > n[0].length) {
                throw new Error("Invalid offset beyond length");
            }
            if (o >= c) {
                n.push(n[0].slice(-c));
                for(o -= c; o >= n[n.length - 1].length;){
                    n.push(n[n.length - 1]);
                    o -= n[n.length - 1].length;
                }
            }
            n.push(n[0].slice(-c, -c + o));
        }
    }
    const l = yt(n);
    if (l.length != a) {
        throw new Error(`Unexpected length: ${l.length} != ${a}`);
    }
    return l;
}
function Hr(e) {
    const t = [];
    for(var r = 0; r < e.length;){
        const a = e[r++];
        const n = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
        r += 3;
        t.push(Qm(a, e.slice(r, r + n)));
        r += n;
    }
    if (r !== e.length) {
        throw new Error("data is not a valid framed stream!");
    }
    return yt(t);
}
function Qt(e) {
    const t = [];
    for(let r = 0; r < e.length;){
        const a = Math.min(e.length - r, 268435455);
        const n = new Uint8Array(4);
        t.push(n);
        const i = Re(a);
        let s = i.length;
        t.push(i);
        if (a <= 60) {
            s++;
            t.push(new Uint8Array([
                a - 1 << 2
            ]));
        } else if (a <= 256) {
            s += 2;
            t.push(new Uint8Array([
                240,
                a - 1 & 255
            ]));
        } else if (a <= 65536) {
            s += 3;
            t.push(new Uint8Array([
                244,
                a - 1 & 255,
                a - 1 >> 8 & 255
            ]));
        } else if (a <= 16777216) {
            s += 4;
            t.push(new Uint8Array([
                248,
                a - 1 & 255,
                a - 1 >> 8 & 255,
                a - 1 >> 16 & 255
            ]));
        } else if (a <= 4294967296) {
            s += 5;
            t.push(new Uint8Array([
                252,
                a - 1 & 255,
                a - 1 >> 8 & 255,
                a - 1 >> 16 & 255,
                a - 1 >>> 24 & 255
            ]));
        }
        t.push(e.slice(r, r + a));
        s += a;
        n[0] = 0;
        n[1] = s & 255;
        n[2] = s >> 8 & 255;
        n[3] = s >> 16 & 255;
        r += a;
    }
    return yt(t);
}
function eg(e, t, r, a) {
    const n = Xt(e);
    const i = n.getUint32(4, true);
    let s = (a > 1 ? 12 : 8) + ls(i & (a > 1 ? 3470 : 398)) * 4;
    let f = -1;
    let c = -1;
    let o = NaN;
    const l = new Date(2001, 0, 1);
    if (i & 512) {
        f = n.getUint32(s, true);
        s += 4;
    }
    s += ls(i & (a > 1 ? 12288 : 4096)) * 4;
    if (i & 16) {
        c = n.getUint32(s, true);
        s += 4;
    }
    if (i & 32) {
        o = n.getFloat64(s, true);
        s += 8;
    }
    if (i & 64) {
        l.setTime(l.getTime() + n.getFloat64(s, true) * 1000);
        s += 8;
    }
    let u;
    switch(e[2]){
        case 0:
            break;
        case 2:
            u = {
                t: "n",
                v: o
            };
            break;
        case 3:
            u = {
                t: "s",
                v: t[c]
            };
            break;
        case 5:
            u = {
                t: "d",
                v: l
            };
            break;
        case 6:
            u = {
                t: "b",
                v: o > 0
            };
            break;
        case 7:
            u = {
                t: "n",
                v: o / 86400
            };
            break;
        case 8:
            u = {
                t: "e",
                v: 0
            };
            break;
        case 9:
            if (f > -1) {
                u = {
                    t: "s",
                    v: r[f]
                };
            } else if (c > -1) {
                u = {
                    t: "s",
                    v: t[c]
                };
            } else if (!isNaN(o)) {
                u = {
                    t: "n",
                    v: o
                };
            } else {
                throw new Error(`Unsupported cell type ${e.slice(0, 4)}`);
            }
            break;
        default:
            throw new Error(`Unsupported cell type ${e.slice(0, 4)}`);
    }
    return u;
}
function rg(e, t, r) {
    const a = Xt(e);
    const n = a.getUint32(8, true);
    let i = 12;
    let s = -1;
    let f = -1;
    let c = NaN;
    let o = NaN;
    const l = new Date(2001, 0, 1);
    if (n & 1) {
        c = Zm(e, i);
        i += 16;
    }
    if (n & 2) {
        o = a.getFloat64(i, true);
        i += 8;
    }
    if (n & 4) {
        l.setTime(l.getTime() + a.getFloat64(i, true) * 1000);
        i += 8;
    }
    if (n & 8) {
        f = a.getUint32(i, true);
        i += 4;
    }
    if (n & 16) {
        s = a.getUint32(i, true);
        i += 4;
    }
    let u;
    switch(e[1]){
        case 0:
            break;
        case 2:
            u = {
                t: "n",
                v: c
            };
            break;
        case 3:
            u = {
                t: "s",
                v: t[f]
            };
            break;
        case 5:
            u = {
                t: "d",
                v: l
            };
            break;
        case 6:
            u = {
                t: "b",
                v: o > 0
            };
            break;
        case 7:
            u = {
                t: "n",
                v: o / 86400
            };
            break;
        case 8:
            u = {
                t: "e",
                v: 0
            };
            break;
        case 9:
            if (s > -1) {
                u = {
                    t: "s",
                    v: r[s]
                };
            } else {
                throw new Error(`Unsupported cell type ${e[1]} : ${n & 31} : ${e.slice(0, 4)}`);
            }
            break;
        case 10:
            u = {
                t: "n",
                v: c
            };
            break;
        default:
            throw new Error(`Unsupported cell type ${e[1]} : ${n & 31} : ${e.slice(0, 4)}`);
    }
    return u;
}
function K0(e, t) {
    const r = new Uint8Array(32);
    const a = Xt(r);
    let n = 12;
    let i = 0;
    r[0] = 5;
    switch(e.t){
        case "n":
            r[1] = 2;
            qm(r, n, e.v);
            i |= 1;
            n += 16;
            break;
        case "b":
            r[1] = 6;
            a.setFloat64(n, e.v ? 1 : 0, true);
            i |= 2;
            n += 8;
            break;
        case "s":
            if (t.indexOf(e.v) == -1) {
                throw new Error(`Value ${e.v} missing from SST!`);
            }
            r[1] = 3;
            a.setUint32(n, t.indexOf(e.v), true);
            i |= 8;
            n += 4;
            break;
        default:
            throw `unsupported cell type ${e.t}`;
    }
    a.setUint32(8, i, true);
    return r.slice(0, n);
}
function Y0(e, t) {
    const r = new Uint8Array(32);
    const a = Xt(r);
    let n = 12;
    let i = 0;
    r[0] = 3;
    switch(e.t){
        case "n":
            r[2] = 2;
            a.setFloat64(n, e.v, true);
            i |= 32;
            n += 8;
            break;
        case "b":
            r[2] = 6;
            a.setFloat64(n, e.v ? 1 : 0, true);
            i |= 32;
            n += 8;
            break;
        case "s":
            if (t.indexOf(e.v) == -1) {
                throw new Error(`Value ${e.v} missing from SST!`);
            }
            r[2] = 3;
            a.setUint32(n, t.indexOf(e.v), true);
            i |= 16;
            n += 4;
            break;
        default:
            throw `unsupported cell type ${e.t}`;
    }
    a.setUint32(4, i, true);
    return r.slice(0, n);
}
function tg(e, t, r) {
    switch(e[0]){
        case 0:
        case 1:
        case 2:
        case 3:
            return eg(e, t, r, e[0]);
        case 5:
            return rg(e, t, r);
        default:
            throw new Error(`Unsupported payload version ${e[0]}`);
    }
}
function vr(e) {
    const t = Ie(e);
    return Xa(t[1][0].data);
}
function us(e, t) {
    const r = Ie(t.data);
    const a = Ye(r[1][0].data);
    const n = r[3];
    const i = [];
    (n || []).forEach((s)=>{
        const f = Ie(s.data);
        const c = Ye(f[1][0].data) >>> 0;
        switch(a){
            case 1:
                i[c] = on(f[3][0].data);
                break;
            case 8:
                {
                    const o = e[vr(f[9][0].data)][0];
                    const l = Ie(o.data);
                    const u = e[vr(l[1][0].data)][0];
                    const x = Ye(u.meta[1][0].data);
                    if (x != 2001) {
                        throw new Error(`2000 unexpected reference to ${x}`);
                    }
                    const d = Ie(u.data);
                    i[c] = d[3].map((v)=>on(v.data)).join("");
                }
                break;
        }
    });
    return i;
}
function ag(e, t) {
    const p = Ie(e);
    const R = Ye(p[1][0].data) >>> 0;
    const y = Ye(p[2][0].data) >>> 0;
    const g = p[8]?.[0]?.data && Ye(p[8][0].data) > 0 || false;
    let D;
    let b;
    if (p[7]?.[0]?.data && t != 0) {
        D = p[7]?.[0]?.data;
        b = p[6]?.[0]?.data;
    } else if (p[4]?.[0]?.data && t != 1) {
        D = p[4]?.[0]?.data;
        b = p[3]?.[0]?.data;
    } else {
        throw `NUMBERS Tile missing ${t} cell storage`;
    }
    const N = g ? 4 : 1;
    const F = Xt(D);
    const B = [];
    for(var I = 0; I < D.length / 2; ++I){
        const z = F.getUint16(I * 2, true);
        if (z < 65535) {
            B.push([
                I,
                z
            ]);
        }
    }
    if (B.length != y) {
        throw `Expected ${y} cells, found ${B.length}`;
    }
    const cells = [];
    for(I = 0; I < B.length - 1; ++I){
        cells[B[I][0]] = b.subarray(B[I][1] * N, B[I + 1][1] * N);
    }
    if (B.length >= 1) {
        cells[B[B.length - 1][0]] = b.subarray(B[B.length - 1][1] * N);
    }
    return {
        R,
        cells
    };
}
function ng(e, t) {
    let r;
    const a = Ie(t.data);
    const n = (r = a?.[7]) != null && r[0] ? Ye(a[7][0].data) >>> 0 > 0 ? 1 : 0 : -1;
    const i = Kn(a[5], (s)=>ag(s, n));
    return {
        nrows: Ye(a[4][0].data) >>> 0,
        data: i.reduce((acc, item)=>{
            if (!acc[item.R]) {
                acc[item.R] = [];
            }
            item.cells.forEach((c, o)=>{
                if (acc[item.R][o]) {
                    throw new Error(`Duplicate cell r=${item.R} c=${o}`);
                }
                acc[item.R][o] = c;
            });
            return acc;
        }, [])
    };
}
function ig(e, t, r) {
    let a;
    const n = Ie(t.data);
    const i = {
        s: {
            r: 0,
            c: 0
        },
        e: {
            r: 0,
            c: 0
        }
    };
    i.e.r = (Ye(n[6][0].data) >>> 0) - 1;
    if (i.e.r < 0) {
        throw new Error(`Invalid row varint ${n[6][0].data}`);
    }
    i.e.c = (Ye(n[7][0].data) >>> 0) - 1;
    if (i.e.c < 0) {
        throw new Error(`Invalid col varint ${n[7][0].data}`);
    }
    r["!ref"] = encode_range(i);
    const s = Ie(n[4][0].data);
    const f = us(e, e[vr(s[4][0].data)][0]);
    const c = (a = s[17]) != null && a[0] ? us(e, e[vr(s[17][0].data)][0]) : [];
    const o = Ie(s[3][0].data);
    let l = 0;
    o[1].forEach((u)=>{
        const x = Ie(u.data);
        const d = e[vr(x[2][0].data)][0];
        const v = Ye(d.meta[1][0].data);
        if (v != 6002) {
            throw new Error(`6001 unexpected reference to ${v}`);
        }
        const h = ng(e, d);
        h.data.forEach((p, w)=>{
            p.forEach((y, g)=>{
                const D = encode_cell({
                    r: l + w,
                    c: g
                });
                const b = tg(y, f, c);
                if (b) {
                    r[D] = b;
                }
            });
        });
        l += h.nrows;
    });
}
function sg(e, t) {
    const r = Ie(t.data);
    const a = {
        "!ref": "A1"
    };
    const n = e[vr(r[2][0].data)];
    const i = Ye(n[0].meta[1][0].data);
    if (i != 6001) {
        throw new Error(`6000 unexpected reference to ${i}`);
    }
    ig(e, n[0], a);
    return a;
}
function fg(e, t) {
    let r;
    const a = Ie(t.data);
    const n = {
        name: (r = a[1]) != null && r[0] ? on(a[1][0].data) : "",
        sheets: []
    };
    const i = Kn(a[2], vr);
    i.forEach((s)=>{
        e[s].forEach((f)=>{
            const c = Ye(f.meta[1][0].data);
            if (c == 6000) {
                n.sheets.push(sg(e, f));
            }
        });
    });
    return n;
}
function cg(e, t) {
    const r = book_new();
    const a = Ie(t.data);
    const n = Kn(a[1], vr);
    n.forEach((i)=>{
        e[i].forEach((s)=>{
            const f = Ye(s.meta[1][0].data);
            if (f == 2) {
                const c = fg(e, s);
                c.sheets.forEach((o, l)=>{
                    book_append_sheet(r, o, l == 0 ? c.name : `${c.name}_${l}`, true);
                });
            }
        });
    });
    if (r.SheetNames.length == 0) {
        throw new Error("Empty NUMBERS file");
    }
    return r;
}
function j0(e) {
    const i = {};
    const s = [];
    e.FullPaths.forEach((c)=>{
        if (c.match(/\.iwpv2/)) {
            throw new Error("Unsupported password protection");
        }
    });
    e.FileIndex.forEach((c)=>{
        if (c.name.match(/\.iwa$/)) {
            let o;
            try {
                o = Hr(c.content);
            } catch (error) {
                return console.log(`?? ${c.content.length} ${error.message || error}`);
            }
            let l;
            try {
                l = Wr(o);
            } catch (error) {
                return console.log(`## ${error.message || error}`);
            }
            l.forEach((u)=>{
                i[u.id] = u.messages;
                s.push(u.id);
            });
        }
    });
    if (!s.length) {
        throw new Error("File has no messages");
    }
    let f = i?.[1]?.[0]?.meta?.[1]?.[0].data && Ye(i[1][0].meta[1][0].data) == 1 && i[1][0];
    if (!f) {
        s.forEach((c)=>{
            i[c].forEach((o)=>{
                const l = Ye(o.meta[1][0].data) >>> 0;
                if (l == 1) {
                    if (!f) {
                        f = o;
                    } else {
                        throw new Error("Document has multiple roots");
                    }
                }
            });
        });
    }
    if (!f) {
        throw new Error("Cannot find Document root");
    }
    return cg(i, f);
}
function og(e, t, r) {
    let a;
    let n;
    if (!((a = e[6]) != null && a[0]) || !((n = e[7]) != null && n[0])) {
        throw "Mutation only works on post-BNC storages!";
    }
    const f = e[8]?.[0]?.data && Ye(e[8][0].data) > 0 || false;
    if (f) {
        throw "Math only works with normal offsets";
    }
    let c = 0;
    const o = Xt(e[7][0].data);
    let l = 0;
    const u = [];
    const x = Xt(e[4][0].data);
    let d = 0;
    const v = [];
    for(var h = 0; h < t.length; ++h){
        if (t[h] == null) {
            o.setUint16(h * 2, 65535, true);
            x.setUint16(h * 2, 65535);
            continue;
        }
        o.setUint16(h * 2, l, true);
        x.setUint16(h * 2, d, true);
        let p;
        let w;
        switch(typeof t[h]){
            case "string":
                p = K0({
                    t: "s",
                    v: t[h]
                }, r);
                w = Y0({
                    t: "s",
                    v: t[h]
                }, r);
                break;
            case "number":
                p = K0({
                    t: "n",
                    v: t[h]
                }, r);
                w = Y0({
                    t: "n",
                    v: t[h]
                }, r);
                break;
            case "boolean":
                p = K0({
                    t: "b",
                    v: t[h]
                }, r);
                w = Y0({
                    t: "b",
                    v: t[h]
                }, r);
                break;
            default:
                throw new Error(`Unsupported value ${t[h]}`);
        }
        u.push(p);
        l += p.length;
        v.push(w);
        d += w.length;
        ++c;
    }
    for(e[2][0].data = Re(c); h < e[7][0].data.length / 2; ++h){
        o.setUint16(h * 2, 65535, true);
        x.setUint16(h * 2, 65535, true);
    }
    e[6][0].data = yt(u);
    e[3][0].data = yt(v);
    return c;
}
function lg(e, t) {
    if (!t || !t.numbers) {
        throw new Error("Must pass a `numbers` option -- check the README");
    }
    const r = e.Sheets[e.SheetNames[0]];
    if (e.SheetNames.length > 1) {
        console.error("The Numbers writer currently writes only the first table");
    }
    const range = decode_range(r["!ref"]);
    range.s.r = range.s.c = 0;
    let n = false;
    if (range.e.c > 9) {
        n = true;
        range.e.c = 9;
    }
    if (range.e.r > 49) {
        n = true;
        range.e.r = 49;
    }
    if (n) {
        console.error(`The Numbers writer is currently limited to ${encode_range(range)}`);
    }
    const i = T0(r, {
        range,
        header: 1
    });
    const s = [
        "~Sh33tJ5~"
    ];
    i.forEach((P)=>P.forEach((O)=>{
            if (typeof O === "string") {
                s.push(O);
            }
        }));
    const f = {};
    const c = [];
    const o = CFB.read(t.numbers, {
        type: "base64"
    });
    o.FileIndex.map((P, O)=>[
            P,
            o.FullPaths[O]
        ]).forEach(([O, location])=>{
        if (O.type == 2 && O.name.match(/\.iwa/)) {
            const Y = O.content;
            const re = Hr(Y);
            const te = Wr(re);
            te.forEach((Q)=>{
                c.push(Q.id);
                f[Q.id] = {
                    deps: [],
                    location,
                    type: Ye(Q.messages[0].meta[1][0].data)
                };
            });
        }
    });
    c.sort((P, O)=>P - O);
    const l = c.filter((P)=>P > 1).map((P)=>[
            P,
            Re(P)
        ]);
    o.FileIndex.map((P, O)=>[
            P,
            o.FullPaths[O]
        ]).forEach((P)=>{
        const O = P[0];
        P[1];
        if (O.name.match(/\.iwa/)) {
            const R = Wr(Hr(O.content));
            R.forEach((Y)=>{
                Y.messages.forEach((re)=>{
                    l.forEach((te)=>{
                        if (Y.messages.some((Q)=>Ye(Q.meta[1][0].data) != 11006 && Jm(Q.data, te[1]))) {
                            f[te[0]].deps.push(Y.id);
                        }
                    });
                });
            });
        }
    });
    let u = CFB.find(o, f[1].location);
    let d;
    for(var x = Wr(Hr(u.content)), v = 0; v < x.length; ++v){
        var h = x[v];
        if (h.id == 1) {
            d = h;
        }
    }
    let p = vr(Ie(d.messages[0].data)[1][0].data);
    u = CFB.find(o, f[p].location);
    x = Wr(Hr(u.content));
    for(v = 0; v < x.length; ++v){
        h = x[v];
        if (h.id == p) {
            d = h;
        }
    }
    p = vr(Ie(d.messages[0].data)[2][0].data);
    u = CFB.find(o, f[p].location);
    x = Wr(Hr(u.content));
    for(v = 0; v < x.length; ++v){
        h = x[v];
        if (h.id == p) {
            d = h;
        }
    }
    p = vr(Ie(d.messages[0].data)[2][0].data);
    u = CFB.find(o, f[p].location);
    x = Wr(Hr(u.content));
    for(v = 0; v < x.length; ++v){
        h = x[v];
        if (h.id == p) {
            d = h;
        }
    }
    const w = Ie(d.messages[0].data);
    {
        w[6][0].data = Re(range.e.r + 1);
        w[7][0].data = Re(range.e.c + 1);
        const y = vr(w[46][0].data);
        let g = CFB.find(o, f[y].location);
        let D = Wr(Hr(g.content));
        {
            for(var b = 0; b < D.length && D[b].id != y; ++b);
            if (D[b].id != y) {
                throw "Bad ColumnRowUIDMapArchive";
            }
            const N = Ie(D[b].messages[0].data);
            N[1] = [];
            N[2] = [];
            N[3] = [];
            for(var F = 0; F <= range.e.c; ++F){
                var B = [];
                B[1] = B[2] = [
                    {
                        type: 0,
                        data: Re(F + 420690)
                    }
                ];
                N[1].push({
                    type: 2,
                    data: lr(B)
                });
                N[2].push({
                    type: 0,
                    data: Re(F)
                });
                N[3].push({
                    type: 0,
                    data: Re(F)
                });
            }
            N[4] = [];
            N[5] = [];
            N[6] = [];
            for(var I = 0; I <= range.e.r; ++I){
                B = [];
                B[1] = B[2] = [
                    {
                        type: 0,
                        data: Re(I + 726270)
                    }
                ];
                N[4].push({
                    type: 2,
                    data: lr(B)
                });
                N[5].push({
                    type: 0,
                    data: Re(I)
                });
                N[6].push({
                    type: 0,
                    data: Re(I)
                });
            }
            D[b].messages[0].data = lr(N);
        }
        g.content = Qt(qt(D));
        g.size = g.content.length;
        delete w[46];
        const z = Ie(w[4][0].data);
        {
            z[7][0].data = Re(range.e.r + 1);
            const X = Ie(z[1][0].data);
            const L = vr(X[2][0].data);
            g = CFB.find(o, f[L].location);
            D = Wr(Hr(g.content));
            {
                if (D[0].id != L) {
                    throw "Bad HeaderStorageBucket";
                }
                var J = Ie(D[0].messages[0].data);
                for(I = 0; I < i.length; ++I){
                    var le = Ie(J[2][0].data);
                    le[1][0].data = Re(I);
                    le[4][0].data = Re(i[I].length);
                    J[2][I] = {
                        type: J[2][0].type,
                        data: lr(le)
                    };
                }
                D[0].messages[0].data = lr(J);
            }
            g.content = Qt(qt(D));
            g.size = g.content.length;
            const ie = vr(z[2][0].data);
            g = CFB.find(o, f[ie].location);
            D = Wr(Hr(g.content));
            {
                if (D[0].id != ie) {
                    throw "Bad HeaderStorageBucket";
                }
                J = Ie(D[0].messages[0].data);
                for(F = 0; F <= range.e.c; ++F){
                    le = Ie(J[2][0].data);
                    le[1][0].data = Re(F);
                    le[4][0].data = Re(range.e.r + 1);
                    J[2][F] = {
                        type: J[2][0].type,
                        data: lr(le)
                    };
                }
                D[0].messages[0].data = lr(J);
            }
            g.content = Qt(qt(D));
            g.size = g.content.length;
            const he = vr(z[4][0].data);
            (()=>{
                const P = CFB.find(o, f[he].location);
                let R;
                for(var O = Wr(Hr(P.content)), Y = 0; Y < O.length; ++Y){
                    const re = O[Y];
                    if (re.id == he) {
                        R = re;
                    }
                }
                const te = Ie(R.messages[0].data);
                {
                    te[3] = [];
                    const Q = [];
                    s.forEach((A, Ue)=>{
                        Q[1] = [
                            {
                                type: 0,
                                data: Re(Ue)
                            }
                        ];
                        Q[2] = [
                            {
                                type: 0,
                                data: Re(1)
                            }
                        ];
                        Q[3] = [
                            {
                                type: 2,
                                data: jm(A)
                            }
                        ];
                        te[3].push({
                            type: 2,
                            data: lr(Q)
                        });
                    });
                }
                R.messages[0].data = lr(te);
                const Z = qt(O);
                const Ee = Qt(Z);
                P.content = Ee;
                P.size = P.content.length;
            })();
            const ce = Ie(z[3][0].data);
            {
                const Pe = ce[1][0];
                delete ce[2];
                const V = Ie(Pe.data);
                {
                    const ve = vr(V[2][0].data);
                    (()=>{
                        const P = CFB.find(o, f[ve].location);
                        let R;
                        for(var O = Wr(Hr(P.content)), Y = 0; Y < O.length; ++Y){
                            const re = O[Y];
                            if (re.id == ve) {
                                R = re;
                            }
                        }
                        const te = Ie(R.messages[0].data);
                        {
                            delete te[6];
                            delete ce[7];
                            const Q = new Uint8Array(te[5][0].data);
                            te[5] = [];
                            let Z = 0;
                            for(let Ee = 0; Ee <= range.e.r; ++Ee){
                                const A = Ie(Q);
                                Z += og(A, i[Ee], s);
                                A[1][0].data = Re(Ee);
                                te[5].push({
                                    data: lr(A),
                                    type: 2
                                });
                            }
                            te[1] = [
                                {
                                    type: 0,
                                    data: Re(range.e.c + 1)
                                }
                            ];
                            te[2] = [
                                {
                                    type: 0,
                                    data: Re(range.e.r + 1)
                                }
                            ];
                            te[3] = [
                                {
                                    type: 0,
                                    data: Re(Z)
                                }
                            ];
                            te[4] = [
                                {
                                    type: 0,
                                    data: Re(range.e.r + 1)
                                }
                            ];
                        }
                        R.messages[0].data = lr(te);
                        const Ue = qt(O);
                        const Ce = Qt(Ue);
                        P.content = Ce;
                        P.size = P.content.length;
                    })();
                }
                Pe.data = lr(V);
            }
            z[3][0].data = lr(ce);
        }
        w[4][0].data = lr(z);
    }
    d.messages[0].data = lr(w);
    const ge = qt(x);
    const C = Qt(ge);
    u.content = C;
    u.size = u.content.length;
    return o;
}
function pc(e) {
    return (r)=>{
        for(let a = 0; a != e.length; ++a){
            const n = e[a];
            if (r[n[0]] === undefined) {
                r[n[0]] = n[1];
            }
            if (n[2] === "n") {
                r[n[0]] = Number(r[n[0]]);
            }
        }
    };
}
function Yn(e) {
    pc([
        [
            "cellNF",
            false
        ],
        [
            "cellHTML",
            true
        ],
        [
            "cellFormula",
            true
        ],
        [
            "cellStyles",
            false
        ],
        [
            "cellText",
            true
        ],
        [
            "cellDates",
            false
        ],
        [
            "sheetStubs",
            false
        ],
        [
            "sheetRows",
            0,
            "n"
        ],
        [
            "bookDeps",
            false
        ],
        [
            "bookSheets",
            false
        ],
        [
            "bookProps",
            false
        ],
        [
            "bookFiles",
            false
        ],
        [
            "bookVBA",
            false
        ],
        [
            "password",
            ""
        ],
        [
            "WTF",
            false
        ]
    ])(e);
}
function jn(e) {
    pc([
        [
            "cellDates",
            false
        ],
        [
            "bookSST",
            false
        ],
        [
            "bookType",
            "xlsx"
        ],
        [
            "compression",
            false
        ],
        [
            "WTF",
            false
        ]
    ])(e);
}
function ug(Type) {
    if (Fe.WS.indexOf(Type) > -1) {
        return "sheet";
    }
    if (Type == Fe.CS) {
        return "chart";
    }
    if (Type == Fe.DS) {
        return "dialog";
    }
    if (Type == Fe.MS) {
        return "macro";
    }
    if (Type && Type.length) {
        return Type;
    }
    return "sheet";
}
function hg(e, Sheets) {
    if (!e) {
        return 0;
    }
    try {
        e = Sheets.map((a)=>{
            if (!a.id) {
                a.id = a.strRelID;
            }
            return [
                a.name,
                e["!id"][a.id].Target,
                ug(e["!id"][a.id].Type)
            ];
        });
    } catch  {
        return null;
    }
    if (!e || e.length === 0) {
        return null;
    }
    return e;
}
function xg(e, t, r, a, n, i, s, f, c, o, Themes, Styles) {
    try {
        i[a] = ya(Rr(e, r, true), t);
        const x = rr(e, t);
        let d;
        switch(f){
            case "sheet":
                d = Up(x, t, n, c, i[a], o, Themes, Styles);
                break;
            case "chart":
                d = Wp(x, t, n, c, i[a], o, Themes, Styles);
                if (!d || !d["!drawel"]) {
                    break;
                }
                const v = Ea(d["!drawel"].Target, t);
                const h = Ba(v);
                const p = Ax(Rr(e, v, true), ya(Rr(e, h, true), v));
                const w = Ea(p, v);
                const y = Ba(w);
                d = dp(Rr(e, w, true), w, c, ya(Rr(e, y, true), w), o, d);
                break;
            case "macro":
                d = Hp(x, t, n, c, i[a], o, Themes, Styles);
                break;
            case "dialog":
                d = Vp(x, t, n, c, i[a], o, Themes, Styles);
                break;
            default:
                throw new Error(`Unrecognized sheet type ${f}`);
        }
        s[a] = d;
        let g = [];
        if (i && i[a]) {
            je(i[a]).forEach((D)=>{
                let b = "";
                if (i[a][D].Type == Fe.CMNT) {
                    b = Ea(i[a][D].Target, t);
                    const N = $p(rr(e, b, true), b, c);
                    if (!N || !N.length) {
                        return;
                    }
                    Ji(d, N, false);
                }
                if (i[a][D].Type == Fe.TCMNT) {
                    b = Ea(i[a][D].Target, t);
                    g = g.concat(Dx(rr(e, b, true), c));
                }
            });
        }
        if (g && g.length) {
            Ji(d, g, true, c.people || []);
        }
    } catch (error) {
        if (c.WTF) {
            throw error;
        }
    }
}
function Mr(e) {
    if (e.charAt(0) == "/") {
        return e.slice(1);
    }
    return e;
}
export function parse_zip(e, t) {
    la();
    t = t || {};
    Yn(t);
    if (Vr(e, "META-INF/manifest.xml") || Vr(e, "objectdata.xml")) {
        return fs(e, t);
    }
    if (Vr(e, "Index/Document.iwa")) {
        if (typeof Uint8Array === "undefined") {
            throw new Error("NUMBERS file parsing requires Uint8Array support");
        }
        if (typeof j0 !== "undefined") {
            if (e.FileIndex) {
                return j0(e);
            }
            const r = CFB.utils.cfb_new();
            mi(e).forEach((le)=>{
                ke(r, le, Oo(e, le));
            });
            return j0(r);
        }
        throw new Error("Unsupported NUMBERS file");
    }
    if (!Vr(e, "[Content_Types].xml")) {
        throw Vr(e, "index.xml.gz") ? new Error("Unsupported NUMBERS 08 file") : Vr(e, "index.xml") ? new Error("Unsupported NUMBERS 09 file") : new Error("Unsupported ZIP file");
    }
    const a = mi(e);
    const Directory = Tl(Rr(e, "[Content_Types].xml"));
    let i = false;
    let s;
    let f;
    if (Directory.workbooks.length === 0) {
        f = "xl/workbook.xml";
        if (rr(e, f, true)) {
            Directory.workbooks.push(f);
        }
    }
    if (Directory.workbooks.length === 0) {
        f = "xl/workbook.bin";
        if (!rr(e, f, true)) {
            throw new Error("Could not find workbook");
        }
        Directory.workbooks.push(f);
        i = true;
    }
    if (Directory.workbooks[0].slice(-3) == "bin") {
        i = true;
    }
    let Themes = {};
    let Styles = {};
    if (!t.bookSheets && !t.bookProps) {
        Strings = [];
        if (Directory.sst) {
            try {
                Strings = zp(rr(e, Mr(Directory.sst)), Directory.sst, t);
            } catch (error) {
                if (t.WTF) {
                    throw error;
                }
            }
        }
        if (t.cellStyles && Directory.themes.length) {
            Themes = Gp(Rr(e, Directory.themes[0].replace(/^\//, ""), true) || "", Directory.themes[0], t);
        }
        if (Directory.style) {
            Styles = Xp(rr(e, Mr(Directory.style)), Directory.style, Themes, t);
        }
    }
    Directory.links.map((le)=>{
        try {
            const ie = ya(Rr(e, Ba(Mr(le))), le);
            return Yp(rr(e, Mr(le)), ie, le, t);
        } catch  {}
    });
    const l = Mp(rr(e, Mr(Directory.workbooks[0])), Directory.workbooks[0], t);
    let Props = {};
    let x = "";
    if (Directory.coreprops.length) {
        x = rr(e, Mr(Directory.coreprops[0]), true);
        if (x) {
            Props = qs(x);
        }
        if (Directory.extprops.length !== 0) {
            x = rr(e, Mr(Directory.extprops[0]), true);
            if (x) {
                Ol(x, Props, t);
            }
        }
    }
    let Custprops = {};
    if ((!t.bookSheets || t.bookProps) && Directory.custprops.length !== 0) {
        x = Rr(e, Mr(Directory.custprops[0]), true);
        if (x) {
            Custprops = Rl(x, t);
        }
    }
    let v = {};
    if ((t.bookSheets || t.bookProps) && (l.Sheets ? s = l.Sheets.map((ie)=>ie.name) : Props.Worksheets && Props.SheetNames.length > 0 && (s = Props.SheetNames), t.bookProps && (v.Props = Props, v.Custprops = Custprops), t.bookSheets && typeof s !== "undefined" && (v.SheetNames = s), t.bookSheets ? v.SheetNames : t.bookProps)) {
        return v;
    }
    s = {};
    let Deps = {};
    if (t.bookDeps && Directory.calcchain) {
        Deps = Kp(rr(e, Mr(Directory.calcchain)), Directory.calcchain);
    }
    let p = 0;
    const w = {};
    let y;
    let g;
    {
        const D = l.Sheets;
        Props.Worksheets = D.length;
        Props.SheetNames = [];
        for(let b = 0; b != D.length; ++b){
            Props.SheetNames[b] = D[b].name;
        }
    }
    const N = i ? "bin" : "xml";
    const F = Directory.workbooks[0].lastIndexOf("/");
    let B = `${Directory.workbooks[0].slice(0, F + 1)}_rels/${Directory.workbooks[0].slice(F + 1)}.rels`.replace(/^\//, "");
    if (!Vr(e, B)) {
        B = `xl/_rels/workbook.${N}.rels`;
    }
    let I = ya(Rr(e, B, true), B.replace(/_rels.*/, "s5s"));
    if ((Directory.metadata || []).length >= 1) {
        t.xlmeta = jp(rr(e, Mr(Directory.metadata[0])), Directory.metadata[0], t);
    }
    if ((Directory.people || []).length >= 1) {
        t.people = Ix(rr(e, Mr(Directory.people[0])), t);
    }
    if (I) {
        I = hg(I, l.Sheets);
    }
    const z = rr(e, "xl/worksheets/sheet.xml", true) ? 1 : 0;
    e: for(p = 0; p != Props.Worksheets; ++p){
        let X = "sheet";
        if (I && I[p]) {
            y = `xl/${I[p][1].replace(/[\/]?xl\//, "")}`;
            if (!Vr(e, y)) {
                y = I[p][1];
            }
            if (!Vr(e, y)) {
                y = B.replace(/_rels\/.*$/, "") + I[p][1];
            }
            X = I[p][2];
        } else {
            y = `xl/worksheets/sheet${p + 1 - z}.${N}`;
            y = y.replace(/sheet0\./, "sheet.");
        }
        g = y.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels");
        if (t && t.sheets != null) {
            switch(typeof t.sheets){
                case "number":
                    if (p != t.sheets) {
                        continue e;
                    }
                    break;
                case "string":
                    if (Props.SheetNames[p].toLowerCase() != t.sheets.toLowerCase()) {
                        continue e;
                    }
                    break;
                default:
                    if (Array.isArray && Array.isArray(t.sheets)) {
                        let L = false;
                        for(let J = 0; J != t.sheets.length; ++J){
                            if (typeof t.sheets[J] === "number" && t.sheets[J] == p) {
                                L = 1;
                            }
                            if (typeof t.sheets[J] === "string" && t.sheets[J].toLowerCase() == Props.SheetNames[p].toLowerCase()) {
                                L = 1;
                            }
                        }
                        if (!L) {
                            continue e;
                        }
                    }
            }
        }
        xg(e, y, g, Props.SheetNames[p], p, w, s, X, t, l, Themes, Styles);
    }
    v = {
        Directory,
        Workbook: l,
        Props,
        Custprops,
        Deps,
        Sheets: s,
        SheetNames: Props.SheetNames,
        Strings,
        Styles,
        Themes,
        SSF: Me(_table)
    };
    t && t.bookFiles && (e.files ? (v.keys = a, v.files = e.files) : (v.keys = [], v.files = {}, e.FullPaths.forEach((le, ie)=>{
        le = le.replace(/^Root Entry[\/]/, "");
        v.keys.push(le);
        v.files[le] = e.FileIndex[ie];
    })));
    t && t.bookVBA && (Directory.vba.length > 0 ? v.vbaraw = rr(e, Mr(Directory.vba[0]), true) : Directory.defaults && Directory.defaults.bin === Ux && (v.vbaraw = rr(e, "xl/vbaProject.bin", true)));
    return v;
}
function vg(e, t) {
    const r = t || {};
    let a = "Workbook";
    let n = CFB.find(e, a);
    try {
        a = "/!DataSpaces/Version";
        n = CFB.find(e, a);
        if (!n || !n.content) {
            throw new Error(`ECMA-376 Encrypted file missing ${a}`);
        }
        Jh(n.content);
        a = "/!DataSpaces/DataSpaceMap";
        n = CFB.find(e, a);
        if (!n || !n.content) {
            throw new Error(`ECMA-376 Encrypted file missing ${a}`);
        }
        const i = qh(n.content);
        if (i.length !== 1 || i[0].comps.length !== 1 || i[0].comps[0].t !== 0 || i[0].name !== "StrongEncryptionDataSpace" || i[0].comps[0].v !== "EncryptedPackage") {
            throw new Error(`ECMA-376 Encrypted file bad ${a}`);
        }
        a = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace";
        n = CFB.find(e, a);
        if (!n || !n.content) {
            throw new Error(`ECMA-376 Encrypted file missing ${a}`);
        }
        const s = Qh(n.content);
        if (s.length != 1 || s[0] != "StrongEncryptionTransform") {
            throw new Error(`ECMA-376 Encrypted file bad ${a}`);
        }
        a = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary";
        n = CFB.find(e, a);
        if (!n || !n.content) {
            throw new Error(`ECMA-376 Encrypted file missing ${a}`);
        }
        r1(n.content);
    } catch  {}
    a = "/EncryptionInfo";
    n = CFB.find(e, a);
    if (!n || !n.content) {
        throw new Error(`ECMA-376 Encrypted file missing ${a}`);
    }
    const f = t1(n.content);
    a = "/EncryptedPackage";
    n = CFB.find(e, a);
    if (!n || !n.content) {
        throw new Error(`ECMA-376 Encrypted file missing ${a}`);
    }
    if (f[0] == 4 && typeof decrypt_agile !== "undefined") {
        return decrypt_agile(f[1], n.content, r.password || "", r);
    }
    if (f[0] == 2 && typeof decrypt_std76 !== "undefined") {
        return decrypt_std76(f[1], n.content, r.password || "", r);
    }
    throw new Error("File is password-protected");
}
function pg(e, t) {
    if (t.bookType == "ods") {
        return vc(e, t);
    }
    if (t.bookType == "numbers") {
        return lg(e, t);
    }
    if (t.bookType == "xlsb") {
        return mg(e, t);
    }
    return mc(e, t);
}
function mg(e, t) {
    ta = 1024;
    if (e && !e.SSF) {
        e.SSF = Me(_table);
    }
    if (e && e.SSF) {
        la();
        load_table(e.SSF);
        t.revssf = A0(e.SSF);
        t.revssf[e.SSF[65535]] = 0;
        t.ssf = e.SSF;
    }
    t.rels = {};
    t.wbrels = {};
    t.Strings = [];
    t.Strings.Count = 0;
    t.Strings.Unique = 0;
    if (Ca) {
        t.revStrings = new Map;
    } else {
        t.revStrings = {};
        t.revStrings.foo = [];
        delete t.revStrings.foo;
    }
    const r = t.bookType == "xlsb" ? "bin" : "xml";
    const a = Mf.indexOf(t.bookType) > -1;
    const n = bn();
    jn(t = t || {});
    const i = pn();
    let s = "";
    let f = 0;
    t.cellXfs = [];
    Dt(t.cellXfs, {}, {
        revssf: {
            General: 0
        }
    });
    if (!e.Props) {
        e.Props = {};
    }
    s = "docProps/core.xml";
    ke(i, s, Qs(e.Props, t));
    n.coreprops.push(s);
    Ne(t.rels, 2, s, Fe.CORE_PROPS);
    s = "docProps/app.xml";
    if (!(e.Props && e.Props.SheetNames)) {
        if (!e.Workbook || !e.Workbook.Sheets) {
            e.Props.SheetNames = e.SheetNames;
        } else {
            const c = [];
            for(let o = 0; o < e.SheetNames.length; ++o){
                if ((e.Workbook.Sheets[o] || {}).Hidden != 2) {
                    c.push(e.SheetNames[o]);
                }
            }
            e.Props.SheetNames = c;
        }
    }
    e.Props.Worksheets = e.Props.SheetNames.length;
    ke(i, s, tf(e.Props));
    n.extprops.push(s);
    Ne(t.rels, 3, s, Fe.EXT_PROPS);
    if (e.Custprops !== e.Props && je(e.Custprops || {}).length > 0) {
        s = "docProps/custom.xml";
        ke(i, s, af(e.Custprops));
        n.custprops.push(s);
        Ne(t.rels, 4, s, Fe.CUST_PROPS);
    }
    for(f = 1; f <= e.SheetNames.length; ++f){
        const l = {
            "!id": {}
        };
        const u = e.Sheets[e.SheetNames[f - 1]];
        const x = (u || {})["!type"] || "sheet";
        s = `xl/worksheets/sheet${f}.${r}`;
        ke(i, s, Zp(f - 1, s, t, e, l));
        n.sheets.push(s);
        Ne(t.wbrels, -1, `worksheets/sheet${f}.${r}`, Fe.WS[0]);
        if (u) {
            const d = u["!comments"];
            let v = false;
            let h = "";
            if (d && d.length > 0) {
                h = `xl/comments${f}.${r}`;
                ke(i, h, em(d, h));
                n.comments.push(h);
                Ne(l, -1, `../comments${f}.${r}`, Fe.CMNT);
                v = true;
            }
            if (u["!legacy"] && v) {
                ke(i, `xl/drawings/vmlDrawing${f}.vml`, Lf(f, u["!comments"]));
            }
            delete u["!comments"];
            delete u["!legacy"];
        }
        if (l["!id"].rId1) {
            ke(i, Ba(s), na(l));
        }
    }
    if (t.Strings != null && t.Strings.length > 0) {
        s = `xl/sharedStrings.${r}`;
        ke(i, s, Qp(t.Strings, s, t));
        n.strs.push(s);
        Ne(t.wbrels, -1, `sharedStrings.${r}`, Fe.SST);
    }
    s = `xl/workbook.${r}`;
    ke(i, s, Jp(e, s));
    n.workbooks.push(s);
    Ne(t.rels, 1, s, Fe.WB);
    s = "xl/theme/theme1.xml";
    ke(i, s, Wn(e.Themes, t));
    n.themes.push(s);
    Ne(t.wbrels, -1, "theme/theme1.xml", Fe.THEME);
    s = `xl/styles.${r}`;
    ke(i, s, qp(e, s, t));
    n.styles.push(s);
    Ne(t.wbrels, -1, `styles.${r}`, Fe.STY);
    if (e.vbaraw && a) {
        s = "xl/vbaProject.bin";
        ke(i, s, e.vbaraw);
        n.vba.push(s);
        Ne(t.wbrels, -1, "vbaProject.bin", Fe.VBA);
    }
    s = `xl/metadata.${r}`;
    ke(i, s, rm(s));
    n.metadata.push(s);
    Ne(t.wbrels, -1, `metadata.${r}`, Fe.XLMETA);
    ke(i, "[Content_Types].xml", Js(n, t));
    ke(i, "_rels/.rels", na(t.rels));
    ke(i, `xl/_rels/workbook.${r}.rels`, na(t.wbrels));
    delete t.revssf;
    delete t.ssf;
    return i;
}
function mc(e, t) {
    ta = 1024;
    if (e && !e.SSF) {
        e.SSF = Me(_table);
    }
    if (e && e.SSF) {
        la();
        load_table(e.SSF);
        t.revssf = A0(e.SSF);
        t.revssf[e.SSF[65535]] = 0;
        t.ssf = e.SSF;
    }
    t.rels = {};
    t.wbrels = {};
    t.Strings = [];
    t.Strings.Count = 0;
    t.Strings.Unique = 0;
    if (Ca) {
        t.revStrings = new Map;
    } else {
        t.revStrings = {};
        t.revStrings.foo = [];
        delete t.revStrings.foo;
    }
    const r = "xml";
    const a = Mf.indexOf(t.bookType) > -1;
    const n = bn();
    jn(t = t || {});
    const i = pn();
    let s = "";
    let f = 0;
    t.cellXfs = [];
    Dt(t.cellXfs, {}, {
        revssf: {
            General: 0
        }
    });
    if (!e.Props) {
        e.Props = {};
    }
    s = "docProps/core.xml";
    ke(i, s, Qs(e.Props, t));
    n.coreprops.push(s);
    Ne(t.rels, 2, s, Fe.CORE_PROPS);
    s = "docProps/app.xml";
    if (!(e.Props && e.Props.SheetNames)) {
        if (!e.Workbook || !e.Workbook.Sheets) {
            e.Props.SheetNames = e.SheetNames;
        } else {
            const c = [];
            for(let o = 0; o < e.SheetNames.length; ++o){
                if ((e.Workbook.Sheets[o] || {}).Hidden != 2) {
                    c.push(e.SheetNames[o]);
                }
            }
            e.Props.SheetNames = c;
        }
    }
    e.Props.Worksheets = e.Props.SheetNames.length;
    ke(i, s, tf(e.Props));
    n.extprops.push(s);
    Ne(t.rels, 3, s, Fe.EXT_PROPS);
    if (e.Custprops !== e.Props && je(e.Custprops || {}).length > 0) {
        s = "docProps/custom.xml";
        ke(i, s, af(e.Custprops));
        n.custprops.push(s);
        Ne(t.rels, 4, s, Fe.CUST_PROPS);
    }
    const l = [
        "SheetJ5"
    ];
    t.tcid = 0;
    for(f = 1; f <= e.SheetNames.length; ++f){
        const u = {
            "!id": {}
        };
        const x = e.Sheets[e.SheetNames[f - 1]];
        const d = (x || {})["!type"] || "sheet";
        s = `xl/worksheets/sheet${f}.${r}`;
        ke(i, s, jf(f - 1, t, e, u));
        n.sheets.push(s);
        Ne(t.wbrels, -1, `worksheets/sheet${f}.${r}`, Fe.WS[0]);
        if (x) {
            const v = x["!comments"];
            let h = false;
            let p = "";
            if (v && v.length > 0) {
                var w = false;
                v.forEach((y)=>{
                    y[1].forEach((g)=>{
                        if (g.T == true) {
                            w = true;
                        }
                    });
                });
                if (w) {
                    p = `xl/threadedComments/threadedComment${f}.${r}`;
                    ke(i, p, Ox(v, l, t));
                    n.threadedcomments.push(p);
                    Ne(u, -1, `../threadedComments/threadedComment${f}.${r}`, Fe.TCMNT);
                }
                p = `xl/comments${f}.${r}`;
                ke(i, p, Bf(v));
                n.comments.push(p);
                Ne(u, -1, `../comments${f}.${r}`, Fe.CMNT);
                h = true;
            }
            if (x["!legacy"] && h) {
                ke(i, `xl/drawings/vmlDrawing${f}.vml`, Lf(f, x["!comments"]));
            }
            delete x["!comments"];
            delete x["!legacy"];
        }
        if (u["!id"].rId1) {
            ke(i, Ba(s), na(u));
        }
    }
    if (t.Strings != null && t.Strings.length > 0) {
        s = `xl/sharedStrings.${r}`;
        ke(i, s, Sf(t.Strings, t));
        n.strs.push(s);
        Ne(t.wbrels, -1, `sharedStrings.${r}`, Fe.SST);
    }
    s = `xl/workbook.${r}`;
    ke(i, s, rc(e));
    n.workbooks.push(s);
    Ne(t.rels, 1, s, Fe.WB);
    s = "xl/theme/theme1.xml";
    ke(i, s, Wn(e.Themes, t));
    n.themes.push(s);
    Ne(t.wbrels, -1, "theme/theme1.xml", Fe.THEME);
    s = `xl/styles.${r}`;
    ke(i, s, Rf(e, t));
    n.styles.push(s);
    Ne(t.wbrels, -1, `styles.${r}`, Fe.STY);
    if (e.vbaraw && a) {
        s = "xl/vbaProject.bin";
        ke(i, s, e.vbaraw);
        n.vba.push(s);
        Ne(t.wbrels, -1, "vbaProject.bin", Fe.VBA);
    }
    s = `xl/metadata.${r}`;
    ke(i, s, Pf());
    n.metadata.push(s);
    Ne(t.wbrels, -1, `metadata.${r}`, Fe.XLMETA);
    if (l.length > 1) {
        s = "xl/persons/person.xml";
        ke(i, s, Rx(l));
        n.people.push(s);
        Ne(t.wbrels, -1, "persons/person.xml", Fe.PEOPLE);
    }
    ke(i, "[Content_Types].xml", Js(n, t));
    ke(i, "_rels/.rels", na(t.rels));
    ke(i, `xl/_rels/workbook.${r}.rels`, na(t.wbrels));
    delete t.revssf;
    delete t.ssf;
    return i;
}
function Jn(e, t) {
    let r = "";
    switch((t || {}).type || "base64"){
        case "buffer":
            return [
                e[0],
                e[1],
                e[2],
                e[3],
                e[4],
                e[5],
                e[6],
                e[7]
            ];
        case "base64":
            r = br(e.slice(0, 12));
            break;
        case "binary":
            r = e;
            break;
        case "array":
            return [
                e[0],
                e[1],
                e[2],
                e[3],
                e[4],
                e[5],
                e[6],
                e[7]
            ];
        default:
            throw new Error(`Unrecognized type ${t && t.type || "undefined"}`);
    }
    return [
        r.charCodeAt(0),
        r.charCodeAt(1),
        r.charCodeAt(2),
        r.charCodeAt(3),
        r.charCodeAt(4),
        r.charCodeAt(5),
        r.charCodeAt(6),
        r.charCodeAt(7)
    ];
}
function gg(e, t) {
    if (CFB.find(e, "EncryptedPackage")) {
        return vg(e, t);
    }
    return parse_xlscfb(e, t);
}
function _g(e, t) {
    let r;
    const a = e;
    const n = t || {};
    if (!n.type) {
        n.type = Te && Buffer.isBuffer(e) ? "buffer" : "base64";
    }
    r = Ds(a, n);
    return parse_zip(r, n);
}
function gc(e, t) {
    let r = 0;
    e: while(r < e.length){
        switch(e.charCodeAt(r)){
            case 10:
            case 13:
            case 32:
                ++r;
                break;
            case 60:
                return fn(e.slice(r), t);
            default:
                break e;
        }
    }
    return ca.to_workbook(e, t);
}
function wg(e, t) {
    let r = "";
    const a = Jn(e, t);
    switch(t.type){
        case "base64":
            r = br(e);
            break;
        case "binary":
            r = e;
            break;
        case "buffer":
            r = e.toString("binary");
            break;
        case "array":
            r = Ut(e);
            break;
        default:
            throw new Error(`Unrecognized type ${t.type}`);
    }
    if (a[0] == 239 && a[1] == 187 && a[2] == 191) {
        r = Le(r);
    }
    t.type = "binary";
    return gc(r, t);
}
function kg(e, t) {
    let r = e;
    if (t.type == "base64") {
        r = br(r);
    }
    r = De.utils.decode(1200, r.slice(2), "str");
    t.type = "binary";
    return gc(r, t);
}
function Eg(e) {
    if (e.match(/[^\x00-\x7F]/)) {
        return tt(e);
    }
    return e;
}
function J0(e, t, r, a) {
    if (a) {
        r.type = "string";
        return ca.to_workbook(e, r);
    }
    return ca.to_workbook(t, r);
}
export function read(e, t) {
    F0();
    let r = t || {};
    if (typeof ArrayBuffer !== "undefined" && e instanceof ArrayBuffer) {
        return read(new Uint8Array(e), (r = Me(r), r.type = "array", r));
    }
    if (typeof Uint8Array !== "undefined" && e instanceof Uint8Array && !r.type) {
        r.type = typeof Deno !== "undefined" ? "buffer" : "array";
    }
    let a = e;
    let n = [
        0,
        0,
        0,
        0
    ];
    let i = false;
    if (r.cellStyles) {
        r.cellNF = true;
        r.sheetStubs = true;
    }
    sa = {};
    if (r.dateNF) {
        sa.dateNF = r.dateNF;
    }
    if (!r.type) {
        r.type = Te && Buffer.isBuffer(e) ? "buffer" : "base64";
    }
    if (r.type == "file") {
        r.type = Te ? "buffer" : "binary";
        a = Eo(e);
        if (typeof Uint8Array !== "undefined" && !Te) {
            r.type = "array";
        }
    }
    if (r.type == "string") {
        i = true;
        r.type = "binary";
        r.codepage = 65001;
        a = Eg(e);
    }
    if (r.type == "array" && typeof Uint8Array !== "undefined" && e instanceof Uint8Array && typeof ArrayBuffer !== "undefined") {
        const s = new ArrayBuffer(3);
        const f = new Uint8Array(s);
        f.foo = "bar";
        if (!f.foo) {
            r = Me(r);
            r.type = "array";
            return read(hn(a), r);
        }
    }
    switch((n = Jn(a, r))[0]){
        case 208:
            if (n[1] === 207 && n[2] === 17 && n[3] === 224 && n[4] === 161 && n[5] === 177 && n[6] === 26 && n[7] === 225) {
                return gg(CFB.read(a, r), r);
            }
            break;
        case 9:
            if (n[1] <= 8) {
                return parse_xlscfb(a, r);
            }
            break;
        case 60:
            return fn(a, r);
        case 73:
            if (n[1] === 73 && n[2] === 42 && n[3] === 0) {
                throw new Error("TIFF Image File is not a spreadsheet");
            }
            if (n[1] === 68) {
                return Nh(a, r);
            }
            break;
        case 84:
            if (n[1] === 65 && n[2] === 66 && n[3] === 76) {
                return Ef.to_workbook(a, r);
            }
            break;
        case 80:
            if (n[1] === 75 && n[2] < 9 && n[3] < 9) {
                return _g(a, r);
            }
            return J0(e, a, r, i);
        case 239:
            if (n[3] === 60) {
                return fn(a, r);
            }
            return J0(e, a, r, i);
        case 255:
            if (n[1] === 254) {
                return kg(a, r);
            }
            if (n[1] === 0 && n[2] === 2 && n[3] === 0) {
                return Pt.to_workbook(a, r);
            }
            break;
        case 0:
            if (n[1] === 0 && (n[2] >= 2 && n[3] === 0 || n[2] === 0 && (n[3] === 8 || n[3] === 9))) {
                return Pt.to_workbook(a, r);
            }
            break;
        case 3:
        case 131:
        case 139:
        case 140:
            return sn.to_workbook(a, r);
        case 123:
            if (n[1] === 92 && n[2] === 114 && n[3] === 116) {
                return Df.to_workbook(a, r);
            }
            break;
        case 10:
        case 13:
        case 32:
            return wg(a, r);
        case 137:
            if (n[1] === 80 && n[2] === 78 && n[3] === 71) {
                throw new Error("PNG Image File is not a spreadsheet");
            }
            break;
    }
    if (Rh.indexOf(n[0]) > -1 && n[2] <= 12 && n[3] <= 31) {
        return sn.to_workbook(a, r);
    }
    return J0(e, a, r, i);
}
export function readFile(e, t) {
    const r = t || {};
    r.type = "file";
    return read(e, r);
}
function _c(e, t) {
    switch(t.type){
        case "base64":
        case "binary":
            break;
        case "buffer":
        case "array":
            t.type = "";
            break;
        case "file":
            return Ka(t.file, CFB.write(e, {
                type: Te ? "buffer" : ""
            }));
        case "string":
            throw new Error(`'string' output type invalid for '${t.bookType}' files`);
        default:
            throw new Error(`Unrecognized type ${t.type}`);
    }
    return CFB.write(e, t);
}
function Tg(e, t) {
    const r = Me(t || {});
    const a = pg(e, r);
    return wc(a, r);
}
function Sg(e, t) {
    const r = Me(t || {});
    const a = mc(e, r);
    return wc(a, r);
}
function wc(e, t) {
    const r = {};
    const a = Te ? "nodebuffer" : typeof Uint8Array !== "undefined" ? "array" : "string";
    if (t.compression) {
        r.compression = "DEFLATE";
    }
    if (t.password) {
        r.type = a;
    } else {
        switch(t.type){
            case "base64":
                r.type = "base64";
                break;
            case "binary":
                r.type = "string";
                break;
            case "string":
                throw new Error(`'string' output type invalid for '${t.bookType}' files`);
            case "buffer":
            case "file":
                r.type = a;
                break;
            default:
                throw new Error(`Unrecognized type ${t.type}`);
        }
    }
    let n = e.FullPaths ? CFB.write(e, {
        fileType: "zip",
        type: {
            nodebuffer: "buffer",
            string: "binary"
        }[r.type] || r.type,
        compression: !!t.compression
    }) : e.generate(r);
    if (typeof Deno !== "undefined" && typeof n === "string") {
        if (t.type == "binary" || t.type == "base64") {
            return n;
        }
        n = new Uint8Array(za(n));
    }
    if (t.password && typeof encrypt_agile !== "undefined") {
        return _c(encrypt_agile(n, t.password), t);
    }
    if (t.type === "file") {
        return Ka(t.file, n);
    }
    if (t.type == "string") {
        return Le(n);
    }
    return n;
}
function Fg(e, t) {
    const r = t || {};
    const a = Am(e, r);
    return _c(a, r);
}
function rt(e, t, r) {
    if (!r) {
        r = "";
    }
    const a = r + e;
    switch(t.type){
        case "base64":
            return Ra(tt(a));
        case "binary":
            return tt(a);
        case "string":
            return e;
        case "file":
            return Ka(t.file, a, "utf8");
        case "buffer":
            if (Te) {
                return xt(a, "utf8");
            }
            if (typeof TextEncoder !== "undefined") {
                return new TextEncoder().encode(a);
            }
            return rt(a, {
                type: "binary"
            }).split("").map((n)=>n.charCodeAt(0));
    }
    throw new Error(`Unrecognized type ${t.type}`);
}
function yg(e, t) {
    switch(t.type){
        case "base64":
            return Ra(e);
        case "binary":
            return e;
        case "string":
            return e;
        case "file":
            return Ka(t.file, e, "binary");
        case "buffer":
            if (Te) {
                return xt(e, "binary");
            }
            return e.split("").map((r)=>r.charCodeAt(0));
    }
    throw new Error(`Unrecognized type ${t.type}`);
}
function l0(e, t) {
    switch(t.type){
        case "string":
        case "base64":
        case "binary":
            let r = "";
            for(let a = 0; a < e.length; ++a){
                r += String.fromCharCode(e[a]);
            }
            if (t.type == "base64") {
                return Ra(r);
            }
            if (t.type == "string") {
                return Le(r);
            }
            return r;
        case "file":
            return Ka(t.file, e);
        case "buffer":
            return e;
        default:
            throw new Error(`Unrecognized type ${t.type}`);
    }
}
export function writeXLSX(e, t) {
    F0();
    ec(e);
    const r = Me(t || {});
    if (r.cellStyles) {
        r.cellNF = true;
        r.sheetStubs = true;
    }
    if (r.type == "array") {
        r.type = "binary";
        const a = writeXLSX(e, r);
        r.type = "array";
        return za(a);
    }
    return Sg(e, r);
}
export function write(e, t) {
    F0();
    ec(e);
    const r = Me(t || {});
    if (r.cellStyles) {
        r.cellNF = true;
        r.sheetStubs = true;
    }
    if (r.type == "array") {
        r.type = "binary";
        const a = write(e, r);
        r.type = "array";
        return za(a);
    }
    let n = 0;
    if (r.sheet && (typeof r.sheet === "number" ? n = r.sheet : n = e.SheetNames.indexOf(r.sheet), !e.SheetNames[n])) {
        throw new Error(`Sheet not found: ${r.sheet} : ${typeof r.sheet}`);
    }
    switch(r.bookType || "xlsb"){
        case "xml":
        case "xlml":
            return rt(wm(e, r), r);
        case "slk":
        case "sylk":
            return rt(kf.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
        case "htm":
        case "html":
            return rt(sheet_to_html(e.Sheets[e.SheetNames[n]], r), r);
        case "txt":
            return yg(sheet_to_txt(e.Sheets[e.SheetNames[n]], r), r);
        case "csv":
            return rt(sheet_to_csv(e.Sheets[e.SheetNames[n]], r), r, "\uFEFF");
        case "dif":
            return rt(Ef.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
        case "dbf":
            return l0(sn.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
        case "prn":
            return rt(ca.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
        case "rtf":
            return rt(Df.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
        case "eth":
            return rt(Tf.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
        case "fods":
            return rt(vc(e, r), r);
        case "wk1":
            return l0(Pt.sheet_to_wk1(e.Sheets[e.SheetNames[n]], r), r);
        case "wk3":
            return l0(Pt.book_to_wk3(e, r), r);
        case "biff2":
            if (!r.biff) {
                r.biff = 2;
            }
        case "biff3":
            if (!r.biff) {
                r.biff = 3;
            }
        case "biff4":
            if (!r.biff) {
                r.biff = 4;
            }
            return l0(sc(e, r), r);
        case "biff5":
            if (!r.biff) {
                r.biff = 5;
            }
        case "biff8":
        case "xla":
        case "xls":
            if (!r.biff) {
                r.biff = 8;
            }
            return Fg(e, r);
        case "xlsx":
        case "xlsm":
        case "xlam":
        case "xlsb":
        case "numbers":
        case "ods":
            return Tg(e, r);
        default:
            throw new Error(`Unrecognized bookType |${r.bookType}|`);
    }
}
function qn(e) {
    if (!e.bookType) {
        const t = {
            xls: "biff8",
            htm: "html",
            slk: "sylk",
            socialcalc: "eth",
            Sh33tJS: "WTF"
        };
        const r = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
        if (r.match(/^\.[a-z]+$/)) {
            e.bookType = r.slice(1);
        }
        e.bookType = t[e.bookType] || e.bookType;
    }
}
export function writeFile(e, t, r) {
    const a = r || {};
    a.type = "file";
    a.file = t;
    qn(a);
    return write(e, a);
}
export function writeFileXLSX(e, t, r) {
    const a = r || {};
    a.type = "file";
    a.file = t;
    qn(a);
    return writeXLSX(e, a);
}
export function writeFileAsync(e, t, r, a) {
    const n = r || {};
    n.type = "file";
    n.file = e;
    qn(n);
    n.type = "buffer";
    let i = a;
    if (!(i instanceof Function)) {
        i = r;
    }
    return Et.writeFile(e, write(t, n), i);
}
function Ec(e, t, r, a, n, i, s, f) {
    const c = encode_row(r);
    const f_defval = f.defval;
    const l = f.raw || !Object.prototype.hasOwnProperty.call(f, "raw");
    let isempty = true;
    const row = n === 1 ? [] : {};
    if (n !== 1) {
        if (Object.defineProperty) {
            try {
                Object.defineProperty(row, "__rowNum__", {
                    value: r,
                    enumerable: false
                });
            } catch  {
                row.__rowNum__ = r;
            }
        } else {
            row.__rowNum__ = r;
        }
    }
    if (!s || e[r]) {
        for(let d = t.s.c; d <= t.e.c; ++d){
            const v = s ? e[r][d] : e[a[d] + c];
            if (v === undefined || v.t === undefined) {
                if (f_defval === undefined) {
                    continue;
                }
                if (i[d] != null) {
                    row[i[d]] = f_defval;
                }
                continue;
            }
            let h = v.v;
            switch(v.t){
                case "z":
                    if (h == null) {
                        break;
                    }
                    continue;
                case "e":
                    h = h == 0 ? null : undefined;
                    break;
                case "s":
                case "d":
                case "b":
                case "n":
                    break;
                default:
                    throw new Error(`unrecognized type ${v.t}`);
            }
            if (i[d] != null) {
                if (h == null) {
                    if (v.t == "e" && h === null) {
                        row[i[d]] = null;
                    } else if (f_defval !== undefined) {
                        row[i[d]] = f_defval;
                    } else if (l && h === null) {
                        row[i[d]] = null;
                    } else {
                        continue;
                    }
                } else {
                    row[i[d]] = l && (v.t !== "n" || v.t === "n" && f.rawNumbers !== false) ? h : format_cell(v, h, f);
                }
                if (h != null) {
                    isempty = false;
                }
            }
        }
    }
    return {
        row,
        isempty
    };
}
function T0(e, t) {
    if (e == null || e["!ref"] == null) {
        return [];
    }
    let r = {
        t: "n",
        v: 0
    };
    let a = 0;
    let n = 1;
    const i = [];
    let s = 0;
    let f = "";
    let c = {
        s: {
            r: 0,
            c: 0
        },
        e: {
            r: 0,
            c: 0
        }
    };
    const o = t || {};
    const l = o.range ?? e["!ref"];
    if (o.header === 1) {
        a = 1;
    } else if (o.header === "A") {
        a = 2;
    } else if (Array.isArray(o.header)) {
        a = 3;
    } else if (o.header == null) {
        a = 0;
    }
    switch(typeof l){
        case "string":
            c = Ae(l);
            break;
        case "number":
            c = Ae(e["!ref"]);
            c.s.r = l;
            break;
        default:
            c = l;
    }
    if (a > 0) {
        n = 0;
    }
    const u = encode_row(c.s.r);
    const x = [];
    const d = [];
    let v = 0;
    let h = 0;
    const p = Array.isArray(e);
    let w = c.s.r;
    let y = 0;
    const g = {};
    if (p && !e[w]) {
        e[w] = [];
    }
    const D = o.skipHidden && e["!cols"] || [];
    const b = o.skipHidden && e["!rows"] || [];
    for(y = c.s.c; y <= c.e.c; ++y){
        if (!(D[y] || {}).hidden) {
            x[y] = encode_col(y);
            r = p ? e[w][y] : e[x[y] + u];
            switch(a){
                case 1:
                    i[y] = y - c.s.c;
                    break;
                case 2:
                    i[y] = x[y];
                    break;
                case 3:
                    i[y] = o.header[y - c.s.c];
                    break;
                default:
                    if (r == null) {
                        r = {
                            w: "__EMPTY",
                            t: "s"
                        };
                    }
                    f = s = format_cell(r, null, o);
                    h = g[s] || 0;
                    if (!h) {
                        g[s] = 1;
                    } else {
                        do {
                            f = `${s}_${h++}`;
                        }while (g[f])
                        g[s] = h;
                        g[f] = 1;
                    }
                    i[y] = f;
            }
        }
    }
    for(w = c.s.r + n; w <= c.e.r; ++w){
        if (!(b[w] || {}).hidden) {
            const N = Ec(e, c, w, x, a, i, p, o);
            if (N.isempty === false || (a === 1 ? o.blankrows !== false : o.blankrows)) {
                d[v++] = N.row;
            }
        }
    }
    d.length = v;
    return d;
}
const hs = /"/g;
function Tc(e, t, r, a, n, i, s, f) {
    let c = true;
    const o = [];
    let l = "";
    const u = encode_row(r);
    for(let x = t.s.c; x <= t.e.c; ++x){
        if (a[x]) {
            const d = f.dense ? (e[r] || [])[x] : e[a[x] + u];
            if (d == null) {
                l = "";
            } else if (d.v != null) {
                c = false;
                l = `${f.rawNumbers && d.t == "n" ? d.v : format_cell(d, null, f)}`;
                for(let v = 0, h = 0; v !== l.length; ++v){
                    if ((h = l.charCodeAt(v)) === n || h === i || h === 34 || f.forceQuotes) {
                        l = `"${l.replace(hs, '""')}"`;
                        break;
                    }
                }
                if (l == "ID") {
                    l = '"ID"';
                }
            } else {
                if (d.f != null && !d.F) {
                    c = false;
                    l = `=${d.f}`;
                    if (l.indexOf(",") >= 0) {
                        l = `"${l.replace(hs, '""')}"`;
                    }
                } else {
                    l = "";
                }
            }
            o.push(l);
        }
    }
    if (f.blankrows === false && c) {
        return null;
    }
    return o.join(s);
}
function sheet_to_csv(e, t) {
    const r = [];
    const a = t ?? {};
    if (e == null || e["!ref"] == null) {
        return "";
    }
    const n = Ae(e["!ref"]);
    const i = a.FS !== undefined ? a.FS : ",";
    const s = i.charCodeAt(0);
    const f = a.RS !== undefined ? a.RS : `
`;
    const c = f.charCodeAt(0);
    const o = new RegExp(`${i == "|" ? "\\|" : i}+\$`);
    let l = "";
    const u = [];
    a.dense = Array.isArray(e);
    const x = a.skipHidden && e["!cols"] || [];
    const d = a.skipHidden && e["!rows"] || [];
    for(let v = n.s.c; v <= n.e.c; ++v){
        if (!(x[v] || {}).hidden) {
            u[v] = encode_col(v);
        }
    }
    let h = 0;
    for(let p = n.s.r; p <= n.e.r; ++p){
        if (!(d[p] || {}).hidden) {
            l = Tc(e, n, p, u, s, c, i, a);
            l != null && (a.strip && (l = l.replace(o, "")), (l || a.blankrows !== false) && r.push((h++ ? f : "") + l));
        }
    }
    delete a.dense;
    return r.join("");
}
function sheet_to_txt(e, t) {
    if (!t) {
        t = {};
    }
    t.FS = "	";
    t.RS = `
`;
    const r = sheet_to_csv(e, t);
    if (typeof De === "undefined" || t.type == "string") {
        return r;
    }
    const a = De.utils.encode(1200, r, "str");
    return `ÿþ${a}`;
}
function sheet_to_formulae(e) {
    let t = "";
    let r;
    let a = "";
    if (e == null || e["!ref"] == null) {
        return [];
    }
    const n = Ae(e["!ref"]);
    let i = "";
    const s = [];
    let f;
    const c = [];
    const o = Array.isArray(e);
    for(f = n.s.c; f <= n.e.c; ++f){
        s[f] = encode_col(f);
    }
    for(let l = n.s.r; l <= n.e.r; ++l){
        i = encode_row(l);
        for(f = n.s.c; f <= n.e.c; ++f){
            t = s[f] + i;
            r = o ? (e[l] || [])[f] : e[t];
            a = "";
            if (r !== undefined) {
                if (r.F != null) {
                    t = r.F;
                    if (!r.f) {
                        continue;
                    }
                    a = r.f;
                    if (t.indexOf(":") == -1) {
                        t = `${t}:${t}`;
                    }
                }
                if (r.f != null) {
                    a = r.f;
                } else {
                    if (r.t == "z") {
                        continue;
                    }
                    if (r.t == "n" && r.v != null) {
                        a = `${r.v}`;
                    } else if (r.t == "b") {
                        a = r.v ? "TRUE" : "FALSE";
                    } else if (r.w !== undefined) {
                        a = `'${r.w}`;
                    } else {
                        if (r.v === undefined) {
                            continue;
                        }
                        if (r.t == "s") {
                            a = `'${r.v}`;
                        } else {
                            a = `${r.v}`;
                        }
                    }
                }
                c[c.length] = `${t}=${a}`;
            }
        }
    }
    return c;
}
function sheet_add_json(e, t, r) {
    const a = r || {};
    const n = +!a.skipHeader;
    const i = e || {};
    let s = 0;
    let f = 0;
    if (i && a.origin != null) {
        if (typeof a.origin === "number") {
            s = a.origin;
        } else {
            const c = typeof a.origin === "string" ? decode_cell(a.origin) : a.origin;
            s = c.r;
            f = c.c;
        }
    }
    let o;
    const l = {
        s: {
            c: 0,
            r: 0
        },
        e: {
            c: f,
            r: s + t.length - 1 + n
        }
    };
    if (i["!ref"]) {
        const u = Ae(i["!ref"]);
        l.e.c = Math.max(l.e.c, u.e.c);
        l.e.r = Math.max(l.e.r, u.e.r);
        if (s == -1) {
            s = u.e.r + 1;
            l.e.r = s + t.length - 1 + n;
        }
    } else {
        if (s == -1) {
            s = 0;
            l.e.r = t.length - 1 + n;
        }
    }
    const x = a.header || [];
    let d = 0;
    t.forEach((h, p)=>{
        je(h).forEach((w)=>{
            if ((d = x.indexOf(w)) == -1) {
                x[d = x.length] = w;
            }
            let y = h[w];
            let g = "z";
            let D = "";
            const b = encode_cell({
                c: f + d,
                r: s + p + n
            });
            o = sheet_get_cell(i, b);
            if (y && typeof y === "object" && !(y instanceof Date)) {
                i[b] = y;
            } else {
                if (typeof y === "number") {
                    g = "n";
                } else if (typeof y === "boolean") {
                    g = "b";
                } else if (typeof y === "string") {
                    g = "s";
                } else if (y instanceof Date) {
                    g = "d";
                    if (!a.cellDates) {
                        g = "n";
                        y = ir(y);
                    }
                    D = a.dateNF || _table[14];
                } else if (y === null && a.nullError) {
                    g = "e";
                    y = 0;
                }
                if (o) {
                    o.t = g;
                    o.v = y;
                    delete o.w;
                    delete o.R;
                    if (D) {
                        o.z = D;
                    }
                } else {
                    i[b] = o = {
                        t: g,
                        v: y
                    };
                }
                if (D) {
                    o.z = D;
                }
            }
        });
    });
    l.e.c = Math.max(l.e.c, f + x.length - 1);
    const v = encode_row(s);
    if (n) {
        for(d = 0; d < x.length; ++d){
            i[encode_col(d + f) + v] = {
                t: "s",
                v: x[d]
            };
        }
    }
    i["!ref"] = encode_range(l);
    return i;
}
function json_to_sheet(e, t) {
    return sheet_add_json(null, e, t);
}
function sheet_get_cell(e, t, r) {
    if (typeof t === "string") {
        if (Array.isArray(e)) {
            const a = decode_cell(t);
            if (!e[a.r]) {
                e[a.r] = [];
            }
            return e[a.r][a.c] || (e[a.r][a.c] = {
                t: "z"
            });
        }
        return e[t] || (e[t] = {
            t: "z"
        });
    }
    if (typeof t !== "number") {
        return sheet_get_cell(e, encode_cell(t));
    }
    return sheet_get_cell(e, encode_cell({
        r: t,
        c: r || 0
    }));
}
function Dg(e, t) {
    if (typeof t === "number") {
        if (t >= 0 && e.SheetNames.length > t) {
            return t;
        }
        throw new Error(`Cannot find sheet # ${t}`);
    } else if (typeof t === "string") {
        const r = e.SheetNames.indexOf(t);
        if (r > -1) {
            return r;
        }
        throw new Error(`Cannot find sheet name |${t}|`);
    } else {
        throw new Error(`Cannot find sheet |${t}|`);
    }
}
function book_new() {
    return {
        SheetNames: [],
        Sheets: {}
    };
}
function book_append_sheet(e, t, r, a) {
    let n = 1;
    if (!r) {
        for(; n <= 65535 && e.SheetNames.indexOf(r = `Sheet${n}`) != -1; ++n, r = undefined);
    }
    if (!r || e.SheetNames.length >= 65535) {
        throw new Error("Too many worksheets");
    }
    if (a && e.SheetNames.indexOf(r) >= 0) {
        const i = r.match(/(^.*?)(\d+)$/);
        n = i && +i[2] || 0;
        const s = i && i[1] || r;
        for(++n; n <= 65535 && e.SheetNames.indexOf(r = s + n) != -1; ++n);
    }
    Qf(r);
    if (e.SheetNames.indexOf(r) >= 0) {
        throw new Error(`Worksheet with name |${r}| already exists!`);
    }
    e.SheetNames.push(r);
    e.Sheets[r] = t;
    return r;
}
function book_set_sheet_visibility(e, t, r) {
    if (!e.Workbook) {
        e.Workbook = {};
    }
    if (!e.Workbook.Sheets) {
        e.Workbook.Sheets = [];
    }
    const a = Dg(e, t);
    if (!e.Workbook.Sheets[a]) {
        e.Workbook.Sheets[a] = {};
    }
    switch(r){
        case 0:
        case 1:
        case 2:
            break;
        default:
            throw new Error(`Bad sheet visibility setting ${r}`);
    }
    e.Workbook.Sheets[a].Hidden = r;
}
function cell_set_number_format(e, t) {
    e.z = t;
    return e;
}
function cell_set_hyperlink(e, t, r) {
    if (t) {
        e.l = {
            Target: t
        };
        if (r) {
            e.l.Tooltip = r;
        }
    } else {
        delete e.l;
    }
    return e;
}
function cell_set_internal_link(e, t, r) {
    return cell_set_hyperlink(e, `#${t}`, r);
}
function cell_add_comment(e, t, r) {
    if (!e.c) {
        e.c = [];
    }
    e.c.push({
        t,
        a: r || "SheetJS"
    });
}
function sheet_set_array_formula(e, t, r, a) {
    for(let n = typeof t !== "string" ? t : Ae(t), i = typeof t === "string" ? t : encode_range(t), s = n.s.r; s <= n.e.r; ++s){
        for(let f = n.s.c; f <= n.e.c; ++f){
            const c = sheet_get_cell(e, s, f);
            c.t = "n";
            c.F = i;
            delete c.v;
            if (s == n.s.r && f == n.s.c) {
                c.f = r;
                if (a) {
                    c.D = true;
                }
            }
        }
    }
    return e;
}
export const utils = {
    encode_col,
    encode_row,
    encode_cell,
    encode_range,
    decode_col,
    decode_row,
    split_cell,
    decode_cell,
    decode_range,
    format_cell,
    sheet_add_aoa,
    sheet_add_json,
    sheet_add_dom,
    aoa_to_sheet,
    json_to_sheet,
    table_to_sheet,
    table_to_book,
    sheet_to_csv,
    sheet_to_txt,
    sheet_to_json: T0,
    sheet_to_html,
    sheet_to_formulae,
    sheet_to_row_object_array: T0,
    sheet_get_cell,
    book_new,
    book_append_sheet,
    book_set_sheet_visibility,
    cell_set_number_format,
    cell_set_hyperlink,
    cell_set_internal_link,
    cell_add_comment,
    sheet_set_array_formula,
    consts: {
        SHEET_VISIBLE: 0,
        SHEET_HIDDEN: 1,
        SHEET_VERY_HIDDEN: 2
    }
};
let b0;
function set_readable(e) {
    b0 = e;
}
function to_csv(e, t) {
    const r = b0();
    const a = t ?? {};
    if (e == null || e["!ref"] == null) {
        r.push(null);
        return r;
    }
    const n = Ae(e["!ref"]);
    const i = a.FS !== undefined ? a.FS : ",";
    const s = i.charCodeAt(0);
    const f = a.RS !== undefined ? a.RS : `
`;
    const c = f.charCodeAt(0);
    const o = new RegExp(`${i == "|" ? "\\|" : i}+\$`);
    let l = "";
    const u = [];
    a.dense = Array.isArray(e);
    const x = a.skipHidden && e["!cols"] || [];
    const d = a.skipHidden && e["!rows"] || [];
    for(let v = n.s.c; v <= n.e.c; ++v){
        if (!(x[v] || {}).hidden) {
            u[v] = encode_col(v);
        }
    }
    let h = n.s.r;
    let p = false;
    let w = 0;
    r._read = ()=>{
        if (!p) {
            p = true;
            return r.push("\uFEFF");
        }
        while(h <= n.e.r){
            ++h;
            if (!(d[h - 1] || {}).hidden && (l = Tc(e, n, h - 1, u, s, c, i, a), l != null && (a.strip && (l = l.replace(o, "")), l || a.blankrows !== false))) {
                return r.push((w++ ? f : "") + l);
            }
        }
        return r.push(null);
    };
    return r;
}
function to_html(e, t) {
    const r = b0();
    const a = t || {};
    const n = a.header ?? cc;
    const i = a.footer ?? oc;
    r.push(n);
    const s = decode_range(e["!ref"]);
    a.dense = Array.isArray(e);
    r.push(lc(e, s, a));
    let f = s.s.r;
    let c = false;
    r._read = ()=>{
        if (f > s.e.r) {
            if (!c) {
                c = true;
                r.push(`</table>${i}`);
            }
            return r.push(null);
        }
        while(f <= s.e.r){
            r.push(fc(e, s, f, a));
            ++f;
            break;
        }
    };
    return r;
}
function to_json(e, t) {
    const r = b0({
        objectMode: true
    });
    if (e == null || e["!ref"] == null) {
        r.push(null);
        return r;
    }
    let a = {
        t: "n",
        v: 0
    };
    let n = 0;
    let i = 1;
    const s = [];
    let f = 0;
    let c = "";
    let o = {
        s: {
            r: 0,
            c: 0
        },
        e: {
            r: 0,
            c: 0
        }
    };
    const l = t || {};
    const u = l.range ?? e["!ref"];
    if (l.header === 1) {
        n = 1;
    } else if (l.header === "A") {
        n = 2;
    } else if (Array.isArray(l.header)) {
        n = 3;
    }
    switch(typeof u){
        case "string":
            o = Ae(u);
            break;
        case "number":
            o = Ae(e["!ref"]);
            o.s.r = u;
            break;
        default:
            o = u;
    }
    if (n > 0) {
        i = 0;
    }
    const x = encode_row(o.s.r);
    const d = [];
    let v = 0;
    const h = Array.isArray(e);
    let p = o.s.r;
    let w = 0;
    const y = {};
    if (h && !e[p]) {
        e[p] = [];
    }
    const g = l.skipHidden && e["!cols"] || [];
    const D = l.skipHidden && e["!rows"] || [];
    for(w = o.s.c; w <= o.e.c; ++w){
        if (!(g[w] || {}).hidden) {
            d[w] = encode_col(w);
            a = h ? e[p][w] : e[d[w] + x];
            switch(n){
                case 1:
                    s[w] = w - o.s.c;
                    break;
                case 2:
                    s[w] = d[w];
                    break;
                case 3:
                    s[w] = l.header[w - o.s.c];
                    break;
                default:
                    if (a == null) {
                        a = {
                            w: "__EMPTY",
                            t: "s"
                        };
                    }
                    c = f = format_cell(a, null, l);
                    v = y[f] || 0;
                    if (!v) {
                        y[f] = 1;
                    } else {
                        do {
                            c = `${f}_${v++}`;
                        }while (y[c])
                        y[f] = v;
                        y[c] = 1;
                    }
                    s[w] = c;
            }
        }
    }
    p = o.s.r + i;
    r._read = ()=>{
        while(p <= o.e.r){
            if (!(D[p - 1] || {}).hidden) {
                const b = Ec(e, o, p, d, n, s, h, l);
                ++p;
                if (b.isempty === false || (n === 1 ? l.blankrows !== false : l.blankrows)) {
                    r.push(b.row);
                    return;
                }
            }
        }
        return r.push(null);
    };
    return r;
}
export const stream = {
    to_json,
    to_html,
    to_csv,
    set_readable
};
export const version = Ia.version;
export { readFile as readFileSync, writeFile as writeFileSync };
