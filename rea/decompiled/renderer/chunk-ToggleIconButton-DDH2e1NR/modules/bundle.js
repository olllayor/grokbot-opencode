import { b2, b3, b4, b5 } from "./index.eager-platform-Dcfeegfw.js";
import { r as r_1, X, Y, Z, $, a0, a1 as Eo, a2, a3 } from "./index.eager-vendor-Qbf9YA6n.js";
import { bn, bo, W, bp } from "./index-ZYxf-aBb.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "b0aa66f7-1953-4a7b-a652-116e1c8715de";
            e._sentryDebugIdIdentifier = "sentry-dbid-b0aa66f7-1953-4a7b-a652-116e1c8715de";
        }
    } catch (e) {}
})();
function e(o) {
    const r = {
        char: b3(o.cursorIcon),
        color: o.color,
        fontFamily: "cursor",
        semanticColor: o.semanticColor
    };
    if (o.glyphScale === undefined) {
        return r;
    }
    return {
        ...r,
        glyphScale: o.glyphScale
    };
}
const i = {
    char: "\uE007",
    color: "#8dc149",
    semanticColor: "iconGreenPrimary"
};
const bazelrc = {
    char: "\uE007",
    color: "#4d5a5e",
    semanticColor: "iconSecondary"
};
const C = {
    char: "\uE025",
    color: "#519aba",
    semanticColor: "iconCyanPrimary"
};
const bowerrc = e({
    color: "#e37933",
    cursorIcon: "file-type-bower",
    semanticColor: "iconOrangePrimary"
});
const firebaserc = e({
    color: "#e37933",
    cursorIcon: "file-type-firebase",
    semanticColor: "iconOrangePrimary"
});
const P = e({
    color: "#498ae1",
    cursorIcon: "file-type-godot",
    semanticColor: "iconBluePrimary"
});
const Co = e({
    color: "#519aba",
    cursorIcon: "file-type-ionic",
    semanticColor: "iconCyanPrimary"
});
const f = e({
    color: "#8dc149",
    cursorIcon: "file-type-karma",
    semanticColor: "iconGreenPrimary"
});
const uo = e({
    color: "#e37933",
    cursorIcon: "file-type-platformio",
    semanticColor: "iconOrangePrimary"
});
const D = e({
    color: "#cbcb41",
    cursorIcon: "file-type-puppet",
    semanticColor: "iconYellowPrimary"
});
const A = e({
    color: "#e37933",
    cursorIcon: "file-type-sublime",
    semanticColor: "iconOrangePrimary"
});
const ho = e({
    color: "#519aba",
    cursorIcon: "file-type-vsc",
    semanticColor: "iconCyanPrimary"
});
const p = {
    char: "\uE034",
    color: "#41535b",
    semanticColor: "iconSecondary"
};
const N = {
    char: "\uE05F",
    color: "#e37933",
    semanticColor: "iconOrangePrimary"
};
const y = {
    bzl: i,
    bazel: i,
    build: i,
    workspace: i,
    bazelignore: i,
    bazelrc,
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
    bowerrc,
    firebaserc,
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
    mermaid: e({
        color: "#519aba",
        cursorIcon: "diagram",
        glyphScale: 0.6,
        semanticColor: "iconCyanPrimary"
    }),
    mmd: e({
        color: "#519aba",
        cursorIcon: "diagram",
        glyphScale: 0.6,
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
    pdf: e({
        color: "#cc3e44",
        cursorIcon: "file-pdf",
        glyphScale: 0.72,
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
};
const Po = {
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
    "bower.json": bowerrc,
    "firebase.json": firebaserc,
    "firestore.rules": firebaserc,
    "storage.rules": firebaserc,
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
function vo(o) {
    return `var(--cursor-${b2(o)})`;
}
function jo(o) {
    const r = (o.split(/[/\\]/u).pop() ?? o).toLowerCase();
    const a = Po[r];
    if (a !== undefined) {
        return a;
    }
    if (r.startsWith(".")) {
        const c = r.slice(1).split(".", 1)[0];
        if (c && Object.hasOwn(y, c)) {
            return y[c] ?? y.default;
        }
    }
    const n = r.split(".");
    for(let c = 1; c < n.length; c++){
        const t = n.slice(c).join(".");
        if (Object.hasOwn(y, t)) {
            return y[t] ?? y.default;
        }
    }
    return y.default;
}
const BoContext = r_1.createContext(undefined);
function useFo(o = true) {
    const r = r_1.useContext(BoContext);
    if (r === undefined && !o) {
        throw new Error(X(7));
    }
    return r;
}
const K = r_1.forwardRef((r, a)=>{
    Reflect.set(K, "d", 3554620838);
    const { className, defaultPressed = false, disabled = false, form, onPressedChange, pressed, render, type, value, nativeButton = true, style, ...rest } = r;
    const m = Y(value || undefined);
    const l = useFo();
    const k = l?.value ?? [];
    const M = l ? undefined : defaultPressed;
    const disabled_1 = (disabled || l?.disabled) ?? false;
    const [u, h] = Z({
        controlled: l ? m !== undefined && k.indexOf(m) > -1 : pressed,
        default: M,
        name: "Toggle",
        state: "pressed"
    });
    const { getButtonProps, buttonRef } = $({
        disabled: disabled_1,
        native: nativeButton
    });
    const state = {
        disabled: disabled_1,
        pressed: u
    };
    const q = [
        buttonRef,
        a
    ];
    const props = [
        {
            "aria-pressed": u,
            onClick (Z) {
                const R = !u;
                const b = a2(a3, Z.nativeEvent);
                onPressedChange?.(R, b);
                !b.isCanceled && (m && l?.setGroupValue?.(m, R, b), !b.isCanceled && h(R));
            }
        },
        rest,
        getButtonProps
    ];
    const V = a0("button", r, {
        enabled: !l,
        state,
        ref: q,
        props
    });
    const metadata = r_1.useMemo(()=>({
            disabled: disabled_1,
            focusableWhenDisabled: false
        }), [
        disabled_1
    ]);
    if (l) {
        return <Eo tag="button" render={render} className={className} style={style} metadata={metadata} state={state} refs={q} props={props}/>;
    }
    return V;
});
function LComponent(o, variant, size, rootStyle) {
    if (typeof o === "string") {
        return <W aria-hidden="true" name={o} rootStyle={rootStyle} size={size} variant={variant}/>;
    }
    return <span {...bp(size)} aria-hidden="true">{o}</span>;
}
function UComponent({ icon, pressedIcon, pressed, iconVariant, iconSize, iconStyle }) {
    UComponent.d = 2420686799;
    return <span className="ui-rvj5dj ui-6s0dn4 ui-1o2pa38 ui-c8icb0 ui-47corl ui-1heor9g" aria-hidden="true"><span className="ui-1ms6mhf ui-gkxs2y ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1g0ag68 ui-g01cxk ui-6rycqq ui-fimr68 ui-1owdx9d ui-tea3wc ui-1qzdkne ui-nejef0 ui-4wkmsb ui-7pq1vu ui-6ekqhr" data-swap-active={!pressed || undefined}>{LComponent(icon, iconVariant, iconSize, iconStyle)}</span><span className="ui-1ms6mhf ui-gkxs2y ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1g0ag68 ui-g01cxk ui-6rycqq ui-fimr68 ui-1owdx9d ui-tea3wc ui-1qzdkne ui-nejef0 ui-4wkmsb ui-7pq1vu ui-6ekqhr" data-swap-active={pressed || undefined}>{LComponent(pressedIcon, iconVariant, iconSize, iconStyle)}</span></span>;
}
function PoComponent({ icon, pressedIcon = icon, iconVariant = "outline", variant, rounded, frame = "container", size, iconSize, tone, rootStyle, iconStyle, disabled, "aria-label": aria_label, "aria-labelledby": aria_labelledby, ...rest }) {
    PoComponent.d = 766618489;
    const enforced = b4();
    const { size: size_1, innerIconSize, disabled: disabled_1, variant: variant_1, tone: tone_1 } = bn({
        disabled,
        enforced,
        iconSize,
        size,
        tone,
        variant
    });
    const h = bo({
        enforcedRootStyle: enforced?.iconButtonRootStyle,
        frame,
        rootStyle,
        rounded,
        size: size_1,
        tone: tone_1,
        variant: variant_1
    });
    return <K {...rest} className={b5("ui-icon-button", h.rootAttrs.className)} style={h.rootAttrs.style} {...h.dataAttrs} aria-label={aria_label} aria-labelledby={aria_labelledby} data-component="toggle-icon-button" disabled={disabled_1} render={(_, T)=><button {..._} data-pressed={undefined}><UComponent icon={icon} iconSize={innerIconSize} iconStyle={[
            enforced?.iconButtonIconStyle,
            iconStyle
        ]} iconVariant={iconVariant} pressed={T.pressed} pressedIcon={pressedIcon}/></button>}/>;
}
export { PoComponent as T, jo as g, vo as s };
