import { c as c_1, j as j_1, r as r_1, u as u_1, p as p_1, T, i as i_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { i as i_2, c as c_2, u as u_2, aK as avatarColor, aL as avatarShape, bm as description, aM as name } from "./index.eager-platform-Dcfeegfw.js";
import { k as k_1, r as r_2, a, J, c as c_3 } from "./index.eager-common-CdCvBQNJ.js";
import { jn, r as r_3, jo, jp, jq, jr, js, jt as easing, af, R as R_1, Q, eW, ju, jv, jw, jx, jy, jz, jA, jB as origin, is, aU, jC, jD, a$, a_, jE, b9, bT, aI as On, aP as An, gz, jF, b7, fh, bz, fk, jG, jH, jI, jJ, jK, jL, jM, jN, jO, dd, jP, jQ } from "./index.eager-app-Cj5f8Gby.js";
import { z as De, x as x_1, I as I_1, cr as Wn, cJ, p as Lt1, cK, bw, cL as Jn, cM as Yn } from "./index-ZYxf-aBb.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "a19b9941-c86c-419c-9221-199764e32f12";
            e._sentryDebugIdIdentifier = "sentry-dbid-a19b9941-c86c-419c-9221-199764e32f12";
        }
    } catch (e) {}
})();
const Zn = [
    "hero",
    "invoice-chaser",
    "weekly-standup",
    "sales-forecast"
];
const Qn = Zn;
const Js = 80;
const Hs = {
    color: "blue",
    shape: "blob"
};
const ea = {
    step: "landing",
    meetBeat: -1,
    demoBeat: -1,
    demoCursor: {
        x: 0,
        y: 30
    },
    jobsBeat: -1,
    handOffBeat: -1,
    avatarTarget: null,
    isAvatarLanded: false,
    createColor: Hs.color,
    createShape: Hs.shape
};
const ot = {
    x: 0,
    y: -75
};
const wt = 2;
const Tt = 3;
function sa(t) {
    if (t % 2 === 0) {
        return wt;
    }
    return Tt;
}
function ta(meetBeat) {
    if (meetBeat === wt) {
        return "thinking";
    }
    if (meetBeat === Tt || meetBeat === 0) {
        return "idle";
    }
    return "listening";
}
const Ys = {
    "invoice-chaser": {
        x: 0,
        y: -112
    },
    "weekly-standup": {
        x: -132,
        y: 27
    },
    "sales-forecast": {
        x: 138,
        y: 7
    }
};
const na = {
    "invoice-chaser": {
        x: -172,
        y: -328,
        scale: 0.4
    },
    "sales-forecast": {
        x: 246,
        y: -275,
        scale: 0.5
    },
    "weekly-standup": {
        x: -278,
        y: -255,
        scale: 0.45
    }
};
const aa = {
    "invoice-chaser": {
        amplitudePx: 3,
        periodMs: 5200,
        delayMs: -1200
    },
    "weekly-standup": {
        amplitudePx: 5,
        periodMs: 7300,
        delayMs: -4700
    },
    "sales-forecast": {
        amplitudePx: 4,
        periodMs: 6400,
        delayMs: -2600
    }
};
const Fe = {
    x: 0,
    y: -21
};
const ys = {
    x: -59.8,
    y: -58.6
};
const scale = 0.55;
const la = {
    "invoice-chaser": "red",
    "weekly-standup": "cyan",
    "sales-forecast": Hs.color
};
const oa = {
    "invoice-chaser": {
        id: "VtyLJf"
    },
    "weekly-standup": {
        id: "tNbEzE"
    },
    "sales-forecast": {
        id: "B2oHPJ"
    }
};
const Us = {
    x: 0,
    y: -20
};
const ze = {
    ...Us,
    scale: 0.3,
    opacity: 0
};
const Ot = "invoice-chaser";
const recolor = "black";
function ra(t) {
    return t.sizePx / Js;
}
function da(scene) {
    if (scene.avatarTarget == null || scene.isAvatarLanded) {
        return null;
    }
    if (scene.step === "create") {
        return "sales-forecast";
    }
    return null;
}
function ca() {
    return {
        ...Ys[Ot],
        sizePx: Js
    };
}
function ua(scene) {
    const e = {
        id: "hero",
        color: "black",
        recolor: null,
        shape: "blob",
        isGazing: false,
        bob: null
    };
    switch(scene.step){
        case "landing":
            return {
                ...e,
                ...ze,
                y: -75,
                state: "idle",
                transition: "none"
            };
        case "meet":
            if (scene.meetBeat < 0) {
                return {
                    ...e,
                    ...ze,
                    y: ot.y,
                    state: "waking",
                    transition: "none"
                };
            }
            return {
                ...e,
                ...ot,
                scale: 0.8,
                opacity: 1,
                state: ta(scene.meetBeat),
                transition: "bounce",
                isGazing: true
            };
        case "computer-demo":
            return {
                ...e,
                x: Fe.x + scene.demoCursor.x - ys.x * scale,
                y: Fe.y + scene.demoCursor.y - ys.y * scale,
                scale,
                opacity: 1,
                state: scene.demoBeat < 0 ? "thinking" : "working",
                transition: "slow",
                surfaceTheme: "light"
            };
        case "jobs":
            if (scene.jobsBeat < 1) {
                return {
                    ...e,
                    ...Us,
                    scale: 1,
                    opacity: 1,
                    state: scene.jobsBeat === 0 ? "excited" : "happy",
                    transition: "standard",
                    isGazing: true
                };
            }
            return {
                ...e,
                ...Us,
                scale: 1.2,
                opacity: 0,
                state: "celebrate",
                transition: "exit"
            };
        default:
            return {
                ...e,
                ...ze,
                state: "idle",
                transition: "none"
            };
    }
}
function fa(scene, id) {
    const s = {
        id,
        color: la[id],
        recolor: null,
        shape: "blob",
        isGazing: false,
        bob: null
    };
    const l = Ys[id];
    const a = na[id];
    switch(scene.step){
        case "jobs":
            if (scene.jobsBeat < 1) {
                return {
                    ...s,
                    ...ze,
                    state: "sleeping",
                    transition: "none"
                };
            }
            return {
                ...s,
                ...l,
                scale: 1,
                opacity: 1,
                state: scene.jobsBeat === 1 ? "excited" : "happy",
                transition: "bounce",
                isGazing: true
            };
        case "role":
        case "tools":
            return {
                ...s,
                x: a.x,
                y: a.y,
                scale: a.scale,
                opacity: 1,
                state: "idle",
                transition: "standard",
                bob: aa[id]
            };
        case "create":
            {
                if (id !== "sales-forecast") {
                    return {
                        ...s,
                        x: a.x,
                        y: a.y - 40,
                        scale: a.scale * 0.8,
                        opacity: 0,
                        state: "sleeping",
                        transition: "exit"
                    };
                }
                const i = scene.avatarTarget;
                if (i == null) {
                    return {
                        ...s,
                        color: scene.createColor,
                        shape: scene.createShape,
                        x: a.x,
                        y: a.y,
                        scale: a.scale,
                        opacity: 1,
                        state: "happy",
                        transition: "standard"
                    };
                }
                const o = {
                    ...s,
                    color: scene.createColor,
                    shape: scene.createShape,
                    x: i.x,
                    y: i.y,
                    scale: ra(i),
                    state: "happy"
                };
                if (scene.isAvatarLanded) {
                    return {
                        ...o,
                        opacity: 0,
                        transition: "none"
                    };
                }
                return {
                    ...o,
                    opacity: 1,
                    transition: "standard"
                };
            }
        case jn:
            if (scene.handOffBeat < 0) {
                return {
                    ...s,
                    ...ze,
                    state: "sleeping",
                    transition: "none"
                };
            }
            if (id !== Ot) {
                return {
                    ...s,
                    ...l,
                    scale: 0.8,
                    opacity: 0,
                    state: "sleeping",
                    transition: "exit"
                };
            }
            return {
                ...s,
                ...l,
                scale: 1,
                opacity: 1,
                recolor,
                state: "happy",
                transition: "standard",
                isGazing: true
            };
        default:
            return {
                ...s,
                ...ze,
                state: "sleeping",
                transition: "none"
            };
    }
}
function ma(scene) {
    return Qn.map((e)=>{
        if (e === "hero") {
            return ua(scene);
        }
        return fa(scene, e);
    });
}
const pa = {
    standard: {
        duration: jq(js),
        easing: jo(js)
    },
    slow: {
        duration: jq(jr),
        easing: jo(jr)
    },
    bounce: {
        duration: jq(jp),
        easing: jo(jp)
    },
    exit: {
        duration: 300,
        easing
    },
    none: {
        duration: 0,
        easing: "linear"
    }
};
const ha = {
    light: "#fcfcfc",
    dark: "#070707"
};
const ks = 80;
function ga(t) {
    return `sand-onboarding-cast-${t}`;
}
const ya = 2.23;
const ka = 1.44;
const left = ks / 2 + ys.x - ya;
const top = ks / 2 + ys.y - ka;
const _a = {
    recolor: {
        kVAEAm: "sand-10l6tqk",
        kpwlN0: "sand-10a8y8t",
        kKVMdj: "sand-r1vbnl",
        k44tkh: "sand-1ykxiw6 sand-1u6grsq",
        kyAemX: "sand-vjiv3b",
        kWV6AL: "sand-1u6ievf",
        $$css: true
    }
};
function AtComponent(t) {
    AtComponent.d = 1097;
    const e = c_1.c(6);
    const { isShown } = t;
    let l;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        l = {
            className: "sand-10l6tqk sand-1849jeq sand-1fgtraw sand-19991ni sand-1fmmrnm"
        };
        e[0] = l;
    } else {
        l = e[0];
    }
    const a = l;
    const opacity = isShown ? 1 : 0;
    let o;
    if (e[1] !== opacity) {
        o = {
            ...a.style,
            left,
            top,
            opacity
        };
        e[1] = opacity;
        e[2] = o;
    } else {
        o = e[2];
    }
    let c;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        c = <path d="M37.2289 13.359C38.6252 12.778 38.4988 10.7591 37.0362 10.3745C29.8708 8.4902 16.0804 4.85934 9.96901 3.22056C8.74279 2.89175 7.60764 4.07288 7.97148 5.28916C9.82954 11.5004 13.5726 24.547 15.4795 31.2137C15.8835 32.626 17.8251 32.7612 18.4353 31.4251L23.9544 19.3395C24.12 18.9769 24.4166 18.6903 24.7847 18.5371L37.2289 13.359Z" fill="#000000" stroke="#ffffff" strokeWidth="2.2"/>;
        e[3] = c;
    } else {
        c = e[3];
    }
    let u;
    if (e[4] !== o) {
        u = <svg aria-hidden className={a.className} fill="none" style={o} viewBox="6 2 34 32">{c}</svg>;
        e[4] = o;
        e[5] = u;
    } else {
        u = e[5];
    }
    return u;
}
function CtComponent(t) {
    CtComponent.d = 1094;
    const e = c_1.c(8);
    const { bob, children } = t;
    let a;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        a = {
            className: "sand-1lliihq sand-h8yej3 sand-5yr21d sand-19hwp5s sand-1aquc0h sand-a4qsjk sand-pz12be sand-4hg4is"
        };
        e[0] = a;
    } else {
        a = e[0];
    }
    const i = a;
    const o = `${bob.amplitudePx}px`;
    const animationDuration = `${bob.periodMs}ms`;
    const animationDelay = `${bob.delayMs}ms`;
    let f;
    if (e[1] !== o || e[2] !== animationDuration || e[3] !== animationDelay) {
        f = {
            ...i.style,
            "--cast-bob-amp": o,
            animationDuration,
            animationDelay
        };
        e[1] = o;
        e[2] = animationDuration;
        e[3] = animationDelay;
        e[4] = f;
    } else {
        f = e[4];
    }
    const m = f;
    let r;
    if (e[5] !== children || e[6] !== m) {
        r = <span className={i.className} style={m}>{children}</span>;
        e[5] = children;
        e[6] = m;
        e[7] = r;
    } else {
        r = e[7];
    }
    return r;
}
function RtComponent(t) {
    RtComponent.d = 1095;
    const e = c_1.c(59);
    const { placement, isPointerShown, onLanded } = t;
    const iRef = r_1.useRef(null);
    const [o, setO] = r_1.useState(placement.opacity === 0);
    if (placement.opacity > 0 && o) {
        setO(false);
    }
    const u = placement.opacity === 0 && (placement.transition === "none" || o);
    const f = pa[placement.transition];
    const m = af() ? 0 : f.duration;
    let onTransitionEnd;
    let d;
    let p;
    let h;
    if (e[0] !== u || e[1] !== isPointerShown || e[2] !== onLanded || e[3] !== placement.color || e[4] !== placement.id || e[5] !== placement.isGazing || e[6] !== placement.opacity || e[7] !== placement.recolor || e[8] !== placement.shape || e[9] !== placement.state || e[10] !== placement.surfaceTheme) {
        p = ({
            0: {
                className: "sand-10l6tqk sand-1nrll8i sand-wa60dl sand-1dmp6jm sand-wzfr38 sand-1b1opl3 sand-1cm6mvd sand-wcsmn1"
            },
            1: {
                className: "sand-10l6tqk sand-1nrll8i sand-wa60dl sand-1dmp6jm sand-wzfr38 sand-1b1opl3 sand-1cm6mvd sand-wcsmn1 sand-67bb7w sand-t0e3qv"
            }
        })[!!(placement.opacity > 0 && placement.isGazing) << 0];
        let k;
        if (e[15] !== onLanded || e[16] !== placement.id || e[17] !== placement.opacity) {
            k = (B)=>{
                B.propertyName === "transform" && onLanded?.(placement.id);
                if (B.propertyName === "opacity" && B.target === B.currentTarget && placement.opacity === 0) {
                    setO(true);
                }
            };
            e[15] = onLanded;
            e[16] = placement.id;
            e[17] = placement.opacity;
            e[18] = k;
        } else {
            k = e[18];
        }
        onTransitionEnd = k;
        let N;
        if (e[19] !== placement.id) {
            N = ga(placement.id);
            e[19] = placement.id;
            e[20] = N;
        } else {
            N = e[20];
        }
        const sourceId = N;
        let O;
        if (e[21] !== placement.color || e[22] !== placement.surfaceTheme) {
            O = placement.surfaceTheme == null ? {} : {
                ink: k_1(placement.color, placement.surfaceTheme),
                eyeColor: ha[placement.surfaceTheme]
            };
            e[21] = placement.color;
            e[22] = placement.surfaceTheme;
            e[23] = O;
        } else {
            O = e[23];
        }
        const isFollowingPointer = placement.isGazing && placement.opacity > 0;
        let isPaused;
        if (e[24] !== u) {
            isPaused = af() || u;
            e[24] = u;
            e[25] = isPaused;
        } else {
            isPaused = e[25];
        }
        let w;
        if (e[26] !== isPointerShown) {
            w = <AtComponent isShown={isPointerShown}/>;
            e[26] = isPointerShown;
            e[27] = w;
        } else {
            w = e[27];
        }
        let R;
        if (e[28] !== placement.recolor || e[29] !== placement.state || e[30] !== sourceId) {
            R = placement.recolor == null ? null : <R_1 color={placement.recolor} sizePx={ks} sourceId={sourceId} state={placement.state} style={_a.recolor}/>;
            e[28] = placement.recolor;
            e[29] = placement.state;
            e[30] = sourceId;
            e[31] = R;
        } else {
            R = e[31];
        }
        let I;
        if (e[32] !== placement.color || e[33] !== placement.shape || e[34] !== placement.state || e[35] !== sourceId || e[36] !== O || e[37] !== isFollowingPointer || e[38] !== isPaused || e[39] !== w || e[40] !== R) {
            I = <Q color={placement.color} {...O} isFollowingPointer={isFollowingPointer} isPaused={isPaused} ref={iRef} shape={placement.shape} sizePx={ks} sourceId={sourceId} state={placement.state}>{w}{R}</Q>;
            e[32] = placement.color;
            e[33] = placement.shape;
            e[34] = placement.state;
            e[35] = sourceId;
            e[36] = O;
            e[37] = isFollowingPointer;
            e[38] = isPaused;
            e[39] = w;
            e[40] = R;
            e[41] = I;
        } else {
            I = e[41];
        }
        d = I;
        h = r_3(`sand-onboarding__cast-${placement.id}`, p.className);
        e[0] = u;
        e[1] = isPointerShown;
        e[2] = onLanded;
        e[3] = placement.color;
        e[4] = placement.id;
        e[5] = placement.isGazing;
        e[6] = placement.opacity;
        e[7] = placement.recolor;
        e[8] = placement.shape;
        e[9] = placement.state;
        e[10] = placement.surfaceTheme;
        e[11] = onTransitionEnd;
        e[12] = d;
        e[13] = p;
        e[14] = h;
    } else {
        onTransitionEnd = e[11];
        d = e[12];
        p = e[13];
        h = e[14];
    }
    let onClick;
    if (e[42] !== placement.isGazing) {
        onClick = placement.isGazing ? ()=>iRef.current?.poke("spin") : undefined;
        e[42] = placement.isGazing;
        e[43] = onClick;
    } else {
        onClick = e[43];
    }
    const y = `translate(${placement.x}px, ${placement.y}px) scale(${placement.scale})`;
    const transitionDuration = `${m}ms`;
    let _;
    if (e[44] !== p.style || e[45] !== placement.opacity || e[46] !== y || e[47] !== transitionDuration || e[48] !== f.easing) {
        _ = {
            ...p.style,
            transform: y,
            opacity: placement.opacity,
            transitionDuration,
            transitionTimingFunction: f.easing
        };
        e[44] = p.style;
        e[45] = placement.opacity;
        e[46] = y;
        e[47] = transitionDuration;
        e[48] = f.easing;
        e[49] = _;
    } else {
        _ = e[49];
    }
    let x;
    if (e[50] !== d || e[51] !== placement.bob) {
        x = placement.bob == null ? d : <CtComponent bob={placement.bob}>{d}</CtComponent>;
        e[50] = d;
        e[51] = placement.bob;
        e[52] = x;
    } else {
        x = e[52];
    }
    let j;
    if (e[53] !== onTransitionEnd || e[54] !== h || e[55] !== onClick || e[56] !== _ || e[57] !== x) {
        j = <div className={h} onClick={onClick} onTransitionEnd={onTransitionEnd} style={_}>{x}</div>;
        e[53] = onTransitionEnd;
        e[54] = h;
        e[55] = onClick;
        e[56] = _;
        e[57] = x;
        e[58] = j;
    } else {
        j = e[58];
    }
    return j;
}
function ItComponent(t) {
    ItComponent.d = 1096;
    const e = c_1.c(17);
    const { scene, onAvatarLanded } = t;
    let a;
    let i;
    let o;
    let c;
    if (e[0] !== onAvatarLanded || e[1] !== scene) {
        const f = {
            className: "sand-10l6tqk sand-10a8y8t sand-b3r6kr sand-47corl"
        };
        const m = ma(scene);
        const r = scene.step === "computer-demo";
        let d;
        if (e[6] !== scene) {
            d = da(scene);
            e[6] = scene;
            e[7] = d;
        } else {
            d = e[7];
        }
        const p = d;
        a = true;
        i = r_3("sand-onboarding__cast", f.className);
        o = f.style;
        let h;
        if (e[8] !== r || e[9] !== p || e[10] !== onAvatarLanded) {
            h = (placement)=><RtComponent key={placement.id} isPointerShown={r && placement.id === "hero"} placement={placement} {...placement.id === p ? {
                    onLanded: ()=>{
                        onAvatarLanded?.();
                    }
                } : {}}/>;
            e[8] = r;
            e[9] = p;
            e[10] = onAvatarLanded;
            e[11] = h;
        } else {
            h = e[11];
        }
        c = m.map(h);
        e[0] = onAvatarLanded;
        e[1] = scene;
        e[2] = a;
        e[3] = i;
        e[4] = o;
        e[5] = c;
    } else {
        a = e[2];
        i = e[3];
        o = e[4];
        c = e[5];
    }
    let u;
    if (e[12] !== a || e[13] !== i || e[14] !== o || e[15] !== c) {
        u = <div aria-hidden={a} className={i} style={o}>{c}</div>;
        e[12] = a;
        e[13] = i;
        e[14] = o;
        e[15] = c;
        e[16] = u;
    } else {
        u = e[16];
    }
    return u;
}
function Sa() {
    const t = c_1.c(13);
    const e = eW();
    const s = ju();
    const l = e.status.kind === "logged-in" && e.status.isAnysphereUser === true;
    let a;
    if (t[0] !== s.cancelLoginFlight || t[1] !== s.clearError || t[2] !== s.login || t[3] !== s.logout || t[4] !== s.updateName || t[5] !== e.avatarDataUrl || t[6] !== e.error || t[7] !== e.flight || t[8] !== e.isLoaded || t[9] !== e.isPending || t[10] !== e.status || t[11] !== l) {
        a = {
            error: e.error,
            isLoaded: e.isLoaded,
            isPending: e.isPending,
            isAnysphereUser: l,
            flight: e.flight,
            status: e.status,
            avatarDataUrl: e.avatarDataUrl,
            login: s.login,
            cancelLoginFlight: s.cancelLoginFlight,
            logout: s.logout,
            updateName: s.updateName,
            clearError: s.clearError
        };
        t[0] = s.cancelLoginFlight;
        t[1] = s.clearError;
        t[2] = s.login;
        t[3] = s.logout;
        t[4] = s.updateName;
        t[5] = e.avatarDataUrl;
        t[6] = e.error;
        t[7] = e.flight;
        t[8] = e.isLoaded;
        t[9] = e.isPending;
        t[10] = e.status;
        t[11] = l;
        t[12] = a;
    } else {
        a = t[12];
    }
    return a;
}
function ja(stepExit, e) {
    let s = false;
    return {
        subscribe (l) {
            if (!e) {
                return ()=>{};
            }
            const a = stepExit.wrap(()=>{
                s = true;
                l();
            });
            a();
            return ()=>{
                a.dispose();
                s = false;
            };
        },
        read: ()=>s
    };
}
function it(t, e) {
    if (t === jn) {
        return jv(e).length;
    }
    return jw(t, e);
}
function Na({ from, to }, s = {}) {
    if (to === "landing") {
        return null;
    }
    const l = it(from, s);
    const stepIndex = it(to, s);
    return {
        step: to,
        stepIndex,
        direction: stepIndex >= l ? "forward" : "back"
    };
}
function Ea(claim) {
    claim.isRunning = false;
}
class rt extends Error {
}
async function va(claim, e) {
    if (claim.isRunning) {
        return {
            kind: "already-running"
        };
    }
    const accountSlot = e.currentAccountSlot();
    if (accountSlot == null) {
        return {
            kind: "signed-away"
        };
    }
    if (claim.accountSlot !== accountSlot) {
        claim.agentId = null;
        claim.accountSlot = accountSlot;
    }
    claim.isRunning = true;
    try {
        if (claim.agentId == null && await e.isAccountOnboarded()) {
            await e.markSeen();
            return {
                kind: "already-onboarded"
            };
        }
        if (e.currentAccountSlot() !== accountSlot) {
            throw new rt;
        }
        claim.agentId ??= e.reserveBot(accountSlot);
        return {
            kind: "staged",
            agentId: claim.agentId,
            accountSlot
        };
    } catch (error) {
        claim.isRunning = false;
        if (error instanceof rt) {
            return {
                kind: "signed-away"
            };
        }
        return {
            kind: "failed",
            error
        };
    }
}
const wa = {
    engineering: {
        icon: "keyboard",
        tone: "accent"
    },
    design: {
        icon: "brush",
        tone: "warning"
    },
    marketing: {
        icon: "megaphone",
        tone: "danger"
    },
    "customer-support": {
        icon: "headset",
        tone: "supplementary3"
    },
    product: {
        icon: "hammer",
        tone: "supplementary5"
    },
    "ops-finance": {
        icon: "banknotes-stack",
        tone: "success"
    },
    "recruiting-people": {
        icon: "people-3",
        tone: "supplementary1"
    },
    sales: {
        icon: "chart-line",
        tone: "supplementary2"
    },
    productivity: {
        icon: "brain",
        tone: "neutral"
    }
};
const Pt = jx.map((t)=>({
        ...jy[t],
        ...wa[t]
    }));
