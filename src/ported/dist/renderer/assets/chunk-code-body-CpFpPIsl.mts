declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "b366d86b-7287-4585-b361-1befa04a5999", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-b366d86b-7287-4585-b361-1befa04a5999");
  } catch (e: any) {}
} as any)();
import { c as f, j as c } from "./index.eager-vendor-Qbf9YA6n.js";
import { a_ as h } from "./index.eager-platform-Dcfeegfw.js";
import { DefaultCode as g } from "./chunk-DefaultCode-CGxOfvcH.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-shiki-token-cache-hLYN1QGX.js";
import "./chunk-index-C0dBjfzC.js";
const x: any = {
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
  },
  n: any = {
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
function d(this: any, a: any): any {
  const e: any = ((((a as any).split as any)("/") as any).pop as any)() ?? a,
    s: any = (((((e as any).toLowerCase as any)() as any).split as any)(".") as any)[0];
  if (s && (n as any)[s]) return (n as any)[s];
  const l: any = ((((e as any).split as any)(".") as any).pop as any)()?.toLowerCase();
  return l ? (x as any)[l] ?? "text" : "text";
}
const j: any = {
  width: "max-content",
  minWidth: "100%"
};
function u(this: any, a: any): any {
  (u as any).d = 788;
  const e: any = ((f as any).c as any)(7),
    {
      text: r,
      name: s
    }: any = a;
  let l: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = {
    className: "sand-1iyjqo2 sand-2lwn1j"
  }, (e as any)[0] = l) : l = (e as any)[0];
  const m: any = (l as any).className;
  let i: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = {
    className: "sand-1us19tq sand-yamay9 sand-wxc41k sand-1ua6jya"
  }, (e as any)[1] = i) : i = (e as any)[1];
  const p: any = (i as any).className;
  let t: any;
  ((e as any)[2] as any) !== (s as any) ? (t = (d as any)(s), (e as any)[2] = s, (e as any)[3] = t) : t = (e as any)[3];
  let o: any;
  return ((e as any)[4] as any) !== (t as any) || ((e as any)[5] as any) !== (r as any) ? (o = ((c as any).jsx as any)(h, {
    className: m,
    direction: "both",
    scrollbarVisibility: "hover",
    children: ((c as any).jsx as any)("div", {
      className: p,
      dir: "ltr",
      children: ((c as any).jsx as any)(g, {
        code: r,
        language: t,
        showLineNumbers: !0,
        style: j,
        sync: !0
      })
    })
  }), (e as any)[4] = t, (e as any)[5] = r, (e as any)[6] = o) : o = (e as any)[6], o;
}
export { u as CodeBody };
//# debugId=b366d86b-7287-4585-b361-1befa04a5999
