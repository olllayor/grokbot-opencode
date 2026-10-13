import { c } from "./index.eager-vendor-Qbf9YA6n.js";
import { a_ as H } from "./index.eager-platform-Dcfeegfw.js";
import { DefaultCode } from "./chunk-DefaultCode-CGxOfvcH.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-shiki-token-cache-hLYN1QGX.js";
import "./chunk-index-C0dBjfzC.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "b366d86b-7287-4585-b361-1befa04a5999";
            e._sentryDebugIdIdentifier = "sentry-dbid-b366d86b-7287-4585-b361-1befa04a5999";
        }
    } catch (e) {}
})();
const x = {
    js: "javascript",
    jsx: "jsx",
    mjs: "javascript",
    cjs: "javascript",
    ts: "typescript",
    tsx: "tsx",
    mts: "typescript",
    cts: "typescript",
    py: "python",
    pyw: "python",
    pyi: "python",
    java: "java",
    kt: "kotlin",
    kts: "kotlin",
    scala: "scala",
    groovy: "groovy",
    gradle: "groovy",
    c: "c",
    h: "c",
    cpp: "cpp",
    cc: "cpp",
    cxx: "cpp",
    hpp: "cpp",
    hxx: "cpp",
    hh: "cpp",
    cs: "csharp",
    fs: "fsharp",
    fsx: "fsharp",
    go: "go",
    rs: "rust",
    rb: "ruby",
    erb: "erb",
    rake: "ruby",
    gemspec: "ruby",
    php: "php",
    swift: "swift",
    m: "objective-c",
    mm: "objective-cpp",
    sh: "zsh",
    bash: "bash",
    zsh: "zsh",
    fish: "fish",
    ps1: "powershell",
    psm1: "powershell",
    html: "html",
    htm: "html",
    css: "css",
    scss: "scss",
    sass: "sass",
    less: "less",
    vue: "vue",
    svelte: "svelte",
    json: "json",
    ndjson: "json",
    jsonc: "jsonc",
    json5: "json5",
    yaml: "yaml",
    yml: "yaml",
    toml: "toml",
    xml: "xml",
    svg: "xml",
    ini: "ini",
    cfg: "ini",
    conf: "ini",
    properties: "properties",
    env: "dotenv",
    md: "markdown",
    mdx: "mdx",
    rst: "rst",
    tex: "latex",
    latex: "latex",
    sql: "sql",
    mysql: "sql",
    pgsql: "sql",
    lua: "lua",
    perl: "perl",
    pl: "perl",
    pm: "perl",
    r: "r",
    R: "r",
    dart: "dart",
    ex: "elixir",
    exs: "elixir",
    erl: "erlang",
    hrl: "erlang",
    hs: "haskell",
    lhs: "haskell",
    clj: "clojure",
    cljs: "clojure",
    cljc: "clojure",
    lisp: "lisp",
    cl: "lisp",
    elm: "elm",
    ml: "ocaml",
    mli: "ocaml",
    nim: "nim",
    zig: "zig",
    v: "v",
    cr: "crystal",
    jl: "julia",
    tf: "terraform",
    tfvars: "terraform",
    hcl: "hcl",
    dockerfile: "dockerfile",
    containerfile: "dockerfile",
    nginx: "nginx",
    apache: "apache",
    graphql: "graphql",
    gql: "graphql",
    prisma: "prisma",
    proto: "protobuf",
    diff: "diff",
    patch: "diff",
    asm: "asm",
    s: "asm",
    makefile: "makefile",
    mk: "makefile",
    cmake: "cmake",
    wat: "wasm",
    wast: "wasm",
    glsl: "glsl",
    vert: "glsl",
    frag: "glsl",
    hlsl: "hlsl",
    gitignore: "text"
};
const n = {
    dockerfile: "dockerfile",
    containerfile: "dockerfile",
    makefile: "makefile",
    gnumakefile: "makefile",
    cmakelists: "cmake",
    gemfile: "ruby",
    rakefile: "ruby",
    procfile: "yaml",
    vagrantfile: "ruby"
};
function d(name) {
    const e = name.split("/").pop() ?? name;
    const s = e.toLowerCase().split(".")[0];
    if (s && n[s]) {
        return n[s];
    }
    const l = e.split(".").pop()?.toLowerCase();
    if (l) {
        return x[l] ?? "text";
    }
    return "text";
}
const style = {
    width: "max-content",
    minWidth: "100%"
};
export function CodeBody(a) {
    CodeBody.d = 788;
    const e = c.c(7);
    const { text, name } = a;
    let l;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        l = {
            className: "sand-1iyjqo2 sand-2lwn1j"
        };
        e[0] = l;
    } else {
        l = e[0];
    }
    const l_className = l.className;
    let i;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        i = {
            className: "sand-1us19tq sand-yamay9 sand-wxc41k sand-1ua6jya"
        };
        e[1] = i;
    } else {
        i = e[1];
    }
    const i_className = i.className;
    let language;
    if (e[2] !== name) {
        language = d(name);
        e[2] = name;
        e[3] = language;
    } else {
        language = e[3];
    }
    let o;
    if (e[4] !== language || e[5] !== text) {
        o = <H className={l_className} direction="both" scrollbarVisibility="hover"><div className={i_className} dir="ltr"><DefaultCode code={text} language={language} showLineNumbers style={style} sync/></div></H>;
        e[4] = language;
        e[5] = text;
        e[6] = o;
    } else {
        o = e[6];
    }
    return o;
}
