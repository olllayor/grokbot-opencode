import { _ as __1, z, aa, ab, ac, c as c_1, l as l_1, F as F_1, a1, ad, d, u, ae as ae_1, q as q_1 } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { d as d_1 } from "./chunk-arc-DIyNF4LI.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "178d9650-eb73-44c3-ab71-1ca0b58ca7a0";
            e._sentryDebugIdIdentifier = "sentry-dbid-178d9650-eb73-44c3-ab71-1ca0b58ca7a0";
        }
    } catch (e) {}
})();
const tt = (()=>{
    const e = __1((k, s, d, l)=>{
        d = d || {};
        for(l = k.length; l--; d[k[l]] = s);
        return d;
    }, "o");
    const t = [
        6,
        11,
        13,
        14,
        15,
        17,
        19,
        20,
        23,
        24
    ];
    const n = [
        1,
        12
    ];
    const i = [
        1,
        13
    ];
    const r = [
        1,
        14
    ];
    const h = [
        1,
        15
    ];
    const c = [
        1,
        16
    ];
    const a = [
        1,
        19
    ];
    const f = [
        1,
        20
    ];
    const g = {
        trace: __1(()=>{}, "trace"),
        yy: {},
        symbols_: {
            error: 2,
            start: 3,
            timeline_header: 4,
            document: 5,
            EOF: 6,
            timeline: 7,
            timeline_lr: 8,
            timeline_td: 9,
            line: 10,
            SPACE: 11,
            statement: 12,
            NEWLINE: 13,
            title: 14,
            acc_title: 15,
            acc_title_value: 16,
            acc_descr: 17,
            acc_descr_value: 18,
            acc_descr_multiline_value: 19,
            section: 20,
            period_statement: 21,
            event_statement: 22,
            period: 23,
            event: 24,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            6: "EOF",
            7: "timeline",
            8: "timeline_lr",
            9: "timeline_td",
            11: "SPACE",
            13: "NEWLINE",
            14: "title",
            15: "acc_title",
            16: "acc_title_value",
            17: "acc_descr",
            18: "acc_descr_value",
            19: "acc_descr_multiline_value",
            20: "section",
            23: "period",
            24: "event"
        },
        productions_: [
            0,
            [
                3,
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
                5,
                0
            ],
            [
                5,
                2
            ],
            [
                10,
                2
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
                12,
                1
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
                21,
                1
            ],
            [
                22,
                1
            ]
        ],
        performAction: __1(function(s, d, l, p, x, u, S) {
            const v = u.length - 1;
            switch(x){
                case 1:
                    return u[v - 1];
                case 3:
                    p.setDirection("LR");
                    break;
                case 4:
                    p.setDirection("TD");
                    break;
                case 5:
                    this.$ = [];
                    break;
                case 6:
                    u[v - 1].push(u[v]);
                    this.$ = u[v - 1];
                    break;
                case 7:
                case 8:
                    this.$ = u[v];
                    break;
                case 9:
                case 10:
                    this.$ = [];
                    break;
                case 11:
                    p.getCommonDb().setDiagramTitle(u[v].substr(6));
                    this.$ = u[v].substr(6);
                    break;
                case 12:
                    this.$ = u[v].trim();
                    p.getCommonDb().setAccTitle(this.$);
                    break;
                case 13:
                case 14:
                    this.$ = u[v].trim();
                    p.getCommonDb().setAccDescription(this.$);
                    break;
                case 15:
                    p.addSection(u[v].substr(8));
                    this.$ = u[v].substr(8);
                    break;
                case 18:
                    p.addTask(u[v], 0, "");
                    this.$ = u[v];
                    break;
                case 19:
                    p.addEvent(u[v].substr(2));
                    this.$ = u[v];
                    break;
            }
        }, "anonymous"),
        table: [
            {
                3: 1,
                4: 2,
                7: [
                    1,
                    3
                ],
                8: [
                    1,
                    4
                ],
                9: [
                    1,
                    5
                ]
            },
            {
                1: [
                    3
                ]
            },
            e(t, [
                2,
                5
            ], {
                5: 6
            }),
            e(t, [
                2,
                2
            ]),
            e(t, [
                2,
                3
            ]),
            e(t, [
                2,
                4
            ]),
            {
                6: [
                    1,
                    7
                ],
                10: 8,
                11: [
                    1,
                    9
                ],
                12: 10,
                13: [
                    1,
                    11
                ],
                14: n,
                15: i,
                17: r,
                19: h,
                20: c,
                21: 17,
                22: 18,
                23: a,
                24: f
            },
            e(t, [
                2,
                10
            ], {
                1: [
                    2,
                    1
                ]
            }),
            e(t, [
                2,
                6
            ]),
            {
                12: 21,
                14: n,
                15: i,
                17: r,
                19: h,
                20: c,
                21: 17,
                22: 18,
                23: a,
                24: f
            },
            e(t, [
                2,
                8
            ]),
            e(t, [
                2,
                9
            ]),
            e(t, [
                2,
                11
            ]),
            {
                16: [
                    1,
                    22
                ]
            },
            {
                18: [
                    1,
                    23
                ]
            },
            e(t, [
                2,
                14
            ]),
            e(t, [
                2,
                15
            ]),
            e(t, [
                2,
                16
            ]),
            e(t, [
                2,
                17
            ]),
            e(t, [
                2,
                18
            ]),
            e(t, [
                2,
                19
            ]),
            e(t, [
                2,
                7
            ]),
            e(t, [
                2,
                12
            ]),
            e(t, [
                2,
                13
            ])
        ],
        defaultActions: {},
        parseError: __1(function(s, d) {
            if (d.recoverable) {
                this.trace(s);
            } else {
                const l = new Error(s);
                l.hash = d;
                throw l;
            }
        }, "parseError"),
        parse: __1(function(s) {
            const d = this;
            let l = [
                0
            ];
            let p = [];
            let x = [
                null
            ];
            let u = [];
            const table = this.table;
            let v = "";
            let I = 0;
            let R = 0;
            const W = 2;
            const O = 1;
            const L = u.slice.call(arguments, 1);
            const w = Object.create(this.lexer);
            const H = {
                yy: {}
            };
            for(const V in this.yy){
                if (Object.prototype.hasOwnProperty.call(this.yy, V)) {
                    H.yy[V] = this.yy[V];
                }
            }
            w.setInput(s, H.yy);
            H.yy.lexer = w;
            H.yy.parser = this;
            if (typeof w.yylloc === "undefined") {
                w.yylloc = {};
            }
            let w_yylloc = w.yylloc;
            u.push(w_yylloc);
            const K = w.options && w.options.ranges;
            if (typeof H.yy.parseError === "function") {
                this.parseError = H.yy.parseError;
            } else {
                this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function N(A) {
                l.length = l.length - 2 * A;
                x.length = x.length - A;
                u.length = u.length - A;
            }
            __1(N, "popStack");
            function b() {
                let A;
                A = p.pop() || w.lex() || O;
                if (typeof A !== "number") {
                    if (A instanceof Array) {
                        p = A;
                        A = p.pop();
                    }
                    A = d.symbols_[A] || A;
                }
                return A;
            }
            __1(b, "lex");
            let _;
            let $;
            let T;
            let P;
            const C = {};
            let G;
            let B;
            let X;
            let expected;
            while(true){
                $ = l[l.length - 1];
                if (this.defaultActions[$]) {
                    T = this.defaultActions[$];
                } else {
                    if (_ === null || typeof _ === "undefined") {
                        _ = b();
                    }
                    T = table[$] && table[$][_];
                }
                if (typeof T === "undefined" || !T.length || !T[0]) {
                    let Y = "";
                    expected = [];
                    for(G in table[$]){
                        if (this.terminals_[G] && G > W) {
                            expected.push(`'${this.terminals_[G]}'`);
                        }
                    }
                    if (w.showPosition) {
                        Y = `Parse error on line ${I + 1}${`:
`}${w.showPosition()}${`
Expecting `}${expected.join(", ")}, got '${this.terminals_[_] || _}'`;
                    } else {
                        Y = `Parse error on line ${I + 1}: Unexpected ${_ == O ? "end of input" : `'${this.terminals_[_] || _}'`}`;
                    }
                    this.parseError(Y, {
                        text: w.match,
                        token: this.terminals_[_] || _,
                        line: w.yylineno,
                        loc: w_yylloc,
                        expected
                    });
                }
                if (T[0] instanceof Array && T.length > 1) {
                    throw new Error(`Parse Error: multiple actions possible at state: ${$}, token: ${_}`);
                }
                switch(T[0]){
                    case 1:
                        l.push(_);
                        x.push(w.yytext);
                        u.push(w.yylloc);
                        l.push(T[1]);
                        _ = null;
                        R = w.yyleng;
                        v = w.yytext;
                        I = w.yylineno;
                        w_yylloc = w.yylloc;
                        break;
                    case 2:
                        B = this.productions_[T[1]][1];
                        C.$ = x[x.length - B];
                        C._$ = {
                            first_line: u[u.length - (B || 1)].first_line,
                            last_line: u[u.length - 1].last_line,
                            first_column: u[u.length - (B || 1)].first_column,
                            last_column: u[u.length - 1].last_column
                        };
                        if (K) {
                            C._$.range = [
                                u[u.length - (B || 1)].range[0],
                                u[u.length - 1].range[1]
                            ];
                        }
                        P = this.performAction.apply(C, [
                            v,
                            R,
                            I,
                            H.yy,
                            T[1],
                            x,
                            u
                        ].concat(L));
                        if (typeof P !== "undefined") {
                            return P;
                        }
                        if (B) {
                            l = l.slice(0, -1 * B * 2);
                            x = x.slice(0, -1 * B);
                            u = u.slice(0, -1 * B);
                        }
                        l.push(this.productions_[T[1]][0]);
                        x.push(C.$);
                        u.push(C._$);
                        X = table[l[l.length - 2]][l[l.length - 1]];
                        l.push(X);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }, "parse")
    };
    const m = (()=>{
        const k = {
            EOF: 1,
            parseError: __1(function(d, l) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(d, l);
                } else {
                    throw new Error(d);
                }
            }, "parseError"),
            setInput: __1(function(s, d) {
                this.yy = d || this.yy || {};
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
                const d = s.match(/(?:\r\n?|\n).*/g);
                d ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++;
                this.options.ranges && this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return s;
            }, "input"),
            unput: __1(function(s) {
                const s_length = s.length;
                const l = s.split(/(?:\r\n?|\n)/g);
                this._input = s + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - s_length);
                this.offset -= s_length;
                const p = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (l.length - 1) {
                    this.yylineno -= l.length - 1;
                }
                const range = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: l ? (l.length === p.length ? this.yylloc.first_column : 0) + p[p.length - l.length].length - l[0].length : this.yylloc.first_column - s_length
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
                const d = new Array(s.length + 1).join("-");
                return `${s + this.upcomingInput() + `
` + d}^`;
            }, "showPosition"),
            test_match: __1(function(s, d) {
                let l;
                let p;
                let x;
                if (this.options.backtrack_lexer) {
                    x = {
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
                        x.yylloc.range = this.yylloc.range.slice(0);
                    }
                }
                p = s[0].match(/(?:\r\n?|\n).*/g);
                if (p) {
                    this.yylineno += p.length;
                }
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: p ? p[p.length - 1].length - p[p.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + s[0].length
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
                l = this.performAction.call(this, this.yy, this, d, this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) {
                    this.done = false;
                }
                if (l) {
                    return l;
                }
                if (this._backtrack) {
                    for(const u in x){
                        this[u] = x[u];
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
                let d;
                let l;
                let p;
                if (!this._more) {
                    this.yytext = "";
                    this.match = "";
                }
                for(var x = this._currentRules(), u = 0; u < x.length; u++){
                    l = this._input.match(this.rules[x[u]]);
                    if (l && (!d || l[0].length > d[0].length)) {
                        d = l;
                        p = u;
                        if (this.options.backtrack_lexer) {
                            s = this.test_match(l, x[u]);
                            if (s !== false) {
                                return s;
                            }
                            if (this._backtrack) {
                                d = false;
                                continue;
                            } else {
                                return false;
                            }
                        } else if (!this.options.flex) {
                            break;
                        }
                    }
                }
                if (d) {
                    s = this.test_match(d, x[p]);
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
                const d = this.next();
                return d || this.lex();
            }, "lex"),
            begin: __1(function(d) {
                this.conditionStack.push(d);
            }, "begin"),
            popState: __1(function() {
                const d = this.conditionStack.length - 1;
                if (d > 0) {
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
            topState: __1(function(d) {
                d = this.conditionStack.length - 1 - Math.abs(d || 0);
                if (d >= 0) {
                    return this.conditionStack[d];
                }
                return "INITIAL";
            }, "topState"),
            pushState: __1(function(d) {
                this.begin(d);
            }, "pushState"),
            stateStackSize: __1(function() {
                return this.conditionStack.length;
            }, "stateStackSize"),
            options: {
                "case-insensitive": true
            },
            performAction: __1(function(d, l, p, x) {
                switch(p){
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        return 13;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        return 8;
                    case 6:
                        return 9;
                    case 7:
                        return 7;
                    case 8:
                        return 14;
                    case 9:
                        this.begin("acc_title");
                        return 15;
                    case 10:
                        this.popState();
                        return "acc_title_value";
                    case 11:
                        this.begin("acc_descr");
                        return 17;
                    case 12:
                        this.popState();
                        return "acc_descr_value";
                    case 13:
                        this.begin("acc_descr_multiline");
                        break;
                    case 14:
                        this.popState();
                        break;
                    case 15:
                        return "acc_descr_multiline_value";
                    case 16:
                        return 20;
                    case 17:
                        return 24;
                    case 18:
                        return 23;
                    case 19:
                        return 6;
                    case 20:
                        return "INVALID";
                }
            }, "anonymous"),
            rules: [
                /^(?:%(?!\{)[^\n]*)/i,
                /^(?:[^\}]%%[^\n]*)/i,
                /^(?:[\n]+)/i,
                /^(?:\s+)/i,
                /^(?:#[^\n]*)/i,
                /^(?:timeline[ \t]+LR\b)/i,
                /^(?:timeline[ \t]+TD\b)/i,
                /^(?:timeline\b)/i,
                /^(?:title\s[^\n]+)/i,
                /^(?:accTitle\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*\{\s*)/i,
                /^(?:[\}])/i,
                /^(?:[^\}]*)/i,
                /^(?:section\s[^:\n]+)/i,
                /^(?::\s(?:[^:\n]|:(?!\s))+)/i,
                /^(?:[^#:\n]+)/i,
                /^(?:$)/i,
                /^(?:.)/i
            ],
            conditions: {
                acc_descr_multiline: {
                    rules: [
                        14,
                        15
                    ],
                    inclusive: false
                },
                acc_descr: {
                    rules: [
                        12
                    ],
                    inclusive: false
                },
                acc_title: {
                    rules: [
                        10
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
                        8,
                        9,
                        11,
                        13,
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
        return k;
    })();
    g.lexer = m;
    function y() {
        this.yy = {};
    }
    __1(y, "Parser");
    y.prototype = g;
    g.Parser = y;
    return new y;
})();
tt.parser = tt;
const parser = tt;
const db = {};
u(db, {
    addEvent: ()=>addEvent,
    addSection: ()=>addSection,
    addTask: ()=>addTask,
    addTaskOrg: ()=>addTaskOrg,
    clear: ()=>clear,
    default: ()=>Gt,
    getCommonDb: ()=>getCommonDb,
    getDirection: ()=>getDirection,
    getSections: ()=>getSections,
    getTasks: ()=>getTasks,
    setDirection: ()=>setDirection
});
let D = "";
let mt = 0;
let nt = "LR";
const rt = [];
const j = [];
const q = [];
var getCommonDb = __1(()=>ae_1, "getCommonDb");
var clear = __1(()=>{
    rt.length = 0;
    j.length = 0;
    D = "";
    q.length = 0;
    nt = "LR";
    q_1();
}, "clear");
var setDirection = __1((e)=>{
    nt = e;
}, "setDirection");
var getDirection = __1(()=>nt, "getDirection");
var addSection = __1((e)=>{
    D = e;
    rt.push(e);
}, "addSection");
var getSections = __1(()=>rt, "getSections");
var getTasks = __1(()=>{
    let e = ct();
    const t = 100;
    let n = 0;
    while(!e && n < t){
        e = ct();
        n++;
    }
    j.push(...q);
    return j;
}, "getTasks");
var addTask = __1((task, t, n)=>{
    const i = {
        id: mt++,
        section: D,
        type: D,
        task,
        score: t || 0,
        events: n ? [
            n
        ] : []
    };
    q.push(i);
}, "addTask");
var addEvent = __1((e)=>{
    q.find((n)=>n.id === mt - 1).events.push(e);
}, "addEvent");
var addTaskOrg = __1((e)=>{
    const t = {
        section: D,
        type: D,
        description: e,
        task: e,
        classes: []
    };
    j.push(t);
}, "addTaskOrg");
var ct = __1(()=>{
    const e = __1((n)=>q[n].processed, "compileTask");
    let t = true;
    for (const [n, i] of q.entries()){
        e(n);
        t = t && i.processed;
    }
    return t;
}, "compileTasks");
var Gt = {
    clear,
    getCommonDb,
    getDirection,
    setDirection,
    addSection,
    getSections,
    getTasks,
    addTask,
    addTaskOrg,
    addEvent
};
let Nt = 0;
const drawRect = __1((e, t)=>{
    const n = e.append("rect");
    n.attr("x", t.x);
    n.attr("y", t.y);
    n.attr("fill", t.fill);
    n.attr("stroke", t.stroke);
    n.attr("width", t.width);
    n.attr("height", t.height);
    n.attr("rx", t.rx);
    n.attr("ry", t.ry);
    if (t.class !== undefined) {
        n.attr("class", t.class);
    }
    return n;
}, "drawRect");
const Dt = __1((e, t)=>{
    const i = e.append("circle").attr("cx", t.cx).attr("cy", t.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible");
    const r = e.append("g");
    r.append("circle").attr("cx", t.cx - 15 / 3).attr("cy", t.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
    r.append("circle").attr("cx", t.cx + 15 / 3).attr("cy", t.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
    function h(f) {
        const g = d_1().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
        f.append("path").attr("class", "mouth").attr("d", g).attr("transform", `translate(${t.cx},${t.cy + 2})`);
    }
    __1(h, "smile");
    function c(f) {
        const g = d_1().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
        f.append("path").attr("class", "mouth").attr("d", g).attr("transform", `translate(${t.cx},${t.cy + 7})`);
    }
    __1(c, "sad");
    function a(f) {
        f.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", t.cx - 5).attr("y1", t.cy + 7).attr("x2", t.cx + 5).attr("y2", t.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
    }
    __1(a, "ambivalent");
    if (t.score > 3) {
        h(r);
    } else if (t.score < 3) {
        c(r);
    } else {
        a(r);
    }
    return i;
}, "drawFace");
const drawCircle = __1((e, t)=>{
    const n = e.append("circle");
    n.attr("cx", t.cx);
    n.attr("cy", t.cy);
    n.attr("class", `actor-${t.pos}`);
    n.attr("fill", t.fill);
    n.attr("stroke", t.stroke);
    n.attr("r", t.r);
    if (n.class !== undefined) {
        n.attr("class", n.class);
    }
    if (t.title !== undefined) {
        n.append("title").text(t.title);
    }
    return n;
}, "drawCircle");
const drawText = __1((e, t)=>{
    const n = t.text.replace(/<br\s*\/?>/gi, " ");
    const i = e.append("text");
    i.attr("x", t.x);
    i.attr("y", t.y);
    i.attr("class", "legend");
    i.style("text-anchor", t.anchor);
    if (t.class !== undefined) {
        i.attr("class", t.class);
    }
    const r = i.append("tspan");
    r.attr("x", t.x + t.textMargin * 2);
    r.text(n);
    return i;
}, "drawText");
const drawLabel = __1((e, t)=>{
    function n(r, h, c, a, f) {
        return `${r},${h} ${r + c},${h} ${r + c},${h + a - f} ${r + c - f * 1.2},${h + a} ${r},${h + a}`;
    }
    __1(n, "genPoints");
    const i = e.append("polygon");
    i.attr("points", n(t.x, t.y, 50, 20, 7));
    i.attr("class", "labelBox");
    t.y = t.y + t.labelMargin;
    t.x = t.x + 0.5 * t.labelMargin;
    drawText(e, t);
}, "drawLabel");
const drawSection = __1((e, t, n)=>{
    const i = e.append("g");
    const r = getNoteRect();
    r.x = t.x;
    r.y = t.y;
    r.fill = t.fill;
    r.width = n.width;
    r.height = n.height;
    r.class = `journey-section section-type-${t.num}`;
    r.rx = 3;
    r.ry = 3;
    drawRect(i, r);
    Ht(n)(t.text, i, r.x, r.y, r.width, r.height, {
        class: `journey-section section-type-${t.num}`
    }, n, t.colour);
}, "drawSection");
let et = -1;
const drawTask = __1((e, t, n, i)=>{
    const cx = t.x + n.width / 2;
    const h = e.append("g");
    et++;
    h.append("line").attr("id", `${i}-task${et}`).attr("x1", cx).attr("y1", t.y).attr("x2", cx).attr("y2", 450).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666");
    Dt(h, {
        cx,
        cy: 300 + (5 - t.score) * 30,
        score: t.score
    });
    const a = getNoteRect();
    a.x = t.x;
    a.y = t.y;
    a.fill = t.fill;
    a.width = n.width;
    a.height = n.height;
    a.class = `task task-type-${t.num}`;
    a.rx = 3;
    a.ry = 3;
    drawRect(h, a);
    Ht(n)(t.task, h, a.x, a.y, a.width, a.height, {
        class: "task"
    }, n, t.colour);
}, "drawTask");
const drawBackgroundRect = __1((e, t)=>{
    drawRect(e, {
        x: t.startx,
        y: t.starty,
        width: t.stopx - t.startx,
        height: t.stopy - t.starty,
        fill: t.fill,
        class: "rect"
    }).lower();
}, "drawBackgroundRect");
const getTextObj = __1(()=>({
        x: 0,
        y: 0,
        fill: undefined,
        "text-anchor": "start",
        width: 100,
        height: 100,
        textMargin: 0,
        rx: 0,
        ry: 0
    }), "getTextObj");
var getNoteRect = __1(()=>({
        x: 0,
        y: 0,
        width: 100,
        anchor: "start",
        height: 100,
        rx: 0,
        ry: 0
    }), "getNoteRect");
var Ht = (()=>{
    function e(r, h, c, a, f, g, m, y) {
        const k = h.append("text").attr("x", c + f / 2).attr("y", a + g / 2 + 5).style("font-color", y).style("text-anchor", "middle").text(r);
        i(k, m);
    }
    __1(e, "byText");
    function t(r, h, c, a, f, g, m, { taskFontSize, taskFontFamily }, k) {
        const l = r.split(/<br\s*\/?>/gi);
        for(let p = 0; p < l.length; p++){
            const x = p * taskFontSize - taskFontSize * (l.length - 1) / 2;
            const u = h.append("text").attr("x", c + f / 2).attr("y", a).attr("fill", k).style("text-anchor", "middle").style("font-size", taskFontSize).style("font-family", taskFontFamily);
            u.append("tspan").attr("x", c + f / 2).attr("dy", x).text(l[p]);
            u.attr("y", a + g / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central");
            i(u, m);
        }
    }
    __1(t, "byTspan");
    function n(r, h, c, a, f, g, m, y) {
        const k = h.append("switch");
        const d = k.append("foreignObject").attr("x", c).attr("y", a).attr("width", f).attr("height", g).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
        d.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(r);
        t(r, k, c, a, f, g, m, y);
        i(d, m);
    }
    __1(n, "byFo");
    function i(r, h) {
        for(const c in h){
            if (c in h) {
                r.attr(c, h[c]);
            }
        }
    }
    __1(i, "_setTextAttrs");
    return (r)=>{
        if (r.textPlacement === "fo") {
            return n;
        }
        if (r.textPlacement === "old") {
            return e;
        }
        return t;
    };
})();
const initGraphics = __1((e, t)=>{
    Nt = 0;
    et = -1;
    e.append("defs").append("marker").attr("id", `${t}-arrowhead`).attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
}, "initGraphics");
function it(e, t) {
    e.each(function() {
        const n = d(this);
        const i = n.text().split(/(\s+|<br>)/).reverse();
        let r;
        let h = [];
        const c = 1.1;
        const a = n.attr("y");
        const f = parseFloat(n.attr("dy"));
        let g = n.text(null).append("tspan").attr("x", 0).attr("y", a).attr("dy", `${f}em`);
        for(let m = 0; m < i.length; m++){
            r = i[i.length - 1 - m];
            h.push(r);
            g.text(h.join(" ").trim());
            if (g.node().getComputedTextLength() > t || r === "<br>") {
                h.pop();
                g.text(h.join(" ").trim());
                if (r === "<br>") {
                    h = [
                        ""
                    ];
                } else {
                    h = [
                        r
                    ];
                }
                g = n.append("tspan").attr("x", 0).attr("y", a).attr("dy", `${c}em`).text(r);
            }
        }
    });
}
__1(it, "wrap");
const drawNode = __1((e, t, n, i, r, h = false)=>{
    const { theme, look } = i;
    const f = theme?.includes("redux");
    const g = i?.themeVariables?.THEME_COLOR_LIMIT ?? 12;
    const m = n % g - 1;
    const y = e.append("g");
    t.section = m;
    y.attr("class", `${t.class ? `${t.class} ` : ""}timeline-node ${`section-${m}`}`);
    const k = y.append("g");
    const s = y.append("g");
    const l = s.append("text").text(t.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(it, t.width).node().getBBox();
    const p = i.fontSize?.replace ? i.fontSize.replace("px", "") : i.fontSize;
    t.height = l.height + p * 1.1 * 0.5 + t.padding;
    t.height = Math.max(t.height, t.maxHeight);
    t.width = t.width + 2 * t.padding;
    s.attr("transform", `translate(${t.width / 2}, ${t.padding / 2})`);
    if (f) {
        s.attr("transform", `translate(${t.width / 2}, ${h ? t.padding / 2 + 3 : t.padding})`);
    }
    te(k, t, m, r, i);
    if (look === "neo" && (y.attr("data-look", "neo"), f)) {
        const x = theme.includes("dark");
        const u = e.node()?.ownerSVGElement ?? e.node();
        const S = d(u);
        const v = S.attr("id") ?? "";
        const I = v ? `${v}-drop-shadow` : "drop-shadow";
        if (S.select(`#${I}`).empty()) {
            const R = S.select("defs");
            (R.empty() ? S.append("defs") : R).append("filter").attr("id", I).attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", x ? "0.2" : "0.06").attr("flood-color", x ? "#FFFFFF" : "#000000");
        }
    }
    return t;
}, "drawNode");
const getVirtualNodeHeight = __1((e, t, n)=>{
    const i = e.append("g");
    const h = i.append("text").text(t.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(it, t.width).node().getBBox();
    const c = n.fontSize?.replace ? n.fontSize.replace("px", "") : n.fontSize;
    i.remove();
    return h.height + c * 1.1 * 0.5 + t.padding;
}, "getVirtualNodeHeight");
var te = __1((e, t, n, i, { theme })=>{
    const c = theme?.includes("redux") ? 0 : 5;
    const a = 5;
    const f = c > 0 ? `M0 ${t.height - a} v${-t.height + 2 * a} q0,-${c},${c},-${c} h${t.width - 2 * a} q${c},0,${c},${c} v${t.height - a} H0 Z` : `M0 ${t.height - a} v${-(t.height - a)} h${t.width} v${t.height} H0 Z`;
    e.append("path").attr("id", `${i}-node-${Nt++}`).attr("class", `node-bkg node-${t.type}`).attr("d", f);
    if (!theme?.includes("redux")) {
        e.append("line").attr("class", `node-line-${n}`).attr("x1", 0).attr("y1", t.height).attr("x2", t.width).attr("y2", t.height);
    }
}, "defaultBkg");
const M = {
    drawRect,
    drawCircle,
    drawSection,
    drawText,
    drawLabel,
    drawTask,
    drawBackgroundRect,
    getTextObj,
    getNoteRect,
    initGraphics,
    drawNode,
    getVirtualNodeHeight
};
const ee = __1((e, t, n, i)=>{
    const r = c_1();
    const { look, theme, themeVariables } = r;
    const { useGradient, gradientStart, gradientStop } = themeVariables;
    const y = r.timeline?.leftMargin ?? 50;
    l_1.debug("timeline", i.db);
    const r_securityLevel = r.securityLevel;
    let s;
    if (r_securityLevel === "sandbox") {
        s = d(`#i${t}`);
    }
    const l = (r_securityLevel === "sandbox" ? d(s.nodes()[0].contentDocument.body) : d("body")).select(`#${t}`);
    l.append("g");
    const p = i.db.getTasks();
    const x = i.db.getCommonDb().getDiagramTitle();
    l_1.debug("task", p);
    M.initGraphics(l, t);
    const u = i.db.getSections();
    l_1.debug("sections", u);
    let S = 0;
    let v = 0;
    let I = 0;
    let R = 0;
    let W = 50 + y;
    let O = 50;
    R = 50;
    let L = 0;
    let w = true;
    u.forEach((N)=>{
        const b = {
            number: L,
            descr: N,
            section: L,
            width: 150,
            padding: 20,
            maxHeight: S
        };
        const _ = M.getVirtualNodeHeight(l, b, r);
        l_1.debug("sectionHeight before draw", _);
        S = Math.max(S, _ + 20);
    });
    let H = 0;
    let V = 0;
    l_1.debug("tasks.length", p.length);
    for (const [N, b] of p.entries()){
        const _ = {
            number: N,
            descr: b,
            section: b.section,
            width: 150,
            padding: 20,
            maxHeight: v
        };
        const $ = M.getVirtualNodeHeight(l, _, r);
        l_1.debug("taskHeight before draw", $);
        v = Math.max(v, $ + 20);
        H = Math.max(H, b.events.length);
        let T = 0;
        for (const P of b.events){
            const C = {
                descr: P,
                section: b.section,
                number: b.section,
                width: 150,
                padding: 20,
                maxHeight: 50
            };
            T += M.getVirtualNodeHeight(l, C, r);
        }
        if (b.events.length > 0) {
            T += (b.events.length - 1) * 10;
        }
        V = Math.max(V, T);
    }
    l_1.debug("maxSectionHeight before draw", S);
    l_1.debug("maxTaskHeight before draw", v);
    if (u && u.length > 0) {
        u.forEach((N)=>{
            const b = p.filter((P)=>P.section === N);
            const _ = {
                number: L,
                descr: N,
                section: L,
                width: 200 * Math.max(b.length, 1) - 50,
                padding: 20,
                maxHeight: S
            };
            l_1.debug("sectionNode", _);
            const $ = l.append("g");
            const T = M.drawNode($, _, L, r, t);
            l_1.debug("sectionNode output", T);
            $.attr("transform", `translate(${W}, ${R})`);
            O += S + 50;
            if (b.length > 0) {
                lt(l, b, L, W, O, v, r, H, V, S, false, t);
            }
            W += 200 * Math.max(b.length, 1);
            O = R;
            L++;
        });
    } else {
        w = false;
        lt(l, p, L, W, O, v, r, H, V, S, true, t);
    }
    const F = l.node().getBBox();
    l_1.debug("bounds", F);
    if (x) {
        l.append("text").text(x).attr("x", look === "neo" ? F.x * 2 + y : F.width / 2 - y).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 20);
    }
    I = w ? S + v + 150 : v + 100;
    l.append("g").attr("class", "lineWrapper").append("line").attr("x1", y).attr("y1", I).attr("x2", F.width + 3 * y).attr("y2", I).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", `url(#${t}-arrowhead)`);
    if (look === "neo" && useGradient && theme !== "neutral") {
        const N = l.select("defs");
        const _ = (N.empty() ? l.append("defs") : N).append("linearGradient").attr("id", `${l.attr("id")}-gradient`).attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
        _.append("stop").attr("offset", "0%").attr("stop-color", gradientStart).attr("stop-opacity", 1);
        _.append("stop").attr("offset", "100%").attr("stop-color", gradientStop).attr("stop-opacity", 1);
    }
    ad(undefined, l, r.timeline?.padding ?? 50, r.timeline?.useMaxWidth ?? false);
}, "draw");
var lt = __1((e, t, n, i, r, h, c, a, f, g, m, y)=>{
    for (const k of t){
        const s = {
            descr: k.task,
            section: n,
            number: n,
            width: 150,
            padding: 20,
            maxHeight: h
        };
        l_1.debug("taskNode", s);
        const d = e.append("g").attr("class", "taskWrapper");
        const p = M.drawNode(d, s, n, c, y).height;
        l_1.debug("taskHeight after draw", p);
        d.attr("transform", `translate(${i}, ${r})`);
        h = Math.max(h, p);
        if (k.events) {
            const x = e.append("g").attr("class", "lineWrapper");
            let u = h;
            r += 100;
            u = u + ne(e, k.events, n, i, r, c, y);
            r -= 100;
            x.append("line").attr("x1", i + 190 / 2).attr("y1", r + h).attr("x2", i + 190 / 2).attr("y2", r + h + 100 + f + 100).attr("stroke-width", 2).attr("stroke", "black").attr("marker-end", `url(#${y}-arrowhead)`).attr("stroke-dasharray", "5,5");
        }
        i = i + 200;
        m && !c.timeline?.disableMulticolor && n++;
    }
    r = r - 10;
}, "drawTasks");
var ne = __1((e, t, n, i, r, h, c)=>{
    let a = 0;
    const f = r;
    r = r + 100;
    for (const g of t){
        const m = {
            descr: g,
            section: n,
            number: n,
            width: 150,
            padding: 20,
            maxHeight: 50
        };
        l_1.debug("eventNode", m);
        const y = e.append("g").attr("class", "eventWrapper");
        const s = M.drawNode(y, m, n, h, c, true).height;
        a = a + s;
        y.attr("transform", `translate(${i}, ${r})`);
        r = r + 10 + s;
    }
    r = f;
    return a;
}, "drawEvents");
const re = {
    setConf: __1(()=>{}, "setConf"),
    draw: ee
};
const Q = 200;
const padding = 5;
const se = Q + padding * 2;
const at = Q + 100;
const ie = at + padding * 2;
const Lt = 10;
const ae = 0;
const ht = 20;
const Mt = 20;
const dt = 30;
const At = 50;
const oe = __1((e, t, n, i)=>{
    const r = c_1();
    const h = r.timeline?.leftMargin ?? 50;
    l_1.debug("timeline", i.db);
    const c = F_1(t);
    c.append("g");
    const a = i.db.getTasks();
    const f = i.db.getCommonDb().getDiagramTitle();
    l_1.debug("task", a);
    M.initGraphics(c);
    const g = i.db.getSections();
    l_1.debug("sections", g);
    let m = 0;
    let y = 0;
    const k = 50 + h;
    let s = 50;
    const d = s;
    const l = k;
    const p = se + Mt;
    const x = ie + At;
    const u = l + p;
    let S = 0;
    const v = g && g.length > 0;
    const I = v ? u : k + p;
    const width = Math.max(50, p + x - padding * 2);
    g.forEach((N)=>{
        const b = {
            number: S,
            descr: N,
            section: S,
            width,
            padding,
            maxHeight: m
        };
        const _ = M.getVirtualNodeHeight(c, b, r);
        l_1.debug("sectionHeight before draw", _);
        m = Math.max(m, _);
    });
    let W = 0;
    l_1.debug("tasks.length", a.length);
    for (const [N, b] of a.entries()){
        const _ = {
            number: N,
            descr: b,
            section: b.section,
            width: Q,
            padding,
            maxHeight: y
        };
        const $ = M.getVirtualNodeHeight(c, _, r);
        l_1.debug("taskHeight before draw", $);
        y = Math.max(y, $);
        let T = 0;
        for (const P of b.events){
            const C = {
                descr: P,
                section: b.section,
                number: b.section,
                width: at,
                padding,
                maxHeight: 50
            };
            T += M.getVirtualNodeHeight(c, C, r);
        }
        if (b.events.length > 0) {
            T += (b.events.length - 1) * Lt;
        }
        W = Math.max(W, T) + ae;
    }
    l_1.debug("maxSectionHeight before draw", m);
    l_1.debug("maxTaskHeight before draw", y);
    const L = Math.max(y, W) + dt;
    if (v) {
        g.forEach((N)=>{
            const b = a.filter((X)=>X.section === N);
            const _ = {
                number: S,
                descr: N,
                section: S,
                width,
                padding,
                maxHeight: m
            };
            l_1.debug("sectionNode", _);
            const $ = c.append("g");
            const T = M.drawNode($, _, S, r);
            l_1.debug("sectionNode output", T);
            const P = I - p;
            $.attr("transform", `translate(${P}, ${s})`);
            const C = s + T.height + ht;
            if (b.length > 0) {
                ut(c, b, S, I, C, y, r, L, false);
            }
            const b_length = b.length;
            const B = T.height + ht + L * Math.max(b_length, 1) - (b_length > 0 ? dt * 2 : 0);
            s += B;
            S++;
        });
    } else {
        ut(c, a, S, I, s, y, r, L, true);
    }
    let w = c.node()?.getBBox();
    if (!w) {
        throw new Error("bbox not found");
    }
    l_1.debug("bounds", w);
    if (f) {
        c.append("text").text(f).attr("x", w.width / 2 - h).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 20);
        w = c.node()?.getBBox();
        if (!w) {
            throw new Error("bbox not found");
        }
        l_1.debug("bounds after title", w);
    }
    const [H] = a1(r.fontSize);
    const V = (H ?? 16) * 2;
    const F = (H ?? 16) * 0.5 + 20;
    const K = c.append("g").attr("class", "lineWrapper");
    K.append("line").attr("x1", I).attr("y1", d - V).attr("x2", I).attr("y2", w.y + w.height + F).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
    K.lower();
    ad(undefined, c, r.timeline?.padding ?? 50, r.timeline?.useMaxWidth ?? false);
}, "draw");
var ut = __1((e, t, n, i, r, h, c, a, f)=>{
    for (const g of t){
        const m = {
            descr: g.task,
            section: n,
            number: n,
            width: Q,
            padding,
            maxHeight: h
        };
        l_1.debug("taskNode", m);
        const y = e.append("g").attr("class", "taskWrapper");
        const k = M.drawNode(y, m, n, c);
        const s = k.height;
        l_1.debug("taskHeight after draw", s);
        const d = i - Mt - k.width;
        y.attr("transform", `translate(${d}, ${r})`);
        h = Math.max(h, s);
        if (g.events && g.events.length > 0) {
            const l = r;
            const p = i + At;
            ce(e, g.events, n, i, p, l, c);
        }
        r = r + a;
        f && !c.timeline?.disableMulticolor && n++;
    }
}, "drawTasks");
var ce = __1((e, t, n, i, r, h, c)=>{
    let a = h;
    for (const f of t){
        const g = {
            descr: f,
            section: n,
            number: n,
            width: at,
            padding,
            maxHeight: 0
        };
        l_1.debug("eventNode", g);
        const m = e.append("g").attr("class", "eventWrapper");
        const k = M.drawNode(m, g, n, c).height;
        m.attr("transform", `translate(${r}, ${a})`);
        const s = e.append("g").attr("class", "lineWrapper");
        const d = a + k / 2;
        s.append("line").attr("x1", i).attr("y1", d).attr("x2", r).attr("y2", d).attr("stroke-width", 2).attr("stroke", "black").attr("marker-end", "url(#arrowhead)").attr("stroke-dasharray", "5,5");
        a = a + k + Lt;
    }
    return a - h;
}, "drawEvents");
const le = {
    setConf: __1(()=>{}, "setConf"),
    draw: oe
};
const he = __1((e)=>{
    const { theme } = z();
    const n = theme?.includes("dark");
    const i = theme?.includes("color");
    const r = e.svgId?.replace(/^#/, "") ?? "";
    const h = r ? `url(#${r}-drop-shadow)` : e.dropShadow ?? "none";
    let c = "";
    for(let a = 0; a < e.THEME_COLOR_LIMIT; a++){
        const f = `${17 - 3 * a}`;
        const g = i ? e.borderColorArray[a] : e.mainBkg;
        const m = i ? e.borderColorArray[a] : e.nodeBorder;
        c += `
    .section-${a - 1} rect,
    .section-${a - 1} path,
    .section-${a - 1} circle {
      fill: ${n && i ? e.mainBkg : g};
      stroke: ${m};
      stroke-width: ${e.strokeWidth};
      filter: ${h};
    }

    .section-${a - 1} text {
      fill: ${e.nodeBorder};
      font-weight: ${e.fontWeight}
    }

    .node-icon-${a - 1} {
      font-size: 40px;
      color: ${e[`cScaleLabel${a}`]};
    }

    .section-edge-${a - 1} {
      stroke: ${e[`cScale${a}`]};
    }

    .edge-depth-${a - 1} {
      stroke-width: ${f};
    }

    .section-${a - 1} line {
      stroke: ${e[`cScaleInv${a}`]};
      stroke-width: 3;
    }

    .lineWrapper line {
      stroke: ${e.nodeBorder};
      stroke-width:${e.strokeWidth}
    }

    .disabled,
    .disabled circle,
    .disabled text {
      fill: ${e.tertiaryColor ?? "lightgray"};
    }

    .disabled text {
      fill: ${e.clusterBorder ?? "#efefef"};
    }
    `;
    }
    return c;
}, "genReduxSections");
const de = __1((e)=>{
    let t = "";
    for(let n = 0; n < e.THEME_COLOR_LIMIT; n++){
        e[`lineColor${n}`] = e[`lineColor${n}`] || e[`cScaleInv${n}`];
        if (aa(e[`lineColor${n}`])) {
            e[`lineColor${n}`] = ab(e[`lineColor${n}`], 20);
        } else {
            e[`lineColor${n}`] = ac(e[`lineColor${n}`], 20);
        }
    }
    for(let n = 0; n < e.THEME_COLOR_LIMIT; n++){
        const i = `${17 - 3 * n}`;
        t += `
    .section-${n - 1} rect, .section-${n - 1} path, .section-${n - 1} circle, .section-${n - 1} path  {
      fill: ${e[`cScale${n}`]};
    }
    .section-${n - 1} text {
     fill: ${e[`cScaleLabel${n}`]};
    }
    .node-icon-${n - 1} {
      font-size: 40px;
      color: ${e[`cScaleLabel${n}`]};
    }
    .section-edge-${n - 1}{
      stroke: ${e[`cScale${n}`]};
    }
    .edge-depth-${n - 1}{
      stroke-width: ${i};
    }
    .section-${n - 1} line {
      stroke: ${e[`cScaleInv${n}`]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${e[`cScaleLabel${n}`]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: ${e.tertiaryColor ?? "lightgray"};
    }
    .disabled text {
      fill: ${e.clusterBorder ?? "#efefef"};
    }
    `;
    }
    return t;
}, "genSections");
const ue = __1((e)=>{
    const { theme } = z();
    const n = theme?.includes("redux");
    const i = theme === "neutral";
    const r = e.svgId?.replace(/^#/, "") ?? "";
    let h = "";
    if (e.useGradient && r && e.THEME_COLOR_LIMIT && !i) {
        for(let c = 0; c < e.THEME_COLOR_LIMIT; c++){
            h += `
      .section-${c - 1}[data-look="neo"] rect,
      .section-${c - 1}[data-look="neo"] path,
      .section-${c - 1}[data-look="neo"] circle {
        fill: ${e.mainBkg};
        stroke: url(#${r}-gradient);
        stroke-width: 2;
      }
      .section-${c - 1}[data-look="neo"] line {
        stroke: url(#${r}-gradient);
        stroke-width: 2;
      }`;
        }
    }
    return `
  .edge {
    stroke-width: 3;
  }
  ${n ? he(e) : de(e)}
  ${h}
  .section-root rect, .section-root path, .section-root circle  {
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
  .eventWrapper  {
   filter: brightness(120%);
  }
`;
}, "getStyles");
const styles = ue;
const renderer = {
    setConf: __1(()=>{}, "setConf"),
    draw: __1((e, t, n, i)=>{
        if ((i?.db?.getDirection?.() ?? "LR") === "TD") {
            return le.draw(e, t, n, i);
        }
        return re.draw(e, t, n, i);
    }, "draw")
};
export const diagram = {
    db,
    renderer,
    parser,
    styles
};
