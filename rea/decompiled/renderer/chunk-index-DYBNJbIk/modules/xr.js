import { V, r as r_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { l3 as Close, u3 as Description } from "./Rt.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
const o = (e, value)=>Object.defineProperty(e, "name", {
        value,
        configurable: true
    });
const fn = (e, t)=>{
    for(var r in t){
        Object.defineProperty(e, r, {
            get: t[r],
            enumerable: true
        });
    }
};
const yR = (e, t, r, n)=>{
    if (t && typeof t === "object" || typeof t === "function") {
        for (let a of Object.getOwnPropertyNames(t)){
            if (!hasOwnProperty.call(e, a) && a !== r) {
                Object.defineProperty(e, a, {
                    get: ()=>t[a],
                    enumerable: !(n = Object.getOwnPropertyDescriptor(t, a)) || n.enumerable
                });
            }
        }
    }
    return e;
};
function _S(e, t) {
    return o((n, ...a)=>{
        const i = new URL(e);
        i.searchParams.set("code", n.toString());
        a.forEach((s)=>i.searchParams.append("args[]", s));
        return `${t} error #${n}; visit ${i} for the full message.`;
    }, "formatErrorMessage");
}
o(_S, "createFormatErrorMessage");
const sO = _S("https://base-ui.com/production-error", "Base UI");
const cs = sO;
const OSContext = r_1.createContext(undefined);
export function zr(e) {
    const t = r_1.useContext(OSContext);
    if (!e && t === undefined) {
        throw new Error(cs(27));
    }
    return t;
}
o(zr, "useDialogRootContext");
const T0 = {};
export function hn(e, t) {
    const rRef = r_1.useRef(T0);
    if (rRef.current === T0) {
        rRef.current = e(t);
    }
    return rRef;
}
o(hn, "useRefWithInit");
export function tc(e, t, r, n) {
    const current = hn(kg).current;
    if (DS(current, e, t, r, n)) {
        Tg(current, [
            e,
            t,
            r,
            n
        ]);
    }
    return current.callback;
}
o(tc, "useMergedRefs");
function MS(e) {
    const current = hn(kg).current;
    if (LS(current, e)) {
        Tg(current, e);
    }
    return current.callback;
}
o(MS, "useMergedRefsN");
function kg() {
    return {
        callback: null,
        cleanup: null,
        refs: []
    };
}
o(kg, "createForkRef");
function DS(e, t, r, n, a) {
    return e.refs[0] !== t || e.refs[1] !== r || e.refs[2] !== n || e.refs[3] !== a;
}
o(DS, "didChange");
function LS(e, t) {
    return e.refs.length !== t.length || e.refs.some((r, n)=>r !== t[n]);
}
o(LS, "didChangeN");
function Tg(e, t) {
    e.refs = t;
    if (t.every((r)=>r == null)) {
        e.callback = null;
        return;
    }
    e.callback = (r)=>{
        if (e.cleanup) {
            e.cleanup();
            e.cleanup = null;
        }
        if (r != null) {
            const n = Array(t.length).fill(null);
            for(let a = 0; a < t.length; a += 1){
                const i = t[a];
                if (i != null) {
                    switch(typeof i){
                        case "function":
                            {
                                const s = i(r);
                                if (typeof s === "function") {
                                    n[a] = s;
                                }
                                break;
                            }
                        case "object":
                            {
                                i.current = r;
                                break;
                            }
                    }
                }
            }
            e.cleanup = ()=>{
                for(let a = 0; a < t.length; a += 1){
                    const i = t[a];
                    if (i != null) {
                        switch(typeof i){
                            case "function":
                                {
                                    const s = n[a];
                                    if (typeof s === "function") {
                                        s();
                                    } else {
                                        i(null);
                                    }
                                    break;
                                }
                            case "object":
                                {
                                    i.current = null;
                                    break;
                                }
                        }
                    }
                }
            };
        }
    };
}
o(Tg, "update");
const cO = parseInt(r_1.version, 10);
export function ju(e) {
    return cO >= e;
}
o(ju, "isReactVersionAtLeast");
function Ap(e) {
    if (!r_1.isValidElement(e)) {
        return null;
    }
    const t = e;
    const t_props = t.props;
    return (ju(19) ? t_props?.ref : t.ref) ?? null;
}
o(Ap, "getReactElementRef");
function iu(e, t) {
    if (e && !t) {
        return e;
    }
    if (!e && t) {
        return t;
    }
    if (e || t) {
        return {
            ...e,
            ...t
        };
    }
}
o(iu, "mergeObjects");
export function zu() {}
o(zu, "NOOP");
export const lO = Object.freeze([]);
export const Ht = Object.freeze({});
function $S(e, t) {
    const r = {};
    for(const n in e){
        const a = e[n];
        if (t?.hasOwnProperty(n)) {
            const i = t[n](a);
            if (i != null) {
                Object.assign(r, i);
            }
            continue;
        }
        if (a === true) {
            r[`data-${n.toLowerCase()}`] = "";
        } else if (a) {
            r[`data-${n.toLowerCase()}`] = a.toString();
        }
    }
    return r;
}
o($S, "getStateAttributesProps");
function FS(e, t) {
    if (typeof e === "function") {
        return e(t);
    }
    return e;
}
o(FS, "resolveClassName");
function BS(e, t) {
    if (typeof e === "function") {
        return e(t);
    }
    return e;
}
o(BS, "resolveStyle");
const Ig = {};
function Gu(e, t, r, n, a) {
    if (!r && !n && !a && !e) {
        return rc(t);
    }
    let i = rc(e);
    if (t) {
        i = Ya(i, t);
    }
    if (r) {
        i = Ya(i, r);
    }
    if (n) {
        i = Ya(i, n);
    }
    if (a) {
        i = Ya(i, a);
    }
    return i;
}
o(Gu, "mergeProps");
function US(e) {
    if (e.length === 0) {
        return Ig;
    }
    if (e.length === 1) {
        return rc(e[0]);
    }
    let t = rc(e[0]);
    for(let r = 1; r < e.length; r += 1){
        t = Ya(t, e[r]);
    }
    return t;
}
o(US, "mergePropsN");
function rc(e) {
    if (Hu(e)) {
        return {
            ...Ng(e, Ig)
        };
    }
    return jS(e);
}
o(rc, "createInitialMergedProps");
function Ya(e, t) {
    if (Hu(t)) {
        return Ng(t, e);
    }
    return zS(e, t);
}
o(Ya, "mergeInto");
function jS(e) {
    const t = {
        ...e
    };
    for(const r in t){
        const n = t[r];
        if (Cg(r, n)) {
            t[r] = Pg(n);
        }
    }
    return t;
}
o(jS, "copyInitialProps");
function zS(e, t) {
    if (!t) {
        return e;
    }
    for(const r in t){
        const n = t[r];
        switch(r){
            case "style":
                {
                    e[r] = iu(e.style, n);
                    break;
                }
            case "className":
                {
                    e[r] = Rg(e.className, n);
                    break;
                }
            default:
                if (Cg(r, n)) {
                    e[r] = GS(e[r], n);
                } else {
                    e[r] = n;
                }
        }
    }
    return e;
}
o(zS, "mutablyMergeInto");
function Cg(e, t) {
    const r = e.charCodeAt(0);
    const n = e.charCodeAt(1);
    const a = e.charCodeAt(2);
    return r === 111 && n === 110 && a >= 65 && a <= 90 && (typeof t === "function" || typeof t === "undefined");
}
o(Cg, "isEventHandler");
function Hu(e) {
    return typeof e === "function";
}
o(Hu, "isPropsGetter");
function Ng(e, t) {
    if (Hu(e)) {
        return e(t);
    }
    return e ?? Ig;
}
o(Ng, "resolvePropsGetter");
function GS(e, t) {
    if (t) {
        if (e) {
            return (...r)=>{
                const n = r[0];
                if (Vg(n)) {
                    const i = n;
                    nc(i);
                    const s = t(...r);
                    i.baseUIHandlerPrevented || e?.(...r);
                    return s;
                }
                const a = t(...r);
                e?.(...r);
                return a;
            };
        }
        return Pg(t);
    }
    return e;
}
o(GS, "mergeEventHandlers");
function Pg(e) {
    return e && ((...t)=>{
        const r = t[0];
        if (Vg(r)) {
            nc(r);
        }
        return e(...t);
    });
}
o(Pg, "wrapEventHandler");
function nc(e) {
    e.preventBaseUIHandler = ()=>{
        e.baseUIHandlerPrevented = true;
    };
    return e;
}
o(nc, "makeEventPreventable");
function Rg(e, t) {
    if (t) {
        if (e) {
            return `${t} ${e}`;
        }
        return t;
    }
    return e;
}
o(Rg, "mergeClassNames");
function Vg(e) {
    return e != null && typeof e === "object" && "nativeEvent" in e;
}
o(Vg, "isSyntheticEvent");
export function Gr(e, t, r = {}) {
    let t_render = t.render;
    if (r.enabled !== false) {
        t_render = WS(t_render);
    }
    const a = HS(t, r, t_render);
    if (r.enabled === false) {
        return null;
    }
    const i = r.state ?? Ht;
    return YS(e, t_render, a, i);
}
o(Gr, "useRenderElement");
function HS({ className, style }, { state = Ht, ref, props, stateAttributesMapping, enabled = true }, r) {
    const m = enabled ? FS(className, state) : undefined;
    const d = enabled ? BS(style, state) : undefined;
    const p = enabled ? $S(state, stateAttributesMapping) : Ht;
    const h = enabled && props ? KS(props) : undefined;
    const f = enabled ? iu(p, h) ?? {} : Ht;
    typeof document !== "undefined" && (enabled ? Array.isArray(ref) ? f.ref = MS([
        f.ref,
        Ap(r),
        ...ref
    ]) : f.ref = tc(f.ref, Ap(r), ref) : tc(null, null));
    if (enabled) {
        if (m !== undefined) {
            f.className = Rg(f.className, m);
        }
        if (d !== undefined) {
            f.style = iu(f.style, d);
        }
        return f;
    }
    return Ht;
}
o(HS, "useRenderElementProps");
function KS(e) {
    if (Array.isArray(e)) {
        return US(e);
    }
    return Gu(undefined, e);
}
o(KS, "resolveRenderFunctionProps");
var SYMBOL_REACT_LAZY = Symbol.for("react.lazy");
function WS(e) {
    if (e?.$$typeof !== SYMBOL_REACT_LAZY) {
        return e;
    }
    const t = r_1.Children.toArray(e)[0];
    if (r_1.isValidElement(t)) {
        return t;
    }
    return e;
}
o(WS, "unwrapLazyRenderProp");
function YS(e, t, r, n) {
    if (t) {
        if (typeof t === "function") {
            return t(r, n);
        }
        const a = Gu(r, t.props);
        a.ref = r.ref;
        return r_1.cloneElement(t, a);
    }
    if (e && typeof e === "string") {
        return XSComponent(e, r);
    }
    throw new Error(cs(8));
}
o(YS, "evaluateRenderProp");
function XSComponent(e, t) {
    switch(e){
        case "button":
            return <button type="button" {...t} key={t.key}/>;
        case "img":
            return <img alt="" {...t} key={t.key}/>;
        default:
            return r_1.createElement(e, t);
    }
}
o(XSComponent, "renderTag");
const _g = "data-starting-style";
const ZS = "data-ending-style";
const mO = {
    [_g]: ""
};
const dO = {
    [ZS]: ""
};
const qS = {
    transitionStatus (e) {
        switch(e){
            case "starting":
                return mO;
            case "ending":
                return dO;
            default:
                return null;
        }
    }
};
const Tc = {};
fn(Tc, {
    align: ()=>gO,
    anchorHidden: ()=>e2,
    closed: ()=>JS,
    endingStyle: ()=>fO,
    open: ()=>QS,
    side: ()=>hO,
    startingStyle: ()=>pO
});
var QS = "data-open";
var JS = "data-closed";
var pO = _g;
var fO = ZS;
var e2 = "data-anchor-hidden";
var hO = "data-side";
var gO = "data-align";
const xO = "data-popup-open";
const bO = {
    [xO]: ""
};
const vO = {
    [QS]: ""
};
const yO = {
    [JS]: ""
};
const wO = {
    [e2]: ""
};
const SO = {
    open (e) {
        if (e) {
            return bO;
        }
        return null;
    }
};
const t2 = {
    open (e) {
        if (e) {
            return vO;
        }
        return yO;
    },
    anchorHidden (e) {
        if (e) {
            return wO;
        }
        return null;
    }
};
const stateAttributesMapping = {
    ...t2,
    ...qS
};
const Backdrop = r_1.forwardRef(o((t, r)=>{
    const { render, className, style, forceRender = false, ...rest } = t;
    const l = zr();
    const open = l.useState("open");
    const m = l.useState("nested");
    const d = l.useState("mounted");
    const transitionStatus = l.useState("transitionStatus");
    return Gr("div", t, {
        state: {
            open,
            transitionStatus
        },
        ref: [
            l.context.backdropRef,
            r
        ],
        stateAttributesMapping,
        props: [
            {
                role: "presentation",
                hidden: !d,
                style: {
                    userSelect: "none",
                    WebkitUserSelect: "none"
                }
            },
            rest
        ],
        enabled: forceRender || !m
    });
}, "DialogBackdrop"));
function Ic() {
    return typeof window !== "undefined";
}
o(Ic, "hasWindow");
export function Wt(e) {
    if (Ku(e)) {
        return (e.nodeName || "").toLowerCase();
    }
    return "#document";
}
o(Wt, "getNodeName");
export function Er(e) {
    return e?.ownerDocument?.defaultView || window;
}
o(Er, "getWindow");
function r2(e) {
    return ((Ku(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
o(r2, "getDocumentElement");
export function Ku(e) {
    if (Ic()) {
        return e instanceof Node || e instanceof Er(e).Node;
    }
    return false;
}
o(Ku, "isNode");
export function Xa(e) {
    if (Ic()) {
        return e instanceof Element || e instanceof Er(e).Element;
    }
    return false;
}
o(Xa, "isElement");
export function Ut(e) {
    if (Ic()) {
        return e instanceof HTMLElement || e instanceof Er(e).HTMLElement;
    }
    return false;
}
o(Ut, "isHTMLElement");
export function Ca(e) {
    if (!Ic() || typeof ShadowRoot === "undefined") {
        return false;
    }
    return e instanceof ShadowRoot || e instanceof Er(e).ShadowRoot;
}
o(Ca, "isShadowRoot");
export function n2(e) {
    const { overflow, overflowX, overflowY, display } = Cc(e);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
o(n2, "isOverflowElement");
export function yl(e) {
    return /^(html|body|#document)$/.test(Wt(e));
}
o(yl, "isLastTraversableNode");
export function Cc(e) {
    return Er(e).getComputedStyle(e);
}
o(Cc, "getComputedStyle");
export function a2(e) {
    if (Wt(e) === "html") {
        return e;
    }
    const t = e.assignedSlot || e.parentNode || Ca(e) && e.host || r2(e);
    if (Ca(t)) {
        return t.host;
    }
    return t;
}
o(a2, "getParentNode");
const Og = {
    ...V
};
const Og_useInsertionEffect = Og.useInsertionEffect;
const kO = Og_useInsertionEffect && Og_useInsertionEffect !== Og.useLayoutEffect ? Og_useInsertionEffect : (e)=>e();
export function st(e) {
    const current = hn(o2).current;
    current.next = e;
    kO(current.effect);
    return current.trampoline;
}
o(st, "useStableCallback");
function o2() {
    const e = {
        next: undefined,
        callback,
        trampoline: o((...t)=>e.callback?.(...t), "trampoline"),
        effect: o(()=>{
            e.callback = e.next;
        }, "effect")
    };
    return e;
}
o(o2, "createStableCallback");
function callback() {}
o(callback, "assertNotCalled");
const TO = o(()=>{}, "noop");
const at = typeof document !== "undefined" ? r_1.useLayoutEffect : TO;
const IOContext = r_1.createContext(undefined);
function useS2(e = false) {
    const t = r_1.useContext(IOContext);
    if (t === undefined && !e) {
        throw new Error(cs(16));
    }
    return t;
}
o(useS2, "useCompositeRootContext");
function useC2({ focusableWhenDisabled, disabled, composite = false, tabIndex = 0, isNativeButton }) {
    const s = composite && focusableWhenDisabled !== false;
    const c = composite && focusableWhenDisabled === false;
    return {
        props: r_1.useMemo(()=>{
            const u = {
                onKeyDown (m) {
                    if (disabled && focusableWhenDisabled && m.key !== "Tab") {
                        m.preventDefault();
                    }
                }
            };
            if (!composite) {
                u.tabIndex = tabIndex;
                if (!isNativeButton && disabled) {
                    u.tabIndex = focusableWhenDisabled ? tabIndex : -1;
                }
            }
            if (isNativeButton && (focusableWhenDisabled || s) || !isNativeButton && disabled) {
                u["aria-disabled"] = disabled;
            }
            if (isNativeButton && (!focusableWhenDisabled || c)) {
                u.disabled = disabled;
            }
            return u;
        }, [
            composite,
            disabled,
            focusableWhenDisabled,
            s,
            c,
            isNativeButton,
            tabIndex
        ])
    };
}
o(useC2, "useFocusableWhenDisabled");
export function ht(e) {
    return e?.ownerDocument || document;
}
o(ht, "ownerDocument");
function wl(e, t, { detail = 0 } = {}) {
    e.dispatchEvent(new (Er(e)).PointerEvent("click", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail,
        shiftKey: t.shiftKey,
        ctrlKey: t.ctrlKey,
        altKey: t.altKey,
        metaKey: t.metaKey
    }));
}
o(wl, "dispatchClickWithModifiers");
export function Mg({ disabled = false, focusableWhenDisabled, tabIndex = 0, native = true, composite } = {}) {
    const sRef = r_1.useRef(null);
    const c = useS2(true);
    const composite_1 = composite ?? c !== undefined;
    const { props } = useC2({
        focusableWhenDisabled,
        disabled,
        composite: composite_1,
        tabIndex,
        isNativeButton: native
    });
    const m = r_1.useCallback(()=>{
        const sRef_current = sRef.current;
        if (Sl(sRef_current) && composite_1 && disabled && props.disabled === undefined && sRef_current.disabled) {
            sRef_current.disabled = false;
        }
    }, [
        disabled,
        props.disabled,
        composite_1
    ]);
    at(m, [
        m
    ]);
    const getButtonProps = r_1.useCallback(({ onClick, onMouseDown, onKeyUp, onKeyDown, onPointerDown, ...rest } = {})=>Gu({
            onClick (S) {
                if (disabled) {
                    S.preventDefault();
                    return;
                }
                onClick?.(S);
            },
            onMouseDown (S) {
                disabled || onMouseDown?.(S);
            },
            onKeyDown (S) {
                if (disabled || (nc(S), onKeyDown?.(S), S.baseUIHandlerPrevented)) {
                    return;
                }
                const k = S.target === S.currentTarget;
                const S_currentTarget = S.currentTarget;
                const I = Sl(S_currentTarget);
                const T = !native && l2(S_currentTarget);
                const O = k && (native ? I : !T);
                const N = S.key === "Enter";
                const U = S.key === " ";
                const G = S_currentTarget.getAttribute("role");
                const B = G?.startsWith("menuitem") || G === "option" || G === "gridcell";
                if (k && composite_1 && U) {
                    if (S.defaultPrevented && B) {
                        return;
                    }
                    S.preventDefault();
                    if (!native || I) {
                        S.preventBaseUIHandler();
                        wl(S_currentTarget, S);
                    }
                    return;
                }
                if (!O || native || !U && !N) {
                    if (k && T && U) {
                        S.preventDefault();
                    }
                    return;
                }
                if (!S.defaultPrevented) {
                    S.preventDefault();
                    if (N) {
                        S.preventBaseUIHandler();
                        wl(S_currentTarget, S);
                    }
                }
            },
            onKeyUp (S) {
                if (!disabled) {
                    nc(S);
                    onKeyUp?.(S);
                    if (S.target === S.currentTarget && native && composite_1 && Sl(S.currentTarget) && S.key === " ") {
                        S.preventDefault();
                        return;
                    }
                    S.baseUIHandlerPrevented || S.target === S.currentTarget && !native && !composite_1 && !S.defaultPrevented && S.key === " " && (S.preventBaseUIHandler(), wl(S.currentTarget, S));
                }
            },
            onPointerDown (S) {
                if (disabled) {
                    S.preventDefault();
                    return;
                }
                onPointerDown?.(S);
            }
        }, native ? {
            type: "button"
        } : {
            role: "button"
        }, props, rest), [
        disabled,
        props,
        composite_1,
        native
    ]);
    const buttonRef = st((h)=>{
        sRef.current = h;
        m();
    });
    return {
        getButtonProps,
        buttonRef
    };
}
o(Mg, "useButton");
function Sl(e) {
    return Ut(e) && e.tagName === "BUTTON";
}
o(Sl, "isButtonElement");
function l2(e) {
    return Ut(e) && e.tagName === "A" && !!e.href;
}
o(l2, "isValidLinkElement");
export { Backdrop as AO, OSContext as OS, Og, SO, Tc, _g, at, cs, fn, Close as l3, o, qS, t2, Description as u3 };
export const xr = {
    get Backdrop () {
        return Backdrop;
    },
    get Close () {
        return Close;
    },
    get Description () {
        return Description;
    },
    get Handle () {
        return _E;
    },
    get Popup () {
        return Y3;
    },
    get Portal () {
        return Z3;
    },
    get Root () {
        return tM;
    },
    get Title () {
        return nM;
    },
    get Trigger () {
        return aM;
    },
    get Viewport () {
        return rM;
    },
    get createHandle () {
        return OE;
    }
};