function Ta(role) {
    return Pt.find((e)=>e.id === role) ?? null;
}
function Mt(t) {
    return jz({
        role: t?.englishLabel ?? null,
        tools: []
    });
}
const Oa = 2;
function Aa(t, e) {
    const s = Mt(e);
    return jA(e.id, Oa).map((l)=>({
            name: t(l.name),
            description: [
                t(l.description),
                s
            ].filter((a)=>a !== "").join(" "),
            origin,
            isKickstartRequested: true,
            isAutomatic: true,
            templateId: l.id
        }));
}
async function Ca(t, e) {
    for (const s of t){
        if (!e.isCurrentAccount()) {
            return;
        }
        const l = await e.createAgent(s);
        if (!e.isCurrentAccount()) {
            return;
        }
        await e.kickstart(l.agent.id);
    }
}
const $e = {
    chip: {
        k1xSpc: "sand-3nfvp2",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-17d4w8g",
        kZKoxP: "sand-1fgtraw",
        k7Eaqz: "sand-euugli",
        kB7OPa: "sand-9f619",
        kZCmMZ: "sand-aso8d8",
        kwRFfy: "sand-2vl965",
        kaIpWk: "sand-149ho13",
        kGVxlE: "sand-1ahgo13",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    chipArriving: {
        kGVxlE: "sand-1gnnqk1",
        kWkggS: "sand-1tiofj7",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    header: {
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-167g77z",
        kLKAdn: "sand-exx8yu",
        kwRFfy: "sand-yri2b",
        kGO01o: "sand-18d9i69",
        kZCmMZ: "sand-1c1uobl",
        $$css: true
    },
    action: {
        kzqmXN: "sand-h8yej3",
        $$css: true
    }
};
function BtComponent(t) {
    BtComponent.d = 1108;
    const e = c_1.c(34);
    const { departed, onSetUp } = t;
    const { _: __1 } = u_1();
    const i = eW();
    const { saved, refresh } = is();
    const { switchAccount } = ju();
    const fRef = r_1.useRef(null);
    aU(refresh);
    let m;
    if (e[0] !== departed.email || e[1] !== saved) {
        m = jC(saved, departed.email);
        e[0] = departed.email;
        e[1] = saved;
        e[2] = m;
    } else {
        m = e[2];
    }
    const r = m;
    const d = departed.email ?? r?.email ?? null;
    const p = i.status.kind === "logged-in" ? i.status.email ?? null : null;
    let h;
    let g;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        h = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-ou54vl sand-9f619 sand-7sb2j6 sand-64bnmy sand-wxc41k sand-13jy36j sand-2b8uid"
        };
        g = {
            className: "sand-78zum5 sand-6s0dn4 sand-883omv sand-193iq5w"
        };
        e[3] = h;
        e[4] = g;
    } else {
        h = e[3];
        g = e[4];
    }
    const avatar = r?.avatar ?? null;
    const S = r?.name ?? null;
    let _;
    if (e[5] !== d || e[6] !== avatar || e[7] !== S) {
        _ = <WsComponent avatar={avatar} email={d} name={S}/>;
        e[5] = d;
        e[6] = avatar;
        e[7] = S;
        e[8] = _;
    } else {
        _ = e[8];
    }
    let x;
    if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
        x = <span aria-hidden className="sand-3nfvp2 sand-2lah0s sand-169k319"><I_1 name="arrow-right" size="md"/></span>;
        e[9] = x;
    } else {
        x = e[9];
    }
    const j = i.status.kind === "logged-in" ? i.status.displayName ?? null : null;
    let k;
    if (e[10] !== i.avatarDataUrl || e[11] !== p || e[12] !== j) {
        k = <WsComponent arriving avatar={i.avatarDataUrl} email={p} name={j}/>;
        e[10] = i.avatarDataUrl;
        e[11] = p;
        e[12] = j;
        e[13] = k;
    } else {
        k = e[13];
    }
    let N;
    if (e[14] !== _ || e[15] !== k) {
        N = <div {...g}>{_}{x}{k}</div>;
        e[14] = _;
        e[15] = k;
        e[16] = N;
    } else {
        N = e[16];
    }
    let E;
    if (e[17] === Symbol.for("react.memo_cache_sentinel")) {
        E = <x_1.Title size="3xl" weight="medium"><T id="9dZAfN"/></x_1.Title>;
        e[17] = E;
    } else {
        E = e[17];
    }
    let O;
    let C;
    if (e[18] === Symbol.for("react.memo_cache_sentinel")) {
        O = <x_1.Header style={$e.header}>{E}<x_1.Description color="secondary"><T id="0TxK8D"/></x_1.Description></x_1.Header>;
        C = {
            className: "sand-78zum5 sand-dt5ytf sand-167g77z sand-h8yej3 sand-1gslohp"
        };
        e[18] = O;
        e[19] = C;
    } else {
        O = e[18];
        C = e[19];
    }
    let v;
    if (e[20] === Symbol.for("react.memo_cache_sentinel")) {
        v = <T id="YQL6Hk"/>;
        e[20] = v;
    } else {
        v = e[20];
    }
    let w;
    if (e[21] !== onSetUp) {
        w = <De onClick={onSetUp} ref={fRef} size="md" style={$e.action} variant="primary">{v}</De>;
        e[21] = onSetUp;
        e[22] = w;
    } else {
        w = e[22];
    }
    let R;
    if (e[23] !== __1 || e[24] !== d || e[25] !== switchAccount || e[26] !== r) {
        R = r != null && d != null ? <De onClick={()=>{
            switchAccount(r.id);
        }} size="md" style={$e.action} variant="secondary">{__1({
            id: "VuZfg+",
            values: {
                0: jD(d)
            }
        })}</De> : null;
        e[23] = __1;
        e[24] = d;
        e[25] = switchAccount;
        e[26] = r;
        e[27] = R;
    } else {
        R = e[27];
    }
    let I;
    if (e[28] !== w || e[29] !== R) {
        I = <div {...C}>{w}{R}</div>;
        e[28] = w;
        e[29] = R;
        e[30] = I;
    } else {
        I = e[30];
    }
    let B;
    if (e[31] !== N || e[32] !== I) {
        B = <x_1.Root closeOnBackdropClick={false} closeOnEscape={false} closeOnOutsidePress={false} initialFocus={fRef} open variant="simple" width={440}><div {...h}>{N}{O}{I}</div></x_1.Root>;
        e[31] = N;
        e[32] = I;
        e[33] = B;
    } else {
        B = e[33];
    }
    return B;
}
function WsComponent(t) {
    WsComponent.d = 1107;
    const e = c_1.c(21);
    const { arriving, avatar, email, name } = t;
    const o = arriving === undefined ? false : arriving;
    const { _ } = u_1();
    let u;
    if (e[0] !== _ || e[1] !== email || e[2] !== name) {
        u = email != null ? jD(email) : name ?? _({
            id: "XCrgCo"
        });
        e[0] = _;
        e[1] = email;
        e[2] = name;
        e[3] = u;
    } else {
        u = e[3];
    }
    const f = u;
    let m;
    if (e[4] !== o) {
        m = p_1($e.chip, o && $e.chipArriving, a_.body2, o ? a$.medium : a$.regular);
        e[4] = o;
        e[5] = m;
    } else {
        m = e[5];
    }
    const r = o || undefined;
    let d;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        d = {
            className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-1xp8n7a sand-mix8c7 sand-149ho13 sand-b3r6kr sand-1b8i4yy sand-1o0liin sand-vwhms9 sand-87ps6o"
        };
        e[6] = d;
    } else {
        d = e[6];
    }
    let p;
    if (e[7] !== avatar || e[8] !== email || e[9] !== name) {
        p = avatar != null ? <img alt="" src={avatar} className="sand-h8yej3 sand-5yr21d sand-l1xv1r"/> : jE(name, email);
        e[7] = avatar;
        e[8] = email;
        e[9] = name;
        e[10] = p;
    } else {
        p = e[10];
    }
    let h;
    if (e[11] !== p) {
        h = <span aria-hidden {...d}>{p}</span>;
        e[11] = p;
        e[12] = h;
    } else {
        h = e[12];
    }
    let g;
    if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
        g = {
            className: "sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft"
        };
        e[13] = g;
    } else {
        g = e[13];
    }
    let y;
    if (e[14] !== f) {
        y = <span {...g}>{f}</span>;
        e[14] = f;
        e[15] = y;
    } else {
        y = e[15];
    }
    let S;
    if (e[16] !== m || e[17] !== r || e[18] !== h || e[19] !== y) {
        S = <span {...m} data-arriving={r}>{h}{y}</span>;
        e[16] = m;
        e[17] = r;
        e[18] = h;
        e[19] = y;
        e[20] = S;
    } else {
        S = e[20];
    }
    return S;
}
const src = `${new URL("demo-computer-wallpaper-BO7Ye4dV.jpg", import.meta.url).href}`;
const Ia = -264;
const width = 441;
const height = 300;
const Ma = 25;
const Ba = Fe.y - height / 2;
const za = {
    kind: "bottom",
    bottomFromCenter: Ba - Ma
};
function DtComponent(t) {
    DtComponent.d = 1104;
    const e = c_1.c(9);
    const { headingId, title, measure } = t;
    let i;
    let o;
    let c;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        i = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-ehausa sand-1ghz6dp sand-2b8uid"
        };
        c = {
            className: "sand-1ghz6dp sand-neq65o sand-1slxwg sand-72az59 sand-1k6tqyu sand-tyxrsu"
        };
        o = r_3("sand-onboarding__heading", i.className);
        e[0] = i;
        e[1] = o;
        e[2] = c;
    } else {
        i = e[0];
        o = e[1];
        c = e[2];
    }
    let u;
    if (e[3] !== measure) {
        u = measure == null ? c.style : {
            ...c.style,
            maxWidth: measure
        };
        e[3] = measure;
        e[4] = u;
    } else {
        u = e[4];
    }
    let f;
    if (e[5] !== headingId || e[6] !== u || e[7] !== title) {
        f = <hgroup className={o} style={i.style}><h1 className={c.className} id={headingId} style={u}>{title}</h1></hgroup>;
        e[5] = headingId;
        e[6] = u;
        e[7] = title;
        e[8] = f;
    } else {
        f = e[8];
    }
    return f;
}
function Da(t) {
    if (t.kind === "bottom") {
        return {
            bottom: `calc(50% + ${-t.bottomFromCenter}px)`
        };
    }
    return {
        top: `calc(50% + ${Ia}px)`
    };
}
function HeComponent(t) {
    HeComponent.d = 1106;
    const e = c_1.c(33);
    const { headingId, title, titleMeasure, titleAnchor, footer, children, className } = t;
    let f;
    if (e[0] !== titleAnchor) {
        f = titleAnchor === undefined ? {
            kind: "top"
        } : titleAnchor;
        e[0] = titleAnchor;
        e[1] = f;
    } else {
        f = e[1];
    }
    const m = f;
    let r;
    let d;
    let p;
    let h;
    if (e[2] !== className) {
        d = {
            className: "sand-10l6tqk sand-10a8y8t sand-b3r6kr"
        };
        let C;
        if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
            C = {
                className: "sand-10l6tqk sand-17y0mx6 sand-78zum5 sand-l56j7k"
            };
            e[7] = C;
        } else {
            C = e[7];
        }
        h = C;
        let v;
        if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
            v = {
                className: "sand-10l6tqk sand-17y0mx6 sand-16aihui sand-78zum5 sand-l56j7k"
            };
            e[8] = v;
        } else {
            v = e[8];
        }
        r = v;
        p = r_3(className, d.className);
        e[2] = className;
        e[3] = r;
        e[4] = d;
        e[5] = p;
        e[6] = h;
    } else {
        r = e[3];
        d = e[4];
        p = e[5];
        h = e[6];
    }
    const d_style = d.style;
    const { className: className_1, style } = h;
    let _;
    if (e[9] !== m) {
        _ = Da(m);
        e[9] = m;
        e[10] = _;
    } else {
        _ = e[10];
    }
    let x;
    if (e[11] !== _ || e[12] !== h.style) {
        x = {
            ...style,
            ..._
        };
        e[11] = _;
        e[12] = h.style;
        e[13] = x;
    } else {
        x = e[13];
    }
    let j;
    if (e[14] !== titleMeasure) {
        j = titleMeasure == null ? {} : {
            measure: titleMeasure
        };
        e[14] = titleMeasure;
        e[15] = j;
    } else {
        j = e[15];
    }
    let k;
    if (e[16] !== headingId || e[17] !== j || e[18] !== title) {
        k = <DtComponent headingId={headingId} title={title} {...j}/>;
        e[16] = headingId;
        e[17] = j;
        e[18] = title;
        e[19] = k;
    } else {
        k = e[19];
    }
    let N;
    if (e[20] !== k || e[21] !== x || e[22] !== h.className) {
        N = <div className={className_1} style={x}>{k}</div>;
        e[20] = k;
        e[21] = x;
        e[22] = h.className;
        e[23] = N;
    } else {
        N = e[23];
    }
    let E;
    if (e[24] !== footer || e[25] !== r) {
        E = footer != null ? <div className={r.className} style={r.style}>{footer}</div> : null;
        e[24] = footer;
        e[25] = r;
        e[26] = E;
    } else {
        E = e[26];
    }
    let O;
    if (e[27] !== children || e[28] !== d.style || e[29] !== N || e[30] !== E || e[31] !== p) {
        O = <div className={p} style={d_style}>{N}{children}{E}</div>;
        e[27] = children;
        e[28] = d.style;
        e[29] = N;
        e[30] = E;
        e[31] = p;
        e[32] = O;
    } else {
        O = e[32];
    }
    return O;
}
function UeComponent(t) {
    UeComponent.d = 1105;
    const e = c_1.c(18);
    const { x, y: y_1, pin, width, children, className, ariaHidden } = t;
    const f = pin === undefined ? "center" : pin;
    let m;
    let r;
    let d;
    let p;
    if (e[0] !== ariaHidden || e[1] !== className || e[2] !== f) {
        m = {
            className: "sand-10l6tqk sand-1nrll8i sand-wa60dl"
        };
        p = f === "center" ? "translate(-50%, -50%)" : "translate(-50%, 0)";
        r = ariaHidden || undefined;
        d = r_3(className, m.className);
        e[0] = ariaHidden;
        e[1] = className;
        e[2] = f;
        e[3] = m;
        e[4] = r;
        e[5] = d;
        e[6] = p;
    } else {
        m = e[3];
        r = e[4];
        d = e[5];
        p = e[6];
    }
    const h = `translate(${x}px, ${y_1}px) ${p}`;
    let g;
    if (e[7] !== width) {
        g = width == null ? {} : {
            width
        };
        e[7] = width;
        e[8] = g;
    } else {
        g = e[8];
    }
    let y;
    if (e[9] !== m.style || e[10] !== h || e[11] !== g) {
        y = {
            ...m.style,
            transform: h,
            ...g
        };
        e[9] = m.style;
        e[10] = h;
        e[11] = g;
        e[12] = y;
    } else {
        y = e[12];
    }
    let S;
    if (e[13] !== children || e[14] !== r || e[15] !== d || e[16] !== y) {
        S = <div aria-hidden={r} className={d} style={y}>{children}</div>;
        e[13] = children;
        e[14] = r;
        e[15] = d;
        e[16] = y;
        e[17] = S;
    } else {
        S = e[17];
    }
    return S;
}
const dt = {
    button: {
        kzqmXN: "sand-bu5dzu",
        kZKoxP: "sand-c9qbxq",
        $$css: true
    }
};
function WeComponent(t) {
    WeComponent.d = 1112;
    const e = c_1.c(18);
    const { forwardLabel, isForwardDisabled, onForward, onBack } = t;
    const disabled = isForwardDisabled === undefined ? false : isForwardDisabled;
    const { _ } = u_1();
    let u;
    let f;
    let m;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        f = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-1v2ro7d"
        };
        u = {
            className: "sand-bu5dzu sand-c9qbxq"
        };
        m = r_3("sand-onboarding__footer", f.className);
        e[0] = u;
        e[1] = f;
        e[2] = m;
    } else {
        u = e[0];
        f = e[1];
        m = e[2];
    }
    let r;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        r = [
            a_.body1,
            dt.button
        ];
        e[3] = r;
    } else {
        r = e[3];
    }
    let d;
    if (e[4] !== _ || e[5] !== forwardLabel) {
        d = forwardLabel ?? _({
            id: "hXzOVo"
        });
        e[4] = _;
        e[5] = forwardLabel;
        e[6] = d;
    } else {
        d = e[6];
    }
    let p;
    if (e[7] !== disabled || e[8] !== onForward || e[9] !== d) {
        p = <De disabled={disabled} onClick={onForward} style={r} variant="primary">{d}</De>;
        e[7] = disabled;
        e[8] = onForward;
        e[9] = d;
        e[10] = p;
    } else {
        p = e[10];
    }
    let h;
    if (e[11] !== onBack) {
        h = onBack != null ? <De onClick={onBack} style={[
            a_.body1,
            dt.button
        ]} variant="secondary"><T id="iH8pgl"/></De> : null;
        e[11] = onBack;
        e[12] = h;
    } else {
        h = e[12];
    }
    let g;
    if (e[13] !== h) {
        g = <span className={u.className} style={u.style}>{h}</span>;
        e[13] = h;
        e[14] = g;
    } else {
        g = e[14];
    }
    let y;
    if (e[15] !== p || e[16] !== g) {
        y = <div className={m} style={f.style}>{p}{g}</div>;
        e[15] = p;
        e[16] = g;
        e[17] = y;
    } else {
        y = e[17];
    }
    return y;
}
const La = 380;
const ct = {
    x: -78.3,
    y: -62.3
};
const ut = {
    x: 62.8,
    y: -62.3
};
const ft = {
    x: -178.4,
    y: -105.5
};
const mt = {
    x: 77.4,
    y: 71.8
};
const Ge = [
    {
        cursor: ct,
        pressed: null
    },
    {
        cursor: ct,
        pressed: "a-tile-2"
    },
    {
        cursor: ut,
        pressed: null
    },
    {
        cursor: ut,
        pressed: "a-tile-4"
    },
    {
        cursor: ft,
        pressed: null
    },
    {
        cursor: ft,
        pressed: "a-close"
    },
    {
        cursor: mt,
        pressed: null
    },
    {
        cursor: mt,
        pressed: "b-button"
    }
];
const qa = 3;
const $a = 6;
const Fa = 900;
const Ge_length = Ge.length;
const ht = {
    x: 0,
    y: 30
};
function Ga(demoBeat) {
    if (demoBeat < 0) {
        return ht;
    }
    return Ge[Math.min(demoBeat, Ge.length - 1)]?.cursor ?? ht;
}
function Ha(demoBeat) {
    if (demoBeat < 0) {
        return null;
    }
    return Ge[Math.min(demoBeat, Ge.length - 1)]?.pressed ?? null;
}
function Ua(demoBeat) {
    return demoBeat >= 0 && demoBeat < $a;
}
function Wa(demoBeat) {
    return demoBeat >= qa;
}
const ink = "#ffffff";
const Va = [
    {
        hue: "#ff5f57",
        isCloseLight: true
    },
    {
        hue: "#febc2e",
        isCloseLight: false
    },
    {
        hue: "#28c840",
        isCloseLight: false
    }
];
function VsComponent(t) {
    VsComponent.d = 1111;
    const e = c_1.c(5);
    const { isClosePressed } = t;
    const l = isClosePressed === undefined ? false : isClosePressed;
    let a;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        a = {
            className: "sand-10l6tqk sand-mynqao sand-1bmd7te sand-78zum5 sand-s5uhvr"
        };
        e[0] = a;
    } else {
        a = e[0];
    }
    const i = a;
    const { className, style } = i;
    let u;
    if (e[1] !== l) {
        u = Va.map(({ hue, isCloseLight })=>{
            const p = {
                0: {
                    className: "sand-yk9uqj sand-1d4dbkn sand-16rqkct sand-1wktga4 sand-xvocdi sand-1p0hc1o"
                },
                1: {
                    className: "sand-yk9uqj sand-1d4dbkn sand-16rqkct sand-1wktga4 sand-xvocdi sand-1p0hc1o sand-1mpn8cg sand-atzp2"
                }
            }[!!(isCloseLight && l) << 0];
            return <span key={hue} className={p.className} style={{
                ...p.style,
                backgroundColor: hue
            }}/>;
        });
        e[1] = l;
        e[2] = u;
    } else {
        u = e[2];
    }
    let f;
    if (e[3] !== u) {
        f = <div className={className} style={style}>{u}</div>;
        e[3] = u;
        e[4] = f;
    } else {
        f = e[4];
    }
    return f;
}
function YComponent(t) {
    YComponent.d = 1109;
    const e = c_1.c(16);
    const { left, top, width, height, radius, ink, isPressed } = t;
    const f = isPressed === undefined ? false : isPressed;
    let m;
    if (e[0] !== f) {
        m = ({
            0: {
                className: "sand-10l6tqk sand-uo13n2 sand-xvocdi sand-1p0hc1o"
            },
            1: {
                className: "sand-10l6tqk sand-uo13n2 sand-xvocdi sand-1p0hc1o sand-1mkev6f sand-1n5d1j9"
            }
        })[!!f << 0];
        e[0] = f;
        e[1] = m;
    } else {
        m = e[1];
    }
    const r = m;
    let d;
    if (e[2] !== ink || e[3] !== f) {
        d = f ? {} : {
            backgroundColor: ink
        };
        e[2] = ink;
        e[3] = f;
        e[4] = d;
    } else {
        d = e[4];
    }
    let p;
    if (e[5] !== height || e[6] !== left || e[7] !== r.style || e[8] !== radius || e[9] !== d || e[10] !== top || e[11] !== width) {
        p = {
            ...r.style,
            left,
            top,
            width,
            height,
            borderRadius: radius,
            ...d
        };
        e[5] = height;
        e[6] = left;
        e[7] = r.style;
        e[8] = radius;
        e[9] = d;
        e[10] = top;
        e[11] = width;
        e[12] = p;
    } else {
        p = e[12];
    }
    let h;
    if (e[13] !== r.className || e[14] !== p) {
        h = <div className={r.className} style={p}/>;
        e[13] = r.className;
        e[14] = p;
        e[15] = h;
    } else {
        h = e[15];
    }
    return h;
}
function LtComponent(t) {
    LtComponent.d = 1110;
    const e = c_1.c(89);
    const { headingId, demoBeat, onForward, onBack } = t;
    const { _: __1 } = u_1();
    let c;
    if (e[0] !== demoBeat) {
        c = Ha(demoBeat);
        e[0] = demoBeat;
        e[1] = c;
    } else {
        c = e[1];
    }
    const u = c;
    let f;
    let m;
    let r;
    let titleAnchor;
    let titleMeasure;
    let h;
    let g;
    let y;
    let S;
    let _;
    let x;
    let j;
    let k;
    let N;
    let E;
    if (e[2] !== __1 || e[3] !== demoBeat || e[4] !== headingId || e[5] !== onBack || e[6] !== onForward) {
        r = {
            className: "sand-1n2onr6 sand-9f619 sand-b3r6kr sand-6zyult sand-1tj7thd sand-1y0btm7 sand-ch0qgz sand-p7k4rv sand-rr4885"
        };
        let ce;
        if (e[22] !== demoBeat) {
            ce = ({
                0: {
                    className: "sand-10l6tqk sand-9f619 sand-b3r6kr sand-1pw4gfu sand-1mkdq0t sand-1y0btm7 sand-1flfzmt sand-1l4sarc sand-1it4094 sand-6o7n8i sand-1fx8mn0 sand-12w9bfk sand-w7d9y7"
                },
                1: {
                    className: "sand-10l6tqk sand-9f619 sand-b3r6kr sand-1pw4gfu sand-1mkdq0t sand-1y0btm7 sand-1flfzmt sand-1l4sarc sand-1it4094 sand-6o7n8i sand-g01cxk sand-1mpn8cg sand-1p0hc1o sand-1icns26 sand-12w9bfk"
                }
            })[!Ua(demoBeat) << 0];
            e[22] = demoBeat;
            e[23] = ce;
        } else {
            ce = e[23];
        }
        N = ce;
        let ie;
        if (e[24] !== demoBeat) {
            ie = ({
                0: {
                    className: "sand-10l6tqk sand-9f619 sand-b3r6kr sand-1pw4gfu sand-1mkdq0t sand-1y0btm7 sand-1flfzmt sand-1l4sarc sand-1it4094 sand-6o7n8i sand-1fx8mn0 sand-12w9bfk sand-w7d9y7"
                },
                1: {
                    className: "sand-10l6tqk sand-9f619 sand-b3r6kr sand-1pw4gfu sand-1mkdq0t sand-1y0btm7 sand-1flfzmt sand-1l4sarc sand-1it4094 sand-6o7n8i sand-g01cxk sand-1mpn8cg sand-1p0hc1o sand-1icns26 sand-12w9bfk"
                }
            })[!Wa(demoBeat) << 0];
            e[24] = demoBeat;
            e[25] = ie;
        } else {
            ie = e[25];
        }
        E = ie;
        m = HeComponent;
        _ = "sand-onboarding__computer-demo";
        if (e[26] !== onBack || e[27] !== onForward) {
            x = <WeComponent onBack={onBack} onForward={onForward}/>;
            e[26] = onBack;
            e[27] = onForward;
            e[28] = x;
        } else {
            x = e[28];
        }
        j = headingId;
        if (e[29] !== __1) {
            k = __1({
                id: "gz4CuJ"
            });
            e[29] = __1;
            e[30] = k;
        } else {
            k = e[30];
        }
        titleAnchor = za;
        titleMeasure = La;
        f = UeComponent;
        g = true;
        y = Fe.x;
        S = Fe.y;
        h = r_3("sand-onboarding__demo-card", r.className);
        e[2] = __1;
        e[3] = demoBeat;
        e[4] = headingId;
        e[5] = onBack;
        e[6] = onForward;
        e[7] = f;
        e[8] = m;
        e[9] = r;
        e[10] = titleAnchor;
        e[11] = titleMeasure;
        e[12] = h;
        e[13] = g;
        e[14] = y;
        e[15] = S;
        e[16] = _;
        e[17] = x;
        e[18] = j;
        e[19] = k;
        e[20] = N;
        e[21] = E;
    } else {
        f = e[7];
        m = e[8];
        r = e[9];
        titleAnchor = e[10];
        titleMeasure = e[11];
        h = e[12];
        g = e[13];
        y = e[14];
        S = e[15];
        _ = e[16];
        x = e[17];
        j = e[18];
        k = e[19];
        N = e[20];
        E = e[21];
    }
    let O;
    if (e[31] !== r.style) {
        O = {
            ...r.style,
            width,
            height
        };
        e[31] = r.style;
        e[32] = O;
    } else {
        O = e[32];
    }
    let C;
    if (e[33] === Symbol.for("react.memo_cache_sentinel")) {
        C = <img alt="" className="sand-10l6tqk sand-10a8y8t sand-1lliihq sand-h8yej3 sand-5yr21d sand-l1xv1r sand-47corl" draggable={false} src={src}/>;
        e[33] = C;
    } else {
        C = e[33];
    }
    let v;
    if (e[34] !== N.style) {
        v = {
            ...N.style,
            left: 29.6,
            top: 32.4,
            width: 300,
            height: 183.9
        };
        e[34] = N.style;
        e[35] = v;
    } else {
        v = e[35];
    }
    let w;
    let R;
    if (e[36] === Symbol.for("react.memo_cache_sentinel")) {
        w = <YComponent height={102.3} ink={ink} left={13.8} radius={5.5} top={89.8} width={272.4}/>;
        R = <YComponent height={44.2} ink={ink} left={13.8} radius={5.5} top={33.2} width={59.4}/>;
        e[36] = w;
        e[37] = R;
    } else {
        w = e[36];
        R = e[37];
    }
    const I = u === "a-tile-2";
    let B;
    if (e[38] !== I) {
        B = <YComponent height={44.2} ink={ink} isPressed={I} left={82.9} radius={5.5} top={33.2} width={59.4}/>;
        e[38] = I;
        e[39] = B;
    } else {
        B = e[39];
    }
    let ee;
    if (e[40] === Symbol.for("react.memo_cache_sentinel")) {
        ee = <YComponent height={44.2} ink={ink} left={153.5} radius={5.5} top={33.2} width={59.4}/>;
        e[40] = ee;
    } else {
        ee = e[40];
    }
    const H = u === "a-tile-4";
    let U;
    if (e[41] !== H) {
        U = <YComponent height={44.2} ink={ink} isPressed={H} left={224} radius={5.5} top={33.2} width={59.4}/>;
        e[41] = H;
        e[42] = U;
    } else {
        U = e[42];
    }
    let Z;
    if (e[43] === Symbol.for("react.memo_cache_sentinel")) {
        Z = <div className="sand-10l6tqk sand-17y0mx6 sand-13vifvy sand-nqqxm sand-6kafv"/>;
        e[43] = Z;
    } else {
        Z = e[43];
    }
    const isClosePressed = u === "a-close";
    let L;
    if (e[44] !== isClosePressed) {
        L = <VsComponent isClosePressed={isClosePressed}/>;
        e[44] = isClosePressed;
        e[45] = L;
    } else {
        L = e[45];
    }
    let $;
    if (e[46] !== v || e[47] !== B || e[48] !== U || e[49] !== L || e[50] !== N.className) {
        $ = <div className={N.className} style={v}>{w}{R}{B}{ee}{U}{Z}{L}</div>;
        e[46] = v;
        e[47] = B;
        e[48] = U;
        e[49] = L;
        e[50] = N.className;
        e[51] = $;
    } else {
        $ = e[51];
    }
    let W;
    if (e[52] !== E.style) {
        W = {
            ...E.style,
            left: 125,
            top: 73.9,
            width: 262.7,
            height: 183.9
        };
        e[52] = E.style;
        e[53] = W;
    } else {
        W = e[53];
    }
    let M;
    let Q;
    let T;
    let F;
    let A;
    let V;
    let se;
    if (e[54] === Symbol.for("react.memo_cache_sentinel")) {
        M = <YComponent height={145.2} ink={ink} left={82.9} radius={5.5} top={38.7} width={179.7}/>;
        Q = <YComponent height={145.5} ink={ink} left={6.9} radius={5.3} top={38.6} width={69}/>;
        T = <YComponent height={16.6} ink="rgba(0, 0, 0, 0.1)" left={100.9} radius={2.8} top={56.7} width={16.6}/>;
        F = <YComponent height={16.6} ink="rgba(0, 0, 0, 0.1)" left={100.9} radius={2.8} top={89.9} width={16.6}/>;
        A = <YComponent height={6.9} ink="rgba(0, 0, 0, 0.1)" left={131.3} radius={13.8} top={62.2} width={89.9}/>;
        V = <YComponent height={6.9} ink="rgba(0, 0, 0, 0.1)" left={131.3} radius={13.8} top={87.1} width={89.9}/>;
        se = <YComponent height={6.9} ink="rgba(0, 0, 0, 0.1)" left={131.3} radius={13.8} top={102.3} width={58.1}/>;
        e[54] = M;
        e[55] = Q;
        e[56] = T;
        e[57] = F;
        e[58] = A;
        e[59] = V;
        e[60] = se;
    } else {
        M = e[54];
        Q = e[55];
        T = e[56];
        F = e[57];
        A = e[58];
        V = e[59];
        se = e[60];
    }
    const ne = u === "b-button";
    let G;
    if (e[61] !== ne) {
        G = <YComponent height={44.2} ink="rgba(4, 4, 4, 0.12)" isPressed={ne} left={96.8} radius={5.5} top={125.8} width={152.1}/>;
        e[61] = ne;
        e[62] = G;
    } else {
        G = e[62];
    }
    let J;
    let ae;
    if (e[63] === Symbol.for("react.memo_cache_sentinel")) {
        J = <div className="sand-10l6tqk sand-17y0mx6 sand-13vifvy sand-nqqxm sand-6kafv"/>;
        ae = <VsComponent/>;
        e[63] = J;
        e[64] = ae;
    } else {
        J = e[63];
        ae = e[64];
    }
    let te;
    if (e[65] !== W || e[66] !== G || e[67] !== E.className) {
        te = <div className={E.className} style={W}>{M}{Q}{T}{F}{A}{V}{se}{G}{J}{ae}</div>;
        e[65] = W;
        e[66] = G;
        e[67] = E.className;
        e[68] = te;
    } else {
        te = e[68];
    }
    let K;
    if (e[69] !== O || e[70] !== h || e[71] !== $ || e[72] !== te) {
        K = <div className={h} style={O}>{C}{$}{te}</div>;
        e[69] = O;
        e[70] = h;
        e[71] = $;
        e[72] = te;
        e[73] = K;
    } else {
        K = e[73];
    }
    let X;
    if (e[74] !== f || e[75] !== g || e[76] !== K || e[77] !== y || e[78] !== S) {
        X = j_1.jsx(f, {
            ariaHidden: g,
            x: y,
            y: S,
            children: K
        });
        e[74] = f;
        e[75] = g;
        e[76] = K;
        e[77] = y;
        e[78] = S;
        e[79] = X;
    } else {
        X = e[79];
    }
    let de;
    if (e[80] !== m || e[81] !== titleAnchor || e[82] !== titleMeasure || e[83] !== X || e[84] !== _ || e[85] !== x || e[86] !== j || e[87] !== k) {
        de = j_1.jsx(m, {
            className: _,
            footer: x,
            headingId: j,
            title: k,
            titleAnchor,
            titleMeasure,
            children: X
        });
        e[80] = m;
        e[81] = titleAnchor;
        e[82] = titleMeasure;
        e[83] = X;
        e[84] = _;
        e[85] = x;
        e[86] = j;
        e[87] = k;
        e[88] = de;
    } else {
        de = e[88];
    }
    return de;
}
const size = 28;
const Le = {
    line: {
        kogj98: "sand-1ghz6dp",
        kMwMTN: "sand-tyxrsu",
        k9WMMc: "sand-2b8uid",
        $$css: true
    },
    error: {
        kogj98: "sand-1ghz6dp",
        kMwMTN: "sand-6rl5ky",
        k9WMMc: "sand-2b8uid",
        $$css: true
    },
    textAction: {
        k8WAf4: "sand-t970qd",
        kGuDYH: "sand-1j61zf2",
        kLWn49: "sand-dod15v",
        $$css: true
    },
    actionSeparator: {
        kMwMTN: "sand-169k319",
        kfSwDN: "sand-87ps6o",
        $$css: true
    }
};
function Xa(t) {
    if (t.isComputerReady) {
        return {
            id: "eUHuzX"
        };
    }
    if (t.pullPercent != null) {
        return {
            id: "4UbAfG",
            values: {
                0: Math.round(t.pullPercent)
            }
        };
    }
    if (t.computerState === "hibernated") {
        return {
            id: "d4+5aD"
        };
    }
    return {
        id: "JW5mNg"
    };
}
function Qt1Component(t) {
    Qt1Component.d = 1113;
    const e = c_1.c(30);
    const { headingId, isComputerReady, computerState, pullPercent, error, onRetry } = t;
    const { i18n } = u_1();
    const f = b9("grok_bot_network_debugger");
    const m = bT();
    let r;
    if (e[0] !== error || e[1] !== m) {
        r = ()=>{
            if (error != null) {
                m("grok_bot_network_debugger");
            }
            return Ja;
        };
        e[0] = error;
        e[1] = m;
        e[2] = r;
    } else {
        r = e[2];
    }
    i_2(r);
    const [d, setD] = r_1.useState(false);
    let h;
    let g;
    let y;
    let S;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        y = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-wh1qs3 sand-1fn4h0r sand-193iq5w"
        };
        g = p_1(a_.heading3, Le.line);
        h = p_1(a_.body2, Le.error);
        S = r_3("sand-onboarding__hand-off", y.className);
        e[3] = h;
        e[4] = g;
        e[5] = y;
        e[6] = S;
    } else {
        h = e[3];
        g = e[4];
        y = e[5];
        S = e[6];
    }
    let _;
    if (e[7] !== error) {
        _ = error == null ? <An size={size}/> : null;
        e[7] = error;
        e[8] = _;
    } else {
        _ = e[8];
    }
    let x;
    if (e[9] !== computerState || e[10] !== error || e[11] !== i18n || e[12] !== isComputerReady || e[13] !== pullPercent) {
        x = error != null ? <T id="chgOnK"/> : <On>{i18n._(Xa({
            isComputerReady,
            computerState,
            pullPercent
        }))}</On>;
        e[9] = computerState;
        e[10] = error;
        e[11] = i18n;
        e[12] = isComputerReady;
        e[13] = pullPercent;
        e[14] = x;
    } else {
        x = e[14];
    }
    let j;
    if (e[15] !== headingId || e[16] !== x) {
        j = <p aria-live="polite" className={g.className} id={headingId} style={g.style}>{x}</p>;
        e[15] = headingId;
        e[16] = x;
        e[17] = j;
    } else {
        j = e[17];
    }
    let k;
    if (e[18] !== error || e[19] !== f || e[20] !== onRetry) {
        k = error != null ? <><p className={h.className} style={h.style}>{error}</p><div className="sand-78zum5 sand-6s0dn4 sand-ehausa"><De autoFocus onClick={onRetry} sentiment="accent" style={Le.textAction} variant="tertiary"><T id="KDw4GX"/></De>{f ? <><span aria-hidden {...p_1(a_.body2, Le.actionSeparator)}>-</span><De onClick={()=>setD(true)} sentiment="accent" style={Le.textAction} variant="tertiary"><T id="3wm/pb"/></De></> : null}</div></> : null;
        e[18] = error;
        e[19] = f;
        e[20] = onRetry;
        e[21] = k;
    } else {
        k = e[21];
    }
    let N;
    if (e[22] !== d || e[23] !== f) {
        N = f && d ? <Wn onClose={()=>setD(false)}/> : null;
        e[22] = d;
        e[23] = f;
        e[24] = N;
    } else {
        N = e[24];
    }
    let E;
    if (e[25] !== _ || e[26] !== j || e[27] !== k || e[28] !== N) {
        E = <div className={S} style={y.style}>{_}{j}{k}{N}</div>;
        e[25] = _;
        e[26] = j;
        e[27] = k;
        e[28] = N;
        e[29] = E;
    } else {
        E = e[29];
    }
    return E;
}
function Ja() {}
const Ya = 10;
const Za = 800;
const gt = 2;
const Qa = [
    "invoice-chaser",
    "weekly-standup",
    "sales-forecast"
];
function TComponent(t) {
    TComponent.d = 1114;
    const e = c_1.c(13);
    const { headingId, jobsBeat, onForward, onBack } = t;
    const { i18n, _ } = u_1();
    const u = jobsBeat >= 2;
    let f;
    if (e[0] !== onBack || e[1] !== onForward) {
        f = <WeComponent onBack={onBack} onForward={onForward}/>;
        e[0] = onBack;
        e[1] = onForward;
        e[2] = f;
    } else {
        f = e[2];
    }
    let m;
    if (e[3] !== _) {
        m = _({
            id: "3Z3HHA"
        });
        e[3] = _;
        e[4] = m;
    } else {
        m = e[4];
    }
    let r;
    if (e[5] !== u || e[6] !== i18n) {
        r = Qa.map((p)=>{
            const h = Ys[p];
            const g = {
                0: {
                    className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-9f619 sand-1uaxe40 sand-1hr3lfm sand-1vvogim sand-ugzpu4 sand-8c2ked sand-19d36u7 sand-19v9tvf sand-10b1f50 sand-1rhlpx6 sand-tyxrsu sand-uxw1ft sand-g01cxk sand-1rbuhwb sand-6o7n8i sand-1hek3ex sand-12w9bfk sand-w7d9y7"
                },
                1: {
                    className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-9f619 sand-1uaxe40 sand-1hr3lfm sand-1vvogim sand-ugzpu4 sand-8c2ked sand-19d36u7 sand-19v9tvf sand-10b1f50 sand-1rhlpx6 sand-tyxrsu sand-uxw1ft sand-6o7n8i sand-1hek3ex sand-12w9bfk sand-w7d9y7 sand-1hc1fzr sand-nn1q72"
                }
            }[!!u << 0];
            return <UeComponent key={p} pin="top" x={h.x} y={h.y + Js / 2 + Ya}><span className={r_3("sand-onboarding__job-bubble", g.className)} style={g.style}>{i18n._(oa[p])}</span></UeComponent>;
        });
        e[5] = u;
        e[6] = i18n;
        e[7] = r;
    } else {
        r = e[7];
    }
    let d;
    if (e[8] !== headingId || e[9] !== f || e[10] !== m || e[11] !== r) {
        d = <HeComponent className="sand-onboarding__jobs" footer={f} headingId={headingId} title={m}>{r}</HeComponent>;
        e[8] = headingId;
        e[9] = f;
        e[10] = m;
        e[11] = r;
        e[12] = d;
    } else {
        d = e[12];
    }
    return d;
}
const el = {
    id: "fMPJR7"
};
const sl = {
    id: "yvjVU9"
};
const tl = gz((t)=>new Intl.Segmenter(t, {
        granularity: "grapheme"
    }));
