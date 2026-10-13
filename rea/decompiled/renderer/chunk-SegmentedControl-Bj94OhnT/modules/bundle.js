import { r, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax as disabledIndices_1, ay, az, a0, aA, aB as $t, X, Z, a2, aC, aD, aE, Y, aF, aG, aH, aI, $, a3, aJ, aK, aL, p } from "./index.eager-vendor-Qbf9YA6n.js";
import { bg, bh, bd, bi, bj, bk, bl } from "./index.eager-platform-Dcfeegfw.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "cf9c4f44-1d2d-4f75-bd97-14322ab3ad5e";
            e._sentryDebugIdIdentifier = "sentry-dbid-cf9c4f44-1d2d-4f75-bd97-14322ab3ad5e";
        }
    } catch (e) {}
})();
function useTe() {
    const [, setE] = r.useState({});
    return r.useCallback(()=>{
        setE({});
    }, []);
}
function St(e) {
    const a = a5(e);
    let u = parseFloat(a.width) || 0;
    let g = parseFloat(a.height) || 0;
    const n = a6(e);
    const f = n ? e.offsetWidth : u;
    const r = n ? e.offsetHeight : g;
    if (a7(u) !== f || a7(g) !== r) {
        u = f;
        g = r;
    }
    return {
        width: u,
        height: g
    };
}
const At = "data-composite-item-active";
const Se = [];
function useCe({ loopFocus = true, orientation = "both", grid, onLoop, direction, highlightedIndex, onHighlightedIndexChange, rootRef, enableHomeAndEndKeys = false, stopEventPropagation = false, disabledIndices, modifierKeys = Se }) {
    const [I, setI] = r.useState(0);
    const c = grid != null;
    const xRef = r.useRef(null);
    const M = a8(xRef, rootRef);
    const sRef = r.useRef([]);
    const RRef = r.useRef(false);
    const highlightedIndex_1 = highlightedIndex ?? I;
    const onHighlightedIndexChange_1 = a9((t, o = false)=>{
        (onHighlightedIndexChange ?? setI)(t);
        if (o) {
            const l = sRef.current[t];
            aa(xRef.current, l, direction, orientation);
        }
    });
    const onMapChange = a9((t)=>{
        if (t.size === 0 || RRef.current) {
            return;
        }
        RRef.current = true;
        const o = Array.from(t.keys());
        const l = o.find((k)=>k?.hasAttribute(At)) ?? null;
        const H = l ? o.indexOf(l) : -1;
        if (H !== -1) {
            onHighlightedIndexChange_1(H);
        } else if (ab(o, highlightedIndex_1, disabledIndices)) {
            const k = ac(o, {
                disabledIndices
            });
            if (!ad(o, k)) {
                onHighlightedIndexChange_1(k);
            }
        }
        aa(xRef.current, l, direction, orientation);
    });
    ae(()=>{
        if (disabledIndices == null || highlightedIndex != null || !RRef.current) {
            return;
        }
        const sRef_current = sRef.current;
        if (ab(sRef_current, highlightedIndex_1, disabledIndices)) {
            const o = ac(sRef_current, {
                disabledIndices
            });
            if (!ad(sRef_current, o)) {
                onHighlightedIndexChange_1(o);
            }
        }
    }, [
        disabledIndices,
        highlightedIndex,
        highlightedIndex_1,
        sRef,
        onHighlightedIndexChange_1
    ]);
    const onLoop_1 = a9((t, o, l)=>{
        if (onLoop) {
            return onLoop(t, o, l, sRef);
        }
        return l;
    });
    const L = a9((event)=>{
        const both = enableHomeAndEndKeys ? af : ag;
        if (!both.has(event.key) || Me(event, modifierKeys) || !xRef.current) {
            return;
        }
        const rtl = direction === "rtl";
        const k = rtl ? ao : ap;
        const B = {
            horizontal: k,
            vertical: aq,
            both: k
        }[orientation];
        const A = rtl ? ap : ao;
        const _ = {
            horizontal: A,
            vertical: ar,
            both: A
        }[orientation];
        const W = ah(event.nativeEvent);
        if (W != null && ai(W) && !aj(W)) {
            const { selectionStart, selectionEnd } = W;
            const gt = W.value ?? "";
            if (selectionStart == null || event.shiftKey || selectionStart !== selectionEnd || event.key !== _ && selectionStart < gt.length || event.key !== B && selectionStart > 0) {
                return;
            }
        }
        let startingIndex = highlightedIndex_1;
        const minIndex = ak(sRef, disabledIndices);
        const maxIndex = al(sRef, disabledIndices);
        if (grid != null) {
            startingIndex = grid({
                disabledIndices,
                elementsRef: sRef,
                event,
                highlightedIndex: highlightedIndex_1,
                loopFocus,
                maxIndex,
                minIndex,
                onLoop: onLoop_1,
                orientation,
                rtl
            });
        }
        const V = {
            horizontal: [
                k
            ],
            vertical: [
                aq
            ],
            both: [
                k,
                aq
            ]
        }[orientation];
        const v = {
            horizontal: [
                A
            ],
            vertical: [
                ar
            ],
            both: [
                A,
                ar
            ]
        }[orientation];
        const q = c ? both : ({
            horizontal: enableHomeAndEndKeys ? au : av,
            vertical: enableHomeAndEndKeys ? as : at,
            both
        })[orientation];
        enableHomeAndEndKeys && (event.key === am ? startingIndex = minIndex : event.key === an && (startingIndex = maxIndex));
        startingIndex === highlightedIndex_1 && (V.includes(event.key) || v.includes(event.key)) && (loopFocus && startingIndex === maxIndex && V.includes(event.key) ? (startingIndex = minIndex, onLoop && (startingIndex = onLoop(event, highlightedIndex_1, startingIndex, sRef))) : loopFocus && startingIndex === minIndex && v.includes(event.key) ? (startingIndex = maxIndex, onLoop && (startingIndex = onLoop(event, highlightedIndex_1, startingIndex, sRef))) : startingIndex = ac(sRef.current, {
            startingIndex,
            decrement: v.includes(event.key),
            disabledIndices
        }));
        if (startingIndex !== highlightedIndex_1 && !ad(sRef.current, startingIndex)) {
            if (stopEventPropagation) {
                event.stopPropagation();
            }
            if (q.has(event.key)) {
                event.preventDefault();
            }
            onHighlightedIndexChange_1(startingIndex, true);
            queueMicrotask(()=>{
                sRef.current[startingIndex]?.focus();
            });
        }
    });
    return {
        props: {
            ref: M,
            onFocus (t) {
                const xRef_current = xRef.current;
                const l = ah(t.nativeEvent);
                if (!(!xRef_current || l == null || !ai(l))) {
                    l.setSelectionRange(0, l.value.length ?? 0);
                }
            },
            onKeyDown: L
        },
        highlightedIndex: highlightedIndex_1,
        onHighlightedIndexChange: onHighlightedIndexChange_1,
        elementsRef: sRef,
        disabledIndices,
        onMapChange,
        relayKeyboardEvent: L
    };
}
function Me(event, modifierKeys) {
    for (const u of aw.values()){
        if (!modifierKeys.includes(u) && event.getModifierState(u)) {
            return true;
        }
    }
    return false;
}
function Wt1Component(e) {
    Reflect.set(Wt1Component, "d", 350828350);
    const { render, className, style, refs = disabledIndices_1, props = disabledIndices_1, state = ay, stateAttributesMapping, highlightedIndex, onHighlightedIndexChange, orientation, grid, loopFocus, onLoop, enableHomeAndEndKeys, onMapChange, stopEventPropagation = true, rootRef, disabledIndices, modifierKeys, highlightItemOnHover = false, tag = "div", ...rest } = e;
    const direction = az();
    const { props: props_1, highlightedIndex: highlightedIndex_1, onHighlightedIndexChange: onHighlightedIndexChange_1, elementsRef, onMapChange: onMapChange_1, relayKeyboardEvent } = useCe({
        grid,
        loopFocus,
        onLoop,
        orientation,
        highlightedIndex,
        onHighlightedIndexChange,
        rootRef,
        stopEventPropagation,
        enableHomeAndEndKeys,
        direction,
        disabledIndices,
        modifierKeys
    });
    const k = a0(tag, e, {
        state,
        ref: refs,
        props: [
            props_1,
            ...props,
            rest
        ],
        stateAttributesMapping
    });
    const B = r.useMemo(()=>({
            highlightedIndex: highlightedIndex_1,
            onHighlightedIndexChange: onHighlightedIndexChange_1,
            highlightItemOnHover,
            relayKeyboardEvent
        }), [
        highlightedIndex_1,
        onHighlightedIndexChange_1,
        highlightItemOnHover,
        relayKeyboardEvent
    ]);
    return <aA.Provider value={B}><$t elementsRef={elementsRef} onMapChange={(A)=>{
        onMapChange?.(A);
        onMapChange_1(A);
    }}>{k}</$t></aA.Provider>;
}
const LtContext = r.createContext(undefined);
function useHt() {
    const e = r.useContext(LtContext);
    if (e === undefined) {
        throw new Error(X(64));
    }
    return e;
}
let $e = {
    activationDirection: "data-activation-direction",
    orientation: "data-orientation"
};
const stateAttributesMapping_1 = {
    tabActivationDirection: (e)=>({
            [$e.activationDirection]: e
        })
};
const Ht = r.forwardRef((a, u)=>{
    Reflect.set(Ht, "d", 1579082553);
    const { className, defaultValue = 0, onValueChange, orientation = "horizontal", render, value, style, ...rest } = a;
    const m = a.defaultValue !== undefined;
    const ORef = r.useRef([]);
    const [I, setI] = r.useState(()=>new Map);
    const [c, x] = Z({
        controlled: value,
        default: defaultValue,
        name: "Tabs",
        state: "value"
    });
    const M = value !== undefined;
    const [s, setS] = r.useState(()=>new Map);
    const hRef = r.useRef(undefined);
    const getTabElementBySelectedValue = r.useCallback((d)=>{
        if (d === undefined) {
            return null;
        }
        for (const [E, D] of s.entries()){
            if (D != null && d === (D.value ?? D.index)) {
                return E;
            }
        }
        return null;
    }, [
        s
    ]);
    const [w, setW] = r.useState(()=>({
            previousValue: c,
            tabActivationDirection: "none"
        }));
    const { previousValue, tabActivationDirection } = w;
    let tabActivationDirection_1 = tabActivationDirection;
    let o = false;
    if (previousValue !== c) {
        tabActivationDirection_1 = Ct(previousValue, c, orientation, s);
        o = previousValue != null && c != null && getTabElementBySelectedValue(c) == null;
    }
    const l = o ? previousValue : c;
    const H = previousValue !== l || tabActivationDirection !== tabActivationDirection_1;
    ae(()=>{
        if (H) {
            setW({
                previousValue: l,
                tabActivationDirection: tabActivationDirection_1
            });
        }
    }, [
        l,
        H,
        tabActivationDirection_1
    ]);
    const onValueChange_1 = a9((d, E)=>{
        const D = Ct(c, d, orientation, s);
        E.activationDirection = D;
        onValueChange?.(d, E);
        if (!E.isCanceled) {
            x(d);
        }
    });
    const B = a9((d, E)=>{
        onValueChange?.(d, a2(E, undefined, undefined, {
            activationDirection: "none"
        }));
    });
    const registerMountedTabPanel = a9((d, E)=>{
        setI((D)=>{
            if (D.get(d) === E) {
                return D;
            }
            const Z = new Map(D);
            Z.set(d, E);
            return Z;
        });
    });
    const unregisterMountedTabPanel = a9((d, E)=>{
        setI((D)=>{
            if (!D.has(d) || D.get(d) !== E) {
                return D;
            }
            const Z = new Map(D);
            Z.delete(d);
            return Z;
        });
    });
    const getTabPanelIdByValue = r.useCallback((d)=>I.get(d), [
        I
    ]);
    const getTabIdByPanelValue = r.useCallback((d)=>{
        for (const E of s.values()){
            if (d === E?.value) {
                return E?.id;
            }
        }
    }, [
        s
    ]);
    const j = r.useMemo(()=>({
            getTabElementBySelectedValue,
            getTabIdByPanelValue,
            getTabPanelIdByValue,
            onValueChange: onValueChange_1,
            orientation,
            registerMountedTabPanel,
            setTabMap: setS,
            unregisterMountedTabPanel,
            tabActivationDirection: tabActivationDirection_1,
            value: c
        }), [
        getTabElementBySelectedValue,
        getTabIdByPanelValue,
        getTabPanelIdByValue,
        onValueChange_1,
        orientation,
        registerMountedTabPanel,
        setS,
        unregisterMountedTabPanel,
        tabActivationDirection_1,
        c
    ]);
    const K = r.useMemo(()=>{
        for (const d of s.values()){
            if (d != null && d.value === c) {
                return d;
            }
        }
    }, [
        s,
        c
    ]);
    const V = r.useMemo(()=>{
        for (const d of s.values()){
            if (d != null && !d.disabled) {
                return d.value;
            }
        }
    }, [
        s
    ]);
    const vRef = r.useRef(!m);
    const qRef = r.useRef(defaultValue);
    const FRef = r.useRef(m);
    const QRef = r.useRef(false);
    ae(()=>{
        if (M) {
            return;
        }
        function d(U, J) {
            x(U);
            setW((ot)=>{
                if (ot.previousValue === U && ot.tabActivationDirection === "none") {
                    return ot;
                }
                return {
                    previousValue: U,
                    tabActivationDirection: "none"
                };
            });
            B(U, J);
            vRef.current = false;
        }
        if (s.size === 0) {
            if (QRef.current && c !== null && !hRef.current?.isConnected) {
                d(null, aD);
            }
            return;
        }
        QRef.current = true;
        hRef.current = s.keys().next().value;
        const E = K?.disabled;
        const D = K == null && c !== null;
        if (!E && c === qRef.current) {
            FRef.current = false;
        }
        if (FRef.current && E && c === qRef.current) {
            return;
        }
        const vRef_current = vRef.current;
        if (E || D) {
            const U = V ?? null;
            if (c === U) {
                vRef.current = false;
                return;
            }
            let J = aD;
            if (vRef_current) {
                J = aC;
            } else if (E) {
                J = aE;
            }
            d(U, J);
            return;
        }
        if (vRef_current && K != null) {
            B(c, aC);
            vRef.current = false;
        }
    }, [
        V,
        M,
        B,
        K,
        x,
        s,
        c
    ]);
    const qt = a0("div", a, {
        state: {
            orientation,
            tabActivationDirection: tabActivationDirection_1
        },
        ref: u,
        props: rest,
        stateAttributesMapping: stateAttributesMapping_1
    });
    return <LtContext.Provider value={j}><$t elementsRef={ORef}>{qt}</$t></LtContext.Provider>;
});
function Ct(e, a, orientation, g) {
    if (e == null || a == null) {
        return "none";
    }
    let n = null;
    let f = null;
    for (const [C, T] of g.entries()){
        if (T == null) {
            continue;
        }
        const S = T.value ?? T.index;
        if (e === S) {
            n = C;
        }
        if (a === S) {
            f = C;
        }
        if (n != null && f != null) {
            break;
        }
    }
    if (n == null || f == null) {
        if (n !== f && (typeof e === "number" || typeof e === "string") && typeof e == typeof a) {
            if (orientation === "horizontal") {
                if (a > e) {
                    return "right";
                }
                return "left";
            }
            if (a > e) {
                return "down";
            }
            return "up";
        }
        return "none";
    }
    const r = n.getBoundingClientRect();
    const y = f.getBoundingClientRect();
    if (orientation === "horizontal") {
        if (y.left < r.left) {
            return "left";
        }
        if (y.left > r.left) {
            return "right";
        }
    } else {
        if (y.top < r.top) {
            return "up";
        }
        if (y.top > r.top) {
            return "down";
        }
    }
    return "none";
}
const DtContext = r.createContext(undefined);
function useOt() {
    const e = r.useContext(DtContext);
    if (e === undefined) {
        throw new Error(X(65));
    }
    return e;
}
const Zt1 = r.forwardRef((a, u)=>{
    Reflect.set(Zt1, "d", 2027990485);
    const { className, disabled = false, render, value, id, nativeButton = true, style, ...rest } = a;
    const { value: value_1, getTabPanelIdByValue, orientation, tabActivationDirection } = useHt();
    const { activateOnFocus, highlightedTabIndex, onTabActivation, registerTabResizeObserverElement, setHighlightedTabIndex, tabsListElement } = useOt();
    const id_1 = Y(id);
    const metadata = r.useMemo(()=>({
            disabled,
            id: id_1,
            value
        }), [
        disabled,
        id_1,
        value
    ]);
    const { compositeProps, compositeRef, index } = aF({
        metadata
    });
    const active = value === value_1;
    const oRef = r.useRef(false);
    const lRef = r.useRef(null);
    ae(()=>{
        const lRef_current = lRef.current;
        if (lRef_current) {
            return registerTabResizeObserverElement(lRef_current);
        }
    }, [
        registerTabResizeObserverElement
    ]);
    ae(()=>{
        if (oRef.current) {
            oRef.current = false;
            return;
        }
        if (!(active && index > -1 && highlightedTabIndex !== index)) {
            return;
        }
        const v = tabsListElement;
        if (v != null) {
            const q = aG(aH(v));
            if (q && aI(v, q)) {
                return;
            }
        }
        if (!disabled) {
            setHighlightedTabIndex(index);
        }
    }, [
        active,
        index,
        highlightedTabIndex,
        setHighlightedTabIndex,
        disabled,
        tabsListElement
    ]);
    const { getButtonProps, buttonRef } = $({
        disabled,
        native: nativeButton,
        focusableWhenDisabled: true
    });
    const B = getTabPanelIdByValue(value);
    const ARef = r.useRef(false);
    const _RefRef = r.useRef(false);
    function onClick(v) {
        if (!(active || disabled)) {
            onTabActivation(value, a2(a3, v.nativeEvent, undefined, {
                activationDirection: "none"
            }));
        }
    }
    function onFocus(v) {
        active || (index > -1 && !disabled && setHighlightedTabIndex(index), !disabled && activateOnFocus && (!ARef.current || ARef.current && _RefRef.current) && onTabActivation(value, a2(a3, v.nativeEvent, undefined, {
            activationDirection: "none"
        })));
    }
    function onPointerDown(v) {
        if (active || disabled) {
            return;
        }
        ARef.current = true;
        function q() {
            ARef.current = false;
            _RefRef.current = false;
        }
        if (!v.button || v.button === 0) {
            _RefRef.current = true;
            aH(v.currentTarget).addEventListener("pointerup", q, {
                once: true
            });
        }
    }
    return a0("button", a, {
        state: {
            disabled,
            active,
            orientation,
            tabActivationDirection
        },
        ref: [
            u,
            buttonRef,
            compositeRef,
            lRef
        ],
        props: [
            compositeProps,
            {
                role: "tab",
                "aria-controls": B,
                "aria-selected": active,
                id: id_1,
                onClick,
                onFocus,
                onPointerDown,
                [At]: active ? "" : undefined,
                onKeyDownCapture () {
                    oRef.current = true;
                }
            },
            rest,
            getButtonProps
        ],
        stateAttributesMapping: stateAttributesMapping_1
    });
});
function Pe() {
    return aK;
}
function Ae() {
    return false;
}
function we() {
    return true;
}
function useLe() {
    return aJ.useSyncExternalStore(Pe, Ae, we);
}
const __html = '!function(){const t=document.currentScript.previousElementSibling;if(!t)return;const e=t.closest(\'[role="tablist"]\');if(!e)return;const i=e.querySelector("[data-active]");if(!i)return;if(0===i.offsetWidth||0===e.offsetWidth)return;let o=0,n=0,h=0,l=0,r=0,f=0;function s(t){const e=getComputedStyle(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;return(Math.round(i)!==t.offsetWidth||Math.round(o)!==t.offsetHeight)&&(i=t.offsetWidth,o=t.offsetHeight),{width:i,height:o}}if(null!=i&&null!=e){const{width:t,height:c}=s(i),{width:u,height:d}=s(e),a=i.getBoundingClientRect(),g=e.getBoundingClientRect(),p=u>0?g.width/u:1,b=d>0?g.height/d:1;if(Math.abs(p)>Number.EPSILON&&Math.abs(b)>Number.EPSILON){const t=a.left-g.left,i=a.top-g.top;o=t/p+e.scrollLeft-e.clientLeft,h=i/b+e.scrollTop-e.clientTop}else o=i.offsetLeft,h=i.offsetTop;r=t,f=c,n=e.scrollWidth-o-r,l=e.scrollHeight-h-f}function c(e,i){t.style.setProperty(`--active-tab-${e}`,`${i}px`)}c("left",o),c("right",n),c("top",h),c("bottom",l),c("width",r),c("height",f),r>0&&f>0&&t.removeAttribute("hidden")}();';
let G = {
    activeTabLeft: "--active-tab-left",
    activeTabRight: "--active-tab-right",
    activeTabTop: "--active-tab-top",
    activeTabBottom: "--active-tab-bottom",
    activeTabWidth: "--active-tab-width",
    activeTabHeight: "--active-tab-height"
};
const stateAttributesMapping = {
    ...stateAttributesMapping_1,
    activeTabPosition: ()=>null,
    activeTabSize: ()=>null
};
const Wt = r.forwardRef((a, u)=>{
    Reflect.set(Wt, "d", 1779117378);
    const { className, render, renderBeforeHydration = false, style, ...rest } = a;
    const { nonce } = aL();
    const { getTabElementBySelectedValue, orientation, tabActivationDirection, value } = useHt();
    const { tabsListElement, registerIndicatorUpdateListener } = useOt();
    const c = useLe();
    const x = useTe();
    r.useEffect(()=>registerIndicatorUpdateListener(x), [
        registerIndicatorUpdateListener,
        x
    ]);
    let left = 0;
    let right = 0;
    let top = 0;
    let bottom = 0;
    let p = 0;
    let w = 0;
    let $ = false;
    if (value != null && tabsListElement != null) {
        const k = getTabElementBySelectedValue(value);
        if (k != null) {
            $ = true;
            const { width, height } = St(k);
            const { width: width_1, height: height_1 } = St(tabsListElement);
            const b = k.getBoundingClientRect();
            const j = tabsListElement.getBoundingClientRect();
            const K = width_1 > 0 ? j.width / width_1 : 1;
            const V = height_1 > 0 ? j.height / height_1 : 1;
            if (Math.abs(K) > Number.EPSILON && Math.abs(V) > Number.EPSILON) {
                const q = b.left - j.left;
                const F = b.top - j.top;
                left = q / K + tabsListElement.scrollLeft - tabsListElement.clientLeft;
                top = F / V + tabsListElement.scrollTop - tabsListElement.clientTop;
            } else {
                left = k.offsetLeft;
                top = k.offsetTop;
            }
            p = width;
            w = height;
            right = tabsListElement.scrollWidth - left - p;
            bottom = tabsListElement.scrollHeight - top - w;
        }
    }
    const activeTabPosition = $ ? {
        left,
        right,
        top,
        bottom
    } : null;
    const activeTabSize = $ ? {
        width: p,
        height: w
    } : null;
    const style_1 = $ ? {
        [G.activeTabLeft]: `${left}px`,
        [G.activeTabRight]: `${right}px`,
        [G.activeTabTop]: `${top}px`,
        [G.activeTabBottom]: `${bottom}px`,
        [G.activeTabWidth]: `${p}px`,
        [G.activeTabHeight]: `${w}px`
    } : undefined;
    const o = $ && p > 0 && w > 0;
    const H = a0("span", a, {
        state: {
            orientation,
            activeTabPosition,
            activeTabSize,
            tabActivationDirection
        },
        ref: u,
        props: [
            {
                role: "presentation",
                style: style_1,
                hidden: !o
            },
            rest,
            {
                suppressHydrationWarning: true
            }
        ],
        stateAttributesMapping
    });
    if (value == null) {
        return null;
    }
    return <>{H}{c && renderBeforeHydration && <script nonce={nonce} dangerouslySetInnerHTML={{
        __html
    }} suppressHydrationWarning/>}</>;
});
const Jt1 = r.forwardRef((a, u)=>{
    Reflect.set(Jt1, "d", 2071294389);
    const { activateOnFocus = false, className, loopFocus = true, render, style, ...rest } = a;
    const { onValueChange, orientation, value, setTabMap, tabActivationDirection } = useHt();
    const [z, setZ] = r.useState(0);
    const [x, setX] = r.useState(null);
    const sRef = r.useRef(new Set);
    const RRef = r.useRef(new Set);
    const hRef = r.useRef(null);
    ae(()=>{
        if (typeof ResizeObserver === "undefined") {
            return;
        }
        const o = new ResizeObserver(()=>{
            sRef.current.forEach((l)=>{
                l();
            });
        });
        hRef.current = o;
        if (x) {
            o.observe(x);
        }
        RRef.current.forEach((l)=>{
            o.observe(l);
        });
        return ()=>{
            o.disconnect();
            hRef.current = null;
        };
    }, [
        x
    ]);
    const registerIndicatorUpdateListener = a9((o)=>{
        sRef.current.add(o);
        return ()=>{
            sRef.current.delete(o);
        };
    });
    const registerTabResizeObserverElement = a9((o)=>{
        RRef.current.add(o);
        hRef.current?.observe(o);
        return ()=>{
            RRef.current.delete(o);
            hRef.current?.unobserve(o);
        };
    });
    const onTabActivation = a9((o, l)=>{
        if (o !== value) {
            onValueChange(o, l);
        }
    });
    const state = {
        orientation,
        tabActivationDirection
    };
    const P = {
        "aria-orientation": orientation === "vertical" ? "vertical" : undefined,
        role: "tablist"
    };
    const t = r.useMemo(()=>({
            activateOnFocus,
            highlightedTabIndex: z,
            registerIndicatorUpdateListener,
            registerTabResizeObserverElement,
            onTabActivation,
            setHighlightedTabIndex: setZ,
            tabsListElement: x
        }), [
        activateOnFocus,
        z,
        registerIndicatorUpdateListener,
        registerTabResizeObserverElement,
        onTabActivation,
        setZ,
        x
    ]);
    return <DtContext.Provider value={t}><Wt1Component render={render} className={className} style={style} state={state} refs={[
        u,
        setX
    ]} props={[
        P,
        rest
    ]} stateAttributesMapping={stateAttributesMapping_1} highlightedIndex={z} enableHomeAndEndKeys loopFocus={loopFocus} orientation={orientation} onHighlightedIndexChange={setZ} onMapChange={setTabMap} disabledIndices={disabledIndices_1}/></DtContext.Provider>;
});
const tt = {
    base: {
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-1qjc9v5",
        kB7OPa: "ui-9f619",
        kVAEAm: "ui-1n2onr6",
        kzQI83: "ui-1iyjqo2",
        k7Eaqz: "ui-euugli",
        ks0D6T: "ui-193iq5w",
        $$css: true
    },
    default: {
        kWkggS: "ui-flfp0o",
        $$css: true
    },
    padded: {
        kLKAdn: "ui-493x5y",
        kpe85a: "ui-14ndyrl",
        kGO01o: "ui-b6dno7",
        kE3dHu: "ui-1e7ydrk",
        $$css: true
    },
    rounded: {
        kaIpWk: "ui-1i4c3av",
        $$css: true
    }
};
const Oe = {
    sm: {
        kZKoxP: "ui-1e94bgo",
        $$css: true
    },
    md: {
        kZKoxP: "ui-170hpbr",
        $$css: true
    },
    lg: {
        kZKoxP: "ui-t8t6p",
        $$css: true
    },
    xl: {
        kZKoxP: "ui-12tj2o0",
        $$css: true
    }
};
const ze = {
    sm: {
        kZKoxP: "ui-jmh96e",
        $$css: true
    },
    md: {
        kZKoxP: "ui-17n66dt",
        $$css: true
    },
    lg: {
        kZKoxP: "ui-y8quj6",
        $$css: true
    },
    xl: {
        kZKoxP: "ui-1wl7iu6",
        $$css: true
    }
};
const We = {
    sm: {
        kaIpWk: "ui-1yjdzib",
        $$css: true
    },
    md: {
        kaIpWk: "ui-17dxljr",
        $$css: true
    },
    lg: {
        kaIpWk: "ui-172nrg4",
        $$css: true
    },
    xl: {
        kaIpWk: "ui-1y34t1",
        $$css: true
    }
};
const je = {
    sm: {
        kaIpWk: "ui-13mijux",
        $$css: true
    },
    md: {
        kaIpWk: "ui-1k9pyrz",
        $$css: true
    },
    lg: {
        kaIpWk: "ui-1fkry76",
        $$css: true
    },
    xl: {
        kaIpWk: "ui-126z3em",
        $$css: true
    }
};
const Mt = {
    base: {
        kVAEAm: "ui-10l6tqk",
        kY2c9j: "ui-1ja2u2z",
        kfzvcC: "ui-47corl",
        kB7OPa: "ui-9f619",
        kbCHJM: "ui-vbikie",
        k87sOh: "ui-10uur0e",
        kzqmXN: "ui-offw1",
        kZKoxP: "ui-1gezbiy",
        kWkggS: "ui-i07v4r",
        k1ekBW: "ui-98hnz2",
        kIyJzY: "ui-1bqoo3p ui-sagj69",
        kAMwcw: "ui-1tkypeg",
        $$css: true
    },
    rounded: {
        kaIpWk: "ui-1i4c3av",
        $$css: true
    }
};
const et = {
    base: {
        kysU6D: "ui-jyslct",
        kzQI83: "ui-1c4vz4f",
        kmuXW: "ui-2lah0s",
        kCS8Yb: "ui-dl72j9",
        kVAEAm: "ui-1n2onr6",
        kY2c9j: "ui-1vjfegm",
        kWkggS: "ui-jbqb8w",
        kMwMTN: "ui-19aaqeu ui-1qp4pc4 ui-1gfq6vl",
        k1ekBW: "ui-1gbuem2",
        kIyJzY: "ui-g3p6pi ui-sagj69",
        kAMwcw: "ui-6ekqhr",
        $$css: true
    },
    fullWidth: {
        kzQI83: "ui-1iyjqo2",
        kCS8Yb: "ui-1r8uery",
        $$css: true
    },
    compact: {
        kMwMTN: "ui-4b2ntj ui-1qp4pc4 ui-1gfq6vl",
        $$css: true
    },
    rounded: {
        kaIpWk: "ui-1i4c3av",
        $$css: true
    }
};
function Kt(variant, size) {
    if (variant === "outline") {
        return je[size];
    }
    return We[size];
}
function Ke(variant, size) {
    if (variant === "outline") {
        return ze[size];
    }
    return bl[size];
}
const NtContext = r.createContext(null);
function Ne() {
    const e = r.use(NtContext);
    if (e === null) {
        throw new Error("SegmentedControl.Item must be used within SegmentedControl");
    }
    return e;
}
function BtComponent({ value, defaultValue, onValueChange, variant = "default", size = "md", rounded = false, disabled = false, fullWidth = false, children, "aria-label": aria_label, "aria-labelledby": aria_labelledby, ...rest }) {
    BtComponent.d = 630778233;
    const O = r.useMemo(()=>({
            variant,
            size,
            rounded,
            disabled,
            fullWidth
        }), [
        disabled,
        fullWidth,
        rounded,
        size,
        variant
    ]);
    return <NtContext.Provider value={O}><Ht {...rest} value={value} defaultValue={defaultValue} onValueChange={onValueChange} data-component="segmented-control" data-size={size} data-variant={variant} data-rounded={rounded || undefined} {...{
        0: {
            className: "ui-3nfvp2 ui-1qjc9v5 ui-9f619 ui-2lah0s ui-eq5yr9 ui-193iq5w"
        },
        1: {
            className: "ui-3nfvp2 ui-1qjc9v5 ui-9f619 ui-2lah0s ui-193iq5w ui-h8yej3"
        }
    }[!!fullWidth << 0]}><Jt1 activateOnFocus aria-label={aria_label} aria-labelledby={aria_labelledby} data-component="segmented-control-list" data-disabled={disabled || undefined} {...p(tt.base, tt.padded, Oe[size], variant === "default" && tt.default, variant === "outline" && bh.outline, rounded ? tt.rounded : bg[size])}>{children}<Wt data-component="segmented-control-indicator" {...p(Mt.base, rounded ? Mt.rounded : Kt(variant, size))}/></Jt1></Ht></NtContext.Provider>;
}
function TComponent({ value, disabled = false, children, ...rest }) {
    TComponent.d = 1118998120;
    const n = Ne();
    return <Zt1 {...rest} value={value} disabled={n.disabled || disabled} data-component="segmented-control-item" data-size={n.size} data-variant={n.variant} data-rounded={n.rounded || undefined} {...p(bk.root, bi.content, bj.root, n.rounded ? et.rounded : Kt(n.variant, n.size), Ke(n.variant, n.size), bi.size[n.size], n.size === "sm" ? bd.root : bi.typography[n.size], et.base, n.variant === "compact" && et.compact, n.fullWidth && et.fullWidth)}>{children}</Zt1>;
}
const qe = Object.assign(BtComponent, {
    Item: TComponent
});
export { qe as S };
