import { _ as __1, c as c_1, a1, F, al, q, k, o, a, b, g, s, p, e as e_1 } from "./chunk-mermaid.core-B9Iu5CoE.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "3d5a45f3-c3ff-4cf0-8193-290eedf58673";
            e._sentryDebugIdIdentifier = "sentry-dbid-3d5a45f3-c3ff-4cf0-8193-290eedf58673";
        }
    } catch (e) {}
})();
const J = (()=>{
    const e = __1((T, t, s, i)=>{
        s = s || {};
        for(i = T.length; i--; s[T[i]] = t);
        return s;
    }, "o");
    const h = [
        1,
        4
    ];
    const r = [
        1,
        14
    ];
    const a = [
        1,
        12
    ];
    const l = [
        1,
        13
    ];
    const y = [
        6,
        7,
        8
    ];
    const f = [
        1,
        20
    ];
    const d = [
        1,
        18
    ];
    const m = [
        1,
        19
    ];
    const u = [
        6,
        7,
        11
    ];
    const k = [
        1,
        6,
        13,
        14
    ];
    const g = [
        1,
        23
    ];
    const _ = [
        1,
        24
    ];
    const x = [
        1,
        6,
        7,
        11,
        13,
        14
    ];
    const D = {
        trace: __1(()=>{}, "trace"),
        yy: {},
        symbols_: {
            error: 2,
            start: 3,
            ishikawa: 4,
            spaceLines: 5,
            SPACELINE: 6,
            NL: 7,
            ISHIKAWA: 8,
            document: 9,
            stop: 10,
            EOF: 11,
            statement: 12,
            SPACELIST: 13,
            TEXT: 14,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            6: "SPACELINE",
            7: "NL",
            8: "ISHIKAWA",
            11: "EOF",
            13: "SPACELIST",
            14: "TEXT"
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
                1
            ],
            [
                12,
                1
            ],
            [
                12,
                1
            ]
        ],
        performAction: __1((t, s, i, c, p, n, v)=>{
            const w = n.length - 1;
            switch(p){
                case 6:
                case 7:
                    return c;
                case 15:
                    c.addNode(n[w - 1].length, n[w].trim());
                    break;
                case 16:
                    c.addNode(0, n[w].trim());
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
                6: r,
                7: [
                    1,
                    10
                ],
                9: 9,
                12: 11,
                13: a,
                14: l
            },
            e(y, [
                2,
                3
            ]),
            {
                1: [
                    2,
                    2
                ]
            },
            e(y, [
                2,
                4
            ]),
            e(y, [
                2,
                5
            ]),
            {
                1: [
                    2,
                    6
                ],
                6: r,
                12: 15,
                13: a,
                14: l
            },
            {
                6: r,
                9: 16,
                12: 11,
                13: a,
                14: l
            },
            {
                6: f,
                7: d,
                10: 17,
                11: m
            },
            e(u, [
                2,
                18
            ], {
                14: [
                    1,
                    21
                ]
            }),
            e(u, [
                2,
                16
            ]),
            e(u, [
                2,
                17
            ]),
            {
                6: f,
                7: d,
                10: 22,
                11: m
            },
            {
                1: [
                    2,
                    7
                ],
                6: r,
                12: 15,
                13: a,
                14: l
            },
            e(k, [
                2,
                14
            ], {
                7: g,
                11: _
            }),
            e(x, [
                2,
                8
            ]),
            e(x, [
                2,
                9
            ]),
            e(x, [
                2,
                10
            ]),
            e(u, [
                2,
                15
            ]),
            e(k, [
                2,
                13
            ], {
                7: g,
                11: _
            }),
            e(x, [
                2,
                11
            ]),
            e(x, [
                2,
                12
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
        parseError: __1(function(t, s) {
            if (s.recoverable) {
                this.trace(t);
            } else {
                const i = new Error(t);
                i.hash = s;
                throw i;
            }
        }, "parseError"),
        parse: __1(function(t) {
            const s = this;
            let i = [
                0
            ];
            let c = [];
            let p = [
                null
            ];
            let n = [];
            const table = this.table;
            let w = "";
            let I = 0;
            let $ = 0;
            const L = 2;
            const A = 1;
            const C = n.slice.call(arguments, 1);
            const b = Object.create(this.lexer);
            const S = {
                yy: {}
            };
            for(const P in this.yy){
                if (Object.prototype.hasOwnProperty.call(this.yy, P)) {
                    S.yy[P] = this.yy[P];
                }
            }
            b.setInput(t, S.yy);
            S.yy.lexer = b;
            S.yy.parser = this;
            if (typeof b.yylloc === "undefined") {
                b.yylloc = {};
            }
            let b_yylloc = b.yylloc;
            n.push(b_yylloc);
            const G = b.options && b.options.ranges;
            if (typeof S.yy.parseError === "function") {
                this.parseError = S.yy.parseError;
            } else {
                this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function Y(B) {
                i.length = i.length - 2 * B;
                p.length = p.length - B;
                n.length = n.length - B;
            }
            __1(Y, "popStack");
            function tt() {
                let B;
                B = c.pop() || b.lex() || A;
                if (typeof B !== "number") {
                    if (B instanceof Array) {
                        c = B;
                        B = c.pop();
                    }
                    B = s.symbols_[B] || B;
                }
                return B;
            }
            __1(tt, "lex");
            let M;
            let F;
            let N;
            let q;
            const W = {};
            let U;
            let V;
            let et;
            let expected;
            while(true){
                F = i[i.length - 1];
                if (this.defaultActions[F]) {
                    N = this.defaultActions[F];
                } else {
                    if (M === null || typeof M === "undefined") {
                        M = tt();
                    }
                    N = table[F] && table[F][M];
                }
                if (typeof N === "undefined" || !N.length || !N[0]) {
                    let K = "";
                    expected = [];
                    for(U in table[F]){
                        if (this.terminals_[U] && U > L) {
                            expected.push(`'${this.terminals_[U]}'`);
                        }
                    }
                    if (b.showPosition) {
                        K = `Parse error on line ${I + 1}${`:
`}${b.showPosition()}${`
Expecting `}${expected.join(", ")}, got '${this.terminals_[M] || M}'`;
                    } else {
                        K = `Parse error on line ${I + 1}: Unexpected ${M == A ? "end of input" : `'${this.terminals_[M] || M}'`}`;
                    }
                    this.parseError(K, {
                        text: b.match,
                        token: this.terminals_[M] || M,
                        line: b.yylineno,
                        loc: b_yylloc,
                        expected
                    });
                }
                if (N[0] instanceof Array && N.length > 1) {
                    throw new Error(`Parse Error: multiple actions possible at state: ${F}, token: ${M}`);
                }
                switch(N[0]){
                    case 1:
                        i.push(M);
                        p.push(b.yytext);
                        n.push(b.yylloc);
                        i.push(N[1]);
                        M = null;
                        $ = b.yyleng;
                        w = b.yytext;
                        I = b.yylineno;
                        b_yylloc = b.yylloc;
                        break;
                    case 2:
                        V = this.productions_[N[1]][1];
                        W.$ = p[p.length - V];
                        W._$ = {
                            first_line: n[n.length - (V || 1)].first_line,
                            last_line: n[n.length - 1].last_line,
                            first_column: n[n.length - (V || 1)].first_column,
                            last_column: n[n.length - 1].last_column
                        };
                        if (G) {
                            W._$.range = [
                                n[n.length - (V || 1)].range[0],
                                n[n.length - 1].range[1]
                            ];
                        }
                        q = this.performAction.apply(W, [
                            w,
                            $,
                            I,
                            S.yy,
                            N[1],
                            p,
                            n
                        ].concat(C));
                        if (typeof q !== "undefined") {
                            return q;
                        }
                        if (V) {
                            i = i.slice(0, -1 * V * 2);
                            p = p.slice(0, -1 * V);
                            n = n.slice(0, -1 * V);
                        }
                        i.push(this.productions_[N[1]][0]);
                        p.push(W.$);
                        n.push(W._$);
                        et = table[i[i.length - 2]][i[i.length - 1]];
                        i.push(et);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }, "parse")
    };
    const O = (()=>{
        const T = {
            EOF: 1,
            parseError: __1(function(s, i) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(s, i);
                } else {
                    throw new Error(s);
                }
            }, "parseError"),
            setInput: __1(function(t, s) {
                this.yy = s || this.yy || {};
                this._input = t;
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
                const t = this._input[0];
                this.yytext += t;
                this.yyleng++;
                this.offset++;
                this.match += t;
                this.matched += t;
                const s = t.match(/(?:\r\n?|\n).*/g);
                s ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++;
                this.options.ranges && this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return t;
            }, "input"),
            unput: __1(function(t) {
                const t_length = t.length;
                const i = t.split(/(?:\r\n?|\n)/g);
                this._input = t + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - t_length);
                this.offset -= t_length;
                const c = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (i.length - 1) {
                    this.yylineno -= i.length - 1;
                }
                const range = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: i ? (i.length === c.length ? this.yylloc.first_column : 0) + c[c.length - i.length].length - i[0].length : this.yylloc.first_column - t_length
                };
                if (this.options.ranges) {
                    this.yylloc.range = [
                        range[0],
                        range[0] + this.yyleng - t_length
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
            less: __1(function(t) {
                this.unput(this.match.slice(t));
            }, "less"),
            pastInput: __1(function() {
                const t = this.matched.substr(0, this.matched.length - this.match.length);
                return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
            }, "pastInput"),
            upcomingInput: __1(function() {
                let match = this.match;
                if (match.length < 20) {
                    match += this._input.substr(0, 20 - match.length);
                }
                return (match.substr(0, 20) + (match.length > 20 ? "..." : "")).replace(/\n/g, "");
            }, "upcomingInput"),
            showPosition: __1(function() {
                const t = this.pastInput();
                const s = new Array(t.length + 1).join("-");
                return `${t + this.upcomingInput() + `
` + s}^`;
            }, "showPosition"),
            test_match: __1(function(t, s) {
                let i;
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
                c = t[0].match(/(?:\r\n?|\n).*/g);
                if (c) {
                    this.yylineno += c.length;
                }
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: c ? c[c.length - 1].length - c[c.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
                };
                this.yytext += t[0];
                this.match += t[0];
                this.matches = t;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) {
                    this.yylloc.range = [
                        this.offset,
                        this.offset += this.yyleng
                    ];
                }
                this._more = false;
                this._backtrack = false;
                this._input = this._input.slice(t[0].length);
                this.matched += t[0];
                i = this.performAction.call(this, this.yy, this, s, this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) {
                    this.done = false;
                }
                if (i) {
                    return i;
                }
                if (this._backtrack) {
                    for(const n in p){
                        this[n] = p[n];
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
                let t;
                let s;
                let i;
                let c;
                if (!this._more) {
                    this.yytext = "";
                    this.match = "";
                }
                for(var p = this._currentRules(), n = 0; n < p.length; n++){
                    i = this._input.match(this.rules[p[n]]);
                    if (i && (!s || i[0].length > s[0].length)) {
                        s = i;
                        c = n;
                        if (this.options.backtrack_lexer) {
                            t = this.test_match(i, p[n]);
                            if (t !== false) {
                                return t;
                            }
                            if (this._backtrack) {
                                s = false;
                                continue;
                            } else {
                                return false;
                            }
                        } else if (!this.options.flex) {
                            break;
                        }
                    }
                }
                if (s) {
                    t = this.test_match(s, p[c]);
                    if (t !== false) {
                        return t;
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
                const s = this.next();
                return s || this.lex();
            }, "lex"),
            begin: __1(function(s) {
                this.conditionStack.push(s);
            }, "begin"),
            popState: __1(function() {
                const s = this.conditionStack.length - 1;
                if (s > 0) {
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
            topState: __1(function(s) {
                s = this.conditionStack.length - 1 - Math.abs(s || 0);
                if (s >= 0) {
                    return this.conditionStack[s];
                }
                return "INITIAL";
            }, "topState"),
            pushState: __1(function(s) {
                this.begin(s);
            }, "pushState"),
            stateStackSize: __1(function() {
                return this.conditionStack.length;
            }, "stateStackSize"),
            options: {
                "case-insensitive": true
            },
            performAction: __1((s, i, c, p)=>{
                switch(c){
                    case 0:
                        return 6;
                    case 1:
                        return 8;
                    case 2:
                        return 8;
                    case 3:
                        return 6;
                    case 4:
                        return 7;
                    case 5:
                        return 13;
                    case 6:
                        return 14;
                    case 7:
                        return 11;
                }
            }, "anonymous"),
            rules: [
                /^(?:\s*%%.*)/i,
                /^(?:ishikawa-beta\b)/i,
                /^(?:ishikawa\b)/i,
                /^(?:[\s]+[\n])/i,
                /^(?:[\n]+)/i,
                /^(?:[\s]+)/i,
                /^(?:[^\n]+)/i,
                /^(?:$)/i
            ],
            conditions: {
                INITIAL: {
                    rules: [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7
                    ],
                    inclusive: true
                }
            }
        };
        return T;
    })();
    D.lexer = O;
    function E() {
        this.yy = {};
    }
    __1(E, "Parser");
    E.prototype = D;
    D.Parser = E;
    return new E;
})();
J.parser = J;
const parser = J;
const H = class {
    constructor(){
        this.stack = [];
        this.clear = this.clear.bind(this);
        this.addNode = this.addNode.bind(this);
        this.getRoot = this.getRoot.bind(this);
    }
    clear() {
        this.root = undefined;
        this.stack = [];
        this.baseLevel = undefined;
        q();
    }
    getRoot() {
        return this.root;
    }
    addNode(h, r) {
        const text = k.sanitizeText(r, c_1());
        if (!this.root) {
            this.root = {
                text,
                children: []
            };
            this.stack = [
                {
                    level: 0,
                    node: this.root
                }
            ];
            o(text);
            return;
        }
        this.baseLevel ??= h;
        let level = h - this.baseLevel + 1;
        for(level <= 0 && (level = 1); this.stack.length > 1 && this.stack[this.stack.length - 1].level >= level;){
            this.stack.pop();
        }
        const node = this.stack[this.stack.length - 1].node;
        const node_1 = {
            text,
            children: []
        };
        node.children.push(node_1);
        this.stack.push({
            level,
            node: node_1
        });
    }
    getAccTitle() {
        return a();
    }
    setAccTitle(h) {
        b(h);
    }
    getAccDescription() {
        return g();
    }
    setAccDescription(h) {
        s(h);
    }
    getDiagramTitle() {
        return p();
    }
    setDiagramTitle(h) {
        o(h);
    }
};
__1(H, "IshikawaDB");
const vt = H;
const St = 14;
const j = 250;
const $t = 30;
const Et = 60;
const At = 5;
const ht = 82 * Math.PI / 180;
const st = Math.cos(ht);
const nt = Math.sin(ht);
const at = __1((e, h, r)=>{
    const a = e.node().getBBox();
    const l = a.width + h * 2;
    const y = a.height + h * 2;
    e_1(e, y, l, r);
    e.attr("viewBox", `${a.x - h} ${a.y - h} ${l} ${y}`);
}, "applyPaddedViewBox");
const draw = __1((e, h, r, a)=>{
    const y = a.db.getRoot();
    if (!y) {
        return;
    }
    const f = c_1();
    const { look, handDrawnSeed, themeVariables } = f;
    const k = a1(f.fontSize)[0] ?? St;
    const g = look === "handDrawn";
    const _ = y.children ?? [];
    const x = f.ishikawa?.diagramPadding ?? 20;
    const D = f.ishikawa?.useMaxWidth ?? false;
    const O = F(h);
    const E = O.append("g").attr("class", "ishikawa");
    const roughSvg = g ? al.svg(O.node()) : undefined;
    const t = roughSvg ? {
        roughSvg,
        seed: handDrawnSeed ?? 0,
        lineColor: themeVariables?.lineColor ?? "#333",
        fillColor: themeVariables?.mainBkg ?? "#fff"
    } : undefined;
    const s = `ishikawa-arrow-${h}`;
    if (!g) {
        E.append("defs").append("marker").attr("id", s).attr("viewBox", "0 0 10 10").attr("refX", 0).attr("refY", 5).attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", "auto").append("path").attr("d", "M 10 0 L 0 5 L 10 10 Z").attr("class", "ishikawa-arrow");
    }
    let i = 0;
    let c = j;
    const p = g ? undefined : z(E, i, c, i, c, "ishikawa-spine");
    Lt(E, i, c, y.text, k, t);
    if (!_.length) {
        if (g) {
            z(E, i, c, i, c, "ishikawa-spine", t);
        }
        at(O, x, D);
        return;
    }
    i -= 20;
    const n = _.filter((S, P)=>P % 2 === 0);
    const v = _.filter((S, P)=>P % 2 === 1);
    const w = rt(n);
    const I = rt(v);
    const $ = w.total + I.total;
    let L = j;
    let A = j;
    if ($ > 0) {
        const S = j * 2;
        const P = j * 0.3;
        L = Math.max(P, S * (w.total / $));
        A = Math.max(P, S * (I.total / $));
    }
    const C = k * 2;
    L = Math.max(L, w.max * C);
    A = Math.max(A, I.max * C);
    c = Math.max(L, j);
    if (p) {
        p.attr("y1", c).attr("y2", c);
    }
    E.select(".ishikawa-head-group").attr("transform", `translate(0,${c})`);
    const b = Math.ceil(_.length / 2);
    for(let S = 0; S < b; S++){
        const P = E.append("g").attr("class", "ishikawa-pair");
        for (const [R, G, Y] of [
            [
                _[S * 2],
                -1,
                L
            ],
            [
                _[S * 2 + 1],
                1,
                A
            ]
        ]){
            if (R) {
                Pt(P, R, i, c, G, Y, k, t);
            }
        }
        i = P.selectAll("text").nodes().reduce((acc, item)=>Math.min(acc, item.getBBox().x), Infinity);
    }
    if (g) {
        z(E, i, c, 0, c, "ishikawa-spine", t);
    } else {
        p.attr("x1", i);
        const S = `url(#${s})`;
        E.selectAll("line.ishikawa-branch, line.ishikawa-sub-branch").attr("marker-start", S);
    }
    at(O, x, D);
}, "draw");
var rt = __1((e)=>{
    const h = __1((r)=>r.children.reduce((acc, child)=>acc + 1 + h(child), 0), "countDescendants");
    return e.reduce((acc, item)=>{
        const l = h(item);
        acc.total += l;
        acc.max = Math.max(acc.max, l);
        return acc;
    }, {
        total: 0,
        max: 0
    });
}, "sideStats");
var Lt = __1((e, h, r, a, l, y)=>{
    const f = Math.max(6, Math.floor(110 / (l * 0.6)));
    const d = e.append("g").attr("class", "ishikawa-head-group").attr("transform", `translate(${h},${r})`);
    const m = X(d, ct(a, f), 0, 0, "ishikawa-head-label", "start", l);
    const u = m.node().getBBox();
    const k = Math.max(60, u.width + 6);
    const g = Math.max(40, u.height * 2 + 40);
    const _ = `M 0 ${-g / 2} L 0 ${g / 2} Q ${k * 2.4} 0 0 ${-g / 2} Z`;
    if (y) {
        const x = y.roughSvg.path(_, {
            roughness: 1.5,
            seed: y.seed,
            fill: y.fillColor,
            fillStyle: "hachure",
            fillWeight: 2.5,
            hachureGap: 5,
            stroke: y.lineColor,
            strokeWidth: 2
        });
        d.insert(()=>x, ":first-child").attr("class", "ishikawa-head");
    } else {
        d.insert("path", ":first-child").attr("class", "ishikawa-head").attr("d", _);
    }
    m.attr("transform", `translate(${(k - u.width) / 2 - u.x + 3},${-u.y - u.height / 2})`);
}, "drawHead");
const Tt = __1((e, h)=>{
    const entries = [];
    const yOrder = [];
    const l = __1((y, parentIndex, depth)=>{
        const m = h === -1 ? [
            ...y
        ].reverse() : y;
        for (const u of m){
            const k = entries.length;
            const g = u.children ?? [];
            entries.push({
                depth,
                text: ct(u.text, 15),
                parentIndex,
                childCount: g.length
            });
            if (depth % 2 === 0) {
                yOrder.push(k);
                if (g.length) {
                    l(g, k, depth + 1);
                }
            } else {
                if (g.length) {
                    l(g, k, depth + 1);
                }
                yOrder.push(k);
            }
        }
    }, "walk");
    l(e, -1, 2);
    return {
        entries,
        yOrder
    };
}, "flattenTree");
const Mt = __1((e, h, r, a, l, y, f)=>{
    const d = e.append("g").attr("class", "ishikawa-label-group");
    const u = X(d, h, r, a + 11 * l, "ishikawa-label cause", "middle", y).node().getBBox();
    if (f) {
        const k = f.roughSvg.rectangle(u.x - 20, u.y - 2, u.width + 40, u.height + 4, {
            roughness: 1.5,
            seed: f.seed,
            fill: f.fillColor,
            fillStyle: "hachure",
            fillWeight: 2.5,
            hachureGap: 5,
            stroke: f.lineColor,
            strokeWidth: 2
        });
        d.insert(()=>k, ":first-child").attr("class", "ishikawa-label-box");
    } else {
        d.insert("rect", ":first-child").attr("class", "ishikawa-label-box").attr("x", u.x - 20).attr("y", u.y - 2).attr("width", u.width + 40).attr("height", u.height + 4);
    }
}, "drawCauseLabel");
const Q = __1((e, h, r, a, l, y)=>{
    const f = Math.sqrt(a * a + l * l);
    if (f === 0) {
        return;
    }
    const d = a / f;
    const m = l / f;
    const u = 6;
    const k = -m * u;
    const g = d * u;
    const _ = h;
    const x = r;
    const D = `M ${_} ${x} L ${_ - d * u * 2 + k} ${x - m * u * 2 + g} L ${_ - d * u * 2 - k} ${x - m * u * 2 - g} Z`;
    const O = y.roughSvg.path(D, {
        roughness: 1,
        seed: y.seed,
        fill: y.lineColor,
        fillStyle: "solid",
        stroke: y.lineColor,
        strokeWidth: 1
    });
    e.append(()=>O);
}, "drawArrowMarker");
var Pt = __1((e, h, r, a, l, y, f, d)=>{
    const m = h.children ?? [];
    const u = y * (m.length ? 1 : 0.2);
    const k = -st * u;
    const g = nt * u * l;
    const _ = r + k;
    const x = a + g;
    z(e, r, a, _, x, "ishikawa-branch", d);
    if (d) {
        Q(e, r, a, r - _, a - x, d);
    }
    Mt(e, h.text, _, x, l, f, d);
    if (!m.length) {
        return;
    }
    const { entries, yOrder } = Tt(m, l);
    const entries_length = entries.length;
    const T = new Array(entries_length);
    for (const [p, n] of yOrder.entries()){
        T[n] = a + g * ((p + 1) / (entries_length + 1));
    }
    const t = new Map;
    t.set(-1, {
        x0: r,
        y0: a,
        x1: _,
        y1: x,
        childCount: m.length,
        childrenDrawn: 0
    });
    const s = -st;
    const i = nt * l;
    const c = l < 0 ? "ishikawa-label up" : "ishikawa-label down";
    for (const [p, n] of entries.entries()){
        const v = T[p];
        const w = t.get(n.parentIndex);
        const I = e.append("g").attr("class", "ishikawa-sub-group");
        let $ = 0;
        let L = 0;
        let A = 0;
        if (n.depth % 2 === 0) {
            const C = w.y1 - w.y0;
            $ = lt(w.x0, w.x1, C ? (v - w.y0) / C : 0.5);
            L = v;
            A = $ - (n.childCount > 0 ? Et + n.childCount * At : $t);
            z(I, $, v, A, v, "ishikawa-sub-branch", d);
            if (d) {
                Q(I, $, v, 1, 0, d);
            }
            X(I, n.text, A, v, "ishikawa-label align", "end", f);
        } else {
            const C = w.childrenDrawn++;
            $ = lt(w.x0, w.x1, (w.childCount - C) / (w.childCount + 1));
            L = w.y0;
            A = $ + s * ((v - L) / i);
            z(I, $, L, A, v, "ishikawa-sub-branch", d);
            if (d) {
                Q(I, $, L, $ - A, L - v, d);
            }
            X(I, n.text, A, v, c, "end", f);
        }
        if (n.childCount > 0) {
            t.set(p, {
                x0: $,
                y0: L,
                x1: A,
                y1: v,
                childCount: n.childCount,
                childrenDrawn: 0
            });
        }
    }
}, "drawBranch");
const Bt = __1((e)=>e.split(/<br\s*\/?>|\n/), "splitLines");
var ct = __1((e, h)=>{
    if (e.length <= h) {
        return e;
    }
    const r = [];
    for (const a of e.split(/\s+/)){
        const l = r.length - 1;
        if (l >= 0 && r[l].length + 1 + a.length <= h) {
            r[l] += ` ${a}`;
        } else {
            r.push(a);
        }
    }
    return r.join(`
`);
}, "wrapText");
var X = __1((e, h, r, a, l, y, f)=>{
    const d = Bt(h);
    const m = f * 1.05;
    const u = e.append("text").attr("class", l).attr("text-anchor", y).attr("x", r).attr("y", a - (d.length - 1) * m / 2);
    for (const [k, g] of d.entries()){
        u.append("tspan").attr("x", r).attr("dy", k === 0 ? 0 : m).text(g);
    }
    return u;
}, "drawMultilineText");
var lt = __1((e, h, r)=>e + (h - e) * r, "lerp");
var z = __1((e, h, r, a, l, y, f)=>{
    if (f) {
        const d = f.roughSvg.line(h, r, a, l, {
            roughness: 1.5,
            seed: f.seed,
            stroke: f.lineColor,
            strokeWidth: 2
        });
        e.append(()=>d).attr("class", y);
        return;
    }
    return e.append("line").attr("class", y).attr("x1", h).attr("y1", r).attr("x2", a).attr("y2", l);
}, "drawLine");
const renderer = {
    draw
};
const Dt = __1((e)=>`
.ishikawa .ishikawa-spine,
.ishikawa .ishikawa-branch,
.ishikawa .ishikawa-sub-branch {
  stroke: ${e.lineColor};
  stroke-width: 2;
  fill: none;
}

.ishikawa .ishikawa-sub-branch {
  stroke-width: 1;
}

.ishikawa .ishikawa-arrow {
  fill: ${e.lineColor};
}

.ishikawa .ishikawa-head {
  fill: ${e.mainBkg};
  stroke: ${e.lineColor};
  stroke-width: 2;
}

.ishikawa .ishikawa-label-box {
  fill: ${e.mainBkg};
  stroke: ${e.lineColor};
  stroke-width: 2;
}

.ishikawa text {
  font-family: ${e.fontFamily};
  font-size: ${e.fontSize};
  fill: ${e.textColor};
}

.ishikawa .ishikawa-head-label {
  font-weight: 600;
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: 14px;
}

.ishikawa .ishikawa-label {
  text-anchor: end;
}

.ishikawa .ishikawa-label.cause {
  text-anchor: middle;
  dominant-baseline: middle;
}

.ishikawa .ishikawa-label.align {
  text-anchor: end;
  dominant-baseline: middle;
}

.ishikawa .ishikawa-label.up {
  dominant-baseline: baseline;
}

.ishikawa .ishikawa-label.down {
  dominant-baseline: hanging;
}
`, "getStyles");
const styles = Dt;
export const diagram = {
    parser,
    get db () {
        return new vt;
    },
    renderer,
    styles
};
