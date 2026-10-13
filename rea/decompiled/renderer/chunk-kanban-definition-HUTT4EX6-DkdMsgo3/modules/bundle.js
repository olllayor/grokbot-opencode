import { _ as __1, l as l_1, c, F, af, ag, ah, ad, D as D_1, i, Y, Z as schema, aa, ab, ac } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { g } from "./chunk-chunk-5VM5RSS4-CTCaRfNa.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "8543acfe-6a62-4934-94e8-9da854ad02ad";
            e._sentryDebugIdIdentifier = "sentry-dbid-8543acfe-6a62-4934-94e8-9da854ad02ad";
        }
    } catch (e) {}
})();
const $ = (()=>{
    const e = __1((O, i, n, r)=>{
        n = n || {};
        for(r = O.length; r--; n[O[r]] = i);
        return n;
    }, "o");
    const h = [
        1,
        4
    ];
    const p = [
        1,
        13
    ];
    const s = [
        1,
        12
    ];
    const d = [
        1,
        15
    ];
    const _ = [
        1,
        16
    ];
    const m = [
        1,
        20
    ];
    const l = [
        1,
        19
    ];
    const D = [
        6,
        7,
        8
    ];
    const I = [
        1,
        26
    ];
    const g = [
        1,
        24
    ];
    const w = [
        1,
        25
    ];
    const k = [
        6,
        7,
        11
    ];
    const G = [
        1,
        31
    ];
    const N = [
        6,
        7,
        11,
        24
    ];
    const V = [
        1,
        6,
        13,
        16,
        17,
        20,
        23
    ];
    const f = [
        1,
        35
    ];
    const A = [
        1,
        36
    ];
    const L = [
        1,
        6,
        7,
        11,
        13,
        16,
        17,
        20,
        23
    ];
    const M = [
        1,
        38
    ];
    const T = {
        trace: __1(()=>{}, "trace"),
        yy: {},
        symbols_: {
            error: 2,
            start: 3,
            mindMap: 4,
            spaceLines: 5,
            SPACELINE: 6,
            NL: 7,
            KANBAN: 8,
            document: 9,
            stop: 10,
            EOF: 11,
            statement: 12,
            SPACELIST: 13,
            node: 14,
            shapeData: 15,
            ICON: 16,
            CLASS: 17,
            nodeWithId: 18,
            nodeWithoutId: 19,
            NODE_DSTART: 20,
            NODE_DESCR: 21,
            NODE_DEND: 22,
            NODE_ID: 23,
            SHAPE_DATA: 24,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            6: "SPACELINE",
            7: "NL",
            8: "KANBAN",
            11: "EOF",
            13: "SPACELIST",
            16: "ICON",
            17: "CLASS",
            20: "NODE_DSTART",
            21: "NODE_DESCR",
            22: "NODE_DEND",
            23: "NODE_ID",
            24: "SHAPE_DATA"
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
                3
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
                14,
                1
            ],
            [
                14,
                1
            ],
            [
                19,
                3
            ],
            [
                18,
                1
            ],
            [
                18,
                4
            ],
            [
                15,
                2
            ],
            [
                15,
                1
            ]
        ],
        performAction: __1(function(i, n, r, a, u, t, U) {
            const c = t.length - 1;
            switch(u){
                case 6:
                case 7:
                    return a;
                case 8:
                    a.getLogger().trace("Stop NL ");
                    break;
                case 9:
                    a.getLogger().trace("Stop EOF ");
                    break;
                case 11:
                    a.getLogger().trace("Stop NL2 ");
                    break;
                case 12:
                    a.getLogger().trace("Stop EOF2 ");
                    break;
                case 15:
                    a.getLogger().info("Node: ", t[c - 1].id);
                    a.addNode(t[c - 2].length, t[c - 1].id, t[c - 1].descr, t[c - 1].type, t[c]);
                    break;
                case 16:
                    a.getLogger().info("Node: ", t[c].id);
                    a.addNode(t[c - 1].length, t[c].id, t[c].descr, t[c].type);
                    break;
                case 17:
                    a.getLogger().trace("Icon: ", t[c]);
                    a.decorateNode({
                        icon: t[c]
                    });
                    break;
                case 18:
                case 23:
                    a.decorateNode({
                        class: t[c]
                    });
                    break;
                case 19:
                    a.getLogger().trace("SPACELIST");
                    break;
                case 20:
                    a.getLogger().trace("Node: ", t[c - 1].id);
                    a.addNode(0, t[c - 1].id, t[c - 1].descr, t[c - 1].type, t[c]);
                    break;
                case 21:
                    a.getLogger().trace("Node: ", t[c].id);
                    a.addNode(0, t[c].id, t[c].descr, t[c].type);
                    break;
                case 22:
                    a.decorateNode({
                        icon: t[c]
                    });
                    break;
                case 27:
                    a.getLogger().trace("node found ..", t[c - 2]);
                    this.$ = {
                        id: t[c - 1],
                        descr: t[c - 1],
                        type: a.getType(t[c - 2], t[c])
                    };
                    break;
                case 28:
                    this.$ = {
                        id: t[c],
                        descr: t[c],
                        type: 0
                    };
                    break;
                case 29:
                    a.getLogger().trace("node found ..", t[c - 3]);
                    this.$ = {
                        id: t[c - 3],
                        descr: t[c - 1],
                        type: a.getType(t[c - 2], t[c])
                    };
                    break;
                case 30:
                    this.$ = t[c - 1] + t[c];
                    break;
                case 31:
                    this.$ = t[c];
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
                8: h
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
                8: h
            },
            {
                6: p,
                7: [
                    1,
                    10
                ],
                9: 9,
                12: 11,
                13: s,
                14: 14,
                16: d,
                17: _,
                18: 17,
                19: 18,
                20: m,
                23: l
            },
            e(D, [
                2,
                3
            ]),
            {
                1: [
                    2,
                    2
                ]
            },
            e(D, [
                2,
                4
            ]),
            e(D, [
                2,
                5
            ]),
            {
                1: [
                    2,
                    6
                ],
                6: p,
                12: 21,
                13: s,
                14: 14,
                16: d,
                17: _,
                18: 17,
                19: 18,
                20: m,
                23: l
            },
            {
                6: p,
                9: 22,
                12: 11,
                13: s,
                14: 14,
                16: d,
                17: _,
                18: 17,
                19: 18,
                20: m,
                23: l
            },
            {
                6: I,
                7: g,
                10: 23,
                11: w
            },
            e(k, [
                2,
                24
            ], {
                18: 17,
                19: 18,
                14: 27,
                16: [
                    1,
                    28
                ],
                17: [
                    1,
                    29
                ],
                20: m,
                23: l
            }),
            e(k, [
                2,
                19
            ]),
            e(k, [
                2,
                21
            ], {
                15: 30,
                24: G
            }),
            e(k, [
                2,
                22
            ]),
            e(k, [
                2,
                23
            ]),
            e(N, [
                2,
                25
            ]),
            e(N, [
                2,
                26
            ]),
            e(N, [
                2,
                28
            ], {
                20: [
                    1,
                    32
                ]
            }),
            {
                21: [
                    1,
                    33
                ]
            },
            {
                6: I,
                7: g,
                10: 34,
                11: w
            },
            {
                1: [
                    2,
                    7
                ],
                6: p,
                12: 21,
                13: s,
                14: 14,
                16: d,
                17: _,
                18: 17,
                19: 18,
                20: m,
                23: l
            },
            e(V, [
                2,
                14
            ], {
                7: f,
                11: A
            }),
            e(L, [
                2,
                8
            ]),
            e(L, [
                2,
                9
            ]),
            e(L, [
                2,
                10
            ]),
            e(k, [
                2,
                16
            ], {
                15: 37,
                24: G
            }),
            e(k, [
                2,
                17
            ]),
            e(k, [
                2,
                18
            ]),
            e(k, [
                2,
                20
            ], {
                24: M
            }),
            e(N, [
                2,
                31
            ]),
            {
                21: [
                    1,
                    39
                ]
            },
            {
                22: [
                    1,
                    40
                ]
            },
            e(V, [
                2,
                13
            ], {
                7: f,
                11: A
            }),
            e(L, [
                2,
                11
            ]),
            e(L, [
                2,
                12
            ]),
            e(k, [
                2,
                15
            ], {
                24: M
            }),
            e(N, [
                2,
                30
            ]),
            {
                22: [
                    1,
                    41
                ]
            },
            e(N, [
                2,
                27
            ]),
            e(N, [
                2,
                29
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
        parseError: __1(function(i, n) {
            if (n.recoverable) {
                this.trace(i);
            } else {
                const r = new Error(i);
                r.hash = n;
                throw r;
            }
        }, "parseError"),
        parse: __1(function(i) {
            const n = this;
            let r = [
                0
            ];
            let a = [];
            let u = [
                null
            ];
            let t = [];
            const table = this.table;
            let c = "";
            let W = 0;
            let se = 0;
            const ue = 2;
            const re = 1;
            const ge = t.slice.call(arguments, 1);
            const b = Object.create(this.lexer);
            const R = {
                yy: {}
            };
            for(const J in this.yy){
                if (Object.prototype.hasOwnProperty.call(this.yy, J)) {
                    R.yy[J] = this.yy[J];
                }
            }
            b.setInput(i, R.yy);
            R.yy.lexer = b;
            R.yy.parser = this;
            if (typeof b.yylloc === "undefined") {
                b.yylloc = {};
            }
            let b_yylloc = b.yylloc;
            t.push(b_yylloc);
            const de = b.options && b.options.ranges;
            if (typeof R.yy.parseError === "function") {
                this.parseError = R.yy.parseError;
            } else {
                this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function pe(S) {
                r.length = r.length - 2 * S;
                u.length = u.length - S;
                t.length = t.length - S;
            }
            __1(pe, "popStack");
            function ae() {
                let S;
                S = a.pop() || b.lex() || re;
                if (typeof S !== "number") {
                    if (S instanceof Array) {
                        a = S;
                        S = a.pop();
                    }
                    S = n.symbols_[S] || S;
                }
                return S;
            }
            __1(ae, "lex");
            let E;
            let P;
            let x;
            let q;
            const F = {};
            let z;
            let C;
            let oe;
            let expected;
            while(true){
                P = r[r.length - 1];
                if (this.defaultActions[P]) {
                    x = this.defaultActions[P];
                } else {
                    if (E === null || typeof E === "undefined") {
                        E = ae();
                    }
                    x = table[P] && table[P][E];
                }
                if (typeof x === "undefined" || !x.length || !x[0]) {
                    let Q = "";
                    expected = [];
                    for(z in table[P]){
                        if (this.terminals_[z] && z > ue) {
                            expected.push(`'${this.terminals_[z]}'`);
                        }
                    }
                    if (b.showPosition) {
                        Q = `Parse error on line ${W + 1}${`:
`}${b.showPosition()}${`
Expecting `}${expected.join(", ")}, got '${this.terminals_[E] || E}'`;
                    } else {
                        Q = `Parse error on line ${W + 1}: Unexpected ${E == re ? "end of input" : `'${this.terminals_[E] || E}'`}`;
                    }
                    this.parseError(Q, {
                        text: b.match,
                        token: this.terminals_[E] || E,
                        line: b.yylineno,
                        loc: b_yylloc,
                        expected
                    });
                }
                if (x[0] instanceof Array && x.length > 1) {
                    throw new Error(`Parse Error: multiple actions possible at state: ${P}, token: ${E}`);
                }
                switch(x[0]){
                    case 1:
                        r.push(E);
                        u.push(b.yytext);
                        t.push(b.yylloc);
                        r.push(x[1]);
                        E = null;
                        se = b.yyleng;
                        c = b.yytext;
                        W = b.yylineno;
                        b_yylloc = b.yylloc;
                        break;
                    case 2:
                        C = this.productions_[x[1]][1];
                        F.$ = u[u.length - C];
                        F._$ = {
                            first_line: t[t.length - (C || 1)].first_line,
                            last_line: t[t.length - 1].last_line,
                            first_column: t[t.length - (C || 1)].first_column,
                            last_column: t[t.length - 1].last_column
                        };
                        if (de) {
                            F._$.range = [
                                t[t.length - (C || 1)].range[0],
                                t[t.length - 1].range[1]
                            ];
                        }
                        q = this.performAction.apply(F, [
                            c,
                            se,
                            W,
                            R.yy,
                            x[1],
                            u,
                            t
                        ].concat(ge));
                        if (typeof q !== "undefined") {
                            return q;
                        }
                        if (C) {
                            r = r.slice(0, -1 * C * 2);
                            u = u.slice(0, -1 * C);
                            t = t.slice(0, -1 * C);
                        }
                        r.push(this.productions_[x[1]][0]);
                        u.push(F.$);
                        t.push(F._$);
                        oe = table[r[r.length - 2]][r[r.length - 1]];
                        r.push(oe);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }, "parse")
    };
    const K = (()=>{
        const O = {
            EOF: 1,
            parseError: __1(function(n, r) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(n, r);
                } else {
                    throw new Error(n);
                }
            }, "parseError"),
            setInput: __1(function(i, n) {
                this.yy = n || this.yy || {};
                this._input = i;
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
                const i = this._input[0];
                this.yytext += i;
                this.yyleng++;
                this.offset++;
                this.match += i;
                this.matched += i;
                const n = i.match(/(?:\r\n?|\n).*/g);
                n ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++;
                this.options.ranges && this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return i;
            }, "input"),
            unput: __1(function(i) {
                const i_length = i.length;
                const r = i.split(/(?:\r\n?|\n)/g);
                this._input = i + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - i_length);
                this.offset -= i_length;
                const a = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (r.length - 1) {
                    this.yylineno -= r.length - 1;
                }
                const range = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: r ? (r.length === a.length ? this.yylloc.first_column : 0) + a[a.length - r.length].length - r[0].length : this.yylloc.first_column - i_length
                };
                if (this.options.ranges) {
                    this.yylloc.range = [
                        range[0],
                        range[0] + this.yyleng - i_length
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
            less: __1(function(i) {
                this.unput(this.match.slice(i));
            }, "less"),
            pastInput: __1(function() {
                const i = this.matched.substr(0, this.matched.length - this.match.length);
                return (i.length > 20 ? "..." : "") + i.substr(-20).replace(/\n/g, "");
            }, "pastInput"),
            upcomingInput: __1(function() {
                let match = this.match;
                if (match.length < 20) {
                    match += this._input.substr(0, 20 - match.length);
                }
                return (match.substr(0, 20) + (match.length > 20 ? "..." : "")).replace(/\n/g, "");
            }, "upcomingInput"),
            showPosition: __1(function() {
                const i = this.pastInput();
                const n = new Array(i.length + 1).join("-");
                return `${i + this.upcomingInput() + `
` + n}^`;
            }, "showPosition"),
            test_match: __1(function(i, n) {
                let r;
                let a;
                let u;
                if (this.options.backtrack_lexer) {
                    u = {
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
                        u.yylloc.range = this.yylloc.range.slice(0);
                    }
                }
                a = i[0].match(/(?:\r\n?|\n).*/g);
                if (a) {
                    this.yylineno += a.length;
                }
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: a ? a[a.length - 1].length - a[a.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + i[0].length
                };
                this.yytext += i[0];
                this.match += i[0];
                this.matches = i;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) {
                    this.yylloc.range = [
                        this.offset,
                        this.offset += this.yyleng
                    ];
                }
                this._more = false;
                this._backtrack = false;
                this._input = this._input.slice(i[0].length);
                this.matched += i[0];
                r = this.performAction.call(this, this.yy, this, n, this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) {
                    this.done = false;
                }
                if (r) {
                    return r;
                }
                if (this._backtrack) {
                    for(const t in u){
                        this[t] = u[t];
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
                let i;
                let n;
                let r;
                let a;
                if (!this._more) {
                    this.yytext = "";
                    this.match = "";
                }
                for(var u = this._currentRules(), t = 0; t < u.length; t++){
                    r = this._input.match(this.rules[u[t]]);
                    if (r && (!n || r[0].length > n[0].length)) {
                        n = r;
                        a = t;
                        if (this.options.backtrack_lexer) {
                            i = this.test_match(r, u[t]);
                            if (i !== false) {
                                return i;
                            }
                            if (this._backtrack) {
                                n = false;
                                continue;
                            } else {
                                return false;
                            }
                        } else if (!this.options.flex) {
                            break;
                        }
                    }
                }
                if (n) {
                    i = this.test_match(n, u[a]);
                    if (i !== false) {
                        return i;
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
                const n = this.next();
                return n || this.lex();
            }, "lex"),
            begin: __1(function(n) {
                this.conditionStack.push(n);
            }, "begin"),
            popState: __1(function() {
                const n = this.conditionStack.length - 1;
                if (n > 0) {
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
            topState: __1(function(n) {
                n = this.conditionStack.length - 1 - Math.abs(n || 0);
                if (n >= 0) {
                    return this.conditionStack[n];
                }
                return "INITIAL";
            }, "topState"),
            pushState: __1(function(n) {
                this.begin(n);
            }, "pushState"),
            stateStackSize: __1(function() {
                return this.conditionStack.length;
            }, "stateStackSize"),
            options: {
                "case-insensitive": true
            },
            performAction: __1(function(n, r, a, u) {
                switch(a){
                    case 0:
                        this.pushState("shapeData");
                        r.yytext = "";
                        return 24;
                    case 1:
                        this.pushState("shapeDataStr");
                        return 24;
                    case 2:
                        this.popState();
                        return 24;
                    case 3:
                        const t = /\n\s*/g;
                        r.yytext = r.yytext.replace(t, "<br/>");
                        return 24;
                    case 4:
                        return 24;
                    case 5:
                        this.popState();
                        break;
                    case 6:
                        n.getLogger().trace("Found comment", r.yytext);
                        return 6;
                    case 7:
                        return 8;
                    case 8:
                        this.begin("CLASS");
                        break;
                    case 9:
                        this.popState();
                        return 17;
                    case 10:
                        this.popState();
                        break;
                    case 11:
                        n.getLogger().trace("Begin icon");
                        this.begin("ICON");
                        break;
                    case 12:
                        n.getLogger().trace("SPACELINE");
                        return 6;
                    case 13:
                        return 7;
                    case 14:
                        return 16;
                    case 15:
                        n.getLogger().trace("end icon");
                        this.popState();
                        break;
                    case 16:
                        n.getLogger().trace("Exploding node");
                        this.begin("NODE");
                        return 20;
                    case 17:
                        n.getLogger().trace("Cloud");
                        this.begin("NODE");
                        return 20;
                    case 18:
                        n.getLogger().trace("Explosion Bang");
                        this.begin("NODE");
                        return 20;
                    case 19:
                        n.getLogger().trace("Cloud Bang");
                        this.begin("NODE");
                        return 20;
                    case 20:
                        this.begin("NODE");
                        return 20;
                    case 21:
                        this.begin("NODE");
                        return 20;
                    case 22:
                        this.begin("NODE");
                        return 20;
                    case 23:
                        this.begin("NODE");
                        return 20;
                    case 24:
                        return 13;
                    case 25:
                        return 23;
                    case 26:
                        return 11;
                    case 27:
                        this.begin("NSTR2");
                        break;
                    case 28:
                        return "NODE_DESCR";
                    case 29:
                        this.popState();
                        break;
                    case 30:
                        n.getLogger().trace("Starting NSTR");
                        this.begin("NSTR");
                        break;
                    case 31:
                        n.getLogger().trace("description:", r.yytext);
                        return "NODE_DESCR";
                    case 32:
                        this.popState();
                        break;
                    case 33:
                        this.popState();
                        n.getLogger().trace("node end ))");
                        return "NODE_DEND";
                    case 34:
                        this.popState();
                        n.getLogger().trace("node end )");
                        return "NODE_DEND";
                    case 35:
                        this.popState();
                        n.getLogger().trace("node end ...", r.yytext);
                        return "NODE_DEND";
                    case 36:
                        this.popState();
                        n.getLogger().trace("node end ((");
                        return "NODE_DEND";
                    case 37:
                        this.popState();
                        n.getLogger().trace("node end (-");
                        return "NODE_DEND";
                    case 38:
                        this.popState();
                        n.getLogger().trace("node end (-");
                        return "NODE_DEND";
                    case 39:
                        this.popState();
                        n.getLogger().trace("node end ((");
                        return "NODE_DEND";
                    case 40:
                        this.popState();
                        n.getLogger().trace("node end ((");
                        return "NODE_DEND";
                    case 41:
                        n.getLogger().trace("Long description:", r.yytext);
                        return 21;
                    case 42:
                        n.getLogger().trace("Long description:", r.yytext);
                        return 21;
                }
            }, "anonymous"),
            rules: [
                /^(?:@\{)/i,
                /^(?:["])/i,
                /^(?:["])/i,
                /^(?:[^\"]+)/i,
                /^(?:[^}^"]+)/i,
                /^(?:\})/i,
                /^(?:\s*%%.*)/i,
                /^(?:kanban\b)/i,
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
                /^(?:[^\(\[\n\)\{\}@]+)/i,
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
                shapeDataEndBracket: {
                    rules: [],
                    inclusive: false
                },
                shapeDataStr: {
                    rules: [
                        2,
                        3
                    ],
                    inclusive: false
                },
                shapeData: {
                    rules: [
                        1,
                        4,
                        5
                    ],
                    inclusive: false
                },
                CLASS: {
                    rules: [
                        9,
                        10
                    ],
                    inclusive: false
                },
                ICON: {
                    rules: [
                        14,
                        15
                    ],
                    inclusive: false
                },
                NSTR2: {
                    rules: [
                        28,
                        29
                    ],
                    inclusive: false
                },
                NSTR: {
                    rules: [
                        31,
                        32
                    ],
                    inclusive: false
                },
                NODE: {
                    rules: [
                        27,
                        30,
                        33,
                        34,
                        35,
                        36,
                        37,
                        38,
                        39,
                        40,
                        41,
                        42
                    ],
                    inclusive: false
                },
                INITIAL: {
                    rules: [
                        0,
                        6,
                        7,
                        8,
                        11,
                        12,
                        13,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25,
                        26
                    ],
                    inclusive: true
                }
            }
        };
        return O;
    })();
    T.lexer = K;
    function B() {
        this.yy = {};
    }
    __1(B, "Parser");
    B.prototype = T;
    T.Parser = B;
    return new B;
})();
$.parser = $;
const parser = $;
let v = [];
let ne = [];
let ee = 0;
let ie = {};
const clear = __1(()=>{
    v = [];
    ne = [];
    ee = 0;
    ie = {};
}, "clear");
const De = __1((e)=>{
    if (v.length === 0) {
        return null;
    }
    const level = v[0].level;
    let p = null;
    for(let s = v.length - 1; s >= 0; s--){
        if (v[s].level === level && !p) {
            p = v[s];
        }
        if (v[s].level < level) {
            throw new Error(`Items without section detected, found section ("${v[s].label}")`);
        }
    }
    if (e === p?.level) {
        return null;
    }
    return p;
}, "getSection");
const getSections = __1(()=>ne, "getSections");
const getData = __1(()=>{
    const edges = [];
    const nodes = [];
    const p = getSections();
    const s = c();
    for (const d of p){
        const _ = {
            id: d.id,
            label: i(d.label ?? "", s),
            labelType: "markdown",
            isGroup: true,
            ticket: d.ticket,
            shape: "kanbanSection",
            level: d.level,
            look: s.look
        };
        nodes.push(_);
        const m = v.filter((l)=>l.parentId === d.id);
        for (const l of m){
            const D = {
                id: l.id,
                parentId: d.id,
                label: i(l.label ?? "", s),
                labelType: "markdown",
                isGroup: false,
                ticket: l?.ticket,
                priority: l?.priority,
                assigned: l?.assigned,
                icon: l?.icon,
                shape: "kanbanItem",
                level: l.level,
                rx: 5,
                ry: 5,
                cssStyles: [
                    "text-align: left"
                ]
            };
            nodes.push(D);
        }
    }
    return {
        nodes,
        edges,
        other: {},
        config: c()
    };
}, "getData");
const addNode = __1((level, h, p, s, d)=>{
    const _ = c();
    let padding = _.mindmap?.padding ?? D_1.mindmap.padding;
    switch(s){
        case nodeType.ROUNDED_RECT:
        case nodeType.RECT:
        case nodeType.HEXAGON:
            padding *= 2;
    }
    const l = {
        id: i(h, _) || `kbn${ee++}`,
        level,
        label: i(p, _),
        width: _.mindmap?.maxNodeWidth ?? D_1.mindmap.maxNodeWidth,
        padding,
        isGroup: false
    };
    if (d !== undefined) {
        let I;
        if (d.includes(`
`)) {
            I = d + `
`;
        } else {
            I = `{
` + d + `
}`;
        }
        const g = Y(I, {
            schema
        });
        if (g.shape && (g.shape !== g.shape.toLowerCase() || g.shape.includes("_"))) {
            throw new Error(`No such shape: ${g.shape}. Shape names should be lowercase.`);
        }
        if (g?.shape && g.shape === "kanbanItem") {
            l.shape = g?.shape;
        }
        if (g?.label) {
            l.label = g?.label;
        }
        if (g?.icon) {
            l.icon = g?.icon.toString();
        }
        if (g?.assigned) {
            l.assigned = g?.assigned.toString();
        }
        if (g?.ticket) {
            l.ticket = g?.ticket.toString();
        }
        if (g?.priority) {
            l.priority = g?.priority;
        }
    }
    const D = De(level);
    if (D) {
        l.parentId = D.id || `kbn${ee++}`;
    } else {
        ne.push(l);
    }
    v.push(l);
}, "addNode");
var nodeType = {
    DEFAULT: 0,
    NO_BORDER: 0,
    ROUNDED_RECT: 1,
    RECT: 2,
    CIRCLE: 3,
    CLOUD: 4,
    BANG: 5,
    HEXAGON: 6
};
const getType = __1((e, h)=>{
    l_1.debug("In get type", e, h);
    switch(e){
        case "[":
            return nodeType.RECT;
        case "(":
            if (h === ")") {
                return nodeType.ROUNDED_RECT;
            }
            return nodeType.CLOUD;
        case "((":
            return nodeType.CIRCLE;
        case ")":
            return nodeType.CLOUD;
        case "))":
            return nodeType.BANG;
        case "{{":
            return nodeType.HEXAGON;
        default:
            return nodeType.DEFAULT;
    }
}, "getType");
const setElementForId = __1((e, h)=>{
    ie[e] = h;
}, "setElementForId");
const decorateNode = __1((e)=>{
    if (!e) {
        return;
    }
    const h = c();
    const p = v[v.length - 1];
    if (e.icon) {
        p.icon = i(e.icon, h);
    }
    if (e.class) {
        p.cssClasses = i(e.class, h);
    }
}, "decorateNode");
const type2Str = __1((e)=>{
    switch(e){
        case nodeType.DEFAULT:
            return "no-border";
        case nodeType.RECT:
            return "rect";
        case nodeType.ROUNDED_RECT:
            return "rounded-rect";
        case nodeType.CIRCLE:
            return "circle";
        case nodeType.CLOUD:
            return "cloud";
        case nodeType.BANG:
            return "bang";
        case nodeType.HEXAGON:
            return "hexgon";
        default:
            return "no-border";
    }
}, "type2Str");
const getLogger = __1(()=>l_1, "getLogger");
const getElementById = __1((e)=>ie[e], "getElementById");
const Pe = {
    clear,
    addNode,
    getSections,
    getData,
    nodeType,
    getType,
    setElementForId,
    decorateNode,
    type2Str,
    getLogger,
    getElementById
};
const db = Pe;
const draw = __1(async (e, h, p, s)=>{
    l_1.debug(`Rendering kanban diagram
` + e);
    const _ = s.db.getData();
    const config = c();
    config.htmlLabels = false;
    const l = F(h);
    for (const f of _.nodes){
        f.domId = `${h}-${f.id}`;
    }
    const D = l.append("g");
    D.attr("class", "sections");
    const I = l.append("g");
    I.attr("class", "items");
    const g = _.nodes.filter((f)=>f.isGroup);
    let w = 0;
    const k = 10;
    const G = [];
    let N = 25;
    for (const f of g){
        const A = config?.kanban?.sectionWidth || 200;
        w = w + 1;
        f.x = A * w + (w - 1) * k / 2;
        f.width = A;
        f.y = 0;
        f.height = A * 3;
        f.rx = 5;
        f.ry = 5;
        f.cssClasses = `${f.cssClasses} section-${w}`;
        const L = await af(D, f);
        N = Math.max(N, L?.labelBBox?.height);
        G.push(L);
    }
    let V = 0;
    for (const f of g){
        const A = G[V];
        V = V + 1;
        const L = config?.kanban?.sectionWidth || 200;
        const M = -L * 3 / 2 + N;
        let T = M;
        const K = _.nodes.filter((i)=>i.parentId === f.id);
        for (const i of K){
            if (i.isGroup) {
                throw new Error("Groups within groups are not allowed in Kanban diagrams");
            }
            i.x = f.x;
            i.width = L - 1.5 * k;
            const r = (await ag(I, i, {
                config
            })).node().getBBox();
            i.y = T + r.height / 2;
            await ah(i);
            T = i.y + r.height / 2 + k / 2;
        }
        const B = A.cluster.select("rect");
        const O = Math.max(T - M + 3 * k, 50) + (N - 25);
        B.attr("height", O);
    }
    ad(undefined, l, config.mindmap?.padding ?? D_1.kanban.padding, config.mindmap?.useMaxWidth ?? D_1.kanban.useMaxWidth);
}, "draw");
const renderer = {
    draw
};
const je = __1((e)=>{
    let h = "";
    for(let s = 0; s < e.THEME_COLOR_LIMIT; s++){
        e[`lineColor${s}`] = e[`lineColor${s}`] || e[`cScaleInv${s}`];
        if (aa(e[`lineColor${s}`])) {
            e[`lineColor${s}`] = ab(e[`lineColor${s}`], 20);
        } else {
            e[`lineColor${s}`] = ac(e[`lineColor${s}`], 20);
        }
    }
    const p = __1((s, d)=>{
        if (e.darkMode) {
            return ac(s, d);
        }
        return ab(s, d);
    }, "adjuster");
    for(let s = 0; s < e.THEME_COLOR_LIMIT; s++){
        const d = `${17 - 3 * s}`;
        h += `
    .section-${s - 1} rect, .section-${s - 1} path, .section-${s - 1} circle, .section-${s - 1} polygon, .section-${s - 1} path  {
      fill: ${p(e[`cScale${s}`], 10)};
      stroke: ${p(e[`cScale${s}`], 10)};

    }
    .section-${s - 1} text {
     fill: ${e[`cScaleLabel${s}`]};
    }
    .node-icon-${s - 1} {
      font-size: 40px;
      color: ${e[`cScaleLabel${s}`]};
    }
    .section-edge-${s - 1}{
      stroke: ${e[`cScale${s}`]};
    }
    .edge-depth-${s - 1}{
      stroke-width: ${d};
    }
    .section-${s - 1} line {
      stroke: ${e[`cScaleInv${s}`]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    text-decoration: underline;
  }
    `;
    }
    return h;
}, "genSections");
const Ge = __1((e)=>`
  .edge {
    stroke-width: 3;
  }
  ${je(e)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${e.git0};
  }
  .section-root text {
    fill: ${e.gitBranchLabel0};
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
  .cluster-label, .label {
    color: ${e.textColor};
    fill: ${e.textColor};
    }
  .kanban-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
    ${g()}
`, "getStyles");
const styles = Ge;
export const diagram = {
    db,
    renderer,
    parser,
    styles
};
