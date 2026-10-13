declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "b0aa66f7-1953-4a7b-a652-116e1c8715de", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-b0aa66f7-1953-4a7b-a652-116e1c8715de");
  } catch (e: any) {}
} as any)();
import { b2 as $, b3 as X, b4 as H, b5 as J } from "./index.eager-platform-Dcfeegfw.js";
import { r as I, X as Q, Y as oo, Z as ro, $ as co, a0 as ao, j as s, a1 as eo, a2 as no, a3 as io } from "./index.eager-vendor-Qbf9YA6n.js";
import { bn as to, bo as lo, W as so, bp as mo } from "./index-ZYxf-aBb.js";
function e(this: any, o: any): any {
  const r: any = {
    char: (X as any)((o as any).cursorIcon),
    color: (o as any).color,
    fontFamily: "cursor",
    semanticColor: (o as any).semanticColor
  };
  return ((o as any).glyphScale as any) === (void 0 as any) ? r : {
    ...r,
    glyphScale: (o as any).glyphScale
  };
}
const i: any = {
    char: "\uE007",
    color: "#8dc149",
    semanticColor: "iconGreenPrimary"
  },
  yo: any = {
    char: "\uE007",
    color: "#4d5a5e",
    semanticColor: "iconSecondary"
  },
  C: any = {
    char: "\uE025",
    color: "#519aba",
    semanticColor: "iconCyanPrimary"
  },
  F: any = (e as any)({
    color: "#e37933",
    cursorIcon: "file-type-bower",
    semanticColor: "iconOrangePrimary"
  }),
  g: any = (e as any)({
    color: "#e37933",
    cursorIcon: "file-type-firebase",
    semanticColor: "iconOrangePrimary"
  }),
  P: any = (e as any)({
    color: "#498ae1",
    cursorIcon: "file-type-godot",
    semanticColor: "iconBluePrimary"
  }),
  Co: any = (e as any)({
    color: "#519aba",
    cursorIcon: "file-type-ionic",
    semanticColor: "iconCyanPrimary"
  }),
  f: any = (e as any)({
    color: "#8dc149",
    cursorIcon: "file-type-karma",
    semanticColor: "iconGreenPrimary"
  }),
  uo: any = (e as any)({
    color: "#e37933",
    cursorIcon: "file-type-platformio",
    semanticColor: "iconOrangePrimary"
  }),
  D: any = (e as any)({
    color: "#cbcb41",
    cursorIcon: "file-type-puppet",
    semanticColor: "iconYellowPrimary"
  }),
  A: any = (e as any)({
    color: "#e37933",
    cursorIcon: "file-type-sublime",
    semanticColor: "iconOrangePrimary"
  }),
  ho: any = (e as any)({
    color: "#519aba",
    cursorIcon: "file-type-vsc",
    semanticColor: "iconCyanPrimary"
  }),
  p: any = {
    char: "\uE034",
    color: "#41535b",
    semanticColor: "iconSecondary"
  },
  N: any = {
    char: "\uE05F",
    color: "#e37933",
    semanticColor: "iconOrangePrimary"
  },
  y: any = {
    bzl: i,
    bazel: i,
    build: i,
    workspace: i,
    bazelignore: i,
    bazelrc: yo,
    bazelversion: i,
    ts: {
      char: "\uE099",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    tsx: {
      char: "\uE07D",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    js: {
      char: "\uE051",
      color: "#cbcb41",
      semanticColor: "iconYellowPrimary"
    },
    jsx: {
      char: "\uE07D",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    mjs: {
      char: "\uE051",
      color: "#cbcb41",
      semanticColor: "iconYellowPrimary"
    },
    cjs: {
      char: "\uE051",
      color: "#cbcb41",
      semanticColor: "iconYellowPrimary"
    },
    npmignore: {
      char: "\uE067",
      color: "#cc3e44",
      semanticColor: "iconRedPrimary"
    },
    npmrc: {
      char: "\uE067",
      color: "#cc3e44",
      semanticColor: "iconRedPrimary"
    },
    cmd: {
      char: "\uE0A2",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    env: {
      char: "\uE019",
      color: "#6d8086",
      semanticColor: "iconSecondary"
    },
    dockerignore: C,
    bowerrc: F,
    firebaserc: g,
    gd: P,
    godot: P,
    tscn: P,
    tres: P,
    pp: D,
    "sublime-project": A,
    "sublime-workspace": A,
    "code-workspace": ho,
    py: {
      char: "\uE07B",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    rs: {
      char: "\uE082",
      color: "#6d8086",
      semanticColor: "iconSecondary"
    },
    go: {
      char: "\uE03A",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    c: {
      char: "\uE00C",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    m: {
      char: "\uE00C",
      color: "#cbcb41",
      semanticColor: "iconYellowPrimary"
    },
    h: {
      char: "\uE00C",
      color: "#a074c4",
      semanticColor: "iconMagentaPrimary"
    },
    cpp: {
      char: "\uE01A",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    cc: {
      char: "\uE01A",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    cxx: {
      char: "\uE01A",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    "c++": {
      char: "\uE01A",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    hpp: {
      char: "\uE01A",
      color: "#a074c4",
      semanticColor: "iconMagentaPrimary"
    },
    hh: {
      char: "\uE01A",
      color: "#a074c4",
      semanticColor: "iconMagentaPrimary"
    },
    hxx: {
      char: "\uE01A",
      color: "#a074c4",
      semanticColor: "iconMagentaPrimary"
    },
    "h++": {
      char: "\uE01A",
      color: "#a074c4",
      semanticColor: "iconMagentaPrimary"
    },
    mm: {
      char: "\uE01A",
      color: "#cbcb41",
      semanticColor: "iconYellowPrimary"
    },
    rb: {
      char: "\uE081",
      color: "#cc3e44",
      semanticColor: "iconRedPrimary"
    },
    php: {
      char: "\uE070",
      color: "#a074c4",
      semanticColor: "iconMagentaPrimary"
    },
    java: {
      char: "\uE050",
      color: "#cc3e44",
      semanticColor: "iconRedPrimary"
    },
    sh: {
      char: "\uE089",
      color: "#8dc149",
      semanticColor: "iconGreenPrimary"
    },
    bash: {
      char: "\uE089",
      color: "#8dc149",
      semanticColor: "iconGreenPrimary"
    },
    zsh: {
      char: "\uE089",
      color: "#8dc149",
      semanticColor: "iconGreenPrimary"
    },
    json: {
      char: "\uE055",
      color: "#cbcb41",
      semanticColor: "iconYellowPrimary"
    },
    yaml: {
      char: "\uE0A7",
      color: "#a074c4",
      semanticColor: "iconMagentaPrimary"
    },
    yml: {
      char: "\uE0A7",
      color: "#a074c4",
      semanticColor: "iconMagentaPrimary"
    },
    md: {
      char: "\uE060",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    mdx: {
      char: "\uE060",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    mdc: {
      char: "\uE060",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    jinja: {
      char: "\uE053",
      color: "#cc3e44",
      semanticColor: "iconRedPrimary"
    },
    jinja2: {
      char: "\uE053",
      color: "#cc3e44",
      semanticColor: "iconRedPrimary"
    },
    mermaid: (e as any)({
      color: "#519aba",
      cursorIcon: "diagram",
      glyphScale: .6,
      semanticColor: "iconCyanPrimary"
    }),
    mmd: (e as any)({
      color: "#519aba",
      cursorIcon: "diagram",
      glyphScale: .6,
      semanticColor: "iconCyanPrimary"
    }),
    html: {
      char: "\uE048",
      color: "#e37933",
      semanticColor: "iconOrangePrimary"
    },
    htm: {
      char: "\uE048",
      color: "#e37933",
      semanticColor: "iconOrangePrimary"
    },
    css: {
      char: "\uE01D",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    scss: {
      char: "\uE084",
      color: "#f55385",
      semanticColor: "iconMagentaPrimary"
    },
    sass: {
      char: "\uE084",
      color: "#f55385",
      semanticColor: "iconMagentaPrimary"
    },
    less: {
      char: "\uE059",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    svg: {
      char: "\uE091",
      color: "#a074c4",
      semanticColor: "iconMagentaPrimary"
    },
    xml: {
      char: "\uE0A5",
      color: "#e37933",
      semanticColor: "iconOrangePrimary"
    },
    png: {
      char: "\uE04C",
      color: "#a074c4",
      semanticColor: "iconMagentaPrimary"
    },
    jpg: {
      char: "\uE04C",
      color: "#a074c4",
      semanticColor: "iconMagentaPrimary"
    },
    jpeg: {
      char: "\uE04C",
      color: "#a074c4",
      semanticColor: "iconMagentaPrimary"
    },
    jsonc: {
      char: "\uE055",
      color: "#cbcb41",
      semanticColor: "iconYellowPrimary"
    },
    jsonl: {
      char: "\uE055",
      color: "#cbcb41",
      semanticColor: "iconYellowPrimary"
    },
    gif: {
      char: "\uE04C",
      color: "#a074c4",
      semanticColor: "iconMagentaPrimary"
    },
    webp: {
      char: "\uE04C",
      color: "#a074c4",
      semanticColor: "iconMagentaPrimary"
    },
    ico: {
      char: "\uE02F",
      color: "#cbcb41",
      semanticColor: "iconYellowPrimary"
    },
    ipynb: {
      char: "\uE066",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    csv: {
      char: "\uE01E",
      color: "#8dc149",
      semanticColor: "iconGreenPrimary"
    },
    tsv: {
      char: "\uE01E",
      color: "#8dc149",
      semanticColor: "iconGreenPrimary"
    },
    sql: {
      char: "\uE022",
      color: "#f55385",
      semanticColor: "iconMagentaPrimary"
    },
    pdf: (e as any)({
      color: "#cc3e44",
      cursorIcon: "file-pdf",
      glyphScale: .72,
      semanticColor: "iconRedPrimary"
    }),
    graphql: {
      char: "\uE03E",
      color: "#f55385",
      semanticColor: "iconMagentaPrimary"
    },
    gql: {
      char: "\uE03E",
      color: "#f55385",
      semanticColor: "iconMagentaPrimary"
    },
    vue: {
      char: "\uE09D",
      color: "#8dc149",
      semanticColor: "iconGreenPrimary"
    },
    svelte: {
      char: "\uE090",
      color: "#cc3e44",
      semanticColor: "iconRedPrimary"
    },
    handlebars: {
      char: "\uE063",
      color: "#e37933",
      semanticColor: "iconOrangePrimary"
    },
    groovy: {
      char: "\uE03D",
      color: "#8dc149",
      semanticColor: "iconGreenPrimary"
    },
    toml: {
      char: "\uE019",
      color: "#6d8086",
      semanticColor: "iconSecondary"
    },
    tf: {
      char: "\uE093",
      color: "#a074c4",
      semanticColor: "iconPurplePrimary"
    },
    "tf.json": {
      char: "\uE093",
      color: "#a074c4",
      semanticColor: "iconPurplePrimary"
    },
    tfvars: {
      char: "\uE093",
      color: "#a074c4",
      semanticColor: "iconPurplePrimary"
    },
    "tfvars.json": {
      char: "\uE093",
      color: "#a074c4",
      semanticColor: "iconPurplePrimary"
    },
    tex: {
      char: "\uE094",
      color: "#cbcb41",
      semanticColor: "iconYellowPrimary"
    },
    latex: {
      char: "\uE094",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    dtx: {
      char: "\uE094",
      color: "#e37933",
      semanticColor: "iconOrangePrimary"
    },
    ins: {
      char: "\uE094",
      color: "#d4d7d6",
      semanticColor: "iconSecondary"
    },
    lock: {
      char: "\uE05D",
      color: "#8dc149",
      semanticColor: "iconGreenPrimary"
    },
    proto: {
      char: "\uE019",
      color: "#6d8086",
      semanticColor: "iconSecondary"
    },
    ps1: {
      char: "\uE074",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    swift: {
      char: "\uE092",
      color: "#e37933",
      semanticColor: "iconOrangePrimary"
    },
    kt: {
      char: "\uE058",
      color: "#e37933",
      semanticColor: "iconOrangePrimary"
    },
    kts: {
      char: "\uE058",
      color: "#e37933",
      semanticColor: "iconOrangePrimary"
    },
    mp3: {
      char: "\uE005",
      color: "#a074c4",
      semanticColor: "iconMagentaPrimary"
    },
    mp4: {
      char: "\uE09B",
      color: "#f55385",
      semanticColor: "iconMagentaPrimary"
    },
    ttf: {
      char: "\uE033",
      color: "#cc3e44",
      semanticColor: "iconRedPrimary"
    },
    woff: {
      char: "\uE033",
      color: "#cc3e44",
      semanticColor: "iconRedPrimary"
    },
    woff2: {
      char: "\uE033",
      color: "#cc3e44",
      semanticColor: "iconRedPrimary"
    },
    otf: {
      char: "\uE033",
      color: "#cc3e44",
      semanticColor: "iconRedPrimary"
    },
    zip: {
      char: "\uE0A9",
      color: "#6d8086",
      semanticColor: "iconSecondary"
    },
    wasm: {
      char: "\uE09E",
      color: "#a074c4",
      semanticColor: "iconMagentaPrimary"
    },
    webm: {
      char: "\uE09B",
      color: "#f55385",
      semanticColor: "iconMagentaPrimary"
    },
    tiff: {
      char: "\uE04C",
      color: "#a074c4",
      semanticColor: "iconMagentaPrimary"
    },
    r: {
      char: "\uE001",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    xlsx: {
      char: "\uE0A4",
      color: "#8dc149",
      semanticColor: "iconGreenPrimary"
    },
    mk: N,
    dart: {
      char: "\uE021",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    lua: {
      char: "\uE05E",
      color: "#519aba",
      semanticColor: "iconCyanPrimary"
    },
    default: {
      char: "\uE023",
      color: "#d4d7d6",
      semanticColor: "iconSecondary"
    }
  },
  Po: any = {
    ".gitattributes": p,
    ".gitconfig": p,
    ".gitignore": p,
    ".gitkeep": p,
    license: {
      char: "\uE05A",
      color: "#cbcb41",
      semanticColor: "iconYellowPrimary"
    },
    build: i,
    "build.bazel": i,
    dockerfile: C,
    containerfile: C,
    "docker-compose.yml": C,
    "docker-compose.yaml": C,
    "compose.yml": C,
    "compose.yaml": C,
    "bower.json": F,
    "firebase.json": g,
    "firestore.rules": g,
    "storage.rules": g,
    "project.godot": P,
    "ionic.config.json": Co,
    "karma.conf.js": f,
    "karma.conf.ts": f,
    "karma.conf.cjs": f,
    "karma.conf.mjs": f,
    "platformio.ini": uo,
    puppetfile: D,
    gnumakefile: N,
    makefile: N,
    workspace: i,
    "workspace.bazel": i
  };
function vo(this: any, o: any): any {
  return `var(--cursor-${($ as any)(o)})`;
}
function jo(this: any, o: any): any {
  const r: any = (((((((o as any).split as any)(/[/\\]/u) as any).pop as any)() ?? o) as any).toLowerCase as any)(),
    a: any = (Po as any)[r];
  if ((a as any) !== (void 0 as any)) return a;
  if (((r as any).startsWith as any)(".")) {
    const c: any = (((((r as any).slice as any)(1) as any).split as any)(".", 1) as any)[0];
    if (c && ((Object as any).hasOwn as any)(y, c)) return (y as any)[c] ?? (y as any).default;
  }
  const n: any = ((r as any).split as any)(".");
  for (let c: any = 1; (c as any) < ((n as any).length as any); c++) {
    const t: any = ((((n as any).slice as any)(c) as any).join as any)(".");
    if (((Object as any).hasOwn as any)(y, t)) return (y as any)[t] ?? (y as any).default;
  }
  return (y as any).default;
}
const bo: any = ((I as any).createContext as any)(void 0);
function fo(this: any, o: any = !0): any {
  const r: any = ((I as any).useContext as any)(bo);
  if ((r as any) === (void 0 as any) && !o) throw new (Error as any)((Q as any)(7));
  return r;
}
const K: any = ((I as any).forwardRef as any)(function (this: any, r: any, a: any): any {
  ((Reflect as any).set as any)(K, "d", 3554620838);
  const {
      className: n,
      defaultPressed: c = !1,
      disabled: t = !1,
      form: z,
      onPressedChange: S,
      pressed: v,
      render: j,
      type: B,
      value: w,
      nativeButton: x = !0,
      style: O,
      ...E
    }: any = r,
    m: any = (oo as any)(w || void 0),
    l: any = (fo as any)(),
    k: any = l?.value ?? [],
    M: any = l ? void 0 : c,
    d: any = (t || l?.disabled) ?? !1,
    [u, h]: any = (ro as any)({
      controlled: l ? (m as any) !== (void 0 as any) && (((k as any).indexOf as any)(m) as any) > (-1 as any) : v,
      default: M,
      name: "Toggle",
      state: "pressed"
    }),
    {
      getButtonProps: _,
      buttonRef: T
    }: any = (co as any)({
      disabled: d,
      native: x
    }),
    G: any = {
      disabled: d,
      pressed: u
    },
    q: any = [T, a],
    Y: any = [{
      "aria-pressed": u,
      onClick(Z: any): any {
        const R: any = !u,
          b: any = (no as any)(io, (Z as any).nativeEvent);
        S?.(R, b), !(b as any).isCanceled && (m && l?.setGroupValue?.(m, R, b), !(b as any).isCanceled && (h as any)(R));
      }
    }, E, _],
    V: any = (ao as any)("button", r, {
      enabled: !l,
      state: G,
      ref: q,
      props: Y
    }),
    W: any = ((I as any).useMemo as any)((): any => ({
      disabled: d,
      focusableWhenDisabled: !1
    }), [d]);
  return l ? ((s as any).jsx as any)(eo, {
    tag: "button",
    render: j,
    className: n,
    style: O,
    metadata: W,
    state: G,
    refs: q,
    props: Y
  }) : V;
});
function L(this: any, o: any, r: any, a: any, n: any): any {
  return (typeof o as any) == ("string" as any) ? ((s as any).jsx as any)(so, {
    "aria-hidden": "true",
    name: o,
    rootStyle: n,
    size: a,
    variant: r
  }) : ((s as any).jsx as any)("span", {
    ...(mo as any)(a),
    "aria-hidden": "true",
    children: o
  });
}
function U(this: any, {
  icon: o,
  pressedIcon: r,
  pressed: a,
  iconVariant: n,
  iconSize: c,
  iconStyle: t
}: any): any {
  return (U as any).d = 2420686799, ((s as any).jsxs as any)("span", {
    className: "ui-rvj5dj ui-6s0dn4 ui-1o2pa38 ui-c8icb0 ui-47corl ui-1heor9g",
    "aria-hidden": "true",
    children: [((s as any).jsx as any)("span", {
      className: "ui-1ms6mhf ui-gkxs2y ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1g0ag68 ui-g01cxk ui-6rycqq ui-fimr68 ui-1owdx9d ui-tea3wc ui-1qzdkne ui-nejef0 ui-4wkmsb ui-7pq1vu ui-6ekqhr",
      "data-swap-active": !a || void 0,
      children: (L as any)(o, n, c, t)
    }), ((s as any).jsx as any)("span", {
      className: "ui-1ms6mhf ui-gkxs2y ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1g0ag68 ui-g01cxk ui-6rycqq ui-fimr68 ui-1owdx9d ui-tea3wc ui-1qzdkne ui-nejef0 ui-4wkmsb ui-7pq1vu ui-6ekqhr",
      "data-swap-active": a || void 0,
      children: (L as any)(r, n, c, t)
    })]
  });
}
function po(this: any, {
  icon: o,
  pressedIcon: r = o,
  iconVariant: a = "outline",
  variant: n,
  rounded: c,
  frame: t = "container",
  size: z,
  iconSize: S,
  tone: v,
  rootStyle: j,
  iconStyle: B,
  disabled: w,
  "aria-label": x,
  "aria-labelledby": O,
  ...E
}: any): any {
  (po as any).d = 766618489;
  const m: any = (H as any)(),
    {
      size: l,
      innerIconSize: k,
      disabled: M,
      variant: d,
      tone: u
    }: any = (to as any)({
      disabled: w,
      enforced: m,
      iconSize: S,
      size: z,
      tone: v,
      variant: n
    }),
    h: any = (lo as any)({
      enforcedRootStyle: m?.iconButtonRootStyle,
      frame: t,
      rootStyle: j,
      rounded: c,
      size: l,
      tone: u,
      variant: d
    });
  return ((s as any).jsx as any)(K, {
    ...E,
    className: (J as any)("ui-icon-button", ((h as any).rootAttrs as any).className),
    style: ((h as any).rootAttrs as any).style,
    ...(h as any).dataAttrs,
    "aria-label": x,
    "aria-labelledby": O,
    "data-component": "toggle-icon-button",
    disabled: M,
    render: (_: any, T: any): any => ((s as any).jsx as any)("button", {
      ..._,
      "data-pressed": void 0,
      children: ((s as any).jsx as any)(U, {
        icon: o,
        iconSize: k,
        iconStyle: [m?.iconButtonIconStyle, B],
        iconVariant: a,
        pressed: (T as any).pressed,
        pressedIcon: r
      })
    })
  });
}
export { po as T, jo as g, vo as s };
//# debugId=b0aa66f7-1953-4a7b-a652-116e1c8715de
