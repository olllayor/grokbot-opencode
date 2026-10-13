import { c as c_1, u as u_1, r as r_1, p as p_1, j as j_1, T, aJ, aM, R, U, aN, i as i_1, aO } from "./index.eager-vendor-Qbf9YA6n.js";
import { E, d, N, g, P, a, D, b as b_1, e as e_1, c as c_2, f, h, m, i as i_2, j as j_2, I, s, k, l, n, o, p as p_2, T as T_1, q as q_1, r as r_2, t as t_1, u as u_2, F, M, v, S, w, x, y, z } from "./chunk-index-CPur7w6O.js";
import { u as u_3, a_ as At1, E as E_1, c as c_3, x as x_1, i as i_3 } from "./index.eager-platform-Dcfeegfw.js";
import { r as r_3, D as D_1, h4, Y, cm, J, d as d_1, kj, bc, h5, kk, kl as kl_1, ei as ei_1, G, km, I as I_1, kn as kn_1, a6, a7, d0, ko as ko_1, kp, kq, kr, eY, fB, ks as ks_1, kt, ku, kv, kw, b7, kx, bT, ky, kz, kA, kB, kC, kD, kE, kF, kG } from "./index.eager-app-Cj5f8Gby.js";
import { I as I_2, cP, cQ, cR, cS, ch, cT, cf as No1, cU, cV, a3 as So1, cW as Ro1, P as P_1, cX, cY, cZ as Lo1, c_, c$, d0 as d0_1, d1 as Fo1, d2, d3 as Po1, d4, d5, W, d6 as Go1, d7, d8 } from "./index-ZYxf-aBb.js";
import { r as r_4, R as R_1, M as M_1 } from "./chunk-reference-menu-DCLocG7M.js";
import { u as u_4 } from "./chunk-use-active-option-scroll-B1hXdW5d.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "2df56833-7463-4d74-ac83-17aeed12cb26";
            e._sentryDebugIdIdentifier = "sentry-dbid-2df56833-7463-4d74-ac83-17aeed12cb26";
        }
    } catch (e) {}
})();
const ls = 320;
const xo = 16;
const So = "--sand-suggestion-max-height";
const _e = {
    glyphIn16: {
        kzqmXN: "sand-1kky2od",
        kZKoxP: "sand-lup9mm",
        $$css: true
    },
    neutralGlyph: {
        kMwMTN: "sand-1xrcxiq",
        $$css: true
    },
    automationGlyph: {
        kMwMTN: "sand-mbjja0",
        $$css: true
    }
};
function As1Component(t) {
    As1Component.d = 1337;
    const e = c_1.c(7);
    const { item } = t;
    const s = h4();
    if (item.kind === "action") {
        let o;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            o = <I_2 name="command" size="md" style={[
                _e.glyphIn16,
                _e.neutralGlyph
            ]}/>;
            e[0] = o;
        } else {
            o = e[0];
        }
        return o;
    }
    if (item.icon != null && s != null) {
        let o;
        if (e[1] !== s || e[2] !== item.icon || e[3] !== item.label) {
            o = s.renderToolIcon(item.icon, item.label, xo);
            e[1] = s;
            e[2] = item.icon;
            e[3] = item.label;
            e[4] = o;
        } else {
            o = e[4];
        }
        return o;
    }
    if (item.skill?.trigger != null) {
        let o;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            o = <I_2 name="clock" size="md" style={[
                _e.glyphIn16,
                _e.automationGlyph
            ]}/>;
            e[5] = o;
        } else {
            o = e[5];
        }
        return o;
    }
    let r;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        r = <I_2 name="cube" size="md" style={[
            _e.glyphIn16,
            _e.neutralGlyph
        ]}/>;
        e[6] = r;
    } else {
        r = e[6];
    }
    return r;
}
function cs(query, e) {
    const trimmed = query.trim();
    if (e && trimmed.length > 0) {
        return {
            id: "NQSKOV",
            values: {
                trimmed
            }
        };
    }
    return {
        id: "1E6CXB"
    };
}
function UsComponent(t) {
    UsComponent.d = 1338;
    const e = c_1.c(56);
    const { items, query, hasAnySkills, onSelect, onListboxChange, ref } = t;
    const { i18n, _: __1 } = u_1();
    const [c, setC] = r_1.useState(0);
    const { activeOptionRef, markKeyboardNavigation } = u_4();
    const m = r_1.useId();
    let _;
    if (e[0] !== __1) {
        _ = __1({
            id: "gtdpBF"
        });
        e[0] = __1;
        e[1] = _;
    } else {
        _ = e[1];
    }
    const b = _;
    let y;
    if (e[2] !== m) {
        y = (k)=>`${m}-option-${k}`;
        e[2] = m;
        e[3] = y;
    } else {
        y = e[3];
    }
    const p = y;
    let w;
    if (e[4] !== c || e[5] !== items.length || e[6] !== m || e[7] !== b || e[8] !== onListboxChange || e[9] !== p) {
        w = ()=>{
            onListboxChange?.(items.length === 0 ? null : {
                id: m,
                label: b,
                activeOptionId: p(c)
            });
        };
        e[4] = c;
        e[5] = items.length;
        e[6] = m;
        e[7] = b;
        e[8] = onListboxChange;
        e[9] = p;
        e[10] = w;
    } else {
        w = e[10];
    }
    u_3(w);
    const [j, setJ] = r_1.useState(items);
    if (items !== j) {
        setJ(items);
        setC(0);
    }
    let x;
    let v;
    if (e[11] !== c || e[12] !== items || e[13] !== markKeyboardNavigation || e[14] !== onSelect) {
        x = ()=>({
                onKeyDown (k) {
                    if (items.length === 0) {
                        return false;
                    }
                    if (k.key === "ArrowDown") {
                        markKeyboardNavigation();
                        setC((I)=>(I + 1) % items.length);
                        return true;
                    }
                    if (k.key === "ArrowUp") {
                        markKeyboardNavigation();
                        setC((I)=>(I - 1 + items.length) % items.length);
                        return true;
                    }
                    if (k.key === "Enter" || k.key === "Tab") {
                        const I = items[c] ?? items[0];
                        if (I != null) {
                            onSelect(I);
                        }
                        return true;
                    }
                    return false;
                }
            });
        v = [
            c,
            items,
            onSelect,
            markKeyboardNavigation
        ];
        e[11] = c;
        e[12] = items;
        e[13] = markKeyboardNavigation;
        e[14] = onSelect;
        e[15] = x;
        e[16] = v;
    } else {
        x = e[15];
        v = e[16];
    }
    r_1.useImperativeHandle(ref, x, v);
    if (items.length === 0) {
        let k;
        let I;
        if (e[17] === Symbol.for("react.memo_cache_sentinel")) {
            k = r_3("sand-skill-empty", "sand-9f619 sand-78zum5 sand-dt5ytf sand-195vfkc sand-1y1aw1k sand-pdmqnj sand-wib8y2 sand-1g0dm76");
            I = r_3("sand-tyxrsu sand-11wthnw sand-wn7fz2");
            e[17] = k;
            e[18] = I;
        } else {
            k = e[17];
            I = e[18];
        }
        let E;
        if (e[19] !== hasAnySkills || e[20] !== i18n || e[21] !== query) {
            E = i18n._(cs(query, hasAnySkills));
            e[19] = hasAnySkills;
            e[20] = i18n;
            e[21] = query;
            e[22] = E;
        } else {
            E = e[22];
        }
        let L;
        if (e[23] !== I || e[24] !== E) {
            L = <span className={I}>{E}</span>;
            e[23] = I;
            e[24] = E;
            e[25] = L;
        } else {
            L = e[25];
        }
        let S;
        let D;
        if (e[26] === Symbol.for("react.memo_cache_sentinel")) {
            S = r_3("sand-169k319 sand-y5h43f sand-wn7fz2");
            D = <T id="iiP6uW"/>;
            e[26] = S;
            e[27] = D;
        } else {
            S = e[26];
            D = e[27];
        }
        let V;
        if (e[28] !== S) {
            V = <span className={S}>{D}</span>;
            e[28] = S;
            e[29] = V;
        } else {
            V = e[29];
        }
        let $;
        if (e[30] !== V || e[31] !== k || e[32] !== L) {
            $ = <div className={k}>{L}{V}</div>;
            e[30] = V;
            e[31] = k;
            e[32] = L;
            e[33] = $;
        } else {
            $ = e[33];
        }
        let q;
        if (e[34] !== b || e[35] !== $) {
            q = <R_1 aria-label={b} className="sand-skill-listbox" role="listbox">{$}</R_1>;
            e[34] = b;
            e[35] = $;
            e[36] = q;
        } else {
            q = e[36];
        }
        return q;
    }
    let A;
    if (e[37] === Symbol.for("react.memo_cache_sentinel")) {
        A = r_3(p_1(r_4.list).className);
        e[37] = A;
    } else {
        A = e[37];
    }
    let N;
    if (e[38] !== c || e[39] !== activeOptionRef || e[40] !== i18n || e[41] !== items || e[42] !== onSelect || e[43] !== p) {
        let k;
        if (e[45] !== c || e[46] !== activeOptionRef || e[47] !== i18n || e[48] !== onSelect || e[49] !== p) {
            k = (item, E)=>{
                const isActive = E === c;
                const S = (D)=>{
                    if (D.button === 0) {
                        D.preventDefault();
                        onSelect(item);
                    }
                };
                return <li key={item.id} className={r_3("sand-skill-option", p_1(r_4.item).className)} role="presentation"><M_1 ref={isActive ? activeOptionRef : null} aria-selected={isActive} className="sand-skill-option-button" detail={item.subtitle} icon=<As1Component item={item}/> id={p(E)} isActive={isActive} name={item.action?.group === "developer" ? <D_1>{item.label}</D_1> : item.label} onClick={(D)=>{
                    if (D.detail === 0) {
                        onSelect(item);
                    }
                }} onMouseEnter={()=>setC(E)} onPointerDown={S} role="option" trailing={i18n._(item.tag)}/></li>;
            };
            e[45] = c;
            e[46] = activeOptionRef;
            e[47] = i18n;
            e[48] = onSelect;
            e[49] = p;
            e[50] = k;
        } else {
            k = e[50];
        }
        N = items.map(k);
        e[38] = c;
        e[39] = activeOptionRef;
        e[40] = i18n;
        e[41] = items;
        e[42] = onSelect;
        e[43] = p;
        e[44] = N;
    } else {
        N = e[44];
    }
    let C;
    if (e[51] !== m || e[52] !== b || e[53] !== A || e[54] !== N) {
        C = <R_1 className="sand-skill-listbox"><At1 direction="vertical" maxHeight={`var(${So}, ${ls}px)`} scrollbarVisibility="hover" width="100%"><ul aria-label={b} className={A} id={m} role="listbox">{N}</ul></At1></R_1>;
        e[51] = m;
        e[52] = b;
        e[53] = A;
        e[54] = N;
        e[55] = C;
    } else {
        C = e[55];
    }
    return C;
}
const Eo = "everyone";
function vo() {
    return Eo;
}
const ko = (...t)=>(e)=>{
        t.forEach((n)=>{
            if (typeof n === "function") {
                n(e);
            } else if (n) {
                n.current = e;
            }
        });
    };
