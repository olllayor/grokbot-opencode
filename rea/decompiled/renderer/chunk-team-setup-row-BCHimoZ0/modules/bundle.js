import { c as c_1, r as r_1, j, T as T_1, p as p_1, u as u_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { af, dG, b0 as Y, b9, aK, aI as Ne } from "./index.eager-app-Cj5f8Gby.js";
import { u as u_2 } from "./index.eager-platform-Dcfeegfw.js";
import { at, z as Ce1, I as I_1, p as _e } from "./index-ZYxf-aBb.js";
import { T as T_2, b as Me1, a as Re } from "./chunk-team-setup-pills-7uDu4vf1.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "a7306970-94a3-4bdb-b7b7-ea0c14b14544";
            e._sentryDebugIdIdentifier = "sentry-dbid-a7306970-94a3-4bdb-b7b7-ea0c14b14544";
        }
    } catch (e) {}
})();
const oe = Number.parseFloat(dG.cardToggleFadeDuration);
const xe = Number.parseFloat(dG.cardToggleFadeInDuration);
const dG_cardToggleResizeEasing = dG.cardToggleResizeEasing;
const resizeMs = Number.parseFloat(dG.cardToggleDuration);
const Ce = Number.parseFloat(dG.cardCollapseDuration);
function ge(l) {
    const { box, content, fromPx, toPx, delayMs, durationMs } = l;
    const r = box.animate({
        height: [
            `${fromPx}px`,
            `${toPx}px`
        ]
    }, {
        duration: durationMs,
        delay: delayMs,
        easing: dG_cardToggleResizeEasing,
        fill: "backwards"
    });
    r.onfinish = ()=>{
        const content_offsetHeight = content.offsetHeight;
        if (content_offsetHeight !== toPx) {
            ge({
                ...l,
                fromPx: toPx,
                toPx: content_offsetHeight,
                delayMs: 0
            });
        }
    };
}
const JeContext = r_1.createContext(null);
function useEe() {
    return r_1.useContext(JeContext);
}
function Ie(l, { boxRect, rects }) {
    const n = rects.get(l) ?? l.getBoundingClientRect();
    if (n.height === 0) {
        return null;
    }
    const t = Number.parseFloat(getComputedStyle(l).opacity);
    const opacity = Number.isNaN(t) ? 1 : t;
    if (opacity === 0) {
        return null;
    }
    const node = l.cloneNode(true);
    if (!(node instanceof HTMLElement)) {
        throw new TypeError("cloned card body is not an element");
    }
    for (const r of node.querySelectorAll("[id]")){
        r.removeAttribute("id");
    }
    node.removeAttribute("id");
    node.setAttribute("aria-hidden", "true");
    node.inert = true;
    return {
        node,
        topPx: n.top - boxRect.top,
        leftPx: n.left - boxRect.left,
        widthPx: n.width,
        opacity
    };
}
function Ae(iRef_current, { node, topPx, leftPx, widthPx, opacity }) {
    Object.assign(node.style, {
        position: "absolute",
        top: `${topPx}px`,
        left: `${leftPx}px`,
        width: `${widthPx}px`,
        margin: "0",
        pointerEvents: "none"
    });
    iRef_current.append(node);
    const d = node.animate({
        opacity: [
            opacity,
            0
        ]
    }, {
        duration: oe,
        easing: "ease-in",
        fill: "forwards"
    });
    const r = ()=>node.remove();
    d.onfinish = r;
    d.oncancel = r;
}
function Pe(l, top, delayMs, duration) {
    const t = top - l.getBoundingClientRect().top;
    if (t !== 0) {
        l.animate({
            transform: [
                `translateY(${t}px)`,
                "translateY(0)"
            ]
        }, {
            duration,
            delay: delayMs,
            easing: dG_cardToggleResizeEasing,
            fill: "backwards"
        });
    }
}
function De(l, delay) {
    l.animate({
        opacity: [
            0,
            1
        ]
    }, {
        duration: xe,
        delay,
        easing: "ease-out",
        fill: "backwards"
    });
}
function FeComponent(l) {
    FeComponent.d = 543;
    const e = c_1.c(24);
    const { children, isFlush } = l;
    const t = isFlush === undefined ? false : isFlush;
    const iRef = r_1.useRef(null);
    const dRef = r_1.useRef(null);
    const rRef = r_1.useRef(null);
    let h;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        h = [];
        e[0] = h;
    } else {
        h = e[0];
    }
    const pRef = r_1.useRef(h);
    let x;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        x = [];
        e[1] = x;
    } else {
        x = e[1];
    }
    const yRef = r_1.useRef(x);
    let o;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        o = new Set;
        e[2] = o;
    } else {
        o = e[2];
    }
    const fRef = r_1.useRef(o);
    let k;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        k = new Set;
        e[3] = k;
    } else {
        k = e[3];
    }
    const mRef = r_1.useRef(k);
    const bRef = r_1.useRef(null);
    let u;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        u = {
            resizeAtMs: Number.NEGATIVE_INFINITY,
            enterAtMs: Number.NEGATIVE_INFINITY,
            resizeMs
        };
        e[4] = u;
    } else {
        u = e[4];
    }
    const vRef = r_1.useRef(u);
    let g;
    if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
        g = ()=>(c)=>{
                dRef.current = c;
                const z = new ResizeObserver(()=>{
                    rRef.current = c.offsetHeight;
                });
                z.observe(c);
                return ()=>{
                    z.disconnect();
                    dRef.current = null;
                };
            };
        e[5] = g;
    } else {
        g = e[5];
    }
    const [J] = r_1.useState(g);
    let U;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        U = ()=>({
                enter: (c)=>{
                    yRef.current.push(c);
                    mRef.current.add(c);
                },
                retire: (c)=>{
                    const iRef_current = iRef.current;
                    if (iRef_current === null || af()) {
                        mRef.current.delete(c);
                        return;
                    }
                    const C = bRef.current ?? {
                        boxRect: iRef_current.getBoundingClientRect(),
                        rects: new Map([
                            ...mRef.current,
                            ...fRef.current
                        ].map(Oe))
                    };
                    bRef.current = C;
                    mRef.current.delete(c);
                    const q = Ie(c, C);
                    if (q !== null) {
                        pRef.current.push(q);
                    }
                },
                pin: (c)=>{
                    fRef.current.add(c);
                    return ()=>{
                        fRef.current.delete(c);
                    };
                }
            });
        e[6] = U;
    } else {
        U = e[6];
    }
    const [X] = r_1.useState(U);
    let L;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        L = ()=>{
            const iRef_current = iRef.current;
            const dRef_current = dRef.current;
            const pRef_current = pRef.current;
            const yRef_current = yRef.current;
            const bRef_current = bRef.current;
            pRef.current = [];
            yRef.current = [];
            bRef.current = null;
            if (iRef_current === null || dRef_current === null) {
                return;
            }
            const z_offsetHeight = dRef_current.offsetHeight;
            const E = rRef.current ?? z_offsetHeight;
            rRef.current = z_offsetHeight;
            const I = performance.now();
            const vRef_current = vRef.current;
            const F = pRef_current.length > 0;
            const G = !F && vRef_current.resizeAtMs + vRef_current.resizeMs > I;
            const H = z_offsetHeight < E ? Ce : resizeMs;
            const A = G ? vRef_current.resizeMs : H;
            for (const _ of pRef_current){
                Ae(iRef_current, _);
            }
            const delayMs = F ? oe : Math.max(0, vRef_current.resizeAtMs - I);
            const O = E !== z_offsetHeight && !af();
            if (O) {
                const _ = iRef_current.getAnimations();
                const fromPx = _.length === 0 ? E : iRef_current.offsetHeight;
                for (const ee of _){
                    ee.cancel();
                }
                ge({
                    box: iRef_current,
                    content: dRef_current,
                    fromPx,
                    toPx: z_offsetHeight,
                    delayMs,
                    durationMs: A
                });
            }
            let Z = vRef_current.enterAtMs - I;
            if (F) {
                for (const _ of fRef.current){
                    const K = bRef_current?.rects.get(_);
                    if (K !== undefined && _.isConnected) {
                        Pe(_, K.top, delayMs, A);
                    }
                }
                Z = O ? delayMs + A : oe;
                vRef.current = {
                    resizeAtMs: I + delayMs,
                    enterAtMs: I + Z,
                    resizeMs: A
                };
            } else {
                if (O && G) {
                    Z = Math.max(Z, delayMs + A);
                    vRef.current = {
                        ...vRef_current,
                        resizeAtMs: I + delayMs,
                        enterAtMs: I + Z
                    };
                }
            }
            if (!(Z <= -xe)) {
                for (const _ of yRef_current){
                    if (_.isConnected) {
                        De(_, Z);
                    }
                }
            }
        };
        e[7] = L;
    } else {
        L = e[7];
    }
    u_2(L);
    let V;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        V = {
            className: "sand-1n2onr6 sand-h8yej3 sand-euugli sand-7giv3 sand-gqmno8"
        };
        e[8] = V;
    } else {
        V = e[8];
    }
    let w;
    if (e[9] !== t) {
        w = ({
            0: {
                className: "sand-10l6tqk sand-fr5jun sand-1ey2m1c sand-1o0tod sand-tijo5x sand-gqmno8 sand-18rdzox"
            },
            1: {
                className: "sand-10l6tqk sand-1ey2m1c sand-1o0tod sand-tijo5x sand-gqmno8 sand-18rdzox sand-13vifvy"
            }
        })[!!t << 0];
        e[9] = t;
        e[10] = w;
    } else {
        w = e[10];
    }
    let S;
    if (e[11] !== w) {
        S = <div {...w}/>;
        e[11] = w;
        e[12] = S;
    } else {
        S = e[12];
    }
    let T;
    if (e[13] !== t) {
        T = ({
            0: {
                className: "sand-1n2onr6 sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-h8yej3 sand-euugli sand-1y1aw1k sand-l6bsgv"
            },
            1: {
                className: "sand-1n2onr6 sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-h8yej3 sand-euugli sand-exx8yu"
            }
        })[!!t << 0];
        e[13] = t;
        e[14] = T;
    } else {
        T = e[14];
    }
    let N;
    if (e[15] !== children || e[16] !== T) {
        N = <div ref={J} {...T}>{children}</div>;
        e[15] = children;
        e[16] = T;
        e[17] = N;
    } else {
        N = e[17];
    }
    let M;
    if (e[18] !== S || e[19] !== N) {
        M = <div ref={iRef} {...V}>{S}{N}</div>;
        e[18] = S;
        e[19] = N;
        e[20] = M;
    } else {
        M = e[20];
    }
    let Q;
    if (e[21] !== X || e[22] !== M) {
        Q = <JeContext.Provider value={X}>{M}</JeContext.Provider>;
        e[21] = X;
        e[22] = M;
        e[23] = Q;
    } else {
        Q = e[23];
    }
    return Q;
}
function Oe(l) {
    return [
        l,
        l.getBoundingClientRect()
    ];
}
const Be = {
    pill: {
        k1xSpc: "sand-3nfvp2",
        kGNEyG: "sand-6s0dn4",
        kmuXW: "sand-2lah0s",
        kB7OPa: "sand-9f619",
        kZKoxP: "sand-1qx5ct2",
        kg3NbH: "sand-1xijbu4",
        kMzoRj: "sand-qjedn3",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-q03nf1",
        kaIpWk: "sand-1q4ynmn",
        kMwMTN: "sand-1o0liin",
        kcqcaj: "sand-ss6m8b",
        khDVqt: "sand-uxw1ft",
        $$css: true
    }
};
const We = {
    step: null,
    isChained: false,
    subtitle: null
};
const BeContext = r_1.createContext(We);
function GeComponent(l) {
    GeComponent.d = 545;
    const e = c_1.c(3);
    const { value, children } = l;
    let t;
    if (e[0] !== children || e[1] !== value) {
        t = <BeContext.Provider value={value}>{children}</BeContext.Provider>;
        e[0] = children;
        e[1] = value;
        e[2] = t;
    } else {
        t = e[2];
    }
    return t;
}
function useHe() {
    return r_1.useContext(BeContext);
}
function Ve1Component(l) {
    Ve1Component.d = 544;
    const e = c_1.c(3);
    const { step } = l;
    const { index, total } = step;
    let i;
    if (e[0] !== index || e[1] !== total) {
        i = <Y level="caption" style={Be.pill}><T_1 id="5NPPVh" values={{
            index,
            total
        }}/></Y>;
        e[0] = index;
        e[1] = total;
        e[2] = i;
    } else {
        i = e[2];
    }
    return i;
}
function FsComponent(l) {
    switch(l){
        case "plugins":
            return <T_1 id="jmdA1+"/>;
        case "secrets":
            return <T_1 id="xukzm8"/>;
        case "skills":
            return <T_1 id="9tYDtC"/>;
        case "memories":
            return <T_1 id="mcwGjI"/>;
        case "automations":
            return null;
        case "files":
            return <T_1 id="ekbQpC"/>;
    }
}
const Le = 12;
const ms = 24;
const hs = 20;
const $ = {
    headerRow: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-1cy8zhl",
        kOIVth: "sand-17d4w8g",
        $$css: true
    },
    headerButton: {
        kzqmXN: "sand-h8yej3",
        kogj98: "sand-1ghz6dp",
        kmVPX3: "sand-1717udv",
        ksu8eU: "sand-ng3xce",
        kaIpWk: "sand-t9pb60",
        kWkggS: "sand-jbqb8w",
        kMwMTN: "sand-1heor9g",
        kVVagm: "sand-ln7xf2",
        k9WMMc: "sand-1yc453h",
        kkrTdU: "sand-1ypdohk",
        $$css: true
    },
    headerButtonOpen: {
        kkrTdU: "sand-t0e3qv",
        $$css: true
    },
    subtitle: {
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    bodyText: {
        kLWn49: "sand-1rlwhtf",
        $$css: true
    },
    summaryText: {
        kzQI83: "sand-1iyjqo2",
        kCS8Yb: "sand-1r8uery",
        k7Eaqz: "sand-euugli",
        $$css: true
    },
    sectionTitle: {
        kGO01o: "sand-jkvuk6",
        kZCmMZ: "sand-mzvs34",
        kwRFfy: "sand-f159sx",
        $$css: true
    },
    sectionEmpty: {
        kLKAdn: "sand-1yrsyyn",
        kGO01o: "sand-10b6aqq",
        kZCmMZ: "sand-mzvs34",
        kwRFfy: "sand-f159sx",
        kMwMTN: "sand-169k319",
        $$css: true
    },
    rowTitle: {
        kmuXW: "sand-2lah0s",
        ks0D6T: "sand-h9uqaf",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        $$css: true
    },
    rowTitleStacked: {
        ks0D6T: "sand-193iq5w",
        $$css: true
    },
    rowReasonStacked: {
        ks0D6T: "sand-193iq5w",
        $$css: true
    },
    rowReason: {
        kzQI83: "sand-1iyjqo2",
        k7Eaqz: "sand-euugli",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        kMwMTN: "sand-169k319",
        $$css: true
    },
    detailText: {
        kskxy: "sand-1hkcv85",
        kORKVm: "sand-1odjw0f",
        khDVqt: "sand-126k92a",
        kHjlTd: "sand-j0a0fe",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    expand: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kjj79g: "sand-l56j7k",
        kmuXW: "sand-2lah0s",
        kzqmXN: "sand-vy4d1p",
        kZKoxP: "sand-xk0z11",
        kmVPX3: "sand-1717udv",
        ksu8eU: "sand-ng3xce",
        kaIpWk: "sand-t9pb60",
        kWkggS: "sand-jbqb8w",
        kMwMTN: "sand-169k319",
        kkrTdU: "sand-1ypdohk",
        $$css: true
    },
    footerRow: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kjj79g: "sand-1nhvcw1",
        kB7OPa: "sand-9f619",
        kzqmXN: "sand-h8yej3",
        kAzted: "sand-u0aao5",
        kLKAdn: "sand-96k8nx",
        kGO01o: "sand-dvlbce",
        kZCmMZ: "sand-mzvs34",
        kwRFfy: "sand-f159sx",
        ksu8eU: "sand-ng3xce",
        kaIpWk: "sand-1qmwy7c",
        kWkggS: "sand-jbqb8w sand-1r8pydn",
        kMwMTN: "sand-169k319",
        kMv6JI: "sand-jb2p0i",
        k9WMMc: "sand-1yc453h",
        kkrTdU: "sand-1ypdohk",
        $$css: true
    },
    footerRowAfterIcon: {
        kZCmMZ: "sand-tssl2i",
        $$css: true
    },
    primaryButton: {
        k7Eaqz: "sand-wrg52n",
        $$css: true
    },
    note: {
        kMwMTN: "sand-1o0liin",
        $$css: true
    }
};
const Se = {
    className: "sand-78zum5 sand-dt5ytf sand-1ghz6dp sand-1717udv sand-e8uvvx"
};
function Ve() {
    const l = c_1.c(2);
    const s = b9("sand_chat_prose_15px") && at.proseFontSize;
    let n;
    if (l[0] !== s) {
        n = [
            $.bodyText,
            s
        ];
        l[0] = s;
        l[1] = n;
    } else {
        n = l[1];
    }
    return n;
}
function Ze1Component(l) {
    Ze1Component.d = 530;
    const e = c_1.c(52);
    const { titleId, title, subtitle, isExpanded, onExpand, summary, isSummaryPending, details, children, trailing } = l;
    const o = isExpanded === undefined ? true : isExpanded;
    const f = summary === undefined ? null : summary;
    const k = isSummaryPending === undefined ? false : isSummaryPending;
    const m = details === undefined ? null : details;
    const b = children === undefined ? null : children;
    const u = trailing === undefined ? null : trailing;
    const v = useEe();
    const g = Ve();
    const J = useHe();
    const U = J.subtitle ?? subtitle;
    let X;
    if (e[0] !== v) {
        X = ()=>(O)=>{
                v?.enter(O);
                return ()=>v?.retire(O);
            };
        e[0] = v;
        e[1] = X;
    } else {
        X = e[1];
    }
    const [L] = r_1.useState(X);
    let V;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        V = {
            className: "sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-euugli"
        };
        e[2] = V;
    } else {
        V = e[2];
    }
    let w;
    if (e[3] !== title || e[4] !== titleId) {
        w = <span {...V}><Y id={titleId} level="body1" weight="regular">{title}</Y></span>;
        e[3] = title;
        e[4] = titleId;
        e[5] = w;
    } else {
        w = e[5];
    }
    let S;
    if (e[6] !== J.step || e[7] !== o) {
        S = o && J.step !== null ? <span ref={L} className="sand-78zum5 sand-2lah0s"><Ve1Component step={J.step}/></span> : null;
        e[6] = J.step;
        e[7] = o;
        e[8] = S;
    } else {
        S = e[8];
    }
    let T;
    if (e[9] !== S || e[10] !== w) {
        T = <>{w}{S}</>;
        e[9] = S;
        e[10] = w;
        e[11] = T;
    } else {
        T = e[11];
    }
    const N = T;
    let M;
    if (e[12] !== v) {
        M = ()=>(O)=>v?.pin(O);
        e[12] = v;
        e[13] = M;
    } else {
        M = e[13];
    }
    const [Q] = r_1.useState(M);
    let c;
    if (e[14] !== b) {
        c = b === null ? null : <span key="body" ref={L} className="sand-78zum5 sand-dt5ytf sand-1v2ro7d sand-euugli sand-1hc1fzr sand-4itv7f sand-19991ni sand-1cwrb91 sand-1132tj4 sand-9lcvmn">{b}</span>;
        e[14] = b;
        e[15] = c;
    } else {
        c = e[15];
    }
    const z = c;
    let C;
    if (e[16] === Symbol.for("react.memo_cache_sentinel")) {
        C = {
            className: "sand-78zum5 sand-dt5ytf sand-1jnr06f"
        };
        e[16] = C;
    } else {
        C = e[16];
    }
    let q;
    if (e[17] !== N || e[18] !== o || e[19] !== onExpand) {
        q = onExpand !== undefined ? <button aria-expanded={o} onClick={o ? undefined : onExpand} type="button" {...p_1(aK.controlRing, $.headerRow, $.headerButton, o ? $.headerButtonOpen : null)}>{N}</button> : <span className="sand-78zum5 sand-1cy8zhl sand-17d4w8g">{N}</span>;
        e[17] = N;
        e[18] = o;
        e[19] = onExpand;
        e[20] = q;
    } else {
        q = e[20];
    }
    let W;
    if (e[21] !== g || e[22] !== o || e[23] !== U) {
        W = o && U != null ? <span ref={L} className="sand-78zum5 sand-dt5ytf sand-euugli"><Y level="body1" style={[
            $.subtitle,
            g
        ]}>{U}</Y></span> : null;
        e[21] = g;
        e[22] = o;
        e[23] = U;
        e[24] = W;
    } else {
        W = e[24];
    }
    let P;
    if (e[25] !== q || e[26] !== W) {
        P = <span key="header" ref={Q} {...C}>{q}{W}</span>;
        e[25] = q;
        e[26] = W;
        e[27] = P;
    } else {
        P = e[27];
    }
    let E;
    if (e[28] !== z || e[29] !== m || e[30] !== o || e[31] !== k || e[32] !== f) {
        E = o ? z : <span key="summary" ref={L} className="sand-78zum5 sand-dt5ytf sand-195vfkc sand-euugli sand-1o0liin"><span className="sand-78zum5 sand-1a02dak sand-6s0dn4 sand-17d4w8g sand-euugli sand-1o0liin">{f === null ? null : <Y level="body1" style={$.summaryText} weight={k ? "regular" : "medium"}>{f}</Y>}</span>{m}</span>;
        e[28] = z;
        e[29] = m;
        e[30] = o;
        e[31] = k;
        e[32] = f;
        e[33] = E;
    } else {
        E = e[33];
    }
    let I;
    if (e[34] !== P || e[35] !== E) {
        I = <>{P}{E}</>;
        e[34] = P;
        e[35] = E;
        e[36] = I;
    } else {
        I = e[36];
    }
    const B = I;
    let F;
    if (e[37] !== o || e[38] !== u) {
        F = ({
            0: {
                className: "sand-78zum5 sand-9f619 sand-h8yej3 sand-1g0dm76 sand-pdmqnj sand-gqmno8 sand-18rdzox sand-tyxrsu sand-1yc453h sand-1y1aw1k sand-wib8y2 sand-1q0g3np sand-6s0dn4 sand-ou54vl"
            },
            2: {
                className: "sand-78zum5 sand-9f619 sand-h8yej3 sand-z9dl7a sand-sag5q8 sand-1g0dm76 sand-pdmqnj sand-gqmno8 sand-18rdzox sand-tyxrsu sand-1yc453h sand-1q0g3np sand-6s0dn4 sand-ou54vl"
            },
            1: {
                className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-h8yej3 sand-1g0dm76 sand-pdmqnj sand-gqmno8 sand-18rdzox sand-tyxrsu sand-1yc453h sand-1jnr06f sand-1y1aw1k sand-wib8y2"
            },
            3: {
                className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d sand-9f619 sand-h8yej3 sand-z9dl7a sand-sag5q8 sand-1g0dm76 sand-pdmqnj sand-gqmno8 sand-18rdzox sand-tyxrsu sand-1yc453h"
            }
        })[!!o << 1 | (u === null) << 0];
        e[37] = o;
        e[38] = u;
        e[39] = F;
    } else {
        F = e[39];
    }
    let G;
    if (e[40] !== u) {
        G = ({
            0: {
                className: "sand-78zum5 sand-dt5ytf sand-1jnr06f sand-1iyjqo2 sand-euugli"
            },
            1: {
                className: "sand-jp7ctv"
            }
        })[(u === null) << 0];
        e[40] = u;
        e[41] = G;
    } else {
        G = e[41];
    }
    let H;
    if (e[42] !== B || e[43] !== G) {
        H = <span {...G}>{B}</span>;
        e[42] = B;
        e[43] = G;
        e[44] = H;
    } else {
        H = e[44];
    }
    let A;
    if (e[45] !== u) {
        A = u === null ? null : <span ref={L} className="sand-78zum5 sand-6s0dn4 sand-2lah0s">{u}</span>;
        e[45] = u;
        e[46] = A;
    } else {
        A = e[46];
    }
    let D;
    if (e[47] !== F || e[48] !== H || e[49] !== A || e[50] !== titleId) {
        D = <article aria-labelledby={titleId} {...F}>{H}{A}</article>;
        e[47] = F;
        e[48] = H;
        e[49] = A;
        e[50] = titleId;
        e[51] = D;
    } else {
        D = e[51];
    }
    return D;
}
function ZeComponent(l) {
    ZeComponent.d = 541;
    const e = c_1.c(3);
    const { onClick, children } = l;
    let t;
    if (e[0] !== children || e[1] !== onClick) {
        t = <Ce1 onClick={onClick} size="lg" variant="secondary">{children}</Ce1>;
        e[0] = children;
        e[1] = onClick;
        e[2] = t;
    } else {
        t = e[2];
    }
    return t;
}
function UeComponent(l) {
    UeComponent.d = 542;
    const e = c_1.c(6);
    const { name, onClick } = l;
    const { _ } = u_1();
    let i;
    if (e[0] !== _ || e[1] !== name) {
        i = _({
            id: "T9mwDN",
            values: {
                name
            }
        });
        e[0] = _;
        e[1] = name;
        e[2] = i;
    } else {
        i = e[2];
    }
    let d;
    if (e[3] !== onClick || e[4] !== i) {
        d = <_e aria-label={i} icon="chevron-right" onClick={onClick}/>;
        e[3] = onClick;
        e[4] = i;
        e[5] = d;
    } else {
        d = e[5];
    }
    return d;
}
function XeComponent(l) {
    XeComponent.d = 535;
    const e = c_1.c(5);
    const { disabled, pending, onClick, children } = l;
    let d;
    if (e[0] !== children || e[1] !== disabled || e[2] !== onClick || e[3] !== pending) {
        d = <Ce1 disabled={disabled} onClick={onClick} pending={pending} style={$.primaryButton} variant="primary">{children}</Ce1>;
        e[0] = children;
        e[1] = disabled;
        e[2] = onClick;
        e[3] = pending;
        e[4] = d;
    } else {
        d = e[4];
    }
    return d;
}
function KeComponent(l) {
    KeComponent.d = 533;
    const e = c_1.c(7);
    const { name, size } = l;
    const t = size === undefined ? "collapsed" : size;
    let i;
    if (e[0] !== t) {
        i = ({
            0: {
                className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-9f619 sand-2lah0s sand-w4jnvo sand-1qx5ct2 sand-qjedn3 sand-1y0btm7 sand-q03nf1 sand-t9pb60 sand-vvtkfd sand-1o0liin"
            },
            1: {
                className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-9f619 sand-2lah0s sand-qjedn3 sand-1y0btm7 sand-q03nf1 sand-t9pb60 sand-vvtkfd sand-1o0liin sand-vy4d1p sand-xk0z11"
            }
        })[(t === "row") << 0];
        e[0] = t;
        e[1] = i;
    } else {
        i = e[1];
    }
    let d;
    if (e[2] !== name) {
        d = <I_1 aria-hidden name={name} size="sm"/>;
        e[2] = name;
        e[3] = d;
    } else {
        d = e[3];
    }
    let r;
    if (e[4] !== i || e[5] !== d) {
        r = <span {...i}>{d}</span>;
        e[4] = i;
        e[5] = d;
        e[6] = r;
    } else {
        r = e[6];
    }
    return r;
}
function YeComponent(l) {
    YeComponent.d = 529;
    const e = c_1.c(6);
    const { titleId, title, children } = l;
    let summary;
    if (e[0] !== children) {
        summary = <Ne>{children}</Ne>;
        e[0] = children;
        e[1] = summary;
    } else {
        summary = e[1];
    }
    let d;
    if (e[2] !== summary || e[3] !== title || e[4] !== titleId) {
        d = <Ze1Component isExpanded={false} summary={summary} title={title} titleId={titleId}/>;
        e[2] = summary;
        e[3] = title;
        e[4] = titleId;
        e[5] = d;
    } else {
        d = e[5];
    }
    return d;
}
function QeComponent(l) {
    QeComponent.d = 540;
    const e = c_1.c(20);
    const { title, emptyLabel, shown, hasIcons, children } = l;
    const r = shown === undefined ? Le : shown;
    const h = hasIcons === undefined ? false : hasIcons;
    const [p, setP] = r_1.useState(false);
    let y;
    if (e[0] !== children || e[1] !== p || e[2] !== r) {
        y = p ? children : children.slice(0, r);
        e[0] = children;
        e[1] = p;
        e[2] = r;
        e[3] = y;
    } else {
        y = e[3];
    }
    const o = y;
    const hidden = children.length - o.length;
    let k = null;
    if (children.length > 0) {
        let g;
        if (e[4] !== o) {
            g = <ul {...Se}>{o}</ul>;
            e[4] = o;
            e[5] = g;
        } else {
            g = e[5];
        }
        k = g;
    } else if (emptyLabel != null) {
        let g;
        if (e[6] !== emptyLabel) {
            g = <Y level="body2" style={$.sectionEmpty}>{emptyLabel}</Y>;
            e[6] = emptyLabel;
            e[7] = g;
        } else {
            g = e[7];
        }
        k = g;
    }
    let m;
    if (e[8] !== title) {
        m = ({
            0: {
                className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-h8yej3 sand-z9dl7a sand-jkvuk6 sand-135b78x sand-11lfxj5 sand-1qmwy7c sand-10e981r sand-b3r6kr"
            },
            1: {
                className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-h8yej3 sand-jkvuk6 sand-135b78x sand-11lfxj5 sand-1qmwy7c sand-10e981r sand-b3r6kr sand-1iorvi4"
            }
        })[(title === undefined) << 0];
        e[8] = title;
        e[9] = m;
    } else {
        m = e[9];
    }
    let b;
    if (e[10] !== title) {
        b = title === undefined ? null : <Y level="body2" style={$.sectionTitle} weight="medium">{title}</Y>;
        e[10] = title;
        e[11] = b;
    } else {
        b = e[11];
    }
    let u;
    if (e[12] !== h || e[13] !== hidden) {
        u = hidden > 0 ? <button onClick={()=>setP(true)} type="button" {...p_1(aK.controlRing, $.footerRow, h ? $.footerRowAfterIcon : null)}><Y level="body2"><T_1 id="lSfncD" values={{
            hidden
        }}/></Y></button> : null;
        e[12] = h;
        e[13] = hidden;
        e[14] = u;
    } else {
        u = e[14];
    }
    let v;
    if (e[15] !== k || e[16] !== m || e[17] !== b || e[18] !== u) {
        v = <span {...m}>{b}{k}{u}</span>;
        e[15] = k;
        e[16] = m;
        e[17] = b;
        e[18] = u;
        e[19] = v;
    } else {
        v = e[19];
    }
    return v;
}
function We1Component(l) {
    We1Component.d = 538;
    const e = c_1.c(18);
    const { title, isAdded, isLocked, isDisabled, onChange } = l;
    const [r, setR] = r_1.useState(false);
    let p;
    if (e[0] !== onChange) {
        p = (f)=>{
            setR(true);
            onChange(f);
        };
        e[0] = onChange;
        e[1] = p;
    } else {
        p = e[1];
    }
    const x = p;
    if (isAdded) {
        if (isLocked || isDisabled) {
            let m;
            if (e[2] !== isDisabled || e[3] !== title) {
                m = <Me1 disabled={isDisabled} name={title} readOnly/>;
                e[2] = isDisabled;
                e[3] = title;
                e[4] = m;
            } else {
                m = e[4];
            }
            return m;
        }
        let onRemove;
        if (e[5] !== x) {
            onRemove = ()=>x(false);
            e[5] = x;
            e[6] = onRemove;
        } else {
            onRemove = e[6];
        }
        let k;
        if (e[7] !== r || e[8] !== onRemove || e[9] !== title) {
            k = <Me1 autoFocus={r} name={title} onRemove={onRemove}/>;
            e[7] = r;
            e[8] = onRemove;
            e[9] = title;
            e[10] = k;
        } else {
            k = e[10];
        }
        return k;
    }
    let onAdd;
    if (e[11] !== x) {
        onAdd = ()=>x(true);
        e[11] = x;
        e[12] = onAdd;
    } else {
        onAdd = e[12];
    }
    let o;
    if (e[13] !== r || e[14] !== isDisabled || e[15] !== onAdd || e[16] !== title) {
        o = <Re autoFocus={r} disabled={isDisabled} name={title} onAdd={onAdd}/>;
        e[13] = r;
        e[14] = isDisabled;
        e[15] = onAdd;
        e[16] = title;
        e[17] = o;
    } else {
        o = e[17];
    }
    return o;
}
function JeComponent(l) {
    JeComponent.d = 537;
    const e = c_1.c(68);
    const { title, titleStyle, reason, reasonLayout, icon, isDone, isChecked, isDisabled, onChange, onDelete, onView, detail, children } = l;
    const m = reasonLayout === undefined ? "inline" : reasonLayout;
    const isLocked = isDone === undefined ? false : isDone;
    const { _: __1 } = u_1();
    const id = r_1.useId();
    const [g, setG] = r_1.useState(false);
    const [U, setU] = r_1.useState(false);
    const [L, setL] = r_1.useState(false);
    const w = detail != null;
    const S = w && g;
    const T = title;
    let N;
    if (e[0] !== icon) {
        N = icon == null ? null : <span className="sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-vy4d1p sand-xk0z11">{icon}</span>;
        e[0] = icon;
        e[1] = N;
    } else {
        N = e[1];
    }
    let M;
    if (e[2] !== m) {
        M = ({
            0: {
                className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1iyjqo2 sand-euugli sand-uxw1ft"
            },
            1: {
                className: "sand-78zum5 sand-1iyjqo2 sand-euugli sand-uxw1ft sand-dt5ytf sand-1cy8zhl sand-195vfkc"
            }
        })[(m === "stacked") << 0];
        e[2] = m;
        e[3] = M;
    } else {
        M = e[3];
    }
    const Q = m === "stacked" && $.rowTitleStacked;
    let c;
    if (e[4] !== Q || e[5] !== titleStyle) {
        c = [
            $.rowTitle,
            Q,
            titleStyle
        ];
        e[4] = Q;
        e[5] = titleStyle;
        e[6] = c;
    } else {
        c = e[6];
    }
    let z;
    if (e[7] !== c || e[8] !== title || e[9] !== id) {
        z = <Y id={id} level="body2" style={c}>{title}</Y>;
        e[7] = c;
        e[8] = title;
        e[9] = id;
        e[10] = z;
    } else {
        z = e[10];
    }
    let C;
    if (e[11] !== S || e[12] !== reason || e[13] !== m) {
        C = reason == null || reason === "" || S ? null : <Y level="body2" style={[
            $.rowReason,
            m === "stacked" && $.rowReasonStacked
        ]}>{reason}</Y>;
        e[11] = S;
        e[12] = reason;
        e[13] = m;
        e[14] = C;
    } else {
        C = e[14];
    }
    let q;
    if (e[15] !== M || e[16] !== z || e[17] !== C) {
        q = <span {...M}>{z}{C}</span>;
        e[15] = M;
        e[16] = z;
        e[17] = C;
        e[18] = q;
    } else {
        q = e[18];
    }
    let W;
    if (e[19] !== N || e[20] !== q) {
        W = <>{N}{q}</>;
        e[19] = N;
        e[20] = q;
        e[21] = W;
    } else {
        W = e[21];
    }
    const P = W;
    const showsTrash = U || L;
    let I;
    if (e[22] !== onDelete || e[23] !== onView) {
        I = onDelete === undefined && onView === undefined ? {} : {
            onBlur: (ue)=>{
                if (!ue.currentTarget.contains(ue.relatedTarget)) {
                    setL(false);
                }
            },
            onFocus: ()=>setL(true),
            onMouseEnter: ()=>setU(true),
            onMouseLeave: ()=>setU(false)
        };
        e[22] = onDelete;
        e[23] = onView;
        e[24] = I;
    } else {
        I = e[24];
    }
    const B = I;
    let F;
    if (e[25] !== isChecked || e[26] !== isDisabled || e[27] !== isLocked || e[28] !== showsTrash || e[29] !== onChange || e[30] !== onDelete || e[31] !== title) {
        F = onDelete === undefined ? <We1Component isAdded={isLocked || isChecked} isDisabled={isDisabled} isLocked={isLocked} onChange={onChange} title={title}/> : <T_2 disabled={isDisabled} name={title} showsTrash={showsTrash} onDelete={onDelete}/>;
        e[25] = isChecked;
        e[26] = isDisabled;
        e[27] = isLocked;
        e[28] = showsTrash;
        e[29] = onChange;
        e[30] = onDelete;
        e[31] = title;
        e[32] = F;
    } else {
        F = e[32];
    }
    const G = F;
    let H;
    if (e[33] === Symbol.for("react.memo_cache_sentinel")) {
        H = {
            className: "sand-78zum5 sand-dt5ytf sand-euugli"
        };
        e[33] = H;
    } else {
        H = e[33];
    }
    let A;
    let D;
    if (e[34] === Symbol.for("react.memo_cache_sentinel")) {
        A = {
            className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-9f619 sand-u0aao5 sand-1yrsyyn sand-10b6aqq sand-mzvs34 sand-f159sx sand-1qmwy7c"
        };
        D = {
            className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-1iyjqo2"
        };
        e[34] = A;
        e[35] = D;
    } else {
        A = e[34];
        D = e[35];
    }
    let O;
    if (e[36] !== P) {
        O = <span {...D}>{P}</span>;
        e[36] = P;
        e[37] = O;
    } else {
        O = e[37];
    }
    let Z;
    if (e[38] === Symbol.for("react.memo_cache_sentinel")) {
        Z = {
            className: "sand-78zum5 sand-6s0dn4 sand-1jnr06f sand-2lah0s sand-vc5jky sand-f7dkkf"
        };
        e[38] = Z;
    } else {
        Z = e[38];
    }
    let _;
    if (e[39] !== __1 || e[40] !== showsTrash || e[41] !== T || e[42] !== onView) {
        _ = onView !== undefined && showsTrash ? <Ce1 aria-label={__1({
            id: "9/euHO",
            values: {
                name: T
            }
        })} onClick={onView} size="sm" variant="tertiary"><T_1 id="jpctdh"/></Ce1> : null;
        e[39] = __1;
        e[40] = showsTrash;
        e[41] = T;
        e[42] = onView;
        e[43] = _;
    } else {
        _ = e[43];
    }
    let K;
    if (e[44] !== _ || e[45] !== G) {
        K = <span {...Z}>{_}{G}</span>;
        e[44] = _;
        e[45] = G;
        e[46] = K;
    } else {
        K = e[46];
    }
    let ee;
    if (e[47] !== __1 || e[48] !== w || e[49] !== g || e[50] !== T) {
        ee = w ? <button aria-expanded={g} aria-label={__1({
            id: "viMMv8",
            values: {
                name: T
            }
        })} onClick={()=>setG(es)} type="button" {...p_1(aK.controlRing, $.expand)}><I_1 name={g ? "chevron-down" : "chevron-right"} size="sm"/></button> : null;
        e[47] = __1;
        e[48] = w;
        e[49] = g;
        e[50] = T;
        e[51] = ee;
    } else {
        ee = e[51];
    }
    let ne;
    if (e[52] !== O || e[53] !== K || e[54] !== ee) {
        ne = <span {...A}>{O}{K}{ee}</span>;
        e[52] = O;
        e[53] = K;
        e[54] = ee;
        e[55] = ne;
    } else {
        ne = e[55];
    }
    let te;
    if (e[56] !== detail || e[57] !== icon || e[58] !== S) {
        te = S ? <span {...{
            0: {
                className: "sand-78zum5 sand-dt5ytf sand-euugli sand-10b6aqq sand-f159sx sand-tssl2i"
            },
            1: {
                className: "sand-78zum5 sand-dt5ytf sand-euugli sand-10b6aqq sand-mzvs34 sand-f159sx"
            }
        }[(icon == null) << 0]}>{detail}</span> : null;
        e[56] = detail;
        e[57] = icon;
        e[58] = S;
        e[59] = te;
    } else {
        te = e[59];
    }
    let ae;
    if (e[60] !== children || e[61] !== icon) {
        ae = children == null ? null : <span {...{
            0: {
                className: "sand-78zum5 sand-dt5ytf sand-euugli sand-10b6aqq sand-f159sx sand-tssl2i"
            },
            1: {
                className: "sand-78zum5 sand-dt5ytf sand-euugli sand-10b6aqq sand-mzvs34 sand-f159sx"
            }
        }[(icon == null) << 0]}>{children}</span>;
        e[60] = children;
        e[61] = icon;
        e[62] = ae;
    } else {
        ae = e[62];
    }
    let le;
    if (e[63] !== B || e[64] !== ne || e[65] !== te || e[66] !== ae) {
        le = <li {...H} {...B}>{ne}{te}{ae}</li>;
        e[63] = B;
        e[64] = ne;
        e[65] = te;
        e[66] = ae;
        e[67] = le;
    } else {
        le = e[67];
    }
    return le;
}
function es(l) {
    return !l;
}
function SsComponent(l) {
    SsComponent.d = 532;
    const e = c_1.c(3);
    const { children } = l;
    let n;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        n = [
            aK.thinScrollbar,
            $.detailText
        ];
        e[0] = n;
    } else {
        n = e[0];
    }
    let t;
    if (e[1] !== children) {
        t = <Y level="body2" style={n}>{children}</Y>;
        e[1] = children;
        e[2] = t;
    } else {
        t = e[2];
    }
    return t;
}
function NsComponent(l) {
    NsComponent.d = 539;
    const e = c_1.c(2);
    const { children } = l;
    let n;
    if (e[0] !== children) {
        n = <ul {...Se}>{children}</ul>;
        e[0] = children;
        e[1] = n;
    } else {
        n = e[1];
    }
    return n;
}
function TsComponent(l) {
    TsComponent.d = 528;
    const e = c_1.c(3);
    const { children } = l;
    let n;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        n = {
            className: "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-167g77z"
        };
        e[0] = n;
    } else {
        n = e[0];
    }
    let t;
    if (e[1] !== children) {
        t = <span {...n}>{children}</span>;
        e[1] = children;
        e[2] = t;
    } else {
        t = e[2];
    }
    return t;
}
function AsComponent(l) {
    AsComponent.d = 536;
    const e = c_1.c(10);
    const { idle, busy, isBusy } = l;
    const i = DsComponent;
    let d;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        d = {
            className: "sand-wz0xwf"
        };
        e[0] = d;
    } else {
        d = e[0];
    }
    const r = !isBusy;
    let h;
    if (e[1] !== idle || e[2] !== r) {
        h = i(idle, r);
        e[1] = idle;
        e[2] = r;
        e[3] = h;
    } else {
        h = e[3];
    }
    let p;
    if (e[4] !== busy || e[5] !== isBusy) {
        p = i(busy, isBusy);
        e[4] = busy;
        e[5] = isBusy;
        e[6] = p;
    } else {
        p = e[6];
    }
    let x;
    if (e[7] !== h || e[8] !== p) {
        x = <span {...d}>{h}{p}</span>;
        e[7] = h;
        e[8] = p;
        e[9] = x;
    } else {
        x = e[9];
    }
    return x;
}
function DsComponent(l, e) {
    return <span aria-hidden={e ? undefined : true} {...{
        0: {
            className: "sand-1agbcgv sand-crlgei sand-2b8uid sand-lshs6z"
        },
        1: {
            className: "sand-1agbcgv sand-crlgei sand-2b8uid"
        }
    }[!!e << 0]}>{l}</span>;
}
function LsComponent(l) {
    LsComponent.d = 534;
    const e = c_1.c(2);
    const { children } = l;
    let n;
    if (e[0] !== children) {
        n = <Y level="body2" style={$.note}>{children}</Y>;
        e[0] = children;
        e[1] = n;
    } else {
        n = e[1];
    }
    return n;
}
export { Ve1Component as T, LsComponent as a, useHe as b, useEe as c, Ze1Component as d, KeComponent as e, UeComponent as f, QeComponent as g, JeComponent as h, ms as i, Le as j, YeComponent as k, XeComponent as l, TsComponent as m, hs as n, ZeComponent as o, AsComponent as p, FeComponent as q, GeComponent as r, FsComponent as s, NsComponent as t, Ve as u, SsComponent as v };
