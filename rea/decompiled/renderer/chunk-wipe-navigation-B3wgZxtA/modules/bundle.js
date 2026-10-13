import { c as c_1, r as r_1, p as p_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { u as u_1 } from "./index.eager-platform-Dcfeegfw.js";
import { af } from "./index.eager-app-Cj5f8Gby.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "cd5231a7-1790-40f9-a052-b7a58521f5df";
            e._sentryDebugIdIdentifier = "sentry-dbid-cd5231a7-1790-40f9-a052-b7a58521f5df";
        }
    } catch (e) {}
})();
const c = {
    viewport: {
        kVAEAm: "sand-1n2onr6",
        kHBbk8: "sand-c8icb0",
        k7Eaqz: "sand-euugli",
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-2lah0s",
        kXHlph: "sand-6ikm8r",
        kORKVm: "sand-10wlt62",
        kWkggS: "sand-10e981r",
        $$css: true
    },
    incoming: {
        kVAEAm: "sand-1n2onr6",
        kY2c9j: "sand-1ja2u2z",
        kB7OPa: "sand-9f619",
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        k7Eaqz: "sand-euugli",
        kAzted: "sand-1us19tq",
        kzqmXN: "sand-h8yej3",
        kZKoxP: "sand-5yr21d",
        kWkggS: "sand-gcd1z6",
        $$css: true
    },
    incomingPush: {
        kY2c9j: "sand-1vjfegm",
        kKVMdj: "sand-1p0om8u",
        k44tkh: "sand-rez4as",
        kyAemX: "sand-q56fva",
        $$css: true
    },
    incomingPop: {
        kKVMdj: "sand-ovk6sj",
        k44tkh: "sand-rez4as",
        kyAemX: "sand-q56fva",
        $$css: true
    },
    outgoing: {
        kVAEAm: "sand-10l6tqk",
        k87sOh: "sand-13vifvy",
        krVfgx: "sand-1ey2m1c",
        kLqNvP: "sand-1o0tod",
        kt4wiu: "sand-tijo5x",
        kY2c9j: "sand-1ja2u2z",
        kB7OPa: "sand-9f619",
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        k7Eaqz: "sand-euugli",
        kWkggS: "sand-gcd1z6",
        kfzvcC: "sand-47corl",
        k44tkh: "sand-rez4as",
        kyAemX: "sand-q56fva",
        kWV6AL: "sand-10e4vud",
        $$css: true
    },
    outgoingPush: {
        kKVMdj: "sand-4gu42u",
        $$css: true
    },
    outgoingPop: {
        kY2c9j: "sand-1vjfegm",
        kKVMdj: "sand-2lu41s",
        $$css: true
    },
    incomingCrossfadePush: {
        kY2c9j: "sand-1vjfegm",
        kKVMdj: "sand-vi7102",
        k44tkh: "sand-11c07rx",
        kyAemX: "sand-q56fva",
        $$css: true
    },
    incomingCrossfadePop: {
        kY2c9j: "sand-1vjfegm",
        kKVMdj: "sand-y57tle",
        k44tkh: "sand-11c07rx",
        kyAemX: "sand-q56fva",
        $$css: true
    },
    outgoingCrossfadePush: {
        kKVMdj: "sand-ljavfh",
        k44tkh: "sand-11c07rx",
        $$css: true
    },
    outgoingCrossfadePop: {
        kKVMdj: "sand-1lcmlh9",
        k44tkh: "sand-11c07rx",
        $$css: true
    }
};
const K = 'h1, h2, h3, h4, h5, h6, [role="heading"]';
const P = '[aria-hidden="true"], [inert]';
function x() {
    const document_activeElement = document.activeElement;
    return document_activeElement == null || document_activeElement === document.body || document_activeElement.closest("[inert]") != null;
}
function A(e) {
    if (e.hasAttribute("tabindex")) {
        e.focus({
            preventScroll: true
        });
        return;
    }
    e.setAttribute("tabindex", "-1");
    e.focus({
        preventScroll: true
    });
    if (document.activeElement === e) {
        e.addEventListener("blur", ()=>e.removeAttribute("tabindex"), {
            once: true
        });
    } else {
        e.removeAttribute("tabindex");
    }
}
function E(e) {
    return Array.from(e.querySelectorAll(K)).find((n)=>n.closest(P) == null) ?? null;
}
function C(e, n) {
    const t = new MutationObserver(()=>{
        if (!n.matches(P)) {
            t.disconnect();
            if (e.isConnected && x()) {
                z(e);
            }
        }
    });
    t.observe(n, {
        attributeFilter: [
            "aria-hidden",
            "inert"
        ]
    });
}
function z(e) {
    const n = e.closest(P);
    if (n != null) {
        C(e, n);
        return;
    }
    const t = E(e);
    if (t != null) {
        A(t);
    }
    if (!x() || (A(e), document.activeElement !== e)) {
        return;
    }
    const s = new MutationObserver(()=>{
        const o = E(e);
        if (o != null) {
            s.disconnect();
            A(o);
        }
    });
    s.observe(e, {
        childList: true,
        subtree: true
    });
    e.addEventListener("blur", ()=>s.disconnect(), {
        once: true
    });
}
export function u(e) {
    const n = c_1.c(10);
    const { current, paneKey, resolveFocus } = e;
    const vRef = r_1.useRef(null);
    const lRef = r_1.useRef(null);
    const [f, setF] = r_1.useState(null);
    let g;
    if (n[0] !== resolveFocus) {
        g = ()=>{
            const lRef_current = lRef.current;
            if (lRef_current == null) {
                return;
            }
            lRef.current = null;
            const vRef_current = vRef.current;
            resolveFocus(lRef_current, vRef_current)?.focus({
                preventScroll: true
            });
            if (vRef_current != null && x()) {
                z(vRef_current);
            }
        };
        n[0] = resolveFocus;
        n[1] = g;
    } else {
        g = n[1];
    }
    u_1(g);
    let navigate;
    if (n[2] !== current) {
        navigate = ({ direction, landing })=>{
            lRef.current = landing;
            setF(af() ? null : {
                direction,
                from: current
            });
        };
        n[2] = current;
        n[3] = navigate;
    } else {
        navigate = n[3];
    }
    let endTransition;
    if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
        endTransition = ()=>setF(null);
        n[4] = endTransition;
    } else {
        endTransition = n[4];
    }
    let r;
    if (n[5] !== current || n[6] !== paneKey || n[7] !== navigate || n[8] !== f) {
        r = {
            current,
            transition: f,
            currentRef: vRef,
            paneKey,
            navigate,
            endTransition
        };
        n[5] = current;
        n[6] = paneKey;
        n[7] = navigate;
        n[8] = f;
        n[9] = r;
    } else {
        r = n[9];
    }
    return r;
}
function M(direction, n) {
    if (n === "crossfade") {
        if (direction === "push") {
            return c.incomingCrossfadePush;
        }
        return c.incomingCrossfadePop;
    }
    if (direction === "push") {
        return c.incomingPush;
    }
    return c.incomingPop;
}
function w(direction, n) {
    if (n === "crossfade") {
        if (direction === "push") {
            return c.outgoingCrossfadePush;
        }
        return c.outgoingCrossfadePop;
    }
    if (direction === "push") {
        return c.outgoingPush;
    }
    return c.outgoingPop;
}
function R(e, n) {
    if (e === n) {
        return `out:${e}`;
    }
    return e;
}
export function W(e) {
    W.d = 1465;
    const n = c_1.c(27);
    const { navigation, renderPane, style, variant } = e;
    const l = variant === undefined ? "wipe" : variant;
    const { current, transition, paneKey, currentRef } = navigation;
    let u;
    let r;
    let d;
    if (n[0] !== current || n[1] !== navigation || n[2] !== paneKey || n[3] !== renderPane || n[4] !== style || n[5] !== transition || n[6] !== l) {
        u = paneKey(current);
        if (n[10] !== style) {
            r = p_1(c.viewport, style);
            n[10] = style;
            n[11] = r;
        } else {
            r = n[11];
        }
        d = transition == null ? null : <div key={R(paneKey(transition.from), u)} aria-hidden inert onAnimationEnd={(b)=>{
            if (b.target === b.currentTarget) {
                navigation.endTransition();
            }
        }} {...p_1(c.outgoing, w(transition.direction, l))}>{renderPane(transition.from, false)}</div>;
        n[0] = current;
        n[1] = navigation;
        n[2] = paneKey;
        n[3] = renderPane;
        n[4] = style;
        n[5] = transition;
        n[6] = l;
        n[7] = u;
        n[8] = r;
        n[9] = d;
    } else {
        u = n[7];
        r = n[8];
        d = n[9];
    }
    let a;
    if (n[12] !== transition || n[13] !== l) {
        a = p_1(c.incoming, transition != null && M(transition.direction, l));
        n[12] = transition;
        n[13] = l;
        n[14] = a;
    } else {
        a = n[14];
    }
    let m;
    if (n[15] !== current || n[16] !== renderPane) {
        m = renderPane(current, true);
        n[15] = current;
        n[16] = renderPane;
        n[17] = m;
    } else {
        m = n[17];
    }
    let h;
    if (n[18] !== currentRef || n[19] !== u || n[20] !== a || n[21] !== m) {
        h = <div key={u} ref={currentRef} {...a}>{m}</div>;
        n[18] = currentRef;
        n[19] = u;
        n[20] = a;
        n[21] = m;
        n[22] = h;
    } else {
        h = n[22];
    }
    let p;
    if (n[23] !== r || n[24] !== d || n[25] !== h) {
        p = <div {...r}>{d}{h}</div>;
        n[23] = r;
        n[24] = d;
        n[25] = h;
        n[26] = p;
    } else {
        p = n[26];
    }
    return p;
}
