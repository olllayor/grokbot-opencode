import { g } from "./chunk-chunk-5VM5RSS4-CTCaRfNa.js";
import { a, g as g_1, h, d } from "./chunk-chunk-32BRIVSS-CL4hvhVG.js";
import { _ as __1, g as g_2, s as setAccDescription, a as a_1, b as setAccTitle, p as getDiagramTitle, o as setDiagramTitle, c as c_1, d as d_1, e as e_1, q } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { d as d_2 } from "./chunk-arc-DIyNF4LI.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "e50e91cf-842d-43f7-9ce1-7a591f578e4e";
            e._sentryDebugIdIdentifier = "sentry-dbid-e50e91cf-842d-43f7-9ce1-7a591f578e4e";
        }
    } catch (e) {}
})();
const U = (()=>{
    const t = __1((h, r, n, l)=>{
        n = n || {};
        for(l = h.length; l--; n[h[l]] = r);
        return n;
    }, "o");
    const e = [
        6,
        8,
        10,
        11,
        12,
        14,
        16,
        17,
        18
    ];
    const a = [
        1,
        9
    ];
    const f = [
        1,
        10
    ];
    const i = [
        1,
        11
    ];
    const u = [
        1,
        12
    ];
    const p = [
        1,
        13
    ];
    const o = [
        1,
        14
    ];
    const g = {
        trace: __1(()=>{}, "trace"),
        yy: {},
        symbols_: {
            error: 2,
            start: 3,
            journey: 4,
            document: 5,
            EOF: 6,
            line: 7,
            SPACE: 8,
            statement: 9,
            NEWLINE: 10,
            title: 11,
            acc_title: 12,
            acc_title_value: 13,
            acc_descr: 14,
            acc_descr_value: 15,
            acc_descr_multiline_value: 16,
            section: 17,
            taskName: 18,
            taskData: 19,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            4: "journey",
            6: "EOF",
            8: "SPACE",
            10: "NEWLINE",
            11: "title",
            12: "acc_title",
            13: "acc_title_value",
            14: "acc_descr",
            15: "acc_descr_value",
            16: "acc_descr_multiline_value",
            17: "section",
            18: "taskName",
            19: "taskData"
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
                2
            ]
        ],
        performAction: __1(function(r, n, l, y, d, c, v) {
            const k = c.length - 1;
            switch(d){
                case 1:
                    return c[k - 1];
                case 2:
                    this.$ = [];
                    break;
                case 3:
                    c[k - 1].push(c[k]);
                    this.$ = c[k - 1];
                    break;
                case 4:
                case 5:
                    this.$ = c[k];
                    break;
                case 6:
                case 7:
                    this.$ = [];
                    break;
                case 8:
                    y.setDiagramTitle(c[k].substr(6));
                    this.$ = c[k].substr(6);
                    break;
                case 9:
                    this.$ = c[k].trim();
                    y.setAccTitle(this.$);
                    break;
                case 10:
                case 11:
                    this.$ = c[k].trim();
                    y.setAccDescription(this.$);
                    break;
                case 12:
                    y.addSection(c[k].substr(8));
                    this.$ = c[k].substr(8);
                    break;
                case 13:
                    y.addTask(c[k - 1], c[k]);
                    this.$ = "task";
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
                11: a,
                12: f,
                14: i,
                16: u,
                17: p,
                18: o
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
                9: 15,
                11: a,
                12: f,
                14: i,
                16: u,
                17: p,
                18: o
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
                8
            ]),
            {
                13: [
                    1,
                    16
                ]
            },
            {
                15: [
                    1,
                    17
                ]
            },
            t(e, [
                2,
                11
            ]),
            t(e, [
                2,
                12
            ]),
            {
                19: [
                    1,
                    18
                ]
            },
            t(e, [
                2,
                4
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
                13
            ])
        ],
        defaultActions: {},
        parseError: __1(function(r, n) {
            if (n.recoverable) {
                this.trace(r);
            } else {
                const l = new Error(r);
                l.hash = n;
                throw l;
            }
        }, "parseError"),
        parse: __1(function(r) {
            const n = this;
            let l = [
                0
            ];
            let y = [];
            let d = [
                null
            ];
            let c = [];
            const table = this.table;
            let k = "";
            let C = 0;
            let Q = 0;
            const yt = 2;
            const D = 1;
            const dt = c.slice.call(arguments, 1);
            const _ = Object.create(this.lexer);
            const I = {
                yy: {}
            };
            for(const O in this.yy){
                if (Object.prototype.hasOwnProperty.call(this.yy, O)) {
                    I.yy[O] = this.yy[O];
                }
            }
            _.setInput(r, I.yy);
            I.yy.lexer = _;
            I.yy.parser = this;
            if (typeof _.yylloc === "undefined") {
                _.yylloc = {};
            }
            let __yylloc = _.yylloc;
            c.push(__yylloc);
            const ft = _.options && _.options.ranges;
            if (typeof I.yy.parseError === "function") {
                this.parseError = I.yy.parseError;
            } else {
                this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function pt(w) {
                l.length = l.length - 2 * w;
                d.length = d.length - w;
                c.length = c.length - w;
            }
            __1(pt, "popStack");
            function tt() {
                let w;
                w = y.pop() || _.lex() || D;
                if (typeof w !== "number") {
                    if (w instanceof Array) {
                        y = w;
                        w = y.pop();
                    }
                    w = n.symbols_[w] || w;
                }
                return w;
            }
            __1(tt, "lex");
            let b;
            let A;
            let T;
            let q;
            const F = {};
            let N;
            let M;
            let et;
            let expected;
            while(true){
                A = l[l.length - 1];
                if (this.defaultActions[A]) {
                    T = this.defaultActions[A];
                } else {
                    if (b === null || typeof b === "undefined") {
                        b = tt();
                    }
                    T = table[A] && table[A][b];
                }
                if (typeof T === "undefined" || !T.length || !T[0]) {
                    let H = "";
                    expected = [];
                    for(N in table[A]){
                        if (this.terminals_[N] && N > yt) {
                            expected.push(`'${this.terminals_[N]}'`);
                        }
                    }
                    if (_.showPosition) {
                        H = `Parse error on line ${C + 1}${`:
`}${_.showPosition()}${`
Expecting `}${expected.join(", ")}, got '${this.terminals_[b] || b}'`;
                    } else {
                        H = `Parse error on line ${C + 1}: Unexpected ${b == D ? "end of input" : `'${this.terminals_[b] || b}'`}`;
                    }
                    this.parseError(H, {
                        text: _.match,
                        token: this.terminals_[b] || b,
                        line: _.yylineno,
                        loc: __yylloc,
                        expected
                    });
                }
                if (T[0] instanceof Array && T.length > 1) {
                    throw new Error(`Parse Error: multiple actions possible at state: ${A}, token: ${b}`);
                }
                switch(T[0]){
                    case 1:
                        l.push(b);
                        d.push(_.yytext);
                        c.push(_.yylloc);
                        l.push(T[1]);
                        b = null;
                        Q = _.yyleng;
                        k = _.yytext;
                        C = _.yylineno;
                        __yylloc = _.yylloc;
                        break;
                    case 2:
                        M = this.productions_[T[1]][1];
                        F.$ = d[d.length - M];
                        F._$ = {
                            first_line: c[c.length - (M || 1)].first_line,
                            last_line: c[c.length - 1].last_line,
                            first_column: c[c.length - (M || 1)].first_column,
                            last_column: c[c.length - 1].last_column
                        };
                        if (ft) {
                            F._$.range = [
                                c[c.length - (M || 1)].range[0],
                                c[c.length - 1].range[1]
                            ];
                        }
                        q = this.performAction.apply(F, [
                            k,
                            Q,
                            C,
                            I.yy,
                            T[1],
                            d,
                            c
                        ].concat(dt));
                        if (typeof q !== "undefined") {
                            return q;
                        }
                        if (M) {
                            l = l.slice(0, -1 * M * 2);
                            d = d.slice(0, -1 * M);
                            c = c.slice(0, -1 * M);
                        }
                        l.push(this.productions_[T[1]][0]);
                        d.push(F.$);
                        c.push(F._$);
                        et = table[l[l.length - 2]][l[l.length - 1]];
                        l.push(et);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }, "parse")
    };
    const m = (()=>{
        const h = {
            EOF: 1,
            parseError: __1(function(n, l) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(n, l);
                } else {
                    throw new Error(n);
                }
            }, "parseError"),
            setInput: __1(function(r, n) {
                this.yy = n || this.yy || {};
                this._input = r;
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
                const r = this._input[0];
                this.yytext += r;
                this.yyleng++;
                this.offset++;
                this.match += r;
                this.matched += r;
                const n = r.match(/(?:\r\n?|\n).*/g);
                n ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++;
                this.options.ranges && this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return r;
            }, "input"),
            unput: __1(function(r) {
                const r_length = r.length;
                const l = r.split(/(?:\r\n?|\n)/g);
                this._input = r + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - r_length);
                this.offset -= r_length;
                const y = this.match.split(/(?:\r\n?|\n)/g);
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
                    last_column: l ? (l.length === y.length ? this.yylloc.first_column : 0) + y[y.length - l.length].length - l[0].length : this.yylloc.first_column - r_length
                };
                if (this.options.ranges) {
                    this.yylloc.range = [
                        range[0],
                        range[0] + this.yyleng - r_length
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
            less: __1(function(r) {
                this.unput(this.match.slice(r));
            }, "less"),
            pastInput: __1(function() {
                const r = this.matched.substr(0, this.matched.length - this.match.length);
                return (r.length > 20 ? "..." : "") + r.substr(-20).replace(/\n/g, "");
            }, "pastInput"),
            upcomingInput: __1(function() {
                let match = this.match;
                if (match.length < 20) {
                    match += this._input.substr(0, 20 - match.length);
                }
                return (match.substr(0, 20) + (match.length > 20 ? "..." : "")).replace(/\n/g, "");
            }, "upcomingInput"),
            showPosition: __1(function() {
                const r = this.pastInput();
                const n = new Array(r.length + 1).join("-");
                return `${r + this.upcomingInput() + `
` + n}^`;
            }, "showPosition"),
            test_match: __1(function(r, n) {
                let l;
                let y;
                let d;
                if (this.options.backtrack_lexer) {
                    d = {
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
                        d.yylloc.range = this.yylloc.range.slice(0);
                    }
                }
                y = r[0].match(/(?:\r\n?|\n).*/g);
                if (y) {
                    this.yylineno += y.length;
                }
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: y ? y[y.length - 1].length - y[y.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + r[0].length
                };
                this.yytext += r[0];
                this.match += r[0];
                this.matches = r;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) {
                    this.yylloc.range = [
                        this.offset,
                        this.offset += this.yyleng
                    ];
                }
                this._more = false;
                this._backtrack = false;
                this._input = this._input.slice(r[0].length);
                this.matched += r[0];
                l = this.performAction.call(this, this.yy, this, n, this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) {
                    this.done = false;
                }
                if (l) {
                    return l;
                }
                if (this._backtrack) {
                    for(const c in d){
                        this[c] = d[c];
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
                let r;
                let n;
                let l;
                let y;
                if (!this._more) {
                    this.yytext = "";
                    this.match = "";
                }
                for(var d = this._currentRules(), c = 0; c < d.length; c++){
                    l = this._input.match(this.rules[d[c]]);
                    if (l && (!n || l[0].length > n[0].length)) {
                        n = l;
                        y = c;
                        if (this.options.backtrack_lexer) {
                            r = this.test_match(l, d[c]);
                            if (r !== false) {
                                return r;
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
                    r = this.test_match(n, d[y]);
                    if (r !== false) {
                        return r;
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
            performAction: __1(function(n, l, y, d) {
                switch(y){
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        return 10;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        return 4;
                    case 6:
                        return 11;
                    case 7:
                        this.begin("acc_title");
                        return 12;
                    case 8:
                        this.popState();
                        return "acc_title_value";
                    case 9:
                        this.begin("acc_descr");
                        return 14;
                    case 10:
                        this.popState();
                        return "acc_descr_value";
                    case 11:
                        this.begin("acc_descr_multiline");
                        break;
                    case 12:
                        this.popState();
                        break;
                    case 13:
                        return "acc_descr_multiline_value";
                    case 14:
                        return 17;
                    case 15:
                        return 18;
                    case 16:
                        return 19;
                    case 17:
                        return ":";
                    case 18:
                        return 6;
                    case 19:
                        return "INVALID";
                }
            }, "anonymous"),
            rules: [
                /^(?:%(?!\{)[^\n]*)/i,
                /^(?:[^\}]%%[^\n]*)/i,
                /^(?:[\n]+)/i,
                /^(?:\s+)/i,
                /^(?:#[^\n]*)/i,
                /^(?:journey\b)/i,
                /^(?:title\s[^#\n;]+)/i,
                /^(?:accTitle\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*\{\s*)/i,
                /^(?:[\}])/i,
                /^(?:[^\}]*)/i,
                /^(?:section\s[^#:\n;]+)/i,
                /^(?:[^#:\n;]+)/i,
                /^(?::[^#\n;]+)/i,
                /^(?::)/i,
                /^(?:$)/i,
                /^(?:.)/i
            ],
            conditions: {
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
                        9,
                        11,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19
                    ],
                    inclusive: true
                }
            }
        };
        return h;
    })();
    g.lexer = m;
    function x() {
        this.yy = {};
    }
    __1(x, "Parser");
    x.prototype = g;
    g.Parser = x;
    return new x;
})();
U.parser = U;
const parser = U;
let V = "";
const J = [];
const L = [];
const B = [];
const clear = __1(()=>{
    J.length = 0;
    L.length = 0;
    V = "";
    B.length = 0;
    q();
}, "clear");
const addSection = __1((t)=>{
    V = t;
    J.push(t);
}, "addSection");
const getSections = __1(()=>J, "getSections");
const getTasks = __1(()=>{
    let t = rt();
    const e = 100;
    let a = 0;
    while(!t && a < e){
        t = rt();
        a++;
    }
    L.push(...B);
    return L;
}, "getTasks");
const Ft = __1(()=>{
    const t = [];
    L.forEach((a)=>{
        if (a.people) {
            t.push(...a.people);
        }
    });
    return [
        ...new Set(t)
    ].sort();
}, "updateActors");
const addTask = __1((task, e)=>{
    const a = e.substr(1).split(":");
    let score = 0;
    let i = [];
    if (a.length === 1) {
        score = Number(a[0]);
        i = [];
    } else {
        score = Number(a[0]);
        i = a[1].split(",");
    }
    const people = i.map((o)=>o.trim());
    const p = {
        section: V,
        type: V,
        people,
        task,
        score
    };
    B.push(p);
}, "addTask");
const addTaskOrg = __1((t)=>{
    const e = {
        section: V,
        type: V,
        description: t,
        task: t,
        classes: []
    };
    L.push(e);
}, "addTaskOrg");
var rt = __1(()=>{
    const t = __1((a)=>B[a].processed, "compileTask");
    let e = true;
    for (const [a, f] of B.entries()){
        t(a);
        e = e && f.processed;
    }
    return e;
}, "compileTasks");
const getActors = __1(()=>Ft(), "getActors");
const db = {
    getConfig: __1(()=>c_1().journey, "getConfig"),
    clear,
    setDiagramTitle,
    getDiagramTitle,
    setAccTitle,
    getAccTitle: a_1,
    setAccDescription,
    getAccDescription: g_2,
    addSection,
    getSections,
    getTasks,
    addTask,
    addTaskOrg,
    getActors
};
const Bt = __1((t)=>`.label {
    font-family: ${t.fontFamily};
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
    font-family: ${t.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor ? `fill: ${t.faceColor}` : "fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0 ? `fill: ${t.fillType0}` : ""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0 ? `fill: ${t.fillType1}` : ""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0 ? `fill: ${t.fillType2}` : ""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0 ? `fill: ${t.fillType3}` : ""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0 ? `fill: ${t.fillType4}` : ""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0 ? `fill: ${t.fillType5}` : ""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0 ? `fill: ${t.fillType6}` : ""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0 ? `fill: ${t.fillType7}` : ""};
  }

  .actor-0 {
    ${t.actor0 ? `fill: ${t.actor0}` : ""};
  }
  .actor-1 {
    ${t.actor1 ? `fill: ${t.actor1}` : ""};
  }
  .actor-2 {
    ${t.actor2 ? `fill: ${t.actor2}` : ""};
  }
  .actor-3 {
    ${t.actor3 ? `fill: ${t.actor3}` : ""};
  }
  .actor-4 {
    ${t.actor4 ? `fill: ${t.actor4}` : ""};
  }
  .actor-5 {
    ${t.actor5 ? `fill: ${t.actor5}` : ""};
  }
  ${g()}
`, "getStyles");
const styles = Bt;
const drawRect = __1((t, e)=>d(t, e), "drawRect");
const Nt = __1((t, e)=>{
    const f = t.append("circle").attr("cx", e.cx).attr("cy", e.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible");
    const i = t.append("g");
    i.append("circle").attr("cx", e.cx - 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
    i.append("circle").attr("cx", e.cx + 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
    function u(g) {
        const m = d_2().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
        g.append("path").attr("class", "mouth").attr("d", m).attr("transform", `translate(${e.cx},${e.cy + 2})`);
    }
    __1(u, "smile");
    function p(g) {
        const m = d_2().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
        g.append("path").attr("class", "mouth").attr("d", m).attr("transform", `translate(${e.cx},${e.cy + 7})`);
    }
    __1(p, "sad");
    function o(g) {
        g.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", e.cx - 5).attr("y1", e.cy + 7).attr("x2", e.cx + 5).attr("y2", e.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
    }
    __1(o, "ambivalent");
    if (e.score > 3) {
        u(i);
    } else if (e.score < 3) {
        p(i);
    } else {
        o(i);
    }
    return f;
}, "drawFace");
const drawCircle = __1((t, e)=>{
    const a = t.append("circle");
    a.attr("cx", e.cx);
    a.attr("cy", e.cy);
    a.attr("class", `actor-${e.pos}`);
    a.attr("fill", e.fill);
    a.attr("stroke", e.stroke);
    a.attr("r", e.r);
    if (a.class !== undefined) {
        a.attr("class", a.class);
    }
    if (e.title !== undefined) {
        a.append("title").text(e.title);
    }
    return a;
}, "drawCircle");
const drawText = __1((t, e)=>h(t, e), "drawText");
const drawLabel = __1((t, e)=>{
    function a(i, u, p, o, g) {
        return `${i},${u} ${i + p},${u} ${i + p},${u + o - g} ${i + p - g * 1.2},${u + o} ${i},${u + o}`;
    }
    __1(a, "genPoints");
    const f = t.append("polygon");
    f.attr("points", a(e.x, e.y, 50, 20, 7));
    f.attr("class", "labelBox");
    e.y = e.y + e.labelMargin;
    e.x = e.x + 0.5 * e.labelMargin;
    drawText(t, e);
}, "drawLabel");
const drawSection = __1((t, e, a)=>{
    const f = t.append("g");
    const i = g_1();
    i.x = e.x;
    i.y = e.y;
    i.fill = e.fill;
    i.width = a.width * e.taskCount + a.diagramMarginX * (e.taskCount - 1);
    i.height = a.height;
    i.class = `journey-section section-type-${e.num}`;
    i.rx = 3;
    i.ry = 3;
    drawRect(f, i);
    ht(a)(e.text, f, i.x, i.y, i.width, i.height, {
        class: `journey-section section-type-${e.num}`
    }, a, e.colour);
}, "drawSection");
let Z = -1;
const drawTask = __1((t, e, a, f)=>{
    const i = e.x + a.width / 2;
    const u = t.append("g");
    Z++;
    u.append("line").attr("id", `${f}-task${Z}`).attr("x1", i).attr("y1", e.y).attr("x2", i).attr("y2", 450).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666");
    Nt(u, {
        cx: i,
        cy: 300 + (5 - e.score) * 30,
        score: e.score
    });
    const o = g_1();
    o.x = e.x;
    o.y = e.y;
    o.fill = e.fill;
    o.width = a.width;
    o.height = a.height;
    o.class = `task task-type-${e.num}`;
    o.rx = 3;
    o.ry = 3;
    drawRect(u, o);
    let g = e.x + 14;
    e.people.forEach((title)=>{
        const color = e.actors[title].color;
        const h = {
            cx: g,
            cy: e.y,
            r: 7,
            fill: color,
            stroke: "#000",
            title,
            pos: e.actors[title].position
        };
        drawCircle(u, h);
        g += 10;
    });
    ht(a)(e.task, u, o.x, o.y, o.width, o.height, {
        class: "task"
    }, a, e.colour);
}, "drawTask");
const drawBackgroundRect = __1((t, e)=>{
    a(t, e);
}, "drawBackgroundRect");
var ht = (()=>{
    function t(i, u, p, o, g, m, x, h) {
        const r = u.append("text").attr("x", p + g / 2).attr("y", o + m / 2 + 5).style("font-color", h).style("text-anchor", "middle").text(i);
        f(r, x);
    }
    __1(t, "byText");
    function e(i, u, p, o, g, m, x, { taskFontSize, taskFontFamily }, r) {
        const y = i.split(/<br\s*\/?>/gi);
        for(let d = 0; d < y.length; d++){
            const c = d * taskFontSize - taskFontSize * (y.length - 1) / 2;
            const v = u.append("text").attr("x", p + g / 2).attr("y", o).attr("fill", r).style("text-anchor", "middle").style("font-size", taskFontSize).style("font-family", taskFontFamily);
            v.append("tspan").attr("x", p + g / 2).attr("dy", c).text(y[d]);
            v.attr("y", o + m / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central");
            f(v, x);
        }
    }
    __1(e, "byTspan");
    function a(i, u, p, o, g, m, x, h) {
        const r = u.append("switch");
        const l = r.append("foreignObject").attr("x", p).attr("y", o).attr("width", g).attr("height", m).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
        l.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(i);
        e(i, r, p, o, g, m, x, h);
        f(l, x);
    }
    __1(a, "byFo");
    function f(i, u) {
        for(const p in u){
            if (p in u) {
                i.attr(p, u[p]);
            }
        }
    }
    __1(f, "_setTextAttrs");
    return (i)=>{
        if (i.textPlacement === "fo") {
            return a;
        }
        if (i.textPlacement === "old") {
            return t;
        }
        return e;
    };
})();
const initGraphics = __1((t, e)=>{
    Z = -1;
    t.append("defs").append("marker").attr("id", `${e}-arrowhead`).attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
}, "initGraphics");
const j = {
    drawRect,
    drawCircle,
    drawSection,
    drawText,
    drawLabel,
    drawTask,
    drawBackgroundRect,
    initGraphics
};
const setConf = __1((t)=>{
    Object.keys(t).forEach((a)=>{
        journey[a] = t[a];
    });
}, "setConf");
const E = {};
let W = 0;
function ut(t) {
    const journey = c_1().journey;
    const e_maxLabelWidth = journey.maxLabelWidth;
    W = 0;
    let cy = 60;
    Object.keys(E).forEach((i)=>{
        const color = E[i].color;
        const p = {
            cx: 20,
            cy,
            r: 7,
            fill: color,
            stroke: "#000",
            pos: E[i].position
        };
        j.drawCircle(t, p);
        let o = t.append("text").attr("visibility", "hidden").text(i);
        const width = o.node().getBoundingClientRect().width;
        o.remove();
        let m = [];
        if (width <= e_maxLabelWidth) {
            m = [
                i
            ];
        } else {
            const x = i.split(" ");
            let h = "";
            o = t.append("text").attr("visibility", "hidden");
            x.forEach((r)=>{
                const n = h ? `${h} ${r}` : r;
                o.text(n);
                if (o.node().getBoundingClientRect().width > e_maxLabelWidth) {
                    if (h) {
                        m.push(h);
                    }
                    h = r;
                    o.text(r);
                    if (o.node().getBoundingClientRect().width > e_maxLabelWidth) {
                        let y = "";
                        for (const d of r){
                            y += d;
                            o.text(`${y}-`);
                            if (o.node().getBoundingClientRect().width > e_maxLabelWidth) {
                                m.push(`${y.slice(0, -1)}-`);
                                y = d;
                            }
                        }
                        h = y;
                    }
                } else {
                    h = n;
                }
            });
            if (h) {
                m.push(h);
            }
            o.remove();
        }
        m.forEach((text, h)=>{
            const r = {
                x: 40,
                y: cy + 7 + h * 20,
                fill: "#666",
                text,
                textMargin: journey.boxTextMargin ?? 5
            };
            const width = j.drawText(t, r).node().getBoundingClientRect().width;
            if (width > W && width > journey.leftMargin - width) {
                W = width;
            }
        });
        cy += Math.max(20, m.length * 20);
    });
}
__1(ut, "drawActorLegend");
var journey = c_1().journey;
let P = 0;
const draw = __1((t, e, a, f)=>{
    const i = c_1();
    const titleColor = i.journey.titleColor;
    const titleFontSize = i.journey.titleFontSize;
    const titleFontFamily = i.journey.titleFontFamily;
    const i_securityLevel = i.securityLevel;
    let m;
    if (i_securityLevel === "sandbox") {
        m = d_1(`#i${e}`);
    }
    const x = i_securityLevel === "sandbox" ? d_1(m.nodes()[0].contentDocument.body) : d_1("body");
    S.init();
    const h = x.select(`#${e}`);
    j.initGraphics(h, e);
    const r = f.db.getTasks();
    const n = f.db.getDiagramTitle();
    const l = f.db.getActors();
    for(const C in E){
        delete E[C];
    }
    let position = 0;
    l.forEach((C)=>{
        E[C] = {
            color: journey.actorColours[position % journey.actorColours.length],
            position
        };
        position++;
    });
    ut(h);
    P = journey.leftMargin + W;
    S.insert(0, 0, P, Object.keys(E).length * 50);
    Gt(h, r, 0, e);
    const d = S.getBounds();
    if (n) {
        h.append("text").text(n).attr("x", P).attr("font-size", titleFontSize).attr("font-weight", "bold").attr("y", 25).attr("fill", titleColor).attr("font-family", titleFontFamily);
    }
    const c = d.stopy - d.starty + 2 * journey.diagramMarginY;
    const v = P + d.stopx + 2 * journey.diagramMarginX;
    e_1(h, c, v, journey.useMaxWidth);
    h.append("line").attr("x1", P).attr("y1", journey.height * 4).attr("x2", v - P - 4).attr("y2", journey.height * 4).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", `url(#${e}-arrowhead)`);
    const k = n ? 70 : 0;
    h.attr("viewBox", `${d.startx} -25 ${v} ${c + k}`);
    h.attr("preserveAspectRatio", "xMinYMin meet");
    h.attr("height", c + k + 25);
}, "draw");
var S = {
    data: {
        startx: undefined,
        stopx: undefined,
        starty: undefined,
        stopy: undefined
    },
    verticalPos: 0,
    sequenceItems: [],
    init: __1(function() {
        this.sequenceItems = [];
        this.data = {
            startx: undefined,
            stopx: undefined,
            starty: undefined,
            stopy: undefined
        };
        this.verticalPos = 0;
    }, "init"),
    updateVal: __1((t, e, a, f)=>{
        if (t[e] === undefined) {
            t[e] = a;
        } else {
            t[e] = f(a, t[e]);
        }
    }, "updateVal"),
    updateBounds: __1(function(t, e, a, f) {
        const journey = c_1().journey;
        const u = this;
        let p = 0;
        function o(g) {
            return __1((x)=>{
                p++;
                const h = u.sequenceItems.length - p + 1;
                u.updateVal(x, "starty", e - h * journey.boxMargin, Math.min);
                u.updateVal(x, "stopy", f + h * journey.boxMargin, Math.max);
                u.updateVal(S.data, "startx", t - h * journey.boxMargin, Math.min);
                u.updateVal(S.data, "stopx", a + h * journey.boxMargin, Math.max);
                if (g !== "activation") {
                    u.updateVal(x, "startx", t - h * journey.boxMargin, Math.min);
                    u.updateVal(x, "stopx", a + h * journey.boxMargin, Math.max);
                    u.updateVal(S.data, "starty", e - h * journey.boxMargin, Math.min);
                    u.updateVal(S.data, "stopy", f + h * journey.boxMargin, Math.max);
                }
            }, "updateItemBounds");
        }
        __1(o, "updateFn");
        this.sequenceItems.forEach(o());
    }, "updateBounds"),
    insert: __1(function(t, e, a, f) {
        const i = Math.min(t, a);
        const u = Math.max(t, a);
        const p = Math.min(e, f);
        const o = Math.max(e, f);
        this.updateVal(S.data, "startx", i, Math.min);
        this.updateVal(S.data, "starty", p, Math.min);
        this.updateVal(S.data, "stopx", u, Math.max);
        this.updateVal(S.data, "stopy", o, Math.max);
        this.updateBounds(i, p, u, o);
    }, "insert"),
    bumpVerticalPos: __1(function(t) {
        this.verticalPos = this.verticalPos + t;
        this.data.stopy = this.verticalPos;
    }, "bumpVerticalPos"),
    getVerticalPos: __1(function() {
        return this.verticalPos;
    }, "getVerticalPos"),
    getBounds: __1(function() {
        return this.data;
    }, "getBounds")
};
const { sectionFills, sectionColours } = journey;
var Gt = __1((t, e, a, f)=>{
    const journey = c_1().journey;
    let u = "";
    const p = journey.height * 2 + journey.diagramMarginY;
    const o = a + p;
    let g = 0;
    let fill = "#CCC";
    let colour = "black";
    let num = 0;
    for (const [r, n] of e.entries()){
        if (u !== n.section) {
            fill = sectionFills[g % sectionFills.length];
            num = g % sectionFills.length;
            colour = sectionColours[g % sectionColours.length];
            let taskCount = 0;
            const d = n.section;
            for(let v = r; v < e.length && e[v].section == d; v++){
                taskCount = taskCount + 1;
            }
            const c = {
                x: r * journey.taskMargin + r * journey.width + P,
                y: 50,
                text: n.section,
                fill,
                num,
                colour,
                taskCount
            };
            j.drawSection(t, c, journey);
            u = n.section;
            g++;
        }
        const l = n.people.reduce((acc, person)=>{
            if (E[person]) {
                acc[person] = E[person];
            }
            return acc;
        }, {});
        n.x = r * journey.taskMargin + r * journey.width + P;
        n.y = o;
        n.width = journey.diagramMarginX;
        n.height = journey.diagramMarginY;
        n.colour = colour;
        n.fill = fill;
        n.num = num;
        n.actors = l;
        j.drawTask(t, n, journey, f);
        S.insert(n.x, n.y, n.x + n.width + journey.taskMargin, 450);
    }
}, "drawTasks");
const renderer = {
    setConf,
    draw
};
export const diagram = {
    parser,
    db,
    renderer,
    styles,
    init: __1((t)=>{
        renderer.setConf(t.journey);
        db.clear();
    }, "init")
};
