declare var console: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "22fde718-2b7d-4ef5-a15a-1276c9e36cd4", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-22fde718-2b7d-4ef5-a15a-1276c9e36cd4");
  } catch (e: any) {}
} as any)();
const __vite__mapDeps: any = (i: any, m: any = __vite__mapDeps, d: any = (m as any).f || ((m as any).f = ["./chunk-astro-_fkLvHwY.js", "./chunk-json-Cp-IABpG.js", "./chunk-javascript-wDzz0qaB.js", "./chunk-typescript-BPQ3VLAy.js", "./chunk-css-CLj8gQPS.js", "./chunk-postcss-CXtECtnM.js", "./chunk-tsx-COt5Ahok.js", "./chunk-cpp-Ckx2-j3M.js", "./chunk-regexp-CDVJQ6XC.js", "./chunk-glsl-BnHhRW2T.js", "./chunk-c-BIGW1oBm.js", "./chunk-sql-BLtJtn59.js", "./chunk-crystal-BK9W5Fvr.js", "./chunk-html-C1at-c71.js", "./chunk-shellscript-Yzrsuije.js", "./chunk-elixir-C7lme6YR.js", "./chunk-elm-BhgDo1vg.js", "./chunk-erb-Co0kMGJK.js", "./chunk-ruby-ClSEMAu1.js", "./chunk-haml-DNnn2NCQ.js", "./chunk-xml-DlN-rr7z.js", "./chunk-java-CylS5w8V.js", "./chunk-graphql-L81lyQ56.js", "./chunk-jsx-g9-lgVsj.js", "./chunk-lua-DtSm4P04.js", "./chunk-yaml-Buea-lGh.js", "./chunk-erlang-C6V-aJ-t.js", "./chunk-markdown-Cvjx9yec.js", "./chunk-fsharp-BsLahXQ1.js", "./chunk-julia-Dnjnx9Jx.js", "./chunk-python-B6aJPvgy.js", "./chunk-r-Dspwwk_N.js", "./chunk-latex-mOGPH4YD.js", "./chunk-nginx-DokJLg7w.js", "./chunk-nim-DmqOpbIR.js", "./chunk-perl-C2IzWTMT.js", "./chunk-php-BMIjrkSP.js", "./chunk-rst-U-YwVP9Q.js", "./chunk-html-derivative-BCBuM9Hh.js", "./chunk-cmake-D1j8_8rp.js", "./chunk-scss-CaaVZkg6.js", "./chunk-svelte-DWTRjxfB.js", "./chunk-vue-CN6y6QjY.js"])): any => ((i as any).map as any)((i: any): any => (d as any)[i]);
import { _ as t } from "./index.eager-vendor-Qbf9YA6n.js";
import { b7 as D } from "./index.eager-platform-Dcfeegfw.js";
function F(this: any, e: any): any {
  if (!e) return {};
  const r: any = {};
  (e as any) & (1 as any) && ((r as any).fontStyle = "italic"), (e as any) & (2 as any) && ((r as any).fontWeight = "bold");
  const o: any = [];
  return (e as any) & (4 as any) && ((o as any).push as any)("underline"), (e as any) & (8 as any) && ((o as any).push as any)("line-through"), ((o as any).length as any) > (0 as any) && ((r as any).textDecoration = ((o as any).join as any)(" ")), r;
}
function f(this: any, e: any): any {
  return ((((e as any).split as any)(/\r\n|\r|\n/) as any).map as any)((r: any): any => [{
    content: r,
    col: 0
  }]);
}
const V: any = {
    name: "css-variables",
    type: "dark",
    fg: "var(--shiki-foreground)",
    bg: "var(--shiki-background)",
    settings: [{
      scope: ["meta.embedded", "meta.template.expression"],
      settings: {
        foreground: "var(--shiki-foreground)"
      }
    }, {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "var(--shiki-token-comment)",
        fontStyle: "italic"
      }
    }, {
      scope: ["string", "string.quoted", "string.template", "string.other.link"],
      settings: {
        foreground: "var(--shiki-token-string)"
      }
    }, {
      scope: ["string.regexp"],
      settings: {
        foreground: "var(--shiki-token-string-expression)"
      }
    }, {
      scope: ["constant.numeric"],
      settings: {
        foreground: "var(--shiki-token-constant)"
      }
    }, {
      scope: ["constant.language"],
      settings: {
        foreground: "var(--shiki-token-keyword)"
      }
    }, {
      scope: ["constant.character", "constant.character.escape"],
      settings: {
        foreground: "var(--shiki-token-string-expression)"
      }
    }, {
      scope: ["constant.other"],
      settings: {
        foreground: "var(--shiki-token-constant)"
      }
    }, {
      scope: ["variable"],
      settings: {
        foreground: "var(--shiki-token-variable)"
      }
    }, {
      scope: ["variable.language"],
      settings: {
        foreground: "var(--shiki-token-language-variable)"
      }
    }, {
      scope: ["variable.parameter"],
      settings: {
        foreground: "var(--shiki-token-parameter)"
      }
    }, {
      scope: ["variable.other.constant"],
      settings: {
        foreground: "var(--shiki-token-constant-variable)"
      }
    }, {
      scope: ["variable.other.property", "support.variable.property"],
      settings: {
        foreground: "var(--shiki-token-property)"
      }
    }, {
      scope: ["keyword", "keyword.control", "keyword.operator.new", "keyword.operator.expression", "keyword.operator.logical", "keyword.operator.delete", "storage", "storage.type", "storage.modifier"],
      settings: {
        foreground: "var(--shiki-token-keyword)"
      }
    }, {
      scope: ["entity.name.function", "support.function"],
      settings: {
        foreground: "var(--shiki-token-function)"
      }
    }, {
      scope: ["entity.name.type", "support.type", "entity.name.type.class"],
      settings: {
        foreground: "var(--shiki-token-type)"
      }
    }, {
      scope: ["entity.name.class", "support.class"],
      settings: {
        foreground: "var(--shiki-token-class)"
      }
    }, {
      scope: ["entity.name.tag", "support.class.component", "punctuation.definition.tag"],
      settings: {
        foreground: "var(--shiki-token-tag)"
      }
    }, {
      scope: ["entity.other.attribute-name"],
      settings: {
        foreground: "var(--shiki-token-attribute)"
      }
    }, {
      scope: ["entity.name.section"],
      settings: {
        foreground: "var(--shiki-token-keyword)"
      }
    }, {
      scope: ["entity.name.namespace", "entity.name.module", "entity.name.scope-resolution"],
      settings: {
        foreground: "var(--shiki-token-type)"
      }
    }, {
      scope: ["entity.other.inherited-class"],
      settings: {
        foreground: "var(--shiki-token-class)"
      }
    }, {
      scope: ["support.type.property-name", "meta.object-literal.key"],
      settings: {
        foreground: "var(--shiki-token-property)"
      }
    }, {
      scope: ["support.constant"],
      settings: {
        foreground: "var(--shiki-token-constant)"
      }
    }, {
      scope: ["support.variable"],
      settings: {
        foreground: "var(--shiki-token-variable)"
      }
    }, {
      scope: ["punctuation", "meta.brace", "meta.delimiter", "keyword.operator", "keyword.operator.assignment"],
      settings: {
        foreground: "var(--shiki-token-punctuation)"
      }
    }, {
      scope: ["punctuation.definition.template-expression.begin", "punctuation.definition.template-expression.end", "punctuation.section.embedded"],
      settings: {
        foreground: "var(--shiki-token-keyword)"
      }
    }, {
      scope: ["markup.heading"],
      settings: {
        foreground: "var(--shiki-token-keyword)",
        fontStyle: "bold"
      }
    }, {
      scope: ["markup.bold"],
      settings: {
        fontStyle: "bold"
      }
    }, {
      scope: ["markup.italic"],
      settings: {
        fontStyle: "italic"
      }
    }, {
      scope: ["markup.strikethrough"],
      settings: {
        fontStyle: "strikethrough"
      }
    }, {
      scope: ["markup.inline.raw"],
      settings: {
        foreground: "var(--shiki-token-string)"
      }
    }, {
      scope: ["markup.underline.link"],
      settings: {
        foreground: "var(--shiki-token-link)"
      }
    }, {
      scope: ["markup.inserted"],
      settings: {
        foreground: "var(--shiki-token-constant)"
      }
    }, {
      scope: ["markup.deleted"],
      settings: {
        foreground: "var(--shiki-token-string)"
      }
    }, {
      scope: ["markup.changed"],
      settings: {
        foreground: "var(--shiki-token-keyword)"
      }
    }, {
      scope: ["markup.quote"],
      settings: {
        foreground: "var(--shiki-token-comment)"
      }
    }]
  },
  y: any = {
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
function E(this: any, e: any): any {
  const r: any = ((((e as any).toLowerCase as any)() as any).trim as any)();
  return (y as any)[r] ?? r;
}
function b(this: any, e: any, r: any): any {
  const o: any = (E as any)(r);
  return ((((e as any).getLoadedLanguages as any)() as any).includes as any)(o);
}
function T(this: any, e: any, r: any): any {
  const o: any = (E as any)(r);
  return (b as any)(e, o) ? o : "text";
}
const d: number = 2e4,
  A: number = 2e5,
  w: any = {
    javascript: 2500,
    jsx: 2500,
    tsx: 2500,
    java: 7500,
    cpp: 7500,
    csharp: 2500
  };
function I(this: any, e: any): any {
  const r: any = (w as any)[e];
  return (r as any) === (void 0 as any) ? d : ((Math as any).min as any)(r, d);
}
function x(this: any, e: any): any {
  let r: any = 0,
    o: any = 0;
  for (let i: any = 0; (i as any) < ((e as any).length as any); i++) {
    const a: any = ((e as any).charCodeAt as any)(i);
    ((a as any) === (10 as any) || (a as any) === (13 as any)) && (((i as any) - (o as any) as any) > (r as any) && (r = (i as any) - (o as any)), o = (i as any) + (1 as any));
  }
  return (((e as any).length as any) - (o as any) as any) > (r as any) && (r = ((e as any).length as any) - (o as any)), r;
}
function R(this: any, e: any): any {
  let r: any = 0;
  return ((e as any).map as any)((o: any): any => {
    const i: any = {
      content: (o as any).content,
      color: (o as any).color,
      fontStyle: (o as any).fontStyle,
      col: r
    };
    return r += ((o as any).content as any).length, i;
  });
}
function h(this: any, e: any): any {
  return ((((e as any).split as any)(/\r?\n/) as any).map as any)((r: any): any => [{
    content: r,
    col: 0
  }]);
}
function K(this: any, e: any, r: any, o: any): any {
  if (((r as any).length as any) > (A as any) || ((x as any)(r) as any) > (d as any)) return (f as any)(r);
  const i: any = (T as any)(e, o);
  try {
    return (((((e as any).codeToTokens as any)(r, {
      lang: i,
      theme: "css-variables",
      tokenizeMaxLineLength: (I as any)(i)
    }) as any).tokens as any).map as any)(R);
  } catch {
    return (f as any)(r);
  }
}
function q(this: any, e: any, r: any, o: any, i: any): any {
  if (((r as any).length as any) > (A as any)) return {
    tokens: (h as any)(r),
    grammarState: void 0
  };
  const a: any = (T as any)(e, o),
    p: any = (I as any)(a);
  try {
    const m: any = ((e as any).codeToTokens as any)(r, {
      lang: a,
      theme: "css-variables",
      grammarState: i,
      tokenizeMaxLineLength: p
    });
    return {
      tokens: (((m as any).tokens as any).map as any)(R),
      grammarState: (m as any).grammarState
    };
  } catch {
    return {
      tokens: (h as any)(r),
      grammarState: void 0
    };
  }
}
const S: any = {
    asm: (): any => (t as any)((): any => import("./chunk-asm-D_Q5rh1f.js"), [], (import.meta as any).url),
    astro: (): any => (t as any)((): any => import("./chunk-astro-_fkLvHwY.js"), (__vite__mapDeps as any)([0, 1, 2, 3, 4, 5, 6]), (import.meta as any).url),
    c: (): any => (t as any)((): any => import("./chunk-c-BIGW1oBm.js"), [], (import.meta as any).url),
    clojure: (): any => (t as any)((): any => import("./chunk-clojure-P80f7IUj.js"), [], (import.meta as any).url),
    cmake: (): any => (t as any)((): any => import("./chunk-cmake-D1j8_8rp.js"), [], (import.meta as any).url),
    cpp: (): any => (t as any)((): any => import("./chunk-cpp-Ckx2-j3M.js"), (__vite__mapDeps as any)([7, 8, 9, 10, 11]), (import.meta as any).url),
    crystal: (): any => (t as any)((): any => import("./chunk-crystal-BK9W5Fvr.js"), (__vite__mapDeps as any)([12, 13, 2, 4, 11, 10, 14]), (import.meta as any).url),
    csharp: (): any => (t as any)((): any => import("./chunk-csharp-COcwbKMJ.js"), [], (import.meta as any).url),
    css: (): any => (t as any)((): any => import("./chunk-css-CLj8gQPS.js"), [], (import.meta as any).url),
    dart: (): any => (t as any)((): any => import("./chunk-dart-bE4Kk8sk.js"), [], (import.meta as any).url),
    diff: (): any => (t as any)((): any => import("./chunk-diff-D97Zzqfu.js"), [], (import.meta as any).url),
    dockerfile: (): any => (t as any)((): any => import("./chunk-dockerfile-BcOcwvcX.js"), [], (import.meta as any).url),
    dotenv: (): any => (t as any)((): any => import("./chunk-dotenv-Da5cRb03.js"), [], (import.meta as any).url),
    elixir: (): any => (t as any)((): any => import("./chunk-elixir-C7lme6YR.js"), (__vite__mapDeps as any)([15, 13, 2, 4]), (import.meta as any).url),
    elm: (): any => (t as any)((): any => import("./chunk-elm-BhgDo1vg.js"), (__vite__mapDeps as any)([16, 9, 10]), (import.meta as any).url),
    erb: (): any => (t as any)((): any => import("./chunk-erb-Co0kMGJK.js"), (__vite__mapDeps as any)([17, 13, 2, 4, 18, 19, 20, 21, 11, 22, 3, 23, 6, 7, 8, 9, 10, 14, 24, 25]), (import.meta as any).url),
    erlang: (): any => (t as any)((): any => import("./chunk-erlang-C6V-aJ-t.js"), (__vite__mapDeps as any)([26, 27]), (import.meta as any).url),
    fish: (): any => (t as any)((): any => import("./chunk-fish-BvzEVeQv.js"), [], (import.meta as any).url),
    fsharp: (): any => (t as any)((): any => import("./chunk-fsharp-BsLahXQ1.js"), (__vite__mapDeps as any)([28, 27]), (import.meta as any).url),
    glsl: (): any => (t as any)((): any => import("./chunk-glsl-BnHhRW2T.js"), (__vite__mapDeps as any)([9, 10]), (import.meta as any).url),
    go: (): any => (t as any)((): any => import("./chunk-go-C27-OAKa.js"), [], (import.meta as any).url),
    graphql: (): any => (t as any)((): any => import("./chunk-graphql-L81lyQ56.js"), (__vite__mapDeps as any)([22, 2, 3, 23, 6]), (import.meta as any).url),
    groovy: (): any => (t as any)((): any => import("./chunk-groovy-gcz8RCvz.js"), [], (import.meta as any).url),
    haml: (): any => (t as any)((): any => import("./chunk-haml-DNnn2NCQ.js"), (__vite__mapDeps as any)([19, 2, 4]), (import.meta as any).url),
    haskell: (): any => (t as any)((): any => import("./chunk-haskell-BopgyDCf.js"), [], (import.meta as any).url),
    hcl: (): any => (t as any)((): any => import("./chunk-hcl-BWvSN4gD.js"), [], (import.meta as any).url),
    hlsl: (): any => (t as any)((): any => import("./chunk-hlsl-D3lLCCz7.js"), [], (import.meta as any).url),
    html: (): any => (t as any)((): any => import("./chunk-html-C1at-c71.js"), (__vite__mapDeps as any)([13, 2, 4]), (import.meta as any).url),
    ini: (): any => (t as any)((): any => import("./chunk-ini-BEwlwnbL.js"), [], (import.meta as any).url),
    java: (): any => (t as any)((): any => import("./chunk-java-CylS5w8V.js"), [], (import.meta as any).url),
    javascript: (): any => (t as any)((): any => import("./chunk-javascript-wDzz0qaB.js"), [], (import.meta as any).url),
    json: (): any => (t as any)((): any => import("./chunk-json-Cp-IABpG.js"), [], (import.meta as any).url),
    json5: (): any => (t as any)((): any => import("./chunk-json5-C9tS-k6U.js"), [], (import.meta as any).url),
    jsonc: (): any => (t as any)((): any => import("./chunk-jsonc-Des-eS-w.js"), [], (import.meta as any).url),
    jsx: (): any => (t as any)((): any => import("./chunk-jsx-g9-lgVsj.js"), [], (import.meta as any).url),
    julia: (): any => (t as any)((): any => import("./chunk-julia-Dnjnx9Jx.js"), (__vite__mapDeps as any)([29, 7, 8, 9, 10, 11, 30, 2, 31]), (import.meta as any).url),
    kotlin: (): any => (t as any)((): any => import("./chunk-kotlin-BdnUsdx6.js"), [], (import.meta as any).url),
    latex: (): any => (t as any)((): any => import("./chunk-latex-mOGPH4YD.js"), (__vite__mapDeps as any)([32, 31]), (import.meta as any).url),
    less: (): any => (t as any)((): any => import("./chunk-less--Du4Ovld.js"), [], (import.meta as any).url),
    lisp: (): any => (t as any)((): any => import("./chunk-lisp-Cg-RD9OK.js"), [], (import.meta as any).url),
    lua: (): any => (t as any)((): any => import("./chunk-lua-DtSm4P04.js"), (__vite__mapDeps as any)([24, 10]), (import.meta as any).url),
    makefile: (): any => (t as any)((): any => import("./chunk-makefile-CHLpvVh8.js"), [], (import.meta as any).url),
    markdown: (): any => (t as any)((): any => import("./chunk-markdown-Cvjx9yec.js"), [], (import.meta as any).url),
    mdx: (): any => (t as any)((): any => import("./chunk-mdx-Cmh6b_Ma.js"), [], (import.meta as any).url),
    nginx: (): any => (t as any)((): any => import("./chunk-nginx-DokJLg7w.js"), (__vite__mapDeps as any)([33, 24, 10]), (import.meta as any).url),
    nim: (): any => (t as any)((): any => import("./chunk-nim-DmqOpbIR.js"), (__vite__mapDeps as any)([34, 10, 13, 2, 4, 20, 21, 9, 27]), (import.meta as any).url),
    "objective-c": (): any => (t as any)((): any => import("./chunk-objective-c-DXmwc3jG.js"), [], (import.meta as any).url),
    "objective-cpp": (): any => (t as any)((): any => import("./chunk-objective-cpp-CLxacb5B.js"), [], (import.meta as any).url),
    ocaml: (): any => (t as any)((): any => import("./chunk-ocaml-C0hk2d4L.js"), [], (import.meta as any).url),
    perl: (): any => (t as any)((): any => import("./chunk-perl-C2IzWTMT.js"), (__vite__mapDeps as any)([35, 13, 2, 4, 20, 21, 11]), (import.meta as any).url),
    php: (): any => (t as any)((): any => import("./chunk-php-BMIjrkSP.js"), (__vite__mapDeps as any)([36, 13, 2, 4, 20, 21, 11, 1]), (import.meta as any).url),
    postcss: (): any => (t as any)((): any => import("./chunk-postcss-CXtECtnM.js"), [], (import.meta as any).url),
    powershell: (): any => (t as any)((): any => import("./chunk-powershell-DM5O7RTd.js"), [], (import.meta as any).url),
    prisma: (): any => (t as any)((): any => import("./chunk-prisma-Dd19v3D-.js"), [], (import.meta as any).url),
    proto: (): any => (t as any)((): any => import("./chunk-proto-C7zT0LnQ.js"), [], (import.meta as any).url),
    python: (): any => (t as any)((): any => import("./chunk-python-B6aJPvgy.js"), [], (import.meta as any).url),
    r: (): any => (t as any)((): any => import("./chunk-r-Dspwwk_N.js"), [], (import.meta as any).url),
    regexp: (): any => (t as any)((): any => import("./chunk-regexp-CDVJQ6XC.js"), [], (import.meta as any).url),
    rst: (): any => (t as any)((): any => import("./chunk-rst-U-YwVP9Q.js"), (__vite__mapDeps as any)([37, 38, 13, 2, 4, 7, 8, 9, 10, 11, 30, 14, 25, 39, 18, 19, 20, 21, 22, 3, 23, 6, 24]), (import.meta as any).url),
    ruby: (): any => (t as any)((): any => import("./chunk-ruby-ClSEMAu1.js"), (__vite__mapDeps as any)([18, 13, 2, 4, 19, 20, 21, 11, 22, 3, 23, 6, 7, 8, 9, 10, 14, 24, 25]), (import.meta as any).url),
    rust: (): any => (t as any)((): any => import("./chunk-rust-B1yitclQ.js"), [], (import.meta as any).url),
    sass: (): any => (t as any)((): any => import("./chunk-sass-Cj5Yp3dK.js"), [], (import.meta as any).url),
    scala: (): any => (t as any)((): any => import("./chunk-scala-C151Ov-r.js"), [], (import.meta as any).url),
    scss: (): any => (t as any)((): any => import("./chunk-scss-CaaVZkg6.js"), (__vite__mapDeps as any)([40, 4]), (import.meta as any).url),
    shellscript: (): any => (t as any)((): any => import("./chunk-shellscript-Yzrsuije.js"), [], (import.meta as any).url),
    sql: (): any => (t as any)((): any => import("./chunk-sql-BLtJtn59.js"), [], (import.meta as any).url),
    svelte: (): any => (t as any)((): any => import("./chunk-svelte-DWTRjxfB.js"), (__vite__mapDeps as any)([41, 2, 3, 4, 5]), (import.meta as any).url),
    swift: (): any => (t as any)((): any => import("./chunk-swift-C1_QVMPt.js"), [], (import.meta as any).url),
    terraform: (): any => (t as any)((): any => import("./chunk-terraform-BETggiCN.js"), [], (import.meta as any).url),
    toml: (): any => (t as any)((): any => import("./chunk-toml-vGWfd6FD.js"), [], (import.meta as any).url),
    tsx: (): any => (t as any)((): any => import("./chunk-tsx-COt5Ahok.js"), [], (import.meta as any).url),
    typescript: (): any => (t as any)((): any => import("./chunk-typescript-BPQ3VLAy.js"), [], (import.meta as any).url),
    vue: (): any => (t as any)((): any => import("./chunk-vue-CN6y6QjY.js"), (__vite__mapDeps as any)([42, 4, 2, 3, 1, 13, 38]), (import.meta as any).url),
    xml: (): any => (t as any)((): any => import("./chunk-xml-DlN-rr7z.js"), (__vite__mapDeps as any)([20, 21]), (import.meta as any).url),
    yaml: (): any => (t as any)((): any => import("./chunk-yaml-Buea-lGh.js"), [], (import.meta as any).url),
    zig: (): any => (t as any)((): any => import("./chunk-zig-VOosw3JB.js"), [], (import.meta as any).url)
  },
  j: number = 3,
  G: number = 1e3;
function M(this: any, e: any): any {
  const r: any = new (Map as any)(),
    o: any = new (Map as any)(),
    i: any = new (Set as any)();
  async function a(this: any, n: any): Promise<any> {
    for (let s: any = 1;; s++) try {
      return await (n as any)();
    } catch (u: any) {
      if ((s as any) >= (j as any)) throw u;
      await (D as any)(G);
    }
  }
  function p(this: any, n: any): any {
    const s: any = (E as any)(n);
    return ((Object as any).hasOwn as any)(e, s) ? s : void 0;
  }
  function m(this: any, n: any): any {
    const s: any = ((r as any).get as any)(n);
    if ((s as any) !== (void 0 as any)) return ((Promise as any).resolve as any)(s);
    const u: any = ((o as any).get as any)(n);
    if ((u as any) !== (void 0 as any)) return u;
    const v: any = (e as any)[n];
    if ((v as any) === (void 0 as any)) return ((Promise as any).reject as any)(new (Error as any)(`No shiki grammar for "${n}"`));
    const g: any = (((((a as any)(v) as any).then as any)((k: any): any => {
      ((r as any).set as any)(n, (k as any).default);
      for (const P of i) (P as any)();
      return (k as any).default;
    }) as any).finally as any)((): any => {
      ((o as any).delete as any)(n);
    });
    return ((o as any).set as any)(n, g), g;
  }
  return {
    grammarIdFor: p,
    getLoadedGrammar: (n: any): any => ((r as any).get as any)(n),
    loadedGrammarIds: (): any => ((r as any).keys as any)(),
    subscribeToGrammarLoads(n: any): any {
      return ((i as any).add as any)(n), (): any => {
        ((i as any).delete as any)(n);
      };
    },
    loadGrammar: m,
    ensureGrammar(n: any): any {
      const s: any = (p as any)(n);
      return (s as any) === (void 0 as any) ? ((Promise as any).resolve as any)(!0) : (((m as any)(s) as any).then as any)((): any => !0, (u: any): any => (((console as any).warn as any)(`Shiki grammar "${s}" failed to load:`, u), !1));
    }
  };
}
const c: any = (M as any)(S);
function C(this: any, e: any): any {
  return ((c as any).grammarIdFor as any)(e);
}
function $(this: any, e: any): any {
  return ((c as any).getLoadedGrammar as any)(e);
}
function X(this: any): any {
  return ((c as any).loadedGrammarIds as any)();
}
function W(this: any, e: any): any {
  return ((c as any).subscribeToGrammarLoads as any)(e);
}
function Z(this: any, e: any): any {
  return ((c as any).ensureGrammar as any)(e);
}
const N: number = 256,
  L: any = (512 as any) * (1024 as any),
  _: any = new (Map as any)();
let l: any = 0;
function O(this: any, e: any, r: any): any {
  return `${(V as any).name}\0${(C as any)(r) ?? r}\0${e}`;
}
function Y(this: any, e: any, r: any): any {
  const o: any = (O as any)(e, r),
    i: any = ((_ as any).get as any)(o);
  if ((i as any) !== (void 0 as any)) return ((_ as any).delete as any)(o), ((_ as any).set as any)(o, i), (i as any).tokens;
}
function B(this: any, e: any, r: any, o: any): any {
  const i: any = (e as any).length;
  if ((i as any) > (L as any)) return;
  const a: any = (O as any)(e, r),
    p: any = ((_ as any).get as any)(a);
  for ((p as any) !== (void 0 as any) && (((_ as any).delete as any)(a), l -= (p as any).chars), ((_ as any).set as any)(a, {
    tokens: o,
    chars: i
  }), l += i; ((_ as any).size as any) > (N as any) || (l as any) > (L as any);) {
    const m: any = (((((_ as any).entries as any)() as any).next as any)() as any).value;
    if ((m as any) === (void 0 as any)) break;
    ((_ as any).delete as any)((m as any)[0]), l -= ((m as any)[1] as any).chars;
  }
}
function U(this: any): any {
  ((_ as any).clear as any)(), l = 0;
}
export { V as C, A as M, C as a, q as b, U as c, $ as d, Z as e, B as f, F as g, X as l, f as m, Y as r, W as s, K as t };
//# debugId=22fde718-2b7d-4ef5-a15a-1276c9e36cd4
