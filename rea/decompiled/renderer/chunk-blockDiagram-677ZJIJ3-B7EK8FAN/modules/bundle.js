import { g } from "./chunk-chunk-5VM5RSS4-CTCaRfNa.js";
import { aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, _ as __1, z as z_1, d as d_1, e as e_1, l as l_1, q, t as t_1, c as c_1, aZ, a7, a8, a3, a_, a$, b0, as, y, k, b1, i as i_1, b2, b3 } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { G } from "./chunk-graph-BvS0Xx32.js";
import { c as c_2 } from "./chunk-channel-Bm516PE5.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "9cd5e8e2-5c59-4cd9-9364-8ae82a73e537";
            e._sentryDebugIdIdentifier = "sentry-dbid-9cd5e8e2-5c59-4cd9-9364-8ae82a73e537";
        }
    } catch (e) {}
})();
function Je(e) {
    return Array.isArray(e);
}
function Qe(e) {
    if (aA(e)) {
        return e;
    }
    const t = aB(e);
    if (!$e(e)) {
        return {};
    }
    if (Je(e)) {
        const s = Array.from(e);
        if (e.length > 0 && typeof e[0] === "string" && Object.hasOwn(e, "index")) {
            s.index = e.index;
            s.input = e.input;
        }
        return s;
    }
    if (aC(e)) {
        const s = e;
        const i = s.constructor;
        return new i(s.buffer, s.byteOffset, s.length);
    }
    if (t === aD) {
        return new ArrayBuffer(e.byteLength);
    }
    if (t === aE) {
        const s = e;
        const { buffer, byteOffset, byteLength } = s;
        const n = new ArrayBuffer(byteLength);
        const l = new Uint8Array(buffer, byteOffset, byteLength);
        new Uint8Array(n).set(l);
        return new DataView(n);
    }
    if (t === aF || t === aG || t === aH) {
        const s = e.constructor;
        const i = new s(e.valueOf());
        if (t === aH) {
            er(i, e);
        } else {
            xt(i, e);
        }
        return i;
    }
    if (t === aI) {
        return new Date(Number(e));
    }
    if (t === aJ) {
        const s = e;
        const i = new RegExp(s.source, s.flags);
        i.lastIndex = s.lastIndex;
        return i;
    }
    if (t === aK) {
        return Object(Symbol.prototype.valueOf.call(e));
    }
    if (t === aL) {
        const s = e;
        const i = new Map;
        s.forEach((c, r)=>{
            i.set(r, c);
        });
        return i;
    }
    if (t === aM) {
        const s = e;
        const i = new Set;
        s.forEach((c)=>{
            i.add(c);
        });
        return i;
    }
    if (t === aN) {
        const s = e;
        const i = {};
        xt(i, s);
        i.length = s.length;
        i[Symbol.iterator] = s[Symbol.iterator];
        return i;
    }
    const a = {};
    rr(a, e);
    xt(a, e);
    tr(a, e);
    return a;
}
function $e(e) {
    switch(aB(e)){
        case aN:
        case aY:
        case aD:
        case aE:
        case aF:
        case aI:
        case aX:
        case aW:
        case aV:
        case aU:
        case aT:
        case aL:
        case aG:
        case aS:
        case aJ:
        case aM:
        case aH:
        case aK:
        case aR:
        case aQ:
        case aP:
        case aO:
            return true;
        default:
            return false;
    }
}
function xt(e, t) {
    for(const a in t){
        if (Object.hasOwn(t, a)) {
            e[a] = t[a];
        }
    }
}
function tr(e, t) {
    const a = Object.getOwnPropertySymbols(t);
    for (const i of a){
        if (Object.prototype.propertyIsEnumerable.call(t, i)) {
            e[i] = t[i];
        }
    }
}
function er(e, t) {
    const length = t.valueOf().length;
    for(const s in t){
        if (Object.hasOwn(t, s) && (Number.isNaN(Number(s)) || Number(s) >= length)) {
            e[s] = t[s];
        }
    }
}
function rr(e, t) {
    const a = Object.getPrototypeOf(t);
    if (a !== null && typeof t.constructor === "function") {
        Object.setPrototypeOf(e, a);
    }
}
const wt = (()=>{
    const e = __1((T, m, p, x)=>{
        p = p || {};
        for(x = T.length; x--; p[T[x]] = m);
        return p;
    }, "o");
    const t = [
        1,
        15
    ];
    const a = [
        1,
        7
    ];
    const s = [
        1,
        13
    ];
    const i = [
        1,
        14
    ];
    const c = [
        1,
        19
    ];
    const r = [
        1,
        16
    ];
    const n = [
        1,
        17
    ];
    const l = [
        1,
        18
    ];
    const g = [
        8,
        30
    ];
    const h = [
        8,
        10,
        21,
        28,
        29,
        30,
        31,
        39,
        43,
        46
    ];
    const d = [
        1,
        23
    ];
    const b = [
        1,
        24
    ];
    const w = [
        8,
        10,
        15,
        16,
        21,
        28,
        29,
        30,
        31,
        39,
        43,
        46
    ];
    const y = [
        8,
        10,
        15,
        16,
        21,
        27,
        28,
        29,
        30,
        31,
        39,
        43,
        46
    ];
    const v = [
        1,
        49
    ];
    const S = {
        trace: __1(()=>{}, "trace"),
        yy: {},
        symbols_: {
            error: 2,
            spaceLines: 3,
            SPACELINE: 4,
            NL: 5,
            separator: 6,
            SPACE: 7,
            EOF: 8,
            start: 9,
            BLOCK_DIAGRAM_KEY: 10,
            document: 11,
            stop: 12,
            statement: 13,
            link: 14,
            LINK: 15,
            START_LINK: 16,
            LINK_LABEL: 17,
            STR: 18,
            nodeStatement: 19,
            columnsStatement: 20,
            SPACE_BLOCK: 21,
            blockStatement: 22,
            classDefStatement: 23,
            cssClassStatement: 24,
            styleStatement: 25,
            node: 26,
            SIZE: 27,
            COLUMNS: 28,
            "id-block": 29,
            end: 30,
            NODE_ID: 31,
            nodeShapeNLabel: 32,
            dirList: 33,
            DIR: 34,
            NODE_DSTART: 35,
            NODE_DEND: 36,
            BLOCK_ARROW_START: 37,
            BLOCK_ARROW_END: 38,
            classDef: 39,
            CLASSDEF_ID: 40,
            CLASSDEF_STYLEOPTS: 41,
            DEFAULT: 42,
            class: 43,
            CLASSENTITY_IDS: 44,
            STYLECLASS: 45,
            style: 46,
            STYLE_ENTITY_IDS: 47,
            STYLE_DEFINITION_DATA: 48,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            4: "SPACELINE",
            5: "NL",
            7: "SPACE",
            8: "EOF",
            10: "BLOCK_DIAGRAM_KEY",
            15: "LINK",
            16: "START_LINK",
            17: "LINK_LABEL",
            18: "STR",
            21: "SPACE_BLOCK",
            27: "SIZE",
            28: "COLUMNS",
            29: "id-block",
            30: "end",
            31: "NODE_ID",
            34: "DIR",
            35: "NODE_DSTART",
            36: "NODE_DEND",
            37: "BLOCK_ARROW_START",
            38: "BLOCK_ARROW_END",
            39: "classDef",
            40: "CLASSDEF_ID",
            41: "CLASSDEF_STYLEOPTS",
            42: "DEFAULT",
            43: "class",
            44: "CLASSENTITY_IDS",
            45: "STYLECLASS",
            46: "style",
            47: "STYLE_ENTITY_IDS",
            48: "STYLE_DEFINITION_DATA"
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
                3,
                2
            ],
            [
                6,
                1
            ],
            [
                6,
                1
            ],
            [
                6,
                1
            ],
            [
                9,
                3
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
                2
            ],
            [
                12,
                2
            ],
            [
                11,
                1
            ],
            [
                11,
                2
            ],
            [
                14,
                1
            ],
            [
                14,
                4
            ],
            [
                13,
                1
            ],
            [
                13,
                1
            ],
            [
                13,
                1
            ],
            [
                13,
                1
            ],
            [
                13,
                1
            ],
            [
                13,
                1
            ],
            [
                13,
                1
            ],
            [
                19,
                3
            ],
            [
                19,
                2
            ],
            [
                19,
                1
            ],
            [
                20,
                1
            ],
            [
                22,
                4
            ],
            [
                22,
                3
            ],
            [
                26,
                1
            ],
            [
                26,
                2
            ],
            [
                33,
                1
            ],
            [
                33,
                2
            ],
            [
                32,
                3
            ],
            [
                32,
                4
            ],
            [
                23,
                3
            ],
            [
                23,
                3
            ],
            [
                24,
                3
            ],
            [
                25,
                3
            ]
        ],
        performAction: __1(function(m, p, x, L, E, o, F) {
            const f = o.length - 1;
            switch(E){
                case 4:
                    L.getLogger().debug("Rule: separator (NL) ");
                    break;
                case 5:
                    L.getLogger().debug("Rule: separator (Space) ");
                    break;
                case 6:
                    L.getLogger().debug("Rule: separator (EOF) ");
                    break;
                case 7:
                    L.getLogger().debug("Rule: hierarchy: ", o[f - 1]);
                    L.setHierarchy(o[f - 1]);
                    break;
                case 8:
                    L.getLogger().debug("Stop NL ");
                    break;
                case 9:
                    L.getLogger().debug("Stop EOF ");
                    break;
                case 10:
                    L.getLogger().debug("Stop NL2 ");
                    break;
                case 11:
                    L.getLogger().debug("Stop EOF2 ");
                    break;
                case 12:
                    L.getLogger().debug("Rule: statement: ", o[f]);
                    if (typeof o[f].length === "number") {
                        this.$ = o[f];
                    } else {
                        this.$ = [
                            o[f]
                        ];
                    }
                    break;
                case 13:
                    L.getLogger().debug("Rule: statement #2: ", o[f - 1]);
                    this.$ = [
                        o[f - 1]
                    ].concat(o[f]);
                    break;
                case 14:
                    L.getLogger().debug("Rule: link: ", o[f], m);
                    this.$ = {
                        edgeTypeStr: o[f],
                        label: ""
                    };
                    break;
                case 15:
                    L.getLogger().debug("Rule: LABEL link: ", o[f - 3], o[f - 1], o[f]);
                    this.$ = {
                        edgeTypeStr: o[f],
                        label: o[f - 1]
                    };
                    break;
                case 18:
                    const C = parseInt(o[f]);
                    const j = L.generateId();
                    this.$ = {
                        id: j,
                        type: "space",
                        label: "",
                        width: C,
                        children: []
                    };
                    break;
                case 23:
                    L.getLogger().debug("Rule: (nodeStatement link node) ", o[f - 2], o[f - 1], o[f], " typestr: ", o[f - 1].edgeTypeStr);
                    const arrowTypeEnd = L.edgeStrToEdgeData(o[f - 1].edgeTypeStr);
                    const arrowTypeStart = L.edgeStrToEdgeStartData(o[f - 1].edgeTypeStr);
                    const thickness = L.edgeStrToThickness(o[f - 1].edgeTypeStr);
                    const pattern = L.edgeStrToPattern(o[f - 1].edgeTypeStr);
                    this.$ = [
                        {
                            id: o[f - 2].id,
                            label: o[f - 2].label,
                            type: o[f - 2].type,
                            directions: o[f - 2].directions
                        },
                        {
                            id: `${o[f - 2].id}-${o[f].id}`,
                            start: o[f - 2].id,
                            end: o[f].id,
                            label: o[f - 1].label,
                            type: "edge",
                            thickness,
                            pattern,
                            directions: o[f].directions,
                            arrowTypeEnd,
                            arrowTypeStart
                        },
                        {
                            id: o[f].id,
                            label: o[f].label,
                            type: L.typeStr2Type(o[f].typeStr),
                            directions: o[f].directions
                        }
                    ];
                    break;
                case 24:
                    L.getLogger().debug("Rule: nodeStatement (abc88 node size) ", o[f - 1], o[f]);
                    this.$ = {
                        id: o[f - 1].id,
                        label: o[f - 1].label,
                        type: L.typeStr2Type(o[f - 1].typeStr),
                        directions: o[f - 1].directions,
                        widthInColumns: parseInt(o[f], 10)
                    };
                    break;
                case 25:
                    L.getLogger().debug("Rule: nodeStatement (node) ", o[f]);
                    this.$ = {
                        id: o[f].id,
                        label: o[f].label,
                        type: L.typeStr2Type(o[f].typeStr),
                        directions: o[f].directions,
                        widthInColumns: 1
                    };
                    break;
                case 26:
                    L.getLogger().debug("APA123", this ? this : "na");
                    L.getLogger().debug("COLUMNS: ", o[f]);
                    this.$ = {
                        type: "column-setting",
                        columns: o[f] === "auto" ? -1 : parseInt(o[f])
                    };
                    break;
                case 27:
                    L.getLogger().debug("Rule: id-block statement : ", o[f - 2], o[f - 1]);
                    L.generateId();
                    this.$ = {
                        ...o[f - 2],
                        type: "composite",
                        children: o[f - 1]
                    };
                    break;
                case 28:
                    L.getLogger().debug("Rule: blockStatement : ", o[f - 2], o[f - 1], o[f]);
                    const G = L.generateId();
                    this.$ = {
                        id: G,
                        type: "composite",
                        label: "",
                        children: o[f - 1]
                    };
                    break;
                case 29:
                    L.getLogger().debug("Rule: node (NODE_ID separator): ", o[f]);
                    this.$ = {
                        id: o[f]
                    };
                    break;
                case 30:
                    L.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ", o[f - 1], o[f]);
                    this.$ = {
                        id: o[f - 1],
                        label: o[f].label,
                        typeStr: o[f].typeStr,
                        directions: o[f].directions
                    };
                    break;
                case 31:
                    L.getLogger().debug("Rule: dirList: ", o[f]);
                    this.$ = [
                        o[f]
                    ];
                    break;
                case 32:
                    L.getLogger().debug("Rule: dirList: ", o[f - 1], o[f]);
                    this.$ = [
                        o[f - 1]
                    ].concat(o[f]);
                    break;
                case 33:
                    L.getLogger().debug("Rule: nodeShapeNLabel: ", o[f - 2], o[f - 1], o[f]);
                    this.$ = {
                        typeStr: o[f - 2] + o[f],
                        label: o[f - 1]
                    };
                    break;
                case 34:
                    L.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ", o[f - 3], o[f - 2], " #3:", o[f - 1], o[f]);
                    this.$ = {
                        typeStr: o[f - 3] + o[f],
                        label: o[f - 2],
                        directions: o[f - 1]
                    };
                    break;
                case 35:
                case 36:
                    this.$ = {
                        type: "classDef",
                        id: o[f - 1].trim(),
                        css: o[f].trim()
                    };
                    break;
                case 37:
                    this.$ = {
                        type: "applyClass",
                        id: o[f - 1].trim(),
                        styleClass: o[f].trim()
                    };
                    break;
                case 38:
                    this.$ = {
                        type: "applyStyles",
                        id: o[f - 1].trim(),
                        stylesStr: o[f].trim()
                    };
                    break;
            }
        }, "anonymous"),
        table: [
            {
                9: 1,
                10: [
                    1,
                    2
                ]
            },
            {
                1: [
                    3
                ]
            },
            {
                10: t,
                11: 3,
                13: 4,
                19: 5,
                20: 6,
                21: a,
                22: 8,
                23: 9,
                24: 10,
                25: 11,
                26: 12,
                28: s,
                29: i,
                31: c,
                39: r,
                43: n,
                46: l
            },
            {
                8: [
                    1,
                    20
                ]
            },
            e(g, [
                2,
                12
            ], {
                13: 4,
                19: 5,
                20: 6,
                22: 8,
                23: 9,
                24: 10,
                25: 11,
                26: 12,
                11: 21,
                10: t,
                21: a,
                28: s,
                29: i,
                31: c,
                39: r,
                43: n,
                46: l
            }),
            e(h, [
                2,
                16
            ], {
                14: 22,
                15: d,
                16: b
            }),
            e(h, [
                2,
                17
            ]),
            e(h, [
                2,
                18
            ]),
            e(h, [
                2,
                19
            ]),
            e(h, [
                2,
                20
            ]),
            e(h, [
                2,
                21
            ]),
            e(h, [
                2,
                22
            ]),
            e(w, [
                2,
                25
            ], {
                27: [
                    1,
                    25
                ]
            }),
            e(h, [
                2,
                26
            ]),
            {
                19: 26,
                26: 12,
                31: c
            },
            {
                10: t,
                11: 27,
                13: 4,
                19: 5,
                20: 6,
                21: a,
                22: 8,
                23: 9,
                24: 10,
                25: 11,
                26: 12,
                28: s,
                29: i,
                31: c,
                39: r,
                43: n,
                46: l
            },
            {
                40: [
                    1,
                    28
                ],
                42: [
                    1,
                    29
                ]
            },
            {
                44: [
                    1,
                    30
                ]
            },
            {
                47: [
                    1,
                    31
                ]
            },
            e(y, [
                2,
                29
            ], {
                32: 32,
                35: [
                    1,
                    33
                ],
                37: [
                    1,
                    34
                ]
            }),
            {
                1: [
                    2,
                    7
                ]
            },
            e(g, [
                2,
                13
            ]),
            {
                26: 35,
                31: c
            },
            {
                31: [
                    2,
                    14
                ]
            },
            {
                17: [
                    1,
                    36
                ]
            },
            e(w, [
                2,
                24
            ]),
            {
                10: t,
                11: 37,
                13: 4,
                14: 22,
                15: d,
                16: b,
                19: 5,
                20: 6,
                21: a,
                22: 8,
                23: 9,
                24: 10,
                25: 11,
                26: 12,
                28: s,
                29: i,
                31: c,
                39: r,
                43: n,
                46: l
            },
            {
                30: [
                    1,
                    38
                ]
            },
            {
                41: [
                    1,
                    39
                ]
            },
            {
                41: [
                    1,
                    40
                ]
            },
            {
                45: [
                    1,
                    41
                ]
            },
            {
                48: [
                    1,
                    42
                ]
            },
            e(y, [
                2,
                30
            ]),
            {
                18: [
                    1,
                    43
                ]
            },
            {
                18: [
                    1,
                    44
                ]
            },
            e(w, [
                2,
                23
            ]),
            {
                18: [
                    1,
                    45
                ]
            },
            {
                30: [
                    1,
                    46
                ]
            },
            e(h, [
                2,
                28
            ]),
            e(h, [
                2,
                35
            ]),
            e(h, [
                2,
                36
            ]),
            e(h, [
                2,
                37
            ]),
            e(h, [
                2,
                38
            ]),
            {
                36: [
                    1,
                    47
                ]
            },
            {
                33: 48,
                34: v
            },
            {
                15: [
                    1,
                    50
                ]
            },
            e(h, [
                2,
                27
            ]),
            e(y, [
                2,
                33
            ]),
            {
                38: [
                    1,
                    51
                ]
            },
            {
                33: 52,
                34: v,
                38: [
                    2,
                    31
                ]
            },
            {
                31: [
                    2,
                    15
                ]
            },
            e(y, [
                2,
                34
            ]),
            {
                38: [
                    2,
                    32
                ]
            }
        ],
        defaultActions: {
            20: [
                2,
                7
            ],
            23: [
                2,
                14
            ],
            50: [
                2,
                15
            ],
            52: [
                2,
                32
            ]
        },
        parseError: __1(function(m, p) {
            if (p.recoverable) {
                this.trace(m);
            } else {
                const x = new Error(m);
                x.hash = p;
                throw x;
            }
        }, "parseError"),
        parse: __1(function(m) {
            const p = this;
            let x = [
                0
            ];
            let L = [];
            let E = [
                null
            ];
            let o = [];
            const table = this.table;
            let f = "";
            let C = 0;
            let j = 0;
            const V = 2;
            const at = 1;
            const gt = o.slice.call(arguments, 1);
            const O = Object.create(this.lexer);
            const G = {
                yy: {}
            };
            for(const ut in this.yy){
                if (Object.prototype.hasOwnProperty.call(this.yy, ut)) {
                    G.yy[ut] = this.yy[ut];
                }
            }
            O.setInput(m, G.yy);
            G.yy.lexer = O;
            G.yy.parser = this;
            if (typeof O.yylloc === "undefined") {
                O.yylloc = {};
            }
            let O_yylloc = O.yylloc;
            o.push(O_yylloc);
            const Le = O.options && O.options.ranges;
            if (typeof G.yy.parseError === "function") {
                this.parseError = G.yy.parseError;
            } else {
                this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function ke(W) {
                x.length = x.length - 2 * W;
                E.length = E.length - W;
                o.length = o.length - W;
            }
            __1(ke, "popStack");
            function It() {
                let W;
                W = L.pop() || O.lex() || at;
                if (typeof W !== "number") {
                    if (W instanceof Array) {
                        L = W;
                        W = L.pop();
                    }
                    W = p.symbols_[W] || W;
                }
                return W;
            }
            __1(It, "lex");
            let P;
            let q;
            let H;
            let pt;
            const J = {};
            let st;
            let Z;
            let Ct;
            let expected;
            while(true){
                q = x[x.length - 1];
                if (this.defaultActions[q]) {
                    H = this.defaultActions[q];
                } else {
                    if (P === null || typeof P === "undefined") {
                        P = It();
                    }
                    H = table[q] && table[q][P];
                }
                if (typeof H === "undefined" || !H.length || !H[0]) {
                    let ft = "";
                    expected = [];
                    for(st in table[q]){
                        if (this.terminals_[st] && st > V) {
                            expected.push(`'${this.terminals_[st]}'`);
                        }
                    }
                    if (O.showPosition) {
                        ft = `Parse error on line ${C + 1}${`:
`}${O.showPosition()}${`
Expecting `}${expected.join(", ")}, got '${this.terminals_[P] || P}'`;
                    } else {
                        ft = `Parse error on line ${C + 1}: Unexpected ${P == at ? "end of input" : `'${this.terminals_[P] || P}'`}`;
                    }
                    this.parseError(ft, {
                        text: O.match,
                        token: this.terminals_[P] || P,
                        line: O.yylineno,
                        loc: O_yylloc,
                        expected
                    });
                }
                if (H[0] instanceof Array && H.length > 1) {
                    throw new Error(`Parse Error: multiple actions possible at state: ${q}, token: ${P}`);
                }
                switch(H[0]){
                    case 1:
                        x.push(P);
                        E.push(O.yytext);
                        o.push(O.yylloc);
                        x.push(H[1]);
                        P = null;
                        j = O.yyleng;
                        f = O.yytext;
                        C = O.yylineno;
                        O_yylloc = O.yylloc;
                        break;
                    case 2:
                        Z = this.productions_[H[1]][1];
                        J.$ = E[E.length - Z];
                        J._$ = {
                            first_line: o[o.length - (Z || 1)].first_line,
                            last_line: o[o.length - 1].last_line,
                            first_column: o[o.length - (Z || 1)].first_column,
                            last_column: o[o.length - 1].last_column
                        };
                        if (Le) {
                            J._$.range = [
                                o[o.length - (Z || 1)].range[0],
                                o[o.length - 1].range[1]
                            ];
                        }
                        pt = this.performAction.apply(J, [
                            f,
                            j,
                            C,
                            G.yy,
                            H[1],
                            E,
                            o
                        ].concat(gt));
                        if (typeof pt !== "undefined") {
                            return pt;
                        }
                        if (Z) {
                            x = x.slice(0, -1 * Z * 2);
                            E = E.slice(0, -1 * Z);
                            o = o.slice(0, -1 * Z);
                        }
                        x.push(this.productions_[H[1]][0]);
                        E.push(J.$);
                        o.push(J._$);
                        Ct = table[x[x.length - 2]][x[x.length - 1]];
                        x.push(Ct);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }, "parse")
    };
    const N = (()=>{
        const T = {
            EOF: 1,
            parseError: __1(function(p, x) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(p, x);
                } else {
                    throw new Error(p);
                }
            }, "parseError"),
            setInput: __1(function(m, p) {
                this.yy = p || this.yy || {};
                this._input = m;
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
                const m = this._input[0];
                this.yytext += m;
                this.yyleng++;
                this.offset++;
                this.match += m;
                this.matched += m;
                const p = m.match(/(?:\r\n?|\n).*/g);
                p ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++;
                this.options.ranges && this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return m;
            }, "input"),
            unput: __1(function(m) {
                const m_length = m.length;
                const x = m.split(/(?:\r\n?|\n)/g);
                this._input = m + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - m_length);
                this.offset -= m_length;
                const L = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (x.length - 1) {
                    this.yylineno -= x.length - 1;
                }
                const range = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: x ? (x.length === L.length ? this.yylloc.first_column : 0) + L[L.length - x.length].length - x[0].length : this.yylloc.first_column - m_length
                };
                if (this.options.ranges) {
                    this.yylloc.range = [
                        range[0],
                        range[0] + this.yyleng - m_length
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
            less: __1(function(m) {
                this.unput(this.match.slice(m));
            }, "less"),
            pastInput: __1(function() {
                const m = this.matched.substr(0, this.matched.length - this.match.length);
                return (m.length > 20 ? "..." : "") + m.substr(-20).replace(/\n/g, "");
            }, "pastInput"),
            upcomingInput: __1(function() {
                let match = this.match;
                if (match.length < 20) {
                    match += this._input.substr(0, 20 - match.length);
                }
                return (match.substr(0, 20) + (match.length > 20 ? "..." : "")).replace(/\n/g, "");
            }, "upcomingInput"),
            showPosition: __1(function() {
                const m = this.pastInput();
                const p = new Array(m.length + 1).join("-");
                return `${m + this.upcomingInput() + `
` + p}^`;
            }, "showPosition"),
            test_match: __1(function(m, p) {
                let x;
                let L;
                let E;
                if (this.options.backtrack_lexer) {
                    E = {
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
                        E.yylloc.range = this.yylloc.range.slice(0);
                    }
                }
                L = m[0].match(/(?:\r\n?|\n).*/g);
                if (L) {
                    this.yylineno += L.length;
                }
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: L ? L[L.length - 1].length - L[L.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + m[0].length
                };
                this.yytext += m[0];
                this.match += m[0];
                this.matches = m;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) {
                    this.yylloc.range = [
                        this.offset,
                        this.offset += this.yyleng
                    ];
                }
                this._more = false;
                this._backtrack = false;
                this._input = this._input.slice(m[0].length);
                this.matched += m[0];
                x = this.performAction.call(this, this.yy, this, p, this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) {
                    this.done = false;
                }
                if (x) {
                    return x;
                }
                if (this._backtrack) {
                    for(const o in E){
                        this[o] = E[o];
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
                let m;
                let p;
                let x;
                let L;
                if (!this._more) {
                    this.yytext = "";
                    this.match = "";
                }
                for(var E = this._currentRules(), o = 0; o < E.length; o++){
                    x = this._input.match(this.rules[E[o]]);
                    if (x && (!p || x[0].length > p[0].length)) {
                        p = x;
                        L = o;
                        if (this.options.backtrack_lexer) {
                            m = this.test_match(x, E[o]);
                            if (m !== false) {
                                return m;
                            }
                            if (this._backtrack) {
                                p = false;
                                continue;
                            } else {
                                return false;
                            }
                        } else if (!this.options.flex) {
                            break;
                        }
                    }
                }
                if (p) {
                    m = this.test_match(p, E[L]);
                    if (m !== false) {
                        return m;
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
                const p = this.next();
                return p || this.lex();
            }, "lex"),
            begin: __1(function(p) {
                this.conditionStack.push(p);
            }, "begin"),
            popState: __1(function() {
                const p = this.conditionStack.length - 1;
                if (p > 0) {
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
            topState: __1(function(p) {
                p = this.conditionStack.length - 1 - Math.abs(p || 0);
                if (p >= 0) {
                    return this.conditionStack[p];
                }
                return "INITIAL";
            }, "topState"),
            pushState: __1(function(p) {
                this.begin(p);
            }, "pushState"),
            stateStackSize: __1(function() {
                return this.conditionStack.length;
            }, "stateStackSize"),
            options: {},
            performAction: __1(function(p, x, L, E) {
                switch(L){
                    case 0:
                        p.getLogger().debug("Found block-beta");
                        return 10;
                    case 1:
                        p.getLogger().debug("Found id-block");
                        return 29;
                    case 2:
                        p.getLogger().debug("Found block");
                        return 10;
                    case 3:
                        p.getLogger().debug(".", x.yytext);
                        break;
                    case 4:
                        p.getLogger().debug("_", x.yytext);
                        break;
                    case 5:
                        return 5;
                    case 6:
                        x.yytext = -1;
                        return 28;
                    case 7:
                        x.yytext = x.yytext.replace(/columns\s+/, "");
                        p.getLogger().debug("COLUMNS (LEX)", x.yytext);
                        return 28;
                    case 8:
                        this.pushState("md_string");
                        break;
                    case 9:
                        return "MD_STR";
                    case 10:
                        this.popState();
                        break;
                    case 11:
                        this.pushState("string");
                        break;
                    case 12:
                        p.getLogger().debug("LEX: POPPING STR:", x.yytext);
                        this.popState();
                        break;
                    case 13:
                        p.getLogger().debug("LEX: STR end:", x.yytext);
                        return "STR";
                    case 14:
                        x.yytext = x.yytext.replace(/space\:/, "");
                        p.getLogger().debug("SPACE NUM (LEX)", x.yytext);
                        return 21;
                    case 15:
                        x.yytext = "1";
                        p.getLogger().debug("COLUMNS (LEX)", x.yytext);
                        return 21;
                    case 16:
                        return 42;
                    case 17:
                        return "LINKSTYLE";
                    case 18:
                        return "INTERPOLATE";
                    case 19:
                        this.pushState("CLASSDEF");
                        return 39;
                    case 20:
                        this.popState();
                        this.pushState("CLASSDEFID");
                        return "DEFAULT_CLASSDEF_ID";
                    case 21:
                        this.popState();
                        this.pushState("CLASSDEFID");
                        return 40;
                    case 22:
                        this.popState();
                        return 41;
                    case 23:
                        this.pushState("CLASS");
                        return 43;
                    case 24:
                        this.popState();
                        this.pushState("CLASS_STYLE");
                        return 44;
                    case 25:
                        this.popState();
                        return 45;
                    case 26:
                        this.pushState("STYLE_STMNT");
                        return 46;
                    case 27:
                        this.popState();
                        this.pushState("STYLE_DEFINITION");
                        return 47;
                    case 28:
                        this.popState();
                        return 48;
                    case 29:
                        this.pushState("acc_title");
                        return "acc_title";
                    case 30:
                        this.popState();
                        return "acc_title_value";
                    case 31:
                        this.pushState("acc_descr");
                        return "acc_descr";
                    case 32:
                        this.popState();
                        return "acc_descr_value";
                    case 33:
                        this.pushState("acc_descr_multiline");
                        break;
                    case 34:
                        this.popState();
                        break;
                    case 35:
                        return "acc_descr_multiline_value";
                    case 36:
                        return 30;
                    case 37:
                        this.popState();
                        p.getLogger().debug("Lex: ((");
                        return "NODE_DEND";
                    case 38:
                        this.popState();
                        p.getLogger().debug("Lex: ((");
                        return "NODE_DEND";
                    case 39:
                        this.popState();
                        p.getLogger().debug("Lex: ))");
                        return "NODE_DEND";
                    case 40:
                        this.popState();
                        p.getLogger().debug("Lex: ((");
                        return "NODE_DEND";
                    case 41:
                        this.popState();
                        p.getLogger().debug("Lex: ((");
                        return "NODE_DEND";
                    case 42:
                        this.popState();
                        p.getLogger().debug("Lex: (-");
                        return "NODE_DEND";
                    case 43:
                        this.popState();
                        p.getLogger().debug("Lex: -)");
                        return "NODE_DEND";
                    case 44:
                        this.popState();
                        p.getLogger().debug("Lex: ((");
                        return "NODE_DEND";
                    case 45:
                        this.popState();
                        p.getLogger().debug("Lex: ]]");
                        return "NODE_DEND";
                    case 46:
                        this.popState();
                        p.getLogger().debug("Lex: (");
                        return "NODE_DEND";
                    case 47:
                        this.popState();
                        p.getLogger().debug("Lex: ])");
                        return "NODE_DEND";
                    case 48:
                        this.popState();
                        p.getLogger().debug("Lex: /]");
                        return "NODE_DEND";
                    case 49:
                        this.popState();
                        p.getLogger().debug("Lex: /]");
                        return "NODE_DEND";
                    case 50:
                        this.popState();
                        p.getLogger().debug("Lex: )]");
                        return "NODE_DEND";
                    case 51:
                        this.popState();
                        p.getLogger().debug("Lex: )");
                        return "NODE_DEND";
                    case 52:
                        this.popState();
                        p.getLogger().debug("Lex: ]>");
                        return "NODE_DEND";
                    case 53:
                        this.popState();
                        p.getLogger().debug("Lex: ]");
                        return "NODE_DEND";
                    case 54:
                        p.getLogger().debug("Lexa: -)");
                        this.pushState("NODE");
                        return 35;
                    case 55:
                        p.getLogger().debug("Lexa: (-");
                        this.pushState("NODE");
                        return 35;
                    case 56:
                        p.getLogger().debug("Lexa: ))");
                        this.pushState("NODE");
                        return 35;
                    case 57:
                        p.getLogger().debug("Lexa: )");
                        this.pushState("NODE");
                        return 35;
                    case 58:
                        p.getLogger().debug("Lex: (((");
                        this.pushState("NODE");
                        return 35;
                    case 59:
                        p.getLogger().debug("Lexa: )");
                        this.pushState("NODE");
                        return 35;
                    case 60:
                        p.getLogger().debug("Lexa: )");
                        this.pushState("NODE");
                        return 35;
                    case 61:
                        p.getLogger().debug("Lexa: )");
                        this.pushState("NODE");
                        return 35;
                    case 62:
                        p.getLogger().debug("Lexc: >");
                        this.pushState("NODE");
                        return 35;
                    case 63:
                        p.getLogger().debug("Lexa: ([");
                        this.pushState("NODE");
                        return 35;
                    case 64:
                        p.getLogger().debug("Lexa: )");
                        this.pushState("NODE");
                        return 35;
                    case 65:
                        this.pushState("NODE");
                        return 35;
                    case 66:
                        this.pushState("NODE");
                        return 35;
                    case 67:
                        this.pushState("NODE");
                        return 35;
                    case 68:
                        this.pushState("NODE");
                        return 35;
                    case 69:
                        this.pushState("NODE");
                        return 35;
                    case 70:
                        this.pushState("NODE");
                        return 35;
                    case 71:
                        this.pushState("NODE");
                        return 35;
                    case 72:
                        p.getLogger().debug("Lexa: [");
                        this.pushState("NODE");
                        return 35;
                    case 73:
                        this.pushState("BLOCK_ARROW");
                        p.getLogger().debug("LEX ARR START");
                        return 37;
                    case 74:
                        p.getLogger().debug("Lex: NODE_ID", x.yytext);
                        return 31;
                    case 75:
                        p.getLogger().debug("Lex: EOF", x.yytext);
                        return 8;
                    case 76:
                        this.pushState("md_string");
                        break;
                    case 77:
                        this.pushState("md_string");
                        break;
                    case 78:
                        return "NODE_DESCR";
                    case 79:
                        this.popState();
                        break;
                    case 80:
                        p.getLogger().debug("Lex: Starting string");
                        this.pushState("string");
                        break;
                    case 81:
                        p.getLogger().debug("LEX ARR: Starting string");
                        this.pushState("string");
                        break;
                    case 82:
                        p.getLogger().debug("LEX: NODE_DESCR:", x.yytext);
                        return "NODE_DESCR";
                    case 83:
                        p.getLogger().debug("LEX POPPING");
                        this.popState();
                        break;
                    case 84:
                        p.getLogger().debug("Lex: =>BAE");
                        this.pushState("ARROW_DIR");
                        break;
                    case 85:
                        x.yytext = x.yytext.replace(/^,\s*/, "");
                        p.getLogger().debug("Lex (right): dir:", x.yytext);
                        return "DIR";
                    case 86:
                        x.yytext = x.yytext.replace(/^,\s*/, "");
                        p.getLogger().debug("Lex (left):", x.yytext);
                        return "DIR";
                    case 87:
                        x.yytext = x.yytext.replace(/^,\s*/, "");
                        p.getLogger().debug("Lex (x):", x.yytext);
                        return "DIR";
                    case 88:
                        x.yytext = x.yytext.replace(/^,\s*/, "");
                        p.getLogger().debug("Lex (y):", x.yytext);
                        return "DIR";
                    case 89:
                        x.yytext = x.yytext.replace(/^,\s*/, "");
                        p.getLogger().debug("Lex (up):", x.yytext);
                        return "DIR";
                    case 90:
                        x.yytext = x.yytext.replace(/^,\s*/, "");
                        p.getLogger().debug("Lex (down):", x.yytext);
                        return "DIR";
                    case 91:
                        x.yytext = "]>";
                        p.getLogger().debug("Lex (ARROW_DIR end):", x.yytext);
                        this.popState();
                        this.popState();
                        return "BLOCK_ARROW_END";
                    case 92:
                        p.getLogger().debug("Lex: LINK", `#${x.yytext}#`);
                        return 15;
                    case 93:
                        p.getLogger().debug("Lex: LINK", x.yytext);
                        return 15;
                    case 94:
                        p.getLogger().debug("Lex: LINK", x.yytext);
                        return 15;
                    case 95:
                        p.getLogger().debug("Lex: LINK", x.yytext);
                        return 15;
                    case 96:
                        p.getLogger().debug("Lex: START_LINK", x.yytext);
                        this.pushState("LLABEL");
                        return 16;
                    case 97:
                        p.getLogger().debug("Lex: START_LINK", x.yytext);
                        this.pushState("LLABEL");
                        return 16;
                    case 98:
                        p.getLogger().debug("Lex: START_LINK", x.yytext);
                        this.pushState("LLABEL");
                        return 16;
                    case 99:
                        this.pushState("md_string");
                        break;
                    case 100:
                        p.getLogger().debug("Lex: Starting string");
                        this.pushState("string");
                        return "LINK_LABEL";
                    case 101:
                        this.popState();
                        p.getLogger().debug("Lex: LINK", `#${x.yytext}#`);
                        return 15;
                    case 102:
                        this.popState();
                        p.getLogger().debug("Lex: LINK", x.yytext);
                        return 15;
                    case 103:
                        this.popState();
                        p.getLogger().debug("Lex: LINK", x.yytext);
                        return 15;
                    case 104:
                        p.getLogger().debug("Lex: COLON", x.yytext);
                        x.yytext = x.yytext.slice(1);
                        return 27;
                }
            }, "anonymous"),
            rules: [
                /^(?:block-beta\b)/,
                /^(?:block:)/,
                /^(?:block\b)/,
                /^(?:[\s]+)/,
                /^(?:[\n]+)/,
                /^(?:((\u000D\u000A)|(\u000A)))/,
                /^(?:columns\s+auto\b)/,
                /^(?:columns\s+[\d]+)/,
                /^(?:["][`])/,
                /^(?:[^`"]+)/,
                /^(?:[`]["])/,
                /^(?:["])/,
                /^(?:["])/,
                /^(?:[^"]*)/,
                /^(?:space[:]\d+)/,
                /^(?:space\b)/,
                /^(?:default\b)/,
                /^(?:linkStyle\b)/,
                /^(?:interpolate\b)/,
                /^(?:classDef\s+)/,
                /^(?:DEFAULT\s+)/,
                /^(?:\w+\s+)/,
                /^(?:[^\n]*)/,
                /^(?:class\s+)/,
                /^(?:(\w+)+((,\s*\w+)*))/,
                /^(?:[^\n]*)/,
                /^(?:style\s+)/,
                /^(?:(\w+)+((,\s*\w+)*))/,
                /^(?:[^\n]*)/,
                /^(?:accTitle\s*:\s*)/,
                /^(?:(?!\n||)*[^\n]*)/,
                /^(?:accDescr\s*:\s*)/,
                /^(?:(?!\n||)*[^\n]*)/,
                /^(?:accDescr\s*\{\s*)/,
                /^(?:[\}])/,
                /^(?:[^\}]*)/,
                /^(?:end\b\s*)/,
                /^(?:\(\(\()/,
                /^(?:\)\)\))/,
                /^(?:[\)]\))/,
                /^(?:\}\})/,
                /^(?:\})/,
                /^(?:\(-)/,
                /^(?:-\))/,
                /^(?:\(\()/,
                /^(?:\]\])/,
                /^(?:\()/,
                /^(?:\]\))/,
                /^(?:\\\])/,
                /^(?:\/\])/,
                /^(?:\)\])/,
                /^(?:[\)])/,
                /^(?:\]>)/,
                /^(?:[\]])/,
                /^(?:-\))/,
                /^(?:\(-)/,
                /^(?:\)\))/,
                /^(?:\))/,
                /^(?:\(\(\()/,
                /^(?:\(\()/,
                /^(?:\{\{)/,
                /^(?:\{)/,
                /^(?:>)/,
                /^(?:\(\[)/,
                /^(?:\()/,
                /^(?:\[\[)/,
                /^(?:\[\|)/,
                /^(?:\[\()/,
                /^(?:\)\)\))/,
                /^(?:\[\\)/,
                /^(?:\[\/)/,
                /^(?:\[\\)/,
                /^(?:\[)/,
                /^(?:<\[)/,
                /^(?:[^\(\[\n\-\)\{\}\s\<\>:=]+)/,
                /^(?:$)/,
                /^(?:["][`])/,
                /^(?:["][`])/,
                /^(?:[^`"]+)/,
                /^(?:[`]["])/,
                /^(?:["])/,
                /^(?:["])/,
                /^(?:[^"]+)/,
                /^(?:["])/,
                /^(?:\]>\s*\()/,
                /^(?:,?\s*right\s*)/,
                /^(?:,?\s*left\s*)/,
                /^(?:,?\s*x\s*)/,
                /^(?:,?\s*y\s*)/,
                /^(?:,?\s*up\s*)/,
                /^(?:,?\s*down\s*)/,
                /^(?:\)\s*)/,
                /^(?:\s*[xo<]?--+[-xo>]\s*)/,
                /^(?:\s*[xo<]?==+[=xo>]\s*)/,
                /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
                /^(?:\s*~~[\~]+\s*)/,
                /^(?:\s*[xo<]?--\s*)/,
                /^(?:\s*[xo<]?==\s*)/,
                /^(?:\s*[xo<]?-\.\s*)/,
                /^(?:["][`])/,
                /^(?:["])/,
                /^(?:\s*[xo<]?--+[-xo>]\s*)/,
                /^(?:\s*[xo<]?==+[=xo>]\s*)/,
                /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
                /^(?::\d+)/
            ],
            conditions: {
                STYLE_DEFINITION: {
                    rules: [
                        28
                    ],
                    inclusive: false
                },
                STYLE_STMNT: {
                    rules: [
                        27
                    ],
                    inclusive: false
                },
                CLASSDEFID: {
                    rules: [
                        22
                    ],
                    inclusive: false
                },
                CLASSDEF: {
                    rules: [
                        20,
                        21
                    ],
                    inclusive: false
                },
                CLASS_STYLE: {
                    rules: [
                        25
                    ],
                    inclusive: false
                },
                CLASS: {
                    rules: [
                        24
                    ],
                    inclusive: false
                },
                LLABEL: {
                    rules: [
                        99,
                        100,
                        101,
                        102,
                        103
                    ],
                    inclusive: false
                },
                ARROW_DIR: {
                    rules: [
                        85,
                        86,
                        87,
                        88,
                        89,
                        90,
                        91
                    ],
                    inclusive: false
                },
                BLOCK_ARROW: {
                    rules: [
                        76,
                        81,
                        84
                    ],
                    inclusive: false
                },
                NODE: {
                    rules: [
                        37,
                        38,
                        39,
                        40,
                        41,
                        42,
                        43,
                        44,
                        45,
                        46,
                        47,
                        48,
                        49,
                        50,
                        51,
                        52,
                        53,
                        77,
                        80
                    ],
                    inclusive: false
                },
                md_string: {
                    rules: [
                        9,
                        10,
                        78,
                        79
                    ],
                    inclusive: false
                },
                space: {
                    rules: [],
                    inclusive: false
                },
                string: {
                    rules: [
                        12,
                        13,
                        82,
                        83
                    ],
                    inclusive: false
                },
                acc_descr_multiline: {
                    rules: [
                        34,
                        35
                    ],
                    inclusive: false
                },
                acc_descr: {
                    rules: [
                        32
                    ],
                    inclusive: false
                },
                acc_title: {
                    rules: [
                        30
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
                        11,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        23,
                        26,
                        29,
                        31,
                        33,
                        36,
                        54,
                        55,
                        56,
                        57,
                        58,
                        59,
                        60,
                        61,
                        62,
                        63,
                        64,
                        65,
                        66,
                        67,
                        68,
                        69,
                        70,
                        71,
                        72,
                        73,
                        74,
                        75,
                        92,
                        93,
                        94,
                        95,
                        96,
                        97,
                        98,
                        104
                    ],
                    inclusive: true
                }
            }
        };
        return T;
    })();
    S.lexer = N;
    function _() {
        this.yy = {};
    }
    __1(_, "Parser");
    _.prototype = S;
    S.Parser = _;
    return new _;
})();
wt.parser = wt;
const parser = wt;
let U = new Map;
let Et = [];
let mt = new Map;
const At = "color";
const zt = "fill";
const sr = "bgFill";
const ee = ",";
let ct = new Map;
let _t = "";
const ir = __1((e)=>k.sanitizeText(e, c_1()), "sanitizeText");
const nr = __1((e, t = "")=>{
    let a = ct.get(e);
    if (!a) {
        a = {
            id: e,
            styles: [],
            textStyles: []
        };
        ct.set(e, a);
    }
    t?.split(ee).forEach((s)=>{
        const i = s.replace(/([^;]*);/, "$1").trim();
        if (RegExp(At).exec(s)) {
            const r = i.replace(zt, sr).replace(At, zt);
            a.textStyles.push(r);
        }
        a.styles.push(i);
    });
}, "addStyleClass");
const cr = __1((e, t = "")=>{
    const a = U.get(e);
    if (t != null) {
        a.styles = t.split(ee);
    }
}, "addStyle2Node");
const lr = __1((e, t)=>{
    e.split(",").forEach((a)=>{
        let s = U.get(a);
        if (s === undefined) {
            const i = a.trim();
            s = {
                id: i,
                type: "na",
                children: []
            };
            U.set(i, s);
        }
        if (!s.classes) {
            s.classes = [];
        }
        s.classes.push(t);
    });
}, "setCssClass");
var re = __1((e, t)=>{
    const a = e.flat();
    const s = [];
    const c = a.find((r)=>r?.type === "column-setting")?.columns ?? -1;
    for (const r of a){
        if (typeof c === "number" && c > 0 && r.type !== "column-setting" && typeof r.widthInColumns === "number" && r.widthInColumns > c) {
            l_1.warn(`Block ${r.id} width ${r.widthInColumns} exceeds configured column width ${c}`);
        }
        if (r.label) {
            r.label = ir(r.label);
        }
        if (r.type === "classDef") {
            nr(r.id, r.css);
            continue;
        }
        if (r.type === "applyClass") {
            lr(r.id, r?.styleClass ?? "");
            continue;
        }
        if (r.type === "applyStyles") {
            if (r?.stylesStr) {
                cr(r.id, r?.stylesStr);
            }
            continue;
        }
        if (r.type === "column-setting") {
            t.columns = r.columns ?? -1;
        } else if (r.type === "edge") {
            const n = (mt.get(r.id) ?? 0) + 1;
            mt.set(r.id, n);
            r.id = `${n}-${r.id}`;
            Et.push(r);
        } else {
            r.label || (r.type === "composite" ? r.label = "" : r.label = r.id);
            const n = U.get(r.id);
            if (n === undefined) {
                U.set(r.id, r);
            } else {
                if (r.type !== "na") {
                    n.type = r.type;
                }
                if (r.label !== r.id) {
                    n.label = r.label;
                }
            }
            if (r.children) {
                re(r.children, r);
            }
            if (r.type === "space") {
                const l = r.width ?? 1;
                for(let g = 0; g < l; g++){
                    const h = Qe(r);
                    h.id = `${h.id}-${g}`;
                    U.set(h.id, h);
                    s.push(h);
                }
            } else {
                if (n === undefined) {
                    s.push(r);
                }
            }
        }
    }
    t.children = s;
}, "populateBlockDatabase");
let Tt = [];
let et = {
    id: "root",
    type: "composite",
    children: [],
    columns: -1
};
const clear = __1(()=>{
    l_1.debug("Clear called");
    q();
    et = {
        id: "root",
        type: "composite",
        children: [],
        columns: -1
    };
    U = new Map([
        [
            "root",
            et
        ]
    ]);
    Tt = [];
    ct = new Map;
    Et = [];
    mt = new Map;
    _t = "";
}, "clear");
function typeStr2Type(e) {
    l_1.debug("typeStr2Type", e);
    switch(e){
        case "[]":
            return "square";
        case "()":
            l_1.debug("we have a round");
            return "round";
        case "(())":
            return "circle";
        case ">]":
            return "rect_left_inv_arrow";
        case "{}":
            return "diamond";
        case "{{}}":
            return "hexagon";
        case "([])":
            return "stadium";
        case "[[]]":
            return "subroutine";
        case "[()]":
            return "cylinder";
        case "((()))":
            return "doublecircle";
        case "[//]":
            return "lean_right";
        case "[\\\\]":
            return "lean_left";
        case "[/\\]":
            return "trapezoid";
        case "[\\/]":
            return "inv_trapezoid";
        case "<[]>":
            return "block_arrow";
        default:
            return "na";
    }
}
__1(typeStr2Type, "typeStr2Type");
function edgeTypeStr2Type(e) {
    l_1.debug("typeStr2Type", e);
    if (e === "==") {
        return "thick";
    }
    return "normal";
}
__1(edgeTypeStr2Type, "edgeTypeStr2Type");
function edgeStrToEdgeData(e) {
    switch(e.trim().slice(-1)){
        case "x":
            return "arrow_cross";
        case "o":
            return "arrow_circle";
        case ">":
            return "arrow_point";
        default:
            return "";
    }
}
__1(edgeStrToEdgeData, "edgeStrToEdgeData");
function edgeStrToEdgeStartData(e) {
    switch(e.trim().charAt(0)){
        case "x":
            return "arrow_cross";
        case "o":
            return "arrow_circle";
        case "<":
            return "arrow_point";
        default:
            return "arrow_open";
    }
}
__1(edgeStrToEdgeStartData, "edgeStrToEdgeStartData");
function edgeStrToThickness(e) {
    if (e.includes("==")) {
        return "thick";
    }
    return "normal";
}
__1(edgeStrToThickness, "edgeStrToThickness");
function edgeStrToPattern(e) {
    if (e.includes(".-")) {
        return "dotted";
    }
    return "solid";
}
__1(edgeStrToPattern, "edgeStrToPattern");
let Mt = 0;
const generateId = __1(()=>{
    Mt++;
    return `id-${Math.random().toString(36).substr(2, 12)}-${Mt}`;
}, "generateId");
const setHierarchy = __1((e)=>{
    et.children = e;
    re(e, et);
    Tt = et.children;
}, "setHierarchy");
const getColumns = __1((e)=>{
    const t = U.get(e);
    if (t) {
        if (t.columns) {
            return t.columns;
        }
        if (t.children) {
            return t.children.length;
        }
        return -1;
    }
    return -1;
}, "getColumns");
const getBlocksFlat = __1(()=>[
        ...U.values()
    ], "getBlocksFlat");
const getBlocks = __1(()=>Tt || [], "getBlocks");
const getEdges = __1(()=>Et, "getEdges");
const getBlock = __1((e)=>U.get(e), "getBlock");
const setBlock = __1((e)=>{
    U.set(e.id, e);
}, "setBlock");
const setDiagramId = __1((e)=>{
    _t = e;
}, "setDiagramId");
const getDiagramId = __1(()=>_t, "getDiagramId");
const getLogger = __1(()=>l_1, "getLogger");
const Sr = __1(()=>ct, "getClasses");
const Lr = {
    getConfig: __1(()=>z_1().block, "getConfig"),
    typeStr2Type,
    edgeTypeStr2Type,
    edgeStrToEdgeData,
    edgeStrToEdgeStartData,
    edgeStrToThickness,
    edgeStrToPattern,
    getLogger,
    getBlocksFlat,
    getBlocks,
    getEdges,
    setHierarchy,
    getBlock,
    setBlock,
    getColumns,
    getClasses: Sr,
    clear,
    generateId,
    setDiagramId,
    getDiagramId
};
const db = Lr;
const yt = __1((e, t)=>{
    const a = c_2;
    const s = a(e, "r");
    const i = a(e, "g");
    const c = a(e, "b");
    return t_1(s, i, c, t);
}, "fade");
const vr = __1((e)=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }



  .label text,span,p {
    fill: ${e.nodeTextColor || e.textColor};
    color: ${e.nodeTextColor || e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    /*
     * This is for backward compatibility with existing code that didn't
     * add a \`<p>\` around edge labels.
     *
     * TODO: We should probably remove this in a future release.
     */
    p {
      margin: 0;
      padding: 0;
      display: inline;
    }
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${e.edgeLabelBackground};
  }

  .node .cluster {
    // fill: ${yt(e.mainBkg, 0.5)};
    fill: ${yt(e.clusterBkg, 0.5)};
    stroke: ${yt(e.clusterBorder, 0.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
  ${g()}
`, "getStyles");
const styles = vr;
const _r = __1((e, t, a, s)=>{
    t.forEach((i)=>{
        zr[i](e, a, s);
    });
}, "insertMarkers");
const extension = __1((e, t, a)=>{
    l_1.trace("Making markers for ", a);
    e.append("defs").append("marker").attr("id", `${a}_${t}-extensionStart`).attr("class", `marker extension ${t}`).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z");
    e.append("defs").append("marker").attr("id", `${a}_${t}-extensionEnd`).attr("class", `marker extension ${t}`).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, "extension");
const composition = __1((e, t, a)=>{
    e.append("defs").append("marker").attr("id", `${a}_${t}-compositionStart`).attr("class", `marker composition ${t}`).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
    e.append("defs").append("marker").attr("id", `${a}_${t}-compositionEnd`).attr("class", `marker composition ${t}`).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition");
const aggregation = __1((e, t, a)=>{
    e.append("defs").append("marker").attr("id", `${a}_${t}-aggregationStart`).attr("class", `marker aggregation ${t}`).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
    e.append("defs").append("marker").attr("id", `${a}_${t}-aggregationEnd`).attr("class", `marker aggregation ${t}`).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation");
const dependency = __1((e, t, a)=>{
    e.append("defs").append("marker").attr("id", `${a}_${t}-dependencyStart`).attr("class", `marker dependency ${t}`).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
    e.append("defs").append("marker").attr("id", `${a}_${t}-dependencyEnd`).attr("class", `marker dependency ${t}`).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency");
const lollipop = __1((e, t, a)=>{
    e.append("defs").append("marker").attr("id", `${a}_${t}-lollipopStart`).attr("class", `marker lollipop ${t}`).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
    e.append("defs").append("marker").attr("id", `${a}_${t}-lollipopEnd`).attr("class", `marker lollipop ${t}`).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
}, "lollipop");
const point = __1((e, t, a)=>{
    e.append("marker").attr("id", `${a}_${t}-pointEnd`).attr("class", `marker ${t}`).attr("viewBox", "0 0 10 10").attr("refX", 6).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    e.append("marker").attr("id", `${a}_${t}-pointStart`).attr("class", `marker ${t}`).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "point");
const Or = __1((e, t, a)=>{
    e.append("marker").attr("id", `${a}_${t}-circleEnd`).attr("class", `marker ${t}`).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    e.append("marker").attr("id", `${a}_${t}-circleStart`).attr("class", `marker ${t}`).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "circle");
const cross = __1((e, t, a)=>{
    e.append("marker").attr("id", `${a}_${t}-crossEnd`).attr("class", `marker cross ${t}`).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
    e.append("marker").attr("id", `${a}_${t}-crossStart`).attr("class", `marker cross ${t}`).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, "cross");
const barb = __1((e, t, a)=>{
    e.append("defs").append("marker").attr("id", `${a}_${t}-barbEnd`).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb");
var zr = {
    extension,
    composition,
    aggregation,
    dependency,
    lollipop,
    point,
    circle: Or,
    cross,
    barb
};
const Mr = _r;
function St(e, t) {
    if (e === 0 || !Number.isInteger(e)) {
        throw new Error("Columns must be an integer !== 0.");
    }
    if (t < 0 || !Number.isInteger(t)) {
        throw new Error(`Position must be a non-negative integer.${t}`);
    }
    if (e < 0) {
        return {
            px: t,
            py: 0
        };
    }
    if (e === 1) {
        return {
            px: 0,
            py: t
        };
    }
    const px = t % e;
    const py = Math.floor(t / e);
    return {
        px,
        py
    };
}
__1(St, "calculateBlockPosition");
const Pr = __1((e)=>{
    let t = 0;
    let a = 0;
    for (const s of e.children){
        const { width, height, x, y } = s.size ?? {
            width: 0,
            height: 0,
            x: 0,
            y: 0
        };
        l_1.debug("getMaxChildSize abc95 child:", s.id, "width:", width, "height:", height, "x:", x, "y:", y, s.type);
        if (s.type === "space") {
            continue;
        }
        const l = width / (s.widthInColumns ?? 1);
        if (l > t) {
            t = l;
        }
        if (height > a) {
            a = height;
        }
    }
    return {
        width: t,
        height: a
    };
}, "getMaxChildSize");
function lt(e, t, a = 0, s = 0, i = 8) {
    l_1.debug("setBlockSizes abc95 (start)", e.id, e?.size?.x, "block width =", e?.size, "siblingWidth", a);
    if (!e?.size?.width) {
        e.size = {
            width: a,
            height: s,
            x: 0,
            y: 0
        };
    }
    let c = 0;
    let r = 0;
    if (e.children?.length > 0) {
        for (const y of e.children){
            lt(y, t, 0, 0, i);
        }
        const n = Pr(e);
        c = n.width;
        r = n.height;
        l_1.debug("setBlockSizes abc95 maxWidth of", e.id, ":s children is ", c, r);
        for (const y of e.children){
            if (y.size) {
                l_1.debug(`abc95 Setting size of children of ${e.id} id=${y.id} ${c} ${r} ${JSON.stringify(y.size)}`);
                y.size.width = c * (y.widthInColumns ?? 1) + i * ((y.widthInColumns ?? 1) - 1);
                y.size.height = r;
                y.size.x = 0;
                y.size.y = 0;
                l_1.debug(`abc95 updating size of ${e.id} children child:${y.id} maxWidth:${c} maxHeight:${r}`);
            }
        }
        for (const y of e.children){
            lt(y, t, c, r, i);
        }
        const l = e.columns ?? -1;
        let g = 0;
        for (const y of e.children){
            g += y.widthInColumns ?? 1;
        }
        let h = e.children.length;
        if (l > 0 && l < g) {
            h = l;
        }
        const d = Math.ceil(g / h);
        let b = h * (c + i) + i;
        let w = d * (r + i) + i;
        if (b < a) {
            l_1.debug(`Detected to small sibling: abc95 ${e.id} siblingWidth ${a} siblingHeight ${s} width ${b}`);
            b = a;
            w = s;
            const y = (a - h * i - i) / h;
            const v = (s - d * i - i) / d;
            l_1.debug("Size indata abc88", e.id, "childWidth", y, "maxWidth", c);
            l_1.debug("Size indata abc88", e.id, "childHeight", v, "maxHeight", r);
            l_1.debug("Size indata abc88 xSize", h, "padding", i);
            for (const S of e.children){
                if (S.size) {
                    S.size.width = y;
                    S.size.height = v;
                    S.size.x = 0;
                    S.size.y = 0;
                }
            }
        }
        l_1.debug(`abc95 (finale calc) ${e.id} xSize ${h} ySize ${d} columns ${l}${e.children.length} width=${Math.max(b, e.size?.width || 0)}`);
        if (b < (e?.size?.width || 0)) {
            b = e?.size?.width || 0;
            const y = l > 0 ? Math.min(e.children.length, l) : e.children.length;
            if (y > 0) {
                const v = (b - y * i - i) / y;
                l_1.debug("abc95 (growing to fit) width", e.id, b, e.size?.width, v);
                for (const S of e.children){
                    if (S.size) {
                        S.size.width = v;
                    }
                }
            }
        }
        e.size = {
            width: b,
            height: w,
            x: 0,
            y: 0
        };
    }
    l_1.debug("setBlockSizes abc94 (done)", e.id, e?.size?.x, e?.size?.width, e?.size?.y, e?.size?.height);
}
__1(lt, "setBlockSizes");
function Dt(e, t, a = 8) {
    l_1.debug(`abc85 layout blocks (=>layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`);
    const s = e.columns ?? -1;
    l_1.debug("layoutBlocks columns abc95", e.id, "=>", s, e);
    if (e.children && e.children.length > 0) {
        const i = e?.children[0]?.size?.width ?? 0;
        const c = e.children.length * i + (e.children.length - 1) * a;
        l_1.debug("widthOfChildren 88", c, "posX");
        const r = new Map;
        {
            let d = 0;
            for (const b of e.children){
                if (!b.size) {
                    continue;
                }
                const { py } = St(s, d);
                const y = r.get(py) ?? 0;
                if (b.size.height > y) {
                    r.set(py, b.size.height);
                }
                let v = b?.widthInColumns ?? 1;
                if (s > 0) {
                    v = Math.min(v, s - d % s);
                }
                d += v;
            }
        }
        const n = new Map;
        {
            let d = 0;
            const b = [
                ...r.keys()
            ].sort((w, y)=>w - y);
            for (const w of b){
                n.set(w, d);
                d += (r.get(w) ?? 0) + a;
            }
        }
        let l = 0;
        l_1.debug("abc91 block?.size?.x", e.id, e?.size?.x);
        let g = e?.size?.x ? e?.size?.x + (-e?.size?.width / 2 || 0) : -a;
        let h = 0;
        for (const d of e.children){
            const b = e;
            if (!d.size) {
                continue;
            }
            const { width, height } = d.size;
            const { px, py } = St(s, l);
            if (py != h) {
                h = py;
                g = e?.size?.x ? e?.size?.x + (-e?.size?.width / 2 || 0) : -a;
                l_1.debug("New row in layout for block", e.id, " and child ", d.id, h);
            }
            l_1.debug(`abc89 layout blocks (child) id: ${d.id} Pos: ${l} (px, py) ${px},${py} (${b?.size?.x},${b?.size?.y}) parent: ${b.id} width: ${width}${a}`);
            if (b.size) {
                const _ = width / 2;
                d.size.x = g + a + _;
                l_1.debug(`abc91 layout blocks (calc) px, pyid:${d.id} startingPos=X${g} new startingPosX${d.size.x} ${_} padding=${a} width=${width} halfWidth=${_} => x:${d.size.x} y:${d.size.y} ${d.widthInColumns} (width * (child?.w || 1)) / 2 ${width * (d?.widthInColumns ?? 1) / 2}`);
                g = d.size.x + _;
                const T = n.get(py) ?? 0;
                const m = r.get(py) ?? height;
                d.size.y = b.size.y - b.size.height / 2 + T + m / 2 + a;
                l_1.debug(`abc88 layout blocks (calc) px, pyid:${d.id}startingPosX${g}${a}${_}=>x:${d.size.x}y:${d.size.y}${d.widthInColumns}(width * (child?.w || 1)) / 2${width * (d?.widthInColumns ?? 1) / 2}`);
            }
            if (d.children) {
                Dt(d, t, a);
            }
            let N = d?.widthInColumns ?? 1;
            if (s > 0) {
                N = Math.min(N, s - l % s);
            }
            l += N;
            l_1.debug("abc88 columnsPos", d, l);
        }
    }
    l_1.debug(`layout blocks (<==layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`);
}
__1(Dt, "layoutBlocks");
function Bt(e, { minX, minY, maxX, maxY } = {
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0
}) {
    if (e.size && e.id !== "root") {
        const { x, y, width, height } = e.size;
        if (x - width / 2 < minX) {
            minX = x - width / 2;
        }
        if (y - height / 2 < minY) {
            minY = y - height / 2;
        }
        if (x + width / 2 > maxX) {
            maxX = x + width / 2;
        }
        if (y + height / 2 > maxY) {
            maxY = y + height / 2;
        }
    }
    if (e.children) {
        for (const c of e.children){
            ({ minX, minY, maxX, maxY } = Bt(c, {
                minX,
                minY,
                maxX,
                maxY
            }));
        }
    }
    return {
        minX,
        minY,
        maxX,
        maxY
    };
}
__1(Bt, "findBounds");
function oe(e) {
    const t = e.getBlock("root");
    if (!t) {
        return;
    }
    const a = c_1()?.block?.padding ?? 8;
    lt(t, e, 0, 0, a);
    Dt(t, e, a);
    l_1.debug("getBlocks", JSON.stringify(t, null, 2));
    const { minX, minY, maxX, maxY } = Bt(t);
    const height = maxY - minY;
    const l = maxX - minX;
    return {
        x: minX,
        y: minY,
        width: l,
        height
    };
}
__1(oe, "layout");
const Fr = __1(async (e, t, style, isTitle = false, isNode = false)=>{
    let c = t || "";
    if (typeof c === "object") {
        c = c[0];
    }
    const r = c_1();
    const useHtmlLabels = a_(r);
    return await a$(e, c, {
        style,
        isTitle,
        useHtmlLabels,
        markdown: false,
        isNode,
        width: Number.POSITIVE_INFINITY
    }, r);
}, "createLabel");
const K = Fr;
const Wr = __1((e, t, a, s, i)=>{
    if (t.arrowTypeStart) {
        Pt(e, "start", t.arrowTypeStart, a, s, i);
    }
    if (t.arrowTypeEnd) {
        Pt(e, "end", t.arrowTypeEnd, a, s, i);
    }
}, "addEdgeMarkers");
const Yr = {
    arrow_cross: "cross",
    arrow_point: "point",
    arrow_barb: "barb",
    arrow_circle: "circle",
    aggregation: "aggregation",
    extension: "extension",
    composition: "composition",
    dependency: "dependency",
    lollipop: "lollipop"
};
var Pt = __1((e, t, a, s, i, c)=>{
    const r = Yr[a];
    if (!r) {
        l_1.warn(`Unknown arrow type: ${a}`);
        return;
    }
    const n = t === "start" ? "Start" : "End";
    e.attr(`marker-${t}`, `url(${s}#${i}_${c}-${r}${n})`);
}, "addEdgeMarker");
const Lt = {};
const z = {};
const Hr = __1(async (e, t)=>{
    const a = c_1();
    const s = a_(a);
    const i = e.insert("g").attr("class", "edgeLabel");
    const c = i.insert("g").attr("class", "label");
    const r = t.labelType === "markdown";
    const n = await a$(e, t.label, {
        style: t.labelStyle,
        useHtmlLabels: s,
        addSvgBackground: r,
        isNode: false,
        markdown: r,
        width: r ? undefined : Number.POSITIVE_INFINITY
    }, a);
    c.node().appendChild(n);
    let l = n.getBBox();
    let g = l;
    if (s) {
        const d = n.children[0];
        const b = d_1(n);
        l = d.getBoundingClientRect();
        g = l;
        b.attr("width", l.width);
        b.attr("height", l.height);
    } else {
        const d = d_1(n).select("text").node();
        if (d && typeof d.getBBox === "function") {
            g = d.getBBox();
        }
    }
    c.attr("transform", b0(g, s));
    Lt[t.id] = i;
    t.width = l.width;
    t.height = l.height;
    let h;
    if (t.startLabelLeft) {
        const d = e.insert("g").attr("class", "edgeTerminals");
        const b = d.insert("g").attr("class", "inner");
        const w = await K(b, t.startLabelLeft, t.labelStyle);
        h = w;
        let y = w.getBBox();
        if (s) {
            const v = w.children[0];
            const S = d_1(w);
            y = v.getBoundingClientRect();
            S.attr("width", y.width);
            S.attr("height", y.height);
        }
        b.attr("transform", b0(y, s));
        if (!z[t.id]) {
            z[t.id] = {};
        }
        z[t.id].startLeft = d;
        tt(h, t.startLabelLeft);
    }
    if (t.startLabelRight) {
        const d = e.insert("g").attr("class", "edgeTerminals");
        const b = d.insert("g").attr("class", "inner");
        const w = await K(b, t.startLabelRight, t.labelStyle);
        h = w;
        let y = w.getBBox();
        if (s) {
            const v = w.children[0];
            const S = d_1(w);
            y = v.getBoundingClientRect();
            S.attr("width", y.width);
            S.attr("height", y.height);
        }
        b.attr("transform", b0(y, s));
        if (!z[t.id]) {
            z[t.id] = {};
        }
        z[t.id].startRight = d;
        tt(h, t.startLabelRight);
    }
    if (t.endLabelLeft) {
        const d = e.insert("g").attr("class", "edgeTerminals");
        const b = d.insert("g").attr("class", "inner");
        const w = await K(d, t.endLabelLeft, t.labelStyle);
        h = w;
        let y = w.getBBox();
        if (s) {
            const v = w.children[0];
            const S = d_1(w);
            y = v.getBoundingClientRect();
            S.attr("width", y.width);
            S.attr("height", y.height);
        }
        b.attr("transform", b0(y, s));
        if (!z[t.id]) {
            z[t.id] = {};
        }
        z[t.id].endLeft = d;
        tt(h, t.endLabelLeft);
    }
    if (t.endLabelRight) {
        const d = e.insert("g").attr("class", "edgeTerminals");
        const b = d.insert("g").attr("class", "inner");
        const w = await K(d, t.endLabelRight, t.labelStyle);
        h = w;
        let y = w.getBBox();
        if (s) {
            const v = w.children[0];
            const S = d_1(w);
            y = v.getBoundingClientRect();
            S.attr("width", y.width);
            S.attr("height", y.height);
        }
        b.attr("transform", b0(y, s));
        if (!z[t.id]) {
            z[t.id] = {};
        }
        z[t.id].endRight = d;
        tt(h, t.endLabelRight);
    }
    return n;
}, "insertEdgeLabel");
function tt(e, t) {
    if (a_(c_1()) && e) {
        e.style.width = `${t.length * 9}px`;
        e.style.height = "12px";
    }
}
__1(tt, "setTerminalWidth");
const Kr = __1((e, t)=>{
    l_1.debug("Moving label abc88 ", e.id, e.label, Lt[e.id], t);
    let a = t.updatedPath ? t.updatedPath : t.originalPath;
    const s = c_1();
    const { subGraphTitleTotalMargin } = as(s);
    if (e.label) {
        const c = Lt[e.id];
        let r = e.x;
        let n = e.y;
        if (a) {
            const l = y.calcLabelPosition(a);
            l_1.debug(`Moving label ${e.label} from (`, r, ",", n, ") to (", l.x, ",", l.y, ") abc88");
            if (t.updatedPath) {
                r = l.x;
                n = l.y;
            }
        }
        c.attr("transform", `translate(${r}, ${n + subGraphTitleTotalMargin / 2})`);
    }
    if (e.startLabelLeft) {
        const c = z[e.id].startLeft;
        let r = e.x;
        let n = e.y;
        if (a) {
            const l = y.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", a);
            r = l.x;
            n = l.y;
        }
        c.attr("transform", `translate(${r}, ${n})`);
    }
    if (e.startLabelRight) {
        const c = z[e.id].startRight;
        let r = e.x;
        let n = e.y;
        if (a) {
            const l = y.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_right", a);
            r = l.x;
            n = l.y;
        }
        c.attr("transform", `translate(${r}, ${n})`);
    }
    if (e.endLabelLeft) {
        const c = z[e.id].endLeft;
        let r = e.x;
        let n = e.y;
        if (a) {
            const l = y.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", a);
            r = l.x;
            n = l.y;
        }
        c.attr("transform", `translate(${r}, ${n})`);
    }
    if (e.endLabelRight) {
        const c = z[e.id].endRight;
        let r = e.x;
        let n = e.y;
        if (a) {
            const l = y.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", a);
            r = l.x;
            n = l.y;
        }
        c.attr("transform", `translate(${r}, ${n})`);
    }
}, "positionEdgeLabel");
const Ur = __1((e, t)=>{
    const { x, y } = e;
    const i = Math.abs(t.x - x);
    const c = Math.abs(t.y - y);
    const r = e.width / 2;
    const n = e.height / 2;
    return i >= r || c >= n;
}, "outsideNode");
const Xr = __1((e, t, a)=>{
    l_1.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(a)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
    const { x, y } = e;
    const c = Math.abs(x - a.x);
    const r = e.width / 2;
    let n = a.x < t.x ? r - c : r + c;
    const l = e.height / 2;
    const g = Math.abs(t.y - a.y);
    const h = Math.abs(t.x - a.x);
    if (Math.abs(y - t.y) * r > Math.abs(x - t.x) * l) {
        let d = a.y < t.y ? t.y - l - y : y - l - t.y;
        n = h * d / g;
        const b = {
            x: a.x < t.x ? a.x + n : a.x - h + n,
            y: a.y < t.y ? a.y + g - d : a.y - g + d
        };
        if (n === 0) {
            b.x = t.x;
            b.y = t.y;
        }
        if (h === 0) {
            b.x = t.x;
        }
        if (g === 0) {
            b.y = t.y;
        }
        l_1.debug(`abc89 topp/bott calc, Q ${g}, q ${d}, R ${h}, r ${n}`, b);
        return b;
    } else {
        if (a.x < t.x) {
            n = t.x - r - x;
        } else {
            n = x - r - t.x;
        }
        let d = g * n / h;
        let b = a.x < t.x ? a.x + h - n : a.x - h + n;
        let w = a.y < t.y ? a.y + d : a.y - d;
        l_1.debug(`sides calc abc89, Q ${g}, q ${d}, R ${h}, r ${n}`, {
            _x: b,
            _y: w
        });
        if (n === 0) {
            b = t.x;
            w = t.y;
        }
        if (h === 0) {
            b = t.x;
        }
        if (g === 0) {
            w = t.y;
        }
        return {
            x: b,
            y: w
        };
    }
}, "intersection");
const Ft = __1((e, t)=>{
    l_1.debug("abc88 cutPathAtIntersect", e, t);
    let a = [];
    let s = e[0];
    let i = false;
    e.forEach((c)=>{
        if (!Ur(t, c) && !i) {
            const r = Xr(t, s, c);
            let n = false;
            a.forEach((l)=>{
                n = n || l.x === r.x && l.y === r.y;
            });
            if (!a.some((l)=>l.x === r.x && l.y === r.y)) {
                a.push(r);
            }
            i = true;
        } else {
            s = c;
            if (!i) {
                a.push(c);
            }
        }
    });
    return a;
}, "cutPathAtIntersect");
const Vr = __1((e, t, a, s, i, c, r)=>{
    let a_points = a.points;
    l_1.debug("abc88 InsertEdge: edge=", a, "e=", t);
    let l = false;
    const g = c.node(t.v);
    const h = c.node(t.w);
    if (h?.intersect && g?.intersect) {
        a_points = a_points.slice(1, a.points.length - 1);
        a_points.unshift(g.intersect(a_points[0]));
        a_points.push(h.intersect(a_points[a_points.length - 1]));
    }
    if (a.toCluster) {
        l_1.debug("to cluster abc88", s[a.toCluster]);
        a_points = Ft(a.points, s[a.toCluster].node);
        l = true;
    }
    if (a.fromCluster) {
        l_1.debug("from cluster abc88", s[a.fromCluster]);
        a_points = Ft(a_points.reverse(), s[a.fromCluster].node).reverse();
        l = true;
    }
    const d = a_points.filter((m)=>!Number.isNaN(m.y));
    let b = a8;
    if (a.curve && (i === "graph" || i === "flowchart")) {
        b = a.curve;
    }
    const { x, y } = aZ(a);
    const v = a7().x(x).y(y).curve(b);
    let S;
    switch(a.thickness){
        case "normal":
            S = "edge-thickness-normal";
            break;
        case "thick":
            S = "edge-thickness-thick";
            break;
        case "invisible":
            S = "edge-thickness-thick";
            break;
        default:
            S = "";
    }
    switch(a.pattern){
        case "solid":
            S += " edge-pattern-solid";
            break;
        case "dotted":
            S += " edge-pattern-dotted";
            break;
        case "dashed":
            S += " edge-pattern-dashed";
            break;
    }
    const N = e.append("path").attr("d", v(d)).attr("id", a.id).attr("class", ` ${S}${a.classes ? ` ${a.classes}` : ""}`).attr("style", a.style);
    let _ = "";
    if (c_1().flowchart.arrowMarkerAbsolute || c_1().state.arrowMarkerAbsolute) {
        _ = a3(true);
    }
    Wr(N, a, _, r, i);
    let T = {};
    if (l) {
        T.updatedPath = a_points;
    }
    T.originalPath = a.points;
    return T;
}, "insertEdge");
const Gr = __1((e)=>{
    const t = new Set;
    for (const a of e){
        switch(a){
            case "x":
                t.add("right");
                t.add("left");
                break;
            case "y":
                t.add("up");
                t.add("down");
                break;
            default:
                t.add(a);
                break;
        }
    }
    return t;
}, "expandAndDeduplicateDirections");
const Zr = __1((e, t, a, s)=>{
    const i = Gr(e);
    const c = 2;
    const r = t.height + 2 * a.padding;
    const n = r / c;
    const l = s ?? t.width + 2 * n + a.padding;
    const g = a.padding / 2;
    if (i.has("right") && i.has("left") && i.has("up") && i.has("down")) {
        return [
            {
                x: 0,
                y: 0
            },
            {
                x: n,
                y: 0
            },
            {
                x: l / 2,
                y: 2 * g
            },
            {
                x: l - n,
                y: 0
            },
            {
                x: l,
                y: 0
            },
            {
                x: l,
                y: -r / 3
            },
            {
                x: l + 2 * g,
                y: -r / 2
            },
            {
                x: l,
                y: -2 * r / 3
            },
            {
                x: l,
                y: -r
            },
            {
                x: l - n,
                y: -r
            },
            {
                x: l / 2,
                y: -r - 2 * g
            },
            {
                x: n,
                y: -r
            },
            {
                x: 0,
                y: -r
            },
            {
                x: 0,
                y: -2 * r / 3
            },
            {
                x: -2 * g,
                y: -r / 2
            },
            {
                x: 0,
                y: -r / 3
            }
        ];
    }
    if (i.has("right") && i.has("left") && i.has("up")) {
        return [
            {
                x: n,
                y: 0
            },
            {
                x: l - n,
                y: 0
            },
            {
                x: l,
                y: -r / 2
            },
            {
                x: l - n,
                y: -r
            },
            {
                x: n,
                y: -r
            },
            {
                x: 0,
                y: -r / 2
            }
        ];
    }
    if (i.has("right") && i.has("left") && i.has("down")) {
        return [
            {
                x: 0,
                y: 0
            },
            {
                x: n,
                y: -r
            },
            {
                x: l - n,
                y: -r
            },
            {
                x: l,
                y: 0
            }
        ];
    }
    if (i.has("right") && i.has("up") && i.has("down")) {
        return [
            {
                x: 0,
                y: 0
            },
            {
                x: l,
                y: -n
            },
            {
                x: l,
                y: -r + n
            },
            {
                x: 0,
                y: -r
            }
        ];
    }
    if (i.has("left") && i.has("up") && i.has("down")) {
        return [
            {
                x: l,
                y: 0
            },
            {
                x: 0,
                y: -n
            },
            {
                x: 0,
                y: -r + n
            },
            {
                x: l,
                y: -r
            }
        ];
    }
    if (i.has("right") && i.has("left")) {
        return [
            {
                x: n,
                y: 0
            },
            {
                x: n,
                y: -g
            },
            {
                x: l - n,
                y: -g
            },
            {
                x: l - n,
                y: 0
            },
            {
                x: l,
                y: -r / 2
            },
            {
                x: l - n,
                y: -r
            },
            {
                x: l - n,
                y: -r + g
            },
            {
                x: n,
                y: -r + g
            },
            {
                x: n,
                y: -r
            },
            {
                x: 0,
                y: -r / 2
            }
        ];
    }
    if (i.has("up") && i.has("down")) {
        return [
            {
                x: l / 2,
                y: 0
            },
            {
                x: 0,
                y: -g
            },
            {
                x: n,
                y: -g
            },
            {
                x: n,
                y: -r + g
            },
            {
                x: 0,
                y: -r + g
            },
            {
                x: l / 2,
                y: -r
            },
            {
                x: l,
                y: -r + g
            },
            {
                x: l - n,
                y: -r + g
            },
            {
                x: l - n,
                y: -g
            },
            {
                x: l,
                y: -g
            }
        ];
    }
    if (i.has("right") && i.has("up")) {
        return [
            {
                x: 0,
                y: 0
            },
            {
                x: l,
                y: -n
            },
            {
                x: 0,
                y: -r
            }
        ];
    }
    if (i.has("right") && i.has("down")) {
        return [
            {
                x: 0,
                y: 0
            },
            {
                x: l,
                y: 0
            },
            {
                x: 0,
                y: -r
            }
        ];
    }
    if (i.has("left") && i.has("up")) {
        return [
            {
                x: l,
                y: 0
            },
            {
                x: 0,
                y: -n
            },
            {
                x: l,
                y: -r
            }
        ];
    }
    if (i.has("left") && i.has("down")) {
        return [
            {
                x: l,
                y: 0
            },
            {
                x: 0,
                y: 0
            },
            {
                x: l,
                y: -r
            }
        ];
    }
    if (i.has("right")) {
        return [
            {
                x: n,
                y: -g
            },
            {
                x: n,
                y: -g
            },
            {
                x: l - n,
                y: -g
            },
            {
                x: l - n,
                y: 0
            },
            {
                x: l,
                y: -r / 2
            },
            {
                x: l - n,
                y: -r
            },
            {
                x: l - n,
                y: -r + g
            },
            {
                x: n,
                y: -r + g
            },
            {
                x: n,
                y: -r + g
            }
        ];
    }
    if (i.has("left")) {
        return [
            {
                x: n,
                y: 0
            },
            {
                x: n,
                y: -g
            },
            {
                x: l - n,
                y: -g
            },
            {
                x: l - n,
                y: -r + g
            },
            {
                x: n,
                y: -r + g
            },
            {
                x: n,
                y: -r
            },
            {
                x: 0,
                y: -r / 2
            }
        ];
    }
    if (i.has("up")) {
        return [
            {
                x: n,
                y: -g
            },
            {
                x: n,
                y: -r + g
            },
            {
                x: 0,
                y: -r + g
            },
            {
                x: l / 2,
                y: -r
            },
            {
                x: l,
                y: -r + g
            },
            {
                x: l - n,
                y: -r + g
            },
            {
                x: l - n,
                y: -g
            }
        ];
    }
    if (i.has("down")) {
        return [
            {
                x: l / 2,
                y: 0
            },
            {
                x: 0,
                y: -g
            },
            {
                x: n,
                y: -g
            },
            {
                x: n,
                y: -r + g
            },
            {
                x: l - n,
                y: -r + g
            },
            {
                x: l - n,
                y: -g
            },
            {
                x: l,
                y: -g
            }
        ];
    }
    return [
        {
            x: 0,
            y: 0
        }
    ];
}, "getArrowPoints");
function he(e, t) {
    return e.intersect(t);
}
__1(he, "intersectNode");
const node = he;
function ge({ x, y }, t, a, s) {
    const r = x - s.x;
    const n = y - s.y;
    const l = Math.sqrt(t * t * n * n + a * a * r * r);
    let g = Math.abs(t * a * r / l);
    if (s.x < x) {
        g = -g;
    }
    let h = Math.abs(t * a * n / l);
    if (s.y < y) {
        h = -h;
    }
    return {
        x: x + g,
        y: y + h
    };
}
__1(ge, "intersectEllipse");
const ellipse = ge;
function de(e, t, a) {
    return ellipse(e, t, t, a);
}
__1(de, "intersectCircle");
const qr = de;
function pe(e, t, a, s) {
    let i;
    let c;
    let r;
    let n;
    let l;
    let g;
    let h;
    let d;
    let b;
    let w;
    let y;
    let v;
    let S;
    let N;
    let y_1;
    i = t.y - e.y;
    r = e.x - t.x;
    l = t.x * e.y - e.x * t.y;
    b = i * a.x + r * a.y + l;
    w = i * s.x + r * s.y + l;
    if (!(b !== 0 && w !== 0 && kt(b, w)) && (c = s.y - a.y, n = a.x - s.x, g = s.x * a.y - a.x * s.y, h = c * e.x + n * e.y + g, d = c * t.x + n * t.y + g, !(h !== 0 && d !== 0 && kt(h, d)) && (y = i * n - c * r, y !== 0))) {
        v = Math.abs(y / 2);
        S = r * g - n * l;
        N = S < 0 ? (S - v) / y : (S + v) / y;
        S = c * l - i * g;
        y_1 = S < 0 ? (S - v) / y : (S + v) / y;
        return {
            x: N,
            y: y_1
        };
    }
}
__1(pe, "intersectLine");
function kt(e, t) {
    return e * t > 0;
}
__1(kt, "sameSign");
const Jr = pe;
const polygon = fe;
function fe(e, t, a) {
    const { x, y: y_1 } = e;
    const c = [];
    let Number_POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    let Number_POSITIVE_INFINITY_1 = Number.POSITIVE_INFINITY;
    if (typeof t.forEach === "function") {
        t.forEach((y)=>{
            Number_POSITIVE_INFINITY = Math.min(Number_POSITIVE_INFINITY, y.x);
            Number_POSITIVE_INFINITY_1 = Math.min(Number_POSITIVE_INFINITY_1, y.y);
        });
    } else {
        Number_POSITIVE_INFINITY = Math.min(Number_POSITIVE_INFINITY, t.x);
        Number_POSITIVE_INFINITY_1 = Math.min(Number_POSITIVE_INFINITY_1, t.y);
    }
    const l = x - e.width / 2 - Number_POSITIVE_INFINITY;
    const g = y_1 - e.height / 2 - Number_POSITIVE_INFINITY_1;
    for(let h = 0; h < t.length; h++){
        const d = t[h];
        const b = t[h < t.length - 1 ? h + 1 : 0];
        const w = Jr(e, a, {
            x: l + d.x,
            y: g + d.y
        }, {
            x: l + b.x,
            y: g + b.y
        });
        if (w) {
            c.push(w);
        }
    }
    if (c.length) {
        if (c.length > 1) {
            c.sort((y, v)=>{
                const S = y.x - a.x;
                const N = y.y - a.y;
                const _ = Math.sqrt(S * S + N * N);
                const T = v.x - a.x;
                const m = v.y - a.y;
                const p = Math.sqrt(T * T + m * m);
                if (_ < p) {
                    return -1;
                }
                if (_ === p) {
                    return 0;
                }
                return 1;
            });
        }
        return c[0];
    }
    return e;
}
__1(fe, "intersectPolygon");
const $r = __1((e, t)=>{
    var a = e.x;
    var s = e.y;
    var i = t.x - a;
    var c = t.y - s;
    var r = e.width / 2;
    var n = e.height / 2;
    var l;
    var g;
    if (Math.abs(c) * r > Math.abs(i) * n) {
        if (c < 0) {
            n = -n;
        }
        l = c === 0 ? 0 : n * i / c;
        g = n;
    } else {
        if (i < 0) {
            r = -r;
        }
        l = r;
        g = i === 0 ? 0 : r * c / i;
    }
    return {
        x: a + l,
        y: s + g
    };
}, "intersectRect");
const B = {
    node,
    circle: qr,
    ellipse,
    polygon,
    rect: $r
};
const A = __1(async (e, t, a, s)=>{
    const i = c_1();
    let c;
    const r = t.useHtmlLabels || a_(i);
    if (a) {
        c = a;
    } else {
        c = "node default";
    }
    const shapeSvg = e.insert("g").attr("class", c).attr("id", t.domId || t.id);
    const label = shapeSvg.insert("g").attr("class", "label").attr("style", t.labelStyle);
    let g;
    if (t.labelText === undefined) {
        g = "";
    } else {
        g = typeof t.labelText === "string" ? t.labelText : t.labelText[0];
    }
    let h;
    if (t.labelType === "markdown") {
        h = a$(label, i_1(b2(g), i), {
            useHtmlLabels: r,
            width: t.width || i.flowchart.wrappingWidth,
            classes: "markdown-node-label"
        }, i);
    } else {
        h = await K(label, i_1(b2(g), i), t.labelStyle, false, s);
    }
    let bbox = h.getBBox();
    const halfPadding = t.padding / 2;
    if (a_(i)) {
        const w = h.children[0];
        const y = d_1(h);
        await b3(w, g);
        bbox = w.getBoundingClientRect();
        y.attr("width", bbox.width);
        y.attr("height", bbox.height);
    }
    if (r) {
        label.attr("transform", `translate(${-bbox.width / 2}, ${-bbox.height / 2})`);
    } else {
        label.attr("transform", `translate(0, ${-bbox.height / 2})`);
    }
    if (t.centerLabel) {
        label.attr("transform", `translate(${-bbox.width / 2}, ${-bbox.height / 2})`);
    }
    label.insert("rect", ":first-child");
    return {
        shapeSvg,
        bbox,
        halfPadding,
        label
    };
}, "labelHelper");
const I = __1((e, t)=>{
    const a = t.node().getBBox();
    e.width = a.width;
    e.height = a.height;
}, "updateNodeBounds");
function X(e, t, a, s) {
    return e.insert("polygon", ":first-child").attr("points", s.map((i)=>`${i.x},${i.y}`).join(" ")).attr("class", "label-container").attr("transform", `translate(${-t / 2},${a / 2})`);
}
__1(X, "insertPolygonShape");
const ea = __1(async (e, t)=>{
    if (!(t.useHtmlLabels || a_(c_1()))) {
        t.centerLabel = true;
    }
    const { shapeSvg, bbox, halfPadding } = await A(e, t, `node ${t.classes}`, true);
    l_1.info("Classes = ", t.classes);
    const r = shapeSvg.insert("rect", ":first-child");
    r.attr("rx", t.rx).attr("ry", t.ry).attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", bbox.width + t.padding).attr("height", bbox.height + t.padding);
    I(t, r);
    t.intersect = (n)=>B.rect(t, n);
    return shapeSvg;
}, "note");
const note = ea;
const Wt = __1((e)=>{
    if (e) {
        return ` ${e}`;
    }
    return "";
}, "formatClass");
const Y = __1((e, t)=>`${t || "node default"}${Wt(e.classes)} ${Wt(e.class)}`, "getClassesFromNode");
const Yt = __1(async (e, t)=>{
    const { shapeSvg, bbox } = await A(e, t, Y(t, undefined), true);
    const i = bbox.width + t.padding;
    const c = bbox.height + t.padding;
    const r = i + c;
    const n = [
        {
            x: r / 2,
            y: 0
        },
        {
            x: r,
            y: -r / 2
        },
        {
            x: r / 2,
            y: -r
        },
        {
            x: 0,
            y: -r / 2
        }
    ];
    l_1.info("Question main (Circle)");
    const l = X(shapeSvg, r, r, n);
    l.attr("style", t.style);
    I(t, l);
    t.intersect = (g)=>{
        l_1.warn("Intersect called");
        return B.polygon(t, n, g);
    };
    return shapeSvg;
}, "question");
const choice = __1((e, t)=>{
    const a = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
    const s = 28;
    const i = [
        {
            x: 0,
            y: s / 2
        },
        {
            x: s / 2,
            y: 0
        },
        {
            x: 0,
            y: -s / 2
        },
        {
            x: -s / 2,
            y: 0
        }
    ];
    a.insert("polygon", ":first-child").attr("points", i.map((r)=>`${r.x},${r.y}`).join(" ")).attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28);
    t.width = 28;
    t.height = 28;
    t.intersect = (r)=>B.circle(t, 14, r);
    return a;
}, "choice");
const hexagon = __1(async (e, t)=>{
    const { shapeSvg, bbox } = await A(e, t, Y(t, undefined), true);
    const i = 4;
    const c = t.positioned ? t.height : bbox.height + t.padding;
    const r = c / i;
    const n = t.positioned ? t.width : bbox.width + 2 * r + t.padding;
    const l = [
        {
            x: r,
            y: 0
        },
        {
            x: n - r,
            y: 0
        },
        {
            x: n,
            y: -c / 2
        },
        {
            x: n - r,
            y: -c
        },
        {
            x: r,
            y: -c
        },
        {
            x: 0,
            y: -c / 2
        }
    ];
    const g = X(shapeSvg, n, c, l);
    g.attr("style", t.style);
    I(t, g);
    t.intersect = (h)=>B.polygon(t, l, h);
    return shapeSvg;
}, "hexagon");
const block_arrow = __1(async (e, t)=>{
    const { shapeSvg, bbox } = await A(e, t, undefined, true);
    const i = 2;
    const c = bbox.height + 2 * t.padding;
    const r = c / i;
    const n = bbox.width + 2 * r + t.padding;
    const g = t.positioned && (t.widthInColumns ?? 1) > 1 && t.width > n ? t.width : n;
    const h = Zr(t.directions, bbox, t, g);
    const d = X(shapeSvg, g, c, h);
    d.attr("style", t.style);
    I(t, d);
    t.intersect = (b)=>B.polygon(t, h, b);
    return shapeSvg;
}, "block_arrow");
const rect_left_inv_arrow = __1(async (e, t)=>{
    const { shapeSvg, bbox } = await A(e, t, Y(t, undefined), true);
    const i = bbox.width + t.padding;
    const c = bbox.height + t.padding;
    const r = [
        {
            x: -c / 2,
            y: 0
        },
        {
            x: i,
            y: 0
        },
        {
            x: i,
            y: -c
        },
        {
            x: -c / 2,
            y: -c
        },
        {
            x: 0,
            y: -c / 2
        }
    ];
    X(shapeSvg, i, c, r).attr("style", t.style);
    t.width = i + c;
    t.height = c;
    t.intersect = (l)=>B.polygon(t, r, l);
    return shapeSvg;
}, "rect_left_inv_arrow");
const lean_right = __1(async (e, t)=>{
    const { shapeSvg, bbox } = await A(e, t, Y(t), true);
    const i = bbox.width + t.padding;
    const c = bbox.height + t.padding;
    const r = [
        {
            x: -2 * c / 6,
            y: 0
        },
        {
            x: i - c / 6,
            y: 0
        },
        {
            x: i + 2 * c / 6,
            y: -c
        },
        {
            x: c / 6,
            y: -c
        }
    ];
    const n = X(shapeSvg, i, c, r);
    n.attr("style", t.style);
    I(t, n);
    t.intersect = (l)=>B.polygon(t, r, l);
    return shapeSvg;
}, "lean_right");
const lean_left = __1(async (e, t)=>{
    const { shapeSvg, bbox } = await A(e, t, Y(t, undefined), true);
    const i = bbox.width + t.padding;
    const c = bbox.height + t.padding;
    const r = [
        {
            x: 2 * c / 6,
            y: 0
        },
        {
            x: i + c / 6,
            y: 0
        },
        {
            x: i - 2 * c / 6,
            y: -c
        },
        {
            x: -c / 6,
            y: -c
        }
    ];
    const n = X(shapeSvg, i, c, r);
    n.attr("style", t.style);
    I(t, n);
    t.intersect = (l)=>B.polygon(t, r, l);
    return shapeSvg;
}, "lean_left");
const trapezoid = __1(async (e, t)=>{
    const { shapeSvg, bbox } = await A(e, t, Y(t, undefined), true);
    const i = bbox.width + t.padding;
    const c = bbox.height + t.padding;
    const r = [
        {
            x: -2 * c / 6,
            y: 0
        },
        {
            x: i + 2 * c / 6,
            y: 0
        },
        {
            x: i - c / 6,
            y: -c
        },
        {
            x: c / 6,
            y: -c
        }
    ];
    const n = X(shapeSvg, i, c, r);
    n.attr("style", t.style);
    I(t, n);
    t.intersect = (l)=>B.polygon(t, r, l);
    return shapeSvg;
}, "trapezoid");
const inv_trapezoid = __1(async (e, t)=>{
    const { shapeSvg, bbox } = await A(e, t, Y(t, undefined), true);
    const i = bbox.width + t.padding;
    const c = bbox.height + t.padding;
    const r = [
        {
            x: c / 6,
            y: 0
        },
        {
            x: i - c / 6,
            y: 0
        },
        {
            x: i + 2 * c / 6,
            y: -c
        },
        {
            x: -2 * c / 6,
            y: -c
        }
    ];
    const n = X(shapeSvg, i, c, r);
    n.attr("style", t.style);
    I(t, n);
    t.intersect = (l)=>B.polygon(t, r, l);
    return shapeSvg;
}, "inv_trapezoid");
const rect_right_inv_arrow = __1(async (e, t)=>{
    const { shapeSvg, bbox } = await A(e, t, Y(t, undefined), true);
    const i = bbox.width + t.padding;
    const c = bbox.height + t.padding;
    const r = [
        {
            x: 0,
            y: 0
        },
        {
            x: i + c / 2,
            y: 0
        },
        {
            x: i,
            y: -c / 2
        },
        {
            x: i + c / 2,
            y: -c
        },
        {
            x: 0,
            y: -c
        }
    ];
    const n = X(shapeSvg, i, c, r);
    n.attr("style", t.style);
    I(t, n);
    t.intersect = (l)=>B.polygon(t, r, l);
    return shapeSvg;
}, "rect_right_inv_arrow");
const cylinder = __1(async (e, t)=>{
    const { shapeSvg, bbox } = await A(e, t, Y(t, undefined), true);
    const i = bbox.width + t.padding;
    const c = i / 2;
    const r = c / (2.5 + i / 50);
    const n = bbox.height + r + t.padding;
    const l = `M 0,${r} a ${c},${r} 0,0,0 ${i} 0 a ${c},${r} 0,0,0 ${-i} 0 l 0,${n} a ${c},${r} 0,0,0 ${i} 0 l 0,${-n}`;
    const g = shapeSvg.attr("label-offset-y", r).insert("path", ":first-child").attr("style", t.style).attr("d", l).attr("transform", `translate(${-i / 2},${-(n / 2 + r)})`);
    I(t, g);
    t.intersect = (h)=>{
        const d = B.rect(t, h);
        const b = d.x - t.x;
        if (c != 0 && (Math.abs(b) < t.width / 2 || Math.abs(b) == t.width / 2 && Math.abs(d.y - t.y) > t.height / 2 - r)) {
            let w = r * r * (1 - b * b / (c * c));
            if (w != 0) {
                w = Math.sqrt(w);
            }
            w = r - w;
            if (h.y - t.y > 0) {
                w = -w;
            }
            d.y += w;
        }
        return d;
    };
    return shapeSvg;
}, "cylinder");
const da = __1(async (e, t)=>{
    const { shapeSvg, bbox, halfPadding } = await A(e, t, `node ${t.classes} ${t.class}`, true);
    const c = shapeSvg.insert("rect", ":first-child");
    const r = t.positioned ? t.width : bbox.width + t.padding;
    const n = t.positioned ? t.height : bbox.height + t.padding;
    const l = t.positioned ? -r / 2 : -bbox.width / 2 - halfPadding;
    const g = t.positioned ? -n / 2 : -bbox.height / 2 - halfPadding;
    c.attr("class", "basic label-container").attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("x", l).attr("y", g).attr("width", r).attr("height", n);
    if (t.props) {
        const h = new Set(Object.keys(t.props));
        if (t.props.borders) {
            ot(c, t.props.borders, r, n);
            h.delete("borders");
        }
        h.forEach((d)=>{
            l_1.warn(`Unknown node property ${d}`);
        });
    }
    I(t, c);
    t.intersect = (h)=>B.rect(t, h);
    return shapeSvg;
}, "rect");
const composite = __1(async (e, t)=>{
    const { shapeSvg, bbox, halfPadding } = await A(e, t, `node ${t.classes}`, true);
    const c = shapeSvg.insert("rect", ":first-child");
    const r = t.positioned ? t.width : bbox.width + t.padding;
    const n = t.positioned ? t.height : bbox.height + t.padding;
    const l = t.positioned ? -r / 2 : -bbox.width / 2 - halfPadding;
    const g = t.positioned ? -n / 2 : -bbox.height / 2 - halfPadding;
    c.attr("class", "basic cluster composite label-container").attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("x", l).attr("y", g).attr("width", r).attr("height", n);
    if (t.props) {
        const h = new Set(Object.keys(t.props));
        if (t.props.borders) {
            ot(c, t.props.borders, r, n);
            h.delete("borders");
        }
        h.forEach((d)=>{
            l_1.warn(`Unknown node property ${d}`);
        });
    }
    I(t, c);
    t.intersect = (h)=>B.rect(t, h);
    return shapeSvg;
}, "composite");
const labelRect = __1(async (e, t)=>{
    const { shapeSvg } = await A(e, t, "label", true);
    l_1.trace("Classes = ", t.class);
    const s = shapeSvg.insert("rect", ":first-child");
    const i = 0;
    const c = 0;
    s.attr("width", i).attr("height", c);
    shapeSvg.attr("class", "label edgeLabel");
    if (t.props) {
        const r = new Set(Object.keys(t.props));
        if (t.props.borders) {
            ot(s, t.props.borders, i, c);
            r.delete("borders");
        }
        r.forEach((n)=>{
            l_1.warn(`Unknown node property ${n}`);
        });
    }
    I(t, s);
    t.intersect = (r)=>B.rect(t, r);
    return shapeSvg;
}, "labelRect");
function ot(e, t, a, s) {
    const i = [];
    const c = __1((n)=>{
        i.push(n, 0);
    }, "addBorder");
    const r = __1((n)=>{
        i.push(0, n);
    }, "skipBorder");
    if (t.includes("t")) {
        l_1.debug("add top border");
        c(a);
    } else {
        r(a);
    }
    if (t.includes("r")) {
        l_1.debug("add right border");
        c(s);
    } else {
        r(s);
    }
    if (t.includes("b")) {
        l_1.debug("add bottom border");
        c(a);
    } else {
        r(a);
    }
    if (t.includes("l")) {
        l_1.debug("add left border");
        c(s);
    } else {
        r(s);
    }
    e.attr("stroke-dasharray", i.join(" "));
}
__1(ot, "applyNodePropertyBorders");
const rectWithTitle = __1(async (e, t)=>{
    let a;
    if (t.classes) {
        a = `node ${t.classes}`;
    } else {
        a = "node default";
    }
    const s = e.insert("g").attr("class", a).attr("id", t.domId || t.id);
    const i = s.insert("rect", ":first-child");
    const c = s.insert("line");
    const r = s.insert("g").attr("class", "label");
    const n = t.labelText.flat ? t.labelText.flat() : t.labelText;
    let l = "";
    if (typeof n === "object") {
        l = n[0];
    } else {
        l = n;
    }
    l_1.info("Label text abc79", l, n, typeof n === "object");
    const g = await K(r, l, t.labelStyle, true, true);
    let h = {
        width: 0,
        height: 0
    };
    if (a_(c_1())) {
        const v = g.children[0];
        const S = d_1(g);
        h = v.getBoundingClientRect();
        S.attr("width", h.width);
        S.attr("height", h.height);
    }
    l_1.info("Text 2", n);
    const d = n.slice(1, n.length);
    let b = g.getBBox();
    const w = await K(r, d.join ? d.join("<br/>") : d, t.labelStyle, true, true);
    if (a_(c_1())) {
        const v = w.children[0];
        const S = d_1(w);
        h = v.getBoundingClientRect();
        S.attr("width", h.width);
        S.attr("height", h.height);
    }
    const y = t.padding / 2;
    d_1(w).attr("transform", `translate( ${h.width > b.width ? 0 : (b.width - h.width) / 2}, ${b.height + y + 5})`);
    d_1(g).attr("transform", `translate( ${h.width < b.width ? 0 : -(b.width - h.width) / 2}, 0)`);
    h = r.node().getBBox();
    r.attr("transform", `translate(${-h.width / 2}, ${-h.height / 2 - y + 3})`);
    i.attr("class", "outer title-state").attr("x", -h.width / 2 - y).attr("y", -h.height / 2 - y).attr("width", h.width + t.padding).attr("height", h.height + t.padding);
    c.attr("class", "divider").attr("x1", -h.width / 2 - y).attr("x2", h.width / 2 + y).attr("y1", -h.height / 2 - y + b.height + y).attr("y2", -h.height / 2 - y + b.height + y);
    I(t, i);
    t.intersect = (v)=>B.rect(t, v);
    return s;
}, "rectWithTitle");
const stadium = __1(async (e, t)=>{
    const { shapeSvg, bbox } = await A(e, t, Y(t, undefined), true);
    const i = bbox.height + t.padding;
    const c = bbox.width + i / 4 + t.padding;
    const r = shapeSvg.insert("rect", ":first-child").attr("style", t.style).attr("rx", i / 2).attr("ry", i / 2).attr("x", -c / 2).attr("y", -i / 2).attr("width", c).attr("height", i);
    I(t, r);
    t.intersect = (n)=>B.rect(t, n);
    return shapeSvg;
}, "stadium");
const ba = __1(async (e, t)=>{
    const { shapeSvg, bbox, halfPadding } = await A(e, t, Y(t, undefined), true);
    const c = shapeSvg.insert("circle", ":first-child");
    c.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", bbox.width / 2 + halfPadding).attr("width", bbox.width + t.padding).attr("height", bbox.height + t.padding);
    l_1.info("Circle main");
    I(t, c);
    t.intersect = (r)=>{
        l_1.info("Circle intersect", t, bbox.width / 2 + halfPadding, r);
        return B.circle(t, bbox.width / 2 + halfPadding, r);
    };
    return shapeSvg;
}, "circle");
const doublecircle = __1(async (e, t)=>{
    const { shapeSvg, bbox, halfPadding } = await A(e, t, Y(t, undefined), true);
    const c = 5;
    const r = shapeSvg.insert("g", ":first-child");
    const n = r.insert("circle");
    const l = r.insert("circle");
    r.attr("class", t.class);
    n.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", bbox.width / 2 + halfPadding + c).attr("width", bbox.width + t.padding + c * 2).attr("height", bbox.height + t.padding + c * 2);
    l.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", bbox.width / 2 + halfPadding).attr("width", bbox.width + t.padding).attr("height", bbox.height + t.padding);
    l_1.info("DoubleCircle main");
    I(t, n);
    t.intersect = (g)=>{
        l_1.info("DoubleCircle intersect", t, bbox.width / 2 + halfPadding + c, g);
        return B.circle(t, bbox.width / 2 + halfPadding + c, g);
    };
    return shapeSvg;
}, "doublecircle");
const subroutine = __1(async (e, t)=>{
    const { shapeSvg, bbox } = await A(e, t, Y(t, undefined), true);
    const i = bbox.width + t.padding;
    const c = bbox.height + t.padding;
    const r = [
        {
            x: 0,
            y: 0
        },
        {
            x: i,
            y: 0
        },
        {
            x: i,
            y: -c
        },
        {
            x: 0,
            y: -c
        },
        {
            x: 0,
            y: 0
        },
        {
            x: -8,
            y: 0
        },
        {
            x: i + 8,
            y: 0
        },
        {
            x: i + 8,
            y: -c
        },
        {
            x: -8,
            y: -c
        },
        {
            x: -8,
            y: 0
        }
    ];
    const n = X(shapeSvg, i, c, r);
    n.attr("style", t.style);
    I(t, n);
    t.intersect = (l)=>B.polygon(t, r, l);
    return shapeSvg;
}, "subroutine");
const start = __1((e, t)=>{
    const a = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
    const s = a.insert("circle", ":first-child");
    s.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    I(t, s);
    t.intersect = (i)=>B.circle(t, 7, i);
    return a;
}, "start");
const Ht = __1((e, t, a)=>{
    const s = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
    let i = 70;
    let c = 10;
    if (a === "LR") {
        i = 10;
        c = 70;
    }
    const r = s.append("rect").attr("x", -1 * i / 2).attr("y", -1 * c / 2).attr("width", i).attr("height", c).attr("class", "fork-join");
    I(t, r);
    t.height = t.height + t.padding / 2;
    t.width = t.width + t.padding / 2;
    t.intersect = (n)=>B.rect(t, n);
    return s;
}, "forkJoin");
const end = __1((e, t)=>{
    const a = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
    const s = a.insert("circle", ":first-child");
    const i = a.insert("circle", ":first-child");
    i.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    s.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10);
    I(t, i);
    t.intersect = (c)=>B.circle(t, 7, c);
    return a;
}, "end");
const class_box = __1(async (e, t)=>{
    const a = t.padding / 2;
    const s = 4;
    const i = 8;
    let c;
    if (t.classes) {
        c = `node ${t.classes}`;
    } else {
        c = "node default";
    }
    const r = e.insert("g").attr("class", c).attr("id", t.domId || t.id);
    const n = r.insert("rect", ":first-child");
    const l = r.insert("line");
    const g = r.insert("line");
    let h = 0;
    let d = s;
    const b = r.insert("g").attr("class", "label");
    let w = 0;
    const y = t.classData.annotations?.[0];
    const v = t.classData.annotations[0] ? `«${t.classData.annotations[0]}»` : "";
    const S = await K(b, v, t.labelStyle, true, true);
    let N = S.getBBox();
    if (a_(c_1())) {
        const E = S.children[0];
        const o = d_1(S);
        N = E.getBoundingClientRect();
        o.attr("width", N.width);
        o.attr("height", N.height);
    }
    if (t.classData.annotations[0]) {
        d += N.height + s;
        h += N.width;
    }
    let label = t.classData.label;
    t.classData.type !== undefined && t.classData.type !== "" && (a_(c_1()) ? label += `&lt;${t.classData.type}&gt;` : label += `<${t.classData.type}>`);
    const T = await K(b, label, t.labelStyle, true, true);
    d_1(T).attr("class", "classTitle");
    let m = T.getBBox();
    if (a_(c_1())) {
        const E = T.children[0];
        const o = d_1(T);
        m = E.getBoundingClientRect();
        o.attr("width", m.width);
        o.attr("height", m.height);
    }
    d += m.height + s;
    if (m.width > h) {
        h = m.width;
    }
    const p = [];
    t.classData.members.forEach(async (E)=>{
        const o = E.getDisplayDetails();
        let o_displayText = o.displayText;
        if (a_(c_1())) {
            o_displayText = o_displayText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
        const f = await K(b, o_displayText, o.cssStyle ? o.cssStyle : t.labelStyle, true, true);
        let C = f.getBBox();
        if (a_(c_1())) {
            const j = f.children[0];
            const V = d_1(f);
            C = j.getBoundingClientRect();
            V.attr("width", C.width);
            V.attr("height", C.height);
        }
        if (C.width > h) {
            h = C.width;
        }
        d += C.height + s;
        p.push(f);
    });
    d += i;
    const x = [];
    t.classData.methods.forEach(async (E)=>{
        const o = E.getDisplayDetails();
        let o_displayText = o.displayText;
        if (a_(c_1())) {
            o_displayText = o_displayText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
        const f = await K(b, o_displayText, o.cssStyle ? o.cssStyle : t.labelStyle, true, true);
        let C = f.getBBox();
        if (a_(c_1())) {
            const j = f.children[0];
            const V = d_1(f);
            C = j.getBoundingClientRect();
            V.attr("width", C.width);
            V.attr("height", C.height);
        }
        if (C.width > h) {
            h = C.width;
        }
        d += C.height + s;
        x.push(f);
    });
    d += i;
    if (y) {
        let E = (h - N.width) / 2;
        d_1(S).attr("transform", `translate( ${-1 * h / 2 + E}, ${-1 * d / 2})`);
        w = N.height + s;
    }
    let L = (h - m.width) / 2;
    d_1(T).attr("transform", `translate( ${-1 * h / 2 + L}, ${-1 * d / 2 + w})`);
    w += m.height + s;
    l.attr("class", "divider").attr("x1", -h / 2 - a).attr("x2", h / 2 + a).attr("y1", -d / 2 - a + i + w).attr("y2", -d / 2 - a + i + w);
    w += i;
    p.forEach((E)=>{
        d_1(E).attr("transform", `translate( ${-h / 2}, ${-1 * d / 2 + w + i / 2})`);
        const o = E?.getBBox();
        w += (o?.height ?? 0) + s;
    });
    w += i;
    g.attr("class", "divider").attr("x1", -h / 2 - a).attr("x2", h / 2 + a).attr("y1", -d / 2 - a + i + w).attr("y2", -d / 2 - a + i + w);
    w += i;
    x.forEach((E)=>{
        d_1(E).attr("transform", `translate( ${-h / 2}, ${-1 * d / 2 + w})`);
        const o = E?.getBBox();
        w += (o?.height ?? 0) + s;
    });
    n.attr("style", t.style).attr("class", "outer title-state").attr("x", -h / 2 - a).attr("y", -(d / 2) - a).attr("width", h + t.padding).attr("height", d + t.padding);
    I(t, n);
    t.intersect = (E)=>B.rect(t, E);
    return r;
}, "class_box");
const Kt = {
    rhombus: Yt,
    composite,
    question: Yt,
    rect: da,
    labelRect,
    rectWithTitle,
    choice,
    circle: ba,
    doublecircle,
    stadium,
    hexagon,
    block_arrow,
    rect_left_inv_arrow,
    lean_right,
    lean_left,
    trapezoid,
    inv_trapezoid,
    rect_right_inv_arrow,
    cylinder,
    start,
    end,
    note,
    subroutine,
    fork: Ht,
    join: Ht,
    class_box
};
const nt = {};
const xe = __1(async (e, t, a)=>{
    let s;
    let i;
    if (t.link) {
        let c;
        if (c_1().securityLevel === "sandbox") {
            c = "_top";
        } else if (t.linkTarget) {
            c = t.linkTarget || "_blank";
        }
        s = e.insert("svg:a").attr("xlink:href", t.link).attr("target", c);
        i = await Kt[t.shape](s, t, a);
    } else {
        i = await Kt[t.shape](e, t, a);
        s = i;
    }
    if (t.tooltip) {
        i.attr("title", t.tooltip);
    }
    if (t.class) {
        i.attr("class", `node default ${t.class}`);
    }
    nt[t.id] = s;
    if (t.haveCallback) {
        nt[t.id].attr("class", `${nt[t.id].attr("class")} clickable`);
    }
    return s;
}, "insertNode");
const va = __1((e)=>{
    const t = nt[e.id];
    l_1.trace("Transforming node", e.diff, e, `translate(${e.x - e.width / 2 - 5}, ${e.width / 2})`);
    const a = 8;
    const s = e.diff || 0;
    if (e.clusterNode) {
        t.attr("transform", `translate(${e.x + s - e.width / 2}, ${e.y - e.height / 2 - a})`);
    } else {
        t.attr("transform", `translate(${e.x}, ${e.y})`);
    }
    return s;
}, "positionNode");
function Nt(e, t, positioned = false) {
    const s = e;
    let i = "default";
    if ((s?.classes?.length || 0) > 0) {
        i = (s?.classes ?? []).join(" ");
    }
    i = `${i} flowchart-label`;
    let c = 0;
    let shape = "";
    let n;
    switch(s.type){
        case "round":
            c = 5;
            shape = "rect";
            break;
        case "composite":
            c = 0;
            shape = "composite";
            n = 0;
            break;
        case "square":
            shape = "rect";
            break;
        case "diamond":
            shape = "question";
            break;
        case "hexagon":
            shape = "hexagon";
            break;
        case "block_arrow":
            shape = "block_arrow";
            break;
        case "odd":
            shape = "rect_left_inv_arrow";
            break;
        case "lean_right":
            shape = "lean_right";
            break;
        case "lean_left":
            shape = "lean_left";
            break;
        case "trapezoid":
            shape = "trapezoid";
            break;
        case "inv_trapezoid":
            shape = "inv_trapezoid";
            break;
        case "rect_left_inv_arrow":
            shape = "rect_left_inv_arrow";
            break;
        case "circle":
            shape = "circle";
            break;
        case "ellipse":
            shape = "ellipse";
            break;
        case "stadium":
            shape = "stadium";
            break;
        case "subroutine":
            shape = "subroutine";
            break;
        case "cylinder":
            shape = "cylinder";
            break;
        case "group":
            shape = "rect";
            break;
        case "doublecircle":
            shape = "doublecircle";
            break;
        default:
            shape = "rect";
    }
    const l = b1(s?.styles ?? []);
    const s_label = s.label;
    const h = s.size ?? {
        width: 0,
        height: 0,
        x: 0,
        y: 0
    };
    const d = t.getDiagramId();
    return {
        labelStyle: l.labelStyle,
        shape,
        labelText: s_label,
        rx: c,
        ry: c,
        class: i,
        style: l.style,
        id: s.id,
        domId: d ? `${d}-${s.id}` : s.id,
        directions: s.directions,
        width: h.width,
        height: h.height,
        x: h.x,
        y: h.y,
        positioned,
        intersect: undefined,
        type: s.type,
        padding: n ?? z_1()?.block?.padding ?? 0,
        widthInColumns: s.widthInColumns ?? 1
    };
}
__1(Nt, "getNodeFromBlock");
async function ye(e, t, a) {
    const s = Nt(t, a, false);
    if (s.type === "group") {
        return;
    }
    const i = z_1();
    const node_1 = await xe(e, s, {
        config: i
    });
    const r = node_1.node().getBBox();
    const n = a.getBlock(s.id);
    n.size = {
        width: r.width,
        height: r.height,
        x: 0,
        y: 0,
        node: node_1
    };
    a.setBlock(n);
    node_1.remove();
}
__1(ye, "calculateBlockSize");
async function be(e, t, a) {
    const s = Nt(t, a, true);
    if (a.getBlock(s.id).type !== "space") {
        const c = z_1();
        await xe(e, s, {
            config: c
        });
        t.intersect = s?.intersect;
        va(s);
    }
}
__1(be, "insertBlockPositioned");
async function ht(e, t, a, s) {
    for (const i of t){
        await s(e, i, a);
        if (i.children) {
            await ht(e, i.children, a, s);
        }
    }
}
__1(ht, "performOperations");
async function we(e, t, a) {
    await ht(e, t, a, ye);
}
__1(we, "calculateBlockSizes");
async function me(e, t, a) {
    await ht(e, t, a, be);
}
__1(me, "insertBlocks");
async function Se(e, t, a, s, i) {
    const c = new G({
        multigraph: true,
        compound: true
    });
    c.setGraph({
        rankdir: "TB",
        nodesep: 10,
        ranksep: 10,
        marginx: 8,
        marginy: 8
    });
    for (const r of a){
        if (r.size) {
            c.setNode(r.id, {
                width: r.size.width,
                height: r.size.height,
                intersect: r.intersect
            });
        }
    }
    for (const r of t){
        if (r.start && r.end) {
            const n = s.getBlock(r.start);
            const l = s.getBlock(r.end);
            if (n?.size && l?.size) {
                const g = n.size;
                const h = l.size;
                const d = [
                    {
                        x: g.x,
                        y: g.y
                    },
                    {
                        x: g.x + (h.x - g.x) / 2,
                        y: g.y + (h.y - g.y) / 2
                    },
                    {
                        x: h.x,
                        y: h.y
                    }
                ];
                const b = i ? `${i}-${r.id}` : r.id;
                const w = r.thickness === "thick" ? "edge-thickness-thick" : "edge-thickness-normal";
                const y = r.pattern === "dotted" ? "edge-pattern-dotted" : "edge-pattern-solid";
                const classes = `${w} ${y} flowchart-link LS-a1 LE-b1`;
                Vr(e, {
                    v: r.start,
                    w: r.end,
                    name: b
                }, {
                    ...r,
                    id: b,
                    arrowTypeEnd: r.arrowTypeEnd,
                    arrowTypeStart: r.arrowTypeStart,
                    points: d,
                    classes
                }, undefined, "block", c, i);
                if (r.label) {
                    await Hr(e, {
                        ...r,
                        label: r.label,
                        labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
                        arrowTypeEnd: r.arrowTypeEnd,
                        arrowTypeStart: r.arrowTypeStart,
                        points: d,
                        classes
                    });
                    Kr({
                        ...r,
                        x: d[1].x,
                        y: d[1].y
                    }, {
                        originalPath: d
                    });
                }
            }
        }
    }
}
__1(Se, "insertEdges");
const Ea = __1((e, t)=>t.db.getClasses(), "getClasses");
const draw = __1(async (e, t, a, s)=>{
    const { securityLevel, block } = z_1();
    const r = s.db;
    r.setDiagramId(t);
    let n;
    if (securityLevel === "sandbox") {
        n = d_1(`#i${t}`);
    }
    const l = securityLevel === "sandbox" ? d_1(n.nodes()[0].contentDocument.body) : d_1("body");
    const g = securityLevel === "sandbox" ? l.select(`[id="${t}"]`) : d_1(`[id="${t}"]`);
    Mr(g, [
        "point",
        "circle",
        "cross"
    ], s.type, t);
    const d = r.getBlocks();
    const b = r.getBlocksFlat();
    const w = r.getEdges();
    const y = g.insert("g").attr("class", "block");
    await we(y, d, r);
    const v = oe(r);
    await me(y, d, r);
    await Se(y, w, b, r, t);
    if (v) {
        const S = v;
        const N = Math.max(1, Math.round(0.125 * (S.width / S.height)));
        const _ = S.height + N + 10;
        const T = S.width + 10;
        const { useMaxWidth } = block;
        e_1(g, _, T, !!useMaxWidth);
        l_1.debug("Here Bounds", v, S);
        g.attr("viewBox", `${S.x - 5} ${S.y - 5} ${S.width + 10} ${S.height + 10}`);
    }
}, "draw");
const renderer = {
    draw,
    getClasses: Ea
};
export const diagram = {
    parser,
    db,
    renderer,
    styles
};
