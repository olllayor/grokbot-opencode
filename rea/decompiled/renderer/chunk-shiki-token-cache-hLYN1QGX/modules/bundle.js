import { _ as __1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { b7 } from "./index.eager-platform-Dcfeegfw.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "22fde718-2b7d-4ef5-a15a-1276c9e36cd4";
            e._sentryDebugIdIdentifier = "sentry-dbid-22fde718-2b7d-4ef5-a15a-1276c9e36cd4";
        }
    } catch (e) {}
})();
const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = [
    "./chunk-astro-_fkLvHwY.js",
    "./chunk-json-Cp-IABpG.js",
    "./chunk-javascript-wDzz0qaB.js",
    "./chunk-typescript-BPQ3VLAy.js",
    "./chunk-css-CLj8gQPS.js",
    "./chunk-postcss-CXtECtnM.js",
    "./chunk-tsx-COt5Ahok.js",
    "./chunk-cpp-Ckx2-j3M.js",
    "./chunk-regexp-CDVJQ6XC.js",
    "./chunk-glsl-BnHhRW2T.js",
    "./chunk-c-BIGW1oBm.js",
    "./chunk-sql-BLtJtn59.js",
    "./chunk-crystal-BK9W5Fvr.js",
    "./chunk-html-C1at-c71.js",
    "./chunk-shellscript-Yzrsuije.js",
    "./chunk-elixir-C7lme6YR.js",
    "./chunk-elm-BhgDo1vg.js",
    "./chunk-erb-Co0kMGJK.js",
    "./chunk-ruby-ClSEMAu1.js",
    "./chunk-haml-DNnn2NCQ.js",
    "./chunk-xml-DlN-rr7z.js",
    "./chunk-java-CylS5w8V.js",
    "./chunk-graphql-L81lyQ56.js",
    "./chunk-jsx-g9-lgVsj.js",
    "./chunk-lua-DtSm4P04.js",
    "./chunk-yaml-Buea-lGh.js",
    "./chunk-erlang-C6V-aJ-t.js",
    "./chunk-markdown-Cvjx9yec.js",
    "./chunk-fsharp-BsLahXQ1.js",
    "./chunk-julia-Dnjnx9Jx.js",
    "./chunk-python-B6aJPvgy.js",
    "./chunk-r-Dspwwk_N.js",
    "./chunk-latex-mOGPH4YD.js",
    "./chunk-nginx-DokJLg7w.js",
    "./chunk-nim-DmqOpbIR.js",
    "./chunk-perl-C2IzWTMT.js",
    "./chunk-php-BMIjrkSP.js",
    "./chunk-rst-U-YwVP9Q.js",
    "./chunk-html-derivative-BCBuM9Hh.js",
    "./chunk-cmake-D1j8_8rp.js",
    "./chunk-scss-CaaVZkg6.js",
    "./chunk-svelte-DWTRjxfB.js",
    "./chunk-vue-CN6y6QjY.js"
]))=>i.map((i)=>d[i]);
export function g(e) {
    if (!e) {
        return {};
    }
    const r = {};
    if (e & 1) {
        r.fontStyle = "italic";
    }
    if (e & 2) {
        r.fontWeight = "bold";
    }
    const o = [];
    if (e & 4) {
        o.push("underline");
    }
    if (e & 8) {
        o.push("line-through");
    }
    if (o.length > 0) {
        r.textDecoration = o.join(" ");
    }
    return r;
}
export function m(e) {
    return e.split(/\r\n|\r|\n/).map((r)=>[
            {
                content: r,
                col: 0
            }
        ]);
}
export const C = {
    name: "css-variables",
    type: "dark",
    fg: "var(--shiki-foreground)",
    bg: "var(--shiki-background)",
    settings: [
        {
            scope: [
                "meta.embedded",
                "meta.template.expression"
            ],
            settings: {
                foreground: "var(--shiki-foreground)"
            }
        },
        {
            scope: [
                "comment",
                "punctuation.definition.comment"
            ],
            settings: {
                foreground: "var(--shiki-token-comment)",
                fontStyle: "italic"
            }
        },
        {
            scope: [
                "string",
                "string.quoted",
                "string.template",
                "string.other.link"
            ],
            settings: {
                foreground: "var(--shiki-token-string)"
            }
        },
        {
            scope: [
                "string.regexp"
            ],
            settings: {
                foreground: "var(--shiki-token-string-expression)"
            }
        },
        {
            scope: [
                "constant.numeric"
            ],
            settings: {
                foreground: "var(--shiki-token-constant)"
            }
        },
        {
            scope: [
                "constant.language"
            ],
            settings: {
                foreground: "var(--shiki-token-keyword)"
            }
        },
        {
            scope: [
                "constant.character",
                "constant.character.escape"
            ],
            settings: {
                foreground: "var(--shiki-token-string-expression)"
            }
        },
        {
            scope: [
                "constant.other"
            ],
            settings: {
                foreground: "var(--shiki-token-constant)"
            }
        },
        {
            scope: [
                "variable"
            ],
            settings: {
                foreground: "var(--shiki-token-variable)"
            }
        },
        {
            scope: [
                "variable.language"
            ],
            settings: {
                foreground: "var(--shiki-token-language-variable)"
            }
        },
        {
            scope: [
                "variable.parameter"
            ],
            settings: {
                foreground: "var(--shiki-token-parameter)"
            }
        },
        {
            scope: [
                "variable.other.constant"
            ],
            settings: {
                foreground: "var(--shiki-token-constant-variable)"
            }
        },
        {
            scope: [
                "variable.other.property",
                "support.variable.property"
            ],
            settings: {
                foreground: "var(--shiki-token-property)"
            }
        },
        {
            scope: [
                "keyword",
                "keyword.control",
                "keyword.operator.new",
                "keyword.operator.expression",
                "keyword.operator.logical",
                "keyword.operator.delete",
                "storage",
                "storage.type",
                "storage.modifier"
            ],
            settings: {
                foreground: "var(--shiki-token-keyword)"
            }
        },
        {
            scope: [
                "entity.name.function",
                "support.function"
            ],
            settings: {
                foreground: "var(--shiki-token-function)"
            }
        },
        {
            scope: [
                "entity.name.type",
                "support.type",
                "entity.name.type.class"
            ],
            settings: {
                foreground: "var(--shiki-token-type)"
            }
        },
        {
            scope: [
                "entity.name.class",
                "support.class"
            ],
            settings: {
                foreground: "var(--shiki-token-class)"
            }
        },
        {
            scope: [
                "entity.name.tag",
                "support.class.component",
                "punctuation.definition.tag"
            ],
            settings: {
                foreground: "var(--shiki-token-tag)"
            }
        },
        {
            scope: [
                "entity.other.attribute-name"
            ],
            settings: {
                foreground: "var(--shiki-token-attribute)"
            }
        },
        {
            scope: [
                "entity.name.section"
            ],
            settings: {
                foreground: "var(--shiki-token-keyword)"
            }
        },
        {
            scope: [
                "entity.name.namespace",
                "entity.name.module",
                "entity.name.scope-resolution"
            ],
            settings: {
                foreground: "var(--shiki-token-type)"
            }
        },
        {
            scope: [
                "entity.other.inherited-class"
            ],
            settings: {
                foreground: "var(--shiki-token-class)"
            }
        },
        {
            scope: [
                "support.type.property-name",
                "meta.object-literal.key"
            ],
            settings: {
                foreground: "var(--shiki-token-property)"
            }
        },
        {
            scope: [
                "support.constant"
            ],
            settings: {
                foreground: "var(--shiki-token-constant)"
            }
        },
        {
            scope: [
                "support.variable"
            ],
            settings: {
                foreground: "var(--shiki-token-variable)"
            }
        },
        {
            scope: [
                "punctuation",
                "meta.brace",
                "meta.delimiter",
                "keyword.operator",
                "keyword.operator.assignment"
            ],
            settings: {
                foreground: "var(--shiki-token-punctuation)"
            }
        },
        {
            scope: [
                "punctuation.definition.template-expression.begin",
                "punctuation.definition.template-expression.end",
                "punctuation.section.embedded"
            ],
            settings: {
                foreground: "var(--shiki-token-keyword)"
            }
        },
        {
            scope: [
                "markup.heading"
            ],
            settings: {
                foreground: "var(--shiki-token-keyword)",
                fontStyle: "bold"
            }
        },
        {
            scope: [
                "markup.bold"
            ],
            settings: {
                fontStyle: "bold"
            }
        },
        {
            scope: [
                "markup.italic"
            ],
            settings: {
                fontStyle: "italic"
            }
        },
        {
            scope: [
                "markup.strikethrough"
            ],
            settings: {
                fontStyle: "strikethrough"
            }
        },
        {
            scope: [
                "markup.inline.raw"
            ],
            settings: {
                foreground: "var(--shiki-token-string)"
            }
        },
        {
            scope: [
                "markup.underline.link"
            ],
            settings: {
                foreground: "var(--shiki-token-link)"
            }
        },
        {
            scope: [
                "markup.inserted"
            ],
            settings: {
                foreground: "var(--shiki-token-constant)"
            }
        },
        {
            scope: [
                "markup.deleted"
            ],
            settings: {
                foreground: "var(--shiki-token-string)"
            }
        },
        {
            scope: [
                "markup.changed"
            ],
            settings: {
                foreground: "var(--shiki-token-keyword)"
            }
        },
        {
            scope: [
                "markup.quote"
            ],
            settings: {
                foreground: "var(--shiki-token-comment)"
            }
        }
    ]
};
const y = {
    ts: "typescript",
    cts: "typescript",
    mts: "typescript",
    js: "javascript",
    cjs: "javascript",
    mjs: "javascript",
    py: "python",
    rs: "rust",
    md: "markdown",
    bash: "shellscript",
    sh: "shellscript",
    shell: "shellscript",
    zsh: "shellscript",
    yml: "yaml",
    "c++": "cpp",
    "c#": "csharp",
    cs: "csharp",
    "f#": "fsharp",
    fs: "fsharp",
    kt: "kotlin",
    kts: "kotlin",
    rb: "ruby",
    docker: "dockerfile",
    ex: "elixir",
    exs: "elixir",
    erl: "erlang",
    hs: "haskell",
    ml: "ocaml",
    clj: "clojure",
    "common-lisp": "lisp",
    tf: "terraform",
    tfvars: "terraform",
    protobuf: "proto",
    regex: "regexp",
    gql: "graphql",
    properties: "ini",
    jl: "julia",
    objc: "objective-c",
    make: "makefile",
    tex: "latex",
    ps: "powershell",
    ps1: "powershell",
    pwsh: "powershell"
};
function E(e) {
    const r = e.toLowerCase().trim();
    return y[r] ?? r;
}
function b(e, r) {
    const o = E(r);
    return e.getLoadedLanguages().includes(o);
}
function T(e, r) {
    const o = E(r);
    if (b(e, o)) {
        return o;
    }
    return "text";
}
const d = 20000;
const A = 200000;
const w = {
    javascript: 2500,
    jsx: 2500,
    tsx: 2500,
    java: 7500,
    cpp: 7500,
    csharp: 2500
};
function I(e) {
    const r = w[e];
    if (r === undefined) {
        return d;
    }
    return Math.min(r, d);
}
function x(e) {
    let r = 0;
    let o = 0;
    for(let i = 0; i < e.length; i++){
        const a = e.charCodeAt(i);
        if (a === 10 || a === 13) {
            if (i - o > r) {
                r = i - o;
            }
            o = i + 1;
        }
    }
    if (e.length - o > r) {
        r = e.length - o;
    }
    return r;
}
function R(e) {
    let col = 0;
    return e.map((o)=>{
        const i = {
            content: o.content,
            color: o.color,
            fontStyle: o.fontStyle,
            col
        };
        col += o.content.length;
        return i;
    });
}
function h(e) {
    return e.split(/\r?\n/).map((r)=>[
            {
                content: r,
                col: 0
            }
        ]);
}
export function t(e, r, o) {
    if (r.length > A || x(r) > d) {
        return m(r);
    }
    const i = T(e, o);
    try {
        return e.codeToTokens(r, {
            lang: i,
            theme: "css-variables",
            tokenizeMaxLineLength: I(i)
        }).tokens.map(R);
    } catch  {
        return m(r);
    }
}
function q(e, r, o, grammarState) {
    if (r.length > A) {
        return {
            tokens: h(r),
            grammarState: undefined
        };
    }
    const a = T(e, o);
    const tokenizeMaxLineLength = I(a);
    try {
        const m = e.codeToTokens(r, {
            lang: a,
            theme: "css-variables",
            grammarState,
            tokenizeMaxLineLength
        });
        return {
            tokens: m.tokens.map(R),
            grammarState: m.grammarState
        };
    } catch  {
        return {
            tokens: h(r),
            grammarState: undefined
        };
    }
}
const S = {
    asm: ()=>__1(()=>import("./chunk-asm-D_Q5rh1f.js"), [], import.meta.url),
    astro: ()=>__1(()=>import("./chunk-astro-_fkLvHwY.js"), __vite__mapDeps([
            0,
            1,
            2,
            3,
            4,
            5,
            6
        ]), import.meta.url),
    c: ()=>__1(()=>import("./chunk-c-BIGW1oBm.js"), [], import.meta.url),
    clojure: ()=>__1(()=>import("./chunk-clojure-P80f7IUj.js"), [], import.meta.url),
    cmake: ()=>__1(()=>import("./chunk-cmake-D1j8_8rp.js"), [], import.meta.url),
    cpp: ()=>__1(()=>import("./chunk-cpp-Ckx2-j3M.js"), __vite__mapDeps([
            7,
            8,
            9,
            10,
            11
        ]), import.meta.url),
    crystal: ()=>__1(()=>import("./chunk-crystal-BK9W5Fvr.js"), __vite__mapDeps([
            12,
            13,
            2,
            4,
            11,
            10,
            14
        ]), import.meta.url),
    csharp: ()=>__1(()=>import("./chunk-csharp-COcwbKMJ.js"), [], import.meta.url),
    css: ()=>__1(()=>import("./chunk-css-CLj8gQPS.js"), [], import.meta.url),
    dart: ()=>__1(()=>import("./chunk-dart-bE4Kk8sk.js"), [], import.meta.url),
    diff: ()=>__1(()=>import("./chunk-diff-D97Zzqfu.js"), [], import.meta.url),
    dockerfile: ()=>__1(()=>import("./chunk-dockerfile-BcOcwvcX.js"), [], import.meta.url),
    dotenv: ()=>__1(()=>import("./chunk-dotenv-Da5cRb03.js"), [], import.meta.url),
    elixir: ()=>__1(()=>import("./chunk-elixir-C7lme6YR.js"), __vite__mapDeps([
            15,
            13,
            2,
            4
        ]), import.meta.url),
    elm: ()=>__1(()=>import("./chunk-elm-BhgDo1vg.js"), __vite__mapDeps([
            16,
            9,
            10
        ]), import.meta.url),
    erb: ()=>__1(()=>import("./chunk-erb-Co0kMGJK.js"), __vite__mapDeps([
            17,
            13,
            2,
            4,
            18,
            19,
            20,
            21,
            11,
            22,
            3,
            23,
            6,
            7,
            8,
            9,
            10,
            14,
            24,
            25
        ]), import.meta.url),
    erlang: ()=>__1(()=>import("./chunk-erlang-C6V-aJ-t.js"), __vite__mapDeps([
            26,
            27
        ]), import.meta.url),
    fish: ()=>__1(()=>import("./chunk-fish-BvzEVeQv.js"), [], import.meta.url),
    fsharp: ()=>__1(()=>import("./chunk-fsharp-BsLahXQ1.js"), __vite__mapDeps([
            28,
            27
        ]), import.meta.url),
    glsl: ()=>__1(()=>import("./chunk-glsl-BnHhRW2T.js"), __vite__mapDeps([
            9,
            10
        ]), import.meta.url),
    go: ()=>__1(()=>import("./chunk-go-C27-OAKa.js"), [], import.meta.url),
    graphql: ()=>__1(()=>import("./chunk-graphql-L81lyQ56.js"), __vite__mapDeps([
            22,
            2,
            3,
            23,
            6
        ]), import.meta.url),
    groovy: ()=>__1(()=>import("./chunk-groovy-gcz8RCvz.js"), [], import.meta.url),
    haml: ()=>__1(()=>import("./chunk-haml-DNnn2NCQ.js"), __vite__mapDeps([
            19,
            2,
            4
        ]), import.meta.url),
    haskell: ()=>__1(()=>import("./chunk-haskell-BopgyDCf.js"), [], import.meta.url),
    hcl: ()=>__1(()=>import("./chunk-hcl-BWvSN4gD.js"), [], import.meta.url),
    hlsl: ()=>__1(()=>import("./chunk-hlsl-D3lLCCz7.js"), [], import.meta.url),
    html: ()=>__1(()=>import("./chunk-html-C1at-c71.js"), __vite__mapDeps([
            13,
            2,
            4
        ]), import.meta.url),
    ini: ()=>__1(()=>import("./chunk-ini-BEwlwnbL.js"), [], import.meta.url),
    java: ()=>__1(()=>import("./chunk-java-CylS5w8V.js"), [], import.meta.url),
    javascript: ()=>__1(()=>import("./chunk-javascript-wDzz0qaB.js"), [], import.meta.url),
    json: ()=>__1(()=>import("./chunk-json-Cp-IABpG.js"), [], import.meta.url),
    json5: ()=>__1(()=>import("./chunk-json5-C9tS-k6U.js"), [], import.meta.url),
    jsonc: ()=>__1(()=>import("./chunk-jsonc-Des-eS-w.js"), [], import.meta.url),
    jsx: ()=>__1(()=>import("./chunk-jsx-g9-lgVsj.js"), [], import.meta.url),
    julia: ()=>__1(()=>import("./chunk-julia-Dnjnx9Jx.js"), __vite__mapDeps([
            29,
            7,
            8,
            9,
            10,
            11,
            30,
            2,
            31
        ]), import.meta.url),
    kotlin: ()=>__1(()=>import("./chunk-kotlin-BdnUsdx6.js"), [], import.meta.url),
    latex: ()=>__1(()=>import("./chunk-latex-mOGPH4YD.js"), __vite__mapDeps([
            32,
            31
        ]), import.meta.url),
    less: ()=>__1(()=>import("./chunk-less--Du4Ovld.js"), [], import.meta.url),
    lisp: ()=>__1(()=>import("./chunk-lisp-Cg-RD9OK.js"), [], import.meta.url),
    lua: ()=>__1(()=>import("./chunk-lua-DtSm4P04.js"), __vite__mapDeps([
            24,
            10
        ]), import.meta.url),
    makefile: ()=>__1(()=>import("./chunk-makefile-CHLpvVh8.js"), [], import.meta.url),
    markdown: ()=>__1(()=>import("./chunk-markdown-Cvjx9yec.js"), [], import.meta.url),
    mdx: ()=>__1(()=>import("./chunk-mdx-Cmh6b_Ma.js"), [], import.meta.url),
    nginx: ()=>__1(()=>import("./chunk-nginx-DokJLg7w.js"), __vite__mapDeps([
            33,
            24,
            10
        ]), import.meta.url),
    nim: ()=>__1(()=>import("./chunk-nim-DmqOpbIR.js"), __vite__mapDeps([
            34,
            10,
            13,
            2,
            4,
            20,
            21,
            9,
            27
        ]), import.meta.url),
    "objective-c": ()=>__1(()=>import("./chunk-objective-c-DXmwc3jG.js"), [], import.meta.url),
    "objective-cpp": ()=>__1(()=>import("./chunk-objective-cpp-CLxacb5B.js"), [], import.meta.url),
    ocaml: ()=>__1(()=>import("./chunk-ocaml-C0hk2d4L.js"), [], import.meta.url),
    perl: ()=>__1(()=>import("./chunk-perl-C2IzWTMT.js"), __vite__mapDeps([
            35,
            13,
            2,
            4,
            20,
            21,
            11
        ]), import.meta.url),
    php: ()=>__1(()=>import("./chunk-php-BMIjrkSP.js"), __vite__mapDeps([
            36,
            13,
            2,
            4,
            20,
            21,
            11,
            1
        ]), import.meta.url),
    postcss: ()=>__1(()=>import("./chunk-postcss-CXtECtnM.js"), [], import.meta.url),
    powershell: ()=>__1(()=>import("./chunk-powershell-DM5O7RTd.js"), [], import.meta.url),
    prisma: ()=>__1(()=>import("./chunk-prisma-Dd19v3D-.js"), [], import.meta.url),
    proto: ()=>__1(()=>import("./chunk-proto-C7zT0LnQ.js"), [], import.meta.url),
    python: ()=>__1(()=>import("./chunk-python-B6aJPvgy.js"), [], import.meta.url),
    r: ()=>__1(()=>import("./chunk-r-Dspwwk_N.js"), [], import.meta.url),
    regexp: ()=>__1(()=>import("./chunk-regexp-CDVJQ6XC.js"), [], import.meta.url),
    rst: ()=>__1(()=>import("./chunk-rst-U-YwVP9Q.js"), __vite__mapDeps([
            37,
            38,
            13,
            2,
            4,
            7,
            8,
            9,
            10,
            11,
            30,
            14,
            25,
            39,
            18,
            19,
            20,
            21,
            22,
            3,
            23,
            6,
            24
        ]), import.meta.url),
    ruby: ()=>__1(()=>import("./chunk-ruby-ClSEMAu1.js"), __vite__mapDeps([
            18,
            13,
            2,
            4,
            19,
            20,
            21,
            11,
            22,
            3,
            23,
            6,
            7,
            8,
            9,
            10,
            14,
            24,
            25
        ]), import.meta.url),
    rust: ()=>__1(()=>import("./chunk-rust-B1yitclQ.js"), [], import.meta.url),
    sass: ()=>__1(()=>import("./chunk-sass-Cj5Yp3dK.js"), [], import.meta.url),
    scala: ()=>__1(()=>import("./chunk-scala-C151Ov-r.js"), [], import.meta.url),
    scss: ()=>__1(()=>import("./chunk-scss-CaaVZkg6.js"), __vite__mapDeps([
            40,
            4
        ]), import.meta.url),
    shellscript: ()=>__1(()=>import("./chunk-shellscript-Yzrsuije.js"), [], import.meta.url),
    sql: ()=>__1(()=>import("./chunk-sql-BLtJtn59.js"), [], import.meta.url),
    svelte: ()=>__1(()=>import("./chunk-svelte-DWTRjxfB.js"), __vite__mapDeps([
            41,
            2,
            3,
            4,
            5
        ]), import.meta.url),
    swift: ()=>__1(()=>import("./chunk-swift-C1_QVMPt.js"), [], import.meta.url),
    terraform: ()=>__1(()=>import("./chunk-terraform-BETggiCN.js"), [], import.meta.url),
    toml: ()=>__1(()=>import("./chunk-toml-vGWfd6FD.js"), [], import.meta.url),
    tsx: ()=>__1(()=>import("./chunk-tsx-COt5Ahok.js"), [], import.meta.url),
    typescript: ()=>__1(()=>import("./chunk-typescript-BPQ3VLAy.js"), [], import.meta.url),
    vue: ()=>__1(()=>import("./chunk-vue-CN6y6QjY.js"), __vite__mapDeps([
            42,
            4,
            2,
            3,
            1,
            13,
            38
        ]), import.meta.url),
    xml: ()=>__1(()=>import("./chunk-xml-DlN-rr7z.js"), __vite__mapDeps([
            20,
            21
        ]), import.meta.url),
    yaml: ()=>__1(()=>import("./chunk-yaml-Buea-lGh.js"), [], import.meta.url),
    zig: ()=>__1(()=>import("./chunk-zig-VOosw3JB.js"), [], import.meta.url)
};
const j = 3;
const G = 1000;
function M(e) {
    const r = new Map;
    const o = new Map;
    const i = new Set;
    async function a(n) {
        for(let s = 1;; s++){
            try {
                return await n();
            } catch (error) {
                if (s >= j) {
                    throw error;
                }
                await b7(G);
            }
        }
    }
    function grammarIdFor(n) {
        const s = E(n);
        if (Object.hasOwn(e, s)) {
            return s;
        }
    }
    function loadGrammar(n) {
        const s = r.get(n);
        if (s !== undefined) {
            return Promise.resolve(s);
        }
        const u = o.get(n);
        if (u !== undefined) {
            return u;
        }
        const v = e[n];
        if (v === undefined) {
            return Promise.reject(new Error(`No shiki grammar for "${n}"`));
        }
        const g = a(v).then((k)=>{
            r.set(n, k.default);
            for (const P of i){
                P();
            }
            return k.default;
        }).finally(()=>{
            o.delete(n);
        });
        o.set(n, g);
        return g;
    }
    return {
        grammarIdFor,
        getLoadedGrammar: (n)=>r.get(n),
        loadedGrammarIds: ()=>r.keys(),
        subscribeToGrammarLoads (n) {
            i.add(n);
            return ()=>{
                i.delete(n);
            };
        },
        loadGrammar,
        ensureGrammar (n) {
            const s = grammarIdFor(n);
            if (s === undefined) {
                return Promise.resolve(true);
            }
            return loadGrammar(s).then(()=>true, (u)=>{
                console.warn(`Shiki grammar "${s}" failed to load:`, u);
                return false;
            });
        }
    };
}
const c = M(S);
export function a(e) {
    return c.grammarIdFor(e);
}
function $(e) {
    return c.getLoadedGrammar(e);
}
function X() {
    return c.loadedGrammarIds();
}
export function s(e) {
    return c.subscribeToGrammarLoads(e);
}
export function e(e) {
    return c.ensureGrammar(e);
}
const N = 256;
const L = 512 * 1024;
const _ = new Map;
let l = 0;
function O(e, r) {
    return `${C.name}\0${a(r) ?? r}\0${e}`;
}
export function r(e, r) {
    const o = O(e, r);
    const i = _.get(o);
    if (i !== undefined) {
        _.delete(o);
        _.set(o, i);
        return i.tokens;
    }
}
export function f(e, r, tokens) {
    const e_length = e.length;
    if (e_length > L) {
        return;
    }
    const a = O(e, r);
    const p = _.get(a);
    if (p !== undefined) {
        _.delete(a);
        l -= p.chars;
    }
    _.set(a, {
        tokens,
        chars: e_length
    });
    for(l += e_length; _.size > N || l > L;){
        const m = _.entries().next().value;
        if (m === undefined) {
            break;
        }
        _.delete(m[0]);
        l -= m[1].chars;
    }
}
function U() {
    _.clear();
    l = 0;
}
export { A as M, q as b, U as c, $ as d, X as l };