function Ft(i18n) {
    return Array.from(tl().segment(i18n._(el)), (e)=>e.segment);
}
const nl = 348;
const al = -14;
const he = {
    composerRows: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kOIVth: "sand-883omv",
        kLKAdn: "sand-z9dl7a",
        kGO01o: "sand-wib8y2",
        kg3NbH: "sand-dqyycr",
        $$css: true
    },
    composerLeaving: {
        kKVMdj: "sand-1eitycm sand-1aquc0h",
        k44tkh: "sand-17qpdo9",
        kKxzle: "sand-14skv4n",
        kyAemX: "sand-n0cd8s",
        kWV6AL: "sand-1u6ievf",
        kSiTet: "sand-1o9sq8h",
        kfzvcC: "sand-47corl",
        $$css: true
    },
    composerGone: {
        kSiTet: "sand-g01cxk",
        kfzvcC: "sand-47corl",
        $$css: true
    },
    text: {
        kAzted: "sand-isnujt",
        kogj98: "sand-1ghz6dp",
        kUOVxO: "sand-xbjj12",
        kMwMTN: "sand-tyxrsu",
        k9WMMc: "sand-1yc453h",
        khDVqt: "sand-126k92a",
        kHjlTd: "sand-1mzt3pk",
        $$css: true
    },
    placeholder: {
        kMwMTN: "sand-169k319",
        $$css: true
    },
    action: {
        kzqmXN: "sand-gd8bvy",
        kZKoxP: "sand-1fgtraw",
        $$css: true
    },
    sendPressed: {
        kKVMdj: "sand-byb4at sand-1aquc0h",
        k44tkh: "sand-9dz2be",
        kyAemX: "sand-a3vuyk",
        kWV6AL: "sand-1u6ievf",
        $$css: true
    }
};
function GtComponent(t) {
    GtComponent.d = 1120;
    const e = c_1.c(89);
    const { headingId, typedCount, send, onForward } = t;
    const { i18n, _: __1 } = u_1();
    let u;
    let f;
    let m;
    let r;
    let d;
    let p;
    let h;
    let g;
    let y;
    let S;
    let _;
    let x;
    let j;
    let k;
    let N;
    let E;
    let O;
    let pin;
    let width_1;
    let w;
    if (e[0] !== __1 || e[1] !== headingId || e[2] !== i18n || e[3] !== onForward || e[4] !== send || e[5] !== typedCount) {
        const ne = Ft(i18n);
        const G = Math.max(0, Math.min(typedCount, ne.length));
        p = typedCount >= 0 && send === "pending";
        d = send === "pressing";
        let J;
        if (e[26] !== G) {
            J = p_1(a_.body1, he.text, G === 0 && he.placeholder);
            e[26] = G;
            e[27] = J;
        } else {
            J = e[27];
        }
        const ae = J;
        let te;
        if (e[28] === Symbol.for("react.memo_cache_sentinel")) {
            te = {
                className: "sand-1rg5ohu sand-bdjdey sand-x3o462 sand-m2jcoa sand-mziwt1 sand-1t716jg sand-1vlthch sand-1aquc0h sand-162ll0j sand-a4qsjk"
            };
            e[28] = te;
        } else {
            te = e[28];
        }
        r = te;
        m = HeComponent;
        y = "sand-onboarding__meet";
        if (e[29] !== onForward) {
            S = <WeComponent onForward={onForward}/>;
            e[29] = onForward;
            e[30] = S;
        } else {
            S = e[30];
        }
        _ = headingId;
        if (e[31] !== __1) {
            x = __1({
                id: "nGd7vs"
            });
            e[31] = __1;
            e[32] = x;
        } else {
            x = e[32];
        }
        f = UeComponent;
        O = true;
        pin = "top";
        width_1 = nl;
        w = 0;
        g = al;
        u = cJ;
        N = "sand-onboarding__composer";
        const K = d && he.composerLeaving;
        const X = send === "sent" && he.composerGone;
        if (e[33] !== K || e[34] !== X) {
            E = [
                he.composerRows,
                K,
                X
            ];
            e[33] = K;
            e[34] = X;
            e[35] = E;
        } else {
            E = e[35];
        }
        h = ae.className;
        j = ae.style;
        k = G === 0 ? i18n._(sl) : ne.slice(0, G).join("");
        e[0] = __1;
        e[1] = headingId;
        e[2] = i18n;
        e[3] = onForward;
        e[4] = send;
        e[5] = typedCount;
        e[6] = u;
        e[7] = f;
        e[8] = m;
        e[9] = r;
        e[10] = d;
        e[11] = p;
        e[12] = h;
        e[13] = g;
        e[14] = y;
        e[15] = S;
        e[16] = _;
        e[17] = x;
        e[18] = j;
        e[19] = k;
        e[20] = N;
        e[21] = E;
        e[22] = O;
        e[23] = pin;
        e[24] = width_1;
        e[25] = w;
    } else {
        u = e[6];
        f = e[7];
        m = e[8];
        r = e[9];
        d = e[10];
        p = e[11];
        h = e[12];
        g = e[13];
        y = e[14];
        S = e[15];
        _ = e[16];
        x = e[17];
        j = e[18];
        k = e[19];
        N = e[20];
        E = e[21];
        O = e[22];
        pin = e[23];
        width_1 = e[24];
        w = e[25];
    }
    let R;
    if (e[36] !== r || e[37] !== p) {
        R = p ? <span className={r.className} style={r.style}/> : null;
        e[36] = r;
        e[37] = p;
        e[38] = R;
    } else {
        R = e[38];
    }
    let I;
    if (e[39] !== h || e[40] !== R || e[41] !== j || e[42] !== k) {
        I = <p className={h} style={j}>{k}{R}</p>;
        e[39] = h;
        e[40] = R;
        e[41] = j;
        e[42] = k;
        e[43] = I;
    } else {
        I = e[43];
    }
    let B;
    if (e[44] === Symbol.for("react.memo_cache_sentinel")) {
        B = {
            className: "sand-78zum5 sand-6s0dn4 sand-1qughib"
        };
        e[44] = B;
    } else {
        B = e[44];
    }
    const B_className = B.className;
    let H;
    if (e[45] !== __1) {
        H = __1({
            id: "igVDFt"
        });
        e[45] = __1;
        e[46] = H;
    } else {
        H = e[46];
    }
    let U;
    if (e[47] !== H) {
        U = <Lt1 aria-label={H} icon="plus" shape="circle" size="sm" style={he.action} tabIndex={-1} variant="secondary"/>;
        e[47] = H;
        e[48] = U;
    } else {
        U = e[48];
    }
    let Z;
    if (e[49] === Symbol.for("react.memo_cache_sentinel")) {
        Z = {
            className: "sand-1n2onr6 sand-3nfvp2"
        };
        e[49] = Z;
    } else {
        Z = e[49];
    }
    let q;
    if (e[50] !== d) {
        q = ({
            0: {
                className: "sand-10l6tqk sand-10a8y8t sand-16rqkct sand-dh2fpr sand-1y0btm7 sand-1newj2f sand-g01cxk sand-47corl"
            },
            1: {
                className: "sand-10l6tqk sand-10a8y8t sand-16rqkct sand-dh2fpr sand-1y0btm7 sand-1newj2f sand-g01cxk sand-47corl sand-kqtz50 sand-1aquc0h sand-4mqg50 sand-1k0bccz sand-a3vuyk sand-1u6ievf"
            }
        })[!!d << 0];
        e[50] = d;
        e[51] = q;
    } else {
        q = e[51];
    }
    let L;
    if (e[52] !== q) {
        L = <span {...q}/>;
        e[52] = q;
        e[53] = L;
    } else {
        L = e[53];
    }
    let $;
    if (e[54] !== __1) {
        $ = __1({
            id: "JlFcis"
        });
        e[54] = __1;
        e[55] = $;
    } else {
        $ = e[55];
    }
    const W = d && he.sendPressed;
    let M;
    if (e[56] !== W) {
        M = [
            he.action,
            W
        ];
        e[56] = W;
        e[57] = M;
    } else {
        M = e[57];
    }
    let Q;
    if (e[58] !== onForward || e[59] !== $ || e[60] !== M) {
        Q = <Lt1 aria-label={$} icon="arrow-up" onClick={onForward} shape="circle" size="sm" style={M} tabIndex={-1} variant="primary"/>;
        e[58] = onForward;
        e[59] = $;
        e[60] = M;
        e[61] = Q;
    } else {
        Q = e[61];
    }
    let T;
    if (e[62] !== L || e[63] !== Q) {
        T = <span {...Z}>{L}{Q}</span>;
        e[62] = L;
        e[63] = Q;
        e[64] = T;
    } else {
        T = e[64];
    }
    let F;
    if (e[65] !== U || e[66] !== T) {
        F = <div className={B_className}>{U}{T}</div>;
        e[65] = U;
        e[66] = T;
        e[67] = F;
    } else {
        F = e[67];
    }
    let A;
    if (e[68] !== u || e[69] !== I || e[70] !== F || e[71] !== N || e[72] !== E) {
        A = j_1.jsxs(u, {
            className: N,
            style: E,
            children: [
                I,
                F
            ]
        });
        e[68] = u;
        e[69] = I;
        e[70] = F;
        e[71] = N;
        e[72] = E;
        e[73] = A;
    } else {
        A = e[73];
    }
    let V;
    if (e[74] !== f || e[75] !== g || e[76] !== A || e[77] !== O || e[78] !== pin || e[79] !== width_1 || e[80] !== w) {
        V = j_1.jsx(f, {
            ariaHidden: O,
            pin,
            width: width_1,
            x: w,
            y: g,
            children: A
        });
        e[74] = f;
        e[75] = g;
        e[76] = A;
        e[77] = O;
        e[78] = pin;
        e[79] = width_1;
        e[80] = w;
        e[81] = V;
    } else {
        V = e[81];
    }
    let se;
    if (e[82] !== m || e[83] !== y || e[84] !== S || e[85] !== _ || e[86] !== x || e[87] !== V) {
        se = j_1.jsx(m, {
            className: y,
            footer: S,
            headingId: _,
            title: x,
            children: V
        });
        e[82] = m;
        e[83] = y;
        e[84] = S;
        e[85] = _;
        e[86] = x;
        e[87] = V;
        e[88] = se;
    } else {
        se = e[88];
    }
    return se;
}
const ll = 12;
const Ht = 20;
const ol = 35;
const il = 20;
const Ut = 20;
const rl = 3000;
function Wt(t) {
    return Ht + t + il;
}
function dl(t) {
    return Wt(t) + Ut;
}
function cl(t, e) {
    if (t.isSent) {
        if (e) {
            return "pressing";
        }
        return "sent";
    }
    return "pending";
}
function ul(t, e) {
    const typedCount = Math.min(Math.max(-1, t - Ht), e);
    const l = Wt(e);
    return {
        typedCount,
        isSent: t >= l,
        isThinking: t >= l + Ut
    };
}
function fl(t) {
    if (t >= ll) {
        return 1;
    }
    if (t >= 0) {
        return 0;
    }
    return -1;
}
const y_1 = -147;
const le = {
    card: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf sand-1p93zpp",
        kGNEyG: "sand-1cy8zhl sand-1ks5go6",
        kOIVth: "sand-1v2ro7d sand-5m2fds",
        kB7OPa: "sand-9f619",
        kzqmXN: "sand-h8yej3",
        kAzted: "sand-1edz59j sand-1kn73fv",
        kmVPX3: "sand-1tamke2 sand-wyq0y5",
        kaIpWk: "sand-4pepcl",
        kMzoRj: "sand-mkeg23",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-q03nf1 sand-1i1yey8 sand-4nrw47",
        kI3sdo: "sand-1a2a7pz",
        kWkggS: "sand-vvtkfd sand-cnu2fh",
        kMwMTN: "sand-tyxrsu",
        "--role-swatch": "sand-2h74xn",
        "--role-tint": "sand-1i1thnr",
        "--role-plate": "sand-1wxb63o sand-8q83sm",
        "--role-plate-fg": "sand-11wpl6l sand-1mmtgap",
        kkrTdU: "sand-1ypdohk",
        k9WMMc: "sand-1yc453h",
        k1ekBW: "sand-ts7igz",
        kIyJzY: "sand-7pq1vu",
        kAMwcw: "sand-6ekqhr",
        kKVMdj: "sand-1ck76bl sand-1aquc0h",
        k44tkh: "sand-1qa8tl sand-1u6grsq",
        kyAemX: "sand-1meahyu",
        kWV6AL: "sand-1u6ievf",
        kKxzle: "sand-1uzojwf sand-pum1pi sand-1ffb2lp sand-d77751 sand-5deg2a sand-g606ep sand-1b3cdxc sand-jl4f85 sand-onzorg sand-14q22ui",
        $$css: true
    },
    cardAccent: {
        "--role-swatch": "sand-1xiglcf",
        $$css: true
    },
    cardWarning: {
        "--role-swatch": "sand-19jrthe",
        $$css: true
    },
    cardDanger: {
        "--role-swatch": "sand-1t6ox5v",
        $$css: true
    },
    cardSupplementary3: {
        "--role-swatch": "sand-goemqi",
        $$css: true
    },
    cardSupplementary5: {
        "--role-swatch": "sand-1aqr0me",
        $$css: true
    },
    cardSuccess: {
        "--role-swatch": "sand-5es22o",
        $$css: true
    },
    cardSupplementary1: {
        "--role-swatch": "sand-4tps6y",
        $$css: true
    },
    cardSupplementary2: {
        "--role-swatch": "sand-1vrj4gz",
        $$css: true
    },
    cardNeutral: {
        "--role-swatch": "sand-1np8ltz",
        $$css: true
    },
    cardSelected: {
        kVAM5u: "sand-1vupcl0 sand-10ki1yy sand-4nrw47",
        kWkggS: "sand-6sp02w sand-cnu2fh",
        kGVxlE: "sand-d25iqh",
        "--role-plate": "sand-j21xiq sand-vh5ux5",
        "--role-plate-fg": "sand-10uvt49 sand-1mmtgap",
        $$css: true
    }
};
const pl = {
    accent: le.cardAccent,
    warning: le.cardWarning,
    danger: le.cardDanger,
    supplementary3: le.cardSupplementary3,
    supplementary5: le.cardSupplementary5,
    success: le.cardSuccess,
    supplementary1: le.cardSupplementary1,
    supplementary2: le.cardSupplementary2,
    neutral: le.cardNeutral
};
function VtComponent(t) {
    VtComponent.d = 1121;
    const e = c_1.c(24);
    const { finishesWalk, headingId, selectedRole, onBack, onForward, onSelect } = t;
    const u = finishesWalk === undefined ? false : finishesWalk;
    const { i18n, _: __1 } = u_1();
    let r;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            className: "sand-t9j73 sand-z004p3"
        };
        e[0] = r;
    } else {
        r = e[0];
    }
    let d;
    if (e[1] !== __1 || e[2] !== u) {
        d = u ? {
            forwardLabel: __1({
                id: "xGVfLh"
            })
        } : {};
        e[1] = __1;
        e[2] = u;
        e[3] = d;
    } else {
        d = e[3];
    }
    const isForwardDisabled = selectedRole == null;
    let h;
    if (e[4] !== onBack || e[5] !== onForward || e[6] !== d || e[7] !== isForwardDisabled) {
        h = <div {...r}><WeComponent {...d} isForwardDisabled={isForwardDisabled} onBack={onBack} onForward={onForward}/></div>;
        e[4] = onBack;
        e[5] = onForward;
        e[6] = d;
        e[7] = isForwardDisabled;
        e[8] = h;
    } else {
        h = e[8];
    }
    let g;
    if (e[9] !== __1) {
        g = __1({
            id: "wSsj7I"
        });
        e[9] = __1;
        e[10] = g;
    } else {
        g = e[10];
    }
    let y;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        y = {
            className: "sand-rvj5dj sand-185a7wo sand-1v2ro7d sand-kza4yq sand-1lbixau sand-zomyc0"
        };
        e[11] = y;
    } else {
        y = e[11];
    }
    let S;
    if (e[12] !== i18n || e[13] !== onSelect || e[14] !== selectedRole) {
        S = Pt.map((j)=>{
            const k = j.id === selectedRole;
            const N = p_1(le.card, pl[j.tone], k && le.cardSelected);
            const E = {
                className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1td3qas sand-10w6t97 sand-10hpsqq sand-qku8t2 sand-jmygeo sand-s2xxs2 sand-7pq1vu sand-6ekqhr"
            };
            return <button {...N} aria-checked={k} data-role={j.id} key={j.id} onClick={()=>onSelect(j.id)} role="radio" type="button"><span {...E}><I_1 name={j.icon} size="xl"/></span><span className="sand-1ghz6dp sand-1j61zf2 sand-1goxogb sand-1fc57z9 sand-4jae2b sand-1k6tqyu">{i18n._(j.label)}</span></button>;
        });
        e[12] = i18n;
        e[13] = onSelect;
        e[14] = selectedRole;
        e[15] = S;
    } else {
        S = e[15];
    }
    let _;
    if (e[16] !== headingId || e[17] !== S) {
        _ = <UeComponent pin="top" x={0} y={y_1}><div {...y} aria-labelledby={headingId} role="radiogroup">{S}</div></UeComponent>;
        e[16] = headingId;
        e[17] = S;
        e[18] = _;
    } else {
        _ = e[18];
    }
    let x;
    if (e[19] !== headingId || e[20] !== h || e[21] !== g || e[22] !== _) {
        x = <HeComponent footer={h} headingId={headingId} title={g}>{_}</HeComponent>;
        e[19] = headingId;
        e[20] = h;
        e[21] = g;
        e[22] = _;
        e[23] = x;
    } else {
        x = e[23];
    }
    return x;
}
function hl(t, probeBox) {
    const s = c_2(false);
    return {
        subscribeFor (l) {
            return (a)=>{
                if (!l || s.get()) {
                    return ()=>{};
                }
                let i = false;
                let o = null;
                o = t.start(async ()=>{
                    try {
                        await probeBox();
                    } catch  {
                        return;
                    }
                    if (!(i || s.get())) {
                        s.set(true);
                        a();
                        o?.dispose();
                    }
                });
                return ()=>{
                    i = true;
                    o?.dispose();
                    o = null;
                };
            };
        },
        read: s.get
    };
}
const gl = 2500;
function Kt(clock = r_2) {
    return a({
        name: "onboarding-box-probe",
        intervalMs: gl,
        clock
    });
}
const yl = Kt();
function useKl(t, boxProbe) {
    const s = c_1.c(10);
    const l = boxProbe === undefined ? yl : boxProbe;
    const { probeBox } = jF();
    const { foreverBox } = b7();
    let o;
    if (s[0] !== l || s[1] !== probeBox) {
        o = ()=>hl(l, probeBox);
        s[0] = l;
        s[1] = probeBox;
        s[2] = o;
    } else {
        o = s[2];
    }
    const [c] = r_1.useState(o);
    let u;
    if (s[3] !== c || s[4] !== t) {
        u = c.subscribeFor(t);
        s[3] = c;
        s[4] = t;
        s[5] = u;
    } else {
        u = s[5];
    }
    const isReady = r_1.useSyncExternalStore(u, c.read, c.read);
    const r = r_1.useSyncExternalStore(foreverBox.versionSnapshots.subscribe, foreverBox.getMostRecentStatus, foreverBox.getMostRecentStatus);
    const state = r?.state ?? null;
    const pullPercent = r?.pull?.percent ?? null;
    let h;
    if (s[6] !== isReady || s[7] !== state || s[8] !== pullPercent) {
        h = {
            isReady,
            state,
            pullPercent
        };
        s[6] = isReady;
        s[7] = state;
        s[8] = pullPercent;
        s[9] = h;
    } else {
        h = s[9];
    }
    return h;
}
const delayMs = 200;
const xl = 500;
const yt = 1;
const _l = 2;
const hs = 4;
function Sl(clock) {
    return {
        stepExit: c_3({
            name: "onboarding-step-exit",
            delayMs,
            clock
        }),
        meetScene: a({
            name: "onboarding-meet-scene",
            intervalMs: ol,
            clock
        }),
        meetVigil: a({
            name: "onboarding-meet-vigil",
            intervalMs: rl,
            clock
        }),
        demoScene: a({
            name: "onboarding-demo-scene",
            intervalMs: Fa,
            clock
        }),
        jobsScene: a({
            name: "onboarding-jobs-scene",
            intervalMs: Za,
            clock
        }),
        handOffScene: a({
            name: "onboarding-hand-off-scene",
            intervalMs: xl,
            clock
        }),
        boxProbe: Kt(clock)
    };
}
function gs(t) {
    if (t instanceof dd && t.failure.code === jP) {
        return i_1._({
            id: "tbe1hz"
        });
    }
    return J(t);
}
const jl = {
    light: "cursor-light",
    dark: "cursor-dark"
};
const Nl = {
    screenFooterNotice: {
        ks0D6T: "sand-dusixz",
        $$css: true
    }
};
function Gs(t) {
    return `sand-onboarding-${t}-heading`;
}
export function OnboardingFlow(t) {
    OnboardingFlow.d = 1101;
    const e = c_1.c(111);
    const { onComplete, presentation, clock } = t;
    const i = clock === undefined ? r_2 : clock;
    const auth = Sa();
    const { i18n } = u_1();
    const { platform } = fh();
    const { markOnboardingSeen, reportOnboardingStep, reportOnboardingCompleted } = jF();
    const { markSeen } = cK();
    const { resolved } = bz();
    const { isFullscreen } = fk();
    const g = b7();
    const { launcher, firstRun } = g;
    const _ = jG();
    const x = bw();
    const j = auth.status.kind === "logged-in";
    const showRole = jH();
    const N = jI();
    const E = jJ();
    const O = jK();
    let C;
    if (e[0] !== showRole) {
        C = {
            showRole
        };
        e[0] = showRole;
        e[1] = C;
    } else {
        C = e[1];
    }
    const v = jL(C);
    const w = jM(showRole);
    let R;
    if (e[2] !== v.entry || e[3] !== showRole) {
        R = {
            entry: v.entry,
            showRole
        };
        e[2] = v.entry;
        e[3] = showRole;
        e[4] = R;
    } else {
        R = e[4];
    }
    const I = R;
    const { entry } = jN();
    const departed = entry.kind === "setup" ? entry.switchedFrom : null;
    const [H, setH] = r_1.useState(false);
    const Z = departed == null || H;
    const q = Ta(v.role);
    const [L, setL] = r_1.useState(null);
    let W;
    if (e[5] !== v.step) {
        W = ()=>({
                step: v.step,
                exitingStep: null
            });
        e[5] = v.step;
        e[6] = W;
    } else {
        W = e[6];
    }
    const [M, setM] = r_1.useState(W);
    if (M.step !== v.step) {
        setM({
            step: v.step,
            exitingStep: M.step
        });
    }
    const M_step = M.step;
    let F;
    if (e[7] !== i) {
        F = ()=>Sl(i);
        e[7] = i;
        e[8] = F;
    } else {
        F = e[8];
    }
    const [A] = r_1.useState(F);
    const V = useKl(j, A.boxProbe);
    const seRef = r_1.useRef(null);
    let ne;
    if (e[9] !== markSeen || e[10] !== reportOnboardingStep || e[11] !== M_step || e[12] !== I) {
        ne = ()=>{
            const seRef_current = seRef.current;
            if (seRef_current === M_step) {
                return;
            }
            seRef.current = M_step;
            if (seRef_current === "landing") {
                markSeen();
            }
            const P = Na({
                from: seRef_current ?? M_step,
                to: M_step
            }, I);
            if (P != null) {
                reportOnboardingStep(P);
            }
        };
        e[9] = markSeen;
        e[10] = reportOnboardingStep;
        e[11] = M_step;
        e[12] = I;
        e[13] = ne;
    } else {
        ne = e[13];
    }
    u_2(ne);
    const G = M.exitingStep != null;
    let J;
    if (e[14] !== G || e[15] !== A.stepExit) {
        J = ja(A.stepExit, G);
        e[14] = G;
        e[15] = A.stepExit;
        e[16] = J;
    } else {
        J = e[16];
    }
    const ae = J;
    const K = r_1.useSyncExternalStore(ae.subscribe, ae.read, ae.read) ? null : M.exitingStep;
    let X;
    if (e[17] !== i18n) {
        X = Ft(i18n);
        e[17] = i18n;
        e[18] = X;
    } else {
        X = e[18];
    }
    const de = Number(X.length);
    let ce;
    if (e[19] !== M.step) {
        ce = M.step === "meet" && !af();
        e[19] = M.step;
        e[20] = ce;
    } else {
        ce = e[20];
    }
    const ie = ce;
    let je;
    let Ve;
    if (e[21] !== ie || e[22] !== de || e[23] !== A.meetScene || e[24] !== A.meetVigil) {
        je = dl(de);
        Ve = jO(A.meetScene, {
            isActive: ie,
            limit: je,
            initial: ie ? 0 : je,
            pastLimit: A.meetVigil
        });
        e[21] = ie;
        e[22] = de;
        e[23] = A.meetScene;
        e[24] = A.meetVigil;
        e[25] = je;
        e[26] = Ve;
    } else {
        je = e[25];
        Ve = e[26];
    }
    const bs = Ve;
    const xs = r_1.useSyncExternalStore(bs.subscribe, bs.read, bs.read);
    const _s = ul(xs, de);
    const Yt = Math.max(0, xs - je);
    let Ke;
    if (e[27] !== M.step) {
        Ke = M.step === "computer-demo" && !af();
        e[27] = M.step;
        e[28] = Ke;
    } else {
        Ke = e[28];
    }
    const Xe = Ke;
    const Ss = Xe ? 0 : Ge_length;
    let Je;
    if (e[29] !== Xe || e[30] !== Ss || e[31] !== A.demoScene) {
        Je = jO(A.demoScene, {
            isActive: Xe,
            limit: Ge_length,
            initial: Ss
        });
        e[29] = Xe;
        e[30] = Ss;
        e[31] = A.demoScene;
        e[32] = Je;
    } else {
        Je = e[32];
    }
    const js = Je;
    const Zt = r_1.useSyncExternalStore(js.subscribe, js.read, js.read);
    let Ye;
    if (e[33] !== M.step) {
        Ye = M.step === "jobs" && !af();
        e[33] = M.step;
        e[34] = Ye;
    } else {
        Ye = e[34];
    }
    const Ze = Ye;
    const Ns = Ze ? 0 : gt;
    let Qe;
    if (e[35] !== Ze || e[36] !== Ns || e[37] !== A.jobsScene) {
        Qe = jO(A.jobsScene, {
            isActive: Ze,
            limit: gt,
            initial: Ns
        });
        e[35] = Ze;
        e[36] = Ns;
        e[37] = A.jobsScene;
        e[38] = Qe;
    } else {
        Qe = e[38];
    }
    const Es = Qe;
    const Qt = r_1.useSyncExternalStore(Es.subscribe, Es.read, Es.read);
    const me = M.step === jn && v.entry !== "setup";
    let es;
    if (e[39] !== me) {
        es = me && !af();
        e[39] = me;
        e[40] = es;
    } else {
        es = e[40];
    }
    const ss = es;
    const vs = ss ? 0 : hs;
    let ts;
    if (e[41] !== ss || e[42] !== vs || e[43] !== A.handOffScene) {
        ts = jO(A.handOffScene, {
            isActive: ss,
            limit: hs,
            initial: vs
        });
        e[41] = ss;
        e[42] = vs;
        e[43] = A.handOffScene;
        e[44] = ts;
    } else {
        ts = e[44];
    }
    const ws = ts;
    const en = r_1.useSyncExternalStore(ws.subscribe, ws.read, ws.read);
    const meetBeat = _s.isThinking ? sa(Yt) : fl(xs);
    const demoBeat = Zt - 1;
    const jobsBeat = Qt;
    const ye = me ? en : -1;
    let as;
    if (e[45] !== g.auth.snapshots) {
        as = ()=>jQ(g.auth.snapshots.get().status);
        e[45] = g.auth.snapshots;
        e[46] = as;
    } else {
        as = e[46];
    }
    const currentAccountSlot = as;
    const OsRef = r_1.useRef(null);
    const osRef = r_1.useRef(-1);
    const Zs = vl;
    const As = (b)=>{
        if (b.isShellEntered || OsRef.current !== b || currentAccountSlot() !== b.accountSlot) {
            return;
        }
        const osRef_current = osRef.current;
        const re = !b.isChoreographed || osRef_current >= _l;
        const pe = b.isChoreographed && osRef_current >= hs;
        if (!(b.outcome == null ? !pe : b.outcome.kind !== "created" || !re)) {
            b.isShellEntered = true;
            if (b.outcome?.kind === "created") {
                _(b.agentId);
            } else {
                g.roster.previewCreatedAgent({
                    id: b.agentId,
                    name,
                    description,
                    avatarShape,
                    avatarColor,
                    harness: "temporal"
                });
                b.creation = launcher.beginCreation({
                    name,
                    expectsContent: true,
                    kind: "teammate"
                });
                b.creation.setAgentId(b.agentId);
            }
            reportOnboardingCompleted({
                ...q != null ? {
                    role: q.id
                } : {},
                tools: []
            });
            onComplete();
        }
    };
    const sn = async (b)=>{
        if (!showRole || q == null) {
            return;
        }
        const P = Aa((re)=>i18n._(re), q);
        if (P.length !== 0) {
            O();
            if (E) {
                await Ca(P, {
                    createAgent: g.roster.createAgent,
                    kickstart: launcher.kickstartAwaitingFirstMessage,
                    isCurrentAccount: ()=>currentAccountSlot() === b.accountSlot
                }).catch((re)=>{
                    x({
                        kind: "error",
                        text: gs(re)
                    });
                });
            }
        }
    };
    const tn = async (b)=>{
        const P = await g.onboardingBot.provision(b.accountSlot, {
            creatorContext: showRole ? Mt(q) : ""
        });
        b.outcome = P;
        if (P.kind === "created") {
            if (b.isShellEntered) {
                if (b.creation?.isAbandoned() === false) {
                    _(b.agentId);
                }
            } else {
                As(b);
            }
            await markOnboardingSeen().then(()=>{
                if (currentAccountSlot() === b.accountSlot) {
                    return launcher.kickstartAwaitingFirstMessage(b.agentId);
                }
            }).catch((re)=>{
                x({
                    kind: "error",
                    text: gs(re)
                });
            });
            await sn(b);
            return;
        }
        g.roster.dropCreatedAgentPreview(b.agentId);
        g.onboardingRun.botHandOff.land(b.agentId);
        b.creation?.fail();
        Ea(b.claim);
        P.kind === "failed" && (b.isShellEntered ? x({
            kind: "error",
            text: i_1._({
                id: "YQw0qR"
            })
        }) : setL(gs(P.error)));
    };
    const Ne = async (b)=>{
        setL(null);
        const isChoreographed = b.isChoreographed && !af();
        if (isChoreographed) {
            osRef.current = -1;
        }
        const claim = w.finishClaim();
        const pe = await va(claim, {
            currentAccountSlot,
            isAccountOnboarded: firstRun.isAccountOnboarded,
            reserveBot: g.onboardingBot.reserve,
            markSeen: markOnboardingSeen
        });
        if (pe.kind === "failed") {
            setL(gs(pe.error));
            return;
        }
        if (pe.kind === "already-onboarded") {
            reportOnboardingCompleted({
                ...q != null ? {
                    role: q.id
                } : {},
                tools: []
            });
            onComplete();
            return;
        }
        if (pe.kind !== "staged") {
            return;
        }
        const fs = {
            claim,
            agentId: pe.agentId,
            accountSlot: pe.accountSlot,
            isChoreographed,
            outcome: null,
            creation: null,
            isShellEntered: false
        };
        OsRef.current = fs;
        tn(fs);
        if (isChoreographed && osRef.current >= yt) {
            g.onboardingRun.botHandOff.begin(fs.agentId, Zs());
        }
        As(fs);
    };
    const onBeat = (b)=>{
        osRef.current = b;
        const OsRef_current = OsRef.current;
        if (OsRef_current != null) {
            if (b === yt) {
                g.onboardingRun.botHandOff.begin(OsRef_current.agentId, Zs());
                return;
            }
            As(OsRef_current);
        }
    };
    let is;
    if (e[47] !== M_step || e[48] !== I) {
        is = jw(M_step, I);
        e[47] = M_step;
        e[48] = I;
        e[49] = is;
    } else {
        is = e[49];
    }
    const Rs = is;
    let rs;
    if (e[50] !== auth || e[51] !== j || e[52] !== w) {
        rs = ()=>{
            if (j) {
                w.advance("landing");
                return;
            }
            auth.login();
        };
        e[50] = auth;
        e[51] = j;
        e[52] = w;
        e[53] = rs;
    } else {
        rs = e[53];
    }
    const onSignIn = rs;
    let demoCursor;
    if (e[54] !== demoBeat) {
        demoCursor = Ga(demoBeat);
        e[54] = demoBeat;
        e[55] = demoCursor;
    } else {
        demoCursor = e[55];
    }
    let ds;
    if (e[56] !== demoBeat || e[57] !== ye || e[58] !== jobsBeat || e[59] !== meetBeat || e[60] !== M_step || e[61] !== demoCursor) {
        ds = {
            ...ea,
            step: M_step,
            meetBeat,
            demoBeat,
            demoCursor,
            jobsBeat,
            handOffBeat: ye
        };
        e[56] = demoBeat;
        e[57] = ye;
        e[58] = jobsBeat;
        e[59] = meetBeat;
        e[60] = M_step;
        e[61] = demoCursor;
        e[62] = ds;
    } else {
        ds = e[62];
    }
    const scene = ds;
    const QsComponent = (b)=>{
        const headingId = Gs(b);
        switch(b){
            case "landing":
                return <div className="sand-10l6tqk sand-10a8y8t sand-rvj5dj sand-1ku5rj1 sand-b3r6kr"><Jn auth={auth} headingId={headingId} onSignIn={onSignIn}/><div className="sand-10l6tqk sand-17y0mx6 sand-3h4tne sand-78zum5 sand-l56j7k sand-4l9tsp"><Yn style={Nl.screenFooterNotice}/></div></div>;
            case "meet":
                return <GtComponent headingId={headingId} onForward={()=>w.advance(b)} send={cl(_s, ie)} typedCount={_s.typedCount}/>;
            case "computer-demo":
                return <LtComponent demoBeat={demoBeat} headingId={headingId} onBack={()=>w.goBack(b)} onForward={()=>w.advance(b)}/>;
            case "jobs":
                return <TComponent headingId={headingId} jobsBeat={jobsBeat} onBack={()=>w.goBack(b)} onForward={()=>{
                    N();
                    if (showRole) {
                        w.advance(b);
                        return;
                    }
                    w.enterHandOff();
                    Ne({
                        isChoreographed: true
                    });
                }}/>;
            case "role":
                return <VtComponent finishesWalk headingId={headingId} onBack={()=>w.goBack(b)} onForward={()=>{
                    w.enterHandOff();
                    Ne({
                        isChoreographed: true
                    });
                }} onSelect={w.chooseRole} selectedRole={v.role}/>;
            case "tools":
            case "create":
                return null;
            case jn:
                if (me && L == null && ye < hs) {
                    return null;
                }
                return <div className="sand-10l6tqk sand-10a8y8t sand-rvj5dj sand-1ku5rj1 sand-b3r6kr"><Qt1Component computerState={V.state} error={L} headingId={headingId} isComputerReady={V.isReady} onRetry={()=>{
                    Ne({
                        isChoreographed: false
                    });
                }} pullPercent={V.pullPercent}/></div>;
        }
    };
    const Ps = !isFullscreen;
    const { WindowControls } = presentation;
    let ue;
    let ke;
    let ve;
    if (e[63] !== Ps) {
        ke = ({
            0: {
                className: "sand-41iwjn sand-ixxii4 sand-10a8y8t sand-rvj5dj sand-1mkdm3x sand-5o4joa sand-euugli sand-2lwn1j sand-b3r6kr sand-1ua6jya sand-tyxrsu sand-1acoasx"
            },
            1: {
                className: "sand-ixxii4 sand-10a8y8t sand-rvj5dj sand-1mkdm3x sand-5o4joa sand-euugli sand-2lwn1j sand-b3r6kr sand-1ua6jya sand-tyxrsu sand-1acoasx sand-iqdzx4"
            }
        })[!!Ps << 0];
        let b;
        if (e[67] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                className: "sand-10l6tqk sand-17y0mx6 sand-13vifvy sand-dd8jsf sand-1a4o4su sand-17v0fby sand-htitgo"
            };
            e[67] = b;
        } else {
            b = e[67];
        }
        ue = b;
        ve = r_3("sand-onboarding", ke.className);
        e[63] = Ps;
        e[64] = ue;
        e[65] = ke;
        e[66] = ve;
    } else {
        ue = e[64];
        ke = e[65];
        ve = e[66];
    }
    const Bs = jl[resolved];
    const ke_style = ke.style;
    let we;
    if (e[68] !== ue.className || e[69] !== ue.style) {
        we = <span aria-hidden className={ue.className} style={ue.style}/>;
        e[68] = ue.className;
        e[69] = ue.style;
        e[70] = we;
    } else {
        we = e[70];
    }
    const zs = K != null ? <KsComponent key={`exit-${K}`} headingId={Gs(K)} isExiting>{QsComponent(K)}</KsComponent> : null;
    const Ds = KsComponent;
    let Te;
    if (e[71] !== M_step) {
        Te = Gs(M_step);
        e[71] = M_step;
        e[72] = Te;
    } else {
        Te = e[72];
    }
    const Ls = QsComponent(M_step);
    let Oe;
    if (e[73] !== Ds || e[74] !== M_step || e[75] !== Te || e[76] !== Ls) {
        Oe = <Ds key={M_step} headingId={Te}>{Ls}</Ds>;
        e[73] = Ds;
        e[74] = M_step;
        e[75] = Te;
        e[76] = Ls;
        e[77] = Oe;
    } else {
        Oe = e[77];
    }
    let cs;
    if (e[78] === Symbol.for("react.memo_cache_sentinel")) {
        cs = {
            className: "sand-1agbcgv sand-crlgei sand-1n2onr6 sand-47corl sand-1vjfegm"
        };
        e[78] = cs;
    } else {
        cs = e[78];
    }
    let Ae;
    if (e[79] !== scene) {
        Ae = <div className={cs.className}><ItComponent scene={scene}/></div>;
        e[79] = scene;
        e[80] = Ae;
    } else {
        Ae = e[80];
    }
    let Ce;
    if (e[81] !== WindowControls) {
        Ce = <WindowControls/>;
        e[81] = WindowControls;
        e[82] = Ce;
    } else {
        Ce = e[82];
    }
    let Re;
    if (e[83] !== H || e[84] !== departed) {
        Re = departed != null && !H ? <BtComponent departed={departed} onSetUp={()=>setH(true)}/> : null;
        e[83] = H;
        e[84] = departed;
        e[85] = Re;
    } else {
        Re = e[85];
    }
    let Ie;
    if (e[86] !== Z || e[87] !== v.entry || e[88] !== Ne || e[89] !== M_step) {
        Ie = v.entry === "setup" && M_step === jn && Z ? <XtComponent start={()=>Ne({
                isChoreographed: false
            })}/> : null;
        e[86] = Z;
        e[87] = v.entry;
        e[88] = Ne;
        e[89] = M_step;
        e[90] = Ie;
    } else {
        Ie = e[90];
    }
    let Pe;
    if (e[91] !== ye || e[92] !== onBeat || e[93] !== me || e[94] !== L) {
        Pe = me && L == null ? <JtComponent beat={ye} onBeat={onBeat}/> : null;
        e[91] = ye;
        e[92] = onBeat;
        e[93] = me;
        e[94] = L;
        e[95] = Pe;
    } else {
        Pe = e[95];
    }
    let us;
    if (e[96] !== platform || e[97] !== ke.style || e[98] !== M_step || e[99] !== Rs || e[100] !== ve || e[101] !== Bs || e[102] !== we || e[103] !== zs || e[104] !== Oe || e[105] !== Ae || e[106] !== Ce || e[107] !== Re || e[108] !== Ie || e[109] !== Pe) {
        us = <div className={ve} data-platform={platform} data-step={M_step} data-step-index={Rs} data-theme={Bs} style={ke_style}>{we}{zs}{Oe}{Ae}{Ce}{Re}{Ie}{Pe}</div>;
        e[96] = platform;
        e[97] = ke.style;
        e[98] = M_step;
        e[99] = Rs;
        e[100] = ve;
        e[101] = Bs;
        e[102] = we;
        e[103] = zs;
        e[104] = Oe;
        e[105] = Ae;
        e[106] = Ce;
        e[107] = Re;
        e[108] = Ie;
        e[109] = Pe;
        e[110] = us;
    } else {
        us = e[110];
    }
    return us;
}
function vl() {
    const t = ca();
    return {
        x: window.innerWidth / 2 + t.x,
        y: window.innerHeight / 2 + t.y,
        sizePx: t.sizePx
    };
}
function XtComponent(t) {
    XtComponent.d = 1102;
    const e = c_1.c(2);
    const { start } = t;
    const lRef = r_1.useRef(false);
    let a;
    if (e[0] !== start) {
        a = ()=>{
            if (!lRef.current) {
                lRef.current = true;
                start();
            }
            return wl;
        };
        e[0] = start;
        e[1] = a;
    } else {
        a = e[1];
    }
    i_2(a);
    return null;
}
function wl() {}
function JtComponent(t) {
    JtComponent.d = 1100;
    const e = c_1.c(3);
    const { beat, onBeat } = t;
    const aRef = r_1.useRef(-1);
    let i;
    if (e[0] !== beat || e[1] !== onBeat) {
        i = ()=>{
            if (aRef.current < beat) {
                aRef.current = beat;
                onBeat(beat);
            }
            return Tl;
        };
        e[0] = beat;
        e[1] = onBeat;
        e[2] = i;
    } else {
        i = e[2];
    }
    i_2(i);
    return null;
}
function Tl() {}
function KsComponent(t) {
    KsComponent.d = 1103;
    const e = c_1.c(17);
    const { isExiting, headingId, children } = t;
    const i = isExiting === undefined ? false : isExiting;
    let o;
    let c;
    let u;
    let f;
    if (e[0] !== i) {
        o = ({
            0: {
                className: "sand-1agbcgv sand-crlgei sand-1n2onr6 sand-euugli sand-2lwn1j sand-b3r6kr sand-gyzkii sand-1u6grsq sand-1yruv16 sand-1u6ievf sand-r1vbnl"
            },
            1: {
                className: "sand-1agbcgv sand-crlgei sand-1n2onr6 sand-euugli sand-2lwn1j sand-b3r6kr sand-1u6ievf sand-1wlzrib sand-1h2r1cz sand-ykr0s4 sand-1u6grsq sand-47corl"
            }
        })[!!i << 0];
        let p;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            p = {
                className: "sand-10l6tqk sand-10a8y8t"
            };
            e[5] = p;
        } else {
            p = e[5];
        }
        c = p;
        u = i || undefined;
        f = r_3("sand-onboarding__step", o.className);
        e[0] = i;
        e[1] = o;
        e[2] = c;
        e[3] = u;
        e[4] = f;
    } else {
        o = e[1];
        c = e[2];
        u = e[3];
        f = e[4];
    }
    const inert = i || undefined;
    let r;
    if (e[6] !== children || e[7] !== headingId || e[8] !== c.className || e[9] !== c.style) {
        r = <main aria-labelledby={headingId} className={c.className} style={c.style}>{children}</main>;
        e[6] = children;
        e[7] = headingId;
        e[8] = c.className;
        e[9] = c.style;
        e[10] = r;
    } else {
        r = e[10];
    }
    let d;
    if (e[11] !== o.style || e[12] !== u || e[13] !== f || e[14] !== inert || e[15] !== r) {
        d = <div aria-hidden={u} className={f} inert={inert} style={o.style}>{r}</div>;
        e[11] = o.style;
        e[12] = u;
        e[13] = f;
        e[14] = inert;
        e[15] = r;
        e[16] = d;
    } else {
        d = e[16];
    }
    return d;
}
