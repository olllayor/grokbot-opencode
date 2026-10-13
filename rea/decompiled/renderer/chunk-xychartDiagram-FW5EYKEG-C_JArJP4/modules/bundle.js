import { _ as __1, s as setAccDescription, g as getAccDescription, p as getDiagramTitle, o as setDiagramTitle, a as getAccTitle, b as setAccTitle, l as l_1, F, e as e_1, q, z, B, D, W, i, az, a7 } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { i as i_1 } from "./chunk-init-Gi6I4Gst.js";
import { o as o_1 } from "./chunk-ordinal-BB0u7Tqq.js";
import { l as l_2 } from "./chunk-linear-CNfSrmBn.js";
import "./index.eager-vendor-Qbf9YA6n.js";
import "./chunk-defaultLocale-pEppTWzK.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "53a9e2bf-bb72-4280-960a-8c342e12b07c";
            e._sentryDebugIdIdentifier = "sentry-dbid-53a9e2bf-bb72-4280-960a-8c342e12b07c";
        }
    } catch (e) {}
})();
function Ti(e, t, i) {
    e = +e;
    t = +t;
    i = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +i;
    for(var s = -1, a = Math.max(0, Math.ceil((t - e) / i)) | 0, o = new Array(a); ++s < a;){
        o[s] = e + s * i;
    }
    return o;
}
function wt() {
    const e = o_1().unknown(undefined);
    const { domain, range } = e;
    let s = 0;
    let a = 1;
    let o;
    let l;
    let f = false;
    let d = 0;
    let k = 0;
    let T = 0.5;
    delete e.unknown;
    function _() {
        const length = domain().length;
        const E = a < s;
        let L = E ? a : s;
        const P = E ? s : a;
        o = (P - L) / Math.max(1, length - d + k * 2);
        if (f) {
            o = Math.floor(o);
        }
        L += (P - L - o * (length - d)) * T;
        l = o * (1 - d);
        if (f) {
            L = Math.round(L);
            l = Math.round(l);
        }
        const I = Ti(length).map((m)=>L + o * m);
        return range(E ? I.reverse() : I);
    }
    e.domain = function(b) {
        if (arguments.length) {
            domain(b);
            return _();
        }
        return domain();
    };
    e.range = function(b) {
        if (arguments.length) {
            [s, a] = b;
            s = +s;
            a = +a;
            return _();
        }
        return [
            s,
            a
        ];
    };
    e.rangeRound = (b)=>{
        [s, a] = b;
        s = +s;
        a = +a;
        f = true;
        return _();
    };
    e.bandwidth = ()=>l;
    e.step = ()=>o;
    e.round = function(b) {
        if (arguments.length) {
            f = !!b;
            return _();
        }
        return f;
    };
    e.padding = function(b) {
        if (arguments.length) {
            d = Math.min(1, k = +b);
            return _();
        }
        return d;
    };
    e.paddingInner = function(b) {
        if (arguments.length) {
            d = Math.min(1, b);
            return _();
        }
        return d;
    };
    e.paddingOuter = function(b) {
        if (arguments.length) {
            k = +b;
            return _();
        }
        return k;
    };
    e.align = function(b) {
        if (arguments.length) {
            T = Math.max(0, Math.min(1, b));
            return _();
        }
        return T;
    };
    e.copy = ()=>wt(domain(), [
            s,
            a
        ]).round(f).paddingInner(d).paddingOuter(k).align(T);
    return i_1.apply(_(), arguments);
}
const Ct = (()=>{
    const e = __1((F, h, u, g)=>{
        u = u || {};
        for(g = F.length; g--; u[F[g]] = h);
        return u;
    }, "o");
    const t = [
        1,
        10,
        12,
        14,
        16,
        18,
        19,
        21,
        23
    ];
    const i = [
        2,
        6
    ];
    const s = [
        1,
        3
    ];
    const a = [
        1,
        5
    ];
    const o = [
        1,
        6
    ];
    const l = [
        1,
        7
    ];
    const f = [
        1,
        5,
        10,
        12,
        14,
        16,
        18,
        19,
        21,
        23,
        36,
        37,
        38
    ];
    const d = [
        1,
        25
    ];
    const k = [
        1,
        26
    ];
    const T = [
        1,
        28
    ];
    const _ = [
        1,
        29
    ];
    const b = [
        1,
        30
    ];
    const E = [
        1,
        31
    ];
    const L = [
        1,
        32
    ];
    const P = [
        1,
        33
    ];
    const I = [
        1,
        34
    ];
    const m = [
        1,
        35
    ];
    const D = [
        1,
        36
    ];
    const c = [
        1,
        37
    ];
    const B = [
        1,
        43
    ];
    const W = [
        1,
        42
    ];
    const X = [
        1,
        47
    ];
    const Y = [
        1,
        50
    ];
    const S = [
        1,
        10,
        12,
        14,
        16,
        18,
        19,
        21,
        23,
        36,
        37,
        38
    ];
    const H = [
        1,
        10,
        12,
        14,
        16,
        18,
        19,
        21,
        23,
        24,
        26,
        28,
        29,
        36,
        37,
        38
    ];
    const A = [
        1,
        10,
        12,
        14,
        16,
        18,
        19,
        21,
        23,
        24,
        26,
        28,
        29,
        36,
        37,
        38,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51
    ];
    const w = [
        1,
        65
    ];
    const V = [
        26,
        28
    ];
    const R = {
        trace: __1(()=>{}, "trace"),
        yy: {},
        symbols_: {
            error: 2,
            start: 3,
            eol: 4,
            XYCHART: 5,
            chartConfig: 6,
            document: 7,
            CHART_ORIENTATION: 8,
            statement: 9,
            title: 10,
            text: 11,
            X_AXIS: 12,
            parseXAxis: 13,
            Y_AXIS: 14,
            parseYAxis: 15,
            LINE: 16,
            plotData: 17,
            BAR: 18,
            acc_title: 19,
            acc_title_value: 20,
            acc_descr: 21,
            acc_descr_value: 22,
            acc_descr_multiline_value: 23,
            SQUARE_BRACES_START: 24,
            dataPoints: 25,
            SQUARE_BRACES_END: 26,
            dataPoint: 27,
            COMMA: 28,
            NUMBER_WITH_DECIMAL: 29,
            STR: 30,
            xAxisData: 31,
            bandData: 32,
            ARROW_DELIMITER: 33,
            commaSeparatedTexts: 34,
            yAxisData: 35,
            NEWLINE: 36,
            SEMI: 37,
            EOF: 38,
            alphaNum: 39,
            MD_STR: 40,
            alphaNumToken: 41,
            AMP: 42,
            NUM: 43,
            ALPHA: 44,
            PLUS: 45,
            EQUALS: 46,
            MULT: 47,
            DOT: 48,
            BRKT: 49,
            MINUS: 50,
            UNDERSCORE: 51,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            5: "XYCHART",
            8: "CHART_ORIENTATION",
            10: "title",
            12: "X_AXIS",
            14: "Y_AXIS",
            16: "LINE",
            18: "BAR",
            19: "acc_title",
            20: "acc_title_value",
            21: "acc_descr",
            22: "acc_descr_value",
            23: "acc_descr_multiline_value",
            24: "SQUARE_BRACES_START",
            26: "SQUARE_BRACES_END",
            28: "COMMA",
            29: "NUMBER_WITH_DECIMAL",
            30: "STR",
            33: "ARROW_DELIMITER",
            36: "NEWLINE",
            37: "SEMI",
            38: "EOF",
            40: "MD_STR",
            42: "AMP",
            43: "NUM",
            44: "ALPHA",
            45: "PLUS",
            46: "EQUALS",
            47: "MULT",
            48: "DOT",
            49: "BRKT",
            50: "MINUS",
            51: "UNDERSCORE"
        },
        productions_: [
            0,
            [
                3,
                2
            ],
            [
                3,
                3
            ],
            [
                3,
                2
            ],
            [
                3,
                1
            ],
            [
                6,
                1
            ],
            [
                7,
                0
            ],
            [
                7,
                2
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
                2
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
                3
            ],
            [
                9,
                2
            ],
            [
                9,
                3
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
                17,
                3
            ],
            [
                25,
                3
            ],
            [
                25,
                1
            ],
            [
                27,
                2
            ],
            [
                27,
                1
            ],
            [
                13,
                1
            ],
            [
                13,
                2
            ],
            [
                13,
                1
            ],
            [
                31,
                1
            ],
            [
                31,
                3
            ],
            [
                32,
                3
            ],
            [
                34,
                3
            ],
            [
                34,
                1
            ],
            [
                15,
                1
            ],
            [
                15,
                2
            ],
            [
                15,
                1
            ],
            [
                35,
                3
            ],
            [
                4,
                1
            ],
            [
                4,
                1
            ],
            [
                4,
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
                39,
                1
            ],
            [
                39,
                2
            ],
            [
                41,
                1
            ],
            [
                41,
                1
            ],
            [
                41,
                1
            ],
            [
                41,
                1
            ],
            [
                41,
                1
            ],
            [
                41,
                1
            ],
            [
                41,
                1
            ],
            [
                41,
                1
            ],
            [
                41,
                1
            ],
            [
                41,
                1
            ]
        ],
        performAction: __1(function(h, u, g, x, C, r, rt) {
            const p = r.length - 1;
            switch(C){
                case 5:
                    x.setOrientation(r[p]);
                    break;
                case 9:
                    x.setDiagramTitle(r[p].text.trim());
                    break;
                case 12:
                    x.setLineData({
                        text: "",
                        type: "text"
                    }, r[p]);
                    break;
                case 13:
                    x.setLineData(r[p - 1], r[p]);
                    break;
                case 14:
                    x.setBarData({
                        text: "",
                        type: "text"
                    }, r[p]);
                    break;
                case 15:
                    x.setBarData(r[p - 1], r[p]);
                    break;
                case 16:
                    this.$ = r[p].trim();
                    x.setAccTitle(this.$);
                    break;
                case 17:
                case 18:
                    this.$ = r[p].trim();
                    x.setAccDescription(this.$);
                    break;
                case 19:
                    this.$ = r[p - 1];
                    break;
                case 20:
                case 30:
                    this.$ = [
                        r[p - 2],
                        ...r[p]
                    ];
                    break;
                case 21:
                case 31:
                    this.$ = [
                        r[p]
                    ];
                    break;
                case 22:
                    this.$ = {
                        value: Number(r[p - 1]),
                        label: r[p]
                    };
                    break;
                case 23:
                    this.$ = {
                        value: Number(r[p]),
                        label: ""
                    };
                    break;
                case 24:
                    x.setXAxisTitle(r[p]);
                    break;
                case 25:
                    x.setXAxisTitle(r[p - 1]);
                    break;
                case 26:
                    x.setXAxisTitle({
                        type: "text",
                        text: ""
                    });
                    break;
                case 27:
                    x.setXAxisBand(r[p]);
                    break;
                case 28:
                    x.setXAxisRangeData(Number(r[p - 2]), Number(r[p]));
                    break;
                case 29:
                    this.$ = r[p - 1];
                    break;
                case 32:
                    x.setYAxisTitle(r[p]);
                    break;
                case 33:
                    x.setYAxisTitle(r[p - 1]);
                    break;
                case 34:
                    x.setYAxisTitle({
                        type: "text",
                        text: ""
                    });
                    break;
                case 35:
                    x.setYAxisRangeData(Number(r[p - 2]), Number(r[p]));
                    break;
                case 39:
                    this.$ = {
                        text: r[p],
                        type: "text"
                    };
                    break;
                case 40:
                    this.$ = {
                        text: r[p],
                        type: "text"
                    };
                    break;
                case 41:
                    this.$ = {
                        text: r[p],
                        type: "markdown"
                    };
                    break;
                case 42:
                    this.$ = r[p];
                    break;
                case 43:
                    this.$ = `${r[p - 1]}${r[p]}`;
                    break;
            }
        }, "anonymous"),
        table: [
            e(t, i, {
                3: 1,
                4: 2,
                7: 4,
                5: s,
                36: a,
                37: o,
                38: l
            }),
            {
                1: [
                    3
                ]
            },
            e(t, i, {
                4: 2,
                7: 4,
                3: 8,
                5: s,
                36: a,
                37: o,
                38: l
            }),
            e(t, i, {
                4: 2,
                7: 4,
                6: 9,
                3: 10,
                5: s,
                8: [
                    1,
                    11
                ],
                36: a,
                37: o,
                38: l
            }),
            {
                1: [
                    2,
                    4
                ],
                9: 12,
                10: [
                    1,
                    13
                ],
                12: [
                    1,
                    14
                ],
                14: [
                    1,
                    15
                ],
                16: [
                    1,
                    16
                ],
                18: [
                    1,
                    17
                ],
                19: [
                    1,
                    18
                ],
                21: [
                    1,
                    19
                ],
                23: [
                    1,
                    20
                ]
            },
            e(f, [
                2,
                36
            ]),
            e(f, [
                2,
                37
            ]),
            e(f, [
                2,
                38
            ]),
            {
                1: [
                    2,
                    1
                ]
            },
            e(t, i, {
                4: 2,
                7: 4,
                3: 21,
                5: s,
                36: a,
                37: o,
                38: l
            }),
            {
                1: [
                    2,
                    3
                ]
            },
            e(f, [
                2,
                5
            ]),
            e(t, [
                2,
                7
            ], {
                4: 22,
                36: a,
                37: o,
                38: l
            }),
            {
                11: 23,
                30: d,
                39: 24,
                40: k,
                41: 27,
                42: T,
                43: _,
                44: b,
                45: E,
                46: L,
                47: P,
                48: I,
                49: m,
                50: D,
                51: c
            },
            {
                11: 39,
                13: 38,
                24: B,
                29: W,
                30: d,
                31: 40,
                32: 41,
                39: 24,
                40: k,
                41: 27,
                42: T,
                43: _,
                44: b,
                45: E,
                46: L,
                47: P,
                48: I,
                49: m,
                50: D,
                51: c
            },
            {
                11: 45,
                15: 44,
                29: X,
                30: d,
                35: 46,
                39: 24,
                40: k,
                41: 27,
                42: T,
                43: _,
                44: b,
                45: E,
                46: L,
                47: P,
                48: I,
                49: m,
                50: D,
                51: c
            },
            {
                11: 49,
                17: 48,
                24: Y,
                30: d,
                39: 24,
                40: k,
                41: 27,
                42: T,
                43: _,
                44: b,
                45: E,
                46: L,
                47: P,
                48: I,
                49: m,
                50: D,
                51: c
            },
            {
                11: 52,
                17: 51,
                24: Y,
                30: d,
                39: 24,
                40: k,
                41: 27,
                42: T,
                43: _,
                44: b,
                45: E,
                46: L,
                47: P,
                48: I,
                49: m,
                50: D,
                51: c
            },
            {
                20: [
                    1,
                    53
                ]
            },
            {
                22: [
                    1,
                    54
                ]
            },
            e(S, [
                2,
                18
            ]),
            {
                1: [
                    2,
                    2
                ]
            },
            e(S, [
                2,
                8
            ]),
            e(S, [
                2,
                9
            ]),
            e(H, [
                2,
                39
            ], {
                41: 55,
                42: T,
                43: _,
                44: b,
                45: E,
                46: L,
                47: P,
                48: I,
                49: m,
                50: D,
                51: c
            }),
            e(H, [
                2,
                40
            ]),
            e(H, [
                2,
                41
            ]),
            e(A, [
                2,
                42
            ]),
            e(A, [
                2,
                44
            ]),
            e(A, [
                2,
                45
            ]),
            e(A, [
                2,
                46
            ]),
            e(A, [
                2,
                47
            ]),
            e(A, [
                2,
                48
            ]),
            e(A, [
                2,
                49
            ]),
            e(A, [
                2,
                50
            ]),
            e(A, [
                2,
                51
            ]),
            e(A, [
                2,
                52
            ]),
            e(A, [
                2,
                53
            ]),
            e(S, [
                2,
                10
            ]),
            e(S, [
                2,
                24
            ], {
                32: 41,
                31: 56,
                24: B,
                29: W
            }),
            e(S, [
                2,
                26
            ]),
            e(S, [
                2,
                27
            ]),
            {
                33: [
                    1,
                    57
                ]
            },
            {
                11: 59,
                30: d,
                34: 58,
                39: 24,
                40: k,
                41: 27,
                42: T,
                43: _,
                44: b,
                45: E,
                46: L,
                47: P,
                48: I,
                49: m,
                50: D,
                51: c
            },
            e(S, [
                2,
                11
            ]),
            e(S, [
                2,
                32
            ], {
                35: 60,
                29: X
            }),
            e(S, [
                2,
                34
            ]),
            {
                33: [
                    1,
                    61
                ]
            },
            e(S, [
                2,
                12
            ]),
            {
                17: 62,
                24: Y
            },
            {
                25: 63,
                27: 64,
                29: w
            },
            e(S, [
                2,
                14
            ]),
            {
                17: 66,
                24: Y
            },
            e(S, [
                2,
                16
            ]),
            e(S, [
                2,
                17
            ]),
            e(A, [
                2,
                43
            ]),
            e(S, [
                2,
                25
            ]),
            {
                29: [
                    1,
                    67
                ]
            },
            {
                26: [
                    1,
                    68
                ]
            },
            {
                26: [
                    2,
                    31
                ],
                28: [
                    1,
                    69
                ]
            },
            e(S, [
                2,
                33
            ]),
            {
                29: [
                    1,
                    70
                ]
            },
            e(S, [
                2,
                13
            ]),
            {
                26: [
                    1,
                    71
                ]
            },
            {
                26: [
                    2,
                    21
                ],
                28: [
                    1,
                    72
                ]
            },
            e(V, [
                2,
                23
            ], {
                30: [
                    1,
                    73
                ]
            }),
            e(S, [
                2,
                15
            ]),
            e(S, [
                2,
                28
            ]),
            e(S, [
                2,
                29
            ]),
            {
                11: 59,
                30: d,
                34: 74,
                39: 24,
                40: k,
                41: 27,
                42: T,
                43: _,
                44: b,
                45: E,
                46: L,
                47: P,
                48: I,
                49: m,
                50: D,
                51: c
            },
            e(S, [
                2,
                35
            ]),
            e(S, [
                2,
                19
            ]),
            {
                25: 75,
                27: 64,
                29: w
            },
            e(V, [
                2,
                22
            ]),
            {
                26: [
                    2,
                    30
                ]
            },
            {
                26: [
                    2,
                    20
                ]
            }
        ],
        defaultActions: {
            8: [
                2,
                1
            ],
            10: [
                2,
                3
            ],
            21: [
                2,
                2
            ],
            74: [
                2,
                30
            ],
            75: [
                2,
                20
            ]
        },
        parseError: __1(function(h, u) {
            if (u.recoverable) {
                this.trace(h);
            } else {
                const g = new Error(h);
                g.hash = u;
                throw g;
            }
        }, "parseError"),
        parse: __1(function(h) {
            const u = this;
            let g = [
                0
            ];
            let x = [];
            let C = [
                null
            ];
            let r = [];
            const table = this.table;
            let p = "";
            let gt = 0;
            let Mt = 0;
            const li = 2;
            const zt = 1;
            const ci = r.slice.call(arguments, 1);
            const v = Object.create(this.lexer);
            const U = {
                yy: {}
            };
            for(const mt in this.yy){
                if (Object.prototype.hasOwnProperty.call(this.yy, mt)) {
                    U.yy[mt] = this.yy[mt];
                }
            }
            v.setInput(h, U.yy);
            U.yy.lexer = v;
            U.yy.parser = this;
            if (typeof v.yylloc === "undefined") {
                v.yylloc = {};
            }
            let v_yylloc = v.yylloc;
            r.push(v_yylloc);
            const ui = v.options && v.options.ranges;
            if (typeof U.yy.parseError === "function") {
                this.parseError = U.yy.parseError;
            } else {
                this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function gi(z) {
                g.length = g.length - 2 * z;
                C.length = C.length - z;
                r.length = r.length - z;
            }
            __1(gi, "popStack");
            function Bt() {
                let z;
                z = x.pop() || v.lex() || zt;
                if (typeof z !== "number") {
                    if (z instanceof Array) {
                        x = z;
                        z = x.pop();
                    }
                    z = u.symbols_[z] || z;
                }
                return z;
            }
            __1(Bt, "lex");
            let M;
            let $;
            let O;
            let bt;
            const G = {};
            let xt;
            let N;
            let Vt;
            let expected;
            while(true){
                $ = g[g.length - 1];
                if (this.defaultActions[$]) {
                    O = this.defaultActions[$];
                } else {
                    if (M === null || typeof M === "undefined") {
                        M = Bt();
                    }
                    O = table[$] && table[$][M];
                }
                if (typeof O === "undefined" || !O.length || !O[0]) {
                    let At = "";
                    expected = [];
                    for(xt in table[$]){
                        if (this.terminals_[xt] && xt > li) {
                            expected.push(`'${this.terminals_[xt]}'`);
                        }
                    }
                    if (v.showPosition) {
                        At = `Parse error on line ${gt + 1}${`:
`}${v.showPosition()}${`
Expecting `}${expected.join(", ")}, got '${this.terminals_[M] || M}'`;
                    } else {
                        At = `Parse error on line ${gt + 1}: Unexpected ${M == zt ? "end of input" : `'${this.terminals_[M] || M}'`}`;
                    }
                    this.parseError(At, {
                        text: v.match,
                        token: this.terminals_[M] || M,
                        line: v.yylineno,
                        loc: v_yylloc,
                        expected
                    });
                }
                if (O[0] instanceof Array && O.length > 1) {
                    throw new Error(`Parse Error: multiple actions possible at state: ${$}, token: ${M}`);
                }
                switch(O[0]){
                    case 1:
                        g.push(M);
                        C.push(v.yytext);
                        r.push(v.yylloc);
                        g.push(O[1]);
                        M = null;
                        Mt = v.yyleng;
                        p = v.yytext;
                        gt = v.yylineno;
                        v_yylloc = v.yylloc;
                        break;
                    case 2:
                        N = this.productions_[O[1]][1];
                        G.$ = C[C.length - N];
                        G._$ = {
                            first_line: r[r.length - (N || 1)].first_line,
                            last_line: r[r.length - 1].last_line,
                            first_column: r[r.length - (N || 1)].first_column,
                            last_column: r[r.length - 1].last_column
                        };
                        if (ui) {
                            G._$.range = [
                                r[r.length - (N || 1)].range[0],
                                r[r.length - 1].range[1]
                            ];
                        }
                        bt = this.performAction.apply(G, [
                            p,
                            Mt,
                            gt,
                            U.yy,
                            O[1],
                            C,
                            r
                        ].concat(ci));
                        if (typeof bt !== "undefined") {
                            return bt;
                        }
                        if (N) {
                            g = g.slice(0, -1 * N * 2);
                            C = C.slice(0, -1 * N);
                            r = r.slice(0, -1 * N);
                        }
                        g.push(this.productions_[O[1]][0]);
                        C.push(G.$);
                        r.push(G._$);
                        Vt = table[g[g.length - 2]][g[g.length - 1]];
                        g.push(Vt);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }, "parse")
    };
    const ot = (()=>{
        const F = {
            EOF: 1,
            parseError: __1(function(u, g) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(u, g);
                } else {
                    throw new Error(u);
                }
            }, "parseError"),
            setInput: __1(function(h, u) {
                this.yy = u || this.yy || {};
                this._input = h;
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
                const h = this._input[0];
                this.yytext += h;
                this.yyleng++;
                this.offset++;
                this.match += h;
                this.matched += h;
                const u = h.match(/(?:\r\n?|\n).*/g);
                u ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++;
                this.options.ranges && this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return h;
            }, "input"),
            unput: __1(function(h) {
                const h_length = h.length;
                const g = h.split(/(?:\r\n?|\n)/g);
                this._input = h + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - h_length);
                this.offset -= h_length;
                const x = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (g.length - 1) {
                    this.yylineno -= g.length - 1;
                }
                const range = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: g ? (g.length === x.length ? this.yylloc.first_column : 0) + x[x.length - g.length].length - g[0].length : this.yylloc.first_column - h_length
                };
                if (this.options.ranges) {
                    this.yylloc.range = [
                        range[0],
                        range[0] + this.yyleng - h_length
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
            less: __1(function(h) {
                this.unput(this.match.slice(h));
            }, "less"),
            pastInput: __1(function() {
                const h = this.matched.substr(0, this.matched.length - this.match.length);
                return (h.length > 20 ? "..." : "") + h.substr(-20).replace(/\n/g, "");
            }, "pastInput"),
            upcomingInput: __1(function() {
                let match = this.match;
                if (match.length < 20) {
                    match += this._input.substr(0, 20 - match.length);
                }
                return (match.substr(0, 20) + (match.length > 20 ? "..." : "")).replace(/\n/g, "");
            }, "upcomingInput"),
            showPosition: __1(function() {
                const h = this.pastInput();
                const u = new Array(h.length + 1).join("-");
                return `${h + this.upcomingInput() + `
` + u}^`;
            }, "showPosition"),
            test_match: __1(function(h, u) {
                let g;
                let x;
                let C;
                if (this.options.backtrack_lexer) {
                    C = {
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
                        C.yylloc.range = this.yylloc.range.slice(0);
                    }
                }
                x = h[0].match(/(?:\r\n?|\n).*/g);
                if (x) {
                    this.yylineno += x.length;
                }
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: x ? x[x.length - 1].length - x[x.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + h[0].length
                };
                this.yytext += h[0];
                this.match += h[0];
                this.matches = h;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) {
                    this.yylloc.range = [
                        this.offset,
                        this.offset += this.yyleng
                    ];
                }
                this._more = false;
                this._backtrack = false;
                this._input = this._input.slice(h[0].length);
                this.matched += h[0];
                g = this.performAction.call(this, this.yy, this, u, this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) {
                    this.done = false;
                }
                if (g) {
                    return g;
                }
                if (this._backtrack) {
                    for(const r in C){
                        this[r] = C[r];
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
                let h;
                let u;
                let g;
                let x;
                if (!this._more) {
                    this.yytext = "";
                    this.match = "";
                }
                for(var C = this._currentRules(), r = 0; r < C.length; r++){
                    g = this._input.match(this.rules[C[r]]);
                    if (g && (!u || g[0].length > u[0].length)) {
                        u = g;
                        x = r;
                        if (this.options.backtrack_lexer) {
                            h = this.test_match(g, C[r]);
                            if (h !== false) {
                                return h;
                            }
                            if (this._backtrack) {
                                u = false;
                                continue;
                            } else {
                                return false;
                            }
                        } else if (!this.options.flex) {
                            break;
                        }
                    }
                }
                if (u) {
                    h = this.test_match(u, C[x]);
                    if (h !== false) {
                        return h;
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
                const u = this.next();
                return u || this.lex();
            }, "lex"),
            begin: __1(function(u) {
                this.conditionStack.push(u);
            }, "begin"),
            popState: __1(function() {
                const u = this.conditionStack.length - 1;
                if (u > 0) {
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
            topState: __1(function(u) {
                u = this.conditionStack.length - 1 - Math.abs(u || 0);
                if (u >= 0) {
                    return this.conditionStack[u];
                }
                return "INITIAL";
            }, "topState"),
            pushState: __1(function(u) {
                this.begin(u);
            }, "pushState"),
            stateStackSize: __1(function() {
                return this.conditionStack.length;
            }, "stateStackSize"),
            options: {
                "case-insensitive": true
            },
            performAction: __1(function(u, g, x, C) {
                switch(x){
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        this.popState();
                        return 36;
                    case 3:
                        this.popState();
                        return 36;
                    case 4:
                        return 36;
                    case 5:
                        break;
                    case 6:
                        return 10;
                    case 7:
                        this.pushState("acc_title");
                        return 19;
                    case 8:
                        this.popState();
                        return "acc_title_value";
                    case 9:
                        this.pushState("acc_descr");
                        return 21;
                    case 10:
                        this.popState();
                        return "acc_descr_value";
                    case 11:
                        this.pushState("acc_descr_multiline");
                        break;
                    case 12:
                        this.popState();
                        break;
                    case 13:
                        return "acc_descr_multiline_value";
                    case 14:
                        return 5;
                    case 15:
                        return 5;
                    case 16:
                        return 8;
                    case 17:
                        this.pushState("axis_data");
                        return "X_AXIS";
                    case 18:
                        this.pushState("axis_data");
                        return "Y_AXIS";
                    case 19:
                        this.pushState("axis_band_data");
                        return 24;
                    case 20:
                        return 33;
                    case 21:
                        this.pushState("data");
                        return 16;
                    case 22:
                        this.pushState("data");
                        return 18;
                    case 23:
                        this.pushState("data_inner");
                        return 24;
                    case 24:
                        return 29;
                    case 25:
                        this.popState();
                        return 26;
                    case 26:
                        this.popState();
                        break;
                    case 27:
                        this.pushState("string");
                        break;
                    case 28:
                        this.popState();
                        break;
                    case 29:
                        return "STR";
                    case 30:
                        return 24;
                    case 31:
                        return 26;
                    case 32:
                        return 44;
                    case 33:
                        return "COLON";
                    case 34:
                        return 45;
                    case 35:
                        return 28;
                    case 36:
                        return 46;
                    case 37:
                        return 47;
                    case 38:
                        return 49;
                    case 39:
                        return 51;
                    case 40:
                        return 48;
                    case 41:
                        return 42;
                    case 42:
                        return 50;
                    case 43:
                        return 43;
                    case 44:
                        break;
                    case 45:
                        return 37;
                    case 46:
                        return 38;
                }
            }, "anonymous"),
            rules: [
                /^(?:%%(?!\{)[^\n]*)/i,
                /^(?:[^\}]%%[^\n]*)/i,
                /^(?:(\r?\n))/i,
                /^(?:(\r?\n))/i,
                /^(?:[\n\r]+)/i,
                /^(?:%%[^\n]*)/i,
                /^(?:title\b)/i,
                /^(?:accTitle\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*\{\s*)/i,
                /^(?:\})/i,
                /^(?:[^\}]*)/i,
                /^(?:xychart-beta\b)/i,
                /^(?:xychart\b)/i,
                /^(?:(?:vertical|horizontal))/i,
                /^(?:x-axis\b)/i,
                /^(?:y-axis\b)/i,
                /^(?:\[)/i,
                /^(?:-->)/i,
                /^(?:line\b)/i,
                /^(?:bar\b)/i,
                /^(?:\[)/i,
                /^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i,
                /^(?:\])/i,
                /^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i,
                /^(?:["])/i,
                /^(?:["])/i,
                /^(?:[^"]*)/i,
                /^(?:\[)/i,
                /^(?:\])/i,
                /^(?:[A-Za-z]+)/i,
                /^(?::)/i,
                /^(?:\+)/i,
                /^(?:,)/i,
                /^(?:=)/i,
                /^(?:\*)/i,
                /^(?:#)/i,
                /^(?:[\_])/i,
                /^(?:\.)/i,
                /^(?:&)/i,
                /^(?:-)/i,
                /^(?:[0-9]+)/i,
                /^(?:\s+)/i,
                /^(?:;)/i,
                /^(?:$)/i
            ],
            conditions: {
                data_inner: {
                    rules: [
                        0,
                        1,
                        4,
                        5,
                        6,
                        7,
                        9,
                        11,
                        14,
                        15,
                        16,
                        17,
                        18,
                        21,
                        22,
                        24,
                        25,
                        26,
                        27,
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
                        46
                    ],
                    inclusive: true
                },
                data: {
                    rules: [
                        0,
                        1,
                        3,
                        4,
                        5,
                        6,
                        7,
                        9,
                        11,
                        14,
                        15,
                        16,
                        17,
                        18,
                        21,
                        22,
                        23,
                        26,
                        27,
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
                        46
                    ],
                    inclusive: true
                },
                axis_band_data: {
                    rules: [
                        0,
                        1,
                        4,
                        5,
                        6,
                        7,
                        9,
                        11,
                        14,
                        15,
                        16,
                        17,
                        18,
                        21,
                        22,
                        25,
                        26,
                        27,
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
                        46
                    ],
                    inclusive: true
                },
                axis_data: {
                    rules: [
                        0,
                        1,
                        2,
                        4,
                        5,
                        6,
                        7,
                        9,
                        11,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        24,
                        26,
                        27,
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
                        46
                    ],
                    inclusive: true
                },
                acc_descr_multiline: {
                    rules: [
                        12,
                        13
                    ],
                    inclusive: false
                },
                acc_descr: {
                    rules: [
                        10
                    ],
                    inclusive: false
                },
                acc_title: {
                    rules: [
                        8
                    ],
                    inclusive: false
                },
                title: {
                    rules: [],
                    inclusive: false
                },
                md_string: {
                    rules: [],
                    inclusive: false
                },
                string: {
                    rules: [
                        28,
                        29
                    ],
                    inclusive: false
                },
                INITIAL: {
                    rules: [
                        0,
                        1,
                        4,
                        5,
                        6,
                        7,
                        9,
                        11,
                        14,
                        15,
                        16,
                        17,
                        18,
                        21,
                        22,
                        26,
                        27,
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
                        46
                    ],
                    inclusive: true
                }
            }
        };
        return F;
    })();
    R.lexer = ot;
    function q() {
        this.yy = {};
    }
    __1(q, "Parser");
    q.prototype = R;
    R.Parser = q;
    return new q;
})();
Ct.parser = Ct;
const parser = Ct;
function St(e) {
    return e.type === "bar";
}
__1(St, "isBarPlot");
function ft(e) {
    return e.type === "band";
}
__1(ft, "isBandAxisData");
function j(e) {
    return e.type === "linear";
}
__1(j, "isLinearAxisData");
const Q = class {
    constructor(t){
        this.parentGroup = t;
    }
    getMaxDimension(t, i) {
        if (!this.parentGroup) {
            return {
                width: t.reduce((acc, item)=>Math.max(item.length, acc), 0) * i,
                height: i
            };
        }
        const s = {
            width: 0,
            height: 0
        };
        const a = this.parentGroup.append("g").attr("visibility", "hidden").attr("font-size", i);
        for (const o of t){
            const l = az(a, 1, o);
            const f = l ? l.width : o.length * i;
            const d = l ? l.height : i;
            s.width = Math.max(s.width, f);
            s.height = Math.max(s.height, d);
        }
        a.remove();
        return s;
    }
};
__1(Q, "TextDimensionCalculatorWithFont");
const Ut = Q;
const Ft = 0.7;
const Xt = 0.2;
const K = class {
    constructor(t, i, s, a){
        this.axisConfig = t;
        this.title = i;
        this.textDimensionCalculator = s;
        this.axisThemeConfig = a;
        this.boundingRect = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        this.axisPosition = "left";
        this.showTitle = false;
        this.showLabel = false;
        this.showTick = false;
        this.showAxisLine = false;
        this.outerPadding = 0;
        this.titleTextHeight = 0;
        this.labelTextHeight = 0;
        this.normalizedLabelRotationInRad = 0;
        this.range = [
            0,
            10
        ];
        this.boundingRect = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        this.axisPosition = "left";
        this.normalizedLabelRotationInRad = this.axisConfig.labelRotation >= -90 && this.axisConfig.labelRotation <= 90 ? this.axisConfig.labelRotation * Math.PI / 180 : 0;
    }
    setRange(t) {
        this.range = t;
        if (this.axisPosition === "left" || this.axisPosition === "right") {
            this.boundingRect.height = t[1] - t[0];
        } else {
            this.boundingRect.width = t[1] - t[0];
        }
        this.recalculateScale();
    }
    getRange() {
        return [
            this.range[0] + this.outerPadding,
            this.range[1] - this.outerPadding
        ];
    }
    setAxisPosition(t) {
        this.axisPosition = t;
        this.setRange(this.range);
    }
    getTickDistance() {
        const t = this.getRange();
        return Math.abs(t[0] - t[1]) / this.getTickValues().length;
    }
    getAxisOuterPadding() {
        return this.outerPadding;
    }
    getLabelDimension() {
        return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map((t)=>t.toString()), this.axisConfig.labelFontSize);
    }
    recalculateOuterPaddingToDrawBar() {
        if (Ft * this.getTickDistance() > this.outerPadding * 2) {
            this.outerPadding = Math.floor(Ft * this.getTickDistance() / 2);
        }
        this.recalculateScale();
    }
    calculateSpaceIfDrawnHorizontally(t) {
        let t_height = t.height;
        if (this.axisConfig.showAxisLine && t_height > this.axisConfig.axisLineWidth) {
            t_height -= this.axisConfig.axisLineWidth;
            this.showAxisLine = true;
        }
        if (this.axisConfig.showLabel) {
            const s = this.getLabelDimension();
            const a = Xt * t.width;
            this.outerPadding = Math.min(s.width / 2, a);
            let o = s.height;
            if (this.axisPosition === "bottom" && this.normalizedLabelRotationInRad !== 0) {
                o = Math.max(o, Math.abs(Math.sin(this.normalizedLabelRotationInRad) * s.width) + Math.abs(Math.cos(this.normalizedLabelRotationInRad) * s.height));
            }
            o += this.axisConfig.labelPadding * 2;
            this.labelTextHeight = s.height;
            if (o <= t_height) {
                t_height -= o;
                this.showLabel = true;
            }
        }
        if (this.axisConfig.showTick && t_height >= this.axisConfig.tickLength) {
            this.showTick = true;
            t_height -= this.axisConfig.tickLength;
        }
        if (this.axisConfig.showTitle && this.title) {
            const s = this.textDimensionCalculator.getMaxDimension([
                this.title
            ], this.axisConfig.titleFontSize);
            const a = s.height + this.axisConfig.titlePadding * 2;
            this.titleTextHeight = s.height;
            if (a <= t_height) {
                t_height -= a;
                this.showTitle = true;
            }
        }
        this.boundingRect.width = t.width;
        this.boundingRect.height = t.height - t_height;
    }
    calculateSpaceIfDrawnVertical(t) {
        let t_width = t.width;
        if (this.axisConfig.showAxisLine && t_width > this.axisConfig.axisLineWidth) {
            t_width -= this.axisConfig.axisLineWidth;
            this.showAxisLine = true;
        }
        if (this.axisConfig.showLabel) {
            const s = this.getLabelDimension();
            const a = Xt * t.height;
            this.outerPadding = Math.min(s.height / 2, a);
            const o = s.width + this.axisConfig.labelPadding * 2;
            if (o <= t_width) {
                t_width -= o;
                this.showLabel = true;
            }
        }
        if (this.axisConfig.showTick && t_width >= this.axisConfig.tickLength) {
            this.showTick = true;
            t_width -= this.axisConfig.tickLength;
        }
        if (this.axisConfig.showTitle && this.title) {
            const s = this.textDimensionCalculator.getMaxDimension([
                this.title
            ], this.axisConfig.titleFontSize);
            const a = s.height + this.axisConfig.titlePadding * 2;
            this.titleTextHeight = s.height;
            if (a <= t_width) {
                t_width -= a;
                this.showTitle = true;
            }
        }
        this.boundingRect.width = t.width - t_width;
        this.boundingRect.height = t.height;
    }
    calculateSpace(t) {
        if (this.axisPosition === "left" || this.axisPosition === "right") {
            this.calculateSpaceIfDrawnVertical(t);
        } else {
            this.calculateSpaceIfDrawnHorizontally(t);
        }
        this.recalculateScale();
        return {
            width: this.boundingRect.width,
            height: this.boundingRect.height
        };
    }
    setBoundingBoxXY(t) {
        this.boundingRect.x = t.x;
        this.boundingRect.y = t.y;
    }
    calculateOffsetByRotation(t) {
        const normalizedLabelRotationInRad = this.normalizedLabelRotationInRad;
        if (normalizedLabelRotationInRad === 0) {
            return 0;
        }
        return Math.sin(normalizedLabelRotationInRad) * this.getLabelDimension()[t] / 2;
    }
    getDrawableElementsForLeftAxis() {
        const t = [];
        if (this.showAxisLine) {
            const i = this.boundingRect.x + this.boundingRect.width - this.axisConfig.axisLineWidth / 2;
            t.push({
                type: "path",
                groupTexts: [
                    "left-axis",
                    "axisl-line"
                ],
                data: [
                    {
                        path: `M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y + this.boundingRect.height} `,
                        strokeFill: this.axisThemeConfig.axisLineColor,
                        strokeWidth: this.axisConfig.axisLineWidth
                    }
                ]
            });
        }
        if (this.showLabel) {
            t.push({
                type: "text",
                groupTexts: [
                    "left-axis",
                    "label"
                ],
                data: this.getTickValues().map((i)=>({
                        text: i.toString(),
                        x: this.boundingRect.x + this.boundingRect.width - (this.showLabel ? this.axisConfig.labelPadding : 0) - (this.showTick ? this.axisConfig.tickLength : 0) - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
                        y: this.getScaleValue(i),
                        fill: this.axisThemeConfig.labelColor,
                        fontSize: this.axisConfig.labelFontSize,
                        rotation: 0,
                        verticalPos: "middle",
                        horizontalPos: "right"
                    }))
            });
        }
        if (this.showTick) {
            const i = this.boundingRect.x + this.boundingRect.width - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
            t.push({
                type: "path",
                groupTexts: [
                    "left-axis",
                    "ticks"
                ],
                data: this.getTickValues().map((s)=>({
                        path: `M ${i},${this.getScaleValue(s)} L ${i - this.axisConfig.tickLength},${this.getScaleValue(s)}`,
                        strokeFill: this.axisThemeConfig.tickColor,
                        strokeWidth: this.axisConfig.tickWidth
                    }))
            });
        }
        if (this.showTitle) {
            t.push({
                type: "text",
                groupTexts: [
                    "left-axis",
                    "title"
                ],
                data: [
                    {
                        text: this.title,
                        x: this.boundingRect.x + this.axisConfig.titlePadding,
                        y: this.boundingRect.y + this.boundingRect.height / 2,
                        fill: this.axisThemeConfig.titleColor,
                        fontSize: this.axisConfig.titleFontSize,
                        rotation: 270,
                        verticalPos: "top",
                        horizontalPos: "center"
                    }
                ]
            });
        }
        return t;
    }
    getDrawableElementsForBottomAxis() {
        const t = [];
        if (this.showAxisLine) {
            const i = this.boundingRect.y + this.axisConfig.axisLineWidth / 2;
            t.push({
                type: "path",
                groupTexts: [
                    "bottom-axis",
                    "axis-line"
                ],
                data: [
                    {
                        path: `M ${this.boundingRect.x},${i} L ${this.boundingRect.x + this.boundingRect.width},${i}`,
                        strokeFill: this.axisThemeConfig.axisLineColor,
                        strokeWidth: this.axisConfig.axisLineWidth
                    }
                ]
            });
        }
        if (this.showLabel) {
            t.push({
                type: "text",
                groupTexts: [
                    "bottom-axis",
                    "label"
                ],
                data: this.getTickValues().map((i)=>({
                        text: i.toString(),
                        x: this.getScaleValue(i) + this.calculateOffsetByRotation("height"),
                        y: this.boundingRect.y + this.axisConfig.labelPadding + (this.showTick ? this.axisConfig.tickLength : 0) + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0) + Math.abs(this.calculateOffsetByRotation("width")),
                        fill: this.axisThemeConfig.labelColor,
                        fontSize: this.axisConfig.labelFontSize,
                        rotation: this.normalizedLabelRotationInRad * 180 / Math.PI,
                        verticalPos: "top",
                        horizontalPos: "center"
                    }))
            });
        }
        if (this.showTick) {
            const i = this.boundingRect.y + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
            t.push({
                type: "path",
                groupTexts: [
                    "bottom-axis",
                    "ticks"
                ],
                data: this.getTickValues().map((s)=>({
                        path: `M ${this.getScaleValue(s)},${i} L ${this.getScaleValue(s)},${i + this.axisConfig.tickLength}`,
                        strokeFill: this.axisThemeConfig.tickColor,
                        strokeWidth: this.axisConfig.tickWidth
                    }))
            });
        }
        if (this.showTitle) {
            t.push({
                type: "text",
                groupTexts: [
                    "bottom-axis",
                    "title"
                ],
                data: [
                    {
                        text: this.title,
                        x: this.range[0] + (this.range[1] - this.range[0]) / 2,
                        y: this.boundingRect.y + this.boundingRect.height - this.axisConfig.titlePadding - this.titleTextHeight,
                        fill: this.axisThemeConfig.titleColor,
                        fontSize: this.axisConfig.titleFontSize,
                        rotation: 0,
                        verticalPos: "top",
                        horizontalPos: "center"
                    }
                ]
            });
        }
        return t;
    }
    getDrawableElementsForTopAxis() {
        const t = [];
        if (this.showAxisLine) {
            const i = this.boundingRect.y + this.boundingRect.height - this.axisConfig.axisLineWidth / 2;
            t.push({
                type: "path",
                groupTexts: [
                    "top-axis",
                    "axis-line"
                ],
                data: [
                    {
                        path: `M ${this.boundingRect.x},${i} L ${this.boundingRect.x + this.boundingRect.width},${i}`,
                        strokeFill: this.axisThemeConfig.axisLineColor,
                        strokeWidth: this.axisConfig.axisLineWidth
                    }
                ]
            });
        }
        if (this.showLabel) {
            t.push({
                type: "text",
                groupTexts: [
                    "top-axis",
                    "label"
                ],
                data: this.getTickValues().map((i)=>({
                        text: i.toString(),
                        x: this.getScaleValue(i),
                        y: this.boundingRect.y + (this.showTitle ? this.titleTextHeight + this.axisConfig.titlePadding * 2 : 0) + this.axisConfig.labelPadding,
                        fill: this.axisThemeConfig.labelColor,
                        fontSize: this.axisConfig.labelFontSize,
                        rotation: 0,
                        verticalPos: "top",
                        horizontalPos: "center"
                    }))
            });
        }
        if (this.showTick) {
            const i = this.boundingRect.y;
            t.push({
                type: "path",
                groupTexts: [
                    "top-axis",
                    "ticks"
                ],
                data: this.getTickValues().map((s)=>({
                        path: `M ${this.getScaleValue(s)},${i + this.boundingRect.height - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)} L ${this.getScaleValue(s)},${i + this.boundingRect.height - this.axisConfig.tickLength - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)}`,
                        strokeFill: this.axisThemeConfig.tickColor,
                        strokeWidth: this.axisConfig.tickWidth
                    }))
            });
        }
        if (this.showTitle) {
            t.push({
                type: "text",
                groupTexts: [
                    "top-axis",
                    "title"
                ],
                data: [
                    {
                        text: this.title,
                        x: this.boundingRect.x + this.boundingRect.width / 2,
                        y: this.boundingRect.y + this.axisConfig.titlePadding,
                        fill: this.axisThemeConfig.titleColor,
                        fontSize: this.axisConfig.titleFontSize,
                        rotation: 0,
                        verticalPos: "top",
                        horizontalPos: "center"
                    }
                ]
            });
        }
        return t;
    }
    getDrawableElements() {
        if (this.axisPosition === "left") {
            return this.getDrawableElementsForLeftAxis();
        }
        if (this.axisPosition === "right") {
            throw Error("Drawing of right axis is not implemented");
        }
        if (this.axisPosition === "bottom") {
            return this.getDrawableElementsForBottomAxis();
        }
        if (this.axisPosition === "top") {
            return this.getDrawableElementsForTopAxis();
        }
        return [];
    }
};
__1(K, "BaseAxis");
const $t = K;
let Z;
Z = class extends $t {
    constructor(t, i, s, a, o){
        super(t, a, o, i);
        this.categories = s;
        this.scale = wt().domain(this.categories).range(this.getRange());
    }
    setRange(t) {
        super.setRange(t);
    }
    recalculateScale() {
        this.scale = wt().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(0.5);
        l_1.trace("BandAxis axis final categories, range: ", this.categories, this.getRange());
    }
    getTickValues() {
        return this.categories;
    }
    getScaleValue(t) {
        return this.scale(t) ?? this.getRange()[0];
    }
};
__1(Z, "BandAxis");
const vi = Z;
let J;
J = class extends $t {
    constructor(t, i, s, a, o){
        super(t, a, o, i);
        this.domain = s;
        this.scale = l_2().domain(this.domain).range(this.getRange());
    }
    getTickValues() {
        return this.scale.ticks();
    }
    recalculateScale() {
        const t = [
            ...this.domain
        ];
        if (this.axisPosition === "left") {
            t.reverse();
        }
        this.scale = l_2().domain(t).range(this.getRange());
    }
    getScaleValue(t) {
        return this.scale(t);
    }
};
__1(J, "LinearAxis");
const Li = J;
function Rt(e, t, i, s) {
    const a = new Ut(s);
    if (ft(e)) {
        return new vi(t, i, e.categories, e.title, a);
    }
    return new Li(t, i, [
        e.min,
        e.max
    ], e.title, a);
}
__1(Rt, "getAxis");
const tt = class {
    constructor(t, i, s, a){
        this.textDimensionCalculator = t;
        this.chartConfig = i;
        this.chartData = s;
        this.chartThemeConfig = a;
        this.boundingRect = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        this.showChartTitle = false;
    }
    setBoundingBoxXY(t) {
        this.boundingRect.x = t.x;
        this.boundingRect.y = t.y;
    }
    calculateSpace(t) {
        const i = this.textDimensionCalculator.getMaxDimension([
            this.chartData.title
        ], this.chartConfig.titleFontSize);
        const s = Math.max(i.width, t.width);
        const a = i.height + 2 * this.chartConfig.titlePadding;
        if (i.width <= s && i.height <= a && this.chartConfig.showTitle && this.chartData.title) {
            this.boundingRect.width = s;
            this.boundingRect.height = a;
            this.showChartTitle = true;
        }
        return {
            width: this.boundingRect.width,
            height: this.boundingRect.height
        };
    }
    getDrawableElements() {
        const t = [];
        if (this.showChartTitle) {
            t.push({
                groupTexts: [
                    "chart-title"
                ],
                type: "text",
                data: [
                    {
                        fontSize: this.chartConfig.titleFontSize,
                        text: this.chartData.title,
                        verticalPos: "middle",
                        horizontalPos: "center",
                        x: this.boundingRect.x + this.boundingRect.width / 2,
                        y: this.boundingRect.y + this.boundingRect.height / 2,
                        fill: this.chartThemeConfig.titleColor,
                        rotation: 0
                    }
                ]
            });
        }
        return t;
    }
};
__1(tt, "ChartTitle");
const Pi = tt;
function qt(e, t, i, s) {
    const a = new Ut(s);
    return new Pi(a, e, t, i);
}
__1(qt, "getChartTitleComponent");
const it = class {
    constructor(t, i, s, a, o){
        this.plotData = t;
        this.xAxis = i;
        this.yAxis = s;
        this.orientation = a;
        this.plotIndex = o;
    }
    getDrawableElement() {
        const t = this.plotData.data.map((a)=>[
                this.xAxis.getScaleValue(a[0]),
                this.yAxis.getScaleValue(a[1])
            ]);
        let path;
        if (this.orientation === "horizontal") {
            path = a7().y((a)=>a[0]).x((a)=>a[1])(t);
        } else {
            path = a7().x((a)=>a[0]).y((a)=>a[1])(t);
        }
        if (!path) {
            return [];
        }
        const s = [
            {
                groupTexts: [
                    "plot",
                    `line-plot-${this.plotIndex}`
                ],
                type: "path",
                data: [
                    {
                        path,
                        strokeFill: this.plotData.strokeFill,
                        strokeWidth: this.plotData.strokeWidth
                    }
                ]
            }
        ];
        if (this.plotData.pointLabels && this.plotData.pointLabels.length > 0) {
            const l = [];
            for (const [f, [d, k]] of t.entries()){
                const text = this.plotData.pointLabels[f];
                text && (this.orientation === "horizontal" ? l.push({
                    x: k + 10,
                    y: d,
                    text,
                    fill: this.plotData.strokeFill,
                    verticalPos: "middle",
                    horizontalPos: "left",
                    fontSize: 12,
                    rotation: 0
                }) : l.push({
                    x: d,
                    y: k - 10,
                    text,
                    fill: this.plotData.strokeFill,
                    verticalPos: "middle",
                    horizontalPos: "center",
                    fontSize: 12,
                    rotation: 0
                }));
            }
            if (l.length > 0) {
                s.push({
                    groupTexts: [
                        "plot",
                        `line-plot-${this.plotIndex}`,
                        "labels"
                    ],
                    type: "text",
                    data: l
                });
            }
        }
        return s;
    }
};
__1(it, "LinePlot");
const Ei = it;
const et = class {
    constructor(t, i, s, a, o, l){
        this.barData = t;
        this.boundingRect = i;
        this.xAxis = s;
        this.yAxis = a;
        this.orientation = o;
        this.plotIndex = l;
    }
    getDrawableElement() {
        const t = this.barData.data.map((o)=>[
                this.xAxis.getScaleValue(o[0]),
                this.yAxis.getScaleValue(o[1])
            ]);
        const s = Math.min(this.xAxis.getAxisOuterPadding() * 2, this.xAxis.getTickDistance()) * (1 - 0.05);
        const a = s / 2;
        if (this.orientation === "horizontal") {
            return [
                {
                    groupTexts: [
                        "plot",
                        `bar-plot-${this.plotIndex}`
                    ],
                    type: "rect",
                    data: t.map((o)=>({
                            x: this.boundingRect.x,
                            y: o[0] - a,
                            height: s,
                            width: o[1] - this.boundingRect.x,
                            fill: this.barData.fill,
                            strokeWidth: 0,
                            strokeFill: this.barData.fill
                        }))
                }
            ];
        }
        return [
            {
                groupTexts: [
                    "plot",
                    `bar-plot-${this.plotIndex}`
                ],
                type: "rect",
                data: t.map((o)=>({
                        x: o[0] - a,
                        y: o[1],
                        width: s,
                        height: this.boundingRect.y + this.boundingRect.height - o[1],
                        fill: this.barData.fill,
                        strokeWidth: 0,
                        strokeFill: this.barData.fill
                    }))
            }
        ];
    }
};
__1(et, "BarPlot");
const Ii = et;
const st = class {
    constructor(t, i, s){
        this.chartConfig = t;
        this.chartData = i;
        this.chartThemeConfig = s;
        this.boundingRect = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
    }
    setAxes(t, i) {
        this.xAxis = t;
        this.yAxis = i;
    }
    setBoundingBoxXY(t) {
        this.boundingRect.x = t.x;
        this.boundingRect.y = t.y;
    }
    calculateSpace(t) {
        this.boundingRect.width = t.width;
        this.boundingRect.height = t.height;
        return {
            width: this.boundingRect.width,
            height: this.boundingRect.height
        };
    }
    getDrawableElements() {
        if (!(this.xAxis && this.yAxis)) {
            throw Error("Axes must be passed to render Plots");
        }
        const t = [];
        for (const [i, s] of this.chartData.plots.entries()){
            switch(s.type){
                case "line":
                    {
                        const a = new Ei(s, this.xAxis, this.yAxis, this.chartConfig.chartOrientation, i);
                        t.push(...a.getDrawableElement());
                    }
                    break;
                case "bar":
                    {
                        const a = new Ii(s, this.boundingRect, this.xAxis, this.yAxis, this.chartConfig.chartOrientation, i);
                        t.push(...a.getDrawableElement());
                    }
                    break;
            }
        }
        return t;
    }
};
__1(st, "BasePlot");
const Mi = st;
function Gt(e, t, i) {
    return new Mi(e, t, i);
}
__1(Gt, "getPlotComponent");
const at = class {
    constructor(t, i, s, a){
        this.chartConfig = t;
        this.chartData = i;
        this.componentStore = {
            title: qt(t, i, s, a),
            plot: Gt(t, i, s),
            xAxis: Rt(i.xAxis, t.xAxis, {
                titleColor: s.xAxisTitleColor,
                labelColor: s.xAxisLabelColor,
                tickColor: s.xAxisTickColor,
                axisLineColor: s.xAxisLineColor
            }, a),
            yAxis: Rt(i.yAxis, t.yAxis, {
                titleColor: s.yAxisTitleColor,
                labelColor: s.yAxisLabelColor,
                tickColor: s.yAxisTickColor,
                axisLineColor: s.yAxisLineColor
            }, a)
        };
    }
    calculateVerticalSpace() {
        let width = this.chartConfig.width;
        let height = this.chartConfig.height;
        let s = 0;
        let a = 0;
        let o = Math.floor(width * this.chartConfig.plotReservedSpacePercent / 100);
        let l = Math.floor(height * this.chartConfig.plotReservedSpacePercent / 100);
        let f = this.componentStore.plot.calculateSpace({
            width: o,
            height: l
        });
        width -= f.width;
        height -= f.height;
        f = this.componentStore.title.calculateSpace({
            width: this.chartConfig.width,
            height
        });
        a = f.height;
        height -= f.height;
        this.componentStore.xAxis.setAxisPosition("bottom");
        f = this.componentStore.xAxis.calculateSpace({
            width,
            height
        });
        height -= f.height;
        this.componentStore.yAxis.setAxisPosition("left");
        f = this.componentStore.yAxis.calculateSpace({
            width,
            height
        });
        s = f.width;
        width -= f.width;
        if (width > 0) {
            o += width;
            width = 0;
        }
        if (height > 0) {
            l += height;
            height = 0;
        }
        this.componentStore.plot.calculateSpace({
            width: o,
            height: l
        });
        this.componentStore.plot.setBoundingBoxXY({
            x: s,
            y: a
        });
        this.componentStore.xAxis.setRange([
            s,
            s + o
        ]);
        this.componentStore.xAxis.setBoundingBoxXY({
            x: s,
            y: a + l
        });
        this.componentStore.yAxis.setRange([
            a,
            a + l
        ]);
        this.componentStore.yAxis.setBoundingBoxXY({
            x: 0,
            y: a
        });
        if (this.chartData.plots.some((d)=>St(d))) {
            this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
        }
    }
    calculateHorizontalSpace() {
        let width = this.chartConfig.width;
        let height = this.chartConfig.height;
        let s = 0;
        let a = 0;
        let o = 0;
        let l = Math.floor(width * this.chartConfig.plotReservedSpacePercent / 100);
        let f = Math.floor(height * this.chartConfig.plotReservedSpacePercent / 100);
        let d = this.componentStore.plot.calculateSpace({
            width: l,
            height: f
        });
        width -= d.width;
        height -= d.height;
        d = this.componentStore.title.calculateSpace({
            width: this.chartConfig.width,
            height
        });
        s = d.height;
        height -= d.height;
        this.componentStore.xAxis.setAxisPosition("left");
        d = this.componentStore.xAxis.calculateSpace({
            width,
            height
        });
        width -= d.width;
        a = d.width;
        this.componentStore.yAxis.setAxisPosition("top");
        d = this.componentStore.yAxis.calculateSpace({
            width,
            height
        });
        height -= d.height;
        o = s + d.height;
        if (width > 0) {
            l += width;
            width = 0;
        }
        if (height > 0) {
            f += height;
            height = 0;
        }
        this.componentStore.plot.calculateSpace({
            width: l,
            height: f
        });
        this.componentStore.plot.setBoundingBoxXY({
            x: a,
            y: o
        });
        this.componentStore.yAxis.setRange([
            a,
            a + l
        ]);
        this.componentStore.yAxis.setBoundingBoxXY({
            x: a,
            y: s
        });
        this.componentStore.xAxis.setRange([
            o,
            o + f
        ]);
        this.componentStore.xAxis.setBoundingBoxXY({
            x: 0,
            y: o
        });
        if (this.chartData.plots.some((k)=>St(k))) {
            this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
        }
    }
    calculateSpace() {
        if (this.chartConfig.chartOrientation === "horizontal") {
            this.calculateHorizontalSpace();
        } else {
            this.calculateVerticalSpace();
        }
    }
    getDrawableElement() {
        this.calculateSpace();
        const t = [];
        this.componentStore.plot.setAxes(this.componentStore.xAxis, this.componentStore.yAxis);
        for (const i of Object.values(this.componentStore)){
            t.push(...i.getDrawableElements());
        }
        return t;
    }
};
__1(at, "Orchestrator");
const zi = at;
const nt = class {
    static build(t, i, s, a) {
        return new zi(t, i, s, a).getDrawableElement();
    }
};
__1(nt, "XYChartBuilder");
const Bi = nt;
let ht = 0;
let jt;
let lt = vt();
let ct = Dt();
let y = Lt();
let _t = ct.plotColorPalette.split(",").map((e)=>e.trim());
let pt = false;
let Tt = false;
function Dt() {
    const e = W();
    const t = z();
    return B(e.xyChart, t.themeVariables.xyChart);
}
__1(Dt, "getChartDefaultThemeConfig");
function vt() {
    const e = z();
    return B(D.xyChart, e.xyChart);
}
__1(vt, "getChartDefaultConfig");
function Lt() {
    return {
        yAxis: {
            type: "linear",
            title: "",
            min: Infinity,
            max: -Infinity
        },
        xAxis: {
            type: "band",
            title: "",
            categories: []
        },
        title: "",
        plots: []
    };
}
__1(Lt, "getChartDefaultData");
function ut(e) {
    const t = z();
    return i(e.trim(), t);
}
__1(ut, "textSanitizer");
function setTmpSVGG(e) {
    jt = e;
}
__1(setTmpSVGG, "setTmpSVGG");
function setOrientation(e) {
    if (e === "horizontal") {
        lt.chartOrientation = "horizontal";
    } else {
        lt.chartOrientation = "vertical";
    }
}
__1(setOrientation, "setOrientation");
function setXAxisTitle(e) {
    y.xAxis.title = ut(e.text);
}
__1(setXAxisTitle, "setXAxisTitle");
function setXAxisRangeData(e, t) {
    y.xAxis = {
        type: "linear",
        title: y.xAxis.title,
        min: e,
        max: t
    };
    pt = true;
}
__1(setXAxisRangeData, "setXAxisRangeData");
function setXAxisBand(e) {
    y.xAxis = {
        type: "band",
        title: y.xAxis.title,
        categories: e.map((t)=>ut(t.text))
    };
    pt = true;
}
__1(setXAxisBand, "setXAxisBand");
function setYAxisTitle(e) {
    y.yAxis.title = ut(e.text);
}
__1(setYAxisTitle, "setYAxisTitle");
function setYAxisRangeData(e, t) {
    y.yAxis = {
        type: "linear",
        title: y.yAxis.title,
        min: e,
        max: t
    };
    Tt = true;
}
__1(setYAxisRangeData, "setYAxisRangeData");
function ei(e) {
    const t = Math.min(...e);
    const i = Math.max(...e);
    const s = j(y.yAxis) ? y.yAxis.min : Infinity;
    const a = j(y.yAxis) ? y.yAxis.max : -Infinity;
    y.yAxis = {
        type: "linear",
        title: y.yAxis.title,
        min: Math.min(s, t),
        max: Math.max(a, i)
    };
}
__1(ei, "setYAxisRangeFromPlotData");
function Et(e) {
    let t = [];
    if (e.length === 0) {
        return t;
    }
    if (!pt) {
        const i = j(y.xAxis) ? y.xAxis.min : Infinity;
        const s = j(y.xAxis) ? y.xAxis.max : -Infinity;
        setXAxisRangeData(Math.min(i, 1), Math.max(s, e.length));
    }
    if (ft(y.xAxis) && e.length > y.xAxis.categories.length) {
        e = e.slice(0, y.xAxis.categories.length);
    }
    if (!Tt) {
        ei(e);
    }
    if (ft(y.xAxis)) {
        t = y.xAxis.categories.map((i, s)=>[
                i,
                e[s]
            ]);
    }
    if (j(y.xAxis)) {
        const i = y.xAxis.min;
        const s = y.xAxis.max;
        const a = (s - i) / (e.length - 1);
        const o = [];
        for(let l = i; l <= s; l += a){
            o.push(`${l}`);
        }
        t = o.map((l, f)=>[
                l,
                e[f]
            ]);
    }
    return t;
}
__1(Et, "transformDataWithoutCategory");
function It(e) {
    return _t[e === 0 ? 0 : e % _t.length];
}
__1(It, "getPlotColorFromPalette");
function setLineData(e, t) {
    const i = t.map((l)=>l.value);
    const pointLabels = t.map((l)=>{
        if (l.label) {
            return ut(l.label);
        }
        return "";
    });
    const a = Et(i);
    const o = pointLabels.some((l)=>l !== "");
    y.plots.push({
        type: "line",
        strokeFill: It(ht),
        strokeWidth: 2,
        data: a,
        ...o ? {
            pointLabels
        } : {}
    });
    ht++;
}
__1(setLineData, "setLineData");
function setBarData(e, t) {
    const i = t.map((a)=>a.value);
    const s = Et(i);
    y.plots.push({
        type: "bar",
        fill: It(ht),
        data: s
    });
    ht++;
}
__1(setBarData, "setBarData");
function getDrawableElem() {
    if (y.plots.length === 0) {
        throw Error("No Plot to render, please provide a plot with some data");
    }
    y.title = getDiagramTitle();
    return Bi.build(lt, y, ct, jt);
}
__1(getDrawableElem, "getDrawableElem");
function getChartThemeConfig() {
    return ct;
}
__1(getChartThemeConfig, "getChartThemeConfig");
function getChartConfig() {
    return lt;
}
__1(getChartConfig, "getChartConfig");
function getXYChartData() {
    return y;
}
__1(getXYChartData, "getXYChartData");
const clear = __1(()=>{
    q();
    ht = 0;
    lt = vt();
    y = Lt();
    ct = Dt();
    _t = ct.plotColorPalette.split(",").map((e)=>e.trim());
    pt = false;
    Tt = false;
}, "clear");
const db = {
    getDrawableElem,
    clear,
    setAccTitle,
    getAccTitle,
    setDiagramTitle,
    getDiagramTitle,
    getAccDescription,
    setAccDescription,
    setOrientation,
    setXAxisTitle,
    setXAxisRangeData,
    setXAxisBand,
    setYAxisTitle,
    setYAxisRangeData,
    setLineData,
    setBarData,
    setTmpSVGG,
    getChartThemeConfig,
    getChartConfig,
    getXYChartData
};
const draw = __1((e, t, i, s)=>{
    const a = s.db;
    const o = a.getChartThemeConfig();
    const l = a.getChartConfig();
    const f = a.getXYChartData().plots[0].data.map((m)=>m[1]);
    function d(m) {
        if (m === "top") {
            return "text-before-edge";
        }
        return "middle";
    }
    __1(d, "getDominantBaseLine");
    function k(m) {
        switch(m){
            case "left":
                return "start";
            case "right":
                return "end";
            default:
                return "middle";
        }
    }
    __1(k, "getTextAnchor");
    function T(m) {
        return `translate(${m.x}, ${m.y}) rotate(${m.rotation || 0})`;
    }
    __1(T, "getTextTransformation");
    l_1.debug(`Rendering xychart chart
` + e);
    const _ = F(t);
    const b = _.append("g").attr("class", "main");
    const E = b.append("rect").attr("width", l.width).attr("height", l.height).attr("class", "background");
    e_1(_, l.height, l.width, true);
    _.attr("viewBox", `0 0 ${l.width} ${l.height}`);
    E.attr("fill", o.backgroundColor);
    a.setTmpSVGG(_.append("g").attr("class", "mermaid-tmp-group"));
    const L = a.getDrawableElem();
    const P = {};
    function I(m) {
        let D = b;
        let c = "";
        for (const [B] of m.entries()){
            let W = b;
            if (B > 0 && P[c]) {
                W = P[c];
            }
            c += m[B];
            D = P[c];
            if (!D) {
                D = P[c] = W.append("g").attr("class", m[B]);
            }
        }
        return D;
    }
    __1(I, "getGroup");
    for (const m of L){
        if (m.data.length === 0) {
            continue;
        }
        const D = I(m.groupTexts);
        switch(m.type){
            case "rect":
                D.selectAll("rect").data(m.data).enter().append("rect").attr("x", (c)=>c.x).attr("y", (c)=>c.y).attr("width", (c)=>c.width).attr("height", (c)=>c.height).attr("fill", (c)=>c.fill).attr("stroke", (c)=>c.strokeFill).attr("stroke-width", (c)=>c.strokeWidth);
                if (l.showDataLabel) {
                    const c = l.showDataLabelOutsideBar;
                    if (l.chartOrientation === "horizontal") {
                        let B = ({ data, label }, V)=>V * label.length * W <= data.width - X;
                        __1(B, "fitsHorizontally");
                        const W = 0.7;
                        const X = 10;
                        const Y = m.data.map((w, V)=>({
                                data: w,
                                label: f[V].toString()
                            })).filter((w)=>w.data.width > 0 && w.data.height > 0);
                        const S = Y.map((w)=>{
                            const { data } = w;
                            let R = data.height * 0.7;
                            while(!B(w, R) && R > 0){
                                R -= 1;
                            }
                            return R;
                        });
                        const H = Math.floor(Math.min(...S));
                        const A = __1((w)=>{
                            if (c) {
                                return w.data.x + w.data.width + X;
                            }
                            return w.data.x + w.data.width - X;
                        }, "determineLabelXPosition");
                        D.selectAll("text").data(Y).enter().append("text").attr("x", A).attr("y", (w)=>w.data.y + w.data.height / 2).attr("text-anchor", c ? "start" : "end").attr("dominant-baseline", "middle").attr("fill", o.dataLabelColor).attr("font-size", `${H}px`).text((w)=>w.label);
                    } else {
                        let B = ({ data, label }, w, V)=>{
                            const F = w * label.length * 0.7;
                            const h = data.x + data.width / 2;
                            const u = h - F / 2;
                            const g = h + F / 2;
                            const x = u >= data.x && g <= data.x + data.width;
                            const C = data.y + V + w <= data.y + data.height;
                            return x && C;
                        };
                        __1(B, "fitsInBar");
                        const W = 10;
                        const X = m.data.map((A, w)=>({
                                data: A,
                                label: f[w].toString()
                            })).filter((A)=>A.data.width > 0 && A.data.height > 0);
                        const Y = X.map((A)=>{
                            const { data, label } = A;
                            let R = data.width / (label.length * 0.7);
                            while(!B(A, R, W) && R > 0){
                                R -= 1;
                            }
                            return R;
                        });
                        const S = Math.floor(Math.min(...Y));
                        const H = __1((A)=>{
                            if (c) {
                                return A.data.y - W;
                            }
                            return A.data.y + W;
                        }, "determineLabelYPosition");
                        D.selectAll("text").data(X).enter().append("text").attr("x", (A)=>A.data.x + A.data.width / 2).attr("y", H).attr("text-anchor", "middle").attr("dominant-baseline", c ? "auto" : "hanging").attr("fill", o.dataLabelColor).attr("font-size", `${S}px`).text((A)=>A.label);
                    }
                }
                break;
            case "text":
                D.selectAll("text").data(m.data).enter().append("text").attr("x", 0).attr("y", 0).attr("fill", (c)=>c.fill).attr("font-size", (c)=>c.fontSize).attr("dominant-baseline", (c)=>d(c.verticalPos)).attr("text-anchor", (c)=>k(c.horizontalPos)).attr("transform", (c)=>T(c)).text((c)=>c.text);
                break;
            case "path":
                D.selectAll("path").data(m.data).enter().append("path").attr("d", (c)=>c.path).attr("fill", (c)=>{
                    if (c.fill) {
                        return c.fill;
                    }
                    return "none";
                }).attr("stroke", (c)=>c.strokeFill).attr("stroke-width", (c)=>c.strokeWidth);
                break;
        }
    }
}, "draw");
const renderer = {
    draw
};
export const diagram = {
    parser,
    db,
    renderer
};
