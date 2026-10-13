import { g as g_1, c, r } from "./chunk-shiki-token-cache-hLYN1QGX.js";
import { r as r_1, p, _ } from "./index.eager-vendor-Qbf9YA6n.js";
import { b8, b5, b9, ba, bb, bc, bd, a_ as Ie } from "./index.eager-platform-Dcfeegfw.js";
import { g as g_2, s, T as T_1 } from "./chunk-ToggleIconButton-DDH2e1NR.js";
import { r as r_2 } from "./chunk-get-file-icon-ZAkFyGfn.js";
import { W } from "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./index.eager-app-Cj5f8Gby.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "7f108c27-5a37-4005-9b57-06f717acc1df";
            e._sentryDebugIdIdentifier = "sentry-dbid-7f108c27-5a37-4005-9b57-06f717acc1df";
        }
    } catch (e) {}
})();
const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = [
    "./chunk-DefaultCode-CGxOfvcH.js",
    "./index.eager-vendor-Qbf9YA6n.js",
    "./index.eager-platform-Dcfeegfw.js",
    "./index.eager-common-CdCvBQNJ.js",
    "./chunk-shiki-token-cache-hLYN1QGX.js",
    "./chunk-index-C0dBjfzC.js"
]))=>i.map((i)=>d[i]);
const Ee = "seti";
const FeContext = r_1.createContext(Ee);
function useTe() {
    return r_1.useContext(FeContext);
}
const se = "base";
const h = {
    base: {
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        khiITx: "ui-j26tf6",
        kTUp5R: "ui-bleps",
        kMv6JI: "ui-1qtuznc",
        kKX8nH: "ui-1j61x8r",
        k63SB2: "ui-1fcty0u",
        kLWn49: "ui-o5v014",
        kXLuUW: "ui-xymvpz",
        kzqmXN: "ui-1oai4fc",
        kZKoxP: "ui-higkf7",
        kGuDYH: "ui-1tachi3",
        "--icon-size": "ui-pyhgd6",
        "--seti-glyph-scale": "ui-1cpzp08",
        kgeoSG: "ui-fzk3lv",
        kHh9I5: "ui-xn505q",
        $$css: true
    },
    cursorIcon: {
        kMv6JI: "ui-1dgk36h",
        $$css: true
    },
    sizeXs: {
        kzqmXN: "ui-6jxa94",
        kZKoxP: "ui-1v9usgg",
        kGuDYH: "ui-if65rj",
        kHh9I5: "ui-hm1o90",
        $$css: true
    },
    sizeSm: {
        kzqmXN: "ui-1kky2od",
        kZKoxP: "ui-lup9mm",
        kGuDYH: "ui-1j61zf2",
        kHh9I5: "ui-4pprgf",
        $$css: true
    },
    sizeBase: {
        kzqmXN: "ui-w4jnvo",
        kZKoxP: "ui-1qx5ct2",
        kGuDYH: "ui-wsyq91",
        kHh9I5: "ui-b7h94w",
        $$css: true
    },
    sizeLg: {
        kzqmXN: "ui-17z2i9w",
        kZKoxP: "ui-17rw0jw",
        kGuDYH: "ui-1i1m3gp",
        kHh9I5: "ui-ssash8",
        $$css: true
    },
    sizeXl: {
        kzqmXN: "ui-gd8bvy",
        kZKoxP: "ui-1fgtraw",
        kGuDYH: "ui-neq65o",
        kHh9I5: "ui-xf2evh",
        $$css: true
    }
};
function Le(size, e) {
    return [
        h.base,
        _e(size),
        e ? h.cursorIcon : null
    ];
}
function _e(size) {
    if (typeof size === "number") {
        return null;
    }
    switch(size){
        case "xs":
            return h.sizeXs;
        case "sm":
            return h.sizeSm;
        case "base":
            return h.sizeBase;
        case "lg":
            return h.sizeLg;
        case "xl":
            return h.sizeXl;
    }
}
function Ae({ name, size, extraClassName, rootStyle, style }) {
    const a = typeof size === "number";
    const i = g_2(name);
    const r = i.fontFamily === "cursor";
    const c = {
        "--seti-content": `"${i.char}"`,
        "--seti-glyph-scale": String(i.glyphScale ?? 1),
        color: s(i.semanticColor),
        ...a ? {
            "--icon-size": `${size}px`
        } : {},
        ...style ?? {}
    };
    const l = b8({
        rootClass: "ui-seti",
        stylexStyles: [
            Le(size, r),
            rootStyle
        ],
        className: b5(r ? "ui-seti--cursor-icon" : undefined, extraClassName),
        style: c
    });
    return {
        cssClass: l.className,
        style: l.style,
        dataSize: a ? undefined : size
    };
}
function Ie1Component({ name, size, className, rootStyle, title, "aria-label": aria_label, "aria-hidden": aria_hidden, style, ref }) {
    Ie1Component.d = 3533488892;
    const l = Ae({
        name,
        size: size ?? se,
        extraClassName: className,
        rootStyle,
        style
    });
    return <span aria-label={aria_label} aria-hidden={aria_hidden ?? (aria_label ? undefined : true)} role="img" ref={ref} className={l.cssClass} data-size={l.dataSize} style={l.style} title={title ?? aria_label}/>;
}
const Be = {
    xs: 10,
    sm: 12,
    base: 12,
    lg: 14,
    xl: 16
};
const De = {
    18: 10,
    20: 11
};
function Oe(size) {
    if (typeof size === "number") {
        return De[size] ?? size;
    }
    return Be[size ?? se];
}
function Te(fontSize) {
    const e = /^([\d.]+)em$/i.exec(fontSize.trim());
    return e !== null && Number.parseFloat(e[1]) > 1;
}
function He(color, style) {
    const { fontSize, ...rest } = style ?? {};
    const a = rest["--icon-size"] === "1em" && typeof fontSize === "string" && !Te(fontSize);
    return {
        ...rest,
        ...a ? {
            fontSize
        } : {},
        color: s(color)
    };
}
function AComponent({ name, variant, size, style, ...rest }) {
    AComponent.d = 1528846892;
    const a = useTe();
    const i = r_2({
        filenameOrExt: name,
        preferred: variant ?? a
    });
    if (i.variant === "seti") {
        return <Ie1Component {...rest} name={name} size={size} style={style}/>;
    }
    return <W {...rest} name={i.iconName} variant={i.style} size={Oe(size)} style={He(i.color, style)}/>;
}
function k(t) {
    const e = t.trim();
    if (e === "") {
        return;
    }
    const s = parseInt(e, 10);
    if (!Number.isNaN(s) && s.toString() === e && Number.isSafeInteger(s)) {
        return s;
    }
}
function E(t) {
    const e = t.lastIndexOf(".");
    if (e === -1) {
        return "";
    }
    return t.slice(e + 1);
}
function g(t, clickable) {
    const s = t.indexOf("!");
    if (s === -1) {
        return {
            value: t,
            clickable
        };
    }
    const n = t.slice(s + 1);
    return {
        value: t.slice(0, s),
        clickable: n === "citation" ? true : clickable
    };
}
function Re(t) {
    const [language, s, n, u] = t.map((l)=>l.trim());
    const a = k(s);
    const i = k(n);
    if (a === undefined || i === undefined) {
        return null;
    }
    const { value, clickable } = g(u, true);
    return {
        language,
        filePath: value,
        startLine: a,
        endLine: i,
        clickable
    };
}
function Me(t) {
    const [e, s, n] = t.map((i)=>i.trim());
    const u = k(e);
    const a = k(s);
    if (u !== undefined && a !== undefined) {
        const { value, clickable } = g(n, true);
        return {
            language: E(value),
            filePath: value,
            startLine: u,
            endLine: a,
            clickable
        };
    }
    if (s.includes("-")) {
        const i = s.split("-");
        if (i.length === 2) {
            const r = k(i[0]);
            const c = k(i[1]);
            if (r !== undefined && c !== undefined) {
                const { value, clickable } = g(n, true);
                return {
                    language: e,
                    filePath: value,
                    startLine: r,
                    endLine: c,
                    clickable
                };
            }
        }
    }
    return null;
}
function Xe(t) {
    const [e, s] = t.map((i)=>i.trim());
    if (e.includes("-")) {
        const i = e.split("-");
        if (i.length === 2) {
            const r = k(i[0]);
            const c = k(i[1]);
            if (r !== undefined && c !== undefined) {
                const { value: value_1, clickable: clickable_1 } = g(s, true);
                return {
                    language: E(value_1),
                    filePath: value_1,
                    startLine: r,
                    endLine: c,
                    clickable: clickable_1
                };
            }
        }
    }
    const n = k(e);
    if (n !== undefined) {
        const { value: value_1, clickable: clickable_1 } = g(s, true);
        return {
            language: E(value_1),
            filePath: value_1,
            startLine: n,
            endLine: n,
            clickable: clickable_1
        };
    }
    const { value, clickable } = g(s, false);
    return {
        language: e,
        filePath: value,
        clickable
    };
}
function We(t) {
    const e = t.split(":");
    let s = null;
    if (e.length === 4) {
        s = Re(e);
    } else if (e.length === 3) {
        s = Me(e);
    } else if (e.length === 2) {
        s = Xe(e);
    }
    if (s) {
        return {
            language: s.language,
            filePath: s.filePath,
            startLine: s.startLine,
            endLine: s.endLine,
            clickable: s.clickable
        };
    }
    return null;
}
function Ve(t) {
    const { value, clickable } = g(t, false);
    if (value.includes(".")) {
        return {
            language: E(value),
            filePath: value,
            startLine: undefined,
            endLine: undefined,
            clickable
        };
    }
    return {
        language: value,
        filePath: undefined,
        startLine: undefined,
        endLine: undefined,
        clickable
    };
}
export function parseFenceHeader(t) {
    const e = t ?? "";
    if (e.includes(":")) {
        const s = We(e);
        return s || {
            language: e,
            filePath: undefined,
            startLine: undefined,
            endLine: undefined,
            clickable: false
        };
    }
    return Ve(e);
}
const Ze = 120;
function Ge(tokenization, streaming, s, scheduleApply) {
    const u = streaming ? Ze : 0;
    switch(tokenization){
        case undefined:
            return {
                sync: !streaming,
                asyncDebounceMs: u
            };
        case "sync":
            return {
                tokenization: {
                    kind: "inline"
                }
            };
        case "async":
        case "worker":
            {
                if (streaming) {
                    return {
                        tokenization: {
                            kind: "worker",
                            debounceMs: u,
                            onRefusal: "plain"
                        }
                    };
                }
                const scheduleWarmup = tokenization === "worker" ? null : s;
                return {
                    tokenization: {
                        kind: "inline-when-warm",
                        ...scheduleWarmup === undefined ? {} : {
                            scheduleWarmup
                        },
                        ...scheduleApply === undefined ? {} : {
                            scheduleApply
                        }
                    }
                };
            }
    }
}
const ne = bb(()=>_(()=>import("./chunk-DefaultCode-CGxOfvcH.js"), __vite__mapDeps([
        0,
        1,
        2,
        3,
        4,
        5
    ]), import.meta.url), (t)=>t.DefaultCode);
