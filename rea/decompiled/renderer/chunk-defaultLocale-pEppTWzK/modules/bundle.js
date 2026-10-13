!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "7ec2a1ea-26af-4ff9-96d4-6d8c48029555";
            e._sentryDebugIdIdentifier = "sentry-dbid-7ec2a1ea-26af-4ff9-96d4-6d8c48029555";
        }
    } catch (e) {}
})();
function d(n) {
    if (Math.abs(n = Math.round(n)) >= 1e+21) {
        return n.toLocaleString("en").replace(/,/g, "");
    }
    return n.toString(10);
}
function j(n, t) {
    if ((e = (n = t ? n.toExponential(t - 1) : n.toExponential()).indexOf("e")) < 0) {
        return null;
    }
    var e;
    const i = n.slice(0, e);
    return [
        i.length > 1 ? i[0] + i.slice(2) : i,
        +n.slice(e + 1)
    ];
}
function J(n) {
    n = j(Math.abs(n));
    if (n) {
        return n[1];
    }
    return NaN;
}
function K(n, t) {
    return (e, i)=>{
        for(var o = e.length, f = [], c = 0, u = n[0], p = 0; o > 0 && u > 0 && (p + u + 1 > i && (u = Math.max(1, i - p)), f.push(e.substring(o -= u, o + u)), !((p += u + 1) > i));){
            u = n[c = (c + 1) % n.length];
        }
        return f.reverse().join(t);
    };
}
function Q(n) {
    return (t)=>t.replace(/[0-9]/g, (e)=>n[+e]);
}
const V = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function N(n) {
    if (!(t = V.exec(n))) {
        throw new Error(`invalid format: ${n}`);
    }
    var t;
    return new $({
        fill: t[1],
        align: t[2],
        sign: t[3],
        symbol: t[4],
        zero: t[5],
        width: t[6],
        comma: t[7],
        precision: t[8] && t[8].slice(1),
        trim: t[9],
        type: t[10]
    });
}
N.prototype = $.prototype;
function $(n) {
    this.fill = n.fill === undefined ? " " : `${n.fill}`;
    this.align = n.align === undefined ? ">" : `${n.align}`;
    this.sign = n.sign === undefined ? "-" : `${n.sign}`;
    this.symbol = n.symbol === undefined ? "" : `${n.symbol}`;
    this.zero = !!n.zero;
    this.width = n.width === undefined ? undefined : +n.width;
    this.comma = !!n.comma;
    this.precision = n.precision === undefined ? undefined : +n.precision;
    this.trim = !!n.trim;
    this.type = n.type === undefined ? "" : `${n.type}`;
}
$.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : `.${Math.max(0, this.precision | 0)}`) + (this.trim ? "~" : "") + this.type;
};
function W(n) {
    n: for(var t = n.length, e = 1, i = -1, o; e < t; ++e){
        switch(n[e]){
            case ".":
                o = e;
                i = e;
                break;
            case "0":
                if (i === 0) {
                    i = e;
                }
                o = e;
                break;
            default:
                if (!+n[e]) {
                    break n;
                }
                if (i > 0) {
                    i = 0;
                }
                break;
        }
    }
    if (i > 0) {
        return n.slice(0, i) + n.slice(o + 1);
    }
    return n;
}
let U;
function s(n, t) {
    const e = j(n, t);
    if (!e) {
        return `${n}`;
    }
    const i = e[0];
    const o = e[1];
    const f = o - (U = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1;
    const i_length = i.length;
    if (f === i_length) {
        return i;
    }
    if (f > i_length) {
        return i + new Array(f - i_length + 1).join("0");
    }
    if (f > 0) {
        return `${i.slice(0, f)}.${i.slice(f)}`;
    }
    return `0.${new Array(1 - f).join("0")}${j(n, Math.max(0, t + f - 1))[0]}`;
}
function r(n, t) {
    const e = j(n, t);
    if (!e) {
        return `${n}`;
    }
    const i = e[0];
    const o = e[1];
    if (o < 0) {
        return `0.${new Array(-o).join("0")}${i}`;
    }
    if (i.length > o + 1) {
        return `${i.slice(0, o + 1)}.${i.slice(o + 1)}`;
    }
    return i + new Array(o - i.length + 2).join("0");
}
const I = {
    "%": (n, t)=>(n * 100).toFixed(t),
    b: (n)=>Math.round(n).toString(2),
    c: (n)=>`${n}`,
    d,
    e: (n, t)=>n.toExponential(t),
    f: (n, t)=>n.toFixed(t),
    g: (n, t)=>n.toPrecision(t),
    o: (n)=>Math.round(n).toString(8),
    p: (n, t)=>r(n * 100, t),
    r,
    s,
    X: (n)=>Math.round(n).toString(16).toUpperCase(),
    x: (n)=>Math.round(n).toString(16)
};
function X(n) {
    return n;
}
const map = Array.prototype.map;
const R = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y"
];
function v(n) {
    const t = n.grouping === undefined || n.thousands === undefined ? X : K(map.call(n.grouping, Number), `${n.thousands}`);
    const e = n.currency === undefined ? "" : `${n.currency[0]}`;
    const i = n.currency === undefined ? "" : `${n.currency[1]}`;
    const o = n.decimal === undefined ? "." : `${n.decimal}`;
    const f = n.numerals === undefined ? X : Q(map.call(n.numerals, String));
    const c = n.percent === undefined ? "%" : `${n.percent}`;
    const u = n.minus === undefined ? "−" : `${n.minus}`;
    const p = n.nan === undefined ? "NaN" : `${n.nan}`;
    function format(a) {
        a = N(a);
        let a_fill = a.fill;
        let a_align = a.align;
        const { sign, symbol } = a;
        let a_zero = a.zero;
        const a_width = a.width;
        let a_comma = a.comma;
        let a_precision = a.precision;
        let a_trim = a.trim;
        let a_type = a.type;
        if (a_type === "n") {
            a_comma = true;
            a_type = "g";
        } else if (!I[a_type]) {
            if (a_precision === undefined) {
                a_precision = 12;
            }
            a_trim = true;
            a_type = "g";
        }
        if (a_zero || a_fill === "0" && a_align === "=") {
            a_zero = true;
            a_fill = "0";
            a_align = "=";
        }
        const Z = symbol === "$" ? e : symbol === "#" && /[boxX]/.test(a_type) ? `0${a_type.toLowerCase()}` : "";
        const q = symbol === "$" ? i : /[%p]/.test(a_type) ? c : "";
        const T = I[a_type];
        const B = /[defgprs%]/.test(a_type);
        a_precision = a_precision === undefined ? 6 : /[gprs]/.test(a_type) ? Math.max(1, Math.min(21, a_precision)) : Math.max(0, Math.min(20, a_precision));
        function C(r) {
            let y = Z;
            let h = q;
            let b;
            let D;
            let k;
            if (a_type === "c") {
                h = T(r) + h;
                r = "";
            } else {
                r = +r;
                let P = r < 0 || 1 / r < 0;
                r = isNaN(r) ? p : T(Math.abs(r), a_precision);
                if (a_trim) {
                    r = W(r);
                }
                if (P && +r == 0 && sign !== "+") {
                    P = false;
                }
                y = (P ? sign === "(" ? sign : u : sign === "-" || sign === "(" ? "" : sign) + y;
                h = (a_type === "s" ? R[8 + U / 3] : "") + h + (P && sign === "(" ? ")" : "");
                if (B) {
                    b = -1;
                    for(D = r.length; ++b < D;){
                        k = r.charCodeAt(b);
                        if (k < 48 || k > 57) {
                            h = (k === 46 ? o + r.slice(b + 1) : r.slice(b)) + h;
                            r = r.slice(0, b);
                            break;
                        }
                    }
                }
            }
            if (a_comma && !a_zero) {
                r = t(r, Infinity);
            }
            let z = y.length + r.length + h.length;
            let s = z < a_width ? new Array(a_width - z + 1).join(a_fill) : "";
            if (a_comma && a_zero) {
                r = t(s + r, s.length ? a_width - h.length : Infinity);
                s = "";
            }
            switch(a_align){
                case "<":
                    r = y + r + h + s;
                    break;
                case "=":
                    r = y + s + r + h;
                    break;
                case "^":
                    r = s.slice(0, z = s.length >> 1) + y + r + h + s.slice(z);
                    break;
                default:
                    r = s + y + r + h;
                    break;
            }
            return f(r);
        }
        C.toString = ()=>`${a}`;
        return C;
    }
    function formatPrefix(a, x) {
        const M = format((a = N(a), a.type = "f", a));
        const m = Math.max(-8, Math.min(8, Math.floor(J(x) / 3))) * 3;
        const w = 10 ** -m;
        const l = R[8 + m / 3];
        return (S)=>M(w * S) + l;
    }
    return {
        format,
        formatPrefix
    };
}
let A;
let nn;
let tn;
rn({
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ]
});
function rn(n) {
    A = v(n);
    nn = A.format;
    tn = A.formatPrefix;
    return A;
}
export { tn as a, nn as b, J as e, N as f };