const Ds1Component = ({ contentComponent })=>{
    Reflect.set(Ds1Component, "d", 2907835745);
    const e = aJ.useSyncExternalStore(contentComponent.subscribe, contentComponent.getSnapshot, contentComponent.getServerSnapshot);
    return <>{Object.values(e)}</>;
};
function Ro() {
    const t = new Set;
    let e = {};
    return {
        subscribe (n) {
            t.add(n);
            return ()=>{
                t.delete(n);
            };
        },
        getSnapshot () {
            return e;
        },
        getServerSnapshot () {
            return e;
        },
        setRenderer (n, s) {
            e = {
                ...e,
                [n]: aN.createPortal(s.reactElement, s.element, n)
            };
            t.forEach((r)=>r());
        },
        removeRenderer (n) {
            const s = {
                ...e
            };
            delete s[n];
            e = s;
            t.forEach((r)=>r());
        }
    };
}
class _o extends U.Component {
    constructor(t){
        var e;
        super(t);
        this.editorContentRef = U.createRef();
        this.initialized = false;
        this.state = {
            hasContentComponentInitialized: !!((e = t.editor) != null && e.contentComponent)
        };
    }
    componentDidMount() {
        this.init();
    }
    componentDidUpdate() {
        this.init();
    }
    init() {
        let t;
        const editor = this.props.editor;
        if (editor && !editor.isDestroyed && (t = editor.view.dom) != null && t.parentNode) {
            if (editor.contentComponent) {
                return;
            }
            const n = this.editorContentRef.current;
            n.append(...editor.view.dom.parentNode.childNodes);
            editor.setOptions({
                element: n
            });
            editor.contentComponent = Ro();
            if (!this.state.hasContentComponentInitialized) {
                this.unsubscribeToContentComponent = editor.contentComponent.subscribe(()=>{
                    this.setState((s)=>{
                        if (s.hasContentComponentInitialized) {
                            return s;
                        }
                        return {
                            hasContentComponentInitialized: true
                        };
                    });
                    if (this.unsubscribeToContentComponent) {
                        this.unsubscribeToContentComponent();
                    }
                });
            }
            editor.createNodeViews();
            this.initialized = true;
        }
    }
    componentWillUnmount() {
        let t;
        const editor = this.props.editor;
        if (editor) {
            this.initialized = false;
            if (!editor.isDestroyed) {
                editor.view.setProps({
                    nodeViews: {}
                });
            }
            if (this.unsubscribeToContentComponent) {
                this.unsubscribeToContentComponent();
            }
            editor.contentComponent = null;
            try {
                if (!((t = editor.view.dom) != null && t.parentNode)) {
                    return;
                }
                const n = document.createElement("div");
                n.append(...editor.view.dom.parentNode.childNodes);
                editor.setOptions({
                    element: n
                });
            } catch  {}
        }
    }
    render() {
        const { editor, innerRef, ...rest } = this.props;
        return <><div ref={ko(innerRef, this.editorContentRef)} {...rest}/>{editor?.contentComponent && <Ds1Component contentComponent={editor.contentComponent}/>}</>;
    }
}
var fs = r_1.forwardRef((t, innerRef)=>{
    Reflect.set(fs, "d", 2018557190);
    const key = U.useMemo(()=>Math.floor(Math.random() * 4294967295).toString(), [
        t.editor
    ]);
    return <_o key={key} innerRef={innerRef} {...t}/>;
});
const Io = U.memo(fs);
const wo = typeof window !== "undefined" ? r_1.useLayoutEffect : r_1.useEffect;
class Co {
    constructor(t){
        this.transactionNumber = 0;
        this.lastTransactionNumber = 0;
        this.subscribers = new Set;
        this.editor = t;
        this.lastSnapshot = {
            editor: t,
            transactionNumber: 0
        };
        this.getSnapshot = this.getSnapshot.bind(this);
        this.getServerSnapshot = this.getServerSnapshot.bind(this);
        this.watch = this.watch.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }
    getSnapshot() {
        if (this.transactionNumber === this.lastTransactionNumber) {
            return this.lastSnapshot;
        }
        this.lastTransactionNumber = this.transactionNumber;
        this.lastSnapshot = {
            editor: this.editor,
            transactionNumber: this.transactionNumber
        };
        return this.lastSnapshot;
    }
    getServerSnapshot() {
        return {
            editor: null,
            transactionNumber: 0
        };
    }
    subscribe(t) {
        this.subscribers.add(t);
        return ()=>{
            this.subscribers.delete(t);
        };
    }
    watch(t) {
        this.editor = t;
        if (this.editor) {
            const e = ()=>{
                this.transactionNumber += 1;
                this.subscribers.forEach((s)=>s());
            };
            const n = this.editor;
            n.on("transaction", e);
            return ()=>{
                n.off("transaction", e);
            };
        }
    }
}
function usePs(t) {
    const [n] = r_1.useState(()=>new Co(t.editor));
    const s = aM.useSyncExternalStoreWithSelector(n.subscribe, n.getSnapshot, n.getServerSnapshot, t.selector, t.equalityFn ?? d);
    wo(()=>n.watch(t.editor), [
        t.editor,
        n
    ]);
    r_1.useDebugValue(s);
    return s;
}
const To = false;
const Ht = typeof window === "undefined";
const No = Ht || !!(typeof window !== "undefined" && window.next);
const Mo = class hs {
    constructor(e){
        this.editor = null;
        this.subscriptions = new Set;
        this.isComponentMounted = false;
        this.previousDeps = null;
        this.instanceId = "";
        this.options = e;
        this.subscriptions = new Set;
        this.setEditor(this.getInitialEditor());
        this.scheduleDestroy();
        this.getEditor = this.getEditor.bind(this);
        this.getServerSnapshot = this.getServerSnapshot.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.refreshEditorInstance = this.refreshEditorInstance.bind(this);
        this.scheduleDestroy = this.scheduleDestroy.bind(this);
        this.onRender = this.onRender.bind(this);
        this.createEditor = this.createEditor.bind(this);
    }
    setEditor(e) {
        this.editor = e;
        this.instanceId = Math.random().toString(36).slice(2, 9);
        this.subscriptions.forEach((n)=>n());
    }
    getInitialEditor() {
        if (this.options.current.immediatelyRender === undefined) {
            if (Ht || No) {
                return null;
            }
            return this.createEditor();
        }
        this.options.current.immediatelyRender;
        if (this.options.current.immediatelyRender) {
            return this.createEditor();
        }
        return null;
    }
    createEditor() {
        const e = {
            ...this.options.current,
            onBeforeCreate: (...s)=>this.options.current.onBeforeCreate?.(...s),
            onBlur: (...s)=>this.options.current.onBlur?.(...s),
            onCreate: (...s)=>this.options.current.onCreate?.(...s),
            onDestroy: (...s)=>this.options.current.onDestroy?.(...s),
            onFocus: (...s)=>this.options.current.onFocus?.(...s),
            onSelectionUpdate: (...s)=>this.options.current.onSelectionUpdate?.(...s),
            onTransaction: (...s)=>this.options.current.onTransaction?.(...s),
            onUpdate: (...s)=>this.options.current.onUpdate?.(...s),
            onContentError: (...s)=>this.options.current.onContentError?.(...s),
            onDrop: (...s)=>this.options.current.onDrop?.(...s),
            onPaste: (...s)=>this.options.current.onPaste?.(...s),
            onDelete: (...s)=>this.options.current.onDelete?.(...s)
        };
        return new E(e);
    }
    getEditor() {
        return this.editor;
    }
    getServerSnapshot() {
        return null;
    }
    subscribe(e) {
        this.subscriptions.add(e);
        return ()=>{
            this.subscriptions.delete(e);
        };
    }
    static compareOptions(e, n) {
        return Object.keys(e).every((s)=>{
            if ([
                "onCreate",
                "onBeforeCreate",
                "onDestroy",
                "onUpdate",
                "onTransaction",
                "onFocus",
                "onBlur",
                "onSelectionUpdate",
                "onContentError",
                "onDrop",
                "onPaste"
            ].includes(s)) {
                return true;
            }
            if (s === "extensions" && e.extensions && n.extensions) {
                if (e.extensions.length !== n.extensions.length) {
                    return false;
                }
                return e.extensions.every((r, o)=>r === n.extensions?.[o]);
            }
            return e[s] === n[s];
        });
    }
    onRender(e) {
        return ()=>{
            this.isComponentMounted = true;
            clearTimeout(this.scheduledDestructionTimeout);
            if (this.editor && !this.editor.isDestroyed && e.length === 0) {
                if (!hs.compareOptions(this.options.current, this.editor.options)) {
                    this.editor.setOptions({
                        ...this.options.current,
                        editable: this.editor.isEditable
                    });
                }
            } else {
                this.refreshEditorInstance(e);
            }
            return ()=>{
                this.isComponentMounted = false;
                this.scheduleDestroy();
            };
        };
    }
    refreshEditorInstance(e) {
        if (this.editor && !this.editor.isDestroyed) {
            if (this.previousDeps === null) {
                this.previousDeps = e;
                return;
            }
            if (this.previousDeps.length === e.length && this.previousDeps.every((s, r)=>s === e[r])) {
                return;
            }
        }
        if (this.editor && !this.editor.isDestroyed) {
            this.editor.destroy();
        }
        this.setEditor(this.createEditor());
        this.previousDeps = e;
    }
    scheduleDestroy() {
        const instanceId = this.instanceId;
        const editor = this.editor;
        this.scheduledDestructionTimeout = setTimeout(()=>{
            if (this.isComponentMounted && this.instanceId === instanceId) {
                if (editor) {
                    editor.setOptions(this.options.current);
                }
                return;
            }
            if (editor && !editor.isDestroyed) {
                editor.destroy();
                if (this.instanceId === instanceId) {
                    this.setEditor(null);
                }
            }
        }, 1);
    }
};
function useAo(t = {}, e = []) {
    const nRef = r_1.useRef(t);
    nRef.current = t;
    const [s] = r_1.useState(()=>new Mo(nRef));
    const r = aJ.useSyncExternalStore(s.subscribe, s.getEditor, s.getServerSnapshot);
    r_1.useDebugValue(r);
    r_1.useEffect(s.onRender(e));
    usePs({
        editor: r,
        selector: ({ transactionNumber })=>{
            if (t.shouldRerenderOnTransaction === false || t.shouldRerenderOnTransaction === undefined) {
                return null;
            }
            if (t.immediatelyRender && transactionNumber === 0) {
                return 0;
            }
            return transactionNumber + 1;
        }
    });
    return r;
}
const LoContext = r_1.createContext({
    editor: null
});
LoContext.Consumer;
const MsContext = r_1.createContext({
    onDragStart: ()=>{},
    nodeViewContentChildren: undefined,
    nodeViewContentRef: ()=>{}
});
const usePo = ()=>r_1.useContext(MsContext);
var Oe1 = U.forwardRef((t, ref)=>{
    Reflect.set(Oe1, "d", 1472435527);
    const { onDragStart } = usePo();
    const S = t.as || "div";
    return <S {...t} ref={ref} data-node-view-wrapper="" onDragStart={onDragStart} style={{
        whiteSpace: "normal",
        ...t.style
    }}/>;
});
function dn(t) {
    return !!(typeof t === "function" && t.prototype && t.prototype.isReactComponent);
}
function fn(t) {
    return !!(typeof t === "object" && t.$$typeof && (t.$$typeof.toString() === "Symbol(react.forward_ref)" || t.$$typeof.description === "react.forward_ref"));
}
function Oo(Component) {
    return !!(typeof Component === "object" && Component.$$typeof && (Component.$$typeof.toString() === "Symbol(react.memo)" || Component.$$typeof.description === "react.memo"));
}
function Do(Component) {
    if (dn(Component) || fn(Component)) {
        return true;
    }
    if (Oo(Component)) {
        const e = Component.type;
        if (e) {
            return dn(e) || fn(e);
        }
    }
    return false;
}
function jo() {
    try {
        if (r_1.version) {
            return parseInt(r_1.version.split(".")[0], 10) >= 19;
        }
    } catch  {}
    return false;
}
class Oe {
    constructor(t, { editor, props = {}, as = "div", className = "" }){
        this.ref = null;
        this.id = Math.floor(Math.random() * 4294967295).toString();
        this.component = t;
        this.editor = editor;
        this.props = props;
        this.element = document.createElement(as);
        this.element.classList.add("react-renderer");
        if (className) {
            this.element.classList.add(...className.split(" "));
        }
        if (this.editor.isInitialized) {
            R.flushSync(()=>{
                this.render();
            });
        } else {
            queueMicrotask(()=>{
                this.render();
            });
        }
    }
    render() {
        let t;
        const Component = this.component;
        const props = this.props;
        const editor = this.editor;
        const r = jo();
        const o = Do(Component);
        const i = {
            ...props
        };
        i.ref && !(r || o) && delete i.ref;
        if (!i.ref && (r || o)) {
            i.ref = (l)=>{
                this.ref = l;
            };
        }
        this.reactElement = <Component {...i}/>;
        if (!((t = editor?.contentComponent) == null)) {
            t.setRenderer(this.id, this);
        }
    }
    updateProps(t = {}) {
        this.props = {
            ...this.props,
            ...t
        };
        this.render();
    }
    destroy() {
        let t;
        const editor = this.editor;
        if (!((t = editor?.contentComponent) == null)) {
            t.removeRenderer(this.id);
        }
        try {
            if (this.element && this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
            }
        } catch  {}
    }
    updateAttributes(t) {
        Object.keys(t).forEach((e)=>{
            this.element.setAttribute(e, t[e]);
        });
    }
}
U.createContext({
    markViewContentRef: ()=>{}
});
class $o extends N {
    constructor(t, e, n){
        super(t, e, n);
        this.selectionRafId = null;
        if (!this.node.isLeaf) {
            if (this.options.contentDOMElementTag) {
                this.contentDOMElement = document.createElement(this.options.contentDOMElementTag);
            } else {
                this.contentDOMElement = document.createElement(this.node.isInline ? "span" : "div");
            }
            this.contentDOMElement.dataset.nodeViewContentReact = "";
            this.contentDOMElement.dataset.nodeViewWrapper = "";
            this.contentDOMElement.style.whiteSpace = "inherit";
            const s = this.dom.querySelector("[data-node-view-content]");
            if (!s) {
                return;
            }
            s.appendChild(this.contentDOMElement);
        }
    }
    mount() {
        const t = {
            editor: this.editor,
            node: this.node,
            decorations: this.decorations,
            innerDecorations: this.innerDecorations,
            view: this.view,
            selected: false,
            extension: this.extension,
            HTMLAttributes: this.HTMLAttributes,
            getPos: ()=>this.getPos(),
            updateAttributes: (a = {})=>this.updateAttributes(a),
            deleteNode: ()=>this.deleteNode(),
            ref: r_1.createRef()
        };
        if (!this.component.displayName) {
            const a = (name)=>name.charAt(0).toUpperCase() + name.substring(1);
            this.component.displayName = a(this.extension.name);
        }
        const value = {
            onDragStart: this.onDragStart.bind(this),
            nodeViewContentRef: (a)=>{
                if (a && this.contentDOMElement && a.firstChild !== this.contentDOMElement) {
                    if (a.hasAttribute("data-node-view-wrapper")) {
                        a.removeAttribute("data-node-view-wrapper");
                    }
                    a.appendChild(this.contentDOMElement);
                }
            }
        };
        const Component = this.component;
        const ReactNodeView = r_1.memo((a)=><MsContext.Provider value={value}><Component {...a}/></MsContext.Provider>);
        ReactNodeView.displayName = "ReactNodeView";
        let i = this.node.isInline ? "span" : "div";
        if (this.options.as) {
            i = this.options.as;
        }
        const { className = "" } = this.options;
        this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this);
        this.renderer = new Oe(ReactNodeView, {
            editor: this.editor,
            props: t,
            as: i,
            className: `node-${this.node.type.name} ${className}`.trim()
        });
        this.editor.on("selectionUpdate", this.handleSelectionUpdate);
        this.updateElementAttributes();
    }
    get dom() {
        let t;
        if (this.renderer.element.firstElementChild && !((t = this.renderer.element.firstElementChild) != null && t.hasAttribute("data-node-view-wrapper"))) {
            throw Error("Please use the NodeViewWrapper component for your node view.");
        }
        return this.renderer.element;
    }
    get contentDOM() {
        if (this.node.isLeaf) {
            return null;
        }
        return this.contentDOMElement;
    }
    handleSelectionUpdate() {
        if (this.selectionRafId) {
            cancelAnimationFrame(this.selectionRafId);
            this.selectionRafId = null;
        }
        this.selectionRafId = requestAnimationFrame(()=>{
            this.selectionRafId = null;
            const { from, to } = this.editor.state.selection;
            const n = this.getPos();
            if (typeof n === "number") {
                if (from <= n && to >= n + this.node.nodeSize) {
                    if (this.renderer.props.selected) {
                        return;
                    }
                    this.selectNode();
                } else {
                    if (!this.renderer.props.selected) {
                        return;
                    }
                    this.deselectNode();
                }
            }
        });
    }
    update(t, e, innerDecorations) {
        const s = (r)=>{
            this.renderer.updateProps(r);
            if (typeof this.options.attrs === "function") {
                this.updateElementAttributes();
            }
        };
        if (t.type !== this.node.type) {
            return false;
        }
        if (typeof this.options.update === "function") {
            const oldNode = this.node;
            const oldDecorations = this.decorations;
            const oldInnerDecorations = this.innerDecorations;
            this.node = t;
            this.decorations = e;
            this.innerDecorations = innerDecorations;
            return this.options.update({
                oldNode,
                oldDecorations,
                newNode: t,
                newDecorations: e,
                oldInnerDecorations,
                innerDecorations,
                updateProps: ()=>s({
                        node: t,
                        decorations: e,
                        innerDecorations
                    })
            });
        }
        if (!(t === this.node && this.decorations === e && this.innerDecorations === innerDecorations)) {
            this.node = t;
            this.decorations = e;
            this.innerDecorations = innerDecorations;
            s({
                node: t,
                decorations: e,
                innerDecorations
            });
        }
        return true;
    }
    selectNode() {
        this.renderer.updateProps({
            selected: true
        });
        this.renderer.element.classList.add("ProseMirror-selectednode");
    }
    deselectNode() {
        this.renderer.updateProps({
            selected: false
        });
        this.renderer.element.classList.remove("ProseMirror-selectednode");
    }
    destroy() {
        this.renderer.destroy();
        this.editor.off("selectionUpdate", this.handleSelectionUpdate);
        this.contentDOMElement = null;
        if (this.selectionRafId) {
            cancelAnimationFrame(this.selectionRafId);
            this.selectionRafId = null;
        }
    }
    updateElementAttributes() {
        if (this.options.attrs) {
            let t = {};
            if (typeof this.options.attrs === "function") {
                const e = this.editor.extensionManager.attributes;
                const HTMLAttributes = g(this.node, e);
                t = this.options.attrs({
                    node: this.node,
                    HTMLAttributes
                });
            } else {
                t = this.options.attrs;
            }
            this.renderer.updateAttributes(t);
        }
    }
}
function De(t, e) {
    return (n)=>{
        if (n.editor.contentComponent) {
            return new $o(t, n, e);
        }
        return {};
    };
}
function Ho({ char, allowSpaces, allowToIncludeChar, allowedPrefixes, startOfLine, $position }) {
    const a = allowSpaces && !allowToIncludeChar;
    const d = e_1(char);
    const c = new RegExp(`\\s${d}$`);
    const u = startOfLine ? "^" : "";
    const f = allowToIncludeChar ? "" : d;
    const h = a ? new RegExp(`${u}${d}.*?(?=\\s${f}|$)`, "gm") : new RegExp(`${u}(?:^)?${d}[^\\s${f}]*`, "gm");
    const m = $position.nodeBefore?.isText && $position.nodeBefore.text;
    if (!m) {
        return null;
    }
    const _ = $position.pos - m.length;
    const b = Array.from(m.matchAll(h)).pop();
    if (!b || b.input === undefined || b.index === undefined) {
        return null;
    }
    const y = b.input.slice(Math.max(0, b.index - 1), b.index);
    const p = new RegExp(`^[${allowedPrefixes?.join("")}\0]?$`).test(y);
    if (allowedPrefixes !== null && !p) {
        return null;
    }
    const w = _ + b.index;
    let j = w + b[0].length;
    if (a && c.test(m.slice(j - 1, j + 1))) {
        b[0] += " ";
        j += 1;
    }
    if (w < $position.pos && j >= $position.pos) {
        return {
            range: {
                from: w,
                to: j
            },
            query: b[0].slice(char.length),
            text: b[0]
        };
    }
    return null;
}
const Uo = new a("suggestion");
function gs({ pluginKey = Uo, editor, char = "@", allowSpaces = false, allowToIncludeChar = false, allowedPrefixes = [
    " "
], startOfLine = false, decorationTag = "span", decorationClass = "suggestion", decorationContent = "", decorationEmptyClass = "is-empty", command = ()=>null, items = ()=>[], render = ()=>({}), allow = ()=>true, findSuggestionMatch = Ho }) {
    let b;
    const y = render?.();
    const p = ()=>{
        const pos = editor.state.selection.$anchor.pos;
        const v = editor.view.coordsAtPos(pos);
        const { top, right, bottom, left } = v;
        try {
            return new DOMRect(left, top, right - left, bottom - top);
        } catch  {
            return null;
        }
    };
    const w = (x, v)=>{
        if (v) {
            return ()=>{
                const A = pluginKey.getState(editor.state);
                const N = A?.decorationId;
                const C = x.dom.querySelector(`[data-decoration-id="${N}"]`);
                return C?.getBoundingClientRect() || null;
            };
        }
        return p;
    };
    function j(view, v) {
        let A;
        try {
            const C = pluginKey.getState(view.state);
            const k = C?.decorationId ? view.dom.querySelector(`[data-decoration-id="${C.decorationId}"]`) : null;
            const I = {
                editor,
                range: C?.range || {
                    from: 0,
                    to: 0
                },
                query: C?.query || null,
                text: C?.text || null,
                items: [],
                command: (E)=>command({
                        editor,
                        range: C?.range || {
                            from: 0,
                            to: 0
                        },
                        props: E
                    }),
                decorationNode: k,
                clientRect: w(view, k)
            };
            if (!((A = y?.onExit) == null)) {
                A.call(y, I);
            }
        } catch  {}
        const N = view.state.tr.setMeta(v, {
            exit: true
        });
        view.dispatch(N);
    }
    const M = new P({
        key: pluginKey,
        view () {
            return {
                update: async (x, v)=>{
                    var C;
                    var k;
                    var I;
                    var E;
                    var L;
                    const S = this.key?.getState(v);
                    const D = this.key?.getState(x.state);
                    const V = S.active && D.active && S.range.from !== D.range.from;
                    const $ = !S.active && D.active;
                    const q = S.active && !D.active;
                    const H = !$ && !q && S.query !== D.query;
                    const B = $ || V && H;
                    const X = H || V;
                    const Y = q || V && H;
                    if (!B && !X && !Y) {
                        return;
                    }
                    const Z = Y && !B ? S : D;
                    const le = x.dom.querySelector(`[data-decoration-id="${Z.decorationId}"]`);
                    b = {
                        editor,
                        range: Z.range,
                        query: Z.query,
                        text: Z.text,
                        items: [],
                        command: (Ce)=>command({
                                editor,
                                range: Z.range,
                                props: Ce
                            }),
                        decorationNode: le,
                        clientRect: w(x, le)
                    };
                    B && ((C = y?.onBeforeStart) == null || C.call(y, b));
                    X && ((k = y?.onBeforeUpdate) == null || k.call(y, b));
                    if (X || B) {
                        b.items = await items({
                            editor,
                            query: Z.query
                        });
                    }
                    Y && ((I = y?.onExit) == null || I.call(y, b));
                    X && ((E = y?.onUpdate) == null || E.call(y, b));
                    B && ((L = y?.onStart) == null || L.call(y, b));
                },
                destroy: ()=>{
                    var x;
                    b && ((x = y?.onExit) == null || x.call(y, b));
                }
            };
        },
        state: {
            init () {
                return {
                    active: false,
                    range: {
                        from: 0,
                        to: 0
                    },
                    query: null,
                    text: null,
                    composing: false
                };
            },
            apply (x, v, A, state) {
                const { isEditable } = editor;
                const { composing } = editor.view;
                const { selection } = x;
                const { empty, from } = selection;
                const S = {
                    ...v
                };
                const D = x.getMeta(pluginKey);
                if (D && D.exit) {
                    S.active = false;
                    S.decorationId = null;
                    S.range = {
                        from: 0,
                        to: 0
                    };
                    S.query = null;
                    S.text = null;
                    return S;
                }
                S.composing = composing;
                if (isEditable && (empty || editor.view.composing)) {
                    if ((from < v.range.from || from > v.range.to) && !composing && !v.composing) {
                        S.active = false;
                    }
                    const V = findSuggestionMatch({
                        char,
                        allowSpaces,
                        allowToIncludeChar,
                        allowedPrefixes,
                        startOfLine,
                        $position: selection.$from
                    });
                    const $ = `id_${Math.floor(Math.random() * 4294967295)}`;
                    if (V && allow({
                        editor,
                        state,
                        range: V.range,
                        isActive: v.active
                    })) {
                        S.active = true;
                        S.decorationId = v.decorationId ? v.decorationId : $;
                        S.range = V.range;
                        S.query = V.query;
                        S.text = V.text;
                    } else {
                        S.active = false;
                    }
                } else {
                    S.active = false;
                }
                if (!S.active) {
                    S.decorationId = null;
                    S.range = {
                        from: 0,
                        to: 0
                    };
                    S.query = null;
                    S.text = null;
                }
                return S;
            }
        },
        props: {
            handleKeyDown (view, event) {
                let C;
                const { active, range } = M.getState(view.state);
                if (!active) {
                    return false;
                }
                if (event.key === "Escape" || event.key === "Esc") {
                    const S = M.getState(view.state);
                    const D = b?.decorationNode ?? null;
                    const V = D ?? (S?.decorationId ? view.dom.querySelector(`[data-decoration-id="${S.decorationId}"]`) : null);
                    if (y?.onKeyDown?.({
                        view,
                        event,
                        range: S.range
                    }) || false) {
                        return true;
                    }
                    const q = {
                        editor,
                        range: S.range,
                        query: S.query,
                        text: S.text,
                        items: [],
                        command: (H)=>command({
                                editor,
                                range: S.range,
                                props: H
                            }),
                        decorationNode: V,
                        clientRect: V ? ()=>V.getBoundingClientRect() || null : null
                    };
                    if (!((C = y?.onExit) == null)) {
                        C.call(y, q);
                    }
                    j(view, pluginKey);
                    return true;
                }
                return y?.onKeyDown?.({
                    view,
                    event,
                    range
                }) || false;
            },
            decorations (x) {
                const { active, range, decorationId, query } = M.getState(x);
                if (!active) {
                    return null;
                }
                const k = !query?.length;
                const I = [
                    decorationClass
                ];
                if (k) {
                    I.push(decorationEmptyClass);
                }
                return D.create(x.doc, [
                    b_1.inline(range.from, range.to, {
                        nodeName: decorationTag,
                        class: I.join(" "),
                        "data-decoration-id": decorationId,
                        "data-decoration-content": decorationContent
                    })
                ]);
            }
        }
    });
    return M;
}
const Xt = gs;
function Vo({ editor, overrideSuggestionOptions, extensionName, char = "@" }) {
    const pluginKey = new a;
    return {
        editor,
        char,
        pluginKey,
        command: ({ editor, range, props })=>{
            var a;
            var c;
            const nodeAfter = editor.view.state.selection.$to.nodeAfter;
            if ((a = nodeAfter?.text) != null && a.startsWith(" ")) {
                range.to += 1;
            }
            editor.chain().focus().insertContentAt(range, [
                {
                    type: extensionName,
                    attrs: {
                        ...props,
                        mentionSuggestionChar: char
                    }
                },
                {
                    type: "text",
                    text: " "
                }
            ]).run();
            if (!((c = editor.view.dom.ownerDocument.defaultView?.getSelection()) == null)) {
                c.collapseToEnd();
            }
        },
        allow: ({ state, range })=>{
            const l = state.doc.resolve(range.from);
            const a = state.schema.nodes[extensionName];
            return !!l.parent.type.contentMatch.matchType(a);
        },
        ...overrideSuggestionOptions
    };
}
function ys(t) {
    return (t.options.suggestions.length ? t.options.suggestions : [
        t.options.suggestion
    ]).map((overrideSuggestionOptions)=>Vo({
            editor: t.editor,
            overrideSuggestionOptions,
            extensionName: t.name,
            char: overrideSuggestionOptions.char
        }));
}
function pn(t, mentionSuggestionChar) {
    const n = ys(t);
    const s = n.find((r)=>r.char === mentionSuggestionChar);
    return s || (n.length ? n[0] : null);
}
const qo = c_2.create({
    name: "mention",
    priority: 101,
    addOptions () {
        return {
            HTMLAttributes: {},
            renderText ({ node, suggestion }) {
                return `${suggestion?.char ?? "@"}${node.attrs.label ?? node.attrs.id}`;
            },
            deleteTriggerWithBackspace: false,
            renderHTML ({ options, node, suggestion }) {
                return [
                    "span",
                    m(this.HTMLAttributes, options.HTMLAttributes),
                    `${suggestion?.char ?? "@"}${node.attrs.label ?? node.attrs.id}`
                ];
            },
            suggestions: [],
            suggestion: {}
        };
    },
    group: "inline",
    inline: true,
    selectable: false,
    atom: true,
    addAttributes () {
        return {
            id: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-id"),
                renderHTML: (t)=>{
                    if (t.id) {
                        return {
                            "data-id": t.id
                        };
                    }
                    return {};
                }
            },
            label: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-label"),
                renderHTML: (t)=>{
                    if (t.label) {
                        return {
                            "data-label": t.label
                        };
                    }
                    return {};
                }
            },
            mentionSuggestionChar: {
                default: "@",
                parseHTML: (t)=>t.getAttribute("data-mention-suggestion-char"),
                renderHTML: (t)=>({
                        "data-mention-suggestion-char": t.mentionSuggestionChar
                    })
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: `span[data-type="${this.name}"]`
            }
        ];
    },
    renderHTML ({ node, HTMLAttributes }) {
        const suggestion = pn(this, node.attrs.mentionSuggestionChar);
        if (this.options.renderLabel !== undefined) {
            console.warn("renderLabel is deprecated use renderText and renderHTML instead");
            return [
                "span",
                m({
                    "data-type": this.name
                }, this.options.HTMLAttributes, HTMLAttributes),
                this.options.renderLabel({
                    options: this.options,
                    node,
                    suggestion
                })
            ];
        }
        const options = {
            ...this.options
        };
        options.HTMLAttributes = m({
            "data-type": this.name
        }, this.options.HTMLAttributes, HTMLAttributes);
        const r = this.options.renderHTML({
            options,
            node,
            suggestion
        });
        if (typeof r === "string") {
            return [
                "span",
                m({
                    "data-type": this.name
                }, this.options.HTMLAttributes, HTMLAttributes),
                r
            ];
        }
        return r;
    },
    ...f({
        nodeName: "mention",
        name: "@",
        selfClosing: true,
        allowedAttributes: [
            "id",
            "label",
            {
                name: "mentionSuggestionChar",
                skipIfDefault: "@"
            }
        ],
        parseAttributes: (t)=>{
            const e = {};
            const n = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
            let s = n.exec(t);
            while(s !== null){
                const [, r, o, i] = s;
                const l = o ?? i;
                e[r === "char" ? "mentionSuggestionChar" : r] = l;
                s = n.exec(t);
            }
            return e;
        },
        serializeAttributes: (t)=>Object.entries(t).filter(([, e])=>e != null).map(([e, n])=>`${e === "mentionSuggestionChar" ? "char" : e}="${n}"`).join(" ")
    }),
    renderText ({ node }) {
        const e = {
            options: this.options,
            node,
            suggestion: pn(this, node.attrs.mentionSuggestionChar)
        };
        if (this.options.renderLabel !== undefined) {
            console.warn("renderLabel is deprecated use renderText and renderHTML instead");
            return this.options.renderLabel(e);
        }
        return this.options.renderText(e);
    },
    addKeyboardShortcuts () {
        return {
            Backspace: ()=>this.editor.commands.command(({ tr, state })=>{
                    let n = false;
                    const { selection } = state;
                    const { empty, anchor } = selection;
                    if (!empty) {
                        return false;
                    }
                    let i = new h;
                    let l = 0;
                    state.doc.nodesBetween(anchor - 1, anchor, (a, d)=>{
                        if (a.type.name === this.name) {
                            n = true;
                            i = a;
                            l = d;
                            return false;
                        }
                    });
                    if (n) {
                        tr.insertText(this.options.deleteTriggerWithBackspace ? "" : i.attrs.mentionSuggestionChar, l, l + i.nodeSize);
                    }
                    return n;
                })
        };
    },
    addProseMirrorPlugins () {
        return ys(this).map(gs);
    }
});
const bs = qo;
const i_2_1 = i_2;
function pt(t) {
    const e = c_1.c(2);
    const { editor, selected } = t;
    let r;
    if (e[0] !== editor) {
        r = {
            editor,
            selector
        };
        e[0] = editor;
        e[1] = r;
    } else {
        r = e[1];
    }
    const o = usePs(r);
    return selected && o;
}
function selector(t) {
    return t.editor.isFocused;
}
function Xs1Component(t) {
    Xs1Component.d = 414;
    const e = c_1.c(9);
    const { quote, isSelected } = t;
    const r = isSelected === undefined ? false : isSelected;
    let o;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        o = <I_2 name="chat-bubble-ellipsis" size="sm"/>;
        e[0] = o;
    } else {
        o = e[0];
    }
    let i;
    if (e[1] !== quote) {
        i = cP(quote);
        e[1] = quote;
        e[2] = i;
    } else {
        i = e[2];
    }
    let l;
    if (e[3] !== quote) {
        l = cQ(quote);
        e[3] = quote;
        e[4] = l;
    } else {
        l = e[4];
    }
    let a;
    if (e[5] !== r || e[6] !== i || e[7] !== l) {
        a = <Y data-type="quote-reference" icon={o} isSelected={r} label={i} title={l}/>;
        e[5] = r;
        e[6] = i;
        e[7] = l;
        e[8] = a;
    } else {
        a = e[8];
    }
    return a;
}
function SsComponent(t) {
    SsComponent.d = 415;
    const e = c_1.c(8);
    const { node, editor, selected } = t;
    let o;
    if (e[0] !== editor || e[1] !== selected) {
        o = {
            editor,
            selected
        };
        e[0] = editor;
        e[1] = selected;
        e[2] = o;
    } else {
        o = e[2];
    }
    const i = pt(o);
    const quote = node.attrs.quote;
    if (typeof quote !== "string" || quote.length === 0) {
        let c;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            c = <Oe1 as="span"/>;
            e[3] = c;
        } else {
            c = e[3];
        }
        return c;
    }
    let a;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        a = {
            verticalAlign: "top"
        };
        e[4] = a;
    } else {
        a = e[4];
    }
    let d;
    if (e[5] !== i || e[6] !== quote) {
        d = <Oe1 as="span" data-type="quote-reference" style={a}><Xs1Component isSelected={i} quote={quote}/></Oe1>;
        e[5] = i;
        e[6] = quote;
        e[7] = d;
    } else {
        d = e[7];
    }
    return d;
}
function hn(quote) {
    if (typeof quote === "string") {
        return quote;
    }
    return "";
}
const Bo = c_2.create({
    name: cR,
    group: "inline",
    inline: true,
    atom: true,
    selectable: true,
    addAttributes () {
        return {
            quote: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-quote"),
                renderHTML: (t)=>{
                    if (typeof t.quote === "string") {
                        return {
                            "data-quote": t.quote
                        };
                    }
                    return {};
                }
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: 'span[data-type="quote-reference"][data-quote]'
            }
        ];
    },
    renderHTML ({ node, HTMLAttributes }) {
        return [
            "span",
            m({
                "data-type": "quote-reference"
            }, HTMLAttributes),
            cP(hn(node.attrs.quote))
        ];
    },
    renderText ({ node }) {
        return cS(hn(node.attrs.quote));
    },
    addNodeView () {
        return De(SsComponent);
    }
});
function zo(attrs) {
    const e = ch(attrs.prNumber);
    if (e == null) {
        return "";
    }
    return cT(e, typeof attrs.title === "string" ? attrs.title : null);
}
function EsComponent(t) {
    EsComponent.d = 606;
    const e = c_1.c(7);
    const { node } = t;
    let s;
    if (e[0] !== node.attrs.prNumber) {
        s = ch(node.attrs.prNumber);
        e[0] = node.attrs.prNumber;
        e[1] = s;
    } else {
        s = e[1];
    }
    const prNumber = s;
    if (prNumber == null) {
        let a;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            a = <Oe1 as="span"/>;
            e[2] = a;
        } else {
            a = e[2];
        }
        return a;
    }
    const o = typeof node.attrs.title === "string" ? node.attrs.title : null;
    const url = typeof node.attrs.url === "string" ? node.attrs.url : null;
    let l;
    if (e[3] !== prNumber || e[4] !== o || e[5] !== url) {
        l = <Oe1 as="span" data-type="pr-reference"><No1 prNumber={prNumber} title={o} url={url}/></Oe1>;
        e[3] = prNumber;
        e[4] = o;
        e[5] = url;
        e[6] = l;
    } else {
        l = e[6];
    }
    return l;
}
const Fo = {
    assistants: {
        id: "ixkTse"
    },
    automations: {
        id: "aAnCaW"
    },
    tools: {
        id: "fOuPPd"
    }
};
function Wo(entry) {
    if (entry.isGroup === true || entry.seat === "room") {
        return {
            id: "L8fEEm"
        };
    }
    if (entry.seat === "person") {
        return {
            id: "OZdaTZ"
        };
    }
    return Fo[entry.category];
}
function Xo(t, e, n) {
    return cV({
        label: t.label,
        keywords: t.keywords,
        tokens: e,
        normalizedQuery: n
    });
}
function Qo(key, e) {
    const n = e.indexOf(key);
    if (n < 0) {
        return 0;
    }
    return (e.length - n) / e.length;
}
function Yo(t, e, n) {
    const s = cU(e);
    if (s.length === 0) {
        return [];
    }
    const r = s.join(" ");
    return t.flatMap((o, index)=>{
        const l = Xo(o, s, r);
        const recency = Qo(o.key, n);
        if (l != null) {
            return [
                {
                    entry: o,
                    index,
                    score: l,
                    recency
                }
            ];
        }
        return [];
    }).sort((o, i)=>i.score - o.score || i.recency - o.recency || o.index - i.index).map((o)=>o.entry);
}
function Jo(t) {
    const e = new Set;
    return t.filter((n)=>{
        if (e.has(n.key)) {
            return false;
        }
        e.add(n.key);
        return true;
    });
}
function Zo(t, e, n) {
    const s = Jo(t);
    if (e.trim().length === 0) {
        return s;
    }
    return Yo(s, e, n);
}
function mn(t, e) {
    if (e <= 0) {
        return 0;
    }
    return (t % e + e) % e;
}
function Ut(t, e) {
    if (e <= 0) {
        return 0;
    }
    return Math.min(Math.max(t, 0), e - 1);
}
function gn({ key, state, rows }) {
    if (rows.length === 0) {
        if (key === "Escape") {
            return {
                type: "dismiss"
            };
        }
        return {
            type: "noop"
        };
    }
    switch(key){
        case "ArrowDown":
            return {
                type: "state",
                state: {
                    activeIndex: mn(state.activeIndex + 1, rows.length)
                }
            };
        case "ArrowUp":
            return {
                type: "state",
                state: {
                    activeIndex: mn(state.activeIndex - 1, rows.length)
                }
            };
        case "Enter":
        case "Tab":
            {
                const r = rows[Ut(state.activeIndex, rows.length)];
                if (r == null) {
                    return {
                        type: "noop"
                    };
                }
                return {
                    type: "select",
                    entry: r
                };
            }
        case "Escape":
            return {
                type: "dismiss"
            };
        default:
            return {
                type: "noop"
            };
    }
}
const ei = {
    kVAEAm: "sand-1n2onr6",
    kZKoxP: "sand-16ye13r",
    kmuXW: "sand-2lah0s",
    $$css: true
};
const ti = {
    kVAEAm: "sand-10l6tqk",
    k87sOh: "sand-5mnzd7",
    kLqNvP: "sand-rr41r3",
    kt4wiu: "sand-1f889gz",
    $$css: true
};
const Vt = 320;
const Ct = 16;
const heightPx = 28;
const ks = 2;
const rowPitchPx = heightPx + ks;
const leadingOffsetPx = 6;
const crossAxisOffsetPx = -17;
const ot = {
    windowList: (t)=>[
            ei,
            {
                "--x-height": ((e)=>{
                    if (typeof e === "number") {
                        return `${e}px`;
                    }
                    return e ?? undefined;
                })(leadingOffsetPx * 2 + t * rowPitchPx - ks)
            }
        ],
    windowItem: (t)=>[
            ti,
            {
                "--x-insetBlockStart": ((e)=>{
                    if (typeof e === "number") {
                        return `${e}px`;
                    }
                    return e ?? undefined;
                })(leadingOffsetPx + t * rowPitchPx)
            }
        ],
    glyphIn16: {
        kzqmXN: "sand-1kky2od",
        kZKoxP: "sand-lup9mm",
        $$css: true
    },
    automationGlyph: {
        kMwMTN: "sand-mbjja0",
        $$css: true
    }
};
function Rs(query) {
    if (query.trim().length > 0) {
        return {
            id: "TBlG9c",
            values: {
                0: query.trim()
            }
        };
    }
    return {
        id: "vI1YCx"
    };
}
function SComponent(t) {
    SComponent.d = 371;
    const e = c_1.c(15);
    const { entry } = t;
    const { icon } = entry;
    if (icon.type === "agent") {
        let l;
        if (e[0] !== icon.member) {
            l = <So1 agent={icon.member} fillPx={Ct} isStatic/>;
            e[0] = icon.member;
            e[1] = l;
        } else {
            l = e[1];
        }
        return l;
    }
    if (icon.type === "group") {
        let l;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = <I_2 name="people-3" size="sm"/>;
            e[2] = l;
        } else {
            l = e[2];
        }
        return l;
    }
    if (icon.type === "everyone") {
        let l;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = <span className={r_3("sand-1kky2od sand-lup9mm sand-2lah0s sand-78zum5 sand-6s0dn4 sand-l56j7k sand-149ho13 sand-1tiofj7 sand-1o0liin sand-y5h43f sand-xzm5a7 sand-o5v014")}>@</span>;
            e[3] = l;
        } else {
            l = e[3];
        }
        return l;
    }
    if (icon.type === "person") {
        let l;
        if (e[4] !== icon.person) {
            l = <Ro1 person={icon.person} sizePx={Ct}/>;
            e[4] = icon.person;
            e[5] = l;
        } else {
            l = e[5];
        }
        return l;
    }
    if (icon.iconId != null || icon.iconUrl != null) {
        let l;
        if (e[6] !== entry.label || e[7] !== icon.iconId || e[8] !== icon.iconUrl) {
            l = <P_1 iconId={icon.iconId} iconUrl={icon.iconUrl} name={entry.label} size={Ct}/>;
            e[6] = entry.label;
            e[7] = icon.iconId;
            e[8] = icon.iconUrl;
            e[9] = l;
        } else {
            l = e[9];
        }
        return l;
    }
    const r = icon.fallback === "clock" && ot.automationGlyph;
    let o;
    if (e[10] !== r) {
        o = [
            ot.glyphIn16,
            r
        ];
        e[10] = r;
        e[11] = o;
    } else {
        o = e[11];
    }
    let i;
    if (e[12] !== icon.fallback || e[13] !== o) {
        i = <I_2 name={icon.fallback} size="md" style={o}/>;
        e[12] = icon.fallback;
        e[13] = o;
        e[14] = i;
    } else {
        i = e[14];
    }
    return i;
}
function IsComponent(t) {
    IsComponent.d = 372;
    const e = c_1.c(27);
    const { rows, query, onSelect, onListboxChange, ref } = t;
    const { i18n, _: __1 } = u_1();
    const [d, setD] = r_1.useState(0);
    const [u, setU] = r_1.useState(query);
    const [h, setH] = r_1.useState(null);
    if (query !== u) {
        setU(query);
        setD(0);
    }
    const _ = Ut(d, rows.length);
    const { activeOptionRef, markKeyboardNavigation } = u_4();
    const p = `sand-mention-listbox-${r_1.useId()}`;
    let w;
    if (e[0] !== __1) {
        w = __1({
            id: "iaM74K"
        });
        e[0] = __1;
        e[1] = w;
    } else {
        w = e[1];
    }
    const j = w;
    let M;
    if (e[2] !== p) {
        M = (H)=>`${p}-option-${H}`;
        e[2] = p;
        e[3] = M;
    } else {
        M = e[3];
    }
    const x = M;
    let v;
    if (e[4] !== _ || e[5] !== p || e[6] !== j || e[7] !== onListboxChange || e[8] !== x || e[9] !== rows.length) {
        v = ()=>{
            onListboxChange?.(rows.length === 0 ? null : {
                id: p,
                label: j,
                activeOptionId: x(_)
            });
        };
        e[4] = _;
        e[5] = p;
        e[6] = j;
        e[7] = onListboxChange;
        e[8] = x;
        e[9] = rows.length;
        e[10] = v;
    } else {
        v = e[10];
    }
    u_3(v);
    const rowTopPx = _ * rowPitchPx;
    let reveal;
    if (e[11] !== query || e[12] !== rowTopPx) {
        reveal = {
            kind: "row",
            key: query,
            rowTopPx,
            heightPx
        };
        e[11] = query;
        e[12] = rowTopPx;
        e[13] = reveal;
    } else {
        reveal = e[13];
    }
    let C;
    if (e[14] !== rows.length || e[15] !== h || e[16] !== reveal) {
        C = {
            scrollEl: h,
            rowCount: rows.length,
            rowPitchPx,
            leadingOffsetPx,
            initialViewportPx: Vt,
            reveal
        };
        e[14] = rows.length;
        e[15] = h;
        e[16] = reveal;
        e[17] = C;
    } else {
        C = e[17];
    }
    const k = cm(C);
    const I = Array.from({
        length: k.end - k.start
    }, (H, B)=>k.start + B);
    if (rows.length > 0 && _ < k.start) {
        I.unshift(_);
    }
    if (rows.length > 0 && _ >= k.end) {
        I.push(_);
    }
    const E = p_1(r_4.list, ot.windowList(rows.length));
    let L;
    let S;
    if (e[18] !== _ || e[19] !== markKeyboardNavigation || e[20] !== onSelect || e[21] !== rows) {
        L = ()=>({
                onKeyDown (H) {
                    if (rows.length > 0 && (H.key === "ArrowDown" || H.key === "ArrowUp")) {
                        markKeyboardNavigation();
                        setD((X)=>{
                            const Y = gn({
                                key: H.key,
                                state: {
                                    activeIndex: Ut(X, rows.length)
                                },
                                rows
                            });
                            if (Y.type === "state") {
                                return Y.state.activeIndex;
                            }
                            return X;
                        });
                        return true;
                    }
                    const B = gn({
                        key: H.key,
                        state: {
                            activeIndex: _
                        },
                        rows
                    });
                    switch(B.type){
                        case "state":
                            markKeyboardNavigation();
                            setD(B.state.activeIndex);
                            return true;
                        case "select":
                            onSelect(B.entry);
                            return true;
                        case "dismiss":
                        case "noop":
                            return false;
                    }
                }
            });
        S = [
            _,
            rows,
            onSelect,
            markKeyboardNavigation
        ];
        e[18] = _;
        e[19] = markKeyboardNavigation;
        e[20] = onSelect;
        e[21] = rows;
        e[22] = L;
        e[23] = S;
    } else {
        L = e[22];
        S = e[23];
    }
    r_1.useImperativeHandle(ref, L, S);
    const D = R_1;
    const className = "sand-mention-menu";
    const $ = rows.length === 0 ? <div className={r_3("sand-mention-empty", "sand-9f619 sand-78zum5 sand-dt5ytf sand-195vfkc sand-1y1aw1k sand-pdmqnj sand-wib8y2 sand-1g0dm76")}><span className="sand-tyxrsu sand-11wthnw sand-wn7fz2">{i18n._(Rs(query))}</span><span className="sand-169k319 sand-y5h43f sand-wn7fz2"><T id="iiP6uW"/></span></div> : <At1 direction="vertical" maxHeight={`var(${J}, ${Vt}px)`} ref={(H)=>setH(H?.viewportElement ?? null)} scrollbarVisibility="hover" width="100%"><ul aria-label={j} className={r_3("sand-mention-listbox", E.className)} id={p} role="listbox" style={E.style}>{I.map((rowIndex)=>{
        const B = rows[rowIndex];
        if (B == null) {
            return null;
        }
        return <Ws1Component key={B.key} activeRef={rowIndex === _ ? activeOptionRef : null} entry={B} isActive={rowIndex === _} optionId={x(rowIndex)} onActivate={()=>onSelect(B)} onHover={()=>setD(rowIndex)} rowCount={rows.length} rowIndex={rowIndex}/>;
    })}</ul></At1>;
    let q;
    if (e[24] !== D || e[25] !== $) {
        q = <D className={className}>{$}</D>;
        e[24] = D;
        e[25] = $;
        e[26] = q;
    } else {
        q = e[26];
    }
    return q;
}
function Ws1Component(t) {
    Ws1Component.d = 373;
    const e = c_1.c(29);
    const { entry, rowIndex, rowCount, isActive, optionId, activeRef, onActivate, onHover } = t;
    const { i18n } = u_1();
    let u;
    if (e[0] !== onActivate) {
        u = (A)=>{
            if (A.button === 0) {
                A.preventDefault();
                onActivate();
            }
        };
        e[0] = onActivate;
        e[1] = u;
    } else {
        u = e[1];
    }
    const f = u;
    let h;
    let m;
    if (e[2] !== rowIndex) {
        h = p_1(r_4.item, ot.windowItem(rowIndex));
        m = r_3("sand-mention-option", h.className);
        e[2] = rowIndex;
        e[3] = h;
        e[4] = m;
    } else {
        h = e[3];
        m = e[4];
    }
    const h_style = h.style;
    const b = rowIndex + 1;
    const entry_subtitle = entry.subtitle;
    let p;
    if (e[5] !== entry) {
        p = <SComponent entry={entry}/>;
        e[5] = entry;
        e[6] = p;
    } else {
        p = e[6];
    }
    const entry_label = entry.label;
    let onClick;
    if (e[7] !== onActivate) {
        onClick = (A)=>{
            if (A.detail === 0) {
                onActivate();
            }
        };
        e[7] = onActivate;
        e[8] = onClick;
    } else {
        onClick = e[8];
    }
    let trailing;
    if (e[9] !== entry || e[10] !== i18n) {
        trailing = i18n._(Wo(entry));
        e[9] = entry;
        e[10] = i18n;
        e[11] = trailing;
    } else {
        trailing = e[11];
    }
    let x;
    if (e[12] !== activeRef || e[13] !== entry.label || e[14] !== entry.subtitle || e[15] !== f || e[16] !== isActive || e[17] !== onHover || e[18] !== optionId || e[19] !== rowCount || e[20] !== b || e[21] !== p || e[22] !== onClick || e[23] !== trailing) {
        x = <M_1 ref={activeRef} aria-posinset={b} aria-selected={isActive} aria-setsize={rowCount} className="sand-mention-option-button" detail={entry_subtitle} icon={p} id={optionId} isActive={isActive} name={entry_label} onClick={onClick} onPointerMove={onHover} onPointerDown={f} role="option" trailing={trailing}/>;
        e[12] = activeRef;
        e[13] = entry.label;
        e[14] = entry.subtitle;
        e[15] = f;
        e[16] = isActive;
        e[17] = onHover;
        e[18] = optionId;
        e[19] = rowCount;
        e[20] = b;
        e[21] = p;
        e[22] = onClick;
        e[23] = trailing;
        e[24] = x;
    } else {
        x = e[24];
    }
    let v;
    if (e[25] !== h.style || e[26] !== x || e[27] !== m) {
        v = <li className={m} role="presentation" style={h_style}>{x}</li>;
        e[25] = h.style;
        e[26] = x;
        e[27] = m;
        e[28] = v;
    } else {
        v = e[28];
    }
    return v;
}
function si(t) {
    return `${t.category}:${t.id}`;
}
const Tt = [
    "mention",
    "hash",
    "emoji",
    "skill"
];
function Cs(t, e) {
    return ()=>{
        const n = e();
        return {
            ...n,
            onBeforeStart (s) {
                t.onReportExpected?.();
                n.onBeforeStart?.(s);
            },
            onBeforeUpdate (s) {
                t.onReportExpected?.();
                n.onBeforeUpdate?.(s);
            },
            onStart (s) {
                try {
                    n.onStart?.(s);
                } finally{
                    t.onReportSettled?.();
                }
            },
            onUpdate (s) {
                try {
                    n.onUpdate?.(s);
                } finally{
                    t.onReportSettled?.();
                }
            }
        };
    };
}
function ri(t) {
    const e = {
        mention: {
            isOpen: false,
            isVisible: false,
            listbox: null,
            emptyTitle: null
        },
        hash: {
            isOpen: false,
            isVisible: false,
            listbox: null,
            emptyTitle: null
        },
        emoji: {
            isOpen: false,
            isVisible: false,
            listbox: null,
            emptyTitle: null
        },
        skill: {
            isOpen: false,
            isVisible: false,
            listbox: null,
            emptyTitle: null
        }
    };
    const n = new Set;
    let s = 0;
    let r = null;
    const o = (d)=>{
        const c = t();
        if (c == null) {
            return;
        }
        const u = Tt.map((f)=>e[f]).find((f)=>f.isOpen && f.listbox != null)?.listbox ?? null;
        if (!(u?.id === r?.id && u?.activeOptionId === r?.activeOptionId)) {
            if (u == null) {
                c.removeAttribute("aria-controls");
                c.removeAttribute("aria-activedescendant");
            } else {
                if (d && u.id !== r?.id) {
                    d_1(u.label);
                }
                c.setAttribute("aria-controls", u.id);
                c.setAttribute("aria-activedescendant", u.activeOptionId);
            }
            r = u;
        }
    };
    const i = ()=>{
        const d = Tt.some((c)=>e[c].isOpen);
        for (const c of Tt){
            const u = e[c].emptyTitle;
            if (u == null || d) {
                n.delete(c);
            } else if (s === 0 && !n.has(c)) {
                n.add(c);
                d_1(u);
            }
        }
    };
    const l = async ()=>{
        await Promise.resolve();
        i();
    };
    const a = (d)=>({
            onOpenChange (c, u = null) {
                e[d].isOpen = c;
                e[d].emptyTitle = u;
                if (u == null) {
                    n.delete(d);
                }
                if (!c) {
                    e[d].listbox = null;
                }
                o(c);
                l();
            },
            onVisibleChange (c) {
                e[d].isVisible = c;
            },
            onListboxChange (c) {
                e[d].listbox = c;
                o(true);
            }
        });
    return {
        mention: a("mention"),
        hash: a("hash"),
        emoji: a("emoji"),
        skill: a("skill"),
        onReportExpected () {
            s += 1;
        },
        onReportSettled () {
            s -= 1;
            l();
        },
        isAnyMenuOpen () {
            return Object.values(e).some((d)=>d.isOpen);
        },
        isAnyMenuVisible () {
            return Object.values(e).some((d)=>d.isVisible);
        }
    };
}
function Qt(t, e = {}) {
    return Cs(e, ()=>{
        let n = null;
        let s = false;
        const r = t({
            isDismissed: ()=>s
        });
        const o = ()=>{
            s = true;
            r.onBlur();
        };
        const i = ()=>{
            n?.off("blur", o);
            n = null;
        };
        return {
            ...r.handlers,
            onStart (l) {
                if (r.shouldStart?.(l) !== false) {
                    i();
                    s = false;
                    n = l.editor;
                    n.on("blur", o);
                    r.handlers.onStart?.(l);
                }
            },
            onUpdate (l) {
                s || r.handlers.onUpdate?.(l);
            },
            onKeyDown (l) {
                if (s) {
                    return false;
                }
                return r.handlers.onKeyDown?.(l) ?? false;
            },
            onExit (l) {
                try {
                    r.handlers.onExit?.(l);
                } finally{
                    i();
                }
            }
        };
    });
}
function Yt(t, ...e) {
    const n = [];
    for (const s of e){
        const r = t[s];
        if (r === undefined) {
            return null;
        }
        n.push(r);
    }
    return n;
}
const yn = `,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\!%'"~=<>:;`;
const oi = 120;
const Jt = 50;
const it = 200;
const bn = new Map;
function ii(char) {
    const e = bn.get(char);
    if (e != null) {
        return e;
    }
    const n = e_1(char);
    const s = `[^${n}${yn}\\s]`;
    const r = `(?:\\.[ |$]| |[${yn}/]|)`;
    const o = {
        multiWord: new RegExp(`(^|\\s|\\()([${n}]((?:${s}${r}){0,${oi}}))$`),
        singleWord: new RegExp(`(^|\\s|\\()([${n}]((?:${s}){0,${Jt}}))$`)
    };
    bn.set(char, o);
    return o;
}
function li(t, char) {
    const n = ii(char);
    const s = n.multiWord.exec(t) ?? n.singleWord.exec(t);
    if (s === null) {
        return null;
    }
    const r = Yt(s, 1, 2, 3);
    if (r === null) {
        return null;
    }
    const [o, replaceableString, matchingString] = r;
    return {
        leadOffset: s.index + o.length,
        matchingString,
        replaceableString
    };
}
function Zt({ char, $position }) {
    const $position_pos = $position.pos;
    const r = $position.nodeBefore?.isText ? $position.nodeBefore.text : undefined;
    if (!r) {
        return null;
    }
    const o = r.length > it ? r.slice(-it) : r;
    const i = $position_pos - o.length;
    const l = $position.nodeAfter?.isText ? $position.nodeAfter.text ?? "" : "";
    const a = l.search(/\s/);
    const d = a === -1 ? l : l.slice(0, a);
    const c = li(o + d, char);
    if (!c || c.matchingString.length > Jt) {
        return null;
    }
    const u = i + c.leadOffset;
    const f = u + c.replaceableString.length;
    if (u < $position_pos && f >= $position_pos) {
        return {
            range: {
                from: u,
                to: f
            },
            query: c.matchingString,
            text: c.replaceableString
        };
    }
    return null;
}
const ai = ":";
const Ts = "a-z0-9_+-";
const ci = "[^\\p{L}\\p{N}_:/]";
const ui = 1;
const Ns = Jt;
const di = new RegExp(`(^|${ci})(${e_1(ai)}([${Ts}]{0,${Ns}}))$`, "u");
function fi({ $position }) {
    const $position_pos = $position.pos;
    const s = $position.nodeBefore?.isText ? $position.nodeBefore.text : undefined;
    if (!s) {
        return null;
    }
    const r = s.length > it ? s.slice(-it) : s;
    const o = $position_pos - r.length;
    const i = $position.nodeAfter?.isText ? $position.nodeAfter.text ?? "" : "";
    const l = i.search(new RegExp(`[^${Ts}]`));
    const a = l === -1 ? i : i.slice(0, l);
    const d = di.exec(r + a);
    if (d === null) {
        return null;
    }
    const c = Yt(d, 1, 2, 3);
    if (c === null) {
        return null;
    }
    const [u, f, h] = c;
    if (h.length < ui || h.length > Ns) {
        return null;
    }
    const m = o + d.index + u.length;
    const _ = m + f.length;
    if (m < $position_pos && _ >= $position_pos) {
        return {
            range: {
                from: m,
                to: _
            },
            query: h,
            text: f
        };
    }
    return null;
}
function Ms(t, editor) {
    if (editor.state == null) {
        return true;
    }
    return t.getState(editor.state)?.active !== false;
}
const As = new a("sand-document-token");
function pi() {
    return new P({
        key: As,
        state: {
            init: ()=>Symbol("document"),
            apply: (t, e)=>e
        }
    });
}
function xn(t) {
    if (t == null) {
        return undefined;
    }
    return As.getState(t.state);
}
function createDismissal(t) {
    let e = null;
    let n = null;
    let s = null;
    let r = null;
    let o = null;
    const i = ()=>{
        e = null;
    };
    const l = (anchor, cause)=>{
        e = {
            anchor,
            cause,
            document: xn(r)
        };
    };
    const a = ({ editor })=>{
        const doc = editor.state.doc;
        const u = o != null && doc.content.size < o;
        o = doc.content.size;
        if (e != null) {
            if (e.anchor >= doc.content.size || doc.textBetween(e.anchor, e.anchor + 1) !== t) {
                i();
                return;
            }
            if (u && e.cause === "no-results") {
                i();
            }
        }
    };
    return {
        trackActive (d, c) {
            n = c;
            if (d.state != null) {
                o = d.state.doc.content.size;
            }
            if (r !== d) {
                r?.off("update", a);
                d.on("update", a);
                r = d;
            }
        },
        trackResults (d, c) {
            if (n == null) {
                return false;
            }
            if (e?.anchor === n) {
                return true;
            }
            if (c || !d.includes(" ")) {
                return false;
            }
            l(n, "no-results");
            s = "no-results";
            return true;
        },
        markEscapeDismissal () {
            s = "escape-key";
        },
        handleExit () {
            s === "escape-key" ? n != null && l(n, "escape-key") : s == null && n != null && e?.anchor === n && i();
            s = null;
            n = null;
        },
        allowAt (d, c) {
            if (e == null) {
                return true;
            }
            if (e.anchor !== d || e.document !== xn(r) || e.cause === "no-results" && o != null && c.doc.content.size < o) {
                i();
                return true;
            }
            return false;
        }
    };
}
const nt = "__everyone__";
function Sn(t, fallback) {
    return {
        type: "tool",
        iconId: t?.iconId,
        iconUrl: t?.iconUrl,
        fallback
    };
}
function hi(t) {
    switch(t.status){
        case "connected":
            return i_1._({
                id: "hYTBlk"
            });
        case "needsAuth":
            return i_1._({
                id: "8nZIsU"
            });
        case "needsGrant":
            return i_1._({
                id: "KVyQVW"
            });
        case "error":
            return i_1._({
                id: "cs+QV+"
            });
        case "initializing":
            return i_1._({
                id: "PHjHa8"
            });
        case "disconnected":
            return i_1._({
                id: "ALFe2s"
            });
        case "disabledByTeamAdminPolicy":
            return i_1._({
                id: "Og2SKn"
            });
        default:
            if (t.accountKey === "default") {
                return t.url ?? "";
            }
            return t.accountKey;
    }
}
function mi(t) {
    const e = [];
    const n = t.getMembers();
    const s = kj(t.getPeople?.() ?? []);
    if ((t.allowEveryone?.() ?? true) && n.length + s.length >= 2) {
        const r = vo();
        e.push({
            key: `assistants:${nt}`,
            id: nt,
            category: "assistants",
            label: cX({
                isEveryone: true,
                label: r
            }),
            keywords: [
                "all"
            ],
            ...s.length > 0 ? {
                seat: "room"
            } : {},
            icon: {
                type: "everyone"
            },
            insert: {
                type: "mention",
                id: nt,
                label: r
            }
        });
    }
    for (const member of n){
        const o = bc(member);
        e.push({
            key: `assistants:${member.id}`,
            id: member.id,
            category: "assistants",
            label: o,
            subtitle: member.isGroup ? i_1._({
                id: "hsMz1s",
                values: {
                    0: member.memberIds.length
                }
            }) : undefined,
            icon: member.isGroup ? {
                type: "group"
            } : {
                type: "agent",
                member
            },
            isGroup: member.isGroup,
            insert: {
                type: "mention",
                id: member.id,
                label: member.name
            }
        });
    }
    for (const { id, name, person } of s){
        e.push({
            key: `assistants:${id}`,
            id,
            category: "assistants",
            label: name,
            seat: "person",
            icon: {
                type: "person",
                person
            },
            insert: {
                type: "mention",
                id,
                label: name
            }
        });
    }
    for (const r of t.getSkills?.() ?? []){
        if (r.trigger == null) {
            continue;
        }
        const o = t.resolveSkillIcon?.(r);
        const i = h5({
            id: r.id,
            label: r.name
        });
        e.push({
            key: `automations:${r.id}`,
            id: r.id,
            category: "automations",
            label: i,
            subtitle: kk(r),
            icon: Sn(o, "clock"),
            insert: {
                type: "skill",
                id: r.id,
                label: r.name,
                iconId: o?.iconId,
                iconUrl: o?.iconUrl
            }
        });
    }
    for (const r of t.getMcpReferences?.() ?? []){
        const o = kl_1({
            kind: "mcp-server",
            serverId: r.serverIdentifier
        });
        const i = ei_1(r.name, r.accountKey);
        e.push({
            key: `tools:${o}`,
            id: o,
            category: "tools",
            label: i,
            subtitle: hi(r),
            icon: Sn(r.icon, "plug"),
            insert: {
                type: "skill",
                id: kl_1({
                    kind: "mcp-server",
                    serverId: r.serverId
                }),
                label: i,
                iconId: r.icon?.iconId,
                iconUrl: r.icon?.iconUrl
            }
        });
    }
    return e;
}
function gi(editor, range, insert) {
    const s = insert.type === "mention" ? {
        type: "mention",
        attrs: {
            id: insert.id,
            label: insert.label
        }
    } : {
        type: km,
        attrs: {
            id: insert.id,
            label: insert.label,
            iconId: insert.iconId ?? null,
            iconUrl: insert.iconUrl ?? null
        }
    };
    editor.chain().focus().insertContentAt(range, [
        s,
        {
            type: "text",
            text: " "
        }
    ]).run();
    const r = window.getSelection();
    if (r != null && r.rangeCount > 0) {
        r.collapseToEnd();
    }
}
const En = new a("sand-mention-suggestion");
function yi(t) {
    const e = createDismissal("@");
    return {
        char: "@",
        pluginKey: En,
        allowSpaces: true,
        allowedPrefixes: null,
        findSuggestionMatch: Zt,
        allow: ({ state, range })=>t.isEnabled?.() !== false && e.allowAt(range.from, state),
        items: ()=>mi(t),
        render: Qt(({ isDismissed })=>{
            let s = null;
            let r = null;
            let o = false;
            let i = [];
            const l = (f)=>({
                    rows: (t.rankRows ?? Zo)(f.items, f.query, i),
                    query: f.query,
                    onSelect: (h)=>{
                        t.recordRecent?.({
                            category: h.category,
                            id: h.id
                        });
                        gi(f.editor, f.range, h.insert);
                    },
                    onListboxChange: t.onListboxChange
                });
            const a = (f, h = null)=>{
                o = f;
                t.onOpenChange?.(f, h);
            };
            const d = ()=>{
                r?.setVisible(false);
                t.onVisibleChange?.(false);
                a(false);
            };
            const c = ()=>{
                e.handleExit();
                r?.destroy();
                r = null;
                s?.destroy();
                s = null;
                t.onOpenChange?.(false);
                t.onVisibleChange?.(false);
            };
            const u = (f, h = l(f))=>{
                s?.updateProps(h);
                const m = h.rows.length > 0;
                if (e.trackResults(f.query, m) || isDismissed()) {
                    d();
                    return;
                }
                const _ = f.query.trim().length > 0;
                const b = m || _;
                r?.setVisible(b);
                t.onVisibleChange?.(b);
                a(m, b ? i_1._(Rs(f.query)) : null);
                b && r?.reposition(f.clientRect);
            };
            return {
                onBlur: d,
                shouldStart: (f)=>Ms(En, f.editor),
                handlers: {
                    onStart (f) {
                        if (s != null) {
                            c();
                        }
                        e.trackActive(f.editor, f.range.from);
                        i = (t.getRecents?.() ?? []).map(si);
                        const h = l(f);
                        s = new Oe(IsComponent, {
                            editor: f.editor,
                            props: h
                        });
                        r = G(s.element, {
                            caretGapPx: I_1,
                            maxHeightPx: Vt,
                            crossAxisOffsetPx
                        });
                        u(f, h);
                    },
                    onUpdate (f) {
                        if (s != null) {
                            e.trackActive(f.editor, f.range.from);
                            u(f);
                        }
                    },
                    onKeyDown (f) {
                        if (f.event.key === "Escape") {
                            f.event.stopPropagation();
                            if (o && (s?.ref?.onKeyDown(f.event) ?? false)) {
                                return true;
                            }
                            return e.markEscapeDismissal(), false;
                        }
                        if (o) {
                            return s?.ref?.onKeyDown(f.event) ?? false;
                        }
                        return false;
                    },
                    onExit () {
                        c();
                    }
                }
            };
        }, t)
    };
}
function Ls(attrs) {
    if (typeof attrs.label === "string" && attrs.label.length > 0) {
        return attrs.label;
    }
    if (typeof attrs.id === "string") {
        return attrs.id;
    }
    return "";
}
function bi(attrs) {
    const e = Ls(attrs);
    const n = typeof attrs.id !== "string" || attrs.id === nt;
    return cX({
        isEveryone: n && cY(e, i_1.locale),
        label: e
    });
}
function PsComponent(t) {
    PsComponent.d = 690;
    const e = c_1.c(10);
    const { node, editor, selected } = t;
    let o;
    if (e[0] !== editor || e[1] !== selected) {
        o = {
            editor,
            selected
        };
        e[0] = editor;
        e[1] = selected;
        e[2] = o;
    } else {
        o = e[2];
    }
    const i = pt(o);
    let l;
    if (e[3] !== node.attrs) {
        l = Ls(node.attrs);
        e[3] = node.attrs;
        e[4] = l;
    } else {
        l = e[4];
    }
    const a = l;
    let d;
    if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
        d = {
            verticalAlign: "top"
        };
        e[5] = d;
    } else {
        d = e[5];
    }
    const c = typeof node.attrs.id === "string" ? node.attrs.id : undefined;
    let u;
    if (e[6] !== i || e[7] !== a || e[8] !== c) {
        u = <Oe1 as="span" data-type="mention" style={d}><Lo1 id={c} isInteractive={false} isSelected={i} label={a}/></Oe1>;
        e[6] = i;
        e[7] = a;
        e[8] = c;
        e[9] = u;
    } else {
        u = e[9];
    }
    return u;
}
const xi = /\n([-+*])\s$/;
const Si = /\n(\d+)\.\s$/;
function vn(find, e, n) {
    return new I({
        find,
        handler: ({ range, match, chain })=>{
            chain().deleteRange(range).splitBlock().wrapInList(e, n(match)).run();
        }
    });
}
const Ei = j_2.create({
    name: "sandListAfterLineBreak",
    addInputRules () {
        return [
            vn(xi, "bulletList", ()=>{}),
            vn(Si, "orderedList", (t)=>({
                    start: Number(t[1])
                }))
        ];
    }
});
function Os(t) {
    return t.schema.nodes.listItem;
}
function kn(state) {
    const e = Os(state);
    const { $from } = state.selection;
    for(let s = $from.depth; s > 0; s--){
        if ($from.node(s).type === e) {
            return true;
        }
    }
    return false;
}
function en(t) {
    return (e, n)=>{
        const s = Os(e);
        return s != null && t(s)(e, n);
    };
}
const vi = en((t)=>(e, n)=>k(t)(e, n) || l(t)(e, n));
const ki = en(s);
const Ri = en(l);
function Ds(attrs) {
    if (typeof attrs.id !== "string" || attrs.id.length === 0 || typeof attrs.label !== "string") {
        return null;
    }
    return {
        id: attrs.id,
        label: attrs.label,
        ...typeof attrs.iconId === "string" ? {
            iconId: attrs.iconId
        } : {},
        ...typeof attrs.iconUrl === "string" ? {
            iconUrl: attrs.iconUrl
        } : {}
    };
}
function _i(attrs) {
    const e = Ds(attrs);
    if (e == null) {
        return "";
    }
    return h5(e);
}
function js(t) {
    js.d = 389;
    const e = c_1.c(35);
    const { node, editor, selected } = t;
    const { i18n } = u_1();
    let i;
    if (e[0] !== editor || e[1] !== selected) {
        i = {
            editor,
            selected
        };
        e[0] = editor;
        e[1] = selected;
        e[2] = i;
    } else {
        i = e[2];
    }
    const l = pt(i);
    let a;
    let d;
    let c;
    let u;
    let f;
    let h;
    let m;
    let reference;
    let b;
    let y;
    let p;
    let w;
    if (e[3] !== i18n || e[4] !== node.attrs) {
        w = Symbol.for("react.early_return_sentinel");
        e: {
            const v = Ds(node.attrs);
            if (v == null) {
                w = null;
                break e;
            }
            u = h5(v, i18n);
            c = Oe1;
            b = "span";
            y = "skill-reference";
            if (e[17] === Symbol.for("react.memo_cache_sentinel")) {
                p = {
                    verticalAlign: "top"
                };
                e[17] = p;
            } else {
                p = e[17];
            }
            d = Y;
            a = c_;
            f = v.iconId == null ? {} : {
                iconId: v.iconId
            };
            h = v.iconUrl == null ? {} : {
                iconUrl: v.iconUrl
            };
            m = u;
            reference = kn_1(v.id);
        }
        e[3] = i18n;
        e[4] = node.attrs;
        e[5] = a;
        e[6] = d;
        e[7] = c;
        e[8] = u;
        e[9] = f;
        e[10] = h;
        e[11] = m;
        e[12] = reference;
        e[13] = b;
        e[14] = y;
        e[15] = p;
        e[16] = w;
    } else {
        a = e[5];
        d = e[6];
        c = e[7];
        u = e[8];
        f = e[9];
        h = e[10];
        m = e[11];
        reference = e[12];
        b = e[13];
        y = e[14];
        p = e[15];
        w = e[16];
    }
    if (w !== Symbol.for("react.early_return_sentinel")) {
        return w;
    }
    let j;
    if (e[18] !== a || e[19] !== f || e[20] !== h || e[21] !== m || e[22] !== reference) {
        j = j_1.jsx(a, {
            ...f,
            ...h,
            label: m,
            reference
        });
        e[18] = a;
        e[19] = f;
        e[20] = h;
        e[21] = m;
        e[22] = reference;
        e[23] = j;
    } else {
        j = e[23];
    }
    let children;
    if (e[24] !== d || e[25] !== u || e[26] !== l || e[27] !== j) {
        children = j_1.jsx(d, {
            icon: j,
            isSelected: l,
            label: u,
            title: u
        });
        e[24] = d;
        e[25] = u;
        e[26] = l;
        e[27] = j;
        e[28] = children;
    } else {
        children = e[28];
    }
    let x;
    if (e[29] !== c || e[30] !== children || e[31] !== b || e[32] !== y || e[33] !== p) {
        x = j_1.jsx(c, {
            as: b,
            "data-type": y,
            style: p,
            children
        });
        e[29] = c;
        e[30] = children;
        e[31] = b;
        e[32] = y;
        e[33] = p;
        e[34] = x;
    } else {
        x = e[34];
    }
    return x;
}
const Ii = d5 + 2 * E_1[1.5];
function wi(t, key, n, s) {
    const r = n - 1;
    const o = Math.min(Math.max(t, 0), r);
    const i = a7(key, s);
    if (i != null) {
        return Math.min(r, Math.max(0, o + i));
    }
    switch(key){
        case "ArrowDown":
            return Math.min(r, o + d4);
        case "ArrowUp":
            return Math.max(0, o - d4);
        default:
            return null;
    }
}
function $s(t) {
    $s.d = 370;
    const e = c_1.c(34);
    const { entries, query, onSelect, onListboxChange, ref } = t;
    const { _: __1 } = u_1();
    const [a, setA] = r_1.useState(0);
    const { activeOptionRef, markKeyboardNavigation } = u_4();
    const f = `sand-emoji-listbox-${r_1.useId()}`;
    let h;
    if (e[0] !== __1) {
        h = __1({
            id: "tKlWWY"
        });
        e[0] = __1;
        e[1] = h;
    } else {
        h = e[1];
    }
    const m = h;
    const [_, set_] = r_1.useState(query);
    if (query !== _) {
        set_(query);
        setA(0);
    }
    const y = Math.min(a, Math.max(0, entries.length - 1));
    let p;
    if (e[2] !== y || e[3] !== entries.length || e[4] !== f || e[5] !== m || e[6] !== onListboxChange) {
        p = ()=>{
            onListboxChange?.(entries.length === 0 ? null : {
                id: f,
                label: m,
                activeOptionId: c$(f, y)
            });
        };
        e[2] = y;
        e[3] = entries.length;
        e[4] = f;
        e[5] = m;
        e[6] = onListboxChange;
        e[7] = p;
    } else {
        p = e[7];
    }
    u_3(p);
    let w;
    let j;
    if (e[8] !== y || e[9] !== entries || e[10] !== markKeyboardNavigation || e[11] !== onSelect) {
        w = ()=>({
                onKeyDown (L) {
                    if (entries.length === 0) {
                        return false;
                    }
                    const S = wi(y, L.key, entries.length, a6());
                    if (S != null) {
                        markKeyboardNavigation();
                        setA(S);
                        return true;
                    }
                    if (L.key === "Enter" || L.key === "Tab") {
                        const D = entries[y] ?? entries[0];
                        if (D != null) {
                            onSelect(D);
                        }
                        return true;
                    }
                    return false;
                }
            });
        j = [
            y,
            entries,
            onSelect,
            markKeyboardNavigation
        ];
        e[8] = y;
        e[9] = entries;
        e[10] = markKeyboardNavigation;
        e[11] = onSelect;
        e[12] = w;
        e[13] = j;
    } else {
        w = e[12];
        j = e[13];
    }
    r_1.useImperativeHandle(ref, w, j);
    if (entries.length === 0) {
        return null;
    }
    let M;
    let x;
    let v;
    if (e[14] === Symbol.for("react.memo_cache_sentinel")) {
        M = r_3("sand-emoji-menu", "sand-9f619 sand-uve7l6 sand-1rgtt3y sand-1ua6jya sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-1pkpdue sand-14vywav sand-b3r6kr");
        x = {
            width: d0_1
        };
        v = {
            className: "sand-196pc8s sand-22095l"
        };
        e[14] = M;
        e[15] = x;
        e[16] = v;
    } else {
        M = e[14];
        x = e[15];
        v = e[16];
    }
    const v_className = v.className;
    let N;
    if (e[17] === Symbol.for("react.memo_cache_sentinel")) {
        N = r_3("sand-emoji-search-mirror", "sand-1iyjqo2 sand-euugli sand-1wd3ewq sand-11wthnw sand-uxw1ft sand-b3r6kr sand-lyipyv");
        e[17] = N;
    } else {
        N = e[17];
    }
    let C;
    if (e[18] !== query || e[19] !== N) {
        C = <div className={v_className}><Fo1><span className={N}>{query}</span></Fo1></div>;
        e[18] = query;
        e[19] = N;
        e[20] = C;
    } else {
        C = e[20];
    }
    let selection;
    if (e[21] !== activeOptionRef || e[22] !== y || e[23] !== f || e[24] !== m) {
        selection = {
            listboxId: f,
            label: m,
            activeIndex: y,
            activeCellRef: activeOptionRef,
            onActiveIndexChange: setA
        };
        e[21] = activeOptionRef;
        e[22] = y;
        e[23] = f;
        e[24] = m;
        e[25] = selection;
    } else {
        selection = e[25];
    }
    let I;
    if (e[26] !== entries || e[27] !== onSelect || e[28] !== selection) {
        I = <At1 direction="vertical" maxHeight={`calc(var(${J}, ${d2}px) - ${Ii}px)`} scrollbarVisibility="hover" width="100%"><Po1 entries={entries} markedNatives={markedNatives} onPick={onSelect} selection={selection}/></At1>;
        e[26] = entries;
        e[27] = onSelect;
        e[28] = selection;
        e[29] = I;
    } else {
        I = e[29];
    }
    let E;
    if (e[30] !== C || e[31] !== I || e[32] !== M) {
        E = <div className={M} style={x}>{C}{I}</div>;
        e[30] = C;
        e[31] = I;
        e[32] = M;
        e[33] = E;
    } else {
        E = e[33];
    }
    return E;
}
const markedNatives = new Set;
let Rn = false;
function Hs(t) {
    if (!Rn) {
        Rn = true;
        d0(t, {
            tags: {
                sand_area: "composer-emoji-index"
            }
        });
    }
}
function Nt(query, e) {
    const n = ko_1();
    if (n == null) {
        return [];
    }
    return [
        ...kp(n, query, kq, e)
    ];
}
function Us(editor, range, native) {
    editor.chain().focus().insertContentAt(range, `${native} `).run();
    const s = window.getSelection();
    if (s != null && s.rangeCount > 0) {
        s.collapseToEnd();
    }
}
const lt = new a("sand-emoji-suggestion");
function Ti(suggestion) {
    const e = createDismissal(":");
    return {
        char: ":",
        pluginKey: lt,
        allowSpaces: false,
        allowedPrefixes: null,
        findSuggestionMatch: fi,
        allow: ({ state, range })=>e.allowAt(range.from, state),
        items: ({ query })=>Nt(query, suggestion.getRecents?.() ?? []),
        render: Qt(({ isDismissed })=>{
            let s = null;
            let r = null;
            let o = 0;
            let i = null;
            let l = false;
            let a = [];
            const d = ()=>{
                r?.setVisible(false);
                suggestion.onOpenChange?.(false);
            };
            const c = ()=>{
                i = null;
                e.handleExit();
                r?.destroy();
                r = null;
                s?.destroy();
                s = null;
                suggestion.onOpenChange?.(false);
            };
            const u = (h, entries)=>({
                    entries,
                    query: h.query,
                    onSelect: (_)=>{
                        suggestion.recordRecent?.(_.id);
                        Us(h.editor, h.range, _.native);
                    },
                    onListboxChange: suggestion.onListboxChange
                });
            const f = (h)=>{
                i = h;
                const m = Nt(h.query, a);
                o = m.length;
                s?.updateProps(u(h, m));
                if (isDismissed()) {
                    d();
                    return;
                }
                const _ = o > 0;
                r?.setVisible(_);
                suggestion.onOpenChange?.(_);
                _ && r?.reposition(h.clientRect);
                if (o === 0 && ko_1() == null && !l) {
                    l = true;
                    suggestion.onReportExpected?.();
                    kr().then(()=>{
                        l = false;
                        if (i != null && s != null && i.editor.isFocused) {
                            f(i);
                        }
                    }).catch((b)=>{
                        l = false;
                        Hs(b);
                    }).finally(()=>suggestion.onReportSettled?.());
                }
            };
            return {
                onBlur: d,
                shouldStart: (h)=>Ms(lt, h.editor),
                handlers: {
                    onStart (h) {
                        if (s != null) {
                            c();
                        }
                        e.trackActive(h.editor, h.range.from);
                        a = suggestion.getRecents?.() ?? [];
                        s = new Oe($s, {
                            editor: h.editor,
                            props: u(h, Nt(h.query, a))
                        });
                        r = G(s.element, {
                            caretGapPx: I_1,
                            maxHeightPx: d2
                        });
                        f(h);
                    },
                    onUpdate (h) {
                        if (s != null) {
                            e.trackActive(h.editor, h.range.from);
                            f(h);
                        }
                    },
                    onKeyDown (h) {
                        if (o === 0) {
                            return false;
                        }
                        if (h.event.key === "Escape") {
                            h.event.stopPropagation();
                            e.markEscapeDismissal();
                            return false;
                        }
                        return s?.ref?.onKeyDown(h.event) ?? false;
                    },
                    onExit () {
                        c();
                    }
                }
            };
        }, suggestion)
    };
}
const Ni = /(^|[^\p{L}\p{N}_:/])(:([a-z0-9_+-]{1,50}))$/u;
const _n = 60;
let In = null;
let Mt = null;
function Mi(t) {
    if (t === In && Mt != null) {
        return Mt;
    }
    const e = new Map;
    for (const n of t.categories){
        for (const s of n.emojis){
            for (const r of s.shortcodes){
                if (!e.has(r)) {
                    e.set(r, s);
                }
            }
        }
    }
    In = t;
    Mt = e;
    return e;
}
function tn(t) {
    const e = t.length > _n ? t.slice(-_n) : t;
    const n = Ni.exec(e);
    if (n == null) {
        return null;
    }
    const s = Yt(n, 2, 3);
    if (s == null) {
        return null;
    }
    const [r, shortcode] = s;
    return {
        replacedTextLength: r.length,
        shortcode
    };
}
function Vs(t, e) {
    const n = tn(t);
    if (n == null) {
        return null;
    }
    const s = Mi(e).get(n.shortcode);
    if (s == null) {
        return null;
    }
    return {
        replacedTextLength: n.replacedTextLength,
        entry: s
    };
}
const Q = new a("sand-emoji-shortcode-completion");
function qs(state) {
    return Q.getState(state) ?? null;
}
function Ks(t, e, n) {
    const s = e - t.length;
    for (const r of n){
        if (r.range.to < s || r.range.to >= e) {
            continue;
        }
        const run = tn(` ${t.slice(r.range.to - s)}`);
        if (run != null && e - run.replacedTextLength === r.range.to) {
            return {
                run,
                predecessor: r.id
            };
        }
    }
    return null;
}
function wn(t, e) {
    if (t.composing) {
        return false;
    }
    const n = qs(t.state);
    if (n == null && ko_1() != null) {
        return false;
    }
    const s = lt.getState(t.state);
    if (!(s?.active === true && s.query != null) && (n?.terminals.length ?? 0) === 0) {
        if (n == null || n.shortcodes.length === 0) {
            return false;
        }
        if (e.kind === "tab") {
            const { $from, from } = t.state.selection;
            const l = $from.nodeBefore?.isText ? $from.nodeBefore.text : undefined;
            if (l == null || Ks(l, from, n.shortcodes) == null) {
                return false;
            }
        }
    }
    t.dispatch(t.state.tr.setMeta(Q, {
        shortcodes: n?.shortcodes ?? [],
        terminals: [
            ...n?.terminals ?? [],
            e
        ]
    }));
    return true;
}
function Ai(t, e) {
    let { from, to } = t.range;
    for (const r of e.mapping.maps){
        let o = false;
        r.forEach((i, l)=>{
            if (i === l ? i > from && i < to : i < to && l > from) {
                o = true;
            }
        });
        if (o) {
            return null;
        }
        from = r.map(from, 1);
        to = r.map(to, -1);
    }
    if (from >= to || e.doc.textBetween(from, to) !== `:${t.shortcode}:`) {
        return null;
    }
    return {
        ...t,
        range: {
            from,
            to
        }
    };
}
function Cn(t, e, n) {
    if (t == null || !e.selection.eq(n.selection.map(e.doc, e.mapping))) {
        return null;
    }
    if (!e.docChanged) {
        return t;
    }
    const shortcodes = [];
    const r = new Map;
    for (const o of t.shortcodes){
        const i = Ai(o, e);
        i != null && (i.predecessor != null && r.get(i.predecessor) !== i.range.from || (shortcodes.push(i), r.set(i.id, i.range.to)));
    }
    if (shortcodes.length === 0) {
        return null;
    }
    return {
        shortcodes,
        terminals: []
    };
}
function Li(t, shortcodes, n) {
    const s = t.state.tr;
    const r = new Set;
    const o = [];
    for (const i of shortcodes){
        if (i.predecessor != null && !r.has(i.predecessor)) {
            continue;
        }
        const l = s.mapping.map(i.range.from, 1);
        const a = s.mapping.map(i.range.to, -1);
        const d = s.doc.resolve(a - 1);
        const c = d.nodeBefore?.isText ? d.nodeBefore.text : undefined;
        if (c == null) {
            continue;
        }
        const u = Vs(c, n);
        if (!(u == null || a - 1 - u.replacedTextLength !== l)) {
            s.insertText(u.entry.native, l, a);
            r.add(i.id);
            o.push(u.entry);
        }
    }
    if (s.docChanged) {
        t.dispatch(s.scrollIntoView());
    }
    return o;
}
function Pi(editor, suggestion) {
    return new P({
        key: Q,
        state: {
            init: ()=>null,
            apply (n, s, r) {
                const o = n.getMeta(Q);
                if (o !== undefined) {
                    return o;
                }
                return Cn(s, n, r);
            }
        },
        view () {
            let n = null;
            let s = false;
            return {
                update (r) {
                    const o = Q.getState(r.state) ?? null;
                    if (o !== n) {
                        n = o;
                        if (o != null) {
                            kr().then((i)=>{
                                if (!(s || Q.getState(r.state) !== o) && (r.dispatch(r.state.tr.setMeta(Q, null)), !(!r.hasFocus() || !r.dom.isConnected || ko_1() !== i))) {
                                    for (const l of Li(r, o.shortcodes, i)){
                                        suggestion.recordRecent?.(l.id);
                                    }
                                    for (const l of o.terminals){
                                        if (s || !r.hasFocus() || !r.dom.isConnected || ko_1() !== i) {
                                            return;
                                        }
                                        const a = lt.getState(r.state);
                                        const d = a?.active === true && a.query != null ? kp(i, a.query, 1, suggestion.getRecents?.() ?? [])[0] : undefined;
                                        if (d != null && a != null) {
                                            Us(editor, a.range, d.native);
                                            suggestion.recordRecent?.(d.id);
                                        } else if (l.kind === "tab") {
                                            r.dispatch(r.state.tr.insertText("	").scrollIntoView());
                                        } else {
                                            l.submit();
                                        }
                                    }
                                }
                            }).catch((i)=>{
                                if (!s && Q.getState(r.state) === o) {
                                    r.dispatch(r.state.tr.setMeta(Q, null));
                                }
                                Hs(i);
                            });
                        }
                    }
                },
                destroy () {
                    s = true;
                }
            };
        },
        props: {
            handleDOMEvents: {
                blur (n) {
                    if (Q.getState(n.state) != null) {
                        n.dispatch(n.state.tr.setMeta(Q, null));
                    }
                    return false;
                }
            },
            handleTextInput (n, s, r, o) {
                if (o !== ":" || n.composing) {
                    return false;
                }
                const i = n.state.doc.resolve(s);
                const l = i.nodeBefore?.isText ? i.nodeBefore.text : undefined;
                if (l == null) {
                    return false;
                }
                const a = ko_1();
                if (a == null) {
                    const c = qs(n.state);
                    const u = tn(l);
                    const f = u == null ? Ks(l, s, c?.shortcodes ?? []) : null;
                    const h = u ?? f?.run;
                    if (h == null) {
                        return false;
                    }
                    const m = n.state.tr.insertText(o, s, r);
                    const b = {
                        shortcodes: [
                            ...Cn(c, m, n.state)?.shortcodes ?? [],
                            {
                                id: Symbol(),
                                range: {
                                    from: s - h.replacedTextLength,
                                    to: s + 1
                                },
                                shortcode: h.shortcode,
                                predecessor: f?.predecessor ?? null
                            }
                        ],
                        terminals: []
                    };
                    n.dispatch(m.setMeta(Q, b).scrollIntoView());
                    return true;
                }
                const d = Vs(l, a);
                if (d == null) {
                    return false;
                }
                n.dispatch(n.state.tr.insertText(d.entry.native, s - d.replacedTextLength, r).scrollIntoView());
                suggestion.recordRecent?.(d.entry.id);
                return true;
            }
        }
    });
}
const Oi = j_2.create({
    name: "sandEmojiSuggestion",
    addProseMirrorPlugins () {
        return [
            Xt({
                editor: this.editor,
                ...Ti(this.options.suggestion)
            }),
            Pi(this.editor, this.options.suggestion)
        ];
    }
});
const Di = 300;
function At(t, e) {
    if (e === 0) {
        return 0;
    }
    return Math.min(Math.max(t, 0), e - 1);
}
function GsComponent(t) {
    GsComponent.d = 375;
    const e = c_1.c(41);
    const { candidates, query, onSelect, onListboxChange, ref } = t;
    const { _: __1 } = u_1();
    const [a, setA] = r_1.useState(0);
    let c;
    if (e[0] !== a || e[1] !== candidates.length) {
        c = At(a, candidates.length);
        e[0] = a;
        e[1] = candidates.length;
        e[2] = c;
    } else {
        c = e[2];
    }
    const u = c;
    const { activeOptionRef, markKeyboardNavigation } = u_4();
    const m = `sand-pr-listbox-${r_1.useId()}`;
    let _;
    if (e[3] !== __1) {
        _ = __1({
            id: "0TrDeg"
        });
        e[3] = __1;
        e[4] = _;
    } else {
        _ = e[4];
    }
    const b = _;
    let y;
    if (e[5] !== m) {
        y = (E)=>`${m}-option-${E}`;
        e[5] = m;
        e[6] = y;
    } else {
        y = e[6];
    }
    const p = y;
    let w;
    if (e[7] !== candidates.length || e[8] !== u || e[9] !== m || e[10] !== b || e[11] !== onListboxChange || e[12] !== p) {
        w = ()=>{
            onListboxChange?.(candidates.length === 0 ? null : {
                id: m,
                label: b,
                activeOptionId: p(u)
            });
        };
        e[7] = candidates.length;
        e[8] = u;
        e[9] = m;
        e[10] = b;
        e[11] = onListboxChange;
        e[12] = p;
        e[13] = w;
    } else {
        w = e[13];
    }
    u_3(w);
    const [j, setJ] = r_1.useState(query);
    if (query !== j) {
        setJ(query);
        setA(0);
    }
    let x;
    let v;
    if (e[14] !== candidates || e[15] !== u || e[16] !== markKeyboardNavigation || e[17] !== onSelect) {
        x = ()=>({
                onKeyDown (E) {
                    if (candidates.length === 0) {
                        return false;
                    }
                    if (E.key === "ArrowDown") {
                        markKeyboardNavigation();
                        setA((L)=>(At(L, candidates.length) + 1) % candidates.length);
                        return true;
                    }
                    if (E.key === "ArrowUp") {
                        markKeyboardNavigation();
                        setA((L)=>(At(L, candidates.length) - 1 + candidates.length) % candidates.length);
                        return true;
                    }
                    if (E.key === "Enter" || E.key === "Tab") {
                        const L = candidates[u] ?? candidates[0];
                        if (L != null) {
                            onSelect(L);
                        }
                        return true;
                    }
                    return false;
                }
            });
        v = [
            u,
            candidates,
            onSelect,
            markKeyboardNavigation
        ];
        e[14] = candidates;
        e[15] = u;
        e[16] = markKeyboardNavigation;
        e[17] = onSelect;
        e[18] = x;
        e[19] = v;
    } else {
        x = e[18];
        v = e[19];
    }
    r_1.useImperativeHandle(ref, x, v);
    if (candidates.length === 0) {
        return null;
    }
    let A;
    if (e[20] === Symbol.for("react.memo_cache_sentinel")) {
        A = r_3("sand-pr-menu", "sand-9f619 sand-1klvvdw sand-xc7z9f sand-1ua6jya sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-1pkpdue sand-14vywav sand-b3r6kr");
        e[20] = A;
    } else {
        A = e[20];
    }
    let N;
    if (e[21] === Symbol.for("react.memo_cache_sentinel")) {
        N = r_3("sand-pr-listbox", "sand-9f619 sand-h8yej3 sand-1ghz6dp sand-1fn2sgp sand-3ct3a4 sand-78zum5 sand-dt5ytf sand-12mrbbr");
        e[21] = N;
    } else {
        N = e[21];
    }
    let C;
    if (e[22] !== activeOptionRef || e[23] !== candidates || e[24] !== u || e[25] !== onSelect || e[26] !== p) {
        let E;
        if (e[28] !== activeOptionRef || e[29] !== u || e[30] !== onSelect || e[31] !== p) {
            E = (L, S)=>{
                const D = S === u;
                const V = ($)=>{
                    if ($.button === 0) {
                        $.preventDefault();
                        onSelect(L);
                    }
                };
                return <li key={L.prNumber} className={r_3("sand-pr-option", "sand-1ghz6dp sand-1717udv")} role="presentation"><button ref={D ? activeOptionRef : null} aria-selected={D} className={r_3("sand-pr-option-button", {
                    0: {
                        className: "sand-78zum5 sand-6s0dn4 sand-ehausa sand-h8yej3 sand-uve7l6 sand-196pc8s sand-1rgtt3y sand-22095l sand-jbqb8w sand-ng3xce sand-1m7fhj7 sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk sand-euugli"
                    },
                    1: {
                        className: "sand-78zum5 sand-6s0dn4 sand-ehausa sand-h8yej3 sand-uve7l6 sand-196pc8s sand-1rgtt3y sand-22095l sand-ng3xce sand-1m7fhj7 sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk sand-euugli sand-qcqck4"
                    }
                }[!!D << 0].className)} id={p(S)} onClick={($)=>{
                    if ($.detail === 0) {
                        onSelect(L);
                    }
                }} onMouseEnter={()=>setA(S)} onPointerDown={V} role="option" type="button"><span aria-hidden className={r_3("sand-78zum5 sand-6s0dn4 sand-l56j7k sand-17z2i9w sand-17rw0jw sand-2lah0s sand-1043rbw sand-arj5zm")}><W color="tertiary" name="git-pull-request" size="xs"/></span><span className={r_3("sand-78zum5 sand-1pha0wt sand-pkkfsy sand-euugli sand-1iyjqo2")}><span className={r_3("sand-2lah0s sand-1wd3ewq sand-11wthnw sand-132q4wb sand-uxw1ft sand-ss6m8b")}>{`#${L.prNumber}`}</span>{L.title != null && L.title.length > 0 ? <span className={r_3("sand-4b2ntj sand-y5h43f sand-132q4wb sand-1iyjqo2 sand-s83m0k sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft")}>{L.title}</span> : null}</span></button></li>;
            };
            e[28] = activeOptionRef;
            e[29] = u;
            e[30] = onSelect;
            e[31] = p;
            e[32] = E;
        } else {
            E = e[32];
        }
        C = candidates.map(E);
        e[22] = activeOptionRef;
        e[23] = candidates;
        e[24] = u;
        e[25] = onSelect;
        e[26] = p;
        e[27] = C;
    } else {
        C = e[27];
    }
    let k;
    if (e[33] !== m || e[34] !== b || e[35] !== N || e[36] !== C) {
        k = <At1 direction="vertical" maxHeight={`var(${J}, ${Di}px)`} scrollbarVisibility="hover" width="100%"><ul aria-label={b} className={N} id={m} role="listbox">{C}</ul></At1>;
        e[33] = m;
        e[34] = b;
        e[35] = N;
        e[36] = C;
        e[37] = k;
    } else {
        k = e[37];
    }
    let I;
    if (e[38] !== k || e[39] !== A) {
        I = <div className={A}>{k}</div>;
        e[38] = k;
        e[39] = A;
        e[40] = I;
    } else {
        I = e[40];
    }
    return I;
}
const ji = 8;
const maxHeightPx = 300;
function Hi(t, query) {
    const n = eY();
    const s = fB(query.trim(), n);
    return (s.length === 0 ? t : t.filter((o)=>String(o.prNumber).includes(s) || fB(o.title ?? "", n).includes(s))).slice(0, ji);
}
function Ui(suggestion, e) {
    const n = createDismissal("#");
    return {
        items: ({ query })=>Hi(suggestion.getCandidates(), query),
        allow: ({ state, range })=>n.allowAt(range.from, state),
        render: Qt(({ isDismissed })=>{
            let r = null;
            let o = null;
            let i = 0;
            const l = (u)=>({
                    candidates: u.items,
                    query: u.query,
                    onSelect: (f)=>u.command({
                            prNumber: f.prNumber,
                            title: f.title,
                            url: f.url
                        }),
                    onListboxChange: suggestion.onListboxChange
                });
            const a = ()=>{
                o?.setVisible(false);
                suggestion.onOpenChange?.(false);
            };
            const d = ()=>{
                n.handleExit();
                o?.destroy();
                o = null;
                r?.destroy();
                r = null;
                suggestion.onOpenChange?.(false);
            };
            const c = (u)=>{
                i = u.items.length;
                r?.updateProps(l(u));
                if (isDismissed()) {
                    a();
                    return;
                }
                const f = i > 0;
                o?.setVisible(f);
                suggestion.onOpenChange?.(f);
                f && o?.reposition(u.clientRect);
            };
            return {
                onBlur: a,
                shouldStart: (u)=>e(u.editor),
                handlers: {
                    onStart (u) {
                        if (r != null) {
                            d();
                        }
                        n.trackActive(u.editor, u.range.from);
                        r = new Oe(GsComponent, {
                            editor: u.editor,
                            props: l(u)
                        });
                        o = G(r.element, {
                            caretGapPx: I_1,
                            maxHeightPx
                        });
                        c(u);
                    },
                    onUpdate (u) {
                        if (r != null) {
                            n.trackActive(u.editor, u.range.from);
                            c(u);
                        }
                    },
                    onKeyDown (u) {
                        if (i === 0) {
                            return false;
                        }
                        if (u.event.key === "Escape") {
                            u.event.stopPropagation();
                            n.markEscapeDismissal();
                            return false;
                        }
                        return r?.ref?.onKeyDown(u.event) ?? false;
                    },
                    onExit () {
                        d();
                    }
                }
            };
        }, suggestion)
    };
}
const Bs = "prReference";
const Tn = new a("sand-pr-reference-suggestion");
function Nn(prNumber) {
    const e = typeof prNumber === "number" ? prNumber : Number(prNumber);
    if (Number.isInteger(e) && e > 0) {
        return `#${e}`;
    }
    return "#";
}
const Vi = c_2.create({
    name: Bs,
    group: "inline",
    inline: true,
    atom: true,
    selectable: true,
    addAttributes () {
        return {
            prNumber: {
                default: null,
                parseHTML: (t)=>{
                    const e = t.getAttribute("data-pr-number");
                    const n = Number(e);
                    if (Number.isInteger(n) && n > 0) {
                        return n;
                    }
                    return null;
                },
                renderHTML: (t)=>{
                    if (typeof t.prNumber === "number") {
                        return {
                            "data-pr-number": String(t.prNumber)
                        };
                    }
                    return {};
                }
            },
            title: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-title"),
                renderHTML: (t)=>{
                    if (typeof t.title === "string") {
                        return {
                            "data-title": t.title
                        };
                    }
                    return {};
                }
            },
            url: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-url"),
                renderHTML: (t)=>{
                    if (typeof t.url === "string") {
                        return {
                            "data-url": t.url
                        };
                    }
                    return {};
                }
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: 'span[data-type="pr-reference"][data-pr-number]'
            }
        ];
    },
    renderHTML ({ node, HTMLAttributes }) {
        return [
            "span",
            m({
                "data-type": "pr-reference"
            }, HTMLAttributes),
            Nn(node.attrs.prNumber)
        ];
    },
    renderText ({ node }) {
        return Nn(node.attrs.prNumber);
    },
    addNodeView () {
        return De(EsComponent);
    },
    addProseMirrorPlugins () {
        const suggestion = this.options.suggestion;
        if (suggestion == null) {
            return [];
        }
        const name = this.name;
        return [
            Xt({
                editor: this.editor,
                char: "#",
                pluginKey: Tn,
                allowSpaces: true,
                allowedPrefixes: null,
                findSuggestionMatch: Zt,
                command: ({ editor, range, props })=>{
                    editor.chain().focus().insertContentAt(range, [
                        {
                            type: name,
                            attrs: {
                                prNumber: props.prNumber,
                                title: props.title,
                                url: props.url
                            }
                        },
                        {
                            type: "text",
                            text: " "
                        }
                    ]).run();
                },
                ...Ui(suggestion, (n)=>n.state == null || Tn.getState(n.state)?.active !== false)
            })
        ];
    }
});
const Mn = 8;
const qi = 3;
const Lt = {
    action: {
        id: "bwRvnp"
    },
    automation: {
        id: "aAnCaW"
    },
    skill: {
        id: "OZJeTZ"
    }
};
function Ki(action, e, n) {
    const s = action.keywords ?? [];
    return cV({
        label: action.label,
        keywords: action.detail == null ? s : [
            ...s,
            action.detail
        ],
        tokens: e,
        normalizedQuery: n
    });
}
function Gi(suggestion, query, n = i_1) {
    const i_1_locale = i_1.locale;
    const r = fB(query.trim(), i_1_locale);
    const o = cU(query);
    const i = o.join(" ");
    const l = suggestion.getSkills().flatMap((c)=>{
        const u = h5({
            id: c.id,
            label: c.name
        }, n);
        if (!fB(c.name, i_1_locale).includes(r) && !fB(u, i_1_locale).includes(r)) {
            return [];
        }
        const f = suggestion.resolveSkillIcon?.(c);
        return [
            {
                id: c.id,
                label: u,
                kind: "skill",
                tag: c.trigger != null ? Lt.automation : Lt.skill,
                subtitle: c.trigger != null ? kk(c) : c.description,
                ...f == null ? {} : {
                    icon: f
                },
                skill: c
            }
        ];
    });
    const a = (suggestion.getActions?.() ?? []).flatMap((action)=>{
        const u = Ki(action, o, i);
        if (u == null) {
            return [];
        }
        return [
            {
                action,
                score: u
            }
        ];
    }).sort((c, u)=>u.score - c.score).map(({ action })=>({
            id: `action:${action.id}`,
            label: action.label,
            kind: "action",
            tag: Lt.action,
            subtitle: action.detail ?? "",
            action
        }));
    const d = l.slice(0, Mn - Math.min(a.length, qi));
    return [
        ...d,
        ...a.slice(0, Mn - d.length)
    ];
}
function Bi(suggestion, char, plumbing, s) {
    const r = ()=>suggestion.getSkills().length > 0 || (suggestion.getActions?.().length ?? 0) > 0;
    const o = plumbing.createDismissal(char);
    return {
        items: ({ query })=>Gi(suggestion, query),
        allow: ({ state, range })=>o.allowAt(range.from, state),
        render: Cs(suggestion, ()=>{
            let i = null;
            let l = null;
            let a = 0;
            let d = false;
            let c = null;
            const u = (p)=>({
                    items: p.items,
                    query: p.query,
                    hasAnySkills: r(),
                    onSelect: (w)=>{
                        if (w.kind === "action" && w.action != null) {
                            p.editor.chain().focus().deleteRange(p.range).run();
                            w.action.run();
                            return;
                        }
                        p.command({
                            id: w.id,
                            label: w.skill?.name ?? w.label,
                            kind: w.kind,
                            ...w.icon?.iconId == null ? {} : {
                                iconId: w.icon.iconId
                            },
                            ...w.icon?.iconUrl == null ? {} : {
                                iconUrl: w.icon.iconUrl
                            }
                        });
                    },
                    onListboxChange: suggestion.onListboxChange
                });
            let f = false;
            const h = (p)=>{
                f = p;
                l?.setVisible(p);
                suggestion.onVisibleChange?.(p);
            };
            const m = (p, w = null)=>{
                suggestion.onOpenChange?.(p, w);
            };
            const _ = (query)=>i_1._(cs(query, r()));
            const b = ()=>{
                d = true;
                h(false);
                m(false);
            };
            const y = ()=>{
                o.handleExit();
                c?.off("blur", b);
                c = null;
                l?.destroy();
                l = null;
                i?.destroy();
                i = null;
                h(false);
                m(false);
            };
            return {
                onStart (p) {
                    if (s(p.editor)) {
                        if (i != null) {
                            y();
                        }
                        o.trackActive(p.editor, p.range.from);
                        d = false;
                        a = p.items.length;
                        c = p.editor;
                        c.on("blur", b);
                        i = new Oe(UsComponent, {
                            editor: p.editor,
                            props: u(p)
                        });
                        l = plumbing.createPopup(i.element, {
                            maxHeightPx: ls
                        });
                        if (o.trackResults(p.query, a > 0)) {
                            h(false);
                            m(false);
                            return;
                        }
                        h(true);
                        m(a > 0, _(p.query));
                        l.reposition(p.clientRect);
                    }
                },
                onUpdate (p) {
                    if (i != null) {
                        o.trackActive(p.editor, p.range.from);
                        a = p.items.length;
                        i.updateProps(u(p));
                        if (o.trackResults(p.query, a > 0) || d) {
                            h(false);
                            m(false);
                            return;
                        }
                        h(true);
                        m(a > 0, _(p.query));
                        l?.reposition(p.clientRect);
                    }
                },
                onKeyDown (p) {
                    if (d) {
                        return false;
                    }
                    if (p.event.key === "Escape" && f) {
                        p.event.stopPropagation();
                        o.markEscapeDismissal();
                        return false;
                    }
                    if (a === 0) {
                        return false;
                    }
                    return i?.ref?.onKeyDown(p.event) ?? false;
                },
                onExit () {
                    y();
                }
            };
        })
    };
}
function An(label) {
    return `@${label ?? ""}`;
}
const Ln = {
    "/": new a("sand-skill-suggestion-/"),
    "@": new a("sand-skill-suggestion-@")
};
const zi = c_2.create({
    name: km,
    group: "inline",
    inline: true,
    atom: true,
    selectable: true,
    addAttributes () {
        return {
            id: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-id"),
                renderHTML: (t)=>{
                    if (typeof t.id === "string") {
                        return {
                            "data-id": t.id
                        };
                    }
                    return {};
                }
            },
            label: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-label"),
                renderHTML: (t)=>{
                    if (typeof t.label === "string") {
                        return {
                            "data-label": t.label
                        };
                    }
                    return {};
                }
            },
            iconId: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-icon-id"),
                renderHTML: (t)=>{
                    if (typeof t.iconId === "string") {
                        return {
                            "data-icon-id": t.iconId
                        };
                    }
                    return {};
                }
            },
            iconUrl: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-icon-url"),
                renderHTML: (t)=>{
                    if (typeof t.iconUrl === "string") {
                        return {
                            "data-icon-url": t.iconUrl
                        };
                    }
                    return {};
                }
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: 'span[data-type="skill-reference"][data-id]'
            },
            {
                tag: 'span[data-type="workflow-reference"][data-id]'
            }
        ];
    },
    renderHTML ({ node, HTMLAttributes }) {
        return [
            "span",
            m({
                "data-type": "skill-reference",
                class: "sand-skill-chip"
            }, HTMLAttributes),
            An(node.attrs.label)
        ];
    },
    renderText ({ node }) {
        return An(node.attrs.label);
    },
    addNodeView () {
        return De(js);
    },
    addProseMirrorPlugins () {
        const suggestion = this.options.suggestion;
        const plumbing = this.options.plumbing;
        const name = this.name;
        return suggestion.triggers.map((char)=>Xt({
                editor: this.editor,
                char,
                pluginKey: Ln[char],
                allowSpaces: true,
                allowedPrefixes: null,
                findSuggestionMatch: plumbing.findSuggestionMatch,
                command: ({ editor, range, props })=>{
                    editor.chain().focus().insertContentAt(range, [
                        {
                            type: name,
                            attrs: {
                                id: props.id,
                                label: props.label,
                                iconId: props.iconId ?? null,
                                iconUrl: props.iconUrl ?? null
                            }
                        },
                        {
                            type: "text",
                            text: " "
                        }
                    ]).run();
                },
                ...Bi(suggestion, char, plumbing, (r)=>{
                    const r_state = r.state;
                    return r_state == null || Ln[char].getState(r_state)?.active !== false;
                })
            }));
    }
});
function ZsComponent(t) {
    ZsComponent.d = 781;
    const e = c_1.c(11);
    const { node, editor, selected } = t;
    let o;
    if (e[0] !== editor || e[1] !== selected) {
        o = {
            editor,
            selected
        };
        e[0] = editor;
        e[1] = selected;
        e[2] = o;
    } else {
        o = e[2];
    }
    const i = pt(o);
    const label = node.attrs.label;
    if (typeof label !== "string" || label.length === 0) {
        let u;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            u = <Oe1 as="span"/>;
            e[3] = u;
        } else {
            u = e[3];
        }
        return u;
    }
    let a;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        a = {
            verticalAlign: "top"
        };
        e[4] = a;
    } else {
        a = e[4];
    }
    let status;
    if (e[5] !== node.attrs.status) {
        status = ks_1(node.attrs.status);
        e[5] = node.attrs.status;
        e[6] = status;
    } else {
        status = e[6];
    }
    let c;
    if (e[7] !== i || e[8] !== label || e[9] !== status) {
        c = <Oe1 as="span" data-type="todo-reference" style={a}><Go1 isSelected={i} label={label} status={status}/></Oe1>;
        e[7] = i;
        e[8] = label;
        e[9] = status;
        e[10] = c;
    } else {
        c = e[10];
    }
    return c;
}
function Pn(label) {
    if (typeof label === "string") {
        return label;
    }
    return "";
}
function On(t) {
    return i_1._({
        id: "p2S3XO",
        values: {
            label: t
        }
    });
}
const Fi = c_2.create({
    name: "todoReference",
    group: "inline",
    inline: true,
    atom: true,
    selectable: true,
    addAttributes () {
        return {
            id: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-id"),
                renderHTML: (t)=>{
                    if (typeof t.id === "string") {
                        return {
                            "data-id": t.id
                        };
                    }
                    return {};
                }
            },
            label: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-label"),
                renderHTML: (t)=>{
                    if (typeof t.label === "string") {
                        return {
                            "data-label": t.label
                        };
                    }
                    return {};
                }
            },
            status: {
                default: null,
                parseHTML: (t)=>t.getAttribute("data-status"),
                renderHTML: (t)=>{
                    if (typeof t.status === "string") {
                        return {
                            "data-status": t.status
                        };
                    }
                    return {};
                }
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: 'span[data-type="todo-reference"][data-label]'
            }
        ];
    },
    renderHTML ({ node, HTMLAttributes }) {
        return [
            "span",
            m({
                "data-type": "todo-reference"
            }, HTMLAttributes),
            On(Pn(node.attrs.label))
        ];
    },
    renderText ({ node }) {
        return On(Pn(node.attrs.label));
    },
    addNodeView () {
        return De(ZsComponent);
    }
});
function Wi(node, e) {
    const n = node.type.name === "orderedList" ? Number(node.attrs.start) : null;
    const s = [];
    node.forEach((r, o, i)=>{
        const l = n == null ? "- " : `${n + i}. `;
        const a = u_2(r, {
            blockSeparator: `
`,
            textSerializers: e
        });
        s.push(l + a.replaceAll(`
`, `
${" ".repeat(l.length)}`));
    });
    return s.join(`
`);
}
function Xi(schema) {
    const e = {
        ...t_1(schema),
        ...kw
    };
    const n = ({ node })=>Wi(node, e);
    return Object.assign(e, {
        bulletList: n,
        orderedList: n
    });
}
function Pt(doc, schema) {
    return u_2(doc, {
        textSerializers: Xi(schema)
    });
}
function Qi(t) {
    return {
        ...t_1(t),
        [bs.name]: ({ node })=>bi(node.attrs),
        [Bs]: ({ node })=>zo(node.attrs),
        [km]: ({ node })=>_i(node.attrs)
    };
}
function Yi(doc, schema, n) {
    const s = Qi(schema);
    let r = Math.min(doc.content.size, n);
    let o = r_2(doc, {
        from: 0,
        to: r
    }, {
        textSerializers: s
    });
    while(o.length < n && r < doc.content.size){
        r = Math.min(doc.content.size, r * 2);
        o = r_2(doc, {
            from: 0,
            to: r
        }, {
            textSerializers: s
        });
    }
    return o;
}
const Ji = {
    prompt: {
        paragraph: p_1(kt.promptParagraph).className ?? null,
        link: p_1(kt.promptLink).className ?? null,
        emptyEditor: r_3("is-editor-empty", p_1(kt.promptEmptyEditor).className)
    },
    "skill-mention": {
        paragraph: null,
        link: null,
        emptyEditor: r_3("is-editor-empty", p_1(kt.skillMentionEmptyEditor).className)
    }
};
const Zi = new Set([
    "bulletList",
    "orderedList",
    "listItem"
]);
const el = n.extend({
    addExtensions () {
        return (this.parent?.() ?? []).map((t)=>{
            if (Zi.has(t.name)) {
                return t.extend({
                    addKeyboardShortcuts: ()=>({})
                });
            }
            return t;
        });
    }
});
const Dn = {
    HTMLAttributes: aO(kt.promptList)
};
function tl(t) {
    if (t) {
        return {
            bulletList: Dn,
            orderedList: Dn,
            trailingNode: false
        };
    }
    return {
        bulletList: false,
        orderedList: false
    };
}
const plumbing = {
    findSuggestionMatch: Zt,
    createDismissal,
    createPopup: (t, e)=>G(t, {
            caretGapPx: I_1,
            maxHeightPx: e.maxHeightPx
        })
};
function jn(label, e) {
    return `@${label ?? e ?? ""}`;
}
const sl = j_2.create({
    name: "sandScrollCaretIntoView",
    addProseMirrorPlugins () {
        return [
            new P({
                key: new a("sand-scroll-caret-into-view"),
                appendTransaction (t, e, n) {
                    if (!t.some((s)=>s.docChanged) || !n.selection.empty || t.some((s)=>s.scrolledIntoView)) {
                        return null;
                    }
                    return n.tr.scrollIntoView();
                }
            })
        ];
    }
});
const rl = c_3(undefined);
function ol(editor) {
    return editor?.storage.sandComposerDirection ?? rl;
}
const tt = new a("sand-composer-direction");
function $n(doc, schema) {
    return ku(Yi(doc, schema, kv));
}
const il = j_2.create({
    name: "sandComposerDirection",
    addStorage () {
        return c_3(undefined);
    },
    addProseMirrorPlugins () {
        const storage = this.storage;
        return [
            new P({
                key: tt,
                state: {
                    init: (e, n)=>$n(n.doc, n.schema),
                    apply: (e, n, s, r)=>{
                        if (e.docChanged) {
                            return $n(r.doc, r.schema);
                        }
                        return n;
                    }
                },
                props: {
                    attributes: (e)=>({
                            dir: tt.getState(e) ?? "ltr"
                        })
                },
                view: (e)=>{
                    storage.set(tt.getState(e.state));
                    return {
                        update (n) {
                            storage.set(tt.getState(n.state));
                        }
                    };
                }
            })
        ];
    }
});
function ll(t) {
    const firstChild = t.doc.firstChild;
    return firstChild != null && firstChild.isTextblock && q_1(t.doc) && t.selection.anchor <= firstChild.nodeSize;
}
const al = j_2.create({
    name: "sandAriaPlaceholder",
    addProseMirrorPlugins () {
        const { placeholder } = this.options;
        return [
            new P({
                key: new a("sand-aria-placeholder"),
                props: {
                    attributes: (e)=>{
                        if (ll(e)) {
                            return {
                                "aria-placeholder": placeholder()
                            };
                        }
                        return {};
                    }
                }
            })
        ];
    }
});
const cl = j_2.create({
    name: "sandDocumentToken",
    addProseMirrorPlugins () {
        return [
            pi()
        ];
    }
});
const ul = typeof navigator !== "undefined" && /mac/i.test(navigator.platform);
function dl(t, e) {
    if (!e || !t.ctrlKey || t.metaKey || t.altKey) {
        return null;
    }
    const n = t.key.toLowerCase();
    if (n !== "a" && n !== "e") {
        return null;
    }
    return {
        alter: t.shiftKey ? "extend" : "move",
        direction: n === "e" ? "forward" : "backward"
    };
}
function fl(parent, parentOffset, direction) {
    const hardBreak = parent.type.schema.nodes.hardBreak;
    if (direction === "backward") {
        let i = 0;
        parent.forEach((l, a)=>{
            if (hardBreak != null && l.type === hardBreak && a + l.nodeSize <= parentOffset) {
                i = a + l.nodeSize;
            }
        });
        return i;
    }
    let size = parent.content.size;
    let o = false;
    parent.forEach((i, l)=>{
        if (!o && hardBreak != null && i.type === hardBreak && l >= parentOffset) {
            size = l;
            o = true;
        }
    });
    return size;
}
function pl(t, e) {
    const { state } = t;
    const { selection } = state;
    const selection_$head = selection.$head;
    if (!selection_$head.parent.isTextblock) {
        return false;
    }
    const o = fl(selection_$head.parent, selection_$head.parentOffset, e.direction);
    const i = selection_$head.start() + o;
    const l = e.alter === "extend" ? selection.anchor : i;
    t.dispatch(state.tr.setSelection(T_1.create(state.doc, l, i)).scrollIntoView());
    return true;
}
const hl = j_2.create({
    name: "sandMacEmacsLineMotion",
    addProseMirrorPlugins () {
        return [
            new P({
                key: new a("sand-mac-emacs-line-motion"),
                props: {
                    handleKeyDown (t, e) {
                        const n = dl(e, ul);
                        if (n == null) {
                            return false;
                        }
                        return pl(t, n);
                    }
                }
            })
        ];
    }
});
const ml = new RegExp("\\.\\p{L}|\\w:\\S|localhost", "iu");
function gl(find) {
    return (e, n)=>{
        if (ml.test(e)) {
            return find(e, n);
        }
        return [];
    };
}
const yl = o.extend({
    inclusive () {
        return false;
    },
    addPasteRules () {
        return (this.parent?.() ?? []).map((t)=>{
            if (typeof t.find === "function") {
                return new p_2({
                    find: gl(t.find),
                    handler: t.handler
                });
            }
            return t;
        });
    }
});
function bl(t, e) {
    if (t == null || typeof t === "string") {
        return t;
    }
    if (Array.isArray(t)) {
        return t.map((n)=>Kt(n, e));
    }
    return Kt(t, e);
}
function xl(t, e) {
    if (t == null || typeof t === "string") {
        return false;
    }
    return (Array.isArray(t) ? t : [
        t
    ]).some((s)=>Fs(s, e));
}
function Fs(t, e) {
    if (t.type != null && e.nodes[t.type] == null) {
        return true;
    }
    return Array.isArray(t.content) && t.content.some((n)=>Fs(n, e));
}
function Kt(t, e) {
    const n = {
        ...t
    };
    if (Array.isArray(t.marks)) {
        n.marks = t.marks.filter((s)=>e.marks[s.type] != null);
    }
    if (Array.isArray(t.content)) {
        n.content = t.content.map((s)=>Kt(s, e));
    }
    return n;
}
function Sl(t) {
    const e = Ji[t.surface];
    const n = t.isRichTextEnabled === true;
    const s = [
        el.configure({
            blockquote: false,
            bold: false,
            code: false,
            codeBlock: false,
            heading: false,
            horizontalRule: false,
            italic: false,
            link: false,
            paragraph: {
                HTMLAttributes: e.paragraph == null ? {} : {
                    class: e.paragraph
                }
            },
            strike: false,
            underline: false,
            undoRedo: {
                newGroupDelay: 100
            },
            ...tl(n)
        }),
        yl.configure({
            HTMLAttributes: e.link == null ? {} : {
                class: e.link
            },
            openOnClick: false,
            defaultProtocol: "https"
        }),
        sl,
        hl,
        cl
    ];
    if (n) {
        s.push(Ei);
    }
    const t_placeholder = t.placeholder;
    if (t_placeholder != null) {
        s.push(i_2_1.configure({
            placeholder: ({ node })=>{
                if (node.isTextblock) {
                    return t_placeholder();
                }
                return "";
            },
            emptyEditorClass: e.emptyEditor,
            showOnlyWhenEditable: false
        }), al.configure({
            placeholder: t_placeholder
        }));
    }
    const t_mention = t.mention;
    if (t_mention != null) {
        s.push(bs.extend({
            selectable: true,
            parseHTML () {
                return [
                    {
                        tag: 'span[data-type="mention"][data-id]'
                    }
                ];
            },
            addNodeView () {
                return De(PsComponent);
            }
        }).configure({
            HTMLAttributes: {
                class: "sand-mention"
            },
            renderText: ({ node })=>jn(node.attrs.label, node.attrs.id),
            renderHTML: ({ options, node })=>[
                    "span",
                    m({
                        "data-type": "mention"
                    }, options.HTMLAttributes),
                    jn(node.attrs.label, node.attrs.id)
                ],
            suggestion: yi(t_mention)
        }));
    }
    const t_skill = t.skill;
    if (t_skill != null) {
        s.push(zi.configure({
            suggestion: t_skill,
            plumbing
        }));
    }
    const suggestion = t.surface === "prompt" ? t.emoji : undefined;
    if (suggestion != null) {
        s.push(Oi.configure({
            suggestion
        }));
    }
    if (t.surface === "prompt") {
        s.push(Vi.configure({
            suggestion: t.prReference ?? null
        }));
        s.push(Fi);
        s.push(Bo);
        s.push(il);
    }
    return s;
}
const El = /\s/u;
const vl = /\s+/gu;
function kl(schema, e, n) {
    const s = e.replace(/\r\n?/g, `
`).replace(/\n$/, "");
    return Nl(schema, s, Rl(s, n));
}
function Rl(t, e) {
    if (!_l(e)) {
        return [];
    }
    const n = wl(e);
    if (n.linkRuns.length === 0) {
        return [];
    }
    const s = Il(t);
    const r = Cl(s.units, n.units);
    if (r === undefined) {
        return [];
    }
    return n.linkRuns.flatMap((o)=>{
        const i = Tl(o, r, s.offsets);
        if (i === undefined) {
            return [];
        }
        return [
            i
        ];
    });
}
function _l(t) {
    let e = false;
    t.descendants((n)=>{
        e ||= n.marks.length > 0;
        return !e;
    });
    return e;
}
function Il(t) {
    let e = "";
    const offsets = [];
    for(let s = 0; s < t.length; s++){
        const r = t.charAt(s);
        if (!El.test(r)) {
            e += r;
            offsets.push(s);
        }
    }
    return {
        units: e,
        offsets
    };
}
function wl(t) {
    let e = "";
    const linkRuns = [];
    let s;
    const r = ()=>{
        if (s !== undefined && e.length > s.start) {
            linkRuns.push({
                start: s.start,
                end: e.length,
                marks: s.marks
            });
        }
        s = undefined;
    };
    t.descendants((o)=>{
        if (s === undefined || !o.isInline || !M.sameSet(o.marks, s.marks)) {
            r();
            if (o.isInline && o.marks.length > 0) {
                s = {
                    start: e.length,
                    marks: o.marks
                };
            }
        }
        e += (o.text ?? "").replace(vl, "");
    });
    r();
    return {
        units: e,
        linkRuns
    };
}
function Cl(units, e) {
    const earliest = [];
    let s = 0;
    for(let o = 0; o < e.length; o++){
        while(s < units.length && units.charCodeAt(s) !== e.charCodeAt(o)){
            s++;
        }
        if (s === units.length) {
            return;
        }
        earliest.push(s);
        s++;
    }
    const latest = [];
    s = units.length - 1;
    for(let o = e.length - 1; o >= 0; o--){
        while(s >= 0 && units.charCodeAt(s) !== e.charCodeAt(o)){
            s--;
        }
        latest.push(s);
        s--;
    }
    latest.reverse();
    return {
        earliest,
        latest
    };
}
function Tl(t, { earliest, latest }, offsets) {
    const r = earliest.slice(t.start, t.end);
    const [o] = r;
    if (o === undefined) {
        return;
    }
    const i = r.every((c, u)=>c === latest[t.start + u]);
    const l = r.every((c, u)=>c === o + u);
    if (!i || !l) {
        return;
    }
    const a = offsets[o];
    const d = offsets[o + r.length - 1];
    if (!(a === undefined || d === undefined)) {
        return {
            from: a,
            to: d + 1,
            marks: t.marks
        };
    }
}
function Nl(schema, e, n) {
    const s = [];
    let r = 0;
    for (const o of n){
        Ot(s, schema, e.slice(r, o.from), M.none);
        Ot(s, schema, e.slice(o.from, o.to), o.marks);
        r = o.to;
    }
    Ot(s, schema, e.slice(r), M.none);
    return F.fromArray(s);
}
function Ot(t, e, n, s) {
    for (const [r, o] of n.split(`
`).entries()){
        if (r > 0) {
            t.push(e.node("hardBreak", null, F.empty, s));
        }
        if (o.length > 0) {
            t.push(e.text(o, s));
        }
    }
}
const Ws = new WeakSet;
function Dt({ tr }) {
    z(tr);
    return true;
}
function Hn(t, richText) {
    richText == null || richText.length === 0 || t.isEmpty || JSON.stringify(t.getJSON()) !== richText && t.emit("update", {
        editor: t,
        transaction: t.state.tr,
        appendedTransactions: []
    });
}
function Ml(t, e, slotKey) {
    return t != null && t.editor === e && t.slotKey === slotKey;
}
function Un(t, e) {
    return e != null && t.view.dom.parentElement === e && t.view.dom.isConnected;
}
function Al(t) {
    const body = new DOMParser().parseFromString(t, "text/html").body;
    return body.querySelector("li") != null && body.querySelector("pre") == null;
}
function Gt(t, e) {
    const n = d7(t.richText, t.prompt);
    if (xl(n, e)) {
        return {
            content: d8(t.prompt ?? ""),
            richText: undefined
        };
    }
    return {
        content: bl(n, e),
        richText: t.richText
    };
}
function Ll(t, content) {
    const doc = w(content, t.schema);
    t.view.updateState(x.create({
        schema: t.schema,
        doc,
        selection: y.atEnd(doc),
        plugins: t.state.plugins
    }));
}
function Vn(t, generation, prompt, richText) {
    const extensions = Sl(t);
    return {
        generation,
        prompt,
        richText,
        extensions,
        content: Gt({
            prompt,
            richText
        }, v(extensions)).content
    };
}
function usePl(t) {
    const e = c_1.c(128);
    const { fieldClassName, fieldLabel, isAutoFocusDisabled, isGroupChat, isRichTextEnabled, initialPrompt, initialRichText, slotKey, getMentionMembers, getMentionPeople, getSkills, getAppActions, getPrReferences, getMcpReferences, resolveSkillIcon, getPlaceholder, editorRef, bindings, onPromptChange, onFieldLayoutChange, onFieldCleared, consumeAutoFocusSuppression, takeHandoverFocus, registerControls } = t;
    const C = getMentionPeople === undefined ? Ul : getMentionPeople;
    const { _: __1 } = u_1();
    let I;
    if (e[0] !== bindings) {
        I = ()=>bindings;
        e[0] = bindings;
        e[1] = I;
    } else {
        I = e[1];
    }
    const E = x_1(I);
    const LRef = r_1.useRef(null);
    const SRef = r_1.useRef(false);
    const [D, setD] = r_1.useState(null);
    const { uiState } = b7();
    const q = kx("at");
    let H;
    if (e[2] !== q.isHidden) {
        H = ()=>!q.isHidden;
        e[2] = q.isHidden;
        e[3] = H;
    } else {
        H = e[3];
    }
    const isEnabled = x_1(H);
    const X = bT();
    let Y;
    if (e[4] !== X) {
        Y = ()=>{
            for (const P of kz){
                X(kA[P].gate);
            }
            X("sand_rich_text");
            return Hl;
        };
        e[4] = X;
        e[5] = Y;
    } else {
        Y = e[5];
    }
    i_3(Y);
    const Z = ky();
    let le;
    if (e[6] !== q.isExperimentStarted) {
        le = {
            at: q.isExperimentStarted
        };
        e[6] = q.isExperimentStarted;
        e[7] = le;
    } else {
        le = e[7];
    }
    const Ce = le;
    let je;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        je = new Set;
        e[8] = je;
    } else {
        je = e[8];
    }
    const nnRef = r_1.useRef(je);
    let $e;
    if (e[9] !== Z || e[10] !== Ce) {
        $e = ()=>{
            for (const P of kz){
                Ce[P] && (nnRef.current.has(P) || (nnRef.current.add(P), Z(P)));
            }
            return $l;
        };
        e[9] = Z;
        e[10] = Ce;
        e[11] = $e;
    } else {
        $e = e[11];
    }
    i_3($e);
    let He;
    if (e[12] !== uiState.mentionRecents) {
        He = ()=>uiState.mentionRecents.get();
        e[12] = uiState.mentionRecents;
        e[13] = He;
    } else {
        He = e[13];
    }
    const mt = He;
    const uiState_recordMentionRecent = uiState.recordMentionRecent;
    let Ue;
    if (e[14] !== uiState.emojiRecents) {
        Ue = ()=>uiState.emojiRecents.get();
        e[14] = uiState.emojiRecents;
        e[15] = Ue;
    } else {
        Ue = e[15];
    }
    const yt = Ue;
    const uiState_recordEmojiRecent = uiState.recordEmojiRecent;
    const getMembers = x_1(getMentionMembers);
    const getPeople = x_1(C);
    const fe = x_1(getSkills);
    const getActions = x_1(getAppActions);
    const getCandidates = x_1(getPrReferences);
    const getMcpReferences_1 = x_1(getMcpReferences);
    const resolveSkillIcon_1 = x_1(resolveSkillIcon);
    let Ve;
    if (e[16] !== isGroupChat) {
        Ve = ()=>isGroupChat;
        e[16] = isGroupChat;
        e[17] = Ve;
    } else {
        Ve = e[17];
    }
    const allowEveryone = x_1(Ve);
    let qe;
    if (e[18] !== fe) {
        qe = ()=>fe().filter(jl);
        e[18] = fe;
        e[19] = qe;
    } else {
        qe = e[19];
    }
    const _t = qe;
    let Ke;
    if (e[20] !== editorRef) {
        Ke = ()=>kB(editorRef.current)?.view.dom ?? null;
        e[20] = editorRef;
        e[21] = Ke;
    } else {
        Ke = e[21];
    }
    const It = x_1(Ke);
    let Ge;
    if (e[22] !== It) {
        Ge = ()=>ri(It);
        e[22] = It;
        e[23] = Ge;
    } else {
        Ge = e[23];
    }
    const [R] = r_1.useState(Ge);
    let mention;
    if (e[24] !== mt || e[25] !== allowEveryone || e[26] !== isEnabled || e[27] !== getMcpReferences_1 || e[28] !== getMembers || e[29] !== getPeople || e[30] !== resolveSkillIcon_1 || e[31] !== fe || e[32] !== uiState_recordMentionRecent || e[33] !== R.mention.onListboxChange || e[34] !== R.mention.onOpenChange || e[35] !== R.mention.onVisibleChange || e[36] !== R.onReportExpected || e[37] !== R.onReportSettled) {
        mention = {
            getMembers,
            getPeople,
            getSkills: fe,
            getMcpReferences: getMcpReferences_1,
            getRecents: mt,
            recordRecent: uiState_recordMentionRecent,
            resolveSkillIcon: resolveSkillIcon_1,
            onOpenChange: R.mention.onOpenChange,
            onVisibleChange: R.mention.onVisibleChange,
            onListboxChange: R.mention.onListboxChange,
            onReportExpected: R.onReportExpected,
            onReportSettled: R.onReportSettled,
            allowEveryone,
            isEnabled
        };
        e[24] = mt;
        e[25] = allowEveryone;
        e[26] = isEnabled;
        e[27] = getMcpReferences_1;
        e[28] = getMembers;
        e[29] = getPeople;
        e[30] = resolveSkillIcon_1;
        e[31] = fe;
        e[32] = uiState_recordMentionRecent;
        e[33] = R.mention.onListboxChange;
        e[34] = R.mention.onOpenChange;
        e[35] = R.mention.onVisibleChange;
        e[36] = R.onReportExpected;
        e[37] = R.onReportSettled;
        e[38] = mention;
    } else {
        mention = e[38];
    }
    let triggers;
    if (e[39] === Symbol.for("react.memo_cache_sentinel")) {
        triggers = [
            "/"
        ];
        e[39] = triggers;
    } else {
        triggers = e[39];
    }
    let me;
    if (e[40] !== getActions || e[41] !== resolveSkillIcon_1 || e[42] !== _t || e[43] !== R.onReportExpected || e[44] !== R.onReportSettled || e[45] !== R.skill.onListboxChange || e[46] !== R.skill.onOpenChange || e[47] !== R.skill.onVisibleChange) {
        me = {
            getSkills: _t,
            getActions,
            resolveSkillIcon: resolveSkillIcon_1,
            onOpenChange: R.skill.onOpenChange,
            onVisibleChange: R.skill.onVisibleChange,
            onListboxChange: R.skill.onListboxChange,
            onReportExpected: R.onReportExpected,
            onReportSettled: R.onReportSettled,
            triggers
        };
        e[40] = getActions;
        e[41] = resolveSkillIcon_1;
        e[42] = _t;
        e[43] = R.onReportExpected;
        e[44] = R.onReportSettled;
        e[45] = R.skill.onListboxChange;
        e[46] = R.skill.onOpenChange;
        e[47] = R.skill.onVisibleChange;
        e[48] = me;
    } else {
        me = e[48];
    }
    let emoji;
    if (e[49] !== yt || e[50] !== uiState_recordEmojiRecent || e[51] !== R.emoji.onListboxChange || e[52] !== R.emoji.onOpenChange || e[53] !== R.onReportExpected || e[54] !== R.onReportSettled) {
        emoji = {
            onOpenChange: R.emoji.onOpenChange,
            onListboxChange: R.emoji.onListboxChange,
            onReportExpected: R.onReportExpected,
            onReportSettled: R.onReportSettled,
            getRecents: yt,
            recordRecent: uiState_recordEmojiRecent
        };
        e[49] = yt;
        e[50] = uiState_recordEmojiRecent;
        e[51] = R.emoji.onListboxChange;
        e[52] = R.emoji.onOpenChange;
        e[53] = R.onReportExpected;
        e[54] = R.onReportSettled;
        e[55] = emoji;
    } else {
        emoji = e[55];
    }
    let prReference;
    if (e[56] !== getCandidates || e[57] !== R.hash.onListboxChange || e[58] !== R.hash.onOpenChange || e[59] !== R.onReportExpected || e[60] !== R.onReportSettled) {
        prReference = {
            getCandidates,
            onOpenChange: R.hash.onOpenChange,
            onListboxChange: R.hash.onListboxChange,
            onReportExpected: R.onReportExpected,
            onReportSettled: R.onReportSettled
        };
        e[56] = getCandidates;
        e[57] = R.hash.onListboxChange;
        e[58] = R.hash.onOpenChange;
        e[59] = R.onReportExpected;
        e[60] = R.onReportSettled;
        e[61] = prReference;
    } else {
        prReference = e[61];
    }
    let ze;
    if (e[62] !== getPlaceholder || e[63] !== isRichTextEnabled || e[64] !== mention || e[65] !== me || e[66] !== emoji || e[67] !== prReference) {
        ze = {
            surface: "prompt",
            isRichTextEnabled,
            placeholder: getPlaceholder,
            mention,
            skill: me,
            emoji,
            prReference
        };
        e[62] = getPlaceholder;
        e[63] = isRichTextEnabled;
        e[64] = mention;
        e[65] = me;
        e[66] = emoji;
        e[67] = prReference;
        e[68] = ze;
    } else {
        ze = e[68];
    }
    const Fe = ze;
    const [Te, setTe] = r_1.useState(0);
    let We;
    if (e[69] !== Te || e[70] !== Fe || e[71] !== initialPrompt || e[72] !== initialRichText) {
        We = ()=>Vn(Fe, Te, initialPrompt, initialRichText);
        e[69] = Te;
        e[70] = Fe;
        e[71] = initialPrompt;
        e[72] = initialRichText;
        e[73] = We;
    } else {
        We = e[73];
    }
    const [te, setTe_1] = r_1.useState(We);
    let be;
    if (e[74] !== __1 || e[75] !== fieldLabel) {
        be = fieldLabel ?? __1({
            id: "W9uQXX"
        });
        e[74] = __1;
        e[75] = fieldLabel;
        e[76] = be;
    } else {
        be = e[76];
    }
    let attributes;
    if (e[77] !== fieldClassName || e[78] !== be) {
        attributes = {
            class: fieldClassName,
            spellcheck: "true",
            "aria-label": be,
            "aria-multiline": "true",
            role: "textbox"
        };
        e[77] = fieldClassName;
        e[78] = be;
        e[79] = attributes;
    } else {
        attributes = e[79];
    }
    let handleKeyDown;
    if (e[80] !== editorRef || e[81] !== E || e[82] !== R) {
        handleKeyDown = (P, T)=>{
            if (kC(T)) {
                T.preventDefault();
                if (!T.repeat) {
                    kD((U)=>{
                        if (P.dom.isConnected) {
                            kG(P, U);
                        }
                    }, (U)=>{
                        E().onStageFiles([
                            U
                        ]);
                    }, ()=>kB(editorRef.current)?.view === P && P.dom.isConnected);
                }
                return true;
            }
            if (R.isAnyMenuOpen() && (T.key === "Enter" || T.key === "Tab" || T.key === "Escape" || T.key === "ArrowUp" || T.key === "ArrowDown") || T.key === "Escape" && R.isAnyMenuVisible()) {
                return false;
            }
            if (T.key === "Tab" && !T.isComposing && kn(P.state)) {
                T.preventDefault();
                (T.shiftKey ? Ri : ki)(P.state, P.dispatch);
                return true;
            }
            if (T.key === "Tab" && !T.shiftKey && !T.isComposing) {
                T.preventDefault();
                if (!wn(P, {
                    kind: "tab"
                })) {
                    P.dispatch(P.state.tr.insertText("	").scrollIntoView());
                }
                return true;
            }
            if (T.key === "Enter" && T.shiftKey && !T.metaKey && !T.ctrlKey && !T.isComposing && kn(P.state)) {
                T.preventDefault();
                vi(P.state, P.dispatch);
                return true;
            }
            if (T.key === "Enter" && !T.shiftKey && !T.isComposing) {
                T.preventDefault();
                T.repeat || (E().isVoiceSessionActive ? E().onVoiceEnterKey() : wn(P, {
                    kind: "enter",
                    submit: ()=>{
                        const { doc, schema } = P.state;
                        E().onSubmit({
                            prompt: Pt(doc, schema),
                            richText: q_1(doc) ? undefined : JSON.stringify(doc.toJSON())
                        });
                    }
                }) || E().onSubmit());
                return true;
            }
            if (T.key === "Escape" && !T.isComposing) {
                T.preventDefault();
                if (E().isVoiceSessionActive) {
                    return E().cancelVoiceAndRefocus(), true;
                }
                return E().cancelReply() || P.dom.blur(), true;
            }
            return false;
        };
        e[80] = editorRef;
        e[81] = E;
        e[82] = R;
        e[83] = handleKeyDown;
    } else {
        handleKeyDown = e[83];
    }
    let handlePaste;
    if (e[84] !== isRichTextEnabled || e[85] !== E) {
        handlePaste = (P, T, U)=>{
            const K = kE(T.clipboardData);
            if (K.length > 0) {
                T.preventDefault();
                E().onStageFiles(K);
                return true;
            }
            const ne = T.clipboardData?.getData("text/plain") ?? "";
            const Ne = kF(ne);
            if (Ne != null) {
                T.preventDefault();
                E().onStageFiles([
                    Ne
                ]);
                return true;
            }
            const sn = T.clipboardData?.getData("text/html") ?? "";
            if (!ne.includes(`
`) || sn.includes("data-pm-slice") || isRichTextEnabled && Al(sn)) {
                return false;
            }
            T.preventDefault();
            const Zs = Ws.has(U) ? U.content : F.empty;
            P.dispatch(P.state.tr.replaceSelection(new S(kl(P.state.schema, ne, Zs), 0, 0)).scrollIntoView());
            return true;
        };
        e[84] = isRichTextEnabled;
        e[85] = E;
        e[86] = handlePaste;
    } else {
        handlePaste = e[86];
    }
    let editorProps;
    if (e[87] !== attributes || e[88] !== handleKeyDown || e[89] !== handlePaste) {
        editorProps = {
            attributes,
            handleKeyDown,
            transformPasted,
            handlePaste
        };
        e[87] = attributes;
        e[88] = handleKeyDown;
        e[89] = handlePaste;
        e[90] = editorProps;
    } else {
        editorProps = e[90];
    }
    let onCreate;
    if (e[91] !== onFieldLayoutChange) {
        onCreate = ()=>{
            onFieldLayoutChange();
        };
        e[91] = onFieldLayoutChange;
        e[92] = onCreate;
    } else {
        onCreate = e[92];
    }
    let onUpdate;
    if (e[93] !== editorRef || e[94] !== onFieldLayoutChange || e[95] !== onPromptChange || e[96] !== E) {
        onUpdate = ({ editor })=>{
            E().dismissVoiceError();
            const doc = editor.state.doc;
            const K = Pt(doc, editor.schema);
            const ne = editor.isEmpty ? undefined : JSON.stringify(editor.getJSON());
            onPromptChange(K, ne);
            const Ne = kB(editorRef.current);
            onFieldLayoutChange({
                plainText: Ne === editor && Ne.state.doc === doc ? K : undefined
            });
        };
        e[93] = editorRef;
        e[94] = onFieldLayoutChange;
        e[95] = onPromptChange;
        e[96] = E;
        e[97] = onUpdate;
    } else {
        onUpdate = e[97];
    }
    let onDestroy;
    if (e[98] === Symbol.for("react.memo_cache_sentinel")) {
        onDestroy = ()=>{
            setTe(Ol);
        };
        e[98] = onDestroy;
    } else {
        onDestroy = e[98];
    }
    let Qe;
    if (e[99] !== te.content || e[100] !== te.extensions || e[101] !== editorProps || e[102] !== onCreate || e[103] !== onUpdate) {
        Qe = {
            extensions: te.extensions,
            content: te.content,
            editorProps,
            onCreate,
            onUpdate,
            onDestroy
        };
        e[99] = te.content;
        e[100] = te.extensions;
        e[101] = editorProps;
        e[102] = onCreate;
        e[103] = onUpdate;
        e[104] = Qe;
    } else {
        Qe = e[104];
    }
    let Ye;
    if (e[105] === Symbol.for("react.memo_cache_sentinel")) {
        Ye = [];
        e[105] = Ye;
    } else {
        Ye = e[105];
    }
    const ee = useAo(Qe, Ye);
    const Ys = te.generation !== Te;
    const Js = te.prompt !== initialPrompt || te.richText !== initialRichText;
    if (ee == null && (Ys || Js)) {
        setTe_1(Vn(Fe, Te, initialPrompt, initialRichText));
    }
    let Je;
    if (e[106] !== consumeAutoFocusSuppression || e[107] !== ee || e[108] !== D || e[109] !== initialPrompt || e[110] !== initialRichText || e[111] !== isAutoFocusDisabled || e[112] !== onFieldCleared || e[113] !== onFieldLayoutChange || e[114] !== slotKey || e[115] !== takeHandoverFocus) {
        Je = ()=>{
            const P = kB(ee);
            if (P == null || !Un(P, D)) {
                return;
            }
            if (!Ml(LRef.current, P, slotKey)) {
                const U = Gt({
                    prompt: initialPrompt,
                    richText: initialRichText
                }, P.schema);
                if (LRef.current?.editor === P) {
                    Ll(P, U.content);
                    onFieldCleared();
                }
                LRef.current = {
                    editor: P,
                    slotKey
                };
                SRef.current = true;
                Hn(P, U.richText);
                onFieldLayoutChange();
            }
            if (!SRef.current) {
                return;
            }
            const T = takeHandoverFocus?.() === true;
            if (!(!T && isAutoFocusDisabled)) {
                SRef.current = false;
                if (!(!T && consumeAutoFocusSuppression?.() === true)) {
                    P.commands.setTextSelection(P.state.doc.content.size);
                    P.view.focus();
                }
            }
        };
        e[106] = consumeAutoFocusSuppression;
        e[107] = ee;
        e[108] = D;
        e[109] = initialPrompt;
        e[110] = initialRichText;
        e[111] = isAutoFocusDisabled;
        e[112] = onFieldCleared;
        e[113] = onFieldLayoutChange;
        e[114] = slotKey;
        e[115] = takeHandoverFocus;
        e[116] = Je;
    } else {
        Je = e[116];
    }
    u_3(Je);
    let Ze;
    if (e[117] !== ee || e[118] !== D || e[119] !== editorRef || e[120] !== onFieldCleared || e[121] !== onFieldLayoutChange || e[122] !== E || e[123] !== registerControls) {
        Ze = (P)=>{
            if (P == null) {
                registerControls?.(null);
                editorRef.current = null;
                return;
            }
            const T = kB(ee);
            if (T == null || !Un(T, D)) {
                registerControls?.(null);
                editorRef.current = null;
                return;
            }
            editorRef.current = T;
            onFieldLayoutChange();
            registerControls?.({
                focus: ()=>{
                    const U = kB(editorRef.current);
                    if (U != null) {
                        U.commands.setTextSelection(U.state.doc.content.size);
                        U.view.focus();
                    }
                },
                isVoiceSessionActive: ()=>E().isVoiceSessionActive,
                clearConsumed: (U)=>{
                    const K = kB(editorRef.current);
                    if (!(K == null || Pt(K.state.doc, K.schema).trim() !== U.prompt.trim())) {
                        E().cancelVoiceSession();
                        K.chain().command(Dt).clearContent(false).focus("end").run();
                        K.view.focus();
                        onFieldCleared();
                    }
                },
                restore: (U)=>{
                    const K = kB(editorRef.current);
                    if (K == null) {
                        return;
                    }
                    const ne = Gt(U, K.schema);
                    K.chain().command(Dt).setContent(ne.content, {
                        emitUpdate: false
                    }).focus("end").run();
                    Hn(K, ne.richText);
                    onFieldLayoutChange();
                },
                insertQuote: (quote)=>{
                    const K = kB(editorRef.current);
                    if (K == null) {
                        return false;
                    }
                    return K.chain().command(Dt).focus().insertContent([
                        {
                            type: cR,
                            attrs: {
                                quote
                            }
                        },
                        {
                            type: "text",
                            text: " "
                        }
                    ]).run();
                }
            });
        };
        e[117] = ee;
        e[118] = D;
        e[119] = editorRef;
        e[120] = onFieldCleared;
        e[121] = onFieldLayoutChange;
        e[122] = E;
        e[123] = registerControls;
        e[124] = Ze;
    } else {
        Ze = e[124];
    }
    const attachEditorLifecycle = Ze;
    let et;
    if (e[125] !== attachEditorLifecycle || e[126] !== ee) {
        et = {
            editor: ee,
            attachEditorHost: setD,
            attachEditorLifecycle
        };
        e[125] = attachEditorLifecycle;
        e[126] = ee;
        e[127] = et;
    } else {
        et = e[127];
    }
    return et;
}
function Ol(t) {
    return t + 1;
}
function transformPasted(t, e, n) {
    if (!n) {
        Ws.add(t);
    }
    return t;
}
function jl(t) {
    return t.trigger == null;
}
function $l() {}
function Hl() {}
function Ul() {
    return [];
}
export function PromptEditor(t) {
    PromptEditor.d = 380;
    const e = c_1.c(18);
    let n;
    let s;
    let r;
    if (e[0] !== t) {
        ({ hostClassName: n, hostStyle: s, ...r } = t);
        e[0] = t;
        e[1] = n;
        e[2] = s;
        e[3] = r;
    } else {
        n = e[1];
        s = e[2];
        r = e[3];
    }
    const { editor, attachEditorHost, attachEditorLifecycle } = usePl(r);
    let a;
    if (e[4] !== editor) {
        a = ol(editor);
        e[4] = editor;
        e[5] = a;
    } else {
        a = e[5];
    }
    const d = a;
    const dir = r_1.useSyncExternalStore(d.subscribe, d.get, d.get);
    let u;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        u = {
            display: "none"
        };
        e[6] = u;
    } else {
        u = e[6];
    }
    let f;
    if (e[7] !== attachEditorLifecycle) {
        f = <span aria-hidden ref={attachEditorLifecycle} style={u}/>;
        e[7] = attachEditorLifecycle;
        e[8] = f;
    } else {
        f = e[8];
    }
    let h;
    if (e[9] !== attachEditorHost || e[10] !== dir || e[11] !== editor || e[12] !== n || e[13] !== s) {
        h = <Io className={n} dir={dir} editor={editor} ref={attachEditorHost} style={s}/>;
        e[9] = attachEditorHost;
        e[10] = dir;
        e[11] = editor;
        e[12] = n;
        e[13] = s;
        e[14] = h;
    } else {
        h = e[14];
    }
    let m;
    if (e[15] !== f || e[16] !== h) {
        m = <>{f}{h}</>;
        e[15] = f;
        e[16] = h;
        e[17] = m;
    } else {
        m = e[17];
    }
    return m;
}