const ne_Component = ne.Component;
export async function preloadDefaultCode() {
    await ne.preload();
}
const Ye = {
    base: {
        kVAEAm: "ui-1n2onr6",
        keoZOQ: "ui-1j66ri5 ui-14l7nz5",
        km5ZXQ: "ui-1yf7rl7",
        k1K539: "ui-t4zf8z ui-zboxd6",
        koQZXg: "ui-j3b58b",
        kIxVMA: "ui-1dcy8l4",
        ksF3WI: "ui-1upd4za",
        kqGeR4: "ui-3n1r3t",
        kYm2EN: "ui-1d76mj",
        kEafiO: "ui-178xt8z",
        kPef9Z: "ui-13fuv20",
        kLZC3w: "ui-u6elxy",
        kWqL5O: "ui-s1s249",
        kSWEuD: "ui-32b0ac",
        k26BEO: "ui-r3jcmw",
        kt9PQ7: "ui-so031l",
        kfdmCh: "ui-1q0q8m5",
        kL6WhQ: "ui-8daab9",
        kZ1KPB: "ui-e0pwq",
        k4WBpm: "ui-19ypqd9",
        kaZRDh: "ui-18ajz7i",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        kWkggS: "ui-1ua6jya",
        $$css: true
    }
};
const OeContext = r_1.createContext("plain");
OeContext.Provider;
function Ae1Component({ code, className, showLineNumbers = false, startLine = 1, style, tokens, wordWrap = false }) {
    Ae1Component.d = 2822910204;
    const c = r_1.useContext(OeContext) === "markdown-flow";
    const l = {
        0: {
            className: "ui-1wm8ruf ui-1lfj9qp ui-1ja60sm ui-13r5tfd ui-o9w7m5 ui-lgbajd"
        },
        1: {
            className: "ui-1wm8ruf ui-1lfj9qp ui-1ja60sm ui-13r5tfd ui-o9w7m5 ui-lgbajd ui-uve7l6 ui-1xpa7k ui-1rgtt3y ui-1uhho1l"
        }
    }[(!c || tokens !== undefined) << 0];
    const m = {
        0: {
            className: "ui-1ghz6dp ui-1heor9g ui-jb2p0i ui-1qlqyl8 ui-15bjb6t ui-1sdyfia ui-16b7oty ui-wp9v23"
        },
        2: {
            className: "ui-1ghz6dp ui-1heor9g ui-jb2p0i ui-1qlqyl8 ui-15bjb6t ui-1sdyfia ui-1q57ora ui-33uob6 ui-saxbkt ui-79ra4s ui-1043rbw ui-i07v4r ui-w2csxc"
        },
        1: {
            className: "ui-1ghz6dp ui-1heor9g ui-jb2p0i ui-1qlqyl8 ui-15bjb6t ui-16b7oty ui-wp9v23 ui-126k92a ui-j0a0fe"
        },
        3: {
            className: "ui-1ghz6dp ui-1heor9g ui-jb2p0i ui-1qlqyl8 ui-15bjb6t ui-1q57ora ui-33uob6 ui-saxbkt ui-79ra4s ui-1043rbw ui-i07v4r ui-w2csxc ui-126k92a ui-j0a0fe"
        }
    }[!!c << 1 | !!wordWrap << 0];
    const className_1 = `ui-default-code${className ? ` ${className}` : ""}${l.className ? ` ${l.className}` : ""}`;
    const v = {
        ...l.style,
        ...style
    };
    if (tokens !== undefined) {
        const j = {
            className: "ui-13r5tfd"
        };
        const z = {
            className: "ui-78zum5 ui-10fesj9"
        };
        const C = {
            className: "ui-1264ykn ui-1jkygx ui-4b2ntj ui-y5h43f ui-1hr2gdg ui-87ps6o ui-2lah0s"
        };
        const I = {
            0: {
                className: "ui-1iyjqo2 ui-16b7oty ui-o7x2bt ui-1sdyfia"
            },
            1: {
                className: "ui-1iyjqo2 ui-16b7oty ui-o7x2bt ui-euugli ui-126k92a ui-j0a0fe"
            }
        }[!!wordWrap << 0];
        return <div className={className_1} style={v}><div className={j.className} style={j.style}>{tokens.map((F, f)=><div key={startLine + f} className={`ui-default-code__line ${z.className}`} style={z.style}>{showLineNumbers ? <span className={C.className} style={C.style}>{startLine + f}</span> : null}<div className={`ui-default-code__line-content ${I.className}`} style={I.style}>{F.map((y)=><span key={y.col} className={y.className} style={{
                    color: y.color,
                    ...g_1(y.fontStyle)
                }}>{y.content}</span>)}</div></div>)}</div></div>;
    }
    return <div className={className_1} style={v}><pre className={m.className} style={m.style}>{code}</pre></div>;
}
const Q = {
    base: {
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kOIVth: "ui-pkkfsy",
        kLKAdn: "ui-uve7l6",
        kpe85a: "ui-1jwyyqy",
        kGO01o: "ui-1rgtt3y",
        kE3dHu: "ui-437fdo",
        kWkggS: "ui-1ua6jya ui-1iuyybk",
        kEafiO: "ui-972fbf",
        kPef9Z: "ui-1ejq31n",
        kWqL5O: "ui-gfja2r",
        kSWEuD: "ui-11pwa6s",
        kt9PQ7: "ui-so031l",
        kfdmCh: "ui-1q0q8m5",
        kL6WhQ: "ui-17fyfba",
        kZ1KPB: "ui-yj58a3",
        k4WBpm: "ui-1b16gh4",
        kzqmXN: "ui-h8yej3",
        k9WMMc: "ui-dpxx8g",
        kMv6JI: "ui-jb2p0i",
        kGuDYH: "ui-1qlqyl8",
        kKX8nH: "ui-1t35e8",
        k63SB2: "ui-1pd3egz",
        kLWn49: "ui-15bjb6t",
        kMwMTN: "ui-1heor9g",
        kB7OPa: "ui-9f619",
        k7Eaqz: "ui-euugli",
        k1ekBW: "ui-15406qy",
        kIyJzY: "ui-1g2r6go",
        kAMwcw: "ui-z4gly6",
        kMeerF: "ui-1k57tk5 ui-1l9t207 ui-1x65lqo",
        k3XXqK: "ui-1t137rt ui-hlp2gg ui-i5y0ii",
        $$css: true
    },
    clickable: {
        kkrTdU: "ui-1ypdohk",
        $$css: true
    }
};
const Ue = {
    base: {
        kMwMTN: "ui-19aaqeu",
        khDVqt: "ui-uxw1ft",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        kg5iWk: "ui-lyipyv",
        $$css: true
    }
};
const Qe = {
    base: {
        kMwMTN: "ui-4b2ntj",
        khDVqt: "ui-uxw1ft",
        kmuXW: "ui-2lah0s",
        $$css: true
    }
};
const Je = {
    base: {
        kVAEAm: "ui-1n2onr6",
        $$css: true
    }
};
const J = {
    wordWrap: {
        kzqmXN: "ui-h8yej3",
        k7Eaqz: "ui-euugli",
        ks0D6T: "ui-193iq5w",
        $$css: true
    },
    horizontal: {
        kzqmXN: "ui-ezivpi",
        k7Eaqz: "ui-gqtt45",
        ks0D6T: "ui-1x1rfll",
        $$css: true
    }
};
const et = {
    base: {
        kVAEAm: "ui-10l6tqk",
        k87sOh: "ui-8hg36d",
        kCIrl2: "ui-7zl9wm",
        kY2c9j: "ui-1n327nk",
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kSiTet: "ui-g01cxk ui-87vcqg ui-1euntei ui-1npyufz",
        $$css: true
    }
};
const B = {
    base: {
        k1xSpc: "ui-78zum5",
        $$css: true
    },
    copied: {
        kMwMTN: "ui-1w5rjie",
        $$css: true
    },
    plate: {
        kWkggS: "ui-1ua6jya",
        $$css: true
    }
};
function tt() {
    return [
        {
            "ui--default-marker": "ui--default-marker",
            $$css: true
        },
        Ye.base
    ];
}
function st(t) {
    return [
        Q.base,
        t ? Q.clickable : null
    ];
}
function it() {
    return [
        bc.root,
        Ue.base
    ];
}
function nt() {
    return [
        bd.root,
        Qe.base
    ];
}
function ot() {
    return Je.base;
}
function at() {
    return et.base;
}
function ut(t) {
    return [
        B.base,
        t ? B.copied : null
    ];
}
function rt() {
    return B.plate;
}
const lt = {
    backgroundColor: "transparent",
    minHeight: 0,
    width: "max-content",
    minWidth: "100%"
};
const ct = {
    backgroundColor: "transparent",
    minHeight: 0,
    width: "100%",
    minWidth: 0
};
function dt(filePath) {
    const e = filePath.lastIndexOf(".");
    if (e === -1) {
        return "";
    }
    return filePath.slice(e + 1);
}
function kt(filePath) {
    const e = Math.max(filePath.lastIndexOf("/"), filePath.lastIndexOf("\\"));
    if (e === -1) {
        return filePath;
    }
    return filePath.slice(e + 1);
}
export function CodeBlock({ children, className, filePath, startLine, endLine, onHeaderClick, onHeaderContextMenu, copyText, copyButtonSize = "sm", showLineNumbers = false, showIndentGuides = true, scrollable = true, scrollMaxHeight, tokens, streaming, tokenization, scheduleWarmup, scheduleApply, wordWrap = false, viewport, style, ...rest }) {
    CodeBlock.d = 3011081172;
    const le = useTe();
    const ceRef = r_1.useRef(null);
    const [N, setN] = r_1.useState(false);
    const LRef = r_1.useRef(undefined);
    r_1.useEffect(()=>()=>clearTimeout(LRef.current), []);
    let q = "text";
    if (className) {
        const p = className.match(/language-(\S+)/);
        if (p) {
            q = p[1];
        }
    }
    if (filePath && q === "text") {
        const p = dt(filePath);
        if (p) {
            q = p;
        }
    }
    const code_1 = typeof children === "string" ? children.replace(/\n$/, "") : "";
    const O = `calc(${code_1 ? code_1.split(`
`).length : 0} * ${b9["--cursor-line-height-base"]} + 2 * ${ba["--cursor-spacing-1-5"]})`;
    const $ = scrollMaxHeight !== undefined;
    const de = r_1.useCallback(()=>{
        clearTimeout(LRef.current);
        setN(true);
        copyText?.(code_1);
        LRef.current = setTimeout(()=>setN(false), 2000);
    }, [
        code_1,
        copyText
    ]);
    const onClick = ()=>{
        if (onHeaderClick) {
            onHeaderClick();
        }
    };
    const P = !!filePath;
    const me = P || $ ? undefined : O;
    const fe = $ ? undefined : O;
    const ye = startLine !== undefined && endLine !== undefined && startLine > 0 && endLine > 0;
    const T = P && !!onHeaderClick;
    const _ = filePath ? kt(filePath) : "";
    if (!code_1) {
        return <code className={className}>{children}</code>;
    }
    const H = b8({
        rootClass: "ui-code-block",
        stylexStyles: tt(),
        style: {
            minHeight: me,
            ...style
        }
    });
    const w = b8({
        rootClass: "ui-code-block-header",
        stylexStyles: st(T)
    });
    const R = p(it());
    const M = p(nt());
    const X = b8({
        rootClass: "ui-code-block-content",
        stylexStyles: ot(),
        style: {
            minHeight: fe
        }
    });
    const W = b8({
        rootClass: "ui-code-block-copy-overlay",
        stylexStyles: at()
    });
    const V = b8({
        rootClass: "ui-code-block-copy",
        stylexStyles: ut(N)
    });
    const Z = <>{le === "seti" ? <AComponent name={_} size="sm"/> : <span className="ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1pwdyn5 ui-1vatr1o ui-2lah0s"><AComponent name={_} size="sm"/></span>}<span className={R.className} style={R.style}>{_}</span>{ye && <span className={M.className} style={M.style}>Ln {startLine}–{endLine}</span>}</>;
    const pe = copyText ? <div className={W.className} style={W.style}><div className={V.className} data-copied={N || undefined} style={V.style}><T_1 aria-label={N ? "Copied" : "Copy code"} tone={N ? "success" : undefined} icon="copy" onPressedChange={(p)=>{
        if (p) {
            de();
        }
    }} pressed={N} pressedIcon="check" rootStyle={rt()} size={copyButtonSize} variant="outline"/></div></div> : null;
    const he = P ? T ? <button type="button" className={w.className} style={w.style} data-clickable onClick={onClick} onContextMenu={onHeaderContextMenu}>{Z}</button> : <div className={w.className} style={w.style} onContextMenu={onHeaderContextMenu}>{Z}</div> : null;
    const G = {
        code: code_1,
        language: q,
        startLine: startLine ?? 1,
        showLineNumbers,
        showIndentGuides,
        tokens,
        ...Ge(tokenization, streaming, scheduleWarmup, scheduleApply),
        className: "ui-code-block-default-code",
        style: wordWrap ? ct : lt,
        wordWrap,
        viewport
    };
    const K = <r_1.Suspense fallback=<Ae1Component {...G}/>><ne_Component {...G}/></r_1.Suspense>;
    const direction = wordWrap ? "vertical" : $ ? "both" : "horizontal";
    const ge = scrollable && (!wordWrap || $) ? <Ie direction={direction} scrollbarVisibility="hover" maxHeight={scrollMaxHeight} contentStyle={wordWrap ? J.wordWrap : direction === "horizontal" ? J.horizontal : undefined}>{K}</Ie> : K;
    return <div ref={ceRef} className={H.className} data-has-header={P || undefined} style={H.style} {...rest}>{he}<div className={X.className} style={X.style}>{pe}{ge}</div></div>;
}
export { c as clearTokenCache, r as readCachedTokens };
