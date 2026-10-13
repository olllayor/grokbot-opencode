import { a4, j, c as c_1, r as r_1, _ } from "./index.eager-vendor-Qbf9YA6n.js";
import { s, h, w, f, a as a_1, b as b_1, c as c_2 } from "./chunk-index-C0dBjfzC.js";
import { a_ as Xi1, c as c_3, i as i_1 } from "./index.eager-platform-Dcfeegfw.js";
import { ji as ji_1, r as r_2, d0 } from "./index.eager-app-Cj5f8Gby.js";
import { c9 } from "./index-ZYxf-aBb.js";
import { i as i_2 } from "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "e5fab1bb-c8ee-418a-8032-7e4286e2269b";
            e._sentryDebugIdIdentifier = "sentry-dbid-e5fab1bb-c8ee-418a-8032-7e4286e2269b";
        }
    } catch (e) {}
})();
const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = [
    "./chunk-markdown-math-katex-D30cPtUu.js",
    "./chunk-katex-CBoxBzRj.js",
    "./markdown-math-katex-DijbQiNo.css"
]))=>i.map((i)=>d[i]);
const Ci = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink"
};
const Ei = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
const Ii = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
const Ti = {};
function en(e, t) {
    return (Ti.jsx ? Ii : Ei).test(e);
}
const Se = {};
let rt;
let tn;
function Ai() {
    if (tn) {
        return rt;
    }
    tn = 1;
    const e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
    const t = /\n/g;
    const n = /^\s*/;
    const r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
    const i = /^:\s*/;
    const a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
    const l = /^[;\s]*/;
    const u = /^\s+|\s+$/g;
    const o = `
`;
    const s = "/";
    const c = "*";
    const f = "";
    const p = "comment";
    const h = "declaration";
    rt = (x, C)=>{
        if (typeof x !== "string") {
            throw new TypeError("First argument must be a string");
        }
        if (!x) {
            return [];
        }
        C = C || {};
        let line = 1;
        let column = 1;
        function E(F) {
            const A = F.match(t);
            if (A) {
                line += A.length;
            }
            const P = F.lastIndexOf(o);
            column = ~P ? F.length - P : column + F.length;
        }
        function D() {
            const F = {
                line,
                column
            };
            return (A)=>{
                A.position = new v(F);
                $();
                return A;
            };
        }
        function v(F) {
            this.start = F;
            this.end = {
                line,
                column
            };
            this.source = C.source;
        }
        v.prototype.content = x;
        function S(F) {
            const A = new Error(`${C.source}:${line}:${column}: ${F}`);
            A.reason = F;
            A.filename = C.source;
            A.line = line;
            A.column = column;
            A.source = x;
            if (!C.silent) {
                throw A;
            }
        }
        function M(F) {
            const A = F.exec(x);
            if (A) {
                const P = A[0];
                E(P);
                x = x.slice(P.length);
                return A;
            }
        }
        function $() {
            M(n);
        }
        function q(F) {
            let A;
            for(F = F || []; A = y();){
                if (A !== false) {
                    F.push(A);
                }
            }
            return F;
        }
        function y() {
            const F = D();
            if (!(s != x.charAt(0) || c != x.charAt(1))) {
                for(var A = 2; f != x.charAt(A) && (c != x.charAt(A) || s != x.charAt(A + 1));){
                    ++A;
                }
                A += 2;
                if (f === x.charAt(A - 1)) {
                    return S("End of comment missing");
                }
                const comment = x.slice(2, A - 2);
                column += 2;
                E(comment);
                x = x.slice(A);
                column += 2;
                return F({
                    type: p,
                    comment
                });
            }
        }
        function k() {
            const F = D();
            const A = M(r);
            if (A) {
                y();
                if (!M(i)) {
                    return S("property missing ':'");
                }
                const P = M(a);
                const H = F({
                    type: h,
                    property: d(A[0].replace(e, f)),
                    value: P ? d(P[0].replace(e, f)) : f
                });
                M(l);
                return H;
            }
        }
        function _() {
            const F = [];
            q(F);
            let A;
            while(A = k()){
                if (A !== false) {
                    F.push(A);
                    q(F);
                }
            }
            return F;
        }
        $();
        return _();
    };
    function d(x) {
        if (x) {
            return x.replace(u, f);
        }
        return f;
    }
    return rt;
}
let nn;
function Fi() {
    if (nn) {
        return Se;
    }
    nn = 1;
    const e = Se && Se.__importDefault || ((r)=>{
        if (r && r.__esModule) {
            return r;
        }
        return {
            default: r
        };
    });
    Object.defineProperty(Se, "__esModule", {
        value: true
    });
    Se.default = n;
    var t = e(Ai());
    function n(r, i) {
        let a = null;
        if (!r || typeof r !== "string") {
            return a;
        }
        const l = t.default(r);
        const u = typeof i === "function";
        l.forEach((o)=>{
            if (o.type === "declaration") {
                const { property, value } = o;
                if (u) {
                    i(property, value, o);
                } else if (value) {
                    a = a || {};
                    a[property] = value;
                }
            }
        });
        return a;
    }
    return Se;
}
const _e = {};
let rn;
function zi() {
    if (rn) {
        return _e;
    }
    rn = 1;
    Object.defineProperty(_e, "__esModule", {
        value: true
    });
    _e.camelCase = undefined;
    const e = /^--[a-zA-Z0-9_-]+$/;
    const t = /-([a-z])/g;
    const n = /^[^-]+$/;
    const r = /^-(webkit|moz|ms|o|khtml)-/;
    const i = /^-(ms)-/;
    const a = (s)=>!s || n.test(s) || e.test(s);
    const l = (s, c)=>c.toUpperCase();
    const u = (s, c)=>`${c}-`;
    const o = (s, c = {})=>{
        if (a(s)) {
            return s;
        }
        s = s.toLowerCase();
        if (c.reactCompat) {
            s = s.replace(i, u);
        } else {
            s = s.replace(r, u);
        }
        return s.replace(t, l);
    };
    _e.camelCase = o;
    return _e;
}
let Pe;
let ln;
function _i() {
    if (ln) {
        return Pe;
    }
    ln = 1;
    const e = Pe && Pe.__importDefault || ((i)=>{
        if (i && i.__esModule) {
            return i;
        }
        return {
            default: i
        };
    });
    const t = e(Fi());
    const n = zi();
    function r(i, a) {
        const l = {};
        if (!(!i || typeof i !== "string")) {
            t.default(i, (u, o)=>{
                if (u && o) {
                    l[n.camelCase(u, a)] = o;
                }
            });
        }
        return l;
    }
    r.default = r;
    Pe = r;
    return Pe;
}
const Pi = _i();
const Di = a4(Pi);
const Gn = Yn("end");
const Dt = Yn("start");
function Yn(e) {
    return t;
    function t(n) {
        const r = n && n.position && n.position[e] || {};
        if (typeof r.line === "number" && r.line > 0 && typeof r.column === "number" && r.column > 0) {
            return {
                line: r.line,
                column: r.column,
                offset: typeof r.offset === "number" && r.offset > -1 ? r.offset : undefined
            };
        }
    }
}
function Li(e) {
    const t = Dt(e);
    const n = Gn(e);
    if (t && n) {
        return {
            start: t,
            end: n
        };
    }
}
function Me(e) {
    if (!e || typeof e !== "object") {
        return "";
    }
    if ("position" in e || "type" in e) {
        return an(e.position);
    }
    if ("start" in e || "end" in e) {
        return an(e);
    }
    if ("line" in e || "column" in e) {
        return yt(e);
    }
    return "";
}
function yt(e) {
    return `${un(e && e.line)}:${un(e && e.column)}`;
}
function an(e) {
    return `${yt(e && e.start)}-${yt(e && e.end)}`;
}
function un(e) {
    if (e && typeof e === "number") {
        return e;
    }
    return 1;
}
class G extends Error {
    constructor(t, place, r){
        super();
        if (typeof place === "string") {
            r = place;
            place = undefined;
        }
        let i = "";
        let a = {};
        let l = false;
        place && ("line" in place && "column" in place ? a = {
            place
        } : "start" in place && "end" in place ? a = {
            place
        } : "type" in place ? a = {
            ancestors: [
                place
            ],
            place: place.position
        } : a = {
            ...place
        });
        if (typeof t === "string") {
            i = t;
        } else if (!a.cause && t) {
            l = true;
            i = t.message;
            a.cause = t;
        }
        if (!a.ruleId && !a.source && typeof r === "string") {
            const o = r.indexOf(":");
            if (o === -1) {
                a.ruleId = r;
            } else {
                a.source = r.slice(0, o);
                a.ruleId = r.slice(o + 1);
            }
        }
        if (!a.place && a.ancestors && a.ancestors) {
            const o = a.ancestors[a.ancestors.length - 1];
            if (o) {
                a.place = o.position;
            }
        }
        const u = a.place && "start" in a.place ? a.place.start : a.place;
        this.ancestors = a.ancestors || undefined;
        this.cause = a.cause || undefined;
        this.column = u ? u.column : undefined;
        this.fatal = undefined;
        this.file;
        this.message = i;
        this.line = u ? u.line : undefined;
        this.name = Me(a.place) || "1:1";
        this.place = a.place || undefined;
        this.reason = this.message;
        this.ruleId = a.ruleId || undefined;
        this.source = a.source || undefined;
        this.stack = l && a.cause && typeof a.cause.stack === "string" ? a.cause.stack : "";
        this.actual;
        this.expected;
        this.note;
        this.url;
    }
}
G.prototype.file = "";
G.prototype.name = "";
G.prototype.reason = "";
G.prototype.message = "";
G.prototype.stack = "";
G.prototype.column = undefined;
G.prototype.line = undefined;
G.prototype.ancestors = undefined;
G.prototype.cause = undefined;
G.prototype.fatal = undefined;
G.prototype.place = undefined;
G.prototype.ruleId = undefined;
G.prototype.source = undefined;
const hasOwnProperty = {}.hasOwnProperty;
const Mi = new Map;
const Ni = /[A-Z]/g;
const Ri = new Set([
    "table",
    "tbody",
    "thead",
    "tfoot",
    "tr"
]);
const vi = new Set([
    "td",
    "th"
]);
const Xn = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Oi(e, t) {
    if (!t || t.Fragment === undefined) {
        throw new TypeError("Expected `Fragment` in options");
    }
    const filePath = t.filePath || undefined;
    let create;
    if (t.development) {
        if (typeof t.jsxDEV !== "function") {
            throw new TypeError("Expected `jsxDEV` in options when `development: true`");
        }
        create = Wi(filePath, t.jsxDEV);
    } else {
        if (typeof t.jsx !== "function") {
            throw new TypeError("Expected `jsx` in production options");
        }
        if (typeof t.jsxs !== "function") {
            throw new TypeError("Expected `jsxs` in production options");
        }
        create = Ui(filePath, t.jsx, t.jsxs);
    }
    const i = {
        Fragment: t.Fragment,
        ancestors: [],
        components: t.components || {},
        create,
        elementAttributeNameCase: t.elementAttributeNameCase || "react",
        evaluater: t.createEvaluater ? t.createEvaluater() : undefined,
        filePath,
        ignoreInvalidStyle: t.ignoreInvalidStyle || false,
        passKeys: t.passKeys !== false,
        passNode: t.passNode || false,
        schema: t.space === "svg" ? s : h,
        stylePropertyNameCase: t.stylePropertyNameCase || "dom",
        tableCellAlignToStyle: t.tableCellAlignToStyle !== false
    };
    const a = Jn(i, e, undefined);
    if (a && typeof a !== "string") {
        return a;
    }
    return i.create(e, i.Fragment, {
        children: a || undefined
    }, undefined);
}
function Jn(e, t, n) {
    if (t.type === "element") {
        return Bi(e, t, n);
    }
    if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") {
        return ji(e, t);
    }
    if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") {
        return $i(e, t, n);
    }
    if (t.type === "mdxjsEsm") {
        return qi(e, t);
    }
    if (t.type === "root") {
        return Hi(e, t, n);
    }
    if (t.type === "text") {
        return Vi(e, t);
    }
}
function Bi(e, t, n) {
    const e_schema = e.schema;
    let i = e_schema;
    if (t.tagName.toLowerCase() === "svg" && e_schema.space === "html") {
        i = s;
        e.schema = i;
    }
    e.ancestors.push(t);
    const a = Zn(e, t.tagName, false);
    const l = Qi(e, t);
    let u = Nt(e, t);
    if (Ri.has(t.tagName)) {
        u = u.filter((o)=>{
            if (typeof o === "string") {
                return !w(o);
            }
            return true;
        });
    }
    Kn(e, l, a, t);
    Mt(l, u);
    e.ancestors.pop();
    e.schema = e_schema;
    return e.create(t, a, l, n);
}
function ji(e, t) {
    if (t.data && t.data.estree && e.evaluater) {
        const r = t.data.estree.body[0];
        r.type;
        return e.evaluater.evaluateExpression(r.expression);
    }
    ve(e, t.position);
}
function qi(e, t) {
    if (t.data && t.data.estree && e.evaluater) {
        return e.evaluater.evaluateProgram(t.data.estree);
    }
    ve(e, t.position);
}
function $i(e, t, n) {
    const e_schema = e.schema;
    let i = e_schema;
    if (t.name === "svg" && e_schema.space === "html") {
        i = s;
        e.schema = i;
    }
    e.ancestors.push(t);
    const a = t.name === null ? e.Fragment : Zn(e, t.name, true);
    const l = Gi(e, t);
    const u = Nt(e, t);
    Kn(e, l, a, t);
    Mt(l, u);
    e.ancestors.pop();
    e.schema = e_schema;
    return e.create(t, a, l, n);
}
function Hi(e, t, n) {
    const r = {};
    Mt(r, Nt(e, t));
    return e.create(t, e.Fragment, r, n);
}
function Vi(e, t) {
    return t.value;
}
function Kn(e, t, n, r) {
    if (typeof n !== "string" && n !== e.Fragment && e.passNode) {
        t.node = r;
    }
}
function Mt(e, t) {
    if (t.length > 0) {
        const n = t.length > 1 ? t : t[0];
        if (n) {
            e.children = n;
        }
    }
}
function Ui(e, jsx, jsxs) {
    return r;
    function r(i, a, l, u) {
        const s = Array.isArray(l.children) ? jsxs : jsx;
        if (u) {
            return s(a, l, u);
        }
        return s(a, l);
    }
}
function Wi(fileName, jsxDEV) {
    return n;
    function n(r, i, a, l) {
        const u = Array.isArray(a.children);
        const o = Dt(r);
        return jsxDEV(i, a, l, u, {
            columnNumber: o ? o.column - 1 : undefined,
            fileName,
            lineNumber: o ? o.line : undefined
        }, undefined);
    }
}
function Qi(e, t) {
    const n = {};
    let r;
    let i;
    for(i in t.properties){
        if (i !== "children" && hasOwnProperty.call(t.properties, i)) {
            const a = Yi(e, i, t.properties[i]);
            if (a) {
                const [l, u] = a;
                if (e.tableCellAlignToStyle && l === "align" && typeof u === "string" && vi.has(t.tagName)) {
                    r = u;
                } else {
                    n[l] = u;
                }
            }
        }
    }
    if (r) {
        const a = n.style || (n.style = {});
        a[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
    }
    return n;
}
function Gi(e, t) {
    const n = {};
    for (const r of t.attributes){
        if (r.type === "mdxJsxExpressionAttribute") {
            if (r.data && r.data.estree && e.evaluater) {
                const a = r.data.estree.body[0];
                a.type;
                const l = a.expression;
                l.type;
                const u = l.properties[0];
                u.type;
                Object.assign(n, e.evaluater.evaluateExpression(u.argument));
            } else {
                ve(e, t.position);
            }
        } else {
            const i = r.name;
            let a;
            if (r.value && typeof r.value === "object") {
                if (r.value.data && r.value.data.estree && e.evaluater) {
                    const u = r.value.data.estree.body[0];
                    u.type;
                    a = e.evaluater.evaluateExpression(u.expression);
                } else {
                    ve(e, t.position);
                }
            } else {
                a = r.value === null ? true : r.value;
            }
            n[i] = a;
        }
    }
    return n;
}
function Nt(e, t) {
    const n = [];
    let r = -1;
    const i = e.passKeys ? new Map : Mi;
    while(++r < t.children.length){
        const a = t.children[r];
        let l;
        if (e.passKeys) {
            const o = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : undefined;
            if (o) {
                const s = i.get(o) || 0;
                l = `${o}-${s}`;
                i.set(o, s + 1);
            }
        }
        const u = Jn(e, a, l);
        if (u !== undefined) {
            n.push(u);
        }
    }
    return n;
}
function Yi(e, t, n) {
    const r = f(e.schema, t);
    if (!(n == null || typeof n === "number" && Number.isNaN(n))) {
        if (Array.isArray(n)) {
            n = r.commaSeparated ? a_1(n) : b_1(n);
        }
        if (r.property === "style") {
            let i = typeof n === "object" ? n : Xi(e, String(n));
            if (e.stylePropertyNameCase === "css") {
                i = Ji(i);
            }
            return [
                "style",
                i
            ];
        }
        return [
            e.elementAttributeNameCase === "react" && r.space ? Ci[r.property] || r.property : r.attribute,
            n
        ];
    }
}
function Xi(e, t) {
    try {
        return Di(t, {
            reactCompat: true
        });
    } catch (cause) {
        if (e.ignoreInvalidStyle) {
            return {};
        }
        const i = new G("Cannot parse `style` attribute", {
            ancestors: e.ancestors,
            cause,
            ruleId: "style",
            source: "hast-util-to-jsx-runtime"
        });
        i.file = e.filePath || undefined;
        i.url = `${Xn}#cannot-parse-style-attribute`;
        throw i;
    }
}
function Zn(e, t, n) {
    let r;
    if (!n) {
        r = {
            type: "Literal",
            value: t
        };
    } else if (t.includes(".")) {
        const i = t.split(".");
        let a = -1;
        let object;
        while(++a < i.length){
            const property = en(i[a]) ? {
                type: "Identifier",
                name: i[a]
            } : {
                type: "Literal",
                value: i[a]
            };
            object = object ? {
                type: "MemberExpression",
                object,
                property,
                computed: !!(a && property.type === "Literal"),
                optional: false
            } : property;
        }
        r = object;
    } else {
        r = en(t) && !/^[a-z]/.test(t) ? {
            type: "Identifier",
            name: t
        } : {
            type: "Literal",
            value: t
        };
    }
    if (r.type === "Literal") {
        const i = r.value;
        if (hasOwnProperty.call(e.components, i)) {
            return e.components[i];
        }
        return i;
    }
    if (e.evaluater) {
        return e.evaluater.evaluateExpression(r);
    }
    ve(e);
}
function ve(e, place) {
    const n = new G("Cannot handle MDX estrees without `createEvaluater`", {
        ancestors: e.ancestors,
        place,
        ruleId: "mdx-estree",
        source: "hast-util-to-jsx-runtime"
    });
    n.file = e.filePath || undefined;
    n.url = `${Xn}#cannot-handle-mdx-estrees-without-createevaluater`;
    throw n;
}
function Ji(e) {
    const t = {};
    let n;
    for(n in e){
        if (hasOwnProperty.call(e, n)) {
            t[Ki(n)] = e[n];
        }
    }
    return t;
}
function Ki(e) {
    let t = e.replace(Ni, Zi);
    if (t.slice(0, 3) === "ms-") {
        t = `-${t}`;
    }
    return t;
}
function Zi(e) {
    return `-${e.toLowerCase()}`;
}
const it = {
    action: [
        "form"
    ],
    cite: [
        "blockquote",
        "del",
        "ins",
        "q"
    ],
    data: [
        "object"
    ],
    formAction: [
        "button",
        "input"
    ],
    href: [
        "a",
        "area",
        "base",
        "link"
    ],
    icon: [
        "menuitem"
    ],
    itemId: null,
    manifest: [
        "html"
    ],
    ping: [
        "a",
        "area"
    ],
    poster: [
        "video"
    ],
    src: [
        "audio",
        "embed",
        "iframe",
        "img",
        "input",
        "script",
        "source",
        "track",
        "video"
    ]
};
const el = {};
function Rt(e, t) {
    const n = el;
    const r = typeof n.includeImageAlt === "boolean" ? n.includeImageAlt : true;
    const i = typeof n.includeHtml === "boolean" ? n.includeHtml : true;
    return er(e, r, i);
}
function er(e, t, n) {
    if (tl(e)) {
        if ("value" in e) {
            if (e.type === "html" && !n) {
                return "";
            }
            return e.value;
        }
        if (t && "alt" in e && e.alt) {
            return e.alt;
        }
        if ("children" in e) {
            return on(e.children, t, n);
        }
    }
    if (Array.isArray(e)) {
        return on(e, t, n);
    }
    return "";
}
function on(e, t, n) {
    const r = [];
    let i = -1;
    while(++i < e.length){
        r[i] = er(e[i], t, n);
    }
    return r.join("");
}
function tl(e) {
    return !!(e && typeof e === "object");
}
const sn = document.createElement("i");
function vt(e) {
    const t = `&${e};`;
    sn.innerHTML = t;
    const sn_textContent = sn.textContent;
    if (sn_textContent.charCodeAt(sn_textContent.length - 1) === 59 && e !== "semi" || sn_textContent === t) {
        return false;
    }
    return sn_textContent;
}
function K(e, t, n, r) {
    const e_length = e.length;
    let a = 0;
    let l;
    if (t < 0) {
        t = -t > e_length ? 0 : e_length + t;
    } else {
        t = t > e_length ? e_length : t;
    }
    n = n > 0 ? n : 0;
    if (r.length < 10000) {
        l = Array.from(r);
        l.unshift(t, n);
        e.splice(...l);
    } else {
        for(n && e.splice(t, n); a < r.length;){
            l = r.slice(a, a + 10000);
            l.unshift(t, 0);
            e.splice(...l);
            a += 10000;
            t += 10000;
        }
    }
}
function Z(e, t) {
    if (e.length > 0) {
        K(e, e.length, 0, t);
        return e;
    }
    return t;
}
const hasOwnProperty_1 = {}.hasOwnProperty;
function tr(e) {
    const t = {};
    let n = -1;
    while(++n < e.length){
        nl(t, e[n]);
    }
    return t;
}
function nl(e, t) {
    let n;
    for(n in t){
        const i = (hasOwnProperty_1.call(e, n) ? e[n] : undefined) || (e[n] = {});
        const a = t[n];
        let l;
        if (a) {
            for(l in a){
                if (!hasOwnProperty_1.call(i, l)) {
                    i[l] = [];
                }
                const u = a[l];
                rl(i[l], Array.isArray(u) ? u : u ? [
                    u
                ] : []);
            }
        }
    }
}
function rl(e, t) {
    let n = -1;
    const r = [];
    while(++n < t.length){
        (t[n].add === "after" ? e : r).push(t[n]);
    }
    K(e, 0, 0, r);
}
function nr(e, t) {
    const n = Number.parseInt(e, t);
    if (n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111) {
        return "\uFFFD";
    }
    return String.fromCodePoint(n);
}
function re(e) {
    return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Y = me(/[A-Za-z]/);
const Q = me(/[\dA-Za-z]/);
const il = me(/[#-'*+\--9=?A-Z^-~]/);
function Ge(e) {
    return e !== null && (e < 32 || e === 127);
}
const bt = me(/\d/);
const ll = me(/[\dA-Fa-f]/);
const al = me(/[!-/:-@[-`{-~]/);
function z(e) {
    return e !== null && e < -2;
}
function U(e) {
    return e !== null && (e < 0 || e === 32);
}
function B(e) {
    return e === -2 || e === -1 || e === 32;
}
const Ke = me(new RegExp("\\p{P}|\\p{S}", "u"));
const ke = me(/\s/);
function me(e) {
    return t;
    function t(n) {
        return n !== null && n > -1 && e.test(String.fromCharCode(n));
    }
}
function Te(e) {
    const t = [];
    let n = -1;
    let r = 0;
    let i = 0;
    while(++n < e.length){
        const a = e.charCodeAt(n);
        let l = "";
        if (a === 37 && Q(e.charCodeAt(n + 1)) && Q(e.charCodeAt(n + 2))) {
            i = 2;
        } else if (a < 128) {
            if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))) {
                l = String.fromCharCode(a);
            }
        } else if (a > 55295 && a < 57344) {
            const u = e.charCodeAt(n + 1);
            if (a < 56320 && u > 56319 && u < 57344) {
                l = String.fromCharCode(a, u);
                i = 1;
            } else {
                l = "\uFFFD";
            }
        } else {
            l = String.fromCharCode(a);
        }
        if (l) {
            t.push(e.slice(r, n), encodeURIComponent(l));
            r = n + i + 1;
            l = "";
        }
        if (i) {
            n += i;
            i = 0;
        }
    }
    return t.join("") + e.slice(r);
}
function R(e, t, n, r) {
    const i = r ? r - 1 : Number.POSITIVE_INFINITY;
    let a = 0;
    return l;
    function l(o) {
        if (B(o)) {
            e.enter(n);
            return u(o);
        }
        return t(o);
    }
    function u(o) {
        if (B(o) && a++ < i) {
            e.consume(o);
            return u;
        }
        e.exit(n);
        return t(o);
    }
}
const ul = {
    tokenize: ol
};
function ol(e) {
    const t = e.attempt(this.parser.constructs.contentInitial, r, i);
    let n;
    return t;
    function r(u) {
        if (u === null) {
            e.consume(u);
            return;
        }
        e.enter("lineEnding");
        e.consume(u);
        e.exit("lineEnding");
        return R(e, t, "linePrefix");
    }
    function i(u) {
        e.enter("paragraph");
        return a(u);
    }
    function a(u) {
        const o = e.enter("chunkText", {
            contentType: "text",
            previous: n
        });
        if (n) {
            n.next = o;
        }
        n = o;
        return l(u);
    }
    function l(u) {
        if (u === null) {
            e.exit("chunkText");
            e.exit("paragraph");
            e.consume(u);
            return;
        }
        if (z(u)) {
            e.consume(u);
            e.exit("chunkText");
            return a;
        }
        e.consume(u);
        return l;
    }
}
const sl = {
    tokenize: cl
};
const fn = {
    tokenize: fl
};
function cl(e) {
    const t = this;
    const n = [];
    let r = 0;
    let _tokenizer;
    let a;
    let l;
    return u;
    function u(E) {
        if (r < n.length) {
            const D = n[r];
            t.containerState = D[1];
            return e.attempt(D[0].continuation, o, s)(E);
        }
        return s(E);
    }
    function o(E) {
        r++;
        if (t.containerState._closeFlow) {
            t.containerState._closeFlow = undefined;
            if (_tokenizer) {
                I();
            }
            const D = t.events.length;
            let v = D;
            let S;
            while(v--){
                if (t.events[v][0] === "exit" && t.events[v][1].type === "chunkFlow") {
                    S = t.events[v][1].end;
                    break;
                }
            }
            b(r);
            let M = D;
            while(M < t.events.length){
                t.events[M][1].end = {
                    ...S
                };
                M++;
            }
            K(t.events, v + 1, 0, t.events.slice(D));
            t.events.length = M;
            return s(E);
        }
        return u(E);
    }
    function s(E) {
        if (r === n.length) {
            if (!_tokenizer) {
                return p(E);
            }
            if (_tokenizer.currentConstruct && _tokenizer.currentConstruct.concrete) {
                return d(E);
            }
            t.interrupt = !!(_tokenizer.currentConstruct && !_tokenizer._gfmTableDynamicInterruptHack);
        }
        t.containerState = {};
        return e.check(fn, c, f)(E);
    }
    function c(E) {
        if (_tokenizer) {
            I();
        }
        b(r);
        return p(E);
    }
    function f(E) {
        t.parser.lazy[t.now().line] = r !== n.length;
        l = t.now().offset;
        return d(E);
    }
    function p(E) {
        t.containerState = {};
        return e.attempt(fn, h, d)(E);
    }
    function h(E) {
        r++;
        n.push([
            t.currentConstruct,
            t.containerState
        ]);
        return p(E);
    }
    function d(E) {
        if (E === null) {
            if (_tokenizer) {
                I();
            }
            b(0);
            e.consume(E);
            return;
        }
        _tokenizer = _tokenizer || t.parser.flow(t.now());
        e.enter("chunkFlow", {
            _tokenizer,
            contentType: "flow",
            previous: a
        });
        return x(E);
    }
    function x(E) {
        if (E === null) {
            C(e.exit("chunkFlow"), true);
            b(0);
            e.consume(E);
            return;
        }
        if (z(E)) {
            e.consume(E);
            C(e.exit("chunkFlow"));
            r = 0;
            t.interrupt = undefined;
            return u;
        }
        e.consume(E);
        return x;
    }
    function C(E, D) {
        const v = t.sliceStream(E);
        if (D) {
            v.push(null);
        }
        E.previous = a;
        if (a) {
            a.next = E;
        }
        a = E;
        _tokenizer.defineSkip(E.start);
        _tokenizer.write(v);
        if (t.parser.lazy[E.start.line]) {
            let S = _tokenizer.events.length;
            while(S--){
                if (_tokenizer.events[S][1].start.offset < l && (!_tokenizer.events[S][1].end || _tokenizer.events[S][1].end.offset > l)) {
                    return;
                }
            }
            const M = t.events.length;
            let $ = M;
            let q;
            let y;
            while($--){
                if (t.events[$][0] === "exit" && t.events[$][1].type === "chunkFlow") {
                    if (q) {
                        y = t.events[$][1].end;
                        break;
                    }
                    q = true;
                }
            }
            b(r);
            for(S = M; S < t.events.length;){
                t.events[S][1].end = {
                    ...y
                };
                S++;
            }
            K(t.events, $ + 1, 0, t.events.slice(M));
            t.events.length = S;
        }
    }
    function b(E) {
        let n_length = n.length;
        while(n_length-- > E){
            const v = n[n_length];
            t.containerState = v[1];
            v[0].exit.call(t, e);
        }
        n.length = E;
    }
    function I() {
        _tokenizer.write([
            null
        ]);
        a = undefined;
        _tokenizer = undefined;
        t.containerState._closeFlow = undefined;
    }
}
function fl(e, t, n) {
    return R(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
}
function Ie(e) {
    if (e === null || U(e) || ke(e)) {
        return 1;
    }
    if (Ke(e)) {
        return 2;
    }
}
function Ze(e, t, n) {
    const r = [];
    let i = -1;
    while(++i < e.length){
        const a = e[i].resolveAll;
        if (a && !r.includes(a)) {
            t = a(t, n);
            r.push(a);
        }
    }
    return t;
}
const wt = {
    name: "attention",
    resolveAll: hl,
    tokenize: pl
};
function hl(e, t) {
    let n = -1;
    let r;
    let i;
    let a;
    let l;
    let u;
    let o;
    let s;
    let c;
    while(++n < e.length){
        if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
            for(r = n; r--;){
                if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
                    if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) {
                        continue;
                    }
                    o = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
                    const f = {
                        ...e[r][1].end
                    };
                    const p = {
                        ...e[n][1].start
                    };
                    hn(f, -o);
                    hn(p, o);
                    l = {
                        type: o > 1 ? "strongSequence" : "emphasisSequence",
                        start: f,
                        end: {
                            ...e[r][1].end
                        }
                    };
                    u = {
                        type: o > 1 ? "strongSequence" : "emphasisSequence",
                        start: {
                            ...e[n][1].start
                        },
                        end: p
                    };
                    a = {
                        type: o > 1 ? "strongText" : "emphasisText",
                        start: {
                            ...e[r][1].end
                        },
                        end: {
                            ...e[n][1].start
                        }
                    };
                    i = {
                        type: o > 1 ? "strong" : "emphasis",
                        start: {
                            ...l.start
                        },
                        end: {
                            ...u.end
                        }
                    };
                    e[r][1].end = {
                        ...l.start
                    };
                    e[n][1].start = {
                        ...u.end
                    };
                    s = [];
                    if (e[r][1].end.offset - e[r][1].start.offset) {
                        s = Z(s, [
                            [
                                "enter",
                                e[r][1],
                                t
                            ],
                            [
                                "exit",
                                e[r][1],
                                t
                            ]
                        ]);
                    }
                    s = Z(s, [
                        [
                            "enter",
                            i,
                            t
                        ],
                        [
                            "enter",
                            l,
                            t
                        ],
                        [
                            "exit",
                            l,
                            t
                        ],
                        [
                            "enter",
                            a,
                            t
                        ]
                    ]);
                    s = Z(s, Ze(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t));
                    s = Z(s, [
                        [
                            "exit",
                            a,
                            t
                        ],
                        [
                            "enter",
                            u,
                            t
                        ],
                        [
                            "exit",
                            u,
                            t
                        ],
                        [
                            "exit",
                            i,
                            t
                        ]
                    ]);
                    if (e[n][1].end.offset - e[n][1].start.offset) {
                        c = 2;
                        s = Z(s, [
                            [
                                "enter",
                                e[n][1],
                                t
                            ],
                            [
                                "exit",
                                e[n][1],
                                t
                            ]
                        ]);
                    } else {
                        c = 0;
                    }
                    K(e, r - 1, n - r + 3, s);
                    n = r + s.length - c - 2;
                    break;
                }
            }
        }
    }
    for(n = -1; ++n < e.length;){
        if (e[n][1].type === "attentionSequence") {
            e[n][1].type = "data";
        }
    }
    return e;
}
function pl(e, t) {
    const _null = this.parser.constructs.attentionMarkers.null;
    const previous = this.previous;
    const i = Ie(previous);
    let a;
    return l;
    function l(o) {
        a = o;
        e.enter("attentionSequence");
        return u(o);
    }
    function u(o) {
        if (o === a) {
            e.consume(o);
            return u;
        }
        const s = e.exit("attentionSequence");
        const c = Ie(o);
        const f = !c || c === 2 && i || _null.includes(o);
        const p = !i || i === 2 && c || _null.includes(previous);
        s._open = !!(a === 42 ? f : f && (i || !p));
        s._close = !!(a === 42 ? p : p && (c || !f));
        return t(o);
    }
}
function hn(e, t) {
    e.column += t;
    e.offset += t;
    e._bufferIndex += t;
}
const ml = {
    name: "autolink",
    tokenize: gl
};
function gl(e, t, n) {
    let r = 0;
    return i;
    function i(h) {
        e.enter("autolink");
        e.enter("autolinkMarker");
        e.consume(h);
        e.exit("autolinkMarker");
        e.enter("autolinkProtocol");
        return a;
    }
    function a(h) {
        if (Y(h)) {
            e.consume(h);
            return l;
        }
        if (h === 64) {
            return n(h);
        }
        return s(h);
    }
    function l(h) {
        if (h === 43 || h === 45 || h === 46 || Q(h)) {
            r = 1;
            return u(h);
        }
        return s(h);
    }
    function u(h) {
        if (h === 58) {
            e.consume(h);
            r = 0;
            return o;
        }
        if ((h === 43 || h === 45 || h === 46 || Q(h)) && r++ < 32) {
            e.consume(h);
            return u;
        }
        r = 0;
        return s(h);
    }
    function o(h) {
        if (h === 62) {
            e.exit("autolinkProtocol");
            e.enter("autolinkMarker");
            e.consume(h);
            e.exit("autolinkMarker");
            e.exit("autolink");
            return t;
        }
        if (h === null || h === 32 || h === 60 || Ge(h)) {
            return n(h);
        }
        e.consume(h);
        return o;
    }
    function s(h) {
        if (h === 64) {
            e.consume(h);
            return c;
        }
        if (il(h)) {
            e.consume(h);
            return s;
        }
        return n(h);
    }
    function c(h) {
        if (Q(h)) {
            return f(h);
        }
        return n(h);
    }
    function f(h) {
        switch(h){
            case 46:
                e.consume(h);
                r = 0;
                return c;
            case 62:
                e.exit("autolinkProtocol").type = "autolinkEmail";
                e.enter("autolinkMarker");
                e.consume(h);
                e.exit("autolinkMarker");
                e.exit("autolink");
                return t;
            default:
                return p(h);
        }
    }
    function p(h) {
        if ((h === 45 || Q(h)) && r++ < 63) {
            const d = h === 45 ? p : f;
            e.consume(h);
            return d;
        }
        return n(h);
    }
}
const Be = {
    partial: true,
    tokenize: dl
};
function dl(e, t, n) {
    return r;
    function r(a) {
        if (B(a)) {
            return R(e, i, "linePrefix")(a);
        }
        return i(a);
    }
    function i(a) {
        if (a === null || z(a)) {
            return t(a);
        }
        return n(a);
    }
}
const rr = {
    continuation: {
        tokenize: kl
    },
    exit: yl,
    name: "blockQuote",
    tokenize: xl
};
function xl(e, t, n) {
    const r = this;
    return i;
    function i(l) {
        if (l === 62) {
            const u = r.containerState;
            if (!u.open) {
                e.enter("blockQuote", {
                    _container: true
                });
                u.open = true;
            }
            e.enter("blockQuotePrefix");
            e.enter("blockQuoteMarker");
            e.consume(l);
            e.exit("blockQuoteMarker");
            return a;
        }
        return n(l);
    }
    function a(l) {
        if (B(l)) {
            e.enter("blockQuotePrefixWhitespace");
            e.consume(l);
            e.exit("blockQuotePrefixWhitespace");
            e.exit("blockQuotePrefix");
            return t;
        }
        e.exit("blockQuotePrefix");
        return t(l);
    }
}
function kl(e, t, n) {
    const r = this;
    return i;
    function i(l) {
        if (B(l)) {
            return R(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(l);
        }
        return a(l);
    }
    function a(l) {
        return e.attempt(rr, t, n)(l);
    }
}
function yl(e) {
    e.exit("blockQuote");
}
const ir = {
    name: "characterEscape",
    tokenize: bl
};
function bl(e, t, n) {
    return r;
    function r(a) {
        e.enter("characterEscape");
        e.enter("escapeMarker");
        e.consume(a);
        e.exit("escapeMarker");
        return i;
    }
    function i(a) {
        if (al(a)) {
            e.enter("characterEscapeValue");
            e.consume(a);
            e.exit("characterEscapeValue");
            e.exit("characterEscape");
            return t;
        }
        return n(a);
    }
}
const lr = {
    name: "characterReference",
    tokenize: wl
};
function wl(e, t, n) {
    const r = this;
    let i = 0;
    let a;
    let l;
    return u;
    function u(f) {
        e.enter("characterReference");
        e.enter("characterReferenceMarker");
        e.consume(f);
        e.exit("characterReferenceMarker");
        return o;
    }
    function o(f) {
        if (f === 35) {
            e.enter("characterReferenceMarkerNumeric");
            e.consume(f);
            e.exit("characterReferenceMarkerNumeric");
            return s;
        }
        e.enter("characterReferenceValue");
        a = 31;
        l = Q;
        return c(f);
    }
    function s(f) {
        if (f === 88 || f === 120) {
            e.enter("characterReferenceMarkerHexadecimal");
            e.consume(f);
            e.exit("characterReferenceMarkerHexadecimal");
            e.enter("characterReferenceValue");
            a = 6;
            l = ll;
            return c;
        }
        e.enter("characterReferenceValue");
        a = 7;
        l = bt;
        return c(f);
    }
    function c(f) {
        if (f === 59 && i) {
            const p = e.exit("characterReferenceValue");
            if (l === Q && !vt(r.sliceSerialize(p))) {
                return n(f);
            }
            e.enter("characterReferenceMarker");
            e.consume(f);
            e.exit("characterReferenceMarker");
            e.exit("characterReference");
            return t;
        }
        if (l(f) && i++ < a) {
            e.consume(f);
            return c;
        }
        return n(f);
    }
}
const pn = {
    partial: true,
    tokenize: Cl
};
const mn = {
    concrete: true,
    name: "codeFenced",
    tokenize: Sl
};
function Sl(e, t, n) {
    const r = this;
    const i = {
        partial: true,
        tokenize: v
    };
    let a = 0;
    let l = 0;
    let u;
    return o;
    function o(S) {
        return s(S);
    }
    function s(S) {
        const M = r.events[r.events.length - 1];
        a = M && M[1].type === "linePrefix" ? M[2].sliceSerialize(M[1], true).length : 0;
        u = S;
        e.enter("codeFenced");
        e.enter("codeFencedFence");
        e.enter("codeFencedFenceSequence");
        return c(S);
    }
    function c(S) {
        if (S === u) {
            l++;
            e.consume(S);
            return c;
        }
        if (l < 3) {
            return n(S);
        }
        e.exit("codeFencedFenceSequence");
        if (B(S)) {
            return R(e, f, "whitespace")(S);
        }
        return f(S);
    }
    function f(S) {
        if (S === null || z(S)) {
            e.exit("codeFencedFence");
            if (r.interrupt) {
                return t(S);
            }
            return e.check(pn, x, D)(S);
        }
        e.enter("codeFencedFenceInfo");
        e.enter("chunkString", {
            contentType: "string"
        });
        return p(S);
    }
    function p(S) {
        if (S === null || z(S)) {
            e.exit("chunkString");
            e.exit("codeFencedFenceInfo");
            return f(S);
        }
        if (B(S)) {
            e.exit("chunkString");
            e.exit("codeFencedFenceInfo");
            return R(e, h, "whitespace")(S);
        }
        if (S === 96 && S === u) {
            return n(S);
        }
        e.consume(S);
        return p;
    }
    function h(S) {
        if (S === null || z(S)) {
            return f(S);
        }
        e.enter("codeFencedFenceMeta");
        e.enter("chunkString", {
            contentType: "string"
        });
        return d(S);
    }
    function d(S) {
        if (S === null || z(S)) {
            e.exit("chunkString");
            e.exit("codeFencedFenceMeta");
            return f(S);
        }
        if (S === 96 && S === u) {
            return n(S);
        }
        e.consume(S);
        return d;
    }
    function x(S) {
        return e.attempt(i, D, C)(S);
    }
    function C(S) {
        e.enter("lineEnding");
        e.consume(S);
        e.exit("lineEnding");
        return b;
    }
    function b(S) {
        if (a > 0 && B(S)) {
            return R(e, I, "linePrefix", a + 1)(S);
        }
        return I(S);
    }
    function I(S) {
        if (S === null || z(S)) {
            return e.check(pn, x, D)(S);
        }
        e.enter("codeFlowValue");
        return E(S);
    }
    function E(S) {
        if (S === null || z(S)) {
            e.exit("codeFlowValue");
            return I(S);
        }
        e.consume(S);
        return E;
    }
    function D(S) {
        e.exit("codeFenced");
        return t(S);
    }
    function v(S, M, $) {
        let q = 0;
        return y;
        function y(P) {
            S.enter("lineEnding");
            S.consume(P);
            S.exit("lineEnding");
            return k;
        }
        function k(P) {
            S.enter("codeFencedFence");
            if (B(P)) {
                return R(S, _, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(P);
            }
            return _(P);
        }
        function _(P) {
            if (P === u) {
                S.enter("codeFencedFenceSequence");
                return F(P);
            }
            return $(P);
        }
        function F(P) {
            if (P === u) {
                q++;
                S.consume(P);
                return F;
            }
            if (q >= l) {
                S.exit("codeFencedFenceSequence");
                if (B(P)) {
                    return R(S, A, "whitespace")(P);
                }
                return A(P);
            }
            return $(P);
        }
        function A(P) {
            if (P === null || z(P)) {
                S.exit("codeFencedFence");
                return M(P);
            }
            return $(P);
        }
    }
}
function Cl(e, t, n) {
    const r = this;
    return i;
    function i(l) {
        if (l === null) {
            return n(l);
        }
        e.enter("lineEnding");
        e.consume(l);
        e.exit("lineEnding");
        return a;
    }
    function a(l) {
        if (r.parser.lazy[r.now().line]) {
            return n(l);
        }
        return t(l);
    }
}
const lt = {
    name: "codeIndented",
    tokenize: Il
};
const El = {
    partial: true,
    tokenize: Tl
};
function Il(e, t, n) {
    const r = this;
    return i;
    function i(s) {
        e.enter("codeIndented");
        return R(e, a, "linePrefix", 5)(s);
    }
    function a(s) {
        const c = r.events[r.events.length - 1];
        if (c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], true).length >= 4) {
            return l(s);
        }
        return n(s);
    }
    function l(s) {
        if (s === null) {
            return o(s);
        }
        if (z(s)) {
            return e.attempt(El, l, o)(s);
        }
        e.enter("codeFlowValue");
        return u(s);
    }
    function u(s) {
        if (s === null || z(s)) {
            e.exit("codeFlowValue");
            return l(s);
        }
        e.consume(s);
        return u;
    }
    function o(s) {
        e.exit("codeIndented");
        return t(s);
    }
}
function Tl(e, t, n) {
    const r = this;
    return i;
    function i(l) {
        if (r.parser.lazy[r.now().line]) {
            return n(l);
        }
        if (z(l)) {
            e.enter("lineEnding");
            e.consume(l);
            e.exit("lineEnding");
            return i;
        }
        return R(e, a, "linePrefix", 5)(l);
    }
    function a(l) {
        const u = r.events[r.events.length - 1];
        if (u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], true).length >= 4) {
            return t(l);
        }
        if (z(l)) {
            return i(l);
        }
        return n(l);
    }
}
const Al = {
    name: "codeText",
    previous: zl,
    resolve: Fl,
    tokenize: _l
};
function Fl(e) {
    let t = e.length - 4;
    let n = 3;
    let r;
    let i;
    if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
        for(r = n; ++r < t;){
            if (e[r][1].type === "codeTextData") {
                e[n][1].type = "codeTextPadding";
                e[t][1].type = "codeTextPadding";
                n += 2;
                t -= 2;
                break;
            }
        }
    }
    r = n - 1;
    t++;
    while(++r <= t){
        i === undefined ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = undefined);
    }
    return e;
}
function zl(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function _l(e, t, n) {
    let r = 0;
    let i;
    let a;
    return l;
    function l(f) {
        e.enter("codeText");
        e.enter("codeTextSequence");
        return u(f);
    }
    function u(f) {
        if (f === 96) {
            e.consume(f);
            r++;
            return u;
        }
        e.exit("codeTextSequence");
        return o(f);
    }
    function o(f) {
        if (f === null) {
            return n(f);
        }
        if (f === 32) {
            e.enter("space");
            e.consume(f);
            e.exit("space");
            return o;
        }
        if (f === 96) {
            a = e.enter("codeTextSequence");
            i = 0;
            return c(f);
        }
        if (z(f)) {
            e.enter("lineEnding");
            e.consume(f);
            e.exit("lineEnding");
            return o;
        }
        e.enter("codeTextData");
        return s(f);
    }
    function s(f) {
        if (f === null || f === 32 || f === 96 || z(f)) {
            e.exit("codeTextData");
            return o(f);
        }
        e.consume(f);
        return s;
    }
    function c(f) {
        if (f === 96) {
            e.consume(f);
            i++;
            return c;
        }
        if (i === r) {
            e.exit("codeTextSequence");
            e.exit("codeText");
            return t(f);
        }
        a.type = "codeTextData";
        return s(f);
    }
}
class Pl {
    constructor(t){
        this.left = t ? [
            ...t
        ] : [];
        this.right = [];
    }
    get(t) {
        if (t < 0 || t >= this.left.length + this.right.length) {
            throw new RangeError(`Cannot access index \`${t}\` in a splice buffer of size \`${this.left.length + this.right.length}\``);
        }
        if (t < this.left.length) {
            return this.left[t];
        }
        return this.right[this.right.length - t + this.left.length - 1];
    }
    get length() {
        return this.left.length + this.right.length;
    }
    shift() {
        this.setCursor(0);
        return this.right.pop();
    }
    slice(t, n) {
        const r = n ?? Number.POSITIVE_INFINITY;
        if (r < this.left.length) {
            return this.left.slice(t, r);
        }
        if (t > this.left.length) {
            return this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse();
        }
        return this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
    }
    splice(t, n, r) {
        const i = n || 0;
        this.setCursor(Math.trunc(t));
        const a = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
        if (r) {
            De(this.left, r);
        }
        return a.reverse();
    }
    pop() {
        this.setCursor(Number.POSITIVE_INFINITY);
        return this.left.pop();
    }
    push(t) {
        this.setCursor(Number.POSITIVE_INFINITY);
        this.left.push(t);
    }
    pushMany(t) {
        this.setCursor(Number.POSITIVE_INFINITY);
        De(this.left, t);
    }
    unshift(t) {
        this.setCursor(0);
        this.right.push(t);
    }
    unshiftMany(t) {
        this.setCursor(0);
        De(this.right, t.reverse());
    }
    setCursor(t) {
        if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0)) {
            if (t < this.left.length) {
                const n = this.left.splice(t, Number.POSITIVE_INFINITY);
                De(this.right, n.reverse());
            } else {
                const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
                De(this.left, n.reverse());
            }
        }
    }
}
function De(e, t) {
    let n = 0;
    if (t.length < 10000) {
        e.push(...t);
    } else {
        while(n < t.length){
            e.push(...t.slice(n, n + 10000));
            n += 10000;
        }
    }
}
function ar(e) {
    const t = {};
    let n = -1;
    let r;
    let i;
    let a;
    let l;
    let u;
    let o;
    let s;
    const c = new Pl(e);
    while(++n < c.length){
        while(n in t){
            n = t[n];
        }
        r = c.get(n);
        if (n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (o = r[1]._tokenizer.events, a = 0, a < o.length && o[a][1].type === "lineEndingBlank" && (a += 2), a < o.length && o[a][1].type === "content")) {
            while(++a < o.length && o[a][1].type !== "content"){
                if (o[a][1].type === "chunkText") {
                    o[a][1]._isInFirstContentOfListItem = true;
                    a++;
                }
            }
        }
        if (r[0] === "enter") {
            if (r[1].contentType) {
                Object.assign(t, Dl(c, n));
                n = t[n];
                s = true;
            }
        } else if (r[1]._container) {
            a = n;
            for(i = undefined; a--;){
                l = c.get(a);
                if (l[1].type === "lineEnding" || l[1].type === "lineEndingBlank") {
                    if (l[0] === "enter") {
                        if (i) {
                            c.get(i)[1].type = "lineEndingBlank";
                        }
                        l[1].type = "lineEnding";
                        i = a;
                    }
                } else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) {
                    break;
                }
            }
            if (i) {
                r[1].end = {
                    ...c.get(i)[1].start
                };
                u = c.slice(i, n);
                u.unshift(r);
                c.splice(i, n - i + 1, u);
            }
        }
    }
    K(e, 0, Number.POSITIVE_INFINITY, c.slice(0));
    return !s;
}
function Dl(e, t) {
    const n = e.get(t)[1];
    const r = e.get(t)[2];
    let i = t - 1;
    const a = [];
    let n__tokenizer = n._tokenizer;
    if (!n__tokenizer) {
        n__tokenizer = r.parser[n.contentType](n.start);
        if (n._contentTypeTextTrailing) {
            n__tokenizer._contentTypeTextTrailing = true;
        }
    }
    const l_events = n__tokenizer.events;
    const o = [];
    const s = {};
    let c;
    let f;
    let p = -1;
    let h = n;
    let d = 0;
    let x = 0;
    const C = [
        x
    ];
    while(h){
        while(e.get(++i)[1] !== h);
        a.push(i);
        if (!h._tokenizer) {
            c = r.sliceStream(h);
            if (!h.next) {
                c.push(null);
            }
            if (f) {
                n__tokenizer.defineSkip(h.start);
            }
            if (h._isInFirstContentOfListItem) {
                n__tokenizer._gfmTasklistFirstContentOfListItem = true;
            }
            n__tokenizer.write(c);
            if (h._isInFirstContentOfListItem) {
                n__tokenizer._gfmTasklistFirstContentOfListItem = undefined;
            }
        }
        f = h;
        h = h.next;
    }
    for(h = n; ++p < l_events.length;){
        if (l_events[p][0] === "exit" && l_events[p - 1][0] === "enter" && l_events[p][1].type === l_events[p - 1][1].type && l_events[p][1].start.line !== l_events[p][1].end.line) {
            x = p + 1;
            C.push(x);
            h._tokenizer = undefined;
            h.previous = undefined;
            h = h.next;
        }
    }
    n__tokenizer.events = [];
    if (h) {
        h._tokenizer = undefined;
        h.previous = undefined;
    } else {
        C.pop();
    }
    for(p = C.length; p--;){
        const b = l_events.slice(C[p], C[p + 1]);
        const I = a.pop();
        o.push([
            I,
            I + b.length - 1
        ]);
        e.splice(I, 2, b);
    }
    o.reverse();
    for(p = -1; ++p < o.length;){
        s[d + o[p][0]] = d + o[p][1];
        d += o[p][1] - o[p][0] - 1;
    }
    return s;
}
const Ll = {
    resolve: Nl,
    tokenize: Rl
};
const Ml = {
    partial: true,
    tokenize: vl
};
function Nl(e) {
    ar(e);
    return e;
}
function Rl(e, t) {
    let n;
    return r;
    function r(u) {
        e.enter("content");
        n = e.enter("chunkContent", {
            contentType: "content"
        });
        return i(u);
    }
    function i(u) {
        if (u === null) {
            return a(u);
        }
        if (z(u)) {
            return e.check(Ml, l, a)(u);
        }
        e.consume(u);
        return i;
    }
    function a(u) {
        e.exit("chunkContent");
        e.exit("content");
        return t(u);
    }
    function l(u) {
        e.consume(u);
        e.exit("chunkContent");
        n.next = e.enter("chunkContent", {
            contentType: "content",
            previous: n
        });
        n = n.next;
        return i;
    }
}
function vl(e, t, n) {
    const r = this;
    return i;
    function i(l) {
        e.exit("chunkContent");
        e.enter("lineEnding");
        e.consume(l);
        e.exit("lineEnding");
        return R(e, a, "linePrefix");
    }
    function a(l) {
        if (l === null || z(l)) {
            return n(l);
        }
        const u = r.events[r.events.length - 1];
        if (!r.parser.constructs.disable.null.includes("codeIndented") && u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], true).length >= 4) {
            return t(l);
        }
        return e.interrupt(r.parser.constructs.flow, n, t)(l);
    }
}
function ur(e, t, n, r, i, a, l, u, o) {
    const s = o || Number.POSITIVE_INFINITY;
    let c = 0;
    return f;
    function f(b) {
        if (b === 60) {
            e.enter(r);
            e.enter(i);
            e.enter(a);
            e.consume(b);
            e.exit(a);
            return p;
        }
        if (b === null || b === 32 || b === 41 || Ge(b)) {
            return n(b);
        }
        e.enter(r);
        e.enter(l);
        e.enter(u);
        e.enter("chunkString", {
            contentType: "string"
        });
        return x(b);
    }
    function p(b) {
        if (b === 62) {
            e.enter(a);
            e.consume(b);
            e.exit(a);
            e.exit(i);
            e.exit(r);
            return t;
        }
        e.enter(u);
        e.enter("chunkString", {
            contentType: "string"
        });
        return h(b);
    }
    function h(b) {
        if (b === 62) {
            e.exit("chunkString");
            e.exit(u);
            return p(b);
        }
        if (b === null || b === 60 || z(b)) {
            return n(b);
        }
        e.consume(b);
        if (b === 92) {
            return d;
        }
        return h;
    }
    function d(b) {
        if (b === 60 || b === 62 || b === 92) {
            e.consume(b);
            return h;
        }
        return h(b);
    }
    function x(b) {
        if (!c && (b === null || b === 41 || U(b))) {
            e.exit("chunkString");
            e.exit(u);
            e.exit(l);
            e.exit(r);
            return t(b);
        }
        if (c < s && b === 40) {
            e.consume(b);
            c++;
            return x;
        }
        if (b === 41) {
            e.consume(b);
            c--;
            return x;
        }
        if (b === null || b === 32 || b === 40 || Ge(b)) {
            return n(b);
        }
        e.consume(b);
        if (b === 92) {
            return C;
        }
        return x;
    }
    function C(b) {
        if (b === 40 || b === 41 || b === 92) {
            e.consume(b);
            return x;
        }
        return x(b);
    }
}
function or(e, t, n, r, i, a) {
    const l = this;
    let u = 0;
    let o;
    return s;
    function s(h) {
        e.enter(r);
        e.enter(i);
        e.consume(h);
        e.exit(i);
        e.enter(a);
        return c;
    }
    function c(h) {
        if (u > 999 || h === null || h === 91 || h === 93 && !o || h === 94 && !u && "_hiddenFootnoteSupport" in l.parser.constructs) {
            return n(h);
        }
        if (h === 93) {
            e.exit(a);
            e.enter(i);
            e.consume(h);
            e.exit(i);
            e.exit(r);
            return t;
        }
        if (z(h)) {
            e.enter("lineEnding");
            e.consume(h);
            e.exit("lineEnding");
            return c;
        }
        e.enter("chunkString", {
            contentType: "string"
        });
        return f(h);
    }
    function f(h) {
        if (h === null || h === 91 || h === 93 || z(h) || u++ > 999) {
            e.exit("chunkString");
            return c(h);
        }
        e.consume(h);
        if (!o) {
            o = !B(h);
        }
        if (h === 92) {
            return p;
        }
        return f;
    }
    function p(h) {
        if (h === 91 || h === 92 || h === 93) {
            e.consume(h);
            u++;
            return f;
        }
        return f(h);
    }
}
function sr(e, t, n, r, i, a) {
    let l;
    return u;
    function u(p) {
        if (p === 34 || p === 39 || p === 40) {
            e.enter(r);
            e.enter(i);
            e.consume(p);
            e.exit(i);
            l = p === 40 ? 41 : p;
            return o;
        }
        return n(p);
    }
    function o(p) {
        if (p === l) {
            e.enter(i);
            e.consume(p);
            e.exit(i);
            e.exit(r);
            return t;
        }
        e.enter(a);
        return s(p);
    }
    function s(p) {
        if (p === l) {
            e.exit(a);
            return o(l);
        }
        if (p === null) {
            return n(p);
        }
        if (z(p)) {
            e.enter("lineEnding");
            e.consume(p);
            e.exit("lineEnding");
            return R(e, s, "linePrefix");
        }
        e.enter("chunkString", {
            contentType: "string"
        });
        return c(p);
    }
    function c(p) {
        if (p === l || p === null || z(p)) {
            e.exit("chunkString");
            return s(p);
        }
        e.consume(p);
        if (p === 92) {
            return f;
        }
        return c;
    }
    function f(p) {
        if (p === l || p === 92) {
            e.consume(p);
            return c;
        }
        return c(p);
    }
}
function Ne(e, t) {
    let n;
    return r;
    function r(i) {
        if (z(i)) {
            e.enter("lineEnding");
            e.consume(i);
            e.exit("lineEnding");
            n = true;
            return r;
        }
        if (B(i)) {
            return R(e, r, n ? "linePrefix" : "lineSuffix")(i);
        }
        return t(i);
    }
}
const Ol = {
    name: "definition",
    tokenize: jl
};
const Bl = {
    partial: true,
    tokenize: ql
};
function jl(e, t, n) {
    const r = this;
    let i;
    return a;
    function a(h) {
        e.enter("definition");
        return l(h);
    }
    function l(h) {
        return or.call(r, e, u, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(h);
    }
    function u(h) {
        i = re(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1));
        if (h === 58) {
            e.enter("definitionMarker");
            e.consume(h);
            e.exit("definitionMarker");
            return o;
        }
        return n(h);
    }
    function o(h) {
        if (U(h)) {
            return Ne(e, s)(h);
        }
        return s(h);
    }
    function s(h) {
        return ur(e, c, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(h);
    }
    function c(h) {
        return e.attempt(Bl, f, f)(h);
    }
    function f(h) {
        if (B(h)) {
            return R(e, p, "whitespace")(h);
        }
        return p(h);
    }
    function p(h) {
        if (h === null || z(h)) {
            e.exit("definition");
            r.parser.defined.push(i);
            return t(h);
        }
        return n(h);
    }
}
function ql(e, t, n) {
    return r;
    function r(u) {
        if (U(u)) {
            return Ne(e, i)(u);
        }
        return n(u);
    }
    function i(u) {
        return sr(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(u);
    }
    function a(u) {
        if (B(u)) {
            return R(e, l, "whitespace")(u);
        }
        return l(u);
    }
    function l(u) {
        if (u === null || z(u)) {
            return t(u);
        }
        return n(u);
    }
}
const $l = {
    name: "hardBreakEscape",
    tokenize: Hl
};
function Hl(e, t, n) {
    return r;
    function r(a) {
        e.enter("hardBreakEscape");
        e.consume(a);
        return i;
    }
    function i(a) {
        if (z(a)) {
            e.exit("hardBreakEscape");
            return t(a);
        }
        return n(a);
    }
}
const Vl = {
    name: "headingAtx",
    resolve: Ul,
    tokenize: Wl
};
function Ul(e, t) {
    let n = e.length - 2;
    let r = 3;
    let i;
    let a;
    if (e[r][1].type === "whitespace") {
        r += 2;
    }
    if (n - 2 > r && e[n][1].type === "whitespace") {
        n -= 2;
    }
    if (e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace")) {
        n -= r + 1 === n ? 2 : 4;
    }
    if (n > r) {
        i = {
            type: "atxHeadingText",
            start: e[r][1].start,
            end: e[n][1].end
        };
        a = {
            type: "chunkText",
            start: e[r][1].start,
            end: e[n][1].end,
            contentType: "text"
        };
        K(e, r, n - r + 1, [
            [
                "enter",
                i,
                t
            ],
            [
                "enter",
                a,
                t
            ],
            [
                "exit",
                a,
                t
            ],
            [
                "exit",
                i,
                t
            ]
        ]);
    }
    return e;
}
function Wl(e, t, n) {
    let r = 0;
    return i;
    function i(c) {
        e.enter("atxHeading");
        return a(c);
    }
    function a(c) {
        e.enter("atxHeadingSequence");
        return l(c);
    }
    function l(c) {
        if (c === 35 && r++ < 6) {
            e.consume(c);
            return l;
        }
        if (c === null || U(c)) {
            e.exit("atxHeadingSequence");
            return u(c);
        }
        return n(c);
    }
    function u(c) {
        if (c === 35) {
            e.enter("atxHeadingSequence");
            return o(c);
        }
        if (c === null || z(c)) {
            e.exit("atxHeading");
            return t(c);
        }
        if (B(c)) {
            return R(e, u, "whitespace")(c);
        }
        e.enter("atxHeadingText");
        return s(c);
    }
    function o(c) {
        if (c === 35) {
            e.consume(c);
            return o;
        }
        e.exit("atxHeadingSequence");
        return u(c);
    }
    function s(c) {
        if (c === null || c === 35 || U(c)) {
            e.exit("atxHeadingText");
            return u(c);
        }
        e.consume(c);
        return s;
    }
}
const Ql = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
];
const gn = [
    "pre",
    "script",
    "style",
    "textarea"
];
const Gl = {
    concrete: true,
    name: "htmlFlow",
    resolveTo: Jl,
    tokenize: Kl
};
const Yl = {
    partial: true,
    tokenize: ea
};
const Xl = {
    partial: true,
    tokenize: Zl
};
function Jl(e) {
    let e_length = e.length;
    while(e_length-- && !(e[e_length][0] === "enter" && e[e_length][1].type === "htmlFlow"));
    if (e_length > 1 && e[e_length - 2][1].type === "linePrefix") {
        e[e_length][1].start = e[e_length - 2][1].start;
        e[e_length + 1][1].start = e[e_length - 2][1].start;
        e.splice(e_length - 2, 2);
    }
    return e;
}
function Kl(e, t, n) {
    const r = this;
    let i;
    let a;
    let l;
    let u;
    let o;
    return s;
    function s(g) {
        return c(g);
    }
    function c(g) {
        e.enter("htmlFlow");
        e.enter("htmlFlowData");
        e.consume(g);
        return f;
    }
    function f(g) {
        if (g === 33) {
            e.consume(g);
            return p;
        }
        if (g === 47) {
            e.consume(g);
            a = true;
            return x;
        }
        if (g === 63) {
            e.consume(g);
            i = 3;
            if (r.interrupt) {
                return t;
            }
            return m;
        }
        if (Y(g)) {
            e.consume(g);
            l = String.fromCharCode(g);
            return C;
        }
        return n(g);
    }
    function p(g) {
        if (g === 45) {
            e.consume(g);
            i = 2;
            return h;
        }
        if (g === 91) {
            e.consume(g);
            i = 5;
            u = 0;
            return d;
        }
        if (Y(g)) {
            e.consume(g);
            i = 4;
            if (r.interrupt) {
                return t;
            }
            return m;
        }
        return n(g);
    }
    function h(g) {
        if (g === 45) {
            e.consume(g);
            if (r.interrupt) {
                return t;
            }
            return m;
        }
        return n(g);
    }
    function d(g) {
        const te = "CDATA[";
        if (g === te.charCodeAt(u++)) {
            e.consume(g);
            if (u === te.length) {
                if (r.interrupt) {
                    return t;
                }
                return _;
            }
            return d;
        }
        return n(g);
    }
    function x(g) {
        if (Y(g)) {
            e.consume(g);
            l = String.fromCharCode(g);
            return C;
        }
        return n(g);
    }
    function C(g) {
        if (g === null || g === 47 || g === 62 || U(g)) {
            const te = g === 47;
            const ge = l.toLowerCase();
            if (!te && !a && gn.includes(ge)) {
                i = 1;
                if (r.interrupt) {
                    return t(g);
                }
                return _(g);
            }
            if (Ql.includes(l.toLowerCase())) {
                i = 6;
                if (te) {
                    return e.consume(g), b;
                }
                if (r.interrupt) {
                    return t(g);
                }
                return _(g);
            }
            i = 7;
            if (r.interrupt && !r.parser.lazy[r.now().line]) {
                return n(g);
            }
            if (a) {
                return I(g);
            }
            return E(g);
        }
        if (g === 45 || Q(g)) {
            e.consume(g);
            l += String.fromCharCode(g);
            return C;
        }
        return n(g);
    }
    function b(g) {
        if (g === 62) {
            e.consume(g);
            if (r.interrupt) {
                return t;
            }
            return _;
        }
        return n(g);
    }
    function I(g) {
        if (B(g)) {
            e.consume(g);
            return I;
        }
        return y(g);
    }
    function E(g) {
        if (g === 47) {
            e.consume(g);
            return y;
        }
        if (g === 58 || g === 95 || Y(g)) {
            e.consume(g);
            return D;
        }
        if (B(g)) {
            e.consume(g);
            return E;
        }
        return y(g);
    }
    function D(g) {
        if (g === 45 || g === 46 || g === 58 || g === 95 || Q(g)) {
            e.consume(g);
            return D;
        }
        return v(g);
    }
    function v(g) {
        if (g === 61) {
            e.consume(g);
            return S;
        }
        if (B(g)) {
            e.consume(g);
            return v;
        }
        return E(g);
    }
    function S(g) {
        if (g === null || g === 60 || g === 61 || g === 62 || g === 96) {
            return n(g);
        }
        if (g === 34 || g === 39) {
            e.consume(g);
            o = g;
            return M;
        }
        if (B(g)) {
            e.consume(g);
            return S;
        }
        return $(g);
    }
    function M(g) {
        if (g === o) {
            e.consume(g);
            o = null;
            return q;
        }
        if (g === null || z(g)) {
            return n(g);
        }
        e.consume(g);
        return M;
    }
    function $(g) {
        if (g === null || g === 34 || g === 39 || g === 47 || g === 60 || g === 61 || g === 62 || g === 96 || U(g)) {
            return v(g);
        }
        e.consume(g);
        return $;
    }
    function q(g) {
        if (g === 47 || g === 62 || B(g)) {
            return E(g);
        }
        return n(g);
    }
    function y(g) {
        if (g === 62) {
            e.consume(g);
            return k;
        }
        return n(g);
    }
    function k(g) {
        if (g === null || z(g)) {
            return _(g);
        }
        if (B(g)) {
            e.consume(g);
            return k;
        }
        return n(g);
    }
    function _(g) {
        if (g === 45 && i === 2) {
            e.consume(g);
            return H;
        }
        if (g === 60 && i === 1) {
            e.consume(g);
            return O;
        }
        if (g === 62 && i === 4) {
            e.consume(g);
            return ee;
        }
        if (g === 63 && i === 3) {
            e.consume(g);
            return m;
        }
        if (g === 93 && i === 5) {
            e.consume(g);
            return ae;
        }
        if (z(g) && (i === 6 || i === 7)) {
            e.exit("htmlFlowData");
            return e.check(Yl, ue, F)(g);
        }
        if (g === null || z(g)) {
            e.exit("htmlFlowData");
            return F(g);
        }
        e.consume(g);
        return _;
    }
    function F(g) {
        return e.check(Xl, A, ue)(g);
    }
    function A(g) {
        e.enter("lineEnding");
        e.consume(g);
        e.exit("lineEnding");
        return P;
    }
    function P(g) {
        if (g === null || z(g)) {
            return F(g);
        }
        e.enter("htmlFlowData");
        return _(g);
    }
    function H(g) {
        if (g === 45) {
            e.consume(g);
            return m;
        }
        return _(g);
    }
    function O(g) {
        if (g === 47) {
            e.consume(g);
            l = "";
            return N;
        }
        return _(g);
    }
    function N(g) {
        if (g === 62) {
            const te = l.toLowerCase();
            if (gn.includes(te)) {
                e.consume(g);
                return ee;
            }
            return _(g);
        }
        if (Y(g) && l.length < 8) {
            e.consume(g);
            l += String.fromCharCode(g);
            return N;
        }
        return _(g);
    }
    function ae(g) {
        if (g === 93) {
            e.consume(g);
            return m;
        }
        return _(g);
    }
    function m(g) {
        if (g === 62) {
            e.consume(g);
            return ee;
        }
        if (g === 45 && i === 2) {
            e.consume(g);
            return m;
        }
        return _(g);
    }
    function ee(g) {
        if (g === null || z(g)) {
            e.exit("htmlFlowData");
            return ue(g);
        }
        e.consume(g);
        return ee;
    }
    function ue(g) {
        e.exit("htmlFlow");
        return t(g);
    }
}
function Zl(e, t, n) {
    const r = this;
    return i;
    function i(l) {
        if (z(l)) {
            e.enter("lineEnding");
            e.consume(l);
            e.exit("lineEnding");
            return a;
        }
        return n(l);
    }
    function a(l) {
        if (r.parser.lazy[r.now().line]) {
            return n(l);
        }
        return t(l);
    }
}
function ea(e, t, n) {
    return r;
    function r(i) {
        e.enter("lineEnding");
        e.consume(i);
        e.exit("lineEnding");
        return e.attempt(Be, t, n);
    }
}
const ta = {
    name: "htmlText",
    tokenize: na
};
function na(e, t, n) {
    const r = this;
    let i;
    let a;
    let l;
    return u;
    function u(m) {
        e.enter("htmlText");
        e.enter("htmlTextData");
        e.consume(m);
        return o;
    }
    function o(m) {
        if (m === 33) {
            e.consume(m);
            return s;
        }
        if (m === 47) {
            e.consume(m);
            return v;
        }
        if (m === 63) {
            e.consume(m);
            return E;
        }
        if (Y(m)) {
            e.consume(m);
            return $;
        }
        return n(m);
    }
    function s(m) {
        if (m === 45) {
            e.consume(m);
            return c;
        }
        if (m === 91) {
            e.consume(m);
            a = 0;
            return d;
        }
        if (Y(m)) {
            e.consume(m);
            return I;
        }
        return n(m);
    }
    function c(m) {
        if (m === 45) {
            e.consume(m);
            return h;
        }
        return n(m);
    }
    function f(m) {
        if (m === null) {
            return n(m);
        }
        if (m === 45) {
            e.consume(m);
            return p;
        }
        if (z(m)) {
            l = f;
            return O(m);
        }
        e.consume(m);
        return f;
    }
    function p(m) {
        if (m === 45) {
            e.consume(m);
            return h;
        }
        return f(m);
    }
    function h(m) {
        switch(m){
            case 62:
                return H(m);
            case 45:
                return p(m);
            default:
                return f(m);
        }
    }
    function d(m) {
        const ee = "CDATA[";
        if (m === ee.charCodeAt(a++)) {
            e.consume(m);
            if (a === ee.length) {
                return x;
            }
            return d;
        }
        return n(m);
    }
    function x(m) {
        if (m === null) {
            return n(m);
        }
        if (m === 93) {
            e.consume(m);
            return C;
        }
        if (z(m)) {
            l = x;
            return O(m);
        }
        e.consume(m);
        return x;
    }
    function C(m) {
        if (m === 93) {
            e.consume(m);
            return b;
        }
        return x(m);
    }
    function b(m) {
        switch(m){
            case 62:
                return H(m);
            case 93:
                e.consume(m);
                return b;
            default:
                return x(m);
        }
    }
    function I(m) {
        if (m === null || m === 62) {
            return H(m);
        }
        if (z(m)) {
            l = I;
            return O(m);
        }
        e.consume(m);
        return I;
    }
    function E(m) {
        if (m === null) {
            return n(m);
        }
        if (m === 63) {
            e.consume(m);
            return D;
        }
        if (z(m)) {
            l = E;
            return O(m);
        }
        e.consume(m);
        return E;
    }
    function D(m) {
        if (m === 62) {
            return H(m);
        }
        return E(m);
    }
    function v(m) {
        if (Y(m)) {
            e.consume(m);
            return S;
        }
        return n(m);
    }
    function S(m) {
        if (m === 45 || Q(m)) {
            e.consume(m);
            return S;
        }
        return M(m);
    }
    function M(m) {
        if (z(m)) {
            l = M;
            return O(m);
        }
        if (B(m)) {
            e.consume(m);
            return M;
        }
        return H(m);
    }
    function $(m) {
        if (m === 45 || Q(m)) {
            e.consume(m);
            return $;
        }
        if (m === 47 || m === 62 || U(m)) {
            return q(m);
        }
        return n(m);
    }
    function q(m) {
        if (m === 47) {
            e.consume(m);
            return H;
        }
        if (m === 58 || m === 95 || Y(m)) {
            e.consume(m);
            return y;
        }
        if (z(m)) {
            l = q;
            return O(m);
        }
        if (B(m)) {
            e.consume(m);
            return q;
        }
        return H(m);
    }
    function y(m) {
        if (m === 45 || m === 46 || m === 58 || m === 95 || Q(m)) {
            e.consume(m);
            return y;
        }
        return k(m);
    }
    function k(m) {
        if (m === 61) {
            e.consume(m);
            return _;
        }
        if (z(m)) {
            l = k;
            return O(m);
        }
        if (B(m)) {
            e.consume(m);
            return k;
        }
        return q(m);
    }
    function _(m) {
        if (m === null || m === 60 || m === 61 || m === 62 || m === 96) {
            return n(m);
        }
        if (m === 34 || m === 39) {
            e.consume(m);
            i = m;
            return F;
        }
        if (z(m)) {
            l = _;
            return O(m);
        }
        if (B(m)) {
            e.consume(m);
            return _;
        }
        e.consume(m);
        return A;
    }
    function F(m) {
        if (m === i) {
            e.consume(m);
            i = undefined;
            return P;
        }
        if (m === null) {
            return n(m);
        }
        if (z(m)) {
            l = F;
            return O(m);
        }
        e.consume(m);
        return F;
    }
    function A(m) {
        if (m === null || m === 34 || m === 39 || m === 60 || m === 61 || m === 96) {
            return n(m);
        }
        if (m === 47 || m === 62 || U(m)) {
            return q(m);
        }
        e.consume(m);
        return A;
    }
    function P(m) {
        if (m === 47 || m === 62 || U(m)) {
            return q(m);
        }
        return n(m);
    }
    function H(m) {
        if (m === 62) {
            e.consume(m);
            e.exit("htmlTextData");
            e.exit("htmlText");
            return t;
        }
        return n(m);
    }
    function O(m) {
        e.exit("htmlTextData");
        e.enter("lineEnding");
        e.consume(m);
        e.exit("lineEnding");
        return N;
    }
    function N(m) {
        if (B(m)) {
            return R(e, ae, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(m);
        }
        return ae(m);
    }
    function ae(m) {
        e.enter("htmlTextData");
        return l(m);
    }
}
const Ot = {
    name: "labelEnd",
    resolveAll: aa,
    resolveTo: ua,
    tokenize: oa
};
const ra = {
    tokenize: sa
};
const ia = {
    tokenize: ca
};
const la = {
    tokenize: fa
};
function aa(e) {
    let t = -1;
    const n = [];
    while(++t < e.length){
        const r = e[t][1];
        n.push(e[t]);
        if (r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
            const i = r.type === "labelImage" ? 4 : 2;
            r.type = "data";
            t += i;
        }
    }
    if (e.length !== n.length) {
        K(e, 0, e.length, n);
    }
    return e;
}
function ua(e, t) {
    let e_length = e.length;
    let r = 0;
    let i;
    let a;
    let l;
    let u;
    while(e_length--){
        i = e[e_length][1];
        if (a) {
            if (i.type === "link" || i.type === "labelLink" && i._inactive) {
                break;
            }
            if (e[e_length][0] === "enter" && i.type === "labelLink") {
                i._inactive = true;
            }
        } else if (l) {
            if (e[e_length][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = e_length, i.type !== "labelLink")) {
                r = 2;
                break;
            }
        } else {
            if (i.type === "labelEnd") {
                l = e_length;
            }
        }
    }
    const o = {
        type: e[a][1].type === "labelLink" ? "link" : "image",
        start: {
            ...e[a][1].start
        },
        end: {
            ...e[e.length - 1][1].end
        }
    };
    const s = {
        type: "label",
        start: {
            ...e[a][1].start
        },
        end: {
            ...e[l][1].end
        }
    };
    const c = {
        type: "labelText",
        start: {
            ...e[a + r + 2][1].end
        },
        end: {
            ...e[l - 2][1].start
        }
    };
    u = [
        [
            "enter",
            o,
            t
        ],
        [
            "enter",
            s,
            t
        ]
    ];
    u = Z(u, e.slice(a + 1, a + r + 3));
    u = Z(u, [
        [
            "enter",
            c,
            t
        ]
    ]);
    u = Z(u, Ze(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, l - 3), t));
    u = Z(u, [
        [
            "exit",
            c,
            t
        ],
        e[l - 2],
        e[l - 1],
        [
            "exit",
            s,
            t
        ]
    ]);
    u = Z(u, e.slice(l + 1));
    u = Z(u, [
        [
            "exit",
            o,
            t
        ]
    ]);
    K(e, a, e.length, u);
    return e;
}
function oa(e, t, n) {
    const r = this;
    let length = r.events.length;
    let a;
    let l;
    while(length--){
        if ((r.events[length][1].type === "labelImage" || r.events[length][1].type === "labelLink") && !r.events[length][1]._balanced) {
            a = r.events[length][1];
            break;
        }
    }
    return u;
    function u(p) {
        if (a) {
            if (a._inactive) {
                return f(p);
            }
            l = r.parser.defined.includes(re(r.sliceSerialize({
                start: a.end,
                end: r.now()
            })));
            e.enter("labelEnd");
            e.enter("labelMarker");
            e.consume(p);
            e.exit("labelMarker");
            e.exit("labelEnd");
            return o;
        }
        return n(p);
    }
    function o(p) {
        if (p === 40) {
            return e.attempt(ra, c, l ? c : f)(p);
        }
        if (p === 91) {
            return e.attempt(ia, c, l ? s : f)(p);
        }
        if (l) {
            return c(p);
        }
        return f(p);
    }
    function s(p) {
        return e.attempt(la, c, f)(p);
    }
    function c(p) {
        return t(p);
    }
    function f(p) {
        a._balanced = true;
        return n(p);
    }
}
function sa(e, t, n) {
    return r;
    function r(f) {
        e.enter("resource");
        e.enter("resourceMarker");
        e.consume(f);
        e.exit("resourceMarker");
        return i;
    }
    function i(f) {
        if (U(f)) {
            return Ne(e, a)(f);
        }
        return a(f);
    }
    function a(f) {
        if (f === 41) {
            return c(f);
        }
        return ur(e, l, u, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f);
    }
    function l(f) {
        if (U(f)) {
            return Ne(e, o)(f);
        }
        return c(f);
    }
    function u(f) {
        return n(f);
    }
    function o(f) {
        if (f === 34 || f === 39 || f === 40) {
            return sr(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f);
        }
        return c(f);
    }
    function s(f) {
        if (U(f)) {
            return Ne(e, c)(f);
        }
        return c(f);
    }
    function c(f) {
        if (f === 41) {
            e.enter("resourceMarker");
            e.consume(f);
            e.exit("resourceMarker");
            e.exit("resource");
            return t;
        }
        return n(f);
    }
}
function ca(e, t, n) {
    const r = this;
    return i;
    function i(u) {
        return or.call(r, e, a, l, "reference", "referenceMarker", "referenceString")(u);
    }
    function a(u) {
        if (r.parser.defined.includes(re(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)))) {
            return t(u);
        }
        return n(u);
    }
    function l(u) {
        return n(u);
    }
}
function fa(e, t, n) {
    return r;
    function r(a) {
        e.enter("reference");
        e.enter("referenceMarker");
        e.consume(a);
        e.exit("referenceMarker");
        return i;
    }
    function i(a) {
        if (a === 93) {
            e.enter("referenceMarker");
            e.consume(a);
            e.exit("referenceMarker");
            e.exit("reference");
            return t;
        }
        return n(a);
    }
}
const ha = {
    name: "labelStartImage",
    resolveAll: Ot.resolveAll,
    tokenize: pa
};
function pa(e, t, n) {
    const r = this;
    return i;
    function i(u) {
        e.enter("labelImage");
        e.enter("labelImageMarker");
        e.consume(u);
        e.exit("labelImageMarker");
        return a;
    }
    function a(u) {
        if (u === 91) {
            e.enter("labelMarker");
            e.consume(u);
            e.exit("labelMarker");
            e.exit("labelImage");
            return l;
        }
        return n(u);
    }
    function l(u) {
        if (u === 94 && "_hiddenFootnoteSupport" in r.parser.constructs) {
            return n(u);
        }
        return t(u);
    }
}
const ma = {
    name: "labelStartLink",
    resolveAll: Ot.resolveAll,
    tokenize: ga
};
function ga(e, t, n) {
    const r = this;
    return i;
    function i(l) {
        e.enter("labelLink");
        e.enter("labelMarker");
        e.consume(l);
        e.exit("labelMarker");
        e.exit("labelLink");
        return a;
    }
    function a(l) {
        if (l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs) {
            return n(l);
        }
        return t(l);
    }
}
const at = {
    name: "lineEnding",
    tokenize: da
};
function da(e, t) {
    return n;
    function n(r) {
        e.enter("lineEnding");
        e.consume(r);
        e.exit("lineEnding");
        return R(e, t, "linePrefix");
    }
}
const We = {
    name: "thematicBreak",
    tokenize: xa
};
function xa(e, t, n) {
    let r = 0;
    let i;
    return a;
    function a(s) {
        e.enter("thematicBreak");
        return l(s);
    }
    function l(s) {
        i = s;
        return u(s);
    }
    function u(s) {
        if (s === i) {
            e.enter("thematicBreakSequence");
            return o(s);
        }
        if (r >= 3 && (s === null || z(s))) {
            e.exit("thematicBreak");
            return t(s);
        }
        return n(s);
    }
    function o(s) {
        if (s === i) {
            e.consume(s);
            r++;
            return o;
        }
        e.exit("thematicBreakSequence");
        if (B(s)) {
            return R(e, u, "whitespace")(s);
        }
        return u(s);
    }
}
const X = {
    continuation: {
        tokenize: wa
    },
    exit: Ca,
    name: "list",
    tokenize: ba
};
const ka = {
    partial: true,
    tokenize: Ea
};
const ya = {
    partial: true,
    tokenize: Sa
};
function ba(e, t, n) {
    const r = this;
    const i = r.events[r.events.length - 1];
    let a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], true).length : 0;
    let l = 0;
    return u;
    function u(h) {
        const d = r.containerState.type || (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
        if (d === "listUnordered" ? !r.containerState.marker || h === r.containerState.marker : bt(h)) {
            if (!r.containerState.type) {
                r.containerState.type = d;
                e.enter(d, {
                    _container: true
                });
            }
            if (d === "listUnordered") {
                e.enter("listItemPrefix");
                if (h === 42 || h === 45) {
                    return e.check(We, n, s)(h);
                }
                return s(h);
            }
            if (!r.interrupt || h === 49) {
                e.enter("listItemPrefix");
                e.enter("listItemValue");
                return o(h);
            }
        }
        return n(h);
    }
    function o(h) {
        if (bt(h) && ++l < 10) {
            e.consume(h);
            return o;
        }
        if ((!r.interrupt || l < 2) && (r.containerState.marker ? h === r.containerState.marker : h === 41 || h === 46)) {
            e.exit("listItemValue");
            return s(h);
        }
        return n(h);
    }
    function s(h) {
        e.enter("listItemMarker");
        e.consume(h);
        e.exit("listItemMarker");
        r.containerState.marker = r.containerState.marker || h;
        return e.check(Be, r.interrupt ? n : c, e.attempt(ka, p, f));
    }
    function c(h) {
        r.containerState.initialBlankLine = true;
        a++;
        return p(h);
    }
    function f(h) {
        if (B(h)) {
            e.enter("listItemPrefixWhitespace");
            e.consume(h);
            e.exit("listItemPrefixWhitespace");
            return p;
        }
        return n(h);
    }
    function p(h) {
        r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), true).length;
        return t(h);
    }
}
function wa(e, t, n) {
    const r = this;
    r.containerState._closeFlow = undefined;
    return e.check(Be, i, a);
    function i(u) {
        r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine;
        return R(e, t, "listItemIndent", r.containerState.size + 1)(u);
    }
    function a(u) {
        if (r.containerState.furtherBlankLines || !B(u)) {
            r.containerState.furtherBlankLines = undefined;
            r.containerState.initialBlankLine = undefined;
            return l(u);
        }
        r.containerState.furtherBlankLines = undefined;
        r.containerState.initialBlankLine = undefined;
        return e.attempt(ya, t, l)(u);
    }
    function l(u) {
        r.containerState._closeFlow = true;
        r.interrupt = undefined;
        return R(e, e.attempt(X, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(u);
    }
}
function Sa(e, t, n) {
    const r = this;
    return R(e, i, "listItemIndent", r.containerState.size + 1);
    function i(a) {
        const l = r.events[r.events.length - 1];
        if (l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], true).length === r.containerState.size) {
            return t(a);
        }
        return n(a);
    }
}
function Ca(e) {
    e.exit(this.containerState.type);
}
function Ea(e, t, n) {
    const r = this;
    return R(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 5);
    function i(a) {
        const l = r.events[r.events.length - 1];
        if (!B(a) && l && l[1].type === "listItemPrefixWhitespace") {
            return t(a);
        }
        return n(a);
    }
}
const dn = {
    name: "setextUnderline",
    resolveTo: Ia,
    tokenize: Ta
};
function Ia(e, t) {
    let e_length = e.length;
    let r;
    let i;
    let a;
    while(e_length--){
        if (e[e_length][0] === "enter") {
            if (e[e_length][1].type === "content") {
                r = e_length;
                break;
            }
            if (e[e_length][1].type === "paragraph") {
                i = e_length;
            }
        } else {
            if (e[e_length][1].type === "content") {
                e.splice(e_length, 1);
            }
            if (!a && e[e_length][1].type === "definition") {
                a = e_length;
            }
        }
    }
    const l = {
        type: "setextHeading",
        start: {
            ...e[r][1].start
        },
        end: {
            ...e[e.length - 1][1].end
        }
    };
    e[i][1].type = "setextHeadingText";
    if (a) {
        e.splice(i, 0, [
            "enter",
            l,
            t
        ]);
        e.splice(a + 1, 0, [
            "exit",
            e[r][1],
            t
        ]);
        e[r][1].end = {
            ...e[a][1].end
        };
    } else {
        e[r][1] = l;
    }
    e.push([
        "exit",
        l,
        t
    ]);
    return e;
}
function Ta(e, t, n) {
    const r = this;
    let i;
    return a;
    function a(s) {
        let length = r.events.length;
        let f;
        while(length--){
            if (r.events[length][1].type !== "lineEnding" && r.events[length][1].type !== "linePrefix" && r.events[length][1].type !== "content") {
                f = r.events[length][1].type === "paragraph";
                break;
            }
        }
        if (!r.parser.lazy[r.now().line] && (r.interrupt || f)) {
            e.enter("setextHeadingLine");
            i = s;
            return l(s);
        }
        return n(s);
    }
    function l(s) {
        e.enter("setextHeadingLineSequence");
        return u(s);
    }
    function u(s) {
        if (s === i) {
            e.consume(s);
            return u;
        }
        e.exit("setextHeadingLineSequence");
        if (B(s)) {
            return R(e, o, "lineSuffix")(s);
        }
        return o(s);
    }
    function o(s) {
        if (s === null || z(s)) {
            e.exit("setextHeadingLine");
            return t(s);
        }
        return n(s);
    }
}
const Aa = {
    tokenize: Fa
};
function Fa(e) {
    const t = this;
    const n = e.attempt(Be, r, e.attempt(this.parser.constructs.flowInitial, i, R(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Ll, i)), "linePrefix")));
    return n;
    function r(a) {
        if (a === null) {
            e.consume(a);
            return;
        }
        e.enter("lineEndingBlank");
        e.consume(a);
        e.exit("lineEndingBlank");
        t.currentConstruct = undefined;
        return n;
    }
    function i(a) {
        if (a === null) {
            e.consume(a);
            return;
        }
        e.enter("lineEnding");
        e.consume(a);
        e.exit("lineEnding");
        t.currentConstruct = undefined;
        return n;
    }
}
const za = {
    resolveAll: fr()
};
const _a = cr("string");
const Pa = cr("text");
function cr(e) {
    return {
        resolveAll: fr(e === "text" ? Da : undefined),
        tokenize: t
    };
    function t(n) {
        const r = this;
        const i = this.parser.constructs[e];
        const a = n.attempt(i, l, u);
        return l;
        function l(c) {
            if (s(c)) {
                return a(c);
            }
            return u(c);
        }
        function u(c) {
            if (c === null) {
                n.consume(c);
                return;
            }
            n.enter("data");
            n.consume(c);
            return o;
        }
        function o(c) {
            if (s(c)) {
                n.exit("data");
                return a(c);
            }
            n.consume(c);
            return o;
        }
        function s(c) {
            if (c === null) {
                return true;
            }
            const f = i[c];
            let p = -1;
            if (f) {
                while(++p < f.length){
                    const h = f[p];
                    if (!h.previous || h.previous.call(r, r.previous)) {
                        return true;
                    }
                }
            }
            return false;
        }
    }
}
function fr(e) {
    return t;
    function t(n, r) {
        let i = -1;
        let a;
        while(++i <= n.length){
            a === undefined ? n[i] && n[i][1].type === "data" && (a = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== a + 2 && (n[a][1].end = n[i - 1][1].end, n.splice(a + 2, i - a - 2), i = a + 2), a = undefined);
        }
        if (e) {
            return e(n, r);
        }
        return n;
    }
}
function Da(e, t) {
    let n = 0;
    while(++n <= e.length){
        if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
            const r = e[n - 1][1];
            const i = t.sliceStream(r);
            let a = i.length;
            let l = -1;
            let u = 0;
            let o;
            while(a--){
                const s = i[a];
                if (typeof s === "string") {
                    for(l = s.length; s.charCodeAt(l - 1) === 32;){
                        u++;
                        l--;
                    }
                    if (l) {
                        break;
                    }
                    l = -1;
                } else if (s === -2) {
                    o = true;
                    u++;
                } else if (s !== -1) {
                    a++;
                    break;
                }
            }
            if (t._contentTypeTextTrailing && n === e.length) {
                u = 0;
            }
            if (u) {
                const s = {
                    type: n === e.length || o || u < 2 ? "lineSuffix" : "hardBreakTrailing",
                    start: {
                        _bufferIndex: a ? l : r.start._bufferIndex + l,
                        _index: r.start._index + a,
                        line: r.end.line,
                        column: r.end.column - u,
                        offset: r.end.offset - u
                    },
                    end: {
                        ...r.end
                    }
                };
                r.end = {
                    ...s.start
                };
                if (r.start.offset === r.end.offset) {
                    Object.assign(r, s);
                } else {
                    e.splice(n, 0, [
                        "enter",
                        s,
                        t
                    ], [
                        "exit",
                        s,
                        t
                    ]);
                    n += 2;
                }
            }
            n++;
        }
    }
    return e;
}
const document_1 = {
    42: X,
    43: X,
    45: X,
    48: X,
    49: X,
    50: X,
    51: X,
    52: X,
    53: X,
    54: X,
    55: X,
    56: X,
    57: X,
    62: rr
};
const contentInitial = {
    91: Ol
};
const flowInitial = {
    [-2]: lt,
    [-1]: lt,
    32: lt
};
const flow = {
    35: Vl,
    42: We,
    45: [
        dn,
        We
    ],
    60: Gl,
    61: dn,
    95: We,
    96: mn,
    126: mn
};
const string = {
    38: lr,
    92: ir
};
const Oa = {
    [-5]: at,
    [-4]: at,
    [-3]: at,
    33: ha,
    38: lr,
    42: wt,
    60: [
        ml,
        ta
    ],
    91: ma,
    92: [
        $l,
        ir
    ],
    93: Ot,
    95: wt,
    96: Al
};
const insideSpan = {
    null: [
        wt,
        za
    ]
};
const attentionMarkers = {
    null: [
        42,
        95
    ]
};
const disable = {
    null: []
};
const $a = Object.freeze(Object.defineProperty({
    __proto__: null,
    attentionMarkers,
    contentInitial,
    disable,
    document: document_1,
    flow,
    flowInitial,
    insideSpan,
    string,
    text: Oa
}, Symbol.toStringTag, {
    value: "Module"
}));
function Ha(parser, t, n) {
    let r = {
        _bufferIndex: -1,
        _index: 0,
        line: n && n.line || 1,
        column: n && n.column || 1,
        offset: n && n.offset || 0
    };
    const i = {};
    const a = [];
    let l = [];
    let u = [];
    const o = {
        attempt: M(v),
        check: M(S),
        consume,
        enter,
        exit: D,
        interrupt: M(S, {
            interrupt: true
        })
    };
    const s = {
        code: null,
        containerState: {},
        defineSkip,
        events: [],
        now,
        parser,
        previous: null,
        sliceSerialize,
        sliceStream,
        write
    };
    let c = t.tokenize.call(s, o);
    if (t.resolveAll) {
        a.push(t);
    }
    return s;
    function write(k) {
        l = Z(l, k);
        C();
        if (l[l.length - 1] !== null) {
            return [];
        }
        $(t, 0);
        s.events = Ze(a, s.events, s);
        return s.events;
    }
    function sliceSerialize(k, _) {
        return Ua(sliceStream(k), _);
    }
    function sliceStream(k) {
        return Va(l, k);
    }
    function now() {
        const { _bufferIndex, _index, line, column, offset } = r;
        return {
            _bufferIndex,
            _index,
            line,
            column,
            offset
        };
    }
    function defineSkip(k) {
        i[k.line] = k.column;
        y();
    }
    function C() {
        let k;
        while(r._index < l.length){
            const _ = l[r._index];
            if (typeof _ === "string") {
                k = r._index;
                if (r._bufferIndex < 0) {
                    r._bufferIndex = 0;
                }
                while(r._index === k && r._bufferIndex < _.length){
                    b(_.charCodeAt(r._bufferIndex));
                }
            } else {
                b(_);
            }
        }
    }
    function b(k) {
        c = c(k);
    }
    function consume(k) {
        if (z(k)) {
            r.line++;
            r.column = 1;
            r.offset += k === -3 ? 2 : 1;
            y();
        } else {
            k !== -1 && (r.column++, r.offset++);
        }
        r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++));
        s.previous = k;
    }
    function enter(k, _) {
        const F = _ || {};
        F.type = k;
        F.start = now();
        s.events.push([
            "enter",
            F,
            s
        ]);
        u.push(F);
        return F;
    }
    function D(k) {
        const _ = u.pop();
        _.end = now();
        s.events.push([
            "exit",
            _,
            s
        ]);
        return _;
    }
    function v(k, _) {
        $(k, _.from);
    }
    function S(k, _) {
        _.restore();
    }
    function M(k, _) {
        return F;
        function F(A, P, H) {
            let O;
            let N;
            let ae;
            let m;
            if (Array.isArray(A)) {
                return ue(A);
            }
            if ("tokenize" in A) {
                return ue([
                    A
                ]);
            }
            return ee(A);
            function ee(W) {
                return Ae;
                function Ae(fe) {
                    const ye = fe !== null && W[fe];
                    const be = fe !== null && W.null;
                    const qe = [
                        ...Array.isArray(ye) ? ye : ye ? [
                            ye
                        ] : [],
                        ...Array.isArray(be) ? be : be ? [
                            be
                        ] : []
                    ];
                    return ue(qe)(fe);
                }
            }
            function ue(W) {
                O = W;
                N = 0;
                if (W.length === 0) {
                    return H;
                }
                return g(W[N]);
            }
            function g(W) {
                return Ae;
                function Ae(fe) {
                    m = q();
                    ae = W;
                    if (!W.partial) {
                        s.currentConstruct = W;
                    }
                    if (W.name && s.parser.constructs.disable.null.includes(W.name)) {
                        return ge();
                    }
                    return W.tokenize.call(_ ? Object.assign(Object.create(s), _) : s, o, te, ge)(fe);
                }
            }
            function te(W) {
                k(ae, m);
                return P;
            }
            function ge(W) {
                m.restore();
                if (++N < O.length) {
                    return g(O[N]);
                }
                return H;
            }
        }
    }
    function $(k, _) {
        if (k.resolveAll && !a.includes(k)) {
            a.push(k);
        }
        if (k.resolve) {
            K(s.events, _, s.events.length - _, k.resolve(s.events.slice(_), s));
        }
        if (k.resolveTo) {
            s.events = k.resolveTo(s.events, s);
        }
    }
    function q() {
        const k = now();
        const { previous, currentConstruct } = s;
        const length = s.events.length;
        const P = Array.from(u);
        return {
            from: length,
            restore
        };
        function restore() {
            r = k;
            s.previous = previous;
            s.currentConstruct = currentConstruct;
            s.events.length = length;
            u = P;
            y();
        }
    }
    function y() {
        if (r.line in i && r.column < 2) {
            r.column = i[r.line];
            r.offset += i[r.line] - 1;
        }
    }
}
function Va(e, t) {
    const _index = t.start._index;
    const _bufferIndex = t.start._bufferIndex;
    const _index_1 = t.end._index;
    const _bufferIndex_1 = t.end._bufferIndex;
    let l;
    if (_index === _index_1) {
        l = [
            e[_index].slice(_bufferIndex, _bufferIndex_1)
        ];
    } else {
        l = e.slice(_index, _index_1);
        if (_bufferIndex > -1) {
            const u = l[0];
            if (typeof u === "string") {
                l[0] = u.slice(_bufferIndex);
            } else {
                l.shift();
            }
        }
        if (_bufferIndex_1 > 0) {
            l.push(e[_index_1].slice(0, _bufferIndex_1));
        }
    }
    return l;
}
function Ua(e, t) {
    let n = -1;
    const r = [];
    let i;
    while(++n < e.length){
        const a = e[n];
        let l;
        if (typeof a === "string") {
            l = a;
        } else {
            switch(a){
                case -5:
                    {
                        l = "\r";
                        break;
                    }
                case -4:
                    {
                        l = `
`;
                        break;
                    }
                case -3:
                    {
                        l = `\r
`;
                        break;
                    }
                case -2:
                    {
                        l = t ? " " : "	";
                        break;
                    }
                case -1:
                    {
                        if (!t && i) {
                            continue;
                        }
                        l = " ";
                        break;
                    }
                default:
                    l = String.fromCharCode(a);
            }
        }
        i = a === -2;
        r.push(l);
    }
    return r.join("");
}
function Wa(e) {
    const r = {
        constructs: tr([
            $a,
            ...(e || {}).extensions || []
        ]),
        content: i(ul),
        defined: [],
        document: i(sl),
        flow: i(Aa),
        lazy: {},
        string: i(_a),
        text: i(Pa)
    };
    return r;
    function i(a) {
        return l;
        function l(u) {
            return Ha(r, a, u);
        }
    }
}
function Qa(e) {
    while(!ar(e));
    return e;
}
const xn = /[\0\t\n\r]/g;
function Ga() {
    let e = 1;
    let t = "";
    let n = true;
    let r;
    return i;
    function i(a, l, u) {
        const o = [];
        let s;
        let c;
        let f;
        let p;
        let h;
        a = t + (typeof a === "string" ? a.toString() : new TextDecoder(l || undefined).decode(a));
        f = 0;
        t = "";
        if (n) {
            a.charCodeAt(0) === 65279 && f++;
            n = undefined;
        }
        while(f < a.length){
            xn.lastIndex = f;
            s = xn.exec(a);
            p = s && s.index !== undefined ? s.index : a.length;
            h = a.charCodeAt(p);
            if (!s) {
                t = a.slice(f);
                break;
            }
            if (h === 10 && f === p && r) {
                o.push(-3);
                r = undefined;
            } else {
                if (r) {
                    o.push(-5);
                    r = undefined;
                }
                if (f < p) {
                    o.push(a.slice(f, p));
                    e += p - f;
                }
                switch(h){
                    case 0:
                        {
                            o.push(65533);
                            e++;
                            break;
                        }
                    case 9:
                        {
                            c = Math.ceil(e / 4) * 4;
                            o.push(-2);
                            while(e++ < c){
                                o.push(-1);
                            }
                            break;
                        }
                    case 10:
                        {
                            o.push(-4);
                            e = 1;
                            break;
                        }
                    default:
                        r = true;
                        e = 1;
                }
            }
            f = p + 1;
        }
        if (u) {
            if (r) {
                o.push(-5);
            }
            if (t) {
                o.push(t);
            }
            o.push(null);
        }
        return o;
    }
}
const Ya = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Xa(e) {
    return e.replace(Ya, Ja);
}
function Ja(e, t, n) {
    if (t) {
        return t;
    }
    if (n.charCodeAt(0) === 35) {
        const i = n.charCodeAt(1);
        const a = i === 120 || i === 88;
        return nr(n.slice(a ? 2 : 1), a ? 16 : 10);
    }
    return vt(n) || e;
}
const hasOwnProperty_2 = {}.hasOwnProperty;
function Ka(e, t, n) {
    if (typeof t !== "string") {
        n = t;
        t = undefined;
    }
    return Za(n)(Qa(Wa(n).document().write(Ga()(e, t, true))));
}
function Za(e) {
    const config = {
        transforms: [],
        canContainEols: [
            "emphasis",
            "fragment",
            "heading",
            "paragraph",
            "strong"
        ],
        enter: {
            autolink: a(Jt),
            autolinkProtocol: q,
            autolinkEmail: q,
            atxHeading: a(Gt),
            blockQuote: a(be),
            characterEscape: q,
            characterReference: q,
            codeFenced: a(qe),
            codeFencedFenceInfo: l,
            codeFencedFenceMeta: l,
            codeIndented: a(qe, l),
            codeText: a(ti, l),
            codeTextData: q,
            data: q,
            codeFlowValue: q,
            definition: a(ni),
            definitionDestinationString: l,
            definitionLabelString: l,
            definitionTitleString: l,
            emphasis: a(ri),
            hardBreakEscape: a(Yt),
            hardBreakTrailing: a(Yt),
            htmlFlow: a(Xt, l),
            htmlFlowData: q,
            htmlText: a(Xt, l),
            htmlTextData: q,
            image: a(ii),
            label: l,
            link: a(Jt),
            listItem: a(li),
            listItemValue,
            listOrdered: a(Kt, f),
            listUnordered: a(Kt),
            paragraph: a(ai),
            reference,
            referenceString: l,
            resourceDestinationString: l,
            resourceTitleString: l,
            setextHeading: a(Gt),
            strong: a(ui),
            thematicBreak: a(si)
        },
        exit: {
            atxHeading: o(),
            atxHeadingSequence,
            autolink: o(),
            autolinkEmail,
            autolinkProtocol,
            blockQuote: o(),
            characterEscapeValue: y,
            characterReferenceMarkerHexadecimal: ge,
            characterReferenceMarkerNumeric: ge,
            characterReferenceValue,
            characterReference,
            codeFenced: o(C),
            codeFencedFence,
            codeFencedFenceInfo,
            codeFencedFenceMeta,
            codeFlowValue: y,
            codeIndented: o(b),
            codeText: o(P),
            codeTextData: y,
            data: y,
            definition: o(),
            definitionDestinationString,
            definitionLabelString,
            definitionTitleString,
            emphasis: o(),
            hardBreakEscape: o(_),
            hardBreakTrailing: o(_),
            htmlFlow: o(F),
            htmlFlowData: y,
            htmlText: o(A),
            htmlTextData: y,
            image: o(O),
            label,
            labelText,
            lineEnding,
            link: o(H),
            listItem: o(),
            listOrdered: o(),
            listUnordered: o(),
            paragraph: o(),
            referenceString,
            resourceDestinationString,
            resourceTitleString,
            resource,
            setextHeading: o($),
            setextHeadingLineSequence,
            setextHeadingText,
            strong: o(),
            thematicBreak: o()
        }
    };
    pr(config, (e || {}).mdastExtensions || []);
    const data = {};
    return r;
    function r(w) {
        let T = {
            type: "root",
            children: []
        };
        const L = {
            stack: [
                T
            ],
            tokenStack: [],
            config,
            enter,
            exit: s,
            buffer: l,
            resume,
            data
        };
        const j = [];
        let V = -1;
        while(++V < w.length){
            if (w[V][1].type === "listOrdered" || w[V][1].type === "listUnordered") {
                if (w[V][0] === "enter") {
                    j.push(V);
                } else {
                    const ne = j.pop();
                    V = i(w, ne, V);
                }
            }
        }
        for(V = -1; ++V < w.length;){
            const ne = config[w[V][0]];
            if (hasOwnProperty_2.call(ne, w[V][1].type)) {
                ne[w[V][1].type].call({
                    sliceSerialize: w[V][2].sliceSerialize,
                    ...L
                }, w[V][1]);
            }
        }
        if (L.tokenStack.length > 0) {
            const ne = L.tokenStack[L.tokenStack.length - 1];
            (ne[1] || kn).call(L, undefined, ne[0]);
        }
        T.position = {
            start: he(w.length > 0 ? w[0][1].start : {
                line: 1,
                column: 1,
                offset: 0
            }),
            end: he(w.length > 0 ? w[w.length - 2][1].end : {
                line: 1,
                column: 1,
                offset: 0
            })
        };
        for(V = -1; ++V < config.transforms.length;){
            T = config.transforms[V](T) || T;
        }
        return T;
    }
    function i(w, T, L) {
        let j = T - 1;
        let V = -1;
        let ne = false;
        let de;
        let oe;
        let Fe;
        let ze;
        while(++j <= L){
            const J = w[j];
            switch(J[1].type){
                case "listUnordered":
                case "listOrdered":
                case "blockQuote":
                    {
                        J[0] === "enter" ? V++ : V--;
                        ze = undefined;
                        break;
                    }
                case "lineEndingBlank":
                    {
                        if (J[0] === "enter") {
                            if (de && !ze && !V && !Fe) {
                                Fe = j;
                            }
                            ze = undefined;
                        }
                        break;
                    }
                case "linePrefix":
                case "listItemValue":
                case "listItemMarker":
                case "listItemPrefix":
                case "listItemPrefixWhitespace":
                    break;
                default:
                    ze = undefined;
            }
            if (!V && J[0] === "enter" && J[1].type === "listItemPrefix" || V === -1 && J[0] === "exit" && (J[1].type === "listUnordered" || J[1].type === "listOrdered")) {
                if (de) {
                    let we = j;
                    for(oe = undefined; we--;){
                        const se = w[we];
                        if (se[1].type === "lineEnding" || se[1].type === "lineEndingBlank") {
                            if (se[0] === "exit") {
                                continue;
                            }
                            if (oe) {
                                w[oe][1].type = "lineEndingBlank";
                                ne = true;
                            }
                            se[1].type = "lineEnding";
                            oe = we;
                        } else if (!(se[1].type === "linePrefix" || se[1].type === "blockQuotePrefix" || se[1].type === "blockQuotePrefixWhitespace" || se[1].type === "blockQuoteMarker" || se[1].type === "listItemIndent")) {
                            break;
                        }
                    }
                    if (Fe && (!oe || Fe < oe)) {
                        de._spread = true;
                    }
                    de.end = {
                        ...oe ? w[oe][1].start : J[1].end
                    };
                    w.splice(oe || j, 0, [
                        "exit",
                        de,
                        J[2]
                    ]);
                    j++;
                    L++;
                }
                if (J[1].type === "listItemPrefix") {
                    const we = {
                        type: "listItem",
                        _spread: false,
                        start: {
                            ...J[1].start
                        },
                        end: undefined
                    };
                    de = we;
                    w.splice(j, 0, [
                        "enter",
                        we,
                        J[2]
                    ]);
                    j++;
                    L++;
                    Fe = undefined;
                    ze = true;
                }
            }
        }
        w[T][1]._spread = ne;
        return L;
    }
    function a(w, T) {
        return L;
        function L(j) {
            enter.call(this, w(j), j);
            if (T) {
                T.call(this, j);
            }
        }
    }
    function l() {
        this.stack.push({
            type: "fragment",
            children: []
        });
    }
    function enter(w, T, L) {
        this.stack[this.stack.length - 1].children.push(w);
        this.stack.push(w);
        this.tokenStack.push([
            T,
            L || undefined
        ]);
        w.position = {
            start: he(T.start),
            end: undefined
        };
    }
    function o(w) {
        return T;
        function T(L) {
            if (w) {
                w.call(this, L);
            }
            s.call(this, L);
        }
    }
    function s(w, T) {
        const L = this.stack.pop();
        const j = this.tokenStack.pop();
        if (j) {
            j[0].type !== w.type && (T ? T.call(this, w, j[0]) : (j[1] || kn).call(this, w, j[0]));
        } else {
            throw new Error(`Cannot close \`${w.type}\` (${Me({
                start: w.start,
                end: w.end
            })}): it’s not open`);
        }
        L.position.end = he(w.end);
    }
    function resume() {
        return Rt(this.stack.pop());
    }
    function f() {
        this.data.expectingFirstListItemValue = true;
    }
    function listItemValue(w) {
        if (this.data.expectingFirstListItemValue) {
            const T = this.stack[this.stack.length - 2];
            T.start = Number.parseInt(this.sliceSerialize(w), 10);
            this.data.expectingFirstListItemValue = undefined;
        }
    }
    function codeFencedFenceInfo() {
        const w = this.resume();
        const T = this.stack[this.stack.length - 1];
        T.lang = w;
    }
    function codeFencedFenceMeta() {
        const w = this.resume();
        const T = this.stack[this.stack.length - 1];
        T.meta = w;
    }
    function codeFencedFence() {
        if (!this.data.flowCodeInside) {
            this.buffer();
            this.data.flowCodeInside = true;
        }
    }
    function C() {
        const w = this.resume();
        const T = this.stack[this.stack.length - 1];
        T.value = w.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
        this.data.flowCodeInside = undefined;
    }
    function b() {
        const w = this.resume();
        const T = this.stack[this.stack.length - 1];
        T.value = w.replace(/(\r?\n|\r)$/g, "");
    }
    function definitionLabelString(w) {
        const T = this.resume();
        const L = this.stack[this.stack.length - 1];
        L.label = T;
        L.identifier = re(this.sliceSerialize(w)).toLowerCase();
    }
    function definitionTitleString() {
        const w = this.resume();
        const T = this.stack[this.stack.length - 1];
        T.title = w;
    }
    function definitionDestinationString() {
        const w = this.resume();
        const T = this.stack[this.stack.length - 1];
        T.url = w;
    }
    function atxHeadingSequence(w) {
        const T = this.stack[this.stack.length - 1];
        if (!T.depth) {
            const L = this.sliceSerialize(w).length;
            T.depth = L;
        }
    }
    function setextHeadingText() {
        this.data.setextHeadingSlurpLineEnding = true;
    }
    function setextHeadingLineSequence(w) {
        const T = this.stack[this.stack.length - 1];
        T.depth = this.sliceSerialize(w).codePointAt(0) === 61 ? 1 : 2;
    }
    function $() {
        this.data.setextHeadingSlurpLineEnding = undefined;
    }
    function q(w) {
        const children = this.stack[this.stack.length - 1].children;
        let j = children[children.length - 1];
        if (!j || j.type !== "text") {
            j = oi();
            j.position = {
                start: he(w.start),
                end: undefined
            };
            children.push(j);
        }
        this.stack.push(j);
    }
    function y(w) {
        const T = this.stack.pop();
        T.value += this.sliceSerialize(w);
        T.position.end = he(w.end);
    }
    function lineEnding(w) {
        const T = this.stack[this.stack.length - 1];
        if (this.data.atHardBreak) {
            const L = T.children[T.children.length - 1];
            L.position.end = he(w.end);
            this.data.atHardBreak = undefined;
            return;
        }
        if (!this.data.setextHeadingSlurpLineEnding && config.canContainEols.includes(T.type)) {
            q.call(this, w);
            y.call(this, w);
        }
    }
    function _() {
        this.data.atHardBreak = true;
    }
    function F() {
        const w = this.resume();
        const T = this.stack[this.stack.length - 1];
        T.value = w;
    }
    function A() {
        const w = this.resume();
        const T = this.stack[this.stack.length - 1];
        T.value = w;
    }
    function P() {
        const w = this.resume();
        const T = this.stack[this.stack.length - 1];
        T.value = w;
    }
    function H() {
        const w = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const T = this.data.referenceType || "shortcut";
            w.type += "Reference";
            w.referenceType = T;
            delete w.url;
            delete w.title;
        } else {
            delete w.identifier;
            delete w.label;
        }
        this.data.referenceType = undefined;
    }
    function O() {
        const w = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const T = this.data.referenceType || "shortcut";
            w.type += "Reference";
            w.referenceType = T;
            delete w.url;
            delete w.title;
        } else {
            delete w.identifier;
            delete w.label;
        }
        this.data.referenceType = undefined;
    }
    function labelText(w) {
        const T = this.sliceSerialize(w);
        const L = this.stack[this.stack.length - 2];
        L.label = Xa(T);
        L.identifier = re(T).toLowerCase();
    }
    function label() {
        const w = this.stack[this.stack.length - 1];
        const T = this.resume();
        const L = this.stack[this.stack.length - 1];
        this.data.inReference = true;
        if (L.type === "link") {
            const j = w.children;
            L.children = j;
        } else {
            L.alt = T;
        }
    }
    function resourceDestinationString() {
        const w = this.resume();
        const T = this.stack[this.stack.length - 1];
        T.url = w;
    }
    function resourceTitleString() {
        const w = this.resume();
        const T = this.stack[this.stack.length - 1];
        T.title = w;
    }
    function resource() {
        this.data.inReference = undefined;
    }
    function reference() {
        this.data.referenceType = "collapsed";
    }
    function referenceString(w) {
        const T = this.resume();
        const L = this.stack[this.stack.length - 1];
        L.label = T;
        L.identifier = re(this.sliceSerialize(w)).toLowerCase();
        this.data.referenceType = "full";
    }
    function ge(w) {
        this.data.characterReferenceType = w.type;
    }
    function characterReferenceValue(w) {
        const T = this.sliceSerialize(w);
        const characterReferenceType = this.data.characterReferenceType;
        let j;
        if (characterReferenceType) {
            j = nr(T, characterReferenceType === "characterReferenceMarkerNumeric" ? 10 : 16);
            this.data.characterReferenceType = undefined;
        } else {
            j = vt(T);
        }
        const V = this.stack[this.stack.length - 1];
        V.value += j;
    }
    function characterReference(w) {
        const T = this.stack.pop();
        T.position.end = he(w.end);
    }
    function autolinkProtocol(w) {
        y.call(this, w);
        const T = this.stack[this.stack.length - 1];
        T.url = this.sliceSerialize(w);
    }
    function autolinkEmail(w) {
        y.call(this, w);
        const T = this.stack[this.stack.length - 1];
        T.url = `mailto:${this.sliceSerialize(w)}`;
    }
    function be() {
        return {
            type: "blockquote",
            children: []
        };
    }
    function qe() {
        return {
            type: "code",
            lang: null,
            meta: null,
            value: ""
        };
    }
    function ti() {
        return {
            type: "inlineCode",
            value: ""
        };
    }
    function ni() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: ""
        };
    }
    function ri() {
        return {
            type: "emphasis",
            children: []
        };
    }
    function Gt() {
        return {
            type: "heading",
            depth: 0,
            children: []
        };
    }
    function Yt() {
        return {
            type: "break"
        };
    }
    function Xt() {
        return {
            type: "html",
            value: ""
        };
    }
    function ii() {
        return {
            type: "image",
            title: null,
            url: "",
            alt: null
        };
    }
    function Jt() {
        return {
            type: "link",
            title: null,
            url: "",
            children: []
        };
    }
    function Kt(w) {
        return {
            type: "list",
            ordered: w.type === "listOrdered",
            start: null,
            spread: w._spread,
            children: []
        };
    }
    function li(w) {
        return {
            type: "listItem",
            spread: w._spread,
            checked: null,
            children: []
        };
    }
    function ai() {
        return {
            type: "paragraph",
            children: []
        };
    }
    function ui() {
        return {
            type: "strong",
            children: []
        };
    }
    function oi() {
        return {
            type: "text",
            value: ""
        };
    }
    function si() {
        return {
            type: "thematicBreak"
        };
    }
}
function he(e) {
    return {
        line: e.line,
        column: e.column,
        offset: e.offset
    };
}
function pr(e, t) {
    let n = -1;
    while(++n < t.length){
        const r = t[n];
        if (Array.isArray(r)) {
            pr(e, r);
        } else {
            eu(e, r);
        }
    }
}
function eu(e, t) {
    let n;
    for(n in t){
        if (hasOwnProperty_2.call(t, n)) {
            switch(n){
                case "canContainEols":
                    {
                        const r = t[n];
                        if (r) {
                            e[n].push(...r);
                        }
                        break;
                    }
                case "transforms":
                    {
                        const r = t[n];
                        if (r) {
                            e[n].push(...r);
                        }
                        break;
                    }
                case "enter":
                case "exit":
                    {
                        const r = t[n];
                        if (r) {
                            Object.assign(e[n], r);
                        }
                        break;
                    }
            }
        }
    }
}
function kn(e, t) {
    throw e ? new Error(`Cannot close \`${e.type}\` (${Me({
        start: e.start,
        end: e.end
    })}): a different token (\`${t.type}\`, ${Me({
        start: t.start,
        end: t.end
    })}) is open`) : new Error(`Cannot close document, a token (\`${t.type}\`, ${Me({
        start: t.start,
        end: t.end
    })}) is still open`);
}
function tu(e) {
    const t = this;
    t.parser = n;
    function n(r) {
        return Ka(r, {
            ...t.data("settings"),
            ...e,
            extensions: t.data("micromarkExtensions") || [],
            mdastExtensions: t.data("fromMarkdownExtensions") || []
        });
    }
}
function nu(e, t) {
    const n = {
        type: "element",
        tagName: "blockquote",
        properties: {},
        children: e.wrap(e.all(t), true)
    };
    e.patch(t, n);
    return e.applyData(t, n);
}
function ru(e, t) {
    const n = {
        type: "element",
        tagName: "br",
        properties: {},
        children: []
    };
    e.patch(t, n);
    return [
        e.applyData(t, n),
        {
            type: "text",
            value: `
`
        }
    ];
}
function iu(e, t) {
    const n = t.value ? t.value + `
` : "";
    const r = {};
    if (t.lang) {
        r.className = [
            `language-${t.lang}`
        ];
    }
    let i = {
        type: "element",
        tagName: "code",
        properties: r,
        children: [
            {
                type: "text",
                value: n
            }
        ]
    };
    if (t.meta) {
        i.data = {
            meta: t.meta
        };
    }
    e.patch(t, i);
    i = e.applyData(t, i);
    i = {
        type: "element",
        tagName: "pre",
        properties: {},
        children: [
            i
        ]
    };
    e.patch(t, i);
    return i;
}
function lu(e, t) {
    const n = {
        type: "element",
        tagName: "del",
        properties: {},
        children: e.all(t)
    };
    e.patch(t, n);
    return e.applyData(t, n);
}
function emphasis(e, t) {
    const n = {
        type: "element",
        tagName: "em",
        properties: {},
        children: e.all(t)
    };
    e.patch(t, n);
    return e.applyData(t, n);
}
function footnoteReference(e, t) {
    const n = typeof e.options.clobberPrefix === "string" ? e.options.clobberPrefix : "user-content-";
    const r = String(t.identifier).toUpperCase();
    const i = Te(r.toLowerCase());
    const a = e.footnoteOrder.indexOf(r);
    let l;
    let u = e.footnoteCounts.get(r);
    if (u === undefined) {
        u = 0;
        e.footnoteOrder.push(r);
        l = e.footnoteOrder.length;
    } else {
        l = a + 1;
    }
    u += 1;
    e.footnoteCounts.set(r, u);
    const o = {
        type: "element",
        tagName: "a",
        properties: {
            href: `#${n}fn-${i}`,
            id: `${n}fnref-${i}${u > 1 ? `-${u}` : ""}`,
            dataFootnoteRef: true,
            ariaDescribedBy: [
                "footnote-label"
            ]
        },
        children: [
            {
                type: "text",
                value: String(l)
            }
        ]
    };
    e.patch(t, o);
    const s = {
        type: "element",
        tagName: "sup",
        properties: {},
        children: [
            o
        ]
    };
    e.patch(t, s);
    return e.applyData(t, s);
}
function ou(e, t) {
    const n = {
        type: "element",
        tagName: `h${t.depth}`,
        properties: {},
        children: e.all(t)
    };
    e.patch(t, n);
    return e.applyData(t, n);
}
function html(e, t) {
    if (e.options.allowDangerousHtml) {
        const n = {
            type: "raw",
            value: t.value
        };
        e.patch(t, n);
        return e.applyData(t, n);
    }
}
function mr(e, t) {
    const t_referenceType = t.referenceType;
    let r = "]";
    if (t_referenceType === "collapsed") {
        r += "[]";
    } else if (t_referenceType === "full") {
        r += `[${t.label || t.identifier}]`;
    }
    if (t.type === "imageReference") {
        return [
            {
                type: "text",
                value: `![${t.alt}${r}`
            }
        ];
    }
    const i = e.all(t);
    const a = i[0];
    if (a && a.type === "text") {
        a.value = `[${a.value}`;
    } else {
        i.unshift({
            type: "text",
            value: "["
        });
    }
    const l = i[i.length - 1];
    if (l && l.type === "text") {
        l.value += r;
    } else {
        i.push({
            type: "text",
            value: r
        });
    }
    return i;
}
function imageReference(e, t) {
    const n = String(t.identifier).toUpperCase();
    const r = e.definitionById.get(n);
    if (!r) {
        return mr(e, t);
    }
    const i = {
        src: Te(r.url || ""),
        alt: t.alt
    };
    if (r.title !== null && r.title !== undefined) {
        i.title = r.title;
    }
    const a = {
        type: "element",
        tagName: "img",
        properties: i,
        children: []
    };
    e.patch(t, a);
    return e.applyData(t, a);
}
function image(e, t) {
    const n = {
        src: Te(t.url)
    };
    if (t.alt !== null && t.alt !== undefined) {
        n.alt = t.alt;
    }
    if (t.title !== null && t.title !== undefined) {
        n.title = t.title;
    }
    const r = {
        type: "element",
        tagName: "img",
        properties: n,
        children: []
    };
    e.patch(t, r);
    return e.applyData(t, r);
}
function hu(e, t) {
    const n = {
        type: "text",
        value: t.value.replace(/\r?\n|\r/g, " ")
    };
    e.patch(t, n);
    const r = {
        type: "element",
        tagName: "code",
        properties: {},
        children: [
            n
        ]
    };
    e.patch(t, r);
    return e.applyData(t, r);
}
function linkReference(e, t) {
    const n = String(t.identifier).toUpperCase();
    const r = e.definitionById.get(n);
    if (!r) {
        return mr(e, t);
    }
    const i = {
        href: Te(r.url || "")
    };
    if (r.title !== null && r.title !== undefined) {
        i.title = r.title;
    }
    const a = {
        type: "element",
        tagName: "a",
        properties: i,
        children: e.all(t)
    };
    e.patch(t, a);
    return e.applyData(t, a);
}
function link(e, t) {
    const n = {
        href: Te(t.url)
    };
    if (t.title !== null && t.title !== undefined) {
        n.title = t.title;
    }
    const r = {
        type: "element",
        tagName: "a",
        properties: n,
        children: e.all(t)
    };
    e.patch(t, r);
    return e.applyData(t, r);
}
function gu(e, t, n) {
    const r = e.all(t);
    const i = n ? du(n) : gr(t);
    const a = {};
    const l = [];
    if (typeof t.checked === "boolean") {
        const c = r[0];
        let f;
        if (c && c.type === "element" && c.tagName === "p") {
            f = c;
        } else {
            f = {
                type: "element",
                tagName: "p",
                properties: {},
                children: []
            };
            r.unshift(f);
        }
        if (f.children.length > 0) {
            f.children.unshift({
                type: "text",
                value: " "
            });
        }
        f.children.unshift({
            type: "element",
            tagName: "input",
            properties: {
                type: "checkbox",
                checked: t.checked,
                disabled: true
            },
            children: []
        });
        a.className = [
            "task-list-item"
        ];
    }
    let u = -1;
    while(++u < r.length){
        const c = r[u];
        if (i || u !== 0 || c.type !== "element" || c.tagName !== "p") {
            l.push({
                type: "text",
                value: `
`
            });
        }
        if (c.type === "element" && c.tagName === "p" && !i) {
            l.push(...c.children);
        } else {
            l.push(c);
        }
    }
    const o = r[r.length - 1];
    if (o && (i || o.type !== "element" || o.tagName !== "p")) {
        l.push({
            type: "text",
            value: `
`
        });
    }
    const s = {
        type: "element",
        tagName: "li",
        properties: a,
        children: l
    };
    e.patch(t, s);
    return e.applyData(t, s);
}
function du(e) {
    let t = false;
    if (e.type === "list") {
        t = e.spread || false;
        const n = e.children;
        let r = -1;
        while(!t && ++r < n.length){
            t = gr(n[r]);
        }
    }
    return t;
}
function gr(e) {
    const e_spread = e.spread;
    return e_spread ?? e.children.length > 1;
}
function xu(e, t) {
    const n = {};
    const r = e.all(t);
    let i = -1;
    for(typeof t.start === "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;){
        const l = r[i];
        if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
            n.className = [
                "contains-task-list"
            ];
            break;
        }
    }
    const a = {
        type: "element",
        tagName: t.ordered ? "ol" : "ul",
        properties: n,
        children: e.wrap(r, true)
    };
    e.patch(t, a);
    return e.applyData(t, a);
}
function ku(e, t) {
    const n = {
        type: "element",
        tagName: "p",
        properties: {},
        children: e.all(t)
    };
    e.patch(t, n);
    return e.applyData(t, n);
}
function yu(e, t) {
    const n = {
        type: "root",
        children: e.wrap(e.all(t))
    };
    e.patch(t, n);
    return e.applyData(t, n);
}
function strong(e, t) {
    const n = {
        type: "element",
        tagName: "strong",
        properties: {},
        children: e.all(t)
    };
    e.patch(t, n);
    return e.applyData(t, n);
}
function wu(e, t) {
    const n = e.all(t);
    const r = n.shift();
    const i = [];
    if (r) {
        const l = {
            type: "element",
            tagName: "thead",
            properties: {},
            children: e.wrap([
                r
            ], true)
        };
        e.patch(t.children[0], l);
        i.push(l);
    }
    if (n.length > 0) {
        const l = {
            type: "element",
            tagName: "tbody",
            properties: {},
            children: e.wrap(n, true)
        };
        const u = Dt(t.children[1]);
        const o = Gn(t.children[t.children.length - 1]);
        if (u && o) {
            l.position = {
                start: u,
                end: o
            };
        }
        i.push(l);
    }
    const a = {
        type: "element",
        tagName: "table",
        properties: {},
        children: e.wrap(i, true)
    };
    e.patch(t, a);
    return e.applyData(t, a);
}
function Su(e, t, n) {
    const r = n ? n.children : undefined;
    const a = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td";
    const l = n && n.type === "table" ? n.align : undefined;
    const u = l ? l.length : t.children.length;
    let o = -1;
    const s = [];
    while(++o < u){
        const f = t.children[o];
        const p = {};
        const h = l ? l[o] : undefined;
        if (h) {
            p.align = h;
        }
        let d = {
            type: "element",
            tagName: a,
            properties: p,
            children: []
        };
        if (f) {
            d.children = e.all(f);
            e.patch(f, d);
            d = e.applyData(f, d);
        }
        s.push(d);
    }
    const c = {
        type: "element",
        tagName: "tr",
        properties: {},
        children: e.wrap(s, true)
    };
    e.patch(t, c);
    return e.applyData(t, c);
}
function tableCell(e, t) {
    const n = {
        type: "element",
        tagName: "td",
        properties: {},
        children: e.all(t)
    };
    e.patch(t, n);
    return e.applyData(t, n);
}
const yn = 9;
const bn = 32;
function Eu(e) {
    const t = String(e);
    const n = /\r?\n|\r/g;
    let r = n.exec(t);
    let i = 0;
    const a = [];
    while(r){
        a.push(wn(t.slice(i, r.index), i > 0, true), r[0]);
        i = r.index + r[0].length;
        r = n.exec(t);
    }
    a.push(wn(t.slice(i), i > 0, false));
    return a.join("");
}
function wn(e, t, n) {
    let r = 0;
    let e_length = e.length;
    if (t) {
        let a = e.codePointAt(r);
        while(a === yn || a === bn){
            r++;
            a = e.codePointAt(r);
        }
    }
    if (n) {
        let a = e.codePointAt(e_length - 1);
        while(a === yn || a === bn){
            e_length--;
            a = e.codePointAt(e_length - 1);
        }
    }
    if (e_length > r) {
        return e.slice(r, e_length);
    }
    return "";
}
function Iu(e, t) {
    const n = {
        type: "text",
        value: Eu(String(t.value))
    };
    e.patch(t, n);
    return e.applyData(t, n);
}
function Tu(e, t) {
    const n = {
        type: "element",
        tagName: "hr",
        properties: {},
        children: []
    };
    e.patch(t, n);
    return e.applyData(t, n);
}
const Au = {
    blockquote: nu,
    break: ru,
    code: iu,
    delete: lu,
    emphasis,
    footnoteReference,
    heading: ou,
    html,
    imageReference,
    image,
    inlineCode: hu,
    linkReference,
    link,
    listItem: gu,
    list: xu,
    paragraph: ku,
    root: yu,
    strong,
    table: wu,
    tableCell,
    tableRow: Su,
    text: Iu,
    thematicBreak: Tu,
    toml: $e,
    yaml: $e,
    definition: $e,
    footnoteDefinition: $e
};
function $e() {}
const dr = -1;
const et = 0;
const Re = 1;
const Ye = 2;
const Bt = 3;
const jt = 4;
const qt = 5;
const $t = 6;
const xr = 7;
const kr = 8;
const Sn = typeof self === "object" ? self : globalThis;
const Fu = (e, t)=>{
    const n = (i, a)=>{
        e.set(a, i);
        return i;
    };
    const r = (i)=>{
        if (e.has(i)) {
            return e.get(i);
        }
        const [a, l] = t[i];
        switch(a){
            case et:
            case dr:
                return n(l, i);
            case Re:
                {
                    const u = n([], i);
                    for (const o of l){
                        u.push(r(o));
                    }
                    return u;
                }
            case Ye:
                {
                    const u = n({}, i);
                    for (const [o, s] of l){
                        u[r(o)] = r(s);
                    }
                    return u;
                }
            case Bt:
                return n(new Date(l), i);
            case jt:
                {
                    const { source, flags } = l;
                    return n(new RegExp(source, flags), i);
                }
            case qt:
                {
                    const u = n(new Map, i);
                    for (const [o, s] of l){
                        u.set(r(o), r(s));
                    }
                    return u;
                }
            case $t:
                {
                    const u = n(new Set, i);
                    for (const o of l){
                        u.add(r(o));
                    }
                    return u;
                }
            case xr:
                {
                    const { name, message } = l;
                    return n(new Sn[name](message), i);
                }
            case kr:
                return n(BigInt(l), i);
            case "BigInt":
                return n(Object(BigInt(l)), i);
            case "ArrayBuffer":
                return n(new Uint8Array(l).buffer, l);
            case "DataView":
                {
                    const { buffer } = new Uint8Array(l);
                    return n(new DataView(buffer), l);
                }
        }
        return n(new Sn[a](l), i);
    };
    return r;
};
const Cn = (e)=>Fu(new Map, e)(0);
const Ce = "";
const { toString } = {};
const { keys } = Object;
const Le = (e)=>{
    const t = typeof e;
    if (t !== "object" || !e) {
        return [
            et,
            t
        ];
    }
    const n = toString.call(e).slice(8, -1);
    switch(n){
        case "Array":
            return [
                Re,
                Ce
            ];
        case "Object":
            return [
                Ye,
                Ce
            ];
        case "Date":
            return [
                Bt,
                Ce
            ];
        case "RegExp":
            return [
                jt,
                Ce
            ];
        case "Map":
            return [
                qt,
                Ce
            ];
        case "Set":
            return [
                $t,
                Ce
            ];
        case "DataView":
            return [
                Re,
                n
            ];
    }
    if (n.includes("Array")) {
        return [
            Re,
            n
        ];
    }
    if (n.includes("Error")) {
        return [
            xr,
            n
        ];
    }
    return [
        Ye,
        n
    ];
};
const He = ([e, t])=>e === et && (t === "function" || t === "symbol");
const Pu = (e, t, n, r)=>{
    const i = (l, u)=>{
        const o = r.push(l) - 1;
        n.set(u, o);
        return o;
    };
    const a = (l)=>{
        if (n.has(l)) {
            return n.get(l);
        }
        let [u, o] = Le(l);
        switch(u){
            case et:
                {
                    let c = l;
                    switch(o){
                        case "bigint":
                            u = kr;
                            c = l.toString();
                            break;
                        case "function":
                        case "symbol":
                            if (e) {
                                throw new TypeError(`unable to serialize ${o}`);
                            }
                            c = null;
                            break;
                        case "undefined":
                            return i([
                                dr
                            ], l);
                    }
                    return i([
                        u,
                        c
                    ], l);
                }
            case Re:
                {
                    if (o) {
                        let p = l;
                        if (o === "DataView") {
                            p = new Uint8Array(l.buffer);
                        } else if (o === "ArrayBuffer") {
                            p = new Uint8Array(l);
                        }
                        return i([
                            o,
                            [
                                ...p
                            ]
                        ], l);
                    }
                    const c = [];
                    const f = i([
                        u,
                        c
                    ], l);
                    for (const p of l){
                        c.push(a(p));
                    }
                    return f;
                }
            case Ye:
                {
                    if (o) {
                        switch(o){
                            case "BigInt":
                                return i([
                                    o,
                                    l.toString()
                                ], l);
                            case "Boolean":
                            case "Number":
                            case "String":
                                return i([
                                    o,
                                    l.valueOf()
                                ], l);
                        }
                    }
                    if (t && "toJSON" in l) {
                        return a(l.toJSON());
                    }
                    const c = [];
                    const f = i([
                        u,
                        c
                    ], l);
                    for (const p of keys(l)){
                        if (e || !He(Le(l[p]))) {
                            c.push([
                                a(p),
                                a(l[p])
                            ]);
                        }
                    }
                    return f;
                }
            case Bt:
                return i([
                    u,
                    l.toISOString()
                ], l);
            case jt:
                {
                    const { source, flags } = l;
                    return i([
                        u,
                        {
                            source,
                            flags
                        }
                    ], l);
                }
            case qt:
                {
                    const c = [];
                    const f = i([
                        u,
                        c
                    ], l);
                    for (const [p, h] of l){
                        if (e || !(He(Le(p)) || He(Le(h)))) {
                            c.push([
                                a(p),
                                a(h)
                            ]);
                        }
                    }
                    return f;
                }
            case $t:
                {
                    const c = [];
                    const f = i([
                        u,
                        c
                    ], l);
                    for (const p of l){
                        if (e || !He(Le(p))) {
                            c.push(a(p));
                        }
                    }
                    return f;
                }
        }
        const { message } = l;
        return i([
            u,
            {
                name: o,
                message
            }
        ], l);
    };
    return a;
};
const En = (e, { json, lossy } = {})=>{
    const r = [];
    Pu(!(json || lossy), !!json, new Map, r)(e);
    return r;
};
const Xe = typeof structuredClone === "function" ? (e, t)=>{
    if (t && ("json" in t || "lossy" in t)) {
        return Cn(En(e, t));
    }
    return structuredClone(e);
} : (e, t)=>Cn(En(e, t));
function Du(e, t) {
    const n = [
        {
            type: "text",
            value: "↩"
        }
    ];
    if (t > 1) {
        n.push({
            type: "element",
            tagName: "sup",
            properties: {},
            children: [
                {
                    type: "text",
                    value: String(t)
                }
            ]
        });
    }
    return n;
}
function Lu(e, t) {
    return `Back to reference ${e + 1}${t > 1 ? `-${t}` : ""}`;
}
function Mu(e) {
    const t = typeof e.options.clobberPrefix === "string" ? e.options.clobberPrefix : "user-content-";
    const n = e.options.footnoteBackContent || Du;
    const r = e.options.footnoteBackLabel || Lu;
    const i = e.options.footnoteLabel || "Footnotes";
    const a = e.options.footnoteLabelTagName || "h2";
    const l = e.options.footnoteLabelProperties || {
        className: [
            "sr-only"
        ]
    };
    const u = [];
    let o = -1;
    while(++o < e.footnoteOrder.length){
        const s = e.footnoteById.get(e.footnoteOrder[o]);
        if (!s) {
            continue;
        }
        const c = e.all(s);
        const f = String(s.identifier).toUpperCase();
        const p = Te(f.toLowerCase());
        let h = 0;
        const d = [];
        const x = e.footnoteCounts.get(f);
        while(x !== undefined && ++h <= x){
            if (d.length > 0) {
                d.push({
                    type: "text",
                    value: " "
                });
            }
            let I = typeof n === "string" ? n : n(o, h);
            if (typeof I === "string") {
                I = {
                    type: "text",
                    value: I
                };
            }
            d.push({
                type: "element",
                tagName: "a",
                properties: {
                    href: `#${t}fnref-${p}${h > 1 ? `-${h}` : ""}`,
                    dataFootnoteBackref: "",
                    ariaLabel: typeof r === "string" ? r : r(o, h),
                    className: [
                        "data-footnote-backref"
                    ]
                },
                children: Array.isArray(I) ? I : [
                    I
                ]
            });
        }
        const C = c[c.length - 1];
        if (C && C.type === "element" && C.tagName === "p") {
            const I = C.children[C.children.length - 1];
            if (I && I.type === "text") {
                I.value += " ";
            } else {
                C.children.push({
                    type: "text",
                    value: " "
                });
            }
            C.children.push(...d);
        } else {
            c.push(...d);
        }
        const b = {
            type: "element",
            tagName: "li",
            properties: {
                id: `${t}fn-${p}`
            },
            children: e.wrap(c, true)
        };
        e.patch(s, b);
        u.push(b);
    }
    if (u.length !== 0) {
        return {
            type: "element",
            tagName: "section",
            properties: {
                dataFootnotes: true,
                className: [
                    "footnotes"
                ]
            },
            children: [
                {
                    type: "element",
                    tagName: a,
                    properties: {
                        ...Xe(l),
                        id: "footnote-label"
                    },
                    children: [
                        {
                            type: "text",
                            value: i
                        }
                    ]
                },
                {
                    type: "text",
                    value: `
`
                },
                {
                    type: "element",
                    tagName: "ol",
                    properties: {},
                    children: e.wrap(u, true)
                },
                {
                    type: "text",
                    value: `
`
                }
            ]
        };
    }
}
const tt = (e)=>{
    if (e == null) {
        return Ou;
    }
    if (typeof e === "function") {
        return nt(e);
    }
    if (typeof e === "object") {
        if (Array.isArray(e)) {
            return Nu(e);
        }
        return Ru(e);
    }
    if (typeof e === "string") {
        return vu(e);
    }
    throw new Error("Expected function, string, or object as test");
};
function Nu(e) {
    const t = [];
    let n = -1;
    while(++n < e.length){
        t[n] = tt(e[n]);
    }
    return nt(r);
    function r(...i) {
        let a = -1;
        while(++a < t.length){
            if (t[a].apply(this, i)) {
                return true;
            }
        }
        return false;
    }
}
function Ru(e) {
    const t = e;
    return nt(n);
    function n(r) {
        const i = r;
        let a;
        for(a in e){
            if (i[a] !== t[a]) {
                return false;
            }
        }
        return true;
    }
}
function vu(e) {
    return nt(t);
    function t(n) {
        return n && n.type === e;
    }
}
function nt(e) {
    return t;
    function t(n, r, i) {
        return !!(Bu(n) && e.call(this, n, typeof r === "number" ? r : undefined, i || undefined));
    }
}
function Ou() {
    return true;
}
function Bu(e) {
    return e !== null && typeof e === "object" && "type" in e;
}
const yr = [];
const ju = true;
const St = false;
const qu = "skip";
function br(e, t, n, r) {
    let i;
    if (typeof t === "function" && typeof n !== "function") {
        r = n;
        n = t;
    } else {
        i = t;
    }
    const a = tt(i);
    const l = r ? -1 : 1;
    u(e, undefined, [])();
    function u(o, s, c) {
        const f = o && typeof o === "object" ? o : {};
        if (typeof f.type === "string") {
            const h = typeof f.tagName === "string" ? f.tagName : typeof f.name === "string" ? f.name : undefined;
            Object.defineProperty(p, "name", {
                value: `node (${o.type + (h ? `<${h}>` : "")})`
            });
        }
        return p;
        function p() {
            let h = yr;
            let d;
            let x;
            let C;
            if ((!t || a(o, s, c[c.length - 1] || undefined)) && (h = $u(n(o, c)), h[0] === St)) {
                return h;
            }
            if ("children" in o && o.children) {
                const b = o;
                if (b.children && h[0] !== qu) {
                    x = (r ? b.children.length : -1) + l;
                    for(C = c.concat(b); x > -1 && x < b.children.length;){
                        const I = b.children[x];
                        d = u(I, x, C)();
                        if (d[0] === St) {
                            return d;
                        }
                        x = typeof d[1] === "number" ? d[1] : x + l;
                    }
                }
            }
            return h;
        }
    }
}
function $u(e) {
    if (Array.isArray(e)) {
        return e;
    }
    if (typeof e === "number") {
        return [
            ju,
            e
        ];
    }
    if (e == null) {
        return yr;
    }
    return [
        e
    ];
}
function Ht(e, t, n, r) {
    let i;
    let a;
    let l;
    if (typeof t === "function" && typeof n !== "function") {
        a = undefined;
        l = t;
        i = n;
    } else {
        a = t;
        l = n;
        i = r;
    }
    br(e, a, u, i);
    function u(o, s) {
        const c = s[s.length - 1];
        const f = c ? c.children.indexOf(o) : undefined;
        return l(o, f, c);
    }
}
const hasOwnProperty_3 = {}.hasOwnProperty;
const Hu = {};
function Vu(e, t) {
    const options = t || Hu;
    const definitionById = new Map;
    const footnoteById = new Map;
    const footnoteCounts = new Map;
    const handlers = {
        ...Au,
        ...options.handlers
    };
    const u = {
        all,
        applyData,
        definitionById,
        footnoteById,
        footnoteCounts,
        footnoteOrder: [],
        handlers,
        one,
        options,
        patch,
        wrap
    };
    Ht(e, (c)=>{
        if (c.type === "definition" || c.type === "footnoteDefinition") {
            const f = c.type === "definition" ? definitionById : footnoteById;
            const p = String(c.identifier).toUpperCase();
            if (!f.has(p)) {
                f.set(p, c);
            }
        }
    });
    return u;
    function one(c, f) {
        const c_type = c.type;
        const h = u.handlers[c_type];
        if (hasOwnProperty_3.call(u.handlers, c_type) && h) {
            return h(u, c, f);
        }
        if (u.options.passThrough && u.options.passThrough.includes(c_type)) {
            if ("children" in c) {
                const { children, ...rest } = c;
                const b = Xe(rest);
                b.children = u.all(c);
                return b;
            }
            return Xe(c);
        }
        return (u.options.unknownHandler || Qu)(u, c, f);
    }
    function all(c) {
        const f = [];
        if ("children" in c) {
            const p = c.children;
            let h = -1;
            while(++h < p.length){
                const d = u.one(p[h], c);
                if (d) {
                    if (h && p[h - 1].type === "break" && (!Array.isArray(d) && d.type === "text" && (d.value = In(d.value)), !Array.isArray(d) && d.type === "element")) {
                        const x = d.children[0];
                        if (x && x.type === "text") {
                            x.value = In(x.value);
                        }
                    }
                    if (Array.isArray(d)) {
                        f.push(...d);
                    } else {
                        f.push(d);
                    }
                }
            }
        }
        return f;
    }
}
function patch(e, t) {
    if (e.position) {
        t.position = Li(e);
    }
}
function applyData(e, t) {
    let n = t;
    if (e && e.data) {
        const r = e.data.hName;
        const i = e.data.hChildren;
        const a = e.data.hProperties;
        if (typeof r === "string") {
            if (n.type === "element") {
                n.tagName = r;
            } else {
                const children = "children" in n ? n.children : [
                    n
                ];
                n = {
                    type: "element",
                    tagName: r,
                    properties: {},
                    children
                };
            }
        }
        if (n.type === "element" && a) {
            Object.assign(n.properties, Xe(a));
        }
        if ("children" in n && n.children && i !== null && i !== undefined) {
            n.children = i;
        }
    }
    return n;
}
function Qu(e, t) {
    const n = t.data || {};
    const r = "value" in t && !(hasOwnProperty_3.call(n, "hProperties") || hasOwnProperty_3.call(n, "hChildren")) ? {
        type: "text",
        value: t.value
    } : {
        type: "element",
        tagName: "div",
        properties: {},
        children: e.all(t)
    };
    e.patch(t, r);
    return e.applyData(t, r);
}
function wrap(e, t) {
    const n = [];
    let r = -1;
    for(t && n.push({
        type: "text",
        value: `
`
    }); ++r < e.length;){
        if (r) {
            n.push({
                type: "text",
                value: `
`
            });
        }
        n.push(e[r]);
    }
    if (t && e.length > 0) {
        n.push({
            type: "text",
            value: `
`
        });
    }
    return n;
}
function In(e) {
    let t = 0;
    let n = e.charCodeAt(t);
    while(n === 9 || n === 32){
        t++;
        n = e.charCodeAt(t);
    }
    return e.slice(t);
}
function Tn(e, t) {
    const n = Vu(e, t);
    const r = n.one(e, undefined);
    const i = Mu(n);
    const a = Array.isArray(r) ? {
        type: "root",
        children: r
    } : r || {
        type: "root",
        children: []
    };
    if (i) {
        a.children.push({
            type: "text",
            value: `
`
        }, i);
    }
    return a;
}
function Yu(e, t) {
    if (e && "run" in e) {
        return async (n, file)=>{
            const i = Tn(n, {
                file,
                ...t
            });
            await e.run(i, file);
        };
    }
    return (n, file)=>Tn(n, {
            file,
            ...e || t
        });
}
function An(e) {
    if (e) {
        throw e;
    }
}
let ut;
let Fn;
function Xu() {
    if (Fn) {
        return ut;
    }
    Fn = 1;
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const toString = Object.prototype.toString;
    const i = (s)=>{
        if (typeof Array.isArray === "function") {
            return Array.isArray(s);
        }
        return toString.call(s) === "[object Array]";
    };
    const a = (s)=>{
        if (!s || toString.call(s) !== "[object Object]") {
            return false;
        }
        const c = hasOwnProperty.call(s, "constructor");
        const f = s.constructor && s.constructor.prototype && hasOwnProperty.call(s.constructor.prototype, "isPrototypeOf");
        if (s.constructor && !c && !f) {
            return false;
        }
        let p;
        for(p in s);
        return typeof p === "undefined" || hasOwnProperty.call(s, p);
    };
    const l = (s, c)=>{
        if (Object.defineProperty && c.name === "__proto__") {
            Object.defineProperty(s, c.name, {
                enumerable: true,
                configurable: true,
                value: c.newValue,
                writable: true
            });
        } else {
            s[c.name] = c.newValue;
        }
    };
    const u = (s, c)=>{
        if (c === "__proto__") {
            if (hasOwnProperty.call(s, c)) {
                if (Object.getOwnPropertyDescriptor) {
                    return Object.getOwnPropertyDescriptor(s, c).value;
                }
            } else {
                return;
            }
        }
        return s[c];
    };
    ut = function o(x) {
        let s;
        let c;
        let f;
        let newValue;
        let h;
        let d;
        let C = 1;
        const arguments_length = arguments.length;
        let I = false;
        if (typeof x === "boolean") {
            I = x;
            x = arguments[1] || {};
            C = 2;
        }
        if (x == null || typeof x !== "object" && typeof x !== "function") {
            x = {};
        }
        for(; C < arguments_length; ++C){
            s = arguments[C];
            if (s != null) {
                for(c in s){
                    f = u(x, c);
                    newValue = u(s, c);
                    x !== newValue && (I && newValue && (a(newValue) || (h = i(newValue))) ? (h ? (h = false, d = f && i(f) ? f : []) : d = f && a(f) ? f : {}, l(x, {
                        name: c,
                        newValue: o(I, d, newValue)
                    })) : typeof newValue !== "undefined" && l(x, {
                        name: c,
                        newValue
                    }));
                }
            }
        }
        return x;
    };
    return ut;
}
const Ju = Xu();
const ot = a4(Ju);
function Et(e) {
    if (typeof e !== "object" || e === null) {
        return false;
    }
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ku() {
    const e = [];
    const t = {
        run,
        use
    };
    return t;
    function run(...i) {
        let a = -1;
        const l = i.pop();
        if (typeof l !== "function") {
            throw new TypeError(`Expected function as last argument, not ${l}`);
        }
        u(null, ...i);
        function u(o, ...s) {
            const c = e[++a];
            let f = -1;
            if (o) {
                l(o);
                return;
            }
            while(++f < i.length){
                if (s[f] === null || s[f] === undefined) {
                    s[f] = i[f];
                }
            }
            i = s;
            if (c) {
                Zu(c, u)(...s);
            } else {
                l(null, ...s);
            }
        }
    }
    function use(i) {
        if (typeof i !== "function") {
            throw new TypeError(`Expected \`middelware\` to be a function, not ${i}`);
        }
        e.push(i);
        return t;
    }
}
function Zu(e, t) {
    let n;
    return r;
    function r(...l) {
        const u = e.length > l.length;
        let o;
        if (u) {
            l.push(i);
        }
        try {
            o = e.apply(this, l);
        } catch (error) {
            const c = error;
            if (u && n) {
                throw c;
            }
            return i(c);
        }
        u || (o && o.then && typeof o.then === "function" ? o.then(a, i) : o instanceof Error ? i(o) : a(o));
    }
    function i(l, ...u) {
        if (!n) {
            n = true;
            t(l, ...u);
        }
    }
    function a(l) {
        i(null, l);
    }
}
const ie = {
    basename,
    dirname,
    extname,
    join,
    sep: "/"
};
function basename(e, t) {
    if (t !== undefined && typeof t !== "string") {
        throw new TypeError('"ext" argument must be a string');
    }
    je(e);
    let n = 0;
    let r = -1;
    let e_length = e.length;
    let a;
    if (t === undefined || t.length === 0 || t.length > e.length) {
        while(e_length--){
            if (e.codePointAt(e_length) === 47) {
                if (a) {
                    n = e_length + 1;
                    break;
                }
            } else {
                if (r < 0) {
                    a = true;
                    r = e_length + 1;
                }
            }
        }
        if (r < 0) {
            return "";
        }
        return e.slice(n, r);
    }
    if (t === e) {
        return "";
    }
    let l = -1;
    let u = t.length - 1;
    while(e_length--){
        if (e.codePointAt(e_length) === 47) {
            if (a) {
                n = e_length + 1;
                break;
            }
        } else {
            if (l < 0) {
                a = true;
                l = e_length + 1;
            }
            u > -1 && (e.codePointAt(e_length) === t.codePointAt(u--) ? u < 0 && (r = e_length) : (u = -1, r = l));
        }
    }
    if (n === r) {
        r = l;
    } else if (r < 0) {
        r = e.length;
    }
    return e.slice(n, r);
}
function dirname(e) {
    je(e);
    if (e.length === 0) {
        return ".";
    }
    let t = -1;
    let e_length = e.length;
    let r;
    while(--e_length){
        if (e.codePointAt(e_length) === 47) {
            if (r) {
                t = e_length;
                break;
            }
        } else {
            if (!r) {
                r = true;
            }
        }
    }
    if (t < 0) {
        if (e.codePointAt(0) === 47) {
            return "/";
        }
        return ".";
    }
    if (t === 1 && e.codePointAt(0) === 47) {
        return "//";
    }
    return e.slice(0, t);
}
function extname(e) {
    je(e);
    let e_length = e.length;
    let n = -1;
    let r = 0;
    let i = -1;
    let a = 0;
    let l;
    while(e_length--){
        const u = e.codePointAt(e_length);
        if (u === 47) {
            if (l) {
                r = e_length + 1;
                break;
            }
            continue;
        }
        if (n < 0) {
            l = true;
            n = e_length + 1;
        }
        u === 46 ? i < 0 ? i = e_length : a !== 1 && (a = 1) : i > -1 && (a = -1);
    }
    if (i < 0 || n < 0 || a === 0 || a === 1 && i === n - 1 && i === r + 1) {
        return "";
    }
    return e.slice(i, n);
}
function join(...e) {
    let t = -1;
    let n;
    while(++t < e.length){
        je(e[t]);
        if (e[t]) {
            n = n === undefined ? e[t] : `${n}/${e[t]}`;
        }
    }
    if (n === undefined) {
        return ".";
    }
    return io(n);
}
function io(e) {
    je(e);
    const t = e.codePointAt(0) === 47;
    let n = lo(e, !t);
    if (n.length === 0 && !t) {
        n = ".";
    }
    if (n.length > 0 && e.codePointAt(e.length - 1) === 47) {
        n += "/";
    }
    if (t) {
        return `/${n}`;
    }
    return n;
}
function lo(e, t) {
    let n = "";
    let r = 0;
    let i = -1;
    let a = 0;
    let l = -1;
    let u;
    let o;
    while(++l <= e.length){
        if (l < e.length) {
            u = e.codePointAt(l);
        } else {
            if (u === 47) {
                break;
            }
            u = 47;
        }
        if (u === 47) {
            if (!(i === l - 1 || a === 1)) {
                if (i !== l - 1 && a === 2) {
                    if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
                        if (n.length > 2) {
                            o = n.lastIndexOf("/");
                            if (o !== n.length - 1) {
                                if (o < 0) {
                                    n = "";
                                    r = 0;
                                } else {
                                    n = n.slice(0, o);
                                    r = n.length - 1 - n.lastIndexOf("/");
                                }
                                i = l;
                                a = 0;
                                continue;
                            }
                        } else if (n.length > 0) {
                            n = "";
                            r = 0;
                            i = l;
                            a = 0;
                            continue;
                        }
                    }
                    if (t) {
                        n = n.length > 0 ? `${n}/..` : "..";
                        r = 2;
                    }
                } else {
                    if (n.length > 0) {
                        n += `/${e.slice(i + 1, l)}`;
                    } else {
                        n = e.slice(i + 1, l);
                    }
                    r = l - i - 1;
                }
            }
            i = l;
            a = 0;
        } else {
            if (u === 46 && a > -1) {
                a++;
            } else {
                a = -1;
            }
        }
    }
    return n;
}
function je(e) {
    if (typeof e !== "string") {
        throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`);
    }
}
const ao = {
    cwd
};
function cwd() {
    return "/";
}
function It(e) {
    return !!(e !== null && typeof e === "object" && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === undefined);
}
function oo(e) {
    if (typeof e === "string") {
        e = new URL(e);
    } else if (!It(e)) {
        const t = new TypeError(`The "path" argument must be of type string or an instance of URL. Received \`${e}\``);
        t.code = "ERR_INVALID_ARG_TYPE";
        throw t;
    }
    if (e.protocol !== "file:") {
        const t = new TypeError("The URL must be of scheme file");
        t.code = "ERR_INVALID_URL_SCHEME";
        throw t;
    }
    return so(e);
}
function so(e) {
    if (e.hostname !== "") {
        const r = new TypeError('File URL host must be "localhost" or empty on darwin');
        r.code = "ERR_INVALID_FILE_URL_HOST";
        throw r;
    }
    const e_pathname = e.pathname;
    let n = -1;
    while(++n < e_pathname.length){
        if (e_pathname.codePointAt(n) === 37 && e_pathname.codePointAt(n + 1) === 50) {
            const r = e_pathname.codePointAt(n + 2);
            if (r === 70 || r === 102) {
                const i = new TypeError("File URL path must not include encoded / characters");
                i.code = "ERR_INVALID_FILE_URL_PATH";
                throw i;
            }
        }
    }
    return decodeURIComponent(e_pathname);
}
const st = [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
];
class wr {
    constructor(t){
        let n;
        if (t) {
            if (It(t)) {
                n = {
                    path: t
                };
            } else if (typeof t === "string" || co(t)) {
                n = {
                    value: t
                };
            } else {
                n = t;
            }
        } else {
            n = {};
        }
        this.cwd = "cwd" in n ? "" : ao.cwd();
        this.data = {};
        this.history = [];
        this.messages = [];
        this.value;
        this.map;
        this.result;
        this.stored;
        let r = -1;
        while(++r < st.length){
            const a = st[r];
            if (a in n && n[a] !== undefined && n[a] !== null) {
                this[a] = a === "history" ? [
                    ...n[a]
                ] : n[a];
            }
        }
        let i;
        for(i in n){
            if (!st.includes(i)) {
                this[i] = n[i];
            }
        }
    }
    get basename() {
        if (typeof this.path === "string") {
            return ie.basename(this.path);
        }
    }
    set basename(t) {
        ft(t, "basename");
        ct(t, "basename");
        this.path = ie.join(this.dirname || "", t);
    }
    get dirname() {
        if (typeof this.path === "string") {
            return ie.dirname(this.path);
        }
    }
    set dirname(t) {
        zn(this.basename, "dirname");
        this.path = ie.join(t || "", this.basename);
    }
    get extname() {
        if (typeof this.path === "string") {
            return ie.extname(this.path);
        }
    }
    set extname(t) {
        ct(t, "extname");
        zn(this.dirname, "extname");
        if (t) {
            if (t.codePointAt(0) !== 46) {
                throw new Error("`extname` must start with `.`");
            }
            if (t.includes(".", 1)) {
                throw new Error("`extname` cannot contain multiple dots");
            }
        }
        this.path = ie.join(this.dirname, this.stem + (t || ""));
    }
    get path() {
        return this.history[this.history.length - 1];
    }
    set path(t) {
        if (It(t)) {
            t = oo(t);
        }
        ft(t, "path");
        if (this.path !== t) {
            this.history.push(t);
        }
    }
    get stem() {
        if (typeof this.path === "string") {
            return ie.basename(this.path, this.extname);
        }
    }
    set stem(t) {
        ft(t, "stem");
        ct(t, "stem");
        this.path = ie.join(this.dirname || "", t + (this.extname || ""));
    }
    fail(t, n, r) {
        const i = this.message(t, n, r);
        i.fatal = true;
        throw i;
    }
    info(t, n, r) {
        const i = this.message(t, n, r);
        i.fatal = undefined;
        return i;
    }
    message(t, n, r) {
        const i = new G(t, n, r);
        if (this.path) {
            i.name = `${this.path}:${i.name}`;
            i.file = this.path;
        }
        i.fatal = false;
        this.messages.push(i);
        return i;
    }
    toString(t) {
        if (this.value === undefined) {
            return "";
        }
        if (typeof this.value === "string") {
            return this.value;
        }
        return new TextDecoder(t || undefined).decode(this.value);
    }
}
function ct(e, t) {
    if (e && e.includes(ie.sep)) {
        throw new Error(`\`${t}\` cannot be a path: did not expect \`${ie.sep}\``);
    }
}
function ft(e, t) {
    if (!e) {
        throw new Error(`\`${t}\` cannot be empty`);
    }
}
function zn(e, t) {
    if (!e) {
        throw new Error(`Setting \`${t}\` requires \`path\` to be set too`);
    }
}
function co(e) {
    return !!(e && typeof e === "object" && "byteLength" in e && "byteOffset" in e);
}
const fo = function(e) {
    const prototype = this.constructor.prototype;
    const i = prototype[e];
    const a = function() {
        return i.apply(a, arguments);
    };
    Object.setPrototypeOf(a, prototype);
    return a;
};
const hasOwnProperty_4 = {}.hasOwnProperty;
class Vt extends fo {
    constructor(){
        super("copy");
        this.Compiler = undefined;
        this.Parser = undefined;
        this.attachers = [];
        this.compiler = undefined;
        this.freezeIndex = -1;
        this.frozen = undefined;
        this.namespace = {};
        this.parser = undefined;
        this.transformers = Ku();
    }
    copy() {
        const t = new Vt;
        let n = -1;
        while(++n < this.attachers.length){
            const r = this.attachers[n];
            t.use(...r);
        }
        t.data(ot(true, {}, this.namespace));
        return t;
    }
    data(t, n) {
        if (typeof t === "string") {
            if (arguments.length === 2) {
                mt("data", this.frozen);
                this.namespace[t] = n;
                return this;
            }
            return hasOwnProperty_4.call(this.namespace, t) && this.namespace[t] || undefined;
        }
        if (t) {
            mt("data", this.frozen);
            this.namespace = t;
            return this;
        }
        return this.namespace;
    }
    freeze() {
        if (this.frozen) {
            return this;
        }
        const t = this;
        while(++this.freezeIndex < this.attachers.length){
            const [n, ...r] = this.attachers[this.freezeIndex];
            if (r[0] === false) {
                continue;
            }
            if (r[0] === true) {
                r[0] = undefined;
            }
            const i = n.call(t, ...r);
            if (typeof i === "function") {
                this.transformers.use(i);
            }
        }
        this.frozen = true;
        this.freezeIndex = Number.POSITIVE_INFINITY;
        return this;
    }
    parse(t) {
        this.freeze();
        const n = Ve(t);
        const r = this.parser || this.Parser;
        ht("parse", r);
        return r(String(n), n);
    }
    process(t, n) {
        const r = this;
        this.freeze();
        ht("process", this.parser || this.Parser);
        pt("process", this.compiler || this.Compiler);
        if (n) {
            return i(undefined, n);
        }
        return new Promise(i);
        function i(a, l) {
            const u = Ve(t);
            const o = r.parse(u);
            r.run(o, u, (c, f, p)=>{
                if (c || !f || !p) {
                    return s(c);
                }
                const d = r.stringify(f, p);
                if (go(d)) {
                    p.value = d;
                } else {
                    p.result = d;
                }
                s(c, p);
            });
            function s(c, f) {
                if (c || !f) {
                    l(c);
                } else if (a) {
                    a(f);
                } else {
                    n(undefined, f);
                }
            }
        }
    }
    processSync(t) {
        let n = false;
        let r;
        this.freeze();
        ht("processSync", this.parser || this.Parser);
        pt("processSync", this.compiler || this.Compiler);
        this.process(t, i);
        Pn("processSync", "process", n);
        return r;
        function i(a, l) {
            n = true;
            An(a);
            r = l;
        }
    }
    run(t, n, r) {
        _n(t);
        this.freeze();
        const transformers = this.transformers;
        if (!r && typeof n === "function") {
            r = n;
            n = undefined;
        }
        if (r) {
            return a(undefined, r);
        }
        return new Promise(a);
        function a(l, u) {
            const o = Ve(n);
            transformers.run(t, o, s);
            function s(c, f, p) {
                const h = f || t;
                if (c) {
                    u(c);
                } else if (l) {
                    l(h);
                } else {
                    r(undefined, h, p);
                }
            }
        }
    }
    runSync(t, n) {
        let r = false;
        let i;
        this.run(t, n, a);
        Pn("runSync", "run", r);
        return i;
        function a(l, u) {
            An(l);
            i = u;
            r = true;
        }
    }
    stringify(t, n) {
        this.freeze();
        const r = Ve(n);
        const i = this.compiler || this.Compiler;
        pt("stringify", i);
        _n(t);
        return i(t, r);
    }
    use(t, ...n) {
        const attachers = this.attachers;
        const namespace = this.namespace;
        mt("use", this.frozen);
        if (t != null) {
            if (typeof t === "function") {
                o(t, n);
            } else if (typeof t === "object") {
                if (Array.isArray(t)) {
                    u(t);
                } else {
                    l(t);
                }
            } else {
                throw new TypeError(`Expected usable value, not \`${t}\``);
            }
        }
        return this;
        function a(s) {
            if (typeof s === "function") {
                o(s, []);
            } else if (typeof s === "object") {
                if (Array.isArray(s)) {
                    const [c, ...f] = s;
                    o(c, f);
                } else {
                    l(s);
                }
            } else {
                throw new TypeError(`Expected usable value, not \`${s}\``);
            }
        }
        function l(s) {
            if (!("plugins" in s) && !("settings" in s)) {
                throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
            }
            u(s.plugins);
            if (s.settings) {
                namespace.settings = ot(true, namespace.settings, s.settings);
            }
        }
        function u(s) {
            let c = -1;
            if (s != null) {
                if (Array.isArray(s)) {
                    while(++c < s.length){
                        const f = s[c];
                        a(f);
                    }
                } else {
                    throw new TypeError(`Expected a list of plugins, not \`${s}\``);
                }
            }
        }
        function o(s, c) {
            let f = -1;
            let p = -1;
            while(++f < attachers.length){
                if (attachers[f][0] === s) {
                    p = f;
                    break;
                }
            }
            if (p === -1) {
                attachers.push([
                    s,
                    ...c
                ]);
            } else if (c.length > 0) {
                let [h, ...d] = c;
                const x = attachers[p][1];
                if (Et(x) && Et(h)) {
                    h = ot(true, x, h);
                }
                attachers[p] = [
                    s,
                    h,
                    ...d
                ];
            }
        }
    }
}
const po = new Vt().freeze();
function ht(e, t) {
    if (typeof t !== "function") {
        throw new TypeError(`Cannot \`${e}\` without \`parser\``);
    }
}
function pt(e, t) {
    if (typeof t !== "function") {
        throw new TypeError(`Cannot \`${e}\` without \`compiler\``);
    }
}
function mt(e, frozen) {
    if (frozen) {
        throw new Error(`Cannot call \`${e}\` on a frozen processor.
Create a new processor first, by calling it: use \`processor()\` instead of \`processor\`.`);
    }
}
function _n(e) {
    if (!Et(e) || typeof e.type !== "string") {
        throw new TypeError(`Expected node, got \`${e}\``);
    }
}
function Pn(e, t, n) {
    if (!n) {
        throw new Error(`\`${e}\` finished async. Use \`${t}\` instead`);
    }
}
function Ve(e) {
    if (mo(e)) {
        return e;
    }
    return new wr(e);
}
function mo(e) {
    return !!(e && typeof e === "object" && "message" in e && "messages" in e);
}
function go(e) {
    return typeof e === "string" || xo(e);
}
function xo(e) {
    return !!(e && typeof e === "object" && "byteLength" in e && "byteOffset" in e);
}
const ko = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md";
const Dn = [];
const Ln = {
    allowDangerousHtml: true
};
const yo = /^(https?|ircs?|mailto|xmpp)$/i;
const bo = [
    {
        from: "astPlugins",
        id: "remove-buggy-html-in-markdown-parser"
    },
    {
        from: "allowDangerousHtml",
        id: "remove-buggy-html-in-markdown-parser"
    },
    {
        from: "allowNode",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "allowElement"
    },
    {
        from: "allowedTypes",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "allowedElements"
    },
    {
        from: "className",
        id: "remove-classname"
    },
    {
        from: "disallowedTypes",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "disallowedElements"
    },
    {
        from: "escapeHtml",
        id: "remove-buggy-html-in-markdown-parser"
    },
    {
        from: "includeElementIndex",
        id: "#remove-includeelementindex"
    },
    {
        from: "includeNodeIndex",
        id: "change-includenodeindex-to-includeelementindex"
    },
    {
        from: "linkTarget",
        id: "remove-linktarget"
    },
    {
        from: "plugins",
        id: "change-plugins-to-remarkplugins",
        to: "remarkPlugins"
    },
    {
        from: "rawSourcePos",
        id: "#remove-rawsourcepos"
    },
    {
        from: "renderers",
        id: "change-renderers-to-components",
        to: "components"
    },
    {
        from: "source",
        id: "change-source-to-children",
        to: "children"
    },
    {
        from: "sourcePos",
        id: "#remove-sourcepos"
    },
    {
        from: "transformImageUri",
        id: "#add-urltransform",
        to: "urlTransform"
    },
    {
        from: "transformLinkUri",
        id: "#add-urltransform",
        to: "urlTransform"
    }
];
function cf(e) {
    const t = wo(e);
    const n = So(e);
    return Co(t.runSync(t.parse(n), n), e);
}
function wo(e) {
    const t = e.rehypePlugins || Dn;
    const n = e.remarkPlugins || Dn;
    const r = e.remarkRehypeOptions ? {
        ...e.remarkRehypeOptions,
        ...Ln
    } : Ln;
    return po().use(tu).use(n).use(Yu, r).use(t);
}
function So(e) {
    const t = e.children || "";
    const n = new wr;
    if (typeof t === "string") {
        n.value = t;
    }
    return n;
}
function Co(e, t) {
    const { allowedElements, allowElement, components, disallowedElements, skipHtml, unwrapDisallowed } = t;
    const o = t.urlTransform || Eo;
    for (const c of bo){
        Object.hasOwn(t, c.from) && (`${c.from}${c.to ? `use \`${c.to}\` instead` : "remove it"}${ko}${c.id}`, undefined);
    }
    Ht(e, s);
    return Oi(e, {
        Fragment: j.Fragment,
        components,
        ignoreInvalidStyle: true,
        jsx: j.jsx,
        jsxs: j.jsxs,
        passKeys: true,
        passNode: true
    });
    function s(c, f, p) {
        if (c.type === "raw" && p && typeof f === "number") {
            if (skipHtml) {
                p.children.splice(f, 1);
            } else {
                p.children[f] = {
                    type: "text",
                    value: c.value
                };
            }
            return f;
        }
        if (c.type === "element") {
            let h;
            for(h in it){
                if (Object.hasOwn(it, h) && Object.hasOwn(c.properties, h)) {
                    const d = c.properties[h];
                    const x = it[h];
                    if (x === null || x.includes(c.tagName)) {
                        c.properties[h] = o(String(d || ""), h, c);
                    }
                }
            }
        }
        if (c.type === "element") {
            let h = allowedElements ? !allowedElements.includes(c.tagName) : disallowedElements ? disallowedElements.includes(c.tagName) : false;
            if (!h && allowElement && typeof f === "number") {
                h = !allowElement(c, f, p);
            }
            if (h && p && typeof f === "number") {
                if (unwrapDisallowed && c.children) {
                    p.children.splice(f, 1, ...c.children);
                } else {
                    p.children.splice(f, 1);
                }
                return f;
            }
        }
    }
}
function Eo(e) {
    const t = e.indexOf(":");
    const n = e.indexOf("?");
    const r = e.indexOf("#");
    const i = e.indexOf("/");
    if (t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || yo.test(e.slice(0, t))) {
        return e;
    }
    return "";
}
function Io(e) {
    if (typeof e !== "string") {
        throw new TypeError("Expected a string");
    }
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function To(e, t, n) {
    const i = tt((n || {}).ignore || []);
    const a = Ao(t);
    let l = -1;
    while(++l < a.length){
        br(e, "text", u);
    }
    function u(s, c) {
        let f = -1;
        let p;
        while(++f < c.length){
            const h = c[f];
            const d = p ? p.children : undefined;
            if (i(h, d ? d.indexOf(h) : undefined, p)) {
                return;
            }
            p = h;
        }
        if (p) {
            return o(s, c);
        }
    }
    function o(s, c) {
        const f = c[c.length - 1];
        const p = a[l][0];
        const h = a[l][1];
        let d = 0;
        const C = f.children.indexOf(s);
        let b = false;
        let I = [];
        p.lastIndex = 0;
        let E = p.exec(s.value);
        while(E){
            const D = E.index;
            const v = {
                index: E.index,
                input: E.input,
                stack: [
                    ...c,
                    s
                ]
            };
            let S = h(...E, v);
            if (typeof S === "string") {
                S = S.length > 0 ? {
                    type: "text",
                    value: S
                } : undefined;
            }
            if (S === false) {
                p.lastIndex = D + 1;
            } else {
                if (d !== D) {
                    I.push({
                        type: "text",
                        value: s.value.slice(d, D)
                    });
                }
                if (Array.isArray(S)) {
                    I.push(...S);
                } else if (S) {
                    I.push(S);
                }
                d = D + E[0].length;
                b = true;
            }
            if (!p.global) {
                break;
            }
            E = p.exec(s.value);
        }
        if (b) {
            if (d < s.value.length) {
                I.push({
                    type: "text",
                    value: s.value.slice(d)
                });
            }
            f.children.splice(C, 1, ...I);
        } else {
            I = [
                s
            ];
        }
        return C + I.length;
    }
}
function Ao(e) {
    const t = [];
    if (!Array.isArray(e)) {
        throw new TypeError("Expected find and replace tuple or list of tuples");
    }
    const n = !e[0] || Array.isArray(e[0]) ? e : [
        e
    ];
    let r = -1;
    while(++r < n.length){
        const i = n[r];
        t.push([
            Fo(i[0]),
            zo(i[1])
        ]);
    }
    return t;
}
function Fo(e) {
    if (typeof e === "string") {
        return new RegExp(Io(e), "g");
    }
    return e;
}
function zo(e) {
    if (typeof e === "function") {
        return e;
    }
    return ()=>e;
}
const inConstruct = "phrasing";
const dt = [
    "autolink",
    "link",
    "image",
    "label"
];
function _o() {
    return {
        transforms: [
            vo
        ],
        enter: {
            literalAutolink: Do,
            literalAutolinkEmail: xt,
            literalAutolinkHttp: xt,
            literalAutolinkWww: xt
        },
        exit: {
            literalAutolink: Ro,
            literalAutolinkEmail,
            literalAutolinkHttp,
            literalAutolinkWww
        }
    };
}
function Po() {
    return {
        unsafe: [
            {
                character: "@",
                before: "[+\\-.\\w]",
                after: "[\\-.\\w]",
                inConstruct,
                notInConstruct: dt
            },
            {
                character: ".",
                before: "[Ww]",
                after: "[\\-.\\w]",
                inConstruct,
                notInConstruct: dt
            },
            {
                character: ":",
                before: "[ps]",
                after: "\\/",
                inConstruct,
                notInConstruct: dt
            }
        ]
    };
}
function Do(e) {
    this.enter({
        type: "link",
        title: null,
        url: "",
        children: []
    }, e);
}
function xt(e) {
    this.config.enter.autolinkProtocol.call(this, e);
}
function literalAutolinkHttp(e) {
    this.config.exit.autolinkProtocol.call(this, e);
}
function literalAutolinkWww(e) {
    this.config.exit.data.call(this, e);
    const t = this.stack[this.stack.length - 1];
    t.type;
    t.url = `http://${this.sliceSerialize(e)}`;
}
function literalAutolinkEmail(e) {
    this.config.exit.autolinkEmail.call(this, e);
}
function Ro(e) {
    this.exit(e);
}
function vo(e) {
    To(e, [
        [
            /(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,
            Oo
        ],
        [
            new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"),
            Bo
        ]
    ], {
        ignore: [
            "link",
            "linkReference"
        ]
    });
}
function Oo(e, t, n, r, i) {
    let a = "";
    if (!Sr(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !jo(n))) {
        return false;
    }
    const l = qo(n + r);
    if (!l[0]) {
        return false;
    }
    const u = {
        type: "link",
        title: null,
        url: a + t + l[0],
        children: [
            {
                type: "text",
                value: t + l[0]
            }
        ]
    };
    if (l[1]) {
        return [
            u,
            {
                type: "text",
                value: l[1]
            }
        ];
    }
    return u;
}
function Bo(e, t, n, r) {
    if (!Sr(r, true) || /[-\d_]$/.test(n)) {
        return false;
    }
    return {
        type: "link",
        title: null,
        url: `mailto:${t}@${n}`,
        children: [
            {
                type: "text",
                value: `${t}@${n}`
            }
        ]
    };
}
function jo(e) {
    const t = e.split(".");
    return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function qo(e) {
    const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
    if (!t) {
        return [
            e,
            undefined
        ];
    }
    e = e.slice(0, t.index);
    let n = t[0];
    let r = n.indexOf(")");
    const i = c_2(e, "(");
    let a = c_2(e, ")");
    while(r !== -1 && i > a){
        e += n.slice(0, r + 1);
        n = n.slice(r + 1);
        r = n.indexOf(")");
        a++;
    }
    return [
        e,
        n
    ];
}
function Sr(e, t) {
    const n = e.input.charCodeAt(e.index - 1);
    return (e.index === 0 || ke(n) || Ke(n)) && (!t || n !== 47);
}
footnoteReference_1.peek = Xo;
function $o() {
    this.buffer();
}
function Ho(e) {
    this.enter({
        type: "footnoteReference",
        identifier: "",
        label: ""
    }, e);
}
function Vo() {
    this.buffer();
}
function Uo(e) {
    this.enter({
        type: "footnoteDefinition",
        identifier: "",
        label: "",
        children: []
    }, e);
}
function Wo(e) {
    const t = this.resume();
    const n = this.stack[this.stack.length - 1];
    n.type;
    n.identifier = re(this.sliceSerialize(e)).toLowerCase();
    n.label = t;
}
function Qo(e) {
    this.exit(e);
}
function Go(e) {
    const t = this.resume();
    const n = this.stack[this.stack.length - 1];
    n.type;
    n.identifier = re(this.sliceSerialize(e)).toLowerCase();
    n.label = t;
}
function Yo(e) {
    this.exit(e);
}
function Xo() {
    return "[";
}
function footnoteReference_1(e, t, n, r) {
    const i = n.createTracker(r);
    let a = i.move("[^");
    const l = n.enter("footnoteReference");
    const u = n.enter("reference");
    a += i.move(n.safe(n.associationId(e), {
        after: "]",
        before: a
    }));
    u();
    l();
    a += i.move("]");
    return a;
}
function Jo() {
    return {
        enter: {
            gfmFootnoteCallString: $o,
            gfmFootnoteCall: Ho,
            gfmFootnoteDefinitionLabelString: Vo,
            gfmFootnoteDefinition: Uo
        },
        exit: {
            gfmFootnoteCallString: Wo,
            gfmFootnoteCall: Qo,
            gfmFootnoteDefinitionLabelString: Go,
            gfmFootnoteDefinition: Yo
        }
    };
}
function Ko(e) {
    let t = false;
    if (e && e.firstLineBlank) {
        t = true;
    }
    return {
        handlers: {
            footnoteDefinition,
            footnoteReference: footnoteReference_1
        },
        unsafe: [
            {
                character: "[",
                inConstruct: [
                    "label",
                    "phrasing",
                    "reference"
                ]
            }
        ]
    };
    function footnoteDefinition(r, i, a, l) {
        const u = a.createTracker(l);
        let o = u.move("[^");
        const s = a.enter("footnoteDefinition");
        const c = a.enter("label");
        o += u.move(a.safe(a.associationId(r), {
            before: o,
            after: "]"
        }));
        c();
        o += u.move("]:");
        if (r.children && r.children.length > 0) {
            u.shift(4);
            o += u.move((t ? `
` : " ") + a.indentLines(a.containerFlow(r, u.current()), t ? Er : Zo));
        }
        s();
        return o;
    }
}
function Zo(e, t, n) {
    if (t === 0) {
        return e;
    }
    return Er(e, t, n);
}
function Er(e, t, n) {
    return (n ? "" : "    ") + e;
}
const es = [
    "autolink",
    "destinationLiteral",
    "destinationRaw",
    "reference",
    "titleQuote",
    "titleApostrophe"
];
Ir.peek = ls;
function ts() {
    return {
        canContainEols: [
            "delete"
        ],
        enter: {
            strikethrough: rs
        },
        exit: {
            strikethrough: is
        }
    };
}
function ns() {
    return {
        unsafe: [
            {
                character: "~",
                inConstruct: "phrasing",
                notInConstruct: es
            }
        ],
        handlers: {
            delete: Ir
        }
    };
}
function rs(e) {
    this.enter({
        type: "delete",
        children: []
    }, e);
}
function is(e) {
    this.exit(e);
}
function Ir(e, t, n, r) {
    const i = n.createTracker(r);
    const a = n.enter("strikethrough");
    let l = i.move("~~");
    l += n.containerPhrasing(e, {
        ...i.current(),
        before: l,
        after: "~"
    });
    l += i.move("~~");
    a();
    return l;
}
function ls() {
    return "~";
}
function as(e, t = {}) {
    const n = (t.align || []).concat();
    const r = t.stringLength || os;
    const i = [];
    const a = [];
    const l = [];
    const u = [];
    let o = 0;
    let s = -1;
    while(++s < e.length){
        const d = [];
        const x = [];
        let C = -1;
        for(e[s].length > o && (o = e[s].length); ++C < e[s].length;){
            const b = us(e[s][C]);
            if (t.alignDelimiters !== false) {
                const I = r(b);
                x[C] = I;
                if (u[C] === undefined || I > u[C]) {
                    u[C] = I;
                }
            }
            d.push(b);
        }
        a[s] = d;
        l[s] = x;
    }
    let c = -1;
    if (typeof n === "object" && "length" in n) {
        while(++c < o){
            i[c] = Mn(n[c]);
        }
    } else {
        const d = Mn(n);
        while(++c < o){
            i[c] = d;
        }
    }
    c = -1;
    const f = [];
    const p = [];
    while(++c < o){
        const d = i[c];
        let x = "";
        let C = "";
        switch(d){
            case 99:
                x = ":";
                C = ":";
                break;
            case 108:
                x = ":";
                break;
            default:
                if (d === 114) {
                    C = ":";
                }
        }
        let b = t.alignDelimiters === false ? 1 : Math.max(1, u[c] - x.length - C.length);
        const I = x + "-".repeat(b) + C;
        if (t.alignDelimiters !== false) {
            b = x.length + b + C.length;
            if (b > u[c]) {
                u[c] = b;
            }
            p[c] = b;
        }
        f[c] = I;
    }
    a.splice(1, 0, f);
    l.splice(1, 0, p);
    s = -1;
    const h = [];
    while(++s < a.length){
        const d = a[s];
        const x = l[s];
        c = -1;
        const C = [];
        while(++c < o){
            const b = d[c] || "";
            let I = "";
            let E = "";
            if (t.alignDelimiters !== false) {
                const D = u[c] - (x[c] || 0);
                const v = i[c];
                switch(v){
                    case 114:
                        I = " ".repeat(D);
                        break;
                    case 99:
                        if (D % 2) {
                            I = " ".repeat(D / 2 + 0.5);
                            E = " ".repeat(D / 2 - 0.5);
                        } else {
                            I = " ".repeat(D / 2);
                            E = I;
                        }
                        break;
                    default:
                        E = " ".repeat(D);
                }
            }
            if (t.delimiterStart !== false && !c) {
                C.push("|");
            }
            if (t.padding !== false && !(t.alignDelimiters === false && b === "") && (t.delimiterStart !== false || c)) {
                C.push(" ");
            }
            if (t.alignDelimiters !== false) {
                C.push(I);
            }
            C.push(b);
            if (t.alignDelimiters !== false) {
                C.push(E);
            }
            if (t.padding !== false) {
                C.push(" ");
            }
            if (t.delimiterEnd !== false || c !== o - 1) {
                C.push("|");
            }
        }
        h.push(t.delimiterEnd === false ? C.join("").replace(/ +$/, "") : C.join(""));
    }
    return h.join(`
`);
}
function us(e) {
    if (e == null) {
        return "";
    }
    return String(e);
}
function os(e) {
    return e.length;
}
function Mn(e) {
    const t = typeof e === "string" ? e.codePointAt(0) : 0;
    if (t === 67 || t === 99) {
        return 99;
    }
    if (t === 76 || t === 108) {
        return 108;
    }
    if (t === 82 || t === 114) {
        return 114;
    }
    return 0;
}
function ss(e, t, n, r) {
    const i = n.enter("blockquote");
    const a = n.createTracker(r);
    a.move("> ");
    a.shift(2);
    const l = n.indentLines(n.containerFlow(e, a.current()), cs);
    i();
    return l;
}
function cs(e, t, n) {
    return `>${n ? "" : " "}${e}`;
}
function fs(stack, t) {
    return Nn(stack, t.inConstruct, true) && !Nn(stack, t.notInConstruct, false);
}
function Nn(stack, t, n) {
    if (typeof t === "string") {
        t = [
            t
        ];
    }
    if (!t || t.length === 0) {
        return n;
    }
    let r = -1;
    while(++r < t.length){
        if (stack.includes(t[r])) {
            return true;
        }
    }
    return false;
}
function hardBreak(e, t, n, r) {
    let i = -1;
    while(++i < n.unsafe.length){
        if (n.unsafe[i].character === `
` && fs(n.stack, n.unsafe[i])) {
            if (/[ \t]/.test(r.before)) {
                return "";
            }
            return " ";
        }
    }
    return `\\
`;
}
function Tr(e, t) {
    const n = String(e);
    let r = n.indexOf(t);
    let i = r;
    let a = 0;
    let l = 0;
    if (typeof t !== "string") {
        throw new TypeError("Expected substring");
    }
    while(r !== -1){
        if (r === i) {
            if (++a > l) {
                l = a;
            }
        } else {
            a = 1;
        }
        i = r + t.length;
        r = n.indexOf(t, i);
    }
    return l;
}
function hs(e, t) {
    return !!(t.options.fences === false && e.value && !e.lang && /[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function ps(e) {
    const t = e.options.fence || "`";
    if (t !== "`" && t !== "~") {
        throw new Error(`Cannot serialize code with \`${t}\` for \`options.fence\`, expected \`\` \` \`\` or \`~\``);
    }
    return t;
}
function ms(e, t, n, r) {
    const i = ps(n);
    const a = e.value || "";
    const l = i === "`" ? "GraveAccent" : "Tilde";
    if (hs(e, n)) {
        const f = n.enter("codeIndented");
        const p = n.indentLines(a, gs);
        f();
        return p;
    }
    const u = n.createTracker(r);
    const o = i.repeat(Math.max(Tr(a, i) + 1, 3));
    const s = n.enter("codeFenced");
    let c = u.move(o);
    if (e.lang) {
        const f = n.enter(`codeFencedLang${l}`);
        c += u.move(n.safe(e.lang, {
            before: c,
            after: " ",
            encode: [
                "`"
            ],
            ...u.current()
        }));
        f();
    }
    if (e.lang && e.meta) {
        const f = n.enter(`codeFencedMeta${l}`);
        c += u.move(" ");
        c += u.move(n.safe(e.meta, {
            before: c,
            after: `
`,
            encode: [
                "`"
            ],
            ...u.current()
        }));
        f();
    }
    c += u.move(`
`);
    if (a) {
        c += u.move(a + `
`);
    }
    c += u.move(o);
    s();
    return c;
}
function gs(e, t, n) {
    return (n ? "" : "    ") + e;
}
function Ut(e) {
    const t = e.options.quote || '"';
    if (t !== '"' && t !== "'") {
        throw new Error(`Cannot serialize title with \`${t}\` for \`options.quote\`, expected \`"\`, or \`'\``);
    }
    return t;
}
function definition(e, t, n, r) {
    const i = Ut(n);
    const a = i === '"' ? "Quote" : "Apostrophe";
    const l = n.enter("definition");
    let u = n.enter("label");
    const o = n.createTracker(r);
    let s = o.move("[");
    s += o.move(n.safe(n.associationId(e), {
        before: s,
        after: "]",
        ...o.current()
    }));
    s += o.move("]: ");
    u();
    if (!e.url || /[\0- \u007F]/.test(e.url)) {
        u = n.enter("destinationLiteral");
        s += o.move("<");
        s += o.move(n.safe(e.url, {
            before: s,
            after: ">",
            ...o.current()
        }));
        s += o.move(">");
    } else {
        u = n.enter("destinationRaw");
        s += o.move(n.safe(e.url, {
            before: s,
            after: e.title ? " " : `
`,
            ...o.current()
        }));
    }
    u();
    if (e.title) {
        u = n.enter(`title${a}`);
        s += o.move(` ${i}`);
        s += o.move(n.safe(e.title, {
            before: s,
            after: i,
            ...o.current()
        }));
        s += o.move(i);
        u();
    }
    l();
    return s;
}
function xs(e) {
    const t = e.options.emphasis || "*";
    if (t !== "*" && t !== "_") {
        throw new Error(`Cannot serialize emphasis with \`${t}\` for \`options.emphasis\`, expected \`*\`, or \`_\``);
    }
    return t;
}
function Oe(e) {
    return `&#x${e.toString(16).toUpperCase()};`;
}
function Je(e, t, n) {
    const r = Ie(e);
    const i = Ie(t);
    if (r === undefined) {
        if (i === undefined) {
            if (n === "_") {
                return {
                    inside: true,
                    outside: true
                };
            }
            return {
                inside: false,
                outside: false
            };
        }
        if (i === 1) {
            return {
                inside: true,
                outside: true
            };
        }
        return {
            inside: false,
            outside: true
        };
    }
    if (r === 1) {
        if (i === undefined) {
            return {
                inside: false,
                outside: false
            };
        }
        if (i === 1) {
            return {
                inside: true,
                outside: true
            };
        }
        return {
            inside: false,
            outside: false
        };
    }
    if (i === undefined) {
        return {
            inside: false,
            outside: false
        };
    }
    if (i === 1) {
        return {
            inside: true,
            outside: false
        };
    }
    return {
        inside: false,
        outside: false
    };
}
emphasis_1.peek = ks;
function emphasis_1(e, t, n, r) {
    const i = xs(n);
    const a = n.enter("emphasis");
    const l = n.createTracker(r);
    const u = l.move(i);
    let o = l.move(n.containerPhrasing(e, {
        after: i,
        before: u,
        ...l.current()
    }));
    const s = o.charCodeAt(0);
    const c = Je(r.before.charCodeAt(r.before.length - 1), s, i);
    if (c.inside) {
        o = Oe(s) + o.slice(1);
    }
    const f = o.charCodeAt(o.length - 1);
    const p = Je(r.after.charCodeAt(0), f, i);
    if (p.inside) {
        o = o.slice(0, -1) + Oe(f);
    }
    const h = l.move(i);
    a();
    n.attentionEncodeSurroundingInfo = {
        after: p.outside,
        before: c.outside
    };
    return u + o + h;
}
function ks(e, t, n) {
    return n.options.emphasis || "*";
}
function ys(e, t) {
    let n = false;
    Ht(e, (r)=>{
        if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break") {
            n = true;
            return St;
        }
    });
    return !!((!e.depth || e.depth < 3) && Rt(e) && (t.options.setext || n));
}
function bs(e, t, n, r) {
    const i = Math.max(Math.min(6, e.depth || 1), 1);
    const a = n.createTracker(r);
    if (ys(e, n)) {
        const c = n.enter("headingSetext");
        const f = n.enter("phrasing");
        const p = n.containerPhrasing(e, {
            ...a.current(),
            before: `
`,
            after: `
`
        });
        f();
        c();
        return p + `
` + (i === 1 ? "=" : "-").repeat(p.length - (Math.max(p.lastIndexOf("\r"), p.lastIndexOf(`
`)) + 1));
    }
    const l = "#".repeat(i);
    const u = n.enter("headingAtx");
    const o = n.enter("phrasing");
    a.move(`${l} `);
    let s = n.containerPhrasing(e, {
        before: "# ",
        after: `
`,
        ...a.current()
    });
    if (/^[\t ]/.test(s)) {
        s = Oe(s.charCodeAt(0)) + s.slice(1);
    }
    s = s ? `${l} ${s}` : l;
    if (n.options.closeAtx) {
        s += ` ${l}`;
    }
    o();
    u();
    return s;
}
html_1.peek = ws;
function html_1(e) {
    return e.value || "";
}
function ws() {
    return "<";
}
image_1.peek = Ss;
function image_1(e, t, n, r) {
    const i = Ut(n);
    const a = i === '"' ? "Quote" : "Apostrophe";
    const l = n.enter("image");
    let u = n.enter("label");
    const o = n.createTracker(r);
    let s = o.move("![");
    s += o.move(n.safe(e.alt, {
        before: s,
        after: "]",
        ...o.current()
    }));
    s += o.move("](");
    u();
    if (!e.url && e.title || /[\0- \u007F]/.test(e.url)) {
        u = n.enter("destinationLiteral");
        s += o.move("<");
        s += o.move(n.safe(e.url, {
            before: s,
            after: ">",
            ...o.current()
        }));
        s += o.move(">");
    } else {
        u = n.enter("destinationRaw");
        s += o.move(n.safe(e.url, {
            before: s,
            after: e.title ? " " : ")",
            ...o.current()
        }));
    }
    u();
    if (e.title) {
        u = n.enter(`title${a}`);
        s += o.move(` ${i}`);
        s += o.move(n.safe(e.title, {
            before: s,
            after: i,
            ...o.current()
        }));
        s += o.move(i);
        u();
    }
    s += o.move(")");
    l();
    return s;
}
function Ss() {
    return "!";
}
imageReference_1.peek = Cs;
function imageReference_1(e, t, n, r) {
    const e_referenceType = e.referenceType;
    const a = n.enter("imageReference");
    let l = n.enter("label");
    const u = n.createTracker(r);
    let o = u.move("![");
    const s = n.safe(e.alt, {
        before: o,
        after: "]",
        ...u.current()
    });
    o += u.move(`${s}][`);
    l();
    const n_stack = n.stack;
    n.stack = [];
    l = n.enter("reference");
    const f = n.safe(n.associationId(e), {
        before: o,
        after: "]",
        ...u.current()
    });
    l();
    n.stack = n_stack;
    a();
    if (e_referenceType === "full" || !s || s !== f) {
        o += u.move(`${f}]`);
    } else if (e_referenceType === "shortcut") {
        o = o.slice(0, -1);
    } else {
        o += u.move("]");
    }
    return o;
}
function Cs() {
    return "!";
}
Pr.peek = Es;
function Pr(e, t, n) {
    let r = e.value || "";
    let i = "`";
    let a = -1;
    while(new RegExp(`(^|[^\`])${i}([^\`]|\$)`).test(r)){
        i += "`";
    }
    for(/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = ` ${r} `); ++a < n.unsafe.length;){
        const l = n.unsafe[a];
        const u = n.compilePattern(l);
        let o;
        if (l.atBreak) {
            while(o = u.exec(r)){
                let s = o.index;
                r.charCodeAt(s) === 10 && r.charCodeAt(s - 1) === 13 && s--;
                r = `${r.slice(0, s)} ${r.slice(o.index + 1)}`;
            }
        }
    }
    return i + r + i;
}
function Es() {
    return "`";
}
function Dr(e, t) {
    const n = Rt(e);
    return !!(!t.options.resourceLink && e.url && !e.title && e.children && e.children.length === 1 && e.children[0].type === "text" && (n === e.url || `mailto:${n}` === e.url) && /^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url));
}
link_1.peek = Is;
function link_1(e, t, n, r) {
    const i = Ut(n);
    const a = i === '"' ? "Quote" : "Apostrophe";
    const l = n.createTracker(r);
    let u;
    let o;
    if (Dr(e, n)) {
        const c = n.stack;
        n.stack = [];
        u = n.enter("autolink");
        let f = l.move("<");
        f += l.move(n.containerPhrasing(e, {
            before: f,
            after: ">",
            ...l.current()
        }));
        f += l.move(">");
        u();
        n.stack = c;
        return f;
    }
    u = n.enter("link");
    o = n.enter("label");
    let s = l.move("[");
    s += l.move(n.containerPhrasing(e, {
        before: s,
        after: "](",
        ...l.current()
    }));
    s += l.move("](");
    o();
    if (!e.url && e.title || /[\0- \u007F]/.test(e.url)) {
        o = n.enter("destinationLiteral");
        s += l.move("<");
        s += l.move(n.safe(e.url, {
            before: s,
            after: ">",
            ...l.current()
        }));
        s += l.move(">");
    } else {
        o = n.enter("destinationRaw");
        s += l.move(n.safe(e.url, {
            before: s,
            after: e.title ? " " : ")",
            ...l.current()
        }));
    }
    o();
    if (e.title) {
        o = n.enter(`title${a}`);
        s += l.move(` ${i}`);
        s += l.move(n.safe(e.title, {
            before: s,
            after: i,
            ...l.current()
        }));
        s += l.move(i);
        o();
    }
    s += l.move(")");
    u();
    return s;
}
function Is(e, t, n) {
    if (Dr(e, n)) {
        return "<";
    }
    return "[";
}
linkReference_1.peek = Ts;
function linkReference_1(e, t, n, r) {
    const e_referenceType = e.referenceType;
    const a = n.enter("linkReference");
    let l = n.enter("label");
    const u = n.createTracker(r);
    let o = u.move("[");
    const s = n.containerPhrasing(e, {
        before: o,
        after: "]",
        ...u.current()
    });
    o += u.move(`${s}][`);
    l();
    const n_stack = n.stack;
    n.stack = [];
    l = n.enter("reference");
    const f = n.safe(n.associationId(e), {
        before: o,
        after: "]",
        ...u.current()
    });
    l();
    n.stack = n_stack;
    a();
    if (e_referenceType === "full" || !s || s !== f) {
        o += u.move(`${f}]`);
    } else if (e_referenceType === "shortcut") {
        o = o.slice(0, -1);
    } else {
        o += u.move("]");
    }
    return o;
}
function Ts() {
    return "[";
}
function Wt(e) {
    const t = e.options.bullet || "*";
    if (t !== "*" && t !== "+" && t !== "-") {
        throw new Error(`Cannot serialize items with \`${t}\` for \`options.bullet\`, expected \`*\`, \`+\`, or \`-\``);
    }
    return t;
}
function As(e) {
    const t = Wt(e);
    const bulletOther = e.options.bulletOther;
    if (!bulletOther) {
        if (t === "*") {
            return "-";
        }
        return "*";
    }
    if (bulletOther !== "*" && bulletOther !== "+" && bulletOther !== "-") {
        throw new Error(`Cannot serialize items with \`${bulletOther}\` for \`options.bulletOther\`, expected \`*\`, \`+\`, or \`-\``);
    }
    if (bulletOther === t) {
        throw new Error(`Expected \`bullet\` (\`${t}\`) and \`bulletOther\` (\`${bulletOther}\`) to be different`);
    }
    return bulletOther;
}
function Fs(e) {
    const t = e.options.bulletOrdered || ".";
    if (t !== "." && t !== ")") {
        throw new Error(`Cannot serialize items with \`${t}\` for \`options.bulletOrdered\`, expected \`.\` or \`)\``);
    }
    return t;
}
function Nr(e) {
    const t = e.options.rule || "*";
    if (t !== "*" && t !== "-" && t !== "_") {
        throw new Error(`Cannot serialize rules with \`${t}\` for \`options.rule\`, expected \`*\`, \`-\`, or \`_\``);
    }
    return t;
}
function zs(e, t, n, r) {
    const i = n.enter("list");
    const n_bulletCurrent = n.bulletCurrent;
    let l = e.ordered ? Fs(n) : Wt(n);
    const u = e.ordered ? l === "." ? ")" : "." : As(n);
    let o = t && n.bulletLastUsed ? l === n.bulletLastUsed : false;
    if (!e.ordered) {
        const c = e.children ? e.children[0] : undefined;
        if ((l === "*" || l === "-") && c && (!c.children || !c.children[0]) && n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0) {
            o = true;
        }
        if (Nr(n) === l && c) {
            let f = -1;
            while(++f < e.children.length){
                const p = e.children[f];
                if (p && p.type === "listItem" && p.children && p.children[0] && p.children[0].type === "thematicBreak") {
                    o = true;
                    break;
                }
            }
        }
    }
    if (o) {
        l = u;
    }
    n.bulletCurrent = l;
    const s = n.containerFlow(e, r);
    n.bulletLastUsed = l;
    n.bulletCurrent = n_bulletCurrent;
    i();
    return s;
}
function _s(e) {
    const t = e.options.listItemIndent || "one";
    if (t !== "tab" && t !== "one" && t !== "mixed") {
        throw new Error(`Cannot serialize items with \`${t}\` for \`options.listItemIndent\`, expected \`tab\`, \`one\`, or \`mixed\``);
    }
    return t;
}
function Ps(e, t, n, r) {
    const i = _s(n);
    let a = n.bulletCurrent || Wt(n);
    if (t && t.type === "list" && t.ordered) {
        a = (typeof t.start === "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === false ? 0 : t.children.indexOf(e)) + a;
    }
    let l = a.length + 1;
    if (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) {
        l = Math.ceil(l / 4) * 4;
    }
    const u = n.createTracker(r);
    u.move(a + " ".repeat(l - a.length));
    u.shift(l);
    const o = n.enter("listItem");
    const s = n.indentLines(n.containerFlow(e, u.current()), c);
    o();
    return s;
    function c(f, p, h) {
        if (p) {
            return (h ? "" : " ".repeat(l)) + f;
        }
        return (h ? a : a + " ".repeat(l - a.length)) + f;
    }
}
function Ds(e, t, n, r) {
    const i = n.enter("paragraph");
    const a = n.enter("phrasing");
    const l = n.containerPhrasing(e, r);
    a();
    i();
    return l;
}
const Ls = tt([
    "break",
    "delete",
    "emphasis",
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    "inlineMath",
    "link",
    "linkReference",
    "mdxJsxTextElement",
    "mdxTextExpression",
    "strong",
    "text",
    "textDirective"
]);
function Ms(e, t, n, r) {
    return (e.children.some((l)=>Ls(l)) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function Ns(e) {
    const t = e.options.strong || "*";
    if (t !== "*" && t !== "_") {
        throw new Error(`Cannot serialize strong with \`${t}\` for \`options.strong\`, expected \`*\`, or \`_\``);
    }
    return t;
}
strong_1.peek = Rs;
function strong_1(e, t, n, r) {
    const i = Ns(n);
    const a = n.enter("strong");
    const l = n.createTracker(r);
    const u = l.move(i + i);
    let o = l.move(n.containerPhrasing(e, {
        after: i,
        before: u,
        ...l.current()
    }));
    const s = o.charCodeAt(0);
    const c = Je(r.before.charCodeAt(r.before.length - 1), s, i);
    if (c.inside) {
        o = Oe(s) + o.slice(1);
    }
    const f = o.charCodeAt(o.length - 1);
    const p = Je(r.after.charCodeAt(0), f, i);
    if (p.inside) {
        o = o.slice(0, -1) + Oe(f);
    }
    const h = l.move(i + i);
    a();
    n.attentionEncodeSurroundingInfo = {
        after: p.outside,
        before: c.outside
    };
    return u + o + h;
}
function Rs(e, t, n) {
    return n.options.strong || "*";
}
function vs(e, t, n, r) {
    return n.safe(e.value, r);
}
function Os(e) {
    const t = e.options.ruleRepetition || 3;
    if (t < 3) {
        throw new Error(`Cannot serialize rules with repetition \`${t}\` for \`options.ruleRepetition\`, expected \`3\` or more`);
    }
    return t;
}
function Bs(e, t, n) {
    const r = (Nr(n) + (n.options.ruleSpaces ? " " : "")).repeat(Os(n));
    if (n.options.ruleSpaces) {
        return r.slice(0, -1);
    }
    return r;
}
const vr = {
    blockquote: ss,
    break: hardBreak,
    code: ms,
    definition,
    emphasis: emphasis_1,
    hardBreak,
    heading: bs,
    html: html_1,
    image: image_1,
    imageReference: imageReference_1,
    inlineCode: Pr,
    link: link_1,
    linkReference: linkReference_1,
    list: zs,
    listItem: Ps,
    paragraph: Ds,
    root: Ms,
    strong: strong_1,
    text: vs,
    thematicBreak: Bs
};
function js() {
    return {
        enter: {
            table: qs,
            tableData: vn,
            tableHeader: vn,
            tableRow: Hs
        },
        exit: {
            codeText,
            table: $s,
            tableData: kt,
            tableHeader: kt,
            tableRow: kt
        }
    };
}
function qs(e) {
    const e__align = e._align;
    this.enter({
        type: "table",
        align: e__align.map((n)=>{
            if (n === "none") {
                return null;
            }
            return n;
        }),
        children: []
    }, e);
    this.data.inTable = true;
}
function $s(e) {
    this.exit(e);
    this.data.inTable = undefined;
}
function Hs(e) {
    this.enter({
        type: "tableRow",
        children: []
    }, e);
}
function kt(e) {
    this.exit(e);
}
function vn(e) {
    this.enter({
        type: "tableCell",
        children: []
    }, e);
}
function codeText(e) {
    let t = this.resume();
    if (this.data.inTable) {
        t = t.replace(/\\([\\|])/g, Us);
    }
    const n = this.stack[this.stack.length - 1];
    n.type;
    n.value = t;
    this.exit(e);
}
function Us(e, t) {
    if (t === "|") {
        return t;
    }
    return e;
}
function Ws(e) {
    const t = e || {};
    const { tableCellPadding, tablePipeAlign, stringLength } = t;
    const a = tableCellPadding ? " " : "|";
    return {
        unsafe: [
            {
                character: "\r",
                inConstruct: "tableCell"
            },
            {
                character: `
`,
                inConstruct: "tableCell"
            },
            {
                atBreak: true,
                character: "|",
                after: "[	 :-]"
            },
            {
                character: "|",
                inConstruct: "tableCell"
            },
            {
                atBreak: true,
                character: ":",
                after: "-"
            },
            {
                atBreak: true,
                character: "-",
                after: "[:|-]"
            }
        ],
        handlers: {
            inlineCode: p,
            table: l,
            tableCell: tableCell_1,
            tableRow: u
        }
    };
    function l(h, d, x, C) {
        return s(c(h, x, C), h.align);
    }
    function u(h, d, x, C) {
        const b = f(h, x, C);
        const I = s([
            b
        ]);
        return I.slice(0, I.indexOf(`
`));
    }
    function tableCell_1(h, d, x, C) {
        const b = x.enter("tableCell");
        const I = x.enter("phrasing");
        const E = x.containerPhrasing(h, {
            ...C,
            before: a,
            after: a
        });
        I();
        b();
        return E;
    }
    function s(h, align) {
        return as(h, {
            align,
            alignDelimiters: tablePipeAlign,
            padding: tableCellPadding,
            stringLength
        });
    }
    function c({ children }, d, x) {
        let b = -1;
        const I = [];
        const E = d.enter("table");
        while(++b < children.length){
            I[b] = f(children[b], d, x);
        }
        E();
        return I;
    }
    function f(h, d, x) {
        const h_children = h.children;
        let b = -1;
        const I = [];
        const E = d.enter("tableRow");
        while(++b < h_children.length){
            I[b] = tableCell_1(h_children[b], h, d, x);
        }
        E();
        return I;
    }
    function p(h, d, x) {
        let C = vr.inlineCode(h, d, x);
        if (x.stack.includes("tableCell")) {
            C = C.replace(/\|/g, "\\$&");
        }
        return C;
    }
}
function Qs() {
    return {
        exit: {
            taskListCheckValueChecked: On,
            taskListCheckValueUnchecked: On,
            paragraph: Ys
        }
    };
}
function Gs() {
    return {
        unsafe: [
            {
                atBreak: true,
                character: "-",
                after: "[:|-]"
            }
        ],
        handlers: {
            listItem: Xs
        }
    };
}
function On(e) {
    const t = this.stack[this.stack.length - 2];
    t.type;
    t.checked = e.type === "taskListCheckValueChecked";
}
function Ys(e) {
    const t = this.stack[this.stack.length - 2];
    if (t && t.type === "listItem" && typeof t.checked === "boolean") {
        const n = this.stack[this.stack.length - 1];
        n.type;
        const r = n.children[0];
        if (r && r.type === "text") {
            const i = t.children;
            let a = -1;
            let l;
            while(++a < i.length){
                const u = i[a];
                if (u.type === "paragraph") {
                    l = u;
                    break;
                }
            }
            if (l === n) {
                r.value = r.value.slice(1);
                if (r.value.length === 0) {
                    n.children.shift();
                } else if (n.position && r.position && typeof r.position.start.offset === "number") {
                    r.position.start.column++;
                    r.position.start.offset++;
                    n.position.start = {
                        ...r.position.start
                    };
                }
            }
        }
    }
    this.exit(e);
}
function Xs(e, t, n, r) {
    const i = e.children[0];
    const a = typeof e.checked === "boolean" && i && i.type === "paragraph";
    const l = `[${e.checked ? "x" : " "}] `;
    const u = n.createTracker(r);
    if (a) {
        u.move(l);
    }
    let o = vr.listItem(e, t, n, {
        ...r,
        ...u.current()
    });
    if (a) {
        o = o.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, s);
    }
    return o;
    function s(c) {
        return c + l;
    }
}
function Js() {
    return [
        _o(),
        Jo(),
        ts(),
        js(),
        Qs()
    ];
}
function Ks(e) {
    return {
        extensions: [
            Po(),
            Ko(e),
            ns(),
            Ws(e),
            Gs()
        ]
    };
}
const Zs = {
    tokenize: lc,
    partial: true
};
const Or = {
    tokenize: ac,
    partial: true
};
const Br = {
    tokenize: uc,
    partial: true
};
const jr = {
    tokenize: oc,
    partial: true
};
const ec = {
    tokenize: sc,
    partial: true
};
const qr = {
    name: "wwwAutolink",
    tokenize: rc,
    previous: Hr
};
const $r = {
    name: "protocolAutolink",
    tokenize: ic,
    previous: Vr
};
const ce = {
    name: "emailAutolink",
    tokenize: nc,
    previous: Ur
};
const le = {};
function tc() {
    return {
        text: le
    };
}
let xe = 48;
while(xe < 123){
    le[xe] = ce;
    xe++;
    if (xe === 58) {
        xe = 65;
    } else if (xe === 91) {
        xe = 97;
    }
}
le[43] = ce;
le[45] = ce;
le[46] = ce;
le[95] = ce;
le[72] = [
    ce,
    $r
];
le[104] = [
    ce,
    $r
];
le[87] = [
    ce,
    qr
];
le[119] = [
    ce,
    qr
];
function nc(e, t, n) {
    const r = this;
    let i;
    let a;
    return l;
    function l(f) {
        if (!Tt(f) || !Ur.call(r, r.previous) || Qt(r.events)) {
            return n(f);
        }
        e.enter("literalAutolink");
        e.enter("literalAutolinkEmail");
        return u(f);
    }
    function u(f) {
        if (Tt(f)) {
            e.consume(f);
            return u;
        }
        if (f === 64) {
            e.consume(f);
            return o;
        }
        return n(f);
    }
    function o(f) {
        if (f === 46) {
            return e.check(ec, c, s)(f);
        }
        if (f === 45 || f === 95 || Q(f)) {
            a = true;
            e.consume(f);
            return o;
        }
        return c(f);
    }
    function s(f) {
        e.consume(f);
        i = true;
        return o;
    }
    function c(f) {
        if (a && i && Y(r.previous)) {
            e.exit("literalAutolinkEmail");
            e.exit("literalAutolink");
            return t(f);
        }
        return n(f);
    }
}
function rc(e, t, n) {
    const r = this;
    return i;
    function i(l) {
        if (l !== 87 && l !== 119 || !Hr.call(r, r.previous) || Qt(r.events)) {
            return n(l);
        }
        e.enter("literalAutolink");
        e.enter("literalAutolinkWww");
        return e.check(Zs, e.attempt(Or, e.attempt(Br, a), n), n)(l);
    }
    function a(l) {
        e.exit("literalAutolinkWww");
        e.exit("literalAutolink");
        return t(l);
    }
}
function ic(e, t, n) {
    const r = this;
    let i = "";
    let a = false;
    return l;
    function l(f) {
        if ((f === 72 || f === 104) && Vr.call(r, r.previous) && !Qt(r.events)) {
            e.enter("literalAutolink");
            e.enter("literalAutolinkHttp");
            i += String.fromCodePoint(f);
            e.consume(f);
            return u;
        }
        return n(f);
    }
    function u(f) {
        if (Y(f) && i.length < 5) {
            i += String.fromCodePoint(f);
            e.consume(f);
            return u;
        }
        if (f === 58) {
            const p = i.toLowerCase();
            if (p === "http" || p === "https") {
                e.consume(f);
                return o;
            }
        }
        return n(f);
    }
    function o(f) {
        if (f === 47) {
            e.consume(f);
            if (a) {
                return s;
            }
            return a = true, o;
        }
        return n(f);
    }
    function s(f) {
        if (f === null || Ge(f) || U(f) || ke(f) || Ke(f)) {
            return n(f);
        }
        return e.attempt(Or, e.attempt(Br, c), n)(f);
    }
    function c(f) {
        e.exit("literalAutolinkHttp");
        e.exit("literalAutolink");
        return t(f);
    }
}
function lc(e, t, n) {
    let r = 0;
    return i;
    function i(l) {
        if ((l === 87 || l === 119) && r < 3) {
            r++;
            e.consume(l);
            return i;
        }
        if (l === 46 && r === 3) {
            e.consume(l);
            return a;
        }
        return n(l);
    }
    function a(l) {
        if (l === null) {
            return n(l);
        }
        return t(l);
    }
}
function ac(e, t, n) {
    let r;
    let i;
    let a;
    return l;
    function l(s) {
        if (s === 46 || s === 95) {
            return e.check(jr, o, u)(s);
        }
        if (s === null || U(s) || ke(s) || s !== 45 && Ke(s)) {
            return o(s);
        }
        a = true;
        e.consume(s);
        return l;
    }
    function u(s) {
        if (s === 95) {
            r = true;
        } else {
            i = r;
            r = undefined;
        }
        e.consume(s);
        return l;
    }
    function o(s) {
        if (i || r || !a) {
            return n(s);
        }
        return t(s);
    }
}
function uc(e, t) {
    let n = 0;
    let r = 0;
    return i;
    function i(l) {
        if (l === 40) {
            n++;
            e.consume(l);
            return i;
        }
        if (l === 41 && r < n) {
            return a(l);
        }
        if (l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126) {
            return e.check(jr, t, a)(l);
        }
        if (l === null || U(l) || ke(l)) {
            return t(l);
        }
        e.consume(l);
        return i;
    }
    function a(l) {
        l === 41 && r++;
        e.consume(l);
        return i;
    }
}
function oc(e, t, n) {
    return r;
    function r(u) {
        if (u === 33 || u === 34 || u === 39 || u === 41 || u === 42 || u === 44 || u === 46 || u === 58 || u === 59 || u === 63 || u === 95 || u === 126) {
            e.consume(u);
            return r;
        }
        if (u === 38) {
            e.consume(u);
            return a;
        }
        if (u === 93) {
            e.consume(u);
            return i;
        }
        if (u === 60 || u === null || U(u) || ke(u)) {
            return t(u);
        }
        return n(u);
    }
    function i(u) {
        if (u === null || u === 40 || u === 91 || U(u) || ke(u)) {
            return t(u);
        }
        return r(u);
    }
    function a(u) {
        if (Y(u)) {
            return l(u);
        }
        return n(u);
    }
    function l(u) {
        if (u === 59) {
            e.consume(u);
            return r;
        }
        if (Y(u)) {
            e.consume(u);
            return l;
        }
        return n(u);
    }
}
function sc(e, t, n) {
    return r;
    function r(a) {
        e.consume(a);
        return i;
    }
    function i(a) {
        if (Q(a)) {
            return n(a);
        }
        return t(a);
    }
}
function Hr(e) {
    return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || U(e);
}
function Vr(e) {
    return !Y(e);
}
function Ur(e) {
    return !(e === 47 || Tt(e));
}
function Tt(e) {
    return e === 43 || e === 45 || e === 46 || e === 95 || Q(e);
}
function Qt(events) {
    let e_length = events.length;
    let n = false;
    while(e_length--){
        const r = events[e_length][1];
        if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
            n = true;
            break;
        }
        if (r._gfmAutolinkLiteralWalkedInto) {
            n = false;
            break;
        }
    }
    if (events.length > 0 && !n) {
        events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
    }
    return n;
}
const cc = {
    tokenize: kc,
    partial: true
};
function fc() {
    return {
        document: {
            91: {
                name: "gfmFootnoteDefinition",
                tokenize: gc,
                continuation: {
                    tokenize: dc
                },
                exit: xc
            }
        },
        text: {
            91: {
                name: "gfmFootnoteCall",
                tokenize: mc
            },
            93: {
                name: "gfmPotentialFootnoteCall",
                add: "after",
                tokenize: hc,
                resolveTo: pc
            }
        }
    };
}
function hc(e, t, n) {
    const r = this;
    let length = r.events.length;
    const a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
    let l;
    while(length--){
        const o = r.events[length][1];
        if (o.type === "labelImage") {
            l = o;
            break;
        }
        if (o.type === "gfmFootnoteCall" || o.type === "labelLink" || o.type === "label" || o.type === "image" || o.type === "link") {
            break;
        }
    }
    return u;
    function u(o) {
        if (!l || !l._balanced) {
            return n(o);
        }
        const s = re(r.sliceSerialize({
            start: l.end,
            end: r.now()
        }));
        if (s.codePointAt(0) !== 94 || !a.includes(s.slice(1))) {
            return n(o);
        }
        e.enter("gfmFootnoteCallLabelMarker");
        e.consume(o);
        e.exit("gfmFootnoteCallLabelMarker");
        return t(o);
    }
}
function pc(e, t) {
    let e_length = e.length;
    while(e_length--){
        if (e[e_length][1].type === "labelImage" && e[e_length][0] === "enter") {
            e[e_length][1];
            break;
        }
    }
    e[e_length + 1][1].type = "data";
    e[e_length + 3][1].type = "gfmFootnoteCallLabelMarker";
    const r = {
        type: "gfmFootnoteCall",
        start: {
            ...e[e_length + 3][1].start
        },
        end: {
            ...e[e.length - 1][1].end
        }
    };
    const i = {
        type: "gfmFootnoteCallMarker",
        start: {
            ...e[e_length + 3][1].end
        },
        end: {
            ...e[e_length + 3][1].end
        }
    };
    i.end.column++;
    i.end.offset++;
    i.end._bufferIndex++;
    const a = {
        type: "gfmFootnoteCallString",
        start: {
            ...i.end
        },
        end: {
            ...e[e.length - 1][1].start
        }
    };
    const l = {
        type: "chunkString",
        contentType: "string",
        start: {
            ...a.start
        },
        end: {
            ...a.end
        }
    };
    const u = [
        e[e_length + 1],
        e[e_length + 2],
        [
            "enter",
            r,
            t
        ],
        e[e_length + 3],
        e[e_length + 4],
        [
            "enter",
            i,
            t
        ],
        [
            "exit",
            i,
            t
        ],
        [
            "enter",
            a,
            t
        ],
        [
            "enter",
            l,
            t
        ],
        [
            "exit",
            l,
            t
        ],
        [
            "exit",
            a,
            t
        ],
        e[e.length - 2],
        e[e.length - 1],
        [
            "exit",
            r,
            t
        ]
    ];
    e.splice(e_length, e.length - e_length + 1, ...u);
    return e;
}
function mc(e, t, n) {
    const r = this;
    const i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
    let a = 0;
    let l;
    return u;
    function u(f) {
        e.enter("gfmFootnoteCall");
        e.enter("gfmFootnoteCallLabelMarker");
        e.consume(f);
        e.exit("gfmFootnoteCallLabelMarker");
        return o;
    }
    function o(f) {
        if (f !== 94) {
            return n(f);
        }
        e.enter("gfmFootnoteCallMarker");
        e.consume(f);
        e.exit("gfmFootnoteCallMarker");
        e.enter("gfmFootnoteCallString");
        e.enter("chunkString").contentType = "string";
        return s;
    }
    function s(f) {
        if (a > 999 || f === 93 && !l || f === null || f === 91 || U(f)) {
            return n(f);
        }
        if (f === 93) {
            e.exit("chunkString");
            const p = e.exit("gfmFootnoteCallString");
            if (i.includes(re(r.sliceSerialize(p)))) {
                e.enter("gfmFootnoteCallLabelMarker");
                e.consume(f);
                e.exit("gfmFootnoteCallLabelMarker");
                e.exit("gfmFootnoteCall");
                return t;
            }
            return n(f);
        }
        if (!U(f)) {
            l = true;
        }
        a++;
        e.consume(f);
        if (f === 92) {
            return c;
        }
        return s;
    }
    function c(f) {
        if (f === 91 || f === 92 || f === 93) {
            e.consume(f);
            a++;
            return s;
        }
        return s(f);
    }
}
function gc(e, t, n) {
    const r = this;
    const i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
    let a;
    let l = 0;
    let u;
    return o;
    function o(d) {
        e.enter("gfmFootnoteDefinition")._container = true;
        e.enter("gfmFootnoteDefinitionLabel");
        e.enter("gfmFootnoteDefinitionLabelMarker");
        e.consume(d);
        e.exit("gfmFootnoteDefinitionLabelMarker");
        return s;
    }
    function s(d) {
        if (d === 94) {
            e.enter("gfmFootnoteDefinitionMarker");
            e.consume(d);
            e.exit("gfmFootnoteDefinitionMarker");
            e.enter("gfmFootnoteDefinitionLabelString");
            e.enter("chunkString").contentType = "string";
            return c;
        }
        return n(d);
    }
    function c(d) {
        if (l > 999 || d === 93 && !u || d === null || d === 91 || U(d)) {
            return n(d);
        }
        if (d === 93) {
            e.exit("chunkString");
            const x = e.exit("gfmFootnoteDefinitionLabelString");
            a = re(r.sliceSerialize(x));
            e.enter("gfmFootnoteDefinitionLabelMarker");
            e.consume(d);
            e.exit("gfmFootnoteDefinitionLabelMarker");
            e.exit("gfmFootnoteDefinitionLabel");
            return p;
        }
        if (!U(d)) {
            u = true;
        }
        l++;
        e.consume(d);
        if (d === 92) {
            return f;
        }
        return c;
    }
    function f(d) {
        if (d === 91 || d === 92 || d === 93) {
            e.consume(d);
            l++;
            return c;
        }
        return c(d);
    }
    function p(d) {
        if (d === 58) {
            e.enter("definitionMarker");
            e.consume(d);
            e.exit("definitionMarker");
            if (!i.includes(a)) {
                i.push(a);
            }
            return R(e, h, "gfmFootnoteDefinitionWhitespace");
        }
        return n(d);
    }
    function h(d) {
        return t(d);
    }
}
function dc(e, t, n) {
    return e.check(Be, t, e.attempt(cc, t, n));
}
function xc(e) {
    e.exit("gfmFootnoteDefinition");
}
function kc(e, t, n) {
    const r = this;
    return R(e, i, "gfmFootnoteDefinitionIndent", 5);
    function i(a) {
        const l = r.events[r.events.length - 1];
        if (l && l[1].type === "gfmFootnoteDefinitionIndent" && l[2].sliceSerialize(l[1], true).length === 4) {
            return t(a);
        }
        return n(a);
    }
}
function yc(e) {
    let singleTilde = (e || {}).singleTilde;
    const r = {
        name: "strikethrough",
        tokenize: a,
        resolveAll: i
    };
    if (singleTilde == null) {
        singleTilde = true;
    }
    return {
        text: {
            126: r
        },
        insideSpan: {
            null: [
                r
            ]
        },
        attentionMarkers: {
            null: [
                126
            ]
        }
    };
    function i(l, u) {
        let o = -1;
        while(++o < l.length){
            if (l[o][0] === "enter" && l[o][1].type === "strikethroughSequenceTemporary" && l[o][1]._close) {
                let s = o;
                while(s--){
                    if (l[s][0] === "exit" && l[s][1].type === "strikethroughSequenceTemporary" && l[s][1]._open && l[o][1].end.offset - l[o][1].start.offset === l[s][1].end.offset - l[s][1].start.offset) {
                        l[o][1].type = "strikethroughSequence";
                        l[s][1].type = "strikethroughSequence";
                        const c = {
                            type: "strikethrough",
                            start: {
                                ...l[s][1].start
                            },
                            end: {
                                ...l[o][1].end
                            }
                        };
                        const f = {
                            type: "strikethroughText",
                            start: {
                                ...l[s][1].end
                            },
                            end: {
                                ...l[o][1].start
                            }
                        };
                        const p = [
                            [
                                "enter",
                                c,
                                u
                            ],
                            [
                                "enter",
                                l[s][1],
                                u
                            ],
                            [
                                "exit",
                                l[s][1],
                                u
                            ],
                            [
                                "enter",
                                f,
                                u
                            ]
                        ];
                        const h = u.parser.constructs.insideSpan.null;
                        if (h) {
                            K(p, p.length, 0, Ze(h, l.slice(s + 1, o), u));
                        }
                        K(p, p.length, 0, [
                            [
                                "exit",
                                f,
                                u
                            ],
                            [
                                "enter",
                                l[o][1],
                                u
                            ],
                            [
                                "exit",
                                l[o][1],
                                u
                            ],
                            [
                                "exit",
                                c,
                                u
                            ]
                        ]);
                        K(l, s - 1, o - s + 3, p);
                        o = s + p.length - 2;
                        break;
                    }
                }
            }
        }
        for(o = -1; ++o < l.length;){
            if (l[o][1].type === "strikethroughSequenceTemporary") {
                l[o][1].type = "data";
            }
        }
        return l;
    }
    function a(l, u, o) {
        const previous = this.previous;
        const events = this.events;
        let f = 0;
        return p;
        function p(d) {
            if (previous === 126 && events[events.length - 1][1].type !== "characterEscape") {
                return o(d);
            }
            l.enter("strikethroughSequenceTemporary");
            return h(d);
        }
        function h(d) {
            const x = Ie(previous);
            if (d === 126) {
                if (f > 1) {
                    return o(d);
                }
                l.consume(d);
                f++;
                return h;
            }
            if (f < 2 && !singleTilde) {
                return o(d);
            }
            const C = l.exit("strikethroughSequenceTemporary");
            const b = Ie(d);
            C._open = !b || b === 2 && !!x;
            C._close = !x || x === 2 && !!b;
            return u(d);
        }
    }
}
class bc {
    constructor(){
        this.map = [];
    }
    add(t, n, r) {
        wc(this, t, n, r);
    }
    consume(t) {
        this.map.sort((a, l)=>a[0] - l[0]);
        if (this.map.length === 0) {
            return;
        }
        let length = this.map.length;
        const r = [];
        while(length > 0){
            length -= 1;
            r.push(t.slice(this.map[length][0] + this.map[length][1]), this.map[length][2]);
            t.length = this.map[length][0];
        }
        r.push(t.slice());
        t.length = 0;
        let i = r.pop();
        while(i){
            for (const a of i){
                t.push(a);
            }
            i = r.pop();
        }
        this.map.length = 0;
    }
}
function wc(e, t, n, r) {
    let i = 0;
    if (!(n === 0 && r.length === 0)) {
        while(i < e.map.length){
            if (e.map[i][0] === t) {
                e.map[i][1] += n;
                e.map[i][2].push(...r);
                return;
            }
            i += 1;
        }
        e.map.push([
            t,
            n,
            r
        ]);
    }
}
function Sc(events, t) {
    let n = false;
    const r = [];
    while(t < events.length){
        const i = events[t];
        if (n) {
            if (i[0] === "enter") {
                if (i[1].type === "tableContent") {
                    r.push(events[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
                }
            } else if (i[1].type === "tableContent") {
                if (events[t - 1][1].type === "tableDelimiterMarker") {
                    const a = r.length - 1;
                    r[a] = r[a] === "left" ? "center" : "right";
                }
            } else if (i[1].type === "tableDelimiterRow") {
                break;
            }
        } else {
            if (i[0] === "enter" && i[1].type === "tableDelimiterRow") {
                n = true;
            }
        }
        t += 1;
    }
    return r;
}
function Cc() {
    return {
        flow: {
            null: {
                name: "table",
                tokenize: Ec,
                resolveAll: Ic
            }
        }
    };
}
function Ec(e, t, n) {
    const r = this;
    let i = 0;
    let a = 0;
    let l;
    return u;
    function u(y) {
        let k = r.events.length - 1;
        while(k > -1){
            const A = r.events[k][1].type;
            if (A === "lineEnding" || A === "linePrefix") {
                k--;
            } else {
                break;
            }
        }
        const _ = k > -1 ? r.events[k][1].type : null;
        const F = _ === "tableHead" || _ === "tableRow" ? S : o;
        if (F === S && r.parser.lazy[r.now().line]) {
            return n(y);
        }
        return F(y);
    }
    function o(y) {
        e.enter("tableHead");
        e.enter("tableRow");
        return s(y);
    }
    function s(y) {
        if (!(y === 124)) {
            l = true;
            a += 1;
        }
        return c(y);
    }
    function c(y) {
        if (y === null) {
            return n(y);
        }
        if (z(y)) {
            if (a > 1) {
                a = 0;
                r.interrupt = true;
                e.exit("tableRow");
                e.enter("lineEnding");
                e.consume(y);
                e.exit("lineEnding");
                return h;
            }
            return n(y);
        }
        if (B(y)) {
            return R(e, c, "whitespace")(y);
        }
        a += 1;
        if (l) {
            l = false;
            i += 1;
        }
        if (y === 124) {
            return e.enter("tableCellDivider"), e.consume(y), e.exit("tableCellDivider"), l = true, c;
        }
        return e.enter("data"), f(y);
    }
    function f(y) {
        if (y === null || y === 124 || U(y)) {
            e.exit("data");
            return c(y);
        }
        e.consume(y);
        if (y === 92) {
            return p;
        }
        return f;
    }
    function p(y) {
        if (y === 92 || y === 124) {
            e.consume(y);
            return f;
        }
        return f(y);
    }
    function h(y) {
        r.interrupt = false;
        if (r.parser.lazy[r.now().line]) {
            return n(y);
        }
        e.enter("tableDelimiterRow");
        l = false;
        if (B(y)) {
            return R(e, d, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(y);
        }
        return d(y);
    }
    function d(y) {
        if (y === 45 || y === 58) {
            return C(y);
        }
        if (y === 124) {
            l = true;
            e.enter("tableCellDivider");
            e.consume(y);
            e.exit("tableCellDivider");
            return x;
        }
        return v(y);
    }
    function x(y) {
        if (B(y)) {
            return R(e, C, "whitespace")(y);
        }
        return C(y);
    }
    function C(y) {
        if (y === 58) {
            a += 1;
            l = true;
            e.enter("tableDelimiterMarker");
            e.consume(y);
            e.exit("tableDelimiterMarker");
            return b;
        }
        if (y === 45) {
            a += 1;
            return b(y);
        }
        if (y === null || z(y)) {
            return D(y);
        }
        return v(y);
    }
    function b(y) {
        if (y === 45) {
            e.enter("tableDelimiterFiller");
            return I(y);
        }
        return v(y);
    }
    function I(y) {
        switch(y){
            case 45:
                e.consume(y);
                return I;
            case 58:
                l = true;
                e.exit("tableDelimiterFiller");
                e.enter("tableDelimiterMarker");
                e.consume(y);
                e.exit("tableDelimiterMarker");
                return E;
            default:
                e.exit("tableDelimiterFiller");
                return E(y);
        }
    }
    function E(y) {
        if (B(y)) {
            return R(e, D, "whitespace")(y);
        }
        return D(y);
    }
    function D(y) {
        if (y === 124) {
            return d(y);
        }
        if (y === null || z(y)) {
            if (!l || i !== a) {
                return v(y);
            }
            e.exit("tableDelimiterRow");
            e.exit("tableHead");
            return t(y);
        }
        return v(y);
    }
    function v(y) {
        return n(y);
    }
    function S(y) {
        e.enter("tableRow");
        return M(y);
    }
    function M(y) {
        if (y === 124) {
            e.enter("tableCellDivider");
            e.consume(y);
            e.exit("tableCellDivider");
            return M;
        }
        if (y === null || z(y)) {
            e.exit("tableRow");
            return t(y);
        }
        if (B(y)) {
            return R(e, M, "whitespace")(y);
        }
        e.enter("data");
        return $(y);
    }
    function $(y) {
        if (y === null || y === 124 || U(y)) {
            e.exit("data");
            return M(y);
        }
        e.consume(y);
        if (y === 92) {
            return q;
        }
        return $;
    }
    function q(y) {
        if (y === 92 || y === 124) {
            e.consume(y);
            return $;
        }
        return $(y);
    }
}
function Ic(e, t) {
    let n = -1;
    let r = true;
    let i = 0;
    let a = [
        0,
        0,
        0,
        0
    ];
    let l = [
        0,
        0,
        0,
        0
    ];
    let u = false;
    let o = 0;
    let s;
    let c;
    let f;
    const p = new bc;
    while(++n < e.length){
        const h = e[n];
        const d = h[1];
        h[0] === "enter" ? d.type === "tableHead" ? (u = false, o !== 0 && (Bn(p, t, o, s, c), c = undefined, o = 0), s = {
            type: "table",
            start: {
                ...d.start
            },
            end: {
                ...d.end
            }
        }, p.add(n, 0, [
            [
                "enter",
                s,
                t
            ]
        ])) : d.type === "tableRow" || d.type === "tableDelimiterRow" ? (r = true, f = undefined, a = [
            0,
            0,
            0,
            0
        ], l = [
            0,
            n + 1,
            0,
            0
        ], u && (u = false, c = {
            type: "tableBody",
            start: {
                ...d.start
            },
            end: {
                ...d.end
            }
        }, p.add(n, 0, [
            [
                "enter",
                c,
                t
            ]
        ])), i = d.type === "tableDelimiterRow" ? 2 : c ? 3 : 1) : i && (d.type === "data" || d.type === "tableDelimiterMarker" || d.type === "tableDelimiterFiller") ? (r = false, l[2] === 0 && (a[1] !== 0 && (l[0] = l[1], f = Ue(p, t, a, i, undefined, f), a = [
            0,
            0,
            0,
            0
        ]), l[2] = n)) : d.type === "tableCellDivider" && (r ? r = false : (a[1] !== 0 && (l[0] = l[1], f = Ue(p, t, a, i, undefined, f)), a = l, l = [
            a[1],
            n,
            0,
            0
        ])) : d.type === "tableHead" ? (u = true, o = n) : d.type === "tableRow" || d.type === "tableDelimiterRow" ? (o = n, a[1] !== 0 ? (l[0] = l[1], f = Ue(p, t, a, i, n, f)) : l[1] !== 0 && (f = Ue(p, t, l, i, n, f)), i = 0) : i && (d.type === "data" || d.type === "tableDelimiterMarker" || d.type === "tableDelimiterFiller") && (l[3] = n);
    }
    if (o !== 0) {
        Bn(p, t, o, s, c);
    }
    p.consume(t.events);
    for(n = -1; ++n < t.events.length;){
        const h = t.events[n];
        if (h[0] === "enter" && h[1].type === "table") {
            h[1]._align = Sc(t.events, n);
        }
    }
    return e;
}
function Ue(e, t, n, r, i, a) {
    const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData";
    const u = "tableContent";
    if (n[0] !== 0) {
        a.end = {
            ...Ee(t.events, n[0])
        };
        e.add(n[0], 0, [
            [
                "exit",
                a,
                t
            ]
        ]);
    }
    const o = Ee(t.events, n[1]);
    a = {
        type: l,
        start: {
            ...o
        },
        end: {
            ...o
        }
    };
    e.add(n[1], 0, [
        [
            "enter",
            a,
            t
        ]
    ]);
    if (n[2] !== 0) {
        const s = Ee(t.events, n[2]);
        const c = Ee(t.events, n[3]);
        const f = {
            type: u,
            start: {
                ...s
            },
            end: {
                ...c
            }
        };
        e.add(n[2], 0, [
            [
                "enter",
                f,
                t
            ]
        ]);
        if (r !== 2) {
            const p = t.events[n[2]];
            const h = t.events[n[3]];
            p[1].end = {
                ...h[1].end
            };
            p[1].type = "chunkText";
            p[1].contentType = "text";
            if (n[3] > n[2] + 1) {
                const d = n[2] + 1;
                const x = n[3] - n[2] - 1;
                e.add(d, x, []);
            }
        }
        e.add(n[3] + 1, 0, [
            [
                "exit",
                f,
                t
            ]
        ]);
    }
    if (i !== undefined) {
        a.end = {
            ...Ee(t.events, i)
        };
        e.add(i, 0, [
            [
                "exit",
                a,
                t
            ]
        ]);
        a = undefined;
    }
    return a;
}
function Bn(e, t, n, r, i) {
    const a = [];
    const l = Ee(t.events, n);
    if (i) {
        i.end = {
            ...l
        };
        a.push([
            "exit",
            i,
            t
        ]);
    }
    r.end = {
        ...l
    };
    a.push([
        "exit",
        r,
        t
    ]);
    e.add(n + 1, 0, a);
}
function Ee(events, t) {
    const n = events[t];
    const r = n[0] === "enter" ? "start" : "end";
    return n[1][r];
}
const Tc = {
    name: "tasklistCheck",
    tokenize: Fc
};
function Ac() {
    return {
        text: {
            91: Tc
        }
    };
}
function Fc(e, t, n) {
    const r = this;
    return i;
    function i(o) {
        if (r.previous !== null || !r._gfmTasklistFirstContentOfListItem) {
            return n(o);
        }
        e.enter("taskListCheck");
        e.enter("taskListCheckMarker");
        e.consume(o);
        e.exit("taskListCheckMarker");
        return a;
    }
    function a(o) {
        if (U(o)) {
            e.enter("taskListCheckValueUnchecked");
            e.consume(o);
            e.exit("taskListCheckValueUnchecked");
            return l;
        }
        if (o === 88 || o === 120) {
            e.enter("taskListCheckValueChecked");
            e.consume(o);
            e.exit("taskListCheckValueChecked");
            return l;
        }
        return n(o);
    }
    function l(o) {
        if (o === 93) {
            e.enter("taskListCheckMarker");
            e.consume(o);
            e.exit("taskListCheckMarker");
            e.exit("taskListCheck");
            return u;
        }
        return n(o);
    }
    function u(o) {
        if (z(o)) {
            return t(o);
        }
        if (B(o)) {
            return e.check({
                tokenize: zc
            }, t, n)(o);
        }
        return n(o);
    }
}
function zc(e, t, n) {
    return R(e, r, "whitespace");
    function r(i) {
        if (i === null) {
            return n(i);
        }
        return t(i);
    }
}
function _c(e) {
    return tr([
        tc(),
        fc(),
        yc(e),
        Cc(),
        Ac()
    ]);
}
const Pc = {};
function ff(e) {
    const t = this;
    const n = e || Pc;
    const r = t.data();
    const i = r.micromarkExtensions || (r.micromarkExtensions = []);
    const a = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []);
    const l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
    i.push(_c(n));
    a.push(Js());
    l.push(Ks(n));
}
function Dc() {
    return {
        enter: {
            mathFlow: e,
            mathFlowFenceMeta: t,
            mathText: a
        },
        exit: {
            mathFlow: i,
            mathFlowFence,
            mathFlowFenceMeta: n,
            mathFlowValue: u,
            mathText: l,
            mathTextData: u
        }
    };
    function e(o) {
        const s = {
            type: "element",
            tagName: "code",
            properties: {
                className: [
                    "language-math",
                    "math-display"
                ]
            },
            children: []
        };
        this.enter({
            type: "math",
            meta: null,
            value: "",
            data: {
                hName: "pre",
                hChildren: [
                    s
                ]
            }
        }, o);
    }
    function t() {
        this.buffer();
    }
    function n() {
        const o = this.resume();
        const s = this.stack[this.stack.length - 1];
        s.type;
        s.meta = o;
    }
    function mathFlowFence() {
        if (!this.data.mathFlowInside) {
            this.buffer();
            this.data.mathFlowInside = true;
        }
    }
    function i(o) {
        const s = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
        const c = this.stack[this.stack.length - 1];
        c.type;
        this.exit(o);
        c.value = s;
        const f = c.data.hChildren[0];
        f.type;
        f.tagName;
        f.children.push({
            type: "text",
            value: s
        });
        this.data.mathFlowInside = undefined;
    }
    function a(o) {
        this.enter({
            type: "inlineMath",
            value: "",
            data: {
                hName: "code",
                hProperties: {
                    className: [
                        "language-math",
                        "math-inline"
                    ]
                },
                hChildren: []
            }
        }, o);
        this.buffer();
    }
    function l(o) {
        const s = this.resume();
        const c = this.stack[this.stack.length - 1];
        c.type;
        this.exit(o);
        c.value = s;
        c.data.hChildren.push({
            type: "text",
            value: s
        });
    }
    function u(o) {
        this.config.enter.data.call(this, o);
        this.config.exit.data.call(this, o);
    }
}
function Lc(e) {
    let singleDollarTextMath = (e || {}).singleDollarTextMath;
    if (singleDollarTextMath == null) {
        singleDollarTextMath = true;
    }
    inlineMath.peek = i;
    return {
        unsafe: [
            {
                character: "\r",
                inConstruct: "mathFlowMeta"
            },
            {
                character: `
`,
                inConstruct: "mathFlowMeta"
            },
            {
                character: "$",
                after: singleDollarTextMath ? undefined : "\\$",
                inConstruct: "phrasing"
            },
            {
                character: "$",
                inConstruct: "mathFlowMeta"
            },
            {
                atBreak: true,
                character: "$",
                after: "\\$"
            }
        ],
        handlers: {
            math,
            inlineMath
        }
    };
    function math(a, l, u, o) {
        const s = a.value || "";
        const c = u.createTracker(o);
        const f = "$".repeat(Math.max(Tr(s, "$") + 1, 2));
        const p = u.enter("mathFlow");
        let h = c.move(f);
        if (a.meta) {
            const d = u.enter("mathFlowMeta");
            h += c.move(u.safe(a.meta, {
                after: `
`,
                before: h,
                encode: [
                    "$"
                ],
                ...c.current()
            }));
            d();
        }
        h += c.move(`
`);
        if (s) {
            h += c.move(s + `
`);
        }
        h += c.move(f);
        p();
        return h;
    }
    function inlineMath(a, l, u) {
        let o = a.value || "";
        let s = 1;
        for(singleDollarTextMath || s++; new RegExp(`(^|[^\$])${"\\$".repeat(s)}([^\$]|\$)`).test(o);){
            s++;
        }
        const c = "$".repeat(s);
        if (/[^ \r\n]/.test(o) && (/^[ \r\n]/.test(o) && /[ \r\n]$/.test(o) || /^\$|\$$/.test(o))) {
            o = ` ${o} `;
        }
        let f = -1;
        while(++f < u.unsafe.length){
            const p = u.unsafe[f];
            if (!p.atBreak) {
                continue;
            }
            const h = u.compilePattern(p);
            let d;
            while(d = h.exec(o)){
                let x = d.index;
                o.codePointAt(x) === 10 && o.codePointAt(x - 1) === 13 && x--;
                o = `${o.slice(0, x)} ${o.slice(d.index + 1)}`;
            }
        }
        return c + o + c;
    }
    function i() {
        return "$";
    }
}
const Mc = Wr("dollar");
const Nc = Wr("backslash");
const jn = {
    tokenize: Rc,
    partial: true
};
function Wr(e) {
    return {
        tokenize: t,
        concrete: true,
        name: "mathFlow"
    };
    function t(n, r, i) {
        const a = this;
        const l = a.events[a.events.length - 1];
        const u = l && l[1].type === "linePrefix" ? l[2].sliceSerialize(l[1], true).length : 0;
        let o = 0;
        return s;
        function s(k) {
            n.enter("mathFlow");
            n.enter("mathFlowFence");
            n.enter("mathFlowFenceSequence");
            return c(k);
        }
        function c(k) {
            if (e === "dollar") {
                if (k === 36) {
                    n.consume(k);
                    o++;
                    return c;
                }
            } else {
                if (o === 0 && k === 92) {
                    n.consume(k);
                    o = 1;
                    return c;
                }
                if (o === 1 && k === 91) {
                    n.consume(k);
                    o = 2;
                    return c;
                }
            }
            if (o < 2) {
                return i(k);
            }
            n.exit("mathFlowFenceSequence");
            if (e === "backslash") {
                return n.check({
                    tokenize: q,
                    partial: true
                }, v, D)(k);
            }
            return R(n, f, "whitespace")(k);
        }
        function f(k) {
            if (k === null || z(k)) {
                return h(k);
            }
            n.enter("mathFlowFenceMeta");
            n.enter("chunkString", {
                contentType: "string"
            });
            return p(k);
        }
        function p(k) {
            if (k === null || z(k)) {
                n.exit("chunkString");
                n.exit("mathFlowFenceMeta");
                return h(k);
            }
            if (e === "dollar" && k === 36) {
                return i(k);
            }
            n.consume(k);
            return p;
        }
        function h(k) {
            n.exit("mathFlowFence");
            if (a.interrupt) {
                return r(k);
            }
            return n.attempt(jn, d, E)(k);
        }
        function d(k) {
            return n.attempt({
                tokenize: I,
                partial: true
            }, E, x)(k);
        }
        function x(k) {
            return (u ? R(n, C, "linePrefix", u + 1) : C)(k);
        }
        function C(k) {
            if (k === null) {
                return E(k);
            }
            if (z(k)) {
                return n.attempt(jn, d, E)(k);
            }
            n.enter("mathFlowValue");
            return b(k);
        }
        function b(k) {
            if (k === null || z(k)) {
                n.exit("mathFlowValue");
                return C(k);
            }
            n.consume(k);
            return b;
        }
        function I(k, _, F) {
            let A = 0;
            return R(k, P, "linePrefix", a.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
            function P(N) {
                k.enter("mathFlowFence");
                k.enter("mathFlowFenceSequence");
                return H(N);
            }
            function H(N) {
                if (e === "dollar") {
                    if (N === 36) {
                        A++;
                        k.consume(N);
                        return H;
                    }
                } else {
                    if (A === 0 && N === 92) {
                        A = 1;
                        k.consume(N);
                        return H;
                    }
                    if (A === 1 && N === 93) {
                        A = 2;
                        k.consume(N);
                        return H;
                    }
                }
                if (e === "dollar" && A < o || e === "backslash" && A !== o) {
                    return F(N);
                }
                k.exit("mathFlowFenceSequence");
                return R(k, O, "whitespace")(N);
            }
            function O(N) {
                if (N === null || z(N)) {
                    k.exit("mathFlowFence");
                    return _(N);
                }
                return F(N);
            }
        }
        function E(k) {
            n.exit("mathFlow");
            return r(k);
        }
        function D(k) {
            return R(n, f, "whitespace")(k);
        }
        function v(k) {
            return R(n, S, "whitespace")(k);
        }
        function S(k) {
            n.exit("mathFlowFence");
            return M(k);
        }
        function M(k) {
            if (k === null || z(k)) {
                return E(k);
            }
            return n.attempt({
                tokenize: y,
                partial: true
            }, E, $)(k);
        }
        function $(k) {
            n.enter("mathFlowValue");
            n.consume(k);
            n.exit("mathFlowValue");
            return M;
        }
        function q(k, _, F) {
            return A;
            function A(O) {
                if (O === null || z(O)) {
                    return F(O);
                }
                k.enter("mathFlowValue");
                return P(O);
            }
            function P(O) {
                if (O === null || z(O)) {
                    k.exit("mathFlowValue");
                    return F(O);
                }
                if (O === 92) {
                    k.consume(O);
                    return H;
                }
                k.consume(O);
                return P;
            }
            function H(O) {
                if (O === 93) {
                    k.consume(O);
                    k.exit("mathFlowValue");
                    return _(O);
                }
                return P(O);
            }
        }
        function y(k, _, F) {
            return A;
            function A(N) {
                return R(k, P, "whitespace")(N);
            }
            function P(N) {
                if (N !== 92) {
                    return F(N);
                }
                k.enter("mathFlowFence");
                k.enter("mathFlowFenceSequence");
                k.consume(N);
                return H;
            }
            function H(N) {
                if (N !== 93) {
                    return F(N);
                }
                k.consume(N);
                k.exit("mathFlowFenceSequence");
                return R(k, O, "whitespace");
            }
            function O(N) {
                if (N === null || z(N)) {
                    k.exit("mathFlowFence");
                    return _(N);
                }
                return F(N);
            }
        }
    }
}
function Rc(e, t, n) {
    const r = this;
    return i;
    function i(l) {
        if (l === null) {
            return t(l);
        }
        e.enter("lineEnding");
        e.consume(l);
        e.exit("lineEnding");
        return a;
    }
    function a(l) {
        if (r.parser.lazy[r.now().line]) {
            return n(l);
        }
        return t(l);
    }
}
function vc(e) {
    let singleDollarTextMath = (e || {}).singleDollarTextMath;
    if (singleDollarTextMath == null) {
        singleDollarTextMath = true;
    }
    return {
        dollar: Oc(singleDollarTextMath),
        backslash: [
            qn(40, 41),
            qn(91, 93)
        ]
    };
}
function Oc(singleDollarTextMath) {
    return {
        tokenize: t,
        resolve: Qr,
        previous: jc,
        name: "mathText"
    };
    function t(n, r, i) {
        let a = 0;
        let l;
        let u;
        return o;
        function o(h) {
            n.enter("mathText");
            n.enter("mathTextSequence");
            return s(h);
        }
        function s(h) {
            if (h === 36) {
                n.consume(h);
                a++;
                return s;
            }
            if (a < 2 && !singleDollarTextMath) {
                return i(h);
            }
            n.exit("mathTextSequence");
            return c(h);
        }
        function c(h) {
            if (h === null) {
                return i(h);
            }
            if (h === 36) {
                u = n.enter("mathTextSequence");
                l = 0;
                return p(h);
            }
            if (h === 32) {
                n.enter("space");
                n.consume(h);
                n.exit("space");
                return c;
            }
            if (z(h)) {
                n.enter("lineEnding");
                n.consume(h);
                n.exit("lineEnding");
                return c;
            }
            n.enter("mathTextData");
            return f(h);
        }
        function f(h) {
            if (h === null || h === 32 || h === 36 || z(h)) {
                n.exit("mathTextData");
                return c(h);
            }
            n.consume(h);
            return f;
        }
        function p(h) {
            if (h === 36) {
                n.consume(h);
                l++;
                return p;
            }
            if (l === a) {
                n.exit("mathTextSequence");
                n.exit("mathText");
                return r(h);
            }
            u.type = "mathTextData";
            return f(h);
        }
    }
}
function Bc(events) {
    let e_length = events.length;
    while(e_length--){
        const n = events[e_length][1];
        if ((n.type === "labelLink" || n.type === "labelImage") && !n._balanced) {
            return true;
        }
    }
    return false;
}
function qn(e, t) {
    return {
        tokenize: n,
        resolve: Qr,
        previous: qc,
        name: "mathText"
    };
    function n(r, i, a) {
        const l = this;
        let u = 0;
        let o;
        let s;
        return c;
        function c(x) {
            if (e === 91 && Bc(l.events)) {
                return a(x);
            }
            r.enter("mathText");
            r.enter("mathTextSequence");
            return f(x);
        }
        function f(x) {
            if (u === 0 && x === 92) {
                r.consume(x);
                u = 1;
                return f;
            }
            if (u === 1 && x === e) {
                r.consume(x);
                u = 2;
                return f;
            }
            if (u < 2) {
                return a(x);
            }
            r.exit("mathTextSequence");
            return p(x);
        }
        function p(x) {
            if (x === null) {
                return a(x);
            }
            if (x === 92) {
                s = r.enter("mathTextSequence");
                o = 0;
                return d(x);
            }
            if (x === 32) {
                r.enter("space");
                r.consume(x);
                r.exit("space");
                return p;
            }
            if (z(x)) {
                r.enter("lineEnding");
                r.consume(x);
                r.exit("lineEnding");
                return p;
            }
            r.enter("mathTextData");
            return h(x);
        }
        function h(x) {
            if (x === null || x === 32 || x === 92 || z(x)) {
                r.exit("mathTextData");
                return p(x);
            }
            r.consume(x);
            return h;
        }
        function d(x) {
            if (o === 2) {
                r.exit("mathTextSequence");
                r.exit("mathText");
                return i(x);
            }
            if (o === 0) {
                if (x === 92) {
                    r.consume(x);
                    o = 1;
                    return d;
                }
            } else if (o === 1 && x === t) {
                r.consume(x);
                o = 2;
                return d;
            }
            s.type = "mathTextData";
            return h(x);
        }
    }
}
function Qr(e) {
    let t = e.length - 4;
    let n = 3;
    let r;
    let i;
    if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
        for(r = n; ++r < t;){
            if (e[r][1].type === "mathTextData") {
                e[t][1].type = "mathTextPadding";
                e[n][1].type = "mathTextPadding";
                n += 2;
                t -= 2;
                break;
            }
        }
    }
    r = n - 1;
    t++;
    while(++r <= t){
        i === undefined ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "mathTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = undefined);
    }
    return e;
}
function jc(e) {
    return e !== 36 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function qc(e) {
    return e !== 92 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function $c(e) {
    const t = vc(e);
    return {
        flow: {
            36: Mc,
            92: Nc
        },
        text: {
            36: t.dollar,
            92: t.backslash
        }
    };
}
const Hc = {};
function Vc(e) {
    const t = this;
    const n = e || Hc;
    const r = t.data();
    const i = r.micromarkExtensions || (r.micromarkExtensions = []);
    const a = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []);
    const l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
    i.push($c(n));
    a.push(Dc());
    l.push(Lc(n));
}
const At = Symbol("sand-markdown-structure");
function Gr(e) {
    return ji_1(e) && typeof e.type === "string" && Array.isArray(e.children);
}
function Uc(e) {
    return Gr(e) && e.type === "root";
}
function Yr(e) {
    return Gr(e) && e.type === "element" && "tagName" in e && typeof e.tagName === "string" && "properties" in e && ji_1(e.properties);
}
function Wc(sandMarkdown) {
    return ji_1(sandMarkdown) && At in sandMarkdown && sandMarkdown[At] === true;
}
function Qc(e, sandMarkdown) {
    const n = e.data ?? {};
    Object.assign(n, {
        sandMarkdown
    });
    e.data = n;
}
function Gc(e) {
    i_2(e !== undefined, "react-markdown omitted a custom component's HAST node");
    const e_data = e.data;
    i_2(e_data !== undefined && "sandMarkdown" in e_data && Wc(e_data.sandMarkdown), "react-markdown supplied an unannotated HAST node");
    return e_data.sandMarkdown;
}
function $n(e, t) {
    const className = e.properties.className;
    if (typeof className === "string") {
        return className.split(/\s+/).includes(t);
    }
    if (Array.isArray(className)) {
        return className.some((r)=>r === t);
    }
    return false;
}
function Xr(e) {
    if (e.tagName !== "input" || e.properties.type !== "checkbox") {
        return null;
    }
    return e.properties.checked === true;
}
function Yc(e, t) {
    const n = Xr(e);
    if (n !== null) {
        return {
            kind: "checkbox",
            checked: n
        };
    }
    if ($n(e, "contains-task-list")) {
        return {
            kind: "list"
        };
    }
    if ($n(e, "task-list-item")) {
        i_2(t !== null, "GFM task-list item did not contain a checkbox");
        return {
            kind: "item",
            checked: t
        };
    }
    return {
        kind: "none"
    };
}
function Xc(e, source) {
    if (e.tagName !== "a" || source === null) {
        return null;
    }
    const n = e.position?.start.offset;
    if (n === undefined) {
        return null;
    }
    if (source.charAt(n) === "[") {
        return "explicit";
    }
    return "autolink";
}
function Jc(e) {
    const t = e.children.filter((n)=>Yr(n) && n.tagName === "th");
    return t.length > 0 && t.every((n)=>n.children.every((r)=>r.type === "text" && r.value.trim().length === 0));
}
function Kc(e, listDepth) {
    if (e.tagName !== "ul" && e.tagName !== "ol") {
        return listDepth;
    }
    return {
        total: listDepth.total + 1,
        unordered: listDepth.unordered + (e.tagName === "ul" ? 1 : 0)
    };
}
function Jr(e, t, n) {
    const r = e.children.filter(Yr);
    const i = r.map((u)=>n.classifyProseCard?.(u) ?? null);
    let a = null;
    let l = null;
    for (const [u, o] of r.entries()){
        const elementSibling = {
            index: u,
            count: r.length,
            isFirst: u === 0,
            isLast: u === r.length - 1
        };
        const c = Jr(o, {
            parentTag: o.tagName,
            listDepth: Kc(o, t.listDepth),
            isFinalBodyRow: t.parentTag === "tbody" && o.tagName === "tr" && elementSibling.isLast,
            isBlankTableHeader: t.parentTag === "thead" && o.tagName === "tr" && Jc(o)
        }, n);
        const p = Xr(o) ?? c;
        const card = i[u] ?? null;
        const d = {
            [At]: true,
            elementSibling,
            parentTag: t.parentTag,
            followsParagraph: a === "p",
            listDepth: t.listDepth,
            task: Yc(o, c),
            isFinalBodyRow: t.parentTag === "tr" && o.tagName === "td" && t.isFinalBodyRow,
            isBlankTableHeaderCell: t.parentTag === "tr" && o.tagName === "th" && t.isBlankTableHeader,
            proseCard: card == null ? {
                kind: "none"
            } : {
                kind: "card",
                card,
                run: {
                    joinsPrevious: (i[u - 1] ?? null) != null,
                    joinsNext: (i[u + 1] ?? null) != null
                }
            },
            linkSyntax: Xc(o, n.source)
        };
        Qc(o, d);
        a = o.tagName;
        if (l === null && p !== null) {
            l = p;
        }
    }
    return l;
}
function Zc(e = {}) {
    return (n, r)=>{
        i_2(Uc(n), "Expected react-markdown to provide a HAST root");
        Jr(n, {
            parentTag: null,
            listDepth: {
                total: 0,
                unordered: 0
            },
            isFinalBodyRow: false,
            isBlankTableHeader: false
        }, {
            classifyProseCard: e.classifyProseCard,
            source: typeof r?.value === "string" ? r.value : null
        });
    };
}
const hf = [
    Zc
];
const Hn = {
    displayScroll: {
        ks0D6T: "sand-10y958y",
        $$css: true
    },
    displayScrollContent: {
        k7Eaqz: "sand-gqtt45",
        $$css: true
    }
};
const Ft = "sand-math";
const Kr = "sand-math-display";
function Zr(e) {
    if (e.type === "code" && e.lang === "math") {
        e.type = "math";
    }
    if (e.type === "math" || e.type === "inlineMath") {
        const className = e.type === "math" ? [
            Ft,
            Kr
        ] : [
            Ft
        ];
        e.data = {
            hName: "span",
            hProperties: {
                className
            },
            hChildren: [
                {
                    type: "text",
                    value: e.value ?? ""
                }
            ]
        };
        return;
    }
    for (const t of e.children ?? []){
        Zr(t);
    }
}
function ef() {
    return (e)=>{
        Zr(e);
    };
}
const pf = [
    [
        Vc,
        {
            singleDollarTextMath: false
        }
    ],
    ef
];
const zt = c_3(null);
let Vn = null;
function tf() {
    Vn ??= _(()=>import("./chunk-markdown-math-katex-D30cPtUu.js"), __vite__mapDeps([
        0,
        1,
        2
    ]), import.meta.url).then((e)=>{
        zt.set(e);
    }, (e)=>{
        d0(e, {
            level: "warning",
            tags: {
                sand_area: "markdown-math"
            }
        });
        Vn = null;
    });
    return ()=>{};
}
function Un(e, t) {
    return e != null && e.split(/\s+/).includes(t);
}
function EiComponent(e) {
    EiComponent.d = 643;
    const t = c_1.c(16);
    let n;
    let r;
    let i;
    if (t[0] !== e) {
        ({ tex: i, display: n, ...r } = e);
        t[0] = e;
        t[1] = n;
        t[2] = r;
        t[3] = i;
    } else {
        n = t[1];
        r = t[2];
        i = t[3];
    }
    const a = r_1.useSyncExternalStore(zt.subscribe, zt.get);
    i_1(tf);
    let l;
    if (t[4] !== n || t[5] !== a || t[6] !== i) {
        l = a?.renderMathHtml(i, n);
        t[4] = n;
        t[5] = a;
        t[6] = i;
        t[7] = l;
    } else {
        l = t[7];
    }
    const __html = l;
    if (__html == null) {
        let c;
        if (t[8] !== r || t[9] !== i) {
            c = <span {...r} dir="ltr">{i}</span>;
            t[8] = r;
            t[9] = i;
            t[10] = c;
        } else {
            c = t[10];
        }
        return c;
    }
    let dangerouslySetInnerHTML;
    if (t[11] !== __html) {
        dangerouslySetInnerHTML = {
            __html
        };
        t[11] = __html;
        t[12] = dangerouslySetInnerHTML;
    } else {
        dangerouslySetInnerHTML = t[12];
    }
    let s;
    if (t[13] !== r || t[14] !== dangerouslySetInnerHTML) {
        s = <span {...r} dangerouslySetInnerHTML={dangerouslySetInnerHTML} dir="ltr"/>;
        t[13] = r;
        t[14] = dangerouslySetInnerHTML;
        t[15] = s;
    } else {
        s = t[15];
    }
    return s;
}
function NfComponent(e) {
    NfComponent.d = 644;
    const t = c_1.c(29);
    let n;
    let r;
    let i;
    let a;
    if (t[0] !== e) {
        ({ node: i, children: n, className: r, ...a } = e);
        t[0] = e;
        t[1] = n;
        t[2] = r;
        t[3] = i;
        t[4] = a;
    } else {
        n = t[1];
        r = t[2];
        i = t[3];
        a = t[4];
    }
    Gc(i);
    if (!Un(r, Ft)) {
        let b;
        if (t[5] !== n || t[6] !== r || t[7] !== a) {
            b = <span {...a} className={r}>{n}</span>;
            t[5] = n;
            t[6] = r;
            t[7] = a;
            t[8] = b;
        } else {
            b = t[8];
        }
        return b;
    }
    let l;
    if (t[9] !== r) {
        l = Un(r, Kr);
        t[9] = r;
        t[10] = l;
    } else {
        l = t[10];
    }
    const display = l;
    let o;
    if (t[11] !== n) {
        o = c9(n);
        t[11] = n;
        t[12] = o;
    } else {
        o = t[12];
    }
    const tex = o;
    let c;
    let f;
    let p;
    let h;
    if (t[13] !== r || t[14] !== display || t[15] !== a) {
        f = ({
            0: {
                className: "sand-1h4wwuj"
            },
            1: {
                className: "sand-1lliihq sand-1iyjqo2 sand-euugli"
            }
        })[!!display << 0];
        c = EiComponent;
        p = a;
        h = r_2(r, f.className);
        t[13] = r;
        t[14] = display;
        t[15] = a;
        t[16] = c;
        t[17] = f;
        t[18] = p;
        t[19] = h;
    } else {
        c = t[16];
        f = t[17];
        p = t[18];
        h = t[19];
    }
    let d;
    if (t[20] !== c || t[21] !== display || t[22] !== f.style || t[23] !== p || t[24] !== h || t[25] !== tex) {
        d = j.jsx(c, {
            ...p,
            className: h,
            display,
            style: f.style,
            tex
        });
        t[20] = c;
        t[21] = display;
        t[22] = f.style;
        t[23] = p;
        t[24] = h;
        t[25] = tex;
        t[26] = d;
    } else {
        d = t[26];
    }
    const x = d;
    if (!display) {
        return x;
    }
    let C;
    if (t[27] !== x) {
        C = <Xi1 contentStyle={Hn.displayScrollContent} direction="horizontal" rootStyle={Hn.displayScroll} scrollbarVisibility="hover">{x}</Xi1>;
        t[27] = x;
        t[28] = C;
    } else {
        C = t[28];
    }
    return C;
}
export { cf as M, pf as a, hf as b, NfComponent as c, Zc as d, Gc as g, ff as r };
