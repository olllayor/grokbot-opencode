!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "69c4665f-0b40-40ac-8498-6e89ba1c95c2";
            e._sentryDebugIdIdentifier = "sentry-dbid-69c4665f-0b40-40ac-8498-6e89ba1c95c2";
        }
    } catch (e) {}
})();
export class ParseError extends Error {
    constructor(e, t){
        var a = `KaTeX parse error: ${e}`;
        var n;
        var l;
        var u = t && t.loc;
        if (u && u.start <= u.end) {
            var h = u.lexer.input;
            n = u.start;
            l = u.end;
            if (n === h.length) {
                a += " at end of input: ";
            } else {
                a += ` at position ${n + 1}: `;
            }
            var c = h.slice(n, l).replace(/[^]/g, "$&̲");
            var v;
            if (n > 15) {
                v = `…${h.slice(n - 15, n)}`;
            } else {
                v = h.slice(0, n);
            }
            var g;
            if (l + 15 < h.length) {
                g = `${h.slice(l, l + 15)}…`;
            } else {
                g = h.slice(l);
            }
            a += v + c + g;
        }
        super(a);
        this.name = "ParseError";
        Object.setPrototypeOf(this, ParseError.prototype);
        this.position = n;
        if (n != null && l != null) {
            this.length = l - n;
        }
        this.rawMessage = e;
    }
}
const I1 = /([A-Z])/g;
const Tt = (r)=>r.replace(I1, "-$1").toLowerCase();
const N1 = {
    "&": "&amp;",
    ">": "&gt;",
    "<": "&lt;",
    '"': "&quot;",
    "'": "&#x27;"
};
const O1 = /[&><"']/g;
const n0 = (r)=>String(r).replace(O1, (e)=>N1[e]);
const De = (r)=>{
    if (r.type === "ordgroup" || r.type === "color") {
        if (r.body.length === 1) {
            return De(r.body[0]);
        }
        return r;
    }
    if (r.type === "font") {
        return De(r.body);
    }
    return r;
};
const H1 = new Set([
    "mathord",
    "textord",
    "atom"
]);
const C0 = (r)=>H1.has(De(r).type);
const F1 = (url)=>{
    var e = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(url);
    if (e) {
        if (e[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1])) {
            return null;
        }
        return e[1].toLowerCase();
    }
    return "_relative";
};
export const SETTINGS_SCHEMA = {
    displayMode: {
        type: "boolean",
        description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
        cli: "-d, --display-mode"
    },
    output: {
        type: {
            enum: [
                "htmlAndMathml",
                "html",
                "mathml"
            ]
        },
        description: "Determines the markup language of the output.",
        cli: "-F, --format <type>"
    },
    leqno: {
        type: "boolean",
        description: "Render display math in leqno style (left-justified tags)."
    },
    fleqn: {
        type: "boolean",
        description: "Render display math flush left."
    },
    throwOnError: {
        type: "boolean",
        default: true,
        cli: "-t, --no-throw-on-error",
        cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
    },
    errorColor: {
        type: "string",
        default: "#cc0000",
        cli: "-c, --error-color <color>",
        cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
        cliProcessor: (r)=>`#${r}`
    },
    macros: {
        type: "object",
        cli: "-m, --macro <def>",
        cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
        cliDefault: [],
        cliProcessor: (r, e)=>{
            e.push(r);
            return e;
        }
    },
    minRuleThickness: {
        type: "number",
        description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
        processor: (r)=>Math.max(0, r),
        cli: "--min-rule-thickness <size>",
        cliProcessor: parseFloat
    },
    colorIsTextColor: {
        type: "boolean",
        description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
        cli: "-b, --color-is-text-color"
    },
    strict: {
        type: [
            {
                enum: [
                    "warn",
                    "ignore",
                    "error"
                ]
            },
            "boolean",
            "function"
        ],
        description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
        cli: "-S, --strict",
        cliDefault: false
    },
    trust: {
        type: [
            "boolean",
            "function"
        ],
        description: "Trust the input, enabling all HTML features such as \\url.",
        cli: "-T, --trust"
    },
    maxSize: {
        type: "number",
        default: Infinity,
        description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
        processor: (r)=>Math.max(0, r),
        cli: "-s, --max-size <n>",
        cliProcessor: parseInt
    },
    maxExpand: {
        type: "number",
        default: 1000,
        description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
        processor: (r)=>Math.max(0, r),
        cli: "-e, --max-expand <n>",
        cliProcessor: (r)=>{
            if (r === "Infinity") {
                return Infinity;
            }
            return parseInt(r);
        }
    },
    globalGroup: {
        type: "boolean",
        cli: false
    }
};
function L1(r) {
    if ("default" in r) {
        return r.default;
    }
    const r_type = r.type;
    const t = Array.isArray(r_type) ? r_type[0] : r_type;
    if (typeof t !== "string") {
        return t.enum[0];
    }
    switch(t){
        case "boolean":
            return false;
        case "string":
            return "";
        case "number":
            return 0;
        case "object":
            return {};
    }
}
class Bt {
    constructor(e){
        if (e === undefined) {
            e = {};
        }
        e = e || {};
        for (var t of Object.keys(SETTINGS_SCHEMA)){
            var a = SETTINGS_SCHEMA[t];
            var n = e[t];
            this[t] = n !== undefined ? a.processor ? a.processor(n) : n : L1(a);
        }
    }
    reportNonstrict(e, t, a) {
        let strict = this.strict;
        if (typeof strict === "function") {
            strict = strict(e, t, a);
        }
        if (!(!strict || strict === "ignore")) {
            if (strict === true || strict === "error") {
                throw new ParseError(`LaTeX-incompatible input and strict mode is set to 'error': ${`${t} [${e}]`}`, a);
            }
            strict === "warn" ? typeof console !== "undefined" && console.warn(`LaTeX-incompatible input and strict mode is set to 'warn': ${`${t} [${e}]`}`) : typeof console !== "undefined" && console.warn(`LaTeX-incompatible input and strict mode is set to ${`unrecognized '${strict}': ${t} [${e}]`}`);
        }
    }
    useStrictBehavior(e, t, a) {
        let strict = this.strict;
        if (typeof strict === "function") {
            try {
                strict = strict(e, t, a);
            } catch  {
                strict = "error";
            }
        }
        if (!strict || strict === "ignore") {
            return false;
        }
        if (strict === true || strict === "error") {
            return true;
        }
        if (strict === "warn") {
            if (typeof console !== "undefined") {
                console.warn(`LaTeX-incompatible input and strict mode is set to 'warn': ${`${t} [${e}]`}`);
            }
            return false;
        }
        if (typeof console !== "undefined") {
            console.warn(`LaTeX-incompatible input and strict mode is set to ${`unrecognized '${strict}': ${t} [${e}]`}`);
        }
        return false;
    }
    isTrusted(e) {
        if ("url" in e && e.url && !e.protocol) {
            const t = F1(e.url);
            if (t == null) {
                return false;
            }
            e.protocol = t;
        }
        const a = typeof this.trust === "function" ? this.trust(e) : this.trust;
        return !!a;
    }
}
class O0 {
    constructor(e, t, a){
        this.id = e;
        this.size = t;
        this.cramped = a;
    }
    sup() {
        return w0[P1[this.id]];
    }
    sub() {
        return w0[G1[this.id]];
    }
    fracNum() {
        return w0[U1[this.id]];
    }
    fracDen() {
        return w0[V1[this.id]];
    }
    cramp() {
        return w0[X1[this.id]];
    }
    text() {
        return w0[Y1[this.id]];
    }
    isTight() {
        return this.size >= 2;
    }
}
const Dt = 0;
const qe = 1;
const _0 = 2;
const B0 = 3;
const he = 4;
const g0 = 5;
const ee = 6;
const u0 = 7;
var w0 = [
    new O0(Dt, 0, false),
    new O0(qe, 0, true),
    new O0(_0, 1, false),
    new O0(B0, 1, true),
    new O0(he, 2, false),
    new O0(g0, 2, true),
    new O0(ee, 3, false),
    new O0(u0, 3, true)
];
var P1 = [
    he,
    g0,
    he,
    g0,
    ee,
    u0,
    ee,
    u0
];
var G1 = [
    g0,
    g0,
    g0,
    g0,
    u0,
    u0,
    u0,
    u0
];
var U1 = [
    _0,
    B0,
    he,
    g0,
    ee,
    u0,
    ee,
    u0
];
var V1 = [
    B0,
    B0,
    g0,
    g0,
    u0,
    u0,
    u0,
    u0
];
var X1 = [
    qe,
    qe,
    B0,
    B0,
    g0,
    g0,
    u0,
    u0
];
var Y1 = [
    Dt,
    qe,
    _0,
    B0,
    _0,
    B0,
    _0,
    B0
];
const N = {
    DISPLAY: w0[Dt],
    TEXT: w0[_0],
    SCRIPT: w0[he],
    SCRIPTSCRIPT: w0[ee]
};
const ft = [
    {
        name: "latin",
        blocks: [
            [
                256,
                591
            ],
            [
                768,
                879
            ]
        ]
    },
    {
        name: "cyrillic",
        blocks: [
            [
                1024,
                1279
            ]
        ]
    },
    {
        name: "armenian",
        blocks: [
            [
                1328,
                1423
            ]
        ]
    },
    {
        name: "brahmic",
        blocks: [
            [
                2304,
                4255
            ]
        ]
    },
    {
        name: "georgian",
        blocks: [
            [
                4256,
                4351
            ]
        ]
    },
    {
        name: "cjk",
        blocks: [
            [
                12288,
                12543
            ],
            [
                19968,
                40879
            ],
            [
                65280,
                65376
            ]
        ]
    },
    {
        name: "hangul",
        blocks: [
            [
                44032,
                55215
            ]
        ]
    }
];
function W1(r) {
    for(let e = 0; e < ft.length; e++){
        for(let t = ft[e], a = 0; a < t.blocks.length; a++){
            const n = t.blocks[a];
            if (r >= n[0] && r <= n[1]) {
                return t.name;
            }
        }
    }
    return null;
}
const Ce = [];
ft.forEach((r)=>r.blocks.forEach((e)=>Ce.push(...e)));
function Cr(r) {
    for(let e = 0; e < Ce.length; e += 2){
        if (r >= Ce[e] && r <= Ce[e + 1]) {
            return true;
        }
    }
    return false;
}
const r0 = (r)=>`${r} ${r}`;
const Q0 = 80;
const $1 = (e, t)=>`M95,${622 + e + t}${`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`}${e / 2.075} -${e}${`
c5.3,-9.3,12,-14,20,-14
H400000v`}${40 + e}${`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`}${834 + e} ${t}h400000v${40 + e}h-400000z`;
const j1 = (e, t)=>`M263,${601 + e + t}${`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`}${e / 2.084} -${e}${`
c4.7,-7.3,11,-11,19,-11
H40000v`}${40 + e}${`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`}${1001 + e} ${t}h400000v${40 + e}h-400000z`;
const Z1 = (e, t)=>`M983 ${10 + e + t}${`
l`}${e / 3.13} -${e}${`
c4,-6.7,10,-10,18,-10 H400000v`}${40 + e}${`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`}${1001 + e} ${t}h400000v${40 + e}h-400000z`;
const K1 = (e, t)=>`M424,${2398 + e + t}${`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`}${e / 4.223} -${e}${`c4,-6.7,10,-10,18,-10 H400000
v`}${40 + e}${`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`}${1001 + e} ${t}${`
h400000v`}${40 + e}h-400000z`;
const J1 = (e, t)=>`M473,${2713 + e + t}${`
c339.3,-1799.3,509.3,-2700,510,-2702 l`}${e / 5.298} -${e}${`
c3.3,-7.3,9.3,-11,18,-11 H400000v`}${40 + e}${`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`}${1001 + e} ${t}h400000v${40 + e}H1017.7z`;
const Q1 = (e)=>{
    const t = e / 2;
    return `M400000 ${e} H0 L${t} 0 l65 45 L145 ${e - 80} H400000z`;
};
const _1 = (e, t, a)=>{
    const n = a - 54 - t - e;
    return `M702 ${e + t}H400000${40 + e}${`
H742v`}${n}${`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `}${t}H400000v${40 + e}H742z`;
};
const ea = (e, t, a)=>{
    t = 1000 * t;
    let n = "";
    switch(e){
        case "sqrtMain":
            n = $1(t, Q0);
            break;
        case "sqrtSize1":
            n = j1(t, Q0);
            break;
        case "sqrtSize2":
            n = Z1(t, Q0);
            break;
        case "sqrtSize3":
            n = K1(t, Q0);
            break;
        case "sqrtSize4":
            n = J1(t, Q0);
            break;
        case "sqrtTall":
            n = _1(t, Q0, a);
    }
    return n;
};
const ta = (e, t)=>{
    switch(e){
        case "⎜":
            return r0(`M291 0 H417 V${t} H291z`);
        case "∣":
            return r0(`M145 0 H188 V${t} H145z`);
        case "∥":
            return r0(`M145 0 H188 V${t} H145z`) + r0(`M367 0 H410 V${t} H367z`);
        case "⎟":
            return r0(`M457 0 H583 V${t} H457z`);
        case "⎢":
            return r0(`M319 0 H403 V${t} H319z`);
        case "⎥":
            return r0(`M263 0 H347 V${t} H263z`);
        case "⎪":
            return r0(`M384 0 H504 V${t} H384z`);
        case "⏐":
            return r0(`M312 0 H355 V${t} H312z`);
        case "‖":
            return r0(`M257 0 H300 V${t} H257z`) + r0(`M478 0 H521 V${t} H478z`);
        default:
            return "";
    }
};
const Qt = {
    doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
    doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
    leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
    leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
    leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
    leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
    leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
    leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
    leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
    leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
    leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
    lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
    leftlinesegment: r0("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),
    leftbracketunder: r0("M0 0 h120 V290 H399995 v120 H0z"),
    leftbracketover: r0("M0 440 h120 V150 H399995 v-120 H0z"),
    leftmapsto: r0("M40 281 V448H0V74H40V241H400000v40z"),
    leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
    longequal: r0("M0 50 h400000 v40H0z m0 194h40000v40H0z"),
    midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
    midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
    oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
    oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
    oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
    oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
    rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
    rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
    rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
    rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
    rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
    rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
    rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
    rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
    rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
    righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
    rightlinesegment: r0("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),
    rightbracketunder: r0("M399995 0 h-120 V290 H0 v120 H400000z"),
    rightbracketover: r0("M399995 440 h-120 V150 H0 v-120 H399995z"),
    rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
    twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
    twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
    tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
    tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
    tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
    tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
    vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
    widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
    widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
    widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
    rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
    baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
    rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
    shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
    shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
};
const ra = (e, t)=>{
    switch(e){
        case "lbrack":
            return `M403 1759 V84 H666 V0 H319 V1759 v${t}${` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v`}${t} v1759 h84z`;
        case "rbrack":
            return `M347 1759 V0 H0 V84 H263 V1759 v${t}${` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`}${t} v1759 h84z`;
        case "vert":
            return `M145 15 v585 v${t}${` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`}${-t}${` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`}${t} v585 h43z`;
        case "doublevert":
            return `M145 15 v585 v${t}${` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`}${-t}${` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`}${t}${` v585 h43z
M367 15 v585 v`}${t}${` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`}${-t}${` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`}${t} v585 h43z`;
        case "lfloor":
            return `M319 602 V0 H403 V602 v${t}${` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`}${t} v1715 H319z`;
        case "rfloor":
            return `M319 602 V0 H403 V602 v${t}${` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`}${t} v1715 H319z`;
        case "lceil":
            return `M403 1759 V84 H666 V0 H319 V1759 v${t}${` v602 h84z
M403 1759 V0 H319 V1759 v`}${t} v602 h84z`;
        case "rceil":
            return `M347 1759 V0 H0 V84 H263 V1759 v${t}${` v602 h84z
M347 1759 V0 h-84 V1759 v`}${t} v602 h84z`;
        case "lparen":
            return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
        case "rparen":
            return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
        default:
            throw new Error("Unknown stretchy delimiter.");
    }
};
class ae {
    constructor(e){
        this.children = e;
        this.classes = [];
        this.height = 0;
        this.depth = 0;
        this.maxFontSize = 0;
        this.style = {};
    }
    hasClass(e) {
        return this.classes.includes(e);
    }
    toNode() {
        const e = document.createDocumentFragment();
        for(let t = 0; t < this.children.length; t++){
            e.appendChild(this.children[t].toNode());
        }
        return e;
    }
    toMarkup() {
        let e = "";
        for(let t = 0; t < this.children.length; t++){
            e += this.children[t].toMarkup();
        }
        return e;
    }
    toText() {
        const e = (t)=>t.toText();
        return this.children.map(e).join("");
    }
}
const vt = {
    pt: 1,
    mm: 7227 / 2540,
    cm: 7227 / 254,
    in: 72.27,
    bp: 803 / 800,
    pc: 12,
    dd: 1238 / 1157,
    cc: 14856 / 1157,
    nd: 685 / 642,
    nc: 1370 / 107,
    sp: 1 / 65536,
    px: 803 / 800
};
const aa = {
    ex: true,
    em: true,
    mu: true
};
const qr = (e)=>{
    if (typeof e !== "string") {
        e = e.unit;
    }
    return e in vt || e in aa || e === "ex";
};
const K = (e, t)=>{
    let a;
    if (e.unit in vt) {
        a = vt[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
    } else if (e.unit === "mu") {
        a = t.fontMetrics().cssEmPerMu;
    } else {
        let n;
        if (t.style.isTight()) {
            n = t.havingStyle(t.style.text());
        } else {
            n = t;
        }
        if (e.unit === "ex") {
            a = n.fontMetrics().xHeight;
        } else if (e.unit === "em") {
            a = n.fontMetrics().quad;
        } else {
            throw new ParseError(`Invalid unit: '${e.unit}'`);
        }
        if (n !== t) {
            a *= n.sizeMultiplier / t.sizeMultiplier;
        }
    }
    return Math.min(e.number * a, t.maxSize);
};
const A = (e)=>`${+e.toFixed(4)}em`;
const L0 = (classes)=>classes.filter((t)=>t).join(" ");
const Er = function(e, t, a) {
    this.classes = e || [];
    this.attributes = {};
    this.height = 0;
    this.depth = 0;
    this.maxFontSize = 0;
    this.style = a || {};
    if (t) {
        if (t.style.isTight()) {
            this.classes.push("mtight");
        }
        const n = t.getColor();
        if (n) {
            this.style.color = n;
        }
    }
};
const Rr = function(e) {
    const t = document.createElement(e);
    t.className = L0(this.classes);
    for (const a of Object.keys(this.style)){
        t.style[a] = this.style[a];
    }
    for (const n of Object.keys(this.attributes)){
        t.setAttribute(n, this.attributes[n]);
    }
    for(let l = 0; l < this.children.length; l++){
        t.appendChild(this.children[l].toNode());
    }
    return t;
};
const na = /[\s"'>/=\x00-\x1f]/;
const Ir = function(e) {
    let t = `<${e}`;
    if (this.classes.length) {
        t += ` class="${n0(L0(this.classes))}"`;
    }
    let a = "";
    for (const n of Object.keys(this.style)){
        a += `${Tt(n)}:${this.style[n]};`;
    }
    if (a) {
        t += ` style="${n0(a)}"`;
    }
    for (const l of Object.keys(this.attributes)){
        if (na.test(l)) {
            throw new ParseError(`Invalid attribute name '${l}'`);
        }
        t += ` ${l}="${n0(this.attributes[l])}"`;
    }
    t += ">";
    for(let u = 0; u < this.children.length; u++){
        t += this.children[u].toMarkup();
    }
    t += `</${e}>`;
    return t;
};
class ne {
    constructor(e, t, a, n){
        Er.call(this, e, a, n);
        this.children = t || [];
    }
    setAttribute(e, t) {
        this.attributes[e] = t;
    }
    hasClass(e) {
        return this.classes.includes(e);
    }
    toNode() {
        return Rr.call(this, "span");
    }
    toMarkup() {
        return Ir.call(this, "span");
    }
}
class Oe {
    constructor(e, t, a, n){
        Er.call(this, t, n);
        this.children = a || [];
        this.setAttribute("href", e);
    }
    setAttribute(e, t) {
        this.attributes[e] = t;
    }
    hasClass(e) {
        return this.classes.includes(e);
    }
    toNode() {
        return Rr.call(this, "a");
    }
    toMarkup() {
        return Ir.call(this, "a");
    }
}
class ia {
    constructor(e, t, a){
        this.alt = t;
        this.src = e;
        this.classes = [
            "mord"
        ];
        this.height = 0;
        this.depth = 0;
        this.maxFontSize = 0;
        this.style = a;
    }
    hasClass(e) {
        return this.classes.includes(e);
    }
    toNode() {
        const e = document.createElement("img");
        e.src = this.src;
        e.alt = this.alt;
        e.className = "mord";
        for (const t of Object.keys(this.style)){
            e.style[t] = this.style[t];
        }
        return e;
    }
    toMarkup() {
        let e = `<img src="${n0(this.src)}"${` alt="${n0(this.alt)}"`}`;
        let t = "";
        for (const a of Object.keys(this.style)){
            t += `${Tt(a)}:${this.style[a]};`;
        }
        if (t) {
            e += ` style="${n0(t)}"`;
        }
        e += "'/>";
        return e;
    }
}
const la = {
    î: "ı̂",
    ï: "ı̈",
    í: "ı́",
    ì: "ı̀"
};
class f0 {
    constructor(e, t, a, n, l, u, h, c){
        this.text = e;
        this.height = t || 0;
        this.depth = a || 0;
        this.italic = n || 0;
        this.skew = l || 0;
        this.width = u || 0;
        this.classes = h || [];
        this.style = c || {};
        this.maxFontSize = 0;
        var v = W1(this.text.charCodeAt(0));
        if (v) {
            this.classes.push(`${v}_fallback`);
        }
        if (/[îïíì]/.test(this.text)) {
            this.text = la[this.text];
        }
    }
    hasClass(e) {
        return this.classes.includes(e);
    }
    toNode() {
        const e = document.createTextNode(this.text);
        let t = null;
        if (this.italic > 0) {
            t = document.createElement("span");
            t.style.marginRight = A(this.italic);
        }
        if (this.classes.length > 0) {
            t = t || document.createElement("span");
            t.className = L0(this.classes);
        }
        for (const a of Object.keys(this.style)){
            t = t || document.createElement("span");
            t.style[a] = this.style[a];
        }
        if (t) {
            t.appendChild(e);
            return t;
        }
        return e;
    }
    toMarkup() {
        let e = false;
        let t = "<span";
        if (this.classes.length) {
            e = true;
            t += ' class="';
            t += n0(L0(this.classes));
            t += '"';
        }
        let a = "";
        if (this.italic > 0) {
            a += `margin-right:${A(this.italic)};`;
        }
        for (const n of Object.keys(this.style)){
            a += `${Tt(n)}:${this.style[n]};`;
        }
        if (a) {
            e = true;
            t += ` style="${n0(a)}"`;
        }
        const l = n0(this.text);
        if (e) {
            t += ">";
            t += l;
            t += "</span>";
            return t;
        }
        return l;
    }
}
class D0 {
    constructor(e, t){
        this.children = e || [];
        this.attributes = t || {};
    }
    toNode() {
        const e = "http://www.w3.org/2000/svg";
        const t = document.createElementNS(e, "svg");
        for (const a of Object.keys(this.attributes)){
            t.setAttribute(a, this.attributes[a]);
        }
        for(let n = 0; n < this.children.length; n++){
            t.appendChild(this.children[n].toNode());
        }
        return t;
    }
    toMarkup() {
        let e = '<svg xmlns="http://www.w3.org/2000/svg"';
        for (const t of Object.keys(this.attributes)){
            e += ` ${t}="${n0(this.attributes[t])}"`;
        }
        e += ">";
        for(let a = 0; a < this.children.length; a++){
            e += this.children[a].toMarkup();
        }
        e += "</svg>";
        return e;
    }
}
class P0 {
    constructor(e, t){
        this.pathName = e;
        this.alternate = t;
    }
    toNode() {
        const e = "http://www.w3.org/2000/svg";
        const t = document.createElementNS(e, "path");
        if (this.alternate) {
            t.setAttribute("d", this.alternate);
        } else {
            t.setAttribute("d", Qt[this.pathName]);
        }
        return t;
    }
    toMarkup() {
        if (this.alternate) {
            return `<path d="${n0(this.alternate)}"/>`;
        }
        return `<path d="${n0(Qt[this.pathName])}"/>`;
    }
}
class pt {
    constructor(e){
        this.attributes = e || {};
    }
    toNode() {
        const e = "http://www.w3.org/2000/svg";
        const t = document.createElementNS(e, "line");
        for (const a of Object.keys(this.attributes)){
            t.setAttribute(a, this.attributes[a]);
        }
        return t;
    }
    toMarkup() {
        let e = "<line";
        for (const t of Object.keys(this.attributes)){
            e += ` ${t}="${n0(this.attributes[t])}"`;
        }
        e += "/>";
        return e;
    }
}
function sa(r) {
    if (r instanceof f0) {
        return r;
    }
    throw new Error(`Expected symbolNode but got ${String(r)}.`);
}
function ua(r) {
    if (r instanceof ne) {
        return r;
    }
    throw new Error(`Expected span<HtmlDomNode> but got ${String(r)}.`);
}
const oa = (r)=>r instanceof ne || r instanceof Oe || r instanceof ae;
const k0 = {
    "AMS-Regular": {
        32: [
            0,
            0,
            0,
            0,
            0.25
        ],
        65: [
            0,
            0.68889,
            0,
            0,
            0.72222
        ],
        66: [
            0,
            0.68889,
            0,
            0,
            0.66667
        ],
        67: [
            0,
            0.68889,
            0,
            0,
            0.72222
        ],
        68: [
            0,
            0.68889,
            0,
            0,
            0.72222
        ],
        69: [
            0,
            0.68889,
            0,
            0,
            0.66667
        ],
        70: [
            0,
            0.68889,
            0,
            0,
            0.61111
        ],
        71: [
            0,
            0.68889,
            0,
            0,
            0.77778
        ],
        72: [
            0,
            0.68889,
            0,
            0,
            0.77778
        ],
        73: [
            0,
            0.68889,
            0,
            0,
            0.38889
        ],
        74: [
            0.16667,
            0.68889,
            0,
            0,
            0.5
        ],
        75: [
            0,
            0.68889,
            0,
            0,
            0.77778
        ],
        76: [
            0,
            0.68889,
            0,
            0,
            0.66667
        ],
        77: [
            0,
            0.68889,
            0,
            0,
            0.94445
        ],
        78: [
            0,
            0.68889,
            0,
            0,
            0.72222
        ],
        79: [
            0.16667,
            0.68889,
            0,
            0,
            0.77778
        ],
        80: [
            0,
            0.68889,
            0,
            0,
            0.61111
        ],
        81: [
            0.16667,
            0.68889,
            0,
            0,
            0.77778
        ],
        82: [
            0,
            0.68889,
            0,
            0,
            0.72222
        ],
        83: [
            0,
            0.68889,
            0,
            0,
            0.55556
        ],
        84: [
            0,
            0.68889,
            0,
            0,
            0.66667
        ],
        85: [
            0,
            0.68889,
            0,
            0,
            0.72222
        ],
        86: [
            0,
            0.68889,
            0,
            0,
            0.72222
        ],
        87: [
            0,
            0.68889,
            0,
            0,
            1
        ],
        88: [
            0,
            0.68889,
            0,
            0,
            0.72222
        ],
        89: [
            0,
            0.68889,
            0,
            0,
            0.72222
        ],
        90: [
            0,
            0.68889,
            0,
            0,
            0.66667
        ],
        107: [
            0,
            0.68889,
            0,
            0,
            0.55556
        ],
        160: [
            0,
            0,
            0,
            0,
            0.25
        ],
        165: [
            0,
            0.675,
            0.025,
            0,
            0.75
        ],
        174: [
            0.15559,
            0.69224,
            0,
            0,
            0.94666
        ],
        240: [
            0,
            0.68889,
            0,
            0,
            0.55556
        ],
        295: [
            0,
            0.68889,
            0,
            0,
            0.54028
        ],
        710: [
            0,
            0.825,
            0,
            0,
            2.33334
        ],
        732: [
            0,
            0.9,
            0,
            0,
            2.33334
        ],
        770: [
            0,
            0.825,
            0,
            0,
            2.33334
        ],
        771: [
            0,
            0.9,
            0,
            0,
            2.33334
        ],
        989: [
            0.08167,
            0.58167,
            0,
            0,
            0.77778
        ],
        1008: [
            0,
            0.43056,
            0.04028,
            0,
            0.66667
        ],
        8245: [
            0,
            0.54986,
            0,
            0,
            0.275
        ],
        8463: [
            0,
            0.68889,
            0,
            0,
            0.54028
        ],
        8487: [
            0,
            0.68889,
            0,
            0,
            0.72222
        ],
        8498: [
            0,
            0.68889,
            0,
            0,
            0.55556
        ],
        8502: [
            0,
            0.68889,
            0,
            0,
            0.66667
        ],
        8503: [
            0,
            0.68889,
            0,
            0,
            0.44445
        ],
        8504: [
            0,
            0.68889,
            0,
            0,
            0.66667
        ],
        8513: [
            0,
            0.68889,
            0,
            0,
            0.63889
        ],
        8592: [
            -0.03598,
            0.46402,
            0,
            0,
            0.5
        ],
        8594: [
            -0.03598,
            0.46402,
            0,
            0,
            0.5
        ],
        8602: [
            -0.13313,
            0.36687,
            0,
            0,
            1
        ],
        8603: [
            -0.13313,
            0.36687,
            0,
            0,
            1
        ],
        8606: [
            0.01354,
            0.52239,
            0,
            0,
            1
        ],
        8608: [
            0.01354,
            0.52239,
            0,
            0,
            1
        ],
        8610: [
            0.01354,
            0.52239,
            0,
            0,
            1.11111
        ],
        8611: [
            0.01354,
            0.52239,
            0,
            0,
            1.11111
        ],
        8619: [
            0,
            0.54986,
            0,
            0,
            1
        ],
        8620: [
            0,
            0.54986,
            0,
            0,
            1
        ],
        8621: [
            -0.13313,
            0.37788,
            0,
            0,
            1.38889
        ],
        8622: [
            -0.13313,
            0.36687,
            0,
            0,
            1
        ],
        8624: [
            0,
            0.69224,
            0,
            0,
            0.5
        ],
        8625: [
            0,
            0.69224,
            0,
            0,
            0.5
        ],
        8630: [
            0,
            0.43056,
            0,
            0,
            1
        ],
        8631: [
            0,
            0.43056,
            0,
            0,
            1
        ],
        8634: [
            0.08198,
            0.58198,
            0,
            0,
            0.77778
        ],
        8635: [
            0.08198,
            0.58198,
            0,
            0,
            0.77778
        ],
        8638: [
            0.19444,
            0.69224,
            0,
            0,
            0.41667
        ],
        8639: [
            0.19444,
            0.69224,
            0,
            0,
            0.41667
        ],
        8642: [
            0.19444,
            0.69224,
            0,
            0,
            0.41667
        ],
        8643: [
            0.19444,
            0.69224,
            0,
            0,
            0.41667
        ],
        8644: [
            0.1808,
            0.675,
            0,
            0,
            1
        ],
        8646: [
            0.1808,
            0.675,
            0,
            0,
            1
        ],
        8647: [
            0.1808,
            0.675,
            0,
            0,
            1
        ],
        8648: [
            0.19444,
            0.69224,
            0,
            0,
            0.83334
        ],
        8649: [
            0.1808,
            0.675,
            0,
            0,
            1
        ],
        8650: [
            0.19444,
            0.69224,
            0,
            0,
            0.83334
        ],
        8651: [
            0.01354,
            0.52239,
            0,
            0,
            1
        ],
        8652: [
            0.01354,
            0.52239,
            0,
            0,
            1
        ],
        8653: [
            -0.13313,
            0.36687,
            0,
            0,
            1
        ],
        8654: [
            -0.13313,
            0.36687,
            0,
            0,
            1
        ],
        8655: [
            -0.13313,
            0.36687,
            0,
            0,
            1
        ],
        8666: [
            0.13667,
            0.63667,
            0,
            0,
            1
        ],
        8667: [
            0.13667,
            0.63667,
            0,
            0,
            1
        ],
        8669: [
            -0.13313,
            0.37788,
            0,
            0,
            1
        ],
        8672: [
            -0.064,
            0.437,
            0,
            0,
            1.334
        ],
        8674: [
            -0.064,
            0.437,
            0,
            0,
            1.334
        ],
        8705: [
            0,
            0.825,
            0,
            0,
            0.5
        ],
        8708: [
            0,
            0.68889,
            0,
            0,
            0.55556
        ],
        8709: [
            0.08167,
            0.58167,
            0,
            0,
            0.77778
        ],
        8717: [
            0,
            0.43056,
            0,
            0,
            0.42917
        ],
        8722: [
            -0.03598,
            0.46402,
            0,
            0,
            0.5
        ],
        8724: [
            0.08198,
            0.69224,
            0,
            0,
            0.77778
        ],
        8726: [
            0.08167,
            0.58167,
            0,
            0,
            0.77778
        ],
        8733: [
            0,
            0.69224,
            0,
            0,
            0.77778
        ],
        8736: [
            0,
            0.69224,
            0,
            0,
            0.72222
        ],
        8737: [
            0,
            0.69224,
            0,
            0,
            0.72222
        ],
        8738: [
            0.03517,
            0.52239,
            0,
            0,
            0.72222
        ],
        8739: [
            0.08167,
            0.58167,
            0,
            0,
            0.22222
        ],
        8740: [
            0.25142,
            0.74111,
            0,
            0,
            0.27778
        ],
        8741: [
            0.08167,
            0.58167,
            0,
            0,
            0.38889
        ],
        8742: [
            0.25142,
            0.74111,
            0,
            0,
            0.5
        ],
        8756: [
            0,
            0.69224,
            0,
            0,
            0.66667
        ],
        8757: [
            0,
            0.69224,
            0,
            0,
            0.66667
        ],
        8764: [
            -0.13313,
            0.36687,
            0,
            0,
            0.77778
        ],
        8765: [
            -0.13313,
            0.37788,
            0,
            0,
            0.77778
        ],
        8769: [
            -0.13313,
            0.36687,
            0,
            0,
            0.77778
        ],
        8770: [
            -0.03625,
            0.46375,
            0,
            0,
            0.77778
        ],
        8774: [
            0.30274,
            0.79383,
            0,
            0,
            0.77778
        ],
        8776: [
            -0.01688,
            0.48312,
            0,
            0,
            0.77778
        ],
        8778: [
            0.08167,
            0.58167,
            0,
            0,
            0.77778
        ],
        8782: [
            0.06062,
            0.54986,
            0,
            0,
            0.77778
        ],
        8783: [
            0.06062,
            0.54986,
            0,
            0,
            0.77778
        ],
        8785: [
            0.08198,
            0.58198,
            0,
            0,
            0.77778
        ],
        8786: [
            0.08198,
            0.58198,
            0,
            0,
            0.77778
        ],
        8787: [
            0.08198,
            0.58198,
            0,
            0,
            0.77778
        ],
        8790: [
            0,
            0.69224,
            0,
            0,
            0.77778
        ],
        8791: [
            0.22958,
            0.72958,
            0,
            0,
            0.77778
        ],
        8796: [
            0.08198,
            0.91667,
            0,
            0,
            0.77778
        ],
        8806: [
            0.25583,
            0.75583,
            0,
            0,
            0.77778
        ],
        8807: [
            0.25583,
            0.75583,
            0,
            0,
            0.77778
        ],
        8808: [
            0.25142,
            0.75726,
            0,
            0,
            0.77778
        ],
        8809: [
            0.25142,
            0.75726,
            0,
            0,
            0.77778
        ],
        8812: [
            0.25583,
            0.75583,
            0,
            0,
            0.5
        ],
        8814: [
            0.20576,
            0.70576,
            0,
            0,
            0.77778
        ],
        8815: [
            0.20576,
            0.70576,
            0,
            0,
            0.77778
        ],
        8816: [
            0.30274,
            0.79383,
            0,
            0,
            0.77778
        ],
        8817: [
            0.30274,
            0.79383,
            0,
            0,
            0.77778
        ],
        8818: [
            0.22958,
            0.72958,
            0,
            0,
            0.77778
        ],
        8819: [
            0.22958,
            0.72958,
            0,
            0,
            0.77778
        ],
        8822: [
            0.1808,
            0.675,
            0,
            0,
            0.77778
        ],
        8823: [
            0.1808,
            0.675,
            0,
            0,
            0.77778
        ],
        8828: [
            0.13667,
            0.63667,
            0,
            0,
            0.77778
        ],
        8829: [
            0.13667,
            0.63667,
            0,
            0,
            0.77778
        ],
        8830: [
            0.22958,
            0.72958,
            0,
            0,
            0.77778
        ],
        8831: [
            0.22958,
            0.72958,
            0,
            0,
            0.77778
        ],
        8832: [
            0.20576,
            0.70576,
            0,
            0,
            0.77778
        ],
        8833: [
            0.20576,
            0.70576,
            0,
            0,
            0.77778
        ],
        8840: [
            0.30274,
            0.79383,
            0,
            0,
            0.77778
        ],
        8841: [
            0.30274,
            0.79383,
            0,
            0,
            0.77778
        ],
        8842: [
            0.13597,
            0.63597,
            0,
            0,
            0.77778
        ],
        8843: [
            0.13597,
            0.63597,
            0,
            0,
            0.77778
        ],
        8847: [
            0.03517,
            0.54986,
            0,
            0,
            0.77778
        ],
        8848: [
            0.03517,
            0.54986,
            0,
            0,
            0.77778
        ],
        8858: [
            0.08198,
            0.58198,
            0,
            0,
            0.77778
        ],
        8859: [
            0.08198,
            0.58198,
            0,
            0,
            0.77778
        ],
        8861: [
            0.08198,
            0.58198,
            0,
            0,
            0.77778
        ],
        8862: [
            0,
            0.675,
            0,
            0,
            0.77778
        ],
        8863: [
            0,
            0.675,
            0,
            0,
            0.77778
        ],
        8864: [
            0,
            0.675,
            0,
            0,
            0.77778
        ],
        8865: [
            0,
            0.675,
            0,
            0,
            0.77778
        ],
        8872: [
            0,
            0.69224,
            0,
            0,
            0.61111
        ],
        8873: [
            0,
            0.69224,
            0,
            0,
            0.72222
        ],
        8874: [
            0,
            0.69224,
            0,
            0,
            0.88889
        ],
        8876: [
            0,
            0.68889,
            0,
            0,
            0.61111
        ],
        8877: [
            0,
            0.68889,
            0,
            0,
            0.61111
        ],
        8878: [
            0,
            0.68889,
            0,
            0,
            0.72222
        ],
        8879: [
            0,
            0.68889,
            0,
            0,
            0.72222
        ],
        8882: [
            0.03517,
            0.54986,
            0,
            0,
            0.77778
        ],
        8883: [
            0.03517,
            0.54986,
            0,
            0,
            0.77778
        ],
        8884: [
            0.13667,
            0.63667,
            0,
            0,
            0.77778
        ],
        8885: [
            0.13667,
            0.63667,
            0,
            0,
            0.77778
        ],
        8888: [
            0,
            0.54986,
            0,
            0,
            1.11111
        ],
        8890: [
            0.19444,
            0.43056,
            0,
            0,
            0.55556
        ],
        8891: [
            0.19444,
            0.69224,
            0,
            0,
            0.61111
        ],
        8892: [
            0.19444,
            0.69224,
            0,
            0,
            0.61111
        ],
        8901: [
            0,
            0.54986,
            0,
            0,
            0.27778
        ],
        8903: [
            0.08167,
            0.58167,
            0,
            0,
            0.77778
        ],
        8905: [
            0.08167,
            0.58167,
            0,
            0,
            0.77778
        ],
        8906: [
            0.08167,
            0.58167,
            0,
            0,
            0.77778
        ],
        8907: [
            0,
            0.69224,
            0,
            0,
            0.77778
        ],
        8908: [
            0,
            0.69224,
            0,
            0,
            0.77778
        ],
        8909: [
            -0.03598,
            0.46402,
            0,
            0,
            0.77778
        ],
        8910: [
            0,
            0.54986,
            0,
            0,
            0.76042
        ],
        8911: [
            0,
            0.54986,
            0,
            0,
            0.76042
        ],
        8912: [
            0.03517,
            0.54986,
            0,
            0,
            0.77778
        ],
        8913: [
            0.03517,
            0.54986,
            0,
            0,
            0.77778
        ],
        8914: [
            0,
            0.54986,
            0,
            0,
            0.66667
        ],
        8915: [
            0,
            0.54986,
            0,
            0,
            0.66667
        ],
        8916: [
            0,
            0.69224,
            0,
            0,
            0.66667
        ],
        8918: [
            0.0391,
            0.5391,
            0,
            0,
            0.77778
        ],
        8919: [
            0.0391,
            0.5391,
            0,
            0,
            0.77778
        ],
        8920: [
            0.03517,
            0.54986,
            0,
            0,
            1.33334
        ],
        8921: [
            0.03517,
            0.54986,
            0,
            0,
            1.33334
        ],
        8922: [
            0.38569,
            0.88569,
            0,
            0,
            0.77778
        ],
        8923: [
            0.38569,
            0.88569,
            0,
            0,
            0.77778
        ],
        8926: [
            0.13667,
            0.63667,
            0,
            0,
            0.77778
        ],
        8927: [
            0.13667,
            0.63667,
            0,
            0,
            0.77778
        ],
        8928: [
            0.30274,
            0.79383,
            0,
            0,
            0.77778
        ],
        8929: [
            0.30274,
            0.79383,
            0,
            0,
            0.77778
        ],
        8934: [
            0.23222,
            0.74111,
            0,
            0,
            0.77778
        ],
        8935: [
            0.23222,
            0.74111,
            0,
            0,
            0.77778
        ],
        8936: [
            0.23222,
            0.74111,
            0,
            0,
            0.77778
        ],
        8937: [
            0.23222,
            0.74111,
            0,
            0,
            0.77778
        ],
        8938: [
            0.20576,
            0.70576,
            0,
            0,
            0.77778
        ],
        8939: [
            0.20576,
            0.70576,
            0,
            0,
            0.77778
        ],
        8940: [
            0.30274,
            0.79383,
            0,
            0,
            0.77778
        ],
        8941: [
            0.30274,
            0.79383,
            0,
            0,
            0.77778
        ],
        8994: [
            0.19444,
            0.69224,
            0,
            0,
            0.77778
        ],
        8995: [
            0.19444,
            0.69224,
            0,
            0,
            0.77778
        ],
        9416: [
            0.15559,
            0.69224,
            0,
            0,
            0.90222
        ],
        9484: [
            0,
            0.69224,
            0,
            0,
            0.5
        ],
        9488: [
            0,
            0.69224,
            0,
            0,
            0.5
        ],
        9492: [
            0,
            0.37788,
            0,
            0,
            0.5
        ],
        9496: [
            0,
            0.37788,
            0,
            0,
            0.5
        ],
        9585: [
            0.19444,
            0.68889,
            0,
            0,
            0.88889
        ],
        9586: [
            0.19444,
            0.74111,
            0,
            0,
            0.88889
        ],
        9632: [
            0,
            0.675,
            0,
            0,
            0.77778
        ],
        9633: [
            0,
            0.675,
            0,
            0,
            0.77778
        ],
        9650: [
            0,
            0.54986,
            0,
            0,
            0.72222
        ],
        9651: [
            0,
            0.54986,
            0,
            0,
            0.72222
        ],
        9654: [
            0.03517,
            0.54986,
            0,
            0,
            0.77778
        ],
        9660: [
            0,
            0.54986,
            0,
            0,
            0.72222
        ],
        9661: [
            0,
            0.54986,
            0,
            0,
            0.72222
        ],
        9664: [
            0.03517,
            0.54986,
            0,
            0,
            0.77778
        ],
        9674: [
            0.11111,
            0.69224,
            0,
            0,
            0.66667
        ],
        9733: [
            0.19444,
            0.69224,
            0,
            0,
            0.94445
        ],
        10003: [
            0,
            0.69224,
            0,
            0,
            0.83334
        ],
        10016: [
            0,
            0.69224,
            0,
            0,
            0.83334
        ],
        10731: [
            0.11111,
            0.69224,
            0,
            0,
            0.66667
        ],
        10846: [
            0.19444,
            0.75583,
            0,
            0,
            0.61111
        ],
        10877: [
            0.13667,
            0.63667,
            0,
            0,
            0.77778
        ],
        10878: [
            0.13667,
            0.63667,
            0,
            0,
            0.77778
        ],
        10885: [
            0.25583,
            0.75583,
            0,
            0,
            0.77778
        ],
        10886: [
            0.25583,
            0.75583,
            0,
            0,
            0.77778
        ],
        10887: [
            0.13597,
            0.63597,
            0,
            0,
            0.77778
        ],
        10888: [
            0.13597,
            0.63597,
            0,
            0,
            0.77778
        ],
        10889: [
            0.26167,
            0.75726,
            0,
            0,
            0.77778
        ],
        10890: [
            0.26167,
            0.75726,
            0,
            0,
            0.77778
        ],
        10891: [
            0.48256,
            0.98256,
            0,
            0,
            0.77778
        ],
        10892: [
            0.48256,
            0.98256,
            0,
            0,
            0.77778
        ],
        10901: [
            0.13667,
            0.63667,
            0,
            0,
            0.77778
        ],
        10902: [
            0.13667,
            0.63667,
            0,
            0,
            0.77778
        ],
        10933: [
            0.25142,
            0.75726,
            0,
            0,
            0.77778
        ],
        10934: [
            0.25142,
            0.75726,
            0,
            0,
            0.77778
        ],
        10935: [
            0.26167,
            0.75726,
            0,
            0,
            0.77778
        ],
        10936: [
            0.26167,
            0.75726,
            0,
            0,
            0.77778
        ],
        10937: [
            0.26167,
            0.75726,
            0,
            0,
            0.77778
        ],
        10938: [
            0.26167,
            0.75726,
            0,
            0,
            0.77778
        ],
        10949: [
            0.25583,
            0.75583,
            0,
            0,
            0.77778
        ],
        10950: [
            0.25583,
            0.75583,
            0,
            0,
            0.77778
        ],
        10955: [
            0.28481,
            0.79383,
            0,
            0,
            0.77778
        ],
        10956: [
            0.28481,
            0.79383,
            0,
            0,
            0.77778
        ],
        57350: [
            0.08167,
            0.58167,
            0,
            0,
            0.22222
        ],
        57351: [
            0.08167,
            0.58167,
            0,
            0,
            0.38889
        ],
        57352: [
            0.08167,
            0.58167,
            0,
            0,
            0.77778
        ],
        57353: [
            0,
            0.43056,
            0.04028,
            0,
            0.66667
        ],
        57356: [
            0.25142,
            0.75726,
            0,
            0,
            0.77778
        ],
        57357: [
            0.25142,
            0.75726,
            0,
            0,
            0.77778
        ],
        57358: [
            0.41951,
            0.91951,
            0,
            0,
            0.77778
        ],
        57359: [
            0.30274,
            0.79383,
            0,
            0,
            0.77778
        ],
        57360: [
            0.30274,
            0.79383,
            0,
            0,
            0.77778
        ],
        57361: [
            0.41951,
            0.91951,
            0,
            0,
            0.77778
        ],
        57366: [
            0.25142,
            0.75726,
            0,
            0,
            0.77778
        ],
        57367: [
            0.25142,
            0.75726,
            0,
            0,
            0.77778
        ],
        57368: [
            0.25142,
            0.75726,
            0,
            0,
            0.77778
        ],
        57369: [
            0.25142,
            0.75726,
            0,
            0,
            0.77778
        ],
        57370: [
            0.13597,
            0.63597,
            0,
            0,
            0.77778
        ],
        57371: [
            0.13597,
            0.63597,
            0,
            0,
            0.77778
        ]
    },
    "Caligraphic-Regular": {
        32: [
            0,
            0,
            0,
            0,
            0.25
        ],
        65: [
            0,
            0.68333,
            0,
            0.19445,
            0.79847
        ],
        66: [
            0,
            0.68333,
            0.03041,
            0.13889,
            0.65681
        ],
        67: [
            0,
            0.68333,
            0.05834,
            0.13889,
            0.52653
        ],
        68: [
            0,
            0.68333,
            0.02778,
            0.08334,
            0.77139
        ],
        69: [
            0,
            0.68333,
            0.08944,
            0.11111,
            0.52778
        ],
        70: [
            0,
            0.68333,
            0.09931,
            0.11111,
            0.71875
        ],
        71: [
            0.09722,
            0.68333,
            0.0593,
            0.11111,
            0.59487
        ],
        72: [
            0,
            0.68333,
            0.00965,
            0.11111,
            0.84452
        ],
        73: [
            0,
            0.68333,
            0.07382,
            0,
            0.54452
        ],
        74: [
            0.09722,
            0.68333,
            0.18472,
            0.16667,
            0.67778
        ],
        75: [
            0,
            0.68333,
            0.01445,
            0.05556,
            0.76195
        ],
        76: [
            0,
            0.68333,
            0,
            0.13889,
            0.68972
        ],
        77: [
            0,
            0.68333,
            0,
            0.13889,
            1.2009
        ],
        78: [
            0,
            0.68333,
            0.14736,
            0.08334,
            0.82049
        ],
        79: [
            0,
            0.68333,
            0.02778,
            0.11111,
            0.79611
        ],
        80: [
            0,
            0.68333,
            0.08222,
            0.08334,
            0.69556
        ],
        81: [
            0.09722,
            0.68333,
            0,
            0.11111,
            0.81667
        ],
        82: [
            0,
            0.68333,
            0,
            0.08334,
            0.8475
        ],
        83: [
            0,
            0.68333,
            0.075,
            0.13889,
            0.60556
        ],
        84: [
            0,
            0.68333,
            0.25417,
            0,
            0.54464
        ],
        85: [
            0,
            0.68333,
            0.09931,
            0.08334,
            0.62583
        ],
        86: [
            0,
            0.68333,
            0.08222,
            0,
            0.61278
        ],
        87: [
            0,
            0.68333,
            0.08222,
            0.08334,
            0.98778
        ],
        88: [
            0,
            0.68333,
            0.14643,
            0.13889,
            0.7133
        ],
        89: [
            0.09722,
            0.68333,
            0.08222,
            0.08334,
            0.66834
        ],
        90: [
            0,
            0.68333,
            0.07944,
            0.13889,
            0.72473
        ],
        160: [
            0,
            0,
            0,
            0,
            0.25
        ]
    },
    "Fraktur-Regular": {
        32: [
            0,
            0,
            0,
            0,
            0.25
        ],
        33: [
            0,
            0.69141,
            0,
            0,
            0.29574
        ],
        34: [
            0,
            0.69141,
            0,
            0,
            0.21471
        ],
        38: [
            0,
            0.69141,
            0,
            0,
            0.73786
        ],
        39: [
            0,
            0.69141,
            0,
            0,
            0.21201
        ],
        40: [
            0.24982,
            0.74947,
            0,
            0,
            0.38865
        ],
        41: [
            0.24982,
            0.74947,
            0,
            0,
            0.38865
        ],
        42: [
            0,
            0.62119,
            0,
            0,
            0.27764
        ],
        43: [
            0.08319,
            0.58283,
            0,
            0,
            0.75623
        ],
        44: [
            0,
            0.10803,
            0,
            0,
            0.27764
        ],
        45: [
            0.08319,
            0.58283,
            0,
            0,
            0.75623
        ],
        46: [
            0,
            0.10803,
            0,
            0,
            0.27764
        ],
        47: [
            0.24982,
            0.74947,
            0,
            0,
            0.50181
        ],
        48: [
            0,
            0.47534,
            0,
            0,
            0.50181
        ],
        49: [
            0,
            0.47534,
            0,
            0,
            0.50181
        ],
        50: [
            0,
            0.47534,
            0,
            0,
            0.50181
        ],
        51: [
            0.18906,
            0.47534,
            0,
            0,
            0.50181
        ],
        52: [
            0.18906,
            0.47534,
            0,
            0,
            0.50181
        ],
        53: [
            0.18906,
            0.47534,
            0,
            0,
            0.50181
        ],
        54: [
            0,
            0.69141,
            0,
            0,
            0.50181
        ],
        55: [
            0.18906,
            0.47534,
            0,
            0,
            0.50181
        ],
        56: [
            0,
            0.69141,
            0,
            0,
            0.50181
        ],
        57: [
            0.18906,
            0.47534,
            0,
            0,
            0.50181
        ],
        58: [
            0,
            0.47534,
            0,
            0,
            0.21606
        ],
        59: [
            0.12604,
            0.47534,
            0,
            0,
            0.21606
        ],
        61: [
            -0.13099,
            0.36866,
            0,
            0,
            0.75623
        ],
        63: [
            0,
            0.69141,
            0,
            0,
            0.36245
        ],
        65: [
            0,
            0.69141,
            0,
            0,
            0.7176
        ],
        66: [
            0,
            0.69141,
            0,
            0,
            0.88397
        ],
        67: [
            0,
            0.69141,
            0,
            0,
            0.61254
        ],
        68: [
            0,
            0.69141,
            0,
            0,
            0.83158
        ],
        69: [
            0,
            0.69141,
            0,
            0,
            0.66278
        ],
        70: [
            0.12604,
            0.69141,
            0,
            0,
            0.61119
        ],
        71: [
            0,
            0.69141,
            0,
            0,
            0.78539
        ],
        72: [
            0.06302,
            0.69141,
            0,
            0,
            0.7203
        ],
        73: [
            0,
            0.69141,
            0,
            0,
            0.55448
        ],
        74: [
            0.12604,
            0.69141,
            0,
            0,
            0.55231
        ],
        75: [
            0,
            0.69141,
            0,
            0,
            0.66845
        ],
        76: [
            0,
            0.69141,
            0,
            0,
            0.66602
        ],
        77: [
            0,
            0.69141,
            0,
            0,
            1.04953
        ],
        78: [
            0,
            0.69141,
            0,
            0,
            0.83212
        ],
        79: [
            0,
            0.69141,
            0,
            0,
            0.82699
        ],
        80: [
            0.18906,
            0.69141,
            0,
            0,
            0.82753
        ],
        81: [
            0.03781,
            0.69141,
            0,
            0,
            0.82699
        ],
        82: [
            0,
            0.69141,
            0,
            0,
            0.82807
        ],
        83: [
            0,
            0.69141,
            0,
            0,
            0.82861
        ],
        84: [
            0,
            0.69141,
            0,
            0,
            0.66899
        ],
        85: [
            0,
            0.69141,
            0,
            0,
            0.64576
        ],
        86: [
            0,
            0.69141,
            0,
            0,
            0.83131
        ],
        87: [
            0,
            0.69141,
            0,
            0,
            1.04602
        ],
        88: [
            0,
            0.69141,
            0,
            0,
            0.71922
        ],
        89: [
            0.18906,
            0.69141,
            0,
            0,
            0.83293
        ],
        90: [
            0.12604,
            0.69141,
            0,
            0,
            0.60201
        ],
        91: [
            0.24982,
            0.74947,
            0,
            0,
            0.27764
        ],
        93: [
            0.24982,
            0.74947,
            0,
            0,
            0.27764
        ],
        94: [
            0,
            0.69141,
            0,
            0,
            0.49965
        ],
        97: [
            0,
            0.47534,
            0,
            0,
            0.50046
        ],
        98: [
            0,
            0.69141,
            0,
            0,
            0.51315
        ],
        99: [
            0,
            0.47534,
            0,
            0,
            0.38946
        ],
        100: [
            0,
            0.62119,
            0,
            0,
            0.49857
        ],
        101: [
            0,
            0.47534,
            0,
            0,
            0.40053
        ],
        102: [
            0.18906,
            0.69141,
            0,
            0,
            0.32626
        ],
        103: [
            0.18906,
            0.47534,
            0,
            0,
            0.5037
        ],
        104: [
            0.18906,
            0.69141,
            0,
            0,
            0.52126
        ],
        105: [
            0,
            0.69141,
            0,
            0,
            0.27899
        ],
        106: [
            0,
            0.69141,
            0,
            0,
            0.28088
        ],
        107: [
            0,
            0.69141,
            0,
            0,
            0.38946
        ],
        108: [
            0,
            0.69141,
            0,
            0,
            0.27953
        ],
        109: [
            0,
            0.47534,
            0,
            0,
            0.76676
        ],
        110: [
            0,
            0.47534,
            0,
            0,
            0.52666
        ],
        111: [
            0,
            0.47534,
            0,
            0,
            0.48885
        ],
        112: [
            0.18906,
            0.52396,
            0,
            0,
            0.50046
        ],
        113: [
            0.18906,
            0.47534,
            0,
            0,
            0.48912
        ],
        114: [
            0,
            0.47534,
            0,
            0,
            0.38919
        ],
        115: [
            0,
            0.47534,
            0,
            0,
            0.44266
        ],
        116: [
            0,
            0.62119,
            0,
            0,
            0.33301
        ],
        117: [
            0,
            0.47534,
            0,
            0,
            0.5172
        ],
        118: [
            0,
            0.52396,
            0,
            0,
            0.5118
        ],
        119: [
            0,
            0.52396,
            0,
            0,
            0.77351
        ],
        120: [
            0.18906,
            0.47534,
            0,
            0,
            0.38865
        ],
        121: [
            0.18906,
            0.47534,
            0,
            0,
            0.49884
        ],
        122: [
            0.18906,
            0.47534,
            0,
            0,
            0.39054
        ],
        160: [
            0,
            0,
            0,
            0,
            0.25
        ],
        8216: [
            0,
            0.69141,
            0,
            0,
            0.21471
        ],
        8217: [
            0,
            0.69141,
            0,
            0,
            0.21471
        ],
        58112: [
            0,
            0.62119,
            0,
            0,
            0.49749
        ],
        58113: [
            0,
            0.62119,
            0,
            0,
            0.4983
        ],
        58114: [
            0.18906,
            0.69141,
            0,
            0,
            0.33328
        ],
        58115: [
            0.18906,
            0.69141,
            0,
            0,
            0.32923
        ],
        58116: [
            0.18906,
            0.47534,
            0,
            0,
            0.50343
        ],
        58117: [
            0,
            0.69141,
            0,
            0,
            0.33301
        ],
        58118: [
            0,
            0.62119,
            0,
            0,
            0.33409
        ],
        58119: [
            0,
            0.47534,
            0,
            0,
            0.50073
        ]
    },
    "Main-Bold": {
        32: [
            0,
            0,
            0,
            0,
            0.25
        ],
        33: [
            0,
            0.69444,
            0,
            0,
            0.35
        ],
        34: [
            0,
            0.69444,
            0,
            0,
            0.60278
        ],
        35: [
            0.19444,
            0.69444,
            0,
            0,
            0.95833
        ],
        36: [
            0.05556,
            0.75,
            0,
            0,
            0.575
        ],
        37: [
            0.05556,
            0.75,
            0,
            0,
            0.95833
        ],
        38: [
            0,
            0.69444,
            0,
            0,
            0.89444
        ],
        39: [
            0,
            0.69444,
            0,
            0,
            0.31944
        ],
        40: [
            0.25,
            0.75,
            0,
            0,
            0.44722
        ],
        41: [
            0.25,
            0.75,
            0,
            0,
            0.44722
        ],
        42: [
            0,
            0.75,
            0,
            0,
            0.575
        ],
        43: [
            0.13333,
            0.63333,
            0,
            0,
            0.89444
        ],
        44: [
            0.19444,
            0.15556,
            0,
            0,
            0.31944
        ],
        45: [
            0,
            0.44444,
            0,
            0,
            0.38333
        ],
        46: [
            0,
            0.15556,
            0,
            0,
            0.31944
        ],
        47: [
            0.25,
            0.75,
            0,
            0,
            0.575
        ],
        48: [
            0,
            0.64444,
            0,
            0,
            0.575
        ],
        49: [
            0,
            0.64444,
            0,
            0,
            0.575
        ],
        50: [
            0,
            0.64444,
            0,
            0,
            0.575
        ],
        51: [
            0,
            0.64444,
            0,
            0,
            0.575
        ],
        52: [
            0,
            0.64444,
            0,
            0,
            0.575
        ],
        53: [
            0,
            0.64444,
            0,
            0,
            0.575
        ],
        54: [
            0,
            0.64444,
            0,
            0,
            0.575
        ],
        55: [
            0,
            0.64444,
            0,
            0,
            0.575
        ],
        56: [
            0,
            0.64444,
            0,
            0,
            0.575
        ],
        57: [
            0,
            0.64444,
            0,
            0,
            0.575
        ],
        58: [
            0,
            0.44444,
            0,
            0,
            0.31944
        ],
        59: [
            0.19444,
            0.44444,
            0,
            0,
            0.31944
        ],
        60: [
            0.08556,
            0.58556,
            0,
            0,
            0.89444
        ],
        61: [
            -0.10889,
            0.39111,
            0,
            0,
            0.89444
        ],
        62: [
            0.08556,
            0.58556,
            0,
            0,
            0.89444
        ],
        63: [
            0,
            0.69444,
            0,
            0,
            0.54305
        ],
        64: [
            0,
            0.69444,
            0,
            0,
            0.89444
        ],
        65: [
            0,
            0.68611,
            0,
            0,
            0.86944
        ],
        66: [
            0,
            0.68611,
            0,
            0,
            0.81805
        ],
        67: [
            0,
            0.68611,
            0,
            0,
            0.83055
        ],
        68: [
            0,
            0.68611,
            0,
            0,
            0.88194
        ],
        69: [
            0,
            0.68611,
            0,
            0,
            0.75555
        ],
        70: [
            0,
            0.68611,
            0,
            0,
            0.72361
        ],
        71: [
            0,
            0.68611,
            0,
            0,
            0.90416
        ],
        72: [
            0,
            0.68611,
            0,
            0,
            0.9
        ],
        73: [
            0,
            0.68611,
            0,
            0,
            0.43611
        ],
        74: [
            0,
            0.68611,
            0,
            0,
            0.59444
        ],
        75: [
            0,
            0.68611,
            0,
            0,
            0.90138
        ],
        76: [
            0,
            0.68611,
            0,
            0,
            0.69166
        ],
        77: [
            0,
            0.68611,
            0,
            0,
            1.09166
        ],
        78: [
            0,
            0.68611,
            0,
            0,
            0.9
        ],
        79: [
            0,
            0.68611,
            0,
            0,
            0.86388
        ],
        80: [
            0,
            0.68611,
            0,
            0,
            0.78611
        ],
        81: [
            0.19444,
            0.68611,
            0,
            0,
            0.86388
        ],
        82: [
            0,
            0.68611,
            0,
            0,
            0.8625
        ],
        83: [
            0,
            0.68611,
            0,
            0,
            0.63889
        ],
        84: [
            0,
            0.68611,
            0,
            0,
            0.8
        ],
        85: [
            0,
            0.68611,
            0,
            0,
            0.88472
        ],
        86: [
            0,
            0.68611,
            0.01597,
            0,
            0.86944
        ],
        87: [
            0,
            0.68611,
            0.01597,
            0,
            1.18888
        ],
        88: [
            0,
            0.68611,
            0,
            0,
            0.86944
        ],
        89: [
            0,
            0.68611,
            0.02875,
            0,
            0.86944
        ],
        90: [
            0,
            0.68611,
            0,
            0,
            0.70277
        ],
        91: [
            0.25,
            0.75,
            0,
            0,
            0.31944
        ],
        92: [
            0.25,
            0.75,
            0,
            0,
            0.575
        ],
        93: [
            0.25,
            0.75,
            0,
            0,
            0.31944
        ],
        94: [
            0,
            0.69444,
            0,
            0,
            0.575
        ],
        95: [
            0.31,
            0.13444,
            0.03194,
            0,
            0.575
        ],
        97: [
            0,
            0.44444,
            0,
            0,
            0.55902
        ],
        98: [
            0,
            0.69444,
            0,
            0,
            0.63889
        ],
        99: [
            0,
            0.44444,
            0,
            0,
            0.51111
        ],
        100: [
            0,
            0.69444,
            0,
            0,
            0.63889
        ],
        101: [
            0,
            0.44444,
            0,
            0,
            0.52708
        ],
        102: [
            0,
            0.69444,
            0.10903,
            0,
            0.35139
        ],
        103: [
            0.19444,
            0.44444,
            0.01597,
            0,
            0.575
        ],
        104: [
            0,
            0.69444,
            0,
            0,
            0.63889
        ],
        105: [
            0,
            0.69444,
            0,
            0,
            0.31944
        ],
        106: [
            0.19444,
            0.69444,
            0,
            0,
            0.35139
        ],
        107: [
            0,
            0.69444,
            0,
            0,
            0.60694
        ],
        108: [
            0,
            0.69444,
            0,
            0,
            0.31944
        ],
        109: [
            0,
            0.44444,
            0,
            0,
            0.95833
        ],
        110: [
            0,
            0.44444,
            0,
            0,
            0.63889
        ],
        111: [
            0,
            0.44444,
            0,
            0,
            0.575
        ],
        112: [
            0.19444,
            0.44444,
            0,
            0,
            0.63889
        ],
        113: [
            0.19444,
            0.44444,
            0,
            0,
            0.60694
        ],
        114: [
            0,
            0.44444,
            0,
            0,
            0.47361
        ],
        115: [
            0,
            0.44444,
            0,
            0,
            0.45361
        ],
        116: [
            0,
            0.63492,
            0,
            0,
            0.44722
        ],
        117: [
            0,
            0.44444,
            0,
            0,
            0.63889
        ],
        118: [
            0,
            0.44444,
            0.01597,
            0,
            0.60694
        ],
        119: [
            0,
            0.44444,
            0.01597,
            0,
            0.83055
        ],
        120: [
            0,
            0.44444,
            0,
            0,
            0.60694
        ],
        121: [
            0.19444,
            0.44444,
            0.01597,
            0,
            0.60694
        ],
        122: [
            0,
            0.44444,
            0,
            0,
            0.51111
        ],
        123: [
            0.25,
            0.75,
            0,
            0,
            0.575
        ],
        124: [
            0.25,
            0.75,
            0,
            0,
            0.31944
        ],
        125: [
            0.25,
            0.75,
            0,
            0,
            0.575
        ],
        126: [
            0.35,
            0.34444,
            0,
            0,
            0.575
        ],
        160: [
            0,
            0,
            0,
            0,
            0.25
        ],
        163: [
            0,
            0.69444,
            0,
            0,
            0.86853
        ],
        168: [
            0,
            0.69444,
            0,
            0,
            0.575
        ],
        172: [
            0,
            0.44444,
            0,
            0,
            0.76666
        ],
        176: [
            0,
            0.69444,
            0,
            0,
            0.86944
        ],
        177: [
            0.13333,
            0.63333,
            0,
            0,
            0.89444
        ],
        184: [
            0.17014,
            0,
            0,
            0,
            0.51111
        ],
        198: [
            0,
            0.68611,
            0,
            0,
            1.04166
        ],
        215: [
            0.13333,
            0.63333,
            0,
            0,
            0.89444
        ],
        216: [
            0.04861,
            0.73472,
            0,
            0,
            0.89444
        ],
        223: [
            0,
            0.69444,
            0,
            0,
            0.59722
        ],
        230: [
            0,
            0.44444,
            0,
            0,
            0.83055
        ],
        247: [
            0.13333,
            0.63333,
            0,
            0,
            0.89444
        ],
        248: [
            0.09722,
            0.54167,
            0,
            0,
            0.575
        ],
        305: [
            0,
            0.44444,
            0,
            0,
            0.31944
        ],
        338: [
            0,
            0.68611,
            0,
            0,
            1.16944
        ],
        339: [
            0,
            0.44444,
            0,
            0,
            0.89444
        ],
        567: [
            0.19444,
            0.44444,
            0,
            0,
            0.35139
        ],
        710: [
            0,
            0.69444,
            0,
            0,
            0.575
        ],
        711: [
            0,
            0.63194,
            0,
            0,
            0.575
        ],
        713: [
            0,
            0.59611,
            0,
            0,
            0.575
        ],
        714: [
            0,
            0.69444,
            0,
            0,
            0.575
        ],
        715: [
            0,
            0.69444,
            0,
            0,
            0.575
        ],
        728: [
            0,
            0.69444,
            0,
            0,
            0.575
        ],
        729: [
            0,
            0.69444,
            0,
            0,
            0.31944
        ],
        730: [
            0,
            0.69444,
            0,
            0,
            0.86944
        ],
        732: [
            0,
            0.69444,
            0,
            0,
            0.575
        ],
        733: [
            0,
            0.69444,
            0,
            0,
            0.575
        ],
        915: [
            0,
            0.68611,
            0,
            0,
            0.69166
        ],
        916: [
            0,
            0.68611,
            0,
            0,
            0.95833
        ],
        920: [
            0,
            0.68611,
            0,
            0,
            0.89444
        ],
        923: [
            0,
            0.68611,
            0,
            0,
            0.80555
        ],
        926: [
            0,
            0.68611,
            0,
            0,
            0.76666
        ],
        928: [
            0,
            0.68611,
            0,
            0,
            0.9
        ],
        931: [
            0,
            0.68611,
            0,
            0,
            0.83055
        ],
        933: [
            0,
            0.68611,
            0,
            0,
            0.89444
        ],
        934: [
            0,
            0.68611,
            0,
            0,
            0.83055
        ],
        936: [
            0,
            0.68611,
            0,
            0,
            0.89444
        ],
        937: [
            0,
            0.68611,
            0,
            0,
            0.83055
        ],
        8211: [
            0,
            0.44444,
            0.03194,
            0,
            0.575
        ],
        8212: [
            0,
            0.44444,
            0.03194,
            0,
            1.14999
        ],
        8216: [
            0,
            0.69444,
            0,
            0,
            0.31944
        ],
        8217: [
            0,
            0.69444,
            0,
            0,
            0.31944
        ],
        8220: [
            0,
            0.69444,
            0,
            0,
            0.60278
        ],
        8221: [
            0,
            0.69444,
            0,
            0,
            0.60278
        ],
        8224: [
            0.19444,
            0.69444,
            0,
            0,
            0.51111
        ],
        8225: [
            0.19444,
            0.69444,
            0,
            0,
            0.51111
        ],
        8242: [
            0,
            0.55556,
            0,
            0,
            0.34444
        ],
        8407: [
            0,
            0.72444,
            0.15486,
            0,
            0.575
        ],
        8463: [
            0,
            0.69444,
            0,
            0,
            0.66759
        ],
        8465: [
            0,
            0.69444,
            0,
            0,
            0.83055
        ],
        8467: [
            0,
            0.69444,
            0,
            0,
            0.47361
        ],
        8472: [
            0.19444,
            0.44444,
            0,
            0,
            0.74027
        ],
        8476: [
            0,
            0.69444,
            0,
            0,
            0.83055
        ],
        8501: [
            0,
            0.69444,
            0,
            0,
            0.70277
        ],
        8592: [
            -0.10889,
            0.39111,
            0,
            0,
            1.14999
        ],
        8593: [
            0.19444,
            0.69444,
            0,
            0,
            0.575
        ],
        8594: [
            -0.10889,
            0.39111,
            0,
            0,
            1.14999
        ],
        8595: [
            0.19444,
            0.69444,
            0,
            0,
            0.575
        ],
        8596: [
            -0.10889,
            0.39111,
            0,
            0,
            1.14999
        ],
        8597: [
            0.25,
            0.75,
            0,
            0,
            0.575
        ],
        8598: [
            0.19444,
            0.69444,
            0,
            0,
            1.14999
        ],
        8599: [
            0.19444,
            0.69444,
            0,
            0,
            1.14999
        ],
        8600: [
            0.19444,
            0.69444,
            0,
            0,
            1.14999
        ],
        8601: [
            0.19444,
            0.69444,
            0,
            0,
            1.14999
        ],
        8636: [
            -0.10889,
            0.39111,
            0,
            0,
            1.14999
        ],
        8637: [
            -0.10889,
            0.39111,
            0,
            0,
            1.14999
        ],
        8640: [
            -0.10889,
            0.39111,
            0,
            0,
            1.14999
        ],
        8641: [
            -0.10889,
            0.39111,
            0,
            0,
            1.14999
        ],
        8656: [
            -0.10889,
            0.39111,
            0,
            0,
            1.14999
        ],
        8657: [
            0.19444,
            0.69444,
            0,
            0,
            0.70277
        ],
        8658: [
            -0.10889,
            0.39111,
            0,
            0,
            1.14999
        ],
        8659: [
            0.19444,
            0.69444,
            0,
            0,
            0.70277
        ],
        8660: [
            -0.10889,
            0.39111,
            0,
            0,
            1.14999
        ],
        8661: [
            0.25,
            0.75,
            0,
            0,
            0.70277
        ],
        8704: [
            0,
            0.69444,
            0,
            0,
            0.63889
        ],
        8706: [
            0,
            0.69444,
            0.06389,
            0,
            0.62847
        ],
        8707: [
            0,
            0.69444,
            0,
            0,
            0.63889
        ],
        8709: [
            0.05556,
            0.75,
            0,
            0,
            0.575
        ],
        8711: [
            0,
            0.68611,
            0,
            0,
            0.95833
        ],
        8712: [
            0.08556,
            0.58556,
            0,
            0,
            0.76666
        ],
        8715: [
            0.08556,
            0.58556,
            0,
            0,
            0.76666
        ],
        8722: [
            0.13333,
            0.63333,
            0,
            0,
            0.89444
        ],
        8723: [
            0.13333,
            0.63333,
            0,
            0,
            0.89444
        ],
        8725: [
            0.25,
            0.75,
            0,
            0,
            0.575
        ],
        8726: [
            0.25,
            0.75,
            0,
            0,
            0.575
        ],
        8727: [
            -0.02778,
            0.47222,
            0,
            0,
            0.575
        ],
        8728: [
            -0.02639,
            0.47361,
            0,
            0,
            0.575
        ],
        8729: [
            -0.02639,
            0.47361,
            0,
            0,
            0.575
        ],
        8730: [
            0.18,
            0.82,
            0,
            0,
            0.95833
        ],
        8733: [
            0,
            0.44444,
            0,
            0,
            0.89444
        ],
        8734: [
            0,
            0.44444,
            0,
            0,
            1.14999
        ],
        8736: [
            0,
            0.69224,
            0,
            0,
            0.72222
        ],
        8739: [
            0.25,
            0.75,
            0,
            0,
            0.31944
        ],
        8741: [
            0.25,
            0.75,
            0,
            0,
            0.575
        ],
        8743: [
            0,
            0.55556,
            0,
            0,
            0.76666
        ],
        8744: [
            0,
            0.55556,
            0,
            0,
            0.76666
        ],
        8745: [
            0,
            0.55556,
            0,
            0,
            0.76666
        ],
        8746: [
            0,
            0.55556,
            0,
            0,
            0.76666
        ],
        8747: [
            0.19444,
            0.69444,
            0.12778,
            0,
            0.56875
        ],
        8764: [
            -0.10889,
            0.39111,
            0,
            0,
            0.89444
        ],
        8768: [
            0.19444,
            0.69444,
            0,
            0,
            0.31944
        ],
        8771: [
            0.00222,
            0.50222,
            0,
            0,
            0.89444
        ],
        8773: [
            0.027,
            0.638,
            0,
            0,
            0.894
        ],
        8776: [
            0.02444,
            0.52444,
            0,
            0,
            0.89444
        ],
        8781: [
            0.00222,
            0.50222,
            0,
            0,
            0.89444
        ],
        8801: [
            0.00222,
            0.50222,
            0,
            0,
            0.89444
        ],
        8804: [
            0.19667,
            0.69667,
            0,
            0,
            0.89444
        ],
        8805: [
            0.19667,
            0.69667,
            0,
            0,
            0.89444
        ],
        8810: [
            0.08556,
            0.58556,
            0,
            0,
            1.14999
        ],
        8811: [
            0.08556,
            0.58556,
            0,
            0,
            1.14999
        ],
        8826: [
            0.08556,
            0.58556,
            0,
            0,
            0.89444
        ],
        8827: [
            0.08556,
            0.58556,
            0,
            0,
            0.89444
        ],
        8834: [
            0.08556,
            0.58556,
            0,
            0,
            0.89444
        ],
        8835: [
            0.08556,
            0.58556,
            0,
            0,
            0.89444
        ],
        8838: [
            0.19667,
            0.69667,
            0,
            0,
            0.89444
        ],
        8839: [
            0.19667,
            0.69667,
            0,
            0,
            0.89444
        ],
        8846: [
            0,
            0.55556,
            0,
            0,
            0.76666
        ],
        8849: [
            0.19667,
            0.69667,
            0,
            0,
            0.89444
        ],
        8850: [
            0.19667,
            0.69667,
            0,
            0,
            0.89444
        ],
        8851: [
            0,
            0.55556,
            0,
            0,
            0.76666
        ],
        8852: [
            0,
            0.55556,
            0,
            0,
            0.76666
        ],
        8853: [
            0.13333,
            0.63333,
            0,
            0,
            0.89444
        ],
        8854: [
            0.13333,
            0.63333,
            0,
            0,
            0.89444
        ],
        8855: [
            0.13333,
            0.63333,
            0,
            0,
            0.89444
        ],
        8856: [
            0.13333,
            0.63333,
            0,
            0,
            0.89444
        ],
        8857: [
            0.13333,
            0.63333,
            0,
            0,
            0.89444
        ],
        8866: [
            0,
            0.69444,
            0,
            0,
            0.70277
        ],
        8867: [
            0,
            0.69444,
            0,
            0,
            0.70277
        ],
        8868: [
            0,
            0.69444,
            0,
            0,
            0.89444
        ],
        8869: [
            0,
            0.69444,
            0,
            0,
            0.89444
        ],
        8900: [
            -0.02639,
            0.47361,
            0,
            0,
            0.575
        ],
        8901: [
            -0.02639,
            0.47361,
            0,
            0,
            0.31944
        ],
        8902: [
            -0.02778,
            0.47222,
            0,
            0,
            0.575
        ],
        8968: [
            0.25,
            0.75,
            0,
            0,
            0.51111
        ],
        8969: [
            0.25,
            0.75,
            0,
            0,
            0.51111
        ],
        8970: [
            0.25,
            0.75,
            0,
            0,
            0.51111
        ],
        8971: [
            0.25,
            0.75,
            0,
            0,
            0.51111
        ],
        8994: [
            -0.13889,
            0.36111,
            0,
            0,
            1.14999
        ],
        8995: [
            -0.13889,
            0.36111,
            0,
            0,
            1.14999
        ],
        9651: [
            0.19444,
            0.69444,
            0,
            0,
            1.02222
        ],
        9657: [
            -0.02778,
            0.47222,
            0,
            0,
            0.575
        ],
        9661: [
            0.19444,
            0.69444,
            0,
            0,
            1.02222
        ],
        9667: [
            -0.02778,
            0.47222,
            0,
            0,
            0.575
        ],
        9711: [
            0.19444,
            0.69444,
            0,
            0,
            1.14999
        ],
        9824: [
            0.12963,
            0.69444,
            0,
            0,
            0.89444
        ],
        9825: [
            0.12963,
            0.69444,
            0,
            0,
            0.89444
        ],
        9826: [
            0.12963,
            0.69444,
            0,
            0,
            0.89444
        ],
        9827: [
            0.12963,
            0.69444,
            0,
            0,
            0.89444
        ],
        9837: [
            0,
            0.75,
            0,
            0,
            0.44722
        ],
        9838: [
            0.19444,
            0.69444,
            0,
            0,
            0.44722
        ],
        9839: [
            0.19444,
            0.69444,
            0,
            0,
            0.44722
        ],
        10216: [
            0.25,
            0.75,
            0,
            0,
            0.44722
        ],
        10217: [
            0.25,
            0.75,
            0,
            0,
            0.44722
        ],
        10815: [
            0,
            0.68611,
            0,
            0,
            0.9
        ],
        10927: [
            0.19667,
            0.69667,
            0,
            0,
            0.89444
        ],
        10928: [
            0.19667,
            0.69667,
            0,
            0,
            0.89444
        ],
        57376: [
            0.19444,
            0.69444,
            0,
            0,
            0
        ]
    },
    "Main-BoldItalic": {
        32: [
            0,
            0,
            0,
            0,
            0.25
        ],
        33: [
            0,
            0.69444,
            0.11417,
            0,
            0.38611
        ],
        34: [
            0,
            0.69444,
            0.07939,
            0,
            0.62055
        ],
        35: [
            0.19444,
            0.69444,
            0.06833,
            0,
            0.94444
        ],
        37: [
            0.05556,
            0.75,
            0.12861,
            0,
            0.94444
        ],
        38: [
            0,
            0.69444,
            0.08528,
            0,
            0.88555
        ],
        39: [
            0,
            0.69444,
            0.12945,
            0,
            0.35555
        ],
        40: [
            0.25,
            0.75,
            0.15806,
            0,
            0.47333
        ],
        41: [
            0.25,
            0.75,
            0.03306,
            0,
            0.47333
        ],
        42: [
            0,
            0.75,
            0.14333,
            0,
            0.59111
        ],
        43: [
            0.10333,
            0.60333,
            0.03306,
            0,
            0.88555
        ],
        44: [
            0.19444,
            0.14722,
            0,
            0,
            0.35555
        ],
        45: [
            0,
            0.44444,
            0.02611,
            0,
            0.41444
        ],
        46: [
            0,
            0.14722,
            0,
            0,
            0.35555
        ],
        47: [
            0.25,
            0.75,
            0.15806,
            0,
            0.59111
        ],
        48: [
            0,
            0.64444,
            0.13167,
            0,
            0.59111
        ],
        49: [
            0,
            0.64444,
            0.13167,
            0,
            0.59111
        ],
        50: [
            0,
            0.64444,
            0.13167,
            0,
            0.59111
        ],
        51: [
            0,
            0.64444,
            0.13167,
            0,
            0.59111
        ],
        52: [
            0.19444,
            0.64444,
            0.13167,
            0,
            0.59111
        ],
        53: [
            0,
            0.64444,
            0.13167,
            0,
            0.59111
        ],
        54: [
            0,
            0.64444,
            0.13167,
            0,
            0.59111
        ],
        55: [
            0.19444,
            0.64444,
            0.13167,
            0,
            0.59111
        ],
        56: [
            0,
            0.64444,
            0.13167,
            0,
            0.59111
        ],
        57: [
            0,
            0.64444,
            0.13167,
            0,
            0.59111
        ],
        58: [
            0,
            0.44444,
            0.06695,
            0,
            0.35555
        ],
        59: [
            0.19444,
            0.44444,
            0.06695,
            0,
            0.35555
        ],
        61: [
            -0.10889,
            0.39111,
            0.06833,
            0,
            0.88555
        ],
        63: [
            0,
            0.69444,
            0.11472,
            0,
            0.59111
        ],
        64: [
            0,
            0.69444,
            0.09208,
            0,
            0.88555
        ],
        65: [
            0,
            0.68611,
            0,
            0,
            0.86555
        ],
        66: [
            0,
            0.68611,
            0.0992,
            0,
            0.81666
        ],
        67: [
            0,
            0.68611,
            0.14208,
            0,
            0.82666
        ],
        68: [
            0,
            0.68611,
            0.09062,
            0,
            0.87555
        ],
        69: [
            0,
            0.68611,
            0.11431,
            0,
            0.75666
        ],
        70: [
            0,
            0.68611,
            0.12903,
            0,
            0.72722
        ],
        71: [
            0,
            0.68611,
            0.07347,
            0,
            0.89527
        ],
        72: [
            0,
            0.68611,
            0.17208,
            0,
            0.8961
        ],
        73: [
            0,
            0.68611,
            0.15681,
            0,
            0.47166
        ],
        74: [
            0,
            0.68611,
            0.145,
            0,
            0.61055
        ],
        75: [
            0,
            0.68611,
            0.14208,
            0,
            0.89499
        ],
        76: [
            0,
            0.68611,
            0,
            0,
            0.69777
        ],
        77: [
            0,
            0.68611,
            0.17208,
            0,
            1.07277
        ],
        78: [
            0,
            0.68611,
            0.17208,
            0,
            0.8961
        ],
        79: [
            0,
            0.68611,
            0.09062,
            0,
            0.85499
        ],
        80: [
            0,
            0.68611,
            0.0992,
            0,
            0.78721
        ],
        81: [
            0.19444,
            0.68611,
            0.09062,
            0,
            0.85499
        ],
        82: [
            0,
            0.68611,
            0.02559,
            0,
            0.85944
        ],
        83: [
            0,
            0.68611,
            0.11264,
            0,
            0.64999
        ],
        84: [
            0,
            0.68611,
            0.12903,
            0,
            0.7961
        ],
        85: [
            0,
            0.68611,
            0.17208,
            0,
            0.88083
        ],
        86: [
            0,
            0.68611,
            0.18625,
            0,
            0.86555
        ],
        87: [
            0,
            0.68611,
            0.18625,
            0,
            1.15999
        ],
        88: [
            0,
            0.68611,
            0.15681,
            0,
            0.86555
        ],
        89: [
            0,
            0.68611,
            0.19803,
            0,
            0.86555
        ],
        90: [
            0,
            0.68611,
            0.14208,
            0,
            0.70888
        ],
        91: [
            0.25,
            0.75,
            0.1875,
            0,
            0.35611
        ],
        93: [
            0.25,
            0.75,
            0.09972,
            0,
            0.35611
        ],
        94: [
            0,
            0.69444,
            0.06709,
            0,
            0.59111
        ],
        95: [
            0.31,
            0.13444,
            0.09811,
            0,
            0.59111
        ],
        97: [
            0,
            0.44444,
            0.09426,
            0,
            0.59111
        ],
        98: [
            0,
            0.69444,
            0.07861,
            0,
            0.53222
        ],
        99: [
            0,
            0.44444,
            0.05222,
            0,
            0.53222
        ],
        100: [
            0,
            0.69444,
            0.10861,
            0,
            0.59111
        ],
        101: [
            0,
            0.44444,
            0.085,
            0,
            0.53222
        ],
        102: [
            0.19444,
            0.69444,
            0.21778,
            0,
            0.4
        ],
        103: [
            0.19444,
            0.44444,
            0.105,
            0,
            0.53222
        ],
        104: [
            0,
            0.69444,
            0.09426,
            0,
            0.59111
        ],
        105: [
            0,
            0.69326,
            0.11387,
            0,
            0.35555
        ],
        106: [
            0.19444,
            0.69326,
            0.1672,
            0,
            0.35555
        ],
        107: [
            0,
            0.69444,
            0.11111,
            0,
            0.53222
        ],
        108: [
            0,
            0.69444,
            0.10861,
            0,
            0.29666
        ],
        109: [
            0,
            0.44444,
            0.09426,
            0,
            0.94444
        ],
        110: [
            0,
            0.44444,
            0.09426,
            0,
            0.64999
        ],
        111: [
            0,
            0.44444,
            0.07861,
            0,
            0.59111
        ],
        112: [
            0.19444,
            0.44444,
            0.07861,
            0,
            0.59111
        ],
        113: [
            0.19444,
            0.44444,
            0.105,
            0,
            0.53222
        ],
        114: [
            0,
            0.44444,
            0.11111,
            0,
            0.50167
        ],
        115: [
            0,
            0.44444,
            0.08167,
            0,
            0.48694
        ],
        116: [
            0,
            0.63492,
            0.09639,
            0,
            0.385
        ],
        117: [
            0,
            0.44444,
            0.09426,
            0,
            0.62055
        ],
        118: [
            0,
            0.44444,
            0.11111,
            0,
            0.53222
        ],
        119: [
            0,
            0.44444,
            0.11111,
            0,
            0.76777
        ],
        120: [
            0,
            0.44444,
            0.12583,
            0,
            0.56055
        ],
        121: [
            0.19444,
            0.44444,
            0.105,
            0,
            0.56166
        ],
        122: [
            0,
            0.44444,
            0.13889,
            0,
            0.49055
        ],
        126: [
            0.35,
            0.34444,
            0.11472,
            0,
            0.59111
        ],
        160: [
            0,
            0,
            0,
            0,
            0.25
        ],
        168: [
            0,
            0.69444,
            0.11473,
            0,
            0.59111
        ],
        176: [
            0,
            0.69444,
            0,
            0,
            0.94888
        ],
        184: [
            0.17014,
            0,
            0,
            0,
            0.53222
        ],
        198: [
            0,
            0.68611,
            0.11431,
            0,
            1.02277
        ],
        216: [
            0.04861,
            0.73472,
            0.09062,
            0,
            0.88555
        ],
        223: [
            0.19444,
            0.69444,
            0.09736,
            0,
            0.665
        ],
        230: [
            0,
            0.44444,
            0.085,
            0,
            0.82666
        ],
        248: [
            0.09722,
            0.54167,
            0.09458,
            0,
            0.59111
        ],
        305: [
            0,
            0.44444,
            0.09426,
            0,
            0.35555
        ],
        338: [
            0,
            0.68611,
            0.11431,
            0,
            1.14054
        ],
        339: [
            0,
            0.44444,
            0.085,
            0,
            0.82666
        ],
        567: [
            0.19444,
            0.44444,
            0.04611,
            0,
            0.385
        ],
        710: [
            0,
            0.69444,
            0.06709,
            0,
            0.59111
        ],
        711: [
            0,
            0.63194,
            0.08271,
            0,
            0.59111
        ],
        713: [
            0,
            0.59444,
            0.10444,
            0,
            0.59111
        ],
        714: [
            0,
            0.69444,
            0.08528,
            0,
            0.59111
        ],
        715: [
            0,
            0.69444,
            0,
            0,
            0.59111
        ],
        728: [
            0,
            0.69444,
            0.10333,
            0,
            0.59111
        ],
        729: [
            0,
            0.69444,
            0.12945,
            0,
            0.35555
        ],
        730: [
            0,
            0.69444,
            0,
            0,
            0.94888
        ],
        732: [
            0,
            0.69444,
            0.11472,
            0,
            0.59111
        ],
        733: [
            0,
            0.69444,
            0.11472,
            0,
            0.59111
        ],
        915: [
            0,
            0.68611,
            0.12903,
            0,
            0.69777
        ],
        916: [
            0,
            0.68611,
            0,
            0,
            0.94444
        ],
        920: [
            0,
            0.68611,
            0.09062,
            0,
            0.88555
        ],
        923: [
            0,
            0.68611,
            0,
            0,
            0.80666
        ],
        926: [
            0,
            0.68611,
            0.15092,
            0,
            0.76777
        ],
        928: [
            0,
            0.68611,
            0.17208,
            0,
            0.8961
        ],
        931: [
            0,
            0.68611,
            0.11431,
            0,
            0.82666
        ],
        933: [
            0,
            0.68611,
            0.10778,
            0,
            0.88555
        ],
        934: [
            0,
            0.68611,
            0.05632,
            0,
            0.82666
        ],
        936: [
            0,
            0.68611,
            0.10778,
            0,
            0.88555
        ],
        937: [
            0,
            0.68611,
            0.0992,
            0,
            0.82666
        ],
        8211: [
            0,
            0.44444,
            0.09811,
            0,
            0.59111
        ],
        8212: [
            0,
            0.44444,
            0.09811,
            0,
            1.18221
        ],
        8216: [
            0,
            0.69444,
            0.12945,
            0,
            0.35555
        ],
        8217: [
            0,
            0.69444,
            0.12945,
            0,
            0.35555
        ],
        8220: [
            0,
            0.69444,
            0.16772,
            0,
            0.62055
        ],
        8221: [
            0,
            0.69444,
            0.07939,
            0,
            0.62055
        ]
    },
    "Main-Italic": {
        32: [
            0,
            0,
            0,
            0,
            0.25
        ],
        33: [
            0,
            0.69444,
            0.12417,
            0,
            0.30667
        ],
        34: [
            0,
            0.69444,
            0.06961,
            0,
            0.51444
        ],
        35: [
            0.19444,
            0.69444,
            0.06616,
            0,
            0.81777
        ],
        37: [
            0.05556,
            0.75,
            0.13639,
            0,
            0.81777
        ],
        38: [
            0,
            0.69444,
            0.09694,
            0,
            0.76666
        ],
        39: [
            0,
            0.69444,
            0.12417,
            0,
            0.30667
        ],
        40: [
            0.25,
            0.75,
            0.16194,
            0,
            0.40889
        ],
        41: [
            0.25,
            0.75,
            0.03694,
            0,
            0.40889
        ],
        42: [
            0,
            0.75,
            0.14917,
            0,
            0.51111
        ],
        43: [
            0.05667,
            0.56167,
            0.03694,
            0,
            0.76666
        ],
        44: [
            0.19444,
            0.10556,
            0,
            0,
            0.30667
        ],
        45: [
            0,
            0.43056,
            0.02826,
            0,
            0.35778
        ],
        46: [
            0,
            0.10556,
            0,
            0,
            0.30667
        ],
        47: [
            0.25,
            0.75,
            0.16194,
            0,
            0.51111
        ],
        48: [
            0,
            0.64444,
            0.13556,
            0,
            0.51111
        ],
        49: [
            0,
            0.64444,
            0.13556,
            0,
            0.51111
        ],
        50: [
            0,
            0.64444,
            0.13556,
            0,
            0.51111
        ],
        51: [
            0,
            0.64444,
            0.13556,
            0,
            0.51111
        ],
        52: [
            0.19444,
            0.64444,
            0.13556,
            0,
            0.51111
        ],
        53: [
            0,
            0.64444,
            0.13556,
            0,
            0.51111
        ],
        54: [
            0,
            0.64444,
            0.13556,
            0,
            0.51111
        ],
        55: [
            0.19444,
            0.64444,
            0.13556,
            0,
            0.51111
        ],
        56: [
            0,
            0.64444,
            0.13556,
            0,
            0.51111
        ],
        57: [
            0,
            0.64444,
            0.13556,
            0,
            0.51111
        ],
        58: [
            0,
            0.43056,
            0.0582,
            0,
            0.30667
        ],
        59: [
            0.19444,
            0.43056,
            0.0582,
            0,
            0.30667
        ],
        61: [
            -0.13313,
            0.36687,
            0.06616,
            0,
            0.76666
        ],
        63: [
            0,
            0.69444,
            0.1225,
            0,
            0.51111
        ],
        64: [
            0,
            0.69444,
            0.09597,
            0,
            0.76666
        ],
        65: [
            0,
            0.68333,
            0,
            0,
            0.74333
        ],
        66: [
            0,
            0.68333,
            0.10257,
            0,
            0.70389
        ],
        67: [
            0,
            0.68333,
            0.14528,
            0,
            0.71555
        ],
        68: [
            0,
            0.68333,
            0.09403,
            0,
            0.755
        ],
        69: [
            0,
            0.68333,
            0.12028,
            0,
            0.67833
        ],
        70: [
            0,
            0.68333,
            0.13305,
            0,
            0.65277
        ],
        71: [
            0,
            0.68333,
            0.08722,
            0,
            0.77361
        ],
        72: [
            0,
            0.68333,
            0.16389,
            0,
            0.74333
        ],
        73: [
            0,
            0.68333,
            0.15806,
            0,
            0.38555
        ],
        74: [
            0,
            0.68333,
            0.14028,
            0,
            0.525
        ],
        75: [
            0,
            0.68333,
            0.14528,
            0,
            0.76888
        ],
        76: [
            0,
            0.68333,
            0,
            0,
            0.62722
        ],
        77: [
            0,
            0.68333,
            0.16389,
            0,
            0.89666
        ],
        78: [
            0,
            0.68333,
            0.16389,
            0,
            0.74333
        ],
        79: [
            0,
            0.68333,
            0.09403,
            0,
            0.76666
        ],
        80: [
            0,
            0.68333,
            0.10257,
            0,
            0.67833
        ],
        81: [
            0.19444,
            0.68333,
            0.09403,
            0,
            0.76666
        ],
        82: [
            0,
            0.68333,
            0.03868,
            0,
            0.72944
        ],
        83: [
            0,
            0.68333,
            0.11972,
            0,
            0.56222
        ],
        84: [
            0,
            0.68333,
            0.13305,
            0,
            0.71555
        ],
        85: [
            0,
            0.68333,
            0.16389,
            0,
            0.74333
        ],
        86: [
            0,
            0.68333,
            0.18361,
            0,
            0.74333
        ],
        87: [
            0,
            0.68333,
            0.18361,
            0,
            0.99888
        ],
        88: [
            0,
            0.68333,
            0.15806,
            0,
            0.74333
        ],
        89: [
            0,
            0.68333,
            0.19383,
            0,
            0.74333
        ],
        90: [
            0,
            0.68333,
            0.14528,
            0,
            0.61333
        ],
        91: [
            0.25,
            0.75,
            0.1875,
            0,
            0.30667
        ],
        93: [
            0.25,
            0.75,
            0.10528,
            0,
            0.30667
        ],
        94: [
            0,
            0.69444,
            0.06646,
            0,
            0.51111
        ],
        95: [
            0.31,
            0.12056,
            0.09208,
            0,
            0.51111
        ],
        97: [
            0,
            0.43056,
            0.07671,
            0,
            0.51111
        ],
        98: [
            0,
            0.69444,
            0.06312,
            0,
            0.46
        ],
        99: [
            0,
            0.43056,
            0.05653,
            0,
            0.46
        ],
        100: [
            0,
            0.69444,
            0.10333,
            0,
            0.51111
        ],
        101: [
            0,
            0.43056,
            0.07514,
            0,
            0.46
        ],
        102: [
            0.19444,
            0.69444,
            0.21194,
            0,
            0.30667
        ],
        103: [
            0.19444,
            0.43056,
            0.08847,
            0,
            0.46
        ],
        104: [
            0,
            0.69444,
            0.07671,
            0,
            0.51111
        ],
        105: [
            0,
            0.65536,
            0.1019,
            0,
            0.30667
        ],
        106: [
            0.19444,
            0.65536,
            0.14467,
            0,
            0.30667
        ],
        107: [
            0,
            0.69444,
            0.10764,
            0,
            0.46
        ],
        108: [
            0,
            0.69444,
            0.10333,
            0,
            0.25555
        ],
        109: [
            0,
            0.43056,
            0.07671,
            0,
            0.81777
        ],
        110: [
            0,
            0.43056,
            0.07671,
            0,
            0.56222
        ],
        111: [
            0,
            0.43056,
            0.06312,
            0,
            0.51111
        ],
        112: [
            0.19444,
            0.43056,
            0.06312,
            0,
            0.51111
        ],
        113: [
            0.19444,
            0.43056,
            0.08847,
            0,
            0.46
        ],
        114: [
            0,
            0.43056,
            0.10764,
            0,
            0.42166
        ],
        115: [
            0,
            0.43056,
            0.08208,
            0,
            0.40889
        ],
        116: [
            0,
            0.61508,
            0.09486,
            0,
            0.33222
        ],
        117: [
            0,
            0.43056,
            0.07671,
            0,
            0.53666
        ],
        118: [
            0,
            0.43056,
            0.10764,
            0,
            0.46
        ],
        119: [
            0,
            0.43056,
            0.10764,
            0,
            0.66444
        ],
        120: [
            0,
            0.43056,
            0.12042,
            0,
            0.46389
        ],
        121: [
            0.19444,
            0.43056,
            0.08847,
            0,
            0.48555
        ],
        122: [
            0,
            0.43056,
            0.12292,
            0,
            0.40889
        ],
        126: [
            0.35,
            0.31786,
            0.11585,
            0,
            0.51111
        ],
        160: [
            0,
            0,
            0,
            0,
            0.25
        ],
        168: [
            0,
            0.66786,
            0.10474,
            0,
            0.51111
        ],
        176: [
            0,
            0.69444,
            0,
            0,
            0.83129
        ],
        184: [
            0.17014,
            0,
            0,
            0,
            0.46
        ],
        198: [
            0,
            0.68333,
            0.12028,
            0,
            0.88277
        ],
        216: [
            0.04861,
            0.73194,
            0.09403,
            0,
            0.76666
        ],
        223: [
            0.19444,
            0.69444,
            0.10514,
            0,
            0.53666
        ],
        230: [
            0,
            0.43056,
            0.07514,
            0,
            0.71555
        ],
        248: [
            0.09722,
            0.52778,
            0.09194,
            0,
            0.51111
        ],
        338: [
            0,
            0.68333,
            0.12028,
            0,
            0.98499
        ],
        339: [
            0,
            0.43056,
            0.07514,
            0,
            0.71555
        ],
        710: [
            0,
            0.69444,
            0.06646,
            0,
            0.51111
        ],
        711: [
            0,
            0.62847,
            0.08295,
            0,
            0.51111
        ],
        713: [
            0,
            0.56167,
            0.10333,
            0,
            0.51111
        ],
        714: [
            0,
            0.69444,
            0.09694,
            0,
            0.51111
        ],
        715: [
            0,
            0.69444,
            0,
            0,
            0.51111
        ],
        728: [
            0,
            0.69444,
            0.10806,
            0,
            0.51111
        ],
        729: [
            0,
            0.66786,
            0.11752,
            0,
            0.30667
        ],
        730: [
            0,
            0.69444,
            0,
            0,
            0.83129
        ],
        732: [
            0,
            0.66786,
            0.11585,
            0,
            0.51111
        ],
        733: [
            0,
            0.69444,
            0.1225,
            0,
            0.51111
        ],
        915: [
            0,
            0.68333,
            0.13305,
            0,
            0.62722
        ],
        916: [
            0,
            0.68333,
            0,
            0,
            0.81777
        ],
        920: [
            0,
            0.68333,
            0.09403,
            0,
            0.76666
        ],
        923: [
            0,
            0.68333,
            0,
            0,
            0.69222
        ],
        926: [
            0,
            0.68333,
            0.15294,
            0,
            0.66444
        ],
        928: [
            0,
            0.68333,
            0.16389,
            0,
            0.74333
        ],
        931: [
            0,
            0.68333,
            0.12028,
            0,
            0.71555
        ],
        933: [
            0,
            0.68333,
            0.11111,
            0,
            0.76666
        ],
        934: [
            0,
            0.68333,
            0.05986,
            0,
            0.71555
        ],
        936: [
            0,
            0.68333,
            0.11111,
            0,
            0.76666
        ],
        937: [
            0,
            0.68333,
            0.10257,
            0,
            0.71555
        ],
        8211: [
            0,
            0.43056,
            0.09208,
            0,
            0.51111
        ],
        8212: [
            0,
            0.43056,
            0.09208,
            0,
            1.02222
        ],
        8216: [
            0,
            0.69444,
            0.12417,
            0,
            0.30667
        ],
        8217: [
            0,
            0.69444,
            0.12417,
            0,
            0.30667
        ],
        8220: [
            0,
            0.69444,
            0.1685,
            0,
            0.51444
        ],
        8221: [
            0,
            0.69444,
            0.06961,
            0,
            0.51444
        ],
        8463: [
            0,
            0.68889,
            0,
            0,
            0.54028
        ]
    },
    "Main-Regular": {
        32: [
            0,
            0,
            0,
            0,
            0.25
        ],
        33: [
            0,
            0.69444,
            0,
            0,
            0.27778
        ],
        34: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        35: [
            0.19444,
            0.69444,
            0,
            0,
            0.83334
        ],
        36: [
            0.05556,
            0.75,
            0,
            0,
            0.5
        ],
        37: [
            0.05556,
            0.75,
            0,
            0,
            0.83334
        ],
        38: [
            0,
            0.69444,
            0,
            0,
            0.77778
        ],
        39: [
            0,
            0.69444,
            0,
            0,
            0.27778
        ],
        40: [
            0.25,
            0.75,
            0,
            0,
            0.38889
        ],
        41: [
            0.25,
            0.75,
            0,
            0,
            0.38889
        ],
        42: [
            0,
            0.75,
            0,
            0,
            0.5
        ],
        43: [
            0.08333,
            0.58333,
            0,
            0,
            0.77778
        ],
        44: [
            0.19444,
            0.10556,
            0,
            0,
            0.27778
        ],
        45: [
            0,
            0.43056,
            0,
            0,
            0.33333
        ],
        46: [
            0,
            0.10556,
            0,
            0,
            0.27778
        ],
        47: [
            0.25,
            0.75,
            0,
            0,
            0.5
        ],
        48: [
            0,
            0.64444,
            0,
            0,
            0.5
        ],
        49: [
            0,
            0.64444,
            0,
            0,
            0.5
        ],
        50: [
            0,
            0.64444,
            0,
            0,
            0.5
        ],
        51: [
            0,
            0.64444,
            0,
            0,
            0.5
        ],
        52: [
            0,
            0.64444,
            0,
            0,
            0.5
        ],
        53: [
            0,
            0.64444,
            0,
            0,
            0.5
        ],
        54: [
            0,
            0.64444,
            0,
            0,
            0.5
        ],
        55: [
            0,
            0.64444,
            0,
            0,
            0.5
        ],
        56: [
            0,
            0.64444,
            0,
            0,
            0.5
        ],
        57: [
            0,
            0.64444,
            0,
            0,
            0.5
        ],
        58: [
            0,
            0.43056,
            0,
            0,
            0.27778
        ],
        59: [
            0.19444,
            0.43056,
            0,
            0,
            0.27778
        ],
        60: [
            0.0391,
            0.5391,
            0,
            0,
            0.77778
        ],
        61: [
            -0.13313,
            0.36687,
            0,
            0,
            0.77778
        ],
        62: [
            0.0391,
            0.5391,
            0,
            0,
            0.77778
        ],
        63: [
            0,
            0.69444,
            0,
            0,
            0.47222
        ],
        64: [
            0,
            0.69444,
            0,
            0,
            0.77778
        ],
        65: [
            0,
            0.68333,
            0,
            0,
            0.75
        ],
        66: [
            0,
            0.68333,
            0,
            0,
            0.70834
        ],
        67: [
            0,
            0.68333,
            0,
            0,
            0.72222
        ],
        68: [
            0,
            0.68333,
            0,
            0,
            0.76389
        ],
        69: [
            0,
            0.68333,
            0,
            0,
            0.68056
        ],
        70: [
            0,
            0.68333,
            0,
            0,
            0.65278
        ],
        71: [
            0,
            0.68333,
            0,
            0,
            0.78472
        ],
        72: [
            0,
            0.68333,
            0,
            0,
            0.75
        ],
        73: [
            0,
            0.68333,
            0,
            0,
            0.36111
        ],
        74: [
            0,
            0.68333,
            0,
            0,
            0.51389
        ],
        75: [
            0,
            0.68333,
            0,
            0,
            0.77778
        ],
        76: [
            0,
            0.68333,
            0,
            0,
            0.625
        ],
        77: [
            0,
            0.68333,
            0,
            0,
            0.91667
        ],
        78: [
            0,
            0.68333,
            0,
            0,
            0.75
        ],
        79: [
            0,
            0.68333,
            0,
            0,
            0.77778
        ],
        80: [
            0,
            0.68333,
            0,
            0,
            0.68056
        ],
        81: [
            0.19444,
            0.68333,
            0,
            0,
            0.77778
        ],
        82: [
            0,
            0.68333,
            0,
            0,
            0.73611
        ],
        83: [
            0,
            0.68333,
            0,
            0,
            0.55556
        ],
        84: [
            0,
            0.68333,
            0,
            0,
            0.72222
        ],
        85: [
            0,
            0.68333,
            0,
            0,
            0.75
        ],
        86: [
            0,
            0.68333,
            0.01389,
            0,
            0.75
        ],
        87: [
            0,
            0.68333,
            0.01389,
            0,
            1.02778
        ],
        88: [
            0,
            0.68333,
            0,
            0,
            0.75
        ],
        89: [
            0,
            0.68333,
            0.025,
            0,
            0.75
        ],
        90: [
            0,
            0.68333,
            0,
            0,
            0.61111
        ],
        91: [
            0.25,
            0.75,
            0,
            0,
            0.27778
        ],
        92: [
            0.25,
            0.75,
            0,
            0,
            0.5
        ],
        93: [
            0.25,
            0.75,
            0,
            0,
            0.27778
        ],
        94: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        95: [
            0.31,
            0.12056,
            0.02778,
            0,
            0.5
        ],
        97: [
            0,
            0.43056,
            0,
            0,
            0.5
        ],
        98: [
            0,
            0.69444,
            0,
            0,
            0.55556
        ],
        99: [
            0,
            0.43056,
            0,
            0,
            0.44445
        ],
        100: [
            0,
            0.69444,
            0,
            0,
            0.55556
        ],
        101: [
            0,
            0.43056,
            0,
            0,
            0.44445
        ],
        102: [
            0,
            0.69444,
            0.07778,
            0,
            0.30556
        ],
        103: [
            0.19444,
            0.43056,
            0.01389,
            0,
            0.5
        ],
        104: [
            0,
            0.69444,
            0,
            0,
            0.55556
        ],
        105: [
            0,
            0.66786,
            0,
            0,
            0.27778
        ],
        106: [
            0.19444,
            0.66786,
            0,
            0,
            0.30556
        ],
        107: [
            0,
            0.69444,
            0,
            0,
            0.52778
        ],
        108: [
            0,
            0.69444,
            0,
            0,
            0.27778
        ],
        109: [
            0,
            0.43056,
            0,
            0,
            0.83334
        ],
        110: [
            0,
            0.43056,
            0,
            0,
            0.55556
        ],
        111: [
            0,
            0.43056,
            0,
            0,
            0.5
        ],
        112: [
            0.19444,
            0.43056,
            0,
            0,
            0.55556
        ],
        113: [
            0.19444,
            0.43056,
            0,
            0,
            0.52778
        ],
        114: [
            0,
            0.43056,
            0,
            0,
            0.39167
        ],
        115: [
            0,
            0.43056,
            0,
            0,
            0.39445
        ],
        116: [
            0,
            0.61508,
            0,
            0,
            0.38889
        ],
        117: [
            0,
            0.43056,
            0,
            0,
            0.55556
        ],
        118: [
            0,
            0.43056,
            0.01389,
            0,
            0.52778
        ],
        119: [
            0,
            0.43056,
            0.01389,
            0,
            0.72222
        ],
        120: [
            0,
            0.43056,
            0,
            0,
            0.52778
        ],
        121: [
            0.19444,
            0.43056,
            0.01389,
            0,
            0.52778
        ],
        122: [
            0,
            0.43056,
            0,
            0,
            0.44445
        ],
        123: [
            0.25,
            0.75,
            0,
            0,
            0.5
        ],
        124: [
            0.25,
            0.75,
            0,
            0,
            0.27778
        ],
        125: [
            0.25,
            0.75,
            0,
            0,
            0.5
        ],
        126: [
            0.35,
            0.31786,
            0,
            0,
            0.5
        ],
        160: [
            0,
            0,
            0,
            0,
            0.25
        ],
        163: [
            0,
            0.69444,
            0,
            0,
            0.76909
        ],
        167: [
            0.19444,
            0.69444,
            0,
            0,
            0.44445
        ],
        168: [
            0,
            0.66786,
            0,
            0,
            0.5
        ],
        172: [
            0,
            0.43056,
            0,
            0,
            0.66667
        ],
        176: [
            0,
            0.69444,
            0,
            0,
            0.75
        ],
        177: [
            0.08333,
            0.58333,
            0,
            0,
            0.77778
        ],
        182: [
            0.19444,
            0.69444,
            0,
            0,
            0.61111
        ],
        184: [
            0.17014,
            0,
            0,
            0,
            0.44445
        ],
        198: [
            0,
            0.68333,
            0,
            0,
            0.90278
        ],
        215: [
            0.08333,
            0.58333,
            0,
            0,
            0.77778
        ],
        216: [
            0.04861,
            0.73194,
            0,
            0,
            0.77778
        ],
        223: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        230: [
            0,
            0.43056,
            0,
            0,
            0.72222
        ],
        247: [
            0.08333,
            0.58333,
            0,
            0,
            0.77778
        ],
        248: [
            0.09722,
            0.52778,
            0,
            0,
            0.5
        ],
        305: [
            0,
            0.43056,
            0,
            0,
            0.27778
        ],
        338: [
            0,
            0.68333,
            0,
            0,
            1.01389
        ],
        339: [
            0,
            0.43056,
            0,
            0,
            0.77778
        ],
        567: [
            0.19444,
            0.43056,
            0,
            0,
            0.30556
        ],
        710: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        711: [
            0,
            0.62847,
            0,
            0,
            0.5
        ],
        713: [
            0,
            0.56778,
            0,
            0,
            0.5
        ],
        714: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        715: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        728: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        729: [
            0,
            0.66786,
            0,
            0,
            0.27778
        ],
        730: [
            0,
            0.69444,
            0,
            0,
            0.75
        ],
        732: [
            0,
            0.66786,
            0,
            0,
            0.5
        ],
        733: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        915: [
            0,
            0.68333,
            0,
            0,
            0.625
        ],
        916: [
            0,
            0.68333,
            0,
            0,
            0.83334
        ],
        920: [
            0,
            0.68333,
            0,
            0,
            0.77778
        ],
        923: [
            0,
            0.68333,
            0,
            0,
            0.69445
        ],
        926: [
            0,
            0.68333,
            0,
            0,
            0.66667
        ],
        928: [
            0,
            0.68333,
            0,
            0,
            0.75
        ],
        931: [
            0,
            0.68333,
            0,
            0,
            0.72222
        ],
        933: [
            0,
            0.68333,
            0,
            0,
            0.77778
        ],
        934: [
            0,
            0.68333,
            0,
            0,
            0.72222
        ],
        936: [
            0,
            0.68333,
            0,
            0,
            0.77778
        ],
        937: [
            0,
            0.68333,
            0,
            0,
            0.72222
        ],
        8211: [
            0,
            0.43056,
            0.02778,
            0,
            0.5
        ],
        8212: [
            0,
            0.43056,
            0.02778,
            0,
            1
        ],
        8216: [
            0,
            0.69444,
            0,
            0,
            0.27778
        ],
        8217: [
            0,
            0.69444,
            0,
            0,
            0.27778
        ],
        8220: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        8221: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        8224: [
            0.19444,
            0.69444,
            0,
            0,
            0.44445
        ],
        8225: [
            0.19444,
            0.69444,
            0,
            0,
            0.44445
        ],
        8230: [
            0,
            0.123,
            0,
            0,
            1.172
        ],
        8242: [
            0,
            0.55556,
            0,
            0,
            0.275
        ],
        8407: [
            0,
            0.71444,
            0.15382,
            0,
            0.5
        ],
        8463: [
            0,
            0.68889,
            0,
            0,
            0.54028
        ],
        8465: [
            0,
            0.69444,
            0,
            0,
            0.72222
        ],
        8467: [
            0,
            0.69444,
            0,
            0.11111,
            0.41667
        ],
        8472: [
            0.19444,
            0.43056,
            0,
            0.11111,
            0.63646
        ],
        8476: [
            0,
            0.69444,
            0,
            0,
            0.72222
        ],
        8501: [
            0,
            0.69444,
            0,
            0,
            0.61111
        ],
        8592: [
            -0.13313,
            0.36687,
            0,
            0,
            1
        ],
        8593: [
            0.19444,
            0.69444,
            0,
            0,
            0.5
        ],
        8594: [
            -0.13313,
            0.36687,
            0,
            0,
            1
        ],
        8595: [
            0.19444,
            0.69444,
            0,
            0,
            0.5
        ],
        8596: [
            -0.13313,
            0.36687,
            0,
            0,
            1
        ],
        8597: [
            0.25,
            0.75,
            0,
            0,
            0.5
        ],
        8598: [
            0.19444,
            0.69444,
            0,
            0,
            1
        ],
        8599: [
            0.19444,
            0.69444,
            0,
            0,
            1
        ],
        8600: [
            0.19444,
            0.69444,
            0,
            0,
            1
        ],
        8601: [
            0.19444,
            0.69444,
            0,
            0,
            1
        ],
        8614: [
            0.011,
            0.511,
            0,
            0,
            1
        ],
        8617: [
            0.011,
            0.511,
            0,
            0,
            1.126
        ],
        8618: [
            0.011,
            0.511,
            0,
            0,
            1.126
        ],
        8636: [
            -0.13313,
            0.36687,
            0,
            0,
            1
        ],
        8637: [
            -0.13313,
            0.36687,
            0,
            0,
            1
        ],
        8640: [
            -0.13313,
            0.36687,
            0,
            0,
            1
        ],
        8641: [
            -0.13313,
            0.36687,
            0,
            0,
            1
        ],
        8652: [
            0.011,
            0.671,
            0,
            0,
            1
        ],
        8656: [
            -0.13313,
            0.36687,
            0,
            0,
            1
        ],
        8657: [
            0.19444,
            0.69444,
            0,
            0,
            0.61111
        ],
        8658: [
            -0.13313,
            0.36687,
            0,
            0,
            1
        ],
        8659: [
            0.19444,
            0.69444,
            0,
            0,
            0.61111
        ],
        8660: [
            -0.13313,
            0.36687,
            0,
            0,
            1
        ],
        8661: [
            0.25,
            0.75,
            0,
            0,
            0.61111
        ],
        8704: [
            0,
            0.69444,
            0,
            0,
            0.55556
        ],
        8706: [
            0,
            0.69444,
            0.05556,
            0.08334,
            0.5309
        ],
        8707: [
            0,
            0.69444,
            0,
            0,
            0.55556
        ],
        8709: [
            0.05556,
            0.75,
            0,
            0,
            0.5
        ],
        8711: [
            0,
            0.68333,
            0,
            0,
            0.83334
        ],
        8712: [
            0.0391,
            0.5391,
            0,
            0,
            0.66667
        ],
        8715: [
            0.0391,
            0.5391,
            0,
            0,
            0.66667
        ],
        8722: [
            0.08333,
            0.58333,
            0,
            0,
            0.77778
        ],
        8723: [
            0.08333,
            0.58333,
            0,
            0,
            0.77778
        ],
        8725: [
            0.25,
            0.75,
            0,
            0,
            0.5
        ],
        8726: [
            0.25,
            0.75,
            0,
            0,
            0.5
        ],
        8727: [
            -0.03472,
            0.46528,
            0,
            0,
            0.5
        ],
        8728: [
            -0.05555,
            0.44445,
            0,
            0,
            0.5
        ],
        8729: [
            -0.05555,
            0.44445,
            0,
            0,
            0.5
        ],
        8730: [
            0.2,
            0.8,
            0,
            0,
            0.83334
        ],
        8733: [
            0,
            0.43056,
            0,
            0,
            0.77778
        ],
        8734: [
            0,
            0.43056,
            0,
            0,
            1
        ],
        8736: [
            0,
            0.69224,
            0,
            0,
            0.72222
        ],
        8739: [
            0.25,
            0.75,
            0,
            0,
            0.27778
        ],
        8741: [
            0.25,
            0.75,
            0,
            0,
            0.5
        ],
        8743: [
            0,
            0.55556,
            0,
            0,
            0.66667
        ],
        8744: [
            0,
            0.55556,
            0,
            0,
            0.66667
        ],
        8745: [
            0,
            0.55556,
            0,
            0,
            0.66667
        ],
        8746: [
            0,
            0.55556,
            0,
            0,
            0.66667
        ],
        8747: [
            0.19444,
            0.69444,
            0.11111,
            0,
            0.41667
        ],
        8764: [
            -0.13313,
            0.36687,
            0,
            0,
            0.77778
        ],
        8768: [
            0.19444,
            0.69444,
            0,
            0,
            0.27778
        ],
        8771: [
            -0.03625,
            0.46375,
            0,
            0,
            0.77778
        ],
        8773: [
            -0.022,
            0.589,
            0,
            0,
            0.778
        ],
        8776: [
            -0.01688,
            0.48312,
            0,
            0,
            0.77778
        ],
        8781: [
            -0.03625,
            0.46375,
            0,
            0,
            0.77778
        ],
        8784: [
            -0.133,
            0.673,
            0,
            0,
            0.778
        ],
        8801: [
            -0.03625,
            0.46375,
            0,
            0,
            0.77778
        ],
        8804: [
            0.13597,
            0.63597,
            0,
            0,
            0.77778
        ],
        8805: [
            0.13597,
            0.63597,
            0,
            0,
            0.77778
        ],
        8810: [
            0.0391,
            0.5391,
            0,
            0,
            1
        ],
        8811: [
            0.0391,
            0.5391,
            0,
            0,
            1
        ],
        8826: [
            0.0391,
            0.5391,
            0,
            0,
            0.77778
        ],
        8827: [
            0.0391,
            0.5391,
            0,
            0,
            0.77778
        ],
        8834: [
            0.0391,
            0.5391,
            0,
            0,
            0.77778
        ],
        8835: [
            0.0391,
            0.5391,
            0,
            0,
            0.77778
        ],
        8838: [
            0.13597,
            0.63597,
            0,
            0,
            0.77778
        ],
        8839: [
            0.13597,
            0.63597,
            0,
            0,
            0.77778
        ],
        8846: [
            0,
            0.55556,
            0,
            0,
            0.66667
        ],
        8849: [
            0.13597,
            0.63597,
            0,
            0,
            0.77778
        ],
        8850: [
            0.13597,
            0.63597,
            0,
            0,
            0.77778
        ],
        8851: [
            0,
            0.55556,
            0,
            0,
            0.66667
        ],
        8852: [
            0,
            0.55556,
            0,
            0,
            0.66667
        ],
        8853: [
            0.08333,
            0.58333,
            0,
            0,
            0.77778
        ],
        8854: [
            0.08333,
            0.58333,
            0,
            0,
            0.77778
        ],
        8855: [
            0.08333,
            0.58333,
            0,
            0,
            0.77778
        ],
        8856: [
            0.08333,
            0.58333,
            0,
            0,
            0.77778
        ],
        8857: [
            0.08333,
            0.58333,
            0,
            0,
            0.77778
        ],
        8866: [
            0,
            0.69444,
            0,
            0,
            0.61111
        ],
        8867: [
            0,
            0.69444,
            0,
            0,
            0.61111
        ],
        8868: [
            0,
            0.69444,
            0,
            0,
            0.77778
        ],
        8869: [
            0,
            0.69444,
            0,
            0,
            0.77778
        ],
        8872: [
            0.249,
            0.75,
            0,
            0,
            0.867
        ],
        8900: [
            -0.05555,
            0.44445,
            0,
            0,
            0.5
        ],
        8901: [
            -0.05555,
            0.44445,
            0,
            0,
            0.27778
        ],
        8902: [
            -0.03472,
            0.46528,
            0,
            0,
            0.5
        ],
        8904: [
            0.005,
            0.505,
            0,
            0,
            0.9
        ],
        8942: [
            0.03,
            0.903,
            0,
            0,
            0.278
        ],
        8943: [
            -0.19,
            0.313,
            0,
            0,
            1.172
        ],
        8945: [
            -0.1,
            0.823,
            0,
            0,
            1.282
        ],
        8968: [
            0.25,
            0.75,
            0,
            0,
            0.44445
        ],
        8969: [
            0.25,
            0.75,
            0,
            0,
            0.44445
        ],
        8970: [
            0.25,
            0.75,
            0,
            0,
            0.44445
        ],
        8971: [
            0.25,
            0.75,
            0,
            0,
            0.44445
        ],
        8994: [
            -0.14236,
            0.35764,
            0,
            0,
            1
        ],
        8995: [
            -0.14236,
            0.35764,
            0,
            0,
            1
        ],
        9136: [
            0.244,
            0.744,
            0,
            0,
            0.412
        ],
        9137: [
            0.244,
            0.745,
            0,
            0,
            0.412
        ],
        9651: [
            0.19444,
            0.69444,
            0,
            0,
            0.88889
        ],
        9657: [
            -0.03472,
            0.46528,
            0,
            0,
            0.5
        ],
        9661: [
            0.19444,
            0.69444,
            0,
            0,
            0.88889
        ],
        9667: [
            -0.03472,
            0.46528,
            0,
            0,
            0.5
        ],
        9711: [
            0.19444,
            0.69444,
            0,
            0,
            1
        ],
        9824: [
            0.12963,
            0.69444,
            0,
            0,
            0.77778
        ],
        9825: [
            0.12963,
            0.69444,
            0,
            0,
            0.77778
        ],
        9826: [
            0.12963,
            0.69444,
            0,
            0,
            0.77778
        ],
        9827: [
            0.12963,
            0.69444,
            0,
            0,
            0.77778
        ],
        9837: [
            0,
            0.75,
            0,
            0,
            0.38889
        ],
        9838: [
            0.19444,
            0.69444,
            0,
            0,
            0.38889
        ],
        9839: [
            0.19444,
            0.69444,
            0,
            0,
            0.38889
        ],
        10216: [
            0.25,
            0.75,
            0,
            0,
            0.38889
        ],
        10217: [
            0.25,
            0.75,
            0,
            0,
            0.38889
        ],
        10222: [
            0.244,
            0.744,
            0,
            0,
            0.412
        ],
        10223: [
            0.244,
            0.745,
            0,
            0,
            0.412
        ],
        10229: [
            0.011,
            0.511,
            0,
            0,
            1.609
        ],
        10230: [
            0.011,
            0.511,
            0,
            0,
            1.638
        ],
        10231: [
            0.011,
            0.511,
            0,
            0,
            1.859
        ],
        10232: [
            0.024,
            0.525,
            0,
            0,
            1.609
        ],
        10233: [
            0.024,
            0.525,
            0,
            0,
            1.638
        ],
        10234: [
            0.024,
            0.525,
            0,
            0,
            1.858
        ],
        10236: [
            0.011,
            0.511,
            0,
            0,
            1.638
        ],
        10815: [
            0,
            0.68333,
            0,
            0,
            0.75
        ],
        10927: [
            0.13597,
            0.63597,
            0,
            0,
            0.77778
        ],
        10928: [
            0.13597,
            0.63597,
            0,
            0,
            0.77778
        ],
        57376: [
            0.19444,
            0.69444,
            0,
            0,
            0
        ]
    },
    "Math-BoldItalic": {
        32: [
            0,
            0,
            0,
            0,
            0.25
        ],
        48: [
            0,
            0.44444,
            0,
            0,
            0.575
        ],
        49: [
            0,
            0.44444,
            0,
            0,
            0.575
        ],
        50: [
            0,
            0.44444,
            0,
            0,
            0.575
        ],
        51: [
            0.19444,
            0.44444,
            0,
            0,
            0.575
        ],
        52: [
            0.19444,
            0.44444,
            0,
            0,
            0.575
        ],
        53: [
            0.19444,
            0.44444,
            0,
            0,
            0.575
        ],
        54: [
            0,
            0.64444,
            0,
            0,
            0.575
        ],
        55: [
            0.19444,
            0.44444,
            0,
            0,
            0.575
        ],
        56: [
            0,
            0.64444,
            0,
            0,
            0.575
        ],
        57: [
            0.19444,
            0.44444,
            0,
            0,
            0.575
        ],
        65: [
            0,
            0.68611,
            0,
            0,
            0.86944
        ],
        66: [
            0,
            0.68611,
            0.04835,
            0,
            0.8664
        ],
        67: [
            0,
            0.68611,
            0.06979,
            0,
            0.81694
        ],
        68: [
            0,
            0.68611,
            0.03194,
            0,
            0.93812
        ],
        69: [
            0,
            0.68611,
            0.05451,
            0,
            0.81007
        ],
        70: [
            0,
            0.68611,
            0.15972,
            0,
            0.68889
        ],
        71: [
            0,
            0.68611,
            0,
            0,
            0.88673
        ],
        72: [
            0,
            0.68611,
            0.08229,
            0,
            0.98229
        ],
        73: [
            0,
            0.68611,
            0.07778,
            0,
            0.51111
        ],
        74: [
            0,
            0.68611,
            0.10069,
            0,
            0.63125
        ],
        75: [
            0,
            0.68611,
            0.06979,
            0,
            0.97118
        ],
        76: [
            0,
            0.68611,
            0,
            0,
            0.75555
        ],
        77: [
            0,
            0.68611,
            0.11424,
            0,
            1.14201
        ],
        78: [
            0,
            0.68611,
            0.11424,
            0,
            0.95034
        ],
        79: [
            0,
            0.68611,
            0.03194,
            0,
            0.83666
        ],
        80: [
            0,
            0.68611,
            0.15972,
            0,
            0.72309
        ],
        81: [
            0.19444,
            0.68611,
            0,
            0,
            0.86861
        ],
        82: [
            0,
            0.68611,
            0.00421,
            0,
            0.87235
        ],
        83: [
            0,
            0.68611,
            0.05382,
            0,
            0.69271
        ],
        84: [
            0,
            0.68611,
            0.15972,
            0,
            0.63663
        ],
        85: [
            0,
            0.68611,
            0.11424,
            0,
            0.80027
        ],
        86: [
            0,
            0.68611,
            0.25555,
            0,
            0.67778
        ],
        87: [
            0,
            0.68611,
            0.15972,
            0,
            1.09305
        ],
        88: [
            0,
            0.68611,
            0.07778,
            0,
            0.94722
        ],
        89: [
            0,
            0.68611,
            0.25555,
            0,
            0.67458
        ],
        90: [
            0,
            0.68611,
            0.06979,
            0,
            0.77257
        ],
        97: [
            0,
            0.44444,
            0,
            0,
            0.63287
        ],
        98: [
            0,
            0.69444,
            0,
            0,
            0.52083
        ],
        99: [
            0,
            0.44444,
            0,
            0,
            0.51342
        ],
        100: [
            0,
            0.69444,
            0,
            0,
            0.60972
        ],
        101: [
            0,
            0.44444,
            0,
            0,
            0.55361
        ],
        102: [
            0.19444,
            0.69444,
            0.11042,
            0,
            0.56806
        ],
        103: [
            0.19444,
            0.44444,
            0.03704,
            0,
            0.5449
        ],
        104: [
            0,
            0.69444,
            0,
            0,
            0.66759
        ],
        105: [
            0,
            0.69326,
            0,
            0,
            0.4048
        ],
        106: [
            0.19444,
            0.69326,
            0.0622,
            0,
            0.47083
        ],
        107: [
            0,
            0.69444,
            0.01852,
            0,
            0.6037
        ],
        108: [
            0,
            0.69444,
            0.0088,
            0,
            0.34815
        ],
        109: [
            0,
            0.44444,
            0,
            0,
            1.0324
        ],
        110: [
            0,
            0.44444,
            0,
            0,
            0.71296
        ],
        111: [
            0,
            0.44444,
            0,
            0,
            0.58472
        ],
        112: [
            0.19444,
            0.44444,
            0,
            0,
            0.60092
        ],
        113: [
            0.19444,
            0.44444,
            0.03704,
            0,
            0.54213
        ],
        114: [
            0,
            0.44444,
            0.03194,
            0,
            0.5287
        ],
        115: [
            0,
            0.44444,
            0,
            0,
            0.53125
        ],
        116: [
            0,
            0.63492,
            0,
            0,
            0.41528
        ],
        117: [
            0,
            0.44444,
            0,
            0,
            0.68102
        ],
        118: [
            0,
            0.44444,
            0.03704,
            0,
            0.56666
        ],
        119: [
            0,
            0.44444,
            0.02778,
            0,
            0.83148
        ],
        120: [
            0,
            0.44444,
            0,
            0,
            0.65903
        ],
        121: [
            0.19444,
            0.44444,
            0.03704,
            0,
            0.59028
        ],
        122: [
            0,
            0.44444,
            0.04213,
            0,
            0.55509
        ],
        160: [
            0,
            0,
            0,
            0,
            0.25
        ],
        915: [
            0,
            0.68611,
            0.15972,
            0,
            0.65694
        ],
        916: [
            0,
            0.68611,
            0,
            0,
            0.95833
        ],
        920: [
            0,
            0.68611,
            0.03194,
            0,
            0.86722
        ],
        923: [
            0,
            0.68611,
            0,
            0,
            0.80555
        ],
        926: [
            0,
            0.68611,
            0.07458,
            0,
            0.84125
        ],
        928: [
            0,
            0.68611,
            0.08229,
            0,
            0.98229
        ],
        931: [
            0,
            0.68611,
            0.05451,
            0,
            0.88507
        ],
        933: [
            0,
            0.68611,
            0.15972,
            0,
            0.67083
        ],
        934: [
            0,
            0.68611,
            0,
            0,
            0.76666
        ],
        936: [
            0,
            0.68611,
            0.11653,
            0,
            0.71402
        ],
        937: [
            0,
            0.68611,
            0.04835,
            0,
            0.8789
        ],
        945: [
            0,
            0.44444,
            0,
            0,
            0.76064
        ],
        946: [
            0.19444,
            0.69444,
            0.03403,
            0,
            0.65972
        ],
        947: [
            0.19444,
            0.44444,
            0.06389,
            0,
            0.59003
        ],
        948: [
            0,
            0.69444,
            0.03819,
            0,
            0.52222
        ],
        949: [
            0,
            0.44444,
            0,
            0,
            0.52882
        ],
        950: [
            0.19444,
            0.69444,
            0.06215,
            0,
            0.50833
        ],
        951: [
            0.19444,
            0.44444,
            0.03704,
            0,
            0.6
        ],
        952: [
            0,
            0.69444,
            0.03194,
            0,
            0.5618
        ],
        953: [
            0,
            0.44444,
            0,
            0,
            0.41204
        ],
        954: [
            0,
            0.44444,
            0,
            0,
            0.66759
        ],
        955: [
            0,
            0.69444,
            0,
            0,
            0.67083
        ],
        956: [
            0.19444,
            0.44444,
            0,
            0,
            0.70787
        ],
        957: [
            0,
            0.44444,
            0.06898,
            0,
            0.57685
        ],
        958: [
            0.19444,
            0.69444,
            0.03021,
            0,
            0.50833
        ],
        959: [
            0,
            0.44444,
            0,
            0,
            0.58472
        ],
        960: [
            0,
            0.44444,
            0.03704,
            0,
            0.68241
        ],
        961: [
            0.19444,
            0.44444,
            0,
            0,
            0.6118
        ],
        962: [
            0.09722,
            0.44444,
            0.07917,
            0,
            0.42361
        ],
        963: [
            0,
            0.44444,
            0.03704,
            0,
            0.68588
        ],
        964: [
            0,
            0.44444,
            0.13472,
            0,
            0.52083
        ],
        965: [
            0,
            0.44444,
            0.03704,
            0,
            0.63055
        ],
        966: [
            0.19444,
            0.44444,
            0,
            0,
            0.74722
        ],
        967: [
            0.19444,
            0.44444,
            0,
            0,
            0.71805
        ],
        968: [
            0.19444,
            0.69444,
            0.03704,
            0,
            0.75833
        ],
        969: [
            0,
            0.44444,
            0.03704,
            0,
            0.71782
        ],
        977: [
            0,
            0.69444,
            0,
            0,
            0.69155
        ],
        981: [
            0.19444,
            0.69444,
            0,
            0,
            0.7125
        ],
        982: [
            0,
            0.44444,
            0.03194,
            0,
            0.975
        ],
        1009: [
            0.19444,
            0.44444,
            0,
            0,
            0.6118
        ],
        1013: [
            0,
            0.44444,
            0,
            0,
            0.48333
        ],
        57649: [
            0,
            0.44444,
            0,
            0,
            0.39352
        ],
        57911: [
            0.19444,
            0.44444,
            0,
            0,
            0.43889
        ]
    },
    "Math-Italic": {
        32: [
            0,
            0,
            0,
            0,
            0.25
        ],
        48: [
            0,
            0.43056,
            0,
            0,
            0.5
        ],
        49: [
            0,
            0.43056,
            0,
            0,
            0.5
        ],
        50: [
            0,
            0.43056,
            0,
            0,
            0.5
        ],
        51: [
            0.19444,
            0.43056,
            0,
            0,
            0.5
        ],
        52: [
            0.19444,
            0.43056,
            0,
            0,
            0.5
        ],
        53: [
            0.19444,
            0.43056,
            0,
            0,
            0.5
        ],
        54: [
            0,
            0.64444,
            0,
            0,
            0.5
        ],
        55: [
            0.19444,
            0.43056,
            0,
            0,
            0.5
        ],
        56: [
            0,
            0.64444,
            0,
            0,
            0.5
        ],
        57: [
            0.19444,
            0.43056,
            0,
            0,
            0.5
        ],
        65: [
            0,
            0.68333,
            0,
            0.13889,
            0.75
        ],
        66: [
            0,
            0.68333,
            0.05017,
            0.08334,
            0.75851
        ],
        67: [
            0,
            0.68333,
            0.07153,
            0.08334,
            0.71472
        ],
        68: [
            0,
            0.68333,
            0.02778,
            0.05556,
            0.82792
        ],
        69: [
            0,
            0.68333,
            0.05764,
            0.08334,
            0.7382
        ],
        70: [
            0,
            0.68333,
            0.13889,
            0.08334,
            0.64306
        ],
        71: [
            0,
            0.68333,
            0,
            0.08334,
            0.78625
        ],
        72: [
            0,
            0.68333,
            0.08125,
            0.05556,
            0.83125
        ],
        73: [
            0,
            0.68333,
            0.07847,
            0.11111,
            0.43958
        ],
        74: [
            0,
            0.68333,
            0.09618,
            0.16667,
            0.55451
        ],
        75: [
            0,
            0.68333,
            0.07153,
            0.05556,
            0.84931
        ],
        76: [
            0,
            0.68333,
            0,
            0.02778,
            0.68056
        ],
        77: [
            0,
            0.68333,
            0.10903,
            0.08334,
            0.97014
        ],
        78: [
            0,
            0.68333,
            0.10903,
            0.08334,
            0.80347
        ],
        79: [
            0,
            0.68333,
            0.02778,
            0.08334,
            0.76278
        ],
        80: [
            0,
            0.68333,
            0.13889,
            0.08334,
            0.64201
        ],
        81: [
            0.19444,
            0.68333,
            0,
            0.08334,
            0.79056
        ],
        82: [
            0,
            0.68333,
            0.00773,
            0.08334,
            0.75929
        ],
        83: [
            0,
            0.68333,
            0.05764,
            0.08334,
            0.6132
        ],
        84: [
            0,
            0.68333,
            0.13889,
            0.08334,
            0.58438
        ],
        85: [
            0,
            0.68333,
            0.10903,
            0.02778,
            0.68278
        ],
        86: [
            0,
            0.68333,
            0.22222,
            0,
            0.58333
        ],
        87: [
            0,
            0.68333,
            0.13889,
            0,
            0.94445
        ],
        88: [
            0,
            0.68333,
            0.07847,
            0.08334,
            0.82847
        ],
        89: [
            0,
            0.68333,
            0.22222,
            0,
            0.58056
        ],
        90: [
            0,
            0.68333,
            0.07153,
            0.08334,
            0.68264
        ],
        97: [
            0,
            0.43056,
            0,
            0,
            0.52859
        ],
        98: [
            0,
            0.69444,
            0,
            0,
            0.42917
        ],
        99: [
            0,
            0.43056,
            0,
            0.05556,
            0.43276
        ],
        100: [
            0,
            0.69444,
            0,
            0.16667,
            0.52049
        ],
        101: [
            0,
            0.43056,
            0,
            0.05556,
            0.46563
        ],
        102: [
            0.19444,
            0.69444,
            0.10764,
            0.16667,
            0.48959
        ],
        103: [
            0.19444,
            0.43056,
            0.03588,
            0.02778,
            0.47697
        ],
        104: [
            0,
            0.69444,
            0,
            0,
            0.57616
        ],
        105: [
            0,
            0.65952,
            0,
            0,
            0.34451
        ],
        106: [
            0.19444,
            0.65952,
            0.05724,
            0,
            0.41181
        ],
        107: [
            0,
            0.69444,
            0.03148,
            0,
            0.5206
        ],
        108: [
            0,
            0.69444,
            0.01968,
            0.08334,
            0.29838
        ],
        109: [
            0,
            0.43056,
            0,
            0,
            0.87801
        ],
        110: [
            0,
            0.43056,
            0,
            0,
            0.60023
        ],
        111: [
            0,
            0.43056,
            0,
            0.05556,
            0.48472
        ],
        112: [
            0.19444,
            0.43056,
            0,
            0.08334,
            0.50313
        ],
        113: [
            0.19444,
            0.43056,
            0.03588,
            0.08334,
            0.44641
        ],
        114: [
            0,
            0.43056,
            0.02778,
            0.05556,
            0.45116
        ],
        115: [
            0,
            0.43056,
            0,
            0.05556,
            0.46875
        ],
        116: [
            0,
            0.61508,
            0,
            0.08334,
            0.36111
        ],
        117: [
            0,
            0.43056,
            0,
            0.02778,
            0.57246
        ],
        118: [
            0,
            0.43056,
            0.03588,
            0.02778,
            0.48472
        ],
        119: [
            0,
            0.43056,
            0.02691,
            0.08334,
            0.71592
        ],
        120: [
            0,
            0.43056,
            0,
            0.02778,
            0.57153
        ],
        121: [
            0.19444,
            0.43056,
            0.03588,
            0.05556,
            0.49028
        ],
        122: [
            0,
            0.43056,
            0.04398,
            0.05556,
            0.46505
        ],
        160: [
            0,
            0,
            0,
            0,
            0.25
        ],
        915: [
            0,
            0.68333,
            0.13889,
            0.08334,
            0.61528
        ],
        916: [
            0,
            0.68333,
            0,
            0.16667,
            0.83334
        ],
        920: [
            0,
            0.68333,
            0.02778,
            0.08334,
            0.76278
        ],
        923: [
            0,
            0.68333,
            0,
            0.16667,
            0.69445
        ],
        926: [
            0,
            0.68333,
            0.07569,
            0.08334,
            0.74236
        ],
        928: [
            0,
            0.68333,
            0.08125,
            0.05556,
            0.83125
        ],
        931: [
            0,
            0.68333,
            0.05764,
            0.08334,
            0.77986
        ],
        933: [
            0,
            0.68333,
            0.13889,
            0.05556,
            0.58333
        ],
        934: [
            0,
            0.68333,
            0,
            0.08334,
            0.66667
        ],
        936: [
            0,
            0.68333,
            0.11,
            0.05556,
            0.61222
        ],
        937: [
            0,
            0.68333,
            0.05017,
            0.08334,
            0.7724
        ],
        945: [
            0,
            0.43056,
            0.0037,
            0.02778,
            0.6397
        ],
        946: [
            0.19444,
            0.69444,
            0.05278,
            0.08334,
            0.56563
        ],
        947: [
            0.19444,
            0.43056,
            0.05556,
            0,
            0.51773
        ],
        948: [
            0,
            0.69444,
            0.03785,
            0.05556,
            0.44444
        ],
        949: [
            0,
            0.43056,
            0,
            0.08334,
            0.46632
        ],
        950: [
            0.19444,
            0.69444,
            0.07378,
            0.08334,
            0.4375
        ],
        951: [
            0.19444,
            0.43056,
            0.03588,
            0.05556,
            0.49653
        ],
        952: [
            0,
            0.69444,
            0.02778,
            0.08334,
            0.46944
        ],
        953: [
            0,
            0.43056,
            0,
            0.05556,
            0.35394
        ],
        954: [
            0,
            0.43056,
            0,
            0,
            0.57616
        ],
        955: [
            0,
            0.69444,
            0,
            0,
            0.58334
        ],
        956: [
            0.19444,
            0.43056,
            0,
            0.02778,
            0.60255
        ],
        957: [
            0,
            0.43056,
            0.06366,
            0.02778,
            0.49398
        ],
        958: [
            0.19444,
            0.69444,
            0.04601,
            0.11111,
            0.4375
        ],
        959: [
            0,
            0.43056,
            0,
            0.05556,
            0.48472
        ],
        960: [
            0,
            0.43056,
            0.03588,
            0,
            0.57003
        ],
        961: [
            0.19444,
            0.43056,
            0,
            0.08334,
            0.51702
        ],
        962: [
            0.09722,
            0.43056,
            0.07986,
            0.08334,
            0.36285
        ],
        963: [
            0,
            0.43056,
            0.03588,
            0,
            0.57141
        ],
        964: [
            0,
            0.43056,
            0.1132,
            0.02778,
            0.43715
        ],
        965: [
            0,
            0.43056,
            0.03588,
            0.02778,
            0.54028
        ],
        966: [
            0.19444,
            0.43056,
            0,
            0.08334,
            0.65417
        ],
        967: [
            0.19444,
            0.43056,
            0,
            0.05556,
            0.62569
        ],
        968: [
            0.19444,
            0.69444,
            0.03588,
            0.11111,
            0.65139
        ],
        969: [
            0,
            0.43056,
            0.03588,
            0,
            0.62245
        ],
        977: [
            0,
            0.69444,
            0,
            0.08334,
            0.59144
        ],
        981: [
            0.19444,
            0.69444,
            0,
            0.08334,
            0.59583
        ],
        982: [
            0,
            0.43056,
            0.02778,
            0,
            0.82813
        ],
        1009: [
            0.19444,
            0.43056,
            0,
            0.08334,
            0.51702
        ],
        1013: [
            0,
            0.43056,
            0,
            0.05556,
            0.4059
        ],
        57649: [
            0,
            0.43056,
            0,
            0.02778,
            0.32246
        ],
        57911: [
            0.19444,
            0.43056,
            0,
            0.08334,
            0.38403
        ]
    },
    "SansSerif-Bold": {
        32: [
            0,
            0,
            0,
            0,
            0.25
        ],
        33: [
            0,
            0.69444,
            0,
            0,
            0.36667
        ],
        34: [
            0,
            0.69444,
            0,
            0,
            0.55834
        ],
        35: [
            0.19444,
            0.69444,
            0,
            0,
            0.91667
        ],
        36: [
            0.05556,
            0.75,
            0,
            0,
            0.55
        ],
        37: [
            0.05556,
            0.75,
            0,
            0,
            1.02912
        ],
        38: [
            0,
            0.69444,
            0,
            0,
            0.83056
        ],
        39: [
            0,
            0.69444,
            0,
            0,
            0.30556
        ],
        40: [
            0.25,
            0.75,
            0,
            0,
            0.42778
        ],
        41: [
            0.25,
            0.75,
            0,
            0,
            0.42778
        ],
        42: [
            0,
            0.75,
            0,
            0,
            0.55
        ],
        43: [
            0.11667,
            0.61667,
            0,
            0,
            0.85556
        ],
        44: [
            0.10556,
            0.13056,
            0,
            0,
            0.30556
        ],
        45: [
            0,
            0.45833,
            0,
            0,
            0.36667
        ],
        46: [
            0,
            0.13056,
            0,
            0,
            0.30556
        ],
        47: [
            0.25,
            0.75,
            0,
            0,
            0.55
        ],
        48: [
            0,
            0.69444,
            0,
            0,
            0.55
        ],
        49: [
            0,
            0.69444,
            0,
            0,
            0.55
        ],
        50: [
            0,
            0.69444,
            0,
            0,
            0.55
        ],
        51: [
            0,
            0.69444,
            0,
            0,
            0.55
        ],
        52: [
            0,
            0.69444,
            0,
            0,
            0.55
        ],
        53: [
            0,
            0.69444,
            0,
            0,
            0.55
        ],
        54: [
            0,
            0.69444,
            0,
            0,
            0.55
        ],
        55: [
            0,
            0.69444,
            0,
            0,
            0.55
        ],
        56: [
            0,
            0.69444,
            0,
            0,
            0.55
        ],
        57: [
            0,
            0.69444,
            0,
            0,
            0.55
        ],
        58: [
            0,
            0.45833,
            0,
            0,
            0.30556
        ],
        59: [
            0.10556,
            0.45833,
            0,
            0,
            0.30556
        ],
        61: [
            -0.09375,
            0.40625,
            0,
            0,
            0.85556
        ],
        63: [
            0,
            0.69444,
            0,
            0,
            0.51945
        ],
        64: [
            0,
            0.69444,
            0,
            0,
            0.73334
        ],
        65: [
            0,
            0.69444,
            0,
            0,
            0.73334
        ],
        66: [
            0,
            0.69444,
            0,
            0,
            0.73334
        ],
        67: [
            0,
            0.69444,
            0,
            0,
            0.70278
        ],
        68: [
            0,
            0.69444,
            0,
            0,
            0.79445
        ],
        69: [
            0,
            0.69444,
            0,
            0,
            0.64167
        ],
        70: [
            0,
            0.69444,
            0,
            0,
            0.61111
        ],
        71: [
            0,
            0.69444,
            0,
            0,
            0.73334
        ],
        72: [
            0,
            0.69444,
            0,
            0,
            0.79445
        ],
        73: [
            0,
            0.69444,
            0,
            0,
            0.33056
        ],
        74: [
            0,
            0.69444,
            0,
            0,
            0.51945
        ],
        75: [
            0,
            0.69444,
            0,
            0,
            0.76389
        ],
        76: [
            0,
            0.69444,
            0,
            0,
            0.58056
        ],
        77: [
            0,
            0.69444,
            0,
            0,
            0.97778
        ],
        78: [
            0,
            0.69444,
            0,
            0,
            0.79445
        ],
        79: [
            0,
            0.69444,
            0,
            0,
            0.79445
        ],
        80: [
            0,
            0.69444,
            0,
            0,
            0.70278
        ],
        81: [
            0.10556,
            0.69444,
            0,
            0,
            0.79445
        ],
        82: [
            0,
            0.69444,
            0,
            0,
            0.70278
        ],
        83: [
            0,
            0.69444,
            0,
            0,
            0.61111
        ],
        84: [
            0,
            0.69444,
            0,
            0,
            0.73334
        ],
        85: [
            0,
            0.69444,
            0,
            0,
            0.76389
        ],
        86: [
            0,
            0.69444,
            0.01528,
            0,
            0.73334
        ],
        87: [
            0,
            0.69444,
            0.01528,
            0,
            1.03889
        ],
        88: [
            0,
            0.69444,
            0,
            0,
            0.73334
        ],
        89: [
            0,
            0.69444,
            0.0275,
            0,
            0.73334
        ],
        90: [
            0,
            0.69444,
            0,
            0,
            0.67223
        ],
        91: [
            0.25,
            0.75,
            0,
            0,
            0.34306
        ],
        93: [
            0.25,
            0.75,
            0,
            0,
            0.34306
        ],
        94: [
            0,
            0.69444,
            0,
            0,
            0.55
        ],
        95: [
            0.35,
            0.10833,
            0.03056,
            0,
            0.55
        ],
        97: [
            0,
            0.45833,
            0,
            0,
            0.525
        ],
        98: [
            0,
            0.69444,
            0,
            0,
            0.56111
        ],
        99: [
            0,
            0.45833,
            0,
            0,
            0.48889
        ],
        100: [
            0,
            0.69444,
            0,
            0,
            0.56111
        ],
        101: [
            0,
            0.45833,
            0,
            0,
            0.51111
        ],
        102: [
            0,
            0.69444,
            0.07639,
            0,
            0.33611
        ],
        103: [
            0.19444,
            0.45833,
            0.01528,
            0,
            0.55
        ],
        104: [
            0,
            0.69444,
            0,
            0,
            0.56111
        ],
        105: [
            0,
            0.69444,
            0,
            0,
            0.25556
        ],
        106: [
            0.19444,
            0.69444,
            0,
            0,
            0.28611
        ],
        107: [
            0,
            0.69444,
            0,
            0,
            0.53056
        ],
        108: [
            0,
            0.69444,
            0,
            0,
            0.25556
        ],
        109: [
            0,
            0.45833,
            0,
            0,
            0.86667
        ],
        110: [
            0,
            0.45833,
            0,
            0,
            0.56111
        ],
        111: [
            0,
            0.45833,
            0,
            0,
            0.55
        ],
        112: [
            0.19444,
            0.45833,
            0,
            0,
            0.56111
        ],
        113: [
            0.19444,
            0.45833,
            0,
            0,
            0.56111
        ],
        114: [
            0,
            0.45833,
            0.01528,
            0,
            0.37222
        ],
        115: [
            0,
            0.45833,
            0,
            0,
            0.42167
        ],
        116: [
            0,
            0.58929,
            0,
            0,
            0.40417
        ],
        117: [
            0,
            0.45833,
            0,
            0,
            0.56111
        ],
        118: [
            0,
            0.45833,
            0.01528,
            0,
            0.5
        ],
        119: [
            0,
            0.45833,
            0.01528,
            0,
            0.74445
        ],
        120: [
            0,
            0.45833,
            0,
            0,
            0.5
        ],
        121: [
            0.19444,
            0.45833,
            0.01528,
            0,
            0.5
        ],
        122: [
            0,
            0.45833,
            0,
            0,
            0.47639
        ],
        126: [
            0.35,
            0.34444,
            0,
            0,
            0.55
        ],
        160: [
            0,
            0,
            0,
            0,
            0.25
        ],
        168: [
            0,
            0.69444,
            0,
            0,
            0.55
        ],
        176: [
            0,
            0.69444,
            0,
            0,
            0.73334
        ],
        180: [
            0,
            0.69444,
            0,
            0,
            0.55
        ],
        184: [
            0.17014,
            0,
            0,
            0,
            0.48889
        ],
        305: [
            0,
            0.45833,
            0,
            0,
            0.25556
        ],
        567: [
            0.19444,
            0.45833,
            0,
            0,
            0.28611
        ],
        710: [
            0,
            0.69444,
            0,
            0,
            0.55
        ],
        711: [
            0,
            0.63542,
            0,
            0,
            0.55
        ],
        713: [
            0,
            0.63778,
            0,
            0,
            0.55
        ],
        728: [
            0,
            0.69444,
            0,
            0,
            0.55
        ],
        729: [
            0,
            0.69444,
            0,
            0,
            0.30556
        ],
        730: [
            0,
            0.69444,
            0,
            0,
            0.73334
        ],
        732: [
            0,
            0.69444,
            0,
            0,
            0.55
        ],
        733: [
            0,
            0.69444,
            0,
            0,
            0.55
        ],
        915: [
            0,
            0.69444,
            0,
            0,
            0.58056
        ],
        916: [
            0,
            0.69444,
            0,
            0,
            0.91667
        ],
        920: [
            0,
            0.69444,
            0,
            0,
            0.85556
        ],
        923: [
            0,
            0.69444,
            0,
            0,
            0.67223
        ],
        926: [
            0,
            0.69444,
            0,
            0,
            0.73334
        ],
        928: [
            0,
            0.69444,
            0,
            0,
            0.79445
        ],
        931: [
            0,
            0.69444,
            0,
            0,
            0.79445
        ],
        933: [
            0,
            0.69444,
            0,
            0,
            0.85556
        ],
        934: [
            0,
            0.69444,
            0,
            0,
            0.79445
        ],
        936: [
            0,
            0.69444,
            0,
            0,
            0.85556
        ],
        937: [
            0,
            0.69444,
            0,
            0,
            0.79445
        ],
        8211: [
            0,
            0.45833,
            0.03056,
            0,
            0.55
        ],
        8212: [
            0,
            0.45833,
            0.03056,
            0,
            1.10001
        ],
        8216: [
            0,
            0.69444,
            0,
            0,
            0.30556
        ],
        8217: [
            0,
            0.69444,
            0,
            0,
            0.30556
        ],
        8220: [
            0,
            0.69444,
            0,
            0,
            0.55834
        ],
        8221: [
            0,
            0.69444,
            0,
            0,
            0.55834
        ]
    },
    "SansSerif-Italic": {
        32: [
            0,
            0,
            0,
            0,
            0.25
        ],
        33: [
            0,
            0.69444,
            0.05733,
            0,
            0.31945
        ],
        34: [
            0,
            0.69444,
            0.00316,
            0,
            0.5
        ],
        35: [
            0.19444,
            0.69444,
            0.05087,
            0,
            0.83334
        ],
        36: [
            0.05556,
            0.75,
            0.11156,
            0,
            0.5
        ],
        37: [
            0.05556,
            0.75,
            0.03126,
            0,
            0.83334
        ],
        38: [
            0,
            0.69444,
            0.03058,
            0,
            0.75834
        ],
        39: [
            0,
            0.69444,
            0.07816,
            0,
            0.27778
        ],
        40: [
            0.25,
            0.75,
            0.13164,
            0,
            0.38889
        ],
        41: [
            0.25,
            0.75,
            0.02536,
            0,
            0.38889
        ],
        42: [
            0,
            0.75,
            0.11775,
            0,
            0.5
        ],
        43: [
            0.08333,
            0.58333,
            0.02536,
            0,
            0.77778
        ],
        44: [
            0.125,
            0.08333,
            0,
            0,
            0.27778
        ],
        45: [
            0,
            0.44444,
            0.01946,
            0,
            0.33333
        ],
        46: [
            0,
            0.08333,
            0,
            0,
            0.27778
        ],
        47: [
            0.25,
            0.75,
            0.13164,
            0,
            0.5
        ],
        48: [
            0,
            0.65556,
            0.11156,
            0,
            0.5
        ],
        49: [
            0,
            0.65556,
            0.11156,
            0,
            0.5
        ],
        50: [
            0,
            0.65556,
            0.11156,
            0,
            0.5
        ],
        51: [
            0,
            0.65556,
            0.11156,
            0,
            0.5
        ],
        52: [
            0,
            0.65556,
            0.11156,
            0,
            0.5
        ],
        53: [
            0,
            0.65556,
            0.11156,
            0,
            0.5
        ],
        54: [
            0,
            0.65556,
            0.11156,
            0,
            0.5
        ],
        55: [
            0,
            0.65556,
            0.11156,
            0,
            0.5
        ],
        56: [
            0,
            0.65556,
            0.11156,
            0,
            0.5
        ],
        57: [
            0,
            0.65556,
            0.11156,
            0,
            0.5
        ],
        58: [
            0,
            0.44444,
            0.02502,
            0,
            0.27778
        ],
        59: [
            0.125,
            0.44444,
            0.02502,
            0,
            0.27778
        ],
        61: [
            -0.13,
            0.37,
            0.05087,
            0,
            0.77778
        ],
        63: [
            0,
            0.69444,
            0.11809,
            0,
            0.47222
        ],
        64: [
            0,
            0.69444,
            0.07555,
            0,
            0.66667
        ],
        65: [
            0,
            0.69444,
            0,
            0,
            0.66667
        ],
        66: [
            0,
            0.69444,
            0.08293,
            0,
            0.66667
        ],
        67: [
            0,
            0.69444,
            0.11983,
            0,
            0.63889
        ],
        68: [
            0,
            0.69444,
            0.07555,
            0,
            0.72223
        ],
        69: [
            0,
            0.69444,
            0.11983,
            0,
            0.59722
        ],
        70: [
            0,
            0.69444,
            0.13372,
            0,
            0.56945
        ],
        71: [
            0,
            0.69444,
            0.11983,
            0,
            0.66667
        ],
        72: [
            0,
            0.69444,
            0.08094,
            0,
            0.70834
        ],
        73: [
            0,
            0.69444,
            0.13372,
            0,
            0.27778
        ],
        74: [
            0,
            0.69444,
            0.08094,
            0,
            0.47222
        ],
        75: [
            0,
            0.69444,
            0.11983,
            0,
            0.69445
        ],
        76: [
            0,
            0.69444,
            0,
            0,
            0.54167
        ],
        77: [
            0,
            0.69444,
            0.08094,
            0,
            0.875
        ],
        78: [
            0,
            0.69444,
            0.08094,
            0,
            0.70834
        ],
        79: [
            0,
            0.69444,
            0.07555,
            0,
            0.73611
        ],
        80: [
            0,
            0.69444,
            0.08293,
            0,
            0.63889
        ],
        81: [
            0.125,
            0.69444,
            0.07555,
            0,
            0.73611
        ],
        82: [
            0,
            0.69444,
            0.08293,
            0,
            0.64584
        ],
        83: [
            0,
            0.69444,
            0.09205,
            0,
            0.55556
        ],
        84: [
            0,
            0.69444,
            0.13372,
            0,
            0.68056
        ],
        85: [
            0,
            0.69444,
            0.08094,
            0,
            0.6875
        ],
        86: [
            0,
            0.69444,
            0.1615,
            0,
            0.66667
        ],
        87: [
            0,
            0.69444,
            0.1615,
            0,
            0.94445
        ],
        88: [
            0,
            0.69444,
            0.13372,
            0,
            0.66667
        ],
        89: [
            0,
            0.69444,
            0.17261,
            0,
            0.66667
        ],
        90: [
            0,
            0.69444,
            0.11983,
            0,
            0.61111
        ],
        91: [
            0.25,
            0.75,
            0.15942,
            0,
            0.28889
        ],
        93: [
            0.25,
            0.75,
            0.08719,
            0,
            0.28889
        ],
        94: [
            0,
            0.69444,
            0.0799,
            0,
            0.5
        ],
        95: [
            0.35,
            0.09444,
            0.08616,
            0,
            0.5
        ],
        97: [
            0,
            0.44444,
            0.00981,
            0,
            0.48056
        ],
        98: [
            0,
            0.69444,
            0.03057,
            0,
            0.51667
        ],
        99: [
            0,
            0.44444,
            0.08336,
            0,
            0.44445
        ],
        100: [
            0,
            0.69444,
            0.09483,
            0,
            0.51667
        ],
        101: [
            0,
            0.44444,
            0.06778,
            0,
            0.44445
        ],
        102: [
            0,
            0.69444,
            0.21705,
            0,
            0.30556
        ],
        103: [
            0.19444,
            0.44444,
            0.10836,
            0,
            0.5
        ],
        104: [
            0,
            0.69444,
            0.01778,
            0,
            0.51667
        ],
        105: [
            0,
            0.67937,
            0.09718,
            0,
            0.23889
        ],
        106: [
            0.19444,
            0.67937,
            0.09162,
            0,
            0.26667
        ],
        107: [
            0,
            0.69444,
            0.08336,
            0,
            0.48889
        ],
        108: [
            0,
            0.69444,
            0.09483,
            0,
            0.23889
        ],
        109: [
            0,
            0.44444,
            0.01778,
            0,
            0.79445
        ],
        110: [
            0,
            0.44444,
            0.01778,
            0,
            0.51667
        ],
        111: [
            0,
            0.44444,
            0.06613,
            0,
            0.5
        ],
        112: [
            0.19444,
            0.44444,
            0.0389,
            0,
            0.51667
        ],
        113: [
            0.19444,
            0.44444,
            0.04169,
            0,
            0.51667
        ],
        114: [
            0,
            0.44444,
            0.10836,
            0,
            0.34167
        ],
        115: [
            0,
            0.44444,
            0.0778,
            0,
            0.38333
        ],
        116: [
            0,
            0.57143,
            0.07225,
            0,
            0.36111
        ],
        117: [
            0,
            0.44444,
            0.04169,
            0,
            0.51667
        ],
        118: [
            0,
            0.44444,
            0.10836,
            0,
            0.46111
        ],
        119: [
            0,
            0.44444,
            0.10836,
            0,
            0.68334
        ],
        120: [
            0,
            0.44444,
            0.09169,
            0,
            0.46111
        ],
        121: [
            0.19444,
            0.44444,
            0.10836,
            0,
            0.46111
        ],
        122: [
            0,
            0.44444,
            0.08752,
            0,
            0.43472
        ],
        126: [
            0.35,
            0.32659,
            0.08826,
            0,
            0.5
        ],
        160: [
            0,
            0,
            0,
            0,
            0.25
        ],
        168: [
            0,
            0.67937,
            0.06385,
            0,
            0.5
        ],
        176: [
            0,
            0.69444,
            0,
            0,
            0.73752
        ],
        184: [
            0.17014,
            0,
            0,
            0,
            0.44445
        ],
        305: [
            0,
            0.44444,
            0.04169,
            0,
            0.23889
        ],
        567: [
            0.19444,
            0.44444,
            0.04169,
            0,
            0.26667
        ],
        710: [
            0,
            0.69444,
            0.0799,
            0,
            0.5
        ],
        711: [
            0,
            0.63194,
            0.08432,
            0,
            0.5
        ],
        713: [
            0,
            0.60889,
            0.08776,
            0,
            0.5
        ],
        714: [
            0,
            0.69444,
            0.09205,
            0,
            0.5
        ],
        715: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        728: [
            0,
            0.69444,
            0.09483,
            0,
            0.5
        ],
        729: [
            0,
            0.67937,
            0.07774,
            0,
            0.27778
        ],
        730: [
            0,
            0.69444,
            0,
            0,
            0.73752
        ],
        732: [
            0,
            0.67659,
            0.08826,
            0,
            0.5
        ],
        733: [
            0,
            0.69444,
            0.09205,
            0,
            0.5
        ],
        915: [
            0,
            0.69444,
            0.13372,
            0,
            0.54167
        ],
        916: [
            0,
            0.69444,
            0,
            0,
            0.83334
        ],
        920: [
            0,
            0.69444,
            0.07555,
            0,
            0.77778
        ],
        923: [
            0,
            0.69444,
            0,
            0,
            0.61111
        ],
        926: [
            0,
            0.69444,
            0.12816,
            0,
            0.66667
        ],
        928: [
            0,
            0.69444,
            0.08094,
            0,
            0.70834
        ],
        931: [
            0,
            0.69444,
            0.11983,
            0,
            0.72222
        ],
        933: [
            0,
            0.69444,
            0.09031,
            0,
            0.77778
        ],
        934: [
            0,
            0.69444,
            0.04603,
            0,
            0.72222
        ],
        936: [
            0,
            0.69444,
            0.09031,
            0,
            0.77778
        ],
        937: [
            0,
            0.69444,
            0.08293,
            0,
            0.72222
        ],
        8211: [
            0,
            0.44444,
            0.08616,
            0,
            0.5
        ],
        8212: [
            0,
            0.44444,
            0.08616,
            0,
            1
        ],
        8216: [
            0,
            0.69444,
            0.07816,
            0,
            0.27778
        ],
        8217: [
            0,
            0.69444,
            0.07816,
            0,
            0.27778
        ],
        8220: [
            0,
            0.69444,
            0.14205,
            0,
            0.5
        ],
        8221: [
            0,
            0.69444,
            0.00316,
            0,
            0.5
        ]
    },
    "SansSerif-Regular": {
        32: [
            0,
            0,
            0,
            0,
            0.25
        ],
        33: [
            0,
            0.69444,
            0,
            0,
            0.31945
        ],
        34: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        35: [
            0.19444,
            0.69444,
            0,
            0,
            0.83334
        ],
        36: [
            0.05556,
            0.75,
            0,
            0,
            0.5
        ],
        37: [
            0.05556,
            0.75,
            0,
            0,
            0.83334
        ],
        38: [
            0,
            0.69444,
            0,
            0,
            0.75834
        ],
        39: [
            0,
            0.69444,
            0,
            0,
            0.27778
        ],
        40: [
            0.25,
            0.75,
            0,
            0,
            0.38889
        ],
        41: [
            0.25,
            0.75,
            0,
            0,
            0.38889
        ],
        42: [
            0,
            0.75,
            0,
            0,
            0.5
        ],
        43: [
            0.08333,
            0.58333,
            0,
            0,
            0.77778
        ],
        44: [
            0.125,
            0.08333,
            0,
            0,
            0.27778
        ],
        45: [
            0,
            0.44444,
            0,
            0,
            0.33333
        ],
        46: [
            0,
            0.08333,
            0,
            0,
            0.27778
        ],
        47: [
            0.25,
            0.75,
            0,
            0,
            0.5
        ],
        48: [
            0,
            0.65556,
            0,
            0,
            0.5
        ],
        49: [
            0,
            0.65556,
            0,
            0,
            0.5
        ],
        50: [
            0,
            0.65556,
            0,
            0,
            0.5
        ],
        51: [
            0,
            0.65556,
            0,
            0,
            0.5
        ],
        52: [
            0,
            0.65556,
            0,
            0,
            0.5
        ],
        53: [
            0,
            0.65556,
            0,
            0,
            0.5
        ],
        54: [
            0,
            0.65556,
            0,
            0,
            0.5
        ],
        55: [
            0,
            0.65556,
            0,
            0,
            0.5
        ],
        56: [
            0,
            0.65556,
            0,
            0,
            0.5
        ],
        57: [
            0,
            0.65556,
            0,
            0,
            0.5
        ],
        58: [
            0,
            0.44444,
            0,
            0,
            0.27778
        ],
        59: [
            0.125,
            0.44444,
            0,
            0,
            0.27778
        ],
        61: [
            -0.13,
            0.37,
            0,
            0,
            0.77778
        ],
        63: [
            0,
            0.69444,
            0,
            0,
            0.47222
        ],
        64: [
            0,
            0.69444,
            0,
            0,
            0.66667
        ],
        65: [
            0,
            0.69444,
            0,
            0,
            0.66667
        ],
        66: [
            0,
            0.69444,
            0,
            0,
            0.66667
        ],
        67: [
            0,
            0.69444,
            0,
            0,
            0.63889
        ],
        68: [
            0,
            0.69444,
            0,
            0,
            0.72223
        ],
        69: [
            0,
            0.69444,
            0,
            0,
            0.59722
        ],
        70: [
            0,
            0.69444,
            0,
            0,
            0.56945
        ],
        71: [
            0,
            0.69444,
            0,
            0,
            0.66667
        ],
        72: [
            0,
            0.69444,
            0,
            0,
            0.70834
        ],
        73: [
            0,
            0.69444,
            0,
            0,
            0.27778
        ],
        74: [
            0,
            0.69444,
            0,
            0,
            0.47222
        ],
        75: [
            0,
            0.69444,
            0,
            0,
            0.69445
        ],
        76: [
            0,
            0.69444,
            0,
            0,
            0.54167
        ],
        77: [
            0,
            0.69444,
            0,
            0,
            0.875
        ],
        78: [
            0,
            0.69444,
            0,
            0,
            0.70834
        ],
        79: [
            0,
            0.69444,
            0,
            0,
            0.73611
        ],
        80: [
            0,
            0.69444,
            0,
            0,
            0.63889
        ],
        81: [
            0.125,
            0.69444,
            0,
            0,
            0.73611
        ],
        82: [
            0,
            0.69444,
            0,
            0,
            0.64584
        ],
        83: [
            0,
            0.69444,
            0,
            0,
            0.55556
        ],
        84: [
            0,
            0.69444,
            0,
            0,
            0.68056
        ],
        85: [
            0,
            0.69444,
            0,
            0,
            0.6875
        ],
        86: [
            0,
            0.69444,
            0.01389,
            0,
            0.66667
        ],
        87: [
            0,
            0.69444,
            0.01389,
            0,
            0.94445
        ],
        88: [
            0,
            0.69444,
            0,
            0,
            0.66667
        ],
        89: [
            0,
            0.69444,
            0.025,
            0,
            0.66667
        ],
        90: [
            0,
            0.69444,
            0,
            0,
            0.61111
        ],
        91: [
            0.25,
            0.75,
            0,
            0,
            0.28889
        ],
        93: [
            0.25,
            0.75,
            0,
            0,
            0.28889
        ],
        94: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        95: [
            0.35,
            0.09444,
            0.02778,
            0,
            0.5
        ],
        97: [
            0,
            0.44444,
            0,
            0,
            0.48056
        ],
        98: [
            0,
            0.69444,
            0,
            0,
            0.51667
        ],
        99: [
            0,
            0.44444,
            0,
            0,
            0.44445
        ],
        100: [
            0,
            0.69444,
            0,
            0,
            0.51667
        ],
        101: [
            0,
            0.44444,
            0,
            0,
            0.44445
        ],
        102: [
            0,
            0.69444,
            0.06944,
            0,
            0.30556
        ],
        103: [
            0.19444,
            0.44444,
            0.01389,
            0,
            0.5
        ],
        104: [
            0,
            0.69444,
            0,
            0,
            0.51667
        ],
        105: [
            0,
            0.67937,
            0,
            0,
            0.23889
        ],
        106: [
            0.19444,
            0.67937,
            0,
            0,
            0.26667
        ],
        107: [
            0,
            0.69444,
            0,
            0,
            0.48889
        ],
        108: [
            0,
            0.69444,
            0,
            0,
            0.23889
        ],
        109: [
            0,
            0.44444,
            0,
            0,
            0.79445
        ],
        110: [
            0,
            0.44444,
            0,
            0,
            0.51667
        ],
        111: [
            0,
            0.44444,
            0,
            0,
            0.5
        ],
        112: [
            0.19444,
            0.44444,
            0,
            0,
            0.51667
        ],
        113: [
            0.19444,
            0.44444,
            0,
            0,
            0.51667
        ],
        114: [
            0,
            0.44444,
            0.01389,
            0,
            0.34167
        ],
        115: [
            0,
            0.44444,
            0,
            0,
            0.38333
        ],
        116: [
            0,
            0.57143,
            0,
            0,
            0.36111
        ],
        117: [
            0,
            0.44444,
            0,
            0,
            0.51667
        ],
        118: [
            0,
            0.44444,
            0.01389,
            0,
            0.46111
        ],
        119: [
            0,
            0.44444,
            0.01389,
            0,
            0.68334
        ],
        120: [
            0,
            0.44444,
            0,
            0,
            0.46111
        ],
        121: [
            0.19444,
            0.44444,
            0.01389,
            0,
            0.46111
        ],
        122: [
            0,
            0.44444,
            0,
            0,
            0.43472
        ],
        126: [
            0.35,
            0.32659,
            0,
            0,
            0.5
        ],
        160: [
            0,
            0,
            0,
            0,
            0.25
        ],
        168: [
            0,
            0.67937,
            0,
            0,
            0.5
        ],
        176: [
            0,
            0.69444,
            0,
            0,
            0.66667
        ],
        184: [
            0.17014,
            0,
            0,
            0,
            0.44445
        ],
        305: [
            0,
            0.44444,
            0,
            0,
            0.23889
        ],
        567: [
            0.19444,
            0.44444,
            0,
            0,
            0.26667
        ],
        710: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        711: [
            0,
            0.63194,
            0,
            0,
            0.5
        ],
        713: [
            0,
            0.60889,
            0,
            0,
            0.5
        ],
        714: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        715: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        728: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        729: [
            0,
            0.67937,
            0,
            0,
            0.27778
        ],
        730: [
            0,
            0.69444,
            0,
            0,
            0.66667
        ],
        732: [
            0,
            0.67659,
            0,
            0,
            0.5
        ],
        733: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        915: [
            0,
            0.69444,
            0,
            0,
            0.54167
        ],
        916: [
            0,
            0.69444,
            0,
            0,
            0.83334
        ],
        920: [
            0,
            0.69444,
            0,
            0,
            0.77778
        ],
        923: [
            0,
            0.69444,
            0,
            0,
            0.61111
        ],
        926: [
            0,
            0.69444,
            0,
            0,
            0.66667
        ],
        928: [
            0,
            0.69444,
            0,
            0,
            0.70834
        ],
        931: [
            0,
            0.69444,
            0,
            0,
            0.72222
        ],
        933: [
            0,
            0.69444,
            0,
            0,
            0.77778
        ],
        934: [
            0,
            0.69444,
            0,
            0,
            0.72222
        ],
        936: [
            0,
            0.69444,
            0,
            0,
            0.77778
        ],
        937: [
            0,
            0.69444,
            0,
            0,
            0.72222
        ],
        8211: [
            0,
            0.44444,
            0.02778,
            0,
            0.5
        ],
        8212: [
            0,
            0.44444,
            0.02778,
            0,
            1
        ],
        8216: [
            0,
            0.69444,
            0,
            0,
            0.27778
        ],
        8217: [
            0,
            0.69444,
            0,
            0,
            0.27778
        ],
        8220: [
            0,
            0.69444,
            0,
            0,
            0.5
        ],
        8221: [
            0,
            0.69444,
            0,
            0,
            0.5
        ]
    },
    "Script-Regular": {
        32: [
            0,
            0,
            0,
            0,
            0.25
        ],
        65: [
            0,
            0.7,
            0.22925,
            0,
            0.80253
        ],
        66: [
            0,
            0.7,
            0.04087,
            0,
            0.90757
        ],
        67: [
            0,
            0.7,
            0.1689,
            0,
            0.66619
        ],
        68: [
            0,
            0.7,
            0.09371,
            0,
            0.77443
        ],
        69: [
            0,
            0.7,
            0.18583,
            0,
            0.56162
        ],
        70: [
            0,
            0.7,
            0.13634,
            0,
            0.89544
        ],
        71: [
            0,
            0.7,
            0.17322,
            0,
            0.60961
        ],
        72: [
            0,
            0.7,
            0.29694,
            0,
            0.96919
        ],
        73: [
            0,
            0.7,
            0.19189,
            0,
            0.80907
        ],
        74: [
            0.27778,
            0.7,
            0.19189,
            0,
            1.05159
        ],
        75: [
            0,
            0.7,
            0.31259,
            0,
            0.91364
        ],
        76: [
            0,
            0.7,
            0.19189,
            0,
            0.87373
        ],
        77: [
            0,
            0.7,
            0.15981,
            0,
            1.08031
        ],
        78: [
            0,
            0.7,
            0.3525,
            0,
            0.9015
        ],
        79: [
            0,
            0.7,
            0.08078,
            0,
            0.73787
        ],
        80: [
            0,
            0.7,
            0.08078,
            0,
            1.01262
        ],
        81: [
            0,
            0.7,
            0.03305,
            0,
            0.88282
        ],
        82: [
            0,
            0.7,
            0.06259,
            0,
            0.85
        ],
        83: [
            0,
            0.7,
            0.19189,
            0,
            0.86767
        ],
        84: [
            0,
            0.7,
            0.29087,
            0,
            0.74697
        ],
        85: [
            0,
            0.7,
            0.25815,
            0,
            0.79996
        ],
        86: [
            0,
            0.7,
            0.27523,
            0,
            0.62204
        ],
        87: [
            0,
            0.7,
            0.27523,
            0,
            0.80532
        ],
        88: [
            0,
            0.7,
            0.26006,
            0,
            0.94445
        ],
        89: [
            0,
            0.7,
            0.2939,
            0,
            0.70961
        ],
        90: [
            0,
            0.7,
            0.24037,
            0,
            0.8212
        ],
        160: [
            0,
            0,
            0,
            0,
            0.25
        ]
    },
    "Size1-Regular": {
        32: [
            0,
            0,
            0,
            0,
            0.25
        ],
        40: [
            0.35001,
            0.85,
            0,
            0,
            0.45834
        ],
        41: [
            0.35001,
            0.85,
            0,
            0,
            0.45834
        ],
        47: [
            0.35001,
            0.85,
            0,
            0,
            0.57778
        ],
        91: [
            0.35001,
            0.85,
            0,
            0,
            0.41667
        ],
        92: [
            0.35001,
            0.85,
            0,
            0,
            0.57778
        ],
        93: [
            0.35001,
            0.85,
            0,
            0,
            0.41667
        ],
        123: [
            0.35001,
            0.85,
            0,
            0,
            0.58334
        ],
        125: [
            0.35001,
            0.85,
            0,
            0,
            0.58334
        ],
        160: [
            0,
            0,
            0,
            0,
            0.25
        ],
        710: [
            0,
            0.72222,
            0,
            0,
            0.55556
        ],
        732: [
            0,
            0.72222,
            0,
            0,
            0.55556
        ],
        770: [
            0,
            0.72222,
            0,
            0,
            0.55556
        ],
        771: [
            0,
            0.72222,
            0,
            0,
            0.55556
        ],
        8214: [
            -0.00099,
            0.601,
            0,
            0,
            0.77778
        ],
        8593: [
            0.00001,
            0.6,
            0,
            0,
            0.66667
        ],
        8595: [
            0.00001,
            0.6,
            0,
            0,
            0.66667
        ],
        8657: [
            0.00001,
            0.6,
            0,
            0,
            0.77778
        ],
        8659: [
            0.00001,
            0.6,
            0,
            0,
            0.77778
        ],
        8719: [
            0.25001,
            0.75,
            0,
            0,
            0.94445
        ],
        8720: [
            0.25001,
            0.75,
            0,
            0,
            0.94445
        ],
        8721: [
            0.25001,
            0.75,
            0,
            0,
            1.05556
        ],
        8730: [
            0.35001,
            0.85,
            0,
            0,
            1
        ],
        8739: [
            -0.00599,
            0.606,
            0,
            0,
            0.33333
        ],
        8741: [
            -0.00599,
            0.606,
            0,
            0,
            0.55556
        ],
        8747: [
            0.30612,
            0.805,
            0.19445,
            0,
            0.47222
        ],
        8748: [
            0.306,
            0.805,
            0.19445,
            0,
            0.47222
        ],
        8749: [
            0.306,
            0.805,
            0.19445,
            0,
            0.47222
        ],
        8750: [
            0.30612,
            0.805,
            0.19445,
            0,
            0.47222
        ],
        8896: [
            0.25001,
            0.75,
            0,
            0,
            0.83334
        ],
        8897: [
            0.25001,
            0.75,
            0,
            0,
            0.83334
        ],
        8898: [
            0.25001,
            0.75,
            0,
            0,
            0.83334
        ],
        8899: [
            0.25001,
            0.75,
            0,
            0,
            0.83334
        ],
        8968: [
            0.35001,
            0.85,
            0,
            0,
            0.47222
        ],
        8969: [
            0.35001,
            0.85,
            0,
            0,
            0.47222
        ],
        8970: [
            0.35001,
            0.85,
            0,
            0,
            0.47222
        ],
        8971: [
            0.35001,
            0.85,
            0,
            0,
            0.47222
        ],
        9168: [
            -0.00099,
            0.601,
            0,
            0,
            0.66667
        ],
        10216: [
            0.35001,
            0.85,
            0,
            0,
            0.47222
        ],
        10217: [
            0.35001,
            0.85,
            0,
            0,
            0.47222
        ],
        10752: [
            0.25001,
            0.75,
            0,
            0,
            1.11111
        ],
        10753: [
            0.25001,
            0.75,
            0,
            0,
            1.11111
        ],
        10754: [
            0.25001,
            0.75,
            0,
            0,
            1.11111
        ],
        10756: [
            0.25001,
            0.75,
            0,
            0,
            0.83334
        ],
        10758: [
            0.25001,
            0.75,
            0,
            0,
            0.83334
        ]
    },
    "Size2-Regular": {
        32: [
            0,
            0,
            0,
            0,
            0.25
        ],
        40: [
            0.65002,
            1.15,
            0,
            0,
            0.59722
        ],
        41: [
            0.65002,
            1.15,
            0,
            0,
            0.59722
        ],
        47: [
            0.65002,
            1.15,
            0,
            0,
            0.81111
        ],
        91: [
            0.65002,
            1.15,
            0,
            0,
            0.47222
        ],
        92: [
            0.65002,
            1.15,
            0,
            0,
            0.81111
        ],
        93: [
            0.65002,
            1.15,
            0,
            0,
            0.47222
        ],
        123: [
            0.65002,
            1.15,
            0,
            0,
            0.66667
        ],
        125: [
            0.65002,
            1.15,
            0,
            0,
            0.66667
        ],
        160: [
            0,
            0,
            0,
            0,
            0.25
        ],
        710: [
            0,
            0.75,
            0,
            0,
            1
        ],
        732: [
            0,
            0.75,
            0,
            0,
            1
        ],
        770: [
            0,
            0.75,
            0,
            0,
            1
        ],
        771: [
            0,
            0.75,
            0,
            0,
            1
        ],
        8719: [
            0.55001,
            1.05,
            0,
            0,
            1.27778
        ],
        8720: [
            0.55001,
            1.05,
            0,
            0,
            1.27778
        ],
        8721: [
            0.55001,
            1.05,
            0,
            0,
            1.44445
        ],
        8730: [
            0.65002,
            1.15,
            0,
            0,
            1
        ],
        8747: [
            0.86225,
            1.36,
            0.44445,
            0,
            0.55556
        ],
        8748: [
            0.862,
            1.36,
            0.44445,
            0,
            0.55556
        ],
        8749: [
            0.862,
            1.36,
            0.44445,
            0,
            0.55556
        ],
        8750: [
            0.86225,
            1.36,
            0.44445,
            0,
            0.55556
        ],
        8896: [
            0.55001,
            1.05,
            0,
            0,
            1.11111
        ],
        8897: [
            0.55001,
            1.05,
            0,
            0,
            1.11111
        ],
        8898: [
            0.55001,
            1.05,
            0,
            0,
            1.11111
        ],
        8899: [
            0.55001,
            1.05,
            0,
            0,
            1.11111
        ],
        8968: [
            0.65002,
            1.15,
            0,
            0,
            0.52778
        ],
        8969: [
            0.65002,
            1.15,
            0,
            0,
            0.52778
        ],
        8970: [
            0.65002,
            1.15,
            0,
            0,
            0.52778
        ],
        8971: [
            0.65002,
            1.15,
            0,
            0,
            0.52778
        ],
        10216: [
            0.65002,
            1.15,
            0,
            0,
            0.61111
        ],
        10217: [
            0.65002,
            1.15,
            0,
            0,
            0.61111
        ],
        10752: [
            0.55001,
            1.05,
            0,
            0,
            1.51112
        ],
        10753: [
            0.55001,
            1.05,
            0,
            0,
            1.51112
        ],
        10754: [
            0.55001,
            1.05,
            0,
            0,
            1.51112
        ],
        10756: [
            0.55001,
            1.05,
            0,
            0,
            1.11111
        ],
        10758: [
            0.55001,
            1.05,
            0,
            0,
            1.11111
        ]
    },
    "Size3-Regular": {
        32: [
            0,
            0,
            0,
            0,
            0.25
        ],
        40: [
            0.95003,
            1.45,
            0,
            0,
            0.73611
        ],
        41: [
            0.95003,
            1.45,
            0,
            0,
            0.73611
        ],
        47: [
            0.95003,
            1.45,
            0,
            0,
            1.04445
        ],
        91: [
            0.95003,
            1.45,
            0,
            0,
            0.52778
        ],
        92: [
            0.95003,
            1.45,
            0,
            0,
            1.04445
        ],
        93: [
            0.95003,
            1.45,
            0,
            0,
            0.52778
        ],
        123: [
            0.95003,
            1.45,
            0,
            0,
            0.75
        ],
        125: [
            0.95003,
            1.45,
            0,
            0,
            0.75
        ],
        160: [
            0,
            0,
            0,
            0,
            0.25
        ],
        710: [
            0,
            0.75,
            0,
            0,
            1.44445
        ],
        732: [
            0,
            0.75,
            0,
            0,
            1.44445
        ],
        770: [
            0,
            0.75,
            0,
            0,
            1.44445
        ],
        771: [
            0,
            0.75,
            0,
            0,
            1.44445
        ],
        8730: [
            0.95003,
            1.45,
            0,
            0,
            1
        ],
        8968: [
            0.95003,
            1.45,
            0,
            0,
            0.58334
        ],
        8969: [
            0.95003,
            1.45,
            0,
            0,
            0.58334
        ],
        8970: [
            0.95003,
            1.45,
            0,
            0,
            0.58334
        ],
        8971: [
            0.95003,
            1.45,
            0,
            0,
            0.58334
        ],
        10216: [
            0.95003,
            1.45,
            0,
            0,
            0.75
        ],
        10217: [
            0.95003,
            1.45,
            0,
            0,
            0.75
        ]
    },
    "Size4-Regular": {
        32: [
            0,
            0,
            0,
            0,
            0.25
        ],
        40: [
            1.25003,
            1.75,
            0,
            0,
            0.79167
        ],
        41: [
            1.25003,
            1.75,
            0,
            0,
            0.79167
        ],
        47: [
            1.25003,
            1.75,
            0,
            0,
            1.27778
        ],
        91: [
            1.25003,
            1.75,
            0,
            0,
            0.58334
        ],
        92: [
            1.25003,
            1.75,
            0,
            0,
            1.27778
        ],
        93: [
            1.25003,
            1.75,
            0,
            0,
            0.58334
        ],
        123: [
            1.25003,
            1.75,
            0,
            0,
            0.80556
        ],
        125: [
            1.25003,
            1.75,
            0,
            0,
            0.80556
        ],
        160: [
            0,
            0,
            0,
            0,
            0.25
        ],
        710: [
            0,
            0.825,
            0,
            0,
            1.8889
        ],
        732: [
            0,
            0.825,
            0,
            0,
            1.8889
        ],
        770: [
            0,
            0.825,
            0,
            0,
            1.8889
        ],
        771: [
            0,
            0.825,
            0,
            0,
            1.8889
        ],
        8730: [
            1.25003,
            1.75,
            0,
            0,
            1
        ],
        8968: [
            1.25003,
            1.75,
            0,
            0,
            0.63889
        ],
        8969: [
            1.25003,
            1.75,
            0,
            0,
            0.63889
        ],
        8970: [
            1.25003,
            1.75,
            0,
            0,
            0.63889
        ],
        8971: [
            1.25003,
            1.75,
            0,
            0,
            0.63889
        ],
        9115: [
            0.64502,
            1.155,
            0,
            0,
            0.875
        ],
        9116: [
            0.00001,
            0.6,
            0,
            0,
            0.875
        ],
        9117: [
            0.64502,
            1.155,
            0,
            0,
            0.875
        ],
        9118: [
            0.64502,
            1.155,
            0,
            0,
            0.875
        ],
        9119: [
            0.00001,
            0.6,
            0,
            0,
            0.875
        ],
        9120: [
            0.64502,
            1.155,
            0,
            0,
            0.875
        ],
        9121: [
            0.64502,
            1.155,
            0,
            0,
            0.66667
        ],
        9122: [
            -0.00099,
            0.601,
            0,
            0,
            0.66667
        ],
        9123: [
            0.64502,
            1.155,
            0,
            0,
            0.66667
        ],
        9124: [
            0.64502,
            1.155,
            0,
            0,
            0.66667
        ],
        9125: [
            -0.00099,
            0.601,
            0,
            0,
            0.66667
        ],
        9126: [
            0.64502,
            1.155,
            0,
            0,
            0.66667
        ],
        9127: [
            0.00001,
            0.9,
            0,
            0,
            0.88889
        ],
        9128: [
            0.65002,
            1.15,
            0,
            0,
            0.88889
        ],
        9129: [
            0.90001,
            0,
            0,
            0,
            0.88889
        ],
        9130: [
            0,
            0.3,
            0,
            0,
            0.88889
        ],
        9131: [
            0.00001,
            0.9,
            0,
            0,
            0.88889
        ],
        9132: [
            0.65002,
            1.15,
            0,
            0,
            0.88889
        ],
        9133: [
            0.90001,
            0,
            0,
            0,
            0.88889
        ],
        9143: [
            0.88502,
            0.915,
            0,
            0,
            1.05556
        ],
        10216: [
            1.25003,
            1.75,
            0,
            0,
            0.80556
        ],
        10217: [
            1.25003,
            1.75,
            0,
            0,
            0.80556
        ],
        57344: [
            -0.00499,
            0.605,
            0,
            0,
            1.05556
        ],
        57345: [
            -0.00499,
            0.605,
            0,
            0,
            1.05556
        ],
        57680: [
            0,
            0.12,
            0,
            0,
            0.45
        ],
        57681: [
            0,
            0.12,
            0,
            0,
            0.45
        ],
        57682: [
            0,
            0.12,
            0,
            0,
            0.45
        ],
        57683: [
            0,
            0.12,
            0,
            0,
            0.45
        ]
    },
    "Typewriter-Regular": {
        32: [
            0,
            0,
            0,
            0,
            0.525
        ],
        33: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        34: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        35: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        36: [
            0.08333,
            0.69444,
            0,
            0,
            0.525
        ],
        37: [
            0.08333,
            0.69444,
            0,
            0,
            0.525
        ],
        38: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        39: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        40: [
            0.08333,
            0.69444,
            0,
            0,
            0.525
        ],
        41: [
            0.08333,
            0.69444,
            0,
            0,
            0.525
        ],
        42: [
            0,
            0.52083,
            0,
            0,
            0.525
        ],
        43: [
            -0.08056,
            0.53055,
            0,
            0,
            0.525
        ],
        44: [
            0.13889,
            0.125,
            0,
            0,
            0.525
        ],
        45: [
            -0.08056,
            0.53055,
            0,
            0,
            0.525
        ],
        46: [
            0,
            0.125,
            0,
            0,
            0.525
        ],
        47: [
            0.08333,
            0.69444,
            0,
            0,
            0.525
        ],
        48: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        49: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        50: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        51: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        52: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        53: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        54: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        55: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        56: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        57: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        58: [
            0,
            0.43056,
            0,
            0,
            0.525
        ],
        59: [
            0.13889,
            0.43056,
            0,
            0,
            0.525
        ],
        60: [
            -0.05556,
            0.55556,
            0,
            0,
            0.525
        ],
        61: [
            -0.19549,
            0.41562,
            0,
            0,
            0.525
        ],
        62: [
            -0.05556,
            0.55556,
            0,
            0,
            0.525
        ],
        63: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        64: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        65: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        66: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        67: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        68: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        69: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        70: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        71: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        72: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        73: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        74: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        75: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        76: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        77: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        78: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        79: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        80: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        81: [
            0.13889,
            0.61111,
            0,
            0,
            0.525
        ],
        82: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        83: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        84: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        85: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        86: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        87: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        88: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        89: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        90: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        91: [
            0.08333,
            0.69444,
            0,
            0,
            0.525
        ],
        92: [
            0.08333,
            0.69444,
            0,
            0,
            0.525
        ],
        93: [
            0.08333,
            0.69444,
            0,
            0,
            0.525
        ],
        94: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        95: [
            0.09514,
            0,
            0,
            0,
            0.525
        ],
        96: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        97: [
            0,
            0.43056,
            0,
            0,
            0.525
        ],
        98: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        99: [
            0,
            0.43056,
            0,
            0,
            0.525
        ],
        100: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        101: [
            0,
            0.43056,
            0,
            0,
            0.525
        ],
        102: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        103: [
            0.22222,
            0.43056,
            0,
            0,
            0.525
        ],
        104: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        105: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        106: [
            0.22222,
            0.61111,
            0,
            0,
            0.525
        ],
        107: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        108: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        109: [
            0,
            0.43056,
            0,
            0,
            0.525
        ],
        110: [
            0,
            0.43056,
            0,
            0,
            0.525
        ],
        111: [
            0,
            0.43056,
            0,
            0,
            0.525
        ],
        112: [
            0.22222,
            0.43056,
            0,
            0,
            0.525
        ],
        113: [
            0.22222,
            0.43056,
            0,
            0,
            0.525
        ],
        114: [
            0,
            0.43056,
            0,
            0,
            0.525
        ],
        115: [
            0,
            0.43056,
            0,
            0,
            0.525
        ],
        116: [
            0,
            0.55358,
            0,
            0,
            0.525
        ],
        117: [
            0,
            0.43056,
            0,
            0,
            0.525
        ],
        118: [
            0,
            0.43056,
            0,
            0,
            0.525
        ],
        119: [
            0,
            0.43056,
            0,
            0,
            0.525
        ],
        120: [
            0,
            0.43056,
            0,
            0,
            0.525
        ],
        121: [
            0.22222,
            0.43056,
            0,
            0,
            0.525
        ],
        122: [
            0,
            0.43056,
            0,
            0,
            0.525
        ],
        123: [
            0.08333,
            0.69444,
            0,
            0,
            0.525
        ],
        124: [
            0.08333,
            0.69444,
            0,
            0,
            0.525
        ],
        125: [
            0.08333,
            0.69444,
            0,
            0,
            0.525
        ],
        126: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        127: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        160: [
            0,
            0,
            0,
            0,
            0.525
        ],
        176: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        184: [
            0.19445,
            0,
            0,
            0,
            0.525
        ],
        305: [
            0,
            0.43056,
            0,
            0,
            0.525
        ],
        567: [
            0.22222,
            0.43056,
            0,
            0,
            0.525
        ],
        711: [
            0,
            0.56597,
            0,
            0,
            0.525
        ],
        713: [
            0,
            0.56555,
            0,
            0,
            0.525
        ],
        714: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        715: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        728: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        730: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        770: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        771: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        776: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        915: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        916: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        920: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        923: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        926: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        928: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        931: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        933: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        934: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        936: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        937: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        8216: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        8217: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        8242: [
            0,
            0.61111,
            0,
            0,
            0.525
        ],
        9251: [
            0.11111,
            0.21944,
            0,
            0,
            0.525
        ]
    }
};
const xe = {
    slant: [
        0.25,
        0.25,
        0.25
    ],
    space: [
        0,
        0,
        0
    ],
    stretch: [
        0,
        0,
        0
    ],
    shrink: [
        0,
        0,
        0
    ],
    xHeight: [
        0.431,
        0.431,
        0.431
    ],
    quad: [
        1,
        1.171,
        1.472
    ],
    extraSpace: [
        0,
        0,
        0
    ],
    num1: [
        0.677,
        0.732,
        0.925
    ],
    num2: [
        0.394,
        0.384,
        0.387
    ],
    num3: [
        0.444,
        0.471,
        0.504
    ],
    denom1: [
        0.686,
        0.752,
        1.025
    ],
    denom2: [
        0.345,
        0.344,
        0.532
    ],
    sup1: [
        0.413,
        0.503,
        0.504
    ],
    sup2: [
        0.363,
        0.431,
        0.404
    ],
    sup3: [
        0.289,
        0.286,
        0.294
    ],
    sub1: [
        0.15,
        0.143,
        0.2
    ],
    sub2: [
        0.247,
        0.286,
        0.4
    ],
    supDrop: [
        0.386,
        0.353,
        0.494
    ],
    subDrop: [
        0.05,
        0.071,
        0.1
    ],
    delim1: [
        2.39,
        1.7,
        1.98
    ],
    delim2: [
        1.01,
        1.157,
        1.42
    ],
    axisHeight: [
        0.25,
        0.25,
        0.25
    ],
    defaultRuleThickness: [
        0.04,
        0.049,
        0.049
    ],
    bigOpSpacing1: [
        0.111,
        0.111,
        0.111
    ],
    bigOpSpacing2: [
        0.166,
        0.166,
        0.166
    ],
    bigOpSpacing3: [
        0.2,
        0.2,
        0.2
    ],
    bigOpSpacing4: [
        0.6,
        0.611,
        0.611
    ],
    bigOpSpacing5: [
        0.1,
        0.143,
        0.143
    ],
    sqrtRuleThickness: [
        0.04,
        0.04,
        0.04
    ],
    ptPerEm: [
        10,
        10,
        10
    ],
    doubleRuleSep: [
        0.2,
        0.2,
        0.2
    ],
    arrayRuleWidth: [
        0.04,
        0.04,
        0.04
    ],
    fboxsep: [
        0.3,
        0.3,
        0.3
    ],
    fboxrule: [
        0.04,
        0.04,
        0.04
    ]
};
const _t = {
    Å: "A",
    Ð: "D",
    Þ: "o",
    å: "a",
    ð: "d",
    þ: "o",
    А: "A",
    Б: "B",
    В: "B",
    Г: "F",
    Д: "A",
    Е: "E",
    Ж: "K",
    З: "3",
    И: "N",
    Й: "N",
    К: "K",
    Л: "N",
    М: "M",
    Н: "H",
    О: "O",
    П: "N",
    Р: "P",
    С: "C",
    Т: "T",
    У: "y",
    Ф: "O",
    Х: "X",
    Ц: "U",
    Ч: "h",
    Ш: "W",
    Щ: "W",
    Ъ: "B",
    Ы: "X",
    Ь: "B",
    Э: "3",
    Ю: "X",
    Я: "R",
    а: "a",
    б: "b",
    в: "a",
    г: "r",
    д: "y",
    е: "e",
    ж: "m",
    з: "e",
    и: "n",
    й: "n",
    к: "n",
    л: "n",
    м: "m",
    н: "n",
    о: "o",
    п: "n",
    р: "p",
    с: "c",
    т: "o",
    у: "y",
    ф: "b",
    х: "x",
    ц: "n",
    ч: "n",
    ш: "w",
    щ: "w",
    ъ: "a",
    ы: "m",
    ь: "a",
    э: "e",
    ю: "m",
    я: "r"
};
export function __setFontMetrics(r, e) {
    k0[r] = e;
}
function Ct(r, e, t) {
    if (!k0[e]) {
        throw new Error(`Font metrics not found for font: ${e}.`);
    }
    let a = r.charCodeAt(0);
    let n = k0[e][a];
    if (!n && r[0] in _t) {
        a = _t[r[0]].charCodeAt(0);
        n = k0[e][a];
    }
    if (!n && t === "text" && Cr(a)) {
        n = k0[e][77];
    }
    if (n) {
        return {
            depth: n[0],
            height: n[1],
            italic: n[2],
            skew: n[3],
            width: n[4]
        };
    }
}
const Je = {};
function ma(size) {
    let e;
    if (size >= 5) {
        e = 0;
    } else if (size >= 3) {
        e = 1;
    } else {
        e = 2;
    }
    if (!Je[e]) {
        const t = Je[e] = {
            cssEmPerMu: xe.quad[e] / 18
        };
        for(const a in xe){
            if (xe.hasOwnProperty(a)) {
                t[a] = xe[a][e];
            }
        }
    }
    return Je[e];
}
const ca = {
    bin: 1,
    close: 1,
    inner: 1,
    open: 1,
    punct: 1,
    rel: 1
};
const da = {
    "accent-token": 1,
    mathord: 1,
    "op-token": 1,
    spacing: 1,
    textord: 1
};
const $ = {
    math: {},
    text: {}
};
export function __defineSymbol(r, e, group, replace, n, l) {
    $[r][n] = {
        font: e,
        group,
        replace
    };
    if (l && replace) {
        $[r][replace] = $[r][n];
    }
}
const s = "math";
const w = "text";
const o = "main";
const d = "ams";
const j = "accent-token";
const D = "bin";
const o0 = "close";
const ie = "inner";
const E = "mathord";
const e0 = "op-token";
const v0 = "open";
const ce = "punct";
const f = "rel";
const q0 = "spacing";
const p = "textord";
__defineSymbol(s, o, f, "≡", "\\equiv", true);
__defineSymbol(s, o, f, "≺", "\\prec", true);
__defineSymbol(s, o, f, "≻", "\\succ", true);
__defineSymbol(s, o, f, "∼", "\\sim", true);
__defineSymbol(s, o, f, "⊥", "\\perp");
__defineSymbol(s, o, f, "⪯", "\\preceq", true);
__defineSymbol(s, o, f, "⪰", "\\succeq", true);
__defineSymbol(s, o, f, "≃", "\\simeq", true);
__defineSymbol(s, o, f, "∣", "\\mid", true);
__defineSymbol(s, o, f, "≪", "\\ll", true);
__defineSymbol(s, o, f, "≫", "\\gg", true);
__defineSymbol(s, o, f, "≍", "\\asymp", true);
__defineSymbol(s, o, f, "∥", "\\parallel");
__defineSymbol(s, o, f, "⋈", "\\bowtie", true);
__defineSymbol(s, o, f, "⌣", "\\smile", true);
__defineSymbol(s, o, f, "⊑", "\\sqsubseteq", true);
__defineSymbol(s, o, f, "⊒", "\\sqsupseteq", true);
__defineSymbol(s, o, f, "≐", "\\doteq", true);
__defineSymbol(s, o, f, "⌢", "\\frown", true);
__defineSymbol(s, o, f, "∋", "\\ni", true);
__defineSymbol(s, o, f, "∝", "\\propto", true);
__defineSymbol(s, o, f, "⊢", "\\vdash", true);
__defineSymbol(s, o, f, "⊣", "\\dashv", true);
__defineSymbol(s, o, f, "∋", "\\owns");
__defineSymbol(s, o, ce, ".", "\\ldotp");
__defineSymbol(s, o, ce, "⋅", "\\cdotp");
__defineSymbol(s, o, ce, "⋅", "·");
__defineSymbol(w, o, p, "⋅", "·");
__defineSymbol(s, o, p, "#", "\\#");
__defineSymbol(w, o, p, "#", "\\#");
__defineSymbol(s, o, p, "&", "\\&");
__defineSymbol(w, o, p, "&", "\\&");
__defineSymbol(s, o, p, "ℵ", "\\aleph", true);
__defineSymbol(s, o, p, "∀", "\\forall", true);
__defineSymbol(s, o, p, "ℏ", "\\hbar", true);
__defineSymbol(s, o, p, "∃", "\\exists", true);
__defineSymbol(s, o, p, "∇", "\\nabla", true);
__defineSymbol(s, o, p, "♭", "\\flat", true);
__defineSymbol(s, o, p, "ℓ", "\\ell", true);
__defineSymbol(s, o, p, "♮", "\\natural", true);
__defineSymbol(s, o, p, "♣", "\\clubsuit", true);
__defineSymbol(s, o, p, "℘", "\\wp", true);
__defineSymbol(s, o, p, "♯", "\\sharp", true);
__defineSymbol(s, o, p, "♢", "\\diamondsuit", true);
__defineSymbol(s, o, p, "ℜ", "\\Re", true);
__defineSymbol(s, o, p, "♡", "\\heartsuit", true);
__defineSymbol(s, o, p, "ℑ", "\\Im", true);
__defineSymbol(s, o, p, "♠", "\\spadesuit", true);
__defineSymbol(s, o, p, "§", "\\S", true);
__defineSymbol(w, o, p, "§", "\\S");
__defineSymbol(s, o, p, "¶", "\\P", true);
__defineSymbol(w, o, p, "¶", "\\P");
__defineSymbol(s, o, p, "†", "\\dag");
__defineSymbol(w, o, p, "†", "\\dag");
__defineSymbol(w, o, p, "†", "\\textdagger");
__defineSymbol(s, o, p, "‡", "\\ddag");
__defineSymbol(w, o, p, "‡", "\\ddag");
__defineSymbol(w, o, p, "‡", "\\textdaggerdbl");
__defineSymbol(s, o, o0, "⎱", "\\rmoustache", true);
__defineSymbol(s, o, v0, "⎰", "\\lmoustache", true);
__defineSymbol(s, o, o0, "⟯", "\\rgroup", true);
__defineSymbol(s, o, v0, "⟮", "\\lgroup", true);
__defineSymbol(s, o, D, "∓", "\\mp", true);
__defineSymbol(s, o, D, "⊖", "\\ominus", true);
__defineSymbol(s, o, D, "⊎", "\\uplus", true);
__defineSymbol(s, o, D, "⊓", "\\sqcap", true);
__defineSymbol(s, o, D, "∗", "\\ast");
__defineSymbol(s, o, D, "⊔", "\\sqcup", true);
__defineSymbol(s, o, D, "◯", "\\bigcirc", true);
__defineSymbol(s, o, D, "∙", "\\bullet", true);
__defineSymbol(s, o, D, "‡", "\\ddagger");
__defineSymbol(s, o, D, "≀", "\\wr", true);
__defineSymbol(s, o, D, "⨿", "\\amalg");
__defineSymbol(s, o, D, "&", "\\And");
__defineSymbol(s, o, f, "⟵", "\\longleftarrow", true);
__defineSymbol(s, o, f, "⇐", "\\Leftarrow", true);
__defineSymbol(s, o, f, "⟸", "\\Longleftarrow", true);
__defineSymbol(s, o, f, "⟶", "\\longrightarrow", true);
__defineSymbol(s, o, f, "⇒", "\\Rightarrow", true);
__defineSymbol(s, o, f, "⟹", "\\Longrightarrow", true);
__defineSymbol(s, o, f, "↔", "\\leftrightarrow", true);
__defineSymbol(s, o, f, "⟷", "\\longleftrightarrow", true);
__defineSymbol(s, o, f, "⇔", "\\Leftrightarrow", true);
__defineSymbol(s, o, f, "⟺", "\\Longleftrightarrow", true);
__defineSymbol(s, o, f, "↦", "\\mapsto", true);
__defineSymbol(s, o, f, "⟼", "\\longmapsto", true);
__defineSymbol(s, o, f, "↗", "\\nearrow", true);
__defineSymbol(s, o, f, "↩", "\\hookleftarrow", true);
__defineSymbol(s, o, f, "↪", "\\hookrightarrow", true);
__defineSymbol(s, o, f, "↘", "\\searrow", true);
__defineSymbol(s, o, f, "↼", "\\leftharpoonup", true);
__defineSymbol(s, o, f, "⇀", "\\rightharpoonup", true);
__defineSymbol(s, o, f, "↙", "\\swarrow", true);
__defineSymbol(s, o, f, "↽", "\\leftharpoondown", true);
__defineSymbol(s, o, f, "⇁", "\\rightharpoondown", true);
__defineSymbol(s, o, f, "↖", "\\nwarrow", true);
__defineSymbol(s, o, f, "⇌", "\\rightleftharpoons", true);
__defineSymbol(s, d, f, "≮", "\\nless", true);
__defineSymbol(s, d, f, "\uE010", "\\@nleqslant");
__defineSymbol(s, d, f, "\uE011", "\\@nleqq");
__defineSymbol(s, d, f, "⪇", "\\lneq", true);
__defineSymbol(s, d, f, "≨", "\\lneqq", true);
__defineSymbol(s, d, f, "\uE00C", "\\@lvertneqq");
__defineSymbol(s, d, f, "⋦", "\\lnsim", true);
__defineSymbol(s, d, f, "⪉", "\\lnapprox", true);
__defineSymbol(s, d, f, "⊀", "\\nprec", true);
__defineSymbol(s, d, f, "⋠", "\\npreceq", true);
__defineSymbol(s, d, f, "⋨", "\\precnsim", true);
__defineSymbol(s, d, f, "⪹", "\\precnapprox", true);
__defineSymbol(s, d, f, "≁", "\\nsim", true);
__defineSymbol(s, d, f, "\uE006", "\\@nshortmid");
__defineSymbol(s, d, f, "∤", "\\nmid", true);
__defineSymbol(s, d, f, "⊬", "\\nvdash", true);
__defineSymbol(s, d, f, "⊭", "\\nvDash", true);
__defineSymbol(s, d, f, "⋪", "\\ntriangleleft");
__defineSymbol(s, d, f, "⋬", "\\ntrianglelefteq", true);
__defineSymbol(s, d, f, "⊊", "\\subsetneq", true);
__defineSymbol(s, d, f, "\uE01A", "\\@varsubsetneq");
__defineSymbol(s, d, f, "⫋", "\\subsetneqq", true);
__defineSymbol(s, d, f, "\uE017", "\\@varsubsetneqq");
__defineSymbol(s, d, f, "≯", "\\ngtr", true);
__defineSymbol(s, d, f, "\uE00F", "\\@ngeqslant");
__defineSymbol(s, d, f, "\uE00E", "\\@ngeqq");
__defineSymbol(s, d, f, "⪈", "\\gneq", true);
__defineSymbol(s, d, f, "≩", "\\gneqq", true);
__defineSymbol(s, d, f, "\uE00D", "\\@gvertneqq");
__defineSymbol(s, d, f, "⋧", "\\gnsim", true);
__defineSymbol(s, d, f, "⪊", "\\gnapprox", true);
__defineSymbol(s, d, f, "⊁", "\\nsucc", true);
__defineSymbol(s, d, f, "⋡", "\\nsucceq", true);
__defineSymbol(s, d, f, "⋩", "\\succnsim", true);
__defineSymbol(s, d, f, "⪺", "\\succnapprox", true);
__defineSymbol(s, d, f, "≆", "\\ncong", true);
__defineSymbol(s, d, f, "\uE007", "\\@nshortparallel");
__defineSymbol(s, d, f, "∦", "\\nparallel", true);
__defineSymbol(s, d, f, "⊯", "\\nVDash", true);
__defineSymbol(s, d, f, "⋫", "\\ntriangleright");
__defineSymbol(s, d, f, "⋭", "\\ntrianglerighteq", true);
__defineSymbol(s, d, f, "\uE018", "\\@nsupseteqq");
__defineSymbol(s, d, f, "⊋", "\\supsetneq", true);
__defineSymbol(s, d, f, "\uE01B", "\\@varsupsetneq");
__defineSymbol(s, d, f, "⫌", "\\supsetneqq", true);
__defineSymbol(s, d, f, "\uE019", "\\@varsupsetneqq");
__defineSymbol(s, d, f, "⊮", "\\nVdash", true);
__defineSymbol(s, d, f, "⪵", "\\precneqq", true);
__defineSymbol(s, d, f, "⪶", "\\succneqq", true);
__defineSymbol(s, d, f, "\uE016", "\\@nsubseteqq");
__defineSymbol(s, d, D, "⊴", "\\unlhd");
__defineSymbol(s, d, D, "⊵", "\\unrhd");
__defineSymbol(s, d, f, "↚", "\\nleftarrow", true);
__defineSymbol(s, d, f, "↛", "\\nrightarrow", true);
__defineSymbol(s, d, f, "⇍", "\\nLeftarrow", true);
__defineSymbol(s, d, f, "⇏", "\\nRightarrow", true);
__defineSymbol(s, d, f, "↮", "\\nleftrightarrow", true);
__defineSymbol(s, d, f, "⇎", "\\nLeftrightarrow", true);
__defineSymbol(s, d, f, "△", "\\vartriangle");
__defineSymbol(s, d, p, "ℏ", "\\hslash");
__defineSymbol(s, d, p, "▽", "\\triangledown");
__defineSymbol(s, d, p, "◊", "\\lozenge");
__defineSymbol(s, d, p, "Ⓢ", "\\circledS");
__defineSymbol(s, d, p, "®", "\\circledR");
__defineSymbol(w, d, p, "®", "\\circledR");
__defineSymbol(s, d, p, "∡", "\\measuredangle", true);
__defineSymbol(s, d, p, "∄", "\\nexists");
__defineSymbol(s, d, p, "℧", "\\mho");
__defineSymbol(s, d, p, "Ⅎ", "\\Finv", true);
__defineSymbol(s, d, p, "⅁", "\\Game", true);
__defineSymbol(s, d, p, "‵", "\\backprime");
__defineSymbol(s, d, p, "▲", "\\blacktriangle");
__defineSymbol(s, d, p, "▼", "\\blacktriangledown");
__defineSymbol(s, d, p, "■", "\\blacksquare");
__defineSymbol(s, d, p, "⧫", "\\blacklozenge");
__defineSymbol(s, d, p, "★", "\\bigstar");
__defineSymbol(s, d, p, "∢", "\\sphericalangle", true);
__defineSymbol(s, d, p, "∁", "\\complement", true);
__defineSymbol(s, d, p, "ð", "\\eth", true);
__defineSymbol(w, o, p, "ð", "ð");
__defineSymbol(s, d, p, "╱", "\\diagup");
__defineSymbol(s, d, p, "╲", "\\diagdown");
__defineSymbol(s, d, p, "□", "\\square");
__defineSymbol(s, d, p, "□", "\\Box");
__defineSymbol(s, d, p, "◊", "\\Diamond");
__defineSymbol(s, d, p, "¥", "\\yen", true);
__defineSymbol(w, d, p, "¥", "\\yen", true);
__defineSymbol(s, d, p, "✓", "\\checkmark", true);
__defineSymbol(w, d, p, "✓", "\\checkmark");
__defineSymbol(s, d, p, "ℶ", "\\beth", true);
__defineSymbol(s, d, p, "ℸ", "\\daleth", true);
__defineSymbol(s, d, p, "ℷ", "\\gimel", true);
__defineSymbol(s, d, p, "ϝ", "\\digamma", true);
__defineSymbol(s, d, p, "ϰ", "\\varkappa");
__defineSymbol(s, d, v0, "┌", "\\@ulcorner", true);
__defineSymbol(s, d, o0, "┐", "\\@urcorner", true);
__defineSymbol(s, d, v0, "└", "\\@llcorner", true);
__defineSymbol(s, d, o0, "┘", "\\@lrcorner", true);
__defineSymbol(s, d, f, "≦", "\\leqq", true);
__defineSymbol(s, d, f, "⩽", "\\leqslant", true);
__defineSymbol(s, d, f, "⪕", "\\eqslantless", true);
__defineSymbol(s, d, f, "≲", "\\lesssim", true);
__defineSymbol(s, d, f, "⪅", "\\lessapprox", true);
__defineSymbol(s, d, f, "≊", "\\approxeq", true);
__defineSymbol(s, d, D, "⋖", "\\lessdot");
__defineSymbol(s, d, f, "⋘", "\\lll", true);
__defineSymbol(s, d, f, "≶", "\\lessgtr", true);
__defineSymbol(s, d, f, "⋚", "\\lesseqgtr", true);
__defineSymbol(s, d, f, "⪋", "\\lesseqqgtr", true);
__defineSymbol(s, d, f, "≑", "\\doteqdot");
__defineSymbol(s, d, f, "≓", "\\risingdotseq", true);
__defineSymbol(s, d, f, "≒", "\\fallingdotseq", true);
__defineSymbol(s, d, f, "∽", "\\backsim", true);
__defineSymbol(s, d, f, "⋍", "\\backsimeq", true);
__defineSymbol(s, d, f, "⫅", "\\subseteqq", true);
__defineSymbol(s, d, f, "⋐", "\\Subset", true);
__defineSymbol(s, d, f, "⊏", "\\sqsubset", true);
__defineSymbol(s, d, f, "≼", "\\preccurlyeq", true);
__defineSymbol(s, d, f, "⋞", "\\curlyeqprec", true);
__defineSymbol(s, d, f, "≾", "\\precsim", true);
__defineSymbol(s, d, f, "⪷", "\\precapprox", true);
__defineSymbol(s, d, f, "⊲", "\\vartriangleleft");
__defineSymbol(s, d, f, "⊴", "\\trianglelefteq");
__defineSymbol(s, d, f, "⊨", "\\vDash", true);
__defineSymbol(s, d, f, "⊪", "\\Vvdash", true);
__defineSymbol(s, d, f, "⌣", "\\smallsmile");
__defineSymbol(s, d, f, "⌢", "\\smallfrown");
__defineSymbol(s, d, f, "≏", "\\bumpeq", true);
__defineSymbol(s, d, f, "≎", "\\Bumpeq", true);
__defineSymbol(s, d, f, "≧", "\\geqq", true);
__defineSymbol(s, d, f, "⩾", "\\geqslant", true);
__defineSymbol(s, d, f, "⪖", "\\eqslantgtr", true);
__defineSymbol(s, d, f, "≳", "\\gtrsim", true);
__defineSymbol(s, d, f, "⪆", "\\gtrapprox", true);
__defineSymbol(s, d, D, "⋗", "\\gtrdot");
__defineSymbol(s, d, f, "⋙", "\\ggg", true);
__defineSymbol(s, d, f, "≷", "\\gtrless", true);
__defineSymbol(s, d, f, "⋛", "\\gtreqless", true);
__defineSymbol(s, d, f, "⪌", "\\gtreqqless", true);
__defineSymbol(s, d, f, "≖", "\\eqcirc", true);
__defineSymbol(s, d, f, "≗", "\\circeq", true);
__defineSymbol(s, d, f, "≜", "\\triangleq", true);
__defineSymbol(s, d, f, "∼", "\\thicksim");
__defineSymbol(s, d, f, "≈", "\\thickapprox");
__defineSymbol(s, d, f, "⫆", "\\supseteqq", true);
__defineSymbol(s, d, f, "⋑", "\\Supset", true);
__defineSymbol(s, d, f, "⊐", "\\sqsupset", true);
__defineSymbol(s, d, f, "≽", "\\succcurlyeq", true);
__defineSymbol(s, d, f, "⋟", "\\curlyeqsucc", true);
__defineSymbol(s, d, f, "≿", "\\succsim", true);
__defineSymbol(s, d, f, "⪸", "\\succapprox", true);
__defineSymbol(s, d, f, "⊳", "\\vartriangleright");
__defineSymbol(s, d, f, "⊵", "\\trianglerighteq");
__defineSymbol(s, d, f, "⊩", "\\Vdash", true);
__defineSymbol(s, d, f, "∣", "\\shortmid");
__defineSymbol(s, d, f, "∥", "\\shortparallel");
__defineSymbol(s, d, f, "≬", "\\between", true);
__defineSymbol(s, d, f, "⋔", "\\pitchfork", true);
__defineSymbol(s, d, f, "∝", "\\varpropto");
__defineSymbol(s, d, f, "◀", "\\blacktriangleleft");
__defineSymbol(s, d, f, "∴", "\\therefore", true);
__defineSymbol(s, d, f, "∍", "\\backepsilon");
__defineSymbol(s, d, f, "▶", "\\blacktriangleright");
__defineSymbol(s, d, f, "∵", "\\because", true);
__defineSymbol(s, d, f, "⋘", "\\llless");
__defineSymbol(s, d, f, "⋙", "\\gggtr");
__defineSymbol(s, d, D, "⊲", "\\lhd");
__defineSymbol(s, d, D, "⊳", "\\rhd");
__defineSymbol(s, d, f, "≂", "\\eqsim", true);
__defineSymbol(s, o, f, "⋈", "\\Join");
__defineSymbol(s, d, f, "≑", "\\Doteq", true);
__defineSymbol(s, d, D, "∔", "\\dotplus", true);
__defineSymbol(s, d, D, "∖", "\\smallsetminus");
__defineSymbol(s, d, D, "⋒", "\\Cap", true);
__defineSymbol(s, d, D, "⋓", "\\Cup", true);
__defineSymbol(s, d, D, "⩞", "\\doublebarwedge", true);
__defineSymbol(s, d, D, "⊟", "\\boxminus", true);
__defineSymbol(s, d, D, "⊞", "\\boxplus", true);
__defineSymbol(s, d, D, "⋇", "\\divideontimes", true);
__defineSymbol(s, d, D, "⋉", "\\ltimes", true);
__defineSymbol(s, d, D, "⋊", "\\rtimes", true);
__defineSymbol(s, d, D, "⋋", "\\leftthreetimes", true);
__defineSymbol(s, d, D, "⋌", "\\rightthreetimes", true);
__defineSymbol(s, d, D, "⋏", "\\curlywedge", true);
__defineSymbol(s, d, D, "⋎", "\\curlyvee", true);
__defineSymbol(s, d, D, "⊝", "\\circleddash", true);
__defineSymbol(s, d, D, "⊛", "\\circledast", true);
__defineSymbol(s, d, D, "⋅", "\\centerdot");
__defineSymbol(s, d, D, "⊺", "\\intercal", true);
__defineSymbol(s, d, D, "⋒", "\\doublecap");
__defineSymbol(s, d, D, "⋓", "\\doublecup");
__defineSymbol(s, d, D, "⊠", "\\boxtimes", true);
__defineSymbol(s, d, f, "⇢", "\\dashrightarrow", true);
__defineSymbol(s, d, f, "⇠", "\\dashleftarrow", true);
__defineSymbol(s, d, f, "⇇", "\\leftleftarrows", true);
__defineSymbol(s, d, f, "⇆", "\\leftrightarrows", true);
__defineSymbol(s, d, f, "⇚", "\\Lleftarrow", true);
__defineSymbol(s, d, f, "↞", "\\twoheadleftarrow", true);
__defineSymbol(s, d, f, "↢", "\\leftarrowtail", true);
__defineSymbol(s, d, f, "↫", "\\looparrowleft", true);
__defineSymbol(s, d, f, "⇋", "\\leftrightharpoons", true);
__defineSymbol(s, d, f, "↶", "\\curvearrowleft", true);
__defineSymbol(s, d, f, "↺", "\\circlearrowleft", true);
__defineSymbol(s, d, f, "↰", "\\Lsh", true);
__defineSymbol(s, d, f, "⇈", "\\upuparrows", true);
__defineSymbol(s, d, f, "↿", "\\upharpoonleft", true);
__defineSymbol(s, d, f, "⇃", "\\downharpoonleft", true);
__defineSymbol(s, o, f, "⊶", "\\origof", true);
__defineSymbol(s, o, f, "⊷", "\\imageof", true);
__defineSymbol(s, d, f, "⊸", "\\multimap", true);
__defineSymbol(s, d, f, "↭", "\\leftrightsquigarrow", true);
__defineSymbol(s, d, f, "⇉", "\\rightrightarrows", true);
__defineSymbol(s, d, f, "⇄", "\\rightleftarrows", true);
__defineSymbol(s, d, f, "↠", "\\twoheadrightarrow", true);
__defineSymbol(s, d, f, "↣", "\\rightarrowtail", true);
__defineSymbol(s, d, f, "↬", "\\looparrowright", true);
__defineSymbol(s, d, f, "↷", "\\curvearrowright", true);
__defineSymbol(s, d, f, "↻", "\\circlearrowright", true);
__defineSymbol(s, d, f, "↱", "\\Rsh", true);
__defineSymbol(s, d, f, "⇊", "\\downdownarrows", true);
__defineSymbol(s, d, f, "↾", "\\upharpoonright", true);
__defineSymbol(s, d, f, "⇂", "\\downharpoonright", true);
__defineSymbol(s, d, f, "⇝", "\\rightsquigarrow", true);
__defineSymbol(s, d, f, "⇝", "\\leadsto");
__defineSymbol(s, d, f, "⇛", "\\Rrightarrow", true);
__defineSymbol(s, d, f, "↾", "\\restriction");
__defineSymbol(s, o, p, "‘", "`");
__defineSymbol(s, o, p, "$", "\\$");
__defineSymbol(w, o, p, "$", "\\$");
__defineSymbol(w, o, p, "$", "\\textdollar");
__defineSymbol(s, o, p, "%", "\\%");
__defineSymbol(w, o, p, "%", "\\%");
__defineSymbol(s, o, p, "_", "\\_");
__defineSymbol(w, o, p, "_", "\\_");
__defineSymbol(w, o, p, "_", "\\textunderscore");
__defineSymbol(s, o, p, "∠", "\\angle", true);
__defineSymbol(s, o, p, "∞", "\\infty", true);
__defineSymbol(s, o, p, "′", "\\prime");
__defineSymbol(s, o, p, "△", "\\triangle");
__defineSymbol(s, o, p, "Γ", "\\Gamma", true);
__defineSymbol(s, o, p, "Δ", "\\Delta", true);
__defineSymbol(s, o, p, "Θ", "\\Theta", true);
__defineSymbol(s, o, p, "Λ", "\\Lambda", true);
__defineSymbol(s, o, p, "Ξ", "\\Xi", true);
__defineSymbol(s, o, p, "Π", "\\Pi", true);
__defineSymbol(s, o, p, "Σ", "\\Sigma", true);
__defineSymbol(s, o, p, "Υ", "\\Upsilon", true);
__defineSymbol(s, o, p, "Φ", "\\Phi", true);
__defineSymbol(s, o, p, "Ψ", "\\Psi", true);
__defineSymbol(s, o, p, "Ω", "\\Omega", true);
__defineSymbol(s, o, p, "A", "Α");
__defineSymbol(s, o, p, "B", "Β");
__defineSymbol(s, o, p, "E", "Ε");
__defineSymbol(s, o, p, "Z", "Ζ");
__defineSymbol(s, o, p, "H", "Η");
__defineSymbol(s, o, p, "I", "Ι");
__defineSymbol(s, o, p, "K", "Κ");
__defineSymbol(s, o, p, "M", "Μ");
__defineSymbol(s, o, p, "N", "Ν");
__defineSymbol(s, o, p, "O", "Ο");
__defineSymbol(s, o, p, "P", "Ρ");
__defineSymbol(s, o, p, "T", "Τ");
__defineSymbol(s, o, p, "X", "Χ");
__defineSymbol(s, o, p, "¬", "\\neg", true);
__defineSymbol(s, o, p, "¬", "\\lnot");
__defineSymbol(s, o, p, "⊤", "\\top");
__defineSymbol(s, o, p, "⊥", "\\bot");
__defineSymbol(s, o, p, "∅", "\\emptyset");
__defineSymbol(s, d, p, "∅", "\\varnothing");
__defineSymbol(s, o, E, "α", "\\alpha", true);
__defineSymbol(s, o, E, "β", "\\beta", true);
__defineSymbol(s, o, E, "γ", "\\gamma", true);
__defineSymbol(s, o, E, "δ", "\\delta", true);
__defineSymbol(s, o, E, "ϵ", "\\epsilon", true);
__defineSymbol(s, o, E, "ζ", "\\zeta", true);
__defineSymbol(s, o, E, "η", "\\eta", true);
__defineSymbol(s, o, E, "θ", "\\theta", true);
__defineSymbol(s, o, E, "ι", "\\iota", true);
__defineSymbol(s, o, E, "κ", "\\kappa", true);
__defineSymbol(s, o, E, "λ", "\\lambda", true);
__defineSymbol(s, o, E, "μ", "\\mu", true);
__defineSymbol(s, o, E, "ν", "\\nu", true);
__defineSymbol(s, o, E, "ξ", "\\xi", true);
__defineSymbol(s, o, E, "ο", "\\omicron", true);
__defineSymbol(s, o, E, "π", "\\pi", true);
__defineSymbol(s, o, E, "ρ", "\\rho", true);
__defineSymbol(s, o, E, "σ", "\\sigma", true);
__defineSymbol(s, o, E, "τ", "\\tau", true);
__defineSymbol(s, o, E, "υ", "\\upsilon", true);
__defineSymbol(s, o, E, "ϕ", "\\phi", true);
__defineSymbol(s, o, E, "χ", "\\chi", true);
__defineSymbol(s, o, E, "ψ", "\\psi", true);
__defineSymbol(s, o, E, "ω", "\\omega", true);
__defineSymbol(s, o, E, "ε", "\\varepsilon", true);
__defineSymbol(s, o, E, "ϑ", "\\vartheta", true);
__defineSymbol(s, o, E, "ϖ", "\\varpi", true);
__defineSymbol(s, o, E, "ϱ", "\\varrho", true);
__defineSymbol(s, o, E, "ς", "\\varsigma", true);
__defineSymbol(s, o, E, "φ", "\\varphi", true);
__defineSymbol(s, o, D, "∗", "*", true);
__defineSymbol(s, o, D, "+", "+");
__defineSymbol(s, o, D, "−", "-", true);
__defineSymbol(s, o, D, "⋅", "\\cdot", true);
__defineSymbol(s, o, D, "∘", "\\circ", true);
__defineSymbol(s, o, D, "÷", "\\div", true);
__defineSymbol(s, o, D, "±", "\\pm", true);
__defineSymbol(s, o, D, "×", "\\times", true);
__defineSymbol(s, o, D, "∩", "\\cap", true);
__defineSymbol(s, o, D, "∪", "\\cup", true);
__defineSymbol(s, o, D, "∖", "\\setminus", true);
__defineSymbol(s, o, D, "∧", "\\land");
__defineSymbol(s, o, D, "∨", "\\lor");
__defineSymbol(s, o, D, "∧", "\\wedge", true);
__defineSymbol(s, o, D, "∨", "\\vee", true);
__defineSymbol(s, o, p, "√", "\\surd");
__defineSymbol(s, o, v0, "⟨", "\\langle", true);
__defineSymbol(s, o, v0, "∣", "\\lvert");
__defineSymbol(s, o, v0, "∥", "\\lVert");
__defineSymbol(s, o, o0, "?", "?");
__defineSymbol(s, o, o0, "!", "!");
__defineSymbol(s, o, o0, "⟩", "\\rangle", true);
__defineSymbol(s, o, o0, "∣", "\\rvert");
__defineSymbol(s, o, o0, "∥", "\\rVert");
__defineSymbol(s, o, f, "=", "=");
__defineSymbol(s, o, f, ":", ":");
__defineSymbol(s, o, f, "≈", "\\approx", true);
__defineSymbol(s, o, f, "≅", "\\cong", true);
__defineSymbol(s, o, f, "≥", "\\ge");
__defineSymbol(s, o, f, "≥", "\\geq", true);
__defineSymbol(s, o, f, "←", "\\gets");
__defineSymbol(s, o, f, ">", "\\gt", true);
__defineSymbol(s, o, f, "∈", "\\in", true);
__defineSymbol(s, o, f, "\uE020", "\\@not");
__defineSymbol(s, o, f, "⊂", "\\subset", true);
__defineSymbol(s, o, f, "⊃", "\\supset", true);
__defineSymbol(s, o, f, "⊆", "\\subseteq", true);
__defineSymbol(s, o, f, "⊇", "\\supseteq", true);
__defineSymbol(s, d, f, "⊈", "\\nsubseteq", true);
__defineSymbol(s, d, f, "⊉", "\\nsupseteq", true);
__defineSymbol(s, o, f, "⊨", "\\models");
__defineSymbol(s, o, f, "←", "\\leftarrow", true);
__defineSymbol(s, o, f, "≤", "\\le");
__defineSymbol(s, o, f, "≤", "\\leq", true);
__defineSymbol(s, o, f, "<", "\\lt", true);
__defineSymbol(s, o, f, "→", "\\rightarrow", true);
__defineSymbol(s, o, f, "→", "\\to");
__defineSymbol(s, d, f, "≱", "\\ngeq", true);
__defineSymbol(s, d, f, "≰", "\\nleq", true);
__defineSymbol(s, o, q0, " ", "\\ ");
__defineSymbol(s, o, q0, " ", "\\space");
__defineSymbol(s, o, q0, " ", "\\nobreakspace");
__defineSymbol(w, o, q0, " ", "\\ ");
__defineSymbol(w, o, q0, " ", " ");
__defineSymbol(w, o, q0, " ", "\\space");
__defineSymbol(w, o, q0, " ", "\\nobreakspace");
__defineSymbol(s, o, q0, null, "\\nobreak");
__defineSymbol(s, o, q0, null, "\\allowbreak");
__defineSymbol(s, o, ce, ",", ",");
__defineSymbol(s, o, ce, ";", ";");
__defineSymbol(s, d, D, "⊼", "\\barwedge", true);
__defineSymbol(s, d, D, "⊻", "\\veebar", true);
__defineSymbol(s, o, D, "⊙", "\\odot", true);
__defineSymbol(s, o, D, "⊕", "\\oplus", true);
__defineSymbol(s, o, D, "⊗", "\\otimes", true);
__defineSymbol(s, o, p, "∂", "\\partial", true);
__defineSymbol(s, o, D, "⊘", "\\oslash", true);
__defineSymbol(s, d, D, "⊚", "\\circledcirc", true);
__defineSymbol(s, d, D, "⊡", "\\boxdot", true);
__defineSymbol(s, o, D, "△", "\\bigtriangleup");
__defineSymbol(s, o, D, "▽", "\\bigtriangledown");
__defineSymbol(s, o, D, "†", "\\dagger");
__defineSymbol(s, o, D, "⋄", "\\diamond");
__defineSymbol(s, o, D, "⋆", "\\star");
__defineSymbol(s, o, D, "◃", "\\triangleleft");
__defineSymbol(s, o, D, "▹", "\\triangleright");
__defineSymbol(s, o, v0, "{", "\\{");
__defineSymbol(w, o, p, "{", "\\{");
__defineSymbol(w, o, p, "{", "\\textbraceleft");
__defineSymbol(s, o, o0, "}", "\\}");
__defineSymbol(w, o, p, "}", "\\}");
__defineSymbol(w, o, p, "}", "\\textbraceright");
__defineSymbol(s, o, v0, "{", "\\lbrace");
__defineSymbol(s, o, o0, "}", "\\rbrace");
__defineSymbol(s, o, v0, "[", "\\lbrack", true);
__defineSymbol(w, o, p, "[", "\\lbrack", true);
__defineSymbol(s, o, o0, "]", "\\rbrack", true);
__defineSymbol(w, o, p, "]", "\\rbrack", true);
__defineSymbol(s, o, v0, "(", "\\lparen", true);
__defineSymbol(s, o, o0, ")", "\\rparen", true);
__defineSymbol(w, o, p, "<", "\\textless", true);
__defineSymbol(w, o, p, ">", "\\textgreater", true);
__defineSymbol(s, o, v0, "⌊", "\\lfloor", true);
__defineSymbol(s, o, o0, "⌋", "\\rfloor", true);
__defineSymbol(s, o, v0, "⌈", "\\lceil", true);
__defineSymbol(s, o, o0, "⌉", "\\rceil", true);
__defineSymbol(s, o, p, "\\", "\\backslash");
__defineSymbol(s, o, p, "∣", "|");
__defineSymbol(s, o, p, "∣", "\\vert");
__defineSymbol(w, o, p, "|", "\\textbar", true);
__defineSymbol(s, o, p, "∥", "\\|");
__defineSymbol(s, o, p, "∥", "\\Vert");
__defineSymbol(w, o, p, "∥", "\\textbardbl");
__defineSymbol(w, o, p, "~", "\\textasciitilde");
__defineSymbol(w, o, p, "\\", "\\textbackslash");
__defineSymbol(w, o, p, "^", "\\textasciicircum");
__defineSymbol(s, o, f, "↑", "\\uparrow", true);
__defineSymbol(s, o, f, "⇑", "\\Uparrow", true);
__defineSymbol(s, o, f, "↓", "\\downarrow", true);
__defineSymbol(s, o, f, "⇓", "\\Downarrow", true);
__defineSymbol(s, o, f, "↕", "\\updownarrow", true);
__defineSymbol(s, o, f, "⇕", "\\Updownarrow", true);
__defineSymbol(s, o, e0, "∐", "\\coprod");
__defineSymbol(s, o, e0, "⋁", "\\bigvee");
__defineSymbol(s, o, e0, "⋀", "\\bigwedge");
__defineSymbol(s, o, e0, "⨄", "\\biguplus");
__defineSymbol(s, o, e0, "⋂", "\\bigcap");
__defineSymbol(s, o, e0, "⋃", "\\bigcup");
__defineSymbol(s, o, e0, "∫", "\\int");
__defineSymbol(s, o, e0, "∫", "\\intop");
__defineSymbol(s, o, e0, "∬", "\\iint");
__defineSymbol(s, o, e0, "∭", "\\iiint");
__defineSymbol(s, o, e0, "∏", "\\prod");
__defineSymbol(s, o, e0, "∑", "\\sum");
__defineSymbol(s, o, e0, "⨂", "\\bigotimes");
__defineSymbol(s, o, e0, "⨁", "\\bigoplus");
__defineSymbol(s, o, e0, "⨀", "\\bigodot");
__defineSymbol(s, o, e0, "∮", "\\oint");
__defineSymbol(s, o, e0, "∯", "\\oiint");
__defineSymbol(s, o, e0, "∰", "\\oiiint");
__defineSymbol(s, o, e0, "⨆", "\\bigsqcup");
__defineSymbol(s, o, e0, "∫", "\\smallint");
__defineSymbol(w, o, ie, "…", "\\textellipsis");
__defineSymbol(s, o, ie, "…", "\\mathellipsis");
__defineSymbol(w, o, ie, "…", "\\ldots", true);
__defineSymbol(s, o, ie, "…", "\\ldots", true);
__defineSymbol(s, o, ie, "⋯", "\\@cdots", true);
__defineSymbol(s, o, ie, "⋱", "\\ddots", true);
__defineSymbol(s, o, p, "⋮", "\\varvdots");
__defineSymbol(w, o, p, "⋮", "\\varvdots");
__defineSymbol(s, o, j, "ˊ", "\\acute");
__defineSymbol(s, o, j, "ˋ", "\\grave");
__defineSymbol(s, o, j, "¨", "\\ddot");
__defineSymbol(s, o, j, "~", "\\tilde");
__defineSymbol(s, o, j, "ˉ", "\\bar");
__defineSymbol(s, o, j, "˘", "\\breve");
__defineSymbol(s, o, j, "ˇ", "\\check");
__defineSymbol(s, o, j, "^", "\\hat");
__defineSymbol(s, o, j, "⃗", "\\vec");
__defineSymbol(s, o, j, "˙", "\\dot");
__defineSymbol(s, o, j, "˚", "\\mathring");
__defineSymbol(s, o, E, "\uE131", "\\@imath");
__defineSymbol(s, o, E, "\uE237", "\\@jmath");
__defineSymbol(s, o, p, "ı", "ı");
__defineSymbol(s, o, p, "ȷ", "ȷ");
__defineSymbol(w, o, p, "ı", "\\i", true);
__defineSymbol(w, o, p, "ȷ", "\\j", true);
__defineSymbol(w, o, p, "ß", "\\ss", true);
__defineSymbol(w, o, p, "æ", "\\ae", true);
__defineSymbol(w, o, p, "œ", "\\oe", true);
__defineSymbol(w, o, p, "ø", "\\o", true);
__defineSymbol(w, o, p, "Æ", "\\AE", true);
__defineSymbol(w, o, p, "Œ", "\\OE", true);
__defineSymbol(w, o, p, "Ø", "\\O", true);
__defineSymbol(w, o, j, "ˊ", "\\'");
__defineSymbol(w, o, j, "ˋ", "\\`");
__defineSymbol(w, o, j, "ˆ", "\\^");
__defineSymbol(w, o, j, "˜", "\\~");
__defineSymbol(w, o, j, "ˉ", "\\=");
__defineSymbol(w, o, j, "˘", "\\u");
__defineSymbol(w, o, j, "˙", "\\.");
__defineSymbol(w, o, j, "¸", "\\c");
__defineSymbol(w, o, j, "˚", "\\r");
__defineSymbol(w, o, j, "ˇ", "\\v");
__defineSymbol(w, o, j, "¨", '\\"');
__defineSymbol(w, o, j, "˝", "\\H");
__defineSymbol(w, o, j, "◯", "\\textcircled");
const Nr = {
    "--": true,
    "---": true,
    "``": true,
    "''": true
};
__defineSymbol(w, o, p, "–", "--", true);
__defineSymbol(w, o, p, "–", "\\textendash");
__defineSymbol(w, o, p, "—", "---", true);
__defineSymbol(w, o, p, "—", "\\textemdash");
__defineSymbol(w, o, p, "‘", "`", true);
__defineSymbol(w, o, p, "‘", "\\textquoteleft");
__defineSymbol(w, o, p, "’", "'", true);
__defineSymbol(w, o, p, "’", "\\textquoteright");
__defineSymbol(w, o, p, "“", "``", true);
__defineSymbol(w, o, p, "“", "\\textquotedblleft");
__defineSymbol(w, o, p, "”", "''", true);
__defineSymbol(w, o, p, "”", "\\textquotedblright");
__defineSymbol(s, o, p, "°", "\\degree", true);
__defineSymbol(w, o, p, "°", "\\degree");
__defineSymbol(w, o, p, "°", "\\textdegree", true);
__defineSymbol(s, o, p, "£", "\\pounds");
__defineSymbol(s, o, p, "£", "\\mathsterling", true);
__defineSymbol(w, o, p, "£", "\\pounds");
__defineSymbol(w, o, p, "£", "\\textsterling", true);
__defineSymbol(s, d, p, "✠", "\\maltese");
__defineSymbol(w, d, p, "✠", "\\maltese");
const er = '0123456789/@."';
for(let Qe = 0; Qe < er.length; Qe++){
    const tr = er.charAt(Qe);
    __defineSymbol(s, o, p, tr, tr);
}
const rr = '0123456789!@*()-=+";:?/.,';
for(let _e = 0; _e < rr.length; _e++){
    const ar = rr.charAt(_e);
    __defineSymbol(w, o, p, ar, ar);
}
const Ee = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for(let et = 0; et < Ee.length; et++){
    const we = Ee.charAt(et);
    __defineSymbol(s, o, E, we, we);
    __defineSymbol(w, o, p, we, we);
}
__defineSymbol(s, d, p, "C", "ℂ");
__defineSymbol(w, d, p, "C", "ℂ");
__defineSymbol(s, d, p, "H", "ℍ");
__defineSymbol(w, d, p, "H", "ℍ");
__defineSymbol(s, d, p, "N", "ℕ");
__defineSymbol(w, d, p, "N", "ℕ");
__defineSymbol(s, d, p, "P", "ℙ");
__defineSymbol(w, d, p, "P", "ℙ");
__defineSymbol(s, d, p, "Q", "ℚ");
__defineSymbol(w, d, p, "Q", "ℚ");
__defineSymbol(s, d, p, "R", "ℝ");
__defineSymbol(w, d, p, "R", "ℝ");
__defineSymbol(s, d, p, "Z", "ℤ");
__defineSymbol(w, d, p, "Z", "ℤ");
__defineSymbol(s, o, E, "h", "ℎ");
__defineSymbol(w, o, E, "h", "ℎ");
let R = "";
for(let l0 = 0; l0 < Ee.length; l0++){
    const J = Ee.charAt(l0);
    R = String.fromCharCode(55349, 56320 + l0);
    __defineSymbol(s, o, E, J, R);
    __defineSymbol(w, o, p, J, R);
    R = String.fromCharCode(55349, 56372 + l0);
    __defineSymbol(s, o, E, J, R);
    __defineSymbol(w, o, p, J, R);
    R = String.fromCharCode(55349, 56424 + l0);
    __defineSymbol(s, o, E, J, R);
    __defineSymbol(w, o, p, J, R);
    R = String.fromCharCode(55349, 56580 + l0);
    __defineSymbol(s, o, E, J, R);
    __defineSymbol(w, o, p, J, R);
    R = String.fromCharCode(55349, 56684 + l0);
    __defineSymbol(s, o, E, J, R);
    __defineSymbol(w, o, p, J, R);
    R = String.fromCharCode(55349, 56736 + l0);
    __defineSymbol(s, o, E, J, R);
    __defineSymbol(w, o, p, J, R);
    R = String.fromCharCode(55349, 56788 + l0);
    __defineSymbol(s, o, E, J, R);
    __defineSymbol(w, o, p, J, R);
    R = String.fromCharCode(55349, 56840 + l0);
    __defineSymbol(s, o, E, J, R);
    __defineSymbol(w, o, p, J, R);
    R = String.fromCharCode(55349, 56944 + l0);
    __defineSymbol(s, o, E, J, R);
    __defineSymbol(w, o, p, J, R);
    if (l0 < 26) {
        R = String.fromCharCode(55349, 56632 + l0);
        __defineSymbol(s, o, E, J, R);
        __defineSymbol(w, o, p, J, R);
        R = String.fromCharCode(55349, 56476 + l0);
        __defineSymbol(s, o, E, J, R);
        __defineSymbol(w, o, p, J, R);
    }
}
R = "𝕜";
__defineSymbol(s, o, E, "k", R);
__defineSymbol(w, o, p, "k", R);
for(let Y0 = 0; Y0 < 10; Y0++){
    const H0 = Y0.toString();
    R = String.fromCharCode(55349, 57294 + Y0);
    __defineSymbol(s, o, E, H0, R);
    __defineSymbol(w, o, p, H0, R);
    R = String.fromCharCode(55349, 57314 + Y0);
    __defineSymbol(s, o, E, H0, R);
    __defineSymbol(w, o, p, H0, R);
    R = String.fromCharCode(55349, 57324 + Y0);
    __defineSymbol(s, o, E, H0, R);
    __defineSymbol(w, o, p, H0, R);
    R = String.fromCharCode(55349, 57334 + Y0);
    __defineSymbol(s, o, E, H0, R);
    __defineSymbol(w, o, p, H0, R);
}
const gt = "ÐÞþ";
for(let tt = 0; tt < gt.length; tt++){
    const ke = gt.charAt(tt);
    __defineSymbol(s, o, E, ke, ke);
    __defineSymbol(w, o, p, ke, ke);
}
const Se = [
    [
        "mathbf",
        "textbf",
        "Main-Bold"
    ],
    [
        "mathbf",
        "textbf",
        "Main-Bold"
    ],
    [
        "mathnormal",
        "textit",
        "Math-Italic"
    ],
    [
        "mathnormal",
        "textit",
        "Math-Italic"
    ],
    [
        "boldsymbol",
        "boldsymbol",
        "Main-BoldItalic"
    ],
    [
        "boldsymbol",
        "boldsymbol",
        "Main-BoldItalic"
    ],
    [
        "mathscr",
        "textscr",
        "Script-Regular"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "",
        "",
        ""
    ],
    [
        "",
        "",
        ""
    ],
    [
        "mathfrak",
        "textfrak",
        "Fraktur-Regular"
    ],
    [
        "mathfrak",
        "textfrak",
        "Fraktur-Regular"
    ],
    [
        "mathbb",
        "textbb",
        "AMS-Regular"
    ],
    [
        "mathbb",
        "textbb",
        "AMS-Regular"
    ],
    [
        "mathboldfrak",
        "textboldfrak",
        "Fraktur-Regular"
    ],
    [
        "mathboldfrak",
        "textboldfrak",
        "Fraktur-Regular"
    ],
    [
        "mathsf",
        "textsf",
        "SansSerif-Regular"
    ],
    [
        "mathsf",
        "textsf",
        "SansSerif-Regular"
    ],
    [
        "mathboldsf",
        "textboldsf",
        "SansSerif-Bold"
    ],
    [
        "mathboldsf",
        "textboldsf",
        "SansSerif-Bold"
    ],
    [
        "mathitsf",
        "textitsf",
        "SansSerif-Italic"
    ],
    [
        "mathitsf",
        "textitsf",
        "SansSerif-Italic"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "",
        "",
        ""
    ],
    [
        "mathtt",
        "texttt",
        "Typewriter-Regular"
    ],
    [
        "mathtt",
        "texttt",
        "Typewriter-Regular"
    ]
];
const nr = [
    [
        "mathbf",
        "textbf",
        "Main-Bold"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "mathsf",
        "textsf",
        "SansSerif-Regular"
    ],
    [
        "mathboldsf",
        "textboldsf",
        "SansSerif-Bold"
    ],
    [
        "mathtt",
        "texttt",
        "Typewriter-Regular"
    ]
];
const fa = (text, mode)=>{
    var t = text.charCodeAt(0);
    var a = text.charCodeAt(1);
    var n = (t - 55296) * 1024 + (a - 56320) + 65536;
    var l = mode === "math" ? 0 : 1;
    if (n >= 119808 && n < 120484) {
        var u = Math.floor((n - 119808) / 26);
        return [
            Se[u][2],
            Se[u][l]
        ];
    } else if (n >= 120782 && n <= 120831) {
        var h = Math.floor((n - 120782) / 10);
        return [
            nr[h][2],
            nr[h][l]
        ];
    } else {
        if (n === 120485 || n === 120486) {
            return [
                Se[0][2],
                Se[0][l]
            ];
        }
        if (n > 120486 && n < 120782) {
            return [
                "",
                ""
            ];
        }
        throw new ParseError(`Unsupported character: ${text}`);
    }
};
const He = (e, t, a)=>{
    if ($[a][e]) {
        const n = $[a][e].replace;
        if (n) {
            e = n;
        }
    }
    return {
        value: e,
        metrics: Ct(e, t, a)
    };
};
const s0 = (e, t, a, n, l)=>{
    const u = He(e, t, a);
    const u_metrics = u.metrics;
    e = u.value;
    let c;
    if (u_metrics) {
        let v = u_metrics.italic;
        if (a === "text" || n && n.font === "mathit") {
            v = 0;
        }
        c = new f0(e, u_metrics.height, u_metrics.depth, v, u_metrics.skew, u_metrics.width, l);
    } else {
        if (typeof console !== "undefined") {
            console.warn(`No character metrics ${`for '${e}' in style '${t}' and mode '${a}'`}`);
        }
        c = new f0(e, 0, 0, 0, 0, 0, l);
    }
    if (n) {
        c.maxFontSize = n.sizeMultiplier;
        if (n.style.isTight()) {
            c.classes.push("mtight");
        }
        const g = n.getColor();
        if (g) {
            c.style.color = g;
        }
    }
    return c;
};
const qt = (e, mode, a, n = [])=>{
    if (a.font === "boldsymbol" && He(e, "Main-Bold", mode).metrics) {
        return s0(e, "Main-Bold", mode, a, n.concat([
            "mathbf"
        ]));
    }
    if (e === "\\" || $[mode][e].font === "main") {
        return s0(e, "Main-Regular", mode, a, n);
    }
    return s0(e, "AMS-Regular", mode, a, n.concat([
        "amsrm"
    ]));
};
const va = (text, mode, a, n, l)=>{
    if (l !== "textord" && He(text, "Math-BoldItalic", mode).metrics) {
        return {
            fontName: "Math-BoldItalic",
            fontClass: "boldsymbol"
        };
    }
    return {
        fontName: "Main-Bold",
        fontClass: "mathbf"
    };
};
const Fe = ({ mode, text }, t, a)=>{
    const u = [
        "mord"
    ];
    const h = mode === "math" || mode === "text" && t.font;
    const c = h ? t.font : t.fontFamily;
    let v = "";
    let g = "";
    if (text.charCodeAt(0) === 55349) {
        [v, g] = fa(text, mode);
    }
    if (v.length > 0) {
        return s0(text, v, mode, t, u.concat(g));
    }
    if (c) {
        let b;
        let y;
        if (c === "boldsymbol") {
            const x = va(text, mode, t, u, a);
            b = x.fontName;
            y = [
                x.fontClass
            ];
        } else {
            if (h) {
                b = bt[c].fontName;
                y = [
                    c
                ];
            } else {
                b = ze(c, t.fontWeight, t.fontShape);
                y = [
                    c,
                    t.fontWeight,
                    t.fontShape
                ];
            }
        }
        if (He(text, b, mode).metrics) {
            return s0(text, b, mode, t, u.concat(y));
        }
        if (Nr.hasOwnProperty(text) && b.slice(0, 10) === "Typewriter") {
            const M = [];
            for(let T = 0; T < text.length; T++){
                M.push(s0(text[T], b, mode, t, u.concat(y)));
            }
            return E0(M);
        }
    }
    if (a === "mathord") {
        return s0(text, "Math-Italic", mode, t, u.concat([
            "mathnormal"
        ]));
    }
    if (a === "textord") {
        const C = $[mode][text] && $[mode][text].font;
        if (C === "ams") {
            const q = ze("amsrm", t.fontWeight, t.fontShape);
            return s0(text, q, mode, t, u.concat("amsrm", t.fontWeight, t.fontShape));
        } else if (C === "main" || !C) {
            const I = ze("textrm", t.fontWeight, t.fontShape);
            return s0(text, I, mode, t, u.concat(t.fontWeight, t.fontShape));
        } else {
            const O = ze(C, t.fontWeight, t.fontShape);
            return s0(text, O, mode, t, u.concat(O, t.fontWeight, t.fontShape));
        }
    } else {
        throw new Error(`unexpected type: ${a} in makeOrd`);
    }
};
const pa = (r, e)=>{
    if (L0(r.classes) !== L0(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize || r.italic !== 0 && r.hasClass("mathnormal")) {
        return false;
    }
    if (r.classes.length === 1) {
        var t = r.classes[0];
        if (t === "mbin" || t === "mord") {
            return false;
        }
    }
    for (var a of Object.keys(r.style)){
        if (r.style[a] !== e.style[a]) {
            return false;
        }
    }
    for (var n of Object.keys(e.style)){
        if (r.style[n] !== e.style[n]) {
            return false;
        }
    }
    return true;
};
const Or = (r)=>{
    for(var e = 0; e < r.length - 1; e++){
        var t = r[e];
        var a = r[e + 1];
        if (t instanceof f0 && a instanceof f0 && pa(t, a)) {
            t.text += a.text;
            t.height = Math.max(t.height, a.height);
            t.depth = Math.max(t.depth, a.depth);
            t.italic = a.italic;
            r.splice(e + 1, 1);
            e--;
        }
    }
    return r;
};
const Et = (e)=>{
    let t = 0;
    let a = 0;
    let n = 0;
    for(let l = 0; l < e.children.length; l++){
        const child = e.children[l];
        if (child.height > t) {
            t = child.height;
        }
        if (child.depth > a) {
            a = child.depth;
        }
        if (child.maxFontSize > n) {
            n = child.maxFontSize;
        }
    }
    e.height = t;
    e.depth = a;
    e.maxFontSize = n;
};
const k = (e, t, a, n)=>{
    const l = new ne(e, t, a, n);
    Et(l);
    return l;
};
const G0 = (r, e, t, a)=>new ne(r, e, t, a);
const te = (e, t, a)=>{
    const n = k([
        e
    ], [], t);
    n.height = Math.max(a || t.fontMetrics().defaultRuleThickness, t.minRuleThickness);
    n.style.borderBottomWidth = A(n.height);
    n.maxFontSize = 1;
    return n;
};
const ga = (href, t, a, n)=>{
    const l = new Oe(href, t, a, n);
    Et(l);
    return l;
};
var E0 = (e)=>{
    const t = new ae(e);
    Et(t);
    return t;
};
const re = (e, t)=>{
    if (e instanceof ae) {
        return k([], [
            e
        ], t);
    }
    return e;
};
const ba = (e)=>{
    if (e.positionType === "individualShift") {
        for(var t = e.children, a = [
            t[0]
        ], n = -t[0].shift - t[0].elem.depth, l = n, u = 1; u < t.length; u++){
            const h = -t[u].shift - l - t[u].elem.depth;
            const c = h - (t[u - 1].elem.height + t[u - 1].elem.depth);
            l = l + h;
            a.push({
                type: "kern",
                size: c
            });
            a.push(t[u]);
        }
        return {
            children: a,
            depth: n
        };
    }
    let v;
    if (e.positionType === "top") {
        let g = e.positionData;
        for(let b = 0; b < e.children.length; b++){
            const child = e.children[b];
            g -= child.type === "kern" ? child.size : child.elem.height + child.elem.depth;
        }
        v = g;
    } else if (e.positionType === "bottom") {
        v = -e.positionData;
    } else {
        const x = e.children[0];
        if (x.type !== "elem") {
            throw new Error('First child must have type "elem".');
        }
        if (e.positionType === "shift") {
            v = -x.elem.depth - e.positionData;
        } else if (e.positionType === "firstBaseline") {
            v = -x.elem.depth;
        } else {
            throw new Error(`Invalid positionType ${e.positionType}.`);
        }
    }
    return {
        children: e.children,
        depth: v
    };
};
const G = (e, t)=>{
    for(var { children, depth } = ba(e), l = 0, u = 0; u < children.length; u++){
        const h = children[u];
        if (h.type === "elem") {
            const c = h.elem;
            l = Math.max(l, c.maxFontSize, c.height);
        }
    }
    l += 2;
    const v = k([
        "pstrut"
    ], []);
    v.style.height = A(l);
    const g = [];
    let b = depth;
    let y = depth;
    let x = depth;
    for (const T of children){
        if (T.type === "kern") {
            x += T.size;
        } else {
            const C = T.elem;
            const q = T.wrapperClasses || [];
            const I = T.wrapperStyle || {};
            const O = k(q, [
                v,
                C
            ], undefined, I);
            O.style.top = A(-l - x - C.depth);
            if (T.marginLeft) {
                O.style.marginLeft = T.marginLeft;
            }
            if (T.marginRight) {
                O.style.marginRight = T.marginRight;
            }
            g.push(O);
            x += C.height + C.depth;
        }
        b = Math.min(b, x);
        y = Math.max(y, x);
    }
    const F = k([
        "vlist"
    ], g);
    F.style.height = A(y);
    let V;
    if (b < 0) {
        const L = k([], []);
        const P = k([
            "vlist"
        ], [
            L
        ]);
        P.style.height = A(-b);
        const W = k([
            "vlist-s"
        ], [
            new f0("\u200B")
        ]);
        V = [
            k([
                "vlist-r"
            ], [
                F,
                W
            ]),
            k([
                "vlist-r"
            ], [
                P
            ])
        ];
    } else {
        V = [
            k([
                "vlist-r"
            ], [
                F
            ])
        ];
    }
    const X = k([
        "vlist-t"
    ], V);
    if (V.length === 2) {
        X.classes.push("vlist-t2");
    }
    X.height = y;
    X.depth = -b;
    return X;
};
const Hr = (r, e)=>{
    var t = k([
        "mspace"
    ], [], e);
    var a = K(r, e);
    t.style.marginRight = A(a);
    return t;
};
var ze = (e, fontWeight, fontShape)=>{
    let n = "";
    switch(e){
        case "amsrm":
            n = "AMS";
            break;
        case "textrm":
            n = "Main";
            break;
        case "textsf":
            n = "SansSerif";
            break;
        case "texttt":
            n = "Typewriter";
            break;
        default:
            n = e;
    }
    let l;
    if (fontWeight === "textbf" && fontShape === "textit") {
        l = "BoldItalic";
    } else if (fontWeight === "textbf") {
        l = "Bold";
    } else if (fontWeight === "textit") {
        l = "Italic";
    } else {
        l = "Regular";
    }
    return `${n}-${l}`;
};
var bt = {
    mathbf: {
        variant: "bold",
        fontName: "Main-Bold"
    },
    mathrm: {
        variant: "normal",
        fontName: "Main-Regular"
    },
    textit: {
        variant: "italic",
        fontName: "Main-Italic"
    },
    mathit: {
        variant: "italic",
        fontName: "Main-Italic"
    },
    mathnormal: {
        variant: "italic",
        fontName: "Math-Italic"
    },
    mathsfit: {
        variant: "sans-serif-italic",
        fontName: "SansSerif-Italic"
    },
    mathbb: {
        variant: "double-struck",
        fontName: "AMS-Regular"
    },
    mathcal: {
        variant: "script",
        fontName: "Caligraphic-Regular"
    },
    mathfrak: {
        variant: "fraktur",
        fontName: "Fraktur-Regular"
    },
    mathscr: {
        variant: "script",
        fontName: "Script-Regular"
    },
    mathsf: {
        variant: "sans-serif",
        fontName: "SansSerif-Regular"
    },
    mathtt: {
        variant: "monospace",
        fontName: "Typewriter-Regular"
    }
};
const Fr = {
    vec: [
        "vec",
        0.471,
        0.714
    ],
    oiintSize1: [
        "oiintSize1",
        0.957,
        0.499
    ],
    oiintSize2: [
        "oiintSize2",
        1.472,
        0.659
    ],
    oiiintSize1: [
        "oiiintSize1",
        1.304,
        0.499
    ],
    oiiintSize2: [
        "oiiintSize2",
        1.98,
        0.659
    ]
};
const Lr = (e, t)=>{
    const [a, n, l] = Fr[e];
    const u = new P0(a);
    const h = new D0([
        u
    ], {
        width: A(n),
        height: A(l),
        style: `width:${A(n)}`,
        viewBox: `0 0 ${1000 * n} ${1000 * l}`,
        preserveAspectRatio: "xMinYMin"
    });
    const c = G0([
        "overlay"
    ], [
        h
    ], t);
    c.height = l;
    c.style.height = A(l);
    c.style.width = A(n);
    return c;
};
const Z = {
    number: 3,
    unit: "mu"
};
const W0 = {
    number: 4,
    unit: "mu"
};
const M0 = {
    number: 5,
    unit: "mu"
};
const ya = {
    mord: {
        mop: Z,
        mbin: W0,
        mrel: M0,
        minner: Z
    },
    mop: {
        mord: Z,
        mop: Z,
        mrel: M0,
        minner: Z
    },
    mbin: {
        mord: W0,
        mop: W0,
        mopen: W0,
        minner: W0
    },
    mrel: {
        mord: M0,
        mop: M0,
        mopen: M0,
        minner: M0
    },
    mopen: {},
    mclose: {
        mop: Z,
        mbin: W0,
        mrel: M0,
        minner: Z
    },
    mpunct: {
        mord: Z,
        mop: Z,
        mrel: M0,
        mopen: Z,
        mclose: Z,
        mpunct: Z,
        minner: Z
    },
    minner: {
        mord: Z,
        mop: Z,
        mbin: W0,
        mrel: M0,
        mopen: Z,
        mpunct: Z,
        minner: Z
    }
};
const xa = {
    mord: {
        mop: Z
    },
    mop: {
        mord: Z,
        mop: Z
    },
    mbin: {},
    mrel: {},
    mopen: {},
    mclose: {
        mop: Z
    },
    mpunct: {},
    minner: {
        mop: Z
    }
};
const Pr = {};
const Re = {};
const Ie = {};
export function __defineFunction(r) {
    for(var { type, names, props, handler, htmlBuilder, mathmlBuilder } = r, h = {
        type,
        numArgs: props.numArgs,
        argTypes: props.argTypes,
        allowedInArgument: !!props.allowedInArgument,
        allowedInText: !!props.allowedInText,
        allowedInMath: props.allowedInMath === undefined ? true : props.allowedInMath,
        numOptionalArgs: props.numOptionalArgs || 0,
        infix: !!props.infix,
        primitive: !!props.primitive,
        handler
    }, c = 0; c < names.length; ++c){
        Pr[names[c]] = h;
    }
    type && (htmlBuilder && (Re[type] = htmlBuilder), mathmlBuilder && (Ie[type] = mathmlBuilder));
}
function $0({ type, htmlBuilder, mathmlBuilder }) {
    __defineFunction({
        type,
        names: [],
        props: {
            numArgs: 0
        },
        handler () {
            throw new Error("Should never be called.");
        },
        htmlBuilder,
        mathmlBuilder
    });
}
const Ne = (e)=>{
    if (e.type === "ordgroup" && e.body.length === 1) {
        return e.body[0];
    }
    return e;
};
const Q = (e)=>{
    if (e.type === "ordgroup") {
        return e.body;
    }
    return [
        e
    ];
};
const wa = new Set([
    "leftmost",
    "mbin",
    "mopen",
    "mrel",
    "mop",
    "mpunct"
]);
const ka = new Set([
    "rightmost",
    "mrel",
    "mclose",
    "mpunct"
]);
const Sa = {
    display: N.DISPLAY,
    text: N.TEXT,
    script: N.SCRIPT,
    scriptscript: N.SCRIPTSCRIPT
};
const za = {
    mord: "mord",
    mop: "mop",
    mbin: "mbin",
    mrel: "mrel",
    mopen: "mopen",
    mclose: "mclose",
    mpunct: "mpunct",
    minner: "minner"
};
const a0 = (e, t, a, n = [
    null,
    null
])=>{
    const l = [];
    for(let u = 0; u < e.length; u++){
        const h = U(e[u], t);
        if (h instanceof ae) {
            const c = h.children;
            l.push(...c);
        } else {
            l.push(h);
        }
    }
    Or(l);
    if (!a) {
        return l;
    }
    let v = t;
    if (e.length === 1) {
        const g = e[0];
        if (g.type === "sizing") {
            v = t.havingSize(g.size);
        } else if (g.type === "styling") {
            v = t.havingStyle(Sa[g.style]);
        }
    }
    const node = k([
        n[0] || "leftmost"
    ], [], t);
    const y = k([
        n[1] || "rightmost"
    ], [], t);
    const x = a === "root";
    yt(l, (M, T)=>{
        var C = T.classes[0];
        var q = M.classes[0];
        if (C === "mbin" && ka.has(q)) {
            T.classes[0] = "mord";
        } else if (q === "mbin" && wa.has(C)) {
            M.classes[0] = "mord";
        }
    }, {
        node
    }, y, x);
    yt(l, (M, T)=>{
        var I = wt(T);
        var O = wt(M);
        var F = I && O ? M.hasClass("mtight") ? xa[I]?.[O] : ya[I]?.[O] : null;
        if (F) {
            return Hr(F, v);
        }
    }, {
        node
    }, y, x);
    return l;
};
var yt = (e, t, a, n, l)=>{
    if (n) {
        e.push(n);
    }
    for(var u = 0; u < e.length; u++){
        const h = e[u];
        const c = Gr(h);
        if (c) {
            yt(c.children, t, a, null, l);
            continue;
        }
        const v = !h.hasClass("mspace");
        if (v) {
            const g = t(h, a.node);
            g && (a.insertAfter ? a.insertAfter(g) : (e.unshift(g), u++));
        }
        if (v) {
            a.node = h;
        } else if (l && h.hasClass("newline")) {
            a.node = k([
                "leftmost"
            ]);
        }
        a.insertAfter = ((b)=>(y)=>{
                e.splice(b + 1, 0, y);
                u++;
            })(u);
    }
    if (n) {
        e.pop();
    }
};
var Gr = (e)=>{
    if (e instanceof ae || e instanceof Oe || e instanceof ne && e.hasClass("enclosing")) {
        return e;
    }
    return null;
};
const xt = (e, t)=>{
    const a = Gr(e);
    if (a) {
        const n = a.children;
        if (n.length) {
            if (t === "right") {
                return xt(n[n.length - 1], "right");
            }
            if (t === "left") {
                return xt(n[0], "left");
            }
        }
    }
    return e;
};
var wt = (e, t)=>{
    if (!e) {
        return null;
    }
    if (t) {
        e = xt(e, t);
    }
    const a = e.classes[0];
    return za[a] || null;
};
const me = (e, t)=>{
    const a = [
        "nulldelimiter"
    ].concat(e.baseSizingClasses());
    return k(t.concat(a));
};
var U = (e, t, a)=>{
    if (!e) {
        return k();
    }
    if (Re[e.type]) {
        let n = Re[e.type](e, t);
        if (a && t.size !== a.size) {
            n = k(t.sizingClasses(a), [
                n
            ], t);
            const l = t.sizeMultiplier / a.sizeMultiplier;
            n.height *= l;
            n.depth *= l;
        }
        return n;
    } else {
        throw new ParseError(`Got group of unknown type: '${e.type}'`);
    }
};
function Ae(r, e) {
    const t = k([
        "base"
    ], r, e);
    const a = k([
        "strut"
    ]);
    a.style.height = A(t.height + t.depth);
    if (t.depth) {
        a.style.verticalAlign = A(-t.depth);
    }
    t.children.unshift(a);
    return t;
}
function kt(r, e) {
    let t = null;
    if (r.length === 1 && r[0].type === "tag") {
        t = r[0].tag;
        r = r[0].body;
    }
    const a = a0(r, e, "root");
    let n;
    if (a.length === 2 && a[1].hasClass("tag")) {
        n = a.pop();
    }
    const l = [];
    let u = [];
    for(let h = 0; h < a.length; h++){
        u.push(a[h]);
        if (a[h].hasClass("mbin") || a[h].hasClass("mrel") || a[h].hasClass("allowbreak")) {
            let c = false;
            while(h < a.length - 1 && a[h + 1].hasClass("mspace") && !a[h + 1].hasClass("newline")){
                h++;
                u.push(a[h]);
                if (a[h].hasClass("nobreak")) {
                    c = true;
                }
            }
            if (!c) {
                l.push(Ae(u, e));
                u = [];
            }
        } else {
            if (a[h].hasClass("newline")) {
                u.pop();
                if (u.length > 0) {
                    l.push(Ae(u, e));
                    u = [];
                }
                l.push(a[h]);
            }
        }
    }
    if (u.length > 0) {
        l.push(Ae(u, e));
    }
    let v;
    if (t) {
        v = Ae(a0(t, e, true), e);
        v.classes = [
            "tag"
        ];
        l.push(v);
    } else if (n) {
        l.push(n);
    }
    const g = k([
        "katex-html"
    ], l);
    g.setAttribute("aria-hidden", "true");
    if (v) {
        const b = v.children[0];
        b.style.height = A(g.height + g.depth);
        if (g.depth) {
            b.style.verticalAlign = A(-g.depth);
        }
    }
    return g;
}
function Ur(r) {
    return new ae(r);
}
class z {
    constructor(e, t, a){
        this.type = e;
        this.attributes = {};
        this.children = t || [];
        this.classes = a || [];
    }
    setAttribute(e, t) {
        this.attributes[e] = t;
    }
    getAttribute(e) {
        return this.attributes[e];
    }
    toNode() {
        const e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
        for(const t in this.attributes){
            if (Object.prototype.hasOwnProperty.call(this.attributes, t)) {
                e.setAttribute(t, this.attributes[t]);
            }
        }
        if (this.classes.length > 0) {
            e.className = L0(this.classes);
        }
        for(let a = 0; a < this.children.length; a++){
            if (this.children[a] instanceof _ && this.children[a + 1] instanceof _) {
                let n = this.children[a].toText() + this.children[++a].toText();
                while(this.children[a + 1] instanceof _){
                    n += this.children[++a].toText();
                }
                e.appendChild(new _(n).toNode());
            } else {
                e.appendChild(this.children[a].toNode());
            }
        }
        return e;
    }
    toMarkup() {
        let e = `<${this.type}`;
        for(const t in this.attributes){
            if (Object.prototype.hasOwnProperty.call(this.attributes, t)) {
                e += ` ${t}="`;
                e += n0(this.attributes[t]);
                e += '"';
            }
        }
        if (this.classes.length > 0) {
            e += ` class ="${n0(L0(this.classes))}"`;
        }
        e += ">";
        for(let a = 0; a < this.children.length; a++){
            e += this.children[a].toMarkup();
        }
        e += `</${this.type}>`;
        return e;
    }
    toText() {
        return this.children.map((e)=>e.toText()).join("");
    }
}
class _ {
    constructor(e){
        this.text = e;
    }
    toNode() {
        return document.createTextNode(this.text);
    }
    toMarkup() {
        return n0(this.toText());
    }
    toText() {
        return this.text;
    }
}
class Vr {
    constructor(e){
        this.width = e;
        if (e >= 0.05555 && e <= 0.05556) {
            this.character = "\u200A";
        } else if (e >= 0.1666 && e <= 0.1667) {
            this.character = "\u2009";
        } else if (e >= 0.2222 && e <= 0.2223) {
            this.character = "\u2005";
        } else if (e >= 0.2777 && e <= 0.2778) {
            this.character = "\u2005\u200A";
        } else if (e >= -0.05556 && e <= -0.05555) {
            this.character = "\u200A\u2063";
        } else if (e >= -0.1667 && e <= -0.1666) {
            this.character = "\u2009\u2063";
        } else if (e >= -0.2223 && e <= -0.2222) {
            this.character = "\u205F\u2063";
        } else if (e >= -0.2778 && e <= -0.2777) {
            this.character = "\u2005\u2063";
        } else {
            this.character = null;
        }
    }
    toNode() {
        if (this.character) {
            return document.createTextNode(this.character);
        }
        const e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
        e.setAttribute("width", A(this.width));
        return e;
    }
    toMarkup() {
        if (this.character) {
            return `<mtext>${this.character}</mtext>`;
        }
        return `<mspace width="${A(this.width)}"/>`;
    }
    toText() {
        if (this.character) {
            return this.character;
        }
        return " ";
    }
}
const Aa = new Set([
    "\\imath",
    "\\jmath"
]);
const Ma = new Set([
    "mrow",
    "mtable"
]);
const b0 = (e, t, a)=>{
    if ($[t][e] && $[t][e].replace && e.charCodeAt(0) !== 55349 && !(Nr.hasOwnProperty(e) && a && (a.fontFamily && a.fontFamily.slice(4, 6) === "tt" || a.font && a.font.slice(4, 6) === "tt"))) {
        e = $[t][e].replace;
    }
    return new _(e);
};
const Rt = (e)=>{
    if (e.length === 1) {
        return e[0];
    }
    return new z("mrow", e);
};
const It = (e, t)=>{
    if (t.fontFamily === "texttt") {
        return "monospace";
    }
    if (t.fontFamily === "textsf") {
        if (t.fontShape === "textit" && t.fontWeight === "textbf") {
            return "sans-serif-bold-italic";
        }
        if (t.fontShape === "textit") {
            return "sans-serif-italic";
        }
        if (t.fontWeight === "textbf") {
            return "bold-sans-serif";
        }
        return "sans-serif";
    }
    if (t.fontShape === "textit" && t.fontWeight === "textbf") {
        return "bold-italic";
    }
    if (t.fontShape === "textit") {
        return "italic";
    }
    if (t.fontWeight === "textbf") {
        return "bold";
    }
    const t_font = t.font;
    if (!t_font || t_font === "mathnormal") {
        return null;
    }
    const e_mode = e.mode;
    if (t_font === "mathit") {
        return "italic";
    }
    if (t_font === "boldsymbol") {
        if (e.type === "textord") {
            return "bold";
        }
        return "bold-italic";
    }
    if (t_font === "mathbf") {
        return "bold";
    }
    if (t_font === "mathbb") {
        return "double-struck";
    }
    if (t_font === "mathsfit") {
        return "sans-serif-italic";
    }
    if (t_font === "mathfrak") {
        return "fraktur";
    }
    if (t_font === "mathscr" || t_font === "mathcal") {
        return "script";
    }
    if (t_font === "mathsf") {
        return "sans-serif";
    }
    if (t_font === "mathtt") {
        return "monospace";
    }
    let e_text = e.text;
    if (Aa.has(e_text)) {
        return null;
    }
    if ($[e_mode][e_text]) {
        const u = $[e_mode][e_text].replace;
        if (u) {
            e_text = u;
        }
    }
    const fontName = bt[t_font].fontName;
    if (Ct(e_text, fontName, e_mode)) {
        return bt[t_font].variant;
    }
    return null;
};
function rt(r) {
    if (!r) {
        return false;
    }
    if (r.type === "mi" && r.children.length === 1) {
        const e = r.children[0];
        return e instanceof _ && e.text === ".";
    } else if (r.type === "mo" && r.children.length === 1 && r.getAttribute("separator") === "true" && r.getAttribute("lspace") === "0em" && r.getAttribute("rspace") === "0em") {
        const t = r.children[0];
        return t instanceof _ && t.text === ",";
    } else {
        return false;
    }
}
const p0 = (e, t, a)=>{
    if (e.length === 1) {
        const n = Y(e[0], t);
        if (a && n instanceof z && n.type === "mo") {
            n.setAttribute("lspace", "0em");
            n.setAttribute("rspace", "0em");
        }
        return [
            n
        ];
    }
    const l = [];
    let u;
    for(let h = 0; h < e.length; h++){
        const c = Y(e[h], t);
        if (c instanceof z && u instanceof z) {
            if (c.type === "mtext" && u.type === "mtext" && c.getAttribute("mathvariant") === u.getAttribute("mathvariant")) {
                u.children.push(...c.children);
                continue;
            } else if (c.type === "mn" && u.type === "mn") {
                u.children.push(...c.children);
                continue;
            } else if (rt(c) && u.type === "mn") {
                u.children.push(...c.children);
                continue;
            } else if (c.type === "mn" && rt(u)) {
                c.children = [
                    ...u.children,
                    ...c.children
                ];
                l.pop();
            } else if ((c.type === "msup" || c.type === "msub") && c.children.length >= 1 && (u.type === "mn" || rt(u))) {
                const v = c.children[0];
                if (v instanceof z && v.type === "mn") {
                    v.children = [
                        ...u.children,
                        ...v.children
                    ];
                    l.pop();
                }
            } else if (u.type === "mi" && u.children.length === 1) {
                const g = u.children[0];
                if (g instanceof _ && g.text === "̸" && (c.type === "mo" || c.type === "mi" || c.type === "mn")) {
                    const b = c.children[0];
                    if (b instanceof _ && b.text.length > 0) {
                        b.text = `${b.text.slice(0, 1)}̸${b.text.slice(1)}`;
                        l.pop();
                    }
                }
            }
        }
        l.push(c);
        u = c;
    }
    return l;
};
const U0 = (e, t, a)=>Rt(p0(e, t, a));
var Y = (e, t)=>{
    if (!e) {
        return new z("mrow");
    }
    if (Ie[e.type]) {
        const a = Ie[e.type](e, t);
        return a;
    } else {
        throw new ParseError(`Got group of unknown type: '${e.type}'`);
    }
};
function ir(r, e, t, displayMode, n) {
    const l = p0(r, t);
    let u;
    if (l.length === 1 && l[0] instanceof z && Ma.has(l[0].type)) {
        u = l[0];
    } else {
        u = new z("mrow", l);
    }
    const h = new z("annotation", [
        new _(e)
    ]);
    h.setAttribute("encoding", "application/x-tex");
    const c = new z("semantics", [
        u,
        h
    ]);
    const v = new z("math", [
        c
    ]);
    v.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML");
    if (displayMode) {
        v.setAttribute("display", "block");
    }
    const g = n ? "katex" : "katex-mathml";
    return k([
        g
    ], [
        v
    ]);
}
const Ta = [
    [
        1,
        1,
        1
    ],
    [
        2,
        1,
        1
    ],
    [
        3,
        1,
        1
    ],
    [
        4,
        2,
        1
    ],
    [
        5,
        2,
        1
    ],
    [
        6,
        3,
        1
    ],
    [
        7,
        4,
        2
    ],
    [
        8,
        6,
        3
    ],
    [
        9,
        7,
        6
    ],
    [
        10,
        8,
        7
    ],
    [
        11,
        10,
        9
    ]
];
const lr = [
    0.5,
    0.6,
    0.7,
    0.8,
    0.9,
    1,
    1.2,
    1.44,
    1.728,
    2.074,
    2.488
];
const sr = (e, t)=>{
    if (t.size < 2) {
        return e;
    }
    return Ta[e - 1][t.size - 1];
};
class T0 {
    constructor(e){
        this.style = e.style;
        this.color = e.color;
        this.size = e.size || T0.BASESIZE;
        this.textSize = e.textSize || this.size;
        this.phantom = !!e.phantom;
        this.font = e.font || "";
        this.fontFamily = e.fontFamily || "";
        this.fontWeight = e.fontWeight || "";
        this.fontShape = e.fontShape || "";
        this.sizeMultiplier = lr[this.size - 1];
        this.maxSize = e.maxSize;
        this.minRuleThickness = e.minRuleThickness;
        this._fontMetrics = undefined;
    }
    extend(e) {
        const t = {
            style: this.style,
            size: this.size,
            textSize: this.textSize,
            color: this.color,
            phantom: this.phantom,
            font: this.font,
            fontFamily: this.fontFamily,
            fontWeight: this.fontWeight,
            fontShape: this.fontShape,
            maxSize: this.maxSize,
            minRuleThickness: this.minRuleThickness
        };
        Object.assign(t, e);
        return new T0(t);
    }
    havingStyle(e) {
        if (this.style === e) {
            return this;
        }
        return this.extend({
            style: e,
            size: sr(this.textSize, e)
        });
    }
    havingCrampedStyle() {
        return this.havingStyle(this.style.cramp());
    }
    havingSize(e) {
        if (this.size === e && this.textSize === e) {
            return this;
        }
        return this.extend({
            style: this.style.text(),
            size: e,
            textSize: e,
            sizeMultiplier: lr[e - 1]
        });
    }
    havingBaseStyle(e) {
        e = e || this.style.text();
        const t = sr(T0.BASESIZE, e);
        if (this.size === t && this.textSize === T0.BASESIZE && this.style === e) {
            return this;
        }
        return this.extend({
            style: e,
            size: t
        });
    }
    havingBaseSizing() {
        let e;
        switch(this.style.id){
            case 4:
            case 5:
                e = 3;
                break;
            case 6:
            case 7:
                e = 1;
                break;
            default:
                e = 6;
        }
        return this.extend({
            style: this.style.text(),
            size: e
        });
    }
    withColor(color) {
        return this.extend({
            color
        });
    }
    withPhantom() {
        return this.extend({
            phantom: true
        });
    }
    withFont(e) {
        return this.extend({
            font: e
        });
    }
    withTextFontFamily(fontFamily) {
        return this.extend({
            fontFamily,
            font: ""
        });
    }
    withTextFontWeight(fontWeight) {
        return this.extend({
            fontWeight,
            font: ""
        });
    }
    withTextFontShape(fontShape) {
        return this.extend({
            fontShape,
            font: ""
        });
    }
    sizingClasses(e) {
        if (e.size !== this.size) {
            return [
                "sizing",
                `reset-size${e.size}`,
                `size${this.size}`
            ];
        }
        return [];
    }
    baseSizingClasses() {
        if (this.size !== T0.BASESIZE) {
            return [
                "sizing",
                `reset-size${this.size}`,
                `size${T0.BASESIZE}`
            ];
        }
        return [];
    }
    fontMetrics() {
        if (!this._fontMetrics) {
            this._fontMetrics = ma(this.size);
        }
        return this._fontMetrics;
    }
    getColor() {
        if (this.phantom) {
            return "transparent";
        }
        return this.color;
    }
}
T0.BASESIZE = 6;
const Xr = (e)=>new T0({
        style: e.displayMode ? N.DISPLAY : N.TEXT,
        maxSize: e.maxSize,
        minRuleThickness: e.minRuleThickness
    });
const Yr = (e, t)=>{
    if (t.displayMode) {
        const a = [
            "katex-display"
        ];
        if (t.leqno) {
            a.push("leqno");
        }
        if (t.fleqn) {
            a.push("fleqn");
        }
        e = k(a, [
            e
        ]);
    }
    return e;
};
const Ba = (e, t, a)=>{
    const n = Xr(a);
    let l;
    if (a.output === "mathml") {
        return ir(e, t, n, a.displayMode, true);
    }
    if (a.output === "html") {
        const u = kt(e, n);
        l = k([
            "katex"
        ], [
            u
        ]);
    } else {
        const h = ir(e, t, n, a.displayMode, false);
        const c = kt(e, n);
        l = k([
            "katex"
        ], [
            h,
            c
        ]);
    }
    return Yr(l, a);
};
const Da = (e, t, a)=>{
    const n = Xr(a);
    const l = kt(e, n);
    const u = k([
        "katex"
    ], [
        l
    ]);
    return Yr(u, a);
};
const Ca = {
    widehat: "^",
    widecheck: "ˇ",
    widetilde: "~",
    utilde: "~",
    overleftarrow: "←",
    underleftarrow: "←",
    xleftarrow: "←",
    overrightarrow: "→",
    underrightarrow: "→",
    xrightarrow: "→",
    underbrace: "⏟",
    overbrace: "⏞",
    underbracket: "⎵",
    overbracket: "⎴",
    overgroup: "⏠",
    undergroup: "⏡",
    overleftrightarrow: "↔",
    underleftrightarrow: "↔",
    xleftrightarrow: "↔",
    Overrightarrow: "⇒",
    xRightarrow: "⇒",
    overleftharpoon: "↼",
    xleftharpoonup: "↼",
    overrightharpoon: "⇀",
    xrightharpoonup: "⇀",
    xLeftarrow: "⇐",
    xLeftrightarrow: "⇔",
    xhookleftarrow: "↩",
    xhookrightarrow: "↪",
    xmapsto: "↦",
    xrightharpoondown: "⇁",
    xleftharpoondown: "↽",
    xrightleftharpoons: "⇌",
    xleftrightharpoons: "⇋",
    xtwoheadleftarrow: "↞",
    xtwoheadrightarrow: "↠",
    xlongequal: "=",
    xtofrom: "⇄",
    xrightleftarrows: "⇄",
    xrightequilibrium: "⇌",
    xleftequilibrium: "⇋",
    "\\cdrightarrow": "→",
    "\\cdleftarrow": "←",
    "\\cdlongequal": "="
};
const Le = (label)=>{
    const t = new z("mo", [
        new _(Ca[label.replace(/^\\/, "")])
    ]);
    t.setAttribute("stretchy", "true");
    return t;
};
const qa = {
    overrightarrow: [
        [
            "rightarrow"
        ],
        0.888,
        522,
        "xMaxYMin"
    ],
    overleftarrow: [
        [
            "leftarrow"
        ],
        0.888,
        522,
        "xMinYMin"
    ],
    underrightarrow: [
        [
            "rightarrow"
        ],
        0.888,
        522,
        "xMaxYMin"
    ],
    underleftarrow: [
        [
            "leftarrow"
        ],
        0.888,
        522,
        "xMinYMin"
    ],
    xrightarrow: [
        [
            "rightarrow"
        ],
        1.469,
        522,
        "xMaxYMin"
    ],
    "\\cdrightarrow": [
        [
            "rightarrow"
        ],
        3,
        522,
        "xMaxYMin"
    ],
    xleftarrow: [
        [
            "leftarrow"
        ],
        1.469,
        522,
        "xMinYMin"
    ],
    "\\cdleftarrow": [
        [
            "leftarrow"
        ],
        3,
        522,
        "xMinYMin"
    ],
    Overrightarrow: [
        [
            "doublerightarrow"
        ],
        0.888,
        560,
        "xMaxYMin"
    ],
    xRightarrow: [
        [
            "doublerightarrow"
        ],
        1.526,
        560,
        "xMaxYMin"
    ],
    xLeftarrow: [
        [
            "doubleleftarrow"
        ],
        1.526,
        560,
        "xMinYMin"
    ],
    overleftharpoon: [
        [
            "leftharpoon"
        ],
        0.888,
        522,
        "xMinYMin"
    ],
    xleftharpoonup: [
        [
            "leftharpoon"
        ],
        0.888,
        522,
        "xMinYMin"
    ],
    xleftharpoondown: [
        [
            "leftharpoondown"
        ],
        0.888,
        522,
        "xMinYMin"
    ],
    overrightharpoon: [
        [
            "rightharpoon"
        ],
        0.888,
        522,
        "xMaxYMin"
    ],
    xrightharpoonup: [
        [
            "rightharpoon"
        ],
        0.888,
        522,
        "xMaxYMin"
    ],
    xrightharpoondown: [
        [
            "rightharpoondown"
        ],
        0.888,
        522,
        "xMaxYMin"
    ],
    xlongequal: [
        [
            "longequal"
        ],
        0.888,
        334,
        "xMinYMin"
    ],
    "\\cdlongequal": [
        [
            "longequal"
        ],
        3,
        334,
        "xMinYMin"
    ],
    xtwoheadleftarrow: [
        [
            "twoheadleftarrow"
        ],
        0.888,
        334,
        "xMinYMin"
    ],
    xtwoheadrightarrow: [
        [
            "twoheadrightarrow"
        ],
        0.888,
        334,
        "xMaxYMin"
    ],
    overleftrightarrow: [
        [
            "leftarrow",
            "rightarrow"
        ],
        0.888,
        522
    ],
    overbrace: [
        [
            "leftbrace",
            "midbrace",
            "rightbrace"
        ],
        1.6,
        548
    ],
    underbrace: [
        [
            "leftbraceunder",
            "midbraceunder",
            "rightbraceunder"
        ],
        1.6,
        548
    ],
    underleftrightarrow: [
        [
            "leftarrow",
            "rightarrow"
        ],
        0.888,
        522
    ],
    xleftrightarrow: [
        [
            "leftarrow",
            "rightarrow"
        ],
        1.75,
        522
    ],
    xLeftrightarrow: [
        [
            "doubleleftarrow",
            "doublerightarrow"
        ],
        1.75,
        560
    ],
    xrightleftharpoons: [
        [
            "leftharpoondownplus",
            "rightharpoonplus"
        ],
        1.75,
        716
    ],
    xleftrightharpoons: [
        [
            "leftharpoonplus",
            "rightharpoondownplus"
        ],
        1.75,
        716
    ],
    xhookleftarrow: [
        [
            "leftarrow",
            "righthook"
        ],
        1.08,
        522
    ],
    xhookrightarrow: [
        [
            "lefthook",
            "rightarrow"
        ],
        1.08,
        522
    ],
    overlinesegment: [
        [
            "leftlinesegment",
            "rightlinesegment"
        ],
        0.888,
        522
    ],
    underlinesegment: [
        [
            "leftlinesegment",
            "rightlinesegment"
        ],
        0.888,
        522
    ],
    overbracket: [
        [
            "leftbracketover",
            "rightbracketover"
        ],
        1.6,
        440
    ],
    underbracket: [
        [
            "leftbracketunder",
            "rightbracketunder"
        ],
        1.6,
        410
    ],
    overgroup: [
        [
            "leftgroup",
            "rightgroup"
        ],
        0.888,
        342
    ],
    undergroup: [
        [
            "leftgroupunder",
            "rightgroupunder"
        ],
        0.888,
        342
    ],
    xmapsto: [
        [
            "leftmapsto",
            "rightarrow"
        ],
        1.5,
        522
    ],
    xtofrom: [
        [
            "leftToFrom",
            "rightToFrom"
        ],
        1.75,
        528
    ],
    xrightleftarrows: [
        [
            "baraboveleftarrow",
            "rightarrowabovebar"
        ],
        1.75,
        901
    ],
    xrightequilibrium: [
        [
            "baraboveshortleftharpoon",
            "rightharpoonaboveshortbar"
        ],
        1.75,
        716
    ],
    xleftequilibrium: [
        [
            "shortbaraboveleftharpoon",
            "shortrightharpoonabovebar"
        ],
        1.75,
        716
    ]
};
const Ea = new Set([
    "widehat",
    "widecheck",
    "widetilde",
    "utilde"
]);
const Pe = (e, t)=>{
    function a() {
        let h = 400000;
        const c = e.label.slice(1);
        if (Ea.has(c)) {
            const v = e;
            const g = v.base.type === "ordgroup" ? v.base.body.length : 1;
            let b;
            let y;
            let x;
            if (g > 5) {
                if (c === "widehat" || c === "widecheck") {
                    b = 420;
                    h = 2364;
                    x = 0.42;
                    y = `${c}4`;
                } else {
                    b = 312;
                    h = 2340;
                    x = 0.34;
                    y = "tilde4";
                }
            } else {
                const M = [
                    1,
                    1,
                    2,
                    2,
                    3,
                    3
                ][g];
                if (c === "widehat" || c === "widecheck") {
                    h = [
                        0,
                        1062,
                        2364,
                        2364,
                        2364
                    ][M];
                    b = [
                        0,
                        239,
                        300,
                        360,
                        420
                    ][M];
                    x = [
                        0,
                        0.24,
                        0.3,
                        0.3,
                        0.36,
                        0.42
                    ][M];
                    y = c + M;
                } else {
                    h = [
                        0,
                        600,
                        1033,
                        2339,
                        2340
                    ][M];
                    b = [
                        0,
                        260,
                        286,
                        306,
                        312
                    ][M];
                    x = [
                        0,
                        0.26,
                        0.286,
                        0.3,
                        0.306,
                        0.34
                    ][M];
                    y = `tilde${M}`;
                }
            }
            const T = new P0(y);
            const C = new D0([
                T
            ], {
                width: "100%",
                height: A(x),
                viewBox: `0 0 ${h} ${b}`,
                preserveAspectRatio: "none"
            });
            return {
                span: G0([], [
                    C
                ], t),
                minWidth: 0,
                height: x
            };
        } else {
            const q = [];
            const I = qa[c];
            const [O, minWidth_1, V] = I;
            const L = V / 1000;
            const P = O.length;
            let W;
            let X;
            if (P === 1) {
                const h0 = I[3];
                W = [
                    "hide-tail"
                ];
                X = [
                    h0
                ];
            } else if (P === 2) {
                W = [
                    "halfarrow-left",
                    "halfarrow-right"
                ];
                X = [
                    "xMinYMin",
                    "xMaxYMin"
                ];
            } else if (P === 3) {
                W = [
                    "brace-left",
                    "brace-center",
                    "brace-right"
                ];
                X = [
                    "xMinYMin",
                    "xMidYMin",
                    "xMaxYMin"
                ];
            } else {
                throw new Error(`${`Correct katexImagesData or update code here to support
                    ` + P} children.`);
            }
            for(let i0 = 0; i0 < P; i0++){
                const t0 = new P0(O[i0]);
                const X0 = new D0([
                    t0
                ], {
                    width: "400em",
                    height: A(L),
                    viewBox: `0 0 ${h} ${V}`,
                    preserveAspectRatio: `${X[i0]} slice`
                });
                const m0 = G0([
                    W[i0]
                ], [
                    X0
                ], t);
                if (P === 1) {
                    return {
                        span: m0,
                        minWidth: minWidth_1,
                        height: L
                    };
                }
                m0.style.height = A(L);
                q.push(m0);
            }
            return {
                span: k([
                    "stretchy"
                ], q, t),
                minWidth: minWidth_1,
                height: L
            };
        }
    }
    const { span, minWidth, height } = a();
    span.height = height;
    span.style.height = A(height);
    if (minWidth > 0) {
        span.style.minWidth = A(minWidth);
    }
    return span;
};
const Ra = (e, t, a, n, l)=>{
    let u;
    const h = e.height + e.depth + a + n;
    if (/fbox|color|angl/.test(t)) {
        u = k([
            "stretchy",
            t
        ], [], l);
        if (t === "fbox") {
            const c = l.color && l.getColor();
            if (c) {
                u.style.borderColor = c;
            }
        }
    } else {
        const v = [];
        if (/^[bx]cancel$/.test(t)) {
            v.push(new pt({
                x1: "0",
                y1: "0",
                x2: "100%",
                y2: "100%",
                "stroke-width": "0.046em"
            }));
        }
        if (/^x?cancel$/.test(t)) {
            v.push(new pt({
                x1: "0",
                y1: "100%",
                x2: "100%",
                y2: "0",
                "stroke-width": "0.046em"
            }));
        }
        const g = new D0(v, {
            width: "100%",
            height: A(h)
        });
        u = G0([], [
            g
        ], l);
    }
    u.height = h;
    u.style.height = A(h);
    return u;
};
function H(r, e) {
    if (!r || r.type !== e) {
        throw new Error(`Expected node of type ${e}, but got ${r ? `node of type ${r.type}` : String(r)}`);
    }
    return r;
}
function Ge(r) {
    const e = Ue(r);
    if (!e) {
        throw new Error(`Expected node of symbol group type, but got ${r ? `node of type ${r.type}` : String(r)}`);
    }
    return e;
}
function Ue(r) {
    if (r && (r.type === "atom" || da.hasOwnProperty(r.type))) {
        return r;
    }
    return null;
}
const Wr = (r)=>{
    if (r instanceof f0) {
        return r;
    }
    if (oa(r) && r.children.length === 1) {
        return Wr(r.children[0]);
    }
};
const Nt = (r, e)=>{
    var t;
    var a;
    var n;
    if (r && r.type === "supsub") {
        a = H(r.base, "accent");
        t = a.base;
        r.base = t;
        n = ua(U(r, e));
        r.base = a;
    } else {
        a = H(r, "accent");
        t = a.base;
    }
    var l = U(t, e.havingCrampedStyle());
    var u = a.isShifty && C0(t);
    var h = 0;
    if (u) {
        h = Wr(l)?.skew ?? 0;
    }
    var g = a.label === "\\c";
    var b = g ? l.height + l.depth : Math.min(l.height, e.fontMetrics().xHeight);
    var y;
    if (a.isStretchy) {
        y = Pe(a, e);
        y = G({
            positionType: "firstBaseline",
            children: [
                {
                    type: "elem",
                    elem: l
                },
                {
                    type: "elem",
                    elem: y,
                    wrapperClasses: [
                        "svg-align"
                    ],
                    wrapperStyle: h > 0 ? {
                        width: `calc(100% - ${A(2 * h)})`,
                        marginLeft: A(2 * h)
                    } : undefined
                }
            ]
        });
    } else {
        var x;
        var M;
        if (a.label === "\\vec") {
            x = Lr("vec", e);
            M = Fr.vec[1];
        } else {
            x = Fe({
                mode: a.mode,
                text: a.label
            }, e, "textord");
            x = sa(x);
            x.italic = 0;
            M = x.width;
            if (g) {
                b += x.depth;
            }
        }
        y = k([
            "accent-body"
        ], [
            x
        ]);
        var T = a.label === "\\textcircled";
        if (T) {
            y.classes.push("accent-full");
            b = l.height;
        }
        var C = h;
        if (!T) {
            C -= M / 2;
        }
        y.style.left = A(C);
        if (a.label === "\\textcircled") {
            y.style.top = ".2em";
        }
        y = G({
            positionType: "firstBaseline",
            children: [
                {
                    type: "elem",
                    elem: l
                },
                {
                    type: "kern",
                    size: -b
                },
                {
                    type: "elem",
                    elem: y
                }
            ]
        });
    }
    var q = k([
        "mord",
        "accent"
    ], [
        y
    ], e);
    if (n) {
        n.children[0] = q;
        n.height = Math.max(q.height, n.height);
        n.classes[0] = "mord";
        return n;
    }
    return q;
};
const $r = (r, e)=>{
    var t = r.isStretchy ? Le(r.label) : new z("mo", [
        b0(r.label, r.mode)
    ]);
    var a = new z("mover", [
        Y(r.base, e),
        t
    ]);
    a.setAttribute("accent", "true");
    return a;
};
const Ia = new RegExp([
    "\\acute",
    "\\grave",
    "\\ddot",
    "\\tilde",
    "\\bar",
    "\\breve",
    "\\check",
    "\\hat",
    "\\vec",
    "\\dot",
    "\\mathring"
].map((r)=>`\\${r}`).join("|"));
__defineFunction({
    type: "accent",
    names: [
        "\\acute",
        "\\grave",
        "\\ddot",
        "\\tilde",
        "\\bar",
        "\\breve",
        "\\check",
        "\\hat",
        "\\vec",
        "\\dot",
        "\\mathring",
        "\\widecheck",
        "\\widehat",
        "\\widetilde",
        "\\overrightarrow",
        "\\overleftarrow",
        "\\Overrightarrow",
        "\\overleftrightarrow",
        "\\overgroup",
        "\\overlinesegment",
        "\\overleftharpoon",
        "\\overrightharpoon"
    ],
    props: {
        numArgs: 1
    },
    handler: (r, e)=>{
        var t = Ne(e[0]);
        var isStretchy = !Ia.test(r.funcName);
        var isShifty = !isStretchy || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
        return {
            type: "accent",
            mode: r.parser.mode,
            label: r.funcName,
            isStretchy,
            isShifty,
            base: t
        };
    },
    htmlBuilder: Nt,
    mathmlBuilder: $r
});
__defineFunction({
    type: "accent",
    names: [
        "\\'",
        "\\`",
        "\\^",
        "\\~",
        "\\=",
        "\\u",
        "\\.",
        '\\"',
        "\\c",
        "\\r",
        "\\H",
        "\\v",
        "\\textcircled"
    ],
    props: {
        numArgs: 1,
        allowedInText: true,
        allowedInMath: true,
        argTypes: [
            "primitive"
        ]
    },
    handler: (r, e)=>{
        var t = e[0];
        var mode = r.parser.mode;
        if (mode === "math") {
            r.parser.settings.reportNonstrict("mathVsTextAccents", `LaTeX's accent ${r.funcName} works only in text mode`);
            mode = "text";
        }
        return {
            type: "accent",
            mode,
            label: r.funcName,
            isStretchy: false,
            isShifty: true,
            base: t
        };
    },
    htmlBuilder: Nt,
    mathmlBuilder: $r
});
__defineFunction({
    type: "accentUnder",
    names: [
        "\\underleftarrow",
        "\\underrightarrow",
        "\\underleftrightarrow",
        "\\undergroup",
        "\\underlinesegment",
        "\\utilde"
    ],
    props: {
        numArgs: 1
    },
    handler: ({ parser, funcName }, e)=>{
        var n = e[0];
        return {
            type: "accentUnder",
            mode: parser.mode,
            label: funcName,
            base: n
        };
    },
    htmlBuilder: (r, e)=>{
        var t = U(r.base, e);
        var a = Pe(r, e);
        var n = r.label === "\\utilde" ? 0.12 : 0;
        var l = G({
            positionType: "top",
            positionData: t.height,
            children: [
                {
                    type: "elem",
                    elem: a,
                    wrapperClasses: [
                        "svg-align"
                    ]
                },
                {
                    type: "kern",
                    size: n
                },
                {
                    type: "elem",
                    elem: t
                }
            ]
        });
        return k([
            "mord",
            "accentunder"
        ], [
            l
        ], e);
    },
    mathmlBuilder: (r, e)=>{
        var t = Le(r.label);
        var a = new z("munder", [
            Y(r.base, e),
            t
        ]);
        a.setAttribute("accentunder", "true");
        return a;
    }
});
const Me = (r)=>{
    var e = new z("mpadded", r ? [
        r
    ] : []);
    e.setAttribute("width", "+0.6em");
    e.setAttribute("lspace", "0.3em");
    return e;
};
__defineFunction({
    type: "xArrow",
    names: [
        "\\xleftarrow",
        "\\xrightarrow",
        "\\xLeftarrow",
        "\\xRightarrow",
        "\\xleftrightarrow",
        "\\xLeftrightarrow",
        "\\xhookleftarrow",
        "\\xhookrightarrow",
        "\\xmapsto",
        "\\xrightharpoondown",
        "\\xrightharpoonup",
        "\\xleftharpoondown",
        "\\xleftharpoonup",
        "\\xrightleftharpoons",
        "\\xleftrightharpoons",
        "\\xlongequal",
        "\\xtwoheadrightarrow",
        "\\xtwoheadleftarrow",
        "\\xtofrom",
        "\\xrightleftarrows",
        "\\xrightequilibrium",
        "\\xleftequilibrium",
        "\\\\cdrightarrow",
        "\\\\cdleftarrow",
        "\\\\cdlongequal"
    ],
    props: {
        numArgs: 1,
        numOptionalArgs: 1
    },
    handler ({ parser, funcName }, e, t) {
        return {
            type: "xArrow",
            mode: parser.mode,
            label: funcName,
            body: e[0],
            below: t[0]
        };
    },
    htmlBuilder (r, e) {
        const e_style = e.style;
        let a = e.havingStyle(e_style.sup());
        const n = re(U(r.body, a, e), e);
        const l = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
        n.classes.push(`${l}-arrow-pad`);
        let u;
        if (r.below) {
            a = e.havingStyle(e_style.sub());
            u = re(U(r.below, a, e), e);
            u.classes.push(`${l}-arrow-pad`);
        }
        const h = Pe(r, e);
        const c = -e.fontMetrics().axisHeight + 0.5 * h.height;
        let v = -e.fontMetrics().axisHeight - 0.5 * h.height - 0.111;
        if (n.depth > 0.25 || r.label === "\\xleftequilibrium") {
            v -= n.depth;
        }
        let g;
        if (u) {
            const b = -e.fontMetrics().axisHeight + u.height + 0.5 * h.height + 0.111;
            g = G({
                positionType: "individualShift",
                children: [
                    {
                        type: "elem",
                        elem: n,
                        shift: v
                    },
                    {
                        type: "elem",
                        elem: h,
                        shift: c
                    },
                    {
                        type: "elem",
                        elem: u,
                        shift: b
                    }
                ]
            });
        } else {
            g = G({
                positionType: "individualShift",
                children: [
                    {
                        type: "elem",
                        elem: n,
                        shift: v
                    },
                    {
                        type: "elem",
                        elem: h,
                        shift: c
                    }
                ]
            });
        }
        g.children[0].children[0].children[1].classes.push("svg-align");
        return k([
            "mrel",
            "x-arrow"
        ], [
            g
        ], e);
    },
    mathmlBuilder (r, e) {
        const t = Le(r.label);
        t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
        let a;
        if (r.body) {
            const n = Me(Y(r.body, e));
            if (r.below) {
                const l = Me(Y(r.below, e));
                a = new z("munderover", [
                    t,
                    l,
                    n
                ]);
            } else {
                a = new z("mover", [
                    t,
                    n
                ]);
            }
        } else if (r.below) {
            const u = Me(Y(r.below, e));
            a = new z("munder", [
                t,
                u
            ]);
        } else {
            a = Me();
            a = new z("mover", [
                t,
                a
            ]);
        }
        return a;
    }
});
function jr(r, e) {
    const t = a0(r.body, e, true);
    return k([
        r.mclass
    ], t, e);
}
function Zr(r, e) {
    let t;
    const a = p0(r.body, e);
    if (r.mclass === "minner") {
        t = new z("mpadded", a);
    } else if (r.mclass === "mord") {
        if (r.isCharacterBox) {
            t = a[0];
            t.type = "mi";
        } else {
            t = new z("mi", a);
        }
    } else {
        if (r.isCharacterBox) {
            t = a[0];
            t.type = "mo";
        } else {
            t = new z("mo", a);
        }
        if (r.mclass === "mbin") {
            t.attributes.lspace = "0.22em";
            t.attributes.rspace = "0.22em";
        } else if (r.mclass === "mpunct") {
            t.attributes.lspace = "0em";
            t.attributes.rspace = "0.17em";
        } else if (r.mclass === "mopen" || r.mclass === "mclose") {
            t.attributes.lspace = "0em";
            t.attributes.rspace = "0em";
        } else if (r.mclass === "minner") {
            t.attributes.lspace = "0.0556em";
            t.attributes.width = "+0.1111em";
        }
    }
    return t;
}
__defineFunction({
    type: "mclass",
    names: [
        "\\mathord",
        "\\mathbin",
        "\\mathrel",
        "\\mathopen",
        "\\mathclose",
        "\\mathpunct",
        "\\mathinner"
    ],
    props: {
        numArgs: 1,
        primitive: true
    },
    handler ({ parser, funcName }, e) {
        const n = e[0];
        return {
            type: "mclass",
            mode: parser.mode,
            mclass: `m${funcName.slice(5)}`,
            body: Q(n),
            isCharacterBox: C0(n)
        };
    },
    htmlBuilder: jr,
    mathmlBuilder: Zr
});
const Ve = (r)=>{
    var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
    if (e.type === "atom" && (e.family === "bin" || e.family === "rel")) {
        return `m${e.family}`;
    }
    return "mord";
};
__defineFunction({
    type: "mclass",
    names: [
        "\\@binrel"
    ],
    props: {
        numArgs: 2
    },
    handler ({ parser }, e) {
        return {
            type: "mclass",
            mode: parser.mode,
            mclass: Ve(e[0]),
            body: Q(e[1]),
            isCharacterBox: C0(e[1])
        };
    }
});
__defineFunction({
    type: "mclass",
    names: [
        "\\stackrel",
        "\\overset",
        "\\underset"
    ],
    props: {
        numArgs: 2
    },
    handler ({ parser, funcName }, e) {
        const n = e[1];
        const l = e[0];
        let mclass;
        if (funcName !== "\\stackrel") {
            mclass = Ve(n);
        } else {
            mclass = "mrel";
        }
        const h = {
            type: "op",
            mode: n.mode,
            limits: true,
            alwaysHandleSupSub: true,
            parentIsSupSub: false,
            symbol: false,
            suppressBaseShift: funcName !== "\\stackrel",
            body: Q(n)
        };
        const c = {
            type: "supsub",
            mode: l.mode,
            base: h,
            sup: funcName === "\\underset" ? null : l,
            sub: funcName === "\\underset" ? l : null
        };
        return {
            type: "mclass",
            mode: parser.mode,
            mclass,
            body: [
                c
            ],
            isCharacterBox: C0(c)
        };
    },
    htmlBuilder: jr,
    mathmlBuilder: Zr
});
__defineFunction({
    type: "pmb",
    names: [
        "\\pmb"
    ],
    props: {
        numArgs: 1,
        allowedInText: true
    },
    handler ({ parser }, e) {
        return {
            type: "pmb",
            mode: parser.mode,
            mclass: Ve(e[0]),
            body: Q(e[0])
        };
    },
    htmlBuilder (r, e) {
        const t = a0(r.body, e, true);
        const a = k([
            r.mclass
        ], t, e);
        a.style.textShadow = "0.02em 0.01em 0.04px";
        return a;
    },
    mathmlBuilder (r, e) {
        const t = p0(r.body, e);
        const a = new z("mstyle", t);
        a.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px");
        return a;
    }
});
const Na = {
    ">": "\\\\cdrightarrow",
    "<": "\\\\cdleftarrow",
    "=": "\\\\cdlongequal",
    A: "\\uparrow",
    V: "\\downarrow",
    "|": "\\Vert",
    ".": "no arrow"
};
const ur = ()=>({
        type: "styling",
        body: [],
        mode: "math",
        style: "display"
    });
const or = (r)=>r.type === "textord" && r.text === "@";
const Oa = (r, e)=>(r.type === "mathord" || r.type === "atom") && r.text === e;
function Ha(r, e, parser) {
    const a = Na[r];
    switch(a){
        case "\\\\cdrightarrow":
        case "\\\\cdleftarrow":
            return parser.callFunction(a, [
                e[0]
            ], [
                e[1]
            ]);
        case "\\uparrow":
        case "\\downarrow":
            {
                const n = parser.callFunction("\\\\cdleft", [
                    e[0]
                ], []);
                const l = {
                    type: "atom",
                    text: a,
                    mode: "math",
                    family: "rel"
                };
                const u = parser.callFunction("\\Big", [
                    l
                ], []);
                const h = parser.callFunction("\\\\cdright", [
                    e[1]
                ], []);
                const c = {
                    type: "ordgroup",
                    mode: "math",
                    body: [
                        n,
                        u,
                        h
                    ]
                };
                return parser.callFunction("\\\\cdparent", [
                    c
                ], []);
            }
        case "\\\\cdlongequal":
            return parser.callFunction("\\\\cdlongequal", [], []);
        case "\\Vert":
            {
                const v = {
                    type: "textord",
                    text: "\\Vert",
                    mode: "math"
                };
                return parser.callFunction("\\Big", [
                    v
                ], []);
            }
        default:
            return {
                type: "textord",
                text: " ",
                mode: "math"
            };
    }
}
function Fa(parser) {
    const e = [];
    parser.gullet.beginGroup();
    parser.gullet.macros.set("\\cr", "\\\\\\relax");
    parser.gullet.beginGroup();
    while(true){
        e.push(parser.parseExpression(false, "\\\\"));
        parser.gullet.endGroup();
        parser.gullet.beginGroup();
        const t = parser.fetch().text;
        if (t === "&" || t === "\\\\") {
            parser.consume();
        } else if (t === "\\end") {
            if (e[e.length - 1].length === 0) {
                e.pop();
            }
            break;
        } else {
            throw new ParseError("Expected \\\\ or \\cr or \\end", parser.nextToken);
        }
    }
    let a = [];
    const n = [
        a
    ];
    for(let l = 0; l < e.length; l++){
        for(var u = e[l], h = ur(), c = 0; c < u.length; c++){
            if (!or(u[c])) {
                h.body.push(u[c]);
            } else {
                a.push(h);
                c += 1;
                const v = Ge(u[c]).text;
                const g = new Array(2);
                g[0] = {
                    type: "ordgroup",
                    mode: "math",
                    body: []
                };
                g[1] = {
                    type: "ordgroup",
                    mode: "math",
                    body: []
                };
                if (!"=|.".includes(v)) {
                    if ("<>AV".includes(v)) {
                        for(let b = 0; b < 2; b++){
                            let y = true;
                            for(let x = c + 1; x < u.length; x++){
                                if (Oa(u[x], v)) {
                                    y = false;
                                    c = x;
                                    break;
                                }
                                if (or(u[x])) {
                                    throw new ParseError(`Missing a ${v} character to complete a CD arrow.`, u[x]);
                                }
                                g[b].body.push(u[x]);
                            }
                            if (y) {
                                throw new ParseError(`Missing a ${v} character to complete a CD arrow.`, u[c]);
                            }
                        }
                    } else {
                        throw new ParseError('Expected one of "<>AV=|." after @', u[c]);
                    }
                }
                const M = Ha(v, g, parser);
                const T = {
                    type: "styling",
                    body: [
                        M
                    ],
                    mode: "math",
                    style: "display"
                };
                a.push(T);
                h = ur();
            }
        }
        if (l % 2 === 0) {
            a.push(h);
        } else {
            a.shift();
        }
        a = [];
        n.push(a);
    }
    parser.gullet.endGroup();
    parser.gullet.endGroup();
    const cols = new Array(n[0].length).fill({
        type: "align",
        align: "c",
        pregap: 0.25,
        postgap: 0.25
    });
    return {
        type: "array",
        mode: "math",
        body: n,
        arraystretch: 1,
        addJot: true,
        rowGaps: [
            null
        ],
        cols,
        colSeparationType: "CD",
        hLinesBeforeRow: new Array(n.length + 1).fill([])
    };
}
__defineFunction({
    type: "cdlabel",
    names: [
        "\\\\cdleft",
        "\\\\cdright"
    ],
    props: {
        numArgs: 1
    },
    handler ({ parser, funcName }, e) {
        return {
            type: "cdlabel",
            mode: parser.mode,
            side: funcName.slice(4),
            label: e[0]
        };
    },
    htmlBuilder (r, e) {
        const t = e.havingStyle(e.style.sup());
        const a = re(U(r.label, t, e), e);
        a.classes.push(`cd-label-${r.side}`);
        a.style.bottom = A(0.8 - a.depth);
        a.height = 0;
        a.depth = 0;
        return a;
    },
    mathmlBuilder (r, e) {
        let t = new z("mrow", [
            Y(r.label, e)
        ]);
        t = new z("mpadded", [
            t
        ]);
        t.setAttribute("width", "0");
        if (r.side === "left") {
            t.setAttribute("lspace", "-1width");
        }
        t.setAttribute("voffset", "0.7em");
        t = new z("mstyle", [
            t
        ]);
        t.setAttribute("displaystyle", "false");
        t.setAttribute("scriptlevel", "1");
        return t;
    }
});
__defineFunction({
    type: "cdlabelparent",
    names: [
        "\\\\cdparent"
    ],
    props: {
        numArgs: 1
    },
    handler ({ parser }, e) {
        return {
            type: "cdlabelparent",
            mode: parser.mode,
            fragment: e[0]
        };
    },
    htmlBuilder (r, e) {
        const t = re(U(r.fragment, e), e);
        t.classes.push("cd-vert-arrow");
        return t;
    },
    mathmlBuilder (r, e) {
        return new z("mrow", [
            Y(r.fragment, e)
        ]);
    }
});
__defineFunction({
    type: "textord",
    names: [
        "\\@char"
    ],
    props: {
        numArgs: 1,
        allowedInText: true
    },
    handler ({ parser }, e) {
        const a = H(e[0], "ordgroup");
        for(var n = a.body, l = "", u = 0; u < n.length; u++){
            const h = H(n[u], "textord");
            l += h.text;
        }
        let c = parseInt(l);
        let v;
        if (isNaN(c)) {
            throw new ParseError(`\\@char has non-numeric argument ${l}`);
        }
        if (c < 0 || c >= 1114111) {
            throw new ParseError(`\\@char with invalid code point ${l}`);
        }
        if (c <= 65535) {
            v = String.fromCharCode(c);
        } else {
            c -= 65536;
            v = String.fromCharCode((c >> 10) + 55296, (c & 1023) + 56320);
        }
        return {
            type: "textord",
            mode: parser.mode,
            text: v
        };
    }
});
const Kr = (r, e)=>{
    var t = a0(r.body, e.withColor(r.color), false);
    return E0(t);
};
const Jr = (r, e)=>{
    var t = p0(r.body, e.withColor(r.color));
    var a = new z("mstyle", t);
    a.setAttribute("mathcolor", r.color);
    return a;
};
__defineFunction({
    type: "color",
    names: [
        "\\textcolor"
    ],
    props: {
        numArgs: 2,
        allowedInText: true,
        argTypes: [
            "color",
            "original"
        ]
    },
    handler ({ parser }, e) {
        const color = H(e[0], "color-token").color;
        const n = e[1];
        return {
            type: "color",
            mode: parser.mode,
            color,
            body: Q(n)
        };
    },
    htmlBuilder: Kr,
    mathmlBuilder: Jr
});
__defineFunction({
    type: "color",
    names: [
        "\\color"
    ],
    props: {
        numArgs: 1,
        allowedInText: true,
        argTypes: [
            "color"
        ]
    },
    handler ({ parser, breakOnTokenText }, e) {
        const color = H(e[0], "color-token").color;
        parser.gullet.macros.set("\\current@color", color);
        const l = parser.parseExpression(true, breakOnTokenText);
        return {
            type: "color",
            mode: parser.mode,
            color,
            body: l
        };
    },
    htmlBuilder: Kr,
    mathmlBuilder: Jr
});
__defineFunction({
    type: "cr",
    names: [
        "\\\\"
    ],
    props: {
        numArgs: 0,
        numOptionalArgs: 0,
        allowedInText: true
    },
    handler ({ parser }, e, t) {
        const n = parser.gullet.future().text === "[" ? parser.parseSizeGroup(true) : null;
        const newLine = !parser.settings.displayMode || !parser.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
        return {
            type: "cr",
            mode: parser.mode,
            newLine,
            size: n && H(n, "size").value
        };
    },
    htmlBuilder (r, e) {
        const t = k([
            "mspace"
        ], [], e);
        if (r.newLine) {
            t.classes.push("newline");
            if (r.size) {
                t.style.marginTop = A(K(r.size, e));
            }
        }
        return t;
    },
    mathmlBuilder (r, e) {
        const t = new z("mspace");
        if (r.newLine) {
            t.setAttribute("linebreak", "newline");
            if (r.size) {
                t.setAttribute("height", A(K(r.size, e)));
            }
        }
        return t;
    }
});
const St = {
    "\\global": "\\global",
    "\\long": "\\\\globallong",
    "\\\\globallong": "\\\\globallong",
    "\\def": "\\gdef",
    "\\gdef": "\\gdef",
    "\\edef": "\\xdef",
    "\\xdef": "\\xdef",
    "\\let": "\\\\globallet",
    "\\futurelet": "\\\\globalfuture"
};
const Qr = (r)=>{
    var r_text = r.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(r_text)) {
        throw new ParseError("Expected a control sequence", r);
    }
    return r_text;
};
const La = (parser)=>{
    var e = parser.gullet.popToken();
    if (e.text === "=") {
        e = parser.gullet.popToken();
        if (e.text === " ") {
            e = parser.gullet.popToken();
        }
    }
    return e;
};
const _r = (parser, e, t, a)=>{
    var n = parser.gullet.macros.get(t.text);
    if (n == null) {
        t.noexpand = true;
        n = {
            tokens: [
                t
            ],
            numArgs: 0,
            unexpandable: !parser.gullet.isExpandable(t.text)
        };
    }
    parser.gullet.macros.set(e, n, a);
};
__defineFunction({
    type: "internal",
    names: [
        "\\global",
        "\\long",
        "\\\\globallong"
    ],
    props: {
        numArgs: 0,
        allowedInText: true
    },
    handler ({ parser, funcName }) {
        parser.consumeSpaces();
        const a = parser.fetch();
        if (St[a.text]) {
            if (funcName === "\\global" || funcName === "\\\\globallong") {
                a.text = St[a.text];
            }
            return H(parser.parseFunction(), "internal");
        }
        throw new ParseError("Invalid token after macro prefix", a);
    }
});
__defineFunction({
    type: "internal",
    names: [
        "\\def",
        "\\gdef",
        "\\edef",
        "\\xdef"
    ],
    props: {
        numArgs: 0,
        allowedInText: true,
        primitive: true
    },
    handler ({ parser, funcName }) {
        let a = parser.gullet.popToken();
        const a_text = a.text;
        if (/^(?:[\\{}$&#^_]|EOF)$/.test(a_text)) {
            throw new ParseError("Expected a control sequence", a);
        }
        let l = 0;
        let u;
        const delimiters = [
            []
        ];
        while(parser.gullet.future().text !== "{"){
            a = parser.gullet.popToken();
            if (a.text === "#") {
                if (parser.gullet.future().text === "{") {
                    u = parser.gullet.future();
                    delimiters[l].push("{");
                    break;
                }
                a = parser.gullet.popToken();
                if (!/^[1-9]$/.test(a.text)) {
                    throw new ParseError(`Invalid argument number "${a.text}"`);
                }
                if (parseInt(a.text) !== l + 1) {
                    throw new ParseError(`Argument number "${a.text}" out of order`);
                }
                l++;
                delimiters.push([]);
            } else {
                if (a.text === "EOF") {
                    throw new ParseError("Expected a macro definition");
                }
                delimiters[l].push(a.text);
            }
        }
        let { tokens } = parser.gullet.consumeArg();
        if (u) {
            tokens.unshift(u);
        }
        if (funcName === "\\edef" || funcName === "\\xdef") {
            tokens = parser.gullet.expandTokens(tokens);
            tokens.reverse();
        }
        parser.gullet.macros.set(a_text, {
            tokens,
            numArgs: l,
            delimiters
        }, funcName === St[funcName]);
        return {
            type: "internal",
            mode: parser.mode
        };
    }
});
__defineFunction({
    type: "internal",
    names: [
        "\\let",
        "\\\\globallet"
    ],
    props: {
        numArgs: 0,
        allowedInText: true,
        primitive: true
    },
    handler ({ parser, funcName }) {
        const a = Qr(parser.gullet.popToken());
        parser.gullet.consumeSpaces();
        const n = La(parser);
        _r(parser, a, n, funcName === "\\\\globallet");
        return {
            type: "internal",
            mode: parser.mode
        };
    }
});
__defineFunction({
    type: "internal",
    names: [
        "\\futurelet",
        "\\\\globalfuture"
    ],
    props: {
        numArgs: 0,
        allowedInText: true,
        primitive: true
    },
    handler ({ parser, funcName }) {
        const a = Qr(parser.gullet.popToken());
        const n = parser.gullet.popToken();
        const l = parser.gullet.popToken();
        _r(parser, a, l, funcName === "\\\\globalfuture");
        parser.gullet.pushToken(l);
        parser.gullet.pushToken(n);
        return {
            type: "internal",
            mode: parser.mode
        };
    }
});
const ue = (e, t, a)=>{
    const n = $.math[e] && $.math[e].replace;
    const l = Ct(n || e, t, a);
    if (!l) {
        throw new Error(`Unsupported symbol ${e} and font size ${t}.`);
    }
    return l;
};
const Ot = (e, t, a, n)=>{
    const l = a.havingBaseStyle(t);
    const u = k(n.concat(l.sizingClasses(a)), [
        e
    ], a);
    const h = l.sizeMultiplier / a.sizeMultiplier;
    u.height *= h;
    u.depth *= h;
    u.maxFontSize = l.sizeMultiplier;
    return u;
};
const e1 = (e, t, a)=>{
    const n = t.havingBaseStyle(a);
    const l = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
    e.classes.push("delimcenter");
    e.style.top = A(l);
    e.height -= l;
    e.depth += l;
};
const Pa = (e, style, a, n, l, u)=>{
    const h = s0(e, "Main-Regular", l, n);
    const c = Ot(h, style, n, u);
    e1(c, n, style);
    return c;
};
const Ga = (e, t, a, n)=>s0(e, `Size${t}-Regular`, a, n);
const t1 = (e, t, a, n, l, u)=>{
    const h = Ga(e, t, l, n);
    const c = Ot(k([
        "delimsizing",
        `size${t}`
    ], [
        h
    ], n), N.TEXT, n, u);
    if (a) {
        e1(c, n, N.TEXT);
    }
    return c;
};
const at = (e, t, a)=>{
    let n;
    if (t === "Size1-Regular") {
        n = "delim-size1";
    } else {
        n = "delim-size4";
    }
    const l = k([
        "delimsizinginner",
        n
    ], [
        k([], [
            s0(e, t, a)
        ])
    ]);
    return {
        type: "elem",
        elem: l
    };
};
const nt = (e, t, a)=>{
    const n = k0["Size4-Regular"][e.charCodeAt(0)] ? k0["Size4-Regular"][e.charCodeAt(0)][4] : k0["Size1-Regular"][e.charCodeAt(0)][4];
    const l = new P0("inner", ta(e, Math.round(1000 * t)));
    const u = new D0([
        l
    ], {
        width: A(n),
        height: A(t),
        style: `width:${A(n)}`,
        viewBox: `0 0 ${1000 * n} ${Math.round(1000 * t)}`,
        preserveAspectRatio: "xMinYMin"
    });
    const h = G0([], [
        u
    ], a);
    h.height = t;
    h.style.height = A(t);
    h.style.width = A(n);
    return {
        type: "elem",
        elem: h
    };
};
const zt = 0.008;
const Te = {
    type: "kern",
    size: -1 * zt
};
const Ua = new Set([
    "|",
    "\\lvert",
    "\\rvert",
    "\\vert"
]);
const Va = new Set([
    "\\|",
    "\\lVert",
    "\\rVert",
    "\\Vert"
]);
const r1 = (e, t, a, n, l, u)=>{
    let h;
    let c;
    let v;
    let g;
    let b = "";
    let y = 0;
    g = e;
    v = e;
    h = e;
    c = null;
    let x = "Size1-Regular";
    if (e === "\\uparrow") {
        g = "⏐";
        v = "⏐";
    } else if (e === "\\Uparrow") {
        g = "‖";
        v = "‖";
    } else if (e === "\\downarrow") {
        v = "⏐";
        h = "⏐";
    } else if (e === "\\Downarrow") {
        v = "‖";
        h = "‖";
    } else if (e === "\\updownarrow") {
        h = "\\uparrow";
        v = "⏐";
        g = "\\downarrow";
    } else if (e === "\\Updownarrow") {
        h = "\\Uparrow";
        v = "‖";
        g = "\\Downarrow";
    } else if (Ua.has(e)) {
        v = "∣";
        b = "vert";
        y = 333;
    } else if (Va.has(e)) {
        v = "∥";
        b = "doublevert";
        y = 556;
    } else if (e === "[" || e === "\\lbrack") {
        h = "⎡";
        v = "⎢";
        g = "⎣";
        x = "Size4-Regular";
        b = "lbrack";
        y = 667;
    } else if (e === "]" || e === "\\rbrack") {
        h = "⎤";
        v = "⎥";
        g = "⎦";
        x = "Size4-Regular";
        b = "rbrack";
        y = 667;
    } else if (e === "\\lfloor" || e === "⌊") {
        h = "⎢";
        v = "⎢";
        g = "⎣";
        x = "Size4-Regular";
        b = "lfloor";
        y = 667;
    } else if (e === "\\lceil" || e === "⌈") {
        h = "⎡";
        g = "⎢";
        v = "⎢";
        x = "Size4-Regular";
        b = "lceil";
        y = 667;
    } else if (e === "\\rfloor" || e === "⌋") {
        h = "⎥";
        v = "⎥";
        g = "⎦";
        x = "Size4-Regular";
        b = "rfloor";
        y = 667;
    } else if (e === "\\rceil" || e === "⌉") {
        h = "⎤";
        g = "⎥";
        v = "⎥";
        x = "Size4-Regular";
        b = "rceil";
        y = 667;
    } else if (e === "(" || e === "\\lparen") {
        h = "⎛";
        v = "⎜";
        g = "⎝";
        x = "Size4-Regular";
        b = "lparen";
        y = 875;
    } else if (e === ")" || e === "\\rparen") {
        h = "⎞";
        v = "⎟";
        g = "⎠";
        x = "Size4-Regular";
        b = "rparen";
        y = 875;
    } else if (e === "\\{" || e === "\\lbrace") {
        h = "⎧";
        c = "⎨";
        g = "⎩";
        v = "⎪";
        x = "Size4-Regular";
    } else if (e === "\\}" || e === "\\rbrace") {
        h = "⎫";
        c = "⎬";
        g = "⎭";
        v = "⎪";
        x = "Size4-Regular";
    } else if (e === "\\lgroup" || e === "⟮") {
        h = "⎧";
        g = "⎩";
        v = "⎪";
        x = "Size4-Regular";
    } else if (e === "\\rgroup" || e === "⟯") {
        h = "⎫";
        g = "⎭";
        v = "⎪";
        x = "Size4-Regular";
    } else if (e === "\\lmoustache" || e === "⎰") {
        h = "⎧";
        g = "⎭";
        v = "⎪";
        x = "Size4-Regular";
    } else if (e === "\\rmoustache" || e === "⎱") {
        h = "⎫";
        g = "⎩";
        v = "⎪";
        x = "Size4-Regular";
    }
    const M = ue(h, x, l);
    const T = M.height + M.depth;
    const C = ue(v, x, l);
    const q = C.height + C.depth;
    const I = ue(g, x, l);
    const O = I.height + I.depth;
    let F = 0;
    let V = 1;
    if (c !== null) {
        const L = ue(c, x, l);
        F = L.height + L.depth;
        V = 2;
    }
    const P = T + O + F;
    const W = Math.max(0, Math.ceil((t - P) / (V * q)));
    const X = P + W * V * q;
    let axisHeight = n.fontMetrics().axisHeight;
    if (a) {
        axisHeight *= n.sizeMultiplier;
    }
    const i0 = X / 2 - axisHeight;
    const t0 = [];
    if (b.length > 0) {
        const X0 = X - T - O;
        const m0 = Math.round(X * 1000);
        const y0 = ra(b, Math.round(X0 * 1000));
        const R0 = new P0(b, y0);
        const j0 = A(y / 1000);
        const Z0 = A(m0 / 1000);
        const Ze = new D0([
            R0
        ], {
            width: j0,
            height: Z0,
            viewBox: `0 0 ${y} ${m0}`
        });
        const I0 = G0([], [
            Ze
        ], n);
        I0.height = m0 / 1000;
        I0.style.width = j0;
        I0.style.height = Z0;
        t0.push({
            type: "elem",
            elem: I0
        });
    } else {
        t0.push(at(g, x, l));
        t0.push(Te);
        if (c === null) {
            const N0 = X - T - O + 2 * zt;
            t0.push(nt(v, N0, n));
        } else {
            const se = (X - T - O - F) / 2 + 2 * zt;
            t0.push(nt(v, se, n));
            t0.push(Te);
            t0.push(at(c, x, l));
            t0.push(Te);
            t0.push(nt(v, se, n));
        }
        t0.push(Te);
        t0.push(at(h, x, l));
    }
    const x0 = n.havingBaseStyle(N.TEXT);
    const fe = G({
        positionType: "bottom",
        positionData: i0,
        children: t0
    });
    return Ot(k([
        "delimsizing",
        "mult"
    ], [
        fe
    ], x0), N.TEXT, n, u);
};
const it = 80;
const lt = 0.08;
const st = (e, t, a, n, l)=>{
    const u = ea(e, n, a);
    const h = new P0(e, u);
    const c = new D0([
        h
    ], {
        width: "400em",
        height: A(t),
        viewBox: `0 0 400000 ${a}`,
        preserveAspectRatio: "xMinYMin slice"
    });
    return G0([
        "hide-tail"
    ], [
        c
    ], l);
};
const Xa = (e, t)=>{
    const a = t.havingBaseSizing();
    const n = s1("\\surd", e * a.sizeMultiplier, l1, a);
    let a_sizeMultiplier = a.sizeMultiplier;
    const u = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness);
    let h;
    let c = 0;
    let v = 0;
    let g = 0;
    let advanceWidth;
    if (n.type === "small") {
        g = 1000 + 1000 * u + it;
        if (e < 1) {
            a_sizeMultiplier = 1;
        } else if (e < 1.4) {
            a_sizeMultiplier = 0.7;
        }
        c = (1 + u + lt) / a_sizeMultiplier;
        v = (1 + u) / a_sizeMultiplier;
        h = st("sqrtMain", c, g, u, t);
        h.style.minWidth = "0.853em";
        advanceWidth = 0.833 / a_sizeMultiplier;
    } else if (n.type === "large") {
        g = (1000 + it) * oe[n.size];
        v = (oe[n.size] + u) / a_sizeMultiplier;
        c = (oe[n.size] + u + lt) / a_sizeMultiplier;
        h = st(`sqrtSize${n.size}`, c, g, u, t);
        h.style.minWidth = "1.02em";
        advanceWidth = 1 / a_sizeMultiplier;
    } else {
        c = e + u + lt;
        v = e + u;
        g = Math.floor(1000 * e + u) + it;
        h = st("sqrtTall", c, g, u, t);
        h.style.minWidth = "0.742em";
        advanceWidth = 1.056;
    }
    h.height = v;
    h.style.height = A(c);
    return {
        span: h,
        advanceWidth,
        ruleWidth: (t.fontMetrics().sqrtRuleThickness + u) * a_sizeMultiplier
    };
};
const a1 = new Set([
    "(",
    "\\lparen",
    ")",
    "\\rparen",
    "[",
    "\\lbrack",
    "]",
    "\\rbrack",
    "\\{",
    "\\lbrace",
    "\\}",
    "\\rbrace",
    "\\lfloor",
    "\\rfloor",
    "⌊",
    "⌋",
    "\\lceil",
    "\\rceil",
    "⌈",
    "⌉",
    "\\surd"
]);
const Ya = new Set([
    "\\uparrow",
    "\\downarrow",
    "\\updownarrow",
    "\\Uparrow",
    "\\Downarrow",
    "\\Updownarrow",
    "|",
    "\\|",
    "\\vert",
    "\\Vert",
    "\\lvert",
    "\\rvert",
    "\\lVert",
    "\\rVert",
    "\\lgroup",
    "\\rgroup",
    "⟮",
    "⟯",
    "\\lmoustache",
    "\\rmoustache",
    "⎰",
    "⎱"
]);
const n1 = new Set([
    "<",
    ">",
    "\\langle",
    "\\rangle",
    "/",
    "\\backslash",
    "\\lt",
    "\\gt"
]);
var oe = [
    0,
    1.2,
    1.8,
    2.4,
    3
];
const i1 = (e, t, a, mode, l)=>{
    if (e === "<" || e === "\\lt" || e === "⟨") {
        e = "\\langle";
    } else if (e === ">" || e === "\\gt" || e === "⟩") {
        e = "\\rangle";
    }
    if (a1.has(e) || n1.has(e)) {
        return t1(e, t, false, a, mode, l);
    }
    if (Ya.has(e)) {
        return r1(e, oe[t], false, a, mode, l);
    }
    throw new ParseError(`Illegal delimiter: '${e}'`);
};
const Wa = [
    {
        type: "small",
        style: N.SCRIPTSCRIPT
    },
    {
        type: "small",
        style: N.SCRIPT
    },
    {
        type: "small",
        style: N.TEXT
    },
    {
        type: "large",
        size: 1
    },
    {
        type: "large",
        size: 2
    },
    {
        type: "large",
        size: 3
    },
    {
        type: "large",
        size: 4
    }
];
const $a = [
    {
        type: "small",
        style: N.SCRIPTSCRIPT
    },
    {
        type: "small",
        style: N.SCRIPT
    },
    {
        type: "small",
        style: N.TEXT
    },
    {
        type: "stack"
    }
];
var l1 = [
    {
        type: "small",
        style: N.SCRIPTSCRIPT
    },
    {
        type: "small",
        style: N.SCRIPT
    },
    {
        type: "small",
        style: N.TEXT
    },
    {
        type: "large",
        size: 1
    },
    {
        type: "large",
        size: 2
    },
    {
        type: "large",
        size: 3
    },
    {
        type: "large",
        size: 4
    },
    {
        type: "stack"
    }
];
const ja = (e)=>{
    if (e.type === "small") {
        return "Main-Regular";
    }
    if (e.type === "large") {
        return `Size${e.size}-Regular`;
    }
    if (e.type === "stack") {
        return "Size4-Regular";
    }
    const e_type = e.type;
    throw new Error(`Add support for delim type '${e_type}' here.`);
};
var s1 = (e, t, a, n)=>{
    const l = Math.min(2, 3 - n.style.size);
    for(let u = l; u < a.length; u++){
        const h = a[u];
        if (h.type === "stack") {
            break;
        }
        const c = ue(e, ja(h), "math");
        let v = c.height + c.depth;
        if (h.type === "small") {
            const g = n.havingBaseStyle(h.style);
            v *= g.sizeMultiplier;
        }
        if (v > t) {
            return h;
        }
    }
    return a[a.length - 1];
};
const At = (e, t, a, n, mode, u)=>{
    if (e === "<" || e === "\\lt" || e === "⟨") {
        e = "\\langle";
    } else if (e === ">" || e === "\\gt" || e === "⟩") {
        e = "\\rangle";
    }
    let h;
    if (n1.has(e)) {
        h = Wa;
    } else if (a1.has(e)) {
        h = l1;
    } else {
        h = $a;
    }
    const c = s1(e, t, h, n);
    if (c.type === "small") {
        return Pa(e, c.style, a, n, mode, u);
    }
    if (c.type === "large") {
        return t1(e, c.size, a, n, mode, u);
    }
    return r1(e, t, a, n, mode, u);
};
const ut = (e, t, a, n, mode, u)=>{
    const h = n.fontMetrics().axisHeight * n.sizeMultiplier;
    const c = 901;
    const v = 5 / n.fontMetrics().ptPerEm;
    const g = Math.max(t - h, a + h);
    const b = Math.max(g / 500 * c, 2 * g - v);
    return At(e, b, true, n, mode, u);
};
const hr = {
    "\\bigl": {
        mclass: "mopen",
        size: 1
    },
    "\\Bigl": {
        mclass: "mopen",
        size: 2
    },
    "\\biggl": {
        mclass: "mopen",
        size: 3
    },
    "\\Biggl": {
        mclass: "mopen",
        size: 4
    },
    "\\bigr": {
        mclass: "mclose",
        size: 1
    },
    "\\Bigr": {
        mclass: "mclose",
        size: 2
    },
    "\\biggr": {
        mclass: "mclose",
        size: 3
    },
    "\\Biggr": {
        mclass: "mclose",
        size: 4
    },
    "\\bigm": {
        mclass: "mrel",
        size: 1
    },
    "\\Bigm": {
        mclass: "mrel",
        size: 2
    },
    "\\biggm": {
        mclass: "mrel",
        size: 3
    },
    "\\Biggm": {
        mclass: "mrel",
        size: 4
    },
    "\\big": {
        mclass: "mord",
        size: 1
    },
    "\\Big": {
        mclass: "mord",
        size: 2
    },
    "\\bigg": {
        mclass: "mord",
        size: 3
    },
    "\\Bigg": {
        mclass: "mord",
        size: 4
    }
};
const Za = new Set([
    "(",
    "\\lparen",
    ")",
    "\\rparen",
    "[",
    "\\lbrack",
    "]",
    "\\rbrack",
    "\\{",
    "\\lbrace",
    "\\}",
    "\\rbrace",
    "\\lfloor",
    "\\rfloor",
    "⌊",
    "⌋",
    "\\lceil",
    "\\rceil",
    "⌈",
    "⌉",
    "<",
    ">",
    "\\langle",
    "⟨",
    "\\rangle",
    "⟩",
    "\\lt",
    "\\gt",
    "\\lvert",
    "\\rvert",
    "\\lVert",
    "\\rVert",
    "\\lgroup",
    "\\rgroup",
    "⟮",
    "⟯",
    "\\lmoustache",
    "\\rmoustache",
    "⎰",
    "⎱",
    "/",
    "\\backslash",
    "|",
    "\\vert",
    "\\|",
    "\\Vert",
    "\\uparrow",
    "\\Uparrow",
    "\\downarrow",
    "\\Downarrow",
    "\\updownarrow",
    "\\Updownarrow",
    "."
]);
function Xe(r, e) {
    const t = Ue(r);
    if (t && Za.has(t.text)) {
        return t;
    }
    throw t ? new ParseError(`Invalid delimiter '${t.text}' after '${e.funcName}'`, r) : new ParseError(`Invalid delimiter type '${r.type}'`, r);
}
__defineFunction({
    type: "delimsizing",
    names: [
        "\\bigl",
        "\\Bigl",
        "\\biggl",
        "\\Biggl",
        "\\bigr",
        "\\Bigr",
        "\\biggr",
        "\\Biggr",
        "\\bigm",
        "\\Bigm",
        "\\biggm",
        "\\Biggm",
        "\\big",
        "\\Big",
        "\\bigg",
        "\\Bigg"
    ],
    props: {
        numArgs: 1,
        argTypes: [
            "primitive"
        ]
    },
    handler: (r, e)=>{
        var t = Xe(e[0], r);
        return {
            type: "delimsizing",
            mode: r.parser.mode,
            size: hr[r.funcName].size,
            mclass: hr[r.funcName].mclass,
            delim: t.text
        };
    },
    htmlBuilder: (r, e)=>{
        if (r.delim === ".") {
            return k([
                r.mclass
            ]);
        }
        return i1(r.delim, r.size, e, r.mode, [
            r.mclass
        ]);
    },
    mathmlBuilder: (r)=>{
        var e = [];
        if (r.delim !== ".") {
            e.push(b0(r.delim, r.mode));
        }
        var t = new z("mo", e);
        if (r.mclass === "mopen" || r.mclass === "mclose") {
            t.setAttribute("fence", "true");
        } else {
            t.setAttribute("fence", "false");
        }
        t.setAttribute("stretchy", "true");
        var a = A(oe[r.size]);
        t.setAttribute("minsize", a);
        t.setAttribute("maxsize", a);
        return t;
    }
});
function mr(r) {
    if (!r.body) {
        throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
    }
}
__defineFunction({
    type: "leftright-right",
    names: [
        "\\right"
    ],
    props: {
        numArgs: 1,
        primitive: true
    },
    handler: (r, e)=>{
        var t = r.parser.gullet.macros.get("\\current@color");
        if (t && typeof t !== "string") {
            throw new ParseError("\\current@color set to non-string in \\right");
        }
        return {
            type: "leftright-right",
            mode: r.parser.mode,
            delim: Xe(e[0], r).text,
            color: t
        };
    }
});
__defineFunction({
    type: "leftright",
    names: [
        "\\left"
    ],
    props: {
        numArgs: 1,
        primitive: true
    },
    handler: (r, e)=>{
        var t = Xe(e[0], r);
        var r_parser = r.parser;
        ++r_parser.leftrightDepth;
        var n = r_parser.parseExpression(false);
        --r_parser.leftrightDepth;
        r_parser.expect("\\right", false);
        var l = H(r_parser.parseFunction(), "leftright-right");
        return {
            type: "leftright",
            mode: r_parser.mode,
            body: n,
            left: t.text,
            right: l.delim,
            rightColor: l.color
        };
    },
    htmlBuilder: (r, e)=>{
        mr(r);
        for(var t = a0(r.body, e, true, [
            "mopen",
            "mclose"
        ]), a = 0, n = 0, l = false, u = 0; u < t.length; u++){
            if (t[u].isMiddle) {
                l = true;
            } else {
                a = Math.max(t[u].height, a);
                n = Math.max(t[u].depth, n);
            }
        }
        a *= e.sizeMultiplier;
        n *= e.sizeMultiplier;
        var h;
        if (r.left === ".") {
            h = me(e, [
                "mopen"
            ]);
        } else {
            h = ut(r.left, a, n, e, r.mode, [
                "mopen"
            ]);
        }
        t.unshift(h);
        if (l) {
            for(var c = 1; c < t.length; c++){
                var v = t[c];
                var g = v.isMiddle;
                if (g) {
                    t[c] = ut(g.delim, a, n, g.options, r.mode, []);
                }
            }
        }
        var b;
        if (r.right === ".") {
            b = me(e, [
                "mclose"
            ]);
        } else {
            var y = r.rightColor ? e.withColor(r.rightColor) : e;
            b = ut(r.right, a, n, y, r.mode, [
                "mclose"
            ]);
        }
        t.push(b);
        return k([
            "minner"
        ], t, e);
    },
    mathmlBuilder: (r, e)=>{
        mr(r);
        var t = p0(r.body, e);
        if (r.left !== ".") {
            var a = new z("mo", [
                b0(r.left, r.mode)
            ]);
            a.setAttribute("fence", "true");
            t.unshift(a);
        }
        if (r.right !== ".") {
            var n = new z("mo", [
                b0(r.right, r.mode)
            ]);
            n.setAttribute("fence", "true");
            if (r.rightColor) {
                n.setAttribute("mathcolor", r.rightColor);
            }
            t.push(n);
        }
        return Rt(t);
    }
});
__defineFunction({
    type: "middle",
    names: [
        "\\middle"
    ],
    props: {
        numArgs: 1,
        primitive: true
    },
    handler: (r, e)=>{
        var t = Xe(e[0], r);
        if (!r.parser.leftrightDepth) {
            throw new ParseError("\\middle without preceding \\left", t);
        }
        return {
            type: "middle",
            mode: r.parser.mode,
            delim: t.text
        };
    },
    htmlBuilder: (r, options)=>{
        var t;
        if (r.delim === ".") {
            t = me(options, []);
        } else {
            t = i1(r.delim, 1, options, r.mode, []);
            var a = {
                delim: r.delim,
                options
            };
            t.isMiddle = a;
        }
        return t;
    },
    mathmlBuilder: (r, e)=>{
        var t = r.delim === "\\vert" || r.delim === "|" ? b0("|", "text") : b0(r.delim, r.mode);
        var a = new z("mo", [
            t
        ]);
        a.setAttribute("fence", "true");
        a.setAttribute("lspace", "0.05em");
        a.setAttribute("rspace", "0.05em");
        return a;
    }
});
const Ye = (r, e)=>{
    var t = re(U(r.body, e), e);
    var a = r.label.slice(1);
    var e_sizeMultiplier = e.sizeMultiplier;
    var l;
    var u = 0;
    var h = C0(r.body);
    if (a === "sout") {
        l = k([
            "stretchy",
            "sout"
        ]);
        l.height = e.fontMetrics().defaultRuleThickness / e_sizeMultiplier;
        u = -0.5 * e.fontMetrics().xHeight;
    } else if (a === "phase") {
        var c = K({
            number: 0.6,
            unit: "pt"
        }, e);
        var v = K({
            number: 0.35,
            unit: "ex"
        }, e);
        var g = e.havingBaseSizing();
        e_sizeMultiplier = e_sizeMultiplier / g.sizeMultiplier;
        var b = t.height + t.depth + c + v;
        t.style.paddingLeft = A(b / 2 + c);
        var y = Math.floor(1000 * b * e_sizeMultiplier);
        var x = Q1(y);
        var M = new D0([
            new P0("phase", x)
        ], {
            width: "400em",
            height: A(y / 1000),
            viewBox: `0 0 400000 ${y}`,
            preserveAspectRatio: "xMinYMin slice"
        });
        l = G0([
            "hide-tail"
        ], [
            M
        ], e);
        l.style.height = A(b);
        u = t.depth + c + v;
    } else {
        /cancel/.test(a) ? h || t.classes.push("cancel-pad") : a === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
        var T = 0;
        var C = 0;
        var q = 0;
        if (/box/.test(a)) {
            q = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness);
            T = e.fontMetrics().fboxsep + (a === "colorbox" ? 0 : q);
            C = T;
        } else if (a === "angl") {
            q = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness);
            T = 4 * q;
            C = Math.max(0, 0.25 - t.depth);
        } else {
            T = h ? 0.2 : 0;
            C = T;
        }
        l = Ra(t, a, T, C, e);
        if (/fbox|boxed|fcolorbox/.test(a)) {
            l.style.borderStyle = "solid";
            l.style.borderWidth = A(q);
        } else if (a === "angl" && q !== 0.049) {
            l.style.borderTopWidth = A(q);
            l.style.borderRightWidth = A(q);
        }
        u = t.depth + C;
        if (r.backgroundColor) {
            l.style.backgroundColor = r.backgroundColor;
            if (r.borderColor) {
                l.style.borderColor = r.borderColor;
            }
        }
    }
    var I;
    if (r.backgroundColor) {
        I = G({
            positionType: "individualShift",
            children: [
                {
                    type: "elem",
                    elem: l,
                    shift: u
                },
                {
                    type: "elem",
                    elem: t,
                    shift: 0
                }
            ]
        });
    } else {
        var wrapperClasses = /cancel|phase/.test(a) ? [
            "svg-align"
        ] : [];
        I = G({
            positionType: "individualShift",
            children: [
                {
                    type: "elem",
                    elem: t,
                    shift: 0
                },
                {
                    type: "elem",
                    elem: l,
                    shift: u,
                    wrapperClasses
                }
            ]
        });
    }
    if (/cancel/.test(a)) {
        I.height = t.height;
        I.depth = t.depth;
    }
    if (/cancel/.test(a) && !h) {
        return k([
            "mord",
            "cancel-lap"
        ], [
            I
        ], e);
    }
    return k([
        "mord"
    ], [
        I
    ], e);
};
const We = (r, e)=>{
    var t = 0;
    var a = new z(r.label.includes("colorbox") ? "mpadded" : "menclose", [
        Y(r.body, e)
    ]);
    switch(r.label){
        case "\\cancel":
            a.setAttribute("notation", "updiagonalstrike");
            break;
        case "\\bcancel":
            a.setAttribute("notation", "downdiagonalstrike");
            break;
        case "\\phase":
            a.setAttribute("notation", "phasorangle");
            break;
        case "\\sout":
            a.setAttribute("notation", "horizontalstrike");
            break;
        case "\\fbox":
            a.setAttribute("notation", "box");
            break;
        case "\\angl":
            a.setAttribute("notation", "actuarial");
            break;
        case "\\fcolorbox":
        case "\\colorbox":
            t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm;
            a.setAttribute("width", `+${2 * t}pt`);
            a.setAttribute("height", `+${2 * t}pt`);
            a.setAttribute("lspace", `${t}pt`);
            a.setAttribute("voffset", `${t}pt`);
            if (r.label === "\\fcolorbox") {
                var n = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness);
                a.setAttribute("style", `border: ${A(n)} solid ${r.borderColor}`);
            }
            break;
        case "\\xcancel":
            a.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
            break;
    }
    if (r.backgroundColor) {
        a.setAttribute("mathbackground", r.backgroundColor);
    }
    return a;
};
__defineFunction({
    type: "enclose",
    names: [
        "\\colorbox"
    ],
    props: {
        numArgs: 2,
        allowedInText: true,
        argTypes: [
            "color",
            "text"
        ]
    },
    handler ({ parser, funcName }, e, t) {
        const color = H(e[0], "color-token").color;
        const u = e[1];
        return {
            type: "enclose",
            mode: parser.mode,
            label: funcName,
            backgroundColor: color,
            body: u
        };
    },
    htmlBuilder: Ye,
    mathmlBuilder: We
});
__defineFunction({
    type: "enclose",
    names: [
        "\\fcolorbox"
    ],
    props: {
        numArgs: 3,
        allowedInText: true,
        argTypes: [
            "color",
            "color",
            "text"
        ]
    },
    handler ({ parser, funcName }, e, t) {
        const color = H(e[0], "color-token").color;
        const color_1 = H(e[1], "color-token").color;
        const h = e[2];
        return {
            type: "enclose",
            mode: parser.mode,
            label: funcName,
            backgroundColor: color_1,
            borderColor: color,
            body: h
        };
    },
    htmlBuilder: Ye,
    mathmlBuilder: We
});
__defineFunction({
    type: "enclose",
    names: [
        "\\fbox"
    ],
    props: {
        numArgs: 1,
        argTypes: [
            "hbox"
        ],
        allowedInText: true
    },
    handler ({ parser }, e) {
        return {
            type: "enclose",
            mode: parser.mode,
            label: "\\fbox",
            body: e[0]
        };
    }
});
__defineFunction({
    type: "enclose",
    names: [
        "\\cancel",
        "\\bcancel",
        "\\xcancel",
        "\\phase"
    ],
    props: {
        numArgs: 1
    },
    handler ({ parser, funcName }, e) {
        const n = e[0];
        return {
            type: "enclose",
            mode: parser.mode,
            label: funcName,
            body: n
        };
    },
    htmlBuilder: Ye,
    mathmlBuilder: We
});
__defineFunction({
    type: "enclose",
    names: [
        "\\sout"
    ],
    props: {
        numArgs: 1,
        allowedInText: true
    },
    handler ({ parser, funcName }, e) {
        if (parser.mode === "math") {
            parser.settings.reportNonstrict("mathVsSout", "LaTeX's \\sout works only in text mode");
        }
        const n = e[0];
        return {
            type: "enclose",
            mode: parser.mode,
            label: funcName,
            body: n
        };
    },
    htmlBuilder: Ye,
    mathmlBuilder: We
});
__defineFunction({
    type: "enclose",
    names: [
        "\\angl"
    ],
    props: {
        numArgs: 1,
        argTypes: [
            "hbox"
        ],
        allowedInText: false
    },
    handler ({ parser }, e) {
        return {
            type: "enclose",
            mode: parser.mode,
            label: "\\angl",
            body: e[0]
        };
    }
});
const u1 = {};
function S0(r) {
    for(var { type, names, props, handler, htmlBuilder, mathmlBuilder } = r, h = {
        type,
        numArgs: props.numArgs || 0,
        allowedInText: false,
        numOptionalArgs: 0,
        handler
    }, c = 0; c < names.length; ++c){
        u1[names[c]] = h;
    }
    if (htmlBuilder) {
        Re[type] = htmlBuilder;
    }
    if (mathmlBuilder) {
        Ie[type] = mathmlBuilder;
    }
}
const o1 = {};
export function __defineMacro(r, e) {
    o1[r] = e;
}
class c0 {
    constructor(e, t, a){
        this.lexer = e;
        this.start = t;
        this.end = a;
    }
    static range(e, t) {
        if (t) {
            if (!e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer) {
                return null;
            }
            return new c0(e.loc.lexer, e.loc.start, t.loc.end);
        }
        return e && e.loc;
    }
}
class d0 {
    constructor(e, t){
        this.text = e;
        this.loc = t;
    }
    range(e, t) {
        return new d0(t, c0.range(this, e));
    }
}
function cr(parser) {
    const e = [];
    parser.consumeSpaces();
    let text = parser.fetch().text;
    for(text === "\\relax" && (parser.consume(), parser.consumeSpaces(), text = parser.fetch().text); text === "\\hline" || text === "\\hdashline";){
        parser.consume();
        e.push(text === "\\hdashline");
        parser.consumeSpaces();
        text = parser.fetch().text;
    }
    return e;
}
const $e = (r)=>{
    var settings = r.parser.settings;
    if (!settings.displayMode) {
        throw new ParseError(`{${r.envName}} can be used only in display mode.`);
    }
};
const Ka = new Set([
    "gather",
    "gather*"
]);
function Ht(envName) {
    if (!envName.includes("ed")) {
        return !envName.includes("*");
    }
}
function V0(parser, { hskipBeforeAndAfter, addJot, cols, arraystretch, colSeparationType, autoTag, singleRow, emptySingleRow, maxNumCols, leqno }, t) {
    parser.gullet.beginGroup();
    if (!singleRow) {
        parser.gullet.macros.set("\\cr", "\\\\\\relax");
    }
    if (!arraystretch) {
        const x = parser.gullet.expandMacroAsText("\\arraystretch");
        if (x == null) {
            arraystretch = 1;
        } else {
            arraystretch = parseFloat(x);
            if (!arraystretch || arraystretch < 0) {
                throw new ParseError(`Invalid \\arraystretch: ${x}`);
            }
        }
    }
    parser.gullet.beginGroup();
    let M = [];
    const T = [
        M
    ];
    const rowGaps = [];
    const hLinesBeforeRow = [];
    const tags = autoTag != null ? [] : undefined;
    function O() {
        if (autoTag) {
            parser.gullet.macros.set("\\@eqnsw", "1", true);
        }
    }
    function F() {
        tags && (parser.gullet.macros.get("\\df@tag") ? (tags.push(parser.subparse([
            new d0("\\df@tag")
        ])), parser.gullet.macros.set("\\df@tag", undefined, true)) : tags.push(!!autoTag && parser.gullet.macros.get("\\@eqnsw") === "1"));
    }
    O();
    hLinesBeforeRow.push(cr(parser));
    while(true){
        const V = parser.parseExpression(false, singleRow ? "\\end" : "\\\\");
        parser.gullet.endGroup();
        parser.gullet.beginGroup();
        let L = {
            type: "ordgroup",
            mode: parser.mode,
            body: V
        };
        if (t) {
            L = {
                type: "styling",
                mode: parser.mode,
                style: t,
                body: [
                    L
                ]
            };
        }
        M.push(L);
        const P = parser.fetch().text;
        if (P === "&") {
            if (maxNumCols && M.length === maxNumCols) {
                if (singleRow || colSeparationType) {
                    throw new ParseError("Too many tab characters: &", parser.nextToken);
                }
                parser.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
            }
            parser.consume();
        } else if (P === "\\end") {
            F();
            if (M.length === 1 && L.type === "styling" && L.body.length === 1 && L.body[0].type === "ordgroup" && L.body[0].body.length === 0 && (T.length > 1 || !emptySingleRow)) {
                T.pop();
            }
            if (hLinesBeforeRow.length < T.length + 1) {
                hLinesBeforeRow.push([]);
            }
            break;
        } else if (P === "\\\\") {
            parser.consume();
            let W;
            if (parser.gullet.future().text !== " ") {
                W = parser.parseSizeGroup(true);
            }
            rowGaps.push(W ? W.value : null);
            F();
            hLinesBeforeRow.push(cr(parser));
            M = [];
            T.push(M);
            O();
        } else {
            throw new ParseError("Expected & or \\\\ or \\cr or \\end", parser.nextToken);
        }
    }
    parser.gullet.endGroup();
    parser.gullet.endGroup();
    return {
        type: "array",
        mode: parser.mode,
        addJot,
        arraystretch,
        body: T,
        cols,
        rowGaps,
        hskipBeforeAndAfter,
        hLinesBeforeRow,
        colSeparationType,
        tags,
        leqno
    };
}
function Ft(envName) {
    if (envName.slice(0, 1) === "d") {
        return "display";
    }
    return "text";
}
const z0 = (e, t)=>{
    let a;
    let n;
    const length = e.body.length;
    const e_hLinesBeforeRow = e.hLinesBeforeRow;
    let h = 0;
    const c = new Array(length);
    const v = [];
    const g = Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness);
    const b = 1 / t.fontMetrics().ptPerEm;
    let y = 5 * b;
    if (e.colSeparationType && e.colSeparationType === "small") {
        const x = t.havingStyle(N.SCRIPT).sizeMultiplier;
        y = 0.2778 * (x / t.sizeMultiplier);
    }
    const M = e.colSeparationType === "CD" ? K({
        number: 3,
        unit: "ex"
    }, t) : 12 * b;
    const T = 3 * b;
    const C = e.arraystretch * M;
    const q = 0.7 * C;
    const I = 0.3 * C;
    let pos = 0;
    function F(be) {
        for(let ye = 0; ye < be.length; ++ye){
            if (ye > 0) {
                pos += 0.25;
            }
            v.push({
                pos,
                isDashed: be[ye]
            });
        }
    }
    F(e_hLinesBeforeRow[0]);
    for(a = 0; a < e.body.length; ++a){
        const V = e.body[a];
        let L = q;
        let P = I;
        if (h < V.length) {
            h = V.length;
        }
        const W = new Array(V.length);
        for(n = 0; n < V.length; ++n){
            const X = U(V[n], t);
            if (P < X.depth) {
                P = X.depth;
            }
            if (L < X.height) {
                L = X.height;
            }
            W[n] = X;
        }
        const h0 = e.rowGaps[a];
        let i0 = 0;
        if (h0) {
            i0 = K(h0, t);
            if (i0 > 0) {
                i0 += I;
                if (P < i0) {
                    P = i0;
                }
                i0 = 0;
            }
        }
        if (e.addJot && a < e.body.length - 1) {
            P += T;
        }
        W.height = L;
        W.depth = P;
        pos += L;
        W.pos = pos;
        pos += P + i0;
        c[a] = W;
        F(e_hLinesBeforeRow[a + 1]);
    }
    const t0 = pos / 2 + t.fontMetrics().axisHeight;
    const X0 = e.cols || [];
    const m0 = [];
    let y0;
    let R0;
    const j0 = [];
    if (e.tags && e.tags.some((be)=>be)) {
        for(a = 0; a < length; ++a){
            const Z0 = c[a];
            const Ze = Z0.pos - t0;
            const I0 = e.tags[a];
            let N0;
            switch(I0){
                case true:
                    N0 = k([
                        "eqn-num"
                    ], [], t);
                    break;
                case false:
                    N0 = k([], [], t);
                    break;
                default:
                    N0 = k([], a0(I0, t, true), t);
            }
            N0.depth = Z0.depth;
            N0.height = Z0.height;
            j0.push({
                type: "elem",
                elem: N0,
                shift: Ze
            });
        }
    }
    n = 0;
    for(R0 = 0; n < h || R0 < X0.length; ++n, ++R0){
        for(var x0 = X0[R0], fe = true; x0?.type === "separator";){
            if (!fe) {
                y0 = k([
                    "arraycolsep"
                ], []);
                y0.style.width = A(t.fontMetrics().doubleRuleSep);
                m0.push(y0);
            }
            if (x0.separator === "|" || x0.separator === ":") {
                const M1 = x0.separator === "|" ? "solid" : "dashed";
                const K0 = k([
                    "vertical-separator"
                ], [], t);
                K0.style.height = A(pos);
                K0.style.borderRightWidth = A(g);
                K0.style.borderRightStyle = M1;
                K0.style.margin = `0 ${A(-g / 2)}`;
                const Xt = pos - t0;
                if (Xt) {
                    K0.style.verticalAlign = A(-Xt);
                }
                m0.push(K0);
            } else {
                throw new ParseError(`Invalid separator type: ${x0.separator}`);
            }
            R0++;
            x0 = X0[R0];
            fe = false;
        }
        if (!(n >= h)) {
            let J0;
            if (n > 0 || e.hskipBeforeAndAfter) {
                J0 = x0?.pregap ?? y;
                if (J0 !== 0) {
                    y0 = k([
                        "arraycolsep"
                    ], []);
                    y0.style.width = A(J0);
                    m0.push(y0);
                }
            }
            const $t = [];
            for(a = 0; a < length; ++a){
                const ve = c[a];
                const pe = ve[n];
                if (pe) {
                    const T1 = ve.pos - t0;
                    pe.depth = ve.depth;
                    pe.height = ve.height;
                    $t.push({
                        type: "elem",
                        elem: pe,
                        shift: T1
                    });
                }
            }
            const B1 = G({
                positionType: "individualShift",
                children: $t
            });
            const D1 = k([
                `col-align-${x0?.align || "c"}`
            ], [
                B1
            ]);
            m0.push(D1);
            if (n < h - 1 || e.hskipBeforeAndAfter) {
                J0 = x0?.postgap ?? y;
                if (J0 !== 0) {
                    y0 = k([
                        "arraycolsep"
                    ], []);
                    y0.style.width = A(J0);
                    m0.push(y0);
                }
            }
        }
    }
    let ge = k([
        "mtable"
    ], m0);
    if (v.length > 0) {
        const C1 = te("hline", t, g);
        const q1 = te("hdashline", t, g);
        const Ke = [
            {
                type: "elem",
                elem: ge,
                shift: 0
            }
        ];
        while(v.length > 0){
            const Kt = v.pop();
            const Jt = Kt.pos - t0;
            if (Kt.isDashed) {
                Ke.push({
                    type: "elem",
                    elem: q1,
                    shift: Jt
                });
            } else {
                Ke.push({
                    type: "elem",
                    elem: C1,
                    shift: Jt
                });
            }
        }
        ge = G({
            positionType: "individualShift",
            children: Ke
        });
    }
    if (j0.length === 0) {
        return k([
            "mord"
        ], [
            ge
        ], t);
    }
    const E1 = G({
        positionType: "individualShift",
        children: j0
    });
    const R1 = k([
        "tag"
    ], [
        E1
    ], t);
    return E0([
        ge,
        R1
    ]);
};
const Ja = {
    c: "center ",
    l: "left ",
    r: "right "
};
const A0 = (e, t)=>{
    const a = [];
    const n = new z("mtd", [], [
        "mtr-glue"
    ]);
    const l = new z("mtd", [], [
        "mml-eqn-num"
    ]);
    for(let u = 0; u < e.body.length; u++){
        for(var h = e.body[u], c = [], v = 0; v < h.length; v++){
            c.push(new z("mtd", [
                Y(h[v], t)
            ]));
        }
        if (e.tags && e.tags[u]) {
            c.unshift(n);
            c.push(n);
            if (e.leqno) {
                c.unshift(l);
            } else {
                c.push(l);
            }
        }
        a.push(new z("mtr", c));
    }
    let g = new z("mtable", a);
    const b = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
    g.setAttribute("rowspacing", A(b));
    let y = "";
    let x = "";
    if (e.cols && e.cols.length > 0) {
        const M = e.cols;
        let T = "";
        let C = false;
        let q = 0;
        let I = M.length;
        if (M[0].type === "separator") {
            y += "top ";
            q = 1;
        }
        if (M[M.length - 1].type === "separator") {
            y += "bottom ";
            I -= 1;
        }
        for(let O = q; O < I; O++){
            const F = M[O];
            if (F.type === "align") {
                x += Ja[F.align];
                if (C) {
                    T += "none ";
                }
                C = true;
            } else if (F.type === "separator" && C) {
                T += F.separator === "|" ? "solid " : "dashed ";
                C = false;
            }
        }
        g.setAttribute("columnalign", x.trim());
        if (/[sd]/.test(T)) {
            g.setAttribute("columnlines", T.trim());
        }
    }
    if (e.colSeparationType === "align") {
        for(var V = e.cols || [], L = "", P = 1; P < V.length; P++){
            L += P % 2 ? "0em " : "1em ";
        }
        g.setAttribute("columnspacing", L.trim());
    } else {
        if (e.colSeparationType === "alignat" || e.colSeparationType === "gather") {
            g.setAttribute("columnspacing", "0em");
        } else if (e.colSeparationType === "small") {
            g.setAttribute("columnspacing", "0.2778em");
        } else if (e.colSeparationType === "CD") {
            g.setAttribute("columnspacing", "0.5em");
        } else {
            g.setAttribute("columnspacing", "1em");
        }
    }
    let W = "";
    const e_hLinesBeforeRow = e.hLinesBeforeRow;
    y += e_hLinesBeforeRow[0].length > 0 ? "left " : "";
    y += e_hLinesBeforeRow[e_hLinesBeforeRow.length - 1].length > 0 ? "right " : "";
    for(let h0 = 1; h0 < e_hLinesBeforeRow.length - 1; h0++){
        W += e_hLinesBeforeRow[h0].length === 0 ? "none " : e_hLinesBeforeRow[h0][0] ? "dashed " : "solid ";
    }
    if (/[sd]/.test(W)) {
        g.setAttribute("rowlines", W.trim());
    }
    if (y !== "") {
        g = new z("menclose", [
            g
        ]);
        g.setAttribute("notation", y.trim());
    }
    if (e.arraystretch && e.arraystretch < 1) {
        g = new z("mstyle", [
            g
        ]);
        g.setAttribute("scriptlevel", "1");
    }
    return g;
};
const handler = (e, t)=>{
    if (!e.envName.includes("ed")) {
        $e(e);
    }
    const a = [];
    const colSeparationType = e.envName.includes("at") ? "alignat" : "align";
    const l = e.envName === "split";
    const u = V0(e.parser, {
        cols: a,
        addJot: true,
        autoTag: l ? undefined : Ht(e.envName),
        emptySingleRow: true,
        colSeparationType,
        maxNumCols: l ? 2 : undefined,
        leqno: e.parser.settings.leqno
    }, "display");
    let h = 0;
    let c = 0;
    const v = {
        type: "ordgroup",
        mode: e.mode,
        body: []
    };
    if (t[0] && t[0].type === "ordgroup") {
        let g = "";
        for(let b = 0; b < t[0].body.length; b++){
            const y = H(t[0].body[b], "textord");
            g += y.text;
        }
        h = Number(g);
        c = h * 2;
    }
    const x = !c;
    u.body.forEach((q)=>{
        for(let I = 1; I < q.length; I += 2){
            const O = H(q[I], "styling");
            const F = H(O.body[0], "ordgroup");
            F.body.unshift(v);
        }
        if (x) {
            if (c < q.length) {
                c = q.length;
            }
        } else {
            const V = q.length / 2;
            if (h < V) {
                throw new ParseError(`Too many math in a row: ${`expected ${h}, but got ${V}`}`, q[0]);
            }
        }
    });
    for(let M = 0; M < c; ++M){
        let T = "r";
        let pregap = 0;
        if (M % 2 === 1) {
            T = "l";
        } else if (M > 0 && x) {
            pregap = 1;
        }
        a[M] = {
            type: "align",
            align: T,
            pregap,
            postgap: 0
        };
    }
    u.colSeparationType = x ? "align" : "alignat";
    return u;
};
S0({
    type: "array",
    names: [
        "array",
        "darray"
    ],
    props: {
        numArgs: 1
    },
    handler (r, e) {
        const t = Ue(e[0]);
        const a = t ? [
            e[0]
        ] : H(e[0], "ordgroup").body;
        const n = a.map((u)=>{
            const h = Ge(u);
            const h_text = h.text;
            if ("lcr".includes(h_text)) {
                return {
                    type: "align",
                    align: h_text
                };
            }
            if (h_text === "|") {
                return {
                    type: "separator",
                    separator: "|"
                };
            }
            if (h_text === ":") {
                return {
                    type: "separator",
                    separator: ":"
                };
            }
            throw new ParseError(`Unknown column alignment: ${h_text}`, u);
        });
        const l = {
            cols: n,
            hskipBeforeAndAfter: true,
            maxNumCols: n.length
        };
        return V0(r.parser, l, Ft(r.envName));
    },
    htmlBuilder: z0,
    mathmlBuilder: A0
});
S0({
    type: "array",
    names: [
        "matrix",
        "pmatrix",
        "bmatrix",
        "Bmatrix",
        "vmatrix",
        "Vmatrix",
        "matrix*",
        "pmatrix*",
        "bmatrix*",
        "Bmatrix*",
        "vmatrix*",
        "Vmatrix*"
    ],
    props: {
        numArgs: 0
    },
    handler (r) {
        const e = {
            matrix: null,
            pmatrix: [
                "(",
                ")"
            ],
            bmatrix: [
                "[",
                "]"
            ],
            Bmatrix: [
                "\\{",
                "\\}"
            ],
            vmatrix: [
                "|",
                "|"
            ],
            Vmatrix: [
                "\\Vert",
                "\\Vert"
            ]
        }[r.envName.replace("*", "")];
        let t = "c";
        const a = {
            hskipBeforeAndAfter: false,
            cols: [
                {
                    type: "align",
                    align: t
                }
            ]
        };
        if (r.envName.charAt(r.envName.length - 1) === "*") {
            const n = r.parser;
            n.consumeSpaces();
            if (n.fetch().text === "[") {
                n.consume();
                n.consumeSpaces();
                t = n.fetch().text;
                if (!"lcr".includes(t)) {
                    throw new ParseError("Expected l or c or r", n.nextToken);
                }
                n.consume();
                n.consumeSpaces();
                n.expect("]");
                n.consume();
                a.cols = [
                    {
                        type: "align",
                        align: t
                    }
                ];
            }
        }
        const l = V0(r.parser, a, Ft(r.envName));
        const u = Math.max(0, ...l.body.map((h)=>h.length));
        l.cols = new Array(u).fill({
            type: "align",
            align: t
        });
        if (e) {
            return {
                type: "leftright",
                mode: r.mode,
                body: [
                    l
                ],
                left: e[0],
                right: e[1],
                rightColor: undefined
            };
        }
        return l;
    },
    htmlBuilder: z0,
    mathmlBuilder: A0
});
S0({
    type: "array",
    names: [
        "smallmatrix"
    ],
    props: {
        numArgs: 0
    },
    handler (r) {
        const e = {
            arraystretch: 0.5
        };
        const t = V0(r.parser, e, "script");
        t.colSeparationType = "small";
        return t;
    },
    htmlBuilder: z0,
    mathmlBuilder: A0
});
S0({
    type: "array",
    names: [
        "subarray"
    ],
    props: {
        numArgs: 1
    },
    handler (r, e) {
        const t = Ue(e[0]);
        const a = t ? [
            e[0]
        ] : H(e[0], "ordgroup").body;
        const n = a.map((h)=>{
            const c = Ge(h);
            const c_text = c.text;
            if ("lc".includes(c_text)) {
                return {
                    type: "align",
                    align: c_text
                };
            }
            throw new ParseError(`Unknown column alignment: ${c_text}`, h);
        });
        if (n.length > 1) {
            throw new ParseError("{subarray} can contain only one column");
        }
        const l = {
            cols: n,
            hskipBeforeAndAfter: false,
            arraystretch: 0.5
        };
        const u = V0(r.parser, l, "script");
        if (u.body.length > 0 && u.body[0].length > 1) {
            throw new ParseError("{subarray} can contain only one column");
        }
        return u;
    },
    htmlBuilder: z0,
    mathmlBuilder: A0
});
S0({
    type: "array",
    names: [
        "cases",
        "dcases",
        "rcases",
        "drcases"
    ],
    props: {
        numArgs: 0
    },
    handler (r) {
        const e = {
            arraystretch: 1.2,
            cols: [
                {
                    type: "align",
                    align: "l",
                    pregap: 0,
                    postgap: 1
                },
                {
                    type: "align",
                    align: "l",
                    pregap: 0,
                    postgap: 0
                }
            ]
        };
        const t = V0(r.parser, e, Ft(r.envName));
        return {
            type: "leftright",
            mode: r.mode,
            body: [
                t
            ],
            left: r.envName.includes("r") ? "." : "\\{",
            right: r.envName.includes("r") ? "\\}" : ".",
            rightColor: undefined
        };
    },
    htmlBuilder: z0,
    mathmlBuilder: A0
});
S0({
    type: "array",
    names: [
        "align",
        "align*",
        "aligned",
        "split"
    ],
    props: {
        numArgs: 0
    },
    handler,
    htmlBuilder: z0,
    mathmlBuilder: A0
});
S0({
    type: "array",
    names: [
        "gathered",
        "gather",
        "gather*"
    ],
    props: {
        numArgs: 0
    },
    handler (r) {
        if (Ka.has(r.envName)) {
            $e(r);
        }
        const e = {
            cols: [
                {
                    type: "align",
                    align: "c"
                }
            ],
            addJot: true,
            colSeparationType: "gather",
            autoTag: Ht(r.envName),
            emptySingleRow: true,
            leqno: r.parser.settings.leqno
        };
        return V0(r.parser, e, "display");
    },
    htmlBuilder: z0,
    mathmlBuilder: A0
});
S0({
    type: "array",
    names: [
        "alignat",
        "alignat*",
        "alignedat"
    ],
    props: {
        numArgs: 1
    },
    handler,
    htmlBuilder: z0,
    mathmlBuilder: A0
});
S0({
    type: "array",
    names: [
        "equation",
        "equation*"
    ],
    props: {
        numArgs: 0
    },
    handler (r) {
        $e(r);
        const e = {
            autoTag: Ht(r.envName),
            emptySingleRow: true,
            singleRow: true,
            maxNumCols: 1,
            leqno: r.parser.settings.leqno
        };
        return V0(r.parser, e, "display");
    },
    htmlBuilder: z0,
    mathmlBuilder: A0
});
S0({
    type: "array",
    names: [
        "CD"
    ],
    props: {
        numArgs: 0
    },
    handler (r) {
        $e(r);
        return Fa(r.parser);
    },
    htmlBuilder: z0,
    mathmlBuilder: A0
});
__defineMacro("\\nonumber", "\\gdef\\@eqnsw{0}");
__defineMacro("\\notag", "\\nonumber");
__defineFunction({
    type: "text",
    names: [
        "\\hline",
        "\\hdashline"
    ],
    props: {
        numArgs: 0,
        allowedInText: true,
        allowedInMath: true
    },
    handler (r, e) {
        throw new ParseError(`${r.funcName} valid only within array environment`);
    }
});
const dr = u1;
__defineFunction({
    type: "environment",
    names: [
        "\\begin",
        "\\end"
    ],
    props: {
        numArgs: 1,
        argTypes: [
            "text"
        ]
    },
    handler ({ parser, funcName }, e) {
        const nameGroup = e[0];
        if (nameGroup.type !== "ordgroup") {
            throw new ParseError("Invalid environment name", nameGroup);
        }
        let l = "";
        for(let u = 0; u < nameGroup.body.length; ++u){
            l += H(nameGroup.body[u], "textord").text;
        }
        if (funcName === "\\begin") {
            if (!dr.hasOwnProperty(l)) {
                throw new ParseError(`No such environment: ${l}`, nameGroup);
            }
            const h = dr[l];
            const { args, optArgs } = parser.parseArguments(`\\begin{${l}}`, h);
            const g = {
                mode: parser.mode,
                envName: l,
                parser
            };
            const b = h.handler(g, args, optArgs);
            parser.expect("\\end", false);
            const y = parser.nextToken;
            const x = H(parser.parseFunction(), "environment");
            if (x.name !== l) {
                throw new ParseError(`Mismatch: \\begin{${l}} matched by \\end{${x.name}}`, y);
            }
            return b;
        }
        return {
            type: "environment",
            mode: parser.mode,
            name: l,
            nameGroup
        };
    }
});
const m1 = (r, e)=>{
    var r_font = r.font;
    var a = e.withFont(r_font);
    return U(r.body, a);
};
const c1 = (r, e)=>{
    var r_font = r.font;
    var a = e.withFont(r_font);
    return Y(r.body, a);
};
const fr = {
    "\\Bbb": "\\mathbb",
    "\\bold": "\\mathbf",
    "\\frak": "\\mathfrak",
    "\\bm": "\\boldsymbol"
};
__defineFunction({
    type: "font",
    names: [
        "\\mathrm",
        "\\mathit",
        "\\mathbf",
        "\\mathnormal",
        "\\mathsfit",
        "\\mathbb",
        "\\mathcal",
        "\\mathfrak",
        "\\mathscr",
        "\\mathsf",
        "\\mathtt",
        "\\Bbb",
        "\\bold",
        "\\frak"
    ],
    props: {
        numArgs: 1,
        allowedInArgument: true
    },
    handler: ({ parser, funcName }, e)=>{
        var n = Ne(e[0]);
        var l = funcName;
        if (l in fr) {
            l = fr[l];
        }
        return {
            type: "font",
            mode: parser.mode,
            font: l.slice(1),
            body: n
        };
    },
    htmlBuilder: m1,
    mathmlBuilder: c1
});
__defineFunction({
    type: "mclass",
    names: [
        "\\boldsymbol",
        "\\bm"
    ],
    props: {
        numArgs: 1
    },
    handler: ({ parser }, e)=>{
        var a = e[0];
        return {
            type: "mclass",
            mode: parser.mode,
            mclass: Ve(a),
            body: [
                {
                    type: "font",
                    mode: parser.mode,
                    font: "boldsymbol",
                    body: a
                }
            ],
            isCharacterBox: C0(a)
        };
    }
});
__defineFunction({
    type: "font",
    names: [
        "\\rm",
        "\\sf",
        "\\tt",
        "\\bf",
        "\\it",
        "\\cal"
    ],
    props: {
        numArgs: 0,
        allowedInText: true
    },
    handler: ({ parser, funcName, breakOnTokenText }, e)=>{
        var { mode } = parser;
        var u = parser.parseExpression(true, breakOnTokenText);
        var h = `math${funcName.slice(1)}`;
        return {
            type: "font",
            mode,
            font: h,
            body: {
                type: "ordgroup",
                mode: parser.mode,
                body: u
            }
        };
    },
    htmlBuilder: m1,
    mathmlBuilder: c1
});
const Qa = (r, e)=>{
    var e_style = e.style;
    var a = e_style.fracNum();
    var n = e_style.fracDen();
    var l;
    l = e.havingStyle(a);
    var u = U(r.numer, l, e);
    if (r.continued) {
        var h = 8.5 / e.fontMetrics().ptPerEm;
        var c = 3.5 / e.fontMetrics().ptPerEm;
        u.height = u.height < h ? h : u.height;
        u.depth = u.depth < c ? c : u.depth;
    }
    l = e.havingStyle(n);
    var v = U(r.denom, l, e);
    var g;
    var b;
    var y;
    if (r.hasBarLine) {
        if (r.barSize) {
            b = K(r.barSize, e);
            g = te("frac-line", e, b);
        } else {
            g = te("frac-line", e);
        }
        b = g.height;
        y = g.height;
    } else {
        g = null;
        b = 0;
        y = e.fontMetrics().defaultRuleThickness;
    }
    var x;
    var M;
    var T;
    if (e_style.size === N.DISPLAY.size) {
        x = e.fontMetrics().num1;
        if (b > 0) {
            M = 3 * y;
        } else {
            M = 7 * y;
        }
        T = e.fontMetrics().denom1;
    } else {
        if (b > 0) {
            x = e.fontMetrics().num2;
            M = y;
        } else {
            x = e.fontMetrics().num3;
            M = 3 * y;
        }
        T = e.fontMetrics().denom2;
    }
    var C;
    if (g) {
        var I = e.fontMetrics().axisHeight;
        if (x - u.depth - (I + 0.5 * b) < M) {
            x += M - (x - u.depth - (I + 0.5 * b));
        }
        if (I - 0.5 * b - (v.height - T) < M) {
            T += M - (I - 0.5 * b - (v.height - T));
        }
        var O = -(I - 0.5 * b);
        C = G({
            positionType: "individualShift",
            children: [
                {
                    type: "elem",
                    elem: v,
                    shift: T
                },
                {
                    type: "elem",
                    elem: g,
                    shift: O
                },
                {
                    type: "elem",
                    elem: u,
                    shift: -x
                }
            ]
        });
    } else {
        var q = x - u.depth - (v.height - T);
        if (q < M) {
            x += 0.5 * (M - q);
            T += 0.5 * (M - q);
        }
        C = G({
            positionType: "individualShift",
            children: [
                {
                    type: "elem",
                    elem: v,
                    shift: T
                },
                {
                    type: "elem",
                    elem: u,
                    shift: -x
                }
            ]
        });
    }
    l = e.havingStyle(e_style);
    C.height *= l.sizeMultiplier / e.sizeMultiplier;
    C.depth *= l.sizeMultiplier / e.sizeMultiplier;
    var F;
    if (e_style.size === N.DISPLAY.size) {
        F = e.fontMetrics().delim1;
    } else if (e_style.size === N.SCRIPTSCRIPT.size) {
        F = e.havingStyle(N.SCRIPT).fontMetrics().delim2;
    } else {
        F = e.fontMetrics().delim2;
    }
    var V;
    var L;
    if (r.leftDelim == null) {
        V = me(e, [
            "mopen"
        ]);
    } else {
        V = At(r.leftDelim, F, true, e.havingStyle(e_style), r.mode, [
            "mopen"
        ]);
    }
    if (r.continued) {
        L = k([]);
    } else if (r.rightDelim == null) {
        L = me(e, [
            "mclose"
        ]);
    } else {
        L = At(r.rightDelim, F, true, e.havingStyle(e_style), r.mode, [
            "mclose"
        ]);
    }
    return k([
        "mord"
    ].concat(l.sizingClasses(e)), [
        V,
        k([
            "mfrac"
        ], [
            C
        ]),
        L
    ], e);
};
const _a = (r, e)=>{
    var t = new z("mfrac", [
        Y(r.numer, e),
        Y(r.denom, e)
    ]);
    if (!r.hasBarLine) {
        t.setAttribute("linethickness", "0px");
    } else if (r.barSize) {
        var a = K(r.barSize, e);
        t.setAttribute("linethickness", A(a));
    }
    if (r.leftDelim != null || r.rightDelim != null) {
        var n = [];
        if (r.leftDelim != null) {
            var l = new z("mo", [
                new _(r.leftDelim.replace("\\", ""))
            ]);
            l.setAttribute("fence", "true");
            n.push(l);
        }
        n.push(t);
        if (r.rightDelim != null) {
            var u = new z("mo", [
                new _(r.rightDelim.replace("\\", ""))
            ]);
            u.setAttribute("fence", "true");
            n.push(u);
        }
        return Rt(n);
    }
    return t;
};
const d1 = (r, e)=>{
    if (!e) {
        return r;
    }
    var t = {
        type: "styling",
        mode: r.mode,
        style: e,
        body: [
            r
        ]
    };
    return t;
};
__defineFunction({
    type: "genfrac",
    names: [
        "\\cfrac",
        "\\dfrac",
        "\\frac",
        "\\tfrac",
        "\\dbinom",
        "\\binom",
        "\\tbinom",
        "\\\\atopfrac",
        "\\\\bracefrac",
        "\\\\brackfrac"
    ],
    props: {
        numArgs: 2,
        allowedInArgument: true
    },
    handler: ({ parser, funcName }, e)=>{
        var n = e[0];
        var l = e[1];
        var u;
        var leftDelim = null;
        var rightDelim = null;
        switch(funcName){
            case "\\cfrac":
            case "\\dfrac":
            case "\\frac":
            case "\\tfrac":
                u = true;
                break;
            case "\\\\atopfrac":
                u = false;
                break;
            case "\\dbinom":
            case "\\binom":
            case "\\tbinom":
                u = false;
                leftDelim = "(";
                rightDelim = ")";
                break;
            case "\\\\bracefrac":
                u = false;
                leftDelim = "\\{";
                rightDelim = "\\}";
                break;
            case "\\\\brackfrac":
                u = false;
                leftDelim = "[";
                rightDelim = "]";
                break;
            default:
                throw new Error("Unrecognized genfrac command");
        }
        var continued = funcName === "\\cfrac";
        var g = null;
        if (continued || funcName.startsWith("\\d")) {
            g = "display";
        } else if (funcName.startsWith("\\t")) {
            g = "text";
        }
        return d1({
            type: "genfrac",
            mode: parser.mode,
            numer: n,
            denom: l,
            continued,
            hasBarLine: u,
            leftDelim,
            rightDelim,
            barSize: null
        }, g);
    },
    htmlBuilder: Qa,
    mathmlBuilder: _a
});
__defineFunction({
    type: "infix",
    names: [
        "\\over",
        "\\choose",
        "\\atop",
        "\\brace",
        "\\brack"
    ],
    props: {
        numArgs: 0,
        infix: true
    },
    handler ({ parser, funcName, token }) {
        let replaceWith;
        switch(funcName){
            case "\\over":
                replaceWith = "\\frac";
                break;
            case "\\choose":
                replaceWith = "\\binom";
                break;
            case "\\atop":
                replaceWith = "\\\\atopfrac";
                break;
            case "\\brace":
                replaceWith = "\\\\bracefrac";
                break;
            case "\\brack":
                replaceWith = "\\\\brackfrac";
                break;
            default:
                throw new Error("Unrecognized infix genfrac command");
        }
        return {
            type: "infix",
            mode: parser.mode,
            replaceWith,
            token
        };
    }
});
const vr = [
    "display",
    "text",
    "script",
    "scriptscript"
];
const pr = (text)=>{
    let t = null;
    if (text.length > 0) {
        t = text;
        t = t === "." ? null : t;
    }
    return t;
};
__defineFunction({
    type: "genfrac",
    names: [
        "\\genfrac"
    ],
    props: {
        numArgs: 6,
        allowedInArgument: true,
        argTypes: [
            "math",
            "math",
            "size",
            "text",
            "math",
            "math"
        ]
    },
    handler ({ parser }, e) {
        const a = e[4];
        const n = e[5];
        const l = Ne(e[0]);
        const leftDelim = l.type === "atom" && l.family === "open" ? pr(l.text) : null;
        const h = Ne(e[1]);
        const rightDelim = h.type === "atom" && h.family === "close" ? pr(h.text) : null;
        const v = H(e[2], "size");
        let g;
        let barSize = null;
        if (v.isBlank) {
            g = true;
        } else {
            barSize = v.value;
            g = barSize.number > 0;
        }
        let y = null;
        let x = e[3];
        if (x.type === "ordgroup") {
            if (x.body.length > 0) {
                const M = H(x.body[0], "textord");
                y = vr[Number(M.text)];
            }
        } else {
            x = H(x, "textord");
            y = vr[Number(x.text)];
        }
        return d1({
            type: "genfrac",
            mode: parser.mode,
            numer: a,
            denom: n,
            continued: false,
            hasBarLine: g,
            barSize,
            leftDelim,
            rightDelim
        }, y);
    }
});
__defineFunction({
    type: "infix",
    names: [
        "\\above"
    ],
    props: {
        numArgs: 1,
        argTypes: [
            "size"
        ],
        infix: true
    },
    handler ({ parser, funcName, token }, e) {
        return {
            type: "infix",
            mode: parser.mode,
            replaceWith: "\\\\abovefrac",
            size: H(e[0], "size").value,
            token
        };
    }
});
__defineFunction({
    type: "genfrac",
    names: [
        "\\\\abovefrac"
    ],
    props: {
        numArgs: 3,
        argTypes: [
            "math",
            "size",
            "math"
        ]
    },
    handler: ({ parser, funcName }, e)=>{
        var n = e[0];
        var size = H(e[1], "infix").size;
        if (!size) {
            throw new Error(`\\\\abovefrac expected size, but got ${String(size)}`);
        }
        var u = e[2];
        var hasBarLine = size.number > 0;
        return {
            type: "genfrac",
            mode: parser.mode,
            numer: n,
            denom: u,
            continued: false,
            hasBarLine,
            barSize: size,
            leftDelim: null,
            rightDelim: null
        };
    }
});
const f1 = (r, e)=>{
    var e_style = e.style;
    var a;
    var n;
    if (r.type === "supsub") {
        a = r.sup ? U(r.sup, e.havingStyle(e_style.sup()), e) : U(r.sub, e.havingStyle(e_style.sub()), e);
        n = H(r.base, "horizBrace");
    } else {
        n = H(r, "horizBrace");
    }
    var l = U(n.base, e.havingBaseStyle(N.DISPLAY));
    var u = Pe(n, e);
    var h;
    if (n.isOver) {
        h = G({
            positionType: "firstBaseline",
            children: [
                {
                    type: "elem",
                    elem: l
                },
                {
                    type: "kern",
                    size: 0.1
                },
                {
                    type: "elem",
                    elem: u
                }
            ]
        });
        h.children[0].children[0].children[1].classes.push("svg-align");
    } else {
        h = G({
            positionType: "bottom",
            positionData: l.depth + 0.1 + u.height,
            children: [
                {
                    type: "elem",
                    elem: u
                },
                {
                    type: "kern",
                    size: 0.1
                },
                {
                    type: "elem",
                    elem: l
                }
            ]
        });
        h.children[0].children[0].children[0].classes.push("svg-align");
    }
    if (a) {
        var c = k([
            "minner",
            n.isOver ? "mover" : "munder"
        ], [
            h
        ], e);
        if (n.isOver) {
            h = G({
                positionType: "firstBaseline",
                children: [
                    {
                        type: "elem",
                        elem: c
                    },
                    {
                        type: "kern",
                        size: 0.2
                    },
                    {
                        type: "elem",
                        elem: a
                    }
                ]
            });
        } else {
            h = G({
                positionType: "bottom",
                positionData: c.depth + 0.2 + a.height + a.depth,
                children: [
                    {
                        type: "elem",
                        elem: a
                    },
                    {
                        type: "kern",
                        size: 0.2
                    },
                    {
                        type: "elem",
                        elem: c
                    }
                ]
            });
        }
    }
    return k([
        "minner",
        n.isOver ? "mover" : "munder"
    ], [
        h
    ], e);
};
const e4 = (r, e)=>{
    var t = Le(r.label);
    return new z(r.isOver ? "mover" : "munder", [
        Y(r.base, e),
        t
    ]);
};
__defineFunction({
    type: "horizBrace",
    names: [
        "\\overbrace",
        "\\underbrace",
        "\\overbracket",
        "\\underbracket"
    ],
    props: {
        numArgs: 1
    },
    handler ({ parser, funcName }, e) {
        return {
            type: "horizBrace",
            mode: parser.mode,
            label: funcName,
            isOver: funcName.includes("\\over"),
            base: e[0]
        };
    },
    htmlBuilder: f1,
    mathmlBuilder: e4
});
__defineFunction({
    type: "href",
    names: [
        "\\href"
    ],
    props: {
        numArgs: 2,
        argTypes: [
            "url",
            "original"
        ],
        allowedInText: true
    },
    handler: ({ parser }, e)=>{
        var a = e[1];
        var url = H(e[0], "url").url;
        if (parser.settings.isTrusted({
            command: "\\href",
            url
        })) {
            return {
                type: "href",
                mode: parser.mode,
                href: url,
                body: Q(a)
            };
        }
        return parser.formatUnsupportedCmd("\\href");
    },
    htmlBuilder: (r, e)=>{
        var t = a0(r.body, e, false);
        return ga(r.href, [], t, e);
    },
    mathmlBuilder: (r, e)=>{
        var t = U0(r.body, e);
        if (!(t instanceof z)) {
            t = new z("mrow", [
                t
            ]);
        }
        t.setAttribute("href", r.href);
        return t;
    }
});
__defineFunction({
    type: "href",
    names: [
        "\\url"
    ],
    props: {
        numArgs: 1,
        argTypes: [
            "url"
        ],
        allowedInText: true
    },
    handler: ({ parser }, e)=>{
        var url = H(e[0], "url").url;
        if (!parser.settings.isTrusted({
            command: "\\url",
            url
        })) {
            return parser.formatUnsupportedCmd("\\url");
        }
        var n = [];
        for (var u of url){
            if (u === "~") {
                u = "\\textasciitilde";
            }
            n.push({
                type: "textord",
                mode: "text",
                text: u
            });
        }
        var h = {
            type: "text",
            mode: parser.mode,
            font: "\\texttt",
            body: n
        };
        return {
            type: "href",
            mode: parser.mode,
            href: url,
            body: Q(h)
        };
    }
});
__defineFunction({
    type: "hbox",
    names: [
        "\\hbox"
    ],
    props: {
        numArgs: 1,
        argTypes: [
            "text"
        ],
        allowedInText: true,
        primitive: true
    },
    handler ({ parser }, e) {
        return {
            type: "hbox",
            mode: parser.mode,
            body: Q(e[0])
        };
    },
    htmlBuilder (r, e) {
        const t = a0(r.body, e, false);
        return E0(t);
    },
    mathmlBuilder (r, e) {
        return new z("mrow", p0(r.body, e));
    }
});
__defineFunction({
    type: "html",
    names: [
        "\\htmlClass",
        "\\htmlId",
        "\\htmlStyle",
        "\\htmlData"
    ],
    props: {
        numArgs: 2,
        argTypes: [
            "raw",
            "original"
        ],
        allowedInText: true
    },
    handler: ({ parser, funcName, token }, e)=>{
        var string = H(e[0], "raw").string;
        var u = e[1];
        if (parser.settings.strict) {
            parser.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
        }
        var h;
        var attributes = {};
        switch(funcName){
            case "\\htmlClass":
                attributes.class = string;
                h = {
                    command: "\\htmlClass",
                    class: string
                };
                break;
            case "\\htmlId":
                attributes.id = string;
                h = {
                    command: "\\htmlId",
                    id: string
                };
                break;
            case "\\htmlStyle":
                attributes.style = string;
                h = {
                    command: "\\htmlStyle",
                    style: string
                };
                break;
            case "\\htmlData":
                {
                    for(var v = string.split(","), g = 0; g < v.length; g++){
                        var b = v[g];
                        var y = b.indexOf("=");
                        if (y < 0) {
                            throw new ParseError(`\\htmlData key/value '${b}' missing equals sign`);
                        }
                        var x = b.slice(0, y);
                        var M = b.slice(y + 1);
                        attributes[`data-${x.trim()}`] = M;
                    }
                    h = {
                        command: "\\htmlData",
                        attributes
                    };
                    break;
                }
            default:
                throw new Error("Unrecognized html command");
        }
        if (parser.settings.isTrusted(h)) {
            return {
                type: "html",
                mode: parser.mode,
                attributes,
                body: Q(u)
            };
        }
        return parser.formatUnsupportedCmd(funcName);
    },
    htmlBuilder: (r, e)=>{
        var t = a0(r.body, e, false);
        var a = [
            "enclosing"
        ];
        if (r.attributes.class) {
            a.push(...r.attributes.class.trim().split(/\s+/));
        }
        var n = k(a, t, e);
        for(var l in r.attributes){
            if (l !== "class" && r.attributes.hasOwnProperty(l)) {
                n.setAttribute(l, r.attributes[l]);
            }
        }
        return n;
    },
    mathmlBuilder: (r, e)=>U0(r.body, e)
});
__defineFunction({
    type: "htmlmathml",
    names: [
        "\\html@mathml"
    ],
    props: {
        numArgs: 2,
        allowedInArgument: true,
        allowedInText: true
    },
    handler: ({ parser }, e)=>({
            type: "htmlmathml",
            mode: parser.mode,
            html: Q(e[0]),
            mathml: Q(e[1])
        }),
    htmlBuilder: (r, e)=>{
        var t = a0(r.html, e, false);
        return E0(t);
    },
    mathmlBuilder: (r, e)=>U0(r.mathml, e)
});
const ot = (e)=>{
    if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e)) {
        return {
            number: +e,
            unit: "bp"
        };
    }
    const t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
    if (!t) {
        throw new ParseError(`Invalid size: '${e}' in \\includegraphics`);
    }
    const a = {
        number: +(t[1] + t[2]),
        unit: t[3]
    };
    if (!qr(a)) {
        throw new ParseError(`Invalid unit: '${a.unit}' in \\includegraphics.`);
    }
    return a;
};
__defineFunction({
    type: "includegraphics",
    names: [
        "\\includegraphics"
    ],
    props: {
        numArgs: 1,
        numOptionalArgs: 1,
        argTypes: [
            "raw",
            "url"
        ],
        allowedInText: false
    },
    handler: ({ parser }, e, t)=>{
        var n = {
            number: 0,
            unit: "em"
        };
        var l = {
            number: 0.9,
            unit: "em"
        };
        var totalheight = {
            number: 0,
            unit: "em"
        };
        var alt = "";
        if (t[0]) {
            var c = H(t[0], "raw").string;
            for(var v = c.split(","), g = 0; g < v.length; g++){
                var b = v[g].split("=");
                if (b.length === 2) {
                    var y = b[1].trim();
                    switch(b[0].trim()){
                        case "alt":
                            alt = y;
                            break;
                        case "width":
                            n = ot(y);
                            break;
                        case "height":
                            l = ot(y);
                            break;
                        case "totalheight":
                            totalheight = ot(y);
                            break;
                        default:
                            throw new ParseError(`Invalid key: '${b[0]}' in \\includegraphics.`);
                    }
                }
            }
        }
        var url = H(e[0], "url").url;
        if (alt === "") {
            alt = url;
            alt = alt.replace(/^.*[\\/]/, "");
            alt = alt.substring(0, alt.lastIndexOf("."));
        }
        if (parser.settings.isTrusted({
            command: "\\includegraphics",
            url
        })) {
            return {
                type: "includegraphics",
                mode: parser.mode,
                alt,
                width: n,
                height: l,
                totalheight,
                src: url
            };
        }
        return parser.formatUnsupportedCmd("\\includegraphics");
    },
    htmlBuilder: (r, e)=>{
        var t = K(r.height, e);
        var a = 0;
        if (r.totalheight.number > 0) {
            a = K(r.totalheight, e) - t;
        }
        var n = 0;
        if (r.width.number > 0) {
            n = K(r.width, e);
        }
        var l = {
            height: A(t + a)
        };
        if (n > 0) {
            l.width = A(n);
        }
        if (a > 0) {
            l.verticalAlign = A(-a);
        }
        var u = new ia(r.src, r.alt, l);
        u.height = t;
        u.depth = a;
        return u;
    },
    mathmlBuilder: (r, e)=>{
        var t = new z("mglyph", []);
        t.setAttribute("alt", r.alt);
        var a = K(r.height, e);
        var n = 0;
        if (r.totalheight.number > 0) {
            n = K(r.totalheight, e) - a;
            t.setAttribute("valign", A(-n));
        }
        t.setAttribute("height", A(a + n));
        if (r.width.number > 0) {
            var l = K(r.width, e);
            t.setAttribute("width", A(l));
        }
        t.setAttribute("src", r.src);
        return t;
    }
});
__defineFunction({
    type: "kern",
    names: [
        "\\kern",
        "\\mkern",
        "\\hskip",
        "\\mskip"
    ],
    props: {
        numArgs: 1,
        argTypes: [
            "size"
        ],
        primitive: true,
        allowedInText: true
    },
    handler ({ parser, funcName }, e) {
        const n = H(e[0], "size");
        if (parser.settings.strict) {
            const l = funcName[1] === "m";
            const u = n.value.unit === "mu";
            l ? (u || parser.settings.reportNonstrict("mathVsTextUnits", `LaTeX's ${funcName} supports only mu units, ${`not ${n.value.unit} units`}`), parser.mode !== "math" && parser.settings.reportNonstrict("mathVsTextUnits", `LaTeX's ${funcName} works only in math mode`)) : u && parser.settings.reportNonstrict("mathVsTextUnits", `LaTeX's ${funcName} doesn't support mu units`);
        }
        return {
            type: "kern",
            mode: parser.mode,
            dimension: n.value
        };
    },
    htmlBuilder (r, e) {
        return Hr(r.dimension, e);
    },
    mathmlBuilder (r, e) {
        const t = K(r.dimension, e);
        return new Vr(t);
    }
});
__defineFunction({
    type: "lap",
    names: [
        "\\mathllap",
        "\\mathrlap",
        "\\mathclap"
    ],
    props: {
        numArgs: 1,
        allowedInText: true
    },
    handler: ({ parser, funcName }, e)=>{
        var n = e[0];
        return {
            type: "lap",
            mode: parser.mode,
            alignment: funcName.slice(5),
            body: n
        };
    },
    htmlBuilder: (r, e)=>{
        var t;
        if (r.alignment === "clap") {
            t = k([], [
                U(r.body, e)
            ]);
            t = k([
                "inner"
            ], [
                t
            ], e);
        } else {
            t = k([
                "inner"
            ], [
                U(r.body, e)
            ]);
        }
        var a = k([
            "fix"
        ], []);
        var n = k([
            r.alignment
        ], [
            t,
            a
        ], e);
        var l = k([
            "strut"
        ]);
        l.style.height = A(n.height + n.depth);
        if (n.depth) {
            l.style.verticalAlign = A(-n.depth);
        }
        n.children.unshift(l);
        n = k([
            "thinbox"
        ], [
            n
        ], e);
        return k([
            "mord",
            "vbox"
        ], [
            n
        ], e);
    },
    mathmlBuilder: (r, e)=>{
        var t = new z("mpadded", [
            Y(r.body, e)
        ]);
        if (r.alignment !== "rlap") {
            var a = r.alignment === "llap" ? "-1" : "-0.5";
            t.setAttribute("lspace", `${a}width`);
        }
        t.setAttribute("width", "0px");
        return t;
    }
});
__defineFunction({
    type: "styling",
    names: [
        "\\(",
        "$"
    ],
    props: {
        numArgs: 0,
        allowedInText: true,
        allowedInMath: false
    },
    handler ({ funcName, parser }, e) {
        const parser_mode = parser.mode;
        parser.switchMode("math");
        const l = funcName === "\\(" ? "\\)" : "$";
        const u = parser.parseExpression(false, l);
        parser.expect(l);
        parser.switchMode(parser_mode);
        return {
            type: "styling",
            mode: parser.mode,
            style: "text",
            body: u
        };
    }
});
__defineFunction({
    type: "text",
    names: [
        "\\)",
        "\\]"
    ],
    props: {
        numArgs: 0,
        allowedInText: true,
        allowedInMath: false
    },
    handler (r, e) {
        throw new ParseError(`Mismatched ${r.funcName}`);
    }
});
const gr = (r, e)=>{
    switch(e.style.size){
        case N.DISPLAY.size:
            return r.display;
        case N.TEXT.size:
            return r.text;
        case N.SCRIPT.size:
            return r.script;
        case N.SCRIPTSCRIPT.size:
            return r.scriptscript;
        default:
            return r.text;
    }
};
__defineFunction({
    type: "mathchoice",
    names: [
        "\\mathchoice"
    ],
    props: {
        numArgs: 4,
        primitive: true
    },
    handler: ({ parser }, e)=>({
            type: "mathchoice",
            mode: parser.mode,
            display: Q(e[0]),
            text: Q(e[1]),
            script: Q(e[2]),
            scriptscript: Q(e[3])
        }),
    htmlBuilder: (r, e)=>{
        var t = gr(r, e);
        var a = a0(t, e, false);
        return E0(a);
    },
    mathmlBuilder: (r, e)=>{
        var t = gr(r, e);
        return U0(t, e);
    }
});
const v1 = (r, e, t, a, n, l, u)=>{
    r = k([], [
        r
    ]);
    var h = t && C0(t);
    var c;
    var v;
    if (e) {
        var g = U(e, a.havingStyle(n.sup()), a);
        v = {
            elem: g,
            kern: Math.max(a.fontMetrics().bigOpSpacing1, a.fontMetrics().bigOpSpacing3 - g.depth)
        };
    }
    if (t) {
        var b = U(t, a.havingStyle(n.sub()), a);
        c = {
            elem: b,
            kern: Math.max(a.fontMetrics().bigOpSpacing2, a.fontMetrics().bigOpSpacing4 - b.height)
        };
    }
    var y;
    if (v && c) {
        var x = a.fontMetrics().bigOpSpacing5 + c.elem.height + c.elem.depth + c.kern + r.depth + u;
        y = G({
            positionType: "bottom",
            positionData: x,
            children: [
                {
                    type: "kern",
                    size: a.fontMetrics().bigOpSpacing5
                },
                {
                    type: "elem",
                    elem: c.elem,
                    marginLeft: A(-l)
                },
                {
                    type: "kern",
                    size: c.kern
                },
                {
                    type: "elem",
                    elem: r
                },
                {
                    type: "kern",
                    size: v.kern
                },
                {
                    type: "elem",
                    elem: v.elem,
                    marginLeft: A(l)
                },
                {
                    type: "kern",
                    size: a.fontMetrics().bigOpSpacing5
                }
            ]
        });
    } else if (c) {
        var M = r.height - u;
        y = G({
            positionType: "top",
            positionData: M,
            children: [
                {
                    type: "kern",
                    size: a.fontMetrics().bigOpSpacing5
                },
                {
                    type: "elem",
                    elem: c.elem,
                    marginLeft: A(-l)
                },
                {
                    type: "kern",
                    size: c.kern
                },
                {
                    type: "elem",
                    elem: r
                }
            ]
        });
    } else if (v) {
        var T = r.depth + u;
        y = G({
            positionType: "bottom",
            positionData: T,
            children: [
                {
                    type: "elem",
                    elem: r
                },
                {
                    type: "kern",
                    size: v.kern
                },
                {
                    type: "elem",
                    elem: v.elem,
                    marginLeft: A(l)
                },
                {
                    type: "kern",
                    size: a.fontMetrics().bigOpSpacing5
                }
            ]
        });
    } else {
        return r;
    }
    var C = [
        y
    ];
    if (c && l !== 0 && !h) {
        var q = k([
            "mspace"
        ], [], a);
        q.style.marginRight = A(l);
        C.unshift(q);
    }
    return k([
        "mop",
        "op-limits"
    ], C, a);
};
const p1 = new Set([
    "\\smallint"
]);
const le = (r, e)=>{
    var t;
    var a;
    var n = false;
    var l;
    if (r.type === "supsub") {
        t = r.sup;
        a = r.sub;
        l = H(r.base, "op");
        n = true;
    } else {
        l = H(r, "op");
    }
    var e_style = e.style;
    var h = false;
    if (e_style.size === N.DISPLAY.size && l.symbol && !p1.has(l.name)) {
        h = true;
    }
    var c;
    if (l.symbol) {
        var v = h ? "Size2-Regular" : "Size1-Regular";
        var g = "";
        if (l.name === "\\oiint" || l.name === "\\oiiint") {
            g = l.name.slice(1);
            l.name = g === "oiint" ? "\\iint" : "\\iiint";
        }
        c = s0(l.name, v, "math", e, [
            "mop",
            "op-symbol",
            h ? "large-op" : "small-op"
        ]);
        if (g.length > 0) {
            var b = c.italic;
            var y = Lr(`${g}Size${h ? "2" : "1"}`, e);
            c = G({
                positionType: "individualShift",
                children: [
                    {
                        type: "elem",
                        elem: c,
                        shift: 0
                    },
                    {
                        type: "elem",
                        elem: y,
                        shift: h ? 0.08 : 0
                    }
                ]
            });
            l.name = `\\${g}`;
            c.classes.unshift("mop");
            c.italic = b;
        }
    } else if (l.body) {
        var x = a0(l.body, e, true);
        if (x.length === 1 && x[0] instanceof f0) {
            c = x[0];
            c.classes[0] = "mop";
        } else {
            c = k([
                "mop"
            ], x, e);
        }
    } else {
        var M = [];
        for(var T = 1; T < l.name.length; T++){
            M.push(qt(l.name[T], l.mode, e));
        }
        c = k([
            "mop"
        ], M, e);
    }
    var C = 0;
    var q = 0;
    if ((c instanceof f0 || l.name === "\\oiint" || l.name === "\\oiiint") && !l.suppressBaseShift) {
        C = (c.height - c.depth) / 2 - e.fontMetrics().axisHeight;
        q = c.italic || 0;
    }
    if (n) {
        return v1(c, t, a, e, e_style, q, C);
    }
    if (C) {
        c.style.position = "relative";
        c.style.top = A(C);
    }
    return c;
};
const de = (r, e)=>{
    var t;
    if (r.symbol) {
        t = new z("mo", [
            b0(r.name, r.mode)
        ]);
        if (p1.has(r.name)) {
            t.setAttribute("largeop", "false");
        }
    } else if (r.body) {
        t = new z("mo", p0(r.body, e));
    } else {
        t = new z("mi", [
            new _(r.name.slice(1))
        ]);
        var a = new z("mo", [
            b0("\u2061", "text")
        ]);
        if (r.parentIsSupSub) {
            t = new z("mrow", [
                t,
                a
            ]);
        } else {
            t = Ur([
                t,
                a
            ]);
        }
    }
    return t;
};
const t4 = {
    "∏": "\\prod",
    "∐": "\\coprod",
    "∑": "\\sum",
    "⋀": "\\bigwedge",
    "⋁": "\\bigvee",
    "⋂": "\\bigcap",
    "⋃": "\\bigcup",
    "⨀": "\\bigodot",
    "⨁": "\\bigoplus",
    "⨂": "\\bigotimes",
    "⨄": "\\biguplus",
    "⨆": "\\bigsqcup"
};
__defineFunction({
    type: "op",
    names: [
        "\\coprod",
        "\\bigvee",
        "\\bigwedge",
        "\\biguplus",
        "\\bigcap",
        "\\bigcup",
        "\\intop",
        "\\prod",
        "\\sum",
        "\\bigotimes",
        "\\bigoplus",
        "\\bigodot",
        "\\bigsqcup",
        "\\smallint",
        "∏",
        "∐",
        "∑",
        "⋀",
        "⋁",
        "⋂",
        "⋃",
        "⨀",
        "⨁",
        "⨂",
        "⨄",
        "⨆"
    ],
    props: {
        numArgs: 0
    },
    handler: ({ parser, funcName }, e)=>{
        var n = funcName;
        if (n.length === 1) {
            n = t4[n];
        }
        return {
            type: "op",
            mode: parser.mode,
            limits: true,
            parentIsSupSub: false,
            symbol: true,
            name: n
        };
    },
    htmlBuilder: le,
    mathmlBuilder: de
});
__defineFunction({
    type: "op",
    names: [
        "\\mathop"
    ],
    props: {
        numArgs: 1,
        primitive: true
    },
    handler: ({ parser }, e)=>{
        var a = e[0];
        return {
            type: "op",
            mode: parser.mode,
            limits: false,
            parentIsSupSub: false,
            symbol: false,
            body: Q(a)
        };
    },
    htmlBuilder: le,
    mathmlBuilder: de
});
const r4 = {
    "∫": "\\int",
    "∬": "\\iint",
    "∭": "\\iiint",
    "∮": "\\oint",
    "∯": "\\oiint",
    "∰": "\\oiiint"
};
__defineFunction({
    type: "op",
    names: [
        "\\arcsin",
        "\\arccos",
        "\\arctan",
        "\\arctg",
        "\\arcctg",
        "\\arg",
        "\\ch",
        "\\cos",
        "\\cosec",
        "\\cosh",
        "\\cot",
        "\\cotg",
        "\\coth",
        "\\csc",
        "\\ctg",
        "\\cth",
        "\\deg",
        "\\dim",
        "\\exp",
        "\\hom",
        "\\ker",
        "\\lg",
        "\\ln",
        "\\log",
        "\\sec",
        "\\sin",
        "\\sinh",
        "\\sh",
        "\\tan",
        "\\tanh",
        "\\tg",
        "\\th"
    ],
    props: {
        numArgs: 0
    },
    handler ({ parser, funcName }) {
        return {
            type: "op",
            mode: parser.mode,
            limits: false,
            parentIsSupSub: false,
            symbol: false,
            name: funcName
        };
    },
    htmlBuilder: le,
    mathmlBuilder: de
});
__defineFunction({
    type: "op",
    names: [
        "\\det",
        "\\gcd",
        "\\inf",
        "\\lim",
        "\\max",
        "\\min",
        "\\Pr",
        "\\sup"
    ],
    props: {
        numArgs: 0
    },
    handler ({ parser, funcName }) {
        return {
            type: "op",
            mode: parser.mode,
            limits: true,
            parentIsSupSub: false,
            symbol: false,
            name: funcName
        };
    },
    htmlBuilder: le,
    mathmlBuilder: de
});
__defineFunction({
    type: "op",
    names: [
        "\\int",
        "\\iint",
        "\\iiint",
        "\\oint",
        "\\oiint",
        "\\oiiint",
        "∫",
        "∬",
        "∭",
        "∮",
        "∯",
        "∰"
    ],
    props: {
        numArgs: 0,
        allowedInArgument: true
    },
    handler ({ parser, funcName }) {
        let a = funcName;
        if (a.length === 1) {
            a = r4[a];
        }
        return {
            type: "op",
            mode: parser.mode,
            limits: false,
            parentIsSupSub: false,
            symbol: true,
            name: a
        };
    },
    htmlBuilder: le,
    mathmlBuilder: de
});
const g1 = (r, e)=>{
    var t;
    var a;
    var n = false;
    var l;
    if (r.type === "supsub") {
        t = r.sup;
        a = r.sub;
        l = H(r.base, "operatorname");
        n = true;
    } else {
        l = H(r, "operatorname");
    }
    var u;
    if (l.body.length > 0) {
        var h = l.body.map((b)=>{
            var y = "text" in b ? b.text : undefined;
            if (typeof y === "string") {
                return {
                    type: "textord",
                    mode: b.mode,
                    text: y
                };
            }
            return b;
        });
        for(var c = a0(h, e.withFont("mathrm"), true), v = 0; v < c.length; v++){
            var g = c[v];
            if (g instanceof f0) {
                g.text = g.text.replace(/\u2212/, "-").replace(/\u2217/, "*");
            }
        }
        u = k([
            "mop"
        ], c, e);
    } else {
        u = k([
            "mop"
        ], [], e);
    }
    if (n) {
        return v1(u, t, a, e, e.style, 0, 0);
    }
    return u;
};
const a4 = (r, e)=>{
    for(var t = p0(r.body, e.withFont("mathrm")), a = true, n = 0; n < t.length; n++){
        var l = t[n];
        if (!(l instanceof Vr)) {
            if (l instanceof z) {
                switch(l.type){
                    case "mi":
                    case "mn":
                    case "mspace":
                    case "mtext":
                        break;
                    case "mo":
                        {
                            var u = l.children[0];
                            if (l.children.length === 1 && u instanceof _) {
                                u.text = u.text.replace(/\u2212/, "-").replace(/\u2217/, "*");
                            } else {
                                a = false;
                            }
                            break;
                        }
                    default:
                        a = false;
                }
            } else {
                a = false;
            }
        }
    }
    if (a) {
        var h = t.map((g)=>g.toText()).join("");
        t = [
            new _(h)
        ];
    }
    var c = new z("mi", t);
    c.setAttribute("mathvariant", "normal");
    var v = new z("mo", [
        b0("\u2061", "text")
    ]);
    if (r.parentIsSupSub) {
        return new z("mrow", [
            c,
            v
        ]);
    }
    return Ur([
        c,
        v
    ]);
};
__defineFunction({
    type: "operatorname",
    names: [
        "\\operatorname@",
        "\\operatornamewithlimits"
    ],
    props: {
        numArgs: 1
    },
    handler: ({ parser, funcName }, e)=>{
        var n = e[0];
        return {
            type: "operatorname",
            mode: parser.mode,
            body: Q(n),
            alwaysHandleSupSub: funcName === "\\operatornamewithlimits",
            limits: false,
            parentIsSupSub: false
        };
    },
    htmlBuilder: g1,
    mathmlBuilder: a4
});
__defineMacro("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
$0({
    type: "ordgroup",
    htmlBuilder (r, e) {
        if (r.semisimple) {
            return E0(a0(r.body, e, false));
        }
        return k([
            "mord"
        ], a0(r.body, e, true), e);
    },
    mathmlBuilder (r, e) {
        return U0(r.body, e, true);
    }
});
__defineFunction({
    type: "overline",
    names: [
        "\\overline"
    ],
    props: {
        numArgs: 1
    },
    handler ({ parser }, e) {
        const a = e[0];
        return {
            type: "overline",
            mode: parser.mode,
            body: a
        };
    },
    htmlBuilder (r, e) {
        const t = U(r.body, e.havingCrampedStyle());
        const a = te("overline-line", e);
        const defaultRuleThickness = e.fontMetrics().defaultRuleThickness;
        const l = G({
            positionType: "firstBaseline",
            children: [
                {
                    type: "elem",
                    elem: t
                },
                {
                    type: "kern",
                    size: 3 * defaultRuleThickness
                },
                {
                    type: "elem",
                    elem: a
                },
                {
                    type: "kern",
                    size: defaultRuleThickness
                }
            ]
        });
        return k([
            "mord",
            "overline"
        ], [
            l
        ], e);
    },
    mathmlBuilder (r, e) {
        const t = new z("mo", [
            new _("‾")
        ]);
        t.setAttribute("stretchy", "true");
        const a = new z("mover", [
            Y(r.body, e),
            t
        ]);
        a.setAttribute("accent", "true");
        return a;
    }
});
__defineFunction({
    type: "phantom",
    names: [
        "\\phantom"
    ],
    props: {
        numArgs: 1,
        allowedInText: true
    },
    handler: ({ parser }, e)=>{
        var a = e[0];
        return {
            type: "phantom",
            mode: parser.mode,
            body: Q(a)
        };
    },
    htmlBuilder: (r, e)=>{
        var t = a0(r.body, e.withPhantom(), false);
        return E0(t);
    },
    mathmlBuilder: (r, e)=>{
        var t = p0(r.body, e);
        return new z("mphantom", t);
    }
});
__defineMacro("\\hphantom", "\\smash{\\phantom{#1}}");
__defineFunction({
    type: "vphantom",
    names: [
        "\\vphantom"
    ],
    props: {
        numArgs: 1,
        allowedInText: true
    },
    handler: ({ parser }, e)=>{
        var a = e[0];
        return {
            type: "vphantom",
            mode: parser.mode,
            body: a
        };
    },
    htmlBuilder: (r, e)=>{
        var t = k([
            "inner"
        ], [
            U(r.body, e.withPhantom())
        ]);
        var a = k([
            "fix"
        ], []);
        return k([
            "mord",
            "rlap"
        ], [
            t,
            a
        ], e);
    },
    mathmlBuilder: (r, e)=>{
        var t = p0(Q(r.body), e);
        var a = new z("mphantom", t);
        var n = new z("mpadded", [
            a
        ]);
        n.setAttribute("width", "0px");
        return n;
    }
});
__defineFunction({
    type: "raisebox",
    names: [
        "\\raisebox"
    ],
    props: {
        numArgs: 2,
        argTypes: [
            "size",
            "hbox"
        ],
        allowedInText: true
    },
    handler ({ parser }, e) {
        const value = H(e[0], "size").value;
        const n = e[1];
        return {
            type: "raisebox",
            mode: parser.mode,
            dy: value,
            body: n
        };
    },
    htmlBuilder (r, e) {
        const t = U(r.body, e);
        const a = K(r.dy, e);
        return G({
            positionType: "shift",
            positionData: -a,
            children: [
                {
                    type: "elem",
                    elem: t
                }
            ]
        });
    },
    mathmlBuilder (r, e) {
        const t = new z("mpadded", [
            Y(r.body, e)
        ]);
        const a = r.dy.number + r.dy.unit;
        t.setAttribute("voffset", a);
        return t;
    }
});
__defineFunction({
    type: "internal",
    names: [
        "\\relax"
    ],
    props: {
        numArgs: 0,
        allowedInText: true,
        allowedInArgument: true
    },
    handler ({ parser }) {
        return {
            type: "internal",
            mode: parser.mode
        };
    }
});
__defineFunction({
    type: "rule",
    names: [
        "\\rule"
    ],
    props: {
        numArgs: 2,
        numOptionalArgs: 1,
        allowedInText: true,
        allowedInMath: true,
        argTypes: [
            "size",
            "size",
            "size"
        ]
    },
    handler ({ parser }, e, t) {
        const n = t[0];
        const l = H(e[0], "size");
        const u = H(e[1], "size");
        return {
            type: "rule",
            mode: parser.mode,
            shift: n && H(n, "size").value,
            width: l.value,
            height: u.value
        };
    },
    htmlBuilder (r, e) {
        const t = k([
            "mord",
            "rule"
        ], [], e);
        const a = K(r.width, e);
        const n = K(r.height, e);
        const l = r.shift ? K(r.shift, e) : 0;
        t.style.borderRightWidth = A(a);
        t.style.borderTopWidth = A(n);
        t.style.bottom = A(l);
        t.width = a;
        t.height = n + l;
        t.depth = -l;
        t.maxFontSize = n * 1.125 * e.sizeMultiplier;
        return t;
    },
    mathmlBuilder (r, e) {
        const t = K(r.width, e);
        const a = K(r.height, e);
        const n = r.shift ? K(r.shift, e) : 0;
        const l = e.color && e.getColor() || "black";
        const u = new z("mspace");
        u.setAttribute("mathbackground", l);
        u.setAttribute("width", A(t));
        u.setAttribute("height", A(a));
        const h = new z("mpadded", [
            u
        ]);
        if (n >= 0) {
            h.setAttribute("height", A(n));
        } else {
            h.setAttribute("height", A(n));
            h.setAttribute("depth", A(-n));
        }
        h.setAttribute("voffset", A(n));
        return h;
    }
});
function b1(body, e, t) {
    for(var a = a0(body, e, false), n = e.sizeMultiplier / t.sizeMultiplier, l = 0; l < a.length; l++){
        const u = a[l].classes.indexOf("sizing");
        if (u < 0) {
            Array.prototype.push.apply(a[l].classes, e.sizingClasses(t));
        } else if (a[l].classes[u + 1] === `reset-size${e.size}`) {
            a[l].classes[u + 1] = `reset-size${t.size}`;
        }
        a[l].height *= n;
        a[l].depth *= n;
    }
    return E0(a);
}
const names = [
    "\\tiny",
    "\\sixptsize",
    "\\scriptsize",
    "\\footnotesize",
    "\\small",
    "\\normalsize",
    "\\large",
    "\\Large",
    "\\LARGE",
    "\\huge",
    "\\Huge"
];
const n4 = (r, e)=>{
    var t = e.havingSize(r.size);
    return b1(r.body, t, e);
};
__defineFunction({
    type: "sizing",
    names,
    props: {
        numArgs: 0,
        allowedInText: true
    },
    handler: ({ breakOnTokenText, funcName, parser }, e)=>{
        var l = parser.parseExpression(false, breakOnTokenText);
        return {
            type: "sizing",
            mode: parser.mode,
            size: names.indexOf(funcName) + 1,
            body: l
        };
    },
    htmlBuilder: n4,
    mathmlBuilder: (r, e)=>{
        var t = e.havingSize(r.size);
        var a = p0(r.body, t);
        var n = new z("mstyle", a);
        n.setAttribute("mathsize", A(t.sizeMultiplier));
        return n;
    }
});
__defineFunction({
    type: "smash",
    names: [
        "\\smash"
    ],
    props: {
        numArgs: 1,
        numOptionalArgs: 1,
        allowedInText: true
    },
    handler: ({ parser }, e, t)=>{
        var smashHeight = false;
        var smashDepth = false;
        var u = t[0] && H(t[0], "ordgroup");
        if (u) {
            var h = "";
            for(var c = 0; c < u.body.length; ++c){
                var v = u.body[c];
                h = Ge(v).text;
                if (h === "t") {
                    smashHeight = true;
                } else if (h === "b") {
                    smashDepth = true;
                } else {
                    smashHeight = false;
                    smashDepth = false;
                    break;
                }
            }
        } else {
            smashHeight = true;
            smashDepth = true;
        }
        var g = e[0];
        return {
            type: "smash",
            mode: parser.mode,
            body: g,
            smashHeight,
            smashDepth
        };
    },
    htmlBuilder: (r, e)=>{
        var t = k([], [
            U(r.body, e)
        ]);
        if (!r.smashHeight && !r.smashDepth) {
            return t;
        }
        if (r.smashHeight) {
            t.height = 0;
        }
        if (r.smashDepth) {
            t.depth = 0;
        }
        if (r.smashHeight && r.smashDepth) {
            return k([
                "mord",
                "smash"
            ], [
                t
            ], e);
        }
        if (t.children) {
            for(var a = 0; a < t.children.length; a++){
                if (r.smashHeight) {
                    t.children[a].height = 0;
                }
                if (r.smashDepth) {
                    t.children[a].depth = 0;
                }
            }
        }
        var n = G({
            positionType: "firstBaseline",
            children: [
                {
                    type: "elem",
                    elem: t
                }
            ]
        });
        return k([
            "mord"
        ], [
            n
        ], e);
    },
    mathmlBuilder: (r, e)=>{
        var t = new z("mpadded", [
            Y(r.body, e)
        ]);
        if (r.smashHeight) {
            t.setAttribute("height", "0px");
        }
        if (r.smashDepth) {
            t.setAttribute("depth", "0px");
        }
        return t;
    }
});
__defineFunction({
    type: "sqrt",
    names: [
        "\\sqrt"
    ],
    props: {
        numArgs: 1,
        numOptionalArgs: 1
    },
    handler ({ parser }, e, t) {
        const index = t[0];
        const l = e[0];
        return {
            type: "sqrt",
            mode: parser.mode,
            body: l,
            index
        };
    },
    htmlBuilder (r, e) {
        let t = U(r.body, e.havingCrampedStyle());
        if (t.height === 0) {
            t.height = e.fontMetrics().xHeight;
        }
        t = re(t, e);
        const a = e.fontMetrics();
        const a_defaultRuleThickness = a.defaultRuleThickness;
        let l = a_defaultRuleThickness;
        if (e.style.id < N.TEXT.id) {
            l = e.fontMetrics().xHeight;
        }
        let u = a_defaultRuleThickness + l / 4;
        const h = t.height + t.depth + u + a_defaultRuleThickness;
        const { span, ruleWidth, advanceWidth } = Xa(h, e);
        const b = span.height - ruleWidth;
        if (b > t.height + t.depth + u) {
            u = (u + b - t.height - t.depth) / 2;
        }
        const y = span.height - t.height - u - ruleWidth;
        t.style.paddingLeft = A(advanceWidth);
        const x = G({
            positionType: "firstBaseline",
            children: [
                {
                    type: "elem",
                    elem: t,
                    wrapperClasses: [
                        "svg-align"
                    ]
                },
                {
                    type: "kern",
                    size: -(t.height + y)
                },
                {
                    type: "elem",
                    elem: span
                },
                {
                    type: "kern",
                    size: ruleWidth
                }
            ]
        });
        if (r.index) {
            const M = e.havingStyle(N.SCRIPTSCRIPT);
            const T = U(r.index, M, e);
            const C = 0.6 * (x.height - x.depth);
            const q = G({
                positionType: "shift",
                positionData: -C,
                children: [
                    {
                        type: "elem",
                        elem: T
                    }
                ]
            });
            const I = k([
                "root"
            ], [
                q
            ]);
            return k([
                "mord",
                "sqrt"
            ], [
                I,
                x
            ], e);
        } else {
            return k([
                "mord",
                "sqrt"
            ], [
                x
            ], e);
        }
    },
    mathmlBuilder ({ body, index }, e) {
        if (index) {
            return new z("mroot", [
                Y(body, e),
                Y(index, e)
            ]);
        }
        return new z("msqrt", [
            Y(body, e)
        ]);
    }
});
const yr = {
    display: N.DISPLAY,
    text: N.TEXT,
    script: N.SCRIPT,
    scriptscript: N.SCRIPTSCRIPT
};
__defineFunction({
    type: "styling",
    names: [
        "\\displaystyle",
        "\\textstyle",
        "\\scriptstyle",
        "\\scriptscriptstyle"
    ],
    props: {
        numArgs: 0,
        allowedInText: true,
        primitive: true
    },
    handler ({ breakOnTokenText, funcName, parser }, e) {
        const l = parser.parseExpression(true, breakOnTokenText);
        const style = funcName.slice(1, funcName.length - 5);
        return {
            type: "styling",
            mode: parser.mode,
            style,
            body: l
        };
    },
    htmlBuilder (r, e) {
        const t = yr[r.style];
        const a = e.havingStyle(t).withFont("");
        return b1(r.body, a, e);
    },
    mathmlBuilder (r, e) {
        const t = yr[r.style];
        const a = e.havingStyle(t);
        const n = p0(r.body, a);
        const l = new z("mstyle", n);
        const u = {
            display: [
                "0",
                "true"
            ],
            text: [
                "0",
                "false"
            ],
            script: [
                "1",
                "false"
            ],
            scriptscript: [
                "2",
                "false"
            ]
        };
        const h = u[r.style];
        l.setAttribute("scriptlevel", h[0]);
        l.setAttribute("displaystyle", h[1]);
        return l;
    }
});
const i4 = (e, t)=>{
    const e_base = e.base;
    if (e_base) {
        if (e_base.type === "op") {
            const n = e_base.limits && (t.style.size === N.DISPLAY.size || e_base.alwaysHandleSupSub);
            if (n) {
                return le;
            }
            return null;
        } else if (e_base.type === "operatorname") {
            const l = e_base.alwaysHandleSupSub && (t.style.size === N.DISPLAY.size || e_base.limits);
            if (l) {
                return g1;
            }
            return null;
        } else {
            if (e_base.type === "accent") {
                if (C0(e_base.base)) {
                    return Nt;
                }
                return null;
            }
            if (e_base.type === "horizBrace") {
                const u = !e.sub;
                if (u === e_base.isOver) {
                    return f1;
                }
                return null;
            } else {
                return null;
            }
        }
    } else {
        return null;
    }
};
$0({
    type: "supsub",
    htmlBuilder (r, e) {
        const t = i4(r, e);
        if (t) {
            return t(r, e);
        }
        const { base, sup, sub } = r;
        const u = U(base, e);
        let h;
        let c;
        const v = e.fontMetrics();
        let g = 0;
        let b = 0;
        const y = base && C0(base);
        if (sup) {
            const x = e.havingStyle(e.style.sup());
            h = U(sup, x, e);
            if (!y) {
                g = u.height - x.fontMetrics().supDrop * x.sizeMultiplier / e.sizeMultiplier;
            }
        }
        if (sub) {
            const M = e.havingStyle(e.style.sub());
            c = U(sub, M, e);
            if (!y) {
                b = u.depth + M.fontMetrics().subDrop * M.sizeMultiplier / e.sizeMultiplier;
            }
        }
        let T;
        if (e.style === N.DISPLAY) {
            T = v.sup1;
        } else if (e.style.cramped) {
            T = v.sup3;
        } else {
            T = v.sup2;
        }
        const e_sizeMultiplier = e.sizeMultiplier;
        const marginRight = A(0.5 / v.ptPerEm / e_sizeMultiplier);
        let marginLeft = null;
        if (c) {
            const O = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
            if (u instanceof f0 || O) {
                marginLeft = A(-u.italic);
            }
        }
        let F;
        if (h && c) {
            g = Math.max(g, T, h.depth + 0.25 * v.xHeight);
            b = Math.max(b, v.sub2);
            const V = v.defaultRuleThickness;
            const L = 4 * V;
            if (g - h.depth - (c.height - b) < L) {
                b = L - (g - h.depth) + c.height;
                const P = 0.8 * v.xHeight - (g - h.depth);
                if (P > 0) {
                    g += P;
                    b -= P;
                }
            }
            const W = [
                {
                    type: "elem",
                    elem: c,
                    shift: b,
                    marginRight,
                    marginLeft
                },
                {
                    type: "elem",
                    elem: h,
                    shift: -g,
                    marginRight
                }
            ];
            F = G({
                positionType: "individualShift",
                children: W
            });
        } else if (c) {
            b = Math.max(b, v.sub1, c.height - 0.8 * v.xHeight);
            const X = [
                {
                    type: "elem",
                    elem: c,
                    marginLeft,
                    marginRight
                }
            ];
            F = G({
                positionType: "shift",
                positionData: b,
                children: X
            });
        } else if (h) {
            g = Math.max(g, T, h.depth + 0.25 * v.xHeight);
            F = G({
                positionType: "shift",
                positionData: -g,
                children: [
                    {
                        type: "elem",
                        elem: h,
                        marginRight
                    }
                ]
            });
        } else {
            throw new Error("supsub must have either sup or sub.");
        }
        const h0 = wt(u, "right") || "mord";
        return k([
            h0
        ], [
            u,
            k([
                "msupsub"
            ], [
                F
            ])
        ], e);
    },
    mathmlBuilder (r, e) {
        let t = false;
        let a;
        let n;
        if (r.base && r.base.type === "horizBrace") {
            n = !!r.sup;
            if (n === r.base.isOver) {
                t = true;
                a = r.base.isOver;
            }
        }
        if (r.base && (r.base.type === "op" || r.base.type === "operatorname")) {
            r.base.parentIsSupSub = true;
        }
        const l = [
            Y(r.base, e)
        ];
        if (r.sub) {
            l.push(Y(r.sub, e));
        }
        if (r.sup) {
            l.push(Y(r.sup, e));
        }
        let u;
        if (t) {
            u = a ? "mover" : "munder";
        } else if (r.sub) {
            if (r.sup) {
                const v = r.base;
                if (v && v.type === "op" && v.limits && e.style === N.DISPLAY || v && v.type === "operatorname" && v.alwaysHandleSupSub && (e.style === N.DISPLAY || v.limits)) {
                    u = "munderover";
                } else {
                    u = "msubsup";
                }
            } else {
                const c = r.base;
                if (c && c.type === "op" && c.limits && (e.style === N.DISPLAY || c.alwaysHandleSupSub) || c && c.type === "operatorname" && c.alwaysHandleSupSub && (c.limits || e.style === N.DISPLAY)) {
                    u = "munder";
                } else {
                    u = "msub";
                }
            }
        } else {
            const h = r.base;
            if (h && h.type === "op" && h.limits && (e.style === N.DISPLAY || h.alwaysHandleSupSub) || h && h.type === "operatorname" && h.alwaysHandleSupSub && (h.limits || e.style === N.DISPLAY)) {
                u = "mover";
            } else {
                u = "msup";
            }
        }
        return new z(u, l);
    }
});
$0({
    type: "atom",
    htmlBuilder (r, e) {
        return qt(r.text, r.mode, e, [
            `m${r.family}`
        ]);
    },
    mathmlBuilder (r, e) {
        const t = new z("mo", [
            b0(r.text, r.mode)
        ]);
        if (r.family === "bin") {
            const a = It(r, e);
            if (a === "bold-italic") {
                t.setAttribute("mathvariant", a);
            }
        } else {
            if (r.family === "punct") {
                t.setAttribute("separator", "true");
            } else if (r.family === "open" || r.family === "close") {
                t.setAttribute("stretchy", "false");
            }
        }
        return t;
    }
});
const y1 = {
    mi: "italic",
    mn: "normal",
    mtext: "normal"
};
$0({
    type: "mathord",
    htmlBuilder (r, e) {
        return Fe(r, e, "mathord");
    },
    mathmlBuilder (r, e) {
        const t = new z("mi", [
            b0(r.text, r.mode, e)
        ]);
        const a = It(r, e) || "italic";
        if (a !== y1[t.type]) {
            t.setAttribute("mathvariant", a);
        }
        return t;
    }
});
$0({
    type: "textord",
    htmlBuilder (r, e) {
        return Fe(r, e, "textord");
    },
    mathmlBuilder (r, e) {
        const t = b0(r.text, r.mode, e);
        const a = It(r, e) || "normal";
        let n;
        if (r.mode === "text") {
            n = new z("mtext", [
                t
            ]);
        } else if (/[0-9]/.test(r.text)) {
            n = new z("mn", [
                t
            ]);
        } else if (r.text === "\\prime") {
            n = new z("mo", [
                t
            ]);
        } else {
            n = new z("mi", [
                t
            ]);
        }
        if (a !== y1[n.type]) {
            n.setAttribute("mathvariant", a);
        }
        return n;
    }
});
const ht = {
    "\\nobreak": "nobreak",
    "\\allowbreak": "allowbreak"
};
const mt = {
    " ": {},
    "\\ ": {},
    "~": {
        className: "nobreak"
    },
    "\\space": {},
    "\\nobreakspace": {
        className: "nobreak"
    }
};
$0({
    type: "spacing",
    htmlBuilder (r, e) {
        if (mt.hasOwnProperty(r.text)) {
            const t = mt[r.text].className || "";
            if (r.mode === "text") {
                const a = Fe(r, e, "textord");
                a.classes.push(t);
                return a;
            } else {
                return k([
                    "mspace",
                    t
                ], [
                    qt(r.text, r.mode, e)
                ], e);
            }
        } else {
            if (ht.hasOwnProperty(r.text)) {
                return k([
                    "mspace",
                    ht[r.text]
                ], [], e);
            }
            throw new ParseError(`Unknown type of space "${r.text}"`);
        }
    },
    mathmlBuilder (r, e) {
        let t;
        if (mt.hasOwnProperty(r.text)) {
            t = new z("mtext", [
                new _(" ")
            ]);
        } else {
            if (ht.hasOwnProperty(r.text)) {
                return new z("mspace");
            }
            throw new ParseError(`Unknown type of space "${r.text}"`);
        }
        return t;
    }
});
const xr = ()=>{
    var r = new z("mtd", []);
    r.setAttribute("width", "50%");
    return r;
};
$0({
    type: "tag",
    mathmlBuilder (r, e) {
        const t = new z("mtable", [
            new z("mtr", [
                xr(),
                new z("mtd", [
                    U0(r.body, e)
                ]),
                xr(),
                new z("mtd", [
                    U0(r.tag, e)
                ])
            ])
        ]);
        t.setAttribute("width", "100%");
        return t;
    }
});
const wr = {
    "\\text": undefined,
    "\\textrm": "textrm",
    "\\textsf": "textsf",
    "\\texttt": "texttt",
    "\\textnormal": "textrm"
};
const kr = {
    "\\textbf": "textbf",
    "\\textmd": "textmd"
};
const l4 = {
    "\\textit": "textit",
    "\\textup": "textup"
};
const Sr = (r, e)=>{
    var r_font = r.font;
    if (r_font) {
        if (wr[r_font]) {
            return e.withTextFontFamily(wr[r_font]);
        }
        if (kr[r_font]) {
            return e.withTextFontWeight(kr[r_font]);
        }
        if (r_font === "\\emph") {
            if (e.fontShape === "textit") {
                return e.withTextFontShape("textup");
            }
            return e.withTextFontShape("textit");
        }
    } else {
        return e;
    }
    return e.withTextFontShape(l4[r_font]);
};
__defineFunction({
    type: "text",
    names: [
        "\\text",
        "\\textrm",
        "\\textsf",
        "\\texttt",
        "\\textnormal",
        "\\textbf",
        "\\textmd",
        "\\textit",
        "\\textup",
        "\\emph"
    ],
    props: {
        numArgs: 1,
        argTypes: [
            "text"
        ],
        allowedInArgument: true,
        allowedInText: true
    },
    handler ({ parser, funcName }, e) {
        const n = e[0];
        return {
            type: "text",
            mode: parser.mode,
            body: Q(n),
            font: funcName
        };
    },
    htmlBuilder (r, e) {
        const t = Sr(r, e);
        const a = a0(r.body, t, true);
        return k([
            "mord",
            "text"
        ], a, t);
    },
    mathmlBuilder (r, e) {
        const t = Sr(r, e);
        return U0(r.body, t);
    }
});
__defineFunction({
    type: "underline",
    names: [
        "\\underline"
    ],
    props: {
        numArgs: 1,
        allowedInText: true
    },
    handler ({ parser }, e) {
        return {
            type: "underline",
            mode: parser.mode,
            body: e[0]
        };
    },
    htmlBuilder (r, e) {
        const t = U(r.body, e);
        const a = te("underline-line", e);
        const defaultRuleThickness = e.fontMetrics().defaultRuleThickness;
        const l = G({
            positionType: "top",
            positionData: t.height,
            children: [
                {
                    type: "kern",
                    size: defaultRuleThickness
                },
                {
                    type: "elem",
                    elem: a
                },
                {
                    type: "kern",
                    size: 3 * defaultRuleThickness
                },
                {
                    type: "elem",
                    elem: t
                }
            ]
        });
        return k([
            "mord",
            "underline"
        ], [
            l
        ], e);
    },
    mathmlBuilder (r, e) {
        const t = new z("mo", [
            new _("‾")
        ]);
        t.setAttribute("stretchy", "true");
        const a = new z("munder", [
            Y(r.body, e),
            t
        ]);
        a.setAttribute("accentunder", "true");
        return a;
    }
});
__defineFunction({
    type: "vcenter",
    names: [
        "\\vcenter"
    ],
    props: {
        numArgs: 1,
        argTypes: [
            "original"
        ],
        allowedInText: false
    },
    handler ({ parser }, e) {
        return {
            type: "vcenter",
            mode: parser.mode,
            body: e[0]
        };
    },
    htmlBuilder (r, e) {
        const t = U(r.body, e);
        const axisHeight = e.fontMetrics().axisHeight;
        const n = 0.5 * (t.height - axisHeight - (t.depth + axisHeight));
        return G({
            positionType: "shift",
            positionData: n,
            children: [
                {
                    type: "elem",
                    elem: t
                }
            ]
        });
    },
    mathmlBuilder (r, e) {
        const t = new z("mpadded", [
            Y(r.body, e)
        ], [
            "vcenter"
        ]);
        return new z("mrow", [
            t
        ]);
    }
});
__defineFunction({
    type: "verb",
    names: [
        "\\verb"
    ],
    props: {
        numArgs: 0,
        allowedInText: true
    },
    handler (r, e, t) {
        throw new ParseError("\\verb ended by end of line instead of matching delimiter");
    },
    htmlBuilder (r, e) {
        for(var t = zr(r), a = [], n = e.havingStyle(e.style.text()), l = 0; l < t.length; l++){
            let u = t[l];
            if (u === "~") {
                u = "\\textasciitilde";
            }
            a.push(s0(u, "Typewriter-Regular", r.mode, n, [
                "mord",
                "texttt"
            ]));
        }
        return k([
            "mord",
            "text"
        ].concat(n.sizingClasses(e)), Or(a), n);
    },
    mathmlBuilder (r, e) {
        const t = new _(zr(r));
        const a = new z("mtext", [
            t
        ]);
        a.setAttribute("mathvariant", "monospace");
        return a;
    }
});
var zr = (r)=>r.body.replace(/ /g, r.star ? "␣" : " ");
const F0 = Pr;
const x1 = `[ \r
	]`;
const s4 = "\\\\[a-zA-Z@]+";
const u4 = "\\\\[^\uD800-\uDFFF]";
const o4 = `(${s4})${x1}*`;
const h4 = `\\\\(
|[ \r	]+
?)[ \r	]*`;
const Mt = "[̀-ͯ]";
const m4 = new RegExp(`${Mt}+\$`);
const c4 = `(${x1}+)|${`${h4}|`}([!-\\[\\]-‧‪-퟿豈-￿]${`${Mt}*`}` + "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + `${Mt}*` + "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + `|${o4}` + `|${u4})`;
class Ar {
    constructor(e, t){
        this.input = e;
        this.settings = t;
        this.tokenRegex = new RegExp(c4, "g");
        this.catcodes = {
            "%": 14,
            "~": 13
        };
    }
    setCatcode(e, t) {
        this.catcodes[e] = t;
    }
    lex() {
        const input = this.input;
        const lastIndex = this.tokenRegex.lastIndex;
        if (lastIndex === input.length) {
            return new d0("EOF", new c0(this, lastIndex, lastIndex));
        }
        const a = this.tokenRegex.exec(input);
        if (a === null || a.index !== lastIndex) {
            throw new ParseError(`Unexpected character: '${input[lastIndex]}'`, new d0(input[lastIndex], new c0(this, lastIndex, lastIndex + 1)));
        }
        const n = a[6] || a[3] || (a[2] ? "\\ " : " ");
        if (this.catcodes[n] === 14) {
            const l = input.indexOf(`
`, this.tokenRegex.lastIndex);
            if (l === -1) {
                this.tokenRegex.lastIndex = input.length;
                this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)");
            } else {
                this.tokenRegex.lastIndex = l + 1;
            }
            return this.lex();
        }
        return new d0(n, new c0(this, lastIndex, this.tokenRegex.lastIndex));
    }
}
class d4 {
    constructor(e, t){
        if (e === undefined) {
            e = {};
        }
        if (t === undefined) {
            t = {};
        }
        this.current = t;
        this.builtins = e;
        this.undefStack = [];
    }
    beginGroup() {
        this.undefStack.push({});
    }
    endGroup() {
        if (this.undefStack.length === 0) {
            throw new ParseError("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
        }
        const e = this.undefStack.pop();
        for(const t in e){
            e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t]);
        }
    }
    endGroups() {
        while(this.undefStack.length > 0){
            this.endGroup();
        }
    }
    has(e) {
        return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
    }
    get(e) {
        if (this.current.hasOwnProperty(e)) {
            return this.current[e];
        }
        return this.builtins[e];
    }
    set(e, t, a = false) {
        if (a) {
            for(let n = 0; n < this.undefStack.length; n++){
                delete this.undefStack[n][e];
            }
            if (this.undefStack.length > 0) {
                this.undefStack[this.undefStack.length - 1][e] = t;
            }
        } else {
            const l = this.undefStack[this.undefStack.length - 1];
            if (l && !l.hasOwnProperty(e)) {
                l[e] = this.current[e];
            }
        }
        if (t == null) {
            delete this.current[e];
        } else {
            this.current[e] = t;
        }
    }
}
const f4 = o1;
__defineMacro("\\noexpand", (r)=>{
    const e = r.popToken();
    if (r.isExpandable(e.text)) {
        e.noexpand = true;
        e.treatAsRelax = true;
    }
    return {
        tokens: [
            e
        ],
        numArgs: 0
    };
});
__defineMacro("\\expandafter", (r)=>{
    const e = r.popToken();
    r.expandOnce(true);
    return {
        tokens: [
            e
        ],
        numArgs: 0
    };
});
__defineMacro("\\@firstoftwo", (r)=>{
    const e = r.consumeArgs(2);
    return {
        tokens: e[0],
        numArgs: 0
    };
});
__defineMacro("\\@secondoftwo", (r)=>{
    const e = r.consumeArgs(2);
    return {
        tokens: e[1],
        numArgs: 0
    };
});
__defineMacro("\\@ifnextchar", (r)=>{
    const e = r.consumeArgs(3);
    r.consumeSpaces();
    const t = r.future();
    if (e[0].length === 1 && e[0][0].text === t.text) {
        return {
            tokens: e[1],
            numArgs: 0
        };
    }
    return {
        tokens: e[2],
        numArgs: 0
    };
});
__defineMacro("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
__defineMacro("\\TextOrMath", (r)=>{
    const e = r.consumeArgs(2);
    if (r.mode === "text") {
        return {
            tokens: e[0],
            numArgs: 0
        };
    }
    return {
        tokens: e[1],
        numArgs: 0
    };
});
const Mr = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15
};
__defineMacro("\\char", (r)=>{
    let e = r.popToken();
    let t;
    let a = 0;
    if (e.text === "'") {
        t = 8;
        e = r.popToken();
    } else if (e.text === '"') {
        t = 16;
        e = r.popToken();
    } else if (e.text === "`") {
        e = r.popToken();
        if (e.text[0] === "\\") {
            a = e.text.charCodeAt(1);
        } else {
            if (e.text === "EOF") {
                throw new ParseError("\\char` missing argument");
            }
            a = e.text.charCodeAt(0);
        }
    } else {
        t = 10;
    }
    if (t) {
        a = Mr[e.text];
        if (a == null || a >= t) {
            throw new ParseError(`Invalid base-${t} digit ${e.text}`);
        }
        for(let n; (n = Mr[r.future().text]) != null && n < t;){
            a *= t;
            a += n;
            r.popToken();
        }
    }
    return `\\@char{${a}}`;
});
const Lt = (r, e, t, a)=>{
    var tokens = r.consumeArg().tokens;
    if (tokens.length !== 1) {
        throw new ParseError("\\newcommand's first argument must be a macro name");
    }
    var text = tokens[0].text;
    var u = r.isDefined(text);
    if (u && !e) {
        throw new ParseError(`\\newcommand{${text}} attempting to redefine ${`${text}; use \\renewcommand`}`);
    }
    if (!u && !t) {
        throw new ParseError(`\\renewcommand{${text}} when command ${text} does not yet exist; use \\newcommand`);
    }
    var h = 0;
    tokens = r.consumeArg().tokens;
    if (tokens.length === 1 && tokens[0].text === "[") {
        var c = "";
        for(var v = r.expandNextToken(); v.text !== "]" && v.text !== "EOF";){
            c += v.text;
            v = r.expandNextToken();
        }
        if (!c.match(/^\s*[0-9]+\s*$/)) {
            throw new ParseError(`Invalid number of arguments: ${c}`);
        }
        h = parseInt(c);
        tokens = r.consumeArg().tokens;
    }
    if (!(u && a)) {
        r.macros.set(text, {
            tokens,
            numArgs: h
        });
    }
    return "";
};
__defineMacro("\\newcommand", (r)=>Lt(r, false, true, false));
__defineMacro("\\renewcommand", (r)=>Lt(r, true, false, false));
__defineMacro("\\providecommand", (r)=>Lt(r, true, true, true));
__defineMacro("\\message", (r)=>{
    var e = r.consumeArgs(1)[0];
    console.log(e.reverse().map((t)=>t.text).join(""));
    return "";
});
__defineMacro("\\errmessage", (r)=>{
    var e = r.consumeArgs(1)[0];
    console.error(e.reverse().map((t)=>t.text).join(""));
    return "";
});
__defineMacro("\\show", (r)=>{
    var e = r.popToken();
    var e_text = e.text;
    console.log(e, r.macros.get(e_text), F0[e_text], $.math[e_text], $.text[e_text]);
    return "";
});
__defineMacro("\\bgroup", "{");
__defineMacro("\\egroup", "}");
__defineMacro("~", "\\nobreakspace");
__defineMacro("\\lq", "`");
__defineMacro("\\rq", "'");
__defineMacro("\\aa", "\\r a");
__defineMacro("\\AA", "\\r A");
__defineMacro("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
__defineMacro("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
__defineMacro("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
__defineMacro("ℬ", "\\mathscr{B}");
__defineMacro("ℰ", "\\mathscr{E}");
__defineMacro("ℱ", "\\mathscr{F}");
__defineMacro("ℋ", "\\mathscr{H}");
__defineMacro("ℐ", "\\mathscr{I}");
__defineMacro("ℒ", "\\mathscr{L}");
__defineMacro("ℳ", "\\mathscr{M}");
__defineMacro("ℛ", "\\mathscr{R}");
__defineMacro("ℭ", "\\mathfrak{C}");
__defineMacro("ℌ", "\\mathfrak{H}");
__defineMacro("ℨ", "\\mathfrak{Z}");
__defineMacro("\\Bbbk", "\\Bbb{k}");
__defineMacro("\\llap", "\\mathllap{\\textrm{#1}}");
__defineMacro("\\rlap", "\\mathrlap{\\textrm{#1}}");
__defineMacro("\\clap", "\\mathclap{\\textrm{#1}}");
__defineMacro("\\mathstrut", "\\vphantom{(}");
__defineMacro("\\underbar", "\\underline{\\text{#1}}");
__defineMacro("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');
__defineMacro("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
__defineMacro("\\ne", "\\neq");
__defineMacro("≠", "\\neq");
__defineMacro("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
__defineMacro("∉", "\\notin");
__defineMacro("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
__defineMacro("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
__defineMacro("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
__defineMacro("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
__defineMacro("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
__defineMacro("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
__defineMacro("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
__defineMacro("⟂", "\\perp");
__defineMacro("‼", "\\mathclose{!\\mkern-0.8mu!}");
__defineMacro("∌", "\\notni");
__defineMacro("⌜", "\\ulcorner");
__defineMacro("⌝", "\\urcorner");
__defineMacro("⌞", "\\llcorner");
__defineMacro("⌟", "\\lrcorner");
__defineMacro("©", "\\copyright");
__defineMacro("®", "\\textregistered");
__defineMacro("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
__defineMacro("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
__defineMacro("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
__defineMacro("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
__defineMacro("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
__defineMacro("⋮", "\\vdots");
__defineMacro("\\varGamma", "\\mathit{\\Gamma}");
__defineMacro("\\varDelta", "\\mathit{\\Delta}");
__defineMacro("\\varTheta", "\\mathit{\\Theta}");
__defineMacro("\\varLambda", "\\mathit{\\Lambda}");
__defineMacro("\\varXi", "\\mathit{\\Xi}");
__defineMacro("\\varPi", "\\mathit{\\Pi}");
__defineMacro("\\varSigma", "\\mathit{\\Sigma}");
__defineMacro("\\varUpsilon", "\\mathit{\\Upsilon}");
__defineMacro("\\varPhi", "\\mathit{\\Phi}");
__defineMacro("\\varPsi", "\\mathit{\\Psi}");
__defineMacro("\\varOmega", "\\mathit{\\Omega}");
__defineMacro("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
__defineMacro("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
__defineMacro("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
__defineMacro("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
__defineMacro("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
__defineMacro("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
__defineMacro("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
__defineMacro("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
const Tr = {
    ",": "\\dotsc",
    "\\not": "\\dotsb",
    "+": "\\dotsb",
    "=": "\\dotsb",
    "<": "\\dotsb",
    ">": "\\dotsb",
    "-": "\\dotsb",
    "*": "\\dotsb",
    ":": "\\dotsb",
    "\\DOTSB": "\\dotsb",
    "\\coprod": "\\dotsb",
    "\\bigvee": "\\dotsb",
    "\\bigwedge": "\\dotsb",
    "\\biguplus": "\\dotsb",
    "\\bigcap": "\\dotsb",
    "\\bigcup": "\\dotsb",
    "\\prod": "\\dotsb",
    "\\sum": "\\dotsb",
    "\\bigotimes": "\\dotsb",
    "\\bigoplus": "\\dotsb",
    "\\bigodot": "\\dotsb",
    "\\bigsqcup": "\\dotsb",
    "\\And": "\\dotsb",
    "\\longrightarrow": "\\dotsb",
    "\\Longrightarrow": "\\dotsb",
    "\\longleftarrow": "\\dotsb",
    "\\Longleftarrow": "\\dotsb",
    "\\longleftrightarrow": "\\dotsb",
    "\\Longleftrightarrow": "\\dotsb",
    "\\mapsto": "\\dotsb",
    "\\longmapsto": "\\dotsb",
    "\\hookrightarrow": "\\dotsb",
    "\\doteq": "\\dotsb",
    "\\mathbin": "\\dotsb",
    "\\mathrel": "\\dotsb",
    "\\relbar": "\\dotsb",
    "\\Relbar": "\\dotsb",
    "\\xrightarrow": "\\dotsb",
    "\\xleftarrow": "\\dotsb",
    "\\DOTSI": "\\dotsi",
    "\\int": "\\dotsi",
    "\\oint": "\\dotsi",
    "\\iint": "\\dotsi",
    "\\iiint": "\\dotsi",
    "\\iiiint": "\\dotsi",
    "\\idotsint": "\\dotsi",
    "\\DOTSX": "\\dotsx"
};
const v4 = new Set([
    "bin",
    "rel"
]);
__defineMacro("\\dots", (r)=>{
    let e = "\\dotso";
    const text = r.expandAfterFuture().text;
    if (text in Tr) {
        e = Tr[text];
    } else if (text.slice(0, 4) === "\\not" || text in $.math && v4.has($.math[text].group)) {
        e = "\\dotsb";
    }
    return e;
});
const Pt = {
    ")": true,
    "]": true,
    "\\rbrack": true,
    "\\}": true,
    "\\rbrace": true,
    "\\rangle": true,
    "\\rceil": true,
    "\\rfloor": true,
    "\\rgroup": true,
    "\\rmoustache": true,
    "\\right": true,
    "\\bigr": true,
    "\\biggr": true,
    "\\Bigr": true,
    "\\Biggr": true,
    $: true,
    ";": true,
    ".": true,
    ",": true
};
__defineMacro("\\dotso", (r)=>{
    const text = r.future().text;
    if (text in Pt) {
        return "\\ldots\\,";
    }
    return "\\ldots";
});
__defineMacro("\\dotsc", (r)=>{
    const text = r.future().text;
    if (text in Pt && text !== ",") {
        return "\\ldots\\,";
    }
    return "\\ldots";
});
__defineMacro("\\cdots", (r)=>{
    const text = r.future().text;
    if (text in Pt) {
        return "\\@cdots\\,";
    }
    return "\\@cdots";
});
__defineMacro("\\dotsb", "\\cdots");
__defineMacro("\\dotsm", "\\cdots");
__defineMacro("\\dotsi", "\\!\\cdots");
__defineMacro("\\dotsx", "\\ldots\\,");
__defineMacro("\\DOTSI", "\\relax");
__defineMacro("\\DOTSB", "\\relax");
__defineMacro("\\DOTSX", "\\relax");
__defineMacro("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
__defineMacro("\\,", "\\tmspace+{3mu}{.1667em}");
__defineMacro("\\thinspace", "\\,");
__defineMacro("\\>", "\\mskip{4mu}");
__defineMacro("\\:", "\\tmspace+{4mu}{.2222em}");
__defineMacro("\\medspace", "\\:");
__defineMacro("\\;", "\\tmspace+{5mu}{.2777em}");
__defineMacro("\\thickspace", "\\;");
__defineMacro("\\!", "\\tmspace-{3mu}{.1667em}");
__defineMacro("\\negthinspace", "\\!");
__defineMacro("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
__defineMacro("\\negthickspace", "\\tmspace-{5mu}{.277em}");
__defineMacro("\\enspace", "\\kern.5em ");
__defineMacro("\\enskip", "\\hskip.5em\\relax");
__defineMacro("\\quad", "\\hskip1em\\relax");
__defineMacro("\\qquad", "\\hskip2em\\relax");
__defineMacro("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
__defineMacro("\\tag@paren", "\\tag@literal{({#1})}");
__defineMacro("\\tag@literal", (r)=>{
    if (r.macros.get("\\df@tag")) {
        throw new ParseError("Multiple \\tag");
    }
    return "\\gdef\\df@tag{\\text{#1}}";
});
__defineMacro("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
__defineMacro("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
__defineMacro("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
__defineMacro("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
__defineMacro("\\newline", "\\\\\\relax");
__defineMacro("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
const w1 = A(k0["Main-Regular"][84][1] - 0.7 * k0["Main-Regular"][65][1]);
__defineMacro("\\LaTeX", `\\textrm{\\html@mathml{${`L\\kern-.36em\\raisebox{${w1}}{\\scriptstyle A}`}\\kern-.15em\\TeX}{LaTeX}}`);
__defineMacro("\\KaTeX", `\\textrm{\\html@mathml{${`K\\kern-.17em\\raisebox{${w1}}{\\scriptstyle A}`}\\kern-.15em\\TeX}{KaTeX}}`);
__defineMacro("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
__defineMacro("\\@hspace", "\\hskip #1\\relax");
__defineMacro("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
__defineMacro("\\ordinarycolon", ":");
__defineMacro("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
__defineMacro("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
__defineMacro("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
__defineMacro("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
__defineMacro("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
__defineMacro("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
__defineMacro("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
__defineMacro("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
__defineMacro("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
__defineMacro("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
__defineMacro("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
__defineMacro("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
__defineMacro("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
__defineMacro("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
__defineMacro("∷", "\\dblcolon");
__defineMacro("∹", "\\eqcolon");
__defineMacro("≔", "\\coloneqq");
__defineMacro("≕", "\\eqqcolon");
__defineMacro("⩴", "\\Coloneqq");
__defineMacro("\\ratio", "\\vcentcolon");
__defineMacro("\\coloncolon", "\\dblcolon");
__defineMacro("\\colonequals", "\\coloneqq");
__defineMacro("\\coloncolonequals", "\\Coloneqq");
__defineMacro("\\equalscolon", "\\eqqcolon");
__defineMacro("\\equalscoloncolon", "\\Eqqcolon");
__defineMacro("\\colonminus", "\\coloneq");
__defineMacro("\\coloncolonminus", "\\Coloneq");
__defineMacro("\\minuscolon", "\\eqcolon");
__defineMacro("\\minuscoloncolon", "\\Eqcolon");
__defineMacro("\\coloncolonapprox", "\\Colonapprox");
__defineMacro("\\coloncolonsim", "\\Colonsim");
__defineMacro("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
__defineMacro("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
__defineMacro("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
__defineMacro("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
__defineMacro("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
__defineMacro("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
__defineMacro("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
__defineMacro("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
__defineMacro("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
__defineMacro("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
__defineMacro("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
__defineMacro("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
__defineMacro("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
__defineMacro("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
__defineMacro("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
__defineMacro("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
__defineMacro("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
__defineMacro("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
__defineMacro("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
__defineMacro("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
__defineMacro("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
__defineMacro("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
__defineMacro("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
__defineMacro("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
__defineMacro("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
__defineMacro("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
__defineMacro("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
__defineMacro("\\imath", "\\html@mathml{\\@imath}{ı}");
__defineMacro("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
__defineMacro("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
__defineMacro("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
__defineMacro("⟦", "\\llbracket");
__defineMacro("⟧", "\\rrbracket");
__defineMacro("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
__defineMacro("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
__defineMacro("⦃", "\\lBrace");
__defineMacro("⦄", "\\rBrace");
__defineMacro("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
__defineMacro("⦵", "\\minuso");
__defineMacro("\\darr", "\\downarrow");
__defineMacro("\\dArr", "\\Downarrow");
__defineMacro("\\Darr", "\\Downarrow");
__defineMacro("\\lang", "\\langle");
__defineMacro("\\rang", "\\rangle");
__defineMacro("\\uarr", "\\uparrow");
__defineMacro("\\uArr", "\\Uparrow");
__defineMacro("\\Uarr", "\\Uparrow");
__defineMacro("\\N", "\\mathbb{N}");
__defineMacro("\\R", "\\mathbb{R}");
__defineMacro("\\Z", "\\mathbb{Z}");
__defineMacro("\\alef", "\\aleph");
__defineMacro("\\alefsym", "\\aleph");
__defineMacro("\\Alpha", "\\mathrm{A}");
__defineMacro("\\Beta", "\\mathrm{B}");
__defineMacro("\\bull", "\\bullet");
__defineMacro("\\Chi", "\\mathrm{X}");
__defineMacro("\\clubs", "\\clubsuit");
__defineMacro("\\cnums", "\\mathbb{C}");
__defineMacro("\\Complex", "\\mathbb{C}");
__defineMacro("\\Dagger", "\\ddagger");
__defineMacro("\\diamonds", "\\diamondsuit");
__defineMacro("\\empty", "\\emptyset");
__defineMacro("\\Epsilon", "\\mathrm{E}");
__defineMacro("\\Eta", "\\mathrm{H}");
__defineMacro("\\exist", "\\exists");
__defineMacro("\\harr", "\\leftrightarrow");
__defineMacro("\\hArr", "\\Leftrightarrow");
__defineMacro("\\Harr", "\\Leftrightarrow");
__defineMacro("\\hearts", "\\heartsuit");
__defineMacro("\\image", "\\Im");
__defineMacro("\\infin", "\\infty");
__defineMacro("\\Iota", "\\mathrm{I}");
__defineMacro("\\isin", "\\in");
__defineMacro("\\Kappa", "\\mathrm{K}");
__defineMacro("\\larr", "\\leftarrow");
__defineMacro("\\lArr", "\\Leftarrow");
__defineMacro("\\Larr", "\\Leftarrow");
__defineMacro("\\lrarr", "\\leftrightarrow");
__defineMacro("\\lrArr", "\\Leftrightarrow");
__defineMacro("\\Lrarr", "\\Leftrightarrow");
__defineMacro("\\Mu", "\\mathrm{M}");
__defineMacro("\\natnums", "\\mathbb{N}");
__defineMacro("\\Nu", "\\mathrm{N}");
__defineMacro("\\Omicron", "\\mathrm{O}");
__defineMacro("\\plusmn", "\\pm");
__defineMacro("\\rarr", "\\rightarrow");
__defineMacro("\\rArr", "\\Rightarrow");
__defineMacro("\\Rarr", "\\Rightarrow");
__defineMacro("\\real", "\\Re");
__defineMacro("\\reals", "\\mathbb{R}");
__defineMacro("\\Reals", "\\mathbb{R}");
__defineMacro("\\Rho", "\\mathrm{P}");
__defineMacro("\\sdot", "\\cdot");
__defineMacro("\\sect", "\\S");
__defineMacro("\\spades", "\\spadesuit");
__defineMacro("\\sub", "\\subset");
__defineMacro("\\sube", "\\subseteq");
__defineMacro("\\supe", "\\supseteq");
__defineMacro("\\Tau", "\\mathrm{T}");
__defineMacro("\\thetasym", "\\vartheta");
__defineMacro("\\weierp", "\\wp");
__defineMacro("\\Zeta", "\\mathrm{Z}");
__defineMacro("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
__defineMacro("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
__defineMacro("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
__defineMacro("\\bra", "\\mathinner{\\langle{#1}|}");
__defineMacro("\\ket", "\\mathinner{|{#1}\\rangle}");
__defineMacro("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
__defineMacro("\\Bra", "\\left\\langle#1\\right|");
__defineMacro("\\Ket", "\\left|#1\\right\\rangle");
const k1 = (r)=>(e)=>{
        var tokens = e.consumeArg().tokens;
        var tokens_1 = e.consumeArg().tokens;
        var tokens_2 = e.consumeArg().tokens;
        var tokens_3 = e.consumeArg().tokens;
        var u = e.macros.get("|");
        var h = e.macros.get("\\|");
        e.macros.beginGroup();
        var c = (b)=>(y)=>{
                if (r) {
                    y.macros.set("|", u);
                    if (tokens_2.length) {
                        y.macros.set("\\|", h);
                    }
                }
                var x = b;
                if (!b && tokens_2.length) {
                    var M = y.future();
                    if (M.text === "|") {
                        y.popToken();
                        x = true;
                    }
                }
                return {
                    tokens: x ? tokens_2 : tokens_1,
                    numArgs: 0
                };
            };
        e.macros.set("|", c(false));
        if (tokens_2.length) {
            e.macros.set("\\|", c(true));
        }
        var tokens_4 = e.consumeArg().tokens;
        var g = e.expandTokens([
            ...tokens_3,
            ...tokens_4,
            ...tokens
        ]);
        e.macros.endGroup();
        return {
            tokens: g.reverse(),
            numArgs: 0
        };
    };
__defineMacro("\\bra@ket", k1(false));
__defineMacro("\\bra@set", k1(true));
__defineMacro("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
__defineMacro("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
__defineMacro("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
__defineMacro("\\angln", "{\\angl n}");
__defineMacro("\\blue", "\\textcolor{##6495ed}{#1}");
__defineMacro("\\orange", "\\textcolor{##ffa500}{#1}");
__defineMacro("\\pink", "\\textcolor{##ff00af}{#1}");
__defineMacro("\\red", "\\textcolor{##df0030}{#1}");
__defineMacro("\\green", "\\textcolor{##28ae7b}{#1}");
__defineMacro("\\gray", "\\textcolor{gray}{#1}");
__defineMacro("\\purple", "\\textcolor{##9d38bd}{#1}");
__defineMacro("\\blueA", "\\textcolor{##ccfaff}{#1}");
__defineMacro("\\blueB", "\\textcolor{##80f6ff}{#1}");
__defineMacro("\\blueC", "\\textcolor{##63d9ea}{#1}");
__defineMacro("\\blueD", "\\textcolor{##11accd}{#1}");
__defineMacro("\\blueE", "\\textcolor{##0c7f99}{#1}");
__defineMacro("\\tealA", "\\textcolor{##94fff5}{#1}");
__defineMacro("\\tealB", "\\textcolor{##26edd5}{#1}");
__defineMacro("\\tealC", "\\textcolor{##01d1c1}{#1}");
__defineMacro("\\tealD", "\\textcolor{##01a995}{#1}");
__defineMacro("\\tealE", "\\textcolor{##208170}{#1}");
__defineMacro("\\greenA", "\\textcolor{##b6ffb0}{#1}");
__defineMacro("\\greenB", "\\textcolor{##8af281}{#1}");
__defineMacro("\\greenC", "\\textcolor{##74cf70}{#1}");
__defineMacro("\\greenD", "\\textcolor{##1fab54}{#1}");
__defineMacro("\\greenE", "\\textcolor{##0d923f}{#1}");
__defineMacro("\\goldA", "\\textcolor{##ffd0a9}{#1}");
__defineMacro("\\goldB", "\\textcolor{##ffbb71}{#1}");
__defineMacro("\\goldC", "\\textcolor{##ff9c39}{#1}");
__defineMacro("\\goldD", "\\textcolor{##e07d10}{#1}");
__defineMacro("\\goldE", "\\textcolor{##a75a05}{#1}");
__defineMacro("\\redA", "\\textcolor{##fca9a9}{#1}");
__defineMacro("\\redB", "\\textcolor{##ff8482}{#1}");
__defineMacro("\\redC", "\\textcolor{##f9685d}{#1}");
__defineMacro("\\redD", "\\textcolor{##e84d39}{#1}");
__defineMacro("\\redE", "\\textcolor{##bc2612}{#1}");
__defineMacro("\\maroonA", "\\textcolor{##ffbde0}{#1}");
__defineMacro("\\maroonB", "\\textcolor{##ff92c6}{#1}");
__defineMacro("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
__defineMacro("\\maroonD", "\\textcolor{##ca337c}{#1}");
__defineMacro("\\maroonE", "\\textcolor{##9e034e}{#1}");
__defineMacro("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
__defineMacro("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
__defineMacro("\\purpleC", "\\textcolor{##aa87ff}{#1}");
__defineMacro("\\purpleD", "\\textcolor{##7854ab}{#1}");
__defineMacro("\\purpleE", "\\textcolor{##543b78}{#1}");
__defineMacro("\\mintA", "\\textcolor{##f5f9e8}{#1}");
__defineMacro("\\mintB", "\\textcolor{##edf2df}{#1}");
__defineMacro("\\mintC", "\\textcolor{##e0e5cc}{#1}");
__defineMacro("\\grayA", "\\textcolor{##f6f7f7}{#1}");
__defineMacro("\\grayB", "\\textcolor{##f0f1f2}{#1}");
__defineMacro("\\grayC", "\\textcolor{##e3e5e6}{#1}");
__defineMacro("\\grayD", "\\textcolor{##d6d8da}{#1}");
__defineMacro("\\grayE", "\\textcolor{##babec2}{#1}");
__defineMacro("\\grayF", "\\textcolor{##888d93}{#1}");
__defineMacro("\\grayG", "\\textcolor{##626569}{#1}");
__defineMacro("\\grayH", "\\textcolor{##3b3e40}{#1}");
__defineMacro("\\grayI", "\\textcolor{##21242c}{#1}");
__defineMacro("\\kaBlue", "\\textcolor{##314453}{#1}");
__defineMacro("\\kaGreen", "\\textcolor{##71B307}{#1}");
const S1 = {
    "^": true,
    _: true,
    "\\limits": true,
    "\\nolimits": true
};
class p4 {
    constructor(e, t, a){
        this.settings = t;
        this.expansionCount = 0;
        this.feed(e);
        this.macros = new d4(f4, t.macros);
        this.mode = a;
        this.stack = [];
    }
    feed(e) {
        this.lexer = new Ar(e, this.settings);
    }
    switchMode(e) {
        this.mode = e;
    }
    beginGroup() {
        this.macros.beginGroup();
    }
    endGroup() {
        this.macros.endGroup();
    }
    endGroups() {
        this.macros.endGroups();
    }
    future() {
        if (this.stack.length === 0) {
            this.pushToken(this.lexer.lex());
        }
        return this.stack[this.stack.length - 1];
    }
    popToken() {
        this.future();
        return this.stack.pop();
    }
    pushToken(e) {
        this.stack.push(e);
    }
    pushTokens(e) {
        this.stack.push(...e);
    }
    scanArgument(e) {
        let t;
        let a;
        let n;
        if (e) {
            this.consumeSpaces();
            if (this.future().text !== "[") {
                return null;
            }
            t = this.popToken();
            ({ tokens: n, end: a } = this.consumeArg([
                "]"
            ]));
        } else {
            ({ tokens: n, start: t, end: a } = this.consumeArg());
        }
        this.pushToken(new d0("EOF", a.loc));
        this.pushTokens(n);
        return new d0("", c0.range(t, a));
    }
    consumeSpaces() {
        while(true){
            const e = this.future();
            if (e.text === " ") {
                this.stack.pop();
            } else {
                break;
            }
        }
    }
    consumeArg(e) {
        const t = [];
        const a = e && e.length > 0;
        if (!a) {
            this.consumeSpaces();
        }
        const start = this.future();
        let end;
        let u = 0;
        let h = 0;
        do {
            end = this.popToken();
            t.push(end);
            if (end.text === "{") {
                ++u;
            } else if (end.text === "}") {
                --u;
                if (u === -1) {
                    throw new ParseError("Extra }", end);
                }
            } else if (end.text === "EOF") {
                throw new ParseError(`Unexpected end of input in a macro argument, expected '${e && a ? e[h] : "}"}'`, end);
            }
            if (e && a) {
                if ((u === 0 || u === 1 && e[h] === "{") && end.text === e[h]) {
                    ++h;
                    if (h === e.length) {
                        t.splice(-h, h);
                        break;
                    }
                } else {
                    h = 0;
                }
            }
        }while (u !== 0 || a)
        if (start.text === "{" && t[t.length - 1].text === "}") {
            t.pop();
            t.shift();
        }
        t.reverse();
        return {
            tokens: t,
            start,
            end
        };
    }
    consumeArgs(e, t) {
        if (t) {
            if (t.length !== e + 1) {
                throw new ParseError("The length of delimiters doesn't match the number of args!");
            }
            for(let a = t[0], n = 0; n < a.length; n++){
                const l = this.popToken();
                if (a[n] !== l.text) {
                    throw new ParseError("Use of the macro doesn't match its definition", l);
                }
            }
        }
        const u = [];
        for(let h = 0; h < e; h++){
            u.push(this.consumeArg(t && t[h + 1]).tokens);
        }
        return u;
    }
    countExpansion(e) {
        this.expansionCount += e;
        if (this.expansionCount > this.settings.maxExpand) {
            throw new ParseError("Too many expansions: infinite loop or need to increase maxExpand setting");
        }
    }
    expandOnce(e) {
        const t = this.popToken();
        const t_text = t.text;
        const n = t.noexpand ? null : this._getExpansion(t_text);
        if (n == null || e && n.unexpandable) {
            if (e && n == null && t_text[0] === "\\" && !this.isDefined(t_text)) {
                throw new ParseError(`Undefined control sequence: ${t_text}`);
            }
            this.pushToken(t);
            return false;
        }
        this.countExpansion(1);
        let n_tokens = n.tokens;
        const u = this.consumeArgs(n.numArgs, n.delimiters);
        if (n.numArgs) {
            n_tokens = n_tokens.slice();
            for(let h = n_tokens.length - 1; h >= 0; --h){
                let c = n_tokens[h];
                if (c.text === "#") {
                    if (h === 0) {
                        throw new ParseError("Incomplete placeholder at end of macro body", c);
                    }
                    c = n_tokens[--h];
                    if (c.text === "#") {
                        n_tokens.splice(h + 1, 1);
                    } else if (/^[1-9]$/.test(c.text)) {
                        n_tokens.splice(h, 2, ...u[+c.text - 1]);
                    } else {
                        throw new ParseError("Not a valid argument number", c);
                    }
                }
            }
        }
        this.pushTokens(n_tokens);
        return n_tokens.length;
    }
    expandAfterFuture() {
        this.expandOnce();
        return this.future();
    }
    expandNextToken() {
        while(true){
            if (this.expandOnce() === false) {
                const e = this.stack.pop();
                if (e.treatAsRelax) {
                    e.text = "\\relax";
                }
                return e;
            }
        }
    }
    expandMacro(e) {
        if (this.macros.has(e)) {
            return this.expandTokens([
                new d0(e)
            ]);
        }
    }
    expandTokens(e) {
        const t = [];
        const length = this.stack.length;
        for(this.pushTokens(e); this.stack.length > length;){
            if (this.expandOnce(true) === false) {
                const n = this.stack.pop();
                if (n.treatAsRelax) {
                    n.noexpand = false;
                    n.treatAsRelax = false;
                }
                t.push(n);
            }
        }
        this.countExpansion(t.length);
        return t;
    }
    expandMacroAsText(e) {
        const t = this.expandMacro(e);
        return t && t.map((a)=>a.text).join("");
    }
    _getExpansion(e) {
        const t = this.macros.get(e);
        if (t == null) {
            return t;
        }
        if (e.length === 1) {
            const a = this.lexer.catcodes[e];
            if (a != null && a !== 13) {
                return;
            }
        }
        const n = typeof t === "function" ? t(this) : t;
        if (typeof n === "string") {
            let l = 0;
            if (n.includes("#")) {
                for(const u = n.replace(/##/g, ""); u.includes(`#${l + 1}`);){
                    ++l;
                }
            }
            const h = new Ar(n, this.settings);
            const c = [];
            for(let v = h.lex(); v.text !== "EOF";){
                c.push(v);
                v = h.lex();
            }
            c.reverse();
            const g = {
                tokens: c,
                numArgs: l
            };
            return g;
        }
        return n;
    }
    isDefined(e) {
        return this.macros.has(e) || F0.hasOwnProperty(e) || $.math.hasOwnProperty(e) || $.text.hasOwnProperty(e) || S1.hasOwnProperty(e);
    }
    isExpandable(e) {
        const t = this.macros.get(e);
        if (t != null) {
            return typeof t === "string" || typeof t === "function" || !t.unexpandable;
        }
        return F0.hasOwnProperty(e) && !F0[e].primitive;
    }
}
const Br = /^[\u208A\u208B\u208C\u208D\u208E\u2080\u2081\u2082\u2083\u2084\u2085\u2086\u2087\u2088\u2089\u2090\u2091\u2095\u1D62\u2C7C\u2096\u2097\u2098\u2099\u2092\u209A\u1D63\u209B\u209C\u1D64\u1D65\u2093\u1D66\u1D67\u1D68\u1D69\u1D6A]/;
const Be = Object.freeze({
    "₊": "+",
    "₋": "-",
    "₌": "=",
    "₍": "(",
    "₎": ")",
    "₀": "0",
    "₁": "1",
    "₂": "2",
    "₃": "3",
    "₄": "4",
    "₅": "5",
    "₆": "6",
    "₇": "7",
    "₈": "8",
    "₉": "9",
    ₐ: "a",
    ₑ: "e",
    ₕ: "h",
    ᵢ: "i",
    ⱼ: "j",
    ₖ: "k",
    ₗ: "l",
    ₘ: "m",
    ₙ: "n",
    ₒ: "o",
    ₚ: "p",
    ᵣ: "r",
    ₛ: "s",
    ₜ: "t",
    ᵤ: "u",
    ᵥ: "v",
    ₓ: "x",
    ᵦ: "β",
    ᵧ: "γ",
    ᵨ: "ρ",
    ᵩ: "ϕ",
    ᵪ: "χ",
    "⁺": "+",
    "⁻": "-",
    "⁼": "=",
    "⁽": "(",
    "⁾": ")",
    "⁰": "0",
    "¹": "1",
    "²": "2",
    "³": "3",
    "⁴": "4",
    "⁵": "5",
    "⁶": "6",
    "⁷": "7",
    "⁸": "8",
    "⁹": "9",
    ᴬ: "A",
    ᴮ: "B",
    ᴰ: "D",
    ᴱ: "E",
    ᴳ: "G",
    ᴴ: "H",
    ᴵ: "I",
    ᴶ: "J",
    ᴷ: "K",
    ᴸ: "L",
    ᴹ: "M",
    ᴺ: "N",
    ᴼ: "O",
    ᴾ: "P",
    ᴿ: "R",
    ᵀ: "T",
    ᵁ: "U",
    ⱽ: "V",
    ᵂ: "W",
    ᵃ: "a",
    ᵇ: "b",
    ᶜ: "c",
    ᵈ: "d",
    ᵉ: "e",
    ᶠ: "f",
    ᵍ: "g",
    ʰ: "h",
    ⁱ: "i",
    ʲ: "j",
    ᵏ: "k",
    ˡ: "l",
    ᵐ: "m",
    ⁿ: "n",
    ᵒ: "o",
    ᵖ: "p",
    ʳ: "r",
    ˢ: "s",
    ᵗ: "t",
    ᵘ: "u",
    ᵛ: "v",
    ʷ: "w",
    ˣ: "x",
    ʸ: "y",
    ᶻ: "z",
    ᵝ: "β",
    ᵞ: "γ",
    ᵟ: "δ",
    ᵠ: "ϕ",
    ᵡ: "χ",
    ᶿ: "θ"
});
const ct = {
    "́": {
        text: "\\'",
        math: "\\acute"
    },
    "̀": {
        text: "\\`",
        math: "\\grave"
    },
    "̈": {
        text: '\\"',
        math: "\\ddot"
    },
    "̃": {
        text: "\\~",
        math: "\\tilde"
    },
    "̄": {
        text: "\\=",
        math: "\\bar"
    },
    "̆": {
        text: "\\u",
        math: "\\breve"
    },
    "̌": {
        text: "\\v",
        math: "\\check"
    },
    "̂": {
        text: "\\^",
        math: "\\hat"
    },
    "̇": {
        text: "\\.",
        math: "\\dot"
    },
    "̊": {
        text: "\\r",
        math: "\\mathring"
    },
    "̋": {
        text: "\\H"
    },
    "̧": {
        text: "\\c"
    }
};
const Dr = {
    á: "á",
    à: "à",
    ä: "ä",
    ǟ: "ǟ",
    ã: "ã",
    ā: "ā",
    ă: "ă",
    ắ: "ắ",
    ằ: "ằ",
    ẵ: "ẵ",
    ǎ: "ǎ",
    â: "â",
    ấ: "ấ",
    ầ: "ầ",
    ẫ: "ẫ",
    ȧ: "ȧ",
    ǡ: "ǡ",
    å: "å",
    ǻ: "ǻ",
    ḃ: "ḃ",
    ć: "ć",
    ḉ: "ḉ",
    č: "č",
    ĉ: "ĉ",
    ċ: "ċ",
    ç: "ç",
    ď: "ď",
    ḋ: "ḋ",
    ḑ: "ḑ",
    é: "é",
    è: "è",
    ë: "ë",
    ẽ: "ẽ",
    ē: "ē",
    ḗ: "ḗ",
    ḕ: "ḕ",
    ĕ: "ĕ",
    ḝ: "ḝ",
    ě: "ě",
    ê: "ê",
    ế: "ế",
    ề: "ề",
    ễ: "ễ",
    ė: "ė",
    ȩ: "ȩ",
    ḟ: "ḟ",
    ǵ: "ǵ",
    ḡ: "ḡ",
    ğ: "ğ",
    ǧ: "ǧ",
    ĝ: "ĝ",
    ġ: "ġ",
    ģ: "ģ",
    ḧ: "ḧ",
    ȟ: "ȟ",
    ĥ: "ĥ",
    ḣ: "ḣ",
    ḩ: "ḩ",
    í: "í",
    ì: "ì",
    ï: "ï",
    ḯ: "ḯ",
    ĩ: "ĩ",
    ī: "ī",
    ĭ: "ĭ",
    ǐ: "ǐ",
    î: "î",
    ǰ: "ǰ",
    ĵ: "ĵ",
    ḱ: "ḱ",
    ǩ: "ǩ",
    ķ: "ķ",
    ĺ: "ĺ",
    ľ: "ľ",
    ļ: "ļ",
    ḿ: "ḿ",
    ṁ: "ṁ",
    ń: "ń",
    ǹ: "ǹ",
    ñ: "ñ",
    ň: "ň",
    ṅ: "ṅ",
    ņ: "ņ",
    ó: "ó",
    ò: "ò",
    ö: "ö",
    ȫ: "ȫ",
    õ: "õ",
    ṍ: "ṍ",
    ṏ: "ṏ",
    ȭ: "ȭ",
    ō: "ō",
    ṓ: "ṓ",
    ṑ: "ṑ",
    ŏ: "ŏ",
    ǒ: "ǒ",
    ô: "ô",
    ố: "ố",
    ồ: "ồ",
    ỗ: "ỗ",
    ȯ: "ȯ",
    ȱ: "ȱ",
    ő: "ő",
    ṕ: "ṕ",
    ṗ: "ṗ",
    ŕ: "ŕ",
    ř: "ř",
    ṙ: "ṙ",
    ŗ: "ŗ",
    ś: "ś",
    ṥ: "ṥ",
    š: "š",
    ṧ: "ṧ",
    ŝ: "ŝ",
    ṡ: "ṡ",
    ş: "ş",
    ẗ: "ẗ",
    ť: "ť",
    ṫ: "ṫ",
    ţ: "ţ",
    ú: "ú",
    ù: "ù",
    ü: "ü",
    ǘ: "ǘ",
    ǜ: "ǜ",
    ǖ: "ǖ",
    ǚ: "ǚ",
    ũ: "ũ",
    ṹ: "ṹ",
    ū: "ū",
    ṻ: "ṻ",
    ŭ: "ŭ",
    ǔ: "ǔ",
    û: "û",
    ů: "ů",
    ű: "ű",
    ṽ: "ṽ",
    ẃ: "ẃ",
    ẁ: "ẁ",
    ẅ: "ẅ",
    ŵ: "ŵ",
    ẇ: "ẇ",
    ẘ: "ẘ",
    ẍ: "ẍ",
    ẋ: "ẋ",
    ý: "ý",
    ỳ: "ỳ",
    ÿ: "ÿ",
    ỹ: "ỹ",
    ȳ: "ȳ",
    ŷ: "ŷ",
    ẏ: "ẏ",
    ẙ: "ẙ",
    ź: "ź",
    ž: "ž",
    ẑ: "ẑ",
    ż: "ż",
    Á: "Á",
    À: "À",
    Ä: "Ä",
    Ǟ: "Ǟ",
    Ã: "Ã",
    Ā: "Ā",
    Ă: "Ă",
    Ắ: "Ắ",
    Ằ: "Ằ",
    Ẵ: "Ẵ",
    Ǎ: "Ǎ",
    Â: "Â",
    Ấ: "Ấ",
    Ầ: "Ầ",
    Ẫ: "Ẫ",
    Ȧ: "Ȧ",
    Ǡ: "Ǡ",
    Å: "Å",
    Ǻ: "Ǻ",
    Ḃ: "Ḃ",
    Ć: "Ć",
    Ḉ: "Ḉ",
    Č: "Č",
    Ĉ: "Ĉ",
    Ċ: "Ċ",
    Ç: "Ç",
    Ď: "Ď",
    Ḋ: "Ḋ",
    Ḑ: "Ḑ",
    É: "É",
    È: "È",
    Ë: "Ë",
    Ẽ: "Ẽ",
    Ē: "Ē",
    Ḗ: "Ḗ",
    Ḕ: "Ḕ",
    Ĕ: "Ĕ",
    Ḝ: "Ḝ",
    Ě: "Ě",
    Ê: "Ê",
    Ế: "Ế",
    Ề: "Ề",
    Ễ: "Ễ",
    Ė: "Ė",
    Ȩ: "Ȩ",
    Ḟ: "Ḟ",
    Ǵ: "Ǵ",
    Ḡ: "Ḡ",
    Ğ: "Ğ",
    Ǧ: "Ǧ",
    Ĝ: "Ĝ",
    Ġ: "Ġ",
    Ģ: "Ģ",
    Ḧ: "Ḧ",
    Ȟ: "Ȟ",
    Ĥ: "Ĥ",
    Ḣ: "Ḣ",
    Ḩ: "Ḩ",
    Í: "Í",
    Ì: "Ì",
    Ï: "Ï",
    Ḯ: "Ḯ",
    Ĩ: "Ĩ",
    Ī: "Ī",
    Ĭ: "Ĭ",
    Ǐ: "Ǐ",
    Î: "Î",
    İ: "İ",
    Ĵ: "Ĵ",
    Ḱ: "Ḱ",
    Ǩ: "Ǩ",
    Ķ: "Ķ",
    Ĺ: "Ĺ",
    Ľ: "Ľ",
    Ļ: "Ļ",
    Ḿ: "Ḿ",
    Ṁ: "Ṁ",
    Ń: "Ń",
    Ǹ: "Ǹ",
    Ñ: "Ñ",
    Ň: "Ň",
    Ṅ: "Ṅ",
    Ņ: "Ņ",
    Ó: "Ó",
    Ò: "Ò",
    Ö: "Ö",
    Ȫ: "Ȫ",
    Õ: "Õ",
    Ṍ: "Ṍ",
    Ṏ: "Ṏ",
    Ȭ: "Ȭ",
    Ō: "Ō",
    Ṓ: "Ṓ",
    Ṑ: "Ṑ",
    Ŏ: "Ŏ",
    Ǒ: "Ǒ",
    Ô: "Ô",
    Ố: "Ố",
    Ồ: "Ồ",
    Ỗ: "Ỗ",
    Ȯ: "Ȯ",
    Ȱ: "Ȱ",
    Ő: "Ő",
    Ṕ: "Ṕ",
    Ṗ: "Ṗ",
    Ŕ: "Ŕ",
    Ř: "Ř",
    Ṙ: "Ṙ",
    Ŗ: "Ŗ",
    Ś: "Ś",
    Ṥ: "Ṥ",
    Š: "Š",
    Ṧ: "Ṧ",
    Ŝ: "Ŝ",
    Ṡ: "Ṡ",
    Ş: "Ş",
    Ť: "Ť",
    Ṫ: "Ṫ",
    Ţ: "Ţ",
    Ú: "Ú",
    Ù: "Ù",
    Ü: "Ü",
    Ǘ: "Ǘ",
    Ǜ: "Ǜ",
    Ǖ: "Ǖ",
    Ǚ: "Ǚ",
    Ũ: "Ũ",
    Ṹ: "Ṹ",
    Ū: "Ū",
    Ṻ: "Ṻ",
    Ŭ: "Ŭ",
    Ǔ: "Ǔ",
    Û: "Û",
    Ů: "Ů",
    Ű: "Ű",
    Ṽ: "Ṽ",
    Ẃ: "Ẃ",
    Ẁ: "Ẁ",
    Ẅ: "Ẅ",
    Ŵ: "Ŵ",
    Ẇ: "Ẇ",
    Ẍ: "Ẍ",
    Ẋ: "Ẋ",
    Ý: "Ý",
    Ỳ: "Ỳ",
    Ÿ: "Ÿ",
    Ỹ: "Ỹ",
    Ȳ: "Ȳ",
    Ŷ: "Ŷ",
    Ẏ: "Ẏ",
    Ź: "Ź",
    Ž: "Ž",
    Ẑ: "Ẑ",
    Ż: "Ż",
    ά: "ά",
    ὰ: "ὰ",
    ᾱ: "ᾱ",
    ᾰ: "ᾰ",
    έ: "έ",
    ὲ: "ὲ",
    ή: "ή",
    ὴ: "ὴ",
    ί: "ί",
    ὶ: "ὶ",
    ϊ: "ϊ",
    ΐ: "ΐ",
    ῒ: "ῒ",
    ῑ: "ῑ",
    ῐ: "ῐ",
    ό: "ό",
    ὸ: "ὸ",
    ύ: "ύ",
    ὺ: "ὺ",
    ϋ: "ϋ",
    ΰ: "ΰ",
    ῢ: "ῢ",
    ῡ: "ῡ",
    ῠ: "ῠ",
    ώ: "ώ",
    ὼ: "ὼ",
    Ύ: "Ύ",
    Ὺ: "Ὺ",
    Ϋ: "Ϋ",
    Ῡ: "Ῡ",
    Ῠ: "Ῠ",
    Ώ: "Ώ",
    Ὼ: "Ὼ"
};
class je {
    constructor(e, t){
        this.mode = "math";
        this.gullet = new p4(e, t, this.mode);
        this.settings = t;
        this.leftrightDepth = 0;
        this.nextToken = null;
    }
    expect(e, t = true) {
        if (this.fetch().text !== e) {
            throw new ParseError(`Expected '${e}', got '${this.fetch().text}'`, this.fetch());
        }
        if (t) {
            this.consume();
        }
    }
    consume() {
        this.nextToken = null;
    }
    fetch() {
        if (this.nextToken == null) {
            this.nextToken = this.gullet.expandNextToken();
        }
        return this.nextToken;
    }
    switchMode(e) {
        this.mode = e;
        this.gullet.switchMode(e);
    }
    parse() {
        if (!this.settings.globalGroup) {
            this.gullet.beginGroup();
        }
        if (this.settings.colorIsTextColor) {
            this.gullet.macros.set("\\color", "\\textcolor");
        }
        try {
            const e = this.parseExpression(false);
            this.expect("EOF");
            if (!this.settings.globalGroup) {
                this.gullet.endGroup();
            }
            return e;
        } finally{
            this.gullet.endGroups();
        }
    }
    subparse(e) {
        const nextToken = this.nextToken;
        this.consume();
        this.gullet.pushToken(new d0("}"));
        this.gullet.pushTokens(e);
        const a = this.parseExpression(false);
        this.expect("}");
        this.nextToken = nextToken;
        return a;
    }
    parseExpression(e, t) {
        const a = [];
        while(true){
            if (this.mode === "math") {
                this.consumeSpaces();
            }
            const n = this.fetch();
            if (je.endOfExpression.has(n.text) || t && n.text === t || e && F0[n.text] && F0[n.text].infix) {
                break;
            }
            const l = this.parseAtom(t);
            if (l) {
                if (l.type === "internal") {
                    continue;
                }
            } else {
                break;
            }
            a.push(l);
        }
        if (this.mode === "text") {
            this.formLigatures(a);
        }
        return this.handleInfixNodes(a);
    }
    handleInfixNodes(e) {
        let t = -1;
        let a;
        for(let n = 0; n < e.length; n++){
            const l = e[n];
            if (l.type === "infix") {
                if (t !== -1) {
                    throw new ParseError("only one infix operator per group", l.token);
                }
                t = n;
                a = l.replaceWith;
            }
        }
        if (t !== -1 && a) {
            let u;
            let h;
            const c = e.slice(0, t);
            const v = e.slice(t + 1);
            if (c.length === 1 && c[0].type === "ordgroup") {
                u = c[0];
            } else {
                u = {
                    type: "ordgroup",
                    mode: this.mode,
                    body: c
                };
            }
            if (v.length === 1 && v[0].type === "ordgroup") {
                h = v[0];
            } else {
                h = {
                    type: "ordgroup",
                    mode: this.mode,
                    body: v
                };
            }
            let g;
            if (a === "\\\\abovefrac") {
                g = this.callFunction(a, [
                    u,
                    e[t],
                    h
                ], []);
            } else {
                g = this.callFunction(a, [
                    u,
                    h
                ], []);
            }
            return [
                g
            ];
        } else {
            return e;
        }
    }
    handleSupSubscript(e) {
        const t = this.fetch();
        const t_text = t.text;
        this.consume();
        this.consumeSpaces();
        let n;
        do {
            n = this.parseGroup(e);
        }while (n?.type === "internal")
        if (!n) {
            throw new ParseError(`Expected group after '${t_text}'`, t);
        }
        return n;
    }
    formatUnsupportedCmd(e) {
        const t = [];
        for(let a = 0; a < e.length; a++){
            t.push({
                type: "textord",
                mode: "text",
                text: e[a]
            });
        }
        const n = {
            type: "text",
            mode: this.mode,
            body: t
        };
        const l = {
            type: "color",
            mode: this.mode,
            color: this.settings.errorColor,
            body: [
                n
            ]
        };
        return l;
    }
    parseAtom(e) {
        const t = this.parseGroup("atom", e);
        if (t?.type === "internal" || this.mode === "text") {
            return t;
        }
        let sup;
        let sub;
        while(true){
            this.consumeSpaces();
            const l = this.fetch();
            if (l.text === "\\limits" || l.text === "\\nolimits") {
                if (t && t.type === "op") {
                    const u = l.text === "\\limits";
                    t.limits = u;
                    t.alwaysHandleSupSub = true;
                } else if (t && t.type === "operatorname") {
                    if (t.alwaysHandleSupSub) {
                        t.limits = l.text === "\\limits";
                    }
                } else {
                    throw new ParseError("Limit controls must follow a math operator", l);
                }
                this.consume();
            } else if (l.text === "^") {
                if (sup) {
                    throw new ParseError("Double superscript", l);
                }
                sup = this.handleSupSubscript("superscript");
            } else if (l.text === "_") {
                if (sub) {
                    throw new ParseError("Double subscript", l);
                }
                sub = this.handleSupSubscript("subscript");
            } else if (l.text === "'") {
                if (sup) {
                    throw new ParseError("Double superscript", l);
                }
                const h = {
                    type: "textord",
                    mode: this.mode,
                    text: "\\prime"
                };
                const c = [
                    h
                ];
                for(this.consume(); this.fetch().text === "'";){
                    c.push(h);
                    this.consume();
                }
                if (this.fetch().text === "^") {
                    c.push(this.handleSupSubscript("superscript"));
                }
                sup = {
                    type: "ordgroup",
                    mode: this.mode,
                    body: c
                };
            } else if (Be[l.text]) {
                const v = Br.test(l.text);
                const g = [];
                g.push(new d0(Be[l.text]));
                this.consume();
                while(true){
                    const b = this.fetch().text;
                    if (!Be[b] || Br.test(b) !== v) {
                        break;
                    }
                    g.unshift(new d0(Be[b]));
                    this.consume();
                }
                const y = this.subparse(g);
                if (v) {
                    sub = {
                        type: "ordgroup",
                        mode: "math",
                        body: y
                    };
                } else {
                    sup = {
                        type: "ordgroup",
                        mode: "math",
                        body: y
                    };
                }
            } else {
                break;
            }
        }
        if (sup || sub) {
            return {
                type: "supsub",
                mode: this.mode,
                base: t,
                sup,
                sub
            };
        }
        return t;
    }
    parseFunction(e, t) {
        const a = this.fetch();
        const a_text = a.text;
        const l = F0[a_text];
        if (!l) {
            return null;
        }
        this.consume();
        if (t && t !== "atom" && !l.allowedInArgument) {
            throw new ParseError(`Got function '${a_text}' with no arguments${t ? ` as ${t}` : ""}`, a);
        }
        if (this.mode === "text" && !l.allowedInText) {
            throw new ParseError(`Can't use function '${a_text}' in text mode`, a);
        }
        if (this.mode === "math" && l.allowedInMath === false) {
            throw new ParseError(`Can't use function '${a_text}' in math mode`, a);
        }
        const { args, optArgs } = this.parseArguments(a_text, l);
        return this.callFunction(a_text, args, optArgs, a, e);
    }
    callFunction(funcName, t, a, token, breakOnTokenText) {
        const u = {
            funcName,
            parser: this,
            token,
            breakOnTokenText
        };
        const h = F0[funcName];
        if (h && h.handler) {
            return h.handler(u, t, a);
        }
        throw new ParseError(`No function handler for ${funcName}`);
    }
    parseArguments(e, t) {
        const a = t.numArgs + t.numOptionalArgs;
        if (a === 0) {
            return {
                args: [],
                optArgs: []
            };
        }
        const args = [];
        const optArgs = [];
        for(let u = 0; u < a; u++){
            let h = t.argTypes && t.argTypes[u];
            const c = u < t.numOptionalArgs;
            if ("primitive" in t && t.primitive && h == null || t.type === "sqrt" && u === 1 && optArgs[0] == null) {
                h = "primitive";
            }
            const v = this.parseGroupOfType(`argument to '${e}'`, h, c);
            if (c) {
                optArgs.push(v);
            } else if (v != null) {
                args.push(v);
            } else {
                throw new ParseError("Null argument, please report this as a bug");
            }
        }
        return {
            args,
            optArgs
        };
    }
    parseGroupOfType(e, t, a) {
        switch(t){
            case "color":
                return this.parseColorGroup(a);
            case "size":
                return this.parseSizeGroup(a);
            case "url":
                return this.parseUrlGroup(a);
            case "math":
            case "text":
                return this.parseArgumentGroup(a, t);
            case "hbox":
                {
                    const n = this.parseArgumentGroup(a, "text");
                    if (n != null) {
                        return {
                            type: "styling",
                            mode: n.mode,
                            body: [
                                n
                            ],
                            style: "text"
                        };
                    }
                    return null;
                }
            case "raw":
                {
                    const l = this.parseStringGroup("raw", a);
                    if (l != null) {
                        return {
                            type: "raw",
                            mode: "text",
                            string: l.text
                        };
                    }
                    return null;
                }
            case "primitive":
                {
                    if (a) {
                        throw new ParseError("A primitive argument cannot be optional");
                    }
                    const u = this.parseGroup(e);
                    if (u == null) {
                        throw new ParseError(`Expected group as ${e}`, this.fetch());
                    }
                    return u;
                }
            case "original":
            case null:
            case undefined:
                return this.parseArgumentGroup(a);
            default:
                throw new ParseError(`Unknown group type as ${e}`, this.fetch());
        }
    }
    consumeSpaces() {
        while(this.fetch().text === " "){
            this.consume();
        }
    }
    parseStringGroup(e, t) {
        const a = this.gullet.scanArgument(t);
        if (a == null) {
            return null;
        }
        let n = "";
        let l;
        while((l = this.fetch()).text !== "EOF"){
            n += l.text;
            this.consume();
        }
        this.consume();
        a.text = n;
        return a;
    }
    parseRegexGroup(e, t) {
        const a = this.fetch();
        let n = a;
        for(var l = "", u; (u = this.fetch()).text !== "EOF" && e.test(l + u.text);){
            n = u;
            l += n.text;
            this.consume();
        }
        if (l === "") {
            throw new ParseError(`Invalid ${t}: '${a.text}'`, a);
        }
        return a.range(n, l);
    }
    parseColorGroup(e) {
        const t = this.parseStringGroup("color", e);
        if (t == null) {
            return null;
        }
        const a = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
        if (!a) {
            throw new ParseError(`Invalid color: '${t.text}'`, t);
        }
        let n = a[0];
        if (/^[0-9a-f]{6}$/i.test(n)) {
            n = `#${n}`;
        }
        return {
            type: "color-token",
            mode: this.mode,
            color: n
        };
    }
    parseSizeGroup(e) {
        let t;
        let isBlank = false;
        this.gullet.consumeSpaces();
        if (!e && this.gullet.future().text !== "{") {
            t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size");
        } else {
            t = this.parseStringGroup("size", e);
        }
        if (!t) {
            return null;
        }
        if (!e && t.text.length === 0) {
            t.text = "0pt";
            isBlank = true;
        }
        const n = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
        if (!n) {
            throw new ParseError(`Invalid size: '${t.text}'`, t);
        }
        const l = {
            number: +(n[1] + n[2]),
            unit: n[3]
        };
        if (!qr(l)) {
            throw new ParseError(`Invalid unit: '${l.unit}'`, t);
        }
        return {
            type: "size",
            mode: this.mode,
            value: l,
            isBlank
        };
    }
    parseUrlGroup(e) {
        this.gullet.lexer.setCatcode("%", 13);
        this.gullet.lexer.setCatcode("~", 12);
        const t = this.parseStringGroup("url", e);
        this.gullet.lexer.setCatcode("%", 14);
        this.gullet.lexer.setCatcode("~", 13);
        if (t == null) {
            return null;
        }
        const url = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
        return {
            type: "url",
            mode: this.mode,
            url
        };
    }
    parseArgumentGroup(e, t) {
        const a = this.gullet.scanArgument(e);
        if (a == null) {
            return null;
        }
        const mode = this.mode;
        if (t) {
            this.switchMode(t);
        }
        this.gullet.beginGroup();
        const l = this.parseExpression(false, "EOF");
        this.expect("EOF");
        this.gullet.endGroup();
        const u = {
            type: "ordgroup",
            mode: this.mode,
            loc: a.loc,
            body: l
        };
        if (t) {
            this.switchMode(mode);
        }
        return u;
    }
    parseGroup(e, t) {
        const a = this.fetch();
        const a_text = a.text;
        let l;
        if (a_text === "{" || a_text === "\\begingroup") {
            this.consume();
            const u = a_text === "{" ? "}" : "\\endgroup";
            this.gullet.beginGroup();
            const h = this.parseExpression(false, u);
            const c = this.fetch();
            this.expect(u);
            this.gullet.endGroup();
            l = {
                type: "ordgroup",
                mode: this.mode,
                loc: c0.range(a, c),
                body: h,
                semisimple: a_text === "\\begingroup" || undefined
            };
        } else {
            l = this.parseFunction(t, e) || this.parseSymbol();
            if (l == null && a_text[0] === "\\" && !S1.hasOwnProperty(a_text)) {
                if (this.settings.throwOnError) {
                    throw new ParseError(`Undefined control sequence: ${a_text}`, a);
                }
                l = this.formatUnsupportedCmd(a_text);
                this.consume();
            }
        }
        return l;
    }
    formLigatures(e) {
        for(let t = e.length - 1, a = 0; a < t; ++a){
            const n = e[a];
            if (n.type === "textord") {
                const l = n.text;
                const u = e[a + 1];
                if (!(!u || u.type !== "textord")) {
                    if (l === "-" && u.text === "-") {
                        const h = e[a + 2];
                        if (a + 1 < t && h && h.type === "textord" && h.text === "-") {
                            e.splice(a, 3, {
                                type: "textord",
                                mode: "text",
                                loc: c0.range(n, h),
                                text: "---"
                            });
                            t -= 2;
                        } else {
                            e.splice(a, 2, {
                                type: "textord",
                                mode: "text",
                                loc: c0.range(n, u),
                                text: "--"
                            });
                            t -= 1;
                        }
                    }
                    if ((l === "'" || l === "`") && u.text === l) {
                        e.splice(a, 2, {
                            type: "textord",
                            mode: "text",
                            loc: c0.range(n, u),
                            text: l + l
                        });
                        t -= 1;
                    }
                }
            }
        }
    }
    parseSymbol() {
        const e = this.fetch();
        let e_text = e.text;
        if (/^\\verb[^a-zA-Z]/.test(e_text)) {
            this.consume();
            let a = e_text.slice(5);
            const star = a.charAt(0) === "*";
            if (star) {
                a = a.slice(1);
            }
            if (a.length < 2 || a.charAt(0) !== a.slice(-1)) {
                throw new ParseError(`\\verb assertion failed --
                    please report what input caused this bug`);
            }
            a = a.slice(1, -1);
            return {
                type: "verb",
                mode: "text",
                body: a,
                star
            };
        }
        if (Dr.hasOwnProperty(e_text[0]) && !$[this.mode][e_text[0]]) {
            if (this.settings.strict && this.mode === "math") {
                this.settings.reportNonstrict("unicodeTextInMathMode", `Accented Unicode text character "${e_text[0]}" used in math mode`, e);
            }
            e_text = Dr[e_text[0]] + e_text.slice(1);
        }
        const l = m4.exec(e_text);
        if (l) {
            e_text = e_text.substring(0, l.index);
            if (e_text === "i") {
                e_text = "ı";
            } else if (e_text === "j") {
                e_text = "ȷ";
            }
        }
        let u;
        if ($[this.mode][e_text]) {
            if (this.settings.strict && this.mode === "math" && gt.includes(e_text)) {
                this.settings.reportNonstrict("unicodeTextInMathMode", `Latin-1/Unicode text character "${e_text[0]}" used in math mode`, e);
            }
            const h = $[this.mode][e_text].group;
            const loc = c0.range(e);
            let v;
            if (ca.hasOwnProperty(h)) {
                const family = h;
                v = {
                    type: "atom",
                    mode: this.mode,
                    family,
                    loc,
                    text: e_text
                };
            } else {
                v = {
                    type: h,
                    mode: this.mode,
                    loc,
                    text: e_text
                };
            }
            u = v;
        } else if (e_text.charCodeAt(0) >= 128) {
            this.settings.strict && (Cr(e_text.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", `Unicode text character "${e_text[0]}" used in math mode`, e) : this.settings.reportNonstrict("unknownSymbol", `Unrecognized Unicode character "${e_text[0]}"${` (${e_text.charCodeAt(0)})`}`, e));
            u = {
                type: "textord",
                mode: "text",
                loc: c0.range(e),
                text: e_text
            };
        } else {
            return null;
        }
        this.consume();
        if (l) {
            for(let b = 0; b < l[0].length; b++){
                const y = l[0][b];
                if (!ct[y]) {
                    throw new ParseError(`Unknown accent ' ${y}'`, e);
                }
                const label = ct[y][this.mode] || ct[y].text;
                if (!label) {
                    throw new ParseError(`Accent ${y} unsupported in ${this.mode} mode`, e);
                }
                u = {
                    type: "accent",
                    mode: this.mode,
                    loc: c0.range(e),
                    label,
                    isStretchy: false,
                    isShifty: true,
                    base: u
                };
            }
        }
        return u;
    }
}
je.endOfExpression = new Set([
    "}",
    "\\endgroup",
    "\\end",
    "\\right",
    "&"
]);
const Gt = (e, t)=>{
    if (!(typeof e === "string" || e instanceof String)) {
        throw new TypeError("KaTeX can only parse string typed expression");
    }
    const a = new je(e, t);
    delete a.gullet.macros.current["\\df@tag"];
    let n = a.parse();
    delete a.gullet.macros.current["\\current@color"];
    delete a.gullet.macros.current["\\color"];
    if (a.gullet.macros.get("\\df@tag")) {
        if (!t.displayMode) {
            throw new ParseError("\\tag works only in display equations");
        }
        n = [
            {
                type: "tag",
                mode: "text",
                body: n,
                tag: a.subparse([
                    new d0("\\df@tag")
                ])
            }
        ];
    }
    return n;
};
export let render = function(e, t, a) {
    t.textContent = "";
    const n = __renderToDomTree(e, a).toNode();
    t.appendChild(n);
};
if (typeof document !== "undefined" && document.compatMode !== "CSS1Compat") {
    if (typeof console !== "undefined") {
        console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.");
    }
    render = function() {
        throw new ParseError("KaTeX doesn't work in quirks mode.");
    };
}
export const renderToString = function(e, t) {
    const a = __renderToDomTree(e, t).toMarkup();
    return a;
};
export const __parse = function(e, t) {
    const a = new Bt(t);
    return Gt(e, a);
};
const A1 = (error, t, a)=>{
    if (a.throwOnError || !(error instanceof ParseError)) {
        throw error;
    }
    const n = k([
        "katex-error"
    ], [
        new f0(t)
    ]);
    n.setAttribute("title", error.toString());
    n.setAttribute("style", `color:${a.errorColor}`);
    return n;
};
export var __renderToDomTree = function(e, t) {
    const a = new Bt(t);
    try {
        const n = Gt(e, a);
        return Ba(n, e, a);
    } catch (error) {
        return A1(error, e, a);
    }
};
export const __renderToHTMLTree = function(e, t) {
    const a = new Bt(t);
    try {
        const n = Gt(e, a);
        return Da(n, e, a);
    } catch (error) {
        return A1(error, e, a);
    }
};
export const version = "0.16.45";
export const __domTree = {
    Span: ne,
    Anchor: Oe,
    SymbolNode: f0,
    SvgNode: D0,
    PathNode: P0,
    LineNode: pt
};
const k4 = {
    version,
    render,
    renderToString,
    ParseError,
    SETTINGS_SCHEMA,
    __parse,
    __renderToDomTree,
    __renderToHTMLTree,
    __setFontMetrics,
    __defineSymbol,
    __defineFunction,
    __defineMacro,
    __domTree
};
export { k4 as default };
