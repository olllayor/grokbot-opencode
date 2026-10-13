import { g } from "./chunk-chunk-XXDRQBXY-DVdINg3t.js";
import { s } from "./chunk-chunk-VR4S4FIN-HF2Hbh9A.js";
import { _ as __1, l as l_1, v, x, z, D, c, i, b6, aa, ab, ac } from "./chunk-mermaid.core-B9Iu5CoE.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "b169587c-14c2-48f0-88dd-fdaca21358bf";
            e._sentryDebugIdIdentifier = "sentry-dbid-b169587c-14c2-48f0-88dd-fdaca21358bf";
        }
    } catch (e) {}
})();
const _ = [];
for(let t = 0; t < 256; ++t){
    _.push((t + 256).toString(16).slice(1));
}
function Ee(t, e = 0) {
    return `${_[t[e + 0]] + _[t[e + 1]] + _[t[e + 2]] + _[t[e + 3]]}-${_[t[e + 4]]}${_[t[e + 5]]}-${_[t[e + 6]]}${_[t[e + 7]]}-${_[t[e + 8]]}${_[t[e + 9]]}-${_[t[e + 10]]}${_[t[e + 11]]}${_[t[e + 12]]}${_[t[e + 13]]}${_[t[e + 14]]}${_[t[e + 15]]}`.toLowerCase();
}
let q;
const _e = new Uint8Array(16);
function be() {
    if (!q) {
        if (typeof crypto === "undefined" || !crypto.getRandomValues) {
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        }
        q = crypto.getRandomValues.bind(crypto);
    }
    return q(_e);
}
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const ie = {
    randomUUID
};
function Se(t, e, a) {
    if (ie.randomUUID && !t) {
        return ie.randomUUID();
    }
    t = t || {};
    const l = t.random ?? t.rng?.() ?? be();
    if (l.length < 16) {
        throw new Error("Random bytes length must be >= 16");
    }
    l[6] = l[6] & 15 | 64;
    l[8] = l[8] & 63 | 128;
    return Ee(l);
}
const J = (()=>{
    const t = __1((L, s, i, o)=>{
        i = i || {};
        for(o = L.length; o--; i[L[o]] = s);
        return i;
    }, "o");
    const e = [
        1,
        4
    ];
    const a = [
        1,
        13
    ];
    const l = [
        1,
        12
    ];
    const n = [
        1,
        15
    ];
    const d = [
        1,
        16
    ];
    const f = [
        1,
        20
    ];
    const y = [
        1,
        19
    ];
    const E = [
        6,
        7,
        8
    ];
    const b = [
        1,
        26
    ];
    const v = [
        1,
        24
    ];
    const R = [
        1,
        25
    ];
    const g = [
        6,
        7,
        11
    ];
    const A = [
        1,
        6,
        13,
        15,
        16,
        19,
        22
    ];
    const K = [
        1,
        33
    ];
    const Q = [
        1,
        34
    ];
    const $ = [
        1,
        6,
        7,
        11,
        13,
        15,
        16,
        19,
        22
    ];
    const H = {
        trace: __1(()=>{}, "trace"),
        yy: {},
        symbols_: {
            error: 2,
            start: 3,
            mindMap: 4,
            spaceLines: 5,
            SPACELINE: 6,
            NL: 7,
            MINDMAP: 8,
            document: 9,
            stop: 10,
            EOF: 11,
            statement: 12,
            SPACELIST: 13,
            node: 14,
            ICON: 15,
            CLASS: 16,
            nodeWithId: 17,
            nodeWithoutId: 18,
            NODE_DSTART: 19,
            NODE_DESCR: 20,
            NODE_DEND: 21,
            NODE_ID: 22,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            6: "SPACELINE",
            7: "NL",
            8: "MINDMAP",
            11: "EOF",
            13: "SPACELIST",
            15: "ICON",
            16: "CLASS",
            19: "NODE_DSTART",
            20: "NODE_DESCR",
            21: "NODE_DEND",
            22: "NODE_ID"
        },
        productions_: [
            0,
            [
                3,
                1
            ],
            [
                3,
                2
            ],
            [
                5,
                1
            ],
            [
                5,
                2
            ],
            [
                5,
                2
            ],
            [
                4,
                2
            ],
            [
                4,
                3
            ],
            [
                10,
                1
            ],
            [
                10,
                1
            ],
            [
                10,
                1
            ],
            [
                10,
                2
            ],
            [
                10,
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
                12,
                2
            ],
            [
                12,
                2
            ],
            [
                12,
                2
            ],
            [
                12,
                1
            ],
            [
                12,
                1
            ],
            [
                12,
                1
            ],
            [
                12,
                1
            ],
            [
                12,
                1
            ],
            [
                14,
                1
            ],
            [
                14,
                1
            ],
            [
                18,
                3
            ],
            [
                17,
                1
            ],
            [
                17,
                4
            ]
        ],
        performAction: __1(function(s, i, o, c, p, r, U) {
            const u = r.length - 1;
            switch(p){
                case 6:
                case 7:
                    return c;
                case 8:
                    c.getLogger().trace("Stop NL ");
                    break;
                case 9:
                    c.getLogger().trace("Stop EOF ");
                    break;
                case 11:
                    c.getLogger().trace("Stop NL2 ");
                    break;
                case 12:
                    c.getLogger().trace("Stop EOF2 ");
                    break;
                case 15:
                    c.getLogger().info("Node: ", r[u].id);
                    c.addNode(r[u - 1].length, r[u].id, r[u].descr, r[u].type);
                    break;
                case 16:
                    c.getLogger().trace("Icon: ", r[u]);
                    c.decorateNode({
                        icon: r[u]
                    });
                    break;
                case 17:
                case 21:
                    c.decorateNode({
                        class: r[u]
                    });
                    break;
                case 18:
                    c.getLogger().trace("SPACELIST");
                    break;
                case 19:
                    c.getLogger().trace("Node: ", r[u].id);
                    c.addNode(0, r[u].id, r[u].descr, r[u].type);
                    break;
                case 20:
                    c.decorateNode({
                        icon: r[u]
                    });
                    break;
                case 25:
                    c.getLogger().trace("node found ..", r[u - 2]);
                    this.$ = {
                        id: r[u - 1],
                        descr: r[u - 1],
                        type: c.getType(r[u - 2], r[u])
                    };
                    break;
                case 26:
                    this.$ = {
                        id: r[u],
                        descr: r[u],
                        type: c.nodeType.DEFAULT
                    };
                    break;
                case 27:
                    c.getLogger().trace("node found ..", r[u - 3]);
                    this.$ = {
                        id: r[u - 3],
                        descr: r[u - 1],
                        type: c.getType(r[u - 2], r[u])
                    };
                    break;
            }
        }, "anonymous"),
        table: [
            {
                3: 1,
                4: 2,
                5: 3,
                6: [
                    1,
                    5
                ],
                8: e
            },
            {
                1: [
                    3
                ]
            },
            {
                1: [
                    2,
                    1
                ]
            },
            {
                4: 6,
                6: [
                    1,
                    7
                ],
                7: [
                    1,
                    8
                ],
                8: e
            },
            {
                6: a,
                7: [
                    1,
                    10
                ],
                9: 9,
                12: 11,
                13: l,
                14: 14,
                15: n,
                16: d,
                17: 17,
                18: 18,
                19: f,
                22: y
            },
            t(E, [
                2,
                3
            ]),
            {
                1: [
                    2,
                    2
                ]
            },
            t(E, [
                2,
                4
            ]),
            t(E, [
                2,
                5
            ]),
            {
                1: [
                    2,
                    6
                ],
                6: a,
                12: 21,
                13: l,
                14: 14,
                15: n,
                16: d,
                17: 17,
                18: 18,
                19: f,
                22: y
            },
            {
                6: a,
                9: 22,
                12: 11,
                13: l,
                14: 14,
                15: n,
                16: d,
                17: 17,
                18: 18,
                19: f,
                22: y
            },
            {
                6: b,
                7: v,
                10: 23,
                11: R
            },
            t(g, [
                2,
                22
            ], {
                17: 17,
                18: 18,
                14: 27,
                15: [
                    1,
                    28
                ],
                16: [
                    1,
                    29
                ],
                19: f,
                22: y
            }),
            t(g, [
                2,
                18
            ]),
            t(g, [
                2,
                19
            ]),
            t(g, [
                2,
                20
            ]),
            t(g, [
                2,
                21
            ]),
            t(g, [
                2,
                23
            ]),
            t(g, [
                2,
                24
            ]),
            t(g, [
                2,
                26
            ], {
                19: [
                    1,
                    30
                ]
            }),
            {
                20: [
                    1,
                    31
                ]
            },
            {
                6: b,
                7: v,
                10: 32,
                11: R
            },
            {
                1: [
                    2,
                    7
                ],
                6: a,
                12: 21,
                13: l,
                14: 14,
                15: n,
                16: d,
                17: 17,
                18: 18,
                19: f,
                22: y
            },
            t(A, [
                2,
                14
            ], {
                7: K,
                11: Q
            }),
            t($, [
                2,
                8
            ]),
            t($, [
                2,
                9
            ]),
            t($, [
                2,
                10
            ]),
            t(g, [
                2,
                15
            ]),
            t(g, [
                2,
                16
            ]),
            t(g, [
                2,
                17
            ]),
            {
                20: [
                    1,
                    35
                ]
            },
            {
                21: [
                    1,
                    36
                ]
            },
            t(A, [
                2,
                13
            ], {
                7: K,
                11: Q
            }),
            t($, [
                2,
                11
            ]),
            t($, [
                2,
                12
            ]),
            {
                21: [
                    1,
                    37
                ]
            },
            t(g, [
                2,
                25
            ]),
            t(g, [
                2,
                27
            ])
        ],
        defaultActions: {
            2: [
                2,
                1
            ],
            6: [
                2,
                2
            ]
        },
        parseError: __1(function(s, i) {
            if (i.recoverable) {
                this.trace(s);
            } else {
                const o = new Error(s);
                o.hash = i;
                throw o;
            }
        }, "parseError"),
        parse: __1(function(s) {
            const i = this;
            let o = [
                0
            ];
            let c = [];
            let p = [
                null
            ];
            let r = [];
            const table = this.table;
            let u = "";
            let M = 0;
            let Z = 0;
            const re = 2;
            const ee = 1;
            const oe = r.slice.call(arguments, 1);
            const m = Object.create(this.lexer);
            const T = {
                yy: {}
            };
            for(const z in this.yy){
                if (Object.prototype.hasOwnProperty.call(this.yy, z)) {
                    T.yy[z] = this.yy[z];
                }
            }
            m.setInput(s, T.yy);
            T.yy.lexer = m;
            T.yy.parser = this;
            if (typeof m.yylloc === "undefined") {
                m.yylloc = {};
            }
            let m_yylloc = m.yylloc;
            r.push(m_yylloc);
            const ae = m.options && m.options.ranges;
            if (typeof T.yy.parseError === "function") {
                this.parseError = T.yy.parseError;
            } else {
                this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function ce(S) {
                o.length = o.length - 2 * S;
                p.length = p.length - S;
                r.length = r.length - S;
            }
            __1(ce, "popStack");
            function te() {
                let S;
                S = c.pop() || m.lex() || ee;
                if (typeof S !== "number") {
                    if (S instanceof Array) {
                        c = S;
                        S = c.pop();
                    }
                    S = i.symbols_[S] || S;
                }
                return S;
            }
            __1(te, "lex");
            let k;
            let O;
            let x;
            let X;
            const I = {};
            let V;
            let D;
            let ne;
            let expected;
            while(true){
                O = o[o.length - 1];
                if (this.defaultActions[O]) {
                    x = this.defaultActions[O];
                } else {
                    if (k === null || typeof k === "undefined") {
                        k = te();
                    }
                    x = table[O] && table[O][k];
                }
                if (typeof x === "undefined" || !x.length || !x[0]) {
                    let Y = "";
                    expected = [];
                    for(V in table[O]){
                        if (this.terminals_[V] && V > re) {
                            expected.push(`'${this.terminals_[V]}'`);
                        }
                    }
                    if (m.showPosition) {
                        Y = `Parse error on line ${M + 1}${`:
`}${m.showPosition()}${`
Expecting `}${expected.join(", ")}, got '${this.terminals_[k] || k}'`;
                    } else {
                        Y = `Parse error on line ${M + 1}: Unexpected ${k == ee ? "end of input" : `'${this.terminals_[k] || k}'`}`;
                    }
                    this.parseError(Y, {
                        text: m.match,
                        token: this.terminals_[k] || k,
                        line: m.yylineno,
                        loc: m_yylloc,
                        expected
                    });
                }
                if (x[0] instanceof Array && x.length > 1) {
                    throw new Error(`Parse Error: multiple actions possible at state: ${O}, token: ${k}`);
                }
                switch(x[0]){
                    case 1:
                        o.push(k);
                        p.push(m.yytext);
                        r.push(m.yylloc);
                        o.push(x[1]);
                        k = null;
                        Z = m.yyleng;
                        u = m.yytext;
                        M = m.yylineno;
                        m_yylloc = m.yylloc;
                        break;
                    case 2:
                        D = this.productions_[x[1]][1];
                        I.$ = p[p.length - D];
                        I._$ = {
                            first_line: r[r.length - (D || 1)].first_line,
                            last_line: r[r.length - 1].last_line,
                            first_column: r[r.length - (D || 1)].first_column,
                            last_column: r[r.length - 1].last_column
                        };
                        if (ae) {
                            I._$.range = [
                                r[r.length - (D || 1)].range[0],
                                r[r.length - 1].range[1]
                            ];
                        }
                        X = this.performAction.apply(I, [
                            u,
                            Z,
                            M,
                            T.yy,
                            x[1],
                            p,
                            r
                        ].concat(oe));
                        if (typeof X !== "undefined") {
                            return X;
                        }
                        if (D) {
                            o = o.slice(0, -1 * D * 2);
                            p = p.slice(0, -1 * D);
                            r = r.slice(0, -1 * D);
                        }
                        o.push(this.productions_[x[1]][0]);
                        p.push(I.$);
                        r.push(I._$);
                        ne = table[o[o.length - 2]][o[o.length - 1]];
                        o.push(ne);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }, "parse")
    };
    const se = (()=>{
        const L = {
            EOF: 1,
            parseError: __1(function(i, o) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(i, o);
                } else {
                    throw new Error(i);
                }
            }, "parseError"),
            setInput: __1(function(s, i) {
                this.yy = i || this.yy || {};
                this._input = s;
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
                const s = this._input[0];
                this.yytext += s;
                this.yyleng++;
                this.offset++;
                this.match += s;
                this.matched += s;
                const i = s.match(/(?:\r\n?|\n).*/g);
                i ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++;
                this.options.ranges && this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return s;
            }, "input"),
            unput: __1(function(s) {
                const s_length = s.length;
                const o = s.split(/(?:\r\n?|\n)/g);
                this._input = s + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - s_length);
                this.offset -= s_length;
                const c = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (o.length - 1) {
                    this.yylineno -= o.length - 1;
                }
                const range = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: o ? (o.length === c.length ? this.yylloc.first_column : 0) + c[c.length - o.length].length - o[0].length : this.yylloc.first_column - s_length
                };
                if (this.options.ranges) {
                    this.yylloc.range = [
                        range[0],
                        range[0] + this.yyleng - s_length
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
            less: __1(function(s) {
                this.unput(this.match.slice(s));
            }, "less"),
            pastInput: __1(function() {
                const s = this.matched.substr(0, this.matched.length - this.match.length);
                return (s.length > 20 ? "..." : "") + s.substr(-20).replace(/\n/g, "");
            }, "pastInput"),
            upcomingInput: __1(function() {
                let match = this.match;
                if (match.length < 20) {
                    match += this._input.substr(0, 20 - match.length);
                }
                return (match.substr(0, 20) + (match.length > 20 ? "..." : "")).replace(/\n/g, "");
            }, "upcomingInput"),
            showPosition: __1(function() {
                const s = this.pastInput();
                const i = new Array(s.length + 1).join("-");
                return `${s + this.upcomingInput() + `
` + i}^`;
            }, "showPosition"),
            test_match: __1(function(s, i) {
                let o;
                let c;
                let p;
                if (this.options.backtrack_lexer) {
                    p = {
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
                        p.yylloc.range = this.yylloc.range.slice(0);
                    }
                }
                c = s[0].match(/(?:\r\n?|\n).*/g);
                if (c) {
                    this.yylineno += c.length;
                }
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: c ? c[c.length - 1].length - c[c.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + s[0].length
                };
                this.yytext += s[0];
                this.match += s[0];
                this.matches = s;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) {
                    this.yylloc.range = [
                        this.offset,
                        this.offset += this.yyleng
                    ];
                }
                this._more = false;
                this._backtrack = false;
                this._input = this._input.slice(s[0].length);
                this.matched += s[0];
                o = this.performAction.call(this, this.yy, this, i, this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) {
                    this.done = false;
                }
                if (o) {
                    return o;
                }
                if (this._backtrack) {
                    for(const r in p){
                        this[r] = p[r];
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
                let s;
                let i;
                let o;
                let c;
                if (!this._more) {
                    this.yytext = "";
                    this.match = "";
                }
                for(var p = this._currentRules(), r = 0; r < p.length; r++){
                    o = this._input.match(this.rules[p[r]]);
                    if (o && (!i || o[0].length > i[0].length)) {
                        i = o;
                        c = r;
                        if (this.options.backtrack_lexer) {
                            s = this.test_match(o, p[r]);
                            if (s !== false) {
                                return s;
                            }
                            if (this._backtrack) {
                                i = false;
                                continue;
                            } else {
                                return false;
                            }
                        } else if (!this.options.flex) {
                            break;
                        }
                    }
                }
                if (i) {
                    s = this.test_match(i, p[c]);
                    if (s !== false) {
                        return s;
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
                const i = this.next();
                return i || this.lex();
            }, "lex"),
            begin: __1(function(i) {
                this.conditionStack.push(i);
            }, "begin"),
            popState: __1(function() {
                const i = this.conditionStack.length - 1;
                if (i > 0) {
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
            topState: __1(function(i) {
                i = this.conditionStack.length - 1 - Math.abs(i || 0);
                if (i >= 0) {
                    return this.conditionStack[i];
                }
                return "INITIAL";
            }, "topState"),
            pushState: __1(function(i) {
                this.begin(i);
            }, "pushState"),
            stateStackSize: __1(function() {
                return this.conditionStack.length;
            }, "stateStackSize"),
            options: {
                "case-insensitive": true
            },
            performAction: __1(function(i, o, c, p) {
                switch(c){
                    case 0:
                        i.getLogger().trace("Found comment", o.yytext);
                        return 6;
                    case 1:
                        return 8;
                    case 2:
                        this.begin("CLASS");
                        break;
                    case 3:
                        this.popState();
                        return 16;
                    case 4:
                        this.popState();
                        break;
                    case 5:
                        i.getLogger().trace("Begin icon");
                        this.begin("ICON");
                        break;
                    case 6:
                        i.getLogger().trace("SPACELINE");
                        return 6;
                    case 7:
                        return 7;
                    case 8:
                        return 15;
                    case 9:
                        i.getLogger().trace("end icon");
                        this.popState();
                        break;
                    case 10:
                        i.getLogger().trace("Exploding node");
                        this.begin("NODE");
                        return 19;
                    case 11:
                        i.getLogger().trace("Cloud");
                        this.begin("NODE");
                        return 19;
                    case 12:
                        i.getLogger().trace("Explosion Bang");
                        this.begin("NODE");
                        return 19;
                    case 13:
                        i.getLogger().trace("Cloud Bang");
                        this.begin("NODE");
                        return 19;
                    case 14:
                        this.begin("NODE");
                        return 19;
                    case 15:
                        this.begin("NODE");
                        return 19;
                    case 16:
                        this.begin("NODE");
                        return 19;
                    case 17:
                        this.begin("NODE");
                        return 19;
                    case 18:
                        return 13;
                    case 19:
                        return 22;
                    case 20:
                        return 11;
                    case 21:
                        this.begin("NSTR2");
                        break;
                    case 22:
                        return "NODE_DESCR";
                    case 23:
                        this.popState();
                        break;
                    case 24:
                        i.getLogger().trace("Starting NSTR");
                        this.begin("NSTR");
                        break;
                    case 25:
                        i.getLogger().trace("description:", o.yytext);
                        return "NODE_DESCR";
                    case 26:
                        this.popState();
                        break;
                    case 27:
                        this.popState();
                        i.getLogger().trace("node end ))");
                        return "NODE_DEND";
                    case 28:
                        this.popState();
                        i.getLogger().trace("node end )");
                        return "NODE_DEND";
                    case 29:
                        this.popState();
                        i.getLogger().trace("node end ...", o.yytext);
                        return "NODE_DEND";
                    case 30:
                        this.popState();
                        i.getLogger().trace("node end ((");
                        return "NODE_DEND";
                    case 31:
                        this.popState();
                        i.getLogger().trace("node end (-");
                        return "NODE_DEND";
                    case 32:
                        this.popState();
                        i.getLogger().trace("node end (-");
                        return "NODE_DEND";
                    case 33:
                        this.popState();
                        i.getLogger().trace("node end ((");
                        return "NODE_DEND";
                    case 34:
                        this.popState();
                        i.getLogger().trace("node end ((");
                        return "NODE_DEND";
                    case 35:
                        i.getLogger().trace("Long description:", o.yytext);
                        return 20;
                    case 36:
                        i.getLogger().trace("Long description:", o.yytext);
                        return 20;
                }
            }, "anonymous"),
            rules: [
                /^(?:\s*%%.*)/i,
                /^(?:mindmap\b)/i,
                /^(?::::)/i,
                /^(?:.+)/i,
                /^(?:\n)/i,
                /^(?:::icon\()/i,
                /^(?:[\s]+[\n])/i,
                /^(?:[\n]+)/i,
                /^(?:[^\)]+)/i,
                /^(?:\))/i,
                /^(?:-\))/i,
                /^(?:\(-)/i,
                /^(?:\)\))/i,
                /^(?:\))/i,
                /^(?:\(\()/i,
                /^(?:\{\{)/i,
                /^(?:\()/i,
                /^(?:\[)/i,
                /^(?:[\s]+)/i,
                /^(?:[^\(\[\n\)\{\}]+)/i,
                /^(?:$)/i,
                /^(?:["][`])/i,
                /^(?:[^`"]+)/i,
                /^(?:[`]["])/i,
                /^(?:["])/i,
                /^(?:[^"]+)/i,
                /^(?:["])/i,
                /^(?:[\)]\))/i,
                /^(?:[\)])/i,
                /^(?:[\]])/i,
                /^(?:\}\})/i,
                /^(?:\(-)/i,
                /^(?:-\))/i,
                /^(?:\(\()/i,
                /^(?:\()/i,
                /^(?:[^\)\]\(\}]+)/i,
                /^(?:.+(?!\(\())/i
            ],
            conditions: {
                CLASS: {
                    rules: [
                        3,
                        4
                    ],
                    inclusive: false
                },
                ICON: {
                    rules: [
                        8,
                        9
                    ],
                    inclusive: false
                },
                NSTR2: {
                    rules: [
                        22,
                        23
                    ],
                    inclusive: false
                },
                NSTR: {
                    rules: [
                        25,
                        26
                    ],
                    inclusive: false
                },
                NODE: {
                    rules: [
                        21,
                        24,
                        27,
                        28,
                        29,
                        30,
                        31,
                        32,
                        33,
                        34,
                        35,
                        36
                    ],
                    inclusive: false
                },
                INITIAL: {
                    rules: [
                        0,
                        1,
                        2,
                        5,
                        6,
                        7,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20
                    ],
                    inclusive: true
                }
            }
        };
        return L;
    })();
    H.lexer = se;
    function P() {
        this.yy = {};
    }
    __1(P, "Parser");
    P.prototype = H;
    H.Parser = P;
    return new P;
})();
J.parser = J;
const parser = J;
const De = 12;
const N = {
    DEFAULT: 0,
    NO_BORDER: 0,
    ROUNDED_RECT: 1,
    RECT: 2,
    CIRCLE: 3,
    CLOUD: 4,
    BANG: 5,
    HEXAGON: 6
};
const w = class {
    constructor(){
        this.nodes = [];
        this.count = 0;
        this.elements = {};
        this.getLogger = this.getLogger.bind(this);
        this.nodeType = N;
        this.clear();
        this.getType = this.getType.bind(this);
        this.getElementById = this.getElementById.bind(this);
        this.getParent = this.getParent.bind(this);
        this.getMindmap = this.getMindmap.bind(this);
        this.addNode = this.addNode.bind(this);
        this.decorateNode = this.decorateNode.bind(this);
    }
    clear() {
        this.nodes = [];
        this.count = 0;
        this.elements = {};
        this.baseLevel = undefined;
    }
    getParent(e) {
        for(let a = this.nodes.length - 1; a >= 0; a--){
            if (this.nodes[a].level < e) {
                return this.nodes[a];
            }
        }
        return null;
    }
    getMindmap() {
        if (this.nodes.length > 0) {
            return this.nodes[0];
        }
        return null;
    }
    addNode(level, a, l, n) {
        l_1.info("addNode", level, a, l, n);
        let isRoot = false;
        if (this.nodes.length === 0) {
            this.baseLevel = level;
            level = 0;
            isRoot = true;
        } else if (this.baseLevel !== undefined) {
            level = level - this.baseLevel;
            isRoot = false;
        }
        const f = c();
        let padding = f.mindmap?.padding ?? D.mindmap.padding;
        switch(n){
            case this.nodeType.ROUNDED_RECT:
            case this.nodeType.RECT:
            case this.nodeType.HEXAGON:
                padding *= 2;
                break;
        }
        const E = {
            id: this.count++,
            nodeId: i(a, f),
            level,
            descr: i(l, f),
            type: n,
            children: [],
            width: f.mindmap?.maxNodeWidth ?? D.mindmap.maxNodeWidth,
            padding,
            isRoot
        };
        const b = this.getParent(level);
        if (b) {
            b.children.push(E);
            this.nodes.push(E);
        } else if (isRoot) {
            this.nodes.push(E);
        } else {
            throw new Error(`There can be only one root. No parent could be found for ("${E.descr}")`);
        }
    }
    getType(e, a) {
        l_1.debug("In get type", e, a);
        switch(e){
            case "[":
                return this.nodeType.RECT;
            case "(":
                if (a === ")") {
                    return this.nodeType.ROUNDED_RECT;
                }
                return this.nodeType.CLOUD;
            case "((":
                return this.nodeType.CIRCLE;
            case ")":
                return this.nodeType.CLOUD;
            case "))":
                return this.nodeType.BANG;
            case "{{":
                return this.nodeType.HEXAGON;
            default:
                return this.nodeType.DEFAULT;
        }
    }
    setElementForId(e, a) {
        this.elements[e] = a;
    }
    getElementById(e) {
        return this.elements[e];
    }
    decorateNode(e) {
        if (!e) {
            return;
        }
        const a = c();
        const l = this.nodes[this.nodes.length - 1];
        if (e.icon) {
            l.icon = i(e.icon, a);
        }
        if (e.class) {
            l.class = i(e.class, a);
        }
    }
    type2Str(e) {
        switch(e){
            case this.nodeType.DEFAULT:
                return "no-border";
            case this.nodeType.RECT:
                return "rect";
            case this.nodeType.ROUNDED_RECT:
                return "rounded-rect";
            case this.nodeType.CIRCLE:
                return "circle";
            case this.nodeType.CLOUD:
                return "cloud";
            case this.nodeType.BANG:
                return "bang";
            case this.nodeType.HEXAGON:
                return "hexgon";
            default:
                return "no-border";
        }
    }
    assignSections(e, a) {
        if (e.level === 0) {
            e.section = undefined;
        } else {
            e.section = a;
        }
        if (e.children) {
            for (const [l, n] of e.children.entries()){
                const d = e.level === 0 ? l % (De - 1) : a;
                this.assignSections(n, d);
            }
        }
    }
    flattenNodes(e, a) {
        const l = c();
        const n = [
            "mindmap-node"
        ];
        if (e.isRoot === true) {
            n.push("section-root", "section--1");
        } else if (e.section !== undefined) {
            n.push(`section-${e.section}`);
        }
        if (e.class) {
            n.push(e.class);
        }
        const cssClasses = n.join(" ");
        const f = __1((E)=>{
            const v = (l.theme?.toLowerCase() ?? "").includes("redux");
            switch(E){
                case N.CIRCLE:
                    return "mindmapCircle";
                case N.RECT:
                    return "rect";
                case N.ROUNDED_RECT:
                    return "rounded";
                case N.CLOUD:
                    return "cloud";
                case N.BANG:
                    return "bang";
                case N.HEXAGON:
                    return "hexagon";
                case N.DEFAULT:
                    if (v) {
                        return "rounded";
                    }
                    return "defaultMindmapNode";
                case N.NO_BORDER:
                default:
                    return "rect";
            }
        }, "getShapeFromType");
        const y = {
            id: e.id.toString(),
            domId: `node_${e.id.toString()}`,
            label: e.descr,
            labelType: "markdown",
            isGroup: false,
            shape: f(e.type),
            width: e.width,
            height: e.height ?? 0,
            padding: e.padding,
            cssClasses,
            cssStyles: [],
            look: l.look,
            icon: e.icon,
            x: e.x,
            y: e.y,
            level: e.level,
            nodeId: e.nodeId,
            type: e.type,
            section: e.section
        };
        a.push(y);
        if (e.children) {
            for (const E of e.children){
                this.flattenNodes(E, a);
            }
        }
    }
    generateEdges(e, a) {
        if (!e.children) {
            return;
        }
        const l = c();
        for (const n of e.children){
            let classes = "edge";
            if (n.section !== undefined) {
                classes += ` section-edge-${n.section}`;
            }
            const f = e.level + 1;
            classes += ` edge-depth-${f}`;
            const y = {
                id: `edge_${e.id}_${n.id}`,
                start: e.id.toString(),
                end: n.id.toString(),
                type: "normal",
                curve: "basis",
                thickness: "normal",
                look: l.look,
                classes,
                depth: e.level,
                section: n.section
            };
            a.push(y);
            this.generateEdges(n, a);
        }
    }
    getData() {
        const rootNode = this.getMindmap();
        const a = c();
        const n = b6().layout !== undefined;
        const config = a;
        if (!n) {
            config.layout = "cose-bilkent";
        }
        if (!rootNode) {
            return {
                nodes: [],
                edges: [],
                config
            };
        }
        l_1.debug("getData: mindmapRoot", rootNode, a);
        this.assignSections(rootNode);
        const nodes = [];
        const edges = [];
        this.flattenNodes(rootNode, nodes);
        this.generateEdges(rootNode, edges);
        l_1.debug(`getData: processed ${nodes.length} nodes and ${edges.length} edges`);
        const E = new Map;
        for (const b of nodes){
            E.set(b.id, {
                shape: b.shape,
                width: b.width,
                height: b.height,
                padding: b.padding
            });
        }
        return {
            nodes,
            edges,
            config,
            rootNode,
            markers: [
                "point"
            ],
            direction: "TB",
            nodeSpacing: 50,
            rankSpacing: 50,
            shapes: Object.fromEntries(E),
            type: "mindmap",
            diagramId: `mindmap-${Se()}`
        };
    }
    getLogger() {
        return l_1;
    }
};
__1(w, "MindmapDB");
const Ne = w;
const draw = __1(async (t, e, a, l)=>{
    l_1.debug(`Rendering mindmap diagram
` + t);
    const n = l.db;
    const d = n.getData();
    const f = g(e, d.config.securityLevel);
    d.type = l.type;
    d.layoutAlgorithm = v(d.config.layout, {
        fallback: "cose-bilkent"
    });
    d.diagramId = e;
    if (!n.getMindmap()) {
        return;
    }
    d.nodes.forEach((g)=>{
        if (g.shape === "rounded") {
            g.radius = 15;
            g.taper = 15;
            g.stroke = "none";
            g.width = 0;
            g.padding = 15;
        } else if (g.shape === "circle") {
            g.padding = 10;
        } else if (g.shape === "rect") {
            g.width = 0;
            g.padding = 10;
        } else if (g.shape === "hexagon") {
            g.width = 0;
            g.height = 0;
        }
    });
    await x(d, f);
    const { themeVariables } = z();
    const { useGradient, gradientStart, gradientStop } = themeVariables;
    if (useGradient && gradientStart && gradientStop) {
        const g = f.attr("id");
        const A = f.append("defs").append("linearGradient").attr("id", `${g}-gradient`).attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
        A.append("stop").attr("offset", "0%").attr("stop-color", gradientStart).attr("stop-opacity", 1);
        A.append("stop").attr("offset", "100%").attr("stop-color", gradientStop).attr("stop-opacity", 1);
    }
    s(f, d.config.mindmap?.padding ?? D.mindmap.padding, "mindmapDiagram", d.config.mindmap?.useMaxWidth ?? D.mindmap.useMaxWidth);
}, "draw");
const renderer = {
    draw
};
const Te = __1((t)=>{
    const { theme, look } = t;
    let l = "";
    for(let n = 0; n < t.THEME_COLOR_LIMIT; n++){
        t[`lineColor${n}`] = t[`lineColor${n}`] || t[`cScaleInv${n}`];
        if (aa(t[`lineColor${n}`])) {
            t[`lineColor${n}`] = ab(t[`lineColor${n}`], 20);
        } else {
            t[`lineColor${n}`] = ac(t[`lineColor${n}`], 20);
        }
    }
    for(let n = 0; n < t.THEME_COLOR_LIMIT; n++){
        const d = `${look === "neo" ? Math.max(10 - (n - 1) * 2, 2) : 17 - 3 * n}`;
        l += `
    .section-${n - 1} rect, .section-${n - 1} path, .section-${n - 1} circle, .section-${n - 1} polygon, .section-${n - 1} path  {
      fill: ${t[`cScale${n}`]};
    }
    .section-${n - 1} text {
     fill: ${t[`cScaleLabel${n}`]};
    }
     .section-${n - 1} span {
     color: ${t[`cScaleLabel${n}`]};
    }
    .node-icon-${n - 1} {
      font-size: 40px;
      color: ${t[`cScaleLabel${n}`]};
    }
    .section-edge-${n - 1}{
      stroke: ${t[`cScale${n}`]};
    }
    .edge-depth-${n - 1}{
      stroke-width: ${d};
    }
    .section-${n - 1} line {
      stroke: ${t[`cScaleInv${n}`]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    [data-look="neo"].mindmap-node.section-${n - 1} rect, [data-look="neo"].mindmap-node.section-${n - 1} path, [data-look="neo"].mindmap-node.section-${n - 1} circle, [data-look="neo"].mindmap-node.section-${n - 1} polygon {
      fill: ${theme === "redux" || theme === "redux-dark" || theme === "neutral" ? t.mainBkg : t[`cScale${n}`]};
      stroke: ${theme === "redux" || theme === "redux-dark" ? t.nodeBorder : t[`cScale${n}`]};
      stroke-width: ${t.strokeWidth ?? 2}px;
    }
    [data-look="neo"].section-edge-${n - 1}{
      stroke: ${theme?.includes("redux") || theme === "neo-dark" ? t.nodeBorder : t[`cScale${n}`]};
    }
    [data-look="neo"].mindmap-node.section-${n - 1} text {
     fill: ${theme === "redux" || theme === "redux-dark" ? t.nodeBorder : t[`cScaleLabel${theme === "neutral" ? 1 : n}`]};
    }
    `;
    }
    return l;
}, "genSections");
const Oe = __1((t, e, a)=>{
    let l = "";
    for(let n = 0; n < t; n++){
        l += `
    [data-look="neo"].mindmap-node.section-${n - 1} rect, [data-look="neo"].mindmap-node.section-${n - 1} path, [data-look="neo"].mindmap-node.section-${n - 1} circle, [data-look="neo"].mindmap-node.section-${n - 1} polygon {
      stroke: url(${e}-gradient);
      fill: ${a};
    }
    .section-${n - 1} line {
      stroke-width: 0;
    }`;
    }
    return l;
}, "genGradient");
const Ie = __1((t)=>{
    const { theme } = t;
    const t_svgId = t.svgId;
    const l = t.dropShadow ? t.dropShadow.replace("url(#drop-shadow)", `url(${t_svgId}-drop-shadow)`) : "none";
    return `
  .edge {
    stroke-width: 3;
  }
  ${Te(t)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${t.git0};
  }
  .section-root text {
    fill: ${t.gitBranchLabel0};
  }
  .section-root span {
    color: ${theme?.includes("redux") ? t.nodeBorder : t.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
  [data-look="neo"].mindmap-node  {
    filter: ${l};
  }
  [data-look="neo"].mindmap-node.section-root rect, [data-look="neo"].mindmap-node.section-root path, [data-look="neo"].mindmap-node.section-root circle, [data-look="neo"].mindmap-node.section-root polygon  {
    fill: ${theme?.includes("redux") ? t.mainBkg : t.git0};
  }
  [data-look="neo"].mindmap-node.section-root .text-inner-tspan {
    fill:  ${theme?.includes("redux") ? t.nodeBorder : t[`cScaleLabel${theme === "neutral" ? 1 : 0}`]};
  }
  ${t.useGradient && t_svgId && t.mainBkg ? Oe(t.THEME_COLOR_LIMIT, t_svgId, t.mainBkg) : ""}
`;
}, "getStyles");
const styles = Ie;
export const diagram = {
    get db () {
        return new Ne;
    },
    renderer,
    parser,
    styles
};
